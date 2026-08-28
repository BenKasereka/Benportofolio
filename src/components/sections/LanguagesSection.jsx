import { motion } from 'framer-motion'
import { Languages as LanguagesIcon } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { languages } from '../../data/languages'

export default function LanguagesSection() {
  return (
    <section id="languages" className="section-padding relative bg-surface">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Pôle 05 — Interprétation & Traduction"
          title="Communication fluide,"
          highlight="en 6 langues"
          description="L'interprétation entre équipes multiculturelles fait partie intégrante du travail de terrain — de la coordination logistique à la médiation communautaire."
        />

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-executive flex flex-col gap-4 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-ink">
                  <LanguagesIcon className="h-4 w-4 text-accent" aria-hidden="true" />
                  {lang.name}
                </span>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent-dark">
                  {lang.level}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
