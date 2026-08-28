import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle, Phone, User } from 'lucide-react'
import { isMailConfigured, sendMail } from '../../lib/sendMail'
import { mailLink, site, waLink } from '../../config/site'

const FIELD_CLASS =
  'w-full rounded-xl border border-border bg-surface-white py-3 pl-11 pr-4 text-sm text-ink placeholder-slate-400 transition focus:border-primary focus:ring-2 focus:ring-primary/[0.3]'

/**
 * Formulaire court de prise de contact — étape 1 du parcours.
 *
 * Trois champs obligatoires seulement : le dossier complet (32 champs) n'est
 * demandé qu'aux candidats qui ont confirmé leur intérêt.
 *
 * L'envoi passe par EmailJS et n'annonce un succès qu'après confirmation du
 * serveur. En cas d'échec — ou si EmailJS n'est pas encore configuré — le
 * formulaire bascule sur WhatsApp et e-mail plutôt que de perdre le prospect
 * en silence.
 */
export default function InquiryForm({ subject, contextLabel }) {
  const { t } = useTranslation('contact')
  const uid = useId()
  const [fields, setFields] = useState({ name: '', email: '', phone: '', org: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed
  const [errorDetail, setErrorDetail] = useState('')

  const update = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }))

  const topic = subject || t('form.defaultTopic')
  const emptyValue = t('form.summary.empty')

  const summary = [
    `${t('form.summary.name')} : ${fields.name}`,
    `${t('form.summary.email')} : ${fields.email}`,
    `${t('form.summary.phone')} : ${fields.phone}`,
    `${t('form.summary.org')} : ${fields.org || emptyValue}`,
    '',
    t('form.summary.messageLabel'),
    fields.message || emptyValue,
  ].join('\n')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorDetail('')

    const result = await sendMail({
      to_email: site.email,
      subject: `${t('form.subjectPrefix')} — ${topic}`,
      context: contextLabel || topic,
      nom: fields.name,
      email_candidat: fields.email,
      telephone: fields.phone,
      organisation: fields.org || emptyValue,
      message: fields.message || emptyValue,
      reply_to: fields.email,
    })

    if (result.ok) {
      setStatus('sent')
    } else {
      setStatus('failed')
      setErrorDetail(
        result.reason === 'not-configured'
          ? t('form.error.notConfigured')
          : t('form.error.failed')
      )
    }
  }

  // ── Succès confirmé par le serveur ────────────────────────────────
  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="text-xl font-bold text-ink">{t('form.success.title')}</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          <Trans
            i18nKey="contact:form.success.body"
            values={{ topic, email: fields.email }}
            components={{ b: <span className="font-semibold text-ink" /> }}
          />
        </p>
        <a
          href={waLink(t('form.success.whatsappMessage', { topic }))}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          {t('form.success.whatsappCta')}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-name`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t('form.labels.name')} <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id={`${uid}-name`}
              name="name"
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
              name="email"
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

        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-phone`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t('form.labels.phone')} <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id={`${uid}-phone`}
              name="phone"
              required
              type="tel"
              autoComplete="tel"
              value={fields.phone}
              onChange={update('phone')}
              placeholder={t('form.placeholders.phone')}
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-org`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            {t('form.labels.org')}{' '}
            <span className="font-normal normal-case tracking-normal text-muted">{t('form.optional')}</span>
          </label>
          <input
            id={`${uid}-org`}
            name="organization"
            type="text"
            autoComplete="organization"
            value={fields.org}
            onChange={update('org')}
            placeholder={t('form.placeholders.org')}
            className={FIELD_CLASS.replace('pl-11', 'pl-4')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${uid}-message`} className="text-xs font-semibold uppercase tracking-widest text-muted">
          {t('form.labels.message')}{' '}
          <span className="font-normal normal-case tracking-normal text-muted">{t('form.optional')}</span>
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          value={fields.message}
          onChange={update('message')}
          placeholder={t('form.placeholders.message')}
          className={`${FIELD_CLASS.replace('pl-11', 'pl-4')} resize-none`}
        />
      </div>

      {/* Échec d'envoi — on ne perd pas le prospect, on lui ouvre deux issues */}
      {status === 'failed' && (
        <div role="alert" className="flex flex-col gap-3 rounded-xl border border-slate-300 bg-slate-100 p-4">
          <p className="flex items-start gap-2 text-sm font-semibold text-ink">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {errorDetail} {t('form.error.helper')}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(`${t('form.error.whatsappMessage', { topic })}\n\n${summary}`)}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp !py-2.5 !text-xs"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t('form.error.whatsappCta')}
            </a>
            <a href={mailLink(`${t('form.subjectPrefix')} — ${topic}`, summary)} className="btn-secondary !py-2.5 !text-xs">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t('form.error.emailCta')}
            </a>
          </div>
        </div>
      )}

      {/* Rappel visible en développement uniquement */}
      {!isMailConfigured && status === 'idle' && import.meta.env.DEV && (
        <p className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-ink">
          <Trans i18nKey="contact:form.devNotice" components={{ code: <code /> }} />
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
              {t('form.submit')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
        <p aria-live="polite" className="sr-only">
          {status === 'sending' ? t('form.srSubmitting') : ''}
        </p>
        <p className="text-center text-xs text-muted">
          <Trans
            i18nKey="contact:form.footerNote"
            components={{
              a: (
                <Link
                  to="/mentions-legales"
                  className="underline underline-offset-2 hover:text-ink"
                />
              ),
            }}
          />
        </p>
      </div>
    </form>
  )
}
