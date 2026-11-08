// Module 04 — Préparation aux Tests Techniques & Études de Cas
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Préparation aux Tests Techniques & Études de Cas',
    hook: "Un test technique de recrutement ne cherche presque jamais LA bonne réponse : il évalue votre méthode sous contrainte de temps. Ce module vous donne une structure reproductible pour analyser n'importe quelle étude de cas, et une façon de vous entraîner minuteur en main, comme le jour J.",
  },
  {
    type: 'objectives',
    items: [
      "Identifier ce qu'un jury de recrutement évalue réellement derrière un test technique, au-delà de la \"bonne réponse\".",
      "Vous entraîner à un test technique sectoriel (supply chain, finance, ressources humaines, gestion de projet) dans des conditions de temps réelles, pas \"à tête reposée\".",
      'Structurer une réponse à une étude de cas humanitaire selon une méthode reproductible : contexte → contraintes → options → proposition → défense.',
      "Anticiper et préparer des réponses solides aux questions pièges d'un jury qui challenge vos choix.",
      'Gérer votre temps et votre présentation de résultats sous pression, sans perdre le fil de votre argumentation.',
    ],
  },
  {
    type: 'concept',
    title: 'Ce que les recruteurs évaluent réellement dans un test technique',
    body: [
      "Un test technique de recrutement humanitaire n'est presque jamais un examen scolaire où il existe UNE bonne réponse à retrouver. Des candidats obtiennent un score élevé avec une proposition finale imparfaite, et d'autres sont éliminés avec un chiffre juste : la différence ne se joue pas sur le résultat final, mais sur ce qu'il révèle du raisonnement.",
      "Un jury sait qu'en contexte humanitaire réel, vous n'avez jamais toutes les ressources, tout le temps ni toutes les informations. Un test technique le simule volontairement : la question n'est pas \"avez-vous trouvé la solution idéale\" mais \"avez-vous su choisir, parmi des options imparfaites, celle qui est réalisable avec ce qui est disponible\".",
    ],
    highlight: "Un test technique ne mesure pas votre mémoire, il mesure votre méthode — et une méthode, contrairement à un savoir encyclopédique, s'entraîne et se reproduit à volonté.",
  },
  {
    type: 'concept',
    title: "Les 4 éléments qu'un jury évalue, dans l'ordre d'importance",
    body: [
      "La structure de votre pensée : avez-vous découpé le problème en éléments traitables, ou répondu de façon linéaire en mélangeant contraintes, hypothèses et solution ?",
      "Votre capacité à prioriser sous contrainte : avez-vous su choisir, parmi des options imparfaites, celle qui est réalisable avec ce qui est disponible ?",
      "Votre rigueur technique sectorielle : les bases du métier (lire un budget, connaître les étapes clés d'un processus RH, distinguer un livrable d'une activité) doivent être maîtrisées — leur absence est souvent éliminatoire.",
      "Votre capacité à défendre et faire évoluer votre position : le jury va délibérément challenger votre proposition pour observer si vous reculez immédiatement ou si vous savez argumenter avec des faits tout en restant capable d'ajuster si l'objection est pertinente.",
    ],
  },
  {
    type: 'concept',
    title: "La logique d'une étude de cas humanitaire type",
    body: [
      "Une étude de cas humanitaire donne un scénario volontairement incomplet, avec des contraintes de ressources et de délai, et attend une proposition défendable — pas une solution parfaite qui n'existerait que sur le papier.",
      "L'erreur la plus fréquente, y compris chez des candidats expérimentés, est de sauter directement à la solution la plus \"propre\" techniquement, sans avoir pris le temps de comprendre le contexte réel.",
    ],
    highlight: "Sur le terrain, une solution techniquement parfaite mais irréalisable avec les ressources disponibles n'est pas une bonne réponse — c'est une réponse hors-sujet.",
  },
  {
    type: 'process',
    title: 'La méthode en 5 étapes pour répondre à une étude de cas',
    steps: [
      { title: 'Comprendre le contexte avant de proposer quoi que ce soit', body: 'Qui est concerné, depuis quand, avec quel mandat, dans quel environnement ? Reformulez le contexte en 2-3 phrases avant toute proposition.' },
      { title: 'Identifier explicitement les contraintes', body: 'Budget disponible, délai imposé, personnel qualifié, matériel existant, contraintes de sécurité ou d\'accès — listez-les avant de réfléchir à des options.' },
      { title: 'Comparer plusieurs options réalistes', body: 'Un jury valorise fortement un candidat qui montre avoir envisagé au moins deux ou trois pistes avant de trancher.' },
      { title: 'Choisir et justifier une proposition', body: 'Reliez-la explicitement aux contraintes identifiées à l\'étape 2, pas à des principes généraux abstraits.' },
      { title: 'Anticiper les questions qui vont challenger ce choix', body: 'Le jury demande presque toujours "et si telle contrainte change ?" ou "pourquoi pas l\'option B ?" — y avoir déjà réfléchi gagne du temps et de la crédibilité.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Test technique sectoriel', definition: 'Épreuve écrite ou pratique évaluant vos connaissances et votre raisonnement dans un domaine précis, généralement chronométrée et notée sur grille.' },
      { term: 'Étude de cas', definition: 'Scénario réaliste et volontairement incomplet, à analyser puis à répondre par une proposition structurée et défendable devant un jury ou à l\'écrit.' },
      { term: 'Question piège', definition: 'Question posée délibérément pour tester votre capacité à défendre ou ajuster votre raisonnement sous objection, pas pour vous faire "perdre" au sens scolaire.' },
      { term: 'Temps réel de préparation', definition: "Le temps effectivement imposé par le processus de recrutement (souvent 30 à 90 minutes), qui doit être respecté dès l'entraînement." },
    ],
  },
  {
    type: 'process',
    title: "S'entraîner comme si c'était le jour du test",
    steps: [
      { title: 'Identifier le type de test probable pour le poste visé', body: 'Notez le secteur testé, le format probable (écrit, restitution orale, exercice pratique) et la durée annoncée.' },
      { title: 'Fixer une contrainte de temps réelle avant chaque séance', body: 'Réglez un minuteur sur la durée annoncée (ou 45-60 minutes par défaut pour un écrit, 20-30 minutes de préparation pour une étude de cas orale) et ne le mettez jamais en pause.' },
      { title: 'Traiter le sujet puis consigner la séance immédiatement', body: 'Dans grille-entrainement-tests-techniques-chronometre.xlsx : date, secteur, temps alloué, temps réellement pris, auto-évaluation honnête, points précis à améliorer.' },
      { title: 'Structurer sa réponse avec le gabarit dédié pour une étude de cas', body: 'Ouvrez gabarit-structuration-reponse-etude-de-cas.docx pendant le temps de préparation : contexte, contraintes, options, proposition, réponses aux questions pièges anticipées.' },
      { title: 'Relire sa grille de progression toutes les 5 séances', body: "Si l'écart entre temps alloué et temps réellement pris ne diminue pas, le problème est probablement la gestion du temps, pas la connaissance technique." },
      { title: 'S\'entraîner au moins une fois à voix haute avant une restitution orale', body: 'Présentez votre proposition à un proche, un miroir ou une caméra, en répondant aux questions pièges anticipées sans relire vos notes mot à mot.' },
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — \"Rupture d'approvisionnement, réponse d'urgence, 30 minutes de préparation\"",
    scenario: "Dans un camp de 12 000 personnes déplacées, un audit révèle qu'il ne reste que 4 jours de kits contre la malnutrition aigüe sévère, alors que le protocole exige un stock de sécurité de 15 jours. Le fournisseur habituel livre en 12 jours ; un fournisseur alternatif jamais utilisé peut livrer en 5 jours, mais à un coût 40 % plus élevé et sans référence de qualité vérifiée. Le budget d'urgence est déjà engagé à 70 %.",
    steps: [
      'Les contraintes à poser avant toute solution : 4 jours de stock restant, délai de 12 jours pour le fournisseur habituel, surcoût de 40 % pour l\'alternatif non vérifié, budget engagé à 70 %.',
      "Au moins deux options réalistes à comparer : attendre le fournisseur habituel avec rationnement, basculer sur le fournisseur alternatif, ou une solution mixte.",
      "La proposition retenue doit être reliée explicitement à ces chiffres précis, pas à un principe général comme \"il faut sécuriser l'approvisionnement\".",
      "Questions pièges probables à anticiper : pourquoi ne pas simplement rationner en attendant le fournisseur habituel, et quelle solution de repli si le budget d'urgence est refusé par le siège.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents à éviter',
    items: [
      "Se précipiter sur la première idée venue sans structurer sa réponse avant d'écrire ou de parler.",
      "S'entraîner sans jamais respecter les contraintes de temps réelles, puis paniquer le jour de l'épreuve.",
      'Ne pas défendre ses choix avec assurance quand le jury les challenge — reculer dès la première objection envoie un signal de raisonnement fragile.',
      'Traiter chaque option comme si elle était sans coût ni risque, au lieu de nommer explicitement le risque de son propre choix.',
      "Oublier de relier la proposition finale aux chiffres et contraintes précis du scénario, ce qui donne l'impression d'une réponse apprise par cœur.",
    ],
  },
  {
    type: 'exercise',
    title: 'Entraînement chronométré et structuration de la réponse',
    instructions: "Réglez un minuteur sur 30 minutes exactement et traitez le scénario de rupture d'approvisionnement dans ces conditions réelles. Consignez immédiatement la séance dans grille-entrainement-tests-techniques-chronometre.xlsx. Remplissez ensuite gabarit-structuration-reponse-etude-de-cas.docx (contexte, contraintes, au moins deux options avec avantages/inconvénients, proposition justifiée, réponse aux 3 questions pièges). Présentez enfin votre proposition à voix haute en 3 minutes maximum, en vous appuyant uniquement sur votre gabarit rempli.",
    deliverable: 'Le gabarit complété (1 à 2 pages) et votre ligne d\'entraînement enregistrée dans la grille chronométrée.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer les quatre éléments qu'un jury évalue réellement dans un test technique.",
      'Je connais la méthode en 5 étapes pour structurer une réponse à une étude de cas.',
      "Je me suis entraîné(e) au moins une fois avec un minuteur réglé sur une durée réelle, sans le mettre en pause.",
      "J'ai anticipé au moins deux questions pièges et préparé une réponse factuelle à chacune.",
      "Je sais identifier, dans mon dernier entraînement, un point précis à améliorer pour la prochaine séance.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 05 — Simulation d'Entretiens — Méthode STAR Maîtrisée.",
  },
]
