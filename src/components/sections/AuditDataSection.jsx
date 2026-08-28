import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, BookOpen, CheckCircle2, ClipboardCheck, Landmark, ShieldCheck } from 'lucide-react'
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
  const { t, i18n } = useTranslation('audit')
  const lang = i18n.resolvedLanguage

  return (
    <section id="audit" className="section-padding relative bg-surface">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="mx-auto grid w-full max-w-2xl grid-cols-3 gap-4">
          {auditStats.map((stat) => (
            <div key={stat.value} className="card-executive p-5 text-center">
              <p className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs leading-snug text-muted">{stat.label[lang]}</p>
            </div>
          ))}
        </div>

        <Link
          to="/etudes-de-cas/acted"
          className="group mx-auto -mt-6 flex items-center gap-1.5 text-sm font-semibold text-primary-dark"
        >
          {t('caseStudyLink')}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {auditCapabilities.map((capability, index) => {
            const Icon = ICONS[capability.icon]
            return (
              <motion.div
                key={capability.id}
                custom={index * 0.08}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                variants={itemVariants}
                className="card-executive flex flex-col gap-3 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-semibold text-ink">{capability.title[lang]}</h3>
                <p className="text-sm leading-relaxed text-muted">{capability.description[lang]}</p>
                <ul className="mt-2 flex flex-col gap-1.5 border-t border-border pt-3">
                  {capability.points.map((point) => (
                    <li key={point[lang]} className="flex items-start gap-2 text-sm leading-snug text-muted">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{point[lang]}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <a href="#contact" className="btn-primary mx-auto w-fit">
          {t('cta')}
        </a>
      </div>
    </section>
  )
}
