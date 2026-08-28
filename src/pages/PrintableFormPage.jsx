import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { formationById } from '../data/formations'
import { countries } from '../data/countries'
import { pricingPacks } from '../data/pricingPacks'
import { pricingParts } from '../lib/pricing'
import { isMailConfigured, sendMail } from '../lib/sendMail'
import { site, waLink } from '../config/site'
import SEO from '../components/ui/SEO'

const TO_EMAIL = site.email
const ASSET_BASE = import.meta.env.BASE_URL

const EMPTY_FORM = {
  nom: '', prenom: '', date_naissance: '', nationalite: '',
  telephone: '', email_candidat: '', adresse: '',
  organisation: '', poste: '', annees_exp: '', secteur: '', resume_parcours: '',
  pourquoi_formation: '', resultats_attendus: '', format_prefere: '', disponibilites: '',
  niveau: '',
  sources: [],
  pack_choisi: '',
  budget_autre: '',
  fait_a: '', le_date: '',
}

export default function PrintableFormPage() {
  const { t, i18n } = useTranslation('printableForm')
  const lang = i18n.resolvedLanguage
  const { id } = useParams()
  const formation = formationById(id)
  const formationTitle = formation?.title[lang]
  const countryNames = [...countries].map((c) => c[lang]).sort((a, b) => a.localeCompare(b, lang))

  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  if (!formation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-gray-800">
        <div className="text-center">
          <p className="text-lg font-semibold">{t('notFound.message')}</p>
          <Link to="/formations" className="mt-4 inline-block text-blue-600 underline">
            {t('notFound.back')}
          </Link>
        </div>
      </div>
    )
  }

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const toggleSource = (src) => {
    setForm((prev) => {
      const arr = prev.sources
      return {
        ...prev,
        sources: arr.includes(src) ? arr.filter((s) => s !== src) : [...arr, src],
      }
    })
  }

  const packLabel = form.pack_choisi === 'autre' ? t('packLabel.autre', { value: form.budget_autre }) : form.pack_choisi || '—'

  // Résumé texte du dossier — sert de repli WhatsApp/e-mail si l'envoi échoue,
  // pour que le candidat n'ait jamais à ressaisir 32 champs.
  const dossierSummary = () =>
    [
      t('summary.formation', { value: formationTitle }),
      t('summary.name', { value: `${form.nom} ${form.prenom}` }),
      t('summary.phone', { value: form.telephone }),
      t('summary.email', { value: form.email_candidat }),
      t('summary.organisation', { value: form.organisation || '—' }),
      t('summary.pack', { value: packLabel }),
      '',
      t('summary.motivationLabel'),
      form.pourquoi_formation || '—',
    ].join('\n')

  const handleSubmit = async () => {
    setStatus('sending')

    const result = await sendMail({
      to_email: TO_EMAIL,
      formation_title: formationTitle,
      formation_number: formation.number,
      nom: form.nom,
      prenom: form.prenom,
      date_naissance: form.date_naissance,
      nationalite: form.nationalite,
      telephone: form.telephone,
      email_candidat: form.email_candidat,
      adresse: form.adresse,
      organisation: form.organisation,
      poste: form.poste,
      annees_exp: form.annees_exp,
      secteur: form.secteur,
      resume_parcours: form.resume_parcours,
      pourquoi_formation: form.pourquoi_formation,
      resultats_attendus: form.resultats_attendus,
      format_prefere: form.format_prefere,
      disponibilites: form.disponibilites,
      niveau: form.niveau || '—',
      sources: form.sources.join(', ') || '—',
      pack_choisi: packLabel,
      fait_a: form.fait_a,
      le_date: form.le_date,
      reply_to: form.email_candidat,
    }, { dossier: true })

    setStatus(result.ok ? 'sent' : 'error')
  }

  return (
    <>
      <SEO
        title={t('seo.title', { title: formationTitle })}
        description={t('seo.description', { title: formationTitle })}
        noindex
      />
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; padding: 0; }
          .print-page { box-shadow: none !important; border: none !important; }
        }
        body { background: #f3f4f6; font-family: 'Helvetica Neue', Arial, sans-serif; }
        .form-input {
          width: 100%;
          border: none;
          border-bottom: 1.5px solid #D1D5DB;
          outline: none;
          background: transparent;
          font-size: 12px;
          color: #0F172A;
          padding: 4px 2px;
          font-family: inherit;
          resize: none;
          line-height: 1.5;
        }
        .form-input:focus { border-bottom-color: #047857; }
        .pack-card { cursor: pointer; transition: all 0.15s; }
        .pack-card:hover { background: #ECFDF5; }
        .pack-card.selected { background: #ECFDF5; border-color: #047857 !important; }
        @media print {
          .form-input { border-bottom: 1.5px solid #D1D5DB; }
          .pack-card { break-inside: avoid; }
        }
      `}</style>

      {/* Barre de contrôle (non imprimable) */}
      <div className="no-print flex flex-col gap-3 bg-ink px-8 py-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link to={`/formations/${id}`} className="text-sm text-slate-300 hover:text-white">
            ← {t('nav.backToFormation')}
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            {status === 'sent' && (
              <span className="text-sm font-medium text-primary-400">
                ✓ {t('status.sentTo', { email: TO_EMAIL })}
              </span>
            )}
            <button
              onClick={handleSubmit}
              disabled={status === 'sending' || status === 'sent'}
              className="min-h-tap rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'sending' ? t('buttons.sending') : status === 'sent' ? t('buttons.sent') : t('buttons.sendEmail')}
            </button>
            <button
              onClick={() => window.print()}
              className="min-h-tap rounded-lg border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
            >
              {t('buttons.print')}
            </button>
          </div>
        </div>

        {/* Échec d'envoi — deux issues immédiates, le dossier n'est jamais perdu */}
        {status === 'error' && (
          <div role="alert" className="flex flex-col gap-2 rounded-lg border border-white/25 bg-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-white">
              {isMailConfigured ? t('error.notSent') : t('error.notConfigured')}{' '}
              {t('error.fallbackHint')}
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={waLink(`${t('whatsappGreeting')}\n\n${dossierSummary()}`)}
                target="_blank"
                rel="noreferrer"
                className="min-h-tap rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white hover:bg-primary-dark"
              >
                {t('error.sendWhatsapp')}
              </a>
              <a
                href={`mailto:${TO_EMAIL}?subject=${encodeURIComponent(t('seo.title', { title: formationTitle }))}&body=${encodeURIComponent(dossierSummary())}`}
                className="min-h-tap rounded-lg border border-slate-500 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
              >
                {t('error.openMail')}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Document imprimable */}
      <div
        className="print-page mx-auto my-8 max-w-[794px] border border-gray-200 bg-white shadow-2xl"
        style={{ minHeight: '1123px', padding: '48px' }}
      >
        {/* En-tête */}
        <div style={{ borderBottom: '3px solid #047857', paddingBottom: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={`${ASSET_BASE}images/brand/bk-boost-logo.png`}
                alt="BK-BOOST Ltd."
                style={{ height: '52px', width: '52px', objectFit: 'contain' }}
              />
              <div>
                <div style={{ fontSize: '22px', fontWeight: '900', color: '#0F172A', letterSpacing: '-0.5px' }}>
                  BK-BOOST Ltd.
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {t('header.motto')}
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '10px', color: '#6B7280' }}>📧 kasvinyatsi7@gmail.com</div>
              <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>📞 +243 990 260 711</div>
              <div style={{ fontSize: '10px', color: '#6B7280', marginTop: '2px' }}>📍 Goma, RD Congo</div>
            </div>
          </div>
        </div>

        {/* Titre de la formation */}
        <div style={{ backgroundColor: '#0F172A', padding: '20px 24px', borderRadius: '12px', marginBottom: '28px' }}>
          <div style={{ fontSize: '10px', color: '#6EE7B7', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
            {t('form.eyebrow', { number: formation.number })}
          </div>
          <h1 style={{ fontSize: '18px', fontWeight: '800', color: '#F8FAFC', lineHeight: '1.3', margin: 0 }}>
            {formationTitle}
          </h1>
          <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '6px' }}>
            {formation.duration[lang]} · {formation.level[lang]} · {formation.format[lang]}
          </div>
        </div>

        {/* Section 1 — Informations personnelles */}
        <Section title={t('form.sections.personal.title')} number="01">
          <Grid2>
            <Field label={t('form.sections.personal.lastName')} value={form.nom} onChange={set('nom')} />
            <Field label={t('form.sections.personal.firstName')} value={form.prenom} onChange={set('prenom')} />
            <Field label={t('form.sections.personal.birthDate')} value={form.date_naissance} onChange={set('date_naissance')} type="date" />
            <Select
              label={t('form.sections.personal.nationality')}
              value={form.nationalite}
              onChange={set('nationalite')}
              options={countryNames}
              placeholder={t('form.sections.personal.selectCountry')}
            />
            <Field label={t('form.sections.personal.phone')} value={form.telephone} onChange={set('telephone')} />
            <Field label={t('form.sections.personal.email')} value={form.email_candidat} onChange={set('email_candidat')} />
          </Grid2>
          <Field label={t('form.sections.personal.address')} value={form.adresse} onChange={set('adresse')} multiline height={48} />
        </Section>

        {/* Section 2 — Profil professionnel */}
        <Section title={t('form.sections.professional.title')} number="02">
          <Grid2>
            <Field label={t('form.sections.professional.organisation')} value={form.organisation} onChange={set('organisation')} />
            <Field label={t('form.sections.professional.position')} value={form.poste} onChange={set('poste')} />
            <Field label={t('form.sections.professional.experience')} value={form.annees_exp} onChange={set('annees_exp')} />
            <Field label={t('form.sections.professional.sector')} value={form.secteur} onChange={set('secteur')} />
          </Grid2>
          <Field label={t('form.sections.professional.summary')} value={form.resume_parcours} onChange={set('resume_parcours')} multiline height={72} />
        </Section>

        {/* Section 3 — Objectifs */}
        <Section title={t('form.sections.objectives.title')} number="03">
          <Field
            label={t('form.sections.objectives.why', { title: formationTitle })}
            value={form.pourquoi_formation}
            onChange={set('pourquoi_formation')}
            multiline
            height={72}
          />
          <Field label={t('form.sections.objectives.results')} value={form.resultats_attendus} onChange={set('resultats_attendus')} multiline height={72} />
          <Grid2>
            <Field label={t('form.sections.objectives.format')} value={form.format_prefere} onChange={set('format_prefere')} />
            <Field label={t('form.sections.objectives.availability')} value={form.disponibilites} onChange={set('disponibilites')} />
          </Grid2>
        </Section>

        {/* Section 4 — Niveau */}
        <Section title={t('form.sections.level.title')} number="04">
          <div style={{ fontSize: '11px', color: '#374151', marginBottom: '12px' }}>
            {t('form.sections.level.intro')}
          </div>
          {t('form.sections.level.options', { returnObjects: true }).map((lvl) => (
            <div key={lvl} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <input
                type="radio"
                name="niveau"
                value={lvl}
                checked={form.niveau === lvl}
                onChange={() => setForm((prev) => ({ ...prev, niveau: lvl }))}
                style={{ width: '16px', height: '16px', accentColor: '#047857', flexShrink: 0, cursor: 'pointer' }}
              />
              <span style={{ fontSize: '12px', color: '#374151' }}>{lvl}</span>
            </div>
          ))}
        </Section>

        {/* Section 5 — Pack & Budget */}
        <Section title={t('form.sections.pack.title')} number="05">
          <div style={{ fontSize: '11px', color: '#374151', marginBottom: '14px' }}>
            {t('form.sections.pack.intro')}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            {pricingPacks.map((pack) => {
              const p = pricingParts(pack, lang)
              const packValue = `${pack.name[lang]} — ${p.amount} ${p.currency}`
              const isSelected = form.pack_choisi === packValue
              return (
                <label
                  key={pack.id}
                  className={`pack-card${isSelected ? ' selected' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    border: `1.5px solid ${isSelected ? '#047857' : '#E5E7EB'}`,
                    borderRadius: '8px',
                    padding: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="radio"
                    name="pack_choisi"
                    value={packValue}
                    checked={isSelected}
                    onChange={() => setForm((prev) => ({ ...prev, pack_choisi: packValue, budget_autre: '' }))}
                    style={{ marginTop: '2px', accentColor: '#047857', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#0F172A' }}>
                      {pack.name[lang]}
                      {pack.highlight && (
                        <span style={{ marginLeft: '6px', fontSize: '9px', backgroundColor: '#047857', color: '#FFFFFF', padding: '1px 6px', borderRadius: '999px', fontWeight: '800' }}>
                          {t('form.sections.pack.mostChosen')}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '900', color: '#047857', margin: '3px 0' }}>
                      {p.amount} <span style={{ fontSize: '11px', fontWeight: '600', color: '#6B7280' }}>{p.currency}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {pack.features.map((f) => (
                        <li key={f[lang]} style={{ fontSize: '10px', color: '#6B7280', lineHeight: '1.6' }}>
                          • {f[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </label>
              )
            })}
          </div>
          {/* Option budget personnalisé */}
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <input
              type="radio"
              name="pack_choisi"
              value="autre"
              checked={form.pack_choisi === 'autre'}
              onChange={() => setForm((prev) => ({ ...prev, pack_choisi: 'autre' }))}
              style={{ accentColor: '#047857', flexShrink: 0 }}
            />
            <span style={{ fontSize: '12px', color: '#374151' }}>{t('form.sections.pack.other')}</span>
          </label>
          {form.pack_choisi === 'autre' && (
            <Field label={t('form.sections.pack.otherPlaceholder')} value={form.budget_autre} onChange={set('budget_autre')} />
          )}
        </Section>

        {/* Section 6 — Source d'information */}
        <Section title={t('form.sections.source.title')} number="06">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
            {t('form.sections.source.options', { returnObjects: true }).map((src) => (
              <div key={src} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={form.sources.includes(src)}
                  onChange={() => toggleSource(src)}
                  style={{ width: '14px', height: '14px', accentColor: '#047857', flexShrink: 0, cursor: 'pointer' }}
                />
                <span style={{ fontSize: '11px', color: '#374151' }}>{src}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 7 — Engagement */}
        <Section title={t('form.sections.engagement.title')} number="07">
          <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.7' }}>
              {t('form.sections.engagement.text')}
            </p>
          </div>
          <Grid2>
            <Field label={t('form.sections.engagement.place')} value={form.fait_a} onChange={set('fait_a')} />
            <Field label={t('form.sections.engagement.date')} value={form.le_date} onChange={set('le_date')} type="date" />
          </Grid2>
          <Grid2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {t('form.sections.engagement.candidateSignature')}
              </label>
              <div style={{ height: '60px', borderBottom: '1.5px solid #D1D5DB' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {t('form.sections.engagement.bkSignature')}
              </label>
              <div style={{ height: '60px', borderBottom: '1.5px solid #D1D5DB' }} />
            </div>
          </Grid2>
        </Section>

        {/* Pied de page */}
        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '16px', marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '9px', color: '#6B7280' }}>
            BK-BOOST Ltd. · Goma, RD Congo · kasvinyatsi7@gmail.com · +243 990 260 711
          </span>
          <span style={{ fontSize: '9px', color: '#6B7280', fontStyle: 'italic' }}>
            {t('footer.confidential')}
          </span>
        </div>
      </div>

      <div className="no-print h-8" />
    </>
  )
}

function Section({ title, number, children }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '10px', fontWeight: '900', color: '#FFFFFF' }}>{number}</span>
        </div>
        <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  )
}

function Field({ label, value, onChange, multiline = false, height = 32, name, type = 'text' }) {
  const fieldId = `field-${name || label.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
      <label
        htmlFor={fieldId}
        style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.8px' }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={fieldId}
          name={name}
          className="form-input"
          value={value}
          onChange={onChange}
          style={{ height: `${height}px` }}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          className="form-input"
          value={value}
          onChange={onChange}
          style={{ height: `${height}px` }}
        />
      )}
    </div>
  )
}

function Grid2({ children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      {children}
    </div>
  )
}

function Select({ label, value, onChange, options, name, placeholder }) {
  const fieldId = `field-${name || label.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase()}`
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
      <label
        htmlFor={fieldId}
        style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.8px' }}
      >
        {label}
      </label>
      <select
        id={fieldId}
        name={name}
        className="form-input"
        value={value}
        onChange={onChange}
        style={{ height: '32px', cursor: 'pointer' }}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}
