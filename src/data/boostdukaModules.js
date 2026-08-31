// Les 10 modules de BoostDuka — même contenu que le module Export Power BI /
// README du projet (BenKasereka/visiba-procurement-hub), reformulé pour la
// page de présentation. Chaque champ texte porte { fr, en } : les composants
// lisent field[lang], comme src/data/audit.js.
export const boostdukaModules = [
  {
    id: 'liste-prix',
    icon: 'Search',
    title: { fr: 'Liste de Prix', en: 'Price List' },
    description: {
      fr: 'Comparateur Fournisseur × Catégorie × Article × Prix, filtrable par province, export Excel.',
      en: 'Supplier × Category × Item × Price comparator, filterable by province, Excel export.',
    },
  },
  {
    id: 'base-fournisseurs',
    icon: 'Users',
    title: { fr: 'Base Fournisseurs', en: 'Supplier Directory' },
    description: {
      fr: 'Fiche complète par fournisseur : score de fiabilité, catégories couvertes, contrats-cadres.',
      en: 'Full supplier profile: reliability score, categories covered, framework agreements.',
    },
  },
  {
    id: 'demande-devis',
    icon: 'Send',
    title: { fr: 'Demande de devis (RFQ)', en: 'Request for Quotation' },
    description: {
      fr: 'Sélection des articles, adressage aux fournisseurs, modèle Excel prêt à être complété.',
      en: 'Item selection, addressed to suppliers, ready-to-fill Excel template.',
    },
  },
  {
    id: 'import-devis',
    icon: 'Upload',
    title: { fr: 'Import de devis', en: 'Quote Import' },
    description: {
      fr: 'Import Excel/CSV/PDF d’une offre fournisseur, validation ligne par ligne avant confirmation.',
      en: 'Excel/CSV/PDF import of a supplier offer, line-by-line validation before confirming.',
    },
  },
  {
    id: 'synthese-comparative',
    icon: 'SlidersHorizontal',
    title: { fr: 'Synthèse comparative', en: 'Comparative Bid Sheet' },
    description: {
      fr: 'Scoring pondéré multicritères (prix, qualité, délai, disponibilité, conditions), multi-articles.',
      en: 'Weighted multi-criteria scoring (price, quality, lead time, availability, terms), multi-item.',
    },
  },
  {
    id: 'cba',
    icon: 'ClipboardCheck',
    title: { fr: 'CBA (Bid Analysis)', en: 'CBA (Bid Analysis)' },
    description: {
      fr: 'Document d’audit imprimable généré depuis une synthèse validée — prêt à signer et archiver.',
      en: 'Printable audit document generated from a validated bid sheet — ready to sign and archive.',
    },
  },
  {
    id: 'bon-commande',
    icon: 'ShoppingCart',
    title: { fr: 'Bon de Commande (PO)', en: 'Purchase Order' },
    description: {
      fr: 'Un PO par fournisseur retenu, y compris en cas d’attribution scindée entre plusieurs offres.',
      en: 'One PO per awarded supplier, including split awards across multiple offers.',
    },
  },
  {
    id: 'dashboard-kpi',
    icon: 'LayoutDashboard',
    title: { fr: 'Dashboard KPI', en: 'KPI Dashboard' },
    description: {
      fr: '7 phases du cycle procurement, du Needs Assessment au financier, filtrable par site et période.',
      en: '7 phases of the procurement cycle, from needs assessment to finance, filterable by site and period.',
    },
  },
  {
    id: 'export-powerbi',
    icon: 'PieChart',
    title: { fr: 'Export Power BI', en: 'Power BI Export' },
    description: {
      fr: 'Tables nettoyées, modèle relationnel documenté et mesures DAX suggérées, prêtes à connecter.',
      en: 'Cleaned tables, documented relational model and suggested DAX measures, ready to connect.',
    },
  },
  {
    id: 'configuration',
    icon: 'Settings2',
    title: { fr: 'Configuration', en: 'Configuration' },
    description: {
      fr: 'Devises, catégories et catalogue d’articles entièrement paramétrables selon le contexte.',
      en: 'Currencies, categories and item catalog, fully configurable to the operating context.',
    },
  },
]
