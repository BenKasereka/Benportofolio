import { motion } from 'framer-motion'

const ACCENT_CLASS = {
  gold: 'text-gold',
  emerald: 'text-emerald-dark',
  rouge: 'text-rouge',
  teal: 'text-teal-dark',
  blue: 'text-blue-700',
  violet: 'text-violet-700',
}

// Badges avec fond blanc pour contraste maximal sur toutes les sections colorées
const EYEBROW_CLASS = {
  gold:    'border-gold/40 bg-white text-amber-700',
  emerald: 'border-emerald-400 bg-white text-emerald-dark',
  rouge:   'border-rouge/40 bg-white text-rouge',
  teal:    'border-teal-400 bg-white text-teal-dark',
  blue:    'border-blue-400 bg-white text-blue-700',
  violet:  'border-violet-400 bg-white text-violet-700',
}

const BAR_CLASS = {
  gold:    'bg-gold-emerald',
  emerald: 'bg-teal-emerald',
  rouge:   'bg-rouge',
  teal:    'bg-teal',
  blue:    'bg-blue-500',
  violet:  'bg-violet-500',
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  accent = 'gold',
}) {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  const accentClass = ACCENT_CLASS[accent] ?? 'text-gold'
  const eyebrowClass = EYEBROW_CLASS[accent] ?? EYEBROW_CLASS.gold
  const barClass = BAR_CLASS[accent] ?? BAR_CLASS.gold

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mx-auto flex max-w-2xl flex-col gap-4 ${alignClass}`}
    >
      {eyebrow && (
        <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm ${eyebrowClass}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold text-offwhite sm:text-4xl lg:text-5xl">
        {title}{' '}
        {highlight && <span className={accentClass}>{highlight}</span>}
      </h2>
      <div className={`h-1 w-20 rounded-full ${barClass}`} />
      {description && (
        <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </motion.div>
  )
}
