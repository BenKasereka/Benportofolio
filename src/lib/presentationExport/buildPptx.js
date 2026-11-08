import { BRAND } from './brand'

// Génère un vrai fichier .pptx éditable (pas une capture d'écran) à partir
// des mêmes données structurées que les diapositives à l'écran — une
// fonction de construction par type. Pas de parité pixel exigée avec le
// rendu web, juste une mise en page propre et la charte de couleurs du site.
// pptxgenjs chargé dynamiquement, uniquement au clic sur "Télécharger".

const W = 10
const H = 5.625
const MARGIN = 0.6

function addFooter(slide, index, total, dark) {
  slide.addText('BK-BOOST Ltd.', {
    x: MARGIN, y: H - 0.42, w: 3, h: 0.3,
    fontSize: 9, bold: true, color: dark ? 'FFFFFF' : BRAND.muted, charSpacing: 1, align: 'left',
  })
  slide.addText(`${index}/${total}`, {
    x: W - MARGIN - 1.5, y: H - 0.42, w: 1.5, h: 0.3,
    fontSize: 9, align: 'right', color: dark ? 'FFFFFF' : BRAND.muted,
  })
}

function addKicker(slide, text, dark) {
  slide.addText(text.toUpperCase(), {
    x: MARGIN, y: 0.35, w: 6, h: 0.35,
    fontSize: 10, bold: true, charSpacing: 1.5, color: dark ? 'FFFFFF' : BRAND.primaryDark, align: 'left',
  })
}

function addTitle(slide, title, dark, y = 1.05) {
  slide.addText(title, {
    x: MARGIN, y, w: W - MARGIN * 2, h: 0.9,
    fontSize: 24, bold: true, color: dark ? 'FFFFFF' : BRAND.ink, fontFace: 'Arial', align: 'left',
  })
}

function bulletBlock(slide, items, y, opts = {}) {
  slide.addText(
    items.map((text) => ({ text, options: { bullet: { code: opts.bulletCode || '2022' }, breakLine: true, paraSpaceAfter: 10, align: 'justify' } })),
    { x: MARGIN, y, w: W - MARGIN * 2, h: H - y - 0.6, fontSize: opts.fontSize || 14, color: opts.color || BRAND.ink, valign: 'top', align: 'justify' }
  )
}

function buildCover(pSlide, slide) {
  pSlide.background = { color: BRAND.primary }
  addKicker(pSlide, 'Nouveau module', true)
  addTitle(pSlide, slide.title, true, 1.8)
  if (slide.hook) {
    pSlide.addText(slide.hook, { x: MARGIN, y: 3.0, w: W - MARGIN * 2, h: 1.5, fontSize: 15, color: 'FFFFFF', valign: 'top', align: 'left' })
  }
}

function buildObjectives(pSlide, slide) {
  addKicker(pSlide, 'Objectifs')
  addTitle(pSlide, slide.title || 'Objectifs de ce module')
  bulletBlock(pSlide, slide.items || [], 2.0, { bulletCode: '2713', fontSize: 15 })
}

// Diapositives riches (pas-à-pas, exemples, résultats attendus) : tout le
// contenu passe dans une seule zone de texte qui s'écoule de haut en bas,
// plus un tableau éventuel. expandSlides a déjà découpé les contenus trop
// longs, et `fit: 'shrink'` absorbe le reste à l'ouverture dans PowerPoint.
function stepRuns(step, number) {
  if (typeof step === 'string') {
    return [{ text: `→ ${step}`, options: { breakLine: true, paraSpaceAfter: 4, color: BRAND.ink } }]
  }
  const runs = [{ text: `${number}. ${step.title}`, options: { bold: true, breakLine: true, color: BRAND.ink, paraSpaceAfter: 2 } }]
  if (step.body) runs.push({ text: step.body, options: { breakLine: true, color: BRAND.muted, paraSpaceAfter: 2 } })
  ;(step.actions || []).forEach((a, j) => runs.push({ text: `   ${number}.${j + 1}  ${a}`, options: { breakLine: true, color: BRAND.ink, paraSpaceAfter: 2 } }))
  if (step.result) runs.push({ text: `✓ ${step.result}`, options: { breakLine: true, color: BRAND.primaryDark, paraSpaceAfter: 2 } })
  runs[runs.length - 1].options.paraSpaceAfter = 8
  return runs
}

function extraRuns(slide) {
  const runs = []
  if (slide.example) {
    runs.push({ text: (slide.example.title || 'Exemple concret').toUpperCase(), options: { bold: true, breakLine: true, color: BRAND.secondary, paraSpaceAfter: 2 } })
    const lines = Array.isArray(slide.example.lines) ? slide.example.lines : [slide.example.body]
    lines.forEach((l) => runs.push({ text: l, options: { breakLine: true, color: BRAND.ink, fontFace: 'Consolas', paraSpaceAfter: 2 } }))
    runs[runs.length - 1].options.paraSpaceAfter = 8
  }
  const callouts = [
    ['result', 'Résultat attendu', BRAND.primaryDark],
    ['tip', 'Astuce de terrain', BRAND.secondary],
    ['pitfall', 'Erreur à éviter', BRAND.accentGold],
    ['highlight', 'À retenir', BRAND.primaryDark],
  ]
  callouts.forEach(([key, label, color]) => {
    if (slide[key]) {
      runs.push({ text: `${label} — `, options: { bold: true, color } })
      runs.push({ text: slide[key], options: { breakLine: true, color: BRAND.ink, paraSpaceAfter: 6 } })
    }
  })
  return runs
}

