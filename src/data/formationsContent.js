// Registre du contenu pédagogique réel (théorie/outils/exercices/templates)
// vivant dans public/formations-content/<id>/. Ce fichier ne duplique jamais
// le contenu marketing de formations.js — il ne fait que pointer vers les
// fichiers statiques à charger pour chaque module.
//
// Règle d'accès : le Module 01 de chaque formation est un échantillon gratuit
// complet ; les modules suivants restent en aperçu (titre/objectifs déjà
// présents dans formations.js) tant que la personne n'est pas inscrite.
export const formationsContent = {
  'logistique-humanitaire': {
    role: { fr: 'Logisticien Humanitaire Terrain' },
    modules: [
      {
        number: '01',
        slug: 'module-01-fondamentaux',
        free: true,
        templates: [
          { file: 'cartographie-acteurs-logistiques.xlsx', label: 'Cartographie des acteurs logistiques (.xlsx)' },
          { file: 'fiche-positionnement-mission-j1.docx', label: 'Fiche de positionnement de mission J+1 (.docx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-evaluation-besoins',
        free: false,
        templates: [
          { file: 'grille-evaluation-besoins-mira.xlsx', label: 'Grille d\'évaluation des besoins MIRA (.xlsx)' },
          { file: 'plan-contingence-conops-template.docx', label: 'Plan de contingence CONOPS (.docx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-gestion-flotte',
        free: false,
        templates: [
          { file: 'carnet-de-bord-vehicule.xlsx', label: 'Carnet de bord véhicule (.xlsx)' },
          { file: 'politique-utilisation-vehicules.docx', label: 'Politique d\'utilisation des véhicules (.docx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-entrepot-stocks',
        free: false,
        templates: [
          { file: 'fiche-inventaire-entrepot-fifo-fefo.xlsx', label: 'Fiche d\'inventaire entrepôt FIFO/FEFO (.xlsx)' },
          { file: 'rapport-ecarts-stock.docx', label: 'Rapport d\'écarts de stock (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-chaine-du-froid',
        free: false,
        templates: [
          { file: 'registre-suivi-chaine-du-froid.xlsx', label: 'Registre de suivi de la chaîne du froid (.xlsx)' },
          { file: 'procedure-rupture-chaine-froid.docx', label: 'Procédure de rupture de chaîne du froid (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-douanes-autorites',
        free: false,
        templates: [
          { file: 'checklist-dedouanement.xlsx', label: 'Checklist de dédouanement (.xlsx)' },
          { file: 'registre-relations-autorites.docx', label: 'Registre des relations avec les autorités (.docx)' },
        ],
      },
      {
        number: '07',
        slug: 'module-07-securite-acces',
        free: false,
        templates: [
          { file: 'grille-evaluation-risques-securite.xlsx', label: 'Grille d\'évaluation des risques sécuritaires (.xlsx)' },
          { file: 'fiche-reporting-incident.docx', label: 'Fiche de reporting d\'incident (.docx)' },
        ],
      },
      {
        number: '08',
        slug: 'module-08-si-reporting',
        free: false,
        templates: [
          { file: 'tableau-de-bord-kpi-logistique.xlsx', label: 'Tableau de bord KPI logistique (.xlsx)' },
          { file: 'gabarit-rapport-logistique-mensuel.docx', label: 'Gabarit de rapport logistique mensuel (.docx)' },
        ],
      },
    ],
  },
}

export function formationContentById(id) {
  return formationsContent[id]
}

export function moduleContentByNumber(id, number) {
  const content = formationsContent[id]
  if (!content) return null
  return content.modules.find((m) => m.number === number) || null
}
