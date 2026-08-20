// Pipeline Data — de la donnée brute à la décision.
// 5 phases, 5 outils/langages professionnels par phase.
export const dataPipeline = [
  {
    phase: '01',
    icon: 'Database',
    title: 'Collecte & Intégration',
    description: 'Récupérer la donnée depuis les systèmes terrain et les bases de gestion.',
    tools: ['UNIFIELD', 'LINK', 'SAP', 'SQL', 'Power Query'],
  },
  {
    phase: '02',
    icon: 'Filter',
    title: 'Nettoyage & Préparation',
    description: 'Fiabiliser, structurer et normaliser la donnée avant analyse.',
    tools: ['Excel Avancé', 'Python (Pandas)', 'R', 'Power Query', 'SQL'],
  },
  {
    phase: '03',
    icon: 'FlaskConical',
    title: 'Analyse Statistique',
    description: 'Modéliser, tester et faire parler la donnée.',
    tools: ['SPSS', 'STATA', 'SAS', 'R', 'Python (SciPy)'],
  },
  {
    phase: '04',
    icon: 'PieChart',
    title: 'Visualisation',
    description: 'Traduire la donnée en tableaux de bord clairs et lisibles.',
    tools: ['Power BI', 'DAX', 'Excel (graphiques avancés)', 'Python (Matplotlib)', 'Tableau'],
  },
  {
    phase: '05',
    icon: 'Target',
    title: 'Interprétation & Décision',
    description: "Transformer l'analyse en décision opérationnelle.",
    tools: ['Rapports dynamiques Power BI', 'Tableaux de bord KPI', 'Data Storytelling', 'Jupyter Notebooks', 'LMIS'],
  },
]

export const dataStats = [
  { value: '20+', label: 'outils & langages data maîtrisés' },
  { value: '5', label: 'phases de pipeline, de la donnée à la décision' },
  { value: 'Power BI', label: '/ Python / R / SQL' },
]
