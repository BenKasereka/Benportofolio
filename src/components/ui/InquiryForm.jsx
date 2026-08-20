import { useState } from 'react'
import { ArrowRight, CheckCircle2, Mail, Phone, User } from 'lucide-react'

const CONTACT_EMAIL = 'kasvinyatsi7@gmail.com'

export default function InquiryForm({ formationTitle, formationId }) {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', org: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (key, value) => setFields((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Demande d'information — ${formationTitle}`)
    const body = encodeURIComponent(
      `Bonjour Benjamin,\n\nJe souhaite obtenir plus d'informations sur la formation "${formationTitle}".\n\nNom complet : ${fields.name}\nEmail : ${fields.email}\nTéléphone : ${fields.phone}\nOrganisation : ${fields.org || '—'}\n\nMessage :\n${fields.message}\n\nCordialement,\n${fields.name}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald/30 bg-emerald/10 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald" />
        <h3 className="text-xl font-bold text-offwhite">Votre messagerie s'est ouverte !</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Vérifiez votre application email pour finaliser l'envoi. Benjamin vous répondra sous 24h avec
          les détails complets et le formulaire d'inscription pour{' '}
          <span className="font-semibold text-offwhite">{formationTitle}</span>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-gold underline underline-offset-4"
        >
          Renvoyer un message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-muted">
            Nom complet *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              required
              type="text"
              value={fields.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Jean Dupont"
              className="w-full rounded-xl border border-night-border bg-night-card/50 py-3 pl-11 pr-4 text-sm text-offwhite placeholder-muted/50 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-muted">
            Adresse email *
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              required
              type="email"
              value={fields.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="vous@exemple.com"
              className="w-full rounded-xl border border-night-border bg-night-card/50 py-3 pl-11 pr-4 text-sm text-offwhite placeholder-muted/50 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-muted">
            Téléphone *
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              required
              type="tel"
              value={fields.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="+243 9XX XXX XXX"
              className="w-full rounded-xl border border-night-border bg-night-card/50 py-3 pl-11 pr-4 text-sm text-offwhite placeholder-muted/50 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-widest text-muted">
            Organisation (optionnel)
          </label>
          <div className="relative">
            <input
              type="text"
              value={fields.org}
              onChange={(e) => update('org', e.target.value)}
              placeholder="MSF, ACTED, Auto-entrepreneur…"
              className="w-full rounded-xl border border-night-border bg-night-card/50 py-3 px-4 text-sm text-offwhite placeholder-muted/50 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted">
          Votre message / motivation *
        </label>
        <textarea
          required
          rows={4}
          value={fields.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Décrivez votre situation actuelle, vos objectifs et toute question spécifique sur cette formation…"
          className="w-full resize-none rounded-xl border border-night-border bg-night-card/50 px-4 py-3 text-sm text-offwhite placeholder-muted/50 outline-none transition focus:border-gold/60 focus:ring-1 focus:ring-gold/30"
        />
      </div>

      <button type="submit" className="btn-primary w-fit self-center">
        Envoyer ma demande
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-center text-xs text-muted">
        Réponse garantie sous 24h ouvrables · Aucune donnée transmise à des tiers
      </p>
    </form>
  )
}
