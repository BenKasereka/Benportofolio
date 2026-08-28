import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../../config/site'

const BASE = import.meta.env.BASE_URL

/** Crée la balise <meta> si absente, puis lui affecte sa valeur. */
function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Écrit le <title>, la description et les balises de partage (Open Graph +
 * Twitter Card) à chaque changement de route.
 *
 * Sans cela, les 11 routes de l'application partagent un seul titre et
 * n'affichent aucun aperçu lorsqu'un lien est partagé sur LinkedIn ou WhatsApp.
 */
export default function SEO({ title, description, image, type = 'website', noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`
    const desc = description || site.tagline
    const url = `${site.url}${pathname === '/' ? '' : pathname}`
    const img = image
      ? image.startsWith('http')
        ? image
        : `${site.url}/${image.replace(/^\//, '')}`
      : `${site.url}/images/social/og-default.png`

    document.title = fullTitle

    setMeta('name', 'description', desc)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setLink('canonical', url)

    setMeta('property', 'og:type', type)
    setMeta('property', 'og:site_name', site.name)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:locale', 'fr_FR')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', img)
  }, [title, description, image, type, noindex, pathname])

  return null
}

export { BASE }
