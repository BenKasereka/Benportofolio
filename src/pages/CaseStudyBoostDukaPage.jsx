import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'
import {
  ArrowLeft, Building2, CheckCircle2, ExternalLink, Github, Layers,
  LayoutDashboard, Search, Send, Settings2, ShoppingCart, SlidersHorizontal,
  Target, Upload, Users, ClipboardCheck, PieChart, Workflow,
} from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SEO from '../components/ui/SEO'
import { boostdukaModules } from '../data/boostdukaModules'
import { waLink } from '../config/site'

const ICONS = {
  Search, Users, Send, Upload, SlidersHorizontal, ClipboardCheck, ShoppingCart, LayoutDashboard, PieChart, Settings2,
}

const DEMO_URL = 'https://visiba-procurement-hub.vercel.app/'
const REPO_URL = 'https://github.com/BenKasereka/visiba-procurement-hub'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

/**
 * Étude de cas BoostDuka — outil construit par Benjamin pour démontrer, sur
 * un cas fictif (VISIBA Logistics Group), la maîtrise de l'intersection
 * procurement/supply chain/data-BI. Contenu aligné sur le README du dépôt
 * BenKasereka/visiba-procurement-hub — aucune métrique de résultat "réel"
 * n'est inventée, seul le périmètre construit (10 modules) est mis en avant.
 */
export default function CaseStudyBoostDukaPage() {
  const { t, i18n } = useTranslation('caseStudyBoostduka')
  const lang = i18n.resolvedLanguage

  return (
    <div className="min-h-screen bg-surface">
      <SEO title={t('seo.title')} description={t('seo.description')} />
      <Navbar />

      <main id="main-content" className="pt-32 pb-24">
        <div className="section-container flex flex-col gap-12">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex flex-col gap-6">
            <Link
              to="/#portfolio"
              className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2 text-sm font-medium text-muted transition-all hover:border-primary/40 hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t('breadcrumb')}
            </Link>

            <span className="eyebrow w-fit">
              <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
              {t('eyebrow')}
            </span>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              {t('heading.prefix')}{' '}
              <span className="text-primary">{t('heading.stat')}</span> {t('heading.suffix')}
            </h1>

            <div className="flex flex-wrap gap-3 text-sm text-muted">
              <span className="flex items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2">
                <Layers className="h-4 w-4 text-primary" aria-hidden="true" />
                {t('chips.stack')}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2">
                <Building2 className="h-4 w-4 text-primary" aria-hidden="true" />
                {t('chips.context')}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2">
                <Target className="h-4 w-4 text-primary" aria-hidden="true" />
                {t('chips.purpose')}
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
                <Workflow className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-4xl font-extrabold text-ink">{t('keyStat.value')}</p>
                <p className="text-sm text-muted">{t('keyStat.caption')}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                {t('sidebar.cta1')}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github className="h-4 w-4" aria-hidden="true" />
                {t('sidebar.cta2')}
              </a>
            </div>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="flex flex-col gap-10">
              {/* Contexte */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-ink">{t('context.heading')}</h2>
                <p className="text-justify leading-relaxed text-muted">
                  <Trans i18nKey="caseStudyBoostduka:context.body" components={{ strong: <strong className="text-ink" /> }} />
                </p>
              </motion.section>

              {/* Problème résolu */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.05} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-ink">{t('problem.heading')}</h2>
                <p className="text-justify text-muted">{t('problem.intro')}</p>
                <ul className="flex flex-col gap-3">
                  {['item1', 'item2', 'item3', 'item4'].map((key) => (
                    <li key={key} className="flex items-start gap-3 text-justify text-muted">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>
                        <Trans i18nKey={`caseStudyBoostduka:problem.${key}`} components={{ strong: <strong className="text-ink" /> }} />
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Solution — 10 modules */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-ink">{t('solution.heading')}</h2>
                <p className="text-justify text-sm leading-relaxed text-muted">{t('solution.intro')}</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {boostdukaModules.map((mod) => {
                    const Icon = ICONS[mod.icon]
                    return (
                      <div key={mod.id} className="card-executive flex flex-col gap-2 p-5">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        <p className="text-sm font-semibold text-ink">{mod.title[lang]}</p>
                        <p className="text-justify text-xs leading-relaxed text-muted">{mod.description[lang]}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.section>

              {/* Compétences démontrées */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.15} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-ink">{t('skills.heading')}</h2>
                <ul className="flex flex-col gap-3">
                  {['item1', 'item2', 'item3', 'item4', 'item5'].map((key) => (
                    <li key={key} className="flex items-start gap-3 text-justify text-muted">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>
                        <Trans i18nKey={`caseStudyBoostduka:skills.${key}`} components={{ strong: <strong className="text-ink" /> }} />
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Pourquoi cet outil compte */}
              <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2} variants={fadeUp} className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-ink">{t('importance.heading')}</h2>
                <p className="text-justify leading-relaxed text-muted">
                  <Trans
                    i18nKey="caseStudyBoostduka:importance.body"
                    components={{
                      strong: <strong className="text-ink" />,
                      link: <Link to="/#audit" className="text-primary-dark underline underline-offset-2" />,
                    }}
                  />
                </p>
              </motion.section>
            </div>

            {/* Colonne latérale — projet + CTA */}
            <motion.aside
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="card-executive sticky top-28 flex flex-col gap-5 p-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">{t('sidebar.label')}</h3>
              <div className="flex flex-col gap-3">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
                  {t('sidebar.cta1')}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  {t('sidebar.cta2')}
                </a>
              </div>
              <p className="text-justify text-sm leading-relaxed text-muted">
                {t('sidebar.body')}
              </p>
              <a
                href={waLink(t('whatsappMessage'))}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                {t('sidebar.cta3')}
              </a>
            </motion.aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
