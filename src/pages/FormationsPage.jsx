import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight, Bot, CheckCircle2, Clock, Landmark, Package,
  ShieldCheck, Star, Target, Truck, Users,
} from 'lucide-react'
import { formations } from '../data/formations'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const ICONS = { Bot, Target, Package, Truck, Landmark, Users, ShieldCheck }

const ACCENT = {
  gold: {
    bg:     'bg-amber-800 border border-amber-500/30',
    icon:   'bg-amber-300/20 text-amber-200',
    ring:   'group-hover:border-amber-300/60',
    glow:   'group-hover:shadow-gold-glow',
    link:   'text-amber-200',
    number: 'text-amber-300/10',
    badge:  'bg-amber-300/20 text-amber-100',
    meta:   'text-amber-100/55',
  },
  emerald: {
    bg:     'bg-emerald-900 border border-emerald-500/30',
    icon:   'bg-emerald-300/20 text-emerald-300',
    ring:   'group-hover:border-emerald-300/60',
    glow:   'group-hover:shadow-emerald-glow',
    link:   'text-emerald-300',
    number: 'text-emerald-400/10',
    badge:  'bg-emerald-300/20 text-emerald-100',
    meta:   'text-emerald-100/55',
  },
  teal: {
    bg:     'bg-teal-900 border border-teal-400/30',
    icon:   'bg-teal-300/20 text-teal-300',
    ring:   'group-hover:border-teal-300/60',
    glow:   'group-hover:shadow-teal-glow',
    link:   'text-teal-300',
    number: 'text-teal-400/10',
    badge:  'bg-teal-300/20 text-teal-100',
    meta:   'text-teal-100/55',
  },
  rouge: {
    bg:     'bg-rouge-bordeaux border border-rouge/30',
    icon:   'bg-rouge/20 text-rouge-light',
    ring:   'group-hover:border-rouge/60',
    glow:   'group-hover:shadow-rouge-glow',
    link:   'text-rouge-light',
    number: 'text-rouge/10',
    badge:  'bg-rouge/20 text-rouge-light',
    meta:   'text-rouge-light/55',
  },
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
    <div className="min-h-screen bg-night">
      <Navbar />

      <main>
        {/* ── Hero formations ── */}
        <section className="relative overflow-hidden bg-night pt-28 pb-24">
          {/* Halos */}
          <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute bottom-0 left-[-10%] h-72 w-72 rounded-full bg-teal/10 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute inset-0 bg-grid-glow opacity-30" />

          <div className="section-container relative flex flex-col items-center gap-8 text-center">
            {/* Bouton retour Accueil */}
            <Link
              to="/"
              className="flex items-center gap-2 self-start rounded-full border border-night-border bg-night-card px-4 py-2 text-sm font-medium text-muted transition-all hover:border-gold/40 hover:text-offwhite"
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
              Nos <span className="text-gradient-gold">Formations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              7 programmes de formation d'excellence — de l'Intelligence Artificielle à l'Audit
              humanitaire — conçus et animés par un expert avec 10+ ans d'expérience nationale et
              internationale. Des formations pratiques, structurées et immédiatement applicables.
            </motion.p>

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
                { value: '10+', label: "Années d'expertise" },
                { value: '24h', label: 'Réponse garantie' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <span className="font-heading text-3xl font-extrabold text-gold">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wide text-muted">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Grille des formations ── */}
        <section className="section-padding bg-night-soft">
          <div className="section-container flex flex-col gap-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Choisissez votre <span className="text-teal">programme</span>
              </h2>
              <p className="mt-4 text-muted">
                Cliquez sur une formation pour accéder au programme complet, aux objectifs et au formulaire d'inscription.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {formations.map((formation, index) => {
                const a = ACCENT[formation.accent] || ACCENT.gold
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

                      <div className={`mt-auto flex flex-wrap items-center gap-2 border-t border-white/10 pt-4 ${a.meta}`}>
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

        {/* ── CTA contact ── */}
        <section className="section-padding bg-night">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="card-executive relative overflow-hidden p-10 text-center sm:p-16"
            >
              <div className="pointer-events-none absolute inset-0 bg-gold-emerald opacity-[0.06]" />
              <span className="eyebrow">Une question ?</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Vous ne savez pas quelle formation choisir ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Benjamin vous accompagne personnellement pour identifier la formation la plus adaptée
                à votre profil, vos objectifs et votre budget. Réponse sous 24h.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/243990260711?text=${encodeURIComponent('Bonjour Benjamin, je souhaite des informations sur vos formations. Pouvez-vous m\'aider à choisir ?')}`}
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
