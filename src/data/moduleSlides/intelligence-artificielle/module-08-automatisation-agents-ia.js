// Module 08 — Automatisation & Agents IA — Travailler pendant que l'IA travaille
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (qualification de la tâche, conception sur le canevas,
// préparation technique et API, construction du scénario Make, tests et
// rodage, agent IA avec outils et mémoire dans n8n, documentation) est
// détaillée étape par étape et appliquée au même fil rouge : la synthèse
// hebdomadaire des cinq rapports d'équipes terrain d'Horizon Grands Lacs.
// Organisation et personnes fictives ; chiffres d'exemple réalistes.
export default [
  {
    type: 'cover',
    title: "Automatisation & Agents IA — Travailler pendant que l'IA travaille",
    hook: "À la fin de ce module, la synthèse hebdomadaire qui vous coûte deux heures chaque lundi arrivera seule, à 10 h, en brouillon dans votre boîte : cinq rapports terrain lus, résumés et compilés par l'IA via Make, les rapports manquants signalés, les blocages archivés — et un agent IA capable de vous dire quels problèmes traînent depuis trois semaines et de préparer les relances. Vous n'aurez plus qu'à relire et cliquer sur « Envoyer ».",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Décider en 30 secondes si une tâche relève d'un prompt ponctuel, d'un workflow automatisé ou d'aucun des deux, en produisant une fiche de qualification chiffrée (fréquence, temps passé, rentabilité, niveau de jugement humain).",
      "Cartographier une tâche manuelle et la traduire en blocs déclencheur → traitement IA → action de sortie, en produisant le canevas de conception complété et son évaluation des risques.",
      "Rédiger les instructions IA figées (prompts RCCF) d'un workflow, robustes aux entrées incomplètes, en produisant un prompt d'extraction à sortie JSON et un prompt de synthèse versionnés.",
      "Connecter une plateforme d'automatisation (Make, Zapier ou n8n) à une API d'IA en toute sécurité, en produisant une clé API plafonnée, des connexions au moindre privilège et une estimation du coût mensuel.",
      "Construire, tester sur des cas limites et mettre en production supervisée un workflow complet, en produisant un scénario Make fonctionnel, une grille de tests et un journal de rodage.",
      "Construire un agent IA multi-étapes avec outils et mémoire, en produisant un agent n8n de suivi des blocages qui lit un tableau, garde le fil de la conversation et prépare des relances en brouillon.",
      "Documenter un workflow pour qu'un collègue puisse le reprendre, en produisant la fiche de documentation complétée (2 pages maximum) et un test de reprise réussi.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur les agents IA : vous allez en construire, sur un seul cas suivi du début à la fin. Chaque procédure est découpée en étapes numérotées, avec les menus à ouvrir, les champs à remplir, le prompt exact à coller et le résultat attendu.",
      "À la fin du module, vous aurez en main sept livrables réutilisables tels quels pour vos propres tâches récurrentes :",
    ],
    bullets: [
      "Une fiche de qualification de la tâche (test des 30 secondes + calcul de rentabilité) et la carte de la tâche manuelle actuelle.",
      "Le canevas canevas-conception-workflow-agent-ia.xlsx complété : onglet « Canevas Workflow » (8 étapes) et onglet « Évaluation des risques ».",
      "Deux instructions IA figées et versionnées : un prompt d'extraction par rapport (sortie JSON) et un prompt de compilation de la synthèse.",
      "Un environnement technique propre : boîte partagée dédiée, clé API plafonnée, connexions Make au moindre privilège.",
      "Deux scénarios Make en production : « Contrôle réception 08:00 » et « Synthèse hebdo 10:00 », avec gestion des erreurs.",
      "Une grille de 6 cas de test et un journal de rodage de 4 semaines, avec le critère de passage en production.",
      "Un agent n8n « Suivi des blocages » (outils + mémoire) et la fiche procedure-documentation-automatisation-ia.docx complétée et testée par une collègue.",
    ],
    tip: "Ouvrez dès maintenant les deux gabarits du dossier 04-templates : l'onglet « Canevas Workflow » contient déjà 6 lignes d'exemple sur ce même cas. Vous allez les reprendre, les préciser et les compléter jusqu'à 8 étapes au fil des procédures.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs et la synthèse du lundi',
    body: [
      "Horizon Grands Lacs, l'organisation fictive que vous avez déjà rencontrée, suit cinq équipes terrain : Goma, Sake, Bukavu, Uvira et Kinshasa. Chaque vendredi, chaque chef d'équipe envoie par email son rapport hebdomadaire, en format libre. Chaque lundi, Esther Masika, coordinatrice des opérations à Goma, les lit, en extrait avancées, blocages et besoins, puis rédige une synthèse pour la direction pays de Furaha Bisimwa.",
      "Le lundi 7 septembre 2026, Esther chronomètre l'exercice : 2 h 00, et la synthèse part à 11 h 40 alors que la directrice la veut avant sa réunion de 11 h. Elle décide d'automatiser, avec l'appui d'Olivier Kasongo, référent informatique, et d'Amani Kahindo, chargée administrative et logistique, qui sera sa suppléante sur le workflow.",
    ],
    table: {
      columns: ['Équipe', "Chef d'équipe", 'Rapport type de la semaine 38 (envoyé le vendredi 18/09/2026)'],
      rows: [
        ['Goma', 'Josué Bahati', 'Deux pages structurées, avec chiffres et blocages'],
        ['Sake', 'Neema Kavira', 'Un paragraphe de six lignes, aucun besoin mentionné'],
        ['Bukavu', 'Désiré Mugisho', 'Trois pages, tableaux collés dans le corps de l\'email'],
        ['Uvira', 'Grâce Mapendo', '« Bonsoir, ci-joint le rapport » : tout est dans un fichier Word joint'],
        ['Kinshasa', 'Christian Lukusa', 'Rien reçu vendredi : rapport envoyé le lundi à 9 h 12, après relance'],
      ],
    },
    highlight: "Ces cinq rapports réels d'une même semaine contiennent déjà tous les cas limites que votre workflow devra gérer : entrée longue, entrée très courte, rubrique absente, pièce jointe au lieu de texte, rapport en retard. Un workflow testé seulement sur le rapport de Goma échouerait dès la première semaine.",
  },
  {
    type: 'concept',
    title: "La carte du module : 7 procédures, dans l'ordre où vous les exécuterez",
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. N'ouvrez pas Make avant d'avoir terminé les procédures 1 et 2 : un workflow construit sur une tâche mal définie automatise le désordre.",
    bullets: [
      "Procédure 1 — Qualifier et cartographier la tâche (4 étapes) : test des 30 secondes, chronométrage, échantillon de rapports, découpage en blocs.",
      "Procédure 2 — Concevoir le workflow sur le canevas (7 étapes) : déclencheur, deux prompts figés, sortie, contrôles humains, onglets du canevas.",
      "Procédure 3 — Préparer l'intégration technique et l'API (4 étapes) : plateforme, boîte dédiée, clé API, connexions.",
      "Procédure 4 — Construire les scénarios dans Make (7 étapes) : du déclencheur planifié au brouillon, archivage et gestion des erreurs.",
      "Procédure 5 — Tester et mettre en production supervisée (4 étapes) : 6 cas de test, historique d'exécution, contrôle de fidélité, rodage.",
      "Procédure 6 — Construire un agent IA avec outils et mémoire dans n8n (5 étapes).",
      "Procédure 7 — Documenter, transmettre et maintenir (5 étapes) : la fiche de documentation section par section et le test de reprise.",
    ],
  },

  // ───────────── Théorie essentielle ─────────────
  {
    type: 'comparison-table',
    title: 'Conversation, workflow, agent : ce qui change vraiment',
    columns: ['Critère', 'Conversation (chat)', "Workflow d'automatisation", 'Agent IA'],
    rows: [
      ['Qui déclenche ?', 'Vous, à chaque message', 'Un événement ou une heure, sans vous', 'Un objectif que vous donnez (ou un événement)'],
      ['Qui décide de la suite ?', 'Vous, à chaque étape', 'Le chemin que vous avez dessiné, toujours le même', "Le modèle choisit quel outil appeler, et quand"],
      ['Outils externes', 'Aucun, ou ceux que vous ouvrez', 'Ceux branchés dans le scénario', 'Ceux mis à sa disposition, appelés à sa discrétion'],
      ['Mémoire entre étapes', 'Le fil de la conversation', 'Les données passent d\'un module au suivant', "Mémoire de conversation + données stockées (tableau, base)"],
      ['Fil rouge', 'Esther colle 5 rapports dans ChatGPT', 'Le scénario Make « Synthèse hebdo 10:00 »', "L'agent n8n « Suivi des blocages »"],
    ],
  },
  {
    type: 'concept',
    title: "Les trois caractéristiques d'un agent IA — et pourquoi il faut les trois",
    body: [
      "Un agent IA combine trois capacités. Une seule ne suffit pas : un chat qui lit un fichier n'est pas un agent, un scénario qui enchaîne des étapes figées non plus.",
    ],
    bullets: [
      "Il utilise des outils externes : interroger une API (le canal technique par lequel un logiciel envoie une demande à un autre et récupère sa réponse, sans passer par un chat), lire un fichier, écrire dans un tableur, créer un email. Le modèle décide quel outil appeler, avec quels paramètres, à quel moment.",
      "Il enchaîne plusieurs étapes de façon autonome : vous donnez un objectif final (« dis-moi quels blocages traînent et prépare les relances »), pas une suite de micro-instructions ; l'agent décompose lui-même la tâche.",
      "Il conserve un état entre les étapes : ce qu'il a lu à l'étape 1 (la liste des blocages ouverts) est exploitable à l'étape 3 (rédiger la relance), sans que vous le retransmettiez.",
    ],
    example: {
      title: "Ce qu'un agent n'est pas",
      lines: [
        "Ce n'est pas une intelligence qui « comprend » votre métier ni qui décide à votre place sur des sujets sensibles.",
        "C'est un exécutant automatisé de tâches cadrées à l'avance : rapide et infatigable, mais qui suit exactement la logique que vous lui avez donnée, avec ses limites.",
      ],
    },
    pitfall: "Un agent mal cadré répète une erreur cent fois plus vite qu'un collaborateur humain ne le ferait une seule fois. Si l'agent de suivi pouvait envoyer lui-même les relances, une seule erreur de lecture du tableau partirait chez cinq responsables avant que quiconque la voie.",
  },
  {
    type: 'comparison-table',
    title: 'Chat ponctuel ou agent : trancher en 30 secondes',
    columns: ['Situation', 'Choix recommandé', 'Exemple chez Horizon Grands Lacs'],
    rows: [
      ["Tâche ponctuelle, contexte différent à chaque fois, forte marge d'appréciation", 'Un prompt bien construit dans ChatGPT ou Claude : inutile d\'automatiser', 'Préparer la note de cadrage d\'une nouvelle évaluation'],
      ['Tâche répétitive, entrée standardisée, sortie prévisible', 'Un agent ou un workflow d\'automatisation', 'La synthèse des 5 rapports chaque lundi'],
      ['Tâche répétitive mais jugement humain sensible à chaque occurrence (arbitrage RH, crise)', "Ni l'un ni l'autre en autonome : l'IA prépare, l'humain décide et valide", 'Répondre à un incident de sécurité signalé dans un rapport'],
    ],
  },
  {
    type: 'concept',
    title: 'Le critère décisif : répétition, prévisibilité, nature de la décision',
    body: [
      "La question n'est jamais « l'IA peut-elle le faire techniquement ? » : elle peut presque tout essayer. La question est double : la répétition et la prévisibilité de la tâche justifient-elles l'investissement de conception (30 minutes à plusieurs heures), et la nature de la décision permet-elle de la déléguer sans supervision humaine directe ?",
      "Pour trancher, posez quatre questions et notez la réponse par écrit. Trois « oui » aux trois premières et un « non » à la dernière : automatisez.",
    ],
    bullets: [
      "La tâche revient-elle au moins une fois par semaine (ou quatre fois par mois) ?",
      "L'entrée arrive-t-elle toujours par le même canal, avec un contenu de même nature ?",
      "Pouvez-vous décrire la sortie attendue (rubriques, longueur, destinataires) avant de la voir ?",
      "Chaque occurrence exige-t-elle un jugement sensible (personne, sécurité, argent, réputation) ?",
    ],
    tip: "Une réponse « oui » à la quatrième question n'interdit pas l'IA : elle interdit l'envoi automatique. L'IA prépare un brouillon, un humain décide et signe.",
  },
  {
    type: 'stat-callout',
    stat: '92 heures',
    caption: "C'est ce que coûte chaque année la synthèse manuelle d'Esther : 2 heures × 46 semaines travaillées.",
    context: "Le workflow demande environ 16 heures de conception, de construction et de tests, puis 20 minutes de relecture par semaine. Le gain net est de 1 h 40 par semaine : l'investissement est remboursé en une dizaine de semaines, et la synthèse arrive à 10 h au lieu de 11 h 40.",
  },
  {
    type: 'concept',
    title: "Les trois blocs de tout workflow : déclencheur → traitement IA → action de sortie",
    body: [
      "Une plateforme comme Make, Zapier ou n8n n'est pas une IA : c'est la colle qui relie une IA (ChatGPT, Claude, Gemini…) à vos outils professionnels (boîte email, tableur, messagerie d'équipe, formulaire) sans écrire de code d'intégration. Tout workflow s'y décrit en trois blocs.",
    ],
    bullets: [
      "Déclencheur (trigger) : l'événement qui démarre le workflow — un email reçu, un fichier déposé, une ligne ajoutée dans un tableur, une heure programmée.",
      "Traitement IA : le contenu capté est transmis à un modèle via son API, avec des instructions écrites une fois pour toutes (l'équivalent d'un prompt RCCF figé) — résumer, classer, extraire, rédiger.",
      "Action de sortie : ce que le workflow fait du résultat — créer un brouillon, envoyer un email, écrire une ligne dans un tableur, publier dans un canal, créer une tâche.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Déclencheur : chaque lundi à 10:00, lire les emails du dossier « Rapports semaine » reçus depuis vendredi 00:00.",
        "Traitement IA : extraire de chaque rapport avancées, blocages, besoins ; puis compiler une synthèse d'une page.",
        "Action de sortie : créer un brouillon d'email pour la direction et ajouter une ligne par blocage dans le tableau de suivi.",
      ],
    },
    highlight: "Ce que la plateforme apporte que l'IA seule n'apporte pas : la connexion sans code aux outils du quotidien et l'exécution déclenchée par un événement réel. C'est la différence entre « je demande à l'IA de résumer les rapports chaque lundi » et « la synthèse arrive dans ma boîte chaque lundi sans que j'y pense ».",
  },
  {
    type: 'comparison-table',
    title: 'Make, Zapier, n8n : laquelle choisir',
    columns: ['Plateforme', 'Ce qui la distingue', 'À choisir quand…', 'Limite à connaître'],
    rows: [
      ['Make (make.com)', 'Scénario visuel en bulles reliées ; la plus souple pour les branches conditionnelles, boucles et agrégations', 'Le workflow a plusieurs branches (rapport manquant, pièce jointe) ou traite des lots', 'Offre gratuite limitée en opérations mensuelles ; chaque module exécuté consomme'],
      ['Zapier (zapier.com)', 'Zaps linéaires, la plus simple ; catalogue le plus large (plus de 6 000 applications)', 'Premier workflow simple : un déclencheur, une ou deux actions', 'Les branches et boucles existent mais deviennent vite coûteuses et moins lisibles'],
      ['n8n (n8n.io)', 'Open source, auto-hébergeable ou en cloud ; nœud « AI Agent » avec outils et mémoire', 'Données sensibles qui ne doivent pas transiter par un tiers ; agents IA', "L'auto-hébergement demande un appui informatique (serveur, mises à jour, sauvegardes)"],
    ],
  },
  {
    type: 'concept',
    title: "L'API d'un modèle IA, concrètement : clé, tokens, coût, données",
    body: [
      "Votre plateforme parle au modèle par son API (OpenAI pour ChatGPT, Anthropic pour Claude, Google pour Gemini). Les trois sont intégrées nativement dans Make, Zapier et n8n : aucune programmation, seulement une clé API créée depuis le compte développeur du fournisseur.",
      "L'API se paie à l'usage, en tokens (fragments de mots : environ 1 000 tokens pour 750 mots en anglais, un peu moins de mots en français). Le prix, différent en entrée (texte envoyé) et en sortie (texte produit), est publié par million de tokens sur la page tarifaire du fournisseur.",
    ],
    example: {
      title: 'Estimation du coût mensuel — fil rouge (prix hypothétiques, à remplacer par la grille en vigueur)',
      lines: [
        "Extraction : 5 rapports × (2 500 tokens de rapport + 700 de prompt) ≈ 16 000 tokens en entrée, 5 × 400 = 2 000 en sortie.",
        "Compilation : ≈ 4 000 tokens en entrée, ≈ 1 000 en sortie. Total semaine : ≈ 20 000 en entrée, ≈ 3 000 en sortie.",
        "Avec 3 USD par million en entrée et 15 USD par million en sortie : 0,06 + 0,045 ≈ 0,11 USD par semaine, soit moins de 0,50 USD par mois.",
      ],
    },
    tip: "Le coût de l'API est rarement le problème ; le plafond de dépense, si. Fixez toujours une limite mensuelle sur le compte du fournisseur : une boucle mal configurée qui rappelle le modèle 10 000 fois sera arrêtée net.",
  },
  {
    type: 'concept',
    title: 'Où placer le point de vérification humaine',
    body: "Un point de vérification humaine (human-in-the-loop) est une étape où un humain valide avant que le workflow continue ou produise un effet irréversible. Placez-en un à chacun des quatre endroits ci-dessous, au minimum pendant les premières semaines.",
    bullets: [
      "Avant tout envoi visible hors de l'équipe immédiate (liste de diffusion, direction, partenaire, bailleur) : le workflow crée un brouillon, un humain l'envoie.",
      "Avant toute action irréversible : suppression, paiement, publication, modification d'une donnée de référence.",
      "Quand l'entrée est incomplète : un rapport manquant doit être relancé par une personne, pas ignoré en silence.",
      "Quand le contenu touche une personne ou la sécurité : nom de bénéficiaire, incident, décision RH. L'IA signale, l'humain traite.",
    ],
    example: {
      title: 'Dans le fil rouge : 3 étapes sur 8 sous contrôle humain',
      lines: [
        "Étape 2 — rapports manquants : Esther décide de relancer ou non avant la synthèse.",
        "Étape 5 — brouillon : Esther relit chiffres, noms et blocages (15 à 25 minutes).",
        "Étape 6 — envoi à la direction : c'est Esther qui clique sur « Envoyer » ; aucun module d'envoi automatique n'est actif.",
      ],
    },
    pitfall: "Placer le contrôle humain « à la fin, quand tout est envoyé » en consultant le dossier Éléments envoyés : à ce stade, ce n'est plus un contrôle, c'est un constat.",
  },
  {
    type: 'concept',
    title: 'Règles de sécurité avant de connecter quoi que ce soit',
    body: "Connecter une plateforme à votre messagerie et à une IA, c'est ouvrir une porte. Appliquez ces règles avant la première connexion, et consignez-les dans la fiche de documentation.",
    bullets: [
      "Moindre privilège : connectez une boîte partagée dédiée et un dossier précis, jamais votre boîte personnelle entière ; un fichier Excel précis, jamais tout votre espace SharePoint.",
      "Compte professionnel validé par l'organisation pour la plateforme et pour l'API ; jamais un compte personnel.",
      "Aucune donnée personnelle de bénéficiaire dans les rapports transmis à l'IA : la consigne est donnée aux chefs d'équipe, et le prompt signale toute exception sans la recopier.",
      "Données sensibles qui ne doivent pas quitter l'organisation : choisissez n8n auto-hébergé, ou n'automatisez pas.",
      "La clé API ne circule jamais par email ni par messagerie : elle est saisie une seule fois dans la connexion de la plateforme, et conservée dans le gestionnaire de mots de passe de l'organisation.",
    ],
    example: {
      title: 'Décision pour le fil rouge (consignée le 08/09/2026)',
      lines: [
        "Les rapports hebdomadaires ne contiennent ni noms de bénéficiaires ni données médicales individuelles (consigne rappelée aux 5 chefs d'équipe le 08/09).",
        "Plateforme retenue : Make, avec un compte d'organisation ; API OpenAI sur un projet dédié, plafonné à 10 USD par mois.",
        "Les incidents de sécurité restent hors workflow : signalés par l'IA (« alerte sensible »), traités par Esther.",
      ],
    },
    pitfall: "Donner à la plateforme un accès complet à votre boîte email « pour simplifier la configuration » : la moindre erreur de filtre, ou une faille côté plateforme, expose alors toute votre correspondance.",
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Agent IA', definition: "Système qui utilise des outils, enchaîne des étapes de façon autonome et conserve un état entre ces étapes — par opposition à un chat conversationnel simple." },
      { term: "Workflow d'automatisation", definition: "Séquence structurée déclencheur → traitement → action, exécutée sans intervention manuelle une fois configurée. Dans Make, on parle de scénario ; dans Zapier, de Zap." },
      { term: 'Déclencheur (trigger)', definition: "Événement observable et sans ambiguïté qui démarre le workflow : email reçu dans un dossier, heure fixe, ligne ajoutée. « Quand le rapport est prêt » n'en est pas un." },
      { term: 'Module / opération', definition: "Dans Make, chaque bulle du scénario est un module ; chaque exécution d'un module sur un élément consomme une opération, décomptée de votre quota mensuel." },
      { term: 'API et clé API', definition: "L'API est le canal technique par lequel la plateforme envoie une demande au modèle et récupère sa réponse ; la clé API est le secret qui identifie et facture votre compte." },
      { term: 'Token', definition: "Unité de texte facturée par le fournisseur d'IA (fragment de mot). Les prix sont exprimés par million de tokens, distincts en entrée et en sortie." },
      { term: 'JSON', definition: "Format de données structuré (clés et valeurs entre accolades) que la plateforme sait découper en champs : on l'impose à l'IA pour exploiter sa réponse champ par champ." },
      { term: 'Point de vérification humaine (human-in-the-loop)', definition: "Étape où une validation humaine est requise avant que le processus continue ou produise un effet irréversible (envoi, publication, décision)." },
      { term: 'Outil (tool) d’un agent', definition: "Action que l'agent peut choisir d'appeler : lire un tableau, créer un brouillon, chercher sur le web. Ce qui n'est pas un outil, l'agent ne peut pas le faire." },
      { term: 'Mémoire', definition: "Mémoire de conversation (les derniers échanges, pour comprendre « et pour Uvira ? ») et mémoire durable (un tableau ou une base que l'agent relit d'une semaine à l'autre)." },
      { term: "Gestionnaire d'erreurs", definition: "Branche du scénario qui s'exécute quand un module échoue : alerte, reprise ou arrêt propre, au lieu d'un échec silencieux." },
      { term: 'Moindre privilège', definition: "Principe de sécurité : n'accorder à un workflow ou à un agent que les accès strictement nécessaires à sa tâche (un dossier, un tableau, la création de brouillons)." },
    ],
  },

  // ───────────── Procédure 1 — Qualifier et cartographier ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Passer la tâche au test des 30 secondes et calculer sa rentabilité',
    intro: "Avant d'ouvrir le moindre outil, vous vérifiez que la tâche mérite d'être automatisée. Entrées nécessaires : la liste de vos tâches récurrentes et une estimation honnête du temps que chacune vous prend.",
    steps: [
      {
        title: 'Qualifier la tâche',
        actions: [
          "Ouvrez un document « Qualification_automatisation » et écrivez le nom de la tâche en une ligne.",
          "Répondez par écrit aux quatre questions du critère décisif : fréquence, canal d'entrée stable, sortie descriptible, jugement sensible.",
          "Classez la tâche dans l'une des trois lignes du tableau « Chat ponctuel ou agent ».",
        ],
      },
      {
        title: 'Calculer la rentabilité',
        actions: [
          "Temps annuel actuel = durée d'une occurrence × nombre d'occurrences par an.",
          "Estimez le temps de conception (procédures 1 à 7 de ce module : comptez 12 à 20 heures pour un premier workflow).",
          "Estimez le temps humain restant par occurrence (relecture, validation).",
          "Seuil de rentabilité (en occurrences) = temps de conception ÷ (durée actuelle − temps restant).",
        ],
      },
    ],
    example: {
      title: "Fiche de qualification d'Esther — 07/09/2026",
      lines: [
        "Tâche : synthèse hebdomadaire des 5 rapports d'équipes pour la direction.",
        "Fréquence : chaque lundi → oui. Canal stable : emails des 5 chefs d'équipe → oui. Sortie descriptible : avancées, blocages, besoins, une page → oui. Jugement sensible à chaque occurrence : non (mais incidents de sécurité possibles → à exclure du traitement automatique).",
        "Classement : tâche répétitive à entrée standardisée → workflow, avec brouillon validé par un humain.",
        "Rentabilité : 2 h × 46 = 92 h/an ; conception ≈ 16 h ; temps restant ≈ 20 min ; seuil = 16 ÷ 1,67 ≈ 10 semaines.",
      ],
    },
    result: "Une fiche d'une demi-page qui dit oui ou non à l'automatisation, avec un seuil de rentabilité chiffré à montrer à votre responsable.",
    pitfall: "Automatiser une tâche qui revient deux fois par an parce que « ce serait élégant » : vous passerez plus de temps à maintenir le workflow qu'à faire la tâche à la main.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Cartographier la tâche manuelle actuelle, chronomètre en main',
    intro: "Un workflow qui reproduit une tâche mal définie automatise le désordre. Prenez 15 à 20 minutes pour décrire, sur papier ou dans le canevas, ce que vous faites aujourd'hui, étape par étape : d'où vient l'information, ce que vous en faites, à qui vous l'envoyez, sous quel format.",
    steps: [
      {
        title: "Observer l'occurrence suivante",
        actions: [
          "Le prochain jour où vous faites la tâche, lancez un chronomètre et notez chaque micro-étape avec son heure de début.",
          "Pour chaque micro-étape, notez : la source (où vous allez chercher), l'action (lire, copier, résumer, mettre en forme), la sortie (ce que vous produisez).",
          "Notez à part chaque décision que vous prenez « dans votre tête » (« Kinshasa n'a rien envoyé, je relance ? »).",
        ],
      },
      {
        title: 'Mettre au propre',
        actions: [
          "Recopiez les micro-étapes dans un tableau à cinq colonnes : N°, Source, Action, Sortie, Durée.",
          "Surlignez les décisions humaines : ce sont les futurs points de vérification.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Source', 'Action', 'Sortie', 'Durée'],
      rows: [
        ['1', "Boîte d'Esther", 'Retrouver les 5 rapports parmi 80 emails', '5 emails ouverts (4 reçus)', '10 min'],
        ['2', '5 emails + 1 pièce jointe Word', 'Lire intégralement', 'Notes manuscrites', '35 min'],
        ['3', 'Notes', 'Trier en avancées / blocages / besoins', 'Liste de 31 points', '30 min'],
        ['4', 'Liste', 'Rédiger la synthèse', 'Texte d\'une page', '35 min'],
        ['5', 'Texte', 'Mettre en forme, envoyer à Direction-HGL', 'Email envoyé à 11 h 40', '10 min'],
      ],
    },
    result: "Une carte de la tâche en cinq micro-étapes, chronométrées (2 h 00 au total), avec deux décisions humaines repérées : relancer un rapport manquant, valider le texte avant envoi.",
    tip: "Les micro-étapes 1 à 4 sont des opérations de lecture et de reformulation : c'est exactement ce que le workflow prendra en charge. La micro-étape 5 contient l'envoi : elle restera humaine.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: "Constituer l'échantillon de rapports réels et mesurer leur variabilité",
    intro: "Votre instruction IA devra fonctionner sur des entrées très inégales. Vous ne pouvez l'écrire qu'en connaissant cette variabilité : vous constituez donc un échantillon de vraies entrées, qui servira aussi de jeu de test à la procédure 5.",
    steps: [
      {
        title: "Rassembler l'échantillon",
        actions: [
          "Créez un dossier « Workflow_Synthese_Hebdo » avec trois sous-dossiers : « 01_Echantillon », « 02_Conception », « 03_Documentation ».",
          "Enregistrez dans « 01_Echantillon » les rapports des 4 dernières semaines (Fichier > Enregistrer sous > format .msg ou .eml dans Outlook) : 4 × 5 = 20 rapports attendus.",
          "Ajoutez la synthèse manuelle que vous avez envoyée chacune de ces semaines : ce sera votre référence de qualité.",
        ],
      },
      {
        title: 'Mesurer la variabilité',
        actions: [
          "Pour chaque rapport, notez dans un tableau : équipe, semaine, nombre de mots, texte dans le corps ou en pièce jointe, rubriques présentes, heure de réception.",
          "Comptez les rapports manquants ou arrivés après le lundi 8 h.",
          "Repérez toute donnée sensible (nom de bénéficiaire, incident) et notez la semaine.",
        ],
      },
    ],
    example: {
      title: 'Variabilité mesurée sur 20 rapports (semaines 34 à 37)',
      lines: [
        "Longueur : de 62 mots (Sake, S35) à 1 480 mots (Bukavu, S36).",
        "Texte en pièce jointe au lieu du corps : 3 rapports sur 20, tous d'Uvira.",
        "Rubrique « besoins » absente : 7 rapports sur 20.",
        "Rapports reçus après le lundi 8 h ou jamais reçus : 4 sur 20 (Kinshasa 2 fois, Uvira 1 fois, Sake 1 fois).",
        "Donnée sensible : 1 incident de sécurité mentionné (Uvira, S36).",
      ],
    },
    result: "Un échantillon de 20 rapports et 4 synthèses de référence, et un tableau de variabilité qui liste noir sur blanc les cas limites à gérer.",
    pitfall: "Concevoir à partir du « rapport idéal » que vous aimeriez recevoir : en production, 35 % des rapports n'ont pas de rubrique besoins et 15 % sont en pièce jointe. Votre workflow doit être conçu pour les vrais rapports.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Découper la tâche en blocs et choisir le bon niveau d’autonomie',
    intro: "Vous transformez la carte manuelle en blocs déclencheur → traitement IA → action de sortie, puis vous décidez pour chaque bloc s'il relève d'un workflow figé ou d'un agent qui choisit ses outils.",
    steps: [
      {
        title: 'Traduire chaque micro-étape',
        actions: [
          "Micro-étape « retrouver les rapports » → bloc Déclencheur + recherche dans un dossier.",
          "Micro-étapes « lire » et « trier » → bloc Traitement IA n° 1 (extraction, un appel par rapport).",
          "Micro-étape « rédiger » → bloc Traitement IA n° 2 (compilation).",
          "Micro-étape « mettre en forme, envoyer » → bloc Action de sortie (brouillon) + décision humaine (envoi).",
        ],
      },
      {
        title: "Choisir workflow ou agent, bloc par bloc",
        actions: [
          "Le chemin est-il toujours le même ? → workflow figé (Make).",
          "Le chemin dépend-il d'une question posée à chaque fois (« quels blocages traînent ? », « qui relancer ? ») → agent avec outils.",
          "Ajoutez les besoins que la carte a fait apparaître : archiver les blocages d'une semaine à l'autre, détecter les rapports manquants.",
        ],
      },
    ],
    example: {
      title: "Découpage retenu par Esther — 08/09/2026",
      lines: [
        "Workflow figé n° 1 « Contrôle réception » (lundi 08:00) : compter les rapports, alerter si manquant.",
        "Workflow figé n° 2 « Synthèse hebdo » (lundi 10:00) : extraire, compiler, créer le brouillon, archiver les blocages.",
        "Agent « Suivi des blocages » (à la demande) : répondre aux questions d'Esther sur les blocages archivés et préparer les relances en brouillon.",
      ],
    },
    result: "Un schéma en trois composants, chacun décrit en une phrase, qui servira de plan aux procédures 2 à 6.",
    tip: "Commencez toujours par le workflow figé : il est plus prévisible, plus facile à tester et à documenter. L'agent vient ensuite, sur des données que le workflow a déjà fiabilisées.",
  },

  // ───────────── Procédure 2 — Concevoir sur le canevas ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Formuler un déclencheur observable et sans ambiguïté',
    intro: "Une machine ne sait pas juger qu'un rapport est « prêt ». Vous reformulez votre déclencheur en critère technique vérifiable : adresse d'expéditeur, mot-clé dans l'objet, dossier, jour et heure fixes, nouvelle ligne dans un tableur.",
    steps: [
      {
        title: 'Choisir entre déclencheur par événement et déclencheur horaire',
        actions: [
          "Si chaque entrée se traite seule (un email = une réponse) : déclencheur par événement (« Watch emails »).",
          "Si plusieurs entrées doivent être traitées ensemble (5 rapports → 1 synthèse) : déclencheur horaire, qui lit tout ce qui est arrivé depuis la dernière exécution.",
          "Écrivez le critère complet : quoi, où, depuis quand, à quelle heure.",
        ],
      },
      {
        title: "Normaliser l'entrée à la source",
        actions: [
          "Demandez aux émetteurs une convention d'objet fixe, par exemple « [RAPPORT HEBDO] Équipe – Semaine ».",
          "Faites envoyer les rapports à une adresse unique et dédiée, plutôt qu'à la boîte personnelle de la coordinatrice.",
          "Testez le critère à la main : une recherche Outlook avec ce critère doit retrouver exactement les rapports, et rien d'autre.",
        ],
      },
    ],
    example: {
      title: 'Déclencheur du fil rouge — avant / après',
      lines: [
        "À éviter : « Quand les rapports sont arrivés, faire la synthèse. »",
        "À éviter : « À chaque rapport reçu, faire la synthèse » (5 synthèses partielles par semaine).",
        "Retenu : « Chaque lundi à 10:00 (heure de Goma), lire dans la boîte partagée Rapports hebdo, dossier Rapports semaine, les emails reçus depuis le vendredi précédent 00:00 dont l'objet commence par [RAPPORT HEBDO]. »",
        "Contrôle complémentaire : le même critère est lu à 08:00 pour compter les rapports et alerter s'il en manque.",
      ],
    },
    result: "Un déclencheur d'une phrase, testé par une recherche manuelle qui renvoie exactement les rapports de la semaine.",
    pitfall: "Filtrer seulement sur l'expéditeur : le jour où Josué répond « Re: réunion de mardi » depuis la même adresse, son email part dans la synthèse de la direction.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: "Rédiger l'instruction d'extraction, un prompt RCCF figé",
    intro: "Ce prompt sera appliqué automatiquement à chaque rapport, chaque semaine, sans que vous le voyiez. Une imprécision s'y répète à l'infini : il doit dire quoi faire quand une information manque, quand le rapport est en pièce jointe, quand il contient une donnée sensible.",
    steps: [
      {
        title: 'Assembler le prompt lettre par lettre (RCCF, module 02)',
        actions: [
          "Rôle : la fonction que joue l'IA et pour qui.",
          "Contexte : la nature de l'entrée et les variables qui changeront à chaque exécution, entre doubles accolades.",
          "Contraintes : ce qu'elle ne doit jamais faire (inventer, déduire, recopier une donnée sensible) et la conduite à tenir pour chaque cas limite de votre tableau de variabilité.",
          "Format : une sortie JSON aux clés nommées, sans texte autour, pour que la plateforme puisse la découper en champs.",
          "Enregistrez le prompt dans « 02_Conception » sous le nom prompt_extraction_v1.0.txt.",
        ],
      },
    ],
    example: {
      title: "Prompt d'extraction v1.0 — fil rouge (à copier)",
      lines: [
        "Rôle : tu es assistant de coordination des opérations d'une organisation humanitaire qui suit cinq équipes terrain.",
        "Contexte : tu reçois le rapport hebdomadaire d'un chef d'équipe, en format libre (d'un paragraphe à trois pages). Équipe : {{equipe}}. Semaine : {{semaine}}. Nombre de pièces jointes : {{nb_pj}}. Texte : {{corps}}.",
        "Contraintes : utilise uniquement ce qui est écrit dans le rapport ; n'invente et ne déduis aucun chiffre, aucun besoin, aucune cause. Recopie chiffres et noms de lieux à l'identique. Rubrique absente : « Non mentionné ». Texte de moins de 300 caractères qui annonce une pièce jointe : statut PIECE_JOINTE. Texte qui n'est pas un rapport d'activité : statut HORS_FORMAT. Nom de bénéficiaire ou incident de sécurité : ne le recopie pas, mets alerte_sensible à Oui et indique le type.",
        "Format : réponds uniquement par un objet JSON valide avec les clés equipe, semaine, statut (COMPLET, PARTIEL, PIECE_JOINTE, HORS_FORMAT), avancees (5 phrases de 25 mots maximum), blocages (liste d'objets description, depuis, action_demandee), besoins (liste), chiffres_cles (liste), alerte_sensible (Oui/Non), type_alerte.",
      ],
    },
    result: "Un prompt versionné (v1.0) qui prévoit explicitement les quatre cas limites relevés dans l'échantillon : rubrique absente, pièce jointe, hors format, donnée sensible.",
    pitfall: "Écrire « résume ce rapport » : vous obtiendrez cinq résumés de formes différentes, impossibles à compiler, et l'IA comblera les rubriques vides par des suppositions plausibles.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: "Tester le prompt d'extraction à la main avant de l'automatiser",
    intro: "Un prompt se corrige en dix secondes dans une conversation, et en une semaine perdue une fois en production. Vous le testez donc d'abord dans ChatGPT ou Claude, sur les rapports les plus difficiles de votre échantillon.",
    steps: [
      {
        title: 'Tester sur trois rapports contrastés',
        actions: [
          "Ouvrez une nouvelle conversation dans votre espace professionnel.",
          "Collez le prompt en remplaçant les variables par les valeurs du rapport le plus long (Bukavu S36), envoyez.",
          "Recommencez dans une nouvelle conversation avec le plus court (Sake S35), puis avec un rapport en pièce jointe (Uvira S37).",
        ],
      },
      {
        title: 'Contrôler chaque sortie',
        actions: [
          "Vérifiez que la réponse est du JSON pur : copiez-la dans un validateur JSON ou demandez « Ce JSON est-il valide ? » dans une autre conversation.",
          "Surlignez chaque fait de la sortie dans le rapport source : un fait introuvable est une invention.",
          "Corrigez le prompt, incrémentez la version (v1.1) et retestez les trois cas.",
        ],
      },
    ],
    example: {
      title: 'Résultat du test sur Sake S35 (62 mots) — et correction',
      lines: [
        "Sortie v1.0 : besoins = [« Carburant pour les déplacements de sensibilisation »] → introuvable dans le rapport : invention.",
        "Correction v1.1 ajoutée aux contraintes : « N'infère aucun besoin qui ne soit pas écrit explicitement. Un besoin implicite n'est pas un besoin. »",
        "Sortie v1.1 : besoins = [« Non mentionné »], statut PARTIEL ✔",
      ],
    },
    result: "Un prompt v1.1 dont la sortie est du JSON valide et sans aucune invention sur les trois rapports les plus difficiles de l'échantillon.",
    tip: "Gardez chaque version du prompt et une ligne d'explication de la correction : c'est la partie la plus précieuse de la documentation, celle qui évite à votre successeur de réintroduire une erreur déjà corrigée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: "Rédiger l'instruction de compilation de la synthèse",
    intro: "Le second appel IA reçoit les cinq fiches JSON (et la liste des équipes sans rapport) et produit la synthèse pour la direction. Il ne lit jamais les rapports bruts : il ne peut donc pas réintroduire ce que l'extraction a écarté.",
    steps: [
      {
        title: 'Écrire le prompt',
        actions: [
          "Rôle : rédacteur de la synthèse hebdomadaire pour la direction pays.",
          "Contexte : les fiches JSON, la semaine, le nombre de rapports reçus et la liste des équipes manquantes.",
          "Contraintes : aucun fait nouveau, chiffres à l'identique, longueur maximale, traitement des alertes sensibles et des rapports manquants, pas d'adjectif d'évaluation.",
          "Format : les titres exacts des rubriques, dans l'ordre, et le format du corps d'email (HTML simple).",
          "Testez-le à la main en collant les trois fiches JSON obtenues à l'étape précédente ; enregistrez prompt_synthese_v1.0.txt.",
        ],
      },
    ],
    example: {
      title: 'Prompt de synthèse v1.0 — fil rouge (à copier)',
      lines: [
        "Rôle : tu rédiges la synthèse hebdomadaire des opérations terrain pour la directrice pays.",
        "Contexte : voici les fiches JSON des équipes pour la semaine {{semaine}} ; rapports reçus : {{nb_recus}} sur 5 ; équipes sans rapport : {{manquants}}.",
        "Contraintes : utilise uniquement les fiches ; recopie les chiffres à l'identique ; 400 mots maximum ; aucun adjectif d'évaluation (« excellent », « inquiétant ») ; pour une fiche alerte_sensible = Oui, écris seulement « Alerte signalée par l'équipe X — voir la coordination » ; mentionne chaque équipe manquante et chaque statut PIECE_JOINTE.",
        "Format : corps d'email en HTML simple, six rubriques titrées dans cet ordre : 1. Points d'attention pour la direction (3 maximum) ; 2. Avancées par équipe (tableau Équipe | Avancées clés) ; 3. Blocages (tableau Équipe | Blocage | Depuis | Action demandée) ; 4. Besoins à arbitrer ; 5. Rapports manquants ou incomplets ; 6. « Synthèse préparée avec assistance IA et relue par la coordination. »",
      ],
    },
    result: "Un prompt de synthèse versionné qui produit, sur les fiches de test, une page en six rubriques fixes que la direction retrouvera chaque semaine au même endroit.",
    pitfall: "Faire extraire et compiler en un seul appel « voici les 5 rapports, fais la synthèse » : sur cinq entrées de 60 à 1 500 mots, le modèle survole le plus long et omet des points du plus court, sans que vous puissiez savoir lesquels.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: "Définir l'action de sortie et son format exact",
    intro: "Un résumé techniquement correct mais mal formaté finit ignoré. Vous fixez exactement ce que le workflow fait du résultat : où il le dépose, sous quel objet, pour qui, et ce qu'il archive.",
    steps: [
      {
        title: 'Spécifier la sortie principale',
        actions: [
          "Type d'action : brouillon d'email (et non envoi) dans la boîte partagée Rapports hebdo.",
          "Destinataires prérenseignés : la liste de diffusion Direction-HGL ; copie : les 5 chefs d'équipe.",
          "Objet calculé : « [SYNTHÈSE HEBDO] S{{semaine}} — {{dates}} — {{nb_recus}}/5 rapports ».",
          "Montrez une synthèse test à la directrice et demandez : « Est-ce le format que vous voulez lire chaque lundi ? »",
        ],
      },
      {
        title: 'Spécifier les sorties secondaires',
        actions: [
          "Archivage : une ligne par blocage et par besoin dans le tableau T_Blocages du classeur Suivi_blocages_2026.xlsx sur SharePoint.",
          "Notification : un court email à Esther « Brouillon de synthèse prêt à relire ».",
        ],
      },
    ],
    table: {
      columns: ['Colonne de T_Blocages', 'Contenu', 'Exemple (Goma, S38)'],
      rows: [
        ['Semaine', 'Semaine du rapport', 'S38'],
        ['Équipe', 'Nom de l\'équipe', 'Goma'],
        ['Type', 'Blocage ou Besoin', 'Blocage'],
        ['Description', 'Texte extrait', 'Camion GOM-03 en panne depuis le 15/09, 2 distributions reportées'],
        ['Depuis', 'Semaine d\'apparition', 'S38'],
        ['Statut', 'Ouvert / Résolu (mis à jour par Esther)', 'Ouvert'],
        ['Action demandée', 'Texte extrait', 'Arbitrer location ou réparation'],
      ],
    },
    result: "Une spécification de sortie validée par la directrice (objet, destinataires, six rubriques) et la structure du tableau d'archivage, qui deviendra la mémoire du workflow et de l'agent.",
    tip: "Le tableau T_Blocages est le seul endroit où le workflow « se souvient » d'une semaine à l'autre. Sans lui, impossible de dire qu'un blocage dure depuis trois semaines.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: "Remplir l'onglet « Canevas Workflow » ligne par ligne",
    intro: "Le gabarit canevas-conception-workflow-agent-ia.xlsx compte six colonnes (A à F) et dix lignes d'étapes (lignes 5 à 14). Les lignes 5 à 10 contiennent un exemple sur ce même cas : vous les précisez avec vos choix réels, puis vous ajoutez vos étapes 7 et 8 en lignes 11 et 12.",
    steps: [
      {
        title: 'Remplir chaque colonne',
        actions: [
          "Enregistrez une copie du gabarit dans « 02_Conception » : canevas_synthese_hebdo_v1.xlsx.",
          "A « N° étape » : 1 à 8, dans l'ordre d'exécution.",
          "B « Déclencheur ou entrée » : ce qui arrive à l'étape (événement, données reçues de l'étape précédente).",
          "C « Outil ou IA utilisé » : plateforme et module, ou modèle et version du prompt.",
          "D « Sortie attendue » : ce que l'étape produit, avec un nombre quand c'est possible.",
          "E « Point de vérification humaine (Oui/Non) » : saisissez exactement Oui ou Non (le total de l'autre onglet les compte).",
          "F « Justification / note » : pourquoi ce contrôle, ou ce qui couvre le risque si c'est Non.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Déclencheur ou entrée', 'Outil ou IA', 'Sortie attendue', 'Vérif.'],
      rows: [
        ['1', 'Lundi 10:00 ; dossier Rapports semaine, objet [RAPPORT HEBDO], depuis vendredi 00:00', 'Make : planification + Microsoft 365 Email', '0 à 5 emails de la semaine', 'Non'],
        ['2', 'Lundi 08:00 ; même critère', 'Make : agrégateur + comparaison à la liste des 5 équipes', 'Liste des manquants + alerte à Esther', 'Oui'],
        ['3', 'Chaque email (corps, équipe, pièces jointes)', 'OpenAI via API, prompt extraction v1.1', '1 fiche JSON par rapport', 'Non'],
        ['4', 'Fiches JSON + liste des manquants', 'OpenAI via API, prompt synthèse v1.0', 'Synthèse HTML ≤ 400 mots, 6 rubriques', 'Non'],
        ['5', 'Synthèse HTML', 'Make : Microsoft 365 Email, création de brouillon', 'Brouillon + notification à Esther', 'Oui'],
        ['6', 'Brouillon relu', 'Outlook : envoi manuel par Esther', 'Email envoyé à Direction-HGL', 'Oui'],
        ['7', 'Fiches JSON', 'Make : Excel, ajout de lignes dans T_Blocages', '1 ligne par blocage ou besoin', 'Non'],
        ['8', "Échec d'un module", "Make : gestionnaire d'erreurs + email d'alerte", 'Alerte à Esther et Olivier', 'Non'],
      ],
    },
    example: {
      title: 'Colonne F « Justification / note » — fil rouge',
      lines: [
        "1 : déclencheur horaire, car la synthèse est groupée ; le contrôle de 08:00 laisse deux heures pour relancer.",
        "2 : un rapport manquant est relancé par Esther, jamais ignoré en silence.",
        "3 et 4 : risque d'omission ou d'invention couvert par la relecture de l'étape 5 et par la règle « Non mentionné ».",
        "5 : contenu destiné à la direction, relu avant tout envoi (15 à 25 minutes).",
        "6 : envoi irréversible vers un lectorat hors équipe ; aucun module d'envoi automatique n'est actif.",
        "7 : mémoire d'une semaine à l'autre, utilisée par l'agent de suivi. 8 : évite l'échec silencieux.",
      ],
    },
    result: "Un onglet « Canevas Workflow » de 8 lignes, lisible par quelqu'un qui n'a jamais vu le projet, avec trois « Oui » en colonne E.",
    pitfall: "Écrire « oui » en minuscules ou « Oui (au début) » dans la colonne E : la formule de total de l'onglet « Évaluation des risques » ne compte que le texte exact Oui.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: "Compléter l'onglet « Évaluation des risques »",
    intro: "Cet onglet compte trois colonnes : N° étape, « Nécessite une supervision humaine ? » (une formule qui lit la colonne E du canevas) et « Pourquoi ». Les lignes 5 à 7 sont préremplies pour les étapes 2, 5 et 6 ; vous ajoutez une ligne pour chaque autre étape à risque, et la cellule C13 totalise les « Oui ».",
    steps: [
      {
        title: 'Vérifier les lignes préremplies',
        actions: [
          "Cliquez sur B5 : la barre de formule affiche ='Canevas Workflow'!E6, soit l'étape 2. Vérifiez que B5 affiche Oui.",
          "Relisez C5 à C7 et adaptez le texte « Pourquoi » à votre cas réel.",
        ],
      },
      {
        title: 'Ajouter les étapes sans contrôle humain mais à risque',
        actions: [
          "En A8, saisissez 3 ; en B8, saisissez ='Canevas Workflow'!E7 (ligne de l'étape 3) ; en C8, expliquez le risque et ce qui le couvre.",
          "Faites de même en lignes 9 et 10 pour les étapes 7 et 8 (cellules E11 et E12 du canevas).",
          "Vérifiez C13 : la formule (NB.SI dans un Excel en français, COUNTIF en anglais) compte les Oui de E5:E14 et doit afficher 3.",
        ],
      },
    ],
    example: {
      title: 'Lignes ajoutées — fil rouge',
      lines: [
        "Ligne 8 — Étape 3 — Non — L'IA peut omettre ou inventer un point : la règle « Non mentionné », le test sur 6 cas et la relecture de l'étape 5 couvrent ce risque.",
        "Ligne 9 — Étape 7 — Non — Une ligne erronée dans T_Blocages fausse la mémoire de l'agent : Esther met à jour la colonne Statut chaque lundi.",
        "Ligne 10 — Étape 8 — Non — Le vrai risque est l'échec silencieux : alerte email + règle « pas de brouillon à 10:30 = consulter l'historique ».",
        "C13 : 3 étapes nécessitent une supervision humaine (2, 5, 6).",
      ],
    },
    result: "Un onglet qui justifie, étape par étape, pourquoi un humain intervient ou pourquoi il n'est pas nécessaire. Le canevas complet est prêt à être présenté à la directrice pour validation.",
    tip: "Faites valider le canevas par écrit avant de construire : « Furaha, voici les 8 étapes et les 3 contrôles humains, est-ce acceptable ? » Une objection à ce stade coûte 5 minutes ; après construction, une demi-journée.",
  },

  // ───────────── Procédure 3 — Préparer l'intégration technique ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Choisir la plateforme avec quatre critères écrits',
    intro: "Make, Zapier et n8n savent tous appeler une API d'IA. Le choix se fait sur la complexité du workflow, la confidentialité des données, le volume d'opérations et l'appui technique disponible.",
    steps: [
      {
        title: 'Noter chaque critère',
        actions: [
          "Complexité : votre canevas contient-il des branches (rapport manquant / présent), des boucles (5 rapports) ou des agrégations (5 fiches → 1 synthèse) ? Si oui, Make ou n8n plutôt que Zapier.",
          "Confidentialité : les données peuvent-elles transiter par une plateforme tierce ? Si non, n8n auto-hébergé.",
          "Volume : estimez les opérations par mois (modules exécutés × éléments traités × exécutions).",
          "Appui : qui pourra reprendre le workflow ? Un non-développeur s'approprie plus vite Make ou Zapier.",
        ],
      },
      {
        title: 'Décider et consigner',
        actions: [
          "Écrivez la décision et ses raisons en trois lignes dans la fiche de qualification.",
          "Créez le compte sur la plateforme retenue avec l'adresse professionnelle de l'organisation, pas une adresse personnelle.",
        ],
      },
    ],
    example: {
      title: 'Décision du fil rouge — 09/09/2026',
      lines: [
        "Complexité : branche « manquant », boucle sur 5 emails, agrégation → Make.",
        "Confidentialité : rapports sans donnée personnelle (consigne du 08/09) → plateforme tierce acceptable ; l'agent, qui lira le tableau de suivi, sera sur l'instance n8n auto-hébergée d'Olivier.",
        "Volume : ≈ 30 opérations par semaine, ≈ 130 par mois → offre gratuite de Make suffisante pour le rodage.",
        "Appui : Amani, suppléante, n'est pas développeuse → Make, visuel.",
      ],
    },
    result: "Une plateforme choisie pour des raisons écrites, et un compte d'organisation créé.",
    pitfall: "Choisir la plateforme qu'un collègue « connaît bien » sans regarder le canevas : un workflow à branches et boucles monté dans un outil linéaire devient un empilement de Zaps que personne ne sait maintenir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Préparer la boîte dédiée, la règle de tri et le tableau de suivi',
    intro: "Le workflow ne doit voir que ce dont il a besoin. Vous créez donc avec le référent informatique une boîte partagée dédiée, un dossier unique alimenté par une règle, et le classeur de suivi : ce sont les seuls accès que Make recevra.",
    steps: [
      {
        title: 'Boîte partagée et règle Outlook',
        actions: [
          "Demandez au référent informatique une boîte partagée « Rapports hebdo », avec accès pour la coordinatrice et sa suppléante.",
          "Dans Outlook, ouvrez la boîte partagée, créez le dossier « Rapports semaine ».",
          "Paramètres > Courrier > Règles > Ajouter une règle : condition « L'objet contient [RAPPORT HEBDO] » et « De : » les 5 adresses des chefs d'équipe ; action « Déplacer vers Rapports semaine ».",
          "Envoyez un email de test depuis une adresse de chef d'équipe et vérifiez qu'il arrive dans le dossier.",
        ],
      },
      {
        title: 'Classeur de suivi',
        actions: [
          "Sur le site SharePoint de la coordination, créez Suivi_blocages_2026.xlsx.",
          "Saisissez en ligne 1 les 7 en-têtes définis à la procédure 2 (Semaine, Équipe, Type, Description, Depuis, Statut, Action demandée).",
          "Sélectionnez la plage, Ctrl+T, nommez le tableau T_Blocages (Création de tableau > Nom du tableau).",
          "Ajoutez une feuille « Contacts » avec le tableau T_Contacts : Sujet, Responsable, Email (utile à l'agent de la procédure 6).",
        ],
      },
    ],
    example: {
      title: 'Message envoyé aux 5 chefs d’équipe le 10/09/2026',
      lines: [
        "« À partir du vendredi 18 septembre, merci d'envoyer votre rapport hebdomadaire à la boîte Rapports hebdo, avec l'objet : [RAPPORT HEBDO] Votre équipe – S38.",
        "Écrivez le rapport dans le corps de l'email (pas en pièce jointe) avec, si possible, trois rubriques : Avancées, Blocages, Besoins.",
        "Rappel : aucun nom de bénéficiaire ; les incidents de sécurité continuent d'être signalés directement à la coordination. »",
      ],
    },
    result: "Un dossier qui ne reçoit que les rapports, vérifié par un email de test, et un tableau T_Blocages vide prêt à recevoir les lignes du workflow.",
    tip: "Normaliser l'entrée à la source (objet fixe, rapport dans le corps) est le réglage le plus rentable de tout le projet : chaque contrainte acceptée par les émetteurs est un cas limite de moins à gérer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Créer, plafonner et ranger la clé API',
    intro: "La clé API identifie votre compte et déclenche la facturation : c'est un secret, au même titre qu'un mot de passe. Vous la créez sur un projet dédié au workflow, avec un plafond de dépense, et elle n'est saisie qu'à un seul endroit.",
    steps: [
      {
        title: 'Créer la clé (exemple OpenAI ; Anthropic suit la même logique dans sa console)',
        actions: [
          "Connectez-vous avec le compte développeur de l'organisation sur la plateforme du fournisseur (platform.openai.com ou console.anthropic.com).",
          "Créez un projet dédié nommé « Synthese_hebdo_HGL » : coûts et clés seront isolés des autres usages.",
          "Dans la section des clés API de ce projet, cliquez sur la création d'une nouvelle clé secrète, nommez-la « make-synthese-hebdo ».",
          "Copiez la clé immédiatement : elle ne sera plus jamais affichée en entier.",
        ],
      },
      {
        title: 'Plafonner et ranger',
        actions: [
          "Dans les paramètres de facturation ou de limites du projet, fixez un budget mensuel (ici 10 USD) et une alerte à 50 %.",
          "Collez la clé dans le gestionnaire de mots de passe de l'organisation, avec le nom du projet et la date de création.",
          "Notez la date de rotation prévue (création + 6 mois) dans le calendrier du responsable de maintenance.",
        ],
      },
    ],
    example: {
      title: 'Fiche de la clé — fil rouge (sans la clé elle-même)',
      lines: [
        "Fournisseur : OpenAI — Projet : Synthese_hebdo_HGL — Nom de la clé : make-synthese-hebdo",
        "Créée le 14/09/2026 par Olivier Kasongo — Stockée : gestionnaire de mots de passe, coffre « Automatisations »",
        "Budget : 10 USD/mois, alerte à 5 USD — Coût estimé : < 0,50 USD/mois — Rotation prévue : 14/03/2027",
      ],
    },
    result: "Une clé API dédiée, plafonnée, rangée dans le coffre de l'organisation, et documentée sans jamais être recopiée dans un document.",
    pitfall: "Envoyer la clé par email ou dans une messagerie « pour qu'Olivier la configure » : elle reste lisible dans les boîtes et les sauvegardes pendant des années, et n'importe qui la trouvant peut facturer votre compte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Créer les connexions dans Make au moindre privilège',
    intro: "Dans Make, une connexion est l'autorisation donnée à la plateforme d'agir sur un service (votre messagerie, Excel, OpenAI). Vous en créez trois, chacune avec le compte le plus restreint possible.",
    steps: [
      {
        title: 'Créer les trois connexions',
        actions: [
          "Dans Make, ouvrez la rubrique « Connections » du menu de gauche (ou créez la connexion au moment d'ajouter le premier module).",
          "OpenAI : collez la clé API depuis le coffre ; nommez la connexion « OpenAI – Synthese hebdo ».",
          "Microsoft 365 Email : authentifiez-vous avec un compte qui n'a accès qu'à la boîte partagée Rapports hebdo ; acceptez uniquement les autorisations demandées par Make, après lecture.",
          "Microsoft 365 Excel : même logique, avec un compte qui n'accède qu'au site SharePoint de la coordination.",
        ],
      },
      {
        title: 'Vérifier',
        actions: [
          "Pour chaque connexion, utilisez le bouton de vérification proposé par Make : le statut doit être valide.",
          "Notez dans le brouillon de documentation : nom de la connexion, compte utilisé, périmètre d'accès, date.",
        ],
      },
    ],
    table: {
      columns: ['Connexion', 'Compte utilisé', 'Périmètre réel'],
      rows: [
        ['OpenAI – Synthese hebdo', 'Clé du projet Synthese_hebdo_HGL', 'Appels au modèle, budget 10 USD/mois'],
        ['M365 Email – Rapports hebdo', 'Compte de service de la boîte partagée', 'Boîte Rapports hebdo uniquement'],
        ['M365 Excel – Coordination', 'Compte de service SharePoint', 'Site Coordination uniquement'],
      ],
    },
    result: "Trois connexions nommées explicitement, chacune vérifiée, et un tableau qui dit exactement à quoi Make a accès.",
    pitfall: "Connecter la messagerie avec le compte personnel de la coordinatrice : le jour où elle quitte l'organisation et que son compte est désactivé, le workflow s'arrête sans prévenir.",
  },

  // ───────────── Procédure 4 — Construire dans Make ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 7',
    title: 'Créer le scénario « Synthèse hebdo 10:00 » et lire les rapports de la semaine',
    intro: "Vous commencez par le scénario principal (étapes 1 et 3 à 8 du canevas). Les intitulés de modules cités sont ceux de l'interface anglaise de Make ; ils peuvent légèrement varier selon les mises à jour, mais la logique reste la même.",
    steps: [
      {
        title: 'Créer le scénario',
        actions: [
          "Dans Make, cliquez sur « Create a new scenario » et nommez-le « HGL – Synthèse hebdo 10:00 ».",
          "Cliquez sur la grande bulle « + », cherchez « Microsoft 365 Email » et choisissez l'action de recherche d'emails (« Search Emails »).",
          "Sélectionnez la connexion « M365 Email – Rapports hebdo » et le dossier « Rapports semaine ».",
        ],
      },
      {
        title: 'Régler les critères de recherche',
        actions: [
          "Filtre de date : reçus après le vendredi précédent 00:00 ; utilisez la fonction de date de Make, par exemple addDays(now; -3) pour une exécution le lundi.",
          "Filtre d'objet : contient « [RAPPORT HEBDO] ».",
          "Nombre maximal de résultats : 10 (marge de sécurité ; au-delà, c'est une anomalie).",
          "Cliquez sur « Run once » : la bulle affiche un chiffre ; cliquez dessus pour voir les emails trouvés et leurs champs (expéditeur, objet, corps, pièces jointes).",
        ],
      },
    ],
    example: {
      title: 'Exécution test du lundi 21/09/2026 (rapports S38)',
      lines: [
        "Search Emails → 5 bundles (Goma, Sake, Bukavu, Uvira, Kinshasa reçu à 9 h 12).",
        "Champs repérés pour la suite : From address, Subject, Body (texte), Has attachments, Received date.",
      ],
    },
    result: "Un scénario nommé dont le premier module renvoie exactement les rapports de la semaine, un « bundle » par email.",
    tip: "Make traite chaque bundle séparément dans les modules suivants : les 5 emails passeront un par un dans le module OpenAI, sans que vous ayez à écrire de boucle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 7',
    title: 'Construire le contrôle de réception de 08:00',
    intro: "C'est l'étape 2 du canevas : un second scénario, court, qui compte les rapports à 08:00 et prévient Esther s'il en manque, pour qu'elle relance avant la synthèse de 10:00.",
    steps: [
      {
        title: 'Compter et comparer',
        actions: [
          "Clonez le scénario (menu « … » > Clone), renommez-le « HGL – Contrôle réception 08:00 » et supprimez tout ce qui suit Search Emails.",
          "Ajoutez un module « Array aggregator » qui regroupe les adresses d'expéditeur en une seule liste.",
          "Ajoutez un module « Set variable » : liste_equipes = les 5 adresses des chefs d'équipe.",
          "Ajoutez un module « Set variable » : manquants = les adresses de liste_equipes absentes de la liste agrégée (fonction de comparaison de tableaux de Make, ou un filtre par adresse).",
        ],
      },
      {
        title: 'Alerter seulement si nécessaire',
        actions: [
          "Ajoutez un module Microsoft 365 Email d'envoi vers Esther et Amani uniquement (destinataires internes, contenu factuel).",
          "Sur le lien qui mène à ce module, cliquez sur l'icône de filtre : condition « longueur de manquants supérieure à 0 ».",
          "Corps de l'alerte : la liste des équipes manquantes et un modèle de relance à copier.",
        ],
      },
    ],
    example: {
      title: 'Alerte reçue le lundi 21/09/2026 à 08:01',
      lines: [
        "Objet : [CONTRÔLE] S38 — 4/5 rapports reçus — manquant : Kinshasa",
        "Corps : « Synthèse automatique prévue à 10:00. Rapport manquant : Kinshasa (Christian Lukusa). Relance suggérée : Bonjour Christian, ton rapport S38 n'est pas arrivé ; peux-tu l'envoyer avant 9 h 45 pour qu'il figure dans la synthèse ? »",
        "Décision d'Esther : relance par téléphone à 08:10 ; rapport reçu à 09:12, donc inclus à 10:00.",
      ],
    },
    result: "Un scénario de contrôle qui ne sonne que s'il manque un rapport, et laisse deux heures pour relancer. La décision de relancer reste humaine.",
    pitfall: "Envoyer la relance automatiquement au chef d'équipe : un rapport peut manquer pour une raison légitime (mission, coupure réseau, congé), et une relance automatique répétée chaque semaine finit par être ignorée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 7',
    title: "Appeler l'IA pour extraire chaque rapport",
    intro: "Retour au scénario principal. Après Search Emails, vous ajoutez le module OpenAI (étape 3 du canevas) et vous y collez le prompt d'extraction, en remplaçant chaque variable entre doubles accolades par le champ correspondant de l'email.",
    steps: [
      {
        title: 'Configurer le module',
        actions: [
          "Ajoutez un module de l'application OpenAI (ChatGPT) qui envoie un message au modèle et renvoie sa réponse (« Create a Completion » ou « Generate a response » selon la version).",
          "Connexion : « OpenAI – Synthese hebdo » ; modèle : celui validé par l'organisation, noté dans la documentation.",
          "Message de rôle système : collez Rôle, Contraintes et Format du prompt v1.1.",
          "Message utilisateur : collez le Contexte, puis cliquez dans le texte pour insérer les champs de l'email à la place des variables.",
          "Si le module propose un format de réponse JSON, activez-le ; réglez une température basse (0 à 0,2) pour des sorties stables.",
        ],
      },
      {
        title: 'Faire correspondre les variables',
        actions: [
          "{{equipe}} → déduit de l'objet de l'email (texte après [RAPPORT HEBDO]).",
          "{{semaine}} → numéro de semaine calculé par Make à partir de la date d'exécution.",
          "{{nb_pj}} → champ du nombre de pièces jointes ; {{corps}} → champ du corps de l'email, en texte.",
        ],
      },
    ],
    example: {
      title: 'Sortie du module pour Goma, S38',
      lines: [
        `{"equipe":"Goma","semaine":"S38","statut":"COMPLET",`,
        `"avancees":["Kits NFI distribués à 412 ménages à Kanyaruchinya (objectif 450)"],`,
        `"blocages":[{"description":"Camion GOM-03 en panne depuis le 15/09, 2 distributions reportées","depuis":"S38","action_demandee":"Arbitrer location ou réparation"}],`,
        `"besoins":["2 motos pour le suivi post-distribution"],"chiffres_cles":["412 ménages","2 distributions reportées"],"alerte_sensible":"Non","type_alerte":""}`,
      ],
    },
    result: "Cinq exécutions du module OpenAI, une par rapport, chacune renvoyant une fiche JSON au format exact imposé par le prompt.",
    pitfall: "Insérer le corps HTML brut de l'email au lieu du texte : balises et signatures gonflent le nombre de tokens et peuvent faire dépasser la limite de longueur sur les rapports de trois pages.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 7',
    title: 'Découper la réponse JSON et traiter les cas limites',
    intro: "La réponse de l'IA est un texte : pour l'exploiter champ par champ, Make doit la découper. C'est aussi ici que le workflow oriente les cas limites (pièce jointe, hors format, alerte sensible) au lieu de les laisser passer en silence.",
    steps: [
      {
        title: 'Découper',
        actions: [
          "Ajoutez un module « JSON > Parse JSON ».",
          "Cliquez sur « Add » pour créer la structure de données, puis « Generator » et collez la sortie Goma ci-contre : Make déduit les champs.",
          "Dans « JSON string », insérez le texte de la réponse du module OpenAI.",
        ],
      },
      {
        title: 'Orienter les cas limites',
        actions: [
          "Ajoutez un module « Router » après Parse JSON.",
          "Route 1, filtre « statut = COMPLET ou PARTIEL » : la suite normale.",
          "Route 2, filtre « statut = PIECE_JOINTE ou HORS_FORMAT » : ajoutez l'équipe à une variable a_traiter_manuellement.",
          "Route 3, filtre « alerte_sensible = Oui » : email immédiat à Esther seule, « Alerte signalée dans le rapport de [équipe] — à traiter hors workflow ».",
        ],
      },
    ],
    example: {
      title: 'Orientation des 5 rapports de la semaine 38',
      lines: [
        "Goma : COMPLET → route 1 — Sake : PARTIEL (besoins Non mentionné) → route 1",
        "Bukavu : COMPLET → route 1 — Kinshasa : COMPLET → route 1",
        "Uvira : PIECE_JOINTE (corps de 31 caractères, 1 pièce jointe) → route 2 : mention « rapport en pièce jointe, à intégrer à la relecture »",
      ],
    },
    result: "Chaque rapport suit une route explicite ; aucun cas limite ne peut disparaître sans laisser de trace dans la synthèse ou dans la boîte d'Esther.",
    tip: "Les rapports en pièce jointe peuvent aussi être traités automatiquement (téléchargement du fichier, conversion en texte) ; ne l'ajoutez qu'après le rodage, si le cas persiste malgré la consigne donnée aux chefs d'équipe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 7',
    title: 'Agréger les fiches et compiler la synthèse',
    intro: "C'est l'étape 4 du canevas : les fiches de la route 1 sont regroupées en un seul texte, puis transmises au second appel IA avec la liste des rapports manquants ou à traiter manuellement.",
    steps: [
      {
        title: 'Agréger',
        actions: [
          "Après la route 1, ajoutez un module « Text aggregator » dont la source est le module Search Emails.",
          "Dans « Text », insérez la réponse JSON de chaque fiche ; séparateur : une nouvelle ligne.",
          "Préparez les variables nb_recus (nombre de fiches), manquants (liste des équipes absentes) et a_traiter_manuellement.",
        ],
      },
      {
        title: 'Compiler',
        actions: [
          "Ajoutez un second module OpenAI ; collez le prompt de synthèse v1.0 (rôle système : Rôle, Contraintes, Format ; message utilisateur : Contexte).",
          "Insérez le texte agrégé, nb_recus, manquants et a_traiter_manuellement aux emplacements des variables.",
          "Lancez « Run once » et lisez la sortie dans la bulle du module.",
        ],
      },
    ],
    example: {
      title: "Rubrique 1 de la synthèse produite — S38",
      lines: [
        "1. Points d'attention pour la direction",
        "— Goma : camion GOM-03 en panne depuis le 15/09, 2 distributions reportées ; arbitrage demandé (location ou réparation).",
        "— Bukavu : chantier de réhabilitation des points d'eau suspendu 2 jours, facture du fournisseur de ciment du 02/09 non réglée ; validation du paiement demandée.",
        "— Uvira : rapport transmis en pièce jointe, intégré à la relecture par la coordination.",
      ],
    },
    result: "Une synthèse HTML de six rubriques, moins de 400 mots, produite à partir des seules fiches, avec mention explicite d'Uvira.",
    pitfall: "Agréger sans préciser la source du Text aggregator : Make regroupe alors les mauvais bundles, et la synthèse peut ne contenir qu'un seul rapport, répété.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 7',
    title: 'Créer le brouillon et archiver les blocages',
    intro: "Ce sont les étapes 5 et 7 du canevas. Le workflow s'arrête à un brouillon : l'envoi reste un geste humain. En parallèle, chaque blocage et chaque besoin rejoint le tableau T_Blocages, la mémoire du dispositif.",
    steps: [
      {
        title: 'Brouillon et notification',
        actions: [
          "Ajoutez le module Microsoft 365 Email de création de brouillon (« Create a Draft ») dans la boîte Rapports hebdo.",
          "À : Direction-HGL ; Cc : les 5 chefs d'équipe ; Objet : [SYNTHÈSE HEBDO] S{{semaine}} — {{dates}} — {{nb_recus}}/5 rapports ; Corps : la sortie HTML du second module OpenAI.",
          "Ajoutez un module d'envoi d'email vers Esther seule : « Brouillon S38 prêt à relire dans Rapports hebdo > Brouillons ».",
        ],
      },
      {
        title: 'Archivage dans T_Blocages',
        actions: [
          "Sur la route 1, après Parse JSON, ajoutez un « Iterator » sur le tableau blocages de la fiche.",
          "Ajoutez le module Microsoft 365 Excel d'ajout de ligne dans un tableau : classeur Suivi_blocages_2026.xlsx, tableau T_Blocages.",
          "Faites correspondre : Semaine, Équipe, Type = Blocage, Description, Depuis, Statut = Ouvert, Action demandée.",
          "Répétez avec un second Iterator pour le tableau besoins (Type = Besoin).",
        ],
      },
    ],
    example: {
      title: 'Résultat dans T_Blocages après la semaine 38',
      lines: [
        "S38 | Goma | Blocage | Camion GOM-03 en panne… | S38 | Ouvert | Arbitrer location ou réparation",
        "S38 | Sake | Blocage | Route Sake–Kirotshe coupée le 16/09 (pluies) | S38 | Ouvert | Non mentionné",
        "S38 | Bukavu | Blocage | Facture ciment du 02/09 non réglée… | S38 | Ouvert | Valider le paiement",
        "S38 | Goma | Besoin | 2 motos pour le suivi post-distribution | S38 | Ouvert | —",
      ],
    },
    result: "Un brouillon complet dans la boîte partagée, une notification à Esther, et une ligne par blocage ou besoin dans T_Blocages.",
    pitfall: "Utiliser l'action d'envoi au lieu de la création de brouillon « juste pour tester » : le test part réellement à la direction et aux cinq chefs d'équipe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 7',
    title: 'Gérer les erreurs, planifier et activer',
    intro: "C'est l'étape 8 du canevas. Un workflow qui échoue en silence cause plus de dégâts qu'une tâche restée manuelle : chaque module critique reçoit un gestionnaire d'erreurs, puis le scénario est planifié et activé.",
    steps: [
      {
        title: "Ajouter les gestionnaires d'erreurs",
        actions: [
          "Clic droit sur le premier module OpenAI > « Add error handler » > choisissez « Resume » avec une fiche de remplacement : statut = ERREUR_IA, l'équipe rejoint a_traiter_manuellement.",
          "Clic droit sur le second module OpenAI et sur la création de brouillon > « Add error handler » : envoi d'un email d'alerte à Esther et Olivier, puis « Break ».",
          "Corps de l'alerte : nom du scénario, module en échec, message d'erreur, heure.",
        ],
      },
      {
        title: 'Planifier et activer',
        actions: [
          "Cliquez sur l'horloge du module déclencheur > « Days of the week » > lundi, 10:00 ; vérifiez le fuseau horaire dans les paramètres du profil (Africa/Lubumbashi pour Goma).",
          "Faites de même pour le scénario de contrôle : lundi, 08:00.",
          "Laissez les deux scénarios désactivés jusqu'à la fin des tests (procédure 5) ; vous les activerez avec l'interrupteur du bas de l'écran.",
        ],
      },
    ],
    example: {
      title: "Alerte d'échec simulée pendant les tests",
      lines: [
        "Objet : [ALERTE WORKFLOW] HGL – Synthèse hebdo 10:00 — échec",
        "Module : OpenAI (compilation) — Erreur : quota du projet atteint — Heure : 10:00:41",
        "Action attendue : vérifier le budget du projet API, relancer le scénario avec « Run once », sinon synthèse manuelle.",
      ],
    },
    result: "Deux scénarios planifiés (lundi 08:00 et 10:00), aucun module critique sans gestionnaire d'erreurs, et une alerte testée qui arrive bien chez Esther et Olivier.",
    tip: "Ajoutez une règle humaine simple dans la documentation : « Pas de brouillon à 10:30 = ouvrir l'historique d'exécution du scénario ». Elle rattrape même les pannes que les alertes ne voient pas (scénario désactivé, connexion expirée).",
  },
  {
    type: 'comparison-table',
    title: 'Le même workflow dans Zapier et dans n8n',
    columns: ['Fonction', 'Make', 'Zapier', 'n8n'],
    rows: [
      ['Déclencheur horaire', 'Planification du module déclencheur', 'Schedule by Zapier', 'Schedule Trigger'],
      ['Lire les emails', 'Microsoft 365 Email (recherche)', 'Microsoft Outlook (recherche d\'email)', 'Microsoft Outlook (Get Many messages)'],
      ['Traiter chaque rapport', 'Automatique, un bundle par email', 'Looping by Zapier', 'Automatique par élément, ou Loop Over Items'],
      ['Appeler l\'IA', 'OpenAI / Anthropic Claude', 'ChatGPT (OpenAI) / Anthropic (Claude)', 'Nœud OpenAI / Anthropic, ou Basic LLM Chain'],
      ['Branches et filtres', 'Router + filtres', 'Paths / Filter by Zapier', 'IF / Switch'],
      ['Regrouper les fiches', 'Text / Array aggregator', 'Digest by Zapier ou Formatter', 'Aggregate'],
    ],
  },

  // ───────────── Procédure 5 — Tester et mettre en production ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Construire le jeu de test : un cas normal, des cas limites, un cas d’erreur',
    intro: "Ne validez jamais un workflow sur son seul cas nominal. Le minimum est trois cas (normal, incomplet, hors format) ; votre tableau de variabilité en fait apparaître six, que vous rejouez avec de vrais emails de l'échantillon.",
    steps: [
      {
        title: 'Préparer les cas',
        actions: [
          "Créez dans la boîte partagée un dossier « Tests workflow » et faites pointer temporairement Search Emails vers ce dossier.",
          "Transférez-y les emails de l'échantillon choisis pour chaque cas, avec l'objet normalisé.",
          "Pour chaque cas, écrivez le résultat attendu avant de lancer le test.",
        ],
      },
    ],
    table: {
      columns: ['Cas', 'Entrée', 'Résultat attendu'],
      rows: [
        ['T1 Normal', 'Goma S36, 2 pages structurées', 'COMPLET ; tous les chiffres recopiés à l\'identique'],
        ['T2 Incomplet', 'Sake S35, 62 mots, sans besoins', 'PARTIEL ; besoins « Non mentionné » ; aucune invention'],
        ['T3 Pièce jointe', 'Uvira S37, corps vide + fichier Word', 'PIECE_JOINTE ; mention en rubrique 5'],
        ['T4 Hors format', 'Email « [RAPPORT HEBDO] Re: réunion de mardi »', 'HORS_FORMAT ; absent de la synthèse, signalé'],
        ['T5 Manquant', 'Semaine avec 4 emails seulement', 'Alerte 08:00 ; « Kinshasa : rapport non reçu » en rubrique 5'],
        ['T6 Sensible', 'Uvira S36 (incident de sécurité)', 'alerte_sensible Oui ; aucun détail recopié ; email à Esther'],
      ],
    },
    result: "Un dossier de test et une grille de six cas dont le résultat attendu est écrit avant l'exécution.",
    pitfall: "Écrire le résultat attendu après avoir vu la sortie : on trouve alors toujours la sortie « acceptable ». Le test ne sert que si l'attendu est fixé d'avance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: "Exécuter les tests et lire l'historique d'exécution",
    intro: "Vous lancez chaque cas avec « Run once » et vous lisez ce que chaque module a reçu et produit. C'est la seule façon de savoir où une erreur naît : dans l'extraction, dans le routage ou dans la compilation.",
    steps: [
      {
        title: 'Exécuter',
        actions: [
          "Placez dans le dossier de test les emails d'un seul cas, cliquez sur « Run once ».",
          "Cliquez sur la bulle de chaque module : onglet des entrées (ce qu'il a reçu) et des sorties (ce qu'il a produit).",
          "Reportez le résultat obtenu dans la grille, colonne « Obtenu », et cochez Conforme ou Non conforme.",
        ],
      },
      {
        title: 'Corriger et rejouer',
        actions: [
          "Pour un cas non conforme : identifiez le module fautif, corrigez (prompt, filtre ou correspondance de champ), incrémentez la version.",
          "Rejouez TOUS les cas après chaque correction : une correction peut casser un cas qui passait.",
          "Consultez ensuite l'onglet « History » du scénario : chaque exécution y figure avec son statut et ses opérations consommées.",
        ],
      },
    ],
    example: {
      title: 'Résultats de la première série — 22/09/2026',
      lines: [
        "T1 ✔ — T2 ✔ (prompt v1.1) — T3 ✔ — T5 ✔",
        "T4 ✘ : l'email « Re: réunion » est classé PARTIEL, avec une avancée inventée à partir de l'ordre du jour.",
        "Correction : prompt extraction v1.2, ajout « Si le texte ne décrit pas les activités de la semaine écoulée, statut HORS_FORMAT ».",
        "T6 ✘ : le lieu de l'incident est recopié dans les blocages. Correction v1.2 : « Ne recopie ni lieu, ni date, ni personne liés à un incident ».",
        "Deuxième série (v1.2), 23/09/2026 : 6 cas sur 6 conformes ; 31 opérations consommées par exécution complète.",
      ],
    },
    result: "Une grille de six cas entièrement conforme avec la version v1.2 du prompt, et le nombre d'opérations réel par exécution.",
    tip: "Gardez le dossier « Tests workflow » et la grille : vous les rejouerez à chaque retest mensuel et après chaque modification. C'est votre test de non-régression.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Mesurer la fidélité de la synthèse contre vos synthèses manuelles',
    intro: "Les tests disent si le workflow fonctionne ; ils ne disent pas si la synthèse est aussi bonne que la vôtre. Vous la comparez à vos synthèses manuelles de référence, fait par fait, sur trois semaines passées.",
    steps: [
      {
        title: 'Compter les faits',
        actions: [
          "Rejouez le workflow sur les rapports des semaines 35, 36 et 37 (dossier de test).",
          "Dans chaque synthèse manuelle, numérotez les faits importants (un chiffre, un blocage, un besoin = un fait).",
          "Pour chaque fait, cochez s'il est présent dans la synthèse automatique, fidèle, déformé ou absent.",
          "Relevez séparément les faits présents dans la synthèse automatique mais absents de tous les rapports : les inventions.",
        ],
      },
      {
        title: 'Calculer et décider',
        actions: [
          "Couverture = faits présents et fidèles ÷ faits de référence.",
          "Critère de passage en rodage : 0 invention, 0 chiffre déformé, couverture d'au moins 90 %.",
        ],
      },
    ],
    table: {
      columns: ['Semaine', 'Faits de référence', 'Présents et fidèles', 'Absents', 'Inventions', 'Couverture'],
      rows: [
        ['S35', '27', '26', '1', '0', '96,3 %'],
        ['S36', '34', '31', '3 (pièce jointe Uvira)', '0', '91,2 %'],
        ['S37', '31', '29', '2 (pièce jointe Uvira)', '0', '93,5 %'],
        ['Total', '92', '86', '6', '0', '93,5 %'],
      ],
    },
    result: "Couverture de 93,5 % sur trois semaines, aucune invention, aucun chiffre déformé ; les 6 faits absents viennent tous des rapports en pièce jointe, signalés pour relecture. Le critère de passage en rodage est atteint.",
    pitfall: "Juger la synthèse sur sa fluidité : un texte bien écrit qui omet un blocage majeur est pire qu'un texte maladroit complet. Comptez les faits, ne vous fiez pas à l'impression.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Mettre en production supervisée et tenir le journal de rodage',
    intro: "Le workflow passe en conditions réelles, mais sous surveillance : pendant au moins quatre semaines, la relecture du brouillon est complète et chaque correction est notée. Ce journal décide de la suite.",
    steps: [
      {
        title: 'Activer',
        actions: [
          "Refaites pointer Search Emails vers le dossier « Rapports semaine ».",
          "Activez les deux scénarios avec l'interrupteur de planification ; notez la date d'activation.",
          "Prévenez la directrice : « À partir du 28/09, la synthèse est préparée avec assistance IA et relue par moi avant envoi. »",
        ],
      },
      {
        title: 'Chaque lundi de rodage',
        actions: [
          "Relisez le brouillon contre les rapports : chiffres, noms, blocages, rubrique 5.",
          "Notez dans le journal : rapports reçus, corrections apportées (type et nombre), durée de relecture, incident éventuel.",
          "Envoyez, puis mettez à jour la colonne Statut de T_Blocages (blocages résolus).",
        ],
      },
    ],
    table: {
      columns: ['Lundi', 'Rapports', 'Corrections', 'Relecture', 'Incident / décision'],
      rows: [
        ['28/09 (S39)', '5/5', '3 reformulations', '25 min', '—'],
        ['05/10 (S40)', '4/5 puis 5/5', '1 reformulation', '20 min', 'Uvira relancé à 08:05, reçu à 9 h 20'],
        ['12/10 (S41)', '5/5', '1 omission (besoin Bukavu)', '20 min', 'Prompt extraction v1.3 : « liste chaque besoin séparément »'],
        ['19/10 (S42)', '5/5', 'Aucune', '15 min', 'Retest des 6 cas en v1.3 : conformes'],
      ],
    },
    result: "Quatre semaines de rodage documentées : aucune erreur de chiffre, une omission corrigée à la source, relecture passée de 25 à 15 minutes. Décision du 26/10 avec la directrice : brouillon et envoi manuel maintenus (lectorat direction), revue dans 3 mois.",
    tip: "Le rodage ne sert pas à supprimer la relecture, mais à la rendre rapide et ciblée. Pour une sortie destinée à la direction ou à l'extérieur, garder le clic humain sur « Envoyer » coûte 15 minutes et protège la crédibilité de toute la coordination.",
  },

  // ───────────── Procédure 6 — Agent IA avec outils et mémoire ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: "Écrire la fiche de mission de l'agent : objectif, outils, limites",
    intro: "Le workflow produit chaque semaine des lignes dans T_Blocages. Esther veut maintenant pouvoir demander : « Quels blocages traînent depuis trois semaines ? Prépare les relances. » Le chemin change selon la question : c'est un cas pour un agent. Avant de construire, vous écrivez sa fiche de mission.",
    steps: [
      {
        title: 'Rédiger la fiche',
        actions: [
          "Objectif : une phrase qui dit ce que l'agent accomplit, pour qui.",
          "Outils : la liste fermée des actions qu'il peut appeler, chacune avec son périmètre (lecture seule, écriture limitée, brouillon seulement).",
          "Mémoire : ce qu'il doit retenir dans la conversation et où se trouve la mémoire durable.",
          "Interdits : ce qu'il ne doit jamais faire, et qu'on rend impossible en ne lui donnant pas l'outil correspondant.",
          "Contrôle humain : qui valide quoi avant tout effet visible.",
        ],
      },
    ],
    example: {
      title: "Fiche de mission — agent « Suivi des blocages » (12/10/2026)",
      lines: [
        "Objectif : répondre aux questions de la coordinatrice sur les blocages et besoins archivés, et préparer les relances en brouillon.",
        "Outil 1 « Lire_blocages » : lecture seule de T_Blocages. Outil 2 « Lire_contacts » : lecture seule de T_Contacts. Outil 3 « Creer_brouillon_relance » : création d'un brouillon dans la boîte Rapports hebdo.",
        "Mémoire : les 10 derniers échanges de la conversation ; mémoire durable = T_Blocages (alimenté par le workflow).",
        "Interdits : envoyer un email, modifier ou supprimer une ligne du tableau — aucun outil ne le permet.",
        "Contrôle humain : Esther relit et envoie elle-même chaque relance.",
      ],
    },
    result: "Une fiche de mission d'une demi-page qui sert à la fois de cahier des charges, de base du message système et de section de la documentation.",
    pitfall: "Donner à l'agent l'accès complet à la boîte email « pour qu'il puisse tout faire » : un agent choisit lui-même ses actions ; la seule protection fiable est de ne pas lui donner l'outil dangereux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Créer le workflow n8n, le nœud AI Agent et son modèle',
    intro: "L'agent est construit dans l'instance n8n auto-hébergée par Olivier, pour que le tableau de suivi ne transite pas par une plateforme tierce supplémentaire. Dans n8n, un agent est un nœud « AI Agent » auquel on branche un modèle, une mémoire et des outils.",
    steps: [
      {
        title: 'Créer le workflow et le déclencheur',
        actions: [
          "Dans n8n, cliquez sur « Create Workflow », nommez-le « HGL – Agent suivi des blocages ».",
          "Ajoutez le déclencheur « When chat message received » (Chat Trigger) : il ouvre une fenêtre de discussion pour parler à l'agent.",
          "Ajoutez à sa suite le nœud « AI Agent ».",
        ],
      },
      {
        title: 'Brancher le modèle',
        actions: [
          "Sous le nœud AI Agent, cliquez sur le connecteur « Chat Model » et choisissez « OpenAI Chat Model » (ou « Anthropic Chat Model »).",
          "Créez l'identifiant (Credential) avec une clé API d'un projet dédié « Agent_blocages_HGL », plafonné comme à la procédure 3.",
          "Choisissez le modèle validé par l'organisation et une température basse.",
        ],
      },
    ],
    example: {
      title: 'Structure du workflow à ce stade',
      lines: [
        "[When chat message received] → [AI Agent]",
        "                                   └─ Chat Model : OpenAI Chat Model (credential « OpenAI – Agent blocages »)",
        "                                   └─ Memory : (vide pour l'instant)",
        "                                   └─ Tool : (vide pour l'instant)",
      ],
    },
    result: "Un workflow n8n avec un agent relié à un modèle ; en ouvrant le chat et en écrivant « Bonjour », l'agent répond, mais il n'a encore ni outil ni mémoire.",
    tip: "Une clé API distincte par workflow ou agent permet de suivre les coûts séparément et de couper un seul usage en cas de problème, sans arrêter les autres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: "Donner à l'agent ses trois outils, au moindre privilège",
    intro: "Un outil est une action que l'agent choisit d'appeler. Chaque outil a un nom et une description : c'est en les lisant que le modèle décide quand s'en servir. Une description floue produit des appels au mauvais moment.",
    steps: [
      {
        title: 'Ajouter les outils de lecture',
        actions: [
          "Sous le nœud AI Agent, cliquez sur le connecteur « Tool » et ajoutez l'outil Microsoft Excel 365 ; opération de lecture des lignes d'un tableau ; classeur Suivi_blocages_2026.xlsx, tableau T_Blocages.",
          "Nommez-le Lire_blocages ; description : « Renvoie toutes les lignes du tableau des blocages et besoins : semaine, équipe, type, description, depuis, statut, action demandée. »",
          "Ajoutez de la même façon Lire_contacts sur T_Contacts ; description : « Renvoie le responsable et l'email à relancer pour chaque sujet (véhicules, paiements, accès, sécurité). »",
        ],
      },
      {
        title: "Ajouter l'outil d'action limitée",
        actions: [
          "Ajoutez l'outil Microsoft Outlook, opération de création de brouillon, avec une connexion limitée à la boîte Rapports hebdo.",
          "Nommez-le Creer_brouillon_relance ; description : « Crée un brouillon de relance (destinataire, objet, corps). N'envoie jamais. »",
          "Vérifiez qu'aucun outil d'envoi, de mise à jour ou de suppression n'est branché.",
        ],
      },
    ],
    table: {
      columns: ['Outil', 'Service et opération', 'Peut…', 'Ne peut pas…'],
      rows: [
        ['Lire_blocages', 'Excel 365 — lecture des lignes de T_Blocages', 'Lire', 'Modifier, supprimer'],
        ['Lire_contacts', 'Excel 365 — lecture des lignes de T_Contacts', 'Lire', 'Modifier, supprimer'],
        ['Creer_brouillon_relance', 'Outlook — création de brouillon', 'Créer un brouillon', 'Envoyer, lire la boîte'],
      ],
    },
    result: "Trois outils nommés et décrits, dont deux en lecture seule et un qui ne peut produire qu'un brouillon : aucune action de l'agent n'est irréversible.",
    pitfall: "Laisser la description d'outil par défaut : face à « Microsoft Excel 365 », le modèle ne sait pas qu'il s'agit du tableau des blocages et répond de mémoire au lieu de lire les données.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Ajouter la mémoire et écrire le message système',
    intro: "La mémoire de conversation permet à l'agent de comprendre « et pour Goma, ajoute que… » sans que vous répétiez tout. Le message système, lui, est le prompt RCCF permanent de l'agent : il fixe son rôle, ses règles et sa façon de répondre.",
    steps: [
      {
        title: 'Brancher la mémoire',
        actions: [
          "Sous le nœud AI Agent, cliquez sur le connecteur « Memory » et choisissez « Simple Memory » (mémoire à fenêtre glissante).",
          "Réglez la longueur de la fenêtre de contexte à 10 échanges.",
          "Rappelez-vous la différence : cette mémoire s'efface avec la session ; la mémoire durable, d'une semaine à l'autre, c'est T_Blocages.",
        ],
      },
      {
        title: 'Écrire le message système et les garde-fous',
        actions: [
          "Dans le nœud AI Agent, ouvrez les options et ajoutez « System Message » ; collez le texte ci-dessous.",
          "Dans les options, réglez le nombre maximal d'itérations (Max Iterations) à 5 : l'agent ne peut pas boucler indéfiniment.",
          "Activez le renvoi des étapes intermédiaires (Return Intermediate Steps) pour voir quels outils il a appelés.",
        ],
      },
    ],
    example: {
      title: "Message système de l'agent — fil rouge (à copier)",
      lines: [
        "Rôle : tu es l'assistant de suivi des blocages de la coordination des opérations d'Horizon Grands Lacs.",
        "Règles : avant de répondre sur un blocage, appelle toujours Lire_blocages ; ne réponds jamais de mémoire sur les données. Semaine en cours : {{ numéro de semaine du jour }}.",
        "Pour une relance, appelle Lire_contacts pour trouver le destinataire, puis Creer_brouillon_relance. Tu ne peux pas envoyer : dis-le si on te le demande.",
        "Contraintes : recopie les descriptions à l'identique ; si une information manque dans le tableau, dis-le ; ne traite aucun sujet de sécurité ou RH.",
        "Format : liste courte (équipe — blocage — depuis — nombre de semaines), puis les brouillons créés avec leur destinataire.",
      ],
    },
    result: "Un agent complet : modèle, mémoire de 10 échanges, trois outils, message système et limite de 5 itérations.",
    tip: "Écrivez dans le message système l'ordre d'appel des outils attendu (« appelle d'abord… puis… ») : l'agent garde son autonomie, mais ses choix deviennent prévisibles et vérifiables.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: "Tester l'agent, lire ses étapes et vérifier ses limites",
    intro: "Un agent se teste comme un workflow, avec en plus deux vérifications : quels outils il a appelés et dans quel ordre, et ce qu'il fait quand on lui demande ce qu'il ne doit pas faire.",
    steps: [
      {
        title: 'Test nominal et test de mémoire',
        actions: [
          "Ouvrez le chat du workflow et posez la question métier réelle.",
          "Ouvrez le détail de l'exécution : vérifiez la séquence des appels d'outils et comparez la réponse au tableau T_Blocages.",
          "Posez une question de suivi qui n'a de sens qu'avec la mémoire (« et pour celui de Goma… »).",
          "Ouvrez la boîte Rapports hebdo > Brouillons : vérifiez destinataires et contenu.",
        ],
      },
      {
        title: 'Tests de limites',
        actions: [
          "Demandez « Envoie directement les relances » : l'agent doit répondre qu'il ne peut pas envoyer.",
          "Demandez un blocage qui n'existe pas (« Où en est le forage de Rutshuru ? ») : il doit dire qu'il ne le trouve pas, sans inventer.",
          "Consignez les résultats dans la grille de tests, comme pour le workflow ; activez le workflow n8n seulement ensuite.",
        ],
      },
    ],
    example: {
      title: "Session de test du lundi 19/10/2026",
      lines: [
        "Esther : « Quels blocages sont ouverts depuis au moins 3 semaines ? Prépare une relance pour chacun. »",
        "Étapes : Lire_blocages → 2 blocages ouverts depuis S38 ou avant : Goma, camion GOM-03 (S38, 5 semaines) ; Uvira, accès RN5 restreint (S36, 7 semaines) → Lire_contacts → Creer_brouillon_relance × 2.",
        "Réponse : liste des 2 blocages + « 2 brouillons créés : Patrick Mumbere (véhicules) et point focal accès (Uvira). »",
        "Esther : « Pour celui de Goma, ajoute que la distribution du 22/10 est menacée. » → l'agent met à jour le brouillon Goma (mémoire ✔).",
        "Esther : « Envoie-les. » → « Je ne peux pas envoyer d'email ; les 2 brouillons sont dans Rapports hebdo > Brouillons. » ✔",
      ],
    },
    result: "Un agent qui lit les données avant de répondre, garde le fil de la conversation, prépare des relances en brouillon et refuse ce qui sort de son périmètre. Esther relit et envoie les deux relances à 10 h 45.",
    pitfall: "Valider l'agent sur une réponse qui « a l'air juste » sans ouvrir le détail de l'exécution : s'il n'a pas appelé Lire_blocages, il a répondu de mémoire, et il se trompera la semaine suivante.",
  },

  // ───────────── Procédure 7 — Documenter et maintenir ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Remplir les sections 1 et 2 de la fiche — Objectif et Déclencheur',
    intro: "Le gabarit procedure-documentation-automatisation-ia.docx tient en une à deux pages et compte sept sections, chacune suivie d'une phrase d'aide et de lignes vides à remplir. Il permet à un collègue de comprendre, reprendre et corriger le workflow en votre absence.",
    steps: [
      {
        title: 'Préparer le fichier',
        actions: [
          "Copiez le gabarit dans « 03_Documentation » : 2026-10-23_doc_synthese_hebdo_v1.docx.",
          "Écrivez sous chaque phrase d'aide, dans les lignes vides prévues ; supprimez la phrase d'aide une fois la section remplie si vous manquez de place.",
        ],
      },
      {
        title: 'Rédiger les sections 1 et 2',
        actions: [
          "Section 1 « Objectif de l'automatisation » : quelle tâche est remplacée, quel problème est résolu, avec le gain mesuré.",
          "Section 2 « Déclencheur » : l'événement exact, avec dossier, critère d'objet, jours, heures et fuseau horaire.",
        ],
      },
    ],
    example: {
      title: 'Sections 1 et 2 — version finale',
      lines: [
        "1. Remplace la synthèse manuelle des 5 rapports hebdomadaires d'équipes (2 h chaque lundi). Produit un brouillon de synthèse en 6 rubriques pour la direction pays, archive les blocages et besoins, signale les rapports manquants. Gain mesuré en rodage : 1 h 45 par semaine ; synthèse disponible à 10 h au lieu de 11 h 40.",
        "2. Scénario « Contrôle réception » : lundi 08:00. Scénario « Synthèse hebdo » : lundi 10:00 (Africa/Lubumbashi). Les deux lisent la boîte partagée Rapports hebdo, dossier Rapports semaine, emails reçus depuis le vendredi 00:00, objet commençant par [RAPPORT HEBDO] (règle Outlook « Tri rapports hebdo »).",
      ],
    },
    result: "Deux sections qu'une personne extérieure au projet comprend sans explication orale.",
    pitfall: "Écrire « se déclenche le lundi matin » : le jour où le scénario ne tourne pas, votre suppléante ne sait ni à quelle heure vérifier, ni quel dossier regarder.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Remplir les sections 3 et 4 — Étapes et outils, Sources de données',
    intro: "La section 3 résume la séquence déclencheur → traitement IA → action de sortie avec l'outil de chaque étape ; la section 4 dit d'où viennent les informations et qui y a accès. Reprenez le canevas : ne réécrivez pas, résumez.",
    steps: [
      {
        title: 'Section 3',
        actions: [
          "Une ligne par étape du canevas : numéro, action, outil, version du prompt le cas échéant.",
          "Indiquez où se trouvent les éléments de configuration : noms exacts des scénarios et du workflow n8n, emplacement des prompts versionnés.",
        ],
      },
      {
        title: 'Section 4',
        actions: [
          "Listez chaque source : boîte, dossier, classeur, tableau.",
          "Pour chacune : qui y a accès, et quelle connexion de la plateforme l'utilise.",
          "Ajoutez la règle de données : ce qui ne doit jamais y figurer.",
        ],
      },
    ],
    example: {
      title: 'Sections 3 et 4 — version finale (extraits)',
      lines: [
        "3. 08:00 : Make recherche les emails, compare aux 5 équipes, alerte si manquant. 10:00 : recherche → extraction OpenAI par rapport (prompt v1.3, JSON) → routage des cas limites → compilation (prompt synthèse v1.0) → brouillon Outlook + notification → archivage dans T_Blocages → alertes d'erreur. Agent n8n « HGL – Agent suivi des blocages » : à la demande. Prompts : SharePoint Coordination > Workflow_Synthese_Hebdo > 02_Conception.",
        "4. Boîte partagée Rapports hebdo (accès : E. Masika, A. Kahindo ; connexion « M365 Email – Rapports hebdo »). Classeur Suivi_blocages_2026.xlsx, tableaux T_Blocages et T_Contacts (accès : coordination ; connexions Excel Make et n8n). Règle : aucun nom de bénéficiaire, aucun détail d'incident de sécurité.",
      ],
    },
    result: "Une section 3 qui permet de retrouver chaque élément du dispositif en moins de deux minutes, et une section 4 qui dit qui voit quelles données.",
    tip: "Collez une capture d'écran du scénario Make en annexe hors des 2 pages : la carte visuelle des bulles vaut mieux qu'un long paragraphe pour un repreneur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Remplir les sections 5 et 6 — Vérification humaine, Maintenance et test',
    intro: "La section 5 liste les étapes où un humain valide avant un effet irréversible. La section 6 contient deux petits tableaux à deux cases : « Responsable de la maintenance (nom, fonction) » / « Fréquence de retest prévue », puis « Date du dernier test effectué » / « Résultat du dernier test ». Écrivez sous chaque intitulé, dans sa case.",
    steps: [
      {
        title: 'Section 5',
        actions: [
          "Reprenez les étapes marquées Oui dans le canevas : numéro, qui valide, ce qui est vérifié, ce qui se passe sans validation.",
          "Ajoutez la règle de l'agent : relances en brouillon uniquement.",
        ],
      },
      {
        title: 'Section 6',
        actions: [
          "Responsable : nom et fonction du titulaire, puis de la suppléante.",
          "Fréquence de retest : un rythme fixe ET les événements qui imposent un retest immédiat.",
          "Dernier test : la date et le résultat chiffré (cas passés, inventions constatées).",
        ],
      },
    ],
    table: {
      columns: ['Case de la section 6', 'Contenu saisi — fil rouge'],
      rows: [
        ['Responsable de la maintenance (nom, fonction)', 'Esther Masika, coordinatrice des opérations ; suppléante : Amani Kahindo, chargée administrative et logistique ; appui technique : Olivier Kasongo'],
        ['Fréquence de retest prévue', 'Mensuelle (premier lundi du mois, 6 cas du dossier Tests workflow) + immédiate après tout changement de format des rapports, de modèle, de prompt ou de clé API'],
        ['Date du dernier test effectué', '19/10/2026'],
        ['Résultat du dernier test', 'Conforme : 6 cas sur 6 (prompt v1.3), 0 invention ; agent : 4 tests sur 4 conformes'],
      ],
    },
    example: {
      title: 'Section 5 — version finale',
      lines: [
        "Étape 2 : rapports manquants — Esther (ou Amani) décide de la relance avant 10:00.",
        "Étape 5 : brouillon — relecture des chiffres, noms, blocages et de la rubrique 5 (15 à 25 min).",
        "Étape 6 : envoi à Direction-HGL — uniquement par clic humain ; aucun module d'envoi actif. Agent : brouillons de relance uniquement, envoyés par la coordination.",
      ],
    },
    result: "Sections 5 et 6 remplies : chaque contrôle humain a un titulaire, et la fiche dit quand le workflow a été testé pour la dernière fois et avec quel résultat.",
    pitfall: "Laisser la case « Date du dernier test » à la date de création : six mois plus tard, personne ne sait si le workflow fonctionne encore, ou s'il fonctionnait seulement le jour où il a été construit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Remplir la section 7 — Limites connues — et signer la fiche',
    intro: "La section 7 est celle que l'on est tenté de laisser vide, et celle qui sert le plus : elle dit à votre successeur dans quels cas ne pas faire confiance au workflow. Le dernier tableau « Rédigé par (nom, fonction) » / « Date » clôt la fiche.",
    steps: [
      {
        title: 'Lister les limites',
        actions: [
          "Reprenez la grille de tests, le journal de rodage et les alertes reçues : chaque cas non traité automatiquement est une limite.",
          "Ajoutez les dépendances externes qui peuvent casser le workflow : format des rapports, clé API, connexions, quotas.",
          "Pour chaque limite, écrivez la conduite à tenir en une phrase.",
        ],
      },
      {
        title: 'Clore',
        actions: [
          "Remplissez « Rédigé par (nom, fonction) » et « Date ».",
          "Vérifiez la longueur : 2 pages maximum ; captures et grille de tests en annexe.",
          "Enregistrez en .docx et en PDF dans « 03_Documentation » et dans le site SharePoint de la coordination.",
        ],
      },
    ],
    example: {
      title: 'Section 7 — version finale',
      lines: [
        "Rapports en pièce jointe : non lus par l'IA, signalés en rubrique 5 ; à intégrer à la relecture.",
        "Incidents de sécurité et sujets RH : volontairement exclus, signalés à la coordination sans détail.",
        "Changement de format des rapports (nouveau modèle, autre langue) : retester avant le lundi suivant.",
        "Expiration ou rotation de la clé API (prochaine : 14/03/2027), reconnexion Microsoft demandée, quota Make atteint : alerte d'erreur, synthèse manuelle ce lundi-là.",
        "Rédigé par : Esther Masika, coordinatrice des opérations — 23/10/2026.",
      ],
    },
    result: "Une fiche de documentation complète en 2 pages, signée et datée, enregistrée là où la suppléante la trouvera.",
    tip: "Une limite écrite est une limite maîtrisée. Une limite découverte par la directrice dans une synthèse erronée est un incident.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Faire le test de reprise et planifier la maintenance',
    intro: "Une documentation n'est validée que lorsqu'une autre personne a fait tourner le workflow avec elle seule. Vous organisez ce test, puis vous inscrivez la maintenance dans les calendriers.",
    steps: [
      {
        title: 'Test de reprise',
        actions: [
          "Remettez la fiche à la suppléante, sans explication orale.",
          "Demandez-lui de répondre par écrit à cinq questions : où est le scénario ? comment le relancer ? que faire en cas d'alerte ? où sont les prompts ? qui appeler pour la clé API ?",
          "Faites-lui conduire seule un lundi complet (contrôle 08:00, relecture, envoi, mise à jour des statuts).",
          "Complétez la fiche avec chaque point où elle a hésité.",
        ],
      },
      {
        title: 'Maintenance',
        actions: [
          "Créez des rappels récurrents : retest mensuel, contrôle de la consommation (opérations Make, budget API), rotation de la clé.",
          "Après chaque modification, mettez à jour la version des prompts, la date du dernier test et la section concernée de la fiche.",
        ],
      },
    ],
    example: {
      title: 'Test de reprise — semaine du 2 au 6 novembre 2026',
      lines: [
        "Esther en mission à Kinshasa ; Amani conduit seule la synthèse du lundi 02/11 (S44).",
        "Réponses aux 5 questions : 5/5 correctes. Une hésitation : où mettre à jour la colonne Statut → ajouté à la section 5.",
        "Brouillon relu en 25 min, envoyé à 10 h 40 ; 1 rapport en pièce jointe (Uvira) intégré à la main.",
        "Rappels créés : retest le premier lundi du mois (prochain : 07/12/2026), revue des coûts mensuelle, rotation de clé le 14/03/2027.",
      ],
    },
    result: "Une reprise réussie par une collègue non développeuse, une fiche corrigée en conséquence et un calendrier de maintenance actif.",
    pitfall: "Considérer qu'un workflow qui fonctionne fonctionnera encore : un changement de format côté terrain, une mise à jour d'API ou une clé expirée peuvent le casser en silence après des mois sans problème.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — De la tâche manuelle au canevas validé',
    scenario: "Rappel du cas (03-exercices) : cinq chefs d'équipe envoient chaque vendredi un rapport en format libre ; la coordinatrice passe deux heures chaque lundi à en tirer une synthèse pour la direction. Voici le raisonnement complet d'Esther, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Qualification', body: "Tâche hebdomadaire, entrée par email, sortie descriptible, pas de jugement sensible à chaque occurrence (incidents exclus) : workflow avec brouillon validé.", result: '92 h/an ; seuil de rentabilité ≈ 10 semaines.' },
      { title: 'Cartographie et échantillon', body: "5 micro-étapes chronométrées (2 h 00) ; 20 rapports analysés : 15 % en pièce jointe, 35 % sans rubrique besoins, 20 % en retard ou absents, 1 incident de sécurité." },
      { title: 'Déclencheur', body: "Pas « un rapport arrive » : contrôle de réception lundi 08:00, synthèse groupée lundi 10:00, dossier dédié alimenté par une règle sur l'objet [RAPPORT HEBDO] et les 5 expéditeurs." },
      { title: 'Instructions IA', body: "Deux prompts RCCF figés : extraction par rapport en JSON (Non mentionné, PIECE_JOINTE, HORS_FORMAT, alerte_sensible), puis compilation en 6 rubriques fixes, 400 mots maximum, rapports manquants mentionnés." },
      { title: 'Canevas', body: "8 étapes ; 3 points de vérification humaine (2 rapports manquants, 5 brouillon, 6 envoi) ; évaluation des risques complétée pour les étapes 3, 7 et 8.", result: 'Canevas validé par la directrice pays le 11/09/2026.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — Construction, tests et rodage',
    scenario: "Le canevas est validé. Esther, avec l'appui d'Olivier pour les comptes, construit et teste le dispositif du 14 septembre au 19 octobre 2026.",
    steps: [
      { title: 'Intégration', body: "Make retenu (branches, boucles, non-développeurs) ; boîte partagée dédiée ; clé API sur projet dédié plafonné à 10 USD/mois ; trois connexions au moindre privilège. Coût estimé : moins de 0,50 USD/mois d'API, ≈ 130 opérations Make par mois." },
      { title: 'Scénarios', body: "« Contrôle réception 08:00 » (agrégation, comparaison aux 5 équipes, alerte filtrée) et « Synthèse hebdo 10:00 » (recherche → OpenAI extraction → Parse JSON → Router → agrégation → OpenAI compilation → brouillon + notification → archivage T_Blocages), gestionnaires d'erreurs sur les modules critiques." },
      { title: 'Tests', body: "6 cas écrits avant exécution ; 2 non conformes en première série (hors format, détail d'incident recopié) ; prompt v1.2 ; 6/6 conformes ; 31 opérations par exécution." },
      { title: 'Fidélité', body: "92 faits de référence sur 3 semaines : 86 présents et fidèles (93,5 %), 0 invention ; les 6 absents viennent des pièces jointes signalées." },
      { title: 'Rodage', body: "4 lundis supervisés : 0 erreur de chiffre, 1 omission corrigée (v1.3), relecture de 25 à 15 minutes. Décision : brouillon et envoi manuel maintenus pour la direction." },
    ],
    table: {
      columns: ['Indicateur', 'Avant', 'Après rodage'],
      rows: [
        ['Temps de la coordinatrice par lundi', '2 h 00', '15 à 25 min'],
        ['Heure de disponibilité de la synthèse', '11 h 40', '10 h 05 (brouillon), envoi vers 10 h 30'],
        ['Rapports manquants détectés avant la synthèse', 'Au fil de la lecture', 'À 08:01, par alerte'],
        ['Historique des blocages', 'Aucun', 'T_Blocages, une ligne par blocage et par semaine'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — L’agent et la documentation remise',
    scenario: "Le workflow alimente T_Blocages chaque semaine. Esther ajoute l'agent de suivi, puis remet la documentation qui permettra à Amani de tout reprendre en son absence.",
    steps: [
      { title: 'Agent « Suivi des blocages »', body: "n8n auto-hébergé ; nœud AI Agent ; modèle sur clé dédiée ; Simple Memory (10 échanges) ; 3 outils : Lire_blocages, Lire_contacts (lecture seule), Creer_brouillon_relance (brouillon seulement) ; Max Iterations 5 ; message système RCCF." },
      { title: 'Tests de l’agent', body: "Question réelle : 2 blocages de plus de 3 semaines trouvés (Goma S38, Uvira S36), 2 brouillons créés ; mémoire vérifiée sur une question de suivi ; refus d'envoyer ; refus d'inventer un blocage inexistant." },
      { title: 'Fiche de documentation', body: "Sections 1 à 7 remplies en 2 pages : objectif et gain, déclencheurs précis, séquence et emplacements, sources et accès, 3 contrôles humains, responsable + suppléante + retest mensuel + dernier test du 19/10/2026 (6/6), limites et conduite à tenir. Rédigé par Esther Masika le 23/10/2026." },
      { title: 'Reprise', body: "Lundi 02/11/2026 : Amani conduit seule la synthèse avec la fiche, 5 questions sur 5 correctes, une précision ajoutée à la fiche." },
    ],
    result: "Livrables remis : canevas complété (2 onglets), deux scénarios Make en production supervisée, agent n8n testé, grille de tests, journal de rodage, fiche de documentation signée et testée par la suppléante.",
    tip: "Gardez ce corrigé comme modèle : pour votre prochaine tâche récurrente (rapport mensuel, tri des demandes, suivi de factures), seuls les noms, les sources et les prompts changeront ; la séquence qualifier → concevoir → connecter → construire → tester → documenter reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Concevoir et documenter le workflow du rapport hebdomadaire',
    instructions: "Appliquez les procédures 1, 2 et 7 au cas du module (03-exercices) dans votre propre contexte : vos équipes, vos outils, vos destinataires. Ne recopiez pas le corrigé : adaptez chaque choix et justifiez-le. La construction sur une plateforme est facultative pour cet exercice, la conception et la documentation sont obligatoires.",
    steps: [
      {
        title: 'Canevas de conception',
        actions: [
          "Ouvrez canevas-conception-workflow-agent-ia.xlsx, onglet « Canevas Workflow » : détaillez chaque étape (colonnes A à F) depuis la réception des cinq rapports jusqu'à l'envoi du résumé structuré à la liste de diffusion de direction.",
          "Précisez comment le workflow gère cinq emails arrivés à des heures différentes et à partir de quand il lance la synthèse groupée.",
          "Écrivez en colonne C la version de vos prompts, et rédigez-les (extraction et synthèse) avec la conduite à tenir pour un rapport manquant, très court, très long ou en pièce jointe.",
          "Onglet « Évaluation des risques » : vérifiez les lignes préremplies, ajoutez une ligne par étape à risque, vérifiez le total en C13.",
        ],
      },
      {
        title: 'Fiche de documentation',
        actions: [
          "Remplissez les sections 1 à 7 de procedure-documentation-automatisation-ia.docx.",
          "Précisez obligatoirement : ce qui se passe si un chef d'équipe n'envoie pas son rapport à temps, qui est responsable de la maintenance, et selon quelle fréquence le workflow est retesté.",
          "Faites lire la fiche à un collègue et notez ses questions.",
        ],
      },
    ],
    deliverable: "Les deux fichiers complétés : le canevas (2 onglets) et la fiche de documentation, qui ne dépasse pas 2 pages.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Automatiser le registre des proformas reçues",
    instructions: "Patrick Mumbere, responsable achats d'Horizon Grands Lacs, reçoit environ 15 factures proformas par semaine par email, qu'il recopie à la main dans un registre Excel (Date, Fournisseur, Objet, Montant, Devise, Validité) avant d'accuser réception. Concevez et construisez le workflow avec Zapier, la plateforme la plus simple pour un premier workflow linéaire.",
    steps: [
      {
        title: 'Concevoir',
        actions: [
          "Qualifiez la tâche (procédure 1, étape 1) et calculez le seuil de rentabilité avec 4 minutes par proforma.",
          "Choisissez un déclencheur par événement (un email = une ligne) et justifiez ce choix par rapport au fil rouge.",
          "Rédigez un prompt d'extraction JSON qui renvoie « Non mentionné » pour un champ absent et un statut PIECE_JOINTE si la proforma n'est qu'un PDF joint.",
          "Placez les points de vérification humaine : l'accusé de réception part-il automatiquement ou en brouillon ? Justifiez.",
        ],
      },
      {
        title: 'Construire et tester',
        actions: [
          "Dans Zapier : déclencheur Microsoft Outlook (nouvel email dans un dossier) → action ChatGPT (OpenAI) → action Excel (ajout de ligne) → action Outlook (brouillon d'accusé de réception).",
          "Testez sur 3 cas minimum : proforma complète dans le corps, proforma sans date de validité, email d'un fournisseur qui n'est pas une proforma.",
        ],
      },
    ],
    tip: "Points de contrôle : environ 15 × 4 min = 1 h par semaine ; un montant ne doit jamais être arrondi ni converti par l'IA ; un champ absent doit apparaître « Non mentionné » dans le registre, jamais une valeur plausible.",
    deliverable: "Un canevas de 4 à 5 étapes, le Zap fonctionnel avec sa grille de 3 tests, et une fiche de documentation d'une page.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre tâche récurrente',
    instructions: "Choisissez dans votre travail une tâche qui revient au moins une fois par semaine (rapport, tri d'emails, suivi de demandes, compilation de données) et appliquez le pipeline complet du module, dans le respect des règles d'usage des données de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Fiche de qualification avec le test des 30 secondes et le seuil de rentabilité, validée par votre responsable.",
          "Carte chronométrée de la tâche manuelle et échantillon de 10 à 20 entrées réelles.",
          "Choix écrit de la plateforme (Make, Zapier ou n8n) selon les quatre critères.",
        ],
      },
      {
        title: 'Exécuter',
        actions: [
          "Canevas complété (2 onglets) et prompts RCCF versionnés.",
          "Workflow construit, avec au moins un point de vérification humaine et un gestionnaire d'erreurs.",
          "Grille de tests (au moins un cas normal, un cas limite, un cas d'erreur) et deux semaines de rodage documentées.",
          "Fiche de documentation complétée et test de reprise par un collègue.",
        ],
      },
    ],
    deliverable: "Le canevas, le workflow en rodage, la grille de tests, le journal de rodage et la fiche de documentation de 2 pages maximum.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre déclencheur est un critère technique vérifiable (dossier, objet, expéditeurs, jour, heure), et la synthèse est lancée à une heure fixe, pas à l'arrivée de chaque rapport.",
      "Le cas du rapport manquant est traité explicitement : détection avant la synthèse, décision humaine de relance, mention dans la synthèse.",
      "Votre prompt d'extraction dit quoi faire si une rubrique manque (« Non mentionné »), si le rapport est en pièce jointe, hors format ou contient une donnée sensible, et impose une sortie structurée.",
      "Votre canevas compte une ligne par étape avec les six colonnes renseignées, et la colonne E contient exactement Oui ou Non.",
      "Au moins le brouillon et l'envoi à la direction sont marqués Oui, avec une justification en colonne F.",
      "L'onglet « Évaluation des risques » explique aussi pourquoi les étapes sans contrôle humain sont acceptables, et C13 affiche le bon total.",
      "Votre fiche de documentation précise le responsable de la maintenance, la fréquence de retest, la date et le résultat du dernier test.",
      "La section « Limites connues » contient au moins trois limites, chacune avec sa conduite à tenir.",
      "La fiche tient en 2 pages maximum et un collègue a pu répondre seul aux questions « où, comment relancer, que faire en cas d'alerte ».",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Déployer un workflow sans l'avoir testé sur des cas limites (rapport vide, format inattendu, pièce jointe au lieu du texte) : il échoue en silence dès la première semaine réelle. Écrivez au moins trois cas, dont un limite et un d'erreur, avant d'activer.",
      "Automatiser une tâche qui exige un jugement humain sensible (évaluation de performance, conflit d'équipe, communication de crise) : l'IA prépare un brouillon, l'humain décide et signe.",
      "Ne documenter le workflow nulle part : il devient une boîte noire dès que son concepteur change de poste. Remplissez la fiche et faites un test de reprise.",
      "Confondre un workflow qui fonctionne avec un workflow qui fonctionne encore : un changement de format, une mise à jour d'API ou une clé expirée le cassent sans bruit. Notez la date du dernier test et retestez chaque mois.",
      "Donner à l'IA un accès plus large que nécessaire « pour simplifier la configuration » : connectez un dossier, un tableau, une action de brouillon, jamais une boîte entière.",
      "Écrire un déclencheur qu'une machine ne peut pas juger (« quand le rapport est prêt ») : reformulez en critère observable.",
      "Laisser l'IA combler les vides : sans règle « Non mentionné », elle invente des besoins plausibles que la direction prendra pour des faits.",
      "Tester avec l'action d'envoi « juste une fois » : utilisez toujours la création de brouillon pendant la construction.",
      "Faire circuler la clé API par email, ou la laisser sans plafond de dépense : rangez-la dans le coffre de l'organisation et plafonnez le projet.",
      "Valider un agent sur une réponse qui « a l'air juste » sans regarder quels outils il a appelés : ouvrez le détail de l'exécution.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez qualifié une tâche récurrente avec le test des 30 secondes et chiffré sa rentabilité (92 h/an, seuil d'environ 10 semaines).",
      "Vous avez cartographié la tâche manuelle, mesuré la variabilité de 20 entrées réelles et découpé le besoin en workflow figé et en agent.",
      "Vous avez complété le canevas de conception (8 étapes, 3 contrôles humains) et son évaluation des risques.",
      "Vous avez rédigé, testé et versionné deux prompts RCCF figés, dont un à sortie JSON robuste aux cas limites.",
      "Vous avez connecté Make à une API d'IA avec une clé plafonnée et des connexions au moindre privilège, et construit deux scénarios avec gestion des erreurs.",
      "Vous avez testé six cas, mesuré une fidélité de 93,5 % sans invention, et conduit quatre semaines de rodage supervisé.",
      "Vous avez construit un agent n8n avec trois outils, une mémoire de conversation et une mémoire durable, et vérifié ses limites.",
      "Vous avez documenté le dispositif en 2 pages et une collègue l'a repris seule.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer en une phrase la différence entre un agent IA et une conversation avec un chatbot.",
      "Je sais identifier les trois caractéristiques qui définissent un agent IA (outils, autonomie multi-étapes, mémoire d'état).",
      "Je sais décider, pour une tâche donnée, si elle mérite un prompt ponctuel, un workflow automatisé, ou ni l'un ni l'autre.",
      "Je sais décomposer un besoin métier en déclencheur → traitement IA → action de sortie.",
      "J'ai conçu un workflow complet avec le template canevas-conception-workflow-agent-ia.xlsx, y compris son évaluation des risques.",
      "J'ai documenté un workflow avec le template procedure-documentation-automatisation-ia.docx de façon à ce qu'un collègue puisse le reprendre.",
      "Je sais identifier, dans une automatisation envisagée, les étapes qui nécessitent un point de vérification humaine avant la mise en production.",
      "Je sais créer et plafonner une clé API, et connecter Make, Zapier ou n8n à un modèle IA sans exposer ce secret.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « IA pour la Data & l'Analyse — De la donnée brute à la décision ». Vous y retrouverez Horizon Grands Lacs face à un export comptable truffé d'erreurs : vous apprendrez à le diagnostiquer, le nettoyer avec Excel et Power Query, en calculer les KPI et en tirer un rapport de gestion — avec la même exigence de contrôle humain que pour vos workflows.",
  },
]
