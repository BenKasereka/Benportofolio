import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import InquiryForm from '../ui/InquiryForm'
import { site, waLink } from '../../config/site'

const DIRECT_CHANNELS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    detail: site.phoneDisplay,
    href: waLink('Bonjour Benjamin, je souhaite échanger avec vous au sujet d’une mission.'),
    external: true,
    note: 'Le plus rapide',
  },
  {
    icon: Mail,
    label: 'Email',
    detail: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    detail: site.phoneDisplay,
    href: `tel:${site.phoneRaw}`,
  },
]

/**
 * Section contact de la page d'accueil.
 *
 * Auparavant, tous les CTA « Réserver une consultation » pointaient vers le
 * pied de page, qui ne contient aucun formulaire : le parcours se terminait en
 * cul-de-sac. C'est ici qu'il aboutit désormais.
 */
export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative bg-surface">
      <div className="section-container flex flex-col gap-14">
        <SectionHeading
          eyebrow="Parlons de votre besoin"
          title="Réserver une"
          highlight="consultation"
          description="Mission de terrain, audit interne, manuel de procédures, tableau de bord data ou accompagnement de carrière — décrivez votre besoin en deux lignes. Je réponds sous 24 h ouvrables."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-start">
          {/* Formulaire */}
          <div className="card-executive p-8 sm:p-10">
            <InquiryForm subject="Consultation" contextLabel="Page d’accueil — consultation" />
          </div>

          {/* Canaux directs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Ou directement
            </p>

            {DIRECT_CHANNELS.map(({ icon: Icon, label, detail, href, external, note }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="group flex min-h-tap items-center gap-4 rounded-xl border border-border bg-surface-white px-4 py-3.5 transition-all hover:border-primary/50 hover:shadow-card"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary-dark">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                    {label}
                    {note && <span className="chip-primary !py-0.5 !text-[0.65rem]">{note}</span>}
                  </span>
                  <span className="truncate text-sm text-muted">{detail}</span>
                </span>
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-3 rounded-xl border border-border bg-surface-white p-4 text-sm text-muted">
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {site.city} — disponible pour déploiement international
              </span>
              <span className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Réponse sous 24 h ouvrables
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
