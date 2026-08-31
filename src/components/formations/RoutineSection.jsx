import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CalendarClock } from 'lucide-react'
import { markdownComponents } from '../../lib/markdownComponents'

const ASSET_BASE = import.meta.env.BASE_URL

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

// Aperçu métier gratuit : ce que fait réellement la personne qui occupe ce
// poste au quotidien et en fin de mois. Contrairement aux modules, ce
// contenu n'est jamais verrouillé — c'est un argument d'inscription, pas le
// produit payant lui-même.
export default function RoutineSection({ formationId }) {
  const [body, setBody] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setBody(null)
    setError(false)

    fetch(`${ASSET_BASE}formations-content/${formationId}/00-routine-professionnelle.md`)
      .then((res) => {
        if (!res.ok) throw new Error('404')
        return res.text()
      })
      .then((text) => {
        if (!cancelled) setBody(text)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [formationId])

  if (error || !body) return null

  return (
    <section className="section-padding divider-gradient bg-surface">
      <div className="section-container">
        <div className="mb-10 text-center">
          <span className="eyebrow inline-flex items-center gap-2">
            <CalendarClock className="h-3.5 w-3.5" />
            La routine réelle du métier
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Ce que vous ferez vraiment, jour après jour</h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="card-executive mx-auto max-w-3xl p-7 sm:p-10"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {body}
          </ReactMarkdown>
        </motion.div>
      </div>
    </section>
  )
}
