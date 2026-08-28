import { useEffect, useRef } from 'react'
import supplyChainRouteSvg from '../../assets/supply-chain-route.svg?raw'

/**
 * Illustration animée (SMIL natif, sans JS) du transport multimodal —
 * injectée en inline (pas en <img>) pour pouvoir mettre les animations en
 * pause quand prefers-reduced-motion est actif : un <img src="*.svg"> ne
 * donne aucun accès au DOM interne du SVG depuis la page hôte.
 */
export default function SupplyChainRouteIllustration({ className = '' }) {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const svg = wrapperRef.current?.querySelector('svg')
    if (!svg || typeof svg.pauseAnimations !== 'function') return undefined

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const applyMotionPreference = () => {
      if (media.matches) svg.pauseAnimations()
      else svg.unpauseAnimations()
    }

    applyMotionPreference()
    media.addEventListener('change', applyMotionPreference)
    return () => media.removeEventListener('change', applyMotionPreference)
  }, [])

  return (
    <div
      ref={wrapperRef}
      role="img"
      aria-label="Schéma animé illustrant le transport multimodal : maritime, aérien, ferroviaire et routier jusqu'au terrain"
      className={`supply-chain-route-illustration ${className}`}
      dangerouslySetInnerHTML={{ __html: supplyChainRouteSvg }}
    />
  )
}
