import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, waLink } from '../../config/site'

/**
 * Pied de page — coordonnées de repli pour qui a fait défiler toute la page.
 *
 * N'a plus l'id="contact" : la section de contact avec formulaire, plus haut
 * sur la page d'accueil, le porte désormais. Deux éléments avec le même id
 * rendaient la cible de `#contact` ambiguë.
 */
export default function Footer() {
  const { t, i18n } = useTranslation('footer')
  const year = new Date().getFullYear()
  const waMessage = i18n.resolvedLanguage === 'en'
    ? 'Hello Benjamin, I would like to contact you from your website.'
    : 'Bonjour Benjamin, je souhaite vous contacter depuis votre site.'

  const QUICK_LINKS = [
    { label: t('links.home'), to: '/' },
    { label: t('links.expertise'), to: '/#expertise' },
    { label: t('links.formations'), to: '/formations' },
    { label: t('links.tarifs'), to: '/formations#tarifs' },
    { label: t('links.mentionsLegales'), to: '/mentions-legales' },
  ]

  const CONTACT_LINKS = [
    {
      icon: Mail,
      label: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Phone,
      label: site.phoneDisplay,
      href: `tel:${site.phoneRaw}`,
    },
    {
      icon: MessageCircle,
      label: t('whatsapp'),
      href: waLink(waMessage),
      external: true,
    },
  ]

  return (
    <footer className="surface-dark border-t-4 border-primary bg-ink text-white">
      <div className="section-container section-padding grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.9fr]">
        {/* Marque */}
        <div className="flex flex-col gap-4">
          <span className="font-heading text-xl font-bold text-white">{site.name}</span>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            <Trans i18nKey="footer:tagline" values={{ company: site.company }} />
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">FR · C2</span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">EN · C2</span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">Swahili · Native</span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">Lingala · Native</span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">Kinande · Native</span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">Kinyarwanda · Native</span>
          </div>
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex min-h-tap w-fit items-center gap-2.5 text-sm text-slate-300 transition-opacity hover:opacity-80"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#0A66C2]">
                <Linkedin className="h-4.5 w-4.5 fill-white text-white" aria-hidden="true" />
              </span>
              {t('linkedin')}
            </a>
          )}
        </div>

        {/* Navigation rapide */}
        <div className="flex flex-col gap-1">
          <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-400">{t('navigation')}</span>
          <ul className="flex flex-col">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="flex min-h-tap items-center text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-400">{t('contact')}</span>
          <div className="flex flex-col gap-2.5">
            {CONTACT_LINKS.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="flex min-h-tap items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-3.5 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-700/60 text-primary-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </a>
            ))}
            <div className="flex min-h-tap items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-3.5 py-2.5 text-sm text-slate-300">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-700/60 text-primary-400">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              {i18n.resolvedLanguage === 'en' ? site.cityEn : site.city}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="section-container flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-400 sm:flex-row">
          <span>© {year} {site.name}. {t('rights')}</span>
          <span>{site.company} — {t('companyMotto')}</span>
        </div>
      </div>
    </footer>
  )
}
