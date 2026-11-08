// Module 01 — Fondamentaux de la Logistique Humanitaire
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates) : théorie strictement utile
// à l'action, puis chaque procédure des 72 premières heures découpée en
// étapes (une diapositive par étape), appliquée à un cas fil rouge unique
// (ONG Kemora Santé, Lukando, Nord-Kivu — cas fictif), cas résolu,
// exercices corrigeables et check-lists d'auto-contrôle.
export default [
  {
    type: 'cover',
    title: 'Fondamentaux de la Logistique Humanitaire',
    hook: "En 72 heures après votre arrivée sur une crise, vous aurez en main une cartographie des acteurs datée et vérifiée, une réponse de faisabilité chiffrée à la première demande du programme, un itinéraire contrôlé et une note de positionnement d'une page présentée à votre coordinateur — exactement ce qu'un professionnel opérationnel produit, étape par étape.",
  },
  {
    type: 'objectives',
    items: [
      "Exploiter le 3W/4W de votre zone (téléchargement, filtrage par zone et par secteur, contrôle de fraîcheur) en produisant une liste datée des acteurs présents et des questions à confirmer.",
      "Vous enregistrer auprès du Logistics Cluster et exploiter ses services et alertes, en produisant un message d'enregistrement envoyé et un compte rendu de réunion de coordination.",
      "Remplir le template cartographie-acteurs-logistiques.xlsx colonne par colonne, onglet de synthèse compris, en produisant une cartographie où chaque ligne porte une date et un statut (Confirmé / À confirmer / Obsolète).",
      "Positionner votre organisation (seul acteur, complémentaire ou redondant) à l'aide d'une matrice de recoupement, en produisant un signalement écrit de toute redondance à votre coordination.",
      "Transformer une demande du programme en réponse de faisabilité chiffrée (poids, volume, véhicules, rétro-planning du pipeline), en produisant un message Go / Go conditionnel / No-go daté.",
      "Passer une décision logistique au filtre des 4 principes humanitaires et vérifier un itinéraire avant engagement, en produisant une grille de priorisation écrite et une fiche de vérification d'itinéraire.",
      "Rédiger la fiche-positionnement-mission-j1.docx section par section, en produisant une note d'une page présentée à votre coordinateur avant H+72.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne vous demande pas de retenir des définitions : il vous fait produire, dans l'ordre réel d'une arrivée en mission, les sept livrables qu'un logisticien terrain doit avoir en main au bout de 72 heures. Chaque livrable est construit étape par étape sur un même cas fil rouge, puis vous le refaites seul sur le cas de Tine (Tchad).",
    ],
    bullets: [
      "Livrable 1 — Un extrait du 3W filtré sur votre zone, daté, avec la liste des questions à confirmer.",
      "Livrable 2 — Un message d'enregistrement auprès du point focal Logistics Cluster et le compte rendu de votre première réunion de coordination.",
      "Livrable 3 — La cartographie des acteurs (template xlsx) remplie, avec son onglet Synthèse par zone à jour.",
      "Livrable 4 — Une matrice de positionnement (seul / complémentaire / redondant) et le message de signalement d'une redondance.",
      "Livrable 5 — Une réponse de faisabilité chiffrée à une demande du programme (calcul de charge, choix des véhicules, rétro-planning).",
      "Livrable 6 — Une grille de priorisation écrite et une fiche de vérification d'itinéraire avec décision Go / No-go.",
      "Livrable 7 — La note de positionnement de mission (template docx) d'une page, prête à présenter.",
    ],
    example: {
      title: 'Le cas fil rouge de tout le module (fictif mais réaliste)',
      lines: [
        "Organisation : Kemora Santé, ONG médicale internationale (fictive). Vous êtes son logisticien(ne) terrain, nouvellement affecté(e) à la base de Lukando.",
        "Lieu : Lukando, localité fictive du Nord-Kivu (RDC), à 142 km de Goma par la route.",
        "Crise : afflux de 38 000 personnes déplacées entre le 2 et le 9 mars 2026 après des affrontements ; 41 cas suspects de choléra notifiés sur les 7 derniers jours dans 3 sites (Kasika, Mubimbi, Bweza).",
        "Votre arrivée : jeudi 12 mars 2026 (J1). Échéance : présenter votre note de positionnement le samedi 14 mars (J3) au soir.",
        "Première demande du programme : « 500 kits de traitement choléra et 2 tentes à Lukando pour lundi 16 mars ».",
        "Vos interlocuteurs internes (fictifs) : Dr Clarisse Kahindo, coordinatrice de projet à Lukando ; Jean-Marc Ilunga, coordinateur logistique pays à Goma.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Votre point de départ : un briefing d'arrivée incomplet",
    body: [
      "Le 12 mars à 7h00, la coordinatrice vous briefe en 15 minutes entre deux réunions. Tout ce qui suit est oral, non daté et non vérifié — c'est la situation normale d'une arrivée en urgence, et c'est la matière première de tout le module.",
    ],
    example: {
      title: 'Ce que vous avez noté dans votre carnet (J1, 7h15)',
      lines: [
        "« Il y a une autre ONG médicale qui fait du choléra à l'hôpital, je crois. Je ne sais pas combien de lits. »",
        "« Le Logistics Cluster est actif à Goma, il y aurait un entrepôt commun, à vérifier. »",
        "« La route Goma–Lukando passe, mais le pont sur la Musi est fragile et il y a un check-point vers Bweza. »",
        "« Nous, on ouvre un centre de traitement du choléra de 40 lits à l'hôpital de Lukando lundi. »",
        "« Il y a peut-être une ONG nutrition à Bweza, elle était dans le 3W. »",
        "« J'ai un transporteur, Transports Bahati, qui a proposé ses camions. »",
      ],
    },
    tip: "Recopiez chaque affirmation du briefing mot pour mot, avec l'heure et le nom de la personne. Vous allez vérifier chacune d'elles une par une : sans trace écrite, vous ne saurez plus ce qui était une certitude et ce qui était un « je crois ».",
  },
  {
    type: 'stat-callout',
    stat: '72 h',
    caption: "Le délai pour passer de « nouvel arrivant » à « acteur positionné » : acteurs vérifiés, cluster contacté, risques repérés, note présentée.",
    context: "Au-delà, les décisions se prennent sans vous — ou contre votre avis. Le découpage J1 / J2 / J3 de ce module suit ce délai.",
  },
  {
    type: 'concept',
    title: "Pourquoi un système de coordination existe : la réforme de 2005",
    body: [
      "Avant 2005, chaque agence de l'ONU et chaque grande ONG répondait à une crise avec ses propres circuits, souvent sans savoir ce que faisait le voisin à 20 km. Résultat : deux organisations livraient la même zone deux fois pendant qu'une autre restait sans aucune couverture.",
      "La réforme humanitaire de 2005 a créé le Cluster System : chaque secteur d'intervention (santé, eau/assainissement, abris, nutrition, logistique...) a un cluster désigné, piloté par une agence « cluster lead ». Votre travail de coordination consiste à vous brancher sur ce système dès le premier jour.",
    ],
    example: {
      title: 'Ce que cela change pour vous à Lukando',
      lines: [
        "Sans coordination : Kemora Santé ouvre un centre choléra de 40 lits à l'hôpital, à côté d'un centre de 60 lits déjà ouvert par une autre ONG — pendant que Bweza, à 40 km, n'a rien.",
        "Avec coordination : le 3W et le cluster santé révèlent le doublon dès J2, et les 40 lits sont réorientés vers Bweza.",
      ],
    },
    pitfall: "Penser que la coordination est « l'affaire du coordinateur ». Le logisticien est celui qui déplace le matériel : c'est lui qui matérialise un doublon sur le terrain si personne n'a vérifié.",
  },
  {
    type: 'comparison-table',
    title: "L'architecture de la réponse : qui fait quoi, et ce que vous en attendez",
    columns: ['Niveau', 'Rôle', 'Ce que vous y cherchez concrètement'],
    rows: [
      ['Coordonnateur humanitaire et équipe humanitaire pays', "Direction stratégique de la réponse dans le pays, arbitrages entre agences.", "Les grandes priorités géographiques et les positions communes sur l'accès."],
      ['OCHA', "Chef d'orchestre : ne délivre pas d'aide, coordonne ceux qui le font. Convoque la coordination générale, publie les SitReps, maintient le 3W/4W.", "Le 3W/4W, les SitReps, les cartes d'accès, le calendrier des réunions, les contacts des cluster leads."],
      ['Clusters sectoriels', "Coordination par secteur (santé, WASH, nutrition, protection...), chacun piloté par une agence lead.", "Qui intervient dans votre secteur et votre zone, les standards techniques, les lacunes de couverture."],
      ['Logistics Cluster (lead : PAM)', "Couche de coordination logistique au-dessus des acteurs, activée quand les capacités locales sont insuffisantes pour l'ensemble de la communauté humanitaire.", "Entrepôt commun, transport partagé, pont aérien, état des routes et alertes d'accès."],
      ['Votre ONG', "Exécute son propre programme avec sa propre logistique (flotte, entrepôt, achats).", "Votre mandat, vos zones, vos capacités — à déclarer aux clusters pour apparaître dans le 3W."],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les clusters que le logisticien consulte le plus souvent',
    columns: ['Cluster', 'Agence lead au niveau mondial', 'Pourquoi le logisticien y va'],
    rows: [
      ['Logistique', 'PAM', "Services communs, routes, entrepôts, alertes d'accès, Service Request Form."],
      ['Télécommunications d\'urgence', 'PAM', "Connectivité partagée et radio dans les zones sans réseau."],
      ['Santé', 'OMS', "Localisation des structures et des centres de traitement : évite de livrer en double."],
      ['Eau, hygiène et assainissement (WASH)', 'UNICEF', "Chloration, transport d'eau : flux de camions concurrents sur les mêmes routes."],
      ['Nutrition', 'UNICEF', "Sites de nutrition et volumes d'intrants à acheminer sur les mêmes axes."],
      ['Protection', 'HCR (crises de conflit)', "Contraintes d'accès, sensibilités communautaires, sites de déplacés."],
    ],
  },
  {
    type: 'concept',
    title: 'Le Logistics Cluster : une couche au-dessus de votre logistique',
    body: [
      "Le Logistics Cluster est piloté par le PAM. Il s'active lorsque les capacités logistiques locales sont insuffisantes pour répondre aux besoins de la communauté humanitaire dans son ensemble — pas seulement de votre organisation.",
      "Concrètement, il peut mettre en place un entrepôt commun, un pont aérien humanitaire partagé, ou une coordination des convois routiers dans une zone à accès restreint. Il publie aussi l'information la plus fiable sur l'état réel des infrastructures : les Logistics Capacity Assessments (LCA).",
    ],
    bullets: [
      "Vous continuez à gérer votre propre flotte et votre propre entrepôt.",
      "Vous devez savoir s'il est activé dans votre zone et vous y enregistrer dès J1–J2, même sans utiliser ses services.",
      "Vous l'utilisez quand vos capacités sont dépassées : transport partagé, stockage tampon, information sur les routes.",
    ],
    highlight: "Le Logistics Cluster n'est PAS votre logistique interne. C'est une couche de coordination au-dessus — et votre meilleure source d'alertes routières.",
    example: {
      title: 'Fil rouge — ce que le cluster offre à Lukando (situation au 12 mars)',
      lines: [
        "Activation : oui, pour l'Est de la RDC ; hub à Goma.",
        "Entrepôt commun : 2 unités de stockage mobiles (MSU) de 240 m² à Goma, sur demande via Service Request Form.",
        "Transport commun : 1 rotation routière par semaine Goma–Lukando, le mercredi.",
        "Réunion de coordination logistique : chaque mardi à 10h00 à Goma, avec connexion à distance.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Les produits d'OCHA dont vous avez besoin, et où les trouver",
    body: [
      "Le point d'entrée officiel est le portail de coordination OCHA par pays (cité dans le contenu source sous son ancien nom humanitarianresponse.info ; ses pages pays ont migré vers ReliefWeb Response, response.reliefweb.int). Les fichiers 3W/4W sont le plus souvent publiés aussi sur HDX (data.humdata.org).",
    ],
    bullets: [
      "Le 3W/4W (Who does What Where — When) : la matrice qui recense qui fait quoi, où et depuis quand. C'est l'outil de base contre les doublons.",
      "Le SitRep (situation report) : l'état de la crise à une date donnée — chiffres de population, besoins, contraintes d'accès.",
      "Les cartes et notes d'accès : zones contestées, incidents, contraintes de mouvement.",
      "Le calendrier des réunions de coordination générale et sectorielle, avec les contacts des cluster leads.",
    ],
    tip: "La connexion est souvent meilleure au hub qu'à la base terrain. Téléchargez tout ce dont vous avez besoin avant de quitter la capitale ou le hub, et enregistrez-le dans un dossier « 01_Coordination » avec la date dans chaque nom de fichier.",
    pitfall: "Prendre un 3W pour une photographie du jour. Un 3W vieux de plus de 3 mois est à prendre avec prudence : il faut le croiser avec les informations de votre coordinateur terrain.",
  },
  {
    type: 'concept',
    title: 'Le rôle réel du logisticien humanitaire : garant de la faisabilité',
    body: [
      "Dans une ONG, le programme (santé, nutrition, protection...) décide QUOI faire. La logistique décide si c'est possible, QUAND, et COMMENT. Un médecin peut prescrire 500 kits de traitement contre le choléra pour demain matin : si la logistique n'a pas anticipé le transport, le dédouanement, le stockage nécessaire et la disponibilité d'un véhicule, la prescription ne vaut rien.",
      "Le logisticien senior n'est donc pas un exécutant de commandes. Il participe aux réunions de planification du programme, pas seulement aux demandes après coup. Un logisticien qui découvre une commande de 2 tonnes le jour où le camion doit partir a déjà perdu la bataille.",
    ],
    example: {
      title: 'Fil rouge — la même demande, deux postures',
      lines: [
        "Posture d'exécutant : « D'accord, je cherche un camion pour lundi. » → le camion de 10 t est bloqué au pont de la Musi limité à 12 t (voir Procédure 5).",
        "Posture de garant de la faisabilité : « 300 kits sont faisables lundi si la route est validée samedi ; les 200 autres arriveront entre le 22 et le 25 mars. Voici pourquoi. »",
      ],
    },
    tip: "Demandez dès J1 à être invité(e) à la réunion de planification hebdomadaire du programme. C'est là que naissent les demandes que vous devrez rendre possibles.",
  },
  {
    type: 'comparison-table',
    title: "Vos responsabilités en contexte d'urgence et ce que vous livrez",
    columns: ['Domaine', 'Ce que vous faites', 'Ce que vous livrez'],
    rows: [
      ['Coordination externe', "Vous enregistrez l'ONG auprès des clusters, suivez le 3W, assistez aux réunions de coordination.", "Cartographie des acteurs datée, comptes rendus de réunion."],
      ['Faisabilité et planification', "Vous transformez chaque demande du programme en plan réalisable, avec délais et conditions.", "Réponse de faisabilité écrite, rétro-planning."],
      ['Approvisionnement', "Vous suivez stocks et commandes, du fournisseur jusqu'au point de distribution.", "État de stock, suivi des commandes (modules suivants)."],
      ['Transport et flotte', "Vous choisissez véhicules et transporteurs, organisez les convois.", "Plan de chargement, lettres de voiture, consignes convoi."],
      ['Stockage', "Vous garantissez des conditions de stockage adaptées et la traçabilité.", "Fiches de stock, rapports d'entrepôt."],
      ['Accès et sécurité', "Vous vérifiez les itinéraires avec le point focal sécurité avant tout engagement.", "Fiche de vérification d'itinéraire, décision Go / No-go."],
      ['Principes humanitaires', "Vous appliquez les 4 principes à chaque choix de transporteur, d'itinéraire et de priorité.", "Critères de priorisation écrits, journal des décisions."],
    ],
  },
  {
    type: 'concept',
    title: 'Le pipeline logistique : la chaîne que vous devez voir en entier',
    body: [
      "Le pipeline logistique est l'ensemble de la chaîne, du fournisseur jusqu'au bénéficiaire final : achat → transport international → dédouanement → stockage → transport local → distribution. Une demande n'est faisable que si chaque maillon l'est, dans le délai demandé.",
      "Le dernier segment — le last mile — va de l'entrepôt régional jusqu'au point de distribution final, dans des conditions d'accès souvent très dégradées. C'est presque toujours lui qui fixe le délai réel.",
    ],
    example: {
      title: "Fil rouge — le pipeline des 200 kits manquants (délais d'exemple)",
      lines: [
        "Achat / mise à disposition : stock de la centrale régionale de Kemora Santé à Nairobi (fictive) → 1 jour de préparation.",
        "Transport international : fret aérien Nairobi → Goma → 2 jours.",
        "Dédouanement avec exonération humanitaire : 3 à 5 jours.",
        "Stockage tampon : entrepôt Kemora Goma ou entrepôt commun du cluster → 1 jour.",
        "Transport local (last mile) : Goma → Lukando, 142 km dont 94 km de piste → 1 jour.",
        "Total : 8 à 10 jours → arrivée à Lukando entre le 22 et le 25 mars si la commande part le 13 mars.",
      ],
    },
    pitfall: "Annoncer un délai en ne regardant que le transport. Ici, le dédouanement pèse plus lourd que le vol.",
  },
  {
    type: 'comparison-table',
    title: 'Les 4 principes humanitaires appliqués à vos décisions logistiques',
    columns: ['Principe', 'Ce que ça veut dire en logistique', 'Application au fil rouge (Lukando)'],
    rows: [
      ['Humanité', "Toute vie compte de la même façon : vos critères de priorisation des livraisons sont objectifs (vulnérabilité, urgence médicale), jamais fondés sur l'appartenance ethnique, politique ou religieuse.", "Les 300 kits sont répartis selon le nombre de cas suspects par site, pas selon le site le plus facile d'accès."],
      ['Neutralité', "Vous ne prenez pas parti : vous ne transportez jamais de matériel à connotation militaire, même « exceptionnellement ». Un seul écart connu peut faire perdre l'accès à toute une zone, parfois pour tout le secteur.", "Au check-point de Bweza, vous refusez de charger les 4 caisses que demande un commandant."],
      ['Impartialité', "L'aide est distribuée selon les besoins uniquement, avec des critères de priorisation écrits et appliqués de façon constante — jamais « au feeling » du chauffeur ou du chef d'entrepôt du jour.", "La grille de répartition est écrite, signée et appliquée telle quelle à chaque livraison."],
      ['Indépendance', "L'action ne doit pas être instrumentalisée par un agenda politique, militaire ou économique : vigilance sur les accords de transport avec des acteurs qui pourraient revendiquer votre aide.", "Le gérant de Transports Bahati est lié à un candidat qui annonce « son » convoi à la radio : vous changez de transporteur."],
    ],
  },
  {
    type: 'concept',
    title: 'Neutralité ne veut pas dire passivité',
    body: [
      "Rester neutre ne veut pas dire refuser de négocier avec les acteurs armés d'une zone pour obtenir un accès sécurisé. Au contraire, cette négociation — encadrée par les principes du CICR et approfondie au Module 07 — fait partie du métier. La neutralité encadre COMMENT vous négociez l'accès, pas SI vous le faites.",
      "De la même façon, le recours à une escorte armée n'est jamais un réflexe : les lignes directrices du Comité permanent inter-organisations (IASC) sur les escortes armées des convois humanitaires (2013) en font un dernier recours, décidé au niveau de la coordination, pas par le logisticien seul.",
    ],
    highlight: "La neutralité, c'est refuser de prendre parti, pas refuser d'agir.",
    pitfall: "Face au check-point incertain de Bweza, attendre une « confirmation officielle » qui ne viendra jamais à temps. La bonne réaction : organiser la vérification et faire remonter la question de l'accès à la coordination dès J2.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire opérationnel du module',
    terms: [
      { term: '3W / 4W', definition: "Matrice « Qui fait Quoi, Où (et Quand) » tenue par OCHA à partir des déclarations des clusters — l'outil de base contre les doublons." },
      { term: 'Cluster / cluster lead', definition: "Groupe de coordination d'un secteur (santé, WASH, logistique...) et l'agence désignée pour le piloter." },
      { term: 'Point focal', definition: "La personne nommée comme contact d'un cluster ou d'une organisation pour une zone donnée." },
      { term: 'SitRep', definition: "Situation report : état de la crise à une date donnée, publié régulièrement par OCHA et par les clusters." },
      { term: 'P-code', definition: "Code géographique unique attribué à chaque unité administrative ; il évite les confusions d'orthographe entre localités." },
      { term: 'LCA', definition: "Logistics Capacity Assessment : rapport du Logistics Cluster sur l'état des routes, ports, aéroports et entrepôts d'un pays (en ligne sur dlca.logcluster.org)." },
      { term: 'Service Request Form (SRF)', definition: "Formulaire par lequel une organisation demande un service commun du Logistics Cluster (stockage, transport)." },
      { term: 'Pipeline logistique', definition: "La chaîne complète : achat → transport international → dédouanement → stockage → transport local → distribution." },
      { term: 'Last mile', definition: "Le dernier segment, de l'entrepôt régional au point de distribution final, souvent le plus difficile." },
      { term: 'Notification de mouvement', definition: "Information préalable des mouvements humanitaires transmise selon le mécanisme en place dans le pays (souvent via la coordination civilo-militaire d'OCHA)." },
      { term: 'Note de positionnement', definition: "Synthèse d'une page présentée au coordinateur dans les 72 heures : contexte, acteurs, mandat, contacts, risques et actions." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Votre feuille de route des 72 premières heures',
    columns: ['Procédure', 'Quand', 'Livrable produit'],
    rows: [
      ['1 — Exploiter le 3W/4W', 'J1, avant toute autre action', 'Extrait du 3W filtré et daté + questions à confirmer'],
      ['2 — S\'enregistrer auprès du Logistics Cluster', 'J1–J2', "Message d'enregistrement + compte rendu de réunion"],
      ['3 — Remplir la cartographie des acteurs', 'J2–J3', 'cartographie-acteurs-logistiques.xlsx complétée'],
      ['4 — Positionner votre structure', 'J2–J3', 'Matrice de positionnement + signalement de redondance'],
      ['5 — Rendre la faisabilité d\'une demande', 'Dès réception de la demande', 'Réponse Go / Go conditionnel / No-go chiffrée'],
      ['6 — Appliquer les principes humanitaires', 'Avant chaque engagement', 'Grille de priorisation + journal des décisions'],
      ['7 — Vérifier un itinéraire', 'J2–J3, avant tout convoi', "Fiche de vérification d'itinéraire + décision"],
      ['8 — Rédiger la note de positionnement', 'J3', 'fiche-positionnement-mission-j1.docx présentée'],
    ],
  },

  // ───────────── PROCÉDURE 1 — Exploiter le 3W/4W ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 6',
    title: 'Ouvrir la page pays de coordination et rassembler les documents de base',
    intro: "Jour 1, avant même de déballer vos affaires. Vous avez besoin : du nom du pays, de la province et de la localité d'affectation, d'une connexion internet et d'un dossier de travail sur votre ordinateur.",
    steps: [
      {
        title: 'Accédez aux sources officielles',
        actions: [
          "Ouvrez le portail de coordination OCHA du pays (ReliefWeb Response, response.reliefweb.int, qui a repris les pages pays de humanitarianresponse.info).",
          "Ouvrez la page de la crise ou du pays, puis les rubriques Clusters, Réunions et Documents.",
          "Téléchargez le dernier SitRep de la province et notez sa date de publication.",
          "Ouvrez HDX (data.humdata.org) et cherchez « [pays] 3W » ou « [pays] operational presence ».",
        ],
      },
      {
        title: 'Classez immédiatement ce que vous téléchargez',
        actions: [
          "Créez un dossier « 01_Coordination » dans votre dossier de mission.",
          "Renommez chaque fichier au format AAAA-MM-JJ_Source_Contenu_DateDuDocument.",
          "Ouvrez un fichier texte « Journal de coordination » où vous noterez chaque information reçue avec sa date et sa source.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — dossier 01_Coordination à J1, 7h45',
      lines: [
        "2026-03-12_OCHA_SitRep-NordKivu-n14_du-2026-03-10.pdf",
        "2026-03-12_HDX_3W-NordKivu_MAJ-2026-02-28.xlsx",
        "2026-03-12_LogCluster_CR-reunion_du-2026-03-10.pdf",
        "2026-03-12_Journal-de-coordination.docx (première ligne : « 12/03 07h15 — briefing Dr Kahindo, 6 affirmations à vérifier »)",
      ],
    },
    result: "Les documents de base sont dans un seul dossier, chacun avec sa date de téléchargement et la date du document. Vous savez de quand date chaque information.",
    tip: "Faites ce téléchargement au hub (ici Goma) avant de partir vers la base : à Lukando, la connexion peut ne pas suffire pour ouvrir un tableau de 3 Mo.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 6',
    title: 'Ouvrir le 3W et comprendre ses colonnes',
    intro: "Un 3W n'a pas de format universel, mais il contient presque toujours les mêmes informations. Avant de filtrer, identifiez précisément quelle colonne contient quoi.",
    steps: [
      {
        title: 'Préparez le fichier dans Excel',
        actions: [
          "Ouvrez le fichier 3W et enregistrez une copie de travail (ne modifiez jamais l'original).",
          "Repérez la ligne d'en-têtes ; supprimez les lignes de titre au-dessus si elles gênent le filtrage.",
          "Sélectionnez une cellule du tableau et appuyez sur Ctrl+T pour le convertir en tableau avec filtres.",
          "Figez la ligne d'en-tête (Affichage > Figer les volets).",
        ],
      },
      {
        title: 'Identifiez les colonnes clés',
        actions: [
          "Organisation (nom et sigle) et type (ONG internationale, ONG nationale, agence ONU, autorité).",
          "Cluster ou secteur, et activité détaillée.",
          "Niveaux administratifs : Admin1 (province), Admin2 (territoire), Admin3 (zone de santé ou localité) et leurs P-codes.",
          "Statut de l'activité (en cours, planifiée, terminée), date de début et date de fin.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait brut du 3W Nord-Kivu (MAJ 28/02/2026, données fictives)',
      lines: [
        "Organisation | Cluster | Activité | Admin3 | Statut | Début",
        "Alliance Médicale du Kivu (AMK) | Santé | Prise en charge choléra | Lukando | Planifiée | 2026-03-01",
        "Eau Pour Tous Kivu (EPTK) | WASH | Chloration des points d'eau | Lukando | En cours | 2025-10-15",
        "Action Nutrition Grands Lacs (ANGL) | Nutrition | Unité nutritionnelle | Lukando (site Bweza) | En cours | 2025-09-01",
      ],
    },
    pitfall: "Lire « Planifiée » comme « en cours ». Une activité planifiée au 28 février peut avoir démarré, avoir été annulée ou avoir doublé de taille depuis : c'est une question à poser, pas une certitude.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 6',
    title: 'Filtrer sur votre zone exacte et vos secteurs',
    intro: "Vous ne cherchez pas tout le pays : seulement les acteurs dont l'activité croise la vôtre — même zone, secteurs liés à votre mandat et à vos flux logistiques.",
    steps: [
      {
        title: 'Appliquez les filtres dans cet ordre',
        actions: [
          "Filtrez la colonne P-code Admin3 sur le code de votre localité (plus fiable que le nom).",
          "Filtrez la colonne Cluster sur : Logistique, Santé, WASH, Nutrition (votre mandat et les secteurs qui utilisent les mêmes routes).",
          "Filtrez la colonne Statut pour exclure « Terminée ».",
          "Copiez les lignes visibles et collez-les dans un nouvel onglet nommé « Zone_Lukando ».",
        ],
      },
      {
        title: 'Élargissez au corridor logistique',
        actions: [
          "Refaites le filtre sur les localités traversées par votre itinéraire (ici Kabati et Bweza).",
          "Ajoutez ces lignes à l'onglet, avec une colonne « Pertinence » : Zone / Corridor.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — résultat du filtrage',
      lines: [
        "Avant filtre : 412 lignes pour toute la province.",
        "Après filtre zone + secteurs + statut : 3 lignes (AMK, EPTK, ANGL).",
        "Après ajout du corridor Goma–Lukando : 4 lignes (+ Logistics Cluster, transport commun hebdomadaire).",
      ],
    },
    tip: "Les noms de localités ont souvent plusieurs orthographes (Lukando, Loukando, Lukandu). Filtrer par P-code vous évite d'oublier une ligne mal orthographiée.",
    result: "Vous avez un onglet « Zone_Lukando » de quelques lignes, lisible en une minute.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 6',
    title: 'Évaluer la fraîcheur et la fiabilité de chaque ligne',
    intro: "Une information de coordination non datée est une information dont vous ne pouvez pas évaluer la fiabilité. Vous allez dater chaque ligne et décider ce qui doit être recoupé.",
    steps: [
      {
        title: "Calculez l'âge de l'information",
        actions: [
          "Ajoutez une colonne « Date info » : la date de mise à jour du fichier, ou celle de la ligne si elle existe.",
          "Ajoutez une colonne « Âge (jours) » avec la formule =AUJOURDHUI()-[Date info].",
          "Ajoutez une colonne « À recouper » : =SI([Âge]>90;\"OUI\";\"non\") — au-delà de 3 mois, l'information est à recouper.",
        ],
      },
      {
        title: 'Repérez ce que le 3W ne peut pas savoir',
        actions: [
          "Comparez la date du 3W à la date du début de la crise : tout acteur arrivé après n'y figure pas.",
          "Marquez « à confirmer » toute activité « Planifiée » dont la date de début est dépassée.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lecture de la fraîcheur au 12/03/2026',
      lines: [
        "3W mis à jour le 28/02/2026 → 12 jours : récent, MAIS antérieur à l'afflux du 2–9 mars.",
        "AMK « Planifiée » au 01/03 → date dépassée → à confirmer (a-t-elle ouvert ? combien de lits ?).",
        "ANGL Bweza : ligne mise à jour le 20/11/2025 → 112 jours → À recouper = OUI.",
        "EPTK : activité en cours, ligne MAJ 28/02 → fiable, mais volume post-afflux inconnu.",
      ],
    },
    pitfall: "Conclure « personne ne fait de choléra à Bweza » parce que le 3W ne dit rien. L'absence dans un 3W antérieur à la crise ne prouve rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 6',
    title: 'Extraire la liste des acteurs utiles : qui, quoi, où, depuis quand',
    intro: "Vous transformez le filtrage en une liste de travail courte, qui servira de base à la cartographie (Procédure 3) et aux questions du cluster (Procédure 2).",
    steps: [
      {
        title: 'Construisez le tableau de travail',
        actions: [
          "Gardez 6 colonnes : Organisation, Activité, Lieu exact, Depuis, Statut 3W, Question à poser.",
          "Ajoutez une ligne pour chaque acteur cité dans le briefing mais absent du 3W.",
          "Rédigez pour chaque ligne UNE question fermée (réponse oui/non ou chiffre).",
        ],
      },
    ],
    table: {
      columns: ['Organisation', 'Activité', 'Lieu', 'Statut 3W', 'Question à poser'],
      rows: [
        ['AMK', 'Prise en charge choléra', 'HGR Lukando', 'Planifiée 01/03', 'Le centre est-il ouvert ? Combien de lits ?'],
        ['EPTK', 'Chloration', 'Lukando', 'En cours', 'Couvrez-vous les 3 sites de déplacés ?'],
        ['ANGL', 'Nutrition', 'Bweza', 'En cours (MAJ 11/2025)', 'Êtes-vous toujours présents à Bweza ?'],
        ['Logistics Cluster', 'Coordination, entrepôt', 'Goma', 'Activé', 'Quels services pour Lukando ?'],
        ['Transports Bahati', 'Transport privé', 'Axe Goma–Lukando', 'Absent du 3W', 'Références et propriétaires ?'],
      ],
    },
    result: "Une liste de 5 acteurs, chacun avec une question précise à laquelle quelqu'un peut répondre en une phrase.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 6',
    title: 'Croiser avec le briefing et établir la liste des vérifications',
    intro: "Un briefing oral incomplet n'est jamais une source de vérité suffisante. Vous confrontez chaque affirmation du briefing au 3W, et vous décidez qui interroger, par quel moyen et avant quand.",
    steps: [
      {
        title: 'Confrontez affirmation par affirmation',
        actions: [
          "Reprenez les 6 affirmations notées dans votre carnet à 7h15.",
          "Pour chacune, notez : confirmée par le 3W / contredite / non couverte.",
          "Attribuez à chaque point non confirmé un interlocuteur, un canal (appel, réunion, visite) et une échéance.",
          "Classez par urgence : ce qui conditionne le convoi du 16 mars passe en premier.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — liste des vérifications (J1, 11h00)',
      lines: [
        "1. Centre choléra AMK ouvert ? Nombre de lits ? → appel au coordinateur médical AMK, avant J2 10h. (conditionne notre propre centre de 40 lits)",
        "2. Pont de la Musi : charge maximale ? → alerte cluster + LCA + transporteurs, avant J2 18h.",
        "3. Check-point de Bweza : qui le tient, quelles exigences ? → point focal sécurité + cluster, avant J2 18h.",
        "4. ANGL encore à Bweza ? → Bureau central de la zone de santé (BCZ), avant J3.",
        "5. Entrepôt commun disponible ? → point focal Logistics Cluster, avant J2.",
        "6. Transports Bahati : références, propriétaires ? → 2 ONG clientes, avant J2 18h.",
      ],
    },
    result: "Livrable 1 terminé : un extrait daté du 3W et une liste de 6 vérifications priorisées, chacune avec un responsable et une échéance.",
    tip: "Envoyez cette liste à votre coordinatrice dès J1 midi : elle sait que vous travaillez, et elle peut vous ouvrir des portes (contacts, réunions) que vous mettriez deux jours à trouver.",
  },

  // ───────────── PROCÉDURE 2 — Logistics Cluster ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Vérifier si le Logistics Cluster est activé et ce qu\'il propose',
    intro: "Jour 1–2. Le site logcluster.org regroupe, pour chaque pays où le cluster opère, ses documents d'opération, ses comptes rendus et ses Logistics Capacity Assessments — souvent l'information la plus fiable et la plus récente sur l'état réel du terrain.",
    steps: [
      {
        title: 'Consultez la page pays',
        actions: [
          "Ouvrez logcluster.org, rubrique des opérations, puis la page de votre pays.",
          "Lisez le document de concept des opérations (ConOps) : zones couvertes, services, conditions d'accès aux services.",
          "Ouvrez le dernier compte rendu de réunion et le dernier SitRep logistique.",
          "Ouvrez la LCA du pays (dlca.logcluster.org) : routes, ponts, entrepôts, transporteurs.",
        ],
      },
      {
        title: 'Notez les services utilisables par votre ONG',
        actions: [
          "Stockage commun : lieu, surface, conditions, délai de traitement d'une demande.",
          "Transport commun : axes, fréquence, procédure (Service Request Form).",
          "Information : cartes d'accès, alertes, état des routes.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche « Logistics Cluster RDC Est » (J1, 14h00)',
      lines: [
        "Statut : activé ; hub Goma ; point focal Nord-Kivu : Amina Sow (nom fictif), Logistics Cluster Officer.",
        "Stockage commun : 2 MSU de 240 m² à Goma, demande par SRF, réponse sous 48 h.",
        "Transport commun : Goma–Lukando, 1 rotation/semaine (mercredi), sur SRF déposé avant le lundi 12h.",
        "LCA : pont de la Musi (km 97) noté « structure bois, capacité limitée » ; à vérifier sur la dernière alerte.",
      ],
    },
    result: "Vous savez si le cluster existe dans votre zone, ce qu'il peut faire pour vous et dans quels délais.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: "Identifier le point focal et s'abonner aux canaux d'information",
    intro: "S'enregistrer vous met sur la liste de diffusion des alertes routières, fermetures de ponts et évolutions sécuritaires : une information qui peut littéralement vous éviter un convoi bloqué.",
    steps: [
      {
        title: 'Collectez les coordonnées et les canaux',
        actions: [
          "Relevez le nom, la fonction, le téléphone et l'adresse e-mail du point focal pour votre province.",
          "Inscrivez-vous à la liste de diffusion du pays (formulaire d'abonnement sur la page pays).",
          "Demandez l'accès au groupe de messagerie des alertes d'accès s'il en existe un.",
          "Notez dans votre agenda la réunion de coordination logistique récurrente (jour, heure, lien de connexion).",
        ],
      },
      {
        title: 'Reportez tout dans votre journal de coordination',
        actions: [
          "Une ligne par canal : nom, type, date d'inscription, statut (en attente / actif).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — journal de coordination, J1',
      lines: [
        "12/03 14h20 — Point focal LogCluster Nord-Kivu : Amina Sow, +243 8XX XXX XXX (fictif).",
        "12/03 14h25 — Inscription liste de diffusion RDC : demandée, statut en attente.",
        "12/03 14h30 — Réunion de coordination logistique : mardi 17/03, 10h00, Goma + connexion à distance.",
      ],
    },
    pitfall: "Attendre d'avoir « besoin d'un service » pour se présenter au cluster. Les alertes d'accès, vous en avez besoin dès votre premier convoi — donc avant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: "Rédiger et envoyer le message d'enregistrement",
    intro: "Le point focal reçoit des dizaines de messages par jour. Un message d'enregistrement utile tient en dix lignes, dit qui vous êtes, où vous opérez, ce que vous transportez, et ce dont vous avez besoin.",
    steps: [
      {
        title: 'Rédigez le message en 5 blocs',
        actions: [
          "Objet : « Enregistrement [ONG] — [zone] — point focal logistique ».",
          "Qui : organisation, votre fonction, vos coordonnées, votre base.",
          "Où et quoi : zones d'intervention, type de matériel, volume prévisible et premier mouvement prévu.",
          "Ce que vous demandez : inscription aux alertes, information précise sur un point critique.",
          "Ce que vous offrez : partage de vos observations routières après chaque convoi.",
        ],
      },
      {
        title: 'Envoyez et tracez',
        actions: [
          "Mettez votre coordinateur logistique pays en copie.",
          "Notez l'envoi dans le journal de coordination ; relancez par téléphone si pas de réponse sous 24 h.",
        ],
      },
    ],
    example: {
      title: "Fil rouge — message envoyé le 12/03 à 15h10",
      lines: [
        "Objet : Enregistrement Kemora Santé — Lukando (Nord-Kivu) — point focal logistique",
        "Bonjour Mme Sow, je suis le logisticien terrain de Kemora Santé, basé à Lukando depuis aujourd'hui.",
        "Nous intervenons en réponse choléra (sites de Kasika, Mubimbi et Bweza). Premier convoi prévu le lundi 16/03 : environ 4,6 t de matériel médical, Goma → Lukando.",
        "Pourriez-vous nous inscrire aux alertes d'accès Nord-Kivu et nous indiquer la dernière information disponible sur la capacité du pont de la Musi (km 97) ?",
        "En retour, nous partagerons nos observations routières après chaque convoi. Cordialement, [nom, téléphone]. Copie : J.-M. Ilunga, coordinateur logistique pays.",
      ],
    },
    result: "Message envoyé, tracé dans le journal, réponse attendue avant J2 midi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Exploiter les alertes et les informations du cluster',
    intro: "Une information reçue n'a de valeur que si elle est reportée là où vous prenez vos décisions : dans votre journal d'accès et, plus tard, dans votre fiche de vérification d'itinéraire (Procédure 7).",
    steps: [
      {
        title: 'Traitez chaque alerte reçue',
        actions: [
          "Lisez l'alerte et identifiez si elle touche votre itinéraire ou votre zone.",
          "Reportez-la dans le journal d'accès : date, source, tronçon concerné, nature, validité.",
          "Si elle touche un mouvement prévu dans les 72 h, prévenez immédiatement votre coordinatrice.",
        ],
      },
    ],
    example: {
      title: "Fil rouge — réponse du cluster reçue le 13/03 à 9h40",
      lines: [
        "« Pont Musi : charge limitée à 12 t de poids total en charge depuis l'alerte du 10/03 ; les camions de 10 t chargés ne passent plus. »",
        "« Check-point irrégulier signalé à Bweza (km 118) depuis le 08/03 ; demandes de paiement aux véhicules commerciaux ; pas d'incident signalé sur véhicule humanitaire. »",
        "→ Reporté au journal d'accès le 13/03 à 9h45 ; coordinatrice prévenue à 9h50 (impact direct sur le choix des camions).",
      ],
    },
    tip: "Distinguez « poids total en charge » (véhicule + chargement) et « charge utile ». Une limite de pont porte toujours sur le poids total.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Préparer, suivre et restituer la réunion de coordination',
    intro: "C'est précisément dans les premiers jours d'une urgence, quand tout le monde est débordé, que l'information critique circule le plus vite en réunion de coordination. Y aller sans préparation, c'est perdre l'occasion.",
    steps: [
      {
        title: 'Avant la réunion',
        actions: [
          "Préparez 3 questions précises et 1 information à partager.",
          "Relisez le compte rendu précédent pour ne pas reposer une question déjà traitée.",
        ],
      },
      {
        title: 'Pendant la réunion',
        actions: [
          "Présentez-vous en 30 secondes : organisation, zone, premier mouvement prévu.",
          "Notez les décisions, les alertes et les noms des personnes à recontacter.",
        ],
      },
      {
        title: 'Dans les 2 heures qui suivent',
        actions: [
          "Envoyez un compte rendu de 5 lignes à votre coordinatrice et au coordinateur logistique pays.",
          "Mettez à jour la cartographie (Procédure 3) et le journal d'accès.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — réunion inter-agences de Lukando, J2 (13/03) 14h00, compte rendu',
      lines: [
        "Q1 — Centre choléra AMK : ouvert le 06/03, 60 lits, à l'hôpital général de référence (HGR) de Lukando. Confirmé par AMK en séance.",
        "Q2 — ANGL : a quitté Bweza fin février (confirmé par le BCZ). Aucun acteur de santé à Bweza.",
        "Q3 — EPTK : chloration à Kasika et Mubimbi uniquement ; Bweza non couvert.",
        "Info partagée : convoi Kemora Santé Goma–Lukando prévu le 16/03, retour d'observation routière promis.",
      ],
    },
    result: "Livrable 2 terminé : message d'enregistrement envoyé et compte rendu de réunion diffusé dans les 2 heures.",
  },

  // ───────────── PROCÉDURE 3 — Cartographie des acteurs (xlsx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 9',
    title: 'Ouvrir, renommer et préparer le template de cartographie',
    intro: "Jour 2–3. Le template cartographie-acteurs-logistiques.xlsx contient deux onglets : « Cartographie » (la liste des acteurs, lignes 5 à 19) et « Synthèse par zone » (calculée automatiquement). Ce document devient votre référence vivante pour toute la mission.",
    steps: [
      {
        title: 'Préparez votre copie',
        actions: [
          "Ouvrez cartographie-acteurs-logistiques.xlsx.",
          "Enregistrez-le immédiatement sous : AAAA-MM-JJ_Cartographie-acteurs_[Zone]_v01.xlsx.",
          "Repérez les 7 colonnes de l'onglet Cartographie (ligne 4) : Organisation, Rôle, Zone géographique, Contact, Cluster de rattachement, Dernière MAJ, Statut info.",
          "Repérez les 3 lignes d'exemple (lignes 5 à 7) et la légende sous le tableau.",
        ],
      },
      {
        title: 'Videz les exemples sans casser les formules',
        actions: [
          "Pour une vraie mission, sélectionnez A5:G7 et appuyez sur Suppr (effacez le contenu, ne supprimez pas les lignes).",
          "Ne saisissez rien en dehors des lignes 5 à 19 : les formules de la synthèse ne lisent que cette plage.",
          "Si vous avez plus de 15 acteurs, insérez des lignes AU-DESSUS de la ligne 19 pour que la plage s'étende automatiquement.",
        ],
      },
    ],
    pitfall: "Supprimer les lignes d'exemple avec « Supprimer la ligne » ou saisir des acteurs en ligne 20 et au-delà : la synthèse ne les compte plus, sans aucun message d'erreur.",
    result: "Un fichier v01 daté, vide, dont les formules de synthèse sont intactes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 9',
    title: 'Colonnes A et B — Organisation et Rôle',
    intro: "Ces deux colonnes doivent permettre à quelqu'un qui ne connaît pas la zone de savoir, en une lecture, qui est l'acteur et ce qu'il fait concrètement — avec un chiffre dès que possible.",
    steps: [
      {
        title: 'Colonne A — Organisation',
        actions: [
          "Saisissez le nom complet, puis le sigle entre parenthèses.",
          "Précisez l'entité locale quand elle existe (sous-bureau, base, antenne).",
          "Pour une autorité, indiquez le service exact (ex. Bureau central de la zone de santé).",
        ],
      },
      {
        title: 'Colonne B — Rôle',
        actions: [
          "Écrivez : Secteur – activité précise – capacité ou volume – lieu exact.",
          "Bannissez les rôles vagues comme « ONG médicale » ou « humanitaire ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — saisie des lignes 5 à 7',
      lines: [
        "A5 : OCHA – sous-bureau Goma | B5 : Coordination générale – 3W, SitReps, réunions inter-agences, notifications de mouvement",
        "A6 : Alliance Médicale du Kivu (AMK) | B6 : Santé – centre de traitement du choléra 60 lits – HGR Lukando",
        "A7 : Eau Pour Tous Kivu (EPTK) | B7 : WASH – chloration des points d'eau – sites Kasika et Mubimbi",
      ],
    },
    pitfall: "Écrire « AMK – santé ». Dans trois semaines, personne ne saura si c'était un centre de 10 ou de 60 lits, ni où.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 9',
    title: 'Colonne C — Zone géographique : une liste fermée, une orthographe unique',
    intro: "L'onglet « Synthèse par zone » compte les acteurs avec la fonction NB.SI (COUNTIF), qui exige une correspondance exacte du texte. Une seule faute d'orthographe et l'acteur disparaît du décompte.",
    steps: [
      {
        title: 'Définissez vos zones AVANT de saisir',
        actions: [
          "Listez sur un papier 3 à 5 zones qui ont un sens opérationnel (province, localité, axe routier).",
          "Écrivez chaque libellé une seule fois, puis copiez-collez-le à chaque saisie.",
          "Vérifiez qu'il n'y a pas d'espace en fin de cellule (cliquez dans la cellule, flèche Fin).",
        ],
      },
      {
        title: 'Choisissez la zone la plus précise',
        actions: [
          "Un acteur présent sur un seul site : la localité.",
          "Un acteur qui couvre toute la province : le libellé province.",
          "Un transporteur ou un service de transport : l'axe routier.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — les 4 libellés de zone retenus',
      lines: [
        "Nord-Kivu (province)",
        "Lukando",
        "Axe Lukando–Bweza",
        "Axe Goma–Lukando",
      ],
    },
    pitfall: "Saisir « Lukando » sur une ligne et « Lukando » suivi d'un espace sur une autre : la synthèse affiche 2 acteurs au lieu de 3, et vous ne le voyez pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 9',
    title: 'Colonne D — Contact (nom + téléphone ou e-mail)',
    intro: "Un contact utilisable en urgence est une personne nommée, avec sa fonction et un moyen de la joindre. Un nom d'organisation seul ne sert à rien à 22h quand une route ferme.",
    steps: [
      {
        title: 'Saisissez au format standard',
        actions: [
          "Format : Prénom Nom – fonction – téléphone – e-mail.",
          "À défaut de personne nommée, saisissez le contact générique de l'organisation et marquez la ligne « À confirmer » en colonne G.",
          "N'inscrivez que des coordonnées professionnelles.",
        ],
      },
      {
        title: 'Protégez le fichier',
        actions: [
          "Ce fichier contient des données personnelles : partagez-le uniquement en interne, jamais sur un groupe ouvert.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — saisie de la colonne D (coordonnées fictives)',
      lines: [
        "D6 (AMK) : Dr Patrice Kambale – coordinateur médical – +243 8XX XXX XXX",
        "D8 (Logistics Cluster) : Amina Sow – Logistics Cluster Officer Nord-Kivu – +243 8XX XXX XXX",
        "D9 (BCZ Lukando) : médecin chef de zone – +243 8XX XXX XXX",
      ],
    },
    tip: "Après chaque appel réussi, notez dans la cellule le meilleur moyen de joindre la personne (« répond sur messagerie, pas au téléphone avant 8h »). C'est ce détail qui fait gagner une heure en crise.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 9',
    title: 'Colonne E — Cluster de rattachement',
    intro: "Cette colonne vous dit à quelle réunion sectorielle aller pour obtenir ou vérifier une information sur cet acteur, et quel cluster lead peut arbitrer en cas de doublon.",
    steps: [
      {
        title: 'Utilisez des valeurs constantes',
        actions: [
          "Valeurs à utiliser : Logistique, Santé, WASH, Nutrition, Protection, Coordination, Autorité, Aucun (privé).",
          "Reprenez le cluster indiqué dans le 3W ; s'il manque, demandez-le à l'acteur.",
          "Pour un acteur multi-secteurs, inscrivez le cluster de l'activité qui vous concerne.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Organisation', 'Cluster de rattachement'],
      rows: [
        ['5', 'OCHA – sous-bureau Goma', 'Coordination'],
        ['6', 'AMK', 'Santé'],
        ['7', 'EPTK', 'WASH'],
        ['8', 'PAM / Logistics Cluster', 'Logistique'],
        ['9', 'BCZ Lukando', 'Autorité'],
        ['10', 'ANGL', 'Nutrition'],
        ['11', 'Transports Bahati SARL', 'Aucun (privé)'],
      ],
    },
    result: "Chaque acteur est rattaché à un canal de coordination identifiable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 9',
    title: "Colonne F — Dernière MAJ : la date de l'information, pas celle de la saisie",
    intro: "Chaque ligne de votre cartographie doit porter une date de dernière mise à jour. C'est elle qui permet, dans trois semaines, de savoir si l'information est encore fiable.",
    steps: [
      {
        title: 'Saisissez la bonne date',
        actions: [
          "Inscrivez la date à laquelle l'information a été produite ou confirmée, au format AAAA-MM-JJ.",
          "Information issue du 3W : date de mise à jour du 3W (ou de la ligne).",
          "Information confirmée par l'acteur lui-même : date de l'appel ou de la réunion.",
          "Ne mettez jamais la date du jour par défaut.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — dates retenues',
      lines: [
        "AMK : 2026-03-13 (confirmé en réunion inter-agences, J2).",
        "EPTK : 2026-03-13 (zones précisées en réunion), et non 2026-02-28 (date du 3W).",
        "ANGL : 2026-03-13 (départ confirmé par le BCZ).",
        "Transports Bahati : 2026-03-12 (proposition orale reçue au briefing).",
      ],
    },
    pitfall: "Mettre la date du jour sur une information tirée d'un 3W de novembre : vous lui donnez une fraîcheur qu'elle n'a pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 9',
    title: 'Colonne G — Statut info : appliquer une règle écrite',
    intro: "La colonne G est une liste déroulante à trois valeurs : Confirmé, À confirmer, Obsolète. Pour que votre cartographie soit fiable, le choix doit suivre une règle identique pour toutes les lignes.",
    steps: [
      {
        title: 'Appliquez la règle de statut',
        actions: [
          "Confirmé : information donnée par l'acteur lui-même, observée par vous, ou concordante dans 2 sources indépendantes de moins de 7 jours.",
          "À confirmer : une seule source indirecte (briefing, rumeur, 3W ancien), ou information de plus de 30 jours.",
          "Obsolète : information contredite par une source plus récente (acteur parti, activité arrêtée).",
          "Sélectionnez la valeur dans la liste déroulante ; ne la tapez jamais à la main.",
        ],
      },
    ],
    table: {
      columns: ['Organisation', 'Zone', 'Dernière MAJ', 'Statut info'],
      rows: [
        ['OCHA – sous-bureau Goma', 'Nord-Kivu (province)', '2026-03-12', 'Confirmé'],
        ['AMK', 'Lukando', '2026-03-13', 'Confirmé'],
        ['EPTK', 'Lukando', '2026-03-13', 'Confirmé'],
        ['PAM / Logistics Cluster', 'Nord-Kivu (province)', '2026-03-13', 'Confirmé'],
        ['BCZ Lukando', 'Lukando', '2026-03-13', 'Confirmé'],
        ['ANGL', 'Axe Lukando–Bweza', '2026-03-13', 'Obsolète'],
        ['Transports Bahati SARL', 'Axe Goma–Lukando', '2026-03-12', 'À confirmer'],
      ],
    },
    tip: "Ne supprimez pas une ligne devenue obsolète : passez-la en « Obsolète ». Savoir qu'un acteur est parti de Bweza est une information aussi précieuse que savoir qu'il y est.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 8 sur 9',
    title: "Mettre à jour l'onglet « Synthèse par zone »",
    intro: "L'onglet de synthèse compte, pour chaque zone, le nombre d'acteurs recensés et ceux encore « À confirmer ». Il contient 3 zones d'exemple : vous devez y inscrire VOS zones, avec exactement la même orthographe qu'en colonne C.",
    steps: [
      {
        title: 'Remplacez les zones et étendez les formules',
        actions: [
          "Ouvrez l'onglet « Synthèse par zone ». Ne modifiez pas les formules des colonnes B et C.",
          "Copiez-collez vos libellés de zone depuis la colonne C de l'onglet Cartographie vers A5, A6 et A7.",
          "Pour une 4e zone : clic droit sur la ligne 8 (TOTAL) > Insérer ; recopiez les formules B7:C7 vers B8:C8 ; saisissez la zone en A8.",
          "Vérifiez que la formule du TOTAL couvre désormais toutes les lignes de zone (=SOMME(B5:B8)).",
        ],
      },
      {
        title: 'Contrôlez la cohérence',
        actions: [
          "Comptez les lignes remplies de l'onglet Cartographie (=NBVAL(Cartographie!A5:A19)).",
          "Le TOTAL de la colonne B doit être égal à ce nombre ; sinon, une zone est mal orthographiée ou absente de la synthèse.",
        ],
      },
    ],
    table: {
      columns: ['Zone géographique', "Nombre d'acteurs recensés", 'Dont « À confirmer »'],
      rows: [
        ['Nord-Kivu (province)', '2', '0'],
        ['Lukando', '3', '0'],
        ['Axe Lukando–Bweza', '1', '0'],
        ['Axe Goma–Lukando', '1', '1'],
        ['TOTAL acteurs recensés', '7', '1'],
      ],
    },
    result: "Le TOTAL (7) est égal au nombre de lignes saisies (7). La synthèse est fiable.",
    pitfall: "Lire « Axe Lukando–Bweza : 1 acteur » comme une présence. Cette ligne est Obsolète : la synthèse compte les lignes, pas les acteurs actifs. Lisez toujours la synthèse avec la colonne G.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 9 sur 9',
    title: 'Faire vivre la cartographie tout au long de la mission',
    intro: "La cartographie n'est pas un document d'arrivée : vous la mettrez à jour à chaque nouvelle information, tout au long de la mission. Une routine simple suffit.",
    steps: [
      {
        title: 'Installez la routine',
        actions: [
          "Après chaque réunion ou appel utile : mettez à jour les colonnes F et G des lignes concernées.",
          "Chaque jour à heure fixe : relancez les lignes « À confirmer » de plus de 48 h.",
          "Chaque semaine : enregistrez une nouvelle version (v02, v03...) et envoyez-la à votre coordination.",
          "À votre départ de mission : remettez le fichier à jour à votre successeur, avec le journal de coordination.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — historique des versions',
      lines: [
        "2026-03-13_Cartographie-acteurs_Lukando_v01.xlsx — 7 acteurs, 1 à confirmer (création).",
        "2026-03-14_Cartographie-acteurs_Lukando_v02.xlsx — Transports Bahati passé en Obsolète (non retenu), Transports Umoja ajouté (Confirmé).",
      ],
    },
    result: "Livrable 3 terminé : la cartographie est complète, datée, cohérente avec sa synthèse, et versionnée.",
  },

  // ───────────── PROCÉDURE 4 — Positionner votre structure ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Lister précisément ce que votre organisation prévoit de faire',
    intro: "Jour 2–3. Une fois la cartographie remplie, il faut savoir où votre organisation se situe : seul acteur, acteur complémentaire, ou redondant. Pour le savoir, vous devez d'abord écrire votre propre mandat opérationnel au même niveau de précision que le 3W.",
    steps: [
      {
        title: 'Construisez la liste des activités prévues',
        actions: [
          "Demandez à votre coordinatrice le plan d'intervention ou la proposition de projet.",
          "Pour chaque activité : secteur, activité précise, lieu exact, date de début, volume.",
          "Ajoutez les activités logistiques qui créent des flux (approvisionnement, transport régulier).",
        ],
      },
    ],
    table: {
      columns: ['Activité Kemora Santé prévue', 'Secteur', 'Lieu', 'Début', 'Volume'],
      rows: [
        ['Centre de traitement du choléra', 'Santé', 'HGR Lukando', '16/03', '40 lits'],
        ['Points de réhydratation orale (PRO)', 'Santé', 'Kasika, Mubimbi, Bweza', '16/03', '3 points'],
        ['Approvisionnement en intrants choléra', 'Logistique', 'Goma → Lukando', '16/03', '500 kits'],
      ],
    },
    result: "Votre mandat est écrit dans le même langage que le 3W : il peut être comparé ligne à ligne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Croiser chaque activité avec la cartographie : la matrice de recoupement',
    intro: "Vous comparez chacune de vos activités aux acteurs de la cartographie sur quatre critères. Seuls les acteurs « Confirmé » comptent pour conclure ; les « À confirmer » génèrent une vérification.",
    steps: [
      {
        title: 'Remplissez la matrice',
        actions: [
          "Une ligne par activité de votre organisation.",
          "Pour chaque acteur de la cartographie, posez 4 questions : même secteur ? même lieu ? même période ? même activité ?",
          "Notez l'acteur concerné dès que 3 réponses sur 4 sont « oui ».",
        ],
      },
    ],
    table: {
      columns: ['Activité Kemora', 'Même secteur', 'Même lieu', 'Même période', 'Même activité', 'Acteur'],
      rows: [
        ['Centre choléra 40 lits HGR', 'Oui', 'Oui', 'Oui', 'Oui', 'AMK (60 lits, ouvert le 06/03)'],
        ['PRO Kasika / Mubimbi', 'Oui', 'Proche', 'Oui', 'Non', 'AMK (référence des cas graves), EPTK (chloration)'],
        ['PRO Bweza', 'Non', '—', '—', '—', 'Aucun acteur santé (ANGL partie)'],
        ['Intrants choléra', 'Lié', 'Oui', 'Oui', 'Non', 'AMK (consommateur possible)'],
      ],
    },
    tip: "Faites ce croisement sur l'onglet Cartographie filtré par zone : vous ne comparez que ce qui peut réellement se recouvrir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Qualifier chaque activité : seul, complémentaire ou redondant',
    intro: "Appliquez une règle de décision écrite, la même pour toutes les activités, pour éviter les jugements « au ressenti ».",
    steps: [
      {
        title: 'Appliquez la règle',
        actions: [
          "Redondant : même secteur + même lieu + même période + même activité avec un acteur Confirmé.",
          "Complémentaire : même lieu, activités différentes mais liées (l'une sert l'autre).",
          "Seul acteur : aucun acteur Confirmé sur le même secteur et le même lieu.",
          "Inscrivez la qualification et la conséquence pratique en face de chaque activité.",
        ],
      },
    ],
    table: {
      columns: ['Activité Kemora', 'Qualification', 'Conséquence'],
      rows: [
        ['Centre choléra 40 lits HGR', 'Redondant', 'À signaler immédiatement à la coordination'],
        ['PRO Kasika / Mubimbi', 'Complémentaire', 'Organiser le circuit de référence vers le centre AMK'],
        ['PRO Bweza', 'Seul acteur', 'Priorité d\'accès : vérifier la route (Procédure 7)'],
        ['Intrants choléra', 'Complémentaire', 'Proposer un appui en intrants au centre AMK'],
      ],
    },
    result: "Livrable 4, partie 1 : la matrice de positionnement, une ligne par activité, avec sa qualification.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Signaler immédiatement une redondance à votre coordination',
    intro: "Une redondance se signale tout de suite, pas en fin de mission. Le message doit être factuel, sourcé, et proposer une alternative : vous n'êtes pas là pour annuler un projet, mais pour éviter de livrer deux fois la même zone pendant qu'une autre reste sans couverture.",
    steps: [
      {
        title: 'Rédigez le signalement',
        actions: [
          "Énoncez le fait en une phrase, avec la source et la date de confirmation.",
          "Donnez la conséquence concrète (doublon de lits, matériel immobilisé, zone non couverte).",
          "Proposez au moins une alternative chiffrée.",
          "Demandez une décision avec une échéance liée au calendrier logistique.",
          "Envoyez par écrit, puis appelez pour vous assurer de la lecture.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — message à la coordinatrice, 13/03 à 15h30',
      lines: [
        "Objet : Redondance identifiée — centre choléra HGR Lukando — décision requise avant samedi 12h",
        "Clarisse, AMK a confirmé en réunion inter-agences ce jour (14h00) un centre de traitement du choléra de 60 lits ouvert depuis le 06/03 à l'HGR de Lukando.",
        "Notre centre de 40 lits au même endroit ferait doublon, alors que Bweza (21 cas suspects sur 7 jours, à 40 km) n'a plus aucun acteur de santé depuis le départ d'ANGL.",
        "Proposition : réorienter nos 40 lits vers une unité de traitement à Bweza, maintenir les 3 PRO et proposer à AMK un appui en intrants.",
        "J'ai besoin de ta décision avant samedi 12h pour finaliser le chargement du convoi du 16/03. Copie : J.-M. Ilunga.",
      ],
    },
    pitfall: "Garder la redondance pour soi « parce que ce n'est pas le rôle du logisticien ». C'est le logisticien qui chargera les 40 lits dans le camion : c'est donc à lui de lever le doute avant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Faire valider le repositionnement et le déclarer aux clusters',
    intro: "Une fois la décision prise, votre positionnement doit apparaître dans le système de coordination : sinon, le prochain arrivant fera la même erreur à propos de vous.",
    steps: [
      {
        title: 'Formalisez et diffusez',
        actions: [
          "Obtenez la décision écrite (même un message court suffit) et archivez-la dans 01_Coordination.",
          "Transmettez au cluster santé la mise à jour de vos activités pour le prochain 3W (activité, lieu, date, statut).",
          "Informez le point focal Logistics Cluster du changement de destination de vos flux (Bweza).",
          "Mettez à jour votre cartographie et votre plan de transport.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — décision du 14/03 à 10h15',
      lines: [
        "Décision Dr Kahindo : unité de traitement du choléra 40 lits à Bweza (ouverture visée le 18/03) ; 3 PRO maintenus ; 50 kits proposés à AMK.",
        "Déclaration au cluster santé envoyée le 14/03 à 11h00 : « Kemora Santé — UTC 40 lits — Bweza — planifiée 18/03 ».",
        "Point focal Logistics Cluster informé : destination principale des flux = Bweza (km 118 de l'axe).",
      ],
    },
    result: "Livrable 4 terminé : matrice, signalement écrit, décision archivée et déclaration transmise au cluster.",
  },

  // ───────────── PROCÉDURE 5 — Faisabilité d'une demande ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Reformuler la demande du programme en données vérifiables',
    intro: "Le programme décide QUOI ; vous décidez si c'est possible, QUAND et COMMENT. Pour cela, la demande doit d'abord être exprimée en quantités, lieux, dates et responsables — sinon vous calculez sur du flou.",
    steps: [
      {
        title: 'Posez les 6 questions de reformulation',
        actions: [
          "Quoi exactement ? (article, référence, conditionnement)",
          "Combien ? (unités, et quantité minimale utile si tout n'est pas disponible)",
          "Où ? (lieu de livraison exact, lieu de stockage sur place)",
          "Pour quand ? (date de besoin réel, et pourquoi cette date)",
          "Qui réceptionne et signe ?",
          "Quelles conditions de stockage et de manutention ?",
        ],
      },
      {
        title: 'Faites valider la reformulation',
        actions: [
          "Renvoyez la demande reformulée au demandeur et obtenez un « OK » écrit avant de calculer.",
        ],
      },
    ],
    table: {
      columns: ['Question', 'Demande initiale', 'Demande reformulée et validée'],
      rows: [
        ['Quoi', 'Kits choléra et tentes', 'Kits de traitement choléra (réf. interne KCH-01) + 2 tentes de 45 m²'],
        ['Combien', '500 kits', '500 kits ; minimum utile 300 au 16/03'],
        ['Où', 'Lukando', 'Dépôt de Bweza (UTC), puis répartition entre les 3 sites selon une grille écrite (Procédure 6) ; tentes à Bweza'],
        ['Quand', 'Lundi', 'Lundi 16/03 avant 17h00 (ouverture UTC le 18/03)'],
        ['Qui réceptionne', '—', 'Infirmier superviseur UTC, bon de livraison signé'],
        ['Stockage', '—', 'Au sec, à l\'abri, moins de 30 °C, sur palettes'],
      ],
    },
    result: "Une demande précise, validée par écrit, sur laquelle vous pouvez calculer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Vérifier la disponibilité : stock existant et réapprovisionnement',
    intro: "Avant de chercher un camion, vérifiez qu'il y a quelque chose à charger. Vous partez du stock disponible, puis vous remontez le pipeline pour le reste.",
    steps: [
      {
        title: 'Contrôlez le stock',
        actions: [
          "Demandez l'état de stock du jour de l'entrepôt de Goma (pas celui de la semaine dernière).",
          "Vérifiez la quantité disponible ET non réservée à un autre projet.",
          "Vérifiez les dates de péremption des lots qui partiront.",
        ],
      },
      {
        title: 'Calculez le délai pour le manque',
        actions: [
          "Identifiez la source du complément (centrale régionale, fournisseur local qualifié, prêt d'un autre acteur).",
          "Additionnez les délais de chaque maillon du pipeline, dédouanement compris.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — disponibilité au 12/03, 16h00',
      lines: [
        "Stock Goma : 340 kits KCH-01, dont 40 réservés à un autre projet → 300 disponibles, péremption 09/2027.",
        "Manque : 500 − 300 = 200 kits.",
        "Source : centrale régionale (Nairobi). Délais : préparation 1 j + avion 2 j + dédouanement 3 à 5 j + stockage 1 j + route 1 j = 8 à 10 jours.",
        "Commande passée le 13/03 → arrivée Lukando entre le 21 et le 23/03 au mieux ; annoncez 22–25/03 pour garder une marge.",
      ],
    },
    tip: "Annoncez toujours une fourchette avec marge. Promettre la date la plus optimiste, c'est perdre la confiance du programme au premier aléa douanier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Calculer poids, volume et choisir les véhicules',
    intro: "Vous calculez le poids et le volume du chargement, puis vous vérifiez que le véhicule chargé respecte TOUTES les limites de l'itinéraire — en particulier les ponts, dont la limite porte sur le poids total en charge.",
    steps: [
      {
        title: 'Calculez la charge',
        actions: [
          "Relevez le poids et le volume unitaires sur la fiche article (valeurs d'exemple ci-dessous).",
          "Multipliez par les quantités, puis additionnez tous les articles.",
          "Ajoutez une marge de 5 % pour l'emballage et l'arrimage.",
        ],
      },
      {
        title: 'Vérifiez le véhicule contre les limites de la route',
        actions: [
          "Poids total en charge = poids à vide du camion + chargement.",
          "Comparez-le à la limite la plus basse de l'itinéraire (ici le pont de la Musi : 12 t).",
          "Vérifiez aussi le volume utile de la caisse.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — calcul ligne par ligne (valeurs fictives)',
      lines: [
        "Kits : 300 × 14 kg = 4 200 kg ; 300 × 0,06 m³ = 18,0 m³",
        "Tentes : 2 × 180 kg = 360 kg ; 2 × 0,8 m³ = 1,6 m³",
        "Total : 4 560 kg et 19,6 m³ ; avec marge 5 % : ≈ 4 790 kg et 20,6 m³",
        "Option A — 1 camion 10 t (poids à vide 7,5 t) : 7,5 + 4,79 = 12,29 t > 12 t → REFUSÉ au pont de la Musi",
        "Option B — 2 camions 6 t (poids à vide 4,5 t, caisse 24 m³) : 4,5 + 2,40 = 6,90 t par camion < 12 t ; 10,3 m³ < 24 m³ → RETENUE",
      ],
    },
    pitfall: "Oublier le poids à vide du véhicule. Un camion de 10 t chargé à moitié peut déjà dépasser la limite d'un pont.",
    result: "Le moyen de transport retenu (2 camions de 6 t) passe toutes les limites connues de l'itinéraire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Dérouler le pipeline maillon par maillon : le rétro-planning',
    intro: "Partez de la date de besoin et remontez le temps : chaque maillon a une date limite, un responsable et une condition. Si un maillon ne tient pas, la date finale ne tient pas.",
    steps: [
      {
        title: 'Construisez le rétro-planning',
        actions: [
          "Écrivez la date et l'heure de besoin en bas du tableau.",
          "Remontez maillon par maillon : déchargement, trajet, départ, chargement, préparation, contrat transporteur.",
          "Attribuez un responsable nommé à chaque maillon.",
          "Repérez le maillon critique (celui qui n'a aucune marge).",
        ],
      },
    ],
    table: {
      columns: ['Maillon', 'Date limite', 'Responsable', 'Condition'],
      rows: [
        ['Contrat 2 camions 6 t', '13/03 18h00', 'Logisticien terrain', 'Transporteur vérifié (Procédure 6)'],
        ['Reconnaissance de route', '14/03 17h00', 'Logisticien + chauffeur', 'Décision Go (Procédure 7)'],
        ['Préparation et colisage Goma', '14/03 18h00', 'Magasinier Goma', 'Liste de colisage signée'],
        ['Chargement', '15/03 16h00', 'Magasinier Goma', 'Lettre de voiture établie'],
        ['Départ convoi', '16/03 06h00', 'Chef de convoi', 'Notification de mouvement faite'],
        ['Arrivée Bweza', '16/03 ~13h00', 'Chef de convoi', '118 km dont 70 km de piste'],
        ['Réception et stockage', '16/03 17h00', 'Infirmier superviseur', 'Bon de livraison signé'],
      ],
    },
    result: "Le maillon critique est la reconnaissance de route du 14/03 : sans décision Go à 17h00, le départ du 16/03 tombe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Lister les conditions de réalisation et les contraintes',
    intro: "Une réponse de faisabilité honnête dit ce qui est faisable ET à quelles conditions. Les conditions sont ce que le programme et la coordination doivent savoir pour décider.",
    steps: [
      {
        title: 'Passez en revue 5 familles de contraintes',
        actions: [
          "Accès : état de la route, ouvrages, saison (Procédure 7).",
          "Sécurité : points de contrôle, incidents récents, avis du point focal sécurité.",
          "Principes : transporteur, itinéraire et répartition conformes (Procédure 6).",
          "Stockage à l'arrivée : surface, abri, conditions de température, gardiennage.",
          "Documents : liste de colisage, lettre de voiture, bon de livraison.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — conditions retenues',
      lines: [
        "C1 — Décision Go après reconnaissance du 14/03 (pont de la Musi et check-point de Bweza).",
        "C2 — Transporteur sans lien politique déclaré (Transports Bahati écarté, voir Procédure 6).",
        "C3 — Abri de stockage à Bweza : tente de 45 m² montée avant déchargement, palettes au sol.",
        "C4 — Aucun passager ni marchandise tierce à bord.",
      ],
    },
    tip: "Quatre conditions maximum. Au-delà, le décideur ne lit plus ; regroupez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Rendre une réponse de faisabilité écrite et datée',
    intro: "Vous concluez par l'une de trois réponses : Go (faisable tel quel), Go conditionnel (faisable si...), No-go (non faisable, avec l'alternative). Toujours par écrit, toujours avec les chiffres.",
    steps: [
      {
        title: 'Rédigez la réponse',
        actions: [
          "Première ligne : la décision (Go / Go conditionnel / No-go).",
          "Ce qui sera livré, où, quand — avec les quantités.",
          "Ce qui ne pourra pas l'être et la nouvelle date.",
          "Les conditions (3 à 4 maximum) et le moment où vous confirmerez.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — réponse envoyée le 13/03 à 17h00',
      lines: [
        "Objet : Faisabilité — 500 kits choléra + 2 tentes — GO CONDITIONNEL",
        "1. 300 kits + 2 tentes livrés à Bweza le lundi 16/03 avant 17h00 (2 camions de 6 t ; le pont de la Musi interdit un camion de 10 t chargé).",
        "2. 200 kits commandés ce jour à la centrale régionale : arrivée prévue à Lukando entre le 22 et le 25/03 (dédouanement 3 à 5 jours).",
        "3. Conditions : route validée par la reconnaissance du 14/03 ; abri de 45 m² monté à Bweza avant déchargement.",
        "4. Confirmation définitive Go / No-go : samedi 14/03 à 18h00.",
      ],
    },
    result: "Livrable 5 terminé : une réponse chiffrée qui permet au programme d'ajuster son plan (ouverture de l'UTC avec 300 kits) au lieu de le découvrir lundi.",
  },

  // ───────────── PROCÉDURE 6 — Principes humanitaires ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Décrire chaque décision en une phrase et identifier qui en tire avantage',
    intro: "Les 4 principes ne sont pas des slogans : ce sont des règles de décision qui s'appliquent à vos choix de transporteur, d'itinéraire et de priorité. Première étape : rendre la décision explicite.",
    steps: [
      {
        title: 'Formulez la décision',
        actions: [
          "Écrivez la décision sous la forme : « Je vais [action] avec [qui] pour [qui] à [où] ».",
          "Listez toutes les parties qui en tirent un avantage (argent, visibilité, contrôle, ressources).",
          "Listez ceux qui pourraient la percevoir comme une prise de parti.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — les 3 décisions de la semaine',
      lines: [
        "D1 : « Je vais contracter Transports Bahati pour acheminer 4,6 t de Goma à Bweza. » → Avantage : le gérant (chiffre d'affaires) ; son frère, candidat aux élections provinciales, annonce à la radio « son » convoi pour Bweza.",
        "D2 : « Je vais répartir 300 kits entre Kasika, Mubimbi et Bweza. » → Avantage : les sites servis ; risque de pression des leaders du site le plus proche.",
        "D3 : « Je vais faire passer le convoi par le check-point de Bweza. » → Le groupe qui tient le check-point peut demander un paiement ou un transport.",
      ],
    },
    result: "Chaque décision est écrite ; les intérêts en jeu sont visibles avant d'agir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Passer chaque décision au test des 4 questions',
    intro: "Une question de contrôle par principe. Une seule réponse inquiétante suffit à ouvrir une mesure de mitigation ou un changement d'option.",
    steps: [
      {
        title: 'Posez les 4 questions',
        actions: [
          "Humanité : mes critères de priorité sont-ils fondés uniquement sur la vulnérabilité et l'urgence ?",
          "Neutralité : un observateur pourrait-il croire que je soutiens une partie (matériel, transport, paiement) ?",
          "Impartialité : mes critères sont-ils écrits et appliqués de la même façon à tous ?",
          "Indépendance : quelqu'un peut-il revendiquer notre aide comme un soutien politique, militaire ou économique ?",
        ],
      },
    ],
    table: {
      columns: ['Décision', 'Humanité', 'Neutralité', 'Impartialité', 'Indépendance'],
      rows: [
        ['D1 — Transports Bahati', 'OK', 'OK', 'OK', 'ALERTE : récupération politique annoncée'],
        ['D2 — Répartition des kits', 'À écrire', 'OK', 'ALERTE : aucun critère écrit', 'OK'],
        ['D3 — Check-point Bweza', 'OK', 'ALERTE : demande de transport ou paiement possible', 'OK', 'ALERTE'],
      ],
    },
    pitfall: "Se dire « ce n'est qu'un transporteur ». Un seul écart connu peut faire perdre l'accès à toute une zone pour votre organisation — et parfois pour tout le secteur humanitaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Écrire les critères de priorisation et les appliquer (impartialité)',
    intro: "L'aide est distribuée selon les besoins uniquement, avec des critères écrits et appliqués de façon constante — jamais « au feeling ». Vous écrivez la règle, vous la calculez, vous la faites signer.",
    steps: [
      {
        title: 'Écrivez et calculez la règle',
        actions: [
          "Choisissez un critère de besoin mesurable et disponible (ici : cas suspects des 7 derniers jours, source BCZ).",
          "Calculez la part de chaque site : cas du site ÷ total des cas.",
          "Multipliez par la quantité disponible et arrondissez ; vérifiez que la somme est égale au total.",
          "Ajoutez une règle d'ajustement écrite (ex. proximité d'un centre de traitement).",
          "Faites signer la grille par la coordinatrice médicale et joignez-la à la lettre de voiture.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — répartition des 300 kits (cas BCZ du 06 au 12/03)',
      lines: [
        "Total cas suspects : Bweza 21 + Kasika 14 + Mubimbi 6 = 41",
        "Bweza : 21 ÷ 41 × 300 = 153,7 → 154 kits",
        "Kasika : 14 ÷ 41 × 300 = 102,4 → 102 kits",
        "Mubimbi : 6 ÷ 41 × 300 = 43,9 → 44 kits",
        "Contrôle : 154 + 102 + 44 = 300 ✔",
        "Règle d'ajustement : aucun — Mubimbi est à 8 km du centre AMK pour les cas graves.",
      ],
    },
    result: "Livrable 6, partie 1 : une grille de priorisation écrite, chiffrée, signée, applicable par n'importe quel magasinier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: "Choisir l'option conforme et la mesure de mitigation",
    intro: "Pour chaque alerte, vous avez trois options : changer d'option, garder l'option avec une mesure de mitigation, ou remonter la décision. Choisissez la moins risquée pour l'accès futur, pas la moins chère.",
    steps: [
      {
        title: 'Traitez chaque alerte',
        actions: [
          "D1 (Indépendance) : cherchez un transporteur alternatif ; comparez coût et délai ; si aucun, imposez par contrat : pas de communication politique, pas de marquage autre que celui de l'ONG, clause de résiliation.",
          "D3 (Neutralité) : préparez la consigne de refus que chaque chauffeur doit connaître.",
          "Consignez le surcoût éventuel et sa justification.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mitigations retenues',
      lines: [
        "D1 : Transports Umoja (fictif) retenu, 2 camions 6 t, coût +6 % par rapport à Bahati ; justification « Indépendance » écrite au dossier d'achat.",
        "D3 — consigne chauffeurs : « Ce véhicule transporte uniquement du matériel médical de Kemora Santé. Je n'ai pas l'autorisation de prendre des passagers ni des marchandises. Je dois appeler la base. »",
        "D3 — aucun paiement au check-point ; en cas de blocage : arrêt, appel à la base, attente des instructions.",
      ],
    },
    pitfall: "Accepter « exceptionnellement » 4 caisses pour un commandant afin de passer plus vite. Vous ne transportez jamais de matériel à connotation militaire, même pour rendre service.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Tracer la décision et escalader ce qui dépasse votre niveau',
    intro: "Une décision de principe non tracée sera contestée — ou oubliée par votre successeur. Et certaines décisions ne vous appartiennent pas : la négociation d'accès et toute question d'escorte relèvent de la coordination.",
    steps: [
      {
        title: 'Tracez et escaladez',
        actions: [
          "Ouvrez un « journal des décisions » : date, décision, principe concerné, option retenue, validée par.",
          "Remontez à la coordination et au point focal sécurité toute demande d'un acteur armé.",
          "Après chaque convoi, notez tout incident ou toute demande reçue au check-point.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — journal des décisions',
      lines: [
        "13/03 — D1 — Indépendance — Transports Umoja retenu au lieu de Bahati — validé J.-M. Ilunga.",
        "13/03 — D2 — Impartialité — grille 154/102/44 au prorata des cas BCZ — validée Dr Kahindo.",
        "14/03 — D3 — Neutralité — consigne de refus diffusée aux 2 chauffeurs ; question d'accès remontée à la coordination — validé point focal sécurité.",
      ],
    },
    result: "Livrable 6, partie 2 : un journal des décisions qui prouve que vos choix suivent les principes.",
  },

  // ───────────── PROCÉDURE 7 — Vérifier un itinéraire ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: "Découper l'itinéraire en tronçons et rassembler toutes les sources",
    intro: "Jour 2–3. Avant tout engagement, vous vérifiez si l'itinéraire traverse une zone contestée ou un ouvrage limitant. Un itinéraire se vérifie tronçon par tronçon, jamais « en gros ».",
    steps: [
      {
        title: 'Découpez',
        actions: [
          "Découpez l'itinéraire aux points de changement : type de route, ouvrage, localité, point de contrôle.",
          "Notez pour chaque tronçon : kilomètres de début et de fin, type de surface.",
        ],
      },
      {
        title: 'Rassemblez les sources',
        actions: [
          "LCA et alertes du Logistics Cluster.",
          "Notes d'accès d'OCHA et avis du point focal sécurité de votre ONG.",
          "Témoignages récents d'autres ONG et de chauffeurs qui ont fait le trajet.",
          "Votre briefing d'arrivée (à classer comme source non vérifiée).",
        ],
      },
    ],
    table: {
      columns: ['Tronçon', 'Km', 'Surface', 'Point d\'attention'],
      rows: [
        ['Goma – Kabati', '0 – 48', 'Bitume', 'Trafic dense, aucun ouvrage limitant connu'],
        ['Kabati – pont de la Musi', '48 – 97', 'Piste latérite', 'Dégradée en saison des pluies'],
        ['Pont de la Musi', '97', 'Pont en bois', 'Limite 12 t (alerte cluster du 10/03)'],
        ['Musi – Bweza', '97 – 118', 'Piste', 'Check-point irrégulier à Bweza'],
        ['Bweza – Lukando', '118 – 142', 'Piste', 'Non documenté'],
      ],
    },
    result: "Un itinéraire en 5 tronçons, chacun avec son point d'attention.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Coter chaque information : source, date, fiabilité',
    intro: "Toutes les informations ne se valent pas. Vous cotez chacune pour savoir sur quoi vous pouvez décider et ce qui doit encore être vérifié sur le terrain.",
    steps: [
      {
        title: 'Cotez',
        actions: [
          "Confirmée : observée par votre équipe ou par une source officielle de moins de 7 jours.",
          "Probable : une source directe crédible (chauffeur ou ONG ayant fait le trajet) de moins de 7 jours.",
          "Non vérifiée : ouï-dire, information non datée, ou de plus de 7 jours sur un axe instable.",
          "Toute information « Non vérifiée » sur un point critique déclenche une vérification avant engagement.",
        ],
      },
    ],
    table: {
      columns: ['Information', 'Source', 'Date', 'Cotation'],
      rows: [
        ['Pont Musi limité à 12 t', 'Alerte Logistics Cluster', '10/03', 'Confirmée'],
        ['Piste Kabati–Musi praticable', 'Chauffeur AMK', '13/03', 'Probable'],
        ['Check-point à Bweza, paiements exigés', 'Alerte cluster', '08/03', 'Non vérifiée (5 j, axe instable)'],
        ['Aucun incident sur véhicule humanitaire', 'Alerte cluster', '13/03', 'Probable'],
        ['« Ça passe, sauf peut-être au check-point »', 'Briefing oral', 'Non daté', 'Non vérifiée'],
      ],
    },
    pitfall: "Décider sur la phrase du briefing « ça passe ». Une information non datée est une information dont vous ne pouvez pas évaluer la fiabilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: "Identifier les points qui exigent une démarche d'accès",
    intro: "Un itinéraire qui traverse une zone contestée peut nécessiter une négociation d'accès préalable. Votre rôle ici est de l'identifier et de la déclencher à temps — la négociation elle-même relève de la coordination et sera approfondie au Module 07.",
    steps: [
      {
        title: 'Pour chaque point critique',
        actions: [
          "Identifiez qui contrôle le point et ce qu'il pourrait exiger.",
          "Vérifiez s'il existe un mécanisme de notification de mouvement dans le pays et faites-la dans les délais.",
          "Demandez à la coordination si une démarche auprès des leaders communautaires ou des autorités locales est nécessaire (via le BCZ par exemple).",
          "Vérifiez que l'acceptation de votre ONG dans la zone est connue (activités, emblème, véhicules identifiables).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — point critique « check-point de Bweza (km 118) »',
      lines: [
        "Contrôlé par : groupe armé non étatique local (selon alerte du 08/03).",
        "Exigences possibles : paiement, transport de personnes ou de marchandises.",
        "Démarches : notification de mouvement du convoi du 16/03 transmise le 14/03 ; demande à la coordination d'informer les leaders communautaires de Bweza, via le BCZ, de l'ouverture de l'UTC.",
        "Position de l'ONG : aucun paiement, aucun transport tiers ; pas d'escorte armée (dernier recours selon les lignes directrices IASC, décision hors du niveau logisticien).",
      ],
    },
    tip: "Faire savoir dans le village POURQUOI vous venez (une unité de traitement du choléra pour tous) est souvent votre meilleure protection au check-point.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Organiser la vérification avant engagement : la reconnaissance',
    intro: "Quand un point critique reste « Non vérifié » et qu'un convoi est engagé, on vérifie avant le départ : par des contacts directs, et si nécessaire par une reconnaissance avec un véhicule léger, validée par le point focal sécurité.",
    steps: [
      {
        title: 'Préparez la reconnaissance',
        actions: [
          "Faites valider le mouvement par le point focal sécurité.",
          "Équipez le véhicule : téléphone satellite ou radio, trousse de secours, carburant pour l'aller-retour.",
          "Fixez les contacts réguliers avec la base (toutes les 2 heures) et l'heure limite de retour.",
          "Écrivez les critères de demi-tour (ex. tirs signalés, barrière fermée, exigence d'argent).",
        ],
      },
      {
        title: 'Sur le terrain, vérifiez et documentez',
        actions: [
          "Pont : panneau de limite, état des poutres et des appuis, photos datées.",
          "Check-point : attitude, exigences, temps d'attente ; aucun paiement.",
          "Piste : passages difficiles, temps de parcours réel par tronçon.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — reconnaissance du samedi 14/03',
      lines: [
        "07h00 départ de la base de Lukando (4x4, chauffeur + logisticien) vers Bweza puis le pont de la Musi ; contact base 09h00, 11h00, 13h00 ; retour limite 15h00.",
        "07h50 check-point de Bweza (km 118) : contrôle des papiers, 10 minutes, aucune exigence envers le véhicule identifié ONG.",
        "09h20 pont de la Musi (km 97) : panneau « 12 t », planches remplacées récemment, photos datées prises.",
        "Retour à Lukando à 13h40 ; tronçon Kabati–Musi non parcouru, couvert par le témoignage du chauffeur AMK du 13/03 (Probable).",
      ],
    },
    result: "Les deux points critiques passent de « Non vérifiée » à « Confirmée » (au 14/03).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Décider Go / Go conditionnel / No-go et briefer le convoi',
    intro: "La décision s'écrit, se date et se transmet. Elle s'accompagne d'un briefing chauffeurs : un convoi bien préparé dont les chauffeurs ignorent les consignes reste un convoi à risque.",
    steps: [
      {
        title: 'Décidez et transmettez',
        actions: [
          "Écrivez la décision, sa justification en 3 lignes et sa durée de validité.",
          "Transmettez-la à la coordinatrice, au coordinateur logistique pays et au point focal sécurité.",
          "Remettez aux chauffeurs une fiche de consignes et briefez-les la veille du départ.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche de vérification et consignes (14/03, 17h30)',
      lines: [
        "Décision : GO pour le convoi du lundi 16/03, valable 48 h (à revalider si alerte nouvelle).",
        "Composition : 2 camions de 6 t + 1 véhicule léger de tête ; départ de Goma 06h00, arrivée prévue vers 13h00 à Bweza.",
        "Consignes : aucun passager, aucune marchandise tierce, aucun paiement ; contact base toutes les 2 h ; pont de la Musi franchi un camion à la fois.",
        "En cas de blocage au check-point : arrêt, appel à la base, attente des instructions.",
      ],
    },
    result: "Livrable 6, partie 2 terminée : une fiche de vérification d'itinéraire avec une décision datée et des consignes transmises.",
    pitfall: "Considérer qu'une reconnaissance faite reste valable une semaine. Sur un axe instable, la validité se compte en heures ou en jours.",
  },

  // ───────────── PROCÉDURE 8 — Note de positionnement (docx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 7',
    title: 'Rassembler les intrants et ouvrir le template de note',
    intro: "Jour 3. La note de positionnement synthétise en une page ce que vous savez 72 heures après votre arrivée. Ce document est souvent ce qui distingue un logisticien junior encore perdu d'un professionnel déjà opérationnel.",
    steps: [
      {
        title: 'Rassemblez les intrants',
        actions: [
          "La cartographie v02, la matrice de positionnement, la réponse de faisabilité.",
          "Le journal de coordination, le journal d'accès et la fiche de vérification d'itinéraire.",
        ],
      },
      {
        title: 'Préparez le document',
        actions: [
          "Ouvrez fiche-positionnement-mission-j1.docx et enregistrez-le sous AAAA-MM-JJ_Note-positionnement_[Zone].docx.",
          "Repérez les 5 sections : 1 Contexte, 2 Acteurs identifiés, 3 Mandat (tableau Secteurs / Zones), 4 Premiers contacts (tableau Point focal Logistics Cluster / Autres contacts), 5 Risques et actions proposées — puis le cartouche Rédigé par / Date.",
          "Remplacez chaque texte d'aide en gris par votre contenu ; ne laissez aucun texte d'aide.",
        ],
      },
    ],
    tip: "Écrivez d'abord la section 5 (risques et actions) : c'est celle que votre coordinateur lira en premier, et celle qui justifie toutes les autres.",
    result: "Le template est prêt, tous les intrants sont ouverts à côté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 7',
    title: 'Section 1 — Contexte de la mission',
    intro: "Le texte d'aide demande : zone d'intervention, date de déclenchement de l'urgence, type de crise. Trois à quatre lignes, uniquement des faits datés et sourcés.",
    steps: [
      {
        title: 'Rédigez',
        actions: [
          "Phrase 1 : type de crise, zone, dates.",
          "Phrase 2 : chiffres clés avec leur source et leur date.",
          "Phrase 3 : ce qui a changé depuis le dernier document de coordination.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 1',
      body: "Déplacement massif de population à Lukando (Nord-Kivu) entre le 2 et le 9 mars 2026 suite à des affrontements : environ 38 000 personnes déplacées réparties sur 3 sites (Kasika, Mubimbi, Bweza) selon le SitRep OCHA n°14 du 10/03. Épidémie de choléra en cours : 41 cas suspects du 06 au 12/03 (source BCZ Lukando), dont 21 à Bweza. Le 3W disponible (28/02) est antérieur à l'afflux.",
    },
    pitfall: "Raconter l'historique du conflit. Le coordinateur le connaît ; il attend les faits qui conditionnent la logistique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 7',
    title: 'Section 2 — Acteurs identifiés',
    intro: "Le texte d'aide demande : principaux acteurs recensés dans la cartographie, au format organisation – rôle – statut de l'information. Vous ne recopiez pas toute la cartographie : vous gardez les acteurs qui changent vos décisions.",
    steps: [
      {
        title: 'Rédigez',
        actions: [
          "Une ligne par acteur pertinent, au format Organisation – rôle – statut (date).",
          "Terminez par une ligne « Lacunes » : ce qui n'est couvert par personne.",
          "Renvoyez à la cartographie jointe pour le détail.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 2',
      lines: [
        "AMK – centre de traitement du choléra 60 lits, HGR Lukando – Confirmé (13/03).",
        "EPTK – chloration Kasika et Mubimbi – Confirmé (13/03).",
        "Logistics Cluster – hub Goma, stockage commun, transport hebdomadaire – Confirmé (13/03).",
        "ANGL – a quitté Bweza fin février – Obsolète (13/03).",
        "Lacunes : aucun acteur de santé ni de chloration à Bweza. Détail : cartographie v02 jointe.",
      ],
    },
    result: "Le lecteur sait en 5 lignes qui fait quoi, et où se trouve le vide.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 7',
    title: 'Section 3 — Mandat de notre organisation',
    intro: "La section 3 est un tableau à deux colonnes : Secteur(s) d'intervention et Zone(s) couverte(s). Elle doit refléter le positionnement VALIDÉ (Procédure 4), pas le plan initial.",
    steps: [
      {
        title: 'Remplissez le tableau',
        actions: [
          "Colonne Secteur(s) d'intervention : secteur + activité + capacité.",
          "Colonne Zone(s) couverte(s) : lieux exacts + date de début.",
          "Mentionnez la modification par rapport au plan initial et la date de la décision.",
        ],
      },
    ],
    table: {
      columns: ["Secteur(s) d'intervention", 'Zone(s) couverte(s)'],
      rows: [
        ['Santé — unité de traitement du choléra 40 lits (réorientée depuis l\'HGR, décision du 14/03)', 'Bweza — ouverture visée le 18/03'],
        ['Santé — 3 points de réhydratation orale', 'Kasika, Mubimbi, Bweza — à partir du 16/03'],
        ['Logistique — approvisionnement intrants choléra, appui de 50 kits au centre AMK', 'Axe Goma–Lukando–Bweza'],
      ],
    },
    pitfall: "Recopier le mandat de la proposition de projet. Si la note dit encore « centre de 40 lits à l'HGR », elle contredit votre propre signalement de redondance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 7',
    title: 'Section 4 — Premiers contacts établis',
    intro: "La section 4 est un tableau à deux colonnes : Point focal Logistics Cluster et Autres contacts de coordination. Ne listez que des contacts réellement établis (échange effectif), avec la date.",
    steps: [
      {
        title: 'Remplissez le tableau',
        actions: [
          "Colonne 1 : nom, fonction, date du premier échange, ce qui a été obtenu.",
          "Colonne 2 : un contact par ligne, même format.",
          "N'inscrivez pas un contact seulement « identifié » : il reste dans la cartographie en « À confirmer ».",
        ],
      },
    ],
    table: {
      columns: ['Point focal Logistics Cluster', 'Autres contacts de coordination'],
      rows: [
        ['Amina Sow (fictive), LC Officer Nord-Kivu — 12/03 : enregistrement ; 13/03 : alerte pont Musi et check-point', 'Dr P. Kambale, AMK — 13/03 : capacité du centre confirmée'],
        ['Réunion logistique : mardi 17/03, 10h00', 'Médecin chef de zone, BCZ — 13/03 : données de cas, départ d\'ANGL'],
        ['—', 'Transports Umoja — 13/03 : contrat 2 camions de 6 t'],
      ],
    },
    result: "Votre coordinateur sait sur qui il peut compter, et depuis quand.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 7',
    title: 'Section 5 — Risques identifiés et actions proposées',
    intro: "La section 5 contient deux blocs : « Risques sécuritaires, d'accès ou de doublon repérés » puis « Action proposée pour vérifier / mitiger avant engagement ». Un risque sans action proposée n'a pas sa place dans la note.",
    steps: [
      {
        title: 'Rédigez les deux blocs en miroir',
        actions: [
          "Bloc 1 : un risque par ligne, numéroté, avec sa source et sa date.",
          "Bloc 2 : la même numérotation, une action par risque, avec son responsable et son échéance.",
          "Indiquez l'état de chaque action (faite / en cours / à décider).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 5',
      lines: [
        "R1 Doublon — centre choléra à l'HGR déjà couvert par AMK (confirmé 13/03). → A1 Réorientation vers Bweza : FAITE, décision du 14/03.",
        "R2 Accès — pont de la Musi limité à 12 t (alerte cluster 10/03, vérifié 14/03). → A2 2 camions de 6 t au lieu d'un 10 t, franchissement un par un : FAIT.",
        "R3 Sécurité — check-point de Bweza (alerte 08/03 ; vérifié 14/03, sans exigence). → A3 Notification de mouvement, consignes chauffeurs, information des leaders via le BCZ : EN COURS (coordination).",
        "R4 Indépendance — transporteur lié à un candidat. → A4 Transporteur alternatif retenu (+6 %) : FAIT.",
        "R5 Approvisionnement — 200 kits manquants. → A5 Commande du 13/03, arrivée 22–25/03 : EN COURS.",
      ],
    },
    result: "Chaque risque a son action, son responsable et son état : la section se lit comme un tableau de bord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 7 sur 7',
    title: 'Signer, dater, relire et présenter la note',
    intro: "La note n'a de valeur que présentée et discutée. Vous la relisez avec une check-list courte, puis vous la présentez oralement en 5 minutes.",
    steps: [
      {
        title: 'Finalisez',
        actions: [
          "Remplissez le cartouche : Rédigé par (nom, fonction) et Date.",
          "Vérifiez : une page (deux au maximum), aucun texte d'aide restant, chaque information datée, chaque risque avec une action.",
          "Exportez en PDF et joignez la cartographie v02.",
        ],
      },
      {
        title: 'Présentez en 5 minutes',
        actions: [
          "1 minute : contexte et lacune principale.",
          "2 minutes : positionnement et décision obtenue.",
          "2 minutes : risques, actions et ce que vous attendez du coordinateur.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — envoi du 14/03 à 18h30',
      lines: [
        "Pièces jointes : 2026-03-14_Note-positionnement_Lukando.pdf ; 2026-03-14_Cartographie-acteurs_Lukando_v02.xlsx",
        "Présentation orale à Dr Kahindo à 19h00 ; demande formulée : appui de la coordination pour informer les leaders de Bweza avant lundi.",
      ],
    },
    result: "Livrable 7 terminé : la note de positionnement est signée, datée, présentée avant H+72.",
  },

  // ───────────── CAS RÉSOLU ─────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Dossier Lukando : le raisonnement de J1 à J3',
    scenario: "Vous êtes arrivé(e) le jeudi 12 mars 2026 avec un briefing de 15 minutes, six affirmations non vérifiées et une demande de 500 kits pour le lundi. Voici, jour par jour, ce qui a été fait, pourquoi, et ce que cela a produit.",
    steps: [
      {
        title: 'J1 — jeudi 12 mars : vérifier avant d\'agir',
        actions: [
          "7h15 : briefing noté mot pour mot (6 affirmations).",
          "7h45–11h00 : SitRep, 3W et compte rendu cluster téléchargés ; 3W filtré sur Lukando ; fraîcheur évaluée ; 6 vérifications listées.",
          "14h00–15h10 : page pays du Logistics Cluster lue ; message d'enregistrement envoyé.",
          "16h00 : disponibilité vérifiée : 300 kits à Goma, 200 à commander.",
        ],
        result: "Livrable 1 et première moitié du livrable 2.",
      },
      {
        title: 'J2 — vendredi 13 mars : confirmer, calculer, signaler',
        actions: [
          "9h40 : alerte cluster reçue (pont 12 t, check-point Bweza) → camion de 10 t exclu.",
          "14h00 : réunion inter-agences → centre AMK 60 lits confirmé, ANGL partie, Bweza sans acteur.",
          "15h30 : redondance signalée à la coordinatrice, avec alternative.",
          "17h00 : réponse de faisabilité GO CONDITIONNEL envoyée ; transporteur alternatif retenu ; grille 154/102/44 signée.",
        ],
        result: "Livrables 2, 3 (v01), 4 (partie 1), 5 et 6 (grille).",
      },
      {
        title: 'J3 — samedi 14 mars : vérifier la route, décider, présenter',
        actions: [
          "7h00–13h40 : reconnaissance Lukando–Bweza–pont de la Musi → check-point et pont confirmés.",
          "10h15 : décision de réorientation vers Bweza obtenue ; déclaration au cluster santé.",
          "17h30 : décision GO pour le convoi du 16/03 et consignes chauffeurs.",
          "18h30–19h00 : note de positionnement envoyée et présentée.",
        ],
        result: "Livrables 3 (v02), 4, 6 et 7 terminés avant H+72.",
      },
    ],
    pitfall: "Ce qui aurait été fait sans méthode : un camion de 10 t bloqué au pont, un centre de 40 lits en doublon à l'HGR et Bweza — le site le plus touché — sans aucune prise en charge.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La cartographie finale (v02, 14/03/2026)',
    scenario: "Extrait de l'onglet Cartographie à la fin de J3. Les contacts complets (colonne D) figurent dans le fichier ; ils sont omis ici pour la lisibilité.",
    steps: [],
    table: {
      columns: ['Organisation', 'Rôle', 'Zone géographique', 'Cluster', 'Dernière MAJ', 'Statut'],
      rows: [
        ['OCHA – sous-bureau Goma', 'Coordination générale, 3W, notifications', 'Nord-Kivu (province)', 'Coordination', '2026-03-12', 'Confirmé'],
        ['PAM / Logistics Cluster', 'Hub Goma, stockage commun, transport hebdo', 'Nord-Kivu (province)', 'Logistique', '2026-03-13', 'Confirmé'],
        ['AMK', 'Centre choléra 60 lits, HGR', 'Lukando', 'Santé', '2026-03-13', 'Confirmé'],
        ['EPTK', 'Chloration Kasika et Mubimbi', 'Lukando', 'WASH', '2026-03-13', 'Confirmé'],
        ['BCZ Lukando', 'Autorité sanitaire, surveillance', 'Lukando', 'Autorité', '2026-03-13', 'Confirmé'],
        ['ANGL', 'Nutrition — partie fin février', 'Axe Lukando–Bweza', 'Nutrition', '2026-03-13', 'Obsolète'],
        ['Transports Bahati SARL', 'Transporteur — non retenu (Indépendance)', 'Axe Goma–Lukando', 'Aucun (privé)', '2026-03-13', 'Obsolète'],
        ['Transports Umoja', 'Transporteur — 2 camions 6 t sous contrat', 'Axe Goma–Lukando', 'Aucun (privé)', '2026-03-13', 'Confirmé'],
      ],
    },
    result: "Synthèse par zone : Nord-Kivu (province) 2 / 0 ; Lukando 3 / 0 ; Axe Lukando–Bweza 1 / 0 ; Axe Goma–Lukando 2 / 0 ; TOTAL 8 acteurs, 0 « À confirmer » — égal aux 8 lignes saisies.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La note de positionnement finale (extrait condensé)',
    scenario: "Fiche de positionnement de mission J+1 à J+3 — Kemora Santé — Lukando. Rédigée par : logisticien terrain. Date : 14/03/2026.",
    steps: [],
    example: {
      title: 'Les 5 sections telles que remises',
      lines: [
        "1. Contexte : 38 000 déplacés à Lukando (2–9/03, SitRep n°14) ; choléra : 41 cas suspects du 06 au 12/03 (BCZ), dont 21 à Bweza. 3W (28/02) antérieur à l'afflux.",
        "2. Acteurs : AMK centre 60 lits HGR (Confirmé) ; EPTK chloration Kasika/Mubimbi (Confirmé) ; Logistics Cluster hub Goma (Confirmé) ; ANGL partie de Bweza (Obsolète). Lacune : Bweza sans santé ni chloration.",
        "3. Mandat : UTC 40 lits Bweza (réorientée le 14/03, ouverture 18/03) ; 3 PRO Kasika, Mubimbi, Bweza ; intrants choléra dont 50 kits en appui à AMK.",
        "4. Contacts : point focal LogCluster (enregistrement 12/03, alertes 13/03) ; AMK, BCZ (13/03) ; Transports Umoja (contrat 13/03).",
        "5. Risques et actions : R1 doublon → réorientation FAITE ; R2 pont 12 t → 2 camions 6 t FAIT ; R3 check-point → notification + consignes + leaders EN COURS ; R4 transporteur → alternative FAITE ; R5 200 kits → arrivée 22–25/03 EN COURS.",
      ],
    },
    result: "Une page, cinq sections, chaque information datée et sourcée, chaque risque associé à une action et à son état.",
    tip: "Comparez cette note à votre briefing d'arrivée : sur six affirmations initiales, deux étaient fausses ou dépassées (centre choléra à créer à l'HGR, ONG nutrition à Bweza). C'est la valeur ajoutée de vos 72 heures.",
  },

  // ───────────── EXERCICES ─────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Cartographie des acteurs : cas « Urgence déplacement de population, Tine, Tchad »',
    instructions: "Contexte (fictif, inspiré de situations rencontrées dans l'Est du Tchad) : vous êtes logisticien(ne) d'une ONG médicale internationale, sur une réponse d'urgence déclenchée il y a 5 jours après un afflux massif de population déplacée à Tine. Briefing de 20 minutes, incomplet : « Il y a déjà une grande ONG médicale internationale et une organisation de protection sur zone, je crois, mais je ne sais pas exactement où » ; « Le PAM devait activer un cluster logistique mais je n'ai pas eu de confirmation » ; « La route principale vers Ourécassoni est praticable, sauf peut-être après le check-point à 15 km » ; « Premier convoi de matériel médical dans 48h maximum ». Refaites seul(e) les Procédures 1 à 3.",
    steps: [
      { title: 'Notez le briefing', actions: ["Recopiez les 4 affirmations, numérotez-les, marquez chacune « à vérifier »."] },
      { title: 'Simulez la recherche 3W', actions: ["Écrivez ce que vous chercheriez sur le portail OCHA et sur HDX (mots-clés, filtres de zone et de secteurs).", "Indiquez comment vous jugeriez la fraîcheur des données trouvées."] },
      { title: 'Simulez la recherche Logistics Cluster', actions: ["Écrivez ce que vous vérifieriez sur logcluster.org (activation, point focal, services, LCA, alertes sur l'axe Tine–Ourécassoni)."] },
      { title: 'Définissez vos zones', actions: ["Fixez 3 libellés de zone (ex. Tine ; Axe Tine–Ourécassoni ; Ensemble de la zone) et réutilisez-les à l'identique."] },
      { title: 'Remplissez le template', actions: ["Saisissez au moins 4 acteurs plausibles (organisations médicales, agences onusiennes, cluster logistique, autorité ou transporteur) dans les lignes vides de cartographie-acteurs-logistiques.xlsx.", "Remplissez les 7 colonnes, avec une date et un statut sur chaque ligne ; marquez clairement « À confirmer » tout ce qui vient du seul briefing."] },
      { title: 'Contrôlez la synthèse', actions: ["Mettez à jour l'onglet « Synthèse par zone » et vérifiez que le TOTAL correspond au nombre de lignes saisies."] },
    ],
    deliverable: "cartographie-acteurs-logistiques.xlsx complétée (au moins 4 acteurs, 7 colonnes renseignées, synthèse cohérente) + la liste de vos vérifications prioritaires avec interlocuteur et échéance.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Note de positionnement : cas Tine',
    instructions: "À partir de votre cartographie de l'exercice 1, rédigez la note de positionnement de mission avec fiche-positionnement-mission-j1.docx (Procédure 8). Elle doit intégrer explicitement : le risque identifié sur la route vers Ourécassoni, votre proposition d'action pour le vérifier avant le départ du convoi, et la manière dont vous vous assurez de ne pas dupliquer une intervention déjà en cours.",
    steps: [
      { title: 'Section 1 — Contexte', actions: ["Zone, date de déclenchement (J−5), type de crise ; précisez ce qui n'est pas encore chiffré."] },
      { title: 'Section 2 — Acteurs', actions: ["Reprenez vos acteurs au format organisation – rôle – statut ; terminez par une ligne « Lacunes / inconnues »."] },
      { title: 'Section 3 — Mandat', actions: ["Remplissez le tableau Secteur(s) / Zone(s) pour votre ONG médicale."] },
      { title: 'Section 4 — Contacts', actions: ["Point focal Logistics Cluster : contacté ou non ? Autres contacts : distinguez « établi » de « identifié »."] },
      { title: 'Section 5 — Risques et actions', actions: ["Risque route après le check-point à 15 km : sources, cotation, action de vérification avant le convoi (contacts, reconnaissance, critères Go / No-go).", "Risque de doublon : votre vérification (3W, réunion de coordination, appel direct) avant de lancer le convoi."] },
      { title: 'Finalisation', actions: ["Cartouche rempli, relecture avec la check-list de la diapositive suivante, export PDF."] },
    ],
    deliverable: "fiche-positionnement-mission-j1.docx complétée, 2 pages au maximum (une page visée), cohérente avec votre cartographie.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Quatre décisions au filtre des principes humanitaires',
    instructions: "Pour chacune des situations ci-dessous, appliquez la Procédure 6 : décrivez la décision en une phrase, passez le test des 4 questions, choisissez l'option conforme et sa mesure de mitigation, puis rédigez la ligne du journal des décisions.",
    steps: [
      { title: 'Situation A', body: "Un officier de l'armée régulière vous demande de transporter « juste 3 cartons de rations » pour ses hommes jusqu'à Ourécassoni dans votre convoi médical." },
      { title: 'Situation B', body: "Vous devez répartir 120 bâches entre trois sites ; le chef d'un des sites, très influent, insiste pour en recevoir la moitié." },
      { title: 'Situation C', body: "Le transporteur le moins cher appartient à un élu local qui annonce à la radio qu'il « apporte l'aide » à la population." },
      { title: 'Situation D', body: "La route est incertaine après le check-point ; votre collègue propose d'attendre une confirmation officielle avant de faire quoi que ce soit." },
    ],
    example: {
      title: 'Exemple de ligne attendue (situation déjà traitée dans le module)',
      lines: [
        "« 13/03 — Répartition de 300 kits — Impartialité — grille au prorata des cas suspects BCZ (154/102/44), signée par la coordinatrice médicale — validé Dr Kahindo. »",
      ],
    },
    deliverable: "Une grille de 4 lignes (situation, principe(s) en jeu, option retenue, mitigation) et les 4 lignes correspondantes du journal des décisions.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Cartographie : chaque ligne a ses 7 colonnes remplies, dont une date au format AAAA-MM-JJ correspondant à la date de l'information (pas à celle de la saisie).",
      "Cartographie : le statut vient de la liste déroulante et suit la règle Confirmé / À confirmer / Obsolète ; tout ce qui vient du seul briefing est « À confirmer ».",
      "Cartographie : les libellés de zone sont identiques dans la colonne C et dans l'onglet Synthèse, et le TOTAL est égal au nombre de lignes saisies.",
      "Cartographie : le rôle de chaque acteur est précis (secteur, activité, lieu, capacité si connue) — aucun « ONG médicale » seul.",
      "Note : les 5 sections sont remplies, aucun texte d'aide ne subsiste, le cartouche est signé et daté.",
      "Note : le risque route vers Ourécassoni est décrit avec sa source et sa cotation, et associé à une action de vérification avant le départ du convoi, avec des critères Go / No-go.",
      "Note : la vérification anti-doublon est décrite concrètement (quelle source, quel interlocuteur, quand).",
      "Note : elle tient sur une page (deux au maximum) et elle est cohérente avec la cartographie (mêmes acteurs, mêmes statuts).",
      "Grille des principes : chaque situation nomme le principe en jeu, une option conforme et une mesure de mitigation ; la situation D aboutit à une action (vérification, remontée à la coordination), pas à l'attente.",
    ],
  },

  // ───────────── ERREURS FRÉQUENTES ─────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Partir sans vérifier le 3W parce que « le coordinateur a dit que c'était bon » — un briefing oral incomplet n'est jamais une source de vérité suffisante. Parade : Procédure 1 dans les 24 premières heures.",
      "Lire « Planifiée » dans un 3W comme « en cours », ou conclure à l'absence d'un acteur parce qu'un 3W antérieur à la crise ne le mentionne pas. Parade : comparer la date du 3W à la date de début de la crise.",
      "Confondre neutralité et passivité — attendre une confirmation officielle qui ne viendra jamais assez vite. La neutralité encadre COMMENT vous négociez l'accès, pas SI vous le faites. Parade : Procédure 7, vérification active et remontée à la coordination.",
      "Ignorer le cluster meeting « faute de temps » — c'est dans les premiers jours, quand tout le monde est débordé, que l'information critique circule le plus vite. Parade : 3 questions préparées, compte rendu sous 2 heures.",
      "Lancer un convoi sans vérifier les doublons — livrer deux fois la même zone quand une autre reste sans couverture est une faute professionnelle en contexte de ressources rares. Parade : matrice de recoupement (Procédure 4).",
      "Ne pas dater ses informations — une information de coordination non datée ne peut pas être évaluée. Parade : colonne F renseignée avec la date de l'information sur chaque ligne.",
      "Orthographier différemment une même zone dans la cartographie — la synthèse sous-compte sans prévenir. Parade : libellés copiés-collés et contrôle TOTAL = nombre de lignes.",
      "Choisir un véhicule sur sa charge utile sans calculer le poids total en charge face aux limites des ponts. Parade : calcul poids à vide + chargement (Procédure 5, étape 3).",
      "Accepter « exceptionnellement » un passager, un colis ou un paiement à un check-point. Parade : consigne de refus écrite et briefée à chaque chauffeur.",
      "Partager la cartographie (qui contient des contacts nominatifs) sur un groupe ouvert. Parade : diffusion interne uniquement.",
    ],
  },

  // ───────────── RÉCAPITULATIF ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez filtré un 3W sur une zone et des secteurs précis, évalué la fraîcheur de chaque ligne et produit une liste de vérifications priorisées.",
      "Vous avez rédigé un message d'enregistrement auprès du Logistics Cluster et un compte rendu de réunion de coordination diffusé sous 2 heures.",
      "Vous avez rempli la cartographie-acteurs-logistiques.xlsx colonne par colonne et mis à jour son onglet de synthèse, avec un contrôle de cohérence.",
      "Vous avez construit une matrice de positionnement, qualifié chaque activité (seul / complémentaire / redondant) et rédigé un signalement de redondance avec alternative.",
      "Vous avez transformé une demande du programme en réponse de faisabilité chiffrée : calcul de charge, choix des véhicules face à une limite de pont, rétro-planning du pipeline.",
      "Vous avez appliqué les 4 principes humanitaires à des décisions réelles : grille de priorisation calculée, choix de transporteur, consigne de refus, journal des décisions.",
      "Vous avez vérifié un itinéraire tronçon par tronçon, coté les informations et rendu une décision Go / No-go assortie de consignes convoi.",
      "Vous avez rédigé et présenté une note de positionnement d'une page avant H+72.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer la différence entre le rôle d'OCHA et celui d'un cluster sectoriel.",
      "Je sais où trouver le 3W/4W à jour pour n'importe quel pays en réponse humanitaire, et comment le filtrer sur ma zone.",
      "Je sais dans quelles conditions le Logistics Cluster s'active et ce qu'il propose concrètement (stockage, transport, information).",
      "Je peux citer les 4 principes humanitaires et donner un exemple logistique concret pour chacun.",
      "J'ai complété une cartographie d'acteurs avec le template fourni, synthèse comprise.",
      "J'ai rédigé une note de positionnement de mission tenant sur une page.",
      "Je sais identifier, dans un briefing incomplet, les informations à vérifier en priorité avant d'agir.",
      "Je sais calculer le poids total en charge d'un véhicule et le comparer aux limites de mon itinéraire.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 02 — Évaluation des Besoins & Planification Logistique d'Urgence : vous passerez de la cartographie des acteurs à l'évaluation rapide des capacités logistiques d'une zone et à la construction d'un plan de contingence logistique (CONOPS).",
  },
]
