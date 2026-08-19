import { motion } from 'framer-motion'
import { ClipboardCheck, HeartPulse, Package, Syringe, TrendingUp, Users } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { missions } from '../../data/missions'

const ICONS = { Users, HeartPulse, Package, Syringe, ClipboardCheck }

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function HumanitarianGallery() {
  return (
    <section id="supply-chain" className="section-padding relative bg-night-soft">
      <div className="section-container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pôle 01 — Humanitarian Supply Chain"
          title="Des opérations complexes, sur des"
          highlight="terrains à haut risque"
          accent="emerald"
          description="Manuels de procédures, réponses aux épidémies, ouvertures et fermetures de bases : chaque mission a produit des résultats mesurables sous forte pression opérationnelle."
        />

        <div className="relative mx-auto w-full max-w-3xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald/60 via-white/10 to-transparent" />

          <div className="flex flex-col gap-6">
            {missions.map((item, index) => {
              const Icon = ICONS[item.icon]
              return (
                <motion.div
                  key={item.id}
                  custom={index * 0.08}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={itemVariants}
                  className="relative flex gap-5 pl-1"
                >
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald/40 bg-night text-emerald shadow-emerald-glow">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>

                  <div className="card-executive flex-1 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-emerald/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald">
                        {item.context}
                      </span>
                      <span className="text-xs text-muted">{item.period}</span>
                    </div>
                    <h3 className="mt-2 text-base font-semibold text-offwhite">{item.mission}</h3>
                    <p className="text-sm text-muted">{item.country}</p>
                    <p className="mt-3 flex items-center gap-2 text-sm font-medium text-gold">
                      <TrendingUp className="h-4 w-4" />
                      {item.impact}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
