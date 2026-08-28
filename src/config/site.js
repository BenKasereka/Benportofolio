// Source unique de vérité pour les coordonnées, liens sociaux et mentions du site.
// Modifier ici se répercute partout (navbar, footer, formulaires, sitemap, SEO).

export const site = {
  name: 'Benjamin Kasereka Vinyatsi',
  company: 'BK-BOOST Ltd.',
  tagline: 'Humanitarian Supply Chain · Audit · Data · Coaching de carrière',
  city: 'Goma, RD Congo',

  email: 'kasvinyatsi7@gmail.com',
  phoneDisplay: '+243 990 260 711',
  phoneRaw: '+243990260711',
  whatsapp: '243990260711',

  // ⚠️ À COMPLÉTER — remplacez par l'URL réelle de votre profil.
  // Laissez la chaîne vide pour masquer automatiquement le lien partout.
  linkedin: '',

  // URL canonique de production (utilisée pour les balises Open Graph et le sitemap)
  url: 'https://benkasereka.github.io/Benportofolio',
}

export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const mailLink = (subject, body = '') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ''
  }`
