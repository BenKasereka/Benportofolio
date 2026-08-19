import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, TrendingUp } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Modal from '../ui/Modal'
import { galleryItems } from '../../data/gallery'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function HumanitarianGallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="supply-chain" className="section-padding relative bg-night-soft">
      <div className="section-container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pôle 01 — Humanitarian Supply Chain"
          title="Des opérations complexes, sur des"
          highlight="terrains à haut risque"
          accent="emerald"
          description="Manuels de procédures, réponses aux épidémies, ouvertures et fermetures de bases : chaque mission a produit des résultats mesurables sous forte pression opérationnelle."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              custom={index * 0.06}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              onClick={() => setActive(item)}
              className={`group relative overflow-hidden rounded-2xl border border-night-border text-left ${
                index === 0 ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={`${item.mission} — ${item.country}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-3 sm:p-4">
                <span className="w-fit rounded-full bg-emerald/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald">
                  {item.context}
                </span>
                <p className="text-sm font-semibold text-offwhite">{item.mission}</p>
                <p className="text-xs text-muted">{item.country}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <Modal isOpen={!!active} onClose={() => setActive(null)}>
          {active && (
            <>
              <img
                src={active.image}
                alt={active.mission}
                className="max-h-[60vh] w-full object-cover"
              />
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <span className="w-fit rounded-full bg-emerald/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald">
                  {active.context}
                </span>
                <h3 className="text-2xl font-bold text-offwhite">{active.mission}</h3>
                <div className="flex flex-wrap gap-6 text-sm text-muted">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald" /> {active.country}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald" /> {active.period}
                  </span>
                  <span className="flex items-center gap-2 text-offwhite">
                    <TrendingUp className="h-4 w-4 text-gold" /> {active.impact}
                  </span>
                </div>
              </div>
            </>
          )}
        </Modal>
      </div>
    </section>
  )
}
