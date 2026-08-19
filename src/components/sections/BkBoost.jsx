import { motion } from 'framer-motion'
import { Check, MessageCircle, Sparkles } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { pricingPacks } from '../../data/pricingPacks'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function BkBoost() {
  return (
    <section id="bk-boost" className="section-padding relative overflow-hidden bg-night">
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="section-container flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src="/images/brand/bk-boost-logo.png" alt="Logo BK-BOOST Ltd." className="h-20 w-auto" />
          <SectionHeading
            eyebrow="Pôle 02 — BK-BOOST Ltd."
            title="Passez du CV ignoré au"
            highlight="candidat recherché"
            description="Accélérateur de carrière & opportunités internationales : un accompagnement pratique, porté par quelqu'un qui a lui-même traversé le parcours du recrutement humanitaire."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPacks.map((pack, index) => (
            <motion.div
              key={pack.id}
              custom={index * 0.1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className={`card-executive relative flex flex-col gap-5 p-7 ${
                pack.highlight ? 'border-gold/50 shadow-gold-glow' : ''
              }`}
            >
              {pack.highlight && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold-emerald px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-night">
                  <Sparkles className="h-3 w-3" /> Le plus choisi
                </span>
              )}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-gold">{pack.name}</p>
                <p className="mt-2 font-heading text-4xl font-extrabold text-offwhite">
                  {pack.price}
                  <span className="ml-1 text-base font-medium text-muted">{pack.currency}</span>
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-3">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={pack.highlight ? 'btn-primary w-full !py-3' : 'btn-secondary w-full !py-3'}
              >
                Choisir ce pack
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-executive flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Nos valeurs de réussite</p>
            <p className="mt-1 text-lg font-semibold text-offwhite">Votre carrière est notre priorité absolue.</p>
          </div>
          <a href="https://wa.me/243990260711" target="_blank" rel="noreferrer" className="btn-primary shrink-0">
            <MessageCircle className="h-4 w-4" />
            Boostez votre carrière maintenant
          </a>
        </motion.div>
      </div>
    </section>
  )
}
