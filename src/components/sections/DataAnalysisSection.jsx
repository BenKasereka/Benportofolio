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

export default function DataAnalysisSection() {
  return (
    <section id="data" className="section-padding relative overflow-hidden bg-night">
      <div className="pointer-events-none absolute right-[-10%] top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Pôle 04 — Data Analysis & Business Intelligence"
          title="De la base de données brute à la"
          highlight="décision"
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
            return (
              <div key={phase.phase} className="flex flex-1 items-stretch gap-3">
                <motion.div
                  custom={index * 0.1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={cardVariants}
                  className="card-executive relative flex flex-1 flex-col gap-4 p-6"
                >
                  <span className="pointer-events-none absolute -right-3 -top-5 font-heading text-6xl font-extrabold text-gold/10">
                    {phase.phase}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-offwhite">{phase.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{phase.description}</p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-1.5 border-t border-white/10 pt-4">
                    {phase.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-center text-[0.7rem] text-muted"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {index < dataPipeline.length - 1 && (
                  <div className="hidden items-center lg:flex">
                    <ArrowRight className="h-4 w-4 shrink-0 text-gold/40" />
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
