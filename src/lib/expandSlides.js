// Découpe automatique des diapositives trop chargées en diapositives
// "suite". Le cadre fait 1280x720 (affichage, PDF et PPTX partagent ce
// format) : sans ce découpage, un pas-à-pas détaillé serait coupé à l'export.
// Le coût est une estimation en "lignes" de texte, volontairement prudente.

// Calibré en mesurant le rendu réel 1280x720 (modules IA 01, 06, 07 et 08, plus
// de 500 pages) : une page de pas-à-pas remplit son cadre à ~19,5 unités
// estimées. À 17 unités, les pages n'étaient remplies qu'à ~88 % ; à 22, elles
// débordaient de 13 % et étaient réduites. 19 unités = cadre plein à ~97 %,
// FitToFrame réduisant ou agrandissant très légèrement pour finir de caler.
const BUDGET = 19
// Listes, tableaux et vocabulaire : l'estimation est moins fiable (cartes à
// bordures, cellules de tableau) ; le budget d'origine reste sans débordement.
const LIST_BUDGET = 17
const CHARS_PER_LINE = 92

function lines(text) {
  if (!text) return 0
  return Math.ceil(String(text).length / CHARS_PER_LINE)
}

function boxCost(text) {
  return text ? lines(text) + 1.2 : 0
}

// Les exemples s'affichent en police à chasse fixe dans un cadre : ~108
// caractères par ligne, ~0,9 unité par ligne, plus un espacement entre lignes.
function exampleLineCost(line) {
  return Math.ceil(String(line).length / 108) * 0.9 + 0.3
}

function exampleCost(example) {
  if (!example) return 0
  const body = Array.isArray(example.lines)
    ? example.lines.reduce((s, l) => s + exampleLineCost(l), 0)
    : Math.ceil(String(example.body || '').length / 108) * 0.9
  return body + (example.title ? 1 : 0) + 1.6
}

// Un exemple plus grand qu'une diapositive est réparti ligne par ligne sur
// plusieurs diapositives ("(suite)"), le titre de l'exemple étant répété.
function exampleUnits(example) {
  const total = exampleCost(example)
  if (!Array.isArray(example.lines) || total <= BUDGET - 4) {
    return [{ kind: 'extra', key: 'example', value: example, cost: total }]
  }
  const chunks = []
  let current = []
  let used = 0
  for (const line of example.lines) {
    const cost = exampleLineCost(line)
    if (current.length > 0 && used + cost > BUDGET - 5) {
      chunks.push(current)
      current = []
      used = 0
    }
    current.push(line)
    used += cost
  }
  if (current.length) chunks.push(current)
  const baseTitle = example.title || 'Exemple concret'
  return chunks.map((chunkLines, i) => ({
    kind: 'extra',
    key: 'example',
    value: { ...example, title: i === 0 ? example.title : `${baseTitle} (suite)`, lines: chunkLines },
    cost: chunkLines.reduce((s, l) => s + exampleLineCost(l), 0) + 2.6,
  }))
}

// Une colonne de tableau est étroite : ~22 caractères par ligne à 5 colonnes,
// ~60 à 2 colonnes (largeur utile ~1100 px, 40 px de marge par cellule, ~8 px
// par caractère). Une ligne de tableau coûte ~0,85 unité + 0,9 de marge.
function tableRowCost(row, columnCount) {
  const perLine = Math.max(10, Math.floor((1100 - 40 * columnCount) / columnCount / 8.2))
  const maxLines = Math.max(1, ...row.map((c) => Math.ceil(String(c).length / perLine)))
  return maxLines * 0.85 + 0.9
}

