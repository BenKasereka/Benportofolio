// Module 01 — Fondamentaux de la Logistique Humanitaire
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Fondamentaux de la Logistique Humanitaire',
    hook: "Savoir exactement où vous vous situez dès votre arrivée en mission — pour ne pas doublonner un autre acteur ni rater un accès sécurisé faute d'avoir posé les bonnes questions dans les 72 premières heures.",
  },
  {
    type: 'objectives',
    items: [
      "Vous positionner correctement dans l'architecture de coordination humanitaire (le système de clusters, où chaque secteur d'intervention — santé, eau, logistique... — a une organisation pilote désignée) dès l'arrivée sur une nouvelle mission.",
      "Identifier en moins de 48h les acteurs logistiques clés d'un contexte de crise et établir les premiers contacts.",
      "Appliquer les 4 principes humanitaires (Humanité, Neutralité, Impartialité, Indépendance) à des décisions logistiques concrètes du quotidien.",
      "Utiliser une matrice 3W/4W (l'outil qui recense qui fait quoi, où et quand, pour éviter que deux organisations livrent deux fois la même zone) pour coordonner avec les autres acteurs présents.",
      "Produire une note de positionnement de mission exploitable dès le premier briefing.",
    ],
  },
  {
    type: 'concept',
    title: "L'architecture de la réponse humanitaire",
    body: [
      "Avant 2005, chaque agence de l'ONU et chaque grande ONG répondait à une crise à sa manière : deux organisations pouvaient livrer la même zone deux fois, pendant qu'une autre restait sans aucune couverture. La réforme humanitaire de 2005 a créé le Cluster System pour corriger ça — un système où chaque secteur d'intervention a un \"cluster\" désigné, piloté par une agence \"cluster lead\".",
      "OCHA (Office for the Coordination of Humanitarian Affairs) est le chef d'orchestre de l'ensemble : il ne délivre pas d'aide lui-même, il coordonne ceux qui le font. C'est OCHA qui publie les situation reports (SitReps) et maintient la matrice 3W (Who does What Where — qui fait quoi, où), parfois étendue en 4W en ajoutant le \"quand\".",
    ],
  },
  {
    type: 'concept',
    title: "Le Logistics Cluster : une couche au-dessus de votre logistique",
    body: "Le Logistics Cluster est piloté par le PAM (Programme Alimentaire Mondial). Il s'active lorsque les capacités logistiques locales sont insuffisantes pour répondre aux besoins de toute la communauté humanitaire — pas seulement de votre organisation. Il peut alors mettre en place un entrepôt commun, un pont aérien partagé, ou une coordination des convois routiers dans une zone à accès restreint.",
    highlight: "Le Logistics Cluster n'est PAS votre logistique interne. Vous continuez à gérer votre propre flotte et votre propre entrepôt — mais vous devez savoir s'il existe dans votre zone, vous y enregistrer, et l'utiliser quand vos capacités sont dépassées.",
  },
  {
    type: 'concept',
    title: 'Le rôle réel du logisticien humanitaire',
    body: "Dans une ONG, le programme (santé, nutrition, protection...) décide QUOI faire. La logistique décide si c'est possible, QUAND, et COMMENT. Un médecin peut prescrire 500 kits contre le choléra pour demain matin — si la logistique n'a pas anticipé le transport, le dédouanement, le stockage réfrigéré et la disponibilité d'un véhicule, la prescription ne vaut rien. Le logisticien senior n'est pas un exécutant de commandes : il est le garant de la faisabilité, et doit participer aux réunions de planification programme, pas seulement recevoir les demandes après coup.",
  },
  {
    type: 'comparison-table',
    title: 'Les 4 principes humanitaires en pratique logistique',
    columns: ['Principe', 'Ce que ça veut dire en logistique'],
    rows: [
      ['Humanité', "Vos critères de priorisation des livraisons doivent être objectifs (vulnérabilité, urgence médicale), jamais basés sur l'appartenance ethnique, politique ou religieuse d'un bénéficiaire."],
      ['Neutralité', "Vous ne transportez jamais de matériel à connotation militaire, même \"exceptionnellement\". Un seul écart connu peut faire perdre l'accès à toute une zone."],
      ['Impartialité', "L'aide est distribuée selon les besoins uniquement, avec des critères de priorisation écrits et appliqués de façon constante — jamais \"au feeling\" du chauffeur ou du chef d'entrepôt du jour."],
      ['Indépendance', "Vigilance sur les accords de transport avec des acteurs qui pourraient revendiquer votre aide comme un soutien politique."],
    ],
  },
  {
    type: 'concept',
    title: 'Neutralité ne veut pas dire passivité',
    body: "Rester neutre ne veut pas dire refuser de négocier avec les acteurs armés d'une zone pour obtenir un accès sécurisé — au contraire, cette négociation (encadrée par les principes du CICR, le Comité International de la Croix-Rouge, approfondie au Module 07) fait partie du métier.",
    highlight: 'La neutralité, c\'est refuser de prendre parti, pas refuser d\'agir.',
  },
  {
    type: 'vocabulary',
    terms: [
      { term: '3W / 4W', definition: "Matrice de coordination \"Qui fait Quoi, Où (et Quand)\" — l'outil de base pour éviter les doublons entre organisations." },
      { term: 'Pipeline logistique', definition: "L'ensemble de la chaîne, du fournisseur jusqu'au bénéficiaire final : achat, transport international, dédouanement, stockage, transport local, distribution." },
      { term: 'Last mile', definition: "Le dernier segment de la chaîne, souvent le plus difficile : de l'entrepôt régional jusqu'au point de distribution final, dans des conditions d'accès parfois très dégradées." },
      { term: 'Logistics Cluster', definition: "Cluster piloté par le PAM qui s'active quand les capacités logistiques locales sont insuffisantes pour l'ensemble de la communauté humanitaire." },
    ],
  },
  {
    type: 'process',
    title: 'Vos 72 premières heures sur une nouvelle mission logistique',
    steps: [
      { title: 'Consulter le 3W/4W du cluster logistique concerné', body: "Jour 1, avant toute autre action, sur le portail OCHA Humanitarian Response. Un 3W vieux de plus de 3 mois est à croiser avec les informations de votre coordinateur terrain." },
      { title: 'Identifier et contacter le point focal Logistics Cluster local', body: "Jour 1-2, via logcluster.org, pour vous enregistrer et recevoir les alertes routières et sécuritaires." },
      { title: 'Cartographier les acteurs clés', body: "Jour 2-3, avec le template cartographie-acteurs-logistiques.xlsx : organisation, rôle, zone couverte, contact, cluster de rattachement, date de mise à jour." },
      { title: "Positionner votre structure dans l'organigramme de coordination", body: "Jour 2-3 : seul acteur, acteur complémentaire, ou redondant avec un dispositif existant — à signaler immédiatement si c'est le cas." },
      { title: "Croiser accès, sécurité et principes humanitaires avant tout engagement", body: "Jour 3, puis rédiger la note de positionnement de mission (fiche-positionnement-mission-j1.docx) présentée à votre coordinateur." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Urgence déplacement de population, Tine, Tchad"',
    scenario: "Déployé(e) comme logisticien(ne) pour une ONG médicale, 5 jours après un afflux massif de population déplacée. Votre briefing d'arrivée, réalisé en 20 minutes, est incomplet : présence supposée de MSF et du CICR sans certitude sur leur zone exacte, cluster logistique \"peut-être\" activé par le PAM, route principale \"praticable sauf peut-être après le check-point à 15 km\". Un premier convoi de matériel médical doit rouler dans 48h maximum.",
    steps: [
      "Vérifier par vous-même, dans les 24 premières heures, ce que le portail OCHA et logcluster.org disent réellement de la zone — un briefing oral incomplet n'est jamais une source suffisante.",
      "Lister au moins 4 acteurs plausibles (organisations médicales, agences onusiennes, cluster logistique) avec leur rôle supposé, et marquer clairement ce qui reste \"à confirmer\".",
      "Documenter le risque route vers Ourécassoni et la proposition d'action pour le vérifier avant le départ du convoi.",
      "S'assurer explicitement de ne pas dupliquer une intervention déjà en cours avant de lancer le convoi.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Partir sans vérifier le 3W parce que \"le coordinateur a dit que c'était bon\" — un briefing oral incomplet n'est jamais une source de vérité suffisante.",
      "Confondre neutralité et passivité — attendre une confirmation officielle qui ne viendra jamais assez vite, au lieu de négocier l'accès.",
      "Ignorer le cluster meeting \"faute de temps\" — c'est précisément dans les 5 premiers jours d'une urgence que l'information critique circule le plus vite en réunion.",
      "Lancer un convoi sans vérifier les doublons — livrer deux fois la même zone quand une autre reste sans couverture est une faute professionnelle en contexte de ressources rares.",
      "Ne pas dater ses informations — une information de coordination non datée est une information dont vous ne pouvez pas évaluer la fiabilité.",
    ],
  },
  {
    type: 'exercise',
    title: 'Cartographie des acteurs et note de positionnement',
    instructions: "En vous basant sur le cas \"Tine, Tchad\", complétez le template cartographie-acteurs-logistiques.xlsx en simulant les recherches que vous feriez sur le portail OCHA et sur logcluster.org, avec au moins 4 acteurs plausibles et leurs informations \"à confirmer\" clairement identifiées. Rédigez ensuite la note de positionnement de mission avec le template fiche-positionnement-mission-j1.docx, en y intégrant le risque route, votre proposition pour le vérifier, et votre vérification anti-doublon.",
    deliverable: 'Les deux fichiers complétés, la note de positionnement ne dépassant pas 2 pages.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer la différence entre le rôle d'OCHA et celui d'un cluster sectoriel.",
      "Je sais où trouver le 3W/4W à jour pour n'importe quel pays en réponse humanitaire.",
      "Je peux citer les 4 principes humanitaires et donner un exemple logistique concret pour chacun.",
      "J'ai complété une cartographie d'acteurs et rédigé une note de positionnement de mission.",
      "Je sais identifier, dans un briefing incomplet, les informations à vérifier en priorité avant d'agir.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 02 — Évaluation des Besoins & Planification Logistique d'Urgence.",
  },
]
