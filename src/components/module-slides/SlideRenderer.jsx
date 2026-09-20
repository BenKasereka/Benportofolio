import SlideCanvas from './SlideCanvas'
import { SLIDE_TYPE_COMPONENTS, SLIDE_TYPE_KICKERS } from './slideTypes'

const COVER_VARIANTS = { cover: 'cover', closing: 'closing' }

// Point d'entrée unique : reçoit une diapositive typée et la fait passer par
// le bon composant présentational, dans le cadre visuel commun (SlideCanvas).
export default function SlideRenderer({ slide, index, total, moduleLabel }) {
  const Component = SLIDE_TYPE_COMPONENTS[slide.type]
  if (!Component) return null

  return (
    <SlideCanvas
      kicker={SLIDE_TYPE_KICKERS[slide.type] || slide.type}
      moduleLabel={moduleLabel}
      index={index + 1}
      total={total}
      variant={COVER_VARIANTS[slide.type] || 'default'}
    >
      <Component {...slide} />
    </SlideCanvas>
  )
}
