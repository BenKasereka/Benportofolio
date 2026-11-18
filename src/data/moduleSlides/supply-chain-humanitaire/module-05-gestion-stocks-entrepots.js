// Module 05 — Gestion des Stocks & Entrepôts
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure de
// l'entrepôt (réception et contrôle qualité, réclamation fournisseur,
// enregistrement ERP, stockage, suivi par lot et FEFO, bons de sortie, bons
// de carburant, inventaire et réconciliation, rapport de stock) est déroulée
// étape par étape (une étape par écran), champ par champ dans les templates,
// appliquée à un cas fil rouge chiffré, puis résolue intégralement et
// transposée en exercices. Les diapositives trop chargées sont découpées
// automatiquement en « (suite) » par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'cover',
    title: 'Gestion des Stocks & Entrepôts',
    hook: "En trois semaines à l'entrepôt de Gogrial, vous allez produire ce qu'un bailleur et un auditeur attendent d'un Supply Chain Manager : des bons de réception signés avec contrôle qualité et décision motivée, un registre des lots en FEFO, des bons de sortie et de carburant tracés, un inventaire réconcilié avec l'ERP et un rapport de stock mensuel. Chaque étape est déroulée ici, champ par champ, dans les templates du module, sur un cas réel de terrain.",
  },
  {
    type: 'objectives',
    items: [
      "Réceptionner une livraison en la vérifiant contre la PO, le packing list et le comptage physique avant toute signature, en produisant un bon de réception (GRN, template .xlsx) complété ligne par ligne, avec sa synthèse des écarts.",
      "Mener un contrôle qualité documenté, puis décider d'accepter, d'accepter partiellement ou de rejeter chaque ligne, en produisant des décisions chiffrées et motivées, leurs preuves et le message de réclamation au fournisseur.",
      "Enregistrer la réception dans l'ERP à la quantité réellement acceptée et organiser le stockage par zones, en produisant une écriture ERP référencée au GRN, le rapprochement PO – GRN – facture et le plan de l'entrepôt.",
      "Assurer un suivi par lot et par date de péremption (FEFO) exploitable lors d'un rappel de produit, en produisant un registre des lots avec alertes et des fiches de stock à jour.",
      "Tracer chaque sortie de marchandise et chaque plein de carburant, en produisant des bons de sortie (DN, template .xlsx) signés par quatre parties et des bons de carburant rapprochés mensuellement de la cuve.",
      "Réconcilier un inventaire physique avec le registre ERP et expliquer chaque écart par une cause vérifiée, en produisant le rapport de réconciliation (template .docx) avec action corrective et validation du superviseur.",
      "Distinguer, à chaque étape réception → stockage → sortie, ce qui relève de l'opérationnel entrepôt et de la redevabilité SCM, en produisant le rapport de stock mensuel et la matrice « qui fait / qui contrôle / quelle preuve ».",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une lecture : c'est le pilotage complet d'un entrepôt humanitaire, découpé en 10 procédures. À la fin, vous aurez en main neuf livrables que vous pourrez réutiliser tels quels dans votre propre entrepôt.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé, qui mène une réponse médicale et nutritionnelle à Gogrial (État du Warrap, Soudan du Sud) et dont vous avez pris le poste de Supply Chain Manager le 2 mars 2026. Le cas résolu de bout en bout est la livraison de suppléments nutritionnels (RUTF) du cas source du module.",
    ],
    bullets: [
      "L1 — Le bon de réception et contrôle qualité (GRN) complété dans bon-de-reception-controle-qualite.xlsx, avec décision motivée pour chaque ligne.",
      "L2 — Le message de réclamation au fournisseur et le registre des réclamations.",
      "L3 — L'écriture ERP référencée au GRN et le rapprochement PO – GRN – facture avant paiement.",
      "L4 — Le plan de l'entrepôt par zones et les fiches de stock à jour.",
      "L5 — Le registre des lots avec durée de vie résiduelle, couverture et alertes FEFO.",
      "L6 — Les bons de sortie (DN) et les bons de carburant dans bons-de-sortie-entrepot-carburant.xlsx.",
      "L7 — Le rapport de réconciliation d'inventaire dans rapport-reconciliation-inventaire-erp.docx.",
      "L8 — Le rapport de stock mensuel pour la coordination et le bailleur.",
      "L9 — La matrice « qui fait / qui contrôle / quelle preuve » de l'entrepôt.",
    ],
    tip: "Créez dès maintenant un dossier « Entrepôt Gogrial » avec un sous-dossier par livrable (L1 à L9) et un dossier « GRN signés » classé par numéro. Le jour de l'audit, vous ne chercherez rien.",
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : l\'entrepôt de Kerowa Santé à Gogrial',
    body: [
      "Kerowa Santé (ONG fictive) mène depuis le 1er décembre 2025 un projet médical et nutritionnel de 12 mois à Gogrial : centre de stabilisation nutritionnelle, service de pédiatrie, deux cliniques mobiles. Budget 1 200 000 EUR, dont 85 % financés par ECHO. Rapport intermédiaire dû le 15 juin 2026. Vous connaissez déjà la mission : le registre des flux de mars a montré 5 flux et 4 dossiers d'achat incomplets.",
      "Nous sommes le lundi 13 avril 2026. L'entrepôt de Gogrial, un hangar de 300 m², reçoit une dizaine de livraisons par mois. Aucune n'a été réceptionnée avec un document formel : le logisticien signe le bon de livraison du transporteur et l'ERP est alimenté à partir des PO. ECHO a demandé un suivi des stocks et des consommations avant le rapport de juin, et le format attendu reste à confirmer.",
    ],
    table: {
      columns: ['Personne (fictive)', 'Fonction', 'Rôle à l\'entrepôt'],
      rows: [
        ['Vous', 'Supply Chain Manager', 'Fixez les procédures, contre-signez les écarts, validez les réconciliations'],
        ['Peter A.', 'Logisticien terrain', 'Responsable opérationnel de l\'entrepôt, planifie les sorties'],
        ['Achol D.', 'Magasinière', 'Compte, contrôle, range, tient les fiches de stock'],
        ['Garang M.', 'Chef d\'équipe manutention', 'Décharge, étiquette, prépare les palettes'],
        ['Joseph K.', 'Administration-finance', 'Saisie ERP et paiement des factures'],
        ['Dr Rebecca N.', 'Responsable programme nutrition', 'Fournit les consommations hebdomadaires de RUTF et de vivres'],
        ['Dr Samuel T.', 'Coordinateur médical', 'Prescripteur des médicaments, valide les péremptions courtes'],
      ],
    },
    pitfall: "Les personnes, l'ONG, les fournisseurs et les montants sont fictifs et donnés à titre d'exemple ; ne réutilisez jamais ces chiffres tels quels sur votre entrepôt.",
  },
  {
    type: 'concept',
    title: 'Vos trois semaines à l\'entrepôt, événement par événement',
    body: "Chaque événement du calendrier déclenche une ou plusieurs procédures du module. Suivez cet ordre : chaque document produit sert d'entrée au suivant (le GRN alimente l'ERP, l'ERP et les DN alimentent l'inventaire, l'inventaire alimente le rapport).",
    table: {
      columns: ['Quand', 'Événement à Gogrial', 'Procédures'],
      rows: [
        ['13 – 17 avril', 'Mise en ordre de l\'entrepôt : zones, emplacements, fiches de stock, registre des lots', 'P4, P5'],
        ['Mardi 14 avril', 'Livraison du grossiste de Wau (PO KS-2026-0058) : vivres', 'P1, P2, P3'],
        ['Jeudi 16 avril', 'Plein du pick-up KS-01 : premier bon de carburant', 'P7'],
        ['Lundi 20 avril', 'Sortie de vivres vers la cantine du centre (DN-GOG-2026-029)', 'P6, P5'],
        ['Mardi 21 avril', 'Livraison de RUTF (PO KS-2026-0072) : le cas résolu du module', 'P1, P2, P3, P8'],
        ['Lundi 27 avril', 'Inventaire complet de l\'entrepôt et réconciliation avec l\'ERP', 'P8'],
        ['Jeudi 30 avril', 'Clôture mensuelle, rapport de stock, matrice des contrôles', 'P9, P10'],
      ],
    },
    tip: "Inscrivez ces rendez-vous dans l'agenda partagé de la mission. Une réception planifiée se prépare (procédure 1, étape 1) ; une réception subie se bâcle.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'La réception : un point de contrôle contractuel, pas une simple livraison',
    body: [
      "Sur le terrain, on entend « le camion est arrivé, on décharge » comme si la réception se résumait à un geste logistique. Au sens SCM, la réception est le moment où vous vérifiez que ce qui arrive correspond à ce qui a été commandé et engagé contractuellement : la commande d'achat (Purchase Order, PO) et le packing list qui l'accompagne.",
      "Tant que cette vérification n'est pas faite, vous n'avez aucune base pour dire que le fournisseur a rempli ses obligations, ni que votre organisation doit le payer en totalité. Plus tard, c'est souvent trop tard : le transporteur est reparti, le fournisseur a été payé sur la base de la PO, et personne ne peut plus prouver ce qui est arrivé ce jour-là.",
    ],
    highlight: "La réception se fait toujours en trois documents simultanés : la PO (ce qui a été commandé), le packing list (ce que le fournisseur déclare avoir expédié) et le comptage physique (ce qui arrive). Un seul de ces éléments, pris isolément, ne prouve rien.",
    example: {
      title: 'Gogrial, mardi 14 avril — la même ligne vue par trois documents',
      lines: [
        "PO KS-2026-0058 : 20 cartons d'huile enrichie commandés.",
        "Packing list du grossiste de Wau : 20 cartons expédiés.",
        "Comptage d'Achol D. : 18 cartons sur la palette.",
        "Conclusion : la PO et le packing list concordent, c'est le comptage qui révèle 2 cartons manquants. Sans comptage, personne ne le saurait.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Ce que prouve — et ne prouve pas — chaque document de la réception',
    columns: ['Document', 'Qui l\'émet', 'Ce qu\'il prouve', 'Ce qu\'il ne prouve pas'],
    rows: [
      ['PO (commande d\'achat)', 'Kerowa', 'Ce que l\'organisation a commandé : quantité, qualité, prix, délai', 'Que le fournisseur a livré quoi que ce soit'],
      ['Packing list', 'Fournisseur ou transporteur', 'Ce que le fournisseur déclare avoir expédié (quantités, colisage, parfois lots)', 'Que les colis sont arrivés, entiers, et conformes'],
      ['Comptage physique et contrôle qualité', 'Vous, à l\'entrepôt', 'Ce qui est réellement arrivé, dans quel état', 'Que la PO était la bonne : c\'est la comparaison avec elle qui le dit'],
      ['Bon de livraison du transporteur', 'Transporteur', 'Que le transporteur a remis des colis, à une date donnée', 'Quoi que ce soit sur le contenu : le signer sans vérifier vaut accord'],
      ['GRN (bon de réception)', 'Kerowa', 'Ce qui a été reçu et accepté, avec le résultat du contrôle qualité : fait foi côté organisation', 'Rien tant qu\'il n\'est pas signé par les deux parties'],
      ['Facture', 'Fournisseur', 'Ce que le fournisseur demande à être payé', 'Que la quantité facturée a été reçue : à rapprocher du GRN avant paiement'],
    ],
  },
  {
    type: 'concept',
    title: 'Le contrôle qualité à la réception : rejeter maintenant, pendant que le fournisseur est là',
    body: [
      "Sous la pression d'un camion qui attend, le réflexe est de vérifier la quantité et de laisser la qualité « se voir plus tard, à l'usage ». C'est l'inverse de ce qu'impose une gestion SCM sérieuse. Un rejet documenté à la réception engage la responsabilité contractuelle du fournisseur ou du transporteur, encore présent. Le même défaut découvert des semaines plus tard ne peut plus être imputé à personne : votre organisation porte la perte, et parfois le bénéficiaire reçoit un produit dégradé.",
      "Le contrôle porte au minimum sur quatre points, dans une passe distincte du comptage :",
    ],
    bullets: [
      "L'état des emballages : écrasement, humidité, déchirures, traces de manipulation, bouteilles qui fuient.",
      "La cohérence entre l'étiquetage et le produit commandé : spécification de la PO, lot, date de péremption, fabricant.",
      "La date de péremption restante : une durée de vie résiduelle trop courte pour distribuer avant expiration est un défaut de qualité, pas seulement de logistique.",
      "Un échantillonnage physique réparti sur plusieurs palettes et plusieurs niveaux, jamais le seul carton du dessus.",
    ],
    highlight: "Un rejet à la réception n'est jamais un échec de la procédure : c'est la procédure qui fonctionne. Le vrai échec est de signer une réception conforme sur un produit défectueux « parce que le camion doit repartir ».",
  },
  {
    type: 'stat-callout',
    stat: '2 %',
    caption: 'Le seuil de tolérance d\'écart de quantité codé dans le template bon-de-reception-controle-qualite.xlsx.',
    context: "Au-delà de 2 % d'écart par rapport à la quantité attendue, la ligne passe en « ÉCART SIGNIFICATIF ». Mais ce statut ne mesure que la quantité : une ligne « CONFORME » peut être rejetée pour sa qualité (étiquette non conforme, humidité, péremption courte).",
  },
  {
    type: 'comparison-table',
    title: 'Trois décisions possibles pour chaque ligne reçue',
    columns: ['Décision (libellé du template)', 'Quand la prendre', 'Ce que vous écrivez', 'Conséquence'],
    rows: [
      ['Accepté intégralement', 'Quantité attendue reçue (ou écart non nul dans la tolérance de 2 %) et qualité conforme', 'Quantité acceptée ; si écart toléré, l\'écart noté en remarque', 'Entrée en stock à la quantité reçue ; facture payée à la quantité reçue'],
      ['Accepté partiellement (préciser quantité et motif)', 'Une partie seulement de la quantité attendue est acceptée : manquants, unités endommagées, quantité conforme au reste', 'Quantité acceptée, quantité rejetée, quantité non livrée, lot et motif précis', 'Entrée à la quantité acceptée ; rejets en quarantaine ; réclamation écrite'],
      ['Rejeté totalement', 'Défaut grave touchant toute la ligne : spécification non respectée, produit impropre, péremption incompatible avec la consommation, article non commandé', 'Quantité rejetée, lot, motif, preuves', 'Aucune entrée en stock ; marchandise en quarantaine ; réclamation ou retour'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Suivi par lot : rotation physique ou traçabilité SCM ?',
    columns: ['Angle', 'Rotation physique (entrepôt)', 'Traçabilité (SCM)'],
    rows: [
      ['Question posée', 'Quel carton sors-je en premier ?', 'Ce lot précis a-t-il été distribué, et où ? Quel document l\'a fait entrer ?'],
      ['Outil', 'Étiquette de palette, emplacement, règle FEFO', 'N° de lot reporté dans le GRN, le registre des lots, chaque DN et l\'ERP'],
      ['Moment où il se joue', 'À chaque sortie de stock', 'À la réception, quand on relève le lot, et à chaque mouvement'],
      ['Ce qui arrive sans lui', 'Des produits périmés au fond du hangar', 'Impossible de cibler un rappel du fournisseur ou de répondre à un bailleur sur un lot précis'],
    ],
    tip: "Un numéro de lot qui n'existe que sur l'étiquette physique est utile pour la rotation du jour, mais inutilisable des mois plus tard. Le lien lot → GRN → ERP est ce qui fait la valeur SCM.",
  },
  {
    type: 'concept',
    title: 'FEFO plutôt que FIFO : on sort d\'abord ce qui périme d\'abord',
    body: "FIFO (First In, First Out) sort le plus ancien reçu. FEFO (First Expired, First Out) sort ce qui expire en premier, quelle que soit la date d'arrivée. Pour les produits à date de péremption (nutrition, médicaments, huile, farine), FEFO est la règle : un lot reçu en retard mais expirant plus tôt doit partir avant un lot plus ancien expirant plus tard.",
    example: {
      title: 'Deux lots d\'huile enrichie (exemple)',
      lines: [
        "Lot A : reçu le 10 mars, péremption 12/2026.",
        "Lot B : reçu le 14 avril, péremption 08/2026.",
        "FIFO sortirait A d'abord et laisserait B atteindre sa date : perte probable.",
        "FEFO sort B d'abord : A, qui expire plus tard, attend son tour sans risque.",
      ],
    },
    tip: "FEFO ne se décide pas à l'entrepôt au moment de charger le camion : il se prépare à la réception (la date est relevée), au rangement (le lot le plus court est le plus accessible) et à la sortie (le DN indique le lot servi).",
  },
  {
    type: 'concept',
    title: 'La réconciliation d\'inventaire : un exercice de redevabilité, pas un contrôle comptable',
    body: [
      "Réconcilier consiste à comparer, ligne par ligne et lot par lot, ce qui est réellement compté avec ce que l'ERP déclare. Vue du terrain, c'est une corvée de fin de mois. Vue du niveau SCM, c'est l'un des exercices les plus scrutés par les bailleurs : la preuve, ou l'absence de preuve, que l'organisation sait à tout moment où se trouve l'aide qu'elle a mandat de distribuer.",
      "Un écart non expliqué n'est jamais anodin : ce peut être une erreur de saisie corrigible en cinq minutes, ou une perte, un détournement, une mauvaise réception jamais corrigée, qui s'accumule d'un inventaire à l'autre. La différence se voit dans la qualité de l'explication, pas dans le chiffre.",
    ],
    highlight: "Une réconciliation audit-ready répond à trois questions par écart : quelle est l'ampleur exacte de l'écart, quelle est la cause la plus probable compte tenu du contexte réel (pas une formule générique), et quelle action corrective a été engagée et validée par qui ?",
    pitfall: "Ajuster le chiffre ERP pour qu'il corresponde, sans comptage physique préalable et sans explication écrite, ne protège personne : ni l'équipe entrepôt, ni l'organisation en cas d'audit bailleur.",
  },
  {
    type: 'comparison-table',
    title: 'À chaque étape : ce qui relève de l\'entrepôt, ce qui relève de la redevabilité SCM',
    columns: ['Étape', 'Opérationnel entrepôt (Achol D., Peter A.)', 'Redevabilité SCM (vous)'],
    rows: [
      ['Réception', 'Décharger, compter, inspecter, remplir le GRN', 'Imposer la règle des trois documents, contre-signer les écarts significatifs, exiger la preuve des rejets'],
      ['Stockage', 'Ranger par zone et par lot, respecter la rotation FEFO, tenir les fiches', 'Vérifier que le lot est lié au GRN, suivre les péremptions et les alertes de couverture'],
      ['Sortie', 'Préparer, charger, faire signer le DN', 'Vérifier que toute sortie a une demande interne approuvée et quatre signatures'],
      ['Inventaire', 'Compter physiquement, ranger, étiqueter', 'Contrôler le comptage, enquêter sur les écarts, valider l\'ajustement ERP'],
      ['Rapportage', 'Fournir fiches de stock et consommations', 'Consolider, expliquer, alerter, répondre au bailleur'],
    ],
  },
  {
    type: 'concept',
    title: 'Entrée et sortie obéissent à la même discipline',
    body: "Tout ce qui entre par le GRN doit ressortir tracé de la même façon : un bon de sortie (Delivery Note, DN) rattaché à une demande interne approuvée, signé avant le départ du véhicule. Le carburant suit la même logique avec un bon par plein. C'est cette symétrie, à l'entrée comme à la sortie, qui rend la réconciliation d'inventaire réellement fiable : si une seule sortie échappe au document, l'ERP et le hangar se séparent, et l'écart de fin de mois ne s'explique plus.",
    example: {
      title: 'Gogrial : l\'équation que l\'inventaire vérifie',
      lines: [
        "Stock ERP = stock initial + Σ GRN acceptés − Σ DN − Σ bons de carburant − pertes déclarées.",
        "Stock physique compté = ce que l'on touche dans le hangar.",
        "Écart = stock physique − stock ERP : chaque unité d'écart pointe vers un GRN, un DN ou une perte non enregistrés.",
      ],
    },
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'PO (Purchase Order / commande d\'achat)', definition: "Document contractuel qui engage l'organisation et le fournisseur sur une quantité, une qualité et un prix : la référence de base de toute réception." },
      { term: 'Packing list', definition: "Document du fournisseur ou du transporteur qui détaille le contenu réel d'un envoi (quantités, colisage, parfois lots) : à confronter à la PO et au comptage." },
      { term: 'GRN (Goods Received Note / bon de réception)', definition: "Document interne qui formalise ce qui a été reçu et accepté, avec le résultat du contrôle qualité : c'est lui, et non le bon de livraison du transporteur, qui fait foi côté organisation." },
      { term: 'DN (Delivery Note / bon de sortie) et IR', definition: "Le DN documente toute sortie de l'entrepôt ; il renvoie à la demande interne (Internal Request, IR) qui l'a déclenchée." },
      { term: 'Rejet partiel / rejet total', definition: "Décision documentée de refuser tout ou partie d'une livraison non conforme, avec justification écrite et notification au fournisseur." },
      { term: 'Lot et péremption (DLUO)', definition: "Le numéro de lot identifie une fabrication ; la date limite d'utilisation optimale ou de péremption dit jusqu'à quand le produit peut être distribué. Les deux se relèvent à la réception." },
      { term: 'FEFO', definition: "First Expired, First Out : on sort d'abord le lot qui expire en premier, quelle que soit sa date d'arrivée." },
      { term: 'Quarantaine', definition: "Zone clairement séparée où l'on isole la marchandise rejetée ou suspecte, étiquetée, jusqu'à la décision (retour, remplacement, destruction)." },
      { term: 'Fiche de stock', definition: "Registre par article et par lot de chaque entrée, sortie et solde, référencé à un GRN ou à un DN." },
      { term: 'Rapprochement PO – GRN – facture (three-way match)', definition: "Contrôle avant paiement : la quantité facturée ne doit pas dépasser la quantité acceptée au GRN, au prix de la PO." },
      { term: 'Réconciliation d\'inventaire', definition: "Comparaison entre comptage physique et registres ERP, avec documentation de tout écart, de sa cause et de l'action corrective." },
      { term: 'Audit-readiness', definition: "État dans lequel documents et registres permettent de répondre à tout moment à un auditeur ou à un bailleur sans reconstitution a posteriori." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — RÉCEPTION ET CONTRÔLE QUALITÉ (GRN)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 8',
    title: 'Préparer la réception avant l\'arrivée du camion',
    intro: "Le camion du grossiste de Wau est annoncé mardi 14 avril vers 10 h. Entrées nécessaires : la PO KS-2026-0058, le packing list PL-0388 reçu par e-mail la veille, et le template bon-de-reception-controle-qualite.xlsx. Une réception préparée se contrôle ; une réception improvisée se subit.",
    steps: [
      {
        title: 'Sortez et comparez les documents',
        actions: [
          "Imprimez la PO et le packing list, agrafez-les ensemble.",
          "Comparez leurs en-têtes : numéro de PO, fournisseur, lieu de livraison, date prévue.",
          "Comparez les lignes : référence, quantité, lot annoncé. Notez au crayon toute différence ; si elle est importante, appelez le fournisseur avant l'arrivée du camion.",
        ],
      },
      {
        title: 'Préparez le GRN',
        actions: [
          "Ouvrez le template, enregistrez-le sous « GRN-GOG-2026-014_2026-04-14.xlsx ». L'onglet Reception-CQ contient l'en-tête (lignes 3 et 4), le tableau de 20 lignes (lignes 6 à 25) et le bloc VALIDATION.",
          "Reportez en colonnes B à F, ligne par ligne : code article, description, réf. PO, n° de lot annoncé, quantité attendue selon la PO.",
          "Laissez vides la colonne G (Qté reçue) et les colonnes I et J, qui contiennent des formules.",
        ],
      },
      {
        title: 'Préparez le terrain',
        actions: [
          "Libérez la zone de réception, réservez des palettes vides et la zone D (quarantaine).",
          "Briefez Achol D. et Garang M. : rien n'entre en stock avant comptage et contrôle qualité.",
          "Prévenez le chauffeur : le contrôle prend environ 1 h 30 et aucun papier n'est signé avant.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — GRN pré-rempli (lignes 6 à 9, colonnes A à H)',
      lines: [
        "1 | VIV-001 | Farine de maïs, sac 50 kg | KS-2026-0058 | MZ-0326-B | 70 | (vide) | sac",
        "2 | VIV-002 | Haricots secs, sac 50 kg | KS-2026-0058 | H-0326 | 12 | (vide) | sac",
        "3 | VIV-003 | Huile végétale enrichie vitamine A, carton 12 × 1 L | KS-2026-0058 | HE-044 | 20 | (vide) | carton",
        "4 | VIV-004 | Sel iodé, sac 25 kg | KS-2026-0058 | SEL-0326 | 4 | (vide) | sac",
      ],
    },
    result: "GRN pré-rempli, documents agrafés, zone prête : à l'arrivée du camion, il ne reste qu'à compter, contrôler et décider.",
    pitfall: "Ne recopiez jamais le packing list dans « Qté reçue » pour gagner du temps : le contrôle devient une recopie et l'écart sera toujours à zéro.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 8',
    title: 'Remplir l\'en-tête du GRN',
    intro: "L'en-tête identifie la réception : c'est lui qui permettra de retrouver ce document dans six mois et de le rapprocher de la facture. Il comporte huit champs, chacun dans une cellule fusionnée qui contient un libellé suivi de « ________________ ».",
    steps: [
      {
        title: 'Ligne 3 : identifier le document, la date, le lieu et l\'expéditeur',
        actions: [
          "A3 « GRN N° » : le numéro suivant du registre des GRN (série séquentielle, sans trou).",
          "D3 « GRN Date » : la date réelle d'arrivée de la marchandise, pas la date de saisie.",
          "G3 « Point de stockage » : la zone de destination (« Entrepôt Gogrial — Zone A vivres »).",
          "J3 « Reçu de (fournisseur/expéditeur) » : celui qui livre physiquement, transporteur ou chauffeur.",
        ],
      },
      {
        title: 'Ligne 4 : relier le GRN aux documents d\'achat',
        actions: [
          "A4 « Fournisseur » : le nom contractuel, tel qu'il figure sur la PO.",
          "D4 « N° de facture » et G4 « Date de facture » : reportez-les depuis la facture ou le bon de livraison ; sans facture, écrivez « en attente », ne laissez pas le champ vide.",
          "J4 « Réf. PO/PL/FO » : la PO et le packing list ; FO (ordre de transport) seulement si un transitaire intervient.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — en-tête rempli (lignes 3 et 4)',
      lines: [
        "GRN N° : GRN-GOG-2026-014 | GRN Date : 14/04/2026 | Point de stockage : Entrepôt Gogrial — Zone A (vivres)",
        "Reçu de : chauffeur du grossiste de Wau, camion 10 t | Fournisseur : Grossiste Wau — marché central",
        "N° de facture : FAC-2026-0388 | Date de facture : 13/04/2026 | Réf. PO/PL/FO : KS-2026-0058 / PL-0388 / sans objet",
      ],
    },
    result: "Huit champs renseignés, aucun « ________________ » restant : le GRN est identifiable et rapprochable.",
    pitfall: "Dater le GRN du jour de saisie plutôt que du jour d'arrivée : l'ERP et le GRN ne tombent pas dans la même période et créent des écarts fantômes à l'inventaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 8',
    title: 'Compter physiquement chaque ligne, avant tout autre contrôle',
    intro: "Premier contrôle : la quantité. Il se fait avant la qualité, avant toute signature, et sur la marchandise posée en zone de réception, pas déjà rangée. Le chiffre qui compte est celui que vous touchez, pas celui du packing list.",
    steps: [
      {
        title: 'Organisez le comptage',
        actions: [
          "Faites décharger article par article sur palette, dans la zone de réception.",
          "Comptez en binôme : Achol D. compte à voix haute, Garang M. note. Vous recomptez une ligne sur deux, et toute ligne qui montre un écart.",
          "Comptez dans l'unité de la PO (sac, carton). Ne déduisez jamais un nombre d'unités d'un poids total.",
        ],
      },
      {
        title: 'Reportez les chiffres dans le template',
        actions: [
          "Saisissez en colonne G la quantité comptée, ligne par ligne, au fur et à mesure.",
          "Saisissez 0 (zéro) si un article attendu n'est pas arrivé : une cellule vide masque l'écart, un zéro déclenche « ÉCART SIGNIFICATIF ».",
          "Pour un article livré mais non commandé, ajoutez une ligne avec Qté attendue = 0 et la mention « non commandé » : son statut restera vide et la décision se prendra à la main.",
          "Relevez le numéro de lot sur chaque palette et comparez-le à la colonne E ; corrigez E si le lot livré diffère de celui annoncé.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'PO', 'Packing list', 'Compté'],
      rows: [
        ['Farine de maïs (sacs 50 kg)', '70', '70', '69'],
        ['Haricots secs (sacs 50 kg)', '12', '12', '12'],
        ['Huile enrichie (cartons 12 × 1 L)', '20', '20', '18'],
        ['Sel iodé (sacs 25 kg)', '4', '4', '4'],
      ],
    },
    result: "La colonne G est complète pour les quatre lignes : le packing list reproduit la PO, mais le comptage révèle 1 sac de farine et 2 cartons d'huile manquants.",
    pitfall: "Compter pendant que l'on inspecte l'état des emballages, en une seule passe accélérée pour libérer le camion : on perd des unités et on sous-évalue la qualité. Chaque contrôle demande sa propre attention.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 8',
    title: 'Mener le contrôle qualité, dans une passe distincte',
    intro: "Deuxième contrôle : la qualité, une fois le comptage terminé. Les quatre points du minimum (emballages, étiquetage, péremption, échantillonnage) se vérifient ligne par ligne, et chaque observation s'écrit dans la colonne K « Remarque (contrôle qualité, écart, état) ».",
    steps: [
      {
        title: 'Contrôlez les quatre points',
        actions: [
          "Emballages : écrasement, humidité, déchirures, sacs éventrés, bouteilles qui fuient.",
          "Étiquetage : l'étiquette correspond-elle à la spécification de la PO (« huile enrichie vitamine A », « sel iodé ») ? Nom, lot, péremption et fabricant sont-ils lisibles ?",
          "Péremption : relevez la date de chaque lot, calculez la durée de vie résiduelle, comparez-la à la durée de consommation prévue.",
          "Échantillonnage : ouvrez des unités prises à plusieurs endroits (haut, milieu, bas, plusieurs palettes). Règle type Kerowa : moins de 20 unités, tout contrôler ; de 20 à 100, 10 unités ; au-delà, 10 % avec un minimum de 10.",
        ],
      },
      {
        title: 'Consignez immédiatement',
        actions: [
          "Écrivez en K ce que vous avez observé, avec le nombre d'unités contrôlées.",
          "Photographiez chaque défaut avec l'étiquette de lot visible, numérotez les photos (P-01, P-02…) et citez-les en K.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — résultats du contrôle qualité du 14/04',
      lines: [
        "Farine : 8 sacs ouverts sur 3 palettes, pas d'humidité ; 5 sacs pesés de 49,8 à 50,3 kg ; péremption 30/09/2026.",
        "Haricots : 5 sacs ouverts, grains sains, pas d'insectes ; péremption 31/12/2026.",
        "Huile : 1 carton imbibé, 3 bouteilles fuient (photos P-03, P-04) ; 6 autres cartons ouverts, RAS ; étiquette « enrichie en vitamine A » ; péremption 28/02/2027.",
        "Sel : 4 sacs étiquetés « sel de cuisine », sans mention iodé (photos P-05, P-06) ; la PO exige du sel iodé.",
      ],
    },
    result: "Chaque ligne porte une observation écrite, avec le nombre d'unités contrôlées et les références des photos.",
    pitfall: "Écrire « RAS » sans dire combien d'unités ont été contrôlées : un auditeur ne peut pas distinguer un contrôle réel d'une formalité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 8',
    title: 'Lire l\'écart et le statut calculés par le template',
    intro: "Dès que F (Qté attendue) et G (Qté reçue) sont remplies, les colonnes I (Écart) et J (Statut) se calculent seules. Vous les lisez, vous ne les modifiez jamais : le statut ne dépend pas de votre impression générale de la livraison.",
    steps: [
      {
        title: 'Comprenez ce que calculent les formules',
        actions: [
          "Cliquez dans I6 : écart = Qté reçue − Qté attendue (négatif = manquant, positif = excédent). Cellule vide si F ou G est vide.",
          "Cliquez dans J6 : « ÉCART SIGNIFICATIF » si l'écart en valeur absolue dépasse 2 % de la quantité attendue ; « CONFORME » si l'écart est nul ; « À VÉRIFIER » si l'écart est non nul mais dans la tolérance de 2 %.",
          "Les formules s'affichent dans la langue de votre Excel ; leur logique ne change pas. Le seuil de 2 % est rappelé dans la cellule A2.",
        ],
      },
      {
        title: 'Lisez l\'onglet Synthese-Ecarts',
        actions: [
          "Ouvrez l'onglet : B6 compte les lignes CONFORME, B7 les À VÉRIFIER, B8 les ÉCART SIGNIFICATIF, B9 additionne les écarts de toutes les lignes.",
          "B5 compte la colonne A, déjà numérotée de 1 à 20 : elle affichera toujours 20. Le nombre de lignes réellement contrôlées est B6 + B7 + B8.",
          "N'interprétez jamais B9 : il additionne des sacs et des cartons, et les excédents annulent les manquants.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Attendu', 'Reçu', 'Écart (I)', '% de l\'attendu', 'Statut (J)'],
      rows: [
        ['1 Farine', '70', '69', '−1', '1,4 %', 'À VÉRIFIER'],
        ['2 Haricots', '12', '12', '0', '0 %', 'CONFORME'],
        ['3 Huile', '20', '18', '−2', '10 %', 'ÉCART SIGNIFICATIF'],
        ['4 Sel', '4', '4', '0', '0 %', 'CONFORME'],
      ],
    },
    result: "Synthèse du 14/04 : B6 = 2, B7 = 1, B8 = 1, B9 = −3. Mais le sel « CONFORME » en quantité sera rejeté à l'étape suivante pour sa qualité.",
    pitfall: "Conclure « CONFORME donc accepté ». Le statut ignore l'étiquetage, l'état des emballages et la péremption : la décision combine toujours le statut et le contrôle qualité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 8',
    title: 'Décider ligne par ligne : accepté, partiel ou rejeté',
    intro: "La décision se prend pour chaque ligne, jamais pour la livraison entière, en croisant trois éléments : le statut de quantité, le contrôle qualité et la spécification de la PO. Les trois libellés exacts sont rappelés en ligne 26 du template.",
    steps: [
      {
        title: 'Appliquez les quatre questions dans cet ordre',
        actions: [
          "Q1. Un défaut grave touche-t-il toute la ligne (spécification non respectée, produit impropre, péremption incompatible avec la consommation, article non commandé) ? Oui : « Rejeté totalement ».",
          "Q2. Le défaut touche-t-il seulement une partie identifiée (unités endommagées, reste sain à l'échantillon) ? Oui : « Accepté partiellement », avec quantité acceptée, quantité rejetée et motif.",
          "Q3. Le statut est-il « ÉCART SIGNIFICATIF » sans défaut de qualité ? Oui : « Accepté partiellement » à la quantité reçue, le manquant est noté comme non livré et réclamé.",
          "Q4. Le statut est « CONFORME » ou « À VÉRIFIER » et la qualité est bonne ? Oui : « Accepté intégralement » ; si l'écart est non nul mais toléré, notez-le en remarque et payez la quantité reçue.",
        ],
      },
      {
        title: 'Vérifiez avant de décider un écart « À VÉRIFIER »',
        actions: [
          "Recomptez la ligne et cherchez une explication matérielle (sac éventré, carton ouvert au déchargement).",
          "Un écart sous la tolérance ne dispense pas de le noter : il est classé toléré, il n'est pas effacé.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — décisions du 14/04',
      lines: [
        "Ligne 1 Farine : Accepté intégralement dans la tolérance : 69 sacs (écart −1 noté, 1,4 %).",
        "Ligne 2 Haricots : Accepté intégralement : 12 sacs.",
        "Ligne 3 Huile : Accepté partiellement : 17 cartons acceptés, 1 rejeté (fuite), 2 non livrés.",
        "Ligne 4 Sel : Rejeté totalement : 4 sacs, spécification non respectée (sel non iodé).",
      ],
    },
    result: "Chaque ligne porte une des trois décisions, avec les quantités acceptée, rejetée et non livrée.",
    pitfall: "Accepter « pour ne pas bloquer le programme » une marchandise non conforme : l'urgence est une raison de réclamer vite, pas de renoncer à rejeter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 7 sur 8',
    title: 'Documenter le rejet avec la rigueur d\'un incident majeur',
    intro: "Un rejet, même partiel, se documente à l'identique d'un incident majeur : une décision non justifiée par écrit, avec seulement une quantité barrée à la main, est une source de litige garantie et un risque de non-remboursement.",
    steps: [
      {
        title: 'Rédigez les colonnes K et L',
        actions: [
          "K « Remarque » : le constat chiffré (compté, contrôlé, défauts, photos, lot, péremption).",
          "L « Décision » : le libellé exact du template, suivi des quantités acceptée, rejetée et non livrée, et du motif précis (dommage constaté, quantité manquante, péremption trop proche, étiquetage non conforme).",
          "Modèle : « [libellé] : X acceptés, Y rejetés, Z non livrés — lot — motif — preuves ».",
        ],
      },
      {
        title: 'Constituez les preuves',
        actions: [
          "Photos numérotées avec étiquette de lot visible, enregistrées dans le dossier du GRN.",
          "Constat contradictoire : demandez au chauffeur de signer le GRN (voir étape suivante) ; en cas de refus, notez l'heure et le nom d'un témoin.",
        ],
      },
      {
        title: 'Isolez la marchandise rejetée',
        actions: [
          "Déplacez-la en zone D (quarantaine), posez une étiquette rouge « REJETÉ — NE PAS UTILISER — GRN-GOG-2026-014 — date ».",
          "Ne la retournez et ne la détruisez qu'après accord écrit du fournisseur (sauf danger sanitaire immédiat, à documenter).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — colonnes K et L pour les lignes 3 et 4',
      lines: [
        "L3 K : « 18 comptés sur 20. 1 carton imbibé, 3 bouteilles fuient (P-03, P-04). 6 autres ouverts, RAS. Lot HE-044, péremption 28/02/2027. »",
        "L3 L : « Accepté partiellement : 17 acceptés, 1 rejeté (fuite), 2 non livrés. »",
        "L4 K : « 4 sacs étiquetés « sel de cuisine », sans mention iodé (P-05, P-06). PO : sel iodé. Lot SEL-0326. »",
        "L4 L : « Rejeté totalement : 4 sacs, spécification non respectée. Quarantaine zone D. »",
      ],
    },
    result: "Un tiers qui ouvre le GRN dans un an comprend ce qui a été refusé, pourquoi et où est la preuve, sans vous demander.",
    pitfall: "Écrire « carton abîmé, refusé » sans quantité, sans lot, sans photo ni signature : ce n'est pas une documentation, c'est un litige en attente.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 8 sur 8',
    title: 'Signer le GRN et le bon de livraison du transporteur, en dernier',
    intro: "La signature est la dernière action de la réception, jamais la première. Elle engage votre organisation sur des chiffres que vous venez de vérifier. Une signature donnée « pour aller plus vite » engage sur des chiffres que vous n'avez pas contrôlés.",
    steps: [
      {
        title: 'Faites signer le bloc VALIDATION du GRN',
        actions: [
          "Colonne gauche « Acheté / Livré par » (lignes 29 à 32) : le chauffeur ou le représentant du fournisseur inscrit nom, signature et date ; il reconnaît le constat.",
          "Colonne droite « Vérifié / Reçu par » : Achol D. inscrit nom, signature et date. Vous contre-signez dès qu'une ligne est en « ÉCART SIGNIFICATIF » ou rejetée.",
          "Si le chauffeur refuse, écrivez « signature refusée à 11 h 40 » et le nom d'un témoin.",
        ],
      },
      {
        title: 'Annotez le bon de livraison du transporteur',
        actions: [
          "Avant de signer, écrivez dessus : « Reçu sous réserves — voir GRN-GOG-2026-014 ».",
          "Photographiez le bon annoté et rangez la photo avec le GRN.",
        ],
      },
      {
        title: 'Classez et libérez le camion',
        actions: [
          "Exportez Reception-CQ et Synthese-Ecarts en PDF, agrafez PO, packing list, bon annoté et photos.",
          "Classez le tout dans le dossier d'achat KS-2026-0058, à la pièce « réception ».",
        ],
      },
    ],
    result: "GRN signé par les deux parties, bon de livraison annoté, dossier classé : le camion repart à 12 h 05, deux heures après son arrivée, et vous avez la preuve de tout.",
    tip: "Annoncez la règle au fournisseur dans la PO elle-même : « La réception se fait sous réserve de contrôle de quantité et de qualité ». Les chauffeurs acceptent mieux d'attendre quand c'est écrit.",
  },
  {
    type: 'checklist',
    title: 'Avant de signer un bon de livraison : le contrôle des 5 points',
    items: [
      "J'ai comparé la PO, le packing list et le comptage physique réel, ligne par ligne.",
      "J'ai fait le contrôle qualité (emballages, étiquetage, péremption résiduelle, échantillonnage) dans une passe distincte du comptage.",
      "J'ai reporté le numéro de lot et la péremption de chaque article périssable ou à risque de rappel.",
      "Tout écart et tout rejet sont écrits dans le GRN, avec quantité, lot, motif et photos.",
      "Je n'ai signé aucun document du transporteur avant d'avoir terminé tout ce qui précède, et j'ai écrit « reçu sous réserves » quand il y avait un écart.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — COMMUNIQUER AU FOURNISSEUR
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 3',
    title: 'Constituer le dossier de réclamation, le jour même',
    intro: "Toute décision de rejet ou d'acceptation partielle doit être transmise au fournisseur par écrit et rapidement : c'est ce qui permet un remboursement, un remplacement ou un avoir, et ce qui évite que la même non-conformité se répète à la commande suivante. Entrée : le GRN signé du 14 avril.",
    steps: [
      {
        title: 'Rassemblez les pièces',
        actions: [
          "Le GRN signé (Reception-CQ et Synthese-Ecarts), au format PDF.",
          "Les photos numérotées, la PO, le packing list et le bon de livraison annoté.",
          "La facture FAC-2026-0388 pour y repérer les lignes contestées.",
        ],
      },
      {
        title: 'Vérifiez les conditions de réclamation',
        actions: [
          "Relisez les conditions de la PO : délai de réclamation, mode de remplacement, avoir, retour.",
          "Fixez ce que vous demandez par ligne : remplacement de la marchandise manquante, remplacement de la marchandise rejetée, ou avoir.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Constat', 'Ce que Kerowa demande'],
      rows: [
        ['Huile enrichie', '2 cartons non livrés ; 1 carton rejeté (fuite)', 'Livrer 3 cartons conformes ou avoir de 90 EUR'],
        ['Sel', '4 sacs non conformes (non iodé)', 'Livrer 4 sacs de sel iodé ou avoir de 48 EUR'],
        ['Farine', '−1 sac, dans la tolérance de 2 %', 'Facturer 69 sacs'],
      ],
    },
    result: "Dossier complet et demande chiffrée par ligne : vous pouvez écrire sans rien chercher.",
    tip: "Envoyez la réclamation dans les 24 heures. Un fournisseur répond bien à un message précis envoyé le lendemain, et mal à un mail vague envoyé trois semaines plus tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 3',
    title: 'Rédiger le message de réclamation en cinq blocs',
    intro: "Un bon message tient en 5 à 8 lignes, cite les chiffres exacts du bon de réception, et se lit sans pièce jointe. Il suit cinq blocs : référence, constat chiffré, décision, demande, délai.",
    steps: [
      {
        title: 'Écrivez les cinq blocs',
        actions: [
          "Objet : PO, date de livraison, numéro de GRN.",
          "Constat : par ligne, quantité attendue, comptée, acceptée, rejetée, motif, avec renvoi aux photos.",
          "Décision : ce qui est accepté et ce qui est rejeté ; où est la marchandise rejetée.",
          "Demande : remplacement ou avoir, par ligne, avec la quantité.",
          "Délai : date limite de réponse (5 jours ouvrés) et conséquence sur le paiement : la facture sera réglée sur les quantités acceptées.",
        ],
      },
      {
        title: 'Relisez et envoyez',
        actions: [
          "Vérifiez que chaque chiffre figure dans le GRN signé : le message et le GRN doivent concorder.",
          "Envoyez par e-mail à l'adresse de contact de la PO, avec le GRN et les photos en pièces jointes, en copie le responsable finance.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — message envoyé le 14/04 à 16 h (8 lignes)',
      lines: [
        "Objet : PO KS-2026-0058 — livraison du 14/04/2026 — écarts et rejets (GRN-GOG-2026-014).",
        "Bonjour, lors de la réception du 14 avril à Gogrial, nous avons constaté trois points.",
        "1) Huile enrichie : 18 cartons livrés sur 20 commandés, dont 1 rejeté pour fuite (3 bouteilles, photos P-03 et P-04) ; 17 acceptés.",
        "2) Sel : 4 sacs étiquetés « sel de cuisine », sans mention iodé, alors que la PO exige du sel iodé ; rejetés, à votre disposition à Gogrial.",
        "3) Farine : 69 sacs sur 70, dans notre tolérance de 2 % ; facturée à 69.",
        "Nous demandons la livraison de 3 cartons d'huile enrichie et de 4 sacs de sel iodé conformes avant le 21/04, ou un avoir (90 + 48 = 138 EUR).",
        "La facture FAC-2026-0388 sera réglée sur les quantités acceptées. Merci de confirmer avant le 21/04.",
        "Cordialement, Supply Chain Manager, Kerowa Santé.",
      ],
    },
    result: "Un message de 8 lignes, chiffré, sans reproche, qui laisse au fournisseur le choix entre remplacement et avoir.",
    pitfall: "Écrire « la livraison était mauvaise » sans chiffres ni lot : le fournisseur répondra « envoyez des preuves » et le délai de réclamation sera dépassé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 3',
    title: 'Suivre la réclamation jusqu\'à la clôture',
    intro: "Une réclamation envoyée n'est pas une réclamation résolue. Sans suivi, le fournisseur ne répond pas, la facture est payée en totalité par habitude, et l'avoir n'arrive jamais.",
    steps: [
      {
        title: 'Ouvrez une ligne dans le registre des réclamations',
        actions: [
          "Créez une feuille « Réclamations » avec les colonnes : N° | Date d'envoi | Fournisseur | PO | GRN | Motif | Quantité / valeur | Demande | Échéance | Statut | Date de clôture.",
          "Saisissez une ligne par réclamation et passez le statut à « Envoyée ».",
        ],
      },
      {
        title: 'Relancez et bloquez le paiement',
        actions: [
          "J+3 : relancez par téléphone si aucun accusé de réception.",
          "J+7 : relancez par écrit en copie de la coordination ; à l'échéance, déclenchez l'escalade prévue au contrat.",
          "Informez Joseph K. : le paiement de FAC-2026-0388 se fait à 3 342 EUR, soit 3 512 EUR facturés moins 170 EUR contestés.",
        ],
      },
      {
        title: 'Clôturez et alimentez l\'évaluation fournisseur',
        actions: [
          "Passez le statut à « Clôturée » quand la marchandise de remplacement est réceptionnée par un nouveau GRN ou que l'avoir est reçu.",
          "Reportez l'incident (rejets, manquants, délai de réponse) dans la fiche d'évaluation du fournisseur : il pèsera sur la prochaine attribution.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — ligne du registre',
      lines: [
        "R-2026-009 | 14/04/2026 | Grossiste Wau | KS-2026-0058 | GRN-GOG-2026-014 | Huile −2 + 1 fuite ; sel non iodé | 3 cartons + 4 sacs (138 EUR) | Remplacement ou avoir | 21/04/2026 | Envoyée | —",
      ],
    },
    result: "Livrable L2 terminé : message envoyé, registre ouvert, paiement ajusté, échéances posées.",
    pitfall: "Payer la facture entière « pour ne pas fâcher le fournisseur » avant de recevoir le remplacement : vous perdez votre seul levier.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — ENREGISTRER LA RÉCEPTION DANS L'ERP
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 3',
    title: 'Préparer la saisie ERP à partir du GRN signé',
    intro: "L'ERP n'est fiable que si chaque mouvement physique y est reporté au moment où il a lieu. Ce module ne forme pas sur un logiciel précis (le module 08 y revient) : la logique est la même partout. On saisit les quantités effectivement acceptées, pas celles de la PO.",
    steps: [
      {
        title: 'Extrayez du GRN le tableau de saisie',
        actions: [
          "Ouvrez le GRN signé et listez, par ligne et par lot : code article, quantité acceptée, quantité rejetée en quarantaine, péremption.",
          "Ignorez la colonne « Qté attendue » : c'est une donnée d'achat, pas un mouvement de stock.",
        ],
      },
      {
        title: 'Séparez stock disponible et marchandise bloquée',
        actions: [
          "La quantité acceptée entre en stock disponible dans l'emplacement de la zone concernée.",
          "La quantité rejetée, tant qu'elle est physiquement dans l'entrepôt, est placée dans l'emplacement « Quarantaine » (ou n'est pas saisie du tout, selon votre ERP) : jamais en stock disponible.",
        ],
      },
    ],
    table: {
      columns: ['Code', 'Lot', 'Acceptée → stock disponible', 'Rejetée → quarantaine', 'Non livrée'],
      rows: [
        ['VIV-001 Farine', 'MZ-0326-B', '69', '0', '1 (toléré)'],
        ['VIV-002 Haricots', 'H-0326', '12', '0', '0'],
        ['VIV-003 Huile', 'HE-044', '17', '1', '2'],
        ['VIV-004 Sel', 'SEL-0326', '0', '4', '0'],
      ],
    },
    result: "Un tableau de saisie issu du GRN : aucune ligne n'est saisie « de mémoire » ni à partir de la PO.",
    pitfall: "Saisir les quantités de la PO « en attendant le contrôle » : l'ERP annonce du stock qui n'existe pas, et l'écart se retrouvera à l'inventaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 3',
    title: 'Saisir la réception le jour même, avec la référence du GRN',
    intro: "C'est l'étape que l'on néglige sous prétexte que « le document papier suffit ». Sans elle, l'écart entre la PO et la quantité réellement acceptée n'existe nulle part de façon exploitable.",
    steps: [
      {
        title: 'Saisissez ligne par ligne',
        actions: [
          "Créez la réception contre la PO KS-2026-0058, mais saisissez les quantités acceptées du tableau de l'étape précédente.",
          "Renseignez le lot et la péremption quand l'ERP le permet ; sinon, ajoutez-les dans la zone de texte de la ligne.",
          "Dans le champ de référence, inscrivez le numéro du GRN (GRN-GOG-2026-014) : c'est le lien entre le document papier et l'écriture.",
        ],
      },
      {
        title: 'Faites valider avant de valider',
        actions: [
          "Joseph K. saisit ; Achol D. vérifie en face du GRN ; vous contrôlez par sondage (une ligne sur deux).",
          "Notez dans le GRN la date et le nom de la personne qui a saisi.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — écritures ERP du 14/04',
      lines: [
        "Entrée VIV-001 | lot MZ-0326-B | +69 sacs | Zone A | réf. GRN-GOG-2026-014",
        "Entrée VIV-002 | lot H-0326 | +12 sacs | Zone A | réf. GRN-GOG-2026-014",
        "Entrée VIV-003 | lot HE-044 | +17 cartons | Zone A | réf. GRN-GOG-2026-014 ; −1 carton en quarantaine",
        "VIV-004 sel : aucune entrée, 4 sacs en quarantaine zone D",
      ],
    },
    result: "Chaque ligne de stock ERP renvoie à un GRN, et chaque GRN a une date de saisie : le même jour que la réception.",
    pitfall: "Saisir une semaine plus tard « quand on aura le temps » : entre-temps des sorties ont eu lieu sur un stock que l'ERP ne connaît pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 3',
    title: 'Rapprocher PO, GRN et facture avant tout paiement',
    intro: "Le rapprochement à trois (three-way match) est le dernier verrou : la facture ne se paie que sur la quantité acceptée au GRN, au prix de la PO. Les champs N° de facture et Date de facture de l'en-tête du GRN servent précisément à ce contrôle.",
    steps: [
      {
        title: 'Construisez le tableau de rapprochement',
        actions: [
          "Colonnes : Ligne | Qté PO | Prix PO | Qté GRN acceptée | Qté facturée | Montant facturé | Montant à payer | Retenue.",
          "Calculez le montant à payer : quantité acceptée × prix de la PO ; la retenue est la différence avec le montant facturé.",
        ],
      },
      {
        title: 'Transmettez l\'ordre de paiement',
        actions: [
          "Envoyez à Joseph K. le tableau, avec le GRN signé : « payer 3 342 EUR, retenir 170 EUR jusqu'à clôture de la réclamation R-2026-009 ».",
          "Conservez le tableau dans le dossier d'achat, à côté du GRN.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Prix PO (EUR)', 'Facturé', 'Accepté', 'À payer (EUR)', 'Retenue (EUR)'],
      rows: [
        ['Farine (sac 50 kg)', '32', '70', '69', '2 208', '32'],
        ['Haricots (sac 50 kg)', '52', '12', '12', '624', '0'],
        ['Huile (carton 12 × 1 L)', '30', '20', '17', '510', '90'],
        ['Sel iodé (sac 25 kg)', '12', '4', '0', '0', '48'],
        ['Total', '', '', '', '3 342', '170'],
      ],
    },
    result: "Livrable L3 terminé : écritures ERP référencées au GRN et ordre de paiement ramené de 3 512 à 3 342 EUR.",
    tip: "Faites de cette règle une procédure écrite : « aucune facture n'est payée sans GRN signé ». Elle protège l'équipe finance autant que la mission.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — STOCKAGE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Zoner l\'entrepôt et dessiner le plan',
    intro: "Une marchandise bien reçue qui est mal rangée redevient introuvable ou périmée. Entrées : le plan des 300 m² du hangar de Gogrial et la liste des familles de produits (vivres, nutrition thérapeutique, santé, rejets, carburant). Objectif : une zone par famille, avec des règles de séparation écrites.",
    steps: [
      {
        title: 'Dessinez le plan et attribuez les zones',
        actions: [
          "Mesurez le hangar et dessinez un plan à l'échelle, avec la porte de réception et la porte d'expédition.",
          "Attribuez une lettre à chaque zone : une zone par famille, pas de mélange de familles sur une même palette.",
          "Réservez des allées de circulation d'au moins 1 m et un passage libre vers chaque sortie de secours.",
        ],
      },
      {
        title: 'Écrivez les règles de séparation',
        actions: [
          "Produits de santé : local fermé à clé, ventilé, accès nominatif.",
          "Marchandise rejetée ou suspecte : cage de quarantaine séparée, étiquetée.",
          "Carburant : jamais dans le hangar ; cuve extérieure avec bac de rétention, à distance des vivres et des médicaments.",
        ],
      },
    ],
    table: {
      columns: ['Zone', 'Usage', 'Surface', 'Règle principale'],
      rows: [
        ['Réception', 'Déchargement, comptage, contrôle qualité', '20 m²', 'Rien n\'entre en stock sans GRN signé'],
        ['A', 'Vivres (farine, haricots, huile, sel)', '110 m²', 'Palettes, FEFO, à l\'abri de l\'humidité'],
        ['B', 'Nutrition thérapeutique (RUTF)', '50 m²', 'À l\'abri du soleil et de la chaleur, par lot'],
        ['C', 'Produits de santé', '30 m²', 'Local fermé, thermomètre min/max, accès nominatif'],
        ['D', 'Quarantaine (rejets, bloqués)', '10 m²', 'Cage fermée, étiquette rouge, registre'],
        ['Expédition', 'Préparation des sorties (DN)', '20 m²', 'Aucun départ sans DN signé'],
        ['Circulation', 'Allées et dégagements', '60 m²', 'Toujours libres'],
      ],
    },
    result: "Un plan de l'entrepôt affiché à l'entrée, avec 7 zones et une règle principale par zone. Livrable L4, première partie.",
    pitfall: "Garder la marchandise rejetée « un moment » dans l'allée de la zone A : elle se remélange au stock et finit distribuée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Coder les emplacements et ranger la marchandise reçue',
    intro: "Un emplacement codé permet à n'importe quel magasinier de trouver un article, et à l'ERP de savoir où il est. Le rangement suit trois règles : surélevé, espacé, accessible selon la péremption.",
    steps: [
      {
        title: 'Codez les emplacements',
        actions: [
          "Format : Zone-Allée-Rang-Niveau, par exemple A-04-2-1 (zone A, allée 4, rang 2, niveau 1).",
          "Collez le code au sol ou sur le rayonnage, lisible depuis l'allée.",
          "Reportez la liste des emplacements dans l'ERP ou dans la fiche de stock.",
        ],
      },
      {
        title: 'Rangez selon les trois règles',
        actions: [
          "Surélevé : sur palette, jamais à même le sol.",
          "Espacé : au moins 30 cm des murs, pour la ventilation et le passage d'inspection.",
          "Accessible : le lot qui expire en premier est le plus facile d'accès ; hauteur de pile conforme à la mention du fabricant, à défaut pas plus de 8 sacs de 50 kg superposés.",
        ],
      },
      {
        title: 'Étiquetez chaque palette',
        actions: [
          "Étiquette de palette : article, lot, péremption, GRN, quantité, date de réception.",
          "Une étiquette par lot : deux lots d'un même article sur une palette sont interdits.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — rangement du GRN-GOG-2026-014 le 14/04 après-midi',
      lines: [
        "Farine MZ-0326-B : 69 sacs, emplacement A-01-1-1, péremption 30/09/2026, étiquette posée.",
        "Haricots H-0326 : 12 sacs, emplacement A-02-1-1.",
        "Huile HE-044 : 17 cartons, emplacement A-04-2-1.",
        "Sel SEL-0326 : 4 sacs, emplacement D-01 (quarantaine), étiquette rouge.",
      ],
    },
    result: "Chaque palette a un emplacement, une étiquette et une ligne correspondante dans la fiche de stock ou l'ERP.",
    tip: "Faites des photos du rangement le jour de la réception : elles servent aussi de preuve de bon stockage en cas de perte ultérieure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Surveiller les conditions de conservation',
    intro: "À Gogrial, la chaleur et l'humidité de la saison des pluies sont les ennemis des produits nutritionnels et pharmaceutiques. Respectez la mention d'étiquette de chaque produit (souvent « conserver à moins de 25 °C », « à l'abri de l'humidité et de la lumière ») et surveillez par un relevé écrit.",
    steps: [
      {
        title: 'Installez les relevés',
        actions: [
          "Posez un thermomètre à minimum et maximum dans la zone C et dans la zone B ; relevez-le deux fois par jour (7 h 30 et 15 h) sur une feuille affichée.",
          "Si la température dépasse la mention d'étiquette, prévenez Peter A. et vous, le jour même, et notez l'action (ventilation, ombrage, déplacement).",
        ],
      },
      {
        title: 'Organisez les rondes de contrôle',
        actions: [
          "Chaque semaine, ronde de 30 minutes : humidité au sol, fuites de toit, traces de rongeurs et d'insectes, extincteurs, sorties dégagées.",
          "Notez les anomalies dans un cahier de ronde daté et signé ; traitez-les sous 48 h.",
        ],
      },
      {
        title: 'Contrôlez l\'accès',
        actions: [
          "Deux clés pour la zone C, l'une chez Achol D., l'autre chez vous.",
          "Registre des visiteurs à la porte d'entrée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — extrait de la feuille de relevé, zone C',
      lines: [
        "20/04 | 7 h 30 : min 24 °C, max 29 °C — ouverture des persiennes ; 15 h : max 31 °C — dépassement de la mention « moins de 25 °C » ; action : ventilateur et rideau d'ombrage posés, Dr Samuel T. prévenu.",
        "21/04 | 7 h 30 : min 23 °C, max 26 °C — RAS.",
      ],
    },
    result: "Un relevé daté et signé par jour, avec l'action engagée à chaque dépassement : la preuve de bon stockage.",
    pitfall: "Relever la température pour la forme et ne jamais agir sur un dépassement : en audit, un relevé sans action pèse plus lourd que pas de relevé du tout.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Tenir les fiches de stock à jour',
    intro: "La fiche de stock est le registre quotidien de la magasinière : un article par fiche, un lot par fiche. Elle ne remplace pas l'ERP : elle le contrôle. Le module ne fournit pas de template pour elle ; voici la structure simple à créer dans Excel ou sur papier.",
    steps: [
      {
        title: 'Créez la fiche',
        actions: [
          "En en-tête : code article, description, unité, lot, péremption, emplacement.",
          "Colonnes : Date | Référence (GRN ou DN) | De / Vers | Entrée | Sortie | Solde | Visa.",
          "Une ligne par mouvement, jamais une ligne « mouvements de la semaine ».",
        ],
      },
      {
        title: 'Mettez à jour et contrôlez',
        actions: [
          "Après chaque mouvement, recalculez le solde immédiatement et visez.",
          "Chaque vendredi, comptez 3 articles au hasard et comparez à la fiche et à l'ERP : c'est un comptage tournant minimal.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — fiche du lot HE-044 (huile enrichie)',
      lines: [
        "14/04 | GRN-GOG-2026-014 | Grossiste Wau | entrée 17 | solde 17 | AD",
        "20/04 | DN-GOG-2026-029 | Cantine du centre | sortie 2 | solde 15 | AD",
      ],
    },
    result: "Livrable L4 terminé : plan de l'entrepôt affiché et fiches de stock à jour, avec contrôle hebdomadaire.",
    pitfall: "Remplir la fiche de stock en fin de semaine, de mémoire : elle ne peut plus contrôler l'ERP, elle le recopie.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — SUIVI PAR LOT ET PÉREMPTION (FEFO)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Relever lot et péremption à la réception, ligne par ligne',
    intro: "Pour tout article périssable ou susceptible de rappel (nutrition, pharmacie, matériel médical, huile, farine), le numéro de lot se reporte dans le GRN, colonne E « N° de lot », dès la réception. C'est ce lien, créé à l'entrée, qui permettra de répondre en quelques minutes à « où sont passés les produits du lot X ? ».",
    steps: [
      {
        title: 'Appliquez les règles de relevé',
        actions: [
          "Une ligne du GRN par lot : si un même article arrive en deux lots, ouvrez deux lignes.",
          "Relevez la date sur l'étiquette au format JJ/MM/AAAA et écrivez-la en colonne K avec la durée de vie résiduelle (« péremption 30/06/2026, 10 semaines »).",
          "Lot illisible ou absent : mettez la ligne en attente de décision en quarantaine et signalez-le au fournisseur.",
        ],
      },
      {
        title: 'Vérifiez la cohérence avec les documents',
        actions: [
          "Comparez le lot de l'étiquette au lot du packing list ; en cas de différence, corrigez E et notez-le.",
          "Rapprochez la péremption de la durée de consommation prévue avec le programme.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — une PO à lot unique, un packing list à deux lots (21/04)',
      lines: [
        "La PO KS-2026-0072 ne mentionne pas de lot. Le packing list annonce deux lots de RUTF.",
        "Ligne 1 du GRN : RUTF | lot N2026-118 | 450 attendus.",
        "Ligne 2 du GRN : RUTF | lot N2026-121 | 150 attendus | péremption 30/06/2026 (10 semaines).",
      ],
    },
    result: "Chaque lot figure sur sa propre ligne de GRN, avec sa péremption : le registre des lots pourra se construire sans retourner à l'entrepôt.",
    pitfall: "Un GRN qui ne mentionne pas les lots rend impossible tout rappel de produit ciblé : vous ne saurez ni où est le stock concerné ni s'il a été distribué.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Construire le registre des lots dans Excel',
    intro: "Le registre des lots est la table qui relie chaque lot au GRN qui l'a fait entrer et à tous les DN qui l'ont fait sortir. Le module ne fournit pas de template pour lui : vous le construisez une fois, en 20 minutes, et il sert à chaque rappel, inventaire et rapport.",
    steps: [
      {
        title: 'Créez la table des lots',
        actions: [
          "Nouvelle feuille « Lots », en-têtes en ligne 1 : Code article | Désignation | N° de lot | Réf GRN | Date réception | Péremption | Qté acceptée | Qté sortie cumulée | Stock du lot | Jours restants | Conso hebdo | Couverture sem | Alerte | Emplacement | Statut.",
          "Insertion > Tableau > cochez « Mon tableau comporte des en-têtes » ; nommez-le « tblLots ».",
          "Colonne Statut : Données > Validation des données > Liste : Disponible;Quarantaine;Bloqué;Périmé.",
        ],
      },
      {
        title: 'Créez la table des sorties qui l\'alimente',
        actions: [
          "Nouvelle feuille « Sorties », table « tblSorties » : Date | DN | Code article | N° de lot | Qté | Destination.",
          "En H2 « Qté sortie cumulée » : =SOMME.SI.ENS(tblSorties[Qté];tblSorties[Code article];[@[Code article]];tblSorties[N° de lot];[@[N° de lot]]).",
          "En I2 « Stock du lot » : =[@[Qté acceptée]]-[@[Qté sortie cumulée]].",
        ],
      },
      {
        title: 'Saisissez chaque lot reçu',
        actions: [
          "Une ligne par ligne de GRN, avec la quantité acceptée (pas la quantité de la PO) et l'emplacement.",
          "Mettez le statut « Quarantaine » pour les lots rejetés, avec une quantité acceptée de 0 et la quantité en remarque.",
        ],
      },
    ],
    result: "Une table « Lots » liée à une table « Sorties » : le stock par lot se calcule seul à chaque sortie saisie.",
    pitfall: "Saisir le stock du lot à la main : le registre ne détectera plus rien. La colonne I doit toujours être une formule.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Calculer la durée de vie résiduelle, la couverture et les alertes',
    intro: "Une date de péremption seule ne dit rien : ce qui compte est la comparaison entre le temps restant et le temps nécessaire pour consommer le lot. La consommation hebdomadaire vient du programme (Dr Rebecca N. pour la nutrition, Dr Samuel T. pour la pharmacie).",
    steps: [
      {
        title: 'Ajoutez les formules',
        actions: [
          "Jours restants : =[@Péremption]-AUJOURDHUI().",
          "Couverture sem : =SIERREUR([@[Stock du lot]]/[@[Conso hebdo]];\"\") — le nombre de semaines nécessaires pour écouler le lot au rythme actuel.",
          "Alerte : =SI([@[Jours restants]]<=0;\"PÉRIMÉ\";SI([@[Jours restants]]/7<[@[Couverture sem]]+4;\"À ÉCOULER EN PRIORITÉ\";SI([@[Jours restants]]<=90;\"SURVEILLER\";\"OK\"))).",
        ],
      },
      {
        title: 'Colorez et partagez les seuils',
        actions: [
          "Mise en forme conditionnelle : rouge pour PÉRIMÉ et À ÉCOULER EN PRIORITÉ, orange pour SURVEILLER.",
          "La marge de 4 semaines est la règle de l'exemple Kerowa : écrivez la vôtre dans votre procédure, validée avec le programme.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Lot', 'Péremption', 'Stock', 'Jours restants', 'Conso hebdo', 'Couverture', 'Alerte'],
      rows: [
        ['RUTF (cartons)', 'N2026-097', '31/05/2026', '30', '40', '90', '0,3 sem', 'SURVEILLER'],
        ['RUTF (cartons)', 'N2026-121', '30/06/2026', '118', '70', '90', '1,3 sem', 'SURVEILLER'],
        ['RUTF (cartons)', 'N2026-118', '30/11/2026', '450', '223', '90', '5,0 sem', 'OK'],
        ['Farine (sacs)', 'MZ-0326-B', '30/09/2026', '52', '162', '11', '4,7 sem', 'OK'],
      ],
    },
    result: "À la date du 21/04, aucun lot n'est en alerte rouge ; les lots N2026-097 et N2026-121 sont à surveiller et à sortir en priorité (FEFO). Livrable L5.",
    tip: "Une alerte qui vire au rouge ne sert à rien si personne ne la lit : ajoutez-la à la routine hebdomadaire du vendredi et à la ronde de l'entrepôt.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Appliquer FEFO à chaque sortie',
    intro: "FEFO ne se décide pas au moment de charger le camion : il se prépare. Avant chaque sortie, la magasinière sort une liste de prélèvement triée par date de péremption croissante, et le lot servi est inscrit sur le bon de sortie.",
    steps: [
      {
        title: 'Établissez la liste de prélèvement',
        actions: [
          "Filtrez « Lots » sur le code article demandé et le statut Disponible.",
          "Triez par Péremption, de la plus proche à la plus lointaine.",
          "Servez la quantité demandée dans cet ordre, du premier lot jusqu'à son épuisement, puis du suivant.",
        ],
      },
      {
        title: 'Contrôlez au prélèvement et notez',
        actions: [
          "Allez à l'emplacement indiqué et vérifiez l'étiquette de palette : lot et péremption.",
          "Écrivez en remarque du bon de sortie : lot, péremption, quantité par lot.",
          "Une dérogation à FEFO (exigence du programme, lot refusé par un site) demande l'accord écrit du SCM et doit être inscrite au bon de sortie.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — demande de 40 cartons de RUTF le 22/04',
      lines: [
        "Liste de prélèvement : N2026-097 (31/05/2026) 30 cartons, puis N2026-121 (30/06/2026) 10 cartons sur 118.",
        "Le lot N2026-118 (30/11/2026) n'est pas touché.",
        "Remarque du DN : « 30 cartons lot N2026-097, 10 cartons lot N2026-121 ».",
      ],
    },
    result: "Chaque sortie est servie dans l'ordre de péremption, et le lot servi est écrit sur le DN : la traçabilité aval est assurée.",
    pitfall: "Servir « ce qui est devant » parce que c'est plus facile d'accès : le lot qui expire le plus tôt est le plus facile d'accès par conception, sinon la règle est inutile.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Traiter les quasi-périmés et les périmés',
    intro: "Une péremption dépassée n'est pas un oubli, c'est une perte financière et un risque sanitaire. Les alertes du registre déclenchent des actions à dates fixes, et un périmé est toujours détruit avec un procès-verbal.",
    steps: [
      {
        title: 'Agissez selon le délai restant',
        actions: [
          "90 jours : alerte SURVEILLER, mise à jour hebdomadaire de la couverture.",
          "60 jours : plan d'écoulement avec le programme (ajuster les rations, orienter les sorties vers les sites à forte consommation).",
          "30 jours : alerte rouge, proposition de transfert vers un partenaire ou une autorité sanitaire, avec accord écrit du prescripteur.",
        ],
      },
      {
        title: 'Bloquez et détruisez un périmé',
        actions: [
          "Dès le lendemain de la date : statut « Périmé » dans le registre, déplacement en zone D, blocage dans l'ERP.",
          "Établissez un procès-verbal de destruction daté, avec lot, quantité, méthode, photos, signé par vous, Peter A. et un témoin extérieur au stock.",
          "Passez l'écriture d'ajustement dans l'ERP avec le numéro du PV, et informez le bailleur dans le rapport si le produit a été acheté sur ses fonds.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — plan d\'écoulement du lot N2026-121 (péremption 30/06/2026)',
      lines: [
        "Stock 118 cartons à la réception ; consommation du centre 90 cartons par semaine ; sortie FEFO prioritaire ; aucune action de transfert nécessaire.",
        "Point hebdomadaire jusqu'à épuisement ; si du stock subsiste au 02/06 (30 jours avant la date), proposer le solde à un partenaire nutrition via le point focal du Logistics Cluster.",
      ],
    },
    result: "Aucun lot ne périme sans qu'une action datée ait été décidée 90, 60 et 30 jours avant, et tout périmé détruit a un PV.",
    pitfall: "Distribuer un produit périmé « parce qu'il est encore bon » ou le jeter sans PV : le premier est une faute grave, le second une perte non justifiable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Répondre à un rappel de lot en dix minutes',
    intro: "Le test de votre traçabilité est le jour où un fournisseur signale un défaut sur une fabrication précise. La chaîne à remonter : GRN → registre des lots → DN → destinataires. Si chaque lien existe, la réponse prend dix minutes.",
    steps: [
      {
        title: 'Bloquez le lot',
        actions: [
          "Passez le statut du lot à « Bloqué » dans le registre et dans l'ERP.",
          "Étiquetez physiquement les palettes concernées « BLOQUÉ — NE PAS SERVIR » et déplacez-les en zone D.",
        ],
      },
      {
        title: 'Retrouvez où le lot est allé',
        actions: [
          "Dans « Lots » : quantité reçue, GRN d'origine, stock restant.",
          "Dans « Sorties » : filtrez sur le lot pour lister tous les DN, les destinations et les quantités.",
          "Contactez chaque destinataire pour suspendre la distribution et retirer le solde.",
        ],
      },
      {
        title: 'Répondez au fournisseur et documentez',
        actions: [
          "Envoyez les chiffres exacts : reçu, distribué, bloqué en stock.",
          "Conservez un rapport de rappel : date, chronologie, personnes contactées, décision finale.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — rappel du lot d\'huile HE-044, message du fournisseur du 24/04',
      lines: [
        "Registre : HE-044, GRN-GOG-2026-014, 17 cartons reçus le 14/04, emplacement A-04-2-1.",
        "Sorties : DN-GOG-2026-029 du 20/04, 2 cartons vers la cantine du centre ; aucune autre sortie.",
        "Stock restant : 15 cartons, bloqués le 24/04 à 9 h 10 et déplacés en zone D ; la cantine est priée de suspendre l'usage des 2 cartons livrés.",
        "Réponse au fournisseur à 9 h 25 : 17 reçus, 2 distribués à la cantine, 15 bloqués.",
      ],
    },
    result: "Livrable L5 terminé : registre des lots complet, avec capacité prouvée de répondre à un rappel en moins de quinze minutes.",
    pitfall: "Découvrir au moment du rappel que le lot n'a pas été noté sur les DN : vous ne saurez jamais où les 2 cartons de la cantine sont allés.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — BON DE SORTIE DE L'ENTREPÔT (DN)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Vérifier la demande interne avant de préparer la sortie',
    intro: "Aucune marchandise ne sort sans demande interne approuvée (Internal Request, IR). Lundi 20 avril, la cantine du centre de stabilisation demande des vivres : avant de toucher à un sac, vous contrôlez la demande.",
    steps: [
      {
        title: 'Contrôlez les cinq éléments de l\'IR',
        actions: [
          "Qui demande, pour quel site, à quelle date ?",
          "Quels articles, quelles quantités, pour quel usage (ration de combien de personnes, sur combien de jours) ?",
          "Qui a approuvé, et a-t-il la délégation pour ce montant (règle de délégation du module 01) ?",
          "Le stock disponible couvre-t-il la demande ? Contrôlez la fiche de stock et l'ERP, pas seulement l'un des deux.",
          "La quantité demandée est-elle cohérente avec les consommations habituelles ?",
        ],
      },
      {
        title: 'Refusez ou renvoyez ce qui ne passe pas',
        actions: [
          "Demande non signée, quantité hors norme, stock insuffisant : renvoyez-la au demandeur avec une phrase de motif.",
          "Un accord oral de dernière minute ne suffit pas : demandez l'approbation écrite, même par e-mail ou message photographié.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — IR-2026-0115 du 20/04',
      lines: [
        "Demandeur : cuisinier-chef de la cantine du centre. Approuvée par : Dr Rebecca N. (responsable programme nutrition).",
        "Demande : farine 17 sacs, haricots 2 sacs, huile 3 cartons pour 10 jours, 180 accompagnants.",
        "Contrôle de cohérence : farine 180 × 10 j × 450 g = 810 kg, soit 17 sacs (850 kg) ; haricots 180 × 10 × 60 g = 108 kg, soit 2 sacs plus le reliquat de la cantine ; huile 180 × 10 × 30 g = 54 kg, soit environ 59 L : 3 cartons (36 L) car la cantine détient un reliquat.",
        "Stock disponible : farine 69 sacs, haricots 12, huile 17 : la demande est couverte et cohérente avec les rations Sphère.",
      ],
    },
    result: "Une IR complète, approuvée et cohérente avec le stock : la préparation de la sortie peut commencer.",
    pitfall: "Accepter une demande orale du cuisinier « parce qu'il est pressé » : en cas de manquant, personne n'a approuvé, personne n'est redevable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Remplir l\'en-tête du bon de sortie',
    intro: "Le template bons-de-sortie-entrepot-carburant.xlsx contient deux onglets. L'onglet « Bon de sortie entrepôt » reprend la structure d'un Delivery Note : cinq champs d'en-tête, un tableau de 20 lignes et quatre blocs de signature.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le template et enregistrez-le sous « DN-GOG-2026-029_2026-04-20.xlsx ».",
          "Placez-vous sur l'onglet « Bon de sortie entrepôt ».",
        ],
      },
      {
        title: 'Remplissez les cinq champs',
        actions: [
          "A3 « DN N° » : numéro suivant de la série.",
          "C3 « DN Date » : date réelle de la sortie.",
          "E3 « Point de stockage (origine) » : la zone d'où part la marchandise.",
          "A4 « Livrer à (destination) » : le site receveur, avec le nom de la personne qui réceptionnera.",
          "D4 « Référence demande interne (IR) » : le numéro de l'IR approuvée à l'étape précédente.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — en-tête du DN du 20/04',
      lines: [
        "DN N° : DN-GOG-2026-029 | DN Date : 20/04/2026 | Point de stockage (origine) : Entrepôt Gogrial — Zone A",
        "Livrer à (destination) : Cantine du centre de stabilisation, Gogrial — réceptionnaire : cuisinier-chef | Référence demande interne (IR) : IR-2026-0115",
      ],
    },
    result: "En-tête complet : le DN est relié à la demande qui l'a autorisé.",
    pitfall: "Laisser le champ IR vide « parce que la demande était urgente » : une sortie sans IR est une sortie non justifiable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Remplir les lignes du bon de sortie avec le lot servi',
    intro: "Le tableau comporte six colonnes : Num, Code article, Description article, Qté livrée, Unité, Remarque. Une ligne par article et par lot. La remarque porte le lot et la péremption, selon la liste de prélèvement FEFO.",
    steps: [
      {
        title: 'Saisissez ligne par ligne',
        actions: [
          "Num : 1, 2, 3… déjà numéroté ; une ligne par article et par lot servi.",
          "Code article et Description article : identiques à ceux du GRN et de l'ERP.",
          "Qté livrée et Unité : la quantité réellement chargée, comptée devant le receveur.",
          "Remarque : lot, péremption, observation (état, dérogation FEFO).",
        ],
      },
      {
        title: 'Verrouillez les lignes non utilisées',
        actions: [
          "Barrez les lignes restantes d'un trait diagonal, pour qu'aucun article ne puisse être ajouté après signature.",
          "Au-delà de 20 lignes, établissez un second DN : un DN = 20 lignes au maximum.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — lignes du DN-GOG-2026-029',
      lines: [
        "1 | VIV-001 | Farine de maïs, sac 50 kg | 17 | sac | Lot MZ-0326-B, péremption 30/09/2026",
        "2 | VIV-002 | Haricots secs, sac 50 kg | 2 | sac | Lot H-0326, péremption 31/12/2026",
        "3 | VIV-003 | Huile végétale enrichie vitamine A, carton 12 × 1 L | 2 | carton | Lot HE-044, péremption 28/02/2027 ; corrigé de 3 à 2 (place limitée à la cantine), paraphé AD",
        "4 à 20 : barrées.",
      ],
    },
    result: "Trois lignes servies avec lot et péremption, dix-sept lignes barrées : la sortie est totalement lisible.",
    pitfall: "Corriger une quantité à la main sans parapher et sans modifier l'ERP : l'écart se retrouve à l'inventaire et personne ne s'en souvient. Ici, cette correction de 3 à 2 deviendra un écart au chapitre inventaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Faire signer les quatre parties avant le départ du véhicule',
    intro: "Le bloc VALIDATION du DN comporte quatre blocs de trois lignes (Nom, Signature, Date) : Approuvé par, Responsable stock, Transporteur, Receveur. Aucune marchandise ne quitte l'entrepôt avant ces quatre signatures.",
    steps: [
      {
        title: 'Faites signer dans l\'ordre',
        actions: [
          "Approuvé par : la personne qui a approuvé l'IR (Dr Rebecca N.), signature à l'avance sur l'IR ou ici.",
          "Responsable stock : Achol D. signe après avoir chargé et compté devant le receveur.",
          "Transporteur : le chauffeur reconnaît avoir pris en charge les quantités du DN.",
          "Receveur : la personne qui réceptionne à destination signe à l'arrivée, après avoir compté.",
        ],
      },
      {
        title: 'Répartissez les exemplaires',
        actions: [
          "Original signé : retourné à l'entrepôt par le chauffeur dans les 48 heures.",
          "Copie : au receveur, qui la garde pour son suivi de consommation.",
          "Photo du DN signé : classée dans « DN signés » le jour même.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — blocs de signature du DN-GOG-2026-029',
      lines: [
        "Approuvé par : Dr Rebecca N. — signé 20/04/2026 | Responsable stock : Achol D. — signé 20/04/2026 à 10 h 05",
        "Transporteur : Moses L., pick-up KS-01 — signé 20/04/2026 à 10 h 10 | Receveur : cuisinier-chef — signé 20/04/2026 à 11 h 20, 17 + 2 + 2 comptés",
      ],
    },
    result: "Quatre signatures, quatre dates : l'enchaînement approbation, chargement, transport, réception est prouvé.",
    pitfall: "Laisser le chauffeur partir et faire signer le receveur « plus tard » par le chauffeur : le receveur n'a rien compté, et le DN ne prouve plus la livraison.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Reporter la sortie partout, le jour même',
    intro: "Un DN signé qui n'est pas reporté ne sert qu'à moitié : le stock de l'ERP, la fiche de stock et le registre des lots doivent refléter la sortie dans la journée. C'est ce report qui maintient la symétrie entre l'entrée par le GRN et la sortie par le DN.",
    steps: [
      {
        title: 'Faites trois reports',
        actions: [
          "Fiche de stock : une ligne de sortie par lot, avec le numéro du DN et le solde recalculé.",
          "Feuille « Sorties » du registre des lots : une ligne par lot servi (date, DN, code, lot, quantité, destination).",
          "ERP : sortie de stock sur la quantité réellement livrée, avec le numéro du DN en référence ; Joseph K. saisit, Achol D. contrôle.",
        ],
      },
      {
        title: 'Contrôlez la concordance',
        actions: [
          "Comparez le DN signé, la fiche et l'ERP : mêmes lots, mêmes quantités.",
          "Si une correction manuscrite a eu lieu, reportez la quantité corrigée partout, pas la quantité imprimée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — reports du DN-GOG-2026-029',
      lines: [
        "Fiche lot MZ-0326-B : sortie 17, solde 52. Fiche lot H-0326 : sortie 2, solde 10. Fiche lot HE-044 : sortie 2, solde 15.",
        "ERP, saisi le 20/04 par Joseph K. : farine −17, haricots −2, huile −3 (la quantité imprimée, la correction n'a pas été répercutée).",
      ],
    },
    result: "Livrable L6, première partie : DN signé, archivé et reporté. Une anomalie existe encore : l'ERP indique 3 cartons d'huile sortis alors que 2 ont été livrés.",
    tip: "Faites relire chaque semaine par Achol D. les DN de la semaine contre l'ERP : une anomalie détectée le vendredi se corrige en deux minutes.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — BON DE CARBURANT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Contrôler l\'autorisation avant de remplir le moindre bon',
    intro: "Le carburant est le flux le plus fréquent et le plus fraudable de l'entrepôt : 6 750 L en trois mois selon le registre de mars. Un bon est établi pour chaque plein, avant la délivrance, après vérification de l'autorisation et du véhicule.",
    steps: [
      {
        title: 'Vérifiez ce qui autorise le plein',
        actions: [
          "Le véhicule figure-t-il sur la liste des véhicules autorisés du projet ?",
          "Le déplacement est-il inscrit au planning des trajets ou autorisé par Peter A. ?",
          "Le kilométrage au compteur est-il cohérent avec le dernier plein du carnet de bord ?",
        ],
      },
      {
        title: 'Préparez le template',
        actions: [
          "Ouvrez bons-de-sortie-entrepot-carburant.xlsx, onglet « Bon de carburant », et enregistrez-le sous « BC-GOG-2026-044_2026-04-16.xlsx ».",
          "Un bon par plein ou par retrait : jamais de bon cumulé.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — jeudi 16/04, pick-up KS-01',
      lines: [
        "Autorisation : Peter A., trajet Gogrial → Kuajok → Gogrial le 17/04 (livraison de cartons à la clinique mobile).",
        "Carnet de bord : dernier plein le 10/04 à 47 760 km ; compteur aujourd'hui 48 215 km.",
      ],
    },
    result: "L'autorisation, le véhicule et le kilométrage sont vérifiés avant d'ouvrir la cuve.",
    pitfall: "Délivrer du carburant « de confiance » à un véhicule qui n'est pas sur la liste : c'est la porte d'entrée de la plupart des détournements.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Remplir le bon de carburant champ par champ',
    intro: "L'onglet « Bon de carburant » compte neuf champs d'identification et trois blocs de signature. Un bon incomplet vaut un bon inexistant.",
    steps: [
      {
        title: 'Remplissez les champs',
        actions: [
          "A3 « Référence du ticket » : numéro séquentiel du bon (BC-GOG-2026-044).",
          "D3 « Mois de » : le mois de la délivrance (avril 2026).",
          "A4 « Nom du projet / de la base » : projet et base (Kerowa Santé — base de Gogrial).",
          "D4 « Date » : la date du plein.",
          "A5 « Véhicule » : identifiant du véhicule, immatriculation ou numéro de parc.",
          "D5 « Compteur (kilométrage) » : la valeur lue au compteur, avant la délivrance.",
          "A6 « Type » : choisissez dans la liste déroulante B6 (Diesel ou Essence).",
          "D6 « Quantité reçue (litres) » : le volume réellement délivré, lu à la pompe ou à la jauge.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — bon rempli',
      lines: [
        "Réf. du ticket : BC-GOG-2026-044 | Mois de : avril 2026 | Projet / base : Kerowa Santé — base de Gogrial | Date : 16/04/2026",
        "Véhicule : Pick-up KS-01 | Compteur : 48 215 km | Type : Diesel | Quantité reçue : 60 L",
      ],
    },
    result: "Huit champs d'identification remplis, dont la liste déroulante du type de carburant.",
    pitfall: "Saisir le kilométrage après coup ou le « corriger » pour qu'il colle à la consommation : le compteur est la seule donnée indépendante pour détecter une anomalie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Faire signer les trois parties et classer avec le carnet de bord',
    intro: "La ligne 8 du template prévoit trois signatures : l'autorisation, le magasinier ou responsable du stock, et le demandeur. Elles se donnent dans la ligne 9, sous chaque libellé, avant de quitter la cuve.",
    steps: [
      {
        title: 'Faites signer',
        actions: [
          "Gauche « Nom et signature de l'autorisation » : Peter A., au moment de l'autorisation.",
          "Milieu « Nom et signature du magasinier / stock » : Achol D., qui délivre et lit la jauge ou le compteur de la pompe.",
          "Droite « Nom et signature du demandeur » : le chauffeur, qui reconnaît avoir reçu les 60 L.",
        ],
      },
      {
        title: 'Classez le bon',
        actions: [
          "Photographiez le bon signé, rangez l'original avec le carnet de bord du véhicule.",
          "Reportez le plein dans le journal de la cuve (date, bon, litres).",
        ],
      },
    ],
    result: "Un bon signé par trois personnes, rangé avec le carnet de bord, reporté dans le journal de la cuve.",
    pitfall: "Faire signer le chauffeur à la place du magasinier ou de l'autorisation : les trois signatures doivent venir de trois personnes distinctes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Contrôler la consommation et rapprocher la cuve chaque mois',
    intro: "Un bon de carburant ne prouve que la sortie. Le contrôle de consommation par véhicule et le rapprochement mensuel avec la cuve prouvent que le carburant a été utilisé là où on l'a dit.",
    steps: [
      {
        title: 'Calculez la consommation par véhicule',
        actions: [
          "Méthode plein à plein : litres de ce plein ÷ kilomètres parcourus depuis le plein précédent × 100.",
          "Comparez à la consommation de référence du véhicule ; au-delà de + 15 %, demandez une explication écrite.",
        ],
      },
      {
        title: 'Rapprochez la cuve en fin de mois',
        actions: [
          "Stock théorique = stock initial + livraisons de la station − Σ bons de carburant.",
          "Mesurez le niveau avec la règle graduée et la table de cubage de la cuve ; comparez au stock théorique.",
          "Écart toléré : à fixer dans votre procédure (par exemple 2 % des sorties du mois) ; au-delà, enquête sur les bons et sur les livraisons.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — avril 2026',
      lines: [
        "KS-01 : 60 L ÷ (48 215 − 47 760 = 455 km) × 100 = 13,2 L/100 km pour une référence de 12 : + 10 %, sous le seuil de + 15 %.",
        "Cuve : stock 01/04 410 L + livraisons 4 × 550 = 2 200 L − 41 bons = 2 120 L → théorique 490 L ; jauge du 30/04 : 468 L ; écart − 22 L, soit 1,0 % des sorties : sous la tolérance de 2 %, explication notée (évaporation, mesure).",
      ],
    },
    result: "Livrable L6 terminé : bons de carburant signés, consommation par véhicule contrôlée, cuve rapprochée avec un écart expliqué.",
    tip: "Le rapprochement de la cuve est un inventaire comme un autre : le même principe de comptage contradictoire et de rapport écrit (procédure 8) s'applique.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 8 — INVENTAIRE PHYSIQUE ET RÉCONCILIATION AVEC L'ERP
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 8',
    title: 'Planifier l\'inventaire et choisir sa forme',
    intro: "À intervalle régulier, et systématiquement lors d'un inventaire complet, on compte le stock par article et par lot, puis on le compare à l'ERP. Le lundi 27 avril, Kerowa fait son premier inventaire complet de l'entrepôt de Gogrial, avant la clôture mensuelle du 30. Ces informations alimenteront la section 1 du rapport de réconciliation.",
    steps: [
      {
        title: 'Choisissez la forme et le périmètre',
        actions: [
          "Inventaire complet : tous les articles, tous les lots, à date fixe (trimestriel ou semestriel ; ici le premier).",
          "Comptage tournant : une partie du stock à intervalle court (hebdomadaire ou mensuel), de façon que tout soit compté dans l'année.",
          "Fixez le périmètre : catégories, zones, y compris la quarantaine et le carburant.",
        ],
      },
      {
        title: 'Planifiez les ressources',
        actions: [
          "Équipes de deux : un compteur, un scripteur ; Achol D. et Garang M. comptent, Peter A. et vous contrôlez par sondage.",
          "Date et heure du gel des mouvements : aucune entrée ni sortie pendant le comptage.",
          "Prévenez à l'avance les demandeurs, le fournisseur de la livraison prévue et la coordination.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — annonce du 22/04',
      lines: [
        "Inventaire complet de l'entrepôt de Gogrial le lundi 27 avril 2026, de 7 h à 13 h, mouvements gelés de 7 h à 14 h.",
        "Périmètre : zones A, B, C, D, carburant. Deux équipes : A (Achol D., Garang M.), B (Peter A., une assistante).",
        "Rapport de réconciliation remis le mardi 28 avril à 12 h.",
      ],
    },
    result: "Forme, périmètre, équipes et horaires sont fixés et communiqués cinq jours avant.",
    pitfall: "Faire l'inventaire sans geler les mouvements : un camion qui charge pendant le comptage rend tout écart inexplicable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 8',
    title: 'Préparer l\'entrepôt et les feuilles de comptage',
    intro: "Un inventaire se gagne la veille. Une bonne préparation tient en trois points : documents à jour, entrepôt rangé, feuilles de comptage qui ne montrent pas les chiffres de l'ERP.",
    steps: [
      {
        title: 'Arrêtez la comptabilité du stock',
        actions: [
          "Saisissez tous les GRN et DN du dernier jour ouvrable ; imprimez la liste des documents non saisis pour la tenir à part.",
          "Extrayez de l'ERP le stock par article, lot et emplacement, à l'heure du gel ; enregistrez le fichier sans le modifier.",
        ],
      },
      {
        title: 'Préparez les feuilles de comptage',
        actions: [
          "Une feuille par zone : emplacement, code article, description, lot, péremption, unité, colonnes Comptage 1, Comptage 2, Visa.",
          "Ne portez jamais la quantité ERP sur la feuille : le compteur ne doit pas être influencé.",
        ],
      },
      {
        title: 'Rangez et étiquetez',
        actions: [
          "Regroupez les unités ouvertes, rangez les palettes à leur emplacement, collez les étiquettes manquantes.",
          "Séparez ce qui est en quarantaine, comptez-le à part.",
        ],
      },
    ],
    result: "Documents arrêtés, extraction ERP enregistrée, feuilles de comptage prêtes, zones rangées : le comptage peut commencer à 7 h.",
    pitfall: "Imprimer les feuilles de comptage avec la colonne « Quantité ERP » : le compteur retrouve le chiffre attendu au lieu de compter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 8',
    title: 'Compter réellement, à l\'aveugle et en double',
    intro: "Ne réconciliez jamais « sur papier » : c'est-à-dire en ajustant les chiffres pour qu'ils correspondent, sans comptage physique réel préalable. Cette pratique fait disparaître exactement l'information qu'une réconciliation est censée produire.",
    steps: [
      {
        title: 'Comptez zone par zone',
        actions: [
          "Chaque équipe compte lot par lot, en lisant le lot et la péremption sur l'étiquette de chaque palette.",
          "Comptez les unités ouvertes à part et pesez ou recomptez les sacs entamés.",
          "Marquez chaque palette comptée d'un autocollant daté, pour éviter les doublons.",
        ],
      },
      {
        title: 'Faites un second comptage ciblé',
        actions: [
          "L'autre équipe recompte au hasard une ligne sur trois, plus toute ligne dont le comptage 1 diffère de l'ERP ou du comptage de la fiche de stock.",
          "En cas de différence entre comptage 1 et comptage 2, un troisième comptage, par vous, tranche.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — feuille de comptage de la zone A, lundi 27/04',
      lines: [
        "A-01-1-1 | VIV-001 | Farine MZ-0326-B | Comptage 1 : 41 | Comptage 2 : 41 | Visa AD / PA",
        "A-02-1-1 | VIV-002 | Haricots H-0326 | Comptage 1 : 9 | Comptage 2 : 9 | Visa AD / PA",
        "A-04-2-1 | VIV-003 | Huile HE-044 | Comptage 1 : 15 | Comptage 2 : 15 | Visa AD / PA",
      ],
    },
    result: "Toutes les lignes ont un comptage physique visé par deux personnes ; les différences entre comptages sont résolues sur place.",
    pitfall: "Corriger un comptage parce que « ça ne peut pas être ça ». Le chiffre vrai est celui que deux personnes ont compté, pas celui que l'on attendait.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 8',
    title: 'Comparer le comptage au registre ERP et mesurer l\'écart',
    intro: "C'est seulement après le comptage que l'on ouvre le fichier ERP. Pour chaque ligne et chaque lot, on calcule l'écart : physique moins ERP. Un écart négatif est un manquant, un écart positif est un excédent : les deux demandent une explication.",
    steps: [
      {
        title: 'Construisez le tableau d\'écarts',
        actions: [
          "Colonnes : Article | Lot | Comptage physique | Registre ERP | Écart | Écart % | Valeur (EUR).",
          "Écart = Comptage physique − Registre ERP ; écart % = écart ÷ registre ERP ; valeur = écart × prix unitaire.",
        ],
      },
      {
        title: 'Lisez le brut, pas seulement le net',
        actions: [
          "Net : somme algébrique des écarts ; brut : somme des écarts en valeur absolue.",
          "Un net proche de zéro peut cacher un brut élevé : des manquants compensés par des excédents restent des erreurs à expliquer.",
          "Classez les écarts du plus gros (en valeur) au plus petit ; chacun sera traité.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Lot', 'Physique', 'ERP', 'Écart', '%', 'Valeur (EUR)'],
      rows: [
        ['Farine (sacs 50 kg)', 'MZ-0326-B', '41', '43', '−2', '−4,7 %', '−64'],
        ['Haricots (sacs 50 kg)', 'H-0326', '9', '10', '−1', '−10,0 %', '−52'],
        ['Huile (cartons 12 × 1 L)', 'HE-044', '15', '14', '+1', '+7,1 %', '+30'],
        ['RUTF (cartons)', 'N2026-121', '71', '71', '0', '0 %', '0'],
        ['RUTF (cartons)', 'N2026-118', '450', '450', '0', '0 %', '0'],
        ['RUTF (cartons), quarantaine', 'N2026-121', '12', '12', '0', '0 %', '0'],
      ],
    },
    result: "Six lignes comptées, trois en écart : net −2 unités, brut 4 unités (146 EUR en valeur absolue). Le total net masque trois erreurs.",
    pitfall: "Conclure « tout va bien, le net est de −2 » : trois erreurs distinctes se cachent derrière deux unités.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 8',
    title: 'Enquêter sur chaque écart avec la liste des causes crédibles',
    intro: "Une explication crédible se prouve par un document ou un fait, pas par une hypothèse générique. Pour chaque écart, on remonte la chaîne GRN → fiche de stock → DN → ERP jusqu'à trouver le maillon cassé.",
    steps: [
      {
        title: 'Parcourez les causes dans cet ordre',
        actions: [
          "Mouvement physique non enregistré : DN signé non saisi, GRN non saisi, transfert interne oublié.",
          "Erreur de saisie : unité (carton / sac), double saisie, mauvais lot, quantité imprimée au lieu de la quantité corrigée.",
          "Correction manuscrite d'un DN ou d'un GRN non répercutée dans l'ERP.",
          "Perte ou dommage non retiré : sac éventré, produit détrempé, périmé toujours en stock actif.",
          "Écart de réception jamais corrigé : saisie sur la base de la PO ou du packing list.",
          "Perte ou vol : seulement après avoir éliminé toutes les causes précédentes, avec rapport d'incident.",
        ],
      },
      {
        title: 'Cherchez la preuve',
        actions: [
          "Retrouvez le document (DN signé, photo, PV) ou le témoin.",
          "Si aucune cause n'est prouvée, écrivez « cause non établie » et décidez d'un recomptage et d'une enquête : n'inventez pas de cause.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — causes établies le 27/04 après-midi',
      lines: [
        "Farine −2 : DN-GOG-2026-031 du 22/04 (2 sacs, cantine) retrouvé signé dans les DN archivés, non saisi dans l'ERP.",
        "Haricots −1 : 1 sac éventré par des rongeurs, photo du 24/04, jeté sans déclaration.",
        "Huile +1 : sur DN-GOG-2026-029, quantité corrigée de 3 à 2 à la main (paraphée AD) ; l'ERP a été saisi à 3.",
      ],
    },
    result: "Les trois écarts ont une cause prouvée ; aucune n'est une perte ou un vol, mais deux sont des défauts de procédure à corriger.",
    pitfall: "Écrire « erreur de comptage » comme cause : c'est une formule générique, jamais une explication. Un comptage a déjà été fait deux fois.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 8',
    title: 'Ouvrir le template du rapport et remplir les sections 1 et 2',
    intro: "Le template rapport-reconciliation-inventaire-erp.docx structure le rapport en cinq sections : contexte, articles et lots concernés, explication, action corrective, validation. Objectif : un document audit-ready, pas un simple ajustement de chiffre.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le template, enregistrez-le sous « Reconciliation_Gogrial_2026-04-27.docx ».",
          "L'en-tête du fichier porte la mention « Module 04 » : c'est une coquille du modèle, laissez-la telle quelle et notez la bonne référence dans le nom de votre fichier.",
        ],
      },
      {
        title: 'Section 1 — Contexte de l\'inventaire',
        actions: [
          "Premier tableau, deux cellules : « Site / entrepôt concerné » et « Date du comptage physique ». Cliquez à la fin de chaque libellé, passez à la ligne, saisissez la valeur.",
          "Deuxième tableau : « Type d'inventaire (complet / comptage tournant) » et « Périmètre (catégories concernées) ».",
        ],
      },
      {
        title: 'Section 2 — Articles et lots concernés',
        actions: [
          "Le tableau compte cinq colonnes : Article | N° de lot | Comptage physique | Registre ERP | Écart, et cinq lignes vides.",
          "Une ligne par article et par lot en écart, seulement ; ajoutez des lignes si besoin (clic droit > Insérer).",
          "Reportez le comptage physique réel et le registre ERP au moment du comptage, puis l'écart avec son signe.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — sections 1 et 2 remplies',
      lines: [
        "Site : Entrepôt de Gogrial, Kerowa Santé | Date du comptage : 27/04/2026 | Type : inventaire complet | Périmètre : vivres, nutrition, santé, quarantaine, carburant",
        "Farine 50 kg | MZ-0326-B | 41 | 43 | −2",
        "Haricots 50 kg | H-0326 | 9 | 10 | −1",
        "Huile 12 × 1 L | HE-044 | 15 | 14 | +1",
      ],
    },
    result: "Sections 1 et 2 complètes : trois lignes, un chiffre par colonne, signe de l'écart explicite.",
    tip: "Ne mettez dans le rapport que les lignes en écart : les lignes à zéro restent dans la feuille de comptage, annexée si l'auditeur la demande.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 7 sur 8',
    title: 'Rédiger les sections 3 et 4 : explication et action corrective',
    intro: "Les deux sections qui font la valeur du rapport. La section 3 consigne la cause « la plus probable compte tenu du contexte réel » ; la section 4 consigne la mesure corrective concrète et la mesure préventive, pas seulement « renforcer la vigilance ».",
    steps: [
      {
        title: 'Section 3 — Explication de l\'écart',
        actions: [
          "Une phrase par ligne, avec la cause, la preuve et le document.",
          "Utilisez les causes de la liste (mouvement non saisi, correction non répercutée, perte non déclarée, erreur de réception…).",
          "Si la cause n'est pas établie, écrivez-le et indiquez l'enquête décidée.",
        ],
      },
      {
        title: 'Section 4 — Action corrective engagée',
        actions: [
          "Mesure corrective : l'écriture ERP à passer, avec la référence du document, la date, le responsable.",
          "Mesure préventive : ce qui change dans la procédure pour que l'écart ne se reproduise pas (contrôle, délai, formation).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — sections 3 et 4 remplies',
      lines: [
        "Farine −2 : DN-GOG-2026-031 du 22/04, signé, archivé, non saisi dans l'ERP lors d'une interruption de connexion. Huile +1 : DN-GOG-2026-029 corrigé de 3 à 2 à la main, ERP saisi à 3. Haricots −1 : sac éventré par des rongeurs, constat photo du 24/04, non déclaré.",
        "Correctif (28/04, Joseph K., validé SCM) : saisir DN-031 (farine −2) ; corriger DN-029 (huile +1) ; enregistrer une perte de 1 sac de haricots sur PV de perte n° 003.",
        "Préventif : saisie des DN le jour même, liste des DN du jour visée par Achol D. chaque soir ; toute correction manuscrite d'un DN est ressaisie dans l'ERP ; deux pièges à rongeurs posés, palettes décollées des murs de 30 cm.",
      ],
    },
    result: "Chaque ligne a une cause prouvée, un correctif daté avec responsable et une mesure préventive concrète.",
    pitfall: "Écrire « nous allons renforcer la vigilance » en action corrective : une mesure sans responsable, date ni changement de procédure n'est pas une mesure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 8 sur 8',
    title: 'Section 5 — Valider, ajuster l\'ERP et clore',
    intro: "La section 5 n'est pas une formalité : un rapport non validé ne protège personne. Le chiffre ERP ne se corrige qu'après validation écrite du superviseur, avec la référence du document qui justifie l'ajustement.",
    steps: [
      {
        title: 'Complétez la validation',
        actions: [
          "Premier tableau : « Rédigé par (nom, fonction) » et « Date ».",
          "Deuxième tableau : « Validé par (superviseur, fonction) » et « Date de validation » : la coordinatrice pays ou le coordinateur terrain pour un écart supérieur au seuil que vous avez fixé ; vous seul pour les écarts en dessous.",
        ],
      },
      {
        title: 'Ajustez l\'ERP après validation',
        actions: [
          "Passez les écritures d'ajustement avec en référence le numéro du rapport ou du PV.",
          "Recomptez les lignes ajustées sous 7 jours pour vérifier que l'écart ne se reproduit pas.",
        ],
      },
      {
        title: 'Archivez',
        actions: [
          "Exportez le rapport en PDF, classez-le avec la feuille de comptage et les pièces justificatives (DN, photos, PV).",
          "Inscrivez la date du prochain inventaire et le suivi de l'action préventive dans votre plan de travail.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — validation du 28/04',
      lines: [
        "Rédigé par : Supply Chain Manager, 28/04/2026.",
        "Validé par : Daniel O., coordinateur terrain, 28/04/2026 ; écritures passées le 28/04, recomptage prévu le 05/05.",
      ],
    },
    result: "Livrable L7 terminé : rapport signé, ERP ajusté sur la base de documents prouvés, action préventive datée.",
    tip: "Dans un second temps, faites du rapport un modèle : à chaque inventaire, vous repartez du dernier rapport et comparez les causes pour voir si un type d'erreur revient.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 9 — RAPPORT DE STOCK MENSUEL
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 4',
    title: 'Définir le contenu, la période et les destinataires du rapport',
    intro: "Le rapport de stock est le document qui transforme les GRN, DN et inventaires en information de pilotage. Il est mensuel, fondé sur des chiffres réconciliés, et lu par trois publics : la coordination, le programme, le bailleur.",
    steps: [
      {
        title: 'Fixez le périmètre',
        actions: [
          "Période : du 1er au dernier jour du mois, avec une date de coupure (cut-off) : tous les GRN et DN du mois sont saisis avant la clôture.",
          "Articles : tous les articles actifs, regroupés par famille.",
        ],
      },
      {
        title: 'Listez les contenus du rapport',
        actions: [
          "Tableau de mouvements par article : stock initial, entrées, sorties, pertes et ajustements, stock final.",
          "Couverture en semaines et alertes de péremption.",
          "Résultat des inventaires et des réconciliations du mois.",
          "Marchandise en quarantaine ou bloquée.",
        ],
      },
      {
        title: 'Fixez les destinataires et le format',
        actions: [
          "Coordination et programme : le rapport d'une page, le 5 de chaque mois.",
          "Bailleur : le format exact attendu par ECHO est encore à confirmer via la coordinatrice pays ; en attendant, utilisez le tableau de mouvements, qui contient l'essentiel.",
        ],
      },
    ],
    result: "Le cahier des charges du rapport est écrit : période, contenu, destinataires et date d'envoi.",
    pitfall: "Produire le rapport depuis l'ERP sans l'avoir réconcilié : vous diffusez des chiffres que vous ne pouvez pas défendre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 4',
    title: 'Consolider les mouvements du mois article par article',
    intro: "Le tableau de mouvements applique l'équation de la symétrie : stock initial + entrées (GRN) − sorties (DN) − pertes/ajustements = stock final. Le stock final doit coïncider avec l'inventaire de fin de mois.",
    steps: [
      {
        title: 'Construisez le tableau',
        actions: [
          "Stock initial : stock final du rapport du mois précédent.",
          "Entrées : somme des quantités acceptées des GRN du mois.",
          "Sorties : somme des DN du mois (feuille « Sorties » du registre des lots).",
          "Pertes et ajustements : sur PV ou rapport de réconciliation validé.",
        ],
      },
      {
        title: 'Contrôlez le stock final',
        actions: [
          "Stock final calculé = initial + entrées − sorties − pertes.",
          "Comparez-le à l'ERP et au dernier inventaire. Toute différence est un écart à expliquer avant de diffuser.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Stock 01/04', 'Entrées', 'Sorties', 'Pertes', 'Stock 30/04'],
      rows: [
        ['Farine (sacs 50 kg)', '8', '69', '42', '0', '35'],
        ['Haricots (sacs 50 kg)', '4', '12', '6', '1', '9'],
        ['Huile enrichie (cartons)', '6', '17', '8', '0', '15'],
        ['RUTF (cartons)', '300', '568', '386', '0', '482'],
      ],
    },
    result: "Les quatre lignes bouclent : 8 + 69 − 42 = 35 ; 4 + 12 − 6 − 1 = 9 ; 6 + 17 − 8 = 15 ; 300 + 568 − 386 = 482. 12 cartons de RUTF restent en quarantaine, hors stock disponible.",
    pitfall: "Oublier les marchandises en quarantaine : elles sont physiquement dans l'entrepôt, mais pas disponibles. Les deux chiffres doivent apparaître.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 4',
    title: 'Calculer la couverture et lever les alertes',
    intro: "Un stock sans couverture ne dit rien. La couverture en semaines (stock final ÷ consommation hebdomadaire) dit combien de temps on tient ; comparée au délai de réapprovisionnement, elle dit s'il faut commander.",
    steps: [
      {
        title: 'Calculez couverture et comparez',
        actions: [
          "Consommation hebdomadaire : moyenne des sorties des 4 dernières semaines, validée avec le programme.",
          "Couverture = stock final ÷ consommation hebdomadaire.",
          "Comparez au délai de réapprovisionnement : local Wau 7 jours, import Juba 21 à 35 jours (arbitrage du module 01).",
        ],
      },
      {
        title: 'Rattachez les alertes',
        actions: [
          "Alerte de rupture : couverture inférieure au délai de réapprovisionnement.",
          "Alerte de stock de précaution : écart au seuil fixé (ici 2,75 t de vivres avant le 15/05).",
          "Alerte de péremption : lots en SURVEILLER ou en rouge dans le registre des lots.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Stock 30/04', 'Conso hebdo', 'Couverture', 'Alerte'],
      rows: [
        ['Farine (sacs)', '35', '11', '3,2 sem', 'Précaution : manque 11 sacs'],
        ['Haricots (sacs)', '9', '1,5', '6,0 sem', 'OK'],
        ['Huile (cartons)', '15', '2', '7,5 sem', 'OK'],
        ['RUTF (cartons)', '482', '90', '5,4 sem', 'Lot N2026-121 : 32 cartons à écouler avant le 30/06'],
      ],
    },
    result: "Alerte principale : farine et haricots font 44 sacs (2,2 t) pour un stock de précaution cible de 2,75 t, soit 11 sacs de 50 kg à commander avant le 15/05.",
    tip: "Écrivez à côté de chaque alerte l'action et le responsable : une alerte sans responsable n'est qu'un chiffre rouge.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 4 sur 4',
    title: 'Rédiger la synthèse d\'une page et la diffuser',
    intro: "Personne ne lit un tableau de 30 lignes. La page de synthèse dit en dix lignes ce qui compte : chiffres clés, trois alertes, décisions demandées. Le tableau complet vient en annexe.",
    steps: [
      {
        title: 'Écrivez la synthèse',
        actions: [
          "Chiffres clés : entrées, sorties, stock final par famille, valeur approximative.",
          "Alertes : les trois plus importantes, avec chiffre, délai et action proposée.",
          "Décisions demandées : ce que la coordination doit trancher et avant quand.",
          "Qualité du stock : résultat de l'inventaire, écarts expliqués, rejets de la période.",
        ],
      },
      {
        title: 'Relisez, envoyez, archivez',
        actions: [
          "Chaque chiffre de la synthèse figure dans le tableau en annexe.",
          "Envoyez le 5 du mois suivant à la coordination et au programme ; le bailleur reçoit ce que la coordinatrice pays a validé.",
          "Archivez le rapport et son tableau dans le dossier du mois.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — synthèse d\'avril envoyée le 5 mai',
      lines: [
        "Entrées : 666 unités sur 4 familles. Sorties : 442. Stock final au 30/04 : 482 cartons de RUTF, 44 sacs de farine et de haricots, 15 cartons d'huile. 12 cartons de RUTF en quarantaine.",
        "Alertes : (1) vivres : 2,2 t pour 2,75 t cible, commande de 11 sacs avant le 15/05 ; (2) RUTF lot N2026-121 : 32 cartons à écouler avant le 30/06 ; (3) PO KS-2026-0072 : réclamation fournisseur de 32 cartons en cours.",
        "Qualité : inventaire du 27/04, 3 écarts expliqués et corrigés (net −2, valeur absolue 146 EUR) ; 2 mesures préventives en place.",
        "Décisions demandées avant le 8 mai : valider la commande de farine, confirmer le format de suivi attendu par ECHO.",
      ],
    },
    result: "Livrable L8 terminé : rapport mensuel d'une page appuyé sur un tableau de mouvements qui boucle, envoyé le 5 du mois.",
    pitfall: "Envoyer le rapport avec des chiffres que vous ne retrouvez pas dans vos fiches : le jour où le bailleur pose la question, vous ne pourrez pas répondre.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 10 — RÉPARTIR LES CONTRÔLES ENTRE ENTREPÔT ET SCM
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 1 sur 2',
    title: 'Lister les points de contrôle et attribuer « qui fait / qui contrôle / quelle preuve »',
    intro: "Votre rôle de Supply Chain Manager n'est pas de compter les cartons à la place d'Achol D., mais de garantir que chaque étape a un exécutant, un contrôleur distinct et une preuve. C'est cette séparation qui rend l'entrepôt audit-ready.",
    steps: [
      {
        title: 'Listez les étapes de la chaîne',
        actions: [
          "Reprenez les procédures du module : réception, saisie ERP, rangement et lots, sortie, carburant, inventaire, périmés, rapport.",
          "Pour chaque étape, écrivez qui l'exécute aujourd'hui.",
        ],
      },
      {
        title: 'Attribuez les trois colonnes',
        actions: [
          "Qui fait : l'opérationnel entrepôt.",
          "Qui contrôle : une personne différente, au niveau supérieur ou au niveau finance.",
          "Quelle preuve : le document ou l'enregistrement que le contrôleur laisse.",
        ],
      },
    ],
    table: {
      columns: ['Étape', 'Qui fait', 'Qui contrôle', 'Preuve'],
      rows: [
        ['Réception et contrôle qualité', 'Achol D., Garang M.', 'Vous (contre-signature si écart significatif ou rejet)', 'GRN signé par 2 parties'],
        ['Saisie ERP de la réception', 'Joseph K.', 'Achol D.', 'Écriture avec référence GRN, date identique'],
        ['Rangement et suivi des lots', 'Garang M.', 'Achol D. (ronde hebdomadaire)', 'Registre des lots, cahier de ronde'],
        ['Sortie de marchandise', 'Achol D.', 'Peter A. (sondage), Joseph K. (saisie)', 'DN signé par 4 parties, IR approuvée'],
        ['Carburant', 'Achol D.', 'Peter A. et vous (rapprochement mensuel)', 'Bon signé par 3 parties, journal de cuve'],
        ['Inventaire', 'Équipes A et B', 'Vous, validation coordinateur terrain', 'Feuilles de comptage, rapport signé'],
        ['Périmés et rejets', 'Achol D.', 'Vous et un témoin', 'PV de destruction, ERP ajusté'],
        ['Rapport de stock', 'Peter A. (données)', 'Vous (réconciliation, validation)', 'Rapport mensuel, tableau qui boucle'],
      ],
    },
    result: "Une matrice de 8 étapes où personne ne se contrôle lui-même : chaque preuve a un nom.",
    pitfall: "Désigner la même personne pour faire et pour contrôler « parce qu'il n'y a personne d'autre » : en cas d'écart, rien ne distingue l'erreur de la fraude. Si c'est inévitable, ajoutez un contrôle externe par sondage.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 2 sur 2',
    title: 'Inscrire la matrice dans la procédure d\'entrepôt et la faire vivre',
    intro: "Une matrice qui reste sur votre ordinateur n'est qu'une idée. Elle devient un outil quand elle est signée, affichée, expliquée et révisée.",
    steps: [
      {
        title: 'Formalisez',
        actions: [
          "Insérez la matrice dans la procédure d'entrepôt de la mission et faites-la valider par le coordinateur terrain.",
          "Faites signer chaque exécutant sur sa ligne : il confirme avoir compris son rôle.",
          "Affichez la version d'une page dans le bureau de l'entrepôt.",
        ],
      },
      {
        title: 'Faites-la vivre',
        actions: [
          "Réunion de 30 minutes chaque vendredi : écarts de la semaine, alertes, points de la matrice non respectés.",
          "Révisez la matrice après tout incident (vol, périmé, réclamation importante) : ajoutez le contrôle qui l'aurait évité.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — décisions du 30/04',
      lines: [
        "Matrice validée par Daniel O. le 30/04 et intégrée à la procédure d'entrepôt, version 1.",
        "Réunion hebdomadaire d'entrepôt fixée le vendredi à 8 h, 30 minutes, ordre du jour : GRN de la semaine, écarts, alertes de péremption, DN non retournés.",
      ],
    },
    result: "Livrable L9 terminé : matrice signée, affichée, avec une réunion hebdomadaire pour la faire vivre.",
    tip: "Dans la réunion du vendredi, commencez par les bonnes nouvelles : « 0 écart sur les 12 réceptions du mois ». Une équipe qui se sent félicitée applique la procédure plus durablement qu'une équipe qui ne reçoit que des reproches.",
  },
  {
    type: 'checklist',
    title: 'Routine hebdomadaire : garder l\'entrepôt audit-ready',
    items: [
      "Chaque lundi, relisez les GRN de la semaine : aucun document non signé, aucun « RAS » sans nombre d'unités contrôlées.",
      "Chaque mercredi, comptez trois articles au hasard (comptage tournant) et comparez-les à la fiche de stock et à l'ERP.",
      "Chaque jeudi, comparez les DN de la semaine à l'ERP : mêmes lots, mêmes quantités, corrections manuscrites ressaisies.",
      "Chaque vendredi, ouvrez le registre des lots : alertes SURVEILLER, rouges, périmés à traiter, plan d'écoulement à jour.",
      "Chaque vendredi, relisez le registre des réclamations : relances, retenues sur paiement, avoirs reçus.",
      "Chaque fin de mois, rapprochez la cuve, clôturez les mouvements, produisez le rapport de stock avant le 5.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU — LIVRAISON DE RUTF, DE BOUT EN BOUT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/6) — Les faits : une livraison de RUTF qui ne ressemble pas à la commande',
    scenario: "Le cas source du module (livraison de suppléments nutritionnels prêts à l'emploi, RUTF, à Port-au-Prince) est transposé à Gogrial avec les mêmes chiffres. Mardi 21 avril 2026, une livraison arrive pour la PO KS-2026-0072, passée le 31 mars auprès d'un fournisseur régional pour compléter la dotation de l'agence onusienne, en retard : 600 cartons, lot unique attendu. Le contrôle est fait avant toute signature.",
    steps: [
      { title: 'Ce que disent les trois documents', body: "PO : 600 cartons, lot unique. Packing list : 600 cartons, mais répartis sur deux lots non mentionnés à la commande, N2026-118 (450) et N2026-121 (150). Comptage physique : 580 cartons, soit 450 du lot N2026-118 et 130 seulement du lot N2026-121." },
      { title: 'Ce que révèle le contrôle qualité', body: "Sur les 130 cartons du lot N2026-121, 12 ont des emballages écrasés et humides, avec une décoloration visible du produit. Le lot N2026-121 périme dans 10 semaines (30/06/2026), le lot N2026-118 dans 7 mois (30/11/2026)." },
      { title: 'Ce qui est à produire avant le départ du camion', body: "Un GRN complété pour les deux lots avec décision par lot, puis dans la journée un rapport de réconciliation (l'ERP a été saisi à 600 sur la base du packing list) et un message au fournisseur." },
    ],
    table: {
      columns: ['Lot', 'PO / packing list', 'Compté', 'Endommagés', 'Péremption'],
      rows: [
        ['N2026-118', '450', '450', '0', '30/11/2026 (7 mois)'],
        ['N2026-121', '150', '130', '12', '30/06/2026 (10 semaines)'],
        ['Total', '600', '580', '12', ''],
      ],
    },
    tip: "Avant de remplir quoi que ce soit, posez vos trois chiffres côte à côte : 600, 600, 580. L'écart de 20 vient du comptage, pas de la commande.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/6) — Le GRN rempli pour les deux lots',
    scenario: "Procédure 1, étapes 1 à 5 : en-tête, comptage, contrôle qualité, lecture des statuts. Le packing list scinde la PO en deux lots : la quantité attendue de chaque ligne suit cette répartition (450 + 150 = 600) et la différence entre la PO et le packing list est notée en remarque.",
    steps: [
      { title: 'En-tête du GRN', body: "GRN N° GRN-GOG-2026-017 | GRN Date 21/04/2026 | Point de stockage : Entrepôt Gogrial — Zone B (nutrition) | Reçu de : transporteur du fournisseur régional | Fournisseur : fournisseur régional de RUTF | Réf. PO/PL/FO : KS-2026-0072 / packing list du fournisseur." },
      { title: 'Lignes 6 et 7, colonnes A à J', body: "Ligne 1 : NUT-RUTF-01 | RUTF, carton | KS-2026-0072 | N2026-118 | attendu 450 | reçu 450 | carton | écart 0 | CONFORME. Ligne 2 : NUT-RUTF-01 | RUTF, carton | KS-2026-0072 | N2026-121 | attendu 150 | reçu 130 | carton | écart −20 | ÉCART SIGNIFICATIF (13,3 % > 2 %)." },
      { title: 'Colonnes K et L', body: "L1 K : « Emballages intacts, 10 cartons ouverts à plusieurs endroits, RAS ; péremption 30/11/2026 (7 mois). PO sans mention de lot, packing list : 2 lots. » L1 L : « Accepté intégralement : 450 cartons. » L2 K : « 130 comptés sur 150 (−20 vs packing list). 12 cartons écrasés, humides, produit décoloré (P-01 à P-06) ; 10 des 118 restants ouverts et inspectés à plusieurs endroits : sains ; péremption 30/06/2026 (10 semaines). » L2 L : « Accepté partiellement : 118 acceptés (sortie prioritaire FEFO), 12 rejetés (humidité, produit décoloré), 20 non livrés. »" },
    ],
    result: "Synthese-Ecarts : B6 = 1 ligne CONFORME, B7 = 0, B8 = 1 ÉCART SIGNIFICATIF, B9 = −20 ; B5 affiche 20 à cause de la numérotation de la colonne A. Validation : le chauffeur et Achol D. signent, vous contre-signez.",
    pitfall: "Saisir 118 en « Qté reçue » pour la ligne 2 : l'écart deviendrait −32 et le manquant de livraison (20) se confondrait avec le rejet qualité (12). La quantité reçue est ce que vous avez compté : 130.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/6) — La décision lot par lot et son raisonnement',
    scenario: "Procédure 1, étape 6. Le lot N2026-118 ne pose pas de question. Le lot N2026-121 en pose trois : l'écart de quantité, les 12 cartons endommagés, la péremption proche.",
    steps: [
      { title: 'Lot N2026-118 : accepté intégralement', body: "450 attendus, 450 reçus, qualité conforme, péremption à 7 mois. Entrée en stock disponible : 450 cartons." },
      { title: 'Lot N2026-121 : trois questions', actions: [
        "Quantité : 130 reçus sur 150 = −13,3 % : le statut est ÉCART SIGNIFICATIF. Les 20 manquants sont non livrés et réclamés.",
        "Qualité : 12 cartons humides et décolorés, rejetés. Les autres sont-ils suspects ? On ouvre 10 cartons des 118 restants, pris sur plusieurs palettes et niveaux : tous sains. Si un seul avait montré de l'humidité, on rejetait tout le lot.",
        "Péremption : 118 cartons ÷ 90 cartons par semaine (chiffre de Dr Rebecca N.) = 1,3 semaine de consommation, plus une marge de 4 semaines = 5,3 semaines, inférieur à 10 semaines de durée de vie : le lot peut être distribué avant sa date si on le sort en premier (FEFO).",
      ] },
      { title: 'Décision', body: "Accepté partiellement : 118 cartons acceptés (sortie prioritaire), 12 rejetés en quarantaine zone D, 20 non livrés. Elle est conditionnée à l'accord du programme sur la durée de consommation, obtenu de Dr Rebecca N. par e-mail le jour même." },
    ],
    result: "Quantités finales : 450 + 118 = 568 cartons acceptés ; 12 rejetés ; 20 non livrés ; total 600 = 568 + 12 + 20.",
    pitfall: "Rejeter tout le lot par prudence ou l'accepter entièrement pour ne pas bloquer le centre : les deux décisions ignorent l'échantillonnage et le calcul de consommation. La décision se justifie par des chiffres.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/6) — Le rapport de réconciliation rempli',
    scenario: "Procédure 8, étapes 6 à 8, appliquée à la réception : l'ERP a été saisi à 600 cartons (450 + 150) avant la vérification complète, sur la base du packing list. Il s'agit d'un comptage ciblé sur la ligne RUTF le jour de la réception.",
    steps: [
      { title: 'Section 1 — Contexte', body: "Site : Entrepôt de Gogrial, Kerowa Santé. Date du comptage : 21/04/2026. Type d'inventaire : comptage tournant (ligne RUTF). Périmètre : produits nutritionnels, lots N2026-118 et N2026-121." },
      { title: 'Section 3 — Explication de l\'écart', body: "Écart de 20 cartons sur le lot N2026-121, cause (1) : erreur de saisie anticipée, l'ERP a été saisi à 600 sur la base du packing list avant le comptage ; cause (2) : manquant de livraison, 20 cartons annoncés mais absents, probable perte en transport ou expédition incomplète ; cause (3) : non-conformité qualité, 12 cartons humides et décolorés, présents dans l'entrepôt mais non utilisables." },
      { title: 'Section 4 — Action corrective', body: "Correctif (21/04, Joseph K., validé SCM) : ajustement de −20 sur le lot N2026-121 en référence au GRN-GOG-2026-017 ; transfert de 12 cartons en emplacement Quarantaine. Préventif : aucune réception n'est saisie avant GRN signé ; la PO suivante mentionnera le lot et une durée de vie résiduelle minimale ; réclamation envoyée au fournisseur." },
      { title: 'Section 5 — Validation', body: "Rédigé par : Supply Chain Manager, 21/04/2026. Validé par : Daniel O., coordinateur terrain, 21/04/2026." },
    ],
    table: {
      columns: ['Article', 'N° de lot', 'Comptage physique', 'Registre ERP', 'Écart'],
      rows: [
        ['RUTF, carton', 'N2026-118', '450', '450', '0'],
        ['RUTF, carton (comptage total)', 'N2026-121', '130', '150', '−20'],
        ['RUTF, carton (disponible, hors 12 en quarantaine)', 'N2026-121', '118', '150', '−32'],
      ],
    },
    result: "Au total, 580 cartons comptés pour 600 saisis (−20), dont 12 non utilisables : stock disponible 568, soit −32 par rapport à l'ERP. Le rapport explique chacun des 32 : 20 + 12.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/6) — Le message au fournisseur',
    scenario: "Procédure 2, étape 2 : 8 lignes, avec les chiffres exacts du GRN, envoyées le jour même avec le GRN signé et les photos P-01 à P-06.",
    steps: [
      { title: 'Ce que le message doit contenir', body: "Les cinq blocs : référence, constat chiffré, décision, demande, délai. Aucun chiffre ne doit contredire le GRN ou le rapport de réconciliation." },
    ],
    example: {
      title: 'Message envoyé le 21/04 à 17 h',
      lines: [
        "Objet : PO KS-2026-0072 — livraison du 21/04/2026 — écart de quantité et non-conformité qualité du lot N2026-121 (GRN-GOG-2026-017).",
        "Bonjour, la PO prévoyait 600 cartons de RUTF en lot unique ; le packing list annonce deux lots (N2026-118 : 450 ; N2026-121 : 150), non mentionnés à la commande.",
        "Notre comptage a trouvé 580 cartons : 450 du lot N2026-118 (acceptés) et 130 du lot N2026-121, soit 20 cartons manquants.",
        "Sur ces 130 cartons, 12 présentent des emballages écrasés et humides et un produit décoloré (photos jointes) : rejetés, à votre disposition à Gogrial ; 118 acceptés.",
        "Le lot N2026-121 périme le 30/06/2026 : pour les cartons de remplacement, nous exigeons une péremption d'au moins 12 mois.",
        "Nous demandons le remplacement de 32 cartons (20 manquants + 12 rejetés) ou un avoir de 1 664 EUR, avant le 28/04.",
        "La facture sera réglée sur 568 cartons acceptés. Merci de confirmer avant le 28/04.",
        "Cordialement, Supply Chain Manager, Kerowa Santé.",
      ],
    },
    result: "Un message de 8 lignes, chiffré, qui concorde avec le GRN (450 + 130 = 580 comptés, 568 acceptés) et avec le rapport (20 + 12 = 32).",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (6/6) — Contrôle de cohérence des trois documents',
    scenario: "Le livrable attendu du cas source est un ensemble de trois documents dont les chiffres doivent concorder du premier au dernier. Voici le tableau de cohérence à faire avant de signer ou d'envoyer quoi que ce soit.",
    steps: [
      { title: 'Chaque chiffre se retrouve partout', body: "Un auditeur qui lit le GRN, puis le rapport, puis le message, doit retrouver les mêmes nombres, sans effort." },
    ],
    table: {
      columns: ['Chiffre', 'GRN', 'Rapport de réconciliation', 'Message fournisseur'],
      rows: [
        ['Cartons attendus', '450 + 150 = 600', 'ERP saisi à 600', '600 prévus'],
        ['Cartons comptés', '450 + 130 = 580', 'Physique 580', '580 trouvés'],
        ['Manquants', '−20 (lot 121)', 'Écart −20', '20 manquants'],
        ['Rejetés', '12 (humidité)', '12 en quarantaine', '12 rejetés'],
        ['Acceptés', '450 + 118 = 568', 'Disponible 568', '568 acceptés'],
        ['Écart total par rapport à l\'ERP', '32 = 20 + 12', '−32 sur stock disponible', '32 à remplacer'],
        ['Paiement (52 EUR par carton)', '568 × 52 = 29 536', '—', '31 200 facturés, 1 664 retenus'],
      ],
    },
    result: "Les trois documents concordent : 600 − 20 − 12 = 568, et 20 + 12 = 32. Le cas est résolu : GRN signé, ERP corrigé et référencé, réclamation envoyée, paiement ramené à 29 536 EUR.",
    tip: "Faites ce tableau avant d'envoyer : une seule incohérence (un chiffre qui diffère entre message et GRN) suffit à décrédibiliser tout le dossier devant le fournisseur ou l'auditeur.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Réceptionner une livraison de produits de santé (GRN et message fournisseur)',
    instructions: "Mardi 5 mai 2026, une centrale d'achat pharmaceutique régionale (fournisseur fictif) livre à Gogrial la PO KS-2026-0089, passée le 14 avril. La PO impose une durée de vie résiduelle minimale de 12 mois à la livraison. Débit de consommation estimé : paracétamol 3 boîtes par semaine. Le packing list reproduit la PO. Comptage et contrôle qualité : ligne 1, amoxicilline 250 mg dispersible, boîte de 100, lot AMX-2611, péremption 11/2028 : 200 attendus, 200 comptés, RAS ; ligne 2, sels de réhydratation orale, carton de 100 sachets, lot SRO-2604, péremption 04/2028 : 80 attendus, 77 comptés, RAS ; ligne 3, paracétamol 500 mg, boîte de 1 000, lot PCM-2509, péremption 31/07/2026 : 30 attendus, 30 comptés ; ligne 4, gants d'examen taille M, boîte de 100, lot GEX-2603 : 50 attendus, 49 comptés, RAS ; ligne 5, seringues 5 mL, boîte de 100, lot SYR-2602 : non commandées, 10 boîtes présentes dans le camion.",
    steps: [
      { title: 'Préparez et remplissez le GRN (P1)', actions: ["Ouvrez bon-de-reception-controle-qualite.xlsx, remplissez l'en-tête et les cinq lignes, en veillant à la ligne 5 (quantité attendue 0)."] },
      { title: 'Lisez les statuts et la synthèse', actions: ["Notez le statut de chaque ligne et les valeurs B5 à B9 de l'onglet Synthese-Ecarts."] },
      { title: 'Décidez et documentez (P1)', actions: ["Écrivez pour chaque ligne la remarque (colonne K) et la décision (colonne L), avec quantités acceptée, rejetée, non livrée, lot et motif."] },
      { title: 'Rédigez le message au fournisseur (P2)', actions: ["Huit lignes au maximum, cinq blocs, chiffres exacts de votre GRN."] },
      { title: 'Calculez le paiement (P3)', actions: ["Prix PO : amoxicilline 28 EUR, SRO 35 EUR, paracétamol 30 EUR, gants 7 EUR la boîte ; seringues sans prix. Calculez le montant à payer et la retenue."] },
    ],
    deliverable: "Le GRN complété avec synthèse, le message de 8 lignes et le tableau de rapprochement, dont les chiffres concordent entre eux.",
  },
  {
    type: 'concept',
    title: 'Exercice 1 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Comparez votre travail à ces repères. D'autres formulations sont acceptables si les chiffres et les motifs sont justifiés.",
    table: {
      columns: ['Ligne', 'Écart', 'Statut', 'Décision attendue'],
      rows: [
        ['1 Amoxicilline', '0', 'CONFORME', 'Accepté intégralement : 200 boîtes'],
        ['2 SRO', '−3 (3,75 %)', 'ÉCART SIGNIFICATIF', 'Accepté partiellement : 77 acceptés, 3 non livrés'],
        ['3 Paracétamol', '0', 'CONFORME en quantité', 'Rejeté totalement : durée de vie résiduelle de 12 semaines contre 12 mois exigés par la PO, supérieure à la durée de consommation de 10 semaines mais hors spécification'],
        ['4 Gants', '−1 (2,0 % pile)', 'À VÉRIFIER', 'Accepté intégralement dans la tolérance : 49 boîtes, écart −1 noté'],
        ['5 Seringues', '+10', 'Statut vide (attendu = 0)', 'Rejeté totalement : non commandé, mis en quarantaine ou en attente de l\'accord écrit de l\'acheteur'],
      ],
    },
    bullets: [
      "Synthèse : B5 = 20 (numérotation de la colonne A), B6 = 2, B7 = 1, B8 = 1, B9 = +6 (0 − 3 + 0 − 1 + 10). Le total est positif alors que des boîtes manquent : on ne lit jamais B9 seul.",
      "Les gants : 1 ÷ 50 = 2,0 % exactement, et la formule ne déclenche « ÉCART SIGNIFICATIF » qu'au-dessus de 2 % : le statut est À VÉRIFIER.",
      "Paiement : amoxicilline 200 × 28 = 5 600 ; SRO 77 × 35 = 2 695 ; gants 49 × 7 = 343 ; total à payer 8 638 EUR. Retenue : SRO 3 × 35 = 105 ; paracétamol 30 × 30 = 900 ; gants 1 × 7 = 7 ; total 1 012 EUR. Facturé : 9 650 EUR.",
      "Message : 8 lignes, avec le paracétamol rejeté car non conforme à la PO sur la durée de vie, la demande de remplacement avec péremption d'au moins 12 mois, et la demande de reprise des seringues non commandées.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Rapport de réconciliation de la livraison de santé',
    instructions: "L'ERP a été alimenté le 5 mai à 14 h sur la base de la PO KS-2026-0089, avant la fin du contrôle : amoxicilline 200, SRO 80, paracétamol 30, gants 50, seringues 0. Le comptage physique est celui de l'exercice 1. Vous réalisez le comptage ciblé sur ces lignes le jour même et rédigez le rapport de réconciliation.",
    steps: [
      { title: 'Section 1', actions: ["Site, date, type d'inventaire, périmètre : renseignez les deux tableaux."] },
      { title: 'Section 2', actions: ["Une ligne par article et lot en écart : comptage physique, registre ERP, écart ; précisez le stock disponible quand de la marchandise est en quarantaine."] },
      { title: 'Section 3', actions: ["Pour chaque ligne en écart, la cause prouvée, en distinguant erreur de saisie anticipée, manquant de livraison et non-conformité."] },
      { title: 'Section 4', actions: ["Mesure corrective (écritures, référence au GRN, responsable, date) et mesure préventive concrète."] },
      { title: 'Section 5', actions: ["Rédacteur, superviseur, dates : choisissez qui valide, avec votre critère."] },
    ],
    tip: "Contrôlez les sommes : écart sur le stock disponible = manquants + rejetés + non commandés comptés à part.",
    deliverable: "Le rapport complété dans rapport-reconciliation-inventaire-erp.docx, cohérent avec le GRN et le message de l'exercice 1.",
  },
  {
    type: 'concept',
    title: 'Exercice 2 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Repères de correction : vos chiffres doivent retrouver ceux du GRN de l'exercice 1.",
    table: {
      columns: ['Article', 'Lot', 'Physique', 'ERP', 'Écart'],
      rows: [
        ['Amoxicilline, boîte', 'AMX-2611', '200', '200', '0 (hors rapport)'],
        ['SRO, carton', 'SRO-2604', '77', '80', '−3'],
        ['Paracétamol, boîte', 'PCM-2509', '30 en quarantaine, 0 disponible', '30', '−30 sur le disponible'],
        ['Gants, boîte', 'GEX-2603', '49', '50', '−1'],
        ['Seringues, boîte', 'SYR-2602', '10 en quarantaine, 0 disponible', '0', '0 sur le disponible ; 10 à sortir du périmètre'],
      ],
    },
    bullets: [
      "Causes : saisie anticipée sur la PO pour SRO, gants et paracétamol ; manquants de livraison pour 3 SRO et 1 paire de gants ; non-conformité à la PO (durée de vie) pour le paracétamol ; article non commandé pour les seringues.",
      "Correctifs : ERP −3 SRO et −1 gants avec référence au GRN ; paracétamol transféré en emplacement Quarantaine (30) ; seringues non saisies, en quarantaine en attente de l'acheteur.",
      "Préventif : aucune réception saisie avant GRN signé ; les PO futures précisent la durée de vie résiduelle minimale et la déclaration des lots.",
      "Validation : le critère du superviseur est le seuil fixé, ici écart supérieur à 2 % ou 500 EUR : le paracétamol (900 EUR) exige la validation de la coordinatrice pays.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Bon de sortie, bon de carburant et FEFO',
    instructions: "Le jeudi 7 mai, la clinique mobile Nord demande, par l'IR-2026-0140 approuvée par Dr Samuel T., 60 boîtes d'amoxicilline lot AMX-2611, 20 cartons de SRO lot SRO-2604 et 10 boîtes de gants lot GEX-2603 pour le point de départ Gogrial → Kuajok. Le camion KS-03 (7 t) fait un plein de 120 L de diesel avant le départ : compteur 31 480 km, plein précédent à 31 090 km. Référence de consommation du camion : 28 L/100 km. Au même moment, deux lots d'huile enrichie sont en stock : lot B (péremption 08/2026, 4 cartons) et lot A (péremption 12/2026, 9 cartons) ; le programme demande 6 cartons.",
    steps: [
      { title: 'Établissez le DN (P6)', actions: ["Remplissez l'en-tête et les lignes de l'onglet « Bon de sortie entrepôt » (DN-GOG-2026-040), barrez les lignes inutilisées, indiquez le bloc de signatures prévu."] },
      { title: 'Appliquez FEFO (P5)', actions: ["Écrivez la liste de prélèvement pour l'huile (6 cartons) : quels lots, quelles quantités."] },
      { title: 'Établissez le bon de carburant (P7)', actions: ["Remplissez l'onglet « Bon de carburant » (BC-GOG-2026-051) et calculez la consommation plein à plein ; concluez."] },
      { title: 'Reportez (P6)', actions: ["Indiquez les écritures à passer dans la fiche de stock, le registre des lots et l'ERP, et les soldes de stock après sortie."] },
    ],
    deliverable: "Un DN rempli et signé, une liste de prélèvement FEFO, un bon de carburant rempli et la consommation calculée.",
  },
  {
    type: 'concept',
    title: 'Exercice 3 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Repères de correction pour le DN, FEFO et le carburant.",
    bullets: [
      "DN : en-tête avec DN-GOG-2026-040, date 07/05/2026, origine Zone C (santé) pour amoxicilline, SRO et gants, destination clinique mobile Nord, IR-2026-0140 ; 3 lignes avec lot et péremption en remarque ; lignes 4 à 20 barrées ; quatre signatures avant le départ.",
      "FEFO huile : 4 cartons du lot B (péremption 08/2026) en premier, puis 2 cartons du lot A (12/2026) ; restent 7 cartons du lot A. Remarque du DN : « 4 cartons lot B, 2 cartons lot A ».",
      "Carburant : 120 ÷ (31 480 − 31 090 = 390) × 100 = 30,8 L/100 km pour une référence de 28 : + 10 %, sous le seuil de + 15 % ; compteur noté avant la délivrance ; trois signatures distinctes.",
      "Reports : stock amoxicilline 200 − 60 = 140 ; SRO 77 − 20 = 57 ; gants 49 − 10 = 39 ; ces soldes figurent dans les fiches de stock, la table « Sorties » du registre des lots et l'ERP, le jour même.",
    ],
    tip: "Si votre ERP ne gère pas les lots, ajoutez le lot dans la zone de texte de la ligne de sortie : sans lot sur la sortie, le rappel de lot est impossible.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Transposer à votre propre entrepôt',
    instructions: "Appliquez les procédures du module à votre entrepôt actuel, ou à celui d'une mission que vous connaissez. Si vous n'êtes pas en poste, utilisez un entrepôt dont vous connaissez bien le contexte. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    steps: [
      { title: 'Semaine 1', actions: ["Réception : une vraie livraison documentée avec le GRN, la décision par ligne, le message fournisseur si nécessaire, l'écriture ERP et le rapprochement avant paiement."] },
      { title: 'Semaine 2', actions: ["Plan par zones, fiches de stock, registre des lots avec alertes, et un test de rappel de lot sur un article réel."] },
      { title: 'Semaine 3', actions: ["Un DN et un bon de carburant réels ; un inventaire (complet ou tournant) avec rapport de réconciliation ; le rapport de stock du mois."] },
      { title: 'Semaine 4', actions: ["Matrice « qui fait / qui contrôle / quelle preuve » validée par votre supérieur."] },
    ],
    tip: "Anonymisez les données sensibles (noms de fournisseurs, prix, noms du personnel) si vous partagez votre travail en dehors de votre organisation.",
    deliverable: "Votre propre kit d'entrepôt (L1 à L9), réutilisable à chaque nouvelle affectation.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Le GRN a ses huit champs d'en-tête renseignés, une ligne par lot, une quantité reçue saisie à zéro quand l'article manque, et une décision au libellé exact avec quantités acceptée, rejetée et non livrée.",
      "Chaque observation de la colonne K cite le nombre d'unités contrôlées, le lot, la péremption et les photos ; le GRN est signé par les deux parties avant le départ du camion.",
      "Le message au fournisseur tient en 5 à 8 lignes et ses chiffres sont identiques à ceux du GRN ; le registre des réclamations a une échéance et un statut.",
      "L'ERP porte les quantités acceptées avec la référence du GRN, saisies le jour de la réception ; le rapprochement PO – GRN – facture est fait avant paiement.",
      "Le registre des lots relie chaque lot à son GRN et à ses DN, calcule le stock par formule, et affiche les alertes de péremption.",
      "Chaque DN a une IR approuvée, le lot servi en remarque, les lignes inutilisées barrées et quatre signatures ; chaque bon de carburant a trois signatures et un compteur.",
      "Le rapport de réconciliation donne, pour chaque écart, le comptage, le registre, l'écart avec son signe, une cause prouvée par un document, une action corrective datée avec responsable, une mesure préventive et la validation du superviseur.",
      "Le tableau de mouvements du rapport de stock boucle pour chaque article (initial + entrées − sorties − pertes = final) et chaque alerte a une action et un responsable.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, CLÔTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Signer le bon de livraison du transporteur avant vérification complète : une fois signé, un écart découvert cinq minutes plus tard est presque impossible à faire valoir. → Signez en dernier, avec la mention « reçu sous réserves — voir GRN » en cas d'écart.",
      "Mal documenter un rejet : « carton abîmé, refusé » sans quantité, lot, photo ni signature est une source de litige. → Constat chiffré, lot, motif, photos numérotées, signature du chauffeur.",
      "Réconcilier « sur papier », en ajustant le chiffre ERP sans comptage physique. → Comptage à l'aveugle en double, puis comparaison avec l'ERP, puis rapport signé.",
      "Traiter comptage et contrôle qualité en une seule passe accélérée. → Deux passes distinctes, la quantité d'abord, la qualité ensuite.",
      "Ne pas relever les lots à la réception. → Une ligne de GRN par lot, relevé dans le registre des lots et sur chaque DN.",
      "Saisir l'ERP à la quantité de la PO ou du packing list. → Saisir les quantités acceptées au GRN, le jour de la réception, avec la référence du GRN.",
      "Lire le statut du template comme une décision : un statut CONFORME ne mesure que la quantité. → Combiner statut et contrôle qualité ; saisir 0 pour un article manquant ; ne jamais interpréter l'écart total.",
      "Laisser le lot qui expire en premier au fond du hangar. → FEFO : liste de prélèvement triée par péremption, alertes à 90, 60 et 30 jours, PV de destruction.",
      "Corriger un DN à la main sans le ressaisir dans l'ERP, ou laisser partir un véhicule avant les signatures. → Correction paraphée et ressaisie ; quatre signatures avant le départ ; trois signatures pour le carburant.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez réceptionné une livraison contre trois documents, mené un contrôle qualité en deux passes et rempli le GRN champ par champ, avec une décision motivée pour chaque ligne.",
      "Vous avez écrit un message de réclamation chiffré, ouvert un registre des réclamations et retenu le paiement des quantités non acceptées.",
      "Vous avez enregistré la réception dans l'ERP à la quantité acceptée, référencée au GRN, et rapproché PO, GRN et facture avant paiement.",
      "Vous avez organisé l'entrepôt en zones, codé les emplacements, surveillé les conditions de conservation et tenu les fiches de stock.",
      "Vous avez construit un registre des lots qui relie GRN, stock et DN, appliqué FEFO, traité les périmés et simulé un rappel de lot en dix minutes.",
      "Vous avez tracé chaque sortie par un DN signé par quatre parties et chaque plein par un bon de carburant, rapproché la cuve du mois.",
      "Vous avez réalisé un inventaire, enquêté sur chaque écart, rédigé le rapport de réconciliation, produit le rapport de stock mensuel et la matrice des contrôles.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi une réception se vérifie contre trois documents (PO, packing list, comptage physique) et non contre un seul.",
      "Je sais mener un contrôle qualité documenté à la réception et distinguer acceptation totale, acceptation partielle et rejet total.",
      "Je sais pourquoi un rejet doit toujours être justifié par écrit, avec quantité et motif précis, avant le départ du transporteur.",
      "Je comprends la différence entre le suivi de lot pour la rotation physique en entrepôt et le suivi de lot comme outil de traçabilité SCM.",
      "J'ai complété un bon de réception et contrôle qualité avec le template fourni, en laissant le calcul d'écart guider ma décision sans oublier le contrôle qualité.",
      "J'ai rédigé un rapport de réconciliation d'inventaire complet et cohérent avec le template fourni.",
      "Je sais identifier, dans une réception réelle, les informations à documenter en priorité pour rester audit-ready plusieurs mois plus tard.",
      "Mon registre des lots, mes fiches de stock et mon rapport de stock sont prêts : ils serviront de base au module suivant sur la distribution.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Prochain module : « Distribution & Last-Mile Delivery ». Vous y partirez du stock que vous venez de fiabiliser pour planifier la distribution de l'entrepôt au point de distribution, tenir les listes de bénéficiaires et gérer les incidents et les retours de la communauté.",
  },
]
