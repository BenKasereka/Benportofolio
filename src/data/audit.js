// Pôle Audit Interne & Contrôles — issu de l'expérience ACTED et de la
// structure réelle du Manuel Financier de Terrain (UDC).
// Chaque champ textuel porte { fr, en } : les composants lisent field[lang].
export const auditCapabilities = [
  {
    id: 'controles-internes',
    icon: 'ShieldCheck',
    title: { fr: 'Contrôles Internes', en: 'Internal Controls' },
    description: {
      fr: 'Séparation des tâches, matrices d’autorisation, lettres d’autorisation et de révocation.',
      en: 'Segregation of duties, authorization matrices, authorization and revocation letters.',
    },
    points: [
      {
        fr: 'Séparation des tâches et matrice de responsabilités',
        en: 'Segregation of duties and responsibility matrix',
      },
      {
        fr: "Lettres d'autorisation et de révocation",
        en: 'Authorization and revocation letters',
      },
      {
        fr: "Politique anti-corruption et vérification d'inéligibilité",
        en: 'Anti-corruption policy and ineligibility screening',
      },
    ],
  },
  {
    id: 'tresorerie-operations-bancaires',
    icon: 'Landmark',
    title: { fr: 'Trésorerie & Opérations Bancaires', en: 'Treasury & Banking Operations' },
    description: {
      fr: 'Politiques de caisse, comptes bancaires, signataires, rapprochements mensuels.',
      en: 'Cash policies, bank accounts, signatories, monthly reconciliations.',
    },
    points: [
      {
        fr: 'Politiques de caisse et gestion des coffres-forts',
        en: 'Cash policies and safe management',
      },
      {
        fr: 'Ouverture de comptes et gestion des signataires',
        en: 'Account opening and signatory management',
      },
      {
        fr: 'Rapprochements bancaires mensuels',
        en: 'Monthly bank reconciliations',
      },
    ],
  },
  {
    id: 'manuels-procedures',
    icon: 'BookOpen',
    title: { fr: 'Manuels de Procédures', en: 'Procedure Manuals' },
    description: {
      fr: 'Rédaction de manuels Admin, Finances, Logistique et Supply Chain pour organisations de terrain.',
      en: 'Drafting Admin, Finance, Logistics and Supply Chain manuals for field organizations.',
    },
    points: [
      {
        fr: 'Manuel Financier de Terrain (rédigé pour UDC)',
        en: 'Field Financial Manual (drafted for UDC)',
      },
      {
        fr: 'Procédures Administration, RH et Logistique',
        en: 'Administration, HR and Logistics procedures',
      },
      {
        fr: 'Documentation prête pour audits bailleurs',
        en: 'Documentation ready for donor audits',
      },
    ],
  },
  {
    id: 'audit-conformite',
    icon: 'ClipboardCheck',
    title: { fr: 'Audit & Conformité', en: 'Audit & Compliance' },
    description: {
      fr: 'Audits internes multi-programmes, préparation aux audits externes (bailleurs, BHA).',
      en: 'Multi-program internal audits, preparation for external audits (donors, BHA).',
    },
    points: [
      {
        fr: 'Audits internes Supply Chain, Finance, RH et Programmes',
        en: 'Internal audits across Supply Chain, Finance, HR and Programs',
      },
      {
        fr: 'Dossiers d’audit externe pour bailleurs (BHA)',
        en: 'External audit files for donors (BHA)',
      },
      {
        fr: 'Plans d’action correctifs et suivi des recommandations',
        en: 'Corrective action plans and follow-up on recommendations',
      },
    ],
  },
]

export const auditStats = [
  {
    value: '87%',
    label: { fr: 'gain de conformité documentaire', en: 'documentary compliance gain' },
  },
  {
    value: '87.2%',
    label: {
      fr: 'réduction du risque de non-conformité (ACTED)',
      en: 'non-compliance risk reduction (ACTED)',
    },
  },
  {
    value: '4',
    label: { fr: 'domaines de contrôle interne', en: 'internal control domains' },
  },
]
