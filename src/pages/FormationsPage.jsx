import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Bot, CheckCircle2, Clock, CreditCard, DollarSign,
  Flame, Landmark, MessageCircle, Package, Phone, ShieldCheck, Star, Target, Truck, Users,
} from 'lucide-react'
import { formations } from '../data/formations'
import { pricingPacks } from '../data/pricingPacks'
import { pricingParts } from '../lib/pricing'
import { isPromoActive, promo } from '../data/sessions'
import SessionNotice from '../components/ui/SessionNotice'
import SEO from '../components/ui/SEO'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { waLink } from '../config/site'

const PAYMENT_METHODS = [
  { icon: Phone,       label: 'Mobile Money',   detail: 'M-Pesa · Airtel Money · Orange Money', color: 'text-accent bg-accent/10' },
  { icon: DollarSign,  label: 'Cash USD',        detail: 'Paiement en espèces USD', color: 'text-accent bg-accent/10' },
  { icon: CreditCard,  label: 'Virement bancaire', detail: 'Sur demande — coordonnées fournies', color: 'text-accent bg-accent/10' },
  { icon: MessageCircle, label: 'Western Union / MoneyGram', detail: 'Pour clients internationaux', color: 'text-accent bg-accent/10' },
]

const ICONS = { Bot, Target, Package, Truck, Landmark, Users, ShieldCheck }

