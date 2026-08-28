// Les 6 langues du hero et de la section 05 doivent correspondre à cette liste
// (MAJ-05 de l'audit : Kinande et Kinyarwanda manquaient ici alors qu'ils
// étaient déjà annoncés ailleurs sur le site).
// Chaque champ textuel porte { fr, en } : les composants lisent field[lang].
export const languages = [
  { name: { fr: 'Français', en: 'French' }, level: { fr: 'C2 · Courant', en: 'C2 · Fluent' }, proficiency: 100 },
  { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'C2 · Courant', en: 'C2 · Fluent' }, proficiency: 95 },
  { name: { fr: 'Swahili', en: 'Swahili' }, level: { fr: 'Native', en: 'Native' }, proficiency: 100 },
  { name: { fr: 'Lingala', en: 'Lingala' }, level: { fr: 'Native', en: 'Native' }, proficiency: 100 },
  { name: { fr: 'Kinande', en: 'Kinande' }, level: { fr: 'Native', en: 'Native' }, proficiency: 100 },
  { name: { fr: 'Kinyarwanda', en: 'Kinyarwanda' }, level: { fr: 'Native', en: 'Native' }, proficiency: 90 },
]
