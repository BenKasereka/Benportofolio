// Pôle Audit Interne & Contrôles — issu de l'expérience ACTED et de la
// structure réelle du Manuel Financier de Terrain (UDC).
export const auditCapabilities = [
  {
    title: 'Contrôles Internes',
    description: 'Séparation des tâches, matrices d’autorisation, lettres d’autorisation et de révocation.',
    icon: 'ShieldCheck',
    points: [
      'Séparation des tâches et matrice de responsabilités',
      "Lettres d'autorisation et de révocation",
      "Politique anti-corruption et vérification d'inéligibilité",
    ],
  },
  {
    title: 'Trésorerie & Opérations Bancaires',
    description: 'Politiques de caisse, comptes bancaires, signataires, rapprochements mensuels.',
    icon: 'Landmark',
    points: [
      'Politiques de caisse et gestion des coffres-forts',
      'Ouverture de comptes et gestion des signataires',
      'Rapprochements bancaires mensuels',
    ],
  },
  {
    title: 'Manuels de Procédures',
    description: 'Rédaction de manuels Admin, Finances, Logistique et Supply Chain pour organisations de terrain.',
    icon: 'BookOpen',
    points: [
      'Manuel Financier de Terrain (rédigé pour UDC)',
      'Procédures Administration, RH et Logistique',
      'Documentation prête pour audits bailleurs',
    ],
  },
  {
    title: 'Audit & Conformité',
    description: 'Audits internes multi-programmes, préparation aux audits externes (bailleurs, BHA).',
    icon: 'ClipboardCheck',
    points: [
      'Audits internes Supply Chain, Finance, RH et Programmes',
      'Dossiers d’audit externe pour bailleurs (BHA)',
      'Plans d’action correctifs et suivi des recommandations',
    ],
  },
]

export const auditStats = [
  { value: '87%', label: 'gain de conformité documentaire' },
  { value: '87.2%', label: 'réduction du risque de non-conformité (ACTED)' },
  { value: '4', label: 'domaines de contrôle interne' },
]
