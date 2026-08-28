import { useId, useState } from 'react'
import { AlertTriangle, ArrowRight, CheckCircle2, Loader2, Mail, MessageCircle, Phone, User } from 'lucide-react'
import { isMailConfigured, sendMail } from '../../lib/sendMail'
import { mailLink, site, waLink } from '../../config/site'

const FIELD_CLASS =
  'w-full rounded-xl border border-night-border bg-white py-3 pl-11 pr-4 text-sm text-offwhite placeholder-slate-400 transition focus:border-gold focus:ring-2 focus:ring-gold/[0.3]'

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
  const uid = useId()
  const [fields, setFields] = useState({ name: '', email: '', phone: '', org: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed
  const [errorDetail, setErrorDetail] = useState('')

  const update = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }))

  const topic = subject || 'Demande de consultation'

  const summary = [
    `Nom : ${fields.name}`,
    `Email : ${fields.email}`,
    `Téléphone : ${fields.phone}`,
    `Organisation : ${fields.org || '—'}`,
    '',
    'Message :',
    fields.message || '—',
  ].join('\n')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorDetail('')

    const result = await sendMail({
      to_email: site.email,
      subject: `Demande — ${topic}`,
      context: contextLabel || topic,
      nom: fields.name,
      email_candidat: fields.email,
      telephone: fields.phone,
      organisation: fields.org || '—',
      message: fields.message || '—',
      reply_to: fields.email,
    })

    if (result.ok) {
      setStatus('sent')
    } else {
      setStatus('failed')
      setErrorDetail(
        result.reason === 'not-configured'
          ? "L'envoi automatique n'est pas encore activé sur ce site."
          : "L'envoi n'a pas abouti — votre connexion a peut-être été interrompue."
      )
    }
  }

  // ── Succès confirmé par le serveur ────────────────────────────────
  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald/30 bg-emerald/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald" aria-hidden="true" />
        <h3 className="text-xl font-bold text-offwhite">Message bien reçu</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Votre demande concernant <span className="font-semibold text-offwhite">{topic}</span> est
          arrivée. Je vous réponds sous 24 h ouvrables à l&apos;adresse{' '}
          <span className="font-semibold text-offwhite">{fields.email}</span>.
        </p>
        <a
          href={waLink(`Bonjour Benjamin, je viens de vous écrire depuis le site au sujet de : ${topic}.`)}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Poursuivre sur WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-name`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            Nom complet <span className="text-rouge">*</span>
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
              placeholder="Jean Dupont"
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-email`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            Adresse email <span className="text-rouge">*</span>
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
              placeholder="vous@exemple.com"
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-phone`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            Téléphone / WhatsApp <span className="text-rouge">*</span>
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
              placeholder="+243 9XX XXX XXX"
              className={FIELD_CLASS}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={`${uid}-org`} className="text-xs font-semibold uppercase tracking-widest text-muted">
            Organisation{' '}
            <span className="font-normal normal-case tracking-normal text-muted">(optionnel)</span>
          </label>
          <input
            id={`${uid}-org`}
            name="organization"
            type="text"
            autoComplete="organization"
            value={fields.org}
            onChange={update('org')}
            placeholder="MSF, ACTED, indépendant…"
            className={FIELD_CLASS.replace('pl-11', 'pl-4')}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${uid}-message`} className="text-xs font-semibold uppercase tracking-widest text-muted">
          Votre message{' '}
          <span className="font-normal normal-case tracking-normal text-muted">(optionnel)</span>
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={4}
          value={fields.message}
          onChange={update('message')}
          placeholder="En une ou deux phrases : votre situation et ce que vous cherchez."
          className={`${FIELD_CLASS.replace('pl-11', 'pl-4')} resize-none`}
        />
      </div>

      {/* Échec d'envoi — on ne perd pas le prospect, on lui ouvre deux issues */}
      {status === 'failed' && (
        <div role="alert" className="flex flex-col gap-3 rounded-xl border border-rouge/30 bg-rouge/5 p-4">
          <p className="flex items-start gap-2 text-sm font-semibold text-rouge-dark">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {errorDetail} Passez par l&apos;une de ces deux voies — votre message est prêt, rien n&apos;est perdu.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(`Bonjour Benjamin, au sujet de : ${topic}.\n\n${summary}`)}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp !py-2.5 !text-xs"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Envoyer via WhatsApp
            </a>
            <a href={mailLink(`Demande — ${topic}`, summary)} className="btn-secondary !py-2.5 !text-xs">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Ouvrir ma messagerie
            </a>
          </div>
        </div>
      )}

      {/* Rappel visible en développement uniquement */}
      {!isMailConfigured && status === 'idle' && import.meta.env.DEV && (
        <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-gold-dark">
          Développement : EmailJS n&apos;est pas configuré (voir <code>.env.example</code>). En
          production, l&apos;envoi basculera automatiquement sur WhatsApp et e-mail.
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
              Envoi en cours…
            </>
          ) : (
            <>
              Envoyer ma demande
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
        <p aria-live="polite" className="sr-only">
          {status === 'sending' ? 'Envoi du formulaire en cours' : ''}
        </p>
        <p className="text-center text-xs text-muted">
          Réponse sous 24 h ouvrables · Vos données servent uniquement à vous répondre —{' '}
          <a
            href={`${import.meta.env.BASE_URL}mentions-legales`}
            className="underline underline-offset-2 hover:text-offwhite"
          >
            en savoir plus
          </a>
        </p>
      </div>
    </form>
  )
}
