import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  ArrowLeft, Bot, CheckCircle2, ChevronRight, Clock, FileText,
  Landmark, MessageCircle, Package, ShieldCheck, Star, Target, Truck, Users,
} from 'lucide-react'
import { formationById } from '../data/formations'
import { pricingParts } from '../lib/pricing'
import SessionNotice from '../components/ui/SessionNotice'
import SEO from '../components/ui/SEO'
import InquiryForm from '../components/ui/InquiryForm'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { waLink } from '../config/site'

const ICONS = { Bot, Target, Package, Truck, Landmark, Users, ShieldCheck }

// Une seule couleur d'primary pour toutes les formations désormais —
// l'objet garde les mêmes clés qu'avant pour ne pas toucher le reste du JSX.
const A = {
  badge: 'bg-primary/15 text-primary-dark border-primary/30',
  icon: 'bg-primary/10 text-primary',
  glow: 'shadow-primary-glow',
  border: 'border-primary/40',
  text: 'text-primary-dark',
  number: 'text-primary/20',
  dot: 'bg-primary',
  gradient: 'from-primary/20 to-transparent',
  modBorder: 'border-l-4 border-primary/50',
  modNum: 'bg-primary/15 text-primary-dark',
  outcomeBg: 'bg-primary/5 border-primary/15',
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] } }),
}

