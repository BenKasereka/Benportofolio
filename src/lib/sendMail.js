import emailjs from '@emailjs/browser'

// ── Configuration EmailJS ───────────────────────────────────────────
// Les identifiants viennent de variables d'environnement Vite, pas du code.
//
//  1. Créez un compte gratuit sur https://dashboard.emailjs.com
//  2. « Add New Service » → connectez votre Gmail → notez le Service ID
//  3. « Email Templates » → créez un template → notez le Template ID
//  4. « Account » → « General » → copiez la Public Key
//  5. En local  : créez un fichier .env à la racine (voir .env.example)
//     En CI     : ajoutez-les en « Repository secrets » GitHub, puis
//                 dans .github/workflows/deploy-pages.yml (déjà câblé)
//
// La Public Key EmailJS est conçue pour être exposée côté client — ce n'est
// pas un secret. Le Service ID et le Template ID non plus.
// ────────────────────────────────────────────────────────────────────

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/** true si les trois identifiants sont présents et non vides. */
export const isMailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

/**
 * Envoie un message via EmailJS.
 * Résout en { ok: true } ou { ok: false, reason } — ne lève jamais.
 * L'appelant décide de l'UI ; il ne doit jamais annoncer un succès non vérifié.
 */
export async function sendMail(params) {
  if (!isMailConfigured) {
    return { ok: false, reason: 'not-configured' }
  }
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      reason: 'network',
      detail: error?.text || error?.message || 'Erreur inconnue',
    }
  }
}
