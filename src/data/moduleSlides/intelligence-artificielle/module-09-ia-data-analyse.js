// Module 09 — IA pour la Data & l'Analyse — De la donnée brute à la décision
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (cadrage, diagnostic, nettoyage Excel, Power Query, KPI,
// visualisation, rapport) est détaillée étape par étape et appliquée au même
// fil rouge, l'export de dépenses logistiques janvier-juin 2026 de la grille
// de diagnostic. Organisation et personnes fictives ; chiffres recalculés
// à partir du fichier fourni.
export default [
  {
    type: 'cover',
    title: "IA pour la Data & l'Analyse — De la donnée brute à la décision",
    hook: "À la fin de ce module, vous saurez prendre un export brut truffé d'erreurs, le diagnostiquer et le nettoyer avec l'IA, Excel et Power Query, calculer les KPI qui répondent à une vraie question de gestion, puis remettre au comité un rapport de deux pages qui dit, chiffres vérifiés à l'appui : « la hausse vient de Goma et de Transco Sarl — voici les trois actions à lancer ».",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Cadrer une demande d'analyse floue en une question de gestion d'une phrase, validée par le demandeur, en produisant une fiche d'inventaire du fichier et une copie de travail tracée.",
      "Diagnostiquer un export brut avec un prompt CLARTE puis le contre-vérifier par formules Excel, en produisant un tableau de diagnostic ligne par ligne et un score de qualité chiffré.",
      "Nettoyer le fichier dans Excel (doublon, montant manquant, dates en texte, libellés fournisseurs) en produisant un jeu de données propre dont le total est rapproché au dollar près du total brut.",
      "Construire une requête Power Query qui rejoue ce nettoyage sur chaque nouvel export, en produisant une requête nommée, documentée et actualisable en un clic.",
      "Traduire la question de gestion en KPI et les calculer avec l'IA puis par tableau croisé dynamique de contrôle, en produisant un tableau site × trimestre, les variations, les contributions à la hausse et une décomposition volume / prix.",
      "Choisir et construire deux graphiques orientés message, en produisant des visuels dont le titre énonce la conclusion.",
      "Rédiger avec l'IA, contrôler et faire valider un rapport de gestion de deux pages dans le gabarit du module, avec une synthèse de 5 lignes et 3 recommandations priorisées (action, responsable, échéance).",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur l'analyse de données : vous allez la faire, du fichier brut au rapport signé, sur un seul cas suivi du début à la fin. Chaque procédure est découpée en étapes numérotées, avec le prompt exact à copier, les menus Excel à ouvrir, les formules à saisir et le résultat attendu sur le cas.",
      "À la fin du module, vous aurez en main sept livrables réutilisables tels quels sur vos propres exports :",
    ],
    bullets: [
      "Une copie de travail tracée (dossiers Source / Travail / Livrables + feuille « Journal ») et une fiche d'inventaire du fichier.",
      "Un tableau de diagnostic des anomalies (type, ligne, valeur observée, correction, gravité) et un score de qualité.",
      "Un jeu de données propre, rapproché du brut, avec colonnes Mois et Trimestre et règles de validation de saisie.",
      "Une requête Power Query « Depenses_Propres » réutilisable pour les prochains exports du même modèle.",
      "Un tableau de KPI : coûts par site et trimestre, variations, contributions, coût moyen par commande, effet volume / effet prix, tendance mensuelle.",
      "Deux graphiques orientés message, prêts à coller dans un rapport.",
      "Le gabarit « Rapport d'analyse de données » complété, relu par une deuxième personne et exporté en PDF.",
    ],
    tip: "Ouvrez dès maintenant le fichier 04-templates/grille-diagnostic-nettoyage-donnees.xlsx (feuille « Données brutes ») : toutes les manipulations du module se font sur ces 26 lignes, vous pouvez donc reproduire chaque étape à l'écran en même temps que vous la lisez.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs et le comité budgétaire du vendredi 10 juillet 2026',
    body: [
      "Horizon Grands Lacs est une organisation fictive qui opère trois sites : Goma, Bukavu et Kinshasa. Amani Kahindo, chargée administrative et logistique à Goma, reçoit le lundi 6 juillet 2026 un message de Patrick Mumbere, responsable achats : « Peux-tu regarder ce qu'on peut en tirer avant le comité budgétaire de vendredi ? » En pièce jointe, un export brut du système comptable : les dépenses logistiques de janvier à juin 2026.",
      "Le fichier compte 26 lignes de données (lignes Excel 5 à 30, en-têtes en ligne 4) et 5 colonnes : Date, Fournisseur, Catégorie, Montant (USD), Site. Quatre fournisseurs (Transco Sarl, Kivu Freight Co, Alpha Logistics, Beta Supply), trois catégories (Transport routier, Entreposage, Dédouanement). Total brut affiché : 82 800 USD. Le comité, présidé par la directrice pays Furaha Bisimwa, disposera de trois minutes de lecture.",
    ],
    table: {
      columns: ['Ligne', 'Date', 'Fournisseur', 'Catégorie', 'Montant (USD)', 'Site'],
      rows: [
        ['13', '22/02/2026', 'Beta Supply', 'Transport routier', '2 750', 'Bukavu'],
        ['14', '12/03/2026', 'Transco Sarl', 'Entreposage', '3 300', 'Goma'],
        ['15', '12/03/2026', 'Transco Sarl', 'Entreposage', '3 300', 'Goma'],
        ['16', '12-Mar-26 (texte)', 'Kivu Freight Co', 'Transport routier', '(vide)', 'Goma'],
        ['17', '19/03/2026', 'Alpha Logistics', 'Transport routier', '3 400', 'Kinshasa'],
        ['18', '26/03/2026', 'Beta Supply', 'Dédouanement', '1 100', 'Bukavu'],
        ['19', '2026/04/02 (texte)', 'Transco Sarl', 'Transport routier', '5 100', 'Goma'],
        ['20', '09/04/2026', 'transco sarl ', 'Transport routier', '4 950', 'Goma'],
        ['21', '16/04/2026', 'Kivu Freight Co', 'Entreposage', '2 050', 'Bukavu'],
      ],
    },
    highlight: "Extrait des lignes 13 à 21 : les quatre défauts du module sont déjà visibles à l'œil nu sur neuf lignes. Sur 500 lignes, ils seraient invisibles — c'est là que l'IA et les formules de contrôle prennent le relais.",
  },
  {
    type: 'concept',
    title: 'La carte du module : 7 procédures, dans l\'ordre où vous les exécuterez',
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. Ne sautez aucune étape : une erreur non détectée au diagnostic se retrouve, multipliée, dans le rapport présenté au comité.",
    bullets: [
      "Procédure 1 — Cadrer l'analyse (4 étapes) : sécuriser le fichier, l'inventorier, écrire la question de gestion, choisir l'outil.",
      "Procédure 2 — Diagnostiquer le fichier brut (6 étapes) : prompt CLARTE, contre-vérification par formules, échantillon manuel, score de qualité.",
      "Procédure 3 — Nettoyer le jeu de données dans Excel (7 étapes) : plan STAR, doublon, montant manquant, dates, libellés, colonnes d'analyse, rapprochement.",
      "Procédure 4 — Rendre le nettoyage reproductible avec Power Query (5 étapes).",
      "Procédure 5 — Calculer les KPI orientés décision (8 étapes) : de la question aux chiffres, avec contrôle croisé IA / Excel.",
      "Procédure 6 — Construire les visualisations orientées message (5 étapes).",
      "Procédure 7 — Rédiger, contrôler et faire valider le rapport de gestion (6 étapes).",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les quatre défauts d\'un export brut — et leur trace dans le fil rouge',
    columns: ['Défaut', 'Dans le fichier Horizon Grands Lacs', 'Conséquence si non traité', 'Comment le détecter'],
    rows: [
      ['Doublon', 'Lignes 14 et 15 identiques : 12/03/2026, Transco Sarl, Entreposage, 3 300 USD, Goma', 'Total gonflé de 3 300 USD ; Transco et Goma surestimés au T1', 'NB.SI.ENS sur les colonnes clés, puis vérification de la facture'],
      ['Valeur manquante', 'Ligne 16 : montant vide (Kivu Freight Co, Goma, mars)', 'Coût de Kivu Freight au T1 sous-estimé ; une moyenne fausse si on saisit 0', 'Formule SI(cellule="") ou filtre « (Vides) »'],
      ['Format incohérent', 'Ligne 16 « 12-Mar-26 » et ligne 19 « 2026/04/02 » stockées en texte', 'Ligne ignorée ou mal classée par trimestre dans un tableau croisé', 'ESTNUM() : une vraie date Excel est un nombre'],
      ['Libellé incohérent', 'Ligne 20 « transco sarl  » (minuscules + espace final)', 'Transco compté comme deux fournisseurs : sa hausse est sous-estimée', 'Filtre automatique, EXACT() ou NOMPROPRE(SUPPRESPACE())'],
      ['Colonne inutile', 'Aucune : les 5 colonnes servent à la question posée', 'Un diagnostic qui invente un problème fait perdre du temps', 'Revue des en-têtes avec la question de gestion en tête'],
    ],
  },
  {
    type: 'stat-callout',
    stat: '3 300 USD',
    caption: "C'est l'écart entre le total brut (82 800 USD) et le total réel (79 500 USD) créé par un seul doublon sur 26 lignes.",
    context: "Présenté tel quel au comité, ce chiffre aurait surestimé les dépenses du T1 de Goma et de Transco Sarl, donc faussé la mesure de la hausse que le comité veut comprendre. Le diagnostic n'est pas une formalité : il conditionne chaque chiffre du rapport.",
  },
  {
    type: 'concept',
    title: '« Fais-moi un résumé » contre « réponds à ma question de gestion »',
    body: [
      "Demander à une IA « résume-moi ce fichier » produit un résumé plat : nombre de lignes, quelques totaux, la liste des colonnes. Aucune question n'a été posée, donc aucune décision ne peut en sortir.",
      "Une question de gestion utilisable contient quatre éléments : un périmètre (sites, fournisseurs), une comparaison (T1 contre T2), un indicateur (coût total, coût moyen par commande) et la décision qu'elle doit éclairer (renégocier, vérifier, réorganiser).",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "À éviter : « Analyse ce fichier de dépenses et dis-moi ce que tu en penses. »",
        "À éviter : « Fais-moi un résumé des dépenses logistiques du semestre. »",
        "À utiliser : « Quel site ou quel fournisseur explique la plus grande partie de la hausse des dépenses logistiques du T2 2026 par rapport au T1, et cette hausse vient-elle du volume de commandes ou du coût par commande ? »",
      ],
    },
    tip: "Avant de déposer un fichier dans une IA, écrivez la question en une phrase. Si vous n'y arrivez pas, ce n'est pas un problème d'outil : la question n'est pas encore claire, et aucune IA ne la clarifiera à votre place.",
  },
  {
    type: 'comparison-table',
    title: 'La norme CLARTE — ce que vous écrivez pour chaque lettre',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt de diagnostic du fil rouge'],
    rows: [
      ['C — Contexte', 'Qui vous êtes, le cadre, les données exactes (colonnes, nombre de lignes, période)', '« Export de 26 lignes (Ligne, Date, Fournisseur, Catégorie, Montant, Site), janvier à juin 2026 »'],
      ['L — Livrable attendu', 'Le format exact du résultat : tableau, colonnes, longueur', '« Un tableau à cinq colonnes : type, ligne(s), valeur observée, correction proposée, gravité »'],
      ['A — Audience / rôle', "Le rôle que l'IA endosse et pour qui elle produit", '« Tu es analyste de données pour le service achats »'],
      ['R — Restrictions', "Ce qu'il ne faut PAS faire, les limites", '« Ne modifie pas le fichier. Utilise les numéros de la colonne Ligne. »'],
      ['T — Ton & style', 'Le registre attendu', '« Factuel, exhaustif plutôt que synthétique »'],
      ['E — Exemples', 'Un exemple de ligne ou de format de sortie', '« Exemple : Doublon | 14 et 15 | 12/03/2026, Transco… | supprimer 15 | bloquant »'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La méthode STAR — pour les demandes qui exigent un raisonnement en plusieurs étapes',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt de nettoyage du fil rouge'],
    rows: [
      ['S — Situation', "L'état factuel de départ, avec les défauts réels", '« Doublon exact lignes 14-15, dates en texte lignes 16 et 19, montant vide ligne 16, « transco sarl  » ligne 20 »'],
      ['T — Tâche', "L'objectif précis, y compris ce qui doit rester réutilisable", '« Un jeu propre et une méthode réutilisable pour les prochains exports »'],
      ['A — Action', "Ce que l'IA doit exécuter, découpé et numéroté", '« (1) formule doublons, (2) conversion des dates, (3) uniformisation fournisseurs, (4) règle de validation »'],
      ['R — Résultat', 'Le livrable final et son critère de réussite', '« Des formules applicables telles quelles dans Excel en français, chacune expliquée en une phrase »'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Quel outil pour quelle étape',
    columns: ['Outil', 'À utiliser pour', 'Limite à connaître'],
    rows: [
      ['Excel avec Copilot', 'Rester dans le tableur : repérer doublons et cellules vides, proposer formules, colonnes calculées et étapes Power Query', 'Licence Microsoft 365 avec Copilot ; données mises sous forme de tableau ; vérifiez chaque formule proposée'],
      ['ChatGPT (Data Analysis)', 'Calcul exact sur plusieurs centaines de lignes : il exécute réellement du code Python sur le fichier déposé', 'Ouvrez le code exécuté pour vérifier quelles lignes ont été lues et comment'],
      ['Claude (analyse de fichiers)', 'Lecture qualitative : incohérence de logique métier, relecture et rédaction de la synthèse', "Pour un calcul chiffré volumineux, préférez ChatGPT Data Analysis ou une formule Excel auditable"],
      ['Power Query', 'Enregistrer le nettoyage une fois et le rejouer sur chaque nouvel export', 'Les étapes dépendent des noms de colonnes : un export renommé casse la requête'],
      ['Power BI', 'Suivi dans la durée par plusieurs personnes, tableau de bord partagé', "Étape suivante, une fois le pipeline de nettoyage stabilisé dans Excel"],
    ],
  },
  {
    type: 'concept',
    title: 'Règles d\'usage avant de déposer un fichier dans une IA',
    body: "Un export comptable contient des données commerciales (fournisseurs, montants) et parfois personnelles (noms d'agents, bénéficiaires). Déposer ce fichier dans une IA, c'est le transmettre à un service externe : appliquez ces règles avant chaque dépôt.",
    bullets: [
      "Utilisez uniquement un compte IA professionnel validé par votre organisation (Copilot Microsoft 365, offre entreprise de ChatGPT ou de Claude), jamais un compte personnel gratuit.",
      "Retirez les colonnes inutiles à la question : moins de données transmises, moins de risque et une IA plus précise.",
      "Remplacez les noms de personnes par des codes (Agent 01, Agent 02) et conservez la table de correspondance hors de l'IA.",
      "Si la politique interne l'exige, remplacez aussi les noms de fournisseurs (F1 à F4) et ré-appliquez les vrais noms dans Excel après l'analyse.",
      "Notez dans la feuille « Journal » quel fichier a été déposé dans quel outil, et à quelle date.",
    ],
    example: {
      title: 'Décision pour le fil rouge',
      lines: [
        "Horizon Grands Lacs dispose de Copilot Microsoft 365 et d'un espace ChatGPT entreprise validés par la direction.",
        "Le fichier ne contient aucune donnée personnelle : seuls les noms de fournisseurs, déjà connus de tout le service achats.",
        "Décision d'Amani : dépôt autorisé sans anonymisation, consigné dans le Journal le 06/07/2026.",
      ],
    },
    pitfall: "Coller un export complet de paie ou de bénéficiaires dans une IA grand public « juste pour vérifier une formule » : c'est une fuite de données, même si le résultat est juste.",
  },
  {
    type: 'comparison-table',
    title: 'Choisir le type de graphique selon le message',
    columns: ['Message à faire passer', 'Type de graphique recommandé', 'Exemple dans le fil rouge'],
    rows: [
      ["Évolution d'un montant ou d'un volume dans le temps", 'Courbe (line chart)', 'Dépenses mensuelles janvier → juin : pic en avril-mai'],
      ['Comparaison de catégories entre elles (fournisseurs, sites)', 'Barres (bar chart), triées', 'Écart T2 − T1 par fournisseur : Transco loin devant'],
      ["Répartition d'un total en quelques parts (5-6 catégories maximum)", 'Camembert, avec parcimonie', 'Part des trois catégories dans le total du semestre'],
      ['Comparaison de deux dimensions à la fois (site ET trimestre)', 'Barres groupées ou empilées', 'Coût par site, T1 contre T2 : Goma double'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'KPI (Key Performance Indicator)', definition: "Indicateur chiffré directement relié à une décision de gestion (coût moyen par commande, part d'un fournisseur dans le budget), par opposition à une statistique descriptive sans finalité." },
      { term: 'Score de qualité de données', definition: "Mesure agrégée, souvent en pourcentage, de la fiabilité d'un jeu de données : ici, la part des lignes sans aucune anomalie (22 lignes saines sur 26 = 84,6 %)." },
      { term: 'Doublon exact / doublon apparent', definition: "Exact : lignes identiques sur toutes les colonnes clés. Apparent : lignes identiques qui correspondent pourtant à deux opérations réelles. Seule la pièce justificative tranche." },
      { term: 'Tableau Excel (Ctrl+T)', definition: "Plage mise sous forme de tableau nommé : les formules s'étendent seules, les références deviennent lisibles (T_Propre[Montant]) et Copilot comme Power Query l'exploitent directement." },
      { term: 'Power Query', definition: "Moteur de transformation intégré à Excel et Power BI, qui enregistre une suite d'étapes de nettoyage reproductibles au lieu de corriger à la main à chaque export." },
      { term: 'Tableau croisé dynamique (TCD)', definition: "Outil Excel qui agrège un tableau par lignes et colonnes (site × trimestre) ; il sert ici de calcul de contrôle des chiffres produits par l'IA." },
      { term: 'Contribution à la variation', definition: "Part de la hausse totale expliquée par un élément : écart de l'élément ÷ écart total. Elle peut dépasser 100 % quand d'autres éléments baissent." },
      { term: 'Effet volume / effet prix', definition: "Décomposition d'un écart de coût : effet volume = variation du nombre de commandes × coût moyen initial ; effet prix = variation du coût moyen × nombre de commandes final." },
      { term: 'Norme CLARTE / méthode STAR', definition: "CLARTE : Contexte, Livrable, Audience, Restrictions, Ton, Exemples. STAR : Situation, Tâche, Action, Résultat, pour les demandes à raisonnement en plusieurs étapes." },
    ],
  },

  // ───────────── Procédure 1 — Cadrer l'analyse ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Sécuriser le fichier source et créer une copie de travail',
    intro: "Avant toute manipulation, vous devez pouvoir prouver à tout moment ce que contenait le fichier reçu et ce que vous avez modifié. Entrée nécessaire : le fichier reçu par message, et un dossier de travail sur votre espace partagé.",
    steps: [
      {
        title: 'Ranger le fichier reçu',
        actions: [
          "Créez un dossier « Analyse_Depenses_S1_2026 » avec trois sous-dossiers : « 01_Source », « 02_Travail », « 03_Livrables ».",
          "Enregistrez la pièce jointe dans « 01_Source » sans l'ouvrir pour modification.",
          "Renommez-la avec la date de réception : 2026-07-06_export_depenses_S1_brut.xlsx.",
          "Clic droit sur le fichier > Propriétés > cochez « Lecture seule » : personne ne l'écrasera par erreur.",
        ],
      },
      {
        title: 'Créer la copie de travail et son journal',
        actions: [
          "Copiez le fichier dans « 02_Travail » et renommez-le 2026-07-06_depenses_S1_travail.xlsx : c'est le seul fichier que vous modifierez.",
          "Dans cette copie, ajoutez une feuille « Journal » avec les colonnes : Date, Action, Lignes concernées, Outil, Auteur.",
          "Saisissez la première entrée du journal.",
        ],
      },
    ],
    example: {
      title: 'Feuille « Journal » — première ligne (fil rouge)',
      lines: [
        "Date : 06/07/2026 | Action : réception de l'export brut de P. Mumbere, copie de travail créée | Lignes : 5 à 30 (26 lignes) | Outil : Excel | Auteur : A. Kahindo",
      ],
    },
    result: "Le brut est intact et protégé dans 01_Source, la copie de travail existe dans 02_Travail, et le Journal contient sa première entrée.",
    pitfall: "Corriger directement le fichier reçu : le jour où le comité demande « d'où vient l'écart avec la comptabilité ? », vous ne pouvez plus montrer ce qui a été modifié.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Faire l\'inventaire du fichier en cinq minutes',
    intro: "Vous ne pouvez pas écrire un bon prompt sans connaître le fichier : nombre de lignes, colonnes, période, unité, valeurs possibles. Cet inventaire alimente directement le « C » (Contexte) de votre prompt CLARTE.",
    steps: [
      {
        title: 'Mesurer le fichier',
        actions: [
          "Ouvrez la copie de travail, feuille « Données brutes ».",
          "Cliquez dans A4 puis Ctrl+Fin : la dernière cellule remplie indique la dernière ligne de données (ligne 30, hors note de bas de tableau).",
          "Comptez les lignes de données : 30 − 4 (en-tête) = 26 lignes.",
          "Notez la première et la dernière date (05/01/2026 et 18/06/2026) et l'unité de la colonne Montant (USD).",
        ],
      },
      {
        title: 'Lister les valeurs de chaque colonne texte',
        actions: [
          "Sélectionnez A4:E30 puis Données > Filtrer.",
          "Ouvrez la flèche de filtre de Fournisseur, puis de Site, puis de Catégorie : notez chaque valeur listée.",
          "Ouvrez la flèche de filtre de Montant : vérifiez la présence de « (Vides) » en bas de liste.",
          "Dans une cellule libre, saisissez =SOMME(D5:D30) pour obtenir le total brut.",
        ],
      },
    ],
    example: {
      title: "Fiche d'inventaire — export S1 2026",
      lines: [
        "Lignes de données : 26 (lignes Excel 5 à 30) — Colonnes : Date, Fournisseur, Catégorie, Montant (USD), Site",
        "Période : 05/01/2026 → 18/06/2026 — Unité : dollars américains",
        "Fournisseurs listés par le filtre : Alpha Logistics, Beta Supply, Kivu Freight Co, Transco Sarl, transco sarl  ← 5 valeurs pour 4 fournisseurs réels",
        "Sites : Bukavu, Goma, Kinshasa — Catégories : Dédouanement, Entreposage, Transport routier",
        "Montant : présence de « (Vides) » — Total brut =SOMME(D5:D30) : 82 800 USD",
      ],
    },
    result: "Une fiche d'inventaire de cinq lignes collée dans le Journal. Vous avez déjà repéré deux anomalies (variante de Transco, montant vide) avant même de solliciter l'IA.",
    tip: "La liste déroulante du filtre automatique est le détecteur de variantes de libellés le plus rapide qui existe : un fournisseur qui apparaît deux fois sous deux orthographes y saute aux yeux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Écrire la question de gestion en une phrase et la faire valider',
    intro: "« Regarde ce qu'on peut en tirer » n'est pas une question. C'est à vous de la transformer en question de gestion, puis de vérifier auprès du demandeur qu'elle correspond à la décision attendue.",
    steps: [
      {
        title: 'Identifier la décision attendue',
        actions: [
          "Relisez le message du demandeur et l'ordre du jour du comité, s'il existe.",
          "Posez au demandeur une seule question : « Quelle décision le comité doit-il pouvoir prendre vendredi grâce à cette analyse ? »",
          "Notez sa réponse mot pour mot.",
        ],
      },
      {
        title: 'Rédiger et tester la question',
        actions: [
          "Écrivez une phrase qui contient : un périmètre, une comparaison, un indicateur, une décision.",
          "Testez-la : peut-on y répondre par un chiffre ET une action ? Si non, reformulez.",
          "Envoyez la question au demandeur par écrit et demandez une validation explicite.",
          "Collez la question validée en tête de la feuille « Journal ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — échange du 06/07/2026',
      lines: [
        "Réponse de Patrick Mumbere : « Le comité veut comprendre pourquoi le budget logistique dérape au deuxième trimestre et savoir sur quoi agir. »",
        "Question rédigée par Amani : « Quel site ou quel fournisseur explique la plus grande partie de la hausse des dépenses logistiques du T2 2026 par rapport au T1, cette hausse vient-elle du volume ou du coût par commande, et quelle action faut-il engager ? »",
        "Test : réponse attendue = un site / un fournisseur + un montant + une action → OK.",
        "Validation de Patrick par message le 06/07 à 11 h 40 : « C'est exactement ça. »",
      ],
    },
    result: "Une question de gestion d'une phrase, validée par écrit, qui servira de filtre à toutes les étapes suivantes : tout calcul qui n'y répond pas sort du rapport.",
    pitfall: "Démarrer l'analyse sans validation : vous risquez de livrer vendredi une réponse brillante à une question que personne n'a posée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Choisir l\'outil adapté à chaque étape',
    intro: "Chaque outil a son point fort. Les combiner, c'est aussi se donner un contrôle croisé : un chiffre produit par l'IA est recalculé dans Excel avant d'entrer dans le rapport.",
    steps: [
      {
        title: 'Affecter un outil par étape',
        actions: [
          "Diagnostic : ChatGPT Data Analysis (lecture exhaustive du fichier) + formules Excel de contrôle.",
          "Nettoyage : Excel (avec Copilot si disponible) pour les corrections, Power Query pour la version réutilisable.",
          "KPI : ChatGPT Data Analysis pour le premier calcul, tableau croisé dynamique Excel pour le contrôle.",
          "Rapport : ChatGPT ou Claude pour le premier jet, Claude pour la relecture critique, Word pour le gabarit.",
        ],
      },
      {
        title: 'Vérifier les conditions techniques',
        actions: [
          "Copilot dans Excel : vérifiez que l'onglet Accueil affiche le bouton Copilot et que le fichier est enregistré sur OneDrive ou SharePoint avec l'enregistrement automatique activé.",
          "ChatGPT : vérifiez que votre espace permet de joindre un fichier (bouton « + » ou trombone).",
          "Appliquez les règles d'usage vues plus haut (compte professionnel, colonnes utiles seulement) et consignez la décision dans le Journal.",
        ],
      },
    ],
    table: {
      columns: ['Étape', 'Outil principal', 'Contrôle'],
      rows: [
        ['Diagnostic', 'ChatGPT Data Analysis', 'Formules SI / NB.SI.ENS / ESTNUM'],
        ['Nettoyage', 'Excel (+ Copilot)', 'Rapprochement des totaux'],
        ['Réutilisation', 'Power Query', 'Nombre de lignes et total après actualisation'],
        ['KPI', 'ChatGPT Data Analysis', 'Tableau croisé dynamique'],
        ['Rapport', 'ChatGPT / Claude + Word', 'Relecture par une deuxième personne'],
      ],
    },
    result: "Un plan outil par étape, noté dans le Journal. Pour chaque chiffre du futur rapport, vous savez déjà par quel second moyen il sera vérifié.",
    tip: "Sans licence Copilot, tout le module reste faisable : les formules et les étapes Power Query sont données en clair, et ChatGPT ou Claude peuvent vous les expliquer.",
  },

  // ───────────── Procédure 2 — Diagnostiquer ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Préparer une extraction propre pour l\'IA',
    intro: "La feuille « Données brutes » contient des lignes de titre et des colonnes de diagnostic par formule : une IA risque de les lire comme des données. Vous lui transmettez donc uniquement le tableau, avec un numéro de ligne fixe pour parler de la même ligne qu'elle.",
    steps: [
      {
        title: "Isoler le tableau",
        actions: [
          "Dans la copie de travail, créez une feuille « Pour_IA ».",
          "Sélectionnez A4:E30 de « Données brutes », Ctrl+C, puis dans « Pour_IA » cellule B1 : clic droit > Collage spécial > Valeurs.",
          "En A1, saisissez « Ligne » ; en A2 saisissez 5, en A3 saisissez 6, sélectionnez A2:A3 et tirez la poignée jusqu'à A27 (valeur 30).",
        ],
      },
      {
        title: 'Mettre sous forme de tableau et exporter',
        actions: [
          "Cliquez dans la plage, Ctrl+T, cochez « Mon tableau comporte des en-têtes », OK.",
          "Onglet Création de tableau > Nom du tableau : saisissez T_Brut.",
          "Si l'outil IA accepte mal les .xlsx, Fichier > Enregistrer une copie > type « CSV UTF-8 (délimité par des virgules) », nom : pour_IA_depenses_S1.csv.",
        ],
      },
    ],
    example: {
      title: 'Les trois premières lignes de T_Brut',
      lines: [
        "Ligne | Date | Fournisseur | Catégorie | Montant (USD) | Site",
        "5 | 05/01/2026 | Transco Sarl | Transport routier | 4200 | Goma",
        "6 | 08/01/2026 | Kivu Freight Co | Entreposage | 1850 | Bukavu",
      ],
    },
    result: "Un tableau T_Brut de 26 lignes et 6 colonnes, dont la colonne Ligne reprend exactement les numéros Excel d'origine (5 à 30).",
    pitfall: "Sans colonne Ligne, l'IA numérote les lignes de 1 à 26 (ou de 2 à 27 avec l'en-tête) et vous cherchez l'anomalie au mauvais endroit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Rédiger le prompt de diagnostic (norme CLARTE)',
    intro: "Le prompt reprend les faits de votre fiche d'inventaire : un prompt générique produit un diagnostic générique. Copiez le modèle ci-dessous et remplacez uniquement ce qui diffère dans votre propre fichier.",
    steps: [
      {
        title: 'Assembler le prompt lettre par lettre',
        actions: [
          "A + C : donnez le rôle et décrivez le fichier exact (lignes, colonnes, période).",
          "L : imposez un tableau à cinq colonnes et nommez-les.",
          "R : interdisez toute modification et imposez la numérotation de la colonne Ligne.",
          "T : demandez l'exhaustivité plutôt que la synthèse.",
          "E : donnez une ligne d'exemple du tableau attendu.",
        ],
      },
    ],
    example: {
      title: 'Prompt de diagnostic — fil rouge (à copier)',
      lines: [
        "« Tu es analyste de données pour le service achats d'une organisation qui opère trois sites. [A]",
        "Je te fournis un export de 26 lignes de dépenses logistiques (colonnes : Ligne, Date, Fournisseur, Catégorie, Montant (USD), Site) couvrant janvier à juin 2026. [C]",
        "Audite ce fichier ligne par ligne et identifie : toutes les lignes dupliquées, toutes les valeurs de Montant manquantes, toutes les dates qui ne sont pas de vraies dates ou qui ont un format différent, tout fournisseur, site ou catégorie écrit sous plusieurs orthographes, casses ou avec des espaces en trop, et toute colonne inutile pour analyser les coûts par site, fournisseur et trimestre.",
        "Présente le résultat en un tableau à cinq colonnes : type d'anomalie, ligne(s) concernée(s), valeur observée, correction proposée, gravité (bloquant / à corriger / mineur). [L]",
        "Exemple de ligne attendue : Doublon exact | 14 et 15 | 12/03/2026, Transco Sarl, Entreposage, 3300, Goma | supprimer la ligne 15 après vérification | bloquant. [E]",
        "Utilise uniquement les numéros de la colonne Ligne. Ne modifie pas le fichier, limite-toi au diagnostic. Si une colonne ne pose aucun problème, écris-le. [R]",
        "Sois exhaustif plutôt que synthétique et termine par le nombre total de lignes lues. » [T]",
      ],
    },
    result: "Un prompt dont chaque phrase correspond à une lettre CLARTE identifiable, et qui contient les vrais noms de colonnes et le vrai nombre de lignes.",
    tip: "La dernière demande — « termine par le nombre total de lignes lues » — est votre premier contrôle : si l'IA annonce 25 ou 27 lignes au lieu de 26, son diagnostic est incomplet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Lancer le diagnostic et lire la réponse',
    intro: "Vous exécutez le prompt dans ChatGPT Data Analysis (ou Copilot dans Excel) et vous lisez la réponse comme un auditeur : chaque ligne signalée doit pouvoir être retrouvée dans le fichier.",
    steps: [
      {
        title: 'Avec ChatGPT Data Analysis',
        actions: [
          "Ouvrez une nouvelle conversation dans votre espace professionnel.",
          "Joignez pour_IA_depenses_S1.csv (ou le .xlsx) avec le bouton « + » ou le trombone.",
          "Collez le prompt de l'étape précédente et envoyez.",
          "Ouvrez le détail de l'analyse (lien ou icône d'affichage du code) et vérifiez que le fichier a été lu en entier.",
          "Vérifiez la dernière phrase : « 26 lignes lues ».",
        ],
      },
      {
        title: 'Variante avec Copilot dans Excel',
        actions: [
          "Cliquez dans T_Brut, puis Accueil > Copilot.",
          "Saisissez : « Mets en évidence les lignes en double, les montants vides, les dates stockées en texte et les fournisseurs écrits de plusieurs façons dans T_Brut. »",
          "Acceptez les mises en forme proposées, puis demandez : « Liste ces anomalies avec la valeur de la colonne Ligne. »",
        ],
      },
    ],
    table: {
      columns: ['Type', 'Ligne(s)', 'Valeur observée', 'Correction proposée', 'Gravité'],
      rows: [
        ['Doublon exact', '14 et 15', '12/03/2026 · Transco Sarl · Entreposage · 3 300 · Goma', 'Supprimer la ligne 15 après vérification', 'Bloquant'],
        ['Montant manquant', '16', 'Kivu Freight Co · Transport routier · Goma · vide', 'Retrouver la facture ; sinon « Non renseigné »', 'Bloquant'],
        ['Date en texte', '16', '« 12-Mar-26 »', '12/03/2026', 'À corriger'],
        ['Date en texte', '19', '« 2026/04/02 »', '02/04/2026', 'À corriger'],
        ['Libellé fournisseur', '20', '« transco sarl  »', 'Transco Sarl', 'Bloquant'],
        ['Colonne inutile', '—', 'Aucune', 'Conserver les 6 colonnes', '—'],
      ],
    },
    result: "Un tableau de diagnostic de cinq anomalies réparties sur quatre lignes (15, 16, 19, 20, plus la ligne 14 comme original du doublon), et la confirmation que 26 lignes ont été lues.",
    pitfall: "Accepter un diagnostic qui dit « quelques doublons et des dates à harmoniser » sans numéro de ligne : il est invérifiable, donc inutilisable. Relancez avec « Donne le numéro de la colonne Ligne pour chaque anomalie ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Contre-vérifier le diagnostic par formules Excel',
    intro: "Une IA peut oublier une ligne ou en inventer une. Trois formules simples refont le contrôle de façon déterministe. La grille du module les contient déjà en colonnes F à J de « Données brutes » ; apprenez à les écrire vous-même pour vos futurs fichiers.",
    steps: [
      {
        title: 'Écrire les trois colonnes de contrôle (version française d\'Excel)',
        actions: [
          "Dans la grille, ces colonnes existent déjà : cliquez sur F5, G5 et H5 et lisez les formules dans la barre de formule. Sur vos propres fichiers, créez-les ainsi :",
          "En F4, saisissez « Doublon détecté » ; en F5, saisissez la formule de doublon (voir exemple) puis double-cliquez sur la poignée pour l'étendre jusqu'à F30.",
          "En G4 « Valeur manquante » ; en G5 la formule de montant vide ; étendez.",
          "En H4 « Format date incohérent » ; en H5 la formule ESTNUM ; étendez.",
          "Données > Filtrer, puis filtrez chaque colonne sur « Oui » et notez les lignes affichées.",
        ],
      },
    ],
    example: {
      title: 'Formules de contrôle (ligne 5, à étendre jusqu\'à 30)',
      lines: [
        `F5 : =SI(NB.SI.ENS($A$5:$A$30;A5;$B$5:$B$30;B5;$C$5:$C$30;C5;$D$5:$D$30;D5;$E$5:$E$30;E5)>1;"Oui";"Non")`,
        `G5 : =SI(D5="";"Oui";"Non")`,
        `H5 : =SI(ESTNUM(A5);"Non";"Oui")`,
        `Variante qui ne marque que la 2e occurrence : =SI(NB.SI.ENS($A$5:A5;A5;$B$5:B5;B5;$C$5:C5;C5;$D$5:D5;D5;$E$5:E5;E5)>1;"Doublon à supprimer";"")`,
        "Version anglaise d'Excel : COUNTIFS, IF, ISNUMBER et virgule comme séparateur.",
      ],
    },
    result: "Filtre « Oui » : doublon sur les lignes 14 et 15 (les deux occurrences), montant manquant ligne 16, date en texte lignes 16 et 19. Le diagnostic de l'IA est confirmé pour ces anomalies.",
    tip: "La variante à plage glissante ($A$5:A5) ne marque que la deuxième occurrence (ligne 15) : c'est celle à supprimer, la ligne 14 reste l'original.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Repérer ce que les formules ne voient pas : casse et espaces',
    intro: "Pour NB.SI.ENS, « Transco Sarl » et « transco sarl  » sont deux valeurs différentes à cause de l'espace final : la ligne 20 n'est signalée par aucune des trois formules. C'est exactement l'anomalie qu'un contrôle manuel ou un prompt de diagnostic doit attraper en plus.",
    steps: [
      {
        title: 'Construire le contrôle des libellés',
        actions: [
          "En K4, saisissez « Fournisseur normalisé » ; en K5 : =NOMPROPRE(SUPPRESPACE(B5)) ; étendez jusqu'à K30.",
          "En L4, saisissez « Libellé à corriger » ; en L5 : =SI(EXACT(B5;K5);\"\";\"À corriger\") ; étendez.",
          "Filtrez L sur « À corriger » : seule la ligne 20 doit apparaître.",
          "Contrôle global (Excel 365) : comparez =NBVAL(UNIQUE(B5:B30)) et =NBVAL(UNIQUE(K5:K30)).",
        ],
      },
      {
        title: 'Passer en revue les colonnes',
        actions: [
          "Répétez le filtre automatique sur Site et Catégorie : aucune variante (3 sites, 3 catégories).",
          "Relisez chaque en-tête avec la question de gestion en tête : Date (trimestre), Fournisseur, Catégorie, Montant, Site servent tous. Aucune colonne inutile.",
        ],
      },
    ],
    example: {
      title: 'Résultat sur le fil rouge',
      lines: [
        "=NBVAL(UNIQUE(B5:B30)) → 5 libellés différents",
        "=NBVAL(UNIQUE(K5:K30)) → 4 fournisseurs réels",
        "Écart de 1 = une variante de libellé à corriger → ligne 20 « transco sarl  »",
      ],
    },
    result: "L'anomalie de libellé est confirmée par une formule et localisée ligne 20 ; les colonnes Site et Catégorie sont propres ; aucune colonne n'est à retirer.",
    pitfall: "Croire qu'un tableau croisé dynamique « regroupera tout seul » les variantes : l'espace final suffit à créer deux lignes Transco, et la hausse de Transco serait coupée en deux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Vérifier un échantillon, consigner et calculer le score de qualité',
    intro: "Le diagnostic n'est validé qu'après vérification humaine : un doublon apparent peut être deux commandes réelles. Vous consignez ensuite le résultat dans la feuille « Checklist nettoyage » de la grille.",
    steps: [
      {
        title: "Vérifier l'échantillon",
        actions: [
          "Reprenez les 4 lignes signalées (15, 16, 19, 20) et tirez 5 lignes saines au hasard (par exemple 7, 11, 22, 26, 29).",
          "Pour chacune, comparez avec la pièce justificative (facture, bon de commande) ou demandez au service achats.",
          "Pour les lignes 14 et 15, posez la question précise : « Y a-t-il une ou deux factures Transco Sarl d'entreposage de 3 300 USD le 12/03/2026 ? »",
        ],
      },
      {
        title: 'Consigner et mesurer',
        actions: [
          "Dans « Checklist nettoyage », passez le Statut de chaque type de problème de « À faire » à « Détecté — vérifié ».",
          "Calculez le score de qualité : lignes sans aucune anomalie ÷ lignes totales.",
          "Collez le tableau de diagnostic final dans une feuille « Diagnostic » et ajoutez une entrée au Journal.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vérification et score',
      lines: [
        "Réponse de Patrick Mumbere : « Une seule facture, n° TS-2026-0312, 3 300 USD. La ligne 15 est une double saisie. »",
        "Ligne 16 : facture Kivu Freight du 12/03 introuvable à ce jour — demande envoyée au fournisseur le 06/07.",
        "Lignes saines vérifiées (7, 11, 22, 26, 29) : conformes aux factures.",
        "Lignes avec au moins une anomalie : 15, 16, 19, 20 → 4 lignes",
        "Score de qualité = (26 − 4) ÷ 26 = 22 ÷ 26 = 84,6 %",
      ],
    },
    result: "Un diagnostic vérifié, archivé dans la feuille « Diagnostic », un score de qualité de 84,6 % à citer dans le rapport et une checklist de nettoyage à jour.",
    tip: "Gardez le score avant et après nettoyage : « qualité des données passée de 84,6 % à 100 % des lignes exploitables, une ligne exclue faute de montant » rassure un comité sur la fiabilité des chiffres.",
  },

  // ───────────── Procédure 3 — Nettoyer dans Excel ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 7',
    title: 'Obtenir le plan de nettoyage de l\'IA (méthode STAR)',
    intro: "Le diagnostic validé décrit exactement les défauts : vous pouvez maintenant demander les corrections, en STAR, parce que la demande enchaîne plusieurs actions dans un ordre précis.",
    steps: [
      {
        title: 'Rédiger et lancer le prompt',
        actions: [
          "Situation : recopiez les anomalies du diagnostic avec leurs lignes.",
          "Tâche : précisez que vous voulez un jeu propre ET une méthode réutilisable.",
          "Action : numérotez les livrables attendus dans l'ordre d'application.",
          "Résultat : exigez des formules pour Excel en français, chacune expliquée en une phrase.",
          "Envoyez dans la même conversation que le diagnostic (l'IA garde le fichier en contexte).",
        ],
      },
    ],
    example: {
      title: 'Prompt de nettoyage — fil rouge (à copier)',
      lines: [
        "« Situation : mon tableau T_Brut (colonnes Ligne, Date, Fournisseur, Catégorie, Montant (USD), Site) contient un doublon exact aux lignes 14 et 15, deux dates stockées en texte (ligne 16 « 12-Mar-26 », ligne 19 « 2026/04/02 »), un montant vide ligne 16 et un fournisseur écrit « transco sarl  » ligne 20.",
        "Tâche : je veux un jeu de données propre et une checklist réutilisable pour les prochains exports du même modèle.",
        "Action : (1) donne une formule NB.SI.ENS qui marque uniquement la deuxième occurrence d'un doublon ; (2) donne la méthode pour convertir les dates texte en vraies dates au format JJ/MM/AAAA ; (3) donne la formule pour uniformiser les noms de fournisseurs ; (4) propose une règle de validation des données pour qu'un montant ne puisse être ni texte, ni nul, ni négatif ; (5) donne les étapes Power Query équivalentes.",
        "Résultat attendu : des formules pour Excel en français (séparateur point-virgule), applicables telles quelles, chacune suivie d'une phrase qui explique ce qu'elle fait et pourquoi. »",
      ],
    },
    result: "Un plan de nettoyage en cinq points, dans l'ordre, avec formules prêtes à l'emploi. Les étapes 2 à 7 qui suivent appliquent ce plan et vérifient chaque correction.",
    pitfall: "Demander « nettoie mon fichier et renvoie-le » : vous récupérez un fichier modifié sans savoir ce qui a été changé, impossible à auditer et à reproduire le mois suivant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 7',
    title: 'Supprimer le doublon vérifié',
    intro: "Vous travaillez sur une nouvelle feuille « Propre », copie de T_Brut : le brut reste consultable à côté pour comparaison. La suppression ne porte que sur la ligne confirmée par la pièce justificative.",
    steps: [
      {
        title: 'Créer la table de travail',
        actions: [
          "Clic droit sur l'onglet « Pour_IA » > Déplacer ou copier > cochez « Créer une copie » > renommez la copie « Propre ».",
          "Cliquez dans le tableau copié > Création de tableau > Nom du tableau : T_Propre.",
          "Notez le total avant suppression : =SOMME(T_Propre[Montant (USD)]) → 82 800.",
        ],
      },
      {
        title: 'Marquer puis supprimer',
        actions: [
          "Ajoutez une colonne « Contrôle doublon » avec la formule à plage glissante proposée par l'IA.",
          "Filtrez la colonne sur « Doublon à supprimer » : seule la ligne d'origine 15 apparaît.",
          "Sélectionnez cette ligne du tableau > clic droit > Supprimer > Lignes du tableau.",
          "Retirez le filtre, supprimez la colonne « Contrôle doublon », ajoutez l'entrée au Journal.",
        ],
      },
    ],
    example: {
      title: 'Contrôle après suppression',
      lines: [
        "Nombre de lignes : 26 → 25 (=LIGNES(T_Propre))",
        "Total : 82 800 → 79 500 USD (=SOMME(T_Propre[Montant (USD)]))",
        "Contrôle : 82 800 − 3 300 = 79 500 ✔",
        "Journal : 06/07/2026 | Suppression doublon (facture unique TS-2026-0312) | ligne 15 | Excel | A. Kahindo",
      ],
    },
    result: "T_Propre compte 25 lignes et un total de 79 500 USD, exactement le total brut moins le montant du doublon.",
    pitfall: "Utiliser Données > Supprimer les doublons en sélectionnant aussi la colonne Ligne : chaque numéro étant unique, Excel ne trouve aucun doublon. Ne cochez que les colonnes Date, Fournisseur, Catégorie, Montant et Site.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 7',
    title: 'Traiter le montant manquant sans fausser les calculs',
    intro: "Une cellule vide n'est ni zéro ni une erreur à masquer : c'est une information manquante. La règle de la grille du module : compléter si la source existe, sinon marquer explicitement « Non renseigné », jamais laisser une cellule vide sans explication ni mettre 0 par défaut.",
    steps: [
      {
        title: 'Chercher la valeur réelle',
        actions: [
          "Recherchez la facture correspondante (fournisseur, date, site) dans le classeur des factures ou auprès de la comptabilité.",
          "Si elle est trouvée : saisissez le montant, notez le numéro de facture dans le Journal.",
        ],
      },
      {
        title: "Si la valeur reste introuvable avant l'échéance",
        actions: [
          "Ajoutez à T_Propre une colonne « Statut montant ».",
          "Sur la ligne d'origine 16, saisissez : « Non renseigné — facture demandée le 06/07/2026 ».",
          "Laissez la cellule Montant vide : SOMME et MOYENNE ignorent les cellules vides, alors qu'un 0 serait compté.",
          "Pour compter les commandes, utilisez un comptage qui exclut les vides : =NB.SI.ENS(T_Propre[Montant (USD)];\"<>\").",
        ],
      },
    ],
    example: {
      title: 'Pourquoi ne jamais saisir 0 — Kivu Freight Co au T1',
      lines: [
        "Montant vide : 2 commandes chiffrées, 5 800 USD → coût moyen = 5 800 ÷ 2 = 2 900 USD",
        "Montant saisi à 0 : 3 commandes, 5 800 USD → coût moyen = 5 800 ÷ 3 = 1 933 USD",
        "Un zéro fictif fait baisser le coût moyen de 33 % et crée une fausse « hausse » au T2.",
      ],
    },
    result: "La ligne 16 est conservée, sa cellule Montant reste vide et sa colonne Statut explique pourquoi. Le rapport mentionnera cette exclusion.",
    tip: "Tant que le montant de la ligne 16 manque, le coût de Kivu Freight Co et de Goma au T1 est sous-estimé : notez-le dès maintenant, cette réserve devra figurer dans le rapport.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 7',
    title: 'Convertir les dates texte en vraies dates',
    intro: "Une date stockée en texte n'a pas de mois ni de trimestre pour Excel : la ligne disparaît des regroupements par période. Deux lignes sont concernées ; pour quelques lignes, la correction manuelle documentée est la plus sûre, la formule servant de méthode pour les volumes plus importants.",
    steps: [
      {
        title: 'Corriger les lignes signalées',
        actions: [
          "Ligne d'origine 16 « 12-Mar-26 » : sélectionnez la cellule, saisissez 12/03/2026, Entrée.",
          "Ligne d'origine 19 « 2026/04/02 » : saisissez 02/04/2026 — ou, pour un format AAAA/MM/JJ répété sur beaucoup de lignes, utilisez une colonne d'aide avec la formule DATE (voir exemple).",
          "Sélectionnez toute la colonne Date > Accueil > Format de nombre > Date courte.",
        ],
      },
      {
        title: 'Contrôler la colonne entière',
        actions: [
          "Dans une cellule libre, saisissez =NB(T_Propre[Date]) : le résultat doit être 25 (NB ne compte que les nombres, donc les vraies dates).",
          "Si le résultat est inférieur, filtrez la colonne Date : les valeurs alignées à gauche sont du texte.",
        ],
      },
    ],
    example: {
      title: 'Méthode par formule pour le format AAAA/MM/JJ',
      lines: [
        `=DATE(GAUCHE([@Date];4);STXT([@Date];6;2);DROITE([@Date];2))  → « 2026/04/02 » devient 02/04/2026`,
        "Puis : copier la colonne d'aide > Collage spécial > Valeurs sur la colonne Date, et supprimer la colonne d'aide.",
        "Contrôle fil rouge : =NB(T_Propre[Date]) → 25 ✔",
      ],
    },
    result: "Les 25 cellules de la colonne Date sont de vraies dates au format JJ/MM/AAAA ; les lignes 16 et 19 tombent désormais dans le bon mois (mars et avril).",
    pitfall: "Utiliser DATEVAL sur « 12-Mar-26 » dans un Excel en français : le mois abrégé anglais « Mar » n'est pas toujours reconnu et la formule renvoie #VALEUR! — ou pire, une date fausse selon les paramètres régionaux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 7',
    title: 'Uniformiser les libellés fournisseurs',
    intro: "Tant que « transco sarl  » existe, Transco Sarl est coupé en deux dans tous les regroupements. Vous normalisez toute la colonne d'un coup, puis vous contrôlez qu'il ne reste que quatre fournisseurs.",
    steps: [
      {
        title: 'Normaliser',
        actions: [
          "Insérez une colonne d'aide à droite de Fournisseur, intitulée « Fournisseur_OK ».",
          "Saisissez =NOMPROPRE(SUPPRESPACE([@Fournisseur])) : la formule s'étend seule à tout le tableau.",
          "Sélectionnez la colonne Fournisseur_OK > Ctrl+C > sélectionnez la colonne Fournisseur > Collage spécial > Valeurs.",
          "Supprimez la colonne Fournisseur_OK.",
        ],
      },
      {
        title: 'Contrôler',
        actions: [
          "Ouvrez le filtre de la colonne Fournisseur : il doit lister exactement Alpha Logistics, Beta Supply, Kivu Freight Co, Transco Sarl.",
          "Comptez les lignes Transco : =NB.SI(T_Propre[Fournisseur];\"Transco Sarl\") → 9.",
        ],
      },
    ],
    example: {
      title: 'Avant / après sur le fil rouge',
      lines: [
        "Avant : 5 libellés — Transco Sarl (8 lignes après dédoublonnage) + « transco sarl  » (1 ligne)",
        "Après : 4 libellés — Transco Sarl (9 lignes)",
      ],
    },
    result: "La colonne Fournisseur ne contient plus que les quatre noms réels, et les 9 opérations de Transco Sarl sont regroupées sous un seul libellé.",
    pitfall: "NOMPROPRE transforme aussi les sigles : « SNTC Logistique » deviendrait « Sntc Logistique ». Si vos fournisseurs ont des sigles, utilisez plutôt une table de correspondance (libellé saisi → libellé officiel) et RECHERCHEX.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 7',
    title: 'Ajouter les colonnes d\'analyse Mois et Trimestre',
    intro: "La question de gestion compare deux trimestres et la tendance se lit par mois : vous créez ces deux colonnes une fois pour toutes, plutôt que de recalculer les périodes dans chaque formule.",
    steps: [
      {
        title: 'Créer les colonnes',
        actions: [
          "Dans la première colonne vide à droite de T_Propre, saisissez l'en-tête « Mois » : le tableau s'agrandit automatiquement.",
          "Sous l'en-tête, saisissez =TEXTE([@Date];\"aaaa-mm\") : la formule s'étend à toutes les lignes.",
          "Ajoutez l'en-tête « Trimestre » et saisissez =\"T\"&ARRONDI.SUP(MOIS([@Date])/3;0).",
        ],
      },
      {
        title: 'Contrôler la répartition',
        actions: [
          "Comptez les lignes par trimestre : =NB.SI(T_Propre[Trimestre];\"T1\") et =NB.SI(T_Propre[Trimestre];\"T2\").",
          "Vérifiez que la somme des deux égale 25.",
        ],
      },
    ],
    example: {
      title: 'Résultat sur le fil rouge',
      lines: [
        "T1 (janvier-mars) : 13 lignes, dont 12 avec montant (la ligne 16 est sans montant)",
        "T2 (avril-juin) : 12 lignes, toutes avec montant",
        "13 + 12 = 25 ✔ — Mois au format 2026-01 … 2026-06 (tri chronologique correct)",
      ],
    },
    result: "T_Propre compte 9 colonnes (Ligne, Date, Fournisseur, Catégorie, Montant, Site, Statut montant, Mois, Trimestre) et chaque ligne est rattachée à son mois et à son trimestre.",
    tip: "Le format « aaaa-mm » (2026-04) se trie correctement par ordre alphabétique, contrairement à « avril 2026 » qui placerait avril avant janvier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 7',
    title: 'Rapprocher les totaux et verrouiller la saisie future',
    intro: "Un nettoyage n'est terminé que s'il est prouvé : chaque écart entre le brut et le propre doit s'expliquer par une correction tracée. Vous posez ensuite des garde-fous pour que les prochains exports arrivent plus propres.",
    steps: [
      {
        title: 'Construire le tableau de rapprochement',
        actions: [
          "Dans une feuille « Contrôles », saisissez : total brut, corrections, total propre attendu, total propre calculé.",
          "Vérifiez aussi : nombre de lignes, nombre de fournisseurs, de sites, de catégories, nombre de vraies dates.",
          "Si un écart subsiste, ne passez pas à l'analyse : retrouvez la ligne en cause.",
        ],
      },
      {
        title: 'Poser les règles de saisie (sur le modèle de saisie utilisé par l\'équipe)',
        actions: [
          "Colonne Montant : Données > Validation des données > Autoriser : Personnalisé > formule =ET(ESTNUM(E2);E2>0) > onglet Alerte d'erreur : « Montant numérique et positif obligatoire ».",
          "Colonne Fournisseur : Validation des données > Autoriser : Liste > Source : la plage des quatre fournisseurs officiels.",
          "Montants oubliés : Accueil > Mise en forme conditionnelle > Nouvelle règle > Utiliser une formule… > =ET($B2<>\"\";$E2=\"\") > remplissage rouge.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Brut', 'Correction', 'Propre', 'Statut'],
      rows: [
        ['Total montants (USD)', '82 800', '− 3 300 (doublon ligne 15)', '79 500', '✔'],
        ['Nombre de lignes', '26', '− 1', '25', '✔'],
        ['Lignes avec montant', '25', '− 1', '24', '✔ (ligne 16 exclue)'],
        ['Fournisseurs distincts', '5 libellés', '« transco sarl  » fusionné', '4', '✔'],
        ['Vraies dates', '24', '+ 2 (lignes 16 et 19)', '25', '✔'],
      ],
    },
    result: "Un tableau de rapprochement entièrement « ✔ », des règles de validation prêtes pour le modèle de saisie, et une ligne de clôture dans le Journal : « Nettoyage terminé et rapproché ».",
    pitfall: "Croire que la validation des données empêche les oublis : elle refuse une valeur incorrecte saisie, mais pas une cellule qu'on n'a jamais remplie. C'est le rôle de la mise en forme conditionnelle rouge.",
  },

  // ───────────── Procédure 4 — Power Query ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Charger le tableau brut dans Power Query',
    intro: "Le nettoyage manuel est juste, mais il faudra le refaire à chaque export mensuel. Power Query enregistre chaque correction comme une étape, et rejoue toute la séquence en un clic sur le fichier suivant.",
    steps: [
      {
        title: 'Ouvrir l\'éditeur',
        actions: [
          "Cliquez dans le tableau T_Brut (feuille « Pour_IA »).",
          "Données > À partir d'un tableau ou d'une plage : l'éditeur Power Query s'ouvre.",
          "Dans le volet de droite « Paramètres d'une requête », renommez la requête « Depenses_Propres ».",
          "Observez le volet « Étapes appliquées » : il fonctionne comme un journal automatique, chaque clic y ajoute une ligne.",
        ],
      },
      {
        title: 'Neutraliser le typage automatique',
        actions: [
          "Si une étape « Type modifié » a été ajoutée automatiquement, cliquez sur la croix à sa gauche pour la supprimer : vous typerez les colonnes vous-même à l'étape 3.",
        ],
      },
    ],
    result: "La requête Depenses_Propres affiche les 26 lignes brutes, avec seulement l'étape « Source » dans les étapes appliquées.",
    tip: "Pour l'usage courant, connectez plutôt la requête directement au fichier exporté (Données > Obtenir des données > À partir d'un fichier > À partir d'un classeur) : chaque mois, il suffira de remplacer le fichier dans 01_Source puis d'actualiser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Nettoyer les colonnes texte',
    intro: "Vous traitez d'abord les libellés : si vous dédoublonnez avant, deux lignes identiques écrites avec une casse différente ne seraient pas reconnues comme doublons.",
    steps: [
      {
        title: 'Supprimer les espaces parasites',
        actions: [
          "Cliquez sur l'en-tête Fournisseur, puis Ctrl+clic sur Catégorie et Site.",
          "Transformer > Format > Supprimer les espaces.",
        ],
      },
      {
        title: 'Uniformiser la casse des fournisseurs',
        actions: [
          "Cliquez sur l'en-tête Fournisseur seul.",
          "Transformer > Format > Mettre en majuscule chaque mot.",
          "Cliquez sur la flèche de l'en-tête Fournisseur : la liste doit montrer 4 valeurs.",
        ],
      },
    ],
    example: {
      title: 'Étapes ajoutées dans le volet (fil rouge)',
      lines: [
        "Texte découpé — Fournisseur, Catégorie, Site : « transco sarl  » → « transco sarl »",
        "Texte en majuscules — Fournisseur : « transco sarl » → « Transco Sarl »",
      ],
    },
    result: "La ligne 20 affiche désormais « Transco Sarl » ; deux nouvelles étapes figurent dans « Étapes appliquées ».",
    pitfall: "« Mettre en majuscule chaque mot » sur une colonne qui contient des sigles les dénature : appliquez-le uniquement aux colonnes où ce n'est pas un problème.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Typer les dates et les montants avec des paramètres régionaux explicites',
    intro: "C'est l'étape qui règle les dates texte. En précisant les paramètres régionaux, vous dites à Power Query comment lire « 12-Mar-26 » (mois abrégé en anglais) au lieu de le laisser deviner.",
    steps: [
      {
        title: 'Typer la colonne Date',
        actions: [
          "Clic droit sur l'en-tête Date > Modifier le type > Utilisation des paramètres régionaux…",
          "Type de données : Date ; Paramètres régionaux : Anglais (États-Unis) ; OK.",
        ],
      },
      {
        title: 'Typer le montant et contrôler les erreurs',
        actions: [
          "Clic droit sur Montant (USD) > Modifier le type > Nombre décimal.",
          "Accueil > Conserver les lignes > Conserver les erreurs : la table doit être vide (0 ligne).",
          "Supprimez cette étape de contrôle (croix dans le volet) pour revenir à la table complète.",
          "Vérifiez à l'œil les lignes 16 et 19.",
        ],
      },
    ],
    example: {
      title: 'Contrôle attendu sur le fil rouge',
      lines: [
        "Ligne 16 : « 12-Mar-26 » → 12/03/2026 (affichage selon vos paramètres Windows)",
        "Ligne 19 : « 2026/04/02 » → 02/04/2026",
        "Conserver les erreurs → 0 ligne ✔ — Montant ligne 16 : null (vide conservé, pas de zéro)",
      ],
    },
    result: "Date est de type date sur les 26 lignes, Montant est numérique, aucune cellule en erreur.",
    pitfall: "Changer le type en Date sans paramètres régionaux sur un poste configuré en français : « 12-Mar-26 » peut passer en Error. Vérifiez systématiquement avec « Conserver les erreurs ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Supprimer les doublons et ajouter le trimestre',
    intro: "Les libellés et les dates sont maintenant homogènes : le dédoublonnage peut comparer des valeurs comparables. Vous ajoutez ensuite les colonnes d'analyse.",
    steps: [
      {
        title: 'Dédoublonner sur les bonnes colonnes',
        actions: [
          "Sélectionnez Date, puis Ctrl+clic sur Fournisseur, Catégorie, Montant (USD), Site — surtout pas la colonne Ligne.",
          "Accueil > Supprimer les lignes > Supprimer les doublons.",
          "Vérifiez le nombre de lignes en bas à gauche de l'éditeur : 25.",
        ],
      },
      {
        title: 'Ajouter Mois et Trimestre',
        actions: [
          "Ajouter une colonne > Colonne personnalisée > Nom : Trimestre > Formule : \"T\" & Text.From(Date.QuarterOfYear([Date])) > OK.",
          "Ajouter une colonne > Colonne personnalisée > Nom : Mois > Formule : Date.ToText([Date], \"yyyy-MM\") > OK.",
        ],
      },
    ],
    result: "25 lignes, avec les colonnes Trimestre (T1/T2) et Mois (2026-01 à 2026-06) ; la ligne d'origine 15 a disparu, la ligne 14 est conservée.",
    pitfall: "Inclure la colonne Ligne dans la sélection : chaque ligne devient unique et aucun doublon n'est supprimé. L'étape semble avoir fonctionné alors qu'elle n'a rien fait — d'où le contrôle du nombre de lignes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Charger, vérifier et réutiliser la requête',
    intro: "La requête n'a de valeur que si son résultat est identique au nettoyage manuel validé, et si vous savez la relancer le mois prochain.",
    steps: [
      {
        title: 'Charger et vérifier',
        actions: [
          "Accueil > Fermer et charger > Fermer et charger dans… > Tableau > Nouvelle feuille de calcul > OK.",
          "Renommez la feuille « PQ_Propre » ; vérifiez : 25 lignes, total =SOMME de la colonne Montant = 79 500.",
          "Comparez avec T_Propre (procédure 3) : même total, même nombre de lignes par trimestre.",
        ],
      },
      {
        title: 'Documenter et réutiliser',
        actions: [
          "Rouvrez la requête (Données > Requêtes et connexions > double-clic) > Accueil > Éditeur avancé : copiez le code dans le Journal.",
          "Le mois prochain : collez le nouvel export dans T_Brut (ou remplacez le fichier source), puis Données > Actualiser tout.",
          "Après chaque actualisation, refaites les trois contrôles : nombre de lignes, total, « Conserver les erreurs ».",
        ],
      },
    ],
    example: {
      title: 'Code M de la requête Depenses_Propres (Éditeur avancé)',
      lines: [
        `let Source = Excel.CurrentWorkbook(){[Name="T_Brut"]}[Content],`,
        `  Espaces = Table.TransformColumns(Source, {{"Fournisseur", Text.Trim}, {"Catégorie", Text.Trim}, {"Site", Text.Trim}}),`,
        `  Casse = Table.TransformColumns(Espaces, {{"Fournisseur", Text.Proper}}),`,
        `  Types = Table.TransformColumnTypes(Casse, {{"Date", type date}, {"Montant (USD)", type number}}, "en-US"),`,
        `  SansDoublon = Table.Distinct(Types, {"Date", "Fournisseur", "Catégorie", "Montant (USD)", "Site"}),`,
        `  Trimestre = Table.AddColumn(SansDoublon, "Trimestre", each "T" & Text.From(Date.QuarterOfYear([Date])), type text),`,
        `  Mois = Table.AddColumn(Trimestre, "Mois", each Date.ToText([Date], "yyyy-MM"), type text)`,
        `in Mois`,
      ],
    },
    result: "Une requête nommée, documentée, dont le résultat (25 lignes, 79 500 USD) est identique au nettoyage manuel, et qui s'actualise en un clic sur les prochains exports.",
    tip: "Demandez à Copilot ou à ChatGPT : « Explique ligne par ligne ce code Power Query » — c'est la meilleure façon de comprendre et de transmettre la requête à un collègue.",
  },

  // ───────────── Procédure 5 — KPI ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 8',
    title: 'Traduire la question de gestion en liste de KPI',
    intro: "Un KPI n'existe que s'il répond à une partie de la question. Vous découpez la question validée en sous-questions, et vous associez à chacune un indicateur, sa formule et la décision qu'il éclaire.",
    steps: [
      {
        title: 'Découper la question',
        actions: [
          "Recopiez la question validée en haut d'une feuille « KPI ».",
          "Soulignez chaque élément : « quelle hausse ? », « quel site ? », « quel fournisseur ? », « volume ou coût par commande ? », « quelle action ? ».",
          "Pour chaque élément, écrivez l'indicateur qui y répond, sa formule et la décision associée.",
          "Rayez tout indicateur qui ne répond à aucun élément.",
        ],
      },
    ],
    table: {
      columns: ['Sous-question', 'KPI', 'Calcul', 'Décision éclairée'],
      rows: [
        ['Quelle hausse ?', 'Coût total par trimestre et variation', 'T2 − T1 ; (T2 − T1) ÷ T1', 'Ampleur du dérapage'],
        ['Quel site ?', 'Coût par site et trimestre ; contribution', 'Écart du site ÷ écart total', 'Où agir en priorité'],
        ['Quel fournisseur ?', 'Coût par fournisseur ; contribution ; part du total', 'Écart fournisseur ÷ écart total', 'Qui solliciter'],
        ['Volume ou prix ?', 'Nombre de commandes, coût moyen, effet volume / prix', 'Voir étape 6', 'Renégocier ou maîtriser la demande'],
        ['Hausse durable ?', 'Coût mensuel', 'Somme par mois', 'Ne pas extrapoler un pic'],
      ],
    },
    result: "Une liste de cinq familles de KPI, chacune rattachée à une sous-question. Tout le reste (moyenne par catégorie sans objet, nombre de lignes…) est volontairement écarté.",
    pitfall: "Calculer « tout ce qui est possible » puis chercher une histoire dans les chiffres : vous noyez le comité et vous trouvez toujours une corrélation qui ne veut rien dire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 8',
    title: 'Lancer le calcul avec le prompt d\'analyse (norme CLARTE)',
    intro: "Vous déposez le jeu PROPRE (feuille PQ_Propre ou T_Propre exportée) et vous demandez exactement les KPI listés, sans recommandation : le constat d'abord, l'interprétation plus tard.",
    steps: [
      {
        title: 'Préparer et lancer',
        actions: [
          "Exportez T_Propre en CSV UTF-8 : depenses_S1_propre.csv.",
          "Ouvrez une nouvelle conversation ChatGPT Data Analysis et joignez le fichier.",
          "Collez le prompt ci-dessous, envoyez, puis ouvrez le code exécuté pour vérifier les filtres de trimestre.",
          "Copiez les tableaux obtenus dans la feuille « KPI », colonne « Résultat IA ».",
        ],
      },
    ],
    example: {
      title: "Prompt d'analyse — fil rouge (à copier)",
      lines: [
        "« Tu es analyste financier pour un service logistique. [A]",
        "Voici mon fichier de dépenses nettoyé : 25 lignes (Date, Fournisseur, Catégorie, Montant (USD), Site, Mois, Trimestre), janvier-juin 2026 ; une ligne a un montant vide volontairement, exclus-la des sommes et des comptages de commandes. [C]",
        "Ma question de gestion : quel site ou quel fournisseur explique la plus forte hausse de coût entre le T1 et le T2, et cette hausse vient-elle du volume ou du coût par commande ?",
        "Calcule : (1) le coût total par site et par trimestre, l'écart et la variation en % ; (2) la contribution de chaque site et de chaque fournisseur à l'écart total ; (3) pour chaque fournisseur, le nombre de commandes et le coût moyen par commande par trimestre ; (4) le coût total par mois. [L]",
        "Présente chaque résultat en tableau trié par écart décroissant, avec une phrase de lecture factuelle par ligne du top 3.",
        "Ne formule aucune recommandation, uniquement les chiffres et leur lecture. [R] Ton neutre et chiffré, sans superlatif. [T] »",
      ],
    },
    result: "Quatre tableaux de résultats produits par l'IA, copiés dans la feuille « KPI », en attente de contrôle par tableau croisé dynamique.",
    tip: "Demandez toujours l'exclusion explicite de la ligne sans montant : sinon certaines IA la remplacent silencieusement par 0 ou par la moyenne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 8',
    title: 'Recalculer les coûts par site et trimestre avec un tableau croisé dynamique',
    intro: "C'est le contrôle croisé de l'étape précédente : un tableau croisé dynamique calcule les mêmes totaux de façon indépendante. Si les deux concordent, le chiffre peut entrer dans le rapport.",
    steps: [
      {
        title: 'Construire le TCD',
        actions: [
          "Cliquez dans T_Propre (ou PQ_Propre) > Insertion > Tableau croisé dynamique > Nouvelle feuille > OK.",
          "Glissez Site dans Lignes, Trimestre dans Colonnes, Montant (USD) dans Valeurs (Somme).",
          "Clic droit sur une valeur > Format de nombre > Nombre, 0 décimale, séparateur de milliers.",
          "Renommez la feuille « TCD_Site ».",
        ],
      },
      {
        title: 'Comparer avec l\'IA',
        actions: [
          "Placez le tableau de l'IA à côté et vérifiez chaque cellule.",
          "Écart = 0 partout : cochez la colonne « Contrôlé » dans la feuille KPI.",
        ],
      },
    ],
    table: {
      columns: ['Site', 'T1 (USD)', 'T2 (USD)', 'Total S1 (USD)'],
      rows: [
        ['Goma', '17 300', '35 250', '52 550'],
        ['Bukavu', '7 900', '5 650', '13 550'],
        ['Kinshasa', '7 350', '6 050', '13 400'],
        ['Total', '32 550', '46 950', '79 500'],
      ],
    },
    result: "Le TCD donne 32 550 USD au T1 et 46 950 USD au T2, total 79 500 USD — identique au total rapproché du nettoyage. Les chiffres de l'IA sont confirmés.",
    pitfall: "Construire le TCD sur des données non nettoyées : Goma afficherait 20 600 USD au T1 (doublon compté) et la ligne 19, dont la date est du texte, ne serait rattachée à aucun trimestre. Vérifiez toujours que le total général du TCD égale le total rapproché.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 8',
    title: 'Calculer la variation et la contribution de chaque site',
    intro: "La variation en % dit à quel point un site a bougé ; la contribution dit quelle part de la hausse totale il explique. C'est la contribution qui répond à « quel site explique la hausse ? ».",
    steps: [
      {
        title: 'Ajouter les colonnes de calcul à côté du TCD',
        actions: [
          "Recopiez le TCD en valeurs dans une plage A3:C6 (Site, T1, T2) pour écrire des formules stables.",
          "En D4 « Écart » : =C4-B4 ; en E4 « Variation % » : =D4/B4 au format pourcentage 1 décimale.",
          "En F4 « Contribution » : =D4/$D$7, où D7 est l'écart total (=C7-B7).",
          "Étendez les formules à Bukavu et Kinshasa, puis triez par Écart décroissant.",
        ],
      },
    ],
    table: {
      columns: ['Site', 'Écart T2 − T1', 'Variation', 'Contribution à la hausse'],
      rows: [
        ['Goma', '+ 17 950', '+ 103,8 %', '124,7 %'],
        ['Kinshasa', '− 1 300', '− 17,7 %', '− 9,0 %'],
        ['Bukavu', '− 2 250', '− 28,5 %', '− 15,6 %'],
        ['Total', '+ 14 400', '+ 44,2 %', '100 %'],
      ],
    },
    result: "Lecture factuelle : la hausse totale est de 14 400 USD (+44,2 %). Goma double ses dépenses (+103,8 %) et porte à lui seul plus que la hausse totale, Bukavu et Kinshasa ayant baissé.",
    pitfall: "S'étonner d'une contribution de 124,7 % et « corriger » le calcul : quand d'autres sites baissent, le site en hausse explique plus de 100 % de la hausse nette. C'est normal et c'est précisément le message.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 8',
    title: 'Analyser les fournisseurs : écart, nombre de commandes et coût moyen',
    intro: "Le site est identifié ; il faut maintenant savoir qui facture la hausse. Vous ajoutez le nombre de commandes pour préparer la question « volume ou prix ».",
    steps: [
      {
        title: 'Construire le TCD fournisseurs',
        actions: [
          "Insertion > Tableau croisé dynamique depuis T_Propre > Nouvelle feuille « TCD_Fournisseur ».",
          "Lignes : Fournisseur ; Colonnes : Trimestre ; Valeurs : Montant (USD) en Somme, puis glissez une deuxième fois Montant (USD) dans Valeurs et choisissez Paramètres des champs de valeurs > Nombre.",
          "Le « Nombre » ne compte que les cellules non vides : la ligne 16 sans montant n'est pas comptée comme commande.",
          "À côté, calculez Écart, Variation %, Coût moyen T1 = Somme T1 ÷ Nombre T1, Coût moyen T2, Contribution.",
        ],
      },
    ],
    table: {
      columns: ['Fournisseur', 'T1 (nb)', 'T2 (nb)', 'Écart', 'Contribution', 'Coût moyen T1 → T2'],
      rows: [
        ['Transco Sarl', '13 000 (4)', '27 350 (5)', '+ 14 350', '99,7 %', '3 250 → 5 470'],
        ['Kivu Freight Co', '5 800 (2)', '8 300 (3)', '+ 2 500', '17,4 %', '2 900 → 2 767'],
        ['Beta Supply', '6 050 (3)', '6 050 (2)', '0', '0 %', '2 017 → 3 025'],
        ['Alpha Logistics', '7 700 (3)', '5 250 (2)', '− 2 450', '− 17,0 %', '2 567 → 2 625'],
      ],
    },
    result: "Lecture factuelle : Transco Sarl passe de 13 000 à 27 350 USD (+110,4 %) et explique 99,7 % de la hausse nette ; sa part dans le coût total passe de 39,9 % à 58,3 %. Son coût moyen par commande passe de 3 250 à 5 470 USD (+68,3 %).",
    pitfall: "Lire « Kivu Freight Co +43,1 % » comme une hausse avérée : son T1 est incomplet (montant de la ligne 16 manquant). Signalez la réserve au lieu de commenter ce chiffre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 8',
    title: 'Décomposer la hausse en effet volume et effet prix — au bon niveau',
    intro: "« Volume ou prix ? » décide de l'action : si le volume explique la hausse, on interroge les besoins ; si c'est le prix, on renégocie. Mais un coût moyen calculé sur des prestations différentes (transport, dédouanement, entreposage) peut tromper : il faut descendre au niveau de la catégorie.",
    steps: [
      {
        title: 'Calcul global (première approche)',
        actions: [
          "Effet volume = (commandes T2 − commandes T1) × coût moyen T1.",
          "Effet prix = (coût moyen T2 − coût moyen T1) × commandes T2.",
          "Vérifiez : effet volume + effet prix = écart total.",
        ],
      },
      {
        title: 'Calcul par catégorie (le bon niveau)',
        actions: [
          "Ajoutez Catégorie dans les Lignes du TCD, sous Fournisseur, et filtrez sur Transco Sarl.",
          "Refaites la décomposition pour la catégorie Transport routier, puis relevez les écarts des autres catégories.",
          "Vérifiez que la somme des écarts par catégorie redonne + 14 350 USD.",
        ],
      },
    ],
    example: {
      title: 'Transco Sarl — calcul ligne par ligne',
      lines: [
        "Global : volume (5 − 4) × 3 250 = 3 250 ; prix (5 470 − 3 250) × 5 = 11 100 ; total 14 350 ✔ → « 77 % prix » (trompeur)",
        "Transport routier : 2 trajets, 8 800 USD (moy. 4 400) → 4 trajets, 21 950 USD (moy. 5 487,5)",
        "Effet volume = (4 − 2) × 4 400 = 8 800 ; effet prix = (5 487,5 − 4 400) × 4 = 4 350 ; total 13 150 ✔",
        "Dédouanement : 1 opération à 900 USD (20/01) → 1 opération à 5 400 USD (07/05) : + 4 500",
        "Entreposage : 3 300 USD au T1 → 0 au T2 : − 3 300",
        "Contrôle : 13 150 + 4 500 − 3 300 = 14 350 ✔",
      ],
    },
    result: "Lecture factuelle : sur le transport routier, la hausse Transco vient pour deux tiers du doublement des trajets (8 800 USD) et pour un tiers d'un coût par trajet en hausse de 24,7 % (4 350 USD) ; s'y ajoute un dédouanement six fois plus cher qu'au T1.",
    tip: "Quand un calcul global et un calcul détaillé racontent deux histoires différentes, c'est le détaillé qui va dans le rapport — et l'écart entre les deux est une excellente question à poser au fournisseur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 8',
    title: 'Détecter la tendance mensuelle avant de conclure',
    intro: "Une hausse de trimestre peut être une tendance durable ou un pic ponctuel : la recommandation n'est pas la même. Le coût mensuel répond en une minute.",
    steps: [
      {
        title: 'Construire la série mensuelle',
        actions: [
          "TCD depuis T_Propre : Lignes = Mois ; Valeurs = Somme de Montant ; ajoutez Site en Colonnes pour isoler Goma.",
          "Insérez une courbe (Analyse du tableau croisé dynamique > Graphique croisé dynamique > Courbes) pour visualiser le profil.",
          "Repérez le ou les mois qui s'écartent nettement des autres et les lignes qui les composent (double-clic sur la valeur du TCD).",
        ],
      },
    ],
    table: {
      columns: ['Mois', 'Total (USD)', 'Dont Goma (USD)', 'Observation'],
      rows: [
        ['2026-01', '12 250', '8 200', ''],
        ['2026-02', '12 500', '5 800', ''],
        ['2026-03', '7 800', '3 300', 'Incomplet : ligne 16 sans montant'],
        ['2026-04', '18 600', '13 650', 'Pic : 2 trajets Transco à 7 jours d\'écart'],
        ['2026-05', '17 150', '15 500', 'Pic : dédouanement Transco 5 400'],
        ['2026-06', '11 200', '6 100', 'Retour au niveau de janvier-février'],
      ],
    },
    result: "Lecture factuelle : la hausse du T2 est concentrée sur avril et mai (35 750 USD sur deux mois, dont 29 150 à Goma) ; juin revient à 11 200 USD. Il s'agit d'un pic, pas d'une tendance continue démontrée.",
    pitfall: "Écrire « au rythme actuel, le budget annuel dépassera… » : extrapoler deux mois de pic sur l'année est exactement l'extrapolation que le rapport doit s'interdire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 8 sur 8',
    title: 'Rapprocher l\'IA et Excel, puis rédiger la lecture factuelle',
    intro: "Dernière étape avant la visualisation : chaque chiffre destiné au rapport est contrôlé deux fois, et chaque constat est rédigé sans verbe de cause.",
    steps: [
      {
        title: 'Rapprocher',
        actions: [
          "Dans la feuille KPI, ajoutez trois colonnes : Résultat IA, Résultat TCD, Écart.",
          "Pour chaque KPI retenu, saisissez =Résultat IA − Résultat TCD ; tout écart non nul se règle avant d'avancer.",
          "Causes d'écart fréquentes : l'IA a compté la ligne sans montant comme 0, a lu l'en-tête comme une ligne, ou a borné le T2 au 31/05.",
        ],
      },
      {
        title: 'Rédiger la lecture factuelle',
        actions: [
          "Écrivez une phrase par KPI clé : sujet, chiffre, période, comparaison.",
          "Remplacez tout « à cause de », « dû à », « s'explique par » par « concentre », « représente », « coïncide avec ».",
        ],
      },
    ],
    example: {
      title: 'Lecture factuelle validée — fil rouge',
      lines: [
        "1. Les dépenses logistiques passent de 32 550 USD au T1 à 46 950 USD au T2 2026, soit + 14 400 USD (+ 44,2 %).",
        "2. Goma passe de 17 300 à 35 250 USD (+ 103,8 %) et concentre plus que la hausse nette ; Bukavu (− 28,5 %) et Kinshasa (− 17,7 %) baissent.",
        "3. Transco Sarl représente + 14 350 USD, soit 99,7 % de la hausse nette ; sa part du coût total passe de 39,9 % à 58,3 %.",
        "4. Sur le transport routier, Transco passe de 2 à 4 trajets et de 4 400 à 5 487,5 USD par trajet (+ 24,7 %) ; un dédouanement de 5 400 USD (07/05) se compare à 900 USD au T1.",
        "5. La hausse est concentrée sur avril-mai ; juin revient à 11 200 USD. Réserve : un montant de mars (Kivu Freight, Goma) reste manquant.",
      ],
    },
    result: "Une feuille KPI où chaque chiffre affiche un écart IA / TCD de 0, et cinq phrases de lecture factuelle prêtes pour le rapport.",
  },

  // ───────────── Procédure 6 — Visualisation ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Écrire le message que chaque graphique doit porter',
    intro: "Un graphique se conçoit à partir d'une phrase, pas à partir des données. Le comité lira le titre du graphique avant tout le reste : ce titre doit être la conclusion.",
    steps: [
      {
        title: 'Formuler les messages',
        actions: [
          "Reprenez les cinq phrases de lecture factuelle de la procédure 5.",
          "Choisissez au maximum deux messages qui répondent directement à la question de gestion.",
          "Réécrivez chacun en une phrase de moins de 15 mots, avec un chiffre.",
          "Notez à part un message secondaire éventuel pour l'annexe.",
        ],
      },
    ],
    example: {
      title: 'Messages retenus — fil rouge',
      lines: [
        "Message 1 : « Goma double ses dépenses au T2 (+ 17 950 USD), les autres sites baissent. »",
        "Message 2 : « Transco Sarl représente 99,7 % de la hausse nette du T2. »",
        "Annexe : « La hausse est un pic d'avril-mai ; juin revient au niveau de début d'année. »",
      ],
    },
    result: "Deux messages principaux et un message d'annexe, chacun écrit comme un titre de graphique.",
    pitfall: "Titrer « Dépenses par site T1/T2 » : c'est une description, pas un message. Le lecteur doit alors chercher lui-même la conclusion dans les barres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Obtenir la recommandation de visualisation (norme CLARTE)',
    intro: "Vous donnez à l'IA les résultats déjà calculés et les messages : elle n'a rien à recalculer, seulement à proposer le visuel adapté à chaque message, avec sa structure exacte.",
    steps: [
      {
        title: 'Lancer le prompt',
        actions: [
          "Collez les tableaux contrôlés (site × trimestre, écarts fournisseurs) dans le prompt.",
          "Collez les deux messages mot pour mot.",
          "Envoyez, puis comparez la proposition au tableau de choix des graphiques du module.",
        ],
      },
    ],
    example: {
      title: 'Prompt de visualisation — fil rouge (à copier)',
      lines: [
        "« Tu es analyste de données. Voici les résultats contrôlés : [coller le tableau site × trimestre et le tableau des écarts par fournisseur]. [C + A]",
        "Le message 1 à faire passer à la direction : Goma double ses dépenses au T2 (+ 17 950 USD), les autres sites baissent. Le message 2 : Transco Sarl représente 99,7 % de la hausse nette du T2.",
        "Pour chaque message, propose le type de graphique le plus adapté (courbe, barres, barres groupées, camembert) et sa structure exacte : axes, séries, tri, couleur à mettre en avant. [L]",
        "N'utilise un camembert que si la répartition compte 5 catégories ou moins. Limite-toi à deux graphiques, un par message, avec une légende suggérée pour chacun. [R] »",
      ],
    },
    table: {
      columns: ['Message', 'Type proposé', 'Structure'],
      rows: [
        ['1 — Goma double', 'Barres groupées', 'Axe X : sites triés par total décroissant ; séries T1 (gris) et T2 (couleur) ; étiquettes de valeur'],
        ['2 — Transco 99,7 %', 'Barres horizontales', 'Axe Y : fournisseurs triés par écart ; barre Transco en couleur, autres en gris ; axe à zéro visible'],
      ],
    },
    result: "Une recommandation de deux graphiques, cohérente avec la règle « comparaison de deux dimensions = barres groupées ; comparaison de catégories = barres ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Construire le graphique 1 : barres groupées site × trimestre',
    intro: "Vous partez du TCD_Site déjà contrôlé : le graphique est ainsi garanti cohérent avec les chiffres du rapport.",
    steps: [
      {
        title: 'Créer le graphique',
        actions: [
          "Cliquez dans TCD_Site > Analyse du tableau croisé dynamique > Graphique croisé dynamique > Histogramme > Histogramme groupé > OK.",
          "Triez les sites : clic droit sur un nom de site dans le TCD > Trier > Trier du plus grand au plus petit (sur le Total).",
        ],
      },
      {
        title: 'Le mettre au service du message',
        actions: [
          "Clic droit sur un bouton de champ du graphique > Masquer tous les boutons de champ du graphique.",
          "Cliquez sur le titre et saisissez le message 1 ; ajoutez un sous-titre « Dépenses logistiques en USD, T1 et T2 2026 ».",
          "Bouton « + » du graphique > cochez Étiquettes de données, décochez Quadrillage.",
          "Série T1 en gris clair, série T2 dans la couleur de votre charte ; vérifiez que l'axe vertical commence à 0.",
        ],
      },
    ],
    example: {
      title: 'Graphique 1 attendu',
      lines: [
        "Titre : Goma double ses dépenses au T2 (+ 17 950 USD), les autres sites baissent",
        "Goma : T1 17 300 | T2 35 250 — Bukavu : T1 7 900 | T2 5 650 — Kinshasa : T1 7 350 | T2 6 050",
        "Source en pied : export comptable S1 2026, nettoyé (1 doublon retiré, 1 montant manquant exclu)",
      ],
    },
    result: "Un histogramme groupé, trié, sans bouton ni quadrillage, dont le titre énonce la conclusion et dont les valeurs correspondent au TCD.",
    pitfall: "Laisser l'axe vertical démarrer à 5 000 pour « mieux voir les écarts » : les barres de Bukavu et Kinshasa paraissent quasi nulles et le graphique devient trompeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Construire le graphique 2 : écart par fournisseur en barres horizontales',
    intro: "Ce graphique montre une seule chose : Transco Sarl écrase les autres fournisseurs dans la hausse. Les barres horizontales laissent les noms lisibles et affichent naturellement les écarts négatifs à gauche de l'axe.",
    steps: [
      {
        title: 'Préparer les données et le graphique',
        actions: [
          "Dans la feuille TCD_Fournisseur, recopiez en valeurs deux colonnes : Fournisseur et Écart, triées par écart croissant (Excel affiche la dernière ligne en haut).",
          "Sélectionnez ces deux colonnes > Insertion > Graphiques > Barres > Barres groupées.",
        ],
      },
      {
        title: 'Mettre en valeur le message',
        actions: [
          "Cliquez deux fois (lentement) sur la barre Transco pour la sélectionner seule > Remplissage : couleur de la charte ; autres barres en gris.",
          "Titre : message 2 ; ajoutez les étiquettes de données au format « + 14 350 ».",
          "Supprimez la légende (une seule série) et le quadrillage.",
        ],
      },
    ],
    example: {
      title: 'Graphique 2 attendu',
      lines: [
        "Titre : Transco Sarl représente 99,7 % de la hausse nette du T2",
        "Transco Sarl + 14 350 | Kivu Freight Co + 2 500* | Beta Supply 0 | Alpha Logistics − 2 450",
        "* Note : T1 de Kivu Freight Co incomplet (un montant de mars manquant).",
      ],
    },
    result: "Un graphique en barres horizontales, une seule barre colorée, la note de réserve sur Kivu Freight Co visible sous le graphique.",
    tip: "Le message d'annexe (pic d'avril-mai) se montre avec la courbe mensuelle construite à la procédure 5, étape 7 : une courbe pour une évolution dans le temps.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Contrôler la lisibilité et exporter les graphiques',
    intro: "Un graphique se juge en cinq secondes, comme le fera le comité. Vous passez chaque graphique au crible d'une checklist, puis vous le transférez dans le rapport sans le déformer.",
    steps: [
      {
        title: 'Contrôle « 5 secondes »',
        actions: [
          "Montrez le graphique cinq secondes à un collègue et demandez : « Qu'as-tu retenu ? »",
          "Si sa réponse n'est pas le message du titre, simplifiez (moins de séries, une seule couleur d'accent).",
          "Vérifiez : titre-message, unité (USD), période, axe à zéro, source, moins de 6 catégories.",
        ],
      },
      {
        title: 'Exporter vers Word',
        actions: [
          "Sélectionnez le graphique > Accueil > Copier > Copier comme image > Comme à l'écran.",
          "Dans le gabarit Word, Accueil > Coller ; clic droit > Modifier le texte de remplacement : décrivez le message en une phrase.",
          "Enregistrez aussi le classeur dans 03_Livrables pour garder le graphique modifiable.",
        ],
      },
    ],
    result: "Deux graphiques validés au test des cinq secondes, insérés en image dans le rapport, avec texte de remplacement, et le classeur source archivé.",
    pitfall: "Coller le graphique lié au classeur : à la prochaine actualisation Power Query, le graphique du rapport déjà diffusé change sans que personne ne le sache.",
  },

  // ───────────── Procédure 7 — Rapport ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 6',
    title: 'Générer le premier jet de la synthèse et des recommandations (méthode STAR)',
    intro: "La direction ne lira que la synthèse et les recommandations. Vous donnez à l'IA uniquement les chiffres contrôlés et la lecture factuelle : elle ne doit rien recalculer ni rien inventer.",
    steps: [
      {
        title: 'Assembler le prompt',
        actions: [
          "Situation : collez les cinq phrases de lecture factuelle validées (procédure 5, étape 8).",
          "Tâche : nommez l'audience réelle et sa contrainte (comité, trois minutes de lecture).",
          "Action : imposez la structure (5 lignes, 3 points priorisés avec action, responsable, échéance).",
          "Résultat : imposez la fidélité aux chiffres et la distinction constat / hypothèse.",
        ],
      },
    ],
    example: {
      title: 'Prompt de rapport — fil rouge (à copier)',
      lines: [
        "« Situation : j'ai nettoyé et analysé l'export des dépenses logistiques de janvier à juin 2026 (1 doublon retiré, 1 montant manquant exclu). Résultats contrôlés : [coller les 5 phrases de lecture factuelle].",
        "Tâche : rédiger la synthèse exécutive et la recommandation d'un rapport destiné au comité budgétaire du vendredi 10 juillet 2026, qui dispose de trois minutes de lecture.",
        "Action : rédige une synthèse exécutive de 5 lignes maximum (question, constat chiffré principal, ampleur, réserve), puis une recommandation en 3 points classés par priorité, chacun avec une action concrète, un responsable (fonction) et une échéance réaliste en juillet-août 2026.",
        "Résultat attendu : un texte prêt à coller dans le gabarit, fondé uniquement sur ces chiffres, sans arrondi trompeur ni extrapolation au-delà du semestre ; distingue explicitement ce qui est constaté de ce qui reste à vérifier. »",
      ],
    },
    result: "Un premier jet de synthèse et de recommandations, à contrôler à l'étape suivante avant toute insertion dans le gabarit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 6',
    title: 'Contrôler le texte de l\'IA phrase par phrase',
    intro: "Un texte bien écrit peut contenir un chiffre arrondi de travers ou une cause affirmée sans preuve. Vous le contrôlez avec trois passes, puis vous demandez une relecture critique à une seconde IA.",
    steps: [
      {
        title: 'Trois passes de contrôle',
        actions: [
          "Passe chiffres : surlignez chaque chiffre du texte et cochez-le contre la feuille KPI ; un chiffre absent de la feuille est supprimé.",
          "Passe causalité : entourez « à cause de », « dû à », « en raison de » ; remplacez-les par un constat ou ajoutez « à vérifier ».",
          "Passe format : comptez les lignes de la synthèse (5 maximum) ; vérifiez que chaque recommandation a action, responsable et échéance.",
        ],
      },
      {
        title: 'Relecture croisée par Claude',
        actions: [
          "Ouvrez Claude, collez le texte et la feuille KPI, puis demandez : « Signale toute phrase qui affirme une cause non démontrée par ces chiffres, et tout chiffre du texte absent du tableau. »",
          "Corrigez chaque point signalé et notez la version finale dans le Journal.",
        ],
      },
    ],
    example: {
      title: 'Corrections apportées au premier jet — fil rouge',
      lines: [
        "Premier jet : « La hausse est due à une augmentation tarifaire de Transco Sarl. » → Corrigé : « Transco Sarl concentre 99,7 % de la hausse nette ; la part prix et la part volume restent à confirmer avec le service achats. »",
        "Premier jet : « une hausse de près de 50 % » → Corrigé : « + 44,2 % » (arrondi trompeur).",
        "Premier jet : « Le budget annuel risque d'être dépassé de 30 000 USD » → Supprimé (extrapolation hors semestre).",
      ],
    },
    result: "Un texte dont chaque chiffre est coché dans la feuille KPI, sans aucune causalité non démontrée, au format exigé par le gabarit.",
    pitfall: "Coller le texte de l'IA directement dans le gabarit parce qu'il « sonne juste » : c'est la phrase la plus convaincante qui contient le plus souvent l'affirmation non prouvée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 6',
    title: 'Ouvrir le gabarit et rédiger la section 1 — Synthèse exécutive',
    intro: "Le gabarit 04-templates/gabarit-rapport-analyse-donnees.docx impose six sections. La première est la seule que certains membres du comité liront : 5 lignes maximum, le constat chiffré principal, pour un lecteur qui ne lira rien d'autre.",
    steps: [
      {
        title: 'Préparer le fichier',
        actions: [
          "Copiez le gabarit dans 03_Livrables et renommez-le 2026-07-08_rapport_depenses_logistiques_S1.docx.",
          "Remplacez chaque texte entre crochets ; supprimez les phrases d'aide en italique une fois la section remplie.",
        ],
      },
      {
        title: 'Rédiger la section 1',
        actions: [
          "Ligne 1 : la question de gestion. Lignes 2-4 : le constat chiffré (total, site, fournisseur). Ligne 5 : la réserve ou ce qui reste à vérifier.",
          "Relisez à voix haute : moins de 30 secondes.",
        ],
      },
    ],
    example: {
      title: 'Section 1 — Synthèse exécutive (version finale)',
      lines: [
        "Question : quel site ou fournisseur explique la hausse des dépenses logistiques du T2 2026 ?",
        "Après nettoyage (1 doublon retiré, 1 montant manquant exclu), les dépenses passent de 32 550 USD au T1 à 46 950 USD au T2, soit + 14 400 USD (+ 44,2 %).",
        "Le site de Goma porte la hausse : 17 300 → 35 250 USD (+ 103,8 %), alors que Bukavu et Kinshasa baissent.",
        "Transco Sarl concentre + 14 350 USD, soit 99,7 % de la hausse nette, sur le transport routier (2 → 4 trajets, + 24,7 % par trajet) et un dédouanement de 5 400 USD.",
        "La hausse est concentrée sur avril-mai ; ses causes restent à confirmer avec le service achats.",
      ],
    },
    result: "Une synthèse de 5 lignes, chiffrée, lisible en moins de 30 secondes, qui répond à la question sans affirmer de cause non prouvée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 6',
    title: 'Remplir les sections 2 et 3 — KPI et comparatifs',
    intro: "La section 2 est un tableau à quatre colonnes (KPI, Valeur, Période, Lecture) ; la section 3 liste trois comparatifs, un constat chiffré par ligne, sans interprétation. Règle du gabarit : jamais un chiffre sans période et sans lecture associée.",
    steps: [
      {
        title: 'Section 2 — tableau des KPI',
        actions: [
          "Remplacez les trois lignes d'exemple du tableau par vos trois KPI principaux.",
          "Colonne Période : toujours explicite (T1 / T2 2026).",
          "Colonne Lecture : une proposition factuelle, reprise de la feuille KPI.",
        ],
      },
      {
        title: 'Section 3 — trois comparatifs',
        actions: [
          "Comparatif 1 : par site. Comparatif 2 : par fournisseur. Comparatif 3 : par catégorie de dépense.",
          "Une ligne chacun, chiffrée, sans verbe de cause.",
        ],
      },
    ],
    table: {
      columns: ['KPI', 'Valeur', 'Période', 'Lecture'],
      rows: [
        ['Coût total logistique', '32 550 → 46 950 USD (+ 44,2 %)', 'T1 / T2 2026', 'Hausse de 14 400 USD, portée par Goma'],
        ['Coût moyen par commande Transco', '3 250 → 5 470 USD (+ 68,3 %)', 'T1 / T2 2026', 'Mélange volume et prix : voir comparatif 2'],
        ['Part de Transco dans le coût total', '39,9 % → 58,3 %', 'T1 / T2 2026', 'Dépendance accrue à un seul fournisseur'],
      ],
    },
    example: {
      title: 'Section 3 — comparatifs (version finale)',
      lines: [
        "Comparatif 1 — Sites : Goma + 17 950 USD (+ 103,8 %) ; Bukavu − 2 250 USD (− 28,5 %) ; Kinshasa − 1 300 USD (− 17,7 %).",
        "Comparatif 2 — Fournisseurs : Transco Sarl + 14 350 USD (99,7 % de la hausse nette) ; transport routier 2 → 4 trajets, 4 400 → 5 487,5 USD par trajet.",
        "Comparatif 3 — Catégories : transport routier + 13 900 USD (+ 63,2 %) ; dédouanement + 4 150 USD (+ 129,7 %) ; entreposage − 3 650 USD (− 49,7 %).",
      ],
    },
    result: "Sections 2 et 3 remplies : trois KPI avec période et lecture, trois comparatifs chiffrés, tous présents dans la feuille KPI contrôlée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 6',
    title: 'Remplir les sections 4 et 5 — Visualisation et recommandations',
    intro: "La section 4 associe un graphique à chaque message ; la section 5 transforme le constat en trois actions classées par priorité, chacune avec un responsable et une échéance. C'est la section qui déclenche la décision du comité.",
    steps: [
      {
        title: 'Section 4',
        actions: [
          "Remplissez le tableau Message / Type de graphique / Notes avec les deux graphiques de la procédure 6.",
          "Collez les deux images sous le tableau, avec leur texte de remplacement.",
        ],
      },
      {
        title: 'Section 5',
        actions: [
          "Priorité 1 : l'action qui vérifie l'hypothèse la plus coûteuse (ici, les factures Transco).",
          "Priorité 2 : l'action qui agit sur le coût futur (consultation, renégociation).",
          "Priorité 3 : l'action qui fiabilise les données pour la prochaine analyse.",
          "Pour chaque action : un verbe d'action, une fonction responsable, une date précise.",
        ],
      },
    ],
    table: {
      columns: ['Action recommandée', 'Responsable', 'Échéance'],
      rows: [
        ['P1 — Vérifier les 5 factures Transco du T2 (dont le dédouanement de 5 400 USD du 07/05 et les trajets des 02/04 et 09/04) contre bons de commande et contrat', 'Responsable achats', '17/07/2026'],
        ['P2 — Obtenir de Transco la justification du coût par trajet (+ 24,7 %) et consulter 3 transporteurs sur l\'axe Goma', 'Logisticien de Goma', '31/07/2026'],
        ['P3 — Fiabiliser la saisie (liste fournisseurs, montant obligatoire, requête Power Query mensuelle) et récupérer la facture Kivu Freight du 12/03', 'Chargée administrative et logistique', '05/08/2026'],
      ],
    },
    result: "Section 4 : deux graphiques documentés. Section 5 : trois actions priorisées, chacune vérifiable à une date donnée par une personne identifiée.",
    tip: "Une recommandation sans responsable ni date n'est pas une recommandation, c'est un souhait : le comité ne peut ni la voter ni la suivre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 6',
    title: 'Faire valider le rapport et le diffuser',
    intro: "La section 6 « Validation » du gabarit matérialise une règle simple : aucun chiffre ne part au comité sans avoir été relu par une deuxième personne. Un chiffre faux corrigé après diffusion coûte beaucoup plus cher qu'avant.",
    steps: [
      {
        title: 'Relecture par une deuxième personne',
        actions: [
          "Envoyez au relecteur le rapport ET la feuille KPI, avec une liste de 5 chiffres clés à vérifier.",
          "Demandez-lui de recalculer au moins deux de ces chiffres lui-même depuis T_Propre.",
          "Intégrez ses corrections et notez la relecture dans le Journal.",
        ],
      },
      {
        title: 'Finaliser et diffuser',
        actions: [
          "Section 6 : complétez « Rédigé par (nom, fonction) » et « Date ».",
          "Vérifiez la longueur : 2 pages maximum, graphiques inclus ; placez le diagnostic et le journal en annexe séparée.",
          "Fichier > Enregistrer sous > PDF ; envoyez le PDF la veille du comité, jamais la conversation avec l'IA.",
        ],
      },
    ],
    example: {
      title: 'Validation et diffusion — fil rouge',
      lines: [
        "Chiffres envoyés à P. Mumbere pour vérification : 32 550 / 46 950 / + 44,2 % / 35 250 Goma / 14 350 Transco",
        "Patrick recalcule le total T2 et l'écart Transco : conformes. Relecture notée au Journal le 08/07/2026.",
        "Section 6 : Rédigé par Amani Kahindo, chargée administrative et logistique — 08/07/2026",
        "PDF envoyé à la directrice pays le jeudi 09/07/2026 à 16 h, pour le comité du 10/07.",
      ],
    },
    result: "Un rapport de 2 pages, relu, signé, daté, diffusé en PDF la veille du comité, avec son dossier de preuve (diagnostic, journal, classeur) archivé dans 03_Livrables.",
    pitfall: "Faire relire « le rapport » sans dire quoi vérifier : le relecteur corrige les virgules et laisse passer le trimestre mal borné. Donnez-lui toujours la liste des chiffres à recalculer.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Du fichier brut au jeu de données fiable',
    scenario: "Rappel : export de 26 lignes reçu le lundi 6 juillet 2026, comité budgétaire le vendredi 10 juillet, consigne unique « regarde ce qu'on peut en tirer ». Voici le raisonnement complet d'Amani, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Cadrage', body: "Avant d'ouvrir une IA, Amani transforme la consigne en question de gestion validée par écrit : quel site ou fournisseur explique la hausse du T2, volume ou prix, quelle action.", result: 'Question validée le 06/07 à 11 h 40.' },
      { title: 'Diagnostic', body: "Prompt CLARTE avec colonne Ligne, puis contre-vérification par NB.SI.ENS, SI(cellule vide), ESTNUM et NOMPROPRE(SUPPRESPACE()). Cinq anomalies : doublon 14-15, montant vide 16, dates texte 16 et 19, libellé « transco sarl  » ligne 20. Aucune colonne inutile.", result: 'Score de qualité 22 / 26 = 84,6 %.' },
      { title: 'Vérification', body: "Une seule facture TS-2026-0312 pour les lignes 14-15 : la ligne 15 est une double saisie. Facture de la ligne 16 introuvable : demande envoyée au fournisseur." },
      { title: 'Nettoyage et industrialisation', body: "Suppression de la ligne 15, montant 16 laissé vide avec statut, dates converties, libellés normalisés, colonnes Mois et Trimestre ; même résultat obtenu par la requête Power Query Depenses_Propres.", result: '25 lignes, 79 500 USD = 82 800 − 3 300.' },
    ],
    table: {
      columns: ['Contrôle', 'Brut', 'Propre'],
      rows: [
        ['Lignes', '26', '25'],
        ['Total (USD)', '82 800', '79 500'],
        ['Fournisseurs distincts', '5 libellés', '4'],
        ['Vraies dates', '24', '25'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — De la question aux chiffres',
    scenario: "Le jeu propre est rapproché. Amani déroule maintenant les sous-questions dans l'ordre, chaque chiffre étant produit par ChatGPT Data Analysis puis recontrôlé par tableau croisé dynamique.",
    steps: [
      { title: 'Quelle hausse ?', body: 'T1 32 550 USD → T2 46 950 USD : + 14 400 USD, + 44,2 %.' },
      { title: 'Quel site ?', body: 'Goma + 17 950 USD (+ 103,8 %), contribution 124,7 % ; Bukavu − 2 250 ; Kinshasa − 1 300. Goma explique plus que la hausse nette.' },
      { title: 'Quel fournisseur ?', body: 'Transco Sarl + 14 350 USD, 99,7 % de la hausse nette ; part du coût total 39,9 % → 58,3 %. Kivu Freight + 2 500 avec réserve (T1 incomplet).' },
      { title: 'Volume ou prix ?', body: "Le calcul global (« 77 % prix ») est trompeur car il mélange des prestations. Par catégorie : transport routier 2 → 4 trajets (effet volume 8 800 USD) et + 24,7 % par trajet (effet prix 4 350 USD) ; dédouanement 900 → 5 400 USD ; entreposage − 3 300 USD." },
      { title: 'Hausse durable ?', body: 'Pic sur avril-mai (35 750 USD sur deux mois), juin revient à 11 200 USD : aucune extrapolation annuelle possible.' },
      { title: 'Ce que les données ne disent pas', body: "Pourquoi Transco a fait deux fois plus de trajets, pourquoi le coût par trajet et le dédouanement ont augmenté : hypothèses à vérifier sur pièces, pas conclusions." },
    ],
    result: "Réponse à la question : la hausse du T2 est portée par Goma et facturée quasi intégralement par Transco Sarl, par une combinaison de volume (trajets doublés) et de prix (+ 24,7 % par trajet, dédouanement atypique), concentrée sur avril-mai.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Le rapport remis au comité',
    scenario: "Voici le contenu final du gabarit tel qu'il a été diffusé en PDF le 9 juillet 2026. Deux pages, graphiques inclus ; diagnostic et journal en annexe.",
    steps: [
      { title: '1. Synthèse exécutive', body: "Dépenses logistiques T2 2026 : 46 950 USD contre 32 550 au T1 (+ 14 400 USD, + 44,2 %), après retrait d'un doublon et exclusion d'un montant manquant. Goma porte la hausse (+ 103,8 %) ; Transco Sarl en concentre 99,7 %. Hausse concentrée sur avril-mai ; causes à confirmer." },
      { title: '2. KPI', body: 'Coût total 32 550 → 46 950 USD ; coût moyen par commande Transco 3 250 → 5 470 USD ; part de Transco 39,9 % → 58,3 %.' },
      { title: '3. Comparatifs', body: 'Sites (Goma + 17 950) ; fournisseurs (Transco + 14 350) ; catégories (transport routier + 13 900, dédouanement + 4 150, entreposage − 3 650).' },
      { title: '4. Visualisation', body: 'Barres groupées site × trimestre (« Goma double ses dépenses au T2 ») ; barres horizontales des écarts fournisseurs (« Transco Sarl représente 99,7 % de la hausse nette »).' },
      { title: '5. Recommandations', body: 'P1 vérifier les 5 factures Transco du T2 — Responsable achats — 17/07/2026. P2 justification tarifaire et consultation de 3 transporteurs — Logisticien de Goma — 31/07/2026. P3 fiabiliser la saisie et récupérer la facture Kivu Freight du 12/03 — Chargée administrative et logistique — 05/08/2026.' },
      { title: '6. Validation', body: 'Rédigé par Amani Kahindo, chargée administrative et logistique, le 08/07/2026 ; chiffres clés recalculés par le responsable achats.' },
    ],
    result: "Décision du comité du 10/07 (exemple) : les trois actions sont adoptées ; le paiement de la facture de dédouanement du 07/05 est suspendu jusqu'à la vérification P1.",
    tip: "Gardez ce corrigé comme modèle : sur votre prochain export, seuls les noms, les chiffres et la question changeront, la structure du raisonnement reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Reproduire le pipeline complet sur la grille du module',
    instructions: "Ouvrez 04-templates/grille-diagnostic-nettoyage-donnees.xlsx (feuille « Données brutes ») et refaites l'analyse du fil rouge par vous-même, sans regarder les diapositives de procédure. Comparez ensuite votre travail avec le corrigé intégral : l'objectif est de savoir refaire chaque étape seul.",
    steps: [
      {
        title: 'Diagnostic',
        actions: [
          "Rédigez votre propre prompt CLARTE adapté au fichier (26 lignes, colonnes réelles) et exécutez-le.",
          "Listez au minimum les quatre anomalies avec leur ligne exacte, dans un tableau type / ligne(s) / valeur observée / correction proposée.",
          "Contre-vérifiez avec les colonnes F à J de la grille et vos propres formules de libellé.",
        ],
      },
      {
        title: 'Nettoyage et analyse',
        actions: [
          "Nettoyez le jeu de données (à la main ou avec un prompt STAR) et produisez le tableau de rapprochement brut / propre.",
          "Calculez le total par site pour chaque trimestre, la variation en % et le fournisseur dont le coût total a le plus augmenté.",
          "Contrôlez chaque chiffre par tableau croisé dynamique.",
        ],
      },
      {
        title: 'Rapport final',
        actions: [
          "Rédigez la synthèse exécutive et la recommandation avec un prompt STAR adapté à vos résultats (comité, trois minutes de lecture).",
          "Complétez le gabarit gabarit-rapport-analyse-donnees.docx, sections 1 à 6.",
        ],
      },
    ],
    deliverable: "Le tableau de diagnostic, les totaux calculés par site et par trimestre, et le rapport complété — 2 pages maximum pour le rapport, KPI et graphique(s) recommandé(s) inclus.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Même fichier, nouvelle question de gestion",
    instructions: "Le comité pose une question complémentaire : « Quelle catégorie de dépense explique la hausse du T2, et faut-il revoir les conditions de dédouanement ? » Utilisez votre jeu propre (ou la requête Power Query) et refaites les procédures 5 à 7 pour cette nouvelle question.",
    steps: [
      {
        title: 'Cadrer et calculer',
        actions: [
          "Réécrivez la question en une phrase avec périmètre, comparaison, indicateur et décision.",
          "Construisez un TCD Catégorie × Trimestre, avec Somme et Nombre de Montant.",
          "Calculez écart, variation %, contribution et coût moyen par opération pour chaque catégorie.",
          "Isolez le dédouanement par fournisseur et par mois.",
        ],
      },
      {
        title: 'Visualiser et conclure',
        actions: [
          "Choisissez un graphique adapté au message (comparaison de catégories → barres).",
          "Rédigez une synthèse de 3 lignes et une recommandation avec responsable et échéance.",
        ],
      },
    ],
    tip: "Points de contrôle : transport routier + 13 900 USD (+ 63,2 %), dédouanement + 4 150 USD (+ 129,7 %), entreposage − 3 650 USD (− 49,7 %). Si vos chiffres diffèrent, revoyez d'abord votre nettoyage.",
    deliverable: 'Un tableau KPI par catégorie contrôlé par TCD, un graphique titré par son message, et une demi-page de synthèse et recommandation.',
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre export',
    instructions: "Appliquez le pipeline complet à un export réel de votre service (achats, caisse, carburant, stocks, suivi terrain Kobo ou ODK…), dans le respect des règles d'usage des données de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Obtenez une question de gestion validée par écrit par votre responsable.",
          "Créez l'arborescence Source / Travail / Livrables et la feuille Journal.",
          "Anonymisez si nécessaire et retirez les colonnes inutiles à la question.",
        ],
      },
      {
        title: 'Exécuter',
        actions: [
          "Diagnostic CLARTE + formules de contrôle + échantillon vérifié + score de qualité.",
          "Nettoyage Excel puis requête Power Query réutilisable, rapprochée au total près.",
          "KPI calculés par l'IA et contrôlés par TCD ; deux graphiques orientés message.",
          "Rapport dans le gabarit, relu par une deuxième personne.",
        ],
      },
    ],
    deliverable: "Le rapport de 2 pages en PDF, la requête Power Query documentée et le Journal de l'analyse — prêts à être réutilisés au prochain export.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre tableau de diagnostic cite les lignes 15 (doublon de la 14), 16 (montant vide et date texte), 19 (date texte) et 20 (libellé Transco), et indique qu'aucune colonne n'est inutile.",
      "Votre tableau de rapprochement donne 25 lignes et 79 500 USD, soit 82 800 − 3 300.",
      "La ligne 16 est conservée avec un statut explicite et un montant vide — jamais 0.",
      "Vos totaux par trimestre sont 32 550 USD (T1) et 46 950 USD (T2), identiques entre l'IA et le TCD.",
      "Goma ressort à + 17 950 USD (+ 103,8 %) et Transco Sarl à + 14 350 USD (99,7 % de la hausse nette).",
      "Votre analyse volume / prix est faite au niveau de la catégorie, pas seulement sur le coût moyen global.",
      "Chaque graphique a un titre qui énonce la conclusion, un axe à zéro et une source.",
      "Votre synthèse fait 5 lignes maximum, sans aucune cause affirmée non démontrée ni extrapolation au-delà du semestre.",
      "Chacune de vos 3 recommandations a une action, un responsable et une échéance datée.",
      "La section Validation est remplie et un second lecteur a recalculé au moins deux chiffres clés.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Demander une analyse sans question de gestion : « analyse ce fichier » produit un résultat générique. Écrivez et faites valider la question avant d'ouvrir l'IA.",
      "Faire confiance à un nettoyage automatique sans vérifier un échantillon : un doublon apparent peut être deux commandes réelles. Vérifiez 5 à 10 lignes contre les pièces avant de supprimer.",
      "Laisser l'IA numéroter les lignes elle-même : ajoutez une colonne Ligne avec les numéros Excel d'origine avant tout dépôt.",
      "Remplacer un montant manquant par 0 : la moyenne s'effondre et crée une fausse hausse. Laissez vide, ajoutez un statut, mentionnez l'exclusion.",
      "Dédoublonner en incluant une colonne d'identifiant unique : rien n'est supprimé et personne ne s'en aperçoit. Contrôlez toujours le nombre de lignes avant / après.",
      "Appliquer NOMPROPRE ou « Mettre en majuscule chaque mot » à des sigles : utilisez une table de correspondance pour les noms officiels.",
      "Conclure « hausse de prix » à partir d'un coût moyen tous services confondus : décomposez volume / prix par catégorie de prestation.",
      "Demander « un graphique » sans message : vous obtenez un camembert à onze parts. Écrivez le message, puis choisissez le visuel.",
      "Confondre corrélation et causalité : « Transco concentre 99,7 % de la hausse » est un constat ; « la hausse est due aux tarifs de Transco » est une hypothèse à vérifier.",
      "Extrapoler un pic de deux mois sur l'année : regardez toujours la série mensuelle avant de parler de tendance.",
      "Diffuser un rapport sans relecture des chiffres clés par une deuxième personne : un chiffre faux devant un comité coûte bien plus cher à corriger après coup.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez transformé une consigne floue en question de gestion validée par écrit, et organisé une copie de travail tracée par un Journal.",
      "Vous avez produit un tableau de diagnostic de 5 anomalies localisées à la ligne près, contre-vérifié par formules, et un score de qualité de 84,6 %.",
      "Vous avez nettoyé le fichier (doublon, montant manquant, dates, libellés) et prouvé le résultat par un rapprochement : 25 lignes, 79 500 USD.",
      "Vous avez construit une requête Power Query qui rejoue tout le nettoyage en un clic sur les prochains exports.",
      "Vous avez calculé et contrôlé les KPI qui répondent à la question : + 14 400 USD au T2, Goma + 103,8 %, Transco 99,7 % de la hausse, effets volume et prix par catégorie, pic d'avril-mai.",
      "Vous avez construit deux graphiques orientés message et les avez passés au test des cinq secondes.",
      "Vous avez rédigé avec l'IA, corrigé et fait valider un rapport de 2 pages avec synthèse de 5 lignes et 3 recommandations datées.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais lister les quatre défauts qui rendent un jeu de données brut inexploitable et les retrouver dans un fichier.",
      "Je sais formuler une question de gestion avant de demander une analyse à l'IA, plutôt qu'un résumé générique.",
      "Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.",
      "J'ai utilisé au moins deux prompts CLARTE / STAR du module, adaptés à mes propres données.",
      "Je sais écrire une formule de détection de doublons (NB.SI.ENS) et construire une requête Power Query de nettoyage.",
      "Je sais contrôler un chiffre produit par l'IA avec un tableau croisé dynamique.",
      "Je sais choisir un type de graphique en fonction du message à transmettre, pas par défaut.",
      "J'ai complété le gabarit de rapport avec une synthèse exécutive et une recommandation priorisée fondées uniquement sur mes chiffres calculés.",
      "J'ai vérifié à la main un échantillon des corrections proposées par l'IA avant de les valider.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot ». Vous y apprendrez à confier à l'IA, sans être développeur, l'automatisation de tâches internes — renommage en masse, fusion de fichiers, mini-outils — en décrivant, testant et vérifiant chaque résultat, comme vous venez de le faire pour vos chiffres.",
  },
]