// Une seule palette pour les 7 formations désormais (plus de teinte par carte) —
// texte blanc à forte opacité, lisible quel que soit le fond, cohérent avec
// l'accent unique du site.
const CARD_PALETTE = {
  bg: 'bg-accent-darker border border-accent-light/20',
  icon: 'bg-white/15 text-white',
  ring: 'group-hover:border-white/[0.4]',
  glow: 'group-hover:shadow-accent-glow',
  link: 'text-white',
  number: 'text-white/10',
  badge: 'bg-black/25 text-white',
  badgeText: 'text-white/90',
  meta: 'text-white/90',
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function FormationsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Nos Formations"
        description="7 programmes de formation d'excellence — de l'Intelligence Artificielle à l'Audit humanitaire — conçus et animés par un expert fort de plus de 10 ans d'expérience, dont 7 ans de terrain à l'international."
      />
      <Navbar />

      <main id="main-content">
        {/* ── Bandeau promotionnel — n'apparaît que pendant une promo réelle et datée (voir src/data/sessions.js) ── */}
        {isPromoActive() && (
          <div className="fixed inset-x-0 top-20 z-40 flex items-center justify-center gap-4 bg-gradient-to-r from-accent-dark via-accent-darker to-accent-dark px-4 py-2.5 shadow-lg">
            <Flame className="h-4 w-4 shrink-0 text-white animate-pulse" />
            <span className="text-sm font-bold text-white">
              {promo.label.toUpperCase()} — Jusqu'à <span className="text-white underline">-{promo.discountPercent}%</span> sur toutes les formations
            </span>
            <SessionNotice compact />
            <Flame className="h-4 w-4 shrink-0 text-white animate-pulse" />
          </div>
        )}

        {/* ── Hero formations ── */}
        <section className="relative overflow-hidden bg-surface pt-36 pb-24">
          {/* Halos */}
          <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-accent/[0.06] blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-30" />

          <div className="section-container relative flex flex-col items-center gap-8 text-center">
            {/* Bouton retour Accueil */}
            <Link
              to="/"
              className="flex items-center gap-2 self-start rounded-full border border-border bg-surface-card px-4 py-2 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-ink"
            >
              ← Accueil
            </Link>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              BK-BOOST Ltd. · Centre de Formation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
            >
              Nos <span className="text-accent">Formations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              7 programmes de formation d'excellence — de l'Intelligence Artificielle à l'Audit
              humanitaire — conçus et animés par un expert fort de plus de 10 ans d'expérience, dont
              7 ans de terrain à l'international. Des formations pratiques, structurées et
              immédiatement applicables.
            </motion.p>

            {/* Bouton Nos Tarifs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <a
                href="#tarifs"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent-dark transition-all hover:bg-accent/20 hover:border-accent/[0.7]"
              >
                <DollarSign className="h-4 w-4" />
                Voir nos tarifs &amp; options de paiement
              </a>
            </motion.div>

            {/* Métriques */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8"
            >
              {[
                { value: '7', label: 'Formations certifiantes' },
                { value: '100%', label: 'Approche pratique terrain' },
                { value: '10+', label: "Ans d'expérience (dont 7+ de terrain)" },
                { value: '24h', label: 'Réponse garantie' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <span className="font-heading text-3xl font-extrabold text-accent-dark">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wide text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Grille des formations ── */}
        <section className="section-padding bg-surface">
          <div className="section-container flex flex-col gap-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Choisissez votre <span className="text-accent-dark">programme</span>
              </h2>
              <p className="mt-4 text-muted">
                Cliquez sur une formation pour accéder au programme complet, aux objectifs et au formulaire d'inscription.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {formations.map((formation, index) => {
                const a = CARD_PALETTE
                const Icon = ICONS[formation.icon] || Bot

                return (
                  <motion.div
                    key={formation.id}
                    custom={index * 0.08}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={cardVariants}
                  >
                    <Link
                      to={`/formations/${formation.id}`}
                      className={`group relative flex flex-col gap-5 overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${a.bg} ${a.ring} ${a.glow}`}
                    >
                      {/* Numéro en fond */}
                      <span className={`pointer-events-none absolute -right-3 -top-5 font-heading text-8xl font-extrabold ${a.number}`}>
                        {formation.number}
                      </span>

                      <div className="flex items-start justify-between">
                        <span className={`flex h-13 w-13 items-center justify-center rounded-2xl ${a.icon}`}>
                          <Icon className="h-6 w-6" strokeWidth={1.75} />
                        </span>
                        <ArrowUpRight className={`h-5 w-5 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 ${a.link}`} />
                      </div>

                      <div>
                        <span className={`inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${a.badge}`}>
                          {formation.badge}
                        </span>
                        <h3 className="mt-2 text-lg font-bold text-white leading-snug">{formation.title}</h3>
                        <p className={`mt-1 text-sm font-medium ${a.link}`}>{formation.tagline}</p>
                      </div>

                      <ul className="flex flex-col gap-1.5">
                        {formation.objectives.slice(0, 3).map((obj) => (
                          <li key={obj} className={`flex items-start gap-2 text-xs leading-snug ${a.meta}`}>
                            <CheckCircle2 className={`mt-0.5 h-3 w-3 shrink-0 ${a.link}`} />
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Prix — barré uniquement pendant une promotion réelle et datée */}
                      {(() => {
                        const p = pricingParts(formation)
                        return (
                          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2">
                            {p.originalAmount && (
                              <span className="text-sm font-medium text-white/40 line-through">
                                {p.originalAmount} {p.currency}
                              </span>
                            )}
                            <span className={`font-heading text-lg font-extrabold ${a.link}`}>
                              {p.amount} {p.currency}
                            </span>
                            {p.badge && (
                              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white">
                                {p.badge}
                              </span>
                            )}
                          </div>
                        )
                      })()}

                      <div className={`flex flex-wrap items-center gap-2 border-t border-white/10 pt-4 ${a.meta}`}>
                        <span className="flex items-center gap-1.5 text-[0.7rem]">
                          <Clock className="h-3 w-3" />
                          {formation.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-[0.7rem]">
                          <Star className="h-3 w-3" />
                          {formation.level}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Nos Tarifs ── */}
        <section id="tarifs" className="section-padding bg-surface">
          <div className="section-container flex flex-col gap-16">
            <div className="flex flex-col items-center gap-6 text-center">
              <span className="eyebrow"><DollarSign className="h-3.5 w-3.5 inline mr-1" />Transparence tarifaire</span>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Nos <span className="text-accent">Tarifs</span> &amp; Options de Paiement
              </h2>
              <p className="max-w-xl text-muted">
                Chaque formation est accessible selon votre budget. Sélectionnez votre mode de
                paiement préféré et contactez-nous directement via WhatsApp pour confirmer.
              </p>
              {/* Bandeau de session — n'apparaît que pendant une promotion réelle et datée
                  (voir src/data/sessions.js). Remplace l'ancien compte à rebours qui repartait
                  sur 3 jours pour chaque visiteur via le localStorage et n'expirait jamais. */}
              {isPromoActive() && (
                <div className="relative w-full overflow-hidden rounded-2xl bg-accent-darker px-8 py-8 text-center shadow-accent-glow sm:px-12 sm:py-10">
                  <div className="pointer-events-none absolute -top-12 right-[-8%] h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-12 left-[-8%] h-48 w-48 rounded-full bg-white/10 blur-3xl" />

                  <div className="relative flex flex-col items-center gap-5">
                    <div className="flex items-center gap-2">
                      <Flame className="h-5 w-5 animate-pulse text-white" />
                      <p className="text-base font-extrabold uppercase tracking-[0.2em] text-white sm:text-lg">
                        {promo.label} — Tarif réduit
                      </p>
                      <Flame className="h-5 w-5 animate-pulse text-white" />
                    </div>

                    <SessionNotice />

                    <p className="max-w-md text-sm font-medium text-white/70">
                      Inscrivez-vous maintenant pour bénéficier de{' '}
                      <span className="font-bold text-white underline">-{promo.discountPercent}%</span> sur
                      toutes les formations.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Grille des prix par formation */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {formations.map((formation, index) => {
                const a = CARD_PALETTE
                const Icon = ICONS[formation.icon] || Bot
                const isCoaching = formation.id === 'coaching-carriere'
                return (
                  <motion.div
                    key={formation.id}
                    custom={index * 0.06}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={cardVariants}
                    className={`rounded-2xl p-6 flex flex-col gap-4 ${a.bg}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.icon}`}>
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <p className={`text-[0.65rem] font-semibold uppercase tracking-wide ${a.badgeText}`}>
                          Formation {formation.number}
                        </p>
                        <h4 className="text-sm font-bold text-white leading-snug">{formation.title}</h4>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-3">
                      {(() => {
                        const p = pricingParts(formation)
                        return (
                          <>
                            {p.originalAmount && (
                              <p className="text-sm font-medium text-white/40 line-through">{p.originalAmount} {p.currency}</p>
                            )}
                            <div className="flex items-center gap-2 mt-0.5">
                              <p className={`font-heading text-2xl font-extrabold ${a.link}`}>{p.amount} {p.currency}</p>
                              {p.badge && (
                                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[0.6rem] font-bold text-white">{p.badge}</span>
                              )}
                            </div>
                          </>
                        )
                      })()}
                      <p className="text-xs text-white/90 mt-0.5">par participant</p>
                    </div>

                    {isCoaching && (
                      <div className="flex flex-col gap-2">
                        {pricingPacks.map((pack) => (
                          <div key={pack.id} className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-1.5">
                            <span className="text-xs font-medium text-white">{pack.name}</span>
                            <div className="flex items-center gap-1.5">
                              {(() => {
                                const p = pricingParts(pack)
                                return (
                                  <>
                                    {p.originalAmount && (
                                      <span className="text-[0.6rem] text-white/40 line-through">{p.originalAmount} {p.currency}</span>
                                    )}
                                    <span className={`text-xs font-bold ${a.link}`}>{p.amount} {p.currency}</span>
                                  </>
                                )
                              })()}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex flex-col gap-2">
                      {PAYMENT_METHODS.slice(0, 3).map((pm) => (
                        <a
                          key={pm.label}
                          href={waLink(`Bonjour Benjamin, je souhaite m'inscrire à la formation "${formation.title}" et payer par ${pm.label}. Pouvez-vous me donner les modalités ?`)}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors"
                        >
                          <pm.icon className="h-3.5 w-3.5 shrink-0" />
                          Payer par {pm.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Modes de paiement détaillés */}
            <div className="card-executive p-8 flex flex-col gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-ink">Modes de Paiement Acceptés</h3>
                <p className="mt-2 text-sm text-muted">Choisissez la méthode la plus adaptée à votre situation</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {PAYMENT_METHODS.map((pm) => (
                  <div key={pm.label} className="flex flex-col items-center gap-3 rounded-xl border border-border p-5 text-center">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full ${pm.color}`}>
                      <pm.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{pm.label}</p>
                      <p className="mt-1 text-xs text-muted">{pm.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 border-t border-border pt-6">
                <a
                  href={waLink("Bonjour Benjamin, je souhaite avoir des informations sur les tarifs et les options de paiement pour vos formations.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  Discuter de mon financement
                </a>
                <p className="text-xs text-muted">Facilités de paiement disponibles · Réponse sous 24h</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA contact ── */}
        <section className="section-padding bg-surface">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card-executive relative overflow-hidden p-10 text-center sm:p-16"
            >
              <div className="pointer-events-none absolute inset-0 bg-accent opacity-[0.06]" />
              <span className="eyebrow">Une question ?</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Vous ne savez pas quelle formation choisir ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Nous vous accompagnons personnellement pour identifier la formation la plus adaptée
                à votre profil, vos objectifs et votre budget. Réponse sous 24h.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={waLink("Bonjour Benjamin, je souhaite des informations sur vos formations. Pouvez-vous m'aider à choisir ?")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Me conseiller via WhatsApp
                </a>
                <a href="mailto:kasvinyatsi7@gmail.com" className="btn-secondary">
                  Écrire un email
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
