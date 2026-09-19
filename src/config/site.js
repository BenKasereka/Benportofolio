// Source unique de vérité pour les coordonnées, liens sociaux et mentions du site.
// Modifier ici se répercute partout (navbar, footer, formulaires, sitemap, SEO).

export const site = {
  name: 'Benjamin Kasereka Vinyatsi',
  company: 'BK-BOOST Ltd.',
  tagline: 'Humanitarian Supply Chain · Audit · Data · Coaching de carrière',
  city: 'Goma, RD Congo',
  cityEn: 'Goma, DR Congo',

  email: 'kasvinyatsi7@gmail.com',
  phoneDisplay: '+243 990 260 711',
  phoneRaw: '+243990260711',
  whatsapp: '243990260711',

  linkedin: 'https://www.linkedin.com/in/benjamin-kasereka-vinyatsi-57557b2aa/',

  // URL canonique de production (utilisée pour les balises Open Graph et le sitemap)
  url: 'https://benkasereka.github.io/Benportofolio',

  // Moyens de paiement Mobile Money pour l'inscription aux formations —
  // affichables publiquement (comme n'importe quel numéro de commerce).
  // Le RIB/IBAN, lui, ne figure jamais ici : voir PaymentRegistrationForm.
  mobileMoney: [
    { provider: 'airtel', label: 'Airtel Money', number: '+243 990 260 711' },
    { provider: 'orange', label: 'Orange Money', number: '+243 851 963 303' },
  ],
}

export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`

export const mailLink = (subject, body = '') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ''
  }`
