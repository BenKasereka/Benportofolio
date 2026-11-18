// Module 06 — Google Gemini : Multimodalité & Google Workspace
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (cadrage et gouvernance, analyse d'une capture, vérification,
// création d'un contenu multimodal, photos / audio / vidéo de terrain,
// brouillon Gmail récurrent, Sheets et Docs, guide d'automatisation) est
// détaillée étape par étape et appliquée au même fil rouge : le tableau de
// bord logistique du lundi matin d'Horizon Grands Lacs (semaines S21 à S28
// 2026). Organisation et personnes fictives ; chiffres recalculés à partir
// des valeurs affichées dans le tableau de bord du fil rouge.
export default [
  {
    type: 'cover',
    title: 'Google Gemini — Multimodalité & Google Workspace',
    hook: "À la fin de ce module, vous saurez transformer une capture de tableau de bord, une photo de facture, un mémo vocal ou une vidéo de visite en une synthèse que vous avez vérifiée chiffre par chiffre, la mettre en forme dans une note texte + visuel prête à l'envoi, et cadrer, tester et valider l'automatisation d'une tâche récurrente dans Gmail, Docs ou Sheets — avec un journal d'essais qui prouve qu'elle est fiable.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Décider ce qui peut être confié à Gemini, avec quel compte et par quel point d'entrée, en produisant une fiche de cadrage qui classe le contenu (vert / orange / rouge) et fixe le critère de réussite.",
      "Analyser une capture de tableau de bord ou un graphique à plusieurs séries avec un prompt adapté de la grille de prompts multimodaux, en produisant la synthèse brute de Gemini et votre prompt enregistré dans la grille (ligne 9).",
      "Vérifier systématiquement cette analyse avant usage, en produisant un tableau de recoupement affirmation par affirmation (valeur réelle, verdict) et un recalcul des écarts dans Google Sheets.",
      "Créer un contenu multimodal prêt à l'envoi, en produisant une note Google Docs de synthèse + capture annotée, exportée en PDF et envoyée par Gmail avec son dossier de preuve.",
      "Exploiter les contenus de terrain (photo de facture, mémo vocal, vidéo d'entrepôt) avec les lignes Image, Audio et Vidéo de la grille, en produisant trois extractions vérifiées contre la source.",
      "Automatiser un brouillon d'e-mail récurrent dans Gmail, puis une saisie et une note hebdomadaires dans Sheets et Docs, en produisant un brouillon testé sur trois occurrences réelles.",
      "Fiabiliser et valider une automatisation avec le guide d'automatisation Google Workspace, en produisant le guide complété (sections 1 à 5), son journal d'essais et sa checklist cochée preuves à l'appui.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une visite des fonctions de Gemini : vous allez produire, sur un seul cas suivi du début à la fin, une synthèse hebdomadaire fiable et son automatisation. Chaque procédure est découpée en étapes numérotées, avec les menus à ouvrir, les prompts exacts à copier, les chiffres attendus et la façon de vérifier que le résultat est juste.",
      "À la fin du module, vous aurez en main sept livrables réutilisables tels quels sur vos propres documents :",
    ],
    bullets: [
      "Une fiche de cadrage : compte utilisé, classement du contenu par sensibilité, point d'entrée choisi, critère de réussite.",
      "Une capture nette de tableau de bord et un prompt adapté, enregistré dans la grille de prompts multimodaux (onglet « Prompts multimodaux », ligne 9) avec l'onglet « Synthèse par type » à jour.",
      "Un tableau de recoupement des affirmations de Gemini (valeur réelle, verdict) et un classeur Sheets de recalcul des écarts.",
      "Une note texte + visuel dans Google Docs : synthèse de 5 lignes, capture annotée, source, statut de vérification, exportée en PDF.",
      "Trois extractions de terrain vérifiées : une facture photographiée, un mémo vocal, une vidéo de visite d'entrepôt.",
      "Un brouillon Gmail récurrent testé sur trois fils réels, plus un modèle de saisie Sheets et un gabarit de note Docs pour la routine hebdomadaire.",
      "Le « Guide d'automatisation Google Workspace avec Gemini » complété : tâche, approche, journal d'essais (3 essais minimum), checklist de vérification, validation.",
    ],
    tip: "Pour suivre les manipulations en direct, ouvrez dès maintenant la grille de prompts multimodaux (04-templates/grille-prompts-multimodaux-gemini.xlsx) et le guide d'automatisation (04-templates/guide-automatisation-google-workspace.docx), et préparez une capture de votre propre tableau de bord — ou celle que vous construirez à l'étape 2 de la procédure 2 à partir des valeurs du fil rouge.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : le tableau de bord logistique du lundi 13 juillet 2026',
    body: [
      "Horizon Grands Lacs est une organisation fictive qui opère trois sites : Goma, Bukavu et Kinshasa. Son réseau d'entrepôts régionaux est suivi par région : Nord (Goma), Sud (Bukavu) et Ouest (Kinshasa). Amani Kahindo, chargée administrative et logistique à Goma, reçoit chaque lundi à 7 h 45 la capture d'écran du tableau de bord hebdomadaire généré par l'outil de gestion d'entrepôt, auquel elle n'a qu'un accès en lecture. Le logisticien de Bukavu, Jérémie Bahati, et le responsable achats, Patrick Mumbere, contribuent au suivi ; Grâce Ilunga administre Google Workspace pour l'organisation.",
      "Le lundi 13 juillet 2026, le directeur des opérations, Samuel Baraka, demande à Amani un paragraphe de synthèse en français, avant 10 h, pour son rapport hebdomadaire à la directrice pays Furaha Bisimwa. Condition posée par Samuel : « Je ne transmets rien que tu n'aies pas vérifié. » Le tableau de bord couvre les semaines S21 à S28 (du 18 mai au 12 juillet 2026) et affiche quatre indicateurs, chacun avec sa tendance sur 8 semaines et son seuil d'alerte.",
    ],
    table: {
      columns: ['Indicateur affiché', 'Seuil d\'alerte', 'Valeur S21', 'Valeur S28', 'Écart'],
      rows: [
        ['Rupture de stock — Nord (bleu)', '8 %', '9,6 %', '8,1 %', '− 1,5 point'],
        ['Rupture de stock — Sud (orange)', '8 %', '7,2 %', '10,5 %', '+ 3,3 points'],
        ['Rupture de stock — Ouest (rouge)', '8 %', '5,1 %', '5,4 %', '+ 0,3 point'],
        ['Délai moyen de livraison', '4,0 jours', '3,8 jours', '4,6 jours', '+ 0,8 jour'],
        ['Taux de retour', '3,0 %', '2,9 %', '2,6 %', '− 0,3 point'],
        ['Coût de transport par km', '1,50 USD/km', '1,42 USD/km', '1,55 USD/km', '+ 0,13 USD/km'],
      ],
    },
    tip: "Pas de tableau de bord sous la main ? Saisissez ces valeurs dans un Google Sheets (une ligne par semaine, de S21 à S28 ; la série complète est donnée à l'étape 2 de la procédure 2), insérez un graphique en courbes à trois séries, faites une capture d'écran : vous obtenez une capture équivalente à celle du fil rouge pour vous entraîner.",
  },
  {
    type: 'concept',
    title: 'La carte du module : 8 procédures, dans l\'ordre où vous les exécuterez',
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. Ne sautez aucune étape : une erreur non détectée dans la lecture d'une capture se retrouve, devenue une phrase assurée, dans le rapport de la directrice pays.",
    bullets: [
      "Procédure 1 — Cadrer l'usage de Gemini (4 étapes) : compte et politique de l'organisation, classement du contenu, point d'entrée, critère de réussite.",
      "Procédure 2 — Préparer le contenu visuel et formuler la demande (7 étapes) : capture nette, témoins de lecture, grille de prompts, prompt Image, lancement, variante Graphique, enregistrement dans la grille.",
      "Procédure 3 — Vérifier l'analyse avant usage (6 étapes) : affirmations, recoupement, tendances et légende, recalcul, correction, verdict.",
      "Procédure 4 — Intégrer la synthèse et créer le contenu multimodal (5 étapes) : synthèse finale, capture annotée, note Docs, envoi Gmail, dossier de preuve.",
      "Procédure 5 — Exploiter photos, audio et vidéo de terrain (6 étapes) : facture photographiée, mémo vocal, vidéo d'entrepôt, chacun suivi de sa vérification.",
      "Procédure 6 — Automatiser un brouillon d'e-mail récurrent dans Gmail (5 étapes).",
      "Procédure 7 — Automatiser une saisie et une note hebdomadaires dans Sheets et Docs (3 étapes).",
      "Procédure 8 — Fiabiliser et valider avec le guide d'automatisation (5 étapes, une par section du guide).",
    ],
  },
  {
    type: 'concept',
    title: 'La multimodalité, concrètement',
    body: [
      "Une IA purement textuelle ne « voit » rien : vous décrivez, elle répond à votre description. Si votre graphique compte six courbes aux légendes en petit texte, vous devez d'abord le transcrire en mots avant de pouvoir poser une question dessus — et la transcription prend souvent plus de temps que l'analyse à l'œil, tout en introduisant vos propres erreurs.",
      "Gemini est nativement multimodal : il traite texte, image, audio et vidéo dans la même conversation, sans étape de conversion intermédiaire. Vous glissez une capture, une photo, un mémo vocal ou un extrait vidéo et vous posez votre question directement dessus, comme vous le feriez avec un collègue à qui vous montrez le document.",
    ],
    example: {
      title: 'Même tâche, deux méthodes — fil rouge',
      lines: [
        "Méthode texte : Amani retape dans le chat « Nord 9,6 puis 10,4 puis 11,9… » pour 3 régions × 8 semaines = 24 valeurs, plus les seuils. Durée : une douzaine de minutes, et un risque de faute de frappe par valeur.",
        "Méthode multimodale : Amani glisse la capture et écrit le prompt. Durée : 2 minutes, et aucune retranscription de sa part — mais une vérification obligatoire de ce que Gemini a lu.",
      ],
    },
    highlight: "Le repère à retenir : avant de décrire un contenu visuel en mots pour l'IA, demandez-vous si vous ne pourriez pas simplement le lui soumettre directement.",
  },
  {
    type: 'comparison-table',
    title: 'Montrer ou écrire ? Le critère de choix',
    columns: ['Situation', 'Plus rapide à…', 'Pourquoi', 'Exemple dans le fil rouge'],
    rows: [
      ['Graphique à plusieurs séries et seuils', 'Montrer', 'Le décrire en mots prend plus de temps que l\'analyser et introduit des erreurs de retranscription', 'Le tableau de bord du lundi : 4 indicateurs, 3 courbes de rupture, 8 semaines'],
      ['Photo d\'un document froissé ou d\'un état des lieux', 'Montrer', 'La saisie manuelle des lignes est longue et source d\'erreurs', 'Photo d\'une facture de transport d\'Alpha Logistics à Kinshasa'],
      ['Enregistrement vocal ou extrait de réunion', 'Montrer (soumettre)', 'Évite de réécouter en entier pour un premier passage', 'Mémo vocal de 3 minutes de Jérémie Bahati, depuis l\'entrepôt de Bukavu'],
      ['Reformuler un paragraphe, structurer un plan', 'Écrire', 'La multimodalité n\'apporte rien : le texte brut est la voie la plus directe', 'Reformuler la phrase d\'introduction de la note de Samuel'],
      ['Question sur un chiffre précis déjà saisi dans un tableur', 'Écrire / lire en place', 'Une formule ou une lecture en place est exacte, une lecture d\'image ne l\'est pas toujours', 'Écart S21 → S28 : à calculer dans Sheets, pas à demander à Gemini'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Chat autonome ou intégration native : quel point d\'entrée ?',
    columns: ['Point d\'entrée', 'À utiliser pour', 'Avantage', 'Précaution'],
    rows: [
      ['Chat autonome (gemini.google.com)', 'Analyser un fichier isolé : image, PDF, enregistrement, vidéo', 'Vous maîtrisez exactement ce que vous déposez', 'Connectez-vous avec le compte professionnel, jamais un compte personnel'],
      ['Gemini dans Gmail', 'Rédiger une réponse à un fil existant', 'Accès direct au contexte de l\'échange, sans copier-coller', 'Vérifiez les chiffres et noms repris du fil avant d\'envoyer'],
      ['Gemini dans Docs', 'Rédiger ou réviser une note à partir d\'un document', 'Lit le document sous vos yeux', 'Un document confidentiel le reste : contrôlez le partage'],
      ['Gemini dans Sheets', 'Analyser une plage, proposer une formule ou un tableau', 'Travaille sur les vraies cellules', 'Contrôlez toute formule proposée sur 2 ou 3 lignes à la main'],
      ['Gemini dans Slides / Meet', 'Créer des diapositives, résumer une réunion', 'Même logique d\'accès natif', 'La politique de l\'administrateur Workspace décide de ce qui est traité'],
    ],
  },
  {
    type: 'warning',
    title: "Les précautions de gouvernance liées à l'accès natif",
    items: [
      "Un document Google confidentiel reste confidentiel une fois que Gemini y a accès : vérifiez les paramètres de partage et de rétention de votre organisation avant de traiter des données sensibles (RH, finances, bénéficiaires).",
      "L'accès natif ne dispense jamais de la relecture humaine : le niveau de vérification attendu est identique, que Gemini lise directement votre Sheets ou que vous lui ayez collé un extrait.",
      "C'est la politique de l'administrateur Workspace qui détermine ce que Gemini peut traiter — pas votre seul jugement individuel. En cas de doute, la question se pose avant l'usage, pas après.",
      "C'est la même logique que Microsoft Copilot dans Office 365 (Module 04) : un assistant à accès natif à vos données de travail, donc les mêmes précautions de gouvernance.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '3 cas',
    caption: "où le levier multimodal est net : tableaux de bord et graphiques complexes, photos et documents de terrain, enregistrements audio et vidéo courts.",
    context: "Dans les trois cas, la multimodalité accélère l'extraction de l'information, elle ne remplace pas le contrôle de son exactitude. Le fil rouge du module les parcourt tous les trois : la capture du lundi, la facture d'Alpha Logistics, le mémo vocal et la vidéo de Bukavu.",
  },
  {
    type: 'concept',
    title: 'Ce que la multimodalité ne change pas',
    body: [
      "Gemini reste un modèle de langage : il produit la réponse la plus plausible compte tenu de ce qu'il « voit », ce n'est pas un instrument de mesure certifié. Sur une image nette aux chiffres lisibles, le taux d'erreur est faible. Sur un graphique à légende ambiguë, une photo prise de biais ou un audio bruité, le risque de mauvaise lecture augmente — et l'IA ne signale pas systématiquement son incertitude : elle répond avec la même assurance qu'elle ait bien ou mal interprété le document.",
      "C'est cette caractéristique, plus que la technologie elle-même, qui justifie la vérification systématique enseignée dans ce module.",
    ],
    example: {
      title: 'Ce qui arrive vraiment — extrait du fil rouge',
      lines: [
        "Sur la capture du 13 juillet, les courbes Sud (orange) et Ouest (rouge) ont des couleurs voisines.",
        "Gemini attribue au Sud les valeurs de l'Ouest et inversement, sans le moindre signe d'hésitation : « Sud : 5,4 %, stable ; Ouest : 10,5 %, en hausse. »",
        "Résultat s'il n'y avait pas eu de vérification : le directeur des opérations envoie des renforts de stock à Kinshasa alors que la rupture se joue à Bukavu.",
      ],
    },
    pitfall: "Prendre la fluidité de la réponse pour un indice de fiabilité : une erreur de lecture est formulée avec la même assurance qu'une lecture exacte.",
  },
  {
    type: 'concept',
    title: "Anatomie d'un prompt multimodal efficace",
    body: [
      "Ne demandez jamais simplement « analyse ce graphique ». Le prompt détermine l'essentiel de la qualité du résultat. Il contient toujours trois éléments, plus deux garde-fous qui facilitent la vérification.",
    ],
    bullets: [
      "Le format de sortie : une synthèse de 5 lignes, un tableau, une liste d'alertes — avec la langue et le ton.",
      "Les éléments à identifier : chaque indicateur avec sa valeur actuelle et sa tendance, la série la plus variable, toute anomalie visible.",
      "Le public destinataire : un rapport pour la direction n'a pas le même niveau de détail qu'une note technique interne.",
      "Garde-fou 1 — l'interdiction d'inventer : « si un chiffre n'est pas lisible, écris illisible ».",
      "Garde-fou 2 — la liste des valeurs lues : « termine par la liste des chiffres que tu as lus, un par ligne » ; c'est elle que vous recouperez.",
    ],
    example: {
      title: 'Avant / après sur le fil rouge',
      lines: [
        "À éviter : « Analyse ce tableau de bord. »",
        "À utiliser : « Identifie chaque indicateur (nom, valeur en S28, valeur en S21, tendance), rédige une synthèse de 5 lignes maximum pour le directeur des opérations, signale les 2 indicateurs à traiter en priorité avec le seuil d'alerte affiché, n'invente aucune valeur et termine par la liste des chiffres lus. »",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'La grille de prompts multimodaux : un contenu, un prompt, un point de vérification',
    columns: ['Type de contenu', 'Tâche visée', 'Prompt de la grille (principe)', 'Point de vérification associé'],
    rows: [
      ['Image', 'Extraire les données d\'un graphique de KPI logistique capturé en image', 'Identifier chaque indicateur (nom, valeur, tendance), synthèse de 5 lignes maximum, 2 indicateurs à surveiller en priorité', 'Comparer chaque chiffre cité aux valeurs réelles de l\'image ; vérifier qu\'aucune tendance n\'est inversée'],
      ['Graphique', 'Analyser un graphique en courbes à plusieurs séries', 'Lister les séries avec leur code couleur, identifier la plus forte variation, signaler anomalies et ruptures de tendance', 'Vérifier légende et unités de l\'axe Y sur le graphique original : deux séries de couleurs proches peuvent être confondues'],
      ['Audio', 'Résumer un mémo vocal ou un extrait de réunion', 'Compte-rendu structuré : décisions, actions avec responsable, points en suspens, questions non tranchées', 'Réécouter les passages où un nom propre, un chiffre ou une date est cité'],
      ['Vidéo', 'Synthétiser une vidéo de visite terrain ou de démonstration', 'Rapport structuré : segments avec horodatage approximatif, anomalies visibles, recommandation priorisée', 'Visionner les segments signalés pour confirmer horodatage et nature exacte du problème'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Multimodalité', definition: "Capacité d'un modèle IA à traiter plusieurs types de contenus (texte, image, audio, vidéo) au sein d'une même requête, sans conversion préalable en texte." },
      { term: 'Intégration native', definition: "Accès direct d'un assistant IA aux documents et applications dans lesquels il est intégré (Gmail, Docs, Sheets, Slides, Meet), par opposition à un outil externe auquel il faut copier-coller le contenu." },
      { term: 'Gouvernance des données', definition: "Règles définies par une organisation (souvent portées par l'IT ou l'administrateur Workspace) sur ce que les outils IA intégrés peuvent traiter, conserver ou partager, en particulier pour les données sensibles." },
      { term: 'Point de vérification', definition: "Contrôle précis associé à chaque type de contenu dans la grille de prompts : ce que vous recoupez, et avec quoi, avant d'utiliser le résultat." },
      { term: 'Valeur témoin', definition: "Chiffre que vous lisez vous-même sur la capture avant l'envoi à Gemini, pour disposer d'une référence indépendante de la lecture de l'IA." },
      { term: 'Journal d\'essais', definition: "Tableau du guide d'automatisation où chaque essai est consigné : date, résultat obtenu, écart constaté, ajustement apporté. Trois essais minimum avant de parler de fiabilité." },
      { term: 'Cas limite', definition: "Entrée inhabituelle (donnée manquante, format différent, ligne vide) sur laquelle une automatisation qui marche sur le cas standard peut échouer en silence." },
    ],
  },

  // ───────────── Procédure 1 — Cadrer l'usage de Gemini ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Choisir le bon compte et connaître ce que l\'organisation autorise',
    intro: "Avant de déposer la moindre capture, vous devez savoir avec quel compte vous travaillez et ce que votre organisation autorise. Cette étape prend cinq minutes et évite d'avoir à justifier a posteriori un dépôt de données. Entrées nécessaires : votre accès Google Workspace professionnel et le nom de la personne qui l'administre.",
    steps: [
      {
        title: 'Vérifier le compte connecté',
        actions: [
          "Ouvrez gemini.google.com dans votre navigateur.",
          "Cliquez sur la pastille de profil en haut à droite : l'adresse affichée doit être votre adresse professionnelle (par exemple prenom.nom@organisation.org), pas une adresse personnelle.",
          "Si c'est une adresse personnelle, cliquez sur « Ajouter un compte » ou « Changer de compte » et connectez-vous avec le compte professionnel. Fermez tout onglet resté sur le compte personnel.",
        ],
      },
      {
        title: 'Obtenir les règles de l\'organisation',
        actions: [
          "Repérez la personne qui administre Google Workspace (administrateur IT) et la politique d'usage de l'IA de l'organisation, si elle existe.",
          "Posez-lui trois questions écrites : Gemini est-il activé pour mon compte ? Quels types de données ne doivent jamais lui être soumis ? Les fichiers déposés sont-ils conservés, et combien de temps ?",
          "Notez les réponses et la date dans votre fiche de cadrage.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — échange du lundi 13 juillet 2026, 7 h 55',
      lines: [
        "Amani à Grâce Ilunga (administratrice Workspace) : « Puis-je déposer dans Gemini la capture du tableau de bord logistique ? Y a-t-il des données à ne jamais soumettre ? »",
        "Réponse de Grâce à 8 h 02 : « Oui pour les tableaux de bord et les documents logistiques avec ton compte pro. Jamais de données RH, de listes de bénéficiaires ni de pièces d'identité. Les photos de factures fournisseurs sont autorisées. Ne partage aucun fichier en dehors du domaine. »",
        "Fiche de cadrage, ligne 1 : « Compte : amani.kahindo@(domaine de l'organisation) — Gemini activé — interdits : RH, bénéficiaires, identités — consigné le 13/07/2026 à 8 h 02. »",
      ],
    },
    result: "Une première ligne de la fiche de cadrage : compte professionnel confirmé, périmètre autorisé par écrit, interdits notés, date et heure.",
    pitfall: "Supposer qu'un outil accessible dans votre navigateur est un outil autorisé. La politique de l'administrateur décide, pas votre jugement individuel ; la question se pose avant l'usage, pas après.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Classer le contenu à traiter selon sa sensibilité',
    intro: "Tous les contenus ne se valent pas : une capture d'indicateurs agrégés n'a pas le même risque qu'un mémo vocal où des agents parlent d'un collègue. Ce classement vert / orange / rouge décide si vous pouvez déposer tel quel, après masquage, ou pas du tout. Entrées nécessaires : la liste de ce que vous voulez confier à Gemini et les interdits de l'étape précédente.",
    steps: [
      {
        title: 'Lister puis classer chaque contenu',
        actions: [
          "Écrivez la liste des contenus prévus (une ligne par contenu) dans votre fiche de cadrage.",
          "Pour chaque ligne, répondez à trois questions : contient-il des noms de personnes ? Des données financières nominatives ? Des données RH ou bénéficiaires ?",
          "Attribuez la couleur : vert = aucune donnée sensible, dépôt autorisé ; orange = donnée à masquer ou à anonymiser avant dépôt ; rouge = ne pas déposer, traiter sans IA ou demander l'accord de l'administrateur.",
        ],
      },
      {
        title: 'Préparer les contenus orange',
        actions: [
          "Masquez les noms et visages non nécessaires (outil de capture : rectangle plein sur la zone, pas un simple flou léger).",
          "Pour un enregistrement, vérifiez qui parle et si des tiers sont cités nommément ; limitez-vous à l'extrait utile.",
          "Conservez l'original hors de Gemini, dans votre dossier de travail.",
        ],
      },
    ],
    table: {
      columns: ['Contenu du fil rouge', 'Données sensibles ?', 'Classe', 'Décision'],
      rows: [
        ['Capture du tableau de bord (indicateurs agrégés par région)', 'Aucune', 'Vert', 'Dépôt autorisé'],
        ['Photo de la facture d\'Alpha Logistics', 'Données fournisseur (autorisées par l\'administratrice) ; coordonnées bancaires visibles en bas', 'Orange', 'Masquer le bloc IBAN avant dépôt'],
        ['Mémo vocal de Jérémie Bahati', 'Voix d\'un agent ; cite le responsable achats', 'Orange', 'Accord de Jérémie, extrait limité au sujet stock'],
        ['Vidéo de visite de l\'entrepôt de Bukavu', 'Des agents apparaissent à l\'image', 'Orange', 'Cadrer sans visages ou obtenir l\'accord des personnes filmées'],
        ['Liste du personnel avec contrats', 'Données RH', 'Rouge', 'Ne jamais déposer'],
      ],
    },
    result: "Une table de classement dans la fiche de cadrage : chaque contenu a sa couleur, sa décision, et les contenus orange sont préparés avant tout dépôt.",
    tip: "En cas de doute entre orange et rouge, choisissez rouge et posez la question à l'administrateur : une demande de précision prend deux minutes, une fuite de données ne se rattrape pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Décider : montrer ou décrire, et choisir le point d\'entrée',
    intro: "Deux décisions rapides déterminent la suite : Gemini doit-il vraiment voir le contenu, et depuis quelle porte d'entrée ? Le critère est celui du repère du module : tout ce qui est plus rapide à montrer qu'à décrire se soumet directement.",
    steps: [
      {
        title: 'Appliquer le test « montrer ou décrire »',
        actions: [
          "Posez la question pour chaque contenu : puis-je le décrire fidèlement en moins d'une minute ? Si non, soumettez-le directement.",
          "Si la tâche est purement rédactionnelle (reformuler, structurer un plan), n'utilisez pas la multimodalité : écrivez directement dans le chat.",
        ],
      },
      {
        title: 'Choisir le point d\'entrée',
        actions: [
          "Fichier isolé (capture, photo, enregistrement, vidéo, PDF) : utilisez le chat autonome, gemini.google.com.",
          "Tâche sur un document déjà ouvert (fil Gmail, note Docs, tableau Sheets) : utilisez l'icône Gemini de l'application, en haut à droite de la fenêtre ; le contenu est lu sans copier-coller.",
          "Si l'icône Gemini est absente de l'application, c'est que la fonction n'est pas activée pour votre compte ou votre édition : revenez à l'administrateur plutôt que d'essayer un compte personnel.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — décisions d\'Amani',
      lines: [
        "Capture du tableau de bord : plus rapide à montrer (24 valeurs et 4 seuils) → chat autonome, fichier isolé.",
        "Brouillon de réponse à Alpha Logistics : fil Gmail déjà ouvert → Gemini dans Gmail.",
        "Reformuler la phrase d'accroche de la note : tâche purement rédactionnelle → texte seul, sans pièce jointe.",
      ],
    },
    result: "Pour chaque tâche, un point d'entrée choisi et justifié en une phrase dans la fiche de cadrage.",
    tip: "L'emplacement exact des icônes et des libellés varie selon la langue, l'édition Workspace et les mises à jour : si votre écran diffère des indications du module, cherchez l'icône Gemini ou « Aidez-moi à écrire » et suivez le même raisonnement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Fixer le livrable attendu, l\'échéance et le critère de réussite',
    intro: "Sans critère de réussite, vous ne saurez jamais si l'analyse est « assez bonne ». Écrivez en trois lignes ce que vous devez remettre, à qui, pour quand, et ce qui sera vérifié. Cette fiche sert aussi de réponse à la question « pourquoi avoir fait confiance à ce chiffre ? ».",
    steps: [
      {
        title: 'Écrire la commande en trois lignes',
        actions: [
          "Ligne 1 — Livrable : format et longueur (un paragraphe de 5 lignes, une note d'une page, un brouillon d'e-mail).",
          "Ligne 2 — Destinataire et échéance : qui lit, à quelle heure au plus tard.",
          "Ligne 3 — Critère de réussite : « aucun chiffre transmis sans recoupement avec la source ; chaque erreur de lecture consignée ».",
        ],
      },
      {
        title: 'Planifier la vérification',
        actions: [
          "Réservez dans votre emploi du temps un créneau de vérification qui précède l'échéance : au moins autant de temps que l'analyse elle-même.",
          "Identifiez qui sera votre second regard si l'enjeu le justifie.",
        ],
      },
    ],
    example: {
      title: 'Fiche de cadrage du fil rouge — lundi 13 juillet 2026',
      lines: [
        "Livrable : un paragraphe de synthèse de 5 lignes maximum, en français professionnel, accompagné de la capture annotée.",
        "Destinataire : Samuel Baraka, directeur des opérations, avant 10 h ; pour le rapport à Furaha Bisimwa.",
        "Critère de réussite : chaque chiffre recoupé avec la capture ; toute affirmation de Gemini non confirmée est corrigée ou retirée ; erreurs consignées.",
        "Planning : analyse 8 h 15-8 h 30 ; vérification 8 h 30-9 h 10 ; rédaction 9 h 10-9 h 35 ; envoi avant 9 h 45. Second regard : Patrick Mumbere sur deux chiffres clés.",
      ],
    },
    result: "Une fiche de cadrage complète (compte, classement, points d'entrée, livrable, échéance, critère de réussite) qui tient sur une demi-page.",
    pitfall: "Consacrer tout le temps disponible à la production et aucun à la vérification : à 9 h 50, vous enverriez la synthèse brute de Gemini, avec ses erreurs.",
  },

  // ───────────── Procédure 2 — Préparer le contenu visuel et formuler la demande ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Obtenir une capture nette et complète',
    intro: "Gemini ne peut analyser que ce qu'il peut lire. Une capture floue, coupée ou sans légende est la première cause d'erreurs. Entrée nécessaire : le tableau de bord ouvert à l'écran (ou le fichier image reçu).",
    steps: [
      {
        title: 'Capturer tout ce qui porte du sens',
        actions: [
          "Affichez le tableau de bord en plein écran, zoom à 100 %.",
          "Sous Windows, appuyez sur Windows + Maj + S ; sous macOS, Cmd + Maj + 4 ; tracez un rectangle qui englobe les graphiques, leurs légendes, les unités des axes, les seuils d'alerte et la période.",
          "Vérifiez que le titre, la date d'extraction et les noms de séries sont dans la zone capturée.",
        ],
      },
      {
        title: 'Enregistrer sous un nom parlant',
        actions: [
          "Enregistrez l'image en PNG (le JPEG compresse les petits caractères) dans le dossier de travail du jour.",
          "Nommez-la 2026-07-13_tableau-bord-logistique_S21-S28.png.",
          "Si le tableau de bord arrive déjà en image par e-mail, enregistrez la pièce jointe telle quelle sans la retoucher.",
        ],
      },
    ],
    example: {
      title: 'Ce que doit contenir la capture du fil rouge',
      lines: [
        "Titre : « Tableau de bord logistique — Horizon Grands Lacs — S21 à S28 2026 ».",
        "Quatre blocs : rupture de stock par région (3 courbes : Nord bleu, Sud orange, Ouest rouge), délai moyen de livraison, taux de retour, coût de transport par km.",
        "Pour chaque bloc : unité de l'axe (%, jours, USD/km), ligne de seuil d'alerte, valeurs S21 et S28 visibles.",
      ],
    },
    result: "Un fichier PNG net, nommé et daté, qui montre les quatre blocs complets avec légendes, unités, seuils et période.",
    pitfall: "Capturer seulement la partie « intéressante » : si le seuil ou la légende est hors cadre, Gemini devine ce qu'il ne voit pas — et vous ne pourrez plus recouper.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Contrôler la lisibilité et relever vos valeurs témoins',
    intro: "Avant l'envoi, vous lisez vous-même quelques chiffres de la capture : ce sont vos valeurs témoins. Elles vous donnent une référence indépendante de Gemini pour détecter une erreur de lecture. Entrée nécessaire : la capture enregistrée.",
    steps: [
      {
        title: 'Tester la lisibilité',
        actions: [
          "Ouvrez la capture et agrandissez-la à 100 % : pouvez-vous lire sans effort les plus petits caractères (légende, valeurs, seuils) ?",
          "Si un élément est illisible pour vous, il le sera pour Gemini : refaites la capture à une résolution supérieure ou agrandissez la zone dans l'outil source.",
        ],
      },
      {
        title: 'Relever cinq valeurs témoins',
        actions: [
          "Notez dans un bloc-notes cinq chiffres que vous lisez nettement : par exemple la valeur S28 de chaque région, le délai, le seuil de rupture.",
          "Associez chaque valeur à sa couleur de série et à son unité.",
          "Choisissez de préférence des valeurs dont la lecture est délicate (courbes voisines) : ce sont celles que l'IA risque le plus de confondre.",
        ],
      },
    ],
    table: {
      columns: ['Semaine', 'Nord (bleu)', 'Sud (orange)', 'Ouest (rouge)', 'Délai (jours)', 'Retour (%)', 'Coût (USD/km)'],
      rows: [
        ['S21', '9,6', '7,2', '5,1', '3,8', '2,9', '1,42'],
        ['S22', '10,4', '7,6', '5,0', '3,8', '3,1', '1,43'],
        ['S23', '11,9', '8,0', '5,2', '3,9', '3,2', '1,44'],
        ['S24', '12,4', '8,9', '5,3', '4,0', '3,0', '1,46'],
        ['S25', '11,0', '9,4', '5,5', '4,1', '2,9', '1,48'],
        ['S26', '9,8', '9,9', '5,3', '4,3', '2,8', '1,50'],
        ['S27', '8,7', '10,2', '5,2', '4,5', '2,7', '1,53'],
        ['S28', '8,1', '10,5', '5,4', '4,6', '2,6', '1,55'],
      ],
    },
    example: {
      title: 'Valeurs témoins relevées par Amani (8 h 12)',
      lines: [
        "Nord bleu S28 = 8,1 % — Sud orange S28 = 10,5 % — Ouest rouge S28 = 5,4 %",
        "Délai S28 = 4,6 jours (seuil 4,0) — Coût S28 = 1,55 USD/km (seuil 1,50)",
        "Le tableau ci-dessus donne la série complète du fil rouge : saisissez-la dans un Google Sheets et insérez un graphique en courbes pour obtenir une capture d'entraînement.",
      ],
    },
    result: "Cinq valeurs témoins notées avec leur couleur et leur unité, et la certitude que la capture est lisible en entier.",
    tip: "Les valeurs témoins ne servent pas à refaire le travail de Gemini mais à tester sa fiabilité sur cette capture précise : si deux témoins sur cinq sont faux dans sa réponse, tout le reste est suspect.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Ouvrir la grille de prompts multimodaux et lire la ligne « Image »',
    intro: "La grille de prompts multimodaux est une bibliothèque de formulations déjà testées : vous les adaptez plutôt que de repartir de zéro. Elle contient deux onglets. Entrée nécessaire : le fichier 04-templates/grille-prompts-multimodaux-gemini.xlsx, ouvert dans Excel ou importé dans Google Sheets.",
    steps: [
      {
        title: 'Parcourir l\'onglet « Prompts multimodaux »',
        actions: [
          "Repérez le titre en A1 (« Grille de prompts multimodaux — Gemini ») et le sous-titre du module en A2.",
          "Lisez les en-têtes de la ligne 4 : A « Type de contenu », B « Tâche visée », C « Prompt à utiliser », D « Point de vérification ».",
          "Lisez les lignes 5 à 8 : une par type de contenu — Image (ligne 5), Graphique (ligne 6), Audio (ligne 7), Vidéo (ligne 8). Les lignes 9 à 11 sont libres pour vos propres prompts.",
        ],
      },
      {
        title: 'Lire la ligne Image en détail',
        actions: [
          "Cellule B5 : la tâche visée — extraire les données d'un graphique de KPI logistique capturé en image.",
          "Cellule C5 : le prompt — identifier chaque indicateur (nom, valeur actuelle, tendance), rédiger une synthèse de 5 lignes maximum en français professionnel, signaler les 2 indicateurs qui nécessitent une attention immédiate.",
          "Cellule D5 : le point de vérification — comparer chaque chiffre cité aux valeurs réelles de l'image, vérifier qu'aucune tendance n'est inversée (une hausse lue comme une baisse).",
        ],
      },
    ],
    example: {
      title: 'Structure de la grille (ce que vous avez sous les yeux)',
      lines: [
        "Onglet « Prompts multimodaux » : colonnes A à D, en-têtes ligne 4, quatre prompts prêts (lignes 5 à 8), trois lignes libres (9 à 11).",
        "Onglet « Synthèse par type » : tableau « Type de contenu | Nombre de prompts enregistrés », lignes Image, Graphique, Audio, Vidéo, Total ; calculé automatiquement par des formules NB.SI sur la colonne A de l'onglet 1 (A5:A11).",
        "Point d'attention : l'onglet « Synthèse par type » n'est pas à modifier à la main, les formules le mettent à jour.",
      ],
    },
    result: "Vous savez où se trouvent le prompt de départ (C5), son point de vérification (D5) et les lignes libres où enregistrer vos propres versions.",
    tip: "Lisez toujours la colonne D avant la colonne C : savoir ce que vous allez vérifier vous aide à écrire un prompt qui facilite le contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Adapter le prompt « Image » à votre tableau de bord',
    intro: "Le prompt de la grille est un point de départ : il ne connaît ni votre période, ni vos régions, ni votre destinataire. Vous le complétez avec les trois éléments de l'anatomie d'un prompt et les deux garde-fous. Entrée nécessaire : le prompt C5, votre fiche de cadrage.",
    steps: [
      {
        title: 'Ajouter le contexte, le public et le format',
        actions: [
          "Copiez le texte de la cellule C5 dans un éditeur de texte.",
          "Ajoutez le contexte : nom du tableau de bord, période (S21 à S28 2026), correspondance région / site (Nord = Goma, Sud = Bukavu, Ouest = Kinshasa).",
          "Ajoutez le public destinataire : le directeur des opérations, pour un rapport à la direction.",
          "Précisez le format : 5 lignes maximum, français professionnel.",
        ],
      },
      {
        title: 'Ajouter les garde-fous',
        actions: [
          "Demandez les alertes avec le seuil affiché : « cite leur valeur et le seuil d'alerte indiqué sur le tableau de bord ».",
          "Interdisez l'invention : « si un chiffre n'est pas lisible, écris illisible ».",
          "Exigez la liste des valeurs lues, une par ligne, avec la couleur de la série et l'unité.",
        ],
      },
    ],
    example: {
      title: 'Prompt adapté — fil rouge (à copier)',
      lines: [
        "« Voici une capture d'écran du tableau de bord logistique hebdomadaire d'Horizon Grands Lacs, semaines S21 à S28 2026. Les régions Nord, Sud et Ouest correspondent aux sites de Goma, Bukavu et Kinshasa.",
        "Identifie chaque indicateur affiché (nom, valeur en S28, valeur en S21, tendance), puis rédige une synthèse de 5 lignes maximum en français professionnel, destinée au directeur des opérations pour son rapport à la direction.",
        "Signale les 2 indicateurs qui nécessitent une attention immédiate, en citant leur valeur et le seuil d'alerte affiché sur le tableau de bord.",
        "N'invente aucune valeur : si un chiffre n'est pas lisible, écris « illisible ». Termine par la liste des chiffres que tu as lus, un par ligne, avec la couleur de la série et l'unité. »",
      ],
    },
    result: "Un prompt complet qui reprend le prompt de la grille (identification des indicateurs, synthèse de 5 lignes, 2 alertes) enrichi du contexte, du public et des garde-fous.",
    pitfall: "Supprimer la consigne « liste des chiffres lus » pour raccourcir : c'est elle qui rend la vérification rapide, car vous comparez deux listes au lieu de relire toute la synthèse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Lancer l\'analyse dans Gemini et lire la réponse brute',
    intro: "Vous soumettez la capture et le prompt dans le chat autonome, avec le compte professionnel. La réponse que vous obtenez est un brouillon à vérifier, pas un résultat : lisez-la comme un relecteur qui a ses valeurs témoins en main.",
    steps: [
      {
        title: 'Soumettre la capture et le prompt',
        actions: [
          "Dans gemini.google.com, ouvrez une nouvelle conversation (« Nouveau chat »).",
          "Cliquez sur le bouton « + » (ou l'icône d'ajout de fichiers) de la zone de saisie, choisissez l'importation depuis l'ordinateur, sélectionnez 2026-07-13_tableau-bord-logistique_S21-S28.png ; vous pouvez aussi glisser le fichier dans la fenêtre.",
          "Attendez que la vignette de l'image apparaisse, collez le prompt adapté et envoyez.",
        ],
      },
      {
        title: 'Lire la réponse et la comparer aux témoins',
        actions: [
          "Lisez la synthèse puis la liste des chiffres lus, sans rien copier ailleurs.",
          "Comparez immédiatement vos cinq valeurs témoins aux valeurs citées.",
          "Archivez la réponse brute telle quelle (copie dans un document de travail) : elle sera consignée dans le journal d'essais.",
        ],
      },
    ],
    example: {
      title: 'Réponse brute de Gemini — 8 h 24',
      lines: [
        "Rupture de stock — Nord : 9,6 % en S21 → 8,1 % en S28, forte baisse. Sud : 5,4 %, stable. Ouest : 10,5 %, en hausse.",
        "Délai moyen de livraison : 4,6 jours, stable. Taux de retour : 2,6 %, en baisse. Coût de transport : 1,55 USD/km, en hausse.",
        "Attention immédiate : la rupture de stock de l'Ouest (10,5 %, seuil 8 %) et le coût de transport (1,55 USD/km, seuil 1,50).",
        "Test des témoins : Sud orange S28 = 10,5 % (témoin) contre 5,4 % (Gemini) → écart. Ouest rouge S28 = 5,4 % (témoin) contre 10,5 % (Gemini) → écart. Deux témoins sur cinq sont faux : la synthèse n'est pas utilisable en l'état.",
      ],
    },
    result: "Une réponse brute archivée et un premier verdict : deux valeurs témoins sur cinq contredites, donc une vérification complète est indispensable (procédure 3).",
    pitfall: "Copier la synthèse dans l'e-mail du directeur « le temps de relire plus tard » : une réponse qui paraît fluide est ensuite très difficile à ne pas envoyer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: 'Variante « Graphique » : analyser une courbe à plusieurs séries',
    intro: "Quand la question porte sur la dynamique (quelle série bouge le plus, où se situe la rupture de tendance), utilisez la ligne 6 de la grille. Attention : « la plus forte variation » est ambiguë, et Gemini choisira une définition à votre place si vous ne la fixez pas. Entrée nécessaire : la capture du bloc « Rupture de stock par région ».",
    steps: [
      {
        title: 'Définir les mots du prompt',
        actions: [
          "Lisez C6 : lister les séries avec leur code couleur, identifier la série à la plus forte variation, signaler toute anomalie ou rupture de tendance.",
          "Remplacez « plus forte variation » par deux définitions explicites : l'amplitude (maximum moins minimum sur la période) et l'évolution nette (valeur S28 moins valeur S21).",
          "Demandez les semaines où chaque série franchit le seuil d'alerte de 8 %.",
        ],
      },
      {
        title: 'Soumettre et lire',
        actions: [
          "Dans la même conversation, envoyez le prompt de la variante sans rejoindre l'image : Gemini l'a déjà en contexte.",
          "Vérifiez que chaque série est associée à la bonne couleur (légende de la capture) avant de lire les chiffres.",
        ],
      },
    ],
    example: {
      title: 'Prompt « Graphique » — fil rouge, et réponse attendue',
      lines: [
        "« Analyse le graphique « Rupture de stock par région ». Liste les séries représentées avec leur code couleur. Identifie la série à la plus forte amplitude (maximum moins minimum) et celle à la plus forte évolution nette entre S21 et S28. Indique les semaines où chaque série dépasse le seuil de 8 %. Signale toute rupture de tendance visible. Si une valeur est illisible, écris illisible. »",
        "Réponse exacte attendue : Nord (bleu) a la plus forte amplitude, 4,3 points (12,4 % en S24 contre 8,1 % en S28) ; Sud (orange) a la plus forte évolution nette, + 3,3 points (7,2 % → 10,5 %) ; Ouest (rouge) reste entre 5,0 % et 5,5 %.",
        "Seuil de 8 % : Nord au-dessus sur les 8 semaines ; Sud au-dessus à partir de S24 (8,9 %) ; Ouest jamais. Ruptures de tendance : pic du Nord en S24 puis baisse ; croisement Nord / Sud en S26 (9,8 % contre 9,9 %).",
      ],
    },
    result: "Une analyse de courbe dont chaque affirmation est rattachée à une définition explicite : amplitude ou évolution nette, jamais « variation » tout court.",
    tip: "Quand une consigne contient un mot flou (« plus fort », « important », « récent »), remplacez-le par une définition chiffrée : vous obtenez la réponse à la question que vous avez réellement en tête.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: 'Enregistrer votre prompt dans la grille et contrôler la synthèse par type',
    intro: "Un prompt adapté qui reste dans l'historique d'un chat est perdu. Vous l'enregistrez dans une ligne libre de la grille : l'onglet « Synthèse par type » se met alors à jour tout seul, et vous retrouvez votre formulation au prochain lundi.",
    steps: [
      {
        title: 'Remplir la ligne 9 de l\'onglet « Prompts multimodaux »',
        actions: [
          "En A9, saisissez exactement « Image » (même orthographe que A5 : la formule de comptage compare les textes).",
          "En B9, saisissez la tâche visée de votre version, en une phrase.",
          "En C9, collez le prompt adapté de l'étape 4.",
          "En D9, saisissez le point de vérification : chiffres recoupés avec la capture, tendances non inversées, couleurs des séries confirmées sur la légende.",
        ],
      },
      {
        title: 'Lire l\'onglet « Synthèse par type »',
        actions: [
          "Ouvrez l'onglet « Synthèse par type » : ne modifiez rien.",
          "Vérifiez la cellule B5 (Image) : elle contient =NB.SI('Prompts multimodaux'!$A$5:$A$11;A5) et doit afficher 2.",
          "Vérifiez B9 : =SOMME(B5:B8) doit afficher 5.",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Contenu saisi (ligne 9)'],
      rows: [
        ['A9 — Type de contenu', 'Image'],
        ['B9 — Tâche visée', 'Synthétiser le tableau de bord logistique hebdomadaire (4 indicateurs, 3 régions) pour le directeur des opérations'],
        ['C9 — Prompt à utiliser', 'Prompt adapté du fil rouge, avec contexte, public, 2 alertes avec seuil, interdiction d\'inventer et liste des chiffres lus'],
        ['D9 — Point de vérification', 'Recouper chaque chiffre et la couleur de chaque série avec la capture ; contrôler qu\'aucune tendance n\'est inversée ; recalculer les écarts dans Sheets'],
      ],
    },
    result: "Onglet « Synthèse par type » : Image = 2, Graphique = 1, Audio = 1, Vidéo = 1, Total = 5. La ligne 9 enregistre votre prompt réutilisable.",
    pitfall: "Écrire « image » en minuscules, « Images » ou « Image  » avec un espace final en A9 : la formule NB.SI ne la compte pas et la synthèse reste à 1 sans message d'erreur.",
  },

  // ───────────── Procédure 3 — Vérifier l'analyse ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Découper la réponse de Gemini en affirmations vérifiables',
    intro: "On ne vérifie pas un paragraphe, on vérifie des affirmations. Vous transformez la synthèse en une liste numérotée où chaque ligne contient une seule chose à contrôler : un chiffre, une tendance, un classement ou une alerte. Entrée nécessaire : la réponse brute archivée à l'étape 5 de la procédure 2.",
    steps: [
      {
        title: 'Numéroter les affirmations',
        actions: [
          "Copiez la réponse brute dans un nouveau tableau (Sheets ou Word) à quatre colonnes : N°, Affirmation de Gemini, Valeur réelle sur la capture, Verdict.",
          "Écrivez une ligne par affirmation : un chiffre ou une tendance ou une alerte, pas plusieurs à la fois.",
          "Séparez les affirmations de fait (« 8,1 % en S28 ») des affirmations de jugement (« forte baisse », « stable ») : les secondes se vérifient en les convertissant en chiffre.",
        ],
      },
      {
        title: 'Marquer les risques',
        actions: [
          "Surlignez les affirmations qui portent sur une couleur de série, sur une tendance, ou sur un classement : ce sont les erreurs les plus fréquentes.",
          "Vérifiez que la liste des chiffres lus par Gemini est bien là : c'est votre source de comparaison.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — affirmations extraites de la réponse de 8 h 24',
      lines: [
        "1. Nord : 9,6 % → 8,1 %, forte baisse",
        "2. Sud : 5,4 %, stable",
        "3. Ouest : 10,5 %, en hausse",
        "4. Délai moyen : 4,6 jours, stable",
        "5. Taux de retour : 2,6 %, en baisse",
        "6. Coût de transport : 1,55 USD/km, en hausse",
        "7. Priorités : rupture Ouest et coût de transport",
      ],
    },
    result: "Un tableau de sept lignes, colonnes « Valeur réelle » et « Verdict » vides, prêt pour le recoupement.",
    tip: "Une affirmation de jugement (« forte », « stable », « légère ») ne se vérifie jamais telle quelle : la colonne « Valeur réelle » doit contenir un chiffre ou un écart calculé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Recouper chaque chiffre avec la capture',
    intro: "Le point de vérification de la ligne Image est clair : comparer chaque chiffre cité aux valeurs réelles de l'image. Vous le faites sur la capture originale, zoomée, et non sur votre mémoire. Entrées nécessaires : le tableau d'affirmations, la capture, vos valeurs témoins.",
    steps: [
      {
        title: 'Lire la valeur réelle',
        actions: [
          "Ouvrez la capture à 100 % à côté du tableau.",
          "Pour chaque affirmation, trouvez la valeur dans l'image, en suivant d'abord la couleur de la série dans la légende, puis la valeur.",
          "Saisissez la valeur réelle dans la colonne « Valeur réelle » avec son unité.",
        ],
      },
      {
        title: 'Marquer l\'écart',
        actions: [
          "Si la valeur de Gemini et la valeur réelle sont identiques : marquez « chiffre exact ».",
          "Si elles diffèrent, ou si le chiffre exact est attribué à la mauvaise série : marquez « chiffre faux » et notez la raison probable (inversion, mauvaise ligne, arrondi).",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Affirmation de Gemini', 'Valeur réelle sur la capture', 'Constat'],
      rows: [
        ['1', 'Nord 9,6 % → 8,1 %', '9,6 % → 8,1 %', 'Chiffres exacts'],
        ['2', 'Sud 5,4 %', 'Sud (orange) 7,2 % → 10,5 % ; 5,4 % est la valeur de l\'Ouest', 'Faux — valeur de la mauvaise série'],
        ['3', 'Ouest 10,5 %', 'Ouest (rouge) 5,1 % → 5,4 % ; 10,5 % est la valeur du Sud', 'Faux — valeur de la mauvaise série'],
        ['4', 'Délai 4,6 jours', '4,6 jours en S28 ; 3,8 jours en S21', 'Chiffre exact'],
        ['5', 'Retour 2,6 %', '2,6 % en S28 ; 2,9 % en S21', 'Chiffre exact'],
        ['6', 'Coût 1,55 USD/km', '1,55 USD/km en S28 ; 1,42 USD/km en S21', 'Chiffre exact'],
      ],
    },
    result: "Sur six chiffres cités, quatre sont exacts et deux sont attribués à la mauvaise série : l'erreur est localisée sur l'inversion Sud / Ouest, qui contamine les affirmations 2, 3 et 7.",
    pitfall: "Conclure que « 4 chiffres sur 6 sont bons, donc l'analyse est fiable » : un chiffre exact attribué à la mauvaise région est plus dangereux qu'un chiffre faux, car il passe un contrôle superficiel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Contrôler les tendances, la légende et les unités',
    intro: "Une analyse peut citer les bons chiffres et en tirer la mauvaise tendance. Le point de vérification de la ligne Graphique est la légende et les unités de l'axe Y, contrôlées sur le graphique original. Entrée nécessaire : la capture et la légende de chaque bloc.",
    steps: [
      {
        title: 'Contrôler les tendances',
        actions: [
          "Pour chaque indicateur, comparez la valeur de départ (S21) et la valeur d'arrivée (S28) : le sens de l'écart doit correspondre au mot de Gemini (hausse, baisse, stable).",
          "Convertissez le jugement en chiffre : « stable » signifie un écart inférieur à un seuil que vous fixez (par exemple moins de 5 % de variation relative) ; « forte baisse » doit être justifiée par un écart et un point de comparaison.",
          "Regardez la courbe entière, pas seulement les deux extrémités : un pic au milieu change la lecture.",
        ],
      },
      {
        title: 'Contrôler légende et unités',
        actions: [
          "Vérifiez la correspondance couleur / région sur la légende : bleu = Nord, orange = Sud, rouge = Ouest.",
          "Contrôlez l'unité de chaque axe : %, jours, USD/km. Une unité omise ou changée fausse la synthèse.",
          "Vérifiez les seuils d'alerte tracés sur chaque graphique, et que Gemini les cite avec la bonne valeur.",
        ],
      },
    ],
    example: {
      title: 'Constats sur les affirmations de tendance du fil rouge',
      lines: [
        "1. « Forte baisse » du Nord : − 1,5 point entre S21 (9,6 %) et S28 (8,1 %), soit − 15,6 % ; depuis le pic de S24 (12,4 %), − 4,3 points. La baisse est réelle mais modérée sur 8 semaines, et le Nord reste au-dessus du seuil de 8 % → qualificatif à retirer.",
        "4. « Stable » pour le délai : 3,8 → 4,6 jours, + 0,8 jour, + 21 % ; seuil de 4,0 jours dépassé depuis S25 → faux.",
        "5. Retour : 2,9 % → 2,6 %, baisse de 0,3 point ; la courbe a dépassé le seuil de 3,0 % en S22 et S23 (3,1 %, 3,2 %), puis est repassée dessous → « en baisse » exact.",
        "6. Coût : 1,42 → 1,55 USD/km, + 9,2 % ; seuil de 1,50 franchi en S27 (1,53 USD/km) → « en hausse » exact.",
      ],
    },
    result: "Les affirmations de tendance sont toutes converties en écart chiffré : deux sont exactes (5, 6), une est à nuancer (1), une est fausse (4).",
    tip: "Pour décider si un indicateur est « stable », fixez la règle avant de regarder : par exemple, moins de 5 % d'écart relatif sur la période. Sinon vous ajusterez le mot au chiffre que vous voulez défendre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Recalculer les écarts dans Google Sheets',
    intro: "Gemini lit une image ; Sheets calcule. Pour tout écart, pourcentage ou classement que vous allez publier, refaites le calcul vous-même sur les valeurs lues et recoupées. Entrée nécessaire : les valeurs S21 et S28 et les seuils, issus du tableau de recoupement.",
    steps: [
      {
        title: 'Construire le classeur de contrôle',
        actions: [
          "Ouvrez Google Sheets, nouveau classeur, renommez-le « Controle_tableau-bord_S28 ».",
          "En ligne 1, saisissez les en-têtes : A « Indicateur », B « S21 », C « S28 », D « Écart », E « Écart % », F « Seuil », G « Écart au seuil % ».",
          "En lignes 2 à 7, saisissez les six indicateurs avec leurs valeurs S21, S28 et leur seuil.",
        ],
      },
      {
        title: 'Saisir les formules et lire le résultat',
        actions: [
          "En D2 : =C2-B2 ; en E2 : =D2/B2 ; en G2 : =(C2-F2)/F2 ; tirez la poignée jusqu'à la ligne 7.",
          "Sélectionnez E2:E7 et G2:G7 puis Format > Nombre > Pourcentage, avec une décimale.",
          "Triez par la colonne G, du plus grand au plus petit : l'ordre donne les priorités selon l'écart au seuil.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'S21', 'S28', 'Écart', 'Écart %', 'Seuil', 'Écart au seuil %'],
      rows: [
        ['Rupture Sud', '7,2', '10,5', '+ 3,3', '+ 45,8 %', '8', '+ 31,3 %'],
        ['Délai moyen (jours)', '3,8', '4,6', '+ 0,8', '+ 21,1 %', '4,0', '+ 15,0 %'],
        ['Coût (USD/km)', '1,42', '1,55', '+ 0,13', '+ 9,2 %', '1,50', '+ 3,3 %'],
        ['Rupture Nord', '9,6', '8,1', '− 1,5', '− 15,6 %', '8', '+ 1,3 %'],
        ['Rupture Ouest', '5,1', '5,4', '+ 0,3', '+ 5,9 %', '8', '− 32,5 %'],
        ['Taux de retour', '2,9', '2,6', '− 0,3', '− 10,3 %', '3,0', '− 13,3 %'],
      ],
    },
    result: "Les écarts et le classement sont calculés : Sud (+ 31,3 % au-dessus du seuil) et délai (+ 15,0 %) sont les deux indicateurs à traiter en priorité ; le coût est un troisième point de vigilance (+ 3,3 %).",
    pitfall: "Dans un Sheets configuré en français, la virgule est le séparateur décimal et le séparateur d'arguments est le point-virgule ; si une formule renvoie #ERREUR!, vérifiez d'abord les paramètres régionaux de la feuille (Fichier > Paramètres).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Faire corriger par Gemini, puis revérifier',
    intro: "Vous pouvez demander à Gemini de corriger sa lecture, mais sa réponse corrigée est une nouvelle réponse non vérifiée. Vous lui renvoyez vos constats, sources à l'appui, puis vous recommencez le recoupement sur la nouvelle version. Entrée nécessaire : le tableau de recoupement et le classeur de contrôle.",
    steps: [
      {
        title: 'Renvoyer les erreurs à Gemini',
        actions: [
          "Dans la même conversation, écrivez les erreurs avec leur preuve, une par ligne : quelle série, quelle valeur lue, quelle valeur réelle.",
          "Fournissez la correspondance couleur / région de la légende, et demandez de refaire la synthèse en repartant de la capture.",
          "Redemandez la liste des chiffres lus et les deux indicateurs prioritaires avec le seuil.",
        ],
      },
      {
        title: 'Revérifier la nouvelle version',
        actions: [
          "Refaites le recoupement sur chaque chiffre de la nouvelle réponse, comme à l'étape 2.",
          "Ne vous contentez pas de « il s'est excusé et corrigé » : une correction peut introduire une nouvelle erreur.",
          "Si l'erreur persiste après deux tentatives, rédigez la synthèse vous-même à partir de votre classeur de contrôle.",
        ],
      },
    ],
    example: {
      title: 'Message de correction d\'Amani — 8 h 41',
      lines: [
        "« Ta lecture contient des erreurs. La légende indique : Nord = bleu, Sud = orange, Ouest = rouge. Sud orange vaut 7,2 % en S21 et 10,5 % en S28 ; Ouest rouge vaut 5,1 % en S21 et 5,4 % en S28. Le délai passe de 3,8 à 4,6 jours : ce n'est pas stable. Refais la synthèse en repartant de la capture, et redonne la liste des chiffres lus. »",
        "Nouvelle réponse de Gemini : Sud 10,5 % (hausse), Ouest 5,4 % (stable), délai en hausse de 3,8 à 4,6 jours ; priorités : Sud et délai. Chiffres lus conformes à la capture.",
        "Revérification d'Amani : les 6 valeurs lues et les 2 priorités concordent avec le classeur de contrôle.",
      ],
    },
    result: "Une deuxième version dont toutes les affirmations sont recoupées et conformes ; la première version reste archivée avec ses erreurs.",
    tip: "Corriger la réponse n'est pas toujours plus rapide que de rédiger vous-même : dès que vous passez plus de dix minutes à discuter avec l'IA, reprenez la main à partir de votre classeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Décider et consigner : le verdict par affirmation',
    intro: "La vérification se conclut par une décision écrite : chaque affirmation est confirmée, corrigée ou retirée, et seules les confirmées entrent dans le livrable. Cette décision est la preuve que vous avez fait ce que la direction attend de vous.",
    steps: [
      {
        title: 'Rendre le verdict',
        actions: [
          "Dans le tableau de recoupement, complétez la colonne « Verdict » par l'une des trois valeurs : confirmée, corrigée, retirée.",
          "Pour chaque verdict « corrigée » ou « retirée », écrivez la raison en cinq mots.",
          "Calculez le score : nombre d'affirmations confirmées sur le total.",
        ],
      },
      {
        title: 'Consigner pour la suite',
        actions: [
          "Reportez les écarts constatés dans votre brouillon de journal d'essais (date, résultat obtenu, écart constaté, ajustement apporté).",
          "Notez l'ajustement du prompt à retenir (par exemple : donner la correspondance couleur / région).",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Affirmation (première version)', 'Verdict', 'Raison'],
      rows: [
        ['1', 'Nord en « forte baisse »', 'Corrigée', 'Baisse de 1,5 point, toujours au-dessus du seuil'],
        ['2', 'Sud 5,4 %, stable', 'Corrigée', 'Séries Sud et Ouest inversées'],
        ['3', 'Ouest 10,5 %, en hausse', 'Corrigée', 'Séries Sud et Ouest inversées'],
        ['4', 'Délai 4,6 jours, stable', 'Corrigée', '+ 0,8 jour, seuil dépassé'],
        ['5', 'Retour 2,6 %, en baisse', 'Confirmée', 'Conforme à la capture'],
        ['6', 'Coût 1,55 USD/km, en hausse', 'Confirmée', 'Conforme à la capture'],
        ['7', 'Priorités : Ouest et coût', 'Corrigée', 'Priorités réelles : Sud et délai'],
      ],
    },
    result: "Verdict : 2 affirmations confirmées sur 7, 5 corrigées. La synthèse de la première version n'aurait pas dû partir ; les écarts sont consignés pour le journal d'essais.",
    pitfall: "Garder une affirmation « à peu près exacte » sans la corriger dans le livrable : la direction lira le mot, pas la nuance. Corrigez ou retirez.",
  },

  // ───────────── Procédure 4 — Intégrer et créer le contenu multimodal ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Rédiger la synthèse finale à partir des seules affirmations confirmées',
    intro: "La synthèse que vous transmettez ne reprend que ce qui a passé la vérification. Vous pouvez demander à Gemini de la rédiger, mais en lui fournissant la liste des faits validés comme seule matière : il met en forme, il n'apporte aucun fait. Entrées nécessaires : le tableau de verdict et le classeur de contrôle.",
    steps: [
      {
        title: 'Constituer la liste des faits validés',
        actions: [
          "Reprenez, dans le classeur de contrôle, les valeurs S21, S28, écarts et écarts au seuil de chaque indicateur.",
          "Rédigez la liste en une ligne par fait, avec l'unité et la période : « Rupture Sud : 7,2 % en S21, 10,5 % en S28, seuil 8 % ».",
          "Ajoutez les deux priorités issues du classement et les nuances décidées à l'étape 6 de la procédure 3.",
        ],
      },
      {
        title: 'Demander la mise en forme',
        actions: [
          "Dans une nouvelle conversation, collez la liste et demandez une synthèse de 5 lignes maximum pour le directeur des opérations.",
          "Ajoutez la contrainte : « n'ajoute aucune information, aucun chiffre ni cause qui ne figure pas dans la liste ».",
          "Relisez le résultat en cochant chaque chiffre contre la liste.",
        ],
      },
    ],
    example: {
      title: 'Synthèse finale — fil rouge, 9 h 12',
      lines: [
        "Semaine 28 (6 au 12 juillet 2026) : deux indicateurs appellent une action immédiate. La rupture de stock du Sud (Bukavu) atteint 10,5 %, soit 3,3 points de plus qu'en S21 et 31 % au-dessus du seuil de 8 %. Le délai moyen de livraison passe de 3,8 à 4,6 jours (+ 21 %), au-dessus du seuil de 4,0 jours.",
        "Le Nord (Goma) recule à 8,1 % depuis le pic de 12,4 % de la S24 mais reste au-dessus du seuil ; l'Ouest (Kinshasa) est stable à 5,4 %. Le coût de transport (1,55 USD/km, seuil 1,50) est à surveiller ; le taux de retour (2,6 %) est repassé sous son seuil de 3 %.",
      ],
    },
    result: "Une synthèse de cinq lignes environ, où chaque chiffre figure dans le classeur de contrôle et chaque nuance (Nord modéré, coût à surveiller) a été décidée par vous.",
    pitfall: "Laisser Gemini ajouter une cause (« en raison de la saison des pluies ») : il n'a aucun moyen de la connaître. Toute cause non démontrée sort de la synthèse ou devient « à confirmer ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Créer le visuel : annoter la capture',
    intro: "Une capture brute contient quatre blocs et le lecteur ne sait pas où regarder. Vous la transformez en visuel de message en entourant ce qui compte et en ajoutant une légende qui énonce la conclusion. Entrée nécessaire : la capture originale, jamais modifiée, copiée dans le dossier de travail.",
    steps: [
      {
        title: 'Annoter dans Google Docs',
        actions: [
          "Dans un nouveau document Google Docs, cliquez sur Insérer > Dessin > Nouveau.",
          "Dans la fenêtre de dessin, cliquez sur l'icône Image, choisissez la capture (importation depuis l'ordinateur), puis ajustez sa taille.",
          "Cliquez sur Forme > Formes > Rectangle ; placez-le autour de la courbe Sud et du bloc « Délai moyen » ; réglez la couleur de remplissage sur « Transparent » et le contour en rouge, épaisseur 3 px.",
          "Ajoutez une zone de texte près de chaque cadre : « Sud : 10,5 % (seuil 8 %) » et « Délai : 4,6 j (seuil 4,0) ». Cliquez sur « Enregistrer et fermer ».",
        ],
      },
      {
        title: 'Écrire la légende',
        actions: [
          "Sous l'image, tapez la légende : un titre qui énonce le message, la source et la date.",
          "Gardez la capture originale intacte dans votre dossier : le visuel annoté en est une copie.",
        ],
      },
    ],
    example: {
      title: 'Légende du visuel — fil rouge',
      lines: [
        "Titre : « Bukavu et les délais de livraison passent au-dessus de leur seuil d'alerte en S28 ».",
        "Source : tableau de bord logistique Horizon Grands Lacs, extraction du 13/07/2026, S21 à S28 2026 — valeurs recoupées avec la capture par A. Kahindo.",
        "Annotations : cadre rouge sur la courbe Sud (orange) et sur le bloc Délai moyen ; aucune autre modification de l'image.",
      ],
    },
    result: "Un visuel annoté dont le titre dit ce qu'il faut voir, avec la source, la date et mention de la vérification, collé dans le Docs de travail.",
    tip: "N'encadrez qu'une ou deux zones : un visuel avec cinq cadres rouges ne désigne plus rien. Si vous voulez ajouter une illustration générée par IA, gardez-la pour l'habillage ; une donnée chiffrée vient toujours de la source réelle, jamais d'une image générée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Assembler la note texte + visuel dans Google Docs',
    intro: "Le contenu multimodal prêt à l'envoi associe texte et visuel dans un seul document que le destinataire lit en moins de deux minutes. Vous suivez une structure fixe, que vous réutiliserez chaque lundi. Entrées nécessaires : la synthèse finale et le visuel annoté.",
    steps: [
      {
        title: 'Composer la structure',
        actions: [
          "Titre du document : « Synthèse logistique hebdomadaire — Semaine 28 (6 au 12 juillet 2026) ».",
          "Ligne d'en-tête : destinataire, auteur, date et heure de rédaction.",
          "Bloc 1 — Synthèse : collez les cinq lignes finales.",
          "Bloc 2 — Visuel : la capture annotée avec sa légende.",
          "Bloc 3 — Fiabilité : une phrase sur la vérification (« chiffres recoupés avec la capture, écarts recalculés dans Sheets »).",
        ],
      },
      {
        title: 'Soigner la lisibilité',
        actions: [
          "Appliquez le style « Titre 1 » au titre et « Titre 2 » aux trois blocs (menu Format > Styles de paragraphe).",
          "Mettez en gras uniquement les deux indicateurs prioritaires.",
          "Vérifiez que la note tient sur une page : Fichier > Aperçu avant impression.",
        ],
      },
    ],
    example: {
      title: 'Bloc fiabilité — note du fil rouge',
      lines: [
        "« Fiabilité : lecture de la capture assistée par Gemini, puis recoupée chiffre par chiffre avec le tableau de bord ; cinq affirmations de la première lecture ont été corrigées (inversion des séries Sud et Ouest, tendance du délai, qualificatif du Nord). Écarts recalculés dans le classeur Controle_tableau-bord_S28. Vérification de deux chiffres clés par P. Mumbere. »",
      ],
    },
    result: "Une note d'une page dans Google Docs, avec synthèse, visuel annoté, source et statut de vérification, prête à être exportée.",
    pitfall: "Supprimer le bloc fiabilité « pour faire plus propre » : c'est lui qui permet au directeur de savoir qu'une IA a participé et que vous avez contrôlé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Exporter en PDF et envoyer par Gmail',
    intro: "Un PDF fige ce qui a été vérifié : le destinataire ne peut pas le modifier par erreur, et vous avez une version datée. Vous rédigez ensuite l'e-mail d'envoi, avec Gemini si vous le souhaitez, en le relisant intégralement. Entrée nécessaire : la note Docs finalisée.",
    steps: [
      {
        title: 'Exporter',
        actions: [
          "Dans Docs : Fichier > Télécharger > Document PDF (.pdf).",
          "Renommez le fichier : 2026-07-13_Synthese-logistique_S28.pdf.",
        ],
      },
      {
        title: 'Rédiger et envoyer l\'e-mail',
        actions: [
          "Dans Gmail, cliquez sur « Nouveau message » ; renseignez le destinataire (Samuel Baraka), mettez Patrick Mumbere en copie, et saisissez l'objet : « Synthèse logistique S28 — pour votre rapport hebdomadaire ».",
          "Cliquez sur l'icône « Aidez-moi à écrire » dans le message, et saisissez : « Rédige un e-mail court à Samuel Baraka, directeur des opérations, qui accompagne la note en pièce jointe : rappelle en deux phrases les deux indicateurs prioritaires (rupture Sud 10,5 %, délai 4,6 jours) et indique que les chiffres ont été vérifiés. »",
          "Relisez, comparez chaque chiffre à la note, ajoutez le PDF en pièce jointe, vérifiez les destinataires puis envoyez.",
        ],
      },
    ],
    example: {
      title: 'E-mail envoyé — lundi 13 juillet 2026, 9 h 38',
      lines: [
        "Objet : Synthèse logistique S28 — pour votre rapport hebdomadaire",
        "« Bonjour Samuel, vous trouverez ci-joint la synthèse de la semaine 28. Deux points appellent une action immédiate : la rupture de stock au Sud (10,5 %, seuil 8 %) et le délai moyen de livraison (4,6 jours, seuil 4,0). Les chiffres ont été recoupés avec le tableau de bord et recalculés ; Patrick les a relus. Je reste disponible avant 10 h pour toute question. Cordialement, Amani »",
      ],
    },
    result: "Une note en PDF datée et nommée, un e-mail relu mot à mot et envoyé avant l'échéance, avec le bon destinataire et la copie prévue.",
    pitfall: "Faire confiance à un brouillon Gemini d'e-mail parce que « il ne contient que des mots » : il peut reprendre un chiffre erroné ou un destinataire du fil. Relisez les chiffres et les noms avant d'envoyer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Constituer le dossier de preuve',
    intro: "Dans trois semaines, quelqu'un demandera « d'où vient ce chiffre ? ». Le dossier de preuve rassemble ce qu'il faut pour répondre en deux minutes, et il sert aussi de point de départ au journal d'essais. Entrées nécessaires : tous les fichiers produits depuis le début de la procédure 2.",
    steps: [
      {
        title: 'Ranger les pièces',
        actions: [
          "Dans Google Drive, créez un dossier « Synthese-hebdo_S28_2026-07-13 ».",
          "Déposez-y : la capture originale, le prompt adapté (copie du texte), la réponse brute de la première version, la réponse corrigée, le tableau de recoupement et de verdict, le classeur de contrôle, la note PDF envoyée.",
          "Ajoutez une capture de l'e-mail envoyé ou un lien vers le message.",
        ],
      },
      {
        title: 'Protéger le dossier',
        actions: [
          "Clic droit sur le dossier > Partager : limitez l'accès aux personnes concernées (Samuel Baraka, Patrick Mumbere), sans « Tous les utilisateurs disposant du lien ».",
          "Contrôlez que les paramètres de partage respectent la règle posée par l'administratrice : aucun partage en dehors du domaine.",
        ],
      },
    ],
    table: {
      columns: ['Pièce du dossier', 'Rôle dans la preuve'],
      rows: [
        ['Capture originale PNG', 'Source des chiffres, non retouchée'],
        ['Prompt adapté + réponses brutes (v1, v2)', 'Trace de ce que Gemini a dit, erreurs comprises'],
        ['Tableau de recoupement et verdicts', 'Preuve que chaque affirmation a été contrôlée'],
        ['Classeur Controle_tableau-bord_S28', 'Calculs refaits par vous, sans IA'],
        ['Note PDF + e-mail envoyé', 'Ce qui a effectivement été transmis, avec l\'heure'],
      ],
    },
    result: "Un dossier Drive de sept pièces, partagé avec les seules personnes concernées : vous pouvez justifier chaque chiffre transmis le 13 juillet.",
    tip: "Gardez la réponse brute erronée : elle prouve que la vérification a servi à quelque chose, et elle alimente le journal d'essais pour améliorer le prompt la semaine suivante.",
  },

  // ───────────── Procédure 5 — Photos, audio et vidéo de terrain ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Extraire les lignes d\'une facture photographiée',
    intro: "Une facture froissée, photographiée à la hâte, se saisit longuement à la main ; Gemini en extrait un texte structuré. Le risque est un chiffre mal lu à cause d'un pli ou d'un reflet. Entrée nécessaire : la photo de la facture d'Alpha Logistics, après classement orange (bloc bancaire masqué).",
    steps: [
      {
        title: 'Préparer la photo',
        actions: [
          "Posez la facture à plat, en lumière du jour, sans reflet ; cadrez la page entière, de face, sans ombre portée.",
          "Masquez les coordonnées bancaires avec un rectangle plein (voir la classification de la procédure 1).",
          "Enregistrez le fichier : 2026-07-13_facture-AL-2026-0319.jpg.",
        ],
      },
      {
        title: 'Demander une extraction structurée',
        actions: [
          "Dans gemini.google.com, ouvrez un nouveau chat, joignez la photo et collez le prompt de l'exemple.",
          "Demandez explicitement la ligne de contrôle : somme des lignes extraites et écart avec le total lu.",
        ],
      },
    ],
    example: {
      title: 'Prompt et réponse — fil rouge',
      lines: [
        "Prompt : « Voici la photo d'une facture fournisseur. Extrais les informations dans un tableau : numéro de facture, fournisseur, date, client, puis chaque ligne (désignation, quantité, prix unitaire, montant), puis le total indiqué. Si une valeur est illisible, écris illisible sans l'estimer. Ajoute une ligne de contrôle : somme des montants extraits et écart avec le total lu. »",
        "Réponse de Gemini : Facture AL-2026-0319 — Alpha Logistics — 19/03/2026 — Horizon Grands Lacs, Kinshasa.",
        "Ligne 1 : Transport routier Kinshasa–Matadi, 1 camion, 2 600 USD. Ligne 2 : Péage et frais d'escorte, 300 USD. Total lu : 3 400 USD.",
        "Contrôle : somme des montants extraits = 2 900 USD ; écart avec le total lu = 500 USD.",
      ],
    },
    result: "Un tableau structuré de deux lignes et d'un total, avec une incohérence signalée par la ligne de contrôle : 2 900 USD extraits contre 3 400 USD lus.",
    tip: "La ligne de contrôle somme / total est le meilleur détecteur d'erreur de lecture sur une facture : un chiffre mal lu fait presque toujours apparaître un écart.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Vérifier l\'extraction de la facture par recalcul',
    intro: "L'écart de 500 USD prouve qu'une ligne est mal lue, mais pas laquelle. Vous la trouvez sur la photo originale, en zoomant, puis vous corrigez l'extraction. Entrée nécessaire : la photo originale et la réponse de Gemini.",
    steps: [
      {
        title: 'Localiser le chiffre litigieux',
        actions: [
          "Ouvrez la photo originale, zoom à 200 %, et suivez les lignes une à une.",
          "Pour chaque montant extrait, comparez avec la photo ; commencez par les lignes à petit montant, souvent touchées par un pli.",
          "Repérez l'écart : la ligne « Péage et frais d'escorte » affiche 800 USD, un pli traverse le premier chiffre qui ressemble à un 3.",
        ],
      },
      {
        title: 'Corriger et refaire le contrôle',
        actions: [
          "Corrigez le montant dans votre tableau de saisie : 800 USD.",
          "Recalculez dans Sheets : =2600+800 → 3400 ; le total lu est 3400 : l'écart devient 0.",
          "Pour la comptabilité, rapprochez la facture du bon de commande et du total saisi avant tout paiement.",
        ],
      },
    ],
    table: {
      columns: ['Champ', 'Extraction de Gemini', 'Valeur réelle (photo)', 'Verdict'],
      rows: [
        ['Numéro de facture', 'AL-2026-0319', 'AL-2026-0319', 'Exact'],
        ['Date', '19/03/2026', '19/03/2026', 'Exact'],
        ['Ligne 1 — Transport Kinshasa–Matadi', '2 600 USD', '2 600 USD', 'Exact'],
        ['Ligne 2 — Péage et frais d\'escorte', '300 USD', '800 USD', 'Faux (pli sur le chiffre)'],
        ['Total', '3 400 USD', '3 400 USD', 'Exact ; cohérent après correction'],
      ],
    },
    result: "L'erreur est localisée sur une seule ligne, corrigée, et le contrôle somme / total retombe à 0. Vous pouvez utiliser le tableau pour la saisie comptable.",
    pitfall: "Corriger le total pour qu'il colle à la somme extraite (2 900 USD) : vous auriez enregistré une facture fausse de 500 USD. En cas d'écart, c'est une ligne mal lue qu'on cherche, pas un total qu'on réécrit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Faire résumer un mémo vocal (ligne « Audio » de la grille)',
    intro: "Un mémo vocal de trois minutes se réécoute en trois minutes ; son compte-rendu structuré se lit en trente secondes. La ligne 7 de la grille donne la structure attendue. Entrée nécessaire : l'enregistrement du mémo, après accord de la personne qui parle et classement orange.",
    steps: [
      {
        title: 'Préparer l\'enregistrement',
        actions: [
          "Demandez à Jérémie Bahati son accord pour le traitement de son mémo ; limitez le fichier à la partie utile.",
          "Enregistrez le fichier audio sous 2026-07-13_memo-vocal_Bukavu.m4a (ou le format de votre téléphone).",
          "Vérifiez que la taille et la durée sont acceptées par votre offre Gemini ; sinon découpez l'enregistrement.",
        ],
      },
      {
        title: 'Soumettre et lire',
        actions: [
          "Dans le chat autonome, joignez le fichier et collez le prompt adapté de C7.",
          "Demandez d'écrire exactement tels qu'entendus les noms propres, chiffres et dates, avec un horodatage approximatif.",
          "Lisez le compte-rendu en repérant tout nom, chiffre et date : ce sont les éléments à vérifier à l'étape suivante.",
        ],
      },
    ],
    example: {
      title: 'Prompt et compte-rendu de Gemini — mémo de Jérémie Bahati',
      lines: [
        "Prompt : « Écoute cet enregistrement et produis un compte-rendu structuré : décisions prises, actions à faire avec responsable si mentionné, points en suspens, questions non tranchées. Indique l'horodatage approximatif de chaque information et écris exactement tels qu'entendus les noms propres, les chiffres et les dates. »",
        "Décision : relancer Kivu Freight Co pour 120 kits d'hygiène avant le vendredi 17 juillet (0:48).",
        "Action : Jérémie appelle Kivu Freight Co mardi 14 juillet à 9 h (1:10).",
        "Point en suspens : transport supplémentaire estimé à 1 300 USD, à valider par Samuel (1:35).",
        "Question non tranchée : livrer en une fois ou en deux fois ? (2:05)",
      ],
    },
    result: "Un compte-rendu en quatre rubriques avec horodatage : une date, un montant et un responsable sont à contrôler par réécoute.",
    tip: "Demandez toujours l'horodatage : il transforme la vérification en trois sauts précis dans l'enregistrement, au lieu de la réécoute complète.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Vérifier le compte-rendu audio par réécoute ciblée',
    intro: "Le point de vérification de la grille est précis : réécouter les passages où un nom propre, un chiffre ou une date est mentionné, car les erreurs de transcription y sont les plus fréquentes. Entrée nécessaire : l'enregistrement et le compte-rendu horodaté.",
    steps: [
      {
        title: 'Réécouter les passages à risque',
        actions: [
          "Listez tous les noms propres, chiffres et dates du compte-rendu avec leur horodatage.",
          "Réécoutez chaque passage (quelques secondes avant et après), au casque, vitesse normale.",
          "Notez ce que vous entendez, sans regarder la version de Gemini avant d'avoir écouté.",
        ],
      },
      {
        title: 'Corriger le compte-rendu',
        actions: [
          "Corrigez chaque écart dans le compte-rendu final.",
          "Consignez la nature de l'erreur (date mal entendue, chiffre proche, personne confondue) pour le journal d'essais.",
        ],
      },
    ],
    table: {
      columns: ['Horodatage', 'Compte-rendu de Gemini', 'Réécoute', 'Verdict'],
      rows: [
        ['0:48', 'Avant le vendredi 17 juillet', '« avant jeudi 16 juillet »', 'Faux — date'],
        ['1:10', 'Appel mardi 14 juillet à 9 h', 'Mardi 14 juillet à 9 h', 'Exact'],
        ['1:35', '1 300 USD, à valider par Samuel', '1 800 USD, à valider par Patrick', 'Faux — chiffre et personne'],
        ['2:05', 'Livrer en une ou deux fois ?', 'Livrer en une ou deux fois ?', 'Exact'],
      ],
    },
    result: "Un compte-rendu corrigé : décision pour jeudi 16 juillet, transport supplémentaire de 1 800 USD à valider par Patrick Mumbere. Trois éléments (une date, un montant, un responsable) étaient faux avant réécoute.",
    pitfall: "Transmettre à Samuel un compte-rendu qui lui demande de valider 1 300 USD, alors que Jérémie a dit 1 800 USD à valider par Patrick : l'erreur devient une décision budgétaire prise sur un chiffre inexact.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Faire synthétiser une vidéo de visite (ligne « Vidéo » de la grille)',
    intro: "Une visite d'entrepôt filmée au téléphone contient plus d'informations qu'on n'en note en direct. La ligne 8 de la grille demande un rapport segment par segment, avec horodatage approximatif, anomalies et recommandation priorisée. Entrée nécessaire : la vidéo de la visite de Bukavu, cadrée sans visages.",
    steps: [
      {
        title: 'Préparer la vidéo',
        actions: [
          "Filmez en continu, à vitesse de marche lente, en annonçant à voix haute le lieu au début de chaque zone.",
          "Vérifiez la durée et le poids du fichier par rapport aux limites de votre offre ; au besoin, découpez par zone.",
          "Enregistrez : 2026-07-09_visite-entrepot-Bukavu.mp4 (2 min 40).",
        ],
      },
      {
        title: 'Demander le rapport structuré',
        actions: [
          "Dans le chat autonome, joignez la vidéo et collez le prompt de la ligne 8 adapté.",
          "Exigez l'horodatage de chaque anomalie, et la distinction entre « vu à l'image » et « déduit ».",
        ],
      },
    ],
    example: {
      title: 'Prompt et rapport de Gemini — visite de Bukavu',
      lines: [
        "Prompt : « Regarde cette vidéo de visite d'un entrepôt et produis un rapport structuré : ce qui est montré segment par segment avec horodatage approximatif, les problèmes ou anomalies visibles (indique pour chacun s'il est vu à l'image ou déduit), et une recommandation d'action priorisée. »",
        "0:00-0:35 — Quai de réception, deux camions en déchargement.",
        "0:35-1:15 — Zone de stockage : palettes posées au sol, sans étagère libre. Anomalie : extincteur absent près de l'entrée (0:50).",
        "1:15-1:50 — Allée centrale partiellement obstruée par des cartons.",
        "1:50-2:40 — Rayon kits d'hygiène presque vide : environ deux palettes visibles.",
        "Recommandations : 1. dégager l'allée ; 2. réapprovisionner les kits d'hygiène ; 3. installer des étagères.",
      ],
    },
    result: "Un rapport de quatre segments avec horodatage, trois anomalies annoncées, trois recommandations ordonnées : tout est à visionner avant d'entrer dans un rapport.",
    tip: "Demander « vu à l'image ou déduit » force Gemini à séparer ce qu'il observe de ce qu'il suppose, et vous dit où regarder en premier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Vérifier la vidéo : visionner les segments signalés',
    intro: "Une anomalie annoncée sans horodatage exact ne se retrouve pas, et une anomalie inventée peut déclencher une dépense inutile. Le point de vérification de la grille est de visionner au moins les segments signalés pour confirmer l'horodatage et la nature exacte du problème. Entrée nécessaire : la vidéo et le rapport.",
    steps: [
      {
        title: 'Visionner chaque anomalie',
        actions: [
          "Pour chaque anomalie, placez la tête de lecture sur l'horodatage annoncé et regardez dix secondes avant et après.",
          "Notez ce que vous voyez réellement : nature, lieu, gravité, horodatage exact.",
          "Pour une anomalie « déduite », cherchez la preuve à l'image ; sinon, elle sort du rapport.",
        ],
      },
      {
        title: 'Réécrire le rapport avec ce qui est confirmé',
        actions: [
          "Corrigez les horodatages et la nature de chaque anomalie.",
          "Reclassez les recommandations selon la gravité réelle (sécurité d'abord).",
        ],
      },
    ],
    table: {
      columns: ['Annonce de Gemini', 'Ce que montre la vidéo', 'Verdict'],
      rows: [
        ['Extincteur absent, 0:50', 'Extincteur présent à 0:52, mais accès masqué par une palette', 'Anomalie requalifiée : accès bloqué, non absence'],
        ['Allée obstruée par des cartons, 1:15', 'Allée obstruée par des palettes vides, à partir de 1:20', 'Horodatage à ± 5 s ; nature corrigée'],
        ['Kits d\'hygiène : environ deux palettes, 1:50', 'Trois palettes à demi-pleines visibles entre 1:55 et 2:35', 'Quantité corrigée ; rayon bas, non vide'],
        ['Recommandations : allée, kits, étagères', 'Priorité sécurité : dégager l\'extincteur et l\'allée', 'Ordre revu : 1. extincteur et allée ; 2. kits ; 3. étagères'],
      ],
    },
    result: "Un rapport de visite exact : accès à l'extincteur bloqué (0:52), allée obstruée par des palettes vides (à partir de 1:20), rayon kits d'hygiène bas (trois palettes), avec recommandations ordonnées par gravité.",
    pitfall: "Reprendre « extincteur absent » dans le rapport de sécurité sans visionner : vous commanderiez un extincteur inutile et vous laisseriez le vrai problème — l'accès bloqué — sans réponse.",
  },

  // ───────────── Procédure 6 — Brouillon Gmail récurrent ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Identifier une tâche vraiment répétitive',
    intro: "Une bonne candidate à l'automatisation a un format stable d'une fois sur l'autre et ne demande pas de jugement complexe à chaque occurrence. Une négociation délicate ou un e-mail à fort enjeu politique ne le sont pas. Vous évaluez vos tâches avec quatre critères, avant de toucher à Gemini.",
    steps: [
      {
        title: 'Lister vos tâches et les noter',
        actions: [
          "Listez cinq tâches de rédaction ou de saisie que vous répétez chaque semaine ou chaque mois.",
          "Notez chacune de 0 à 1 sur quatre critères : format stable, jugement faible, fréquence au moins hebdomadaire, enjeu faible en cas d'erreur.",
          "Retenez les tâches qui totalisent au moins 3 sur 4.",
        ],
      },
      {
        title: 'Chiffrer le gain',
        actions: [
          "Mesurez le temps passé par occurrence et la fréquence.",
          "Estimez le temps après automatisation en comptant la relecture (qui reste obligatoire).",
        ],
      },
    ],
    table: {
      columns: ['Tâche candidate', 'Format stable', 'Jugement faible', 'Au moins hebdo', 'Enjeu faible', 'Total'],
      rows: [
        ['Réponse hebdomadaire de suivi à Alpha Logistics (Kinshasa)', '1', '1', '1', '1', '4 / 4 — retenue'],
        ['Relance de facture impayée à un fournisseur', '1', '1', '0', '1', '3 / 4 — candidate'],
        ['Négociation des tarifs avec Transco Sarl', '0', '0', '0', '0', '0 / 4 — exclue'],
      ],
    },
    result: "Une tâche retenue : la réponse hebdomadaire de suivi à Alpha Logistics. Temps actuel : 25 minutes par semaine ; objectif : 8 minutes, relecture comprise.",
    pitfall: "Choisir comme première automatisation un e-mail à fort enjeu parce qu'il vous prend du temps : le gain est réel, le risque d'une erreur silencieuse l'est aussi. Commencez par une tâche à faible enjeu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Définir le modèle du message attendu',
    intro: "Avant de demander quoi que ce soit à Gemini, vous décrivez le message que vous voudriez recevoir. Cette description devient la structure du prompt. Entrée nécessaire : deux ou trois réponses hebdomadaires que vous avez déjà écrites à la main.",
    steps: [
      {
        title: 'Extraire la structure de vos anciens messages',
        actions: [
          "Ouvrez trois réponses déjà envoyées à Alpha Logistics et comparez-les : quels blocs reviennent à chaque fois ?",
          "Notez l'ordre des blocs, le ton (vouvoiement, formule de politesse) et la longueur moyenne.",
        ],
      },
      {
        title: 'Écrire le modèle cible',
        actions: [
          "Numérotez les blocs : (1) accusé de réception, (2) rappel des chiffres, (3) réponse à la question posée, (4) prochaine étape datée.",
          "Fixez la longueur (120 mots maximum), le ton (courtois et direct) et la formule de fin.",
          "Précisez ce que vous décidez vous-même : la réponse à la question (confirmer ou non) ne se laisse jamais à l'IA.",
        ],
      },
    ],
    example: {
      title: 'Modèle cible — réponse hebdomadaire à Alpha Logistics',
      lines: [
        "Bloc 1 : remercier Christelle Mbuyi pour son point de la semaine.",
        "Bloc 2 : rappeler le nombre de livraisons effectuées sur prévues et les numéros de bons de commande reportés, repris du fil.",
        "Bloc 3 : répondre à la question posée — décision d'Amani : confirmer l'enlèvement de mercredi 15 juillet à 8 h à l'entrepôt de Kinshasa.",
        "Bloc 4 : demander la date de livraison des bons reportés d'ici jeudi.",
        "Format : vouvoiement, 120 mots maximum, signature « Amani Kahindo ».",
      ],
    },
    result: "Un modèle en quatre blocs, avec ton, longueur et décision humaine, qui constitue le cahier des charges du prompt.",
    tip: "Dans le modèle, séparez ce que l'IA reprend du fil (chiffres, numéros) de ce que vous décidez (confirmer, refuser, proposer une date) : cette séparation est le cœur de la fiabilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Ouvrir le fil et donner à Gemini le contexte source, pas seulement l\'instruction',
    intro: "Gemini a accès au fil, mais c'est votre instruction qui lui dit ce qu'il doit en retenir. Précisez explicitement les informations à reprendre (dernière question posée, chiffres, numéros) et les décisions que vous avez déjà prises. Entrée nécessaire : le fil Gmail « Suivi livraisons Kinshasa — S28 ».",
    steps: [
      {
        title: 'Ouvrir le fil et Gemini',
        actions: [
          "Dans Gmail, ouvrez le fil « Suivi livraisons Kinshasa — S28 » ; le dernier message est celui de Christelle Mbuyi, vendredi 10 juillet, 16 h 20.",
          "Cliquez sur « Répondre ».",
          "Cliquez sur l'icône « Aidez-moi à écrire » dans la zone de réponse (ou sur l'icône Gemini en haut à droite si votre édition propose le panneau latéral).",
        ],
      },
      {
        title: 'Saisir l\'instruction complète',
        actions: [
          "Collez l'instruction de l'exemple, qui reprend le modèle cible en quatre blocs et les décisions.",
          "Cliquez sur « Créer » et attendez le brouillon.",
        ],
      },
    ],
    example: {
      title: 'Message d\'Alpha Logistics et instruction donnée à Gemini',
      lines: [
        "Dernier message du fil : « Bonjour Amani, cette semaine : 9 livraisons effectuées sur 11 prévues. Les bons de commande BC-2026-0412 et BC-2026-0415 sont reportés à la semaine prochaine, faute de camion disponible. Pouvez-vous confirmer l'enlèvement de mercredi 15 juillet à 8 h ? Cordialement, Christelle Mbuyi »",
        "Instruction : « À partir du dernier message d'Alpha Logistics dans ce fil, rédige une réponse en français, vouvoiement, courtoise et directe, 120 mots maximum : (1) remercie pour le point de la semaine ; (2) rappelle le nombre de livraisons effectuées sur prévues et les numéros des bons de commande reportés ; (3) confirme l'enlèvement de mercredi 15 juillet à 8 h à l'entrepôt de Kinshasa ; (4) demande la date de livraison des bons reportés d'ici jeudi. Reprends uniquement les chiffres et numéros présents dans le fil. Signe Amani Kahindo. »",
      ],
    },
    result: "Un brouillon de réponse produit dans le fil, en quatre blocs, que vous allez relire et corriger à l'étape suivante.",
    pitfall: "Écrire seulement « réponds à Christelle » : Gemini choisit seul ce qu'il reprend du fil et peut décider à votre place de confirmer ou de refuser l'enlèvement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Relire et corriger le brouillon',
    intro: "Un brouillon n'est pas un message envoyé. Vous relisez le texte entier, vous recoupez chaque chiffre, nom et numéro avec le fil, et vous notez ce que vous avez dû corriger : ces corrections nourriront le journal d'essais. Entrée nécessaire : le brouillon généré dans la zone de réponse.",
    steps: [
      {
        title: 'Relire intégralement',
        actions: [
          "Lisez le brouillon mot à mot, à voix basse, sans survoler.",
          "Recoupez chaque chiffre et numéro avec le message de Christelle : 9 sur 11, BC-2026-0412, BC-2026-0415, mercredi 15 juillet, 8 h.",
          "Vérifiez le prénom, le vouvoiement, la signature et que la décision correspond à la vôtre.",
        ],
      },
      {
        title: 'Corriger et noter',
        actions: [
          "Corrigez directement dans le message, ou utilisez « Reformuler » et « Raccourcir » si le ton ou la longueur sont à ajuster.",
          "Notez dans un brouillon de journal : date, ce que Gemini a produit, ce qui a nécessité une correction manuelle.",
        ],
      },
    ],
    example: {
      title: 'Brouillon après relecture — fil du 10 juillet',
      lines: [
        "« Bonjour Christelle, merci pour votre point de la semaine. Nous prenons note de 9 livraisons effectuées sur 11 prévues et du report des bons de commande BC-2026-0412 et BC-2026-0415. Nous confirmons l'enlèvement de mercredi 15 juillet à 8 h à l'entrepôt de Kinshasa. Pouvez-vous nous indiquer d'ici jeudi la date de livraison des deux bons reportés ? Cordialement, Amani Kahindo »",
        "Contrôle : 9 sur 11 ✔ — BC-2026-0412 et BC-2026-0415 ✔ — mercredi 15 juillet 8 h ✔ — vouvoiement ✔ — 59 mots ✔",
      ],
    },
    result: "Un brouillon conforme au modèle cible dont chaque donnée est recoupée avec le fil, prêt à devenir un premier essai du journal.",
    pitfall: "Envoyer sans relire parce que « Gemini a eu accès au fil » : l'accès natif est un gain de rapidité d'accès aux données, pas un gain de fiabilité du texte généré.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Tester sur trois occurrences réelles avant de généraliser',
    intro: "Un seul essai réussi ne prouve rien. Vous rejouez l'instruction sur au moins trois fils réels différents, dont un cas limite, et vous notez pour chacun ce qui a marché et ce qui a nécessité une correction. Entrée nécessaire : trois fils des semaines précédentes.",
    steps: [
      {
        title: 'Choisir trois fils contrastés',
        actions: [
          "Choisissez un fil standard, un fil où il n'y a aucun report, et un fil atypique (donnée manquante, format inhabituel).",
          "Ne répondez pas réellement à ces fils : ouvrez-les et générez le brouillon sans l'envoyer.",
        ],
      },
      {
        title: 'Rejouer et consigner',
        actions: [
          "Pour chaque fil, collez la même instruction, générez, relisez et recoupez.",
          "Complétez pour chaque essai : date, résultat obtenu, écart constaté, ajustement apporté.",
          "Après chaque ajustement du prompt, rejouez l'essai précédent pour vérifier que vous n'avez rien cassé.",
        ],
      },
    ],
    table: {
      columns: ['Fil testé', 'Particularité', 'Écart constaté', 'Ajustement du prompt'],
      rows: [
        ['Fil du 22/06 (S25) : 8 livraisons sur 10', 'Cas standard', 'Ton trop familier (« Salut Christelle »)', 'Ajouter « vouvoiement obligatoire »'],
        ['Fil du 29/06 (S26) : 10 sur 10, aucun report', 'Aucun bon reporté', 'Mention d\'un « report » inexistant', 'Ajouter « ne mentionne un report que s\'il est écrit dans le fil »'],
        ['Fil du 06/07 (S27) : message sans chiffres', 'Cas limite : donnée manquante', 'Chiffre inventé (« 9 livraisons sur 11 »)', 'Ajouter « s\'il manque une information, écris [À COMPLÉTER] »'],
      ],
    },
    result: "Trois essais consignés : trois écarts réels, trois ajustements du prompt. Le prompt final est plus robuste que celui du premier jet, et le cas limite a révélé le risque le plus sérieux.",
    tip: "Le cas limite est celui qui apprend le plus : si Gemini invente un chiffre quand l'information manque, aucune relecture rapide ne le détectera à coup sûr. L'instruction « écris [À COMPLÉTER] » transforme l'invention en trou visible.",
  },

  // ───────────── Procédure 7 — Sheets et Docs ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 3',
    title: 'Sheets : un modèle de saisie hebdomadaire avec alertes calculées',
    intro: "La routine du lundi gagne à ne plus dépendre d'une capture : vous saisissez les valeurs de la semaine dans un classeur Sheets qui calcule seul les écarts et les alertes, et vous vous servez de Gemini pour proposer les formules, que vous contrôlez. Entrée nécessaire : les valeurs du tableau de bord, S21 à S28.",
    steps: [
      {
        title: 'Créer les deux onglets',
        actions: [
          "Dans Google Sheets, créez le classeur « Suivi_logistique_hebdo » avec un onglet « Saisie » et un onglet « Controle ».",
          "Dans « Saisie », saisissez en ligne 1 : Semaine, Nord, Sud, Ouest, Délai, Retour, Coût ; puis une ligne par semaine de S21 à S28 (lignes 2 à 9).",
          "Dans « Controle », saisissez en ligne 1 : Indicateur, Dernière valeur, Seuil, Statut ; puis les six indicateurs et leurs seuils (8 ; 8 ; 8 ; 4 ; 3 ; 1,5).",
        ],
      },
      {
        title: 'Demander les formules à Gemini et les saisir',
        actions: [
          "Ouvrez le panneau Gemini (icône en haut à droite de Sheets) et demandez : « Dans l'onglet Controle, remplis la colonne Dernière valeur avec la dernière valeur non vide de la colonne correspondante de l'onglet Saisie, et la colonne Statut avec Alerte si la dernière valeur dépasse le seuil, OK sinon. »",
          "Comparez la formule proposée à la formule de référence ci-dessous ; saisissez celle-ci si l'écart est notable.",
          "Tirez les formules sur les six lignes.",
        ],
      },
    ],
    example: {
      title: 'Formules de référence (Sheets en français)',
      lines: [
        "Controle!B2 (Nord) : =INDEX(Saisie!B:B;NBVAL(Saisie!B:B))  → 8,1 ; pour Sud, Ouest, Délai, Retour, Coût : mêmes formules avec les colonnes C, D, E, F et G.",
        "Controle!D2 : =SI(B2>C2;\"Alerte\";\"OK\")",
        "Résultat attendu : Nord Alerte (8,1 > 8) ; Sud Alerte (10,5) ; Ouest OK (5,4) ; Délai Alerte (4,6 > 4) ; Retour OK (2,6 < 3) ; Coût Alerte (1,55 > 1,50).",
      ],
    },
    result: "Un classeur à deux onglets qui affiche quatre alertes en S28 et se met à jour dès que vous ajoutez la ligne d'une nouvelle semaine.",
    pitfall: "Accepter la formule proposée sans la tester : vérifiez à la main la valeur affichée sur deux ou trois indicateurs. Une formule qui renvoie un nombre plausible n'est pas pour autant la bonne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 3',
    title: 'Docs : un gabarit de note hebdomadaire rédigé à partir du classeur',
    intro: "Le texte de la note change peu d'une semaine à l'autre : seuls les chiffres et les priorités varient. Vous créez un gabarit Docs et demandez à Gemini de le remplir à partir des valeurs du classeur, sans rien inventer. Entrée nécessaire : le classeur « Suivi_logistique_hebdo ».",
    steps: [
      {
        title: 'Créer le gabarit',
        actions: [
          "Dans Docs, créez un document « Gabarit_Synthese-logistique_hebdo ».",
          "Saisissez les titres : Synthèse (5 lignes maximum) ; Visuel ; Fiabilité ; puis laissez le corps vide.",
          "Enregistrez-le dans le dossier partagé de l'équipe logistique, avec accès limité aux personnes concernées.",
        ],
      },
      {
        title: 'Faire rédiger la synthèse',
        actions: [
          "Ouvrez le panneau Gemini dans Docs ; si votre édition le permet, ajoutez le classeur avec « @ » suivi de son nom ; sinon collez les valeurs de l'onglet Controle dans le message.",
          "Saisissez : « À partir de l'onglet Controle, rédige la synthèse de 5 lignes maximum pour le directeur des opérations. Cite chaque indicateur en alerte avec sa dernière valeur et son seuil. N'ajoute ni cause ni information absente du tableau. »",
          "Relisez et recoupez chaque chiffre avec l'onglet Controle avant de l'insérer dans le gabarit.",
        ],
      },
    ],
    example: {
      title: 'Synthèse générée puis contrôlée — semaine 28',
      lines: [
        "« Quatre indicateurs dépassent leur seuil en S28 : rupture de stock au Sud (10,5 % pour 8 %), délai moyen de livraison (4,6 jours pour 4,0), coût de transport (1,55 USD/km pour 1,50) et rupture au Nord (8,1 % pour 8 %). L'Ouest (5,4 %) et le taux de retour (2,6 %) restent sous leur seuil. »",
        "Contrôle : 4 alertes et 2 indicateurs conformes, comme dans l'onglet Controle ✔ ; aucune cause avancée ✔.",
        "Note : le classement par priorité (Sud, délai) vient du calcul de l'écart au seuil, pas de Gemini : ajoutez-le vous-même si la note doit hiérarchiser.",
      ],
    },
    result: "Un gabarit réutilisable et une synthèse de la semaine 28 produite en quelques minutes, intégralement recoupée avec le classeur.",
    tip: "Si l'option « @ » n'est pas disponible dans votre édition, vous n'avez perdu qu'une opération de copier-coller : la méthode de vérification est identique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 3',
    title: 'Tester un cas limite : la donnée manquante',
    intro: "Une automatisation qui marche sur le cas standard peut échouer en silence sur le premier cas atypique. La plus fréquente est la semaine où une valeur n'a pas été saisie. Vous provoquez volontairement ce cas pour voir ce que fait votre classeur. Entrée nécessaire : le classeur « Suivi_logistique_hebdo ».",
    steps: [
      {
        title: 'Provoquer le cas limite',
        actions: [
          "Dans « Saisie », ajoutez la ligne S29 en laissant la cellule du délai (colonne E) vide.",
          "Lisez l'onglet « Controle » : la colonne Statut du délai affiche-t-elle OK, alors que l'information manque ?",
          "Constatez le défaut : une cellule vide est lue comme zéro, donc inférieure au seuil, et le statut devient « OK » à tort.",
        ],
      },
      {
        title: 'Rendre le défaut visible',
        actions: [
          "Remplacez la formule de statut par une version qui teste la valeur vide : voir l'exemple.",
          "Tirez-la sur les six lignes et rejouez le cas limite : le statut doit afficher « Donnée manquante ».",
          "Ajoutez le cas limite à la liste de tests de votre journal d'essais.",
        ],
      },
    ],
    example: {
      title: 'Avant / après — fil rouge, semaine 29 incomplète',
      lines: [
        "Avant : =SI(B2>C2;\"Alerte\";\"OK\") avec B2 vide → « OK » (faux, rien n'a été mesuré).",
        "Après : =SI(B2=\"\";\"Donnée manquante\";SI(B2>C2;\"Alerte\";\"OK\")) → « Donnée manquante ».",
        "Même principe pour la dernière valeur : si la dernière ligne est incomplète, la formule INDEX/NBVAL lit la dernière cellule non vide de la colonne, qui peut dater d'une semaine antérieure ; contrôlez la colonne Semaine avant lecture.",
      ],
    },
    result: "Un classeur qui signale explicitement une donnée manquante au lieu d'afficher un faux « OK », et un cas limite consigné.",
    pitfall: "Considérer que la formule « marche » parce qu'elle a donné le bon résultat sur les huit semaines complètes : c'est le trou dans les données, pas la ligne parfaite, qui montre si l'automatisation est fiable.",
  },

  // ───────────── Procédure 8 — Guide d'automatisation ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 5',
    title: 'Section 1 du guide : identifier la tâche',
    intro: "Le guide d'automatisation Google Workspace avec Gemini sert à cadrer, tester et fiabiliser l'automatisation d'une tâche récurrente avant d'en dépendre. La section 1 consigne la tâche et justifie le choix. Entrée nécessaire : le fichier 04-templates/guide-automatisation-google-workspace.docx, ouvert dans Word ou importé dans Google Docs.",
    steps: [
      {
        title: 'Remplir les deux tableaux',
        actions: [
          "Ouvrez le guide : un bandeau de titre, une phrase d'objectif, puis « 1. Identification de la tâche ».",
          "Premier tableau, colonne gauche : « Tâche récurrente à automatiser » ; colonne droite : « Application concernée (Sheets / Docs / Gmail) ».",
          "Second tableau, colonne gauche : « Fréquence actuelle (quotidienne, hebdomadaire...) » ; colonne droite : « Temps actuellement passé sur cette tâche ».",
        ],
      },
      {
        title: 'Justifier le choix',
        actions: [
          "Sous les tableaux, répondez au champ « Pourquoi cette tâche est un bon candidat à l'automatisation (répétitive, format stable, pas de jugement complexe requis) ».",
          "Reprenez les trois critères entre parenthèses et prouvez chacun par un fait.",
        ],
      },
    ],
    table: {
      columns: ['Champ du guide', 'Contenu saisi — fil rouge'],
      rows: [
        ['Tâche récurrente à automatiser', 'Rédiger chaque lundi la réponse de suivi à Alpha Logistics (Kinshasa) à partir du fil de la semaine'],
        ['Application concernée', 'Gmail'],
        ['Fréquence actuelle', 'Hebdomadaire (chaque lundi)'],
        ['Temps actuellement passé', '25 minutes par semaine'],
        ['Pourquoi un bon candidat', 'Répétitive : un message par semaine. Format stable : quatre blocs identiques depuis six mois. Pas de jugement complexe : la décision (confirmer l\'enlèvement) est prise par Amani, Gemini ne rédige que la mise en forme. Enjeu faible : confirmation de planning, relecture possible avant envoi.'],
      ],
    },
    result: "La section 1 est complète : tâche, application, fréquence, temps passé et justification fondée sur les trois critères du guide.",
    pitfall: "Écrire « parce que c'est long » dans le champ de justification : la longueur justifie le gain, pas l'aptitude à l'automatisation. Seuls répétitivité, format stable et faible jugement le justifient.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 5',
    title: 'Section 2 du guide : décrire l\'approche d\'automatisation avec Gemini',
    intro: "La section 2 contient trois champs : données d'entrée, résultat attendu, et le prompt exact utilisé. C'est elle qu'un collègue relira pour reproduire votre méthode, donc la formulation doit être exacte, pas résumée. Entrée nécessaire : le prompt final de la procédure 6, après ses trois ajustements.",
    steps: [
      {
        title: 'Remplir les champs d\'entrée et de sortie',
        actions: [
          "Champ « Données d'entrée utilisées (ex : onglet Sheets source, fil Gmail, document Docs) » : nommez le fil Gmail et précisez quelle partie est lue.",
          "Champ « Résultat de sortie attendu (ex : brouillon d'email, colonne calculée, synthèse de document) » : décrivez le brouillon attendu avec sa structure et sa longueur.",
        ],
      },
      {
        title: 'Coller le prompt exact',
        actions: [
          "Champ « Prompt / instruction donnée à Gemini (formulation exacte utilisée) » : collez la version finale, mot pour mot, sans abréger.",
          "Datez la version du prompt (par exemple « version du 15/07/2026, 3 ajustements ») pour pouvoir la comparer plus tard.",
        ],
      },
    ],
    example: {
      title: 'Section 2 complétée — fil rouge',
      lines: [
        "Données d'entrée : fil Gmail « Suivi livraisons Kinshasa », dernier message d'Alpha Logistics (livraisons effectuées / prévues, bons de commande reportés, question posée) + décision d'Amani sur l'enlèvement.",
        "Résultat attendu : brouillon de réponse en quatre blocs, vouvoiement, 120 mots maximum, prêt à relire.",
        "Prompt (version du 15/07/2026) : « À partir du dernier message d'Alpha Logistics dans ce fil, rédige une réponse en français, vouvoiement obligatoire, courtoise et directe, 120 mots maximum : (1) remercie pour le point de la semaine ; (2) rappelle le nombre de livraisons effectuées sur prévues et, seulement s'il y en a, les numéros des bons de commande reportés ; (3) confirme l'enlèvement du [jour, date et heure que je te donne] ; (4) demande la date de livraison des bons reportés d'ici jeudi, seulement s'il y en a. Reprends uniquement les chiffres et numéros présents dans le fil. S'il manque une information, écris [À COMPLÉTER] au lieu de l'inventer. Signe Amani Kahindo. »",
      ],
    },
    result: "La section 2 est complète : un collègue qui lit ces trois champs peut reproduire exactement l'automatisation.",
    tip: "Écrivez le prompt avec des crochets pour les éléments variables ([jour, date et heure]) : le texte reste réutilisable chaque semaine sans retomber dans des chiffres de l'ancienne version.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 5',
    title: 'Section 3 du guide : tenir le journal d\'essais',
    intro: "La section 3 est un tableau à quatre colonnes avec trois lignes vierges : Date de l'essai, Résultat obtenu, Écart / erreur constaté, Ajustement apporté. Le guide le dit : trois essais minimum avant de considérer l'automatisation comme fiable, car un seul essai réussi ne prouve rien. Entrée nécessaire : vos notes de la procédure 6, étape 5.",
    steps: [
      {
        title: 'Renseigner une ligne par essai',
        actions: [
          "Colonne « Date de l'essai » : la date réelle du test.",
          "Colonne « Résultat obtenu » : ce que Gemini a produit, en une phrase.",
          "Colonne « Écart / erreur constaté » : la différence entre le résultat et ce qui était attendu, ou « aucun ».",
          "Colonne « Ajustement apporté » : la modification précise du prompt ou de la méthode, ou « aucun ».",
        ],
      },
      {
        title: 'Ajouter un essai de confirmation',
        actions: [
          "Si vous avez besoin d'une quatrième ligne, placez le curseur dans la dernière cellule du tableau et appuyez sur la touche Tab (Word) ou utilisez Insertion > Ligne en dessous (Docs).",
          "Rejouez le premier fil avec le prompt final et consignez le résultat dans la ligne ajoutée : c'est le test qui prouve que les ajustements n'ont rien cassé.",
        ],
      },
    ],
    table: {
      columns: ['Date de l\'essai', 'Résultat obtenu', 'Écart / erreur constaté', 'Ajustement apporté'],
      rows: [
        ['14/07/2026', 'Brouillon en 4 blocs sur le fil du 22/06 (8 livraisons sur 10)', 'Ton trop familier (« Salut Christelle »)', 'Ajout de « vouvoiement obligatoire »'],
        ['14/07/2026', 'Brouillon sur le fil du 29/06 (10 sur 10, aucun report)', 'Mention d\'un report inexistant', 'Ajout de « seulement s\'il y en a » aux blocs 2 et 4'],
        ['15/07/2026', 'Brouillon sur le fil du 06/07 (message sans chiffres)', 'Chiffre inventé : « 9 livraisons sur 11 »', 'Ajout de « s\'il manque une information, écris [À COMPLÉTER] »'],
        ['16/07/2026', 'Fil du 22/06 rejoué avec le prompt final', 'Aucun', 'Aucun — prompt retenu'],
      ],
    },
    result: "Un journal de quatre essais : trois écarts réels, trois ajustements, un essai de confirmation sans erreur. C'est la preuve que l'automatisation a été testée au-delà du cas standard.",
    pitfall: "Écrire « aucun » dans la colonne Écart pour les trois essais : si vous n'avez trouvé aucune erreur en trois essais, c'est que vous n'avez pas assez cherché, ou pas testé de cas limite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 5',
    title: 'Section 4 du guide : passer la checklist de vérification',
    intro: "La section 4 est une checklist de six cases à cocher avant de fiabiliser. Chaque case se coche avec une preuve, pas avec une impression. Entrée nécessaire : le journal d'essais, les confirmations de l'administratrice, la relecture d'une autre personne.",
    steps: [
      {
        title: 'Cocher case par case, avec preuve',
        actions: [
          "Case 1 — Le résultat a été relu intégralement, pas seulement survolé : cochez si chaque essai a été relu mot à mot.",
          "Case 2 — Les chiffres, dates et noms propres ont été recoupés avec la source d'origine.",
          "Case 3 — Un cas limite (donnée manquante, format inhabituel, ligne vide) a été testé, pas seulement le cas standard.",
        ],
      },
      {
        title: 'Terminer les trois dernières cases',
        actions: [
          "Case 4 — Les paramètres de confidentialité Google Workspace ont été vérifiés pour les données sensibles utilisées : demandez la confirmation écrite à l'administrateur.",
          "Case 5 — Une personne autre que vous a relu au moins un résultat produit avant la mise en routine.",
          "Case 6 — Vous savez qui prévenir et comment revenir en arrière si l'automatisation produit un résultat incorrect.",
        ],
      },
    ],
    table: {
      columns: ['Case du guide', 'Preuve — fil rouge'],
      rows: [
        ['1. Résultat relu intégralement', 'Les 4 brouillons ont été relus mot à mot (journal d\'essais)'],
        ['2. Chiffres, dates et noms recoupés', '9 sur 11, BC-2026-0412, BC-2026-0415, mercredi 15 juillet 8 h recoupés avec le fil'],
        ['3. Cas limite testé', 'Fil du 06/07 sans chiffres : chiffre inventé détecté et corrigé'],
        ['4. Confidentialité Workspace vérifiée', 'Confirmation de Grâce Ilunga le 13/07 : fils partenaires autorisés, aucune donnée RH dans ces fils'],
        ['5. Relu par une autre personne', 'Patrick Mumbere a relu le brouillon du 15/07 le 16/07'],
        ['6. Retour arrière connu', 'En cas d\'erreur : prévenir Christelle Mbuyi et Samuel Baraka par un e-mail de correction ; revenir à la rédaction manuelle sur la réponse type enregistrée'],
      ],
    },
    result: "Les six cases sont cochées, chacune avec sa preuve : l'automatisation peut passer à la validation.",
    pitfall: "Cocher la case 5 en relisant vous-même « à tête reposée » : une autre personne voit ce que vous ne voyez plus, et c'est précisément pour cela que le guide l'exige.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 5',
    title: 'Section 5 du guide : faire valider et mettre en routine',
    intro: "La section 5 est un tableau de deux champs : Validé par (nom, fonction) et Date de mise en routine. Elle transforme un essai personnel en pratique reconnue par l'organisation. Entrée nécessaire : le guide complété (sections 1 à 4) et la personne qui valide.",
    steps: [
      {
        title: 'Faire valider',
        actions: [
          "Envoyez le guide complété à la personne responsable du processus (ici le responsable achats) avec deux questions : le prompt est-il acceptable ? Le niveau de vérification est-il suffisant ?",
          "Intégrez ses remarques, puis demandez sa validation écrite.",
          "Saisissez dans « Validé par (nom, fonction) » : nom et fonction.",
        ],
      },
      {
        title: 'Fixer la mise en routine',
        actions: [
          "Saisissez dans « Date de mise en routine » la date de la première utilisation réelle.",
          "Planifiez un contrôle un mois plus tard : rouvrez le journal d'essais et ajoutez trois nouveaux essais réels.",
          "Archivez le guide dans le dossier partagé de l'équipe et enregistrez-le en PDF.",
        ],
      },
    ],
    example: {
      title: 'Section 5 complétée — fil rouge',
      lines: [
        "Validé par (nom, fonction) : Patrick Mumbere, responsable achats.",
        "Date de mise en routine : lundi 20/07/2026.",
        "Contrôle prévu : lundi 17/08/2026, avec trois nouveaux essais sur des fils réels ; guide archivé dans le dossier « Automatisations_Workspace ».",
      ],
    },
    result: "Un guide d'automatisation complet (sections 1 à 5), validé par une personne identifiée, avec une date de mise en routine et un contrôle planifié à un mois.",
    tip: "Une automatisation validée n'est pas définitive : la fiabilité se mesure dans le temps. Si la structure du fil change (nouveau transporteur, autre format de message), repassez par le journal d'essais.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Le tableau de bord du lundi matin : de la capture à la première lecture',
    scenario: "Rappel : lundi 13 juillet 2026, 7 h 45, Amani Kahindo reçoit la capture du tableau de bord S21-S28 ; Samuel Baraka attend avant 10 h un paragraphe de synthèse, sans information non vérifiée. Voici le raisonnement complet, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Cadrage (7 h 55 - 8 h 05)', body: "Compte professionnel confirmé, périmètre validé par écrit par l'administratrice Grâce Ilunga. Capture classée verte (indicateurs agrégés). Livrable : 5 lignes pour Samuel Baraka avant 10 h ; critère : aucun chiffre sans recoupement.", result: 'Fiche de cadrage : compte, classement vert, point d\'entrée = chat autonome.' },
      { title: 'Préparation (8 h 05 - 8 h 15)', body: "Capture en PNG net, avec légendes, unités et seuils. Cinq valeurs témoins relevées : Nord 8,1 %, Sud 10,5 %, Ouest 5,4 %, délai 4,6 jours, coût 1,55 USD/km.", result: 'Capture 2026-07-13_tableau-bord-logistique_S21-S28.png.' },
      { title: 'Prompt (8 h 15 - 8 h 20)', body: "Prompt de la ligne Image de la grille, enrichi du contexte (S21 à S28, Nord = Goma, Sud = Bukavu, Ouest = Kinshasa), du public (directeur des opérations), de la demande des 2 alertes avec seuil, de l'interdiction d'inventer et de la liste des chiffres lus.", result: 'Prompt enregistré en ligne 9 de la grille ; Synthèse par type : Image = 2, total = 5.' },
      { title: 'Réponse brute (8 h 24)', body: "Gemini inverse les séries Sud et Ouest, qualifie la baisse du Nord de « forte », juge le délai « stable » et désigne l'Ouest et le coût comme priorités. Deux témoins sur cinq contredits.", result: 'Verdict immédiat : la réponse n\'est pas utilisable en l\'état.' },
    ],
    table: {
      columns: ['Contrôle à ce stade', 'Résultat'],
      rows: [
        ['Valeurs témoins contredites', '2 sur 5 (Sud et Ouest)'],
        ['Cause identifiée', 'Séries Sud (orange) et Ouest (rouge) aux couleurs voisines'],
        ['Décision', 'Vérification complète avant toute transmission'],
        ['Temps écoulé', '39 minutes ; échéance dans 1 h 36'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — La vérification : cinq affirmations sur sept corrigées',
    scenario: "Le brouillon de Gemini est prêt à être copié, mais Amani applique la procédure de vérification : affirmations numérotées, recoupement, tendances, recalcul, correction, verdict. Chaque contrôle est consigné.",
    steps: [
      { title: 'Affirmations (8 h 30)', body: "Sept affirmations extraites : trois sur la rupture de stock, une sur le délai, une sur le retour, une sur le coût, une sur les priorités.", result: 'Tableau à quatre colonnes prêt.' },
      { title: 'Recoupement des chiffres (8 h 35)', body: "Six chiffres cités : quatre exacts, deux attribués à la mauvaise série (Sud 5,4 % au lieu de 10,5 % ; Ouest 10,5 % au lieu de 5,4 %).", result: 'Erreur d\'inversion localisée.' },
      { title: 'Tendances et légende (8 h 42)', body: "Nord : − 1,5 point (9,6 → 8,1 %), pic de 12,4 % en S24, toujours au-dessus du seuil de 8 % : « forte baisse » à retirer. Délai : 3,8 → 4,6 jours (+ 21 %), seuil de 4,0 dépassé depuis S25 : « stable » faux.", result: 'Deux tendances corrigées.' },
      { title: 'Recalcul dans Sheets (8 h 50)', body: "Classeur Controle_tableau-bord_S28 : écart au seuil Sud + 31,3 %, délai + 15,0 %, coût + 3,3 %, Nord + 1,3 % ; Ouest et retour sous seuil. Priorités : Sud et délai.", result: 'Classement calculé, indépendant de Gemini.' },
      { title: 'Correction et revérification (8 h 55 - 9 h 05)', body: "Message de correction avec les preuves ; nouvelle version relue : les six valeurs lues et les deux priorités concordent avec le classeur.", result: 'Deuxième version conforme.' },
      { title: 'Verdict', body: "Sur sept affirmations de la première version, deux sont confirmées (retour, coût) et cinq doivent être corrigées. Écarts consignés pour le journal d'essais.", result: 'Score : 2 confirmées / 5 corrigées.' },
    ],
    result: "La première réponse aurait envoyé les renforts de stock à Kinshasa alors que la rupture se joue à Bukavu : la vérification a évité une décision opérationnelle inversée.",
    tip: "Le plus utile à noter dans le journal n'est pas le score, mais le mécanisme : deux séries de couleurs voisines. Il se corrige dans le prompt en donnant la correspondance couleur / région.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — La note transmise et le guide d\'automatisation du lundi',
    scenario: "À 9 h 10, Amani rédige la synthèse finale à partir des faits validés, assemble la note Docs avec la capture annotée, exporte le PDF et envoie le message à 9 h 38, soit vingt-deux minutes avant l'échéance. Elle cadre ensuite la routine du lundi avec le guide d'automatisation.",
    steps: [
      { title: '1. Synthèse transmise', body: "Semaine 28 : deux indicateurs appellent une action immédiate. Rupture de stock au Sud (Bukavu) : 10,5 % pour un seuil de 8 % (+ 3,3 points depuis S21). Délai moyen de livraison : 4,6 jours pour un seuil de 4,0 (+ 21 %). Nord en baisse à 8,1 % depuis le pic de 12,4 % de S24, mais au-dessus du seuil ; Ouest stable à 5,4 % ; coût de transport à 1,55 USD/km à surveiller ; retour (2,6 %) repassé sous son seuil de 3 %." },
      { title: '2. Visuel et fiabilité', body: "Capture annotée (cadre rouge sur la courbe Sud et le bloc Délai) avec le titre « Bukavu et les délais de livraison passent au-dessus de leur seuil d'alerte en S28 ». Bloc fiabilité : lecture assistée par Gemini, recoupée chiffre par chiffre, écarts recalculés dans Sheets, deux chiffres relus par P. Mumbere." },
      { title: '3. Guide d\'automatisation — sections 1 et 2', body: "Tâche : rédiger chaque lundi la synthèse du tableau de bord logistique (4 indicateurs, 3 régions). Application : Docs (note) et Gemini en chat autonome (lecture de la capture). Fréquence : hebdomadaire ; temps actuel : 45 minutes. Entrée : capture PNG du tableau de bord. Sortie : synthèse de 5 lignes. Prompt : celui de la grille, version adaptée." },
      { title: '4. Guide — section 3 (journal d\'essais)', body: "13/07 : première version avec séries Sud et Ouest inversées → ajout de la correspondance couleur / région au prompt. 14/07, capture S27 rejouée : unité USD/km omise → ajout de « cite l'unité à côté de chaque valeur ». 15/07, capture S26 avec légende masquée (cas limite) : séries inventées → ajout de « si une légende est absente ou illisible, écris illisible »." },
      { title: '5. Guide — sections 4 et 5', body: "Checklist : six cases cochées avec preuve (relecture, recoupement, cas limite, confidentialité confirmée par G. Ilunga, relecture par P. Mumbere, retour arrière connu). Validation : Samuel Baraka, directeur des opérations ; mise en routine le lundi 20/07/2026." },
    ],
    result: "Décision de Samuel Baraka (exemple) : la note est intégrée au rapport à Furaha Bisimwa ; un renfort de stock est envoyé à Bukavu ; Alpha Logistics est relancée sur les délais de Kinshasa.",
    tip: "Gardez ce corrigé comme modèle : sur votre prochain tableau de bord ou document, seuls les noms, les chiffres et le prompt adapté changeront. La structure du raisonnement reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — La synthèse de la semaine 29, sans regarder le corrigé',
    instructions: "Le lundi 20 juillet 2026, le tableau de bord de la semaine 29 arrive à Amani. Vous refaites la démarche seul : prompt, vérification d'une affirmation de Gemini, documentation de l'automatisation. Comparez ensuite votre travail avec le corrigé et la liste de contrôle qui suit. Les valeurs ci-dessous remplacent la capture : saisissez-les dans un Sheets, faites un graphique, puis capturez-le.",
    table: {
      columns: ['Indicateur', 'Seuil', 'Valeur S29', 'Série S22 à S29'],
      rows: [
        ['Rupture Nord', '8 %', '7,4 %', '10,4 ; 11,9 ; 12,4 ; 11,0 ; 9,8 ; 8,7 ; 8,1 ; 7,4'],
        ['Rupture Sud', '8 %', '9,2 %', '7,6 ; 8,0 ; 8,9 ; 9,4 ; 9,9 ; 10,2 ; 10,5 ; 9,2'],
        ['Rupture Ouest', '8 %', '5,6 %', 'valeur S28 : 5,4 %'],
        ['Délai moyen', '4,0 jours', '4,3 jours', 'valeur S28 : 4,6 jours'],
        ['Taux de retour', '3,0 %', '3,2 %', 'valeur S28 : 2,6 %'],
        ['Coût de transport', '1,50 USD/km', '1,52 USD/km', 'valeur S28 : 1,55 USD/km'],
      ],
    },
    steps: [
      {
        title: 'Formuler la demande d\'analyse',
        actions: [
          "Partez de la ligne Image de la grille et rédigez le prompt exact : format de sortie (longueur, ton), éléments à identifier (chaque indicateur avec valeur et tendance), consigne de signaler ceux qui nécessitent une attention immédiate.",
          "Ajoutez le contexte, le public, l'interdiction d'inventer et la liste des chiffres lus.",
          "Enregistrez votre prompt en ligne 10 de la grille et vérifiez l'onglet « Synthèse par type ».",
        ],
      },
      {
        title: 'Simuler la vérification',
        actions: [
          "Gemini affirme : « Le taux de rupture de stock de la région Nord a fortement baissé sur 8 semaines. » Décrivez en 3 ou 4 lignes la procédure exacte de vérification : quelles données recouper, et où.",
          "Appliquez-la : calculez la baisse sur la série S22 à S29, par rapport au pic, et comparez au seuil.",
          "Rédigez la phrase corrigée, chiffrée, que vous transmettriez.",
        ],
      },
      {
        title: 'Documenter l\'automatisation associée',
        actions: [
          "Complétez le guide d'automatisation pour la synthèse hebdomadaire : tâche, application, approche (entrée, sortie, prompt).",
          "Consignez au moins 2 lignes du journal d'essais avec un écart plausible constaté et l'ajustement apporté.",
        ],
      },
    ],
    deliverable: "Le prompt rédigé, le paragraphe de vérification, et le guide d'automatisation complété — le tout tenant sur une page de synthèse.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Un mémo vocal à vérifier",
    instructions: "Patrick Mumbere enregistre un mémo vocal de deux minutes le mardi 14 juillet. Gemini produit un compte-rendu. Vous disposez du texte réellement dit (transcription de contrôle) : trouvez les erreurs de Gemini et corrigez le compte-rendu, en appliquant la procédure 5.",
    steps: [
      {
        title: 'Texte réellement dit (transcription de contrôle)',
        actions: [
          "« Ici Patrick, mardi 14 juillet. J'ai relancé Transco Sarl pour la justification de leurs tarifs du deuxième trimestre. Ils ont promis une réponse avant le vendredi 24 juillet. Je consulte trois transporteurs, dont Kivu Freight Co, pour comparer les offres : devis attendus le jeudi 30 juillet au plus tard. Le budget de consultation est de 600 dollars. Reste à savoir si on suspend les nouvelles commandes à Transco en attendant. »",
        ],
      },
      {
        title: 'Compte-rendu produit par Gemini',
        actions: [
          "Décision : relancer Transco Sarl, réponse avant le vendredi 31 juillet.",
          "Action : consulter deux transporteurs, devis avant le jeudi 30 juillet ; budget de consultation de 900 dollars.",
          "Question non tranchée : suspendre ou non les nouvelles commandes à Alpha Logistics.",
        ],
      },
      {
        title: 'À produire',
        actions: [
          "Écrivez le prompt de la ligne Audio adapté, avec l'exigence d'horodatage.",
          "Dressez le tableau de vérification : élément de Gemini, ce qui a été dit, verdict.",
          "Rédigez le compte-rendu corrigé.",
        ],
      },
    ],
    tip: "Points de contrôle : quatre erreurs à trouver — la date de réponse de Transco (vendredi 24 et non 31 juillet), le nombre de transporteurs (trois et non deux), le budget (600 et non 900 dollars), et le fournisseur concerné par la suspension (Transco Sarl, pas Alpha Logistics).",
    deliverable: "Le prompt, le tableau de vérification à quatre erreurs et le compte-rendu corrigé, sur une demi-page.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre contenu et votre propre routine',
    instructions: "Appliquez les procédures du module à un contenu réel de votre quotidien (tableau de bord, photo de facture ou de document, mémo vocal, vidéo), et à une tâche récurrente de votre travail, dans le respect des règles de votre organisation.",
    steps: [
      {
        title: 'Cadrer et analyser',
        actions: [
          "Remplissez votre fiche de cadrage : compte, politique de l'organisation, classement vert / orange / rouge du contenu, point d'entrée, livrable, échéance.",
          "Préparez le contenu (capture nette, valeurs témoins, masquage éventuel), adaptez le prompt de la grille, enregistrez-le en ligne libre de la grille.",
          "Lancez l'analyse dans Gemini et archivez la réponse brute.",
        ],
      },
      {
        title: 'Vérifier et produire',
        actions: [
          "Tableau de recoupement affirmation par affirmation, avec verdicts ; recalcul dans Sheets des écarts publiés.",
          "Note texte + visuel dans Docs, exportée en PDF, avec dossier de preuve.",
        ],
      },
      {
        title: 'Automatiser',
        actions: [
          "Identifiez une tâche récurrente avec la notation à quatre critères, testez l'instruction sur trois occurrences réelles dont un cas limite.",
          "Complétez le guide d'automatisation (sections 1 à 5) avec une validation par une autre personne.",
        ],
      },
    ],
    deliverable: "La note en PDF, le tableau de recoupement, le dossier de preuve et le guide d'automatisation complété avec au moins trois essais — prêts à être réutilisés.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre prompt précise le format de sortie (longueur et ton), les éléments à identifier avec valeur et tendance, la consigne de signaler les indicateurs en attention immédiate, l'interdiction d'inventer et la liste des chiffres lus.",
      "Votre prompt est enregistré dans une ligne libre de la grille (9 à 11), avec un type écrit exactement « Image », « Graphique », « Audio » ou « Vidéo », et l'onglet « Synthèse par type » est cohérent avec vos lignes.",
      "Votre paragraphe de vérification cite les données précises recoupées (valeurs de départ, d'arrivée et de pic de la série concernée) et le lieu du contrôle (la capture originale, l'outil source).",
      "Pour l'affirmation du Nord en semaine 29, vous chiffrez la baisse : − 3,0 points (de 10,4 % à 7,4 %), soit − 28,8 %, depuis un pic de 12,4 % ; première fois sous le seuil de 8 % sur la période S22 à S29.",
      "Vos deux indicateurs prioritaires en S29 sont le Sud (9,2 %, 15,0 % au-dessus du seuil) et le délai (4,3 jours, 7,5 % au-dessus du seuil), le taux de retour (3,2 % pour 3,0 %) étant repassé au-dessus de son seuil.",
      "Aucune affirmation qualitative (« forte », « stable ») n'est transmise sans sa conversion en écart chiffré.",
      "Votre guide d'automatisation contient les sections 1 à 5, avec un prompt reproduit mot pour mot et au moins 2 lignes de journal d'essais mentionnant un écart plausible et son ajustement.",
      "Pour le mémo vocal, vos quatre erreurs sont trouvées : date, nombre de transporteurs, montant, fournisseur concerné.",
      "Chaque contenu de terrain a son classement de sensibilité et, si nécessaire, son masquage ou son accord préalable.",
      "L'ensemble de votre livrable tient sur une page de synthèse, sans donnée sensible non masquée.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Sous-utiliser la multimodalité par réflexe : décrire en texte ce qu'il suffisait de montrer. Appliquez le test « montrer ou décrire ? » avant d'écrire.",
      "Ne jamais vérifier une analyse d'image : l'IA peut confondre deux séries de couleurs proches et ne signale pas son incertitude. Relevez des valeurs témoins avant l'envoi et exigez la liste des chiffres lus.",
      "Capturer un graphique sans sa légende, ses unités ou ses seuils : Gemini devine ce qu'il ne voit pas. Capturez tout ce qui porte du sens, en PNG net.",
      "Laisser des mots flous dans le prompt (« plus forte variation », « important ») : définissez amplitude ou évolution nette, seuil et période.",
      "Transmettre un jugement (« forte baisse », « stable ») sans le convertir en chiffre : un qualificatif non chiffré se contredit toujours.",
      "Corriger un total pour qu'il colle à la somme extraite d'une facture : l'écart signale une ligne mal lue, qu'il faut chercher sur la photo originale.",
      "Ne pas réécouter les passages à noms propres, chiffres et dates d'un mémo vocal : ce sont ceux où les erreurs de transcription se concentrent.",
      "Reprendre une anomalie signalée dans une vidéo sans la visionner : elle peut être inventée, mal située ou de nature différente.",
      "Ignorer les paramètres de confidentialité Google Workspace pour des données RH, financières ou bénéficiaires, ou travailler avec un compte personnel.",
      "Traiter Gemini intégré comme « moins risqué » parce qu'il est natif à Workspace : l'accès direct ne réduit en rien le besoin de relecture humaine.",
      "Valider une automatisation sur un seul essai réussi : testez au moins trois occurrences réelles, dont un cas limite (donnée manquante, format inhabituel).",
      "Laisser l'IA prendre la décision à votre place dans un brouillon (confirmer, refuser, accepter) : la décision se donne dans l'instruction, elle ne se délègue pas.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez cadré l'usage de Gemini : compte professionnel, règles de l'organisation, classement vert / orange / rouge des contenus, point d'entrée et critère de réussite.",
      "Vous avez préparé une capture nette avec des valeurs témoins, adapté le prompt de la grille de prompts multimodaux et l'avez enregistré en ligne 9, avec l'onglet « Synthèse par type » à jour (5 prompts).",
      "Vous avez vérifié la lecture de Gemini affirmation par affirmation : cinq affirmations sur sept corrigées, écarts recalculés dans Sheets, deux indicateurs prioritaires établis (Sud + 31,3 % au-dessus du seuil, délai + 15,0 %).",
      "Vous avez créé et envoyé une note texte + visuel (Docs, capture annotée, PDF, e-mail Gmail) avec son dossier de preuve, avant l'échéance de 10 h.",
      "Vous avez extrait et vérifié trois contenus de terrain : une facture (ligne de 800 USD mal lue, corrigée), un mémo vocal (date, montant et responsable corrigés), une vidéo (anomalie requalifiée, ordre des recommandations revu).",
      "Vous avez automatisé un brouillon Gmail récurrent testé sur trois fils réels, un modèle Sheets avec alertes calculées et un gabarit Docs, et testé la donnée manquante.",
      "Vous avez complété le guide d'automatisation Google Workspace (sections 1 à 5) : journal de quatre essais, checklist de six cases avec preuves, validation par une autre personne et mise en routine datée.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer ce qu'apporte concrètement la multimodalité par rapport à une IA purement textuelle, et dans quels cas elle change réellement la vitesse de travail.",
      "Je sais formuler une demande précise pour faire analyser une image, un graphique ou un document visuel par Gemini, avec format de sortie, éléments à identifier, public et garde-fous.",
      "Je vérifie systématiquement une analyse générée automatiquement avant de l'intégrer à un rapport ou une communication.",
      "J'ai identifié une tâche récurrente de mon quotidien professionnel qui est un bon candidat à l'automatisation dans Sheets, Docs ou Gmail.",
      "J'ai complété un journal d'essais sur au moins 3 occurrences avant de considérer une automatisation fiable.",
      "Je connais la checklist à valider avant de mettre une automatisation IA en routine sans relecture systématique.",
      "Je sais où vérifier les paramètres de confidentialité Google Workspace avant de traiter une donnée sensible avec Gemini.",
      "J'ai enregistré au moins un prompt adapté dans la grille de prompts multimodaux et vérifié l'onglet « Synthèse par type ».",
      "J'ai testé au moins un cas limite (donnée manquante, format inhabituel) sur mon automatisation.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « Prompting Engineering avancé — L'art de commander l'IA ». Vous y apprendrez les techniques avancées de conception de prompts — chaîne de pensée, few-shot learning, prompt chaining et systèmes de prompts réutilisables — pour obtenir des résultats fiables sans refaire chaque fois le même travail de correction, comme vous venez de le faire avec les ajustements de votre journal d'essais.",
  },
]
