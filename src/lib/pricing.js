import { isPromoActive, promo } from '../data/sessions'

/** Formate un montant en dollars : 100 → « 100 USD ». */
export function formatUsd(amount, prefix = '') {
  return `${prefix}${amount} USD`
}

/**
 * Calcule l'affichage tarifaire d'une formation ou d'un pack.
 *
 * Hors période promotionnelle, `original` et `badge` valent null : les
 * composants n'affichent alors ni prix barré ni pastille de remise.
 *
 * @param {{ priceUsd: number, pricePrefix?: string | { fr: string, en: string } }} item
 * @param {string} lang 'fr' ou 'en' — utilisé seulement si `pricePrefix` est bilingue.
 */
export function pricing(item, lang = 'fr') {
  const prefix = resolvePrefix(item.pricePrefix, lang)
  const standard = formatUsd(item.priceUsd, prefix)

  if (!isPromoActive()) {
    return { current: standard, original: null, badge: null, discounted: false }
  }

  const discounted = Math.round(item.priceUsd * (1 - promo.discountPercent / 100))
  return {
    current: formatUsd(discounted, prefix),
    original: standard,
    badge: `-${promo.discountPercent}%`,
    discounted: true,
  }
}

/** Résout `pricePrefix`, qu'il soit une simple chaîne ou un objet { fr, en }. */
function resolvePrefix(pricePrefix, lang) {
  if (!pricePrefix) return ''
  return typeof pricePrefix === 'object' ? (pricePrefix[lang] ?? pricePrefix.fr ?? '') : pricePrefix
}

/** Variante sans suffixe « USD », pour les grilles compactes. */
export function pricingParts(item, lang = 'fr') {
  const p = pricing(item, lang)
  const prefix = resolvePrefix(item.pricePrefix, lang)
  const discounted = p.discounted
    ? Math.round(item.priceUsd * (1 - promo.discountPercent / 100))
    : item.priceUsd
  return {
    ...p,
    amount: `${prefix}${discounted}`,
    originalAmount: p.discounted ? `${prefix}${item.priceUsd}` : null,
    currency: 'USD',
  }
}
