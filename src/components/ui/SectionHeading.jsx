import { motion } from 'framer-motion'

// Accent de l'intitulé (pastille + trait). L'or reste la couleur de marque ;
// les autres teintes servent à distinguer les pôles, jamais à décorer.
const ACCENT = {
  gold: { text: 'text-gold-dark', bar: 'bg-gold', chip: 'border-gold/30 bg-gold/10 text-gold-dark' },
  emerald: { text: 'text-emerald-dark', bar: 'bg-emerald', chip: 'border-emerald/30 bg-emerald/10 text-emerald-dark' },
  rouge: { text: 'text-rouge-dark', bar: 'bg-rouge', chip: 'border-rouge/30 bg-rouge/10 text-rouge-dark' },
  teal: { text: 'text-teal-dark', bar: 'bg-teal', chip: 'border-teal/30 bg-teal/10 text-teal-dark' },
  blue: { text: 'text-blue-800', bar: 'bg-blue-700', chip: 'border-blue-300 bg-blue-50 text-blue-800' },
  violet: { text: 'text-violet-800', bar: 'bg-violet-700', chip: 'border-violet-300 bg-violet-50 text-violet-800' },
}

/**
 * Intitulé de section.
 *
 * Deux corrections par rapport à la version précédente :
 *
 *  1. `tone` — la description utilisait toujours `text-muted` (gris ardoise,
 *     pensé pour fond clair), y compris dans les sections à fond sombre où le
 *     contraste tombait à 2,04:1. La tonalité choisit désormais la bonne
 *     famille de couleurs.
 *
 *  2. Le titre n'est plus enfermé dans un pavé de couleur pleine. Répété sept
 *     fois avec sept teintes, l'effet évoquait une succession de bandeaux
 *     publicitaires. La pastille et le trait suffisent à identifier le pôle ;
 *     `panel` permet de retrouver le pavé pour une section unique, mise en
 *     avant délibérément.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  accent = 'gold',
  tone = 'light',
  panel = false,
  panelBg,
}) {
  const isDark = tone === 'dark'
  const a = ACCENT[accent] ?? ACCENT.gold
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  const chipClass = isDark
    ? 'border-white/25 bg-white/15 text-white'
    : `${a.chip} shadow-sm`

  const titleClass = isDark ? 'text-white' : 'text-offwhite'
  const descClass = isDark ? 'text-muted-invert' : 'text-muted'
  const barClass = isDark ? 'bg-white/50' : a.bar

  const heading = (
    <h2 className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${panel ? 'text-white' : titleClass}`}>
      {title}{' '}
      {highlight && (
        <span className={panel || isDark ? 'font-extrabold' : `font-extrabold ${a.text}`}>
          {highlight}
        </span>
      )}
    </h2>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mx-auto flex max-w-2xl flex-col gap-4 ${alignClass}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${chipClass}`}
        >
          {eyebrow}
        </span>
      )}

      {panel ? (
        <div className={`w-full rounded-2xl px-8 py-5 shadow-md ${panelBg ?? 'bg-night-deep'}`}>
          {heading}
        </div>
      ) : (
        heading
      )}

      <div className={`h-1 w-20 rounded-full ${barClass}`} />

      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${descClass}`}>{description}</p>
      )}
    </motion.div>
  )
}
