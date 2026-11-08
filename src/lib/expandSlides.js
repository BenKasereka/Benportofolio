// Découpe automatique des diapositives trop chargées en diapositives
// "suite". Le cadre fait 1280x720 (affichage, PDF et PPTX partagent ce
// format) : sans ce découpage, un pas-à-pas détaillé serait coupé à l'export.
// Le coût est une estimation en "lignes" de texte, volontairement prudente.

// Calibré en mesurant le rendu réel 1280x720 : ~19-20 unités = cadre plein.
const BUDGET = 17
const CHARS_PER_LINE = 92

function lines(text) {
  if (!text) return 0
  return Math.ceil(String(text).length / CHARS_PER_LINE)
}

function boxCost(text) {
  return text ? lines(text) + 1.2 : 0
}

function exampleCost(example) {
  if (!example) return 0
  const body = Array.isArray(example.lines) ? example.lines.reduce((s, l) => s + lines(l), 0) : lines(example.body)
  return body + (example.title ? 1 : 0) + 1.5
}

function tableCost(table) {
  if (!table) return 0
  const rowCost = (row) => Math.max(1, ...row.map((c) => Math.ceil(String(c).length / 40)))
  return 1.5 + (table.rows || []).reduce((s, r) => s + rowCost(r), 0)
}

function stepCost(step) {
  if (typeof step === 'string') return lines(step) + 0.3
  return 1.3 + lines(step.body) + (step.actions || []).reduce((s, a) => s + lines(a) + 0.2, 0) + boxCost(step.result)
}

// Blocs complémentaires communs à plusieurs types, dans leur ordre d'affichage.
const EXTRA_KEYS = ['example', 'table', 'result', 'tip', 'pitfall', 'highlight']

function extraCost(key, value) {
  if (key === 'example') return exampleCost(value)
  if (key === 'table') return tableCost(value)
  return boxCost(value)
}

// Répartit des unités (chacune avec un coût) dans des pages sous le budget.
// Une unité seule plus grande que le budget reste seule sur sa page.
function paginate(units, firstPageReserved) {
  const pages = [[]]
  let used = firstPageReserved
  for (const unit of units) {
    const current = pages[pages.length - 1]
    if (current.length > 0 && used + unit.cost > BUDGET) {
      pages.push([unit])
      used = 2 + unit.cost
    } else {
      current.push(unit)
      used += unit.cost
    }
  }
  return pages
}

function extraUnits(slide) {
  return EXTRA_KEYS.filter((k) => slide[k]).map((k) => ({ kind: 'extra', key: k, value: slide[k], cost: extraCost(k, slide[k]) }))
}

function rebuild(slide, page, pageIndex, baseFields) {
  const next = { ...baseFields, type: slide.type, title: slide.title }
  if (pageIndex > 0) {
    next.title = `${slide.title} (suite)`
    next.continued = true
  }
  for (const unit of page) {
    if (unit.kind === 'extra') next[unit.key] = unit.value
  }
  return next
}

function splitProcess(slide) {
  const steps = slide.steps || []
  const units = [
    ...steps.map((step, i) => ({ kind: 'step', step, index: i, cost: stepCost(step) })),
    ...extraUnits(slide),
  ]
  const reserved = 2 + lines(slide.intro)
  const pages = paginate(units, reserved)
  if (pages.length === 1) return [slide]
  return pages.map((page, p) => {
    const pageSteps = page.filter((u) => u.kind === 'step')
    const next = rebuild(slide, page, p, { stepLabel: slide.stepLabel })
    if (p === 0 && slide.intro) next.intro = slide.intro
    next.steps = pageSteps.map((u) => u.step)
    next.stepOffset = (slide.stepOffset || 0) + (pageSteps[0]?.index ?? 0)
    return next
  })
}

function splitConcept(slide) {
  const paragraphs = Array.isArray(slide.body) ? slide.body : slide.body ? [slide.body] : []
  const units = [
    ...paragraphs.map((p) => ({ kind: 'para', value: p, cost: lines(p) + 0.4 })),
    ...(slide.bullets || []).map((b) => ({ kind: 'bullet', value: b, cost: lines(b) + 0.3 })),
    ...extraUnits(slide),
  ]
  const pages = paginate(units, 2)
  if (pages.length === 1) return [slide]
  return pages.map((page, p) => {
    const next = rebuild(slide, page, p, {})
    const body = page.filter((u) => u.kind === 'para').map((u) => u.value)
    const bullets = page.filter((u) => u.kind === 'bullet').map((u) => u.value)
    if (body.length) next.body = body
    if (bullets.length) next.bullets = bullets
    return next
  })
}

