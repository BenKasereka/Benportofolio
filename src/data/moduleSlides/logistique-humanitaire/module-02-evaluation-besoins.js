// Module 02 — Évaluation des Besoins & Planification Logistique d'Urgence
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Évaluation des Besoins & Planification Logistique d'Urgence",
    hook: "Dans les 72 premières heures d'une crise, attendre une information parfaite avant d'agir est une faute, pas une prudence. Ce module vous donne les outils pour décider vite, avec une information incomplète, sans vous tromper de priorité.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer en quoi la logistique d'une réponse déclenchée en urgence (0-72h) obéit à une logique différente de la logistique de programme habituelle, où l'on a le temps de comparer plusieurs devis.",
      "Situer le rôle de la logistique dans une évaluation MIRA (Multi-Cluster/Sector Initial Rapid Assessment — l'évaluation rapide multi-sectorielle interagences) et la compléter par une grille HEAT (Hasard – Exposition – Accès – Transport), l'outil de scoring logistique propre à cette formation.",
      "Construire un plan de contingence logistique, appelé CONOPS (Concept of Operations), exploitable par une équipe qui n'a pas participé à sa rédaction.",
      "Justifier un choix de prépositionnement (stockage anticipé de biens près des zones à risque) et de stock tampon à partir de délais d'approvisionnement réels, pas d'une intuition.",
      "Produire, en 72h, les deux livrables attendus d'un logisticien en phase de déclenchement : une évaluation chiffrée des besoins et un CONOPS signé.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi les 72 premières heures changent toutes les règles',
    body: "En logistique de programme classique, vous avez le temps : un appel d'offres, plusieurs devis comparés, une validation budgétaire. En phase de déclenchement d'urgence — glissement de terrain, inondation, épidémie, afflux soudain de déplacés — ce temps n'existe pas. La question n'est plus « quel est le meilleur fournisseur ? » mais « qu'est-ce qui peut être sur place avant que des gens ne meurent faute d'eau, d'abri ou de traitement ? ».",
    highlight: "Un logisticien senior ne cherche pas l'information parfaite dans les 72 premières heures : il cherche l'information suffisante pour ne pas se tromper de priorité.",
  },
  {
    type: 'concept',
    title: "MIRA : la photographie multi-sectorielle partagée",
    body: "Le MIRA est piloté par OCHA en lien avec les clusters, dans les 24 à 72 heures suivant le déclenchement, pour éviter que chaque agence reparte de zéro. Il contient presque toujours un volet accès et infrastructures (routes, ponts, aéroports, marchés fonctionnels) qui vous concerne directement — et si ce volet est absent ou trop générique, c'est à vous de le compléter, pas d'attendre qu'un autre secteur le fasse.",
    highlight: "Consultez le MIRA dès qu'il existe, même une version préliminaire à 30% — mais il vous donne le contexte général, jamais la réponse à « puis-je faire rouler un camion de 10 tonnes sur cet axe demain matin ? ».",
  },
  {
    type: 'concept',
    title: 'La grille HEAT : l\'évaluation de capacité logistique qui complète le MIRA',
    body: "Le MIRA ne descend pas au niveau de détail dont un logisticien a besoin pour choisir un itinéraire, un mode de transport ou un point de stockage. La grille HEAT est un outil de scoring rapide que l'équipe logistique remplit elle-même, zone par zone, avec les moyens du bord (téléphone, WhatsApp, observation directe), pour quantifier la sévérité logistique réelle de chaque secteur touché.",
  },
  {
    type: 'comparison-table',
    title: 'Les 4 axes de la grille HEAT (0 = aucune contrainte, 4 = bloquant)',
    columns: ['Axe', 'Ce qu\'il mesure', 'Exemple de question terrain'],
    rows: [
      ['H — Hasard', "Le danger physique résiduel sur une opération logistique.", "Y a-t-il un risque de récidive qui menace un entrepôt ou un convoi ?"],
      ['E — Exposition', "Le volume de population et d'infrastructures critiques exposé.", "Combien de personnes dépendent d'un seul axe d'approvisionnement ?"],
      ['A — Accès', "La possibilité réelle d'atteindre la zone par voie terrestre, fluviale ou aérienne.", "La route est-elle praticable pour un camion chargé, ou seulement un 4x4 à vide ?"],
      ['T — Transport', "La disponibilité de moyens de transport et de stockage utilisables dans l'immédiat.", "Reste-t-il un entrepôt sec et sécurisé encore debout à proximité ?"],
    ],
  },
  {
    type: 'concept',
    title: 'CONOPS : traduire une évaluation en décisions opérationnelles',
    body: "Un CONOPS n'est pas un rapport d'évaluation reformulé — c'est un document d'action, écrit pour qu'une équipe qui n'a pas participé à sa rédaction puisse l'exécuter dès la première lecture, en traduisant les scores de l'évaluation en décisions concrètes : quoi faire, avec quelles ressources, dans quel ordre, sous la responsabilité de qui.",
    highlight: "Un CONOPS écrit pendant la crise, dans l'urgence, est toujours de moins bonne qualité qu'un CONOPS-cadre préparé à froid par type de risque et simplement ajusté aux chiffres réels le jour J.",
  },
  {
    type: 'checklist',
    title: 'Les 6 questions auxquelles répond un bon CONOPS',
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
    title: 'Prépositionnement et stock tampon',
    body: [
      "Un délai d'approvisionnement international classique — achat, transport, dédouanement — se compte en semaines. Une réponse d'urgence à déclenchement 72h ne peut pas attendre : la solution est le prépositionnement, une partie du stock physiquement positionnée au plus près des zones à risque avant la crise.",
      "Le stock tampon est le volant de sécurité maintenu à ce point, dimensionné pour couvrir la période entre déclenchement et premier réapprovisionnement normal. Un seuil de réapprovisionnement (reorder point) déclenche automatiquement une commande de reconstitution dès que le stock tampon est entamé — on ne le remplit pas « quand on aura le temps ».",
    ],
    highlight: "Piège classique de terrain : constituer un stock tampon une fois, puis l'oublier pendant deux ans jusqu'à ce qu'une crise révèle que la moitié du matériel est périmé, volé ou introuvable.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'MIRA', definition: "Évaluation multi-sectorielle rapide interagences, pilotée par OCHA/clusters dans les 24-72h suivant un déclenchement." },
      { term: 'Grille HEAT', definition: "Scoring de capacité logistique (Hasard, Exposition, Accès, Transport) complémentaire au MIRA, réalisé par l'équipe logistique elle-même." },
      { term: 'CONOPS', definition: "Concept of Operations : plan de contingence logistique qui traduit une évaluation en décisions et en chronologie d'action." },
      { term: 'Déclencheur (trigger)', definition: "Seuil ou événement prédéfini qui active formellement une réponse d'urgence et le CONOPS correspondant." },
      { term: 'Prépositionnement', definition: "Stockage physique anticipé de biens au plus près des zones à risque, avant la survenue de la crise." },
      { term: 'Stock tampon (buffer stock)', definition: "Volant de sécurité permanent, dimensionné pour couvrir le délai entre déclenchement et premier réapprovisionnement normal." },
    ],
  },
  {
    type: 'process',
    title: "Vos premières 72 heures d'évaluation logistique d'urgence",
    steps: [
      { title: "Confirmer le déclencheur et vérifier l'état du MIRA", body: "H0 à H6 : récupérez toute version préliminaire du MIRA, même incomplète, comme cadrage général." },
      { title: 'Construire et déployer le formulaire de terrain', body: "H6 à H24 : formulaire Kobo Toolbox ou ODK reprenant les 4 axes HEAT, avec commentaire obligatoire dès un score ≥ 3, et groupe WhatsApp dédié aux alertes bloquantes." },
      { title: 'Consolider et scorer dans le tableur dédié', body: "H24 à H48 : grille-evaluation-besoins-mira.xlsx calcule un score de sévérité pondéré et un décompte des besoins « bloquants » par zone." },
      { title: 'Rédiger le CONOPS à partir des résultats consolidés', body: "H48 à H60 : objectifs mesurables (« ouvrir un accès camion vers la zone X d'ici H+60 »), ressources mobilisables, chaîne de décision, chronologie 0-72h." },
      { title: 'Valider, diffuser et activer le prépositionnement si nécessaire', body: "H60 à H72 : un CONOPS non validé n'engage personne ; un déblocage de stock se déclenche selon la chaîne de décision inscrite, jamais sur un simple message." },
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — Crue de l'Artibonite, Gonaïves, Haïti",
    scenario: "14 heures après une tempête tropicale et l'inondation de plusieurs quartiers d'une zone à antécédents de choléra, votre coordinateur vous transmet un point de situation incomplet : MIRA \"en préparation\" sans date, deux quartiers (Raboteau et Bigot) potentiellement les plus touchés sans chiffre fiable, la RN1 \"coupée par endroits\" sans certitude sur la praticabilité en camion, et un stock prépositionné à Saint-Marc dont l'état exact n'est pas confirmé. La direction attend un plan d'action complet sous 72h.",
    steps: [
      "Attribuer un score HEAT plausible pour Raboteau et Bigot à partir des éléments disponibles, en marquant chaque donnée non confirmée comme « à vérifier ».",
      "Ajouter un troisième secteur plausible, par exemple l'accès à l'entrepôt de Saint-Marc lui-même.",
      "Fixer un objectif logistique mesurable pour les premières 60 heures et formuler l'état du stock de Saint-Marc tant qu'il n'est pas confirmé.",
      "Construire une chronologie 0-72h cohérente avec les scores obtenus, incluant la chaîne de décision pour un déblocage de stock.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Lancer l'évaluation terrain sans grille commune — des évaluateurs avec des critères différents en tête produisent des scores impossibles à comparer entre zones.",
      "Confondre un stock prépositionné « annoncé » et un stock « confirmé » — tant que sa quantité et son état ne sont pas vérifiés, il reste marqué « à confirmer », jamais présenté comme acquis.",
      "Écrire un CONOPS trop général pour être exécutable — un objectif comme « améliorer l'accès » ne donne aucune instruction à personne ; il doit être mesurable et daté.",
      "Sous-estimer le risque épidémique dans le score « Exposition » — dans un contexte à antécédent de choléra, une inondation est aussi un facteur aggravant sanitaire, même sans cas encore confirmé.",
      "Attendre la publication du MIRA officiel avant d'agir — la grille HEAT existe précisément pour que la logistique ne reste pas bloquée en attendant un document qui arrivera après la fenêtre des 72 heures.",
    ],
  },
  {
    type: 'exercise',
    title: 'Évaluation chiffrée et plan de contingence',
    instructions: "En vous basant sur le cas de Gonaïves, complétez le template grille-evaluation-besoins-mira.xlsx avec un score HEAT plausible pour Raboteau, Bigot et un troisième secteur de votre choix, en marquant les données non confirmées. Rédigez ensuite le CONOPS avec le template plan-contingence-conops-template.docx : objectif mesurable à 60h, état du stock de Saint-Marc, chaîne de décision pour son déblocage, et chronologie 0-72h cohérente avec vos scores.",
    deliverable: 'Les deux fichiers complétés, le CONOPS tenant sur une à deux pages maximum.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer la différence entre un MIRA interagences et une évaluation de capacité logistique type HEAT.",
      "Je sais calculer et interpréter un score de sévérité HEAT à partir de ses quatre axes.",
      "Je sais rédiger un CONOPS avec des objectifs mesurables, une chaîne de décision claire et une chronologie 0-72h.",
      "Je comprends pourquoi un stock tampon doit être audité régulièrement et non supposé disponible sur la base d'un inventaire ancien.",
      "J'ai complété une grille d'évaluation des besoins et un plan de contingence exploitables par une équipe qui ne les a pas écrits.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 03 — Gestion de Flotte & Transport en Zones Complexes.',
  },
]
