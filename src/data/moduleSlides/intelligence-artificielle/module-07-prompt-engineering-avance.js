// Module 07 — Prompting Engineering avancé — L'art de commander l'IA
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (diagnostic de l'instabilité, décomposition en étapes de
// raisonnement, structuration ICIO, techniques complémentaires, tests et
// optimisation, guide Word, bibliothèque Excel, vie de la bibliothèque) est
// détaillée étape par étape et appliquée au même fil rouge : l'analyse
// budgétaire logistique mensuelle d'Horizon Grands Lacs, dont le prompt
// change de format à chaque exécution. Organisation et personnes fictives ;
// chiffres d'exemple recalculés et cohérents d'une diapositive à l'autre.
export default [
  {
    type: 'cover',
    title: "Prompting Engineering avancé — L'art de commander l'IA",
    hook: "À la fin de ce module, le prompt que vous recopiez chaque mois et qui rend tantôt trois puces, tantôt deux pages, ne vous trahira plus : vous saurez diagnostiquer pourquoi il varie, le réécrire avec un raisonnement explicite (chain-of-thought) et la méthode ICIO, le tester sur trois cas réels, le documenter dans le guide Word, l'enregistrer dans la bibliothèque d'organisation avec sa version et son statut, puis le faire évoluer sans rien casser.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Diagnostiquer pourquoi un prompt récurrent donne des résultats différents en l'exécutant trois fois sur le même input, en produisant un tableau de comparaison (structure, niveau de détail, conclusion) et un diagnostic « Output, raisonnement, ou les deux ».",
      "Décomposer une tâche d'analyse en 4 à 6 étapes de raisonnement mesurables et validées par un expert, en produisant la liste numérotée de la section 3 du guide de construction.",
      "Structurer un prompt professionnel récurrent avec les quatre blocs de la méthode ICIO, en produisant un prompt complet, délimité, dont le format de sortie est non négociable.",
      "Choisir entre chain-of-thought, tree-of-thought, exemples de sortie (few-shot) et chaînage de prompts selon la tâche, en produisant une décision justifiée et, quand elle s'impose, un prompt tree-of-thought ou une chaîne de deux prompts.",
      "Tester et optimiser un prompt sur trois cas réels avec une grille d'évaluation, en produisant un tableau de tests (cas, conformité, ajustement) et un journal de modifications où chaque correction est isolée.",
      "Documenter la transformation dans le guide Word puis enregistrer le prompt dans la bibliothèque Excel, en produisant le guide complété et une ligne complète (catégorie, quatre blocs, version, date, nombre de cas, statut).",
      "Faire évoluer un prompt validé sans casser ses usages, en produisant une version v2 passée en test de régression et un test de reprise réussi par un collègue.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur l'intelligence artificielle : vous allez réparer un vrai prompt, sur un seul cas suivi du début à la fin. Chaque procédure est découpée en étapes numérotées, avec le texte exact à écrire, les cellules et les sections à remplir dans les deux gabarits fournis, et le résultat attendu.",
      "À la fin du module, vous aurez en main sept livrables réutilisables tels quels pour vos propres prompts récurrents :",
    ],
    bullets: [
      "Un tableau de comparaison de trois exécutions du prompt d'origine, et un diagnostic de la cause de l'instabilité.",
      "Une liste de 5 étapes de raisonnement propres à votre métier, avec seuils et définitions validés par le demandeur.",
      "Un prompt complet en quatre blocs ICIO (Instruction, Contexte, Input, Output), avec ses étapes numérotées et un exemple de format.",
      "Une grille d'évaluation, trois réponses de référence calculées dans Excel et un journal de modifications.",
      "Le guide guide-construction-prompts-chain-of-thought.docx complété : prompt original, diagnostic, étapes, prompt reconstruit, tests, signature.",
      "Une ligne complète dans bibliotheque-prompts-organisationnelle-icio.xlsx (onglet « Bibliotheque ») et l'onglet « Synthese » contrôlé.",
      "Une version v2 du prompt, passée en test de régression, et la preuve qu'un collègue sait le réutiliser sans aide.",
    ],
    tip: "Ouvrez dès maintenant les deux fichiers du dossier 04-templates. L'onglet « Bibliotheque » contient déjà quatre prompts validés ou en test (lignes 5 à 8) : vous les lirez comme des modèles, et c'est sur la ligne 9 que vous ajouterez le vôtre.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs et le prompt qui change tout le temps',
    body: [
      "Horizon Grands Lacs est l'organisation fictive que vous avez déjà rencontrée : trois sites, Goma, Bukavu et Kinshasa. Amani Kahindo, chargée administrative et logistique à Goma, prépare chaque mois l'analyse du budget logistique pour le comité de direction présidé par la directrice pays, Furaha Bisimwa. Elle la remet d'abord à son supérieur, Patrick Mumbere, responsable achats, qui la relit avant le comité.",
      "Le lundi 5 octobre 2026, Patrick lui écrit : « Le comité de vendredi veut l'analyse de septembre. Et cette fois, même format que les analyses de la finance : je ne veux plus tout relire à chaque fois. » Amani utilise depuis quatre mois le même prompt, recopié chaque mois sous un nouveau tableau de chiffres. Elle a jusqu'au jeudi 8 octobre pour livrer.",
    ],
    table: {
      columns: ['Analyse remise', 'Ce que l\'IA a produit avec le prompt actuel', 'Réaction de Patrick Mumbere'],
      rows: [
        ['Juin 2026', 'Trois puces de trois lignes, sans chiffres de cause', '« C\'est un peu court. »'],
        ['Juillet 2026', 'Deux pages avec quatre intertitres', '« Où est l\'essentiel ? »'],
        ['Août 2026', 'Huit puces, dont des recettes mises en avant', '« Je ne t\'ai pas demandé les recettes. »'],
        ['Septembre 2026', 'Un tableau de six lignes et deux phrases', '« Le format change tout le temps. »'],
      ],
    },
    highlight: "Le prompt d'origine, recopié chaque mois : « Analyse ce budget et dis-moi ce qui ne va pas. Voici les chiffres : [tableau collé]. » Aucune consigne de raisonnement, aucun format de sortie, aucun destinataire : le modèle devine tout.",
  },
  {
    type: 'concept',
    title: 'La carte du module : 8 procédures, dans l\'ordre où vous les exécuterez',
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante, et reprend une étape du guide pratique du module. Ne sautez aucune étape : un prompt validé trop vite est découvert défaillant en production, sur le cas qui compte.",
    bullets: [
      "Procédure 1 — Diagnostiquer pourquoi le prompt est instable (5 étapes) : bibliothèque d'abord, jeu d'essai, trois exécutions, comparaison, diagnostic.",
      "Procédure 2 — Décomposer la tâche en étapes de raisonnement (4 étapes) : brouillon libre, étapes mesurables, validation par le demandeur, rédaction.",
      "Procédure 3 — Structurer le prompt avec la méthode ICIO (6 étapes) : Instruction, Contexte, étapes, Input, Output, assemblage et relecture à froid.",
      "Procédure 4 — Choisir les techniques complémentaires (4 étapes) : chain-of-thought ou tree-of-thought, prompt ToT, exemple de sortie, chaînage.",
      "Procédure 5 — Tester, évaluer et optimiser sur trois cas (6 étapes) : cas, réponses de référence, grille, exécutions, corrections isolées, décision.",
      "Procédure 6 — Documenter dans le guide Word (6 étapes) : les cinq sections et le bloc de signature.",
      "Procédure 7 — Enregistrer dans la bibliothèque Excel (6 étapes) : espace partagé, légende, dix colonnes, onglet Synthèse.",
      "Procédure 8 — Faire vivre la bibliothèque (5 étapes) : cas qui échoue, version v2, test de régression, publication, test de reprise et revue.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '3 exécutions, 3 réponses',
    caption: "Le même prompt, exécuté trois fois sur le même tableau d'août, a rendu trois puces, un texte de 600 mots, puis un tableau — et deux conclusions opposées sur l'origine de la hausse du dédouanement.",
    context: "Ce n'est pas un défaut du modèle : le prompt ne lui a jamais dit quelle structure produire ni comment raisonner. Tout ce module consiste à retirer au modèle la liberté de deviner, pour qu'Amani obtienne la même structure, le même niveau de détail et la même logique de raisonnement, mois après mois.",
  },
  {
    type: 'concept',
    title: 'Pourquoi un même prompt donne plusieurs réponses',
    body: [
      "Un modèle de langage génère sa réponse token par token (fragment de mot, vu au Module 01), dans l'ordre. Quand la question demande un raisonnement en plusieurs étapes — calculer un écart, comparer des options, diagnostiquer une cause — et que vous réclamez directement la conclusion, il doit la produire en une seule passe, sans brouillon visible.",
      "Il improvise alors un raccourci, et ce raccourci est instable : il change légèrement à chaque génération. Plus le prompt laisse de liberté (structure, longueur, critères), plus les variations s'accumulent.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Prompt : « Analyse ce budget et dis-moi ce qui ne va pas. »",
        "Dédouanement, août : prévu 2 000 USD, réalisé 4 080 USD, soit + 2 080 USD.",
        "Exécution A conclut « trop de dossiers » ; exécution C conclut « tarif trop élevé ». En réalité : effet volume 1 000 USD, effet prix 1 080 USD. Aucune consigne n'a demandé de les calculer : chaque exécution a choisi un côté.",
      ],
    },
    tip: "Ne cherchez pas un « meilleur modèle » pour résoudre une instabilité de format : changez le prompt. Les trois symptômes d'instabilité (structure, détail, conclusion) ont des causes différentes, que vous apprendrez à séparer dans la procédure 1.",
  },
  {
    type: 'concept',
    title: 'Le chain-of-thought : deux effets mesurables',
    body: [
      "Le chain-of-thought (CoT) consiste à demander explicitement au modèle de dérouler son raisonnement avant sa conclusion. Il a deux effets : la qualité du résultat final augmente, parce que chaque étape intermédiaire sert de base à la suivante ; et vous pouvez auditer le raisonnement, voir à quelle étape précise un résultat déraille et corriger cette étape au lieu de deviner.",
    ],
    example: {
      title: 'Sans CoT / avec CoT — même question, fil rouge août',
      lines: [
        "Sans : « Qu'est-ce qui cloche sur le dédouanement ? » → « Le dédouanement dépasse beaucoup son budget. »",
        "Avec : « 1) Calcule l'écart en USD et en %. 2) Calcule l'effet volume. 3) Calcule l'effet prix. 4) Conclus. »",
        "→ Écart + 2 080 USD (+ 104 %) ; effet volume (6 − 4) × 500 = 1 000 USD ; effet prix (680 − 500) × 6 = 1 080 USD ; conclusion : hausse mixte, volume et prix à parts presque égales.",
      ],
    },
    highlight: "Ce que le CoT n'est pas : ajouter « think step by step » à la fin d'un prompt bancal. C'est concevoir, en amont, la séquence de raisonnement que la tâche exige réellement, et l'écrire dans le prompt.",
  },
  {
    type: 'comparison-table',
    title: 'Un CoT générique contre un CoT de métier',
    columns: ['Version', 'Ce qui est écrit dans le prompt', 'Ce que le modèle produit', 'Auditable ?'],
    rows: [
      ['Aucun CoT', '« Analyse ce budget et dis-moi ce qui ne va pas. »', 'Un résumé au hasard : structure et conclusion changent à chaque exécution', 'Non : aucune étape visible'],
      ['CoT générique', '« Réfléchis étape par étape. »', 'Un raisonnement vague, différent à chaque fois, sans seuil ni définition', 'Partiellement : on voit des étapes, mais pas les vôtres'],
      ['CoT de métier', '« 1) Retiens les postes dont l\'écart dépasse 10 %. 2) Pour chacun, calcule l\'effet volume puis l\'effet prix. 3) Classe. 4) Recommande. »', 'Un raisonnement conforme à la pratique réelle, reproductible', 'Oui : chaque étape se contrôle dans Excel'],
    ],
  },
  {
    type: 'concept',
    title: 'Le tree-of-thought : explorer plusieurs pistes avant de trancher',
    body: [
      "Le tree-of-thought (ToT) est une extension du CoT pour les cas où il n'existe pas une séquence évidente mais plusieurs pistes plausibles. Vous demandez au modèle de générer deux ou trois approches distinctes, de les évaluer selon des critères que vous précisez, puis de recommander la meilleure en justifiant l'élimination des autres.",
      "Son coût est réel : plus de tokens, plus de temps de génération, un prompt plus long à concevoir et à relire. Pour un chemin de raisonnement déjà connu et unique — calculer un écart, résumer un compte-rendu, classer des candidatures selon une grille fixe — il n'apporte rien : un CoT bien construit suffit et coûte moins cher.",
    ],
    example: {
      title: 'Usage justifié — fil rouge',
      lines: [
        "Le comité demande : « Comment ramener le transport routier à son budget d'ici fin décembre ? » Plusieurs pistes méritent comparaison : renégocier le tarif, mutualiser les trajets entre sites, reporter les trajets non urgents.",
        "Calcul des écarts de septembre : un seul chemin, connu → CoT, pas de ToT.",
      ],
    },
    pitfall: "Utiliser le ToT « pour être sûr » sur une tâche à chemin unique : vous payez trois fois le même raisonnement et vous relisez trois versions pour rien.",
  },
  {
    type: 'comparison-table',
    title: 'CoT ou ToT ? Le test de décision en quatre lignes',
    columns: ['Tâche', 'Le chemin de raisonnement est-il connu et unique ?', 'Enjeu de la décision', 'Technique'],
    rows: [
      ['Calculer l\'écart d\'un poste budgétaire', 'Oui', 'Faible à moyen', 'CoT'],
      ['Résumer un compte-rendu de réunion', 'Oui', 'Faible', 'CoT'],
      ['Classer des candidatures selon une grille fixe', 'Oui (la grille fixe le chemin)', 'Moyen', 'CoT'],
      ['Réduire de 15 % les coûts logistiques du trimestre', 'Non : renégociation, mutualisation, réduction de volume sont trois pistes distinctes', 'Élevé', 'ToT'],
    ],
  },
  {
    type: 'concept',
    title: 'La méthode ICIO : rendre un prompt réutilisable',
    body: [
      "Le CoT règle le raisonnement. ICIO règle un problème différent, tout aussi courant : un prompt qui marche à peu près une fois, mais que personne — pas même son auteur trois semaines plus tard — ne sait réutiliser pour un autre cas. ICIO structure toujours quatre éléments : Instruction, Contexte, Input, Output.",
      "Un prompt ICIO n'est pas plus long qu'un prompt mal structuré : il est organisé dans un ordre stable et complet. Une fois qu'il fonctionne pour un cas, il fonctionne pour tous les cas similaires, parce que seul l'Input change d'une exécution à l'autre ; l'Instruction, le Contexte et l'Output restent fixes. C'est cette stabilité qui rend un prompt réutilisable en bibliothèque plutôt que jetable.",
    ],
    tip: "Test rapide : si vous pouvez changer uniquement le tableau collé en dessous et relancer sans toucher au reste, votre prompt est réutilisable. Sinon, il y a encore du contexte caché dans votre tête.",
  },
  {
    type: 'comparison-table',
    title: 'Les quatre blocs ICIO — et ce qui arrive quand l\'un manque',
    columns: ['Bloc', 'Ce qu\'il contient', 'Erreur fréquente si absent', 'Dans le fil rouge'],
    rows: [
      ['I — Instruction', 'L\'action précise, à l\'impératif : analyse, compare, rédige, classe. Une seule instruction principale.', 'Le modèle devine ce qu\'on veut parmi plusieurs demandes vagues empilées', '« Analyse les écarts du budget logistique du mois en suivant les étapes ci-dessous »'],
      ['C — Contexte', 'Rôle de l\'utilisateur, secteur, contraintes, ton, destinataire final.', 'Résultat correct mais inadapté à l\'audience (trop technique pour un comité, trop vague pour un expert)', 'Comité de direction, lecture en 3 minutes, organisation à but non lucratif'],
      ['I — Input', 'Les données à traiter, clairement délimitées (balises ou guillemets).', 'Le modèle confond instructions et données quand tout est mélangé', '<donnees>…tableau du mois collé depuis Excel…</donnees>'],
      ['O — Output', 'Format de sortie : structure, longueur, sections, ce qu\'il ne faut PAS inclure.', 'Format différent à chaque exécution : première cause d\'inconsistance visuelle', '3 sections fixes, 1 page maximum, aucune recommandation générique'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Dans un prompt réutilisable, ce qui est fixe et ce qui change',
    columns: ['Bloc', 'Fixe ou variable ?', 'Exemple, d\'un mois sur l\'autre'],
    rows: [
      ['Instruction + étapes', 'Fixe', 'Les cinq étapes de raisonnement ne changent jamais'],
      ['Contexte', 'Fixe (sauf changement de destinataire)', 'Comité de direction, ton factuel, montants en USD'],
      ['Input', 'Variable : c\'est le seul bloc qui change', 'Tableau de juillet, d\'août, de septembre…'],
      ['Output', 'Fixe', 'Constat / Cause / Action, une page maximum'],
    ],
  },
  {
    type: 'concept',
    title: 'Deux techniques pour aller plus loin : exemples de sortie et chaînage',
    body: [
      "Ces deux techniques complètent CoT et ICIO. Elles relèvent de la pratique courante du prompting ; elles ne remplacent jamais un Output précis.",
      "Exemple de sortie (few-shot) : vous placez dans le bloc Output un ou deux exemples complets du résultat attendu (une ligne type, un mini-tableau). Le modèle imite la forme montrée plutôt que de choisir la sienne. Utilisez des valeurs fictives clairement signalées, sinon le modèle peut les recopier.",
      "Chaînage de prompts (prompt chaining) : vous découpez une tâche longue en deux ou trois prompts successifs, dont la sortie du premier devient l'Input du suivant. Intérêt : vous contrôlez le résultat intermédiaire (un calcul, une extraction) avant de laisser l'IA rédiger dessus.",
    ],
    example: {
      title: 'Fil rouge',
      lines: [
        "Few-shot : une ligne de format fictive dans l'Output — « Poste X — + 1 500 USD (+ 30,0 %) — critique ».",
        "Chaînage : prompt 1 « calcule le tableau des écarts » → contrôle dans Excel → prompt 2 « rédige Constat, Cause, Action à partir de ce tableau validé ».",
      ],
    },
  },
  {
    type: 'concept',
    title: 'Avant d\'écrire ou de stocker un prompt : conditions de test et protection des données',
    body: "Un test n'a de valeur que si les conditions sont identiques d'une exécution à l'autre. Et une bibliothèque partagée est lue par toute l'équipe : elle ne doit jamais contenir de données réelles.",
    bullets: [
      "Ouvrez une nouvelle conversation pour chaque exécution : l'historique d'une conversation influence la réponse suivante.",
      "Si votre outil propose une mémoire ou des instructions personnalisées, désactivez-les pendant les tests ; réactivez-les ensuite.",
      "Notez dans votre journal l'outil, le modèle affiché et la date de chaque série de tests : un changement de modèle peut modifier un résultat sans que le prompt ait bougé.",
      "Utilisez un compte professionnel validé par votre organisation, jamais un compte personnel gratuit, pour tout tableau réel.",
      "Dans la bibliothèque, le bloc Input ne contient qu'un emplacement balisé (« <donnees>…</donnees> ») et jamais les chiffres, noms ou montants d'un cas réel.",
    ],
    example: {
      title: 'Décision pour le fil rouge',
      lines: [
        "Le tableau budgétaire logistique ne contient aucune donnée personnelle : seulement des postes et des montants. Dépôt autorisé dans l'espace professionnel de l'organisation.",
        "Pour les tests, Amani utilise trois conversations neuves par cas, mémoire désactivée, et note « 05/10/2026 — outil de l'organisation — modèle affiché » dans son journal.",
      ],
    },
    pitfall: "Coller un vrai tableau dans la cellule Input de la bibliothèque « pour montrer un exemple » : le fichier est partagé, la donnée sort du cadre prévu.",
  },
  {
    type: 'comparison-table',
    title: 'Quel outil pour quelle étape de ce module',
    columns: ['Outil', 'Rôle dans le module', 'Point d\'attention'],
    rows: [
      ['IA générative habituelle (ChatGPT, Claude, Gemini, Copilot)', 'Exécuter et tester vos prompts : les techniques CoT, ToT et ICIO fonctionnent sur tout modèle conversationnel récent', 'Testez avec l\'outil que vous utiliserez réellement en production ; un prompt validé sur un outil doit être revérifié sur un autre'],
      ['Excel (ou Google Sheets)', 'Calculer les réponses de référence ; héberger la bibliothèque (bibliotheque-prompts-organisationnelle-icio.xlsx)', 'Les chiffres d\'une IA se recalculent toujours dans Excel avant d\'être validés'],
      ['Word', 'Documenter chaque transformation (guide-construction-prompts-chain-of-thought.docx)', 'Un guide par prompt : il sert de preuve de validation et de référence pour le reprendre'],
      ['Espace partagé (SharePoint, Drive)', 'Héberger la bibliothèque accessible à toute l\'équipe', 'Jamais de bibliothèque dans un fichier personnel : le prompt validé doit être visible de tous'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Chain-of-thought (CoT)', definition: "Technique qui fait dérouler explicitement au modèle les étapes de son raisonnement avant sa conclusion finale ; les étapes sont celles de votre métier, pas une formule générique." },
      { term: 'Tree-of-thought (ToT)', definition: "Extension du CoT où deux ou trois pistes de raisonnement sont explorées puis comparées selon des critères avant de choisir la meilleure ; réservé aux décisions à enjeu réel." },
      { term: 'Méthode ICIO', definition: "Cadre de structuration d'un prompt en quatre blocs : Instruction, Contexte, Input, Output." },
      { term: 'Prompt réutilisable', definition: "Prompt dont seul l'Input change d'un usage à l'autre, l'Instruction, le Contexte et l'Output restant stables : condition pour l'intégrer à une bibliothèque." },
      { term: 'Few-shot (exemple de sortie)', definition: "Un ou deux exemples complets du résultat attendu placés dans le prompt, que le modèle imite ; les valeurs d'exemple doivent être fictives et signalées comme telles." },
      { term: 'Chaînage de prompts', definition: "Découpage d'une tâche en plusieurs prompts successifs, la sortie du premier (contrôlée) devenant l'Input du suivant." },
      { term: 'Réponse de référence', definition: "Résultat attendu d'un cas de test, calculé par vous (dans Excel) avant l'exécution : c'est lui qui permet de dire qu'une réponse de l'IA est conforme ou non." },
      { term: 'Test de régression', definition: "Ré-exécution d'un prompt révisé sur les mêmes cas que ceux qui avaient validé la version précédente, pour vérifier qu'une modification n'a rien cassé." },
      { term: 'Versioning', definition: "Numérotation (v1, v2…) et datation de chaque modification d'un prompt, pour qu'un collègue sache s'il utilise bien la dernière version." },
    ],
  },

  // ───────────── Procédure 1 — Diagnostiquer l'instabilité ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Chercher dans la bibliothèque avant de réécrire quoi que ce soit',
    intro: "Réécrire un prompt qui existe déjà ailleurs dans l'organisation est le gaspillage le plus fréquent. Avant de toucher à votre prompt, vous vérifiez ce que la bibliothèque contient, et vous apprenez sa structure : vous la remplirez en procédure 7. Entrée nécessaire : le fichier de bibliothèque partagé de votre organisation.",
    steps: [
      {
        title: 'Ouvrir la bibliothèque et lire les prompts existants',
        actions: [
          "Ouvrez HGL_Bibliotheque_prompts_ICIO.xlsx : copie du gabarit bibliotheque-prompts-organisationnelle-icio.xlsx, dupliquée le 28/09/2026 par Olivier Kasongo sur l'espace partagé de l'équipe.",
          "Dans l'onglet « Bibliotheque », lisez les colonnes A (Categorie / Tag) et B (Nom du prompt) des lignes 5 à 8 : analyse financière, compte-rendu de réunion, tri de candidatures, synthèse de rapport de mission.",
          "Pour la ligne la plus proche de votre besoin (ligne 5, « Analyse des ecarts budgetaires mensuels »), lisez les colonnes C à F et notez dans un brouillon ce qu'elle couvre et ce qu'elle ne couvre pas.",
          "Regardez les colonnes G à J de cette ligne : v2, mise à jour le 2026-08-20, testé sur 5 cas, statut « Valide ».",
        ],
      },
      {
        title: 'Décider : réutiliser, adapter ou créer',
        actions: [
          "Réutilisez telle quelle une ligne « Valide » dont l'Input et l'Output correspondent exactement à votre besoin.",
          "Adaptez (nouvelle ligne distincte) si le besoin est voisin mais pas identique ; reprenez ce qui est bon, par exemple le format de sortie.",
          "Créez de zéro seulement si aucune ligne ne s'en approche.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Ligne 5 — Analyse des écarts budgétaires mensuels (v2, Valide, 5 cas)', 'Besoin d\'Amani — budget logistique'],
      rows: [
        ['Données en entrée', 'Budget prévu et réalisé par poste (en montants)', 'Montants, mais aussi quantité prévue, quantité réalisée et unité par poste'],
        ['Décomposition', 'Distingue volume et prix, sans formule imposée', 'Formules d\'effet volume et d\'effet prix imposées, au prix unitaire prévu'],
        ['Classement', 'Critique / à surveiller / mineur, sans seuil en USD', 'Critique au-delà de 1 000 USD de dépassement, seuil à faire valider'],
        ['Format de sortie', '3 sections : Constat, Cause, Action ; 1 page maximum', 'Identique : Patrick veut le même format que la finance'],
      ],
    },
    example: {
      title: 'Décision d\'Amani — lundi 5 octobre 2026',
      lines: [
        "Ligne 5 couvre le principe, pas le tableau avec quantités ni le seuil en USD du budget logistique.",
        "Décision : adapter. Elle reprend les trois sections de la ligne 5 (même format que la finance) et construit son propre prompt, qui sera enregistré sur la ligne 9.",
      ],
    },
    result: "Une décision écrite (réutiliser, adapter ou créer) et la liste de ce que la ligne la plus proche ne couvre pas : ce sont vos exigences supplémentaires pour la procédure 2.",
    pitfall: "Chercher uniquement par nom de prompt : la bibliothèque est classée par usage. Parcourez les lignes de la catégorie qui vous concerne avant de conclure qu'aucun prompt n'existe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Préparer le jeu d\'essai et les conditions de test',
    intro: "Pour comparer des résultats, tout doit être identique sauf l'exécution : même prompt, même tableau, même outil. Vous prenez un mois dont vous connaissez la réponse. Entrée nécessaire : le classeur de suivi budgétaire de l'organisation.",
    steps: [
      {
        title: 'Préparer le tableau d\'entrée',
        actions: [
          "Ouvrez le classeur de suivi budgétaire et copiez le tableau d'août 2026 : une ligne par poste.",
          "Mettez-le sous la forme à six colonnes : Poste | Unité | Quantité prévue | Budget prévu (USD) | Quantité réalisée | Réalisé (USD).",
          "Vérifiez les totaux à la main : budget prévu 21 000 USD, réalisé 23 830 USD.",
        ],
      },
      {
        title: 'Fixer les conditions de test',
        actions: [
          "Choisissez l'outil d'IA de l'organisation que vous utiliserez en production.",
          "Désactivez la mémoire et les instructions personnalisées si l'outil les propose.",
          "Ouvrez un journal d'essais (une feuille Excel ou un document) et notez : date, outil, modèle affiché, prompt testé, cas utilisé.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Unité', 'Quantité prévue', 'Budget prévu (USD)', 'Quantité réalisée', 'Réalisé (USD)'],
      rows: [
        ['Transport routier', 'trajet', '6', '9 000', '6', '9 300'],
        ['Entreposage', 'mois-site', '3', '4 500', '3', '4 500'],
        ['Dédouanement', 'dossier', '4', '2 000', '6', '4 080'],
        ['Carburant', 'litre', '2 000', '3 000', '1 800', '2 700'],
        ['Maintenance véhicules', 'intervention', '5', '2 500', '5', '3 250'],
      ],
    },
    result: "Un tableau de cinq postes dont vous maîtrisez les totaux (21 000 prévu, 23 830 réalisé, + 2 830 USD) et un journal d'essais ouvert avec sa première ligne : 05/10/2026, outil de l'organisation, modèle affiché, prompt d'origine, jeu « août ».",
    tip: "Choisissez un mois qui contient un piège : ici le carburant est exactement à − 10,0 % de son budget. Un prompt flou le traite différemment d'une exécution à l'autre, et vous verrez la différence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Exécuter trois fois le prompt actuel et archiver les sorties',
    intro: "Vous ne diagnostiquez pas une instabilité sur un souvenir : vous la mesurez. Trois exécutions côte à côte, dans trois conversations neuves, sans modifier un mot du prompt.",
    steps: [
      {
        title: 'Lancer les trois exécutions',
        actions: [
          "Ouvrez une conversation neuve. Collez : « Analyse ce budget et dis-moi ce qui ne va pas. Voici les chiffres : » suivi du tableau d'août. Envoyez.",
          "Copiez la réponse complète dans un document « Comparaison », sous le titre « Exécution A », sans la retoucher.",
          "Répétez dans une deuxième puis une troisième conversation neuve : « Exécution B », « Exécution C ».",
          "Pour chaque réponse, relevez le nombre de mots (Word : onglet Révision > Nombre de mots).",
        ],
      },
    ],
    example: {
      title: 'Résultats typiques observés — jeu « août » (illustration)',
      lines: [
        "Exécution A — 48 mots : trois puces. « Dédouanement très au-dessus du budget (+ 104 %). Maintenance en hausse. Carburant à surveiller. » Conclusion : surtout un problème de volume de dossiers.",
        "Exécution B — 612 mots : quatre intertitres (Vue d'ensemble, Analyse par poste, Risques, Recommandations), cinq postes commentés, dont le carburant à − 10 %. Conclusion : hausse due au volume.",
        "Exécution C — 74 mots : un tableau de quatre lignes et deux phrases. Conclusion : surtout un effet prix. Recommandation : « suivre l'évolution ».",
      ],
    },
    result: "Trois sorties archivées et horodatées dans le document de comparaison, avec leur nombre de mots, prêtes à être comparées à l'étape suivante.",
    pitfall: "Relancer dans la même conversation : le modèle voit ses propres réponses précédentes et tend à les imiter. Vous mesureriez la stabilité d'un dialogue, pas celle du prompt.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Comparer les trois sorties sur trois critères',
    intro: "Trois symptômes d'instabilité, trois causes différentes. Vous remplissez le tableau de comparaison critère par critère, sans interpréter : seulement ce qui change et ce qui ne change pas.",
    steps: [
      {
        title: 'Remplir le tableau de comparaison',
        actions: [
          "Créez un tableau dont les colonnes sont : Critère | Exécution A | Exécution B | Exécution C | Varie ?",
          "Ligne « Structure » : décrivez la forme (puces, intertitres, tableau), l'ordre et les titres des sections.",
          "Ligne « Niveau de détail » : reportez le nombre de mots et le nombre de postes commentés.",
          "Ligne « Conclusion » : copiez la phrase qui dit d'où vient la hausse du dédouanement.",
          "Ligne « Recommandation » : copiez la recommandation, ou notez « aucune ».",
          "Dans la dernière colonne, écrivez Oui si au moins une exécution diffère des deux autres.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Exécution A', 'Exécution B', 'Exécution C', 'Varie ?'],
      rows: [
        ['Structure', '3 puces', '4 intertitres', 'Tableau + 2 phrases', 'Oui'],
        ['Niveau de détail', '48 mots, 2 postes', '612 mots, 5 postes', '74 mots, 4 postes', 'Oui'],
        ['Conclusion sur le dédouanement', 'Volume de dossiers', 'Volume', 'Effet prix', 'Oui : volume contre prix'],
        ['Recommandation', 'Aucune chiffrée', 'Quatre, génériques', '« Suivre l\'évolution »', 'Oui'],
      ],
    },
    result: "Un tableau de comparaison qui montre sans discussion que la structure, le niveau de détail et la conclusion varient. C'est la pièce qui ira en section 2 du guide Word.",
    tip: "Vérifiez la vérité du fond avec Excel : effet volume (6 − 4) × 500 = 1 000 USD, effet prix (680 − 500) × 6 = 1 080 USD. Les deux conclusions étaient donc à moitié justes : le prompt n'a jamais demandé de les calculer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Poser le diagnostic : défaut d\'Output, de raisonnement guidé, ou les deux',
    intro: "Ne réécrivez jamais un prompt sans savoir ce que vous réparez. La règle de lecture est simple : la structure et le niveau de détail renvoient à l'Output ; la conclusion renvoie au raisonnement.",
    steps: [
      {
        title: 'Appliquer la règle de lecture',
        actions: [
          "Si la structure ou le niveau de détail varient : cause probable = Output non spécifié (problème ICIO).",
          "Si la conclusion elle-même diffère sur le fond : cause probable = raisonnement non guidé (problème chain-of-thought).",
          "Si les deux : les deux causes se traitent, dans cet ordre, en procédure 2 (raisonnement) puis 3 (ICIO).",
        ],
      },
      {
        title: 'Rédiger le diagnostic en une phrase',
        actions: [
          "Écrivez une phrase : symptôme observé + cause + exemple concret tiré de vos trois sorties.",
          "Gardez-la telle quelle : vous la recopierez dans la section 2 du guide Word.",
        ],
      },
    ],
    table: {
      columns: ['Symptôme observé', 'Cause probable', 'Remède'],
      rows: [
        ['Structure et détail qui changent (puces, intertitres, tableau ; 48 à 612 mots)', 'Output non spécifié (ICIO)', 'Format de sortie non négociable (procédure 3)'],
        ['Conclusion qui change (volume contre prix)', 'Raisonnement non guidé (CoT)', 'Étapes de raisonnement numérotées (procédure 2)'],
      ],
    },
    example: {
      title: 'Diagnostic rédigé par Amani',
      lines: [
        "« Le problème relève des deux : l'Output n'est pas spécifié (le format passe de trois puces à un texte de 612 mots) et le raisonnement n'est pas guidé (le dédouanement d'août est attribué tantôt au volume, tantôt au prix, alors que les deux effets pèsent 1 000 et 1 080 USD). »",
      ],
    },
    result: "Un diagnostic d'une phrase, justifié par un exemple, qui désigne les deux chantiers à traiter. Vous savez maintenant ce que les procédures 2 et 3 doivent réparer.",
    pitfall: "Conclure « le modèle est capricieux » et ajouter des consignes au hasard. Un prompt de 40 lignes aux consignes contradictoires produit un résultat plus instable qu'un prompt court et clair.",
  },

  // ───────────── Procédure 2 — Décomposer en étapes de raisonnement ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 4',
    title: 'Écrire comment vous raisonneriez sans IA',
    intro: "Votre chain-of-thought ne doit pas être inventé : il doit refléter votre expertise métier réelle. Vous prenez une feuille blanche et vous notez, geste par geste, ce que vous feriez si on vous confiait la tâche sans IA.",
    steps: [
      {
        title: 'Refaire la tâche à la main en notant chaque geste',
        actions: [
          "Prenez le tableau d'août dans Excel et faites l'analyse sans IA, vingt minutes maximum.",
          "À chaque geste, écrivez une ligne : ce que vous regardez, ce que vous calculez, ce que vous décidez.",
          "Notez aussi les questions que vous vous posez (« est-ce grave ? », « est-ce le volume ou le prix ? »).",
        ],
      },
    ],
    example: {
      title: 'Brouillon d\'Amani, sur papier — jeu « août »',
      lines: [
        "Je calcule l'écart de chaque poste, en dollars et en pourcentage du budget.",
        "Je ne regarde de près que ceux qui dépassent 10 %. Les autres, je les laisse.",
        "Pour ceux-là, je regarde si on a fait plus de trajets ou de dossiers que prévu, ou si chaque trajet ou dossier a coûté plus cher.",
        "Je décide si c'est grave : au-dessus d'un certain montant, je l'écris en rouge.",
        "Je dis ce qu'il faut faire, avec un nom et une date.",
      ],
    },
    result: "Cinq gestes de métier écrits dans vos mots. Ils sont encore vagues (« un certain montant ») : c'est l'objet de l'étape suivante.",
    pitfall: "Copier un chain-of-thought trouvé en ligne ou dans un autre prompt : il décrit le raisonnement de quelqu'un d'autre et vous ne saurez pas le corriger quand il dérape.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 4',
    title: 'Transformer chaque geste en étape numérotée et mesurable',
    intro: "Une étape de raisonnement utilisable par une IA contient une entrée, une opération et un critère mesurable. « Regarder de près » n'est pas mesurable ; « retenir les postes dont l'écart dépasse 10 % » l'est.",
    steps: [
      {
        title: 'Réécrire les gestes',
        actions: [
          "Prenez chaque ligne de votre brouillon et réécrivez-la à l'impératif : Calcule, Retiens, Classe, Formule.",
          "Remplacez chaque expression floue par un seuil ou une formule (« un certain montant » → « 1 000 USD »).",
          "Regroupez ou séparez pour arriver à 4 à 6 étapes numérotées, chacune produisant un résultat vérifiable.",
        ],
      },
      {
        title: 'Vérifier chaque étape',
        actions: [
          "Test de l'entrée : de quelles données l'étape a-t-elle besoin ? Sont-elles dans l'Input ?",
          "Test de la mesure : un collègue peut-il dire, sans vous demander, si le résultat est juste ?",
          "Test de l'ordre : l'étape n suppose-t-elle un résultat de l'étape n − 1 ?",
        ],
      },
    ],
    table: {
      columns: ['Geste noté', 'Étape rédigée pour le prompt'],
      rows: [
        ['Je calcule l\'écart, je ne regarde que ceux au-dessus de 10 %', '1) Calcule pour chaque poste l\'écart (réalisé − prévu) en USD et en % du prévu, puis retiens les postes dont l\'écart dépasse 10 % en valeur absolue.'],
        ['Je regarde si c\'est plus de volume ou plus de prix', '2) Pour chaque poste retenu, calcule l\'effet volume = (quantité réalisée − quantité prévue) × prix unitaire prévu, et l\'effet prix = (prix unitaire réalisé − prix unitaire prévu) × quantité réalisée.'],
        ['Je décide si c\'est grave', '3) Classe chaque poste retenu : critique si le dépassement est supérieur à 1 000 USD ; à surveiller dans les autres cas.'],
        ['Je dis quoi faire, avec un nom et une date', '4) Formule pour chaque poste critique une recommandation chiffrée : action, responsable (fonction), échéance datée.'],
      ],
    },
    result: "Une liste de 4 étapes numérotées, à l'impératif, chacune avec un critère vérifiable. Le seuil « 1 000 USD » est une proposition : l'étape suivante le fait valider.",
    tip: "Pour chaque effet que vous demandez à l'IA de calculer, écrivez la formule dans l'étape. Une IA qui « distingue volume et prix » sans formule invente sa propre définition, différente à chaque exécution.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 4',
    title: 'Faire valider les seuils et les définitions par le demandeur',
    intro: "Le chain-of-thought code des décisions de gestion : à partir de quel montant un dépassement est-il critique ? Ces choix appartiennent à celui qui lit le résultat, pas à l'IA ni à vous seule. Vous les faites valider par écrit avant d'écrire le prompt.",
    steps: [
      {
        title: 'Poser quatre questions précises',
        actions: [
          "Seuil de significativité : « À partir de quel écart en pourcentage un poste doit-il apparaître dans l'analyse ? »",
          "Seuil critique : « À partir de quel dépassement en dollars faut-il une action ? »",
          "Sous-consommation : « Un poste très en dessous du budget est-il un problème ou un bon signe ? »",
          "Responsables : « À qui revient une action sur un prestataire, sur le suivi budgétaire ? »",
        ],
      },
      {
        title: 'Consigner les réponses',
        actions: [
          "Envoyez les réponses par écrit au demandeur pour confirmation.",
          "Collez la confirmation dans votre journal d'essais.",
        ],
      },
    ],
    example: {
      title: 'Échange du 5 octobre 2026 avec Patrick Mumbere',
      lines: [
        "Patrick : « 10 % comme à la finance. Critique à partir de 1 000 USD de dépassement, sinon on noie le comité. Un poste sous le budget, je veux le savoir, mais ce n'est jamais critique. Les actions sur les prestataires, c'est moi ; le suivi budgétaire, c'est toi. »",
        "Seuils validés : 10 % (en valeur absolue) ; critique = dépassement supérieur à 1 000 USD ; sous-consommation = « à surveiller », jamais critique.",
        "Confirmation écrite reçue à 15 h 20 : « OK pour ces règles. »",
      ],
    },
    result: "Des seuils et des définitions confirmés par écrit par le demandeur : ils deviennent des règles du prompt, pas des opinions d'Amani.",
    pitfall: "Laisser l'IA choisir elle-même le seuil de gravité : elle en choisira un différent à chaque exécution, et vous ne pourrez plus expliquer au comité pourquoi un poste était critique en juillet et pas en août.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 4',
    title: 'Rédiger la liste finale des étapes de raisonnement',
    intro: "Vous figez maintenant la liste des étapes, avec les seuils validés. Cette liste est celle de la section 3 du guide Word et le cœur du bloc Instruction de votre prompt. Elle compte à ce stade 4 étapes : les tests de la procédure 5 la feront évoluer.",
    steps: [
      {
        title: 'Figer la liste',
        actions: [
          "Reprenez les quatre étapes de l'étape 2 et intégrez-y les seuils validés (10 %, 1 000 USD, sous-consommation = à surveiller).",
          "Relisez à voix haute : chaque étape commence par un verbe d'action et se termine par un résultat visible.",
          "Enregistrez la liste dans un fichier « etapes_raisonnement_v0.txt » dans votre dossier de travail.",
        ],
      },
    ],
    example: {
      title: 'Étapes de raisonnement — brouillon A (4 étapes)',
      lines: [
        "1) Calcule pour chaque poste l'écart (réalisé − prévu) en USD et en % du prévu, puis retiens les postes dont l'écart dépasse 10 % en valeur absolue.",
        "2) Pour chaque poste retenu, calcule l'effet volume = (quantité réalisée − quantité prévue) × prix unitaire prévu, et l'effet prix = (prix unitaire réalisé − prix unitaire prévu) × quantité réalisée.",
        "3) Classe chaque poste retenu : « critique » si le dépassement est supérieur à 1 000 USD ; « à surveiller » dans tous les autres cas, y compris la sous-consommation.",
        "4) Formule, pour chaque poste critique, une recommandation chiffrée : action, responsable (fonction), échéance datée.",
      ],
    },
    result: "Une liste de quatre étapes de métier, mesurables et validées. Le guide Word prévoit cinq lignes numérotées : la cinquième restera vide pour l'instant.",
    tip: "Quatre à six étapes suffisent. Au-delà, vous écrivez un règlement : découpez en deux prompts chaînés (procédure 4) plutôt que d'allonger la liste.",
  },

  // ───────────── Procédure 3 — Structurer avec la méthode ICIO ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Rédiger le bloc Instruction : une phrase, un verbe, le raisonnement annoncé',
    intro: "L'Instruction dit au modèle quoi faire, une seule fois, et lui annonce qu'il doit suivre vos étapes. Les étapes détaillées viendront à l'étape 3 : l'Instruction reste une phrase courte. Vous travaillez dans un document de brouillon, bloc par bloc.",
    steps: [
      {
        title: 'Écrire la phrase',
        actions: [
          "Choisissez un seul verbe d'action à l'impératif : analyse, compare, rédige ou classe. Ici : « Analyse ».",
          "Ajoutez l'objet précis : « les écarts du budget logistique du mois ».",
          "Ajoutez la mention du raisonnement : « en suivant précisément les étapes ci-dessous, dans l'ordre, avant de conclure ».",
        ],
      },
      {
        title: 'Contrôler',
        actions: [
          "Comptez les verbes d'action principaux : il ne doit y en avoir qu'un.",
          "Vérifiez qu'aucune consigne de format ne se cache dans la phrase : le format ira dans l'Output.",
        ],
      },
    ],
    example: {
      title: 'Bloc Instruction — brouillon A',
      lines: [
        "« Analyse les écarts du budget logistique du mois en suivant précisément les étapes de raisonnement ci-dessous, dans l'ordre, avant de conclure. »",
        "À éviter : « Analyse ce budget, résume-le, compare-le au mois dernier et propose des idées. » → quatre instructions mélangées, le modèle en choisit une.",
      ],
    },
    result: "Une phrase à un seul verbe d'action, qui annonce explicitement le raisonnement étape par étape.",
    pitfall: "Empiler plusieurs demandes dans l'Instruction « pour gagner du temps ». Chaque demande supplémentaire est un nouveau choix laissé au modèle ; si vous avez deux tâches, faites deux prompts (procédure 4).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Rédiger le bloc Contexte : rôle, destinataire, contraintes, ton',
    intro: "Le Contexte évite un résultat techniquement correct mais inadapté à l'audience. Il répond à quatre questions : qui vous êtes, pour qui c'est écrit, avec quelles contraintes, dans quel ton.",
    steps: [
      {
        title: 'Répondre aux quatre questions',
        actions: [
          "Rôle : écrivez qui l'IA assiste (« l'assistant de la chargée administrative et logistique d'Horizon Grands Lacs »).",
          "Destinataire et usage : écrivez qui lira, comment et pour décider quoi (« le comité de direction, trois minutes de lecture, qui attend des constats actionnables »).",
          "Contraintes : unité des montants, langue, niveau de détail.",
          "Ton : factuel, sans jargon superflu.",
        ],
      },
    ],
    example: {
      title: 'Bloc Contexte — brouillon A',
      lines: [
        "« Tu es l'assistant de la chargée administrative et logistique d'Horizon Grands Lacs, organisation à but non lucratif présente à Goma, Bukavu et Kinshasa. Le destinataire est le comité de direction, qui lit ce rapport en trois minutes lors de la réunion mensuelle et attend des constats actionnables, pas une simple description des chiffres. Montants en USD, ton factuel, réponse en français. »",
      ],
    },
    result: "Un bloc de trois à quatre phrases qui permet à un lecteur extérieur de comprendre pour qui l'analyse est faite et à quoi elle sert.",
    tip: "Pas de données d'un cas réel dans le Contexte : seulement ce qui reste vrai d'un mois à l'autre. Si vous écrivez « en septembre », le bloc devient jetable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Insérer les étapes de raisonnement numérotées',
    intro: "C'est ici que le chain-of-thought de la procédure 2 entre dans le prompt. Elles se placent entre le Contexte et l'Input, numérotées, telles quelles : ce sont elles qui rendent le raisonnement reproductible et auditable.",
    steps: [
      {
        title: 'Coller et vérifier la liste',
        actions: [
          "Ouvrez etapes_raisonnement_v0.txt et copiez les quatre étapes.",
          "Collez-les sous le Contexte, avec les numéros 1) à 4).",
          "Relisez : les seuils (10 %, 1 000 USD) et les formules d'effet volume et d'effet prix sont-ils tous écrits dans les étapes ?",
        ],
      },
    ],
    example: {
      title: 'Bloc « étapes de raisonnement » — brouillon A',
      lines: [
        "1) Calcule pour chaque poste l'écart (réalisé − prévu) en USD et en % du prévu, puis retiens les postes dont l'écart dépasse 10 % en valeur absolue.",
        "2) Pour chaque poste retenu, calcule l'effet volume = (quantité réalisée − quantité prévue) × prix unitaire prévu, et l'effet prix = (prix unitaire réalisé − prix unitaire prévu) × quantité réalisée.",
        "3) Classe chaque poste retenu : « critique » si le dépassement est supérieur à 1 000 USD ; « à surveiller » dans tous les autres cas, y compris la sous-consommation.",
        "4) Formule, pour chaque poste critique, une recommandation chiffrée : action, responsable (fonction), échéance datée.",
      ],
    },
    result: "Quatre étapes numérotées en place dans le prompt, avec toutes les règles de calcul à l'intérieur : aucune ne dépend de ce que vous savez et que le modèle ignore.",
    pitfall: "Écrire « calcule l'effet volume et l'effet prix » sans formule. Le modèle appliquera une définition au hasard, et vous retrouverez l'instabilité que vous cherchez à éliminer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Délimiter l\'Input avec des balises',
    intro: "L'Input contient les données du mois, et seulement elles. Les balises permettent au modèle de distinguer ce qu'il doit faire (instructions) de ce sur quoi il le fait (données) : sans elles, une ligne de tableau peut être lue comme une consigne.",
    steps: [
      {
        title: 'Poser les balises',
        actions: [
          "Ouvrez la balise <donnees> sur une ligne seule, placez les données, fermez avec </donnees>.",
          "Décrivez en une ligne les colonnes attendues, pour que n'importe quel mois puisse être collé sans ambiguïté.",
          "Dans votre version de travail, collez le tableau du mois ; dans la version destinée à la bibliothèque, laissez seulement l'emplacement.",
        ],
      },
    ],
    example: {
      title: 'Bloc Input — deux versions',
      lines: [
        "Version de travail : <donnees> Poste | Unité | Quantité prévue | Budget prévu (USD) | Quantité réalisée | Réalisé (USD) — puis les lignes d'août collées depuis Excel </donnees>",
        "Version bibliothèque : <donnees>Tableau du mois : Poste | Unité | Quantité prévue | Budget prévu (USD) | Quantité réalisée | Réalisé (USD), collé depuis Excel</donnees>",
      ],
    },
    result: "Un Input clairement délimité, qui sera le seul bloc à changer d'un mois à l'autre.",
    tip: "Gardez toujours la ligne d'en-têtes de colonnes dans l'Input : sans elle, le modèle peut décaler une colonne et prendre un prix unitaire pour une quantité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Spécifier l\'Output : format non négociable',
    intro: "C'est le bloc qui corrige le symptôme principal de la procédure 1 : le format qui change. Un Output précis fixe les sections, la longueur et les interdits. Il ne se discute pas : il est écrit comme une contrainte.",
    steps: [
      {
        title: 'Décrire la structure',
        actions: [
          "Écrivez le nombre exact de sections et leurs titres, dans l'ordre : « exactement 3 sections ».",
          "Pour chaque section, dites ce qu'elle contient et sous quelle forme (une ligne par poste, etc.).",
          "Fixez la longueur maximale en mots ou en page.",
        ],
      },
      {
        title: 'Ajouter les interdits',
        actions: [
          "Listez ce qu'il ne faut PAS inclure : introduction, conclusion générale, recommandation générique.",
          "Interdisez ce que le modèle a inventé dans vos essais (ici : les recettes, que Patrick n'avait pas demandées).",
        ],
      },
    ],
    example: {
      title: 'Bloc Output attendu — brouillon A',
      lines: [
        "« Réponds en exactement 3 sections, dans cet ordre, avec ces titres : « Constat » (une ligne par poste retenu : poste, écart en USD et en %, classement), « Cause » (pour chaque poste retenu : effet volume et effet prix en USD), « Action » (une recommandation chiffrée et datée par poste critique, aucune pour les postes à surveiller). Maximum 300 mots, soit une page. N'inclus ni introduction, ni conclusion, ni recommandation générique du type « suivre l'évolution », ni analyse des recettes. »",
      ],
    },
    result: "Un Output où rien n'est laissé au choix du modèle : trois titres fixes, un contenu par section, une longueur, quatre interdits.",
    pitfall: "Écrire « sois concis » et « détaille chaque point » dans le même prompt. Deux consignes contradictoires produisent plus d'instabilité qu'une absence de consigne : n'écrivez qu'une exigence de longueur, chiffrée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Assembler le prompt complet et le faire relire à froid',
    intro: "Vous assemblez les blocs dans l'ordre ICIO (Instruction, Contexte, étapes, Input, Output) et vous testez le prompt sur quelqu'un qui ne connaît pas la tâche. S'il ne sait pas dire ce qui va sortir, le modèle ne le saura pas non plus.",
    steps: [
      {
        title: 'Assembler',
        actions: [
          "Dans un seul document, collez dans l'ordre : Instruction, Contexte, étapes numérotées, Input, Output.",
          "Mettez un titre en capitales devant chaque bloc pour la relecture (vous pouvez les garder dans le prompt).",
          "Enregistrez sous « prompt_analyse_ecarts_logistique_brouillonA.txt ».",
        ],
      },
      {
        title: 'Faire la relecture à froid',
        actions: [
          "Donnez le prompt à une collègue qui n'a pas participé (par exemple Esther Masika).",
          "Posez-lui trois questions : « Que va produire ce prompt ? Combien de sections ? Qu'est-ce qui n'apparaîtra pas ? »",
          "Corrigez toute réponse qui diffère de votre intention, avant tout test.",
        ],
      },
    ],
    table: {
      columns: ['Question posée à la relectrice', 'Réponse d\'Esther Masika', 'Conforme à l\'intention ?'],
      rows: [
        ['Que va produire ce prompt ?', 'Une analyse des écarts budgétaires avec causes et actions', 'Oui'],
        ['Combien de sections et lesquelles ?', 'Trois : Constat, Cause, Action', 'Oui'],
        ['Qu\'est-ce qui n\'apparaîtra pas ?', 'Pas de recettes, pas d\'introduction, pas de conseil générique', 'Oui'],
        ['Que se passe-t-il si un poste n\'a pas de budget prévu ?', '« Je ne sais pas : ce n\'est pas écrit »', 'Non : à noter pour les tests'],
      ],
    },
    result: "Un prompt assemblé en quatre blocs, relu à froid. La quatrième question a révélé une zone d'ombre : elle sera traitée par les tests de la procédure 5, pas devinée maintenant.",
    tip: "Gardez les réponses de la relectrice : une lacune qu'elle ne sait pas combler est une lacune que le modèle comblera au hasard, et chaque exécution l'inventera différemment.",
  },

  // ───────────── Procédure 4 — Techniques complémentaires ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Décider chain-of-thought ou tree-of-thought, tâche par tâche',
    intro: "Le mardi 6 octobre, Patrick envoie une deuxième demande pour le comité : proposer des pistes pour ramener le transport routier à son budget. Vous avez maintenant deux tâches très différentes : vous décidez pour chacune quelle technique employer, avant d'écrire un mot.",
    steps: [
      {
        title: 'Appliquer le test de décision',
        actions: [
          "Question 1 : le chemin de raisonnement est-il connu et unique ? Si oui, chain-of-thought.",
          "Question 2 : plusieurs pistes plausibles méritent-elles d'être comparées avant de trancher ? Si oui, envisagez le tree-of-thought.",
          "Question 3 : l'enjeu justifie-t-il le surcoût en tokens, en temps de génération et en relecture ? Sinon, restez en chain-of-thought.",
        ],
      },
      {
        title: 'Noter la décision',
        actions: [
          "Écrivez la technique retenue et la raison, dans votre journal d'essais.",
        ],
      },
    ],
    table: {
      columns: ['Tâche du comité', 'Chemin connu et unique ?', 'Enjeu', 'Décision'],
      rows: [
        ['Calculer les écarts de septembre et les classer', 'Oui : les étapes sont fixées par Patrick', 'Moyen', 'Chain-of-thought (le prompt des procédures 2 et 3)'],
        ['Pistes pour ramener le transport routier à son budget d\'ici fin décembre', 'Non : renégocier, mutualiser ou reporter sont trois voies distinctes', 'Élevé : + 6 700 USD en septembre', 'Tree-of-thought'],
      ],
    },
    result: "Deux décisions justifiées. Le prompt d'analyse reste un chain-of-thought ; seule la demande des pistes d'action ouvre un tree-of-thought.",
    pitfall: "Réserver le tree-of-thought au calcul d'écarts « parce que c'est important ». Importance n'est pas ambiguïté : un chemin unique se traite en chain-of-thought, quel que soit l'enjeu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Rédiger un prompt tree-of-thought en quatre blocs',
    intro: "Un prompt tree-of-thought se rédige comme un prompt ICIO : les étapes de raisonnement sont simplement remplacées par une exploration de pistes avec des critères explicites. Vous imposez les pistes, les critères et la forme de la recommandation.",
    steps: [
      {
        title: 'Construire le prompt',
        actions: [
          "Instruction : demandez trois stratégies différentes, en nommant l'angle de chacune.",
          "Étapes : pour chaque stratégie, deux risques, deux bénéfices et un impact estimé en USD par mois.",
          "Critères : fixez-en trois (impact, risque pour la continuité, délai).",
          "Output : un tableau comparatif puis une recommandation justifiant l'élimination des deux autres.",
        ],
      },
      {
        title: 'Contrôler la sortie',
        actions: [
          "Recalculez dans Excel chaque impact chiffré par le modèle : ce sont des estimations, pas des faits.",
          "Rejetez toute piste qui s'appuie sur un chiffre que vous ne retrouvez pas dans vos données.",
        ],
      },
    ],
    example: {
      title: 'Prompt tree-of-thought — transport routier (extrait)',
      lines: [
        "Instruction : « Propose trois stratégies différentes pour ramener les dépenses de transport routier à 12 000 USD par mois d'ici le 31/12/2026 : (A) renégociation du tarif avec le transporteur, (B) mutualisation des trajets entre sites, (C) report des trajets non urgents. Pour chaque stratégie, liste 2 risques et 2 bénéfices et estime l'impact en USD par mois. Compare-les sur trois critères : impact, risque pour la continuité, délai de mise en œuvre. Recommande celle qui a le meilleur rapport impact/risque et justifie l'élimination des deux autres. »",
        "Input : « <donnees> Septembre : 11 trajets à 1 700 USD, budget 8 trajets à 1 500 USD, soit 18 700 USD au lieu de 12 000 USD </donnees> »",
        "Résultat type : A impact ≈ 2 200 USD/mois (11 trajets × 200 USD), risque faible ; B ≈ 3 400 USD/mois (2 trajets évités), risque de retard de livraison ; C ≈ 5 100 USD/mois (3 trajets reportés), risque de rupture. Recommandation : A, qui rejoint exactement l'effet prix de septembre (2 200 USD).",
      ],
    },
    result: "Un prompt tree-of-thought avec trois pistes imposées, trois critères et une recommandation justifiée, dont chaque chiffre a été recalculé. Il sert à une décision, pas au calcul mensuel.",
    tip: "Imposez les pistes quand vous les connaissez : « explore trois angles » sans les nommer laisse le modèle choisir des angles différents à chaque exécution, et le ToT devient aussi instable qu'un prompt sans structure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Ajouter un exemple de sortie (few-shot) dans le bloc Output',
    intro: "Quand le format est précis (une ligne par poste avec trois éléments dans un ordre donné), un exemple vaut mieux qu'une description : le modèle imite la forme montrée. Il se place dans l'Output, avec des valeurs fictives clairement signalées.",
    steps: [
      {
        title: 'Rédiger l\'exemple',
        actions: [
          "Choisissez la ligne la plus structurée de l'Output : ici, la ligne du « Constat ».",
          "Écrivez un exemple complet avec un poste fictif (« Poste X ») et des montants qui ne ressemblent à aucun cas réel.",
          "Ajoutez la mention « valeurs fictives, à ne pas reprendre ».",
        ],
      },
      {
        title: 'Vérifier que le modèle n\'a pas recopié',
        actions: [
          "Exécutez le prompt une fois sur le jeu d'août.",
          "Cherchez « Poste X » et « 1 500 » dans la réponse : ils ne doivent pas y figurer.",
        ],
      },
    ],
    example: {
      title: 'Output attendu — avec exemple (ajout en fin de bloc)',
      lines: [
        "« …Maximum 300 mots, soit une page. N'inclus ni introduction, ni conclusion, ni recommandation générique du type « suivre l'évolution », ni analyse des recettes.",
        "Exemple de ligne du Constat (valeurs fictives, à ne pas reprendre) : Poste X — + 1 500 USD (+ 30,0 %) — critique. »",
      ],
    },
    result: "Le format de la ligne la plus délicate est montré, pas seulement décrit. L'exécution de contrôle ne contient ni « Poste X » ni les montants d'exemple.",
    pitfall: "Prendre pour exemple un cas réel du mois précédent : le modèle recopie ses chiffres, et vous ne le voyez pas, parce que la réponse a l'air plausible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Décider si la tâche doit être chaînée en deux prompts',
    intro: "Quand un prompt cumule un calcul volumineux et une rédaction, une erreur de calcul se retrouve dans le texte sans être vue. Le chaînage sépare les deux : le premier prompt produit un tableau que vous contrôlez, le second rédige à partir de ce tableau validé.",
    steps: [
      {
        title: 'Appliquer les critères de décision',
        actions: [
          "Chaînez si le tableau d'entrée dépasse une quinzaine de lignes, ou si un contrôle humain du calcul est exigé avant toute rédaction.",
          "Chaînez si la même sortie intermédiaire alimente plusieurs textes (par exemple une version comité et une version bailleur).",
          "Ne chaînez pas si le prompt tient en une page et que son résultat se contrôle d'un coup d'œil.",
        ],
      },
      {
        title: 'Si vous chaînez',
        actions: [
          "Rédigez deux prompts ICIO distincts, chacun avec un seul rôle : (1/2) calcul, (2/2) rédaction.",
          "Définissez le format exact de la sortie du prompt 1 : c'est l'Input du prompt 2.",
          "Intercalez un contrôle humain entre les deux (recalcul dans Excel).",
          "Dans la bibliothèque, enregistrez deux lignes : « …(1/2) » et « …(2/2) ».",
        ],
      },
    ],
    example: {
      title: 'Décision d\'Amani — 6 octobre 2026',
      lines: [
        "Tableau mensuel : 6 postes, résultat contrôlable d'un coup d'œil → un seul prompt, pas de chaînage.",
        "Consolidation annuelle future : 60 lignes de budget, trois sites → chaînage prévu. Prompt 1/2 « Calcul des écarts par poste » (sortie : tableau Poste | Écart USD | Écart % | Effet volume | Effet prix), recalculé dans Excel ; prompt 2/2 « Rédaction Constat / Cause / Action » à partir du tableau validé.",
      ],
    },
    result: "Une décision tracée : prompt unique pour le mensuel, chaîne de deux prompts réservée à la consolidation annuelle.",
    tip: "Le chaînage est aussi un moyen de test : si le prompt 2/2 se trompe sur un tableau validé, le défaut est dans la rédaction, pas dans le calcul.",
  },

  // ───────────── Procédure 5 — Tester, évaluer, optimiser ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Choisir trois cas réels et différents',
    intro: "Un prompt qui marche sur un seul cas a eu de la chance. Vous choisissez trois cas réels, de formes différentes : un cas simple, un cas qui contient un piège de seuil, un cas plus complexe que les autres. Trois variantes du même exemple ne comptent pas comme trois cas.",
    steps: [
      {
        title: 'Sélectionner les cas',
        actions: [
          "Parcourez les mois déjà clos dans le classeur de suivi budgétaire.",
          "Retenez un mois simple, un mois avec une valeur limite, un mois avec une situation inhabituelle.",
          "Pour chacun, mettez le tableau sous la forme à six colonnes de l'Input, dans un onglet à son nom (Juillet, Août, Septembre).",
          "Vérifiez les totaux de chaque onglet avant d'aller plus loin.",
        ],
      },
    ],
    table: {
      columns: ['Cas', 'Mois', 'Pourquoi ce cas', 'Piège volontaire'],
      rows: [
        ['Cas 1', 'Juillet 2026', 'Cas simple : cinq postes, une hausse nette de transport', 'Aucun : sert de cas témoin'],
        ['Cas 2', 'Août 2026', 'Dédouanement multiplié par deux, volume et prix mêlés', 'Carburant exactement à − 10,0 % : retenu ou non ?'],
        ['Cas 3', 'Septembre 2026', 'Mois le plus chargé : six postes, + 8 360 USD', 'Location de véhicule non budgétée : prévu 0, réalisé 1 800 USD'],
      ],
    },
    result: "Trois onglets de test prêts, aux totaux vérifiés : juillet 21 000 prévu et 23 115 réalisé ; août 21 000 et 23 830 ; septembre 24 800 et 33 160.",
    pitfall: "Prendre trois mois « normaux » qui se ressemblent. Le prompt sera validé sans avoir rencontré un poste non budgété ni une valeur limite, et ces cas arriveront en production.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Calculer la réponse de référence de chaque cas dans Excel',
    intro: "On ne peut pas dire qu'une réponse de l'IA est juste sans savoir ce qu'elle doit être. Vous calculez donc vous-même, dans Excel, ce qu'une réponse conforme doit contenir. Vous appliquez vos propres règles à la lettre, formule par formule.",
    steps: [
      {
        title: 'Construire la feuille de référence',
        actions: [
          "Ajoutez un onglet « Reference ». En ligne 4, saisissez les en-têtes de A à M : Poste, Unité, Qté prévue, Budget prévu, Qté réalisée, Réalisé, Écart USD, Écart %, Retenu ?, Prix unit. prévu, Effet volume, Effet prix, Classement.",
          "Collez les données du cas dans A5:F9 (A5:F10 pour septembre, qui compte six postes).",
          "En G5 saisissez la formule d'écart, puis les formules des colonnes H à M, et étendez-les jusqu'à la dernière ligne.",
          "Vérifiez que la somme des écarts (G) égale le réalisé total moins le prévu total.",
        ],
      },
    ],
    example: {
      title: 'Formules de la ligne 5 (Excel en français)',
      lines: [
        "G5 : =F5-D5",
        `H5 : =SI(D5=0;"non calculable";G5/D5)`,
        `I5 : =SI(D5=0;"Oui";SI(ABS(G5/D5)>0,1;"Oui";"Non"))`,
        `J5 : =SI(C5=0;"";D5/C5)`,
        `K5 : =SI(OU(I5="Non";C5=0);"";(E5-C5)*J5)`,
        `L5 : =SI(OU(I5="Non";C5=0;E5=0);"";(F5/E5-J5)*E5)`,
        `M5 : =SI(I5="Non";"mineur";SI(G5>1000;"critique";"à surveiller"))`,
      ],
    },
    table: {
      columns: ['Cas', 'Postes retenus — écart USD (écart %) — classement', 'Effets volume / prix (USD)', 'Actions attendues'],
      rows: [
        ['Cas 1 — juillet', 'Transport routier + 2 200 (+ 24,4 %) critique ; Carburant + 465 (+ 15,5 %) à surveiller ; Maintenance − 700 (− 28,0 %) à surveiller', '1 500 / 700 ; 150 / 315 ; − 500 / − 200', '1 (transport)'],
        ['Cas 2 — août', 'Dédouanement + 2 080 (+ 104,0 %) critique ; Maintenance + 750 (+ 30,0 %) à surveiller. Carburant (− 10,0 %) non retenu', '1 000 / 1 080 ; 0 / 750', '1 (dédouanement)'],
        ['Cas 3 — septembre', 'Transport + 6 700 (+ 55,8 %) critique ; Location + 1 800 (% non calculable) critique ; Carburant + 860 (+ 26,1 %) à surveiller ; Maintenance − 1 150 (− 46,0 %) à surveiller', '4 500 / 2 200 ; non décomposable ; 600 / 260 ; − 1 000 / − 150', '2 (transport, location)'],
      ],
    },
    result: "Trois réponses de référence calculées, contrôlées par la somme des écarts : + 2 115 USD en juillet, + 2 830 en août, + 8 360 en septembre.",
    tip: "Écrivez les formules avec les mêmes règles que le prompt (strictement supérieur à 10 %, seuil de 1 000 USD). Si l'IA et Excel divergent, c'est le prompt ou la formule qu'il faut corriger : jamais l'un des deux « à l'œil ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Construire la grille d\'évaluation en cinq critères',
    intro: "Sans grille, « ça a l'air bon » remplace la mesure. Vous écrivez cinq critères binaires (Oui ou Non), chacun vérifiable sans interprétation, avant de lancer le premier test.",
    steps: [
      {
        title: 'Écrire les critères',
        actions: [
          "Créez une feuille « Grille » avec trois colonnes : Critère | Test | Résultat (Oui/Non).",
          "Un critère par exigence de l'Output (structure, longueur), un critère par exigence de justesse (postes retenus, chiffres, classement et actions).",
          "Fixez la tolérance : 0,1 point de pourcentage et 1 USD près pour tolérer les arrondis.",
          "Décidez la règle : une exécution est conforme à 5 critères sur 5 ; un cas est conforme si ses deux exécutions le sont.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Ce qu\'on vérifie', 'Comment on le vérifie'],
      rows: [
        ['C1 — Structure', 'Exactement trois sections, « Constat », « Cause », « Action », dans cet ordre ; ni introduction ni conclusion', 'Lecture : compter les titres'],
        ['C2 — Longueur', '300 mots au maximum', 'Word : Révision > Nombre de mots'],
        ['C3 — Postes retenus', 'Exactement les postes de la réponse de référence, ni plus ni moins', 'Comparaison avec l\'onglet Reference'],
        ['C4 — Chiffres', 'Écarts, pourcentages, effets volume et prix identiques à la référence', 'Recalcul dans Excel, tolérance 0,1 point et 1 USD'],
        ['C5 — Classement et actions', 'Classement conforme à la règle ; une action chiffrée et datée par poste critique, aucune autre ; aucun interdit (action générique, recettes)', 'Lecture de la section Action'],
      ],
    },
    result: "Une grille de cinq critères binaires et une règle de décision. Deux personnes différentes évaluant la même sortie arrivent au même score.",
    pitfall: "Une grille subjective (« bon style », « bonne analyse ») : elle ne détecte aucune régression. Chaque critère doit pouvoir être vérifié sans demander ce que vous en pensez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Exécuter le brouillon sur les trois cas, deux fois chacun, et noter',
    intro: "Le brouillon A est le prompt assemblé en procédure 3, avec l'exemple de sortie de la procédure 4. Vous l'exécutez deux fois par cas, dans des conversations neuves, et vous notez chaque réponse avec la grille : une seule exécution ne mesure pas la stabilité.",
    steps: [
      {
        title: 'Lancer et noter',
        actions: [
          "Pour chaque cas : conversation neuve, collez le prompt complet avec le tableau du cas dans <donnees>, envoyez, archivez la réponse.",
          "Recommencez dans une seconde conversation neuve.",
          "Notez chaque réponse dans la grille : Oui ou Non pour C1 à C5, avec une phrase pour chaque Non.",
          "Reportez les résultats dans un tableau récapitulatif et notez la date et le modèle dans le journal d'essais.",
        ],
      },
    ],
    table: {
      columns: ['Cas', 'Exécution 1', 'Exécution 2', 'Conforme ?'],
      rows: [
        ['Cas 1 — juillet', '5 critères sur 5', '5 critères sur 5', 'Oui'],
        ['Cas 2 — août', '4 sur 5 : C3 non, le carburant à − 10,0 % est retenu', '5 critères sur 5', 'Non : instable'],
        ['Cas 3 — septembre', '3 sur 5 : C4 et C5 non, la location est donnée à « + ∞ % » avec un effet prix inventé de 1 800 USD et classée « à surveiller »', '3 sur 5 : C3 et C5 non, la location est omise', 'Non'],
      ],
    },
    result: "Un cas conforme et deux non conformes, avec la cause précise de chaque échec. Un prompt qui échoue sur le troisième cas n'est pas prêt pour la bibliothèque : vous retournez corriger le raisonnement.",
    pitfall: "S'arrêter à la meilleure des deux exécutions. Le cas 2 est passé une fois sur deux : c'est précisément le signe d'un prompt ambigu, pas d'un prompt réussi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Corriger un seul point à la fois et tenir le journal des modifications',
    intro: "Corriger plusieurs choses d'un coup rend impossible de savoir laquelle a réparé quoi, ou cassé quoi. Chaque défaut donne lieu à une modification isolée, notée dans le journal, suivie d'un nouveau test du cas concerné.",
    steps: [
      {
        title: 'Modification 1 — le seuil strict (cas 2)',
        actions: [
          "Dans l'étape 1 du prompt, remplacez « dépasse 10 % » par « dépasse strictement 10 % en valeur absolue (un écart de 10,0 % pile n'est pas retenu) ».",
          "Notez la modification dans le journal : date, défaut, texte avant, texte après.",
          "Ré-exécutez le cas 2 deux fois et notez.",
        ],
      },
      {
        title: 'Modification 2 — le poste non budgété (cas 3)',
        actions: [
          "Insérez une nouvelle étape 2 : « Si le budget prévu d'un poste est égal à 0, écris « % non calculable », retiens ce poste et traite-le comme non budgété. » ; renumérotez les suivantes.",
          "Dans l'étape de calcul des effets, ajoutez : « pour un poste non budgété, écris « non décomposable (aucun volume prévu) » ».",
          "Notez dans le journal ; ré-exécutez le cas 3 deux fois et notez.",
        ],
      },
    ],
    example: {
      title: 'Journal des modifications — 7 octobre 2026',
      lines: [
        "M1 | Défaut : carburant d'août (− 10,0 %) retenu 1 fois sur 2 | Avant : « dépasse 10 % » | Après : « dépasse strictement 10 % en valeur absolue (un écart de 10,0 % pile n'est pas retenu) » | Cas 2 relancé : 5/5 et 5/5.",
        "M2 | Défaut : location de septembre (prévu 0) donnée à « + ∞ % » ou omise | Ajout : nouvelle étape 2, règle « % non calculable », « non décomposable (aucun volume prévu) » | Cas 3 relancé : 5/5 et 5/5.",
        "Le prompt passe de 4 à 5 étapes numérotées.",
      ],
    },
    result: "Deux modifications isolées, chacune tracée avec son texte avant et après, et les cas 2 et 3 conformes à deux exécutions sur deux. Reste à vérifier que ces corrections n'ont rien cassé ailleurs.",
    pitfall: "Corriger et valider sur le seul cas qui a échoué. Une règle ajoutée pour le cas 3 peut changer le comportement du cas 1 : c'est un test de régression, et il vient à l'étape suivante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Ré-exécuter tous les cas et décider du statut',
    intro: "Après toute modification, on repasse tous les cas, pas seulement ceux qui avaient échoué. Vous décidez ensuite du statut honnêtement : « Valide » veut dire utilisable par un collègue sans relecture ; cela s'établit sur le test, pas sur l'espoir.",
    steps: [
      {
        title: 'Relancer la totalité des cas',
        actions: [
          "Avec le prompt final (5 étapes), exécutez deux fois chacun des trois cas dans des conversations neuves.",
          "Notez chaque exécution avec la grille de l'étape 3.",
          "Si un cas échoue de nouveau : retournez à la procédure 2, corrigez une seule chose, et recommencez la série complète.",
        ],
      },
      {
        title: 'Décider du statut',
        actions: [
          "Tous les cas conformes sur deux exécutions : statut « Valide » (nombre de cas testés : 3).",
          "Un cas non conforme ou jamais testé : statut « En test » (« A reviser » si un défaut est connu et non corrigé).",
        ],
      },
    ],
    table: {
      columns: ['Cas', 'Exécution 1', 'Exécution 2', 'Conforme ?'],
      rows: [
        ['Cas 1 — juillet', '5 sur 5', '5 sur 5', 'Oui (après ajustements, inchangé)'],
        ['Cas 2 — août', '5 sur 5', '5 sur 5', 'Oui (après ajustement M1)'],
        ['Cas 3 — septembre', '5 sur 5', '5 sur 5', 'Oui (après ajustement M2)'],
      ],
    },
    result: "Six exécutions sur six à 5 critères sur 5 : le prompt est « Valide », testé sur 3 cas. Le cas 1, repassé après les deux modifications, n'a pas bougé : aucune régression.",
    tip: "Notez le modèle et la date de la série finale. Quand l'outil changera de version, vous saurez quelle série relancer pour vérifier que le prompt tient toujours.",
  },

  // ───────────── Procédure 6 — Documenter dans le guide Word ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 6',
    title: 'Ouvrir le guide, l\'enregistrer et renseigner la section 1',
    intro: "Le guide guide-construction-prompts-chain-of-thought.docx est la preuve que le prompt est réellement validé, et la référence pour quiconque devra le reprendre. Vous le complétez section par section, en recopiant ce que vous avez déjà produit : aucune invention nouvelle.",
    steps: [
      {
        title: 'Préparer le document',
        actions: [
          "Ouvrez 04-templates/guide-construction-prompts-chain-of-thought.docx et enregistrez-le sous 2026-10-07_guide-CoT_ecarts-budgetaires-logistique_v1.docx.",
          "Lisez le bandeau de titre (« Guide de construction d'un prompt chain-of-thought ») et la ligne « Objectif » : ne les modifiez pas.",
        ],
      },
      {
        title: 'Section 1 — Prompt original (instable)',
        actions: [
          "Sous la ligne « Prompt actuellement utilisé, copié tel quel, avant toute modification », cliquez dans le paragraphe vide.",
          "Collez le prompt d'origine, mot pour mot, sans correction d'orthographe ni retouche.",
        ],
      },
    ],
    example: {
      title: 'Section 1 — complétée',
      lines: [
        "« Analyse ce budget et dis-moi ce qui ne va pas. Voici les chiffres : [tableau collé]. »",
      ],
    },
    result: "Le fichier est enregistré sous un nom daté et versionné, et la section 1 contient le prompt d'origine inchangé, à comparer au prompt final.",
    pitfall: "« Nettoyer » le prompt original avant de le coller : vous détruisez la preuve de ce qui posait problème, et la comparaison avant/après perd son sens.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 6',
    title: 'Section 2 — Diagnostic de l\'instabilité',
    intro: "Cette section compte deux lignes à compléter : ce qui change d'une exécution à l'autre, et la cause probable. Chacune propose trois possibilités à entourer ou à préciser ; vous reprenez le diagnostic de la procédure 1.",
    steps: [
      {
        title: 'Remplir les deux lignes',
        actions: [
          "Ligne « Ce qui change d'une exécution à l'autre : la structure / le niveau de détail / la conclusion elle-même » : mettez en gras les trois mentions et ajoutez une précision chiffrée pour chacune.",
          "Ligne « Cause probable : Output non spécifié (ICIO) / raisonnement non guidé (chain-of-thought) / les deux » : mettez en gras « les deux » et recopiez la phrase de diagnostic.",
          "Collez dessous le tableau de comparaison des trois exécutions (procédure 1, étape 4).",
        ],
      },
    ],
    example: {
      title: 'Section 2 — complétée',
      lines: [
        "Ce qui change : la structure (3 puces / 4 intertitres / un tableau), le niveau de détail (48 à 612 mots) et la conclusion elle-même (hausse du dédouanement attribuée au volume ou au prix).",
        "Cause probable : les deux. Output non spécifié (le format passe de trois puces à un texte de 612 mots) et raisonnement non guidé (volume : 1 000 USD ; prix : 1 080 USD, tantôt l'un tantôt l'autre est déclaré cause principale).",
      ],
    },
    result: "Un diagnostic chiffré et justifié, avec le tableau de comparaison en pièce jointe : un lecteur extérieur comprend ce qui était cassé avant de lire la solution.",
    tip: "Si le diagnostic tient en « le prompt était mauvais », la section est inutile. Gardez la formule du guide : un symptôme, une cause, un exemple.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 6',
    title: 'Section 3 — Étapes de raisonnement identifiées',
    intro: "Le guide propose cinq lignes numérotées (« 1. » à « 5. »), pour 4 à 6 étapes attendues. Vous y recopiez les étapes de votre prompt final : elles sont le squelette du chain-of-thought, dans l'ordre réel où un expert raisonnerait.",
    steps: [
      {
        title: 'Remplir les cinq lignes',
        actions: [
          "Cliquez à la suite de « 1. », saisissez la première étape, puis passez à « 2. » et ainsi de suite jusqu'à « 5. ».",
          "Pour chaque ligne, écrivez l'étape complète : verbe, formule ou seuil, résultat attendu.",
          "Si votre prompt compte six étapes, ajoutez une ligne « 6. » ; s'il en compte quatre, laissez la dernière ligne vide ou supprimez-la.",
        ],
      },
    ],
    example: {
      title: 'Section 3 — complétée',
      lines: [
        "1. Calculer pour chaque poste l'écart (réalisé − prévu) en USD et en % du prévu ; retenir les postes dont l'écart dépasse strictement 10 % en valeur absolue.",
        "2. Si le budget prévu d'un poste est 0 : « % non calculable », poste retenu et traité comme non budgété.",
        "3. Pour chaque poste retenu avec quantité prévue : effet volume = (qté réalisée − qté prévue) × prix unitaire prévu ; effet prix = (prix unitaire réalisé − prix unitaire prévu) × qté réalisée ; poste non budgété : « non décomposable ».",
        "4. Classer : critique si dépassement supérieur à 1 000 USD ; à surveiller dans les autres cas, sous-consommation comprise.",
        "5. Pour chaque poste critique : recommandation chiffrée avec action, responsable (fonction), échéance datée.",
      ],
    },
    result: "Cinq étapes numérotées, identiques à celles du prompt : un lecteur peut comparer ligne à ligne le guide et le prompt de la bibliothèque.",
    pitfall: "Écrire dans le guide des étapes « idéales » différentes de celles du prompt. Le guide sert de référence : s'il diverge du prompt réel, il trompe celui qui reprendra le travail.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 6',
    title: 'Section 4 — Prompt reconstruit (méthode ICIO)',
    intro: "La section 4 contient quatre intitulés — Instruction, Contexte, Input, Output attendu — chacun suivi d'un paragraphe vide. Vous collez dans chacun le bloc final, tel qu'il sera enregistré en bibliothèque.",
    steps: [
      {
        title: 'Coller les quatre blocs',
        actions: [
          "Sous « Instruction », collez la phrase d'instruction suivie des cinq étapes numérotées (le guide n'a pas d'intitulé séparé pour les étapes : elles font partie de l'Instruction, comme dans la bibliothèque).",
          "Sous « Contexte », collez le bloc rôle, destinataire, contraintes, ton.",
          "Sous « Input », collez l'emplacement balisé <donnees>…</donnees> avec la description des colonnes.",
          "Sous « Output attendu », collez le bloc de format, y compris les interdits et l'exemple fictif.",
        ],
      },
    ],
    example: {
      title: 'Section 4 — extraits des quatre blocs',
      lines: [
        "Instruction : « Analyse les écarts du budget logistique du mois en suivant précisément ces étapes, dans l'ordre, avant de conclure : 1) … 2) … 3) … 4) … 5) … » (voir section 3)",
        "Contexte : « Tu es l'assistant de la chargée administrative et logistique d'Horizon Grands Lacs… comité de direction… montants en USD, ton factuel, réponse en français. »",
        "Input : « <donnees>Tableau du mois : Poste | Unité | Quantité prévue | Budget prévu (USD) | Quantité réalisée | Réalisé (USD), collé depuis Excel</donnees> »",
        "Output attendu : « Réponds en exactement 3 sections… Maximum 300 mots… N'inclus ni introduction, ni conclusion, ni recommandation générique… Exemple de ligne du Constat (valeurs fictives) : Poste X — + 1 500 USD (+ 30,0 %) — critique. »",
      ],
    },
    result: "Les quatre blocs ICIO sont dans le guide, identiques au texte qui sera copié dans la bibliothèque. Un collègue peut reproduire le prompt sans vous.",
    tip: "Collez le texte brut (Collage spécial > Texte seul) : les guillemets et les puces automatiques de Word peuvent altérer les caractères quand vous recopierez ensuite le prompt vers l'IA.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 6',
    title: 'Section 5 — Résultats des tests sur plusieurs cas',
    intro: "La section 5 contient un tableau de quatre lignes sur trois colonnes : « Cas testé », « Conforme ? », « Écart observé / ajustement ». Elle rappelle la règle : au moins 3 cas réels différents, pas 3 variantes du même exemple.",
    steps: [
      {
        title: 'Remplir le tableau',
        actions: [
          "Colonne « Cas testé » : remplacez « Cas 1 », « Cas 2 », « Cas 3 » par le mois et une description courte, ou ajoutez-la à la suite.",
          "Colonne « Conforme ? » : écrivez Oui ou Non, en précisant « après ajustement » si une modification a été nécessaire.",
          "Colonne « Écart observé / ajustement » : écrivez l'écart de la première passe et la modification qui l'a corrigé, ou « aucun écart ».",
        ],
      },
    ],
    table: {
      columns: ['Cas testé', 'Conforme ?', 'Écart observé / ajustement'],
      rows: [
        ['Cas 1 — juillet 2026 (5 postes, cas simple)', 'Oui', 'Aucun écart sur 2 exécutions ; repassé après M1 et M2 : inchangé'],
        ['Cas 2 — août 2026 (dédouanement double, carburant à − 10,0 %)', 'Oui, après ajustement', 'Brouillon A : carburant retenu 1 fois sur 2. M1 : seuil « strictement supérieur à 10 % ». Relancé : 2 sur 2'],
        ['Cas 3 — septembre 2026 (6 postes, location non budgétée)', 'Oui, après ajustement', 'Brouillon A : location à « + ∞ % » avec effet prix inventé, ou omise. M2 : nouvelle étape « prévu = 0 ». Relancé : 2 sur 2'],
      ],
    },
    result: "Un tableau qui prouve la validation : trois cas distincts, les défauts rencontrés et les corrections appliquées, avec la mention de la ré-exécution complète.",
    pitfall: "Remplir « Oui » partout sans écart observé. Un tableau de tests sans aucun défaut sur trois cas est suspect : un lecteur critique se demandera si les cas étaient assez différents.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 6',
    title: 'Renseigner le bloc de signature et faire relire',
    intro: "Le guide se termine par deux petits tableaux d'une ligne : l'un pour l'auteur et la date, l'autre pour la version et le statut. Ils permettent à un collègue de savoir en dix secondes qui a validé, quand, et dans quel état.",
    steps: [
      {
        title: 'Compléter les deux blocs',
        actions: [
          "Dans « Rédigé par (nom, fonction) », saisissez à la suite du libellé votre nom et votre fonction.",
          "Dans « Date », saisissez la date de rédaction.",
          "Dans « Version du prompt (ex : v1) », saisissez v1.",
          "Dans « Statut (Validé / En test / À réviser) », saisissez le statut établi à la procédure 5.",
        ],
      },
      {
        title: 'Faire relire et archiver',
        actions: [
          "Envoyez le guide à votre supérieur ou à une collègue, avec la consigne : « Peux-tu, avec ce seul document, expliquer ce que fait le prompt et comment le relancer ? »",
          "Enregistrez la version relue dans le dossier de l'équipe, à côté de la bibliothèque.",
        ],
      },
    ],
    example: {
      title: 'Bloc de signature — complété',
      lines: [
        "Rédigé par (nom, fonction) : Amani Kahindo, chargée administrative et logistique | Date : 07/10/2026",
        "Version du prompt : v1 | Statut : Validé",
      ],
    },
    result: "Le guide est complet, signé, versionné et relu. Il sert de dossier de preuve : toute question sur « pourquoi ce prompt est écrit ainsi » trouve sa réponse dedans.",
    tip: "Si votre statut est « En test », écrivez dans la section 5 ce qu'il reste à tester : la fiche indique alors un chemin vers « Validé » au lieu d'un doute.",
  },

  // ───────────── Procédure 7 — Enregistrer dans la bibliothèque Excel ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 6',
    title: 'Ouvrir la bibliothèque partagée et vérifier les droits',
    intro: "Un prompt validé n'a de valeur que s'il est visible de toute l'équipe. La bibliothèque vit sur l'espace partagé de l'organisation, jamais dans un fichier personnel. Avant de saisir quoi que ce soit, vous vérifiez que vous ouvrez bien la copie partagée et que l'enregistrement est automatique.",
    steps: [
      {
        title: 'Ouvrir la bonne copie',
        actions: [
          "Ouvrez, sur l'espace partagé de l'équipe, HGL_Bibliotheque_prompts_ICIO.xlsx, copie du gabarit bibliotheque-prompts-organisationnelle-icio.xlsx dupliquée par Olivier Kasongo le 28/09/2026.",
          "Vérifiez dans le coin supérieur gauche que l'enregistrement automatique est activé.",
          "Contrôlez que le fichier ne vient pas de votre bureau ni d'une pièce jointe : le nom du dossier partagé doit s'afficher dans la barre de titre.",
        ],
      },
      {
        title: 'Repérer la structure',
        actions: [
          "Onglet « Bibliotheque » : le titre est en ligne 1, la mention « Chaque ligne = un prompt valide et reutilisable par l'organisation » en ligne 2, les dix en-têtes de A à J en ligne 4, les prompts à partir de la ligne 5.",
          "Notez que les lignes 5 à 8 contiennent déjà quatre prompts ; la première ligne libre est la ligne 9.",
          "Repérez les deux autres onglets : « Legende » et « Synthese ».",
        ],
      },
    ],
    result: "Vous êtes dans la copie partagée, enregistrement automatique actif, et vous savez que votre prompt ira en ligne 9, parmi un maximum de 14 lignes (lignes 5 à 18).",
    pitfall: "Saisir dans une copie téléchargée « pour aller plus vite » : votre prompt n'existera que dans votre dossier, exactement ce que la bibliothèque est censée éviter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 6',
    title: 'Lire l\'onglet « Legende » colonne par colonne',
    intro: "L'onglet « Legende » explique comment remplir chacune des dix colonnes. Vous le lisez une fois avant de saisir : les règles de version, de date et de statut sont celles qui distinguent une bibliothèque professionnelle d'un tas de prompts empilés.",
    steps: [
      {
        title: 'Parcourir les lignes 3 à 12',
        actions: [
          "Ouvrez l'onglet « Legende » : chaque ligne associe un nom de colonne (colonne A) à sa règle (colonne B).",
          "Pour chaque colonne, comparez la règle à ce que vous avez produit en procédures 5 et 6.",
          "Repérez les deux colonnes à liste déroulante dans l'onglet « Bibliotheque » : Categorie / Tag (A) et Statut (J).",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Ce qu\'on y écrit', 'Règle à retenir'],
      rows: [
        ['A — Categorie / Tag', 'La catégorie, choisie dans la liste déroulante', 'Classer par usage, jamais par outil d\'IA utilisé'],
        ['B — Nom du prompt', 'Un intitulé court et explicite', 'Retrouvable par mot-clé'],
        ['C — Instruction (I)', 'L\'action demandée, avec les étapes de raisonnement', 'Verbe d\'action clair ; étapes incluses si la tâche est complexe'],
        ['D — Contexte (C)', 'Rôle, destinataire, contraintes, ton', 'Pas de données d\'un cas réel'],
        ['E — Input (I)', 'L\'emplacement des données à traiter', 'Délimité par des balises ou des guillemets'],
        ['F — Output attendu (O)', 'Le format exact de sortie', 'Sections, longueur, ce qu\'il ne faut PAS inclure'],
        ['G — Version', 'v1, v2…', 'Incrémenter à chaque modification, ne jamais remplacer en silence'],
        ['H — Derniere MAJ', 'Date de la dernière modification', 'Format AAAA-MM-JJ'],
        ['I — Teste sur (nb de cas)', 'Nombre de cas réels différents vérifiés', 'Minimum recommandé : 3'],
        ['J — Statut', 'Valide, En test ou A reviser (liste déroulante)', 'Valide = sans relecture ; En test = à vérifier ; A reviser = défaut connu, ne pas utiliser tel quel'],
      ],
    },
    result: "Les dix règles sont lues. Vous savez en particulier que la version, la date, le nombre de cas et le statut sont ce qui permet à un collègue de décider s'il peut utiliser le prompt sans relecture.",
    tip: "Les valeurs des listes déroulantes sont écrites sans accents dans le fichier (« Analyse financiere », « A reviser »). Choisissez toujours dans la liste plutôt que de les retaper : la feuille « Synthese » compte les valeurs à l'identique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 6',
    title: 'Colonnes A et B : catégorie et nom du prompt',
    intro: "La catégorie et le nom sont ce par quoi un collègue retrouvera le prompt. Ils se choisissent en pensant à celui qui cherche, pas à celui qui écrit.",
    steps: [
      {
        title: 'Choisir la catégorie (A9)',
        actions: [
          "Cliquez sur la cellule A9 : une flèche apparaît à droite.",
          "Ouvrez la liste et choisissez « Analyse financiere » (sept choix : Analyse financiere, Redaction RH, Support RH, Reporting, Analyse de donnees, Communication, Autre).",
          "Choisissez selon l'usage (analyser des écarts budgétaires), pas selon l'outil d'IA utilisé.",
        ],
      },
      {
        title: 'Écrire le nom (B9)',
        actions: [
          "Saisissez un intitulé court qui contient les mots qu'un collègue taperait pour le chercher.",
          "Vérifiez qu'il se distingue du nom de la ligne 5 (« Analyse des ecarts budgetaires mensuels ») pour qu'on ne confonde pas les deux.",
        ],
      },
    ],
    example: {
      title: 'Ligne 9 — colonnes A et B',
      lines: [
        "A9 : Analyse financiere",
        "B9 : Analyse des écarts budgétaires logistiques (volume / prix)",
      ],
    },
    result: "La ligne 9 porte la bonne catégorie et un nom qui la distingue de la ligne 5. Un filtre sur « Analyse financiere » listera maintenant les deux prompts.",
    pitfall: "Classer par outil (« ChatGPT — budget ») : un même prompt ICIO fonctionne sur plusieurs outils. Classer par outil oblige à dupliquer l'entrée à chaque changement de plateforme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 6',
    title: 'Colonnes C à F : les quatre blocs ICIO',
    intro: "Les colonnes C, D, E et F reçoivent, dans cet ordre, l'Instruction (avec ses étapes), le Contexte, l'Input et l'Output. Vous copiez les blocs du guide Word, section 4 : jamais une version retapée de mémoire.",
    steps: [
      {
        title: 'Copier les blocs',
        actions: [
          "Dans le guide Word, section 4, sélectionnez le bloc Instruction, copiez (Ctrl+C), puis dans Excel cliquez sur C9 et collez dans la barre de formule (Ctrl+V) pour conserver le texte sur une seule cellule.",
          "Procédez de même pour D9 (Contexte), E9 (Input) et F9 (Output attendu).",
          "Pour séparer les étapes dans C9, placez le curseur dans la barre de formule et insérez un saut de ligne avec Alt+Entrée avant chaque numéro d'étape.",
          "Activez le renvoi à la ligne automatique (Accueil > Renvoyer à la ligne automatiquement) pour lire le texte entier.",
        ],
      },
      {
        title: 'Contrôler',
        actions: [
          "Comparez C9 mot à mot avec la section 3 du guide : cinq étapes, mêmes seuils.",
          "Vérifiez que E9 ne contient qu'un emplacement balisé et aucune donnée réelle.",
        ],
      },
    ],
    example: {
      title: 'Ligne 9 — colonnes C à F (texte final)',
      lines: [
        "C9 : « Analyse les écarts du budget logistique du mois en suivant précisément ces étapes, dans l'ordre, avant de conclure : 1) Calcule pour chaque poste l'écart (réalisé − prévu) en USD et en % du prévu, puis retiens les postes dont l'écart dépasse strictement 10 % en valeur absolue (un écart de 10,0 % pile n'est pas retenu). 2) Si le budget prévu d'un poste est égal à 0, écris « % non calculable », retiens ce poste et traite-le comme non budgété. 3) Pour chaque poste retenu qui a une quantité prévue, calcule l'effet volume = (quantité réalisée − quantité prévue) × prix unitaire prévu, et l'effet prix = (prix unitaire réalisé − prix unitaire prévu) × quantité réalisée ; pour un poste non budgété, écris « non décomposable (aucun volume prévu) ». 4) Classe chaque poste retenu : « critique » si le dépassement est supérieur à 1 000 USD ; « à surveiller » dans tous les autres cas, y compris la sous-consommation. 5) Formule, pour chaque poste critique, une recommandation chiffrée : action, responsable (fonction), échéance datée. »",
        "D9 : « Tu es l'assistant de la chargée administrative et logistique d'Horizon Grands Lacs, organisation à but non lucratif présente à Goma, Bukavu et Kinshasa. Le destinataire est le comité de direction, qui lit ce rapport en trois minutes lors de la réunion mensuelle et attend des constats actionnables, pas une simple description des chiffres. Montants en USD, ton factuel, réponse en français. »",
        "E9 : « <donnees>Tableau du mois : Poste | Unité | Quantité prévue | Budget prévu (USD) | Quantité réalisée | Réalisé (USD), collé depuis Excel</donnees> »",
        "F9 : « Réponds en exactement 3 sections, dans cet ordre, avec ces titres : « Constat » (une ligne par poste retenu : poste, écart en USD et en % — ou « % non calculable » —, classement), « Cause » (pour chaque poste retenu : effet volume et effet prix en USD, ou « non décomposable »), « Action » (une recommandation chiffrée et datée par poste critique, aucune pour les postes à surveiller). Maximum 300 mots, soit une page. N'inclus ni introduction, ni conclusion, ni recommandation générique du type « suivre l'évolution », ni analyse des recettes. Exemple de ligne du Constat (valeurs fictives, à ne pas reprendre) : Poste X — + 1 500 USD (+ 30,0 %) — critique. »",
      ],
    },
    result: "Les quatre blocs sont en place, identiques à ceux du guide. Un collègue peut copier C9 à F9 dans l'IA, remplacer l'emplacement de E9 par un tableau, et obtenir la même structure.",
    pitfall: "Coller un vrai tableau dans E9 « pour illustrer ». Le fichier est partagé : n'y laissez jamais de chiffres, de noms ou de montants d'un cas réel, seulement l'emplacement balisé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 6',
    title: 'Colonnes G à J : version, date, cas testés, statut',
    intro: "Ces quatre colonnes sont celles qui transforment une ligne de texte en prompt gouverné. Elles disent depuis quand, sur combien de cas, et dans quel état le prompt peut être utilisé.",
    steps: [
      {
        title: 'Saisir les quatre valeurs',
        actions: [
          "G9 : saisissez v1.",
          "H9 : mettez d'abord la cellule au format Texte (Accueil > Format de nombre > Texte), puis saisissez 2026-10-08, comme dans les lignes 5 à 8 ; sans cela Excel convertit la saisie en date.",
          "I9 : saisissez 3, le nombre de cas réels différents sur lesquels le prompt a été vérifié (procédure 5).",
          "J9 : ouvrez la liste déroulante et choisissez « Valide ».",
        ],
      },
      {
        title: 'Justifier le statut',
        actions: [
          "Vérifiez que « Valide » repose sur le tableau de tests de la procédure 5 : trois cas conformes sur deux exécutions chacun, après ré-exécution complète.",
          "Si un cas n'a pas été testé ou si un défaut est connu, choisissez « En test » ou « A reviser » : le statut reflète l'état réel, pas l'espoir.",
        ],
      },
    ],
    example: {
      title: 'Ligne 9 — colonnes G à J',
      lines: [
        "G9 : v1 | H9 : 2026-10-08 | I9 : 3 | J9 : Valide",
      ],
    },
    result: "La ligne 9 est complète sur dix colonnes. Le statut « Valide » est appuyé par trois cas testés, et la date est au format de la légende.",
    pitfall: "Écrire « Valide » parce qu'on a hâte de livrer. Un collègue fera confiance à ce statut et utilisera le prompt sans relecture : si un défaut subsiste, il n'a aucun moyen de le deviner.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 6',
    title: 'Contrôler l\'onglet « Synthese » et ses limites',
    intro: "L'onglet « Synthese » se calcule tout seul à partir de l'onglet « Bibliotheque » : il compte les prompts par catégorie et ceux qui sont « Valide ». Vous ne modifiez aucune formule ; vous vérifiez que votre ligne y est comptée comme prévu.",
    steps: [
      {
        title: 'Lire la synthèse',
        actions: [
          "Ouvrez l'onglet « Synthese » : les lignes 5 à 11 listent les sept catégories ; la ligne 12 donne le TOTAL.",
          "Cliquez sur B5 : la formule est =COUNTIF(Bibliotheque!$A$5:$A$18;A5) ; C5 compte les lignes de la catégorie dont le statut est « Valide ».",
          "Comparez les nombres affichés à ceux attendus.",
        ],
      },
      {
        title: 'Connaître la limite',
        actions: [
          "Les formules et les listes déroulantes couvrent les lignes 5 à 18, soit 14 prompts.",
          "Pour dépasser 14 prompts, insérez de nouvelles lignes avant la ligne 18 (clic droit sur la ligne > Insérer) : les plages s'étendent d'elles-mêmes. Ne saisissez jamais sous la ligne 18.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Nombre de prompts', 'Dont statut « Valide »'],
      rows: [
        ['Analyse financiere', '2 (ligne 5 et ligne 9)', '2'],
        ['Redaction RH', '1', '1'],
        ['Support RH', '1', '1'],
        ['Reporting', '1', '0 (ligne 8 en test)'],
        ['Analyse de donnees, Communication, Autre', '0', '0'],
        ['TOTAL', '5', '4'],
      ],
    },
    result: "La synthèse affiche 5 prompts, dont 4 « Valide » : avant votre ajout elle affichait 4 et 3. Votre ligne est bien comptée dans « Analyse financiere ».",
    tip: "Si un nombre ne bouge pas après votre saisie, la cause est presque toujours une catégorie retapée à la main avec une faute ou un accent : revenez à la liste déroulante.",
  },

  // ───────────── Procédure 8 — Faire vivre la bibliothèque ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 5',
    title: 'Détecter un quatrième cas qui fait échouer le prompt validé',
    intro: "Le lundi 2 novembre 2026, Amani lance le prompt v1 sur le tableau d'octobre. Un poste de maintenance affiche 0 intervention réalisée mais 600 USD de dépense : un cas que les trois tests n'avaient pas rencontré. Vous traitez la découverte d'un défaut en production dans l'ordre, sans corriger dans l'urgence.",
    steps: [
      {
        title: 'Constater et archiver',
        actions: [
          "Copiez la réponse défaillante dans le journal d'essais, avec la date, le modèle et le tableau utilisé.",
          "Calculez la réponse de référence dans l'onglet « Reference » : effet volume − 2 500 USD ; effet prix non calculable (aucune quantité réalisée) ; 600 USD de dépense sans quantité.",
          "Évaluez la sortie avec la grille : identifiez le critère en échec.",
        ],
      },
      {
        title: 'Protéger les autres utilisateurs',
        actions: [
          "Dans la bibliothèque, passez J9 de « Valide » à « En test » : un collègue sait qu'il doit vérifier avant usage réel.",
          "Ne modifiez pas encore le texte de C9 : la correction se prépare à part, avec son test de régression.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Unité', 'Quantité prévue', 'Budget prévu (USD)', 'Quantité réalisée', 'Réalisé (USD)'],
      rows: [
        ['Transport routier', 'trajet', '8', '12 000', '9', '13 950'],
        ['Entreposage', 'mois-site', '3', '4 500', '3', '4 500'],
        ['Dédouanement', 'dossier', '5', '2 500', '5', '2 500'],
        ['Carburant', 'litre', '2 200', '3 300', '2 300', '3 680'],
        ['Maintenance véhicules', 'intervention', '5', '2 500', '0', '600'],
      ],
    },
    example: {
      title: 'Sortie défaillante de la v1 — poste Maintenance',
      lines: [
        "« Cause : effet volume − 2 500 USD ; effet prix + 600 USD (prix unitaire réalisé : 600 USD par intervention). »",
        "Défaut : le modèle a supposé une intervention pour pouvoir calculer un prix. Il y a eu 0 intervention : le prix n'existe pas, et la dépense de 600 USD est autre chose (par exemple une avance sur pièces). Critère C4 en échec.",
      ],
    },
    result: "Le défaut est reproduit, documenté avec sa réponse de référence, et la ligne 9 est signalée « En test » pendant la correction.",
    pitfall: "Corriger directement la cellule C9 en pleine analyse. Vous modifieriez un prompt utilisé par d'autres sans test de régression : l'erreur silencieuse que ce module cherche à éviter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 5',
    title: 'Préparer la version v2 : une modification, une trace',
    intro: "Vous ne remplacez jamais silencieusement un prompt validé. La nouvelle version se prépare dans le guide Word, hors bibliothèque, avec une seule modification et sa trace écrite.",
    steps: [
      {
        title: 'Rédiger la modification',
        actions: [
          "Enregistrez une copie du guide sous 2026-11-02_guide-CoT_ecarts-budgetaires-logistique_v2.docx ; le fichier v1 reste archivé tel quel.",
          "Modifiez uniquement l'étape 3 du prompt, en y ajoutant une règle pour le cas détecté.",
          "Dans la section 3 du guide, recopiez l'étape 3 modifiée ; dans la section 5, insérez une cinquième ligne « Cas 4 — octobre 2026 » avec l'écart observé et l'ajustement.",
          "Dans le bloc de signature, passez la version à v2 et mettez le statut à « En test ».",
        ],
      },
    ],
    example: {
      title: 'Étape 3 — avant / après',
      lines: [
        "Avant (v1) : « …l'effet prix = (prix unitaire réalisé − prix unitaire prévu) × quantité réalisée ; pour un poste non budgété, écris « non décomposable (aucun volume prévu) ». »",
        "Après (v2) : « …l'effet prix = (prix unitaire réalisé − prix unitaire prévu) × quantité réalisée ; pour un poste non budgété, écris « non décomposable (aucun volume prévu) » ; si la quantité réalisée est égale à 0 ou absente, n'écris pas d'effet prix : écris « effet prix non calculable » et indique le montant réalisé comme « dépense sans quantité ». »",
        "Journal : M3 | 02/11/2026 | Défaut : poste à 0 intervention et 600 USD, prix unitaire inventé | Une seule règle ajoutée dans l'étape 3.",
      ],
    },
    result: "Un guide v2 complet, avec une seule modification tracée et un cas supplémentaire documenté. La bibliothèque n'a pas encore bougé.",
    tip: "Une règle ajoutée doit nommer précisément le cas qu'elle traite (« quantité réalisée égale à 0 ou absente »). Une règle vague (« sois prudent sur les prix ») ajouterait du bruit à tous les autres cas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 5',
    title: 'Passer le test de régression sur les quatre cas',
    intro: "Une modification réparant un cas peut en casser un autre. Avant de publier, vous ré-exécutez la v2 sur les trois cas qui avaient validé la v1, plus le nouveau cas : c'est le test de régression.",
    steps: [
      {
        title: 'Rejouer la série complète',
        actions: [
          "Avec le texte v2, exécutez deux fois chacun des quatre cas (juillet, août, septembre, octobre) dans des conversations neuves.",
          "Évaluez chaque sortie avec la grille C1 à C5.",
          "Comparez les sorties des cas 1 à 3 à celles de la v1 : mêmes postes retenus, mêmes chiffres, même structure.",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Tous les cas à 5 critères sur 5 : publication possible.",
          "Une régression sur un ancien cas : n'enregistrez pas la v2 ; revoyez la règle ajoutée (procédure 2, étape 4), puis recommencez la série complète.",
        ],
      },
    ],
    table: {
      columns: ['Cas', 'Exécution 1', 'Exécution 2', 'Résultat'],
      rows: [
        ['Cas 1 — juillet', '5 sur 5', '5 sur 5', 'Conforme : identique à la v1'],
        ['Cas 2 — août', '5 sur 5', '5 sur 5', 'Conforme : identique à la v1'],
        ['Cas 3 — septembre', '5 sur 5', '5 sur 5', 'Conforme : identique à la v1'],
        ['Cas 4 — octobre', '5 sur 5 : « effet prix non calculable », « dépense sans quantité 600 USD »', '5 sur 5', 'Conforme : défaut corrigé'],
      ],
    },
    result: "Huit exécutions sur huit à 5 critères sur 5. La v2 corrige le cas 4 et n'a changé aucun des trois cas anciens : aucune régression.",
    pitfall: "Ne rejouer que le cas 4 « puisque c'est lui qui a échoué ». Le jour où une règle ajoutée change le comportement d'un cas ancien, vous le découvrez devant le comité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 5',
    title: 'Publier la v2 dans la bibliothèque et prévenir les utilisateurs',
    intro: "La publication tient en cinq cellules de la ligne 9 et un message à l'équipe. Elle se fait seulement après la régression, jamais avant.",
    steps: [
      {
        title: 'Mettre à jour la ligne 9',
        actions: [
          "C9 : remplacez le contenu par le texte v2 de l'Instruction, copié depuis le guide v2.",
          "G9 : remplacez v1 par v2. H9 : saisissez 2026-11-03 (cellule au format Texte).",
          "I9 : remplacez 3 par 4, le nombre de cas qui ont validé cette version.",
          "J9 : repassez de « En test » à « Valide » depuis la liste déroulante.",
          "Contrôlez l'onglet « Synthese » : le total est toujours 5 prompts, dont 4 « Valide ».",
        ],
      },
      {
        title: 'Prévenir',
        actions: [
          "Envoyez un court message aux utilisateurs du prompt : numéro de version, ce qui change, ce qu'ils doivent refaire.",
        ],
      },
    ],
    example: {
      title: 'Message à l\'équipe — mardi 3 novembre 2026',
      lines: [
        "« Bibliothèque de prompts, ligne 9 « Analyse des écarts budgétaires logistiques (volume / prix) » : passage en v2. Changement unique : si la quantité réalisée d'un poste est 0, le prompt écrit « effet prix non calculable » et signale une « dépense sans quantité » au lieu d'inventer un prix. Testé sur 4 cas, aucune régression. Si vous avez des analyses faites en v1 avec un poste à quantité 0, relancez-les. — Amani. »",
        "Ligne 9 : C9 texte v2 | G9 v2 | H9 2026-11-03 | I9 4 | J9 Valide",
      ],
    },
    result: "La v2 est publiée avec sa version, sa date et ses quatre cas ; ses utilisateurs sont informés de la modification et de ce qu'ils doivent relancer.",
    pitfall: "Changer C9 sans toucher à G9 ni H9. Un collègue qui obtient un résultat différent de celui documenté ne peut plus savoir s'il utilise la dernière version.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 5',
    title: 'Faire le test de reprise et instituer la revue régulière',
    intro: "Une bibliothèque vit si d'autres que son auteure s'en servent seuls. Vous testez la reprise par une collègue, puis vous fixez une revue périodique pour que les statuts restent vrais.",
    steps: [
      {
        title: 'Test de reprise',
        actions: [
          "Demandez à une collègue qui n'a pas participé de réaliser une analyse avec la ligne 9, sans vous poser de question.",
          "Observez sans intervenir : où hésite-t-elle ? Quelle colonne ou quelle consigne n'est pas claire ?",
          "Notez ses hésitations : elles deviennent des conventions de saisie ou une amélioration, tracée en nouvelle version si le prompt change.",
        ],
      },
      {
        title: 'Revue trimestrielle',
        actions: [
          "Fixez une date de revue (le premier lundi de chaque trimestre) et désignez un responsable.",
          "Filtrez la colonne J sur « En test » et « A reviser » : chaque prompt est promu, corrigé ou retiré.",
          "Relancez un cas de référence sur chaque prompt « Valide » après tout changement d'outil ou de modèle.",
        ],
      },
    ],
    example: {
      title: 'Test de reprise d\'Esther Masika — mardi 3 novembre 2026',
      lines: [
        "Esther copie C9 à F9 dans une conversation neuve, colle son tableau de déplacements terrain d'octobre dans l'emplacement <donnees>, lance.",
        "Résultat : trois sections Constat, Cause, Action, 214 mots, 5 critères sur 5 après contrôle. Seule hésitation : « que mettre en Unité pour un forfait ? »",
        "Convention ajoutée au guide : forfait = unité « forfait », quantité 1. Aucun changement du prompt, donc pas de nouvelle version.",
        "Revue fixée : lundi 4 janvier 2027, responsable Olivier Kasongo, avec filtre sur les statuts « En test » et « A reviser ».",
      ],
    },
    result: "Un test de reprise réussi (une collègue produit le bon format sans aide) et une revue datée, avec un responsable. La bibliothèque a désormais un cycle de vie.",
    tip: "Un prompt que personne n'utilise en six mois est un candidat à retirer, pas à conserver : une bibliothèque trop longue décourage la recherche et dilue la confiance des équipes.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Du prompt instable au raisonnement validé',
    scenario: "Rappel : depuis quatre mois, Amani Kahindo recopie « Analyse ce budget et dis-moi ce qui ne va pas. Voici les chiffres : [tableau collé]. » et Patrick Mumbere se plaint que le format change tout le temps. Le comité est le vendredi 9 octobre 2026. Voici le raisonnement complet d'Amani, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Chercher avant de réécrire', body: "Elle ouvre la bibliothèque partagée : la ligne 5 (« Analyse des écarts budgétaires mensuels », v2, Valide) couvre le principe mais pas le tableau avec quantités ni le seuil en USD. Décision : adapter, en reprenant les trois sections de la ligne 5.", result: 'Décision écrite : adapter, ligne 9 à créer.' },
      { title: 'Mesurer l\'instabilité', body: "Elle prépare le jeu d'août (21 000 prévu, 23 830 réalisé), lance le prompt d'origine trois fois dans des conversations neuves et tabule : 3 puces, 612 mots, un tableau ; conclusion « volume » deux fois et « prix » une fois.", result: 'Tableau de comparaison : structure, détail et conclusion varient.' },
      { title: 'Poser le diagnostic', body: "Les deux défauts sont présents : Output non spécifié (format) et raisonnement non guidé (le dédouanement d'août pèse 1 000 USD de volume et 1 080 USD de prix, chaque exécution en choisit un).", result: 'Diagnostic en une phrase, justifié par un exemple chiffré.' },
      { title: 'Décomposer le raisonnement et le faire valider', body: "Elle écrit ses gestes d'analyste, les rend mesurables, puis fait valider les seuils par Patrick : 10 % pour retenir un poste, 1 000 USD de dépassement pour le qualifier de critique, sous-consommation jamais critique.", result: '4 étapes numérotées et des seuils confirmés par écrit.' },
    ],
    table: {
      columns: ['Contrôle', 'Avant', 'Après (v1)'],
      rows: [
        ['Structure', '3 puces, 4 intertitres ou un tableau selon l\'exécution', 'Trois sections fixes : Constat, Cause, Action'],
        ['Niveau de détail', '48 à 612 mots', '300 mots maximum'],
        ['Conclusion sur la cause', 'Volume ou prix, selon l\'exécution', 'Effet volume et effet prix calculés par formule'],
        ['Recommandation', '« Suivre l\'évolution »', 'Chiffrée, avec responsable et échéance, pour les postes critiques seulement'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — Le prompt reconstruit et ses tests',
    scenario: "Le raisonnement est validé. Amani l'enrobe dans les quatre blocs ICIO, ajoute un exemple de sortie fictif, puis le teste sur trois mois réels avec une grille de cinq critères et des réponses de référence calculées dans Excel.",
    steps: [
      { title: 'Écrire les quatre blocs', body: "Instruction à un seul verbe (« Analyse ») avec les étapes numérotées ; Contexte (assistant de la chargée administrative et logistique, comité de direction, trois minutes de lecture, USD) ; Input balisé <donnees> avec les six colonnes ; Output en trois sections, 300 mots, quatre interdits, un exemple de ligne fictif.", result: 'Brouillon A relu à froid par Esther Masika.' },
      { title: 'Choisir trois cas et calculer les références', body: "Juillet (simple, + 2 115 USD), août (dédouanement double, carburant à − 10,0 % pile, + 2 830 USD), septembre (location non budgétée, + 8 360 USD). Références dans l'onglet Reference, formules d'écart, de retenue, d'effets et de classement.", result: '3 réponses de référence contrôlées par la somme des écarts.' },
      { title: 'Évaluer le brouillon A', body: "Juillet 5/5 et 5/5. Août : carburant retenu 1 fois sur 2 (4/5, 5/5). Septembre : location à « + ∞ % » avec effet prix inventé, ou omise (3/5 et 3/5).", result: 'Deux défauts localisés : seuil non strict, poste non budgété.' },
      { title: 'Corriger un point à la fois', body: "M1 : « strictement supérieur à 10 % ». M2 : nouvelle étape « si le budget prévu est 0 : % non calculable, poste retenu, non décomposable ». Le prompt passe de 4 à 5 étapes. Chaque correction est suivie d'un test du cas concerné.", result: 'Journal : M1 et M2 avec texte avant et après.' },
      { title: 'Rejouer toute la série', body: "Six exécutions (3 cas × 2) toutes à 5/5, y compris le cas 1 repassé après les deux modifications.", result: 'Statut « Valide », nombre de cas testés : 3.' },
    ],
    result: "Le prompt est stable : mêmes trois sections, même niveau de détail et mêmes règles de raisonnement sur trois mois très différents, avec des chiffres identiques à ceux d'Excel.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Les livrables finaux',
    scenario: "Voici ce qui a été remis et archivé : la sortie du prompt v1 sur septembre, transmise à Patrick le jeudi 8 octobre 2026 pour le comité du lendemain, puis la ligne de bibliothèque et l'évolution v2 du mois suivant.",
    steps: [
      { title: 'Constat', body: "Transport routier : + 6 700 USD (+ 55,8 %) — critique. Location de véhicule : + 1 800 USD (% non calculable, poste non budgété) — critique. Carburant : + 860 USD (+ 26,1 %) — à surveiller. Maintenance véhicules : − 1 150 USD (− 46,0 %) — à surveiller." },
      { title: 'Cause', body: "Transport routier : effet volume + 4 500 USD (11 trajets au lieu de 8), effet prix + 2 200 USD (1 700 USD le trajet au lieu de 1 500). Location : non décomposable. Carburant : effet volume + 600 USD, effet prix + 260 USD. Maintenance : effet volume − 1 000 USD, effet prix − 150 USD." },
      { title: 'Action', body: "Transport routier : faire justifier par Transco Sarl le tarif de 1 700 USD le trajet et obtenir un retour à 1 500 USD, soit 2 200 USD par mois à volume égal — Responsable achats — vendredi 16/10/2026. Location de véhicule : régulariser les 10 jours (1 800 USD) par un avenant budgétaire ou y mettre fin — Chargée administrative et logistique — vendredi 23/10/2026." },
      { title: 'Ligne 9 de la bibliothèque', body: "A9 Analyse financiere | B9 Analyse des écarts budgétaires logistiques (volume / prix) | C9 à F9 : les quatre blocs finaux | G9 v1 | H9 2026-10-08 | I9 3 | J9 Valide. Synthèse : 5 prompts, 4 « Valide ».", result: 'Ligne complète sur dix colonnes.' },
      { title: 'Évolution v2 (3 novembre 2026)', body: "Cas 4 (octobre) : maintenance à 0 intervention et 600 USD. Une seule règle ajoutée à l'étape 3 (« effet prix non calculable », « dépense sans quantité »), régression sur 4 cas, 8 exécutions sur 8 conformes, test de reprise réussi par Esther Masika.", result: 'G9 v2 | H9 2026-11-03 | I9 4 | J9 Valide.' },
    ],
    result: "Décision du comité du 9 octobre (exemple) : les deux actions sont adoptées ; le responsable achats ouvre la discussion tarifaire avec Transco Sarl et la location est régularisée avant le 23 octobre.",
    tip: "Gardez ce corrigé comme modèle : sur votre prochain prompt récurrent, seuls la tâche, les seuils et les cas changeront ; la démarche (diagnostic, étapes, ICIO, tests, guide, bibliothèque, régression) reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Reconstruire un prompt budgétaire instable',
    instructions: "Reprenez l'étude de cas du module : un prompt « Analyse ce budget et dis-moi ce qui ne va pas. Voici les chiffres : [tableau collé]. » utilisé chaque mois, dont le format change sans cesse. Refaites la démarche seul(e), sans regarder les diapositives de procédure, avec vos propres jeux de chiffres fictifs, puis comparez avec le corrigé.",
    steps: [
      {
        title: 'Diagnostic et raisonnement',
        actions: [
          "En une phrase, dites si le problème vient d'un défaut d'Output (ICIO), de raisonnement guidé (CoT) ou des deux, avec un exemple concret tiré de l'énoncé.",
          "Écrivez en 4 à 6 étapes numérotées le raisonnement d'un analyste budgétaire expérimenté : repérage des écarts significatifs avec un seuil, distinction volume / prix avec formules, priorisation, recommandations.",
        ],
      },
      {
        title: 'Reconstruction ICIO et test',
        actions: [
          "Réécrivez le prompt entier en quatre blocs : Instruction avec étapes, Contexte, Input balisé, Output avec sections fixes, longueur maximale et interdits.",
          "Fabriquez au moins deux jeux de chiffres fictifs différents (6 postes, avec un poste non budgété et un écart à exactement 10 %) et calculez leurs réponses de référence dans Excel.",
          "Exécutez le prompt deux fois par jeu, évaluez avec une grille de cinq critères, corrigez un point à la fois et rejouez tout.",
        ],
      },
      {
        title: 'Documentation et bibliothèque',
        actions: [
          "Consignez le travail dans guide-construction-prompts-chain-of-thought.docx (sections 1 à 5 et bloc de signature), avec le test sur vos deux jeux de chiffres au minimum.",
          "Ajoutez le prompt validé à bibliotheque-prompts-organisationnelle-icio.xlsx : catégorie, quatre blocs, version v1, date, nombre de cas, statut correspondant à l'état réel de vos tests.",
        ],
      },
    ],
    deliverable: "Deux fichiers complétés : le guide Word (sections 1 à 5, signature) et une ligne ajoutée dans la bibliothèque Excel (dix colonnes). Le prompt final, relu à froid, ne laisse aucune place à une interprétation différente d'un mois à l'autre.",
    tip: "Points de contrôle sur le corrigé : le diagnostic est « les deux » ; le CoT compte 4 à 6 étapes avec seuil et formules ; l'Output fixe le nombre de sections ; le statut n'est « Valide » que si chaque jeu a été exécuté plusieurs fois avec des résultats conformes.",
  },
  {
    type: 'exercise',
    title: 'Exercice d\'entraînement — Faire passer un prompt « En test » à « Valide »',
    instructions: "La ligne 8 de la bibliothèque, « Synthese de rapport de mission terrain » (catégorie Reporting, v1, testée sur 3 cas, statut « En test »), n'est pas encore utilisable sans relecture. Auditez-la avec la méthode du module et décidez de son statut.",
    steps: [
      {
        title: 'Auditer',
        actions: [
          "Dans la ligne 8, relevez les quatre blocs ICIO (colonnes C à F) et vérifiez, bloc par bloc, ce qui est précis et ce qui est laissé au modèle.",
          "Extrayez les quatre étapes de raisonnement de l'Instruction : sont-elles mesurables ? Manque-t-il un critère ou un seuil ?",
          "Vérifiez que l'Input est balisé et que l'Output fixe les sections, la longueur et les interdits.",
        ],
      },
      {
        title: 'Tester et décider',
        actions: [
          "Choisissez trois rapports de mission fictifs de formes différentes (rapport complet, rapport sans objectifs initiaux, rapport très court) et rédigez pour chacun une réponse de référence.",
          "Exécutez le prompt deux fois par rapport, évaluez avec une grille de cinq critères adaptée à la synthèse.",
          "Si un défaut apparaît, corrigez une seule chose, créez une v2, passez un test de régression sur les 3 cas initiaux plus le nouveau, puis décidez du statut.",
        ],
      },
    ],
    deliverable: "Un tableau d'audit (bloc par bloc), le tableau de tests (cas, conformité, ajustement), et la ligne 8 mise à jour : version, date, nombre de cas et statut justifié.",
    tip: "Un prompt « En test » depuis longtemps est souvent un prompt dont personne ne s'est occupé, pas un prompt défaillant. Le test et la décision de statut suffisent souvent à le promouvoir.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre prompt récurrent',
    instructions: "Appliquez la démarche complète à un prompt que vous utilisez réellement chaque semaine ou chaque mois (compte-rendu, tri, synthèse, analyse), dans le respect des règles d'usage des données de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Choisissez un prompt récurrent et notez-le tel quel dans la section 1 du guide.",
          "Exécutez-le trois fois dans des conversations neuves sur le même input et tabulez structure, détail et conclusion.",
          "Faites valider par la personne qui lira le résultat les seuils et les définitions de votre raisonnement.",
        ],
      },
      {
        title: 'Construire et prouver',
        actions: [
          "Rédigez le chain-of-thought et les quatre blocs ICIO ; décidez si un tree-of-thought, un exemple de sortie ou un chaînage est justifié.",
          "Testez sur au moins trois cas réels différents, avec réponses de référence et grille de cinq critères.",
          "Documentez dans le guide Word, enregistrez la ligne dans la bibliothèque partagée, faites relire, puis faites réaliser un test de reprise par une collègue.",
        ],
      },
    ],
    deliverable: "Le guide Word complété, la ligne de bibliothèque avec version, date, nombre de cas et statut, et le compte rendu du test de reprise — prêts à être réutilisés par votre équipe.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre tableau de comparaison montre trois exécutions du prompt d'origine, avec le nombre de mots de chacune, et conclut que structure, détail et conclusion varient.",
      "Votre diagnostic nomme la cause (Output, raisonnement guidé, ou les deux) et cite un exemple chiffré, comme le dédouanement d'août : effet volume 1 000 USD, effet prix 1 080 USD.",
      "Vos étapes de raisonnement sont au nombre de 4 à 6, à l'impératif, avec les formules d'effet volume et d'effet prix et des seuils confirmés par écrit par le demandeur.",
      "Votre prompt a quatre blocs ICIO : une seule instruction principale, un Input balisé sans donnée réelle, un Output à sections fixes, longueur maximale et interdits.",
      "Vos réponses de référence calculées dans Excel donnent + 2 115 USD (juillet), + 2 830 USD (août) et + 8 360 USD (septembre) ; le carburant d'août à − 10,0 % n'est pas retenu.",
      "Vos trois cas sont réellement différents, chaque cas est exécuté au moins deux fois, et chaque correction du journal est isolée, avec son texte avant et après.",
      "Le poste non budgété de septembre est traité par « % non calculable » et « non décomposable », sans effet prix inventé.",
      "Votre guide Word contient les cinq sections et le bloc de signature, et les blocs de la section 4 sont identiques à ceux de la bibliothèque.",
      "Votre ligne de bibliothèque a ses dix colonnes remplies : catégorie choisie dans la liste, version v1, date au format AAAA-MM-JJ, nombre de cas 3, statut « Valide » justifié par les tests, et l'onglet Synthese affiche 5 prompts dont 4 « Valide ».",
      "Votre version v2 repose sur une seule modification tracée, un test de régression sur les 4 cas, et un test de reprise réussi par une collègue.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Ne jamais documenter ni réutiliser un prompt qui fonctionne : chaque collègue repart de zéro. Cherchez dans la bibliothèque avant d'écrire, et enregistrez chaque prompt validé.",
      "Confondre complexité et qualité : un prompt de 40 lignes aux consignes contradictoires (« sois concis » et « détaille chaque point ») est plus instable qu'un prompt court. Une exigence de longueur, chiffrée.",
      "Valider un prompt sur un seul cas : testez au moins trois cas réels et différents, dont un cas limite, avec deux exécutions chacun.",
      "Oublier de spécifier l'Output : « réponds en exactement 3 sections : Constat, Cause, Action » supprime la première cause d'inconsistance visuelle.",
      "Modifier un prompt en production sans repasser les cas déjà validés : rejouez tous les cas avant de publier, pas seulement celui qui a échoué.",
      "Écrire un chain-of-thought générique (« réfléchis étape par étape ») : écrivez les étapes réelles de votre métier, avec seuils et formules.",
      "Faire choisir à l'IA le seuil de gravité : faites valider les seuils par le demandeur, par écrit, avant d'écrire le prompt.",
      "Corriger plusieurs choses à la fois : une modification, un test, une ligne de journal. Sinon, vous ne saurez jamais ce qui a réparé ou cassé.",
      "Utiliser un cas réel comme exemple de sortie (few-shot) : le modèle en recopie les chiffres. Prenez des valeurs fictives signalées comme telles.",
      "Coller des données réelles dans la bibliothèque partagée : le bloc Input ne contient qu'un emplacement balisé.",
      "Remplacer silencieusement un prompt validé : incrémentez la version, datez, prévenez les utilisateurs et gardez la trace de ce qui a changé.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez mesuré l'instabilité d'un prompt récurrent sur trois exécutions et posé un diagnostic chiffré : Output et raisonnement, les deux en cause.",
      "Vous avez décomposé la tâche en étapes de raisonnement mesurables (seuils de 10 % et de 1 000 USD, formules d'effet volume et d'effet prix), validées par écrit par le demandeur.",
      "Vous avez reconstruit le prompt en quatre blocs ICIO, avec un Output non négociable, un exemple de sortie fictif et des balises autour de l'Input, et décidé quand utiliser tree-of-thought ou chaînage.",
      "Vous avez testé le prompt sur trois cas réels (juillet, août, septembre) avec réponses de référence, grille de cinq critères et deux modifications isolées, jusqu'à six exécutions sur six conformes.",
      "Vous avez documenté la transformation dans le guide Word (cinq sections et signature), relu par une deuxième personne.",
      "Vous avez enregistré le prompt en ligne 9 de la bibliothèque (dix colonnes, v1, statut « Valide ») et contrôlé la synthèse : 5 prompts, dont 4 « Valide ».",
      "Vous avez fait évoluer le prompt en v2 sans le casser : une modification, régression sur 4 cas, publication tracée et test de reprise réussi.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer en une phrase pourquoi le chain-of-thought réduit les erreurs de raisonnement d'une IA.",
      "Je sais identifier une situation où le tree-of-thought apporte une vraie valeur, et la distinguer d'un cas où un simple chain-of-thought suffit.",
      "Je peux structurer n'importe quel prompt professionnel récurrent avec les 4 blocs de la méthode ICIO.",
      "Je sais diagnostiquer si l'inconsistance d'un prompt existant vient d'un défaut d'Output, d'un défaut de raisonnement guidé, ou des deux.",
      "J'ai reconstruit un prompt instable en prompt CoT + ICIO et je l'ai testé sur au moins 2 cas différents (idéalement 3).",
      "J'ai documenté cette reconstruction avec le template guide-construction-prompts-chain-of-thought.docx.",
      "J'ai ajouté au moins un prompt validé à ma bibliothèque bibliotheque-prompts-organisationnelle-icio.xlsx, avec catégorie, version et statut.",
      "Je sais expliquer pourquoi un prompt « Valide » doit repasser ses tests de régression avant toute nouvelle version publiée.",
      "Je sais quand un exemple de sortie (few-shot) ou un chaînage de prompts améliore un prompt, et comment les ajouter sans le casser.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 08 — « Automatisation & Agents IA — Travailler pendant que l'IA travaille ». Vous y transformerez vos prompts désormais stables en instructions figées d'un workflow automatisé : la structure ICIO, les étapes de raisonnement et les tests que vous venez d'apprendre deviennent la base de scénarios Make et d'agents qui travaillent sans vous, tout en gardant votre contrôle.",
  },
]
