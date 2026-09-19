// Déclenchée par un Database Webhook Supabase sur INSERT dans access_requests
// (voir supabase/functions/README.md pour la configuration du webhook).
//
// Génère une URL signée temporaire vers la preuve de paiement (le bucket
// reste privé — voir la migration SQL) et envoie une notification par email
// à l'administrateur via Resend.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!

const ADMIN_EMAIL = 'kasvinyatsi7@gmail.com'
// À remplacer par une adresse sur votre domaine une fois vérifié dans Resend
// (Domains → Add Domain) — voir supabase/functions/README.md.
const FROM_EMAIL = 'BK-BOOST Ltd. <onboarding@resend.dev>'

const SIGNED_URL_EXPIRY_SECONDS = 60 * 60 * 24 * 3 // 3 jours — largement suffisant pour une revue admin

const PAYMENT_METHOD_LABELS: Record<string, string> = {
  airtel: 'Airtel Money',
  orange: 'Orange Money',
  mpesa: 'M-Pesa',
  virement: 'Virement bancaire',
}

Deno.serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record

    if (!record) {
      return new Response(JSON.stringify({ error: 'missing record in payload' }), { status: 400 })
    }

    const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

    const { data: signedUrlData, error: signedUrlError } = await supabaseAdmin.storage
      .from('payment-proofs')
      .createSignedUrl(record.proof_file_path, SIGNED_URL_EXPIRY_SECONDS)

    if (signedUrlError) {
      console.error('signed url error', signedUrlError)
    }

    const proofLink = signedUrlData?.signedUrl || '(lien indisponible — voir directement dans Supabase Storage)'
    const methodLabel = PAYMENT_METHOD_LABELS[record.payment_method] || record.payment_method

    const html = `
      <h2>Nouvelle demande d'inscription — BK-BOOST Ltd.</h2>
      <p><strong>Formation :</strong> ${escapeHtml(record.formation_id)}</p>
      <p><strong>Client :</strong> ${escapeHtml(record.client_name)} (${escapeHtml(record.client_email)})</p>
      <p><strong>Moyen de paiement :</strong> ${escapeHtml(methodLabel)}</p>
      <p><strong>Preuve de paiement :</strong> <a href="${proofLink}">Voir la preuve (lien valable 3 jours)</a></p>
      <p><strong>Reçu le :</strong> ${new Date(record.created_at).toLocaleString('fr-FR')}</p>
      <hr />
      <p>Pour valider : ouvrez la table <code>access_requests</code> dans le Dashboard Supabase et passez son <code>status</code> à <code>approved</code> (ou <code>rejected</code>). L'email d'accès part automatiquement au client dès validation.</p>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `Nouvelle demande d'inscription — ${record.formation_id}`,
        html,
      }),
    })

    if (!resendResponse.ok) {
      const detail = await resendResponse.text()
      console.error('resend error', detail)
      return new Response(JSON.stringify({ error: 'email send failed', detail }), { status: 502 })
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (error) {
    console.error('notify-admin-on-request error', error)
    return new Response(JSON.stringify({ error: String(error) }), { status: 500 })
  }
})

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
