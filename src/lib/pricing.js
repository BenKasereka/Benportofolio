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
 * @param {{ priceUsd: number, pricePrefix?: string }} item
 */
export function pricing(item) {
  const prefix = item.pricePrefix ?? ''
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

/** Variante sans suffixe « USD », pour les grilles compactes. */
export function pricingParts(item) {
  const p = pricing(item)
  const prefix = item.pricePrefix ?? ''
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
