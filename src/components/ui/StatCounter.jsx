import { motion } from 'framer-motion'

/**
 * Bloc statistique compact (valeur + label) utilisé dans le Hero et les sections métriques.
 */
export default function StatCounter({ value, label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-1 border-l border-border pl-4"
    >
      <span className="font-heading text-2xl font-extrabold text-ink sm:text-3xl">{value}</span>
      <span className="text-xs uppercase tracking-wide text-muted sm:text-sm">{label}</span>
    </motion.div>
  )
}
