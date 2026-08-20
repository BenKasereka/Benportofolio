import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t-4 border-rouge bg-slate-900 text-white">
      <div className="section-container section-padding grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
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

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Contact</span>
          <a href="mailto:kasvinyatsi7@gmail.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <Mail className="h-4 w-4 text-gold" /> kasvinyatsi7@gmail.com
          </a>
          <a href="tel:+243990260711" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <Phone className="h-4 w-4 text-gold" /> +243 990 260 711
          </a>
          <span className="flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-emerald" /> Goma, RD Congo
          </span>
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
