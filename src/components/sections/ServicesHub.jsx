import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, BarChart3, CheckCircle2, Languages, Rocket, ShieldCheck, Truck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

// Résolution des icônes Lucide par nom (garde `services.js` libre de tout import React).
const ICONS = { Truck, Rocket, ShieldCheck, BarChart3, Languages }

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ServicesHub() {
  const { t, i18n } = useTranslation('servicesHub')
  const lang = i18n.resolvedLanguage

  return (
    <section id="expertise" className="section-padding relative divider-gradient bg-surface">
      <div className="section-container flex flex-col gap-16">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon]

            return (
              <motion.a
                key={service.id}
                href={service.anchor}
                custom={index * 0.1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                className={`card-executive group relative flex flex-col gap-6 overflow-hidden p-8 group-hover:border-primary/50 group-hover:shadow-primary-glow ${
                  index === 0 ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <span className="pointer-events-none absolute -right-4 -top-6 font-heading text-8xl font-extrabold text-primary/[0.12]">
                  {service.number}
                </span>

                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-dark">
                    {service.subtitle[lang]}
                  </p>
                  <h3 className="text-xl font-bold text-ink">{service.title[lang]}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.description[lang]}</p>
                </div>

                <ul className="flex flex-col gap-1.5">
                  {service.highlights.map((point) => (
                    <li key={point[lang]} className="flex items-start gap-2 text-sm leading-snug text-muted">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{point[lang]}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {service.metrics.map((metric) => (
                    <div key={metric.label[lang]} className="flex flex-col">
                      <span className="font-heading text-lg font-bold text-ink">
                        {typeof metric.value === 'object' ? metric.value[lang] : metric.value}
                      </span>
                      <span className="text-[0.65rem] uppercase leading-tight tracking-wide text-muted">
                        {metric.label[lang]}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag[lang]}
                      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[0.7rem] text-muted"
                    >
                      {tag[lang]}
                    </span>
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
