import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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

// Une seule teinte pour les 5 cartes du pipeline — la progression se lit par
// l'ordre et les flèches de connexion, pas par un jeu de couleurs différentes.
const PHASE_PALETTE = {
  bg: 'bg-primary-darker border border-primary-light/20',
  icon: 'bg-white/15 text-white',
  desc: 'text-white/80',
  badge: 'bg-black/25 text-white ring-1 ring-white/30',
  arrow: 'text-white/50',
}

export default function DataAnalysisSection() {
  const { t, i18n } = useTranslation('data')
  const lang = i18n.resolvedLanguage

  return (
    <section id="data" className="section-padding relative overflow-hidden divider-gradient bg-surface-white">
      <div className="pointer-events-none absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="mx-auto grid w-full max-w-2xl grid-cols-3 gap-4">
          {dataStats.map((stat) => (
            <div key={stat.value} className="card-executive p-5 text-center">
              <p className="font-heading text-xl font-extrabold text-primary sm:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{stat.label[lang]}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
          {dataPipeline.map((phase, index) => {
            const Icon = ICONS[phase.icon]
            const p = PHASE_PALETTE
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
                    <h3 className="font-semibold text-white">{phase.title[lang]}</h3>
                    <p className={`mt-1 text-xs leading-relaxed ${p.desc}`}>{phase.description[lang]}</p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-1.5 border-t border-white/15 pt-4">
                    {phase.tools.map((tool) => {
                      const label = typeof tool === 'object' ? tool[lang] : tool
                      return (
                        <li
                          key={label}
                          className={`rounded-full px-2.5 py-1 text-center text-[0.7rem] font-medium ${p.badge}`}
                        >
                          {label}
                        </li>
                      )
                    })}
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
