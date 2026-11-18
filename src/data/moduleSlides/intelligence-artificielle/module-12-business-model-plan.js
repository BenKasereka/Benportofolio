// Module 12 — IA pour le Business Model & le Business Plan — Structurer sans déléguer la décision
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (canevas BMC, étude de marché sourcée, plan financier simplifié,
// pitch resserré, frontière structuration / décision) est détaillée étape par
// étape et appliquée au même fil rouge, le dossier GomaLogis Conseil à remettre
// à un incubateur le jeudi 19 novembre 2026. Organisations et personnes
// fictives ; chiffres recalculés de bout en bout (hypothèses, pas des données
// de marché réelles).
export default [
  {
    type: 'cover',
    title: 'IA pour le Business Model & le Business Plan — Structurer sans déléguer la décision',
    hook: "À la fin de ce module, vous saurez monter en dix jours un dossier qu'un partenaire peut lire : un Business Model Canvas testé auprès de vrais clients, une étude de marché dont chaque chiffre a été vérifié à sa source, un plan financier de 12 mois où aucune hypothèse n'est implicite, et un pitch de trois minutes qui sonne encore comme vous — l'IA structure, vous décidez.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Construire un Business Model Canvas en 9 blocs avec l'IA comme partenaire de brainstorming (norme CLARTE) puis le faire challenger bloc par bloc, en produisant la feuille « Canevas BMC » complétée et la feuille « Questions de challenge IA » avec vos propres décisions.",
      "Tester le canevas auprès de 5 clients potentiels réels, en produisant une fiche d'entretiens et la liste des ajustements que vous avez décidés.",
      "Faire produire une étude de marché par l'IA (méthode STAR) et vérifier chaque chiffre contre sa source réelle, en produisant une fiche de vérification en trois temps et la feuille « Suivi des hypothèses » à jour.",
      "Structurer un plan financier simplifié avec des hypothèses explicites, en produisant la Partie A du gabarit (revenus, coûts, seuil de rentabilité, journal des hypothèses) et une trame de 12 mois dans un tableur, recalculée par vous.",
      "Resserrer un pitch de trois minutes avec l'IA comme lecteur critique (méthode STAR), en produisant la Partie B du gabarit : structure du pitch en 7 lignes, checklist de challenge et validation.",
      "Distinguer à chaque étape ce qui est délégable à l'IA (structurer, reformuler, challenger) de ce qui vous appartient (positionnement, prix, croissance), en produisant un registre des décisions daté.",
      "Assembler un dossier prêt à présenter : canevas, fiche de vérification, plan financier et pitch, la partie plan financier et pitch tenant en 2 pages maximum au format PDF.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de stratégie : vous allez monter un dossier complet sur un seul cas suivi du début à la fin. Chaque procédure est découpée en étapes numérotées, avec le prompt exact à copier, les cellules ou sections du gabarit à remplir et le résultat attendu sur le cas.",
      "À la fin du module, vous aurez en main sept livrables réutilisables tels quels sur votre propre projet :",
    ],
    bullets: [
      "Le canevas BMC complété (feuille « Canevas BMC » de canevas-business-model-canvas-ia.xlsx), testé auprès de 5 clients potentiels.",
      "La feuille « Questions de challenge IA » avec, pour chacun des 9 blocs, la décision retenue : la vôtre, pas celle de l'IA.",
      "Une fiche de vérification de source en trois temps (chiffre annoncé, ce que dit la source, décision) et la feuille « Suivi des hypothèses » à jour.",
      "La Partie A du gabarit gabarit-plan-financier-pitch-simplifie.docx : hypothèses de revenus, hypothèses de coûts, seuil de rentabilité, journal des hypothèses.",
      "Une trame de compte de résultat sur 12 mois dans un tableur, avec contrôle de trésorerie et test de sensibilité.",
      "La Partie B du même gabarit : pitch en 7 lignes, checklist de challenge cochée, validation.",
      "Un registre des décisions qui prouve, étape par étape, ce que l'IA a structuré et ce que vous avez tranché.",
    ],
    tip: "Ouvrez dès maintenant les deux gabarits du dossier 04-templates : le classeur Excel à trois feuilles et le document Word à deux parties. Chaque procédure indique la cellule ou la section exacte à remplir, vous pouvez donc travailler à l'écran en même temps que vous lisez.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : GomaLogis Conseil et le rendez-vous du jeudi 19 novembre 2026',
    body: [
      "Amani Kahindo, chargée administrative et logistique à Horizon Grands Lacs (l'organisation fictive des modules précédents), porte à côté un projet : GomaLogis Conseil, un service de conseil en optimisation logistique pour les PME de la région de Goma — audit de la chaîne d'approvisionnement, outils simples de suivi de stock, formation ponctuelle des équipes. Avec l'accord écrit de la directrice pays Furaha Bisimwa, elle a mené trois missions en indépendant en 12 mois, hors temps de travail et pour des PME sans lien avec les fournisseurs de l'organisation. Elle n'a jamais rien formalisé.",
      "Le lundi 9 novembre 2026, Espérance Safari, chargée de programme à Kivu Entreprendre (un incubateur fictif), lui écrit : « Nous pouvons étudier un appui. Pouvez-vous nous remettre un dossier structuré — canevas, étude de marché sourcée, plan financier simplifié et pitch de trois minutes — avant notre rendez-vous du jeudi 19 novembre à 10 h ? » Amani a dix jours, un ordinateur portable et un compte d'IA professionnel. Josué Bahati, comptable à Horizon Grands Lacs, a accepté de relire ses calculs.",
    ],
    table: {
      columns: ['Date', 'Étape', 'Livrable'],
      rows: [
        ['Lun 09/11', 'Cadrage et premier jet du canevas', 'Description du projet, canevas brut'],
        ['Mar 10/11', 'Challenge du canevas et décisions', 'Feuilles « Canevas BMC » et « Questions de challenge IA »'],
        ['Mer 11 – jeu 12/11', 'Cinq entretiens avec des gérants de PME', 'Fiche d\'entretiens'],
        ['Ven 13/11', 'Étude de marché et vérification des sources', 'Feuille « Suivi des hypothèses »'],
        ['Lun 16/11', 'Plan financier simplifié', 'Partie A du gabarit, trame sur 12 mois'],
        ['Mar 17/11', 'Pitch resserré', 'Partie B du gabarit'],
        ['Mer 18/11', 'Relecture par le comptable, envoi du PDF', 'Dossier remis à 16 h'],
      ],
    },
    highlight: "Le projet est réel pour Amani, mais tous les chiffres du module sont des hypothèses fictives. Retenez la méthode, pas les montants : sur votre propre projet, chaque nombre devra venir de vos devis, de vos relevés et de vos entretiens.",
  },
  {
    type: 'concept',
    title: "La carte du module : 5 procédures, dans l'ordre où vous les exécuterez",
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. Ne sautez aucune étape : un chiffre de marché non vérifié au jour 4 se retrouve, multiplié, dans le plan financier et dans le pitch présentés au partenaire.",
    bullets: [
      "Procédure 1 — Construire, challenger et tester le Business Model Canvas (8 étapes) : description du projet, prompt CLARTE, premier jet, report dans le gabarit, challenge, décisions, entretiens clients.",
      "Procédure 2 — Réaliser une étude de marché sourcée (6 étapes) : prompt STAR, recherche avec Perplexity, ouverture de chaque source, fiche de vérification, suivi des hypothèses, TAM / SAM / SOM.",
      "Procédure 3 — Structurer le plan financier simplifié (9 étapes) : données réelles, prompt CLARTE, confrontation des hypothèses, revenus, coûts, trame de 12 mois, seuil de rentabilité, sensibilité et trésorerie, journal des hypothèses.",
      "Procédure 4 — Resserrer le pitch et l'executive summary (8 étapes) : premier jet, prompt STAR, diagnostic, coupes et preuves, version resserrée, structure en 7 lignes, checklist de challenge, validation et PDF.",
      "Procédure 5 — Tracer la frontière entre structurer et décider (4 étapes) : inventaire des décisions, reformulation des demandes, application au positionnement, registre des décisions.",
    ],
  },
  {
    type: 'concept',
    title: 'Un excellent copilote de structuration',
    body: [
      "Face à un canevas vierge, un tableau de compte de résultat ou un pitch trop long, l'IA rend un service réel : elle organise une pensée confuse en blocs cohérents, reformule une idée floue en phrase actionnable et challenge une hypothèse en quelques secondes, parce qu'elle n'a aucun attachement émotionnel à votre idée et peut la comparer froidement aux huit autres blocs.",
      "Un porteur de projet qui itère seul tombe presque toujours dans le même piège : il ne challenge que les blocs qui l'intéressent (produit, proposition de valeur) et néglige les autres (structure de coûts, flux de revenus, partenaires clés). Une IA bien sollicitée traite les 9 blocs avec la même rigueur, à condition de le lui demander explicitement.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Amani ne pense qu'à sa proposition de valeur (le tableur de suivi de stock) et à son segment (les PME).",
        "Consigne donnée à l'IA : « Challenge chaque bloc, y compris Partenaires clés et Structure de coûts, au maximum 3 points par bloc. »",
        "Résultat : l'IA signale deux angles morts qu'Amani n'avait pas vus — la dépendance à un seul partenaire d'apport de clients et le temps de déplacement non facturé.",
      ],
    },
    tip: "Demandez toujours le challenge bloc par bloc et nommez les blocs ennuyeux : c'est là que l'IA vous rend le plus service, parce que vous ne les auriez pas ouverts.",
  },
  {
    type: 'warning',
    title: 'Mais un mauvais décideur final en stratégie',
    items: [
      "Une IA générative n'a ni responsabilité légale ou financière sur l'issue de votre projet, ni intuition du marché réel : celle qui vient du terrain, des conversations avec de vrais clients, de la connaissance fine d'un secteur.",
      "Elle peut proposer trois positionnements différents avec la même assurance rédactionnelle pour chacun, sans jamais dire lequel elle « préfère » au sens d'un jugement engagé.",
      "Si on lui demande de trancher, sa réponse ressemble à une décision mais n'en est pas une : c'est une extrapolation statistique de ce qui sonne plausible dans un contexte comparable, pas une évaluation de votre marché spécifique.",
      "Un canevas ou un plan qui porte les décisions de l'IA plutôt que les vôtres n'est pas plus faible sur la forme : il est vide sur le fond, parce que personne n'a pris de décision réelle.",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Structurer (délégable) ou décider (à vous) : la frontière à chaque étape',
    columns: ['Étape', "Ce que vous déléguez à l'IA (structurer)", 'Ce qui reste à vous (décider)'],
    rows: [
      ['Business Model Canvas', "Remplir les 9 blocs à partir de votre description, repérer incohérences et blocs vagues", 'Quel segment servir en priorité, quel positionnement, quel prix'],
      ['Étude de marché', 'Chercher, présenter en tableau (donnée, source, année), proposer des pistes de concurrents', "Quel chiffre retenir après avoir ouvert la source, ce qu'on écarte"],
      ['Plan financier', 'Proposer les lignes de la trame, rappeler les formules, poser la question du point mort', "Quelle hypothèse de volume, quel tarif, quelle rémunération minimale, quel scénario"],
      ['Pitch et executive summary', "Repérer les passages trop longs, les affirmations non étayées, les questions d'un sceptique", 'Ce que vous coupez, ce que vous gardez, votre voix, votre demande précise'],
    ],
  },
  {
    type: 'stat-callout',
    stat: '340 M USD',
    caption: "Le chiffre de marché que l'IA a annoncé pour GomaLogis Conseil, avec deux décimales et un nom d'organisme crédible. Une fois le lien ouvert : page introuvable.",
    context: "Aucun chiffre de marché, de croissance sectorielle ou de taille d'audience cité par une IA ne doit entrer dans un document destiné à un tiers (banquier, investisseur, comité, incubateur) sans que sa source réelle ait été retrouvée, ouverte et lue.",
  },
  {
    type: 'concept',
    title: 'Le risque des chiffres de marché hallucinés',
    body: "Une IA peut citer une taille de marché avec exactement le même niveau de confiance qu'un chiffre réellement sourcé : rien dans le ton ne distingue une estimation inventée d'une donnée réelle. L'hallucination est ici particulièrement traître : le chiffre a l'air précis, il s'intègre naturellement dans un paragraphe par ailleurs solide, et il sera cité par la personne en face de vous.",
    example: {
      title: "Ce que l'IA a répondu à Amani, et ce qu'Amani a fait",
      lines: [
        "Réponse : « Le marché du conseil aux PME en RDC est estimé à 340 millions de dollars (Observatoire Régional des Services aux Entreprises, rapport annuel 2023). »",
        "Vérification : le lien renvoie une erreur 404 et la recherche du nom de l'organisme ne donne aucun résultat.",
        "Décision d'Amani : chiffre écarté du dossier, statut « Invalidée » dans le Suivi des hypothèses, remplacé par une estimation locale prudente (nombre de PME recensées à Goma).",
      ],
    },
    highlight: "Perplexity attache des citations vérifiables à ses réponses, mais même une citation affichée doit être ouverte et lue : un lien en bas de réponse n'est pas une preuve.",
  },
  {
    type: 'comparison-table',
    title: 'Les 9 blocs du Business Model Canvas — ce que le gabarit vous demande',
    columns: ['Bloc', 'Question du gabarit (en résumé)', 'Ce que GomaLogis y met (version finale)'],
    rows: [
      ['1. Partenaires clés', 'Qui sont vos partenaires et fournisseurs clés ?', 'Kivu Entreprendre, deux consultants indépendants comparables, opérateur internet'],
      ['2. Activités clés', 'Quelles activités votre proposition de valeur exige-t-elle ?', 'Audit sur site, mise en place du tableur de stock, formation, prospection (4 jours par mois)'],
      ['3. Ressources clés', 'Quelles ressources humaines, matérielles, financières ?', 'La porteuse, un ordinateur portable, un modèle de tableur, 3 références clients, 20 jours ouvrés par mois'],
      ['4. Proposition de valeur', 'Quelle valeur, quel problème résolu ?', 'Moins de ruptures et de pertes de stock en 5 jours, à prix fixe'],
      ['5. Relations clients', 'Quel type de relation chaque segment attend-il ?', 'Mission ponctuelle puis suivi mensuel optionnel, contact direct par messagerie'],
      ['6. Canaux', 'Par quels canaux atteindre les segments ?', 'Recommandation des clients, visite directe, réseau de l\'incubateur, messagerie professionnelle'],
      ['7. Segments de clientèle', 'Pour qui créez-vous de la valeur ?', 'PME de distribution et d\'agro-transformation de Goma, 10 à 50 employés, avec un stock physique'],
      ['8. Structure de coûts', 'Quels sont les coûts les plus importants ?', 'Fixes 700 USD par mois, variables 75 USD par mission, temps non facturé'],
      ['9. Flux de revenus', 'Pour quelle valeur les clients paient-ils vraiment ?', 'Mission 750 USD, formation 300 USD, suivi mensuel 100 USD'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Business Model Canvas (BMC)', definition: "Cadre en 9 blocs (segments de clientèle, proposition de valeur, canaux, relations clients, flux de revenus, ressources clés, activités clés, partenaires clés, structure de coûts) qui résume un modèle économique sur une page." },
      { term: 'TAM / SAM / SOM', definition: "Trois niveaux de marché emboîtés : TAM (marché total théorique), SAM (part réellement accessible avec votre offre), SOM (part réaliste captable à moyen terme). L'IA aide à les structurer, jamais à les inventer sans source." },
      { term: 'Hypothèse', definition: "Affirmation chiffrée ou stratégique non encore confirmée par une source externe ou un test terrain (prix accepté, taux de conversion, délai de vente). Elle est marquée comme telle, jamais présentée comme un fait acquis." },
      { term: 'Hallucination', definition: "Information fausse produite par l'IA avec une assurance identique à celle d'une information vraie ; très dangereuse sur les chiffres, qui paraissent précis." },
      { term: 'Executive summary', definition: "Synthèse d'une page (parfois moins) qui ouvre un business plan et que la majorité des lecteurs pressés liront seule ; elle porte le message central sans exiger la lecture du reste." },
      { term: 'Point mort (seuil de rentabilité)', definition: "Niveau d'activité à partir duquel les revenus couvrent tous les coûts. Ici : coûts fixes mensuels ÷ marge par mission (prix − coût variable unitaire)." },
      { term: 'Marge par mission', definition: "Prix d'une mission moins son coût variable unitaire : 750 − 75 = 675 USD. C'est ce qui reste pour couvrir les coûts fixes." },
      { term: 'Coût fixe / coût variable', definition: "Fixe : dû quel que soit le nombre de missions (licences, téléphone, rémunération minimale). Variable : proportionnel à l'activité (déplacement, impressions)." },
      { term: 'Norme CLARTE / méthode STAR', definition: "CLARTE : Contexte, Livrable, Audience, Restrictions, Ton, Exemples. STAR : Situation, Tâche, Action, Résultat, pour les demandes à raisonnement en plusieurs étapes." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Quel outil pour quelle étape',
    columns: ['Outil', 'Rôle dans ce module', 'Limite à connaître'],
    rows: [
      ['ChatGPT', 'Brainstorming du premier jet des 9 blocs ; variantes de pitch à comparer', 'Remplit vite et avec aplomb : il faut ensuite le faire challenger'],
      ['Claude', 'Challenge critique : incohérences entre blocs, affirmations non étayées, hypothèses financières qui se contredisent', "Ne tranche pas à votre place ; à qui on demande un choix, il répondra par des conditions, pas par un engagement"],
      ['Perplexity', 'Toute recherche de marché : sources vérifiables et actualisées attachées aux réponses', 'Une citation affichée doit être ouverte et lue avant usage'],
      ['Gemini', "Lecture d'un support visuel (canevas concurrent, devis ou tarif scanné, pitch deck) et transposition d'une trame dans Google Sheets", 'Les chiffres extraits d\'une image se revérifient à la main'],
      ['Excel ou Google Sheets', 'Trame de 12 mois, formules, scénarios', "Les calculs sont les vôtres : l'IA ne garantit pas leur exactitude"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La norme CLARTE — ce que vous écrivez pour chaque lettre',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt du canevas GomaLogis'],
    rows: [
      ['C — Contexte', 'Votre projet, les données déjà disponibles', '« Service de conseil en optimisation logistique pour PME de la région de Goma ; trois missions déjà réalisées en indépendant »'],
      ['L — Livrable attendu', 'Le format exact du résultat, en deux temps si besoin', '« Remplis les 9 blocs, un paragraphe court par bloc. Puis, dans une seconde partie séparée, challenge chaque bloc »'],
      ['A — Audience / rôle', "Le rôle de l'IA et pour qui elle produit", '« Tu es consultant en stratégie d\'entreprise spécialisé dans les petites structures de service en Afrique centrale »'],
      ['R — Restrictions', "Ce qu'il ne faut pas faire", '« Ne me propose aucune décision de positionnement à ma place. Maximum 3 points de challenge par bloc »'],
      ['T — Ton & style', 'Le registre attendu', '« Sois concret et opérationnel, pas théorique »'],
      ['E — Exemples', 'Un exemple du format de sortie', '« Exemple de point de challenge : Canaux — LinkedIn ne correspond pas à des gérants de PME de distribution »'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La méthode STAR — pour les demandes qui exigent un raisonnement en plusieurs étapes',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt de marché GomaLogis'],
    rows: [
      ['S — Situation', "L'état factuel de départ, secteur et zone géographique réels", '« Je prépare un business plan pour un service de conseil logistique aux PME de Goma. Je n\'ai aucune donnée chiffrée sur la taille du marché »'],
      ['T — Tâche', "L'objectif précis", '« Produire une synthèse de marché exploitable, avec des chiffres uniquement s\'ils sont sourcés »'],
      ['A — Action', "Ce que l'IA doit exécuter, découpé et numéroté", '« (1) taille de marché avec source exacte ; (2) 3 tendances avec source ; (3) 2 à 3 concurrents »'],
      ['R — Résultat', 'Le livrable final et son critère de réussite', '« Un tableau à trois colonnes (donnée, source précise, année) ; si aucune source fiable, écris-le au lieu d\'estimer »'],
    ],
  },
  {
    type: 'concept',
    title: "Règles d'usage avant de coller votre projet dans une IA",
    body: "Un dossier de création d'activité contient des informations commerciales et parfois personnelles (noms de clients, tarifs négociés, coordonnées). Les coller dans une IA, c'est les transmettre à un service externe : appliquez ces règles avant chaque envoi.",
    bullets: [
      "Utilisez un compte professionnel ou payant dont vous avez vérifié les paramètres de confidentialité, jamais un compte partagé ou un outil non vérifié.",
      "Remplacez les noms de vos clients par des codes (client A, client B, client C) et gardez la table de correspondance hors de l'IA.",
      "Ne collez jamais de document, de fichier ou de donnée de votre employeur dans l'outil pour un projet personnel : séparez nettement les deux.",
      "Ne transmettez que ce qui sert à la demande : une description de 5 à 10 lignes suffit, pas vos factures.",
      "Notez dans votre registre quel texte a été déposé dans quel outil, à quelle date.",
    ],
    example: {
      title: "Décision d'Amani le 09/11/2026",
      lines: [
        "Description du projet : clients A, B et C au lieu des raisons sociales ; aucune donnée d'Horizon Grands Lacs.",
        "Outils utilisés : ChatGPT et Claude sur compte professionnel payant, Perplexity en recherche, Gemini pour lire un devis photographié.",
        "Consigné dans le registre des décisions : « 09/11/2026 — description anonymisée déposée dans ChatGPT. »",
      ],
    },
    pitfall: "Coller telles quelles les factures et les contrats de vos trois premières missions « pour que l'IA comprenne » : vous exposez des données de tiers qui ne vous appartiennent pas, alors qu'une description anonymisée donne le même résultat.",
  },
  {
    type: 'comparison-table',
    title: 'Les deux gabarits du module — où vous saisissez quoi',
    columns: ['Gabarit', 'Feuille ou section', 'Ce que vous y saisissez', 'Procédure'],
    rows: [
      ['canevas-business-model-canvas-ia.xlsx', 'Feuille « Canevas BMC » (1/3)', 'Les 9 blocs dans les zones fusionnées : A5:B8, C5:D6, C8:D8, E5:F8, G5:H6, G8:H8, I5:J8, A10:E12, F10:J12', 'Procédure 1'],
      ['canevas-business-model-canvas-ia.xlsx', 'Feuille « Questions de challenge IA » (2/3)', 'Colonne A : bloc ; colonne B : questions déjà rédigées ; colonne C : votre décision (lignes 5 à 13)', 'Procédure 1'],
      ['canevas-business-model-canvas-ia.xlsx', 'Feuille « Suivi des hypothèses » (3/3)', 'Colonnes A (hypothèse), B (source ou preuve), C (statut : Validée, À tester, Invalidée), lignes 5 à 17', 'Procédures 2 et 3'],
      ['gabarit-plan-financier-pitch-simplifie.docx', 'Partie A, sections 1 à 4', 'Hypothèses de revenus, hypothèses de coûts, seuil de rentabilité, journal des hypothèses explicites', 'Procédure 3'],
      ['gabarit-plan-financier-pitch-simplifie.docx', 'Partie B, sections 5 à 7', 'Structure du pitch en 7 lignes, checklist de challenge, validation (nom, fonction, date)', 'Procédure 4'],
    ],
  },

  // ───────────── Procédure 1 — Business Model Canvas ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 8',
    title: 'Écrire la description libre du projet et la liste de ce que vous trancherez vous-même',
    intro: "L'IA ne peut structurer que ce que vous lui donnez : une description vague produit un canevas générique. Entrées nécessaires : vos souvenirs, vos notes des trois missions déjà réalisées et les chiffres que vous connaissez réellement.",
    steps: [
      {
        title: 'Rédiger la description',
        actions: [
          "Ouvrez un document vide nommé 01_Description_projet et écrivez 5 à 10 lignes, sans mise en forme : qui vous êtes, ce que vous vendez, à qui, ce qui a déjà été fait.",
          "Ajoutez les faits chiffrés dont vous êtes sûr (durée et prix des missions passées) ; marquez [?] tout ce qui est une supposition.",
          "Remplacez les noms de vos clients par « client A, B, C » (règle d'usage des données).",
          "Relisez : supprimez tout adjectif qui n'est pas appuyé par un fait.",
        ],
      },
      {
        title: 'Lister vos décisions réservées',
        actions: [
          "Sous la description, écrivez « Je trancherai moi-même : » puis trois lignes : le segment prioritaire, le positionnement, le prix.",
          "Ces trois lignes deviendront la restriction centrale du prompt de l'étape suivante.",
        ],
      },
    ],
    example: {
      title: 'Description libre — fil rouge (lundi 09/11/2026)',
      lines: [
        "Je suis logisticienne depuis six ans. En 12 mois, j'ai mené seule 3 missions pour des PME de Goma : audit du stock et des entrées-sorties, mise en place d'un tableur de suivi, formation de l'équipe magasin (client A : quincaillerie de gros ; client B : coopérative agro-transformation ; client C : distributeur de produits pharmaceutiques).",
        "Les missions ont duré 4, 6 et 5 jours, facturées 480, 720 et 600 USD, soit 120 USD par jour.",
        "Dans les trois cas, le stock était tenu sur cahier. Je veux transformer cela en service structuré à Goma. Je ne sais pas encore [?] combien de PME sont réellement concernées ni quel prix elles accepteront.",
        "Je trancherai moi-même : le segment prioritaire, le positionnement, le prix.",
      ],
    },
    result: "Un fichier 01_Description_projet de 8 lignes environ, anonymisé, avec les faits distingués des suppositions et la liste de vos trois décisions réservées.",
    pitfall: "Écrire « je veux aider les entreprises à mieux se gérer » : l'IA produira un canevas valable pour n'importe quel consultant de n'importe quelle ville. Plus la description est concrète, plus le challenge est utile.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 8',
    title: 'Assembler le Prompt 1 (norme CLARTE) lettre par lettre',
    intro: "Le prompt se construit en six morceaux, un par lettre. Vous reprenez le prompt de référence du module et vous remplacez uniquement ce qui diffère dans votre projet.",
    steps: [
      {
        title: 'Construire le prompt',
        actions: [
          "A : donnez à l'IA un rôle précis (consultant spécialisé dans les petites structures de service de votre région).",
          "C : collez la description de l'étape 1.",
          "L : demandez les 9 blocs, un paragraphe court chacun, puis une seconde partie séparée de challenge.",
          "R : interdisez toute décision de positionnement et exigez que les chiffres non fournis soient marqués [hypothèse].",
          "T : demandez un ton concret et opérationnel.",
          "E : donnez un exemple du format d'un point de challenge.",
        ],
      },
    ],
    example: {
      title: 'Prompt 1 — fil rouge (à copier)',
      lines: [
        "« Tu es consultant en stratégie d'entreprise spécialisé dans les modèles économiques de petites structures de service en Afrique centrale. [A]",
        "Voici la description de mon projet : [coller 01_Description_projet]. J'ai déjà réalisé trois missions en indépendant, sans structure formalisée. [C]",
        "Remplis les 9 blocs du Business Model Canvas (segments de clientèle, proposition de valeur, canaux, relations clients, flux de revenus, ressources clés, activités clés, partenaires clés, structure de coûts) à partir de cette description, un paragraphe court par bloc. Puis, dans une seconde partie séparée, challenge chaque bloc, avec un maximum de 3 points par bloc : identifie en particulier si le segment déclaré est cohérent avec les canaux de vente proposés et si la structure de coûts sous-estime le temps de déplacement terrain. [L]",
        "Exemple de point de challenge : « Canaux — LinkedIn ne correspond pas à des gérants de PME de distribution ; question à trancher par vous. » [E]",
        "Ne me propose aucune décision de positionnement à ma place : signale uniquement les problèmes et les questions. Marque [hypothèse] tout chiffre que je ne t'ai pas donné. [R]",
        "Sois concret et opérationnel, pas théorique. » [T]",
      ],
    },
    result: "Un prompt dont chaque phrase correspond à une lettre CLARTE identifiable ; l'interdiction de décider est écrite noir sur blanc.",
    tip: "Gardez ce prompt dans un fichier : vous le réutiliserez tel quel pour un autre projet en remplaçant seulement la description et la phrase sur la zone géographique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 8',
    title: 'Lancer le prompt et contrôler le premier jet avant de le reporter',
    intro: "Le premier jet de l'IA est un brouillon, pas un canevas. Vous le lisez avec une grille de contrôle avant de reporter quoi que ce soit dans le gabarit. L'outil du premier jet est ChatGPT, bon en génération rapide ; le challenge indépendant viendra de Claude à l'étape 6.",
    steps: [
      {
        title: 'Exécuter',
        actions: [
          "Ouvrez une nouvelle conversation ChatGPT dans votre compte professionnel.",
          "Collez le Prompt 1 avec votre description, envoyez et attendez la réponse complète.",
          "Si la réponse s'arrête avant le bloc 9, écrivez « Continue à partir du bloc 7 ».",
        ],
      },
      {
        title: 'Contrôler avec la grille en cinq points',
        actions: [
          "Les 9 blocs sont-ils tous présents, chacun en un paragraphe court ?",
          "Chaque bloc est-il spécifique à votre projet, ou pourrait-il s'appliquer à n'importe qui ?",
          "Les chiffres qui ne viennent pas de vous sont-ils marqués [hypothèse] ?",
          "L'IA a-t-elle glissé une décision de positionnement (« je recommande de… ») ? Si oui, notez-la comme une piste, pas comme un choix.",
          "La seconde partie (challenge) est-elle bien séparée du remplissage ?",
        ],
      },
    ],
    example: {
      title: 'Ce qu\'Amani relève dans le premier jet (extraits)',
      lines: [
        "Segments : « Les PME de la région du Nord-Kivu » → trop générique, aucun critère de taille ni de secteur.",
        "Canaux : « LinkedIn, site web, webinaires » → peu réaliste pour des gérants de PME de distribution à Goma.",
        "Flux de revenus : « 200 USD par jour de conseil » → chiffre non fourni et non marqué [hypothèse] : à retirer ou à vérifier.",
        "Structure de coûts : « licences logicielles, matériel » → rien sur le temps de déplacement terrain.",
        "Conclusion de contrôle : 9 blocs présents, 3 problèmes à traiter aux étapes 4 à 7.",
      ],
    },
    result: "Un premier jet complet avec la liste de ses défauts repérés, prêt à être corrigé pendant le report dans le gabarit.",
    pitfall: "Reporter le premier jet tel quel dans le gabarit parce qu'il « a l'air propre » : la forme soignée de l'IA masque précisément les blocs génériques que vous deviez détecter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 8',
    title: 'Reporter les blocs Clients et Offre dans la feuille « Canevas BMC »',
    intro: "La feuille « Canevas BMC » dessine le canevas en cinq colonnes. Vous remplissez d'abord les quatre blocs qui décrivent à qui vous vendez et quoi : segments, proposition de valeur, canaux, relations clients. Vous écrivez ce que vous avez décidé, pas ce que l'IA a écrit mot pour mot.",
    steps: [
      {
        title: 'Préparer la feuille',
        actions: [
          "Enregistrez d'abord une copie vierge du gabarit dans 01_Source, puis ouvrez la copie de travail : canevas_GomaLogis_travail.xlsx.",
          "Ouvrez la feuille « Canevas BMC ». Chaque zone fusionnée contient une question guide.",
          "Pour chaque zone, cliquez dedans, supprimez la question guide et saisissez votre texte (Alt+Entrée pour passer à la ligne).",
          "Pour les zones d'une seule ligne (C8:D8 et G8:H8), augmentez la hauteur de la ligne 8 : Accueil > Format > Hauteur de ligne.",
        ],
      },
      {
        title: 'Remplir les blocs 7, 4, 6 et 5',
        actions: [
          "Bloc 7 — Segments de clientèle, zone I5:J8 : un segment, avec taille et secteur.",
          "Bloc 4 — Proposition de valeur, zone E5:F8 : le problème résolu et le résultat, pas la liste des livrables.",
          "Bloc 6 — Canaux, zone G8:H8 : uniquement les canaux que vous pouvez actionner cette année.",
          "Bloc 5 — Relations clients, zone G5:H6 : le type de relation (ponctuelle, récurrente, libre-service).",
        ],
      },
    ],
    example: {
      title: 'Saisie dans les zones (fil rouge)',
      lines: [
        "I5:J8 — PME de distribution et d'agro-transformation de la ville de Goma, 10 à 50 employés, avec un stock physique tenu à la main ou sur tableur simple. Pas de couverture hors Goma la première année.",
        "E5:F8 — Moins de ruptures et de pertes de stock en 5 jours : audit sur site, tableur de suivi prêt à l'emploi, équipe magasin formée, à prix fixe de 750 USD.",
        "G8:H8 — Recommandation des clients déjà servis, visite directe, réseau de l'incubateur, messagerie professionnelle pour la prise de contact.",
        "G5:H6 — Mission ponctuelle, puis suivi mensuel optionnel ; échanges directs avec le gérant.",
      ],
    },
    result: "Quatre zones de la feuille remplies avec du texte spécifique à votre projet ; la question guide a disparu de chacune.",
    tip: "Écrivez le bloc 7 avant tous les autres : une fois le segment précisé, la valeur, les canaux et la relation se choisissent par cohérence avec lui.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 8',
    title: 'Reporter les blocs économiques et les moyens dans la feuille « Canevas BMC »',
    intro: "Les cinq blocs restants décrivent comment vous gagnez de l'argent et avec quels moyens. Ce sont ceux qu'un porteur de projet remplit le plus vite et le plus mal : prenez le temps d'y mettre vos propres chiffres, ou à défaut de les marquer [?].",
    steps: [
      {
        title: 'Remplir les blocs 9 et 8',
        actions: [
          "Bloc 9 — Flux de revenus, zone F10:J12 : chaque source de revenu avec son prix, et le mode de paiement actuel.",
          "Bloc 8 — Structure de coûts, zone A10:E12 : les coûts fixes, les coûts variables par mission, et le temps non facturé.",
        ],
      },
      {
        title: 'Remplir les blocs 3, 2 et 1',
        actions: [
          "Bloc 3 — Ressources clés, zone C8:D8 : le temps disponible compte comme une ressource (20 jours ouvrés par mois).",
          "Bloc 2 — Activités clés, zone C5:D6 : celles qui créent la valeur, pas toutes les tâches.",
          "Bloc 1 — Partenaires clés, zone A5:B8 : qui vous apporte des clients ou des moyens, et ce qui se passe s'il se retire.",
        ],
      },
    ],
    example: {
      title: 'Saisie dans les zones (fil rouge)',
      lines: [
        "F10:J12 — Mission « Stock sous contrôle » de 5 jours : 750 USD (150 USD par jour) ; formation de 2 jours : 300 USD ; suivi mensuel : 100 USD par mois. Paiement actuel : à 30 jours après facture.",
        "A10:E12 — Fixes : 700 USD par mois, dont 600 de rémunération minimale de la porteuse. Variables : 75 USD par mission (déplacement 40, impression 10, supplément hors Goma lissé 25). Temps non facturé : prospection 4 jours par mois, déplacement 0,5 jour par mission.",
        "C8:D8 — La porteuse (20 jours ouvrés par mois), ordinateur portable, modèle de tableur de suivi de stock, 3 références clients.",
        "C5:D6 — Audit sur site, mise en place et transfert du tableur, formation de l'équipe, prospection.",
        "A5:B8 — Kivu Entreprendre (apport de clients, appui), deux consultants indépendants comparables (renfort en cas de pic), opérateur internet.",
      ],
    },
    result: "Les neuf zones de la feuille « Canevas BMC » sont remplies ; les chiffres qui ne viennent pas de vos relevés portent [?] pour être traités à la procédure 3.",
    pitfall: "Écrire un prix « de marché » dans le bloc 9 sans savoir d'où il vient : vous venez de créer une hypothèse non tracée. Notez-la dès maintenant dans votre brouillon pour le Suivi des hypothèses.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 8',
    title: 'Obtenir le challenge bloc par bloc avec Claude',
    intro: "Le premier jet vient de ChatGPT ; le challenge vient d'un second outil qui n'a pas écrit le texte et qui est fort en cohérence entre blocs. Vous lui donnez le canevas tel que vous l'avez corrigé, et vous lui interdisez de décider.",
    steps: [
      {
        title: 'Lancer le challenge',
        actions: [
          "Ouvrez une nouvelle conversation Claude (compte professionnel).",
          "Collez les neuf textes de la feuille, un par bloc, puis le prompt de challenge ci-dessous.",
          "Lisez la réponse bloc par bloc : un maximum de 3 points chacun.",
        ],
      },
      {
        title: 'Classer les points',
        actions: [
          "Copiez la réponse dans un document et marquez chaque point : « à trancher », « à vérifier sur le terrain » ou « sans objet ».",
          "Les points « à trancher » vont à l'étape 7 ; les points « à vérifier » alimentent les entretiens de l'étape 8.",
        ],
      },
    ],
    example: {
      title: 'Prompt de challenge et extraits de réponse — fil rouge',
      lines: [
        "« Voici mon Business Model Canvas, bloc par bloc : [coller]. Challenge chaque bloc individuellement : incohérences entre blocs, hypothèses non testées, blocs vagues ou génériques. Maximum 3 points par bloc. Ne propose aucune décision de positionnement : signale seulement les problèmes et les questions que je dois trancher. »",
        "Segments : le segment est précisé, mais aucune preuve de demande n'est donnée → à vérifier sur le terrain.",
        "Canaux : la recommandation est réaliste ; la visite directe suppose du temps de prospection : est-il compté dans les activités et la structure de coûts ? → à trancher.",
        "Flux de revenus : le prix de 750 USD repose-t-il sur des devis comparables ou sur une estimation ? → à vérifier sur le terrain.",
        "Partenaires : l'incubateur est le seul canal d'apport identifié ; que se passe-t-il s'il se retire ? → à trancher.",
      ],
    },
    result: "Une liste de points de challenge classés « à trancher » et « à vérifier », bloc par bloc, qui montre que les 9 blocs ont été relus avec la même exigence.",
    pitfall: "Demander à l'IA « mon canevas est-il bon ? » : vous obtenez un compliment. Demandez des problèmes, avec un plafond de points par bloc pour qu'elle priorise.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 7 sur 8',
    title: "Consigner vos décisions dans la feuille « Questions de challenge IA »",
    intro: "La deuxième feuille du classeur contient déjà, pour chaque bloc, la question de challenge à poser. Elle attend votre décision en colonne C : c'est cette colonne, et non la réponse de l'IA, qui prouve que vous avez décidé.",
    steps: [
      {
        title: 'Lignes 5 à 9 (blocs clients, offre et revenus)',
        actions: [
          "Ouvrez la feuille « Questions de challenge IA » : colonne A = le bloc, colonne B = la question, colonne C = « Décision retenue (la vôtre, pas celle de l'IA) ».",
          "Pour chaque ligne, relisez la question de la colonne B et la réponse du challenge, puis écrivez en colonne C ce que vous décidez, et pourquoi.",
          "Si la décision dépend d'un fait à vérifier, écrivez la décision provisoire et le test qui la confirmera.",
        ],
      },
      {
        title: 'Lignes 10 à 13 (ressources, activités, partenaires, coûts)',
        actions: [
          "Mêmes règles : une décision par ligne, datée si vous le souhaitez, jamais « voir l'IA ».",
          "Vérifiez qu'aucune cellule de la colonne C n'est vide : un bloc non décidé reste un bloc non challengé.",
        ],
      },
    ],
    example: {
      title: 'Colonne C — décisions retenues (fil rouge, 10/11/2026)',
      lines: [
        "Ligne 5, Segments — Je cible uniquement les PME de distribution et d'agro-transformation de Goma (10 à 50 employés). Preuve de demande à confirmer par 5 entretiens avant le 12/11.",
        "Ligne 6, Proposition de valeur — Je la formule en résultat (moins de ruptures) et non en livrables ; test : 5 gérants citent-ils les ruptures parmi leurs priorités ?",
        "Ligne 7, Canaux — J'abandonne LinkedIn. Recommandation, visite directe et réseau de l'incubateur ; 4 jours de prospection par mois comptés dans les ressources.",
        "Ligne 8, Relations clients — Mission ponctuelle plus suivi mensuel optionnel : cohérent avec des revenus ponctuels ; je ne promets pas de disponibilité permanente.",
        "Ligne 9, Flux de revenus — Prix de 150 USD par jour à confirmer par deux devis comparables, pas sur l'estimation de 200 USD donnée par l'IA.",
        "Ligne 10, Ressources — J'ajoute 0,5 jour de déplacement non facturé par mission et 4 jours de prospection par mois : 16 jours facturables sur 20.",
        "Ligne 11, Activités — Je retire « reporting mensuel détaillé » (tâche de confort) ; je garde audit, outil et formation.",
        "Ligne 12, Partenaires — Dépendance à l'incubateur : je cherche deux autres relais d'apport (comptables, association de commerçants) ; sans l'incubateur, je garde la recommandation des clients.",
        "Ligne 13, Coûts — J'ajoute le supplément hors Goma (1 mission sur 4) et le ralentissement des déplacements en période de fortes pluies.",
      ],
    },
    result: "Neuf cellules de la colonne C remplies, chacune avec une décision de la porteuse, un critère de test ou un chiffre ; aucune ne se contente de reprendre la suggestion de l'IA.",
    tip: "Une décision qui commence par un verbe (« je cible », « j'abandonne », « je retire ») est une décision. « À réfléchir » ou « selon l'IA » n'en sont pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 8 sur 8',
    title: 'Tester le canevas auprès de 5 clients potentiels réels',
    intro: "Un canevas cohérent sur le papier peut reposer sur un segment ou une proposition de valeur qui ne correspond à aucune conversation réelle. Cinq entretiens de 20 minutes suffisent pour transformer le canevas en hypothèse testée, avant de le présenter à un tiers.",
    steps: [
      {
        title: 'Préparer les entretiens',
        actions: [
          "Listez 5 gérants de PME de votre segment (réseau, recommandations) ; évitez vos clients actuels, ils sont trop bienveillants.",
          "Préparez 4 questions ouvertes et ne présentez pas encore votre offre.",
          "Prévoyez un tableau de notes anonymisé : G1 à G5, jamais de nom.",
        ],
      },
      {
        title: 'Mener et exploiter',
        actions: [
          "Posez les 4 questions et notez les mots exacts du gérant.",
          "Présentez le prix seulement à la fin, puis demandez : « Qui déciderait et comment paieriez-vous ? »",
          "Comptez les résultats, puis modifiez le canevas pour chaque écart constaté et notez la décision dans la colonne C correspondante.",
        ],
      },
    ],
    table: {
      columns: ['Gérant', 'Suit son stock sur', 'Problème n°1 cité', 'Paierait 750 USD ?'],
      rows: [
        ['G1', 'Cahier', 'Ruptures de stock', 'Oui, en deux fois'],
        ['G2', 'Cahier et tableur', 'Pertes sur produits périmés', 'Oui, en deux fois'],
        ['G3', 'Cahier', 'Ruptures de stock', 'Non, « trop cher d\'un coup »'],
        ['G4', 'Tableur', 'Recouvrement des clients, pas le stock', 'Non'],
        ['G5', 'Cahier', 'Ruptures de stock', 'Oui, en deux fois'],
      ],
    },
    example: {
      title: 'Questions et décision (fil rouge, 11 et 12/11/2026)',
      lines: [
        "1. « Comment suivez-vous votre stock aujourd'hui ? » 2. « La dernière fois que vous avez eu une rupture ou une perte, combien cela vous a-t-il coûté ? » 3. « Qu'avez-vous déjà essayé ? » 4. « Si une mission de 5 jours à 750 USD supprimait ce problème, qui déciderait et comment paieriez-vous ? »",
        "Résultat : 4 gérants sur 5 placent ruptures ou pertes de stock en tête ; 3 sur 5 paieraient 750 USD en deux fois, un seul d'un coup.",
        "Décision : proposer un paiement en deux fois (acompte puis solde) ; le plan financier gardera pourtant l'hypothèse prudente d'un paiement à 30 jours. Hypothèse « 750 USD » : statut « À tester », échantillon de 5 seulement.",
      ],
    },
    result: "Une fiche d'entretiens de 5 lignes anonymisées, trois constats chiffrés et un canevas ajusté sur le bloc Flux de revenus ; le canevas est désormais une hypothèse testée.",
    pitfall: "Conclure « le marché valide mon idée » à partir de 5 entretiens : l'échantillon est trop petit pour valider, il suffit à invalider. Écrivez dans le dossier « 4 gérants sur 5 interrogés », jamais « les PME de Goma ».",
  },

  // ───────────── Procédure 2 — Étude de marché ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Poser le périmètre et écrire le Prompt 2 (méthode STAR)',
    intro: "Ne demandez jamais une taille de marché sans demander, dans le même mouvement, la source exacte. Le périmètre (secteur, zone) doit être précis : un périmètre flou fait ressortir des chiffres de portée nationale ou continentale sans rapport avec votre marché.",
    steps: [
      {
        title: 'Définir le périmètre',
        actions: [
          "Écrivez en une phrase votre activité et votre zone géographique réelles.",
          "Notez ce que vous savez déjà (rien, un chiffre, une intuition) pour mesurer ensuite ce que l'IA apporte.",
        ],
      },
      {
        title: 'Assembler le prompt',
        actions: [
          "S : situation factuelle, avec secteur et zone géographique.",
          "T : objectif, avec « chiffres uniquement s'ils sont sourcés ».",
          "A : trois actions numérotées (taille de marché, tendances, concurrents), chacune avec la source exigée.",
          "R : format tableau à trois colonnes et interdiction d'estimer un chiffre par défaut.",
        ],
      },
    ],
    example: {
      title: 'Prompt 2 — fil rouge (à copier)',
      lines: [
        "« Situation : je prépare un business plan pour GomaLogis Conseil, un service de conseil en optimisation logistique (audit, suivi de stock, formation) pour les PME de distribution et d'agro-transformation de Goma, en RDC. Je n'ai aujourd'hui aucune donnée chiffrée sur la taille de ce marché.",
        "Tâche : produire une synthèse de marché exploitable dans un business plan, avec des chiffres uniquement s'ils sont sourcés.",
        "Action : (1) recherche une estimation de taille de marché (TAM) pour ce secteur et cette zone géographique, avec la source exacte (nom de l'organisme, année de publication, lien si disponible) ; (2) identifie 3 tendances récentes du secteur, chacune avec sa source ; (3) identifie 2 à 3 concurrents ou acteurs comparables déjà présents sur ce marché ; (4) indique combien d'entreprises de distribution et d'agro-transformation sont recensées à Goma, avec la source.",
        "Résultat attendu : un tableau à trois colonnes (donnée ou tendance, source précise, année) plutôt qu'un texte rédigé ; si aucune source fiable n'existe pour un chiffre demandé, indique-le explicitement au lieu d'estimer un chiffre par défaut. »",
      ],
    },
    result: "Un prompt STAR qui interdit l'estimation par défaut et réclame un tableau où chaque ligne porte sa source.",
    tip: "La quatrième demande (nombre d'entreprises recensées) est un ajout d'Amani : elle sait que le SAM se calculera à partir d'un dénombrement, plus facile à sourcer qu'une taille de marché en dollars.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Lancer la recherche avec Perplexity et obtenir le tableau',
    intro: "Perplexity attache des sources numérotées à ses réponses, ce qui permet de retrouver l'origine d'un chiffre. C'est l'outil à privilégier pour cette étape, mais la vérification manuelle reste obligatoire quel que soit l'outil.",
    steps: [
      {
        title: 'Exécuter la recherche',
        actions: [
          "Ouvrez Perplexity, choisissez le mode de recherche avec sources et collez le Prompt 2.",
          "Attendez la réponse complète et repérez les numéros de citation à côté de chaque ligne.",
          "Si la réponse est un texte rédigé, écrivez : « Remets ce contenu en tableau à trois colonnes : donnée ou tendance, source précise, année. »",
        ],
      },
      {
        title: 'Préparer la vérification',
        actions: [
          "Copiez le tableau dans un document 03_Marche_IA et ajoutez une colonne « Verdict » vide.",
          "Comptez les lignes à vérifier : une ligne = une source à ouvrir.",
        ],
      },
    ],
    table: {
      columns: ['Donnée ou tendance annoncée', 'Source annoncée', 'Année', 'Verdict'],
      rows: [
        ['Marché du conseil aux PME en RDC : 340 millions USD', 'Observatoire Régional des Services aux Entreprises, rapport annuel', '2023', '(à vérifier)'],
        ['412 PME à Goma dans la distribution et l\'agro-transformation', 'Répertoire des entreprises de Goma, Agence provinciale de promotion des PME', '2025', '(à vérifier)'],
        ['Tendance : adoption d\'outils simples de suivi de stock par les distributeurs', 'Article de presse économique régionale', '2024', '(à vérifier)'],
        ['Concurrents : cabinets de Kinshasa intervenant ponctuellement à Goma, consultants indépendants locaux', 'Sites des cabinets', '2025', '(à vérifier)'],
      ],
    },
    result: "Un tableau de 4 lignes, chacune avec sa source et un verdict vide : vous savez exactement combien de sources vous devez ouvrir à l'étape suivante.",
    pitfall: "Accepter un tableau dont une ligne n'a pas de source (« source : analyses sectorielles ») : sans organisme ni année, elle est invérifiable, donc inutilisable. Relancez en exigeant la source précise ou l'aveu qu'il n'y en a pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Ouvrir chaque source citée et la lire',
    intro: "C'est l'étape qui protège le dossier. Pour chaque ligne, vous appliquez les mêmes cinq contrôles. La règle ne souffre aucune exception : si un lien ne mène à rien, si l'organisme n'existe pas ou si le chiffre trouvé diverge de celui de l'IA, le chiffre annoncé est écarté.",
    steps: [
      {
        title: 'Les cinq contrôles par source',
        actions: [
          "Ouvrez le lien (ou recherchez le titre exact) : la page existe-t-elle ?",
          "Cherchez le nom de l'organisme sur un autre site : existe-t-il vraiment ?",
          "Sur la page, utilisez Ctrl+F pour retrouver le chiffre : est-il écrit tel quel ?",
          "Comparez le périmètre : même secteur, même zone, même année que dans la réponse de l'IA ?",
          "Notez le type de source (rapport, registre officiel, article, blog) et sa date de publication.",
        ],
      },
      {
        title: 'Noter le verdict ligne par ligne',
        actions: [
          "Complétez la colonne « Verdict » du document 03_Marche_IA : retrouvé, divergent, introuvable.",
          "Conservez une capture d'écran ou le lien de chaque page lue dans un dossier 03_Preuves.",
        ],
      },
    ],
    example: {
      title: 'Résultat des vérifications (fil rouge, vendredi 13/11/2026)',
      lines: [
        "Ligne 1 — Observatoire (340 M USD) : lien en erreur 404 ; aucun résultat pour le nom de l'organisme → introuvable.",
        "Ligne 2 — Répertoire des entreprises de Goma : le document existe ; la page 14 donne 412 entreprises formelles tous secteurs, dont 187 en distribution et agro-transformation → divergent (l'IA a attribué 412 à nos deux secteurs).",
        "Ligne 3 — Article de presse : retrouvé, mais il porte sur Kinshasa, pas sur Goma → périmètre différent, tendance à citer avec réserve.",
        "Ligne 4 — Concurrents : deux cabinets existent bien, aucun tarif publié ; consultants indépendants locaux non listés → à compléter par les deux devis.",
      ],
    },
    result: "Un verdict par ligne, une preuve archivée par source, et deux chiffres déjà identifiés comme inutilisables en l'état (340 M USD et 412).",
    tip: "Un chiffre divergent n'est pas toujours inutile : ici, la source réelle donne un chiffre plus petit mais fiable (187). On garde la valeur lue sur la source, jamais celle annoncée par l'IA.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Rédiger la fiche de vérification en trois temps',
    intro: "L'exercice du module exige une démonstration de vérification par écrit, pour un chiffre choisi : c'est un livrable obligatoire, pas une option. Elle tient en trois paragraphes et prouve que vous ne reprenez rien sans l'avoir lu.",
    steps: [
      {
        title: 'Écrire les trois temps',
        actions: [
          "(a) Le chiffre et la source annoncés par l'IA, recopiés mot pour mot, avec la date et l'outil.",
          "(b) Ce que vous avez trouvé en ouvrant réellement la source : ce que vous avez cliqué, ce que la page affichait.",
          "(c) Votre décision finale : retenu tel quel, retenu avec réserve, ou écarté du dossier, avec la raison en une phrase.",
        ],
      },
      {
        title: 'Archiver la fiche',
        actions: [
          "Enregistrez-la en PDF dans 03_Preuves sous le nom 2026-11-13_Fiche_verification_TAM.pdf.",
          "Ajoutez-la au dossier à remettre : un partenaire qui la lit comprend votre méthode.",
        ],
      },
    ],
    example: {
      title: 'Fiche de vérification — chiffre de marché de 340 M USD',
      lines: [
        "(a) Perplexity, 13/11/2026 : « Marché du conseil aux PME en RDC estimé à 340 millions de dollars, Observatoire Régional des Services aux Entreprises, rapport annuel 2023. »",
        "(b) Le lien cité renvoie une erreur 404. Trois recherches du nom de l'organisme (français, sigle, titre du rapport) ne donnent aucun résultat. Le chiffre n'apparaît sur aucune autre page trouvée.",
        "(c) Décision : écarté du dossier. Je ne cite aucun chiffre de marché national ; je le remplace par une estimation locale prudente, calculée à partir du nombre de PME recensées à Goma (voir étape 6).",
      ],
    },
    result: "Une fiche d'une demi-page, datée, qui documente la vérification d'un chiffre dans les trois temps exigés et qui sera jointe au dossier.",
    pitfall: "Écrire (b) sans avoir réellement ouvert la source : « je n'ai rien trouvé » n'est pas une vérification. Précisez ce que vous avez fait, pour qu'un tiers puisse refaire le chemin.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Consigner chaque vérification dans la feuille « Suivi des hypothèses »',
    intro: "La troisième feuille du classeur est le registre où chaque affirmation chiffrée est tracée avant d'entrer dans un document officiel. Elle compte trois colonnes et une liste déroulante de statut. Les lignes 5 à 7 contiennent des exemples du gabarit : remplacez-les par les vôtres.",
    steps: [
      {
        title: 'Remplir les trois colonnes',
        actions: [
          "Ouvrez la feuille « Suivi des hypothèses ». Colonne A : l'hypothèse (chiffre, affirmation ou choix) ; colonne B : la source ou preuve trouvée ; colonne C : le statut.",
          "Remplacez les exemples des lignes 5 à 7 par vos propres lignes, puis continuez jusqu'à la ligne 17 si nécessaire.",
          "Colonne C : cliquez dans la cellule, ouvrez la liste déroulante et choisissez Validée, À tester ou Invalidée. Aucune autre valeur n'est acceptée.",
        ],
      },
      {
        title: 'Appliquer la règle des statuts',
        actions: [
          "Validée : le chiffre a été lu sur la source ou confirmé par un devis ou un relevé, et vous l'écrivez en colonne B.",
          "À tester : l'hypothèse est plausible mais attend un test terrain.",
          "Invalidée : la source est introuvable, divergente, ou l'hypothèse est contredite ; le chiffre est écarté du dossier.",
        ],
      },
    ],
    table: {
      columns: ['Hypothèse (colonne A)', 'Source ou preuve trouvée (colonne B)', 'Statut (colonne C)'],
      rows: [
        ["Marché du conseil aux PME en RDC : 340 M USD (annoncé par l'IA)", 'Lien en erreur 404, organisme introuvable ; écarté, remplacé par un dénombrement local', 'Invalidée'],
        ['412 PME à Goma dans la distribution et l\'agro-transformation (annoncé par l\'IA)', 'La source réelle donne 412 entreprises tous secteurs ; chiffre de l\'IA écarté', 'Invalidée'],
        ['187 entreprises de distribution et d\'agro-transformation recensées à Goma', 'Répertoire des entreprises de Goma 2025, page 14, lu le 13/11 ; ne couvre pas l\'informel', 'Validée'],
        ['40 % de ces entreprises ont un besoin de pilotage du stock', 'Aucune source ; 4 gérants sur 5 interrogés citent ruptures ou pertes : échantillon trop faible', 'À tester'],
      ],
    },
    result: "Au moins quatre lignes de la feuille renseignées, chacune avec un statut issu de la liste déroulante et une source lisible par un tiers.",
    pitfall: "Passer en « Validée » un chiffre parce qu'une citation était affichée : le statut ne reflète que ce que vous avez réellement ouvert et lu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Structurer le TAM / SAM / SOM et situer les concurrents',
    intro: "Sans source fiable pour un TAM, la bonne réponse est de ne pas en inventer. Vous partez du seul chiffre sourcé (187 entreprises) et vous raisonnez en dénombrement : SAM = les entreprises qui ont le besoin, SOM = celles que vous pouvez réellement servir en un an. Chaque ratio est une hypothèse, marquée comme telle.",
    steps: [
      {
        title: 'Calculer les trois niveaux',
        actions: [
          "TAM : écrivez « non documenté — aucune source fiable retrouvée » plutôt qu'un chiffre.",
          "SAM : 187 entreprises × part ayant un besoin de pilotage du stock (hypothèse 40 %, à tester).",
          "SOM : nombre de clients nécessaires pour tenir le plan (voir procédure 3) = missions de l'année ÷ missions par client ; comparez au SAM.",
        ],
      },
      {
        title: 'Situer les concurrents',
        actions: [
          "Listez les deux catégories trouvées : cabinets de Kinshasa intervenant ponctuellement à Goma, consultants indépendants locaux.",
          "Pour chacune, notez ce que vous savez vraiment (tarif publié ou non) et ce qui reste à vérifier.",
        ],
      },
    ],
    example: {
      title: 'Calculs du fil rouge',
      lines: [
        "TAM : non documenté (chiffre de 340 M USD écarté).",
        "SAM : 187 × 40 % = 74,8, arrondi à 75 entreprises [hypothèse à tester].",
        "SOM : 22 missions ÷ 2,5 missions par client (audit, puis outil, puis suivi) = 8,8, arrondi à 9 clients la première année.",
        "Part du SAM à conquérir : 9 ÷ 75 = 12 %. Lecture : ambitieux pour une première année, à confronter aux entretiens et à la capacité de prospection.",
        "Concurrents : cabinets de Kinshasa (pas de tarif publié, présence ponctuelle) ; consultants indépendants locaux (devis de 140 et 160 USD par jour).",
      ],
    },
    result: "Un TAM honnêtement vide, un SAM de 75 et un SOM de 9 clients, chacun avec son hypothèse ; ces trois chiffres alimentent le pitch (« 187 entreprises recensées ») et la ligne Marché du gabarit.",
    tip: "Une part de marché de 12 % dès l'année 1 est la première chose qu'un évaluateur contestera. Mieux vaut l'annoncer vous-même comme ambitieuse et exposer comment vous la testerez.",
  },

  // ───────────── Procédure 3 — Plan financier simplifié ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 9',
    title: 'Rassembler vos données réelles avant de solliciter l\'IA',
    intro: "L'IA aide à structurer les hypothèses d'un compte de résultat prévisionnel ; elle ne les connaît pas. Plus vous arrivez avec des relevés et des devis, moins elle comble les vides avec des moyennes génériques. Entrées : vos trois missions, deux devis de consultants comparables, vos coûts payés.",
    steps: [
      {
        title: 'Relever vos données internes',
        actions: [
          "Pour chaque mission passée : jours passés, prix facturé, coûts payés (transport, impressions, hébergement éventuel).",
          "Notez le temps non facturé : prospection, déplacements, administratif.",
          "Fixez votre besoin de vie minimum mensuel : c'est une décision, pas un calcul.",
        ],
      },
      {
        title: 'Obtenir des références externes',
        actions: [
          "Demandez à deux consultants indépendants comparables un devis pour un audit de 5 jours, sans leur dire que vous préparez un dossier concurrent.",
          "Si un devis vous est remis sur papier, photographiez-le et demandez à Gemini d'extraire les lignes dans un tableau ; relisez chaque montant à la main.",
        ],
      },
    ],
    table: {
      columns: ['Mission passée', 'Jours', 'Facturé (USD)', 'Observation'],
      rows: [
        ['Client A — quincaillerie de gros', '4', '480', 'À Goma'],
        ['Client B — coopérative agro-transformation', '6', '720', 'Hors Goma : supplément hébergement et transport de 95 USD'],
        ['Client C — distributeur pharmaceutique', '5', '600', 'À Goma'],
        ['Total / moyenne', '15', '1 800', '120 USD par jour ; 5 jours par mission ; 1 mission sur 3 hors Goma'],
      ],
    },
    example: {
      title: 'Références externes et décisions de départ (fil rouge, 13/11/2026)',
      lines: [
        "Devis consultant 1 : 140 USD par jour. Devis consultant 2 : 160 USD par jour. Fourchette locale : 140 à 160 USD, retenu 150 USD.",
        "Coûts relevés : transport local 8 USD par jour sur site, impressions 10 USD par mission.",
        "Temps non facturé : prospection 4 jours par mois, déplacements 0,5 jour par mission.",
        "Besoin de vie minimum retenu : 600 USD par mois [décision d'Amani].",
      ],
    },
    result: "Un dossier de données réelles : trois missions relevées, deux devis, des coûts mesurés et un besoin de vie fixé. Chaque hypothèse du plan aura une preuve à citer.",
    pitfall: "Écrire de mémoire « j'ai fait 3 missions à 150 USD par jour » alors que vos factures disent 120 USD : le plan serait optimiste sans que vous le sachiez. Relisez vos factures.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 9',
    title: 'Rédiger le Prompt 3 — trame de compte de résultat (norme CLARTE)',
    intro: "Vous demandez à l'IA une trame, c'est-à-dire des lignes et leurs hypothèses entre crochets, pas des totaux. La restriction essentielle de ce prompt est de lui interdire de calculer un total avec des hypothèses que vous n'avez pas fournies.",
    steps: [
      {
        title: 'Assembler et lancer',
        actions: [
          "A : un conseiller en création d'entreprise pour petites structures sans service financier.",
          "C : décrivez l'activité, le modèle de revenu et les coûts principaux connus, avec les données de l'étape 1.",
          "L : trame de 12 mois avec une ligne par source de revenu, une par catégorie de coût fixe, une par catégorie de coût variable, une ligne de seuil de rentabilité.",
          "R : hypothèse sous-jacente entre crochets pour chaque ligne ; aucun total calculé sur une hypothèse non fournie.",
          "T : tableau structuré, prêt à transposer dans un tableur.",
          "Lancez-le dans ChatGPT ou Claude sur votre compte professionnel.",
        ],
      },
    ],
    example: {
      title: 'Prompt 3 — fil rouge (à copier)',
      lines: [
        "« Tu es conseiller en création d'entreprise, spécialisé dans l'accompagnement de petites structures qui n'ont pas de service financier dédié. [A]",
        "Voici mon activité : un service de conseil logistique pour PME de Goma, vendu en missions de 5 jours (prix à définir), formations de 2 jours et suivi mensuel. J'ai réalisé 3 missions en 12 mois à 120 USD par jour. Mes coûts connus : transport local 8 USD par jour sur site, impressions 10 USD par mission, outils et téléphone. Mon temps disponible : 20 jours ouvrés par mois, dont une partie non facturée (prospection, déplacements). [C]",
        "Construis une trame de compte de résultat prévisionnel sur 12 mois avec : une ligne par source de revenu, une ligne par catégorie de coût fixe, une ligne par catégorie de coût variable, et une ligne de calcul du seuil de rentabilité. [L]",
        "Pour chaque ligne, indique l'hypothèse sous-jacente entre crochets (ex. [hypothèse : 10 clients par mois à partir du mois 3]) plutôt qu'un chiffre présenté comme acquis. Ne calcule aucun total avec des hypothèses que je n'ai pas fournies moi-même : si une donnée manque, laisse la ligne en placeholder à compléter. [R]",
        "Présente le résultat sous forme de tableau structuré, prêt à transposer dans un tableur. » [T]",
      ],
    },
    result: "Un prompt qui transmet vos chiffres réels, impose des hypothèses visibles entre crochets et interdit les totaux sur données manquantes.",
    tip: "Ne donnez pas encore vos prix cibles : laissez l'IA proposer une trame, puis confrontez ses propositions à vos données réelles à l'étape suivante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 9',
    title: 'Confronter chaque hypothèse suggérée par l\'IA à la réalité du secteur',
    intro: "Une hypothèse de croissance ou de tarif proposée par l'IA reflète des moyennes génériques, pas la réalité d'un marché local précis. Vous la comparez à ce que vous savez réellement avant de la retenir, et vous écrivez la décision en face.",
    steps: [
      {
        title: 'Construire le tableau de confrontation',
        actions: [
          "Dans un document 04_Confrontation, créez quatre colonnes : ligne de la trame, hypothèse de l'IA, réalité du secteur (preuve), décision.",
          "Reprenez chaque ligne de la trame de l'IA qui contient un chiffre ou une hypothèse entre crochets.",
          "En face de chaque ligne, écrivez la preuve de l'étape 1 qui la confirme ou la contredit.",
          "Écrivez la décision : retenue, corrigée, ou supprimée.",
        ],
      },
    ],
    table: {
      columns: ['Ligne de la trame', "Hypothèse de l'IA", 'Réalité du secteur (preuve)', 'Décision'],
      rows: [
        ['Volume de missions', '10 clients par mois dès le mois 3', '3 missions en 12 mois, soit 0,25 par mois', '1 mission par mois aux mois 1 et 2, puis 2 par mois [à tester]'],
        ['Tarif', '200 USD par jour (« moyenne nationale »)', 'Devis de deux consultants locaux : 140 et 160 USD', '150 USD par jour, mission de 5 jours = 750 USD'],
        ['Déplacement', '15 USD par mission', '8 USD par jour sur site, supplément hors Goma de 95 USD sur 1 mission sur 3', '40 USD plus 25 USD lissés (1 mission sur 4 hors Goma)'],
        ['Prospection', 'Absente de la trame', '4 jours par mois non facturés (mes notes)', 'Ajoutée : 16 jours facturables sur 20'],
        ['Rémunération de la porteuse', 'Absente de la trame', 'Besoin de vie minimum fixé à 600 USD', 'Ajoutée en coût fixe'],
      ],
    },
    result: "Un tableau où aucune hypothèse de l'IA ne passe sans preuve ni décision ; la trame est déjà corrigée de ses optimismes sur le volume et le tarif.",
    pitfall: "Laisser « 10 clients par mois » parce que l'IA l'a écrit avec des crochets : les crochets montrent qu'il s'agit d'une hypothèse, pas qu'elle est réaliste. Vos 3 missions en 12 mois sont la seule donnée que vous possédez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 9',
    title: 'Remplir la section 1 du gabarit — Hypothèses de revenus',
    intro: "Le document Word gabarit-plan-financier-pitch-simplifie.docx est limité à 2 pages au total. La section 1 est un tableau à quatre colonnes : Source de revenu, Hypothèse de volume / prix, Preuve ou source, Statut. Règle du gabarit : une ligne par source de revenu, aucun chiffre sans hypothèse explicite entre crochets.",
    steps: [
      {
        title: 'Saisir les trois lignes',
        actions: [
          "Ouvrez le gabarit Word, Partie A, section 1.",
          "Remplacez les crochets d'exemple de la première ligne par votre source de revenu principale, son volume et son prix.",
          "Remplissez la deuxième ligne, puis la troisième (la ligne vide « à compléter »).",
          "Colonne Preuve ou source : une pièce réelle (devis, relevé, entretien) ou « aucune à ce jour ». Colonne Statut : à tester, validée ou invalidée.",
        ],
      },
      {
        title: 'Calculer le revenu de l\'année',
        actions: [
          "Missions : 2 missions aux mois 1 et 2 (une par mois) + 20 missions aux mois 3 à 12 = 22 missions × 750 USD.",
          "Formations : 4 sessions (mois 3, 6, 9, 12) × 300 USD.",
          "Abonnements : 3 clients × 100 USD × 7 mois (mois 6 à 12).",
        ],
      },
    ],
    table: {
      columns: ['Source de revenu', 'Hypothèse de volume / prix', 'Preuve ou source', 'Statut'],
      rows: [
        ['Missions « Stock sous contrôle » (5 jours)', '[hypothèse : 1 mission par mois aux mois 1 et 2, puis 2 par mois ; 750 USD = 5 jours × 150] soit 22 missions = 16 500 USD', 'Devis de deux consultants (140 et 160 USD par jour) ; 3 missions réalisées ; 3 gérants sur 5 acceptent 750 USD en deux fois', 'À tester'],
        ['Formations ponctuelles (2 jours)', '[hypothèse : 1 session par trimestre dès le mois 3 à 300 USD] soit 4 sessions = 1 200 USD', 'Le client B a demandé une formation de ses magasiniers', 'À tester'],
        ['Abonnement de suivi mensuel', '[hypothèse : 3 clients à 100 USD par mois dès le mois 6] soit 7 mois = 2 100 USD', 'Aucune à ce jour : idée issue de la trame de l\'IA', 'À tester'],
      ],
    },
    result: "Un tableau de trois lignes dont le total de 19 800 USD (16 500 + 1 200 + 2 100) est recalculable ; chaque ligne porte son hypothèse entre crochets, sa preuve ou son absence de preuve, son statut.",
    pitfall: "Remplir la colonne Preuve avec « étude de marché » ou « selon l'IA » : ce n'est pas une preuve. Si vous n'en avez pas, écrivez « aucune à ce jour » et le statut « à tester ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 9',
    title: 'Remplir la section 2 du gabarit — Hypothèses de coûts',
    intro: "La section 2 distingue coûts fixes et coûts variables, et demande d'inclure les coûts irréguliers ou saisonniers propres au secteur. C'est là que les porteurs de projet sous-estiment : déplacements, périodes d'accès difficile, maintenance du matériel.",
    steps: [
      {
        title: 'Classer chaque coût',
        actions: [
          "Colonne Fixe / Variable : un coût est fixe s'il est dû même sans mission ; variable s'il augmente avec le nombre de missions.",
          "Colonne Montant estimé : un montant par mois (fixe) ou par mission (variable).",
          "Colonne Hypothèse sous-jacente : d'où vient le montant (relevé, devis, décision).",
        ],
      },
      {
        title: 'Inclure les coûts irréguliers',
        actions: [
          "Ajoutez le supplément des missions hors Goma, lissé sur toutes les missions.",
          "Ajoutez un coût fixe d'enregistrement et de comptabilité simple, divisé par 12.",
          "Calculez les deux totaux : fixes par mois et variables par mission.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie de coût', 'Fixe / Variable', 'Montant estimé', 'Hypothèse sous-jacente'],
      rows: [
        ['Rémunération minimale de la porteuse', 'Fixe', '600 USD par mois', '[décision : besoin de vie minimum, pas un salaire de marché]'],
        ['Outils et licences (IA, tableur cloud, stockage)', 'Fixe', '35 USD par mois', '[abonnements actuels relevés]'],
        ['Téléphone et internet', 'Fixe', '40 USD par mois', '[forfaits actuels]'],
        ['Enregistrement, comptabilité simple, assurance', 'Fixe', '25 USD par mois', '[300 USD par an lissés sur 12 mois]'],
        ['Déplacement terrain', 'Variable', '40 USD par mission', '[5 jours sur site × 8 USD de transport local, relevé de mes missions]'],
        ['Impression et fournitures', 'Variable', '10 USD par mission', '[relevé de mes missions]'],
        ['Supplément mission hors Goma', 'Variable (irrégulier)', '25 USD par mission en moyenne', '[1 mission sur 4 hors Goma × 100 USD de supplément]'],
        ['Supports de formation', 'Variable', '20 USD par session', '[impressions et copies]'],
        ['Données et messagerie des abonnés', 'Variable', '5 USD par client et par mois', '[forfait supplémentaire]'],
      ],
    },
    result: "Fixes : 600 + 35 + 40 + 25 = 700 USD par mois (8 400 USD par an). Variables par mission : 40 + 10 + 25 = 75 USD. Tous les montants sont rattachés à un relevé, un forfait ou une décision.",
    tip: "Le supplément hors Goma lissé (25 USD) est un coût irrégulier transformé en coût moyen : il évite qu'un mois de pluie ou un déplacement lointain ne ruine un plan qui semblait équilibré.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 9',
    title: 'Transposer la trame sur 12 mois dans un tableur et la recalculer vous-même',
    intro: "Le tableau Word donne les hypothèses ; le tableur calcule l'année. Vous construisez la trame vous-même, avec des formules simples que vous comprenez, de façon à pouvoir changer une hypothèse et voir le résultat. L'IA peut produire la structure du tableau, jamais garantir l'exactitude des calculs.",
    steps: [
      {
        title: 'Créer les paramètres et les lignes',
        actions: [
          "Dans un nouveau classeur, saisissez en A2:B4 les paramètres : prix d'une mission 750, coût variable par mission 75, coûts fixes mensuels 700.",
          "En ligne 6, saisissez les mois 1 à 12 dans B6:M6 et « Total » en N6. Ligne 7 : missions facturées (1, 1 puis 2 jusqu'au mois 12). Lignes 9 et 10 : revenus des formations (300 aux mois 3, 6, 9, 12) et des abonnements (300 par mois du mois 6 au mois 12).",
          "Saisissez les formules de la colonne B, puis tirez la poignée jusqu'à M.",
        ],
      },
      {
        title: 'Ajouter les contrôles',
        actions: [
          "Ligne 15 : résultat cumulé.",
          "Lignes 16 à 18 : encaissements décalés d'un mois (paiement à 30 jours), décaissements et trésorerie cumulée.",
          "Colonne N : =SOMME(B7:M7) et autres totaux. Contrôle : N11 doit valoir 19 800 et N14 9 565.",
        ],
      },
    ],
    example: {
      title: 'Formules (version française) à saisir en colonne B puis à étendre',
      lines: [
        "B8 : =B7*$B$2  (revenus des missions)",
        "B11 : =SOMME(B8:B10)  (total revenus)",
        "B12 : =B7*$B$3+SI(B9>0;20;0)+SI(B10>0;15;0)  (coûts variables : missions, supports de formation, données des abonnés)",
        "B13 : =$B$4  (coûts fixes)",
        "B14 : =B11-B12-B13  (résultat du mois)",
        "B15 : =B14 ; C15 : =B15+C14  (résultat cumulé)",
        "B16 : 0 ; C16 : =B11  (encaissements, décalage d'un mois) — B17 : =B12+B13 — B18 : =B16-B17 ; C18 : =B18+C16-C17",
        "Contrôle fil rouge : N11 = 19 800 ; N12 = 1 835 ; N13 = 8 400 ; N14 = 9 565.",
      ],
    },
    result: "Une trame de 12 mois dont les totaux sont recalculés par vous : revenus 19 800 USD, coûts variables 1 835 USD, coûts fixes 8 400 USD, résultat de l'année 9 565 USD.",
    pitfall: "Coller dans le tableur les totaux proposés par l'IA : ils reposent sur des hypothèses qu'elle a choisies. Recalculez ligne par ligne avec les vôtres, et faites relire les formules par une deuxième personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 9',
    title: 'Remplir la section 3 du gabarit — Seuil de rentabilité',
    intro: "La section 3 est une question structurée, pas un calcul automatique : trois termes, trois valeurs. Le gabarit demande de vérifier chaque terme avant de tirer une conclusion. Le seuil se calcule en missions, parce que la mission est votre unité vendue.",
    steps: [
      {
        title: 'Calculer les trois termes',
        actions: [
          "Total des coûts fixes mensuels : reprenez la somme de la section 2.",
          "Marge par mission : prix de la mission moins coût variable unitaire.",
          "Nombre de missions pour atteindre le seuil : coûts fixes ÷ marge unitaire.",
        ],
      },
      {
        title: 'Interpréter',
        actions: [
          "Convertissez le seuil mensuel en seuil annuel et comparez-le à votre rythme réel.",
          "Formulez la conclusion en une phrase, avec le chiffre qui fait mal.",
        ],
      },
    ],
    table: {
      columns: ['Terme du calcul', 'Valeur retenue'],
      rows: [
        ['Total des coûts fixes mensuels', '700 USD (dont 600 de rémunération minimale)'],
        ['Marge par mission (prix − coût variable unitaire)', '750 − 75 = 675 USD'],
        ['Nombre de missions pour atteindre le seuil (coûts fixes ÷ marge unitaire)', '700 ÷ 675 = 1,04 mission par mois, soit 13 missions par an (700 × 12 ÷ 675 = 12,4)'],
      ],
    },
    example: {
      title: 'Lecture du seuil',
      lines: [
        "Le seuil est de 13 missions par an ; Amani en a réalisé 3 sur les 12 derniers mois, soit 23 % du seuil (3 ÷ 13).",
        "Sans la rémunération minimale, le seuil tomberait à 100 ÷ 675 = 0,15 mission par mois : le plan est donc surtout un plan de passage d'une activité d'appoint à une activité qui nourrit sa porteuse.",
        "Conclusion écrite : « Pour couvrir 700 USD par mois, GomaLogis doit vendre au moins 13 missions par an, soit 4 fois mon rythme actuel. »",
      ],
    },
    result: "La section 3 remplie avec trois valeurs vérifiables et une conclusion honnête sur l'écart entre le seuil et le rythme actuel.",
    pitfall: "Conclure « le plan est rentable » parce que le calcul donne 1,04 : c'est un seuil, pas une prévision de ventes. La question utile est de savoir si vous pouvez atteindre ce volume, et ce que vous avez déjà qui le prouve.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 8 sur 9',
    title: 'Tester la sensibilité, la capacité et la trésorerie',
    intro: "Un plan à un seul scénario est une promesse, pas une analyse. Trois contrôles prennent chacun cinq minutes dans le tableur et protègent d'un plan qui ne tient que si tout va bien : un scénario prudent, une vérification de capacité, un besoin de trésorerie.",
    steps: [
      {
        title: 'Scénario prudent et tarif plus bas',
        actions: [
          "Dupliquez la feuille et mettez 1 mission par mois toute l'année : lisez N14.",
          "Dupliquez à nouveau, remettez le plan de base et baissez le prix à 700 USD (140 USD par jour) : lisez N14.",
        ],
      },
      {
        title: 'Capacité et trésorerie',
        actions: [
          "Capacité d'un mois chargé : jours facturables + jours non facturés ≤ 20 jours ouvrés.",
          "Trésorerie : repérez le point bas de la ligne 18 (trésorerie cumulée) : c'est le besoin de financement de démarrage.",
        ],
      },
    ],
    table: {
      columns: ['Scénario', 'Résultat de l\'année (USD)', 'Lecture'],
      rows: [
        ['Plan de base : 22 missions, formations, abonnements', '9 565', 'Plan à tester'],
        ['1 mission par mois toute l\'année, formations et abonnements maintenus', '2 815', 'Reste positif'],
        ['1 mission par mois seulement, sans formation ni abonnement', '− 300', 'Seuil non atteint : 1 mission par mois ne suffit pas'],
        ['Plan de base avec prix à 700 USD (140 USD par jour)', '8 465', 'Seuil à 1,12 mission par mois (700 ÷ 625)'],
      ],
    },
    example: {
      title: 'Capacité et trésorerie (fil rouge)',
      lines: [
        "Mois à 2 missions, 1 formation et 3 abonnés (mois 6, 9, 12) : 10 jours de missions + 1 jour de déplacement + 2 jours de formation + 1,5 jour de suivi + 4 jours de prospection = 18,5 jours sur 20, soit 92,5 % : pas de marge de sécurité.",
        "Trésorerie cumulée (paiement à 30 jours) : − 775 au mois 1, − 800 au mois 2, − 920 au mois 3 (point bas), + 30 au mois 4.",
        "Besoin de démarrage : 920 USD au plus bas ; demande arrondie à 1 500 USD pour garder une marge de sécurité de 580 USD.",
      ],
    },
    result: "Quatre scénarios chiffrés, un mois chargé à 92,5 % de capacité et un besoin de trésorerie de 920 USD : vous savez à quel volume le plan casse et combien demander.",
    tip: "Le chiffre qui rassure un évaluateur n'est pas le résultat de l'année : c'est la phrase « voici ce qui se passe si je vends deux fois moins que prévu ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 9 sur 9',
    title: 'Remplir la section 4 du gabarit — Journal des hypothèses explicites',
    intro: "La section 4 est la preuve que vous avez décidé : une hypothèse, la personne ou le fait qui la confirme (votre décision, pas celle de l'IA), la date. Règle du gabarit : aucune hypothèse financière ne doit rester implicite dans le document destiné à un tiers.",
    steps: [
      {
        title: 'Remplir le journal',
        actions: [
          "Reprenez chaque hypothèse retenue dans les sections 1 à 3.",
          "Colonne Confirmée par : le devis, le relevé ou votre décision explicite.",
          "Colonne Date de vérification : la date à laquelle vous avez contrôlé.",
          "Ajoutez une ligne par hypothèse jusqu'à épuisement de celles qui comptent.",
        ],
      },
      {
        title: 'Faire relire',
        actions: [
          "Envoyez au relecteur (le comptable) la trame du tableur avec trois totaux à recalculer : revenus 19 800, fixes 8 400, résultat 9 565.",
          "Intégrez ses corrections et notez la date de sa relecture.",
        ],
      },
    ],
    table: {
      columns: ['Hypothèse', 'Confirmée par', 'Date de vérification'],
      rows: [
        ['Tarif de 150 USD par jour', 'Devis de deux consultants indépendants (140 et 160 USD) ; décision A. Kahindo', '16/11/2026'],
        ['2 missions par mois dès le mois 3', 'Décision A. Kahindo après calcul de capacité (18,5 jours sur 20) ; à tester pendant 3 mois', '16/11/2026'],
        ['Coûts variables de 75 USD par mission', 'Relevé de mes 3 missions (8 USD par jour de transport, 10 USD d\'impression) ; supplément hors Goma estimé', '16/11/2026'],
        ['Rémunération minimale de 600 USD par mois', 'Décision A. Kahindo : budget de vie', '16/11/2026'],
      ],
    },
    result: "Une section 4 où chaque hypothèse du plan est rattachée à une preuve ou à une décision datée ; le relecteur a recalculé les trois totaux et confirmé 19 800, 8 400 et 9 565.",
    pitfall: "Écrire « Confirmée par : l'IA » : c'est précisément ce que le gabarit interdit. Si l'IA est la seule source d'une hypothèse, cette hypothèse reste « à tester », elle n'est pas confirmée.",
  },

  // ───────────── Procédure 4 — Pitch et executive summary ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 8',
    title: 'Écrire et chronométrer votre propre premier jet de pitch',
    intro: "Ne demandez jamais à l'IA d'écrire votre pitch depuis une page blanche : un pitch entièrement réécrit par l'IA devient plus lisse, mais aussi plus générique et moins convaincant. Vous écrivez d'abord, imparfaitement, avec votre voix ; l'IA challenge ensuite.",
    steps: [
      {
        title: 'Écrire le premier jet',
        actions: [
          "Reprenez la structure en 7 lignes de la section 5 du gabarit : Problème, Solution, Marché, Modèle économique, Traction, Équipe, Demande précise.",
          "Écrivez 2 ou 3 phrases par ligne, comme vous les diriez à l'oral, sans chercher à faire beau.",
          "Gardez les phrases personnelles (une anecdote, une phrase de client) : c'est votre voix.",
        ],
      },
      {
        title: 'Mesurer',
        actions: [
          "Comptez les mots (Révision > Statistiques).",
          "Lisez le texte à voix haute en chronométrant : à 130 mots par minute, 3 minutes correspondent à environ 390 mots.",
          "Notez les passages où vous butez : ils seront probablement à couper.",
        ],
      },
    ],
    example: {
      title: 'Premier jet d\'Amani — extraits (lundi 16/11 au soir)',
      lines: [
        "Problème : « Le marché du conseil logistique explose à Goma et les PME perdent des milliers de dollars chaque année. »",
        "Équipe : « J'ai passé six ans à compter des sacs de farine pour des organisations. Un jour, un gérant m'a dit : « Je ne perds pas mon stock, je le cherche. » C'est là que j'ai compris. »",
        "Traction : « Mes clients sont ravis de mes missions. »",
        "Mesure : 520 mots, soit 4 minutes à la lecture ; trop long d'une minute.",
      ],
    },
    result: "Un premier jet de pitch dans votre voix, avec un nombre de mots et une durée mesurés : vous savez de combien le resserrer.",
    pitfall: "Demander « écris-moi un pitch de 3 minutes pour mon projet » : vous obtenez un texte plausible qui ressemble à tous les pitchs, et vous perdez la phrase du gérant qui est précisément ce qu'un évaluateur retiendra.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 8',
    title: 'Rédiger le Prompt 4 de challenge et de resserrement (méthode STAR)',
    intro: "La structure du prompt garantit l'ordre : diagnostic d'abord, réécriture ensuite. Cet ordre est ce qui vous garde décideur de chaque changement.",
    steps: [
      {
        title: 'Assembler le prompt',
        actions: [
          "S : collez le texte réel du pitch et indiquez l'auditoire exact (une structure d'accompagnement qui évalue des dizaines de dossiers).",
          "T : demandez de resserrer sans changer le fond ni votre voix ni votre histoire.",
          "A : quatre opérations numérotées : coupes, affirmations non étayées, questions d'un évaluateur sceptique, version resserrée.",
          "R : exigez la liste des coupes et des affirmations à étayer avant la version resserrée, jamais l'inverse.",
        ],
      },
    ],
    example: {
      title: 'Prompt 4 — fil rouge (à copier)',
      lines: [
        "« Situation : voici mon pitch de 3 minutes pour présenter GomaLogis Conseil, un service de conseil en optimisation logistique pour PME de la région de Goma, à une structure d'accompagnement à l'entrepreneuriat qui étudie un possible appui : [coller le texte du pitch].",
        "Tâche : resserrer ce pitch pour un auditoire qui évalue des dizaines de dossiers et qui cherche la clarté du modèle économique avant tout, sans changer ma voix ni mon histoire personnelle avec ce projet.",
        "Action : (1) identifie les passages trop longs à couper ; (2) signale toute affirmation sur le marché ou les résultats passés qui n'est pas étayée par un chiffre vérifié ; (3) liste les 2 questions qu'un évaluateur d'accompagnement poserait en priorité sur le modèle économique ; (4) propose une version resserrée en conservant mes formulations personnelles les plus fortes.",
        "Résultat attendu : d'abord la liste des coupes et affirmations à étayer, ensuite la version resserrée, jamais l'inverse. »",
      ],
    },
    result: "Un prompt STAR qui impose le diagnostic avant la réécriture et protège explicitement vos formulations personnelles.",
    tip: "Précisez l'auditoire : une structure qui évalue des dizaines de dossiers cherche la clarté du modèle économique avant l'émotion, et l'IA resserre en conséquence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 8',
    title: "Lire le diagnostic avant la version resserrée",
    intro: "Vous lancez le prompt dans Claude, vous lisez le diagnostic et vous ne regardez la version resserrée qu'après avoir décidé de ce que vous gardez. Pour chaque ligne du diagnostic, écrivez votre décision.",
    steps: [
      {
        title: 'Lancer et lire',
        actions: [
          "Collez le Prompt 4 avec votre pitch dans une nouvelle conversation Claude.",
          "Lisez uniquement la première partie (coupes, affirmations, questions) sans aller à la version resserrée.",
          "Reportez chaque point dans un tableau à quatre colonnes : type, passage, remarque de l'IA, ma décision.",
        ],
      },
    ],
    table: {
      columns: ['Type', 'Passage', "Remarque de l'IA", 'Ma décision'],
      rows: [
        ['Coupe', 'Paragraphe sur mon parcours de 2014 à 2020 (140 mots)', 'Trop long pour ce que l\'évaluateur cherche : le modèle économique', 'Réduire à 45 mots, garder la phrase des sacs de farine'],
        ['Affirmation non étayée', '« Le marché du conseil logistique explose à Goma »', 'Aucun chiffre, aucune source', 'Supprimer'],
        ['Affirmation non étayée', '« Les PME perdent des milliers de dollars par an »', 'Aucun chiffre vérifié', 'Remplacer par le constat des 5 entretiens'],
        ['Affirmation non étayée', '« Mes clients sont ravis »', 'Aucune preuve', 'Remplacer par un résultat attesté'],
        ['Question sceptique', 'Pourquoi une PME paierait 750 USD alors qu\'elle tient son cahier depuis des années ?', 'Première question probable sur le modèle économique', 'Préparer la réponse (voir étape 4)'],
        ['Question sceptique', 'Comment passer de 3 missions à 22 en un an ?', 'Seuil à 13 missions par an, rythme actuel à 3', 'Préparer la réponse : prospection 4 jours par mois, 5 entretiens déjà menés'],
      ],
    },
    result: "Un diagnostic décidé ligne par ligne : trois coupes ou corrections, trois affirmations à étayer ou supprimer, deux questions auxquelles vous devez savoir répondre.",
    pitfall: "Lire d'abord la version resserrée « pour gagner du temps » : vous adoptez des changements sans savoir lesquels, et vous ne pouvez plus défendre le texte à l'oral.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 8',
    title: 'Étayer ou supprimer chaque affirmation, et préparer les réponses sceptiques',
    intro: "Chaque affirmation non étayée a trois destins possibles : remplacée par un fait vérifié, adoucie en hypothèse, ou supprimée. Les questions sceptiques ne se règlent pas par une phrase habile mais par une preuve que vous détenez déjà.",
    steps: [
      {
        title: 'Traiter les affirmations',
        actions: [
          "Pour chaque affirmation du diagnostic, cherchez dans vos pièces (feuille Suivi des hypothèses, fiche d'entretiens, attestations) un fait qui la remplace.",
          "À défaut de preuve, supprimez l'affirmation ou transformez-la en hypothèse annoncée comme telle.",
          "Reportez la formulation finale dans le texte du pitch.",
        ],
      },
      {
        title: 'Préparer les réponses',
        actions: [
          "Rédigez en deux phrases la réponse à chaque question sceptique, avec un chiffre ou une preuve.",
          "Entraînez-vous à les dire à voix haute.",
        ],
      },
    ],
    table: {
      columns: ['Affirmation d\'origine', 'Décision', 'Formulation finale et preuve'],
      rows: [
        ['« Le marché explose à Goma »', 'Supprimée', 'Aucune donnée sourcée sur la croissance : on ne l\'affirme pas'],
        ['« Les PME perdent des milliers de dollars »', 'Remplacée', '« 4 gérants sur 5 interrogés les 11 et 12 novembre placent ruptures ou pertes de stock en tête de leurs soucis » (fiche d\'entretiens)'],
        ['« Mes clients sont ravis »', 'Remplacée', '« Chez le client B, les ruptures de références sont passées de 18 % à 7 % en 3 mois » (attestation signée du gérant, 28/10/2026)'],
      ],
    },
    example: {
      title: 'Réponses préparées (fil rouge)',
      lines: [
        "Question : « Pourquoi 750 USD alors que je tiens mon cahier depuis dix ans ? » Réponse : « Chez le client B, les ruptures sont passées de 18 % à 7 % en trois mois, et le paiement peut se faire en deux fois. »",
        "Question : « Comment passer de 3 à 22 missions ? » Réponse : « Le seuil est de 13 missions par an. Je consacre 4 jours par mois à la prospection et j'ai déjà 5 entretiens, dont 3 gérants prêts à payer en deux fois. »",
      ],
    },
    result: "Aucune affirmation ne reste sans fait ou sans suppression, et les deux questions les plus probables ont une réponse chiffrée prête.",
    tip: "Un chiffre vérifié et modeste vaut mieux qu'une envolée non étayée : « 4 gérants sur 5 interrogés » est plus crédible que « les PME perdent des milliers de dollars ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 8',
    title: 'Comparer la version resserrée à votre texte et protéger votre voix',
    intro: "Vous lisez maintenant la version resserrée proposée par l'IA, mais vous ne l'adoptez pas telle quelle. Vous comparez, vous reprenez vos formulations fortes et vous rejetez tout fait que vous n'avez pas fourni.",
    steps: [
      {
        title: 'Comparer',
        actions: [
          "Dans Word, ouvrez Révision > Comparer, avec votre premier jet comme document d'origine et la version de l'IA comme document révisé.",
          "Lisez chaque modification : acceptez celles qui coupent, rejetez celles qui lissent ou qui ajoutent un fait.",
          "Remettez vos phrases les plus personnelles, mot pour mot.",
        ],
      },
      {
        title: 'Mesurer et valider',
        actions: [
          "Comptez à nouveau les mots : visez environ 390 mots pour 3 minutes.",
          "Lisez à voix haute et chronométrez.",
          "Demandez-vous : une personne qui me connaît me reconnaîtrait-elle dans ce texte ?",
        ],
      },
    ],
    example: {
      title: "Avant / après sur un passage — fil rouge",
      lines: [
        "Version de l'IA : « Fort de plus de six ans d'expérience dans la logistique opérationnelle, je mets mon expertise au service des PME afin d'optimiser leur gestion des stocks. »",
        "Version retenue par Amani : « J'ai passé six ans à compter des sacs de farine pour des organisations. Un gérant m'a dit : « Je ne perds pas mon stock, je le cherche. » C'est pour lui que j'ai créé GomaLogis. »",
        "Contrôle : 385 mots, soit 2 min 57 à voix haute ; phrase du gérant conservée ; aucun chiffre ajouté par l'IA.",
      ],
    },
    result: "Un pitch de 385 mots tenant en trois minutes, dont la phrase d'ouverture et l'anecdote du gérant sont d'origine ; chaque chiffre qu'il contient est sourcé dans votre dossier.",
    pitfall: "Accepter la phrase « Fort de plus de six ans d'expérience… » parce qu'elle est plus propre : elle pourrait être prononcée par n'importe quel consultant. L'évaluateur cherche la personne, pas le texte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 8',
    title: 'Remplir la section 5 du gabarit — Structure du pitch en 7 lignes',
    intro: "La section 5 de la Partie B est la structure du pitch de 3 minutes maximum, un message par ligne. Elle sert aussi d'executive summary : si une ligne est vide, le pitch n'est pas prêt à être présenté.",
    steps: [
      {
        title: 'Remplir les 7 lignes',
        actions: [
          "Problème : en une phrase, le problème réel que vous résolvez.",
          "Solution : en une phrase, ce que vous proposez concrètement.",
          "Marché : un chiffre sourcé, jamais une estimation non vérifiée.",
          "Modèle économique : comment vous êtes payé et par qui.",
          "Traction ou preuve de concept : ce qui existe déjà, même modeste.",
          "Équipe : pourquoi vous, spécifiquement.",
          "Demande précise : ce que vous demandez aujourd'hui à votre interlocuteur.",
        ],
      },
    ],
    example: {
      title: 'Section 5 — version finale (fil rouge)',
      lines: [
        "Problème — Dans les PME de distribution de Goma, le stock se tient sur cahier : 4 gérants sur 5 interrogés en novembre 2026 placent les ruptures ou les pertes en tête de leurs soucis.",
        "Solution — Une mission de 5 jours à prix fixe (750 USD) : audit sur site, tableur de suivi de stock prêt à l'emploi, équipe magasin formée.",
        "Marché — 187 entreprises de distribution et d'agro-transformation recensées à Goma (Répertoire des entreprises de Goma, 2025), objectif de 9 clientes la première année.",
        "Modèle économique — Mission à 750 USD, formation à 300 USD, suivi mensuel à 100 USD ; payé par le gérant de la PME, en deux fois si besoin.",
        "Traction — 3 missions réalisées en 12 mois ; chez l'un des clients, ruptures de références passées de 18 % à 7 % en 3 mois (attestation signée du gérant).",
        "Équipe — Six ans de logistique à Goma, trois missions menées seule, calculs relus par un comptable.",
        "Demande précise — Cinq mises en relation avec des PME de votre portefeuille avant fin janvier, et un appui de démarrage de 1 500 USD couvrant les trois premiers mois de trésorerie (besoin maximal de 920 USD).",
      ],
    },
    result: "Sept lignes remplies, chacune d'une à deux phrases ; chaque chiffre renvoie à une source du dossier ; la demande est précise et chiffrée.",
    pitfall: "Une demande vague (« votre soutien ») : l'interlocuteur ne sait pas quoi vous répondre. Une demande chiffrée avec son calcul (920 USD au plus bas, 1 500 USD demandés) se discute.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 8',
    title: 'Remplir la section 6 du gabarit — Checklist de challenge du pitch',
    intro: "La section 6 est un tableau à deux colonnes : la question de challenge, et la réponse ou la correction que vous avez apportée. Elle se remplit après le Prompt 4, ligne par ligne ; c'est une preuve que le challenge a été traité et non simplement lu.",
    steps: [
      {
        title: 'Répondre aux quatre questions',
        actions: [
          "Question 1 : cette affirmation est-elle sourcée par un chiffre vérifiable ? Écrivez ce que vous avez supprimé ou sourcé.",
          "Question 2 : ce passage est-il trop long pour le temps disponible ? Écrivez la coupe et la durée mesurée.",
          "Question 3 : quelle est la première question qu'un sceptique poserait ? Écrivez-la avec votre réponse.",
          "Question 4 : ma voix est-elle toujours reconnaissable ? Écrivez ce que vous avez conservé.",
        ],
      },
    ],
    table: {
      columns: ['Question de challenge', 'Réponse / correction apportée'],
      rows: [
        ['Cette affirmation est-elle sourcée par un chiffre vérifiable ?', '« Le marché explose » supprimée ; 187 entreprises : Répertoire 2025, page 14 ; « 4 gérants sur 5 » : fiche d\'entretiens des 11 et 12/11 ; 18 % à 7 % : attestation du 28/10'],
        ['Ce passage est-il trop long pour le temps de lecture ou d\'écoute disponible ?', 'Parcours de 2014 à 2020 réduit de 140 à 45 mots ; durée mesurée à voix haute : 2 min 57'],
        ['Quelle est la première question qu\'un interlocuteur sceptique poserait sur le modèle économique ?', '« Pourquoi 750 USD alors que je tiens mon cahier depuis dix ans ? » Réponse : résultat chez le client B (18 % → 7 %) et paiement en deux fois'],
        ['Ma voix et mon histoire personnelle sont-elles toujours reconnaissables après resserrement ?', 'Anecdote des sacs de farine et phrase du gérant conservées mot pour mot ; relue à voix haute devant le comptable, qui a reconnu ma façon de parler'],
      ],
    },
    result: "Les quatre lignes de la section 6 sont remplies avec une réponse concrète ; aucune ne dit simplement « oui ».",
    tip: "Une réponse qui contient un nombre, un nom de document ou une date est vérifiable. « Oui, c'est fait » ne l'est pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 8 sur 8',
    title: 'Compléter la section 7, tenir les 2 pages et exporter le PDF',
    intro: "La section 7 « Validation » clôt le document : nom, fonction et date. Le gabarit impose 2 pages maximum pour le plan financier et le pitch. C'est ce document, et non la conversation avec l'IA, qui sera remis à un tiers.",
    steps: [
      {
        title: 'Valider',
        actions: [
          "Section 7 : saisissez « Rédigé par (nom, fonction) » et la date.",
          "Faites relire la Partie A par une personne compétente en chiffres (le comptable) et la Partie B par quelqu'un qui connaît votre voix.",
          "Notez dans le registre la date de chaque relecture.",
        ],
      },
      {
        title: 'Contrôler la longueur et exporter',
        actions: [
          "Vérifiez que l'ensemble tient en 2 pages : si ce n'est pas le cas, coupez du texte, ne réduisez pas la police.",
          "Fichier > Enregistrer sous > PDF, nom 2026-11-18_GomaLogis_Plan-financier_Pitch.pdf.",
          "Joignez au PDF le canevas rempli et la fiche de vérification de source, puis envoyez la veille du rendez-vous.",
        ],
      },
    ],
    example: {
      title: 'Validation et envoi — fil rouge',
      lines: [
        "Section 7 : « Rédigé par Amani Kahindo, porteuse du projet GomaLogis Conseil — 17/11/2026 ».",
        "Relecture de Josué Bahati le 18/11 : trois totaux recalculés (19 800 ; 8 400 ; 9 565) et corrigés d'une faute de signe dans la ligne de trésorerie.",
        "Dossier envoyé à Espérance Safari le mercredi 18/11/2026 à 16 h : PDF de 2 pages, canevas (.xlsx), fiche de vérification (PDF).",
      ],
    },
    result: "Un PDF de 2 pages signé, daté, relu, avec ses pièces jointes, envoyé la veille du rendez-vous du jeudi 19 novembre à 10 h.",
    pitfall: "Envoyer le fil de discussion avec l'IA « pour montrer le travail » : le tiers évalue votre dossier, pas l'outil. Joignez vos pièces de preuve, jamais la conversation.",
  },

  // ───────────── Procédure 5 — Structurer ou décider ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Dresser, pour chaque étape, la liste de ce que vous décidez',
    intro: "Le jugement stratégique ne se délègue pas, mais il doit pouvoir être désigné. Avant d'ouvrir l'IA à chaque étape, vous écrivez ce que vous trancherez vous-même : c'est la première ligne du registre des décisions.",
    steps: [
      {
        title: 'Construire le registre',
        actions: [
          "Créez un fichier 05_Registre_decisions avec quatre colonnes : étape, ce que l'IA a structuré, décision prise par moi, preuve.",
          "Avant chaque étape de la procédure 1 à 4, écrivez la ligne « décision réservée » dans la colonne correspondante.",
          "Datez chaque ligne.",
        ],
      },
    ],
    table: {
      columns: ['Étape', 'Décision réservée à la porteuse', 'Où elle est consignée'],
      rows: [
        ['Canevas', 'Segment prioritaire, positionnement, prix', 'Feuille « Questions de challenge IA », colonne C'],
        ['Étude de marché', 'Quel chiffre est retenu, écarté, ou retenu avec réserve', 'Feuille « Suivi des hypothèses », colonne C'],
        ['Plan financier', 'Volume, tarif, rémunération minimale, scénario présenté', 'Partie A, section 4 du gabarit'],
        ['Pitch', 'Ce qu\'on coupe, ce qu\'on garde, la demande précise', 'Partie B, sections 5 et 6 du gabarit'],
      ],
    },
    result: "Un registre où, avant même de lancer un prompt, vous avez écrit ce que l'IA n'aura pas le droit de trancher à votre place.",
    tip: "Le registre ne sert pas qu'au dossier : le jour où vous doutez d'un chiffre, il vous dit en dix secondes qui l'a décidé, quand et sur quelle preuve.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: "Reformuler toute demande de décision en demande de challenge",
    intro: "Demander à l'IA « que devrais-je choisir ? » produit une réponse qui ressemble à une décision mais qui n'engage la responsabilité de personne. La bonne question est toujours « quelles sont les faiblesses de chaque option que j'envisage ? », suivie d'une décision prise par vous.",
    steps: [
      {
        title: 'Repérer la demande de décision',
        actions: [
          "Relisez votre prompt avant l'envoi : contient-il « que devrais-je », « quel est le meilleur », « choisis pour moi » ?",
          "Si oui, réécrivez la demande en question sur les faiblesses et les conditions de réussite de chaque option.",
        ],
      },
      {
        title: 'Utiliser le gabarit de reformulation',
        actions: [
          "Remplacez « Que devrais-je choisir ? » par « Voici mes options. Pour chacune : faiblesses, conditions qui devraient être vraies pour qu'elle soit la bonne, et la plus petite vérification terrain qui la testerait. Ne choisis pas. »",
          "Ajoutez : « Termine par les questions que je dois trancher moi-même. »",
        ],
      },
    ],
    table: {
      columns: ['Demande qui délègue la décision', 'Reformulation qui garde la décision'],
      rows: [
        ['Quel positionnement dois-je choisir ?', 'Quelles sont les faiblesses de chacun de ces trois positionnements, et que devrait-il être vrai pour que chacun soit le bon ?'],
        ['Quel prix dois-je fixer ?', 'Que faudrait-il constater sur mes devis et mes entretiens pour justifier 150 USD par jour plutôt que 120 ? Ne propose pas de chiffre.'],
        ['Est-ce que mon plan est réaliste ?', 'Quelles hypothèses de mon plan sont les plus fragiles, et laquelle, si elle est fausse, fait passer le résultat sous zéro ?'],
      ],
    },
    result: "Trois exemples de reformulation prêts à réutiliser ; toute demande de choix devient une demande de faiblesses et de conditions.",
    pitfall: "Poser la question de décision « juste pour avoir un avis » : l'avis, rédigé avec assurance, vous influence et vous le citerez ensuite comme s'il était de vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: "Appliquer la méthode à un vrai choix : le positionnement de GomaLogis",
    intro: "Le positionnement est la décision la plus stratégique du dossier. Vous demandez à Claude de challenger trois options, vous lisez les faiblesses, puis vous décidez avec un critère que vous écrivez avant de relire sa réponse.",
    steps: [
      {
        title: 'Challenger les options',
        actions: [
          "Écrivez les options envisagées en une ligne chacune.",
          "Envoyez-les à Claude avec la reformulation de l'étape 2 et lisez faiblesses et conditions.",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Écrivez votre critère de décision (par exemple : ce que vos 3 missions passées ont réellement vendu).",
          "Choisissez une option et notez la plus petite vérification qui la testera.",
        ],
      },
    ],
    example: {
      title: 'Options, faiblesses et décision (fil rouge)',
      lines: [
        "Option A — Audit logistique généraliste pour PME : faiblesses : concurrence des cabinets de Kinshasa, prix difficile à justifier, périmètre flou.",
        "Option B — Pack « Stock sous contrôle » pour distributeurs et agro-transformateurs : faiblesses : dépend de la récurrence ; condition : le problème de stock doit être reconnu comme prioritaire par les gérants.",
        "Option C — Formation seule : faiblesses : prix unitaire bas, peu de différenciation, dépend de la disponibilité des équipes.",
        "Critère écrit avant lecture : « Ce que mes trois missions ont réellement vendu. » Les trois étaient des missions de stock.",
        "Décision d'Amani : option B. Test : 4 gérants sur 5 citent les ruptures ou pertes de stock en tête (fait le 11 et 12/11).",
      ],
    },
    result: "Un positionnement choisi par vous sur un critère écrit à l'avance, avec une vérification terrain déjà réalisée ; l'IA n'a produit que des faiblesses et des conditions.",
    tip: "Écrire le critère avant de lire la réponse évite de choisir l'option dont l'IA parle avec le plus d'enthousiasme, qui est souvent la mieux rédigée, pas la meilleure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Tenir et relire le registre des décisions',
    intro: "Le registre est la preuve que le dossier porte vos décisions et non celles de l'IA. Un évaluateur sérieux le demandera peut-être ; un associé futur voudra comprendre pourquoi un choix a été fait.",
    steps: [
      {
        title: 'Remplir les colonnes',
        actions: [
          "Pour chaque décision, notez la date, ce que l'IA a structuré (une ligne), la décision prise et la preuve ou le critère.",
          "Distinguez dans chaque ligne la partie « structuration » (déléguée) de la partie « décision » (à vous).",
        ],
      },
      {
        title: 'Relire avant l\'envoi',
        actions: [
          "Vérifiez qu'aucune ligne n'a pour « preuve » : « l'IA l'a dit ».",
          "Pour toute décision sans preuve, notez le test à mener et sa date.",
        ],
      },
    ],
    table: {
      columns: ['Date', "Ce que l'IA a structuré", 'Décision prise par moi', 'Preuve ou critère'],
      rows: [
        ['10/11', 'Challenge des 9 blocs', 'Segment limité à Goma, canal LinkedIn abandonné', 'Feuille « Questions de challenge IA », colonne C'],
        ['13/11', 'Tableau de marché avec sources', 'Chiffre de 340 M USD écarté ; 187 entreprises retenues', 'Fiche de vérification, Suivi des hypothèses'],
        ['16/11', 'Trame du compte de résultat', 'Prix 150 USD par jour, 2 missions par mois, rémunération 600 USD', 'Deux devis, relevés, journal des hypothèses'],
        ['17/11', 'Diagnostic du pitch', 'Trois affirmations remplacées, voix conservée', 'Section 6 du gabarit, durée 2 min 57'],
      ],
    },
    result: "Un registre de quatre lignes datées qui montre, pour chaque étape, la part structurée par l'IA et la part décidée par vous.",
    pitfall: "Reconstruire le registre après coup, la veille de l'envoi : vous écrivez ce que vous voudriez avoir décidé. Remplissez-le au fil de l'eau, étape par étape.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Du projet au canevas testé',
    scenario: "Rappel : message d'Espérance Safari le lundi 9 novembre 2026, rendez-vous à Kivu Entreprendre le jeudi 19 novembre à 10 h, aucun document formalisé. Voici le raisonnement complet d'Amani, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Description et décisions réservées', body: "Description de 8 lignes anonymisée (clients A, B, C), faits chiffrés distingués des suppositions, trois décisions réservées : segment, positionnement, prix.", result: 'Fichier 01_Description_projet du 09/11.' },
      { title: 'Premier jet avec ChatGPT', body: "Prompt CLARTE avec interdiction de décider. Premier jet de 9 blocs ; trois défauts relevés : segment générique, canal LinkedIn peu réaliste, tarif de 200 USD non sourcé.", result: '9 blocs présents, 3 défauts à corriger.' },
      { title: 'Report et challenge avec Claude', body: "Neuf zones de la feuille « Canevas BMC » remplies avec le contenu corrigé ; challenge indépendant de 3 points maximum par bloc ; points classés « à trancher » ou « à vérifier ».", result: 'Canevas complété, challenge traité.' },
      { title: 'Décisions et entretiens', body: "Neuf décisions écrites en colonne C de « Questions de challenge IA » ; cinq entretiens les 11 et 12 novembre : 4 gérants sur 5 placent ruptures ou pertes en tête, 3 sur 5 paieraient 750 USD en deux fois.", result: 'Canevas ajusté : paiement en deux fois proposé.' },
    ],
    table: {
      columns: ['Bloc du canevas', 'Contenu final'],
      rows: [
        ['7. Segments', 'PME de distribution et d\'agro-transformation de Goma, 10 à 50 employés, stock physique'],
        ['4. Proposition de valeur', 'Moins de ruptures et de pertes de stock en 5 jours, à prix fixe de 750 USD'],
        ['6. Canaux', 'Recommandation, visite directe, réseau de l\'incubateur, messagerie professionnelle'],
        ['5. Relations clients', 'Mission ponctuelle puis suivi mensuel optionnel'],
        ['9. Flux de revenus', 'Mission 750 USD, formation 300 USD, suivi 100 USD par mois ; paiement en deux fois proposé'],
        ['8. Structure de coûts', 'Fixes 700 USD par mois, variables 75 USD par mission, temps non facturé'],
        ['3, 2, 1', 'Porteuse et tableur ; audit, outil, formation, prospection ; incubateur et deux consultants comparables'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — Du marché au plan financier',
    scenario: "Le canevas est testé. Amani construit maintenant la preuve chiffrée : un marché dont les chiffres sont lus à leur source, puis un plan financier dont chaque hypothèse est écrite.",
    steps: [
      { title: 'Étude de marché sourcée', body: "Prompt STAR dans Perplexity, 4 lignes de tableau, 4 sources ouvertes. Chiffre de 340 M USD : lien en erreur 404, organisme introuvable → écarté (Invalidée). 412 PME annoncées : la source réelle donne 187 entreprises dans les deux secteurs → on retient 187 (Validée).", result: 'Fiche de vérification et Suivi des hypothèses à jour.' },
      { title: 'TAM / SAM / SOM', body: "TAM non documenté ; SAM 187 × 40 % = 75 [à tester] ; SOM 22 ÷ 2,5 = 9 clients, soit 12 % du SAM, présenté comme ambitieux.", result: '75 entreprises accessibles, 9 clients visés.' },
      { title: 'Plan financier', body: "Prix 150 USD par jour (devis 140 et 160), mission de 5 jours à 750 USD ; revenus 16 500 + 1 200 + 2 100 = 19 800 USD ; coûts variables 1 835 USD ; coûts fixes 700 × 12 = 8 400 USD ; résultat 9 565 USD.", result: 'Trois totaux recalculés par le comptable.' },
      { title: 'Seuil, sensibilité, trésorerie', body: "Marge de 675 USD par mission, seuil de 1,04 mission par mois soit 13 par an (rythme actuel : 3). Scénario à 1 mission par mois sans formation ni abonnement : − 300 USD. Point bas de trésorerie : − 920 USD au mois 3.", result: 'Demande de 1 500 USD justifiée.' },
    ],
    table: {
      columns: ['Indicateur', 'Valeur'],
      rows: [
        ['Revenus de l\'année 1', '19 800 USD'],
        ['Coûts variables', '1 835 USD'],
        ['Coûts fixes (dont rémunération minimale de 600 USD par mois)', '8 400 USD'],
        ['Résultat de l\'année 1', '9 565 USD'],
        ['Seuil de rentabilité', '13 missions par an (1,04 par mois)'],
        ['Point bas de trésorerie', '− 920 USD (mois 3)'],
      ],
    },
    result: "Un plan dont chaque chiffre renvoie à une source ou à une décision, et dont les fragilités (rythme de 3 missions réalisées contre 13 requises, mois chargés à 92,5 % de capacité) sont dites avant qu'un évaluateur ne les découvre.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Le pitch et le dossier remis',
    scenario: "Dernier jour de travail : mardi 17 novembre pour le pitch, mercredi 18 pour la relecture et l'envoi. Voici le contenu final de la Partie B et le dossier tel qu'il est parti.",
    steps: [
      { title: 'Problème', body: "Dans les PME de distribution de Goma, le stock se tient sur cahier : 4 gérants sur 5 interrogés en novembre 2026 placent ruptures ou pertes en tête de leurs soucis." },
      { title: 'Solution et modèle économique', body: "Une mission de 5 jours à prix fixe (750 USD) : audit, tableur de suivi, équipe formée. Formation 300 USD, suivi mensuel 100 USD ; paiement en deux fois si besoin." },
      { title: 'Marché', body: "187 entreprises de distribution et d'agro-transformation recensées à Goma (Répertoire 2025), objectif 9 clientes la première année." },
      { title: 'Traction et équipe', body: "3 missions en 12 mois ; ruptures de références passées de 18 % à 7 % en 3 mois chez un client (attestation). Six ans de logistique à Goma, calculs relus par un comptable." },
      { title: 'Demande précise', body: "Cinq mises en relation avec des PME avant fin janvier et un appui de démarrage de 1 500 USD (besoin de trésorerie maximal : 920 USD)." },
      { title: 'Contrôle du dossier', body: "Pitch de 385 mots (2 min 57) ; PDF de 2 pages ; pièces jointes : canevas, fiche de vérification, trame de 12 mois ; registre des décisions tenu à jour.", result: 'Dossier envoyé le 18/11 à 16 h.' },
    ],
    result: "Issue au rendez-vous du 19/11 (exemple) : l'incubateur accepte les cinq mises en relation, demande un test de prix à 750 USD sur trois entreprises avant de décider de l'appui de démarrage, et cite la fiche de vérification comme ce qui l'a convaincu du sérieux du dossier.",
    tip: "Gardez ce corrigé comme modèle : sur votre propre projet, seuls la description, les chiffres et les sources changeront, la structure du raisonnement reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Construire le dossier GomaLogis Conseil par vous-même',
    instructions: "Reprenez la situation de GomaLogis Conseil (service de conseil logistique pour PME de la région de Goma, trois missions déjà menées, rendez-vous dans dix jours avec un partenaire d'accompagnement). Enrichissez-la de vos propres détails, ou menez l'exercice sur votre projet réel, et reconstruisez le dossier sans regarder les diapositives de procédure. Comparez ensuite avec le corrigé.",
    steps: [
      {
        title: 'Business Model Canvas',
        actions: [
          "Rédigez votre prompt CLARTE (rôle, description, 9 blocs puis challenge, interdiction de décider, ton, exemple) et remplissez les 9 blocs de la feuille « Canevas BMC ».",
          "Obtenez le challenge de l'IA sur chaque bloc, puis remplissez la colonne C de « Questions de challenge IA » avec vos décisions.",
        ],
      },
      {
        title: 'Étude de marché avec vérification démontrée',
        actions: [
          "Rédigez votre prompt STAR et lancez-le dans Perplexity ; obtenez un tableau (donnée, source, année).",
          "Choisissez un chiffre, ouvrez réellement sa source, et rédigez à la main la fiche en trois temps : (a) chiffre et source annoncés, (b) ce que vous avez trouvé, (c) votre décision.",
          "Complétez la feuille « Suivi des hypothèses » avec au moins quatre lignes et leurs statuts.",
        ],
      },
      {
        title: 'Plan financier simplifié',
        actions: [
          "Obtenez une trame de 12 mois (revenus de mission, coûts de déplacement, coûts d'outils, prospection non facturée), puis complétez la Partie A du gabarit en confrontant chaque hypothèse à la réalité du secteur.",
          "Calculez le seuil de rentabilité et recalculez les totaux de votre trame dans un tableur.",
        ],
      },
      {
        title: 'Pitch resserré',
        actions: [
          "Rédigez votre pitch de 3 minutes, appliquez le Prompt 4 (diagnostic avant réécriture), puis complétez la Partie B du gabarit (sections 5 à 7).",
        ],
      },
    ],
    deliverable: "Le canevas complété, la fiche de vérification de source rédigée à la main, la Partie A et la Partie B du gabarit — un dossier prêt à présenter en dix jours, avec 2 pages maximum pour la partie plan financier et pitch.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Stress-tester le plan GomaLogis",
    instructions: "Reprenez la trame de 12 mois du fil rouge (prix de mission 750 USD, coût variable 75 USD par mission, coûts fixes 700 USD par mois, 22 missions, 4 formations, abonnements dès le mois 6). Votre mission : trouver à quel point le plan résiste, et décider quoi présenter au partenaire.",
    steps: [
      {
        title: 'Recalculer et faire varier',
        actions: [
          "Reconstruisez la trame dans votre tableur et retrouvez revenus 19 800, coûts variables 1 835, coûts fixes 8 400, résultat 9 565.",
          "Modifiez le volume : 1 mission par mois toute l'année, formations et abonnements maintenus ; puis sans formation ni abonnement.",
          "Modifiez le prix : mission à 700 USD (140 USD par jour) sur le plan de base.",
        ],
      },
      {
        title: 'Conclure et décider',
        actions: [
          "Rédigez en trois lignes le scénario que vous présenteriez comme scénario central et pourquoi.",
          "Écrivez la phrase que vous diriez à un sceptique : « Si je vends deux fois moins que prévu, voici ce qui se passe. »",
        ],
      },
    ],
    tip: "Points de contrôle : 1 mission par mois avec formations et abonnements = 2 815 USD ; 1 mission par mois seule = − 300 USD ; prix à 700 USD = 8 465 USD, seuil de 1,12 mission par mois. Si vos chiffres diffèrent, revoyez d'abord vos formules.",
    deliverable: "La trame recalculée avec les quatre scénarios, le choix motivé d'un scénario central et la phrase destinée à l'évaluateur sceptique, le tout en une page.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre projet',
    instructions: "Appliquez le pipeline complet à un projet réel : un projet d'activité, un service à lancer dans votre organisation, une candidature à un appui. Respectez les règles d'usage des données et distinguez à chaque étape ce que vous déléguez de ce que vous décidez.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Rédigez une description de 5 à 10 lignes, anonymisée, avec vos faits chiffrés et vos suppositions marquées [?].",
          "Créez votre registre des décisions et écrivez vos trois décisions réservées.",
        ],
      },
      {
        title: 'Exécuter',
        actions: [
          "Canevas BMC, challenge avec un second outil, décisions en colonne C, au moins 3 entretiens avec de vrais clients potentiels.",
          "Étude de marché sourcée, fiche de vérification en trois temps, Suivi des hypothèses à jour.",
          "Partie A du gabarit avec trame de 12 mois recalculée, seuil de rentabilité et scénario prudent.",
          "Pitch : premier jet de votre main, diagnostic avant réécriture, Partie B complétée, validation par une deuxième personne.",
        ],
      },
    ],
    deliverable: "Le dossier complet en PDF (2 pages maximum pour le plan et le pitch), le canevas, la fiche de vérification et le registre des décisions — prêts à être présentés ou mis à jour au prochain jalon.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Les neuf zones de la feuille « Canevas BMC » contiennent du texte spécifique à votre projet, et la colonne C de « Questions de challenge IA » contient neuf décisions qui sont les vôtres.",
      "Le canevas a été testé auprès de clients potentiels réels : la fiche d'entretiens est anonymisée et chaque écart a conduit à un ajustement noté.",
      "La fiche de vérification est rédigée à la main et contient les trois temps : le chiffre et la source annoncés, ce que vous avez trouvé en ouvrant la source, votre décision.",
      "Aucun chiffre de marché n'entre dans le dossier sans source ouverte et lue ; la feuille « Suivi des hypothèses » porte un statut (Validée, À tester ou Invalidée) pour chaque ligne.",
      "Dans la Partie A, chaque revenu et chaque coût porte son hypothèse entre crochets, sa preuve ou son absence de preuve, et son statut.",
      "Sur le fil rouge, vos totaux sont revenus 19 800 USD, coûts variables 1 835 USD, coûts fixes 8 400 USD, résultat 9 565 USD, seuil de 13 missions par an.",
      "Votre section 3 distingue seuil de rentabilité et prévision de ventes, et dit l'écart entre le seuil et votre rythme réel.",
      "Au moins un scénario prudent et un besoin de trésorerie (920 USD au point bas sur le fil rouge) sont chiffrés.",
      "Le pitch tient en 3 minutes (environ 390 mots), contient vos phrases personnelles, et chacune de ses affirmations chiffrées renvoie à une preuve.",
      "Le journal des hypothèses ne contient jamais « Confirmée par : l'IA » ; le registre des décisions est daté et a été tenu au fil de l'eau.",
      "La partie plan financier et pitch tient en 2 pages maximum, la section Validation est remplie et un second lecteur a recalculé les totaux.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Accepter un chiffre de taille de marché généré par l'IA sans ouvrir sa source : un chiffre halluciné a la même apparence de sérieux qu'un chiffre réel. Ouvrez, lisez, consignez le verdict.",
      "Laisser l'IA décider d'un positionnement : « que devrais-je choisir ? » produit une réponse qui n'engage personne. Demandez les faiblesses de chaque option, puis tranchez.",
      "Construire un plan financier avec les hypothèses de l'IA (10 clients par mois, tarif national) sans les confronter à vos relevés et à deux devis locaux.",
      "Oublier la rémunération de la porteuse, la prospection et le temps de déplacement : le plan paraît rentable parce qu'il ne compte pas votre travail non facturé.",
      "Présenter un canevas jamais testé auprès de vrais clients : un canevas cohérent sur le papier peut reposer sur un segment qui ne correspond à aucune conversation réelle.",
      "Conclure à partir de cinq entretiens que « le marché valide l'idée » : cet échantillon invalide ou oriente, il ne valide pas. Écrivez « 4 gérants sur 5 interrogés ».",
      "Mettre « Confirmée par : l'IA » dans le journal des hypothèses : si l'IA est la seule source, l'hypothèse reste « à tester ».",
      "Lire la version resserrée du pitch avant le diagnostic : vous adoptez des changements sans savoir lesquels et vous ne savez plus défendre le texte.",
      "Laisser le pitch devenir lisse : un pitch entièrement réécrit par l'IA perd votre voix. Coupez et challengez, ne remplacez pas.",
      "Annoncer un volume sans calculer la capacité : 18,5 jours sur 20 dans un mois chargé ne laisse aucune marge. Vérifiez jours facturables plus jours non facturés.",
      "Envoyer au partenaire la conversation avec l'IA au lieu de vos pièces : on évalue votre dossier, pas l'outil.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez construit un Business Model Canvas en 9 blocs avec l'IA, l'avez fait challenger bloc par bloc par un second outil, et avez consigné neuf décisions qui sont les vôtres.",
      "Vous avez testé le canevas auprès de 5 clients potentiels : 4 gérants sur 5 placent les ruptures ou pertes en tête, 3 sur 5 paieraient 750 USD en deux fois.",
      "Vous avez produit une étude de marché dont chaque chiffre a été ouvert à sa source : 340 M USD écartés, 187 entreprises retenues, TAM / SAM / SOM raisonné à partir d'un dénombrement.",
      "Vous avez rédigé une fiche de vérification en trois temps et tenu la feuille « Suivi des hypothèses » avec ses statuts.",
      "Vous avez structuré la Partie A du gabarit : revenus 19 800 USD, coûts 10 235 USD, résultat 9 565 USD, seuil de 13 missions par an, point bas de trésorerie de 920 USD.",
      "Vous avez resserré un pitch de 520 à 385 mots (2 min 57) sans perdre votre voix, avec chaque affirmation étayée ou supprimée.",
      "Vous avez tenu un registre des décisions qui distingue ce que l'IA a structuré de ce que vous avez tranché, et assemblé un dossier PDF de 2 pages relu par une deuxième personne.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais nommer les 9 blocs du Business Model Canvas et remplir chacun avec l'aide de l'IA.",
      "J'ai obtenu de l'IA un challenge explicite de mon canevas, bloc par bloc, plutôt qu'une simple validation, et j'ai écrit mes propres décisions.",
      "Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.",
      "J'ai utilisé au moins deux prompts CLARTE / STAR de ce module, adaptés à mon propre projet.",
      "J'ai vérifié à la main au moins un chiffre de marché cité par l'IA contre sa source réelle, et documenté cette vérification en trois temps.",
      "Je sais structurer une trame de plan financier simplifié avec des hypothèses explicites, jamais présentées comme des chiffres acquis, et calculer un seuil de rentabilité.",
      "J'ai fait challenger un pitch existant par l'IA sans lui laisser réécrire l'intégralité du texte à ma place.",
      "Je peux expliquer, pour chaque étape de ce module, ce qui relevait de la structuration (délégable à l'IA) et ce qui relevait de la décision (qui m'appartenait).",
      "J'ai testé mon canevas auprès de vrais clients potentiels avant de le présenter à un tiers.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « IA pour la Création de Sites Web & Solutions Numériques ». Vous y apprendrez à décrire, faire générer, tester et vérifier un site ou une solution numérique avec l'IA, comme vous venez de le faire pour un dossier d'activité : vous décidez, l'IA construit, et chaque résultat est contrôlé avant d'être publié.",
  },
]
