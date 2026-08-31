import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  ArrowLeft, CheckCircle2, Download, FileSpreadsheet, FileText,
  Lock, MessageCircle, Sparkles,
} from 'lucide-react'
import { formationById } from '../data/formations'
import { moduleContentByNumber } from '../data/formationsContent'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SEO from '../components/ui/SEO'
import { waLink } from '../config/site'

const ASSET_BASE = import.meta.env.BASE_URL

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: d, ease: [0.16, 1, 0.3, 1] } }),
}

const FILES = [
  { key: 'theorie', name: '01-theorie.md', label: 'Théorie' },
  { key: 'outils', name: '02-outils.md', label: 'Outils & Guide pratique' },
  { key: 'exercices', name: '03-exercices.md', label: 'Étude de cas & Exercices' },
]

const markdownComponents = {
  h1: (props) => <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink" {...props} />,
  h2: (props) => <h2 className="mt-10 font-heading text-2xl font-bold text-ink" {...props} />,
  h3: (props) => <h3 className="mt-8 font-heading text-lg font-bold text-ink" {...props} />,
  p: (props) => <p className="mt-4 text-justify leading-relaxed text-muted" {...props} />,
  ul: (props) => <ul className="mt-4 flex flex-col gap-2 pl-1" {...props} />,
  ol: (props) => <ol className="mt-4 flex list-decimal flex-col gap-2 pl-5 marker:font-semibold marker:text-primary" {...props} />,
  li: (props) => <li className="text-justify leading-relaxed text-muted" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-4 border-l-4 border-accent-gold/60 bg-accent-gold/5 px-4 py-3 text-sm italic text-muted" {...props} />
  ),
  hr: () => <hr className="my-8 border-border" />,
  a: (props) => <a className="font-medium text-primary underline underline-offset-2" target="_blank" rel="noreferrer" {...props} />,
  table: (props) => (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-secondary/95 text-white" {...props} />,
  th: (props) => <th className="px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide" {...props} />,
  td: (props) => <td className="border-t border-border px-4 py-2.5 align-top text-muted" {...props} />,
  code: (props) => <code className="rounded bg-ink/5 px-1.5 py-0.5 text-[0.85em] text-ink" {...props} />,
}

function TemplateLink({ formationId, moduleSlug, template }) {
  const isXlsx = template.file.endsWith('.xlsx')
  const Icon = isXlsx ? FileSpreadsheet : FileText
  const href = `${ASSET_BASE}formations-content/${formationId}/${moduleSlug}/04-templates/${template.file}`
  return (
    <a
      href={href}
      download
      className="flex items-center gap-3 rounded-xl border border-border bg-surface-white px-4 py-3 text-sm font-medium text-ink transition hover:border-primary/40 hover:bg-primary/5"
    >
      <Icon className="h-4 w-4 shrink-0 text-primary" />
      <span className="flex-1">{template.label}</span>
      <Download className="h-4 w-4 shrink-0 text-muted" />
    </a>
  )
}

function LockedModulePanel({ formation, mod, lang, t }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-justify leading-relaxed text-muted">{mod.description[lang]}</p>
      <ul className="flex flex-col gap-2.5">
        {mod.points.map((point) => (
          <li key={point[lang]} className="flex items-start gap-2.5 text-justify text-sm leading-relaxed text-muted">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{point[lang]}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start gap-4 rounded-2xl border border-accent-gold/30 bg-accent-gold/5 p-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-gold/40 bg-accent-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-gold-dark">
          <Lock className="h-3.5 w-3.5" />
          {t('module.lockedBadge')}
        </span>
        <p className="text-sm leading-relaxed text-muted">{t('module.lockedBody')}</p>
        <div className="flex flex-wrap gap-3">
          <a href="#formulaire" className="btn-primary">
            {t('module.lockedEnrollCta')}
          </a>
          <a
            href={waLink(t('module.lockedWhatsappMessage', { title: formation.title[lang], module: mod.title[lang] }))}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            {t('module.lockedWhatsappCta')}
          </a>
        </div>
      </div>
    </div>
  )
}

function UnlockedModuleContent({ formationId, moduleSlug, templates }) {
  const [sections, setSections] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setSections(null)
    setError(false)

    Promise.all(
      FILES.map((f) =>
        fetch(`${ASSET_BASE}formations-content/${formationId}/${moduleSlug}/${f.name}`).then((res) => {
          if (!res.ok) throw new Error(`404: ${f.name}`)
          return res.text()
        })
      )
    )
      .then((texts) => {
        if (cancelled) return
        setSections(FILES.map((f, i) => ({ ...f, body: texts[i] })))
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [formationId, moduleSlug])

  if (error) {
    return <p className="text-sm text-muted">Le contenu de ce module n'a pas pu être chargé. Réessayez dans un instant.</p>
  }

  if (!sections) {
    return (
      <div className="flex items-center gap-3 py-10">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
        <span className="text-sm text-muted">Chargement du contenu…</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-14">
      {sections.map((section) => (
        <div key={section.key}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {section.body}
          </ReactMarkdown>
        </div>
      ))}

      {templates.length > 0 && (
        <div className="flex flex-col gap-4 border-t border-border pt-8">
          <h2 className="font-heading text-xl font-bold text-ink">Templates prêts à l'emploi</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {templates.map((tpl) => (
              <TemplateLink key={tpl.file} formationId={formationId} moduleSlug={moduleSlug} template={tpl} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ModuleDetailPage() {
  const { t, i18n } = useTranslation('formations')
  const lang = i18n.resolvedLanguage
  const { id, moduleNumber } = useParams()
  const formation = formationById(id)
  const mod = formation?.modules.find((m) => m.number === moduleNumber)
  const content = moduleContentByNumber(id, moduleNumber)
  const isUnlocked = content?.free === true

  if (!formation || !mod) {
    return (
      <div className="flex min-h-screen flex-col bg-surface">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-semibold text-ink">{t('detail.notFound.title')}</p>
            <Link to="/formations" className="mt-4 inline-block text-primary underline">
              {t('detail.notFound.backLink')}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      <SEO title={`${mod.title[lang]} — ${formation.title[lang]}`} description={mod.description[lang]} />
      <Navbar />

      <main id="main-content">
        <section className="relative overflow-hidden bg-surface pt-32 pb-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />

          <div className="section-container relative flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={`/formations/${formation.id}`}
                className="flex items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2 text-sm font-medium text-muted transition-all hover:border-primary/40 hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" />
                {formation.title[lang]}
              </Link>
            </div>

            <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="flex flex-col gap-4">
              <span className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                isUnlocked
                  ? 'border-primary/30 bg-primary/15 text-primary-dark'
                  : 'border-border bg-surface-white text-muted'
              }`}>
                {isUnlocked ? <Sparkles className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5" />}
                {t('module.badge', { number: mod.number })} · {isUnlocked ? t('module.freeBadge') : t('module.lockedShortBadge')}
              </span>
              <h1 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{mod.title[lang]}</h1>
            </motion.div>
          </div>
        </section>

        <section className="section-padding-tight divider-gradient bg-surface">
          <div className="section-container">
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="card-executive mx-auto max-w-3xl p-7 sm:p-10"
            >
              {isUnlocked ? (
                <UnlockedModuleContent formationId={formation.id} moduleSlug={content.slug} templates={content.templates} />
              ) : (
                <LockedModulePanel formation={formation} mod={mod} lang={lang} t={t} />
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
