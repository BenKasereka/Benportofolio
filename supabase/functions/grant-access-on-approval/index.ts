// Déclenchée par un Database Webhook Supabase sur UPDATE dans access_requests
// (voir supabase/functions/README.md pour la configuration du webhook).
//
// Ne réagit qu'à une transition status → 'approved' (ignore silencieusement
// tout autre update, y compris un repassage 'approved' → 'approved' pour
// éviter d'accorder un doublon si le webhook est relivré). Génère un
// access_token, l'enregistre dans formation_access, puis envoie au client
// l'email contenant son lien d'accès unique.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!

// À remplacer par une adresse sur votre domaine une fois vérifié dans Resend
// (Domains → Add Domain) — voir supabase/functions/README.md.
const FROM_EMAIL = 'BK-BOOST Ltd. <onboarding@resend.dev>'
const SITE_URL = 'https://benkasereka.github.io/Benportofolio'

Deno.serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record
    const oldRecord = payload.old_record

    if (!record) {
      return new Response(JSON.stringify({ error: 'missing record in payload' }), { status: 400 })
    }

    const justApproved = record.status === 'approved' && oldRecord?.status !== 'approved'
    if (!justApproved) {
      return new Response(JSON.stringify({ ok: true, skipped: true }), { status: 200 })
    }

    const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

    const { data: grant, error: grantError } = await supabaseAdmin
      .from('formation_access')
      .insert({
        client_email: record.client_email,
        formation_id: record.formation_id,
      })
      .select('access_token')
      .single()

    if (grantError) {
      console.error('grant insert error', grantError)
      return new Response(JSON.stringify({ error: 'grant insert failed', detail: grantError.message }), { status: 500 })
    }

    const { error: updateError } = await supabaseAdmin
      .from('access_requests')
      .update({ access_token: grant.access_token, approved_at: new Date().toISOString() })
      .eq('id', record.id)

    if (updateError) {
      console.error('access_requests update error', updateError)
      // Non bloquant pour l'envoi de l'email : l'accès est déjà accordé.
    }

    const accessLink = `${SITE_URL}/acces/${grant.access_token}`

    const html = `
      <h2>Votre accès est activé — BK-BOOST Ltd.</h2>
      <p>Bonjour ${escapeHtml(record.client_name)},</p>
      <p>Votre paiement a été vérifié. Voici votre lien d'accès personnel à la formation :</p>
      <p><a href="${accessLink}">${accessLink}</a></p>
      <p>Ouvrez ce lien pour débloquer l'ensemble des modules. Conservez-le, il vous permettra d'y revenir depuis cet appareil.</p>
      <p>Bienvenue dans la formation !<br />BK-BOOST Ltd. — Excellence in Achievement</p>
    `

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: record.client_email,
        subject: 'Votre accès à la formation est activé',
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
    console.error('grant-access-on-approval error', error)
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
