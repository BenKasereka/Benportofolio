// Module 05 — Simulation d'Entretiens — Méthode STAR Maîtrisée
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Simulation d'Entretiens — Méthode STAR Maîtrisée",
    hook: "Un jury de recrutement ne vous demande jamais votre avis : il veut un fait vécu, daté et chiffré. Ce module vous donne la méthode STAR pour raconter vos expériences de façon à convaincre n'importe quel panel — et une banque d'histoires prêtes avant votre prochain entretien.",
  },
  {
    type: 'objectives',
    items: [
      "Structurer n'importe quelle réponse d'entretien comportemental selon la méthode STAR (Situation, Tâche, Action, Résultat), sans jamais en oublier une composante sous le stress de l'entretien.",
      'Construire une banque de 5 à 8 histoires STAR couvrant les compétences les plus recherchées dans votre secteur cible (leadership, gestion de conflit, résolution de problème sous pression, travail d\'équipe multiculturel).',
      "Distinguer une question comportementale (compétence-based, c'est-à-dire fondée sur un exemple vécu) d'une question théorique ou d'opinion, et reconnaître en quelques secondes laquelle vous est posée.",
      "Auto-évaluer une simulation d'entretien enregistrée et identifier précisément vos tics de langage, vos réponses trop longues ou trop vagues, et vos résultats non chiffrés.",
      "Répondre à une question piège ou déstabilisante avec une stratégie préparée à l'avance, au lieu d'improviser dans l'instant.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que le jury cherche réellement',
    body: [
      "Un candidat compétent perd des points non pas parce qu'il manque d'expérience, mais parce qu'il répond comme si on lui demandait une opinion générale, alors qu'on lui demande un fait vécu. Les organisations internationales utilisent très majoritairement l'entretien comportemental, aussi appelé compétence-based interview.",
      "Le principe : le comportement passé est le meilleur prédicteur du comportement futur. Chaque question attend un exemple concret, daté, vécu par vous — jamais une opinion générale ni une réponse au conditionnel (\"je commencerais par organiser une réunion\").",
    ],
    highlight: "Un jury entraîné entend la différence en une phrase : une réponse au conditionnel sur une question comportementale est notée en dessous d'une réponse construite sur du vécu, même si l'idée derrière est bonne.",
  },
  {
    type: 'stat-callout',
    stat: '60 à 70 %',
    caption: "La part du temps de parole que doit occuper la partie Action de votre réponse STAR.",
    context: "C'est là que le jury évalue votre raisonnement, vos choix et votre capacité à agir sous contrainte.",
  },
  {
    type: 'process',
    title: 'La structure STAR, lettre par lettre',
    steps: [
      { title: 'Situation', body: 'Le contexte précis — quand, où, dans quel type d\'organisation ou de projet. Une à deux phrases maximum : ne passez pas une minute entière à planter le décor.' },
      { title: 'Tâche', body: "Votre rôle exact et l'objectif ou la responsabilité spécifique qui était la vôtre — pas celle de votre équipe ou de votre organisation en général." },
      { title: 'Action', body: 'Ce que VOUS avez fait, personnellement, étape par étape — le cœur de la réponse, environ 60 à 70 % du temps de parole.' },
      { title: 'Résultat', body: "L'issue mesurable de votre action — un chiffre, un pourcentage, un délai, une conséquence observable, complétée si pertinent par un apprentissage." },
    ],
  },
  {
    type: 'concept',
    title: "Panel d'entretien : ce qui change par rapport à un entretien classique",
    body: [
      "Un entretien comportemental se déroule presque toujours en panel : plusieurs évaluateurs (souvent 2 à 4) posent des questions issues d'un référentiel de compétences défini à l'avance, chacun notant vos réponses sur une grille partagée.",
      "Vous ne pouvez pas vous préparer question par question, car vous ne connaîtrez jamais la formulation exacte à l'avance.",
    ],
    highlight: 'Vous devez vous préparer compétence par compétence, pas question par question — avoir, pour chaque compétence clé de votre secteur, au moins une histoire STAR prête.',
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'STAR', definition: 'Situation, Tâche, Action, Résultat — la structure à appliquer à toute réponse d\'entretien comportemental.' },
      { term: 'Entretien comportemental / compétence-based interview', definition: 'Méthode d\'entretien fondée sur le principe que le comportement passé prédit le comportement futur, où chaque question demande un exemple vécu rattaché à une compétence précise.' },
      { term: "Panel d'entretien", definition: 'Plusieurs évaluateurs interrogeant conjointement un candidat, chacun notant ses réponses sur une grille de compétences partagée.' },
      { term: 'Question piège', definition: 'Question conçue pour tester la réaction sous pression, la cohérence ou l\'honnêteté du candidat plus que la compétence technique elle-même.' },
      { term: 'Résultat quantifié', definition: 'Élément chiffré ou observable clôturant une histoire STAR, sans lequel la réponse reste une anecdote non vérifiable.' },
    ],
  },
  {
    type: 'process',
    title: 'Une semaine pour préparer votre entretien',
    steps: [
      { title: 'Identifier les 5 à 8 compétences clés attendues (Jour 1)', body: "Reprenez l'offre d'emploi et listez les compétences qui reviennent le plus explicitement — leadership, gestion de conflit, résolution de problème, travail d'équipe multiculturel..." },
      { title: 'Associer une expérience réelle à chaque compétence (Jour 1-2)', body: "Dans banque-histoires-star-preparation.xlsx, notez pour chaque compétence, en une phrase brute, l'expérience la plus pertinente." },
      { title: 'Rédiger chaque histoire en respectant strictement S-T-A-R (Jour 2-4)', body: 'Remplissez les quatre colonnes séparément et vérifiez que la colonne Résultat contient un chiffre ou un élément clairement observable.' },
      { title: 'Simuler à voix haute, chronométré, idéalement enregistré (Jour 4-5)', body: 'Répondez à des questions posées sans connaître à l\'avance la compétence visée ; une réponse STAR complète dépasse rarement 2 minutes.' },
      { title: "Remplir la grille d'auto-évaluation après chaque simulation (Jour 4-5)", body: 'Notez-vous honnêtement sur la clarté de la structure, la confiance, les tics relevés, le respect du temps de parole.' },
      { title: 'Répéter en priorisant les faiblesses et préparer les questions pièges (Jour 5-7)', body: 'Concentrez vos répétitions sur les compétences les plus faibles, et préparez une réponse honnête pour 3 à 5 questions pièges probables.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Transformer une réponse vague en histoire STAR convaincante"',
    scenario: "À la question \"décrivez une situation où vous avez dû gérer un désaccord avec un collègue\", un candidat répond : \"j'ai déjà géré une situation difficile avec un collègue, on n'était pas d'accord, il y a eu des tensions, mais on en a discuté et ça s'est bien passé.\"",
    steps: [
      "Situation reconstruite : lors d'un projet de distribution alimentaire d'urgence, désaccord avec le collègue logistique sur la priorisation des zones, avec un délai de 48h à respecter.",
      "Tâche reconstruite : en tant que coordinateur, trancher rapidement sans écarter unilatéralement l'expertise logistique du collègue.",
      "Action reconstruite : proposer une réunion de 30 minutes le jour même, identifier que les deux approches partageaient 80 % des zones prioritaires, proposer un compromis basé sur les données de vulnérabilité les plus récentes.",
      "Résultat reconstruit : le convoi est parti dans les délais, la relation de travail s'est renforcée, et une grille de critères de priorisation a été formalisée et réutilisée sur 3 opérations ultérieures.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents à éviter',
    items: [
      "Mélanger Situation, Tâche, Action et Résultat sans structure claire — le jury perd le fil avant d'arriver à ce qui compte réellement.",
      'Ne jamais quantifier ou préciser le Résultat final — une compétence non démontrée est notée comme une compétence non prouvée.',
      "Se préparer uniquement mentalement, sans jamais s'entraîner à voix haute ou en simulation chronométrée.",
      "Raconter le mérite de l'équipe au lieu de sa propre action individuelle — le jury demande explicitement \"qu'avez-vous fait, vous\".",
      "Recaser une histoire préparée sur une question qui teste une autre compétence, ce qu'un jury entraîné repère immédiatement.",
    ],
  },
  {
    type: 'exercise',
    title: 'Transformation avant/après et simulation enregistrée',
    instructions: "Choisissez une compétence de votre banque d'histoires proche du style \"avant\" (anecdote non structurée, résultat vague) et réécrivez-la intégralement en S-T-A-R avec un Résultat chiffré ou observable dans banque-histoires-star-preparation.xlsx. Faites-vous poser cette question par un partenaire ou seul face caméra, répondez en 2 minutes maximum, et enregistrez la session. Remplissez immédiatement après grille-auto-evaluation-simulation-entretien.docx.",
    deliverable: "La ligne complétée dans la banque d'histoires et la grille d'auto-évaluation remplie, tenant sur 1 à 2 pages.",
  },
  {
    type: 'recap',
    items: [
      'Je sais expliquer pourquoi les entretiens comportementaux dominent le recrutement international.',
      'Je sais nommer les quatre composantes de la méthode STAR et ce que chacune doit contenir.',
      "J'ai identifié les 5 à 8 compétences clés attendues dans mon secteur cible.",
      "J'ai rédigé au moins 5 histoires STAR complètes, chacune avec un Résultat chiffré ou observable.",
      "Je me suis enregistré(e) au moins une fois en simulation chronométrée et je me suis réécouté(e).",
      "J'ai préparé une réponse honnête pour au moins 3 questions pièges probables pour ce poste.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 06 — Négociation de Contrat & Conditions d'Expatriation.",
  },
]
