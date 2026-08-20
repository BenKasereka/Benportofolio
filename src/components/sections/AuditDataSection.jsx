import { motion } from 'framer-motion'
import { BookOpen, CheckCircle2, ClipboardCheck, Landmark, ShieldCheck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { auditCapabilities, auditStats } from '../../data/audit'

const ICONS = { ShieldCheck, Landmark, BookOpen, ClipboardCheck }

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function AuditSection() {
  return (
    <section id="audit" className="section-padding relative bg-night-soft">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Pôle 03 — Audit Interne & Contrôles"
          title="La rigueur du contrôle,"
          highlight="au service de la conformité"
          accent="rouge"
          description="Rédaction de manuels de procédures, contrôles internes et audits multi-programmes — la même discipline qui a réduit le risque de non-conformité de 87,2% chez ACTED en 3 mois."
        />

        <div className="mx-auto grid w-full max-w-2xl grid-cols-3 gap-4">
          {auditStats.map((stat) => (
            <div key={stat.label} className="card-executive p-5 text-center">
              <p className="font-heading text-2xl font-extrabold text-gold sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                <ul className="mt-2 flex flex-col gap-1.5 border-t border-night-border pt-3">
                  {capability.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-snug text-muted">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <a href="#contact" className="btn-primary mx-auto w-fit">
          Demander un audit
        </a>
      </div>
    </section>
  )
}
