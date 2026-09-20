import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Circle, CheckCircle2, Lock } from 'lucide-react'
import { moduleContentByNumber } from '../../data/formationsContent'
import { hasLocalAccess } from '../../lib/formationAccessStorage'
import { completedCount, isModuleComplete } from '../../lib/moduleProgressStorage'

// Sommaire de la formation : barre de progression globale (modules terminés
// sur cet appareil / total) + liste de tous les modules pour un accès
// direct, sans passer par précédent/suivant. Colonne fixe sur grand écran,
// panneau repliable sur mobile pour ne pas pousser le contenu principal.
export default function ModuleSidebar({ formation, currentNumber, lang, progressVersion }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const modules = formation.modules
  const numbers = modules.map((m) => m.number)
  const done = completedCount(formation.id, numbers)
  const total = numbers.length
  const percent = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <nav
      aria-label="Sommaire de la formation"
      className="flex w-full flex-col gap-4 rounded-2xl border border-border bg-surface-white p-5 lg:w-96 lg:shrink-0 lg:self-start"
      key={progressVersion}
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">{formation.title[lang]}</p>
        <div className="flex items-center justify-between text-sm font-semibold text-ink">
          <span>Progression</span>
          <span>{percent}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-border">
          <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${percent}%` }} />
        </div>
        <p className="text-xs text-muted">{done} sur {total} modules terminés</p>
      </div>

      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        className="flex items-center justify-between rounded-xl border border-border px-3 py-2.5 text-sm font-medium text-ink lg:hidden"
      >
        Sommaire des modules
        {mobileOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      <ul className={`flex-col gap-1 lg:flex lg:max-h-[60vh] lg:overflow-y-auto ${mobileOpen ? 'flex' : 'hidden'}`}>
        {modules.map((m) => {
          const content = moduleContentByNumber(formation.id, m.number)
          const isFreePreview = content?.free === true
          const isPaidUnlock = !isFreePreview && hasLocalAccess(formation.id)
          const isUnlocked = isFreePreview || isPaidUnlock
          const complete = isModuleComplete(formation.id, m.number)
          const isCurrent = m.number === currentNumber

          return (
            <li key={m.number}>
              <Link
                to={`/formations/${formation.id}/module/${m.number}`}
                className={`flex items-start gap-2.5 rounded-xl px-3 py-2.5 text-sm leading-snug transition ${
                  isCurrent ? 'bg-primary/10 font-semibold text-primary-dark' : 'text-muted hover:bg-surface hover:text-ink'
                }`}
              >
                {complete ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                ) : isUnlocked ? (
                  <Circle className="mt-0.5 h-4 w-4 shrink-0 text-border" />
                ) : (
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-border" />
                )}
                <span className="flex-1">{m.number} · {m.title[lang]}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
