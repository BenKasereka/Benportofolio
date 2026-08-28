// Pipeline Data — de la donnée brute à la décision.
// 5 phases, 5 outils/langages professionnels par phase.
// Champs textuels libres (title, description, label) portent { fr, en } :
// les composants lisent field[lang]. Les noms d'outils/langages restent
// des noms propres, non traduits.
export const dataPipeline = [
  {
    phase: '01',
    icon: 'Database',
    title: { fr: 'Collecte & Intégration', en: 'Collection & Integration' },
    description: {
      fr: 'Récupérer la donnée depuis les systèmes terrain et les bases de gestion.',
      en: 'Retrieve data from field systems and management databases.',
    },
    tools: ['UNIFIELD', 'LINK', 'SAP', 'SQL', 'Power Query'],
  },
  {
    phase: '02',
    icon: 'Filter',
    title: { fr: 'Nettoyage & Préparation', en: 'Cleaning & Preparation' },
    description: {
      fr: 'Fiabiliser, structurer et normaliser la donnée avant analyse.',
      en: 'Validate, structure and normalize data before analysis.',
    },
    tools: [{ fr: 'Excel Avancé', en: 'Advanced Excel' }, 'Python (Pandas)', 'R', 'Power Query', 'SQL'],
  },
  {
    phase: '03',
    icon: 'FlaskConical',
    title: { fr: 'Analyse Statistique', en: 'Statistical Analysis' },
    description: {
      fr: 'Modéliser, tester et faire parler la donnée.',
      en: 'Model, test and make the data speak.',
    },
    tools: ['SPSS', 'STATA', 'SAS', 'R', 'Python (SciPy)'],
  },
  {
    phase: '04',
    icon: 'PieChart',
    title: { fr: 'Visualisation', en: 'Visualization' },
    description: {
      fr: 'Traduire la donnée en tableaux de bord clairs et lisibles.',
      en: 'Translate data into clear, readable dashboards.',
    },
    tools: ['Power BI', 'DAX', { fr: 'Excel (graphiques avancés)', en: 'Excel (advanced charts)' }, 'Python (Matplotlib)', 'Tableau'],
  },
  {
    phase: '05',
    icon: 'Target',
    title: { fr: 'Interprétation & Décision', en: 'Interpretation & Decision' },
    description: {
      fr: "Transformer l'analyse en décision opérationnelle.",
      en: 'Turn the analysis into an operational decision.',
    },
    tools: [
      { fr: 'Rapports dynamiques Power BI', en: 'Dynamic Power BI reports' },
      { fr: 'Tableaux de bord KPI', en: 'KPI dashboards' },
      'Data Storytelling',
      'Jupyter Notebooks',
      'LMIS',
    ],
  },
]

export const dataStats = [
  { value: '20+', label: { fr: 'outils & langages data maîtrisés', en: 'data tools & languages mastered' } },
  {
    value: '5',
    label: { fr: 'phases de pipeline, de la donnée à la décision', en: 'pipeline phases, from data to decision' },
  },
  { value: 'Power BI', label: { fr: '/ Python / R / SQL', en: '/ Python / R / SQL' } },
]
