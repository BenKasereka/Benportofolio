import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, GraduationCap, Home, Menu, X } from 'lucide-react'

// Absolute paths must be prefixed with BASE_URL so they still resolve correctly
// when the app is served from a subpath (e.g. GitHub Pages' /Benportofolio/).
const BASE = import.meta.env.BASE_URL

const PORTFOLIO_LINKS = [
  { label: 'BK-BOOST', href: `${BASE}#bk-boost` },
  { label: 'Audit', href: `${BASE}#audit` },
  { label: 'Data', href: `${BASE}#data` },
  { label: 'Langues', href: `${BASE}#languages` },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isFormations = pathname.startsWith('/formations')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-rouge-dark bg-rouge shadow-md' : 'bg-rouge/90 backdrop-blur-sm'
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-emerald text-sm font-extrabold text-slate-900">
            BK
          </span>
          Kasereka Vinyatsi
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <Home className="h-4 w-4" />
              Accueil
            </Link>
          </li>
          {PORTFOLIO_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
          {/* Bouton formations */}
          <li>
            <Link
              to="/formations"
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                isFormations
                  ? 'border-teal/60 bg-teal/10 text-teal'
                  : 'border-teal/30 bg-teal/5 text-teal hover:border-teal/60 hover:bg-teal/10'
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              Nos Formations
            </Link>
          </li>
          {/* Bouton tarifs */}
          <li>
            <Link
              to="/formations#tarifs"
              className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-all duration-300 hover:border-gold/70 hover:bg-gold/20"
            >
              <DollarSign className="h-4 w-4" />
              Nos Tarifs
            </Link>
          </li>
        </ul>

        {/* CTA desktop */}
        <a href={`${BASE}#contact`} className="hidden btn-primary !px-5 !py-2.5 !text-xs lg:inline-flex">
          Consultation
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border border-white/30 bg-rouge-dark p-2 text-white lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-rouge backdrop-blur-lg lg:hidden"
          >
            <div className="section-container flex h-20 items-center justify-between">
              <span className="font-heading text-lg font-bold text-white">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/30 p-2 text-white"
                aria-label="Fermer le menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              className="section-container flex flex-col gap-6 pt-8"
            >
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
              >
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-2xl font-semibold text-white"
                >
                  <Home className="h-6 w-6" />
                  Accueil
                </Link>
              </motion.li>
              {PORTFOLIO_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * (i + 1) }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-semibold text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * (PORTFOLIO_LINKS.length + 1) }}
              >
                <Link
                  to="/formations"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-2xl font-semibold text-teal"
                >
                  <GraduationCap className="h-6 w-6" />
                  Nos Formations
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * (PORTFOLIO_LINKS.length + 2) }}
              >
                <Link
                  to="/formations#tarifs"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-2xl font-semibold text-gold"
                >
                  <DollarSign className="h-6 w-6" />
                  Nos Tarifs
                </Link>
              </motion.li>
              <a href={`${BASE}#contact`} onClick={() => setOpen(false)} className="btn-primary mt-4 w-fit">
                Réserver une consultation
              </a>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