function tableCost(table) {
  if (!table) return 0
  const columnCount = (table.columns || []).length || 1
  return 1.6 + (table.rows || []).reduce((s, r) => s + tableRowCost(r, columnCount), 0)
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
function paginate(units, firstPageReserved, budget = BUDGET, tolerance = {}) {
  const pages = [[]]
  let used = firstPageReserved
  for (const unit of units) {
    const current = pages[pages.length - 1]
    if (current.length > 0 && used + unit.cost > budget) {
      pages.push([unit])
      used = 2 + unit.cost
    } else {
      current.push(unit)
      used += unit.cost
    }
  }
  return absorbShortTail(pages, firstPageReserved, budget, tolerance)
}

// Une page "(suite)" qui ne porte qu'un encadré ou deux lignes (une astuce
// seule en haut d'une page vide) est inutile : si le dépassement reste faible,
// on la rattache à la page précédente — FitToFrame réduit alors le texte de
// quelques pour cent pour que tout tienne.
// Un simple encadré (astuce, erreur à éviter) seul sur une page est rattaché
// même avec un dépassement plus marqué ; un bloc plus gros reste prudent.
const TAIL_TOLERANCE = 1.05
const CALLOUT_TAIL = 4.5
const CALLOUT_TOLERANCE = 1.12
// Les diapositives de concept (texte courant) sont estimées trop haut (~13 %) :
// on y garde sur une seule page un texte suivi d'un exemple ou d'un encadré,
// que FitToFrame réduit de quelques pour cent, plutôt que de les séparer.
// Pas pour les concepts à tableau, dont la hauteur est moins bien estimée.
const CONCEPT_TOLERANCE = { callout: 1.3, tail: 1.3, maxTail: 20 }
const SHORT_TAIL = 7

function absorbShortTail(pages, firstPageReserved, budget, tolerance) {
  const { callout = CALLOUT_TOLERANCE, tail: tailTolerance = TAIL_TOLERANCE, maxTail = SHORT_TAIL } = tolerance
  const cost = (page, index) => (index === 0 ? firstPageReserved : 2) + page.reduce((s, u) => s + u.cost, 0)
  for (let i = pages.length - 1; i > 0; i--) {
    const tail = pages[i].reduce((sum, u) => sum + u.cost, 0)
    const allowed = tail <= CALLOUT_TAIL ? Math.max(callout, tailTolerance) : tailTolerance
    if (tail <= maxTail && cost(pages[i - 1], i - 1) + tail <= budget * allowed) {
      pages[i - 1] = [...pages[i - 1], ...pages[i]]
      pages.splice(i, 1)
    }
  }
  return pages
}

function extraUnits(slide) {
  return EXTRA_KEYS.filter((k) => slide[k]).flatMap((k) =>
    k === 'example' ? exampleUnits(slide[k]) : [{ kind: 'extra', key: k, value: slide[k], cost: extraCost(k, slide[k]) }]
  )
}

function rebuild(slide, page, pageIndex, baseFields) {
  const next = { ...baseFields, type: slide.type, title: slide.title }
  if (pageIndex > 0) {
    next.title = `${slide.title} (suite)`
    next.continued = true
  }
  for (const unit of page) {
    if (unit.kind !== 'extra') continue
    if (unit.key === 'example' && next.example?.lines && unit.value.lines) {
      next.example = { ...next.example, lines: [...next.example.lines, ...unit.value.lines] }
    } else {
      next[unit.key] = unit.value
    }
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
  const pages = paginate(units, 2, BUDGET, slide.table ? {} : CONCEPT_TOLERANCE)
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
  const pages = paginate(units, 2, LIST_BUDGET)
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
  const pages = paginate(units, 2, LIST_BUDGET)
  if (pages.length === 1) return [slide]
  return pages.map((page, p) => {
    const next = { ...slide, continued: p > 0, terms: page.flatMap((u) => u.value) }
    if (p > 0 && slide.title) next.title = `${slide.title} (suite)`
    return next
  })
}

// Tableaux comparatifs : découpés par rangées, titre et en-têtes répétés sur
// chaque diapositive "(suite)".
function splitComparisonTable(slide) {
  const rows = slide.rows || []
  const units = rows.map((row) => ({ kind: 'row', value: row, cost: tableRowCost(row, (slide.columns || []).length || row.length) }))
  const pages = paginate(units, 2 + 1.6, LIST_BUDGET)
  if (pages.length === 1) return [slide]
  return pages.map((page, p) => {
    const next = { ...slide, continued: p > 0, rows: page.map((u) => u.value) }
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
  'comparison-table': splitComparisonTable,
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

// Coût estimé d'une diapositive déjà découpée (même unité que BUDGET) : sert à
// fusionner les petites diapositives voisines et à étalonner l'estimation.
export function estimateCost(slide) {
  const extras = extraUnits(slide).reduce((s, u) => s + u.cost, 0)
  switch (slide.type) {
    case 'process':
      return 2 + lines(slide.intro) + (slide.steps || []).reduce((s, st) => s + stepCost(st), 0) + extras
    case 'concept': {
      const paragraphs = Array.isArray(slide.body) ? slide.body : slide.body ? [slide.body] : []
      return 2 + paragraphs.reduce((s, p) => s + lines(p) + 0.4, 0) + (slide.bullets || []).reduce((s, b) => s + lines(b) + 0.3, 0) + extras
    }
    case 'case-study':
      return 2 + (slide.scenario ? lines(slide.scenario) + 1 : 0) + (slide.steps || []).reduce((s, st) => s + stepCost(st), 0) + extras
    case 'exercise':
      return 2 + (slide.instructions ? lines(slide.instructions) + 1.2 : 0) + (slide.steps || []).reduce((s, st) => s + stepCost(st), 0) + extras + (slide.deliverable ? lines(slide.deliverable) + 0.5 : 0)
    default:
      return 0
  }
}
