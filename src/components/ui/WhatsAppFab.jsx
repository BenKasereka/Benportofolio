import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MessageCircle } from 'lucide-react'
import { waLink } from '../../config/site'

/**
 * Action flottante WhatsApp.
 *
 * Sur le marché visé (RDC, Tchad, Soudan du Sud), WhatsApp convertit
 * nettement mieux que l'e-mail. Le bouton n'apparaît qu'après le premier
 * écran pour ne pas concurrencer le CTA du hero.
 */
export default function WhatsAppFab({ message }) {
  const { t } = useTranslation('common')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={waLink(message ?? t('whatsapp.defaultMessage'))}
      target="_blank"
      rel="noreferrer"
      aria-label={t('whatsapp.ariaLabel')}
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary-dark hover:scale-105 sm:bottom-7 sm:right-7 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
    </a>
  )
}