function richBody(pSlide, slide, runs, startY) {
  let bottom = H - 0.6
  if (slide.table) {
    const rows = slide.table.rows || []
    const tableH = Math.min(1.9, 0.3 * (rows.length + 1))
    const headerRow = (slide.table.columns || []).map((c) => ({ text: c, options: { bold: true, color: 'FFFFFF', fill: { color: BRAND.secondary }, fontSize: 9 } }))
    const bodyRows = rows.map((row, i) => row.map((cell) => ({ text: String(cell), options: { fontSize: 9, color: BRAND.ink, fill: { color: i % 2 ? BRAND.surface : 'FFFFFF' } } })))
    bottom -= tableH + 0.1
    pSlide.addTable([headerRow, ...bodyRows], { x: MARGIN, y: bottom + 0.1, w: W - MARGIN * 2, h: tableH, border: { type: 'solid', color: BRAND.border, pt: 0.5 }, autoPage: false, valign: 'top' })
  }
  if (runs.length) {
    pSlide.addText(runs, { x: MARGIN, y: startY, w: W - MARGIN * 2, h: bottom - startY, fontSize: 11, valign: 'top', align: 'left', fit: 'shrink' })
  }
}

function buildConcept(pSlide, slide) {
  addKicker(pSlide, 'Concept clé')
  addTitle(pSlide, slide.title)
  const paragraphs = Array.isArray(slide.body) ? slide.body : slide.body ? [slide.body] : []
  const runs = [
    ...paragraphs.map((text) => ({ text, options: { breakLine: true, paraSpaceAfter: 8, color: BRAND.muted, align: 'justify' } })),
    ...(slide.bullets || []).map((b) => ({ text: `•  ${b}`, options: { breakLine: true, paraSpaceAfter: 4, color: BRAND.ink } })),
    ...extraRuns(slide),
  ]
  richBody(pSlide, slide, runs, 2.0)
}

function buildStatCallout(pSlide, slide) {
  pSlide.addText(String(slide.stat), { x: MARGIN, y: 1.4, w: W - MARGIN * 2, h: 1.6, align: 'center', fontSize: 54, bold: true, color: BRAND.primary })
  pSlide.addText(slide.caption, { x: MARGIN, y: 3.0, w: W - MARGIN * 2, h: 0.6, align: 'center', fontSize: 17, bold: true, color: BRAND.ink })
  if (slide.context) {
    pSlide.addText(slide.context, { x: MARGIN + 0.8, y: 3.65, w: W - MARGIN * 2 - 1.6, h: 0.9, align: 'center', fontSize: 11, color: BRAND.muted })
  }
}

function buildComparisonTable(pSlide, slide) {
  if (slide.title) { addKicker(pSlide, 'Comparatif'); addTitle(pSlide, slide.title) }
  const headerRow = (slide.columns || []).map((c) => ({ text: c, options: { bold: true, color: 'FFFFFF', fill: { color: BRAND.secondary }, fontSize: 11, align: 'left' } }))
  const bodyRows = (slide.rows || []).map((row, i) =>
    row.map((cell) => ({ text: String(cell), options: { fontSize: 10, color: BRAND.ink, fill: { color: i % 2 === 1 ? BRAND.surface : 'FFFFFF' }, align: 'left' } }))
  )
  pSlide.addTable([headerRow, ...bodyRows], {
    x: MARGIN, y: slide.title ? 2.0 : 1.1, w: W - MARGIN * 2, h: 2.9,
    border: { type: 'solid', color: BRAND.border, pt: 0.5 }, autoPage: false, valign: 'top',
  })
}

function buildProcess(pSlide, slide) {
  addKicker(pSlide, slide.stepLabel || 'Méthode')
  if (slide.title) addTitle(pSlide, slide.title)
  const offset = slide.stepOffset || 0
  const runs = [
    ...(slide.intro ? [{ text: slide.intro, options: { breakLine: true, paraSpaceAfter: 8, color: BRAND.muted } }] : []),
    ...(slide.steps || []).flatMap((step, i) => stepRuns(step, offset + i + 1)),
    ...extraRuns(slide),
  ]
  richBody(pSlide, slide, runs, slide.title ? 2.0 : 1.1)
}

function buildChecklist(pSlide, slide) {
  if (slide.title) { addKicker(pSlide, 'À faire'); addTitle(pSlide, slide.title) }
  bulletBlock(pSlide, slide.items || [], slide.title ? 2.0 : 1.1, { bulletCode: '25A1', fontSize: 13 })
}