export default function FormationDetailPage() {
  const { t, i18n } = useTranslation('formations')
  const lang = i18n.resolvedLanguage
  const { id } = useParams()
  const formation = formationById(id)

  if (!formation) {
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

  const a = A
  const Icon = ICONS[formation.icon] || Bot

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title={formation.title[lang]}
        description={formation.tagline?.[lang] || formation.subtitle?.[lang]}
        image={formation.image}
      />
      <Navbar />

      <main id="main-content">
        {/* ── Hero de la formation ── */}
        <section className="relative overflow-hidden bg-surface pt-32 pb-20">
          <div className={`pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b ${a.gradient} opacity-50`} />
          <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="section-container relative flex flex-col gap-10">
            {/* Navigation: Fil d'Ariane + retour */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2 text-sm font-medium text-muted transition-all hover:border-primary/40 hover:text-ink"
              >
                {t('detail.backHome')}
              </Link>
              <span className="text-muted/40">·</span>
              <Link
                to="/formations"
                className="inline-flex w-fit items-center gap-2 text-sm text-muted transition hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('detail.backToList')}
              </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
              {/* Contenu principal */}
              <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="flex flex-col gap-6">
                <span className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${a.badge}`}>
                  {t('detail.formationBadge', { number: formation.number, badge: formation.badge[lang] })}
                </span>
                <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                  {formation.title[lang]}
                </h1>
                <p className={`text-xl font-semibold ${a.text}`}>{formation.tagline[lang]}</p>
                <p className="max-w-2xl text-base leading-relaxed text-muted">{formation.intro[lang]}</p>

                {/* Méta-infos */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Clock, label: formation.duration[lang] },
                    { icon: Star, label: formation.level[lang] },
                    { icon: Target, label: formation.format[lang] },
                  ].map(({ icon: I, label }) => (
                    <span key={label} className="flex items-center gap-2 rounded-full border border-border bg-surface-white/60 px-4 py-2 text-xs font-medium text-muted">
                      <I className="h-3.5 w-3.5" />
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Card latérale */}
              <motion.div initial="hidden" animate="show" custom={0.15} variants={fadeUp}
                className={`card-executive sticky top-28 flex flex-col gap-6 p-7 ${a.border} ${a.glow}`}>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.icon}`}>
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm text-muted">{formation.subtitle[lang]}</p>
                  {(() => {
                    const p = pricingParts(formation, lang)
                    return (
                      <>
                        {p.originalAmount && (
                          <p className="mt-1 text-sm font-medium text-muted line-through">
                            {p.originalAmount} {p.currency}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-0.5">
                          <p className={`font-heading text-3xl font-extrabold ${a.text}`}>
                            {p.amount} {p.currency}
                          </p>
                          {p.badge && (
                            <span className="rounded-full bg-primary/20 px-2.5 py-1 text-xs font-bold text-primary-dark">
                              {p.badge}
                            </span>
                          )}
                        </div>
                      </>
                    )
                  })()}
                  {/* Échéance de session — n'apparaît que si une date réelle est configurée */}
                  <div className="mt-3 flex flex-col gap-1.5 rounded-xl border border-border bg-surface px-3 py-2.5 empty:hidden">
                    <SessionNotice compact />
                  </div>
                </div>
                <ul className="flex flex-col gap-2 border-t border-white/10 pt-4">
                  {formation.objectives.slice(0, 4).map((obj) => (
                    <li key={obj[lang]} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                      {obj[lang]}
                    </li>
                  ))}
                </ul>
                <a href="#formulaire" className="btn-primary w-full justify-center">
                  {t('detail.enrollCta')}
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={waLink(t('detail.whatsappMessage', { title: formation.title[lang] }))}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex w-full items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('detail.whatsappCta')}
                </a>
                <Link
                  to={`/formations/${formation.id}/formulaire`}
                  target="_blank"
                  className="btn-secondary flex w-full items-center justify-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  {t('detail.applicationFormCta')}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Public cible ── */}
        <section className="section-padding-tight border-t border-slate-300 bg-surface">
          <div className="section-container grid gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-ink">{t('detail.audienceHeading')}</h2>
              <p className="leading-relaxed text-muted">{formation.audience[lang]}</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-ink">{t('detail.objectivesHeading')}</h2>
              <ul className="flex flex-col gap-3">
                {formation.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-extrabold ${a.icon} ${a.text}`}>
                      {i + 1}
                    </span>
                    {obj[lang]}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── Programme détaillé ── */}
        <section className="section-padding border-t border-slate-300 bg-surface">
          <div className="section-container flex flex-col gap-14">
            <div className="text-center">
              <span className="eyebrow">{t('detail.programEyebrow')}</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                {t('detail.programHeading', { count: formation.modules.length })}
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {formation.modules.map((mod, index) => (
                <motion.div
                  key={mod.number}
                  custom={index * 0.06}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className={`card-executive overflow-hidden ${a.modBorder}`}
                >
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:gap-6">
                    {/* Numéro du module */}
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-heading text-sm font-extrabold ${a.modNum}`}>
                      {mod.number}
                    </div>

                    <div className="flex flex-1 flex-col gap-3">
                      <h3 className="text-base font-bold text-ink">{mod.title[lang]}</h3>
                      <p className="text-sm leading-relaxed text-muted">{mod.description[lang]}</p>

                      <ul className="flex flex-col gap-1.5 border-t border-white/10 pt-3">
                        {mod.points.map((point) => (
                          <li key={point[lang]} className="flex items-start gap-2 text-sm leading-snug text-muted">
                            <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${a.text}`} />
                            <span>{point[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Résultats obtenus ── */}
        <section className="section-padding-tight border-t border-slate-300 bg-surface">
          <div className="section-container flex flex-col gap-10">
            <div className="text-center">
              <span className="eyebrow">{t('detail.outcomesEyebrow')}</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                {t('detail.outcomesHeading')}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {formation.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  custom={index * 0.08}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`card-executive flex items-start gap-3 border p-5 ${a.outcomeBg}`}
                >
                  <Star className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} />
                  <p className="text-sm leading-relaxed text-muted">{outcome[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Formulaire de contact ── */}
        <section id="formulaire" className="section-padding border-t border-slate-300 bg-surface">
          <div className="section-container flex flex-col gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="eyebrow">{t('detail.formEyebrow')}</span>
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t('detail.formHeading.prefix')}{' '}
                <span className={a.text}>{t('detail.formHeading.highlight')}</span> {t('detail.formHeading.suffix')}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted">
                {t('detail.formDescription')}
              </p>
            </div>

            <div className={`card-executive mx-auto w-full max-w-2xl p-8 ${a.border}`}>
              <InquiryForm formationTitle={formation.title[lang]} formationId={formation.id} />
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-sm text-muted">
                {t('detail.formAltPrompt')}
              </p>
              <Link
                to={`/formations/${formation.id}/formulaire`}
                target="_blank"
                className="btn-secondary"
              >
                <FileText className="h-4 w-4" />
                {t('detail.openApplicationForm')}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
