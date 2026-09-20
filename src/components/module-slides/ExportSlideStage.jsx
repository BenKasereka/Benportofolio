import SlideRenderer from './SlideRenderer'

export const EXPORT_SLIDE_WIDTH = 1280
export const EXPORT_SLIDE_HEIGHT = 720

// Monte toutes les diapositives du module à taille fixe, hors champ visuel
// (position fixed + taille nulle/overflow caché — pas display:none, pour
// que la mise en page existe réellement et soit capturable par
// html2canvas ; un décalage type left:-99999px ferait exploser la largeur
// scrollable de toute la page). Sert uniquement à la génération du PDF ; le
// PPTX est construit à partir des données brutes, sans passer par ce rendu.
export default function ExportSlideStage({ slides, moduleLabel, elsRef }) {
  return (
    <div aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => {
            elsRef.current[i] = el
          }}
          style={{ width: EXPORT_SLIDE_WIDTH, height: EXPORT_SLIDE_HEIGHT }}
        >
          <SlideRenderer slide={slide} index={i} total={slides.length} moduleLabel={moduleLabel} />
        </div>
      ))}
    </div>
  )
}
