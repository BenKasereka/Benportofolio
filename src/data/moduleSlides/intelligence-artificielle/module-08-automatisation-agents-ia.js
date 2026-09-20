// Module 08 — Automatisation & Agents IA
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Automatisation & Agents IA — Travailler pendant que l\'IA travaille',
    hook: "Passer d'une conversation que vous pilotez à un exécutant automatisé — et savoir exactement où placer le point de contrôle humain.",
  },
  {
    type: 'objectives',
    items: [
      'Distinguer un agent IA — un système qui utilise des outils et enchaîne lui-même plusieurs étapes, sans que vous pilotiez chaque échange — d\'une simple conversation avec un chatbot, et savoir en 30 secondes si une tâche mérite l\'un ou l\'autre.',
      'Concevoir un agent IA multi-étapes qui utilise des outils externes et conserve un état entre les étapes.',
      'Construire un workflow d\'automatisation complet (déclencheur → traitement IA → action de sortie) sur une plateforme comme Make, Zapier ou N8N.',
      'Automatiser un rapport, un email ou une tâche récurrente de votre organisation sans écrire une ligne de code.',
      'Documenter un agent ou un workflow IA de façon à ce qu\'un collègue puisse le comprendre, le reprendre et le corriger en votre absence.',
    ],
  },
  {
    type: 'concept',
    title: 'Ce qu\'est un agent IA, concrètement',
    body: "La plupart des utilisateurs de ChatGPT ou Claude n'ont jamais utilisé un agent — ils ont une conversation : vous posez une question, le modèle répond, vous reformulez. C'est vous qui pilotez chaque étape, copiez-collez le résultat d'un outil vers un autre, décidez de la suite. Un agent IA fonctionne différemment sur trois points précis, et c'est leur combinaison qui fait la différence.",
  },
  {
    type: 'checklist',
    title: 'Les trois caractéristiques d\'un agent IA',
    items: [
      'Il utilise des outils externes — interroger une API (le canal technique par lequel un logiciel envoie une demande à un autre et récupère sa réponse, sans passer par un chat), lire un fichier, envoyer un email, écrire dans un tableur, chercher sur le web. Le modèle décide quel outil appeler, avec quels paramètres, à quel moment.',
      'Il enchaîne plusieurs étapes de façon autonome — vous donnez un objectif final, pas une suite de micro-instructions ; l\'agent décompose lui-même la tâche.',
      'Il conserve un état entre les étapes — ce qui s\'est passé à l\'étape 2 est disponible et exploitable à l\'étape 4, sans retransmission manuelle.',
    ],
  },
  {
    type: 'concept',
    title: 'Ce qu\'un agent IA n\'est pas',
    body: "Ce n'est pas une intelligence qui \"comprend\" votre métier ou qui prend des décisions à votre place sur des sujets sensibles. C'est un exécutant automatisé de tâches cadrées à l'avance — rapide et infatigable, mais qui suit exactement la logique que vous lui avez donnée, avec ses limites.",
    highlight: "Un agent mal cadré répète une erreur cent fois plus vite qu'un collaborateur humain ne le ferait une seule fois — c'est tout l'enjeu de la conception de ce module.",
  },
  {
    type: 'comparison-table',
    title: 'Chat ponctuel ou agent — trancher en 30 secondes',
    columns: ['Situation', 'Choix recommandé'],
    rows: [
      ['Tâche ponctuelle, contexte différent à chaque fois, forte marge d\'appréciation', 'Un prompt bien construit dans ChatGPT ou Claude — inutile d\'automatiser'],
      ['Tâche répétitive, entrée standardisée, sortie prévisible', 'Un agent ou un workflow d\'automatisation'],
      ['Tâche répétitive mais jugement humain sensible à chaque occurrence (arbitrage RH, crise)', 'Ni l\'un ni l\'autre en autonome — l\'IA prépare, l\'humain décide'],
    ],
  },
  {
    type: 'concept',
    title: 'La logique d\'une plateforme d\'automatisation',
    body: "Make, Zapier ou N8N ne sont pas eux-mêmes une IA : c'est la colle qui relie une IA (ChatGPT, Claude, Gemini...) à vos outils professionnels — email, tableur, CRM, messagerie — sans écrire de code d'intégration. Le principe est toujours en trois blocs : déclencheur (l'événement qui démarre le workflow), traitement IA (instructions précises transmises via API) et action de sortie (ce que le workflow fait du résultat).",
    highlight: "Ce que ces plateformes apportent : la connexion technique sans code aux outils du quotidien, et l'exécution automatique déclenchée par un événement réel — pas par vous qui copiez-collez chaque jour.",
  },
  {
    type: 'comparison-table',
    title: 'Trois plateformes d\'automatisation',
    columns: ['Plateforme', 'Ce qui la distingue', 'Cas d\'usage'],
    rows: [
      ['Make (make.com)', 'Interface visuelle en scénario, la plus flexible pour des branches conditionnelles.', 'Workflows complexes avec plusieurs branches'],
      ['Zapier (zapier.com)', 'La plus simple à prendre en main, "Zaps" linéaires, plus de 6 000 intégrations.', 'Premier workflow simple'],
      ['N8N (n8n.io)', 'Open source, auto-hébergeable — pertinent pour des contraintes de confidentialité.', 'Données sensibles / bénéficiaires (ONG)'],
    ],
  },
  {
    type: 'process',
    title: 'Concevoir un workflow d\'automatisation simple',
    steps: [
      { title: 'Cartographier la tâche manuelle actuelle', body: 'D\'où vient l\'information, ce que vous en faites, à qui vous l\'envoyez, sous quel format — 15 à 20 minutes qui évitent des heures de reconfiguration.' },
      { title: 'Identifier précisément le déclencheur', body: 'Un événement observable et sans ambiguïté (adresse d\'expéditeur, mot-clé, jour et heure fixes) — jamais "quand le rapport est prêt".' },
      { title: 'Rédiger l\'instruction IA une seule fois', body: 'Aussi précise qu\'un prompt RCCF (Rôle, Contexte, Contraintes, Format) — une imprécision ici se répète à l\'infini.' },
      { title: 'Définir l\'action de sortie et son format exact', body: 'Envoi d\'email, ligne dans un tableur, publication — vérifier que le format correspond à ce qu\'attendent les destinataires.' },
      { title: 'Insérer un point de vérification humaine', body: 'Pour tout envoi visible à l\'extérieur de l\'équipe immédiate, au minimum pendant les premières semaines.' },
      { title: 'Tester sur au moins trois cas, dont un cas limite', body: 'Cas normal, cas incomplet ou mal formaté, cas d\'erreur — avant tout déploiement.' },
      { title: 'Documenter le workflow', body: 'Objectif, déclencheur, étapes, sources, points de vérification, responsable, date du dernier test, limites connues.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Agent IA', definition: 'Système qui utilise des outils, enchaîne des étapes de façon autonome et conserve un état entre ces étapes — par opposition à un chat conversationnel simple.' },
      { term: 'Workflow d\'automatisation', definition: 'Séquence structurée déclencheur → traitement → action, exécutée sans intervention manuelle une fois configurée.' },
      { term: 'Point de vérification humaine (human-in-the-loop)', definition: 'Étape d\'un workflow où une validation humaine est requise avant que le processus continue ou produise un effet irréversible.' },
      { term: 'API', definition: 'Canal technique par lequel une plateforme d\'automatisation envoie une demande à un modèle IA et récupère sa réponse, sans passer par une interface de chat.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Étude de cas — "Le rapport hebdomadaire qui prend deux heures chaque lundi"',
    scenario: "Cinq chefs d'équipe terrain envoient chaque vendredi un rapport hebdomadaire par email, format libre. Chaque lundi, le coordinateur passe deux heures à en extraire les points clés et rédiger un résumé pour la direction. La tâche est identique chaque semaine dans sa structure, même si le contenu change.",
    steps: [
      "Le déclencheur ne peut pas être \"un rapport arrive\" au singulier : décider comment le workflow gère cinq emails distincts et à partir de quel moment il lance la synthèse groupée.",
      "L'instruction IA doit être robuste face à des entrées très inégales (un paragraphe ou trois pages) et prévoir le cas d'un rapport manquant.",
      "Le résumé part vers la direction — un lectorat externe à l'équipe immédiate, ce qui justifie un point de vérification humaine avant le premier envoi automatique.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      'Déployer un workflow sans l\'avoir testé sur des cas limites (rapport vide, format inattendu, pièce jointe au lieu de texte).',
      'Automatiser une tâche qui nécessite en réalité un jugement humain sensible — décision RH ou communication de crise.',
      'Ne documenter son workflow nulle part — il devient impossible à maintenir dès que son concepteur change de poste.',
      'Confondre un workflow qui fonctionne avec un workflow qui fonctionne encore — sans date de dernier test, personne ne sait si le résultat est fiable.',
      'Donner à l\'IA un accès plus large que nécessaire à vos outils "pour simplifier la configuration".',
    ],
  },
  {
    type: 'exercise',
    title: 'Concevoir le workflow du rapport hebdomadaire',
    instructions: "Remplissez le canevas de conception pour ce workflow précis : détaillez chaque étape (déclencheur, outil ou IA utilisé, sortie attendue, point de vérification humaine) depuis la réception des cinq rapports jusqu'à l'envoi du résumé structuré, avec une évaluation des risques identifiant les étapes nécessitant une supervision humaine. Rédigez ensuite la documentation complète : que se passe-t-il si un chef d'équipe n'envoie pas son rapport à temps, qui est responsable de la maintenance, à quelle fréquence retester.",
    deliverable: 'Le canevas de conception et la fiche de documentation complétés — une documentation ne dépassant pas 2 pages.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer en une phrase la différence entre un agent IA et une conversation avec un chatbot.",
      'Je sais identifier les trois caractéristiques qui définissent un agent IA (outils, autonomie multi-étapes, mémoire d\'état).',
      'Je sais décider, pour une tâche donnée, si elle mérite un prompt ponctuel, un workflow automatisé, ou ni l\'un ni l\'autre.',
      'Je sais décomposer un besoin métier en déclencheur → traitement IA → action de sortie.',
      'Je sais identifier, dans une automatisation envisagée, les étapes qui nécessitent un point de vérification humaine avant la mise en production.',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 09 — IA pour la Data & l\'Analyse — De la donnée brute à la décision.',
  },
]
