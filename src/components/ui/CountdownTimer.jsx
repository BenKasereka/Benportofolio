import { useEffect, useState } from 'react'

const DURATION_MS = 3 * 24 * 60 * 60 * 1000 // 3 jours
const STORAGE_KEY = 'bk_promo_expiry'

function getExpiry() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const expiry = parseInt(stored, 10)
    if (expiry > Date.now()) return expiry
  }
  const expiry = Date.now() + DURATION_MS
  localStorage.setItem(STORAGE_KEY, String(expiry))
  return expiry
}

function formatRemaining(ms) {
  if (ms <= 0) return null
  const totalSec = Math.floor(ms / 1000)
  const days = Math.floor(totalSec / 86400)
  const hours = Math.floor((totalSec % 86400) / 3600)
  const mins = Math.floor((totalSec % 3600) / 60)
  const secs = totalSec % 60
  return { days, hours, mins, secs }
}

export default function CountdownTimer({ compact = false }) {
  const [remaining, setRemaining] = useState(null)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    const expiry = getExpiry()
    let id
    const tick = () => {
      const diff = expiry - Date.now()
      if (diff <= 0) {
        setExpired(true)
        setRemaining(null)
        clearInterval(id)
      } else {
        setRemaining(formatRemaining(diff))
      }
    }
    tick()
    id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (expired) {
    return (
      <span className={compact ? 'text-xs text-muted' : 'text-sm text-muted'}>
        Offre expirée — contactez-nous
      </span>
    )
  }

  if (!remaining) return null

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white">
        ⏳ {remaining.days}j {remaining.hours}h {String(remaining.mins).padStart(2, '0')}m {String(remaining.secs).padStart(2, '0')}s
      </span>
    )
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {[
        { v: remaining.days,  u: 'Jours'    },
        { v: remaining.hours, u: 'Heures'   },
        { v: remaining.mins,  u: 'Minutes'  },
        { v: remaining.secs,  u: 'Secondes' },
      ].map(({ v, u }, i) => (
        <div key={u} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <span className="font-heading text-5xl font-extrabold text-white leading-none drop-shadow-lg sm:text-6xl">
              {String(v).padStart(2, '0')}
            </span>
            <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/70">{u}</span>
          </div>
          {i < 3 && (
            <span className="mb-4 text-3xl font-extrabold text-white/60 sm:text-4xl">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
