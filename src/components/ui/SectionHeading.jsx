import { motion } from 'framer-motion'

/**
 * En-tête de section réutilisable — pastille (eyebrow), titre et sous-titre.
 * `accent` bascule l'accent colorimétrique entre l'or (finance) et l'émeraude (impact).
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  accent = 'gold',
}) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  const accentClass = accent === 'emerald' ? 'text-emerald' : 'text-gold'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mx-auto flex max-w-2xl flex-col gap-4 ${alignClass}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        {title} {highlight && <span className={accentClass}>{highlight}</span>}
      </h2>
      {description && <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </motion.div>
  )
}
