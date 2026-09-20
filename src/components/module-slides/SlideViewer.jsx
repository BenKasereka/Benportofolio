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

  return (
    <div
      ref={containerRef}
      className={
        isFullscreen
          ? 'flex h-screen w-screen flex-col items-center justify-center gap-5 bg-surface p-6'
          : 'flex flex-col items-center gap-5'
      }
    >
      <div className={`relative w-auto max-w-full aspect-video ${isFullscreen ? 'h-[82vh]' : 'h-[min(58vh,560px)]'}`}>
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

      <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="btn-secondary !py-2.5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </button>

        <div className="flex items-center gap-1.5" role="tablist" aria-label="Progression du module">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => goTo(i)}
              aria-label={`Diapositive ${i + 1} sur ${total}`}
              className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-primary/40'}`}
            />
          ))}
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
