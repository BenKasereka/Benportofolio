import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Download, MapPin, ShieldCheck } from 'lucide-react'
import StatCounter from '../ui/StatCounter'

// ── Photos terrain — ajouter terrain-02.jpg, terrain-03.jpg, terrain-04.jpg
// dans public/images/terrain/ pour activer le diaporama complet
const SLIDES = [
  { src: '/images/terrain/terrain-01.jpg', mission: 'MSF-OCB — Tine, Tchad',     label: 'Mission active' },
  { src: '/images/terrain/terrain-02.jpg', mission: 'Gestion de flotte terrain',  label: 'Logistique terrain' },
  { src: '/images/terrain/terrain-03.jpg', mission: 'Coordination humanitaire',   label: 'Présence terrain' },
  { src: '/images/terrain/terrain-04.jpg', mission: 'Opérations sur le terrain',  label: 'Mission internationale' },
]

const stats = [
  { value: "7+", label: "ans en Supply Chain d’urgence" },
  { value: "6", label: "pays en contexte volatile" },
  { value: "85%", label: "de réduction des délais" },
  { value: "87%", label: "de conformité en audit" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

const SLIDE_INTERVAL_MS = 3200

export default function HeroSection() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), SLIDE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  const current = SLIDES[slide]

  // Inclinaison 3D fluide qui suit le curseur — retour à plat à la sortie
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 18 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), { stiffness: 180, damping: 18 })

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

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
            <span className="font-semibold text-gold">Expert Certified Professional in Sourcing &amp; Procurement (ISCEA-USA)</span>
            {' '}— Expert en Supply Chain &amp; Logistique Humanitaire, Finance, RH, Audit Interne et Data Analysis — fondateur de{' '}
            <span className="font-semibold text-gold">BK-BOOST Ltd.</span>
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-muted"
          >
            Bilingue, expert MSF de la Supply Chain d'urgence avec 7+ ans de terrain en zones
            hautement volatiles (RDC, Tchad, Soudan du Sud, Haïti, Nigeria, Centrafrique) et 3+ ans en
            Finances, Administration, RH et Audit &amp; Compliance. Titulaire d'un Master en Coopération Internationale et
            Aide Humanitaire (KALU Institute). Je conçois des stratégies d'approvisionnement agiles,
            des manuels de procédures de référence et des outils d'analyse de données — de la
            réponse aux épidémies jusqu'à l'aide à la décision pour PME et grands groupes.
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
            className="mt-4 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-night-border pt-8 sm:grid-cols-4"
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
          {/* Flottement continu + inclinaison 3D qui suit le curseur */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative h-full w-full [transform-style:preserve-3d] will-change-transform"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gold-emerald opacity-30 blur-2xl" />
            <div className="card-executive relative h-full w-full overflow-hidden rounded-[2rem] p-2">
              {/* Slideshow photos terrain */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide}
                  src={current.src}
                  alt={`Benjamin Kasereka Vinyatsi — ${current.mission}`}
                  className="h-full w-full rounded-[1.6rem] object-cover"
                  onError={(e) => { e.currentTarget.src = '/images/terrain/terrain-01.jpg' }}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    opacity: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: SLIDE_INTERVAL_MS / 1000, ease: 'linear' },
                  }}
                />
              </AnimatePresence>

              {/* Légende de mission */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">{current.label}</p>
                  <p className="text-sm font-semibold text-slate-800">{current.mission}</p>
                </div>
                <span className="h-2.5 w-2.5 animate-pulse-slow rounded-full bg-emerald shadow-emerald-glow" />
              </div>

              {/* Indicateurs de slide */}
              <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-1.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 hover:scale-125 active:scale-90 ${i === slide ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Badge flottant */}
          <motion.div
            className="card-executive absolute -left-8 top-8 hidden w-44 p-4 sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ z: 40 }}
          >
            <p className="text-xs text-muted">Réduction des délais</p>
            <p className="font-heading text-2xl font-bold text-emerald">85%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
