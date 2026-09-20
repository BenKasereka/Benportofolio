// Module 05 — Perplexity AI — Recherche temps réel & veille stratégique
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Perplexity AI — Recherche temps réel & veille stratégique',
    hook: "Une IA construite autour de la recherche web en temps réel et des citations vérifiables — l'outil de choix dès qu'une information doit être datée, sourcée et défendable.",
  },
  {
    type: 'objectives',
    items: [
      'Mener une recherche approfondie sur Perplexity en formulant des critères de sourcing explicites (type de source, période, origine).',
      'Structurer une requête de veille sectorielle ou réglementaire réutilisable, avec une fréquence et des critères de pertinence définis à l\'avance.',
      'Mettre en place une veille récurrente sur un sujet donné sans repartir de zéro à chaque session.',
      'Utiliser Perplexity pour du fact-checking rigoureux, en vérifiant systématiquement la fiabilité et la date de chaque source citée.',
      'Identifier les situations où Perplexity n\'est PAS le bon outil, et basculer vers Claude ou ChatGPT en connaissance de cause.',
    ],
  },
  {
    type: 'concept',
    title: 'Une recherche déclenchée à chaque question, pas une mémoire figée',
    body: "ChatGPT, Claude, Copilot et Gemini répondent avant tout à partir de ce qu'ils ont appris pendant leur entraînement — un stock de connaissances figé à une date de coupure. Demandez-leur un fait récent sans activer explicitement la recherche web, et vous obtenez soit un refus prudent, soit une réponse assurée qui date en réalité de plusieurs mois. Perplexity fonctionne à l'envers : chaque requête déclenche une recherche web réelle au moment où vous posez la question, puis synthétise une réponse à partir des pages effectivement trouvées.",
    highlight: "Chaque affirmation de la réponse est reliée à un numéro de citation cliquable qui pointe vers la page source exacte — un système RAG (retrieval-augmented generation) poussé à son maximum, où la recherche est le cœur du produit.",
  },
  {
    type: 'concept',
    title: 'Quand utiliser Perplexity, et ses limites',
    body: "Dès qu'une information doit être datée, sourcée et vérifiable — un chiffre de marché, une actualité réglementaire, le prix actuel d'un service, la position récente d'un concurrent — Perplexity est l'outil de choix. Pas parce qu'il est plus intelligent que Claude ou ChatGPT, mais parce qu'il est construit pour ça, avec une traçabilité que les autres outils n'offrent pas nativement.",
    highlight: "Perplexity reste un moteur de réponse à des questions factuelles avec sources, pas un outil de raisonnement complexe, de rédaction longue ou de création — ce terrain reste celui de Claude ou ChatGPT.",
  },
  {
    type: 'concept',
    title: 'La hiérarchie de fiabilité que Perplexity ne fait pas à votre place',
    body: "Perplexity affiche des sources, mais il ne juge pas leur fiabilité relative — il retourne ce que le web récent lui donne, classé par pertinence algorithmique, pas par autorité réelle. Un communiqué officiel, un article de presse spécialisée, un post de blog non signé et un forum peuvent apparaître côte à côte dans la même liste de citations. C'est à vous d'établir la hiérarchie.",
  },
  {
    type: 'comparison-table',
    title: 'Hiérarchie de fiabilité des sources',
    columns: ['Niveau de fiabilité', 'Type de source', 'Exemple'],
    rows: [
      ['Élevé', 'Source primaire officielle', 'Site institutionnel du bailleur (USAID/BHA, ECHO), texte réglementaire publié, rapport officiel'],
      ['Moyen-élevé', 'Presse spécialisée reconnue', "Devex, ReliefWeb, revues sectorielles avec ligne éditoriale identifiable"],
      ['Moyen', 'Presse généraliste', 'Grands médias sans expertise sectorielle particulière sur le sujet précis'],
      ['Faible', 'Blog, forum, réseau social non vérifié', 'Contenu sans auteur identifiable, sans date claire, ou clairement orienté'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Pro Search', definition: "Le mode de recherche approfondie qui décompose une question complexe en plusieurs sous-recherches successives avant de synthétiser une réponse — à privilégier dès qu'il faut croiser plusieurs sources." },
      { term: 'Focus mode', definition: "Un filtre qui restreint la recherche à un type de source (Web général, Académique, Actualités, Réseaux sociaux...) pour orienter la recherche vers le registre de sourcing pertinent." },
      { term: 'Citation', definition: "Le numéro cliquable associé à chaque affirmation de la réponse, qui renvoie à la page web exacte utilisée — la trace de vérifiabilité qui distingue Perplexity d'une génération de texte non sourcée." },
      { term: 'Espace (Collection)', definition: "Un dossier de travail persistant qui regroupe des recherches liées à un même sujet de veille, avec des instructions par défaut réutilisables." },
      { term: 'Fraîcheur de l\'information (recency)', definition: "Le critère de date d'une source, distinct de sa fiabilité — une source très fiable mais ancienne sur un sujet qui évolue vite doit être signalée comme potentiellement obsolète." },
    ],
  },
  {
    type: 'process',
    title: 'Mener une recherche fiable et vérifiable',
    steps: [
      { title: 'Structurez la requête avec des critères de sourcing explicites', body: "Précisez dans le prompt lui-même : le type de source recherché (rapports officiels plutôt que blogs), la période concernée (les 6 derniers mois, pas \"les informations disponibles\"), et le niveau d'exigence de citation (date de publication, signaler ce qui n'est pas confirmé par une source primaire)." },
      { title: "Cliquez sur chaque source citée avant de considérer l'information comme fiable", body: "Pour chaque affirmation qui compte, ouvrez la source et vérifiez trois choses : l'affirmation y figure bien telle quelle, la source a une date identifiable, et cette date est cohérente avec le niveau d'actualité requis." },
    ],
  },
  {
    type: 'process',
    title: 'Mettre en place et formaliser une veille récurrente',
    steps: [
      { title: 'Fixez trois éléments dès la mise en place', body: "La requête type (selon la méthode de sourcing), la fréquence adaptée à la vitesse d'évolution du sujet (hebdomadaire pour une réglementation, mensuelle pour une tendance de marché), et les critères de pertinence qui déterminent si un résultat mérite une action." },
      { title: 'Formalisez une recherche sourcée avec le gabarit de rapport', body: "Quand une recherche doit être partagée, ne renvoyez jamais un lien vers un fil brut : reformulez la question de recherche, la méthodologie, les constats avec citation et niveau de confiance, et une conclusion qui distingue ce qui est confirmé de ce qui reste à vérifier." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Faire confiance à une réponse sans jamais cliquer sur les sources citées — une synthèse cohérente en apparence peut déformer légèrement ce que dit réellement la source.",
      "Utiliser Perplexity pour de la rédaction longue ou du raisonnement complexe — Claude ou ChatGPT sont plus adaptés à ces tâches ; confondre les spécialités fait perdre du temps.",
      "Ne pas dater ses recherches de veille — une information vraie aujourd'hui peut devenir obsolète demain sans qu'aucune date ne l'indique.",
      "Confondre recherche rapide par défaut et Pro Search — une question qui nécessite de croiser plusieurs évolutions réglementaires exige Pro Search, sinon la réponse semble complète sans l'être.",
      "Formuler une requête orientée qui pousse à confirmer une conclusion déjà arrêtée — une veille doit toujours être formulée de façon neutre, ouverte à un résultat qui contredit ce qu'on pensait savoir.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Veille réglementaire sur un bailleur international"',
    scenario: "Votre organisation reçoit des financements d'USAID/BHA sur un programme et d'ECHO sur un autre. La direction demande une veille permanente sur les évolutions de conformité (seuils de reporting, éligibilité des dépenses, exigences de justification) : \"je ne veux pas d'information non vérifiée dans ce suivi — chaque ligne doit pouvoir être défendue devant un auditeur, avec la source et la date.\"",
    steps: [
      "Rédigez deux requêtes de recherche approfondie (une pour USAID/BHA, une pour ECHO), chacune précisant le type de source prioritaire, la période couverte et l'exigence de citation datée.",
      "Complétez la grille de veille avec au moins 3 lignes : requête utilisée, sources trouvées, évaluation de fiabilité, action à prendre.",
      "Précisez pour chaque ligne comment vous vérifieriez concrètement la source avant de la marquer \"fiable\".",
      "Choisissez une évolution identifiée et rédigez-la au format du gabarit de rapport : question de recherche, méthodologie, constats avec citation, niveau de confiance, conclusion.",
    ],
  },
  {
    type: 'exercise',
    title: 'Veille réglementaire sur deux bailleurs et rapport sourcé',
    instructions: "Rédigez, selon la méthode de structuration de requête, les deux requêtes de recherche approfondie que vous soumettriez à Perplexity (une pour USAID/BHA, une pour ECHO) pour identifier les évolutions de conformité des 6 derniers mois, chacune précisant le type de source prioritaire, la période et l'exigence de citation datée. Complétez le template grille-veille-sectorielle-perplexity.xlsx en simulant les résultats plausibles : au moins 3 lignes avec requête, sources trouvées, évaluation de fiabilité et action à prendre, en précisant comment vous vérifieriez chaque source. Choisissez l'une des évolutions identifiées et rédigez-la au format gabarit-rapport-recherche-sourcee.docx.",
    deliverable: "La grille de veille complétée et un rapport de recherche sourcée d'une à deux pages, cohérents entre eux.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer ce qui distingue Perplexity de ChatGPT ou Claude : recherche web en temps réel avec citations, contre génération à partir de données d'entraînement figées.",
      "Je sais formuler une requête de recherche approfondie avec des critères de sourcing explicites (type de source, période, exigence de citation).",
      "Je sais identifier une situation où Perplexity n'est PAS le bon outil, et basculer vers Claude ou ChatGPT.",
      "J'ai mis en place une veille récurrente avec une requête réutilisable, une fréquence et des critères de pertinence définis.",
      "Je vérifie systématiquement, en cliquant sur les sources, la fiabilité et la date d'une information avant de la considérer comme fiable.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 06 — Google Gemini : multimodalité et Google Workspace.',
  },
]
