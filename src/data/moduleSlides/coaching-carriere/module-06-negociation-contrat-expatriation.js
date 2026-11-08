// Module 06 — Négociation de Contrat & Conditions d'Expatriation
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Négociation de Contrat & Conditions d'Expatriation",
    hook: "Ne signez jamais une première offre sans savoir ce qu'elle vaut vraiment. Ce dernier module vous donne les données et la méthode pour négocier salaire et conditions d'expatriation avec assurance, et pour repérer, avant de signer, les clauses qui pèsent souvent plus lourd qu'un chiffre de salaire.",
  },
  {
    type: 'objectives',
    items: [
      "Benchmarker (comparer à des données de marché vérifiables) votre valeur salariale réelle avant tout entretien de négociation, à partir des grilles ONU, ONGI (ONG internationale) et secteur privé disponibles pour votre niveau de poste.",
      'Construire une fourchette de négociation défendable, ancrée sur des données vérifiables plutôt que sur un chiffre choisi au hasard ou par gêne.',
      'Négocier salaire et avantages avec des techniques respectueuses et efficaces, sans jamais compromettre la relation avec votre futur employeur.',
      "Lire un contrat international d'expatriation au-delà du seul montant du salaire, et identifier les clauses qui ont un impact financier et pratique réel sur votre vie sur le terrain.",
      "Gérer une contre-offre ou un refus de négociation sans faire capoter une offre par ailleurs solide.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi la première offre ne se signe jamais telle quelle',
    body: [
      "La première offre transmise par un employeur n'est presque jamais son offre maximale : elle est calibrée pour laisser une marge de négociation, parce que le recruteur sait que la négociation fait partie du processus normal.",
      "C'est l'inverse d'une croyance répandue qui se vérifie : un candidat qui négocie de façon factuelle, posée et documentée est généralement perçu comme quelqu'un qui connaît sa valeur — pas comme quelqu'un qui indispose son futur employeur.",
    ],
    highlight: "Un candidat qui avance un chiffre sans aucune donnée improvise. Un candidat qui arrive avec un benchmarking documenté négocie.",
  },
  {
    type: 'comparison-table',
    title: 'Les 3 familles de grilles de rémunération à croiser',
    columns: ['Type de grille', "Ce qu'il faut savoir"],
    rows: [
      ['Grilles ONU', "Publiques, structurées par grade (P1 à P5, D1-D2 pour la direction). Les barèmes et les indemnités d'ajustement par lieu d'affectation sont publiés par la Commission de la Fonction Publique Internationale (CFPI/ICSC) — un même grade ne vaut pas le même salaire net selon le coût de la vie local."],
      ['Grilles ONGI', "Moins uniformisées : chaque grande ONG applique en interne une grille rarement publiée en externe. Elle se reconstitue par recoupement — plateformes de partage de salaires, réseau d'anciens collègues, fourchette parfois indiquée directement dans l'annonce."],
      ['Secteur privé (comparable)', "Utile pour situer votre valeur hors secteur humanitaire, notamment en cas de bascule sectorielle — le secteur ONG applique généralement une décote assumée par rapport au privé pur."],
    ],
  },
  {
    type: 'checklist',
    title: "Ce qu'il faut vérifier dans un contrat, au-delà du salaire",
    items: [
      "Logement : fourni par l'employeur, indemnité forfaitaire, ou aucune prise en charge ?",
      "Assurance santé et évacuation médicale (medevac) : plafond de couverture, exclusions, et la famille accompagnante est-elle couverte ?",
      "R&R (Rest & Recuperation, un cycle périodique de repos hors lieu d'affectation) : fréquence exacte, destination couverte, transport réellement financé ou seulement autorisé ?",
      "Billets d'avion : billet aller à la prise de poste, billets retour, billets pour la famille accompagnante ?",
      "Indemnités de rapatriement : conditions de prise en charge du retour et d'une éventuelle indemnité de fin de mission ?",
      "Clause de préavis : durée dans les deux sens (démission ou rupture à l'initiative de l'employeur) ?",
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Benchmarking salarial', definition: 'Comparaison de votre profil et de vos prétentions à des références réelles du marché (grilles ONU, ONGI, secteur privé) avant toute négociation.' },
      { term: 'Post adjustment (ajustement de poste)', definition: 'Indemnité complémentaire au salaire de base ONU, variable selon le coût de la vie du lieu d\'affectation.' },
      { term: 'R&R (Rest & Recuperation)', definition: 'Cycle périodique de repos hors lieu d\'affectation, prévu et financé par l\'employeur dans les postes en contexte difficile ou isolé.' },
      { term: 'Medevac (évacuation médicale)', definition: "Prise en charge de l'évacuation d'urgence vers une structure de soins adaptée, en cas d'incident médical grave ne pouvant être traité sur place." },
      { term: 'Ancrage (négociation)', definition: 'Technique consistant à formuler en premier une fourchette haute mais justifiable, qui devient le point de référence du reste de la discussion.' },
    ],
  },
  {
    type: 'process',
    title: "De l'offre reçue au contrat signé",
    steps: [
      { title: 'Ne jamais répondre à chaud', body: 'Remerciez et demandez un délai de réflexion (24 à 72h) plutôt que de réagir immédiatement — un délai demandé poliment n\'est jamais perçu négativement.' },
      { title: 'Compléter le benchmarking salarial avant toute réponse', body: "Dans grille-benchmarking-salarial-negociation.xlsx, renseignez les références ONU, ONGI et privé disponibles, puis l'offre reçue : la feuille calcule l'écart avec votre fourchette cible." },
      { title: 'Construire sa fourchette et préparer ses arguments', body: 'Définissez une fourchette basse acceptable et une fourchette haute justifiable, puis un argument factuel pour chaque point à négocier (salaire, logement, R&R...).' },
      { title: "Négocier en priorisant l'écoute et l'ancrage factuel", body: "Posez d'abord une question ouverte sur la flexibilité budgétaire. Si vous devez annoncer un chiffre, ancrez-le en haut de votre fourchette et appuyez-le sur vos données de benchmarking, sans jamais formuler d'ultimatum." },
      { title: 'Lire le contrat complet avec la checklist dédiée', body: 'Une fois un accord de principe trouvé sur le salaire, parcourez checklist-lecture-contrat-expatriation.docx clause par clause avant toute signature.' },
      { title: 'Poser ses questions par écrit, obtenir une réponse écrite, puis signer', body: "Envoyez chaque question par email et demandez une réponse écrite, si possible sous forme d'avenant. Conservez ensuite une trace complète de tous les échanges de négociation." },
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — \"Négocier salaire ET conditions d'expatriation sans faire capoter l'offre\"",
    scenario: "Une offre de coordination de projet (12 mois renouvelables, coût de la vie élevé, accès aux soins limité) indique un salaire, mais aucune mention de logement, une assurance santé \"standard\" sans plafond précisé, et un R&R \"selon disponibilité budgétaire\". Le RH demande une réponse sous 48h. Le benchmarking montre un salaire dans le bas de la fourchette ONGI et un logement habituellement pris en charge pour ce type de contrat.",
    steps: [
      'Mauvaise réponse à éviter : annoncer un pourcentage d\'augmentation sans aucune justification, ou poser un ultimatum fermé sur le logement dès le premier échange.',
      "Bonne réponse : accepter le principe de l'offre, demander un délai raisonnable, et indiquer que quelques points restent à clarifier (logement, couverture santé).",
      "Une fois le délai obtenu, ancrer la discussion sur les grilles observées pour situer sa demande dans le haut de la fourchette, en la reliant à une réalisation concrète.",
      "Demander une confirmation écrite de tout ajustement obtenu (montant révisé, plafond de la couverture medevac) avant de transmettre une réponse définitive.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents à éviter',
    items: [
      "Annoncer sa prétention salariale trop tôt et trop bas, faute de benchmarking préalable — un chiffre lancé avant toute recherche est ensuite très difficile à revoir à la hausse.",
      "Accepter une offre en ne lisant que le montant du salaire — l'absence de logement ou une couverture santé insuffisante peut peser plus lourd que quelques points de pourcentage de salaire.",
      'Négocier de façon agressive ou par ultimatum, ce qui ferme une porte qu\'une question ouverte aurait pu faire avancer.',
      "Négocier uniquement à l'oral, sans jamais rien faire confirmer par écrit — un accord verbal n'a aucune valeur en cas de désaccord une fois en poste.",
      "Répondre sous pression au délai annoncé par le recruteur sans jamais demander de délai supplémentaire, alors qu'un délai se négocie presque toujours lui-même.",
    ],
  },
  {
    type: 'exercise',
    title: 'Benchmarking et lecture de contrat',
    instructions: "À partir d'une offre réelle ou plausible pour un poste que vous visez, complétez grille-benchmarking-salarial-negociation.xlsx : au moins deux références de grilles, l'offre reçue, votre fourchette basse et haute, et au moins 3 arguments factuels de négociation. Parcourez ensuite un contrat d'expatriation (le vôtre ou un contrat type) avec checklist-lecture-contrat-expatriation.docx, en notant au moins 3 questions concrètes à poser avant signature.",
    deliverable: 'La grille de benchmarking complétée avec au moins 3 points de négociation argumentés, et la checklist de lecture de contrat avec au moins 3 questions notées.',
  },
  {
    type: 'recap',
    items: [
      "J'ai complété une grille de benchmarking salarial croisant au moins deux références pour le poste visé.",
      "J'ai défini une fourchette basse acceptable et une fourchette haute justifiable, appuyées sur des données.",
      'Je sais expliquer pourquoi négocier une offre professionnellement ne dégrade pas l\'image d\'un candidat.',
      "J'ai parcouru un contrat d'expatriation complet avec la checklist dédiée, au-delà du seul montant du salaire.",
      "Je sais citer les 6 éléments d'un contrat d'expatriation à vérifier en plus du salaire (logement, santé/medevac, R&R, billets, rapatriement, préavis).",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Vous avez parcouru les 6 modules de cette formation, du positionnement stratégique jusqu'à cette négociation finale. Votre attestation de fin de formation BK-BOOST Ltd. valide ce parcours complet — et si vous suivez le Pack Ultimate, l'accompagnement continue jusqu'à la signature de votre contrat.",
  },
]
