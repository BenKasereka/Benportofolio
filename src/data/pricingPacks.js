// Packs BK-BOOST Ltd. — repris tels quels du flyer officiel "Offre de formation".
// Chaque champ textuel porte { fr, en } : les composants lisent field[lang].
export const pricingPacks = [
  {
    id: 'essentiel',
    name: { fr: 'Pack Essentiel', en: 'Essential Pack' },
    priceUsd: 60,
    currency: 'USD',
    features: [
      { fr: "2 séances d'orientation professionnelle", en: '2 career guidance sessions' },
      { fr: 'Correction complète et optimisation du CV', en: 'Full CV review and optimization' },
    ],
    highlight: false,
  },
  {
    id: 'plus',
    name: { fr: 'Pack Plus', en: 'Plus Pack' },
    priceUsd: 100,
    currency: 'USD',
    features: [
      { fr: 'Tout le Pack Essentiel', en: 'Everything in the Essential Pack' },
      { fr: "Préparation à 2 tests d'embauche", en: 'Preparation for 2 hiring tests' },
      { fr: 'Bonus : accompagnement sur 3 mois', en: 'Bonus: 3-month support' },
    ],
    highlight: false,
  },
  {
    id: 'premium',
    name: { fr: 'Pack Premium', en: 'Premium Pack' },
    priceUsd: 200,
    currency: 'USD',
    features: [
      { fr: 'Tout le Pack Essentiel', en: 'Everything in the Essential Pack' },
      { fr: 'Accompagnement personnalisé sur 4 mois', en: 'Personalized 4-month support' },
    ],
    highlight: true,
  },
  {
    id: 'ultimate',
    name: { fr: 'Pack Ultimate', en: 'Ultimate Pack' },
    priceUsd: 600,
    currency: 'USD',
    features: [
      { fr: 'Tout le Pack Plus', en: 'Everything in the Plus Pack' },
      { fr: 'Bonus : accompagnement personnalisé sur 6 mois', en: 'Bonus: personalized 6-month support' },
      {
        fr: 'Astuces personnalisées et cachées pour devenir Expatrié',
        en: 'Personalized, insider tips for becoming an Expatriate',
      },
    ],
    highlight: false,
  },
]
