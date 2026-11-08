// Module 03 — Techniques de Négociation en Profondeur
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Techniques de Négociation en Profondeur',
    hook: "Vous allez apprendre à préparer une négociation fournisseur avant même d'entrer dans la salle — pour ne plus jamais découvrir, après coup, qu'une remise de 3 % vous a coûté un délai de livraison que personne n'avait anticipé.",
  },
  {
    type: 'objectives',
    items: [
      'Distinguer une posture de négociation distributive (centrée sur le prix) d\'une posture collaborative (qui explore plusieurs dimensions), et choisir la bonne selon le contexte fournisseur.',
      "Préparer une négociation avant d'entrer en salle : définir votre BATNA (Best Alternative To a Negotiated Agreement — votre meilleure solution de repli en cas d'échec), vos points de rupture et votre marge de manœuvre sur chaque dimension négociable.",
      'Mobiliser des techniques concrètes (ancrage, silence stratégique, gestion des concessions) pour mener une discussion structurée plutôt que subie.',
      'Adapter votre stratégie face à un fournisseur en position de force — marché de niche, fournisseur unique en zone isolée — sans se limiter au seul levier du prix.',
      'Clôturer une négociation par un accord formalisé et traçable, transmis au dossier d\'achat dans les règles.',
    ],
  },
  {
    type: 'concept',
    title: 'Négocier n\'est pas marchander',
    body: [
      "Sur le terrain humanitaire, \"négocier avec un fournisseur\" se résume trop souvent à demander une remise sur le prix affiché, puis à accepter ou refuser la réponse. C'est un réflexe, pas une négociation. Une négociation structurée porte sur plusieurs dimensions à la fois — prix, délai, conditions de paiement, volume, garanties — et se prépare avant d'être menée.",
      "La négociation est une compétence qui se travaille, pas un talent inné. Elle repose sur trois piliers : une posture choisie consciemment, une préparation documentée, et des techniques concrètes appliquées en situation.",
    ],
    highlight: "Un SCM qui entre en salle sans préparation ne négocie pas : il subit la proposition du fournisseur, qui connaît généralement mieux son marché et ses marges que l'acheteur ne connaît sa propre position.",
  },
  {
    type: 'comparison-table',
    title: 'Deux postures, deux logiques',
    columns: ['Posture', 'Principe', "Quand l'utiliser"],
    rows: [
      ['Distributive', "Jeu à somme nulle centré sur le prix : ce que l'une des parties gagne, l'autre le perd.", 'Achat ponctuel, sans lendemain — pas de relation à construire (ex. équipement spécialisé importé pour une intervention unique).'],
      ['Collaborative (intégrative)', 'Explore plusieurs dimensions (délais, volumes futurs, conditions de paiement) pour créer de la valeur commune.', 'Relation fournisseur récurrente et stratégique — un grossiste local ou un transporteur du dernier kilomètre.'],
    ],
  },
  {
    type: 'concept',
    title: 'Presser un fournisseur récurrent a un coût caché',
    body: "Presser un fournisseur au maximum sur chaque commande érode la relation, dégrade la qualité de service dans la durée, et le pousse à chercher ses marges ailleurs (qualité, délais) là où vous ne le voyez pas immédiatement. Sur une relation récurrente, la collaboration paie sur la durée, même si elle paraît moins efficace transaction par transaction.",
    highlight: "La posture n'est pas une question de personnalité de négociateur : c'est un choix stratégique fait avant d'entrer en salle, selon la nature de la relation fournisseur — ponctuelle ou récurrente — jamais selon l'humeur du jour.",
  },
  {
    type: 'concept',
    title: "Se préparer avant d'entrer en salle : BATNA, points de rupture, marge de manœuvre",
    body: [
      "La BATNA est l'option sur laquelle vous vous repliez si la négociation échoue : un autre fournisseur qualifié, un délai supplémentaire acceptable, une solution alternative. Plus votre BATNA est solide, plus votre position de négociation est forte, même si vous ne la révélez jamais explicitement au fournisseur.",
      'Les points de rupture sont les limites au-delà desquelles vous vous retirez plutôt que d\'accepter un accord dégradé — un prix plafond, un délai maximal tolérable. Ils doivent être fixés avant la négociation, pas décidés sous la pression d\'une discussion en cours.',
      "La marge de manœuvre réelle est l'écart entre votre position d'ouverture et votre point de rupture, évaluée sur chaque dimension négociable — pas seulement le prix.",
    ],
    highlight: "Sans BATNA claire, vous négociez depuis une position de faiblesse sans même le savoir — vous ne pouvez pas évaluer si l'offre du fournisseur est réellement bonne.",
  },
  {
    type: 'concept',
    title: 'Négocier face à un fournisseur en position de force',
    body: "Le contexte humanitaire de terrain produit régulièrement un rapport de force défavorable à l'acheteur : marché de niche, fournisseur unique en zone isolée, urgence opérationnelle. Le fournisseur le sait, et une posture centrée sur le prix échoue presque systématiquement — il n'a aucune raison de baisser son prix face à un acheteur sans alternative crédible. La réponse n'est pas d'abandonner la négociation, mais de déplacer son terrain vers d'autres dimensions.",
    highlight: 'Quand le levier prix est verrouillé, d\'autres dimensions restent négociables : délais fermes et pénalisés en cas de retard, volumes futurs garantis en échange de conditions préférentielles, conditions de paiement plus favorables, ou statut de client prioritaire pour vos prochains besoins.',
  },
  {
    type: 'process',
    title: 'Trois techniques concrètes à appliquer en négociation',
    steps: [
      { title: "L'ancrage", body: "La partie qui propose le premier chiffre cadre psychologiquement toute la suite de la discussion. Si vous ouvrez, proposez un chiffre proche de votre résultat idéal, pas de votre point de rupture." },
      { title: 'Le silence stratégique', body: "Après avoir formulé une offre ou une contre-offre, ne comblez jamais le silence qui suit — c'est souvent l'autre partie qui, mal à l'aise, fait la prochaine concession." },
      { title: 'La gestion des concessions', body: "Ne cédez jamais sans contrepartie explicite : \"si je fais X, qu'obtenez-vous en retour ?\" — sinon le fournisseur apprend que céder sans contrepartie fonctionne, et le refera systématiquement." },
    ],
  },
  {
    type: 'process',
    title: 'Préparer et mener une négociation fournisseur, étape par étape',
    steps: [
      { title: 'Définir l\'objet et évaluer le rapport de force', body: "Clarifier en une phrase l'objet exact (achat, volume, échéance) et évaluer si vous êtes en position de force, équilibrée ou de faiblesse — cela détermine la posture à adopter." },
      { title: 'Construire sa BATNA, ses objectifs et ses points de rupture', body: "Pour chaque dimension négociable (prix, délai, paiement, volume), noter le résultat idéal, le résultat acceptable et le point de rupture." },
      { title: "Préparer ses concessions et ses questions d'ouverture", body: "Lister ce qui peut être cédé et à quelle contrepartie, ce qui ne sera jamais cédé, et deux ou trois questions à poser en premier pour mieux comprendre la position du fournisseur." },
      { title: 'Clôturer et sécuriser l\'accord avec un PV', body: "Consigner immédiatement les points négociés, l'accord final et les concessions accordées de part et d'autre ; faire signer avant la fin de la rencontre." },
      { title: "Transmettre l'accord au dossier d'achat", body: 'Le PV signé devient la référence en cas d\'écart entre les conditions facturées et celles négociées.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'BATNA', definition: 'Best Alternative To a Negotiated Agreement — la meilleure alternative disponible si la négociation en cours échoue, le socle de toute position de négociation solide.' },
      { term: 'Posture distributive', definition: 'Négociation centrée sur le prix, à somme nulle, adaptée aux relations ponctuelles sans enjeu de durée.' },
      { term: 'Posture collaborative (intégrative)', definition: 'Négociation qui explore plusieurs dimensions pour créer de la valeur commune, adaptée aux relations fournisseurs récurrentes et stratégiques.' },
      { term: 'Point de rupture', definition: "La limite fixée avant la négociation, au-delà de laquelle on se retire plutôt que d'accepter un accord dégradé." },
      { term: 'Ancrage', definition: 'Effet de cadrage produit par la première proposition chiffrée formulée dans une négociation.' },
      { term: 'PV de négociation', definition: "Document qui formalise les points négociés, les concessions obtenues et l'accord final — voir le Module 02 pour ce que cette traçabilité impose en matière de conformité et d'audit." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas pratique — Bâches plastiques avant la saison des pluies, zone isolée',
    scenario: "Un programme abris pour une population déplacée manque de bâches plastiques à trois semaines du début de la saison des pluies. Un seul fournisseur dispose d'un stock disponible dans un délai compatible — les autres sont trop éloignés ou en rupture. Ce fournisseur, déjà sollicité par une autre organisation, n'a aucune pression pour baisser son prix, affiché 22 % au-dessus de la saison précédente. Le mandat de la coordination est clair : sécuriser la livraison est la priorité absolue, le budget a une marge limitée mais non nulle, et la négociation doit être formalisée avant validation.",
    steps: [
      'Documenter une BATNA réaliste même limitée (matériau de substitution, délai légèrement dégradé accepté par le programme).',
      'Fixer des objectifs sur au moins 3 dimensions : prix, délai, conditions de paiement.',
      'Identifier au moins deux concessions possibles avec leur contrepartie, cohérentes avec un rapport de force défavorable.',
      'Formaliser le résultat dans un PV avant validation de la commande.',
    ],
  },
  {
    type: 'exercise',
    title: 'Grille de préparation et PV de négociation',
    instructions: "Remplissez grille-preparation-negociation-batna.xlsx pour le cas des bâches plastiques : une BATNA réaliste, des objectifs sur au moins 3 dimensions, et au moins deux concessions possibles avec leur contrepartie. Rédigez ensuite le PV avec trame-pv-negociation.docx, en simulant un résultat plausible : le fournisseur maintient l'essentiel de son prix, mais vous obtenez, en échange d'un engagement de volume sur la prochaine saison, un délai de livraison garanti avec pénalité et des conditions de paiement échelonnées.",
    deliverable: 'Les deux fichiers complétés, avec une grille qui reflète explicitement le rapport de force défavorable identifié dans le contexte.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (négociation)',
    items: [
      'Entrer en salle sans BATNA documentée — même une BATNA faible, honnêtement documentée, vaut mieux qu\'aucune BATNA.',
      'Insister sur le prix face à un fournisseur structurellement en position de force, en ignorant les autres dimensions négociables (délai, volume, paiement).',
      'Céder une concession sans contrepartie — le fournisseur apprend que céder sans contrepartie fonctionne, et l\'exploitera à la négociation suivante.',
      'Combler le silence après une offre, par inconfort, ce qui revient souvent à faire une concession supplémentaire non nécessaire.',
      "Quitter la salle sur un accord verbal non formalisé, qui se reformule différemment selon qui s'en souvient.",
    ],
  },
  {
    type: 'recap',
    items: [
      'Je sais distinguer une posture distributive d\'une posture collaborative et justifier laquelle utiliser selon la relation fournisseur.',
      'Je sais définir ma BATNA, mes objectifs et mes points de rupture sur plusieurs dimensions avant d\'entrer en négociation.',
      "Je sais appliquer l'ancrage, le silence stratégique et la gestion des concessions en situation réelle.",
      'Je sais adapter ma stratégie face à un fournisseur en position de force, en déplaçant la négociation vers d\'autres leviers que le prix.',
      "J'ai rédigé un PV de négociation complet, prêt à être transmis au dossier d'achat.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 04 — Gestion des Fournisseurs & Conformité.',
  },
]
