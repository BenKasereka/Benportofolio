import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-night-border bg-night-soft">
      <div className="section-container section-padding grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="flex flex-col gap-4">
          <span className="font-heading text-xl font-bold text-offwhite">Benjamin Kasereka Vinyatsi</span>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Consultant Senior en Supply Chain Humanitaire, Audit Interne et Data Analysis, et
            fondateur de BK-BOOST Ltd. Disponible pour mandats, audits et partenariats nationaux et
            internationaux.
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded-full border border-night-border bg-night-card px-3 py-1">FR · C2</span>
            <span className="rounded-full border border-night-border bg-night-card px-3 py-1">EN · C2</span>
            <span className="rounded-full border border-night-border bg-night-card px-3 py-1">Swahili · Native</span>
            <span className="rounded-full border border-night-border bg-night-card px-3 py-1">Lingala · Native</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Contact</span>
          <a href="mailto:kasvinyatsi7@gmail.com" className="flex items-center gap-2 text-sm text-muted hover:text-offwhite transition-colors">
            <Mail className="h-4 w-4 text-gold" /> kasvinyatsi7@gmail.com
          </a>
          <a href="tel:+243990260711" className="flex items-center gap-2 text-sm text-muted hover:text-offwhite transition-colors">
            <Phone className="h-4 w-4 text-gold" /> +243 990 260 711
          </a>
          <span className="flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-emerald" /> Goma, RD Congo
          </span>
        </div>
      </div>

      <div className="border-t border-night-border">
        <div className="section-container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <span>© {year} Benjamin Kasereka Vinyatsi. Tous droits réservés.</span>
          <span>BK-BOOST Ltd. — Excellence in Achievement</span>
        </div>
      </div>
    </footer>
  )
}
