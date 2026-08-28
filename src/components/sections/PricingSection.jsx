import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { pricingParts } from '../../lib/pricing'
import { pricingPacks } from '../../data/pricingPacks'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function PricingSection() {
  const { t, i18n } = useTranslation('pricing')
  const lang = i18n.resolvedLanguage

  return (
    <section id="tarifs" className="section-padding relative border-t border-border bg-surface-white">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPacks.map((pack, index) => {
            const p = pricingParts(pack)
            return (
              <motion.div
                key={pack.id}
                custom={index * 0.1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className={`card-executive relative flex h-full flex-col gap-4 p-7 ${
                  pack.highlight ? 'border-primary/50 shadow-primary-glow' : ''
                }`}
              >
                {pack.highlight && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary-secondary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                    <Sparkles className="h-3 w-3" aria-hidden="true" /> {t('mostChosen')}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">{pack.name[lang]}</p>
                  {p.originalAmount && (
                    <p className="mt-2 text-sm font-medium text-muted line-through">
                      {p.originalAmount} {p.currency}
                    </p>
                  )}
                  <div className="mt-0.5 flex items-center gap-2">
                    <p className="font-heading text-3xl font-extrabold text-ink">
                      {p.amount}
                      <span className="ml-1 text-base font-medium text-muted">{p.currency}</span>
                    </p>
                    {p.badge && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-bold text-primary-dark">
                        {p.badge}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="flex flex-1 flex-col gap-1.5 border-t border-border pt-3 text-sm leading-relaxed text-muted">
                  {pack.features.map((feature) => (
                    <li key={feature[lang]}>{feature[lang]}</li>
                  ))}
                </ul>

                <a href="#contact" className="btn-primary mt-auto w-full justify-center">
                  {t('cta')}
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
