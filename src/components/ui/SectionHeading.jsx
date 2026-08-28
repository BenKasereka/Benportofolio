import { motion } from 'framer-motion'

/**
 * Intitulé de section.
 *
 * Une seule couleur d'accent dans tout le site désormais — le prop `accent`
 * historique (qui sélectionnait une teinte différente par pôle : or, émeraude,
 * rouge, teal…) a été retiré : chaque section utilise le même accent de marque.
 *
 * `tone="dark"` adapte le texte aux sections à fond sombre (BkBoost, etc.).
 * `panel` retrouve le pavé de couleur pleine pour une section mise en avant
 * délibérément ; sans lui, la pastille et le trait suffisent à structurer le titre.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  tone = 'light',
  panel = false,
  panelBg,
}) {
  const isDark = tone === 'dark'
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  // Fond neutre (gris clair) pour les pastilles — pas de teinte d'accent en fond,
  // qui lirait comme une couleur décorative supplémentaire.
  const chipClass = isDark
    ? 'border-white/25 bg-white/15 text-white'
    : 'border-slate-200 bg-slate-100 text-ink shadow-sm'

  const titleClass = isDark ? 'text-white' : 'text-ink'
  const descClass = isDark ? 'text-muted-invert' : 'text-muted'
  const barClass = isDark ? 'bg-white/50' : 'bg-accent'

  const heading = (
    <h2 className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${panel ? 'text-white' : titleClass}`}>
      {title}{' '}
      {highlight && (
        <span className={panel || isDark ? 'font-extrabold' : 'font-extrabold text-accent-dark'}>
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
        <div className={`w-full rounded-2xl px-8 py-5 shadow-md ${panelBg ?? 'bg-ink'}`}>
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
