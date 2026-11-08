// Module 05 — Évaluation des Performances & Développement des Compétences
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Évaluation des Performances & Développement des Compétences',
    hook: "Une évaluation annuelle remplie en dix minutes, sur une impression de fin d'année, ne tient devant rien : ni un désaccord de l'employé, ni un audit RH. Et le jour où votre meilleur collaborateur part sans préavis, personne n'est prêt à prendre sa place. Ce module vous donne la méthode pour évaluer des faits, développer des compétences et anticiper les départs.",
  },
  {
    type: 'objectives',
    items: [
      "Construire une grille d'évaluation basée sur des compétences et des résultats observables, pas sur une impression générale de fin d'année.",
      "Conduire un entretien annuel d'évaluation structuré, préparé par les deux parties, qui débouche sur des décisions concrètes.",
      "Élaborer un plan de développement individuel (PDI) réellement actionnable, avec des actions datées et suivies dans le temps.",
      "Identifier les postes clés d'une mission exposés à un risque de vacance et construire un plan de succession avant qu'une urgence ne vous l'impose.",
      "Distinguer un score de performance défendable d'un chiffre inventé au moment de remplir un formulaire.",
    ],
  },
  {
    type: 'concept',
    title: 'Évaluer sur des critères observables, jamais sur une impression générale',
    body: [
      "Le piège le plus répandu n'est pas la malveillance, c'est la paresse méthodologique. Un superviseur débordé résume une année entière en une impression globale : \"il est sérieux\", \"elle a fait de son mieux\". Ces phrases ne sont pas fausses, mais elles sont inexploitables : elles ne permettent ni de justifier une prime ou une promotion auprès de la Finance, ni de contester un désaccord, ni de construire un plan de développement.",
      "Une évaluation professionnelle repose sur des faits, des livrables, des dates, des indicateurs — pas des adjectifs. \"A livré les 4 rapports mensuels de la base dans les délais sur les 12 mois de la période\" est un fait vérifiable. \"Est fiable\" est une opinion.",
    ],
    highlight: "Chaque note attribuée doit être adossée à au moins un exemple concret et daté. Si le superviseur ne peut citer aucun exemple pour justifier un 4/5 en leadership, la note ne se valide pas telle quelle : il faut reprendre l'entretien.",
  },
  {
    type: 'comparison-table',
    title: 'Deux familles de critères, pas une seule',
    columns: ['Famille de critère', 'Question à laquelle elle répond', 'Exemple concret'],
    rows: [
      ['Compétences comportementales', 'Comment la personne travaille-t-elle, indépendamment du contexte de l\'année ?', 'Qualité du travail livré, respect des délais, leadership, communication, respect des procédures et des principes humanitaires'],
      ['Objectifs de résultat', 'Qu\'est-ce que la personne devait accomplir cette année précisément, et l\'a-t-elle fait ?', '"Réduire le taux de rupture de stock de la pharmacie de 20% à moins de 5% d\'ici décembre", fixé lors de l\'entretien précédent'],
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi pondérer les deux familles',
    body: [
      "Évaluer uniquement sur les compétences comportementales produit une évaluation floue, déconnectée des priorités réelles de la mission sur l'année.",
      "Évaluer uniquement sur les objectifs de résultat ignore la manière dont le travail a été fait, et peut valider des comportements problématiques du moment que \"le résultat est là\".",
    ],
    highlight: "Une grille professionnelle pondère les deux. Dans grille-evaluation-performance-annuelle.xlsx, chaque ligne est typée \"Compétence\" ou \"Objectif\" et porte sa propre pondération.",
  },
  {
    type: 'concept',
    title: 'Auto-évaluation et évaluation du superviseur : deux regards, pas un vote',
    body: [
      "L'auto-évaluation remplie avant l'entretien n'est pas une formalité RH, c'est un outil de dialogue. L'écart entre la note que l'employé se donne et celle que le superviseur envisage est souvent l'information la plus utile de tout le processus.",
      "Un employé qui se sous-évalue révèle un déficit de reconnaissance ou de communication managériale. Un employé qui se surévalue largement révèle soit un déficit de feedback en cours d'année (il découvre le désaccord le jour de l'entretien, ce qui est toujours une faute du management), soit un vrai désalignement à traiter frontalement.",
    ],
    highlight: "La note finale n'est jamais une moyenne mécanique : le template pondère la note retenue à 30% auto-évaluation et 70% évaluation du superviseur. L'auto-évaluation compte, mais le jugement managérial reste prépondérant.",
  },
  {
    type: 'concept',
    title: 'Le PDI : jamais déconnecté de l\'évaluation',
    body: [
      "Un plan de développement individuel rédigé sans lien avec les résultats de l'évaluation n'est qu'un vœu pieux : une liste d'intentions généreuses (\"se former au leadership\", \"améliorer sa communication\") que personne ne reprend l'année suivante.",
      "Un PDI professionnel part exclusivement des écarts identifiés pendant l'évaluation. Si une compétence a été notée 2/5 en \"gestion de conflit d'équipe\", le PDI contient une action précise sur ce point exact. Il se construit pendant l'entretien, avec l'employé, jamais de mémoire plusieurs jours après.",
    ],
    highlight: "Chaque action retenue porte une échéance datée et un mode de suivi, jamais une formulation vague comme \"à travailler dans l'année\".",
  },
  {
    type: 'concept',
    title: 'Le plan de succession : anticiper, pas subir',
    body: [
      "Les départs imprévus sur les postes clés arrivent toujours au pire moment. Un Log Officer qui obtient une mutation interne, un Finance Manager qui reçoit une offre externe plus attractive, un HR Manager qui doit rentrer en urgence : sans successeur identifié, l'organisation perd des semaines, parfois des mois, de capacité opérationnelle.",
      "Un plan de succession identifie, en continu, les postes dont la vacance non anticipée aurait un impact opérationnel majeur, et pour chacun au moins un successeur potentiel avec un niveau de préparation évalué honnêtement : \"prêt maintenant\", \"prêt dans 6 à 12 mois\", ou \"à développer sur le long terme\".",
    ],
    highlight: "Ce n'est pas une promesse de promotion faite à qui que ce soit : c'est un outil de gestion du risque RH, à usage interne de la coordination.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'PDI (Plan de Développement Individuel)', definition: "Document formalisant les actions de développement d'un employé pour la période à venir, directement issu des écarts constatés lors de l'évaluation de performance." },
      { term: 'Note retenue', definition: "Score final d'une compétence ou d'un objectif après pondération entre auto-évaluation et évaluation du superviseur — jamais une simple moyenne arithmétique non réfléchie." },
      { term: 'Poste clé', definition: "Poste dont la vacance non anticipée entraînerait un risque opérationnel, financier ou réputationnel significatif pour la mission." },
      { term: 'Niveau de préparation (readiness)', definition: "Estimation du délai nécessaire avant qu'un successeur potentiel identifié puisse occuper un poste clé de façon autonome." },
      { term: 'Hauts potentiels', definition: "Employés dont les évaluations successives et la trajectoire de compétences justifient un investissement de développement prioritaire, au-delà du plan de développement standard." },
    ],
  },
  {
    type: 'concept',
    title: 'Les outils du module',
    body: [
      "grille-evaluation-performance-annuelle.xlsx sépare compétences comportementales et objectifs de résultat, calcule une note pondérée par ligne (30% auto-évaluation, 70% superviseur), une note globale et une classification automatique du niveau de performance. Un second onglet trace l'historique du score global sur plusieurs années, pour voir une tendance plutôt qu'une photo isolée.",
      "plan-developpement-individuel-succession.docx formalise, dans la foulée de l'entretien, le PDI de l'employé (compétences à développer, actions datées, objectifs de la période suivante) et, en seconde partie, le plan de succession si le poste est un poste clé.",
      "Un agenda partagé (Outlook, Google Calendar ou équivalent) : la date de l'entretien annuel doit être fixée et communiquée au moins deux semaines à l'avance.",
    ],
  },
  {
    type: 'process',
    title: 'Préparer, conduire et suivre un entretien annuel',
    steps: [
      { title: 'Envoyer la grille d\'auto-évaluation au moins une semaine avant', body: 'Colonnes "Compétence / Objectif évalué" et "Pondération" pré-remplies à partir des objectifs de l\'année précédente. L\'employé complète seulement "Auto-évaluation", avec au moins un exemple concret par ligne.' },
      { title: 'Préparer sa propre évaluation séparément', body: 'Complétez votre colonne "Évaluation superviseur" sans avoir vu les réponses de l\'employé. Pour chaque ligne sous 3/5, notez au moins un exemple daté et vérifiable.' },
      { title: 'Structurer l\'entretien en trois temps (45 min à 1 h minimum)', body: 'Revue des résultats (20-25 min), construction du PDI (15-20 min), fixation des objectifs de la période suivante (10-15 min). Jamais un bloc de 10 minutes.' },
      { title: 'Faire valider la note globale et le PDI par l\'employé', body: 'Montrez la note pondérée et la classification. Un désaccord persistant est noté explicitement dans la grille, jamais gommé pour finir sur une note positive.' },
      { title: 'Vérifier si le poste est un poste clé', body: 'Si oui, complétez la Partie B du template avec au moins un successeur potentiel et un niveau de préparation honnête — l\'étape que la majorité des HR Managers sautent.' },
      { title: 'Programmer un point de suivi du PDI à 6 mois', body: 'Placez-le dès maintenant dans l\'agenda partagé, pour ne pas découvrir à l\'entretien suivant qu\'aucune action n\'a été engagée.' },
    ],
  },
  {
    type: 'process',
    title: 'Les trois temps de l\'entretien annuel',
    steps: [
      { title: 'Revue des résultats de l\'année écoulée (20-25 min)', body: 'Parcourir la grille compétence par compétence et objectif par objectif, comparer auto-évaluation et évaluation du superviseur, discuter chaque écart significatif avec des exemples concrets.' },
      { title: 'Construction du PDI (15-20 min)', body: 'Pour chaque compétence sous le seuil attendu : une action précise, une modalité (formation interne ou externe, mentorat, coaching, apprentissage sur le poste) et une échéance datée, directement dans les sections 2 et 3 du template.' },
      { title: 'Objectifs de la période suivante (10-15 min)', body: 'Formuler 2 à 3 objectifs SMART (spécifiques, mesurables, atteignables, réalistes, temporellement définis) qui alimenteront la grille de l\'année prochaine.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le poste sans successeur, Port-au-Prince, Haïti"',
    scenario: "Vous êtes HR Manager d'une ONG médicale internationale sur la mission Haïti. Jean-Baptiste, Log Officer de la base de Port-au-Prince depuis trois ans, vient de terminer son entretien annuel : note globale pondérée de 3,94/5, classée \"Dépasse les attentes\", en progression constante (3,2 en 2024, 3,6 en 2025). Il gère seul la logistique de deux bases, coordonne avec le Logistics Cluster et est la mémoire opérationnelle de la mission : fournisseurs locaux, dédouanement au port, historique des incidents sécuritaires des trois dernières années. En clôturant son dossier, vous réalisez qu'aucun plan de succession n'a jamais été formalisé pour son poste.",
    steps: [
      "Jean-Baptiste n'a exprimé aucune intention de départ, et la mission a toujours eu \"d'autres priorités plus urgentes\".",
      "Trois scénarios réalistes rendraient pourtant le poste vacant sans préavis suffisant : une mutation vers une autre mission du réseau, une offre d'une agence onusienne mieux rémunérée, ou une urgence familiale l'obligeant à rentrer rapidement.",
      "Votre mission : constituer le dossier de succession de ce poste clé avant la fin de la semaine, sans attendre un signal de départ, avec les deux templates du module.",
    ],
  },
  {
    type: 'exercise',
    title: 'Grille, PDI et plan de succession de Jean-Baptiste',
    instructions: "1) Complétez grille-evaluation-performance-annuelle.xlsx avec les informations du cas (nom, poste, année, score global 3,94, tendance sur 3 ans) et imaginez, pour au moins 3 lignes de compétences et 2 objectifs, des exemples concrets et datés justifiant une note \"Dépasse les attentes\" pour un Log Officer confirmé. 2) Dans la Partie A de plan-developpement-individuel-succession.docx, identifiez au moins une compétence à développer même chez un employé très performant (par exemple la formation d'une relève, ou la documentation des procédures qu'il est seul à maîtriser), avec une action datée et actionnable. 3) Dans la Partie B du même template, formalisez le poste de Log Officer comme poste clé, identifiez au moins un successeur potentiel plausible avec son niveau de préparation honnête (\"prêt dans 6-12 mois\" plutôt qu'un optimisme de façade) et proposez une action de préparation concrète d'ici la prochaine revue.",
    deliverable: 'Les deux fichiers complétés, avec une justification écrite en une phrase pour chaque note de compétence attribuée dans la grille.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Évaluation annuelle expédiée en 10 minutes, sans grille d'auto-évaluation envoyée en amont ni exemples préparés : ni notes défendables, ni PDI utile.",
      "PDI rédigé en fin d'entretien puis jamais suivi : sans point de suivi programmé à 6 mois, le document reste un vœu pieux.",
      "Aucun plan de succession sur les postes clés : l'absence n'est jamais remarquée tant que rien ne se passe, puis devient une crise en quelques jours.",
      "Confondre \"performant\" et \"irremplaçable\" au point de ne jamais documenter son savoir-faire : plus un poste concentre de savoir-faire critique non documenté, plus il est prioritaire pour la succession.",
      "Attribuer une note de complaisance pour éviter un conflit : la grille cesse de refléter la réalité et prive l'employé du signal honnête dont il a besoin pour progresser.",
    ],
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi une évaluation doit reposer sur des critères observables et non sur une impression générale.",
      "Je sais construire une grille combinant compétences comportementales et objectifs de résultat, avec une pondération assumée.",
      "Je sais structurer un entretien annuel en trois temps (revue, PDI, objectifs suivants) sur une durée d'au moins 45 minutes.",
      "J'ai complété une grille d'évaluation avec le template fourni, y compris des exemples concrets justifiant chaque note.",
      "J'ai rédigé un PDI avec des actions datées et un mode de suivi à 6 mois, pas seulement une liste d'intentions.",
      "Je sais identifier si un poste est un poste clé exposé à un risque de vacance non anticipée.",
      "J'ai complété un plan de succession pour au moins un poste clé, avec un successeur potentiel et un niveau de préparation honnête.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 06 — Droit du Travail Humanitaire.',
  },
]
