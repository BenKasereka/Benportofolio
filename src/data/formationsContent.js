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
    hasRoutine: true,
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

  'supply-chain-humanitaire': {
    role: { fr: 'Supply Chain Manager Humanitaire' },
    hasRoutine: true,
    modules: [
      {
        number: '01',
        slug: 'module-01-introduction-scm',
        free: true,
        templates: [
          { file: 'cartographie-supply-chain-acteurs.xlsx', label: 'Cartographie des acteurs supply chain (.xlsx)' },
          { file: 'note-positionnement-scm-standards-bailleurs.docx', label: 'Note de positionnement SCM & standards bailleurs (.docx)' },
        ],
      },
      {
        number: '02',
        slug: 'module-02-cycle-achats',
        free: false,
        templates: [
          { file: 'grille-rfq-comparaison-offres-cba.xlsx', label: 'Grille RFQ & analyse comparative des offres CBA (.xlsx)' },
          { file: 'pv-comite-achats-cpc.docx', label: 'Procès-verbal de comité d\'achats CPC (.docx)' },
        ],
      },
      {
        number: '03',
        slug: 'module-03-gestion-fournisseurs',
        free: false,
        templates: [
          { file: 'fiche-qualification-evaluation-fournisseur.xlsx', label: 'Fiche de qualification & évaluation fournisseur (.xlsx)' },
          { file: 'accord-cadre-framework-agreement-template.docx', label: 'Accord-cadre / Framework Agreement (.docx)' },
        ],
      },
      {
        number: '04',
        slug: 'module-04-gestion-stocks-entrepots',
        free: false,
        templates: [
          { file: 'bon-de-reception-controle-qualite.xlsx', label: 'Bon de réception & contrôle qualité (.xlsx)' },
          { file: 'rapport-reconciliation-inventaire-erp.docx', label: 'Rapport de réconciliation inventaire/ERP (.docx)' },
        ],
      },
      {
        number: '05',
        slug: 'module-05-distribution-last-mile',
        free: false,
        templates: [
          { file: 'plan-logistique-distribution-pdm.xlsx', label: 'Plan logistique de distribution & PDM (.xlsx)' },
          { file: 'registre-plaintes-feedback-communautaire.docx', label: 'Registre des plaintes & feedback communautaire (.docx)' },
        ],
      },
      {
        number: '06',
        slug: 'module-06-transport-international-douanes',
        free: false,
        templates: [
          { file: 'comparateur-fret-international-incoterms.xlsx', label: 'Comparateur fret international & Incoterms (.xlsx)' },
          { file: 'checklist-documents-expedition-internationale.docx', label: 'Checklist documents d\'expédition internationale (.docx)' },
        ],
      },
      {
        number: '07',
        slug: 'module-07-systemes-erp',
        free: false,
        templates: [
          { file: 'guide-extraction-nettoyage-power-query.xlsx', label: 'Guide d\'extraction & nettoyage Power Query (.xlsx)' },
          { file: 'gabarit-rapport-erp-mensuel.docx', label: 'Gabarit de rapport ERP mensuel (.docx)' },
        ],
      },
      {
        number: '08',
        slug: 'module-08-kpis-reporting',
        free: false,
        templates: [
          { file: 'tableau-de-bord-kpi-supply-chain.xlsx', label: 'Tableau de bord KPI supply chain (.xlsx)' },
          { file: 'gabarit-rapport-bailleur-vs-rapport-siege.docx', label: 'Gabarit rapport bailleur vs. rapport siège (.docx)' },
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
