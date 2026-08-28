import { useTranslation } from 'react-i18next'
import { missions } from '../../data/missions'

// Organisations distinctes de la chronologie des missions (src/data/missions.js),
// dans leur ordre de première apparition — aucune énumérée ici qui ne soit pas
// déjà documentée, avec dates et rôle, dans le pôle 01 plus bas sur la page.
// Les noms d'organisations sont identiques en FR/EN (sigles), le split se fait
// donc sur la valeur fr sans perte.
const ORGANIZATIONS = [...new Set(missions.map((m) => m.mission.fr.split(' — ')[0]))]

/**
 * Bande de confiance sobre — texte seul, pas de logo.
 *
 * Un logo affiché ici pourrait laisser croire à un partenariat ou à une
 * approbation de l'organisation elle-même ; le nom en texte reste factuel :
 * Benjamin a occupé un poste dans ces organisations, ce que la chronologie
 * du pôle 01 documente avec dates et intitulé de poste.
 */
export default function TrustedBySection() {
  const { t } = useTranslation('trustedBy')

  return (
    <section className="surface-dark border-y border-white/10 bg-secondary py-8">
      <div className="section-container flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          {t('label')}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:justify-end">
          {ORGANIZATIONS.map((name) => (
            <li key={name} className="text-sm font-semibold text-white/90">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
