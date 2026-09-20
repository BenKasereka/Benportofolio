import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react'

// Barre de navigation entre modules, placée juste après les diapositives et
// le bloc de téléchargement : remplace le besoin de remonter en haut de
// page puis de cliquer "retour à la formation" pour enchaîner sur le
// module suivant. En flux normal (ni sticky ni fixed) — un positionnement
// fixe entrait en collision avec la diapositive sur les écrans où le
// bandeau au-dessus (fil d'ariane + titre) pousse déjà la diapositive près
// du bas du viewport.
export default function ModuleNavBar({ formation, currentNumber, lang }) {
  const modules = formation.modules
  const idx = modules.findIndex((m) => m.number === currentNumber)
  const prevMod = idx > 0 ? modules[idx - 1] : null
  const nextMod = idx >= 0 && idx < modules.length - 1 ? modules[idx + 1] : null

  return (
    <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3 rounded-2xl border border-border bg-surface-white px-3 py-2.5 shadow-card">
      {prevMod ? (
        <Link
          to={`/formations/${formation.id}/module/${prevMod.number}`}
          className="flex min-w-0 items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-medium text-muted transition hover:bg-primary/5 hover:text-ink"
        >
          <ChevronLeft className="h-4 w-4 shrink-0" />
          <span className="hidden truncate sm:inline">{prevMod.title[lang]}</span>
          <span className="sm:hidden">Précédent</span>
        </Link>
      ) : (
        <span className="w-8" />
      )}

      <Link
        to={`/formations/${formation.id}`}
        className="flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted transition hover:text-primary"
      >
        <LayoutGrid className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Formation</span>
      </Link>

      {nextMod ? (
        <Link
          to={`/formations/${formation.id}/module/${nextMod.number}`}
          className="flex min-w-0 items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-medium text-ink transition hover:bg-primary/5"
        >
          <span className="hidden truncate sm:inline">{nextMod.title[lang]}</span>
          <span className="sm:hidden">Suivant</span>
          <ChevronRight className="h-4 w-4 shrink-0 text-primary" />
        </Link>
      ) : (
        <span className="w-8" />
      )}
    </div>
  )
}
