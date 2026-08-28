import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Download, MapPin, ShieldCheck } from 'lucide-react'
import StatCounter from '../ui/StatCounter'
import Modal from '../ui/Modal'
import InquiryForm from '../ui/InquiryForm'
import SupplyChainRouteIllustration from '../ui/SupplyChainRouteIllustration'

// ── Photos terrain — ajouter terrain-02.jpg, terrain-03.jpg, terrain-04.jpg
// dans public/images/terrain/ pour activer le diaporama complet
const ASSET_BASE = import.meta.env.BASE_URL

const SLIDES = [
  {
    src: `${ASSET_BASE}images/terrain/terrain-01.jpg`,
    mission: { fr: 'MSF-OCB — Tine, Tchad', en: 'MSF-OCB — Tine, Chad' },
    label: { fr: 'Mission active', en: 'Active mission' },
  },
  {
    src: `${ASSET_BASE}images/terrain/terrain-02.jpg`,
    mission: { fr: 'Gestion de flotte terrain', en: 'Field fleet management' },
    label: { fr: 'Logistique terrain', en: 'Field logistics' },
  },
  {
    src: `${ASSET_BASE}images/terrain/terrain-04.jpg`,
    mission: { fr: 'Opérations sur le terrain', en: 'Field operations' },
    label: { fr: 'Mission internationale', en: 'International mission' },
  },
]

const stats = [
  { value: "7+", label: { fr: "ans en Supply Chain d’urgence", en: "years in emergency Supply Chain" } },
  { value: "5", label: { fr: "pays en contexte volatile", en: "countries in volatile contexts" } },
  { value: "85%", label: { fr: "de réduction des délais", en: "reduction in lead times" } },
  { value: "87%", label: { fr: "de conformité en audit", en: "audit compliance" } },
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
  const { t, i18n } = useTranslation('hero')
  const lang = i18n.resolvedLanguage
  const [slide, setSlide] = useState(0)
  const [cvModalOpen, setCvModalOpen] = useState(false)

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
      className="relative flex min-h-screen items-center overflow-hidden bg-surface bg-grid-glow pt-28"
    >
      {/* Halos décoratifs animés — une seule teinte (primary) */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-primary/[0.06] blur-3xl animate-pulse-slow" />

      <div className="section-container relative grid gap-16 pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        {/* Colonne texte */}
        <div className="flex flex-col gap-8">
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
            <span className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-gold" aria-hidden="true" />
              {t('eyebrow')}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
          >
            {t('heading.firstName')} <span className="text-primary">{t('heading.lastName')}</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
            className="max-w-md text-justify text-lg font-medium text-ink/90 sm:text-xl"
          >
            <span className="font-semibold text-primary">{t('subheading.title')}</span>
            {' '}{t('subheading.body')}{' '}
            <span className="font-semibold text-primary">{t('subheading.company')}</span>
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="max-w-md text-justify text-base leading-relaxed text-muted"
          >
            {t('description')}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.4}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
            >
              {t('cta.book')}
              <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={() => setCvModalOpen(true)} className="btn-secondary">
              <Download className="h-4 w-4" />
              {t('cta.requestCv')}
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
            className="flex items-center gap-2 pt-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {t('location')}
          </motion.div>

          {/* Bandeau de métriques */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={fadeUp}
            className="mt-4 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <StatCounter key={stat.value} value={stat.value} label={stat.label[lang]} delay={0.1 * i} />
            ))}
          </motion.div>
        </div>

        {/* Colonne visuelle */}
        <div className="mx-auto flex w-full max-w-md flex-col items-stretch">
          {/* Illustration transport multimodal — au-dessus de la seule carte
              photo. Le texte du Hero (ci-contre) est passé de max-w-xl à
              max-w-md pour libérer de la place à droite, permettant ce
              débordement mesuré sans recouvrir le texte. */}
          <SupplyChainRouteIllustration className="mb-8 mt-7 w-full lg:-mx-16 lg:w-[calc(100%+8rem)]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full"
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
            <div className="absolute inset-0 rounded-[2rem] bg-primary opacity-30 blur-2xl" />
            <div className="card-executive relative h-full w-full overflow-hidden rounded-[2rem] p-2">
              {/* Slideshow photos terrain — balayage net : glissement + fondu, sans filtre coûteux */}
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <AnimatePresence>
                  <motion.img
                    key={slide}
                    src={current.src}
                    alt={t('slideImageAlt', { mission: current.mission[lang] })}
                    className="absolute inset-0 h-full w-full object-cover object-[center_78%]"
                    onError={(e) => { e.currentTarget.src = `${ASSET_BASE}images/terrain/terrain-01.jpg` }}
                    initial={{ opacity: 0, x: '18%', scale: 1.12 }}
                    animate={{ opacity: 1, x: '0%', scale: 1.1 }}
                    exit={{ opacity: 0, x: '-18%', scale: 1.02 }}
                    transition={{
                      opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                      x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                      scale: { duration: SLIDE_INTERVAL_MS / 1000, ease: 'linear' },
                    }}
                  />
                </AnimatePresence>

                {/* Voile bas pour la lisibilité de la légende */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Légende de mission */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 backdrop-blur-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-xs uppercase tracking-wide text-muted">{current.label[lang]}</p>
                    <p className="text-sm font-semibold text-slate-800">{current.mission[lang]}</p>
                  </motion.div>
                </AnimatePresence>
                <span className="h-2.5 w-2.5 animate-pulse-slow rounded-full bg-primary shadow-primary-glow" />
              </div>

              {/* Indicateurs de slide — la pastille reste fine visuellement,
                  mais la zone cliquable est portée à 44px (MAJ-09 de l'audit) */}
              <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-1.5">
                {SLIDES.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={t('slideAriaLabel', { index: i + 1, mission: s.mission[lang] })}
                    aria-current={i === slide}
                    className="tap-target relative flex items-center justify-center"
                  >
                    <span
                      className={`h-1.5 rounded-full transition-all duration-300 hover:scale-125 ${i === slide ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/[0.7]'}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Badge flottant */}
          <motion.div
            className="card-executive absolute -left-4 top-6 hidden w-44 p-4 sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ z: 40 }}
          >
            <p className="text-xs text-muted">{t('floatingBadge.label')}</p>
            <p className="font-heading text-2xl font-bold text-primary">{t('floatingBadge.value')}</p>
          </motion.div>
          </motion.div>
        </div>
      </div>

      <Modal open={cvModalOpen} onClose={() => setCvModalOpen(false)} title={t('cvModal.title')}>
        <p className="mb-5 text-sm leading-relaxed text-muted">{t('cvModal.description')}</p>
        <InquiryForm subject={t('cvModal.subject')} contextLabel={t('cvModal.subject')} />
      </Modal>
    </section>
  )
}
