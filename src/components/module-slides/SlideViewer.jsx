import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SlideRenderer from './SlideRenderer'

// Visionneuse en diapositives : une diapositive affichée à la fois (au lieu
// du long scroll précédent), navigation clavier/boutons/points de
// progression. Composant entièrement contrôlé par son propre état — le
// conteneur d'export (ExportSlideStage) monte les mêmes SlideRenderer
// indépendamment, sans dépendre de cet état.
export default function SlideViewer({ slides, moduleLabel }) {
  const [index, setIndex] = useState(0)
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

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative aspect-video h-[min(58vh,560px)] w-auto max-w-full">
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

        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          className="btn-primary !py-2.5 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Suivant
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
