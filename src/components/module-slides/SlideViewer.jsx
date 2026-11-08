import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, CheckCircle2, ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react'
import SlideRenderer from './SlideRenderer'

// Visionneuse en diapositives : une diapositive affichée à la fois (au lieu
// du long scroll précédent), navigation clavier/boutons/points de
// progression, plein écran, et confirmation de fin de module (fait avancer
// la barre de progression du sommaire). Composant entièrement contrôlé par
// son propre état — le conteneur d'export (ExportSlideStage) monte les
// mêmes SlideRenderer indépendamment, sans dépendre de cet état.
export default function SlideViewer({ slides, moduleLabel, isCompleted, onComplete }) {
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)
  const total = slides.length

  const goTo = useCallback((i) => setIndex(Math.max(0, Math.min(total - 1, i))), [total])
  const next = useCallback(() => goTo(index + 1), [index, goTo])
  const prev = useCallback(() => goTo(index - 1), [index, goTo])

  useEffect(() => {
    function onKey(e) {
      // Le curseur de progression gère déjà ses propres flèches.
      if (e.target instanceof HTMLInputElement) return
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === containerRef.current)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      containerRef.current?.requestFullscreen?.()
    }
  }

  // Largeur calculée pour occuper le maximum d'espace disponible en
  // respectant à la fois la largeur ET la hauteur de l'écran (ratio 16:9
  // conservé) : la plus petite valeur entre "toute la largeur disponible"
  // et "la largeur d'une boîte 16:9 dont la hauteur ferait 82 % (90 % en
  // plein écran) de la hauteur de la fenêtre" — équivalent CSS pur d'un
  // object-fit: contain, sans mesure JS ni recalcul au resize.
  const widthClass = isFullscreen
    ? 'w-[min(100%,calc(90vh_*_16_/_9))]'
    : 'w-[min(100%,calc(82vh_*_16_/_9))]'

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? 'flex h-screen w-screen flex-col items-center justify-center gap-5 bg-surface p-6'
          : 'flex flex-col items-center gap-5'
      }
    >
      <div className={`relative mx-auto aspect-video max-w-full ${widthClass}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <SlideRenderer slide={slides[index]} index={index} total={total} moduleLabel={moduleLabel} />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Quitter le plein écran' : 'Passer en plein écran'}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/40 text-white backdrop-blur transition hover:bg-ink/60"
        >
          {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
        </button>
      </div>

      <div className={`mx-auto flex items-center justify-between gap-4 ${widthClass}`}>
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="btn-secondary !py-2.5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </button>

        {/* Curseur plutôt qu'un point par diapositive : les modules pas à pas
            dépassent 150 diapositives, une rangée de points débordait de l'écran. */}
        <div className="flex min-w-0 flex-1 items-center gap-3 px-2">
          <input
            type="range"
            min={1}
            max={total}
            value={index + 1}
            onChange={(e) => goTo(Number(e.target.value) - 1)}
            aria-label="Progression du module"
            aria-valuetext={`Diapositive ${index + 1} sur ${total}`}
            className="h-1.5 min-w-0 flex-1 cursor-pointer accent-primary"
          />
          <span className="shrink-0 text-xs font-semibold tabular-nums text-muted">
            {index + 1} / {total}
          </span>
        </div>

        {index === total - 1 ? (
          <button
            type="button"
            onClick={onComplete}
            disabled={isCompleted}
            className="btn-primary !py-2.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Check className="h-4 w-4" />}
            {isCompleted ? 'Module terminé' : 'Marquer comme terminé'}
          </button>
        ) : (
          <button type="button" onClick={next} className="btn-primary !py-2.5">
            Suivant
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
