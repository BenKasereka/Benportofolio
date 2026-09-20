// Module 07 — Prompting Engineering avancé — L'art de commander l'IA
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Prompting Engineering avancé — L'art de commander l'IA",
    hook: "Pourquoi la même demande produit deux résultats différents d'un jour à l'autre — et comment écrire un prompt qui ne devine plus, mais raisonne et se reproduit.",
  },
  {
    type: 'objectives',
    items: [
      'Appliquer la technique du chain-of-thought (CoT — faire dérouler explicitement à l\'IA les étapes de son raisonnement avant sa conclusion) pour fiabiliser le raisonnement d\'une IA sur une tâche d\'analyse complexe.',
      'Reconnaître les situations où le tree-of-thought (ToT — explorer plusieurs pistes de raisonnement en parallèle avant de choisir la meilleure) est justifié — et celles, majoritaires, où il ne fait qu\'ajouter du coût et de la latence.',
      'Structurer n\'importe quel prompt professionnel récurrent avec la méthode ICIO (Instruction / Contexte / Input / Output).',
      'Diagnostiquer pourquoi un prompt produit des résultats différents d\'une exécution à l\'autre, et le réécrire pour le rendre reproductible.',
      'Construire et faire vivre une bibliothèque de prompts d\'organisation, avec versioning et tests de non-régression.',
    ],
  },
  {
    type: 'concept',
    title: 'Le problème que ce module règle',
    body: [
      "Demander la même analyse deux fois, à un jour d'intervalle, et obtenir deux structures différentes, deux niveaux de profondeur, parfois deux conclusions contradictoires : ce n'est pas un bug du modèle. C'est un symptôme de prompt mal conçu — un prompt qui laisse le modèle deviner ce que vous attendez au lieu de le contraindre à un raisonnement explicite.",
      "Un modèle génère sa réponse token (fragment de mot, vu au Module 01) par token, dans l'ordre. Face à une question demandant un raisonnement en plusieurs étapes, s'il doit produire directement la conclusion, il improvise un raccourci en une seule passe — sans étape intermédiaire visible. Ce raccourci est instable : il change légèrement à chaque génération, ce qui explique l'inconsistance observée.",
    ],
    highlight: "Deux outils complémentaires règlent ce problème : le chain-of-thought pour le raisonnement, la méthode ICIO pour l'enrobage du prompt.",
  },
  {
    type: 'concept',
    title: 'Le chain-of-thought : deux effets mesurables',
    body: [
      "1. La qualité du résultat final augmente, parce que chaque étape intermédiaire sert de base solide à la suivante — le modèle ne peut plus sauter directement à une conclusion non vérifiée.",
      "2. Vous pouvez auditer le raisonnement : si la conclusion est fausse, vous voyez à quelle étape ça a dérapé, au lieu de devoir deviner. C'est ce qui transforme l'IA d'une boîte noire en outil de travail que vous pouvez corriger.",
    ],
    highlight: "Ce que le CoT n'est pas : ajouter \"think step by step\" à la fin d'un prompt bancal. C'est concevoir la séquence de raisonnement réelle de la tâche, et l'écrire explicitement.",
  },
  {
    type: 'concept',
    title: 'Tree-of-thought — explorer plusieurs pistes avant de trancher',
    body: "Extension du CoT pour les cas où il n'y a pas UNE séquence évidente, mais plusieurs pistes plausibles. Vous demandez au modèle de générer 2 ou 3 approches distinctes, d'évaluer chacune selon des critères précis, puis de recommander la meilleure en justifiant l'élimination des autres. Exemple : proposer 3 stratégies de réduction de coûts logistiques, chacune avec 2 risques et 2 bénéfices, puis recommander la meilleure.",
    highlight: "Le ToT coûte plus de tokens, plus de temps, un prompt plus long. Pour un chemin de raisonnement déjà connu et unique, il n'apporte rien — réservez-le aux décisions à enjeu réel où plusieurs options méritent objectivement comparaison.",
  },
  {
    type: 'concept',
    title: 'La méthode ICIO — rendre un prompt réutilisable',
    body: "Le CoT règle le raisonnement. ICIO règle un problème différent : un prompt qui marche \"à peu près\" une fois, mais que personne ne sait comment réutiliser correctement pour un autre cas.",
  },
  {
    type: 'comparison-table',
    title: 'Les quatre blocs de la méthode ICIO',
    columns: ['Élément', 'Ce qu\'il contient', 'Erreur fréquente si absent'],
    rows: [
      ['I — Instruction', 'L\'action précise demandée, au mode impératif — une seule instruction principale.', 'Le modèle devine ce qu\'on veut parmi plusieurs demandes vagues empilées.'],
      ['C — Contexte', 'Rôle de l\'utilisateur, secteur, contraintes, ton attendu, destinataire final.', 'Résultat techniquement correct mais inadapté à l\'audience réelle.'],
      ['I — Input', 'Les données concrètes à traiter, clairement délimitées (balises ou guillemets).', 'Le modèle confond instructions et données si tout est mélangé.'],
      ['O — Output', 'Format de sortie attendu : structure, longueur, sections, ce qu\'il ne faut PAS inclure.', 'Le modèle choisit un format différent à chaque exécution.'],
    ],
  },
  {
    type: 'concept',
    title: 'Un prompt ICIO fonctionne pour tous les cas similaires',
    body: "Un prompt ICIO n'est pas plus long qu'un prompt mal structuré — il est simplement organisé dans un ordre stable et complet. Une fois qu'il fonctionne pour un cas, il fonctionne pour tous les cas similaires, parce que seul l'Input change d'une exécution à l'autre — l'Instruction, le Contexte et l'Output restent fixes. C'est cette stabilité qui rend un prompt réutilisable en bibliothèque.",
  },
  {
    type: 'process',
    title: 'Transformer un prompt instable en prompt fiable',
    steps: [
      { title: 'Diagnostiquer pourquoi le prompt est instable', body: "Exécuter 3 fois sur le même input : est-ce la structure, le niveau de détail, ou la conclusion qui change ? Structure/détail = problème ICIO (Output). Conclusion = problème CoT (raisonnement)." },
      { title: 'Décomposer la tâche en étapes de raisonnement', body: "Écrire comment VOUS raisonneriez sans IA, les étapes réelles de votre métier — pas génériques." },
      { title: 'Structurer le prompt avec ICIO', body: "Instruction (avec mention du raisonnement étape par étape) → Contexte → Étapes de raisonnement numérotées → Input délimité → Output précis." },
      { title: 'Tester sur au moins 3 cas différents', body: "Un prompt qui fonctionne sur un seul cas a eu de la chance. Vérifier structure, détail et qualité sur un cas plus complexe." },
      { title: 'Documenter la transformation', body: "Prompt original, étapes de raisonnement, prompt CoT+ICIO réécrit, résultats des tests — preuve de validation réelle." },
      { title: 'Enregistrer dans la bibliothèque d\'organisation', body: "Catégorie/tag, nom, quatre blocs ICIO, nombre de cas testés, version et date, statut (Validé / En test / À réviser)." },
    ],
  },
  {
    type: 'checklist',
    title: 'Faire vivre la bibliothèque de prompts',
    items: [
      'Catégoriser par usage (analyse financière, rédaction, tri) et non par outil IA utilisé.',
      'Incrémenter systématiquement la version (v1 → v2) à chaque modification, avec la date.',
      'Ré-exécuter le prompt sur les cas ayant validé la version précédente avant de publier une mise à jour — un test de régression.',
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Chain-of-thought (CoT)', definition: 'Technique consistant à faire dérouler explicitement au modèle les étapes de son raisonnement avant sa conclusion finale.' },
      { term: 'Tree-of-thought (ToT)', definition: 'Extension du CoT où plusieurs pistes de raisonnement sont explorées en parallèle puis comparées avant de choisir la meilleure.' },
      { term: 'Méthode ICIO', definition: 'Cadre de structuration d\'un prompt en quatre blocs — Instruction, Contexte, Input, Output.' },
      { term: 'Prompt réutilisable', definition: 'Prompt dont seul l\'Input change d\'un usage à l\'autre, l\'Instruction/Contexte/Output restant stables.' },
      { term: 'Test de régression', definition: 'Ré-exécuter un prompt révisé sur les mêmes cas qui l\'avaient validé, pour vérifier qu\'une modification n\'a rien cassé.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Étude de cas — "Le prompt qui ne dit jamais la même chose deux fois"',
    scenario: "Depuis 4 mois, un même prompt vague (\"Analyse ce budget et dis-moi ce qui ne va pas\") est réutilisé chaque mois avec un tableau différent. Certains mois, la réponse est une liste de 3 lignes ; d'autres, un texte de 2 pages. Le supérieur ne sait plus à quoi s'attendre en ouvrant l'analyse, ce qui annule le gain de temps attendu de l'IA.",
    steps: [
      "Diagnostiquer si le problème relève d'un défaut d'Output (ICIO), de raisonnement guidé (CoT), ou des deux.",
      "Reconstruire en 4 à 6 étapes numérotées le raisonnement qu'un analyste budgétaire expérimenté suivrait réellement.",
      "Réécrire le prompt entier avec ses quatre blocs ICIO, format de sortie précis et non négociable.",
      "Documenter et intégrer le prompt validé à la bibliothèque, avec version et statut.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      'Ne jamais documenter ni réutiliser un prompt qui fonctionne — chaque collègue repart de zéro pour réinventer un prompt déjà résolu ailleurs.',
      'Confondre complexité et qualité du prompt — un prompt de 40 lignes aux instructions contradictoires produit un résultat plus instable qu\'un prompt court et clair.',
      'Valider un prompt sur un seul cas au lieu de plusieurs cas réels et différents avant de le marquer "Validé".',
      'Oublier de spécifier l\'Output et laisser l\'IA choisir le format — la cause la plus fréquente d\'inconsistance visuelle.',
      'Modifier un prompt en production sans repasser les cas déjà validés — la meilleure façon de casser silencieusement un usage qui marchait.',
    ],
  },
  {
    type: 'exercise',
    title: 'Reconstruire un prompt budgétaire instable',
    instructions: "Identifiez en une phrase si le problème du prompt de l'étude de cas relève d'un défaut d'Output, de raisonnement guidé, ou des deux, avec un exemple concret. Écrivez en 4 à 6 étapes numérotées le raisonnement qu'un analyste budgétaire suivrait. Réécrivez le prompt entier avec ses quatre blocs ICIO, format de sortie non négociable inclus. Documentez le tout avec un test simulé sur au moins 2 jeux de chiffres fictifs différents.",
    deliverable: 'Le guide de construction complété et une ligne ajoutée à la bibliothèque de prompts, avec catégorie, version initiale (v1) et statut.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer en une phrase pourquoi le chain-of-thought réduit les erreurs de raisonnement d'une IA.",
      'Je sais identifier une situation où le tree-of-thought apporte une vraie valeur, et la distinguer d\'un cas où un simple CoT suffit.',
      'Je peux structurer n\'importe quel prompt professionnel récurrent avec les 4 blocs de la méthode ICIO.',
      'Je sais diagnostiquer si l\'inconsistance d\'un prompt vient d\'un défaut d\'Output, de raisonnement guidé, ou des deux.',
      'Je sais pourquoi un prompt "Validé" doit repasser ses tests de régression avant toute nouvelle version publiée.',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 08 — Automatisation & Agents IA — Travailler pendant que l\'IA travaille.',
  },
]
