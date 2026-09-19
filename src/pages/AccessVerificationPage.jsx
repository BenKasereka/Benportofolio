import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'
import { CheckCircle2, Loader2, MessageCircle, XCircle } from 'lucide-react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SEO from '../components/ui/SEO'
import { verifyAccessToken } from '../lib/accessRequests'
import { grantLocalAccess } from '../lib/formationAccessStorage'
import { formationById } from '../data/formations'
import { waLink } from '../config/site'

/**
 * Route `/acces/:token` — point d'atterrissage du lien envoyé par email après
 * validation d'une demande d'inscription. Vérifie le token via Supabase, puis
 * déverrouille l'affichage de la formation correspondante sur cet appareil.
 *
 * Rappel (voir formationAccessStorage.js) : ce déverrouillage est une
 * question d'interface, pas de protection de fichier — le site est statique.
 */
export default function AccessVerificationPage() {
  const { t, i18n } = useTranslation('payment')
  const lang = i18n.language
  const { token } = useParams()
  const [state, setState] = useState('verifying') // verifying | valid | invalid
  const [formation, setFormation] = useState(null)

  useEffect(() => {
    let cancelled = false
    verifyAccessToken(token).then((formationId) => {
      if (cancelled) return
      if (!formationId) {
        setState('invalid')
        return
      }
      grantLocalAccess(formationId)
      setFormation(formationById(formationId) || null)
      setState('valid')
    })
    return () => {
      cancelled = true
    }
  }, [token])

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <SEO
        title={t(state === 'invalid' ? 'access.invalidTitle' : 'access.successTitle')}
        noindex
      />
      <Navbar />
      <main id="main-content" className="section-padding flex flex-1 items-center justify-center">
        <div className="section-container flex max-w-lg flex-col items-center gap-5 text-center">
          {state === 'verifying' && (
            <>
              <Loader2 className="h-12 w-12 animate-spin text-primary" aria-hidden="true" />
              <p className="text-sm text-muted">{t('access.verifying')}</p>
            </>
          )}

          {state === 'valid' && (
            <>
              <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden="true" />
              <h1 className="text-2xl font-bold text-ink">{t('access.successTitle')}</h1>
              <p className="text-sm leading-relaxed text-muted">
                <Trans
                  i18nKey="payment:access.successBody"
                  values={{ formation: formation?.title?.[lang] || formation?.id || '' }}
                  components={{ b: <span className="font-semibold text-ink" /> }}
                />
              </p>
              {formation && (
                <Link to={`/formations/${formation.id}`} className="btn-primary">
                  {t('access.goToFormation')}
                </Link>
              )}
            </>
          )}

          {state === 'invalid' && (
            <>
              <XCircle className="h-14 w-14 text-slate-400" aria-hidden="true" />
              <h1 className="text-2xl font-bold text-ink">{t('access.invalidTitle')}</h1>
              <p className="text-sm leading-relaxed text-muted">{t('access.invalidBody')}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={waLink('Bonjour Benjamin, mon lien d\'accès à une formation ne fonctionne pas.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Discuter via WhatsApp
                </a>
                <Link to="/" className="btn-secondary">
                  {t('access.backHome')}
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
