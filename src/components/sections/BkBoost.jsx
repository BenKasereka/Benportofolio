import { motion } from 'framer-motion'
import {
  Check,
  Compass,
  FileEdit,
  FileText,
  Globe2,
  HandCoins,
  KeyRound,
  ListChecks,
  MessageCircle,
  MessagesSquare,
  Mic2,
  Network,
  Sparkles,
  Target,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { pricingPacks } from '../../data/pricingPacks'
import { flagshipBonus, methodSteps, skillsGained } from '../../data/coachingMethod'

const STEP_ICONS = { Compass, FileEdit, MessagesSquare, Target }
const SKILL_ICONS = { FileText, Mic2, Globe2, HandCoins, Network, ListChecks }
const BONUS_ICONS = { KeyRound }

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

const WHATSAPP_NUMBER = '243990260711'

// Chaque pack ouvre WhatsApp avec un message pré-rempli identifiant le pack
// choisi et l'intention de paiement Mobile Money, pour un suivi immédiat.
function buildPackWhatsAppLink(pack) {
  const message = `Bonjour Benjamin, je souhaite prendre le ${pack.name} (${pack.price} ${pack.currency}) de BK-BOOST Ltd. et payer par Mobile Money. Merci de me communiquer les modalités.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function BkBoost() {
  return (
    <section id="bk-boost" className="section-padding relative overflow-hidden bg-emerald-900">
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="pointer-events-none absolute left-[-10%] bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="section-container flex flex-col gap-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/20 bg-white p-3 shadow-2xl ring-4 ring-emerald-600/40">
            <img src="/images/brand/bk-boost-logo.png" alt="Logo BK-BOOST Ltd." className="h-full w-full object-contain" />
          </div>
          <SectionHeading
            eyebrow="Pôle 02 — BK-BOOST Ltd."
            title="Passez du CV ignoré au"
            highlight="candidat recherché"
            accent="rouge"
            panelBg="bg-gold-dark"
            description="Accélérateur de carrière pour opportunités nationales et internationales : un accompagnement pratique, porté par quelqu'un qui a lui-même traversé le parcours du recrutement humanitaire."
          />
        </div>

        {/* Méthode en 4 étapes */}
        <div className="flex flex-col gap-10">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Notre méthode en 4 étapes
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((item, index) => {
              const Icon = STEP_ICONS[item.icon]
              return (
                <motion.div
                  key={item.step}
                  custom={index * 0.1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="card-executive relative flex flex-col gap-3 p-6"
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 font-heading text-6xl font-extrabold text-gold/10">
                    {item.step}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h4 className="font-semibold text-offwhite">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Compétences développées */}
        <div className="flex flex-col gap-10">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Ce que vous allez maîtriser
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillsGained.map((skill, index) => {
              const Icon = SKILL_ICONS[skill.icon]
              return (
                <motion.div
                  key={skill.label}
                  custom={index * 0.06}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-night-border bg-night-card p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald/10 text-emerald">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm text-offwhite">{skill.label}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bonus phare */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-executive relative flex flex-col items-center gap-4 overflow-hidden p-10 text-center shadow-gold-glow"
        >
          <div className="pointer-events-none absolute inset-0 bg-gold-emerald opacity-[0.06]" />
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
            {(() => {
              const BonusIcon = BONUS_ICONS[flagshipBonus.icon]
              return <BonusIcon className="h-6 w-6" strokeWidth={1.75} />
            })()}
          </span>
          <span className="eyebrow">{flagshipBonus.eyebrow}</span>
          <h3 className="max-w-2xl text-2xl font-bold text-offwhite sm:text-3xl">{flagshipBonus.title}</h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">{flagshipBonus.description}</p>
        </motion.div>

        {/* Pricing */}
        <div className="flex flex-col gap-10">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Choisissez votre formule
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPacks.map((pack, index) => (
              <motion.div
                key={pack.id}
                custom={index * 0.1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className={`card-executive relative flex flex-col gap-5 p-7 ${
                  pack.highlight ? 'border-gold/50 shadow-gold-glow' : ''
                }`}
              >
                {pack.highlight && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold-emerald px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-slate-900">
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
                  href={buildPackWhatsAppLink(pack)}
                  target="_blank"
                  rel="noreferrer"
                  className={pack.highlight ? 'btn-primary w-full !py-3' : 'btn-secondary w-full !py-3'}
                >
                  Choisir ce pack
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-executive flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">Nos valeurs de réussite</p>
            <p className="mt-1 text-lg font-semibold text-offwhite">Votre carrière est notre priorité absolue.</p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour Benjamin, je souhaite booster ma carrière avec BK-BOOST Ltd. Pouvez-vous me conseiller sur le pack adapté ?')}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            Boostez votre carrière maintenant
          </a>
        </motion.div>
      </div>
    </section>
  )
}
