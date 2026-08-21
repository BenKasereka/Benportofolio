// Packs BK-BOOST Ltd. — repris tels quels du flyer officiel "Offre de formation".
export const pricingPacks = [
  {
    id: 'essentiel',
    name: 'Pack Essentiel',
    price: '30',
    originalPrice: '60',
    currency: 'USD',
    features: ["2 séances d'orientation professionnelle", 'Correction complète et optimisation du CV'],
    highlight: false,
  },
  {
    id: 'plus',
    name: 'Pack Plus',
    price: '50',
    originalPrice: '100',
    currency: 'USD',
    features: ['Tout le Pack Essentiel', "Préparation à 2 tests d'embauche", 'Bonus : accompagnement sur 3 mois'],
    highlight: false,
  },
  {
    id: 'premium',
    name: 'Pack Premium',
    price: '100',
    originalPrice: '200',
    currency: 'USD',
    features: ['Tout le Pack Essentiel', 'Accompagnement personnalisé sur 4 mois'],
    highlight: true,
  },
  {
    id: 'ultimate',
    name: 'Pack Ultimate',
    price: '300',
    originalPrice: '600',
    currency: 'USD',
    features: ['Tout le Pack Plus', 'Bonus : accompagnement personnalisé sur 6 mois', 'Astuces personnalisées et cachées pour devenir Expatrié'],
    highlight: false,
  },
]
