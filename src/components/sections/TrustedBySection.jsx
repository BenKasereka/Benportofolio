import { useTranslation } from 'react-i18next'
import { missions } from '../../data/missions'

// Organisations distinctes de la chronologie des missions (src/data/missions.js),
// dans leur ordre de première apparition — aucune énumérée ici qui ne soit pas
// déjà documentée, avec dates et rôle, dans le pôle 01 plus bas sur la page.
// Les noms d'organisations sont identiques en FR/EN (sigles), le split se fait
// donc sur la valeur fr sans perte.
const ORGANIZATIONS = [...new Set(missions.map((m) => m.mission.fr.split(' — ')[0]))]

const ASSET_BASE = import.meta.env.BASE_URL

// Petit logo officiel à côté de chaque nom — identification factuelle d'un
// poste occupé (documenté avec dates et intitulé dans le pôle 01), pas une
// affirmation de partenariat. Logos issus de sources publiques (Wikimedia
// Commons — licences PD-textlogo / CC-BY-SA — et le site officiel pour IMC).
const ORG_LOGOS = {
  'MSF-OCB': `${ASSET_BASE}images/partners/msf.svg`,
  ACTED: `${ASSET_BASE}images/partners/acted.png`,
  ACF: `${ASSET_BASE}images/partners/acf.svg`,
  'Mercy Corps': `${ASSET_BASE}images/partners/mercy-corps.png`,
  'International Medical Corps': `${ASSET_BASE}images/partners/international-medical-corps.png`,
}

export default function TrustedBySection() {
  const { t } = useTranslation('trustedBy')

  return (
    <section className="surface-dark divider-gradient-y bg-secondary py-8">
      <div className="section-container flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          {t('label')}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-end">
          {ORGANIZATIONS.map((name) => (
            <li key={name} className="flex items-center gap-2 text-sm font-semibold text-white/90">
              {ORG_LOGOS[name] && (
                <img
                  src={ORG_LOGOS[name]}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-auto max-w-[1.5rem] shrink-0 rounded-sm bg-white/95 object-contain p-0.5"
                  loading="lazy"
                />
              )}
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
