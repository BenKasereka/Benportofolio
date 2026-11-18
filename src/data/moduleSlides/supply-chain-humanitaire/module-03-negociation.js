// Module 03 — Techniques de Négociation en Profondeur
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure de
// négociation fournisseur est déroulée étape par étape (une étape par écran),
// appliquée à un cas fil rouge chiffré (Kerowa Santé face à son transporteur
// unique), puis résolue intégralement et transposée en exercices. La grille
// BATNA (3 onglets) et la trame de PV sont parcourues champ par champ. Les
// diapositives trop chargées sont découpées automatiquement en « (suite) »
// par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'cover',
    title: 'Techniques de Négociation en Profondeur',
    hook: "En 48 heures, vous allez produire ce qu'un acheteur humanitaire doit apporter à la table d'un fournisseur qui se sait indispensable : une grille de préparation BATNA complète (3 onglets), un plan de séance, un journal de négociation, puis un PV signé avant de quitter la salle et transmis au dossier d'achat. Chaque étape est déroulée ici, champ par champ, sur un cas réel de terrain : 5 rotations de camions à sécuriser avant la saison des pluies.",
  },
  {
    type: 'objectives',
    items: [
      "Choisir la posture de négociation (distributive ou collaborative) selon la nature de la relation fournisseur et le rapport de force, en produisant une fiche de cadrage justifiée dans l'onglet « 1. Objet & BATNA » de la grille.",
      "Documenter une BATNA réaliste et chiffrée (alternative, coût, délai, risque, force) dans la grille, même si elle est faible, après avoir testé qu'elle est réellement mobilisable.",
      "Fixer sur quatre dimensions (prix, délai, conditions de paiement, volume / engagement futur) un résultat idéal, un résultat acceptable et un point de rupture chiffrés et validés par votre hiérarchie, dans l'onglet « 2. Objectifs & rupture ».",
      "Préparer vos concessions avec leur contrepartie, vos concessions interdites et vos questions d'ouverture dans l'onglet « 3. Concessions », puis en tirer un plan de séance d'une page.",
      "Mener une séance structurée avec l'ancrage, le silence stratégique, les contre-propositions progressives et la contrepartie systématique, en consignant chaque mouvement dans un journal de négociation.",
      "Déplacer la négociation vers le délai, le paiement et le volume quand le prix est verrouillé, et obtenir un paquet d'accord chiffré face à un fournisseur en position de force.",
      "Clôturer par un PV de négociation complet (trame .docx) signé avant la fin de la rencontre, le transmettre au dossier d'achat et contrôler facture et livraisons par rapport à lui.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur la négociation : c'est la préparation et la conduite d'une vraie négociation fournisseur, de la lettre de prix reçue le lundi à la signature du PV le mercredi, puis à la transmission au dossier d'achat le jeudi. Il se déroule en 7 procédures, qui produisent sept livrables réutilisables tels quels sur votre mission.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé (réponse médicale et nutritionnelle à Gogrial, État du Warrap, Soudan du Sud, que vous connaissez depuis le module 01) face à son transporteur unique entre Juba et Gogrial. Le module vous fournit ensuite un second cas, celui de l'exercice noté, que vous traiterez seul.",
    ],
    bullets: [
      "L1 — La fiche de cadrage et le diagnostic du rapport de force (grille, onglet 1, partie haute).",
      "L2 — La BATNA documentée et chiffrée (grille, onglet 1, partie basse).",
      "L3 — Le tableau idéal / acceptable / rupture sur 4 dimensions, validé par votre hiérarchie (grille, onglet 2).",
      "L4 — Les concessions avec contrepartie, les concessions interdites et les questions d'ouverture (grille, onglet 3), plus le plan de séance d'une page.",
      "L5 — Le journal de négociation tenu pendant la séance (tour par tour).",
      "L6 — Le PV de négociation signé (trame-pv-negociation.docx).",
      "L7 — Le dossier d'achat complété : PV classé, bon de commande aligné sur le PV, contrôle facture / livraison, retour d'expérience.",
    ],
    tip: "Créez dès maintenant un dossier « Négociation Awan Fret » avec un sous-dossier par livrable (L1 à L7). Le jour de la rencontre, la grille est imprimée, le PV est ouvert sur votre ordinateur, et tout le reste est rangé.",
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : Kerowa Santé et son transporteur unique',
    body: [
      "Lundi 16 mars 2026, 8 h 30. Vous êtes Supply Chain Manager de Kerowa Santé (ONG fictive) depuis 14 jours. Vous avez produit votre note de positionnement (module 01) : le transporteur de Juba y figure en orange, car il est seul sur l'axe Juba → Gogrial. Ce matin, il vous envoie sa lettre de prix pour le pré-positionnement d'avant les pluies.",
      "Le contexte : projet de 12 mois, 1 200 000 EUR dont 85 % ECHO. Les pistes se dégradent vers le 20 avril. Le stock de médicaments tient jusqu'au 9 avril environ. L'autorisation d'importation du Ministère de la Santé a été délivrée le 13 mars : la cargaison de médicaments arrive à Juba vers le 24 mars et doit rejoindre Gogrial avant les pluies.",
    ],
    table: {
      columns: ['Élément', 'Donnée du cas'],
      rows: [
        ['Fournisseur', 'Awan Fret SARL, Juba — gérant Abraham L., responsable exploitation Lucy B. — 8 camions de 10 t'],
        ['Besoin', '5 rotations de camions de 10 t Juba → Gogrial, soit 50 t, chargées entre le 23/03 et le 13/04'],
        ['Contenu des 50 t', '5 t de médicaments et consommables, 14 t de vivres importés (huile enrichie, sel iodé, riz), 31 t de matériel (kits d\'hygiène, moustiquaires, pièces détachées, bâches)'],
        ['Tarif de février (facture T06)', '2 100 EUR par rotation (2 camions de 10 t pour 4 200 EUR)'],
        ['Offre reçue le 16/03', '2 500 EUR par rotation (12 500 EUR), valable jusqu\'au 20/03'],
        ['Budget', 'Solde de la ligne transport : 12 000 EUR ; marge de 1 000 EUR accordée par Grace M. (coordinatrice pays) en cas de besoin'],
        ['Rencontre', 'Mercredi 18/03, 10 h, dans les bureaux d\'Awan Fret à Juba — dans 48 heures'],
      ],
    },
    example: {
      title: 'La lettre de prix d\'Awan Fret (reçue le 16/03 à 8 h 30)',
      lines: [
        "« Suite à la forte demande avant la saison des pluies, notre tarif Juba → Gogrial passe à 2 500 EUR par camion de 10 t (aller chargé, retour à vide). »",
        "« Réservation ferme avec paiement de 100 % à la commande. Chargement sous 7 jours après paiement. Livraison sous 5 à 10 jours selon l'état des pistes. »",
        "« Offre valable jusqu'au vendredi 20 mars. Aucune pénalité de retard n'est applicable. »",
      ],
    },
    pitfall: "Les personnes, l'entreprise et les montants sont fictifs et donnés à titre d'exemple ; ne réutilisez jamais ces chiffres tels quels sur votre mission.",
  },
  {
    type: 'concept',
    title: 'Vos 48 heures, procédure par procédure',
    body: "Chaque procédure du module correspond à un créneau de votre agenda avant la rencontre, puis à la séance elle-même. Respectez l'ordre : chaque livrable sert d'entrée au suivant, et la grille est terminée avant d'entrer en salle.",
    table: {
      columns: ['Quand', 'Procédure', 'Livrable produit', 'Temps'],
      rows: [
        ['Lun. 16/03, 10 h', 'P1 — Cadrer la négociation et évaluer le rapport de force', 'L1 Fiche de cadrage (onglet 1, haut)', '2 h'],
        ['Lun. 16/03, 15 h', 'P2 — Documenter la BATNA', 'L2 BATNA chiffrée (onglet 1, bas)', '1 h 30'],
        ['Mar. 17/03, matin', 'P3 — Fixer objectifs et points de rupture', 'L3 Onglet 2 validé par Grace M.', '2 h'],
        ['Mar. 17/03, après-midi', 'P4 — Préparer concessions, questions, plan de séance', 'L4 Onglet 3 + plan d\'une page', '2 h'],
        ['Mer. 18/03, 10 h – 12 h 15', 'P5 — Mener la négociation', 'L5 Journal de négociation', '2 h 15'],
        ['Mer. 18/03, 12 h 15 – 12 h 40', 'P6 — Clôturer avec le PV', 'L6 PV signé', '25 min'],
        ['Jeu. 19/03', 'P7 — Transmettre l\'accord au dossier d\'achat', 'L7 Dossier complété, PO émis', '1 h 30'],
      ],
    },
    tip: "Bloquez ces créneaux dans votre agenda dès lundi 8 h. Une négociation mal préparée coûte bien plus cher que deux demi-journées : ici, 250 EUR sur le prix et surtout plusieurs milliers d'EUR de risque sur le délai et le paiement.",
  },
  {
    type: 'stat-callout',
    stat: '+19 %',
    caption: "C'est la hausse annoncée par Awan Fret en un mois : de 2 100 à 2 500 EUR par rotation de 10 t.",
    context: "Soit 2 000 EUR de plus sur 5 rotations (10 500 → 12 500 EUR). Seuls 108 EUR par rotation s'expliquent par le coût du carburant : le reste, 292 EUR, vient du rapport de force. Cette décomposition, vous la construirez à la procédure 1.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Négocier n\'est pas marchander',
    body: [
      "Sur le terrain humanitaire, « négocier avec un fournisseur » se résume trop souvent à demander une remise sur le prix affiché, puis à accepter ou refuser la réponse. C'est un réflexe, pas une négociation. Une négociation structurée porte sur plusieurs dimensions à la fois (prix, délai, conditions de paiement, volume, garanties) et se prépare avant d'être menée.",
      "Un acheteur qui entre en salle sans préparation ne négocie pas : il subit la proposition du fournisseur, qui connaît en général mieux son marché, ses marges et sa position que l'acheteur ne connaît la sienne. La négociation est une compétence qui se travaille, elle repose sur trois piliers : une posture choisie consciemment, une préparation documentée, des techniques appliquées en situation.",
    ],
    example: {
      title: 'Kerowa — marchander ou négocier ?',
      lines: [
        "Marchander : « Vous pouvez faire un geste sur les 2 500 EUR ? » → le transporteur répond « 2 450 si vous payez tout à la commande ». Vous gagnez 50 EUR par rotation, mais vous avancez 12 250 EUR sans garantie de livraison ni de délai.",
        "Négocier : vous préparez quatre dimensions, vous savez que le délai est votre priorité absolue, et vous échangez le paiement partiel contre des dates fermes et une pénalité.",
      ],
    },
    highlight: "Une remise de 3 % obtenue au prix d'un délai de livraison dégradé que personne n'a vu venir est un mauvais accord. C'est exactement ce que la préparation évite.",
  },
  {
    type: 'concept',
    title: 'Les six dimensions négociables : le prix n\'est que l\'une d\'elles',
    body: "Avant de préparer quoi que ce soit, listez ce qui peut bouger. Plus vous disposez de dimensions, plus vous pouvez construire un échange où chacun gagne sur ce qui compte le plus pour lui. La grille du module en retient quatre explicitement (prix, délai, paiement, volume) ; les garanties et la relation s'y rattachent.",
    table: {
      columns: ['Dimension', 'Ce que l\'on peut négocier', 'Exemple Kerowa / Awan Fret'],
      rows: [
        ['Prix', 'Prix unitaire, remises de volume, prix fixe ou révisable', '2 500 EUR par rotation, prix fixe pendant les pluies'],
        ['Délai', 'Date de chargement, délai de livraison, pénalité de retard', 'Livraison sous 5 jours après chargement, 2 % par jour de retard'],
        ['Conditions de paiement', 'Avance, échelonnement, délai de règlement', '30 % au chargement, 70 % à 15 jours après livraison conforme'],
        ['Volume / engagement futur', 'Quantités garanties, commandes futures, priorité', 'Minimum de 4 rotations en saison des pluies contre un prix fixe'],
        ['Garanties', 'Qualité, assurance, remplacement, clauses de conformité', 'Camions bâchés étanches, clause PSEA, liste nominative des chauffeurs'],
        ['Relation', 'Statut de client prioritaire, durée, accès à l\'information', 'Chargement sous 72 h pour Kerowa, camion de réserve'],
      ],
    },
    tip: "Une dimension qui a peu de valeur pour vous peut en avoir beaucoup pour lui. C'est cet écart de valeur, pas le prix, qui crée l'accord.",
  },
  {
    type: 'comparison-table',
    title: 'Deux postures, deux logiques',
    columns: ['Posture', 'Principe', 'Quand l\'utiliser', 'Exemple Kerowa'],
    rows: [
      ['Distributive', "Jeu à somme nulle centré presque exclusivement sur le prix : ce que l'une des parties gagne, l'autre le perd.", "Achat ponctuel, sans lendemain : aucune relation à préserver.", "Achat unique de deux congélateurs solaires auprès d'un importateur de Juba, jamais recontacté."],
      ['Collaborative (intégrative)', "Explore plusieurs dimensions (délais, volumes futurs, conditions de paiement, exclusivité) pour créer de la valeur commune. Demande plus de temps et de transparence.", "Relation fournisseur récurrente et stratégique, ou rapport de force défavorable où elle est la seule qui obtienne encore quelque chose.", "Awan Fret : transporteur dont Kerowa dépend pour tous ses flux Juba → Gogrial jusqu'au 30/11, unique sur l'axe avant les pluies."],
    ],
  },
  {
    type: 'concept',
    title: 'Choisir la posture avant d\'entrer en salle : quatre questions',
    body: "La posture n'est pas une question de personnalité : c'est un choix stratégique, fait avant la séance, selon la nature de la relation et jamais selon l'humeur du jour. Posez-vous ces quatre questions dans l'ordre et notez les réponses dans l'onglet 1 de la grille.",
    bullets: [
      "1. Reverrai-je ce fournisseur dans les 12 prochains mois ? Si non, la posture distributive est assumée ; si oui, passez à la question 2.",
      "2. Ai-je besoin de lui pour des commandes futures (continuité, priorité en période de tension) ? Si oui, la collaboration protège votre accès.",
      "3. Ai-je une alternative crédible ? Si non, le prix est probablement verrouillé : la posture collaborative est alors une nécessité tactique, pas un choix idéologique.",
      "4. Ai-je plus de valeur à échanger que du prix (volumes, paiement, délais, visibilité) ? Si oui, élargissez le périmètre de la discussion.",
    ],
    example: {
      title: 'Kerowa — décision de posture',
      lines: [
        "Q1 : oui, un transport Juba → Gogrial par mois jusqu'au 30/11. Q2 : oui, les rotations de la saison des pluies en dépendent. Q3 : non, une seule alternative partielle. Q4 : oui, un volume garanti en saison des pluies, un paiement partiel, une visibilité sur nos plans de transport.",
        "Décision : posture collaborative, justifiée par écrit en B7 de la grille.",
      ],
    },
  },
  {
    type: 'concept',
    title: 'Presser un fournisseur récurrent a un coût caché',
    body: [
      "Presser un fournisseur au maximum sur chaque commande érode la relation et dégrade la qualité de service dans la durée. Il cherche alors ses marges ailleurs : sur la qualité, sur les délais, sur l'ordre de passage de ses clients, là où vous ne le voyez pas immédiatement.",
      "Sur une relation récurrente, la collaboration paie sur la durée, même si elle paraît moins efficace transaction par transaction. Un fournisseur qui a gagné sur ce qui compte pour lui vous réserve ses meilleurs camions au pic de la demande.",
    ],
    example: {
      title: 'Kerowa — ce que coûterait une victoire sur le prix',
      lines: [
        "Vous arrachez 2 200 EUR par rotation au lieu de 2 450 : −250 EUR par rotation, soit −1 250 EUR sur 5 rotations.",
        "Deux semaines plus tard, vos rotations passent après celles des clients mieux traités. Une rotation en retard de 4 jours coûte plus que 250 EUR : stock de médicaments à 5 semaines de couverture, pistes qui se ferment.",
      ],
    },
    highlight: "La posture se choisit selon la nature de la relation, ponctuelle ou récurrente. Elle ne se choisit jamais selon l'humeur du jour.",
  },
  {
    type: 'concept',
    title: 'BATNA, points de rupture, marge de manœuvre : le trio de préparation',
    body: [
      "La BATNA (Best Alternative To a Negotiated Agreement, votre meilleure alternative si la négociation échoue) est l'option sur laquelle vous vous repliez : un autre fournisseur qualifié, un délai supplémentaire acceptable, une solution partielle. Sans BATNA, vous ne pouvez pas évaluer si l'offre est bonne, faute d'élément de comparaison. Elle doit être réellement mobilisable, pas hypothétique.",
      "Les points de rupture sont les limites au-delà desquelles vous vous retirez plutôt que d'accepter un accord dégradé. Fixez-les avant la séance : c'est dans le feu de l'échange qu'un négociateur non préparé cède une limite qu'il aurait dû tenir.",
      "La marge de manœuvre réelle est l'écart entre votre ouverture (ce que vous demandez au départ) et votre point de rupture, évaluée dimension par dimension.",
    ],
    example: {
      title: 'Kerowa — le trio sur le prix',
      lines: [
        "Ouverture : 2 100 EUR par rotation (tarif de février). Rupture : 2 600 EUR (plafond budgétaire de 13 000 EUR). Marge de manœuvre : 500 EUR par rotation, soit 2 500 EUR sur 5 rotations.",
        "BATNA : service commun du Logistics Cluster + second transporteur, 10 700 EUR pour 40 t seulement. Elle est faible, donc votre séance se gagnera sur les autres dimensions.",
      ],
    },
    pitfall: "Une BATNA vague (« on trouvera bien quelqu'un ») équivaut à ne pas en avoir. Écrivez le nom, le prix, le délai et la capacité de l'alternative.",
  },
  {
    type: 'concept',
    title: 'Lire le rapport de force : cinq signaux à relever avant la séance',
    body: "Évaluez honnêtement si vous êtes en position de force, équilibrée ou de faiblesse. Cette évaluation détermine la posture et la liste des leviers disponibles. Cherchez des faits, pas des impressions.",
    table: {
      columns: ['Signal', 'Question à vous poser', 'Source de l\'information'],
      rows: [
        ['Nombre d\'alternatives', 'Combien de fournisseurs qualifiés sont réellement disponibles dans mon délai ?', 'Test de marché : demandes de devis, appels'],
        ['Urgence', 'Ai-je une date butoir que le fournisseur connaît ?', 'Planning programme, stock de couverture'],
        ['Historique de prix', 'Quel prix ai-je payé sur le même article lors de la dernière commande ?', 'Registre des achats, factures'],
        ['Structure de coût', 'Quelle part de la hausse s\'explique par ses coûts (carburant, matière) ?', 'Cours des intrants, échange avec le fournisseur'],
        ['Pression sur le fournisseur', 'Quelle contrainte pèse sur lui (saison creuse, stock dormant, retours à vide) ?', 'Questions d\'ouverture, informations du marché'],
      ],
    },
    tip: "Un fournisseur sous pression sur un point précis (saison creuse, besoin de trésorerie) est un fournisseur à qui vous pouvez offrir exactement ce qui lui manque : c'est votre levier le plus puissant.",
  },
  {
    type: 'comparison-table',
    title: 'Fournisseur en position de force : quand le prix est verrouillé, déplacez le terrain',
    columns: ['Levier verrouillé', 'Pourquoi il ne bougera pas', 'Levier de remplacement', 'Contrepartie à proposer'],
    rows: [
      ['Prix', "Fournisseur unique, acheteur sans alternative crédible, demande forte.", "Délai ferme avec pénalité de retard", "Un paiement partiel à la commande ou un prix légèrement supérieur"],
      ['Prix', "Même raison.", "Prix fixe sur les prochaines commandes", "Engagement de volume sur la période suivante"],
      ['Conditions de paiement', "Besoin de trésorerie avant une période creuse.", "Paiement échelonné, avec réception avant décaissement complet", "Avance partielle sur preuve de chargement"],
      ['Volume', "Le fournisseur cherche de l'activité hors pic.", "Conditions préférentielles et statut de client prioritaire", "Engagement de volume ferme sur une période choisie"],
    ],
  },
  {
    type: 'concept',
    title: 'L\'ancrage : le premier chiffre cadre toute la discussion',
    body: [
      "La partie qui annonce le premier chiffre cadre psychologiquement toute la suite, même si ce chiffre est ensuite négocié. Si vous êtes en position d'ouvrir, proposez un chiffre proche de votre résultat idéal, jamais proche de votre point de rupture.",
      "L'ancre doit rester défendable : appuyez-la sur une référence vérifiable (la facture précédente, un cours public, un devis concurrent) pour qu'elle reste crédible. Un chiffre irréaliste fait perdre votre crédibilité et ferme la discussion.",
    ],
    example: {
      title: 'Kerowa — l\'ancre construite sur une référence',
      lines: [
        "Référence vérifiable : facture T06 du 12/02/2026 — 2 100 EUR par rotation.",
        "Argument de cohérence : la seule hausse démontrable, le carburant, représente 108 EUR → prix justifié de 2 208 EUR.",
        "Ancre annoncée : « Sur la base de votre tarif de février, je propose 2 100 EUR par rotation pour 5 rotations fermes. »",
      ],
    },
    pitfall: "Ancrer à 1 500 EUR « pour voir » : le fournisseur y voit de la mauvaise foi, et votre vraie demande devient difficile à défendre.",
  },
  {
    type: 'stat-callout',
    stat: '−18 %',
    caption: "Pour revenir à un prix qui a augmenté de 22 %, il faut le baisser de 18 %, pas de 22 %.",
    context: "Calcul : 1 / 1,22 = 0,82. Un prix passé de 6,00 à 7,32 EUR (+22 %) revient à 6,00 EUR avec une baisse de 18 %. Annoncer « 22 % de remise » à un fournisseur vous fait paraître mal préparé : vérifiez chaque pourcentage avant la séance.",
  },
  {
    type: 'concept',
    title: 'Le silence stratégique : ne comblez jamais le silence qui suit une offre',
    body: [
      "Après avoir formulé une offre ou une contre-offre, taisez-vous. Le silence est inconfortable ; c'est souvent l'autre partie qui, mal à l'aise, le rompt en premier avec une concession. Reprendre la parole trop vite, c'est se faire une concession à soi-même avant que le fournisseur ait réagi.",
      "Pour tenir : formulez l'offre, baissez les yeux sur votre grille, comptez mentalement jusqu'à dix, buvez une gorgée d'eau. Ne justifiez pas, ne reformulez pas, ne soupirez pas.",
    ],
    example: {
      title: 'Kerowa — le silence en action (extrait)',
      lines: [
        "Vous : « Je propose 2 100 EUR par rotation pour 5 rotations fermes. » (silence, 10 secondes)",
        "Awan Fret : « C'est impossible, nous sommes à 2 500… Écoutez, je peux aller à 2 450 si vous payez tout à la commande. »",
        "Le prix a baissé de 50 EUR sans que vous ayez rien lâché, et le fournisseur a révélé son vrai souci : être payé d'avance.",
      ],
    },
    tip: "Le silence n'est pas du mutisme : après quelques secondes, vous pouvez relancer par une question ouverte (« Qu'est-ce qui rend ce chiffre difficile pour vous ? »).",
  },
  {
    type: 'concept',
    title: 'La contrepartie systématique : jamais de geste sans retour',
    body: [
      "Chaque concession demandée par le fournisseur appelle la même réponse : « si je fais X, qu'obtenez-vous en retour ? » Sans cela, le fournisseur apprend que céder sans contrepartie fonctionne, et il le refera systématiquement à chaque négociation suivante.",
      "La contrepartie n'a pas besoin d'être symétrique ni immédiate : elle doit être explicite, mesurable et inscrite dans l'accord. Un geste de petite valeur pour vous peut valoir très cher à l'autre partie.",
    ],
    example: {
      title: 'Kerowa — trois demandes, trois contreparties',
      lines: [
        "Demande : paiement d'avance. Réponse : « Je peux avancer 30 % au chargement, en échange de dates fermes et d'une pénalité de retard. »",
        "Demande : engagement de volume. Réponse : « Je peux m'engager sur 4 rotations en saison des pluies, en échange d'un prix fixe sans surtaxe. »",
        "Demande : liste de chauffeurs plus tard. Réponse : « Livrez-la avant le premier chargement : c'est la condition de la réservation. »",
      ],
    },
    pitfall: "Céder « pour débloquer la discussion » : c'est la concession que le fournisseur retiendra et exigera de nouveau à la prochaine négociation.",
  },
  {
    type: 'comparison-table',
    title: 'Les phrases qui font avancer une négociation',
    columns: ['Moment', 'Ce que vous dites', 'Ce que vous évitez'],
    rows: [
      ['Ouverture', '« Avant de parler chiffres, aidez-moi à comprendre votre situation sur ces trois semaines. »', '« Donnez-moi votre meilleur prix. »'],
      ['Ancrage', '« Sur la base de votre tarif de février, je propose 2 100 EUR par rotation. »', '« Quelle remise pouvez-vous me faire ? »'],
      ['Après une offre', '(silence de 5 à 10 secondes, regard posé sur la grille)', '« Enfin, c\'est une proposition, on peut en discuter… »'],
      ['Concession demandée', '« Si je fais cela, qu\'obtenez-vous en retour ? Je propose en échange… »', '« D\'accord, pour vous aider. »'],
      ['Désaccord sur le prix', '« Je comprends votre contrainte sur le prix. Voyons ce qui peut bouger sur le délai et le paiement. »', '« Vous êtes trop cher. »'],
      ['Clôture', '« Je résume l\'accord point par point, nous le consignons ensemble dans le PV avant de nous quitter. »', '« On se fait confiance, on formalise plus tard. »'],
    ],
  },
  {
    type: 'concept',
    title: 'Négocier dans les règles : mandat, intégrité, non-négociables',
    body: "La négociation s'exerce à l'intérieur de la procédure d'achat, jamais à côté. Cinq limites protègent à la fois votre mission et vous-même en cas d'audit.",
    bullets: [
      "La procédure d'achat prévaut : la négociation ne remplace pas la mise en concurrence (module 02). Elle s'exerce avec le fournisseur retenu, ou avec le fournisseur unique, après justification écrite au dossier.",
      "Votre mandat : n'engagez jamais un montant ou un volume au-delà de votre délégation (matrice du module 01). Tout engagement futur est « sous réserve de validation ».",
      "Intégrité : aucun cadeau, aucune faveur personnelle, conflit d'intérêts déclaré. Un fournisseur qui vous offre quelque chose pendant la négociation est un signal à remonter.",
      "Confidentialité : ne révélez jamais les offres des concurrents ni les prix payés à d'autres fournisseurs ; n'inventez pas d'alternative qui n'existe pas.",
      "Non-négociables : clauses PSEA et code de conduite, conformité de la qualité, éligibilité du fournisseur. Elles ne sont jamais des variables d'ajustement.",
    ],
    pitfall: "Promettre une exclusivité ou un volume « pour conclure ». Vous liez la mission sans en avoir le pouvoir, et vous perdez toute flexibilité sur la qualification d'autres fournisseurs.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'BATNA', definition: "Best Alternative To a Negotiated Agreement : la meilleure alternative disponible si la négociation échoue. Elle doit être nommée, chiffrée et réellement mobilisable." },
      { term: 'Posture distributive', definition: "Négociation à somme nulle centrée sur le prix, adaptée aux achats ponctuels sans enjeu de relation." },
      { term: 'Posture collaborative (intégrative)', definition: "Négociation qui explore plusieurs dimensions pour créer de la valeur commune, adaptée aux relations récurrentes et aux rapports de force défavorables." },
      { term: 'Point de rupture', definition: "Limite fixée avant la négociation, au-delà de laquelle on se retire plutôt que d'accepter un accord dégradé." },
      { term: 'Marge de manœuvre', definition: "Écart entre la position d'ouverture et le point de rupture sur une dimension donnée." },
      { term: 'Résultat idéal / acceptable', definition: "Les deux premières colonnes de la grille : ce que vous visez, puis ce que vous acceptez de bon gré, avant le point de rupture." },
      { term: 'Ancrage', definition: "Effet de cadrage produit par la première proposition chiffrée annoncée dans la négociation." },
      { term: 'Silence stratégique', definition: "Pause volontaire après une offre pour laisser l'autre partie réagir en premier." },
      { term: 'Contrepartie', definition: "Ce que l'on obtient en échange d'une concession : explicite, mesurable, inscrite dans l'accord." },
      { term: 'Paquet (package)', definition: "Combinaison d'accords sur plusieurs dimensions, discutés ensemble pour permettre les échanges." },
      { term: 'PV de négociation', definition: "Document signé qui fixe les points négociés, les positions de départ, les concessions et l'accord final, avant transmission au dossier d'achat." },
      { term: 'Fournisseur unique (sole source)', definition: "Cas où un seul fournisseur est réellement disponible : l'achat sans mise en concurrence doit être justifié par écrit au dossier." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — CADRER LA NÉGOCIATION ET ÉVALUER LE RAPPORT DE FORCE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Ouvrir la grille BATNA, l\'enregistrer et repérer les cellules à remplir',
    intro: "L'outil central du module est le classeur grille-preparation-negociation-batna.xlsx : il oblige à documenter BATNA, objectifs et points de rupture avant d'entrer en salle. Il compte trois onglets. Entrées nécessaires : la lettre de prix du fournisseur, le registre des achats (module 01) et vos échanges avec le programme.",
    steps: [
      {
        title: 'Enregistrez avant de saisir',
        actions: [
          "Ouvrez le fichier grille-preparation-negociation-batna.xlsx.",
          "Fichier > Enregistrer sous : « L1_Grille_BATNA_AwanFret_2026-03-16.xlsx », dans le dossier « Négociation Awan Fret ».",
          "Gardez l'original intact : il vous resservira pour la prochaine négociation.",
        ],
      },
      {
        title: 'Parcourez les trois onglets',
        actions: [
          "« 1. Objet & BATNA » : objet de la négociation (B5 à B7), contexte et position de force (B11 à B14), BATNA (B18 à B21).",
          "« 2. Objectifs & rupture » : une ligne par dimension (Prix, Délai de livraison, Conditions de paiement, Volume / engagement futur), colonnes B à E.",
          "« 3. Concessions » : concessions possibles et contreparties (A6 à B9), concessions interdites (A13 à B15), questions d'ouverture (A18 à A21).",
        ],
      },
      {
        title: 'Traitez l\'exemple pré-rempli',
        actions: [
          "Constatez que la grille est livrée avec un exemple complet (achat de bâches plastiques) dans les cellules de saisie.",
          "Ne le laissez pas en place : vous allez écraser chaque cellule par vos données ; l'exemple sert seulement de modèle de rédaction.",
        ],
      },
    ],
    result: "Le classeur est enregistré sous un nom daté, vous savez où chaque information se saisit, et la liste des cellules d'exemple à remplacer est connue.",
    pitfall: "Laisser une cellule d'exemple en place par oubli (« 4 000 bâches plastiques » dans votre grille de transport) : à relire à la fin de chaque onglet, puis une dernière fois avant l'impression.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Définir l\'objet de la négociation et l\'échéance en une phrase (B5, B6)',
    intro: "Avant toute préparation détaillée, clarifiez en une phrase l'objet exact : quel achat, quel volume, quelle échéance. Si vous ne savez pas l'écrire en une phrase, vous n'êtes pas prêt à négocier.",
    steps: [
      {
        title: 'Rédigez l\'objet (cellule B5)',
        actions: [
          "Utilisez le gabarit : verbe + quantité + périmètre + fournisseur.",
          "Chiffrez : 5 rotations × 10 t = 50 t. Un objet sans quantité ne se négocie pas.",
          "Relisez l'objet avec le responsable programme et le logisticien : leur accord sur le périmètre évite de renégocier en cours de route.",
        ],
      },
      {
        title: 'Distinguez deux échéances (cellule B6)',
        actions: [
          "Échéance opérationnelle : la date butoir imposée par le terrain (pistes impraticables vers le 20/04, stock de médicaments jusqu'au 09/04).",
          "Échéance commerciale : la validité de l'offre du fournisseur (20/03).",
          "Partez de la date butoir et remontez : dernière livraison avant le 17/04, donc dernier chargement le 13/04 au plus tard avec 4 jours de trajet (12/04 avec une marge de piste de 5 jours).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — cellules B5 et B6 remplies',
      lines: [
        "B5 : « Transport routier de 50 t (5 rotations de camions de 10 t) Juba → Gogrial pour le pré-positionnement avant les pluies, auprès d'Awan Fret SARL. »",
        "B6 : « Chargements entre le 23/03 et le 13/04, dernière livraison avant le 17/04 (pistes dégradées dès le 20/04 ; stock de médicaments jusqu'au 09/04 ; offre valable jusqu'au 20/03). »",
      ],
    },
    result: "L'objet tient en une phrase chiffrée, les deux échéances sont distinguées et datées.",
    tip: "Écrivez toujours les dates au format JJ/MM : un jour-semaine accolé (« lundi 23/03 ») évite les erreurs de lecture lors d'une rencontre à l'étranger.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Qualifier la nature de la relation fournisseur et choisir la posture (B7)',
    intro: "La cellule B7 propose deux libellés : « Ponctuelle (posture plutôt distributive) » ou « Récurrente-stratégique (posture plutôt collaborative) ». Vous gardez celui qui correspond à votre cas et vous le justifiez par des faits, pas par une intuition.",
    steps: [
      {
        title: 'Appliquez le test à quatre questions',
        actions: [
          "Reverrai-je ce fournisseur dans les 12 prochains mois ?",
          "Ai-je besoin de lui pour des commandes futures, notamment en période de tension ?",
          "A-t-il des concurrents réellement disponibles sur mon périmètre ?",
          "Ai-je plus à échanger que du prix (volume, paiement, visibilité) ?",
        ],
      },
      {
        title: 'Cherchez les faits dans le registre',
        actions: [
          "Ouvrez le registre des flux du module 01 et filtrez le fournisseur : nombre de transactions, montants, dernière date.",
          "Interrogez le logisticien et la finance (retards, litiges), et comptez vos besoins futurs avec lui jusqu'à la fin du projet.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — registre et décision',
      lines: [
        "Registre : une transaction avec Awan Fret (T06, 12/02/2026, 4 200 EUR, 2 camions, livrés sans retard). Peter A. : « Seul transporteur qui accepte la piste de Gogrial ; deux bons chauffeurs ».",
        "Besoins futurs : un transport Juba → Gogrial par mois jusqu'au 30/11/2026, soit au moins 8 rotations après les pluies.",
        "B7 : « Récurrente-stratégique (posture plutôt collaborative) — Awan Fret est notre seul transporteur sur l'axe Juba → Gogrial jusqu'à la fin du projet ; une posture de pression sur le prix compromettrait nos rotations de la saison des pluies. »",
      ],
    },
    result: "La posture est choisie avant l'entrée en salle, justifiée par au moins deux faits datés.",
    pitfall: "Choisir la posture selon l'humeur du jour (« il m'a énervé, je vais le presser »). La posture est un choix stratégique, fait à froid.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Collecter les faits du rapport de force : test de marché, historique, structure de coût',
    intro: "Une évaluation du rapport de force sans faits est une opinion. Vous disposez de moins de 24 heures : trois séries de vérifications suffisent, chacune produit un chiffre à écrire dans la grille.",
    steps: [
      {
        title: 'Faites un test de marché écrit',
        actions: [
          "Envoyez le même message à trois transporteurs de Juba avant 12 h : 5 rotations de 10 t, Juba → Gogrial, chargements du 23/03 au 13/04 ; demandez prix, disponibilité et réponse avant 14 h.",
          "Notez réponse, date et heure : c'est votre preuve de test de marché pour le dossier d'achat.",
        ],
      },
      {
        title: 'Retrouvez votre prix de référence et décomposez la hausse',
        actions: [
          "Facture T06 : 4 200 EUR pour 2 camions, soit 2 100 EUR par rotation. Hausse : 2 500 − 2 100 = 400 EUR, soit 400 / 2 100 = 19,0 %.",
          "Demandez à Peter A. le prix du gasoil relevé à Juba : 1,20 EUR/L en février, 1,35 EUR/L aujourd'hui.",
          "Estimez la consommation d'une rotation : environ 1 540 km aller-retour × 47 L aux 100 km = environ 720 L.",
          "Calculez l'effet carburant : 720 × 0,15 = 108 EUR. Part expliquée : 108 / 400 = 27 %. Part non expliquée : 292 EUR, soit 73 %.",
        ],
      },
    ],
    table: {
      columns: ['Transporteur', 'Réponse du 16/03 (14 h)', 'Capacité', 'Utilisable avant le 20/04 ?'],
      rows: [
        ['Awan Fret (A)', 'Offre du matin : 2 500 EUR par rotation', '8 camions, 6 disponibles', 'Oui, dès le 23/03'],
        ['Transporteur B', 'Refuse l\'axe : assurance limitée à Wau', '—', 'Non'],
        ['Transporteur C', '3 400 EUR par rotation, sans engagement de date', '2 camions', 'Seulement à partir du 09/04'],
      ],
    },
    result: "Trois faits chiffrés : un seul transporteur utilisable à temps, un prix de référence vérifiable (2 100 EUR), et une hausse dont 73 % ne s'expliquent pas par ses coûts.",
    pitfall: "Annoncer au fournisseur « votre hausse n'est pas justifiée » sans avoir calculé la part expliquée : il vous répondra avec ses vrais coûts (assurance, barrages, pneus) et vous perdrez la main. Présentez le calcul comme une question, pas comme une accusation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Renseigner le contexte de force relative (B11 à B14) et conclure sur la posture',
    intro: "Les quatre lignes de la section « Contexte — position de force relative » transforment vos faits en un constat opposable. Chaque cellule répond à une question précise ; une cellule vague est une cellule non remplie.",
    steps: [
      {
        title: 'Remplissez les quatre lignes',
        actions: [
          "B11 — Nombre de fournisseurs qualifiés réellement disponibles : un chiffre et la source (test de marché du 16/03).",
          "B12 — Position de force estimée (acheteur / équilibrée / fournisseur) : un mot, puis la raison en une phrase.",
          "B13 — Facteur de pression sur l'acheteur : la contrainte datée qui vous limite.",
          "B14 — Facteur de pression sur le fournisseur : s'il n'y en a aucun identifié, écrivez-le et marquez « à reconfirmer avant la rencontre ».",
        ],
      },
      {
        title: 'Faites la synthèse',
        actions: [
          "Si vous êtes en position de faiblesse, écrivez-le noir sur blanc, et relisez B7 : la posture doit être cohérente avec le rapport de force.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section « Contexte » remplie',
      lines: [
        "B11 : « 1 seul — Awan Fret (B refuse l'axe ; C disponible à partir du 09/04 seulement). Test de marché du 16/03, 14 h. »",
        "B12 : « Fournisseur — il connaît la saturation du marché avant les pluies, et sait que nous n'avons pas d'alternative utilisable à temps. »",
        "B13 : « Rupture de stock de médicaments vers le 09/04 ; pistes impraticables dès le 20/04 ; offre valable jusqu'au 20/03. »",
        "B14 : « Aucun identifié — hypothèse à vérifier : son activité chute en saison des pluies. À reconfirmer avant la rencontre. »",
      ],
    },
    result: "Livrable L1 terminé : l'onglet 1 (partie haute) donne un diagnostic factuel, la posture est justifiée, et l'hypothèse à vérifier chez le fournisseur est notée.",
    tip: "L'hypothèse de la cellule B14 est votre meilleure piste : si vous découvrez une pression sur le fournisseur (saison creuse, besoin de trésorerie), elle transforme la séance.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — DOCUMENTER LA BATNA
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 4',
    title: 'Lister toutes les alternatives possibles si la négociation échoue',
    intro: "La BATNA est ce que vous faites si l'accord n'a pas lieu. Avant de choisir la meilleure, on les liste toutes : une alternative écartée sans examen est une alternative perdue. Trois familles à explorer.",
    steps: [
      {
        title: 'Parcourez les trois familles d\'alternatives',
        actions: [
          "Un autre fournisseur ou prestataire qualifié (autre transporteur, autre grossiste).",
          "Une autre solution pour le même besoin (service commun inter-agences, moyen propre, autre modalité).",
          "Un ajustement du besoin ou du calendrier (réduire le tonnage, livrer plus tard, découper en lots).",
        ],
      },
      {
        title: 'Consultez ceux qui connaissent le terrain',
        actions: [
          "Appelez le point focal du Logistics Cluster (module 01) : propose-t-il un service commun de transport vers Wau ?",
          "Demandez au logisticien (Peter A.) les moyens propres de Kerowa.",
          "Posez au responsable programme la question : « Quel tonnage est réellement critique avant le 20/04 ? »",
        ],
      },
    ],
    table: {
      columns: ['Alternative envisagée', 'Retenue ?', 'Motif'],
      rows: [
        ['Service commun de transport du Logistics Cluster (Juba → Wau)', 'Oui', 'Existe, tarif de recouvrement'],
        ['Transporteur C (Juba → Gogrial)', 'Oui', 'Disponible, mais tard et plus cher'],
        ['Camion propre de Kerowa (5 t) Juba → Gogrial', 'Non', 'Capacité insuffisante, usage médical prioritaire'],
        ['Acheter à Wau les 14 t de vivres importés', 'Non', 'Huile enrichie et sel iodé non conformes localement'],
        ['Reporter le pré-positionnement après les pluies', 'Non', 'Pistes fermées de mai à octobre'],
      ],
    },
    result: "Cinq alternatives listées, deux retenues pour examen, trois écartées avec un motif écrit.",
    pitfall: "Prendre la première alternative qui vient à l'esprit : elle est rarement la meilleure, et c'est la seule que vous aurez testée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 4',
    title: 'Tester que chaque alternative est réellement mobilisable',
    intro: "Une BATNA théorique est une illusion. La grille pose la question explicitement (B19) : « Cette alternative est-elle réellement mobilisable (pas juste théorique) ? ». Pour y répondre, vous passez chaque alternative à un test de cinq contrôles, appuyés sur une réponse écrite.",
    steps: [
      {
        title: 'Appliquez les cinq contrôles à chaque alternative',
        actions: [
          "Un interlocuteur nommé qui a confirmé (nom, date, canal).",
          "Une capacité chiffrée (tonnes, nombre de camions).",
          "Une date de disponibilité ferme.",
          "Un prix ou un tarif écrit.",
          "Une condition d'accès (priorité, allocation, délai de demande) et la preuve écrite.",
        ],
      },
      {
        title: 'Passez les appels et notez les réponses',
        actions: [
          "Appelez le point focal du Cluster : demandez la capacité, la date, le tarif, la procédure de demande.",
          "Appelez le transporteur C : confirmez le prix, les 2 camions, la date du 09/04.",
          "Demandez une confirmation par message pour chaque réponse reçue à l'oral.",
        ],
      },
      {
        title: 'Classez chaque alternative',
        actions: [
          "Oui : les cinq contrôles passés. Partiellement : un ou deux manquants. Non : l'alternative n'existe pas ou n'est pas confirmée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — résultats des tests (16/03, 15 h 30 – 17 h)',
      lines: [
        "Cluster : Joseph (point focal logistique) confirme 2 rotations de 10 t Juba → Wau à partir du 06/04, tarif de recouvrement 1 800 EUR par rotation, priorité aux secteurs santé et nutrition, demande à déposer avant le 24/03. Allocation non garantie. → Partiellement.",
        "Transporteur C : confirme 2 camions, 3 400 EUR par rotation, à partir du 09/04, sans engagement de date de livraison. → Partiellement.",
        "Wau → Gogrial : camion Kerowa de 10 t, 150 EUR de carburant par rotation (Peter A.). → Oui.",
      ],
    },
    result: "Les deux alternatives retenues sont classées « Partiellement mobilisables », avec preuve écrite de chaque réponse.",
    tip: "Demandez au Cluster de réserver provisoirement les créneaux sans engagement : si cela marche, votre BATNA devient plus solide avant même la séance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 4',
    title: 'Chiffrer le coût, le délai et le risque de la BATNA',
    intro: "La grille demande le coût et le risque de recourir à l'alternative (B20). Un chiffre permet de juger si l'offre du fournisseur est réellement bonne : c'est la comparaison qui donne sa valeur à la BATNA.",
    steps: [
      {
        title: 'Calculez le coût total et le coût à la tonne',
        actions: [
          "Cluster : (1 800 + 150) × 2 rotations = 3 900 EUR pour 20 t.",
          "Transporteur C : 3 400 × 2 rotations = 6 800 EUR pour 20 t.",
          "Total BATNA : 3 900 + 6 800 = 10 700 EUR pour 40 t, soit 10 700 / 40 = 267,50 EUR/t.",
          "Offre Awan Fret : 12 500 / 50 = 250,00 EUR/t.",
        ],
      },
      {
        title: 'Chiffrez le délai et ce qui n\'est pas couvert',
        actions: [
          "Premier chargement : 06/04 au lieu du 23/03, soit 14 jours de retard.",
          "Tonnage non couvert : 50 − 40 = 10 t (20 % du besoin).",
          "Médicaments : chargés au mieux le 06/04, arrivés vers le 10/04, après la rupture estimée du 09/04.",
        ],
      },
      {
        title: 'Déduisez un prix équivalent',
        actions: [
          "Prix équivalent par rotation de 10 t = 267,50 × 10 = 2 675 EUR : au-delà, la BATNA devient moins chère par tonne.",
          "Ce chiffre servira de plafond logique pour votre point de rupture sur le prix.",
        ],
      },
    ],
    result: "Le coût, le délai et le risque de la BATNA sont écrits ; vous savez que même l'offre affichée est meilleure que votre alternative.",
    pitfall: "Comparer le coût total (10 700 contre 12 500) sans ramener à la tonne et sans regarder la couverture : la BATNA semble moins chère alors qu'elle livre moins, plus tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 4',
    title: 'Noter la force de la BATNA et en tirer les conséquences (B18 à B21)',
    intro: "Quatre cellules à remplir, une par question de la grille. Une BATNA faible, honnêtement documentée, vaut mieux qu'aucune BATNA : elle vous dit jusqu'où vous pouvez pousser, et elle détermine l'intensité de votre préparation.",
    steps: [
      {
        title: 'Remplissez les quatre cellules',
        actions: [
          "B18 — Alternative si la négociation échoue totalement : décrivez-la avec chiffres.",
          "B19 — Mobilisable ? : « Partiellement », avec ce qui manque.",
          "B20 — Coût / risque : le coût à la tonne, le retard, le tonnage non couvert, le risque critique.",
          "B21 — Force : Forte, Moyenne ou Faible, avec l'implication pour la préparation.",
        ],
      },
      {
        title: 'Notez la force avec une règle écrite',
        actions: [
          "Forte : couvre au moins 90 % du besoin dans le délai, à un coût au plus 10 % au-dessus de l'offre.",
          "Moyenne : couvre 60 à 90 % du besoin, ou dépasse le délai de moins de 5 jours.",
          "Faible : couvre moins de 60 %, dépasse le délai de plus de 5 jours, ou laisse un besoin critique sans réponse dans le délai.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — onglet 1, cellules B18 à B21',
      lines: [
        "B18 : « Service commun du Cluster (2 rotations, 06/04) + transporteur C (2 rotations, 09/04) + camion Kerowa Wau → Gogrial : 40 t pour 10 700 EUR. »",
        "B19 : « Partiellement : allocation du Cluster non garantie ; C sans engagement de date ; 10 t non couvertes. »",
        "B20 : « 267,50 EUR/t contre 250 ; retard de 14 jours ; risque de rupture de médicaments le 09/04, arrivée vers le 10/04. »",
        "B21 : « Faible — un besoin critique n'est pas couvert dans le délai. Impose une préparation rigoureuse des dimensions délai, paiement et volume. »",
      ],
    },
    result: "Livrable L2 terminé : BATNA nommée, chiffrée, testée, notée « Faible », avec actions pour la renforcer.",
    tip: "Renforcez la BATNA avant la séance : déposez dès ce soir la demande de créneaux au Cluster et demandez au transporteur C de bloquer ses 2 camions jusqu'au 20/03, sans engagement. Ne révélez jamais le détail de votre BATNA au fournisseur.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — OBJECTIFS ET POINTS DE RUPTURE (ONGLET 2)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Prioriser les dimensions : ce qui compte pour vous, ce qui compte pour lui',
    intro: "Avant de chiffrer, vous classez les quatre dimensions de l'onglet 2 selon l'importance qu'elles ont pour vous et pour le fournisseur. L'écart de valeur entre les deux colonnes est la matière de l'accord : vous cédez ce qui compte peu pour vous et beaucoup pour lui.",
    steps: [
      {
        title: 'Notez chaque dimension de 1 à 5, deux fois',
        actions: [
          "Colonne « Pour nous » : 5 = vital, 1 = secondaire. Basez-vous sur le risque opérationnel et financier.",
          "Colonne « Pour lui » : votre hypothèse sur ses priorités (à confirmer par les questions d'ouverture).",
          "Repérez les dimensions où l'écart est supérieur ou égal à 2 points.",
        ],
      },
      {
        title: 'Identifiez la priorité absolue et la monnaie d\'échange',
        actions: [
          "Priorité absolue : la dimension notée 5 pour vous (ici le délai).",
          "Monnaie d'échange : les dimensions où le fournisseur a plus de besoin que vous (paiement, volume).",
        ],
      },
    ],
    table: {
      columns: ['Dimension', 'Pour nous (1-5)', 'Pour lui (1-5, hypothèse)', 'Lecture'],
      rows: [
        ['Prix', '3', '5', 'Il tiendra ; le budget absorbe jusqu\'à 13 000 EUR'],
        ['Délai de livraison', '5', '2', 'Notre priorité absolue ; il y accorde peu d\'importance : à échanger'],
        ['Conditions de paiement', '3', '5', 'Il veut être payé vite ; nous pouvons céder une avance partielle'],
        ['Volume / engagement futur', '3', '4', 'Il cherche de l\'activité en saison des pluies : monnaie d\'échange majeure'],
      ],
    },
    result: "Le délai est la priorité absolue ; paiement et volume sont les monnaies d'échange ; le prix est la dimension la moins susceptible de bouger.",
    pitfall: "Noter les cinq dimensions à 5 « par prudence » : plus aucun échange n'est possible, car tout paraît vital.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Dimension Prix : fixer le résultat idéal, acceptable et le point de rupture (ligne 5)',
    intro: "Le prix se fixe à partir de trois références chiffrées : votre prix de référence (idéal), votre budget (acceptable) et le plafond que vous ne franchirez pas (rupture). Chaque valeur est exprimée en EUR par rotation et en total, et comparée à l'offre affichée.",
    steps: [
      {
        title: 'Calculez les trois valeurs',
        actions: [
          "Idéal (B5) : retour au tarif de février, 2 100 EUR par rotation. Total : 2 100 × 5 = 10 500 EUR.",
          "Acceptable (C5) : le solde budgétaire de la ligne transport, 12 000 EUR / 5 = 2 400 EUR par rotation.",
          "Rupture (D5) : solde de la ligne + marge accordée par la coordinatrice pays, (12 000 + 1 000) / 5 = 2 600 EUR par rotation, soit 13 000 EUR.",
        ],
      },
      {
        title: 'Vérifiez les trois valeurs',
        actions: [
          "Rupture par rapport à la BATNA : 2 600 est inférieur à 2 675 EUR (prix équivalent calculé à la procédure 2) : au-dessus de 2 675, la BATNA serait moins chère à la tonne.",
          "Pourcentage par rapport à l'offre de 2 500 : idéal −16 %, acceptable −4 %, rupture +4 %.",
          "Vérifiez le sens : un retour de +19 % se fait par une baisse de −16 % sur l'offre, pas de −19 %.",
        ],
      },
      {
        title: 'Rédigez la note (colonne E)',
        actions: [
          "Indiquez ce qui explique la hausse (108 EUR carburant, 292 EUR de rapport de force) et la conduite à tenir si le prix ne bouge pas.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ligne 5 de l\'onglet 2',
      lines: [
        "B5 : « Retour au tarif de février : 2 100 EUR par rotation (10 500 EUR) » ; C5 : « 2 400 EUR par rotation (12 000 EUR, solde de la ligne transport) » ; D5 : « 2 600 EUR par rotation (13 000 EUR, ligne + marge validée) ; au-delà, nous activons la BATNA ».",
        "E5 : « Hausse de 400 EUR dont 108 EUR expliqués par le carburant. Le prix ne bougera probablement pas : accepter jusqu'à 2 500 uniquement contre délai garanti et paiement échelonné. »",
      ],
    },
    result: "La ligne Prix est complète : trois valeurs chiffrées, un plafond cohérent avec le budget et avec la BATNA.",
    pitfall: "Fixer un point de rupture sans lien avec le budget ou la BATNA : il sera abandonné dès la première pression, car vous ne saurez pas le défendre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Dimension Délai de livraison : planifier à rebours et fixer les trois valeurs (ligne 6)',
    intro: "Le délai est votre priorité absolue : sa valeur se calcule en partant de la date butoir et en remontant, rotation par rotation. Une date de livraison sans date de chargement n'est pas négociable.",
    steps: [
      {
        title: 'Remontez à partir de la date butoir',
        actions: [
          "Date butoir : pistes impraticables dès le 20/04. Dernière livraison visée : au plus tard le 17/04 (3 jours de marge).",
          "Trajet en saison sèche : 3 à 4 jours ; avec marge de piste : 5 jours. Dernier chargement : 17/04 − 5 jours = 12/04.",
          "Médicaments : disponibles à Juba vers le 24/03, dédouanés vers le 27/03, chargés au plus tard le 01/04 pour arriver avant le 06/04.",
        ],
      },
      {
        title: 'Fixez les trois valeurs',
        actions: [
          "Idéal (B6) : dernière rotation livrée le 10/04, chargement sous 48 h après commande.",
          "Acceptable (C6) : dernière rotation livrée au plus tard le 17/04, chaque rotation livrée sous 5 jours après chargement.",
          "Rupture (D6) : dernière livraison après le 20/04, ou aucun engagement de date.",
        ],
      },
    ],
    table: {
      columns: ['Rotation', 'Chargement visé', 'Contenu principal', 'Livraison au plus tard (5 j)'],
      rows: [
        ['R1', 'Lun. 23/03', 'Matériel, vivres importés', '28/03'],
        ['R2', 'Lun. 30/03', 'Médicaments et consommables (5 t)', '04/04'],
        ['R3', 'Ven. 03/04', 'Matériel, kits d\'hygiène', '08/04'],
        ['R4', 'Mer. 08/04', 'Vivres importés, pièces', '13/04'],
        ['R5', 'Ven. 10/04', 'Matériel de saison des pluies', '15/04'],
      ],
    },
    result: "La ligne Délai donne trois dates, un calendrier par rotation et une priorité claire : les médicaments partent le 30/03.",
    tip: "En note E6, écrivez « Dimension critique — priorité absolue de cette négociation » : cette phrase vous protège de la tentation de sacrifier le délai pour gagner un pourcentage sur le prix.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Dimension Conditions de paiement : mesurer l\'exposition et fixer les valeurs (ligne 7)',
    intro: "L'offre du fournisseur est un paiement de 100 % à la commande. Avant de répondre, vous calculez l'argent que vous exposez : il mesure ce que vous pouvez perdre en cas de non-livraison, et ce que vaut une avance partielle pour lui.",
    steps: [
      {
        title: 'Calculez l\'exposition',
        actions: [
          "Offre du fournisseur : 100 % à la commande = 12 500 EUR avancés pour des services rendus jusqu'à 3 semaines plus tard.",
          "Avec une avance de 30 % au chargement de chaque rotation : 30 % × 2 450 = 735 EUR par rotation, au maximum 2 rotations en cours = 1 470 EUR d'exposition.",
          "Réduction de l'exposition : 1 − (1 470 / 12 500) = 88 %.",
        ],
      },
      {
        title: 'Fixez les trois valeurs',
        actions: [
          "Idéal (B7) : paiement à 30 jours après livraison conforme.",
          "Acceptable (C7) : 30 % à la remise du camion chargé (preuve de chargement signée), le solde à 15 jours après livraison conforme.",
          "Rupture (D7) : paiement intégral avant chargement, sans garantie.",
        ],
      },
      {
        title: 'Vérifiez avec la finance',
        actions: [
          "Demandez à Joseph K. si le virement à 15 jours est faisable (délai habituel de règlement) et quelle pièce déclenche le paiement.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ligne 7 et note',
      lines: [
        "E7 : « Un paiement échelonné sécurise la réception avant décaissement complet : exposition maximale de 1 470 EUR au lieu de 12 500 EUR. Pièces de déclenchement : preuve de chargement signée (30 %), waybill signé et bon de réception GRN (70 %). »",
      ],
    },
    result: "La ligne Paiement est chiffrée, avec la pièce qui déclenche chaque versement et l'accord de la finance.",
    pitfall: "Accepter un « paiement partiel » sans fixer la pièce qui le déclenche : le fournisseur réclamera le solde à la livraison déclarée, avant votre contrôle de réception.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Dimension Volume / engagement futur : chiffrer la monnaie d\'échange et ses limites (ligne 8)',
    intro: "C'est le levier principal quand le prix est verrouillé : un engagement de volume peut valoir beaucoup pour un fournisseur qui cherche de l'activité. Mais il engage la mission : vous le chiffrez et vous vérifiez qu'il reste dans votre mandat.",
    steps: [
      {
        title: 'Estimez ce que vaut l\'engagement pour lui',
        actions: [
          "Demandez à Peter A. ce que les transporteurs ont fait payer pendant les pluies l'an dernier : surtaxe d'environ 20 %.",
          "Calculez la valeur d'un prix fixe pour 4 rotations en saison des pluies : 4 × 2 450 × 20 % = 1 960 EUR économisés par Kerowa.",
        ],
      },
      {
        title: 'Vérifiez le mandat',
        actions: [
          "Engagement envisagé : minimum de 4 rotations entre le 01/05 et le 30/09, soit 4 × 2 450 = 9 800 EUR.",
          "Cumul avec la commande actuelle : 12 250 + 9 800 = 22 050 EUR : niveau coordinatrice pays (10 000 à 60 000 EUR), donc « sous réserve de validation ».",
        ],
      },
      {
        title: 'Fixez les trois valeurs',
        actions: [
          "Idéal (B8) : aucun engagement de volume.",
          "Acceptable (C8) : minimum de 4 rotations en saison des pluies, sous réserve de validation et de financement, contre prix fixe sans surtaxe et chargement prioritaire.",
          "Rupture (D8) : engagement ferme sans contrepartie, ou engagement hors de votre délégation.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ligne 8 et note',
      lines: [
        "E8 : « Levier principal si le prix reste verrouillé. Valeur estimée pour Kerowa : 1 960 EUR (surtaxe de 20 % évitée sur 4 rotations). Engagement toujours subordonné à la validation de Grace M. »",
      ],
    },
    result: "La ligne Volume est chiffrée, avec un plafond d'engagement clair et la mention « sous réserve de validation ».",
    pitfall: "Fractionner les engagements pour rester sous 10 000 EUR (12 250 d'un côté, 9 800 de l'autre) : c'est un contournement de la procédure. Les montants d'un même fournisseur s'additionnent pour déterminer le niveau de validation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Contrôler la cohérence de l\'onglet 2 et faire valider votre mandat',
    intro: "Votre point de rupture n'a de valeur que si votre hiérarchie le connaît et vous couvre. Un mandat écrit vous permet de dire non sans appeler votre responsable à chaque tour, et de partir si nécessaire.",
    steps: [
      {
        title: 'Faites quatre contrôles de cohérence',
        actions: [
          "Sens : pour chaque dimension, idéal plus favorable qu'acceptable, lui-même plus favorable que rupture.",
          "BATNA : chaque point de rupture est au moins aussi bon que ce que vous obtiendriez en recourant à l'alternative.",
          "Budget : le total au point de rupture ne dépasse pas ligne + marge validée.",
          "Notes : chaque ligne de la colonne E contient une justification chiffrée, pas un adjectif.",
        ],
      },
      {
        title: 'Envoyez la demande de mandat',
        actions: [
          "Envoyez à Grace M. l'onglet 2 avec trois questions fermées : « Validez-vous les points de rupture ? Autorisez-vous la marge de 1 000 EUR ? Qui peut valider un engagement de 4 rotations ? »",
          "Fixez une échéance de réponse : mardi 17/03, 16 h.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — message à la coordinatrice pays (17/03, 9 h)',
      lines: [
        "Objet : Awan Fret — mandat de négociation avant la rencontre de mercredi 10 h.",
        "Pièce jointe : onglet 2. Ruptures : prix 2 600 EUR/rotation (13 000 EUR), dernière livraison avant le 20/04, aucun paiement intégral avant chargement, aucun volume sans prix fixe.",
        "Questions : 1. Validez-vous ces ruptures et la marge de 1 000 EUR ? 2. Validez-vous, sous réserve, 4 rotations (9 800 EUR) en saison des pluies ? 3. Pouvez-vous être jointe mercredi à 11 h 15 ?",
        "Réponse de Grace M. (17/03, 15 h 40) : points de rupture validés ; engagement de 4 rotations validé sous réserve de financement ; appel à 11 h 15 confirmé.",
      ],
    },
    result: "Livrable L3 terminé : onglet 2 complet, cohérent avec le budget et la BATNA, mandat écrit validé par la coordinatrice pays.",
    tip: "Gardez la réponse de Grace M. imprimée avec la grille : si le fournisseur conteste votre autorité en séance, vous pouvez dire que votre mandat est écrit.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — CONCESSIONS, QUESTIONS, PLAN DE SÉANCE (ONGLET 3)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Lister les concessions possibles et leur contrepartie précise (onglet 3, A6 à B9)',
    intro: "Première section de l'onglet 3 : « Concessions possibles — et leur contrepartie ». La règle du module s'applique à chaque ligne : on ne concède jamais sans contrepartie. Vous préparez vos échanges à froid, avant que la pression de la séance ne vous pousse à céder gratuitement.",
    steps: [
      {
        title: 'Reprenez les monnaies d\'échange de l\'onglet 2',
        actions: [
          "Reprenez la priorisation de la procédure 3 : ce qui compte peu pour vous et beaucoup pour lui.",
          "Pour chaque concession, estimez son coût pour vous et sa valeur pour le fournisseur.",
        ],
      },
      {
        title: 'Associez à chacune une contrepartie mesurable',
        actions: [
          "Écrivez la phrase : « J'accepte [concession] en échange de [contrepartie précise et mesurable] ».",
          "Classez-les de la moins coûteuse à la plus coûteuse pour vous, puis saisissez-les : colonne A (lignes 6 à 9) la concession, colonne B la contrepartie.",
        ],
      },
    ],
    table: {
      columns: ['Ce que je peux céder (A)', 'Coût pour nous', 'Valeur pour lui', 'Contrepartie précise (B)'],
      rows: [
        ['Livraison sous 5 jours au lieu de 4', '1 jour de marge', 'Faisabilité sur la piste', 'Pénalité par jour de retard et résiliation de la rotation au-delà de 5 jours de retard'],
        ['Paiement partiel de 30 % au chargement', 'Exposition maximale de 1 470 EUR', 'Trésorerie avant la saison creuse', 'Dates de chargement fermes et pénalité de retard de 2 % par jour, plafonnée à 10 %'],
        ['Prix proche de l\'affiché, jusqu\'à 2 500 EUR par rotation', '+100 EUR par rotation par rapport à l\'acceptable', 'Élevée', 'Délai garanti et paiement échelonné, jamais le prix seul'],
        ['Engagement de 4 rotations en saison des pluies, sous réserve', 'Engagement de 9 800 EUR', 'Activité pendant la saison creuse', 'Prix fixe sans surtaxe, chargement sous 72 h, camion de réserve'],
      ],
    },
    result: "Quatre concessions préparées, chacune avec sa contrepartie chiffrée et leur ordre d'offre.",
    pitfall: "Écrire une contrepartie vague (« un geste commercial »). Une contrepartie qui n'est pas mesurable ne se vérifie pas et ne s'écrit pas dans un PV.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Fixer les concessions que vous ne ferez jamais (onglet 3, A13 à B15)',
    intro: "Deuxième section de l'onglet 3 : « Concessions à ne jamais faire ». Écrire ces limites avant la séance évite de les franchir sous la pression. Chaque ligne comporte la concession interdite et sa raison, pour que vous puissiez l'expliquer au fournisseur et à votre hiérarchie.",
    steps: [
      {
        title: 'Cherchez ce qui engage la conformité ou la sécurité',
        actions: [
          "Qualité et conformité : spécifications techniques, conditions de transport des médicaments, standards applicables.",
          "Protection : clauses PSEA, code de conduite, liste nominative des chauffeurs (module 01).",
          "Protection financière : paiement sans garantie, avance totale, clauses d'exclusivité.",
        ],
      },
      {
        title: 'Rédigez trois lignes avec la raison',
        actions: [
          "Colonne A : la concession interdite, à l'infinitif. Colonne B : la raison, en une phrase.",
          "Remplacez les deux lignes d'exemple et complétez la ligne 15.",
        ],
      },
    ],
    table: {
      columns: ['Concession interdite (A)', 'Raison (B)'],
      rows: [
        ['Renoncer à la clause PSEA, au code de conduite signé et à la liste nominative des chauffeurs, ou accepter des camions non bâchés ou un chargement mixte avec carburant ou produits chimiques', 'Compromet la protection des communautés et la qualité des médicaments transportés : jamais négociable, pour aucun prix'],
        ['Payer 100 % avant chargement sans aucune garantie de livraison', 'Expose la mission à une perte sèche en cas de non-livraison, sur 12 500 EUR'],
        ['Accepter une clause d\'exclusivité qui interdit de qualifier un autre transporteur', 'Verrouille notre dépendance à un fournisseur unique que la matrice de fragilité classe déjà en orange'],
      ],
    },
    result: "Trois limites écrites, argumentées, que vous pouvez opposer au fournisseur et à votre hiérarchie.",
    tip: "Une concession interdite n'est pas un refus de dialogue : proposez toujours ce que vous pouvez faire à la place (« je ne peux pas payer 100 % d'avance, mais je peux avancer 30 % au chargement »).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Préparer les questions d\'ouverture (onglet 3, A18 à A21)',
    intro: "Celui qui pose les questions en premier apprend généralement plus qu'il ne révèle. Quatre à cinq questions ouvertes, préparées à l'avance, vous permettent de comprendre la position du fournisseur avant de dévoiler la vôtre, et de vérifier l'hypothèse notée en B14.",
    steps: [
      {
        title: 'Partez de vos hypothèses',
        actions: [
          "Listez ce que vous ne savez pas : capacité réelle, engagements ailleurs, pression sur lui, origine de la hausse.",
          "Une question par inconnue, commençant par « Quelle », « Comment », « Pouvez-vous m'expliquer ».",
        ],
      },
      {
        title: 'Saisissez les questions dans la grille',
        actions: [
          "Remplacez les trois questions génériques des lignes 18 à 20 et ajoutez la question de la ligne 21.",
          "Sous chaque question, notez en brouillon ce que vous voulez entendre et ce que vous ferez de la réponse.",
        ],
      },
    ],
    table: {
      columns: ['Question (A18 à A21)', 'Hypothèse testée', 'Ce que vous ferez de la réponse'],
      rows: [
        ['Quelle est votre disponibilité réelle en camions du 23/03 au 17/04, et jusqu\'à quand la piste est-elle praticable selon vous ?', 'Capacité suffisante, date de fermeture des pistes', 'Confirmer le calendrier des 5 rotations'],
        ['Avez-vous déjà des engagements avec d\'autres organisations sur ces mêmes camions ?', 'Concurrence pour les camions', 'Mesurer la valeur d\'un chargement prioritaire'],
        ['Comment s\'annonce votre activité pendant la saison des pluies, et quelles contraintes avez-vous sur la flotte ?', 'Pression sur lui : saison creuse, camions à vide (B14)', 'Si confirmée : engagement de volume comme levier'],
        ['Qu\'est-ce qui explique l\'écart de 400 EUR par rotation : carburant, pistes, assurance, demande ?', 'Structure de coût (108 EUR de carburant)', 'Isoler la part négociable'],
      ],
    },
    result: "Quatre questions ouvertes, chacune reliée à une hypothèse et à une décision.",
    pitfall: "Poser des questions fermées (« Pouvez-vous baisser le prix ? ») : le fournisseur répond oui ou non, et vous n'apprenez rien. Les questions ouvertes font parler.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Construire le plan de séance d\'une page : agenda, rôles, ancre, échelle de concessions',
    intro: "La grille est complète. Le plan de séance en est la version utilisable en salle : une seule page A4, à poser à côté de la grille. Il liste le déroulé, les rôles, votre ancre et l'ordre de vos concessions.",
    steps: [
      {
        title: 'Définissez l\'agenda et les rôles',
        actions: [
          "Découpez la séance par thème avec des horaires, en prévoyant une suspension à mi-parcours.",
          "Désignez le scribe : Esther W. (assistante achats) tient le journal de négociation ; vous parlez ; Grace M. est joignable par téléphone à 11 h 15.",
        ],
      },
      {
        title: 'Rédigez l\'ancre et l\'échelle de concessions',
        actions: [
          "Ancre : le chiffre, sa référence vérifiable et la condition associée.",
          "Pour chaque dimension : ouverture, premier pas, second pas, limite (acceptable), rupture.",
        ],
      },
      {
        title: 'Listez les pièces à emporter',
        actions: [
          "Grille imprimée, réponse de la coordinatrice pays, facture T06, test de marché, trame du PV ouverte sur votre ordinateur, calculatrice.",
        ],
      },
    ],
    table: {
      columns: ['Horaire', 'Séquence', 'Objectif'],
      rows: [
        ['10 h 00', 'Cadrage (10 min)', 'Fixer le but : un accord complet sur 4 dimensions, consigné dans un PV avant midi'],
        ['10 h 10', 'Questions d\'ouverture (20 min)', 'Comprendre sa situation, vérifier B14'],
        ['10 h 30', 'Ancrage, prix, délai, paiement (45 min)', 'Obtenir dates fermes + pénalité + paiement échelonné'],
        ['11 h 15', 'Suspension, appel à Grace M. (10 min)', 'Valider la marge et l\'engagement de volume'],
        ['11 h 25', 'Volume, prix fixe, paquet (25 min)', 'Échanger l\'engagement contre un prix fixe'],
        ['11 h 50', 'Récapitulatif et vérification (25 min)', 'Contrôler l\'accord contre la grille'],
        ['12 h 15', 'PV (25 min)', 'Rédiger et signer avant de partir'],
      ],
    },
    result: "Une page qui dit qui fait quoi, dans quel ordre, avec quel chiffre d'ouverture et quelle limite sur chaque dimension.",
    tip: "Préparez la trame du PV en avance : renseignez les sections 1 et 2 (participants, date, lieu, objet) le mardi soir. Le jour J, vous gagnez dix minutes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Faire un test à blanc et relire la grille à froid',
    intro: "Vingt minutes de répétition valent mieux que deux heures de relecture solitaire : vous découvrez ce que vous ne savez pas dire. La relecture à froid, le soir, repère les cellules vagues ou contradictoires.",
    steps: [
      {
        title: 'Répétez avec un collègue qui joue le fournisseur',
        actions: [
          "Donnez à votre collègue trois répliques à utiliser : « 2 500 ou rien », « 100 % à la commande, c'est notre règle », « d'autres ONG ont accepté ».",
          "Entraînez-vous à annoncer l'ancre, à vous taire dix secondes, puis à poser une contrepartie.",
          "Chronométrez : l'annonce de l'ancre doit tenir en 20 secondes.",
        ],
      },
      {
        title: 'Relisez les trois onglets à froid',
        actions: [
          "Vérifiez qu'aucune cellule d'exemple (bâches plastiques) ne subsiste.",
          "Vérifiez la cohérence : une concession possible ne figure pas dans les concessions interdites ; chaque point de rupture est validé ; chaque question a une hypothèse.",
          "Enregistrez, imprimez en recto simple, et rangez avec le plan de séance.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — résultat du test à blanc (17/03, 17 h)',
      lines: [
        "Esther W. a joué le fournisseur : vous avez cédé sur le paiement à la deuxième relance, sans contrepartie. Correction : préparer la phrase « Si je règle 30 % au chargement, qu'obtenez-vous en retour ? Je propose des dates fermes et une pénalité ».",
        "La relecture révèle une cellule d'exemple oubliée en B13 de l'onglet 3 (« 22 % ») : corrigée.",
      ],
    },
    result: "Livrable L4 terminé : onglet 3 complet, plan de séance d'une page, test à blanc réalisé, grille imprimée.",
    pitfall: "Répéter uniquement les parties faciles. Faites jouer les réponses les plus difficiles : « C'est mon dernier prix » et « vous êtes pressés, n'est-ce pas ? ».",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — MENER LA NÉGOCIATION
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 8',
    title: 'Ouvrir la séance : cadrer l\'objectif, la méthode et le journal de négociation (10 h 00)',
    intro: "Les dix premières minutes fixent le cadre : un objectif commun, une méthode multi-dimensions, la promesse d'un PV à la fin. Un bon cadrage prépare la posture collaborative, indispensable face à un fournisseur en position de force.",
    steps: [
      {
        title: 'Cadrez la rencontre',
        actions: [
          "Remerciez, présentez les personnes présentes, rappelez l'objet en une phrase.",
          "Annoncez la méthode : « Je propose que nous regardions ensemble le prix, les délais, le paiement et les volumes, et que nous consignions l'accord dans un PV avant de nous quitter. »",
          "Annoncez la durée prévue (2 h 15) pour obtenir le même engagement du fournisseur.",
        ],
      },
      {
        title: 'Mettez en place le journal de négociation',
        actions: [
          "Demandez à Esther W. d'ouvrir un tableau avec six colonnes : Heure | Sujet | Offre du fournisseur | Offre de Kerowa | Contrepartie demandée ou obtenue | Statut.",
          "Chaque mouvement est inscrit à la minute : c'est votre mémoire de la séance et la base du PV.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ouverture (10 h 00) et première ligne du journal',
      lines: [
        "Vous : « Merci de nous recevoir. Nous avons besoin de 50 t à Gogrial avant les pluies. Je propose que nous regardions ensemble prix, délais, paiement et volumes, puis que nous signions un PV avant midi et quart. Cela vous convient ? »",
        "Abraham L. : « Oui, mais je vous préviens, le tarif de 2 500 est ferme. »",
        "Journal — 10:00 | Cadrage | Tarif ferme 2 500 | — | — | Cadre accepté, PV à 12 h 15.",
      ],
    },
    result: "Un cadre accepté par les deux parties et un journal de négociation ouvert.",
    pitfall: "Ouvrir directement sur le prix (« votre tarif est trop élevé ») : vous entrez en posture distributive, ce que votre préparation avait écartée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 8',
    title: 'Poser les questions d\'ouverture et mettre à jour la grille (10 h 10)',
    intro: "Vous posez les quatre questions préparées, dans l'ordre, et vous écoutez. Vous n'argumentez pas : vous collectez. Chaque réponse peut confirmer ou invalider une hypothèse de la grille.",
    steps: [
      {
        title: 'Posez et écoutez',
        actions: [
          "Posez une question à la fois ; laissez le fournisseur répondre sans l'interrompre.",
          "Reformulez en une phrase pour vérifier que vous avez compris.",
          "Relancez par « Pouvez-vous m'en dire plus ? » quand une réponse ouvre une piste.",
        ],
      },
      {
        title: 'Notez et actualisez',
        actions: [
          "Esther W. inscrit chaque réponse dans le journal.",
          "Au crayon, notez dans la grille imprimée le statut des hypothèses : confirmée, infirmée, nouvelle information.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ce que les réponses révèlent (10 h 10 à 10 h 28)',
      lines: [
        "Q1 — Abraham L. : « Sur 8 camions, 6 sont disponibles dès lundi 23. La piste est correcte jusqu'au 20 avril à peu près. »",
        "Q2 — « Deux camions sont réservés pour d'autres organisations, mais je peux vous garder les six autres. »",
        "Q3 — Lucy B. : « En saison des pluies, notre activité baisse de 40 % ; la moitié de la flotte reste à l'arrêt, et nous avons des charges fixes. » → Hypothèse B14 confirmée : pression sur le fournisseur.",
        "Q4 — « Le gasoil est passé de 1,20 à 1,35 EUR le litre, et il y a de nouveaux barrages sur la piste de Wau. Et la demande est forte avant les pluies. »",
      ],
    },
    result: "L'hypothèse de la cellule B14 est confirmée : le fournisseur a besoin d'activité entre mai et septembre. C'est votre levier pour la suite.",
    tip: "La réponse la plus précieuse est souvent donnée en passant (« nos charges fixes »). Notez les mots exacts : ils vous serviront à formuler la contrepartie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 8',
    title: 'Ancrer : annoncer le premier chiffre avec sa référence (10 h 30)',
    intro: "Vous êtes en position d'ouvrir sur un chiffre : vous le faites. L'ancre est un chiffre proche de votre idéal, adossé à une référence vérifiable et accompagné d'une condition. Vous l'annoncez calmement, une seule fois.",
    steps: [
      {
        title: 'Formulez l\'ancre en trois éléments',
        actions: [
          "Le chiffre : 2 100 EUR par rotation.",
          "La référence : votre tarif de février, la facture T06.",
          "La condition : 5 rotations fermes avec dates fixées.",
        ],
      },
      {
        title: 'Annoncez-la sans l\'enrober',
        actions: [
          "Regardez le fournisseur, annoncez le chiffre, puis la référence. Ne commencez pas par « je sais que c'est difficile mais… ».",
          "Ne proposez jamais plusieurs chiffres : le fournisseur retient le plus élevé.",
          "N'enchaînez pas immédiatement : passez à l'étape suivante, le silence.",
        ],
      },
      {
        title: 'Notez la réaction dans le journal',
        actions: [
          "Inscrivez le chiffre annoncé, l'heure, la réaction verbale et non verbale.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — l\'ancre (10 h 30)',
      lines: [
        "Vous : « Sur la base de votre tarif de février, 2 100 EUR par rotation, je vous propose 5 rotations fermes, avec des dates de chargement fixées dès aujourd'hui. »",
        "Journal — 10:30 | Prix | Tarif de 2 500 | Ancre à 2 100 (facture T06) | Dates fermes | Ouvert.",
        "Calcul de repère : écart entre l'ancre et l'offre = 400 EUR, soit 16 % de l'offre ; l'ancre est à 108 EUR sous le prix justifié par les coûts (2 208 EUR).",
      ],
    },
    result: "L'ancre est posée, référencée, et le fournisseur a le chiffre en tête.",
    pitfall: "Justifier l'ancre pendant trente secondes. Plus vous vous expliquez, plus vous donnez des prises à la contradiction. Un chiffre, une référence, une condition, puis silence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 8',
    title: 'Pratiquer le silence stratégique après l\'offre (10 h 32)',
    intro: "L'ancre est annoncée. La tentation est de la commenter : résistez. Le silence appartient à celui qui vient de faire une offre ; c'est au fournisseur de réagir en premier.",
    steps: [
      {
        title: 'Tenez le silence',
        actions: [
          "Baissez les yeux sur votre grille et comptez jusqu'à dix.",
          "Ne justifiez pas, ne reformulez pas, ne soupirez pas.",
          "Si le silence dépasse quinze secondes, relancez par une question ouverte : « Qu'est-ce qui rend ce chiffre difficile pour vous ? ».",
        ],
      },
      {
        title: 'Exploitez la réponse',
        actions: [
          "Écoutez la première phrase : elle contient souvent la première concession ou le vrai souci.",
          "Notez dans le journal ce qui a été offert spontanément.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — le silence rapporte 50 EUR et un renseignement (10 h 32)',
      lines: [
        "(Silence de 10 secondes. Abraham L. se tourne vers Lucy B., puis reprend.)",
        "Abraham L. : « 2 100, c'est le prix de février, il n'est plus possible. Nous sommes à 2 500. Bon… Je peux aller à 2 450 si vous réglez tout à la commande. »",
        "Journal — 10:33 | Prix | 2 450 si 100 % à la commande | — | Concession spontanée de 50 EUR | Ouvert.",
        "Lecture : le fournisseur lie le prix à la trésorerie. Votre grille avait prévu cette dimension.",
      ],
    },
    result: "Une concession de 50 EUR obtenue sans rien céder, et la révélation que le paiement d'avance est sa vraie préoccupation.",
    tip: "Entraînez-vous : prenez une gorgée d'eau après chaque offre. Le geste occupe les mains et rend le silence naturel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 8',
    title: 'Avancer par contre-propositions progressives : prix, délai, paiement (10 h 35 – 11 h 15)',
    intro: "Plutôt qu'un seul aller-retour, vous avancez par tours successifs. Chaque tour rapproche les deux parties sans dévoiler toute votre marge de manœuvre. À chaque tour, vous répondez au chiffre du fournisseur par une contre-proposition qui déplace l'un des quatre leviers.",
    steps: [
      {
        title: 'Traitez une dimension à la fois, en vue du paquet',
        actions: [
          "Annoncez que rien n'est définitif tant que le paquet complet n'est pas validé : « d'accord sur ce point, sous réserve de l'ensemble ».",
          "Ouvrez par la dimension où le fournisseur a déjà bougé (le prix), puis passez à votre priorité (le délai).",
        ],
      },
      {
        title: 'Notez chaque tour dans le journal',
        actions: [
          "Qui a proposé quoi, ce qui a été demandé en retour, et l'état : ouvert, accepté sous réserve, refusé.",
        ],
      },
    ],
    table: {
      columns: ['Tour', 'Fournisseur', 'Kerowa', 'Statut'],
      rows: [
        ['1 — Prix et paiement', '2 450 EUR si 100 % à la commande, aucune pénalité', '2 300 EUR, 30 % au chargement, 70 % à 15 jours', 'Prix ouvert, paiement ouvert'],
        ['2 — Prix', '2 450 maintenu : « c\'est mon plancher, carburant et barrages »', 'Accepte 2 450 sous réserve du paquet, si dates fermes et pénalité', 'Prix 2 450 sous réserve'],
        ['3 — Pénalité', '1 % par jour, plafonné à 5 %', '2 % par jour, plafonné à 10 %, hors force majeure attestée par le Cluster ; résiliation au-delà de 5 jours de retard', 'Accepté : 2 % et 10 %'],
        ['4 — Paiement du solde', '70 % à 7 jours après livraison', '70 % à 15 jours : le temps de contrôler le bon de réception', 'Accepté : 15 jours'],
      ],
    },
    result: "À 11 h 15, trois dimensions sont convenues sous réserve : prix 2 450, délai ferme avec pénalité, paiement 30 % / 70 %.",
    pitfall: "Accepter le prix sans le lier au paquet : si vous avez dit « d'accord pour 2 450 » sans réserve, vous n'avez plus aucun levier pour obtenir le délai et la pénalité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 8',
    title: 'Déplacer le terrain et appliquer la contrepartie systématique : le volume (11 h 25)',
    intro: "Le prix est verrouillé à 2 450 EUR : il est inutile d'insister. Vous déplacez la discussion vers la dimension que le fournisseur valorise (l'activité en saison des pluies) et vous appliquez, pour chaque geste, la phrase : « si je fais X, qu'obtenez-vous en retour ? ».",
    steps: [
      {
        title: 'Reformulez le besoin du fournisseur',
        actions: [
          "Reprenez ses mots : « Vous m'avez dit que votre activité baisse de 40 % de mai à septembre. »",
          "Proposez l'échange : « Je peux vous apporter de l'activité sur cette période, si vous m'apportez de la visibilité sur le prix. »",
        ],
      },
      {
        title: 'Échangez par paires « si… alors… »',
        actions: [
          "Chaque offre de Kerowa est associée à une contrepartie de la liste préparée à l'étape 1 de la procédure 4.",
          "Ne concédez jamais deux choses d'un coup : une concession, une contrepartie, puis la suivante.",
        ],
      },
    ],
    table: {
      columns: ['Si Kerowa…', 'Alors Awan Fret…', 'Valeur pour Kerowa'],
      rows: [
        ['S\'engage sur un minimum de 4 rotations du 01/05 au 30/09 (sous réserve de validation)', 'Garantit 2 450 EUR fixe, sans surtaxe de saison des pluies', '4 × 2 450 × 20 % = 1 960 EUR de surtaxe évitée'],
        ['Accepte une livraison sous 5 jours', 'Charge sous 72 h après chaque commande en saison des pluies', 'Continuité des rotations sur piste dégradée'],
        ['Avance 30 % au chargement de chaque rotation', 'Met un camion de réserve à disposition en cas de panne', 'Aucune rotation perdue sur panne'],
        ['Accepte une option de 2 rotations supplémentaires, sans engagement', 'Livre la liste nominative des chauffeurs signataires du code de conduite avant le 20/03', 'Clause PSEA exécutée avant le premier chargement'],
      ],
    },
    result: "L'échange volume contre prix fixe et priorité est conclu sous réserve : Kerowa s'engage sur 4 rotations, Awan Fret garantit 2 450 EUR fixe, chargement sous 72 h et camion de réserve.",
    tip: "Quand le fournisseur demande 6 rotations : « 4 fermes, 2 en option au même prix, sans engagement ». Vous restez dans votre mandat et vous lui donnez de la visibilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 8',
    title: 'Gérer les blocages, les pressions et l\'impasse : suspendre plutôt que céder',
    intro: "À un moment, le fournisseur fait pression : dernier prix, ultimatum, argument d'autorité. Votre grille vous a donné des réponses prêtes. Si un point de rupture est touché, vous suspendez : vous ne cédez pas sous la pression.",
    steps: [
      {
        title: 'Reconnaissez le type de pression',
        actions: [
          "Ultimatum, urgence fabriquée, argument d'autorité, appel à la norme du marché, ou test de votre BATNA.",
          "Répondez par la question ou par la contrepartie, jamais par un reproche.",
        ],
      },
      {
        title: 'Si un point de rupture est touché, suspendez',
        actions: [
          "Demandez une suspension de 10 minutes, appelez la coordinatrice pays et relisez la BATNA.",
          "Si l'accord reste hors des limites : retirez-vous poliment et activez la BATNA, en gardant la porte ouverte.",
        ],
      },
    ],
    table: {
      columns: ['Ce que dit le fournisseur', 'Réponse recommandée'],
      rows: [
        ['« C\'est mon dernier prix. »', '« Je comprends. Regardons alors ce qui peut bouger sur le délai et le paiement. » (déplacer le terrain)'],
        ['« 100 % à la commande ou rien. »', '« Je ne peux pas avancer 12 500 EUR sans garantie. Je peux avancer 30 % au chargement. Que pouvez-vous m\'offrir en échange ? »'],
        ['« Vous êtes pressés, n\'est-ce pas ? »', '« Nous avons une échéance, oui. C\'est pourquoi nous vous proposons un volume sur la saison des pluies. »'],
        ['« Il faut que j\'en parle à mon directeur. »', '« Bien sûr. Pouvons-nous convenir d\'une réponse avant jeudi 17 h ? »'],
      ],
    },
    example: {
      title: 'Kerowa — le moment de tension (11 h 05)',
      lines: [
        "Abraham L. : « 100 % à la commande, c'est la règle de la maison, sinon je ne réserve pas de camions. » Vous : « Je ne peux pas avancer la totalité sans garantie. Je propose 30 % au chargement de chaque rotation, le solde à 15 jours ; en retour, des dates fermes. » (Silence. Il accepte le principe.)",
        "Journal — 11:07 | Paiement | 100 % à la commande | 30 % au chargement | Dates fermes + pénalité | Accepté sous réserve.",
      ],
    },
    result: "Les cinq pressions les plus fréquentes ont chacune une réponse prête, et vous savez quand suspendre.",
    pitfall: "Bluffer sur une alternative inexistante (« j'ai un autre transporteur à 2 000 EUR »). Le fournisseur peut vérifier ; vous perdez votre crédibilité et risquez de vous retrouver sans accord ni alternative.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 8 sur 8',
    title: 'Récapituler le paquet et le vérifier contre la grille avant de rédiger le PV (11 h 50)',
    intro: "Avant de parler du PV, vous récapitulez oralement l'accord point par point, puis vous le comparez à votre grille pour savoir où vous vous situez : dans l'idéal, dans l'acceptable, entre acceptable et rupture. Si un point est hors zone de rupture, vous ne signez pas.",
    steps: [
      {
        title: 'Récapitulez à voix haute',
        actions: [
          "Reprenez chaque dimension dans l'ordre de la grille : prix, délai, paiement, volume, garanties.",
          "Demandez après chaque point : « Est-ce bien ce que nous avons convenu ? ».",
          "Faites relire par Esther W. le journal de négociation.",
        ],
      },
      {
        title: 'Vérifiez contre la grille',
        actions: [
          "Placez chaque résultat dans la zone correspondante de l'onglet 2.",
          "Calculez l'écart total : 12 250 − 12 000 = 250 EUR au-dessus de la ligne budgétaire, couverts par la marge de 1 000 EUR déjà validée.",
          "Comparez à la BATNA : 245 EUR/t contre 267,50 EUR/t, 50 t contre 40 t, 23/03 contre 06/04.",
        ],
      },
    ],
    table: {
      columns: ['Dimension', 'Résultat obtenu', 'Zone de la grille', 'Décision'],
      rows: [
        ['Prix', '2 450 EUR par rotation (12 250 EUR)', 'Entre acceptable (2 400) et rupture (2 600)', 'OK : compensé par les autres dimensions, marge validée'],
        ['Délai', 'Dernière livraison avant le 15/04, pénalité 2 %/jour', 'Meilleur que l\'acceptable (17/04)', 'OK'],
        ['Paiement', '30 % au chargement, 70 % à 15 jours', 'Acceptable', 'OK'],
        ['Volume', '4 rotations sous réserve, prix fixe sans surtaxe', 'Acceptable', 'OK sous réserve de Grace M.'],
      ],
    },
    result: "Livrable L5 terminé : journal de négociation complet, accord vérifié contre la grille, aucun point de rupture franchi.",
    tip: "Si un résultat tombe entre « acceptable » et « rupture », chiffrez l'écart et assurez-vous que votre mandat l'autorise avant de confirmer.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — CLÔTURER AVEC LE PV DE NÉGOCIATION
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 7',
    title: 'Ouvrir la trame du PV, l\'enregistrer et repérer ses sept sections',
    intro: "Une fois l'accord trouvé, ne quittez pas la salle sans le formaliser immédiatement. La trame trame-pv-negociation.docx a une structure fixe : un titre, une phrase d'objectif, sept sections numérotées et cinq tableaux. Entrées nécessaires : le journal de négociation (L5), la grille et vos notes de séance.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez trame-pv-negociation.docx et enregistrez-le sous « L6_PV_negociation_AwanFret_2026-03-18.docx ».",
          "Gardez le titre « PV DE NÉGOCIATION FOURNISSEUR » et la phrase d'objectif telle quelle.",
          "Ouvrez à côté le journal de négociation : vous ne rédigez rien de nouveau, vous consignez ce qui a été convenu.",
        ],
      },
      {
        title: 'Repérez les sept sections',
        actions: [
          "1. Participants (tableau à deux cellules : côté acheteur, côté fournisseur).",
          "2. Date, lieu et objet (tableau à deux cellules). 3. Points négociés (tableau à quatre colonnes, cinq lignes).",
          "4. Concessions obtenues de part et d'autre (tableau à deux cellules). 5. Conditions de l'accord final (trois lignes : prix, délai, paiement).",
          "6. Prochaines étapes (ligne « Formalisation en bon de commande ») et 7. Signatures (tableau à deux cellules).",
        ],
      },
    ],
    result: "La trame est enregistrée, vous savez où chaque rubrique se saisit et quelle source l'alimente.",
    tip: "Préparez les sections 1 et 2 la veille : en salle, vous ne rédigez que ce qui a été négocié, ce qui économise dix minutes sur 25.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 7',
    title: 'Sections 1 et 2 : participants, date, lieu et objet',
    intro: "Ces deux sections identifient sans ambiguïté qui a négocié quoi, où et quand. Elles permettent, des mois plus tard, à un auditeur de savoir qui engageait chaque partie.",
    steps: [
      {
        title: 'Section 1 — Participants',
        actions: [
          "Placez le curseur à la fin du libellé « Côté acheteur — nom(s) et fonction(s) », appuyez sur Entrée et saisissez nom et fonction de chaque participant, sur une ligne chacun.",
          "Même opération pour la cellule « Côté fournisseur ». Précisez les personnes présentes par téléphone, avec leur plage horaire.",
        ],
      },
      {
        title: 'Section 2 — Date, lieu et objet',
        actions: [
          "Cellule « Date et lieu » : jour, date complète, heures de début et de fin, adresse ou description du lieu.",
          "Cellule « Objet de la négociation » : reprenez la phrase de la cellule B5 de la grille, avec référence de l'offre.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — sections 1 et 2 remplies',
      lines: [
        "Côté acheteur : Supply Chain Manager, Kerowa Santé (négociateur) ; Esther W., assistante achats (scribe) ; Grace M., coordinatrice pays, par téléphone de 11 h 15 à 11 h 25.",
        "Côté fournisseur : Abraham L., gérant, Awan Fret SARL ; Lucy B., responsable exploitation, Awan Fret SARL.",
        "Date et lieu : mercredi 18/03/2026, de 10 h 00 à 12 h 15, dans les bureaux d'Awan Fret, Juba.",
        "Objet : transport routier de 50 t (5 rotations de camions de 10 t) Juba → Gogrial avant les pluies, objet de l'offre du 16/03/2026, avec engagement de volume pour la saison des pluies.",
      ],
    },
    result: "Les participants sont nommés avec leur fonction, la date, le lieu et l'objet sont consignés.",
    pitfall: "Noter « équipe Kerowa » et « équipe Awan Fret ». Un PV sans noms n'engage personne : seule la fonction de la personne qui signera donne une valeur à l'accord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 7',
    title: 'Section 3 : points négociés avec la position de départ de chaque partie',
    intro: "Le tableau comporte quatre colonnes : Point négocié, Position de départ — acheteur, Position de départ — fournisseur, Accord final. Les trois premières lignes portent des libellés d'exemple (« Ex. Prix unitaire », « Ex. Délai de livraison », « Ex. Conditions de paiement ») que vous remplacez, et deux lignes vides vous permettent d'ajouter vos propres points.",
    steps: [
      {
        title: 'Remplissez les trois lignes d\'exemple',
        actions: [
          "Supprimez le préfixe « Ex. » dans la première colonne et précisez l'unité (« Prix unitaire — par rotation de 10 t »).",
          "Colonnes 2 et 3 : la position de départ de chaque partie, avec son chiffre ; reprenez l'ancre et l'offre initiale du journal.",
          "Colonne 4 : l'accord final, chiffré et daté.",
        ],
      },
      {
        title: 'Complétez les deux lignes vides',
        actions: [
          "Ligne 4 : « Volume / engagement futur ». Ligne 5 : « Clauses de conformité ».",
          "Si un autre point a été négocié, ajoutez une ligne (clic droit > Insérer > Insérer des lignes en dessous).",
        ],
      },
    ],
    table: {
      columns: ['Point négocié', 'Position départ — acheteur', 'Position départ — fournisseur', 'Accord final'],
      rows: [
        ['Prix unitaire (par rotation de 10 t)', '2 100 EUR (tarif de 02/2026)', '2 500 EUR (offre du 16/03)', '2 450 EUR, fixe pour les 5 rotations (12 250 EUR)'],
        ['Délai de livraison', 'Chargements 23/03, 30/03, 03/04, 08/04, 10/04 ; livraison sous 4 jours', 'Chargement sous 7 jours après paiement ; livraison « sous 5 à 10 jours », sans garantie', 'Chargements aux dates visées ; livraison sous 5 jours ; dernière avant le 15/04 ; pénalité 2 %/jour plafonnée à 10 % ; résiliation de la rotation au-delà de 5 jours de retard'],
        ['Conditions de paiement', '30 jours après livraison conforme', '100 % à la réservation', '30 % au chargement sur preuve signée ; 70 % à 15 jours après livraison conforme (waybill et GRN)'],
        ['Volume / engagement futur', 'Aucun engagement', 'Aucun, mais surtaxe pluies annoncée de 20 %', 'Kerowa : 4 rotations du 01/05 au 30/09, sous réserve. Awan Fret : 2 450 EUR fixe sans surtaxe, chargement sous 72 h, camion de réserve ; option de 2 rotations'],
        ['Clauses de conformité', 'Clause PSEA, liste nominative des chauffeurs, camions bâchés étanches, sans chargement mixte', 'Accepte, demande un délai pour la liste', 'Liste signée remise avant le 20/03 ; camions bâchés étanches ; transport dédié aux marchandises de Kerowa'],
      ],
    },
    result: "Chaque point négocié figure avec la position de départ de chacun et l'accord final, avec des chiffres vérifiables.",
    pitfall: "Écrire « accord sur le prix » dans la colonne finale sans chiffre : c'est exactement le type de formulation qui se reformule différemment à la facturation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 7',
    title: 'Section 4 : concessions obtenues de part et d\'autre',
    intro: "Le tableau comporte deux cellules : « Concessions obtenues par l'acheteur » et « Concessions obtenues par le fournisseur ». Ce que chacun a lâché prouve que l'accord est équilibré et justifie, en audit, le choix de payer un prix supérieur à celui de l'idéal.",
    steps: [
      {
        title: 'Reprenez le journal tour par tour',
        actions: [
          "Listez chaque concession, avec le chiffre, la date et la contrepartie qui lui correspond.",
          "Distinguez ce que vous avez obtenu (colonne acheteur) de ce que vous avez cédé (colonne fournisseur).",
        ],
      },
      {
        title: 'Saisissez dans les deux cellules',
        actions: [
          "Placez le curseur à la fin du libellé de chaque cellule, appuyez sur Entrée et saisissez une concession par ligne, précédée d'un tiret.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 4 remplie',
      lines: [
        "Concessions obtenues par l'acheteur : − Prix de 2 450 EUR au lieu de 2 500 (−250 EUR sur 5 rotations). − Dates de chargement et de livraison fermes, pénalité de 2 % par jour plafonnée à 10 %, résiliation de la rotation au-delà de 5 jours. − Paiement échelonné 30 % / 70 % au lieu de 100 % à la réservation. − Prix fixe sans surtaxe en saison des pluies (économie estimée de 490 EUR par rotation). − Chargement sous 72 h et camion de réserve. − Clause PSEA et liste nominative.",
        "Concessions obtenues par le fournisseur : − Avance de 30 % au chargement de chaque rotation. − Engagement de 4 rotations du 01/05 au 30/09 (9 800 EUR), sous réserve de validation. − Prix de 2 450 EUR, supérieur à l'acceptable de 2 400. − Réservation de la capacité de 5 rotations, avec priorité sur d'autres clients.",
      ],
    },
    result: "Les concessions sont consignées de part et d'autre, chiffrées, avec la contrepartie correspondante.",
    tip: "Notez les concessions du fournisseur avec la même précision que les vôtres : c'est la preuve qu'il a aussi gagné, ce qui facilite l'exécution de l'accord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 7',
    title: 'Section 5 : conditions de l\'accord final (prix, délai, modalités de paiement)',
    intro: "Cette section est la synthèse opposable de l'accord : trois lignes, « Prix final convenu », « Délai de livraison convenu » et « Modalités de paiement convenues ». C'est elle que vous citerez en cas d'écart entre la facture et l'accord. Elle doit être lisible sans consulter le reste du PV.",
    steps: [
      {
        title: 'Rédigez chaque ligne avec les chiffres',
        actions: [
          "Prix final convenu : unité, montant unitaire, quantité, total, durée de validité du prix.",
          "Délai de livraison convenu : date de chaque chargement, délai de livraison, pénalité et plafond, cas de résiliation, exception de force majeure.",
          "Modalités de paiement convenues : pourcentages, pièce qui déclenche chaque versement, délais.",
        ],
      },
      {
        title: 'Relisez avec le fournisseur',
        actions: [
          "Lisez les trois lignes à voix haute, demandez une confirmation explicite et corrigez sur place les formulations ambiguës.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 5 remplie',
      lines: [
        "Prix final convenu : 2 450 EUR par rotation de 10 t, soit 12 250 EUR pour 5 rotations ; prix fixe, sans révision ni surtaxe, jusqu'au 30/09/2026 pour toute rotation commandée dans les mêmes conditions.",
        "Délai de livraison convenu : chargements les 23/03, 30/03, 03/04, 08/04 et 10/04 ; livraison à Gogrial au plus tard 5 jours après chargement, dernière livraison avant le 15/04. Retard : 2 % du prix de la rotation par jour (49 EUR), plafonné à 10 % (245 EUR), hors force majeure attestée par le Logistics Cluster ; au-delà de 5 jours de retard, résiliation de la rotation, sans indemnité, et recours possible à un autre transporteur.",
        "Modalités de paiement convenues : 30 % du prix de la rotation (735 EUR) à la remise du camion chargé, sur preuve de chargement signée ; 70 % (1 715 EUR) 15 jours après livraison conforme constatée par le waybill signé et le bon de réception (GRN).",
      ],
    },
    result: "Les trois conditions finales sont écrites avec chiffres, dates et pièces déclencheuses, sans formulation ambiguë.",
    pitfall: "Écrire « délai raisonnable » ou « selon l'état des pistes » : le fournisseur dispose alors d'une porte de sortie permanente. Chaque délai est une date ou un nombre de jours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 7',
    title: 'Section 6 : prochaines étapes et formalisation en bon de commande (PO)',
    intro: "La section 6 comporte une ligne : « Formalisation en bon de commande (PO) / contrat — référence et échéance ». Elle transforme l'accord en actions datées : qui émet le PO, avec quelle référence, avant quelle date.",
    steps: [
      {
        title: 'Listez les actions qui suivent',
        actions: [
          "L'émission du PO ou du contrat : numéro, responsable, date.",
          "Les validations nécessaires : note de justification du fournisseur unique, visa de la coordinatrice pays.",
          "Les actions du fournisseur : liste nominative, confirmation des camions.",
        ],
      },
      {
        title: 'Datez chaque action avec un responsable',
        actions: [
          "Chaque ligne : action, responsable nommé, échéance en JJ/MM.",
          "Vérifiez que toutes les échéances précèdent la fin de validité de l'offre (20/03).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 6 remplie',
      lines: [
        "PO n° PO-GOG-026, émis par le SCM le 19/03/2026 avant 12 h, reprenant le présent PV en annexe ; contresignature d'Awan Fret avant le 20/03/2026.",
        "Note de justification du fournisseur unique et visa de Grace M. : 19/03/2026.",
        "Liste nominative des chauffeurs signataires du code de conduite : remise par Awan Fret avant le 20/03/2026.",
        "Confirmation du chargement de la rotation 1 : Awan Fret, vendredi 20/03/2026, pour le lundi 23/03.",
      ],
    },
    result: "La section 6 renvoie à un PO numéroté et à des actions datées qui précèdent la fin de validité de l'offre.",
    tip: "Programmez dans l'agenda une alerte la veille de chaque échéance : une promesse de remise de liste ne se tient que si quelqu'un la relance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 7 sur 7',
    title: 'Section 7 : relire à voix haute, faire signer les deux parties et scanner',
    intro: "Le PV ne vaut que s'il est signé avant que les parties se séparent : un accord verbal non formalisé se dilue vite dans la mémoire de chacun et se retrouve reformulé différemment au moment de la commande. Le tableau de la section 7 comporte deux cellules : « Signature — côté acheteur » et « Signature — côté fournisseur ».",
    steps: [
      {
        title: 'Relisez et corrigez sur place',
        actions: [
          "Lisez les sections 3 à 6 à voix haute, une par une, devant le fournisseur.",
          "Corrigez immédiatement toute formulation contestée, puis relisez la ligne modifiée.",
        ],
      },
      {
        title: 'Faites signer',
        actions: [
          "Imprimez deux exemplaires ; chaque signataire inscrit nom, fonction, date, heure et signature dans sa cellule.",
          "Contrôlez que le signataire fournisseur a le pouvoir d'engager l'entreprise (gérant).",
          "Votre signature engage Kerowa dans la limite de votre délégation ; les engagements au-delà sont notés « sous réserve de validation ».",
        ],
      },
      {
        title: 'Conservez immédiatement',
        actions: [
          "Scannez l'exemplaire signé avant de quitter les lieux, nommez-le « L6_PV_signe_AwanFret_2026-03-18.pdf » et envoyez-le à Grace M.",
          "Remettez un exemplaire original à Abraham L.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — signatures (18/03/2026, 12 h 40)',
      lines: [
        "Signature — côté acheteur : Supply Chain Manager, Kerowa Santé, 18/03/2026, 12 h 40.",
        "Signature — côté fournisseur : Abraham L., gérant, Awan Fret SARL, 18/03/2026, 12 h 40.",
        "Le PV signé est scanné à 12 h 45 et transmis à la coordinatrice pays.",
      ],
    },
    result: "Livrable L6 terminé : PV complet, relu avec le fournisseur, signé par les deux parties avant la fin de la rencontre, scanné.",
    pitfall: "Dire « je vous l'envoie à signer demain » : dans l'intervalle, le fournisseur relit son planning, trouve de meilleurs clients et rouvre la discussion. Signez dans la salle, ou ne considérez pas l'accord conclu.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — TRANSMETTRE L'ACCORD AU DOSSIER D'ACHAT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Classer le PV et ses pièces dans le dossier d\'achat',
    intro: "Le PV signé accompagne la commande ou le contrat qui en découle. Le module 02 de la formation explique pourquoi cette traçabilité est une exigence de conformité et d'audit : le PV est une pièce du dossier, pas une annexe facultative.",
    steps: [
      {
        title: 'Placez le PV dans l\'ordre chronologique du dossier',
        actions: [
          "Ouvrez la page de garde du dossier d'achat (8 pièces, module 01) et créez un dossier « PO-GOG-026 ».",
          "Insérez le PV signé entre l'évaluation des offres et le bon de commande.",
          "Ajoutez le test de marché du 16/03, la facture T06 et la réponse écrite de la coordinatrice pays sur le mandat.",
        ],
      },
      {
        title: 'Rédigez la note de justification du fournisseur unique',
        actions: [
          "Le montant dépasse 10 000 EUR : la règle d'achat appelle un appel d'offres restreint. Un seul transporteur étant utilisable à temps, rédigez une note : faits (test de marché), raison (aucune alternative avant le 20/04), mesure (PV signé).",
          "Faites-la viser par Grace M. (niveau 10 000 à 60 000 EUR) avant de signer le PO.",
        ],
      },
    ],
    table: {
      columns: ['Pièce du dossier PO-GOG-026', 'Statut au 19/03', 'Référence'],
      rows: [
        ['Demande d\'achat (programme)', 'Présente', 'DA-0314'],
        ['Demandes de devis aux 3 transporteurs et réponses', 'Présentes', 'Test de marché du 16/03, 14 h'],
        ['Note de justification du fournisseur unique', 'À viser', 'NJ-2026-007'],
        ['PV de négociation signé', 'Présent', 'L6_PV_signe_AwanFret_2026-03-18.pdf'],
        ['Bon de commande', 'Émis le 19/03', 'PO-GOG-026'],
        ['Waybills, GRN, factures', 'À venir', 'Contrôlés rotation par rotation'],
      ],
    },
    result: "Le dossier contient le test de marché, la note de justification visée, le PV signé et le PO : un auditeur peut reconstituer la décision.",
    pitfall: "Classer le PV dans le seul dossier de négociation, hors dossier d'achat. En audit, vous ne retrouvez pas la pièce qui justifie le prix.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Faire reprendre les termes du PV dans le bon de commande ou le contrat',
    intro: "Le PV prouve l'accord ; le PO le rend exécutoire. Chaque condition du PV doit se retrouver dans le PO, et le PO doit renvoyer expressément au PV. Sans cela, le fournisseur peut facturer selon ses conditions générales.",
    steps: [
      {
        title: 'Reportez chaque condition dans le PO',
        actions: [
          "Prix unitaire, quantités, dates de chargement : lignes du PO, une par rotation.",
          "Pénalités, résiliation, paiement échelonné : articles ou conditions particulières du PO.",
          "Clause PSEA, code de conduite, liste nominative : annexe du PO, signée par le fournisseur.",
        ],
      },
      {
        title: 'Ajoutez la clause de référence',
        actions: [
          "Insérez : « Les conditions du présent PO résultent du PV de négociation du 18/03/2026, annexé. En cas de divergence avec les conditions générales du fournisseur, le PV prévaut. »",
          "Faites signer le PO par la personne habilitée (coordinatrice pays) et contresigner par Awan Fret avant le 20/03.",
        ],
      },
    ],
    table: {
      columns: ['Condition du PV', 'Reprise dans le PO-GOG-026'],
      rows: [
        ['Prix 2 450 EUR par rotation, fixe', 'Lignes 1 à 5 : 5 × 2 450 EUR = 12 250 EUR'],
        ['Dates de chargement et livraison sous 5 jours', 'Colonne « Date de chargement » ; article Délais'],
        ['Pénalité 2 %/jour, plafond 10 %, résiliation', 'Article Pénalités de retard'],
        ['Paiement 30 % au chargement, 70 % à 15 jours', 'Article Modalités de paiement, pièces déclencheuses'],
        ['Engagement de 4 rotations, prix fixe', 'Condition particulière « sous réserve de validation »'],
        ['Clause PSEA, liste nominative, camions bâchés', 'Annexe 2, signée par Awan Fret'],
      ],
    },
    result: "Le PO reprend ligne à ligne les conditions du PV, y renvoie expressément, et fait primer le PV sur les conditions générales du fournisseur.",
    tip: "Faites relire le PO par la personne qui a signé le PV avant son envoi : elle repère les écarts que personne d'autre ne verra.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Contrôler chaque livraison et chaque facture par rapport au PV',
    intro: "En cas d'écart entre les conditions facturées par le fournisseur et celles consignées dans le PV, ce document devient la référence qui permet de trancher rapidement, sans dépendre de la mémoire des personnes présentes dans la salle. Encore faut-il le consulter à chaque rotation.",
    steps: [
      {
        title: 'Créez une fiche de contrôle par rotation',
        actions: [
          "Colonnes : Rotation | Date de chargement prévue / réelle | Date de livraison prévue / réelle | Retard (jours) | Pénalité | Facture reçue | Montant conforme ? | Paiement.",
          "Remplissez-la avec le logisticien, à partir des waybills et du bon de réception (GRN).",
        ],
      },
      {
        title: 'Appliquez la règle à chaque facture',
        actions: [
          "Comparez le montant facturé au prix du PV : toute différence se règle avant paiement, en citant la section 5 du PV.",
          "Calculez la pénalité : 2 % × 2 450 = 49 EUR par jour de retard, plafonnée à 245 EUR.",
          "Déduisez la pénalité du solde de 70 % et expliquez le calcul par écrit au fournisseur.",
        ],
      },
    ],
    table: {
      columns: ['Rotation', 'Constat', 'Application du PV', 'Montant à payer'],
      rows: [
        ['R1 (23/03)', 'Facture reçue à 2 500 EUR', 'Rejet : prix convenu 2 450 (section 5). Facture corrigée demandée', '735 EUR au chargement ; solde 1 715 EUR à J+15'],
        ['R2 (30/03)', 'Livrée le 03/04 (4 jours), conforme', 'Aucune pénalité', '1 715 EUR à J+15 après livraison'],
        ['R3 (03/04)', 'Livrée le 10/04 (7 jours, retard de 2 jours), conforme', 'Pénalité 2 × 49 = 98 EUR', '1 715 − 98 = 1 617 EUR à J+15'],
      ],
    },
    result: "Chaque rotation est contrôlée ; les écarts sont tranchés par le PV, calcul et pièce à l'appui, et aucun solde n'est payé sans livraison conforme.",
    pitfall: "Payer la facture « pour ne pas fâcher » le fournisseur et passer l'écart en perte. Une pénalité non appliquée devient un précédent ; elle sera invoquée à la prochaine négociation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Faire le retour d\'expérience et mettre à jour fiche fournisseur, registre et plan d\'action',
    intro: "Une négociation qui n'alimente pas la suivante est une négociation perdue. En vingt minutes, vous consignez ce qui a fonctionné, ce qui a manqué, et vous mettez à jour les outils du module 01 : registre des flux, matrice de fragilité, plan d'action.",
    steps: [
      {
        title: 'Évaluez la négociation contre la grille',
        actions: [
          "Pour chaque dimension, notez la zone atteinte (idéal, acceptable, entre acceptable et rupture) et l'écart chiffré.",
          "Notez trois choses : ce qui a fonctionné, ce qui a manqué, ce que vous referez différemment.",
        ],
      },
      {
        title: 'Mettez à jour vos outils',
        actions: [
          "Fiche fournisseur : prix négocié, engagements, ponctualité mesurée rotation par rotation, interlocuteurs.",
          "Registre des flux : ajoutez les transactions du PO, avec la référence du PV.",
          "Matrice de fragilité : Awan Fret reste orange ; ajoutez l'action « qualifier le transporteur C et formaliser l'accès au service commun du Cluster pour l'après-pluies » (échéance 30/04).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — retour d\'expérience (19/03)',
      lines: [
        "Ce qui a fonctionné : questions d'ouverture (levier saison creuse), silence après l'ancre (−50 EUR), échange volume contre prix fixe.",
        "Ce qui a manqué : le test de marché n'avait pas sondé le Cluster pour un volume plus important ; BATNA trop faible pour tenir le prix.",
        "À refaire : relancer le transporteur C et le Cluster dès avril pour construire une BATNA solide avant la prochaine négociation de saison.",
      ],
    },
    result: "Livrable L7 terminé : dossier d'achat complété, PO émis, contrôle de livraison et de facture en place, retour d'expérience et outils mis à jour.",
    tip: "Le meilleur moment pour améliorer votre BATNA est juste après la négociation, quand vous connaissez précisément ses faiblesses.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU — AWAN FRET, DE BOUT EN BOUT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/5) — Les 48 heures en un coup d\'œil',
    scenario: "Rappel : lundi 16 mars, Awan Fret (transporteur unique sur l'axe Juba → Gogrial) annonce 2 500 EUR par rotation de 10 t, au lieu de 2 100 EUR en février, avec 100 % de paiement à la commande, sans engagement de date ni pénalité. Pistes fermées vers le 20 avril, stock de médicaments jusqu'au 9 avril, rencontre dans 48 heures.",
    steps: [
      { title: 'Lundi 16/03 — Procédures 1 et 2', body: "Cadrage, test de marché (un seul transporteur utilisable à temps), décomposition de la hausse (108 EUR de carburant sur 400), BATNA chiffrée à 10 700 EUR pour 40 t.", result: "Livrables L1 et L2 ; posture collaborative par nécessité tactique ; BATNA « Faible »." },
      { title: 'Mardi 17/03 — Procédures 3 et 4', body: "Onglet 2 : prix 2 100 / 2 400 / 2 600 EUR, dernière livraison 10/04 / 17/04 / 20/04, paiement 30 % / 70 %, 4 rotations en saison des pluies. Mandat validé par Grace M. Concessions préparées, questions d'ouverture, test à blanc.", result: "Livrables L3 et L4 ; grille imprimée ; plan de séance d'une page." },
      { title: 'Mercredi 18/03 — Procédures 5 et 6', body: "Ouverture à 10 h, ancre à 2 100 EUR à 10 h 30, silence qui rapporte 50 EUR, trois tours sur prix, délai et paiement, échange volume contre prix fixe, PV signé à 12 h 40.", result: "Livrables L5 et L6 ; accord complet sur 4 dimensions." },
      { title: 'Jeudi 19/03 — Procédure 7', body: "Note de justification du fournisseur unique, PO-GOG-026 émis avec le PV en annexe, fiche de contrôle par rotation, retour d'expérience.", result: "Livrable L7 ; PO contresigné par Awan Fret avant le 20/03." },
    ],
    tip: "Une bonne négociation se joue à 70 % avant la séance : ici, une journée et demie de préparation pour deux heures et quart de séance.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/5) — La grille BATNA finale, onglet par onglet',
    scenario: "Résultat de la préparation : voici les cellules clés des trois onglets, telles qu'elles étaient dans le fichier L1_Grille_BATNA_AwanFret_2026-03-16.xlsx le mercredi 18/03 à 9 h 30.",
    steps: [
      { title: 'Raisonnement', body: "On part des faits (test de marché, facture T06), on chiffre la BATNA, on fixe trois valeurs par dimension en tenant le délai comme priorité absolue, puis on prépare les échanges concession / contrepartie." },
    ],
    table: {
      columns: ['Onglet / cellules', 'Contenu rempli'],
      rows: [
        ['1 — B5, B6', '50 t en 5 rotations Juba → Gogrial, chargements 23/03 – 13/04, dernière livraison avant le 17/04'],
        ['1 — B7', 'Récurrente-stratégique (posture collaborative) : seul transporteur de l\'axe jusqu\'au 30/11'],
        ['1 — B11 à B14', '1 fournisseur utilisable ; position de force : fournisseur ; pression : médicaments 09/04, pistes 20/04 ; pression sur lui à reconfirmer'],
        ['1 — B18 à B21', 'Cluster + transporteur C : 40 t, 10 700 EUR, 267,50 EUR/t, retard de 14 jours ; mobilisable partiellement ; BATNA faible'],
        ['2 — Prix', 'Idéal 2 100 / acceptable 2 400 / rupture 2 600 EUR par rotation'],
        ['2 — Délai', 'Dernière livraison 10/04 / 17/04 (5 jours par rotation) / après le 20/04'],
        ['2 — Paiement', '30 jours après livraison / 30 % au chargement + 70 % à 15 jours / 100 % avant chargement'],
        ['2 — Volume', 'Aucun engagement / 4 rotations sous réserve contre prix fixe / engagement sans contrepartie'],
        ['3 — A6 à B9', '4 concessions possibles, chacune avec contrepartie chiffrée'],
        ['3 — A13 à B15', 'PSEA et qualité de transport ; 100 % d\'avance sans garantie ; exclusivité'],
        ['3 — A18 à A21', '4 questions d\'ouverture : disponibilité, engagements ailleurs, activité en saison des pluies, origine de la hausse'],
      ],
    },
    result: "La grille complète tient en trois pages imprimées ; chaque cellule est chiffrée, justifiée et reliée à une décision de séance.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/5) — Le PV de négociation signé, champ par champ',
    scenario: "Voici le PV rempli dans le fichier L6_PV_negociation_AwanFret_2026-03-18.docx et signé à 12 h 40.",
    steps: [
      { title: 'Sections 1 et 2', body: "Participants nommés avec leurs fonctions ; mercredi 18/03/2026, 10 h 00 à 12 h 15, bureaux d'Awan Fret à Juba ; objet : 50 t en 5 rotations avant les pluies, avec engagement de volume." },
      { title: 'Sections 3 et 4', body: "Cinq points négociés (prix, délai, paiement, volume, clauses de conformité) avec position de départ de chaque partie et accord final ; concessions de chaque côté, chiffrées." },
      { title: 'Section 5', body: "Prix : 2 450 EUR par rotation, 12 250 EUR au total, fixe. Délai : chargements 23/03, 30/03, 03/04, 08/04, 10/04, livraison sous 5 jours, pénalité 2 % par jour plafonnée à 10 %. Paiement : 30 % au chargement, 70 % à 15 jours après livraison conforme." },
      { title: 'Sections 6 et 7', body: "PO-GOG-026 émis le 19/03 avec le PV en annexe, liste nominative des chauffeurs avant le 20/03 ; signatures du SCM de Kerowa et du gérant d'Awan Fret à 12 h 40." },
    ],
    example: {
      title: 'Extrait de la section 3 (ligne « Conditions de paiement »)',
      lines: [
        "Point négocié : Conditions de paiement | Position départ acheteur : 30 jours après livraison conforme | Position départ fournisseur : 100 % à la réservation | Accord final : 30 % (735 EUR) au chargement sur preuve signée, 70 % (1 715 EUR) 15 jours après livraison conforme (waybill + GRN).",
      ],
    },
    result: "Un PV complet, chiffré, signé par les deux parties avant la fin de la rencontre, utilisable tel quel pour trancher un litige de facturation.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/5) — Le bilan chiffré : ce que la préparation a rapporté',
    scenario: "Le jeudi 19/03, vous comparez l'accord obtenu à ce qui serait arrivé sans préparation, et à votre BATNA.",
    steps: [
      { title: 'Ce que la préparation a protégé', body: "Une négociation « au prix » aurait abouti à 2 450 EUR payés à 100 % à la commande." },
    ],
    table: {
      columns: ['Indicateur', 'Sans préparation (prix seul)', 'Avec préparation (accord du 18/03)'],
      rows: [
        ['Prix par rotation', '2 450 EUR', '2 450 EUR (fixe, sans surtaxe en saison des pluies)'],
        ['Total des 5 rotations', '12 250 EUR', '12 250 EUR'],
        ['Argent avancé sans contrôle', '12 250 EUR (100 % à la commande)', '1 470 EUR au maximum (30 % × 2 rotations en cours)'],
        ['Délai de livraison', '« 5 à 10 jours » sans garantie, aucune pénalité', 'Livraison sous 5 jours, dernière avant le 15/04, pénalité 49 EUR par jour'],
        ['Surtaxe des pluies', '20 % sur chaque rotation, soit 490 EUR', '0 EUR : prix fixe jusqu\'au 30/09, soit 1 960 EUR évités sur 4 rotations'],
        ['Chargement en saison des pluies', 'Sans priorité', 'Sous 72 h, camion de réserve'],
        ['Coût à la tonne', '245 EUR/t', '245 EUR/t ; BATNA : 267,50 EUR/t pour 40 t seulement'],
      ],
    },
    result: "À prix identique, la préparation a divisé l'exposition financière par plus de 8, garanti les dates, supprimé la surtaxe des pluies et obtenu la clause PSEA.",
    tip: "Chiffrer le bénéfice d'une négociation est ce qui convainc votre hiérarchie de vous laisser du temps de préparation la prochaine fois.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/5) — Ce qui s\'est passé ensuite et ce que cela enseigne',
    scenario: "Dix jours après la signature, trois événements confirment la valeur des clauses négociées.",
    steps: [
      { title: 'Le 23/03 — R1 chargée à l\'heure', body: "La liste nominative a été remise le 20/03. Le camion est chargé le 23/03 comme prévu ; l'avance de 735 EUR est versée sur preuve signée.", result: "L'exposition financière reste limitée à 735 EUR." },
      { title: 'Le 30/03 — les médicaments partent', body: "Les colis de médicaments, dédouanés le 27/03, sont chargés sur R2 et livrés le 03/04 à Gogrial, avec 6 jours de couverture avant la rupture estimée du 09/04.", result: "Le risque sanitaire est écarté ; le délai négocié a tenu." },
      { title: 'Le 10/04 — R3 en retard de 2 jours', body: "R3 arrive le 10/04 au lieu du 08/04. Vous appliquez la pénalité de 98 EUR sur le solde de 1 715 EUR, avec le calcul écrit.", result: "Awan Fret ne conteste pas : le PV signé est la référence." },
    ],
    result: "Le cas est résolu : un transporteur unique, un prix maintenu à 2 450 EUR, mais des délais garantis, un paiement sécurisé, un prix fixe en saison des pluies, une clause PSEA appliquée et un dossier d'achat complet.",
    pitfall: "Après un succès, ne relâchez pas la BATNA : sans alternative pour l'après-pluies, votre position de la négociation d'octobre sera aussi faible qu'en mars.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 (noté) — Bâches plastiques avant la saison des pluies, zone isolée',
    instructions: "Contexte (fictif, inspiré de situations rencontrées en Afrique centrale) : votre mission gère un programme abris pour une population déplacée installée en zone rurale difficilement accessible. La saison des pluies commence dans trois semaines, et le stock de bâches plastiques est insuffisant pour couvrir les besoins restants. Un seul fournisseur dispose d'un stock disponible dans un rayon compatible avec le délai : les autres fournisseurs qualifiés sont soit trop éloignés (délai de transport incompatible), soit en rupture de stock sur cet article précis. Le fournisseur le sait : il a déjà été contacté par une autre organisation pour le même type de besoin et n'a aucune pression pour baisser son prix, affiché 22 % au-dessus du prix de la saison précédente. Votre coordinateur logistique vous demande de mener la négociation vous-même : sécuriser la livraison avant le début des pluies est la priorité absolue, le budget a une marge limitée mais non nulle, et toute négociation doit être formalisée avant validation de la commande. Rencontre prévue dans 48 heures. Données chiffrées : besoin de 4 000 bâches renforcées ; prix de la saison précédente 6,00 EUR l'unité, prix affiché 7,32 EUR (+22 %) ; budget disponible 30 000 EUR ; BATNA : second fournisseur régional, bâches de qualité inférieure (non conformes aux standards Sphère en matière d'abris), 5,90 EUR l'unité, délai supplémentaire de 5 jours ; le fournisseur annonce livraison sous 21 jours et paiement intégral à la commande.",
    steps: [
      { title: 'Grille — onglet 1', actions: ["Complétez l'objet, l'échéance, la nature de la relation (B5 à B7), les quatre lignes de contexte (B11 à B14) reflétant le rapport de force défavorable, et la BATNA (B18 à B21) avec son coût chiffré et sa force.", "Calculez le coût total de l'offre affichée (4 000 × 7,32) et de la BATNA (4 000 × 5,90)."] },
      { title: 'Grille — onglet 2', actions: ["Renseignez idéal, acceptable et rupture sur au moins trois dimensions (prix, délai, conditions de paiement), et sur le volume futur.", "Vérifiez vos pourcentages : le retour au prix de la saison précédente correspond à quelle baisse sur le prix affiché ?"] },
      { title: 'Grille — onglet 3', actions: ["Identifiez au moins deux concessions possibles avec leur contrepartie, cohérentes avec un rapport de force défavorable.", "Listez au moins deux concessions interdites avec leur raison, et quatre questions d'ouverture."] },
      { title: 'PV de négociation', actions: ["Rédigez le PV avec la trame trame-pv-negociation.docx, en simulant un résultat plausible : le fournisseur maintient l'essentiel de son prix, mais vous obtenez, en échange d'un engagement de volume sur la prochaine saison, un délai de livraison garanti avec pénalité et des conditions de paiement échelonnées.", "Remplissez les sections 1 à 7, avec les chiffres (pénalité, paiement échelonné, délai)."] },
    ],
    tip: "Reprenez la méthode du cas Awan Fret : les mêmes sept procédures, la même grille, le même PV. Ne cherchez pas à tout traiter dans l'onglet 2 sur le prix : le contexte annonce que le prix bougera peu.",
    deliverable: "Les deux fichiers complétés : grille-preparation-negociation-batna.xlsx (trois onglets, reflétant explicitement le rapport de force défavorable du cas) et trame-pv-negociation.docx (sections 1 à 7 remplies et chiffrées). Pas une négociation générique déconnectée du cas.",
  },
  {
    type: 'concept',
    title: 'Exercice 1 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Comparez votre travail à ces repères. D'autres valeurs sont acceptables si elles sont justifiées par les données et cohérentes entre elles. Les exemples pré-remplis de la grille servent de modèle de rédaction, ils ne remplacent pas vos calculs.",
    bullets: [
      "Onglet 1 : relation ponctuelle ou récurrente argumentée ; un seul fournisseur disponible ; position de force : fournisseur ; pression sur l'acheteur : pluies dans 3 semaines ; BATNA faible (qualité inférieure, +5 jours, risque de non-conformité), coût 23 600 EUR contre 29 280 EUR, mais non conforme.",
      "Onglet 2 : idéal 6,00 EUR (−18 % sur 7,32, pas −22 %) ; acceptable : −8 %, soit 6,73 EUR ; rupture : prix affiché accepté au maximum, à condition d'obtenir le délai et le paiement ; délai : 10 / 18 / 21 jours ; paiement : 30 jours / 15 jours / 100 % à la commande ; volume : engagement sur la prochaine saison contre conditions préférentielles.",
      "Onglet 3 : concession « délai légèrement allongé contre prix fixe sur les 3 prochaines commandes » ; concession « paiement partiel à la commande contre pénalité de retard » ; interdites : baisser la qualité Sphère, payer 100 % sans garantie.",
      "PV : prix 7,32 EUR maintenu (29 280 EUR) ; livraison en 18 jours avec pénalité de 1 % par jour (292,80 EUR), plafonnée à 10 % (2 928 EUR) ; paiement 30 % à la commande (8 784 EUR) et 70 % 15 jours après livraison conforme (20 496 EUR) ; engagement de volume de la saison suivante, sous réserve de validation.",
    ],
    example: {
      title: 'Calculs de référence',
      lines: [
        "Retour au prix de la saison précédente : 6,00 / 7,32 = 0,82, soit −18 % (et non −22 %).",
        "Total affiché : 4 000 × 7,32 = 29 280 EUR ; total à 6,00 EUR : 24 000 EUR ; écart : 5 280 EUR.",
        "Concession de −8 % : 7,32 × 0,92 = 6,73 EUR, soit 26 934 EUR au total.",
        "Plafond budgétaire : 30 000 / 4 000 = 7,50 EUR l'unité.",
      ],
    },
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Entraînement : six demandes du fournisseur, six contreparties',
    instructions: "Reprenez l'onglet 3 du cas Awan Fret. Dans la salle, le fournisseur formule six demandes successives. Pour chacune, décidez : accepter avec contrepartie, refuser (concession interdite) ou déplacer le terrain. Écrivez la phrase exacte que vous prononcez, au format « Si je fais X, qu'obtenez-vous en retour ? ».",
    steps: [
      { title: 'Demande 1', actions: ["« Je veux 100 % de paiement à la commande, c'est ma règle. »"] },
      { title: 'Demande 2', actions: ["« Je ne peux pas m'engager sur une date de livraison : cela dépend des pistes. »"] },
      { title: 'Demande 3', actions: ["« Je vous accorde 2 450 EUR si vous vous engagez sur 12 rotations pour la saison des pluies. »"] },
      { title: 'Demande 4', actions: ["« Je vous livre une liste de chauffeurs après le premier chargement, ce n'est qu'une formalité. »"] },
      { title: 'Demande 5', actions: ["« Pour les médicaments, je les charge avec le carburant du retour : cela économise un camion. »"] },
      { title: 'Demande 6', actions: ["« Je veux être votre seul transporteur pour le reste du projet. »"] },
    ],
    tip: "Pour chaque demande, posez-vous trois questions dans l'ordre : est-ce une concession interdite ? Quelle monnaie d'échange puis-je offrir ? Quelle contrepartie mesurable demande-t-elle ?",
    pitfall: "Répondre « non » sec à toutes les demandes : ce n'est pas de la négociation. Les demandes 1 et 3 peuvent donner lieu à un échange ; les demandes 4, 5 et 6 touchent à des concessions interdites.",
    deliverable: "Un tableau de six lignes : demande, dimension concernée, décision (accepter avec contrepartie / refuser / déplacer le terrain), phrase prononcée, contrepartie chiffrée.",
  },
  {
    type: 'concept',
    title: 'Exercice 2 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Les formulations varient ; ce qui compte est la décision, la dimension et la contrepartie mesurable.",
    bullets: [
      "1 — Paiement à 100 % : concession interdite telle quelle. Réponse : « Je ne peux pas avancer 12 250 EUR sans garantie. Si je règle 30 % au chargement de chaque rotation, que m'offrez-vous en retour ? Je propose des dates fermes et une pénalité. »",
      "2 — Aucune date de livraison : le délai est la priorité absolue. Réponse : « Je comprends l'aléa de la piste. Je peux accepter 5 jours au lieu de 4, en échange d'une pénalité par jour de retard et d'une exception de force majeure attestée par le Cluster. »",
      "3 — 12 rotations pour 2 450 EUR : hors mandat (12 × 2 450 = 29 400 EUR). Réponse : « Je peux m'engager sur 4 rotations sous réserve de validation, avec option de 2 rotations, en échange d'un prix fixe sans surtaxe. »",
      "4 — Liste de chauffeurs après coup : clause PSEA non négociable. Réponse : « La liste est une condition de la réservation : sans elle, pas de chargement. Je peux vous laisser jusqu'au 20/03. »",
      "5 — Médicaments avec carburant : concession interdite (qualité et sécurité). Réponse : « Camion bâché étanche dédié, c'est non négociable. Je vous propose en échange de regrouper les vivres et le matériel sur des rotations pleines. »",
      "6 — Exclusivité : interdite (dépendance et matrice de fragilité). Réponse : « Je ne peux pas m'interdire de qualifier d'autres transporteurs. Je peux vous garantir un volume minimum sur la saison des pluies. »",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Transposer à votre propre mission',
    instructions: "Appliquez les 7 procédures à une négociation fournisseur réelle de votre mission : un achat significatif, pas un simple réapprovisionnement de routine. Si vous n'êtes pas en poste, utilisez une négociation que vous avez connue ou que vous devrez mener bientôt. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    steps: [
      { title: 'Avant la rencontre — cadrage (P1 et P2)', actions: ["Grille, onglet 1 : objet, échéance, nature de relation, rapport de force avec faits, BATNA chiffrée."] },
      { title: 'Avant la rencontre — objectifs (P3)', actions: ["Grille, onglet 2 : idéal / acceptable / rupture sur 4 dimensions, mandat validé par écrit par votre hiérarchie."] },
      { title: 'Avant la rencontre — concessions et plan (P4)', actions: ["Grille, onglet 3 : concessions avec contreparties, concessions interdites, questions d'ouverture ; plan de séance d'une page ; test à blanc."] },
      { title: 'Pendant la rencontre (P5)', actions: ["Appliquez l'ancrage, le silence, les contre-propositions progressives et la contrepartie systématique ; tenez un journal de négociation."] },
      { title: 'À la fin de la rencontre (P6)', actions: ["Rédigez le PV avec la trame, faites-le signer avant de quitter la salle, scannez-le."] },
      { title: 'Après la rencontre (P7)', actions: ["Classez le PV dans le dossier d'achat, alignez le PO, contrôlez la première facture, rédigez le retour d'expérience."] },
    ],
    tip: "Anonymisez les noms de fournisseurs et les prix si vous partagez votre travail en dehors de votre organisation.",
    deliverable: "Votre propre kit de négociation (L1 à L7), réutilisable à chaque nouvelle négociation : grille complétée, plan de séance, journal, PV signé, dossier d'achat complété.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "La grille a ses trois onglets complets, aucune cellule d'exemple (bâches, 4 000 unités) n'est restée en place.",
      "La BATNA est nommée, chiffrée (coût, délai, risque), testée comme mobilisable et notée forte, moyenne ou faible avec une règle écrite.",
      "Chaque dimension de l'onglet 2 comporte trois valeurs chiffrées dans le bon ordre, une justification en colonne E, et un point de rupture cohérent avec la BATNA et le budget.",
      "Chaque concession possible a une contrepartie mesurable, les concessions interdites ont une raison, les questions d'ouverture testent une hypothèse.",
      "Les pourcentages sont corrects : revenir d'une hausse de +22 % se calcule −18 %, pas −22 %.",
      "Le PV est complet (7 sections), les positions de départ des deux parties figurent, l'accord final est chiffré, et il est signé par les deux parties avant la fin de la rencontre.",
      "Le PV est classé dans le dossier d'achat, le PO le reprend et y renvoie, et les écarts de facture se tranchent par la section 5.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, CLÔTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Entrer en salle sans BATNA documentée : négocier « à l'instinct » face à un fournisseur qui connaît précisément sa position. → Documentez la BATNA dans la grille, même faible : elle vous dit jusqu'où pousser.",
      "Insister sur le prix face à un fournisseur structurellement en position de force : répéter la même demande gaspille le temps et dégrade la relation. → Déplacez le terrain vers le délai, le paiement, le volume et les garanties.",
      "Céder une concession sans contrepartie « pour débloquer la discussion » : le fournisseur retient que céder gratuitement fonctionne. → « Si je fais X, qu'obtenez-vous en retour ? », systématiquement.",
      "Combler le silence après une offre : reprendre la parole trop vite par inconfort, c'est se concéder soi-même quelque chose. → Comptez jusqu'à dix après chaque offre.",
      "Quitter la salle sur un accord verbal non formalisé : il se reformule différemment à la facturation. → PV rempli et signé avant de partir.",
      "Annoncer des pourcentages faux (« 22 % de remise » pour revenir à l'ancien prix). → Vérifiez chaque pourcentage : revenir d'une hausse de +22 % se calcule −18 %.",
      "Dépasser son mandat ou fractionner les engagements pour rester sous un seuil. → Mandat écrit, engagements cumulés, mention « sous réserve de validation ».",
      "Bluffer sur une alternative qui n'existe pas. → Appuyez-vous sur des faits : une BATNA faible mais vraie vaut mieux qu'une BATNA fausse découverte.",
      "Classer le PV hors du dossier d'achat ou ne jamais l'opposer à la facture. → Pièce du dossier, reprise dans le PO, contrôlée à chaque rotation.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez cadré une négociation fournisseur, choisi la posture et évalué le rapport de force avec des faits chiffrés (test de marché, historique de prix, décomposition de la hausse).",
      "Vous avez documenté et chiffré une BATNA, testé qu'elle est mobilisable, et mesuré sa force.",
      "Vous avez fixé, sur quatre dimensions, un résultat idéal, acceptable et un point de rupture, validés par votre hiérarchie.",
      "Vous avez préparé concessions avec contreparties, concessions interdites, questions d'ouverture et plan de séance, puis répété à blanc.",
      "Vous avez mené la séance avec l'ancrage, le silence stratégique, les contre-propositions progressives et la contrepartie systématique, en déplaçant le terrain quand le prix était verrouillé.",
      "Vous avez rédigé un PV de négociation complet, signé avant de quitter la salle, et l'avez transmis au dossier d'achat, avec un PO aligné.",
      "Vous savez contrôler livraisons et factures par rapport au PV et alimenter la fiche fournisseur et le retour d'expérience.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais distinguer une posture distributive d'une posture collaborative et justifier laquelle utiliser selon la nature de la relation fournisseur.",
      "Je sais définir ma BATNA, mes objectifs et mes points de rupture avant d'entrer en négociation, sur plusieurs dimensions et pas seulement le prix.",
      "Je sais appliquer l'ancrage, le silence stratégique et la gestion des concessions en situation de négociation réelle.",
      "Je sais adapter ma stratégie face à un fournisseur en position de force, en déplaçant la négociation vers des leviers autres que le prix.",
      "J'ai complété une grille de préparation de négociation avec le template fourni, incluant une BATNA documentée.",
      "J'ai rédigé un PV de négociation complet avec le template fourni, prêt à être transmis au dossier d'achat.",
      "Ma grille et mon PV sont rangés dans un dossier d'achat : ils serviront de base au module suivant sur la gestion des fournisseurs.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Prochain module : « Gestion des Fournisseurs & Conformité ». Vous y transformerez les accords négociés ici en relations durables : qualification et évaluation périodique des fournisseurs, vérification d'inéligibilité (listes OFAC, UE, ONU), politique anti-corruption et contrats-cadres pour les achats récurrents.",
  },
]
