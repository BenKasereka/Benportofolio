// ── Sessions de formation ────────────────────────────────────────────────
//
// Remplace l'ancien compte à rebours, qui repartait sur 3 jours pour chaque
// visiteur via le localStorage : l'offre n'expirait jamais. Une échéance
// factice est incompatible avec une marque qui vend de l'audit et de la
// conformité.
//
// Ici, la rareté est vraie ou elle n'est pas affichée du tout :
//   • `enrollmentDeadline` vide  → aucune mention d'échéance nulle part
//   • date dépassée              → aucune mention non plus (pas de « expirée »)
//   • `seatsLeft` à null         → la jauge de places n'apparaît pas
//
// ⚠️ À TENIR À JOUR — ce sont les seules valeurs à modifier avant chaque
// nouvelle session. Format ISO : 'AAAA-MM-JJ'.

export const currentSession = {
  /** Nom affiché de la session. Ex. : 'Session de mars 2026' */
  label: '',

  /** Début des cours (ISO). Vide = non annoncé. */
  startDate: '',

  /** Clôture des inscriptions (ISO). Vide = pas d'échéance affichée. */
  enrollmentDeadline: '',

  /** Places restantes. null = jauge masquée. Ne mettez que des chiffres réels. */
  seatsLeft: null,

  /** Places totales de la session. */
  seatsTotal: null,

  /** Modalité : 'En ligne', 'Présentiel — Goma', 'Hybride'… */
  format: '',
}

/** Analyse 'AAAA-MM-JJ' en Date locale ; renvoie null si vide ou invalide. */
function parseDate(iso) {
  if (!iso) return null
  const d = new Date(`${iso}T23:59:59`)
  return Number.isNaN(d.getTime()) ? null : d
}

/**
 * Renvoie l'état de la session courante, ou null s'il n'y a rien d'honnête
 * à annoncer. Les composants ne rendent rien quand cette fonction renvoie null.
 */
export function getSessionStatus(now = new Date()) {
  const deadline = parseDate(currentSession.enrollmentDeadline)
  const start = parseDate(currentSession.startDate)

  const hasDeadline = deadline && deadline > now
  const hasSeats =
    typeof currentSession.seatsLeft === 'number' && currentSession.seatsLeft > 0

  if (!hasDeadline && !hasSeats && !currentSession.label) return null

  return {
    label: currentSession.label,
    format: currentSession.format,
    startDate: start,
    deadline: hasDeadline ? deadline : null,
    daysLeft: hasDeadline ? Math.ceil((deadline - now) / 86_400_000) : null,
    seatsLeft: hasSeats ? currentSession.seatsLeft : null,
    seatsTotal: currentSession.seatsTotal,
  }
}

const DATE_FORMATS = {
  fr: new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
  en: new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
}

export const formatDate = (date, lang = 'fr') => (date ? (DATE_FORMATS[lang] ?? DATE_FORMATS.fr).format(date) : '')

// ── Période promotionnelle ───────────────────────────────────────────────
//
// Le site affichait « -50 % » en permanence, avec un prix barré jamais
// pratiqué. Un tarif standard qui n'est jamais appliqué n'est pas un tarif :
// un acheteur averti le lit comme un prix gonflé.
//
// La remise n'apparaît désormais que pendant une période datée et réelle.
// `endsOn` vide ou dépassée → seuls les tarifs standard sont affichés.

export const promo = {
  label: 'Offre de lancement',
  /** Pourcentage entier, ex. 50. */
  discountPercent: 50,
  /** Fin de la promotion (ISO 'AAAA-MM-JJ'). Vide = aucune remise affichée. */
  endsOn: '',
}

export function isPromoActive(now = new Date()) {
  const end = parseDate(promo.endsOn)
  return Boolean(end && end > now && promo.discountPercent > 0)
}
