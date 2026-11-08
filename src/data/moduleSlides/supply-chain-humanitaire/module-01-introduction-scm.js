// Module 01 — Introduction à la SCM Humanitaire — Standards et acteurs
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Introduction à la SCM Humanitaire — Standards et acteurs',
    hook: "Vous allez apprendre à distinguer votre futur rôle de Supply Chain Manager de celui d'un logisticien — une confusion qui, sur le terrain, coûte des postes mal calibrés et des rapports bailleurs refusés. À la fin de ce module, vous saurez cartographier la chaîne d'approvisionnement de votre mission et vous positionner correctement dès votre première semaine de poste.",
  },
  {
    type: 'objectives',
    items: [
      "Cartographier les acteurs d'une supply chain humanitaire (ONG, agences de l'ONU, gouvernements, fournisseurs) et identifier leurs intérêts, parfois contradictoires, dans votre contexte de mission.",
      "Distinguer clairement le rôle du Supply Chain Manager (SCM, qui pilote achats et conformité) de celui du Log Manager (responsable logistique, qui exécute transport et stockage) — une frontière souvent floue sur le terrain.",
      "Expliquer ce que les standards Sphère (qualité minimale de l'aide), CALP (transferts monétaires) et IASC (coordination inter-agences) imposent concrètement à une chaîne d'approvisionnement.",
      "Expliquer le Nexus humanitaire-développement (l'articulation entre urgence, développement et paix) et son impact direct sur vos choix d'approvisionnement (achat local vs. import).",
      "Vous positionner correctement dans l'organigramme de votre mission dès la prise de poste.",
    ],
  },
  {
    type: 'concept',
    title: 'SCM vs logistique : une confusion qui coûte cher',
    body: [
      "Sur le terrain, \"logisticien\" et \"Supply Chain Manager\" sont encore trop souvent utilisés comme synonymes. La logistique est l'exécution : faire rouler un camion, tenir un entrepôt, gérer un parc de véhicules, dédouaner une cargaison.",
      "La Supply Chain Management (SCM) est plus large : elle inclut cette exécution, mais y ajoute les achats (sourcing, mise en concurrence, gestion fournisseurs), la conformité bailleur (traçabilité, seuils d'autorisation, capacité à justifier chaque mouvement en cas d'audit) et la planification amont (anticiper les besoins, dimensionner les stocks, arbitrer entre achat local, import régional ou international).",
    ],
    highlight: "Un Log Manager répond à \"comment on livre ?\". Un Supply Chain Manager répond à \"d'où vient ce qu'on livre, à quel coût, sous quelles conditions de conformité, et est-ce la meilleure option disponible ?\"",
  },
  {
    type: 'comparison-table',
    title: 'Qui décide ? Log Manager ou Supply Chain Manager',
    columns: ['Situation terrain', 'Qui décide ?'],
    rows: [
      ['Un camion tombe en panne sur la route du dernier kilomètre', 'Le Log Manager — exécution pure.'],
      ['Le fournisseur habituel de vivres augmente ses prix de 30 %', "Le SCM — décision d'achat et de sourcing."],
      ["Un bailleur (ECHO, USAID/BHA) exige une preuve de mise en concurrence au-delà d'un certain montant", 'Le SCM — conformité bailleur.'],
      ["Il faut réorganiser l'entrepôt pour gagner de la place", 'Le Log Manager — exécution opérationnelle.'],
      ['Faut-il acheter localement ou importer ce trimestre ?', 'Le SCM, en concertation avec les programmes — décision stratégique encadrée par le Nexus.'],
    ],
  },
  {
    type: 'comparison-table',
    title: "Quatre familles d'acteurs, quatre intérêts différents",
    columns: ['Acteur', 'Son intérêt principal'],
    rows: [
      ['Les ONG (nationales et internationales)', 'Livrer vite, bien, et de façon traçable — sous pression constante de justification bailleur.'],
      ["Les agences de l'ONU (PAM, UNHCR, UNICEF...)", "Couvrir l'ensemble d'un secteur, pas seulement leurs propres bénéficiaires (ex. le Logistics Cluster coordonné par le PAM)."],
      ['Les gouvernements hôtes', "Garder la souveraineté sur ce qui entre et circule sur leur territoire (autorisations, douanes, accès) — parfois en tension avec l'urgence humanitaire."],
      ['Le secteur privé et les fournisseurs', 'Un intérêt commercial : marge, volume, fidélisation. Ni bien ni mal — un fait à intégrer dans toute négociation.'],
    ],
  },
  {
    type: 'concept',
    title: 'Ne présumez jamais un intérêt aligné avec le vôtre',
    body: "Un gouvernement hôte peut retarder une exonération douanière pour des raisons politiques sans lien avec votre urgence. Une agence de l'ONU coordinatrice peut avoir des priorités de couverture différentes des vôtres. Cartographier ces acteurs n'est pas un exercice administratif : c'est ce qui vous permet d'anticiper les points de friction avant qu'ils ne bloquent un convoi.",
    highlight: "Un acteur n'a pas nécessairement les mêmes intérêts que vous simplement parce qu'il est \"humanitaire\".",
  },
  {
    type: 'comparison-table',
    title: "Sphère, CALP, IASC : ce qu'ils imposent à votre chaîne d'approvisionnement",
    columns: ['Standard', 'Ce que cela impose concrètement'],
    rows: [
      ['Sphère (Sphere Handbook)', "Standards minimaux de qualité et de dignité (eau, abris, nutrition, santé). Vos spécifications d'achat doivent les intégrer dès le cahier des charges fournisseur, pas les découvrir après livraison."],
      ['CALP (Cash and Voucher Assistance)', "Réseau de référence sur les transferts monétaires et coupons. Quand un programme bascule vers du cash, votre rôle SCM se déplace vers la qualification de commerçants locaux et la surveillance des prix du marché."],
      ['IASC (Inter-Agency Standing Committee)', "Cadres de coordination inter-agences, notamment sur la redevabilité envers les populations affectées (AAP) et la protection contre l'exploitation et les abus (PSEA) — une vigilance directe sur vos partenaires de distribution et de transport."],
    ],
  },
  {
    type: 'concept',
    title: 'Le Nexus humanitaire-développement : un critère d\'arbitrage d\'achat',
    body: [
      "Le Nexus est l'articulation entre réponse humanitaire d'urgence, aide au développement et, dans certains contextes, consolidation de la paix. Une réponse qui ignore systématiquement les capacités locales et importe tout depuis l'extérieur peut affaiblir l'économie locale qu'elle est censée aider à stabiliser — et coûte souvent plus cher.",
      "Pour le Supply Chain Manager, ce n'est pas un concept de plaidoyer : avant de lancer un import par défaut, demandez-vous systématiquement si le marché local ou régional peut fournir ce dont vous avez besoin, à la qualité requise, dans les délais requis, sans distordre dangereusement les prix locaux.",
    ],
    highlight: "Cet arbitrage doit être documenté à chaque décision d'achat significative — pas laissé à l'habitude de \"on a toujours importé\". Des bailleurs comme ECHO peuvent vous demander de le justifier explicitement dans vos rapports.",
  },
  {
    type: 'comparison-table',
    title: 'Acheter local ou importer : peser les deux options',
    columns: ['Option', 'Avantages', 'Limites'],
    rows: [
      ['Acheter local', "Renforce l'économie locale, réduit les délais et les coûts de transport international.", 'Capacité de production locale limitée, risque de rupture du marché, contrôle qualité plus difficile.'],
      ['Importer', 'Contrôle qualité et disponibilité en volume garantis.', "Délais et coûts logistiques/douaniers plus élevés ; peut être perçu comme un désintérêt pour l'économie locale."],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'SCM vs logistique', definition: "La logistique exécute (transport, stockage, distribution) ; la SCM pilote (achats, conformité bailleur, planification amont) en incluant l'exécution logistique." },
      { term: 'Nexus', definition: "Articulation entre réponse humanitaire, développement et consolidation de la paix — appliquée en SCM à l'arbitrage achat local vs. import." },
      { term: 'CALP', definition: 'Cash and Voucher Assistance — réseau de référence sur les transferts monétaires et coupons, qui déplace le rôle du SCM vers la qualification de commerçants locaux.' },
      { term: 'Value chain (chaîne de valeur)', definition: "L'ensemble des étapes qui ajoutent de la valeur entre le fournisseur d'origine et le bénéficiaire final — votre positionnement dans cette chaîne détermine vos marges de manœuvre réelles." },
    ],
  },
  {
    type: 'process',
    title: 'Cartographier la supply chain de votre mission en 5 jours',
    steps: [
      { title: 'Jour 1 — Identifier les flux d\'approvisionnement existants', body: "À partir des documents disponibles (rapports bailleurs, plans d'achat, factures récentes), listez les flux en cours : quels articles, où, à quelle fréquence, pour quels programmes. Cherchez la structure générale, pas l'exhaustivité." },
      { title: 'Jour 2 — Cartographier les acteurs', body: "Dans le template cartographie-supply-chain-acteurs.xlsx, renseignez pour chaque acteur son rôle, le flux concerné et son niveau d'influence réel sur votre capacité à approvisionner." },
      { title: 'Jour 3 — Identifier les standards bailleurs applicables', body: 'Identifiez le ou les bailleurs principaux de votre mission (ECHO, USAID/BHA...) et leurs exigences spécifiques : seuils de mise en concurrence, documentation exigée, règles d\'éligibilité, délais de rapportage.' },
      { title: 'Jour 4 — Croiser cartographie des acteurs et flux', body: "Pour chaque flux majeur, identifiez qui sont réellement les acteurs impliqués et où se trouvent les points de fragilité — un acteur à influence élevée sans alternative est un risque à signaler immédiatement." },
      { title: 'Jour 5 — Se positionner dans la chaîne de décision achats', body: "Produisez votre note de positionnement SCM : une page qui synthétise la cartographie, les standards bailleurs identifiés, et votre positionnement dans l'organigramme de décision achats — à présenter à votre coordination avant la fin de la semaine." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas pratique — Prise de poste SCM, zone rurale du Warrap, Soudan du Sud',
    scenario: "Vous prenez le poste de Supply Chain Manager sur une mission médicale et nutritionnelle récemment ouverte, en place depuis 3 mois sans SCM. Votre passation, réalisée en une demi-journée, vous laisse ces éléments incomplets : une partie des vivres est achetée chez un grossiste à Wau, le reste importé depuis Juba sans traçabilité claire des validations ; une autorisation d'importation du Ministère de la Santé est en attente depuis 6 semaines ; ECHO, le bailleur du projet, exige une traçabilité stricte dès le premier rapport intermédiaire ; un point focal Logistics Cluster existe à Juba mais n'a jamais été contacté.",
    steps: [
      "Cartographier au moins 5 acteurs plausibles (grossiste local, fournisseur d'import à Juba, Ministère de la Santé, ECHO, point focal Logistics Cluster) avec leur rôle et leur niveau d'influence.",
      "Documenter le blocage sur l'autorisation d'importation avec une action, un responsable et une échéance.",
      "Clarifier ce qu'implique concrètement l'exigence de traçabilité ECHO, et ce qu'il reste à vérifier avec le point focal bailleur.",
      "Proposer un arbitrage achat local (Wau) vs. import (Juba) pour les prochaines commandes de vivres non périssables.",
    ],
  },
  {
    type: 'exercise',
    title: 'Cartographie des acteurs et note de positionnement',
    instructions: "Remplissez le template cartographie-supply-chain-acteurs.xlsx en listant au moins 5 acteurs plausibles pour le cas du Warrap, avec leur catégorie, leur rôle, le flux concerné et un niveau d'influence justifié. Rédigez ensuite la note de positionnement SCM avec le template note-positionnement-scm-standards-bailleurs.docx, en y intégrant le blocage sur l'autorisation d'importation, les exigences de traçabilité ECHO telles que vous les comprenez, et votre proposition d'arbitrage achat local vs. import.",
    deliverable: 'Les deux fichiers complétés, la note de positionnement ne dépassant pas 2 pages.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents de prise de poste',
    items: [
      'Confondre SCM et logistique dans les rapports bailleurs — ne parler que de transport et de stockage, sans traçabilité des achats, fait perdre du crédit auprès du bailleur.',
      "Ignorer le Nexus et importer par réflexe, sans réévaluer si le marché local peut fournir une option plus rapide et moins coûteuse.",
      "Appliquer des seuils ou règles de mise en concurrence génériques sans vérifier les exigences spécifiques du bailleur principal — au risque d'un rejet de dépenses en audit.",
      "Laisser un blocage administratif (ex. autorisation d'importation) sans plan d'action daté, avec un responsable et une échéance.",
      "Traiter la cartographie des acteurs comme un exercice ponctuel de prise de poste plutôt qu'un document vivant à mettre à jour à chaque information nouvelle.",
      "Se laisser absorber par l'opérationnel quotidien au point de ne plus jamais faire le travail qui justifie la fonction de SCM — si vous portez les deux casquettes, bloquez explicitement du temps pour le travail SCM.",
    ],
  },
  {
    type: 'recap',
    items: [
      'Je sais expliquer la différence entre SCM et logistique avec un exemple concret de mon contexte.',
      'Je sais distinguer, pour une décision donnée, si elle relève du Log Manager ou du Supply Chain Manager.',
      'Je peux expliquer ce que Sphère, CALP et IASC imposent concrètement à une chaîne d\'approvisionnement.',
      'Je sais expliquer le Nexus humanitaire-développement et l\'appliquer à un arbitrage achat local vs. import.',
      'J\'ai complété une cartographie d\'acteurs et une note de positionnement SCM prête pour ma coordination.',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 02 — Cycle Complet des Achats : de la RFQ à la PO.',
  },
]
