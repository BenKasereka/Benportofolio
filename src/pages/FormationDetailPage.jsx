import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, Bot, CheckCircle2, ChevronRight, Clock, Download,
  Flame, Landmark, MessageCircle, Package, ShieldCheck, Star, Target, Truck, Users,
} from 'lucide-react'
import { formationById } from '../data/formations'
import CountdownTimer from '../components/ui/CountdownTimer'
import InquiryForm from '../components/ui/InquiryForm'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const WA = '243990260711'
const waLink = (msg) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`

const ICONS = { Bot, Target, Package, Truck, Landmark, Users, ShieldCheck }

const ACCENT = {
  gold: {
    badge: 'bg-gold/20 text-gold border-gold/30',
    icon: 'bg-gold/10 text-gold',
    glow: 'shadow-gold-glow',
    border: 'border-gold/40',
    text: 'text-gold',
    number: 'text-gold/20',
    dot: 'bg-gold',
    gradient: 'from-gold/20 to-transparent',
    modBorder: 'border-l-4 border-gold/50',
    modNum: 'bg-gold/15 text-gold',
    outcomeBg: 'bg-gold/5 border-gold/15',
  },
  emerald: {
    badge: 'bg-emerald/20 text-emerald border-emerald/30',
    icon: 'bg-emerald/10 text-emerald',
    glow: 'shadow-emerald-glow',
    border: 'border-emerald/40',
    text: 'text-emerald',
    number: 'text-emerald/20',
    dot: 'bg-emerald',
    gradient: 'from-emerald/20 to-transparent',
    modBorder: 'border-l-4 border-emerald/50',
    modNum: 'bg-emerald/15 text-emerald',
    outcomeBg: 'bg-emerald/5 border-emerald/15',
  },
  teal: {
    badge: 'bg-teal/20 text-teal border-teal/30',
    icon: 'bg-teal/10 text-teal',
    glow: 'shadow-teal-glow',
    border: 'border-teal/40',
    text: 'text-teal',
    number: 'text-teal/20',
    dot: 'bg-teal',
    gradient: 'from-teal/20 to-transparent',
    modBorder: 'border-l-4 border-teal/50',
    modNum: 'bg-teal/15 text-teal',
    outcomeBg: 'bg-teal/5 border-teal/15',
  },
  rouge: {
    badge: 'bg-rouge/20 text-rouge border-rouge/30',
    icon: 'bg-rouge/10 text-rouge',
    glow: 'shadow-rouge-glow',
    border: 'border-rouge/40',
    text: 'text-rouge',
    number: 'text-rouge/20',
    dot: 'bg-rouge',
    gradient: 'from-rouge/20 to-transparent',
    modBorder: 'border-l-4 border-rouge/50',
    modNum: 'bg-rouge/15 text-rouge',
    outcomeBg: 'bg-rouge/5 border-rouge/15',
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] } }),
}

export default function FormationDetailPage() {
  const { id } = useParams()
  const formation = formationById(id)

  if (!formation) {
    return (
      <div className="flex min-h-screen flex-col bg-night">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-semibold text-offwhite">Formation introuvable.</p>
            <Link to="/formations" className="mt-4 inline-block text-gold underline">
              Retour aux formations
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const a = ACCENT[formation.accent] || ACCENT.gold
  const Icon = ICONS[formation.icon] || Bot

  return (
    <div className="min-h-screen bg-night">
      <Navbar />

      <main>
        {/* ── Hero de la formation ── */}
        <section className="relative overflow-hidden bg-night pt-32 pb-20">
          <div className={`pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b ${a.gradient} opacity-50`} />
          <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

          <div className="section-container relative flex flex-col gap-10">
            {/* Navigation: Fil d'Ariane + retour */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 rounded-full border border-night-border bg-night-card px-4 py-2 text-sm font-medium text-muted transition-all hover:border-gold/40 hover:text-offwhite"
              >
                ← Accueil
              </Link>
              <span className="text-muted/40">·</span>
              <Link
                to="/formations"
                className="inline-flex w-fit items-center gap-2 text-sm text-muted transition hover:text-offwhite"
              >
                <ArrowLeft className="h-4 w-4" />
                Retour aux formations
              </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
              {/* Contenu principal */}
              <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="flex flex-col gap-6">
                <span className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${a.badge}`}>
                  Formation {formation.number} · {formation.badge}
                </span>
                <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                  {formation.title}
                </h1>
                <p className={`text-xl font-semibold ${a.text}`}>{formation.tagline}</p>
                <p className="max-w-2xl text-base leading-relaxed text-muted">{formation.intro}</p>

                {/* Méta-infos */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Clock, label: formation.duration },
                    { icon: Star, label: formation.level },
                    { icon: Target, label: formation.format },
                  ].map(({ icon: I, label }) => (
                    <span key={label} className="flex items-center gap-2 rounded-full border border-night-border bg-night-card/60 px-4 py-2 text-xs font-medium text-muted">
                      <I className="h-3.5 w-3.5" />
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Card latérale */}
              <motion.div initial="hidden" animate="show" custom={0.15} variants={fadeUp}
                className={`card-executive sticky top-28 flex flex-col gap-6 p-7 ${a.border} ${a.glow}`}>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.icon}`}>
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm text-muted">{formation.subtitle}</p>
                  {formation.originalPrice && (
                    <p className="mt-1 text-sm font-medium text-muted line-through">{formation.originalPrice}</p>
                  )}
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className={`font-heading text-3xl font-extrabold ${a.text}`}>{formation.price}</p>
                    {formation.originalPrice && (
                      <span className="rounded-full bg-gold/20 px-2.5 py-1 text-xs font-bold text-gold">-50%</span>
                    )}
                  </div>
                  {/* Compte à rebours */}
                  <div className="mt-3 rounded-xl border border-rouge/30 bg-rouge/10 px-3 py-2.5 flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-rouge">
                      <Flame className="h-3.5 w-3.5 animate-pulse" />
                      Offre de lancement — expire dans :
                    </div>
                    <CountdownTimer compact />
                  </div>
                </div>
                <ul className="flex flex-col gap-2 border-t border-white/10 pt-4">
                  {formation.objectives.slice(0, 4).map((obj) => (
                    <li key={obj} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                      {obj}
                    </li>
                  ))}
                </ul>
                <a href="#formulaire" className="btn-primary w-full justify-center">
                  Je m'inscris
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href={waLink(`Bonjour Benjamin, je souhaite des informations sur la formation "${formation.title}". Pouvez-vous me renseigner ?`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex w-full items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Discuter via WhatsApp
                </a>
                <Link
                  to={`/formations/${formation.id}/formulaire`}
                  target="_blank"
                  className="btn-secondary flex w-full items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Télécharger le formulaire PDF
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Public cible ── */}
        <section className="section-padding bg-night-soft">
          <div className="section-container grid gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-offwhite">À qui s'adresse cette formation ?</h2>
              <p className="leading-relaxed text-muted">{formation.audience}</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1} variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-offwhite">Objectifs pédagogiques</h2>
              <ul className="flex flex-col gap-3">
                {formation.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-extrabold ${a.icon} ${a.text}`}>
                      {i + 1}
                    </span>
                    {obj}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ── Programme détaillé ── */}
        <section className="section-padding bg-night">
          <div className="section-container flex flex-col gap-14">
            <div className="text-center">
              <span className="eyebrow">Programme complet</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                {formation.modules.length} modules · du fondamental à l'opérationnel
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {formation.modules.map((mod, index) => (
                <motion.div
                  key={mod.number}
                  custom={index * 0.06}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className={`card-executive overflow-hidden ${a.modBorder}`}
                >
                  <div className="flex flex-col gap-4 p-6 sm:flex-row sm:gap-6">
                    {/* Numéro du module */}
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-heading text-sm font-extrabold ${a.modNum}`}>
                      {mod.number}
                    </div>

                    <div className="flex flex-1 flex-col gap-3">
                      <h3 className="text-base font-bold text-offwhite">{mod.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{mod.description}</p>

                      <ul className="flex flex-col gap-1.5 border-t border-white/10 pt-3">
                        {mod.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm leading-snug text-muted">
                            <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${a.text}`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Résultats obtenus ── */}
        <section className="section-padding bg-night-soft">
          <div className="section-container flex flex-col gap-10">
            <div className="text-center">
              <span className="eyebrow">Ce que vous obtenez</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                À la fin de cette formation, vous aurez…
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {formation.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  custom={index * 0.08}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`card-executive flex items-start gap-3 border p-5 ${a.outcomeBg}`}
                >
                  <Star className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} />
                  <p className="text-sm leading-relaxed text-muted">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Formulaire de contact ── */}
        <section id="formulaire" className="section-padding bg-night">
          <div className="section-container flex flex-col gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="eyebrow">En savoir plus</span>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Intéressé(e) par{' '}
                <span className={a.text}>cette formation</span> ?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted">
                Remplissez le formulaire ci-dessous. Nous vous répondrons sous 24h ouvrables avec
                tous les détails, le planning et les modalités d'inscription.
              </p>
            </div>

            <div className={`card-executive mx-auto w-full max-w-2xl p-8 ${a.border}`}>
              <InquiryForm formationTitle={formation.title} formationId={formation.id} />
            </div>

            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-sm text-muted">
                Préférez-vous recevoir le formulaire complet d'inscription ?
              </p>
              <Link
                to={`/formations/${formation.id}/formulaire`}
                target="_blank"
                className="btn-secondary"
              >
                <Download className="h-4 w-4" />
                Ouvrir le formulaire de candidature PDF
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
