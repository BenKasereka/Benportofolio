// Module 04 — Microsoft Copilot — L'IA native dans Office 365 & Teams
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (périmètre, analyse Excel, rapport Word, Word vers PowerPoint,
// résumé de réunion Teams, emails Outlook, planification, grille de prompts)
// est détaillée étape par étape et appliquée au même fil rouge : la semaine
// du 13 avril 2026 d'Horizon Grands Lacs, entre le rapport logistique T1, le
// comité de direction du jeudi 16 avril et la réunion Teams avec un
// partenaire. Organisation et personnes fictives ; chiffres recalculés à
// partir du jeu de données du fil rouge.
export default [
  {
    type: 'cover',
    title: "Microsoft Copilot — L'IA native dans Office 365 & Teams",
    hook: "À la fin de ce module, vous saurez faire en une soirée ce qui prend habituellement deux jours : analyser un tableau Excel avec Copilot et prouver chaque chiffre, rédiger une section de rapport Word à partir de notes en vrac, transformer ce rapport de 12 pages en 8 diapositives pour un comité de direction, tirer d'une réunion Teams d'1 h 30 un compte-rendu dont chaque action a un vrai responsable, puis envoyer l'email de suivi et planifier la réunion suivante — sans jamais quitter Office, et sans jamais diffuser un résultat que vous n'avez pas vérifié.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Identifier, avant chaque demande, sur quel périmètre de données Copilot va travailler (document ouvert ou données de l'organisation via Microsoft Graph), en produisant une fiche de périmètre et un test de sources.",
      "Analyser des données Excel avec Copilot de façon vérifiable, en produisant un tableau croisé dynamique, une formule multi-critères expliquée et une feuille de contrôle qui recalcule chaque total.",
      "Produire une section de rapport Word à partir de notes et de données avec Copilot, en livrant un texte structuré Contexte / Constats / Recommandations dont chaque recommandation est rattachée à un constat chiffré.",
      "Générer une présentation PowerPoint de 8 diapositives à partir d'un rapport Word, en remplissant le guide de génération du module champ par champ, jusqu'à la checklist de relecture signée.",
      "Extraire d'une réunion Teams un compte-rendu en trois blocs (décisions, actions avec responsable et échéance, points non résolus), en produisant un compte-rendu dont chaque attribution est vérifiée dans la transcription.",
      "Rédiger avec Copilot dans Outlook un email de suivi et la synthèse d'un long fil de discussion, puis planifier la réunion suivante avec un ordre du jour, en produisant un email relu et une invitation Teams correctement paramétrée.",
      "Capitaliser vos prompts testés dans la grille du module, en produisant une grille complétée et un onglet de suivi dont les compteurs couvrent bien toutes vos lignes.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une visite guidée des boutons Copilot : vous allez produire de vrais livrables, sur un seul cas suivi du début à la fin. Chaque procédure est découpée en étapes numérotées, avec le menu à ouvrir, le prompt exact à copier, le champ du gabarit à remplir et le contrôle qui prouve que le résultat est juste.",
      "À la fin du module, vous aurez en main huit livrables réutilisables tels quels dans votre propre travail :",
    ],
    bullets: [
      "Une fiche de périmètre Copilot (licence, emplacement des fichiers, droits, sources réellement utilisées).",
      "Un classeur Excel avec tableau structuré, tableau croisé dynamique site × mois, formule SOMME.SI.ENS expliquée et feuille « Contrôle ».",
      "Une section de rapport Word rédigée à partir de notes en vrac, plus une synthèse de 10 lignes du rapport complet.",
      "Le gabarit « Guide — de votre rapport Word à votre présentation PowerPoint avec Copilot » rempli, et la présentation de 8 diapositives qui en découle.",
      "Un compte-rendu de réunion Teams en trois blocs, attributions vérifiées.",
      "Un email de suivi relu et la réponse à la question en suspens d'un fil de 14 messages.",
      "Une invitation Teams avec ordre du jour, options de transcription et fuseaux horaires vérifiés.",
      "La grille « Grille de prompts Copilot » complétée avec vos prompts testés et un onglet « Suivi d'utilisation » juste.",
    ],
    tip: "Ouvrez dès maintenant les deux fichiers du dossier 04-templates : grille-prompts-copilot-office-teams.xlsx et guide-generation-rapports-presentations-copilot.docx. Vous les remplirez au fil des procédures, en même temps que vous les lisez.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs, semaine du 13 avril 2026',
    body: [
      "Horizon Grands Lacs est une organisation fictive qui opère trois sites : Goma, Bukavu et Kinshasa. Amani Kahindo, chargée administrative et logistique à Goma, vient de finaliser le « Rapport trimestriel logistique T1 2026 » : 12 pages, structurées en titres et sous-titres, destinées à la coordination.",
      "Mercredi 15 avril à 16 h 30, la directrice pays, Furaha Bisimwa, lui écrit : « Le comité de direction veut voir ton rapport demain à 9 h. 8 diapositives maximum, format exécutif. » Dans la foulée, Patrick Mumbere, responsable achats, lui rappelle qu'il faut diffuser avant ce soir les actions de la réunion Teams de la veille avec le partenaire local Tujenge Pamoja (organisation fictive) sur le partage d'un entrepôt à Bukavu.",
    ],
    table: {
      columns: ['Quand', 'Ce qui se passe', 'Procédure du module'],
      rows: [
        ['Lun. 13/04', 'Analyse du carburant T1 dans Excel, rédaction de la section 4 du rapport', 'P1, P2, P3'],
        ['Mar. 14/04, 10 h–11 h 30', 'Réunion Teams avec Tujenge Pamoja (transcription activée)', 'P5'],
        ['Mer. 15/04, 16 h 30', 'Demande de la directrice : 8 diapositives pour demain 9 h', 'P4'],
        ['Mer. 15/04, avant 18 h', 'Compte-rendu, email de suivi, réponse au fil de 14 messages', 'P5, P6'],
        ['Mer. 15/04, 18 h', 'Planification de la réunion de suivi du 28/04', 'P7'],
        ['Jeu. 16/04, 9 h', 'Comité de direction ; capitalisation des prompts', 'P8'],
      ],
    },
  },
  {
    type: 'concept',
    title: 'Les données du fil rouge (1/2) — tableau T_Carburant_T1, janvier et février',
    body: "La section 4 du rapport (« Parc véhicules et carburant ») s'appuie sur le registre des pleins de carburant du T1 : 18 lignes, 5 colonnes (Date, Site, Véhicule, Litres, Montant (USD)). Prix au litre appliqués : Goma 1,50 USD, Bukavu 1,60 USD, Kinshasa 1,40 USD. Recopiez ces lignes dans un classeur pour refaire chaque manipulation à l'écran.",
    table: {
      columns: ['Date', 'Site', 'Véhicule', 'Litres', 'Montant (USD)'],
      rows: [
        ['06/01/2026', 'Goma', 'GOM-01', '300', '450'],
        ['09/01/2026', 'Bukavu', 'BKV-01', '250', '400'],
        ['13/01/2026', 'Goma', 'GOM-02', '280', '420'],
        ['16/01/2026', 'Kinshasa', 'KIN-01', '320', '448'],
        ['22/01/2026', 'Goma', 'GOM-01', '290', '435'],
        ['27/01/2026', 'Bukavu', 'BKV-01', '240', '384'],
        ['03/02/2026', 'Goma', 'GOM-02', '300', '450'],
        ['06/02/2026', 'Kinshasa', 'KIN-01', '310', '434'],
        ['11/02/2026', 'Goma', 'GOM-01', '280', '420'],
      ],
    },
  },
  {
    type: 'concept',
    title: 'Les données du fil rouge (2/2) — février et mars',
    body: "Les neuf lignes suivantes complètent le registre. Repérez déjà les deux pleins de mars du véhicule GOM-02 : ils serviront de test à la détection d'anomalies et deviendront l'un des messages clés présentés au comité.",
    table: {
      columns: ['Date', 'Site', 'Véhicule', 'Litres', 'Montant (USD)'],
      rows: [
        ['17/02/2026', 'Bukavu', 'BKV-01', '260', '416'],
        ['23/02/2026', 'Goma', 'GOM-02', '310', '465'],
        ['26/02/2026', 'Kinshasa', 'KIN-01', '300', '420'],
        ['04/03/2026', 'Goma', 'GOM-01', '300', '450'],
        ['10/03/2026', 'Bukavu', 'BKV-01', '250', '400'],
        ['13/03/2026', 'Goma', 'GOM-02', '620', '930'],
        ['18/03/2026', 'Kinshasa', 'KIN-01', '330', '462'],
        ['24/03/2026', 'Goma', 'GOM-02', '480', '720'],
        ['30/03/2026', 'Goma', 'GOM-01', '290', '435'],
      ],
    },
    highlight: "Totaux de contrôle à retrouver tout au long du module : 18 lignes, 5 710 litres, 8 539 USD. Si un tableau, une formule ou une diapositive générée par Copilot donne un autre total, c'est le résultat de Copilot qu'il faut corriger, pas vos données.",
  },
  {
    type: 'concept',
    title: "La carte du module : 8 procédures, dans l'ordre où vous les exécuterez",
    body: "Chaque procédure produit un livrable qui alimente la suivante : les chiffres contrôlés dans Excel nourrissent le rapport Word, le rapport nourrit la présentation, le compte-rendu Teams nourrit l'email et la réunion suivante. Une erreur laissée passer au début se retrouve devant le comité de direction.",
    bullets: [
      "Procédure 1 — Vérifier l'environnement et le périmètre de Copilot (4 étapes).",
      "Procédure 2 — Analyser des données Excel avec Copilot de façon vérifiable (6 étapes) : tableau, TCD, formule, anomalies, contrôle.",
      "Procédure 3 — Produire un rapport Word à partir de notes et de données (5 étapes).",
      "Procédure 4 — Générer une présentation PowerPoint à partir du rapport Word, avec le guide du module (6 étapes).",
      "Procédure 5 — Extraire un compte-rendu de réunion actionnable dans Teams (5 étapes).",
      "Procédure 6 — Traiter un fil de discussion et rédiger l'email de suivi dans Outlook (4 étapes).",
      "Procédure 7 — Planifier la réunion suivante dans Teams et Outlook (3 étapes).",
      "Procédure 8 — Capitaliser vos prompts dans la grille du module (3 étapes).",
    ],
  },

  // ───────────── Théorie essentielle ─────────────
  {
    type: 'concept',
    title: 'Copilot travaille dans vos fichiers, pas à côté',
    body: [
      "ChatGPT et Claude, vus aux modules 02 et 03, sont des IA autonomes : vous ouvrez un chat isolé, vous collez ou déposez ce dont l'IA a besoin, et rien de ce qui s'y passe n'affecte vos fichiers tant que vous ne recopiez pas vous-même le résultat.",
      "Copilot fonctionne à l'inverse : il est intégré dans le document, la feuille, l'email ou la réunion en cours. Dans Word, il voit le document ouvert ; dans Excel, la feuille active et ses données ; dans Teams, l'historique du chat ou la transcription de la réunion. Vous ne recopiez rien : Copilot agit dans le fichier lui-même.",
    ],
    example: {
      title: 'La même demande, deux façons de travailler',
      lines: [
        "Avec ChatGPT : exporter le registre carburant en CSV, le déposer dans le chat, demander le total par site, recopier le tableau dans Excel, le remettre en forme.",
        "Avec Copilot dans Excel : cliquer dans T_Carburant_T1, Accueil > Copilot, demander le TCD par site et par mois, cliquer sur « Ajouter à une nouvelle feuille ». Le TCD est un vrai TCD Excel, actualisable.",
      ],
    },
    tip: "Le gain réel de Copilot n'est pas d'être « plus intelligent », c'est de supprimer les copier-coller entre outils. Chaque fois que vous vous surprenez à recopier un résultat d'IA dans Office, demandez-vous si Copilot pouvait le produire directement sur place.",
  },
  {
    type: 'comparison-table',
    title: 'Copilot dans l\'application, Copilot Chat, ChatGPT / Claude : qui voit quoi',
    columns: ['Outil', 'Ce qu\'il voit', 'Où le résultat atterrit', 'Usage type dans le fil rouge'],
    rows: [
      ['Copilot dans l\'application (Word, Excel, PowerPoint, Outlook, Teams)', 'Le fichier, l\'email ou la réunion ouverts, et selon la licence les fichiers que vous lui désignez', 'Directement dans le document (texte, TCD, diapositives, brouillon)', 'TCD carburant, section 4 du rapport, présentation, compte-rendu'],
      ['Copilot Chat, onglet « Travail »', 'Vos emails, fichiers OneDrive / SharePoint, chats et réunions Teams, selon vos droits (Microsoft Graph)', 'Dans le chat, avec des références cliquables vers les sources', 'Retrouver tous les échanges avec Tujenge Pamoja depuis mars'],
      ['Copilot Chat, onglet « Web »', 'Le web et ce que vous collez ou déposez', 'Dans le chat', 'Question générale, sans donnée interne'],
      ['ChatGPT / Claude', 'Uniquement ce que vous leur donnez', 'Dans le chat, à recopier', 'Relecture critique longue d\'un document complexe (module 03)'],
    ],
  },
  {
    type: 'concept',
    title: 'Microsoft Graph : Copilot peut voir plus — ou moins — que vous ne le croyez',
    body: [
      "Avec la licence Microsoft 365 Copilot, Copilot interroge Microsoft Graph, l'interface qui relie vos emails Outlook, vos fichiers OneDrive et SharePoint, votre calendrier et vos conversations Teams. Il n'accède jamais à plus que ce que votre compte peut déjà ouvrir : c'est ce qui permet de demander « résume les échanges de la semaine avec ce partenaire » sans rassembler les emails à la main.",
      "Conséquence directe : la fiabilité d'une réponse dépend de la gouvernance des permissions de votre organisation. Un dossier SharePoint ouvert par erreur à « tout le monde dans l'organisation » peut remonter dans une synthèse ; à l'inverse, un dossier auquel vous n'avez pas accès est ignoré en silence, et la synthèse a l'air complète.",
    ],
    example: {
      title: 'Fil rouge — deux pièges évités de justesse',
      lines: [
        "Trop large : la synthèse « échanges avec Tujenge Pamoja » cite un ancien budget de gardiennage de 2024, stocké dans un dossier partagé à toute l'organisation. Information obsolète, à écarter.",
        "Trop étroit : les bons de carburant de Bukavu sont dans le SharePoint du site de Bukavu, auquel Amani n'a pas accès. Copilot répond « aucun bon trouvé » pour BKV-01, sans signaler l'absence de droits.",
      ],
    },
    highlight: "Le premier réflexe professionnel avec Copilot : avant de vous fier à un résultat, demandez-vous sur quel périmètre il a réellement travaillé — le document ouvert seulement, ou une recherche élargie dans l'organisation.",
  },
  {
    type: 'stat-callout',
    stat: '1 action sur 5',
    caption: "C'est la proportion d'actions mal attribuées dans le premier résumé Copilot de la réunion du 14 avril avec Tujenge Pamoja.",
    context: "À l'oral, quelqu'un a dit « le plan de rangement, on verra qui s'en charge » ; Copilot l'a attribué à la dernière personne qui avait parlé. Diffusé tel quel, le compte-rendu aurait confié une tâche à un logisticien partenaire qui ne l'avait jamais acceptée. Copilot fait gagner une heure de rédaction ; la vérification des noms prend cinq minutes et reste obligatoire.",
  },
  {
    type: 'comparison-table',
    title: 'Où Copilot apporte un vrai gain — et où il ne remplace rien',
    columns: ['Type de tâche', 'Copilot est-il le bon outil ?', 'Exemple dans le fil rouge'],
    rows: [
      ['Transformer un contenu existant d\'un format à un autre', 'Oui — son point fort', 'Rapport Word de 12 pages → 8 diapositives ; transcription → compte-rendu'],
      ['Accélérer une manipulation technique mal maîtrisée', 'Oui, avec explication et contrôle', 'TCD site × mois, formule SOMME.SI.ENS'],
      ['Premier jet dont le contexte est déjà dans vos outils', 'Oui, après relecture', 'Email de suivi, réponse au fil de 14 messages'],
      ['Raisonnement long, analyse critique d\'un document complexe', 'Non — terrain de Claude (module 03)', 'Relecture critique du protocole d\'accord avec Tujenge Pamoja'],
      ['Recherche d\'information externe actualisée et sourcée', 'Non — terrain de Perplexity (module 05)', 'Prix du carburant à Goma au marché ce mois-ci'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Ce que fait Copilot dans chaque application, et sa condition de fonctionnement',
    columns: ['Application', 'Point d\'entrée', 'Ce qu\'il fait pour vous', 'Condition à vérifier'],
    rows: [
      ['Word', 'Bouton Copilot de l\'onglet Accueil ; zone « Rédiger avec Copilot » sur une page vide', 'Premier jet, résumé, reformulation, rédaction à partir de fichiers référencés par « / »', 'Document enregistré sur OneDrive ou SharePoint'],
      ['Excel', 'Accueil > Copilot', 'TCD, colonnes calculées, formules expliquées, mise en évidence de tendances', 'Données en tableau structuré (Ctrl+T), enregistrement automatique activé'],
      ['PowerPoint', 'Volet Copilot > « Créer une présentation à partir d\'un fichier »', 'Diaporama construit sur la hiérarchie de titres du Word, avec notes de l\'orateur', 'Word source structuré en Titre 1 / Titre 2, stocké dans le cloud'],
      ['Outlook', 'Bandeau « Résumé » d\'un fil ; icône Copilot dans un nouveau message', 'Synthèse d\'un fil, brouillon d\'email, conseils de ton', 'Fil complet dans votre boîte ; relecture avant envoi'],
      ['Teams', 'Bouton Copilot en réunion ; onglet « Récapitulatif » après', 'Résumé, décisions, actions, points ouverts', 'Transcription démarrée pendant la réunion'],
    ],
  },
  {
    type: 'concept',
    title: 'Le prompt vérifiable : cinq éléments qui rendent le résultat contrôlable',
    body: "Un prompt vague (« analyse mes données », « améliore ce texte ») laisse Copilot deviner et vous oblige à tout revérifier à l'aveugle. Un prompt vérifiable nomme ce qui permet de contrôler le résultat en quelques secondes.",
    bullets: [
      "Source : le fichier, le tableau nommé, la plage, la réunion ou le fil exact (T_Carburant_T1, et non « mes données »).",
      "Calcul ou tâche : le verbe précis (somme, regroupement, résumé en trois blocs, reformulation).",
      "Format de sortie : tableau, nombre de lignes, nombre de diapositives, structure imposée.",
      "Public et ton : comité de direction, partenaire externe, équipe terrain.",
      "Demande de justification : « explique la logique de la formule », « cite le passage de la transcription », « liste les fichiers utilisés ».",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Vague : « Analyse les dépenses de carburant. »",
        "Vérifiable : « À partir du tableau T_Carburant_T1, crée un tableau croisé dynamique de la somme de Montant (USD) par Site en lignes et par mois en colonnes, avec les totaux généraux. »",
        "Contrôle immédiat : le total général doit être 8 539 USD.",
      ],
    },
    tip: "Si vous ne savez pas comment vous vérifierez le résultat, n'envoyez pas encore le prompt : ajoutez d'abord l'élément qui manque (la source, le format ou la justification).",
  },
  {
    type: 'concept',
    title: 'Règles d\'usage avant de lancer Copilot sur des données professionnelles',
    body: "Copilot respecte les droits d'accès et les étiquettes de confidentialité de votre organisation, et la version entreprise est couverte par la protection des données d'entreprise de Microsoft : vos contenus ne servent pas à entraîner les modèles de base. Cela ne vous dispense pas de règles de terrain.",
    bullets: [
      "Utilisez uniquement votre compte professionnel Microsoft 365 (icône de bouclier « protégé » visible dans Copilot Chat), jamais un compte personnel.",
      "Avant de partager un livrable généré, vérifiez qu'il n'a pas repris un passage d'un document confidentiel que le destinataire ne devrait pas voir.",
      "Annoncez la transcription aux participants externes dans l'invitation et en début de réunion, et respectez la politique de votre organisation sur l'enregistrement.",
      "Ne transcrivez pas les réunions RH, disciplinaires ou portant sur des bénéficiaires identifiables sans règle écrite qui l'autorise.",
      "Signalez au service informatique tout document sensible qu'une synthèse Copilot fait remonter alors qu'il ne devrait pas vous être accessible.",
    ],
    pitfall: "Penser que « Copilot l'a trouvé, donc j'ai le droit de l'utiliser » : Copilot reflète des permissions parfois mal configurées. L'accès technique ne vaut pas autorisation de diffusion.",
  },
  {
    type: 'comparison-table',
    title: 'Les deux gabarits du module — ce que vous allez remplir',
    columns: ['Gabarit', 'Structure exacte', 'Rempli dans'],
    rows: [
      ['grille-prompts-copilot-office-teams.xlsx — onglet « Grille de prompts »', 'En-têtes ligne 4 : Application, Tâche courante, Prompt à utiliser, Résultat attendu, Point de vérification, Statut (Testé / À tester). 12 prompts d\'exemple lignes 5 à 16 (Word 3, Excel 3, PowerPoint 2, Outlook 2, Teams 2)', 'Procédures 2, 3, 5, 6, 7 et 8'],
      ['Même classeur — onglet « Suivi d\'utilisation »', 'Application, Nombre de prompts recensés, Dont statut « Testé » ; formules NB.SI / NB.SI.ENS sur les lignes 5 à 16 ; ligne 10 = Total', 'Procédure 8'],
      ['guide-generation-rapports-presentations-copilot.docx', '1. Identification du document source (3 champs) ; 2. Messages clés (tableau de 4 lignes : Message clé / Page ou section source) ; 3. Formulation de la demande (Public, Nombre de slides, Prompt exact) ; 4. Checklist de relecture (5 cases) ; tableau final Rédigé par / Date', 'Procédure 4'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Microsoft Graph', definition: "L'interface qui relie Copilot à vos données Microsoft 365 (emails, fichiers, calendrier, conversations Teams) selon vos permissions existantes : Copilot n'accède jamais à plus que ce que votre compte peut déjà voir." },
      { term: "Copilot dans l'application / Copilot Chat", definition: "Le premier travaille dans le document ouvert (volet latéral de Word, Excel, PowerPoint) ; le second est un chat autonome, avec accès optionnel aux données de l'organisation (onglet « Travail »)." },
      { term: 'Prompt vérifiable', definition: "Demande qui précise la source, la tâche, le format et une justification, de sorte que vous puissiez contrôler le résultat rapidement au lieu de tout revérifier à l'aveugle." },
      { term: 'Périmètre de données', definition: "L'ensemble des contenus réellement lus par Copilot pour une réponse : le document ouvert, les fichiers référencés, ou une recherche élargie dans l'organisation." },
      { term: 'Tableau structuré (Ctrl+T)', definition: "Plage mise sous forme de tableau nommé (T_Carburant_T1) : Copilot en reconnaît les colonnes et les types, les formules s'étendent seules." },
      { term: 'Tableau croisé dynamique (TCD)', definition: "Outil Excel qui agrège un tableau par lignes et colonnes (site × mois). Mal paramétré, il agrège au mauvais niveau de détail sans afficher d'erreur." },
      { term: 'SOMME.SI.ENS', definition: "Fonction Excel (SUMIFS en anglais) qui additionne les valeurs répondant à plusieurs critères à la fois, par exemple un véhicule ET un mois." },
      { term: 'Styles de titre (Titre 1, Titre 2)', definition: "Niveaux de hiérarchie d'un document Word, visibles dans le volet de navigation : c'est sur eux que Copilot découpe une présentation." },
      { term: 'Transcription / Récapitulatif', definition: "Texte horodaté de ce qui a été dit en réunion Teams, et page qui regroupe après la réunion l'enregistrement, la transcription et les notes générées par Copilot." },
      { term: 'Étiquette de confidentialité', definition: "Marquage d'un document (Général, Confidentiel…) que Copilot respecte et reporte sur les contenus qu'il génère à partir de ce document." },
    ],
  },

  // ───────────── Procédure 1 — Environnement et périmètre ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Vérifier que Copilot est disponible dans chaque application',
    intro: "Avant de promettre à votre direction une présentation « faite avec Copilot », vérifiez ce dont vous disposez réellement : selon la licence de votre organisation, Copilot Chat peut être disponible sans l'accès à vos données internes ni le résumé des réunions Teams.",
    steps: [
      {
        title: 'Faire le tour des applications',
        actions: [
          "Ouvrez Word, Excel, PowerPoint et Outlook avec votre compte professionnel : repérez le bouton Copilot dans l'onglet Accueil ou la barre d'outils.",
          "Dans Teams, ouvrez une réunion passée transcrite : vérifiez la présence d'un onglet « Récapitulatif » et d'un bouton Copilot.",
          "Ouvrez Copilot Chat : vérifiez si un sélecteur « Travail / Web » est proposé. Sans onglet « Travail », Copilot n'interroge pas vos données internes.",
        ],
      },
      {
        title: 'Consigner le résultat',
        actions: [
          "Créez une note « Fiche de périmètre Copilot » dans votre OneDrive.",
          "Pour chaque application, notez : disponible / non disponible / partiel, et ce qui manque.",
          "En cas de doute, demandez au service informatique le type de licence attribué à votre compte.",
        ],
      },
    ],
    example: {
      title: 'Fiche de périmètre — Amani Kahindo, 13/04/2026',
      lines: [
        "Word, Excel, PowerPoint, Outlook : Copilot disponible (licence Microsoft 365 Copilot attribuée en mars 2026).",
        "Teams : Copilot et récapitulatif disponibles si la transcription a été démarrée.",
        "Copilot Chat : onglets « Travail » et « Web » présents.",
        "Outlook : bouton « Planifier avec Copilot » absent de sa version — planification à faire depuis le calendrier Teams.",
      ],
    },
    result: "Vous savez, application par application, ce que Copilot peut faire pour vous cette semaine, et ce qu'il faudra faire autrement.",
    tip: "Les noms de menus évoluent d'une mise à jour à l'autre. Si un libellé de ce module ne correspond pas exactement à votre écran, cherchez la même fonction dans le volet Copilot : la logique de la procédure reste identique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Placer les fichiers sources là où Copilot peut les lire',
    intro: "Copilot travaille sur des fichiers enregistrés dans le cloud Microsoft 365. Un rapport resté sur le bureau de l'ordinateur ou sur une clé USB n'apparaîtra jamais dans « Créer une présentation à partir d'un fichier ».",
    steps: [
      {
        title: 'Ranger les sources de la semaine',
        actions: [
          "Dans OneDrive ou le SharePoint de l'équipe, créez un dossier « Comite_Direction_2026-04-16 ».",
          "Déplacez-y : le rapport Word T1, le classeur Excel du carburant, les notes de la revue du parc du 08/04.",
          "Ouvrez chaque fichier depuis ce dossier et vérifiez que l'interrupteur « Enregistrement automatique » est activé (en haut à gauche).",
        ],
      },
      {
        title: 'Nommer pour retrouver',
        actions: [
          "Adoptez des noms explicites, datés et versionnés : 2026-04-13_Rapport_logistique_T1_v1.0.docx.",
          "Évitez les doublons « copie de… » : Copilot pourrait lire une ancienne version.",
        ],
      },
    ],
    example: {
      title: 'Dossier « Comite_Direction_2026-04-16 » — fil rouge',
      lines: [
        "2026-04-13_Rapport_logistique_T1_v1.0.docx (12 pages)",
        "2026-04-13_Carburant_T1.xlsx (tableau T_Carburant_T1, 18 lignes)",
        "2026-04-08_Notes_revue_parc.docx (notes en vrac de la revue du parc véhicules)",
      ],
    },
    result: "Les trois fichiers sources sont au même endroit, dans le cloud, avec l'enregistrement automatique actif et un nom qui indique la version.",
    pitfall: "Garder une version « finale » en local et une autre sur OneDrive : Copilot génère la présentation à partir de la version cloud, peut-être pas celle que vous avez corrigée hier soir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Décider du périmètre de chaque demande',
    intro: "Pour chaque tâche de la semaine, décidez à l'avance si Copilot doit travailler sur le document ouvert seulement ou chercher plus largement. Ce choix détermine l'outil à utiliser et les vérifications à prévoir.",
    steps: [
      {
        title: 'Classer les tâches',
        actions: [
          "Listez les tâches de la semaine.",
          "Pour chacune, notez le périmètre voulu : « document ouvert », « fichiers désignés » ou « organisation ».",
          "Associez l'outil : Copilot dans l'application pour les deux premiers ; Copilot Chat onglet « Travail » pour le troisième.",
          "Pour le périmètre « organisation », notez qui détient les sources que vous pourriez ne pas voir.",
        ],
      },
    ],
    table: {
      columns: ['Tâche', 'Périmètre voulu', 'Outil', 'Risque de périmètre'],
      rows: [
        ['TCD carburant', 'Document ouvert', 'Copilot dans Excel', 'Faible : un seul tableau'],
        ['Section 4 du rapport', 'Fichiers désignés (notes + classeur)', 'Copilot dans Word, fichiers référencés par « / »', 'Ancienne version des notes'],
        ['Présentation', 'Fichier désigné (rapport v1.0)', 'Copilot dans PowerPoint', 'Version du rapport'],
        ['Historique avec Tujenge Pamoja', 'Organisation', 'Copilot Chat, onglet « Travail »', 'Dossiers partagés obsolètes ; emails de Patrick non visibles'],
      ],
    },
    result: "Un tableau tâche / périmètre / outil / risque, ajouté à la fiche de périmètre : vous savez d'avance où porter votre vigilance.",
    tip: "Quand une demande ne doit porter que sur un fichier, désignez-le explicitement (« à partir de ce document », ou « / » + nom du fichier) : vous réduisez le risque que Copilot mélange des sources.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Faire le test de sources avant de se fier à une synthèse élargie',
    intro: "Quand Copilot cherche dans l'organisation, il affiche des références numérotées vers ses sources. Ce test de deux minutes vous dit ce qu'il a lu — et surtout ce qu'il n'a pas lu.",
    steps: [
      {
        title: 'Interroger puis exiger les sources',
        actions: [
          "Dans Copilot Chat, onglet « Travail », posez votre question.",
          "Ajoutez : « Liste les emails, fichiers et réunions que tu as utilisés, avec leur date et leur auteur. »",
          "Ouvrez au moins deux références et vérifiez qu'elles disent bien ce que la synthèse leur attribue.",
        ],
      },
      {
        title: 'Chercher les trous',
        actions: [
          "Comparez la liste des sources avec ce que vous savez exister (un email important, un compte-rendu, une personne clé).",
          "Écartez toute source obsolète (date, version) et relancez en précisant la période.",
          "Notez dans la fiche de périmètre les sources manquantes et demandez-les à leur détenteur.",
        ],
      },
    ],
    example: {
      title: 'Test de sources — fil rouge, 15/04/2026',
      lines: [
        "Prompt : « Résume les échanges avec Tujenge Pamoja sur l'entrepôt de Bukavu depuis le 1er mars 2026. Liste les emails, fichiers et réunions utilisés, avec date et auteur. »",
        "Sources citées : 9 emails, la réunion Teams du 14/04, un fichier « Budget_gardiennage_2024.xlsx ».",
        "Écart repéré : le fichier de 2024 est hors période → écarté. Les 5 emails échangés par Patrick Mumbere directement avec le partenaire sont absents → transférés à Amani.",
      ],
    },
    result: "Une synthèse dont vous connaissez les sources, sans document obsolète, et une liste des manques comblés avant usage.",
    pitfall: "Prendre une synthèse bien rédigée pour une synthèse complète. Copilot ne prévient pas qu'il lui manque une boîte mail ou un dossier : seule la liste des sources le révèle.",
  },

  // ───────────── Procédure 2 — Excel ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Structurer les données en tableau nommé',
    intro: "Copilot dans Excel ne travaille correctement que sur un tableau structuré : sans lui, il ne sait pas identifier les colonnes ni leurs types, et propose des analyses approximatives. C'est la première chose à faire, avant même d'ouvrir le volet Copilot.",
    steps: [
      {
        title: 'Préparer la plage',
        actions: [
          "Vérifiez que la plage a une seule ligne d'en-têtes, sans cellule fusionnée, sans ligne vide ni ligne de total au milieu.",
          "Vérifiez que la colonne Date contient de vraies dates (alignées à droite) et que Litres et Montant sont des nombres.",
        ],
      },
      {
        title: 'Créer et nommer le tableau',
        actions: [
          "Cliquez dans une cellule des données, puis Ctrl+T (ou Insérer > Tableau).",
          "Cochez « Mon tableau comporte des en-têtes », puis OK.",
          "Onglet Création de tableau > Nom du tableau : saisissez T_Carburant_T1, puis Entrée.",
          "Enregistrez : le fichier est sur OneDrive, l'enregistrement automatique est actif.",
        ],
      },
    ],
    example: {
      title: 'Contrôles de départ — fil rouge',
      lines: [
        "=LIGNES(T_Carburant_T1) → 18",
        "=SOMME(T_Carburant_T1[Litres]) → 5 710",
        "=SOMME(T_Carburant_T1[Montant (USD)]) → 8 539",
        "=NB(T_Carburant_T1[Date]) → 18 (toutes les dates sont de vraies dates)",
      ],
    },
    result: "Un tableau T_Carburant_T1 de 18 lignes et 5 colonnes, et quatre totaux de contrôle notés sur une feuille « Contrôle » : ce sont vos références pour juger tout ce que Copilot va produire.",
    pitfall: "Appeler Copilot sur une feuille « en vrac » avec un titre fusionné en ligne 1 : il lit le titre comme une donnée ou refuse l'analyse. Deux minutes de structuration évitent trois prompts ratés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Demander le tableau croisé dynamique avec un prompt vérifiable',
    intro: "Vous adaptez le prompt Excel de la grille (ligne 8 : « Crée un tableau croisé dynamique du montant total par région et par mois, à partir du tableau Ventes2026 ») à vos données réelles : bon tableau, bonne colonne, bon regroupement.",
    steps: [
      {
        title: 'Lancer la demande',
        actions: [
          "Cliquez dans T_Carburant_T1, puis Accueil > Copilot.",
          "Collez le prompt adapté (voir exemple) et envoyez.",
          "Lisez l'aperçu proposé : champs en lignes, en colonnes, en valeurs.",
          "Si l'aperçu correspond, cliquez sur « Ajouter à une nouvelle feuille ». Renommez la feuille « TCD_Site_Mois ».",
        ],
      },
      {
        title: 'Si Copilot propose autre chose',
        actions: [
          "Il agrège par jour au lieu du mois : répondez « Regroupe les dates par mois ».",
          "Il affiche « Nombre de Montant » : répondez « Utilise la somme de Montant (USD), pas le nombre ».",
        ],
      },
    ],
    example: {
      title: 'Prompt adapté (à copier)',
      lines: [
        "« À partir du tableau T_Carburant_T1, crée un tableau croisé dynamique de la somme de Montant (USD) avec Site en lignes et les mois de la colonne Date en colonnes, avec les totaux par ligne et par colonne. »",
      ],
    },
    table: {
      columns: ['Site', 'Janv.', 'Févr.', 'Mars', 'Total'],
      rows: [
        ['Bukavu', '784', '416', '400', '1 600'],
        ['Goma', '1 305', '1 335', '2 535', '5 175'],
        ['Kinshasa', '448', '854', '462', '1 764'],
        ['Total général', '2 537', '2 605', '3 397', '8 539'],
      ],
    },
    result: "Un vrai TCD Excel sur la feuille TCD_Site_Mois, dont le total général (8 539 USD) est identique au total de contrôle de l'étape 1.",
    tip: "Le total général du TCD est votre premier contrôle, il prend trois secondes : s'il diffère du total du tableau source, une ligne a été filtrée ou mal lue.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Ajouter une colonne Mois avec Copilot et en comprendre la formule',
    intro: "Pour calculer par véhicule et par mois, il vous faut une colonne Mois dans le tableau source. C'est une demande idéale pour Copilot, à condition d'exiger l'explication de la formule avant de l'insérer.",
    steps: [
      {
        title: 'Demander la colonne',
        actions: [
          "Dans le volet Copilot, saisissez : « Ajoute à T_Carburant_T1 une colonne Mois qui contient le numéro du mois de la colonne Date, et explique la formule. »",
          "Lisez l'explication avant de cliquer sur « Insérer la colonne ».",
          "Vérifiez trois lignes à l'œil : 06/01 → 1, 17/02 → 2, 30/03 → 3.",
        ],
      },
    ],
    example: {
      title: 'Résultat attendu',
      lines: [
        "Formule insérée dans la nouvelle colonne : =MOIS([@Date])",
        "Explication de Copilot : « MOIS renvoie le numéro du mois (1 à 12) de la date de la même ligne ; [@Date] désigne la cellule Date de cette ligne. »",
        "Contrôle : =NB.SI(T_Carburant_T1[Mois];3) → 6 lignes en mars ✔",
      ],
    },
    result: "T_Carburant_T1 compte 6 colonnes ; la colonne Mois contient 6 fois 1, 6 fois 2 et 6 fois 3.",
    pitfall: "Accepter une colonne =TEXTE([@Date];\"mmmm\") qui renvoie « janvier » en toutes lettres : elle fonctionne pour l'affichage mais trie les mois par ordre alphabétique (avril avant janvier) et complique les critères de formule. Préférez le numéro du mois.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Obtenir une formule multi-critères expliquée',
    intro: "La question de la directrice est précise : « Combien a coûté le véhicule GOM-02 en mars ? » Vous adaptez la ligne 9 de la grille (« Écris une formule qui recherche le montant correspondant au client X et au mois Y… et explique-moi la logique de la formule »).",
    steps: [
      {
        title: 'Préparer les cellules de critères',
        actions: [
          "Sur la feuille « Contrôle », saisissez en G1 « Véhicule » et en H1 : GOM-02.",
          "Saisissez en G2 « Mois » et en H2 : 3.",
        ],
      },
      {
        title: 'Demander et insérer la formule',
        actions: [
          "Prompt : « Écris une formule pour la cellule H3 qui additionne Montant (USD) de T_Carburant_T1 pour le véhicule saisi en H1 et le mois saisi en H2, et explique-moi la logique de la formule argument par argument. »",
          "Lisez l'explication : chaque argument doit correspondre à une colonne réelle.",
          "Copiez la formule dans H3.",
        ],
      },
    ],
    example: {
      title: 'Formule obtenue et explication',
      lines: [
        "H3 : =SOMME.SI.ENS(T_Carburant_T1[Montant (USD)];T_Carburant_T1[Véhicule];H1;T_Carburant_T1[Mois];H2)",
        "1er argument : la colonne à additionner. Puis des paires « colonne de critère ; valeur cherchée » : Véhicule = H1, Mois = H2.",
        "Résultat : 1 650 USD (930 le 13/03 + 720 le 24/03).",
        "Version anglaise d'Excel : SUMIFS, avec la virgule comme séparateur.",
      ],
    },
    result: "Une formule réutilisable : changez H1 ou H2, H3 se recalcule. Coût de GOM-02 en mars : 1 650 USD.",
    pitfall: "Copilot propose parfois RECHERCHEX ou INDEX + EQUIV pour « rechercher le montant » : ces fonctions renvoient la première ligne trouvée (930) et non la somme (1 650). Dès que plusieurs lignes peuvent répondre aux critères, il faut SOMME.SI.ENS.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Détecter les valeurs anormales, puis les vérifier sur pièces',
    intro: "La ligne 10 de la grille propose : « Identifie les valeurs de la colonne Montant qui sortent nettement de la tendance générale et explique pourquoi. » Point de vérification associé : vérifier manuellement au moins une anomalie avant de la considérer comme une erreur.",
    steps: [
      {
        title: 'Lancer la détection',
        actions: [
          "Prompt : « Dans T_Carburant_T1, identifie les pleins dont la colonne Litres sort nettement de la tendance de leur véhicule, et explique pourquoi pour chacun. »",
          "Contrôlez avec une formule simple : =MEDIANE(T_Carburant_T1[Litres]) → 300 L.",
        ],
      },
      {
        title: 'Vérifier chaque valeur signalée',
        actions: [
          "Pour chaque ligne signalée, retrouvez le bon de carburant et l'ordre de mission.",
          "Classez : justifiée (avec la pièce), à justifier (pièce manquante), erreur de saisie.",
          "Ajoutez la conclusion dans une colonne « Commentaire » de la feuille « Contrôle », jamais dans les données source.",
        ],
      },
    ],
    table: {
      columns: ['Ligne signalée', 'Pourquoi', 'Vérification', 'Conclusion'],
      rows: [
        ['13/03 — GOM-02 — 620 L — 930 USD', 'Plus du double de la médiane (300 L)', 'Bon BC-0313 : 180 L réservoir + 440 L en jerrycans pour le convoi d\'urgence vers Rutshuru', 'Justifiée'],
        ['24/03 — GOM-02 — 480 L — 720 USD', '1,6 fois la médiane', 'Aucun ordre de mission joint', 'À justifier par le logisticien'],
      ],
    },
    result: "Deux anomalies documentées : l'une justifiée par pièce, l'autre en attente de justificatif. Hors jerrycans du convoi (660 USD), mars passe de + 30,4 % à + 5,1 % par rapport à février.",
    pitfall: "Supprimer ou corriger une « anomalie » signalée par Copilot sans pièce : un plein exceptionnel peut être parfaitement légitime, et c'est justement l'information que le comité doit connaître.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Contrôler les résultats sur un échantillon connu et consigner le prompt',
    intro: "Un TCD mal paramétré peut agréger au mauvais niveau de détail sans afficher d'erreur : votre propre vérification croisée est le seul filet de sécurité. Vous recalculez deux valeurs de façon indépendante, puis vous gardez la trace du prompt qui a fonctionné.",
    steps: [
      {
        title: 'Recalculer deux valeurs connues',
        actions: [
          "À la main : Bukavu en janvier = 400 + 384 = 784 USD. Comparez à la cellule du TCD.",
          "Par formule : =SOMME.SI.ENS(T_Carburant_T1[Montant (USD)];T_Carburant_T1[Site];\"Goma\";T_Carburant_T1[Mois];3) → 2 535. Comparez au TCD.",
          "Testez la formule de l'étape 4 sur un cas connu : H1 = GOM-02, H2 = 1 → 420 (une seule ligne, le 13/01).",
        ],
      },
      {
        title: 'Consigner',
        actions: [
          "Notez « Contrôlé le 13/04/2026 — A. Kahindo » en haut de la feuille TCD_Site_Mois.",
          "Ouvrez la grille de prompts : passez le Statut de la ligne 10 (anomalies) de « À tester » à « Testé ».",
          "Notez votre prompt TCD adapté : il sera ajouté à la grille à la procédure 8.",
        ],
      },
    ],
    example: {
      title: 'Feuille « Contrôle » — fil rouge',
      lines: [
        "Total source 8 539 = Total TCD 8 539 ✔",
        "Bukavu janvier : main 784 = TCD 784 ✔",
        "Goma mars : SOMME.SI.ENS 2 535 = TCD 2 535 ✔",
        "Formule H3 sur cas connu (GOM-02, janvier) : 420 = ligne du 13/01 ✔",
      ],
    },
    result: "Quatre contrôles verts, datés et signés : les chiffres carburant peuvent entrer dans le rapport et devant le comité.",
    tip: "Choisissez toujours un contrôle « à la main » sur une case qui ne contient que deux ou trois lignes : si le TCD se trompe de niveau d'agrégation, c'est là que l'écart saute aux yeux.",
  },

  // ───────────── Procédure 3 — Word ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Préparer les sources et le squelette du rapport',
    intro: "Copilot rédige à partir de ce que vous lui désignez. Avant de lui demander une section, préparez des sources propres et un squelette de titres : c'est cette structure qui garantira plus tard une bonne présentation PowerPoint.",
    steps: [
      {
        title: 'Construire le squelette',
        actions: [
          "Ouvrez le rapport T1. Accueil > Styles : appliquez « Titre 1 » aux 7 grandes sections et « Titre 2 » aux sous-sections.",
          "Affichage > cochez « Volet de navigation » : la hiérarchie doit se lire d'un coup d'œil, sans titre en simple gras.",
          "Sous le titre de la section 4, laissez le curseur sur une ligne vide : c'est là que Copilot rédigera.",
        ],
      },
      {
        title: 'Préparer les sources de la section',
        actions: [
          "Relisez les notes de la revue du parc du 08/04 : supprimez les passages hors sujet et les noms de personnes inutiles.",
          "Dans le classeur, vérifiez que la feuille « Contrôle » est à jour (procédure 2).",
        ],
      },
    ],
    example: {
      title: 'Volet de navigation — Rapport logistique T1 2026',
      lines: [
        "1. Synthèse — 2. Contexte et activités du trimestre — 3. Approvisionnements et achats",
        "4. Parc véhicules et carburant (4.1 Consommation et coûts ; 4.2 Anomalies ; 4.3 Recommandations)",
        "5. Entreposage et stocks — 6. Difficultés rencontrées — 7. Recommandations et priorités T2 — Annexes",
      ],
    },
    result: "Un rapport dont la hiérarchie Titre 1 / Titre 2 est complète, et deux sources propres prêtes à être référencées.",
    pitfall: "Des titres en « gras, taille 14 » au lieu de styles Titre : à l'œil, la structure existe ; pour Copilot, le document est un seul bloc de texte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Générer le premier jet de la section avec « Rédiger avec Copilot »',
    intro: "Vous adaptez la ligne 6 de la grille (« À partir de ces notes de réunion, rédige un rapport structuré avec Contexte, Constats, Recommandations ») en désignant les fichiers exacts et en imposant les chiffres contrôlés.",
    steps: [
      {
        title: 'Lancer la rédaction',
        actions: [
          "Placez le curseur sous le titre 4, puis cliquez sur l'icône Copilot dans la marge (ou Alt+I selon votre version) pour ouvrir « Rédiger avec Copilot ».",
          "Saisissez le prompt ; tapez « / » puis choisissez 2026-04-08_Notes_revue_parc et 2026-04-13_Carburant_T1 pour les référencer.",
          "Cliquez sur Générer, lisez, puis « Conserver », « Régénérer » ou ajustez par une consigne (« plus concis », « supprime les adjectifs »).",
        ],
      },
    ],
    example: {
      title: 'Prompt de rédaction — section 4 (à copier)',
      lines: [
        "« À partir des notes /2026-04-08_Notes_revue_parc et du classeur /2026-04-13_Carburant_T1, rédige la section 4 d'un rapport trimestriel logistique, en trois sous-parties : Contexte, Constats, Recommandations.",
        "Utilise uniquement ces chiffres : total carburant T1 8 539 USD pour 5 710 litres ; Goma 5 175 USD (60,6 %) ; mars 3 397 USD contre 2 605 en février (+ 30,4 %) ; GOM-02 en mars 1 650 USD, dont 660 USD de jerrycans pour le convoi d'urgence du 13/03 ; plein de 480 L du 24/03 sans justificatif.",
        "Ton factuel, une demi-page maximum, aucun chiffre qui ne figure pas dans cette liste. »",
      ],
    },
    result: "Un premier jet d'une demi-page en trois sous-parties, inséré sous le titre 4, que vous allez maintenant contrôler ligne par ligne.",
    tip: "Fournir vous-même les chiffres contrôlés dans le prompt évite que Copilot recalcule à sa façon à partir du classeur : le texte reprend des valeurs déjà vérifiées à la procédure 2.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Contrôler les chiffres et rattacher chaque recommandation à un constat',
    intro: "Le point de vérification de la ligne 6 de la grille est explicite : chaque recommandation doit être appuyée par un constat présent dans les notes. Vous faites ce contrôle de façon systématique, avec un tableau de correspondance.",
    steps: [
      {
        title: 'Contrôler les chiffres',
        actions: [
          "Surlignez chaque nombre du texte généré (Ctrl+F, cherchez « USD », « % », « L »).",
          "Comparez chacun à la feuille « Contrôle » : tout nombre absent de votre liste est supprimé ou vérifié.",
        ],
      },
      {
        title: 'Rattacher les recommandations',
        actions: [
          "Listez chaque recommandation dans un tableau à deux colonnes : Recommandation / Constat qui la justifie.",
          "Une recommandation sans constat est supprimée ou renvoyée en « point à instruire ».",
        ],
      },
    ],
    table: {
      columns: ['Recommandation du premier jet', 'Constat qui la justifie', 'Décision'],
      rows: [
        ['Exiger un bon signé avant tout remplissage de jerrycans', '440 L en jerrycans le 13/03, bon BC-0313', 'Conservée'],
        ['Obtenir le justificatif du plein du 24/03 avant le 22/04', '480 L sans ordre de mission', 'Conservée'],
        ['Remplacer le véhicule GOM-02, jugé trop gourmand', 'Aucun : les pleins de GOM-02 s\'expliquent par le convoi', 'Supprimée'],
      ],
    },
    result: "Une section dont chaque chiffre est dans la feuille « Contrôle » et chaque recommandation repose sur un constat. Une recommandation inventée a été retirée.",
    pitfall: "Garder une recommandation plausible mais non fondée (« remplacer le véhicule ») parce qu'elle « sonne bien » : devant le comité, c'est la première qu'on vous demandera de justifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Reformuler un passage technique pour un public non spécialiste',
    intro: "Le comité de direction n'est pas composé de logisticiens. Vous utilisez la ligne 7 de la grille (« Reformule cette section pour un lecteur non-spécialiste, sans jargon technique, en gardant le sens exact ») sur la sous-partie 4.2.",
    steps: [
      {
        title: 'Reformuler',
        actions: [
          "Sélectionnez le texte de la sous-partie 4.2 « Anomalies ».",
          "Cliquez sur l'icône Copilot dans la marge > saisissez le prompt de la ligne 7.",
          "Affichez l'original et la proposition côte à côte avant de remplacer.",
        ],
      },
      {
        title: 'Comparer phrase par phrase',
        actions: [
          "Pour chaque phrase, vérifiez que le sens exact est conservé, pas seulement le ton.",
          "Vérifiez que les chiffres, dates et numéros de pièce n'ont pas disparu.",
          "Remplacez, puis passez la ligne 7 de la grille de « À tester » à « Testé ».",
        ],
      },
    ],
    example: {
      title: 'Avant / après — fil rouge',
      lines: [
        "Avant : « Écart de consommation sur GOM-02 en M3 lié à un avitaillement hors réservoir (jerrycans) pour mission urgente, BC-0313. »",
        "Après Copilot : « En mars, le véhicule GOM-02 a consommé davantage, notamment pour une mission d'urgence. »",
        "Corrigé par Amani : « En mars, le véhicule GOM-02 a reçu 440 litres de carburant en jerrycans pour le convoi d'urgence du 13 mars (bon BC-0313), en plus de son plein habituel. »",
      ],
    },
    result: "Une sous-partie lisible par un non-spécialiste, sans perte d'information : le volume, la date et la pièce justificative sont toujours là.",
    pitfall: "Une simplification qui efface l'information : « a consommé davantage » est plus clair, mais ne dit plus combien, quand ni pourquoi. Simplifier les mots, jamais les faits.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Rédiger la synthèse du rapport et figer la version',
    intro: "Le rapport complet fait 12 pages. Vous utilisez la ligne 5 de la grille (« Résume ce document en 10 lignes maximum, en gardant uniquement les décisions et les chiffres clés ») pour la section 1 « Synthèse », puis vous figez une version qui servira de source à la présentation.",
    steps: [
      {
        title: 'Générer et contrôler la synthèse',
        actions: [
          "Ouvrez le volet Copilot (Accueil > Copilot) et collez le prompt de la ligne 5.",
          "Point de vérification de la grille : aucun chiffre clé du document ne doit être omis ou déformé. Cochez-les un par un.",
          "Insérez la synthèse corrigée sous le titre 1 « Synthèse ».",
        ],
      },
      {
        title: 'Figer la version',
        actions: [
          "Mettez à jour la page de garde : version 1.0, date du 13/04/2026.",
          "Fichier > Informations > vérifiez l'étiquette de confidentialité (ici « Interne »).",
          "Enregistrez : 2026-04-13_Rapport_logistique_T1_v1.0.docx.",
        ],
      },
    ],
    example: {
      title: 'Synthèse retenue (extrait, 5 des 10 lignes)',
      lines: [
        "Délai moyen de traitement des demandes d'achat : 14 jours au T4 2025, 9 jours au T1 2026.",
        "Carburant T1 : 8 539 USD pour 5 710 litres, dont 60,6 % à Goma.",
        "Hausse de mars (+ 30,4 % sur février) due au convoi d'urgence du 13/03 ; hors jerrycans, + 5,1 %.",
        "Entrepôt de Bukavu occupé à 92 % fin mars : un espace partagé avec Tujenge Pamoja est à l'étude.",
        "Décisions demandées : partage d'entrepôt à Bukavu dès le 1er mai ; bon signé obligatoire avant tout remplissage de jerrycans.",
      ],
    },
    result: "Un rapport de 12 pages en version 1.0, avec une synthèse de 10 lignes contrôlée, prêt à servir de source à PowerPoint.",
    tip: "Notez dans la grille quels prompts Word vous avez réellement utilisés cette semaine (lignes 5, 6 et 7) : à la procédure 8, vous saurez lesquels méritent le statut « Testé ».",
  },

  // ───────────── Procédure 4 — Word vers PowerPoint ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Remplir la section 1 du guide : identifier le document source',
    intro: "Mercredi 15/04, 16 h 30 : la demande de la directrice arrive. Avant d'ouvrir PowerPoint, vous ouvrez le gabarit guide-generation-rapports-presentations-copilot.docx. Sa section 1 vous oblige à vérifier que le Word est prêt à être transformé.",
    steps: [
      {
        title: 'Remplir les trois champs',
        actions: [
          "« Nom du document et version » : recopiez le nom exact du fichier cloud et sa version.",
          "« Date de dernière mise à jour » : celle de la page de garde, vérifiée dans Fichier > Informations.",
          "« Structuration en titres/sous-titres (oui / partielle / non — à corriger avant de continuer) » : ouvrez le volet de navigation du rapport et répondez honnêtement.",
        ],
      },
      {
        title: 'Si la réponse est « partielle » ou « non »',
        actions: [
          "Arrêtez-vous et appliquez les styles Titre 1 / Titre 2 manquants (procédure 3, étape 1) : deux minutes qui font toute la différence sur le résultat.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie — fil rouge',
      lines: [
        "Nom du document et version : 2026-04-13_Rapport_logistique_T1_v1.0.docx — version 1.0",
        "Date de dernière mise à jour : 13/04/2026",
        "Structuration en titres/sous-titres : oui — 7 sections en Titre 1, 14 sous-sections en Titre 2",
      ],
    },
    result: "La section 1 du guide est remplie et confirme que le document source est structuré : vous pouvez continuer.",
    pitfall: "Lancer Copilot sur le « brouillon v0.9 » encore ouvert dans un autre onglet : la présentation reprendrait des chiffres corrigés depuis.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Remplir la section 2 : les 3 à 4 messages clés et leur source',
    intro: "Copilot résume la structure du document, mais ne devine pas vos priorités. La section 2 du guide est un tableau de quatre lignes (Message clé / Page ou section source du document Word) : vous y écrivez ce que le comité doit retenir, pas la table des matières.",
    steps: [
      {
        title: 'Choisir les messages',
        actions: [
          "Relisez la synthèse et la section 7 du rapport.",
          "Demandez-vous : « Si le comité ne retient que quatre phrases, lesquelles ? »",
          "Rédigez chaque message en une phrase complète, avec un chiffre ou une décision.",
        ],
      },
      {
        title: 'Remplir le tableau',
        actions: [
          "Colonne « Message clé » : une phrase par ligne, numérotée 1 à 4.",
          "Colonne « Page / section source » : la section et la page exactes, pour pouvoir vérifier chaque diapositive.",
        ],
      },
    ],
    table: {
      columns: ['Message clé', 'Page / section source du document Word'],
      rows: [
        ['1. Le délai de traitement des demandes d\'achat est passé de 14 à 9 jours', 'Section 3.2 — p. 4'],
        ['2. Carburant T1 : 8 539 USD ; la hausse de mars s\'explique par le convoi d\'urgence (hors jerrycans : + 5,1 %)', 'Sections 4.1 et 4.2 — p. 6-7'],
        ['3. L\'entrepôt de Bukavu est saturé à 92 % : un partage avec Tujenge Pamoja est proposé', 'Section 5.1 — p. 8'],
        ['4. Deux décisions demandées au comité : partage d\'entrepôt dès le 1er mai ; bon signé avant tout remplissage de jerrycans', 'Section 7 — p. 11'],
      ],
    },
    result: "Quatre messages clés écrits, chacun rattaché à une page : ce tableau devient votre grille de contrôle de la présentation générée.",
    tip: "Le dernier message doit toujours être la décision attendue du public : un comité de direction est là pour décider, pas pour découvrir un rapport.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Remplir la section 3 : public, nombre de diapositives, prompt exact',
    intro: "La section 3 du guide comporte trois champs : Public visé, Nombre de slides souhaité, Prompt exact utilisé. Le prompt adapte la ligne 11 de la grille et y ajoute vos messages clés, pour que Copilot ajuste la densité de chaque diapositive.",
    steps: [
      {
        title: 'Remplir les champs',
        actions: [
          "Public visé : nommez l'instance et ce qu'elle doit faire (« comité de direction, qui doit décider »).",
          "Nombre de slides souhaité : la contrainte reçue (8 maximum), titre et conclusion compris.",
          "Prompt exact utilisé : rédigez-le ici d'abord, puis copiez-le dans PowerPoint — c'est la version écrite qui fait foi.",
        ],
      },
    ],
    example: {
      title: 'Section 3 remplie — fil rouge',
      lines: [
        "Public visé : comité de direction d'Horizon Grands Lacs, présidé par la directrice pays — lecture exécutive, deux décisions à prendre.",
        "Nombre de slides souhaité : 8 maximum, titre et décisions compris.",
        "Prompt exact : « Crée une présentation de 8 diapositives maximum à partir de ce document, pour un comité de direction qui doit prendre deux décisions. Mets en avant, dans cet ordre, ces messages : (1) délai des demandes d'achat de 14 à 9 jours ; (2) carburant T1 8 539 USD, hausse de mars due au convoi d'urgence ; (3) entrepôt de Bukavu saturé à 92 % ; (4) décisions demandées. Une idée par diapositive, chiffres exacts du document, dernière diapositive consacrée aux décisions. »",
      ],
    },
    result: "Les trois champs de la section 3 sont remplis ; le prompt contient le public, la contrainte de diapositives et les messages clés dans l'ordre voulu.",
    pitfall: "Écrire seulement « fais une présentation de ce rapport » : Copilot produit 15 diapositives qui suivent la table des matières, et la décision attendue se retrouve en diapositive 14.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Générer la présentation dans PowerPoint',
    intro: "Le Word est prêt, le prompt est écrit : la génération elle-même prend une minute. Partez si possible du modèle de présentation de votre organisation pour limiter la reprise graphique.",
    steps: [
      {
        title: 'Lancer la génération',
        actions: [
          "Ouvrez PowerPoint : Fichier > Nouveau > choisissez le modèle de l'organisation s'il existe (sinon, une présentation vide).",
          "Cliquez sur Copilot dans l'onglet Accueil, puis sur « Créer une présentation à partir d'un fichier ».",
          "Désignez 2026-04-13_Rapport_logistique_T1_v1.0 (tapez « / » ou parcourez les fichiers récents).",
          "Collez le prompt de la section 3 du guide et envoyez.",
        ],
      },
      {
        title: 'Enregistrer le brut',
        actions: [
          "Enregistrez immédiatement sous 2026-04-15_Comite_T1_brut.pptx, dans le dossier du comité.",
          "Ne modifiez rien encore : vous relirez d'abord le fond (étape suivante).",
        ],
      },
    ],
    example: {
      title: 'Ce que Copilot a produit — fil rouge',
      lines: [
        "9 diapositives (titre + 8), chacune avec des notes de l'orateur générées.",
        "Diapositive 2 « Contexte du trimestre » : reprise du début du rapport, sans chiffre.",
        "Diapositive 5 : « Carburant : hausse de 30 % en mars » — sans mention du convoi d'urgence.",
        "Diapositive 9 « Prochaines étapes » : liste générique, sans les deux décisions demandées.",
      ],
    },
    result: "Une présentation brute enregistrée à part, qui servira de base de travail. Elle n'est pas encore présentable — c'est normal.",
    tip: "Gardez toujours le fichier brut intact et travaillez sur une copie : si une retouche tourne mal, vous repartez du brut sans relancer Copilot.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Relire le fond diapositive par diapositive, avant la forme',
    intro: "La règle de la méthode : vérifier d'abord le fond. Les messages clés de la section 2 sont-ils présents, exacts et mis en avant ? Une diapositive qui met un détail secondaire au premier plan doit être retravaillée ou réordonnée à la main.",
    steps: [
      {
        title: 'Cartographier messages et diapositives',
        actions: [
          "Enregistrez une copie de travail : 2026-04-15_Comite_T1_v1.pptx.",
          "Pour chaque message clé de la section 2, notez la diapositive qui le porte ; un message sans diapositive est un manque.",
          "Vérifiez chaque chiffre contre la page source indiquée dans la section 2.",
        ],
      },
      {
        title: 'Corriger',
        actions: [
          "Fusionnez ou supprimez les diapositives secondaires pour revenir à 8 (ligne 12 de la grille : « Réduis cette présentation… en fusionnant les slides secondaires, sans perdre les chiffres clés »).",
          "Réécrivez les titres pour qu'ils énoncent le message, et complétez les chiffres manquants.",
          "Remplacez la diapositive « Prochaines étapes » par « Deux décisions pour le comité ».",
        ],
      },
    ],
    table: {
      columns: ['Diapositive', 'Avant (Copilot)', 'Après relecture'],
      rows: [
        ['2', 'Contexte du trimestre (sans chiffre)', 'Fusionnée avec la diapositive 1'],
        ['5', 'Carburant : hausse de 30 % en mars', 'Carburant T1 : 8 539 USD — hausse de mars due au convoi d\'urgence (hors jerrycans : + 5,1 %)'],
        ['9', 'Prochaines étapes (générique)', 'Deux décisions pour le comité : entrepôt partagé au 1er mai ; bon signé avant remplissage de jerrycans'],
      ],
    },
    result: "8 diapositives : les quatre messages clés sont présents, dans l'ordre voulu, avec des chiffres conformes au rapport. La ligne 12 de la grille passe à « Testé ».",
    pitfall: "Commencer par changer les couleurs et les images : on passe une heure sur la forme et on présente une hausse de 30 % sans son explication. Le fond d'abord, toujours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Recaler sur la charte, passer la checklist et signer le guide',
    intro: "Une présentation générée n'est jamais calée sur votre charte graphique dès la sortie. La section 4 du guide liste cinq points de relecture à cocher ; le tableau final « Rédigé par / Date » engage votre nom.",
    steps: [
      {
        title: 'Recaler la forme',
        actions: [
          "Conception > appliquez le thème de l'organisation (logo, couleurs, polices) s'il n'est pas déjà en place.",
          "Vérifiez chaque diapositive en mode Trieuse : aucun texte qui déborde, aucune image générique hors sujet.",
          "Relisez et corrigez les notes de l'orateur : ce sont vos notes pour demain matin.",
        ],
      },
      {
        title: 'Passer la checklist et signer',
        actions: [
          "Cochez les 5 cases de la section 4 du guide une par une, sans en présumer aucune.",
          "Remplissez le tableau final : Rédigé par (nom, fonction) et Date.",
          "Envoyez la présentation et le guide à la directrice ; ne transmettez jamais le fichier « brut ».",
        ],
      },
    ],
    example: {
      title: 'Section 4 et signature — fil rouge',
      lines: [
        "☑ Les messages clés apparaissent bien, et en priorité (diapositives 2, 4, 6 et 8).",
        "☑ Aucun chiffre clé déformé, arrondi à tort ou omis (« 30 % » remplacé par « + 30,4 % »).",
        "☑ Fil logique adapté au comité : constats → explications → décisions.",
        "☑ Charte de l'organisation appliquée.   ☑ Relecture humaine complète faite par Patrick Mumbere à 19 h 10.",
        "Rédigé par : Amani Kahindo, chargée administrative et logistique — Date : 15/04/2026",
      ],
    },
    result: "Une présentation de 8 diapositives conforme à la charte, relue, accompagnée de son guide rempli et signé, envoyée la veille du comité.",
    tip: "La case « relecture humaine complète » vaut pour une autre personne que vous : même cinq minutes d'un collègue attrapent l'erreur que vos yeux ne voient plus.",
  },

  // ───────────── Procédure 5 — Teams ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Préparer la réunion pour que Copilot ait de quoi résumer',
    intro: "Sans transcription, Copilot n'a rien à résumer après coup. La préparation se fait dans l'invitation, avant la réunion, et inclut l'information des participants externes.",
    steps: [
      {
        title: "Paramétrer l'invitation",
        actions: [
          "Ouvrez la réunion dans le calendrier Teams > Options de réunion.",
          "Activez « Enregistrer et transcrire automatiquement » si votre organisation le permet.",
          "Réglez Copilot sur « Pendant et après la réunion » (avec « Uniquement pendant la réunion », aucun résumé ne sera disponible ensuite).",
          "Enregistrez les options.",
        ],
      },
      {
        title: 'Informer les participants',
        actions: [
          "Ajoutez dans le texte de l'invitation : « La réunion sera transcrite pour produire le compte-rendu. »",
          "Ajoutez un ordre du jour numéroté : il aide Copilot à structurer le résumé par point.",
        ],
      },
    ],
    example: {
      title: 'Invitation du 14/04/2026, 10 h–11 h 30 — fil rouge',
      lines: [
        "Objet : Partage de l'entrepôt de Bukavu — Horizon Grands Lacs / Tujenge Pamoja",
        "Participants : Amani Kahindo, Patrick Mumbere, Jean-Claude Baraka (magasinier de Bukavu) ; Esther Nabintu et Déo Kambale (Tujenge Pamoja).",
        "Ordre du jour : 1. Capacité disponible ; 2. Conditions d'accès ; 3. Frais partagés ; 4. Calendrier.",
        "Mention : « La réunion sera transcrite pour produire le compte-rendu. »",
      ],
    },
    result: "Une invitation dont les options permettent un résumé après la réunion, et des participants externes informés de la transcription.",
    pitfall: "Compter sur la transcription automatique sans vérifier qu'elle est autorisée : si la politique de l'organisation la désactive, découvrez-le avant la réunion, pas le lendemain.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Pendant la réunion : démarrer la transcription et faciliter le résumé',
    intro: "La qualité du résumé dépend de la façon dont la réunion est conduite. Des décisions et des actions énoncées clairement à l'oral seront attribuées correctement ; un « on verra qui s'en charge » produira une attribution erronée ou absente.",
    steps: [
      {
        title: 'Au démarrage',
        actions: [
          "Si la transcription n'est pas automatique : Plus (…) > Enregistrer et transcrire > Démarrer la transcription.",
          "Annoncez-la à l'oral et laissez le temps à chacun de réagir.",
        ],
      },
      {
        title: 'Au fil de la réunion',
        actions: [
          "À chaque décision, reformulez-la à voix haute : « Décision : … ».",
          "À chaque action, énoncez la formule complète : « Action : quoi, qui, pour quand ».",
          "Ouvrez Copilot pendant la réunion et demandez, avant de conclure : « Quelles actions n'ont pas encore de responsable ? »",
          "Gardez vos propres notes brèves (décisions, noms, dates) : elles serviront au contrôle.",
        ],
      },
    ],
    example: {
      title: 'Phrases qui font la différence — fil rouge',
      lines: [
        "Amani : « Décision : on retient le principe du partage de la zone B, 120 m², à partir du 1er mai, sous réserve de validation par notre direction. »",
        "Amani : « Action : visite technique de l'entrepôt, Déo et Jean-Claude, le 20 avril. »",
        "Déo, en fin de réunion : « Pour le plan de rangement, on verra qui s'en charge. » ← phrase à risque.",
      ],
    },
    result: "Une transcription active du début à la fin, avec des décisions et des actions énoncées sous une forme que Copilot peut résumer sans deviner.",
    tip: "La question posée à Copilot avant de conclure (« Quelles actions n'ont pas de responsable ? ») permet de régler les attributions pendant que tout le monde est encore connecté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Après la réunion : demander le résumé en trois blocs',
    intro: "Un résumé narratif continu n'est pas exploitable par une équipe. Vous adaptez la ligne 15 de la grille (« Résume cette réunion en trois blocs : décisions prises, actions à suivre avec responsable, points non résolus ») en imposant un tableau pour les actions.",
    steps: [
      {
        title: 'Ouvrir Copilot sur la bonne réunion',
        actions: [
          "Dans le calendrier Teams, ouvrez la réunion du 14/04 > onglet « Récapitulatif ».",
          "Vérifiez que la transcription est bien présente (onglet ou section « Transcription »).",
          "Ouvrez Copilot depuis cette page (ou depuis le chat de la réunion).",
        ],
      },
      {
        title: 'Envoyer le prompt',
        actions: [
          "Collez le prompt adapté (voir exemple).",
          "Copiez la réponse dans un document Word « CR_2026-04-14_Tujenge_brut » : c'est votre base de contrôle.",
        ],
      },
    ],
    example: {
      title: 'Prompt Teams adapté (à copier)',
      lines: [
        "« Résume cette réunion en trois blocs : 1) décisions prises ; 2) actions à suivre, sous forme de tableau avec les colonnes Action, Responsable, Échéance, Moment de la transcription ; 3) points non résolus à reprendre à la prochaine réunion.",
        "Si une action n'a pas de responsable explicitement nommé, écris « Non attribué » au lieu de deviner. Ne mentionne que ce qui a été dit dans la réunion. »",
      ],
    },
    result: "Un résumé brut en trois blocs, avec un tableau d'actions horodaté prêt à être vérifié.",
    tip: "Demander le « moment de la transcription » pour chaque action vous fait gagner l'essentiel du temps de vérification : vous allez directement au passage concerné.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Vérifier chaque responsable et chaque échéance dans la transcription',
    intro: "Copilot attribue les actions en fonction de ce qui a été dit à l'oral ; une reformulation ambiguë peut produire une attribution erronée. C'est le point de vérification de la ligne 15 de la grille : vérifier les noms des responsables, souvent ambigus à l'oral.",
    steps: [
      {
        title: 'Contrôler ligne par ligne',
        actions: [
          "Pour chaque action, ouvrez la transcription au moment indiqué et relisez 30 secondes avant et après.",
          "Vérifiez trois points : la personne a-t-elle accepté l'action ? l'échéance a-t-elle été dite ? la formulation est-elle fidèle ?",
          "Comparez aussi avec vos notes personnelles prises pendant la réunion.",
        ],
      },
      {
        title: 'Corriger',
        actions: [
          "Toute action sans acceptation explicite devient « Non attribué — à confirmer ».",
          "Écrivez immédiatement à la personne pressentie pour confirmation, avant diffusion.",
        ],
      },
    ],
    table: {
      columns: ['Action', 'Responsable selon Copilot', 'Transcription', 'Après vérification'],
      rows: [
        ['Envoyer la liste des articles à stocker', 'Amani Kahindo — 17/04', '10:42 « je vous envoie la liste vendredi »', 'Confirmé'],
        ['Visite technique de l\'entrepôt', 'Déo Kambale et J.-C. Baraka — 20/04', '10:51 énoncé complet', 'Confirmé'],
        ['Projet de protocole d\'accord', 'Patrick Mumbere — 22/04', '11:05 « je prépare le projet pour le 22 »', 'Confirmé'],
        ['Inventaire contradictoire avant entrée', 'Esther Nabintu — 29/04', '11:12 « Esther valide la date »', 'Confirmé'],
        ['Plan de rangement et d\'étiquetage', 'Déo Kambale', '11:24 « on verra qui s\'en charge »', 'Non attribué — confirmation demandée à J.-C. Baraka'],
      ],
    },
    result: "Cinq actions vérifiées : quatre confirmées, une mal attribuée corrigée en « Non attribué — à confirmer ». C'est cette erreur que le compte-rendu brut aurait diffusée.",
    pitfall: "Vérifier seulement que « les noms sont des participants » : Déo Kambale était bien présent, mais il n'a jamais accepté le plan de rangement. On vérifie l'acceptation, pas la présence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Finaliser et diffuser le compte-rendu',
    intro: "Le compte-rendu vérifié devient le document de référence de la relation avec le partenaire. Vous le mettez en forme en trois blocs, vous le diffusez par le bon canal et vous gardez la trace de la vérification.",
    steps: [
      {
        title: 'Mettre en forme',
        actions: [
          "En tête : objet, date, participants, mention « Compte-rendu établi avec Copilot à partir de la transcription, vérifié par A. Kahindo ».",
          "Bloc 1 Décisions, bloc 2 tableau des actions (Action, Responsable, Échéance), bloc 3 Points non résolus.",
          "Supprimez la colonne « Moment de la transcription », utile pour vous seulement.",
        ],
      },
      {
        title: 'Diffuser',
        actions: [
          "Enregistrez le CR en PDF dans le dossier partagé du projet.",
          "Envoyez-le aux participants avec l'email de suivi (procédure 6) ; publiez-le dans le canal Teams interne pour l'équipe.",
          "Passez la ligne 15 de la grille à « Testé » si ce n'est pas déjà le cas.",
        ],
      },
    ],
    example: {
      title: 'Compte-rendu final du 14/04/2026 — blocs 1 et 3',
      lines: [
        "Décisions : (1) principe du partage de la zone B (120 m²) de l'entrepôt de Tujenge Pamoja à Bukavu à partir du 01/05/2026, sous réserve de validation par la direction d'Horizon Grands Lacs ; (2) inventaire contradictoire avant toute entrée de stock.",
        "Points non résolus : répartition des frais de gardiennage ; assurance des stocks entreposés ; horaires d'accès le week-end.",
      ],
    },
    result: "Un compte-rendu en trois blocs, vérifié, diffusé le jour même, dont chaque action a un responsable confirmé ou est explicitement en attente.",
    tip: "Envoyez le compte-rendu dans les 24 heures : au-delà, chacun a sa propre version de ce qui a été décidé, et le document n'arbitre plus rien.",
  },

  // ───────────── Procédure 6 — Outlook ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: "Résumer un long fil d'emails et identifier la question en suspens",
    intro: "Le fil « Entrepôt Bukavu » avec Tujenge Pamoja compte 14 messages depuis le 2 mars. Avant d'y répondre, vous utilisez la ligne 14 de la grille : « Résume ce fil d'emails en identifiant la question en suspens à laquelle je dois répondre. »",
    steps: [
      {
        title: 'Obtenir le résumé',
        actions: [
          "Dans Outlook, ouvrez le dernier message du fil.",
          "Cliquez sur « Résumé par Copilot » en haut du message (ou ouvrez Copilot et collez le prompt de la ligne 14).",
          "Lisez les références : Copilot indique les messages sur lesquels il s'appuie.",
        ],
      },
      {
        title: 'Vérifier la question identifiée',
        actions: [
          "Ouvrez le message cité comme source de la question en suspens.",
          "Vérifiez que c'est bien la question réellement en attente (point de vérification de la ligne 14), et non une question déjà traitée par téléphone ou dans un autre fil.",
        ],
      },
    ],
    example: {
      title: 'Résumé retenu — fil rouge',
      lines: [
        "Synthèse : Tujenge Pamoja propose 120 m² (zone B) ; accès en semaine de 7 h à 17 h ; gardiennage assuré par un agent du partenaire.",
        "Question en suspens selon Copilot : « Horizon Grands Lacs peut-elle prendre en charge 50 % du gardiennage, soit 180 USD par mois ? » (Esther Nabintu, 13/04).",
        "Vérification : question confirmée — non traitée en réunion le 14/04, elle figure dans les points non résolus.",
      ],
    },
    result: "Vous savez en deux minutes, sur 14 messages, la question précise à laquelle vous devez répondre et qui l'a posée.",
    pitfall: "Répondre à la question que Copilot a identifiée sans ouvrir le message source : si la question a été réglée entre-temps par téléphone, votre réponse rouvre un sujet clos.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: "Générer le brouillon de l'email de suivi",
    intro: "Vous adaptez la ligne 13 de la grille (« Rédige un email de suivi pour les participants, résumant les décisions prises et les prochaines étapes, ton professionnel et concis ») en lui donnant le compte-rendu vérifié comme seule source.",
    steps: [
      {
        title: 'Rédiger avec Copilot',
        actions: [
          "Outlook > Nouveau message ; destinataires : les cinq participants.",
          "Cliquez sur l'icône Copilot de la barre d'outils > « Brouillon avec Copilot ».",
          "Collez le prompt adapté (voir exemple), puis Générer.",
          "Ajustez la longueur ou le ton avec les options proposées, ou par une consigne (« plus court », « plus formel »).",
          "Cliquez sur « Conserver » pour insérer le brouillon dans le message.",
        ],
      },
    ],
    example: {
      title: 'Prompt de suivi adapté (à copier)',
      lines: [
        "« Rédige un email de suivi pour les participants à la réunion du 14 avril avec Tujenge Pamoja. Reprends uniquement les décisions et le tableau des actions du compte-rendu joint, sans rien ajouter.",
        "Indique que le plan de rangement reste à attribuer et que nous répondrons sur la prise en charge de 50 % du gardiennage après le comité de direction du 16 avril. Propose la réunion de suivi le mardi 28 avril à 10 h, heure de Goma. Ton professionnel et chaleureux, 15 lignes maximum. »",
      ],
    },
    result: "Un brouillon d'email de 15 lignes au plus, qui reprend fidèlement les décisions, les actions et la question en suspens, prêt à être relu.",
    tip: "Écrivez dans le prompt ce que l'email ne doit PAS dire : « sans rien ajouter » évite que Copilot invente une décision « pour faire bonne mesure ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: "Relire l'email comme s'il partait chez un bailleur",
    intro: "Point de vérification de la ligne 13 : relire le ton avant envoi, en particulier pour un destinataire externe. Un email au partenaire engage l'organisation : vous contrôlez le fond, le ton et ce qui ne doit pas sortir.",
    steps: [
      {
        title: 'Contrôler le fond',
        actions: [
          "Comparez chaque décision et chaque action au compte-rendu vérifié : mêmes noms, mêmes dates.",
          "Vérifiez qu'aucun engagement n'est pris à la place de la direction (le partage est « sous réserve de validation »).",
        ],
      },
      {
        title: 'Contrôler le ton et la confidentialité',
        actions: [
          "Lancez « Coaching par Copilot » (si disponible) : lisez ses remarques sur le ton et la clarté, appliquez celles qui sont justes.",
          "Supprimez toute information interne : budget carburant, débat interne sur la prise en charge.",
          "Vérifiez les destinataires, puis faites relire par Patrick Mumbere si l'email engage un montant.",
        ],
      },
    ],
    example: {
      title: 'Corrections apportées par Amani — fil rouge',
      lines: [
        "Supprimé : « Nous devrions pouvoir accepter les 50 % » — engagement prématuré, à décider en comité.",
        "Corrigé : « Déo se charge du plan de rangement » → « Le plan de rangement reste à attribuer ; nous revenons vers vous d'ici le 17 avril. »",
        "Ajouté : le compte-rendu en PDF en pièce jointe.",
      ],
    },
    result: "Un email exact, sans engagement non autorisé ni information interne, au ton adapté à un partenaire externe.",
    pitfall: "Faire confiance au ton « professionnel » d'un brouillon généré : il peut être poli et faux à la fois. Un email au partenaire se relit comme un document contractuel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: "Envoyer, classer et répondre à la question en suspens",
    intro: "L'email est prêt. Il reste à l'envoyer, à le rattacher au dossier du projet et à préparer la réponse à la question du gardiennage, qui sera tranchée par le comité.",
    steps: [
      {
        title: 'Envoyer et classer',
        actions: [
          "Envoyez l'email avec le compte-rendu en pièce jointe.",
          "Déplacez le fil dans le dossier Outlook « Partenaires / Tujenge Pamoja ».",
          "Ajoutez un indicateur de suivi à l'email d'Esther du 13/04, échéance 17/04.",
        ],
      },
      {
        title: 'Préparer la réponse sur le gardiennage',
        actions: [
          "Ajoutez la question « Prise en charge de 50 % du gardiennage (180 USD/mois) ? » aux décisions à soumettre au comité du 16/04.",
          "Après le comité, rédigez la réponse avec Copilot, puis relisez-la selon l'étape précédente.",
          "Passez les lignes 13 et 14 de la grille à « Testé » (elles le sont déjà dans le gabarit : vérifiez que c'est vrai pour vous).",
        ],
      },
    ],
    example: {
      title: 'Chronologie — fil rouge',
      lines: [
        "15/04, 17 h 40 : email de suivi envoyé aux 5 participants, compte-rendu en pièce jointe.",
        "16/04, 9 h : le comité valide le partage d'entrepôt et la prise en charge de 50 % du gardiennage.",
        "16/04, 11 h : réponse à Esther Nabintu envoyée, indicateur de suivi effacé.",
      ],
    },
    result: "Le fil est classé, la question en suspens a une échéance et une réponse validée par l'instance compétente.",
    tip: "Ne répondez pas « à chaud » sur un engagement financier, même si Copilot vous propose un brouillon parfait : la vitesse d'exécution ne remplace pas le circuit de décision.",
  },

  // ───────────── Procédure 7 — Planification ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 3',
    title: "Préparer l'ordre du jour de la réunion de suivi",
    intro: "Une réunion de suivi efficace commence par les points restés ouverts. Vous utilisez la ligne 16 de la grille : « À partir du résumé de la dernière réunion, liste les points non résolus à reprendre en priorité aujourd'hui. »",
    steps: [
      {
        title: 'Générer la liste',
        actions: [
          "Ouvrez le récapitulatif de la réunion du 14/04 dans Teams, puis Copilot.",
          "Collez le prompt de la ligne 16, en ajoutant : « classe-les par priorité et indique pour chacun la décision attendue ».",
        ],
      },
      {
        title: 'Confronter et compléter',
        actions: [
          "Point de vérification de la ligne 16 : confrontez la liste à vos propres notes pour vérifier qu'aucun point n'a été oublié.",
          "Ajoutez le suivi des actions du compte-rendu (dont le plan de rangement non attribué).",
          "Donnez à chaque point une durée : l'ordre du jour doit tenir dans le créneau.",
        ],
      },
    ],
    example: {
      title: 'Ordre du jour du 28/04/2026, 10 h–11 h (heure de Goma)',
      lines: [
        "1. Suivi des 5 actions du 14/04, dont l'attribution du plan de rangement — 10 min",
        "2. Frais de gardiennage : retour de la décision du comité (50 %, soit 180 USD/mois) — 10 min",
        "3. Assurance des stocks entreposés — 15 min",
        "4. Horaires d'accès le week-end — 10 min",
        "5. Validation du projet de protocole d'accord — 15 min",
      ],
    },
    result: "Un ordre du jour de cinq points, priorisé, minuté et vérifié contre vos notes, qui reprend tous les points non résolus.",
    pitfall: "Prendre la liste de Copilot pour complète : le suivi des actions n'est pas un « point non résolu » au sens du résumé, il disparaît si vous ne l'ajoutez pas vous-même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 3',
    title: 'Trouver le créneau et créer l\'invitation Teams',
    intro: "Planifier, c'est trouver un créneau où tout le monde est libre, dans le bon fuseau horaire. Goma et Bukavu sont à UTC+2, Kinshasa à UTC+1 : une invitation « 10 h » mal paramétrée fait arriver un participant une heure en retard.",
    steps: [
      {
        title: 'Créer la réunion',
        actions: [
          "Si votre Outlook propose « Planifier avec Copilot » dans le fil d'emails : utilisez-le, il pré-remplit l'objet, les participants et un résumé du fil. Sinon : calendrier Teams > Nouvelle réunion.",
          "Ajoutez les 5 participants, puis ouvrez l'Assistant de planification pour voir les disponibilités internes.",
          "Vérifiez le fuseau horaire de l'invitation (Goma, UTC+2) ; pour un participant de Kinshasa, la réunion s'affichera à 9 h.",
        ],
      },
      {
        title: "Rédiger le corps de l'invitation",
        actions: [
          "Collez l'ordre du jour minuté de l'étape précédente.",
          "Joignez ou liez le compte-rendu du 14/04.",
          "Indiquez : « La réunion sera transcrite pour produire le compte-rendu. »",
        ],
      },
    ],
    example: {
      title: 'Invitation — fil rouge',
      lines: [
        "Objet : Suivi — Partage de l'entrepôt de Bukavu (HGL / Tujenge Pamoja)",
        "Date : mardi 28/04/2026, 10 h–11 h (Goma, UTC+2)",
        "Participants : A. Kahindo, P. Mumbere, J.-C. Baraka, E. Nabintu, D. Kambale",
        "Pièce liée : CR_2026-04-14_Tujenge.pdf",
      ],
    },
    result: "Une invitation sur un créneau libre, au bon fuseau horaire, avec ordre du jour et compte-rendu précédent, prête à paramétrer.",
    tip: "L'Assistant de planification ne voit pas les agendas d'une organisation partenaire : proposez deux créneaux dans l'email de suivi (procédure 6) avant d'envoyer l'invitation définitive.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 3',
    title: "Paramétrer les options de réunion, envoyer et suivre les réponses",
    intro: "Les options de réunion déterminent ce que Copilot pourra faire le 28 avril. Vous les réglez avant l'envoi, puis vous suivez les acceptations comme une action à part entière.",
    steps: [
      {
        title: 'Régler les options',
        actions: [
          "Envoyez l'invitation, puis ouvrez-la > Options de réunion.",
          "« Qui peut contourner la salle d'attente » : personnes de l'organisation ; les participants externes passent par la salle d'attente.",
          "Activez l'enregistrement et la transcription automatiques ; Copilot « Pendant et après la réunion ».",
          "Enregistrez.",
        ],
      },
      {
        title: 'Suivre',
        actions: [
          "Ouvrez le suivi des réponses de l'invitation le lendemain : relancez les participants sans réponse.",
          "Ajoutez dans la grille une ligne Outlook « Planifier une réunion de suivi » (procédure 8).",
        ],
      },
    ],
    example: {
      title: 'Suivi des réponses — 17/04/2026',
      lines: [
        "Acceptée : A. Kahindo, P. Mumbere, J.-C. Baraka, E. Nabintu.",
        "Sans réponse : D. Kambale → relance par email le 17/04 ; acceptation reçue le 18/04.",
      ],
    },
    result: "Une réunion de suivi planifiée, paramétrée pour être transcrite et résumée, acceptée par les cinq participants.",
    pitfall: "Oublier de régler Copilot sur « Pendant et après la réunion » : le 28 avril, vous auriez une réunion sans résumé et un compte-rendu à refaire à la main.",
  },

  // ───────────── Procédure 8 — Grille de prompts ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 3',
    title: 'Ajouter vos prompts testés dans l\'onglet « Grille de prompts »',
    intro: "Le prompt qui a fonctionné cette semaine vous fera gagner du temps la prochaine fois, à condition d'être consigné. L'onglet « Grille de prompts » a six colonnes, en-têtes en ligne 4 ; les 12 exemples occupent les lignes 5 à 16. Vous ajoutez vos lignes à partir de la ligne 17.",
    steps: [
      {
        title: 'Remplir une ligne par prompt réellement utilisé',
        actions: [
          "Application : Word, Excel, PowerPoint, Outlook ou Teams — écrit exactement ainsi, sinon le suivi ne le comptera pas.",
          "Tâche courante : le besoin, en quelques mots.",
          "Prompt à utiliser : le texte exact qui a fonctionné, avec des repères à remplacer entre crochets.",
          "Résultat attendu : ce que vous devez obtenir.",
          "Point de vérification : le contrôle que vous avez réellement fait.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Application', 'Tâche courante', 'Prompt à utiliser (début)', 'Point de vérification'],
      rows: [
        ['17', 'Excel', 'TCD par site et par mois', '« À partir du tableau [T_…], crée un TCD de la somme de [colonne] avec [champ] en lignes et les mois en colonnes… »', 'Total général = total du tableau source'],
        ['18', 'Word', 'Section de rapport depuis notes + classeur', '« À partir des notes /[fichier] et du classeur /[fichier], rédige la section… Utilise uniquement ces chiffres… »', 'Chaque chiffre dans la feuille Contrôle'],
        ['19', 'Teams', 'Résumé 3 blocs avec tableau horodaté', '« …tableau Action, Responsable, Échéance, Moment de la transcription… “Non attribué” au lieu de deviner »', 'Acceptation vérifiée dans la transcription'],
        ['20', 'Outlook', 'Planifier une réunion de suivi', '« Planifier avec Copilot » depuis le fil + ordre du jour issu de la ligne 16', 'Fuseau horaire et options de réunion'],
      ],
    },
    result: "Quatre nouvelles lignes (17 à 20), chacune avec un prompt réutilisable et le contrôle qui le rend fiable.",
    tip: "Remplacez les éléments propres au cas (T_Carburant_T1, Tujenge Pamoja) par des repères entre crochets : le prompt devient un modèle que toute l'équipe peut réutiliser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 3',
    title: 'Mettre à jour la colonne Statut avec une règle stricte',
    intro: "La colonne F « Statut (Testé / À tester) » n'a de valeur que si « Testé » veut dire la même chose pour tout le monde : le prompt a été utilisé sur un cas réel ET son point de vérification a été passé avec succès.",
    steps: [
      {
        title: 'Appliquer la règle',
        actions: [
          "Pour chaque ligne, posez-vous deux questions : l'ai-je utilisé sur un vrai cas ? ai-je fait le contrôle de la colonne E ?",
          "Deux oui : saisissez « Testé » exactement (avec l'accent), sinon « À tester ».",
          "Mettez à jour les exemples du gabarit que vous avez testés cette semaine.",
        ],
      },
    ],
    example: {
      title: 'Statuts mis à jour — fil rouge',
      lines: [
        "Ligne 7 (Word, reformuler pour un non-spécialiste) : À tester → Testé (procédure 3, étape 4).",
        "Ligne 10 (Excel, anomalies) : À tester → Testé (procédure 2, étape 5).",
        "Ligne 12 (PowerPoint, réduire une présentation) : À tester → Testé (procédure 4, étape 5).",
        "Ligne 16 (Teams, points non résolus) : À tester → Testé (procédure 7, étape 1).",
        "Lignes 17, 18, 19 : Testé. Ligne 20 (Planifier avec Copilot) : À tester — fonction absente de la version d'Amani.",
      ],
    },
    result: "Une colonne Statut honnête : 15 prompts « Testé » sur 16, et une ligne qui reste « À tester » pour une raison documentée.",
    pitfall: "Saisir « testé », « Teste » ou « OK » : la formule de l'onglet de suivi compare le texte exact « Testé » et ne compte pas ces variantes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 3',
    title: "Étendre et contrôler l'onglet « Suivi d'utilisation »",
    intro: "L'onglet « Suivi d'utilisation » est calculé automatiquement : colonne B « Nombre de prompts recensés » (NB.SI), colonne C « Dont statut Testé » (NB.SI.ENS), Total en ligne 10. Mais ses formules ne portent que sur les lignes 5 à 16 de la grille : vos lignes 17 à 20 ne sont pas comptées.",
    steps: [
      {
        title: 'Étendre les plages',
        actions: [
          "Cliquez sur B5 et lisez la formule : la plage s'arrête à $A$16.",
          "Dans B5:C9, remplacez $A$16 par $A$60 et $F$16 par $F$60 (Ctrl+H, en limitant la recherche à la sélection et aux formules).",
          "Ne touchez pas aux formules du Total (B10 et C10) : elles additionnent déjà B5:B9 et C5:C9.",
        ],
      },
      {
        title: 'Contrôler',
        actions: [
          "Comptez à la main les lignes de la grille : le total B10 doit être égal.",
          "Comparez C10 au nombre de « Testé » : =NB.SI('Grille de prompts'!F5:F60;\"Testé\").",
        ],
      },
    ],
    table: {
      columns: ['Application', 'Avant (gabarit)', 'Après la semaine du 13/04'],
      rows: [
        ['Word', '3 dont 2 testés', '4 dont 4 testés'],
        ['Excel', '3 dont 2 testés', '4 dont 4 testés'],
        ['PowerPoint', '2 dont 1 testé', '2 dont 2 testés'],
        ['Outlook', '2 dont 2 testés', '3 dont 2 testés'],
        ['Teams', '2 dont 1 testé', '3 dont 3 testés'],
        ['Total', '12 dont 8 testés', '16 dont 15 testés'],
      ],
    },
    result: "Un onglet de suivi qui compte bien vos 16 prompts, dont 15 testés : la grille est devenue votre antisèche personnelle, prête à être partagée avec l'équipe.",
    pitfall: "Ajouter des lignes sans étendre les formules : le suivi affiche toujours « 12 dont 8 testés » et donne l'impression que vous n'avez rien capitalisé.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Le rapport qui doit devenir un comité de direction en 24 heures',
    scenario: "Rappel du cas du module (03-exercices) appliqué au fil rouge : rapport trimestriel Word de 12 pages, structuré ; demande à 16 h 30 d'une présentation de 8 diapositives maximum pour le comité de direction du lendemain 9 h. Voici la réponse attendue à la partie 1 de l'exercice noté.",
    steps: [
      { title: '(a) Les 4 messages clés', body: "1. Délai de traitement des demandes d'achat ramené de 14 à 9 jours. 2. Carburant T1 : 8 539 USD ; hausse de mars due au convoi d'urgence (hors jerrycans : + 5,1 %). 3. Entrepôt de Bukavu saturé à 92 % : partage proposé avec Tujenge Pamoja. 4. Deux décisions demandées : partage au 1er mai, bon signé avant remplissage de jerrycans." },
      { title: '(b) Le prompt exact', body: "« Crée une présentation de 8 diapositives maximum à partir de ce document, pour un comité de direction qui doit prendre deux décisions. Mets en avant, dans cet ordre, ces messages : (1)… (4). Une idée par diapositive, chiffres exacts du document, dernière diapositive consacrée aux décisions. »" },
      { title: '(c) Points de vigilance vérifiés', body: "Les 4 messages sont présents et en priorité (la version brute avait relégué les décisions dans une liste générique) ; aucun chiffre déformé (« 30 % » sans explication corrigé) ; nombre de diapositives respecté (9 → 8) ; charte appliquée ; relecture par une deuxième personne." },
    ],
    result: "Guide rempli et signé ; présentation de 8 diapositives envoyée le 15/04 avant 20 h.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — Le résumé de réunion actionnable',
    scenario: "Partie 2 de l'exercice noté : réunion Teams d'1 h 30 avec le partenaire, tenue la veille, dont il faut extraire les actions avant la fin de la journée. Voici le prompt et la méthode de vérification attendus.",
    steps: [
      { title: 'Le prompt exact', body: "« Résume cette réunion en trois blocs : 1) décisions prises ; 2) actions à suivre, sous forme de tableau Action, Responsable, Échéance, Moment de la transcription ; 3) points non résolus. Si une action n'a pas de responsable explicitement nommé, écris “Non attribué” au lieu de deviner. Ne mentionne que ce qui a été dit dans la réunion. »" },
      { title: "Vérification de l'attribution", body: "Pour chaque action : ouvrir la transcription au moment indiqué, vérifier que la personne a accepté l'action et que l'échéance a été dite ; comparer avec ses propres notes ; toute action sans acceptation explicite devient « Non attribué — à confirmer » et la personne pressentie est contactée avant diffusion." },
      { title: 'Ce que la vérification a corrigé', body: "Le plan de rangement, attribué par Copilot à Déo Kambale, reposait sur la phrase « on verra qui s'en charge » : il passe en « Non attribué », confirmation demandée au magasinier de Bukavu." },
    ],
    result: "Compte-rendu en trois blocs diffusé le 15/04 à 17 h 40 avec l'email de suivi ; 4 actions confirmées, 1 en attente d'attribution.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Le livrable d\'une page remis au formateur',
    scenario: "Le livrable de l'exercice noté est un document d'une page maximum réunissant les deux réponses. Voici sa structure et son contenu final, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'En-tête', body: "Exercice noté — Module 04 — Amani Kahindo — 15/04/2026." },
      { title: 'Partie 1 — Rapport vers présentation', body: "4 messages clés avec leur page source ; prompt PowerPoint exact (public, 8 diapositives maximum, ordre des messages) ; vigilance : présence et priorité des messages, exactitude des chiffres, nombre de diapositives, charte, relecture humaine." },
      { title: 'Partie 2 — Résumé de réunion', body: "Prompt Teams exact en trois blocs avec tableau horodaté et consigne « Non attribué » ; méthode de vérification en trois points (acceptation, échéance, fidélité) ; exemple de correction réellement effectuée." },
      { title: 'Pied de page', body: "Prompts ajoutés à la grille (lignes 17 à 20) ; suivi d'utilisation : 16 prompts, dont 15 testés." },
    ],
    tip: "Gardez ce corrigé comme modèle : sur votre prochain rapport et votre prochaine réunion, seuls les noms, les chiffres et le public changeront ; la structure du travail reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Rapport en présentation et réunion en compte-rendu actionnable',
    instructions: "Reprenez le cas du module avec vos propres documents : un rapport Word existant de votre service (ou, à défaut, le rapport fictif du fil rouge que vous reconstituez à partir des diapositives) et une réunion Teams réelle ou simulée. Appuyez-vous sur la procédure 4 pour la partie 1 et sur la procédure 5 pour la partie 2.",
    steps: [
      {
        title: 'Partie 1 — Transformation du rapport en présentation',
        actions: [
          "Remplissez la section 1 du guide (document, date, structuration) et corrigez les styles de titre si nécessaire.",
          "Listez dans la section 2 les 3 à 4 messages clés, chacun avec sa page ou section source.",
          "Rédigez dans la section 3 le prompt exact (public visé, contrainte de diapositives, ordre des messages).",
          "Listez au moins deux points de vigilance que vous vérifierez sur la structure générée avant le comité.",
        ],
      },
      {
        title: 'Partie 2 — Résumé de réunion actionnable',
        actions: [
          "Rédigez le prompt exact pour obtenir dans Teams un résumé en trois blocs (décisions, actions avec responsable, points non résolus).",
          "Décrivez précisément comment vous vérifierez l'attribution de chaque action avant diffusion.",
        ],
      },
    ],
    deliverable: "Un document d'une page maximum réunissant les deux réponses, rédigé comme si vous deviez le montrer à votre formateur pour validation.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Le registre carburant dans Excel",
    instructions: "Recopiez les 18 lignes du registre carburant présentées au début du module dans un classeur enregistré sur OneDrive, puis refaites la procédure 2 sans regarder les diapositives de procédure.",
    steps: [
      {
        title: 'Analyser',
        actions: [
          "Créez le tableau T_Carburant_T1 et notez les quatre totaux de contrôle.",
          "Obtenez avec Copilot le TCD Site × mois et la colonne Mois.",
          "Obtenez une formule qui donne le coût d'un véhicule pour un mois donné, avec son explication.",
        ],
      },
      {
        title: 'Contrôler',
        actions: [
          "Recalculez à la main une case du TCD et par formule une autre case.",
          "Faites détecter les pleins anormaux et classez-les (justifié / à justifier / erreur).",
          "Consignez votre prompt TCD dans la grille.",
        ],
      },
    ],
    tip: "Points de contrôle : total 8 539 USD ; Goma 5 175 USD ; mars 3 397 USD ; GOM-02 en mars 1 650 USD ; médiane des pleins 300 L. Si vos chiffres diffèrent, vérifiez d'abord la saisie des 18 lignes.",
    deliverable: "Un classeur avec T_Carburant_T1, la feuille TCD_Site_Mois, la feuille « Contrôle » (4 contrôles datés) et la ligne Excel ajoutée à la grille.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre semaine avec Copilot',
    instructions: "Pendant une semaine de travail réelle, appliquez au moins quatre procédures du module à vos propres tâches, dans le respect des règles d'usage des données de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Remplissez votre fiche de périmètre Copilot (procédure 1) et rangez vos sources dans le cloud.",
          "Choisissez quatre tâches réelles : une Excel, une Word ou PowerPoint, une Teams, une Outlook.",
        ],
      },
      {
        title: 'Exécuter et capitaliser',
        actions: [
          "Pour chaque tâche : prompt vérifiable, résultat, contrôle effectué, correction apportée.",
          "Ajoutez vos quatre prompts à la grille, avec un statut honnête.",
          "Étendez les formules de l'onglet « Suivi d'utilisation » et vérifiez le total.",
        ],
      },
    ],
    deliverable: "La grille de prompts complétée (au moins 4 nouvelles lignes), la fiche de périmètre, et pour chaque tâche une ligne « ce que Copilot a produit / ce que j'ai corrigé ».",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Vos messages clés sont 3 ou 4, chacun rédigé en phrase complète avec un chiffre ou une décision, et rattaché à une page ou section du document source.",
      "Le dernier message clé énonce la décision attendue du public.",
      "Votre prompt PowerPoint précise le public visé, le nombre maximal de diapositives et l'ordre des messages clés.",
      "Vous citez au moins deux points de vigilance vérifiables : présence et priorité des messages, exactitude des chiffres, nombre de diapositives, charte, relecture humaine.",
      "Votre prompt Teams impose les trois blocs et un tableau d'actions avec responsable et échéance.",
      "Votre prompt Teams interdit à Copilot de deviner un responsable (« Non attribué »).",
      "Votre méthode de vérification renvoie à la transcription et vérifie l'acceptation de l'action, pas seulement la présence de la personne.",
      "Votre document tient sur une page et pourrait être réutilisé tel quel par un collègue.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Lancer une synthèse élargie sans vérifier le périmètre : Copilot s'appuie sur des données incomplètes, obsolètes ou mal indexées sans prévenir. Exigez la liste des sources et cherchez ce qui manque.",
      "Accepter un chiffre ou une formule sans relecture critique : c'est votre nom qui est sur le rapport, pas celui de Copilot. Recalculez au moins deux valeurs connues.",
      "Utiliser RECHERCHEX ou INDEX + EQUIV là où plusieurs lignes répondent aux critères : seule la première est renvoyée. Utilisez SOMME.SI.ENS et testez sur un cas connu.",
      "Lancer Copilot sur une feuille Excel en vrac ou un Word sans styles de titre : le résultat est approximatif ou plat. Ctrl+T et Titre 1 / Titre 2 d'abord.",
      "Formuler des prompts vagues (« améliore ce texte », « fais-moi un résumé ») : nommez la source, la tâche, le format, le public et la justification attendue.",
      "Diffuser une présentation ou un rapport généré sans révision de la forme et de la charte : un brouillon automatique n'est jamais un livrable final.",
      "Ne pas activer la transcription des réunions Teams, ou régler Copilot sur « Uniquement pendant la réunion » : aucun résumé possible après coup.",
      "Diffuser un compte-rendu sans vérifier les responsables d'action : une phrase ambiguë à l'oral devient une attribution erronée par écrit.",
      "Envoyer un email généré à un partenaire sans relecture : un ton « professionnel » peut porter un engagement que personne n'a autorisé.",
      "Ajouter des prompts à la grille sans étendre les formules du suivi : votre capitalisation devient invisible.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez établi votre fiche de périmètre Copilot et appris à exiger la liste des sources avant de vous fier à une synthèse élargie.",
      "Vous avez analysé le registre carburant dans Excel avec Copilot : tableau structuré, TCD site × mois, colonne Mois, formule SOMME.SI.ENS expliquée, anomalies vérifiées sur pièces, et quatre contrôles datés.",
      "Vous avez rédigé une section de rapport Word à partir de notes et de chiffres contrôlés, retiré une recommandation sans constat, et produit une synthèse de 10 lignes.",
      "Vous avez rempli le guide de génération champ par champ et transformé un rapport de 12 pages en 8 diapositives relues, recalées sur la charte et signées.",
      "Vous avez produit un compte-rendu Teams en trois blocs dont chaque responsable a été vérifié dans la transcription — et corrigé une attribution erronée.",
      "Vous avez traité un fil de 14 emails, envoyé un email de suivi sans engagement non autorisé, et planifié une réunion de suivi paramétrée, au bon fuseau horaire.",
      "Vous avez capitalisé vos prompts dans la grille et rendu l'onglet de suivi juste : 16 prompts, dont 15 testés.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer, en une phrase, ce qui distingue Copilot d'un ChatGPT ou d'un Claude en termes d'accès aux données.",
      "Je sais identifier, avant de lancer une demande Copilot, sur quel périmètre de données elle va réellement porter.",
      "J'ai généré une présentation PowerPoint structurée à partir d'un document Word avec Copilot, en formulant un prompt précisant public et contrainte de diapositives.",
      "J'ai produit une section de rapport Word à partir de notes ou de données, en rattachant chaque recommandation à un constat.",
      "J'ai demandé à Copilot une analyse Excel (TCD ou formule complexe) de façon vérifiable, et j'ai contrôlé le résultat sur un échantillon connu.",
      "J'ai utilisé ou simulé Copilot dans Teams pour produire un résumé de réunion structuré en trois blocs, responsables vérifiés.",
      "J'ai rédigé un email de suivi avec Copilot dans Outlook et planifié une réunion avec ordre du jour et options vérifiées.",
      "Je sais citer au moins 3 pièges fréquents à éviter avec Copilot en contexte professionnel.",
      "J'ai complété le gabarit grille-prompts-copilot-office-teams.xlsx avec mes propres prompts testés.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « Perplexity AI — Recherche temps réel & veille stratégique ». Copilot travaille sur ce que votre organisation sait déjà ; Perplexity va chercher ce qu'elle ne sait pas encore — informations actualisées, sourcées et vérifiables. Vous y appliquerez le même réflexe que dans ce module : toujours savoir sur quelles sources repose une réponse avant de la transmettre.",
  },
]
