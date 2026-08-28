import emailjs from '@emailjs/browser'

// ── Configuration EmailJS ───────────────────────────────────────────
// Les identifiants viennent de variables d'environnement Vite, pas du code
// (voir .env.example et .env.production).
//
//  1. Créez un compte gratuit sur https://dashboard.emailjs.com
//  2. « Add New Service » → connectez votre Gmail → notez le Service ID
//  3. « Email Templates » → créez un template → notez le Template ID
//  4. « Account » → « General » → copiez la Public Key
//
// Aucune de ces trois valeurs n'est un secret : EmailJS les envoie au
// navigateur pour authentifier l'appel, elles finissent de toute façon
// dans le bundle JavaScript servi au public.
//
// Deux formulaires partagent ce fichier avec des données très différentes
// (contact court vs. dossier de candidature à 32 champs) — TEMPLATE_ID_DOSSIER
// permet d'utiliser un second template EmailJS dédié au dossier, avec un
// repli silencieux sur le template principal tant qu'il n'est pas configuré.
// ────────────────────────────────────────────────────────────────────

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const TEMPLATE_ID_DOSSIER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_DOSSIER || TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/** true si les identifiants du template principal sont présents et non vides. */
export const isMailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

/**
 * Envoie un message via EmailJS.
 * Résout en { ok: true } ou { ok: false, reason } — ne lève jamais.
 * L'appelant décide de l'UI ; il ne doit jamais annoncer un succès non vérifié.
 *
 * Passez { dossier: true } pour utiliser le template dédié au dossier de
 * candidature (VITE_EMAILJS_TEMPLATE_ID_DOSSIER) plutôt que le template de
 * contact général.
 */
export async function sendMail(params, { dossier = false } = {}) {
  if (!isMailConfigured) {
    return { ok: false, reason: 'not-configured' }
  }
  const templateId = dossier ? TEMPLATE_ID_DOSSIER : TEMPLATE_ID
  try {
    await emailjs.send(SERVICE_ID, templateId, params, PUBLIC_KEY)
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      reason: 'network',
      detail: error?.text || error?.message || 'Erreur inconnue',
    }
  }
}
