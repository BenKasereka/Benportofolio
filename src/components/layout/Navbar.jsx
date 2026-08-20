import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Supply Chain', href: '#supply-chain' },
  { label: 'BK-BOOST', href: '#bk-boost' },
  { label: 'Audit', href: '#audit' },
  { label: 'Data', href: '#data' },
  { label: 'Langues', href: '#languages' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-night-border bg-night/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-heading text-lg font-bold text-offwhite">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-emerald text-sm font-extrabold text-night">
            BK
          </span>
          Kasereka Vinyatsi
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-muted transition-colors hover:text-offwhite">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden btn-primary !px-5 !py-2.5 !text-xs lg:inline-flex">
          Consultation
        </a>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border border-white/10 p-2 text-offwhite lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-night/95 backdrop-blur-lg lg:hidden"
          >
            <div className="section-container flex h-20 items-center justify-between">
              <span className="font-heading text-lg font-bold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 p-2 text-offwhite"
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
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-semibold text-offwhite"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-fit">
                Réserver une consultation
              </a>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
