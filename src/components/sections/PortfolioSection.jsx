import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BookOpen, ExternalLink, LayoutDashboard } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

// Absolute paths must be prefixed with BASE_URL so they still resolve correctly
// when the app is served from a subpath (e.g. GitHub Pages' /Benportofolio/).
const BASE = import.meta.env.BASE_URL

const HOVER_ICON = { manual: BookOpen, app: LayoutDashboard }

function ProjectCard({ project }) {
  const HoverIcon = HOVER_ICON[project.type] ?? ExternalLink
  // "manual" ouvre un fichier statique du site (BASE-relative) ; "app" pointe
  // vers une démo hébergée ailleurs (Vercel) — deux origines différentes.
  const coverHref = project.type === 'manual' ? `${BASE}${project.coverHref}` : project.coverHref

  return (
    <div className="card-executive flex h-full w-full flex-col gap-6 p-8 sm:p-10">
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
        <a
          href={coverHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.coverHoverLabel}
          className="group relative block w-full max-w-[220px] flex-shrink-0 overflow-hidden rounded-lg border border-border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
        >
          <img
            src={`${BASE}${project.coverImage}`}
            alt={project.coverAlt}
            width={project.type === 'manual' ? 112 : 178}
            height={project.type === 'manual' ? 158 : 126}
            loading="lazy"
            className={
              project.type === 'manual'
                ? 'block h-[158px] w-[112px] object-cover sm:h-[178px] sm:w-[126px]'
                : 'block h-auto w-full object-cover sm:h-[126px] sm:w-[178px]'
            }
          />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-primary/85 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <HoverIcon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            <span className="px-2 text-center text-[11px] font-semibold uppercase tracking-wide leading-tight">
              {project.coverHoverLabel}
            </span>
          </span>
        </a>
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
        {project.ctaDiscoverExternal ? (
          <a href={`${BASE}${project.ctaDiscoverHref}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {project.ctaDiscover}
            <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <Link to={project.ctaDiscoverHref} className="btn-primary">
            {project.ctaDiscover}
            <ExternalLink className="h-4 w-4" />
          </Link>
        )}
        {project.type === 'app' && (
          <a href={project.coverHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            {project.coverHoverLabel}
          </a>
        )}
      </div>
    </div>
  )
}

// Section "Réalisations" : chaque projet publié ici est documenté de bout en
// bout (manuel ou étude de cas dédiée), pas une simple ligne de CV.
export default function PortfolioSection() {
  const { t } = useTranslation('portfolio')
  const projects = t('projects', { returnObjects: true })

  return (
    <section id="portfolio" className="section-padding-tight relative divider-gradient bg-surface-white">
      <div className="section-container flex flex-col gap-8">
        <SectionHeading
          eyebrow={t('eyebrow')}
          title={t('title')}
          highlight={t('highlight')}
          description={t('description')}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
