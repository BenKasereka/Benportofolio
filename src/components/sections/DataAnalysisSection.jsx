import { motion } from 'framer-motion'
import { ArrowRight, Database, FlaskConical, Filter, PieChart, Target } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { dataPipeline, dataStats } from '../../data/dataTools'

const ICONS = { Database, Filter, FlaskConical, PieChart, Target }

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

// Palette unique par phase — parcours chromatique cohérent avec le design system.
// Les opacités de texte/badge ont été relevées (ex. /70 → /90) pour rester
// lisibles sur les fonds colorés (BLQ-04 de l'audit).
const PHASE_PALETTES = [
  { bg: 'bg-teal border border-teal-300/30',            icon: 'bg-white/15 text-white',             desc: 'text-teal-50/90',    badge: 'bg-black/25 text-white ring-1 ring-white/30',                  arrow: 'text-white/50' },
  { bg: 'bg-emerald-dark border border-emerald-400/30', icon: 'bg-emerald-200/20 text-emerald-200', desc: 'text-emerald-50/90', badge: 'bg-black/30 text-white ring-1 ring-emerald-300/40',            arrow: 'text-emerald-300/50' },
  { bg: 'bg-gold-dark border border-amber-500/30',      icon: 'bg-amber-300/20 text-amber-200',     desc: 'text-amber-50/90',   badge: 'bg-black/30 text-white ring-1 ring-amber-300/40',              arrow: 'text-amber-300/50' },
  { bg: 'bg-rouge border border-rouge-light/20',        icon: 'bg-white/15 text-white',             desc: 'text-red-50/90',     badge: 'bg-black/25 text-white ring-1 ring-white/30',                  arrow: 'text-rouge-light/50' },
  { bg: 'bg-rouge-bordeaux border border-rouge/30',     icon: 'bg-rouge/20 text-rouge-light',       desc: 'text-red-50/85',     badge: 'bg-black/30 text-white ring-1 ring-rouge/40',                  arrow: 'text-rouge-light/40' },
]

export default function DataAnalysisSection() {
  return (
    <section id="data" className="section-padding relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Pôle 04 — Data Analysis & Business Intelligence"
          title="De la base de données brute à la"
          highlight="décision"
          accent="teal"
          description="Analyse de bases de données, interprétation et visualisation — avec les outils et langages professionnels les plus puissants du marché, à chaque étape du pipeline."
        />

        <div className="mx-auto grid w-full max-w-2xl grid-cols-3 gap-4">
          {dataStats.map((stat) => (
            <div key={stat.label} className="card-executive p-5 text-center">
              <p className="font-heading text-xl font-extrabold text-gold sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
          {dataPipeline.map((phase, index) => {
            const Icon = ICONS[phase.icon]
            const p = PHASE_PALETTES[index] || PHASE_PALETTES[0]
            return (
              <div key={phase.phase} className="flex flex-1 items-stretch gap-3">
                <motion.div
                  custom={index * 0.1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={cardVariants}
                  className={`relative flex flex-1 flex-col gap-4 rounded-2xl p-6 shadow-lg ${p.bg}`}
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 font-heading text-6xl font-extrabold text-white/10">
                    {phase.phase}
                  </span>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${p.icon}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{phase.title}</h3>
                    <p className={`mt-1 text-xs leading-relaxed ${p.desc}`}>{phase.description}</p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-1.5 border-t border-white/15 pt-4">
                    {phase.tools.map((tool) => (
                      <li
                        key={tool}
                        className={`rounded-full px-2.5 py-1 text-center text-[0.7rem] font-medium ${p.badge}`}
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {index < dataPipeline.length - 1 && (
                  <div className="hidden items-center lg:flex">
                    <ArrowRight className={`h-4 w-4 shrink-0 ${p.arrow}`} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
