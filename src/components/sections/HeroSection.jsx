import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, ShieldCheck } from 'lucide-react'
import StatCounter from '../ui/StatCounter'

const stats = [
  { value: '5+', label: 'ans en Supply Chain d’urgence' },
  { value: '6', label: 'pays en contexte volatile' },
  { value: '85%', label: 'de réduction des délais' },
  { value: '87%', label: 'de conformité en audit' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-night bg-grid-glow pt-28"
    >
      {/* Halos décoratifs animés */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-emerald/10 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-3xl animate-pulse-slow" />

      <div className="section-container relative grid gap-16 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Colonne texte */}
        <div className="flex flex-col gap-8">
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
            <span className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              Certified Professional in Sourcing & Procurement — CPSP (USA)
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Benjamin{' '}
            <span className="text-gradient-gold">Kasereka Vinyatsi</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            className="max-w-xl text-lg font-medium text-offwhite/90 sm:text-xl"
          >
            Consultant Senior en{' '}
            <span className="text-emerald">Supply Chain Humanitaire</span>,{' '}
            <span className="text-gold">Audit &amp; Data</span> et{' '}
            <span className="text-gold">Marchés Financiers</span> — fondateur de{' '}
            <span className="text-offwhite">BK-BOOST Ltd.</span>
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-muted"
          >
            Bilingue, expert MSF de la Supply Chain d'urgence avec 5 ans de terrain en zones
            hautement volatiles (RDC, Tchad, Soudan du Sud, Haïti, Nigeria, Centrafrique) et 3 ans en
            Administration, Audit et Finance. Titulaire d'un Master en Coopération Internationale et
            Aide Humanitaire (KALU Institute). Je conçois des stratégies d'approvisionnement agiles,
            des manuels de procédures de référence et des outils d'aide à la décision — de la
            réponse aux épidémies jusqu'à l'analyse des marchés financiers.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.4}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a href="#contact" className="btn-primary">
              Réserver une consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/cv-benjamin-kasereka-vinyatsi.pdf" className="btn-secondary" download>
              <Download className="h-4 w-4" />
              Télécharger le CV
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
            className="flex items-center gap-2 pt-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-emerald" />
            Basé à Goma, RDC — disponible pour déploiement rapide à l'international
          </motion.div>

          {/* Bandeau de métriques */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={fadeUp}
            className="mt-4 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} delay={0.1 * i} />
            ))}
          </motion.div>
        </div>

        {/* Colonne visuelle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gold-emerald opacity-30 blur-2xl" />
          <div className="card-executive relative h-full w-full overflow-hidden rounded-[2rem] p-2">
            <img
              src="/images/terrain/terrain-01.jpg"
              alt="Benjamin Kasereka Vinyatsi en mission humanitaire sur le terrain"
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-night/80 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">Mission active</p>
                <p className="text-sm font-semibold text-offwhite">MSF-OCB — Tine, Tchad</p>
              </div>
              <span className="h-2.5 w-2.5 animate-pulse-slow rounded-full bg-emerald shadow-emerald-glow" />
            </div>
          </div>

          {/* Badge flottant */}
          <motion.div
            className="card-executive absolute -left-8 top-8 hidden w-44 p-4 sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-xs text-muted">Réduction des délais</p>
            <p className="font-heading text-2xl font-bold text-emerald">85%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
