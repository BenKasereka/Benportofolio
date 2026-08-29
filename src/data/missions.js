// Chronologie des missions terrain — ordre chronologique inverse (la plus
// récente en premier), dates et réalisations reprises fidèlement du CV.
// Chaque champ textuel porte { fr, en } : les composants lisent field[lang].
export const missions = [
  {
    id: 'tine-tchad',
    icon: 'Users',
    country: { fr: 'Tchad', en: 'Chad' },
    mission: { fr: 'MSF-OCB — Tine & Ourécassoni', en: 'MSF-OCB — Tine & Ourécassoni' },
    role: { fr: 'Emergency Project’s Supply Chain Manager', en: 'Emergency Project’s Supply Chain Manager' },
    period: { fr: 'Avril 2026 — Présent', en: 'April 2026 — Present' },
    context: { fr: 'Urgence Réfugiés', en: 'Refugee Emergency' },
    impact: { fr: '94% de conformité audit & traçabilité', en: '94% audit compliance & traceability' },
    highlights: [
      {
        fr: 'Opérationnalisation des plans de préparation aux urgences lors des déplacements de réfugiés et blessés de guerre',
        en: 'Operationalized emergency preparedness plans during refugee displacements and war-wounded influxes',
      },
      {
        fr: 'Gestion des POs et archives garantissant 94% de conformité audit et traçabilité',
        en: 'Managed POs and archiving, securing 94% audit compliance and traceability',
      },
      {
        fr: 'Reporting KPI et optimisation des processus, contribuant à 85% de réduction des délais',
        en: 'KPI reporting and process optimization, contributing to an 85% reduction in lead times',
      },
    ],
  },
  {
    id: 'renk-soudan-sud',
    icon: 'HeartPulse',
    country: { fr: 'Soudan du Sud', en: 'South Sudan' },
    mission: { fr: 'MSF-OCB — Renk', en: 'MSF-OCB — Renk' },
    role: { fr: 'Project’s Supply Chain Manager', en: 'Project’s Supply Chain Manager' },
    period: { fr: 'Août 2025 — Mars 2026', en: 'August 2025 — March 2026' },
    context: { fr: 'Urgence Réfugiés & Blessés de guerre', en: 'Refugee & War-Wounded Emergency' },
    impact: { fr: 'Coordination logistique multi-sites', en: 'Multi-site logistics coordination' },
    highlights: [
      {
        fr: "Déploiement de stratégies de chaîne d'approvisionnement d'urgence en zone de conflit actif",
        en: 'Deployed emergency supply chain strategies in an active conflict zone',
      },
      {
        fr: 'Analyse des tableaux de bord logistiques et KPIs, reporting direct à SupplyCo et au Field Coordinator',
        en: 'Analyzed logistics dashboards and KPIs, reporting directly to SupplyCo and the Field Coordinator',
      },
    ],
  },
  {
    id: 'port-a-piment-haiti',
    icon: 'Package',
    country: { fr: 'Haïti', en: 'Haiti' },
    mission: { fr: 'MSF-OCB — Port-à-Piment', en: 'MSF-OCB — Port-à-Piment' },
    role: { fr: 'Project’s Supply Chain Manager', en: 'Project’s Supply Chain Manager' },
    period: { fr: 'Février — Juillet 2025', en: 'February — July 2025' },
    context: { fr: 'Urgence Turgo & Carrefour', en: 'Turgo & Carrefour Emergency' },
    impact: { fr: 'Fermeture de projet sécurisée', en: 'Secure project closure' },
    highlights: [
      {
        fr: 'Pilotage du cycle achats, transport international et douanes (RFQ/RFP, dédouanement import/export)',
        en: 'Led the procurement cycle, international transport and customs (RFQ/RFP, import/export clearance)',
      },
      {
        fr: 'Fermeture sécurisée des projets Turgo et Carrefour avec transfert complet des responsabilités',
        en: 'Secured the closure of the Turgo and Carrefour projects with a full handover of responsibilities',
      },
    ],
  },
  {
    id: 'abakaliki-nigeria',
    icon: 'Syringe',
    country: { fr: 'Nigeria', en: 'Nigeria' },
    mission: { fr: 'MSF-OCB — Abakaliki', en: 'MSF-OCB — Abakaliki' },
    role: { fr: 'Project’s Logistics and Supply Chain Manager', en: 'Project’s Logistics and Supply Chain Manager' },
    period: { fr: 'Mars — Décembre 2024', en: 'March — December 2024' },
    context: { fr: 'Urgence Fièvre de Lassa', en: 'Lassa Fever Emergency' },
    impact: {
      fr: "Chaîne du froid et stocks médicaux sécurisés durant l'épidémie",
      en: 'Cold chain and medical stock secured through the outbreak',
    },
    highlights: [
      {
        fr: "Supervision de l'entrepôt, de la chaîne du froid et des stocks médicaux critiques durant l'épidémie de Fièvre de Lassa",
        en: 'Oversaw the warehouse, cold chain and critical medical stock during the Lassa Fever outbreak',
      },
      {
        fr: "Amélioration du taux de conformité documentaire à 87% lors des audits internes",
        en: 'Improved the documentary compliance rate to 87% across internal audits',
      },
      {
        fr: 'Conception du plan de clôture du projet Fièvre de Lassa et supervision rigoureuse de son application',
        en: "Designed the Lassa Fever project's closure plan and rigorously oversaw its implementation",
      },
      {
        fr: "Conception du plan d'intervention d'urgence Choléra à Izziogo (Nigeria)",
        en: 'Designed the Cholera emergency response plan in Izziogo, Nigeria',
      },
      {
        fr: 'Stratégie et plan de sortie Log & Supply Chain du projet Fièvre de Lassa déployés avec succès',
        en: 'Log & Supply Chain exit strategy and plan for the Lassa Fever project successfully deployed',
      },
      {
        fr: 'Achats et stocks médicaux et non médicaux sécurisés avec succès',
        en: 'Medical and non-medical procurement and stock successfully secured',
      },
    ],
  },
  {
    id: 'acted-nord-equateur',
    icon: 'ClipboardCheck',
    country: { fr: 'RD Congo', en: 'DR Congo' },
    mission: { fr: 'ACTED — Audit, Transparency & Compliance', en: 'ACTED — Audit, Transparency & Compliance' },
    role: { fr: 'Area Manager', en: 'Area Manager' },
    period: { fr: 'Juin 2023 — Février 2024', en: 'June 2023 — February 2024' },
    context: { fr: 'Audit interne multi-programmes', en: 'Multi-program internal audit' },
    impact: {
      fr: '87.2% de réduction du risque de non-conformité',
      en: '87.2% reduction in non-compliance risk',
    },
    highlights: [
      {
        fr: 'Audits internes transverses Supply Chain, Finance, RH et Programmes, incluant la préparation des dossiers pour le bailleur BHA (programmes FLZ, EKU — Nord Équateur)',
        en: 'Cross-functional internal audits across Supply Chain, Finance, HR and Programs, including donor file preparation for BHA (FLZ, EKU programs — North Équateur)',
      },
      {
        fr: 'Réduction du risque de non-conformité de 87.2% en 3 mois',
        en: 'Reduced non-compliance risk by 87.2% in 3 months',
      },
    ],
  },
  {
    id: 'goma-rdc',
    icon: 'Users',
    country: { fr: 'RD Congo', en: 'DR Congo' },
    mission: { fr: 'ACF — Goma', en: 'ACF — Goma' },
    role: { fr: 'Logistics and Supply Chain Manager', en: 'Logistics and Supply Chain Manager' },
    period: { fr: 'Novembre 2022 — Juin 2023', en: 'November 2022 — June 2023' },
    context: { fr: 'Intervention d’urgence Réfugiés', en: 'Refugee Emergency Response' },
    impact: { fr: 'Chaîne d’approvisionnement stabilisée', en: 'Stabilized supply chain' },
    highlights: [
      {
        fr: "Direction des opérations d'urgence supply chain et distribution massive en intervention camp de réfugiés",
        en: 'Directed emergency supply chain operations and mass distribution during a refugee camp intervention',
      },
      {
        fr: 'Procédures d’achat simplifiées et gestion de contrats avancée (RFQ/RFP) pour un sourcing rapide et transparent',
        en: 'Streamlined procurement procedures and advanced contract management (RFQ/RFP) for fast, transparent sourcing',
      },
    ],
  },
  {
    id: 'bukavu-rdc',
    icon: 'Syringe',
    country: { fr: 'RD Congo', en: 'DR Congo' },
    mission: { fr: 'Mercy Corps — Bukavu', en: 'Mercy Corps — Bukavu' },
    role: { fr: 'Procurement Officer', en: 'Procurement Officer' },
    period: { fr: 'Juillet 2021 — Novembre 2022', en: 'July 2021 — November 2022' },
    context: { fr: 'Riposte Épidémie Ebola', en: 'Ebola Outbreak Response' },
    impact: { fr: 'Approvisionnement médical sécurisé', en: 'Secured medical supply' },
    highlights: [
      {
        fr: 'Mutualisation des ressources logistiques et contrôle des stocks pour prévenir les ruptures de produits périssables',
        en: 'Pooled logistics resources and stock control to prevent stockouts of perishable goods',
      },
      {
        fr: 'Renforcement des mécanismes anti-fraude en environnement à haut risque',
        en: 'Strengthened anti-fraud mechanisms in a high-risk environment',
      },
    ],
  },
  {
    id: 'butembo-rdc',
    icon: 'Syringe',
    country: { fr: 'RD Congo', en: 'DR Congo' },
    mission: { fr: 'International Medical Corps — Butembo', en: 'International Medical Corps — Butembo' },
    role: { fr: 'Procurement Officer', en: 'Procurement Officer' },
    period: { fr: 'Septembre 2019 — Avril 2020', en: 'September 2019 — April 2020' },
    context: { fr: 'Riposte Épidémie Ebola', en: 'Ebola Outbreak Response' },
    impact: { fr: 'Achats critiques sous haute pression', en: 'Critical procurement under high pressure' },
    highlights: [
      {
        fr: 'Sourcing médical critique et transparent sous haute pression pendant la riposte Ebola',
        en: 'Critical, transparent medical sourcing under high pressure during the Ebola response',
      },
      {
        fr: 'Coaching et montée en compétence des équipes logistiques nationales',
        en: 'Coached and upskilled national logistics teams',
      },
    ],
  },
]
