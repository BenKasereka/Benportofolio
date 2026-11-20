// Module 07 — Transport International & Dédouanement
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure de
// préparation d'une expédition internationale (Incoterm, comparaison de fret,
// facture et packing list, document de transport, lettre de voiture,
// assurance, dossier douanier, transmission) est déroulée étape par étape
// (une étape par écran), champ par champ dans les trois templates, appliquée
// à un cas fil rouge chiffré, puis résolue intégralement et transposée en
// exercices. Les diapositives trop chargées sont découpées automatiquement
// en « (suite) » par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'cover',
    title: 'Transport International & Dédouanement',
    hook: "En un peu plus de trois jours ouvrés, vous allez produire ce qu'une coordination et un transitaire attendent d'un Supply Chain Manager avant qu'un colis ne quitte le pays d'origine : une analyse d'Incoterm avec message de renégociation, un comparateur de fret chiffré et justifié, un dossier documentaire cohérent chiffre par chiffre (checklist complète), une lettre de voiture signée, une assurance vérifiée et un dossier transmis en un seul envoi avant l'arrivée. Chaque étape est déroulée ici, champ par champ, sur un cas réel de terrain : 3,2 tonnes de kits nutritionnels à faire venir de Dubaï à Juba en 18 jours.",
  },
  {
    type: 'objectives',
    items: [
      "Choisir un Incoterm 2020 adapté à une commande internationale d'après le transfert réel de risque qu'il crée, en produisant une grille d'exposition par segment de la chaîne et le message de renégociation adressé au fournisseur avant la signature du bon de commande.",
      "Expliquer, pour n'importe quel Incoterm, qui paie le transport, qui porte le risque à chaque étape et qui dédouane à l'export comme à l'import, en produisant la frise des huit segments d'une expédition avec le responsable de chacun.",
      "Comparer fret aérien, maritime et terrestre sur le coût total livré, le délai réaliste et l'échéance du programme, en produisant le comparateur comparateur-fret-international-incoterms.xlsx complété et une justification écrite de cinq lignes maximum.",
      "Assembler un dossier documentaire complet (facture commerciale, packing list, certificat d'origine, document de transport, assurance, documents douaniers) en produisant la checklist-documents-expedition-internationale.docx remplie section par section.",
      "Vérifier chiffre par chiffre la cohérence des documents avant transmission, en produisant un tableau de rapprochement facture / packing list / document de transport et les demandes de correction envoyées au fournisseur.",
      "Établir une lettre de voiture (lettre-de-voiture-waybill.xlsx) pour un segment que votre organisation organise elle-même, signée par les trois parties, avec réserves à la prise en charge et à la réception.",
      "Transmettre le dossier complet, en un seul envoi et avant l'arrivée physique, à l'agent en douane et à l'équipe terrain, en produisant l'e-mail de transmission avec accusé de réception et le journal de suivi de l'expédition.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une lecture : c'est le montage complet d'une expédition internationale urgente, du devis fournisseur au dossier remis à l'agent en douane, découpé en 8 procédures. À la fin, vous aurez en main sept livrables réutilisables tels quels sur votre prochaine commande internationale.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé (Gogrial, État du Warrap, Soudan du Sud), que vous avez découverte dès le module 1. C'est le cas de l'exercice noté du module : une rupture de kits de traitement de la malnutrition sévère dans 18 jours, une commande à Dubaï proposée en FOB, et deux options de fret que le transitaire vous demande de départager.",
    ],
    bullets: [
      "L1 — L'analyse de l'Incoterm du devis : frise des segments, grille d'exposition, alternative retenue et message de renégociation.",
      "L2 — Le comparateur de fret (onglet « Comparateur Fret ») complété pour au moins deux options, avec la justification écrite de la décision.",
      "L3 — Le tableau de rapprochement facture commerciale / packing list / document de transport et les demandes de correction au fournisseur.",
      "L4 — La checklist-documents-expedition-internationale.docx complétée (6 sections).",
      "L5 — La lettre de voiture (lettre-de-voiture-waybill.xlsx) du segment organisé par Kerowa, signée et distribuée.",
      "L6 — La note de vérification de l'assurance transport (valeur assurée, couverture, certificat).",
      "L7 — L'e-mail de transmission du dossier en un seul envoi et le journal de suivi jusqu'à la livraison.",
    ],
    tip: "Créez dès maintenant un dossier « SSD-2026-007 » avec un sous-dossier par livrable (L1 à L7) et un sous-dossier « SOURCE » pour les documents reçus tels quels. Une expédition internationale se reconstitue toujours à partir de ses courriels et de ses pièces : classez-les au fil de l'eau.",
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : 3,2 tonnes de kits nutritionnels, Dubaï → Juba, 18 jours',
    body: [
      "Nous sommes le lundi 11 mai 2026. Kerowa Santé (ONG fictive, projet médical et nutritionnel de 12 mois, budget 1 200 000 EUR dont 85 % ECHO, rapport intermédiaire dû le 15 juin) approvisionne, depuis sa pharmacie centrale de Juba, le centre de stabilisation nutritionnelle de Gogrial et trois structures de santé partenaires de Juba et de sa périphérie. Vous êtes Supply Chain Manager depuis le 2 mars.",
      "Le Dr Rebecca N. (programme nutrition) vous alerte : à la consommation actuelle, le stock de kits de traitement de la malnutrition sévère sera épuisé le vendredi 29 mai, soit dans 18 jours. Le fournisseur de Dubaï, Dunes Medical Supplies FZE (fictif), a confirmé 800 kits (40 cartons, 3 200 kg, 9 m³, 54 500 USD) prêts à partir le jeudi 14 mai. Son devis Q-88214 est en FOB Dubaï. Le bon de commande PO-2026-031 est prêt, mais pas encore signé.",
    ],
    table: {
      columns: ['Personne ou organisation (fictive)', 'Fonction', 'Rôle dans cette expédition'],
      rows: [
        ['Grace M.', 'Coordinatrice pays (Juba)', 'Signe le transport (10 000 – 60 000 EUR), porte les demandes d\'exonération'],
        ['Dr Rebecca N.', 'Responsable programme nutrition', 'Fixe la date de rupture et la consommation prévue'],
        ['Dr Samuel T.', 'Coordinateur médical', 'Relation avec le Ministère de la Santé (autorisation d\'importation)'],
        ['Joseph K.', 'Administration-finance', 'Paie fret, assurance et droits éventuels'],
        ['Peter A.', 'Logisticien terrain', 'Réceptionne, organise le dernier segment Juba → Gogrial'],
        ['Ahmed R. — Nile Gate Logistics', 'Transitaire et agent en douane à Juba', 'Cote le fret, dédouane à l\'arrivée, sous accord-cadre'],
        ['M. Karim S. — Dunes Medical Supplies FZE', 'Fournisseur à Dubaï', 'Émet devis, facture et packing list'],
      ],
    },
    example: {
      title: 'Les 4 informations de départ',
      lines: [
        "1. « Rupture de kits prévue le 29 mai dans les structures de Juba et de Gogrial. » (Dr Rebecca N.)",
        "2. « Le fournisseur propose FOB Dubaï, prix 54 500 USD, prêt le 14 mai. » (devis Q-88214, validité jusqu'au 15 mai)",
        "3. « Deux options de transport : aérien 6 jours ou maritime + routier 32 jours. » (Ahmed R.)",
        "4. « Le corridor routier Mombasa – Juba a connu 5 jours de blocage supplémentaires le mois dernier à Nadapal. » (Ahmed R.)",
      ],
    },
    pitfall: "Les organisations, les personnes, les numéros de devis et tous les montants sont fictifs. Ne réutilisez jamais ces chiffres sur votre propre envoi : refaites chaque cotation et chaque calcul avec vos données.",
  },
  {
    type: 'concept',
    title: 'Vos trois jours et demi, procédure par procédure',
    body: "Chaque procédure correspond à un créneau du calendrier réel de l'expédition. Le devis expire le 15 mai et la marchandise est prête le 14 : l'ordre des procédures est celui qui évite de signer avant d'avoir vérifié.",
    table: {
      columns: ['Quand', 'Procédure', 'Livrable produit', 'Temps'],
      rows: [
        ['Lundi 11 mai, matin', 'P1 — Vérifier l\'Incoterm avant de signer', 'L1 Analyse Incoterm + message', '½ jour'],
        ['Lundi 11 mai, après-midi', 'P2 — Comparer les modes de fret', 'L2 Comparateur + justification', '½ jour'],
        ['Mardi 12 – mercredi 13 mai', 'P3 — Facture, packing list, certificat d\'origine', 'L3 Rapprochement + demandes de correction', '½ jour'],
        ['Mercredi 13 mai, matin', 'P4 — Document de transport / P6 — Assurance', 'L6 Note assurance', '½ jour'],
        ['Mercredi 13 mai, après-midi', 'P7 — Documents douaniers et dossier complet', 'L4 Checklist complétée', '½ jour'],
        ['Jeudi 14 mai', 'P8 — Transmission du dossier', 'L7 E-mail + journal de suivi', '1 h'],
        ['Vendredi 22 mai', 'P5 — Lettre de voiture du transfert local', 'L5 Waybill signée', '1 h'],
      ],
    },
    tip: "Bloquez ces créneaux dans l'agenda partagé dès le lundi matin et prévenez le transitaire que vous lui enverrez une demande de cotation avant midi : un transitaire qui sait ce qui arrive répond plus vite.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Ce que ce module couvre, et ce qu\'il ne couvre pas',
    body: [
      "Ce module se situe en amont de la chaîne : c'est le travail de l'acheteur, du Supply Chain Manager ou du coordinateur logistique qui monte une commande internationale, négocie avec un fournisseur ou un transitaire et prépare l'expédition, avant même que la marchandise ait quitté le pays d'origine : quel Incoterm signer, quel mode de fret choisir, quel dossier préparer.",
      "Le dédouanement vu du terrain (négociation avec l'agent des douanes au poste-frontière, relations avec les autorités locales, checkpoints) est traité dans le module Coordination, Autorités & Gestion des Douanes de la formation Logistique Humanitaire. Ici, vous préparez ce qui rendra ce dédouanement possible sans blocage.",
    ],
    example: {
      title: 'Où se place chaque module sur la chaîne de Kerowa',
      lines: [
        "Module 2 (achats) : la PO-2026-031 est approuvée selon le palier de montant.",
        "Module 7 (ce module) : Incoterm, fret, documents, assurance, dossier, transmission — du 11 au 14 mai.",
        "Module Douanes & Autorités (Logistique Humanitaire) : le 20 mai à Juba, l'agent en douane utilise le dossier pour dédouaner.",
        "Module 5 (stocks) : réception du GRN à la pharmacie de Juba, puis module 6 pour la distribution.",
      ],
    },
    tip: "Une règle de cloisonnement : tout ce qui se décide avant le départ de la marchandise relève de ce module ; tout ce qui se négocie face à un fonctionnaire relève du module terrain. Le premier conditionne le second.",
  },
  {
    type: 'stat-callout',
    stat: '1 blocage sur 2',
    caption: "Après 25 ans d'achats, de transport et de dédouanement entre l'Europe, l'Asie et des terrains comme la RDC, le Tchad, le Soudan du Sud, Haïti ou le Nigeria : la moitié des blocages douaniers vécus sur le terrain ont été décidés des semaines plus tôt.",
    context: "Au moment de la signature de la commande, par un Incoterm mal choisi ou un dossier documentaire monté à la hâte, loin du poste-frontière où le problème finit par éclater.",
  },
  {
    type: 'concept',
    title: 'Les Incoterms : une question de « qui porte le risque, et quand »',
    body: [
      "Les Incoterms (International Commercial Terms, Chambre de Commerce Internationale) sont souvent enseignés comme une liste de sigles à mémoriser : la version 2020 en compte onze. Sur le terrain, une seule question compte pour chacun d'eux : à quel point précis de la chaîne le risque et les coûts basculent-ils du vendeur à l'acheteur ?",
      "Tout le reste, c'est-à-dire qui paie l'assurance, qui gère le dédouanement export, qui gère le dédouanement import, en découle directement. Retenez deux choses : l'Incoterm règle la répartition des risques et des coûts entre vendeur et acheteur, il ne règle ni le prix, ni la propriété, ni le paiement.",
    ],
    highlight: "Plus l'Incoterm est situé à gauche du tableau suivant (EXW), plus vous portez de responsabilités logistiques et administratives dès le pays d'origine. Plus il est à droite (DDP), plus le fournisseur les porte — mais il ne connaît quasiment jamais les spécificités du dédouanement humanitaire de votre pays de destination.",
    example: {
      title: 'Lecture d\'un devis en une phrase',
      lines: [
        "« FOB Dubaï » = le vendeur porte les risques et les coûts jusqu'à ce que la marchandise soit chargée à bord du navire à Dubaï ; à partir de là, c'est Kerowa qui porte tout.",
        "Question à poser immédiatement : qui, chez nous, sait gérer ce qui se passe à Dubaï et après ?",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Incoterms 2020 — qui porte le risque, qui dédouane',
    columns: ['Incoterm', 'Point de transfert du risque', 'Dédouanement export', 'Dédouanement import'],
    rows: [
      ['EXW (Ex Works)', "Dès la sortie de l'entrepôt du fournisseur", 'Acheteur', 'Acheteur'],
      ['FCA (Free Carrier)', "Remise au transporteur désigné par l'acheteur", 'Vendeur', 'Acheteur'],
      ['FOB (Free On Board, maritime uniquement)', "Chargement à bord du navire au port d'embarquement", 'Vendeur', 'Acheteur'],
      ['CFR (Cost and Freight, maritime)', "Identique à FOB ; le vendeur paie le fret jusqu'au port de destination", 'Vendeur', 'Acheteur'],
      ['CIF (Cost, Insurance and Freight, maritime)', "Identique à FOB et CFR ; le vendeur souscrit aussi l'assurance", 'Vendeur', 'Acheteur'],
      ['CPT / CIP (tous modes)', 'Remise au premier transporteur ; le vendeur paie le transport (et assure, en CIP)', 'Vendeur', 'Acheteur'],
      ['DAP (Delivered At Place)', "À l'arrivée au lieu convenu, avant déchargement", 'Vendeur', 'Acheteur'],
      ['DPU (Delivered at Place Unloaded)', "À l'arrivée au lieu convenu, après déchargement", 'Vendeur', 'Acheteur'],
      ['DDP (Delivered Duty Paid)', "À l'arrivée, marchandise dédouanée et prête à l'emploi", 'Vendeur', 'Vendeur'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Qui fait quoi, segment par segment : six Incoterms à connaître',
    columns: ['Segment', 'EXW', 'FCA', 'FOB', 'CIP', 'DAP', 'DDP'],
    rows: [
      ['Chargement chez le vendeur', 'Vous', 'Vendeur', 'Vendeur', 'Vendeur', 'Vendeur', 'Vendeur'],
      ['Dédouanement export', 'Vous', 'Vendeur', 'Vendeur', 'Vendeur', 'Vendeur', 'Vendeur'],
      ['Transport principal', 'Vous', 'Vous', 'Vous', 'Vendeur paie', 'Vendeur', 'Vendeur'],
      ['Assurance transport', 'Facultative', 'Facultative', 'Facultative', 'Vendeur (couverture A)', 'Facultative', 'Facultative'],
      ['Déchargement à l\'arrivée', 'Vous', 'Vous', 'Vous', 'Vous', 'Vous', 'Vous'],
      ['Dédouanement import et droits', 'Vous', 'Vous', 'Vous', 'Vous', 'Vous', 'Vendeur'],
      ['Transfert du risque', 'Sortie de l\'entrepôt', 'Remise au transporteur', 'À bord du navire', 'Remise au 1er transporteur', 'Arrivée, avant déchargement', 'Arrivée, dédouanée'],
    ],
  },
  {
    type: 'concept',
    title: 'Le piège du CIP et du CFR : le vendeur paie le transport, mais vous portez le risque',
    body: [
      "Dans les familles C (CFR, CIF, CPT, CIP), le vendeur paie le transport principal jusqu'à la destination, mais le risque a déjà basculé vers vous au chargement ou à la remise au premier transporteur. Autrement dit : vous ne payez pas le fret, mais vous portez le risque pendant toute la traversée.",
      "C'est la raison pour laquelle l'assurance compte autant : en CIF, le vendeur est tenu de souscrire une couverture minimale (clauses C) ; en CIP, la version 2020 impose une couverture étendue (clauses A, tous risques). Dans les autres Incoterms, personne n'est tenu de vous assurer : c'est à vous de le faire.",
    ],
    example: {
      title: 'Kerowa — même marchandise, trois lectures',
      lines: [
        "FOB Dubaï : le risque passe à Kerowa à bord ; aucune assurance n'est due par le vendeur ; Kerowa paie le fret (16 010 USD en aérien).",
        "CIP Juba : le risque passe à Kerowa à la remise au premier transporteur à Dubaï ; le vendeur paie le fret et fournit une assurance clauses A ; le prix devis augmente d'autant.",
        "DDP Juba : le risque ne passe à Kerowa qu'à l'arrivée à Juba, dédouanée ; mais le fournisseur doit savoir mener une exonération humanitaire au Soudan du Sud.",
      ],
    },
    pitfall: "Croire qu'un Incoterm « livré » ou « payé jusqu'à destination » vous protège pendant le transport. En CIF, CIP, CFR et CPT, le risque est chez vous dès le départ.",
  },
  {
    type: 'concept',
    title: 'Choisir un Incoterm : la logique de décision',
    body: [
      "La question n'est jamais « quel Incoterm est le moins cher » mais « qui, entre le fournisseur et nous, est le mieux placé pour gérer chaque segment de la chaîne ». Elle se tranche en trois situations types.",
    ],
    table: {
      columns: ['Votre situation', 'Incoterm souvent optimal', 'Pourquoi'],
      rows: [
        ['Transitaire de confiance et statut d\'exonération déjà établi dans le pays de destination', 'FCA ou CIP', 'Le fournisseur gère l\'export ; vous gardez la main sur le transport principal et le dédouanement import, avec vos partenaires qui connaissent le contexte humanitaire.'],
        ['Aucun réseau logistique dans le pays d\'achat, fournisseur avec références vérifiables sur des envois similaires', 'DDP crédible', 'La légère prime de prix peut valoir le transfert de charge, à condition de vérifier que le fournisseur sait gérer une exonération humanitaire dans ce pays précis.'],
        ['Aucun transitaire ni capacité d\'import à l\'arrivée', 'Aucun Incoterm de départ (EXW, FOB)', 'Vous portez des segments que personne ne peut gérer en cas d\'incident.'],
      ],
    },
    highlight: "Ne jamais accepter un Incoterm par défaut parce que c'est celui du devis standard. Un fournisseur propose presque toujours l'Incoterm qui l'arrange commercialement, pas celui qui protège le mieux votre organisation.",
  },
  {
    type: 'concept',
    title: 'FOB, CFR et CIF ne valent que pour le maritime : en aérien, pensez FCA, CPT ou CIP',
    body: [
      "Les Incoterms FOB, CFR et CIF font référence au chargement à bord d'un navire : ils sont réservés au transport maritime et fluvial. Pour un envoi aérien, routier ou multimodal (conteneur remis à un terminal), on utilise les Incoterms « tous modes » : FCA, CPT, CIP, DAP, DPU, DDP.",
      "Cette incohérence est fréquente dans les devis standard des fournisseurs : l'Incoterm écrit sur le devis ne correspond pas au mode de transport finalement retenu. Elle crée un flou sur le point de transfert du risque, justement là où un litige peut éclater.",
    ],
    example: {
      title: 'Kerowa — le devis dit FOB, l\'option retenue sera aérienne',
      lines: [
        "Devis Q-88214 : « FOB Dubaï » sans port nommé.",
        "Option maritime : FOB Jebel Ali (port) aurait un sens.",
        "Option aérienne : il n'y a ni navire ni « bord » ; il faut un Incoterm tous modes, par exemple FCA, lieu nommé = entrepôt du partenaire du transitaire à Dubaï.",
      ],
    },
    tip: "Quand vous lisez un devis, comparez systématiquement l'Incoterm écrit au mode de transport que vous envisagez : s'ils ne sont pas compatibles, la discussion avec le fournisseur est déjà nécessaire.",
  },
  {
    type: 'comparison-table',
    title: 'Choisir un mode de fret : coût, délai, urgence',
    columns: ['Critère', 'Fret aérien', 'Fret maritime', 'Fret terrestre (route)'],
    rows: [
      ['Coût au kg', "Le plus élevé, souvent 5 à 15 fois le coût maritime pour un même volume", "Le plus bas pour de gros volumes, mais coûts fixes portuaires significatifs", "Variable selon la distance et l'état des routes ; compétitif sur les corridors régionaux courts"],
      ['Délai typique', '2 à 7 jours porte-à-porte selon les liaisons disponibles', '25 à 45 jours selon l\'origine et le port de destination, hors dédouanement', 'De 3 jours (corridor régional direct) à plusieurs semaines (route dégradée, multiples frontières)'],
      ['Sensibilité aux volumes/poids', 'Pénalisant pour du matériel lourd ou volumineux (véhicules, groupes électrogènes)', 'Adapté aux gros volumes et au matériel lourd', 'Limité par la capacité du véhicule et l\'état des infrastructures'],
      ['Quand le choisir', 'Urgence médicale réelle, échéance programme non négociable, petit volume à forte valeur', 'Approvisionnement planifié, gros volumes, stock prépositionné, pas de contrainte de délai critique', 'Réapprovisionnement régional, dernier segment après un port ou aéroport d\'entrée, corridors déjà maîtrisés'],
    ],
  },
  {
    type: 'stat-callout',
    stat: '5 à 15x',
    caption: "Le surcoût du fret aérien par rapport au fret maritime, pour un même volume.",
    context: "Une urgence programme réelle justifie parfois cette prime, mais elle se décide en chiffrant au moins deux options, jamais par réflexe. Dans le cas Kerowa, le tarif au kg est 5,05 fois plus élevé en aérien (4,80 contre 0,95 USD), mais le coût total livré n'est « que » 3 fois plus élevé.",
  },
  {
    type: 'concept',
    title: 'Le coût total livré : le seul chiffre qui permet de comparer',
    body: [
      "Le coût total livré (landed cost) est la somme réelle du prix de la marchandise, du transport, de l'assurance, des droits et taxes éventuels et des frais annexes. C'est le seul chiffre pertinent pour comparer deux options : jamais le prix de la marchandise seul, jamais le seul tarif au kg.",
      "Le comparateur du module calcule trois chiffres par option. Les droits et taxes sont ceux que vous devrez payer si l'exonération n'est pas confirmée à temps : c'est le chiffre prudent.",
    ],
    table: {
      columns: ['Colonne du comparateur', 'Formule', 'Contenu'],
      rows: [
        ['H — Coût transport (USD)', 'Poids × Tarif au kg + Frais fixes', 'Fret et frais de manutention, de documentation, de port'],
        ['K — Coût total livré (USD)', 'Coût transport + Droits/taxes + Assurance', 'Tout ce que l\'envoi coûte une fois livré (hors prix marchandise)'],
        ['L — Coût par kg livré (USD)', 'Coût total livré ÷ Poids', 'Comparable d\'une option à l\'autre et d\'un envoi à l\'autre'],
      ],
    },
    tip: "Gardez la même base dans toutes les lignes : même poids, mêmes droits (cas prudent), même assurance. Si une option n'inclut pas un poste (par exemple le pré-acheminement), ajoutez-le avant de comparer.",
  },
  {
    type: 'concept',
    title: 'Délai annoncé et délai réaliste : planifier à rebours',
    body: [
      "Un délai « annoncé » par un transporteur ou un transitaire est une moyenne optimiste, pas une garantie. Les blocages frontaliers, les ruptures de charge et les vérifications douanières renforcées doivent être intégrés à votre estimation avant la décision, pas traités comme des imprévus ensuite.",
      "La méthode : partir de la date où la marchandise doit être utilisable, retirer le temps de réception et de redistribution, puis comparer à la date d'arrivée réaliste de chaque option (départ + délai annoncé + risque documenté).",
    ],
    example: {
      title: 'Kerowa — le calendrier à rebours',
      lines: [
        "Rupture de stock : vendredi 29 mai. Réception, contrôle et redistribution Juba → Gogrial : 3 jours.",
        "Date limite d'arrivée à Juba : mardi 26 mai.",
        "Aérien : départ 14 mai + 6 jours = 20 mai (22 mai avec 2 jours de marge). Dans les délais.",
        "Maritime + routier : 14 mai + 32 jours + 5 jours de blocage = 20 juin. Hors délai de 25 jours.",
      ],
    },
    pitfall: "Écarter le risque de blocage frontalier parce qu'il « n'est pas garanti ». Il est documenté, il s'est produit le mois précédent : il entre dans l'estimation.",
  },
  {
    type: 'concept',
    title: 'Import, export, transit : trois régimes douaniers à ne pas confondre',
    body: [
      "Chaque passage de frontière relève d'un régime douanier. Le dossier que vous préparez doit permettre de les ouvrir tous sans perte de temps ; c'est ce qui conditionne le délai réel de la marchandise.",
    ],
    table: {
      columns: ['Régime', 'Quand', 'Qui s\'en occupe (cas Kerowa en FCA)', 'Documents principaux'],
      rows: [
        ['Export', 'La marchandise quitte le pays du fournisseur', 'Le fournisseur (FCA et suivants) ; vous en EXW', 'Facture, packing list, déclaration d\'export, certificat d\'origine éventuel'],
        ['Transit', 'La marchandise traverse un pays sans y être consommée (ex. route via un pays voisin)', 'Le transitaire, sur la base d\'un document de transit', 'Document de transport, déclaration de transit, garantie douanière du transitaire'],
        ['Import', 'La marchandise entre dans le pays de destination', 'Vous : agent en douane et équipe terrain', 'Facture, packing list, document de transport, exonération, autorisation d\'importation'],
      ],
    },
    example: {
      title: 'Si c\'est vous qui expédiez',
      lines: [
        "Vous devenez exportateur : transfert de matériel entre deux missions, retour de matériel prêté.",
        "La logique des Incoterms se lit alors du côté vendeur : vous préparez facture (souvent pro forma « sans valeur commerciale »), packing list et déclaration d'export, et vous vérifiez les exigences du pays d'arrivée.",
      ],
    },
    tip: "Demandez systématiquement au transitaire quel régime s'applique à chaque frontière traversée et quel document le déclenche : c'est la question qui révèle les blocages avant le départ.",
  },
  {
    type: 'comparison-table',
    title: 'Le dossier documentaire : qui émet quoi, à quoi cela sert, ce qui coince',
    columns: ['Document', 'Émis par', 'Sert à', 'Erreur qui bloque'],
    rows: [
      ['Facture commerciale (commercial invoice)', 'Fournisseur', 'Déclarer la valeur, la description et l\'origine ; base des droits', 'Description ou quantité différente de la packing list'],
      ['Packing list (liste de colisage)', 'Fournisseur', 'Décrire chaque colis : contenu, poids, dimensions, quantités', 'Poids brut et net confondus, unités différentes'],
      ['Certificat d\'origine', 'Chambre de commerce ou autorité du pays d\'origine', 'Prouver le pays de fabrication (régime préférentiel, exonération)', 'Pays d\'expédition confondu avec pays de fabrication'],
      ['Document de transport (BL, LTA, CMR)', 'Transporteur', 'Prouver la prise en charge ; retirer la marchandise à l\'arrivée', 'Consignataire ou poids mal saisi ; BL original non disponible'],
      ['Certificat d\'assurance', 'Assureur ou vendeur selon Incoterm', 'Engager une réclamation en cas d\'avarie ou de perte', 'Couverture inférieure à la valeur réelle'],
      ['Demande d\'exonération, autorisation d\'importation', 'Autorités du pays de destination', 'Entrer sans droits, entrer légalement', 'Demande non déposée ou non confirmée avant l\'arrivée'],
    ],
  },
  {
    type: 'concept',
    title: 'Document de transport : BL, LTA ou CMR, et ce qu\'il vous donne',
    body: [
      "Le document de transport est délivré par le transporteur une fois la marchandise prise en charge. Il sert de preuve de la prise en charge et de contrat de transport. En maritime, le Bill of Lading (BL ou connaissement) est en plus, sous sa forme « à ordre », un titre de propriété : sans BL original ou copie autorisée, la marchandise arrivée reste bloquée au port.",
    ],
    table: {
      columns: ['Mode', 'Document', 'Négociable ?', 'À l\'arrivée'],
      rows: [
        ['Maritime', 'Bill of Lading (BL)', 'Oui, si « à ordre » : l\'original (souvent 3) fait titre', 'Original présenté, ou « telex release » autorisé par l\'expéditeur'],
        ['Aérien', 'Lettre de Transport Aérien (LTA, AWB)', 'Non', 'Numéro d\'AWB suffit au retrait ; le consignataire doit être exact'],
        ['Routier', 'CMR (lettre de voiture internationale)', 'Non', 'Signée à l\'arrivée avec les réserves éventuelles'],
      ],
    },
    tip: "Pour le maritime, décidez très tôt avec le transitaire du type de BL (original à faire voyager ou telex release électronique). Un original perdu ou en retard immobilise une marchandise physiquement arrivée.",
  },
  {
    type: 'concept',
    title: 'Assurance transport : qui assure, à quelle valeur, avec quelle couverture',
    body: [
      "Que l'assurance soit à votre charge (EXW, FCA, FOB…) ou à celle du fournisseur (CIF, CIP), vérifiez concrètement le niveau de couverture, pas seulement l'existence d'une police. Le certificat d'assurance est le document qui permettra d'engager une réclamation en cas d'avarie ou de perte ; une promesse verbale ne vaut rien.",
      "Les niveaux de couverture usuels sont les clauses A (tous risques sauf exclusions), B (risques nommés étendus) et C (risques nommés restreints). Une assurance de vendeur en CIF est souvent la plus basse (clauses C) ; en CIP, la version 2020 impose les clauses A.",
    ],
    example: {
      title: 'Valeur assurée Kerowa',
      lines: [
        "Valeur facture : 54 500 USD ; fret aérien : 16 010 USD ; valeur CIP : 70 510 USD.",
        "Valeur assurée usuelle = valeur CIP + 10 % : 77 561 USD. Prime cotée par le courtier : 180 USD, soit 0,23 % (colonne J du comparateur).",
        "Assurer seulement 110 % de la facture (59 950 USD) laisserait 17 611 USD non couverts : le fret payé et la marge.",
      ],
    },
    pitfall: "Assurer uniquement la valeur de la marchandise : en cas de perte, vous perdez aussi le fret payé et les frais. Vérifiez la base sur laquelle l'assureur calcule la valeur assurée.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Incoterm', definition: "Règle internationale standardisée (Chambre de Commerce Internationale) définissant le point de transfert du risque et la répartition des coûts entre vendeur et acheteur dans une transaction internationale." },
      { term: 'Lieu nommé', definition: "Lieu précis qui complète l'Incoterm (« FCA Dubaï, entrepôt de l'agent du transitaire »). Sans lieu nommé, le point de transfert du risque est flou." },
      { term: 'Transitaire (freight forwarder)', definition: "Partenaire technique qui organise le transport international, connaît les délais réels et peut obtenir des tarifs « humanitaires ». À construire avant l'urgence." },
      { term: 'Bill of Lading (BL / connaissement)', definition: "Document de transport maritime qui fait office de contrat de transport, de reçu de marchandise et, sous sa forme « à ordre », de titre de propriété. Indispensable pour retirer la marchandise au port." },
      { term: 'Lettre de Transport Aérien (LTA / AWB)', definition: "Document de transport aérien, non négociable : preuve de la prise en charge par le transporteur aérien." },
      { term: 'Lettre de voiture / waybill', definition: "Document établi pour un segment terrestre : expéditeur, transporteur, destinataire, détail de la marchandise, réserves à la prise en charge et à la réception, signé par les trois parties." },
      { term: 'Packing list (liste de colisage)', definition: "Document détaillant le contenu exact de chaque colis (poids, dimensions, quantités). Son exactitude au chiffre près conditionne la fluidité du dédouanement." },
      { term: "Certificat d'origine", definition: "Document attestant le pays de fabrication de la marchandise, parfois exigé pour un régime douanier préférentiel ou une exonération humanitaire." },
      { term: 'Poids taxable', definition: "Poids retenu pour facturer le fret aérien : le plus élevé entre le poids réel et le poids volumétrique (volume en m³ × 167 kg)." },
      { term: 'Coût total livré (landed cost)', definition: "Somme du prix marchandise, du transport, de l'assurance, des droits et des frais annexes. Seul chiffre pertinent pour comparer deux options." },
      { term: 'Telex release', definition: "Libération électronique de la marchandise en maritime, autorisée par l'expéditeur après remise des originaux du BL : évite d'envoyer des originaux par courrier." },
      { term: 'Exonération douanière', definition: "Dispense de droits et taxes accordée par les autorités de destination à une organisation humanitaire sur demande documentée, à déposer bien avant l'arrivée." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — VÉRIFIER L'INCOTERM AVANT DE SIGNER (LUNDI MATIN)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 6',
    title: 'Relever l\'Incoterm et le lieu nommé dans le devis',
    intro: "Le devis ou le contrat est le seul document qui engage le fournisseur. Vous partez de son texte, pas de ce que vous croyez avoir compris au téléphone. Entrées : le devis Q-88214 (PDF), le projet de bon de commande PO-2026-031.",
    steps: [
      {
        title: 'Retrouvez la mention de livraison',
        actions: [
          "Ouvrez le devis et cherchez les mots « Incoterm », « Delivery terms », « Price basis » ou les sigles EXW, FCA, FOB, CIF, CIP, DAP, DDP.",
          "Relevez trois éléments : le sigle, le lieu nommé, la version (« Incoterms 2020 »).",
          "Si le lieu manque (« FOB » seul), notez-le comme manquant : un Incoterm sans lieu nommé n'est pas exploitable.",
        ],
      },
      {
        title: 'Notez ce que le prix inclut et exclut',
        actions: [
          "Relevez le prix, la devise, la validité et la date de mise à disposition.",
          "Repérez les lignes « Packing », « Export clearance », « Freight », « Insurance » : incluses, exclues ou absentes.",
          "Comparez avec ce que l'Incoterm devrait inclure : toute différence est une question à poser.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — extrait du devis Q-88214 du 8 mai 2026',
      lines: [
        "Seller : Dunes Medical Supplies FZE, Dubaï. Buyer : Kerowa Santé.",
        "Goods : 800 treatment kits, severe acute malnutrition — 40 cartons, 3 200 kg gross, 9 m³.",
        "Price basis : FOB Dubai, Incoterms 2020. Total : 54 500 USD. Validity : 15/05/2026. Ready : 14/05/2026.",
        "Export packing : included. Export clearance : included. Freight and insurance : not included.",
        "Écart relevé : « FOB Dubai » sans port nommé ; aucun port ne peut être « à bord » pour un envoi aérien.",
      ],
    },
    result: "Vous avez écrit sur une ligne l'Incoterm, le lieu nommé, la version et ce que le prix inclut, avec les écarts à clarifier.",
    pitfall: "Vous fier au résumé du commercial par téléphone ou par messagerie instantanée : seul le texte du devis ou du contrat engage le fournisseur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 6',
    title: 'Dérouler la frise des huit segments et placer le point de transfert',
    intro: "Un Incoterm se lit segment par segment. La frise vous montre en une page ce que vous aurez réellement à organiser. Entrées : le devis, le tableau « Qui fait quoi » de la théorie.",
    steps: [
      {
        title: 'Tracez la frise',
        actions: [
          "Écrivez sur une feuille ou dans un tableau les huit segments : 1 chargement chez le fournisseur, 2 pré-acheminement, 3 dédouanement export, 4 point de transfert, 5 transport principal, 6 assurance, 7 dédouanement import et droits, 8 livraison finale.",
          "Mettez le point de transfert du risque (segment 4) en rouge.",
        ],
      },
      {
        title: 'Attribuez chaque segment',
        actions: [
          "Colonne « Responsable » : vendeur ou Kerowa, d'après le tableau de l'Incoterm du devis.",
          "Colonne « Risque porté par » : fournisseur avant le point de transfert, Kerowa après.",
        ],
      },
    ],
    table: {
      columns: ['Segment', 'Responsable (FOB Dubaï)', 'Risque porté par'],
      rows: [
        ['1 Chargement, préparation chez le fournisseur', 'Fournisseur', 'Fournisseur'],
        ['2 Pré-acheminement jusqu\'au point d\'embarquement', 'Fournisseur', 'Fournisseur'],
        ['3 Dédouanement export Émirats', 'Fournisseur', 'Fournisseur'],
        ['4 Chargement à bord (point de transfert)', 'Fournisseur', 'Kerowa dès que la marchandise est à bord'],
        ['5 Transport principal', 'Kerowa (à organiser et payer)', 'Kerowa'],
        ['6 Assurance', 'Kerowa (aucune obligation du vendeur)', 'Kerowa'],
        ['7 Dédouanement transit et import', 'Kerowa', 'Kerowa'],
        ['8 Livraison finale à Juba', 'Kerowa', 'Kerowa'],
      ],
    },
    result: "Une page qui montre en rouge tout ce qui revient à Kerowa : quatre segments sur huit, plus la coordination de l'embarquement.",
    tip: "Colorez les cellules : vert pour le fournisseur, rouge pour vous. Cette page se montre à la coordination en 30 secondes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 6',
    title: 'Consulter l\'onglet « Aide-decision Incoterms » du comparateur',
    intro: "Le fichier comparateur-fret-international-incoterms.xlsx contient deux onglets. Le second, « Aide-decision Incoterms », reprend la logique de choix sous forme de fiche de référence : 5 colonnes (A à E) et 10 Incoterms, lignes 5 à 14, avec une note de synthèse en ligne 16.",
    steps: [
      {
        title: 'Ouvrez le fichier sans abîmer le modèle',
        actions: [
          "Ouvrez le fichier et enregistrez-le immédiatement sous « SSD-2026-007_Comparateur_Fret.xlsx ».",
          "Cliquez sur l'onglet « Aide-decision Incoterms ».",
          "Lisez les en-têtes de la ligne 4 : Incoterm | Point de transfert du risque | Dedouanement export | Dedouanement import | Recommande si...",
        ],
      },
      {
        title: 'Lisez la ligne de votre Incoterm, puis les voisines',
        actions: [
          "Lisez la ligne FOB (ligne 7) colonne par colonne, à voix haute.",
          "Lisez les lignes FCA (6), CIP (11) et DAP (12) : la colonne E « Recommande si... » vous dit dans quelles conditions chacune est pertinente.",
          "Lisez la note de la ligne 16 : plus l'Incoterm est à gauche, plus l'acheteur porte de responsabilités dès le pays d'origine.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ce que l\'onglet dit du FOB (ligne 7)',
      lines: [
        "A7 FOB | B7 « Au chargement a bord du navire (maritime uniquement) » | C7 Vendeur | D7 Acheteur.",
        "E7 : « Fret maritime classique, mais verifiez que vous avez un transitaire pour le dedouanement import ».",
        "Lecture Kerowa : nous avons un transitaire à Juba pour l'import, mais aucun à Dubaï ; et « maritime uniquement » exclut l'option aérienne.",
        "Voisines : FCA (ligne 6) « compromis le plus courant » ; CIP (ligne 11) pertinent en aérien ou multimodal.",
      ],
    },
    result: "Vous pouvez citer en trois phrases ce que le FOB laisse à Kerowa et deux alternatives possibles.",
    pitfall: "Lire la colonne « Recommande si... » comme une garantie. C'est un repère : vérifiez toujours chaque condition (transitaire fiable, références du fournisseur) avant de conclure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 6',
    title: 'Évaluer votre capacité locale : la grille d\'exposition',
    intro: "C'est l'étape qui transforme la lecture en décision. Pour chaque segment à votre charge, vous cherchez la preuve que quelqu'un sait le faire. Entrées : la frise de l'étape 2, la liste de vos partenaires et de vos envois précédents.",
    steps: [
      {
        title: 'Créez la grille à cinq colonnes',
        actions: [
          "Créez un tableau : Segment à votre charge | Qui l'exécuterait | Capacité réelle (Oui / Partielle / Non) | Preuve | Risque si incident (Faible / Moyen / Élevé).",
          "Reprenez en lignes uniquement les segments de la frise qui sont en rouge.",
        ],
      },
      {
        title: 'Remplissez avec des preuves, pas des impressions',
        actions: [
          "Pour chaque ligne, écrivez un nom, un contrat ou une référence d'envoi passé. Pas de preuve : écrivez « Non ».",
          "Comptez les lignes « Non » ou « Partielle » dont le risque est « Élevé ».",
          "Règle de décision : une seule ligne « Non » à risque élevé suffit à renégocier l'Incoterm.",
        ],
      },
    ],
    table: {
      columns: ['Segment à charge', 'Qui', 'Capacité', 'Preuve', 'Risque'],
      rows: [
        ['Pilotage de l\'embarquement à Dubaï (remise, incident avant départ)', 'Aucun partenaire', 'Non', 'Aucun envoi depuis les Émirats', 'Élevé'],
        ['Transport principal Dubaï → Juba', 'Nile Gate Logistics', 'Partielle', 'Cotation reçue ; pas de bureau à Dubaï', 'Moyen'],
        ['Assurance transport', 'Courtier, police ouverte', 'Oui', 'Police ouverte 2026', 'Faible'],
        ['Dédouanement transit et import', 'Nile Gate Logistics', 'Oui', '12 envois 2025 avec exonération', 'Moyen'],
        ['Livraison finale Juba', 'Parc Kerowa', 'Oui', 'Waybills Juba 2026', 'Faible'],
      ],
    },
    result: "Verdict chiffré : 1 segment « Non » à risque élevé, 1 « Partielle ». Le FOB expose Kerowa : renégociation nécessaire.",
    tip: "Montrez cette grille à Peter A. et à Joseph K. avant de conclure : ils connaissent des envois passés que vous n'avez pas dans votre dossier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 6',
    title: 'Choisir l\'Incoterm cible et un repli',
    intro: "Vous ne demandez pas « un meilleur Incoterm » : vous demandez de déplacer le point de transfert vers un point que vous maîtrisez. Entrées : la grille d'exposition, le mode de fret envisagé (à confirmer à la procédure 2).",
    steps: [
      {
        title: 'Passez chaque alternative dans la grille',
        actions: [
          "Listez deux à trois alternatives compatibles avec le mode envisagé.",
          "Pour chacune, notez ce qui change pour vous (segments gagnés ou perdus) et l'impact attendu sur le prix.",
        ],
      },
      {
        title: 'Retenez une cible et un repli',
        actions: [
          "Cible : l'option qui supprime le segment à risque élevé sans transférer un segment que le fournisseur ne maîtrise pas.",
          "Repli : l'option à proposer si le fournisseur refuse la cible.",
          "Écartez par écrit les options rejetées, avec la raison : c'est ce qui défendra votre choix devant un auditeur.",
        ],
      },
    ],
    table: {
      columns: ['Alternative', 'Ce qui change pour Kerowa', 'Verdict'],
      rows: [
        ['FOB Dubaï (devis)', 'Kerowa pilote l\'embarquement ; FOB ne s\'applique pas à l\'aérien', 'Rejeté'],
        ['FCA Dubaï, entrepôt de l\'agent du transitaire', 'Le fournisseur gère l\'export et remet à l\'agent ; Kerowa garde transport principal et import', 'Cible'],
        ['CIP Juba, assurance clauses A', 'Le fournisseur organise le transport et assure ; prime sur le prix ; import reste à Kerowa', 'Repli'],
        ['DDP Juba', 'Fournisseur sans référence d\'exonération au Soudan du Sud', 'Rejeté'],
      ],
    },
    result: "Une cible (FCA Dubaï), un repli (CIP Juba) et deux options écartées avec leur raison.",
    tip: "Demandez au fournisseur un prix sous deux Incoterms dans le même courriel : vous comparez des chiffres, pas des intentions.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 6',
    title: 'Renégocier par écrit, faire confirmer, reporter dans la PO et la checklist',
    intro: "Une renégociation orale n'existe pas : seule la confirmation écrite protège Kerowa. Entrées : l'analyse des étapes 1 à 5, un accès à la messagerie (avec accusé de réception).",
    steps: [
      {
        title: 'Envoyez le message de renégociation',
        actions: [
          "Un objet clair avec la référence : « SSD-2026-007 — Q-88214 — conditions de livraison ».",
          "Un corps en quatre parties : constat, demande, alternative en repli, échéance de réponse.",
          "Demandez un accusé de réception et un devis révisé.",
        ],
      },
      {
        title: 'Faites confirmer, puis reportez',
        actions: [
          "Exigez le devis révisé avec Incoterm, lieu nommé, version 2020 et prix.",
          "Reportez-les dans la PO (conditions de livraison) et dans la section 1 de la checklist (case « Incoterm convenu »).",
          "Archivez le courriel et le devis révisé dans le dossier L1 ; ne signez la PO qu'après réception.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — message du lundi 11 mai, 15 h',
      lines: [
        "Objet : SSD-2026-007 — Q-88214 — conditions de livraison.",
        "« Bonjour M. Karim S., merci pour le devis Q-88214. Il indique FOB Dubai sans port nommé. Notre envoi partira par air ; FOB ne s'applique pas à ce mode. »",
        "« Merci de nous confirmer par devis révisé un prix FCA Dubai, Incoterms 2020, lieu nommé : entrepôt de l'agent de Nile Gate Logistics à Dubaï (adresse communiquée par ce transitaire). Merci d'inclure le dédouanement export. »",
        "« À défaut, merci de coter CIP Juba (assurance clauses A). Réponse attendue demain mardi 12 mai à midi pour une signature de PO l'après-midi. Merci d'accuser réception. »",
      ],
    },
    result: "Devis révisé reçu le 12 mai 11 h : FCA Dubaï, prix inchangé à 54 500 USD ; PO-2026-031 portant la mention FCA Dubaï signée l'après-midi. Livrable L1 terminé.",
    pitfall: "Accepter « on fait toujours FOB, c'est pareil » par téléphone, ou signer la PO « en attendant ». Une fois la marchandise en fabrication ou en transit, la renégociation n'existe plus.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — COMPARER LES MODES DE FRET (LUNDI APRÈS-MIDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 8',
    title: 'Fixer l\'échéance réelle par un calendrier à rebours',
    intro: "On ne compare pas des modes de fret avec une impression d'urgence : on part d'une date. Entrées : la date de rupture ou d'utilisation (donnée par le programme), le temps de réception et de redistribution, la date de mise à disposition du fournisseur.",
    steps: [
      {
        title: 'Posez les trois dates',
        actions: [
          "Demandez par écrit au demandeur (programme) la date de rupture et la consommation prévue.",
          "Estimez le temps de réception, contrôle et redistribution après arrivée.",
          "Notez la date de mise à disposition de la marchandise chez le fournisseur.",
        ],
      },
      {
        title: 'Calculez la date limite d\'arrivée et la marge de chaque option',
        actions: [
          "Date limite d'arrivée = date de rupture − temps de réception et de redistribution.",
          "Pour chaque mode : arrivée = mise à disposition + délai annoncé + risque documenté.",
          "Marge = date limite − arrivée. Une marge négative élimine l'option.",
        ],
      },
    ],
    table: {
      columns: ['Mode', 'Départ Dubaï', 'Délai réaliste', 'Arrivée Juba', 'Limite 26/05', 'Marge'],
      rows: [
        ['Aérien', '14/05', '6 j (+ 2 j de marge dédouanement)', '20/05 (22/05)', '26/05', '+ 4 j'],
        ['Maritime + routier', '14/05', '32 j + 5 j de blocage = 37 j', '20/06', '26/05', '− 25 j'],
      ],
    },
    example: {
      title: 'Kerowa — les trois dates',
      lines: [
        "Rupture : vendredi 29 mai (Dr Rebecca N., consommation 0,7 carton par jour).",
        "Réception, contrôle et redistribution Juba → Gogrial : 3 jours. Date limite d'arrivée à Juba : mardi 26 mai.",
        "Marchandise disponible chez Dunes Medical Supplies FZE : jeudi 14 mai.",
      ],
    },
    result: "La maritime est éliminée avant même de parler de prix : elle arrive 25 jours après la date limite, y compris sans le blocage (32 jours = 15 juin).",
    pitfall: "Calculer l'arrivée à partir de la date de commande plutôt que de la date de mise à disposition. Le fournisseur a un délai de préparation que le transitaire n'inclut pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 8',
    title: 'Demander des cotations comparables au transitaire',
    intro: "Une comparaison n'a de sens que si les deux cotations couvrent le même périmètre. Vous envoyez la même demande pour chaque option. Entrées : poids, volume, nombre de colis, Incoterm retenu, dates.",
    steps: [
      {
        title: 'Envoyez une demande identique pour chaque option',
        actions: [
          "Précisez : origine et destination, nature de la marchandise, 40 colis, 3 200 kg bruts, 9 m³, Incoterm FCA Dubaï, date de mise à disposition.",
          "Demandez pour chaque option : tarif au kg et sur quel poids, frais fixes détaillés, validité de l'offre, délai porte-à-porte avec les ruptures de charge.",
          "Demandez les risques connus sur le corridor et l'état de l'exonération.",
        ],
      },
      {
        title: 'Vérifiez ce que chaque cotation inclut',
        actions: [
          "Posez les deux cotations côte à côte et cochez les postes inclus : pré-acheminement, manutention, documentation, dédouanement de transit, livraison finale.",
          "Demandez par écrit tout poste manquant : sinon vous ajouterez un coût caché plus tard.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Aérien (Dubaï → Entebbe → Juba)', 'Maritime + routier (Dubaï → Mombasa → Juba)'],
      rows: [
        ['Tarif au kg', '4,80 USD/kg', '0,95 USD/kg'],
        ['Frais fixes', '650 USD (manutention, documentation)', '1 400 USD (port + dédouanement Kenya en transit)'],
        ['Délai annoncé porte-à-porte', '6 jours', '32 jours'],
        ['Droits et taxes estimés', '0 USD si exonération confirmée à temps, sinon 1 200 USD', 'Idem'],
        ['Risque corridor signalé', 'Segment routier final à confirmer', 'Blocage de 5 jours à Nadapal le mois dernier'],
      ],
    },
    result: "Deux cotations écrites, comparables, valables jusqu'au 15 mai, avec la liste de ce que chacune inclut.",
    tip: "Demandez au transitaire de confirmer que l'option aérienne inclut bien le segment routier final : l'itinéraire passe par Entebbe, et un segment routier en transit suppose un document de transit à prévoir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 8',
    title: 'Calculer le poids taxable avant de saisir',
    intro: "Le fret aérien ne se facture pas au poids réel mais au poids taxable : le plus élevé entre le poids réel et le poids volumétrique. Saisir le mauvais poids fausse toute la comparaison. Entrées : poids brut et volume de la packing list.",
    steps: [
      {
        title: 'Calculez le poids volumétrique',
        actions: [
          "Poids volumétrique = volume en m³ × 167 kg (équivalent à longueur × largeur × hauteur en cm ÷ 6 000).",
          "Contrôlez avec un carton : 60 × 50 × 75 cm = 225 000 cm³, soit 0,225 m³ ; 40 cartons × 0,225 = 9 m³.",
        ],
      },
      {
        title: 'Retenez le plus élevé',
        actions: [
          "Poids taxable aérien = maximum(poids réel ; poids volumétrique).",
          "Notez la valeur retenue et sa source dans un commentaire : elle ira en colonne C du comparateur.",
        ],
      },
    ],
    table: {
      columns: ['Donnée', 'Calcul', 'Résultat'],
      rows: [
        ['Poids réel', '40 cartons × 80 kg', '3 200 kg'],
        ['Poids volumétrique', '9 m³ × 167 kg/m³', '1 503 kg'],
        ['Poids taxable aérien', 'max(3 200 ; 1 503)', '3 200 kg'],
        ['Maritime groupage', 'Règle 1 tonne = 1 m³ : le plus élevé entre 3,2 t et 9 m³', 'À faire confirmer au transitaire'],
      ],
    },
    result: "Poids taxable de 3 200 kg pour l'aérien : le matériel est dense, le poids réel s'applique. Valeur à saisir en C5 et C6.",
    pitfall: "En maritime groupage, la règle usuelle facture le plus élevé entre le poids en tonnes et le volume en m³. Ici 9 m³ sont supérieurs à 3,2 t : demandez au transitaire sur quelle base les 0,95 USD/kg sont appliqués avant de comparer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 8',
    title: 'Saisir la ligne « Aérien » dans l\'onglet « Comparateur Fret »',
    intro: "L'onglet « Comparateur Fret » comporte 12 colonnes (A à L) et 7 lignes de saisie (lignes 5 à 11). Les lignes 5 et 6 sont pré-remplies avec les données du cas de l'exercice ; les lignes 7 à 11 portent « A COMPLETER ». Sur votre propre envoi, effacez les valeurs d'exemple avant de saisir.",
    steps: [
      {
        title: 'Saisissez les colonnes de la ligne 5',
        actions: [
          "A5 Shipment ID, B5 Mode de transport, C5 Poids (kg), D5 Volume (m3), E5 Tarif au kg (USD), F5 Frais fixes (USD), G5 Delai transit (jours).",
          "I5 Droits/taxes estimes (USD) et J5 Assurance (USD).",
          "Ne touchez pas aux colonnes H, K et L : elles contiennent des formules.",
        ],
      },
      {
        title: 'Ajoutez un commentaire de source sur chaque saisie sensible',
        actions: [
          "Clic droit sur E5 > Nouveau commentaire : « Cotation Nile Gate Logistics du 11/05, valable jusqu'au 15/05 ».",
          "Clic droit sur I5 : « Cas prudent : exonération non confirmée ».",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Colonne', 'Valeur saisie', 'Source'],
      rows: [
        ['A5', 'Shipment ID', 'SSD-2026-007', 'Référence interne de l\'envoi'],
        ['B5', 'Mode de transport', 'Aerien (Dubai-Entebbe-Juba)', 'Cotation du transitaire'],
        ['C5 / D5', 'Poids (kg) / Volume (m3)', '3 200 / 9', 'Packing list, poids taxable étape 3'],
        ['E5 / F5', 'Tarif au kg / Frais fixes (USD)', '4,80 / 650', 'Cotation du transitaire'],
        ['G5', 'Delai transit (jours)', '6', 'Cotation, délai porte-à-porte'],
        ['I5 / J5', 'Droits/taxes / Assurance (USD)', '1 200 / 180', 'Cas prudent / cotation courtier'],
      ],
    },
    result: "La ligne 5 est saisie ; les cellules H5, K5 et L5 se calculent toutes seules.",
    tip: "Gardez la cellule A identique d'une ligne à l'autre pour une même expédition : c'est ce qui permet de filtrer plus tard si vous avez plusieurs envois dans le même fichier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 8',
    title: 'Saisir la ligne « Maritime + routier » avec un délai réaliste',
    intro: "C'est ici que la comparaison se gagne ou se perd. La cotation annonce 32 jours ; le transitaire signale un blocage de 5 jours le mois précédent. Vous ajoutez ce risque en toutes lettres : il n'est pas garanti, mais il est documenté.",
    steps: [
      {
        title: 'Saisissez la ligne 6',
        actions: [
          "A6 SSD-2026-007 ; B6 Maritime + routier (Dubai-Mombasa-Juba) ; C6 3 200 ; D6 9.",
          "E6 0,95 ; F6 1 400 ; I6 1 200 ; J6 180.",
        ],
      },
      {
        title: 'Intégrez le risque dans le délai',
        actions: [
          "En G6, saisissez 37 (32 jours annoncés + 5 jours de blocage documenté).",
          "Clic droit sur G6 > Nouveau commentaire : « 32 j annoncés + 5 j (blocage Nadapal, mois dernier) ».",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Colonne', 'Valeur saisie', 'Source'],
      rows: [
        ['B6', 'Mode de transport', 'Maritime + routier (Dubai-Mombasa-Juba)', 'Cotation du transitaire'],
        ['C6 / D6', 'Poids (kg) / Volume (m3)', '3 200 / 9', 'Packing list'],
        ['E6 / F6', 'Tarif au kg / Frais fixes (USD)', '0,95 / 1 400', 'Cotation (port + dédouanement Kenya en transit)'],
        ['G6', 'Delai transit (jours)', '37', '32 annoncés + 5 de blocage documenté'],
        ['I6 / J6', 'Droits/taxes / Assurance (USD)', '1 200 / 180', 'Cas prudent / cotation courtier'],
      ],
    },
    result: "La ligne 6 reflète le délai réaliste de 37 jours, pas celui de la cotation.",
    pitfall: "Laisser 32 parce que le blocage « n'est pas garanti ». Un délai annoncé est une moyenne optimiste : ne pas intégrer un risque documenté, c'est choisir par défaut la solution qui paraît la moins chère.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 8',
    title: 'Lire les résultats et les vérifier à la main',
    intro: "Le tableau calcule seul le coût transport (H), le coût total livré (K) et le coût par kg livré (L). Vous ne faites jamais confiance à un résultat que vous n'avez pas recalculé au moins une fois. Entrées : lignes 5 et 6 saisies.",
    steps: [
      {
        title: 'Recalculez à la main',
        actions: [
          "H = Poids × Tarif + Frais fixes (la cellule contient =IF(C5=\"\",\"\",C5*E5+F5)).",
          "K = H + Droits/taxes + Assurance. L = K ÷ Poids.",
          "Écrivez les deux résultats sur une feuille avant de comparer avec l'écran.",
        ],
      },
      {
        title: 'Testez la sensibilité à l\'exonération',
        actions: [
          "Remplacez temporairement I5 et I6 par 0 : c'est le cas où l'exonération est confirmée.",
          "Notez le nouvel écart, puis remettez 1 200 : la décision se prend sur le cas prudent.",
        ],
      },
    ],
    table: {
      columns: ['Option', 'H Coût transport', 'K Coût total livré', 'L Coût par kg', 'Délai'],
      rows: [
        ['Aérien', '3 200 × 4,80 + 650 = 16 010', '16 010 + 1 200 + 180 = 17 390', '5,43', '6 j'],
        ['Maritime + routier', '3 200 × 0,95 + 1 400 = 4 440', '4 440 + 1 200 + 180 = 5 820', '1,82', '37 j'],
        ['Écart aérien − maritime', '11 570', '11 570', '3,62', '− 31 j'],
        ['Avec exonération (I = 0)', '—', 'Aérien 16 190 ; maritime 4 620', '—', '—'],
      ],
    },
    result: "Écart de 11 570 USD en faveur de la maritime, qui arrive 31 jours après l'aérien. Le ratio sur le coût total livré est de 3,0, contre 5,05 sur le tarif au kg.",
    tip: "Gardez le calcul à la main dans le dossier d'achat, à côté de la copie du comparateur. Un auditeur peut vouloir vérifier que le fichier n'a pas été retouché.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 8',
    title: 'Tester une option fractionnée sur les lignes 7 et 8',
    intro: "Quand l'écart de coût est élevé, un praticien teste une troisième option : envoyer en aérien le minimum nécessaire pour tenir jusqu'à l'arrivée du reste en maritime. Vous utilisez les lignes libres 7 et 8 (« A COMPLETER »). Entrées : la consommation prévue, les délais de l'étape 5.",
    steps: [
      {
        title: 'Calculez la part à envoyer en aérien',
        actions: [
          "Consommation (Dr Rebecca N.) : 0,7 carton par jour ; 40 cartons couvrent 56 jours.",
          "Couverture à assurer entre la rupture (29/05) et l'arrivée maritime (20/06) : 22 jours × 0,7 = 15,4 cartons ; ajoutez 7 jours de sécurité (4,9 cartons) : 20,3, arrondi à 20 cartons.",
          "20 cartons en aérien (1 600 kg), 20 en maritime (1 600 kg).",
        ],
      },
      {
        title: 'Saisissez les deux lignes et additionnez',
        actions: [
          "Ligne 7 : aérien, 1 600 kg, 4,5 m³, 4,80 USD/kg, 650 USD, 6 jours, droits 600, assurance 90.",
          "Ligne 8 : maritime, 1 600 kg, 4,5 m³, 0,95 USD/kg, 1 400 USD, 37 jours, droits 600, assurance 90.",
          "Additionnez les deux colonnes K à la main (le fichier ne somme pas les lignes).",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'H Transport', 'K Total livré', 'Délai'],
      rows: [
        ['7 — Aérien, 20 cartons', '1 600 × 4,80 + 650 = 8 330', '8 330 + 600 + 90 = 9 020', '6 j'],
        ['8 — Maritime, 20 cartons', '1 600 × 0,95 + 1 400 = 2 920', '2 920 + 600 + 90 = 3 610', '37 j'],
        ['Total option fractionnée', '11 250', '12 630 (économie de 4 760 USD, 27 %)', 'Arrivée du solde le 20/06'],
      ],
    },
    result: "L'option fractionnée coûte 12 630 USD au lieu de 17 390, mais sa couverture se termine le 26 juin pour un solde qui arrive le 20 juin : 6 jours de marge, et zéro si les admissions augmentent de 30 % en juillet.",
    pitfall: "Fractionner sans quantifier la marge restante. Deux expéditions, c'est aussi deux dossiers documentaires, deux dédouanements et deux fois les frais fixes de manutention : une marge de quelques jours ne couvre pas un nouvel incident de frontière.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 8 sur 8',
    title: 'Trancher et rédiger la justification en cinq lignes',
    intro: "La décision suit une règle simple, appliquée dans cet ordre. Elle doit se lire en trente secondes par la coordinatrice pays qui signe. Entrées : le comparateur complété, le calendrier à rebours.",
    steps: [
      {
        title: 'Appliquez la règle de décision',
        actions: [
          "1. Éliminez toute option qui arrive après la date limite avec le délai réaliste.",
          "2. Parmi les options restantes, retenez celle au coût total livré le plus bas.",
          "3. Vérifiez la marge restante : elle doit absorber un incident documenté.",
          "4. Écrivez la décision, avec les chiffres et le risque accepté.",
        ],
      },
      {
        title: 'Rédigez et archivez',
        actions: [
          "Cinq lignes maximum : option retenue, chiffre clé, raison, risque accepté, validation demandée.",
          "Enregistrez le comparateur, ajoutez la justification sous le tableau (ligne 15) ou dans le dossier d'achat, et transmettez à Grace M. pour signature.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — justification en cinq lignes',
      lines: [
        "1. Option retenue : fret aérien Dubaï → Entebbe → Juba, 17 390 USD de coût total livré (K5), arrivée 20 mai.",
        "2. La maritime (5 820 USD) arrive le 20 juin avec le blocage documenté de Nadapal : 25 jours après la date limite du 26 mai.",
        "3. L'option fractionnée (12 630 USD) laisse 6 jours de marge, nulle si les admissions augmentent de 30 % en juillet.",
        "4. Surcoût accepté : 11 570 USD (environ 10 700 EUR) pour éviter une rupture de kits de traitement de la malnutrition sévère.",
        "5. Montant du transport 16 010 USD (≈ 14 800 EUR) : signature coordinatrice pays demandée le 12 mai.",
      ],
    },
    result: "Livrable L2 terminé : comparateur complété, calcul à la main, justification en cinq lignes signée.",
    pitfall: "Justifier par « c'est urgent » sans chiffre. Une décision défendable devant le bailleur contient le coût, le délai, la date limite et le risque accepté.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — FACTURE, PACKING LIST, CERTIFICAT D'ORIGINE (MARDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Ouvrir la checklist et remplir la section 1 « Identification de l\'envoi »',
    intro: "Le template checklist-documents-expedition-internationale.docx contient 6 sections : 1 identification, 2 documents commerciaux, 3 documents de transport, 4 documents douaniers et réglementaires complémentaires, 5 vérification de cohérence, 6 transmission. La section 1 est un tableau à 2 colonnes et 3 lignes de 6 champs.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le template et enregistrez-le sous « SSD-2026-007_Checklist_Documents.docx ».",
          "Lisez la phrase d'objectif : rassembler et vérifier la cohérence de l'ensemble des documents avant transmission, pour éviter tout blocage évitable au dédouanement.",
        ],
      },
      {
        title: 'Remplissez les six champs',
        actions: [
          "Placez le curseur à la fin du libellé de la cellule, appuyez sur Entrée et saisissez la valeur.",
          "Utilisez les mots exacts du devis révisé et de la PO pour la description et l'Incoterm : le même libellé servira à comparer les autres documents.",
        ],
      },
    ],
    table: {
      columns: ['Champ du template', 'Valeur saisie (Kerowa)'],
      rows: [
        ['Shipment ID', 'SSD-2026-007'],
        ['Fournisseur / pays d\'origine', 'Dunes Medical Supplies FZE — Émirats arabes unis (Dubaï)'],
        ['Description marchandise', '800 kits de traitement de la malnutrition sévère — 40 cartons — 3 200 kg bruts — 9 m³'],
        ['Incoterm convenu', 'FCA Dubaï, Incoterms 2020, lieu nommé : entrepôt de l\'agent de Nile Gate Logistics'],
        ['Date de départ prévue', 'Jeudi 14 mai 2026'],
        ['Destination finale', 'Pharmacie centrale Kerowa Santé, Juba (Soudan du Sud)'],
      ],
    },
    result: "La section 1 est remplie avec les mots du devis révisé. Elle servira de référence pour comparer tous les autres documents.",
    pitfall: "Écrire une description générique (« matériel médical ») : un document dont la description diffère du libellé de la facture est un document non concordant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Demander la facture commerciale et la packing list avec un cahier des exigences',
    intro: "Ces deux documents sont la base de tout le dossier. Vous ne laissez pas le fournisseur décider de leur contenu : vous lui dites ce qu'ils doivent contenir, et vous demandez les deux ensemble.",
    steps: [
      {
        title: 'Listez ce que chaque document doit porter',
        actions: [
          "Facture commerciale : vendeur, acheteur (nom exact), n° et date, Incoterm et lieu nommé, description, code SH, quantité, prix unitaire, total, devise, pays d'origine, conditions de paiement.",
          "Packing list : numéro de chaque colis, contenu par colis, quantités, poids net et poids brut séparés, dimensions, volume total, marques.",
          "Demandez que les deux documents portent le même numéro de référence et la même description, mot pour mot.",
        ],
      },
      {
        title: 'Envoyez la demande avec accusé de réception',
        actions: [
          "Un seul message pour les deux documents, avec une date limite : au plus tard la veille de la remise au transporteur.",
          "Mettez en copie le transitaire : il confirmera ce que la douane de destination exige.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — message du mardi 12 mai, 16 h',
      lines: [
        "Objet : SSD-2026-007 — PO-2026-031 — facture commerciale et packing list.",
        "« Bonjour M. Karim S., merci de nous transmettre avant mercredi 13 mai 12 h la facture commerciale et la packing list de l'envoi, dans les formats suivants. »",
        "« Facture : Incoterm FCA Dubai (lieu nommé convenu), code SH, pays de fabrication des kits, 800 kits, 54 500 USD. Packing list : numéro de chaque carton, poids net et brut séparés, dimensions, 9 m³. »",
        "« Les deux documents doivent porter la même description, mot pour mot : 800 kits de traitement de la malnutrition sévère. Merci d'accuser réception. »",
      ],
    },
    result: "La demande est partie avec échéance. Le fournisseur sait précisément ce qu'on attend de chaque document.",
    tip: "Joignez un modèle rempli d'une précédente expédition : un fournisseur qui voit le résultat attendu fait moins d'erreurs qu'un fournisseur qui lit une liste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Contrôler la cohérence chiffre par chiffre : le tableau de rapprochement',
    intro: "Vous faites ce contrôle vous-même, dès réception, sans faire confiance au fournisseur par défaut. Une divergence entre facture et packing list, même mineure, même une simple différence d'unité, est la cause la plus fréquente de blocage au dédouanement.",
    steps: [
      {
        title: 'Construisez le tableau de rapprochement',
        actions: [
          "Créez un tableau : Contrôle | Facture | Packing list | Verdict.",
          "Une ligne par donnée : quantité, nombre de colis, description, poids, volume, Incoterm, valeur, origine.",
          "Recopiez chaque valeur telle qu'elle est écrite sur le document, avec son unité.",
        ],
      },
      {
        title: 'Rendez un verdict ligne par ligne',
        actions: [
          "OK si les valeurs sont identiques, avec la même unité.",
          "Écart si elles diffèrent ou si l'une manque : notez l'écart et l'action.",
          "Comptez les écarts : un seul écart non résolu interdit la transmission du dossier.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Facture INV-DM-2026-1187', 'Packing list PL-DM-2026-1187', 'Verdict'],
      rows: [
        ['Quantité', '800 kits', '800 kits (40 × 20)', 'OK'],
        ['Nombre de colis', '40 cartons', '40 cartons', 'OK'],
        ['Description', 'Therapeutic treatment kits SAM', 'SAM treatment kits', 'Écart : harmoniser mot pour mot'],
        ['Poids', '2 960 kg (sans précision)', '3 200 kg (brut)', 'Écart : net et brut non distingués'],
        ['Volume', 'Non mentionné', '9 m³', 'OK (volume sur la PL)'],
        ['Incoterm', 'FOB Dubai', 'Non applicable', 'Écart : la PO dit FCA Dubai'],
        ['Valeur', '54 500 USD', 'Non applicable', 'OK (égale à la PO)'],
        ['Origine déclarée', 'UAE (pays d\'expédition)', 'Non applicable', 'Écart : pays de fabrication attendu'],
      ],
    },
    result: "4 écarts sur 8 contrôles, tous corrigeables avant la remise au transporteur. Sans ce contrôle, la douane de Juba les aurait découverts à l'arrivée.",
    pitfall: "Penser qu'un poids de 2 960 kg contre 3 200 kg est un détail. Pour la douane, c'est un doute sur la sincérité de la déclaration : inspection, retard, parfois amende.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Faire corriger les documents par le fournisseur et conserver les versions',
    intro: "Vous ne corrigez jamais vous-même un document émis par le fournisseur : vous demandez une nouvelle version, qui remplace l'ancienne. Vous gardez les deux versions dans le dossier.",
    steps: [
      {
        title: 'Envoyez la liste des corrections',
        actions: [
          "Un message avec le tableau de rapprochement en pièce jointe : chaque écart, la valeur attendue et le document à réémettre.",
          "Précisez l'heure limite et que le départ est conditionné à la version corrigée.",
        ],
      },
      {
        title: 'Gérez les versions',
        actions: [
          "Rangez les documents reçus en v1 dans le sous-dossier SOURCE, sans les modifier.",
          "Nommez les nouvelles versions v2 avec la date de réception ; refaites le tableau de rapprochement sur les v2.",
          "Archivez le message de demande et la réponse : c'est la preuve que l'écart a été traité.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — corrections demandées le 12 mai à 18 h, reçues le 13 mai à 11 h',
      lines: [
        "Description alignée sur les deux documents : « 800 kits de traitement de la malnutrition sévère ».",
        "Poids : net 2 960 kg et brut 3 200 kg, sur la facture et sur la packing list.",
        "Incoterm : FCA Dubai (lieu nommé) sur la facture ; pays d'origine : Inde (pays de fabrication des kits).",
        "Rapprochement refait sur les v2 : 8 contrôles OK. Les v1 restent dans SOURCE.",
      ],
    },
    result: "Les v2 de la facture et de la packing list sont concordantes sur les 8 contrôles. Livrable L3 terminé.",
    pitfall: "Corriger vous-même une quantité ou un poids avec un tableur ou un PDF éditable : c'est une altération de document. Seul l'émetteur réédite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Obtenir le certificat d\'origine si le régime de destination l\'exige, et remplir la section 2',
    intro: "Certains pays exigent un certificat d'origine pour appliquer un régime préférentiel ou pour instruire une demande d'exonération. Vous le découvrez en amont, avec le transitaire ou le point focal, pas au moment du dédouanement.",
    steps: [
      {
        title: 'Posez trois questions avant de demander le document',
        actions: [
          "Au transitaire ou au point focal : le certificat d'origine est-il exigé pour la demande d'exonération ou pour le régime appliqué ?",
          "Quelle autorité doit l'émettre, et faut-il une légalisation ou un visa ?",
          "Combien de jours faut-il compter pour l'obtenir : c'est ce délai qui commande la date de départ.",
        ],
      },
      {
        title: 'Demandez-le au fournisseur et renseignez la section 2',
        actions: [
          "Rappelez que le certificat atteste le pays de fabrication, pas le pays d'expédition : un fournisseur qui réexporte depuis Dubaï doit indiquer le pays où les kits ont été fabriqués.",
          "Dans le tableau de la section 2, complétez pour chaque ligne : Statut (Obtenu / En attente / Non applicable), Date obtention, Remarques.",
        ],
      },
    ],
    table: {
      columns: ['Document', 'Statut', 'Date obtention', 'Remarques'],
      rows: [
        ['Facture commerciale (commercial invoice)', 'Obtenu', '13/05/2026', 'v2 corrigée, FCA Dubai, origine Inde'],
        ['Liste de colisage (packing list)', 'Obtenu', '13/05/2026', 'v2, poids net 2 960 / brut 3 200 kg, 9 m³'],
        ['Certificat d\'origine', 'Obtenu', '13/05/2026', 'Exigé pour la demande d\'exonération ; pays de fabrication Inde'],
      ],
    },
    result: "La section 2 est complétée : trois documents commerciaux obtenus, concordants et datés.",
    tip: "Si le certificat prend plus de temps que prévu, ne reportez pas le départ sans avoir demandé au transitaire s'il peut être transmis à l'agent en destination après le départ : c'est parfois accepté pour l'exonération, jamais pour la facture ni la packing list.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — LE DOCUMENT DE TRANSPORT (MARDI APRÈS-MIDI, MERCREDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Identifier le document de transport selon le mode retenu et son émetteur',
    intro: "Le document de transport est délivré par le transporteur une fois la marchandise prise en charge. Vous devez savoir à l'avance quel document sera émis, par qui, quand, et ce que vous en ferez. Entrées : le mode retenu à la procédure 2, la cotation du transitaire.",
    steps: [
      {
        title: 'Reliez le mode à son document',
        actions: [
          "Aérien : Lettre de Transport Aérien (LTA, en anglais AWB). Maritime : Bill of Lading (BL). Routier : CMR.",
          "Demandez au transitaire s'il émet sa propre LTA (house) en plus de celle de la compagnie (master), et lequel vous recevrez.",
        ],
      },
      {
        title: 'Fixez le calendrier d\'émission',
        actions: [
          "Demandez la date à laquelle le document sera émis : en aérien, à la remise du fret ; en maritime, après chargement à bord.",
          "Demandez le brouillon (draft) au moins 24 heures avant l'émission pour le contrôler.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — réponse d\'Ahmed R., 12 mai',
      lines: [
        "Mode retenu : aérien Dubaï (DXB) → Entebbe (EBB), puis route jusqu'à Juba.",
        "Document : LTA house émise par Nile Gate Logistics, référencée sur la LTA master de la compagnie ; émission le jeudi 14 mai à la remise des 40 cartons.",
        "Brouillon de la LTA house envoyé le mercredi 13 mai à 14 h pour contrôle.",
        "Le segment routier final est couvert par la LTA house ; le transitaire confirmera le document de transit.",
      ],
    },
    result: "Vous savez quel document sera émis, par qui, quand, et vous avez demandé le brouillon.",
    pitfall: "Découvrir à l'arrivée qu'il manquait le document ou que l'original n'a pas été envoyé : le document de transport est celui que l'on réclame en premier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Contrôler le brouillon avant l\'émission',
    intro: "Un document de transport est un contrat : une fois émis, le corriger coûte du temps et parfois de l'argent. Vous contrôlez le brouillon contre la facture et la packing list v2, mention par mention.",
    steps: [
      {
        title: 'Faites la liste des mentions à contrôler',
        actions: [
          "Expéditeur (shipper), consignataire (consignee), partie à notifier (notify party).",
          "Description de la marchandise, nombre de colis, poids brut, volume.",
          "Aéroports de départ et d'arrivée, Incoterm, mention du fret.",
        ],
      },
      {
        title: 'Comparez avec les documents v2',
        actions: [
          "Pour chaque mention, écrivez la valeur du brouillon et la valeur de référence.",
          "Écrivez OK ou la correction demandée. Renvoyez le tableau au transitaire avant l'heure de remise.",
        ],
      },
    ],
    table: {
      columns: ['Mention', 'Brouillon LTA house', 'Référence (v2, PO)', 'Verdict'],
      rows: [
        ['Expéditeur', 'Dunes Medical Supplies FZE', 'Dunes Medical Supplies FZE', 'OK'],
        ['Consignataire', 'Kerowa Sante, Juba', 'Kerowa Santé South Sudan, Juba (nom de l\'exonération)', 'Corriger : nom exact'],
        ['Partie à notifier', 'Vide', 'Nile Gate Logistics, Juba', 'Corriger : ajouter'],
        ['Description', '800 kits de traitement de la malnutrition sévère', 'Idem', 'OK'],
        ['Colis / poids brut', '40 / 3 120 kg', '40 / 3 200 kg', 'Corriger : 3 200 kg'],
        ['Volume / trajet', '9 m³ / DXB – EBB, puis route Juba', '9 m³ / idem', 'OK'],
      ],
    },
    result: "Trois corrections demandées avant l'émission : consignataire, partie à notifier, poids. La LTA sortira conforme à la facture et à la packing list.",
    pitfall: "Accepter un consignataire écrit approximativement. À l'arrivée, l'agent de Juba doit prouver que Kerowa est bien le destinataire : un nom différent de celui de l'exonération bloque la procédure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Variante maritime : fixer le type de BL, original ou telex release, très tôt',
    intro: "Si la maritime avait été retenue, la question la plus dangereuse serait celle-ci : comment le Bill of Lading arrive-t-il à Juba ? Sans BL original ou copie autorisée, la marchandise arrivée au port reste bloquée. Entrées : le choix du mode, la cotation maritime, le délai de courrier.",
    steps: [
      {
        title: 'Demandez au transitaire quel type de BL sera émis',
        actions: [
          "Original (en général 3 exemplaires) à faire parvenir physiquement au destinataire : titre de propriété.",
          "Telex release : l'expéditeur remet les originaux au transporteur à l'origine et autorise la libération par voie électronique.",
          "Sea waybill : document non négociable, sans original à présenter.",
        ],
      },
      {
        title: 'Choisissez avec le calendrier',
        actions: [
          "Comparez le délai de courrier des originaux (jours) au délai restant avant l'arrivée du navire.",
          "Décidez avec le transitaire et le fournisseur ; écrivez la décision dans le message de transport.",
        ],
      },
    ],
    table: {
      columns: ['Type de BL', 'Délai de mise à disposition', 'Risque principal', 'Décision (variante Kerowa)'],
      rows: [
        ['Original', 'Courrier express Dubaï → Juba : 5 à 7 jours', 'Perte, retard : marchandise bloquée', 'Écarté'],
        ['Telex release', 'Immédiat après paiement du fret et remise des originaux au transporteur', 'Exige la confiance entre fournisseur et transitaire', 'Retenu'],
        ['Sea waybill', 'Immédiat, aucun original', 'Perte de la garantie de titre pour le vendeur : le vendeur peut refuser', 'Option si le vendeur accepte'],
      ],
    },
    result: "Dans la variante maritime, le type de BL aurait été fixé le jour de la commande : telex release, avec confirmation écrite du fournisseur.",
    tip: "Même si vous voyagez en aérien cette fois, gardez ce raisonnement : il vaut pour tous vos envois maritimes, qui sont les plus nombreux sur le fret lourd.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Renseigner la section 3 de la checklist pour le document de transport',
    intro: "La section 3 de la checklist comporte deux lignes, avec les mêmes 4 colonnes que la section 2 : le document de transport et le certificat d'assurance. Vous mettez à jour la première ligne à chaque jalon.",
    steps: [
      {
        title: 'Renseignez la ligne « Document de transport »',
        actions: [
          "Colonne Statut : En attente tant que la LTA n'est pas émise ; Obtenu dès que vous avez le document signé ou le numéro confirmé.",
          "Colonne Date obtention : la date d'émission réelle.",
          "Colonne Remarques : le type de document, le numéro, les corrections demandées.",
        ],
      },
      {
        title: 'Archivez',
        actions: [
          "Renommez le fichier « SSD-2026-007_LTA_house_2026-05-14.pdf » et rangez-le dans le dossier.",
          "Gardez le brouillon contrôlé à côté : il prouve ce qui a été corrigé.",
        ],
      },
    ],
    table: {
      columns: ['Document', 'Statut', 'Date obtention', 'Remarques'],
      rows: [
        ['Document de transport (Bill of Lading / LTA / CMR selon mode)', 'Obtenu', '14/05/2026', 'LTA house Nile Gate Logistics, 3 corrections du brouillon intégrées ; n° LTA master reporté pour le suivi'],
      ],
    },
    result: "La ligne « Document de transport » est à jour. Le suivi de l'envoi peut utiliser le numéro de la LTA master.",
    pitfall: "Cocher « Obtenu » sur une copie de brouillon. Le statut ne passe à Obtenu que sur le document définitif, daté du jour de l'émission.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — LA LETTRE DE VOITURE (WAYBILL) DU SEGMENT KEROWA
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 7',
    title: 'Décider si une lettre de voiture Kerowa est nécessaire et préparer le fichier',
    intro: "Le document de transport officiel (LTA, BL, CMR) est émis par le transporteur international. Mais dans plusieurs situations concrètes, c'est votre organisation qui établit sa propre lettre de voiture. Le template lettre-de-voiture-waybill.xlsx comporte une feuille « Lettre de voiture » de 7 colonnes (A à G).",
    steps: [
      {
        title: 'Identifiez les cas où vous l\'établissez',
        actions: [
          "Votre organisation organise un segment terrestre avec son propre parc de véhicules.",
          "Elle transfère la marchandise à un partenaire local avant que le document de transport officiel ne soit arrivé.",
          "Un transporteur local sans document normalisé prend la marchandise en charge.",
        ],
      },
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le template et enregistrez-le sous « WB-2026-014_Juba-Gudele.xlsx ».",
          "Lisez la structure : parties prenantes (ligne 10), détail de la marchandise (lignes 17 à 29), totaux (ligne 30), prise en charge (lignes 32 à 35), réception (lignes 37 à 40), signatures (lignes 42 et 43), légende (ligne 45).",
          "Adoptez une numérotation : WB-année-numéro, un numéro par rotation.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — le segment qui exige une lettre de voiture',
      lines: [
        "Après dédouanement le 20 mai, 8 cartons des 40 sont répartis vers un centre de santé partenaire de Gudele, à Juba, avec un pick-up Kerowa, le vendredi 22 mai.",
        "Kerowa organise le transport avec son propre véhicule et remet la marchandise à un partenaire : les deux conditions sont réunies.",
        "Numéro retenu : WB-2026-014.",
      ],
    },
    result: "Le fichier est ouvert, nommé, et vous savez dans quelles zones vous allez saisir.",
    tip: "Une lettre de voiture par rotation et par destinataire : ne regroupez jamais deux destinataires sur la même lettre, vous ne sauriez plus qui a signé quoi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 7',
    title: 'Renseigner l\'en-tête : numéro, date, mode, véhicule, lieu de prise en charge',
    intro: "L'en-tête identifie la lettre de voiture de façon unique. Le moindre champ vide ou ambigu se retrouve en litige quand quelqu'un conteste ce qui a été remis.",
    steps: [
      {
        title: 'Saisissez les champs de l\'en-tête',
        actions: [
          "Nombre de pages (B4) : 1 si le détail tient sur une page ; sinon indiquez le total.",
          "Numéro (B6) et Date de livraison prévue (E6).",
          "Mode de transport (B7), Immatriculation du véhicule (E7), Lieu de prise en charge (B8).",
        ],
      },
    ],
    table: {
      columns: ['Champ', 'Cellule', 'Valeur saisie (Kerowa)'],
      rows: [
        ['Nombre de pages', 'B4', '1'],
        ['Numéro', 'B6', 'WB-2026-014'],
        ['Date de livraison prévue', 'E6', '22/05/2026'],
        ['Mode de transport', 'B7', 'Route, pick-up Kerowa'],
        ['Immatriculation du véhicule', 'E7', 'KS-04-JUB (fictif)'],
        ['Lieu de prise en charge', 'B8', 'Pharmacie centrale Kerowa Santé, Juba'],
      ],
    },
    result: "L'en-tête est complet : numéro unique, date, véhicule identifiable, lieu de prise en charge précis.",
    pitfall: "Laisser l'immatriculation vide « parce qu'on ne sait pas encore quel véhicule ». Le véhicule s'écrit à la prise en charge, pas après l'incident.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 7',
    title: 'Renseigner les trois parties prenantes',
    intro: "Trois blocs côte à côte : expéditeur (colonnes B-C), transporteur (D-E), destinataire (F-G), avec trois lignes chacun : nom et adresse (ligne 12), personne contact (ligne 13), téléphone (ligne 14).",
    steps: [
      {
        title: 'Remplissez chaque bloc',
        actions: [
          "Nom et adresse : le nom exact de l'organisation et un lieu précis, jamais seulement « Juba ».",
          "Personne contact : une personne nommée, joignable pendant le transport.",
          "Téléphone : un numéro actif, vérifié par un appel avant le départ.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Expéditeur', 'Transporteur', 'Destinataire'],
      rows: [
        ['Nom et adresse (12)', 'Kerowa Santé — pharmacie centrale, Juba', 'Kerowa Santé — parc véhicules, Juba', 'Centre de santé partenaire de Gudele, Juba'],
        ['Personne contact (13)', 'Hawa L., pharmacienne', 'Moses D., chauffeur', 'Sr Mary A., infirmière responsable'],
        ['Téléphone (14)', '+211 9xx xxx xxx (fictif)', '+211 9xx xxx xxx (fictif)', '+211 9xx xxx xxx (fictif)'],
      ],
    },
    result: "Trois parties identifiées, chacune avec un contact joignable.",
    tip: "Vérifiez le téléphone du destinataire par un appel avant le départ : un destinataire injoignable est la première cause de camion qui attend ou qui rentre avec la marchandise.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 7',
    title: 'Détailler la marchandise (lignes 18 à 29) et les totaux (ligne 30)',
    intro: "Le tableau de détail comporte 12 lignes de saisie. Colonnes : Référence commande (A), Quantité (B), Description (C-D), Destination (E-F), Commentaires (G). Les totaux de la ligne 30 sont le poids total en kg et le volume total.",
    steps: [
      {
        title: 'Saisissez une ligne par référence de commande',
        actions: [
          "Reprenez la référence de la PO et la description exacte de la packing list v2.",
          "Quantité : le nombre de colis, avec l'unité.",
          "Commentaires : numéros de colis et consignes de manutention.",
        ],
      },
      {
        title: 'Calculez les totaux depuis la packing list',
        actions: [
          "Poids total = nombre de colis × poids brut par colis (8 × 80 = 640 kg).",
          "Volume total = nombre de colis × volume par colis (8 × 0,225 = 1,8 m³).",
          "Saisissez-les en B30 et E30 (poids en kg ; volume en m³).",
        ],
      },
    ],
    table: {
      columns: ['Réf. commande (A)', 'Quantité (B)', 'Description (C-D)', 'Destination (E-F)', 'Commentaires (G)'],
      rows: [
        ['PO-2026-031', '8 cartons', '160 kits de traitement de la malnutrition sévère', 'Centre de santé de Gudele, Juba', 'Cartons n° 1 à 8 ; à conserver au sec, à l\'ombre'],
      ],
    },
    result: "Ligne 18 saisie ; B30 = 640 kg, E30 = 1,8 m³. Les chiffres se retrouvent sur la packing list v2 (8 cartons de 80 kg et 0,225 m³).",
    pitfall: "Écrire « 8 colis de matériel médical » : une description floue ne permet pas de prouver, en cas de litige, ce qui a réellement été remis.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 7',
    title: 'Prise en charge : réserves et observations du transporteur (lignes 33 à 35)',
    intro: "La zone « Prise en charge — réserves et observations du transporteur » est un grand champ fusionné (A33:G35). Elle se remplit au moment même de la prise en charge, avec le chauffeur et l'expéditeur, jamais a posteriori.",
    steps: [
      {
        title: 'Faites le contrôle contradictoire',
        actions: [
          "Comptez les cartons avec le chauffeur : 8 sur 8.",
          "Vérifiez l'état de chaque carton (coins, sangles, étiquettes) et les conditions de chargement (arrimage, protection contre la pluie).",
          "Prenez une photo de chaque anomalie avec la date visible.",
        ],
      },
      {
        title: 'Écrivez ce que vous constatez',
        actions: [
          "Une ligne par constat, avec le numéro de colis. Si rien n'est constaté, écrivez « Néant — comptage contradictoire 8/8, emballages intacts » : jamais une zone vide.",
          "Faites lire la zone au chauffeur avant de signer.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — zone remplie le 22 mai à 8 h 10',
      lines: [
        "Comptage contradictoire : 8 cartons sur 8 chargés.",
        "Carton n° 5 : coin inférieur écrasé, emballage intérieur intact, contenu non ouvert (photo 5-A).",
        "Chargement : cartons protégés par bâche, arrimage par sangles contrôlé par le chauffeur.",
      ],
    },
    result: "L'état de la marchandise à la prise en charge est écrit, signé et photographié. Un dommage constaté ici est imputé à l'amont du transport, pas au transporteur.",
    pitfall: "Écrire « Néant » sans compter. La réserve non mentionnée à la prise en charge ne peut plus être opposée : l'absence de réserve vaut acceptation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 7',
    title: 'Faire signer les trois parties et répartir les exemplaires',
    intro: "La ligne 43 comporte une zone « Date et signature » pour chaque partie : expéditeur (B43:C43), transporteur (D43:E43), destinataire (F43:G43). La légende (ligne 45) précise que le document est établi en autant d'exemplaires que de parties.",
    steps: [
      {
        title: 'Faites signer à la prise en charge',
        actions: [
          "Imprimez 3 exemplaires. L'expéditeur et le transporteur datent et signent avant le départ.",
          "Faites signer le destinataire à son tour à l'arrivée. Sa signature est la dernière.",
        ],
      },
      {
        title: 'Répartissez les exemplaires',
        actions: [
          "Exemplaire 1 : l'expéditeur. Exemplaire 2 : le transporteur (il voyage avec la marchandise). Exemplaire 3 : le destinataire.",
          "Scannez les trois exemplaires signés le jour même et rangez-les dans le dossier SSD-2026-007.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — signatures du 22 mai',
      lines: [
        "B43 Hawa L., 22/05/2026 8 h 15. D43 Moses D., 22/05/2026 8 h 15.",
        "F43 Sr Mary A., 22/05/2026 10 h 40 (à l'arrivée).",
        "Exemplaires : 1 pharmacie, 2 chauffeur, 3 centre de santé ; scan envoyé à Peter A. avec le GRN.",
      ],
    },
    result: "Trois signatures datées, trois exemplaires répartis, une copie scannée au dossier.",
    pitfall: "Accepter une confirmation orale (« c'est bon, on a reçu ») au lieu de la signature. C'est la trace signée, pas la parole, qui protège l'organisation en cas de litige.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 7',
    title: 'À la réception : constater réserves et dommages, puis clôturer',
    intro: "La zone « Réception — réserves et dommages (n° de colis) » (A38:G40) se remplit à l'arrivée, devant le chauffeur. Elle se remplit avec le numéro de chaque colis concerné.",
    steps: [
      {
        title: 'Contrôlez à l\'arrivée',
        actions: [
          "Comptez les cartons, vérifiez l'état de chacun et comparez avec la zone de prise en charge.",
          "Écrivez en face de chaque colis concerné : son numéro, la nature du dommage et sa conséquence sur le contenu.",
        ],
      },
      {
        title: 'Clôturez',
        actions: [
          "Si un dommage est nouveau, notez-le en réserve, photographiez-le et informez l'expéditeur le jour même.",
          "Faites signer le destinataire, scannez les trois exemplaires et rangez-les dans le dossier. Joignez un constat de dommage à l'assurance si le dommage engage le contenu.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — zone « Réception » remplie le 22 mai à 10 h 40',
      lines: [
        "8 cartons reçus sur 8. Carton n° 5 : coin écrasé déjà mentionné à la prise en charge, contenu vérifié : 20 kits sur 20, emballages intérieurs intacts.",
        "Aucun autre dommage. Pas de réserve nouvelle ; pas de déclaration d'avarie.",
        "Signature du destinataire : Sr Mary A., 22/05/2026 10 h 40.",
      ],
    },
    result: "Livrable L5 terminé : lettre de voiture signée par les trois parties, réserves tracées, copie au dossier.",
    tip: "Quand un dommage apparaît à la réception et pas à la prise en charge, le transporteur en est présumé responsable : c'est pourquoi la zone de prise en charge doit être remplie avec rigueur.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — L'ASSURANCE TRANSPORT (MERCREDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Déterminer qui doit assurer d\'après l\'Incoterm convenu',
    intro: "L'assurance n'est obligatoire dans aucun Incoterm sauf CIF et CIP, où le vendeur doit en souscrire une. Dans tous les autres cas, personne n'est tenu de vous assurer : si vous portez le risque, c'est à vous de le couvrir. Entrées : l'Incoterm de la PO, le tableau « Qui fait quoi ».",
    steps: [
      {
        title: 'Lisez la ligne « Assurance transport » de votre Incoterm',
        actions: [
          "Repérez qui porte le risque pendant le transport principal : après le point de transfert, c'est vous.",
          "Si l'Incoterm est CIF ou CIP, notez le niveau minimal imposé (clauses C en CIF, clauses A en CIP).",
        ],
      },
      {
        title: 'Décidez et agissez avant la remise de la marchandise',
        actions: [
          "Écrivez qui assure (vous ou le vendeur) et à partir de quel moment la couverture doit être active.",
          "Informez le courtier ou l'assureur avant la remise au transporteur : une marchandise partie sans déclaration n'est pas couverte.",
        ],
      },
    ],
    table: {
      columns: ['Incoterm', 'Qui doit assurer', 'Niveau minimal'],
      rows: [
        ['EXW, FCA, FOB, DAP, DPU, DDP', 'Aucune obligation du vendeur ; vous assurez ce que vous portez', 'Au choix, recommandé : clauses A'],
        ['CFR, CPT', 'Aucune obligation du vendeur', 'Au choix, recommandé : clauses A'],
        ['CIF', 'Vendeur', 'Clauses C (minimales)'],
        ['CIP', 'Vendeur', 'Clauses A (tous risques, version 2020)'],
      ],
    },
    example: {
      title: 'Kerowa — FCA Dubaï : le risque est chez Kerowa dès la remise',
      lines: [
        "Décision : Kerowa assure, au titre de sa police ouverte avec le courtier (couverture A).",
        "Action : Joseph K. déclare l'expédition SSD-2026-007 au courtier le mercredi 13 mai, avant la remise du jeudi 14 mai à 8 h 30.",
      ],
    },
    result: "Vous savez qui assure, à partir de quand, et la déclaration est partie avant la remise.",
    pitfall: "Penser que la responsabilité du transporteur ou du transitaire remplace une assurance. Elle est plafonnée, soumise à conditions et à preuves : elle ne couvre pas la valeur réelle dans tous les cas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Calculer la valeur assurée et contrôler la prime',
    intro: "Une assurance calculée sur la seule valeur de la marchandise laisse le fret et les frais non couverts. La pratique usuelle (base CIF ou CIP) majore la valeur de 10 % et inclut le fret. Entrées : la facture v2, le montant du fret retenu.",
    steps: [
      {
        title: 'Calculez la valeur assurée',
        actions: [
          "Valeur marchandise (facture) + fret retenu = valeur CIP.",
          "Valeur assurée = valeur CIP × 1,10.",
        ],
      },
      {
        title: 'Rapprochez de la cotation',
        actions: [
          "Demandez au courtier le montant assuré, le taux et la prime pour la valeur calculée.",
          "Comparez la prime à la colonne J du comparateur : elle doit être identique ; sinon mettez le comparateur à jour avant décision.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Calcul', 'Montant (USD)'],
      rows: [
        ['Valeur facture (54 500) + fret aérien (16 010)', '54 500 + 16 010', '70 510'],
        ['Valeur assurée (+ 10 %)', '70 510 × 1,10', '77 561'],
        ['Prime cotée', 'Cotation du courtier ; taux ≈ 0,23 %', '180'],
        ['Valeur non couverte si on assure 110 % de la facture seule', '77 561 − 59 950', '17 611'],
      ],
    },
    result: "Valeur assurée de 77 561 USD, prime de 180 USD égale à la colonne J du comparateur.",
    tip: "Gardez dans le dossier la cotation écrite du courtier, avec la base de calcul. En cas de sinistre, c'est elle qui prouve que la valeur déclarée était la bonne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Vérifier le niveau réel de couverture, point par point',
    intro: "Vérifier qu'une police existe ne suffit pas : c'est son contenu qui vous couvrira ou pas. Vous demandez au courtier les conditions écrites et vous contrôlez huit points.",
    steps: [
      {
        title: 'Faites la liste des huit points',
        actions: [
          "Niveau de clauses : A, B ou C.",
          "Période couverte : de la remise à Dubaï jusqu'à la livraison à la pharmacie de Juba, segment routier compris.",
          "Assuré et bénéficiaire : Kerowa Santé, avec le nom exact.",
          "Valeur et devise assurées. Franchise. Exclusions (emballage insuffisant, retard).",
          "Extensions guerre, grèves, troubles civils : à confirmer pour le Soudan du Sud.",
          "Délai pour déclarer un sinistre et pièces exigées.",
        ],
      },
      {
        title: 'Jugez chaque point',
        actions: [
          "Notez pour chaque point : conforme, à clarifier ou inacceptable.",
          "Demandez par écrit au courtier de confirmer chaque point « à clarifier » avant la remise.",
        ],
      },
    ],
    table: {
      columns: ['Point', 'Condition relevée (police ouverte Kerowa)', 'Verdict'],
      rows: [
        ['Niveau de clauses', 'Clauses A (tous risques)', 'Conforme'],
        ['Période', 'De la remise à Dubaï à la livraison pharmacie Juba, route comprise', 'Conforme'],
        ['Valeur assurée', '77 561 USD en dollars', 'Conforme'],
        ['Franchise', '0,5 % de la valeur assurée, soit 388 USD', 'Acceptable'],
        ['Guerre, grèves, troubles civils', 'Extension non mentionnée', 'À clarifier : demande écrite'],
        ['Délai de déclaration de sinistre', '3 jours pour dommage apparent', 'À noter dans la procédure de réception'],
      ],
    },
    result: "Cinq points sur six conformes ou acceptables ; un point (extension guerre et troubles civils) demandé par écrit au courtier avant la remise.",
    pitfall: "Se contenter d'un « oui, vous êtes couverts » du courtier. Demandez un certificat portant la mention des clauses, des valeurs et de la période : une promesse verbale ne permet aucune réclamation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Obtenir le certificat, renseigner la section 3 et préparer la réclamation',
    intro: "Le certificat d'assurance est le document qui permet d'engager une réclamation. Vous le mettez dans le dossier et vous préparez, dès maintenant, ce que vous ferez si un dommage apparaît.",
    steps: [
      {
        title: 'Renseignez la ligne « Certificat d\'assurance transport »',
        actions: [
          "Statut : Obtenu dès réception du certificat signé ; Date obtention ; Remarques (clauses, valeur, période, réserves du courtier).",
          "Renommez le PDF « SSD-2026-007_Certificat_assurance_2026-05-13.pdf ».",
        ],
      },
      {
        title: 'Écrivez le plan de réclamation avant d\'en avoir besoin',
        actions: [
          "Dommage constaté à l'arrivée : réserve écrite sur le document de réception, photos, ne pas détruire l'emballage.",
          "Prévenez le courtier dans le délai de la police (3 jours pour dommage apparent) et envoyez : certificat, facture, packing list, document de transport, constat.",
          "Informez le transporteur par écrit dans son propre délai de réclamation.",
        ],
      },
    ],
    table: {
      columns: ['Document', 'Statut', 'Date obtention', 'Remarques'],
      rows: [
        ['Certificat d\'assurance transport', 'Obtenu', '13/05/2026', 'Clauses A, 77 561 USD, de la remise Dubaï à la livraison Juba ; extension guerre et troubles confirmée par écrit le 13/05'],
      ],
    },
    result: "Livrable L6 terminé : certificat au dossier, ligne de la section 3 à jour, plan de réclamation écrit.",
    tip: "Affichez le plan de réclamation dans la pharmacie de Juba : la personne qui réceptionne est celle qui peut sauver le recours.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — DOCUMENTS DOUANIERS ET DOSSIER COMPLET (MERCREDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Identifier les documents douaniers et réglementaires propres à la destination',
    intro: "Les documents spécifiques au pays de destination sont ceux qui bloquent le plus longtemps parce qu'ils dépendent d'une administration. Vous les identifiez en amont, avec le transitaire local et le point focal ONG, jamais au poste-frontière.",
    steps: [
      {
        title: 'Posez les quatre questions',
        actions: [
          "Quelle exonération douanière puis-je demander, auprès de qui, avec quelles pièces et en combien de jours ?",
          "Une autorisation d'importation est-elle exigée pour cette catégorie de produits (santé, nutrition) ?",
          "Quels documents de transit sont nécessaires pour chaque pays traversé ?",
          "Existe-t-il une autre exigence propre à ce pays (inspection, enregistrement du produit, certificat de conformité) ?",
        ],
      },
      {
        title: 'Tabulez les réponses',
        actions: [
          "Un tableau : document, autorité, délai, qui dépose, état au jour J.",
          "Demandez la confirmation écrite à chaque source : les réponses orales d'un transitaire ou d'un point focal ne tiennent pas en cas de litige.",
        ],
      },
    ],
    table: {
      columns: ['Document', 'Autorité', 'Délai indicatif', 'Qui dépose', 'État au 11/05'],
      rows: [
        ['Exonération douanière', 'Autorités du pays de destination (à confirmer avec Nile Gate Logistics)', '10 à 15 jours', 'Grace M.', 'Déposée le 05/05, réponse attendue le 19/05'],
        ['Autorisation d\'importation (produits de santé et nutrition)', 'Ministère de la Santé', 'Environ 5 jours', 'Dr Samuel T.', 'Obtenue le 08/05'],
        ['Document de transit (segment route)', 'Douane, via le transitaire', '1 jour', 'Nile Gate Logistics', 'À émettre au départ'],
        ['Autre document propre au pays', 'Aucune exigence identifiée', 'Sans objet', 'Sans objet', 'Non applicable'],
      ],
    },
    result: "Vous connaissez les trois exigences actives, leurs délais, leur porteur et leur état au jour J.",
    pitfall: "Découvrir au moment du dédouanement qu'une exonération n'a pas été demandée. Les administrations ont leur propre rythme : une demande déposée à l'arrivée du colis n'aura aucun effet sur ce colis.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Renseigner la section 4 « Documents douaniers et réglementaires complémentaires »',
    intro: "La section 4 de la checklist comporte trois lignes avec les mêmes quatre colonnes que les sections 2 et 3 : demande d'exonération douanière (si applicable), autorisation d'importation (si applicable), autre document spécifique au pays de destination.",
    steps: [
      {
        title: 'Remplissez les trois lignes',
        actions: [
          "Statut : Obtenu, En attente ou Non applicable ; jamais une autre formule.",
          "Date obtention : la date du document ou de l'accusé de dépôt.",
          "Remarques : référence du dossier, date prévue de réponse, personne qui suit.",
        ],
      },
      {
        title: 'Écrivez le plan B de la demande en attente',
        actions: [
          "Pour chaque document « En attente », écrivez ce qui se passe s'il n'arrive pas avant l'arrivée de la marchandise.",
          "Faites valider le plan B par la personne qui porte la décision.",
        ],
      },
    ],
    table: {
      columns: ['Document', 'Statut', 'Date obtention', 'Remarques'],
      rows: [
        ['Demande d\'exonération douanière (si applicable)', 'En attente', '—', 'Déposée le 05/05 ; réponse attendue le 19/05 ; suivi Grace M. ; plan B : payer 1 200 USD pour libérer la marchandise et demander le remboursement'],
        ['Autorisation d\'importation (si applicable)', 'Obtenu', '08/05/2026', 'Ministère de la Santé, numéro reporté au dossier ; suivi Dr Samuel T.'],
        ['Autre document spécifique au pays de destination', 'Non applicable', '—', 'Aucune exigence identifiée ; document de transit émis par le transitaire au départ'],
      ],
    },
    result: "Section 4 renseignée : une demande en attente avec un plan B validé, deux lignes closes.",
    tip: "Le plan B doit avoir un budget : les 1 200 USD de droits sont déjà dans le comparateur (colonne I). Prévenez Joseph K. pour qu'il provisionne la somme sans attendre la décision.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Dérouler les cinq contrôles de la section 5 « Vérification de cohérence avant transmission »',
    intro: "La section 5 de la checklist porte cinq cases à cocher. Vous ne cochez une case que si vous l'avez vérifiée sur les documents définitifs (v2), avec la preuve à côté. C'est le dernier contrôle avant l'envoi.",
    steps: [
      {
        title: 'Faites les cinq contrôles dans l\'ordre',
        actions: [
          "1. Quantités identiques entre facture commerciale et packing list, chiffre pour chiffre.",
          "2. Description de la marchandise identique sur tous les documents du dossier.",
          "3. Poids et volume cohérents entre packing list et document de transport.",
          "4. Incoterm indiqué sur la facture conforme à celui convenu avec le fournisseur.",
          "5. Dossier complet, dans l'ordre, prêt à être transmis en un seul envoi.",
        ],
      },
      {
        title: 'Cochez et conservez la preuve',
        actions: [
          "Cochez la case dans le template uniquement quand le contrôle est terminé.",
          "Conservez le tableau de rapprochement final (v2) à côté de la checklist.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Résultat', 'Preuve'],
      rows: [
        ['1 Quantités facture = packing list', 'Coché : 800 kits, 40 cartons', 'Rapprochement v2'],
        ['2 Description identique partout', 'Coché : « 800 kits de traitement de la malnutrition sévère »', 'Facture v2, PL v2, LTA'],
        ['3 Poids et volume PL = document de transport', 'Coché : 3 200 kg brut, 9 m³', 'PL v2, LTA house'],
        ['4 Incoterm facture = Incoterm convenu', 'Coché : FCA Dubai', 'Facture v2, PO signée'],
        ['5 Dossier complet, dans l\'ordre, un seul envoi', 'Coché : exonération « en attente » signalée dans le message', 'Index du dossier'],
      ],
    },
    result: "Cinq cases cochées sur preuves. Le dossier peut partir.",
    pitfall: "Cocher la case 5 alors qu'un document manque. Un dossier incomplet envoyé « pour prendre de l'avance » devient un dossier envoyé par fragments : exactement ce que le contrôle devait éviter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Assembler le dossier : ordre, noms de fichiers, PDF unique',
    intro: "Un dossier mal ordonné fait perdre à l'agent de douane la moitié du temps que vous avez gagné en amont. Vous assemblez un seul PDF, dans l'ordre où l'administration les lira, avec un index et des signets.",
    steps: [
      {
        title: 'Fixez l\'ordre et le nommage',
        actions: [
          "Ordre : 1 index, 2 facture, 3 packing list, 4 certificat d'origine, 5 document de transport, 6 certificat d'assurance, 7 exonération (demande et accusé), 8 autorisation d'importation, 9 checklist.",
          "Nom de fichier : SSD-2026-007_NN_Document_v2.pdf, avec NN le numéro d'ordre.",
        ],
      },
      {
        title: 'Produisez le PDF unique',
        actions: [
          "Scannez à 200 – 300 dpi, pages droites, lisibles ; contrôlez chaque page à l'écran.",
          "Fusionnez dans l'ordre, ajoutez un signet par document ; vérifiez la taille (moins de 10 Mo pour un envoi par courriel).",
          "Si la taille dépasse, réduisez la résolution des pages sans texte critique plutôt que de scinder l'envoi.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Fichier', 'Pages', 'Statut'],
      rows: [
        ['01', 'SSD-2026-007_01_Index', '1', 'Obtenu'],
        ['02', 'SSD-2026-007_02_Facture_v2', '1', 'Obtenu'],
        ['03', 'SSD-2026-007_03_PackingList_v2', '2', 'Obtenu'],
        ['04', 'SSD-2026-007_04_Certificat_origine', '1', 'Obtenu'],
        ['05', 'SSD-2026-007_05_LTA_house', '2', 'Obtenu le 14/05'],
        ['06', 'SSD-2026-007_06_Assurance', '1', 'Obtenu'],
        ['07 et 08', 'Exonération (accusé de dépôt) ; Autorisation d\'importation', '2 ; 1', 'En attente ; Obtenu'],
        ['09', 'SSD-2026-007_09_Checklist', '2', 'Complétée'],
      ],
    },
    result: "Un PDF unique de 13 pages, ordonné, indexé, de 3,4 Mo, prêt à être transmis.",
    tip: "Faites relire l'index par une personne qui ne connaît pas le dossier : si elle retrouve un document en dix secondes, l'agent en douane le retrouvera aussi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Remplir la section 6 « Transmission du dossier » et signer',
    intro: "La section 6 de la checklist est un tableau de deux lignes et deux colonnes : « Transmis à (nom, fonction) » et « Date de transmission », puis « Complété par (nom, fonction) » et « Date ». Vous la remplissez avant l'envoi, vous la signez et vous la datez.",
    steps: [
      {
        title: 'Renseignez les quatre champs',
        actions: [
          "Transmis à : le nom et la fonction de la personne qui utilisera le dossier pour dédouaner.",
          "Date de transmission : la date prévue ; vous mettrez à jour la date réelle après l'envoi.",
          "Complété par : votre nom et votre fonction ; Date : le jour de la clôture de la checklist.",
        ],
      },
    ],
    table: {
      columns: ['Champ', 'Valeur saisie (Kerowa)'],
      rows: [
        ['Transmis à (nom, fonction)', 'Ahmed R., agent en douane, Nile Gate Logistics, Juba'],
        ['Date de transmission', '14/05/2026 (réelle : 14/05/2026, 16 h 25)'],
        ['Complété par (nom, fonction)', 'Supply Chain Manager, Kerowa Santé'],
        ['Date', '14/05/2026'],
      ],
    },
    result: "Livrable L4 terminé : les 6 sections de la checklist sont remplies, signées et datées.",
    pitfall: "Remplir la section 6 sans l'avoir rouverte après l'envoi. Mettez à jour l'heure réelle de transmission : c'est elle qui prouve que le dossier est parti avant l'arrivée.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 8 — TRANSMETTRE LE DOSSIER AVANT L'ARRIVÉE (JEUDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 4',
    title: 'Fixer la date limite de transmission et la liste de diffusion',
    intro: "Le dossier doit parvenir à l'agent en douane et à l'équipe terrain avant l'arrivée physique de la marchandise : plusieurs jours avant, pour que les démarches de dédouanement se fassent en parallèle du transport, pas après. Entrées : la date d'arrivée prévue, la liste des personnes impliquées.",
    steps: [
      {
        title: 'Fixez la règle de temps',
        actions: [
          "Date limite : au plus tard trois jours ouvrés avant l'arrivée prévue.",
          "Date visée : le jour de l'émission du document de transport, dès que le dossier est complet.",
        ],
      },
      {
        title: 'Établissez la liste de diffusion',
        actions: [
          "Une personne en action (l'agent en douane), des personnes en information (coordination, finance, programme).",
          "Chaque destinataire a une raison précise d'être sur la liste : dites-la dans le message.",
        ],
      },
    ],
    table: {
      columns: ['Destinataire', 'Fonction', 'Ce qu\'il fait avec le dossier'],
      rows: [
        ['Ahmed R. (Nile Gate Logistics)', 'Agent en douane Juba — action', 'Prépare la déclaration, anticipe les questions de la douane'],
        ['Peter A.', 'Logisticien — action', 'Prépare la réception à la pharmacie et le transfert local'],
        ['Grace M.', 'Coordinatrice pays — information', 'Relance l\'exonération si besoin, valide le plan B'],
        ['Joseph K.', 'Finance — information', 'Provisionne droits et frais, règle fret et assurance'],
        ['Dr Rebecca N.', 'Programme nutrition — information', 'Planifie la distribution à partir de la date d\'arrivée'],
      ],
    },
    result: "Date limite : vendredi 15 mai (trois jours ouvrés avant l'arrivée du mercredi 20 mai) ; la date visée est le jeudi 14 mai.",
    pitfall: "Mettre toute la coordination en destinataire principal : personne ne sait qui doit agir. Une action, un nom ; les autres en copie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 4',
    title: 'Rédiger l\'e-mail de transmission',
    intro: "Le message accompagne un dossier juridiquement engageant : il doit être clair, tracé et horodaté. Il tient en cinq lignes utiles et il pose les demandes précises dont l'agent a besoin pour agir.",
    steps: [
      {
        title: 'Structurez le message',
        actions: [
          "Objet : la référence de l'envoi et le mot « dossier » (« SSD-2026-007 — dossier d'expédition complet »).",
          "Corps : 1 de quoi il s'agit (marchandise, quantités, dates) ; 2 le contenu du PDF, avec l'index ; 3 ce qui est en attente ; 4 ce que vous demandez, avec une date ; 5 accusé de réception demandé.",
          "Une seule pièce jointe : le PDF unique.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — message du jeudi 14 mai, 16 h 25',
      lines: [
        "Objet : SSD-2026-007 — dossier d'expédition complet, arrivée Juba prévue le 20/05.",
        "« Ahmed, ci-joint le dossier complet (PDF de 13 pages, index en première page) pour l'envoi de 40 cartons / 3 200 kg de kits de traitement de la malnutrition sévère. Départ de Dubaï aujourd'hui, LTA master référencée en page 6. »",
        "« En attente : réponse à la demande d'exonération déposée le 05/05, attendue le 19/05. Plan B validé : paiement de 1 200 USD pour libérer la marchandise. »",
        "« Merci de confirmer avant demain midi que vous pouvez lancer la pré-déclaration, et de me poser dès maintenant toute question sur les documents. Merci d'accuser réception. »",
      ],
    },
    result: "Un message qui dit ce que contient le dossier, ce qui manque, ce qu'on attend de l'agent et pour quand.",
    tip: "Écrivez l'objet pour qu'il se retrouve par la référence de l'envoi : dans trois mois, vous chercherez ce message dans une boîte de réception de 4 000 courriels.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 4',
    title: 'Envoyer en un seul envoi, obtenir l\'accusé de réception et vérifier la prise en main',
    intro: "L'envoi par fragments, ou après l'arrivée, fait perdre exactement le temps que la préparation en amont devait faire gagner. Vous envoyez une fois, et vous vérifiez que le destinataire a bien reçu et compris.",
    steps: [
      {
        title: 'Envoyez et tracez',
        actions: [
          "Envoyez le message à l'heure prévue, sans envoi préalable partiel.",
          "Demandez l'accusé de réception et notez l'heure d'envoi dans la section 6.",
        ],
      },
      {
        title: 'Vérifiez par un appel dans les deux heures',
        actions: [
          "Appelez l'agent : a-t-il ouvert le PDF, le trouve-t-il lisible, a-t-il des questions ?",
          "Notez ses questions et vos réponses dans le journal de l'envoi.",
          "Corrigez dans le jour tout document illisible ou manquant : par une version complète, pas par un envoi partiel.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — réponse d\'Ahmed R., 14 mai, 18 h',
      lines: [
        "« Dossier reçu, lisible. Deux questions : le code SH figure-t-il sur la facture ? Qui est le signataire de la demande d'exonération ? »",
        "Réponse du Supply Chain Manager à 18 h 30 : « Code SH en ligne 1 de la facture v2 ; demande d'exonération signée par la coordinatrice pays, Grace M. »",
        "Ahmed R. : « Pré-déclaration lancée. J'attends l'arrivée de l'avion à Entebbe. »",
      ],
    },
    result: "Accusé reçu à 18 h, deux questions posées et résolues en 30 minutes, pré-déclaration lancée six jours avant l'arrivée.",
    pitfall: "Envoyer le dossier dans une pièce jointe de 25 Mo qui n'arrive pas. Vérifiez la taille avant l'envoi et l'accusé après : sans accusé, le dossier n'est pas parti.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 4',
    title: 'Suivre l\'expédition jusqu\'à la livraison et mettre à jour le dossier',
    intro: "L'envoi n'est pas terminé quand le dossier est parti : vous suivez les jalons jusqu'à la livraison, vous mettez à jour le dossier à chaque événement, et vous enregistrez le délai réel pour mieux estimer le prochain.",
    steps: [
      {
        title: 'Tenez le journal de l\'envoi',
        actions: [
          "Un tableau : date, jalon, source, écart par rapport au plan, action.",
          "Mettez-le à jour à chaque information du transitaire, au minimum deux fois par semaine.",
        ],
      },
      {
        title: 'Traitez les écarts et clôturez',
        actions: [
          "Un jalon en retard de plus de 24 heures : appelez le transitaire et ajoutez l'événement au journal.",
          "Un document nouveau (exonération obtenue) : envoyez-le en complément référencé au message initial.",
          "À la livraison, notez le délai réel dans le comparateur : il remplace le délai annoncé dans votre prochaine estimation.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Jalon', 'Source', 'Écart / action'],
      rows: [
        ['14/05', 'Remise des 40 cartons à l\'agent à Dubaï ; LTA émise', 'Nile Gate Logistics', 'Aucun'],
        ['15/05', 'Vol Dubaï → Entebbe', 'LTA master', 'Aucun'],
        ['19/05', 'Exonération accordée', 'Autorité, via Grace M.', 'Complément envoyé à l\'agent, droits à 0 USD'],
        ['20/05', 'Arrivée à Juba', 'Nile Gate Logistics', 'Dans le délai (6 jours)'],
        ['21/05', 'Livraison à la pharmacie centrale, GRN signé', 'Peter A.', '8 jours avant la rupture du 29/05'],
      ],
    },
    result: "Livrable L7 terminé : dossier transmis, journal à jour, délai réel de 7 jours porte-à-porte (jusqu'à la pharmacie) enregistré.",
    tip: "Au fil des envois, votre journal devient un référentiel de délais réels par corridor : c'est la meilleure défense contre les délais « annoncés ».",
  },

  {
    type: 'checklist',
    title: 'Routine avant de signer toute commande internationale',
    items: [
      "Relevez l'Incoterm, le lieu nommé et la version dans le devis, et vérifiez qu'ils sont compatibles avec le mode de transport envisagé.",
      "Passez la frise des huit segments : tout segment rouge sans partenaire prouvé justifie une renégociation avant la signature.",
      "Fixez la date limite d'arrivée par un calendrier à rebours et éliminez toute option dont le délai réaliste la dépasse.",
      "Demandez deux cotations de fret couvrant le même périmètre, avec le poids taxable et les risques connus du corridor.",
      "Comparez le coût total livré, pas le prix de la marchandise ni le tarif au kg, et gardez le calcul à la main au dossier.",
      "Envoyez le cahier des exigences au fournisseur pour la facture et la packing list, puis rapprochez-les chiffre par chiffre.",
      "Vérifiez que l'exonération, l'autorisation d'importation et le certificat d'origine sont demandés avant le départ, pas à l'arrivée.",
      "Déclarez l'assurance avant la remise de la marchandise et exigez le certificat avec les clauses, la valeur et la période.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU — DUBAÏ → JUBA, DE BOUT EN BOUT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/5) — Décoder la situation : chaque donnée devient une décision',
    scenario: "Rappel : lundi 11 mai 2026, rupture de kits de traitement de la malnutrition sévère prévue le vendredi 29 mai à Juba et à Gogrial. 800 kits (40 cartons, 3 200 kg, 9 m³, 54 500 USD) disponibles chez Dunes Medical Supplies FZE le 14 mai. Devis en FOB Dubaï, PO non signée, exonération en cours, deux options de fret.",
    steps: [
      { title: '« Rupture dans 18 jours »', body: "La date n'est pas une impression : c'est le vendredi 29 mai, moins 3 jours de redistribution, soit une date limite d'arrivée à Juba le mardi 26 mai.", result: "Traité par P2 : calendrier à rebours, option éliminée si elle arrive après le 26 mai." },
      { title: '« Le devis dit FOB Dubaï »', body: "Incoterm maritime, sans port nommé, pour un envoi qui pourrait être aérien ; aucun partenaire de Kerowa à Dubaï.", result: "Traité par P1 : frise, grille d'exposition, renégociation vers FCA Dubaï avant la signature de la PO." },
      { title: '« Deux options : aérien 6 jours ou maritime + routier 32 jours »', body: "Deux cotations à comparer sur le même périmètre, avec un poids taxable et un coût total livré.", result: "Traité par P2 : comparateur complété, calcul à la main, justification en cinq lignes." },
      { title: '« Blocage de 5 jours à Nadapal le mois dernier »', body: "Un risque documenté, qui ajoute 5 jours à l'option maritime.", result: "Traité par P2 : délai maritime saisi à 37 jours, pas à 32." },
      { title: '« L\'exonération est en cours de confirmation »', body: "Les droits (1 200 USD) peuvent tomber à 0 si la réponse arrive avant le 20 mai.", result: "Traité par P7 : section 4 de la checklist, plan B validé, provision budgétaire." },
      { title: 'Facture et packing list du fournisseur', body: "Deux documents qui doivent se recouper au chiffre près avant tout départ.", result: "Traité par P3 : rapprochement, quatre écarts, versions v2 reçues le 13 mai." },
    ],
    tip: "Toute situation d'urgence se décode ainsi : une donnée = une décision = une procédure = un livrable. Vous évitez de traiter l'urgence comme un bloc.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/5) — L\'Incoterm : ce que le FOB Dubaï laisse à votre charge',
    scenario: "Question de l'exercice noté : en vous appuyant sur le tableau de transfert de risque, identifiez précisément ce que le FOB laisse à votre charge dès le chargement à bord à Dubaï, et dites si cela pose un problème compte tenu de l'absence de transitaire établi aux Émirats arabes unis pour gérer un incident avant embarquement.",
    steps: [
      {
        title: 'Ce que Kerowa porte dès le chargement à bord',
        actions: [
          "Le risque de perte ou de dommage pendant toute la traversée.",
          "L'organisation et le paiement du transport principal, de Dubaï à Juba.",
          "L'assurance : le vendeur n'en doit aucune en FOB.",
          "Le dédouanement de transit (Kenya) et d'import (Soudan du Sud), le déchargement, la livraison finale.",
        ],
      },
      {
        title: 'Pourquoi cela pose un problème ici',
        actions: [
          "Avant l'embarquement, le risque reste chez le fournisseur, mais Kerowa doit désigner le transporteur, notifier les dates et suivre la remise : personne à Dubaï ne peut le faire ni constater un incident au chargement.",
          "FOB n'existe que pour le maritime : l'option aérienne n'a pas de « bord de navire ». L'Incoterm du devis est incompatible avec l'option qui respecte la date limite.",
          "Le port n'est pas nommé : « Dubaï » ne dit pas où le risque bascule.",
        ],
      },
      {
        title: 'Décision',
        body: "Renégocier avant de signer : FCA Dubaï, entrepôt de l'agent de Nile Gate Logistics ; repli CIP Juba, assurance clauses A ; DDP écarté (fournisseur sans référence d'exonération).",
        result: "Devis révisé reçu le 12 mai à 11 h : FCA Dubaï, prix inchangé 54 500 USD, dédouanement export inclus. PO-2026-031 signée l'après-midi.",
      },
    ],
    pitfall: "Répondre « le risque ne passe qu'à bord donc tout va bien avant » : c'est exact juridiquement, mais sans partenaire sur place, vous ne pouvez ni piloter la remise, ni constater, ni prouver ce qui s'est passé avant le chargement.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/5) — Le comparateur final et la décision',
    scenario: "Résultat du lundi 11 mai, après calendrier à rebours, saisie des lignes 5, 6, 7 et 8 de l'onglet « Comparateur Fret » et recalcul à la main. Cas prudent : droits de 1 200 USD, exonération non confirmée.",
    steps: [
      { title: 'Raisonnement', body: "Étape 1 : éliminer toute option qui arrive après le 26 mai. Étape 2 : comparer les options restantes sur le coût total livré. Étape 3 : vérifier que la marge absorbe un incident documenté. Étape 4 : écrire la décision." },
      { title: 'Décision', body: "Aérien pour les 40 cartons. La maritime est éliminée (arrivée le 20 juin, 25 jours après la date limite) ; l'option fractionnée économise 4 760 USD mais sa marge est de 6 jours et nulle si les admissions augmentent de 30 % ; le surcoût de 11 570 USD par rapport à la maritime est le prix d'une rupture évitée.", result: "Décision signée par la coordinatrice pays le 12 mai, justification en cinq lignes au dossier d'achat." },
    ],
    table: {
      columns: ['Option', 'Coût transport (H)', 'Total livré (K)', 'Par kg (L)', 'Délai (G)', 'Verdict'],
      rows: [
        ['Aérien, 3 200 kg', '16 010', '17 390', '5,43', '6 j', 'Retenu : arrive le 20/05'],
        ['Maritime + routier, 3 200 kg', '4 440', '5 820', '1,82', '37 j', 'Éliminé : arrive le 20/06'],
        ['Fractionné 20 + 20 cartons', '11 250', '12 630', '3,95', '6 j et 37 j', 'Écarté : marge de 6 jours, nulle en juillet'],
      ],
    },
    result: "Décision défendable : le coût, le délai, la date limite et le risque accepté sont écrits, chiffrés et signés.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/5) — Le dossier documentaire final, section par section',
    scenario: "Voici la checklist-documents-expedition-internationale.docx de l'envoi SSD-2026-007, telle qu'elle était remplie le jeudi 14 mai à 16 h, avant l'envoi à l'agent en douane.",
    steps: [
      { title: 'Ce que le contrôle a permis de corriger avant le départ', actions: ["4 écarts entre facture et packing list (description, poids net et brut, Incoterm, origine) : versions v2 reçues le 13 mai.", "3 corrections du brouillon de la LTA (consignataire, partie à notifier, poids) : intégrées avant l'émission.", "1 extension d'assurance (guerre, troubles civils) confirmée par écrit."] },
    ],
    table: {
      columns: ['Section', 'État final'],
      rows: [
        ['1 Identification', 'SSD-2026-007 ; Dunes Medical Supplies FZE, Émirats arabes unis ; 800 kits, 40 cartons, 3 200 kg, 9 m³ ; FCA Dubaï ; départ 14/05 ; Pharmacie centrale de Juba'],
        ['2 Documents commerciaux', 'Facture v2 Obtenu 13/05 ; Packing list v2 Obtenu 13/05 ; Certificat d\'origine Obtenu 13/05'],
        ['3 Documents de transport', 'LTA house Obtenu 14/05 ; Certificat d\'assurance Obtenu 13/05 (clauses A, 77 561 USD)'],
        ['4 Documents douaniers', 'Exonération En attente (réponse le 19/05, plan B 1 200 USD) ; Autorisation d\'importation Obtenu 08/05 ; Autre : Non applicable'],
        ['5 Cohérence', 'Cinq cases cochées sur preuves'],
        ['6 Transmission', 'Transmis à Ahmed R., agent en douane, le 14/05 à 16 h 25 ; complété par le Supply Chain Manager le 14/05'],
      ],
    },
    result: "Un dossier de 13 pages, concordant sur tous les contrôles, envoyé en un seul envoi six jours avant l'arrivée.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/5) — Le résultat réel et la note de clôture',
    scenario: "Voici le bilan arrêté le vendredi 22 mai à 11 h, après la livraison à la pharmacie de Juba et le transfert des 8 premiers cartons au centre de santé partenaire de Gudele.",
    steps: [
      { title: 'Ce qui a fait gagner du temps', actions: ["Incoterm renégocié le 11 mai : un seul interlocuteur pour l'export, un transitaire pour tout le reste.", "Documents corrigés avant le départ : aucune inspection à l'arrivée.", "Dossier transmis six jours avant l'arrivée : pré-déclaration lancée pendant le vol.", "Exonération obtenue le 19 mai grâce au suivi de Grace M. : droits à 0 USD."] },
      { title: 'Ce qu\'il reste à améliorer', actions: ["La demande d'exonération a été déposée le 05/05 et a abouti le 19/05, 14 jours plus tard : à déposer dès la signature de la PO la prochaine fois.", "Le consignataire de la LTA avait été saisi incorrectement : intégrer ce contrôle à la routine du transitaire."] },
    ],
    table: {
      columns: ['Indicateur', 'Prévu (cas prudent)', 'Réel'],
      rows: [
        ['Coût total livré (transport + droits + assurance)', '17 390 USD', '16 190 USD (droits à 0)'],
        ['Arrivée à Juba', '20/05', '20/05'],
        ['Livraison à la pharmacie centrale', 'Limite : 26/05', '21/05 (8 jours avant la rupture)'],
        ['Écarts documentaires détectés', 'Avant départ', '7 corrigés avant le départ ; 0 à l\'arrivée'],
        ['Délai réel porte-à-porte', '6 j annoncés', '7 j (14/05 → 21/05) : enregistré dans le comparateur'],
      ],
    },
    example: {
      title: 'Note de clôture au dossier d\'achat SSD-2026-007 (extrait)',
      lines: [
        "1. Marchandise : 800 kits, 40 cartons, 3 200 kg, 9 m³, 54 500 USD, FCA Dubaï, fret aérien Dubaï – Entebbe – Juba.",
        "2. Décision de fret : aérien (17 390 USD en cas prudent) ; maritime éliminée (arrivée le 20/06, hors date limite du 26/05).",
        "3. Résultat : arrivée le 20/05, exonération obtenue le 19/05, coût final 16 190 USD, livraison le 21/05, GRN signé.",
        "4. Contrôles : 7 écarts documentaires corrigés avant départ ; assurance clauses A sur 77 561 USD.",
        "5. Enseignements : déposer l'exonération à la signature de la PO ; contrôler le consignataire sur tout brouillon de LTA.",
      ],
    },
    result: "Le cas est résolu : décision de fret chiffrée et signée, Incoterm corrigé avant signature, dossier concordant, rupture évitée avec 8 jours de marge.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Réfrigérateurs solaires pour Abéché : EXW Lyon, air ou mer ?',
    instructions: "Vous êtes Supply Chain Manager de l'ONG fictive Horizon Santé Rurale (Abéché, Tchad). Vous achetez 6 réfrigérateurs solaires pour vaccins à Frigosol SAS (fictif, Lyon, France) : 14 colis, 1 100 kg nets, 1 180 kg bruts, 7,5 m³, 31 000 USD, devis en EXW Lyon. Les appareils sont prêts à l'enlèvement dans 5 jours. Ils doivent être à N'Djamena dans 75 jours à partir d'aujourd'hui. Horizon a un transitaire à N'Djamena, aucun en France. Cotations du transitaire : aérien Lyon → N'Djamena, 5,20 USD/kg sur poids taxable, frais fixes 480 USD, 7 jours ; maritime Marseille → Douala puis route vers N'Djamena, 1,10 USD/kg sur poids réel (volume déjà intégré dans les frais fixes), frais fixes 2 150 USD, 48 jours annoncés, plus 6 jours de retard constatés à la frontière lors du dernier convoi. Droits estimés 2 400 USD (0 USD si exonération confirmée à temps), assurance 260 USD pour chaque option.",
    steps: [
      { title: 'Relevez et analysez l\'Incoterm (P1)', actions: ["Dressez la frise des huit segments pour EXW Lyon et dites quels segments reviennent à Horizon.", "Construisez la grille d'exposition et choisissez une cible et un repli.", "Rédigez le message de renégociation."] },
      { title: 'Posez le calendrier à rebours (P2)', actions: ["Calculez, pour chaque mode, la date d'arrivée en jours à partir d'aujourd'hui et la marge sur les 75 jours."] },
      { title: 'Calculez le poids taxable aérien (P2)', actions: ["Appliquez 167 kg par m³ et retenez le plus élevé entre poids réel et poids volumétrique."] },
      { title: 'Renseignez le comparateur (P2)', actions: ["Saisissez deux lignes dans l'onglet « Comparateur Fret » (poids taxable pour l'aérien, poids réel pour le maritime), intégrez le risque de 6 jours, lisez H, K, L et recalculez à la main."] },
      { title: 'Tranchez et justifiez (P2)', actions: ["Rédigez la justification en cinq lignes maximum : option, coût total livré, marge, risque accepté, validation."] },
      { title: 'Rapprochez facture et packing list (P3)', actions: ["Facture : « 6 solar refrigerators SF-120, 1 100 kg, EXW Lyon, 31 000 USD ». Packing list : « 6 SF-120 + 6 mounting kits, 14 packages, net 1 100 kg, gross 1 180 kg, 7,5 m³ ». Listez les écarts et les corrections à demander."] },
      { title: 'Complétez la checklist (P7)', actions: ["Remplissez les sections 1 à 6 en indiquant ce qui est disponible et ce qui reste à obtenir, avec qui vous devez le demander (fournisseur, transitaire, assureur, autorité)."] },
    ],
    tip: "Reprenez le déroulé des procédures 1 à 3 et 7 sans les relire à chaque étape : si vous devez les rouvrir, notez l'étape qui vous bloque, c'est celle à retravailler.",
    pitfall: "Appliquer à ce cas la conclusion du cas Kerowa. Ici l'échéance est lointaine : refaites le calendrier avant de choisir.",
    deliverable: "Le comparateur complété avec la justification écrite, l'analyse d'Incoterm avec le message de renégociation, le tableau de rapprochement et la checklist documentaire à jour.",
  },
  {
    type: 'concept',
    title: 'Exercice 1 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Comparez votre travail à ces repères. D'autres choix sont acceptables s'ils sont justifiés par les données et documentés.",
    example: {
      title: 'Calcul attendu',
      lines: [
        "Poids taxable aérien : 7,5 m³ × 167 = 1 252,5 kg, arrondi à 1 253 kg (supérieur aux 1 100 kg nets et aux 1 180 kg bruts).",
        "Aérien : H = 1 253 × 5,20 + 480 = 6 995,60 ; K = 6 995,60 + 2 400 + 260 = 9 655,60 USD ; délai 7 jours.",
        "Maritime : H = 1 100 × 1,10 + 2 150 = 3 360 ; K = 3 360 + 2 400 + 260 = 6 020 USD ; délai 48 + 6 = 54 jours.",
        "Calendrier : prêt au jour 5 ; arrivée au jour 12 en aérien (marge 63 jours), au jour 59 en maritime (marge 16 jours sur 75).",
        "Décision attendue : maritime, économie de 3 635,60 USD (environ 38 % du coût aérien), marge de 16 jours qui absorbe un nouveau retard de frontière.",
      ],
    },
    bullets: [
      "EXW Lyon : Horizon porterait le chargement, l'export, l'acheminement jusqu'au port de Marseille et le risque dès la sortie de l'entrepôt, sans transitaire en France : segments en rouge sans capacité. Cible : FCA Lyon, transporteur désigné par le transitaire ; repli : CPT N'Djamena.",
      "Facture et packing list : les 6 kits de montage absents de la facture (marchandise non déclarée), le poids 1 100 kg de la facture non qualifié (net) face aux 1 180 kg (bruts) de la packing list, les 14 colis non reportés sur la facture, l'Incoterm EXW à remplacer, le pays d'origine à confirmer.",
      "Documents à obtenir : facture et packing list v2 et certificat d'origine (fournisseur), BL avec type fixé tôt (transitaire), certificat d'assurance (assureur), exonération et autorisation d'importation si applicable (autorités, via le point focal).",
      "Pour le maritime : décider du type de BL (telex release ou original) le jour de la commande ; prévoir les droits de 2 400 USD si l'exonération n'est pas confirmée.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Transposer à votre propre expédition',
    instructions: "Appliquez les 8 procédures à une expédition internationale réelle de votre mission, ou à la dernière que vous avez connue. Si vous n'êtes pas en poste, utilisez une expédition dont vous connaissez bien les devis, les délais et les documents. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    steps: [
      { title: 'Jour 1', actions: ["Analyse de l'Incoterm du devis (frise, grille d'exposition, cible, repli) et message de renégociation envoyé avant toute signature."] },
      { title: 'Jour 2', actions: ["Calendrier à rebours, deux cotations comparables, poids taxable et comparateur complété avec justification en cinq lignes."] },
      { title: 'Jour 3', actions: ["Cahier des exigences au fournisseur, tableau de rapprochement facture et packing list, demande de certificat d'origine si exigé, contrôle du brouillon du document de transport."] },
      { title: 'Jour 4', actions: ["Vérification de l'assurance (huit points), section 4 de la checklist (exonération, autorisation, plan B), assemblage et transmission du dossier en un seul envoi."] },
    ],
    tip: "Anonymisez les données sensibles (noms de fournisseurs, tarifs négociés) si vous partagez votre travail en dehors de votre organisation.",
    deliverable: "Votre propre kit d'expédition internationale (L1 à L7), réutilisable à chaque nouvelle commande.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "L'analyse d'Incoterm cite l'Incoterm, le lieu nommé et la version, présente la frise des huit segments et une grille d'exposition avec une preuve par ligne.",
      "Un message de renégociation écrit a été envoyé avant la signature de la PO, avec une cible, un repli et une échéance de réponse.",
      "Le calendrier à rebours part d'une date de rupture donnée par le programme et chaque option est comparée à la date limite d'arrivée.",
      "Le comparateur contient au moins deux options saisies avec les mêmes bases (poids taxable, droits, assurance), un délai réaliste qui intègre le risque documenté, et des résultats recalculés à la main.",
      "La justification tient en cinq lignes maximum et cite le coût total livré, le délai, la date limite et le risque accepté.",
      "Le tableau de rapprochement compare la facture, la packing list et le document de transport sur au moins huit contrôles, avec les versions v1 et v2 conservées.",
      "La checklist est remplie dans ses six sections avec les statuts exacts (Obtenu, En attente ou Non applicable), les dates et les remarques, et chaque case de la section 5 est cochée sur preuve.",
      "Le dossier est transmis en un seul envoi, avant l'arrivée, à une personne nommée, avec accusé de réception et heure réelle d'envoi dans la section 6.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, CLÔTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Accepter un Incoterm qui laisse l'organisation responsable d'un segment qu'elle ne maîtrise pas localement (FOB ou EXW sans réseau dans le pays d'origine). → Construisez la grille d'exposition avant de signer et renégociez dès qu'une ligne « Non » est à risque élevé.",
      "Laisser passer un Incoterm incompatible avec le mode de transport (FOB, CFR ou CIF pour de l'aérien). → Comparez l'Incoterm au mode envisagé dès la lecture du devis.",
      "Choisir le fret aérien par réflexe, ou le maritime « parce que c'est moins cher », sans comparaison chiffrée. → Calendrier à rebours, deux cotations, coût total livré, justification en cinq lignes.",
      "Saisir le délai annoncé sans intégrer un blocage documenté. → Ajoutez le risque en toutes lettres dans la colonne délai, avec un commentaire de source.",
      "Comparer les cotations sans vérifier le périmètre, le poids taxable ou la base de facturation. → Une demande identique pour chaque option, et une vérification du poids taxable avant de saisir.",
      "Documents non concordants entre facture commerciale et packing list. → Tableau de rapprochement chiffre par chiffre, versions v2 réémises par le fournisseur, jamais corrigées par vous.",
      "Découvrir à l'arrivée qu'une exonération, une autorisation ou un certificat d'origine n'avait pas été demandé. → Section 4 de la checklist et plan B budgété avant le départ.",
      "Assurer la seule valeur de la marchandise, ou se contenter d'un « vous êtes couverts ». → Valeur CIP + 10 %, certificat écrit avec clauses, valeur et période, plan de réclamation.",
      "Envoyer le dossier par fragments, ou seulement après l'arrivée de la marchandise. → Un seul PDF, un seul envoi, date limite de trois jours ouvrés avant l'arrivée, accusé de réception exigé.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez analysé l'Incoterm d'un devis segment par segment, bâti la grille d'exposition de votre organisation et renégocié par écrit avant la signature de la commande.",
      "Vous avez comparé fret aérien, maritime et fractionné à partir d'un calendrier à rebours, d'un poids taxable et d'un coût total livré, et rédigé une décision de fret en cinq lignes.",
      "Vous avez exigé, rapproché et fait corriger la facture commerciale et la packing list, et obtenu le certificat d'origine quand le régime l'exige.",
      "Vous avez identifié le document de transport (LTA, BL ou CMR), contrôlé son brouillon et fixé le type de BL en variante maritime.",
      "Vous avez établi une lettre de voiture signée par les trois parties, avec réserves à la prise en charge et à la réception.",
      "Vous avez calculé la valeur assurée, vérifié la couverture point par point et préparé le plan de réclamation.",
      "Vous avez identifié les documents douaniers de destination, assemblé le dossier en PDF unique, rempli la checklist complète et transmis le dossier avant l'arrivée.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer, pour au moins 5 Incoterms 2020, le point exact de transfert du risque entre vendeur et acheteur.",
      "Je sais identifier un Incoterm qui expose mon organisation à un risque qu'elle ne maîtrise pas localement, avant la signature de la commande.",
      "Je sais comparer fret aérien, maritime et terrestre sur le coût total livré et le délai réel, pas sur une impression d'urgence.",
      "J'ai complété un comparateur de fret avec le template fourni pour un cas concret.",
      "Je sais lister les documents indispensables d'un dossier d'expédition internationale (facture commerciale, packing list, certificat d'origine, document de transport, certificat d'assurance).",
      "Je sais vérifier la cohérence chiffre par chiffre entre les documents d'un dossier avant de le transmettre.",
      "J'ai complété une checklist documentaire d'expédition avec le template fourni.",
      "Je sais à quel moment transmettre le dossier à l'équipe terrain pour ne pas retarder le dédouanement.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Prochain module : « Systèmes ERP Humanitaires — SAP, LINK & Power Query ». Vous y saisirez dans l'ERP les commandes, réceptions et mouvements de stock de vos expéditions, puis vous transformerez un export brut en rapport fiable pour la coordination et le bailleur.",
  },
]
