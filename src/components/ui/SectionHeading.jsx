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

// Couleur de fond du panneau-titre — chaque section a sa propre teinte
const PANEL_CLASS = {
  gold:    'bg-blue-900',
  emerald: 'bg-emerald-800',
  rouge:   'bg-red-800',
  teal:    'bg-teal-800',
  blue:    'bg-blue-800',
  violet:  'bg-violet-800',
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
  const panelClass = PANEL_CLASS[accent] ?? PANEL_CLASS.blue

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
      <div className={`w-full rounded-2xl ${panelClass} px-8 py-5 shadow-md`}>
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}{' '}
          {highlight && <span className="font-extrabold underline decoration-white/40 decoration-2 underline-offset-4">{highlight}</span>}
        </h2>
      </div>
      <div className={`h-1 w-20 rounded-full ${barClass}`} />
      {description && (
        <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </motion.div>
  )
}
