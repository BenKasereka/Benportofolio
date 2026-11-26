// Module 04 — Entrepôt & Gestion des Stocks
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates) : théorie strictement utile
// à l'action, puis chaque procédure (état des lieux, inventaire dans le
// template FIFO/FEFO, tri FEFO et radiation, synthèse, réception, sortie et
// fiche de stock, comptages, rapport d'écart, points de contrôle) découpée
// en étapes (une diapositive par étape), appliquée à un cas fil rouge unique
// (entrepôt de la base de Lukando de l'ONG Kemora Santé, Nord-Kivu — cas
// fictif, suite du Module 01), cas résolu, exercices corrigeables et
// check-lists d'auto-contrôle.
export default [
  {
    type: 'cover',
    title: 'Entrepôt & Gestion des Stocks',
    hook: "En cinq jours après votre prise de poste, vous aurez repris le contrôle d'un entrepôt humanitaire sans l'arrêter : un état des lieux chiffré, le stock réel reporté lot par lot dans la fiche d'inventaire FIFO/FEFO avec ses alertes, les lots périmés isolés et radiés, un rapport d'écart signé et un calendrier de comptages — exactement ce qu'un responsable d'entrepôt expérimenté produit, étape par étape.",
  },
  {
    type: 'objectives',
    items: [
      "Auditer un entrepôt repris en cours de fonctionnement selon les trois exigences de base (disposition, sécurité physique, contrôle d'accès), en produisant une grille d'état des lieux avec photos datées, actions et échéances.",
      "Choisir FIFO ou FEFO pour chaque article et appliquer FEFO physiquement (tri, quarantaine, étiquetage, radiation), en produisant un entrepôt réorganisé et un procès-verbal de radiation.",
      "Transférer le stock réel, lot par lot, dans fiche-inventaire-entrepot-fifo-fefo.xlsx colonne par colonne, puis lire ses alertes FEFO et sa synthèse par catégorie, en produisant un fichier daté v01 cohérent avec le comptage physique.",
      "Réceptionner une livraison et tenir des fiches de stock mises à jour au moment de chaque mouvement, en produisant un bon de réception signé et des fiches rapprochées du template.",
      "Planifier un inventaire complet puis des comptages tournants, en produisant un calendrier de comptage et des feuilles de comptage rapprochées du stock théorique.",
      "Documenter tout écart avec rapport-ecarts-stock.docx (quantités, pourcentage, causes, action corrective, mesure préventive, validation), en produisant un rapport cohérent chiffre pour chiffre avec la fiche d'inventaire.",
      "Installer les points de contrôle qui préviennent pertes, vols et dommages, en produisant une liste fermée de personnes autorisées, un registre d'accès et une routine de clôture quotidienne.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne vous demande pas de retenir des définitions : il vous fait produire, dans l'ordre réel d'une prise de poste, les sept livrables qu'un responsable d'entrepôt doit avoir en main au bout d'une semaine. Chaque livrable est construit étape par étape sur un même cas fil rouge, puis vous le refaites seul sur le cas de Maiduguri (Nigeria).",
    ],
    bullets: [
      "Livrable 1 — Une grille d'état des lieux de l'entrepôt (disposition, sécurité, accès) avec photos datées, plan de correction, liste fermée des personnes autorisées et registre d'accès.",
      "Livrable 2 — La fiche d'inventaire fiche-inventaire-entrepot-fifo-fefo.xlsx remplie lot par lot, enregistrée en version datée, avec ses alertes FEFO lues et sa synthèse par catégorie.",
      "Livrable 3 — Un entrepôt trié FEFO : emplacements étiquetés, périmés isolés en quarantaine puis radiés avec procès-verbal.",
      "Livrable 4 — Un bon de réception signé et des fiches de stock mises à jour à chaque entrée et chaque sortie.",
      "Livrable 5 — Un point de stock hebdomadaire à la coordination : synthèse, alertes, couverture de stock, écarts ouverts, décisions demandées.",
      "Livrable 6 — Un calendrier d'inventaire complet et de comptages tournants, avec feuilles de comptage rapprochées.",
      "Livrable 7 — Un rapport d'écart de stock rapport-ecarts-stock.docx complété, validé et cohérent avec la fiche d'inventaire.",
    ],
    example: {
      title: 'Le cas fil rouge de tout le module (fictif mais réaliste)',
      lines: [
        "Organisation : Kemora Santé, ONG médicale internationale (fictive) — la même qu'au Module 01. Vous êtes son responsable d'entrepôt, affecté à la base de Lukando (Nord-Kivu, RDC) en pleine réponse choléra.",
        "Lieu : entrepôt de la base de Lukando, un hangar loué de 180 m² (12 m × 15 m) qui alimente l'unité de traitement du choléra (UTC) de Bweza et les trois points de réhydratation orale (Kasika, Mubimbi, Bweza).",
        "Votre arrivée : lundi 23 mars 2026 (J1). Vous reprenez l'entrepôt de Fabrice Mwamba, magasinier sortant, présent jusqu'au vendredi 27 mars (J5). Équipe : Esther Mumbere et Joël Kitsa (manutentionnaires), Amisi (gardien de nuit).",
        "Stock : 10 lots de médicaments, de denrées et de biens non alimentaires, dont des lots proches de leur date de péremption ; 200 kits de traitement du choléra attendus le mercredi 25 mars (ceux du Module 01).",
        "Vos interlocuteurs : Jean-Marc Ilunga, coordinateur logistique pays à Goma (superviseur logistique, il valide vos rapports) ; Dr Clarisse Kahindo, coordinatrice de projet ; Amina Sow, point focal du Logistics Cluster.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Votre point de départ : une passation orale que vous ne pouvez pas croire sur parole",
    body: [
      "Le lundi 23 mars à 7h30, Fabrice Mwamba vous fait le tour de l'entrepôt en vingt minutes. Il est de bonne foi, il part vendredi, et tout ce qu'il dit est oral, non daté et non vérifié. C'est la situation normale d'une reprise d'entrepôt : un historique de mouvements dont vous n'êtes pas certain de la fiabilité.",
    ],
    example: {
      title: 'Ce que vous avez noté dans votre carnet (lundi 23/03, 7h45)',
      lines: [
        "« Le stock est à jour, je tiens les fiches tous les jours. »",
        "« Les médicaments sont à droite, la nourriture au fond, les bâches devant. »",
        "« Il y a deux clés pour la porte principale : moi et le chauffeur. La porte de derrière, on la ferme de l'intérieur. »",
        "« Je travaille en FIFO : ce qui est arrivé en premier sort en premier. »",
        "« On a un ou deux lots proches de la date, je crois, rien de grave. »",
        "« Les 200 kits manquants arrivent mercredi ; il faudra trouver de la place. »",
      ],
    },
    tip: "Recopiez chaque affirmation mot pour mot, avec l'heure et le nom de la personne. Vous allez les vérifier une par une : sans trace écrite, vous ne saurez plus ce qui était un fait et ce qui était un « je crois ».",
    pitfall: "Deux de ces phrases sont déjà des signaux d'alerte : « FIFO » appliqué à des produits périssables, et « un ou deux lots proches de la date, je crois » sans aucun chiffre. Vous ne les jugez pas : vous les vérifiez par le comptage.",
  },
  {
    type: 'stat-callout',
    stat: 'J1 → J5',
    caption: "Cinq jours pour reprendre le contrôle d'un entrepôt sans l'arrêter : état des lieux (J1), stock réel dans le template (J1–J3), tri FEFO (J2–J3), synthèse par catégorie (J3), inventaire complet de référence (J5).",
    context: "Le découpage de ce module suit exactement ce calendrier : chaque procédure indique le jour où vous la réalisez.",
  },
  {
    type: 'concept',
    title: "Pourquoi les standards Sphere s'appliquent aussi à l'entrepôt",
    body: [
      "Le Manuel Sphere (Charte humanitaire et standards minimums de la réponse humanitaire) est surtout connu pour ses standards de distribution : quantité d'eau par personne, surface d'abri minimale, ration alimentaire. On oublie qu'il fixe aussi, indirectement, des exigences sur l'entrepôt qui précède cette distribution : si l'aide doit arriver intacte, en quantité et en qualité au bénéficiaire, il faut un entrepôt qui la protège entre la réception et la sortie.",
      "Un entrepôt humanitaire correctement géré garantit trois choses à tout moment : la disposition, la sécurité physique et le contrôle d'accès. Ce sont les trois lignes de votre grille d'état des lieux (Procédure 1).",
    ],
    highlight: "Un entrepôt qui respecte ces trois principes réduit mécaniquement le risque de perte, de vol et de détournement — bien avant de parler d'inventaire ou de logiciel de gestion.",
    example: {
      title: 'Fil rouge — pourquoi cela compte à Lukando',
      lines: [
        "Un kit de traitement du choléra n'a de valeur pour un malade de Bweza que s'il arrive complet, non périmé et non mouillé.",
        "Si le stock est empilé jusqu'au plafond sans allée, personne ne peut vérifier ce qui s'y trouve réellement : ce n'est pas un gain de place, c'est une zone aveugle.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: "Les 3 exigences de base d'un entrepôt humanitaire conforme",
    columns: ['Exigence', 'Ce que vous vérifiez', 'Preuve que vous gardez', 'Constat à Lukando (J1)'],
    rows: [
      ['Disposition', "Espace organisé par catégorie (médical, alimentaire, NFI), allées dégagées pour inspecter, manutentionner et évacuer, emplacements étiquetés.", "Plan de l'entrepôt et photos datées.", "Médicaments et CSB+ sur la même étagère ; allée centrale bloquée par des bâches."],
      ['Sécurité physique', "Accès verrouillé, registre des entrées/sorties du personnel, séparation entre la zone de stockage et la zone de réception/expédition.", "Liste des clés, photos des portes, registre.", "Porte arrière fermée par une cale ; camions déchargés devant les étagères."],
      ["Contrôle d'accès", "Liste fermée des personnes autorisées à entrer en zone de stockage, avec une raison enregistrée à chaque entrée.", "Liste signée et registre d'accès.", "Aucune liste, aucun registre ; sept personnes vues entrer en une matinée."],
    ],
  },
  {
    type: 'concept',
    title: 'FIFO et FEFO : deux logiques, pas une option de préférence',
    body: [
      "FIFO (First In, First Out) : le premier article entré est le premier sorti. C'est la logique par défaut pour tout ce qui n'a pas de date de péremption : bâches, couvertures, kits NFI, pièces détachées.",
      "FEFO (First Expired, First Out) : l'article dont la date de péremption est la plus proche sort en premier, indépendamment de sa date d'entrée en stock. C'est la règle obligatoire pour tout produit médical ou alimentaire : un lot arrivé la semaine dernière peut périmer avant un lot arrivé il y a trois mois.",
    ],
    highlight: "Piège classique : ranger les nouveaux arrivages devant les anciens « pour que ce soit plus simple à charger » inverse silencieusement FEFO. La solution n'est pas la vigilance individuelle, qui finit toujours par faillir : c'est une disposition physique qui rend l'erreur difficile (nouveaux lots derrière les anciens, date de péremption visible sur chaque palette).",
    example: {
      title: 'Fil rouge — deux lots de Ringer lactate, FIFO contre FEFO',
      lines: [
        "Lot L2025-305, entré en décembre, périme le 15/06/2026 (82 jours restants au 25/03).",
        "Lot L2026-009, entré en mars, périme le 20/05/2026 (56 jours restants au 25/03) — arrivé après, mais périmé avant.",
        "FIFO sortirait L2025-305 d'abord : L2026-009 resterait au fond et périmerait. FEFO sort L2026-009 d'abord.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: "Quelle logique appliquer, article par article (stock de Lukando)",
    columns: ['Article', 'Catégorie dans le template', 'Logique', 'Pourquoi'],
    rows: [
      ['Sels de réhydratation orale (SRO), Ringer lactate, doxycycline, kits de traitement du choléra', 'Médical', 'FEFO obligatoire', "Produits médicaux : une date de péremption dépassée rend le lot inutilisable."],
      ['CSB+ (farine enrichie), huile végétale fortifiée', 'Alimentaire', 'FEFO obligatoire', "Denrées : le lot qui périme le premier sort le premier, quelle que soit la date d'entrée."],
      ['Bâches, seaux avec couvercle', 'NFI (non périssable)', 'FIFO', "Pas de date de péremption : le plus ancien sort d'abord pour limiter le vieillissement."],
      ['Carburant, lubrifiants (hors stock médical)', 'Suivi à part', 'FEFO si date fournisseur, sinon FIFO', "Règle de la source : la date de péremption du fournisseur décide, à défaut l'ordre d'arrivée."],
    ],
  },
  {
    type: 'concept',
    title: 'La fiche de stock : le document qui doit toujours dire la vérité',
    body: [
      "Une fiche de stock (stock card) ou fiche de casier (bin card) est le document, papier ou numérique, attaché à un article ou à un emplacement. Elle enregistre chaque mouvement : entrée, sortie, quantité, date, référence du document source (bon de réception, bon de sortie).",
      "Sa règle d'or : elle se met à jour AU MOMENT du mouvement, jamais après coup, jamais « de mémoire » en fin de journée. C'est la seule preuve écrite, indépendante du système informatique, que le stock déclaré correspond au stock réel. Un audit ou un bailleur la recoupe avec les bons signés.",
    ],
    example: {
      title: 'Fil rouge — fiche de stock papier de la doxycycline (état trouvé le 23/03)',
      lines: [
        "Article : MED-DOXY-100 — Doxycycline 100 mg (boîte de 100) | Lot L2025-266 | Péremption 31/05/2026 | Emplacement A-03-1",
        "Date     | Document | Provenance / Destination | Entrée | Sortie | Solde | Visa",
        "20/01    | BR-0087  | Goma                     | 60     |        | 60    | FM",
        "09/03    | BS-0287  | UTC Bweza                |        | 10     | 50    | FM",
        "12/03    | BS-0301  | PRO Mubimbi              |        | 8      | 42    | FM",
      ],
    },
    tip: "Une fiche à jour « en théorie » mais remplie une fois par semaine perd sa valeur probante, même si le stock physique est correct par chance.",
  },
  {
    type: 'concept',
    title: "Pourquoi un écart d'inventaire n'est jamais une broutille administrative",
    body: [
      "Redevabilité envers les bailleurs : l'aide humanitaire est financée par des fonds publics ou des dons, souvent avec obligation contractuelle de traçabilité complète. Un écart non expliqué peut entraîner un remboursement ou la suspension d'un financement.",
      "Risque de détournement : un écart répété sur les mêmes catégories (carburant, médicaments, denrées alimentaires) est le signal classique d'un détournement organisé, pas d'une simple erreur de comptage.",
      "Impact direct sur les bénéficiaires : chaque unité manquante au moment de la distribution est une personne qui ne reçoit pas ce qui lui était destiné.",
    ],
    highlight: "Un inventaire physique n'est pas un exercice comptable déconnecté du terrain : c'est un outil de protection — de l'organisation, de l'équipe entrepôt (qui a intérêt à ce que les écarts soient documentés plutôt que découverts par surprise lors d'un audit) et des bénéficiaires.",
    example: {
      title: 'Fil rouge — la question qu\'un bailleur peut vous poser',
      lines: [
        "« Prouvez-moi que ces 500 kits sont bien arrivés puis sortis comme déclaré. »",
        "Votre réponse tient en trois documents recoupés : bons de réception signés, fiches de stock à jour, bons de sortie signés par le destinataire.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Les points de contrôle qui préviennent la majorité des pertes, vols et dommages',
    columns: ['Risque', 'Point de contrôle', 'Preuve'],
    rows: [
      ['Entrée non tracée', "Réception contradictoire : comptage devant le livreur, bon de réception signé des deux parties.", "Bon de réception numéroté."],
      ['Sortie sans trace', "Aucun colis ne quitte l'entrepôt sans bon de sortie numéroté, signé du demandeur et du responsable.", "Bon de sortie numéroté."],
      ['Accès libre au stock', "Liste fermée, registre d'accès, clés en nombre connu et nominatif.", "Liste signée, registre."],
      ['Lot périssable oublié', "Tri FEFO, étiquette de péremption visible, lecture hebdomadaire de la synthèse.", "Template et synthèse datés."],
      ['Écart caché', "Comptages tournants et rapport écrit pour tout écart, même minime.", "Rapports numérotés."],
      ['Dommages (eau, nuisibles, chute)', "Palettes, distance aux murs, inspection hebdomadaire du toit et du sol.", "Fiche d'inspection, photos."],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les deux templates de ce module : ce que vous saisissez, ce qui se calcule',
    columns: ['Template', 'Onglet ou section', 'Ce que vous saisissez', 'Ce qui est calculé ou à ne pas toucher'],
    rows: [
      ['fiche-inventaire-entrepot-fifo-fefo.xlsx', 'Inventaire (lignes 5 à 24)', "A Référence article, B Désignation, C Catégorie, D N° de lot, E Date de péremption, F Qté entrée, G Qté sortie.", "H Stock disponible, I Jours avant péremption, J Alerte FEFO : formules, ne rien saisir."],
      ['fiche-inventaire-entrepot-fifo-fefo.xlsx', 'Synthèse par catégorie', "Rien : onglet entièrement calculé.", "Stock disponible total, articles URGENT et articles PÉRIMÉS par catégorie, à partir de l'Inventaire."],
      ['rapport-ecarts-stock.docx', "6 sections", "1 Identification, 2 Article et lot, 3 Quantités, 4 Causes, 5 Action corrective et mesure préventive, 6 Validation.", "Rien : le document est entièrement rédigé par vous."],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire opérationnel du module',
    terms: [
      { term: 'Stock card / bin card', definition: "Fiche de suivi des mouvements d'un article ou d'un emplacement, mise à jour à chaque entrée et sortie." },
      { term: 'FIFO / FEFO', definition: "Le plus ancien entré sort en premier / le plus proche de la péremption sort en premier — priorité absolue sur le périssable." },
      { term: 'Lot', definition: "Ensemble d'unités fabriquées ensemble, identifié par un numéro lu sur l'emballage et une date de péremption commune." },
      { term: 'Bon de réception', definition: "Document numéroté qui constate ce qui est réellement arrivé : quantités annoncées, reçues, acceptées, refusées." },
      { term: 'Bon de sortie', definition: "Document numéroté, signé du demandeur, qui autorise et prouve la sortie d'un article de l'entrepôt." },
      { term: 'Quarantaine', definition: "Zone fermée où l'on isole un lot douteux, périmé ou endommagé en attendant une décision, hors du stock disponible." },
      { term: 'Radiation', definition: "Retrait formel d'un article inutilisable du stock, avec procès-verbal signé et justification écrite." },
      { term: 'Shrinkage (perte de stock)', definition: "Différence entre stock théorique et stock physique non expliquée par un mouvement documenté : casse, vol, erreur, péremption non retirée." },
      { term: 'Buffer stock (stock tampon)', definition: "Quantité minimale conservée en réserve pour absorber un pic de demande ou une rupture d'approvisionnement." },
      { term: 'Cycle count (comptage tournant)', definition: "Inventaire physique partiel, réalisé régulièrement sur une partie du stock, en complément de l'inventaire complet." },
      { term: 'LINK', definition: "Système de gestion des actifs et des stocks utilisé par plusieurs grandes ONG ; le principe reste celui de ce module : chaque mouvement est enregistré au moment où il a lieu." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Votre feuille de route des 5 premiers jours',
    columns: ['Procédure', 'Quand', 'Livrable produit'],
    rows: [
      ["1 — État des lieux physique de l'entrepôt", 'J1, avant tout document', "Grille d'état des lieux, plan de correction, liste fermée, registre d'accès"],
      ['2 — Comptage de prise de poste et transfert dans le template', 'J1–J3', "Fiche d'inventaire v01 datée, écarts de comptage listés"],
      ['3 — Tri FEFO, quarantaine et radiation', 'J2–J3', 'Entrepôt réorganisé, emplacements étiquetés, PV de radiation'],
      ['4 — Réceptionner et mettre en stock', 'À chaque livraison (ici J3)', "Bon de réception signé, entrée enregistrée"],
      ['5 — Sortir un article et tenir la fiche de stock', 'À chaque sortie', 'Bon de sortie, fiches et template à jour'],
      ['6 — Synthèse par catégorie et point de stock', 'J3, puis chaque semaine', 'Synthèse lue, couverture calculée, message hebdomadaire'],
      ['7 — Inventaire complet et comptages tournants', 'J5, puis chaque semaine', 'Calendrier, feuilles de comptage, tableau des écarts'],
      ["8 — Documenter un écart", "Dès qu'un écart persiste", "rapport-ecarts-stock.docx signé et validé"],
      ['9 — Points de contrôle antipertes', 'J5 et en continu', 'Séparation des tâches, routine de clôture, inspection hebdomadaire'],
    ],
  },

  // ───────────── PROCÉDURE 1 — État des lieux physique ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: "Préparer la visite : grille d'état des lieux et plan de l'entrepôt",
    intro: "Jour 1, avant de toucher au moindre document. Vous parcourez l'entrepôt tel qu'il fonctionne, vous mesurez, vous photographiez, et vous notez tout écart avec les standards minimums : vous les corrigerez progressivement, mais il faut d'abord savoir précisément où vous en êtes. Vous avez besoin d'un téléphone avec appareil photo (date activée), d'un mètre ruban et d'un carnet.",
    steps: [
      {
        title: 'Ouvrez votre grille avant la visite',
        actions: [
          "Créez un document « Grille d'état des lieux » avec 6 colonnes : Exigence | Point contrôlé | Constat | Preuve (n° de photo) | Action | Échéance.",
          "Préparez trois blocs de lignes : Disposition, Sécurité physique, Contrôle d'accès (les 3 exigences de base).",
          "Demandez à Fabrice Mwamba de vous accompagner, mais ne lui demandez pas de ranger avant : vous voulez voir l'entrepôt tel qu'il est.",
        ],
      },
      {
        title: "Dessinez le plan de l'entrepôt",
        actions: [
          "Mesurez longueur et largeur, puis reportez sur une feuille les portes, les ouvertures, les étagères et les piles de palettes.",
          "Nommez les zones : A médical, B alimentaire, C NFI, Q quarantaine, R réception/expédition (à créer si elle n'existe pas).",
          "Notez le nombre d'étagères, de niveaux et de palettes : c'est la base de votre future numérotation d'emplacements.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — plan relevé le lundi 23/03 à 8h00',
      lines: [
        "Hangar 12 m × 15 m = 180 m² ; une grande porte coulissante côté cour ; une porte de service à l'arrière ; 9 étagères métalliques à 4 niveaux ; 14 palettes au sol.",
        "Zones telles que trouvées : médicaments et CSB+ mélangés sur les étagères 1 à 4 ; huile au sol, mur nord ; bâches devant, dans l'allée centrale ; aucune zone de réception ni de quarantaine.",
        "Codification d'emplacement retenue : Zone-Étagère-Niveau, par exemple A-03-1 = zone médical, étagère 3, niveau 1.",
      ],
    },
    result: "Un plan daté, une grille ouverte et prête à recevoir vos constats, et le mètre ruban dans la poche.",
    tip: "Photographiez chaque constat en faisant figurer dans l'image un papier avec le numéro de la ligne de votre grille : dans trois semaines, vous saurez à quel constat se rapporte chaque photo.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Contrôler la disposition : catégories, allées, empilement, étiquetage',
    intro: "Une disposition correcte permet à n'importe qui d'inspecter, de manutentionner et d'évacuer sans déplacer dix cartons. Vous remplacez le mot « désordre » par des mesures : une allée à 0,6 m est un constat, « c'est le désordre » est une opinion.",
    steps: [
      {
        title: 'Contrôlez la séparation par catégorie',
        actions: [
          "Notez, étagère par étagère, ce qu'elle contient.",
          "Comparez avec les trois catégories : médical, alimentaire, NFI.",
          "Repérez tout mélange, surtout médical et alimentaire sur la même étagère, ou un produit chimique près des denrées.",
        ],
      },
      {
        title: "Mesurez les allées et vérifiez l'empilement",
        actions: [
          "Mesurez la largeur de l'allée centrale et des allées latérales : repère usuel de terrain, au moins 1 m pour que deux personnes se croisent avec un carton (à adapter à votre organisation).",
          "Vérifiez que rien n'est posé directement sur le sol ni collé au mur : palettes sous les cartons, quelques dizaines de centimètres de jeu avec les murs pour inspecter et aérer.",
          "Vérifiez que chaque porte, chaque extincteur et chaque sortie de secours reste accessible.",
        ],
      },
      {
        title: "Contrôlez l'étiquetage des emplacements",
        actions: [
          "Sur chaque étagère ou palette, cherchez la référence, le lot et la date de péremption, lisibles sans déplacer un colis.",
          "Comptez les emplacements sans étiquette ou mal étiquetés.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — constats de disposition inscrits dans la grille',
      lines: [
        "D1 — Étagère 3 : SRO (médical) et sacs de CSB+ (alimentaire) sur le même niveau → mélange médical/alimentaire. Photo 4.",
        "D2 — Allée centrale : 0,6 m, bloquée par 40 bâches empilées → inspection et évacuation impossibles. Photos 5–6.",
        "D3 — 50 bidons d'huile posés au sol contre le mur nord, traces d'humidité. Photo 7.",
        "D4 — Étiquettes de lot et de péremption absentes sur 8 emplacements sur 10. Photo 8.",
      ],
    },
    pitfall: "Noter « entrepôt désorganisé » sans chiffre. Une grille sans mesure ne permet ni de prioriser ni de montrer, dans un mois, ce qui a été amélioré.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Contrôler la sécurité physique : portes, clés, flux, toit, incendie',
    intro: "La sécurité physique, c'est : un accès verrouillé, une séparation entre la zone de stockage et la zone de réception/expédition pour limiter les manipulations non tracées, et un bâtiment qui protège le stock. Vous testez, vous ne croyez pas « c'est verrouillé ».",
    steps: [
      {
        title: 'Testez les portes et inventoriez les clés',
        actions: [
          "Tirez et poussez chaque porte, chaque verrou, chaque volet : notez ce qui cède ou se contourne.",
          "Faites la liste des clés : combien d'exemplaires, qui détient chacun, lesquels sont des doubles non déclarés.",
          "Notez toute ouverture (fenêtre, aération) non grillagée.",
        ],
      },
      {
        title: 'Observez un déchargement ou un chargement',
        actions: [
          "Repérez où se posent les colis qui arrivent ou partent et qui les compte.",
          "Vérifiez qu'une zone distincte (R) sépare la réception/expédition de la zone de stockage.",
        ],
      },
      {
        title: 'Repérez les risques de dommage',
        actions: [
          "Cherchez les infiltrations d'eau, les traces de rongeurs, les sources de chaleur et les stocks exposés au soleil.",
          "Contrôlez l'extincteur : présence, accessibilité, date du dernier contrôle ; vérifiez l'interdiction de fumer.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — constats de sécurité physique',
      lines: [
        "S1 — Porte de service arrière : fermée de l'intérieur par une cale en bois, aucun cadenas. Photo 9.",
        "S2 — Porte principale : 2 clés connues (F. Mwamba, le chauffeur) et un double non listé chez le propriétaire du hangar.",
        "S3 — Les camions déchargent devant l'étagère médicale : pas de zone R, les colis sont comptés « à vue » sans bon.",
        "S4 — Taches d'humidité dans l'angle nord-est, à 1 m de 12 sacs de CSB+ et des 50 bidons d'huile posés au sol.",
        "S5 — Un seul extincteur, dernier contrôle daté de 2024.",
      ],
    },
    pitfall: "Accepter « la porte est toujours fermée » sans la tester. Une porte fermée par une cale n'est pas une porte verrouillée : seul un cadenas dont vous connaissez les clés est une sécurité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: "Contrôler et organiser l'accès : liste fermée, registre, clés",
    intro: "Le contrôle d'accès n'est pas de la méfiance envers l'équipe : c'est ce qui permet, le jour où un écart apparaît, de reconstituer ce qui s'est passé au lieu de soupçonner tout le monde. Il repose sur trois objets : une liste fermée, un registre, des clés nominatives.",
    steps: [
      {
        title: 'Établissez la liste fermée des personnes autorisées',
        actions: [
          "Demandez qui a besoin d'entrer en zone de stockage pour faire son travail, et limitez la liste au strict nécessaire (repère : 4 à 6 personnes pour un entrepôt de cette taille).",
          "Écrivez pour chacune : nom, fonction, motif d'accès, validité.",
          "Faites signer la liste par vous et valider par le coordinateur logistique pays ; toute personne hors liste entre accompagnée.",
        ],
      },
      {
        title: 'Ouvrez le registre des entrées',
        actions: [
          "Prenez un cahier à pages numérotées, fixé à l'entrée : date, heure d'entrée, heure de sortie, nom, motif, accompagnateur, signature.",
          "Faites signer le registre chaque soir par le responsable d'entrepôt (vous).",
        ],
      },
      {
        title: 'Reprenez le contrôle des clés',
        actions: [
          "Dressez la liste des clés, avec le nom du détenteur et la date de remise.",
          "Remplacez le cadenas ou le barillet dès qu'un double non maîtrisé existe (ici le double du propriétaire).",
          "Placez un jeu de réserve dans une enveloppe scellée chez le coordinateur logistique pays.",
        ],
      },
    ],
    table: {
      columns: ['Nom', 'Fonction', "Motif d'accès", 'Validité'],
      rows: [
        ['[Vous]', "Responsable d'entrepôt", 'Gestion, contrôle, inventaires', 'Permanent'],
        ['Fabrice Mwamba', 'Magasinier (jusqu\'au 27/03)', 'Réceptions, sorties, fiches de stock', 'Jusqu\'au 27/03 puis retrait'],
        ['Esther Mumbere', 'Manutentionnaire', 'Manutention sous supervision', 'Permanent, horaires de travail'],
        ['Joël Kitsa', 'Manutentionnaire', 'Manutention sous supervision', 'Permanent, horaires de travail'],
        ['Jean-Marc Ilunga', 'Coordinateur logistique pays', 'Supervision et contrôle', 'Sur visite, accompagné'],
      ],
    },
    result: "Livrable 1, partie accès : une liste fermée signée et validée, un registre ouvert, une liste de clés nominative.",
    tip: "Pour un entrepôt de petite équipe, croisez les contrôles : le responsable contrôle le magasinier, et le coordinateur contrôle le responsable lors d'une visite inopinée mensuelle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: "Prioriser les écarts et lancer le plan de correction",
    intro: "Vous ne corrigez pas tout le premier jour : vous classez les constats par risque, vous attribuez un responsable et une échéance à chacun, et vous envoyez la grille à votre coordination dans les 24 heures. Ce qui dépasse votre pouvoir (la toiture, par exemple) devient une demande de décision écrite.",
    steps: [
      {
        title: 'Classez chaque constat',
        actions: [
          "Priorité 1 (J1–J2) : risque immédiat pour le stock (accès non maîtrisé, eau, périmés exposés).",
          "Priorité 2 (J3–J7) : risque de perte documentaire ou de manutention (zones, étiquettes, flux).",
          "Priorité 3 (J8–J30) : amélioration durable (rayonnages, éclairage, équipements).",
        ],
      },
      {
        title: 'Attribuez et envoyez',
        actions: [
          "Pour chaque action : un responsable nommé, une échéance, le coût éventuel.",
          "Séparez ce que vous décidez de ce que vous demandez (réparation du toit auprès du propriétaire, via la coordination).",
          "Envoyez la grille et les photos à Jean-Marc Ilunga, avec Dr Kahindo en copie, avant 24 heures.",
        ],
      },
    ],
    table: {
      columns: ['Action', 'Priorité', 'Responsable', 'Échéance'],
      rows: [
        ['Cadenas sur la porte arrière, liste des clés, changement du barillet de la porte principale', '1', 'Vous', '23/03 17h00'],
        ['Liste fermée signée et registre d\'accès en service', '1', 'Vous, validation J.-M. Ilunga', '23/03 17h00'],
        ['Dégager l\'allée centrale (40 bâches) et poser les 50 bidons sur palettes', '1', 'E. Mumbere, J. Kitsa', '24/03'],
        ['Séparer médical et alimentaire ; créer zone Q et zone R', '2', 'Vous', '27/03'],
        ['Étiqueter tous les emplacements (réf., lot, péremption)', '2', 'Équipe entrepôt', '27/03'],
        ['Réparer la fuite du toit, angle nord-est (demande au propriétaire)', '2', 'Coordination logistique pays', '03/04'],
        ['Remplacer / faire contrôler l\'extincteur', '3', 'Vous', '10/04'],
      ],
    },
    result: "Livrable 1 terminé : grille d'état des lieux avec photos datées, plan de correction chiffré en priorités, liste fermée, registre et clés maîtrisées.",
    pitfall: "Garder la grille pour vous. Si la coordination ne la reçoit pas, la réparation du toit ne sera jamais décidée, et personne ne saura dans six mois d'où vient la dégradation du stock.",
  },

  // ───────────── PROCÉDURE 2 — Comptage de prise de poste et template ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Préparer le comptage de prise de poste : périmètre, équipe, feuilles',
    intro: "Jour 2 (mardi 24/03). Vous reportez dans le template l'état RÉEL constaté par un comptage physique, pas les chiffres de l'ancien système si vous avez un doute sur leur fiabilité. Le comptage se prépare : périmètre, équipe, mouvements gelés, feuilles de comptage sans la quantité théorique.",
    steps: [
      {
        title: 'Fixez le périmètre et l\'équipe',
        actions: [
          "Périmètre : tous les lots des zones A, B, C et de toute zone de quarantaine.",
          "Deux compteurs indépendants (Esther Mumbere et Joël Kitsa), vous supervisez, Fabrice Mwamba assiste comme témoin du comptage contradictoire.",
          "Prévoyez une demi-journée et prévenez les programmes la veille.",
        ],
      },
      {
        title: 'Gelez les mouvements',
        actions: [
          "Aucune réception ni sortie pendant le comptage ; une urgence médicale sort sur un bon de sortie rempli sur place, traité après le comptage.",
          "Affichez « INVENTAIRE EN COURS » sur la porte de l'entrepôt.",
        ],
      },
      {
        title: 'Préparez les feuilles de comptage',
        actions: [
          "Une ligne par lot : Référence | Désignation | Lot lu sur l'emballage | Péremption lue | Emplacement | Quantité comptée | Visa.",
          "Ne mettez PAS la quantité de l'ancienne fiche sur la feuille remise aux compteurs : comptage à l'aveugle. Gardez-la pour le rapprochement.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — feuille de comptage remise aux compteurs (extrait)',
      lines: [
        "Réf. | Désignation | Lot (à lire) | Péremption (à lire) | Emplacement | Comptage | Visa",
        "MED-SRO-20 | SRO, carton de 500 sachets | ........ | ........ | A-01-1 | ........ | ........",
        "MED-RL-500 | Ringer lactate 500 ml, carton de 20 poches | ........ | ........ | A-02-1 | ........ | ........",
        "ALI-CSB-25KG | CSB+ sac de 25 kg | ........ | ........ | B-01-1 | ........ | ........",
      ],
    },
    pitfall: "Donner aux compteurs l'ancienne fiche « pour aller plus vite ». Quelqu'un qui connaît le chiffre attendu recompte jusqu'à le retrouver : vous ne mesurez plus rien.",
    result: "Périmètre, équipe, créneau et feuilles prêts ; les programmes sont prévenus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Compter lot par lot et relever lot et péremption sur l\'emballage',
    intro: "Le comptage physique est la seule base fiable. Le lot et la date de péremption se lisent sur l'emballage, jamais sur la fiche ni de mémoire : c'est ce qui permet ensuite d'appliquer FEFO.",
    steps: [
      {
        title: 'Comptez chaque emplacement',
        actions: [
          "Lisez la référence, le numéro de lot et la date de péremption sur le colis, et notez-les sur la feuille.",
          "Comptez les colis fermés, puis le contenu des colis ouverts ; mettez à part les colis endommagés et notez-les.",
          "Faites compter deux fois par deux personnes différentes ; si les résultats diffèrent, recomptez ensemble.",
        ],
      },
      {
        title: 'Rapprochez avec l\'ancienne fiche',
        actions: [
          "Une fois toutes les feuilles signées, reportez en dernière colonne la quantité de l'ancienne fiche de stock.",
          "Calculez l'écart pour chaque lot : compté moins fiche.",
          "Collez sur chaque emplacement compté une étiquette « compté le 24/03 ».",
        ],
      },
    ],
    table: {
      columns: ['Réf. — lot', 'Péremption lue', 'Compté', 'Ancienne fiche', 'Écart'],
      rows: [
        ['MED-SRO-20 — L2025-211', '20/04/2026', '46', '46', '0'],
        ['MED-SRO-20 — L2026-040', '31/01/2027', '200', '200', '0'],
        ['MED-RL-500 — L2025-305', '15/06/2026', '50', '50', '0'],
        ['MED-RL-500 — L2026-009', '20/05/2026', '60', '60', '0'],
        ['MED-DOXY-100 — L2025-266', '31/05/2026', '36', '42', '−6'],
        ['ALI-CSB-25KG — L2025-402', '10/04/2026', '54', '54', '0'],
        ['ALI-CSB-25KG — L2026-017', '15/12/2026', '200', '200', '0'],
        ['ALI-HUILE-5L — L2025-390', '20/03/2026', '50', '50', '0'],
        ['NFI-BACHE-STD — L2026-022', 'sans objet', '180', '180', '0'],
        ['NFI-SEAU-20L — L2026-030', 'sans objet', '160', '160', '0'],
      ],
    },
    result: "10 lots comptés. Deux découvertes : un écart de −6 boîtes sur la doxycycline, et un lot d'huile dont la date de péremption (20/03/2026) est déjà dépassée.",
    tip: "Le lot d'huile périmé n'est pas un écart de comptage : le nombre est juste, c'est la date qui pose problème. Ces deux types de problème se traitent différemment (Procédures 3 et 8).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: "Ouvrir et préparer le template : onglet Inventaire, lignes d'exemple",
    intro: "Le template fiche-inventaire-entrepot-fifo-fefo.xlsx contient deux onglets : « Inventaire » (la liste des lots, lignes 5 à 24) et « Synthèse par catégorie » (calculée automatiquement). Vous le préparez sans casser une seule formule.",
    steps: [
      {
        title: 'Préparez votre copie',
        actions: [
          "Ouvrez fiche-inventaire-entrepot-fifo-fefo.xlsx.",
          "Enregistrez-le immédiatement sous : AAAA-MM-JJ_Inventaire-FEFO_[Site]_v01.xlsx, soit 2026-03-24_Inventaire-FEFO_Lukando_v01.xlsx.",
          "Repérez les 10 colonnes de la ligne 4 : A Référence article, B Désignation, C Catégorie, D N° de lot, E Date de péremption, F Qté entrée, G Qté sortie, H Stock disponible, I Jours avant péremption, J Alerte FEFO.",
          "Repérez la légende de l'alerte en ligne 26 et la ligne 4 figée (les en-têtes restent visibles quand vous descendez).",
        ],
      },
      {
        title: 'Videz les exemples sans casser les formules',
        actions: [
          "Les lignes 5 à 9 contiennent 5 lignes d'exemple (amoxicilline, CSB+, huile, bâche) : sélectionnez A5:G9 (colonnes A à G seulement) et appuyez sur Suppr.",
          "Ne touchez jamais aux colonnes H, I et J : ce sont des formules (H = F − G ; I = E − AUJOURDHUI() ; J = alerte).",
          "La plage calculée va de la ligne 5 à la ligne 24 (20 lots) ; si vous avez plus de 20 lots, faites un clic droit sur le numéro de la ligne 24 > Insérer, puis recopiez H:J depuis la ligne du dessus : la synthèse s'étend automatiquement.",
        ],
      },
    ],
    result: "Un fichier v01 daté, vide de données, dont les formules H à J et l'onglet de synthèse sont intacts.",
    pitfall: "Supprimer des lignes entières, ou coller des valeurs dans H:J, ou saisir des lots en ligne 25 et au-delà : la synthèse et l'alerte ne les lisent plus, sans aucun message d'erreur.",
    tip: "Les colonnes de la ligne 4 n'incluent pas d'emplacement : le code d'emplacement (A-03-1) vit sur l'étiquette physique et sur la fiche de stock papier. N'ajoutez pas de colonne au template, vous risqueriez de décaler les formules.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Colonnes A à D — Référence, Désignation, Catégorie, N° de lot',
    intro: "Ces quatre colonnes identifient le lot sans ambiguïté. La colonne C est la plus critique : l'onglet « Synthèse par catégorie » additionne les lots avec une comparaison de texte exacte, donc une seule faute d'orthographe fait disparaître un lot de la synthèse.",
    steps: [
      {
        title: 'Colonnes A et B — Référence et Désignation',
        actions: [
          "A : un code unique par article, de forme TYPE-PRODUIT-CONDITIONNEMENT (MED-SRO-20) ; le même code sur toutes les lignes des différents lots du même article.",
          "B : la désignation complète avec le conditionnement (« SRO, carton de 500 sachets »). L'unité de comptage est celle de la désignation.",
        ],
      },
      {
        title: 'Colonne C — Catégorie',
        actions: [
          "Choisissez l'un des trois libellés exacts de l'onglet Synthèse : Médical, Alimentaire, NFI (non périssable).",
          "Copiez-collez le libellé depuis la colonne A de l'onglet « Synthèse par catégorie », ne le retapez pas.",
        ],
      },
      {
        title: 'Colonne D — N° de lot',
        actions: [
          "Saisissez le numéro lu sur l'emballage, un lot par ligne : si un article a deux lots, il a deux lignes.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'A Référence', 'B Désignation', 'C Catégorie', 'D Lot'],
      rows: [
        ['5', 'MED-SRO-20', 'SRO, carton de 500 sachets', 'Médical', 'L2025-211'],
        ['6', 'MED-SRO-20', 'SRO, carton de 500 sachets', 'Médical', 'L2026-040'],
        ['7', 'MED-RL-500', 'Ringer lactate 500 ml, carton de 20 poches', 'Médical', 'L2025-305'],
        ['8', 'MED-RL-500', 'Ringer lactate 500 ml, carton de 20 poches', 'Médical', 'L2026-009'],
        ['9', 'MED-DOXY-100', 'Doxycycline 100 mg, boîte de 100 comprimés', 'Médical', 'L2025-266'],
        ['10', 'ALI-CSB-25KG', 'CSB+ (farine enrichie), sac de 25 kg', 'Alimentaire', 'L2025-402'],
        ['11', 'ALI-CSB-25KG', 'CSB+ (farine enrichie), sac de 25 kg', 'Alimentaire', 'L2026-017'],
        ['12', 'ALI-HUILE-5L', 'Huile végétale fortifiée, bidon de 5 L', 'Alimentaire', 'L2025-390'],
        ['13', 'NFI-BACHE-STD', 'Bâche plastique standard 4 × 5 m', 'NFI (non périssable)', 'L2026-022'],
        ['14', 'NFI-SEAU-20L', 'Seau avec couvercle 20 L', 'NFI (non périssable)', 'L2026-030'],
      ],
    },
    pitfall: "Écrire « Medical » sans accent, « Médicale », ou « NFI » sans la parenthèse : le lot compte dans le stock de la ligne, mais disparaît de la synthèse de sa catégorie. Un espace après le dernier mot produit le même effet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Colonnes E, F, G — Date de péremption, Quantité entrée, Quantité sortie',
    intro: "Ces trois colonnes sont les seules données numériques que vous saisissez. La date de péremption pilote l'alerte FEFO ; les entrées et les sorties sont des cumuls documentés par des bons, pas un « stock du moment ».",
    steps: [
      {
        title: 'Colonne E — Date de péremption',
        actions: [
          "Saisissez la date lue sur l'emballage, au format JJ/MM/AAAA ; Excel doit la reconnaître comme date (elle s'aligne à droite ; alignée à gauche, c'est du texte et le calcul échoue).",
          "Laissez E VIDE uniquement pour les articles non périssables (bâches, seaux).",
          "Ne laissez jamais E vide pour un produit médical ou alimentaire : la formule afficherait « N/A (non périssable) » et le lot sortirait de la surveillance FEFO.",
        ],
      },
      {
        title: 'Colonnes F et G — Quantités entrée et sortie',
        actions: [
          "F : total reçu pour ce lot, prouvé par des bons de réception, dans l'unité de conditionnement de la désignation.",
          "G : total sorti pour ce lot, prouvé par des bons de sortie ; saisissez 0 s'il n'y a pas eu de sortie.",
          "Ne saisissez jamais le stock dans F ou G : il se calcule en H. Si H ne tombe pas sur le comptage, n'ajustez pas G pour « faire juste » : laissez l'écart apparaître (étape 7).",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Lot', 'E Péremption', 'F Entrée', 'G Sortie'],
      rows: [
        ['5', 'MED-SRO-20 L2025-211', '20/04/2026', '120', '74'],
        ['6', 'MED-SRO-20 L2026-040', '31/01/2027', '200', '0'],
        ['7', 'MED-RL-500 L2025-305', '15/06/2026', '90', '40'],
        ['8', 'MED-RL-500 L2026-009', '20/05/2026', '60', '0'],
        ['9', 'MED-DOXY-100 L2025-266', '31/05/2026', '60', '18'],
        ['10', 'ALI-CSB-25KG L2025-402', '10/04/2026', '150', '96'],
        ['11', 'ALI-CSB-25KG L2026-017', '15/12/2026', '200', '0'],
        ['12', 'ALI-HUILE-5L L2025-390', '20/03/2026', '80', '30'],
        ['13', 'NFI-BACHE-STD L2026-022', '(vide)', '300', '120'],
        ['14', 'NFI-SEAU-20L L2026-030', '(vide)', '250', '90'],
      ],
    },
    pitfall: "Remplir la ligne 9 avec G = 24 (60 − 36) pour que H affiche le comptage. Vous effaceriez l'information la plus utile : il manque 6 boîtes que personne n'a documentées. Les 18 sorties de la fiche sont celles que des bons de sortie prouvent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: 'Lire les colonnes calculées H, I, J et les contrôler contre le comptage',
    intro: "Une fois E, F et G saisis, le template calcule seul le stock, le temps restant et l'alerte. Votre travail est de les lire correctement, et de vérifier que H correspond au comptage physique : sinon, la ligne n'est pas bonne.",
    steps: [
      {
        title: 'Comprenez les trois formules',
        actions: [
          "H Stock disponible = F − G (vide si F et G sont vides).",
          "I Jours avant péremption = E − AUJOURDHUI() : le chiffre baisse de 1 chaque jour, et devient négatif une fois la date dépassée.",
          "J Alerte FEFO : I < 0 → « PÉRIMÉ - retirer » ; I ≤ 30 → « URGENT - sortir en priorité (FEFO) » ; I ≤ 90 → « Surveiller » ; au-delà → « OK » ; E vide → « N/A (non périssable) ». Les alertes PÉRIMÉ et URGENT sont colorées.",
        ],
      },
      {
        title: 'Contrôlez ligne par ligne',
        actions: [
          "Comparez chaque H au comptage de l'étape 2.",
          "Entourez toute ligne où H ≠ comptage : elle part en étape 7.",
          "Lisez les alertes : combien de lots URGENT, combien de PÉRIMÉ ?",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Lot', 'H Stock', 'I Jours', 'J Alerte (valeurs au 24/03/2026)'],
      rows: [
        ['5', 'MED-SRO-20 L2025-211', '46', '27', 'URGENT - sortir en priorité (FEFO)'],
        ['6', 'MED-SRO-20 L2026-040', '200', '313', 'OK'],
        ['7', 'MED-RL-500 L2025-305', '50', '83', 'Surveiller'],
        ['8', 'MED-RL-500 L2026-009', '60', '57', 'Surveiller'],
        ['9', 'MED-DOXY-100 L2025-266', '42 (compté 36)', '68', 'Surveiller'],
        ['10', 'ALI-CSB-25KG L2025-402', '54', '17', 'URGENT - sortir en priorité (FEFO)'],
        ['11', 'ALI-CSB-25KG L2026-017', '200', '266', 'OK'],
        ['12', 'ALI-HUILE-5L L2025-390', '50', '−4', 'PÉRIMÉ - retirer'],
        ['13', 'NFI-BACHE-STD L2026-022', '180', '(vide)', 'N/A (non périssable)'],
        ['14', 'NFI-SEAU-20L L2026-030', '160', '(vide)', 'N/A (non périssable)'],
      ],
    },
    pitfall: "Lire « Surveiller » comme « OK ». À 57 jours, le lot L2026-009 de Ringer lactate doit déjà sortir AVANT le lot L2025-305 (83 jours) : l'alerte donne une urgence, FEFO donne l'ordre.",
    tip: "Comme la formule utilise AUJOURDHUI(), la colonne I change chaque jour et ouvre le fichier avec votre date du moment : les valeurs de ce module sont calculées à la date indiquée. Recalculez à la main (date de péremption − date du jour) pour vérifier un chiffre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: 'Traiter les lignes en écart et enregistrer la version v01',
    intro: "Une ligne où le stock théorique (H) diffère du comptage ne se « corrige » pas en changeant les quantités. Vous recomptez, vous cherchez les documents non saisis, et si l'écart persiste vous ouvrez un rapport d'écart. Puis vous figez la version.",
    steps: [
      {
        title: "Vérifiez l'écart avant de l'ouvrir",
        actions: [
          "Faites recompter la ligne ensemble par les deux compteurs.",
          "Cherchez dans le classeur les bons de sortie et de réception de ce lot non reportés dans la fiche.",
          "Si l'écart persiste, notez-le dans votre journal et ouvrez le rapport d'écart le jour même (Procédure 8).",
        ],
      },
      {
        title: 'Enregistrez et transmettez',
        actions: [
          "Enregistrez le fichier v01, sans modifier F ni G de la ligne en écart.",
          "Notez dans votre journal d'entrepôt la date, le nombre de lots, les écarts ouverts et les lots périmés.",
          "Envoyez la liste des écarts et des périmés à Jean-Marc Ilunga le soir même.",
        ],
      },
    ],
    example: {
      title: "Fil rouge — journal d'entrepôt du mardi 24/03",
      lines: [
        "16h40 — Ligne 9 (MED-DOXY-100, L2025-266) : fiche 42, compté 36, recompté ensemble 36 (E. Mumbere, J. Kitsa). Écart −6. Recherche de documents : programmée demain 8h. Rapport d'écart RE-2026-001 ouvert (brouillon).",
        "17h00 — Ligne 12 (ALI-HUILE-5L, L2025-390) : 50 bidons, péremption 20/03/2026 dépassée de 4 jours → PÉRIMÉ. Isolement en quarantaine ce soir ; radiation à traiter demain (Procédure 3).",
        "17h30 — Fichier 2026-03-24_Inventaire-FEFO_Lukando_v01.xlsx enregistré : 10 lots, 1 écart ouvert, 1 lot périmé, 2 lots URGENT. Envoyé à J.-M. Ilunga.",
      ],
    },
    result: "Livrable 2 terminé : le template reflète le comptage physique, chaque ligne en écart est tracée, la version v01 est datée et transmise.",
    pitfall: "Écrire 24 en G pour que H tombe à 36 « puisque c'est le chiffre réel ». Vous effacez l'information qui permettrait de repérer un problème récurrent avant qu'il ne devienne un vrai cas de détournement.",
  },

  // ───────────── PROCÉDURE 3 — Tri FEFO, quarantaine, radiation ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Trier le tableau par jours restants avant péremption',
    intro: "Jours 2–3. Une fois les dates saisies, le tableau vous donne l'ordre de sortie. Mais le template n'a pas de filtre actif : vous l'ajoutez, et vous triez sur la bonne colonne. L'ordre FEFO est celui des jours restants, pas celui du texte de l'alerte.",
    steps: [
      {
        title: 'Activez le filtre et triez',
        actions: [
          "Sélectionnez A4:J24 (la ligne d'en-têtes et toutes les lignes de données, colonnes A à J ensemble).",
          "Onglet Données > Filtrer, puis déroulez la liste de la colonne I « Jours avant péremption » et choisissez Trier du plus petit au plus grand.",
          "Triez toujours les 10 colonnes ensemble : trier une seule colonne mélangerait les lots et les dates.",
        ],
      },
      {
        title: "Lisez l'ordre de sortie",
        actions: [
          "Négatifs d'abord (périmés à retirer), puis les plus petits nombres positifs (à sortir en premier), les non périssables sans date en fin de liste.",
          "Notez pour chaque article à deux lots lequel passe en premier.",
        ],
      },
    ],
    table: {
      columns: ['Ordre', 'Lot', 'I Jours (24/03)', 'J Alerte', 'Décision'],
      rows: [
        ['1', 'ALI-HUILE-5L L2025-390', '−4', 'PÉRIMÉ - retirer', 'Quarantaine puis radiation'],
        ['2', 'ALI-CSB-25KG L2025-402', '17', 'URGENT', 'Sortir en tout premier, plan de sortie avant le 10/04'],
        ['3', 'MED-SRO-20 L2025-211', '27', 'URGENT', 'À l\'avant de l\'étagère, sortir avant L2026-040'],
        ['4', 'MED-RL-500 L2026-009', '57', 'Surveiller', 'Sortir AVANT L2025-305, bien que reçu après'],
        ['5', 'MED-DOXY-100 L2025-266', '68', 'Surveiller', 'Écart ouvert, surveiller la sortie'],
        ['6', 'MED-RL-500 L2025-305', '83', 'Surveiller', 'Derrière L2026-009'],
        ['7', 'ALI-CSB-25KG L2026-017', '266', 'OK', 'Derrière L2025-402'],
        ['8', 'MED-SRO-20 L2026-040', '313', 'OK', 'Derrière L2025-211'],
      ],
    },
    pitfall: "Trier sur la colonne J. Les alertes se rangent alors dans l'ordre alphabétique : « OK » passerait avant « URGENT ». Triez toujours sur le nombre (colonne I).",
    tip: "Triez avant de lire la synthèse : vous voyez d'abord les lots, puis vous pilotez la catégorie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Isoler les lots périmés en zone de quarantaine',
    intro: "Un lot périmé qui reste dans le stock actif peut être pris par erreur lors d'une préparation un jour de pression. Vous l'isolez physiquement le jour même, dans un endroit fermé, avec une étiquette qui ne laisse aucun doute.",
    steps: [
      {
        title: 'Créez la zone Q',
        actions: [
          "Choisissez un espace fermable (cage, armoire ou coin cloisonné) loin des zones A, B et C.",
          "Marquez-le au sol et sur la porte : « ZONE Q — QUARANTAINE ».",
          "Une seule personne détient la clé de la zone Q (vous), la clé de réserve est dans l'enveloppe scellée.",
        ],
      },
      {
        title: 'Déplacez et tracez',
        actions: [
          "Déplacez le lot à deux personnes, étiquette rouge sur chaque palette : « NE PAS UTILISER — PÉRIMÉ — EN ATTENTE DE RADIATION », avec référence, lot et date.",
          "Notez le déplacement sur la fiche de stock (« transféré en quarantaine le 24/03 », emplacement Q-01), sans enregistrer de sortie.",
          "Informez le programme que ce lot n'est plus disponible.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mardi 24/03, 18h00',
      lines: [
        "50 bidons d'huile végétale fortifiée (lot L2025-390, péremption 20/03/2026) déplacés du mur nord vers Q-01 par E. Mumbere et J. Kitsa, en présence de F. Mwamba.",
        "Étiquette rouge posée ; fiche de stock : « 24/03 — transféré en quarantaine (périmé) — visa ».",
        "Programme informé par message à Dr Kahindo : « 50 bidons d'huile retirés du stock disponible, péremption dépassée de 4 jours ».",
      ],
    },
    result: "Le lot périmé est physiquement hors du stock actif, il porte une étiquette rouge, et le déplacement est tracé.",
    pitfall: "Déplacer un lot sans l'enregistrer. Si la fiche ne mentionne pas la quarantaine, le prochain comptage retrouvera « 50 bidons manquants » dans la zone A.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Réorganiser physiquement : le lot qui périme le premier est le plus accessible',
    intro: "C'est cette étape, pas seulement le tableau Excel, qui rend FEFO applicable au quotidien par toute l'équipe, y compris les jours où vous n'êtes pas là pour vérifier. Le but : que prendre le bon lot soit plus facile que prendre le mauvais.",
    steps: [
      {
        title: 'Planifiez le rangement article par article',
        actions: [
          "Pour chaque article à deux lots ou plus, désignez l'emplacement de chacun d'après le tableau trié.",
          "Le lot à péremption la plus proche va à l'avant et en bas ; le lot le plus lointain derrière, accessible sans déplacer le premier.",
          "Un emplacement = un lot : ne mélangez jamais deux lots sur une palette ; séparez-les par un intercalaire si une étagère en porte deux.",
        ],
      },
      {
        title: 'Déplacez, vérifiez, photographiez',
        actions: [
          "Déplacez les palettes à deux personnes, une catégorie à la fois, pour ne jamais bloquer toute l'entrée.",
          "Séparez médical (zone A) et alimentaire (zone B), mettez les bâches et seaux en zone C, avec une allée centrale libre.",
          "Prenez une photo datée de chaque zone une fois rangée et enregistrez-la dans le dossier de votre grille.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — plan de rangement décidé le 24/03 (FEFO ≠ ordre d\'arrivée)',
      lines: [
        "A-01 SRO : avant L2025-211 (20/04/2026) ; arrière L2026-040 (31/01/2027).",
        "A-02 Ringer lactate : avant L2026-009 (20/05/2026), bien qu'arrivé en mars ; arrière L2025-305 (15/06/2026), arrivé en décembre.",
        "A-03 Doxycycline : lot unique L2025-266. B-01 CSB+ : avant L2025-402 (10/04/2026) ; arrière L2026-017 (15/12/2026).",
        "C-01 Bâches et C-02 seaux : FIFO, le plus ancien lot devant. Q-01 : huile périmée. R : zone réception/expédition libre.",
      ],
    },
    pitfall: "Ranger le nouvel arrivage devant l'ancien « pour charger plus vite ». L'ordre d'arrivée n'est l'ordre de sortie que pour les NFI : pour le périssable, c'est la date qui décide.",
    tip: "Réorganisez en premier les articles périssables en alerte URGENT : c'est là que l'erreur de lot coûte le plus cher.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Étiqueter chaque emplacement et chaque palette',
    intro: "Un entrepôt dont les emplacements ne sont pas clairement identifiés génère des erreurs de préparation (picking) même avec une fiche de stock parfaite. La fiabilité du document ne compense jamais un entrepôt illisible physiquement.",
    steps: [
      {
        title: "Fabriquez l'étiquette standard",
        actions: [
          "Contenu, en gros caractères : code d'emplacement, référence, désignation, numéro de lot, date de péremption, logique (FEFO ou FIFO).",
          "Matériau : étiquette plastifiée ou carton rigide fixé à l'étagère, jamais un marqueur pâle écrit sur le carton.",
          "Ajoutez une pastille de couleur selon l'alerte de la semaine : rouge URGENT, orange Surveiller, vert OK.",
        ],
      },
      {
        title: 'Posez et vérifiez',
        actions: [
          "Une étiquette par emplacement et par palette, à hauteur des yeux, tournée vers l'allée.",
          "Contrôle croisé : une personne lit l'étiquette, une autre lit l'emballage, les deux doivent concorder.",
          "Mettez à jour les pastilles chaque lundi, après la lecture de la synthèse.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — étiquette du lot de Ringer lactate à sortir en premier',
      lines: [
        "A-02-1 | MED-RL-500 — Ringer lactate 500 ml, carton de 20 poches",
        "LOT L2026-009 | PÉREMPTION 20/05/2026 | FEFO — SORTIR EN PREMIER",
        "Pastille orange (Surveiller au 24/03).",
      ],
    },
    result: "Chaque emplacement et chaque palette porte référence, lot, péremption et logique : n'importe quel magasinier peut préparer le bon lot sans vous.",
    pitfall: "Étiqueter par désignation seulement. Deux lots du même article sur deux palettes identiques ne se distinguent que par le lot et la date : sans eux, FEFO est impossible à appliquer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: "Écrire la règle de préparation et former l'équipe",
    intro: "La disposition physique rend l'erreur difficile ; la règle écrite la rend rare. La solution à long terme n'est jamais la vigilance individuelle de la personne la plus consciencieuse, mais une règle courte que chacun connaît et une disposition qui la facilite.",
    steps: [
      {
        title: 'Rédigez la règle en 4 lignes',
        actions: [
          "Ligne 1 : on sort toujours le lot indiqué par la fiche de stock (le plus proche de la péremption pour le médical et l'alimentaire).",
          "Ligne 2 : on lit la date sur la palette avant de charger, jamais « le plus proche de la porte ».",
          "Ligne 3 : un lot plus récent ne sort jamais devant un lot qui périme plus tôt.",
          "Ligne 4 : en cas de doute sur un lot, on s'arrête et on appelle le responsable.",
        ],
      },
      {
        title: 'Formez en 15 minutes avec un test pratique',
        actions: [
          "Affichez la règle à l'entrée de l'entrepôt et expliquez-la à Esther et Joël.",
          "Demandez à chacun de préparer 10 cartons de Ringer lactate : vérifiez qu'il prend le lot L2026-009.",
          "Instaurez le contrôle du dernier lot : avant tout chargement, une deuxième personne lit la date des colis sur le plateau.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — résultat du test du mardi 24/03, 15h',
      lines: [
        "Esther : prend les cartons de l'étagère A-02 avant (L2026-009) — correct.",
        "Joël : prend d'abord les cartons de l'arrière (L2025-305) « parce qu'ils sont dans l'ancienne place » — corrigé sur le moment, explication de l'ordre FEFO.",
        "Règle affichée à l'entrée à 15h30 ; contrôle du dernier lot appliqué dès le prochain chargement.",
      ],
    },
    pitfall: "Penser que « les gens savent ». Joël, d'une grande conscience professionnelle, aurait sorti le mauvais lot : c'est la raison pour laquelle on ajoute une disposition et un contrôle, pas seulement un rappel oral.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Radier formellement les produits périmés ou endommagés',
    intro: "Un article cassé ou périmé qui reste des semaines « en attente de décision » fausse vos chiffres de stock disponible et peut être compté comme utilisable lors d'une distribution suivante. Vous le radiez formellement, avec justification écrite, dès le constat.",
    steps: [
      {
        title: 'Constatez à deux et rédigez le procès-verbal',
        actions: [
          "Constat contradictoire : vous plus un témoin indépendant (représentant du programme ou pharmacien).",
          "Procès-verbal numéroté : date, article, lot, quantité, motif, état, photos, signatures, validation du coordinateur logistique pays.",
        ],
      },
      {
        title: 'Enregistrez la sortie de radiation',
        actions: [
          "Établissez un bon de sortie « radiation » numéroté et reportez-le sur la fiche de stock : solde 0.",
          "Dans le template, ajoutez la quantité radiée à la colonne G de la ligne concernée : H passe à 0. Le template n'a pas de colonne « motif » : la référence du PV figure sur la fiche papier.",
        ],
      },
      {
        title: 'Éliminez et conservez les preuves',
        actions: [
          "Élimination conforme aux directives du bailleur et des autorités locales ; pour un médicament, par une filière sécurisée, jamais donné ni jeté dans le circuit courant.",
          "Archivez PV, bon de sortie et PV d'élimination dans le classeur « Radiations ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mercredi 25/03, 9h15',
      lines: [
        "PV-RAD-2026-001 : « Le 25/03/2026, constat de 50 bidons d'huile végétale fortifiée 5 L, lot L2025-390, péremption 20/03/2026 (5 jours dépassés), emballages intacts. Décision : radiation et élimination. » Signé par le responsable d'entrepôt et le témoin ; validé par J.-M. Ilunga à 11h00.",
        "Template ligne 12 : G passe de 30 à 80, H passe de 50 à 0. La colonne J affiche toujours « PÉRIMÉ - retirer » (elle dépend de la date, pas du stock).",
        "BS-0323 « radiation » enregistré en fiche de stock : solde 0.",
      ],
    },
    result: "Livrable 3 terminé : entrepôt trié FEFO, emplacements étiquetés, lot périmé radié avec procès-verbal, règle de préparation affichée.",
    pitfall: "Laisser le lot en quarantaine sans décision. Tant que G n'est pas mis à jour, H affiche 50 bidons « disponibles », et la synthèse d'une catégorie intègre un stock inutilisable.",
  },


  // ───────────── PROCÉDURE 4 — Réceptionner et mettre en stock ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: "Préparer la réception avant l'arrivée du camion",
    intro: "Mercredi 25/03 : les 200 kits de traitement du choléra commandés au Module 01 arrivent à Lukando. Une réception se prépare : un entrepôt qui découvre la livraison en même temps que le camion improvise un comptage « à vue », et c'est là que naissent les premiers écarts.",
    steps: [
      {
        title: 'Rassemblez les documents attendus',
        actions: [
          "Le bon de commande (ici CMD-2026-031 : 200 kits KCH-01), le bon de livraison de l'expéditeur et la lettre de voiture du transporteur.",
          "Les caractéristiques du produit : poids et volume unitaires, conditions de stockage (au sec, à l'abri, moins de 30 °C).",
          "Les règles de réception de l'organisation, dont le minimum de validité restante à l'arrivée (pour des médicaments donnés, un repère usuel est au moins 12 mois ; appliquez votre procédure).",
        ],
      },
      {
        title: "Préparez l'espace et l'équipe",
        actions: [
          "Dégagez la zone R (réception) : espace pour poser et ouvrir les colis, palettes propres au sol.",
          "Prévoyez l'emplacement final (ici A-04) : 200 kits × 0,06 m³ = 12 m³ ; vérifiez qu'il y a la place avant que le camion n'arrive.",
          "Désignez deux personnes : un compteur (E. Mumbere) et un scribe (vous). Celui qui compte n'est pas celui qui inscrit sur la fiche de stock.",
        ],
      },
      {
        title: 'Préparez le bon de réception',
        actions: [
          "Prenez un exemplaire numéroté du carnet de bons de réception (modèle interne : le template de ce module ne contient pas de bon de réception).",
          "Préremplissez : numéro, date, expéditeur, transporteur, références du bon de livraison et de la lettre de voiture, article attendu.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — bon de réception BR-0121 préparé le 25/03 à 9h30',
      lines: [
        "Date : 25/03/2026 | Expéditeur : entrepôt Kemora Santé Goma (réapprovisionnement CMD-2026-031) | Transporteur : Transports Umoja, camion de 6 t | Lettre de voiture : LV-2026-014",
        "Attendu : 200 cartons MED-KCH-01 — Kit de traitement du choléra KCH-01 — poids unitaire 14 kg, volume 0,06 m³ — stockage au sec, moins de 30 °C.",
        "Zone R dégagée ; emplacement A-04-1 libre ; équipe : E. Mumbere (compteur), vous (scribe).",
      ],
    },
    result: "Documents, espace, équipe et bon de réception préparés : vous êtes prêt avant que le camion ne s'arrête.",
    pitfall: "Découvrir la livraison à l'arrivée du camion. Sous la pression du chauffeur, on signe « 200 cartons » sans compter, et l'écart est signé par vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Contrôler la livraison : colis, état, lot, péremption',
    intro: "Vous contrôlez ce qui est arrivé, pas ce qui est écrit : le nombre de colis, leur état, le lot et la date de péremption lus sur l'emballage. Le contrôle se fait devant le livreur, avant de signer quoi que ce soit.",
    steps: [
      {
        title: 'Vérifiez le transport et comptez',
        actions: [
          "Vérifiez la plaque et l'identité du chauffeur par rapport à la lettre de voiture.",
          "Comptez les colis au déchargement, pas en vous fiant au nombre imprimé sur le document ; faites poser les colis en zone R.",
        ],
      },
      {
        title: "Inspectez l'état",
        actions: [
          "Repérez les cartons mouillés, écrasés, éventrés, aux scellés cassés.",
          "Mettez à part tout colis douteux sans l'ouvrir, et photographiez-le avec le chauffeur.",
        ],
      },
      {
        title: 'Ouvrez un échantillon et lisez lot et péremption',
        actions: [
          "Ouvrez un échantillon (repère : un carton sur vingt) et vérifiez contenu, numéro de lot et date de péremption.",
          "Comparez la validité restante à la règle de réception ; un lot en dessous du minimum se refuse ou se signale avant d'entrer.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — résultat du contrôle, 25/03 à 10h40',
      lines: [
        "Annoncé : 200 cartons. Compté au déchargement : 200 cartons.",
        "État : 3 cartons du bas de la pile mouillés (bâche du camion mal étanche) ; les 197 autres secs, scellés intacts. Photos 11 à 13 prises avec le chauffeur.",
        "Échantillon : 10 cartons ouverts, contenu conforme, lot K2026-009, péremption 30/11/2027 (environ 20 mois restants à l'arrivée : règle respectée).",
      ],
    },
    pitfall: "Signer le bon du transporteur « pour réception » avant de compter. Une signature sans réserve vaut acceptation : vous ne pourrez plus rien réclamer à l'expéditeur ni au transporteur.",
    tip: "Contrôlez toujours les colis du BAS de la pile : l'eau, l'écrasement et les chutes frappent d'abord les couches inférieures.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Établir et signer le bon de réception, avec réserves écrites',
    intro: "Le bon de réception est le document qui constate ce qui est vraiment arrivé. Il distingue la quantité reçue, la quantité acceptée et la quantité refusée ou mise en quarantaine. Toute anomalie s'écrit avant la signature, sur la lettre de voiture elle-même.",
    steps: [
      {
        title: 'Complétez le bon',
        actions: [
          "Pour chaque ligne : référence, désignation, lot, péremption, quantité annoncée, reçue, acceptée, refusée ou en quarantaine, observations.",
          "Les colis douteux ne sont ni acceptés ni refusés : ils vont en quarantaine en attendant l'inspection.",
        ],
      },
      {
        title: 'Écrivez les réserves puis signez',
        actions: [
          "Avant de signer la lettre de voiture, inscrivez la réserve à la main sur tous les exemplaires.",
          "Signatures : chauffeur, vous, un témoin ; remettez un exemplaire au chauffeur, envoyez une copie à l'expéditeur et archivez l'original.",
          "Prévenez l'expéditeur dans les 24 heures avec les photos.",
        ],
      },
    ],
    table: {
      columns: ['Référence — lot', 'Péremption', 'Annoncé', 'Reçu', 'Accepté', 'Quarantaine'],
      rows: [
        ['MED-KCH-01 — K2026-009', '30/11/2027', '200', '200', '197', '3 (cartons mouillés)'],
      ],
    },
    example: {
      title: 'Fil rouge — réserve écrite sur la lettre de voiture LV-2026-014',
      lines: [
        "« Réception du 25/03/2026, 11h10 : 200 cartons reçus ; 3 cartons mouillés constatés à l'arrivée, mis en quarantaine, sous réserve de contrôle de leur contenu. 197 cartons conformes. »",
        "Signé : le chauffeur (Transports Umoja), le responsable d'entrepôt, un témoin (E. Mumbere).",
      ],
    },
    result: "Un bon de réception BR-0121 signé, une réserve écrite sur les deux exemplaires, des photos envoyées à l'expéditeur.",
    pitfall: "Écrire la réserve après avoir signé, ou dans un message à part. Seule la réserve portée sur le document signé devant le livreur est opposable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Mettre en stock : emplacement, étiquette, respect de FEFO',
    intro: "Le colis accepté ne reste pas en zone R : il rejoint son emplacement dans les 24 heures, étiqueté, et il se range selon la règle FEFO. Les colis en quarantaine restent à part, étiquetés autrement, hors du stock disponible.",
    steps: [
      {
        title: 'Rangez les colis acceptés',
        actions: [
          "Déplacez les 197 cartons à l'emplacement prévu, sur palettes, à distance des murs.",
          "Posez l'étiquette standard : emplacement, référence, désignation, lot, péremption, logique.",
          "Si un lot du même article existe déjà, placez le lot qui périme le plus tard DERRIÈRE le plus proche de la péremption, quel que soit l'ordre d'arrivée.",
        ],
      },
      {
        title: 'Isolez la quarantaine',
        actions: [
          "Déplacez les colis douteux en zone Q avec une étiquette jaune : « EN ATTENTE D'INSPECTION ».",
          "Prévenez le demandeur (ici l'infirmier superviseur de l'UTC) qui inspectera le contenu le lendemain avec vous.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mise en stock du 25/03, 11h30',
      lines: [
        "A-04-1 — MED-KCH-01 — Kit de traitement du choléra KCH-01 — LOT K2026-009 — PÉREMPTION 30/11/2027 — FEFO. Lot unique : aucune inversion possible.",
        "Q-02 — 3 cartons KCH-01, lot K2026-009, étiquette jaune « EN ATTENTE D'INSPECTION » ; inspection programmée le 26/03 à 9h avec l'infirmier superviseur.",
        "Zone R libérée à 11h45 ; photos 14 à 15 enregistrées.",
      ],
    },
    result: "Les 197 cartons sont à leur emplacement, étiquetés ; les 3 douteux sont isolés ; la zone R est libre pour la prochaine livraison.",
    pitfall: "Laisser le stock « provisoirement » en zone R. Un colis qui traîne devant la porte est compté nulle part, et c'est là que s'égarent les cartons.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: "Enregistrer l'entrée au moment même : fiche de stock, puis template",
    intro: "L'entrée s'enregistre tout de suite, sur la fiche de stock puis dans le template, avec la référence du bon de réception. Vous ne l'enregistrez jamais « en fin de journée » : c'est la règle qui garantit que la fiche dit toujours la vérité.",
    steps: [
      {
        title: 'Mettez à jour la fiche de stock',
        actions: [
          "Ouvrez la fiche de l'article (ou créez-la : une fiche par article et par lot) avec référence, lot, péremption, emplacement.",
          "Ajoutez la ligne : date, numéro du bon de réception, provenance, quantité entrée, solde, visa.",
          "Tenez une fiche séparée pour les 3 cartons en quarantaine (solde non disponible).",
        ],
      },
      {
        title: 'Ajoutez la ligne au template',
        actions: [
          "Ouvrez le fichier, enregistrez-le sous 2026-03-25_Inventaire-FEFO_Lukando_v02.xlsx.",
          "Dans la première ligne vide (ligne 15), saisissez A à G ; ne touchez pas à H, I, J (copiez-les depuis la ligne du dessus si la ligne est neuve).",
          "F reçoit la quantité ACCEPTÉE (197), pas la quantité reçue : les 3 cartons de quarantaine ne sont pas du stock disponible.",
        ],
      },
    ],
    table: {
      columns: ['A Réf.', 'B Désignation', 'C Cat.', 'D Lot', 'E Péremption', 'F Entrée', 'G Sortie'],
      rows: [
        ['MED-KCH-01', 'Kit de traitement du choléra KCH-01, carton', 'Médical', 'K2026-009', '30/11/2027', '197', '0'],
      ],
    },
    example: {
      title: 'Fil rouge — résultat de la ligne 15 et rapprochement',
      lines: [
        "Fiche de stock : 25/03 | BR-0121 | Goma (CMD-2026-031) | entrée 197 | solde 197 | visa.",
        "Template ligne 15 : H = 197 ; I = 615 jours ; J = OK. Synthèse : stock Médical +197.",
        "Rapprochement : solde fiche 197 = H 197 = 197 cartons comptés sur l'emplacement A-04-1.",
      ],
    },
    result: "Livrable 4, partie 1 : l'entrée est tracée sur le bon, la fiche et le template, avec le même chiffre partout. Les 3 cartons en quarantaine suivent leur propre fiche.",
    pitfall: "Saisir F = 200 « parce que 200 sont arrivés ». Le stock disponible serait faux de 3 cartons mouillés, et l'inspection du 26/03 ne retrouverait pas le chiffre de la fiche.",
  },

  // ───────────── PROCÉDURE 5 — Sortir un article et tenir la fiche de stock ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Recevoir et vérifier la demande de sortie',
    intro: "Toute sortie commence par une demande écrite d'une personne habilitée. Même en urgence médicale, aucun colis ne sort sur « j'ai besoin de ça » : un bon de sortie rempli sur place avant le départ suffit à garder la trace.",
    steps: [
      {
        title: 'Vérifiez la demande',
        actions: [
          "La demande est écrite, datée, signée par un demandeur dont vous avez le spécimen de signature (liste des signataires autorisés).",
          "Elle précise : article, quantité dans l'unité de conditionnement, destination, date de besoin.",
          "Pour une urgence : le demandeur signe le bon de sortie directement ; la demande formelle est régularisée sous 24 heures.",
        ],
      },
      {
        title: 'Contrôlez la disponibilité',
        actions: [
          "Ouvrez le template : filtrez la colonne A sur l'article demandé et lisez H (stock) et J (alerte) de chaque lot.",
          "Vérifiez que le stock disponible suffit sans toucher aux lots PÉRIMÉS ni aux colis en quarantaine.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — demande DS-2026-052, mercredi 25/03 à 13h30',
      lines: [
        "Demandeur : infirmier superviseur de l'UTC de Bweza, approuvée par Dr Kahindo. Destination : UTC de Bweza. Besoin : jeudi 26/03.",
        "Demande : 20 cartons de Ringer lactate 500 ml (MED-RL-500) et 15 cartons de SRO (MED-SRO-20).",
        "Disponibilité : RL = 50 (L2025-305) + 60 (L2026-009) ; SRO = 46 (L2025-211) + 200 (L2026-040). Quantités suffisantes.",
      ],
    },
    result: "Une demande écrite, signée par un demandeur autorisé, dont la quantité est disponible.",
    pitfall: "Sortir « pour dépanner » sur un message oral. Vous ne pourrez plus prouver ni qui a demandé, ni combien, ni quand.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Choisir le lot selon la règle FEFO ou FIFO',
    intro: "Le choix du lot n'est pas une préférence du magasinier : il vient d'une règle. Pour tout article avec date de péremption, c'est le lot dont la date est la plus proche (FEFO) ; pour un NFI sans date, le plus ancien (FIFO).",
    steps: [
      {
        title: 'Appliquez la règle',
        actions: [
          "Dans le template, triez l'article par colonne I du plus petit au plus grand : le premier lot non périmé ayant du stock est celui à sortir.",
          "Si le lot le plus proche de la péremption ne suffit pas, prenez tout ce qu'il contient, puis complétez avec le lot suivant : deux lignes sur le bon de sortie.",
          "Pour un NFI sans date, prenez le lot le plus ancien (premier numéro de lot ou première date d'entrée sur la fiche).",
        ],
      },
      {
        title: 'Excluez ce qui ne doit pas sortir',
        actions: [
          "Ne sortez jamais un lot en alerte PÉRIMÉ ni un colis de zone Q.",
          "Un lot en alerte URGENT sort en premier, même s'il est derrière.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Lot choisi', 'Raison (jours restants au 25/03)', 'Quantité'],
      rows: [
        ['MED-RL-500', 'L2026-009', 'FEFO : 56 j contre 82 j pour L2025-305 (reçu avant)', '20 cartons'],
        ['MED-SRO-20', 'L2025-211', 'FEFO : 26 j (URGENT) contre 312 j pour L2026-040', '15 cartons'],
      ],
    },
    result: "Le lot à sortir est choisi par la règle et justifié par les jours restants, pas par la facilité de manutention.",
    pitfall: "Prendre le lot « le plus proche de la porte ». Ce réflexe vide d'abord les lots les plus récents et laisse les plus anciens périmer au fond.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Préparer et contrôler la sortie : picking, double comptage, porte fermée',
    intro: "La préparation est le moment où l'erreur de lot et l'erreur de quantité se produisent. Le double comptage et la lecture de la date sur chaque colis sont les deux contrôles qui les attrapent. La porte reste fermée pendant la préparation : l'écart du cas de Maiduguri est né d'une porte restée ouverte.",
    steps: [
      {
        title: 'Préparez et contrôlez',
        actions: [
          "Le manutentionnaire prépare les colis depuis l'emplacement indiqué par l'étiquette (A-02-1 pour L2026-009, A-01-1 pour L2025-211).",
          "Une deuxième personne recompte et lit le numéro de lot et la date sur chaque colis, devant le plateau.",
          "Posez les colis préparés en zone R, jamais devant les étagères.",
        ],
      },
      {
        title: 'Gardez l\'entrepôt fermé',
        actions: [
          "Fermez la porte de la zone de stockage dès qu'une personne en sort ; ne laissez pas l'entrepôt ouvert « parce qu'on va et vient pour charger ».",
          "Chargez depuis la zone R uniquement.",
          "Inscrivez dans le registre tout passage en zone de stockage.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — préparation de la sortie, 25/03 à 14h00',
      lines: [
        "E. Mumbere prépare 20 cartons RL (A-02-1, lot L2026-009) et 15 cartons SRO (A-01-1, lot L2025-211).",
        "J. Kitsa recompte : 20 et 15, et lit les lots et dates sur les cartons : L2026-009 (20/05/2026) et L2025-211 (20/04/2026) — conforme.",
        "Les 35 cartons sont posés en zone R ; la porte de la zone A est refermée à 14h10 ; registre signé.",
      ],
    },
    pitfall: "Charger directement depuis l'étagère « pour gagner du temps ». Sans passage par la zone R, personne ne recompte, et le bon de sortie est signé sur une quantité qui n'a jamais été vérifiée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Établir le bon de sortie et le faire signer',
    intro: "Le bon de sortie est la preuve qui répond à la question d'un bailleur : « prouvez-moi que ces articles sont sortis comme déclaré ». Il est numéroté, signé à plusieurs niveaux, et chaque copie a sa destination.",
    steps: [
      {
        title: 'Remplissez le bon',
        actions: [
          "Prenez le carnet à souches : le numéro suivant, jamais un numéro sauté ou un bon vierge signé.",
          "Une ligne par article et par lot : référence, désignation, lot, péremption, quantité.",
          "Destination, demandeur, date et heure de sortie, références de la demande.",
        ],
      },
      {
        title: 'Faites signer',
        actions: [
          "Signatures : préparateur, contrôleur, responsable d'entrepôt, transporteur ; le destinataire signe à l'arrivée sur le bon de livraison.",
          "Répartition des copies : originale au destinataire, copie rose pour la fiche de stock, copie jaune pour l'archive.",
        ],
      },
    ],
    table: {
      columns: ['Référence', 'Lot', 'Péremption', 'Quantité'],
      rows: [
        ['MED-RL-500', 'L2026-009', '20/05/2026', '20 cartons'],
        ['MED-SRO-20', 'L2025-211', '20/04/2026', '15 cartons'],
      ],
    },
    result: "Un bon de sortie BS-0324 numéroté et signé, portant les lots et les quantités réellement chargés.",
    pitfall: "Faire signer un bon « en blanc » à l'avance pour les sorties du week-end. Un bon incomplet signé permet d'ajouter n'importe quoi après coup.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Mettre à jour fiches et template au moment du départ, puis rapprocher chaque soir',
    intro: "La sortie s'écrit au moment où le colis part, jamais en fin de journée. Puis chaque soir, dix minutes de rapprochement entre fiche, template et comptage visuel attrapent l'erreur le jour même, quand on s'en souvient encore.",
    steps: [
      {
        title: 'Enregistrez au départ',
        actions: [
          "Fiche de stock de chaque lot : date, numéro du bon de sortie, destination, quantité sortie, nouveau solde, visa.",
          "Template : ajoutez la quantité sortie à la colonne G de chaque ligne (cumul) ; H se recalcule seul.",
        ],
      },
      {
        title: 'Rapprochez le soir',
        actions: [
          "Pour chaque article sorti dans la journée : comparez le solde de la fiche, la colonne H du template et un comptage rapide de l'emplacement.",
          "Toute différence ouvre immédiatement un contrôle (document manquant, erreur de lot) ; si elle persiste, rapport d'écart (Procédure 8).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — enregistrement du 25/03 et rapprochement de 17h30',
      lines: [
        "Fiche SRO L2025-211 : « 25/03 | BS-0324 | UTC Bweza | sortie 15 | solde 31 | visa ». Template ligne 5 : G = 74 + 15 = 89 ; H = 120 − 89 = 31.",
        "Fiche RL L2026-009 : « 25/03 | BS-0324 | UTC Bweza | sortie 20 | solde 40 | visa ». Template ligne 8 : G = 0 + 20 = 20 ; H = 60 − 20 = 40.",
        "Rapprochement : solde fiche = H = comptage de l'emplacement pour les deux lots (31 et 40). Aucun écart.",
      ],
    },
    result: "Livrable 4 terminé : bon de réception signé, bon de sortie signé, fiches mises à jour au moment du mouvement et rapprochées du template le soir même.",
    pitfall: "Mettre à jour la fiche « en fin de semaine, de mémoire ». Elle perd sa valeur probante et le rapprochement du soir ne sert plus à rien.",
  },
  // ───────────── PROCÉDURE 6 — Synthèse par catégorie et point de stock ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Vérifier que la synthèse lit bien toutes vos lignes',
    intro: "Jour 3, puis chaque semaine. L'onglet « Synthèse par catégorie » calcule tout seul à partir de l'Inventaire, mais il ne dit pas quand il est faux. Avant de lire un chiffre, vous contrôlez qu'il lit toutes vos lignes.",
    steps: [
      {
        title: "Repérez ce que l'onglet calcule",
        actions: [
          "Ouvrez l'onglet « Synthèse par catégorie » : 3 catégories en A5 à A7 (Médical, Alimentaire, NFI (non périssable)), TOTAL en ligne 8.",
          "Colonne B : stock disponible total (somme de H par catégorie). Colonne C : nombre de lots en alerte « URGENT - sortir en priorité (FEFO) ». Colonne D : nombre de lots « PÉRIMÉ - retirer ».",
          "Ne modifiez jamais les formules : elles lisent les lignes 5 à 24 de l'Inventaire.",
        ],
      },
      {
        title: 'Faites le contrôle de cohérence',
        actions: [
          "Dans une cellule libre hors tableau, saisissez =SOMME(Inventaire!H5:H24) et comparez avec B8.",
          "Si les deux chiffres diffèrent, une catégorie est mal orthographiée en colonne C de l'Inventaire (étape 4 de la Procédure 2) : corrigez-la.",
          "Effacez la cellule de contrôle une fois la vérification faite.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — contrôle du 25/03 à 16h00 (après réception, sortie et radiation)',
      lines: [
        "=SOMME(Inventaire!H5:H24) → 1 154",
        "Synthèse par catégorie, B8 (TOTAL) → 1 154 : les deux chiffres concordent, aucune catégorie n'est perdue.",
      ],
    },
    result: "La synthèse lit toutes vos lignes : le TOTAL du stock disponible égale la somme de la colonne H.",
    pitfall: "Lire la synthèse sans ce contrôle. Un lot dont la catégorie est écrite « Medical » n'apparaît dans aucune ligne : la synthèse ne signale rien, elle sous-compte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Lire les trois colonnes sans se tromper',
    intro: "Chaque colonne de la synthèse a une portée précise et trois limites. Les connaître évite de transmettre à la coordination un chiffre qui a l'air juste et ne l'est pas.",
    steps: [
      {
        title: 'Lisez les trois colonnes',
        actions: [
          "Lisez B, C, D pour chaque catégorie, puis le TOTAL.",
          "Pour chaque ligne d'alerte non nulle, filtrez l'Inventaire sur la colonne J pour retrouver les lots concernés.",
        ],
      },
      {
        title: 'Gardez en tête les 4 limites',
        actions: [
          "B additionne des unités de conditionnement différentes (cartons, boîtes, sacs, bidons, bâches) : c'est un indicateur de volume et de tendance, pas un tonnage. Pour décider d'une rupture, raisonnez article par article.",
          "B inclut le stock d'un lot PÉRIMÉ tant que sa colonne H n'est pas à 0 : radiez avant de lire.",
          "C et D comptent des LOTS (des lignes), pas des unités : « 1 URGENT » peut représenter 54 sacs. C n'inclut pas les lots « Surveiller ».",
          "D compte aussi les lignes périmées dont le stock est 0 (lot radié) : lisez D avec la colonne H.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Stock disponible total', 'Articles en alerte (URGENT)', 'Articles PÉRIMÉS'],
      rows: [
        ['Médical', '560', '1', '0'],
        ['Alimentaire', '254', '1', '1'],
        ['NFI (non périssable)', '340', '0', '0'],
        ['TOTAL', '1 154', '2', '1'],
      ],
    },
    result: "Vous lisez : 2 lots à sortir en priorité (SRO L2025-211 et CSB+ L2025-402), 1 lot périmé déjà radié (stock 0, huile). Le « 254 » d'Alimentaire ne contient plus les 50 bidons radiés.",
    pitfall: "Annoncer « 1 154 unités en stock » comme si c'était un chiffre unique. C'est une somme de cartons, boîtes, sacs, bidons et bâches : utile pour suivre la tendance, inutilisable pour décider d'un réapprovisionnement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Calculer la couverture de stock et le stock tampon des articles critiques',
    intro: "La synthèse dit ce que vous avez ; elle ne dit pas combien de temps cela dure, ni si un lot va périmer avant d'être consommé. Vous calculez ces deux chiffres à part (une feuille de pilotage, pas dans le template) pour les articles critiques et les lots en alerte.",
    steps: [
      {
        title: 'Calculez la consommation et la couverture',
        actions: [
          "Consommation hebdomadaire = sorties documentées des dernières semaines (lues dans la fiche de stock) ÷ nombre de semaines.",
          "Couverture (semaines) = stock utilisable (somme de H des lots non périmés de l'article) ÷ consommation hebdomadaire.",
          "Comparez la couverture d'un lot en alerte à ses jours restants (colonne I) : si le lot dure plus longtemps qu'il ne reste de jours, une partie périmera.",
        ],
      },
      {
        title: 'Fixez le seuil tampon',
        actions: [
          "Stock tampon minimal = consommation hebdomadaire prévisible × (délai de réapprovisionnement en semaines + 1 semaine de sécurité).",
          "Pour une épidémie en croissance, retenez une consommation majorée (ici ×2).",
          "Déclenchez la commande dès que le stock utilisable passe sous ce seuil.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — couverture au 25/03/2026',
      lines: [
        "SRO : 74 cartons sortis en 3 semaines → 25 par semaine. Stock utilisable : 31 + 200 = 231 cartons. Hypothèse épidémique ×2 = 50 par semaine → couverture 231 ÷ 50 = 4,6 semaines. Tampon : 50 × (1 + 1) = 100 cartons. 231 > 100 : pas de commande urgente.",
        "SRO lot L2025-211 : 31 cartons à 25 par semaine = 1,2 semaine (environ 9 jours) pour 26 jours restants → sera consommé avant péremption si FEFO est respecté.",
        "CSB+ lot L2025-402 : 96 sacs sortis en 6 semaines → 16 par semaine (2,3 par jour). 54 sacs durent 24 jours pour 16 jours restants → environ 17 sacs risquent de périmer.",
        "Décision : proposer 20 sacs de CSB+ au partenaire nutritionnel de la zone de santé via le BCZ avant le 05/04, sur accord écrit de la coordination (bon de sortie « don », signature du bénéficiaire).",
      ],
    },
    result: "Pour chaque article critique : une couverture en semaines, un seuil de commande, et pour chaque lot en alerte une décision de sortie datée.",
    pitfall: "Conclure « 4,6 semaines de SRO, tout va bien » sans regarder la péremption lot par lot. Le CSB+ L2025-402 a assez de stock pour 24 jours mais seulement 16 jours de vie : le risque est dans l'écart entre les deux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Envoyer le point de stock hebdomadaire à la coordination',
    intro: "C'est votre outil de pilotage : vous anticipez les sorties prioritaires et signalez toute catégorie qui approche d'une rupture ou qui accumule des pertes. Un message court, chiffré, daté, toujours dans le même format, chaque vendredi avant 16h.",
    steps: [
      {
        title: 'Rédigez le message en 5 blocs',
        actions: [
          "Objet : « Point de stock entrepôt [site] — [date] — [résumé en 5 mots] ».",
          "Situation : les chiffres de la synthèse (stock, URGENT, PÉRIMÉS) à la date.",
          "Alertes : chaque lot URGENT ou PÉRIMÉ avec la décision prise ou demandée.",
          "Couverture : articles critiques en semaines et rappel du seuil de commande.",
          "Écarts ouverts et décisions demandées, avec une échéance.",
        ],
      },
      {
        title: 'Envoyez, joignez, tracez',
        actions: [
          "Joignez le fichier d'inventaire daté (v02 le 25/03).",
          "Envoyez au coordinateur logistique pays, avec la coordinatrice de projet en copie.",
          "Notez l'envoi dans votre journal et préparez le prochain point pour le vendredi suivant.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — premier point de stock, mercredi 25/03 à 16h30',
      lines: [
        "Objet : Point de stock entrepôt Lukando — 25/03/2026 — 2 lots à sortir en priorité",
        "Jean-Marc, stock disponible 1 154 unités de conditionnement (Médical 560, Alimentaire 254, NFI 340). 2 lots URGENT, 1 lot périmé radié aujourd'hui (50 bidons d'huile, PV-RAD-2026-001).",
        "Alertes : SRO L2025-211 (31 cartons, 26 jours) sorti en premier ; CSB+ L2025-402 (54 sacs, 16 jours) : environ 17 sacs risquent de périmer, je propose 20 sacs au partenaire nutritionnel via le BCZ avant le 05/04. Ta validation avant vendredi 12h ?",
        "Couverture : SRO 4,6 semaines (hypothèse ×2), seuil de commande 100 cartons, non atteint.",
        "Écart ouvert : doxycycline L2025-266, −6 boîtes, rapport RE-2026-001 en cours. Fichier joint : 2026-03-25_Inventaire-FEFO_Lukando_v02.xlsx. Cordialement.",
      ],
    },
    result: "Livrable 5 terminé : un point de stock chiffré, daté, avec une décision demandée et une échéance, envoyé chaque semaine dans le même format.",
    tip: "Gardez la même structure semaine après semaine : votre coordinateur lit en 30 secondes ce qui a changé, et repère une dérive avant vous.",
  },

  // ───────────── PROCÉDURE 7 — Inventaire complet et comptages tournants ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Planifier : inventaire complet de référence, puis comptages tournants',
    intro: "Un inventaire physique complet établit une base fiable ; des comptages tournants (cycle counts) réguliers sur des sous-ensembles du stock détectent un problème pendant qu'il est encore possible de comprendre ce qui s'est passé. Attendre l'inventaire de fin d'année pour découvrir un écart accumulé sur douze mois rend sa cause quasi impossible à identifier.",
    steps: [
      {
        title: "Planifiez l'inventaire complet de référence",
        actions: [
          "Date : à J5 (vendredi 27/03), une fois les écarts de prise de poste traités et le stock rangé : c'est la base à laquelle tous les comptages ultérieurs se réfèrent.",
          "Périmètre : tous les lots de A, B, C et la zone Q ; mouvements gelés comme au comptage de prise de poste.",
        ],
      },
      {
        title: 'Construisez le calendrier des comptages tournants',
        actions: [
          "Une catégorie par semaine, en commençant par le médical : ce sont les articles les plus revendables, les plus périssables et les plus critiques pour les patients.",
          "Ajoutez des comptages ciblés : après toute réception importante, après toute distribution, après tout incident (porte ouverte, intrusion) et sur tout lot ayant eu un écart.",
          "Variez les jours : le calendrier est connu de vous seul, l'équipe est prévenue le matin même.",
          "Faites compter par une personne qui ne tient pas la fiche du lot concerné.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Périmètre', 'Compteurs', 'Contrôleur'],
      rows: [
        ['Ven. 27/03', 'Inventaire complet de référence (10 lots + zone Q)', 'E. Mumbere, J. Kitsa', 'Vous ; F. Mwamba témoin'],
        ['Lun. 30/03', 'Médical (6 lots)', 'E. Mumbere, J. Kitsa', 'Vous'],
        ['Lun. 06/04', 'Alimentaire (2 lots)', 'J. Kitsa, E. Mumbere', 'Vous'],
        ['Lun. 13/04', 'NFI (2 lots)', 'E. Mumbere, J. Kitsa', 'Vous'],
        ['Lun. 20/04', 'Médical + tout lot avec écart ouvert ou rapport récent', 'J. Kitsa, E. Mumbere', 'J.-M. Ilunga (visite)'],
      ],
    },
    result: "Un calendrier daté sur un mois : un inventaire complet de référence, puis une catégorie par semaine, plus des déclencheurs.",
    pitfall: "Annoncer le calendrier à l'équipe pour « qu'elle se prépare ». Le but d'un comptage tournant n'est pas de voir un entrepôt propre le jour dit, c'est de voir le stock tel qu'il est tous les autres jours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Préparer les feuilles de comptage et compter à l\'aveugle, deux fois',
    intro: "Vous reprenez la méthode du comptage de prise de poste, avec une règle de plus : deux comptages indépendants avant tout rapprochement. C'est ce qui sépare une vraie erreur de stock d'une simple erreur de comptage.",
    steps: [
      {
        title: 'Préparez la feuille',
        actions: [
          "Extrayez du template le stock théorique de chaque lot du périmètre (colonne H), sans l'imprimer sur la feuille remise aux compteurs.",
          "Feuille de comptage : Référence | Lot | Péremption | Emplacement | Comptage 1 | Comptage 2 | Quantité retenue | Écart | Visa.",
        ],
      },
      {
        title: 'Comptez deux fois',
        actions: [
          "Comptage 1 par un compteur, comptage 2 par un autre, sans communiquer les chiffres.",
          "Si les deux comptages diffèrent, recomptez ensemble le lot concerné et notez la quantité retenue.",
          "Notez à part tout colis endommagé, toute étiquette manquante, tout lot mélangé.",
        ],
      },
    ],
    table: {
      columns: ['Lot (Médical, 30/03)', 'Théorique (H)', 'Comptage 1', 'Comptage 2', 'Retenu'],
      rows: [
        ['MED-SRO-20 L2025-211', '31', '31', '31', '31'],
        ['MED-SRO-20 L2026-040', '200', '200', '200', '200'],
        ['MED-RL-500 L2025-305', '50', '50', '50', '50'],
        ['MED-RL-500 L2026-009', '40', '38', '40', '40 (recompté ensemble)'],
        ['MED-DOXY-100 L2025-266', '36', '36', '36', '36'],
        ['MED-KCH-01 K2026-009', '197', '197', '197', '197'],
      ],
    },
    result: "Une feuille signée avec deux comptages indépendants par lot et une quantité retenue pour chacun.",
    tip: "Le lot L2026-009 : le comptage 1 donne 38, le comptage 2 donne 40. La différence ne révèle pas un écart de stock mais une erreur de comptage (2 cartons derrière la palette) : c'est précisément pour cela qu'on compte deux fois.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Rapprocher, recompter et conclure ligne par ligne',
    intro: "Le rapprochement compare la quantité retenue au stock théorique du template. Tout écart non nul déclenche une chaîne fixe : recompter, chercher les documents, puis rapporter. Un écart, même minime, n'est jamais « arrondi ».",
    steps: [
      {
        title: 'Comparez',
        actions: [
          "Pour chaque lot, calculez : quantité retenue moins stock théorique.",
          "Écart nul : signez la feuille de comptage pour ce lot.",
        ],
      },
      {
        title: 'Traitez les écarts non nuls',
        actions: [
          "Faites compter une troisième fois par une autre personne.",
          "Cherchez, dans les 24 heures, les bons de réception ou de sortie non enregistrés.",
          "Si l'écart persiste : rapport d'écart le jour même (Procédure 8) ; ne modifiez rien dans F ni G avant validation.",
        ],
      },
      {
        title: 'Archivez',
        actions: [
          "Classez les feuilles de comptage datées et signées dans le classeur « Comptages ».",
          "Notez le résultat dans votre journal d'entrepôt.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — conclusion du comptage tournant médical du lundi 30/03',
      lines: [
        "12h00 — 6 lots comptés, 5 en concordance au premier rapprochement. MED-RL-500 L2026-009 : retenu 40 contre théorique 40 après recomptage ensemble → écart nul.",
        "12h10 — Aucun écart résiduel, aucun rapport à ouvrir ; feuille signée par les deux compteurs et par vous, archivée.",
        "Rappel de la base : inventaire complet du 27/03 = 10 lots concordants, après régularisation de la doxycycline (RE-2026-001).",
      ],
    },
    pitfall: "Corriger la quantité du template à la volée (« 38 plutôt que 40 ») avant de recompter. Vous créeriez un écart qui n'existe pas, puis un rapport inutile.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Exploiter les résultats : tableau des écarts, tendances, prochains comptages',
    intro: "Un écart isolé est une erreur. Le même écart sur la même catégorie, la même période ou la même équipe de garde est un signal. C'est pour ce signal qu'on garde un tableau de tous les comptages, même ceux sans écart.",
    steps: [
      {
        title: 'Tenez le tableau des comptages',
        actions: [
          "Une ligne par comptage : date, périmètre, nombre de lots comptés, écarts, numéro du rapport.",
          "Ajoutez pour chaque écart : article, quantité, cause établie ou non, mesure préventive.",
        ],
      },
      {
        title: 'Cherchez les récurrences et ajustez',
        actions: [
          "Relisez le tableau chaque mois : même catégorie, même article, même équipe de garde, même période ?",
          "Un article avec écart passe en recomptage hebdomadaire pendant quatre semaines.",
          "Toute récurrence est signalée au coordinateur logistique pays, sans accuser personne : vous présentez des faits.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Périmètre', 'Lots comptés', 'Écarts', 'Rapport'],
      rows: [
        ['24/03', 'Complet (prise de poste)', '10', '1 (doxycycline −6)', 'RE-2026-001'],
        ['27/03', 'Complet (référence)', '10', '0 résiduel', '—'],
        ['30/03', 'Médical', '6', '0 (recomptage de L2026-009)', '—'],
      ],
    },
    result: "Livrable 6 terminé : calendrier, feuilles de comptage rapprochées, tableau des écarts à jour, et un prochain comptage déjà daté.",
    tip: "Ajoutez au tableau les comptages sans écart : c'est la preuve qu'un stock fiable est un stock compté, et c'est ce que montre un audit.",
  },

  // ───────────── PROCÉDURE 8 — Documenter un écart (docx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 6',
    title: "Confirmer l'écart avant d'écrire : recompter et chercher les documents",
    intro: "Le rapport d'écart documente un écart réel. Avant de l'ouvrir, vous éliminez les fausses alertes : erreur de comptage, document non saisi, lot confondu, unité confondue. Mais vous l'ouvrez dès sa découverte et vous le laissez en brouillon : l'urgence n'est pas de conclure, c'est de tracer.",
    steps: [
      {
        title: 'Éliminez les faux écarts',
        actions: [
          "Faites recompter le lot par deux personnes différentes.",
          "Vérifiez qu'un lot voisin n'a pas été confondu avec celui-ci (lot, date, étiquette).",
          "Vérifiez l'unité : boîtes contre cartons, sacs contre palettes.",
        ],
      },
      {
        title: 'Cherchez les documents non saisis',
        actions: [
          "Passez en revue, dans le classeur, tous les bons de sortie et de réception de l'article depuis la dernière date où le stock était exact.",
          "Notez ce que vous trouvez, avec les numéros ; ne jetez rien.",
        ],
      },
      {
        title: 'Ouvrez le rapport',
        actions: [
          "Si l'écart persiste, ouvrez le rapport le jour même, en brouillon, avec le numéro suivant (RE-AAAA-NNN).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — instruction de l\'écart doxycycline, 24 et 25/03',
      lines: [
        "24/03 16h40 — Compté 36, recompté ensemble 36, fiche 42 : écart −6 confirmé. Rapport RE-2026-001 ouvert en brouillon.",
        "25/03 8h30 — Examen des bons de sortie depuis le 12/03 (dernier solde de la fiche) : BS-0318 du 18/03, 4 boîtes de doxycycline pour le PRO de Kasika, signé par l'infirmière, jamais reporté sur la fiche ni dans le template.",
        "Écart restant après ce document : 6 − 4 = 2 boîtes, sans document.",
      ],
    },
    result: "L'écart est confirmé (deux comptages), 4 boîtes sur 6 sont expliquées par un document retrouvé, il reste 2 boîtes sans explication : le rapport est justifié.",
    pitfall: "Conclure « erreur de saisie » dès qu'un document est retrouvé. Il explique 4 boîtes sur 6 : les 2 autres restent un écart que le rapport doit traiter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 6',
    title: 'Sections 1 et 2 — Identification du comptage et de l\'article',
    intro: "Le template rapport-ecarts-stock.docx s'ouvre sur un titre, un paragraphe d'objectif et six sections. Les sections 1 et 2 sont factuelles : où, quand, qui a compté, quel type de comptage, quel article et quel lot. Ne laissez aucun texte d'aide.",
    steps: [
      {
        title: 'Ouvrez et préparez le document',
        actions: [
          "Ouvrez rapport-ecarts-stock.docx et enregistrez-le sous AAAA-MM-JJ_RE-AAAA-NNN_[Site]_[Article].docx, soit 2026-03-24_RE-2026-001_Lukando_DOXY.docx.",
          "Lisez le paragraphe d'objectif : documenter tout écart dès sa découverte, à faire valider par le superviseur avant tout ajustement système.",
        ],
      },
      {
        title: 'Complétez les sections 1 et 2',
        actions: [
          "Section 1 : quatre cases dans deux tableaux : Entrepôt / site, Date du comptage, Responsable du comptage (nom, fonction), Type de comptage (cyclique / complet / post-distribution).",
          "Section 2 : une ligne unique : référence article, désignation, catégorie, numéro de lot.",
          "Remplacez chaque texte d'aide par votre contenu.",
        ],
      },
    ],
    table: {
      columns: ['Champ du rapport', 'Contenu saisi'],
      rows: [
        ['Entrepôt / site', 'Entrepôt Kemora Santé — base de Lukando (Nord-Kivu)'],
        ['Date du comptage', '24/03/2026'],
        ['Responsable du comptage (nom, fonction)', '[Votre nom], responsable d\'entrepôt (avec E. Mumbere et J. Kitsa ; témoin F. Mwamba)'],
        ['Type de comptage', 'Complet (prise de poste)'],
        ['Section 2 — Article et lot', 'MED-DOXY-100 — Doxycycline 100 mg, boîte de 100 comprimés — Médical — lot L2025-266 (péremption 31/05/2026)'],
      ],
    },
    pitfall: "Écrire « comptage de mardi » ou « responsable : entrepôt ». Dans un audit, une date incomplète et un nom sans fonction rendent le rapport inexploitable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 6',
    title: 'Section 3 — Quantités attendues, comptées, écart en unités et en pourcentage',
    intro: "La section 3 est un tableau de quatre colonnes : Stock système (fiche de stock), Stock physique compté, Écart (unités), Écart (%). Le chiffre « système » est celui de la fiche de stock et de la colonne H du template, qui doivent être identiques.",
    steps: [
      {
        title: 'Calculez les quatre cases',
        actions: [
          "Stock système : le solde de la fiche de stock, égal à la colonne H du template (ici 42).",
          "Stock physique compté : la quantité retenue après recomptage (ici 36).",
          "Écart (unités) = physique − système. Un résultat négatif signifie un manque (ici −6).",
          "Écart (%) = écart en unités ÷ stock système × 100 (ici −6 ÷ 42 × 100 = −14,3 %).",
        ],
      },
      {
        title: 'Vérifiez la cohérence',
        actions: [
          "Les chiffres du rapport doivent être identiques à la ligne du template (ligne 9 : H = 42).",
          "Dans Excel, contrôlez le pourcentage : =(36−42)/42 → −14,3 %.",
        ],
      },
    ],
    table: {
      columns: ['Stock système (fiche de stock)', 'Stock physique compté', 'Écart (unités)', 'Écart (%)'],
      rows: [
        ['42', '36', '−6', '−14,3 %'],
      ],
    },
    pitfall: "Diviser par le stock compté (−6 ÷ 36 = −16,7 %) ou mélanger les signes (+6 pour un manque). Le pourcentage se calcule toujours sur le stock système, et un manque est négatif.",
    tip: "Pour le cas de Maiduguri du module (160 attendus, 135 comptés), le calcul suit la même logique : 135 − 160 = −25 unités ; −25 ÷ 160 × 100 = −15,6 %.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 6',
    title: 'Section 4 — Causes possibles : du fait vérifié à l\'hypothèse',
    intro: "La section 4 propose une liste de causes : erreur de saisie ou de transfert, vol ou détournement suspecté, péremption non retirée du système, erreur de comptage initial, casse ou dommage non déclaré, autre. Pour chacune, vous distinguez ce qui est prouvé de ce qui reste possible.",
    steps: [
      {
        title: 'Classez chaque cause',
        actions: [
          "Reprenez chaque cause de la liste et écrivez un statut : VÉRIFIÉE (avec la preuve), ÉCARTÉE (avec la raison) ou NON EXCLUE.",
          "Appuyez-vous uniquement sur des faits : documents, comptages, observations (porte, accès).",
          "Chiffrez la part de l'écart que chaque cause explique.",
        ],
      },
      {
        title: 'Formulez avec prudence',
        actions: [
          "N'écrivez jamais « vol » sans preuve : écrivez « détournement non exclu » et ouvrez une enquête.",
          "Proposez au moins deux causes crédibles compte tenu du contexte.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 4 du rapport RE-2026-001',
      lines: [
        "Erreur de saisie ou de transfert : VÉRIFIÉE pour 4 boîtes — BS-0318 du 18/03 (PRO Kasika), jamais reporté sur la fiche ni dans le template.",
        "Erreur de comptage initial : ÉCARTÉE — deux comptages indépendants et un recomptage ensemble donnent 36.",
        "Casse ou dommage non déclaré : NON EXCLUE pour 2 boîtes — aucune casse signalée, inspection de l'emplacement en cours.",
        "Vol ou détournement : NON EXCLU pour 2 boîtes — la zone médicale n'avait ni liste d'accès ni registre avant le 23/03.",
        "Péremption non retirée du système : sans objet (péremption le 31/05/2026).",
      ],
    },
    pitfall: "Écrire « cause : vol par le magasinier ». Sans preuve, c'est une accusation qui détruit la confiance de l'équipe et protège mal l'organisation. Un rapport solide écrit « non exclu » et propose une enquête.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 6',
    title: 'Section 5 — Action corrective et mesure préventive applicables',
    intro: "La section 5 contient un tableau (Ajustement système effectué, Enquête interne ouverte) puis un champ « Mesure préventive proposée pour éviter la récurrence ». « Renforcer la vigilance » n'est pas une mesure : une mesure est un changement de procédure ou de disposition physique, avec un responsable et une échéance.",
    steps: [
      {
        title: "Remplissez l'action corrective",
        actions: [
          "Ajustement système : indiquez oui ou non, avec référence. Ne mettez « oui » que pour ce qui est documenté ou validé.",
          "Enquête interne : oui ou non, avec portée, durée et personnes concernées.",
          "Aucun ajustement silencieux : tout changement de quantité cite le document ou le rapport qui le justifie.",
        ],
      },
      {
        title: 'Écrivez une mesure préventive concrète',
        actions: [
          "Formule en 4 éléments : changement de procédure ou de disposition ; qui l'applique ; à partir de quand ; comment on vérifie.",
          "Cherchez la mesure qui rend l'erreur difficile, pas celle qui demande plus d'attention à quelqu'un.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 5 du rapport RE-2026-001',
      lines: [
        "Ajustement système : OUI pour 4 boîtes — régularisation par saisie du BS-0318 (sortie du 18/03, PRO Kasika), effectuée le 26/03 ; NON pour 2 boîtes — en attente de validation du superviseur.",
        "Enquête interne : OUI, ouverte le 26/03 — revue de toutes les sorties de doxycycline depuis le 01/03, comptage contradictoire le 27/03 en présence de F. Mwamba.",
        "Mesure préventive : aucune sortie de médicament sans bon de sortie enregistré sur la fiche de stock AVANT que le colis ne quitte la zone R (le magasinier remplit la fiche devant le demandeur, qui signe) ; doxycycline et autres antibiotiques déplacés dans l'armoire fermée à clé de la zone A (2 clés nominatives) ; comptage tournant du médical chaque semaine à partir du 30/03. Responsable : responsable d'entrepôt. Contrôle : feuilles de comptage.",
      ],
    },
    pitfall: "Écrire « Mesure préventive : renforcer la vigilance de l'équipe ». Cette phrase ne change rien à ce qui s'est passé : elle ne dit ni qui, ni quoi, ni quand, ni comment on le vérifie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 6',
    title: 'Section 6 — Valider, ajuster le système, archiver et suivre',
    intro: "La section 6 contient deux cases : « Rédigé par (responsable entrepôt), Date » et « Validé par (superviseur logistique), Date ». C'est seulement après validation que vous modifiez le système, avec la référence du rapport. Un écart n'est « réglé » ni par un simple ajustement silencieux du chiffre, ni par un rapport dans un tiroir.",
    steps: [
      {
        title: 'Signez, transmettez, attendez la validation',
        actions: [
          "Remplissez « Rédigé par » : votre nom, votre fonction, la date.",
          "Envoyez le rapport au superviseur logistique (Jean-Marc Ilunga) avec la fiche d'inventaire.",
          "Ne modifiez pas les quantités du template avant sa validation écrite, sauf la régularisation d'un document réellement retrouvé.",
        ],
      },
      {
        title: 'Ajustez avec référence et archivez',
        actions: [
          "Après validation : sur la fiche de stock, ajoutez une ligne « ajustement RE-2026-001 » ; dans le template, ajoutez la quantité à la colonne G de la ligne.",
          "Archivez le rapport signé dans le classeur « Écarts » et mettez à jour le tableau des comptages.",
          "Vérifiez la mesure préventive au prochain comptage tournant.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — clôture de RE-2026-001',
      lines: [
        "26/03 — Rédigé par [vous], responsable d'entrepôt. Envoyé à J.-M. Ilunga. BS-0318 saisi : G = 18 + 4 = 22, H = 38.",
        "27/03 — Validé par J.-M. Ilunga, superviseur logistique. Ajustement des 2 boîtes restantes, réf. RE-2026-001 : G = 22 + 2 = 24, H = 36 = comptage physique.",
        "27/03 — Contrôle : l'inventaire complet de référence confirme 36 boîtes. Rapport archivé. Contrôle de la mesure préventive : comptage médical du 30/03.",
      ],
    },
    result: "Livrable 7 terminé : un rapport complet (6 sections), signé, validé, archivé, dont les chiffres (42 / 36 / −6 / −14,3 % ; G final 24, H final 36) sont identiques à ceux de la fiche d'inventaire.",
    pitfall: "Archiver le rapport sans suivre sa mesure préventive. Au prochain comptage, la même cause produit le même écart, et c'est le deuxième rapport qui devient un problème de redevabilité.",
  },

  // ───────────── PROCÉDURE 9 — Points de contrôle antipertes ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 3',
    title: 'Séparer les tâches : qui reçoit, qui enregistre, qui approuve, qui compte',
    intro: "Le premier point de contrôle contre la perte et le détournement n'est pas une caméra : c'est qu'aucune personne ne contrôle seule un mouvement du début à la fin. Même dans une équipe de quatre, on croise les rôles.",
    steps: [
      {
        title: 'Construisez la matrice des rôles',
        actions: [
          "Listez les tâches : réceptionner, enregistrer en fiche, préparer une sortie, approuver une sortie, compter, valider un écart.",
          "Pour chaque tâche, écrivez qui l'exécute et qui la contrôle ; une même personne ne fait jamais les deux.",
          "Pour une équipe réduite, croisez : le responsable contrôle le magasinier, le coordinateur contrôle le responsable (visite inopinée mensuelle).",
        ],
      },
      {
        title: 'Faites-la valider et affichez-la',
        actions: [
          "Faites valider la matrice par le coordinateur logistique pays.",
          "Affichez-la dans l'entrepôt et remettez-la à chaque nouvel arrivant.",
        ],
      },
    ],
    table: {
      columns: ['Tâche', 'Qui exécute', 'Qui contrôle'],
      rows: [
        ['Réception (comptage et bon)', 'Magasinier + manutentionnaire', 'Responsable d\'entrepôt (signature du bon)'],
        ['Enregistrement sur fiche de stock', 'Magasinier', 'Responsable d\'entrepôt (rapprochement du soir)'],
        ['Préparation d\'une sortie', 'Manutentionnaire', 'Deuxième manutentionnaire (double comptage)'],
        ['Approbation d\'une sortie', 'Responsable d\'entrepôt', 'Demandeur autorisé (signature)'],
        ['Comptage tournant', 'Deux compteurs', 'Responsable d\'entrepôt, qui ne tient pas la fiche comptée'],
        ['Validation d\'un écart', 'Superviseur logistique', 'Coordination (revue mensuelle)'],
      ],
    },
    pitfall: "Confier réception, enregistrement et comptage à la même personne « parce qu'elle est la plus fiable ». Même une personne irréprochable ne peut pas prouver son innocence le jour d'un écart.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 3',
    title: 'Contrôler les documents et la porte : numérotation et clôture quotidienne',
    intro: "Les écarts les plus coûteux viennent de documents modifiables après coup et de portes ouvertes aux mauvais moments. Deux règles et une routine de clôture suffisent à fermer la plupart de ces portes.",
    steps: [
      {
        title: 'Numérotez et verrouillez les documents',
        actions: [
          "Bons de réception et de sortie en carnets numérotés ; un bon annulé est barré, signé, et conservé ; aucun numéro ne manque.",
          "Fiche de stock à l'encre, sans gomme : une erreur se barre d'un trait avec un visa et la correction à côté.",
        ],
      },
      {
        title: 'Installez la routine de clôture',
        actions: [
          "Chaque soir à 17h : rapprochement des mouvements du jour, registre d'accès signé, clés remises, portes verrouillées.",
          "Pendant tout mouvement : porte de la zone de stockage fermée dès qu'on en sort, jamais ouverte sans surveillance.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — check-list de clôture affichée à la porte',
      lines: [
        "☐ Tous les bons de la journée sont enregistrés sur les fiches (réception et sortie).",
        "☐ Rapprochement fiche / template / comptage rapide fait pour les articles sortis.",
        "☐ Aucun colis en zone R : tout est rangé ou chargé.",
        "☐ Registre d'accès signé ; clés remises au responsable ; porte principale et porte de service verrouillées.",
        "☐ Gardien informé des horaires de passage ; signature : [responsable d'entrepôt], date, heure.",
      ],
    },
    pitfall: "Laisser la porte ouverte « parce qu'on allait et venait sans arrêt pour charger le camion ». C'est exactement la circonstance retenue dans le cas de Maiduguri, où 25 cartons manquent après une distribution.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 3',
    title: "Prévenir les dommages : inspection hebdomadaire du toit, du sol, des nuisibles",
    intro: "Les pertes ne sont pas toutes des vols : l'eau, les rongeurs, la chaleur et la chute de colis détruisent plus de stock qu'on ne le croit, et ils passent inaperçus tant que personne ne regarde. Une inspection hebdomadaire de dix minutes les fait remonter avant la perte.",
    steps: [
      {
        title: 'Faites une inspection fixe chaque lundi',
        actions: [
          "Toit et murs : traces d'humidité, fuites, fissures.",
          "Sol et palettes : eau, saleté, palettes cassées, cartons écrasés au bas des piles.",
          "Nuisibles : excréments, cartons rongés, pièges relevés.",
          "Sécurité incendie : extincteur accessible et daté, aucune accumulation de déchets, interdiction de fumer respectée.",
        ],
      },
      {
        title: 'Agissez et tracez',
        actions: [
          "Photographiez chaque constat et notez-le sur la fiche d'inspection ; traitez ce qui dépend de vous le jour même.",
          "Pour ce qui dépend d'un tiers (propriétaire, coordination), envoyez une demande écrite avec la photo et une échéance.",
          "Tout colis endommagé part en zone Q et suit la procédure de radiation (Procédure 3).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche d\'inspection du lundi 30/03 (extrait)',
      lines: [
        "Toit : fuite angle nord-est toujours active (photo 21) → bâche posée ce jour ; réparation demandée au propriétaire par la coordination (échéance 03/04).",
        "Sol : bidons d'huile radiés évacués, palettes saines. Nuisibles : 2 pièges posés, aucun signe de rongeurs. Extincteur : remplacement demandé le 10/04.",
        "Stock exposé : aucun sac de CSB+ à moins de 2 m de la fuite (déplacés le 25/03). Aucun colis endommagé.",
      ],
    },
    result: "Livrable : liste fermée, registre, séparation des tâches, routine de clôture et inspection hebdomadaire en place. Les points de contrôle qui préviennent la majorité des pertes, vols et dommages sont installés.",
    tip: "Faites l'inspection le lundi matin, avant tout mouvement : vous voyez l'entrepôt tel qu'il a passé le week-end, pas tel que l'équipe l'a préparé.",
  },

  // ───────────── CAS RÉSOLU ─────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Dossier Lukando : le raisonnement de J1 à J5',
    scenario: "Vous êtes arrivé(e) le lundi 23 mars 2026 avec une passation orale de vingt minutes, six affirmations non vérifiées et un entrepôt dont l'historique est incertain. Voici, jour par jour, ce qui a été fait, pourquoi, et ce que cela a produit.",
    steps: [
      {
        title: "J1 — lundi 23 mars : voir avant de croire",
        actions: [
          "7h30 : passation notée mot pour mot (6 affirmations).",
          "8h–12h : plan relevé, disposition, sécurité et accès contrôlés avec mètre, photos et grille (12 constats).",
          "14h–17h : cadenas posé, liste fermée signée, registre ouvert, clés inventoriées ; grille envoyée à J.-M. Ilunga.",
        ],
        result: "Livrable 1 : grille d'état des lieux, plan de correction, liste fermée et registre en place.",
      },
      {
        title: 'J2 — mardi 24 mars : compter, transférer, trier',
        actions: [
          "8h–16h : comptage à l'aveugle des 10 lots par deux compteurs ; 1 écart (doxycycline −6) et 1 lot périmé (huile).",
          "16h40–17h30 : template v01 saisi colonne par colonne ; RE-2026-001 ouvert en brouillon ; huile isolée en quarantaine.",
          "Règle FEFO affichée, test pratique avec l'équipe, plan de rangement décidé.",
        ],
        result: "Livrable 2 : fiche d'inventaire v01 cohérente avec le comptage, écart tracé.",
      },
      {
        title: 'J3 — mercredi 25 mars : ranger, radier, réceptionner, sortir, piloter',
        actions: [
          "7h–10h : réorganisation FEFO et étiquetage des emplacements ; 8h30 : le BS-0318 est retrouvé (4 boîtes) ; 9h15 : PV de radiation de l'huile (validé à 11h).",
          "10h40–11h45 : réception des 200 kits (197 acceptés, 3 en quarantaine), bon de réception avec réserves.",
          "13h30–14h10 : sortie de 20 cartons de Ringer lactate et de 15 cartons de SRO, lots choisis par FEFO ; fiches et template mis à jour.",
          "16h30 : synthèse lue, couverture calculée, premier point de stock envoyé.",
        ],
        result: "Livrables 3, 4 et 5 produits dans la même journée.",
      },
      {
        title: 'J4 — jeudi 26 mars : instruire, rédiger',
        actions: [
          "9h : inspection des 3 cartons mouillés avec l'infirmier superviseur : contenu inutilisable, radiés (PV-RAD-2026-002), réclamation envoyée à l'expéditeur avec les photos.",
          "BS-0318 saisi (G de la doxycycline : 22) ; RE-2026-001 finalisé et envoyé à J.-M. Ilunga.",
        ],
        result: "Rapport d'écart complet transmis pour validation.",
      },
      {
        title: 'J5 — vendredi 27 mars : valider, compter pour de bon, passer la main',
        actions: [
          "RE-2026-001 validé ; ajustement des 2 boîtes restantes avec référence (G = 24, H = 36).",
          "Inventaire complet de référence : 10 lots comptés, 0 écart résiduel.",
          "Dernière journée de F. Mwamba : remise des clés signée, matrice des tâches validée, calendrier des comptages envoyé.",
        ],
        result: "Livrables 6 et 7 terminés ; entrepôt sous contrôle en cinq jours.",
      },
    ],
    pitfall: "Ce qui se serait passé sans méthode : 50 bidons périmés dans le stock « disponible », un lot de Ringer lactate qui périme au fond, 6 boîtes de doxycycline manquantes ajustées en silence, et 3 cartons mouillés comptés comme bons.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — La fiche d'inventaire finale (état du 25/03/2026)",
    scenario: "Onglet Inventaire à la fin de J3, après le tri FEFO, la radiation de l'huile, la réception des kits et la sortie du jour. Les alertes sont calculées au 25/03/2026 ; dans le fichier, elles se recalculent chaque jour.",
    steps: [],
    table: {
      columns: ['Réf. — lot', 'E Péremption', 'F Entrée', 'G Sortie', 'H Stock', 'I Jours', 'J Alerte'],
      rows: [
        ['MED-SRO-20 L2025-211', '20/04/2026', '120', '89', '31', '26', 'URGENT - sortir en priorité (FEFO)'],
        ['MED-SRO-20 L2026-040', '31/01/2027', '200', '0', '200', '312', 'OK'],
        ['MED-RL-500 L2025-305', '15/06/2026', '90', '40', '50', '82', 'Surveiller'],
        ['MED-RL-500 L2026-009', '20/05/2026', '60', '20', '40', '56', 'Surveiller'],
        ['MED-DOXY-100 L2025-266', '31/05/2026', '60', '18', '42', '67', 'Surveiller'],
        ['ALI-CSB-25KG L2025-402', '10/04/2026', '150', '96', '54', '16', 'URGENT - sortir en priorité (FEFO)'],
        ['ALI-CSB-25KG L2026-017', '15/12/2026', '200', '0', '200', '265', 'OK'],
        ['ALI-HUILE-5L L2025-390', '20/03/2026', '80', '80', '0', '−5', 'PÉRIMÉ - retirer'],
        ['NFI-BACHE-STD L2026-022', '(vide)', '300', '120', '180', '(vide)', 'N/A (non périssable)'],
        ['NFI-SEAU-20L L2026-030', '(vide)', '250', '90', '160', '(vide)', 'N/A (non périssable)'],
        ['MED-KCH-01 K2026-009', '30/11/2027', '197', '0', '197', '615', 'OK'],
      ],
    },
    result: "Synthèse par catégorie : Médical 560 / 1 URGENT / 0 PÉRIMÉ ; Alimentaire 254 / 1 / 1 ; NFI 340 / 0 / 0 ; TOTAL 1 154 / 2 / 1, égal à la somme de la colonne H. La ligne de la doxycycline affichera H = 36 (G = 24) après validation de RE-2026-001 le 27/03.",
    tip: "Relisez le tableau comme un auditeur : chaque F et chaque G est prouvé par un bon, chaque H égale un comptage physique, chaque ligne périssable a une date. Si l'une des trois conditions manque, la ligne n'est pas bonne.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le rapport d\'écart RE-2026-001 tel que remis',
    scenario: "Rapport d'écart de stock — Entrepôt Kemora Santé, base de Lukando. Formation en Logistique Humanitaire · Module 04. Rédigé le 26/03/2026, validé le 27/03/2026.",
    steps: [],
    example: {
      title: 'Les 6 sections telles que remises',
      lines: [
        "1. Identification : Entrepôt Kemora Santé — Lukando (Nord-Kivu) ; date du comptage 24/03/2026 ; responsable du comptage : [responsable d'entrepôt] avec E. Mumbere et J. Kitsa ; type : complet (prise de poste).",
        "2. Article et lot : MED-DOXY-100 — Doxycycline 100 mg, boîte de 100 comprimés — Médical — lot L2025-266 (péremption 31/05/2026).",
        "3. Quantités : stock système (fiche de stock) 42 | stock physique compté 36 | écart −6 unités | écart −14,3 %.",
        "4. Causes : erreur de saisie ou de transfert VÉRIFIÉE pour 4 boîtes (BS-0318 du 18/03, PRO Kasika) ; erreur de comptage initial ÉCARTÉE (deux comptages et un recomptage) ; casse non exclue et détournement non exclu pour 2 boîtes (zone médicale sans liste d'accès avant le 23/03).",
        "5. Action corrective : ajustement système OUI pour 4 boîtes (BS-0318 saisi le 26/03), OUI pour 2 boîtes après validation (réf. RE-2026-001, 27/03) ; enquête interne OUI (revue des sorties depuis le 01/03, comptage contradictoire le 27/03). Mesure préventive : aucune sortie de médicament sans fiche de stock remplie devant le demandeur avant que le colis ne quitte la zone R ; antibiotiques en armoire fermée à clé (2 clés nominatives) ; comptage médical hebdomadaire dès le 30/03.",
        "6. Validation : rédigé par [responsable d'entrepôt], 26/03/2026 ; validé par J.-M. Ilunga, superviseur logistique, 27/03/2026.",
      ],
    },
    result: "Un rapport dont les chiffres (42 / 36 / −6 / −14,3 %) se retrouvent à l'identique dans la fiche de stock et dans le template (G final 24, H final 36), qui sépare ce qui est prouvé de ce qui reste possible, et dont la mesure préventive est un changement de procédure.",
    tip: "Comparez ce rapport à la phrase de la passation : « le stock est à jour, je tiens les fiches tous les jours ». Le comptage a montré que la fiche était exacte à 6 boîtes près : sans ce comptage, ni le BS-0318 ni les 2 boîtes manquantes ne seraient apparus.",
  },

  // ───────────── EXERCICES ─────────────
  {
    type: 'exercise',
    title: "Exercice 1 — Fiche d'inventaire : cas « Écart après une distribution médicale, Maiduguri, Nigeria »",
    instructions: "Contexte (fictif, inspiré de situations rencontrées dans le Nord-Est du Nigeria) : vous êtes responsable d'entrepôt pour une ONG médicale dans un camp de personnes déplacées près de Maiduguri. Le comptage après une distribution de kits contre la malnutrition aiguë révèle : le système indiquait 480 cartons de RUTF (aliment thérapeutique prêt à l'emploi) sur le lot L2026-047 (péremption dans 6 semaines) ; la distribution a consommé 320 cartons selon les listes signées ; le comptage ne trouve que 135 cartons au lieu de 160. La porte de la zone alimentaire est restée ouverte une partie de l'après-midi. Un autre lot, L2026-052 (péremption dans 4 mois), était rangé devant L2026-047. Refaites seul(e) les Procédures 2 et 3.",
    steps: [
      { title: 'Préparez le fichier', actions: ["Ouvrez fiche-inventaire-entrepot-fifo-fefo.xlsx, enregistrez-le sous AAAA-MM-JJ_Inventaire-FEFO_Maiduguri_v01.xlsx et effacez A5:G9 sans toucher à H, I, J."] },
      { title: 'Saisissez le lot L2026-047 avant la distribution', actions: ["A ALI-RUTF-CTN ; B RUTF (aliment thérapeutique prêt à l'emploi), carton ; C Alimentaire ; D L2026-047 ; E la date du jour + 42 jours (6 semaines) ; F 480 ; G 0.", "Précisez dans une note quelle est votre « date de la distribution » : prenez la date du jour, pour que la formule AUJOURDHUI() donne les alertes de ce moment-là."] },
      { title: 'Saisissez le lot L2026-052', actions: ["Mêmes colonnes ; E la date du jour + 4 mois (environ 122 jours) ; F : posez une hypothèse raisonnable (par exemple 360 cartons) et écrivez-la ; G 0."] },
      { title: "Lisez les alertes d'avant la distribution", actions: ["Notez I et J de chaque lot. Concluez : le lot L2026-047 est-il en alerte URGENT ? Aurait-il dû sortir en priorité, et pourquoi ?", "Rappelez la règle de lecture : l'alerte donne une urgence, FEFO donne l'ordre de sortie."] },
      { title: 'Enregistrez la distribution et comparez', actions: ["Ajoutez 320 à G du lot L2026-047 : H doit afficher 160 ; comparez avec les 135 comptés.", "Expliquez en 3 phrases ce que le rangement du lot L2026-052 devant L2026-047 a changé pour l'équipe, et comment la disposition devrait être corrigée."] },
      { title: 'Lisez la synthèse', actions: ["Relevez la ligne Alimentaire de l'onglet Synthèse par catégorie et expliquez ce que « Articles en alerte (URGENT) » compte, et ce qu'il ne compte pas."] },
    ],
    example: {
      title: 'Exemple de ligne attendue (même logique, cas Lukando)',
      lines: [
        "ALI-CSB-25KG | CSB+ (farine enrichie), sac de 25 kg | Alimentaire | L2025-402 | 10/04/2026 | 150 | 96 → H = 54, I = 16, J = URGENT - sortir en priorité (FEFO).",
      ],
    },
    tip: "Ne cherchez pas à faire tomber H sur 135 : le chiffre 135 est le comptage, il sert à calculer l'écart dans le rapport (exercice 2), pas à modifier G.",
    deliverable: "La fiche d'inventaire mise à jour (lots L2026-047 et L2026-052, G = 320 sur le premier) et une réponse écrite de 5 lignes : alertes lues, ordre de sortie FEFO justifié, effet du rangement, lecture de la synthèse.",
  },
  {
    type: 'exercise',
    title: "Exercice 2 — Rapport d'écart et action corrective : cas Maiduguri",
    instructions: "À partir de l'exercice 1, rédigez le rapport d'écart avec rapport-ecarts-stock.docx (Procédure 8). Il doit comporter les six sections, la quantité attendue (160) contre la quantité comptée (135), l'écart en unités et en pourcentage, au moins deux causes crédibles, une action corrective et une mesure préventive concrètes. Les chiffres du rapport doivent correspondre exactement à ceux de la fiche d'inventaire.",
    steps: [
      { title: 'Sections 1 et 2', actions: ["Entrepôt et date de votre choix, type de comptage : post-distribution. Article : ALI-RUTF-CTN, RUTF, Alimentaire, lot L2026-047."] },
      { title: 'Section 3 — Quantités', actions: ["Stock système 160, stock physique 135 ; calculez l'écart en unités et en pourcentage avec la méthode de la Procédure 8 (étape 3) ; vérifiez qu'il correspond à H de votre fiche."] },
      { title: 'Section 4 — Causes', actions: ["Rédigez au moins deux causes crédibles tirées du contexte : porte restée ouverte, mauvais respect du tri FEFO (lot L2026-052 devant), erreur possible sur les listes de distribution signées.", "Pour chacune : statut VÉRIFIÉE, ÉCARTÉE ou NON EXCLUE, et la vérification que vous feriez (recomptage du lot L2026-052, rapprochement des listes signées, registre d'accès)."] },
      { title: 'Section 5 — Action corrective et mesure préventive', actions: ["Action corrective : ajustement avec référence ou non, enquête interne oui ou non, avec portée et durée.", "Mesure préventive : un changement de procédure ou de disposition applicable (qui, quoi, quand, vérification). « Renforcer la vigilance » est refusé."] },
      { title: 'Section 6 — Validation', actions: ["Complétez « Rédigé par » ; indiquez qui validerait et pourquoi l'ajustement attend sa validation."] },
    ],
    pitfall: "Écrire une seule cause (« vol »). Le contexte propose au moins trois hypothèses (porte, tri FEFO, listes) : un rapport solide les classe et dit comment les départager.",
    deliverable: "rapport-ecarts-stock.docx complété (6 sections) et cohérent avec la fiche de l'exercice 1 (160 / 135 / écart / pourcentage identiques).",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Quatre situations d\'entrepôt',
    instructions: "Pour chaque situation, indiquez la logique à appliquer (FIFO ou FEFO), la décision, le document à établir et ce que vous saisissez dans le template. Rédigez ensuite la ligne correspondante de votre journal d'entrepôt.",
    steps: [
      { title: 'Situation A', body: "Le fournisseur livre 300 bidons de gasoil pour le groupe électrogène ; certains bidons portent une date limite d'utilisation, d'autres non." },
      { title: 'Situation B', body: "Deux livraisons de 150 bâches arrivent à deux semaines d'écart, de deux fournisseurs, sans date de péremption. L'équipe veut mélanger les deux lots sur la même palette « pour gagner de la place »." },
      { title: 'Situation C', body: "Un carton de 20 poches de Ringer lactate arrive avec une péremption dans 5 mois alors que les règles de votre organisation exigent au moins 12 mois à l'arrivée." },
      { title: 'Situation D', body: "Douze cartons de CSB+ éventrés par la chute d'une palette restent depuis trois semaines « en attente de décision » dans la zone A, et sont comptés dans le stock disponible." },
    ],
    example: {
      title: 'Exemple de ligne attendue (situation déjà traitée dans le module)',
      lines: [
        "« 25/03 — Lot L2025-390 huile végétale fortifiée — périmé depuis le 20/03 — quarantaine puis radiation PV-RAD-2026-001, BS-0323, G de la ligne 12 passé de 30 à 80 — validé J.-M. Ilunga. »",
      ],
    },
    deliverable: "Une grille de 4 lignes (situation, logique, décision, document, saisie dans le template) et les 4 lignes correspondantes du journal d'entrepôt.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Fiche d'inventaire : le fichier est daté (AAAA-MM-JJ…_v01), les lignes d'exemple A5:G9 sont effacées, aucune formule des colonnes H, I, J n'est modifiée ni écrasée.",
      "Fiche d'inventaire : la colonne C contient exactement Médical, Alimentaire ou NFI (non périssable) ; la colonne E contient une vraie date pour tout article médical ou alimentaire, et reste vide uniquement pour un NFI.",
      "Fiche d'inventaire : F et G sont des cumuls prouvés par des bons, jamais le stock ; H égale le comptage physique, ou l'écart est ouvert dans un rapport (jamais « effacé » en modifiant G).",
      "Exercice 1 : le lot L2026-047 (42 jours restants à la distribution) affiche « Surveiller » et non « URGENT », et vous expliquez pourquoi il devait pourtant sortir en premier (FEFO), tandis que L2026-052 (environ 122 jours) affiche « OK ».",
      "Exercice 1 : H du lot L2026-047 affiche 160 après G = 320, et vous n'avez pas modifié G pour atteindre 135.",
      "Rapport : les six sections sont remplies, aucun texte d'aide ne subsiste, le cartouche de la section 6 est complété.",
      "Rapport : stock système 160, stock physique 135, écart −25 unités, écart −15,6 % (calculé sur le stock système), cohérents avec la fiche.",
      "Rapport : au moins deux causes crédibles du contexte, chacune avec un statut (vérifiée, écartée, non exclue) et une vérification prévue ; aucune accusation sans preuve.",
      "Rapport : la mesure préventive est un changement de procédure ou de disposition (qui, quoi, quand, vérification) ; « renforcer la vigilance » n'apparaît pas.",
      "Situations A à D : chaque réponse nomme la logique, le document et la saisie ; la situation D aboutit à une radiation formelle avec PV, pas à une attente.",
    ],
  },

  // ───────────── ERREURS FRÉQUENTES ─────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Mélanger FIFO et FEFO par habitude — sur du médical ou de l'alimentaire, FEFO n'est jamais une option, même quand elle contredit l'ordre d'arrivée. Parade : tri sur la colonne I, disposition physique et règle affichée (Procédure 3).",
      "Laisser un article périmé ou endommagé « en attente de décision » — il fausse tous vos chiffres de stock disponible. Parade : quarantaine le jour même, PV de radiation, G mis à jour (Procédure 3, étape 6).",
      "Négliger l'étiquetage des emplacements — un entrepôt illisible génère des erreurs de préparation même avec une fiche parfaite. Parade : étiquette standard avec référence, lot, péremption (Procédure 3, étape 4).",
      "Se contenter d'un inventaire annuel — un écart accumulé sur douze mois devient quasi inexplicable. Parade : inventaire complet de référence puis comptages tournants hebdomadaires (Procédure 7).",
      "Ajuster un écart dans le système sans le documenter — l'information qui permettrait de repérer un problème récurrent disparaît. Parade : rapport écrit, validation, ajustement avec référence (Procédure 8).",
      "Écrire une catégorie avec une faute d'orthographe dans la colonne C ou laisser E vide pour un périssable — le lot sort de la synthèse ou de la surveillance FEFO sans message d'erreur. Parade : copier-coller les libellés, contrôle TOTAL B8 = somme de H.",
      "Lire la synthèse comme un tonnage — elle additionne cartons, boîtes, sacs et bidons, et compte des lots, pas des unités. Parade : décider article par article, avec la couverture en semaines (Procédure 6).",
      "Signer une livraison sans l'avoir comptée, ou inscrire la réserve après la signature. Parade : compter devant le livreur, réserve écrite sur la lettre de voiture avant de signer (Procédure 4).",
      "Mettre à jour la fiche de stock en fin de journée, de mémoire, ou laisser la porte ouverte pendant les chargements. Parade : enregistrement au départ du colis, porte fermée, rapprochement du soir (Procédures 5 et 9).",
      "Écrire « vol » sans preuve, ou « renforcer la vigilance » comme mesure préventive. Parade : statut de chaque cause, enquête, mesure qui change une procédure ou une disposition (Procédure 8).",
    ],
  },

  // ───────────── RÉCAPITULATIF ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez audité un entrepôt repris en cours de fonctionnement avec une grille mesurée et photographiée, un plan de correction priorisé, une liste fermée et un registre d'accès.",
      "Vous avez compté le stock à l'aveugle, lot par lot, puis rempli fiche-inventaire-entrepot-fifo-fefo.xlsx colonne par colonne et lu ses alertes FEFO sans en forcer les chiffres.",
      "Vous avez trié l'entrepôt selon FEFO, isolé et radié un lot périmé avec procès-verbal, étiqueté les emplacements et affiché la règle de préparation.",
      "Vous avez lu la synthèse par catégorie avec ses limites, calculé la couverture de stock et envoyé un point de stock hebdomadaire daté.",
      "Vous avez réceptionné une livraison avec réserves, préparé et signé une sortie, et tenu fiches de stock et template à jour au moment du mouvement.",
      "Vous avez planifié un inventaire complet et des comptages tournants, compté deux fois à l'aveugle et tenu un tableau des écarts.",
      "Vous avez rédigé un rapport d'écart complet (quantités, pourcentage, causes, action corrective, mesure préventive, validation) cohérent avec la fiche d'inventaire.",
      "Vous avez installé les points de contrôle qui préviennent pertes, vols et dommages : séparation des tâches, clôture quotidienne, inspection hebdomadaire.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais citer les trois exigences de base d'un entrepôt humanitaire conforme : disposition, sécurité physique, contrôle d'accès.",
      "Je sais expliquer la différence entre FIFO et FEFO et dire, pour n'importe quel article, laquelle des deux logiques s'applique.",
      "Je sais ce que doit contenir une fiche de stock et à quel moment elle doit être mise à jour.",
      "Je comprends pourquoi un écart d'inventaire est un enjeu de redevabilité et pas seulement un détail comptable.",
      "J'ai mis à jour une fiche d'inventaire avec le template fourni et vérifié ses alertes FEFO automatiques.",
      "J'ai rédigé un rapport d'écart de stock complet et cohérent avec le template fourni.",
      "Je sais distinguer un inventaire physique complet d'un comptage tournant, et pourquoi les deux sont nécessaires.",
      "Je sais radier un article périmé ou endommagé avec un procès-verbal, sans le laisser dans le stock actif.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 05 — Chaîne du Froid & Produits Médicaux : vous passerez des produits médicaux stockés à température ambiante à ceux qui exigent le froid, avec les normes GDP et GSP, les équipements (réfrigérateurs, glacières, data loggers) et les procédures en cas de rupture de chaîne.",
  },
]
