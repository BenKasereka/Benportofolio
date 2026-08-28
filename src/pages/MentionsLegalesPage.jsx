import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SEO from '../components/ui/SEO'
import { site } from '../config/site'

/**
 * Mentions légales, traitement des données et conditions d'inscription.
 *
 * Le site collecte des coordonnées (formulaires de contact et d'inscription)
 * et encaisse des paiements pour des formations, sans qu'aucune page n'en
 * précise le traitement — une omission notable face à des organisations
 * européennes soumises au RGPD.
 */
export default function MentionsLegalesPage() {
  const { t, i18n } = useTranslation('mentionsLegales')

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
      />
      <Navbar />

      <main id="main-content" className="section-padding pt-36">
        <div className="section-container flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2 text-sm font-medium text-muted transition-all hover:border-primary/40 hover:text-ink"
            >
              {t('backLink')}
            </Link>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{t('heading')}</h1>
            <p className="max-w-2xl text-base text-muted">
              {t('intro', { company: site.company })}
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="card-executive flex flex-col gap-3 p-8">
              <h2 className="text-xl font-bold text-ink">{t('sections.editor.title')}</h2>
              <p className="text-sm leading-relaxed text-muted">
                {site.name} — {site.company}
                <br />
                {i18n.resolvedLanguage === 'en' ? site.cityEn : site.city}
                <br />
                {t('sections.editor.emailLabel')}{' '}
                <a href={`mailto:${site.email}`} className="text-primary-dark underline underline-offset-2">{site.email}</a>
                <br />
                {t('sections.editor.phoneLabel')}{' '}
                <a href={`tel:${site.phoneRaw}`} className="text-primary-dark underline underline-offset-2">{site.phoneDisplay}</a>
              </p>
            </section>

            <section className="card-executive flex flex-col gap-3 p-8">
              <h2 className="text-xl font-bold text-ink">{t('sections.personalData.title')}</h2>
              <p className="text-sm leading-relaxed text-muted">
                {t('sections.personalData.body1')}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {t('sections.personalData.body2Before')}{' '}
                <a href={`mailto:${site.email}`} className="text-primary-dark underline underline-offset-2">{site.email}</a>
                {t('sections.personalData.body2After')}
              </p>
            </section>

            <section className="card-executive flex flex-col gap-3 p-8">
              <h2 className="text-xl font-bold text-ink">{t('sections.cookies.title')}</h2>
              <p className="text-sm leading-relaxed text-muted">
                {t('sections.cookies.body')}
              </p>
            </section>

            <section className="card-executive flex flex-col gap-3 p-8">
              <h2 className="text-xl font-bold text-ink">{t('sections.formations.title')}</h2>
              <p className="text-sm leading-relaxed text-muted">
                {t('sections.formations.body')}
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
