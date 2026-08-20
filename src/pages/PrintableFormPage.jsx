import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { formationById } from '../data/formations'
import { pricingPacks } from '../data/pricingPacks'

// ── Configuration EmailJS ──────────────────────────────────────────
// 1. Créez un compte sur https://dashboard.emailjs.com (gratuit)
// 2. "Add New Service" → connectez votre Gmail → notez le Service ID
// 3. "Email Templates" → créez un template, notez le Template ID
// 4. "Account" → "General" → copiez votre Public Key
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
const TO_EMAIL = 'kasvinyatsi7@gmail.com'
// ──────────────────────────────────────────────────────────────────

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
  const { id } = useParams()
  const formation = formationById(id)

  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  if (!formation) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-gray-800">
        <div className="text-center">
          <p className="text-lg font-semibold">Formation introuvable.</p>
          <Link to="/formations" className="mt-4 inline-block text-blue-600 underline">
            Retour aux formations
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

  const handleSubmit = async () => {
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      alert(
        'Configuration requise :\nRemplacez YOUR_SERVICE_ID, YOUR_TEMPLATE_ID et YOUR_PUBLIC_KEY dans le fichier PrintableFormPage.jsx avec vos identifiants EmailJS.'
      )
      return
    }
    setStatus('sending')
    try {
      const packLabel = form.pack_choisi === 'autre'
        ? `Autre : ${form.budget_autre}`
        : form.pack_choisi || '—'

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: TO_EMAIL,
          formation_title: formation.title,
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
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
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
          color: #111827;
          padding: 4px 2px;
          font-family: inherit;
          resize: none;
          line-height: 1.5;
        }
        .form-input:focus { border-bottom-color: #F59E0B; }
        .pack-card { cursor: pointer; transition: all 0.15s; }
        .pack-card:hover { background: #FFFBEB; }
        .pack-card.selected { background: #FFFBEB; border-color: #F59E0B !important; }
        @media print {
          .form-input { border-bottom: 1.5px solid #D1D5DB; }
          .pack-card { break-inside: avoid; }
        }
      `}</style>

      {/* Barre de contrôle (non imprimable) */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 bg-gray-800 px-8 py-4">
        <Link to={`/formations/${id}`} className="text-sm text-gray-300 hover:text-white">
          ← Retour à la formation
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          {status === 'sent' && (
            <span className="text-sm font-medium text-green-400">
              ✓ Formulaire envoyé à {TO_EMAIL}
            </span>
          )}
          {status === 'error' && (
            <span className="text-sm font-medium text-red-400">
              ✗ Erreur d'envoi — vérifiez votre connexion et réessayez.
            </span>
          )}
          <button
            onClick={handleSubmit}
            disabled={status === 'sending' || status === 'sent'}
            className="rounded-lg bg-green-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Envoi en cours…' : status === 'sent' ? 'Envoyé ✓' : 'Envoyer par email'}
          </button>
          <button
            onClick={() => window.print()}
            className="rounded-lg bg-yellow-500 px-6 py-2.5 text-sm font-bold text-black hover:bg-yellow-400"
          >
            Imprimer / PDF
          </button>
        </div>
      </div>

      {/* Document imprimable */}
      <div
        className="print-page mx-auto my-8 max-w-[794px] border border-gray-200 bg-white shadow-2xl"
        style={{ minHeight: '1123px', padding: '48px' }}
      >
        {/* En-tête */}
        <div style={{ borderBottom: '3px solid #F59E0B', paddingBottom: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '22px', fontWeight: '900', color: '#0B0F17', letterSpacing: '-0.5px' }}>
                BK-BOOST Ltd.
              </div>
              <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Excellence in Achievement
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
        <div style={{ backgroundColor: '#0B0F17', padding: '20px 24px', borderRadius: '12px', marginBottom: '28px' }}>
          <div style={{ fontSize: '10px', color: '#F59E0B', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
            Formulaire de Candidature — Formation {formation.number}
          </div>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#F8FAFC', lineHeight: '1.3' }}>
            {formation.title}
          </div>
          <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '6px' }}>
            {formation.duration} · {formation.level} · {formation.format}
          </div>
        </div>

        {/* Section 1 — Informations personnelles */}
        <Section title="1. Informations Personnelles" number="01">
          <Grid2>
            <Field label="Nom de famille *" value={form.nom} onChange={set('nom')} />
            <Field label="Prénom(s) *" value={form.prenom} onChange={set('prenom')} />
            <Field label="Date de naissance *" value={form.date_naissance} onChange={set('date_naissance')} />
            <Field label="Nationalité *" value={form.nationalite} onChange={set('nationalite')} />
            <Field label="Téléphone principal *" value={form.telephone} onChange={set('telephone')} />
            <Field label="Adresse email *" value={form.email_candidat} onChange={set('email_candidat')} />
          </Grid2>
          <Field label="Adresse de résidence complète *" value={form.adresse} onChange={set('adresse')} multiline height={48} />
        </Section>

        {/* Section 2 — Profil professionnel */}
        <Section title="2. Profil Professionnel Actuel" number="02">
          <Grid2>
            <Field label="Organisation / Employeur actuel" value={form.organisation} onChange={set('organisation')} />
            <Field label="Poste / Titre actuel" value={form.poste} onChange={set('poste')} />
            <Field label="Années d'expérience professionnelle" value={form.annees_exp} onChange={set('annees_exp')} />
            <Field label="Secteur d'activité principal" value={form.secteur} onChange={set('secteur')} />
          </Grid2>
          <Field label="Bref résumé de votre parcours professionnel (3-5 lignes) *" value={form.resume_parcours} onChange={set('resume_parcours')} multiline height={72} />
        </Section>

        {/* Section 3 — Objectifs */}
        <Section title="3. Objectifs & Motivations" number="03">
          <Field
            label={`Pourquoi souhaitez-vous suivre "${formation.title}" ? *`}
            value={form.pourquoi_formation}
            onChange={set('pourquoi_formation')}
            multiline
            height={72}
          />
          <Field label="Quels résultats concrets attendez-vous à l'issue de cette formation ? *" value={form.resultats_attendus} onChange={set('resultats_attendus')} multiline height={72} />
          <Grid2>
            <Field label="Format préféré (En ligne / Présentiel / Hybride)" value={form.format_prefere} onChange={set('format_prefere')} />
            <Field label="Disponibilités (jours/horaires)" value={form.disponibilites} onChange={set('disponibilites')} />
          </Grid2>
        </Section>

        {/* Section 4 — Niveau */}
        <Section title="4. Niveau de Connaissance Actuel" number="04">
          <div style={{ fontSize: '11px', color: '#374151', marginBottom: '12px' }}>
            Évaluez votre niveau actuel dans les domaines liés à cette formation :
          </div>
          {['Débutant (jamais abordé ce domaine)', 'Intermédiaire (notions de base acquises)', 'Avancé (pratique professionnelle existante)'].map((lvl) => (
            <div key={lvl} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <input
                type="radio"
                name="niveau"
                value={lvl}
                checked={form.niveau === lvl}
                onChange={() => setForm((prev) => ({ ...prev, niveau: lvl }))}
                style={{ width: '16px', height: '16px', accentColor: '#F59E0B', flexShrink: 0, cursor: 'pointer' }}
              />
              <span style={{ fontSize: '12px', color: '#374151' }}>{lvl}</span>
            </div>
          ))}
        </Section>

        {/* Section 5 — Pack & Budget */}
        <Section title="5. Choix du Pack & Budget" number="05">
          <div style={{ fontSize: '11px', color: '#374151', marginBottom: '14px' }}>
            Sélectionnez le pack qui correspond à votre budget. Ce choix vous engage dans une démarche transparente —
            BK-BOOST Ltd. s'adapte à votre situation.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
            {pricingPacks.map((pack) => {
              const packValue = `${pack.name} — ${pack.price} ${pack.currency}`
              const isSelected = form.pack_choisi === packValue
              return (
                <label
                  key={pack.id}
                  className={`pack-card${isSelected ? ' selected' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    border: `1.5px solid ${isSelected ? '#F59E0B' : '#E5E7EB'}`,
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
                    style={{ marginTop: '2px', accentColor: '#F59E0B', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#0B0F17' }}>
                      {pack.name}
                      {pack.highlight && (
                        <span style={{ marginLeft: '6px', fontSize: '9px', backgroundColor: '#F59E0B', color: '#0B0F17', padding: '1px 6px', borderRadius: '999px', fontWeight: '800' }}>
                          Le plus choisi
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: '900', color: '#F59E0B', margin: '3px 0' }}>
                      {pack.price} <span style={{ fontSize: '11px', fontWeight: '600', color: '#6B7280' }}>{pack.currency}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {pack.features.map((f) => (
                        <li key={f} style={{ fontSize: '10px', color: '#6B7280', lineHeight: '1.6' }}>
                          • {f}
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
              style={{ accentColor: '#F59E0B', flexShrink: 0 }}
            />
            <span style={{ fontSize: '12px', color: '#374151' }}>Autre budget / Sur devis</span>
          </label>
          {form.pack_choisi === 'autre' && (
            <Field label="Précisez votre budget ou vos conditions" value={form.budget_autre} onChange={set('budget_autre')} />
          )}
        </Section>

        {/* Section 6 — Source d'information */}
        <Section title="6. Source d'Information" number="06">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
            {["Bouche à oreille", "LinkedIn / Réseaux sociaux", "WhatsApp", "Site web BK-BOOST", "Recommandation d'un collègue", "Autre"].map((src) => (
              <div key={src} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={form.sources.includes(src)}
                  onChange={() => toggleSource(src)}
                  style={{ width: '14px', height: '14px', accentColor: '#F59E0B', flexShrink: 0, cursor: 'pointer' }}
                />
                <span style={{ fontSize: '11px', color: '#374151' }}>{src}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 7 — Engagement */}
        <Section title="7. Engagement & Conditions" number="07">
          <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.7' }}>
              Je soussigné(e) confirme l'exactitude des informations fournies dans ce formulaire. Je m'engage à suivre
              assidûment la formation choisie et à respecter les engagements de paiement et de participation convenus
              avec BK-BOOST Ltd. Je certifie avoir pris connaissance du programme de formation et des conditions générales.
            </p>
          </div>
          <Grid2>
            <Field label="Fait à (ville) *" value={form.fait_a} onChange={set('fait_a')} />
            <Field label="Le (date) *" value={form.le_date} onChange={set('le_date')} />
          </Grid2>
          <Grid2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Signature du candidat *
              </label>
              <div style={{ height: '60px', borderBottom: '1.5px solid #D1D5DB' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Cachet / Signature BK-BOOST (réservé)
              </label>
              <div style={{ height: '60px', borderBottom: '1.5px solid #D1D5DB' }} />
            </div>
          </Grid2>
        </Section>

        {/* Pied de page */}
        <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '16px', marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '9px', color: '#9CA3AF' }}>
            BK-BOOST Ltd. · Goma, RD Congo · kasvinyatsi7@gmail.com · +243 990 260 711
          </span>
          <span style={{ fontSize: '9px', color: '#9CA3AF', fontStyle: 'italic' }}>
            Excellence in Achievement — Formulaire confidentiel
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
        <div style={{ width: '24px', height: '24px', borderRadius: '6px', backgroundColor: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '10px', fontWeight: '900', color: '#0B0F17' }}>{number}</span>
        </div>
        <h3 style={{ fontSize: '13px', fontWeight: '700', color: '#0B0F17', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  )
}

function Field({ label, value, onChange, multiline = false, height = 32 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
      <label style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
        {label}
      </label>
      {multiline ? (
        <textarea
          className="form-input"
          value={value}
          onChange={onChange}
          style={{ height: `${height}px` }}
        />
      ) : (
        <input
          type="text"
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
