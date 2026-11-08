// Module 01 — Introduction à la SCM Humanitaire — Standards et acteurs
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure de prise
// de poste est déroulée étape par étape (une étape par écran), appliquée à
// un cas fil rouge chiffré, puis résolue intégralement et transposée en
// exercice. Les diapositives trop chargées sont découpées automatiquement
// en « (suite) » par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'cover',
    title: 'Introduction à la SCM Humanitaire — Standards et acteurs',
    hook: "En 5 jours de prise de poste, vous allez produire ce que votre coordination attend d'un Supply Chain Manager opérationnel : le registre des flux de votre mission, la cartographie complète des acteurs (template Excel), le tableau des règles bailleur applicables, un plan d'action daté sur chaque blocage, une décision chiffrée « acheter local ou importer » et votre note de positionnement SCM signée. Chaque étape est déroulée ici, clic par clic, sur un cas réel de terrain.",
  },
  {
    type: 'objectives',
    items: [
      "Recenser en une journée les flux d'approvisionnement d'une mission à partir des factures, bons de commande et fiches de stock, en produisant un registre des flux qualifié (articles, origine, fréquence, valeur, pièces manquantes).",
      "Cartographier au moins 8 acteurs (ONG, agences onusiennes, gouvernement hôte, secteur privé) dans le template cartographie-supply-chain-acteurs.xlsx, avec un niveau d'influence justifié par une grille écrite et une synthèse par catégorie sans acteur non catégorisé.",
      "Extraire les exigences de conformité du bailleur principal et les croiser avec la politique d'achat interne, en produisant un tableau des seuils applicables (règle la plus stricte) et la liste du dossier d'achat type.",
      "Traduire Sphère, CALP et IASC en critères vérifiables, en produisant une fiche de contrôle par flux (spécification, modalité, clauses contractuelles).",
      "Croiser acteurs et flux pour repérer les points de fragilité, en produisant une matrice de fragilité et un plan d'action daté (action, responsable, échéance) pour chaque blocage.",
      "Arbitrer « achat local ou import » au regard du Nexus avec une matrice pondérée chiffrée, en produisant une note d'arbitrage défendable devant un bailleur.",
      "Vous positionner dans l'organigramme de décision achats et rédiger la note de positionnement SCM (template .docx), présentée à votre coordination au 5e jour.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une lecture : c'est la semaine de prise de poste d'un Supply Chain Manager, découpée en 8 procédures. À la fin, vous aurez en main sept livrables réutilisables tels quels sur votre propre mission.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé, qui mène une réponse médicale et nutritionnelle à Gogrial, dans l'État du Warrap (Soudan du Sud). C'est le cas de l'exercice noté du module, que vous verrez résolu de bout en bout.",
    ],
    bullets: [
      "L1 — Le registre des flux d'approvisionnement (Excel) : toutes les transactions des 3 derniers mois, regroupées en flux, avec les trous de traçabilité signalés.",
      "L2 — La cartographie des acteurs complétée dans cartographie-supply-chain-acteurs.xlsx, synthèse par catégorie incluse.",
      "L3 — Le tableau des seuils et règles applicables (bailleur × politique interne) et la liste du dossier d'achat type.",
      "L4 — La fiche de contrôle Sphère / CALP / IASC de chaque flux.",
      "L5 — La matrice de fragilité acteurs × flux et le plan d'action daté des blocages.",
      "L6 — La matrice d'arbitrage achat local vs import et la note d'arbitrage Nexus.",
      "L7 — La matrice de délégation achats et la note de positionnement SCM (note-positionnement-scm-standards-bailleurs.docx).",
    ],
    tip: "Ouvrez dès maintenant un dossier « Prise de poste SCM » avec un sous-dossier par livrable (L1 à L7). Vous y rangerez chaque fichier au fur et à mesure : le jour de la présentation, tout est prêt.",
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : Kerowa Santé à Gogrial (État du Warrap)',
    body: [
      "Kerowa Santé (ONG fictive) a ouvert le 1er décembre 2025 un projet médical et nutritionnel de 12 mois à Gogrial : un centre de stabilisation nutritionnelle, un service de pédiatrie et deux cliniques mobiles. Budget : 1 200 000 EUR, dont 85 % financés par ECHO et 15 % sur fonds privés. Rapport intermédiaire bailleur dû le 15 juin 2026.",
      "La mission a tourné 3 mois sans Supply Chain Manager : la chaîne a été montée dans l'urgence par l'équipe programme. Vous prenez le poste le lundi 2 mars 2026. Votre passation a duré une demi-journée, avec le coordinateur terrain qui part en congé le soir même. Premier point de coordination : vendredi 6 mars, 14 h.",
    ],
    table: {
      columns: ['Personne (fictive)', 'Fonction', 'Ce qu\'elle sait'],
      rows: [
        ['Grace M.', 'Coordinatrice pays (Juba)', 'Contrats bailleurs, relations ministères'],
        ['Daniel O.', 'Coordinateur terrain (en congé 3 semaines)', 'Historique des achats, « qui a validé quoi »'],
        ['Dr Rebecca N.', 'Responsable programme nutrition', 'Besoins en rations et produits nutritionnels'],
        ['Dr Samuel T.', 'Coordinateur médical', 'Médicaments, autorisation d\'importation'],
        ['Joseph K.', 'Responsable administration-finance', 'Factures, paiements, codes budgétaires'],
        ['Peter A.', 'Logisticien terrain (sous votre responsabilité)', 'Entrepôt, carburant, transporteurs'],
      ],
    },
    example: {
      title: 'Les 4 phrases de votre passation',
      lines: [
        "1. « On achète une partie des vivres non périssables chez un grossiste à Wau, le reste est importé depuis Juba, mais je ne sais plus qui a validé quoi. »",
        "2. « Le Ministère de la Santé de l'État nous a demandé une autorisation d'importation qu'on n'a toujours pas reçue depuis 6 semaines. »",
        "3. « ECHO veut une traçabilité stricte dès le premier rapport intermédiaire — je ne sais pas exactement ce que ça implique. »",
        "4. « Il y a un point focal Logistics Cluster à Juba mais personne ici ne l'a jamais contacté. »",
      ],
    },
    pitfall: "Les personnes, l'ONG et les montants sont fictifs et donnés à titre d'exemple ; ne réutilisez jamais ces chiffres tels quels sur votre mission.",
  },
  {
    type: 'concept',
    title: 'Votre semaine de prise de poste, procédure par procédure',
    body: "Chaque procédure du module correspond à un créneau de votre première semaine. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    table: {
      columns: ['Quand', 'Procédure', 'Livrable produit', 'Temps'],
      rows: [
        ['Lundi', 'P1 — Recenser les flux d\'approvisionnement', 'L1 Registre des flux', '1 jour'],
        ['Mardi', 'P2 — Cartographier les acteurs', 'L2 Cartographie .xlsx', '1 jour'],
        ['Mercredi matin', 'P3 — Identifier les règles du bailleur', 'L3 Tableau des seuils + dossier type', '½ jour'],
        ['Mercredi après-midi', 'P4 — Appliquer Sphère, CALP, IASC', 'L4 Fiche de contrôle par flux', '½ jour'],
        ['Jeudi matin', 'P5 — Croiser acteurs et flux', 'L5 Matrice de fragilité + plan d\'action', '½ jour'],
        ['Jeudi après-midi', 'P6 — Arbitrer local vs import', 'L6 Matrice + note d\'arbitrage', '½ jour'],
        ['Vendredi matin', 'P7 — Se positionner / P8 — Rédiger la note', 'L7 Matrice de délégation + note', '½ jour'],
        ['Vendredi 14 h', 'Présentation à la coordination', 'Note validée, actions lancées', '45 min'],
      ],
    },
    tip: "Bloquez ces créneaux dans votre agenda dès le lundi 8 h. Sans blocage explicite, l'opérationnel du jour (un camion, une facture urgente) dévorera votre semaine.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'SCM vs logistique : une confusion qui coûte cher',
    body: [
      "La logistique est l'exécution : faire rouler un camion, tenir un entrepôt, gérer un parc de véhicules, dédouaner une cargaison. C'est un métier d'action, mesuré au quotidien.",
      "La Supply Chain Management (SCM) inclut cette exécution et y ajoute trois couches : les achats (sourcing, mise en concurrence, gestion fournisseurs, conformité des procédures), la conformité bailleur (traçabilité documentaire, seuils d'autorisation, éligibilité des dépenses, justification de chaque mouvement en audit) et la planification amont (anticiper les besoins avec les programmes, dimensionner les stocks, arbitrer entre achat local, import régional et import international).",
    ],
    highlight: "Un Log Manager répond à « comment on livre ? ». Un Supply Chain Manager répond à « d'où vient ce qu'on livre, à quel coût, sous quelles conditions de conformité, et est-ce la meilleure option disponible ? »",
    example: {
      title: 'Appliqué à Kerowa Santé',
      lines: [
        "Peter A. (logisticien) : organise le camion Wau → Gogrial de jeudi, réceptionne et range 60 sacs de farine.",
        "Vous (SCM) : décidez si ces 60 sacs doivent venir de Wau ou de Juba, vérifiez que l'achat a eu ses 3 devis, et que le dossier tiendra en audit ECHO.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Qui décide ? Log Manager ou Supply Chain Manager',
    columns: ['Situation terrain', 'Qui décide ?', 'Pourquoi'],
    rows: [
      ['Un camion tombe en panne sur la route du dernier kilomètre', 'Le Log Manager', 'Exécution pure.'],
      ['Le fournisseur habituel de vivres augmente ses prix de 30 %', 'Le SCM', 'Décision d\'achat et de sourcing.'],
      ['Un bailleur (ECHO, USAID/BHA) exige une preuve de mise en concurrence au-delà d\'un seuil', 'Le SCM', 'Conformité bailleur.'],
      ['Il faut réorganiser l\'entrepôt pour gagner de la place', 'Le Log Manager', 'Exécution opérationnelle.'],
      ['Faut-il acheter localement ou importer ce trimestre ?', 'Le SCM, avec les programmes', 'Décision stratégique encadrée par le Nexus.'],
      ['Kerowa : le grossiste de Wau livre 2 sacs déchirés sur 60', 'Le logisticien (réception, réserve sur le bon de livraison)', 'Exécution — mais le SCM est informé pour l\'évaluation fournisseur.'],
      ['Kerowa : l\'autorisation d\'importation du Ministère bloque les médicaments', 'Le SCM, avec le coordinateur médical', 'Blocage d\'approvisionnement à piloter, pas à subir.'],
    ],
  },
  {
    type: 'concept',
    title: 'Porter les deux casquettes sans perdre la fonction SCM',
    body: "Sur une petite mission, une seule personne porte souvent les deux rôles. C'est possible, à condition de savoir à chaque instant laquelle des deux casquettes vous portez, parce que les décisions qui en découlent ne sont pas les mêmes. Le piège classique : le SCM absorbé par l'opérationnel (« il n'y a personne d'autre pour le faire ») ne fait plus jamais l'anticipation, la conformité et les arbitrages qui justifient son poste.",
    example: {
      title: 'Agenda type d\'un SCM qui porte aussi la logistique',
      lines: [
        "Lundi 8 h–10 h : planification des besoins avec les programmes (SCM).",
        "Mercredi 14 h–16 h : contrôle des dossiers d'achat de la semaine (SCM).",
        "Vendredi 8 h–9 h 30 : mise à jour de la cartographie et du plan d'action (SCM).",
        "Le reste du temps : exécution logistique, avec délégation maximale au logisticien.",
      ],
    },
    tip: "Rendez ces créneaux visibles dans l'agenda partagé de la mission : un créneau visible est respecté, un créneau dans votre tête est sacrifié au premier imprévu.",
  },
  {
    type: 'concept',
    title: 'L\'architecture d\'une supply chain humanitaire : trois flux, neuf maillons',
    body: [
      "Toute chaîne d'approvisionnement fait circuler trois flux en parallèle : le flux physique (les marchandises), le flux d'information (demandes, commandes, bons de livraison, rapports) et le flux financier (engagements, paiements, justification au bailleur). Un SCM pilote les trois ; un logisticien pilote surtout le premier.",
      "La chaîne se lit de l'amont vers l'aval. Pour chaque maillon, il existe un document qui prouve qu'il a eu lieu : c'est ce document que l'auditeur demandera.",
    ],
    table: {
      columns: ['Maillon', 'Qui agit (exemple Kerowa)', 'Document de preuve'],
      rows: [
        ['1. Évaluation et planification des besoins', 'Programmes + SCM', 'Plan d\'approvisionnement, demande d\'achat'],
        ['2. Sourcing et mise en concurrence', 'SCM, assistant achats', 'Demandes de devis, offres, PV d\'évaluation'],
        ['3. Commande', 'SCM, budget holder', 'Bon de commande (PO) signé, contrat'],
        ['4. Transport international / régional', 'Transporteur, transitaire', 'Lettre de transport, waybill'],
        ['5. Dédouanement et autorisations', 'Agent en douane, ministère', 'Déclaration, autorisation, exonération'],
        ['6. Réception et stockage', 'Logisticien', 'Bon de réception (GRN), fiche de stock'],
        ['7. Transport du dernier kilomètre', 'Logisticien, transporteur', 'Waybill signé à l\'arrivée'],
        ['8. Distribution / utilisation', 'Programmes, partenaire', 'Liste de distribution, registre de consommation'],
        ['9. Suivi et redevabilité', 'Programmes + SCM', 'Rapports, retours bénéficiaires, rapport bailleur'],
      ],
    },
    tip: "Si un maillon n'a pas de document de preuve, il n'existe pas pour un auditeur. Vous utiliserez cette table au Jour 1 pour repérer les trous de traçabilité.",
  },
  {
    type: 'concept',
    title: 'Chaîne de valeur : où se situe votre mission, et quelles marges de manœuvre en découlent',
    body: [
      "La chaîne de valeur (value chain) est l'ensemble des étapes qui ajoutent de la valeur entre le fournisseur d'origine et le bénéficiaire final. Votre position dans cette chaîne détermine ce que vous pouvez réellement décider.",
      "Plus vous êtes en aval (vous recevez des produits déjà achetés par d'autres), moins vous avez la main sur le prix, la qualité et le délai — mais plus votre travail de planification et de rapportage conditionne la continuité de la livraison.",
    ],
    table: {
      columns: ['Flux Kerowa', 'Position de Kerowa', 'Marge de manœuvre réelle'],
      rows: [
        ['Vivres non périssables', 'Acheteur direct (Wau, Juba)', 'Forte : choix fournisseur, prix, spécifications, calendrier'],
        ['Médicaments', 'Acheteur via une centrale d\'achat internationale', 'Moyenne : prix fixés, mais calendrier et dédouanement à piloter'],
        ['Produits nutritionnels (RUTF)', 'Bénéficiaire d\'une dotation en nature d\'une agence onusienne', 'Faible sur le produit ; forte sur la qualité et la ponctualité des rapports de consommation qui déclenchent la dotation suivante'],
        ['Transport Juba → Gogrial', 'Client d\'un transporteur privé', 'Moyenne : mise en concurrence possible, service commun du Logistics Cluster à explorer'],
      ],
    },
    result: "Pour chaque flux, vous savez dire si vous décidez, si vous négociez ou si vous dépendez — et donc où concentrer votre énergie.",
  },
  {
    type: 'comparison-table',
    title: 'Quatre familles d\'acteurs, quatre logiques différentes',
    columns: ['Famille', 'Intérêt principal', 'Ce qu\'elle contrôle', 'Friction typique'],
    rows: [
      ['ONG nationales et internationales', 'Livrer vite, bien et de façon traçable, sous pression de justification bailleur', 'Leurs programmes, leurs partenaires de distribution', 'Doublons de distribution, concurrence sur les mêmes fournisseurs'],
      ['Agences de l\'ONU (PAM, UNHCR, UNICEF…)', 'Couvrir tout un secteur, pas seulement leurs bénéficiaires ; coordination de filière (ex. Logistics Cluster piloté par le PAM)', 'Pipelines en nature, services communs, information', 'Priorités de couverture différentes des vôtres, exigences de rapportage'],
      ['Gouvernements hôtes', 'Souveraineté sur ce qui entre et circule', 'Autorisations d\'importation, exonérations, frontières, accès', 'Délais administratifs sans lien avec votre urgence'],
      ['Secteur privé et fournisseurs', 'Commercial : marge, volume, fidélisation', 'Prix, stock disponible, délais', 'Hausse de prix, dépendance à un fournisseur unique'],
    ],
  },
  {
    type: 'concept',
    title: 'Ne présumez jamais un intérêt aligné avec le vôtre',
    body: "Un acteur n'a pas les mêmes intérêts que vous simplement parce qu'il est « humanitaire ». Un gouvernement hôte peut retarder une exonération douanière pour des raisons politiques sans lien avec votre urgence. Une agence coordinatrice peut avoir des priorités de couverture différentes. Cartographier ces acteurs n'est pas un exercice administratif : c'est ce qui vous permet d'anticiper les points de friction avant qu'ils ne bloquent un convoi.",
    example: {
      title: 'Kerowa : lire l\'intérêt derrière le blocage',
      lines: [
        "Fait : autorisation d'importation du Ministère de la Santé de l'État en attente depuis 6 semaines.",
        "Lecture naïve : « ils sont lents, on attend ».",
        "Lecture SCM : le Ministère veut contrôler les médicaments qui entrent (qualité, enregistrement). Notre dossier est-il complet ? A-t-on la liste exacte des produits et leur enregistrement ? Qui, chez nous, a la relation avec le Ministère ?",
        "Action qui en découle : on vérifie la complétude du dossier avant de relancer, et on relance par la bonne personne (coordinateur médical).",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Sphère, CALP, IASC : ce qu\'ils imposent à votre chaîne d\'approvisionnement',
    columns: ['Standard', 'Ce que cela impose concrètement', 'Où cela se voit dans vos documents'],
    rows: [
      ['Sphère (Sphere Handbook)', 'Standards minimaux de qualité et de dignité (eau, assainissement, abris, sécurité alimentaire et nutrition, santé). Vos spécifications d\'achat doivent les intégrer dès le cahier des charges, pas les découvrir après livraison.', 'Cahier des charges, demande de devis, contrôle à réception'],
      ['CALP (Cash and Voucher Assistance)', 'Réseau de référence sur les transferts monétaires et coupons. Quand un programme passe au cash, le SCM qualifie des commerçants locaux, contrôle la disponibilité et les prix du marché, surveille l\'inflation induite par l\'aide.', 'Fiche de qualification commerçant, suivi des prix, contrat commerçant'],
      ['IASC (Inter-Agency Standing Committee)', 'Cadres de coordination inter-agences, notamment redevabilité envers les populations affectées (AAP) et protection contre l\'exploitation et les abus sexuels (PSEA). Vigilance directe sur vos transporteurs et partenaires de distribution.', 'Clauses contractuelles, code de conduite signé, mécanisme de plainte'],
    ],
  },
  {
    type: 'concept',
    title: 'Sphère dans un cahier des charges : un exemple chiffré',
    body: "Le Sphere Handbook se consulte gratuitement en ligne (spherestandards.org), par secteur. Réflexe à prendre : avant toute spécification d'achat, ouvrez le chapitre Sphère du secteur et vérifiez que votre spécification minimale s'y conforme. Pour la sécurité alimentaire, le chiffre de planification Sphère est de 2 100 kcal par personne et par jour.",
    example: {
      title: 'Kerowa — ration journalière d\'un accompagnant hospitalisé',
      lines: [
        "Farine de maïs 450 g × 3,5 kcal/g = 1 575 kcal",
        "Haricots secs 60 g × 3,35 kcal/g = 201 kcal",
        "Huile enrichie en vitamine A 30 g × 8,84 kcal/g = 265 kcal",
        "Sucre 15 g × 4 kcal/g = 60 kcal ; sel iodé 5 g",
        "Total ≈ 2 101 kcal → conforme au chiffre de planification Sphère de 2 100 kcal",
        "Besoin mensuel : 180 accompagnants × 30 jours × 565 g ≈ 3,05 t",
      ],
    },
    pitfall: "Acheter la denrée la moins chère sans vérifier la spécification (huile non enrichie, sel non iodé) vous expose à un rejet de livraison en pleine urgence, ou pire, à une distribution de produits inadaptés.",
  },
  {
    type: 'concept',
    title: 'CALP : quand un programme passe du « en nature » au cash ou au coupon',
    body: "Le jour où un programme bascule vers du cash ou des coupons, la chaîne d'approvisionnement change de nature : vous n'achetez plus la marchandise, vous vous assurez que le marché peut la fournir. Votre rôle se déplace vers trois tâches concrètes.",
    bullets: [
      "Qualifier les commerçants : stock disponible, capacité de réapprovisionnement, prix affichés, acceptation des coupons, accessibilité pour les bénéficiaires.",
      "Contrôler la disponibilité et les prix : relevé hebdomadaire d'un panier de référence sur 3 à 5 points de vente.",
      "Surveiller l'inflation induite par l'aide : comparer les prix avant et après le début des transferts.",
    ],
    example: {
      title: 'Exemple de relevé de prix (fictif)',
      lines: [
        "Panier de référence : 25 kg farine de maïs + 5 kg haricots + 2 L huile",
        "Semaine 0 (avant transferts) : 21,40 EUR — Semaine 3 : 23,10 EUR",
        "Variation = (23,10 − 21,40) / 21,40 = + 7,9 %",
        "Décision : sous le seuil d'alerte fixé avec le programme (par exemple + 10 %) → suivi maintenu, pas d'ajustement",
      ],
    },
    tip: "Pour l'analyse de marché, appuyez-vous sur le MISMA (standard minimal d'analyse de marché, standard associé à Sphère et porté par le réseau CALP).",
  },
  {
    type: 'concept',
    title: 'IASC : AAP et PSEA dans vos contrats de transport et de distribution',
    body: "Un transporteur ou un point de distribution mal contrôlé peut devenir un vecteur d'abus. Les engagements IASC sur la redevabilité (AAP) et la protection contre l'exploitation et les abus sexuels (PSEA) se traduisent donc en clauses vérifiables dans vos contrats et en contrôles à la réception et à la distribution.",
    example: {
      title: 'Clauses types à insérer dans un contrat de transport (exemple de rédaction)',
      lines: [
        "Art. 9 — Le prestataire s'engage à ce que tout son personnel affecté au contrat ait pris connaissance et signé le code de conduite de Kerowa Santé relatif à la PSEA, annexé au présent contrat.",
        "Art. 10 — Tout fait d'exploitation ou d'abus porté à la connaissance du prestataire est signalé sans délai au point focal PSEA de Kerowa Santé. Le manquement à cette obligation entraîne la résiliation immédiate du contrat.",
        "Art. 11 — Le prestataire ne sollicite ni n'accepte aucune contrepartie des bénéficiaires ou des communautés.",
      ],
    },
    pitfall: "Faire signer le code de conduite au seul gérant du transporteur : ce sont les chauffeurs et les manutentionnaires qui sont au contact des communautés. Exigez la liste nominative signée.",
  },
  {
    type: 'concept',
    title: 'Le Nexus humanitaire-développement : un critère d\'arbitrage d\'achat',
    body: [
      "Le Nexus est l'articulation entre réponse humanitaire d'urgence, aide au développement et, dans certains contextes, consolidation de la paix. Une réponse qui importe tout par défaut peut affaiblir l'économie locale qu'elle est censée aider à stabiliser — et coûte souvent plus cher.",
      "La question à vous poser avant tout import : le marché local ou régional peut-il fournir ce dont j'ai besoin, à la qualité requise (Sphère), dans les délais requis, sans distordre dangereusement les prix locaux ?",
    ],
    table: {
      columns: ['Option', 'Avantages', 'Limites'],
      rows: [
        ['Acheter local', 'Renforce l\'économie locale, réduit délais et coûts de transport international', 'Capacité de production limitée, risque de rupture du marché, contrôle qualité plus difficile'],
        ['Importer', 'Contrôle qualité et disponibilité en volume', 'Délais et coûts logistiques et douaniers plus élevés ; peut être perçu comme un désintérêt pour l\'économie locale'],
      ],
    },
    highlight: "Cet arbitrage se documente à chaque décision d'achat significative — jamais « on a toujours importé ». Un bailleur attentif au Nexus, comme ECHO, peut vous demander de le justifier dans vos rapports.",
  },
  {
    type: 'concept',
    title: 'Le bailleur principal fixe les règles : appliquez toujours la plus stricte',
    body: [
      "Les procédures de conformité de votre supply chain dépendent du bailleur principal, et elles diffèrent significativement d'un bailleur à l'autre : seuils de mise en concurrence, pièces exigées, règles d'éligibilité géographique des fournisseurs, délais de rapportage, durée de conservation des documents.",
      "Votre organisation a aussi sa propre politique d'achat. Quand les deux coexistent, la pratique professionnelle est d'appliquer, règle par règle, la plus exigeante des deux.",
    ],
    example: {
      title: 'Exemple de raisonnement (valeurs fictives)',
      lines: [
        "Politique interne : 3 devis écrits dès 1 000 EUR. Convention bailleur : 3 offres dès 5 000 EUR. → On applique 1 000 EUR (interne plus strict).",
        "Politique interne : conservation des pièces 3 ans. Convention bailleur : 5 ans après le rapport final. → On applique 5 ans (bailleur plus strict).",
      ],
    },
    pitfall: "Un achat parfaitement justifiable en interne peut être rejeté en audit bailleur, parfois plusieurs mois après, quand il est trop tard pour corriger. Ce n'est jamais un détail administratif.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'SCM vs logistique', definition: "La logistique exécute (transport, stockage, distribution) ; la SCM pilote (achats, conformité bailleur, planification amont) en incluant l'exécution logistique." },
      { term: 'Flux d\'approvisionnement', definition: "Ensemble récurrent de transactions portant sur une même famille d'articles, de la même origine, pour le même usage (ex. vivres non périssables achetés à Wau pour les rations)." },
      { term: 'Niveau d\'influence', definition: "Capacité réelle d'un acteur à bloquer, retarder ou renchérir un flux. Un petit commerçant unique sur un marché isolé peut avoir une influence élevée." },
      { term: 'Point de fragilité', definition: "Maillon d'un flux tenu par un acteur à influence élevée sans alternative identifiée. À signaler immédiatement à la coordination." },
      { term: 'Dossier d\'achat', definition: "Ensemble des pièces qui prouvent qu'un achat a respecté la procédure : demande, devis ou offres, évaluation, bon de commande, réception, facture, paiement." },
      { term: 'Règle la plus stricte', definition: "Principe qui consiste à appliquer, règle par règle, l'exigence la plus forte entre la politique interne et la convention bailleur." },
      { term: 'Nexus', definition: "Articulation entre réponse humanitaire, développement et consolidation de la paix — appliquée en SCM à l'arbitrage achat local vs import." },
      { term: 'CALP', definition: "Réseau de référence sur les transferts monétaires et coupons (Cash and Voucher Assistance), qui déplace le rôle du SCM vers la qualification de commerçants locaux." },
      { term: 'AAP / PSEA', definition: "Redevabilité envers les populations affectées / protection contre l'exploitation et les abus sexuels — cadres IASC traduits en clauses contractuelles." },
      { term: 'Logistics Cluster', definition: "Mécanisme de coordination logistique inter-agences piloté par le PAM : information sur les accès, services communs de transport et de stockage." },
      { term: 'Chaîne de valeur', definition: "Étapes qui ajoutent de la valeur entre le fournisseur d'origine et le bénéficiaire final ; votre position y détermine vos marges de manœuvre." },
      { term: 'Note au dossier', definition: "Document daté et signé qui explique une dérogation ou une anomalie dans un dossier d'achat (ex. un seul devis en urgence) et qui la fait valider." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — RECENSER LES FLUX (JOUR 1)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 6',
    title: 'Rassembler les sources documentaires des 3 derniers mois',
    intro: "Avant de rencontrer qui que ce soit, vous partez des documents : ils ne se contredisent pas d'une personne à l'autre. Entrées nécessaires : accès au serveur partagé, au classeur des factures de la finance, aux fiches de stock de l'entrepôt.",
    steps: [
      {
        title: 'Demandez les documents par écrit dès 8 h',
        actions: [
          "Envoyez un court message au responsable finance : export Excel des paiements fournisseurs depuis l'ouverture du projet, avec codes budgétaires.",
          "Demandez au logisticien les fiches de stock, bons de réception (GRN) et waybills de la période.",
          "Demandez à la coordination la convention bailleur, le budget et le dernier plan d'achat s'il existe.",
        ],
      },
      {
        title: 'Créez votre dossier de travail',
        actions: [
          "Créez le dossier « L1_Registre_flux » dans « Prise de poste SCM ».",
          "Copiez-y les fichiers reçus sans les modifier (préfixe « SOURCE_ »).",
          "Notez dans un fichier « Journal_JOUR1.txt » ce que vous avez demandé, à qui, à quelle heure, et ce qui manque.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — inventaire des sources à 11 h',
      lines: [
        "Reçu : export paiements finance (déc. 2025 – févr. 2026), 23 lignes.",
        "Reçu : 4 fiches de stock (farine, haricots, huile, RUTF), 9 waybills.",
        "Reçu : convention ECHO (PDF) et budget détaillé.",
        "Manquant : plan d'achat (n'existe pas), bons de commande antérieurs à janvier.",
      ],
    },
    result: "Toutes les sources disponibles sont dans un seul dossier, et la liste de ce qui manque est écrite.",
    tip: "Ne cherchez pas l'exhaustivité le premier jour : vous cherchez la structure générale — combien de flux distincts, quels volumes approximatifs, quelles urgences déclarées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 6',
    title: 'Créer le registre des flux dans Excel',
    intro: "Le registre est un tableau transactionnel : une ligne par achat ou par réception. C'est lui qui vous permettra ensuite de regrouper en flux et de repérer les trous de traçabilité.",
    steps: [
      {
        title: 'Créez la structure du tableau',
        actions: [
          "Ouvrez un nouveau classeur, renommez la feuille « Transactions ».",
          "Saisissez en ligne 1 les 13 en-têtes : N° | Date | Fournisseur / source | Articles | Quantité | Montant EUR | Origine | Flux | Programme / ligne budgétaire | PO ? | Nb devis | BL / GRN ? | Validé par.",
          "Sélectionnez A1:M1, puis Insertion > Tableau > « Mon tableau comporte des en-têtes » > OK. Nommez-le « tblTransactions » (Création de tableau > Nom du tableau).",
        ],
      },
      {
        title: 'Verrouillez les saisies répétitives',
        actions: [
          "Sélectionnez la colonne Origine, Données > Validation des données > Liste : Local Wau;Import Juba;Import international;Dotation en nature.",
          "Faites de même pour PO ? et BL / GRN ? avec la liste Oui;Non;Partiel.",
          "Enregistrez sous « L1_Registre_flux_Kerowa.xlsx ».",
        ],
      },
    ],
    result: "Un tableau Excel nommé, avec listes déroulantes, prêt à recevoir les transactions.",
    pitfall: "Saisir « Wau », « wau » et « Grossiste Wau » pour la même origine : le regroupement par flux devient faux. Les listes déroulantes évitent ce piège.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 6',
    title: 'Saisir chaque transaction des 3 derniers mois',
    intro: "Partez de l'export finance (ce qui a été payé), puis complétez avec les fiches de stock et waybills (ce qui est entré sans facture, comme les dotations en nature).",
    steps: [
      {
        title: 'Saisissez les achats payés',
        actions: [
          "Pour chaque ligne de l'export finance, créez une ligne : date de facture, fournisseur, articles, montant.",
          "Ouvrez la pièce justificative correspondante et cochez ce que vous trouvez réellement : PO, nombre de devis, bon de livraison.",
          "Dans « Validé par », recopiez la signature présente sur le PO ; s'il n'y a rien, écrivez « ? ».",
        ],
      },
      {
        title: 'Ajoutez les entrées sans facture',
        actions: [
          "Parcourez les fiches de stock : toute entrée sans facture correspondante devient une ligne avec Montant = 0 et Origine = Dotation en nature.",
          "Notez le numéro de waybill dans la colonne Articles.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — extrait du registre (montants fictifs)',
      lines: [
        "T01 | 08/12/2025 | Grossiste Wau | Farine maïs, haricots | 1,8 t | 950 | Local Wau | PO Non | 1 devis | BL Oui | ?",
        "T02 | 19/12/2025 | Fournisseur Juba | Riz, huile enrichie, sel iodé | 3,2 t | 5 400 | Import Juba | PO Oui | 1 devis | BL Oui | Coord. programme",
        "T03 | 10/01/2026 | Grossiste Wau | Farine maïs, haricots | 2,1 t | 1 340 | Local Wau | PO Oui | 3 devis | BL Oui | Coord. terrain",
        "T04 | 15/01/2026 | Agence onusienne | RUTF 420 cartons | — | 0 | Dotation en nature | waybill W-0112 | GRN Oui",
        "T05 | 22/01/2026 | Centrale d'achat internationale | Médicaments essentiels, 38 colis | 18 600 | Import international | PO Oui | PV absent | GRN Oui | Coord. pays",
        "T06 | 12/02/2026 | Transporteur Juba | 2 camions 10 t Juba → Gogrial | 4 200 | Service | PO Oui | 2 devis | waybills Oui | Coord. terrain",
        "T07 | 18/02/2026 | Grossiste Wau | Farine maïs, haricots | 1,9 t | 1 600 | Local Wau | PO Non | 1 devis | BL Oui | ?",
        "T08 à T23 : carburant hebdomadaire, station de Kuajok, 8 100 EUR au total.",
      ],
    },
    result: "Chaque paiement et chaque entrée en stock de la période figure sur une ligne, avec ce qui a été réellement trouvé (et non ce qui « devrait » exister).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 6',
    title: 'Regrouper les transactions en flux avec un tableau croisé dynamique',
    intro: "Un flux = une famille d'articles + une origine + un usage. Le regroupement fait apparaître la structure de la chaîne : combien de flux, quel poids financier, quelle fréquence.",
    steps: [
      {
        title: 'Codez chaque transaction',
        actions: [
          "Dans la colonne Flux, attribuez un code : F1 Vivres non périssables, F2 Médicaments, F3 Produits nutritionnels, F4 Carburant, F5 Transport.",
          "Vérifiez avec un filtre qu'aucune ligne n'a la colonne Flux vide.",
        ],
      },
      {
        title: 'Construisez le tableau croisé',
        actions: [
          "Cliquez dans le tableau, Insertion > Tableau croisé dynamique > Nouvelle feuille, renommez-la « Flux ».",
          "Placez Flux et Origine en Lignes, Montant EUR en Valeurs (Somme), N° en Valeurs (Nombre).",
          "Ajoutez à côté, à la main, trois colonnes : Fréquence, Volume 3 mois, Urgence déclarée.",
        ],
      },
    ],
    table: {
      columns: ['Flux', 'Origine', 'Nb', 'Montant EUR', 'Fréquence', 'Volume 3 mois'],
      rows: [
        ['F1 Vivres non périssables', 'Local Wau', '3', '3 890', 'Mensuelle', '5,8 t'],
        ['F1 Vivres non périssables', 'Import Juba', '1', '5 400', 'Ponctuelle', '3,2 t'],
        ['F2 Médicaments', 'Import international', '1', '18 600', 'Trimestrielle', '38 colis'],
        ['F3 Produits nutritionnels', 'Dotation en nature', '1', '0', 'Mensuelle', '420 cartons'],
        ['F4 Carburant', 'Local Kuajok', '16', '8 100', 'Hebdomadaire', '6 750 L'],
        ['F5 Transport', 'Service Juba', '1', '4 200', 'À la demande', '2 rotations'],
      ],
    },
    result: "Cinq flux identifiés, total décaissé 40 190 EUR, avec leur fréquence et leur volume.",
    tip: "Triez les flux par montant décroissant : votre attention ira d'abord là où se concentre le risque d'audit (ici F2, puis F4 et F1).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 6',
    title: 'Repérer les trous de traçabilité',
    intro: "Vous comparez ce que vous avez trouvé à ce qu'exige la politique d'achat interne. Chaque écart est un risque d'audit à régulariser maintenant, pas en juin.",
    steps: [
      {
        title: 'Ajoutez une colonne « Écart »',
        actions: [
          "Insérez une colonne « Nb devis requis » et calculez-la selon la politique interne (exemple Kerowa) : =SI([@[Montant EUR]]<1000;1;SI([@[Montant EUR]]<10000;3;\"AO\")).",
          "Insérez une colonne « Écart » : =SI(OU([@[PO ?]]=\"Non\";[@[Validé par]]=\"?\";ET(ESTNUM([@[Nb devis requis]]);[@[Nb devis]]<[@[Nb devis requis]]));\"À régulariser\";\"OK\").",
          "Appliquez une mise en forme conditionnelle rouge sur « À régulariser ».",
        ],
      },
      {
        title: 'Contrôlez à la main les achats au-dessus de 10 000 EUR',
        actions: [
          "Pour chaque achat soumis à appel d'offres, vérifiez la présence du PV d'évaluation ou d'une justification de procédure (ex. achat auprès d'une centrale d'achat humanitaire).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — trous de traçabilité trouvés',
      lines: [
        "T02 (5 400 EUR) : 1 devis au lieu de 3 → à régulariser par note au dossier signée.",
        "T07 (1 600 EUR) : pas de PO, 1 devis, validateur inconnu → à régulariser.",
        "T01 (950 EUR) : sous le seuil de 1 000 EUR, 1 devis suffit, mais PO absent → à régulariser.",
        "T05 (18 600 EUR) : PV d'évaluation absent → vérifier si la convention dispense de mise en concurrence les achats auprès d'une centrale pré-qualifiée.",
      ],
    },
    result: "La liste des dossiers incomplets est établie : c'est la traduction concrète de « je ne sais plus qui a validé quoi ».",
    pitfall: "Corriger les pièces après coup (antidater un PO, fabriquer un devis) : c'est une falsification. On régularise par une note au dossier qui explique l'écart et qui est validée par le niveau hiérarchique compétent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 6',
    title: 'Valider le registre avec les détenteurs de l\'information',
    intro: "En fin de journée, 3 entretiens de 15 minutes suffisent pour confirmer la structure et combler les trous. Vous venez avec des questions précises, pas avec « racontez-moi la supply chain ».",
    steps: [
      {
        title: 'Préparez une question par écart',
        actions: [
          "Listez pour chaque écart la personne qui peut répondre (finance, programme, logisticien).",
          "Rédigez des questions fermées : « T07 du 18 février : qui a validé l'achat chez le grossiste ? Existe-t-il d'autres devis ? »",
        ],
      },
      {
        title: 'Menez les entretiens et mettez à jour',
        actions: [
          "Notez les réponses directement dans le registre (colonne « Validé par », commentaires de cellule).",
          "Ajoutez une colonne « Source de l'info » (document / entretien + nom + date).",
          "Enregistrez une version datée : L1_Registre_flux_Kerowa_2026-03-02.xlsx.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — réponses obtenues à 17 h',
      lines: [
        "Joseph K. (finance) : T07 a été payé sur instruction orale du coordinateur terrain → validateur = Daniel O., à confirmer par écrit à son retour.",
        "Dr Rebecca N. : besoin réel en vivres = rations de 180 accompagnants par jour en moyenne.",
        "Peter A. : le grossiste de Wau est le seul à livrer à Gogrial ; 2 autres grossistes existent à Wau mais n'ont jamais été consultés.",
      ],
    },
    result: "Livrable L1 terminé : registre daté, 5 flux qualifiés, écarts listés avec la source de chaque information.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — CARTOGRAPHIER LES ACTEURS (JOUR 2)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Ouvrir et préparer le template de cartographie',
    intro: "Le template cartographie-supply-chain-acteurs.xlsx contient une feuille « Cartographie » avec 7 colonnes (A à G), 15 lignes de saisie (lignes 5 à 19) et une synthèse par catégorie calculée automatiquement (lignes 24 à 30).",
    steps: [
      {
        title: 'Découvrez la structure avant de saisir',
        actions: [
          "Ouvrez le fichier et enregistrez-le immédiatement sous « L2_Cartographie_acteurs_Kerowa.xlsx ».",
          "Lisez les en-têtes de la ligne 4 : Organisation | Catégorie d'acteur | Rôle dans la chaîne SCM | Flux concerné | Niveau d'influence | Contact | Statut info / MAJ.",
          "Cliquez sur B25 : la formule =COUNTIFS($B$5:$B$19;A25) compte les acteurs par catégorie ; B29 compte le total ; B30 calcule les acteurs non catégorisés.",
        ],
      },
      {
        title: 'Traitez les 4 lignes d\'exemple (lignes 5 à 8)',
        actions: [
          "Lisez-les : agence onusienne, Ministère de la Santé, grossiste de Wau, ONG partenaire de distribution.",
          "Si une ligne correspond à votre réalité, gardez-la et adaptez-la ; sinon, effacez son contenu (touche Suppr), sans supprimer la ligne.",
        ],
      },
      {
        title: 'Ajoutez deux colonnes d\'analyse',
        actions: [
          "En H4, saisissez « Alternative identifiée ? (Oui/Non) » ; en I4, « Intérêt principal / point de friction ».",
        ],
      },
    ],
    result: "Le template est renommé, les lignes d'exemple sont traitées et deux colonnes d'analyse sont prêtes pour le Jour 4.",
    pitfall: "Garder les lignes d'exemple sans les vérifier : elles sont comptées dans la synthèse et faussent votre cartographie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Dérouler chaque flux de l\'amont vers l\'aval pour lister les acteurs',
    intro: "On n'invente pas une liste d'acteurs « de mémoire » : on la déduit des flux du registre L1. Pour chaque flux, suivez la marchandise maillon par maillon et notez qui intervient.",
    steps: [
      {
        title: 'Faites une ligne par flux sur une feuille de brouillon',
        actions: [
          "Écrivez le flux, puis enchaînez : fournisseur → transport → autorité / douane → stockage → distribution → coordination / bailleur.",
          "Sous chaque maillon, écrivez l'acteur qui le tient. Si vous ne savez pas, écrivez « ? » : c'est une information à obtenir.",
        ],
      },
      {
        title: 'Ajoutez les acteurs transversaux',
        actions: [
          "Bailleur(s), mécanisme de coordination (Logistics Cluster, clusters sectoriels), autorités locales d'accès, autres ONG présentes sur les mêmes fournisseurs.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — déroulé des flux',
      lines: [
        "F1 Vivres : Grossiste Wau / Fournisseur Juba → camions Kerowa / Transporteur Juba → postes de contrôle routiers → entrepôt Gogrial → service de pédiatrie et centre de stabilisation.",
        "F2 Médicaments : Centrale d'achat internationale → fret aérien → agent en douane Juba → Ministère de la Santé de l'État (autorisation) → Transporteur Juba → pharmacie Gogrial.",
        "F3 RUTF : Agence onusienne (pipeline nutrition) → entrepôt de l'agence à Wau → camions Kerowa → centre de stabilisation.",
        "Transversaux : ECHO (bailleur), point focal Logistics Cluster Juba, ONG partenaire de distribution pour les cliniques mobiles.",
      ],
    },
    result: "Une liste brute de 10 à 15 acteurs, chacun rattaché à au moins un flux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Renseigner les colonnes Organisation et Catégorie d\'acteur',
    intro: "La catégorie conditionne la synthèse automatique. Le template n'accepte que quatre libellés exacts : ONG, Agence onusienne, Gouvernement hôte, Secteur privé / Fournisseur.",
    steps: [
      {
        title: 'Imposez les libellés exacts',
        actions: [
          "Sélectionnez B5:B19, Données > Validation des données > Autoriser : Liste.",
          "Source : saisissez ONG;Agence onusienne;Gouvernement hôte;Secteur privé / Fournisseur > OK.",
        ],
      },
      {
        title: 'Saisissez chaque acteur',
        actions: [
          "Colonne A : nom précis de l'organisation et lieu (« Grossiste Wau — marché central »), jamais « fournisseur ».",
          "Colonne B : choisissez la catégorie dans la liste déroulante.",
          "Classez le bailleur dans la catégorie la plus proche de sa nature institutionnelle (ici Gouvernement hôte ne convient pas : notez-le en ligne séparée hors synthèse ou ajoutez une catégorie « Bailleur » à la synthèse, voir étape 7).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — colonnes A et B',
      lines: [
        "Grossiste Wau — marché central | Secteur privé / Fournisseur",
        "Fournisseur Juba (vivres) | Secteur privé / Fournisseur",
        "Transporteur Juba (Juba → Gogrial) | Secteur privé / Fournisseur",
        "Agent en douane Juba | Secteur privé / Fournisseur",
        "Ministère de la Santé de l'État du Warrap | Gouvernement hôte",
        "Agence onusienne — pipeline nutrition | Agence onusienne",
        "Point focal Logistics Cluster Juba | Agence onusienne",
        "ONG partenaire de distribution | ONG",
        "ECHO | Bailleur (catégorie ajoutée)",
      ],
    },
    pitfall: "Écrire « Fournisseur » ou « ONU » au lieu des libellés exacts : la cellule B30 « Acteurs non catégorisés » devient positive et la synthèse est fausse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Renseigner Rôle dans la chaîne SCM et Flux concerné',
    intro: "Le rôle décrit ce que l'acteur fait concrètement pour votre chaîne, pas ce qu'il est. Le flux concerné relie l'acteur au registre L1.",
    steps: [
      {
        title: 'Rédigez le rôle en une phrase verbale',
        actions: [
          "Commencez par un verbe d'action : « Fournit… », « Autorise… », « Transporte… », « Coordonne… ».",
          "Précisez l'objet et le lieu : « Fournit farine de maïs et haricots, livraison Gogrial sous 7 jours ».",
        ],
      },
      {
        title: 'Indiquez le flux avec les codes du registre',
        actions: [
          "Colonne D : utilisez les mêmes familles que le template (Achats, Transport & stockage, Douane / Import, Distribution) suivies du code de flux : « Achats — F1 ».",
          "Si un acteur touche plusieurs flux, listez-les tous : « Douane / Import — F2, F1 (import Juba) ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — colonnes C et D',
      lines: [
        "Grossiste Wau | Fournit farine de maïs et haricots, livraison Gogrial sous 7 jours | Achats — F1",
        "Ministère de la Santé de l'État | Délivre l'autorisation d'importation des médicaments | Douane / Import — F2",
        "Agence onusienne — pipeline nutrition | Dote Kerowa en RUTF sur la base des rapports mensuels de consommation | Distribution — F3",
        "Point focal Logistics Cluster | Informe sur les accès routiers, propose transport et stockage communs | Transport & stockage — F1, F2",
      ],
    },
    result: "Chaque acteur est relié à un flux du registre : aucun acteur « hors chaîne ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Coter le niveau d\'influence avec une grille écrite',
    intro: "Le niveau d'influence n'est pas théorique : il mesure ce que l'acteur peut faire à votre capacité d'approvisionner. Un fournisseur unique sur un marché isolé a une influence élevée, même s'il s'agit d'un petit commerçant.",
    steps: [
      {
        title: 'Appliquez la grille à chaque acteur',
        actions: [
          "Élevé : l'acteur peut bloquer ou arrêter un flux seul, et aucune alternative n'est mobilisable en moins de 2 semaines.",
          "Moyen : l'acteur peut retarder ou renchérir un flux ; une alternative existe mais coûte du temps ou de l'argent.",
          "Faible : impact marginal ; plusieurs alternatives immédiates.",
        ],
      },
      {
        title: 'Justifiez la cote',
        actions: [
          "Saisissez Élevé, Moyen ou Faible en colonne E.",
          "Ajoutez un commentaire de cellule (clic droit > Nouveau commentaire) avec la justification en une phrase.",
          "Renseignez la colonne H « Alternative identifiée ? » (Oui / Non).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — cotes justifiées',
      lines: [
        "Ministère de la Santé de l'État : Élevé — sans autorisation, aucun médicament importé ne sort ; pas d'alternative. Alternative : Non.",
        "Grossiste Wau : Élevé — seul à livrer à Gogrial aujourd'hui ; 2 autres grossistes jamais consultés. Alternative : Non (à créer).",
        "Fournisseur Juba : Faible — plusieurs fournisseurs équivalents à Juba. Alternative : Oui.",
        "Agence onusienne — pipeline nutrition : Élevé — source unique de RUTF. Alternative : Non.",
        "Point focal Logistics Cluster : Moyen — ne bloque rien, mais peut débloquer transport et information. Alternative : sans objet.",
      ],
    },
    pitfall: "Coter tout le monde « Élevé » par prudence : la cartographie ne hiérarchise plus rien. Si plus de la moitié des acteurs sont « Élevé », reprenez la grille.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: 'Renseigner Contact, Statut info / MAJ et point de friction',
    intro: "Une cartographie sans contact est inutilisable le jour du blocage. Le statut indique la fiabilité de chaque ligne ; la colonne I prépare l'analyse du Jour 4.",
    steps: [
      {
        title: 'Complétez les colonnes F et G',
        actions: [
          "Colonne F : fonction + canal (« Gérant — téléphone direct »). Gardez les numéros dans un annuaire séparé si le fichier circule largement.",
          "Colonne G : « Confirmé » si vous avez vérifié l'information auprès de l'acteur ou d'un document ; « À confirmer » sinon, suivi de la date de mise à jour.",
        ],
      },
      {
        title: 'Remplissez la colonne I',
        actions: [
          "Écrivez l'intérêt principal de l'acteur et la friction possible avec le vôtre, en une ligne.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — colonnes F, G et I',
      lines: [
        "Ministère de la Santé de l'État | Point focal santé de l'État | À confirmer — 03/03/2026 | Contrôler les médicaments entrants ; friction : délai d'autorisation vs urgence médicale.",
        "Grossiste Wau | Gérant, contact direct | Confirmé — 03/03/2026 | Marge et volume ; friction : position de fournisseur unique → risque de hausse de prix.",
        "Point focal Logistics Cluster | Coordinateur logistique, e-mail | À confirmer — 03/03/2026 | Couvrir tout le secteur ; friction : priorités de transport commun différentes des nôtres.",
      ],
    },
    result: "Chaque ligne indique qui appeler, à quel point l'information est fiable, et où se situe la friction.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: 'Contrôler la synthèse par catégorie et l\'équilibre de la cartographie',
    intro: "La synthèse (lignes 24 à 30) vous dit si votre cartographie est complète ou déséquilibrée, par exemple tout centrée sur les fournisseurs privés sans acteur institutionnel.",
    steps: [
      {
        title: 'Lisez les compteurs',
        actions: [
          "Vérifiez que B30 « Acteurs non catégorisés (à corriger) » vaut 0. Sinon, cherchez la ligne dont la catégorie n'est pas un libellé exact.",
          "Vérifiez que chaque catégorie compte au moins 1 acteur.",
        ],
      },
      {
        title: 'Ajoutez la catégorie Bailleur si nécessaire',
        actions: [
          "Insérez une ligne au-dessus de la ligne 29 « Total », saisissez « Bailleur » en A, et recopiez la formule COUNTIFS en B.",
          "Mettez à jour la formule de B30 pour inclure la nouvelle ligne : =B29-SOMME(B25:B29) (plages décalées après insertion).",
          "Ajoutez « Bailleur » à la liste de validation de la colonne B.",
        ],
      },
      {
        title: 'Si vous dépassez 15 acteurs',
        actions: [
          "Insérez des lignes à l'intérieur de la plage 5–19 (et non en dessous) pour que les formules s'étendent automatiquement.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Kerowa — nombre d\'acteurs'],
      rows: [
        ['ONG', '1'],
        ['Agence onusienne', '2'],
        ['Gouvernement hôte', '1'],
        ['Secteur privé / Fournisseur', '4'],
        ['Bailleur', '1'],
        ['Total acteurs cartographiés', '9'],
        ['Acteurs non catégorisés (à corriger)', '0'],
      ],
    },
    result: "Livrable L2 terminé : 9 acteurs, 0 non catégorisé, toutes les familles représentées.",
    tip: "Une seule ONG cartographiée est un signal : quelles autres ONG achètent chez les mêmes grossistes de Wau ? Inscrivez-le comme question pour la prochaine réunion de coordination.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — RÈGLES DU BAILLEUR (JOUR 3 MATIN)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Identifier le ou les bailleurs principaux et leur poids',
    intro: "C'est le bailleur principal qui détermine les procédures de conformité. Sur une mission multi-bailleurs, chaque achat suit les règles du bailleur sur la ligne budgétaire duquel il est imputé.",
    steps: [
      {
        title: 'Listez les financements actifs',
        actions: [
          "Ouvrez le budget validé du projet et la liste des conventions en cours (demandez-la à la coordinatrice pays).",
          "Pour chaque financement, notez : bailleur, montant, période, part du budget total, date du prochain rapport.",
        ],
      },
      {
        title: 'Reliez chaque flux à son financement',
        actions: [
          "Dans le registre L1, ajoutez une colonne « Bailleur imputé » à partir du code budgétaire fourni par la finance.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — financements',
      lines: [
        "ECHO : 1 020 000 EUR (85 %), 01/12/2025 – 30/11/2026, rapport intermédiaire dû le 15/06/2026.",
        "Fonds privés : 180 000 EUR (15 %), même période, rapport annuel interne.",
        "Imputation : F1, F2, F3 (frais de transport), F5 → ECHO ; F4 carburant → 70 % ECHO, 30 % fonds privés.",
      ],
    },
    result: "Vous savez, pour chaque flux, quelles règles de bailleur s'appliquent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Extraire les exigences de la convention bailleur',
    intro: "Ne travaillez jamais de mémoire ni à partir des règles d'une mission précédente. Les exigences d'achat se trouvent dans la convention de subvention et dans ses annexes consacrées aux achats et aux règles d'éligibilité.",
    steps: [
      {
        title: 'Lisez la convention avec une grille de 6 questions',
        actions: [
          "Seuils de mise en concurrence : à partir de quel montant faut-il 3 offres, une procédure négociée, une procédure ouverte ?",
          "Pièces exigées : quels documents doivent figurer dans chaque dossier d'achat ?",
          "Éligibilité : règles d'origine des biens et de nationalité des fournisseurs, dérogations possibles.",
          "Dérogations : procédures simplifiées en urgence, achats auprès de centrales d'achat humanitaires.",
          "Délais : dates de rapport, durée de conservation des documents.",
          "Contrôle : droit d'audit, vérification sur place.",
        ],
      },
      {
        title: 'Notez la référence exacte de chaque exigence',
        actions: [
          "Pour chaque réponse, recopiez article et page (« Annexe achats, art. 4.2, p. 7 ») : c'est ce que vous citerez en cas de désaccord.",
        ],
      },
    ],
    result: "Une fiche de 6 rubriques, chaque exigence étant référencée dans la convention.",
    pitfall: "Appliquer par défaut des seuils génériques « parce que c'est ce qu'on faisait sur la mission précédente » : les règles changent d'un bailleur et d'une convention à l'autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Croiser avec la politique interne : le tableau des seuils applicables',
    intro: "Vous avez deux jeux de règles : celles du bailleur et celles de votre organisation. Le tableau des seuils applicables les met côte à côte et retient, règle par règle, la plus stricte. C'est ce tableau que toute l'équipe appliquera.",
    steps: [
      {
        title: 'Construisez le tableau',
        actions: [
          "Créez un fichier « L3_Seuils_applicables.xlsx » avec 4 colonnes : Règle | Politique interne | Convention bailleur (référence) | Règle appliquée.",
          "Remplissez une ligne par règle : seuils de devis, procédures, pièces, conservation, origine.",
          "Dans « Règle appliquée », retenez la plus exigeante et indiquez entre parenthèses d'où elle vient.",
        ],
      },
      {
        title: 'Faites-le valider',
        actions: [
          "Soumettez le tableau à la coordinatrice pays et au responsable finance ; il deviendra l'annexe de votre note de positionnement.",
        ],
      },
    ],
    table: {
      columns: ['Règle', 'Politique interne Kerowa', 'Convention (valeurs d\'exemple)', 'Règle appliquée'],
      rows: [
        ['Devis multiples', '3 devis écrits dès 1 000 EUR', '3 offres dès 5 000 EUR', '3 devis dès 1 000 EUR (interne)'],
        ['Procédure avec comité', 'AO restreint dès 10 000 EUR', 'Procédure négociée dès 20 000 EUR', 'AO restreint dès 10 000 EUR (interne)'],
        ['Procédure ouverte', 'Dès 60 000 EUR', 'Dès 60 000 EUR', 'Dès 60 000 EUR (identique)'],
        ['Conservation des pièces', '3 ans', '5 ans après rapport final', '5 ans (bailleur)'],
        ['Origine des biens', 'Pas de règle', 'Règles d\'origine à respecter', 'Vérification systématique (bailleur)'],
      ],
    },
    pitfall: "Les valeurs de la colonne « Convention » sont fictives et servent uniquement à montrer le raisonnement. Recopiez toujours les vôtres depuis votre convention, avec la référence de l'article.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Définir le dossier d\'achat type : ce que « traçabilité stricte » veut dire',
    intro: "« Traçabilité stricte » se traduit par une règle simple : pour chaque achat, un auditeur doit pouvoir reconstituer qui a demandé quoi, qui a été consulté, pourquoi ce fournisseur a été retenu, qui a validé, ce qui a été reçu et ce qui a été payé.",
    steps: [
      {
        title: 'Listez les pièces dans l\'ordre chronologique',
        actions: [
          "1. Demande d'achat signée par le demandeur et validée par le budget holder.",
          "2. Demandes de devis envoyées (ou avis d'appel d'offres).",
          "3. Devis ou offres reçus, datés.",
          "4. Tableau comparatif ou PV d'évaluation signé.",
          "5. Bon de commande ou contrat signé par la personne habilitée.",
          "6. Bon de livraison et bon de réception (GRN) avec contrôle qualité.",
          "7. Facture, preuve de paiement.",
          "8. Fiche de stock puis waybill ou liste de distribution jusqu'à l'utilisation finale.",
        ],
      },
      {
        title: 'Transformez la liste en page de garde',
        actions: [
          "Créez une page de garde « Dossier d'achat n° … » avec ces 8 pièces en cases à cocher, la date et la signature du contrôleur.",
          "Imprimez-la : chaque dossier physique ou numérique commence par cette page.",
        ],
      },
    ],
    result: "La page de garde du dossier d'achat est prête ; elle rend la traçabilité vérifiable en 30 secondes par dossier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Auditer un échantillon de dossiers existants et régulariser',
    intro: "Avec la page de garde, vous contrôlez les dossiers repérés au Jour 1. L'objectif : régulariser avant le rapport intermédiaire, pas découvrir les écarts en audit.",
    steps: [
      {
        title: 'Contrôlez les dossiers',
        actions: [
          "Prenez tous les dossiers marqués « À régulariser » dans L1, plus 3 dossiers « OK » tirés au hasard.",
          "Cochez la page de garde pièce par pièce ; photographiez ou scannez ce qui manque.",
        ],
      },
      {
        title: 'Rédigez les notes au dossier',
        actions: [
          "Pour chaque écart, rédigez une note datée : faits, raison de l'écart, mesure corrective, signature du rédacteur et visa du niveau compétent.",
          "Classez la note en tête du dossier concerné et reportez son numéro dans le registre L1.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — note au dossier pour T02 (rédaction type)',
      lines: [
        "Objet : achat de vivres du 19/12/2025 — 5 400 EUR — un seul devis.",
        "Faits : la procédure interne requiert 3 devis écrits pour ce montant. Un seul devis figure au dossier.",
        "Raison invoquée : ouverture de la mission, absence de SCM, rupture imminente des rations (selon le responsable programme).",
        "Mesure corrective : relevé de prix de 2 fournisseurs de Juba à la même date demandé pour démontrer le caractère raisonnable du prix ; procédure des 3 devis appliquée à tous les achats depuis le 02/03/2026.",
        "Rédigé par : SCM, 04/03/2026. Visa : coordinatrice pays.",
      ],
    },
    pitfall: "Une note au dossier ne « blanchit » pas un écart : elle le rend transparent. C'est le bailleur qui décidera de l'éligibilité ; votre rôle est de lui donner une information complète et honnête.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Préparer les questions au point focal bailleur',
    intro: "Ce que vous ne pouvez pas trancher dans la convention se clarifie avec le point focal du bailleur. La demande passe par la coordinatrice pays, qui gère la relation contractuelle.",
    steps: [
      {
        title: 'Rédigez des questions fermées et référencées',
        actions: [
          "Une question par point non tranché, avec la référence de l'article concerné.",
          "Proposez votre interprétation : le bailleur répond plus vite à « confirmez-vous que… » qu'à une question ouverte.",
        ],
      },
      {
        title: 'Transmettez par la bonne voie',
        actions: [
          "Envoyez le projet de message à la coordinatrice pays, qui le transmettra ou l'intégrera au prochain échange avec le bailleur.",
          "Inscrivez la question dans le plan d'action avec une échéance de réponse.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — projet de message (via la coordinatrice pays)',
      lines: [
        "Objet : Projet Gogrial — clarifications sur les exigences de traçabilité avant le rapport intermédiaire",
        "1. Confirmez-vous que la liste de pièces jointe (8 pièces par dossier d'achat) correspond à vos attentes de traçabilité ?",
        "2. Pour les achats de médicaments auprès d'une centrale d'achat humanitaire, confirmez-vous la dispense de mise en concurrence prévue à l'article [référence] ?",
        "3. Trois achats de décembre à février présentent des écarts documentés par notes au dossier. Souhaitez-vous qu'ils soient signalés dans le rapport intermédiaire ?",
        "4. Quel format attendez-vous pour le suivi des stocks et de la consommation (fiches de stock, rapport mensuel) ?",
        "5. Les règles d'origine s'appliquent-elles aux achats de vivres effectués à Juba auprès de fournisseurs importateurs ?",
      ],
    },
    result: "Livrable L3 terminé : tableau des seuils applicables, page de garde du dossier d'achat, notes au dossier rédigées, questions au bailleur transmises.",
    pitfall: "Écrire directement au bailleur sans passer par la coordination : vous court-circuitez la personne responsable de la relation contractuelle et risquez des messages contradictoires.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — SPHÈRE, CALP, IASC (JOUR 3 APRÈS-MIDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Associer chaque flux au chapitre Sphère concerné',
    intro: "Ces standards ne sont pas des documents à citer dans un rapport : ce sont des filtres à appliquer à chaque cahier des charges, chaque contrat et chaque choix de modalité. La fiche de contrôle L4 compte une ligne par flux.",
    steps: [
      {
        title: 'Créez la fiche de contrôle',
        actions: [
          "Créez « L4_Fiche_controle_standards.xlsx » avec les colonnes : Flux | Chapitre Sphère | Exigence clé | Spécification actuelle | Conforme ? | Modalité (nature / cash / coupon) | Clauses AAP-PSEA présentes ? | Action.",
        ],
      },
      {
        title: 'Ouvrez le chapitre Sphère de chaque flux',
        actions: [
          "Rendez-vous sur spherestandards.org et ouvrez le chapitre du secteur (ici : Sécurité alimentaire et nutrition ; Santé).",
          "Relevez l'exigence qui concerne directement ce que vous achetez et recopiez-la dans « Exigence clé ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — colonnes Flux, Chapitre, Exigence',
      lines: [
        "F1 Vivres | Sécurité alimentaire et nutrition | Ration planifiée à 2 100 kcal/personne/jour, denrées adaptées et acceptables",
        "F2 Médicaments | Santé (systèmes de santé — médicaments essentiels) | Médicaments essentiels de qualité garantie, conformes à la liste nationale",
        "F3 RUTF | Sécurité alimentaire et nutrition (prise en charge de la malnutrition aiguë) | Produits conformes au protocole national",
      ],
    },
    result: "Chaque flux est relié à une exigence Sphère écrite noir sur blanc.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Réécrire les spécifications d\'achat pour les rendre vérifiables',
    intro: "Une spécification conforme est une spécification que le magasinier peut vérifier à la réception, sans interprétation.",
    steps: [
      {
        title: 'Transformez l\'exigence en critères de réception',
        actions: [
          "Pour chaque article, écrivez : désignation précise, conditionnement, exigence de qualité, durée de vie minimale à la livraison, marquage.",
          "Reportez ces critères dans la demande de devis et dans la fiche de contrôle à réception.",
        ],
      },
      {
        title: 'Comparez avec la spécification actuelle',
        actions: [
          "Remplissez « Spécification actuelle » à partir des derniers bons de commande, puis « Conforme ? » (Oui / Non / Partiel).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — spécification réécrite pour la ration F1',
      lines: [
        "Avant : « huile, 40 bidons ».",
        "Après : « Huile végétale enrichie en vitamine A, bidons de 5 L scellés, étiquetage indiquant l'enrichissement, date limite ≥ 12 mois à la livraison ».",
        "Avant : « sel, 10 sacs ». Après : « Sel iodé, sacs de 1 kg étiquetés « iodé », sacs extérieurs de 25 kg intacts ».",
        "Avant : « farine maïs ». Après : « Farine de maïs, sacs neufs de 50 kg cousus, sans infestation visible ni moisissure, date de mouture ≤ 30 jours à la livraison ».",
        "Conformité constatée : Partiel (huile de T02 non enrichie selon le bon de livraison).",
      ],
    },
    pitfall: "Écrire « de bonne qualité » : ce n'est pas vérifiable, donc pas opposable au fournisseur en cas de litige.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Vérifier si une modalité cash ou coupon est en jeu (CALP)',
    intro: "Si un programme utilise ou envisage du cash ou des coupons, votre chaîne change de nature. Il faut le savoir dès la prise de poste, car la qualification des commerçants prend plusieurs semaines.",
    steps: [
      {
        title: 'Posez la question aux programmes',
        actions: [
          "Demandez à chaque responsable programme : « Une modalité cash ou coupon est-elle prévue dans les 6 prochains mois ? Sur quels articles ? »",
          "Notez la réponse dans la colonne Modalité de la fiche L4.",
        ],
      },
      {
        title: 'Si oui, lancez les trois chantiers CALP',
        actions: [
          "Liste des commerçants à qualifier (stock, réapprovisionnement, prix, accessibilité).",
          "Panier de référence et relevé de prix hebdomadaire sur 3 à 5 points de vente.",
          "Seuil d'alerte de hausse des prix, fixé avec le programme.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — réponse des programmes',
      lines: [
        "Nutrition : un volet coupons alimentaires pour les ménages sortants du centre de stabilisation est à l'étude pour le second semestre.",
        "Action L4 : identifier dès avril 5 commerçants à Gogrial et démarrer un relevé de prix mensuel, pour disposer d'une base de référence avant le lancement.",
      ],
    },
    result: "Vous savez si et quand votre rôle va se déplacer vers le marché local, et vous avez anticipé la base de prix.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Intégrer AAP et PSEA dans les contrats de transport et de distribution',
    intro: "Les cadres IASC de redevabilité et de protection se vérifient dans vos contrats et dans les pratiques de vos prestataires au contact des communautés.",
    steps: [
      {
        title: 'Contrôlez les contrats existants',
        actions: [
          "Ouvrez chaque contrat ou bon de commande de transport et de distribution ; cherchez la clause PSEA et le code de conduite signé.",
          "Renseignez « Clauses AAP-PSEA présentes ? » dans la fiche L4.",
        ],
      },
      {
        title: 'Corrigez les manques',
        actions: [
          "Ajoutez les clauses types par avenant aux contrats en cours, et dans le modèle de contrat pour les suivants.",
          "Demandez la liste nominative des chauffeurs et manutentionnaires ayant signé le code de conduite.",
          "Vérifiez que le mécanisme de plainte de Kerowa est affiché aux points de distribution et connu des prestataires.",
        ],
      },
    ],
    table: {
      columns: ['Flux', 'Conforme Sphère ?', 'Modalité', 'Clauses AAP-PSEA', 'Action'],
      rows: [
        ['F1 Vivres', 'Partiel', 'Nature (coupons à l\'étude)', 'Non (camions Kerowa)', 'Réécrire specs, briefing PSEA chauffeurs'],
        ['F2 Médicaments', 'À vérifier', 'Nature', 'Non (transporteur Juba)', 'Avenant PSEA au contrat transporteur'],
        ['F3 RUTF', 'Oui', 'Nature', 'Oui (partenaire)', 'Aucune'],
        ['F5 Transport', 'Sans objet', 'Service', 'Non', 'Avenant PSEA + liste nominative'],
      ],
    },
    result: "Livrable L4 terminé : chaque flux a sa ligne de contrôle Sphère / CALP / IASC et une action datée.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — CROISER ACTEURS ET FLUX (JOUR 4 MATIN)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Construire la chaîne de chaque flux majeur, maillon par maillon',
    intro: "Vous reprenez le registre L1 et la cartographie L2 : pour chaque flux majeur, vous identifiez qui sont réellement les acteurs impliqués et où se trouvent les points de fragilité.",
    steps: [
      {
        title: 'Créez la matrice de fragilité',
        actions: [
          "Ajoutez une feuille « Fragilité » au fichier L2 avec les colonnes : Flux | Maillon | Acteur | Influence | Alternative ? | Délai de remplacement | Classement.",
          "Pour chaque flux majeur (F1, F2, F3 au minimum), saisissez une ligne par maillon : fournisseur, transport, autorisation / douane, stockage, distribution.",
        ],
      },
      {
        title: 'Recopiez influence et alternative depuis la cartographie',
        actions: [
          "Utilisez =RECHERCHEX([@Acteur];Cartographie!$A$5:$A$19;Cartographie!$E$5:$E$19) pour éviter les erreurs de recopie (RECHERCHEV si votre version d'Excel n'a pas RECHERCHEX).",
        ],
      },
    ],
    result: "Chaque maillon de chaque flux majeur a un acteur, une influence et une alternative renseignées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Évaluer, maillon par maillon, l\'influence et l\'existence d\'une alternative',
    intro: "La question n'est pas « cet acteur est-il important ? » mais « si cet acteur fait défaut demain, combien de temps faut-il pour le remplacer ? ».",
    steps: [
      {
        title: 'Estimez le délai de remplacement',
        actions: [
          "Pour chaque maillon, écrivez le délai réaliste pour mobiliser une alternative (en jours ou semaines).",
          "Si aucune alternative n'existe, écrivez « Aucune ».",
        ],
      },
      {
        title: 'Comparez au stock de couverture',
        actions: [
          "Demandez au logisticien ou au pharmacien la couverture de stock actuelle du flux (en semaines de consommation).",
          "Si le délai de remplacement dépasse la couverture, le maillon est critique.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — calcul de couverture du flux F2',
      lines: [
        "Stock de médicaments essentiels au 05/03/2026 : couverture estimée à 5 semaines (≈ jusqu'au 9 avril).",
        "Délai d'une nouvelle importation une fois l'autorisation obtenue : 4 à 6 semaines.",
        "Autorisation du Ministère : aucune alternative, délai inconnu (déjà 6 semaines d'attente).",
        "Conclusion : délai de remplacement > couverture → maillon critique.",
      ],
    },
    result: "Chaque maillon porte un délai de remplacement comparé à la couverture de stock.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Classer les points de fragilité en rouge, orange et vert',
    intro: "Un acteur à influence élevée sans alternative identifiée est un risque à signaler immédiatement à la coordination, pas à découvrir lors d'une rupture de stock.",
    steps: [
      {
        title: 'Appliquez la règle de classement',
        actions: [
          "Rouge : influence Élevé ET aucune alternative OU délai de remplacement supérieur à la couverture.",
          "Orange : influence Élevé avec alternative possible mais non encore activée, ou influence Moyen sans alternative.",
          "Vert : les autres cas.",
        ],
      },
      {
        title: 'Automatisez et triez',
        actions: [
          "Saisissez la règle dans la colonne Classement avec une formule SI, puis une mise en forme conditionnelle (rouge, orange, vert).",
          "Triez la feuille par Classement pour voir les rouges en premier.",
        ],
      },
    ],
    table: {
      columns: ['Flux', 'Maillon', 'Acteur', 'Classement'],
      rows: [
        ['F2 Médicaments', 'Autorisation', 'Ministère de la Santé de l\'État', 'Rouge'],
        ['F3 RUTF', 'Fournisseur', 'Agence onusienne — pipeline', 'Rouge (dépend de nos rapports mensuels)'],
        ['F1 Vivres', 'Fournisseur', 'Grossiste Wau unique', 'Orange'],
        ['F2 Médicaments', 'Transport', 'Transporteur Juba unique', 'Orange'],
        ['F1 Vivres', 'Fournisseur import', 'Fournisseur Juba', 'Vert'],
      ],
    },
    result: "Deux rouges et deux oranges à traiter en priorité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Bâtir le plan d\'action des blocages : action, responsable, échéance',
    intro: "Une autorisation « en attente depuis 6 semaines » sans relance structurée ni plan B n'est pas un problème en cours de résolution : c'est un problème oublié. Chaque blocage porte une action, un responsable et une échéance.",
    steps: [
      {
        title: 'Structurez chaque blocage en 4 temps',
        actions: [
          "Comprendre : récupérer les faits (date de dépôt, référence, pièces fournies).",
          "Relancer : par la bonne personne et le bon canal, avec une date.",
          "Préparer le plan B : ce que l'on fait si le blocage persiste.",
          "Fixer la date d'escalade : à quelle date, et vers qui, on monte d'un niveau.",
        ],
      },
      {
        title: 'Saisissez le plan dans un tableau de suivi',
        actions: [
          "Colonnes : N° | Blocage | Action | Responsable | Échéance | Statut | Date d'escalade.",
          "Une ligne par action (pas une ligne par blocage).",
        ],
      },
    ],
    table: {
      columns: ['Action', 'Responsable', 'Échéance'],
      rows: [
        ['B1 — Récupérer la copie de la demande d\'autorisation (référence, date, liste des produits)', 'SCM', 'Mer. 04/03'],
        ['B1 — Contacter le point focal Logistics Cluster : délais constatés et procédure', 'SCM', 'Jeu. 05/03'],
        ['B1 — Visite au Ministère de l\'État avec lettre de relance signée par la coordinatrice pays', 'Coordinateur médical', 'Ven. 06/03'],
        ['B1 — Plan B : couverture de stock et option de prêt inter-ONG documenté', 'SCM + pharmacien', 'Ven. 06/03'],
        ['B1 — Escalade au niveau national si pas de réponse', 'Coordinatrice pays', 'Ven. 20/03'],
        ['B2 — Transmettre les questions de traçabilité au bailleur', 'SCM via coordinatrice pays', 'Ven. 13/03'],
        ['B3 — Qualifier 2 grossistes supplémentaires à Wau', 'Logisticien', 'Ven. 27/03'],
        ['B4 — Envoyer le rapport mensuel de consommation RUTF avant le 5 du mois', 'Responsable nutrition', 'Chaque mois'],
      ],
    },
    result: "Chaque blocage a une suite datée et un nom en face.",
    pitfall: "Écrire « Relancer le Ministère — équipe — ASAP » : sans personne nommée ni date, l'action n'existe pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Alerter la coordination sans attendre le vendredi',
    intro: "Un rouge se signale le jour où on le découvre. Votre message doit tenir en quelques lignes et proposer une décision, pas seulement décrire un problème.",
    steps: [
      {
        title: 'Rédigez une alerte courte',
        actions: [
          "Structure : fait → impact chiffré → actions engagées → décision demandée → date.",
          "Envoyez à la coordinatrice pays, copie coordinateur médical.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — alerte envoyée le jeudi 5 mars à 12 h',
      lines: [
        "Objet : ALERTE — risque de rupture de médicaments essentiels à Gogrial vers le 9 avril",
        "Fait : autorisation d'importation du Ministère de la Santé de l'État en attente depuis 6 semaines.",
        "Impact : couverture de stock de 5 semaines ; une importation prend 4 à 6 semaines après autorisation.",
        "Engagé : copie de la demande récupérée ; Logistics Cluster contacté ; visite au Ministère prévue vendredi avec le coordinateur médical.",
        "Décision demandée : signer la lettre de relance d'ici vendredi 10 h et valider le principe d'un prêt inter-ONG si aucune réponse au 20 mars.",
      ],
    },
    result: "Livrable L5 terminé : matrice de fragilité classée, plan d'action daté, alerte envoyée sur les rouges.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — ARBITRER LOCAL VS IMPORT (JOUR 4 APRÈS-MIDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 6',
    title: 'Définir le besoin avec précision',
    intro: "On n'arbitre pas « les vivres » : on arbitre un article, une quantité, une spécification et une date de besoin. Sans cette précision, les options ne sont pas comparables.",
    steps: [
      {
        title: 'Remplissez la fiche besoin',
        actions: [
          "Article et spécification (reprise de la fiche L4).",
          "Quantité mensuelle et quantité totale sur la période d'arbitrage.",
          "Date de première livraison et contraintes de calendrier (saison des pluies, fêtes, fermetures de routes).",
          "Validation du besoin par le responsable programme (nom, date).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — fiche besoin',
      lines: [
        "Articles : farine de maïs (spécification L4) + haricots secs.",
        "Quantité : 2,43 t de farine + 0,32 t de haricots = 2,75 t par mois.",
        "Période : mars à août 2026 → 6 mois × 2,75 t = 16,5 t.",
        "Contrainte : l'axe Juba → Wau est fréquemment coupé pendant la saison des pluies (à partir de mai-juin).",
        "Besoin validé par Dr Rebecca N. le 05/03/2026.",
      ],
    },
    result: "Un besoin chiffré, daté et validé : la base commune de comparaison.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 6',
    title: 'Collecter des données comparables : le coût rendu destination',
    intro: "Le seul prix comparable est le coût rendu au point d'utilisation : prix d'achat + transport + manutention + frais de route et de douane. Un prix départ plus bas peut cacher un coût rendu plus élevé.",
    steps: [
      {
        title: 'Obtenez les prix',
        actions: [
          "Demandez des devis pour la même spécification à au moins 2 fournisseurs par option (local, import).",
          "Demandez au logisticien le coût de transport par tonne pour chaque trajet.",
        ],
      },
      {
        title: 'Calculez le coût rendu',
        actions: [
          "Dans une feuille « Arbitrage », calculez pour chaque option : prix départ EUR/t + transport EUR/t + autres frais EUR/t = coût rendu EUR/t.",
          "Notez aussi le délai porte-à-porte en jours et la capacité mensuelle du fournisseur.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — coût rendu Gogrial (valeurs fictives)',
      lines: [
        "Local Wau : 30 EUR/sac de 50 kg = 600 EUR/t + transport Wau → Gogrial 35 EUR/t = 635 EUR/t rendu. Délai : 7 jours. Capacité : 4 t/mois.",
        "Import Juba : 27 EUR/sac = 540 EUR/t + transport Juba → Gogrial 150 EUR/t + frais de route et manutention 25 EUR/t = 715 EUR/t rendu. Délai : 21 à 35 jours.",
        "Écart : 715 − 635 = 80 EUR/t en faveur de Wau, alors que le prix départ de Juba est plus bas.",
      ],
    },
    pitfall: "Comparer des paniers différents (riz et huile importés de Juba contre farine et haricots de Wau) : le coût par tonne n'a alors aucun sens.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 6',
    title: 'Tester la capacité du marché local et le risque de distorsion des prix',
    intro: "Le Nexus impose de vérifier que l'achat local ne déstabilise pas le marché qu'il est censé soutenir : vos volumes ne doivent pas provoquer une pénurie ni une flambée des prix pour la population.",
    steps: [
      {
        title: 'Estimez le volume du marché',
        actions: [
          "Interrogez 3 grossistes et le responsable du marché : volume de céréales vendu par semaine, origine, saisonnalité.",
          "Recoupez avec les bulletins de prix ou de marché disponibles via la coordination sécurité alimentaire.",
        ],
      },
      {
        title: 'Calculez votre part de marché',
        actions: [
          "Part = votre volume mensuel ÷ volume mensuel du marché.",
          "Fixez un repère interne avec le programme (par exemple : au-delà de 10 %, achat fractionné et suivi des prix renforcé).",
          "Prévoyez un relevé de prix mensuel pour détecter une hausse liée à vos achats.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — test de marché à Wau',
      lines: [
        "Volume de céréales estimé par les grossistes : 35 à 40 t par semaine, soit ≈ 150 t par mois.",
        "Part de Kerowa : 2,75 ÷ 150 = 1,8 % → très en dessous du repère de 10 %.",
        "Saisonnalité : prix habituellement en hausse en période de soudure (juin-août) → contrat à prix fixe sur 6 mois à négocier.",
      ],
    },
    result: "Vous savez si le marché local peut absorber votre demande sans distorsion, chiffres à l'appui.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 6',
    title: 'Noter les options dans une matrice pondérée',
    intro: "La matrice rend la décision explicite et vérifiable : critères, poids et notes sont écrits avant de calculer, et le calcul est reproductible par un auditeur.",
    steps: [
      {
        title: 'Fixez critères et poids avec le programme',
        actions: [
          "Retenez 5 critères : coût rendu, délai, qualité / conformité Sphère, capacité et fiabilité, impact sur l'économie locale (Nexus).",
          "Répartissez 100 % de poids ; écrivez la justification des poids.",
        ],
      },
      {
        title: 'Notez de 1 à 5 et calculez',
        actions: [
          "Notez chaque option sur chaque critère en vous appuyant sur les données des étapes 2 et 3.",
          "Score pondéré = SOMMEPROD(poids ; notes) — par exemple =SOMMEPROD($B$2:$B$6;C2:C6).",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Poids', 'Local Wau', 'Import Juba'],
      rows: [
        ['Coût rendu (635 vs 715 EUR/t)', '30 %', '5', '3'],
        ['Délai (7 j vs 21–35 j, route coupée en saison des pluies)', '25 %', '5', '2'],
        ['Qualité / conformité Sphère (contrôle à renforcer à Wau)', '20 %', '3', '4'],
        ['Capacité et fiabilité (4 t/mois, 1 seul grossiste qualifié)', '15 %', '3', '4'],
        ['Impact économie locale (Nexus)', '10 %', '5', '2'],
        ['Score pondéré', '100 %', '4,30', '3,00'],
      ],
    },
    example: {
      title: 'Détail du calcul',
      lines: [
        "Local : 0,30×5 + 0,25×5 + 0,20×3 + 0,15×3 + 0,10×5 = 1,50 + 1,25 + 0,60 + 0,45 + 0,50 = 4,30",
        "Import : 0,30×3 + 0,25×2 + 0,20×4 + 0,15×4 + 0,10×2 = 0,90 + 0,50 + 0,80 + 0,60 + 0,20 = 3,00",
      ],
    },
    pitfall: "Fixer les poids après avoir vu les notes pour obtenir le résultat souhaité : la matrice perd toute valeur de justification.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 6',
    title: 'Décider et sécuriser l\'option retenue',
    intro: "La meilleure note ne suffit pas : vous traitez les faiblesses de l'option retenue (ici qualité et capacité à Wau) et vous gardez l'autre option là où elle reste meilleure.",
    steps: [
      {
        title: 'Formulez la décision',
        actions: [
          "Option principale, volume, durée, mode contractuel.",
          "Ce qui reste en import et pourquoi.",
        ],
      },
      {
        title: 'Traitez chaque faiblesse de l\'option retenue',
        actions: [
          "Capacité ou fournisseur unique → mise en concurrence et qualification d'autres fournisseurs.",
          "Qualité → contrôle à réception renforcé selon la spécification L4.",
          "Saison des pluies → stock de précaution constitué avant la coupure des routes.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — décision',
      lines: [
        "Farine de maïs et haricots : achat local à Wau, accord-cadre de 6 mois après mise en concurrence d'au moins 3 grossistes (procédure AO restreint, la valeur estimée dépassant 10 000 EUR : 16,5 t × 635 = 10 478 EUR).",
        "Stock de précaution : 1 mois de consommation (2,75 t) constitué à Gogrial avant le 15 mai.",
        "Huile enrichie et sel iodé : maintenus en import Juba si aucun fournisseur de Wau ne respecte la spécification ; groupés avec les envois de médicaments.",
        "Gain estimé : 80 EUR/t × 16,5 t = 1 320 EUR et 2 à 4 semaines de délai en moins.",
      ],
    },
    result: "Une décision chiffrée, avec ses mesures de sécurisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 6',
    title: 'Documenter la décision dans une note d\'arbitrage',
    intro: "Un bailleur attentif au Nexus peut demander pourquoi vous avez acheté local ou importé. La note d'arbitrage, classée au dossier, est votre réponse prête.",
    steps: [
      {
        title: 'Rédigez une note d\'une page',
        actions: [
          "1. Besoin (fiche de l'étape 1). 2. Options comparées et coûts rendus. 3. Test de marché. 4. Matrice et scores. 5. Décision et mesures de sécurisation. 6. Date de révision.",
          "Faites signer par le responsable programme et visez vous-même ; classez avec le futur dossier d'appel d'offres.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — conclusion de la note d\'arbitrage',
      lines: [
        "« Au regard d'un coût rendu inférieur de 80 EUR/t, d'un délai réduit de 2 à 4 semaines avant la saison des pluies et d'une part de marché de 1,8 % ne présentant pas de risque de distorsion, l'achat local à Wau est retenu pour la farine de maïs et les haricots de mars à août 2026. La conformité qualité sera assurée par un contrôle à réception systématique. La décision sera révisée le 1er juillet 2026 au vu du relevé de prix mensuel. »",
      ],
    },
    result: "Livrable L6 terminé : matrice d'arbitrage et note signée, prêtes à être citées dans le rapport intermédiaire.",
    tip: "Fixez toujours une date de révision : un arbitrage est valable pour un contexte donné (prix, accès, saison), pas pour toujours.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — SE POSITIONNER (JOUR 5 MATIN)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Reconstituer l\'organigramme réel de décision',
    intro: "L'organigramme officiel dit qui est le supérieur de qui. Pour un SCM, ce qui compte est l'organigramme de décision achats : qui demande, qui valide techniquement, qui approuve, qui signe.",
    steps: [
      {
        title: 'Dessinez deux liens par personne',
        actions: [
          "Lien hiérarchique (trait plein) : à qui la personne rend compte.",
          "Lien fonctionnel (pointillé) : de qui elle reçoit des orientations techniques (ex. référent SCM régional).",
        ],
      },
      {
        title: 'Vérifiez sur pièces',
        actions: [
          "Comparez avec les signatures trouvées dans les dossiers d'achat (registre L1, colonne « Validé par ») : qui a réellement signé quoi ?",
          "Notez tout écart entre le rôle officiel et la pratique.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — organigramme de décision',
      lines: [
        "Coordinatrice pays (Juba) ← rend compte au siège.",
        "Coordinateur terrain (Kuajok) ← rend compte à la coordinatrice pays ; budget holder du projet sur le terrain.",
        "SCM (vous) ← hiérarchique : coordinateur terrain ; fonctionnel : référent SCM régional.",
        "Logisticien terrain et assistante achats ← rendent compte au SCM.",
        "Pairs du SCM : coordinateur médical, responsable nutrition, responsable administration-finance.",
        "Écart constaté : des achats de 1 000 à 10 000 EUR ont été signés par le coordinateur programme, sans passage par la fonction achats.",
      ],
    },
    result: "Vous savez qui décide réellement, et où la pratique s'écarte de la règle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Construire la matrice de délégation achats',
    intro: "La matrice de délégation dit, pour chaque tranche de montant, quelle procédure s'applique et qui fait quoi. Elle se construit à partir du tableau des seuils applicables (L3).",
    steps: [
      {
        title: 'Remplissez la matrice',
        actions: [
          "Lignes : les tranches de montant du tableau L3.",
          "Colonnes : procédure | demandeur | validation technique | approbation achat | signature PO ou contrat.",
          "Vérifiez la cohérence avec la politique interne et faites valider par la coordinatrice pays.",
        ],
      },
    ],
    table: {
      columns: ['Tranche', 'Procédure', 'Valid. technique', 'Approbation', 'Signature PO'],
      rows: [
        ['< 1 000 EUR', '1 devis', 'Programme', 'SCM', 'SCM'],
        ['1 000 – 10 000 EUR', '3 devis écrits', 'Programme', 'SCM', 'Coordinateur terrain'],
        ['10 000 – 60 000 EUR', 'AO restreint + comité', 'Comité (programme, SCM, finance)', 'Coordinatrice pays', 'Coordinatrice pays'],
        ['> 60 000 EUR', 'AO ouvert', 'Comité', 'Coordinatrice pays + siège', 'Coordinatrice pays'],
      ],
    },
    result: "Votre niveau de validation est écrit : vous approuvez jusqu'à 10 000 EUR ; au-delà, la coordinatrice pays, puis le siège au-delà de 60 000 EUR.",
    tip: "Ajoutez une ligne « Urgence » : qui peut autoriser une procédure simplifiée, avec quelle justification écrite, et sous quel délai de régularisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Écrire la frontière SCM / logistique de votre mission',
    intro: "La frontière floue entre SCM et Log Manager est la première source de conflits de mandat. L'écrire noir sur blanc, avec des exemples de votre mission, évite les malentendus.",
    steps: [
      {
        title: 'Listez les décisions récurrentes',
        actions: [
          "Reprenez la table « Qui décide ? » et ajoutez 5 décisions réelles de votre mission.",
          "Pour chacune, notez qui décide, qui est consulté et qui est informé.",
        ],
      },
      {
        title: 'Validez-la avec les personnes concernées',
        actions: [
          "Passez 15 minutes avec le logisticien et 15 minutes avec chaque responsable programme ; corrigez, puis diffusez.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — extraits',
      lines: [
        "Planning des rotations de camions Wau → Gogrial : décide le logisticien ; informé le SCM.",
        "Choix du grossiste et prix : décide le SCM (sous 10 000 EUR) ; consulté le programme ; informé le coordinateur terrain.",
        "Réserve à réception (sacs déchirés) : décide le logisticien ; informé le SCM pour l'évaluation fournisseur.",
        "Calendrier des commandes de médicaments : décide le SCM avec le coordinateur médical.",
      ],
    },
    result: "Une page qui dit qui décide quoi, validée par les personnes concernées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Bloquer le temps SCM dans l\'agenda partagé',
    intro: "Si vous portez aussi la logistique, le travail SCM ne se fera que s'il est planifié. C'est la condition pour que votre positionnement tienne au-delà de la première semaine.",
    steps: [
      {
        title: 'Créez trois créneaux récurrents',
        actions: [
          "Planification des besoins avec les programmes (2 h par semaine).",
          "Contrôle des dossiers d'achat de la semaine (2 h par semaine).",
          "Mise à jour de la cartographie, de la matrice de fragilité et du plan d'action (1 h 30 par semaine).",
        ],
      },
      {
        title: 'Rendez-les visibles et protégés',
        actions: [
          "Placez-les dans l'agenda partagé de la mission, en récurrence hebdomadaire.",
          "Déléguez au logisticien les décisions d'exécution pendant ces créneaux.",
        ],
      },
    ],
    result: "Livrable L7 (partie 1) terminé : organigramme de décision, matrice de délégation, frontière SCM / logistique, créneaux SCM protégés.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 8 — RÉDIGER LA NOTE DE POSITIONNEMENT (JOUR 5)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 7',
    title: 'Ouvrir le template de note et préparer le document',
    intro: "Le template note-positionnement-scm-standards-bailleurs.docx structure votre note en 5 sections, avec 3 tableaux à 2 colonnes (bailleurs, validation, signature). Objectif : une page, deux au maximum, présentée à la coordination au 5e jour.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le template et enregistrez-le sous « L7_Note_positionnement_SCM_Kerowa_2026-03-06.docx ».",
          "Gardez l'en-tête et la phrase d'objectif telles quelles.",
          "Ouvrez à côté vos livrables L1 à L6 : vous n'écrivez rien de nouveau, vous synthétisez.",
        ],
      },
      {
        title: 'Repérez les zones à remplir',
        actions: [
          "Les textes en gris sous chaque titre sont des consignes : remplacez-les par votre contenu.",
          "Dans les tableaux, placez le curseur à la fin du libellé de la cellule, appuyez sur Entrée et saisissez votre contenu ; ou ajoutez une ligne (clic droit > Insérer > Insérer des lignes en dessous).",
        ],
      },
    ],
    result: "Le template est prêt, à côté des six livrables qu'il va résumer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 7',
    title: 'Section 1 — Contexte de la mission',
    intro: "Consigne du template : zone d'intervention, secteur(s) programme, date de prise de poste SCM. Trois à quatre lignes suffisent.",
    steps: [
      {
        title: 'Rédigez le contexte',
        actions: [
          "Zone et sites, secteurs, budget et bailleurs, date de prise de poste.",
          "Ajoutez une phrase sur l'état de la chaîne à votre arrivée (registre L1).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 1 remplie',
      lines: [
        "Gogrial, État du Warrap : centre de stabilisation nutritionnelle, service de pédiatrie, 2 cliniques mobiles. Secteurs : santé et nutrition. Budget 1 200 000 EUR (ECHO 85 %, fonds privés 15 %), 01/12/2025 – 30/11/2026.",
        "Prise de poste SCM : 02/03/2026. À l'arrivée : 5 flux actifs (40 190 EUR décaissés en 3 mois), aucune documentation centralisée, 4 dossiers d'achat incomplets.",
      ],
    },
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 7',
    title: 'Section 2 — Acteurs SCM identifiés',
    intro: "Consigne du template : principaux acteurs recensés (organisation – catégorie – flux concerné – niveau d'influence). Ne recopiez pas toute la cartographie : retenez les acteurs à influence élevée et ceux qui portent un risque.",
    steps: [
      {
        title: 'Sélectionnez et résumez',
        actions: [
          "Filtrez la cartographie L2 sur Influence = Élevé, puis ajoutez les acteurs classés orange ou rouge dans la matrice de fragilité.",
          "Écrivez une ligne par acteur au format du template ; terminez par le total et la répartition par catégorie.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 2 remplie',
      lines: [
        "Ministère de la Santé de l'État — Gouvernement hôte — F2 médicaments — Élevé (autorisation en attente).",
        "Agence onusienne — Agence onusienne — F3 RUTF — Élevé (source unique, dotation liée à nos rapports).",
        "Grossiste Wau — Secteur privé — F1 vivres — Élevé (fournisseur unique à ce jour).",
        "Transporteur Juba — Secteur privé — F2 / F5 — Moyen (unique sur l'axe, alternative à explorer via le Logistics Cluster).",
        "Cartographie complète en annexe : 9 acteurs (1 ONG, 2 onusiens, 1 gouvernement, 4 secteur privé, 1 bailleur).",
      ],
    },
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 7',
    title: 'Section 3 — Standards bailleurs applicables',
    intro: "Le tableau du template comporte deux colonnes : « Bailleur(s) principal(aux) identifié(s) » et « Exigences clés de conformité (seuils, traçabilité, délais) ». Vous y résumez le livrable L3.",
    steps: [
      {
        title: 'Remplissez le tableau',
        actions: [
          "Colonne 1 : bailleur, part du budget, période, date du prochain rapport.",
          "Colonne 2 : règles appliquées (règle la plus stricte), pièces du dossier d'achat, points en attente de clarification.",
          "Ajoutez une ligne par bailleur.",
        ],
      },
      {
        title: 'Ajoutez une phrase sur Sphère, CALP, IASC',
        actions: [
          "Résumez la fiche L4 en une phrase : ce qui n'est pas conforme et l'action engagée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 3 remplie',
      lines: [
        "Colonne 1 : ECHO — 85 % — 12/2025 à 11/2026 — rapport intermédiaire 15/06/2026.",
        "Colonne 2 : 3 devis dès 1 000 EUR, AO restreint dès 10 000 EUR, AO ouvert dès 60 000 EUR (règle la plus stricte) ; dossier d'achat en 8 pièces ; conservation 5 ans ; règles d'origine. À clarifier via la coordinatrice pays d'ici le 13/03 : dispense pour centrale d'achat, traitement des 3 écarts antérieurs, format de suivi des stocks.",
        "Standards : spécifications vivres réécrites (huile enrichie, sel iodé) ; clauses PSEA ajoutées par avenant aux contrats de transport ; coupons nutrition à l'étude → relevé de prix dès avril.",
      ],
    },
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 7',
    title: 'Section 4 — Positionnement dans la chaîne de décision achats',
    intro: "Le tableau du template comporte deux colonnes : « Mon niveau de validation (seuil) » et « Qui valide au-dessus de moi ». Vous y résumez la matrice de délégation (procédure 7).",
    steps: [
      {
        title: 'Remplissez le tableau',
        actions: [
          "Colonne 1 : ce que vous approuvez et signez, avec les montants.",
          "Colonne 2 : les niveaux supérieurs et leurs seuils, avec les délais de validation attendus.",
        ],
      },
      {
        title: 'Ajoutez votre positionnement en 2 phrases',
        actions: [
          "Rattachement hiérarchique et fonctionnel ; périmètre SCM / logistique ; créneaux SCM protégés.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 4 remplie',
      lines: [
        "Colonne 1 : approbation de tout achat jusqu'à 10 000 EUR ; signature des PO jusqu'à 1 000 EUR ; membre de tous les comités d'évaluation.",
        "Colonne 2 : coordinateur terrain (signature PO 1 000 – 10 000 EUR, sous 48 h) ; coordinatrice pays (10 000 – 60 000 EUR, sous 5 jours) ; siège (> 60 000 EUR).",
        "Positionnement : SCM rattaché au coordinateur terrain, lien fonctionnel avec le référent SCM régional ; supervise logisticien et assistante achats. Aucun achat ≥ 1 000 EUR ne sera engagé sans passage par la fonction achats.",
      ],
    },
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 7',
    title: 'Section 5 — Arbitrages et risques identifiés',
    intro: "Le template demande trois éléments : l'arbitrage achat local vs import (Nexus) et sa justification ; les risques ou blocages repérés ; l'action proposée pour vérifier ou lever chaque blocage avant engagement.",
    steps: [
      {
        title: 'Remplissez les trois rubriques',
        actions: [
          "Arbitrage : reprenez la conclusion de la note d'arbitrage L6 en 2 lignes, avec les chiffres.",
          "Risques : les rouges et oranges de la matrice L5.",
          "Actions : les lignes du plan d'action, avec responsable et échéance.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 5 remplie',
      lines: [
        "Arbitrage : farine et haricots achetés à Wau (635 vs 715 EUR/t rendu, délai 7 j vs 21–35 j, part de marché 1,8 %) via accord-cadre de 6 mois après AO restreint ; stock de précaution de 2,75 t avant le 15/05 ; huile enrichie et sel iodé en import si non conformes localement.",
        "Risques : (1) autorisation d'importation des médicaments, rupture possible vers le 09/04 ; (2) dotation RUTF liée à la ponctualité de nos rapports ; (3) grossiste unique à Wau ; (4) transporteur unique sur Juba → Gogrial.",
        "Actions : relance au Ministère le 06/03 (coordinateur médical), escalade nationale le 20/03 (coordinatrice pays), plan B prêt inter-ONG ; rapport RUTF avant le 5 de chaque mois ; 2 grossistes qualifiés d'ici le 27/03 ; services communs du Logistics Cluster explorés d'ici le 13/03.",
      ],
    },
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 7 sur 7',
    title: 'Relire, signer et présenter la note à la coordination',
    intro: "Présentée avant la fin de votre première semaine, cette note est ce qui distingue un SCM déjà opérationnel d'un SCM encore en phase de découverte.",
    steps: [
      {
        title: 'Relisez avec 4 contrôles',
        actions: [
          "Longueur : 1 page, 2 au maximum (annexes : cartographie, tableau des seuils, plan d'action).",
          "Chiffres : chaque montant et chaque date de la note se retrouvent dans un livrable L1 à L6.",
          "Actions : chacune a un responsable et une échéance.",
          "Ton : factuel, sans mise en cause personnelle de l'équipe précédente.",
        ],
      },
      {
        title: 'Signez et présentez',
        actions: [
          "Complétez « Rédigé par (nom, fonction) » et « Date », exportez en PDF.",
          "Envoyez-la la veille ou le matin même ; présentez-la en 10 minutes : 2 min contexte, 3 min risques, 3 min décisions demandées, 2 min positionnement.",
          "Notez les décisions prises en réunion et mettez à jour le plan d'action le jour même.",
        ],
      },
    ],
    result: "Livrable L7 terminé : note de positionnement signée, présentée, avec les décisions de la coordination intégrées au plan d'action.",
    pitfall: "Présenter la note comme un rapport d'étonnement (« rien n'est documenté ») : présentez des faits, des risques chiffrés et des décisions à prendre.",
  },
  {
    type: 'checklist',
    title: 'Routine hebdomadaire : garder la cartographie vivante',
    items: [
      "Chaque vendredi, ouvrez L2 et mettez à jour la colonne « Statut info / MAJ » de chaque acteur dont la situation a changé (nouveau fournisseur, nouveau point focal, blocage résolu).",
      "Rajoutez tout nouvel acteur rencontré dans la semaine, avec sa catégorie exacte, et vérifiez que « Acteurs non catégorisés » reste à 0.",
      "Recalculez la matrice de fragilité : un rouge résolu passe en vert, un nouvel acteur unique devient orange.",
      "Passez en revue le plan d'action : statut de chaque ligne, échéances dépassées, escalades à déclencher.",
      "Ajoutez au registre L1 les transactions de la semaine et contrôlez leur page de garde de dossier d'achat.",
      "Vérifiez la date de révision des arbitrages local / import en cours et le dernier relevé de prix.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU — WARRAP, DE BOUT EN BOUT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/5) — Décoder la passation : chaque phrase devient un chantier',
    scenario: "Rappel : prise de poste SCM sur une mission médicale et nutritionnelle de l'État du Warrap, ouverte depuis 3 mois sans SCM. Passation d'une demi-journée, quatre phrases incomplètes, premier point de coordination dans 5 jours.",
    steps: [
      { title: '« Je ne sais plus qui a validé quoi »', body: "Problème de traçabilité des achats et de chaîne de décision.", result: "Traité par P1 (registre et écarts), P3 (dossier type, notes au dossier) et P7 (matrice de délégation)." },
      { title: '« Autorisation d\'importation en attente depuis 6 semaines »', body: "Blocage administratif sur un flux critique, sans plan d'action.", result: "Traité par P2 (acteur Gouvernement hôte, influence élevée) et P5 (matrice de fragilité, plan d'action daté, alerte)." },
      { title: '« ECHO veut une traçabilité stricte »', body: "Exigence bailleur non traduite en pratique.", result: "Traité par P3 (lecture de la convention, règle la plus stricte, 8 pièces par dossier, questions au point focal)." },
      { title: '« Point focal Logistics Cluster jamais contacté »', body: "Acteur de coordination inexploité, alors qu'il peut fournir information et services communs.", result: "Traité par P2 (cartographie) et P5 (action B1 : contact sous 48 h)." },
    ],
    tip: "Toute passation, même bâclée, se décode ainsi : une phrase = un constat = une procédure = un livrable.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/5) — La cartographie finale des acteurs',
    scenario: "Résultat du Jour 2, après vérification des lignes d'exemple du template et ajout de la catégorie Bailleur.",
    steps: [
      { title: 'Raisonnement', body: "On part des 5 flux du registre, on déroule chaque chaîne de l'amont vers l'aval, puis on ajoute les acteurs transversaux. Chaque cote d'influence est justifiée par la grille (bloquer seul / retarder / marginal)." },
    ],
    table: {
      columns: ['Organisation', 'Catégorie', 'Flux', 'Influence', 'Alternative'],
      rows: [
        ['Grossiste Wau — marché central', 'Secteur privé / Fournisseur', 'Achats — F1', 'Élevé', 'Non (à créer)'],
        ['Fournisseur Juba (vivres)', 'Secteur privé / Fournisseur', 'Achats — F1', 'Faible', 'Oui'],
        ['Transporteur Juba', 'Secteur privé / Fournisseur', 'Transport — F2, F5', 'Moyen', 'À explorer'],
        ['Agent en douane Juba', 'Secteur privé / Fournisseur', 'Douane / Import — F2', 'Moyen', 'Oui'],
        ['Ministère de la Santé de l\'État', 'Gouvernement hôte', 'Douane / Import — F2', 'Élevé', 'Non'],
        ['Agence onusienne — pipeline nutrition', 'Agence onusienne', 'Distribution — F3', 'Élevé', 'Non'],
        ['Point focal Logistics Cluster', 'Agence onusienne', 'Transport & stockage', 'Moyen', 'Sans objet'],
        ['ONG partenaire de distribution', 'ONG', 'Distribution — cliniques mobiles', 'Moyen', 'Non'],
        ['ECHO', 'Bailleur', 'Tous flux imputés', 'Élevé', 'Sans objet'],
      ],
    },
    result: "9 acteurs, 0 non catégorisé ; quatre familles plus le bailleur représentés ; trois acteurs à influence élevée sans alternative.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/5) — L\'exigence de traçabilité ECHO : ce que l\'on sait, ce qu\'il reste à clarifier',
    scenario: "Le coordinateur terrain ne savait pas ce qu'implique « traçabilité stricte dès le premier rapport intermédiaire ». Voici la réponse construite au Jour 3.",
    steps: [
      { title: 'Ce que l\'on sait (lecture de la convention)', actions: ["Les règles d'achat de la convention s'appliquent à toutes les dépenses imputées au projet.", "Le bailleur dispose d'un droit d'audit et de contrôle sur pièces.", "Les documents sont à conserver pendant la durée prévue par la convention après le rapport final."] },
      { title: 'Ce que nous appliquons dès maintenant', actions: ["Tableau des seuils applicables (règle la plus stricte).", "Dossier d'achat en 8 pièces avec page de garde.", "Notes au dossier pour T01, T02, T07 ; vérification de la justification de T05."] },
      { title: 'Ce qu\'il reste à clarifier (via la coordinatrice pays, avant le 13/03)', actions: ["Dispense de mise en concurrence pour la centrale d'achat.", "Signalement des écarts antérieurs dans le rapport intermédiaire.", "Format attendu du suivi des stocks et des consommations.", "Application des règles d'origine aux vivres achetés à Juba."] },
    ],
    result: "La phrase floue « traçabilité stricte » est devenue une liste de pratiques appliquées et 4 questions précises en attente de réponse.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/5) — Le blocage sur l\'autorisation d\'importation et l\'arbitrage des vivres',
    scenario: "Deux décisions à préparer pour la coordination : que faire du blocage sur les médicaments, et où acheter les vivres non périssables des 6 prochains mois.",
    steps: [
      { title: 'Blocage médicaments : raisonnement', body: "Couverture de stock de 5 semaines < délai d'importation après autorisation (4 à 6 semaines) → rupture possible vers le 9 avril. Le maillon est rouge.", actions: ["Comprendre : copie de la demande récupérée (04/03).", "Relancer : visite au Ministère avec le coordinateur médical et lettre signée par la coordinatrice pays (06/03).", "Plan B : prêt inter-ONG documenté, à activer si aucune réponse au 20/03.", "Escalade : niveau national par la coordinatrice pays (20/03)."] },
      { title: 'Vivres : raisonnement', body: "Même spécification, coût rendu 635 vs 715 EUR/t, délai 7 vs 21–35 jours, part de marché 1,8 %, matrice 4,30 vs 3,00.", result: "Achat local à Wau en accord-cadre après AO restreint (valeur estimée 10 478 EUR), stock de précaution de 2,75 t avant le 15 mai, huile enrichie et sel iodé importés si non conformes localement." },
    ],
    pitfall: "Proposer « importer depuis Juba parce que c'est ce qu'on a toujours fait » : à l'approche de la saison des pluies, c'est l'option la plus lente et la plus chère.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/5) — La note de positionnement finale',
    scenario: "Voici la note présentée le vendredi 6 mars à 14 h, telle que remplie dans le template (version condensée).",
    steps: [
      { title: 'Ce que la coordination a décidé en réunion', actions: ["Lettre de relance au Ministère signée séance tenante.", "Matrice de délégation validée : aucun achat ≥ 1 000 EUR sans passage par la fonction achats.", "Lancement de l'AO restreint vivres le 10 mars.", "Questions au bailleur transmises par la coordinatrice pays le 9 mars."] },
    ],
    example: {
      title: 'Note de positionnement SCM — Kerowa Santé, Gogrial (extrait)',
      lines: [
        "1. Contexte — Gogrial (Warrap), santé et nutrition, 1 200 000 EUR (ECHO 85 %), prise de poste 02/03/2026 ; 5 flux, 40 190 EUR décaissés, 4 dossiers incomplets.",
        "2. Acteurs — 9 cartographiés ; influence élevée sans alternative : Ministère de la Santé (F2), pipeline RUTF (F3), grossiste Wau (F1).",
        "3. Standards bailleurs — ECHO : règle la plus stricte appliquée (3 devis ≥ 1 000 EUR ; AO restreint ≥ 10 000 EUR) ; dossier en 8 pièces ; 4 points à clarifier d'ici le 13/03. Specs vivres réécrites selon Sphère ; avenants PSEA transport.",
        "4. Positionnement — J'approuve jusqu'à 10 000 EUR ; coordinateur terrain au-dessus pour la signature, coordinatrice pays ≥ 10 000 EUR, siège ≥ 60 000 EUR.",
        "5. Arbitrages & risques — Vivres achetés à Wau (−80 EUR/t, −2 à 4 semaines) ; rupture de médicaments possible le 09/04 : relance 06/03, escalade 20/03, plan B prêt inter-ONG.",
        "Rédigé par : Supply Chain Manager — 06/03/2026.",
      ],
    },
    result: "Le cas est résolu : deux fichiers complétés (cartographie et note), une note d'une page appuyée sur des annexes chiffrées, et des décisions obtenues dès la première réunion.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Prise de poste SCM sur une mission WASH et abris',
    instructions: "Vous prenez le poste de SCM de l'ONG fictive Lumen Eau & Abri, dans le département du Mayo-Tsanaga (Extrême-Nord du Cameroun), ouverte depuis 4 mois. Données de passation : 1 200 ménages de 6 personnes assistés ; deux bailleurs (un bailleur institutionnel, 60 % du budget, et un fonds humanitaire commun, 40 %) aux règles différentes ; kits d'hygiène achetés à un fournisseur unique de Douala ; bâches pré-positionnées par une agence onusienne ; coupons abris échangés chez 6 commerçants locaux, dont les prix ont augmenté de 12 % en 3 semaines ; une exonération de TVA demandée au ministère il y a 2 mois, sans réponse ; un transporteur Douala → Maroua sans code de conduite signé. Pour le savon (Sphère : 250 g de savon de toilette par personne et par mois), la savonnerie régionale de Maroua propose 1,10 EUR/kg rendu, 5 jours de délai, 1 200 kg par mois au maximum ; le fournisseur de Douala propose 0,85 EUR/kg départ + 0,40 EUR/kg de transport, 18 jours de délai, sans limite de volume.",
    steps: [
      { title: 'Recensez les flux (P1)', actions: ["Construisez le registre des flux avec au moins 5 flux, leur origine, leur fréquence et leur bailleur d'imputation."] },
      { title: 'Cartographiez les acteurs (P2)', actions: ["Complétez cartographie-supply-chain-acteurs.xlsx avec au moins 8 acteurs, influences justifiées, synthèse par catégorie à 0 non catégorisé."] },
      { title: 'Établissez le tableau des seuils applicables (P3)', actions: ["Décrivez comment vous traiterez deux bailleurs aux règles différentes (imputation, règle la plus stricte) et listez vos questions aux deux points focaux."] },
      { title: 'Remplissez la fiche de contrôle des standards (P4)', actions: ["Sphère (savon, bâches), CALP (coupons et hausse des prix de 12 %), IASC (transporteur sans code de conduite)."] },
      { title: 'Construisez la matrice de fragilité et le plan d\'action (P5)', actions: ["Traitez au minimum l'exonération de TVA, le fournisseur unique de kits et la hausse de prix chez les commerçants."] },
      { title: 'Arbitrez le savon local vs Douala (P6)', actions: ["Calculez le besoin mensuel, le coût rendu des deux options, remplissez la matrice pondérée et formulez la décision."] },
      { title: 'Rédigez la note de positionnement (P7–P8)', actions: ["Remplissez note-positionnement-scm-standards-bailleurs.docx, sections 1 à 5."] },
    ],
    deliverable: "Les deux fichiers complétés (cartographie .xlsx et note de positionnement .docx, 2 pages maximum), accompagnés en annexe du registre des flux, du tableau des seuils, de la matrice de fragilité avec plan d'action et de la matrice d'arbitrage du savon.",
  },
  {
    type: 'concept',
    title: 'Exercice 1 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Comparez votre travail à ces repères. D'autres choix sont acceptables s'ils sont justifiés par les données et documentés.",
    example: {
      title: 'Arbitrage du savon — calcul attendu',
      lines: [
        "Besoin : 1 200 ménages × 6 personnes = 7 200 personnes × 0,25 kg = 1 800 kg par mois.",
        "Coût rendu : Maroua 1,10 EUR/kg ; Douala 0,85 + 0,40 = 1,25 EUR/kg → Maroua moins cher de 0,15 EUR/kg.",
        "Capacité : Maroua plafonne à 1 200 kg/mois, soit 67 % du besoin.",
        "Décision attendue : approvisionnement mixte — 1 200 kg/mois à Maroua, 600 kg/mois depuis Douala (ou constitution d'un stock tampon), avec suivi de la capacité de la savonnerie.",
        "Coût mensuel : 1 200 × 1,10 + 600 × 1,25 = 1 320 + 750 = 2 070 EUR (contre 2 250 EUR en tout-import).",
      ],
    },
    bullets: [
      "Deux bailleurs : chaque achat suit les règles du bailleur sur lequel il est imputé ; pour les achats partagés, appliquer la règle la plus stricte des deux.",
      "Coupons (CALP) : la hausse de 12 % en 3 semaines dépasse un repère d'alerte de 10 % → relevé de prix hebdomadaire, échange avec le programme sur le montant des coupons et sur l'élargissement à d'autres commerçants.",
      "Transporteur sans code de conduite (IASC) : avenant PSEA et liste nominative signée avant le prochain transport.",
      "Exonération de TVA : action, responsable, échéance, date d'escalade ; chiffrer l'impact budgétaire si elle n'est pas obtenue.",
      "Kits d'hygiène : fournisseur unique → orange ou rouge selon la couverture de stock ; qualifier une alternative.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Transposer à votre propre mission',
    instructions: "Appliquez les 8 procédures à votre mission actuelle ou à la dernière que vous avez connue. Si vous n'êtes pas en poste, utilisez une mission dont vous connaissez bien le contexte. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    steps: [
      { title: 'Jour 1', actions: ["Registre des flux des 3 derniers mois (ou d'une période connue), avec la liste des écarts de traçabilité."] },
      { title: 'Jour 2', actions: ["Cartographie des acteurs dans le template, avec votre grille d'influence écrite."] },
      { title: 'Jour 3', actions: ["Tableau des seuils applicables à partir de la convention réelle de votre bailleur principal, et fiche de contrôle des standards."] },
      { title: 'Jour 4', actions: ["Matrice de fragilité, plan d'action daté et un arbitrage local vs import chiffré sur un article réel."] },
      { title: 'Jour 5', actions: ["Matrice de délégation et note de positionnement d'une page."] },
    ],
    tip: "Anonymisez les données sensibles (noms de fournisseurs, prix négociés) si vous partagez votre travail en dehors de votre organisation.",
    deliverable: "Votre propre kit de prise de poste (L1 à L7), réutilisable à chaque nouvelle affectation.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Le registre des flux recense toutes les transactions de la période, regroupées en flux codés, avec une colonne « Écart » et la source de chaque information.",
      "La cartographie compte au moins 8 acteurs, couvre les quatre familles (plus le bailleur), et la cellule « Acteurs non catégorisés » vaut 0.",
      "Chaque niveau d'influence est justifié par une phrase et chaque acteur a un contact et un statut daté.",
      "Le tableau des seuils cite la référence de chaque exigence du bailleur et indique pour chaque règle d'où vient la règle appliquée.",
      "Chaque flux a sa ligne de contrôle Sphère / CALP / IASC avec une action.",
      "Chaque blocage a au moins une action, un responsable nommé, une échéance et une date d'escalade.",
      "L'arbitrage local vs import compare des coûts rendus pour une même spécification, inclut un test de marché et une matrice dont les poids ont été fixés avant les notes.",
      "La note de positionnement tient sur 1 à 2 pages, remplit les 5 sections du template, et chaque chiffre se retrouve dans une annexe.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, CLÔTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Confondre SCM et logistique dans les rapports bailleurs : un rapport qui ne parle que de transport et de stockage, sans traçabilité des achats ni justification de conformité, fait perdre du crédit. → Structurez vos rapports selon les trois couches SCM : achats, conformité, planification.",
      "Importer par réflexe sans réévaluer le marché local. → Faites l'arbitrage chiffré (coût rendu, délai, test de marché) à chaque achat significatif et documentez-le.",
      "Appliquer des seuils génériques sans lire la convention du bailleur principal. → Construisez le tableau des seuils applicables avec la référence de chaque article.",
      "Laisser un blocage administratif dormir sans plan d'action daté. → Action, responsable, échéance et date d'escalade pour chaque blocage, dès le jour où il est découvert.",
      "Traiter la cartographie comme un exercice ponctuel de prise de poste. → Routine du vendredi : mise à jour des statuts, de la matrice de fragilité et du plan d'action.",
      "Se laisser absorber par l'opérationnel au point de ne plus faire le travail SCM. → Créneaux SCM récurrents et visibles dans l'agenda partagé.",
      "Corriger des pièces après coup au lieu de les régulariser. → Note au dossier datée et visée ; jamais de document antidaté.",
      "Écrire directement au bailleur en contournant la coordination. → Questions préparées par le SCM, transmises par la personne responsable de la relation contractuelle.",
      "Coter tous les acteurs « Élevé » ou utiliser des catégories approximatives. → Grille d'influence écrite et libellés exacts imposés par une liste déroulante.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez construit un registre des flux d'approvisionnement à partir des pièces comptables et des fiches de stock, et repéré les dossiers d'achat à régulariser.",
      "Vous avez rempli le template de cartographie des acteurs, avec une grille d'influence justifiée et une synthèse par catégorie contrôlée.",
      "Vous avez traduit les règles du bailleur principal en un tableau des seuils applicables et un dossier d'achat type en 8 pièces.",
      "Vous avez transformé Sphère, CALP et IASC en spécifications vérifiables, en suivi de prix et en clauses PSEA.",
      "Vous avez identifié les points de fragilité de chaque flux et bâti un plan d'action daté, avec alerte et escalade.",
      "Vous avez arbitré achat local vs import avec un coût rendu, un test de marché et une matrice pondérée, puis documenté la décision.",
      "Vous avez écrit votre matrice de délégation et rédigé la note de positionnement SCM prête à être présentée à votre coordination.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer la différence entre SCM et logistique avec un exemple concret de mon contexte, et dire pour une décision donnée si elle relève du Log Manager ou du SCM.",
      "Je peux citer ce que Sphère, CALP et IASC imposent concrètement à une chaîne d'approvisionnement, au-delà de leur définition.",
      "Je sais expliquer le Nexus humanitaire-développement et l'appliquer à un arbitrage achat local vs import chiffré.",
      "J'ai complété une cartographie d'acteurs avec le template fourni, synthèse par catégorie incluse.",
      "J'ai identifié le ou les bailleurs principaux et leurs exigences, et j'ai un tableau des seuils applicables.",
      "J'ai rédigé une note de positionnement SCM d'une page, prête à présenter à ma coordination.",
      "Mon tableau des seuils et ma page de garde du dossier d'achat sont prêts : ils serviront de base au module suivant sur le cycle des achats.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Prochain module : « Cycle Complet des Achats — De la RFQ à la PO ». Vous y mettrez en œuvre, achat par achat, le tableau des seuils et le dossier d'achat type construits ici : choix de la procédure selon le montant, demandes de devis, évaluation des offres et émission du bon de commande.",
  },
]
