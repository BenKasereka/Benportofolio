// Module 02 — Évaluation des Besoins & Planification Logistique d'Urgence
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates) : théorie strictement utile
// à l'action, puis chaque procédure des 72 premières heures d'une urgence
// (déclencheur et MIRA, formulaire terrain, grille HEAT, CONOPS, validation et
// déblocage de stock, prépositionnement et stock tampon) découpée en étapes
// (une diapositive par étape), appliquée à un cas fil rouge unique (ONG Kemora
// Santé, crue de la Musi à Lukando, Nord-Kivu — cas fictif, suite du module 01),
// cas résolu, exercices sur le cas de Gonaïves (Haïti) et check-lists
// d'auto-contrôle.
export default [
  {
    type: 'cover',
    title: "Évaluation des Besoins & Planification Logistique d'Urgence",
    hook: "En 72 heures après le déclenchement d'une urgence, vous aurez en main une grille HEAT remplie et scorée zone par zone, un plan de contingence logistique (CONOPS) de deux pages validé par votre coordination, un déblocage de stock prépositionné ordonné dans les formes et une fiche de dimensionnement du stock tampon — exactement ce que produit un logisticien senior avec une information incomplète, étape par étape.",
  },
  {
    type: 'objectives',
    items: [
      "Confirmer un déclencheur, fixer H0 et exploiter un MIRA même préliminaire, en produisant une fiche déclencheur datée, l'analyse des lacunes du volet accès/infrastructures et un plan d'évaluation par zone.",
      "Construire, tester et déployer un formulaire HEAT sur Kobo Toolbox ou ODK avec un groupe WhatsApp d'alertes, en produisant un formulaire fonctionnel, un barème commun 0-4 et un protocole d'alerte bloquante.",
      "Consolider et scorer les données dans grille-evaluation-besoins-mira.xlsx (onglets Evaluation HEAT, Synthese et Ponderation), en produisant une grille remplie colonne par colonne et une liste de vérifications priorisées.",
      "Rédiger plan-contingence-conops-template.docx section par section, en produisant un CONOPS de deux pages au plus, avec objectifs mesurables, chaîne de décision et chronologie 0-72 h.",
      "Faire valider et diffuser le CONOPS, puis déclencher formellement un déblocage de stock prépositionné, en produisant un CONOPS signé et un ordre de déblocage écrit.",
      "Justifier un prépositionnement et dimensionner un stock tampon à partir de délais d'approvisionnement réels, en produisant une fiche de dimensionnement avec seuil de réapprovisionnement et plan d'audit.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne vous demande pas de retenir des définitions : il vous fait produire, dans l'ordre réel d'une urgence, les six livrables qu'un logisticien doit avoir en main au bout de 72 heures. Chaque livrable est construit étape par étape sur un même cas fil rouge, puis vous le refaites seul sur le cas de Gonaïves (Haïti).",
    ],
    bullets: [
      "Livrable 1 — Une fiche déclencheur, l'analyse des lacunes du MIRA et un plan d'évaluation par zone (H0 à H6).",
      "Livrable 2 — Un formulaire HEAT déployé sur Kobo Toolbox ou ODK, un barème commun et un groupe WhatsApp d'alertes (H6 à H24).",
      "Livrable 3 — La grille grille-evaluation-besoins-mira.xlsx remplie, avec sa synthèse de priorités et sa liste de vérifications (H24 à H48).",
      "Livrable 4 — Le CONOPS rédigé avec plan-contingence-conops-template.docx, sur deux pages au plus (H48 à H60).",
      "Livrable 5 — Le CONOPS validé et diffusé, un ordre de déblocage de stock et le bilan des 72 heures (H60 à H72).",
      "Livrable 6 — Une fiche de dimensionnement du stock tampon : cible, lieu, seuil de réapprovisionnement et audit (travail « à froid », hors urgence).",
    ],
    example: {
      title: 'Le cas fil rouge de tout le module (fictif mais réaliste)',
      lines: [
        "Organisation : Kemora Santé, l'ONG médicale fictive du module 01. Vous en êtes toujours le logisticien(ne) terrain, basé(e) à Lukando (Nord-Kivu, RDC), six semaines après votre arrivée.",
        "Événement : trois jours de pluies exceptionnelles ; dans la nuit du dimanche 26 au lundi 27 avril 2026, la Musi sort de son lit. Les trois sites de déplacés — Kasika, Mubimbi, Bweza, environ 35 600 personnes au total — sont touchés à des degrés très inégaux. Le BCZ de Lukando signale 9 cas suspects de choléra à Bweza sur les 14 derniers jours.",
        "H0 : lundi 27 avril 2026, 06h00 (appel de la coordinatrice). H+72 : jeudi 30 avril 2026, 06h00.",
        "Vos interlocuteurs (fictifs) : Dr Clarisse Kahindo, coordinatrice de projet à Lukando ; Jean-Marc Ilunga, coordinateur logistique pays à Goma ; Amina Sow, Logistics Cluster Officer Nord-Kivu ; Joseph Katembo, point focal sécurité ; Gloria Kavira, magasinière de la base de Lukando ; Fabrice Mbusa, chef chauffeur.",
        "Votre stock prépositionné : le hangar de la base de Lukando (kits choléra KCH-01, bâches, comprimés de purification d'eau), dernier inventaire daté du 02/04/2026.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Votre point de départ : un point de situation incomplet",
    body: [
      "Le lundi 27 avril à 05h40, la coordinatrice vous appelle. Tout ce qu'elle dit est oral, non daté et non vérifié — c'est la situation normale d'un déclenchement, et c'est la matière première de tout le module.",
    ],
    example: {
      title: 'Ce que vous avez noté dans votre carnet (H0, 06h00)',
      lines: [
        "« La Musi a débordé cette nuit. Le pont serait touché, je ne sais pas à quel point. »",
        "« Bweza serait coupé : l'infirmier de l'unité de traitement dit que la piste est impraticable, même à moto. »",
        "« Kasika a les pieds dans l'eau. Mubimbi, je ne sais pas. »",
        "« OCHA parle d'un MIRA en préparation, rien de publié, on ne sait pas quand. »",
        "« On a un stock au hangar de Lukando — kits choléra, bâches, comprimés — mais Gloria dit que le hangar est mouillé côté ruisseau, et le dernier inventaire date du 2 avril. »",
        "« Le siège veut un plan logistique complet et chiffré d'ici jeudi matin. »",
      ],
    },
    tip: "Recopiez chaque affirmation mot pour mot, avec l'heure et le nom de la personne. Vous allez les classer une par une en « confirmé », « à vérifier » ou « contredit » : sans trace écrite, vous ne saurez plus ce qui était un fait et ce qui était un « je crois ».",
  },
  {
    type: 'stat-callout',
    stat: '72 h',
    caption: "Le délai pour passer d'un événement mal connu à une réponse logistique chiffrée, validée et déjà en mouvement : zones scorées, CONOPS signé, stock débloqué selon la chaîne de décision.",
    context: "Passé ce délai, les décisions se prennent sans vous — ou sur la base d'un document que personne n'a écrit pour votre terrain. Le découpage H0-H6 / H6-H24 / H24-H48 / H48-H60 / H60-H72 de ce module suit ce délai.",
  },
  {
    type: 'concept',
    title: 'Pourquoi les 72 premières heures changent toutes les règles',
    body: [
      "En logistique de programme classique, vous avez le temps : un appel d'offres, plusieurs devis comparés, une validation budgétaire, un délai de livraison négocié. En phase de déclenchement — inondation, épidémie, afflux soudain de déplacés — ce temps n'existe pas. La question n'est plus « quel est le meilleur fournisseur ? » mais « qu'est-ce qui peut être sur place avant que des gens ne meurent faute d'eau, d'abri ou de traitement ? ».",
      "Cette contrainte justifie à elle seule quatre outils : l'évaluation rapide (MIRA), la grille de capacité logistique (HEAT), le plan de contingence (CONOPS) et le stock prépositionné. Ce sont des raccourcis méthodologiques pour décider vite avec une information incomplète, pas des procédures administratives de plus.",
    ],
    example: {
      title: 'Fil rouge — la même situation, deux logiques',
      lines: [
        "Logique de programme : « Quel transporteur est le moins cher pour 250 bâches Goma–Lukando ? » → trois devis, cinq jours, validation budgétaire.",
        "Logique de déclenchement : « Qu'est-ce qui peut être à Bweza avant jeudi matin, et que faut-il décider aujourd'hui pour que ce soit vrai ? » → comptage du hangar à 18h00, accès routier validé mercredi, ordre de déblocage signé.",
      ],
    },
    highlight: "Un logisticien senior ne cherche pas l'information parfaite dans les 72 premières heures : il cherche l'information suffisante pour ne pas se tromper de priorité.",
  },
  {
    type: 'comparison-table',
    title: 'Logistique de programme et logistique de déclenchement : ce qui change',
    columns: ['Critère', 'Programme classique', 'Déclenchement (0-72 h)'],
    rows: [
      ['Question centrale', "Quel est le meilleur fournisseur ?", "Qu'est-ce qui peut être sur place avant que des gens ne meurent faute d'eau, d'abri ou de traitement ?"],
      ['Sources', "Appel d'offres, devis comparés, délai négocié.", "Stock déjà prépositionné, fournisseurs déjà qualifiés ; les justificatifs d'achat se complètent après coup."],
      ['Information', "Complète et vérifiée avant la décision.", "Incomplète : on décide sur l'information suffisante et on marque ce qui reste à vérifier."],
      ['Validation', "Circuit budgétaire habituel.", "Chaîne de décision écrite à l'avance : qui débloque quoi, à quel niveau."],
      ['Outils', "Plan d'approvisionnement, tableaux de suivi.", "MIRA, grille HEAT, CONOPS, stock prépositionné."],
      ['Erreur typique', "Payer trop cher.", "Attendre une donnée complète : dans ce contexte, une faute — pas une prudence."],
    ],
  },
  {
    type: 'concept',
    title: "L'information suffisante : la règle de décision des 72 premières heures",
    body: [
      "Pour chaque point incertain, ne vous demandez pas « est-ce que je sais tout ? » mais répondez à trois questions avant de choisir entre attendre et agir.",
    ],
    bullets: [
      "Question 1 — Qu'est-ce qui change dans ma décision selon que l'information est vraie ou fausse ?",
      "Question 2 — Que me coûte l'attente (heures, personnes non couvertes, matériel immobilisé) ?",
      "Question 3 — Combien de temps faut-il pour vérifier, et par qui ?",
    ],
    example: {
      title: 'Fil rouge — le pont de la Musi, lundi 27/04 à 06h30',
      lines: [
        "Point incertain : « le pont de la Musi est-il praticable ? ».",
        "Q1 : vrai ou faux change tout — les camions de Goma passent ou restent bloqués.",
        "Q2 : attendre coûte 250 bâches immobilisées à Goma et un site de Bweza sans abri supplémentaire.",
        "Q3 : message au point focal Logistics Cluster, réponse attendue avant 10h00. En attendant, on planifie SANS le pont : le stock du hangar de Lukando devient l'hypothèse de travail.",
      ],
    },
    tip: "Pour chaque information, écrivez trois colonnes dans votre carnet : « Ce que je sais », « Ce que je suppose », « Ce que je vérifie avant H+… » avec un nom et une heure.",
    pitfall: "Attendre la publication du MIRA officiel avant d'agir. Il peut arriver après la fenêtre des 72 heures ; la grille HEAT existe précisément pour que la logistique ne reste pas bloquée.",
  },
  {
    type: 'concept',
    title: "MIRA : la photographie multi-sectorielle partagée",
    body: [
      "Le MIRA (Multi-Cluster/Sector Initial Rapid Assessment) est l'outil interagences standard des 24 à 72 heures suivant le déclenchement d'une crise majeure. Il est piloté par OCHA, en lien avec l'équipe humanitaire pays et les clusters, et vise une photographie partagée — santé, eau/assainissement, abris, sécurité alimentaire, protection — pour éviter que chaque agence reparte de zéro.",
      "Le piège du logisticien junior est de le prendre pour « le travail d'un autre secteur ». Le MIRA contient presque toujours un volet accès et infrastructures (routes, ponts, aéroports, marchés fonctionnels) qui vous concerne directement. S'il est absent ou trop générique, c'est à vous de le compléter.",
    ],
    bullets: [
      "Récupérez-le dès qu'il existe, même une version préliminaire à 30 % : elle donne le cadrage général (zones touchées, population estimée, premiers signalements).",
      "Ne vous reposez jamais dessus seul pour une décision logistique.",
    ],
    example: {
      title: 'Fil rouge — ce qu\'OCHA publie le 27/04',
      lines: [
        "27/04, 11h00 : Flash Update n°1 (alerte d'inondation, Lukando et Bweza).",
        "MIRA : « en préparation », version préliminaire annoncée pour mardi 28/04 à 10h00.",
        "Volet accès attendu : « routes endommagées dans le Sud-Lukando » — sans nom de tronçon, sans charge admissible, sans hauteur d'eau.",
      ],
    },
    highlight: "Le MIRA donne le contexte général ; il ne répond jamais à « puis-je faire rouler un camion de 10 tonnes sur cet axe demain matin ? ».",
  },
  {
    type: 'comparison-table',
    title: 'MIRA et grille HEAT : deux outils complémentaires',
    columns: ['', 'MIRA', 'Grille HEAT'],
    rows: [
      ['Qui la produit', "OCHA et les clusters, avec toutes les agences.", "Votre équipe logistique, zone par zone."],
      ['Quand', "24 à 72 h après le déclenchement ; stabilisation en plusieurs jours.", "H6 à H48, avec les moyens du bord (téléphone, WhatsApp, observation directe)."],
      ['Niveau de détail', "Secteur et zone administrative.", "Tronçon, ouvrage, site, entrepôt."],
      ['Question à laquelle elle répond', "Quels sont les besoins, où, dans quels secteurs ?", "Puis-je livrer, par où, avec quoi, et où la logistique est-elle le facteur limitant ?"],
      ['Statut', "Standard interagences.", "Méthode de scoring logistique propre à cette formation, pas un standard universel."],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les 4 axes de la grille HEAT (0 = aucune contrainte, 4 = bloquant)',
    columns: ['Axe', 'Ce qu\'il mesure', 'Exemple de question terrain'],
    rows: [
      ['H — Hasard', "Le danger physique résiduel qui pèse sur une opération logistique dans la zone.", "Y a-t-il un risque de récidive (nouvelle crue, répliques, rupture de digue) qui menace un entrepôt ou un convoi ?"],
      ['E — Exposition', "Le volume de population et d'infrastructures critiques exposé dans la zone.", "Combien de personnes dépendent d'un seul axe d'approvisionnement pour cette zone ?"],
      ['A — Accès', "La possibilité réelle, aujourd'hui, d'atteindre la zone par voie terrestre, fluviale ou aérienne.", "La route est-elle praticable pour un camion chargé, ou seulement pour un 4x4 à vide ?"],
      ['T — Transport', "La disponibilité de moyens de transport et de stockage utilisables dans l'immédiat.", "Reste-t-il un entrepôt sec et sécurisé encore debout dans un rayon exploitable ?"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Barème commun de travail : ce que signifie chaque note',
    columns: ['Note', 'H — Hasard', 'E — Exposition', 'A — Accès', 'T — Transport'],
    rows: [
      ['0', "Aucun danger identifié.", "Moins de 1 000 personnes exposées ou dépendantes.", "Route ou voie praticable par un camion chargé.", "Véhicules et stockage sec disponibles tout de suite, large marge."],
      ['1', "Danger faible, sans effet sur un convoi ou un entrepôt.", "1 000 à 5 000 personnes.", "Praticable en ralentissant (boue, eau inférieure à 10 cm).", "Moyens disponibles mais partagés, délai inférieur à 6 h."],
      ['2', "Récidive possible à plus de 72 h ou menace partielle.", "5 000 à 10 000 personnes.", "Véhicule léger ou 4x4 ; camion chargé avec précaution.", "Moyens disponibles sous 24 h ou stockage partiel."],
      ['3', "Récidive probable sous 72 h, entrepôt ou tronçon menacé.", "10 000 à 20 000 personnes.", "4x4, moto ou pirogue seulement ; camion chargé impossible.", "Moyens à chercher hors de la zone, stockage précaire."],
      ['4', "Danger actif : opérations impossibles sans risque vital.", "Plus de 20 000 personnes.", "Aucun accès terrestre.", "Aucun moyen de transport ni de stockage utilisable."],
    ],
  },
  {
    type: 'concept',
    title: 'Du score par axe au score de sévérité et au niveau de priorité',
    body: [
      "Chaque zone reçoit quatre notes de 0 à 4. Le tableur calcule un score de sévérité pondéré sur 4 : la somme de chaque note multipliée par le poids de son axe (25 % chacun par défaut, donc la moyenne des quatre notes). Un total de 16 sur la somme brute correspond à 4 sur 4 : la logistique elle-même est alors le facteur limitant de la réponse, pas seulement le manque de biens à distribuer.",
      "Règle d'ajustement de l'Exposition retenue dans ce module : ajoutez 1 point (maximum 4) si au moins 5 cas suspects d'une maladie épidémique ont été notifiés dans la zone sur les 14 derniers jours. Une inondation en zone à antécédent de choléra est aussi un facteur aggravant sanitaire, même sans cas confirmé.",
    ],
    bullets: [
      "Score de 3,00 ou plus : priorité « Critique ».",
      "Score de 2,00 à 2,99 : priorité « Élevée ».",
      "Score inférieur à 2,00 : priorité « Modérée ».",
      "À score égal : passe en premier la zone dont l'Exposition est la plus forte, puis celle dont la population est la plus importante.",
    ],
    example: {
      title: 'Fil rouge — calcul du site de Bweza',
      lines: [
        "Notes : H 3, E 4, A 3, T 4 → somme 14 ; score = 14 ÷ 4 = 3,50 → « Critique ».",
        "E : 11 800 personnes (tranche 10 000-20 000 = 3) + 1 point car 9 cas suspects en 14 jours = 4.",
      ],
    },
    pitfall: "Lire le score comme une mesure des besoins en biens. Une zone peut avoir peu de besoins matériels et un score très élevé parce que personne ne peut y accéder : c'est précisément l'information que le MIRA ne remonte pas.",
  },
  {
    type: 'concept',
    title: 'CONOPS : traduire une évaluation en décisions opérationnelles',
    body: [
      "Le CONOPS (Concept of Operations, ou plan de contingence logistique) transforme les scores de l'évaluation en décisions concrètes : quoi faire, avec quelles ressources, dans quel ordre, sous la responsabilité de qui. Ce n'est pas un rapport d'évaluation reformulé : c'est un document d'action, écrit pour qu'une équipe qui n'a pas participé à sa rédaction puisse l'exécuter dès la première lecture.",
    ],
    example: {
      title: 'Fil rouge — la différence entre un constat et une décision',
      lines: [
        "Constat d'évaluation : « Bweza est difficile d'accès. »",
        "Décision de CONOPS : « Valider avant H+60 (mercredi 29/04, 18h00) un accès pour camion de 6 t chargé entre Lukando et Bweza ; responsable : F. Mbusa ; critère : eau inférieure à 30 cm aux passages des km 121 et 126. »",
      ],
    },
    highlight: "Un CONOPS écrit pendant la crise est toujours de moins bonne qualité qu'un CONOPS-cadre préparé à froid par type de risque et simplement ajusté aux chiffres réels le jour J.",
  },
  {
    type: 'checklist',
    title: 'Les 6 questions auxquelles répond un bon CONOPS (dans cet ordre)',
    items: [
      "Quel est l'événement déclencheur, et depuis quand ?",
      "Quels sont les objectifs logistiques mesurables des 72 prochaines heures ?",
      "Quelles ressources sont déjà prépositionnées et mobilisables sans délai ?",
      "Qui décide quoi, et à quel niveau de la chaîne de décision ?",
      "Quelle est la chronologie heure par heure des 72 premières heures ?",
      "Qui sont les contacts clés à joindre à chaque étape ?",
    ],
  },
  {
    type: 'concept',
    title: 'Prépositionnement et stock tampon : pourquoi l\'approvisionnement normal ne suffit pas',
    body: [
      "Un délai d'approvisionnement (lead time) international classique — achat, transport, dédouanement, transport local — se compte en semaines. Une réponse déclenchée en 72 heures ne peut pas l'attendre : il faut avoir, avant la crise, une partie du stock physiquement positionnée près des zones à risque. C'est le prépositionnement.",
      "Le stock tampon est le volant de sécurité maintenu à ce point, dimensionné pour couvrir la période entre le déclenchement et l'arrivée du premier réapprovisionnement normal. Un seuil de réapprovisionnement déclenche automatiquement une commande de reconstitution dès que le tampon est entamé : on ne le remplit pas « quand on aura le temps ».",
    ],
    example: {
      title: 'Fil rouge — pourquoi le hangar de Lukando compte',
      lines: [
        "Lead time réel d'une commande Nairobi → Lukando : 8 à 11 jours (module 01 : 8 à 10 jours, plus un aléa de route).",
        "Si la Musi coupe le pont, aucune livraison de Goma n'arrive : le hangar de Lukando est la seule source des 72 premières heures.",
      ],
    },
    pitfall: "Constituer un stock tampon une fois, puis l'oublier deux ans, jusqu'à ce qu'une crise révèle que la moitié du matériel est périmé, volé ou stocké dans un entrepôt qui n'existe plus. Un stock tampon non audité n'est pas un stock tampon : c'est une ligne comptable.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire opérationnel du module',
    terms: [
      { term: 'MIRA', definition: "Évaluation multi-sectorielle rapide interagences, pilotée par OCHA et les clusters dans les 24-72 h suivant un déclenchement." },
      { term: 'Grille HEAT', definition: "Scoring de capacité logistique (Hasard, Exposition, Accès, Transport), complémentaire du MIRA, réalisé par l'équipe logistique elle-même." },
      { term: 'Score de sévérité', definition: "Moyenne pondérée des quatre notes HEAT d'une zone, sur 4 ; elle fixe le niveau de priorité (Critique, Élevée, Modérée)." },
      { term: 'CONOPS', definition: "Concept of Operations : plan de contingence logistique qui traduit une évaluation en décisions et en chronologie d'action." },
      { term: 'Déclencheur (trigger)', definition: "Seuil ou événement prédéfini qui active formellement une réponse d'urgence et le CONOPS correspondant." },
      { term: 'H0 / H+72', definition: "H0 est l'heure de confirmation du déclencheur ; H+72 est l'échéance des livrables, 72 heures plus tard." },
      { term: 'Prépositionnement', definition: "Stockage physique anticipé de biens au plus près des zones à risque, avant la crise." },
      { term: 'Stock tampon (buffer stock)', definition: "Volant de sécurité permanent, dimensionné pour couvrir le délai entre déclenchement et premier réapprovisionnement normal." },
      { term: 'Seuil de réapprovisionnement (reorder point)', definition: "Niveau de stock qui déclenche automatiquement une commande de reconstitution." },
      { term: 'Lead time', definition: "Délai d'approvisionnement réel, de la commande à la mise à disposition sur le point de stockage." },
      { term: 'Service Request Form (SRF)', definition: "Formulaire de demande de service commun au Logistics Cluster (stockage, transport routier ou aérien)." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Votre feuille de route des 72 heures',
    columns: ['Procédure', 'Fenêtre', 'Livrable produit'],
    rows: [
      ['1 — Confirmer le déclencheur et récupérer le MIRA', 'H0 à H6', 'Fiche déclencheur, analyse des lacunes du MIRA, plan d\'évaluation'],
      ['2 — Construire et déployer le formulaire de terrain', 'H6 à H24', 'Formulaire Kobo/ODK testé, barème commun, groupe WhatsApp d\'alertes'],
      ['3 — Consolider et scorer dans le tableur', 'H24 à H48', 'grille-evaluation-besoins-mira.xlsx remplie, synthèse, vérifications'],
      ['4 — Rédiger le CONOPS', 'H48 à H60', 'plan-contingence-conops-template.docx complété'],
      ['5 — Valider, diffuser et activer le prépositionnement', 'H60 à H72', 'CONOPS signé, ordre de déblocage, bilan des 72 heures'],
      ['6 — Dimensionner prépositionnement et stock tampon', 'À froid, hors urgence', 'Fiche de dimensionnement, seuil de réapprovisionnement, audit'],
    ],
  },

  // ───────────── PROCÉDURE 1 — Confirmer le déclencheur et récupérer le MIRA (H0-H6) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Confirmer le déclencheur et fixer H0 (fiche déclencheur)',
    intro: "H0 à H6. Avant de lancer quoi que ce soit, vous établissez ce qui s'est réellement passé, où, depuis quand, et qui a décidé d'activer la réponse. Intrants : votre carnet de l'appel de 05h40, un téléphone, un second interlocuteur.",
    steps: [
      {
        title: 'Posez les cinq questions de confirmation',
        actions: [
          "Appelez la coordinatrice, puis le coordinateur logistique pays, et posez cinq questions : Quoi ? Où ? Depuis quand ? Selon quelle source ? Qui décide d'activer la réponse ?",
          "Recoupez par au moins une seconde source indépendante (BCZ, gardien du hangar, chauffeur, point focal sécurité).",
          "Notez l'heure exacte de la confirmation : c'est elle qui fixe H0, donc l'échéance H+72.",
        ],
      },
      {
        title: 'Ouvrez la fiche déclencheur',
        actions: [
          "Créez le fichier AAAA-MM-JJ_Fiche-declencheur_[Zone].docx, ou une page datée de votre journal de coordination.",
          "Écrivez six lignes : événement, zones, H0, sources, seuil de déclenchement atteint (oui/non), décision d'activation et par qui.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche déclencheur, lundi 27/04 à 06h30',
      lines: [
        "Événement : crue de la Musi, nuit du 26 au 27/04, après 3 jours de pluie. Zones : sites de Bweza, Kasika, Mubimbi ; axe Goma–Lukando ; hangar de la base.",
        "H0 : 27/04 06h00 (confirmation Dr Kahindo) → H+72 : 30/04 06h00.",
        "Sources : Dr Kahindo (appel 05h40) ; gardien du hangar (eau à 10 cm au seuil, 06h10) ; infirmier de l'unité de Bweza (« piste coupée », 06h20).",
        "Seuil du CONOPS-cadre « Inondation + choléra » : un site de déplacés touché par l'eau ET alerte sanitaire active dans la zone de santé → atteint (9 cas suspects à Bweza en 14 jours, BCZ).",
        "Décision d'activation : Dr Clarisse Kahindo, 06h15, confirmée par J.-M. Ilunga à 06h30.",
      ],
    },
    result: "Une fiche d'une page qui dit à tout lecteur ce qui a déclenché la réponse, depuis quand, et quelle échéance en découle.",
    pitfall: "Démarrer le compte à rebours sans l'écrire. Sans H0 daté, personne ne peut dire si vous êtes à H+30 ou à H+50, et les objectifs « avant H+60 » perdent leur sens.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: "Demander l'état du MIRA à OCHA et au cluster",
    intro: "Vous ne refaites pas le travail d'OCHA : vous demandez si un MIRA est lancé ou prévu, par qui, avec quelle échéance, et si une version préliminaire existe déjà. Intrants : contacts OCHA et cluster de votre cartographie du module 01.",
    steps: [
      {
        title: 'Contactez les bonnes personnes',
        actions: [
          "Appelez le sous-bureau OCHA de Goma, puis écrivez-leur pour garder une trace.",
          "Appelez le point focal Logistics Cluster Nord-Kivu et le coordinateur du cluster Santé.",
          "Demandez : un MIRA est-il lancé ou prévu ? Quelle échéance ? Existe-t-il une version préliminaire, même à 30 % ? Y a-t-il un Flash Update ?",
        ],
      },
      {
        title: 'Rejoignez le circuit d\'information',
        actions: [
          "Demandez à être ajouté(e) à la liste de diffusion du MIRA et aux alertes d'accès.",
          "Notez dans le journal de coordination : interlocuteur, heure, réponse, prochaine échéance.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — message à OCHA Goma et réponses (27/04)',
      lines: [
        "07h30 — Objet : Kemora Santé — Lukando — état du MIRA après la crue de la Musi. « Bonjour, nous opérons à Lukando (unité de traitement du choléra à Bweza). Un MIRA est-il lancé ? Existe-t-il une version préliminaire ou un Flash Update ? Nous partagerons nos observations d'accès dès H+24. »",
        "11h00 — OCHA : Flash Update n°1 envoyé ; MIRA déclenché, version préliminaire à 30 % attendue mardi 28/04 à 10h00 ; volet accès confié au Logistics Cluster, sans date.",
        "08h40 — Amina Sow (Logistics Cluster) : pont de la Musi fermé depuis 04h00 par l'autorité routière « par précaution » ; pas d'avis écrit sur la charge admissible.",
      ],
    },
    result: "Vous savez si un MIRA existe, quand vous aurez sa version préliminaire, et qui porte le volet accès.",
    tip: "Proposez un échange : vous partagez vos observations d'accès après chaque reconnaissance. Un acteur qui donne reçoit plus vite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Lire le MIRA préliminaire et repérer ses lacunes pour la logistique',
    intro: "Une version préliminaire, même à 30 %, vaut mieux que rien. Vous la lisez avec une seule question : qu'est-ce qui manque pour décider d'un itinéraire, d'un mode de transport ou d'un point de stockage ? Cette liste devient le cahier des charges de votre formulaire.",
    steps: [
      {
        title: 'Passez le document au crible',
        actions: [
          "Ouvrez le MIRA (ou le Flash Update) et notez sa date et son niveau de complétion.",
          "Relevez ce qui vous sert : zones touchées, population estimée, premiers signalements sectoriels.",
          "Repérez le volet accès et infrastructures : routes, ponts, entrepôts, marchés, transporteurs.",
          "Pour chaque information utile à la logistique, notez : présente ou absente, niveau de détail, action pour la combler.",
        ],
      },
    ],
    table: {
      columns: ['Information utile à la logistique', 'Dans le MIRA ?', 'Niveau de détail', 'Action'],
      rows: [
        ['Population affectée par site', 'Oui', 'Estimation par zone de santé', 'Recouper avec BCZ et chefs de site (formulaire)'],
        ['État des routes', 'Partiel', '« Routes endommagées » sans tronçon', 'Noter A par site et par tronçon'],
        ['Charge admissible du pont de la Musi', 'Non', '—', 'Avis écrit via Logistics Cluster'],
        ['Entrepôts et stockage secs utilisables', 'Non', '—', 'Comptage du hangar et noter T'],
        ['Camions et transporteurs disponibles', 'Non', '—', 'Appel Transports Umoja et cluster'],
        ['Stocks prépositionnés des autres acteurs', 'Non', '—', 'Question en réunion de coordination'],
      ],
    },
    result: "Une liste de lacunes classées par action : c'est ce que votre grille HEAT doit combler, et rien d'autre.",
    pitfall: "Recopier le MIRA dans votre évaluation. Votre valeur ajoutée est exactement ce qu'il ne contient pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: "Choisir les zones à évaluer et constituer l'équipe d'évaluation",
    intro: "Une zone d'évaluation est une unité homogène que vous pouvez noter d'un seul score : un site, un tronçon ou un ouvrage, un entrepôt. En 72 heures, visez au plus huit zones : au-delà, la qualité de collecte chute.",
    steps: [
      {
        title: 'Découpez en zones et secteurs',
        actions: [
          "Listez les endroits qui conditionnent vos livraisons : sites de déplacés, ouvrages, axes, entrepôts.",
          "Donnez à chaque zone un libellé unique et court, que vous recopierez à l'identique partout (formulaire, grille, CONOPS).",
          "Classez par ordre de risque probable : une zone isolée et dense passe en premier.",
        ],
      },
      {
        title: "Affectez les évaluateurs et fixez les remontées",
        actions: [
          "Une personne par zone ou groupe de zones ; remplaçant nommé.",
          "Vérifiez moyens et batteries : téléphone, crédit de communication, véhicule, powerbank.",
          "Fixez les heures de remontée (toutes les 4 heures) et l'heure de la réunion de calage.",
        ],
      },
    ],
    table: {
      columns: ['Zone / secteur', 'Évaluateur', 'Moyen', 'Première remontée avant'],
      rows: [
        ['Site de Bweza', 'Évaluateur 1 (infirmier superviseur de l\'unité, appui à distance)', 'Téléphone', '27/04 14h00'],
        ['Site de Kasika', 'Évaluateur 2 (assistant logistique)', 'Pick-up + téléphone', '27/04 15h00'],
        ['Site de Mubimbi', 'Évaluateur 3 (animateur communautaire)', 'Moto + téléphone', '27/04 16h00'],
        ['Pont de la Musi (km 97)', 'Logisticien terrain (contacts cluster, autorité routière)', 'Téléphone', '27/04 12h00'],
        ['Entrepôt de Lukando (stock tampon)', 'Gloria Kavira, magasinière', 'Sur place', '27/04 18h00'],
      ],
    },
    result: "Livrable 1 terminé : fiche déclencheur, analyse des lacunes du MIRA et plan d'évaluation de cinq zones, chacune avec un responsable et une heure de première remontée.",
    tip: "Gardez-vous une zone « axe » : dans une inondation, c'est la route, pas le site, qui limite le plus souvent la réponse.",
  },

  // ───────────── PROCÉDURE 2 — Formulaire de terrain et WhatsApp (H6-H24) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Fixer le barème commun avant toute collecte',
    intro: "H6 à H12. La grille HEAT n'a de valeur que si tous les évaluateurs la lisent de la même façon, y compris sous pression. Envoyer des évaluateurs avec des critères différents en tête produit des scores impossibles à comparer entre zones.",
    steps: [
      {
        title: 'Adaptez le barème à votre contexte',
        actions: [
          "Reprenez le barème de travail (tableau des notes 0 à 4) et relisez chaque ligne avec votre équipe, 20 minutes.",
          "Adaptez les seuils d'Exposition à l'ordre de grandeur de vos sites si besoin, puis figez-les.",
          "Écrivez la règle d'ajustement épidémique : +1 point d'Exposition (maximum 4) à partir de 5 cas suspects en 14 jours.",
        ],
      },
      {
        title: 'Écrivez trois règles de saisie',
        actions: [
          "Règle du doute : en cas d'hésitation entre deux notes, retenez la plus élevée et marquez la donnée « à vérifier ».",
          "Règle des sources : une note issue d'une seule source indirecte est « À confirmer » ; une note observée ou croisée est « Confirmé ».",
          "Règle de la dépendance : pour un entrepôt ou un axe, la population est celle qui en dépend pour son approvisionnement.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — page unique « Règles HEAT Lukando », 27/04 à 12h30',
      lines: [
        "Seuils E retenus : 0 sous 1 000 · 1 de 1 000 à 5 000 · 2 de 5 000 à 10 000 · 3 de 10 000 à 20 000 · 4 au-delà. Ajustement +1 (max 4) si 5 cas suspects ou plus en 14 jours (source : BCZ).",
        "A : 3 = 4x4, moto ou pirogue seulement ; 4 = aucun accès terrestre. T : 4 = aucun moyen de transport ni de stockage utilisable sur place.",
        "Doute : on prend la note la plus haute et on coche « À confirmer ».",
        "Diffusion : PDF envoyé aux 4 évaluateurs et épinglé dans le groupe WhatsApp.",
      ],
    },
    pitfall: "Changer le barème en cours de collecte. Une note donnée à 14h avec l'ancien barème et une note donnée à 17h avec le nouveau ne sont plus comparables.",
    result: "Une page de règles, partagée, sur laquelle chaque évaluateur s'engage avant de partir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Créer le projet Kobo Toolbox et les questions d\'identification',
    intro: "Kobo Toolbox et ODK sont les deux plateformes de référence pour digitaliser une évaluation. Vous construisez le formulaire une fois sur ordinateur, vous le déployez sur les téléphones de l'équipe, et les réponses arrivent dans une base consultable, même après une collecte hors ligne.",
    steps: [
      {
        title: 'Créez le projet',
        actions: [
          "Connectez-vous à Kobo Toolbox (serveur de votre organisation ou kf.kobotoolbox.org).",
          "Cliquez sur NOUVEAU, puis Construire à partir de zéro ; nommez le projet « Evaluation HEAT — Lukando — 2026-04-27 ».",
        ],
      },
      {
        title: "Ajoutez les questions d'identification",
        actions: [
          "Ajoutez une question de type Date et heure, avec la valeur par défaut « maintenant ».",
          "Ajoutez Évaluateur (Texte), Zone / secteur (Choix unique avec la liste fermée de vos zones), Position (Point GPS) et Source de l'information (Choix unique).",
          "Ajoutez Population estimée exposée (Nombre entier, contrainte de 0 à 100000) et sa source.",
        ],
      },
    ],
    table: {
      columns: ['Nom de la question', 'Type', 'Choix / contrainte'],
      rows: [
        ['date_heure', 'Date et heure', 'Valeur par défaut : maintenant'],
        ['evaluateur', 'Texte', 'Obligatoire'],
        ['zone', 'Choix unique', '5 zones du plan d\'évaluation, libellés identiques à la grille'],
        ['position', 'Point (GPS)', 'Obligatoire sur site ; facultatif pour un appel'],
        ['source_info', 'Choix unique', 'Observation directe / Appel d\'une source fiable / Témoignage indirect'],
        ['population', 'Nombre entier', 'De 0 à 100000'],
      ],
    },
    tip: "Les libellés de la liste « zone » doivent être exactement ceux de votre grille Excel : vous éviterez de les retaper à la consolidation.",
    result: "Un projet Kobo vide avec six questions d'identification qui permettent de rattacher chaque réponse à une zone, une heure et une source.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Ajouter les quatre scores HEAT, les commentaires obligatoires et la photo',
    intro: "Le cœur du formulaire : quatre questions de score de 0 à 4, et un commentaire obligatoire dès qu'une note vaut 3 ou plus. Un score élevé sans explication est inexploitable à la consolidation.",
    steps: [
      {
        title: 'Créez les quatre scores',
        actions: [
          "Pour chaque axe (H, E, A, T), ajoutez une question Choix unique avec cinq réponses, de 0 à 4.",
          "Libellez chaque réponse avec son ancrage du barème, par exemple « 3 — 4x4, moto ou pirogue seulement ».",
          "Nommez les questions score_h, score_e, score_a, score_t.",
        ],
      },
      {
        title: 'Rendez le commentaire obligatoire à partir de 3',
        actions: [
          "Sous chaque score, ajoutez une question Texte « Commentaire — [axe] ».",
          "Ouvrez ses paramètres : Logique de saut (Skip logic), condition « score_a supérieur ou égal à 3 » ; cochez Réponse obligatoire.",
          "Ajoutez Besoin logistique (Choix multiple : Transport / Stockage / Dernier kilomètre / Autre), Statut (Confirmé / À confirmer), Alerte bloquante (Oui / Non) et Photo.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — équivalent XLSForm (ODK ou import Kobo)',
      lines: [
        "type : select_one score | name : score_a | label : Accès — A (0 à 4) | required : yes",
        "type : text | name : com_a | label : Commentaire — Accès | relevant : ${score_a} >= 3 | required : yes",
        "type : select_multiple besoin | name : besoin_log | label : Besoin logistique identifié",
        "type : select_one oui_non | name : alerte | label : Alerte bloquante ? | required : yes",
        "type : image | name : photo | label : Photo datée (facultative)",
      ],
    },
    pitfall: "Rendre tous les commentaires obligatoires. L'évaluateur écrit « RAS » pour passer : le commentaire ne doit s'imposer qu'à partir de 3.",
    tip: "Les libellés des menus varient selon la version et la langue de Kobo ; le principe reste « condition d'affichage + réponse obligatoire ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Tester, déployer et installer sur les téléphones (collecte hors ligne)',
    intro: "H12 à H18. Un formulaire jamais testé échoue toujours au pire moment : champ obligatoire qui bloque, GPS qui ne répond pas, liste sans la bonne zone. Testez à deux, déployez, puis installez sur chaque téléphone avant le départ des évaluateurs.",
    steps: [
      {
        title: 'Testez puis déployez',
        actions: [
          "Cliquez sur Aperçu et remplissez un faux enregistrement de bout en bout.",
          "Cliquez sur Déployer ; ouvrez le projet déployé puis Paramètres > Collecte de données.",
          "Remplissez un enregistrement test sur deux téléphones différents et vérifiez qu'il arrive dans l'onglet Données.",
        ],
      },
      {
        title: 'Installez KoboCollect',
        actions: [
          "Installez KoboCollect (Android) sur chaque téléphone d'évaluateur.",
          "Configurez le serveur avec le code QR de la page Paramètres du projet, puis téléchargez le formulaire vierge.",
          "Expliquez le mode hors ligne : remplir, Finaliser, puis Envoyer le formulaire dès qu'il y a du réseau.",
          "Supprimez les enregistrements de test avant la collecte réelle.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — journal de test, lundi 27/04',
      lines: [
        "15h30 — aperçu : un champ « Commentaire — Accès » bloquait à la note 2 ; condition corrigée (≥ 3).",
        "15h50 — test sur 2 téléphones (assistant logistique, animateur) : synchronisation réussie, 2 enregistrements visibles dans Données ; GPS lent en intérieur, consigne « attendre le point vert ».",
        "16h10 — formulaire téléchargé sur 4 téléphones ; enregistrements de test supprimés.",
      ],
    },
    result: "Un formulaire déployé, téléchargé hors ligne sur chaque téléphone, avec un test de bout en bout réussi.",
    pitfall: "Déployer sans tester sur un vrai téléphone de terrain. L'aperçu sur ordinateur ne montre ni la lenteur du GPS ni les problèmes de synchronisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: "Ouvrir le groupe WhatsApp d'alertes et fixer le format des messages",
    intro: "Kobo se synchronise quand le réseau le permet ; une route coupée, elle, se signale dans la minute. WhatsApp Business sert de canal temps réel pendant les 72 heures : messages courts, normalisés, lisibles d'un coup d'œil.",
    steps: [
      {
        title: 'Créez le groupe et ses règles',
        actions: [
          "Créez le groupe « HEAT Lukando — alertes » avec les évaluateurs, la coordinatrice et le point focal sécurité.",
          "Épinglez le message de règles : un message = une zone ; format normalisé ; aucune donnée personnelle ni photo de visage.",
          "Définissez l'alerte bloquante : un fait qui change la décision dans les 6 heures (route coupée, entrepôt inondé, incident sécuritaire).",
        ],
      },
      {
        title: 'Fixez le format',
        actions: [
          "ZONE | heure | notes H-E-A-T préliminaires | alerte oui/non | une ligne de précision.",
          "Préfixez toute alerte bloquante par « ALERTE BLOQUANTE : » en début de message.",
          "Ne remplacez pas le formulaire : le message prévient, Kobo documente.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — messages types du groupe, 27/04',
      lines: [
        "BWEZA | 14h05 | H3 E4 A4 T4 prélim. | alerte non | piste vers Lukando coupée selon infirmier, non observé, photo à suivre.",
        "ALERTE BLOQUANTE : PONT MUSI | 12h10 | fermé aux véhicules de plus de 3,5 t par l'autorité routière depuis 04h00 (source Logistics Cluster).",
        "KASIKA | 15h20 | H2 E3 A2 T2 | alerte non | boue sur la piste, camion léger passe, talus à surveiller.",
      ],
    },
    result: "Un groupe actif où chaque évaluateur sait quoi envoyer, à quel format, et dans quel cas lever une alerte.",
    tip: "Une alerte bloquante reçoit un accusé de réception de votre part en moins de 10 minutes : sinon, les évaluateurs cessent de les envoyer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: "Briefer, calibrer l'équipe et suivre la collecte",
    intro: "H18 à H24. Dernière protection contre des scores incomparables : vous notez ensemble deux cas réels avant de partir sur le terrain. Puis vous suivez la collecte avec un tableau simple, pas à l'intuition.",
    steps: [
      {
        title: 'Briefez et calibrez',
        actions: [
          "Briefing de 20 minutes : barème, formulaire, format WhatsApp, heures de remontée.",
          "Calibrage : montrez deux cas (photo d'un passage inondé, description d'un entrepôt) et faites noter chacun seul, puis comparez.",
          "Si l'écart dépasse 1 point sur un axe, discutez la différence et corrigez le barème par écrit avant de partir.",
        ],
      },
      {
        title: 'Suivez la collecte',
        actions: [
          "Ouvrez un tableau de suivi : zone, évaluateur, dernière remontée, statut, alerte.",
          "Relancez toute zone sans nouvelle depuis plus de 4 heures.",
          "Ouvrez l'onglet Données du projet Kobo à chaque point et comptez les réponses reçues.",
        ],
      },
    ],
    table: {
      columns: ['Zone', 'Évaluateur', 'Dernière remontée', 'Réponses Kobo', 'Alerte'],
      rows: [
        ['Site de Bweza', 'Évaluateur 1', '27/04 14h05', '1', 'Non'],
        ['Site de Kasika', 'Évaluateur 2', '27/04 15h20', '1', 'Non'],
        ['Site de Mubimbi', 'Évaluateur 3', '27/04 16h10', '1', 'Non'],
        ['Pont de la Musi', 'Logisticien terrain', '27/04 12h10', '1', 'Oui (fermé)'],
        ['Entrepôt de Lukando', 'Gloria Kavira', '27/04 17h50', '1', 'Non (comptage fait)'],
      ],
    },
    result: "Livrable 2 terminé : barème partagé, formulaire déployé, groupe d'alertes actif, cinq premières remontées reçues avant H+24.",
    pitfall: "Annoncer « tout est remonté » parce que le groupe WhatsApp est calme. Un silence de plus de 4 heures est une alerte en soi : ouvrez le téléphone de l'évaluateur concerné.",
  },

  // ───────────── PROCÉDURE 3 — Consolider et scorer dans le tableur (H24-H48) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 9',
    title: 'Ouvrir, renommer et préparer le tableur grille-evaluation-besoins-mira.xlsx',
    intro: "H24 à H30. Le classeur contient trois onglets : « Evaluation HEAT » (la grille que vous remplissez), « Synthese » (calculée automatiquement) et « Ponderation » (le poids de chaque axe). C'est cette sortie chiffrée, et non une impression générale, qui doit fonder vos priorités dans le CONOPS.",
    steps: [
      {
        title: 'Préparez votre copie',
        actions: [
          "Ouvrez grille-evaluation-besoins-mira.xlsx et enregistrez-le immédiatement sous AAAA-MM-JJ_Grille-HEAT_[Zone]_v01.xlsx.",
          "Dans l'onglet « Evaluation HEAT », repérez la ligne 4 : onze colonnes, de A (Zone / Secteur) à K (Commentaire / à vérifier).",
          "Repérez la zone de saisie : lignes 5 à 19, soit 15 zones au maximum, et la légende en ligne 21.",
        ],
      },
      {
        title: 'Videz les exemples sans casser les formules',
        actions: [
          "Les lignes 5 à 7 contiennent trois lignes d'exemple du cas de Gonaïves (Raboteau, Bigot, Accès entrepôt Saint-Marc).",
          "Sélectionnez A5:F7 puis appuyez sur Suppr ; sélectionnez H5:K7 puis appuyez sur Suppr.",
          "Ne touchez ni à la colonne G (formules), ni à l'onglet « Synthese », ni à la ligne 21.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fichier ouvert le mardi 28/04 à 06h00 (H+24)',
      lines: [
        "Nom : 2026-04-28_Grille-HEAT_Lukando_v01.xlsx",
        "A5:F7 et H5:K7 vidés ; colonne G intacte ; onglets Synthese et Ponderation non modifiés.",
        "Export Kobo téléchargé à côté : 2026-04-28_Export-Kobo_HEAT-Lukando.xlsx (5 réponses).",
      ],
    },
    pitfall: "Effacer les lignes d'exemple en bloc, colonne G comprise : le score disparaît sans message. Si cela arrive, recopiez la formule d'une ligne voisine (G8) vers le bas.",
    result: "Un fichier v01 daté, sans donnée d'exemple, dont les formules de score et de synthèse sont intactes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 9',
    title: 'Colonnes A et B — Zone / Secteur et Population estimée exposée',
    intro: "Ces deux colonnes doivent permettre à une personne qui n'a pas suivi l'évaluation de savoir ce qui est noté et combien de monde est concerné. Le libellé de zone se retrouvera tel quel dans la synthèse, le CONOPS et vos messages.",
    steps: [
      {
        title: 'Colonne A — Zone / Secteur',
        actions: [
          "Copiez-collez le libellé depuis l'export Kobo (colonne « zone »), un libellé par ligne.",
          "Faites apparaître le type dans le libellé : « Site de… », « Pont de… », « Entrepôt de… ».",
        ],
      },
      {
        title: 'Colonne B — Population estimée exposée',
        actions: [
          "Saisissez un nombre entier, sans unité ni texte.",
          "Pour un axe ou un entrepôt, appliquez la règle de la dépendance : saisissez la population qui en dépend pour son approvisionnement.",
          "Si deux sources divergent, saisissez le chiffre du BCZ et notez l'autre dans la colonne K.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — saisie des lignes 5 à 9',
      lines: [
        "A5 : Site de Bweza | B5 : 11800 (BCZ, chef de site : 12 300)",
        "A6 : Pont de la Musi (km 97) | B6 : 35600 (population des 3 sites dépendante de l'axe)",
        "A7 : Site de Kasika | B7 : 14200",
        "A8 : Site de Mubimbi | B8 : 9600",
        "A9 : Entrepôt de Lukando (stock tampon) | B9 : 35600 (population dépendante du stock)",
      ],
    },
    pitfall: "Saisir « 0 » pour un entrepôt ou un axe, comme dans la ligne d'exemple de Saint-Marc du template. Choisissez une règle de population et appliquez-la à toutes les lignes, sinon l'Exposition n'est pas comparable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 9',
    title: 'Colonnes C à F — Les quatre scores H, E, A et T',
    intro: "Les cellules C5:F19 n'acceptent que des nombres entiers de 0 à 4 : Excel refuse toute autre saisie. Vous reportez les notes de l'export Kobo, vous arbitrez les désaccords avec la règle du doute et vous contrôlez l'Exposition avec le barème.",
    steps: [
      {
        title: 'Reportez les notes',
        actions: [
          "Dans Kobo, ouvrez Données > Téléchargements, choisissez le type XLS puis Exporter ; ouvrez le fichier.",
          "Pour chaque zone, reportez score_h, score_e, score_a, score_t dans C, D, E et F.",
          "Si une zone a plusieurs réponses, retenez l'observation directe la plus récente.",
          "Relisez les messages WhatsApp postérieurs à la dernière synchronisation : une alerte peut avoir changé une note.",
        ],
      },
      {
        title: 'Arbitrez et contrôlez',
        actions: [
          "En cas de désaccord entre deux sources, appliquez la règle du doute : la note la plus haute, avec mention dans la colonne K.",
          "Recalculez E avec le barème : tranche de population, puis +1 si 5 cas suspects ou plus en 14 jours.",
        ],
      },
    ],
    table: {
      columns: ['Zone', 'H', 'E', 'A', 'T', 'Justification'],
      rows: [
        ['Site de Bweza', '3', '4', '4', '4', 'E : 11 800 (3) + 1 (9 cas) ; A : « impraticable même à moto » (infirmier) ; T : tente de stockage inondée, aucun véhicule sur site'],
        ['Pont de la Musi (km 97)', '3', '4', '3', '3', 'Fermé aux plus de 3,5 t, motos et piétons autorisés ; pas de voie de contournement'],
        ['Site de Kasika', '2', '3', '2', '2', 'E : 14 200 (3), 3 cas seulement ; piste boueuse, camion léger passe'],
        ['Site de Mubimbi', '1', '2', '1', '1', 'E : 9 600 (2), aucun cas ; accès normal en ralentissant'],
        ['Entrepôt de Lukando', '2', '4', '1', '2', 'H : 1 (magasinière) contre 2 (pluie prévue la nuit du 28) → 2 retenu'],
      ],
    },
    pitfall: "Saisir une moyenne entre deux évaluateurs (« 2,5 »). Le fichier la refuse, et surtout elle masque le désaccord : appliquez la règle du doute et expliquez-la en colonne K.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 9',
    title: 'Colonne G — Contrôler le score de sévérité pondéré (sur 4)',
    intro: "La colonne G est calculée : vous ne tapez jamais rien dedans. Mais vous devez savoir la relire, la vérifier à la main et reconnaître quand elle se trompe.",
    steps: [
      {
        title: 'Comprenez la formule',
        actions: [
          "La formule de G5 est =SOMMEPROD(C5:F5;TRANSPOSE(Ponderation!$C$5:$C$8)) : chaque note est multipliée par le poids de son axe, puis le tout est additionné.",
          "Avec les poids par défaut (25 % chacun), le score est la moyenne des quatre notes ; il va de 0 à 4.",
          "Dans les lignes 8 à 19, la formule est entourée d'un test et reste vide tant que la cellule C est vide ; les lignes 5 à 7 n'ont pas cette protection.",
        ],
      },
      {
        title: 'Vérifiez à la main',
        actions: [
          "Recalculez deux lignes sur cinq : somme des notes × 0,25.",
          "Si G affiche une erreur ou 0 alors que les notes sont saisies, vous êtes peut-être dans une ancienne version d'Excel : sélectionnez la cellule, cliquez dans la barre de formule et validez par Ctrl+Maj+Entrée.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — contrôle manuel du score (poids 0,25)',
      lines: [
        "Bweza : 3×0,25 + 4×0,25 + 4×0,25 + 4×0,25 = 3,75",
        "Pont de la Musi : 3×0,25 + 4×0,25 + 3×0,25 + 3×0,25 = 3,25",
        "Kasika : 2×0,25 + 3×0,25 + 2×0,25 + 2×0,25 = 2,25",
        "Mubimbi : 1×0,25 + 2×0,25 + 1×0,25 + 1×0,25 = 1,25",
        "Entrepôt : 2×0,25 + 4×0,25 + 1×0,25 + 2×0,25 = 2,25",
      ],
    },
    result: "Chaque score de la colonne G est égal à votre calcul manuel : la formule lit bien les notes C à F.",
    tip: "Une ligne sans score dans les lignes 5 à 7 affiche 0 : ne la prenez pas pour une zone sans contrainte, ajoutez une note ou videz la ligne entière.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 9',
    title: 'Colonne H — Besoin logistique identifié (transport, stockage, dernier kilomètre)',
    intro: "La colonne H est ce que la synthèse reprend telle quelle pour le CONOPS. Elle doit dire quel besoin logistique, en quelle quantité, avant quand. Pour la chiffrer, vous comparez le besoin au stock confirmé : seul l'écart est à commander ou à transporter.",
    steps: [
      {
        title: 'Calculez le besoin et l\'écart',
        actions: [
          "Écrivez le besoin sur 72 heures par article : abris touchés × 1 bâche, personnes × 3 jours × consommation journalière, réserve de kits.",
          "Relevez le stock confirmé (comptage physique) et soustrayez-le du besoin.",
          "Si l'écart est positif, identifiez la source (Goma, centrale, local) et son délai.",
        ],
      },
      {
        title: 'Rédigez la cellule',
        actions: [
          "Format : nature (Transport / Stockage / Dernier kilomètre) – article – quantité – échéance.",
          "Deux besoins au plus par zone ; le détail va dans le CONOPS.",
        ],
      },
    ],
    table: {
      columns: ['Article pour Bweza', 'Besoin 72 h', 'Stock confirmé (comptage 27/04)', 'Écart', 'Décision'],
      rows: [
        ['Bâches', '600 (600 abris touchés, chef de site)', '372 utilisables (28 à sécher)', '228', 'Commander 250 à Goma (inventaire 16/04, à confirmer)'],
        ['Comprimés de purification', '35 400 (11 800 × 3 j × 1)', '57 600', '0', 'Envoyer 36 000'],
        ['Kits de traitement KCH-01 (réserve)', '100', '118', '0', 'Envoyer 100'],
      ],
    },
    example: {
      title: 'Fil rouge — texte de la colonne H, ligne Bweza',
      lines: [
        "Dernier km : 372 bâches, 100 kits KCH-01, 36 000 comprimés, départ jeu 30/04 06h00 ; Transport : 250 bâches de Goma sous réserve du pont ; Stockage : tente 45 m² surélevée.",
      ],
    },
    pitfall: "Écrire « Kits WASH, bâches » sans quantité ni échéance : le CONOPS n'a alors rien à planifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 9',
    title: 'Colonnes I, J et K — Statut info, Dernière MAJ, Commentaire / à vérifier',
    intro: "Ces trois colonnes disent à quel point vous pouvez vous fier à la ligne. Un score sans statut, sans date ni commentaire est un chiffre dont personne ne peut mesurer la solidité.",
    steps: [
      {
        title: 'Colonne I — Statut info',
        actions: [
          "Sélectionnez la valeur dans la liste déroulante de I5:I19 : Confirme, A confirmer ou Obsolete (le fichier ne contient pas d'accents).",
          "Confirme : observé par votre équipe, ou concordance de deux sources indépendantes de moins de 24 heures.",
          "A confirmer : source unique ou indirecte, ou information de plus de 24 heures sur un axe instable.",
          "Obsolete : information contredite par une plus récente.",
        ],
      },
      {
        title: 'Colonnes J et K',
        actions: [
          "J : la date de l'information au format AAAA-MM-JJ, jamais la date de saisie par défaut.",
          "K : ce qu'il reste à vérifier, par qui, avant quand ; ou l'arbitrage fait (règle du doute).",
        ],
      },
    ],
    table: {
      columns: ['Zone', 'I — Statut', 'J — Dernière MAJ', 'K — Commentaire / à vérifier'],
      rows: [
        ['Site de Bweza', 'A confirmer', '2026-04-27', 'A=4 selon le seul infirmier, non observé ; reconnaissance 4x4 mardi 28/04 06h30 (F. Mbusa)'],
        ['Pont de la Musi (km 97)', 'Confirme', '2026-04-27', 'Fermé > 3,5 t (cluster 08h40 + photo du chauffeur Umoja) ; avis écrit charge admissible avant H+36'],
        ['Site de Kasika', 'Confirme', '2026-04-27', 'Observé 15h20 avec photo ; talus à revoir après la pluie du 28/04'],
        ['Site de Mubimbi', 'Confirme', '2026-04-27', 'Observé 16h10, accès normal'],
        ['Entrepôt de Lukando', 'Confirme', '2026-04-27', 'Comptage 17h50 ; H : 1 contre 2, 2 retenu (pluie prévue)'],
      ],
    },
    pitfall: "Passer une ligne en « Confirme » parce qu'une personne de confiance l'a dit. Une seule source indirecte reste « A confirmer », même si elle est très crédible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 9',
    title: "Onglet Ponderation — vérifier les poids et tester la sensibilité",
    intro: "L'onglet « Ponderation » donne le poids de chaque axe dans le score (cellules C5:C8) et vérifie que leur somme fait 100 % (C10). Par défaut, chaque axe pèse 25 %. On ne modifie les poids que si le contexte le justifie, par exemple un contexte épidémique qui rend l'Exposition plus lourde.",
    steps: [
      {
        title: 'Vérifiez et testez',
        actions: [
          "Ouvrez l'onglet Ponderation et vérifiez que C10 vaut 100 % (somme de C5:C8).",
          "Testez la sensibilité : saisissez H 0,20 ; E 0,35 ; A 0,25 ; T 0,20 et vérifiez que C10 reste à 100 %.",
          "Retournez dans « Synthese » et comparez le classement et les niveaux de priorité avec ceux obtenus à 25 %.",
        ],
      },
      {
        title: 'Décidez et tracez',
        actions: [
          "Si les niveaux et les premières zones ne changent pas, remettez les poids par défaut : vos résultats restent comparables aux autres évaluations.",
          "Si vous gardez de nouveaux poids, écrivez-le en tête du CONOPS et prévenez tous les lecteurs de la grille.",
        ],
      },
    ],
    table: {
      columns: ['Zone', 'Score à 25 %', 'Score avec E à 0,35', 'Niveau de priorité'],
      rows: [
        ['Site de Bweza', '3,75', '3,80', 'Critique (inchangé)'],
        ['Pont de la Musi', '3,25', '3,35', 'Critique (inchangé)'],
        ['Entrepôt de Lukando', '2,25', '2,45', 'Elevee (inchangé)'],
        ['Site de Kasika', '2,25', '2,35', 'Elevee (inchangé)'],
        ['Site de Mubimbi', '1,25', '1,35', 'Moderee (inchangé)'],
      ],
    },
    result: "Niveaux inchangés : les poids par défaut (25 %) sont conservés. Le test a seulement départagé Kasika et l'Entrepôt (égaux à 2,25), ce que la règle de départage donnait déjà : Entrepôt avant Kasika.",
    pitfall: "Modifier un poids sans que la somme fasse 100 %. Le score sort de l'échelle de 0 à 4 et plus personne ne sait lire les niveaux « Critique » et « Elevee ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 8 sur 9',
    title: "Onglet Synthese — lire les priorités et les trois compteurs",
    intro: "L'onglet « Synthese » est calculé automatiquement à partir de « Evaluation HEAT » : ne modifiez aucune formule. Il reprend, pour chaque zone, le score, le niveau de priorité, le besoin logistique et le statut, et ajoute trois compteurs.",
    steps: [
      {
        title: 'Lisez les lignes 5 à 19',
        actions: [
          "Colonne B : le score de sévérité ; colonne C : le niveau de priorité (Critique à partir de 3, Elevee à partir de 2, Moderee en dessous).",
          "Colonnes D et E : le besoin logistique et le statut, recopiés de la grille.",
        ],
      },
      {
        title: 'Lisez les trois compteurs',
        actions: [
          "B21 : nombre de zones évaluées ; B22 : dont niveau « Critique » ; B23 : dont « Critique » ET statut « A confirmer ».",
          "Contrôlez que B21 est égal au nombre de lignes saisies dans « Evaluation HEAT ».",
          "Traitez B23 en premier : chaque zone qu'il compte est à la fois la plus grave et la moins sûre.",
        ],
      },
    ],
    table: {
      columns: ['Zone', 'Score', 'Niveau', 'Statut'],
      rows: [
        ['Site de Bweza', '3,75', 'Critique', 'A confirmer'],
        ['Pont de la Musi (km 97)', '3,25', 'Critique', 'Confirme'],
        ['Site de Kasika', '2,25', 'Elevee', 'Confirme'],
        ['Site de Mubimbi', '1,25', 'Moderee', 'Confirme'],
        ['Entrepôt de Lukando (stock tampon)', '2,25', 'Elevee', 'Confirme'],
      ],
    },
    result: "B21 = 5 zones évaluées (5 lignes saisies) ; B22 = 2 zones Critique ; B23 = 1 zone Critique et à confirmer : Bweza, à vérifier en priorité.",
    pitfall: "Lire « Confirme » sur une zone « Critique » comme « résolu ». Le statut mesure la fiabilité de l'information, pas la gravité de la situation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 9 sur 9',
    title: 'Transformer la synthèse en priorités et en vérifications, puis figer la version v02',
    intro: "Une sortie de tableur n'est pas un plan. Vous classez les zones, vous attribuez une vérification à chaque point fragile, vous la réalisez, puis vous enregistrez une nouvelle version : v02 ne remplace jamais v01.",
    steps: [
      {
        title: 'Classez et attribuez les vérifications',
        actions: [
          "Classez les zones par score décroissant ; à score égal, appliquez la règle de départage.",
          "Pour chaque zone Critique ou « A confirmer », écrivez une vérification : quoi, qui, avant quand.",
        ],
      },
      {
        title: 'Mettez à jour et figez',
        actions: [
          "Après chaque vérification, corrigez C à F, puis I, J et K des lignes concernées.",
          "Enregistrez sous ...v02.xlsx, relisez B21, B22 et B23, puis diffusez la version à la coordination.",
        ],
      },
    ],
    table: {
      columns: ['Rang', 'Zone', 'Score v02', 'Niveau', 'Vérification restante'],
      rows: [
        ['1', 'Site de Bweza', '3,50', 'Critique', 'Mesurer l\'eau aux km 121 et 126 avant le convoi (F. Mbusa, 29/04 06h00)'],
        ['2', 'Pont de la Musi', '3,25', 'Critique', 'Avis écrit de l\'autorité routière via le cluster, avant H+36 (28/04 18h00)'],
        ['3', 'Entrepôt de Lukando', '2,25', 'Elevee', 'Sécher les 28 bâches, déplacer le stock en local surélevé (G. Kavira, 29/04)'],
        ['4', 'Site de Kasika', '2,25', 'Elevee', 'Revoir le talus après la pluie du 28 (Évaluateur 2, 29/04 07h00)'],
        ['5', 'Site de Mubimbi', '1,25', 'Moderee', 'Contrôle de routine à H+72'],
      ],
    },
    example: {
      title: 'Fil rouge — reconnaissance de Bweza et passage à la v02 (mardi 28/04)',
      lines: [
        "06h30–10h30 : reconnaissance Lukando–Bweza en 4x4 (F. Mbusa) : eau à 55 cm au km 121 et 40 cm au km 126 ; un 4x4 passe, un camion chargé non.",
        "Bweza : A passe de 4 à 3 ; I passe à « Confirme » ; J à 2026-04-28 ; score 3,75 → 3,50 (reste Critique).",
        "Synthèse v02 : B21 = 5, B22 = 2, B23 = 0.",
      ],
    },
    result: "Livrable 3 terminé : grille v02 remplie colonne par colonne, synthèse cohérente avec les lignes saisies, ordre de priorité et vérifications attribuées.",
    tip: "Gardez v01 : la comparaison v01-v02 prouve à la coordination que votre évaluation a corrigé ses propres erreurs.",
  },

  // ───────────── PROCÉDURE 4 — Rédiger le CONOPS (H48-H60) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 8',
    title: 'Rassembler les intrants et ouvrir plan-contingence-conops-template.docx',
    intro: "H48 à H50. Le CONOPS ne contient aucune information nouvelle : il transforme ce que vous avez déjà produit en décisions. Si un intrant manque, il faut le chercher avant d'écrire, pas pendant.",
    steps: [
      {
        title: 'Rassemblez les intrants',
        actions: [
          "La grille HEAT v02 et sa synthèse, la fiche déclencheur, le plan d'évaluation.",
          "Le résultat du comptage du stock prépositionné, les réponses d'OCHA et du Logistics Cluster, le résultat de la reconnaissance.",
        ],
      },
      {
        title: 'Préparez le document',
        actions: [
          "Ouvrez plan-contingence-conops-template.docx et enregistrez-le sous AAAA-MM-JJ_CONOPS_[Zone]_v01.docx.",
          "Repérez la structure : le bandeau « PLAN DE CONTINGENCE LOGISTIQUE (CONOPS) » et sa phrase d'objectif, puis six sections numérotées.",
          "Repérez les tableaux : Ressources (2 colonnes), Chaîne de décision (2 colonnes), Chronologie 0-72h (3 colonnes, 5 horizons de H0-H6 à H60-H72), Contacts clés (2 sur 2), et deux cartouches Rédigé par / Date et Validé par / Date de validation.",
          "Remplacez chaque texte d'aide par votre contenu ; ne laissez aucun texte d'aide.",
        ],
      },
    ],
    tip: "Rédigez d'abord la section 2 (objectifs mesurables) : le reste du document en découle, et c'est elle que le lecteur ouvrira en premier.",
    result: "Le template est enregistré sous un nom daté, tous les intrants sont ouverts à côté, et vous connaissez l'emplacement de chaque champ.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 8',
    title: 'Section 1 — Contexte et déclencheur',
    intro: "Le texte d'aide demande : nature de l'événement, date et heure du déclenchement, zones affectées, source de l'alerte. Quatre à six lignes, uniquement des faits datés et sourcés, tirés de votre fiche déclencheur.",
    steps: [
      {
        title: 'Rédigez en cinq phrases',
        actions: [
          "Phrase 1 : nature de l'événement et date.",
          "Phrase 2 : date et heure du déclenchement (H0), qui l'a confirmé, échéance H+72.",
          "Phrase 3 : zones affectées avec la population.",
          "Phrase 4 : sources de l'alerte.",
          "Phrase 5 : résultat de l'évaluation HEAT (zones Critique) et contexte sanitaire.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 1',
      body: "Crue de la Musi après trois jours de pluies exceptionnelles, nuit du 26 au 27/04/2026. Déclenchement confirmé le 27/04/2026 à 06h00 (H0) par Dr Clarisse Kahindo ; échéance H+72 : 30/04/2026 à 06h00. Zones affectées : sites de Bweza (11 800 personnes), Kasika (14 200) et Mubimbi (9 600), pont de la Musi (km 97) et hangar de la base de Lukando. Sources : coordinatrice, BCZ de Lukando, gardien du hangar, Logistics Cluster, Flash Update OCHA n°1 du 27/04 à 11h00. Contexte sanitaire : 9 cas suspects de choléra à Bweza sur 14 jours. Évaluation HEAT v02 du 28/04 : 2 zones Critique (Bweza 3,50 ; pont de la Musi 3,25).",
    },
    pitfall: "Raconter l'événement. Le lecteur le connaît ; il attend les faits qui conditionnent la logistique et les chiffres qui permettent de les dater.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 8',
    title: 'Section 2 — Objectifs logistiques mesurables (72 h)',
    intro: "Le texte d'aide donne l'exemple « ouvrir un accès camion vers la zone X d'ici H+60 ». Un objectif logistique répond à quatre questions : quoi, où, combien, avant quelle heure. Un objectif comme « améliorer l'accès » ne donne aucune instruction à personne.",
    steps: [
      {
        title: 'Transformez chaque priorité en objectif',
        actions: [
          "Partez de la liste des zones Critique et des vérifications de la grille v02.",
          "Pour chaque objectif, écrivez : verbe d'action, lieu précis, quantité ou critère, heure ou H+x, responsable.",
          "Limitez-vous à quatre ou cinq objectifs et vérifiez que chacun se contrôle par oui ou non.",
        ],
      },
    ],
    table: {
      columns: ['Priorité HEAT', 'Formulation vague', 'Objectif mesurable'],
      rows: [
        ['Entrepôt de Lukando (2,25)', 'Vérifier le stock', 'O1 — Compter physiquement le stock du hangar avant H+12 (27/04 18h00), résultat consigné en section 3 (G. Kavira).'],
        ['Site de Bweza (3,50)', 'Améliorer l\'accès à Bweza', 'O2 — Valider avant H+60 (29/04 18h00) un accès pour camion de 6 t chargé Lukando–Bweza : eau inférieure à 30 cm aux km 121 et 126 (F. Mbusa).'],
        ['Pont de la Musi (3,25)', 'Savoir si le pont passe', 'O3 — Obtenir avant H+36 (28/04 18h00) l\'avis écrit de l\'autorité routière sur la charge admissible ; sans avis, déposer un SRF aérien avant H+60 (J.-M. Ilunga).'],
        ['Site de Bweza (3,50)', 'Approvisionner Bweza', 'O4 — Faire partir à H+72 (30/04 06h00) un camion avec 372 bâches, 100 kits KCH-01 et 36 000 comprimés ; arrivée avant 09h00.'],
      ],
    },
    result: "Quatre objectifs que n'importe quel lecteur peut déclarer atteints ou non, chacun avec une heure et un responsable.",
    pitfall: "Fixer un objectif sans responsable ni heure. Il sera discuté pendant la réunion de bilan, jamais exécuté pendant la crise.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 8',
    title: 'Section 3 — Ressources prépositionnées mobilisables (tableau à deux colonnes)',
    intro: "Le tableau a deux colonnes : « Nature du stock / entrepôt / véhicule disponible » et « Statut (confirmé / à confirmer) et quantité ». Une ligne par ressource, et jamais une ressource « annoncée » présentée comme acquise : un stock qui figure dans un inventaire ancien reste « à confirmer ».",
    steps: [
      {
        title: 'Remplissez ligne par ligne',
        actions: [
          "Colonne 1 : la ressource, son lieu et son état (stock, entrepôt, véhicule).",
          "Colonne 2 : « Confirmé » avec la date et la source du comptage, ou « À confirmer » avec la date du dernier inventaire connu.",
          "Ajoutez la quantité en chiffres, l'écart avec l'inventaire théorique et la date de péremption si elle existe.",
          "Ne listez que ce qui est mobilisable sans délai supplémentaire.",
        ],
      },
    ],
    table: {
      columns: ['Nature du stock / entrepôt / véhicule disponible', 'Statut et quantité'],
      rows: [
        ['Kits de traitement choléra KCH-01 — hangar de Lukando', 'Confirmé (comptage 27/04, 17h50) : 118 sur 120 théoriques ; péremption 09/2027'],
        ['Bâches plastiques — hangar de Lukando', 'Confirmé : 400, dont 372 utilisables tout de suite et 28 à sécher (disponibles le 28/04 à 18h00)'],
        ['Comprimés de purification d\'eau — hangar de Lukando', 'Confirmé : 57 600 sur 60 000 théoriques'],
        ['Tente de 45 m² (réserve) — base de Lukando', 'Confirmé (vue le 24/04) : 1'],
        ['Camion Umoja de 6 t (1 des 2 sous contrat) — positionné à Lukando', 'Confirmé (vu le 27/04, 07h00) : 1 ; second camion bloqué à Goma'],
        ['Entrepôt Kemora de Goma — bâches', 'À confirmer : 450 selon l\'inventaire du 16/04 ; inaccessible tant que le pont est fermé'],
      ],
    },
    result: "Le lecteur sait ce qu'il peut engager sans appeler personne, et ce qui reste une promesse.",
    pitfall: "Écrire « 400 bâches » sans préciser que 28 sont mouillées. Le convoi partirait avec 28 bâches inutilisables et le déficit de Bweza serait sous-estimé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 8',
    title: 'Section 4 — Chaîne de décision (tableau à deux colonnes)',
    intro: "Le tableau a deux colonnes : « Type de décision (déblocage stock tampon, changement d'itinéraire, transport aérien...) » et « Rôle habilité à valider ». Il doit permettre à quelqu'un d'agir à 22h sans vous réveiller, parce qu'il sait qui a le droit de dire oui.",
    steps: [
      {
        title: 'Listez les décisions qui peuvent survenir',
        actions: [
          "Reprenez le déblocage de stock, le changement d'itinéraire en cours de route, le transport aérien, la dépense d'urgence, le départ du convoi.",
          "Pour chacune, indiquez une fonction habilitée, son nom et un suppléant.",
          "Fixez, quand c'est utile, un seuil (quantité ou montant) au-delà duquel la décision monte d'un niveau.",
        ],
      },
    ],
    table: {
      columns: ["Type de décision", 'Rôle habilité à valider'],
      rows: [
        ['Déblocage du stock tampon de Lukando (jusqu\'à 150 kits ou 500 bâches)', 'Coordinatrice de projet (Dr C. Kahindo) ; suppléant : J.-M. Ilunga'],
        ['Déblocage de stock à Goma et commande d\'urgence à la centrale de Nairobi', 'Coordinateur logistique pays (J.-M. Ilunga)'],
        ['Changement d\'itinéraire en cours de route, demi-tour', 'Chef de convoi (F. Mbusa), après avis du point focal sécurité (J. Katembo)'],
        ['Transport aérien (SRF au Logistics Cluster)', 'Coordinateur logistique pays (J.-M. Ilunga)'],
        ['Dépense d\'urgence supérieure à 3 000 USD (remise en état de piste)', 'Coordinateur logistique pays, avec la coordinatrice de projet'],
        ['Départ du convoi après vérification de l\'accès', 'Coordinatrice de projet, sur proposition du logisticien terrain'],
      ],
    },
    result: "Toute décision prévisible a un rôle habilité et un suppléant ; aucune ne dépend de votre téléphone.",
    pitfall: "Écrire « la direction » ou « la coordination ». Une fonction précise, un nom et un suppléant : sinon, personne ne signe et le stock reste au hangar.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 8',
    title: 'Section 5 — Chronologie 0-72h (tableau à trois colonnes)',
    intro: "Le tableau a cinq lignes : H0-H6, H6-H24, H24-H48, H48-H60, H60-H72 ; et trois colonnes : Horizon, Action prévue, Responsable. La chronologie doit rester cohérente avec les scores : les zones Critique reçoivent les premières actions et les responsables les plus sûrs.",
    steps: [
      {
        title: 'Remplissez les cinq lignes',
        actions: [
          "Pour chaque horizon, écrivez les actions datées (jour et heure), pas des intentions.",
          "Nommez un seul responsable par action, avec les noms de vos équipes.",
          "Vérifiez que chaque objectif de la section 2 apparaît dans au moins une ligne.",
        ],
      },
    ],
    table: {
      columns: ['Horizon', 'Action prévue', 'Responsable'],
      rows: [
        ['H0 - H6', 'Confirmer le déclencheur (fiche 06h30), demander le MIRA à OCHA (07h30), constituer l\'équipe et le plan d\'évaluation (12h00)', 'Logisticien terrain ; activation : Dr Kahindo'],
        ['H6 - H24', 'Barème, formulaire Kobo déployé (16h10), groupe WhatsApp, comptage du hangar (17h50), cinq premières remontées', 'Logisticien terrain ; G. Kavira ; évaluateurs 1 à 3'],
        ['H24 - H48', 'Grille v01 (28/04 12h00), reconnaissance Lukando–Bweza (06h30-10h30), avis écrit sur le pont avant 18h00, grille v02', 'Logisticien terrain ; F. Mbusa ; A. Sow'],
        ['H48 - H60', 'Rédaction du CONOPS ; remise en état des passages des km 121 et 126 ; SRF aérien si le pont reste fermé', 'Logisticien terrain ; F. Mbusa ; J.-M. Ilunga'],
        ['H60 - H72', 'Validation (29/04 18h30), diffusion (19h10), ordre de déblocage (19h45), chargement du camion 6 t, départ du convoi (30/04 06h00)', 'Dr Kahindo ; G. Kavira ; F. Mbusa'],
      ],
    },
    result: "Une chronologie où chaque objectif a une heure, un responsable et un horizon cohérent avec sa priorité.",
    tip: "Ne détaillez que ce qui n'est pas encore fait. La partie H0-H48, déjà réalisée, se résume en une ligne : le lecteur a besoin de savoir quoi faire, pas de relire votre semaine.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 8',
    title: 'Section 6 — Contacts clés et cartouches de signature',
    intro: "La section 6 contient quatre cases : Coordinateur de mission, Point focal Logistics Cluster, Responsable stock prépositionné, Contact sécurité / accès. Un contact utilisable la nuit est une personne nommée, avec un téléphone, un moyen de joindre et un suppléant.",
    steps: [
      {
        title: 'Remplissez les quatre cases',
        actions: [
          "Dans chaque case : prénom, nom, fonction, téléphone, meilleur moyen de joindre, suppléant.",
          "Ne notez que des coordonnées professionnelles et jamais de numéro personnel sans accord.",
          "Vérifiez chaque numéro par un appel ou un message avant de diffuser.",
        ],
      },
      {
        title: 'Remplissez les cartouches',
        actions: [
          "Rédigé par (nom, fonction) et Date : votre nom, votre fonction, la date du jour.",
          "Laissez « Validé par (coordination) » et « Date de validation » vides jusqu'à la validation de la Procédure 5.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 6 (coordonnées fictives)',
      lines: [
        "Coordinateur de mission : Dr Clarisse Kahindo, coordinatrice de projet — +243 8XX XXX XXX, répond sur messagerie après 21h ; suppléant J.-M. Ilunga.",
        "Point focal Logistics Cluster : Amina Sow, Logistics Cluster Officer Nord-Kivu — +243 8XX XXX XXX ; réunion logistique le mardi à 10h00, Goma.",
        "Responsable stock prépositionné : Gloria Kavira, magasinière de la base de Lukando — +243 8XX XXX XXX ; suppléant : assistant logistique.",
        "Contact sécurité / accès : Joseph Katembo, point focal sécurité — +243 8XX XXX XXX ; astreinte nuit : coordinateur sécurité pays.",
        "Cartouche : Rédigé par : logisticien terrain, Kemora Santé Lukando — 2026-04-29.",
      ],
    },
    pitfall: "Laisser un contact « à confirmer ». Dans un CONOPS, un numéro non vérifié est pire qu'un numéro absent : on l'appelle quand il est trop tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 8 sur 8',
    title: 'Relire à froid : le test du lecteur qui n\'a pas participé',
    intro: "Le CONOPS est destiné à une équipe qui ne l'a pas écrit. Le seul test fiable est donc de le faire lire par quelqu'un qui n'a pas participé, avant diffusion. Vous visez une page, deux au maximum.",
    steps: [
      {
        title: 'Faites le test de lecture',
        actions: [
          "Exportez le document en PDF et remettez-le à une personne qui n'a pas participé (assistant logistique, magasinière).",
          "Demandez-lui de dire à voix haute : quelle est ma première action, à quelle heure, qui me valide ?",
          "Notez chaque hésitation : c'est une phrase à réécrire.",
        ],
      },
      {
        title: 'Faites votre relecture technique',
        actions: [
          "Vérifiez qu'aucun texte d'aide ne subsiste et que le document tient sur deux pages au plus.",
          "Contrôlez que les chiffres sont ceux de la grille v02 et du comptage du hangar.",
          "Vérifiez qu'un stock « à confirmer » n'apparaît nulle part comme acquis.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — relecture du mercredi 29/04 à 15h30',
      lines: [
        "Hésitation 1 : « accès camion » trop vague → précisé « camion de 6 t chargé, eau inférieure à 30 cm aux km 121 et 126 ».",
        "Hésitation 2 : « Qui signe un déblocage au-delà de 150 kits ? » → ligne ajoutée (coordinateur logistique pays).",
        "Hésitation 3 : le contact sécurité n'avait pas de suppléant → astreinte de nuit ajoutée.",
        "Résultat : 2 pages, aucun texte d'aide, 4 objectifs, 6 lignes de ressources, 6 types de décision.",
      ],
    },
    result: "Livrable 4 terminé : un CONOPS de deux pages au plus, relu à froid, prêt à être présenté à la validation.",
    tip: "Le meilleur lecteur est celui qui devra l'exécuter à 3h du matin sans vous : choisissez-le.",
  },

  // ───────────── PROCÉDURE 5 — Valider, diffuser, activer (H60-H72) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Faire valider le CONOPS par la coordination',
    intro: "H60 à H66. Un CONOPS non validé n'engage personne et peut être contredit en pleine opération. La validation est une réunion courte avec un résultat écrit, pas un accord oral dans un couloir.",
    steps: [
      {
        title: 'Préparez la validation',
        actions: [
          "Envoyez la version PDF à la coordinatrice et au coordinateur logistique pays au moins une heure avant.",
          "Prévoyez 30 minutes : parcourez les six sections, en commençant par les objectifs et la chaîne de décision.",
        ],
      },
      {
        title: 'Obtenez la signature',
        actions: [
          "Notez chaque modification demandée et appliquez-la en séance si possible.",
          "Remplissez les cartouches : Validé par (coordination) et Date de validation ; enregistrez sous ...v02 validée.",
          "Archivez la version signée dans 01_Coordination avec l'e-mail de validation.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — validation du mercredi 29/04 à 18h30',
      lines: [
        "18h00 — envoi du PDF à Dr Kahindo et à J.-M. Ilunga.",
        "18h30 — réunion de 30 minutes. Deux modifications : O4 reformulé (« départ à 06h00 avec arrivée avant 09h00 ») ; ajout du seuil de 150 kits dans la chaîne de décision.",
        "18h55 — cartouche rempli : Validé par Dr Clarisse Kahindo, 2026-04-29 ; accord écrit de J.-M. Ilunga par e-mail à 19h02.",
      ],
    },
    pitfall: "Diffuser avant la validation « pour gagner du temps ». Si la coordination change un objectif ensuite, deux versions circulent et l'équipe exécute la mauvaise.",
    result: "Un CONOPS signé et daté, archivé, avec la trace écrite des modifications.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Diffuser et vérifier que chacun peut exécuter sans appel complémentaire',
    intro: "Diffuser n'est pas envoyer : c'est s'assurer que chaque personne engagée sait, après lecture, quelle est sa prochaine action, à quelle heure, et qui la valide. Le critère est qu'aucun appel complémentaire ne soit nécessaire.",
    steps: [
      {
        title: 'Diffusez au bon périmètre',
        actions: [
          "Envoyez le PDF validé à toute l'équipe engagée, en interne uniquement : il contient des contacts nominatifs.",
          "Imprimez une copie pour le hangar et pour le véhicule de tête du convoi.",
        ],
      },
      {
        title: 'Vérifiez la compréhension',
        actions: [
          "Faites un briefing de 15 minutes avec les personnes qui exécutent.",
          "Posez à chacun trois questions : ta prochaine action, à quelle heure, qui te valide ?",
          "Notez l'accusé de réception de chacun dans votre journal.",
        ],
      },
    ],
    table: {
      columns: ['Destinataire', 'Rôle', 'Prochaine action annoncée', 'Reçu / compris'],
      rows: [
        ['Gloria Kavira', 'Magasinière', 'Sortie de stock dès réception de l\'ordre signé, 29/04 20h00', 'Oui, 19h25'],
        ['Fabrice Mbusa', 'Chef de convoi', 'Briefing chauffeur à 05h00, départ 06h00, mesure de l\'eau aux km 121 et 126', 'Oui, 19h30'],
        ['Chauffeur Umoja', 'Conducteur du camion 6 t', 'Chargement à 20h00, départ derrière le véhicule de tête', 'Oui, 19h35'],
        ['Joseph Katembo', 'Point focal sécurité', 'Avis Go avant 05h30, contact base toutes les 2 heures', 'Oui, 19h40'],
      ],
    },
    result: "Chaque exécutant a répondu aux trois questions sans appeler la coordination ; les accusés sont dans le journal.",
    pitfall: "Considérer qu'un « bien reçu » équivaut à « compris ». Le test des trois questions est le seul qui prouve que le document s'exécute seul.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Déclencher formellement le déblocage du stock prépositionné',
    intro: "Si les scores justifient un déblocage de stock prépositionné, vous le déclenchez selon la chaîne de décision inscrite dans le CONOPS, jamais de façon informelle sur un simple message. La magasinière ne sort rien sans ordre signé.",
    steps: [
      {
        title: 'Établissez l\'ordre de déblocage',
        actions: [
          "Vérifiez que la zone est au niveau « Critique » ou « Elevee » et que la décision relève du rôle habilité de la section 4.",
          "Rédigez l'ordre : date et heure, article, quantité, origine, destination, motif avec le score, validé par, numéro du bon de sortie.",
          "Faites signer l'ordre par le rôle habilité et archivez-le.",
        ],
      },
      {
        title: 'Exécutez et reconstituez',
        actions: [
          "La magasinière sort le stock sur présentation de l'ordre signé et met à jour la fiche de stock.",
          "Lancez la commande de reconstitution le jour même (règle de la Procédure 6).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — ordre de déblocage du mercredi 29/04 à 19h45',
      lines: [
        "Article : 372 bâches ; 100 kits KCH-01 ; 36 000 comprimés. Origine : hangar de Lukando. Destination : site de Bweza, unité de traitement. Camion : Umoja 6 t.",
        "Motif : zone Critique (3,50), HEAT v02 du 28/04 ; objectif O4 du CONOPS validé le 29/04.",
        "Validé par : Dr Clarisse Kahindo (inférieur au seuil de 150 kits et 500 bâches). Bon de sortie n° LUK-0429-01.",
        "Commande de reconstitution lancée le 29/04 à 20h30 : cible moins stock restant, soit 992 bâches, 182 kits, 121 400 comprimés (règle et calcul : Procédure 6, étapes 3 et 5).",
      ],
    },
    result: "Un ordre écrit et signé, un bon de sortie, une fiche de stock à jour et une commande de reconstitution lancée.",
    pitfall: "Sortir le stock sur un message WhatsApp de la coordinatrice. En audit, la sortie n'est pas justifiée ; en incident, personne ne sait qui l'a autorisée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Suivre l\'exécution, re-scorer et dresser le bilan des 72 heures',
    intro: "Un CONOPS vit tant que la situation évolue. Vous le suivez par points réguliers, vous re-scorez les zones quand un fait change une note, et vous dressez le bilan à H+72 pour décider de la suite.",
    steps: [
      {
        title: 'Suivez et re-scorez',
        actions: [
          "Faites un point toutes les 6 heures avec les responsables d'objectifs : atteint, en cours, en retard.",
          "Dès qu'un fait change une note d'au moins 1 point (eau qui monte, pont rouvert), re-scorez la zone et enregistrez la grille en v03.",
          "Si le CONOPS doit changer, publiez une nouvelle version signée et retirez l'ancienne de la diffusion.",
        ],
      },
      {
        title: 'Dressez le bilan à H+72',
        actions: [
          "Pour chaque objectif : atteint ou non, écart, cause.",
          "Rédigez les décisions de suite : zones à re-scorer, points à auditer, commandes à relancer.",
        ],
      },
    ],
    table: {
      columns: ['Objectif', 'Résultat à H+72', 'Écart / cause'],
      rows: [
        ['O1 — Compter le hangar avant H+12', 'Atteint : comptage terminé à 17h50', 'Aucun'],
        ['O2 — Accès camion 6 t vers Bweza avant H+60', 'Atteint à 17h40 : eau à 25 cm aux deux passages', 'Remblai fait avec 2 camions de gravier (12 m³)'],
        ['O3 — Avis écrit sur le pont avant H+36', 'Non atteint : avis reçu le 29/04 à 08h00 (H+50), 14 h de retard', 'Réponse tardive de l\'autorité routière ; SRF aérien déposé à l\'échéance, le 28/04 à 18h30'],
        ['O4 — Départ du convoi à H+72', 'Atteint : départ 06h00, arrivée 08h20', 'Aucun'],
      ],
    },
    result: "Livrable 5 terminé : CONOPS validé et diffusé, déblocage de stock tracé, grille tenue à jour, bilan des 72 heures écrit.",
    tip: "Un objectif manqué n'est pas un échec s'il est expliqué par écrit : c'est ce qui rend le prochain CONOPS meilleur.",
  },

  // ───────────── PROCÉDURE 6 — Prépositionnement et stock tampon ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 6',
    title: 'Identifier les risques de la zone et fixer un déclencheur chiffré par risque',
    intro: "Cette procédure se fait à froid, hors urgence, et elle est ce qui rend les 72 heures possibles. Un CONOPS-cadre préparé par type de risque n'a plus qu'à être ajusté aux chiffres réels le jour J. Commencez par lister les risques et fixer, pour chacun, le seuil qui active la réponse.",
    steps: [
      {
        title: 'Listez les risques et leurs déclencheurs',
        actions: [
          "Listez les trois à cinq risques récurrents de votre zone, en vous aidant de l'historique des crises et du calendrier des saisons.",
          "Pour chaque risque, écrivez un déclencheur chiffré, daté et vérifiable par une source nommée.",
          "Rattachez chaque risque à un CONOPS-cadre (le même template) et à une liste d'intrants types.",
        ],
      },
      {
        title: 'Planifiez la révision',
        actions: [
          "Révisez chaque CONOPS-cadre avant chaque saison à risque et après chaque activation.",
          "Archivez l'ancienne version : elle sert de référence au retour d'expérience.",
        ],
      },
    ],
    table: {
      columns: ['Risque', 'Déclencheur chiffré', 'CONOPS-cadre', 'Intrants types'],
      rows: [
        ['Crue et inondation', 'Un site de déplacés touché par l\'eau, ou alerte de crue de la Musi', 'Inondation + choléra', 'Bâches, comprimés, kits KCH-01'],
        ['Épidémie de choléra', '5 cas suspects ou plus en 7 jours sur un site (BCZ)', 'Épidémie', 'Kits KCH-01, matériel de l\'unité de traitement'],
        ['Afflux de déplacés', '5 000 nouvelles personnes ou plus en 72 h sur un site', 'Afflux de déplacés', 'Bâches, kits, tentes, comprimés'],
      ],
    },
    result: "Trois risques chiffrés, chacun avec un déclencheur, un CONOPS-cadre et une liste d'intrants : vous savez quoi positionner et quand activer.",
    pitfall: "Écrire « risque d'inondation » sans seuil. Sans chiffre ni source, personne ne peut dire si le déclencheur est atteint, et l'activation attend un accord oral.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 6',
    title: 'Mesurer le délai d\'approvisionnement réel (lead time) maillon par maillon',
    intro: "Le prépositionnement se justifie par un délai réel, pas par une intuition. Vous décomposez la chaîne, vous relevez le délai observé sur vos dernières commandes, et vous retenez le pire cas plausible, pas le délai de la brochure.",
    steps: [
      {
        title: 'Construisez la chaîne et relevez les délais',
        actions: [
          "Listez les maillons : préparation, transport international, dédouanement, stockage, transport local.",
          "Pour chaque maillon, relevez le délai normal et le délai le plus long observé sur les trois dernières commandes.",
          "Additionnez les délais les plus longs : c'est le lead time à retenir.",
        ],
      },
    ],
    table: {
      columns: ['Maillon', 'Délai normal', 'Délai le plus long observé'],
      rows: [
        ['Préparation à la centrale de Nairobi', '1 jour', '2 jours'],
        ['Fret aérien Nairobi → Goma', '2 jours', '2 jours'],
        ['Dédouanement avec exonération humanitaire', '3 à 5 jours', '5 jours'],
        ['Stockage tampon à Goma', '1 jour', '1 jour'],
        ['Transport Goma → Lukando (pont ouvert)', '1 jour', '1 jour'],
        ['Total', '8 à 10 jours', '11 jours'],
      ],
    },
    example: {
      title: 'Fil rouge — vérification sur les trois dernières commandes',
      lines: [
        "Commandes Nairobi → Lukando de 2026 : 9 jours, 11 jours et 8 jours. Le pire cas observé, 11 jours, est le lead time retenu.",
        "Les trois ne contiennent aucune fermeture du pont de la Musi : si le pont est fermé, le délai est inconnu — c'est précisément ce que couvre le stock tampon.",
      ],
    },
    result: "Un lead time écrit, décomposé maillon par maillon, que vous pouvez présenter à un auditeur : 11 jours.",
    pitfall: "Prendre le délai annoncé par le transitaire. Le délai utile pour dimensionner un tampon est le plus long que vous avez réellement subi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 6',
    title: 'Dimensionner le stock tampon : cible par article',
    intro: "Le stock tampon doit couvrir la période entre le déclenchement et l'arrivée du premier réapprovisionnement normal. Formule : cible = besoin du pic des 72 premières heures + besoin journalier suivant × (lead time − 3 jours), puis marge de sécurité.",
    steps: [
      {
        title: 'Calculez la cible article par article',
        actions: [
          "Écrivez le scénario dimensionnant : ici, une inondation touchant un site, avec 600 abris touchés à Bweza.",
          "Calculez le besoin du pic des 72 premières heures, puis le besoin journalier suivant.",
          "Multipliez le besoin journalier par le nombre de jours restants avant le premier réapprovisionnement (11 − 3 = 8 jours).",
          "Ajoutez la marge de sécurité et arrondissez au conditionnement.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Pic 72 h', 'Après 72 h (8 jours)', 'Marge', 'Cible'],
      rows: [
        ['Bâches', '600', '40 par jour × 8 = 320', '+10 %', '920 × 1,10 = 1 012 → 1 020'],
        ['Kits KCH-01', '45 (15 par jour × 3)', '15 par jour × 8 = 120', '+20 %', '165 × 1,20 = 198 → 200'],
        ['Comprimés de purification', '35 400 (11 800 × 3 × 1)', '11 800 × 8 = 94 400', '+10 %', '129 800 × 1,10 = 142 780 → 143 000'],
      ],
    },
    result: "Trois cibles chiffrées et justifiées : 1 020 bâches, 200 kits, 143 000 comprimés.",
    tip: "Écrivez le scénario en tête de la fiche. Un auditeur doit pouvoir refaire le calcul sans vous demander d'où vient 600.",
    pitfall: "Dimensionner sur la moyenne mensuelle. Une urgence consomme en trois jours ce qu'un programme consomme en un mois.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 6',
    title: 'Choisir le lieu de prépositionnement',
    intro: "Un stock tampon utile est un stock qu'on peut atteindre quand la crise est là. Vous comparez les lieux possibles avec les critères de la grille HEAT : proximité, accès en saison, risque d'inondation, conditions de stockage, sécurité, capacité.",
    steps: [
      {
        title: 'Comparez les options',
        actions: [
          "Listez les lieux possibles : celui d'aujourd'hui, un local mieux placé, un entrepôt plus éloigné.",
          "Notez chaque critère par oui, moyen ou non, avec la source.",
          "Écartez tout lieu qui oblige à franchir un ouvrage limitant ou une zone inondable pour atteindre les sites.",
        ],
      },
      {
        title: 'Décidez et obtenez l\'accord',
        actions: [
          "Décidez en écrivant la raison principale.",
          "Obtenez l'accord écrit du propriétaire du lieu (ici le médecin chef de zone pour l'HGR).",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Hangar de la base (actuel)', 'Local en dur de l\'HGR', 'Entrepôt Kemora de Goma'],
      rows: [
        ['Distance aux 3 sites', 'Moins de 2 h : oui', 'Moins de 2 h : oui', 'Plus de 4 h : non'],
        ['Pont de la Musi à franchir', 'Non : oui', 'Non : oui', 'Oui : non'],
        ['Risque d\'inondation', 'Côté ruisseau, zone basse : non', 'Local à 4 m au-dessus du ruisseau : oui', 'Zone sèche : oui'],
        ['Conditions de stockage', 'Humidité côté ruisseau : moyen', 'Sol béton, toit étanche : oui', 'Oui'],
        ['Sécurité et gardiennage', 'Gardien de la base : oui', 'À convenir avec l\'hôpital : moyen', 'Oui'],
        ['Capacité', '60 m² : moyen', '150 m² : oui', 'Oui'],
      ],
    },
    result: "Décision écrite : stock tampon principal déplacé vers le local de l'HGR (accord du médecin chef de zone) ; le hangar de la base garde le matériel insensible à l'humidité.",
    pitfall: "Garder le stock là où il a toujours été. Le hangar côté ruisseau a mouillé 28 bâches : la crue a fait l'audit que personne n'avait fait.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 6',
    title: 'Fixer le seuil de réapprovisionnement et la règle de reconstitution',
    intro: "Un stock tampon entamé et non reconstitué n'en est plus un. La règle écrite doit tenir en deux lignes : un seuil, au-dessous duquel la commande part automatiquement, et une quantité, la différence entre la cible et le stock restant.",
    steps: [
      {
        title: 'Écrivez la règle',
        actions: [
          "Fixez le seuil à 90 % de la cible : il absorbe les écarts de comptage et les sorties de routine.",
          "Écrivez : toute sortie qui fait passer le stock sous le seuil déclenche la commande de reconstitution le jour même.",
          "Quantité à commander = cible − stock restant.",
          "Désignez la personne qui lance la commande (coordinateur logistique pays) et celle qui la suit (vous).",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Cible', 'Seuil (90 %)', 'Stock constaté 27/04', 'Commande de reconstitution'],
      rows: [
        ['Bâches', '1 020', '918', '400', '620'],
        ['Kits KCH-01', '200', '180', '118', '82'],
        ['Comprimés', '143 000', '128 700', '57 600', '85 400'],
      ],
    },
    example: {
      title: 'Fil rouge — reconstitution après la sortie du 29/04',
      lines: [
        "Sortie : 372 bâches, 100 kits, 36 000 comprimés → stock restant 28 bâches, 18 kits, 21 600 comprimés.",
        "Commande lancée le 29/04 à 20h30 : 1 020 − 28 = 992 bâches ; 200 − 18 = 182 kits ; 143 000 − 21 600 = 121 400 comprimés.",
      ],
    },
    result: "Une règle de deux lignes, un seuil par article et une commande calculable par n'importe quel membre de l'équipe.",
    pitfall: "Reporter la commande « après la crise ». Pendant ce temps, le stock est à 28 bâches et une seconde crue ne trouve plus rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 6',
    title: 'Auditer le stock tampon : la fiche d\'audit régulière',
    intro: "Un stock tampon non audité n'est pas un stock tampon : c'est une ligne comptable qui rassure sur le papier et qui trahit sur le terrain. L'audit se fait selon un calendrier fixe, par deux personnes, avec une fiche identique à chaque passage.",
    steps: [
      {
        title: 'Planifiez l\'audit',
        actions: [
          "Fixez trois déclencheurs : tous les trois mois, avant chaque saison des pluies, après chaque utilisation du stock.",
          "Désignez deux personnes : l'une compte, l'autre contrôle (magasinière et vous, par exemple).",
        ],
      },
      {
        title: 'Remplissez la fiche',
        actions: [
          "Pour chaque article : quantité théorique, quantité comptée, écart en nombre et en pourcentage.",
          "Contrôlez l'état (humidité, emballage), la péremption et la localisation exacte.",
          "Calculez la couverture de la cible : quantité utilisable ÷ cible. Un écart supérieur à 2 % déclenche une enquête écrite.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Théorique', 'Compté', 'Écart', 'État / péremption', 'Couverture de la cible'],
      rows: [
        ['Kits KCH-01', '120', '118', '−2 (−1,7 %)', 'Cartons secs ; péremption 09/2027', '59 % (118 sur 200)'],
        ['Bâches', '400', '400', '0', '28 mouillées (7 %)', '36 % (372 utilisables sur 1 020)'],
        ['Comprimés', '60 000', '57 600', '−2 400 (−4,0 %)', 'Emballage intact', '40 % (57 600 sur 143 000)'],
      ],
    },
    result: "Livrable 6 terminé : cible, lieu, seuil, règle de reconstitution et fiche d'audit. Constat : le tampon couvre 36 à 59 % de la cible, et l'écart de 4 % sur les comprimés exige une enquête.",
    pitfall: "Considérer un écart de 4 % comme du bruit de comptage. Au-delà de 2 %, soit le comptage théorique est faux, soit du matériel a disparu : dans les deux cas, il faut enquêter.",
  },

  // ───────────── CAS RÉSOLU ─────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Dossier Lukando : le raisonnement de H0 à H72',
    scenario: "Lundi 27 avril 2026, 06h00 : la Musi a débordé, vous avez un point de situation de six affirmations non vérifiées et 72 heures pour livrer une évaluation chiffrée et un CONOPS. Voici, par horizon, ce qui a été fait, pourquoi, et ce que cela a produit.",
    steps: [
      {
        title: 'H0 – H6 (lundi 27/04, 06h00-12h00) : confirmer avant d\'agir',
        actions: [
          "06h30 : fiche déclencheur écrite (seuil atteint, activation par Dr Kahindo).",
          "07h30-11h00 : OCHA et Logistics Cluster contactés ; pont fermé depuis 04h00 ; Flash Update n°1 reçu.",
          "12h00 : zones fixées (5), évaluateurs affectés, heures de remontée.",
        ],
        result: "Livrable 1 : fiche déclencheur, lacunes du MIRA, plan d'évaluation.",
      },
      {
        title: 'H6 – H24 (lundi 12h00 – mardi 06h00) : mesurer avec une grille commune',
        actions: [
          "12h30 : barème et règles de saisie écrits, diffusés.",
          "15h30-16h10 : formulaire Kobo testé et déployé sur 4 téléphones ; groupe WhatsApp ouvert.",
          "17h50 : comptage du hangar : 118 kits, 400 bâches (28 mouillées), 57 600 comprimés.",
        ],
        result: "Livrable 2 : formulaire, barème, groupe d'alertes, cinq remontées avant H+24.",
      },
      {
        title: 'H24 – H48 (mardi 28/04) : consolider et vérifier',
        actions: [
          "06h00-12h00 : grille v01 remplie ; B23 = 1 (Bweza Critique et à confirmer).",
          "06h30-10h30 : reconnaissance Lukando–Bweza : eau 55 cm (km 121) et 40 cm (km 126) ; A de Bweza passe de 4 à 3.",
          "Grille v02 à H+48 : Bweza 3,50 ; pont 3,25 ; B23 = 0.",
        ],
        result: "Livrable 3 : grille v02, synthèse, ordre de priorité et vérifications.",
      },
      {
        title: 'H48 – H60 (mercredi 29/04, 06h00-18h00) : écrire le plan',
        actions: [
          "06h00-14h00 : CONOPS rédigé (4 objectifs, 6 ressources, 6 décisions, chronologie).",
          "15h30 : relecture à froid, trois corrections.",
          "17h40 : objectif O2 atteint, accès camion 6 t validé.",
        ],
        result: "Livrable 4 : CONOPS de deux pages au plus.",
      },
      {
        title: 'H60 – H72 (mercredi 18h00 – jeudi 06h00) : valider, débloquer, partir',
        actions: [
          "18h30 : validation par la coordination ; 19h10 : diffusion ; 19h25-19h40 : test de compréhension.",
          "19h45 : ordre de déblocage signé ; 20h00-21h30 : chargement ; 20h30 : commande de reconstitution lancée.",
          "Jeudi 30/04, 06h00 : départ du convoi pour Bweza.",
        ],
        result: "Livrable 5 : CONOPS signé, déblocage tracé, bilan des 72 heures.",
      },
    ],
    pitfall: "Ce qui aurait été fait sans méthode : attendre le MIRA officiel, envoyer un camion de 10 t sur des passages à 55 cm d'eau, annoncer 400 bâches au siège alors que 372 sont utilisables, et découvrir à H+70 que personne n'a le droit de signer la sortie du stock.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La grille HEAT finale (version v02, 28/04/2026)',
    scenario: "Extrait de l'onglet « Evaluation HEAT » à H+48 : zone, population, quatre scores, score de sévérité calculé par la colonne G et statut. Les colonnes H et K figurent sur la diapositive suivante.",
    steps: [],
    table: {
      columns: ['Zone / Secteur', 'Population', 'H', 'E', 'A', 'T', 'Score', 'Statut'],
      rows: [
        ['Site de Bweza', '11 800', '3', '4', '3', '4', '3,50', 'Confirme'],
        ['Pont de la Musi (km 97)', '35 600', '3', '4', '3', '3', '3,25', 'Confirme'],
        ['Site de Kasika', '14 200', '2', '3', '2', '2', '2,25', 'Confirme'],
        ['Site de Mubimbi', '9 600', '1', '2', '1', '1', '1,25', 'Confirme'],
        ['Entrepôt de Lukando (stock tampon)', '35 600', '2', '4', '1', '2', '2,25', 'Confirme'],
      ],
    },
    result: "Synthèse v02 : Bweza Critique ; pont Critique ; Entrepôt et Kasika Elevee ; Mubimbi Moderee. B21 = 5 zones évaluées ; B22 = 2 zones Critique ; B23 = 0 zone Critique et à confirmer. Le TOTAL B21 est égal aux 5 lignes saisies.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Les colonnes H et K de la grille v02',
    scenario: "Les deux colonnes qui font passer la grille du chiffre à l'action : le besoin logistique chiffré et ce qu'il reste à vérifier.",
    steps: [],
    table: {
      columns: ['Zone', 'H — Besoin logistique identifié', 'K — Commentaire / à vérifier'],
      rows: [
        ['Site de Bweza', 'Dernier km : 372 bâches, 100 kits, 36 000 comprimés, départ 30/04 06h00 ; transport : 250 bâches de Goma sous réserve du pont ; stockage : tente 45 m² surélevée', 'A=3 confirmé par la reconnaissance du 28/04 ; eau à 25 cm aux deux passages le 29/04 à 17h40'],
        ['Pont de la Musi (km 97)', 'Transport : avis écrit sur la charge admissible ; option SRF aérien pour 250 bâches', 'Avis reçu le 29/04 à 08h00 : réouverture aux véhicules de 8 t maximum de poids total en charge après inspection'],
        ['Site de Kasika', 'Stockage : 28 bâches séchées à positionner ; surveillance du talus', 'Talus à revoir après la pluie du 28/04'],
        ['Site de Mubimbi', 'Aucun besoin logistique immédiat', 'Contrôle de routine à H+72'],
        ['Entrepôt de Lukando (stock tampon)', 'Stockage : sécher 28 bâches ; déplacer le stock vers le local de l\'HGR', 'H : 1 contre 2, 2 retenu ; accord du médecin chef de zone attendu'],
      ],
    },
    result: "La grille se lit sans le fichier d'origine : un lecteur qui n'a pas participé voit immédiatement quoi livrer, où, et ce qui reste à vérifier.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le CONOPS final, sections 1 à 3 (extrait condensé)',
    scenario: "Plan de contingence logistique (CONOPS) — Kemora Santé — Lukando. Version v02 validée le 29/04/2026.",
    steps: [],
    example: {
      title: 'Sections 1 à 3 telles que remises',
      lines: [
        "1. Contexte et déclencheur : crue de la Musi, nuit du 26 au 27/04/2026 ; H0 27/04 06h00 ; H+72 30/04 06h00 ; sites de Bweza (11 800), Kasika (14 200), Mubimbi (9 600), pont (km 97), hangar ; 9 cas suspects de choléra à Bweza ; HEAT v02 : Bweza 3,50 et pont 3,25 (Critique).",
        "2. Objectifs : O1 compter le hangar avant H+12 (fait) ; O2 accès camion 6 t chargé Lukando–Bweza avant H+60, eau inférieure à 30 cm aux km 121 et 126 ; O3 avis écrit sur le pont avant H+36, sinon SRF aérien avant H+60 ; O4 départ à H+72 avec 372 bâches, 100 kits, 36 000 comprimés, arrivée avant 09h00.",
        "3. Ressources : kits KCH-01 118 (confirmé 27/04) ; bâches 400 dont 372 utilisables (confirmé) ; comprimés 57 600 (confirmé) ; tente 45 m² 1 (confirmé 24/04) ; camion Umoja 6 t à Lukando (confirmé 27/04) ; entrepôt de Goma, 450 bâches (à confirmer, inventaire du 16/04).",
      ],
    },
    result: "Un début de document lisible en une minute : le contexte, quatre objectifs mesurables et des ressources dont chacune porte son statut.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le CONOPS final, sections 4 à 6 et cartouches',
    scenario: "Suite et fin du CONOPS validé le 29/04/2026 à 18h30.",
    steps: [],
    example: {
      title: 'Sections 4 à 6 telles que remises',
      lines: [
        "4. Chaîne de décision : déblocage du tampon de Lukando jusqu'à 150 kits ou 500 bâches → coordinatrice de projet (suppléant : coordinateur logistique pays) ; Goma et Nairobi → coordinateur logistique pays ; changement d'itinéraire → chef de convoi après avis du point focal sécurité ; SRF aérien → coordinateur logistique pays ; dépense supérieure à 3 000 USD → coordinateur logistique pays avec la coordinatrice ; départ du convoi → coordinatrice sur proposition du logisticien.",
        "5. Chronologie : H0-H6 confirmer, contacter OCHA et le cluster, constituer l'équipe ; H6-H24 barème, Kobo, comptage du hangar ; H24-H48 grille v01-v02, reconnaissance, avis sur le pont ; H48-H60 CONOPS, remblai des passages, SRF si nécessaire ; H60-H72 validation, diffusion, ordre de déblocage, chargement, départ à 06h00.",
        "6. Contacts : Dr Kahindo (coordinatrice) ; A. Sow (Logistics Cluster, réunion le mardi 10h00) ; G. Kavira (stock) ; J. Katembo (sécurité, astreinte nuit).",
        "Cartouches : Rédigé par : logisticien terrain, Kemora Santé Lukando, 2026-04-29. Validé par : Dr Clarisse Kahindo, coordinatrice de projet, 2026-04-29.",
      ],
    },
    result: "Un CONOPS de deux pages au plus, signé, que l'équipe exécute sans vous appeler. Rapprochez-le de votre carnet du lundi 06h00 : sur six affirmations, deux étaient fausses ou dépassées (accès à Bweza, état du hangar). C'est la valeur de vos 72 heures.",
    tip: "Comparez la version signée avec votre brouillon : chaque différence est une décision de la coordination que vous auriez dû anticiper, donc un point à ajouter à votre CONOPS-cadre.",
  },

  // ───────────── EXERCICES ─────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Grille HEAT : cas « Crue de l\'Artibonite et risque de résurgence du choléra, Gonaïves, Haïti »',
    instructions: "Contexte (fictif, inspiré de situations rencontrées dans l'Artibonite) : vous êtes logisticien(ne) d'une ONG de santé, 14 heures après une tempête tropicale qui a provoqué la crue de la rivière Artibonite et l'inondation de plusieurs quartiers de Gonaïves, zone où des résurgences de choléra ont déjà été documentées. Point de situation de votre coordinateur, incomplet : « OCHA parle d'un MIRA en préparation, rien de publié » ; « Raboteau serait le quartier le plus touché, mais Bigot pourrait l'être encore plus, personne n'a de chiffre fiable » ; « La RN1 vers Gonaïves serait coupée par endroits, praticable en camion ou seulement en moto, on ne sait pas » ; « Stock prépositionné à Saint-Marc (kits WASH, bâches, comprimés de purification d'eau), état et quantité non confirmés » ; « La direction veut un plan d'action logistique complet d'ici 72 h ». Refaites seul(e) les Procédures 1 à 3.",
    steps: [
      { title: 'Notez le point de situation', actions: ["Recopiez les cinq affirmations, numérotez-les et classez chacune : confirmé, à vérifier, contredit.", "Écrivez la fiche déclencheur : événement, zones, H0, sources, décision d'activation."] },
      { title: 'Écrivez le plan d\'évaluation', actions: ["Fixez au moins trois zones : Raboteau, Bigot, accès à l'entrepôt de Saint-Marc ; ajoutez un axe si vous le jugez utile.", "Pour chaque zone : évaluateur, moyen, heure de première remontée."] },
      { title: 'Écrivez le barème et les règles', actions: ["Reprenez le barème commun ; précisez la règle du doute et l'ajustement épidémique à appliquer à l'Exposition (antécédent de choléra).", "Décidez votre règle de population pour l'entrepôt (dépendante ou nulle) et tenez-la pour toutes les lignes."] },
      { title: 'Notez chaque zone sur papier', actions: ["Avant d'ouvrir les lignes d'exemple du fichier, notez H, E, A et T de chaque zone, avec une phrase de justification.", "Marquez « à vérifier » chaque donnée qui ne repose que sur le point de situation."] },
      { title: 'Remplissez le template', actions: ["Ouvrez grille-evaluation-besoins-mira.xlsx, videz A5:F7 et H5:K7, puis saisissez vos zones colonne par colonne (A à K).", "Population : Raboteau environ 8 200 ; Bigot environ 5 400, non vérifié ; entrepôt selon votre règle."] },
      { title: 'Contrôlez les sorties', actions: ["Vérifiez G à la main, relisez l'onglet Synthese et les compteurs B21 à B23.", "Faites le test de sensibilité des poids (Exposition à 0,35) et notez si la priorité change."] },
      { title: 'Comparez avec le corrigé possible', actions: ["Comparez vos scores avec les lignes d'exemple du template : un écart d'un point sur un axe est acceptable s'il est expliqué dans la colonne K."] },
    ],
    example: {
      title: 'Pour vous contrôler : les trois lignes d\'exemple livrées dans le template',
      lines: [
        "Raboteau : population 8 200 ; H 3, E 4, A 3, T 3 → score 3,25 → Critique ; statut Confirme.",
        "Bigot : population 5 400 ; H 2, E 3, A 2, T 2 → score 2,25 → Elevee ; statut A confirmer (population non vérifiée).",
        "Accès entrepôt Saint-Marc : population 0 ; H 1, E 1, A 2, T 3 → score 1,75 → Moderee ; statut A confirmer (stock non confirmé depuis 6 mois).",
        "Synthèse : B21 = 3 zones ; B22 = 1 zone Critique ; B23 = 0.",
      ],
    },
    pitfall: "Donner la même note à Raboteau et à Bigot « parce qu'on ne sait pas ». Notez avec la règle du doute, marquez la donnée « à vérifier » et planifiez la vérification.",
    deliverable: "grille-evaluation-besoins-mira.xlsx complétée (au moins 3 zones, A à K renseignées, statuts et dates, synthèse cohérente) + une note de 5 lignes justifiant vos scores et la liste de vos vérifications avec responsable et échéance.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — CONOPS : cas Gonaïves',
    instructions: "À partir de votre grille de l'exercice 1, rédigez le plan de contingence logistique avec plan-contingence-conops-template.docx (Procédure 4). Il doit intégrer explicitement : l'objectif logistique mesurable des 60 premières heures (ouverture d'un accès vers la zone la plus sévèrement scorée), l'état du stock prépositionné de Saint-Marc tel que vous le formuleriez tant qu'il n'est pas confirmé, la chaîne de décision pour son déblocage et une chronologie 0-72 h cohérente avec vos scores.",
    steps: [
      { title: 'Section 1 — Contexte et déclencheur', actions: ["Nature de l'événement, date et heure de déclenchement, zones affectées, source de l'alerte ; précisez ce qui n'est pas encore chiffré."] },
      { title: 'Section 2 — Objectifs mesurables', actions: ["Rédigez 3 à 4 objectifs : quoi, où, combien, avant quelle heure, responsable.", "L'un d'eux porte sur l'accès à la zone la plus sévèrement scorée avant H+60."] },
      { title: 'Section 3 — Ressources prépositionnées', actions: ["Complétez le tableau à deux colonnes ; le stock de Saint-Marc figure en « À confirmer » avec la date du dernier inventaire connu, jamais comme acquis.", "Ajoutez l'action qui le transformera en « Confirmé » et l'heure limite."] },
      { title: 'Section 4 — Chaîne de décision', actions: ["Au moins quatre lignes : déblocage du stock tampon, changement d'itinéraire en cours de route, transport aérien, dépense d'urgence ; une fonction habilitée et un suppléant par ligne."] },
      { title: 'Section 5 — Chronologie 0-72 h', actions: ["Remplissez les cinq horizons avec des actions datées et un responsable ; vérifiez que chaque zone Critique reçoit une action avant H+24."] },
      { title: 'Section 6 et cartouches', actions: ["Quatre contacts nommés, avec suppléant ; cartouche Rédigé par et Date remplis ; Validé par vide jusqu'à validation."] },
      { title: 'Relecture à froid', actions: ["Faites relire par une personne qui n'a pas participé ; vérifiez une à deux pages, aucun texte d'aide, chiffres cohérents avec la grille."] },
    ],
    pitfall: "Écrire « améliorer l'accès à Gonaïves » comme objectif. Il faut un quoi, un où, un combien et une heure : « ouvrir un accès camion vers Raboteau d'ici H+60 ».",
    deliverable: "plan-contingence-conops-template.docx complété, deux pages au plus, cohérent avec la grille de l'exercice 1 (mêmes zones, mêmes priorités, mêmes statuts).",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Dimensionner un stock tampon à Saint-Marc',
    instructions: "Appliquez la Procédure 6 à l'entrepôt régional de Saint-Marc. Données (fictives) : kits WASH ; consommation de crise estimée à 150 kits par jour pendant les 72 premières heures, puis 50 kits par jour ; délais constatés sur les trois dernières commandes de réapprovisionnement : 6, 9 et 7 jours ; marge de sécurité de 15 %. Dernier inventaire connu : il y a six mois, non confirmé.",
    steps: [
      { title: 'Fixez le lead time', actions: ["Retenez le délai le plus long observé et justifiez-le en une phrase."] },
      { title: 'Calculez la cible', actions: ["Besoin du pic de 72 heures + besoin journalier suivant × (lead time − 3 jours), puis marge, puis arrondi à la dizaine supérieure."] },
      { title: 'Fixez le seuil', actions: ["Seuil à 90 % de la cible ; écrivez la règle de reconstitution et la quantité à commander si le stock tombe à 300 kits."] },
      { title: 'Planifiez l\'audit', actions: ["Écrivez les trois déclencheurs de l'audit et la liste des colonnes de la fiche (théorique, compté, écart, état et péremption, couverture)."] },
      { title: 'Traitez le stock inconnu', actions: ["Écrivez dans le CONOPS comment vous formulez l'état du stock tant qu'il n'est pas audité, et ce que vous déclenchez dans les 24 premières heures."] },
    ],
    example: {
      title: 'Pour vous contrôler',
      lines: [
        "Lead time retenu : 9 jours. Pic de 72 h : 150 × 3 = 450. Après : 50 × (9 − 3) = 300. Total 750.",
        "Avec 15 % de marge : 750 × 1,15 = 862,5 → 863, arrondi à 870. Seuil à 90 % : 783.",
        "Stock à 300 kits : commande de reconstitution de 870 − 300 = 570 kits, lancée le jour même.",
      ],
    },
    pitfall: "Utiliser la moyenne des trois délais (7,3 jours) plutôt que le plus long. La moyenne dimensionne un stock qui suffit les jours où tout va bien.",
    deliverable: "Une fiche de dimensionnement d'une page : scénario, lead time et justification, cible, seuil, règle de reconstitution, plan d'audit, formulation de l'état du stock non confirmé.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Formulaire Kobo et messages WhatsApp : cas Gonaïves',
    instructions: "Pour l'évaluation des zones de Gonaïves, concevez le formulaire Kobo Toolbox ou ODK de votre équipe de quatre évaluateurs et les règles de remontée par WhatsApp (Procédure 2).",
    steps: [
      { title: 'Listez les questions', actions: ["Écrivez les questions du formulaire : nom, type, choix ou contrainte (identification, quatre scores, commentaires, besoin logistique, statut, alerte bloquante, photo)."] },
      { title: 'Écrivez la logique de saut', actions: ["Pour chaque axe, écrivez la condition qui rend le commentaire obligatoire à partir de 3 (en français ou en XLSForm : relevant et required)."] },
      { title: 'Écrivez le protocole de test', actions: ["Listez les cinq vérifications à faire avant le départ des évaluateurs (aperçu, deux téléphones, GPS, synchronisation, suppression des tests)."] },
      { title: 'Définissez le format WhatsApp', actions: ["Écrivez le format du message, la définition d'une alerte bloquante et le délai d'accusé de réception."] },
      { title: 'Rédigez trois messages types', actions: ["Un message de remontée normale pour Raboteau, une alerte bloquante sur la RN1, un message pour l'entrepôt de Saint-Marc."] },
      { title: 'Préparez le calibrage', actions: ["Décrivez deux cas à faire noter par les quatre évaluateurs et la règle d'écart au-delà de laquelle on corrige le barème."] },
    ],
    example: {
      title: 'Exemple de ligne de formulaire et de message attendus (cas déjà traité)',
      lines: [
        "type : text | name : com_a | label : Commentaire — Accès | relevant : ${score_a} >= 3 | required : yes",
        "ALERTE BLOQUANTE : PONT MUSI | 12h10 | fermé aux véhicules de plus de 3,5 t depuis 04h00 (source Logistics Cluster).",
      ],
    },
    deliverable: "Un document d'une page : la liste des questions du formulaire, les conditions de saut, le protocole de test, le format et les trois messages WhatsApp, le plan de calibrage.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Fiche déclencheur : H0 est daté à l'heure, la source de l'alerte est nommée, le seuil de déclenchement et le décideur sont écrits.",
      "Formulaire : les quatre scores sont à choix 0-4 avec ancrage, et le commentaire n'est obligatoire qu'à partir de 3.",
      "Grille : toutes les colonnes A à K sont renseignées ; C à F sont des entiers de 0 à 4 ; chaque score G est égal à votre calcul manuel.",
      "Grille : chaque ligne porte un statut de la liste (Confirme, A confirmer, Obsolete), une date AAAA-MM-JJ de l'information et une vérification en colonne K.",
      "Grille : les poids font 100 % et la synthèse est cohérente (B21 = nombre de lignes saisies ; B22 et B23 sont justifiés).",
      "CONOPS : chaque objectif est mesurable (quoi, où, combien, heure) et a un responsable ; aucun objectif n'est du type « améliorer ».",
      "CONOPS : un stock « à confirmer » n'apparaît nulle part comme acquis ; la section 3 porte le statut et la date de chaque ressource.",
      "CONOPS : la chaîne de décision nomme une fonction, un nom et un suppléant par type de décision.",
      "CONOPS : la chronologie couvre les cinq horizons, chaque zone Critique reçoit une action avant H+24, le document tient sur deux pages au plus et ne contient aucun texte d'aide.",
      "Stock tampon : la cible est calculée à partir d'un lead time réel (le plus long), le seuil est à 90 %, un audit est planifié avec ses trois déclencheurs.",
    ],
  },

  // ───────────── ERREURS FRÉQUENTES ─────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Lancer l'évaluation terrain sans grille commune — des évaluateurs qui ont des critères différents produisent des scores incomparables. Parade : barème écrit, diffusé et calibré sur deux cas avant le départ (Procédure 2, étapes 1 et 6).",
      "Confondre un stock prépositionné « annoncé » et un stock « confirmé » — un stock qui figure dans un inventaire de six mois n'est pas disponible. Parade : comptage physique, statut et date dans la section 3 du CONOPS.",
      "Écrire un CONOPS trop général pour être exécutable — « améliorer l'accès » ne donne aucune instruction. Parade : quoi, où, combien, avant quelle heure, qui (Procédure 4, étape 3).",
      "Sous-estimer le risque épidémique dans le score d'Exposition — une inondation en zone à antécédent de choléra est un facteur aggravant sanitaire. Parade : ajustement +1 point, plafonné à 4.",
      "Attendre la publication du MIRA officiel avant d'agir — il peut arriver après la fenêtre des 72 heures. Parade : grille HEAT dès H6.",
      "Modifier les poids de la pondération sans que la somme fasse 100 % — le score sort de l'échelle de 0 à 4. Parade : contrôle de C10 et test de sensibilité.",
      "Effacer ou modifier les formules de la colonne G ou de l'onglet Synthese en vidant les lignes d'exemple. Parade : n'effacer que A à F et H à K.",
      "Diffuser le CONOPS avant sa validation ou le valider sans le faire relire. Parade : validation signée, puis test des trois questions avec les exécutants.",
      "Débloquer un stock sur un simple message. Parade : ordre écrit, signé par le rôle habilité de la section 4, bon de sortie et reconstitution le jour même.",
      "Constituer un stock tampon puis l'oublier. Parade : seuil à 90 %, audit trimestriel, avant chaque saison des pluies et après chaque utilisation.",
    ],
  },

  // ───────────── RÉCAPITULATIF ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez confirmé un déclencheur, fixé H0, demandé l'état du MIRA et listé ses lacunes pour la logistique, puis constitué un plan d'évaluation par zone.",
      "Vous avez fixé un barème commun 0-4, construit et testé un formulaire Kobo Toolbox ou ODK, ouvert un groupe WhatsApp d'alertes et calibré l'équipe.",
      "Vous avez rempli grille-evaluation-besoins-mira.xlsx colonne par colonne, contrôlé les scores, testé la pondération et lu la synthèse et ses trois compteurs.",
      "Vous avez transformé une synthèse en priorités et en vérifications, puis produit une version v02 de la grille.",
      "Vous avez rédigé plan-contingence-conops-template.docx section par section : objectifs mesurables, ressources avec statut, chaîne de décision, chronologie 0-72 h, contacts.",
      "Vous avez fait valider et diffuser le CONOPS, émis un ordre de déblocage de stock écrit et dressé le bilan des 72 heures.",
      "Vous avez dimensionné un stock tampon à partir d'un lead time réel, fixé un seuil de réapprovisionnement et planifié un audit.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer la différence entre un MIRA interagences et une évaluation de capacité logistique de type HEAT.",
      "Je sais construire un formulaire de collecte terrain avec Kobo Toolbox ou ODK pour une évaluation rapide, avec commentaire obligatoire à partir de 3.",
      "Je sais calculer et interpréter un score de sévérité HEAT à partir de ses quatre axes et de ses poids.",
      "Je sais rédiger un CONOPS avec des objectifs mesurables, une chaîne de décision claire et une chronologie 0-72 h.",
      "Je comprends pourquoi un stock tampon doit être audité régulièrement et non supposé disponible sur la seule base d'un inventaire ancien.",
      "J'ai complété une grille d'évaluation des besoins avec le template fourni, scores et statuts de vérification inclus.",
      "J'ai rédigé un plan de contingence logistique de deux pages au plus, exploitable par une équipe qui ne l'a pas écrit.",
      "Je sais fixer H0 et dimensionner un stock tampon à partir d'un lead time réel, avec un seuil de réapprovisionnement.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 03 — Gestion de Flotte & Transport en Zones Complexes : vous passerez de la planification d'urgence à la gestion complète d'une flotte de véhicules en contexte humanitaire — maintenance, sécurité, fuel management, planification des missions et reporting kilométrique.",
  },
]
