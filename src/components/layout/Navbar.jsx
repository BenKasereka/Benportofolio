import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Home, Menu, X } from 'lucide-react'
import LanguageSwitcher from '../ui/LanguageSwitcher'

// Absolute paths must be prefixed with BASE_URL so they still resolve correctly
// when the app is served from a subpath (e.g. GitHub Pages' /Benportofolio/).
const BASE = import.meta.env.BASE_URL

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useTranslation('common')
  const isFormations = pathname.startsWith('/formations')

  // Parcours (À propos) et Expertise mènent chacun à leur propre ancre —
  // le premier vers le nouveau récit de parcours, le second vers l'aperçu
  // des pôles, d'où supply-chain/audit/data s'enchaînent dans l'ordre de page.
  const anchorLinks = [
    { label: t('nav.parcours'), href: `${BASE}#parcours` },
    { label: t('nav.expertise'), href: `${BASE}#expertise` },
    { label: t('nav.portfolio'), href: `${BASE}#portfolio` },
    { label: t('nav.contact'), href: `${BASE}#contact` },
  ]

  // On the home page, scroll straight to the target section — no full reload
  // needed. From any other page, let the href do a real navigation to home +
  // the anchor, and let the browser's native on-load anchor scroll take it
  // from there.
  //
  // Deferred by a tick and using the default (non-"smooth") scrollIntoView —
  // same fix as ScrollToTop in App.jsx (see commit "Make post-navigation
  // scroll-to-hash more robust"): calling scrollIntoView synchronously inside
  // the click handler can target a position that then shifts once the rest
  // of the page settles, so it silently lands back at the top. The global
  // `scroll-behavior: smooth` on <html> still animates the jump either way.
  const handleAnchorClick = (hash) => (e) => {
    if (pathname === '/') {
      e.preventDefault()
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ block: 'start' })
      }, 0)
    }
  }

  // Déjà sur l'accueil : react-router ne déclenche aucun changement de route
  // (même pathname), donc le ScrollToTop de App.jsx ne se relance pas — sans
  // ceci, cliquer sur Accueil depuis un point déjà descendu de la page ne
  // fait strictement rien, ce qui se lit comme un bouton cassé.
  const handleHomeClick = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`surface-dark fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-secondary shadow-md' : 'bg-secondary/95 backdrop-blur-sm'
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between gap-4">
        {/* Logo seul — badge rond (pas une forme de bouton comme les pills
            de la nav), sur un fond blanc pour ressortir sur la navbar sombre */}
        <Link to="/" className="flex min-h-tap shrink-0 items-center">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-2 shadow-sm">
            <img
              src={`${BASE}images/brand/bk-boost-logo.png`}
              alt="BK-BOOST Ltd."
              className="h-full w-full object-contain"
            />
          </span>
        </Link>

        {/* Tout le reste — Accueil, nav desktop, langue/CTA, hamburger — group
            à droite, séparé du logo. */}
        <div className="flex items-center gap-6">
          {/* Accueil — icône seule, ramène toujours à la page d'accueil, sur
              toutes les pages y compris la page d'accueil elle-même. */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex min-h-tap min-w-tap items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label={t('nav.home')}
          >
            <Home className="h-5 w-5" aria-hidden="true" />
          </Link>

          {/* Desktop nav — Parcours · Expertise · Portfolio · Formations */}
          <ul className="hidden items-center gap-6 lg:flex">
            {anchorLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleAnchorClick(link.href.split('#')[1])}
                  className="text-sm font-medium text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Formations — primary (vert), action de navigation standard */}
            <li>
              <Link
                to="/formations"
                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isFormations
                    ? 'border-primary-400/60 bg-primary/20 text-primary-400'
                    : 'border-primary-400/30 bg-primary/10 text-primary-400 hover:border-primary-400/60 hover:bg-primary/20'
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                {t('nav.formations')}
              </Link>
            </li>
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            {/* CTA desktop — un seul, une seule couleur (primary) — mène aux offres de formations disponibles */}
            <Link to="/formations" className="btn-primary !px-5 !py-2.5 !text-xs">
              {t('nav.cta')}
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(true)}
            className="flex min-h-tap min-w-tap items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white lg:hidden"
            aria-label={t('nav.openMenu')}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Menu mobile — mêmes éléments, en pleine hauteur */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="surface-dark fixed inset-0 z-50 bg-secondary backdrop-blur-lg lg:hidden"
          >
            <div className="section-container flex h-20 items-center justify-between">
              <span className="font-heading text-lg font-bold text-white">{t('nav.menu')}</span>
              <button
                onClick={() => setOpen(false)}
                className="flex min-h-tap min-w-tap items-center justify-center rounded-lg border border-white/30 text-white"
                aria-label={t('nav.closeMenu')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              className="section-container flex flex-col gap-6 pt-8"
            >
              {anchorLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { handleAnchorClick(link.href.split('#')[1])(e); setOpen(false) }}
                    className="text-2xl font-semibold text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * (anchorLinks.length + 1) }}
              >
                <Link
                  to="/formations"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-2xl font-semibold text-primary-400"
                >
                  <GraduationCap className="h-6 w-6" />
                  {t('nav.formations')}
                </Link>
              </motion.li>
              <div className="mt-2 flex items-center gap-4">
                <LanguageSwitcher />
              </div>
              <Link to="/formations" onClick={() => setOpen(false)} className="btn-primary mt-2 w-fit">
                {t('nav.cta')}
              </Link>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
