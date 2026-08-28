import { useTranslation } from 'react-i18next'
import { Hammer } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

// Placeholder honnête : les projets concrets (livrables, dashboards) sont en
// préparation et pas encore prêts à être publiés — pas de contenu inventé ici.
export default function PortfolioSection() {
  const { t } = useTranslation('portfolio')

  return (
    <section id="portfolio" className="section-padding relative bg-surface-white">
      <div className="section-container flex flex-col gap-10">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="card-executive mx-auto flex w-full max-w-2xl flex-col items-center gap-4 border-dashed p-12 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Hammer className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <a href="#contact" className="btn-primary mt-2 w-fit">
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
