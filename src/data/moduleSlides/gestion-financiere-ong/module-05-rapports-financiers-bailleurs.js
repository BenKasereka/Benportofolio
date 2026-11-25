// Module 05 — Rapports Financiers pour Bailleurs
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (gabarit-rapport-financier-bailleur.xlsx, checklist-reconciliation-finance-programme.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique : le projet ECHO « Assistance NFI Kitchanga » de l'ONG fictive « Kivu
// Avenir Solidarité » (KAS, bureau de Goma, déjà rencontrée aux modules 01 et
// 02), avec exemples remplis, résultat attendu, astuces et erreurs à éviter.
// Les organisations, personnes, numéros de contrat et montants sont fictifs ;
// seuls les bailleurs et standards du secteur (ECHO, USAID/BHA, PAM…) sont
// nommés comme tels.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Rapports Financiers pour Bailleurs',
    hook: "Un rapport financier bailleur n'est jamais un simple exercice de fin de trimestre : c'est ce qui décide si votre organisation garde ou perd la confiance de qui la finance. À la fin de ce module, vous aurez produit un rapport financier ECHO complet (gabarit rempli, justificatifs contrôlés pièce par pièce), une checklist de réconciliation finance-programme signée par les deux fonctions, un dossier de soumission archivé et un calendrier de clôture qui vous évite de découvrir une échéance la veille.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Produire un rapport financier structuré selon les attentes d'un bailleur institutionnel (UE/ECHO, avec ses adaptations USAID/BHA et agence onusienne), en remplissant le gabarit gabarit-rapport-financier-bailleur.xlsx jusqu'à une synthèse sans rubrique à justificatifs incomplets.",
      "Justifier n'importe quelle dépense avec le jeu de pièces complet exigé par l'auditeur (contrat ou bon de commande, facture, preuve de paiement : le « 3-way match »), en produisant un registre de contrôle par pièce avec un statut Complet / À confirmer et une action pour chaque écart.",
      "Réconcilier le rapport financier avec le rapport programmatique avant toute soumission, en complétant et en faisant signer par la finance ET le programme la checklist-reconciliation-finance-programme.docx, avec une justification d'écart d'une demi-page maximum.",
      "Distinguer les exigences de format, de devise et de délai de chaque grand bailleur, en produisant une fiche d'exigences par bailleur et en convertissant un même socle comptable vers le format ECHO, SF-425 ou FACE form.",
      "Anticiper le cycle de clôture comptable mensuelle, en produisant un rétro-planning daté qui chiffre la marge réelle entre votre clôture interne et chaque échéance bailleur.",
      "Soumettre, archiver et suivre un rapport bailleur dans les règles, en produisant un dossier daté contenant le rapport déposé, sa preuve de dépôt, le jeu de pièces et la trace des retours du bailleur.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module est un atelier, pas un cours de théorie : chaque procédure se termine par un livrable concret, construit sur un seul cas fil rouge, de l'ouverture de l'accord de financement jusqu'à l'archivage du rapport déposé.",
      "Le cas fil rouge : vous êtes Finance Officer de « Kivu Avenir Solidarité » (KAS), l'ONG fictive des modules 01 et 02. Nous sommes le vendredi 10 avril 2026. Le rapport trimestriel du projet ECHO « Assistance NFI Kitchanga » doit être déposé le mercredi 15 avril. Au moment d'ouvrir le gabarit, vous allez découvrir un écart de 400 ménages entre le narratif et la finance.",
    ],
    bullets: [
      "Livrable 1 — La fiche d'exigences du bailleur (format, fréquence, portail, devise, taux, délai, règle de flexibilité) et l'accès au portail testé.",
      "Livrable 2 — Le dossier de justification : registre de contrôle du 3-way match avec statut et action pour chaque pièce échantillonnée.",
      "Livrable 3 — Le gabarit gabarit-rapport-financier-bailleur.xlsx rempli (onglets « Rapport Financier » et « Synthèse »).",
      "Livrable 4 — La checklist de réconciliation finance-programme complétée et signée, avec la justification de l'écart.",
      "Livrable 5 — Le rapport relu, déposé sur le portail, archivé avec sa preuve de dépôt.",
      "Livrable 6 — Le calendrier de clôture : marge réelle et rétro-planning pour chaque échéance bailleur.",
      "Livrable 7 — La conversion du même socle chiffré vers le format SF-425 et le FACE form.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : le projet ECHO « Assistance NFI Kitchanga »',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. Les personnes, le contrat et les montants sont fictifs, mais construits sur des configurations réelles de projets NFI de l'Est de la RDC.",
    table: {
      columns: ['Élément', 'Détail'],
      rows: [
        ['Projet', 'Assistance NFI Kitchanga (code NFK) : distribution de kits (bâches, couvertures, ustensiles, jerricans) à 4 500 ménages déplacés, zone de Kitchanga, territoire de Masisi, Nord-Kivu'],
        ['Bailleur / contrat', 'UE/ECHO — contrat ECHO-KAS-2025-017 (fictif), budget 263 000 EUR'],
        ['Durée', '12 mois : du 1er juillet 2025 au 30 juin 2026. Le trimestre à rapporter est le trimestre 3 : 1er janvier au 31 mars 2026'],
        ['Devise et taux', 'Contrat en EUR. Taux fixe contractuel : 1 EUR = 1,10 USD = 3 080 CDF. Comptabilité tenue en USD au bureau de Goma'],
        ['Échéance', 'Rapport trimestriel à déposer le mercredi 15 avril 2026 via le portail du bailleur. Clôture comptable interne de mars : terminée le 8 avril'],
        ['Équipe', 'Grace M., Finance Manager (relecture et signature) — Aimé T., coordinateur NFI (référent programme) — Fiston R., chargé du suivi-évaluation (base de distribution) — Patrick K., logisticien — Esther N., caissière — vous, Finance Officer'],
      ],
    },
    example: {
      title: 'La situation au 10 avril 2026 (avant correction)',
      lines: [
        "Dépenses cumulées dans la comptabilité : 209 150 EUR sur 263 000 EUR de budget (79,5 %) pour 9 mois sur 12 écoulés (75 %).",
        "Rapport narratif de Aimé T. : 4 200 ménages desservis à date. Dépenses de distribution (rubrique B) : correspondent à 3 800 ménages.",
        "Écart à expliquer avant mercredi : 400 ménages.",
      ],
    },
    tip: "Ce projet est distinct des trois projets du bureau de Goma du module 01 et du projet Masisi du module 02 : il est mis en œuvre depuis la base de Kitchanga, mais sa comptabilité est tenue à Goma, avec la grille de codification du module 01.",
  },
  {
    type: 'concept',
    title: 'Le calendrier du fil rouge',
    body: "Le module suit les cinq jours qui séparent le 10 avril de l'échéance du 15 avril. Repérez, pour chaque journée, la procédure qui s'applique.",
    table: {
      columns: ['Date', 'Situation', 'Procédures'],
      rows: [
        ['Mercredi 8 avril', "Clôture comptable de mars terminée. Le calendrier de rapportage n'a pas été relu depuis la signature du contrat.", '1 et 6'],
        ['Vendredi 10 avril', "Grace M. vous demande le rapport ECHO pour mercredi. Vous cadrez les exigences, extrayez les écritures et lancez le contrôle des pièces.", '1 et 2'],
        ['Lundi 13 avril', "Gabarit rempli. Réconciliation avec le narratif : l'écart de 400 ménages apparaît.", '3 et 4'],
        ['Mardi 14 avril', 'Écart résolu, justificatifs complétés, relecture par Grace M., signatures finance et programme.', '4 et 5'],
        ['Mercredi 15 avril', 'Dépôt avant 12 h sur le portail, preuve de dépôt, archivage.', '5'],
        ['Après le dépôt', 'Calendrier de clôture des trimestres suivants ; adaptation du même socle aux formats SF-425 et FACE.', '6 et 7'],
      ],
    },
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Pourquoi chaque bailleur impose son propre format',
    body: [
      "La première réaction d'un Finance Officer junior devant un canevas ECHO de plusieurs onglets, puis un SF-425 de deux pages, puis un FACE form onusien, est de penser que chaque bailleur complique les choses pour le plaisir de l'administration. Ce n'est pas le cas : chaque format existe parce que le bailleur doit lui-même rendre des comptes à son Parlement, à son Congrès, à ses États membres, à ses contribuables.",
      "Le format que vous remplissez n'est jamais la fin de la chaîne : c'est un maillon d'une chaîne de traçabilité de fonds publics qui remonte jusqu'à un citoyen qui paie ses impôts.",
    ],
    highlight: "Ne partez jamais du principe qu'un format vu chez un bailleur vous servira chez un autre. Vérifiez l'annexe qui décrit le format de rapportage exigé dès la signature de l'accord, avant même le premier décaissement.",
    tip: "Conséquence pratique : votre comptabilité analytique (module 01) et votre tableau de suivi budgétaire BFU (module 02) sont le socle UNIQUE. Chaque rapport bailleur n'en est qu'une extraction reformatée.",
  },
  {
    type: 'comparison-table',
    title: 'Trois familles de format cohabitent sur le terrain',
    columns: ['Bailleur', 'Format exigé', 'Particularité'],
    rows: [
      ['USAID/BHA', 'SF-425 (Federal Financial Report)', "Formulaire fédéral court (1 à 2 pages), en comptabilité d'engagement, soumis en général trimestriellement via le portail de l'award. Il engage votre signature légale sur chaque montant."],
      ['UE/ECHO', 'Single Form (portail e-SF/APPEL)', "Rapport financier intégré au rapport narratif, structuré par grandes rubriques, avec 10 % de flexibilité budgétaire entre rubriques sans avenant, et un taux de change fixe défini au démarrage."],
      ['Agences onusiennes (PAM, UNICEF, HCR)', 'FACE form (cadre HACT)', 'Format harmonisé inter-agences qui certifie les dépenses par rapport aux avances de trésorerie reçues, ligne budgétaire par ligne budgétaire.'],
    ],
  },
  {
    type: 'stat-callout',
    stat: '10 %',
    caption: 'Flexibilité budgétaire ECHO entre rubriques, sans avenant formel',
    context: "Au-delà de ce seuil, un amendement au contrat devient obligatoire. C'est une règle spécifique à ECHO, pas une norme universelle : d'autres bailleurs ont des seuils différents, voire aucune tolérance. Lisez toujours la clause exacte de votre convention.",
  },
  {
    type: 'concept',
    title: 'ECHO en pratique : ce qui change votre façon de travailler',
    body: [
      "Chez ECHO, le rapport financier n'est pas un document séparé : il est intégré au Single Form, l'outil de rapportage narratif ET financier, aujourd'hui soumis via le portail en ligne (e-SF/APPEL). Le narratif et le financier sont donc visibles ensemble par le même lecteur : toute incohérence saute aux yeux.",
      "Le budget est structuré par grandes rubriques (ressources humaines, transport, équipement, fonctionnement…). Entre rubriques, vous disposez d'une flexibilité de 10 % sans avenant. Enfin, le contrat impose un taux de change fixe défini au démarrage : vous ne convertissez jamais au taux du jour.",
    ],
    example: {
      title: 'Ce que cela donne sur le projet NFK',
      lines: [
        "8 rubriques A à H (ressources humaines, transport & distribution, équipement & fournitures NFI, fonctionnement, formation, suivi-évaluation, support, imprévus) : ce sont les lignes du gabarit du module.",
        "Dépense locale de 12 320 000 CDF : 12 320 000 / 3 080 = 4 000 EUR au taux contractuel, quel que soit le taux du jour.",
        "Dépense de 4 400 USD : 4 400 / 1,10 = 4 000 EUR.",
      ],
    },
    pitfall: "Convertir au taux du jour « pour être plus juste ». Le rapport ne se rapprochera plus du budget contractuel, et l'écart de change sera lu par le bailleur comme une erreur.",
  },
  {
    type: 'concept',
    title: 'SF-425 (USAID/BHA) : un formulaire court qui engage votre signature',
    body: [
      "Le SF-425 (Federal Financial Report) est un formulaire fédéral standardisé : quelques pages de chiffres agrégés, en comptabilité d'engagement, soumis en général trimestriellement. Il ne détaille pas les dépenses : il les agrège. C'est précisément pour cela qu'il doit être adossé à une comptabilité analytique capable de justifier chaque montant, parfois plusieurs années après la clôture.",
      "La logique des lignes de transactions : ce qui a été décaissé, ce qui est engagé mais pas encore payé, le total (part du bailleur) et le solde non engagé par rapport au montant autorisé. Ajoutez le taux et la base des frais indirects, une zone de remarques, et la certification de la personne habilitée.",
    ],
    table: {
      columns: ["Bloc (version à vérifier auprès de l'agent de l'award)", "Ce qu'on y reporte", "D'où vient le chiffre chez vous"],
      rows: [
        ['Identification', "Award, organisation, période de l'award, date de fin de la période rapportée", 'Accord de financement, calendrier'],
        ['Base comptable', "Engagement (accrual)", "Votre comptabilité d'engagement, pas la caisse"],
        ['Transactions', 'Décaissements cumulés, obligations non liquidées, total, solde non engagé', 'Grille de codification + registre des engagements'],
        ['Frais indirects', 'Taux, base, montant imputé', "Clé et taux fixés par l'award"],
        ['Remarques et certification', "Explications d'écarts ; signature", 'Note de justification ; personne habilitée'],
      ],
    },
    tip: "Un SF-425 qui ne se rapproche pas du rapport précédent ligne à ligne déclenche des questions : gardez toujours le précédent sous les yeux.",
  },
  {
    type: 'concept',
    title: 'FACE form (agences onusiennes) : certifier les dépenses contre les avances',
    body: [
      "Le FACE form (Funding Authorization and Certificate of Expenditures) est un format harmonisé inter-agences né du cadre HACT (Harmonized Approach to Cash Transfers). Il sert à deux choses : autoriser le financement d'une période, et certifier les dépenses réellement faites par rapport aux avances de trésorerie reçues, ligne budgétaire par ligne budgétaire.",
      "Le raisonnement n'est donc pas « combien ai-je consommé du budget total », mais « sur l'avance reçue, combien ai-je dépensé, combien reste-t-il à justifier, et quelle nouvelle avance puis-je demander ». La certification est signée par une personne habilitée de votre organisation.",
    ],
    example: {
      title: "Logique d'une ligne de FACE form (valeurs fictives)",
      lines: [
        "Avance reçue pour la période : 30 000 USD",
        "Dépenses certifiées sur la période : 24 500 USD",
        "Solde d'avance non justifié : 5 500 USD, à déduire de la prochaine demande d'avance",
      ],
    },
    pitfall: "Demander une nouvelle avance alors que la précédente n'est pas justifiée : l'agence suspendra le versement. Suivez le taux de justification de chaque avance comme un indicateur à part.",
  },
  {
    type: 'concept',
    title: 'Au-delà des trois familles : FCDO (ex-DFID) et bailleurs privés',
    body: [
      "Les bailleurs bilatéraux comme le FCDO britannique (anciennement DFID) et les fondations privées utilisent souvent leur propre modèle de rapport financier, annexé à l'accord : tableau budget / dépenses / écart par ligne, parfois accompagné d'une prévision de dépenses jusqu'à la fin et d'une explication écrite des écarts.",
      "Les principes de ce module s'appliquent partout : même socle comptable, même 3-way match, même réconciliation avec le narratif. Seuls changent le gabarit, la fréquence, la devise et le seuil de flexibilité.",
    ],
    bullets: [
      "Premier réflexe : lire l'annexe de rapportage et la clause de flexibilité de l'accord, pas votre mémoire d'un autre bailleur.",
      "Deuxième réflexe : demander par écrit au chargé de programme du bailleur toute règle ambiguë, et archiver sa réponse.",
      "Troisième réflexe : un bailleur privé peut avoir des règles plus souples sur la forme mais plus strictes sur l'usage des fonds : ne supposez rien.",
    ],
    pitfall: "Réutiliser tel quel le fichier du bailleur précédent. Les rubriques portent parfois le même nom mais pas le même contenu.",
  },
  {
    type: 'concept',
    title: 'Le principe du 3-way match',
    body: [
      "Qu'il s'agisse d'un audit USAID, d'une vérification ECHO ou d'un contrôle interne du siège, la question posée face à une dépense est toujours la même : prouvez que cet argent a été dépensé exactement comme prévu, pour ce qui était prévu, au prix convenu.",
      "Le 3-way match recoupe trois documents qui doivent raconter rigoureusement la même histoire : le contrat ou bon de commande (ce qui a été commandé, à quel prix), la facture du fournisseur (ce qui a été livré ou presté), et la preuve de paiement (le décaissement réel, avec un montant et une date cohérents).",
    ],
    highlight: "Si un seul des trois documents manque, ou si les montants ne se recoupent pas sans explication écrite, la dépense est inéligible aux yeux d'un auditeur, même si l'argent a réellement servi le projet sur le terrain.",
    pitfall: "Croire que le 3-way match est un exercice de fin de projet. C'est une discipline de tous les jours : chaque dépense doit être « match-able » au moment où elle est engagée, pas reconstituée six mois plus tard à partir de la mémoire de l'équipe.",
  },
  {
    type: 'stat-callout',
    stat: '3 sur 3',
    caption: 'Trois pièces, aucune exception : contrat ou BC, facture, preuve de paiement',
    context: "Un logisticien qui achète 200 bâches en urgence un dimanche avec un reçu manuscrit non détaillé, sans bon de commande préalable ni photo de livraison, expose l'organisation à un rejet pur et simple, des mois plus tard : le fournisseur a disparu, le chauffeur a changé de numéro, personne ne se souvient.",
  },
  {
    type: 'concept',
    title: "Le dossier d'achat : ce qui précède le bon de commande",
    body: [
      "Le 3-way match prouve que l'argent est sorti comme prévu. Mais l'auditeur demande aussi pourquoi CE fournisseur a été choisi : c'est le processus d'achat. Le bon de commande n'est que la dernière pièce d'un dossier qui commence par la demande d'achat.",
    ],
    table: {
      columns: ['Pièce du dossier', "Ce qu'elle prouve", 'Exemple (fil rouge)'],
      rows: [
        ["Demande d'achat (DA)", 'Le besoin a été exprimé et approuvé par le projet', 'DA-2025-044 signée par Aimé T.'],
        ['Devis comparatifs', "La mise en concurrence au-dessus du seuil de la politique d'achat", '3 devis couvertures, tableau comparatif signé'],
        ['Bon de commande ou contrat', 'Ce qui a été commandé, au prix retenu', 'BC-2025-131 : 4 500 couvertures × 6,40 EUR'],
        ['Bon de réception', 'Ce qui a été réellement reçu, vérifié par le magasinier', 'BR-2025-078 : 4 500 couvertures reçues'],
        ['Facture', 'Ce que le fournisseur réclame', 'FGL-2210'],
        ['Preuve de paiement', 'Ce qui a été décaissé', 'Avis de virement VIR-0954'],
      ],
    },
    tip: "Seuils de mise en concurrence : appliquez ceux de la politique d'achat de votre organisation ET ceux du bailleur (le plus strict l'emporte). Pour la suite de l'exemple, KAS exige 3 devis au-dessus de 1 500 EUR (fictif).",
  },
  {
    type: 'concept',
    title: 'Pourquoi finance et programme doivent raconter la même histoire',
    body: [
      "Exemple type : le rapport narratif annonce fièrement que 4 200 ménages ont reçu une distribution de kits, pendant que le rapport financier ne reflète que le coût correspondant à 3 500 kits, parce que l'équipe programme a mis à jour son chiffre de bénéficiaires après une vérification terrain, sans en informer la finance.",
      "Un bailleur qui repère cette incohérence ne se dit pas « erreur de communication interne ». Il se dit : soit l'organisation ne sait pas compter ses bénéficiaires, soit elle ne sait pas compter son argent. Dans les deux cas, sa gestion globale est en question.",
    ],
    highlight: "Cette perte de confiance ne se limite jamais au rapport concerné : elle contamine l'ensemble de la relation avec le bailleur, jusqu'aux prochains cycles de financement.",
  },
  {
    type: 'concept',
    title: "Charges à payer et coupure de période : pourquoi une facture d'avril peut appartenir à mars",
    body: [
      "Le SF-425 est en comptabilité d'engagement, et la plupart des bailleurs attendent qu'une dépense soit rattachée à la période où le service a été rendu ou le bien livré, pas à celle où la facture arrive ou est payée. Une facture reçue en avril pour des prestations faites en mars doit donc être comptabilisée en mars sous forme de charge à payer (la dépense existe, elle n'est pas encore facturée ou payée).",
      "C'est la « coupure de période » (cut-off) : avant chaque rapport, vérifiez les factures reçues après la clôture, et les livraisons de fin de période pas encore facturées. Vérifiez aussi dans votre convention comment le bailleur définit la date de la dépense : l'éligibilité dépend de cette définition.",
    ],
    example: {
      title: 'Test de coupure rapide à faire avant chaque rapport',
      lines: [
        "1. Listez les factures reçues entre le 1er et le 10 du mois suivant la période.",
        "2. Pour chacune, lisez la date de livraison ou de prestation sur la pièce ou le bon de réception.",
        "3. Si la date est dans la période rapportée : charge à payer à comptabiliser dans la période.",
        "4. Si la date est après : rien à faire, la dépense appartient à la période suivante.",
      ],
    },
    pitfall: "Classer une facture reçue le 6 avril dans le dossier « à saisir en avril » sans lire la date de prestation. C'est exactement l'origine de l'écart du fil rouge.",
  },
  {
    type: 'concept',
    title: "Le cycle de clôture mensuelle : la vraie marge avant l'échéance",
    body: [
      "Si votre clôture comptable interne se termine le 5 du mois suivant, mais que le bailleur exige un rapport trimestriel pour le 10, vous n'avez que 5 jours de marge, pas un mois. Cette marge doit être connue et planifiée dès la signature du contrat, pas découverte à la première échéance qui approche.",
      "Chez KAS, la clôture de mars se termine le 8 avril et l'échéance ECHO est le 15 avril : 7 jours calendaires, soit 5 jours ouvrés dont le jour de dépôt (9, 10, 13, 14 et 15 avril).",
    ],
    example: {
      title: 'Calcul de la marge réelle (fil rouge)',
      lines: [
        "Échéance bailleur : mercredi 15 avril 2026",
        "Clôture interne terminée : mercredi 8 avril 2026",
        "Marge = 7 jours calendaires = 5 jours ouvrés (jeudi 9, vendredi 10, lundi 13, mardi 14, mercredi 15)",
        "Travail à loger dans cette marge : extraction, 3-way match, gabarit, réconciliation, relecture, dépôt.",
      ],
    },
    highlight: "Plus la marge est courte, plus le travail doit être fait avant la clôture, au fil de l'eau.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'SF-425', definition: "Federal Financial Report, formulaire standard de rapportage financier des awards USAID, soumis en comptabilité d'engagement." },
      { term: 'Single Form / e-SF', definition: "Outil de rapportage narratif ET financier intégré d'ECHO, soumis via le portail APPEL en ligne." },
      { term: 'FACE form', definition: "Funding Authorization and Certificate of Expenditures : format harmonisé de certification des dépenses des agences onusiennes (cadre HACT)." },
      { term: 'HACT', definition: "Harmonized Approach to Cash Transfers : cadre commun des agences onusiennes pour les transferts de fonds aux partenaires." },
      { term: '3-way match', definition: "Recoupement obligatoire contrat/bon de commande, facture et preuve de paiement pour qu'une dépense soit éligible." },
      { term: "Dossier d'achat", definition: "Ensemble des pièces du processus d'achat : demande d'achat, devis comparatifs, bon de commande ou contrat, bon de réception." },
      { term: 'Règle de flexibilité budgétaire', definition: "Marge autorisée par un bailleur (10 % chez ECHO, seuils variables ailleurs) pour transférer des fonds d'une rubrique à une autre sans avenant formel." },
      { term: 'Réconciliation finance-programme', definition: "Vérification croisée, avant soumission, que les chiffres du rapport financier et les résultats du rapport narratif racontent la même réalité de terrain." },
      { term: 'Charge à payer', definition: "Dépense dont le service a été rendu dans la période mais dont la facture ou le paiement arrive après : elle est rattachée à la période du service." },
      { term: 'Coupure de période (cut-off)', definition: "Contrôle qui garantit que chaque dépense est comptabilisée dans la période où elle a été engagée, ni avant ni après." },
      { term: 'Taux de change contractuel', definition: "Taux fixé dans l'accord de financement et appliqué à toutes les conversions du rapport, quel que soit le taux du jour." },
      { term: 'Rétro-planning', definition: "Planning construit à rebours à partir de la date limite, avec une tâche, un responsable et une date pour chaque étape." },
    ],
  },
  {
    type: 'concept',
    title: "Votre feuille de route : 7 procédures, dans l'ordre du terrain",
    body: "Les procédures suivent l'ordre réel d'un cycle de rapportage : on cadre le bailleur, on justifie les dépenses, on remplit le gabarit, on réconcilie avec le programme, on soumet et on archive, on planifie les prochains cycles, et on adapte le socle à d'autres formats.",
    table: {
      columns: ['Procédure', 'Moment', 'Livrable', 'Étapes'],
      rows: [
        ['1. Cadrer les exigences du bailleur', 'À la signature, relu avant chaque rapport', "Fiche d'exigences + accès portail testé", '5'],
        ['2. Constituer et contrôler le dossier de justification', 'Chaque période, avant le gabarit', 'Registre du 3-way match', '6'],
        ['3. Compléter le gabarit rapport financier', 'Chaque période', 'Gabarit rempli + Synthèse à zéro', '7'],
        ['4. Réconcilier finance et programme', 'Avant toute soumission', 'Checklist signée + justification', '8'],
        ['5. Relire, soumettre et archiver', 'J-1 à J, puis dans l\'heure', 'Dossier déposé et archivé', '5'],
        ['6. Piloter le cycle de clôture et les échéances', "Début d'année, puis chaque mois", 'Rétro-planning + marge chiffrée', '4'],
        ['7. Adapter le socle au SF-425 et au FACE form', "Dès qu'un bailleur change de format", 'Rapports convertis, tie-out validé', '3'],
      ],
    },
  },

  // ─────────────── PROCÉDURE 1 — Cadrer les exigences du bailleur ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: "Rassembler l'accord de financement et son annexe de rapportage",
    intro: "Le rapport se prépare avant la période, pas pendant. La première chose à vérifier à la signature d'un accord, avant même le premier décaissement, est l'annexe qui décrit le format de rapportage, sa fréquence et son support de soumission : c'est votre feuille de route financière pour toute la durée du projet. Entrées : l'accord signé, ses annexes et ses avenants.",
    steps: [
      {
        title: 'Retrouver les documents faisant foi',
        actions: [
          "Demandez à Grace M. ou au coordinateur la dernière version SIGNÉE du contrat, de son budget et de chaque avenant (pas la version de négociation).",
          "Classez-les dans un dossier unique « 00_Accord » avec un nom normalisé : NFK_ECHO-KAS-2025-017_Contrat_signé.pdf.",
          "Notez la date de signature et la liste des avenants : la version applicable est la plus récente signée.",
        ],
      },
      {
        title: 'Repérer les trois zones à lire en priorité',
        actions: [
          "L'annexe de rapportage : format, fréquence, délais, langue, signataire.",
          "La clause financière : devise, taux de change, base comptable, flexibilité budgétaire, éligibilité des coûts.",
          "La clause de conservation des documents : durée d'archivage et droit d'audit du bailleur.",
        ],
      },
    ],
    example: {
      title: 'Dossier « 00_Accord » du projet NFK',
      lines: [
        "NFK_ECHO-KAS-2025-017_Contrat_signé_2025-06-20.pdf",
        "NFK_ECHO-KAS-2025-017_Annexe-Budget_signé.xlsx",
        "NFK_ECHO-KAS-2025-017_Annexe-Rapportage.pdf",
        "NFK_ECHO-KAS-2025-017_Avenant-1_signé_2025-11-05.pdf (prolongation du délai de dépôt de 10 à 15 jours)",
      ],
    },
    result: "Un dossier d'accord complet, daté, dont vous avez lu les trois zones : annexe de rapportage, clause financière, clause de conservation.",
    pitfall: "Travailler à partir de l'e-mail qui résume l'accord. L'avenant du 5 novembre a changé le délai de dépôt : seul le document signé fait foi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: "Remplir la fiche d'exigences du bailleur",
    intro: "Une page unique, tenue à jour, qui évite de relire un contrat de 60 pages à chaque échéance. Elle sert à vous, à votre remplaçant et à la personne qui relit votre rapport. Entrées : les trois zones identifiées à l'étape 1.",
    steps: [
      {
        title: 'Créer la fiche',
        actions: [
          "Ouvrez un document d'une page, intitulé « Fiche d'exigences — NFK — ECHO ».",
          "Créez 10 lignes : format, fréquence, échéance, portail, devise, taux de change, base comptable, flexibilité budgétaire, signataire, archivage.",
          "Pour chaque ligne, écrivez la valeur ET l'article du contrat qui la fonde.",
        ],
      },
      {
        title: 'Faire valider la fiche',
        actions: [
          "Envoyez la fiche à Grace M. : « Merci de confirmer ces 10 points avant que je construise le calendrier. »",
          "Archivez sa réponse avec la fiche.",
        ],
      },
    ],
    table: {
      columns: ['Exigence', 'Valeur pour NFK', 'Source (fictive)'],
      rows: [
        ['Format', 'Single Form ECHO, volet financier', 'Annexe rapportage, art. 2'],
        ['Fréquence', 'Trimestrielle', 'Annexe rapportage, art. 3'],
        ['Échéance', '15 du mois suivant la fin du trimestre (T3 : 15 avril 2026)', 'Avenant 1'],
        ['Portail', 'e-SF/APPEL, accès nominatifs', 'Annexe rapportage, art. 5'],
        ['Devise', 'EUR', 'Contrat, art. 9.1'],
        ['Taux de change', 'Fixe : 1 EUR = 1,10 USD = 3 080 CDF', 'Contrat, art. 9.3'],
        ['Base comptable', 'Engagement (dépenses rattachées à la période du service rendu)', 'Contrat, art. 9.5'],
        ['Flexibilité', '10 % entre rubriques sans avenant ; au-delà, avenant', 'Contrat, art. 8.2'],
        ['Signataire', 'Représentant légal de KAS ou délégataire désigné', 'Contrat, art. 12'],
        ['Archivage', "7 ans après le paiement du solde, accès du bailleur et des auditeurs", 'Contrat, art. 14.2'],
      ],
    },
    result: "Une fiche d'une page, validée, qui répond en 10 lignes à : dans quel format, pour quand, par quel canal, avec quelles règles de devise et de flexibilité ?",
    tip: "Quand une règle est ambiguë, écrivez la question au chargé de programme du bailleur et archivez sa réponse : un e-mail de confirmation vaut de l'or en audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Identifier le portail de soumission et sécuriser les accès',
    intro: "Le portail du bailleur est le point d'entrée officiel et souvent le seul canal accepté pour un rapport financier : Payment Management System pour USAID, portail e-SF/APPEL pour ECHO, plateforme de l'agence pour un FACE form onusien. Certains portails demandent une validation d'identité qui prend plusieurs jours : testez votre connexion bien avant l'échéance.",
    steps: [
      {
        title: 'Obtenir les accès nominatifs',
        actions: [
          "Identifiez qui dépose le rapport (en général le Finance Manager ou le coordinateur) et qui le prépare (vous).",
          "Demandez à l'administrateur du compte organisation de créer ou de valider chaque accès nominatif.",
          "Notez dans la fiche d'exigences le nom du titulaire et la date de validité de l'accès.",
        ],
      },
      {
        title: 'Tester la connexion et le dépôt à blanc',
        actions: [
          "Connectez-vous au moins 15 jours avant l'échéance.",
          "Ouvrez le formulaire du trimestre à rapporter et vérifiez que les rubriques correspondent au budget signé.",
          "Repérez les formats de fichier acceptés, la taille maximale et la règle de nommage éventuelle.",
          "Faites un téléchargement de test d'un fichier fictif si le portail l'autorise, puis supprimez-le.",
        ],
      },
    ],
    example: {
      title: 'Journal de test des accès NFK (extrait)',
      lines: [
        "25/03/2026 — Grace M. : connexion e-SF OK, droits de dépôt OK",
        "25/03/2026 — Vous : connexion OK, droits de lecture seule (suffisant pour préparer)",
        "25/03/2026 — Format de pièce jointe : PDF et XLSX, 10 Mo maximum par fichier",
      ],
    },
    result: "Les personnes qui déposent ont un accès testé, les formats et tailles autorisés sont notés, et aucune surprise de connexion n'est possible le jour J.",
    pitfall: "Découvrir le jour de l'échéance qu'un mot de passe a expiré ou qu'un accès nominatif doit être revalidé. Une échéance ratée pour un problème d'accès reste une échéance ratée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: "Lire les clauses de devise, de flexibilité et d'éligibilité",
    intro: "Ces trois clauses décident de vos chiffres : dans quelle devise, à quel taux, avec quelle liberté de déplacer des fonds, et quelles dépenses sont acceptées. Les confondre avec celles d'un autre bailleur est l'erreur la plus fréquente. Entrées : la clause financière repérée à l'étape 1.",
    steps: [
      {
        title: 'Devise et taux',
        actions: [
          "Notez la devise de rapportage (EUR) et le taux fixe contractuel (1 EUR = 1,10 USD = 3 080 CDF).",
          "Écrivez la formule de conversion sur la fiche : montant en USD / 1,10 ; montant en CDF / 3 080.",
        ],
      },
      {
        title: 'Flexibilité budgétaire',
        actions: [
          "Recopiez mot pour mot la clause : à quoi s'applique le 10 % (ligne bénéficiaire ? budget total ?), cumulé ou non, avec ou sans notification préalable.",
          "Calculez pour chaque rubrique le plafond de dépense sans avenant : budget × (1 + 10 %).",
        ],
      },
      {
        title: 'Éligibilité',
        actions: [
          "Relevez la période d'éligibilité (dépenses engagées entre le 1er juillet 2025 et le 30 juin 2026), les coûts exclus et la définition de la date d'une dépense.",
          "Relevez la règle d'approbation préalable : par exemple, l'usage de la ligne de contingence exige l'accord écrit du bailleur.",
        ],
      },
    ],
    table: {
      columns: ['Rubrique', 'Budget (EUR)', 'Plafond sans avenant (budget + 10 %)'],
      rows: [
        ['A. Ressources humaines', '48 000', '52 800'],
        ['B. Transport & distribution', '62 000', '68 200'],
        ['C. Équipement & fournitures NFI', '95 000', '104 500'],
        ['D. Fonctionnement bureau/base', '18 000', '19 800'],
        ['E. Renforcement de capacités / formations', '9 000', '9 900'],
        ['F. Suivi-évaluation (MEAL)', '11 000', '12 100'],
        ['G. Coûts de support / overhead', '14 000', '15 400'],
        ['H. Imprévus / ligne de contingence', '6 000', '6 600'],
      ],
    },
    result: "Pour chaque rubrique, vous connaissez le plafond à ne pas franchir sans avenant, avant même d'ouvrir le gabarit.",
    pitfall: "Appliquer le 10 % ECHO à un autre bailleur. D'autres accords imposent une approbation préalable pour tout virement, sans seuil de tolérance. Chaque accord a sa règle, et c'est elle qui compte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Faire correspondre les rubriques du gabarit à celles du contrat',
    intro: "Le gabarit gabarit-rapport-financier-bailleur.xlsx est fourni avec 8 rubriques A à H. C'est le document que vous adaptez au format exact du bailleur avant chaque soumission, jamais l'inverse : ne forcez jamais les chiffres du bailleur dans une structure interne qui ne correspond pas à ce qu'il attend.",
    steps: [
      {
        title: 'Comparer les rubriques ligne à ligne',
        actions: [
          "Ouvrez le budget signé (annexe de l'accord) et listez ses rubriques avec leurs codes et leurs montants.",
          "Ouvrez le gabarit, onglet « Rapport Financier », colonnes A (numéro) et B (rubrique), lignes 12 à 19.",
          "Pour chaque rubrique du contrat, repérez la ligne du gabarit qui la porte ; notez toute différence d'intitulé, de numérotation ou de nombre de lignes.",
        ],
      },
      {
        title: 'Décider des adaptations',
        actions: [
          "Rubriques identiques : conservez l'intitulé du gabarit.",
          "Intitulé différent : remplacez le texte de la colonne B par l'intitulé EXACT du budget signé.",
          "Rubrique en plus ou en moins : n'inventez pas de colonne ; ajustez le nombre de lignes dans la zone 12 à 19 et vérifiez que les totaux et la Synthèse couvrent bien toutes les lignes.",
        ],
      },
    ],
    table: {
      columns: ['Gabarit (ligne)', 'Rubrique du contrat NFK', 'Budget signé (EUR)', 'Écart de structure'],
      rows: [
        ['1 — A. Ressources humaines', 'A. Ressources humaines', '48 000', 'Aucun'],
        ['2 — B. Transport & distribution', 'B. Transport & distribution', '62 000', 'Aucun'],
        ['3 — C. Équipement & fournitures NFI', 'C. Équipement & fournitures NFI', '95 000', 'Aucun'],
        ['4 — D. Fonctionnement bureau/base', 'D. Fonctionnement bureau/base', '18 000', 'Aucun'],
        ['5 — E. Renforcement de capacités', 'E. Renforcement de capacités / formations', '9 000', 'Aucun'],
        ['6 — F. Suivi-évaluation (MEAL)', 'F. Suivi-évaluation (MEAL)', '11 000', 'Aucun'],
        ['7 — G. Coûts de support / overhead', 'G. Coûts de support / overhead', '14 000', 'Aucun'],
        ['8 — H. Imprévus / ligne de contingence', 'H. Imprévus / ligne de contingence', '6 000', 'Aucun'],
      ],
    },
    result: "Un tableau de correspondance qui confirme que les 8 rubriques du gabarit sont celles du contrat. Total budget : 263 000 EUR.",
    tip: "Vérifiez le total avant d'aller plus loin : 48 000 + 62 000 + 95 000 + 18 000 + 9 000 + 11 000 + 14 000 + 6 000 = 263 000. S'il diffère du budget signé, vous n'utilisez pas la bonne version.",
  },

  // ─────────────── PROCÉDURE 2 — Constituer et contrôler le dossier de justification ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: "Extraire les écritures de la période et contrôler l'imputation",
    intro: "Ne touchez pas au gabarit du bailleur en premier. Commencez par extraire de votre système comptable l'intégralité des écritures, projet par projet, rubrique par rubrique. Une écriture mal codée à ce stade se répercute directement en erreur dans le rapport final. Fil rouge : vendredi 10 avril, projet NFK, cumul du 1er juillet 2025 au 31 mars 2026.",
    steps: [
      {
        title: 'Extraire',
        actions: [
          "Ouvrez la grille de codification (module 01) et filtrez : Projet = NFK, Bailleur = ECHO, dates du 2025-07-01 au 2026-03-31.",
          "Copiez le résultat dans un onglet de travail « Extraction NFK » (ne travaillez jamais dans la grille source).",
          "Contrôlez les axes vides avec la formule du module 01 : =NBVAL(A5:A2000)*3-NBVAL(D5:F2000). Le résultat doit être 0.",
        ],
      },
      {
        title: 'Totaliser par rubrique et rapprocher',
        actions: [
          "Calculez le total par rubrique avec =SOMME.SI.ENS(G:G;F:F;\"rubrique\"), en USD.",
          "Convertissez au taux contractuel : total USD / 1,10 = total EUR.",
          "Rapprochez le total général de la balance du grand livre du projet : l'écart doit être 0 ; sinon cherchez avant de continuer.",
        ],
      },
    ],
    example: {
      title: 'Totaux par rubrique au 31/03/2026 (avant toute correction)',
      lines: [
        "A. Ressources humaines : 40 150 USD / 1,10 = 36 500 EUR",
        "B. Transport & distribution : 56 320 USD / 1,10 = 51 200 EUR",
        "C. Équipement & fournitures NFI : 97 240 USD / 1,10 = 88 400 EUR",
        "D. Fonctionnement : 13 310 USD / 1,10 = 12 100 EUR — E : 4 200 EUR — F : 6 800 EUR — G : 9 950 EUR — H : 0",
        "Total : 209 150 EUR = 230 065 USD. Grand livre du projet : 230 065 USD. Écart : 0 ✔",
      ],
    },
    result: "Une extraction complète, 0 axe vide, des totaux par rubrique en EUR rapprochés du grand livre à l'écart nul.",
    pitfall: "Filtrer sur « Bailleur = ECHO » seul : le bailleur finance aussi le projet Masisi. Filtrez toujours sur le projet ET le bailleur, sinon vous mélangez deux contrats.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: "Construire l'échantillon des pièces à contrôler",
    intro: "Vous ne pouvez pas vérifier chaque pièce dans le délai. Vous priorisez ce qu'un auditeur regarderait en premier : les gros montants, les achats atypiques (urgence, gré à gré, montants arrondis suspects) et un tirage au hasard. Écrivez la règle AVANT de tirer : c'est elle qui prouve que l'échantillon n'a pas été choisi pour faire plaisir.",
    steps: [
      {
        title: 'Fixer la règle de sélection',
        actions: [
          "Sélectionnez 100 % des pièces de 5 000 EUR et plus.",
          "Sélectionnez 100 % des achats d'urgence, de gré à gré ou sans bon de commande préalable, quel que soit le montant.",
          "Tirez au hasard 10 % des autres pièces, avec au moins 5 par rubrique (sauf rubrique plus petite).",
        ],
      },
      {
        title: 'Tirer et chiffrer la couverture',
        actions: [
          "Dans l'onglet « Extraction NFK », triez la colonne Montant de façon décroissante et marquez les pièces de la première règle.",
          "Pour le tirage au hasard, ajoutez une colonne =ALEA() et prenez les plus petites valeurs de chaque rubrique.",
          "Calculez la couverture : montant des pièces échantillonnées / total de la période.",
        ],
      },
    ],
    example: {
      title: 'Échantillon NFK au 31/03/2026',
      lines: [
        "Pièces ≥ 5 000 EUR : 14 pièces, 112 300 EUR",
        "Achats d'urgence ou sans BC : 3 pièces, 3 950 EUR (dont le reçu manuscrit RM-117 de 1 150 EUR)",
        "Tirage au hasard : 24 pièces, 17 750 EUR",
        "Échantillon : 41 pièces, 134 000 EUR sur 209 150 EUR = 64 % de la valeur",
      ],
    },
    result: "Une liste de 41 pièces, une règle de sélection écrite et une couverture chiffrée (64 % de la valeur rapportée).",
    tip: "Si l'échantillon révèle plus de 10 % de pièces en défaut, élargissez-le à la rubrique concernée : un défaut systématique justifie un contrôle à 100 %.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: "Rassembler le dossier d'achat de chaque pièce échantillonnée",
    intro: "Pour chaque pièce de l'échantillon, remontez la chaîne jusqu'à la demande d'achat : c'est le processus d'achat, que l'auditeur vérifie en même temps que le 3-way match. Entrées : l'échantillon et le dossier partagé des pièces (module 01, procédure 2).",
    steps: [
      {
        title: 'Rassembler les pièces dans un dossier par achat',
        actions: [
          "Créez un sous-dossier par achat : NFK_C_BC-2025-131_Couvertures.",
          "Déposez-y : demande d'achat, devis comparatifs, bon de commande ou contrat, bon de réception, facture, preuve de paiement.",
          "Notez dans un fichier de suivi les pièces manquantes à chercher (par exemple « devis 2 et 3 manquants »).",
        ],
      },
      {
        title: 'Vérifier la mise en concurrence',
        actions: [
          "Comparez le montant de l'achat au seuil de la politique d'achat (3 devis au-dessus de 1 500 EUR pour KAS) et à celui du bailleur.",
          "Vérifiez que le fournisseur retenu est bien le moins-disant ou que le choix est justifié par écrit.",
          "Vérifiez les signatures d'approbation selon le seuil de délégation.",
        ],
      },
    ],
    example: {
      title: "Dossier d'achat des couvertures (lot 2 de la rubrique C)",
      lines: [
        "DA-2025-044 signée par Aimé T. (06/11/2025) ✔",
        "3 devis : Textiles du Lac 6,40 / Couvertures Kivu 6,85 / Nord Textile 7,10 EUR → tableau comparatif signé, moins-disant retenu ✔",
        "BC-2025-131 (Textiles du Lac, 4 500 × 6,40 = 28 800 EUR) signé le 12/11/2025 ✔",
        "BR-2025-078 : 4 500 couvertures reçues, signé par le magasinier le 02/12/2025 ✔",
      ],
    },
    result: "Pour chaque pièce échantillonnée, un dossier d'achat avec ses cinq premières pièces et la liste de ce qui manque encore.",
    pitfall: "Chercher la preuve de la mise en concurrence après coup. Un devis comparatif non signé, daté après l'achat, est pire qu'une pièce absente : il suggère une reconstitution.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Rapprocher les trois documents : contrat, facture, paiement',
    intro: "C'est le cœur du 3-way match. Les trois documents doivent raconter la même histoire : même objet, mêmes quantités, même prix, montants et dates cohérents, même tiers. Une comparaison ligne à ligne, jamais une impression générale.",
    steps: [
      {
        title: 'Comparer le BC et la facture',
        actions: [
          "Objet : la désignation de la facture correspond à celle du BC.",
          "Quantité : la facture ne dépasse pas la quantité reçue au bon de réception.",
          "Prix unitaire et total : identiques, ou écart justifié par un avenant au BC signé AVANT la facture.",
          "Destinataire : la facture est adressée à l'organisation, pas à une personne.",
        ],
      },
      {
        title: 'Comparer la facture et la preuve de paiement',
        actions: [
          "Montant payé = montant de la facture (ou écart expliqué : escompte, retenue de garantie, acompte déjà versé).",
          "Date de paiement cohérente avec les conditions du contrat.",
          "Bénéficiaire du paiement = fournisseur de la facture ; devise cohérente avec la facture.",
          "Preuve acceptable : avis de débit bancaire ou reçu de caisse signé, pas un simple ordre de virement non confirmé par la banque.",
        ],
      },
    ],
    table: {
      columns: ['Lot (rubrique C)', 'BC', 'Facture', 'Paiement', 'Écart', 'Verdict provisoire'],
      rows: [
        ['Bâches 4×5 m — BC-2025-109', '4 500 × 4,20 = 18 900', 'FBG-0457 : 18 900', 'VIR-0912 : 18 900', '0', 'Complet'],
        ['Couvertures — BC-2025-131', '4 500 × 6,40 = 28 800', 'FGL-2210 : 29 700', 'VIR-0954 : 29 700', '+900 sans avenant', 'À confirmer'],
        ['Ustensiles — BC-2025-142', '4 500 × 6,50 = 29 250', 'FUS-0318 : 29 250', 'VIR-0988 : 29 250', '0', 'Complet'],
        ['Jerricans — BC-2025-155', '3 760 × 2,50 = 9 400', 'FJC-0072 : 9 400', 'VIR-1010 : 9 400', '0', 'Complet'],
        ["Bâches d'urgence (dimanche)", 'Aucun BC', 'Reçu manuscrit RM-117 : 1 150', 'Caisse PC-0338 : 1 150', 'Pièces manquantes', 'À confirmer'],
      ],
    },
    result: "Pour chaque pièce échantillonnée, un verdict provisoire fondé sur la comparaison ligne à ligne, avec les écarts chiffrés. Ici : 3 lots complets, 2 à confirmer (900 + 1 150 EUR).",
    pitfall: "Accepter un écart « minime ». +900 EUR sur 28 800 (3,1 %) a une cause précise à identifier ; un auditeur ne qualifie jamais un écart de minime sans explication écrite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Traiter les écarts et les pièces manquantes',
    intro: "Toute pièce manquante identifiée à ce stade doit être recherchée immédiatement : c'est le dernier moment où vous avez une chance raisonnable de la retrouver, car après la soumission elle ne servira plus pour ce cycle. Pour chaque écart, trois options : régulariser par une pièce, corriger l'imputation, ou retirer la dépense du rapport.",
    steps: [
      {
        title: 'Qualifier la cause de chaque écart',
        actions: [
          "Appelez le fournisseur ou le logisticien et écrivez la cause : surcharge de prix, erreur de saisie, livraison complémentaire, pièce égarée.",
          "Demandez le document qui l'établit : avenant au BC, e-mail du fournisseur, duplicata de facture, photo de livraison.",
        ],
      },
      {
        title: 'Choisir la suite et dater la résolution',
        actions: [
          "Pièce récupérable avant l'échéance : fixez une date de relance et un responsable.",
          "Pièce non récupérable : retirez la dépense du rapport ou imputez-la aux fonds propres, et notez-le dans la justification.",
          "Ne marquez jamais « Complet » sans pièce en main.",
        ],
      },
    ],
    example: {
      title: "Plan d'action sur les deux pièces à confirmer",
      lines: [
        "FGL-2210 (+900 EUR) : Patrick K. retrouve l'e-mail du fournisseur du 12/12/2025 annonçant une surcharge de 0,20 EUR par couverture (4 500 × 0,20 = 900). Un avenant au BC signé par Grace M. est préparé le 13/04. Statut : À confirmer jusqu'à la signature.",
        "RM-117 (1 150 EUR) : demande du duplicata détaillé au fournisseur, approbation a posteriori de Grace M., photos de livraison et bon de réception signé par le magasinier. Date limite : mardi 14/04, sinon retrait du rapport et imputation aux fonds propres.",
      ],
    },
    result: "Pour chaque écart : une cause écrite, une action, un responsable et une date. Aucune pièce n'est déclarée complète sans document en main.",
    tip: "Un avenant au BC signé après la facture est une régularisation, pas une preuve de contrôle préalable. Il est acceptable s'il est daté honnêtement et accompagné de l'explication ; il ne l'est jamais antidaté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Tenir le registre du 3-way match et alimenter les statuts du gabarit',
    intro: "Le registre est votre fichier de travail, à côté du gabarit (le gabarit n'a ni colonne ni onglet pour ce détail : il ne reçoit que le statut synthétique par rubrique). C'est le registre que vous montrerez en cas de question du bailleur, et c'est lui qui alimente la colonne « Justificatifs » du gabarit à la procédure 3.",
    steps: [
      {
        title: 'Créer le registre',
        actions: [
          "Dans un classeur de travail séparé du gabarit, créez un onglet « Registre 3-way » avec : Réf. pièce, Rubrique, Fournisseur, Montant EUR, BC, Facture, Paiement, Écart, Statut (Complet / À confirmer), Action, Responsable, Échéance.",
          "Une ligne par pièce échantillonnée. Mettez à jour le statut dès qu'une pièce arrive.",
        ],
      },
      {
        title: 'Synthétiser par rubrique',
        actions: [
          "Ajoutez un petit tableau : pour chaque rubrique, nombre de pièces testées, nombre « À confirmer », montant concerné.",
          "Une rubrique n'est « Complète » que si TOUTES ses pièces échantillonnées le sont.",
        ],
      },
    ],
    example: {
      title: 'Registre 3-way match — extrait, rubrique C, au 10/04/2026',
      lines: [
        "BC-2025-109 | C | Bâches Grands Lacs | 18 900 | OK | FBG-0457 | VIR-0912 | 0 | Complet | — | — | —",
        "BC-2025-131 | C | Textiles du Lac | 29 700 | OK | FGL-2210 | VIR-0954 | +900 | À confirmer | Avenant au BC signé | Grace M. | 13/04",
        "RM-117 | C | Fournisseur de marché | 1 150 | Aucun BC | RM-117 | PC-0338 | pièces manquantes | À confirmer | Duplicata + approbation | Patrick K. | 14/04",
      ],
    },
    result: "Un registre à jour : au 10 avril, rubrique C = « À confirmer » (2 pièces, 30 850 EUR concernés), toutes les autres rubriques = « Complet ».",
    pitfall: "Garder le statut d'un « Complet » sans l'avoir recontrôlé après un changement. Mettez à jour la date de dernière vérification à chaque modification.",
  },

  // ─────────────── PROCÉDURE 3 — Compléter le gabarit rapport financier ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 7',
    title: "Enregistrer le gabarit et remplir l'en-tête",
    intro: "Le gabarit gabarit-rapport-financier-bailleur.xlsx comporte deux onglets : « Rapport Financier » (saisie) et « Synthèse » (calculée automatiquement, à ne pas modifier). L'en-tête identifie le rapport : un rapport sans période, sans devise ou sans numéro de contrat ne peut pas être rapproché d'un accord. Entrées : la fiche d'exigences (procédure 1).",
    steps: [
      {
        title: 'Créer votre copie de travail',
        actions: [
          "Ouvrez le gabarit, puis Fichier > Enregistrer sous et nommez-le : NFK_T3_2026_RapportFinancier_v1.xlsx (respectez la nomenclature du portail si elle existe).",
          "Ne travaillez jamais dans le fichier modèle : chaque projet et chaque période a sa copie.",
        ],
      },
      {
        title: "Remplir l'en-tête de l'onglet « Rapport Financier »",
        actions: [
          "À droite des libellés de gauche (colonne A), saisissez les valeurs en C4 à C7 ; à droite des libellés de droite (colonne E), saisissez-les en G4 à G7, en remplaçant les textes d'exemple de G4, G5 et G6.",
          "C6 contient « ECHO / USAID-BHA / Agence onusienne (à préciser) » : remplacez-le par le bailleur exact.",
          "Ne touchez ni aux libellés des colonnes A et E, ni à la structure des lignes 1 et 2.",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Libellé', 'Valeur saisie (NFK)'],
      rows: [
        ['C4', 'Organisation', 'Kivu Avenir Solidarité (KAS)'],
        ['C5', 'Nom du projet', 'Assistance NFI Kitchanga (NFK)'],
        ['C6', 'Bailleur', 'UE/ECHO'],
        ['C7', 'N° de contrat / award', 'ECHO-KAS-2025-017'],
        ['G4', 'Période couverte', 'Trimestre 3 — 01/01/2026 au 31/03/2026 (cumul depuis le 01/07/2025)'],
        ['G5', 'Devise de rapportage', 'EUR'],
        ['G6', 'Taux de change appliqué', 'Taux fixe contractuel : 1 EUR = 1,10 USD = 3 080 CDF'],
        ['G7', 'Préparé par / date', 'Finance Officer KAS — 13/04/2026'],
      ],
    },
    result: "Un en-tête complet qui permet à n'importe quel lecteur d'identifier le projet, le contrat, la période, la devise et le taux sans ouvrir un autre document.",
    pitfall: "Laisser le texte d'exemple « Ex. : Trimestre 3… » en G4 et ne rien changer. Un rapport qui part avec « Ex. : » dans l'en-tête signale un gabarit rempli à la hâte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 7',
    title: 'Saisir les rubriques et les budgets alloués',
    intro: "Les colonnes A, B et C portent le numéro, l'intitulé et le budget alloué de chaque rubrique, lignes 12 à 19. Le budget alloué est celui du contrat signé, avenants inclus (procédure 1, étape 5), jamais un budget de travail. Le gabarit est livré avec des valeurs d'exemple : vérifiez chacune.",
    steps: [
      {
        title: 'Saisir les 8 rubriques',
        actions: [
          "En B12 à B19, vérifiez que les intitulés sont ceux du contrat ; corrigez-les si besoin.",
          "En C12 à C19, saisissez les budgets du contrat signé, en euros entiers (48000, et non 48).",
          "Contrôlez le total en C20 (formule =SUM(C12:C19)) : il doit être égal au budget total du contrat, 263 000 EUR.",
        ],
      },
      {
        title: "Contrôler le format d'affichage",
        actions: [
          "Sélectionnez C12:E20, puis ouvrez Format de cellule > Nombre > Personnalisée et lisez le format.",
          "Le format livré est #,##0,\"EUR\" : la virgule finale divise l'affichage par 1 000, donc 48 000 s'affiche « 48EUR ». Les valeurs saisies restent exactes.",
          "Si vous voulez voir les montants entiers, remplacez le format par #,##0\" EUR\" ; sinon notez dans le rapport que les montants sont affichés en milliers.",
        ],
      },
    ],
    example: {
      title: 'Colonnes A à C du rapport NFK',
      lines: [
        "A12 1 | B12 A. Ressources humaines | C12 48000",
        "A13 2 | B13 B. Transport & distribution | C13 62000",
        "A14 3 | B14 C. Équipement & fournitures NFI | C14 95000",
        "A15 4 | B15 D. Fonctionnement bureau/base | C15 18000",
        "A16 5 | B16 E. Renforcement de capacités / formations | C16 9000",
        "A17 6 | B17 F. Suivi-évaluation (MEAL) | C17 11000",
        "A18 7 | B18 G. Coûts de support / overhead | C18 14000",
        "A19 8 | B19 H. Imprévus / ligne de contingence | C19 6000 | C20 = 263 000",
      ],
    },
    result: "Les 8 rubriques portent l'intitulé et le budget du contrat signé, et le total C20 égale 263 000 EUR.",
    pitfall: "Saisir 48 en C12 parce que le format affiche « 48EUR ». Tous les pourcentages et soldes seraient faux d'un facteur 1 000, sans aucune alerte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 7',
    title: 'Reporter les dépenses cumulées à date, converties au taux contractuel',
    intro: "La colonne D porte les dépenses cumulées depuis le début du contrat, par rubrique, dans la devise de rapportage. Elles doivent correspondre à la comptabilité analytique de la période : le rapport est une extraction reformatée, jamais une source parallèle. Entrées : les totaux par rubrique de la procédure 2, étape 1, et le taux contractuel.",
    steps: [
      {
        title: 'Convertir et saisir',
        actions: [
          "Convertissez chaque transaction au taux contractuel, arrondie au centime, puis additionnez par rubrique. Pour les USD : montant / 1,10. Pour les CDF : montant / 3 080.",
          "Saisissez en D12 à D19 les totaux par rubrique, en euros entiers (arrondi à l'euro ; l'écart d'arrondi éventuel est noté en bas de feuille).",
          "Remplacez les valeurs d'exemple livrées dans le gabarit par vos valeurs réelles.",
        ],
      },
      {
        title: 'Rapprocher avec la comptabilité',
        actions: [
          "Vérifiez que D20 (=SUM(D12:D19)) égale le total EUR de la balance du projet (230 065 USD / 1,10 = 209 150 EUR).",
          "Écart de plus de 1 EUR : cherchez avant de continuer.",
        ],
      },
    ],
    table: {
      columns: ['Rubrique', 'Dépenses en USD (grille)', 'Conversion', 'D (EUR)'],
      rows: [
        ['A. Ressources humaines', '40 150', '/ 1,10', '36 500'],
        ['B. Transport & distribution', '56 320', '/ 1,10', '51 200'],
        ['C. Équipement & fournitures NFI', '97 240', '/ 1,10', '88 400'],
        ['D. Fonctionnement bureau/base', '13 310', '/ 1,10', '12 100'],
        ['E. Formations (6 sessions payées en CDF)', '12 936 000 CDF', '/ 3 080', '4 200'],
        ['F. Suivi-évaluation (MEAL)', '7 480', '/ 1,10', '6 800'],
        ['G. Coûts de support / overhead', '10 945', '/ 1,10', '9 950'],
        ['H. Imprévus / contingence', '0', '—', '0'],
        ['Total', '230 065 USD équivalents', '', '209 150'],
      ],
    },
    result: "D12 à D19 saisis, D20 = 209 150 EUR, rapproché de la balance du projet à l'écart nul.",
    pitfall: "Convertir le total en USD de la rubrique au taux du jour de l'extraction. Utilisez le taux contractuel pour toutes les conversions, à toutes les dates : le rapport ne montre aucun gain ou perte de change.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 7',
    title: 'Lire les formules automatiques sans les écraser',
    intro: "Le gabarit calcule trois colonnes pour vous : le solde disponible (E), le pourcentage consommé (F) et la ligne TOTAL PROJET (ligne 20). Votre rôle est de vérifier qu'elles fonctionnent et de ne jamais taper un chiffre à leur place : une valeur tapée sur une formule casse silencieusement la cohérence du rapport.",
    steps: [
      {
        title: 'Vérifier chaque formule',
        actions: [
          "Cliquez sur E12 : vous devez lire =C12-D12. Cliquez sur F12 : =IF(C12=0,0,D12/C12), au format pourcentage.",
          "Vérifiez que les formules sont présentes de E12 à E19 et de F12 à F19.",
          "Vérifiez la ligne 20 : C20 =SUM(C12:C19), D20 =SUM(D12:D19), E20 =C20-D20, F20 =IF(C20=0,0,D20/C20).",
        ],
      },
      {
        title: 'Lire les résultats',
        actions: [
          "Lisez le solde de chaque rubrique : un solde négatif est un dépassement.",
          "Lisez le % consommé global et comparez-le à l'avancement calendaire du projet (9 mois sur 12 = 75 %).",
        ],
      },
    ],
    table: {
      columns: ['Rubrique', 'C Budget', 'D Dépensé', 'E Solde (=C−D)', 'F % consommé'],
      rows: [
        ['A. Ressources humaines', '48 000', '36 500', '11 500', '76,0 %'],
        ['B. Transport & distribution', '62 000', '51 200', '10 800', '82,6 %'],
        ['C. Équipement & fournitures NFI', '95 000', '88 400', '6 600', '93,1 %'],
        ['D. Fonctionnement bureau/base', '18 000', '12 100', '5 900', '67,2 %'],
        ['E. Formations', '9 000', '4 200', '4 800', '46,7 %'],
        ['F. Suivi-évaluation (MEAL)', '11 000', '6 800', '4 200', '61,8 %'],
        ['G. Coûts de support / overhead', '14 000', '9 950', '4 050', '71,1 %'],
        ['H. Imprévus / contingence', '6 000', '0', '6 000', '0,0 %'],
        ['TOTAL PROJET', '263 000', '209 150', '53 850', '79,5 %'],
      ],
    },
    result: "Les formules sont intactes et donnent, au 13 avril avant réconciliation : solde 53 850 EUR, 79,5 % consommé pour 75 % du temps écoulé.",
    tip: "Pour détecter une formule écrasée sans cliquer cellule par cellule : Formules > Afficher les formules. Une colonne E ou F qui montre des nombres au lieu de formules a été modifiée à la main.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 7',
    title: 'Appliquer le seuil de flexibilité et traiter les rubriques en alerte',
    intro: "Le gabarit contient, lignes 22 et 23, le seuil de flexibilité budgétaire du bailleur : la cellule C23 (0,1 soit 10 %) et sa règle en D23. Le gabarit ne colore pas les lignes de lui-même : c'est à vous d'appliquer le test. Une ligne en dépassement doit déclencher soit une correction d'imputation, soit une demande d'avenant, jamais une soumission telle quelle en espérant que « ça passe ».",
    steps: [
      {
        title: 'Régler le seuil et tester',
        actions: [
          "Vérifiez que C23 contient le seuil de votre bailleur (0,1 pour ECHO NFK, article 8.2). Modifiez-le si le contrat dit autre chose.",
          "Appliquez le test à chaque rubrique : F > 100 % = dépassement du budget de la rubrique (virement entre rubriques à documenter) ; F > 100 % + C23 (soit 110 %) = vérification d'imputation ou demande d'avenant avant soumission.",
          "Pour le voir à l'écran (facultatif, aucune colonne ajoutée) : sélectionnez F12:F19, Mise en forme conditionnelle > Nouvelle règle > Utiliser une formule, saisissez =F12>1+$C$23 et choisissez un fond rouge ; ajoutez =F12>=0,9 en orange.",
        ],
      },
      {
        title: 'Projeter à fin de contrat les rubriques sensibles',
        actions: [
          "Pour chaque rubrique à 90 % ou plus (ou en retard de consommation), calculez : dépensé + reste à acheter ou à engager.",
          "Comparez le résultat au budget et au plafond de la procédure 1, étape 4.",
        ],
      },
    ],
    example: {
      title: 'Test de flexibilité et projection (NFK, avant réconciliation)',
      lines: [
        "Test F > 110 % : aucune rubrique (maximum : C à 93,1 %). Test F > 100 % : aucune. Pas d'avenant à envisager.",
        "Rubrique C : 88 400 + 740 jerricans à acheter × 2,50 = 1 850 → 90 250 EUR = 95,0 % du budget : sous contrôle.",
        "Rubrique B : coût moyen 51 200 / 3 800 ménages = 13,47 EUR ; reste 700 ménages × 13,47 = 9 429 → 60 629 EUR = 97,8 % : serré, à surveiller.",
        "Rubrique E : 46,7 % consommé à 75 % du temps : retard de consommation à expliquer dans le narratif.",
      ],
    },
    result: "Aucune rubrique ne franchit 110 %. Deux rubriques à surveiller (B et C) et une en retard de consommation (E) sont identifiées, avec la projection chiffrée à fin de contrat.",
    pitfall: "Considérer que le test est inutile parce que le total est sous 100 %. Le seuil s'applique rubrique par rubrique : un total à 79 % peut cacher une rubrique en dépassement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 7',
    title: 'Renseigner la colonne « Justificatifs » et la date de dernière vérification',
    intro: "La colonne G « Justificatifs (3-way match) statut & référence » indique, rubrique par rubrique, si les trois pièces du 3-way match sont réunies et se recoupent. La colonne H « Dernière vérification » donne la date du dernier contrôle. Entrées : le registre du 3-way match (procédure 2, étape 6).",
    steps: [
      {
        title: 'Écrire le statut de chaque rubrique',
        actions: [
          "En G12 à G19, REMPLACEZ le texte livré « À compléter — statut par pièce (Complet / À confirmer) ». Il contient le mot « confirmer » : tant qu'il reste, la Synthèse le compte comme un justificatif incomplet.",
          "Écrivez « Complet » suivi du nombre de pièces testées et de la référence du registre, uniquement si TOUTES les pièces échantillonnées sont complètes.",
          "Si une pièce est à confirmer, écrivez « À confirmer » suivi des références des pièces. N'utilisez jamais le mot « confirmer » dans une cellule « Complet » (par exemple « Complet, rien à confirmer ») : la Synthèse la compterait à tort.",
        ],
      },
      {
        title: 'Dater la vérification',
        actions: [
          "En H12 à H19, saisissez la date du dernier contrôle au format JJ/MM/AAAA.",
          "Mettez à jour la date chaque fois que vous recontrôlez une rubrique.",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Statut saisi (G)', 'H'],
      rows: [
        ['G12', 'Complet — 6 pièces (paie, contrats RH) — registre l. 1-6', '10/04/2026'],
        ['G13', 'Complet — 9 pièces (transport, distribution) — registre l. 7-15', '10/04/2026'],
        ['G14', 'À confirmer — FGL-2210 (avenant BC-131 en cours), RM-117 (duplicata)', '10/04/2026'],
        ['G15', 'Complet — 5 pièces — registre l. 24-28', '10/04/2026'],
        ['G16', 'Complet — 3 pièces (6 sessions, feuilles de présence) — registre l. 29-31', '10/04/2026'],
        ['G17', 'Complet — 4 pièces — registre l. 32-35', '10/04/2026'],
        ['G18', 'Complet — 6 pièces — registre l. 36-41', '10/04/2026'],
        ['G19', 'Sans dépense à justifier (0 EUR)', '10/04/2026'],
      ],
    },
    result: "Les 8 cellules de la colonne G sont à jour. Au 13 avril, une seule cellule contient « confirmer » (G14) : la Synthèse affichera 1 rubrique à justificatifs incomplets.",
    pitfall: "Laisser le texte « À compléter… » dans les cellules des rubriques sans dépense, comme H. Il contient « confirmer » : la Synthèse comptera 8 rubriques incomplètes alors que tout est en ordre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 7',
    title: "Lire l'onglet « Synthèse » et décider si le rapport peut partir",
    intro: "L'onglet « Synthèse » se calcule automatiquement à partir de « Rapport Financier » : ne modifiez pas ses formules. C'est votre tableau de bord de préparation à la soumission. Il répond à une seule question : le rapport peut-il partir en l'état ?",
    steps: [
      {
        title: 'Lire les six indicateurs',
        actions: [
          "Ouvrez l'onglet « Synthèse » et lisez B5 à B10 : budget total, dépenses cumulées, solde disponible, % global consommé, nombre de rubriques, rubriques à justificatifs incomplets.",
          "Comparez B6 à la comptabilité de la période (colonne D « Interprétation »).",
          "Comparez B8 à l'avancement calendaire : un écart important doit être expliqué.",
        ],
      },
      {
        title: 'Appliquer la règle de soumission',
        actions: [
          "Lisez B10 : il doit être à ZÉRO avant toute soumission.",
          "Vérifiez que le rapport a été réconcilié avec le rapport narratif via la checklist (procédure 4).",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Indicateur', 'Valeur au 13/04 (avant réconciliation)', 'Lecture'],
      rows: [
        ['B5', 'Budget total du projet', '263 000 EUR', 'Égal au contrat signé'],
        ['B6', 'Dépenses cumulées à date', '209 150 EUR', 'Égal à la balance du projet'],
        ['B7', 'Solde disponible', '53 850 EUR', 'À rapprocher de l\'avancement du programme'],
        ['B8', '% global consommé', '79,5 %', 'Pour 75 % du temps écoulé : écart de 4,5 points à expliquer (achats de kits groupés)'],
        ['B9', 'Nombre de rubriques', '8', 'Toutes actives sauf H sans dépense'],
        ['B10', 'Rubriques à justificatifs incomplets', '1', 'Rubrique C : pas encore de soumission possible'],
      ],
    },
    result: "Diagnostic : le rapport ne peut PAS partir : B10 = 1 et la réconciliation finance-programme n'est pas faite. Les deux conditions sont traitées à la procédure 4.",
    tip: "Un écart d'avancement n'est pas une erreur : il est une question du bailleur. Préparez la réponse dans la justification, par exemple « achat groupé des kits au premier semestre pour bénéficier du prix de gros ».",
  },

  // ─────────────── PROCÉDURE 4 — Réconcilier finance et programme ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 8',
    title: 'Obtenir les données du programme et figer les versions',
    intro: "C'est l'étape la plus souvent bâclée sous la pression du délai, et la plus coûteuse à négliger. Pour comparer deux rapports, il faut qu'ils portent sur la même période, la même date d'extraction et des versions identifiées. Entrées : le rapport narratif en cours de finalisation et la base de données du programme. Fil rouge : lundi 13 avril, le gabarit est rempli.",
    steps: [
      {
        title: 'Demander les sources au programme',
        actions: [
          "Écrivez à Aimé T. et à Fiston R. : « Merci de m'envoyer avant 10 h la version actuelle du narratif T3 et l'extraction de la base de distribution arrêtée au 31/03/2026. »",
          "Demandez dans la même base : date de distribution, site, numéro de fiche ménage, statut de validation.",
          "Nommez les fichiers reçus avec leur version et leur date : NFK_T3_Narratif_v3_2026-04-12.docx ; NFK_Base-distribution_arrêtée-2026-03-31.xlsx.",
        ],
      },
      {
        title: 'Ouvrir la checklist et fixer la réunion',
        actions: [
          "Ouvrez checklist-reconciliation-finance-programme.docx et enregistrez-la sous NFK_T3_2026_Checklist-Reconciliation_v1.docx.",
          "Lisez la phrase d'objectif en haut : vérifier, avant toute soumission, que le narratif programme et les chiffres finance racontent la même histoire.",
          "Planifiez avec Aimé T. une réunion d'une heure, lundi à 14 h, pour remplir la checklist à deux.",
        ],
      },
    ],
    example: {
      title: 'Message envoyé lundi 13 avril à 8 h 30',
      lines: [
        "À : Aimé T., Fiston R. — Objet : NFK T3 — données pour la réconciliation",
        "« Merci de m'envoyer avant 10 h le narratif T3 (version actuelle) et l'extraction de la base de distribution arrêtée au 31/03. Réunion de réconciliation à 14 h, durée 1 h. Je viens avec le gabarit financier rempli. »",
      ],
    },
    result: "Vous disposez du narratif v3, de la base de distribution arrêtée au 31/03/2026 et d'une réunion fixée, et chacun sait quelle version de quoi est comparée.",
    pitfall: "Comparer votre gabarit à un narratif qui change encore pendant la réunion. Convenez d'une version figée ; toute modification ultérieure est communiquée à l'autre fonction.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 8',
    title: 'Section 1 de la checklist : cohérence des volumes d\'activité',
    intro: "La checklist pose deux questions de volume : le nombre de bénéficiaires rapportés par le programme est-il égal au nombre facturé dans les dépenses de distribution ? Le nombre d'activités rapportées est-il cohérent avec les dépenses associées ? La méthode : convertir chaque volume en coût unitaire et comparer.",
    steps: [
      {
        title: 'Question 1 : bénéficiaires',
        actions: [
          "Relevez dans le narratif le nombre de ménages desservis à date : 4 200.",
          "Relevez dans la finance le nombre auquel correspondent les dépenses de distribution. Calculez le coût unitaire : dépenses de la rubrique B divisées par le nombre de ménages que le programme fournit pour la même période.",
          "Si l'égalité n'est pas vérifiée, notez la réponse NON, le chiffre de chaque côté et l'écart.",
        ],
      },
      {
        title: 'Question 2 : activités',
        actions: [
          "Listez les activités du narratif qui génèrent des dépenses : distributions, sessions de sensibilisation, missions de suivi.",
          "Pour chacune, comparez le nombre annoncé au nombre de lignes de dépense associées (coût d'une session × nombre de sessions).",
        ],
      },
    ],
    example: {
      title: 'Réponses de la section 1',
      lines: [
        "Q1 — Narratif : 4 200 ménages. Finance : 51 200 EUR / 3 800 = 13,47 EUR par ménage. Pour 4 200 ménages, on attendrait 4 200 × 13,47 = 56 574 EUR, soit environ 5 370 EUR de plus. Réponse : NON, écart de 400 ménages (≈ 5 370 EUR de coûts attendus).",
        "Q2 — Narratif : 6 sessions de sensibilisation. Finance : rubrique E, 4 200 EUR / 700 EUR par session = 6 sessions. Réponse : OUI, cohérent.",
      ],
    },
    result: "Section 1 remplie : un NON chiffré (400 ménages, ≈ 5 370 EUR) et un OUI justifié par un calcul.",
    tip: "Notez toujours le calcul à côté du OUI ou du NON : une case cochée sans calcul ne prouve rien à l'auditeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 8',
    title: 'Sections 2 et 3 : dates, périodes et montants cités',
    intro: "La section 2 vérifie que la période du narratif est celle du financier. La section 3 vérifie que chaque montant cité dans le narratif (par exemple « X EUR distribués ») est cohérent avec le rapport financier. Une dépense datée hors période ou un montant narratif périmé est l'incohérence que l'auditeur repère en premier.",
    steps: [
      {
        title: 'Section 2 : dates et périodes',
        actions: [
          "Comparez la période affichée en en-tête du narratif et du gabarit (cellule G4) : 01/01/2026 au 31/03/2026 des deux côtés ?",
          "Relevez dans le narratif les dates d'activités citées (distribution du 18 au 28 mars) et vérifiez qu'elles tombent dans la période.",
        ],
      },
      {
        title: 'Section 3 : montants',
        actions: [
          "Soulignez dans le narratif tous les montants et pourcentages : valeur des articles achetés, % du budget consommé, coût moyen par ménage.",
          "Rapprochez chacun du gabarit ou de la Synthèse (B6, B8).",
        ],
      },
    ],
    table: {
      columns: ['Élément du narratif', 'Valeur narratif', 'Valeur finance', 'Verdict'],
      rows: [
        ['Période couverte', '01/01 au 31/03/2026', 'G4 : 01/01 au 31/03/2026', 'Cohérent'],
        ['Dates de distribution citées', '18 au 28 mars 2026', 'Dans la période', 'Cohérent'],
        ["Valeur des articles achetés", '88 400 EUR', 'D14 : 88 400 EUR', 'Cohérent'],
        ['Budget consommé', '79 %', 'Synthèse B8 : 79,5 %', 'À remettre à jour après correction (procédure 4, étape 7)'],
        ['Coût moyen de distribution par ménage', '13,5 EUR', '13,47 EUR (sur 3 800 ménages)', 'À recalculer sur 4 200 ménages'],
      ],
    },
    result: "Sections 2 et 3 remplies : période et dates cohérentes, deux montants du narratif à mettre à jour après la résolution de l'écart.",
    pitfall: "Corriger les chiffres du gabarit sans informer le programme. Un montant corrigé côté finance (79 % devenu 81 %) mais resté ancien dans le narratif recrée exactement l'incohérence que vous venez de traiter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 8',
    title: 'Section 4 : pièces justificatives et 3-way match',
    intro: "La section 4 pose deux questions : toutes les pièces nécessaires sont-elles réunies et complètes ? Le 3-way match est-il vérifié pour les dépenses significatives ? Elle s'appuie sur le registre de la procédure 2 et sur la colonne G du gabarit.",
    steps: [
      {
        title: 'Répondre avec le registre',
        actions: [
          "Ouvrez le registre du 3-way match et la colonne G du gabarit.",
          "Question 1 : toutes les pièces sont-elles réunies ? Répondez NON tant qu'un statut « À confirmer » subsiste, et listez les pièces concernées avec leur échéance.",
          "Question 2 : le 3-way match est-il vérifié sur les dépenses significatives ? Citez la règle d'échantillonnage et la couverture (41 pièces, 64 % de la valeur).",
        ],
      },
      {
        title: 'Planifier la levée des réserves',
        actions: [
          "Pour chaque pièce « À confirmer », notez qui la fournit et la date limite (mardi 14/04 au plus tard).",
          "Convenez que la section 4 sera cochée OUI seulement quand la Synthèse B10 sera à 0.",
        ],
      },
    ],
    example: {
      title: 'Réponses de la section 4 au 13/04 à 14 h',
      lines: [
        "Q1 — Pièces réunies ? NON : FGL-2210 (avenant BC-131 à signer, Grace M., 13/04) et RM-117 (duplicata, Patrick K., 14/04). Synthèse B10 = 1.",
        "Q2 — 3-way match vérifié ? OUI : échantillon de 41 pièces sélectionnées selon la règle écrite, couvrant 64 % de la valeur rapportée, registre à jour.",
      ],
    },
    result: "Section 4 remplie avec un NON assumé et daté : l'honnêteté sur ce qui manque protège davantage que le OUI de complaisance.",
    pitfall: "Cocher OUI « sous réserve » en espérant récupérer la pièce plus tard. La signature croisée engage deux fonctions : n'engagez pas l'autre sur une pièce que vous n'avez pas en main.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 8',
    title: "Formuler trois hypothèses pour l'écart et planifier les vérifications",
    intro: "Face à un écart, la tentation est d'ajuster silencieusement un chiffre pour qu'ils « collent ». Faites l'inverse : formulez des hypothèses, désignez la vérification concrète de chacune (quel document, quelle personne) et chiffrez le délai pour tout trancher avant l'échéance. Trois hypothèses couvrent la quasi-totalité des cas : erreur de comptabilisation, décalage de période, double-comptage.",
    steps: [
      {
        title: 'Poser les hypothèses',
        actions: [
          "Hypothèse 1, erreur de comptabilisation : les coûts des 400 ménages existent mais sont enregistrés sur une autre rubrique ou n'ont pas été enregistrés.",
          "Hypothèse 2, décalage de période : la distribution ou la facture correspondante tombe de l'autre côté de la clôture du 31 mars.",
          "Hypothèse 3, double-comptage : des ménages sont comptés deux fois côté programme (même ménage enregistré à deux sites ou deux fois).",
        ],
      },
      {
        title: 'Associer vérification, personne et délai',
        actions: [
          "Pour chaque hypothèse, écrivez le document à consulter, la personne à contacter et la durée réaliste.",
          "Classez les vérifications de la plus rapide à la plus longue et planifiez-les lundi 13 avril, en gardant mardi pour corriger.",
        ],
      },
    ],
    table: {
      columns: ['Hypothèse', 'Vérification concrète', 'Personne', 'Délai réaliste'],
      rows: [
        ['3. Double-comptage de ménages', 'Dédoublonner la base de distribution par numéro de fiche ménage et par site', 'Fiston R.', '1 heure (lundi 14 h)'],
        ['2. Décalage de période', 'Filtrer la base sur les 400 ménages « en attente de validation » : dates de distribution ; lister les factures reçues du 1er au 10 avril (test de coupure)', 'Fiston R., vous, Patrick K.', '2 heures (lundi 15 h)'],
        ['1. Erreur de comptabilisation', "Rechercher dans le grand livre de mars toute dépense de transport ou de location liée aux sites concernés, sur toutes les rubriques", 'Vous, Esther N.', '3 heures (lundi 17 h, finalisation mardi 9 h)'],
      ],
    },
    result: "Trois hypothèses, trois vérifications, trois responsables, un planning qui laisse la journée de mardi pour corriger et faire signer.",
    tip: "Commencez par l'hypothèse la plus rapide à écarter : chaque hypothèse éliminée réduit le champ et se documente en une ligne dans la justification.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 8',
    title: 'Exécuter les vérifications et trancher',
    intro: "Menez les trois vérifications dans l'ordre prévu et consignez le résultat de chacune, y compris les hypothèses écartées. Le verdict doit reposer sur des documents, pas sur des souvenirs. Fil rouge : lundi 13 avril, après-midi.",
    steps: [
      {
        title: 'Hypothèse 3 : double-comptage',
        actions: [
          "Dans la base arrêtée au 31/03, triez par numéro de fiche ménage et appliquez Données > Supprimer les doublons ou comptez avec =NB.SI(A:A;A2)>1.",
          "Résultat : 4 200 lignes, 4 200 numéros uniques. Hypothèse écartée.",
        ],
      },
      {
        title: 'Hypothèse 2 : décalage de période',
        actions: [
          "Filtrez les 400 ménages « en attente de validation » : tous distribués entre le 18 et le 28 mars. La distribution est donc bien dans la période : le narratif est exact sur la période.",
          "Test de coupure : parmi les factures reçues entre le 1er et le 10 avril, une facture du transporteur TransKivu Logistique (FT-2026-044, datée du 06/04/2026, 4 158 USD soit 3 780 EUR) porte sur 3 rotations du 25 au 27 mars vers le site de Kitchanga-Nord, 280 ménages. Elle avait été classée dans le dossier « à saisir en avril ».",
        ],
      },
      {
        title: 'Hypothèse 1 : erreur de comptabilisation',
        actions: [
          "Cherchez dans le grand livre de mars les dépenses de transport ou de location du 18 au 20 mars pour le site de Kitchanga-Est (120 ménages).",
          "Trouvé : PC-0327, location d'un pick-up avec chauffeur pendant 3 jours, 1 782 USD soit 1 620 EUR, codée par erreur en rubrique Fonctionnement bureau.",
        ],
      },
    ],
    table: {
      columns: ['Hypothèse', 'Résultat', 'Ménages concernés', 'Montant EUR'],
      rows: [
        ['3. Double-comptage', 'Écartée : 4 200 numéros uniques', '0', '0'],
        ['2. Décalage de période (coupure)', 'Confirmée : FT-2026-044 non comptabilisée en mars', '280', '3 780'],
        ['1. Erreur de comptabilisation', 'Confirmée : PC-0327 imputée sur D au lieu de B', '120', '1 620'],
        ['Total', 'Écart de 400 ménages expliqué', '400', '5 400'],
      ],
    },
    result: "L'écart est entièrement expliqué : 280 + 120 = 400 ménages, 5 400 EUR de coûts à rattacher à la rubrique B, à comparer aux ≈ 5 370 EUR attendus à l'étape 2 (écart de 0,6 %). La finance était fausse, pas le narratif.",
    pitfall: "S'arrêter à la première hypothèse qui explique une partie de l'écart. Ici, une seule cause aurait laissé 120 ou 280 ménages sans explication : continuez jusqu'à ce que la somme des causes égale l'écart.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 8',
    title: "Corriger, documenter l'écart et mettre à jour les deux rapports",
    intro: "Deux traitements sont possibles : documenter un décalage de période légitime par une note de bas de tableau, ou corriger la rubrique si les coûts existent mais sont mal imputés. Ici, les coûts existent et appartiennent à la période : on corrige. C'est la justification écrite, et non un chiffre corrigé en catimini, qui protège l'organisation si le bailleur pose une question.",
    steps: [
      {
        title: 'Passer les écritures (méthode du module 01)',
        actions: [
          "Charge à payer au 31/03/2026 : compte 622, rubrique Transport & carburant, +4 158 USD, pièce FT-2026-044, référence REG-NFK-001.",
          "Reclassement de PC-0327 : extourne de −1 782 USD sur Fonctionnement bureau, puis recodage de +1 782 USD sur Transport & carburant, référence REG-NFK-002. N'effacez aucune ligne.",
          "Inscrivez les deux régularisations au journal des corrections, avec preuves et paraphe de Grace M.",
        ],
      },
      {
        title: 'Mettre à jour le gabarit et le narratif',
        actions: [
          "Gabarit : D13 passe de 51 200 à 56 600 (51 200 + 3 780 + 1 620) ; D15 passe de 12 100 à 10 480 ; D20 devient 212 930. Ne retapez pas E ni F : elles se recalculent.",
          "Mettez à jour G13 (« Complet — 11 pièces dont FT-2026-044 et PC-0327 ») et la date H13.",
          "Ajoutez la note de bas de tableau sous la ligne 25, par exemple en A27 (fusionnez A27:H27 pour qu'elle reste lisible).",
          "Demandez à Aimé T. de remplacer dans le narratif « 79 % du budget consommé » par « 81 % » et le coût moyen par ménage par 13,48 EUR.",
        ],
      },
    ],
    example: {
      title: 'Note de bas de tableau (A27) et justification de l\'écart',
      lines: [
        "Note 1 — Rubrique B : les dépenses cumulées incluent 3 780 EUR de charges à payer au 31/03/2026 (transport de la distribution de Kitchanga-Nord du 25 au 27/03/2026, facture FT-2026-044 du 06/04/2026) et 1 620 EUR reclassés depuis la rubrique D (location de véhicule, distribution de Kitchanga-Est, pièce PC-0327). Elles correspondent désormais aux 4 200 ménages desservis.",
        "Justification : « Le narratif annonçait 4 200 ménages, la finance 3 800. L'écart de 400 ménages résulte de deux erreurs côté finance, identifiées par dédoublonnage de la base (aucun doublon), test de coupure et recherche au grand livre : une facture de transport reçue le 06/04 pour des prestations du 25 au 27/03 non rattachée à mars (3 780 EUR, 280 ménages) et une location de véhicule imputée sur la rubrique D (1 620 EUR, 120 ménages). Corrigé par REG-NFK-001 et REG-NFK-002, journal des corrections validé le 14/04/2026. »",
        "Résultat : B = 56 600 EUR (91,3 %), D = 10 480 EUR (58,2 %), total 212 930 EUR (81,0 %), solde 50 070 EUR.",
      ],
    },
    result: "Les deux rapports sont à jour et cohérents : financier corrigé et documenté, narratif mis à jour (81 %), coût moyen de 56 600 / 4 200 = 13,48 EUR par ménage, contre 13,47 avant correction.",
    tip: "Si les ménages avaient été distribués après le 31 mars, la bonne réponse aurait été inverse : laisser la finance inchangée, corriger la période du narratif et ajouter une note de décalage légitime. Dans les deux cas, la justification écrite est le livrable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 8 sur 8',
    title: 'Section 5 : validation croisée finance et programme',
    intro: "La section 5 de la checklist est un tableau à deux cases : « Vérifié par Finance (nom, date) » et « Vérifié par Programme (nom, date) ». La signature engage les deux fonctions, pas seulement la finance. Si le référent programme ne signe pas, l'exercice perd toute sa valeur : c'est le dialogue entre les deux fonctions qui permet de comprendre un écart que la finance seule ne peut pas interpréter.",
    steps: [
      {
        title: 'Relire ensemble la version finale',
        actions: [
          "Reprenez les sections 1 à 4 avec Aimé T. : plus aucun NON non résolu.",
          "Vérifiez que la section 4 passe à OUI : Synthèse B10 = 0 (FGL-2210 régularisée par l'avenant du 13/04, RM-117 par le duplicata reçu le 14/04).",
          "Faites relire la justification d'écart par Aimé T. : elle décrit l'écart tel que le programme le comprend.",
        ],
      },
      {
        title: 'Signer et archiver',
        actions: [
          "Chacun inscrit son nom et la date dans sa case : Grace M. (Finance), Aimé T. (Programme), 14/04/2026.",
          "Convertissez la checklist signée en PDF et classez-la avec le rapport.",
          "Toute modification de chiffre après signature impose une nouvelle signature des deux fonctions.",
        ],
      },
    ],
    example: {
      title: 'Section 5 remplie',
      lines: [
        "Vérifié par Finance (nom, date) : Grace M., 14/04/2026",
        "Vérifié par Programme (nom, date) : Aimé T., 14/04/2026",
        "État de la Synthèse à la signature : budget 263 000 — dépensé 212 930 — solde 50 070 — 81,0 % — 8 rubriques — rubriques incomplètes 0",
      ],
    },
    result: "Une checklist de réconciliation complète, justification jointe, signée par la finance ET le programme, avant la relecture finale. La Synthèse affiche 0 rubrique à justificatifs incomplets.",
    pitfall: "Faire signer la checklist « pour la forme » sans que le référent programme ait lu les chiffres. En cas de contrôle, deux signatures sur une réconciliation que personne n'a menée sont pires qu'une absence de signature.",
  },

  // ─────────────── PROCÉDURE 5 — Relire, soumettre et archiver ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Faire relire le rapport par un second regard',
    intro: "Aucun rapport financier bailleur ne devrait partir sans une relecture par une personne qui ne l'a pas construit (superviseur finance, Finance Manager, coordinateur). Elle attrape les erreurs de recopie, les formules cassées, les rubriques mal alignées : des erreurs que l'auteur, plongé dans le détail depuis des jours, ne voit plus. Fil rouge : mardi 14 avril, Grace M. relit.",
    steps: [
      {
        title: 'Préparer le dossier de relecture',
        actions: [
          "Envoyez à Grace M. : le gabarit NFK_T3_2026_RapportFinancier_v2.xlsx, la checklist signée, le registre du 3-way match et la justification d'écart.",
          "Joignez une liste de ce que vous voulez qu'elle vérifie en priorité : les deux régularisations REG-NFK-001 et 002, la rubrique C, la Synthèse.",
        ],
      },
      {
        title: 'Appliquer la liste de relecture',
        actions: [
          "En-tête : projet, contrat, période, devise, taux, date de préparation.",
          "Chiffres : budget de chaque rubrique égal au contrat ; D20 égal au grand livre ; formules E et F intactes (Formules > Afficher les formules).",
          "Cohérence : B10 de la Synthèse à 0 ; notes de bas de tableau présentes ; montants du narratif identiques au gabarit.",
          "Forme : orthographe, intitulés exacts des rubriques, format d'affichage des montants, nom du fichier.",
        ],
      },
    ],
    table: {
      columns: ['Observation de Grace M.', 'Gravité', 'Action'],
      rows: [
        ['G7 indique « 13/04/2026 » alors que le rapport est signé le 14/04', 'Mineure', 'Corriger la date de préparation'],
        ["H13 non mise à jour après l'ajout de FT-2026-044 et PC-0327", 'Moyenne', 'Saisir 14/04/2026 en H13'],
        ["Le narratif cite encore 3 800 ménages dans le paragraphe 4 (oubli de mise à jour)", 'Majeure', 'Remplacer par 4 200 et faire relire par Aimé T.'],
        ['Montants affichés en milliers sans mention', 'Mineure', 'Ajouter la mention dans la note ou changer le format'],
      ],
    },
    result: "Un rapport relu par une personne indépendante, avec une liste d'observations traitées et datées. Ici, une incohérence majeure du narratif a été interceptée avant dépôt.",
    pitfall: "Faire relire par la personne qui a elle-même saisi les données, ou la veille au soir sans temps pour corriger. Une relecture sans marge de correction ne sert qu'à se rassurer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Contrôler le format, la nomenclature et les pièces jointes avant dépôt',
    intro: "Les portails peuvent rejeter automatiquement un fichier mal nommé ou trop lourd. Soumettez dans le canal officiel du bailleur, en respectant scrupuleusement le format de fichier et la nomenclature exigés. Entrées : la fiche d'exigences (procédure 1) et le rapport relu.",
    steps: [
      {
        title: 'Reporter les chiffres dans le formulaire du bailleur',
        actions: [
          "Ouvrez le formulaire du portail (volet financier du Single Form) pour le trimestre 3.",
          "Saisissez rubrique par rubrique les montants du gabarit, dans l'ordre et avec les intitulés du portail.",
          "Comparez le total affiché par le portail au total D20 du gabarit : 212 930 EUR.",
        ],
      },
      {
        title: 'Contrôler les fichiers',
        actions: [
          "Nommez chaque fichier selon la nomenclature : NFK_T3_2026_RapportFinancier.pdf, NFK_T3_2026_Checklist-Reconciliation_signée.pdf.",
          "Vérifiez la taille (10 Mo maximum par fichier) et le format accepté (PDF, XLSX).",
          "Ouvrez chaque fichier exporté pour vérifier que le contenu est complet et lisible.",
        ],
      },
    ],
    example: {
      title: 'Contrôle avant dépôt (NFK, 14/04/2026)',
      lines: [
        "Total portail : 212 930 EUR = total gabarit D20 ✔",
        "Rubrique B : 56 600 (portail) = 56 600 (gabarit) ✔ — rubrique D : 10 480 = 10 480 ✔",
        "Fichiers : 2 PDF de 410 Ko et 280 Ko, nomenclature respectée ✔",
        "Pièces justificatives : conservées au bureau, non demandées au dépôt, disponibles sur demande ✔",
      ],
    },
    result: "Les montants du portail sont identiques à ceux du gabarit, rubrique par rubrique, et les fichiers respectent les règles de nommage et de taille.",
    pitfall: "Ressaisir les chiffres dans le portail de mémoire ou en lisant un affichage en milliers. Comparez toujours le total et chaque rubrique après saisie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Déposer dans les délais et conserver la preuve de dépôt',
    intro: "Le jour J, déposez tôt : une panne de portail ou une coupure d'électricité à Goma à 16 h n'est pas une excuse recevable. Le dépôt n'est terminé que lorsque vous détenez la preuve qu'il a eu lieu. Fil rouge : mercredi 15 avril, dépôt visé avant 12 h.",
    steps: [
      {
        title: 'Déposer',
        actions: [
          "Vérifiez la veille que les accès fonctionnent (étape 3 de la procédure 1).",
          "Soumettez avant midi, en laissant l'après-midi comme marge en cas de rejet.",
          "Faites déposer par la personne habilitée (Grace M.) ; vous restez disponible pour toute correction.",
        ],
      },
      {
        title: 'Conserver la preuve',
        actions: [
          "Enregistrez en PDF l'écran ou l'e-mail de confirmation avec la date, l'heure et la référence du dépôt.",
          "Si le portail n'envoie aucun accusé, faites une capture d'écran datée et envoyez un e-mail d'accompagnement au chargé de programme du bailleur.",
          "Notez dans la fiche d'exigences la date et l'heure réelles du dépôt.",
        ],
      },
    ],
    example: {
      title: 'Preuve de dépôt archivée',
      lines: [
        "Portail e-SF — accusé de réception — NFK T3 — déposé le 15/04/2026 à 10 h 42 par Grace M. — référence fictive APPEL-2026-0415-017",
        "E-mail d'accompagnement envoyé à 10 h 50 au chargé de programme ECHO, avec la liste des fichiers déposés.",
      ],
    },
    result: "Rapport déposé le 15 avril à 10 h 42, soit 1 h 18 avant la marge fixée, avec un accusé de réception archivé.",
    pitfall: "Déposer à 23 h 50 le jour de l'échéance. Un seul incident (connexion, fichier rejeté) et le délai est perdu sans possibilité de rattrapage.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Archiver le jeu complet de pièces et de documents',
    intro: "Un audit peut intervenir des mois, parfois des années plus tard, et vous ne serez peut-être plus la personne en poste pour répondre aux questions. Archivez immédiatement, dans un dossier daté et complet, le rapport soumis ET l'intégralité des pièces justificatives (3-way match complet par ligne). La durée de conservation est celle de votre contrat (7 ans pour NFK).",
    steps: [
      {
        title: 'Créer le dossier de période',
        actions: [
          "Créez le dossier : NFK > 2026_T3_Rapport-ECHO.",
          "Rangez-y dans des sous-dossiers numérotés : 01 Rapport déposé et preuve de dépôt ; 02 Gabarit et Synthèse ; 03 Checklist de réconciliation signée ; 04 Registre du 3-way match ; 05 Pièces par rubrique ; 06 Journal des corrections ; 07 Échanges avec le bailleur.",
          "Verrouillez les fichiers définitifs en lecture seule et supprimez-les des dossiers de travail.",
        ],
      },
      {
        title: 'Tester et sauvegarder',
        actions: [
          "Faites le test « auditeur » : choisissez trois lignes au hasard dans le rapport et retrouvez leurs pièces en moins de 2 minutes chacune.",
          "Copiez le dossier sur un second support (serveur du siège, disque externe conservé dans un autre local).",
          "Notez dans la fiche d'exigences l'emplacement de l'archive et la date de fin de conservation (30/06/2033 si le solde est payé à fin juin 2026).",
        ],
      },
    ],
    example: {
      title: "Arborescence d'archive du rapport T3 NFK",
      lines: [
        "NFK/2026_T3_Rapport-ECHO/01_Depot/NFK_T3_2026_RapportFinancier.pdf + Accuse-reception-2026-04-15.pdf",
        "NFK/2026_T3_Rapport-ECHO/04_Registre-3way/Registre_3way_T3_v-finale.xlsx",
        "NFK/2026_T3_Rapport-ECHO/05_Pieces/C_Equipement-NFI/BC-2025-131_Couvertures/ (DA, devis, BC, BR, facture, virement, avenant)",
        "NFK/2026_T3_Rapport-ECHO/06_Journal-corrections/REG-NFK-001_002.pdf",
      ],
    },
    result: "Un dossier d'archive complet, nommé, sauvegardé sur deux supports, dans lequel trois pièces tirées au hasard se retrouvent en moins de deux minutes chacune.",
    tip: "Rédigez une page « Lisez-moi » dans le dossier : contexte, organisation des sous-dossiers, personnes de référence. Votre remplaçant dans trois ans vous en remerciera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Suivre les retours du bailleur et y répondre dans les délais',
    intro: "Le dépôt n'est pas la fin : le bailleur pose souvent des questions de clarification après lecture. Y répondre vite, avec des pièces, consolide la confiance ; y répondre de façon approximative la détruit. Entrées : les e-mails et commentaires reçus via le portail.",
    steps: [
      {
        title: 'Enregistrer chaque question',
        actions: [
          "Ouvrez un onglet « Retours bailleur » dans la fiche de suivi : date de réception, question, rubrique concernée, responsable, date de réponse due, date de réponse envoyée.",
          "Accusez réception sous 24 heures et annoncez la date de la réponse complète.",
        ],
      },
      {
        title: 'Répondre avec des preuves',
        actions: [
          "Rassemblez les pièces citées dans la question à partir de l'archive de période.",
          "Rédigez une réponse factuelle : le chiffre, la cause, la pièce jointe, l'action corrective éventuelle.",
          "Faites relire la réponse par Grace M. et par le référent programme si elle touche aux volumes, puis archivez-la dans le sous-dossier 07.",
        ],
      },
    ],
    example: {
      title: 'Question du bailleur et réponse (fictives)',
      lines: [
        "22/04/2026 — Question : « La rubrique B passe à 91 % pour 75 % du temps écoulé. Quel est le coût de distribution prévu à la fin du contrat ? »",
        "24/04/2026 — Réponse : « Coût moyen constaté : 13,48 EUR par ménage (56 600 EUR / 4 200). Il reste 300 ménages à desservir, soit environ 4 040 EUR, ce qui porte la rubrique B à 60 640 EUR, soit 97,8 % du budget de 62 000 EUR, sans dépasser le budget. Détail joint. »",
      ],
    },
    result: "Chaque question du bailleur est enregistrée, reçoit une réponse chiffrée avec pièces avant la date convenue, et la correspondance est archivée avec le rapport concerné.",
    pitfall: "Répondre de mémoire par téléphone. Une réponse orale ne laisse aucune trace : confirmez toujours par écrit et archivez.",
  },

  // ─────────────── PROCÉDURE 6 — Piloter le cycle de clôture et les échéances ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Recenser toutes les échéances de rapportage dans un seul calendrier',
    intro: "Chaque bailleur a sa fréquence et son délai. Si vous les découvrez un par un, vous les découvrirez en retard. Le recensement se fait une fois par an (et à chaque nouvel accord), à partir des fiches d'exigences de la procédure 1. Entrées : toutes les fiches d'exigences de l'organisation.",
    steps: [
      {
        title: 'Lister toutes les échéances',
        actions: [
          "Ouvrez un classeur « Calendrier bailleurs 2026 » avec les colonnes : bailleur, projet, rapport, période couverte, échéance, jour de la semaine, signataire, source (article du contrat).",
          "Reprenez l'échéance de chaque fiche d'exigences, y compris les rapports finaux.",
          "Triez par date et repérez les jours où plusieurs échéances tombent ensemble.",
        ],
      },
    ],
    table: {
      columns: ['Bailleur / projet', 'Rapport', 'Période couverte', 'Échéance'],
      rows: [
        ['Fonds Horizon / Nutrition (module 01)', 'Rapport financier T1', 'Janvier à mars 2026', '15 avril 2026'],
        ['Agence Delta / WASH (module 01)', 'Rapport financier T1', 'Janvier à mars 2026', '15 avril 2026'],
        ['Fondation Sigma / Santé (module 01)', 'Rapport financier T1', 'Janvier à mars 2026', '15 avril 2026'],
        ['UE/ECHO / NFK', 'Rapport trimestriel T3', 'Janvier à mars 2026', '15 avril 2026'],
        ['UE/ECHO / NFK', 'Rapport trimestriel T4', 'Avril à juin 2026', '15 juillet 2026'],
        ['UE/ECHO / NFK', 'Rapport final (fictif)', "Tout le contrat", '31 août 2026'],
      ],
    },
    result: "Un calendrier unique qui montre que quatre rapports sont dus le même jour, le 15 avril : la clôture et la préparation doivent être décalées en amont.",
    pitfall: "Supposer que les échéances des trois projets du module 01 sont indépendantes de celle d'ECHO. Quatre rapports le même jour avec une seule équipe finance ne se préparent pas en cinq jours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Calculer la marge réelle entre la clôture interne et chaque échéance',
    intro: "La marge réelle est le nombre de jours ouvrés dont vous disposez entre la fin de votre clôture comptable et la date limite du bailleur. C'est cette marge, et non la date de l'échéance, qui dit si le délai est tenable. Entrées : le calendrier des échéances et le calendrier de clôture interne.",
    steps: [
      {
        title: 'Calculer la marge',
        actions: [
          "Relevez la date de fin de clôture interne du mois qui précède chaque échéance (8 du mois pour KAS).",
          "Calculez les jours calendaires entre la clôture et l'échéance, puis les jours ouvrés (hors week-end et jours fériés).",
          "Chiffrez le travail incompressible : extraction et contrôle (1 jour), 3-way match (1 à 2 jours), gabarit (1 jour), réconciliation (1 jour), relecture (1 jour), dépôt (0,5 jour).",
        ],
      },
      {
        title: 'Comparer et décider',
        actions: [
          "Si la marge est inférieure au travail incompressible, l'échéance n'est pas tenable en l'état.",
          "Décidez des leviers : avancer la clôture, préparer une partie du travail avant la clôture, ou demander un aménagement de délai AVANT l'échéance.",
        ],
      },
    ],
    table: {
      columns: ['Échéance', 'Clôture interne', 'Marge (jours calendaires)', 'Marge (jours ouvrés)', 'Verdict'],
      rows: [
        ['15 avril (ECHO NFK T3)', '8 avril', '7', '5', 'Serré : travail incompressible de 5,5 à 6,5 jours'],
        ['15 juillet (ECHO NFK T4)', '8 juillet', '7', '5', 'Serré, même constat chaque trimestre'],
        ['Hypothèse : bailleur exigeant le rapport le 10 du mois', '8 du mois', '2', '2', 'Intenable sans préparation en amont'],
      ],
    },
    result: "La marge réelle de chaque bailleur est chiffrée. Avec 5 jours ouvrés pour 5,5 à 6,5 jours de travail, l'échéance ECHO n'est tenable que si une partie du travail est faite AVANT la clôture.",
    tip: "Le contrôle de coupure et le 3-way match de l'échantillon peuvent se faire chaque mois, au fil de l'eau, sans attendre la clôture trimestrielle. Cela ramène le travail de fin de trimestre à environ 3 jours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Construire le rétro-planning du prochain rapport',
    intro: "Un rétro-planning part de la date limite et remonte dans le temps : chaque tâche a un responsable, une date et une durée. Il est construit au début du trimestre, pas dix jours avant l'échéance. Fil rouge : le rapport T4, à déposer le mercredi 15 juillet 2026, avec une clôture de juin terminée le mercredi 8 juillet.",
    steps: [
      {
        title: 'Remonter les tâches depuis la date limite',
        actions: [
          "Fixez le dépôt (J) à 12 h, avec la journée du J comme marge de sécurité.",
          "Placez à rebours la relecture, la signature croisée, la réconciliation, le gabarit, le contrôle des pièces, la clôture.",
          "Ajoutez les tâches mensuelles qui allègent la fin de trimestre : coupure et échantillon à chaque clôture.",
        ],
      },
      {
        title: 'Partager et suivre',
        actions: [
          "Envoyez le rétro-planning à Grace M., Aimé T. et Fiston R. avec les dates qui les concernent (envoi des données programme).",
          "Cochez chaque tâche réalisée ; toute tâche en retard de plus d'un jour est signalée à Grace M.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Tâche', 'Responsable'],
      rows: [
        ['Chaque 8 du mois', 'Clôture mensuelle + test de coupure + échantillon 3-way du mois', 'Finance Officer'],
        ['Mercredi 1er juillet', 'Demander base de distribution arrêtée au 30/06 et narratif v1', 'Finance Officer → Fiston R., Aimé T.'],
        ['Lundi 6 juillet', 'Lister les factures reçues depuis le 1er juillet (coupure)', 'Finance Officer'],
        ['Mercredi 8 juillet', 'Clôture comptable de juin terminée', 'Finance Officer'],
        ['Jeudi 9 juillet', 'Gabarit rempli, registre du 3-way à jour', 'Finance Officer'],
        ['Vendredi 10 juillet', 'Réconciliation avec le programme (checklist)', 'Finance Officer, Aimé T.'],
        ['Lundi 13 juillet', 'Relecture par un second regard', 'Grace M.'],
        ['Mardi 14 juillet', 'Corrections finales, signatures croisées, dépôt à blanc', 'Tous'],
        ['Mercredi 15 juillet, 12 h', 'Dépôt, preuve, archivage', 'Grace M., Finance Officer'],
      ],
    },
    result: "Un rétro-planning daté, partagé avec les trois autres personnes concernées, qui laisse un jour de marge (le 14) et ne découvre aucune échéance la veille.",
    pitfall: "Construire le rétro-planning seul et ne le partager avec personne. Les dates des autres fonctions (données du programme) sont le premier point de blocage : elles doivent les avoir validées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: "Repérer les signaux d'alerte avant la date limite",
    intro: "Un signal d'alerte repéré à J-5 se traite en une heure ; le même signal à J-1 compromet le dépôt. Vous testez systématiquement une liste de signaux à des dates fixes du rétro-planning, par exemple à J-5 et à J-2. Entrées : le gabarit, le registre, le narratif en cours.",
    steps: [
      {
        title: 'Passer la liste des signaux',
        actions: [
          "Rubrique consommée à plus de 90 % alors que le temps écoulé est inférieur : projetez la fin de contrat.",
          "Pièce « À confirmer » à J-3 sans date de résolution connue : relancez et escaladez.",
          "Écart de volume entre narratif et finance, ou chiffre programme modifié depuis la dernière version.",
          "Facture reçue après la clôture pour une prestation de la période (coupure).",
          "Accès au portail non testé, avenant en cours de signature, personne clé absente.",
        ],
      },
      {
        title: 'Décider : vert, orange ou rouge',
        actions: [
          "Vert : aucun signal ou signal déjà traité. Orange : signal avec une action et une date avant J-1. Rouge : signal sans solution avant J-1.",
          "Rouge : informez Grace M. immédiatement ; si l'échéance ne peut pas être tenue, demandez un aménagement de délai par écrit au bailleur AVANT la date limite, jamais après.",
        ],
      },
    ],
    table: {
      columns: ['Signal à J-5 (10 avril)', 'Constat NFK', 'Couleur', 'Action'],
      rows: [
        ['Rubrique à plus de 90 %', 'C à 93,1 % ; projection à 95,0 %', 'Orange', 'Surveiller les achats restants'],
        ['Pièces à confirmer', 'FGL-2210 et RM-117', 'Orange', 'Avenant et duplicata avant le 14/04'],
        ['Écart narratif / finance', '4 200 contre 3 800 ménages (découvert le 13/04)', 'Rouge, puis résolu', 'Réconciliation du 13/04'],
        ['Factures après clôture', 'FT-2026-044 non comptabilisée', 'Rouge, puis résolu', 'Charge à payer REG-NFK-001'],
        ['Accès portail', 'Testés le 25/03', 'Vert', 'Aucune'],
      ],
    },
    result: "Chaque trimestre, une liste de signaux testés à J-5 et J-2, avec couleur, action et date. Aucune surprise de dernière minute ne reste sans réponse.",
    tip: "La bonne question à J-5 n'est pas « tout va-t-il bien ? » mais « qu'est-ce qui pourrait m'empêcher de déposer mercredi à midi ? ». La liste de signaux est la réponse écrite.",
  },

  // ─────────────── PROCÉDURE 7 — Adapter le socle au SF-425 et au FACE form ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 3',
    title: 'Poser le socle commun et lister les différences entre formats',
    intro: "Quand un bailleur change de format, vous ne changez pas de comptabilité : vous changez de présentation. Le socle (grille de codification, registre des engagements, BFU) est unique ; chaque rapport en est une extraction. Fil rouge : KAS négocie deux nouveaux accords (fictifs) : un award USAID/BHA de 120 000 USD et un sous-accord de 30 000 USD avec une agence onusienne.",
    steps: [
      {
        title: 'Lister ce qui change',
        actions: [
          "Pour chaque nouveau format, relevez : base comptable, devise, fréquence, niveau de détail, personne qui certifie.",
          "Identifiez, dans votre socle, la source de chaque chiffre demandé (grille pour le dépensé, registre pour l'engagé, trésorerie pour les avances).",
        ],
      },
      {
        title: 'Vérifier que le socle fournit tout',
        actions: [
          "Si le format demande une donnée que le socle ne contient pas (par exemple les obligations non liquidées), ajoutez-la au socle, pas au rapport.",
          "Ajoutez le nouveau bailleur et son budget aux listes de la grille (module 01, procédure 1).",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'ECHO (NFK)', 'SF-425 (USAID/BHA)', 'FACE form (agence onusienne)'],
      rows: [
        ['Base comptable', 'Engagement, dépenses rattachées à la période du service', "Engagement (accrual)", 'Dépenses certifiées contre avances reçues'],
        ['Devise', 'EUR, taux fixe contractuel', 'USD', 'USD ou devise de l\'accord'],
        ['Niveau de détail', 'Par rubrique budgétaire', 'Agrégé : décaissements, obligations, solde', 'Par ligne budgétaire de l\'accord'],
        ['Source principale', 'Grille + gabarit', 'Grille + registre des engagements', 'Grille + suivi des avances'],
        ['Certification', 'Représentant légal', 'Personne habilitée (signature légale)', 'Personne habilitée de l\'organisation'],
      ],
    },
    result: "Pour chaque nouveau bailleur, vous savez quel chiffre du socle alimente quelle case du format, et il ne manque aucune donnée.",
    pitfall: "Tenir une comptabilité parallèle pour chaque bailleur. Deux sources pour un même chiffre garantissent un écart tôt ou tard : une seule vérité, plusieurs présentations.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 3',
    title: 'Produire le SF-425 à partir du socle',
    intro: "Le SF-425 agrège les dépenses : il ne remplace pas votre détail, il le résume. Chaque montant doit être rapprochable de la grille et du registre. Fil rouge : award fictif USAID/BHA, 120 000 USD, dépenses cumulées au 31 mars 2026. Vérifiez l'ordre et le libellé des lignes de la version du formulaire demandée par l'agent de l'award.",
    steps: [
      {
        title: 'Extraire les chiffres du socle',
        actions: [
          "Décaissements cumulés : grille, lignes de l'award, type Caisse et paiements bancaires, au 31/03/2026.",
          "Obligations non liquidées : registre des engagements, reste à payer des contrats « Ouvert » de l'award.",
          "Fonds reçus : relevés bancaires, versements de l'agence.",
          "Frais indirects : taux et base fixés par l'award.",
        ],
      },
      {
        title: 'Calculer et contrôler',
        actions: [
          "Total des dépenses (part du bailleur) = décaissements + obligations non liquidées.",
          "Solde non engagé = montant autorisé − total des dépenses.",
          "Trésorerie disponible = fonds reçus − décaissements.",
          "Remplissez la zone de remarques : explication de tout écart important ; faites signer par la personne habilitée.",
        ],
      },
    ],
    example: {
      title: 'Chiffres du SF-425 de l\'award fictif au 31/03/2026 (USD)',
      lines: [
        "Fonds reçus cumulés : 85 000",
        "Décaissements cumulés : 78 400",
        "Trésorerie disponible = 85 000 − 78 400 = 6 600",
        "Obligations non liquidées (contrats ouverts) : 9 600",
        "Total des dépenses = 78 400 + 9 600 = 88 000",
        "Montant autorisé : 120 000 → solde non engagé = 120 000 − 88 000 = 32 000",
        "Frais indirects : 10 % sur une base de coûts directs de 80 000 = 8 000, déjà inclus dans les 88 000 (80 000 + 8 000)",
      ],
    },
    result: "Un SF-425 dont chaque chiffre se retrouve dans la grille, le registre ou le relevé bancaire, et dont les trois contrôles (trésorerie, total, solde) se vérifient.",
    pitfall: "Reporter les dépenses payées sans les obligations non liquidées. Le SF-425 est en comptabilité d'engagement : oublier le registre des engagements sous-estime la dépense et surestime le solde disponible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 3',
    title: 'Produire le FACE form et contrôler la cohérence entre formats',
    intro: "Le FACE form raisonne en avances : sur ce que l'agence vous a avancé, qu'avez-vous dépensé, et que demandez-vous pour la période suivante ? Seules les dépenses justifiées (3-way match complet) peuvent être certifiées. Fil rouge : sous-accord fictif de 30 000 USD avec une agence onusienne, avance de 30 000 USD reçue pour la première période.",
    steps: [
      {
        title: 'Établir la certification des dépenses',
        actions: [
          "Reprenez, ligne budgétaire par ligne budgétaire de l'accord, les dépenses de la période issues de la grille, avec leur statut 3-way match.",
          "Retirez des dépenses certifiées toute pièce « À confirmer » : elle sera certifiée à la période suivante, une fois complétée.",
          "Calculez le solde d'avance non justifié = avance reçue − dépenses certifiées.",
        ],
      },
      {
        title: "Préparer la demande suivante et valider la cohérence",
        actions: [
          "Estimez les dépenses de la période suivante par ligne budgétaire ; la nouvelle avance demandée = dépenses prévues − solde d'avance non justifié.",
          "Faites signer la certification par la personne habilitée.",
          "Contrôle de cohérence : pour chaque bailleur, la somme des dépenses de la grille codées sur ce bailleur égale le total du rapport ; aucune pièce n'est imputée à plus de 100 % tous bailleurs confondus.",
        ],
      },
    ],
    table: {
      columns: ['Ligne budgétaire du sous-accord', 'Dépenses certifiées (USD)', 'Observation'],
      rows: [
        ['Distribution', '14 200', '3-way match complet'],
        ['Transport', '6 300', '3-way match complet'],
        ['Personnel', '4 000', 'Fiches de paie et feuilles de temps'],
        ['Total certifié', '24 500', 'Avance reçue 30 000 → solde non justifié 5 500'],
      ],
    },
    result: "FACE form certifié : 24 500 USD de dépenses, 5 500 USD d'avance non justifiés, nouvelle avance demandée de 28 000 − 5 500 = 22 500 USD pour la période suivante, et tie-out validé entre la grille et les trois formats.",
    pitfall: "Certifier des dépenses dont le dossier est incomplet pour « ne pas perdre » le montant. La certification est une déclaration signée : une pièce manquante certifiée est une fausse déclaration potentielle.",
  },

  // ─────────────── 6. Cas complet résolu ───────────────
  {
    type: 'case-study',
    title: 'Cas complet résolu — Rapport ECHO du trimestre 3, projet NFK (1/3)',
    scenario: "Vendredi 10 avril 2026. Grace M. vous demande le rapport financier ECHO du projet Assistance NFI Kitchanga pour mercredi 15 avril. Vous disposez de la clôture de mars, d'une base de distribution et d'un narratif en finalisation. Voici la résolution, dans l'ordre, telle qu'un Finance Officer expérimenté la mène : d'abord le cadrage et la justification des dépenses.",
    steps: [
      {
        title: 'Cadrer avant de toucher au gabarit (procédure 1)',
        actions: [
          "Relisez l'accord signé, l'avenant 1 et la fiche d'exigences : échéance 15 avril, taux fixe 1 EUR = 1,10 USD, flexibilité 10 %.",
          "Vérifiez que le calendrier est tenable : clôture le 8 avril, échéance le 15 avril, soit 5 jours ouvrés.",
        ],
        result: "Fiche d'exigences relue, accès au portail déjà testés le 25 mars, marge de 5 jours ouvrés connue.",
      },
      {
        title: 'Extraire et rapprocher (procédure 2, étapes 1 à 3)',
        actions: [
          "Extraction NFK du 01/07/2025 au 31/03/2026 : 0 axe vide, 209 150 EUR = 230 065 USD / 1,10, égal au grand livre.",
          "Échantillon de 41 pièces (règle écrite : ≥ 5 000 EUR, urgences, 10 % au hasard) couvrant 64 % de la valeur.",
          "Dossiers d'achat reconstitués pour chaque pièce échantillonnée.",
        ],
        result: "Totaux par rubrique rapprochés du grand livre, échantillon de 41 pièces constitué selon une règle écrite.",
      },
      {
        title: 'Rapprocher les trois documents (procédure 2, étapes 4 à 6)',
        actions: [
          "Rubrique C : 3 lots complets ; FGL-2210 avec +900 EUR sans avenant ; RM-117 sans BC.",
          "Plan d'action : avenant à signer le 13/04, duplicata de facture et approbation a posteriori pour le 14/04.",
        ],
        result: "Registre du 3-way à jour : rubrique C « À confirmer » (30 850 EUR concernés), les sept autres « Complet ».",
      },
    ],
    table: {
      columns: ['Rubrique', 'Budget (EUR)', 'Dépensé avant correction', '% consommé', 'Justificatifs au 10/04'],
      rows: [
        ['A. Ressources humaines', '48 000', '36 500', '76,0 %', 'Complet'],
        ['B. Transport & distribution', '62 000', '51 200', '82,6 %', 'Complet'],
        ['C. Équipement & fournitures NFI', '95 000', '88 400', '93,1 %', 'À confirmer'],
        ['D. à H. (autres rubriques)', '58 000', '33 050', '57,0 %', 'Complet'],
        ['TOTAL', '263 000', '209 150', '79,5 %', 'Synthèse B10 = 1'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Rapport ECHO du trimestre 3, projet NFK (2/3)',
    scenario: "Lundi 13 avril. Le gabarit est rempli (procédure 3), la Synthèse affiche 79,5 % et une rubrique incomplète. Vous ouvrez la checklist de réconciliation avec Aimé T. : le narratif annonce 4 200 ménages, la finance en reflète 3 800.",
    steps: [
      {
        title: 'Remplir les sections 1 à 4 de la checklist (procédure 4)',
        actions: [
          "Section 1 : 51 200 / 3 800 = 13,47 EUR par ménage ; 4 200 ménages attendraient environ 5 370 EUR de plus : NON, écart de 400 ménages. Les 6 sessions de formation (6 × 700 = 4 200 EUR) sont cohérentes.",
          "Sections 2 et 3 : période et dates cohérentes (distributions du 18 au 28 mars) ; « 79 % du budget consommé » à remettre à jour.",
          "Section 4 : NON tant que FGL-2210 et RM-117 ne sont pas régularisées.",
        ],
        result: "Un écart chiffré et trois points à traiter : 400 ménages, pourcentage du narratif, deux pièces.",
      },
      {
        title: 'Formuler et vérifier les trois hypothèses',
        actions: [
          "Double-comptage : base dédoublonnée, 4 200 numéros uniques, hypothèse écartée.",
          "Décalage de période : 280 ménages distribués du 25 au 27 mars, mais la facture de transport FT-2026-044 (3 780 EUR) reçue le 06/04 n'a pas été rattachée à mars.",
          "Erreur de comptabilisation : 120 ménages à Kitchanga-Est, location de véhicule PC-0327 (1 620 EUR) imputée sur la rubrique D au lieu de B.",
        ],
        result: "280 + 120 = 400 ménages ; 3 780 + 1 620 = 5 400 EUR. La finance était fausse, pas le narratif.",
      },
    ],
    example: {
      title: "Écritures passées dans la grille de codification le 13/04/2026 (datées du 31/03/2026)",
      lines: [
        "2026-03-31 | 622 | Charge à payer – transport distribution Kitchanga-Nord 25-27/03 – TransKivu Logistique – FT-2026-044 – REG-NFK-001 | NFK | ECHO | Transport & carburant | 4158 | Engagement | Corrigé | FT-2026-044",
        "2026-03-31 | 611 | EXTOURNE PC-0327 location pick-up Kitchanga-Est codée Fonctionnement – REG-NFK-002 | NFK | ECHO | Fonctionnement bureau | -1782 | Caisse | Corrigé | PC-0327",
        "2026-03-31 | 611 | RECODAGE PC-0327 location pick-up Kitchanga-Est – REG-NFK-002 | NFK | ECHO | Transport & carburant | 1782 | Caisse | Corrigé | PC-0327",
      ],
    },
    table: {
      columns: ['Hypothèse', 'Verdict', 'Ménages', 'Montant EUR'],
      rows: [
        ['Double-comptage', 'Écartée', '0', '0'],
        ['Décalage de période (coupure)', 'Confirmée', '280', '3 780'],
        ['Erreur de comptabilisation', 'Confirmée', '120', '1 620'],
        ['Total', 'Écart expliqué', '400', '5 400'],
      ],
    },
    tip: "Les écritures sont datées du 31/03 car la période n'a pas encore été transmise au bailleur. Si elle l'avait été, vous auriez daté l'écriture du jour et signalé la régularisation dans le rapport suivant.",
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Rapport ECHO du trimestre 3, projet NFK (3/3)',
    scenario: "Mardi 14 et mercredi 15 avril. Les écritures sont passées, il reste à mettre à jour le gabarit et le narratif, régulariser les deux pièces, faire relire, signer, déposer et archiver.",
    steps: [
      {
        title: 'Mettre à jour le gabarit et le narratif (procédure 4, étape 7)',
        actions: [
          "D13 : 51 200 devient 56 600 ; D15 : 12 100 devient 10 480 ; D20 devient 212 930. Note de bas de tableau ajoutée en A27.",
          "Narratif : 3 800 remplacé par 4 200 dans le paragraphe 4, 79 % remplacé par 81 %, coût moyen 13,48 EUR par ménage.",
          "Justification d'écart d'une demi-page jointe à la checklist.",
        ],
      },
      {
        title: 'Régulariser les deux pièces et signer (procédure 2, étape 5 ; procédure 4, étape 8)',
        actions: [
          "FGL-2210 : avenant BC-2025-131-av1 signé par Grace M. le 13/04 (régularisation datée honnêtement, e-mail du fournisseur du 12/12/2025 en pièce jointe). RM-117 : duplicata détaillé reçu le 14/04, approbation a posteriori, photos de livraison.",
          "Colonne G de la rubrique C passée à « Complet — 8 pièces dont FGL-2210 régularisée par avenant et RM-117 par duplicata » ; Synthèse B10 = 0.",
          "Checklist signée par Grace M. (Finance) et Aimé T. (Programme) le 14/04/2026.",
        ],
      },
      {
        title: 'Relire, déposer, archiver (procédure 5)',
        actions: [
          "Relecture de Grace M. : trois corrections (date en G7, H13, paragraphe 4 du narratif), appliquées avant 16 h.",
          "Dépôt le 15/04 à 10 h 42 ; accusé archivé ; archive de période créée et testée sur trois pièces.",
        ],
        result: "Rapport déposé à l'heure, cohérent avec le narratif, justifié pièce par pièce et archivé.",
      },
    ],
    table: {
      columns: ['Rubrique', 'Budget', 'Dépensé', 'Solde', '% consommé', 'Colonne G'],
      rows: [
        ['A. Ressources humaines', '48 000', '36 500', '11 500', '76,0 %', 'Complet — 6 pièces'],
        ['B. Transport & distribution', '62 000', '56 600', '5 400', '91,3 %', 'Complet — 11 pièces'],
        ['C. Équipement & fournitures NFI', '95 000', '88 400', '6 600', '93,1 %', 'Complet — 8 pièces (2 régularisées)'],
        ['D. Fonctionnement bureau/base', '18 000', '10 480', '7 520', '58,2 %', 'Complet — 5 pièces'],
        ['E. Renforcement de capacités', '9 000', '4 200', '4 800', '46,7 %', 'Complet — 3 pièces'],
        ['F. Suivi-évaluation (MEAL)', '11 000', '6 800', '4 200', '61,8 %', 'Complet — 4 pièces'],
        ['G. Coûts de support / overhead', '14 000', '9 950', '4 050', '71,1 %', 'Complet — 6 pièces'],
        ['H. Imprévus / contingence', '6 000', '0', '6 000', '0,0 %', 'Sans dépense à justifier'],
        ['TOTAL PROJET', '263 000', '212 930', '50 070', '81,0 %', 'Synthèse : B9 = 8, B10 = 0'],
      ],
    },
    result: "Livrable final : gabarit NFK_T3_2026 rempli (total 212 930 EUR, 81,0 %, 0 rubrique incomplète), checklist signée avec justification, registre du 3-way, journal des corrections REG-NFK-001 et 002, preuve de dépôt du 15/04 et archive de période. Effet net de la correction sur le total : +3 780 EUR (charge à payer) ; le reclassement de 1 620 EUR est neutre.",
  },

  // ─────────────── 7. Exercices ───────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Réconcilier le narratif et le financier du projet Masisi',
    instructions: "Rapport ECHO du projet « Réponse NFI Masisi » (module 02), rapport intermédiaire du 1er mai au 31 juillet 2026, devise USD. Le narratif annonce 1 300 ménages desservis et 5 sessions de sensibilisation. La rubrique B (distribution) affiche 14 950 USD, soit 13,00 USD par ménage sur la base de 1 150 ménages ; la rubrique E (formations) affiche 1 500 USD à 300 USD par session. Vous disposez des faits suivants : (a) la base de distribution compte 1 300 lignes dont 90 numéros de fiche ménage apparaissent deux fois (sites 2 et 4) ; (b) 60 ménages du site 6 ont reçu leurs kits le 3 août 2026 ; (c) toutes les factures de transport de juillet sont comptabilisées ; (d) la clôture de juillet est terminée.",
    steps: [
      {
        title: 'Remplir les sections 1 à 3 de la checklist',
        actions: [
          "Section 1 : calculez l'écart de ménages et le coût attendu de cet écart ; vérifiez les sessions (5 × 300 = ?).",
          "Sections 2 et 3 : relevez la période des deux rapports et les dates de distribution.",
        ],
      },
      {
        title: 'Formuler et vérifier les trois hypothèses',
        actions: [
          "Présentez un tableau hypothèse, vérification concrète, personne, délai.",
          "Appliquez les faits (a) à (d) : quelle hypothèse est confirmée, pour combien de ménages ?",
        ],
      },
      {
        title: 'Trancher et documenter',
        actions: [
          "Décidez s'il faut corriger la finance, le narratif, ou documenter un décalage légitime.",
          "Rédigez en une demi-page maximum la justification de l'écart et la note de bas de tableau si elle est nécessaire.",
          "Remplissez la section 5 de la checklist (noms et dates fictifs).",
        ],
      },
    ],
    tip: "Faites la somme des causes : si elle ne retombe pas exactement sur l'écart de ménages, une cause manque.",
    deliverable: "La checklist complétée (sections 1 à 5), le tableau des trois hypothèses, la décision motivée et la justification d'écart d'une demi-page.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Contrôler le 3-way match de cinq pièces',
    instructions: "Cinq pièces du projet Masisi (USD). Pour chacune, donnez le statut (Complet ou À confirmer), l'écart éventuel et l'action à mener. Politique d'achat de KAS : trois devis au-dessus de 1 500.",
    steps: [
      {
        title: 'Pièce 1 — Transport',
        body: "Contrat C-2026-021 : 12 rotations × 450 = 5 400. Facture : 5 400. Virement : 5 400.",
      },
      {
        title: 'Pièce 2 — Couvertures',
        body: "BC-2026-033 : 800 couvertures × 6,40 = 5 120. Facture : 5 120, avec la mention « escompte 2 % pour paiement sous 10 jours ». Virement à J+7 : 5 017,60.",
      },
      {
        title: 'Pièce 3 — Bâches',
        body: "Achat de gré à gré de 300 bâches à 8,00 = 2 400. Facture et reçu de caisse corrects. Aucun bon de commande, aucun devis.",
      },
      {
        title: 'Pièce 4 — Per diem',
        body: "Per diem de 12 animateurs pendant 5 jours à 15 = 900, payé en caisse. Aucune liste de présence signée.",
      },
      {
        title: 'Pièce 5 — Matériel',
        body: "BC-2026-040 : 1 850. Facture de 1 850 adressée à « M. Patrick K. », payée par lui en mobile money puis remboursée par la caisse.",
      },
    ],
    tip: "Pour chaque pièce, passez les trois comparaisons dans l'ordre : BC contre facture, facture contre paiement, puis le dossier d'achat.",
    deliverable: "Un registre du 3-way match de cinq lignes avec statut, écart chiffré, cause et action pour chaque pièce.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Compléter le gabarit NFK à la clôture du contrat',
    instructions: "Projet NFK, rapport au 30 juin 2026 (EUR). Budgets identiques au rapport du T3. Dépenses cumulées : A 47 600 ; B 61 300 ; C 99 750 ; D 16 900 ; E 8 700 ; F 10 300 ; G 13 600 ; H 0. Toutes les pièces échantillonnées sont complètes, y compris pour la rubrique H sans dépense. Le gabarit est livré avec les textes d'exemple d'origine dans la colonne G.",
    steps: [
      {
        title: 'Saisir et calculer',
        actions: [
          "Saisissez D12 à D19, vérifiez les formules de E et de F et la ligne TOTAL PROJET.",
          "Relevez le solde et le % consommé de chaque rubrique et du total.",
        ],
      },
      {
        title: 'Tester la flexibilité',
        actions: [
          "Appliquez le test F > 100 % puis F > 100 % + C23 (seuil 10 %).",
          "Décidez : avenant ou virement entre rubriques documenté ? Calculez le pourcentage du virement par rapport au budget de la rubrique bénéficiaire.",
        ],
      },
      {
        title: 'Renseigner G, H et la Synthèse',
        actions: [
          "Remplacez les textes d'exemple de G12 à G19 sans utiliser le mot « confirmer ».",
          "Saisissez les dates en H, lisez B5 à B10 et décidez si le rapport peut partir.",
        ],
      },
    ],
    tip: "Pensez à la mention des montants en milliers si vous gardez le format d'affichage d'origine du gabarit.",
    deliverable: "Le gabarit rempli (colonnes D, G et H, note de bas de tableau sur le virement) et la lecture écrite de la Synthèse en trois lignes.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Marge de clôture et rétro-planning du rapport Masisi',
    instructions: "Le rapport intermédiaire du projet Masisi est dû le vendredi 14 août 2026 ; la clôture comptable de juillet se termine le lundi 10 août. Fondation Sigma exige aussi un rapport pour le 14 août. Travail incompressible par rapport : environ 5,5 à 6,5 jours (extraction, 3-way match, gabarit, réconciliation, relecture, dépôt).",
    steps: [
      {
        title: 'Calculer et décider',
        actions: [
          "Calculez la marge en jours calendaires et en jours ouvrés pour un seul rapport, puis pour les deux rapports avec une seule personne.",
          "Comparez au travail incompressible et concluez : tenable ou non ?",
        ],
      },
      {
        title: 'Proposer les leviers',
        actions: [
          "Proposez trois leviers chiffrés : avancer la clôture au jeudi 6 août, tester la coupure et le 3-way chaque mois, demander un aménagement de délai.",
          "Recalculez la marge avec une clôture au 6 août.",
        ],
      },
      {
        title: 'Construire le rétro-planning',
        actions: [
          "Établissez un tableau date, tâche, responsable de la clôture au dépôt, avec un jour de marge avant le 14 août.",
          "Ajoutez la liste des signaux d'alerte à tester à J-5 et J-2.",
        ],
      },
    ],
    deliverable: "Un tableau de marge (avant et après leviers), un rétro-planning daté de dix lignes maximum et une liste de cinq signaux d'alerte.",
  },
  {
    type: 'exercise',
    title: 'Exercice 5 — Convertir le socle en SF-425 et en FACE form',
    instructions: "Award fictif USAID/BHA de 90 000 USD, rapport au 30 juin 2026 : fonds reçus 60 000 ; décaissements 52 200 ; obligations non liquidées issues du registre 7 200 ; frais indirects de 10 % sur une base de coûts directs de 54 000. Sous-accord fictif avec une agence onusienne : avance reçue 20 000 ; dépenses de la période 15 800 dont une pièce de 1 200 en statut « À confirmer » ; dépenses prévues pour la période suivante 18 000.",
    steps: [
      {
        title: 'SF-425',
        actions: [
          "Calculez la trésorerie disponible, le total des dépenses, le solde non engagé et les frais indirects imputés.",
          "Vérifiez que les frais indirects sont bien inclus dans le total des dépenses.",
        ],
      },
      {
        title: 'FACE form',
        actions: [
          "Déterminez les dépenses certifiables, le solde d'avance non justifié et la nouvelle avance à demander.",
          "Expliquez en une phrase pourquoi la pièce « À confirmer » ne peut pas être certifiée.",
        ],
      },
      {
        title: 'Cohérence',
        actions: [
          "Listez trois contrôles de tie-out entre la grille, le registre des engagements et les rapports.",
        ],
      },
    ],
    deliverable: "Les six chiffres du SF-425 avec leurs calculs, les trois chiffres du FACE form et les trois contrôles de cohérence.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Ex. 1 — Écart de 150 ménages (1 300 − 1 150), soit environ 1 950 USD attendus à 13,00 USD par ménage ; 5 sessions × 300 = 1 500 USD, cohérent.",
      "Ex. 1 — Double-comptage confirmé pour 90 ménages (fiches en double), décalage de période confirmé pour 60 ménages (distribués le 3 août) : 90 + 60 = 150, 1 300 − 150 = 1 150.",
      "Ex. 1 — Décision : la finance est correcte ; on corrige le narratif (1 150 ménages) et on note que 60 ménages relèvent de la période suivante. La rubrique B n'est pas modifiée.",
      "Ex. 1 — La checklist est signée par la finance ET le programme, avec une justification d'au plus une demi-page.",
      "Ex. 2 — Pièce 1 : Complet. Pièce 2 : Complet ; l'écart de 102,40 (2 % de 5 120) est expliqué par l'escompte mentionné sur la facture, à annoter dans le registre.",
      "Ex. 2 — Pièce 3 : À confirmer (aucun BC, aucun devis au-dessus de 1 500). Pièce 4 : À confirmer (liste de présence signée manquante). Pièce 5 : À confirmer (facture à refaire au nom de KAS, preuve de paiement de l'organisation).",
      "Ex. 3 — Soldes : A 400 ; B 700 ; C −4 750 ; D 1 100 ; E 300 ; F 700 ; G 400 ; H 6 000 ; total 4 850. Total dépensé 258 150 EUR, soit 98,2 %.",
      "Ex. 3 — Pourcentages : A 99,2 % ; B 98,9 % ; C 105,0 % ; D 93,9 % ; E 96,7 % ; F 93,6 % ; G 97,1 % ; H 0,0 %. Aucun avenant (C sous 110 %), mais un virement de 4 750 EUR, soit 5,0 % du budget de C, à documenter ; l'usage de la contingence suit la règle d'approbation du contrat.",
      "Ex. 3 — Les textes d'exemple de la colonne G sont remplacés, aucun ne contient « confirmer » : Synthèse B10 = 0.",
      "Ex. 4 — Marge pour un rapport : 4 jours calendaires, 4 jours ouvrés (11, 12, 13, 14 août), inférieure aux 5,5 à 6,5 jours de travail ; avec une clôture au 6 août : 8 jours calendaires, 6 jours ouvrés. Deux rapports par une seule personne : non tenable sans levier.",
      "Ex. 5 — SF-425 : trésorerie 7 800 ; total des dépenses 59 400 ; solde non engagé 30 600 ; frais indirects 5 400, inclus dans le total (54 000 + 5 400).",
      "Ex. 5 — FACE form : certifiable 14 600 ; solde d'avance non justifié 5 400 ; nouvelle avance 18 000 − 5 400 = 12 600.",
    ],
  },

  // ─────────────── 8. Erreurs de terrain ───────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Soumettre un rapport financier sans l'avoir croisé avec le rapport narratif. Parade : la checklist de réconciliation, remplie à deux, signée par la finance ET le programme avant tout dépôt.",
      "Découvrir les pièces incomplètes après la soumission. Parade : le registre du 3-way match tenu à jour, un échantillon écrit, et une date limite de résolution fixée à J-1.",
      "Rater un délai faute de connaître la marge réelle entre la clôture et l'échéance. Parade : un calendrier unique des échéances, la marge chiffrée dès la signature et un rétro-planning partagé.",
      "Corriger un chiffre sans documenter pourquoi. Parade : écritures référencées REG, note de bas de tableau et justification d'écart d'une demi-page ; la cause, pas seulement le chiffre.",
      "Traiter la réconciliation comme une tâche exclusivement financière. Parade : un référent programme nommé, qui signe la checklist et relit la justification.",
      "Passer à côté d'une coupure de période : une facture reçue après la clôture pour une prestation de la période. Parade : un test de coupure à chaque clôture, avec lecture de la date de prestation.",
      "Laisser dans le gabarit des textes d'exemple ou de simples chiffres tapés à la place des formules. Parade : relire G4 à G6, la colonne G et les formules (Formules > Afficher les formules) ; contrôler le format d'affichage en milliers.",
      "Utiliser la règle de flexibilité d'un autre bailleur ou convertir au taux du jour. Parade : la fiche d'exigences par bailleur, validée par écrit, avec l'article du contrat pour chaque règle.",
      "Déposer le jour même, en fin de journée, sans preuve de dépôt. Parade : dépôt visé avant midi, accusé de réception archivé, copie sur un second support.",
    ],
  },

  // ─────────────── 9. Récapitulatif + checklist ───────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez cadré un bailleur : fiche d'exigences de 10 lignes (format, échéance, portail, devise, taux, flexibilité, archivage), accès testés et plafonds de flexibilité calculés par rubrique.",
      "Vous avez constitué et contrôlé un dossier de justification : extraction rapprochée du grand livre, échantillon de 41 pièces selon une règle écrite et registre du 3-way match avec statut et action pour chaque écart.",
      "Vous avez rempli le gabarit gabarit-rapport-financier-bailleur.xlsx (en-tête, budgets, dépenses converties au taux contractuel, test de flexibilité, colonne Justificatifs) jusqu'à une Synthèse à 0 rubrique incomplète.",
      "Vous avez mené une réconciliation finance-programme complète : écart de 400 ménages expliqué par trois hypothèses vérifiées, écritures de correction, justification d'une demi-page et checklist signée des deux fonctions.",
      "Vous avez relu, déposé et archivé le rapport avec sa preuve de dépôt, puis suivi les retours du bailleur.",
      "Vous avez chiffré la marge réelle entre votre clôture et chaque échéance et construit un rétro-planning daté avec une liste de signaux d'alerte.",
      "Vous avez converti le même socle comptable en SF-425 et en FACE form avec un tie-out de cohérence.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "J'ai une fiche d'exigences par bailleur, validée, avec l'article du contrat pour chaque règle (échéance, devise, taux, flexibilité).",
      "Je sais expliquer pourquoi un bailleur impose son propre format et citer un exemple pour USAID/BHA, UE/ECHO et une agence onusienne.",
      "Je sais appliquer le 3-way match (contrat ou BC, facture, preuve de paiement) et vérifier le dossier d'achat qui le précède.",
      "Mon registre du 3-way match est à jour et la Synthèse du gabarit affiche 0 rubrique à justificatifs incomplets avant tout dépôt.",
      "J'ai complété le gabarit ligne par ligne jusqu'au % consommé et testé chaque rubrique contre le seuil de flexibilité.",
      "J'ai mené une réconciliation finance-programme avec la checklist, signée par les deux fonctions, et je sais écrire une justification d'écart d'une demi-page.",
      "Je sais identifier les signaux d'alerte à traiter avant la date limite plutôt qu'après.",
      "Je connais le délai réel entre ma clôture comptable mensuelle et la prochaine échéance de rapportage, et j'ai un rétro-planning pour elle.",
      "J'archive chaque rapport déposé avec la preuve de dépôt et le jeu de pièces complet, et je sais retrouver une pièce en moins de deux minutes.",
    ],
  },

  // ─────────────── 10. Clôture ───────────────
  {
    type: 'closing',
    nextModuleHint: "Prochain module : Module 06 — Préparation & Réussite des Audits Financiers. Vous y réutiliserez le registre du 3-way match, le journal des corrections et l'archive de période construits ici pour organiser le dossier d'audit, répondre aux auditeurs externes et gérer leurs recommandations.",
  },
]
