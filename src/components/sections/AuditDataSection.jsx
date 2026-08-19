import { motion } from 'framer-motion'
import { BarChart3, BookOpen, ClipboardCheck, Cpu, Landmark, ShieldCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { auditCapabilities, auditStats } from '../../data/audit'

const ICONS = { ShieldCheck, Landmark, BookOpen, ClipboardCheck, BarChart3, Cpu }

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function AuditDataSection() {
  return (
    <section id="audit-data" className="section-padding relative bg-night-soft">
      <div className="section-container grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Pôle 03 — Audit & Data"
            title="La rigueur du contrôle,"
            highlight="au service de la décision"
            align="left"
            description="De la rédaction de manuels de procédures à la conception d'outils de pilotage, chaque livrable est pensé pour réduire le risque et fiabiliser la donnée."
          />

          <div className="grid grid-cols-3 gap-4">
            {auditStats.map((stat) => (
              <div key={stat.label} className="card-executive p-5">
                <p className="font-heading text-2xl font-extrabold text-gold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary w-fit">
            Demander un audit
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {auditCapabilities.map((capability, index) => {
            const Icon = ICONS[capability.icon]
            return (
              <motion.div
                key={capability.title}
                custom={index * 0.08}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                variants={itemVariants}
                className="card-executive flex flex-col gap-3 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-semibold text-offwhite">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{capability.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
