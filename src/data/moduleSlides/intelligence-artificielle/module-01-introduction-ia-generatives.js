// Module 01 — Introduction aux IA génératives
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran. Sert aussi de référence de style pour les modules 02 à 15.
export default [
  {
    type: 'cover',
    title: 'Introduction aux IA génératives',
    hook: "Comprendre comment une IA génère du texte pour l'utiliser avec discernement — et savoir, dès ce premier module, ce qu'il ne faut jamais lui confier.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer simplement comment un LLM génère du texte, et pourquoi ce mécanisme explique à la fois sa puissance et ses erreurs.",
      "Distinguer les 5 plateformes de cette formation (ChatGPT, Claude, Copilot, Perplexity, Gemini) et savoir laquelle choisir selon la tâche.",
      "Identifier, avant de coller un texte dans une IA, les catégories de données qui ne doivent jamais y être soumises sans validation.",
      "Appliquer une politique personnelle de confidentialité et d'éthique avant toute utilisation professionnelle de l'IA.",
    ],
  },
  {
    type: 'concept',
    title: 'Comment un LLM génère du texte',
    body: [
      "Un modèle de langage (LLM) ne \"sait\" rien au sens où un humain sait quelque chose. Techniquement, il prédit le token (fragment de mot) le plus probable pour continuer une séquence de texte, un token après l'autre — un calcul de probabilité, pas une recherche dans une base de données.",
      "Quand l'information est rare, récente ou absente des données d'entraînement, le modèle produit quand même la suite la plus plausible statistiquement — et cette suite peut être entièrement inventée. C'est une hallucination : une donnée fausse présentée avec le même ton de confiance qu'une réponse correcte.",
    ],
    highlight: "Le niveau de confiance affiché dans le ton d'une réponse IA n'a aucun lien avec sa fiabilité réelle — toute donnée factuelle précise doit être vérifiée à la source avant usage professionnel.",
  },
  {
    type: 'stat-callout',
    stat: '5 IA',
    caption: 'ChatGPT, Claude, Copilot, Perplexity, Gemini',
    context: "Chacune construite avec des priorités différentes : un professionnel efficace choisit l'outil selon la tâche, pas par habitude.",
  },
  {
    type: 'comparison-table',
    title: 'Panorama comparatif des 5 IA de cette formation',
    columns: ['Plateforme', 'Ce qui la distingue', 'Meilleur usage'],
    rows: [
      ['ChatGPT (OpenAI)', 'GPTs personnalisés, plugins, forte polyvalence', 'Généraliste, automatisation, brainstorming'],
      ['Claude (Anthropic)', 'Fenêtre de contexte large, rigueur sur du texte long', 'Rédaction professionnelle, analyse de documents longs'],
      ['Copilot (Microsoft)', 'Intégré nativement à Office 365', 'Travail quotidien dans Word, Excel, Outlook, Teams'],
      ['Perplexity', 'Recherche web temps réel, sources citées', "Recherche d'information récente, veille sectorielle"],
      ['Gemini (Google)', 'Multimodal natif, intégré à Google Workspace', 'Contenu multimodal, travail dans Docs/Sheets/Gmail'],
    ],
  },
  {
    type: 'concept',
    title: 'Des outils complémentaires, pas concurrents',
    body: "ChatGPT et Claude se recoupent en usage généraliste, mais Claude tient mieux la distance sur un document long. Copilot et Gemini sont d'abord des couches d'IA intégrées à un écosystème bureautique déjà utilisé — avec l'avantage de travailler sur vos fichiers réels sans copier-coller. Perplexity, lui, est le réflexe dès qu'une source vérifiable est nécessaire.",
  },
  {
    type: 'warning',
    title: 'Ce qu\'il ne faut JAMAIS soumettre à une IA grand public',
    items: [
      'Données confidentielles de bailleurs — contrats, montants budgétaires non publiés, rapports financiers internes.',
      'Données personnelles de bénéficiaires ou de collègues — noms, coordonnées, situations individuelles (santé, statut, vulnérabilité).',
      "Informations sécuritaires sensibles — mouvements de personnel, localisation d'équipes terrain, incident en cours.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de coller un document ou une donnée',
    items: [
      'Cette donnée entre-t-elle dans une des 3 catégories interdites ? Si oui, je m\'arrête.',
      "Mon organisation a-t-elle une politique d'usage de l'IA, et cet usage y est-il conforme ?",
      'Ai-je besoin d\'anonymiser (noms, montants, coordonnées) avant de coller ce texte ?',
      "Si j'utilise une information factuelle produite par l'IA, ai-je prévu de la vérifier à la source ?",
    ],
  },
  {
    type: 'process',
    title: 'Choisir la bonne IA en 5 étapes',
    steps: [
      { title: 'Identifier la nature de la tâche', body: 'Avant d\'ouvrir un outil — pas "quelle IA j\'ai l\'habitude d\'utiliser".' },
      { title: 'Utiliser la grille de décision', body: 'grille-comparaison-5-plateformes-ia.xlsx, onglet "Aide au choix".' },
      { title: 'Appliquer la checklist de vérification', body: 'Avant de coller tout document ou donnée sensible.' },
      { title: 'Consigner sa politique personnelle', body: 'Compléter et signer sa charte d\'utilisation responsable.' },
      { title: 'Réévaluer après usage', body: 'Changer d\'outil en cours de route si celui choisi ne convient pas.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'LLM', definition: "Modèle de langage entraîné sur de grands volumes de texte, qui génère du texte en prédisant le token suivant le plus probable." },
      { term: 'Token', definition: 'Unité de texte (mot ou fragment de mot) manipulée par le modèle — la brique de base de la génération.' },
      { term: 'Hallucination', definition: 'Information inventée par une IA, présentée avec le même niveau de confiance qu\'une information exacte.' },
      { term: 'Prompt', definition: "L'instruction donnée à une IA générative — sa formulation influence directement la qualité de la réponse." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le copier-coller de trop"',
    scenario: "Pressé par un rapport bailleur de 40 pages à rendre en fin de journée, vous collez 3 pages — dont des montants budgétaires précis — dans un compte gratuit grand public, pour un résumé rapide. Ce n'est qu'après coup que vous remarquez la mention \"confidentiel — diffusion restreinte\" sur la page de garde.",
    steps: [
      "Ne pas paniquer, mais ne pas minimiser : une donnée confidentielle a quitté le périmètre de l'organisation.",
      'Signaler l\'incident sans délai à son responsable ou référent — un incident signalé se gère, un incident caché s\'aggrave.',
      'Documenter précisément ce qui a été collé (extrait, données, plateforme, heure).',
      'Ne pas tenter de "réparer" en redemandant à l\'IA de supprimer l\'échange — cela n\'annule rien.',
    ],
  },
  {
    type: 'exercise',
    title: 'Grille de comparaison et charte personnelle',
    instructions: "Ouvrez grille-comparaison-5-plateformes-ia.xlsx et testez au moins 4 types de tâches différents dans l'onglet \"Aide au choix\", en notant la plateforme recommandée et sa justification. Complétez ensuite charte-utilisation-responsable-ia-professionnelle.docx avec vos propres réponses. Enfin, en 10 lignes maximum, expliquez ce que vous auriez fait différemment dans le cas \"Le copier-coller de trop\" avant même d'ouvrir une IA.",
    deliverable: 'La grille complétée, la charte signée, et votre analyse de 10 lignes.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi un LLM peut halluciner avec une confiance totale.",
      'Je sais utiliser la grille de comparaison pour choisir la bonne IA selon une tâche donnée.',
      'Je connais les 3 catégories de données à ne jamais soumettre à une IA grand public.',
      'Je sais quoi faire immédiatement si une donnée sensible est collée par erreur.',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 02 — ChatGPT : productivité maximale et automatisation.',
  },
]
