// Module 07 — Transport International & Dédouanement
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran. Style aligné sur la référence de la formation IA (module 01).
export default [
  {
    type: 'cover',
    title: 'Transport International & Dédouanement',
    hook: "La moitié des blocages douaniers vécus sur le terrain se décident des semaines plus tôt, au moment de la signature de la commande — par un Incoterm mal choisi ou un dossier documentaire monté à la hâte. Ce module vous apprend à sécuriser une expédition internationale en amont, pour que le dédouanement sur le terrain ait une vraie chance de se passer sans blocage.",
  },
  {
    type: 'objectives',
    items: [
      "Choisir un Incoterm 2020 — une règle internationale standardisée qui fixe qui, du vendeur ou de l'acheteur, porte le risque et les coûts à chaque étape — adapté à un bon de commande (Purchase Order, PO) international, selon le transfert réel de risque qu'il crée, pas son usage \"par habitude\".",
      "Expliquer, pour n'importe quel Incoterm, qui paie le transport, qui porte le risque à chaque étape, et qui doit gérer le dédouanement — import comme export.",
      "Comparer fret aérien, maritime et terrestre sur trois critères concrets : coût au kg, délai réel, et urgence de la réponse programme.",
      "Assembler un dossier documentaire d'expédition internationale complet et cohérent, prêt à être transmis à un transitaire (freight forwarder, le partenaire qui organise le transport international) ou à une équipe terrain.",
      "Repérer, avant la signature d'une commande internationale, les choix d'Incoterm ou de mode de transport qui exposent l'organisation à des risques qu'elle ne maîtrise pas localement.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que ce module couvre, et ce qu\'il ne couvre pas',
    body: "Ce module se situe en amont de la chaîne : le travail de l'acheteur ou du coordinateur logistique qui monte une commande internationale et prépare l'expédition, avant même que la marchandise ait quitté le pays d'origine — quel Incoterm signer, quel mode de fret choisir, quel dossier préparer. Le dédouanement vu du terrain (négociation avec l'agent des douanes, relation avec les autorités locales) est traité dans un autre module de cette collection, en aval de celui-ci.",
  },
  {
    type: 'concept',
    title: 'Les Incoterms : une question de "qui porte le risque, et quand"',
    body: "Les Incoterms sont souvent enseignés comme une liste de sigles à mémoriser. Sur le terrain, une seule question compte réellement pour chacun d'eux : à quel point précis de la chaîne le risque et les coûts basculent-ils du vendeur à l'acheteur ? Tout le reste — qui paie l'assurance, qui gère le dédouanement export, qui gère le dédouanement import — en découle directement.",
    highlight: "Plus l'Incoterm est situé à gauche du tableau suivant (EXW), plus vous portez de responsabilités dès le pays d'origine. Plus il est à droite (DDP), plus le fournisseur les porte — mais il ne connaît quasiment jamais les spécificités du dédouanement humanitaire de votre pays de destination.",
  },
  {
    type: 'comparison-table',
    title: 'Incoterms 2020 — qui porte le risque, qui dédouane',
    columns: ['Incoterm', 'Point de transfert du risque', 'Dédouanement export', 'Dédouanement import'],
    rows: [
      ['EXW (Ex Works)', "Dès la sortie de l'entrepôt du fournisseur", 'Acheteur', 'Acheteur'],
      ['FCA (Free Carrier)', 'Remise au transporteur désigné par l\'acheteur', 'Vendeur', 'Acheteur'],
      ['FOB (Free On Board, maritime)', 'Chargement à bord du navire au port d\'embarquement', 'Vendeur', 'Acheteur'],
      ['CFR (Cost and Freight, maritime)', 'Identique à FOB, vendeur paie le fret jusqu\'au port de destination', 'Vendeur', 'Acheteur'],
      ['CIF (Cost, Insurance and Freight, maritime)', 'Identique à FOB/CFR, vendeur souscrit aussi l\'assurance', 'Vendeur', 'Acheteur'],
      ['CPT / CIP (tous modes)', 'Remise au premier transporteur', 'Vendeur', 'Acheteur'],
      ['DAP (Delivered At Place)', 'À l\'arrivée au lieu convenu, avant déchargement', 'Vendeur', 'Acheteur'],
      ['DPU (Delivered at Place Unloaded)', 'À l\'arrivée au lieu convenu, après déchargement', 'Vendeur', 'Acheteur'],
      ['DDP (Delivered Duty Paid)', 'À l\'arrivée, marchandise dédouanée et prête à l\'emploi', 'Vendeur', 'Vendeur'],
    ],
  },
  {
    type: 'concept',
    title: 'Choisir un Incoterm : la logique de décision',
    body: [
      "La question n'est jamais \"quel Incoterm est le moins cher\" mais \"qui, entre le fournisseur et nous, est le mieux placé pour gérer chaque segment de la chaîne\".",
      "Avec un transitaire de confiance et un statut d'exonération douanière déjà établis, un Incoterm comme FCA ou CIP est souvent optimal : le fournisseur gère l'export, vous gardez la main sur le transport principal et le dédouanement import.",
      "Sans aucun réseau logistique établi dans le pays d'achat, un DDP crédible peut valoir sa légère prime de prix — à condition de vérifier concrètement, pas sur promesse commerciale, que le fournisseur sait gérer une exonération humanitaire dans ce pays précis.",
    ],
    highlight: "Ne jamais accepter un Incoterm par défaut simplement parce que c'est celui que le fournisseur propose dans son devis standard : il propose presque toujours celui qui l'arrange commercialement, pas celui qui protège le mieux votre organisation.",
  },
  {
    type: 'comparison-table',
    title: 'Choisir un mode de fret : coût, délai, urgence',
    columns: ['Critère', 'Fret aérien', 'Fret maritime', 'Fret terrestre (route)'],
    rows: [
      ['Coût au kg', 'Le plus élevé, souvent 5 à 15 fois le coût maritime', 'Le plus bas pour de gros volumes, mais coûts portuaires fixes', 'Variable selon la distance et l\'état des routes'],
      ['Délai typique', '2 à 7 jours porte-à-porte', '25 à 45 jours, hors dédouanement', 'De 3 jours (corridor direct) à plusieurs semaines'],
      ['Sensibilité aux volumes/poids', 'Pénalisant pour du matériel lourd ou volumineux', 'Adapté aux gros volumes et au matériel lourd', 'Limité par la capacité du véhicule'],
      ['Quand le choisir', 'Urgence médicale réelle, échéance non négociable', 'Approvisionnement planifié, gros volumes, pas de contrainte critique', 'Réapprovisionnement régional, corridors déjà maîtrisés'],
    ],
  },
  {
    type: 'stat-callout',
    stat: '5 à 15x',
    caption: "Le surcoût du fret aérien par rapport au fret maritime, pour un même volume.",
    context: "Une urgence programme réelle justifie parfois cette prime — mais elle doit se décider en chiffrant au moins deux options, jamais par réflexe.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Incoterm', definition: "Règle internationale standardisée (Chambre de Commerce Internationale) définissant le point de transfert du risque et la répartition des coûts entre vendeur et acheteur." },
      { term: 'Bill of Lading (BL / connaissement)', definition: "Document de transport maritime qui fait office de contrat de transport, de reçu de marchandise et, sous sa forme \"à ordre\", de titre de propriété — indispensable pour retirer la marchandise au port." },
      { term: 'Packing list (liste de colisage)', definition: "Document détaillant le contenu exact de chaque colis (poids, dimensions, quantités) — son exactitude conditionne la fluidité du dédouanement." },
      { term: "Certificat d'origine", definition: "Document attestant le pays de fabrication de la marchandise, parfois exigé pour un régime douanier préférentiel ou une exonération humanitaire." },
      { term: 'Coût total livré (landed cost)', definition: "Somme du prix marchandise, du transport, de l'assurance, des droits/taxes et des frais annexes — le seul chiffre pertinent pour comparer deux options, jamais le prix marchandise seul." },
    ],
  },
  {
    type: 'process',
    title: 'Monter une expédition internationale, jusqu\'au dossier complet',
    steps: [
      { title: 'Vérifier l\'Incoterm avant de signer la commande', body: "Identifiez l'Incoterm dans le devis fournisseur et vérifiez-le contre le transfert de risque réel. Renégociez avant la commande — jamais après, quand la marchandise est déjà en transit." },
      { title: 'Comparer au moins deux modes de fret', body: "Dans comparateur-fret-international-incoterms.xlsx, renseignez poids, volume, tarifs et délais de chaque option ; croisez le résultat avec l'échéance réelle du programme." },
      { title: 'Demander facture commerciale et packing list dès confirmation', body: "Ces deux documents doivent porter, chiffre pour chiffre, la même description, quantité et poids. Une divergence, même mineure, est la cause la plus fréquente de blocage au dédouanement." },
      { title: "Obtenir le certificat d'origine si le régime douanier l'exige", body: "Renseignez-vous en amont auprès de votre transitaire local sur cette exigence propre au pays de destination." },
      { title: 'Récupérer le document de transport (BL, LTA ou CMR)', body: "Confirmez avec le transitaire le type de BL émis (original ou telex release) suffisamment tôt pour ne pas découvrir un blocage évitable à l'arrivée." },
      { title: 'Souscrire ou vérifier l\'assurance transport', body: "Vérifiez le niveau réel de couverture, pas seulement l'existence d'une police, et ajoutez le certificat d'assurance au dossier." },
      { title: 'Assembler et transmettre le dossier avant l\'arrivée physique', body: "Avec checklist-documents-expedition-internationale.docx, réunissez tous les documents puis transmettez le dossier complet à l'équipe terrain plusieurs jours avant l'arrivée de la marchandise — jamais après." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Accepter un Incoterm qui laisse l'organisation responsable d'un segment qu'elle ne maîtrise pas localement.",
      "Réflexe systématique du fret aérien sans comparaison chiffrée réelle — parfois 8 à 10 fois le prix d'une option maritime largement suffisante.",
      "Documents non concordants entre facture commerciale et packing list — la cause la plus fréquente et la plus évitable de blocage au dédouanement.",
      "Sous-estimer le délai réel d'un corridor terrestre : un délai \"annoncé\" est une moyenne optimiste, pas une garantie.",
      "Envoyer le dossier documentaire par fragments, ou seulement après l'arrivée de la marchandise.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — Achat urgent de matériel médical pour le Soudan du Sud',
    scenario: "Une rupture de stock de kits de traitement de la malnutrition sévère est attendue dans 18 jours à Juba. La commande de 3,2 tonnes vient d'être confirmée auprès d'un fournisseur aux Émirats arabes unis, en FOB Dubaï. Le transitaire propose deux options : aérien (6 jours, plus cher) ou maritime + routier (32 jours, moins cher) via un corridor qui a connu un blocage frontalier de 5 jours le mois précédent.",
    steps: [
      "Chiffrer systématiquement les deux options de fret avant de trancher, même quand l'urgence semble évidente.",
      "Intégrer explicitement le risque de blocage frontalier documenté dans l'estimation de délai, pas seulement le délai annoncé par le transporteur.",
      "Vérifier ce qu'un Incoterm FOB laisse à la charge de l'organisation dès le chargement à bord, surtout sans transitaire établi dans le pays d'origine.",
      "Contrôler la cohérence chiffre par chiffre entre facture commerciale et packing list dès leur réception.",
    ],
  },
  {
    type: 'exercise',
    title: 'Arbitrage fret, Incoterm et dossier documentaire',
    instructions: "Renseignez les deux options (aérien et maritime + routier) dans comparateur-fret-international-incoterms.xlsx pour 3 200 kg, en intégrant le risque de blocage frontalier signalé. Tranchez et justifiez en 5 lignes maximum votre choix au regard de l'échéance de 18 jours. Identifiez ensuite ce que le FOB Dubaï laisse à la charge de votre organisation, puis complétez checklist-documents-expedition-internationale.docx en indiquant les documents déjà disponibles et ceux qui restent à obtenir, et auprès de qui.",
    deliverable: "Le comparateur complété avec votre justification écrite, et la checklist documentaire à jour.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer, pour au moins 5 Incoterms 2020, le point exact de transfert du risque entre vendeur et acheteur.",
      "Je sais identifier un Incoterm qui expose mon organisation à un risque qu'elle ne maîtrise pas localement, avant la signature de la commande.",
      "Je sais comparer fret aérien, maritime et terrestre sur le coût total livré et le délai réel, pas sur une impression d'urgence.",
      "Je sais lister les documents indispensables d'un dossier d'expédition internationale et vérifier leur cohérence chiffre par chiffre.",
      "Je sais à quel moment transmettre le dossier à l'équipe terrain pour ne pas retarder le dédouanement.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 08 — Systèmes ERP Humanitaires : SAP, LINK & Power Query, pour transformer un export ERP brut en rapport fiable.',
  },
]
