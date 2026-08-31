// Rendu Markdown partagé entre ModuleDetailPage et toute section de contenu
// pédagogique (ex. routine professionnelle) — une seule source de vérité pour
// le style, aligné sur la charte graphique du site (tokens Tailwind).
export const markdownComponents = {
  h1: (props) => <h1 className="mt-2 font-heading text-3xl font-extrabold text-ink" {...props} />,
  h2: (props) => <h2 className="mt-10 font-heading text-2xl font-bold text-ink" {...props} />,
  h3: (props) => <h3 className="mt-8 font-heading text-lg font-bold text-ink" {...props} />,
  p: (props) => <p className="mt-4 text-justify leading-relaxed text-muted" {...props} />,
  ul: (props) => <ul className="mt-4 flex flex-col gap-2 pl-1" {...props} />,
  ol: (props) => <ol className="mt-4 flex list-decimal flex-col gap-2 pl-5 marker:font-semibold marker:text-primary" {...props} />,
  li: (props) => <li className="text-justify leading-relaxed text-muted" {...props} />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-4 border-l-4 border-accent-gold/60 bg-accent-gold/5 px-4 py-3 text-sm italic text-muted" {...props} />
  ),
  hr: () => <hr className="my-8 border-border" />,
  a: (props) => <a className="font-medium text-primary underline underline-offset-2" target="_blank" rel="noreferrer" {...props} />,
  table: (props) => (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-secondary/95 text-white" {...props} />,
  th: (props) => <th className="px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide" {...props} />,
  td: (props) => <td className="border-t border-border px-4 py-2.5 align-top text-muted" {...props} />,
  code: (props) => <code className="rounded bg-ink/5 px-1.5 py-0.5 text-[0.85em] text-ink" {...props} />,
}
