import { isSupabaseConfigured, supabase } from './supabaseClient'

export const isPaymentSystemConfigured = isSupabaseConfigured

const MAX_FILE_BYTES = 5 * 1024 * 1024 // 5 Mo
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']

/** Renvoie l'extension de fichier à utiliser dans le chemin de stockage. */
function extensionFor(file) {
  const fromType = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'application/pdf': 'pdf' }
  if (fromType[file.type]) return fromType[file.type]
  const match = /\.([a-zA-Z0-9]+)$/.exec(file.name || '')
  return match ? match[1].toLowerCase() : 'bin'
}

/**
 * Valide le fichier de preuve avant tout envoi réseau.
 * Renvoie null si valide, ou une clé de traduction d'erreur sinon.
 */
export function validateProofFile(file) {
  if (!file) return 'missingFields'
  if (file.size > MAX_FILE_BYTES) return 'fileTooLarge'
  if (file.type && !ALLOWED_TYPES.includes(file.type)) return 'fileWrongType'
  return null
}

/**
 * Soumet une demande d'inscription payante : upload de la preuve dans le
 * bucket privé `payment-proofs`, puis insertion de la ligne `access_requests`.
 *
 * Le chemin de stockage est déterminé AVANT l'upload (id généré côté client)
 * pour pouvoir l'insérer en une seule écriture — voir la migration SQL pour
 * le détail des politiques RLS qui rendent ce chemin sûr (upload seul permis,
 * jamais de lecture/liste publique).
 *
 * Résout en { ok: true } ou { ok: false, reason }, ne lève jamais.
 */
export async function submitAccessRequest({ clientName, clientEmail, formationId, paymentMethod, proofFile }) {
  if (!isPaymentSystemConfigured) {
    return { ok: false, reason: 'notConfigured' }
  }
  if (!clientName?.trim() || !clientEmail?.trim() || !proofFile) {
    return { ok: false, reason: 'missingFields' }
  }

  const fileError = validateProofFile(proofFile)
  if (fileError) {
    return { ok: false, reason: fileError }
  }

  const id = crypto.randomUUID()
  const proofFilePath = `${id}/proof.${extensionFor(proofFile)}`

  const { error: uploadError } = await supabase.storage
    .from('payment-proofs')
    .upload(proofFilePath, proofFile, { contentType: proofFile.type || undefined, upsert: false })

  if (uploadError) {
    return { ok: false, reason: 'uploadFailed', detail: uploadError.message }
  }

  const { error: insertError } = await supabase.from('access_requests').insert({
    id,
    client_name: clientName.trim(),
    client_email: clientEmail.trim(),
    formation_id: formationId,
    payment_method: paymentMethod,
    proof_file_path: proofFilePath,
  })

  if (insertError) {
    return { ok: false, reason: 'insertFailed', detail: insertError.message }
  }

  return { ok: true }
}

/**
 * Vérifie un access_token via la fonction RPC `get_access_grant` (jamais un
 * SELECT direct sur `formation_access`, qui reste entièrement verrouillée).
 *
 * Résout en le `formationId` si le token est valide, ou `null` sinon —
 * ne lève jamais.
 */
export async function verifyAccessToken(token) {
  if (!isPaymentSystemConfigured || !token) return null

  const { data, error } = await supabase.rpc('get_access_grant', { p_token: token })
  if (error || !data || data.length === 0) return null
  return data[0].formation_id
}
