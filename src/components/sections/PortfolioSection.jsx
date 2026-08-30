import { useTranslation } from 'react-i18next'
import { Target, ExternalLink, Download } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

// Premier projet concret publié dans cette section : le manuel de référence
// et la méthodologie de trading institutionnel I-P-F de BK-BOOST Ltd.
export default function PortfolioSection() {
  const { t } = useTranslation('portfolio')
  const project = t('project', { returnObjects: true })

  return (
    <section id="portfolio" className="section-padding-tight relative divider-gradient bg-surface-white">
      <div className="section-container flex flex-col gap-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="card-executive mx-auto flex w-full max-w-3xl flex-col gap-6 p-8 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {project.eyebrow}
              </span>
              <h3 className="text-2xl font-bold text-ink sm:text-3xl">{project.title}</h3>
              <p className="text-sm font-medium text-muted">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-center text-muted sm:text-left">{project.description}</p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-2xl border border-border bg-surface-white p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{project.stat1Value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted">{project.stat1Label}</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface-white p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{project.stat2Value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted">{project.stat2Label}</div>
            </div>
            <div className="rounded-2xl border border-border bg-surface-white p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{project.stat3Value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-muted">{project.stat3Label}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 sm:justify-start">
            <a
              href="/precision-hunter.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {project.ctaRead}
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="/full-guideline-bk-boost-ipf.pdf"
              download
              className="btn-secondary"
            >
              <Download className="h-4 w-4" />
              {project.ctaDownload}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
