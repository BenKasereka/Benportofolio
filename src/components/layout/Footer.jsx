import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const WA = '243990260711'
const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`

const QUICK_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: "Pôles d'expertise", to: '/#expertise' },
  { label: 'Nos Formations', to: '/formations' },
  { label: 'Nos Tarifs', to: '/formations#tarifs' },
]

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'kasvinyatsi7@gmail.com',
    href: 'mailto:kasvinyatsi7@gmail.com',
    accent: 'text-gold',
  },
  {
    icon: Phone,
    label: '+243 990 260 711',
    href: 'tel:+243990260711',
    accent: 'text-gold',
  },
  {
    icon: MessageCircle,
    label: 'Discuter sur WhatsApp',
    href: waLink('Bonjour Benjamin, je souhaite vous contacter depuis votre site.'),
    accent: 'text-emerald',
    external: true,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t-4 border-rouge bg-slate-900 text-white">
      <div className="section-container section-padding grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.9fr]">
        {/* Marque */}
        <div className="flex flex-col gap-4">
          <span className="font-heading text-xl font-bold text-white">Benjamin Kasereka Vinyatsi</span>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            Expert Certified Professional in Sourcing &amp; Procurement (ISCEA-USA). Expert en Supply Chain &amp; Logistique Humanitaire, Finance, RH, Audit Interne et Data Analysis — fondateur de BK-BOOST Ltd. Disponible pour mandats, audits et partenariats nationaux et internationaux.
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">FR · C2</span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">EN · C2</span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">Swahili · Native</span>
            <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">Lingala · Native</span>
          </div>
        </div>

        {/* Navigation rapide */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Navigation</span>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Contact</span>
          <div className="flex flex-col gap-2.5">
            {CONTACT_LINKS.map(({ icon: Icon, label, href, accent, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-3.5 py-2.5 text-sm text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-700/60 ${accent}`}>
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </a>
            ))}
            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-3.5 py-2.5 text-sm text-slate-300">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-700/60 text-emerald">
                <MapPin className="h-4 w-4" />
              </span>
              Goma, RD Congo
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="section-container flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <span>© {year} Benjamin Kasereka Vinyatsi. Tous droits réservés.</span>
          <span>BK-BOOST Ltd. — Excellence in Achievement</span>
        </div>
      </div>
    </footer>
  )
}
