import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'
import {
  ArrowLeft, BookOpen, Calendar, CheckCircle2, ClipboardCheck, Landmark,
  MapPin, ShieldCheck, TrendingDown,
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SEO from '../components/ui/SEO'
import { auditCapabilities } from '../data/audit'
import { waLink } from '../config/site'

const ICONS = { ShieldCheck, Landmark, BookOpen, ClipboardCheck }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

/**
 * Étude de cas ACTED — reformule les faits déjà documentés dans le pôle 01
 * (src/data/missions.js, mission "acted-nord-equateur") en page dédiée, sans
 * ajouter de détail non confirmé sur la méthode ou les contrôles précis mis
 * en place. Le cadre méthodologique cité plus bas (auditCapabilities) est le
 * même que celui affiché pôle 03 : une compétence générale, pas une liste de
 * mesures spécifiques à cette mission.
 */
export default function CaseStudyActedPage() {
  const { t, i18n } = useTranslation('caseStudyActed')
  const lang = i18n.resolvedLanguage
  const waMessage = lang === 'en'
    ? "Hello Benjamin, I'm interested in your ACTED case study — I'd like to discuss an internal audit assignment."
    : 'Bonjour Benjamin, votre étude de cas ACTED m’intéresse — je souhaite discuter d’une mission d’audit interne.'

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
      />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24">
        <div className="section-container flex flex-col gap-12">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col gap-6">
            <Link
              to="/#audit"
              className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2 text-sm font-medium text-muted transition-all hover:border-primary/40 hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t('breadcrumb')}
            </Link>

            <span className="eyebrow w-fit">
              <ClipboardCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {t('eyebrow')}
            </span>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {t('heading.prefix')}{' '}
              <span className="text-primary">{t('heading.stat')}</span> {t('heading.suffix')}
            </h1>

            <div className="flex flex-wrap gap-3 text-sm text-muted">
              <span className="flex items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2">
                <Landmark className="h-4 w-4 text-primary" aria-hidden="true" />
                {t('chips.org')}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                {t('chips.location')}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2">
                <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                {t('chips.dates')}
              </span>
            </div>
          </motion.div>

          {/* Chiffre clé */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="card-executive flex flex-col items-center gap-3 p-10 text-center shadow-primary-glow sm:flex-row sm:justify-between sm:text-left"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <TrendingDown className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-4xl font-extrabold text-ink">{t('keyStat.value')}</p>
                <p className="text-sm text-muted">{t('keyStat.caption')}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="flex flex-col gap-10">
              {/* Contexte */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-ink">{t('context.heading')}</h2>
                <p className="text-justify leading-relaxed text-muted">
                  <Trans i18nKey="caseStudyActed:context.body" components={{ strong: <strong className="text-ink" /> }} />
                </p>
              </motion.section>

              {/* Périmètre de la mission */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.05} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-ink">{t('scope.heading')}</h2>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-3 text-justify text-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <Trans i18nKey="caseStudyActed:scope.item1" components={{ strong: <strong className="text-ink" /> }} />
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-justify text-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <Trans i18nKey="caseStudyActed:scope.item2" components={{ strong: <strong className="text-ink" /> }} />
                    </span>
                  </li>
                </ul>
              </motion.section>

              {/* Cadre méthodologique */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-ink">{t('methodology.heading')}</h2>
                <p className="text-justify text-sm leading-relaxed text-muted">
                  <Trans
                    i18nKey="caseStudyActed:methodology.intro"
                    components={{ link: <Link to="/#audit" className="text-primary-dark underline underline-offset-2" /> }}
                  />
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {auditCapabilities.map((cap) => {
                    const Icon = ICONS[cap.icon]
                    return (
                      <div key={cap.title[lang]} className="card-executive flex flex-col gap-2 p-5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        <p className="text-sm font-semibold text-ink">{cap.title[lang]}</p>
                        <p className="text-justify text-xs leading-relaxed text-muted">{cap.description[lang]}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.section>
            </div>

            {/* Colonne latérale — résultat + CTA */}
            <motion.aside
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="card-executive sticky top-28 flex flex-col gap-5 p-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">{t('sidebar.resultLabel')}</h3>
              <p className="text-lg font-semibold text-ink">
                {t('sidebar.resultPrefix')} <span className="text-primary">{t('keyStat.value')}</span> {t('sidebar.resultSuffix')}
              </p>
              <p className="text-justify text-sm leading-relaxed text-muted">
                {t('sidebar.body')}
              </p>
              <a
                href={waLink(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center"
              >
                {t('sidebar.cta')}
              </a>
            </motion.aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