function splitCaseStudy(slide) {
  const units = [
    ...(slide.scenario ? [{ kind: 'scenario', value: slide.scenario, cost: lines(slide.scenario) + 1 }] : []),
    ...(slide.steps || []).map((step) => ({ kind: 'step', step, cost: stepCost(step) })),
    ...extraUnits(slide),
  ]
  const pages = paginate(units, 2)
  if (pages.length === 1) return [slide]
  return pages.map((page, p) => {
    const next = rebuild(slide, page, p, {})
    const scenario = page.find((u) => u.kind === 'scenario')
    if (scenario) next.scenario = scenario.value
    next.steps = page.filter((u) => u.kind === 'step').map((u) => u.step)
    return next
  })
}

// Le vocabulaire s'affiche en deux colonnes de cartes : chaque terme coûte
// environ la moitié de sa hauteur sur une colonne étroite (~46 caractères).
function itemCost(item, itemPadding) {
  if (typeof item === 'string') return lines(item) + itemPadding
  return Math.ceil(`${item.term} ${item.definition}`.length / 46) / 2 + 1.1
}

function splitList(slide, key, itemPadding = 0.6) {
  const items = slide[key] || []
  const units = items.map((item) => ({ kind: 'item', value: item, cost: itemCost(item, itemPadding) }))
  const pages = paginate(units, 2)
  if (pages.length === 1) return [slide]
  return pages.map((page, p) => {
    const next = { ...slide, continued: p > 0, [key]: page.map((u) => u.value) }
    if (p > 0 && slide.title) next.title = `${slide.title} (suite)`
    return next
  })
}

// Grille de deux cartes par rangée : une rangée coûte la hauteur de sa carte
// la plus haute (~44 caractères par ligne dans une colonne).
function splitVocabulary(slide) {
  const terms = slide.terms || []
  const termLines = (t) => Math.ceil(`${t.term} ${t.definition}`.length / 44) + 1.4
  const units = []
  for (let i = 0; i < terms.length; i += 2) {
    const pair = terms.slice(i, i + 2)
    units.push({ kind: 'row', value: pair, cost: Math.max(...pair.map(termLines)) * 0.85 })
  }
  const pages = paginate(units, 2)
  if (pages.length === 1) return [slide]
  return pages.map((page, p) => {
    const next = { ...slide, continued: p > 0, terms: page.flatMap((u) => u.value) }
    if (p > 0 && slide.title) next.title = `${slide.title} (suite)`
    return next
  })
}

function splitExercise(slide) {
  const units = [
    ...(slide.instructions ? [{ kind: 'instructions', value: slide.instructions, cost: lines(slide.instructions) + 1.2 }] : []),
    ...(slide.steps || []).map((step) => ({ kind: 'step', step, cost: stepCost(step) })),
    ...extraUnits(slide),
    ...(slide.deliverable ? [{ kind: 'deliverable', value: slide.deliverable, cost: lines(slide.deliverable) + 0.5 }] : []),
  ]
  const pages = paginate(units, 2)
  if (pages.length === 1) return [slide]
  return pages.map((page, p) => {
    const next = rebuild(slide, page, p, {})
    const instructions = page.find((u) => u.kind === 'instructions')
    const deliverable = page.find((u) => u.kind === 'deliverable')
    if (instructions) next.instructions = instructions.value
    if (deliverable) next.deliverable = deliverable.value
    next.steps = page.filter((u) => u.kind === 'step').map((u) => u.step)
    return next
  })
}

const SPLITTERS = {
  process: splitProcess,
  concept: splitConcept,
  'case-study': splitCaseStudy,
  exercise: splitExercise,
  checklist: (s) => splitList(s, 'items', 1),
  warning: (s) => splitList(s, 'items', 1),
  recap: (s) => splitList(s, 'items'),
  objectives: (s) => splitList(s, 'items'),
  vocabulary: splitVocabulary,
}

export function expandSlides(slides) {
  return slides.flatMap((slide) => (SPLITTERS[slide.type] ? SPLITTERS[slide.type](slide) : [slide]))
}
