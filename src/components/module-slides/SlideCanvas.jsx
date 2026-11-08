import { useLayoutEffect, useRef } from 'react'

const ASSET_BASE = import.meta.env.BASE_URL
const MIN_SCALE = 0.7

// Filet de sécurité derrière expandSlides : si une diapositive reste plus
// haute que son cadre (étape dense impossible à couper, police chargée plus
// tard…), le contenu est réduit juste assez pour tenir, au lieu d'être coupé
// à l'export PDF ou de forcer un défilement. Le style est posé directement
// sur le DOM pour mesurer et corriger dans le même passage de mise en page.
function FitToFrame({ children }) {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  useLayoutEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return undefined

    const fit = () => {
      inner.style.transform = ''
      inner.style.width = '100%'
      inner.style.height = '100%'
      const cs = getComputedStyle(outer)
      const available = outer.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
      const content = inner.firstElementChild
      const natural = content ? content.scrollHeight : 0
      if (!available || !natural || natural <= available) return
      const scale = Math.max(MIN_SCALE, available / natural)
      inner.style.transform = `scale(${scale})`
      inner.style.width = `${100 / scale}%`
      inner.style.height = `${100 / scale}%`
    }

    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(outer)
    if (inner.firstElementChild) observer.observe(inner.firstElementChild)
    return () => observer.disconnect()
  }, [children])

  return (
    <div ref={outerRef} data-slide-content className="relative flex-1 overflow-hidden px-8 py-8 sm:px-16 sm:py-12">
      <div ref={innerRef} className="h-full w-full origin-top-left">
        {children}
      </div>
    </div>
  )
}

// Cadre visuel partagé par toutes les diapositives — même structure (bandeau
// haut avec repère de type + module, zone de contenu, pied de page avec
// marque + numéro) pour garder une identité cohérente sur les ~13 types de
// diapositives, à l'écran comme dans les exports PDF/PPTX.
export default function SlideCanvas({ kicker, moduleLabel, index, total, variant = 'default', children }) {
  const isDark = variant === 'cover' || variant === 'closing'

  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden rounded-3xl border shadow-card ${
        isDark ? 'border-transparent bg-primary-secondary text-white' : 'border-border bg-surface-white text-ink'
      }`}
    >
      <div
        className={`flex items-center justify-between border-b px-8 py-4 sm:px-16 sm:py-5 ${
          isDark ? 'border-white/15' : 'border-border/70'
        }`}
      >
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest ${
            isDark ? 'border-white/25 bg-white/10 text-white' : 'border-primary/25 bg-primary/10 text-primary-dark'
          }`}
        >
          {kicker}
        </span>
        <span className={`text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-white/70' : 'text-muted'}`}>
          {moduleLabel}
        </span>
      </div>

      <FitToFrame>{children}</FitToFrame>

      <div
        className={`flex items-center justify-between border-t px-8 py-3.5 sm:px-16 ${
          isDark ? 'border-white/15' : 'border-border/70'
        }`}
      >
        <div className="flex items-center gap-2">
          <img src={`${ASSET_BASE}images/brand/bk-boost-logo.png`} alt="" className="h-5 w-5 rounded" />
          <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white/70' : 'text-muted'}`}>
            BK-BOOST Ltd.
          </span>
        </div>
        <span className={`text-xs font-semibold ${isDark ? 'text-white/70' : 'text-muted'}`}>
          {index}/{total}
        </span>
      </div>
    </div>
  )
}
