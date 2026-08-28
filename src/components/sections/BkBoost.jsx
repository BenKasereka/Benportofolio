import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Compass,
  FileEdit,
  FileText,
  Globe2,
  HandCoins,
  KeyRound,
  ListChecks,
  MessagesSquare,
  Mic2,
  Network,
  Target,
} from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
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

export default function BkBoost() {
  const { t, i18n } = useTranslation('bkBoost')
  const lang = i18n.resolvedLanguage

  return (
    <section id="bk-boost" className="surface-dark section-padding relative overflow-hidden bg-primary-darker">
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl" />
      <div className="pointer-events-none absolute left-[-10%] bottom-0 h-72 w-72 rounded-full bg-primary-light/10 blur-3xl" />

      <div className="section-container flex flex-col gap-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/20 bg-white p-3 shadow-2xl ring-4 ring-primary-light/40">
            <img src={`${import.meta.env.BASE_URL}images/brand/bk-boost-logo.png`} alt="Logo BK-BOOST Ltd." className="h-full w-full object-contain" />
          </div>
          <SectionHeading
            eyebrow={t('eyebrow')}
            title={t('title')}
            highlight={t('highlight')}
            tone="dark"
            description={t('description')}
          />
        </div>

        {/* Méthode en 4 étapes */}
        <div className="flex flex-col gap-10">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-secondary-300">
            {t('methodHeading')}
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
                  <span className="pointer-events-none absolute -right-2 -top-4 font-heading text-6xl font-extrabold text-primary/10">
                    {item.step}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h4 className="font-semibold text-ink">{item.title[lang]}</h4>
                  <p className="text-sm leading-relaxed text-muted">{item.description[lang]}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Compétences développées */}
        <div className="flex flex-col gap-10">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-secondary-300">
            {t('skillsHeading')}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillsGained.map((skill, index) => {
              const Icon = SKILL_ICONS[skill.icon]
              return (
                <motion.div
                  key={skill.label.fr}
                  custom={index * 0.06}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-white p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm text-ink">{skill.label[lang]}</span>
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
          className="card-executive relative flex flex-col items-center gap-4 overflow-hidden p-10 text-center shadow-primary-glow"
        >
          <div className="pointer-events-none absolute inset-0 bg-primary opacity-[0.06]" />
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            {(() => {
              const BonusIcon = BONUS_ICONS[flagshipBonus.icon]
              return <BonusIcon className="h-6 w-6" strokeWidth={1.75} />
            })()}
          </span>
          <span className="eyebrow">{flagshipBonus.eyebrow[lang]}</span>
          <h3 className="max-w-2xl text-2xl font-bold text-ink sm:text-3xl">{flagshipBonus.title[lang]}</h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">{flagshipBonus.description[lang]}</p>
        </motion.div>

        {/* CTA le plus visible du site — priorité commerciale numéro un */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-executive flex flex-col items-center gap-5 p-10 text-center shadow-primary-glow sm:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-dark">{t('ctaHeading')}</p>
          <p className="max-w-xl text-xl font-semibold text-ink sm:text-2xl">
            {t('ctaSubheading')}
          </p>
          <a href="#contact" className="btn-primary !px-10 !py-4 !text-base shadow-primary-glow">
            {t('ctaButton')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