function buildWarning(pSlide, slide) {
  pSlide.addShape('rect', { x: MARGIN, y: 0.6, w: 0.08, h: 0.7, fill: { color: BRAND.accentGold }, line: { type: 'none' } })
  pSlide.addText(slide.title, { x: MARGIN + 0.25, y: 0.55, w: W - MARGIN * 2 - 0.25, h: 0.8, fontSize: 20, bold: true, color: BRAND.ink, valign: 'middle', align: 'left' })
  bulletBlock(pSlide, slide.items || [], 1.7, { bulletCode: '25CF', fontSize: 13, color: BRAND.ink })
}

function buildCaseStudy(pSlide, slide) {
  if (slide.title) { addKicker(pSlide, 'Cas pratique'); addTitle(pSlide, slide.title) }
  let y = slide.title ? 2.0 : 1.1
  if (slide.scenario) {
    pSlide.addShape('rect', { x: MARGIN, y, w: 0.06, h: 1.1, fill: { color: BRAND.accentGold }, line: { type: 'none' } })
    pSlide.addText(slide.scenario, { x: MARGIN + 0.2, y, w: W - MARGIN * 2 - 0.2, h: 1.1, fontSize: 12, italic: true, color: BRAND.muted, valign: 'top', align: 'justify' })
    y += 1.3
  }
  const runs = [...(slide.steps || []).flatMap((step, i) => stepRuns(step, i + 1)), ...extraRuns(slide)]
  richBody(pSlide, slide, runs, y)
}

function buildVocabulary(pSlide, slide) {
  addKicker(pSlide, 'Vocabulaire')
  addTitle(pSlide, slide.title || 'Vocabulaire clé')
  const terms = slide.terms || []
  pSlide.addText(
    terms.map((t) => ({
      text: `${t.term} — `,
      options: { bold: true, color: BRAND.primaryDark, breakLine: false, align: 'justify' },
    })).flatMap((run, i) => [run, { text: `${terms[i].definition}\n\n`, options: { color: BRAND.muted, breakLine: true, align: 'justify' } }]),
    { x: MARGIN, y: 2.0, w: W - MARGIN * 2, h: 2.9, fontSize: 12, valign: 'top', align: 'justify' }
  )
}

function buildRecap(pSlide, slide) {
  addKicker(pSlide, 'Synthèse')
  addTitle(pSlide, slide.title || "Ce qu'il faut retenir")
  bulletBlock(pSlide, slide.items || [], 2.0, { bulletCode: '2728', fontSize: 15 })
}

function buildExercise(pSlide, slide) {
  addKicker(pSlide, 'Exercice')
  addTitle(pSlide, slide.title)
  const runs = [
    ...(slide.instructions ? [{ text: slide.instructions, options: { breakLine: true, paraSpaceAfter: 8, color: BRAND.ink } }] : []),
    ...(slide.steps || []).flatMap((step, i) => stepRuns(step, i + 1)),
    ...extraRuns(slide),
    ...(slide.deliverable
      ? [{ text: 'Livrable attendu — ', options: { bold: true, color: BRAND.primaryDark } }, { text: slide.deliverable, options: { breakLine: true, color: BRAND.ink } }]
      : []),
  ]
  richBody(pSlide, slide, runs, 2.0)
}

function buildClosing(pSlide, slide) {
  pSlide.background = { color: BRAND.primary }
  addKicker(pSlide, 'Module terminé', true)
  addTitle(pSlide, 'Bravo, vous avez fini ce module !', true, 1.8)
  if (slide.nextModuleHint) {
    pSlide.addText(slide.nextModuleHint, { x: MARGIN, y: 3.0, w: W - MARGIN * 2, h: 1.5, fontSize: 14, color: 'FFFFFF', valign: 'top', align: 'left' })
  }
}

const BUILDERS = {
  cover: buildCover,
  objectives: buildObjectives,
  concept: buildConcept,
  'stat-callout': buildStatCallout,
  'comparison-table': buildComparisonTable,
  process: buildProcess,
  checklist: buildChecklist,
  warning: buildWarning,
  'case-study': buildCaseStudy,
  vocabulary: buildVocabulary,
  recap: buildRecap,
  exercise: buildExercise,
  closing: buildClosing,
}

const DARK_TYPES = new Set(['cover', 'closing'])

export async function buildModulePptx({ slides, moduleTitle, formationTitle }) {
  const { default: PptxGenJS } = await import('pptxgenjs')
  const pptx = new PptxGenJS()
  pptx.defineLayout({ name: 'BK16x9', width: W, height: H })
  pptx.layout = 'BK16x9'
  pptx.title = `${moduleTitle} — ${formationTitle}`
  pptx.author = 'BK-BOOST Ltd.'

  slides.forEach((slide, i) => {
    const pSlide = pptx.addSlide()
    pSlide.background = { color: 'FFFFFF' }
    const build = BUILDERS[slide.type]
    if (build) build(pSlide, slide)
    addFooter(pSlide, i + 1, slides.length, DARK_TYPES.has(slide.type))
  })

  return pptx.write({ outputType: 'blob' })
}
