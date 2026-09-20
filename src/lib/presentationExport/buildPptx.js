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
    fontSize: 9, bold: true, color: dark ? 'FFFFFF' : BRAND.muted, charSpacing: 1,
  })
  slide.addText(`${index}/${total}`, {
    x: W - MARGIN - 1.5, y: H - 0.42, w: 1.5, h: 0.3,
    fontSize: 9, align: 'right', color: dark ? 'FFFFFF' : BRAND.muted,
  })
}

function addKicker(slide, text, dark) {
  slide.addText(text.toUpperCase(), {
    x: MARGIN, y: 0.35, w: 6, h: 0.35,
    fontSize: 10, bold: true, charSpacing: 1.5, color: dark ? 'FFFFFF' : BRAND.primaryDark,
  })
}

function addTitle(slide, title, dark, y = 1.05) {
  slide.addText(title, {
    x: MARGIN, y, w: W - MARGIN * 2, h: 0.9,
    fontSize: 24, bold: true, color: dark ? 'FFFFFF' : BRAND.ink, fontFace: 'Arial',
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
    pSlide.addText(slide.hook, { x: MARGIN, y: 3.0, w: W - MARGIN * 2, h: 1.5, fontSize: 15, color: 'FFFFFF', valign: 'top' })
  }
}

function buildObjectives(pSlide, slide) {
  addKicker(pSlide, 'Objectifs')
  addTitle(pSlide, slide.title || 'Objectifs de ce module')
  bulletBlock(pSlide, slide.items || [], 2.0, { bulletCode: '2713', fontSize: 15 })
}

function buildConcept(pSlide, slide) {
  addKicker(pSlide, 'Concept clé')
  addTitle(pSlide, slide.title)
  const paragraphs = Array.isArray(slide.body) ? slide.body : [slide.body]
  pSlide.addText(
    paragraphs.map((text) => ({ text, options: { breakLine: true, paraSpaceAfter: 10, align: 'justify' } })),
    { x: MARGIN, y: 2.0, w: W - MARGIN * 2, h: slide.highlight ? 2.1 : 2.9, fontSize: 13, color: BRAND.muted, valign: 'top', align: 'justify' }
  )
  if (slide.highlight) {
    pSlide.addShape('roundRect', { x: MARGIN, y: 4.25, w: W - MARGIN * 2, h: 0.75, fill: { color: BRAND.primaryLight }, line: { color: BRAND.primary, width: 0.75 }, rectRadius: 0.08 })
    pSlide.addText(slide.highlight, { x: MARGIN + 0.15, y: 4.3, w: W - MARGIN * 2 - 0.3, h: 0.65, fontSize: 11, bold: true, color: BRAND.primaryDark, valign: 'middle' })
  }
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
  const headerRow = (slide.columns || []).map((c) => ({ text: c, options: { bold: true, color: 'FFFFFF', fill: { color: BRAND.secondary }, fontSize: 11 } }))
  const bodyRows = (slide.rows || []).map((row, i) =>
    row.map((cell) => ({ text: String(cell), options: { fontSize: 10, color: BRAND.ink, fill: { color: i % 2 === 1 ? BRAND.surface : 'FFFFFF' } } }))
  )
  pSlide.addTable([headerRow, ...bodyRows], {
    x: MARGIN, y: slide.title ? 2.0 : 1.1, w: W - MARGIN * 2, h: 2.9,
    border: { type: 'solid', color: BRAND.border, pt: 0.5 }, autoPage: false, valign: 'top',
  })
}

function buildProcess(pSlide, slide) {
  if (slide.title) { addKicker(pSlide, 'Méthode'); addTitle(pSlide, slide.title) }
  const steps = slide.steps || []
  const startY = slide.title ? 2.0 : 1.1
  const rowH = Math.min(0.85, (H - startY - 0.6) / Math.max(steps.length, 1))
  steps.forEach((step, i) => {
    const y = startY + i * rowH
    pSlide.addShape('ellipse', { x: MARGIN, y: y + 0.05, w: 0.4, h: 0.4, fill: { color: BRAND.primaryLight }, line: { type: 'none' } })
    pSlide.addText(String(i + 1), { x: MARGIN, y: y + 0.05, w: 0.4, h: 0.4, align: 'center', valign: 'middle', fontSize: 13, bold: true, color: BRAND.primaryDark })
    pSlide.addText(
      [{ text: step.title, options: { bold: true, breakLine: true, color: BRAND.ink } }, ...(step.body ? [{ text: step.body, options: { color: BRAND.muted, fontSize: 10, align: 'justify' } }] : [])],
      { x: MARGIN + 0.55, y, w: W - MARGIN * 2 - 0.55, h: rowH, fontSize: 12, valign: 'top' }
    )
  })
}

function buildChecklist(pSlide, slide) {
  if (slide.title) { addKicker(pSlide, 'À faire'); addTitle(pSlide, slide.title) }
  bulletBlock(pSlide, slide.items || [], slide.title ? 2.0 : 1.1, { bulletCode: '25A1', fontSize: 13 })
}

function buildWarning(pSlide, slide) {
  pSlide.addShape('rect', { x: MARGIN, y: 0.6, w: 0.08, h: 0.7, fill: { color: BRAND.accentGold }, line: { type: 'none' } })
  pSlide.addText(slide.title, { x: MARGIN + 0.25, y: 0.55, w: W - MARGIN * 2 - 0.25, h: 0.8, fontSize: 20, bold: true, color: BRAND.ink, valign: 'middle' })
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
  if (slide.steps?.length) bulletBlock(pSlide, slide.steps, y, { bulletCode: '2192', fontSize: 12 })
}

function buildVocabulary(pSlide, slide) {
  addKicker(pSlide, 'Vocabulaire')
  addTitle(pSlide, slide.title || 'Vocabulaire clé')
  const terms = slide.terms || []
  pSlide.addText(
    terms.map((t) => ({
      text: `${t.term} — `,
      options: { bold: true, color: BRAND.primaryDark, breakLine: false },
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
  pSlide.addShape('roundRect', { x: MARGIN, y: 2.0, w: W - MARGIN * 2, h: 2.2, fill: { color: BRAND.primaryLight }, line: { type: 'none' }, rectRadius: 0.1 })
  pSlide.addText(slide.instructions, { x: MARGIN + 0.25, y: 2.15, w: W - MARGIN * 2 - 0.5, h: 1.9, fontSize: 13, color: BRAND.ink, valign: 'top', align: 'justify' })
  if (slide.deliverable) {
    pSlide.addText(`Livrable attendu — ${slide.deliverable}`, { x: MARGIN, y: 4.35, w: W - MARGIN * 2, h: 0.5, fontSize: 11, bold: true, color: BRAND.primaryDark })
  }
}

function buildClosing(pSlide, slide) {
  pSlide.background = { color: BRAND.primary }
  addKicker(pSlide, 'Module terminé', true)
  addTitle(pSlide, 'Bravo, vous avez fini ce module !', true, 1.8)
  if (slide.nextModuleHint) {
    pSlide.addText(slide.nextModuleHint, { x: MARGIN, y: 3.0, w: W - MARGIN * 2, h: 1.5, fontSize: 14, color: 'FFFFFF', valign: 'top' })
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
