import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Calculator, Gem } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { methodologies, watchlist } from '../../data/trading'

/**
 * Dashboard de démonstration — Market Insights (données mock) + calculateur
 * de gestion du risque interactif. Aucune donnée n'est temps réel ; il s'agit
 * d'une vitrine de méthode, pas d'un conseil en investissement personnalisé.
 */
export default function TradingDashboard() {
  const [balance, setBalance] = useState(10000)
  const [riskPercent, setRiskPercent] = useState(1)
  const [stopLossPips, setStopLossPips] = useState(20)
  const [pipValue, setPipValue] = useState(10)

  const riskAmount = useMemo(() => (balance * riskPercent) / 100, [balance, riskPercent])
  const positionSize = useMemo(() => {
    if (!stopLossPips || !pipValue) return 0
    return riskAmount / (stopLossPips * pipValue)
  }, [riskAmount, stopLossPips, pipValue])

  return (
    <section id="trading" className="section-padding relative bg-night">
      <div className="section-container flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pôle 04 — Financial Markets"
          title="Discipline de marché,"
          highlight="gestion du risque d'abord"
          description="Analyse Smart Money / ICT sur XAUUSD et actions, associée à une gestion du capital systématique. Démonstration — données de marché illustratives."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Market Watch */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card-executive flex flex-col gap-5 p-7"
          >
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-semibold text-offwhite">
                <Gem className="h-4 w-4 text-gold" /> Market Watch
              </h3>
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] uppercase tracking-wide text-muted">
                Données démo
              </span>
            </div>

            <div className="flex flex-col divide-y divide-white/5">
              {watchlist.map((asset) => (
                <div key={asset.symbol} className="flex items-center justify-between py-3.5">
                  <div>
                    <p className="font-semibold text-offwhite">{asset.symbol}</p>
                    <p className="text-xs text-muted">{asset.name}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-lg font-bold text-offwhite">{asset.price}</span>
                    <span
                      className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                        asset.trend === 'up' ? 'bg-emerald/10 text-emerald' : 'bg-red-500/10 text-red-400'
                      }`}
                    >
                      {asset.trend === 'up' ? (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowDownRight className="h-3.5 w-3.5" />
                      )}
                      {asset.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {methodologies.map((method) => (
                <span
                  key={method.name}
                  title={method.detail}
                  className="cursor-help rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted"
                >
                  {method.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Risk Management Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card-executive flex flex-col gap-6 p-7"
          >
            <h3 className="flex items-center gap-2 font-semibold text-offwhite">
              <Calculator className="h-4 w-4 text-emerald" /> Calculateur de Gestion du Risque
            </h3>

            <div className="flex flex-col gap-4">
              <FieldRange
                label="Capital du compte (USD)"
                value={balance}
                onChange={setBalance}
                min={100}
                max={100000}
                step={100}
              />
              <FieldRange
                label="Risque par trade (%)"
                value={riskPercent}
                onChange={setRiskPercent}
                min={0.25}
                max={5}
                step={0.25}
              />
              <FieldRange
                label="Stop Loss (pips)"
                value={stopLossPips}
                onChange={setStopLossPips}
                min={5}
                max={200}
                step={1}
              />
              <FieldRange
                label="Valeur du pip (USD)"
                value={pipValue}
                onChange={setPipValue}
                min={1}
                max={50}
                step={1}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-muted">Montant à risque</p>
                <p className="font-heading text-xl font-bold text-gold">${riskAmount.toFixed(2)}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-muted">Taille de position</p>
                <p className="font-heading text-xl font-bold text-emerald">{positionSize.toFixed(2)} lots</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FieldRange({ label, value, onChange, min, max, step }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center justify-between text-sm text-muted">
        {label}
        <span className="font-semibold text-offwhite">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-gold"
      />
    </label>
  )
}
