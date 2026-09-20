import {
  AlertTriangle, ArrowRight, BookOpen, CheckCircle2, ClipboardCheck,
  GraduationCap, Lightbulb, ListChecks, Quote, Rocket, Sparkles, Target, TrendingUp,
} from 'lucide-react'

// Les ~13 types de diapositives d'un module. Chaque composant est
// auto-suffisant (aucune dépendance à l'état de la visionneuse) afin de
// pouvoir être rendu à l'identique dans le lecteur en direct ET dans le
// conteneur hors-écran utilisé pour la capture PDF (voir ExportSlideStage).
// CSS volontairement simple (couleurs pleines, bordures) — pas de
// gradients/backdrop-filter exotiques, pour rester compatible html2canvas.

export function CoverSlide({ title, hook }) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
        <Sparkles className="h-3.5 w-3.5" />
        Nouveau module
      </span>
      <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {hook && <p className="max-w-2xl text-lg leading-relaxed text-white/90">{hook}</p>}
    </div>
  )
}

export function ObjectivesSlide({ title = 'Objectifs de ce module', items = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-6">
      <SlideTitle icon={Target}>{title}</SlideTitle>
      <ul className="flex flex-col gap-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-justify text-base leading-relaxed text-ink sm:text-lg">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ConceptSlide({ title, body, highlight }) {
  const paragraphs = Array.isArray(body) ? body : [body]
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      <SlideTitle icon={Lightbulb}>{title}</SlideTitle>
      <div className="flex flex-col gap-3">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-justify text-base leading-relaxed text-muted sm:text-lg">
            {p}
          </p>
        ))}
      </div>
      {highlight && (
        <div className="rounded-2xl border border-primary/25 bg-primary/5 px-5 py-4">
          <p className="text-sm font-medium leading-relaxed text-primary-dark sm:text-base">{highlight}</p>
        </div>
      )}
    </div>
  )
}

export function StatCalloutSlide({ stat, caption, context }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <span className="font-heading text-6xl font-extrabold text-primary sm:text-7xl">{stat}</span>
      <p className="max-w-xl text-lg font-semibold text-ink sm:text-xl">{caption}</p>
      {context && <p className="max-w-xl text-sm leading-relaxed text-muted">{context}</p>}
    </div>
  )
}

export function ComparisonTableSlide({ title, columns = [], rows = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      {title && <SlideTitle icon={TrendingUp}>{title}</SlideTitle>}
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-secondary text-white">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-4 py-2.5 text-xs font-bold uppercase tracking-wide">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-surface' : 'bg-surface-white'}>
                {row.map((cell, j) => (
                  <td key={j} className="border-t border-border px-4 py-2.5 align-top text-muted">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function ProcessSlide({ title, steps = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      {title && <SlideTitle icon={ArrowRight}>{title}</SlideTitle>}
      <div className="flex flex-col gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-extrabold text-primary-dark">
              {i + 1}
            </span>
            <div className="flex flex-col gap-0.5">
              <p className="font-semibold text-ink">{step.title}</p>
              {step.body && <p className="text-justify text-sm leading-relaxed text-muted">{step.body}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChecklistSlide({ title, items = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      {title && <SlideTitle icon={ListChecks}>{title}</SlideTitle>}
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border-2 border-primary" />
            <span className="text-justify text-sm leading-relaxed text-ink sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function WarningSlide({ title, items = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      <div className="flex items-center gap-2.5 border-l-4 border-accent-gold pl-3">
        <AlertTriangle className="h-5 w-5 shrink-0 text-accent-gold-dark" />
        <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">{title}</h3>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl border border-accent-gold/30 bg-accent-gold/5 px-4 py-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold-dark" />
            <span className="text-justify text-sm leading-relaxed text-ink sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CaseStudySlide({ title, scenario, steps = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      {title && <SlideTitle icon={BookOpen}>{title}</SlideTitle>}
      {scenario && (
        <blockquote className="flex gap-3 border-l-4 border-accent-gold/60 bg-accent-gold/5 px-4 py-3">
          <Quote className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold-dark" />
          <p className="text-justify text-sm italic leading-relaxed text-muted sm:text-base">{scenario}</p>
        </blockquote>
      )}
      {steps.length > 0 && (
        <ul className="flex flex-col gap-2.5">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-justify text-sm leading-relaxed text-ink sm:text-base">
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function VocabularySlide({ title = 'Vocabulaire clé', terms = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      <SlideTitle icon={BookOpen}>{title}</SlideTitle>
      <dl className="grid gap-4 sm:grid-cols-2">
        {terms.map((t, i) => (
          <div key={i} className="rounded-xl border border-border bg-surface px-4 py-3">
            <dt className="font-heading text-sm font-bold text-primary-dark">{t.term}</dt>
            <dd className="mt-1 text-justify text-sm leading-relaxed text-muted">{t.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function RecapSlide({ title = 'Ce qu\'il faut retenir', items = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-6">
      <SlideTitle icon={GraduationCap}>{title}</SlideTitle>
      <ul className="flex flex-col gap-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-justify text-base font-medium leading-relaxed text-ink sm:text-lg">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ExerciseSlide({ title, instructions, deliverable }) {
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      <SlideTitle icon={ClipboardCheck}>{title}</SlideTitle>
      <div className="rounded-2xl border border-primary/25 bg-primary/5 px-5 py-5">
        <p className="text-justify text-base leading-relaxed text-ink">{instructions}</p>
      </div>
      {deliverable && (
        <p className="text-sm font-semibold text-primary-dark">
          Livrable attendu — <span className="font-normal text-muted">{deliverable}</span>
        </p>
      )}
    </div>
  )
}

export function ClosingSlide({ nextModuleHint }) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-5">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
        <Rocket className="h-3.5 w-3.5" />
        Module terminé
      </span>
      <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">Bravo, vous avez fini ce module !</h2>
      {nextModuleHint && <p className="max-w-2xl text-lg leading-relaxed text-white/90">{nextModuleHint}</p>}
    </div>
  )
}

function SlideTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className="h-5 w-5 shrink-0 text-primary" />
      <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">{children}</h3>
    </div>
  )
}

export const SLIDE_TYPE_COMPONENTS = {
  cover: CoverSlide,
  objectives: ObjectivesSlide,
  concept: ConceptSlide,
  'stat-callout': StatCalloutSlide,
  'comparison-table': ComparisonTableSlide,
  process: ProcessSlide,
  checklist: ChecklistSlide,
  warning: WarningSlide,
  'case-study': CaseStudySlide,
  vocabulary: VocabularySlide,
  recap: RecapSlide,
  exercise: ExerciseSlide,
  closing: ClosingSlide,
}

export const SLIDE_TYPE_KICKERS = {
  cover: 'Introduction',
  objectives: 'Objectifs',
  concept: 'Concept clé',
  'stat-callout': 'Chiffre clé',
  'comparison-table': 'Comparatif',
  process: 'Méthode',
  checklist: 'À faire',
  warning: 'Point de vigilance',
  'case-study': 'Cas pratique',
  vocabulary: 'Vocabulaire',
  recap: 'Synthèse',
  exercise: 'Exercice',
  closing: 'Fin de module',
}
