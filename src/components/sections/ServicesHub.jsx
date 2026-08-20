import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, CheckCircle2, Languages, Rocket, ShieldCheck, Truck } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

// Résolution des icônes Lucide par nom (garde `services.js` libre de tout import React).
const ICONS = { Truck, Rocket, ShieldCheck, BarChart3, Languages }

const ACCENT_STYLES = {
  gold: {
    ring: 'group-hover:border-gold/50',
    glow: 'group-hover:shadow-gold-glow',
    icon: 'bg-gold/10 text-gold',
    number: 'text-gold/30',
    link: 'text-gold',
  },
  emerald: {
    ring: 'group-hover:border-emerald/50',
    glow: 'group-hover:shadow-emerald-glow',
    icon: 'bg-emerald/10 text-emerald',
    number: 'text-emerald/30',
    link: 'text-emerald',
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ServicesHub() {
  return (
    <section id="expertise" className="section-padding relative bg-night">
      <div className="section-container flex flex-col gap-16">
        <SectionHeading
          eyebrow="5 pôles d'expertise"
          title="Un consultant, cinq leviers de"
          highlight="performance"
          description="De l'urgence humanitaire à la donnée, chaque pôle s'appuie sur la même exigence : rigueur opérationnelle, conformité et résultats mesurables."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon]
            const accent = ACCENT_STYLES[service.accent]

            return (
              <motion.a
                key={service.id}
                href={service.anchor}
                custom={index * 0.1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={cardVariants}
                className={`card-executive group relative flex flex-col gap-6 overflow-hidden p-8 ${accent.ring} ${accent.glow} ${
                  index === 0 ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <span
                  className={`pointer-events-none absolute -right-4 -top-6 font-heading text-8xl font-extrabold ${accent.number}`}
                >
                  {service.number}
                </span>

                <div className="flex items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.icon}`}>
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight
                    className={`h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:${accent.link}`}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${accent.link}`}>
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-offwhite">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{service.description}</p>
                </div>

                <ul className="flex flex-col gap-1.5">
                  {service.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm leading-snug text-muted">
                      <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${accent.link}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                  {service.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <span className="font-heading text-lg font-bold text-offwhite">{metric.value}</span>
                      <span className="text-[0.65rem] uppercase leading-tight tracking-wide text-muted">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] text-muted"
                    >
                      {tag}
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
