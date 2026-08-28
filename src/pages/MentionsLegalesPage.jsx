import { Link } from 'react-router-dom'
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
  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Mentions légales"
        description="Mentions légales, traitement des données personnelles et conditions d'inscription aux formations BK-BOOST Ltd."
      />
      <Navbar />

      <main id="main-content" className="section-padding pt-36">
        <div className="section-container flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface-white px-4 py-2 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-ink"
            >
              ← Accueil
            </Link>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Mentions légales</h1>
            <p className="max-w-2xl text-base text-muted">
              Éditeur du site, traitement des données personnelles et conditions applicables aux
              formations et consultations proposées par {site.company}
            </p>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="card-executive flex flex-col gap-3 p-8">
              <h2 className="text-xl font-bold text-ink">Éditeur du site</h2>
              <p className="text-sm leading-relaxed text-muted">
                {site.name} — {site.company}
                <br />
                {site.city}
                <br />
                Email : <a href={`mailto:${site.email}`} className="text-accent-dark underline underline-offset-2">{site.email}</a>
                <br />
                Téléphone : <a href={`tel:${site.phoneRaw}`} className="text-accent-dark underline underline-offset-2">{site.phoneDisplay}</a>
              </p>
            </section>

            <section className="card-executive flex flex-col gap-3 p-8">
              <h2 className="text-xl font-bold text-ink">Données personnelles</h2>
              <p className="text-sm leading-relaxed text-muted">
                Les informations transmises via les formulaires de ce site (nom, email, téléphone,
                organisation, message, dossier de candidature) sont utilisées exclusivement pour
                répondre à votre demande et assurer le suivi d&apos;une éventuelle inscription. Elles
                ne sont ni vendues, ni cédées, ni transmises à des tiers à des fins commerciales.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Ces données sont conservées le temps nécessaire au traitement de votre demande, puis
                supprimées. Vous pouvez à tout moment demander l&apos;accès, la rectification ou la
                suppression de vos données en écrivant à{' '}
                <a href={`mailto:${site.email}`} className="text-accent-dark underline underline-offset-2">{site.email}</a>.
              </p>
            </section>

            <section className="card-executive flex flex-col gap-3 p-8">
              <h2 className="text-xl font-bold text-ink">Cookies</h2>
              <p className="text-sm leading-relaxed text-muted">
                Ce site utilise le stockage local de votre navigateur uniquement à des fins
                techniques (mémorisation de préférences d&apos;affichage). Aucun cookie publicitaire
                ou de suivi tiers n&apos;est déposé.
              </p>
            </section>

            <section className="card-executive flex flex-col gap-3 p-8">
              <h2 className="text-xl font-bold text-ink">Formations — conditions d&apos;inscription</h2>
              <p className="text-sm leading-relaxed text-muted">
                Une inscription est confirmée à réception du paiement selon l&apos;un des moyens
                indiqués sur la page Tarifs. Toute demande d&apos;annulation ou de report doit être
                adressée par écrit ; elle est étudiée au cas par cas selon le délai restant avant le
                début de la session.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
