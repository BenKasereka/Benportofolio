// Méthodologie BK-BOOST Ltd. — programme de coaching de carrière pour
// opportunités nationales ET internationales (ONG, agences onusiennes,
// entreprises, institutions).
// Chaque champ textuel porte { fr, en } : les composants lisent field[lang].
export const methodSteps = [
  {
    step: '01',
    icon: 'Compass',
    title: { fr: 'Diagnostic de Carrière', en: 'Career Diagnostic' },
    description: {
      fr: "Analyse de votre parcours, de vos forces et des postes ciblés — que l'opportunité soit locale, nationale ou internationale.",
      en: 'Analysis of your background, your strengths and the targeted roles — whether the opportunity is local, national or international.',
    },
  },
  {
    step: '02',
    icon: 'FileEdit',
    title: { fr: 'Repositionnement CV & LinkedIn', en: 'CV & LinkedIn Repositioning' },
    description: {
      fr: 'Refonte complète au format ATS, mise en récit de vos réalisations, optimisation des mots-clés recruteurs.',
      en: 'Complete rewrite in ATS format, storytelling of your achievements, optimization of recruiter keywords.',
    },
  },
  {
    step: '03',
    icon: 'MessagesSquare',
    title: { fr: "Simulation d'Entretien", en: 'Interview Simulation' },
    description: {
      fr: "Entraînement aux questions comportementales (méthode STAR), simulations pratiques et retours détaillés.",
      en: 'Training on behavioral questions (STAR method), practical simulations and detailed feedback.',
    },
  },
  {
    step: '04',
    icon: 'Target',
    title: { fr: 'Candidature & Suivi', en: 'Application & Follow-up' },
    description: {
      fr: 'Stratégie de candidature ciblée, networking professionnel, suivi personnalisé jusqu’à la signature du contrat.',
      en: 'Targeted application strategy, professional networking, personalized follow-up until the contract is signed.',
    },
  },
]

export const skillsGained = [
  {
    icon: 'FileText',
    label: {
      fr: 'Livrable : un CV d’exception, attractif, calibré selon les exigences du secteur visé',
      en: 'Deliverable: an outstanding, compelling CV, tailored to the requirements of your target sector',
    },
  },
  {
    icon: 'Mic2',
    label: {
      fr: 'Storytelling professionnel et méthode STAR pour vos entretiens',
      en: 'Professional storytelling and the STAR method for your interviews',
    },
  },
  {
    icon: 'Globe2',
    label: {
      fr: 'Codes du recrutement national et international (ONG, ONU, entreprises)',
      en: 'The codes of national and international recruitment (NGOs, UN, companies)',
    },
  },
  {
    icon: 'HandCoins',
    label: {
      fr: "Techniques de négociation salariale et conditions d'expatriation",
      en: 'Salary negotiation techniques and expatriation terms',
    },
  },
  {
    icon: 'Network',
    label: {
      fr: 'Stratégie de networking professionnel ciblé',
      en: 'Targeted professional networking strategy',
    },
  },
  {
    icon: 'ListChecks',
    label: {
      fr: 'Préparation aux tests techniques et mises en situation',
      en: 'Preparation for technical tests and situational assessments',
    },
  },
]

// Le "hook" phare du programme — mis en avant visuellement à part.
export const flagshipBonus = {
  icon: 'KeyRound',
  eyebrow: { fr: 'Bonus exclusif', en: 'Exclusive bonus' },
  title: {
    fr: 'Mes 5 stratégies confidentielles pour décrocher un contrat à l’expatriation',
    en: 'My 5 confidential strategies for landing an expatriation contract',
  },
  description: {
    fr: "Les mêmes stratégies, étape par étape, qui m'ont personnellement permis de décrocher mon premier contrat à l'expatriation — duplicables pour décrocher le vôtre.",
    en: 'The same step-by-step strategies that personally helped me land my first expatriation contract — ready for you to replicate to land yours.',
  },
}
