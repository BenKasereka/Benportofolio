import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Languages as LanguagesIcon } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { languages } from '../../data/languages'

export default function LanguagesSection() {
  const { t, i18n } = useTranslation('languages')
  const lang = i18n.resolvedLanguage

  return (
    <section id="languages" className="section-padding-tight relative divider-gradient bg-surface">
      <div className="section-container flex flex-col gap-10">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {languages.map((item, index) => (
            <motion.div
              key={item.name.fr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card-executive flex flex-col gap-4 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-ink">
                  <LanguagesIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                  {item.name[lang]}
                </span>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary-dark">
                  {item.level[lang]}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
