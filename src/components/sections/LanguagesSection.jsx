import { motion } from 'framer-motion'
import { Languages as LanguagesIcon } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { languages } from '../../data/languages'

export default function LanguagesSection() {
  return (
    <section id="languages" className="section-padding relative bg-night-soft">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Pôle 05 — Interprétation & Traduction"
          title="Une communication fluide,"
          highlight="dans 6 langues"
          accent="emerald"
          description="L'interprétation entre équipes multiculturelles fait partie intégrante du travail de terrain — de la coordination logistique à la médiation communautaire."
        />

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-executive flex flex-col gap-3 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-offwhite">
                  <LanguagesIcon className="h-4 w-4 text-emerald" />
                  {lang.name}
                </span>
                <span className="text-xs text-muted">{lang.level}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gold-emerald"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
