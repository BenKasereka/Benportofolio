// Module 01 — Introduction aux IA génératives — Comprendre pour mieux utiliser
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (tester un LLM, choisir la plateforme avec la grille, contrôler
// avant de coller, anonymiser, vérifier une réponse, compléter la charte,
// gérer un incident) est détaillée étape par étape et appliquée au même fil
// rouge : l'équipe de Goma d'Horizon Grands Lacs qui encadre son usage de
// l'IA en janvier 2026. Organisation et personnes fictives.
export default [
  {
    type: 'cover',
    title: 'Introduction aux IA génératives — Comprendre pour mieux utiliser',
    hook: "À la fin de ce module, vous saurez expliquer pourquoi une IA peut inventer un chiffre avec aplomb, choisir en deux minutes la bonne plateforme parmi ChatGPT, Claude, Copilot, Perplexity et Gemini grâce à la grille du module, contrôler et anonymiser un texte avant de le coller, vérifier une réponse avant de l'envoyer — et vous repartirez avec votre charte d'utilisation responsable complétée et signée.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Expliquer comment un LLM génère du texte et pourquoi il hallucine, en produisant une fiche de trois tests réalisés vous-même (variabilité, date de coupure, références inventées) avec leurs résultats.",
      "Distinguer les 5 plateformes de la formation et choisir la bonne selon la tâche, en produisant la grille de comparaison testée sur au moins 4 tâches réelles et commentée dans l'onglet « Comparatif ».",
      "Décider, avant de coller un texte dans une IA, s'il peut l'être, en appliquant la checklist des 4 questions et en produisant une décision écrite (feu vert, anonymiser, outil professionnel, ou refus).",
      "Anonymiser un extrait de document de travail, en produisant une version « avant / après » prête à coller et une table de correspondance conservée hors de l'IA.",
      "Vérifier une réponse d'IA avant tout usage externe, en produisant un relevé des affirmations factuelles contrôlées à la source (confirmé, corrigé, supprimé).",
      "Compléter et signer la charte d'utilisation responsable de l'IA, section par section, et savoir dérouler sans hésiter les 4 gestes d'un incident de donnée collée par erreur.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un exposé sur l'intelligence artificielle : vous allez poser, sur un cas suivi du début à la fin, les réflexes qui conditionnent tout le reste de la formation. Chaque procédure est découpée en étapes numérotées, avec le prompt exact à taper, les cellules du fichier à remplir, les questions à vous poser et le résultat attendu sur le cas.",
      "À la fin du module, vous aurez en main six livrables réutilisables tels quels dans votre propre organisation :",
    ],
    bullets: [
      "Une fiche « 3 tests de prise en main » : ce que vous avez demandé, ce que l'IA a répondu, ce que cela prouve sur son fonctionnement.",
      "La grille grille-comparaison-5-plateformes-ia.xlsx testée sur vos tâches réelles (onglet « Aide au choix ») et commentée (onglet « Comparatif »).",
      "Une fiche réflexe « Avant de coller » : les 4 questions et la décision prise sur un document réel.",
      "Un extrait anonymisé « avant / après » et sa table de correspondance.",
      "Un relevé de vérification d'une réponse d'IA : chaque chiffre, nom, date et référence contrôlé à la source.",
      "La charte charte-utilisation-responsable-ia-professionnelle.docx complétée (sections 1 à 5) et signée, plus une fiche d'incident prête à l'emploi.",
    ],
    tip: "Ouvrez dès maintenant les deux fichiers du dossier 04-templates et gardez-les à côté de ces diapositives : vous les remplirez au fil des procédures 2 et 6, exactement comme sur le cas.",
  },
  {
    type: 'concept',
    title: "Le fil rouge : Horizon Grands Lacs et l'atelier IA du vendredi 23 janvier 2026",
    body: [
      "Horizon Grands Lacs est une organisation fictive qui opère trois sites : Goma, Bukavu et Kinshasa. Le lundi 12 janvier 2026, la directrice pays Furaha Bisimwa découvre qu'une partie de l'équipe de Goma rédige déjà courriers et rapports avec des IA, sur des comptes personnels, sans aucune règle commune. Elle confie à Amani Kahindo, chargée administrative et logistique, la préparation d'un atelier IA d'une demi-journée le vendredi 23 janvier.",
      "Sa demande tient en trois livrables : un guide de choix d'outil testé sur les vraies tâches de l'équipe, une charte d'utilisation responsable à faire signer aux 14 membres de l'équipe, et une fiche réflexe « avant de coller / après avoir reçu une réponse ». Patrick Mumbere, responsable achats, et Jean-Claude Paluku, responsable informatique, appuient Amani. L'organisation dispose de Microsoft 365 pour tout le personnel ; elle n'a encore aucun contrat avec un fournisseur d'IA.",
    ],
    table: {
      columns: ["Résultat du sondage express d'Amani (13/01/2026)", 'Équipe de Goma (14 personnes)'],
      rows: [
        ['Utilisent déjà une IA au moins une fois par semaine', '11'],
        ['… via un compte personnel gratuit (ChatGPT, Gemini, Claude)', '9'],
        ['… via Copilot connecté au compte professionnel Microsoft 365', '2'],
        ["Ont déjà collé un document interne dans une IA", '6'],
        ["Savent qui contacter en cas de doute", '0'],
      ],
    },
    highlight: "Le cas n'a rien d'exceptionnel : l'usage précède presque toujours la règle. Votre travail dans ce module est de rattraper ce retard sans interdire l'outil — en donnant à chacun les moyens de s'en servir sans risque.",
  },
  {
    type: 'stat-callout',
    stat: '9 sur 14',
    caption: "Membres de l'équipe de Goma qui utilisent une IA sur un compte personnel gratuit, sans politique ni référent — dont 6 qui y ont déjà collé un document interne.",
    context: "Chacun de ces collages a fait sortir un contenu du périmètre de contrôle de l'organisation. Le mercredi 14 janvier, deux jours après le lancement du chantier, l'un d'eux tournera à l'incident : il servira d'étude de cas à la fin du module.",
  },
  {
    type: 'concept',
    title: "La carte du module : 7 procédures, dans l'ordre où vous les exécuterez",
    body: "Les procédures suivent le cycle réel d'une utilisation de l'IA : comprendre l'outil, le choisir, contrôler ce qu'on lui donne, contrôler ce qu'il rend, puis fixer la règle et savoir réagir quand elle n'a pas été respectée.",
    bullets: [
      "Procédure 1 — Comprendre un LLM par trois tests (3 étapes) : variabilité, date de coupure, références inventées.",
      "Procédure 2 — Choisir la bonne IA avec la grille de comparaison (5 étapes).",
      "Procédure 3 — Appliquer la checklist « Avant de coller » (4 étapes, une par question).",
      "Procédure 4 — Anonymiser un extrait avant de le soumettre (4 étapes).",
      "Procédure 5 — Vérifier une réponse d'IA avant tout usage externe (4 étapes).",
      "Procédure 6 — Compléter et signer la charte d'utilisation responsable (5 étapes, une par section).",
      "Procédure 7 — Gérer un incident de donnée collée par erreur (4 étapes).",
    ],
  },

  // ───────────── Théorie essentielle ─────────────
  {
    type: 'concept',
    title: "Histoire des LLM : ce qui s'est passé avant votre première conversation",
    body: "Les IA génératives ne sont pas apparues en 2022 avec ChatGPT : elles sont l'aboutissement de plusieurs ruptures techniques. Connaître ces étapes vous évite deux erreurs opposées — croire que l'outil « pense », ou croire qu'il n'est qu'un gadget.",
    table: {
      columns: ['Période', "Ce qui s'est passé", 'Ce que cela change pour vous'],
      rows: [
        ['Années 1950 à 2010', "IA par règles écrites à la main, puis apprentissage automatique sur des données (traduction statistique, reconnaissance vocale)", "L'IA existe dans vos outils depuis longtemps (correcteur, filtre anti-spam), sans être générative"],
        ['2017', "Architecture « Transformer » publiée par des chercheurs de Google (article « Attention Is All You Need »)", "Le modèle peut tenir compte de tout le contexte d'un texte, pas seulement des mots voisins"],
        ['2018 à 2020', 'Premiers modèles GPT (OpenAI) pré-entraînés sur de très grands corpus ; GPT-3 en 2020', "En augmentant la taille, des capacités générales de rédaction apparaissent"],
        ['Novembre 2022', 'ChatGPT ouvre ces modèles au grand public via une interface de conversation', "N'importe qui peut écrire une consigne en langage courant : le « prompt »"],
        ['2023', 'GPT-4, Claude (Anthropic), Bard (devenu Gemini en 2024), Microsoft 365 Copilot ; Perplexity, lancé fin 2022, popularise la recherche sourcée', 'Les 5 plateformes de cette formation se mettent en place, chacune avec ses priorités'],
        ['2024', "Multimodalité native (texte, image, voix), fenêtres de contexte de centaines de milliers de tokens, premiers modèles dits « de raisonnement »", "On peut soumettre une photo, un tableau ou un rapport entier"],
        ['2025 à 2026', "Agents capables d'enchaîner des actions (rechercher, remplir, exécuter du code) sous supervision", "L'IA ne fait plus que répondre : elle agit, ce qui rend la question des données et du contrôle encore plus critique"],
      ],
    },
    tip: "À retenir pour l'atelier : « Un LLM est un modèle entraîné sur d'énormes volumes de texte pour prédire la suite la plus probable. Depuis 2022, on lui parle en langage courant ; depuis 2024, il lit aussi des images ; depuis 2025, il commence à agir. »",
  },
  {
    type: 'concept',
    title: 'Comment un LLM génère du texte : prédire le token suivant, un token après l\'autre',
    body: [
      "Un modèle de langage ne « sait » rien au sens où un humain sait quelque chose. Il découpe le texte en tokens — des mots ou fragments de mots — et calcule, à chaque pas, quel token a le plus de chances de venir ensuite. Il ajoute ce token, puis recommence, des centaines de fois par réponse, très vite.",
      "Ces probabilités viennent de l'entraînement : le modèle a vu des volumes massifs de textes (livres, sites web, code, documents publics) et en a tiré des régularités statistiques. Il ne consulte aucune base de données en temps réel et ne fait aucune recherche par défaut : c'est un calcul de probabilité répété.",
    ],
    example: {
      title: 'Illustration simplifiée (probabilités fictives, découpage variable selon les modèles)',
      lines: [
        "Début de phrase : « La ville où se trouve le bureau principal d'Horizon Grands Lacs est … »",
        "Tokens candidats : « Goma » 41 % · « Bukavu » 22 % · « Kinshasa » 19 % · autres 18 %",
        "Le modèle choisit « Goma »… alors qu'il n'a jamais lu une ligne sur cette organisation fictive : il a seulement appris que ces trois villes suivent souvent « Grands Lacs ».",
        "Ordre de grandeur utile : une page de texte en français représente environ 600 à 800 tokens.",
      ],
    },
    result: "Ce que vous devez pouvoir dire en une phrase : « L'IA produit la suite la plus plausible, pas la plus vraie ; quand l'information existe largement dans ses données, plausible et vrai coïncident ; sinon, non. »",
    pitfall: "Penser que l'IA « va chercher » la réponse quelque part. Un LLM seul ne consulte rien ; certaines interfaces ajoutent une recherche web — elles affichent alors des sources, que vous devez ouvrir vous-même.",
  },
  {
    type: 'concept',
    title: "D'où vient ce que le modèle « sait » : entraînement, date de coupure, contexte",
    body: "Trois notions expliquent la plupart des surprises que vous aurez avec une IA. Retenez-les avec leur conséquence pratique, pas avec leur définition technique.",
    bullets: [
      "Pré-entraînement : le modèle apprend à prédire la suite de milliards de phrases. Conséquence : il est fort sur ce qui est très documenté (une formule Excel courante, la structure d'un rapport) et faible sur ce qui est rare, local ou spécialisé.",
      "Ajustement en assistant : le modèle est ensuite entraîné à suivre des consignes et à répondre poliment. Conséquence : il cherche à vous donner une réponse, et dit rarement « je ne sais pas » spontanément.",
      "Date de coupure des connaissances : le modèle ne connaît rien de ce qui s'est passé après la fin de son entraînement. Conséquence : une question d'actualité sans recherche web produit une réponse datée, ou inventée.",
      "Fenêtre de contexte : la quantité de texte (en tokens) que le modèle peut prendre en compte dans une même conversation. Conséquence : au-delà, le début du document est ignoré ou résumé — un rapport de 40 pages ne tient pas dans toutes les fenêtres.",
    ],
    example: {
      title: "Appliqué au fil rouge",
      lines: [
        "Question d'Amani sur les formalités du poste frontière de Goma « depuis le 1er janvier 2026 » : sujet local et récent → risque maximal, outil de recherche sourcée obligatoire.",
        "Demande de structurer le plan d'un rapport narratif : sujet très documenté → l'IA est fiable sur la forme ; c'est vous qui apportez les faits.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Pourquoi l'IA se trompe avec aplomb : l'hallucination",
    body: [
      "Pour un LLM, « je connais ce fait » et « je complète la phrase de façon plausible » sont la même opération de prédiction. Quand l'information est bien représentée dans les données d'entraînement, la prédiction est fiable. Quand elle est rare, récente, très spécifique ou absente, le modèle produit quand même la suite la plus plausible — qui peut être entièrement inventée.",
      "C'est une hallucination : une statistique qui n'existe pas, une citation jamais prononcée, une référence d'article jamais publiée, présentées avec exactement le même ton de confiance qu'une réponse correcte.",
    ],
    highlight: "Le niveau de confiance affiché dans le ton d'une réponse n'a aucun lien avec sa fiabilité réelle. Toute donnée factuelle précise — chiffre, date, nom, citation, référence — est vérifiée à la source avant usage professionnel. Sans exception.",
    tip: "Pour une question où l'erreur coûterait cher, ajoutez à votre consigne : « Si tu n'es pas certain d'un fait, écris « à vérifier » plutôt que de le compléter. » Cela réduit les inventions, sans dispenser de la vérification.",
  },
  {
    type: 'comparison-table',
    title: "Les quatre formes d'hallucination à repérer dans une réponse",
    columns: ['Forme', 'Exemple dans le fil rouge', 'Signal qui doit vous alerter', 'Comment vérifier'],
    rows: [
      ['Statistique inventée', "« Selon une étude de 2023, 42 % des ONG de la région utilisent déjà l'IA »", 'Un pourcentage précis sans source nommée ni lien', "Cherchez l'étude par son titre exact ; introuvable = à supprimer"],
      ['Référence inexistante', "Trois articles « publiés » avec auteurs, revue et lien sur l'IA en logistique humanitaire", 'Lien qui ne s\'ouvre pas, revue inconnue, titre introuvable', 'Ouvrez chaque lien et recherchez le titre entre guillemets'],
      ['Citation ou attribution fausse', 'Une phrase attribuée à un responsable d\'agence des Nations unies', 'Citation parfaitement adaptée à votre argument', 'Retrouvez le discours ou le document original'],
      ['Fait daté ou altéré', 'Un chiffre interne recopié de votre brouillon… mais modifié (1 250 au lieu de 1 205)', 'Chiffre « presque » identique au vôtre', "Comparez avec le document source, jamais avec la réponse de l'IA"],
    ],
  },
  {
    type: 'concept',
    title: "Panorama 2026 : modèles de langage, IA multimodales et agents",
    body: "Les outils que vous utiliserez combinent trois briques. Savoir laquelle est en jeu vous dit quel risque surveiller.",
    table: {
      columns: ['Brique', 'Ce qu\'elle fait', 'Exemple de tâche', 'Risque principal à surveiller'],
      rows: [
        ['Modèle de langage (LLM)', 'Lit et génère du texte', 'Rédiger un courrier, résumer un compte rendu, reformuler', 'Hallucination, données sensibles collées'],
        ['IA multimodale', 'Traite aussi images, tableaux, voix, parfois vidéo', 'Transformer la photo d\'un bon de livraison en tableau', "Erreurs de lecture ; une photo contient souvent plus d'informations qu'on ne croit (noms, plaques, lieux)"],
        ['Agent IA', "Enchaîne des actions pour atteindre un but : chercher, ouvrir, remplir, exécuter du code", 'Compiler des offres fournisseurs depuis plusieurs sites', "Action non voulue, accès trop large à vos fichiers et comptes : supervision humaine obligatoire"],
      ],
    },
    tip: "Les agents et l'automatisation sont traités en détail plus loin dans la formation. Dès maintenant, retenez la règle : plus l'IA agit seule, plus vous devez limiter ce à quoi elle a accès.",
  },
  {
    type: 'comparison-table',
    title: 'Les 5 plateformes de la formation — onglet « Comparatif » de la grille',
    columns: ['Plateforme', 'Meilleur usage', 'Points forts', 'Limites principales', 'Intégration principale'],
    rows: [
      ['ChatGPT (OpenAI)', 'Généraliste, automatisation de tâches, brainstorming, réponse rapide multi-domaine', 'Le plus répandu, écosystème de GPTs personnalisés et plugins, très polyvalent', 'Peut halluciner avec assurance sur un fait précis ; moins rigoureux que Claude sur un document long', 'API ouverte, GPT Store, plugins tiers'],
      ['Claude (Anthropic)', 'Rédaction professionnelle, analyse de documents longs, rigueur méthodologique', 'Fenêtre de contexte très large, respect fidèle des instructions, fiable sur du texte structuré', 'Pas de recherche web en temps réel native ; intégration bureautique native plus limitée que Copilot', 'API, Claude Projects, intégrations tierces'],
      ['Copilot (Microsoft)', 'Travail quotidien dans Word, Excel, Outlook, Teams', 'Intégration native à Office 365, accès direct aux fichiers de l\'environnement de travail', 'Qualité de rédaction parfois inférieure à Claude ou ChatGPT sur un texte long et nuancé', 'Word, Excel, Outlook, Teams, PowerPoint'],
      ['Perplexity', 'Recherche d\'information récente avec sources citées, veille sectorielle', 'Réponses sourcées et vérifiables, réflexe pour toute question d\'actualité', 'Moins adapté à la rédaction longue ou à l\'analyse de documents volumineux', 'Extension navigateur, API'],
      ['Gemini (Google)', 'Contenu multimodal, intégration Google Workspace', 'Bonne gestion multimodale, intégration native Docs, Sheets, Gmail', 'Rigueur rédactionnelle plus variable selon les versions, écosystème en évolution rapide', 'Docs, Sheets, Gmail, Drive'],
    ],
  },
  {
    type: 'concept',
    title: 'Des outils complémentaires, pas concurrents : la règle de décision simplifiée',
    body: [
      "ChatGPT et Claude se recoupent largement en usage généraliste, mais Claude tient mieux la distance sur un document long et complexe, tandis que ChatGPT a l'écosystème le plus large pour automatiser des tâches répétitives. Copilot et Gemini sont d'abord des couches d'IA intégrées à un environnement bureautique déjà utilisé, avec l'avantage de travailler sur vos fichiers réels sans copier-coller. Perplexity est le réflexe dès qu'une information récente et une source vérifiable sont nécessaires.",
      "Pour décider sans ouvrir la grille à chaque fois, retenez cette règle :",
    ],
    bullets: [
      'Document long, rédaction professionnelle, analyse de rapport → Claude.',
      'Tâche généraliste, automatisation, brainstorming → ChatGPT.',
      'Travail direct dans Word, Excel ou Outlook déjà ouvert → Copilot.',
      'Recherche d\'information récente avec source vérifiable → Perplexity.',
      'Contenu multimodal ou intégration Google Workspace → Gemini.',
    ],
    pitfall: "Utiliser la même plateforme par habitude pour une recherche d'actualité, une rédaction longue et un travail dans Excel : vous vous privez des points forts réels de chaque outil, et vous cumulez leurs faiblesses.",
  },
  {
    type: 'comparison-table',
    title: 'Compte grand public ou licence professionnelle : ce qui change vraiment',
    columns: ['Type d\'accès', 'Qui fixe les règles sur vos données', 'Ce que vous pouvez y mettre', 'Situation chez Horizon Grands Lacs (janvier 2026)'],
    rows: [
      ['Compte personnel gratuit', "Les conditions d'utilisation du fournisseur, acceptées à titre individuel", 'Uniquement du contenu public ou anonymisé', '9 personnes sur 14 — à encadrer par la charte'],
      ['Compte personnel payant', 'Les mêmes conditions individuelles : payer n\'achète pas de garantie contractuelle pour l\'organisation', 'Uniquement du contenu public ou anonymisé', 'Aucun, mais la confusion est fréquente'],
      ['Licence professionnelle de l\'organisation', "Un contrat négocié par l'organisation (non-réutilisation des données, hébergement, sécurité)", 'Les données internes que la politique de l\'organisation autorise', "Copilot connecté au compte Microsoft 365 professionnel, sous réserve de vérification du contrat par le responsable informatique"],
    ],
  },
  {
    type: 'concept',
    title: 'Ce qui se passe quand vous collez un texte dans une IA grand public',
    body: [
      "Votre requête est traitée sur l'infrastructure du fournisseur, selon ses propres conditions d'utilisation — qui ne sont pas celles de votre organisation. Sauf accord d'entreprise spécifique avec garanties contractuelles de non-réutilisation des données, considérez que tout ce que vous collez dans une IA grand public quitte le périmètre de contrôle de votre organisation.",
      "Selon la plateforme et vos paramètres, le contenu peut être conservé dans l'historique, consulté pour des contrôles de sécurité ou utilisé pour améliorer les modèles. Désactiver l'option d'amélioration du modèle dans les paramètres (par exemple dans ChatGPT : Paramètres > Contrôles des données) réduit l'exposition future ; cela ne transforme pas un compte personnel en outil autorisé pour des données sensibles.",
    ],
    pitfall: "« Je supprimerai la conversation après » : supprimer un échange de votre historique ne garantit pas que le contenu n'a pas déjà été traité ou conservé. La seule protection fiable est de ne pas coller.",
  },
  {
    type: 'warning',
    title: "Ce qu'il ne faut JAMAIS soumettre à une IA grand public sans validation",
    items: [
      "Données confidentielles de bailleurs — contrats, montants budgétaires non publiés, rapports financiers internes, correspondance sensible avec un donateur. Exemple fil rouge : le rapport intermédiaire marqué « confidentiel — diffusion restreinte » et le budget révisé d'une convention.",
      "Données personnelles de bénéficiaires ou de collègues — noms, coordonnées, situations individuelles (santé, statut, vulnérabilité), tout ce qui relève de la protection des données personnelles. Exemple fil rouge : la liste de distribution avec numéros de téléphone, les noms des chauffeurs.",
      "Informations sécuritaires sensibles — mouvements de personnel, localisation d'équipes sur le terrain, détails d'un incident en cours ou non rendu public. Exemple fil rouge : la relocalisation de l'équipe de Sake et l'incident sur l'axe Goma–Sake.",
      "Le bon réflexe n'est pas « l'IA est dangereuse, je ne l'utilise pas » : c'est, avant chaque collage, vérifier la politique de l'organisation et se demander si la donnée entre dans l'une de ces trois catégories.",
    ],
  },
  {
    type: 'concept',
    title: "Les limites éthiques : ce que l'IA ne doit pas faire à votre place",
    body: "Au-delà de la confidentialité, quatre limites se posent dès le premier usage professionnel. Elles sont reprises dans la charte que vous compléterez à la procédure 6.",
    table: {
      columns: ['Limite', 'Ce que cela signifie', 'Règle pratique'],
      rows: [
        ['Responsabilité humaine', "L'IA ne signe rien : c'est vous qui répondez du contenu envoyé", 'Aucun contenu généré n\'est transmis à un bailleur, un partenaire ou un client sans relecture humaine complète'],
        ['Biais', "Le modèle reproduit les déséquilibres de ses données d'entraînement (langues, régions, genres, contextes sous-représentés)", "Ne jamais déléguer à l'IA une décision sur des personnes : recrutement, sélection de bénéficiaires, évaluation"],
        ['Transparence', "Un lecteur peut avoir besoin de savoir qu'un texte a été produit avec l'IA", "Mention traçable en interne, explicite à l'externe quand la politique l'exige ou quand le document engage la structure"],
        ['Exactitude', 'Une hallucination présentée comme un fait trompe le lecteur', 'Une information douteuse est considérée comme fausse jusqu\'à preuve du contraire'],
      ],
    },
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'LLM (Large Language Model)', definition: "Modèle de langage entraîné sur de grands volumes de texte, qui génère du texte en prédisant le token suivant le plus probable." },
      { term: 'Token', definition: "Unité de texte (mot ou fragment de mot) manipulée par le modèle — la brique de base de la génération et l'unité de mesure de la fenêtre de contexte." },
      { term: 'Hallucination', definition: "Information inventée par une IA (statistique, citation, référence) présentée avec le même niveau de confiance qu'une information exacte." },
      { term: 'Prompt', definition: "L'instruction donnée à une IA générative ; sa formulation influence directement la qualité de la réponse (approfondi au module 07)." },
      { term: 'Date de coupure', definition: "Date après laquelle le modèle n'a plus reçu de données d'entraînement : il ignore tout ce qui s'est passé ensuite, sauf recherche web." },
      { term: 'Fenêtre de contexte', definition: "Quantité maximale de texte, en tokens, que le modèle peut prendre en compte en une fois dans une conversation." },
      { term: 'IA multimodale', definition: "IA capable de traiter plusieurs types de contenu : texte, image, tableau, voix." },
      { term: 'Agent IA', definition: "Système qui enchaîne lui-même des actions (rechercher, ouvrir, remplir, exécuter) pour atteindre un objectif, sous supervision humaine." },
      { term: 'Licence professionnelle', definition: "Accès négocié par l'organisation, avec garanties contractuelles sur l'usage des données ; à distinguer d'un abonnement personnel, même payant." },
      { term: 'Anonymisation', definition: "Retrait ou remplacement de tout ce qui permet d'identifier une personne, un bailleur, un lieu sensible ou un montant confidentiel, avant de soumettre un texte." },
      { term: 'Référent IA / RSSI', definition: "Personne désignée pour répondre aux doutes et gérer les incidents ; le RSSI est le responsable de la sécurité des systèmes d'information." },
    ],
  },

  // ───────────── Procédure 1 — Comprendre un LLM par trois tests ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 3',
    title: 'Test de variabilité : poser deux fois la même question',
    intro: "Rien ne remplace l'expérience pour comprendre qu'une IA prédit au lieu de savoir. Ce premier test vous montre que la réponse varie d'une fois à l'autre, sauf quand le fait est solidement établi. Entrée nécessaire : un accès à au moins une plateforme (compte gratuit suffisant, aucune donnée interne utilisée).",
    steps: [
      {
        title: 'Préparer la fiche de tests',
        actions: [
          "Ouvrez un document Word vide et enregistrez-le sous « Fiche_3_tests_LLM_[votre nom].docx ».",
          "Créez un tableau à quatre colonnes : Test, Ce que j'ai demandé, Ce que l'IA a répondu, Ce que cela prouve.",
        ],
      },
      {
        title: 'Lancer le test',
        actions: [
          "Ouvrez une nouvelle conversation et saisissez une question créative : « Propose un titre accrocheur pour un atelier interne sur l'IA destiné à une équipe logistique. »",
          "Ouvrez une seconde nouvelle conversation et saisissez exactement la même question.",
          "Faites de même avec une question factuelle très documentée : « Quelle est la capitale de la province du Nord-Kivu ? »",
          "Copiez les quatre réponses dans votre fiche.",
        ],
      },
    ],
    example: {
      title: "Fiche d'Amani — test 1 (13/01/2026)",
      lines: [
        "Question créative, essai 1 : « L'IA au service de la chaîne logistique : mode d'emploi »",
        "Question créative, essai 2 : « Moins de saisie, plus de terrain : l'IA dans notre quotidien »",
        "Question factuelle, essais 1 et 2 : « Goma » — identique",
        "Ce que cela prouve : la réponse est tirée d'une distribution de probabilités. Sur un fait très présent dans les données, la suite la plus probable écrase les autres ; sur une question ouverte, plusieurs suites sont plausibles.",
      ],
    },
    result: "Votre fiche contient la première ligne remplie et vous pouvez expliquer à un collègue pourquoi deux réponses différentes ne sont pas un « bug ».",
    tip: "Ce test est idéal pour ouvrir un atelier : faites taper la même question par trois participants et projetez les trois réponses.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 3',
    title: 'Test de date de coupure : une question d\'actualité, avec et sans recherche sourcée',
    intro: "Ce test montre la limite des données d'entraînement et le rôle d'un outil de recherche sourcée. Choisissez une question récente et utile à votre travail, sans aucune donnée interne.",
    steps: [
      {
        title: 'Sans recherche web',
        actions: [
          "Dans un assistant conversationnel, désactivez la recherche web si l'option est visible, puis demandez : « Quelle est la date limite de tes connaissances ? »",
          "Posez ensuite votre question d'actualité, par exemple : « Quelles sont les formalités en vigueur depuis le 1er janvier 2026 pour dédouaner du matériel humanitaire au poste frontière de Goma ? »",
          "Notez la réponse et vérifiez si elle cite une source et une date.",
        ],
      },
      {
        title: 'Avec Perplexity',
        actions: [
          "Posez exactement la même question dans Perplexity.",
          "Comptez les sources citées et ouvrez au moins deux d'entre elles.",
          "Vérifiez que l'information se trouve réellement dans la page ouverte, à la date annoncée.",
          "Remplissez la deuxième ligne de votre fiche.",
        ],
      },
    ],
    example: {
      title: "Fiche d'Amani — test 2",
      lines: [
        "Sans recherche : réponse générale et assurée (« vous devez présenter une lettre d'exonération et une liste de colisage… »), sans date ni source ; le modèle indique une date de coupure antérieure à 2026.",
        "Perplexity : 5 sources citées ; 2 ouvertes : l'une est une page officielle datée, l'autre un article de 2023 qui ne parle pas de 2026.",
        "Ce que cela prouve : sans recherche, l'IA complète avec ce qui était plausible au moment de son entraînement ; avec recherche, la source existe — mais il faut encore la lire pour savoir si elle répond vraiment.",
      ],
    },
    result: "Deuxième ligne de la fiche remplie, avec la date de coupure annoncée et le nombre de sources réellement pertinentes sur celles citées.",
    pitfall: "Considérer qu'une réponse « avec sources » est vérifiée. Une source citée peut être ancienne, hors sujet ou dire autre chose : seul le fait d'ouvrir la page vaut vérification.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 3',
    title: 'Test d\'hallucination : demander des références précises et les contrôler une par une',
    intro: "Le test le plus instructif : demander à l'IA des références sur un sujet de niche. C'est exactement la situation où le modèle complète de façon plausible ce qu'il ne connaît pas. Vous verrez de vos yeux une hallucination, et la méthode pour la démasquer.",
    steps: [
      {
        title: 'Provoquer la situation à risque',
        actions: [
          "Dans un assistant sans recherche web, demandez : « Donne-moi 3 études publiées sur l'usage de l'IA dans la logistique humanitaire en Afrique centrale, avec auteurs, année, revue et lien. »",
          "Copiez la réponse complète dans votre fiche.",
        ],
      },
      {
        title: 'Contrôler chaque référence',
        actions: [
          "Cliquez sur chaque lien : notez s'il s'ouvre et s'il mène bien au document annoncé.",
          "Recherchez chaque titre entre guillemets dans un moteur de recherche.",
          "Vérifiez que les auteurs existent et ont bien publié sur ce sujet.",
          "Classez chaque référence : Existe et correspond / Existe mais ne dit pas cela / Introuvable.",
          "Remplissez la troisième ligne de la fiche et rédigez en bas une conclusion de deux phrases.",
        ],
      },
    ],
    table: {
      columns: ['Référence proposée', 'Lien', 'Titre recherché entre guillemets', 'Verdict'],
      rows: [
        ['Étude 1 — rapport d\'un réseau logistique humanitaire, 2021', "S'ouvre", 'Trouvé, mais porte sur la gestion des stocks, sans IA', 'Existe mais ne dit pas cela'],
        ['Étude 2 — article de revue, 2022, trois auteurs', 'Erreur 404', 'Aucun résultat', 'Introuvable'],
        ['Étude 3 — thèse universitaire, 2023', 'Domaine inexistant', 'Aucun résultat ; auteur introuvable', 'Introuvable'],
      ],
    },
    result: "Conclusion de la fiche d'Amani : « Sur 3 références données avec assurance, 2 n'existent pas et la 3e ne dit pas ce qui est annoncé. Toute référence produite par une IA est vérifiée lien par lien avant d'être citée. » Votre fiche de 3 tests est terminée.",
    tip: "Gardez cette fiche : vos propres résultats convainquent bien mieux vos collègues que n'importe quel avertissement théorique.",
  },

  // ───────────── Procédure 2 — Choisir la bonne IA avec la grille ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Décrire la tâche par ce qu\'elle doit produire, avant d\'ouvrir un outil',
    intro: "Ne commencez jamais par « quelle IA j'ai l'habitude d'utiliser », mais par « qu'est-ce que je dois produire ». Une recherche d'information récente, un document long, un travail dans un fichier Excel déjà ouvert ou une tâche multimodale n'appellent pas le même outil. Entrée nécessaire : la liste des tâches pour lesquelles vous, ou votre équipe, utilisez ou voulez utiliser l'IA.",
    steps: [
      {
        title: 'Lister les tâches réelles',
        actions: [
          "Notez 4 à 6 tâches récurrentes de votre poste pour lesquelles une IA pourrait aider.",
          "Pour chacune, écrivez une phrase : « Je dois produire [quoi], à partir de [quelle matière], dans [quel outil ou format]. »",
          "Ajoutez une colonne « Données concernées » : public, interne, ou sensible (l'une des 3 catégories).",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Tâche de l\'équipe de Goma (phrase « Je dois produire… »)', 'Données concernées'],
      rows: [
        ['T1', 'Un rapport narratif intermédiaire de 25 pages à partir des notes de terrain, sous Word', 'Interne'],
        ['T2', 'Une synthèse des clauses du contrat-cadre Transco Sarl (32 pages)', 'Sensible : contrat fournisseur'],
        ['T3', 'Une note de veille sur les formalités douanières au poste frontière de Goma', 'Public'],
        ['T4', 'Des réponses aux fournisseurs, directement dans Outlook', 'Interne'],
        ['T5', "Des idées d'animation pour l'atelier IA du 23 janvier", 'Aucune donnée'],
        ['T6', 'Un tableau à partir de la photo d\'un bon de livraison manuscrit', 'Interne, avec noms de chauffeurs'],
      ],
    },
    result: "Une liste de tâches formulées par leur production attendue, chacune qualifiée par le type de données qu'elle implique. C'est l'entrée de la grille.",
    pitfall: "Décrire la tâche par l'outil (« faire un ChatGPT pour le rapport ») : vous avez déjà choisi avant d'avoir réfléchi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Interroger l\'onglet « Aide au choix » de la grille',
    intro: "La grille grille-comparaison-5-plateformes-ia.xlsx contient deux onglets : « Comparatif » et « Aide au choix ». Le second donne la plateforme recommandée pour 10 types de tâches, via une liste déroulante.",
    steps: [
      {
        title: 'Utiliser la liste déroulante',
        actions: [
          "Ouvrez la grille, cliquez sur l'onglet « Aide au choix ».",
          "Cliquez sur la cellule B5 (« Type de tâche à accomplir ») : une flèche de liste déroulante apparaît à droite.",
          "Sélectionnez le type de tâche le plus proche de votre première tâche.",
          "Lisez en B6 la plateforme recommandée et en B7 la justification (« Pourquoi »).",
          "Recopiez tâche, type choisi, plateforme et justification dans vos notes ; recommencez pour chaque tâche.",
        ],
      },
      {
        title: 'Si aucun type ne correspond',
        actions: [
          "Consultez la table de référence en A11:C21 du même onglet pour voir les 10 types disponibles.",
          "Passez à l'onglet « Comparatif » et raisonnez par analogie avec la colonne « Meilleur usage ».",
        ],
      },
    ],
    table: {
      columns: ['Tâche', 'Type choisi en B5', 'B6 — Plateforme', 'B7 — Pourquoi (extrait)'],
      rows: [
        ['T1', 'Rédaction longue / document professionnel structuré', 'Claude', 'Fenêtre de contexte large, rigueur sur du texte long'],
        ['T2', 'Analyse de documents volumineux (rapports, contrats)', 'Claude', 'Reste fidèle à de gros volumes de texte'],
        ['T3', "Veille et synthèse d'actualité sourcée", 'Perplexity', "Citations systématiques, utile pour tracer l'origine"],
        ['T4', "Rédaction d'e-mail professionnel rapide dans Outlook", 'Copilot', "Génère directement dans la messagerie utilisée"],
        ['T5', 'Brainstorming rapide / question généraliste', 'ChatGPT', 'Rapide, polyvalent, usage exploratoire'],
        ['T6', 'Contenu multimodal (texte + image + tableur)', 'Gemini', 'Meilleure gestion native du multimodal'],
      ],
    },
    result: "Pour chaque tâche, une plateforme recommandée et sa justification, lues directement dans la grille. Vous avez dépassé le minimum de 4 tâches testées demandé par l'exercice.",
    pitfall: "Tant que B5 est vide, B6 affiche « sélectionnez une tâche ci-dessus » et B7 reste vide : ne saisissez pas de texte libre en B5, la recherche ne fonctionne qu'avec une valeur exacte de la liste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Contrôler la recommandation dans l\'onglet « Comparatif »',
    intro: "La recommandation dit quel outil est le meilleur techniquement. L'onglet « Comparatif » ajoute ce que l'aide au choix ne montre pas : les limites et le niveau de confidentialité recommandé. Ses colonnes : Plateforme, Meilleur usage, Points forts, Limites principales, Confidentialité recommandée (données sensibles), Intégration principale.",
    steps: [
      {
        title: 'Lire la ligne de la plateforme recommandée',
        actions: [
          "Ouvrez l'onglet « Comparatif » et repérez la ligne de la plateforme (lignes 5 à 9).",
          "Lisez la colonne D « Limites principales » : la limite gêne-t-elle votre tâche ?",
          "Lisez la colonne E « Confidentialité recommandée » : comparez-la avec la colonne « Données concernées » de votre liste.",
          "Lisez la colonne F « Intégration principale » : l'outil fonctionne-t-il dans l'environnement que vous utilisez ?",
        ],
      },
      {
        title: 'Marquer les conflits',
        actions: [
          "Pour chaque tâche, notez « OK » ou « Conflit » avec la raison en quelques mots.",
        ],
      },
    ],
    table: {
      columns: ['Tâche', 'Plateforme', 'Contrôle « Comparatif »', 'Verdict'],
      rows: [
        ['T1', 'Claude', 'E : aucune donnée confidentielle sans validation ; les notes de terrain sont internes', 'Conflit : données internes'],
        ['T2', 'Claude', 'E : contrat fournisseur = confidentiel', 'Conflit : données sensibles'],
        ['T3', 'Perplexity', 'E : aucune donnée confidentielle ; question publique', 'OK'],
        ['T4', 'Copilot', 'E : couvert en général par la licence Microsoft 365 — à vérifier', 'OK sous réserve du contrat'],
        ['T5', 'ChatGPT', 'Aucune donnée', 'OK'],
        ['T6', 'Gemini', "F : Docs, Sheets, Gmail, Drive — l'organisation n'utilise pas Google Workspace ; E : noms de chauffeurs", 'Conflit : environnement et données'],
      ],
    },
    result: "Chaque recommandation est confirmée ou marquée en conflit avec une raison précise. Trois tâches sur six (T1, T2, T6) ne peuvent pas être réalisées telles quelles avec l'outil recommandé.",
    tip: "La légende en A11 de l'onglet le rappelle : la grille est une référence, pas une autorisation. La politique de votre organisation prime toujours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Confronter le choix aux outils validés par votre organisation',
    intro: "Une tâche en conflit n'est pas abandonnée : elle est réorientée. Trois options, dans cet ordre : utiliser l'outil sous licence professionnelle de l'organisation ; anonymiser pour pouvoir utiliser l'outil recommandé ; renoncer à l'IA pour cette tâche.",
    steps: [
      {
        title: 'Vérifier les outils autorisés',
        actions: [
          "Demandez au responsable informatique ou au référent quels outils sont couverts par un contrat de l'organisation (ce sera la section 4 de votre charte).",
          "Pour Copilot, vérifiez que vous êtes connecté avec votre compte professionnel et que l'interface signale la protection des données d'entreprise.",
        ],
      },
      {
        title: 'Réorienter chaque tâche en conflit',
        actions: [
          "Si l'outil professionnel peut faire la tâche : choisissez-le, même s'il est moins performant.",
          "Sinon, si un extrait anonymisé suffit à obtenir l'aide : prévoyez l'anonymisation (procédure 4) et gardez l'outil recommandé.",
          "Sinon : pas d'IA pour cette tâche.",
          "Inscrivez la décision finale à côté de chaque tâche.",
        ],
      },
    ],
    table: {
      columns: ['Tâche', 'Décision finale (validée avec J.-C. Paluku le 15/01/2026)'],
      rows: [
        ['T1 — Rapport narratif', 'Copilot dans Word (licence pro) sur le fichier ; Claude seulement pour la structure du plan, sans données'],
        ['T2 — Contrat Transco', 'Copilot sur le fichier stocké dans SharePoint ; jamais Claude ni ChatGPT en compte personnel'],
        ['T3 — Veille douanière', 'Perplexity, sources ouvertes et vérifiées'],
        ['T4 — E-mails fournisseurs', 'Copilot dans Outlook'],
        ['T5 — Idées d\'atelier', 'ChatGPT, compte personnel autorisé (aucune donnée)'],
        ['T6 — Bon de livraison', 'Copilot (compte pro) après avoir masqué les noms et plaques sur la photo, ou saisie manuelle'],
      ],
    },
    result: "Un guide de choix de six lignes, propre à l'équipe : la plateforme de chaque tâche tient compte à la fois de la grille et des outils réellement autorisés.",
    pitfall: "Garder l'outil recommandé « parce qu'il est meilleur » malgré le conflit de confidentialité : la qualité d'un résumé ne compense jamais une donnée sensible exposée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Tester, réévaluer après usage et commenter la grille',
    intro: "Le choix d'outil se réévalue aussi après usage. Si une plateforme ne convient visiblement pas — réponse trop générique, document trop long, absence de source — changez d'outil en cours de route plutôt que de forcer. L'exercice du module demande en outre un commentaire personnel dans l'onglet « Comparatif ».",
    steps: [
      {
        title: 'Réévaluer après usage',
        actions: [
          "Après chaque usage, posez-vous trois questions : la réponse est-elle spécifique à ma demande ? Le document a-t-il été traité en entier ? Les faits sont-ils sourcés ?",
          "Si une réponse est non, notez le signal et changez d'outil selon la règle de décision simplifiée.",
        ],
      },
      {
        title: 'Ajouter votre commentaire dans la grille',
        actions: [
          "Dans l'onglet « Comparatif », la ligne 10 est vide entre le tableau (lignes 5 à 9) et la légende (ligne 11).",
          "Saisissez en A10 « Mon commentaire » et, dans la colonne de votre choix (par exemple B10), votre analyse de l'outil que vous utilisez le plus.",
          "Indiquez si votre usage actuel correspond bien à ses points forts réels, et ce que vous allez changer.",
          "Enregistrez la grille sous « grille-comparaison-5-plateformes-ia_[votre nom].xlsx ».",
        ],
      },
    ],
    example: {
      title: 'Commentaire d\'Amani en B10',
      lines: [
        "« Outil le plus utilisé : ChatGPT, compte personnel gratuit, pour tout — courriers fournisseurs compris.",
        "Correspond à ses points forts pour le brainstorming ; pas pour les rapports longs (Claude ou Copilot dans Word seraient plus adaptés) ni pour les courriers (Copilot dans Outlook, sous licence pro).",
        "À changer dès aujourd'hui : plus aucun document fournisseur ou bailleur sur mon compte personnel. »",
      ],
    },
    result: "La grille complétée : au moins 4 tâches testées dans « Aide au choix », reportées dans vos notes, et une ligne de commentaire personnel dans « Comparatif ».",
    tip: "Signal concret de changement d'outil observé par l'équipe : Perplexity résume mal un rapport de 40 pages ; Claude ne donne pas de source récente ; Copilot reste générique sur un courrier délicat. Chaque signal renvoie à un autre outil de la grille.",
  },

  // ───────────── Procédure 3 — Checklist « Avant de coller » ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Question 1 — Cette donnée entre-t-elle dans une des 3 catégories interdites ?',
    intro: "Avant toute copie de texte, de tableau ou de document dans une IA grand public, quatre questions se posent dans l'ordre. La première est un filtre : si la réponse est oui, vous arrêtez le collage en l'état. Cas d'application : le jeudi 15 janvier, Amani veut faire résumer le compte rendu (5 pages) de la réunion de coordination logistique du 12 janvier pour préparer un courrier.",
    steps: [
      {
        title: 'Passer le document au crible',
        actions: [
          "Ouvrez le document et parcourez-le en entier, pas seulement la partie à résumer.",
          "Surlignez en jaune tout élément confidentiel bailleur (contrat, montant non publié, rapport financier interne, correspondance sensible).",
          "Surlignez en vert toute donnée personnelle (nom, téléphone, situation individuelle).",
          "Surlignez en rouge toute information sécuritaire (mouvement de personnel, localisation d'équipe, incident).",
          "Vérifiez la page de garde et l'en-tête : une mention « confidentiel » ou « diffusion restreinte » est un signal d'arrêt immédiat.",
        ],
      },
    ],
    example: {
      title: 'Compte rendu du 12/01/2026 — résultat du crible',
      lines: [
        "Jaune : « Budget transport révisé : 48 600 USD (avenant à la convention, non signé) ».",
        "Vert : noms et numéros de téléphone de trois chauffeurs ; nom du chef de convoi.",
        "Rouge : « Le 9 janvier, un camion a été retenu 3 h à un barrage sur l'axe Goma–Sake ; l'équipe de Sake (4 personnes) a été relocalisée à Goma le 10 janvier. »",
        "Verdict question 1 : OUI, les trois catégories sont présentes → collage interdit en l'état.",
      ],
    },
    result: "Un document surligné et un verdict écrit. Si le verdict est oui, vous ne collez pas : vous passez aux questions suivantes pour trouver une autre voie.",
    pitfall: "Ne regarder que le paragraphe à résumer : le copier-coller « rapide » embarque souvent l'en-tête, le tableau voisin ou la liste de diffusion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Question 2 — Mon organisation a-t-elle une politique d\'usage de l\'IA, et cet usage y est-il conforme ?',
    intro: "Même pour une donnée qui n'est dans aucune catégorie interdite, l'usage doit être conforme à la politique de la structure. Règle par défaut : si vous ne savez pas, considérez que la réponse est non tant que vous n'avez pas vérifié.",
    steps: [
      {
        title: 'Trouver la règle applicable',
        actions: [
          "Cherchez la politique ou la charte IA de votre organisation (intranet, règlement intérieur, note de direction).",
          "Si elle n'existe pas encore, cherchez une consigne provisoire de la direction ou du responsable informatique.",
          "Identifiez trois points : outils autorisés, types de documents autorisés par outil, personne à contacter.",
        ],
      },
      {
        title: 'Conclure',
        actions: [
          "Si l'usage prévu est explicitement autorisé : passez à la question 3.",
          "Si la règle est muette ou si vous ne l'avez pas trouvée : la réponse est non ; contactez le référent avant de coller.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — 15/01/2026',
      lines: [
        "Pas encore de charte (elle sera signée le 23/01).",
        "Note provisoire de Furaha Bisimwa du 12/01 : « Aucun document interne sur un compte IA personnel. Copilot avec le compte professionnel est autorisé pour les documents internes, hors données personnelles et sécuritaires. »",
        "Conclusion d'Amani : le compte rendu ne peut aller ni sur ChatGPT personnel ni, en l'état, sur Copilot (données personnelles et sécuritaires).",
      ],
    },
    result: "Une réponse écrite à la question 2, appuyée sur une règle identifiée (charte, note, ou réponse du référent), jamais sur une supposition.",
    pitfall: "Croire qu'un abonnement personnel payant vaut autorisation : il n'offre en général aucune des garanties contractuelles d'une licence professionnelle négociée par l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Question 3 — Ai-je besoin d\'anonymiser ou de retirer des éléments avant de coller ?',
    intro: "La plupart du temps, l'aide que vous cherchez — un plan, une reformulation, un résumé de structure — ne dépend pas des noms ni des montants. Un extrait anonymisé suffit souvent à obtenir le même résultat sans exposer la donnée sensible.",
    steps: [
      {
        title: 'Tester si la donnée sensible est nécessaire',
        actions: [
          "Écrivez en une phrase ce que vous attendez de l'IA.",
          "Pour chaque élément surligné, demandez-vous : l'IA en a-t-elle besoin pour produire ce résultat ?",
          "Si non : l'élément sera retiré ou remplacé (procédure 4).",
          "Si oui : l'IA grand public n'est pas la bonne voie ; utilisez l'outil professionnel autorisé ou travaillez sans IA.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — décision d\'Amani',
      lines: [
        "Attente : « Un résumé en 10 lignes des décisions de la réunion, pour structurer mon courrier. »",
        "Noms et téléphones des chauffeurs : inutiles → retirer.",
        "Montant de 48 600 USD : inutile pour résumer une décision → remplacer par « montant en cours de validation ».",
        "Détails de l'incident et de la relocalisation : inutiles → généraliser.",
        "Conclusion : anonymiser, puis utiliser Copilot avec le compte professionnel.",
      ],
    },
    result: "Pour chaque élément sensible, une décision : retirer, remplacer, ou renoncer à l'IA grand public.",
    tip: "Le réflexe d'anonymisation est rarement plus long que le copier-coller brut : sur un extrait d'une page, comptez deux à trois minutes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Question 4 — Ai-je prévu de vérifier à la source ce que l\'IA va produire ?',
    intro: "La dernière question porte sur la sortie, avant même d'avoir la réponse : si une information factuelle produite par l'IA doit finir dans un document externe, la vérification doit être prévue — et le temps nécessaire réservé.",
    steps: [
      {
        title: 'Planifier la vérification',
        actions: [
          "Indiquez où ira le résultat : usage interne seul, ou document externe (bailleur, partenaire, client).",
          "Listez les sources que vous utiliserez pour vérifier : le document d'origine, les pièces comptables, le site officiel.",
          "Réservez le temps de vérification dans votre planning.",
        ],
      },
      {
        title: 'Consigner la décision',
        actions: [
          "Notez sur une fiche réflexe les réponses aux 4 questions et la décision finale.",
          "Choisissez l'une des quatre décisions : feu vert / anonymiser puis coller / outil professionnel seulement / pas d'IA.",
        ],
      },
    ],
    table: {
      columns: ['Question', 'Réponse pour le compte rendu du 12/01'],
      rows: [
        ['1. Catégorie interdite ?', 'Oui : budget non publié, données personnelles, incident sécuritaire'],
        ['2. Politique respectée ?', 'Note provisoire : compte personnel interdit ; Copilot pro autorisé hors données personnelles et sécuritaires'],
        ['3. Anonymiser ?', 'Oui : retirer noms et téléphones, généraliser incident et montant'],
        ['4. Vérification prévue ?', 'Oui : résumé relu contre le compte rendu original ; usage interne seulement'],
        ['Décision', 'Anonymiser puis coller dans Copilot avec le compte professionnel'],
      ],
    },
    result: "Une fiche réflexe « Avant de coller » remplie, avec une décision tracée. C'est le modèle que l'équipe utilisera après l'atelier.",
    pitfall: "Prévoir de vérifier « si j'ai le temps » : une réponse IA non vérifiée qui part chez un bailleur engage votre responsabilité et celle de la structure.",
  },

  // ───────────── Procédure 4 — Anonymiser un extrait ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: "Repérer tous les éléments identifiants de l'extrait",
    intro: "Anonymiser, c'est retirer ou remplacer tout ce qui permet d'identifier une personne, un bailleur, un fournisseur, un lieu sensible ou un montant confidentiel. Vous travaillez toujours sur une copie du document, jamais sur l'original. Entrée : l'extrait surligné à la procédure 3.",
    steps: [
      {
        title: 'Préparer la copie',
        actions: [
          "Copiez l'extrait utile dans un nouveau document Word nommé « Extrait_anonymise_[date].docx ».",
          "Supprimez immédiatement ce qui ne sert pas à la demande (en-tête, liste de diffusion, signatures).",
        ],
      },
      {
        title: 'Inventorier les identifiants',
        actions: [
          "Relevez les identifiants directs : noms, numéros de téléphone, adresses électroniques, numéros de pièce ou de contrat.",
          "Relevez les identifiants indirects : fonction unique (« le chef de convoi »), lieu précis, date exacte, effectif d'une petite équipe.",
          "Relevez les données confidentielles : montants, nom du bailleur, références de convention.",
        ],
      },
    ],
    example: {
      title: 'Extrait original (copie de travail)',
      lines: [
        "« Le 9 janvier, le camion conduit par D. M. (tél. +243 9X XXX XX XX) a été retenu 3 h à un barrage sur l'axe Goma–Sake ; l'équipe de Sake (4 personnes) a été relocalisée à Goma le 10 janvier. Décision : suspendre les rotations vers Sake jusqu'au 19 janvier. Budget transport révisé : 48 600 USD (avenant ECHO, non signé). »",
        "Identifiants directs : D. M., numéro de téléphone.",
        "Identifiants indirects : axe Goma–Sake, équipe de Sake (4 personnes), dates exactes.",
        "Données confidentielles : 48 600 USD, nom du bailleur, avenant non signé.",
      ],
    },
    result: "Une liste exhaustive des identifiants de l'extrait, classés en directs, indirects et confidentiels.",
    pitfall: "Ne retirer que les noms : une « équipe de 4 personnes relocalisée de Sake le 10 janvier » reste parfaitement identifiable pour quiconque connaît la région.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Remplacer les identifiants directs par des codes et tenir la table de correspondance',
    intro: "Les identifiants directs sont remplacés par des codes neutres. La table qui relie chaque code à la valeur réelle reste sur votre poste ou dans l'espace de l'organisation — jamais dans l'IA — pour que vous puissiez ré-appliquer les vraies valeurs ensuite.",
    steps: [
      {
        title: 'Remplacer',
        actions: [
          "Dans Word, Accueil > Remplacer (Ctrl+H) : remplacez chaque nom par un code (Chauffeur 01, Agent 02, Fournisseur A, Bailleur X).",
          "Supprimez purement les coordonnées (téléphones, adresses électroniques) : elles ne servent jamais à l'IA.",
          "Remplacez les numéros de contrat ou de convention par « [réf. contrat] ».",
        ],
      },
      {
        title: 'Tenir la table',
        actions: [
          "Créez un petit tableau à deux colonnes, Code et Valeur réelle, dans un fichier séparé enregistré dans votre dossier de travail.",
          "Ne collez jamais ce fichier, ni une partie, dans l'IA.",
        ],
      },
    ],
    table: {
      columns: ['Code', 'Valeur réelle (reste hors de l\'IA)'],
      rows: [
        ['Chauffeur 01', 'D. M.'],
        ['Bailleur X', 'ECHO'],
        ['[réf. avenant]', 'Avenant n° 2 à la convention'],
        ['(supprimé)', 'Téléphone du chauffeur'],
      ],
    },
    result: "L'extrait ne contient plus aucun identifiant direct ; la table de correspondance existe dans un fichier séparé.",
    tip: "Gardez les mêmes codes d'un échange à l'autre (Bailleur X reste Bailleur X) : l'IA produit un texte cohérent et vous ré-appliquez les vraies valeurs en un seul Rechercher / Remplacer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Généraliser les identifiants indirects et les montants',
    intro: "Les identifiants indirects ne se remplacent pas par un code : on les rend plus généraux, jusqu'à ce que l'information ne permette plus de reconnaître une personne, une équipe ou une opération, tout en restant utile à la demande.",
    steps: [
      {
        title: 'Généraliser',
        actions: [
          "Lieux précis → catégorie (« un axe routier de la province », « un site de terrain »).",
          "Dates exactes → période (« début janvier », « pendant une semaine »).",
          "Effectifs de petites équipes → formulation neutre (« une équipe »).",
          "Montants non publiés → ordre de grandeur ou mention « montant en cours de validation ».",
        ],
      },
      {
        title: 'Relire la version obtenue',
        actions: [
          "Lisez l'extrait final : la demande à l'IA a-t-elle encore un sens ?",
          "Si la généralisation a vidé l'extrait de son utilité, renoncez à l'IA grand public pour cette tâche.",
        ],
      },
    ],
    example: {
      title: 'Extrait anonymisé — prêt à coller',
      lines: [
        "« Début janvier, un véhicule de l'organisation a été retenu plusieurs heures sur un axe routier de la province ; une équipe de terrain a été temporairement relocalisée. Décision : suspendre les rotations vers ce site pendant environ une semaine. Le budget transport doit être révisé (montant en cours de validation avec le Bailleur X). »",
      ],
    },
    result: "Un extrait anonymisé qui garde la structure et le sens nécessaires à la demande, sans aucun élément permettant d'identifier personnes, lieu, bailleur ou montant.",
    pitfall: "Remplacer un montant par un montant « arrondi » proche (48 000 au lieu de 48 600) : c'est toujours une donnée budgétaire non publiée. Utilisez une mention ou un ordre de grandeur sans valeur exploitable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Faire le test de ré-identification, coller, puis ré-appliquer les vraies valeurs',
    intro: "Dernier contrôle avant collage : quelqu'un qui lirait cet extrait pourrait-il reconnaître de qui ou de quoi il s'agit ? Ensuite seulement vous collez, dans l'outil choisi à la procédure 3.",
    steps: [
      {
        title: 'Tester',
        actions: [
          "Relisez l'extrait en vous mettant à la place d'un collègue d'une autre organisation de la même ville : peut-il deviner la personne, l'équipe, le lieu ou le bailleur ?",
          "Lancez Ctrl+F sur chaque valeur de la table de correspondance : aucune ne doit apparaître.",
          "Vérifiez qu'aucune image, aucun commentaire Word et aucune note de bas de page ne reste dans l'extrait.",
        ],
      },
      {
        title: 'Coller et réintégrer',
        actions: [
          "Collez l'extrait dans l'outil retenu avec votre consigne.",
          "Récupérez la réponse dans votre document de travail, hors de l'IA.",
          "Ré-appliquez les vraies valeurs depuis la table de correspondance (Ctrl+H), puis relisez.",
        ],
      },
    ],
    example: {
      title: 'Consigne envoyée par Amani dans Copilot (compte pro)',
      lines: [
        "« Voici l'extrait d'un compte rendu de réunion logistique. Résume en 10 lignes maximum les décisions prises et les points à suivre, sous forme de liste, sans ajouter d'information qui ne figure pas dans l'extrait. »",
        "Contrôle Ctrl+F sur « D. M. », « ECHO », « Sake », « 48 600 » : 0 résultat.",
        "Résumé obtenu en 20 secondes, puis noms et montant ré-appliqués dans le document interne uniquement.",
      ],
    },
    result: "Une version « avant / après » de l'extrait, une table de correspondance hors de l'IA et un résultat utile obtenu sans exposer aucune donnée sensible.",
    tip: "La consigne « sans ajouter d'information qui ne figure pas dans l'extrait » réduit le risque d'hallucination : réutilisez-la pour tous vos résumés.",
  },

  // ───────────── Procédure 5 — Vérifier une réponse d'IA ─────────────
  {
    type: 'process',
    stepLabel: "Procédure 5 — Étape 1 sur 4",
    title: 'Surligner chaque affirmation factuelle de la réponse',
    intro: "La charte le pose en règle : toute donnée factuelle générée par l'IA est vérifiée à la source avant d'être utilisée dans un document destiné à un tiers. Cas d'application : le vendredi 16 janvier, Amani obtient un paragraphe de contexte pour le rapport narratif intermédiaire, rédigé à partir de ses notes.",
    steps: [
      {
        title: 'Isoler les faits',
        actions: [
          "Copiez la réponse de l'IA dans un document de travail, jamais directement dans le rapport.",
          "Surlignez chaque chiffre, date, nom, citation, référence ou statistique.",
          "Numérotez chaque élément surligné (F1, F2, F3…).",
        ],
      },
    ],
    example: {
      title: 'Paragraphe proposé par l\'IA — éléments surlignés',
      lines: [
        "« Entre octobre et décembre 2025, le projet a distribué [F1] 1 250 kits d'hygiène dans [F2] 3 sites. Les standards Sphère recommandent [F3] un minimum de 15 litres d'eau par personne et par jour. Selon [F4] une étude de l'Université de Goma publiée en 2023, [F5] 42 % des ménages déplacés n'atteignent pas ce seuil. »",
        "Cinq affirmations factuelles à vérifier : F1 à F5.",
      ],
    },
    result: "Un relevé numéroté de toutes les affirmations factuelles de la réponse. Rien de ce qui n'est pas surligné n'est un fait ; tout ce qui est surligné sera vérifié.",
    pitfall: "Ne vérifier que ce qui « semble douteux » : les hallucinations les plus dangereuses sont précisément celles qui semblent plausibles.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Associer à chaque affirmation sa source de vérification',
    intro: "Une vérification n'a de valeur que si la source est primaire et indépendante de l'IA. Pour chaque affirmation, choisissez la source qui fait foi avant de commencer à chercher.",
    steps: [
      {
        title: 'Choisir la source',
        actions: [
          "Chiffre interne (distributions, budget, effectifs) → document source de l'organisation : rapport de distribution, comptabilité.",
          "Norme ou standard → texte officiel de l'organisme (manuel, site officiel).",
          "Étude, statistique publique ou citation → publication originale, retrouvée par son titre exact.",
          "Ne retenez jamais comme source la même IA, une autre IA, ou un résumé sans lien vers l'original.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Affirmation', 'Source qui fait foi'],
      rows: [
        ['F1', '1 250 kits d\'hygiène distribués', 'Rapport de distribution T4 2025 (interne)'],
        ['F2', '3 sites', 'Rapport de distribution T4 2025 (interne)'],
        ['F3', 'Sphère : 15 litres par personne et par jour minimum', 'Manuel Sphère, chapitre Approvisionnement en eau, assainissement et promotion de l\'hygiène'],
        ['F4', 'Étude de l\'Université de Goma, 2023', 'Publication originale, recherchée par titre et auteur'],
        ['F5', '42 % des ménages déplacés', 'La même publication, page citée'],
      ],
    },
    result: "Un tableau affirmation → source, rempli avant toute recherche.",
    tip: "Perplexity aide à retrouver une publication originale, mais c'est la page de l'original, ouverte par vous, qui vaut vérification — pas le résumé de Perplexity.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Vérifier une à une et noter le verdict',
    intro: "Vous ouvrez chaque source, retrouvez le passage exact et comparez mot pour mot avec l'affirmation de l'IA. Trois verdicts possibles : confirmé, corrigé, supprimé. Règle de la charte : en cas de doute, l'information est considérée comme fausse jusqu'à preuve du contraire.",
    steps: [
      {
        title: 'Vérifier',
        actions: [
          "Ouvrez la source, cherchez (Ctrl+F) le chiffre ou le terme clé.",
          "Comparez valeur, unité, période et périmètre : « 15 litres » et « 15 litres par personne et par jour pour la boisson et l'hygiène domestique » ne disent pas exactement la même chose.",
          "Notez le verdict et la référence précise (document, page ou section).",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Constat à la source', 'Verdict'],
      rows: [
        ['F1', 'Rapport de distribution : 1 205 kits, pas 1 250', 'Corrigé → 1 205'],
        ['F2', '3 sites confirmés', 'Confirmé'],
        ['F3', 'Manuel Sphère : 15 litres par personne et par jour minimum pour la boisson et l\'hygiène domestique', 'Confirmé, formulation précisée'],
        ['F4', 'Aucune publication trouvée par titre, auteur ou site de l\'université', 'Supprimé'],
        ['F5', 'Dépend de F4, aucune autre source', 'Supprimé'],
      ],
    },
    result: "Un relevé de vérification complet : 2 confirmés, 1 précisé, 1 corrigé, 2 supprimés. Le paragraphe peut maintenant être réécrit sur des faits établis.",
    pitfall: "« 1 250 » au lieu de « 1 205 » : même un chiffre que vous avez vous-même fourni dans la consigne peut être altéré dans la réponse. Comparez toujours avec le document source, jamais avec votre mémoire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Corriger, faire relire et décider de la mention de l\'IA',
    intro: "Le texte vérifié n'est pas encore prêt : la charte exige qu'un contenu généré par IA ne soit jamais transmis à un bailleur, un partenaire ou un client sans relecture humaine complète, et fixe quand mentionner l'usage de l'IA.",
    steps: [
      {
        title: 'Finaliser le texte',
        actions: [
          "Réécrivez le paragraphe avec les seuls faits confirmés ou corrigés, et la référence de chaque source.",
          "Relisez l'ensemble du texte, pas seulement les faits : ton, cohérence avec le reste du rapport, engagements implicites.",
          "Faites relire par une deuxième personne tout document destiné à l'externe.",
        ],
      },
      {
        title: 'Tracer et mentionner',
        actions: [
          "Classez le relevé de vérification avec le document de travail.",
          "Appliquez la section 3 de la charte : usage interne → mention traçable sur demande ; document officiel externe → mention explicite si la politique l'exige ou si le document engage la structure.",
        ],
      },
    ],
    example: {
      title: 'Paragraphe final intégré au rapport',
      lines: [
        "« Entre octobre et décembre 2025, le projet a distribué 1 205 kits d'hygiène dans 3 sites (rapport de distribution T4 2025). Le standard Sphère fixe un minimum de 15 litres d'eau par personne et par jour pour la boisson et l'hygiène domestique ; le suivi du projet mesurera l'atteinte de ce seuil dans les sites appuyés. »",
        "Relu par Patrick Mumbere le 16/01/2026 ; relevé de vérification classé dans le dossier du rapport.",
      ],
    },
    result: "Un texte entièrement vérifié, relu par une deuxième personne, accompagné de son relevé de vérification. C'est le livrable de la procédure.",
    tip: "Remplacer une statistique supprimée par un engagement de mesure (« le suivi mesurera… ») est souvent plus honnête et plus utile au bailleur qu'un chiffre invérifiable.",
  },

  // ───────────── Procédure 6 — Compléter la charte ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Section 1 — Les données que je ne soumets jamais à une IA grand public',
    intro: "La charte charte-utilisation-responsable-ia-professionnelle.docx tient sur une page. Son objectif, écrit en tête : poser noir sur blanc ce qui est interdit, ce qui est exigé, et qui valide en cas de doute. La section 1 contient déjà les trois catégories du module ; vous complétez la ligne « Autres catégories propres à notre structure (à compléter) ».",
    steps: [
      {
        title: 'Lire et compléter',
        actions: [
          "Ouvrez la charte, lisez le bloc de la section 1 : bailleurs, données personnelles, informations sécuritaires.",
          "Reprenez les documents surlignés pendant la procédure 3 et listez les types de documents de votre poste qui contiennent ce genre de données.",
          "Sous « Autres catégories propres à notre structure (à compléter) », écrivez des catégories nommées par type de document, pas des généralités.",
        ],
      },
    ],
    example: {
      title: 'Section 1 complétée par Amani',
      lines: [
        "Autres catégories propres à notre structure : contrats et grilles tarifaires fournisseurs (dont le contrat-cadre Transco Sarl) ; listes de distribution et listes de paiement ; itinéraires des convois et emplacements des entrepôts ; comptes rendus des réunions de sécurité ; évaluations et dossiers du personnel.",
      ],
    },
    result: "La section 1 nomme, en plus des trois catégories génériques, les documents concrets de votre poste qui ne doivent jamais aller dans une IA grand public.",
    pitfall: "Écrire « toute donnée sensible » : c'est vrai mais inutilisable un jour de presse. Nommez les documents, pour que la règle se reconnaisse au premier coup d'œil.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Section 2 — La vérification obligatoire avant tout usage externe',
    intro: "La section 2 est déjà rédigée : toute donnée factuelle générée par l'IA est vérifiée à la source avant usage dans un document destiné à un tiers ; aucun contenu généré n'est transmis sans relecture humaine complète ; en cas de doute, l'information est considérée comme fausse jusqu'à preuve du contraire.",
    steps: [
      {
        title: 'S\'approprier la règle',
        actions: [
          "Lisez la section 2 phrase par phrase et associez chaque phrase à une étape de la procédure 5.",
          "Si votre poste impose des exigences supplémentaires, ajoutez-les à la suite du paragraphe, en une ou deux phrases.",
          "Ne retirez aucune des trois phrases existantes.",
        ],
      },
    ],
    example: {
      title: 'Ajout d\'Amani à la suite de la section 2',
      lines: [
        "« Tout chiffre interne repris d'une réponse d'IA est recopié depuis le document source, jamais depuis la réponse. Toute référence est vérifiée en ouvrant moi-même le lien. Le relevé de vérification est classé avec le document. »",
      ],
    },
    result: "Une section 2 que vous pouvez appliquer sans réfléchir : chaque phrase correspond à un geste précis de la procédure 5.",
    tip: "Les ajouts les plus utiles viennent de vos propres tests de la procédure 1 : si vous avez vu une IA inventer des références, écrivez la règle qui vous en protège.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Section 3 — Les pratiques de divulgation : quand je mentionne l\'usage de l\'IA',
    intro: "La section 3 est un tableau à deux cases. Usage interne (brouillon, reformulation, idée) : mention non systématique, mais traçable si un collègue ou un responsable le demande. Document officiel externe (bailleur, partenaire, client) : mention explicite recommandée si la politique de l'organisation l'exige, ou si le document engage la responsabilité de la structure.",
    steps: [
      {
        title: 'Rendre la règle applicable',
        actions: [
          "Vérifiez auprès de la direction si l'organisation ou les bailleurs exigent une mention de l'IA dans les documents externes.",
          "Décidez comment vous rendez l'usage interne « traçable » (où vous classez la conversation ou le relevé).",
          "Si nécessaire, précisez votre pratique sous le tableau, en une phrase par case.",
        ],
      },
    ],
    example: {
      title: 'Précision retenue par l\'équipe de Goma',
      lines: [
        "Usage interne : l'export ou le lien de la conversation est classé dans le dossier du document concerné.",
        "Document externe : mention explicite « rédigé avec l'appui d'un outil d'IA, contenu vérifié et validé par [nom, fonction] » dès qu'un paragraphe entier a été produit avec l'IA, ou si le bailleur le demande.",
      ],
    },
    result: "Vous savez, pour chaque document que vous produisez, s'il faut mentionner l'IA, et comment le prouver si on vous le demande.",
    pitfall: "Confondre divulgation et vérification : mentionner l'IA ne dispense jamais de vérifier le contenu, et ne transfère pas la responsabilité à l'outil.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Section 4 — Les outils validés et le référent en cas de doute',
    intro: "La section 4 est un tableau à deux colonnes à remplir : « Plateformes IA autorisées dans notre structure (à compléter) » et « Personne à contacter en cas de doute (référent IA / RSSI) ». C'est la section que vous consulterez le plus souvent.",
    steps: [
      {
        title: 'Remplir la colonne de gauche',
        actions: [
          "Reprenez les décisions de la procédure 2, étape 4.",
          "Pour chaque plateforme, indiquez le type de compte et les données autorisées.",
          "Indiquez explicitement l'usage permis pour les comptes personnels, s'il y en a un.",
        ],
      },
      {
        title: 'Remplir la colonne de droite',
        actions: [
          "Inscrivez le nom, la fonction et le moyen de contact du référent, et un suppléant.",
          "S'il n'existe pas de référent, inscrivez la personne qui devrait l'être et signalez-le à votre responsable : l'exercice du module le demande.",
        ],
      },
    ],
    table: {
      columns: ['Plateformes IA autorisées dans notre structure', 'Personne à contacter en cas de doute (référent IA / RSSI)'],
      rows: [
        ["Copilot avec le compte professionnel Microsoft 365 : documents internes, hors données personnelles et sécuritaires. ChatGPT, Claude, Perplexity, Gemini en compte personnel : contenu public ou anonymisé uniquement. Espace ChatGPT entreprise : en cours de contractualisation.", "Jean-Claude Paluku, responsable informatique, référent IA / RSSI — par Teams ou au bureau informatique de Goma. Suppléante : Furaha Bisimwa, directrice pays."],
      ],
    },
    result: "Une section 4 qui répond en dix secondes à deux questions : « ai-je le droit d'utiliser cet outil pour ce document ? » et « qui j'appelle si je doute ? ».",
    tip: "Reportez la section 4 dans la signature de vos courriels internes ou épinglez-la dans le canal Teams de l'équipe : en cas d'incident, personne ne cherche la charte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Section 5 — L\'engagement personnel : signer et rendre la charte accessible',
    intro: "La section 5 contient l'engagement : respecter la charte dans toute utilisation professionnelle d'un outil d'IA générative, et alerter son responsable sans délai en cas d'incident (donnée sensible collée par erreur, doute sérieux sur une réponse IA déjà utilisée). Le tableau final porte « Nom, fonction » et « Date et signature ».",
    steps: [
      {
        title: 'Signer',
        actions: [
          "Relisez la charte entière une dernière fois, sections 1 à 5.",
          "Complétez « Nom, fonction » et « Date et signature ».",
          "Enregistrez en PDF (Fichier > Enregistrer sous > PDF) et conservez le .docx pour les mises à jour.",
        ],
      },
      {
        title: 'Rendre accessible',
        actions: [
          "Classez le PDF signé dans votre dossier personnel et transmettez-en une copie à votre responsable.",
          "Gardez un raccourci vers la charte sur votre bureau ou dans votre navigateur.",
          "Prévoyez une relecture de la section 4 à chaque nouvel outil autorisé.",
        ],
      },
    ],
    example: {
      title: 'Section 5 — fil rouge',
      lines: [
        "Nom, fonction : Amani Kahindo, chargée administrative et logistique, Goma.",
        "Date et signature : 21/01/2026, signée.",
        "Lors de l'atelier du 23/01, les 14 membres de l'équipe signent la version d'équipe ; Furaha Bisimwa archive les 14 PDF.",
      ],
    },
    result: "La charte complétée et signée, en PDF, accessible en un clic. Votre référence rapide dans les moments où vous serez pressé et tenté de sauter une vérification.",
    pitfall: "Signer sans relire la section 4 : la charte n'aide que si vous savez, de mémoire, quels outils sont autorisés et qui appeler.",
  },

  // ───────────── Procédure 7 — Gérer un incident ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: "Qualifier l'incident : ne pas paniquer, mais ne pas minimiser",
    intro: "Le mercredi 14 janvier 2026 à 16 h 20, Espoir Kambale, assistant de programme, colle 3 pages d'un rapport intermédiaire de 40 pages destiné à ECHO — montants budgétaires précis et nom du bailleur compris — dans un compte ChatGPT personnel gratuit, avec la consigne « résume-moi ça en 10 lignes ». À 16 h 35, en refermant l'onglet, il remarque la mention « confidentiel — diffusion restreinte » sur la page de garde.",
    steps: [
      {
        title: 'Arrêter et qualifier',
        actions: [
          "Arrêtez immédiatement toute nouvelle saisie dans l'outil concerné.",
          "Dites-vous la phrase exacte : « Une donnée confidentielle a quitté le périmètre de contrôle de l'organisation. » C'est un incident réel.",
          "Identifiez la ou les catégories concernées (bailleur, personnelle, sécuritaire).",
          "Ne fermez pas votre session de travail et ne supprimez rien avant d'avoir parlé au référent.",
        ],
      },
    ],
    example: {
      title: 'Qualification par Espoir — 16 h 37',
      lines: [
        "Catégorie : données confidentielles de bailleur (montants budgétaires non publiés, nom du bailleur).",
        "Pas de données personnelles ni sécuritaires dans les 3 pages (vérifié en les relisant).",
        "Plateforme : ChatGPT, compte personnel gratuit, aucune licence de l'organisation.",
      ],
    },
    result: "L'incident est nommé et qualifié en moins de cinq minutes, sans panique ni minimisation.",
    pitfall: "« Ce n'est qu'un résumé, personne ne le verra » : minimiser retarde le signalement, et c'est le retard qui transforme un incident gérable en problème grave.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Signaler sans délai au responsable ou au référent',
    intro: "Un incident signalé rapidement se gère ; un incident caché s'aggrave. Le signalement va à la personne désignée en section 4 de la charte — ou, à défaut, à votre responsable direct.",
    steps: [
      {
        title: 'Signaler',
        actions: [
          "Ouvrez la section 4 de la charte et appelez le référent ; s'il est injoignable, appelez le suppléant.",
          "Donnez en trois phrases : ce qui a été collé, où, quand.",
          "Confirmez par écrit (message Teams ou courriel interne) dans la foulée, sans recopier le contenu confidentiel.",
        ],
      },
    ],
    example: {
      title: 'Message d\'Espoir — 16 h 42',
      lines: [
        "À : Jean-Claude Paluku ; copie : Amani Kahindo",
        "« Incident IA : à 16 h 20, j'ai collé 3 pages (p. 12 à 14) du rapport intermédiaire confidentiel destiné au bailleur, avec des montants budgétaires, dans mon compte ChatGPT personnel gratuit, pour un résumé. Je n'ai rien supprimé. Je suis disponible maintenant pour la suite. »",
      ],
    },
    result: "Le référent est informé moins de 30 minutes après le collage, par oral puis par écrit, sans que le contenu confidentiel soit recopié dans le message.",
    tip: "Le message écrit sert de point de départ daté à la gestion de l'incident : il protège aussi la personne qui signale, en montrant sa bonne foi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Documenter précisément ce qui a été collé',
    intro: "Le référent ne peut évaluer l'ampleur réelle du risque qu'avec des faits précis : quel extrait, quelles données, sur quelle plateforme, à quelle heure. Vous remplissez une fiche d'incident pendant que vos souvenirs sont exacts.",
    steps: [
      {
        title: 'Remplir la fiche d\'incident',
        actions: [
          "Date et heure du collage, et heure de détection.",
          "Plateforme et type de compte (personnel gratuit, payant, professionnel).",
          "Document d'origine, pages ou paragraphes exacts collés.",
          "Données sensibles concernées, listées précisément (montants, noms, lieux).",
          "Consigne envoyée et usage fait de la réponse (copiée ? transmise ?).",
          "État du paramètre d'amélioration du modèle dans le compte, si vous le connaissez.",
        ],
      },
    ],
    table: {
      columns: ['Champ', 'Fiche d\'incident du 14/01/2026'],
      rows: [
        ['Collage / détection', '14/01/2026, 16 h 20 / 16 h 35'],
        ['Plateforme, compte', 'ChatGPT, compte personnel gratuit d\'Espoir Kambale'],
        ['Contenu collé', 'Rapport intermédiaire au bailleur, p. 12 à 14 (sur 40)'],
        ['Données sensibles', '6 lignes budgétaires avec montants, nom du bailleur, mention « confidentiel »'],
        ['Consigne et usage', '« résume-moi ça en 10 lignes » ; résumé non copié, non transmis'],
        ['Paramètre d\'amélioration du modèle', 'Activé (réglage par défaut, jamais modifié)'],
      ],
    },
    result: "Une fiche d'incident complète remise au référent, qui peut évaluer le risque et décider des mesures.",
    pitfall: "Rédiger une fiche vague (« quelques pages du rapport ») : sans pages ni données précises, le référent doit supposer le pire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Ne pas tenter de « réparer » seul, puis appliquer les mesures décidées',
    intro: "Le dernier geste est un non-geste : ne demandez pas à la même IA de « supprimer » l'échange et ne recommencez pas l'action pour « corriger ». Selon la plateforme, la donnée peut déjà avoir été traitée ou conservée ; une nouvelle manipulation n'annule rien. Les mesures sont décidées par le référent et la direction.",
    steps: [
      {
        title: 'Ce que vous ne faites pas',
        actions: [
          "Ne demandez pas à l'IA d'oublier ou de supprimer ce qu'elle a reçu.",
          "Ne recollez pas de version « corrigée » pour remplacer la première.",
          "Ne supprimez pas la conversation de vous-même avant la décision du référent.",
        ],
      },
      {
        title: 'Ce que le référent et la direction décident',
        actions: [
          "Les actions sur le compte (paramètres, historique), en sachant qu'elles réduisent l'exposition future sans remettre le risque à zéro.",
          "L'éventuelle information du bailleur, selon les obligations de confidentialité de la convention.",
          "Les mesures de prévention : rappel de la charte, formation, outil professionnel pour ce type de document.",
        ],
      },
    ],
    example: {
      title: 'Décisions du 15/01/2026',
      lines: [
        "Jean-Claude Paluku : désactivation de l'option d'amélioration du modèle sur le compte d'Espoir, suppression de la conversation de l'historique, mention de ces actions dans la fiche.",
        "Furaha Bisimwa : information du chargé de suivi du bailleur, conformément à la clause de confidentialité de la convention.",
        "Prévention : l'incident devient le cas d'étude de l'atelier du 23/01 ; les rapports bailleurs sont ajoutés en section 1 de la charte d'équipe.",
      ],
    },
    result: "L'incident est clos avec une fiche, des mesures datées et une règle de prévention intégrée à la charte. Personne n'a aggravé la situation en voulant « réparer ».",
    tip: "Traitez l'incident comme un retour d'expérience, pas comme une faute à cacher : c'est ce qui rend les signalements suivants possibles.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — « Le copier-coller de trop », minute par minute',
    scenario: "Rappel : mercredi 14 janvier 2026, 16 h 20. Pressé par un rapport bailleur de 40 pages à rendre en fin de journée, Espoir Kambale colle 3 pages, montants et nom du bailleur compris, dans un compte gratuit grand public pour obtenir un résumé de 10 lignes. Il obtient un résumé correct en quelques secondes, puis découvre la mention « confidentiel — diffusion restreinte ». Voici le déroulé attendu.",
    steps: [
      { title: '16 h 35 — Détection', body: "Espoir arrête toute saisie. Il ne ferme pas la conversation et ne demande pas à l'IA de supprimer quoi que ce soit." },
      { title: '16 h 37 — Qualification', body: "Données confidentielles de bailleur ; pas de données personnelles ni sécuritaires ; compte personnel gratuit sans garantie contractuelle.", result: 'Incident réel, ni dramatisé ni minimisé.' },
      { title: '16 h 42 — Signalement', body: "Appel puis message écrit au référent IA, copie à Amani, sans recopier le contenu confidentiel." },
      { title: '17 h 10 — Documentation', body: "Fiche d'incident complète : heures, plateforme, pages 12 à 14, 6 lignes budgétaires, consigne, résumé non transmis, paramètre d'amélioration activé." },
      { title: '15/01 — Mesures', body: "Actions sur le compte décidées par le référent ; information du bailleur décidée par la direction ; rapports bailleurs ajoutés à la section 1 de la charte d'équipe." },
    ],
    result: "Incident signalé 22 minutes après le collage, documenté dans l'heure, clos le lendemain avec des mesures de prévention. Aucune manipulation n'a aggravé l'exposition.",
  },
  {
    type: 'case-study',
    title: "Corrigé intégral 2/3 — Ce qui aurait évité l'incident (analyse modèle en 10 lignes)",
    scenario: "L'exercice demande d'expliquer, en 10 lignes maximum, ce que vous auriez fait différemment dès la réception du rapport, avant même d'ouvrir une IA. Voici une réponse modèle, construite sur les procédures du module.",
    steps: [
      { title: '1. Lire la page de garde', body: "« Confidentiel — diffusion restreinte » est un signal d'arrêt immédiat : la question 1 de la checklist reçoit un oui avant toute autre réflexion." },
      { title: '2. Consulter la règle', body: "Charte ou note de direction : le compte personnel est exclu pour un document bailleur ; l'outil professionnel (Copilot avec le compte Microsoft 365) est la voie autorisée." },
      { title: "3. N'envoyer que ce qui est nécessaire", body: "Pour un résumé, ni le nom du bailleur ni les montants ne sont nécessaires : un extrait anonymisé (Bailleur X, « montants en cours de validation ») suffisait." },
      { title: '4. Prévoir la vérification', body: "Le résumé, destiné au rapport, devait être relu contre les pages d'origine avant intégration." },
      { title: '5. Gérer le temps', body: "Anonymiser 3 pages prend environ 5 minutes : le gain de temps du collage brut ne compensait pas le risque." },
    ],
    table: {
      columns: ['Ce qui s\'est passé', 'Ce qui aurait dû se passer'],
      rows: [
        ['Compte personnel gratuit', 'Copilot avec le compte professionnel'],
        ['3 pages brutes, montants et bailleur', 'Extrait anonymisé, codes et mentions neutres'],
        ['Mention « confidentiel » vue après coup', 'Page de garde lue avant toute action'],
        ['Aucune charte connue', 'Charte signée, section 4 connue de mémoire'],
      ],
    },
  },
  {
    type: 'case-study',
    title: "Corrigé intégral 3/3 — Les livrables d'Amani pour l'atelier du 23 janvier",
    scenario: "Le jeudi 22 janvier 2026, Amani remet à Furaha Bisimwa le dossier complet de l'atelier. Voici son contenu final, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Fiche « 3 tests »', body: "Variabilité (2 titres différents, capitale identique), date de coupure (réponse non datée sans recherche, 2 sources pertinentes sur 5 avec Perplexity), hallucination (2 références inexistantes sur 3, la 3e hors sujet)." },
      { title: 'Grille de comparaison', body: "6 tâches testées dans « Aide au choix » (Claude ×2, Perplexity, Copilot, ChatGPT, Gemini), 3 conflits identifiés dans « Comparatif » et réorientés vers Copilot pro ; commentaire personnel en ligne 10." },
      { title: 'Fiche réflexe « Avant de coller »', body: "Les 4 questions appliquées au compte rendu du 12/01 : décision « anonymiser puis Copilot pro »." },
      { title: 'Extrait anonymisé', body: "Version avant / après, contrôle Ctrl+F à 0 résultat, table de correspondance hors de l'IA." },
      { title: 'Relevé de vérification', body: "5 affirmations : 2 confirmées, 1 précisée, 1 corrigée (1 250 → 1 205), 2 supprimées ; relu par Patrick Mumbere." },
      { title: 'Charte et fiche d\'incident', body: "Charte complétée sections 1 à 5, signée le 21/01 ; fiche d'incident du 14/01 servant de modèle." },
    ],
    result: "Décision du 23 janvier : les 14 membres de l'équipe signent la charte ; la grille et la fiche réflexe sont épinglées dans le canal Teams ; une revue de la section 4 est programmée dès que l'espace ChatGPT entreprise sera contractualisé.",
    tip: "Gardez ce dossier comme modèle : dans votre organisation, seuls les noms, les outils autorisés et les documents sensibles changeront ; la démarche reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Grille, charte et analyse du cas',
    instructions: "Réalisez les trois parties sur votre propre contexte professionnel, en suivant les procédures 2, 6 et l'étude de cas. Comparez ensuite votre travail avec le corrigé intégral.",
    steps: [
      {
        title: '1. Grille de comparaison',
        actions: [
          "Ouvrez grille-comparaison-5-plateformes-ia.xlsx, onglet « Aide au choix ».",
          "Testez au moins 4 types de tâches différents en B5 et notez, pour chacun, la plateforme recommandée (B6) et sa justification (B7).",
          "Dans l'onglet « Comparatif », ajoutez une ligne de commentaire personnel (colonne de votre choix) sur l'outil que vous utilisez le plus : son usage actuel correspond-il à ses points forts réels ?",
        ],
      },
      {
        title: '2. Charte personnelle',
        actions: [
          "Complétez charte-utilisation-responsable-ia-professionnelle.docx avec vos propres réponses.",
          "Section 1 : les données que vous ne soumettrez jamais à une IA grand public dans votre contexte réel.",
          "Section 2 : vos exigences de vérification.",
          "Section 4 : votre référent en cas de doute ou, à défaut, qui devrait l'être. Puis signez.",
        ],
      },
      {
        title: '3. Analyse du cas',
        actions: [
          "En 10 lignes maximum, expliquez ce que vous auriez fait différemment dans « Le copier-coller de trop », dès la réception du rapport bailleur, avant même d'ouvrir une IA.",
        ],
      },
    ],
    deliverable: 'La grille complétée, la charte signée et votre analyse de 10 lignes.',
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Feu vert ou feu rouge ? Six situations à trancher",
    instructions: "Pour chaque situation, appliquez la checklist des 4 questions et la grille, puis donnez une décision : feu vert (quel outil), anonymiser puis coller (quel outil), outil professionnel seulement, ou pas d'IA. Justifiez en une ligne.",
    steps: [
      {
        title: 'Les situations',
        actions: [
          "A. Traduire en anglais un communiqué déjà publié sur le site de l'organisation.",
          "B. Résumer la liste des 320 bénéficiaires d'une distribution, avec leurs numéros de téléphone.",
          "C. Connaître les nouvelles exigences d'un appel à propositions publié la semaine dernière.",
          "D. Reformuler, dans Outlook, un courriel à un fournisseur qui ne contient aucun montant.",
          "E. Préparer un briefing sur les déplacements de l'équipe vers un site de terrain la semaine prochaine.",
          "F. Améliorer la structure d'un rapport financier interne non publié.",
        ],
      },
    ],
    tip: "Points de contrôle : A feu vert (ChatGPT ou autre) ; B pas d'IA grand public, données personnelles ; C feu vert Perplexity, puis vérification sur le site du bailleur ; D feu vert Copilot pro ; E pas d'IA, information sécuritaire ; F anonymiser (retirer tous les montants) ou outil professionnel seulement.",
    deliverable: 'Un tableau de 6 lignes : situation, réponses aux 4 questions, décision, justification.',
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre première semaine encadrée',
    instructions: "Appliquez les réflexes du module pendant cinq jours ouvrés à votre travail réel, dans le respect de la politique de votre organisation.",
    steps: [
      {
        title: 'Avant chaque usage',
        actions: [
          "Décrivez la tâche par ce qu'elle doit produire et choisissez l'outil avec la grille.",
          "Appliquez la checklist des 4 questions ; anonymisez si nécessaire.",
        ],
      },
      {
        title: 'Après chaque usage',
        actions: [
          "Vérifiez à la source chaque affirmation factuelle destinée à un tiers.",
          "Notez dans un journal : date, tâche, outil, décision de la checklist, nombre de faits vérifiés et corrigés, changement d'outil éventuel.",
        ],
      },
    ],
    deliverable: "Un journal d'au moins 5 usages réels, avec pour chacun l'outil choisi, la décision de la checklist et le résultat de la vérification, plus deux lignes de conclusion sur ce que vous changez durablement.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre fiche de tests contient les 3 tests, avec la question exacte, la réponse obtenue et ce que chaque test prouve.",
      "L'onglet « Aide au choix » a été testé sur au moins 4 tâches, chacune avec plateforme (B6) et justification (B7) notées.",
      "Chaque recommandation a été contrôlée dans « Comparatif » (limites, confidentialité, intégration) et confrontée aux outils autorisés.",
      "Une ligne de commentaire personnel figure dans « Comparatif » et dit si votre usage correspond aux points forts réels de votre outil habituel.",
      "La section 1 de votre charte nomme des documents concrets de votre poste, pas seulement « les données sensibles ».",
      "La section 4 indique les plateformes autorisées avec le type de compte, et un référent nommé (ou la personne qui devrait l'être).",
      "La charte est datée et signée en section 5.",
      "Votre analyse du cas tient en 10 lignes et cite au moins : la mention « confidentiel », la politique de l'organisation, l'anonymisation et l'outil professionnel.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Traiter les 5 IA comme interchangeables : décrivez la tâche par ce qu'elle doit produire, puis utilisez la grille.",
      "Faire une confiance aveugle à une réponse assurée : le ton ne dit rien de la fiabilité. Surlignez et vérifiez chaque fait destiné à un tiers.",
      "Considérer qu'une réponse « avec sources » est vérifiée : ouvrez la source et retrouvez le passage exact.",
      "Ignorer la politique de l'organisation pour gagner du temps : quelques minutes gagnées ne compensent jamais une donnée confidentielle exposée.",
      "Copier un document entier alors qu'un extrait anonymisé suffisait : l'anonymisation prend rarement plus de quelques minutes.",
      "Ne retirer que les noms : lieux, dates et effectifs suffisent souvent à ré-identifier une équipe ou une opération.",
      "Confondre compte personnel payant et licence professionnelle : payer n'achète aucune garantie contractuelle pour l'organisation.",
      "Croire que supprimer la conversation annule l'exposition : seule l'absence de collage protège.",
      "Cacher un incident ou tenter de le « réparer » seul : signalez sans délai, documentez, laissez le référent décider.",
      "Déléguer à l'IA une décision sur des personnes (sélection, évaluation) : elle reproduit des biais et ne porte aucune responsabilité.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez constaté par trois tests que l'IA prédit au lieu de savoir : réponses variables, connaissances datées, références inventées.",
      "Vous avez retracé l'histoire des LLM et distingué les trois briques de 2026 : modèles de langage, IA multimodales, agents.",
      "Vous avez utilisé la grille de comparaison sur des tâches réelles et confronté chaque recommandation aux outils autorisés.",
      "Vous avez appliqué la checklist des 4 questions à un document réel et pris une décision tracée.",
      "Vous avez anonymisé un extrait, contrôlé qu'il ne permet plus aucune ré-identification et tenu la table de correspondance hors de l'IA.",
      "Vous avez vérifié une réponse d'IA affirmation par affirmation, corrigé un chiffre altéré et supprimé une étude inventée.",
      "Vous avez complété et signé votre charte d'utilisation responsable, et vous savez dérouler les 4 gestes d'un incident.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer, en une phrase simple, pourquoi un LLM peut halluciner avec une confiance totale.",
      "Je peux citer les 5 plateformes de cette formation et le point fort principal de chacune.",
      "Je sais utiliser la grille de comparaison pour choisir la bonne IA selon une tâche donnée.",
      "Je connais les 3 catégories de données à ne jamais soumettre à une IA grand public sans validation.",
      "J'ai complété et signé ma charte personnelle d'utilisation responsable de l'IA.",
      "Je sais quelle checklist appliquer avant de coller un document ou une donnée dans une IA.",
      "Je sais anonymiser un extrait et vérifier une réponse à la source avant tout usage externe.",
      "Je sais quoi faire immédiatement si une donnée sensible est collée par erreur dans une IA grand public.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « ChatGPT (OpenAI) — Productivité maximale & automatisation ». Vous y passerez du choix de l'outil à sa maîtrise : rédaction, analyse, résumé de documents volumineux et GPT personnalisés — en appliquant à chaque usage la charte et la checklist que vous venez de signer.",
  },
]
