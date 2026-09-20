import { useRef, useState } from 'react'
import { Download, FileText, Loader2 } from 'lucide-react'
import ExportSlideStage from './ExportSlideStage'
import { buildModulePdf } from '../../lib/presentationExport/buildPdf'
import { buildModulePptx } from '../../lib/presentationExport/buildPptx'

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

// Écran de fin de module : génère et télécharge, au clic, un vrai fichier
// .pptx (pptxgenjs, à partir des données de diapositives) et un PDF
// (html2canvas + jsPDF, à partir du rendu réel via ExportSlideStage) —
// tout côté client, sans backend, compatible hébergement statique.
export default function DownloadPresentationSection({ slides, moduleTitle, formationTitle, moduleLabel, fileBaseName }) {
  const elsRef = useRef([])
  const [status, setStatus] = useState('idle') // idle | pdf | pptx
  const [error, setError] = useState(false)

  const handlePptx = async () => {
    setStatus('pptx')
    setError(false)
    try {
      const blob = await buildModulePptx({ slides, moduleTitle, formationTitle })
      downloadBlob(blob, `${fileBaseName}.pptx`)
    } catch {
      setError(true)
    } finally {
      setStatus('idle')
    }
  }

  const handlePdf = async () => {
    setStatus('pdf')
    setError(false)
    try {
      const blob = await buildModulePdf(elsRef.current.filter(Boolean))
      downloadBlob(blob, `${fileBaseName}.pdf`)
    } catch {
      setError(true)
    } finally {
      setStatus('idle')
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8 text-center">
      <h3 className="font-heading text-lg font-bold text-ink">Emportez cette présentation avec vous</h3>
      <p className="max-w-md text-sm leading-relaxed text-muted">
        Téléchargez ce module en présentation complète — pour réviser hors ligne, l'imprimer ou la partager.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={handlePptx}
          disabled={status !== 'idle'}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'pptx' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
          Télécharger en .pptx
        </button>
        <button
          type="button"
          onClick={handlePdf}
          disabled={status !== 'idle'}
          className="btn-secondary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'pdf' ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileText className="h-4 w-4" />}
          Télécharger en PDF
        </button>
      </div>
      {error && <p className="text-xs font-medium text-accent-gold-dark">Échec de la génération. Réessayez.</p>}

      <ExportSlideStage slides={slides} moduleLabel={moduleLabel} elsRef={elsRef} />
    </div>
  )
}
