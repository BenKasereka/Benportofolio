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
// Tailles de texte volontairement généreuses : la diapositive occupe
// maintenant une grande partie de l'écran (voir SlideViewer), un texte
// trop petit dedans serait à la fois peu lisible et laisserait du vide.

export function CoverSlide({ title, hook }) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
        <Sparkles className="h-3.5 w-3.5" />
        Nouveau module
      </span>
      <h2 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h2>
      {hook && <p className="max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">{hook}</p>}
    </div>
  )
}

export function ObjectivesSlide({ title = 'À la fin de ce module, vous serez capable de :', items = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-6">
      <SlideTitle icon={Target}>{title}</SlideTitle>
      <ul className="flex flex-col gap-5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-justify text-lg leading-relaxed text-ink sm:text-xl">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
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
    <div className="flex h-full flex-col justify-start gap-6">
      <SlideTitle icon={Lightbulb}>{title}</SlideTitle>
      <div className="flex flex-col gap-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-justify text-lg leading-relaxed text-muted sm:text-xl">
            {p}
          </p>
        ))}
      </div>
      {highlight && (
        <div className="rounded-2xl border border-primary/25 bg-primary/5 px-6 py-5">
          <p className="text-base font-medium leading-relaxed text-primary-dark sm:text-lg">{highlight}</p>
        </div>
      )}
    </div>
  )
}

export function StatCalloutSlide({ stat, caption, context }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
      <span className="font-heading text-7xl font-extrabold text-primary sm:text-8xl">{stat}</span>
      <p className="max-w-xl text-xl font-semibold text-ink sm:text-2xl">{caption}</p>
      {context && <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">{context}</p>}
    </div>
  )
}

export function ComparisonTableSlide({ title, columns = [], rows = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-6">
      {title && <SlideTitle icon={TrendingUp}>{title}</SlideTitle>}
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full border-collapse text-left text-base">
          <thead className="bg-secondary text-white">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-5 py-3 text-sm font-bold uppercase tracking-wide">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? 'bg-surface' : 'bg-surface-white'}>
                {row.map((cell, j) => (
                  <td key={j} className="border-t border-border px-5 py-3 align-top text-muted">
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
    <div className="flex h-full flex-col justify-start gap-6">
      {title && <SlideTitle icon={ArrowRight}>{title}</SlideTitle>}
      <div className="flex flex-col gap-5">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-base font-extrabold text-primary-dark">
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-ink sm:text-xl">{step.title}</p>
              {step.body && <p className="text-justify text-base leading-relaxed text-muted sm:text-lg">{step.body}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChecklistSlide({ title, items = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-6">
      {title && <SlideTitle icon={ListChecks}>{title}</SlideTitle>}
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-3.5">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-primary" />
            <span className="text-justify text-base leading-relaxed text-ink sm:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function WarningSlide({ title, items = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-6">
      <div className="flex items-center gap-3 border-l-4 border-accent-gold pl-3">
        <AlertTriangle className="h-6 w-6 shrink-0 text-accent-gold-dark" />
        <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{title}</h3>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 rounded-xl border border-accent-gold/30 bg-accent-gold/5 px-5 py-3.5">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-gold-dark" />
            <span className="text-justify text-base leading-relaxed text-ink sm:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CaseStudySlide({ title, scenario, steps = [] }) {
  return (
    <div className="flex h-full flex-col justify-start gap-6">
      {title && <SlideTitle icon={BookOpen}>{title}</SlideTitle>}
      {scenario && (
        <blockquote className="flex gap-3 border-l-4 border-accent-gold/60 bg-accent-gold/5 px-5 py-4">
          <Quote className="mt-1 h-5 w-5 shrink-0 text-accent-gold-dark" />
          <p className="text-justify text-base italic leading-relaxed text-muted sm:text-lg">{scenario}</p>
        </blockquote>
      )}
      {steps.length > 0 && (
        <ul className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-justify text-base leading-relaxed text-ink sm:text-lg">
              <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" />
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
    <div className="flex h-full flex-col justify-start gap-6">
      <SlideTitle icon={BookOpen}>{title}</SlideTitle>
      <dl className="grid gap-4 sm:grid-cols-2">
        {terms.map((t, i) => (
          <div key={i} className="rounded-xl border border-border bg-surface px-5 py-4">
            <dt className="font-heading text-base font-bold text-primary-dark">{t.term}</dt>
            <dd className="mt-1.5 text-justify text-base leading-relaxed text-muted">{t.definition}</dd>
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
      <ul className="flex flex-col gap-5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-justify text-lg font-medium leading-relaxed text-ink sm:text-xl">
            <Sparkles className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ExerciseSlide({ title, instructions, deliverable }) {
  return (
    <div className="flex h-full flex-col justify-start gap-6">
      <SlideTitle icon={ClipboardCheck}>{title}</SlideTitle>
      <div className="rounded-2xl border border-primary/25 bg-primary/5 px-6 py-6">
        <p className="text-justify text-lg leading-relaxed text-ink">{instructions}</p>
      </div>
      {deliverable && (
        <p className="text-base font-semibold text-primary-dark">
          Livrable attendu — <span className="font-normal text-muted">{deliverable}</span>
        </p>
      )}
    </div>
  )
}

export function ClosingSlide({ nextModuleHint }) {
  return (
    <div className="flex h-full flex-col items-start justify-center gap-6">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
        <Rocket className="h-3.5 w-3.5" />
        Module terminé
      </span>
      <h2 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl">Bravo, vous avez fini ce module !</h2>
      {nextModuleHint && <p className="max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">{nextModuleHint}</p>}
    </div>
  )
}

function SlideTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-6 w-6 shrink-0 text-primary" />
      <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">{children}</h3>
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
