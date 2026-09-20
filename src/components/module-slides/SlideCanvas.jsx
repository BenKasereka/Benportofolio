const ASSET_BASE = import.meta.env.BASE_URL

// Cadre visuel partagé par toutes les diapositives — même structure (bandeau
// haut avec repère de type + module, zone de contenu, pied de page avec
// marque + numéro) pour garder une identité cohérente sur les ~13 types de
// diapositives, à l'écran comme dans les exports PDF/PPTX.
export default function SlideCanvas({ kicker, moduleLabel, index, total, variant = 'default', children }) {
  const isDark = variant === 'cover' || variant === 'closing'

  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden rounded-3xl border shadow-card ${
        isDark ? 'border-transparent bg-primary-secondary text-white' : 'border-border bg-surface-white text-ink'
      }`}
    >
      <div
        className={`flex items-center justify-between border-b px-8 py-4 sm:px-16 sm:py-5 ${
          isDark ? 'border-white/15' : 'border-border/70'
        }`}
      >
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest ${
            isDark ? 'border-white/25 bg-white/10 text-white' : 'border-primary/25 bg-primary/10 text-primary-dark'
          }`}
        >
          {kicker}
        </span>
        <span className={`text-sm font-semibold uppercase tracking-widest ${isDark ? 'text-white/70' : 'text-muted'}`}>
          {moduleLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-start gap-6 overflow-y-auto px-8 py-8 sm:px-16 sm:py-12">
        {children}
      </div>

      <div
        className={`flex items-center justify-between border-t px-8 py-3.5 sm:px-16 ${
          isDark ? 'border-white/15' : 'border-border/70'
        }`}
      >
        <div className="flex items-center gap-2">
          <img src={`${ASSET_BASE}images/brand/bk-boost-logo.png`} alt="" className="h-5 w-5 rounded" />
          <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white/70' : 'text-muted'}`}>
            BK-BOOST Ltd.
          </span>
        </div>
        <span className={`text-xs font-semibold ${isDark ? 'text-white/70' : 'text-muted'}`}>
          {index}/{total}
        </span>
      </div>
    </div>
  )
}
