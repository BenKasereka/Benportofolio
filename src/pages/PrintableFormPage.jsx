import { useParams, Link } from 'react-router-dom'
import { formationById } from '../data/formations'

export default function PrintableFormPage() {
  const { id } = useParams()
  const formation = formationById(id)

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

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; padding: 0; }
          .print-page { box-shadow: none !important; border: none !important; }
        }
        body { background: #f3f4f6; font-family: 'Helvetica Neue', Arial, sans-serif; }
      `}</style>

      {/* Boutons no-print */}
      <div className="no-print flex items-center justify-between bg-gray-800 px-8 py-4">
        <Link to={`/formations/${id}`} className="text-sm text-gray-300 hover:text-white">
          ← Retour à la formation
        </Link>
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-yellow-500 px-6 py-2.5 text-sm font-bold text-black hover:bg-yellow-400"
        >
          Imprimer / Sauvegarder en PDF
        </button>
      </div>

      {/* Document imprimable */}
      <div className="print-page mx-auto my-8 max-w-[794px] border border-gray-200 bg-white shadow-2xl" style={{ minHeight: '1123px', padding: '48px' }}>

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

        {/* Titre du formulaire */}
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
            <Field label="Nom de famille *" />
            <Field label="Prénom(s) *" />
            <Field label="Date de naissance *" />
            <Field label="Nationalité *" />
            <Field label="Téléphone principal *" />
            <Field label="Adresse email *" />
          </Grid2>
          <Field label="Adresse de résidence complète *" height={48} />
        </Section>

        {/* Section 2 — Profil professionnel */}
        <Section title="2. Profil Professionnel Actuel" number="02">
          <Grid2>
            <Field label="Organisation / Employeur actuel" />
            <Field label="Poste / Titre actuel" />
            <Field label="Années d'expérience professionnelle" />
            <Field label="Secteur d'activité principal" />
          </Grid2>
          <Field label="Bref résumé de votre parcours professionnel (3-5 lignes) *" height={72} />
        </Section>

        {/* Section 3 — Objectifs de formation */}
        <Section title="3. Objectifs & Motivations" number="03">
          <Field label={`Pourquoi souhaitez-vous suivre la formation "${formation.title}" ? *`} height={72} />
          <Field label="Quels résultats concrets attendez-vous à l'issue de cette formation ? *" height={72} />
          <Grid2>
            <Field label="Format préféré (En ligne / Présentiel / Hybride)" />
            <Field label="Disponibilités (jours/horaires)" />
          </Grid2>
        </Section>

        {/* Section 4 — Niveau de connaissance */}
        <Section title="4. Niveau de Connaissance Actuel" number="04">
          <div style={{ fontSize: '11px', color: '#374151', marginBottom: '12px' }}>
            Évaluez votre niveau actuel dans les domaines liés à cette formation :
          </div>
          {['Débutant (jamais abordé ce domaine)', 'Intermédiaire (notions de base acquises)', 'Avancé (pratique professionnelle existante)'].map((lvl) => (
            <div key={lvl} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '16px', height: '16px', border: '2px solid #D1D5DB', borderRadius: '4px', flexShrink: 0 }} />
              <span style={{ fontSize: '12px', color: '#374151' }}>{lvl}</span>
            </div>
          ))}
        </Section>

        {/* Section 5 — Comment avez-vous connu */}
        <Section title="5. Source d'Information" number="05">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
            {['Bouche à oreille', 'LinkedIn / Réseaux sociaux', 'WhatsApp', 'Site web BK-BOOST', 'Recommandation d\'un collègue', 'Autre :'].map((src) => (
              <div key={src} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '14px', height: '14px', border: '2px solid #D1D5DB', borderRadius: '3px', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', color: '#374151' }}>{src}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 6 — Engagement */}
        <Section title="6. Engagement & Conditions" number="06">
          <div style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.7' }}>
              Je soussigné(e) confirme l'exactitude des informations fournies dans ce formulaire. Je m'engage à suivre
              assidûment la formation choisie et à respecter les engagements de paiement et de participation convenus
              avec BK-BOOST Ltd. Je certifie avoir pris connaissance du programme de formation et des conditions générales.
            </p>
          </div>
          <Grid2>
            <Field label="Fait à (ville) *" />
            <Field label="Le (date) *" />
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

function Field({ label, height = 32 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
      <label style={{ fontSize: '10px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
        {label}
      </label>
      <div style={{ height: `${height}px`, borderBottom: '1.5px solid #D1D5DB' }} />
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
