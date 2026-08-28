// Les 5 pôles d'expertise de Benjamin KASEREKA VINYATSI.
// Contenu ancré sur le CV, le Manuel Financier UDC et le flyer BK-BOOST.
// Chaque champ textuel porte { fr, en } : les composants lisent field[lang].
export const services = [
  {
    id: 'humanitarian-supply-chain',
    number: '01',
    icon: 'Truck',
    title: {
      fr: 'Humanitarian Supply Chain & Logistics',
      en: 'Humanitarian Supply Chain & Logistics',
    },
    subtitle: {
      fr: 'Senior Emergency Supply Expert',
      en: 'Senior Emergency Supply Expert',
    },
    description: {
      fr: "Pilotage de chaînes d'approvisionnement d'urgence pour MSF, ACF, ACTED et Mercy Corps sur des terrains à haute volatilité : Tchad, Soudan du Sud, Haïti, Nigeria, RDC. Conception de stratégies logistiques agiles, gestion cold chain et conformité GDP/GSP.",
      en: 'Leading emergency supply chains for MSF, ACF, ACTED and Mercy Corps in high-volatility settings: Chad, South Sudan, Haiti, Nigeria, DR Congo. Designing agile logistics strategies, cold chain management and GDP/GSP compliance.',
    },
    highlights: [
      {
        fr: 'Préparation aux urgences et déploiement rapide sur crises réfugiés',
        en: 'Emergency preparedness and rapid deployment for refugee crises',
      },
      {
        fr: 'Cycle achats complet : RFQ, RFP, ITB, gestion des POs et conformité CPC',
        en: 'Full procurement cycle: RFQ, RFP, ITB, PO management and CPC compliance',
      },
      {
        fr: 'Supervision entrepôt, chaîne du froid et stocks médicaux critiques',
        en: 'Oversight of warehousing, cold chain and critical medical stock',
      },
      {
        fr: 'Coaching et montée en compétence des équipes logistiques nationales',
        en: 'Coaching and upskilling national logistics teams',
      },
    ],
    metrics: [
      { value: '7+', label: { fr: 'ans en Supply Chain terrain', en: 'years in field Supply Chain' } },
      { value: '85%', label: { fr: 'de réduction des délais', en: 'reduction in lead times' } },
      { value: '5', label: { fr: 'pays d’intervention', en: 'countries of operation' } },
    ],
    tags: [
      { fr: 'MSF-OCB', en: 'MSF-OCB' },
      { fr: 'Cold Chain', en: 'Cold Chain' },
      { fr: 'RFQ / RFP / ITB', en: 'RFQ / RFP / ITB' },
      { fr: 'UNIFIELD & SAP', en: 'UNIFIELD & SAP' },
    ],
    anchor: '#supply-chain',
  },
  {
    id: 'bk-boost',
    number: '02',
    icon: 'Rocket',
    title: {
      fr: 'BK-BOOST Ltd.',
      en: 'BK-BOOST Ltd.',
    },
    subtitle: {
      fr: 'Career Coaching & Recruitment Accelerator',
      en: 'Career Coaching & Recruitment Accelerator',
    },
    description: {
      fr: "Accompagnement expert des candidats vers des postes nationaux et internationaux : diagnostic de carrière, repositionnement CV/LinkedIn, simulations d'entretiens et stratégie de candidature. « Passez du CV ignoré au candidat recherché. »",
      en: 'Expert coaching of candidates toward national and international positions: career diagnostics, CV/LinkedIn repositioning, interview simulations and application strategy. "Go from an overlooked resume to a sought-after candidate."',
    },
    highlights: [
      {
        fr: 'Diagnostic de carrière et repositionnement CV/LinkedIn au format ATS',
        en: 'Career diagnostics and CV/LinkedIn repositioning in ATS format',
      },
      {
        fr: "Simulation d'entretiens comportementaux (méthode STAR)",
        en: 'Behavioral interview simulations (STAR method)',
      },
      {
        fr: 'Décryptage des cycles de recrutement des ONG, entreprises et agences onusiennes',
        en: 'Decoding recruitment cycles at NGOs, companies and UN agencies',
      },
      {
        fr: 'Stratégies de networking et de candidature ciblée, à l’échelle nationale comme internationale',
        en: 'Networking and targeted application strategies, both nationally and internationally',
      },
    ],
    metrics: [
      { value: '4', label: { fr: 'packs d’accompagnement', en: 'coaching packages' } },
      { value: '6', label: { fr: 'mois de suivi (Pack Ultimate)', en: 'months of follow-up (Ultimate Pack)' } },
      { value: '100%', label: { fr: 'approche pratique, terrain', en: 'hands-on, field-based approach' } },
    ],
    tags: [
      { fr: 'CV & Lettre de motivation', en: 'CV & Cover Letter' },
      { fr: 'Prep. entretiens', en: 'Interview Prep' },
      { fr: 'Coaching carrière', en: 'Career Coaching' },
    ],
    anchor: '#bk-boost',
  },
  {
    id: 'audit',
    number: '03',
    icon: 'ShieldCheck',
    title: {
      fr: 'Audit Interne & Contrôles',
      en: 'Internal Audit & Controls',
    },
    subtitle: {
      fr: 'Compliance, Contrôles & Manuels de Procédures',
      en: 'Compliance, Controls & Procedure Manuals',
    },
    description: {
      fr: "Audits internes Supply Chain, Finance, RH et programmes (ACTED / BHA) et rédaction de manuels de procédures Admin, Finances et Logistique pour organisations de terrain.",
      en: 'Internal audits across Supply Chain, Finance, HR and Programs (ACTED / BHA) and drafting of Admin, Finance and Logistics procedure manuals for field organizations.',
    },
    highlights: [
      {
        fr: 'Rédaction de manuels de procédures Admin, Finances, Logistique, Supply Chain',
        en: 'Drafting Admin, Finance, Logistics and Supply Chain procedure manuals',
      },
      {
        fr: "Contrôles internes : séparation des tâches, matrices d'autorisation",
        en: 'Internal controls: segregation of duties, authorization matrices',
      },
      {
        fr: 'Audits internes multi-programmes et dossiers pour bailleurs (BHA)',
        en: 'Multi-program internal audits and donor files (BHA)',
      },
      {
        fr: 'Plans d’action correctifs et suivi des recommandations',
        en: 'Corrective action plans and follow-up on recommendations',
      },
    ],
    metrics: [
      { value: '87%', label: { fr: 'gain de conformité', en: 'compliance gain' } },
      { value: '87.2%', label: { fr: 'réduction du risque (ACTED)', en: 'risk reduction (ACTED)' } },
      { value: '4', label: { fr: 'domaines de contrôle interne', en: 'internal control domains' } },
    ],
    tags: [
      { fr: 'Manuels de procédures', en: 'Procedure Manuals' },
      { fr: 'Contrôle interne', en: 'Internal Control' },
      { fr: 'Audit bailleurs', en: 'Donor Audit' },
    ],
    anchor: '#audit',
  },
  {
    id: 'data-analysis',
    number: '04',
    icon: 'BarChart3',
    title: {
      fr: 'Data Analysis & Business Intelligence',
      en: 'Data Analysis & Business Intelligence',
    },
    subtitle: {
      fr: 'Bases de Données, Interprétation & Aide à la Décision',
      en: 'Databases, Interpretation & Decision Support',
    },
    description: {
      fr: "Analyse de bases de données et de la data pour la prise de décision : collecte, nettoyage, modélisation et visualisation, avec les outils et langages professionnels les plus puissants du marché.",
      en: 'Database and data analysis for decision-making: collection, cleaning, modeling and visualization, using the most powerful professional tools and languages on the market.',
    },
    highlights: [
      {
        fr: 'Collecte et intégration de données terrain (ERP, bases SQL)',
        en: 'Collection and integration of field data (ERP, SQL databases)',
      },
      {
        fr: 'Nettoyage, modélisation et analyse statistique avancée',
        en: 'Cleaning, modeling and advanced statistical analysis',
      },
      {
        fr: 'Visualisation et tableaux de bord pour la prise de décision',
        en: 'Visualization and dashboards for decision-making',
      },
      {
        fr: 'Reporting KPI en temps réel pour PME et grands groupes',
        en: 'Real-time KPI reporting for SMEs and large groups',
      },
    ],
    metrics: [
      { value: '20+', label: { fr: 'outils & langages maîtrisés', en: 'tools & languages mastered' } },
      { value: '5', label: { fr: 'phases de pipeline data', en: 'data pipeline phases' } },
      { value: 'Power BI', label: { fr: '/ Python / R / SQL', en: '/ Python / R / SQL' } },
    ],
    tags: [
      { fr: 'Power BI & DAX', en: 'Power BI & DAX' },
      { fr: 'Python & R', en: 'Python & R' },
      { fr: 'SQL', en: 'SQL' },
    ],
    anchor: '#data',
  },
  {
    id: 'languages',
    number: '05',
    icon: 'Languages',
    title: {
      fr: 'Interprétation & Traduction Multilingue',
      en: 'Interpretation & Multilingual Translation',
    },
    subtitle: {
      fr: '6 langues au service du terrain',
      en: '6 languages in service of the field',
    },
    description: {
      fr: "Interprétation et traduction pour équipes multiculturelles et opérations internationales : Français, Anglais, Swahili, Kinande, Lingala, Kinyarwanda.",
      en: 'Interpretation and translation for multicultural teams and international operations: French, English, Swahili, Kinande, Lingala, Kinyarwanda.',
    },
    highlights: [
      {
        fr: "Interprétation terrain FR/EN/Swahili en contexte d'urgence",
        en: 'Field interpretation in FR/EN/Swahili in emergency contexts',
      },
      {
        fr: 'Médiation communautaire en Kinande, Lingala et Kinyarwanda',
        en: 'Community mediation in Kinande, Lingala and Kinyarwanda',
      },
      {
        fr: 'Rédaction de rapports bilingues pour bailleurs et sièges',
        en: 'Drafting bilingual reports for donors and headquarters',
      },
      {
        fr: 'Facilitation de formations pour équipes multiculturelles',
        en: 'Facilitating training sessions for multicultural teams',
      },
    ],
    metrics: [
      { value: '6', label: { fr: 'langues maîtrisées', en: 'languages mastered' } },
      { value: 'C1/C2', label: { fr: 'Français & Anglais', en: 'French & English' } },
      { value: { fr: 'Natif', en: 'Native' }, label: { fr: 'Swahili', en: 'Native Swahili' } },
    ],
    tags: [
      { fr: 'Français', en: 'French' },
      { fr: 'Anglais', en: 'English' },
      { fr: 'Swahili', en: 'Swahili' },
      { fr: 'Kinande', en: 'Kinande' },
      { fr: 'Lingala', en: 'Lingala' },
      { fr: 'Kinyarwanda', en: 'Kinyarwanda' },
    ],
    anchor: '#languages',
  },
]
