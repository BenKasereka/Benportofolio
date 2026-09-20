// Génère un PDF en capturant chaque diapositive déjà rendue dans le DOM
// (voir ExportSlideStage) — le PDF est donc un miroir visuel exact de ce que
// l'apprenant voit à l'écran, sans moteur de mise en page séparé à
// maintenir. Bibliothèques chargées dynamiquement pour ne pas alourdir le
// bundle initial (elles ne servent qu'au clic sur "Télécharger en PDF").
const PAGE_WIDTH = 1280
const PAGE_HEIGHT = 720

export async function buildModulePdf(slideEls) {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import('html2canvas'), import('jspdf')])

  const doc = new jsPDF({ orientation: 'landscape', unit: 'px', format: [PAGE_WIDTH, PAGE_HEIGHT] })

  for (let i = 0; i < slideEls.length; i++) {
    const canvas = await html2canvas(slideEls[i], {
      scale: 2,
      backgroundColor: '#ffffff',
      width: PAGE_WIDTH,
      height: PAGE_HEIGHT,
    })
    const imgData = canvas.toDataURL('image/jpeg', 0.92)
    if (i > 0) doc.addPage([PAGE_WIDTH, PAGE_HEIGHT], 'landscape')
    doc.addImage(imgData, 'JPEG', 0, 0, PAGE_WIDTH, PAGE_HEIGHT)
  }

  return doc.output('blob')
}
