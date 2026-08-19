// Données de démonstration (non temps réel) illustrant la lecture de marché.
export const watchlist = [
  { symbol: 'XAUUSD', name: 'Or / Dollar US', price: '2 418.62', change: '+0.84%', trend: 'up' },
  { symbol: 'EURUSD', name: 'Euro / Dollar US', price: '1.0812', change: '-0.21%', trend: 'down' },
  { symbol: 'US30', name: 'Dow Jones', price: '39 872', change: '+0.36%', trend: 'up' },
  { symbol: 'NAS100', name: 'Nasdaq 100', price: '17 940', change: '+0.52%', trend: 'up' },
]

export const methodologies = [
  { name: 'Smart Money Concepts (SMC)', detail: 'Lecture de la structure de marché et des zones de liquidité.' },
  { name: 'ICT', detail: 'Modèles Inner Circle Trader — timing et manipulation institutionnelle.' },
  { name: 'IPDA', detail: 'Interbank Price Delivery Algorithm — cycles de délivrance de prix.' },
  { name: 'TTrades Models', detail: 'Modèles de continuation et de retournement à haute probabilité.' },
]
