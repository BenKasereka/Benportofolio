import { useTranslation } from 'react-i18next'
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { formatDate, getSessionStatus } from '../../data/sessions'

/**
 * Annonce de session — remplace l'ancien compte à rebours factice.
 *
 * Ne rend strictement rien tant que `src/data/sessions.js` ne contient pas
 * de date réelle : mieux vaut aucune urgence qu'une urgence inventée.
 *
 * `compact` sert au bandeau de la page formations, la variante pleine à la
 * section tarifs.
 */
export default function SessionNotice({ compact = false }) {
  const { t, i18n } = useTranslation('common')
  const lang = i18n.resolvedLanguage
  const status = getSessionStatus()
  if (!status) return null

  const { label, format, startDate, deadline, daysLeft, seatsLeft, seatsTotal } = status

  if (compact) {
    return (
      <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-white">
        {label && <span>{label}</span>}
        {deadline && (
          <span className="text-white/85">
            · {t('session.enrollUntil')} {formatDate(deadline, lang)}
          </span>
        )}
        {seatsLeft !== null && (
          <span className="rounded-full bg-white/20 px-2 py-0.5">
            {seatsLeft} {t(seatsLeft > 1 ? 'session.seatsLeft' : 'session.seatLeft')}
          </span>
        )}
      </span>
    )
  }

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {label && (
        <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">{label}</h3>
      )}

      <div className="flex flex-wrap items-center justify-center gap-3">
        {startDate && (
          <span className="chip-on-dark inline-flex items-center gap-2 !px-4 !py-2 !text-sm">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            {t('session.startsOn')} {formatDate(startDate, lang)}
          </span>
        )}
        {format && (
          <span className="chip-on-dark inline-flex items-center gap-2 !px-4 !py-2 !text-sm">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {format}
          </span>
        )}
        {seatsLeft !== null && (
          <span className="chip-on-dark inline-flex items-center gap-2 !px-4 !py-2 !text-sm">
            <Users className="h-4 w-4" aria-hidden="true" />
            {seatsLeft}
            {seatsTotal ? ` / ${seatsTotal}` : ''} {t(seatsLeft > 1 ? 'session.seatsLeft' : 'session.seatLeft')}
          </span>
        )}
      </div>

      {deadline && (
        <p className="max-w-lg text-sm leading-relaxed text-white/85">
          {t('session.enrollOpenUntil')}{' '}
          <span className="font-semibold text-white">{formatDate(deadline, lang)}</span>
          {daysLeft !== null && daysLeft <= 30 && (
            <>
              {' '}
              — {t('session.daysLeft', { count: daysLeft })}
            </>
          )}
          . {t('session.nextSessionNotice')}
        </p>
      )}
    </div>
  )
}
