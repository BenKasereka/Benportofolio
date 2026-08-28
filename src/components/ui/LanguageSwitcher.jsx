import { useTranslation } from 'react-i18next'

const LANGS = ['fr', 'en']

export default function LanguageSwitcher({ dark = false }) {
  const { i18n } = useTranslation()

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full p-0.5 ${
        dark ? 'bg-ink/5' : 'bg-white/10'
      }`}
      role="group"
      aria-label="Choix de la langue / Language choice"
    >
      {LANGS.map((lng) => {
        const active = i18n.resolvedLanguage === lng
        return (
          <button
            key={lng}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
              active
                ? dark
                  ? 'bg-ink text-white'
                  : 'bg-white text-ink'
                : dark
                  ? 'text-muted hover:text-ink'
                  : 'text-white/60 hover:text-white'
            }`}
          >
            {lng}
          </button>
        )
      })}
    </div>
  )
}
