import { useId, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  MessageCircle,
  Paperclip,
  Smartphone,
  User,
} from 'lucide-react'
import { isMailConfigured, sendMail } from '../../lib/sendMail'
import { isPaymentSystemConfigured, submitAccessRequest, validateProofFile } from '../../lib/accessRequests'
import { mailLink, site, waLink } from '../../config/site'
import { pricing } from '../../lib/pricing'

const FIELD_CLASS =
  'w-full rounded-xl border border-border bg-surface-white py-3 pl-11 pr-4 text-sm text-ink placeholder-slate-400 transition focus:border-primary focus:ring-2 focus:ring-primary/[0.3]'

const METHOD_ICON = { airtel: Smartphone, orange: Smartphone, virement: Building2 }

/**
 * Formulaire d'inscription payante : choix du moyen de paiement, dépôt de la
 * preuve de paiement, puis demande en attente de validation manuelle.
 *
 * Remplace InquiryForm dans la section #formulaire des pages de formation —
 * le contact simple (questions, etc.) reste possible via WhatsApp.
 */
export default function PaymentRegistrationForm({ formation, lang = 'fr' }) {
  const { t } = useTranslation('payment')
  const uid = useId()

  const [method, setMethod] = useState('airtel')
  const [fields, setFields] = useState({ name: '', email: '' })
  const [proofFile, setProofFile] = useState(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed
  const [errorReason, setErrorReason] = useState('')
  const [bankRequestStatus, setBankRequestStatus] = useState('idle') // idle | sending | sent | failed

  const update = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }))
  const title = formation.title[lang]
  const price = pricing(formation, lang).current
  const mobileMoneyEntry = site.mobileMoney.find((m) => m.provider === method)

  const handleBankRequest = async () => {
    if (!fields.email.trim()) {
      setErrorReason('missingFields')
      setStatus('failed')
      return
    }
    setBankRequestStatus('sending')
    const result = await sendMail({
      to_email: site.email,
      subject: `Demande de coordonnées bancaires — ${title}`,
      context: `Inscription — ${title}`,
      nom: fields.name || '—',
      email_candidat: fields.email,
      telephone: '—',
      organisation: '—',
      message: `Le client ci-dessus demande les coordonnées bancaires (virement) pour s'inscrire à « ${title} ». Merci de les lui transmettre par email en réponse directe.`,
      reply_to: fields.email,
    })
    setBankRequestStatus(result.ok ? 'sent' : 'failed')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorReason('')

    if (!fields.name.trim() || !fields.email.trim() || !proofFile) {
      setErrorReason('missingFields')
      setStatus('failed')
      return
    }
    const fileError = validateProofFile(proofFile)
    if (fileError) {
      setErrorReason(fileError)
      setStatus('failed')
      return
    }

    setStatus('sending')
    const result = await submitAccessRequest({
      clientName: fields.name,
      clientEmail: fields.email,
      formationId: formation.id,
      paymentMethod: method,
      proofFile,
    })

    if (result.ok) {
      setStatus('sent')
    } else {
      setErrorReason(result.reason || 'generic')
      setStatus('failed')
    }
  }

  // ── Système non configuré (VITE_SUPABASE_URL absent) — on ne perd pas le
  // prospect, on retombe sur le contact direct comme avant ce système.
  if (!isPaymentSystemConfigured) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-300 bg-slate-100 p-8 text-center">
        <AlertTriangle className="h-8 w-8 text-ink" aria-hidden="true" />
        <p className="text-sm font-medium text-ink">{t('form.error.notConfigured')}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={waLink(t('form.whatsappMessage', { title }))}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t('form.whatsappFallback')}
          </a>
          <a href={mailLink(`Inscription — ${title}`)} className="btn-secondary">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {site.email}
          </a>
        </div>
      </div>
    )
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="text-xl font-bold text-ink">{t('form.success.title')}</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          <Trans
            i18nKey="payment:form.success.body"
            values={{ formation: title }}
            components={{ b: <span className="font-semibold text-ink" /> }}
          />
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* ── Choix du moyen de paiement ── */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">{t('form.methodLabel')}</span>
        <div className="flex flex-wrap gap-2">
          {['airtel', 'orange', 'virement'].map((key) => {
            const Icon = METHOD_ICON[key]
            const active = method === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setMethod(key)}
                className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? 'border-primary bg-primary/10 text-primary-dark'
                    : 'border-border bg-surface-white text-muted hover:border-primary/40'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {t(`form.methods.${key}`)}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Instructions spécifiques au moyen choisi ── */}
      {mobileMoneyEntry ? (
        <div className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4">
          <p className="text-sm leading-relaxed text-muted">
            {t('form.mobileMoneyInstructions', { price })}
          </p>
          <p className="text-lg font-bold text-ink">
            {t('form.sendTo')} : <span className="text-primary">{mobileMoneyEntry.number}</span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4">
          <p className="text-sm leading-relaxed text-muted">{t('form.bankTransfer.description')}</p>
          <button
            type="button"
            onClick={handleBankRequest}
            disabled={bankRequestStatus === 'sending'}
            className="btn-secondary w-fit disabled:cursor-not-allowed disabled:opacity-60"
          >
            {bankRequestStatus === 'sending' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                {t('form.bankTransfer.requestSending')}
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" aria-hidden="true" />
                {t('form.bankTransfer.requestCta')}
              </>
            )}
          </button>
          {bankRequestStatus === 'sent' && (
            <p className="flex items-center gap-2 text-sm font-medium text-primary-dark">
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              {t('form.bankTransfer.requestSent')}
            </p>
          )}
          {bankRequestStatus === 'failed' && (
            <p className="flex items-center gap-2 text-sm font-medium text-ink">
              <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {t('form.bankTransfer.requestFailed')}
            </p>
          )}
        </div>
      )}

      {/* ── Identité + preuve de paiement ── */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-name`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t('form.labels.name')} <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id={`${uid}-name`}
              required
              type="text"
              autoComplete="name"
              value={fields.name}
              onChange={update('name')}
              placeholder={t('form.placeholders.name')}
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-email`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t('form.labels.email')} <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id={`${uid}-email`}
              required
              type="email"
              autoComplete="email"
              value={fields.email}
              onChange={update('email')}
              placeholder={t('form.placeholders.email')}
              className={FIELD_CLASS}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${uid}-proof`} className="text-xs font-semibold uppercase tracking-widest text-muted">
          {t('form.labels.proof')} <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <Paperclip className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            id={`${uid}-proof`}
            required
            type="file"
            accept="image/jpeg,image/png,image/webp,application/pdf"
            onChange={(e) => setProofFile(e.target.files?.[0] || null)}
            className={`${FIELD_CLASS} file:mr-3 file:rounded-lg file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-primary-dark`}
          />
        </div>
        <p className="text-xs text-muted">{t('form.proofHint')}</p>
      </div>

      {status === 'failed' && (
        <div role="alert" className="flex flex-col gap-3 rounded-xl border border-slate-300 bg-slate-100 p-4">
          <p className="flex items-start gap-2 text-sm font-semibold text-ink">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {t(`form.error.${errorReason}`, { defaultValue: t('form.error.generic') })}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(t('form.whatsappMessage', { title }))}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp !py-2.5 !text-xs"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t('form.whatsappFallback')}
            </a>
          </div>
        </div>
      )}

      {!isMailConfigured && status === 'idle' && import.meta.env.DEV && (
        <p className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-ink">
          EmailJS n'est pas configuré — la demande de coordonnées bancaires ne pourra pas être envoyée en développement.
        </p>
      )}

      <div className="flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              {t('form.submitting')}
            </>
          ) : (
            <>
              {t('form.submitCta')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
