import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MapPin, TrendingUp } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { missions } from '../../data/missions'

// "Parcours d'expériences" (À propos) — mêmes missions que la chronologie du
// pôle 01 (#supply-chain), présentées ici en cartes condensées plutôt qu'en
// frise chronologique. ACTED a sa propre page dédiée (/etudes-de-cas/acted),
// donc exclue ici pour ne pas doublonner.
const caseStudies = missions.filter((m) => m.id !== 'acted-nord-equateur')

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ParcoursSection() {
  const { t, i18n } = useTranslation('parcours')
  const lang = i18n.resolvedLanguage

  return (
    <section id="parcours" className="section-padding relative bg-surface">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.id}
              custom={index * 0.06}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={itemVariants}
              className="card-executive flex flex-col gap-3 p-6"
            >
              <span className="w-fit rounded-full bg-primary/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary-dark">
                {item.context[lang]}
              </span>

              <h3 className="text-base font-semibold text-ink">{item.mission[lang]}</h3>

              <p className="flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                {item.role[lang]} — {item.country[lang]} · {item.period[lang]}
              </p>

              <p className="mt-1 flex items-start gap-2 border-t border-primary-100 pt-3 text-sm font-medium text-primary-dark">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {item.impact[lang]}
              </p>
            </motion.article>
          ))}
        </div>

        <a href="#contact" className="btn-primary mx-auto w-fit">
          {t('cta')}
        </a>
      </div>
    </section>
  )
}
