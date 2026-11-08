// Module 05 — Chaîne du Froid & Produits Médicaux
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Chaîne du Froid & Produits Médicaux',
    hook: "Un vaccin qui a passé six heures à la mauvaise température peut être inutilisable sans que rien ne le montre à l'œil nu. Ce module vous apprend à lire les bons signaux et à décider correctement, même sans expert disponible sur place.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer ce que les normes GDP et GSP (les référentiels de bonnes pratiques de transport et de stockage des produits médicaux) changent concrètement dans la gestion quotidienne d'un stock sur le terrain.",
      "Identifier la plage de température de référence (2-8°C) pour la majorité des vaccins et produits biologiques, et reconnaître une excursion de température (tout écart, même bref, hors de cette plage).",
      "Décrire le rôle d'un data logger (le boîtier qui enregistre la température en continu) dans la traçabilité d'une chaîne du froid et interpréter correctement son historique.",
      "Appliquer une procédure de décision structurée face à une rupture de chaîne du froid, sans attendre un avis externe si le contexte terrain ne le permet pas.",
      "Utiliser le vocabulaire technique du secteur (VVM, excursion, GDP/GSP, chaîne du froid) dans un compte-rendu compréhensible par des non-spécialistes.",
    ],
  },
  {
    type: 'concept',
    title: 'GDP et GSP : ce que ça veut dire pour un logisticien de terrain',
    body: "GDP (Good Distribution Practices) et GSP (Good Storage Practices) sont des référentiels nés dans l'industrie pharmaceutique, pensés pour des entrepôts climatisés et des camions réfrigérés urbains. Sur le terrain humanitaire, les appliquer à la lettre est souvent impossible. Ce qui compte n'est pas de réciter le référentiel, c'est de comprendre ce qu'il protège, et de recréer ses garanties avec les moyens du bord : GSP concerne le stockage (température maîtrisée, accès restreint, séparation physique des produits), GDP concerne le mouvement (chaque transport doit préserver les mêmes conditions, avec une preuve documentée).",
    highlight: "Un vaccin qui a passé six heures à 12°C pendant le transport, même s'il termine sa route dans un réfrigérateur parfaitement calibré, peut déjà être inutilisable — et rien à l'œil nu ne le montre.",
  },
  {
    type: 'concept',
    title: 'La règle des 2-8°C, et pourquoi elle n\'est pas négociable',
    body: "La majorité des vaccins couramment utilisés en contexte humanitaire (PEV : rougeole, DTC, polio injectable) doivent être maintenus entre +2°C et +8°C, du site de production jusqu'à l'injection. En dessous de 2°C, le risque est la congélation : elle détruit de façon irréversible de nombreux vaccins, en particulier ceux à base d'aluminium, et cela de façon totalement invisible — le flacon a l'air parfaitement normal. Au-dessus de 8°C, chaque heure d'excursion réduit l'efficacité du produit sans que cela se voie non plus à l'inspection visuelle.",
    highlight: "Piège classique : placer les flacons près de la paroi arrière d'un réfrigérateur domestique \"pour qu'ils soient bien au frais\" — c'est la cause la plus fréquente de congélation accidentelle documentée sur le terrain.",
  },
  {
    type: 'concept',
    title: 'Le VVM : votre premier réflexe de vérification',
    body: "Le VVM (Vaccine Vial Monitor) est un petit indicateur circulaire imprimé sur l'étiquette de nombreux flacons de vaccins. Il change de couleur de façon irréversible et cumulative avec l'exposition à la chaleur. Tant que le carré intérieur reste plus clair que le cercle qui l'entoure, le vaccin est utilisable ; dès qu'il devient aussi foncé ou plus foncé, il ne doit plus être utilisé — quelle que soit la date de péremption imprimée sur le flacon.",
  },
  {
    type: 'concept',
    title: 'Le data logger : la donnée chiffrée qui permet une décision objective',
    body: "Le data logger (Fridge-tag, LogTag et équivalents) est un boîtier placé dans le réfrigérateur ou la glacière, qui enregistre la température en continu et conserve un historique téléchargeable : par exemple \"sorti de plage le 14 mars entre 14h et 17h, température maximale atteinte 15°C\". C'est cette donnée, et elle seule, qui permet une évaluation objective de l'impact d'une rupture — pas une impression approximative de l'agent présent ce jour-là.",
    highlight: "VVM et data logger ne remplacent jamais un jugement professionnel documenté. Un data logger qui n'a déclenché aucune alerte ne dispense pas de vérifier son historique complet : une pile faible ou un appareil mal positionné peuvent masquer une excursion pourtant bien réelle.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Chaîne du froid (cold chain)', definition: "L'ensemble ininterrompu des conditions de température maîtrisées, du fabricant jusqu'à l'administration au bénéficiaire." },
      { term: 'Excursion de température', definition: "Tout écart, même bref, en dehors de la plage de conservation prévue pour un produit donné." },
      { term: 'VVM', definition: "Vaccine Vial Monitor : indicateur visuel cumulatif d'exposition à la chaleur, imprimé directement sur le flacon." },
      { term: 'GDP / GSP', definition: "Good Distribution Practices / Good Storage Practices — référentiels de bonnes pratiques de transport et de stockage des produits médicaux." },
      { term: 'Rupture de chaîne du froid', definition: "Interruption documentée ou suspectée des conditions de température requises, qui impose une évaluation formelle avant toute décision d'utilisation." },
    ],
  },
  {
    type: 'process',
    title: 'Mettre en place et surveiller une chaîne du froid fiable sur le terrain',
    steps: [
      { title: 'Équiper chaque unité de froid d\'un data logger fonctionnel', body: "Jour 1 : au centre de l'unité, jamais contre une paroi ni près de l'évaporateur ; vérifiez la date de calibration et notez le numéro de série." },
      { title: 'Ouvrir le registre et faire deux relevés quotidiens, 7 jours sur 7', body: "Dès le Jour 1, matin et après-midi, y compris week-ends et jours fériés — un relevé manqué un dimanche compte parmi les causes les plus fréquentes de ruptures découvertes trop tard." },
      { title: 'Réagir immédiatement à tout relevé hors plage', body: "Alerte sans délai sur le groupe WhatsApp dédié, avec photo du data logger — ne pas attendre la fin de journée \"pour voir si ça se confirme\"." },
      { title: "Consulter l'historique complet du data logger", body: "Pour déterminer la durée exacte et la température minimale/maximale atteinte — des informations qui ne peuvent jamais être devinées à partir d'un seul relevé isolé." },
      { title: 'Compléter la procédure de rupture de chaîne du froid', body: "Équipement et produits concernés, durée et température exactes, action immédiate (isolement, étiquetage), décision finale motivée — à compléter même si la décision est \"produit toujours utilisable\"." },
      { title: 'Mettre à jour la synthèse mensuelle', body: "Une unité qui cumule plusieurs excursions n'est pas un hasard répété : c'est un signal à remonter sans délai pour remplacement ou réparation." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Coupure d\'électricité prolongée, centre de santé de Rutshuru, Nord-Kivu"',
    scenario: "Un vendredi soir, une coupure généralisée du réseau touche la zone ; le groupe électrogène de secours ne prend le relais que dimanche en fin de journée, faute de personnel disponible le week-end. Le relevé du samedi matin n'a pas été fait. Les relevés suivants indiquent 9°C, 11°C puis 6°C. L'historique du data logger montre une sortie de plage continue de vendredi 22h à dimanche 19h, avec un pic à 13°C. Le VVM de plusieurs flacons reste \"utilisable\", mais l'un d'eux affiche un carré presque aussi foncé que le cercle.",
    steps: [
      "Saisir dans le registre tous les relevés, y compris le relevé manquant du samedi matin à indiquer comme tel, et non laissé comme une image de normalité.",
      "Déterminer la durée réelle de la rupture à partir de l'historique complet du data logger, pas des seuls relevés ponctuels incomplets.",
      "Intégrer l'état contrasté des VVM du lot (majorité utilisable, un flacon limite) dans l'évaluation.",
      "Rédiger une décision motivée — utilisable, quarantaine ou destruction — pour l'ensemble du lot concerné, avec sa justification écrite.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Ne pas relever la température le week-end « on rattrapera lundi » — cela transforme une excursion détectable en une excursion découverte trop tard pour être précisément caractérisée.",
      "Se fier uniquement à la date de péremption et ignorer un changement de couleur du VVM — le VVM prime toujours sur la date imprimée.",
      "Stocker des produits non médicaux dans le même réfrigérateur — chaque ouverture de porte supplémentaire dégrade la stabilité thermique.",
      "Documenter une coupure de courant sans horaires précis — cela rend impossible toute évaluation objective et force une décision par excès de prudence ou de confiance.",
      "Décider seul(e), dans l'urgence, sans utiliser la procédure écrite — une décision non documentée expose l'organisation et ne peut jamais être vérifiée a posteriori.",
    ],
  },
  {
    type: 'exercise',
    title: 'Registre de suivi et procédure de rupture',
    instructions: "À partir du cas de Rutshuru, complétez registre-suivi-chaine-du-froid.xlsx avec les relevés du vendredi au lundi (y compris le relevé manquant du samedi matin) et vérifiez que l'excursion apparaît dans la synthèse mensuelle. Complétez ensuite procedure-rupture-chaine-froid.docx avec la durée réelle de la rupture issue de l'historique du data logger, la température maximale atteinte, l'état des VVM, et une décision motivée pour l'ensemble du lot.",
    deliverable: 'Les deux fichiers complétés, la procédure de rupture ne dépassant pas 2 pages.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer la différence pratique entre GDP et GSP à un collègue non spécialiste.",
      "Je connais la plage de référence 2-8°C et je sais pourquoi la congélation est aussi dangereuse qu'une chaleur excessive.",
      "Je sais lire un VVM et je sais qu'il prime sur la date de péremption imprimée.",
      "Je sais positionner correctement un data logger et vérifier sa calibration.",
      "J'ai rédigé une procédure de rupture de chaîne du froid avec une décision motivée, en moins de 2 pages.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 06 — Coordination, Autorités & Gestion des Douanes.',
  },
]
