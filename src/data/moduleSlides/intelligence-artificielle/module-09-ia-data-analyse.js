// Module 09 — IA pour la Data & l'Analyse — De la donnée brute à la décision
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "IA pour la Data & l'Analyse — De la donnée brute à la décision",
    hook: "Un fichier brut n'est jamais prêt à être analysé — et \"résume-moi ce fichier\" n'est jamais la bonne question à poser à une IA.",
  },
  {
    type: 'objectives',
    items: [
      'Diagnostiquer avec l\'IA les défauts d\'un jeu de données brut (doublons, valeurs manquantes, formats incohérents, colonnes inutiles) avant toute exploitation.',
      'Formuler une demande d\'analyse orientée décision plutôt qu\'une demande de résumé générique, en précisant la question de gestion en amont.',
      'Générer avec l\'IA des formules Excel, des règles de validation et des étapes Power Query pour nettoyer un jeu de données.',
      'Produire des KPI, des comparatifs et des recommandations de visualisation pertinents pour un message de gestion précis.',
      'Transformer un résultat d\'analyse en rapport de gestion structuré, avec synthèse exécutive et recommandation actionnable.',
    ],
  },
  {
    type: 'concept',
    title: 'Ce qui rend un jeu de données brut inexploitable',
    body: "Un export Excel ou CSV qui sort d'un système d'achat, d'une caisse ou d'un suivi terrain n'est presque jamais prêt à être analysé tel quel. Ce travail de diagnostic et de nettoyage est fastidieux et répétitif — c'est précisément pour cela qu'il est mal fait ou pas fait : personne n'a le temps de vérifier ligne par ligne un fichier de 500 lignes.",
    highlight: "L'IA peut scanner l'intégralité d'un fichier en quelques secondes et signaler chaque anomalie avec sa position exacte — un travail qu'un humain ferait en une heure, ou mal en cinq minutes par lassitude.",
  },
  {
    type: 'checklist',
    title: 'Les quatre défauts qui reviennent systématiquement',
    items: [
      'Les doublons — une même dépense saisie deux fois, qui gonfle artificiellement les totaux si elle n\'est pas repérée.',
      'Les valeurs manquantes — une date, un montant ou un fournisseur laissé en blanc, qui fausse un calcul si non traité explicitement.',
      'Les formats incohérents — une colonne "date" mélangeant plusieurs formats selon qui a saisi la ligne, mal reconnue par un tableau croisé.',
      'Les colonnes inutiles ou redondantes — des champs qui n\'apportent rien à l\'analyse mais alourdissent le fichier.',
    ],
  },
  {
    type: 'concept',
    title: '"Fais-moi un résumé" contre "réponds à ma question de gestion"',
    body: "Demander \"résume-moi ce fichier de dépenses\" produit un résumé plat : nombre de lignes, quelques totaux — un résultat qui ne sert à rien pour décider. Demander \"quels sont les trois fournisseurs dont le coût moyen par commande a le plus augmenté, et cette hausse est-elle due au volume ou au prix ?\" produit une analyse orientée décision, dont le résultat mène directement à une action.",
    highlight: "Avant de déposer un fichier dans une IA, écrivez la question de gestion en une phrase. Si vous ne pouvez pas la formuler, ce n'est pas un problème d'outil — la question elle-même n'est pas encore claire.",
  },
  {
    type: 'concept',
    title: 'Deux méthodes de prompting pour ce module',
    body: "La norme CLARTE structure un prompt en six éléments : Contexte, Livrable attendu, Audience/rôle, Restrictions, Ton & style, Exemples. La méthode STAR s'applique aux cas demandant un raisonnement en plusieurs étapes : Situation, Tâche, Action, Résultat.",
  },
  {
    type: 'comparison-table',
    title: 'Les outils de ce module',
    columns: ['Outil', 'Ce qu\'il apporte'],
    rows: [
      ['Excel avec Copilot', 'Audite une feuille, propose des formules et des étapes Power Query en langage naturel, sans quitter le tableur.'],
      ['ChatGPT (Data Analysis)', 'Exécute réellement du code Python : statistiques exactes, détection de doublons ligne à ligne, graphiques.'],
      ['Claude (analyse de fichiers)', 'Lecture qualitative fine (incohérence de logique métier, synthèse rédigée) ; moins adapté au calcul chiffré volumineux.'],
      ['Power BI', 'Prend le relais d\'Excel quand un jeu de données doit être suivi dans la durée par plusieurs personnes.'],
    ],
  },
  {
    type: 'process',
    title: 'Le pipeline complet — du fichier brut au rapport de gestion',
    steps: [
      { title: 'Diagnostic initial (norme CLARTE)', body: 'Auditer le fichier tel quel : tableau de type de problème, nombre de lignes concernées, exemples précis, gravité — sans rien corriger à ce stade.' },
      { title: 'Nettoyage assisté (méthode STAR)', body: 'Formule Excel pour signaler les doublons, étapes Power Query pour uniformiser les dates, règle de validation pour les montants vides.' },
      { title: 'Analyse orientée décision (norme CLARTE)', body: 'Calculer les KPI qui répondent à la question de gestion — jamais "analyse ce fichier" seul, uniquement les chiffres et leur lecture factuelle.' },
      { title: 'Visualisation orientée message', body: 'Préciser le message que le graphique doit porter, laisser l\'IA en déduire le type de visuel adapté.' },
      { title: 'Rédaction du rapport final (méthode STAR)', body: 'Synthèse exécutive de 5 lignes maximum et recommandation en 3 points priorisés, fidèles aux chiffres, sans extrapolation.' },
    ],
  },
  {
    type: 'concept',
    title: 'Vérifier avant de passer à l\'étape suivante',
    body: "Le diagnostic n'est jamais la correction : on liste les anomalies (doublons, valeurs manquantes, formats de date, colonnes inutiles) sans rien modifier, puis on vérifie toujours un échantillon des anomalies signalées à la main avant de lancer le nettoyage réel.",
  },
  {
    type: 'comparison-table',
    title: 'Choisir le type de graphique selon le message',
    columns: ['Message à faire passer', 'Type de graphique recommandé'],
    rows: [
      ['Évolution d\'un montant ou d\'un volume dans le temps', 'Courbe (line chart)'],
      ['Comparaison de catégories entre elles (fournisseurs, sites)', 'Barres (bar chart)'],
      ['Répartition d\'un total en quelques parts (moins de 5-6 catégories)', 'Camembert, à utiliser avec parcimonie'],
      ['Comparaison de deux dimensions à la fois (site ET trimestre)', 'Barres groupées ou empilées'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'KPI (Key Performance Indicator)', definition: 'Indicateur chiffré directement relié à une décision de gestion, par opposition à une statistique descriptive sans finalité décisionnelle.' },
      { term: 'Score de qualité de données', definition: 'Mesure agrégée de la fiabilité d\'un jeu de données, calculée à partir des taux de doublons, de valeurs manquantes et d\'incohérences de format.' },
      { term: 'Power Query', definition: 'Moteur de transformation de données intégré à Excel et Power BI, qui enregistre une suite d\'étapes de nettoyage reproductibles.' },
      { term: 'Norme CLARTE', definition: 'Contexte, Livrable attendu, Audience/rôle, Restrictions, Ton & style, Exemples — structure d\'un prompt professionnel.' },
      { term: 'Méthode STAR', definition: 'Situation, Tâche, Action, Résultat — méthode de prompting pour un raisonnement en plusieurs étapes.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Étude de cas — "Export brut de dépenses logistiques, janvier-juin 2026"',
    scenario: "Un export de 26 lignes est transmis avant un comité budgétaire de vendredi, avec pour seule consigne : \"Peux-tu regarder ce qu'on peut en tirer ?\" Le fichier contient une ligne dupliquée, une colonne de dates au format incohérent, un montant manquant, et un fournisseur saisi deux fois avec une casse différente (Transco Sarl / transco sarl), ce qui le ferait compter comme deux fournisseurs distincts.",
    steps: [
      "Diagnostic : rédiger un prompt CLARTE adapté au fichier réel (26 lignes, colonnes réelles), lister les quatre anomalies avec leur ligne exacte, exhaustivité prioritaire sur la concision.",
      "Nettoyage et analyse : calculer le total des dépenses par site et par trimestre, la variation en %, et le fournisseur dont le coût a le plus augmenté.",
      "Rapport final : synthèse exécutive de 5 lignes et recommandation en 3 points priorisés pour un comité disposant de trois minutes de lecture, fondés uniquement sur les chiffres fournis.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      'Demander une analyse sans avoir défini la question de gestion en amont — "analyse ce fichier" produit un résultat générique et inexploitable.',
      'Faire confiance à un nettoyage automatique sans vérifier un échantillon à la main — un doublon apparent peut correspondre à deux commandes distinctes réelles.',
      'Demander "un graphique" sans préciser le message à faire passer — un camembert à onze catégories illisible plutôt qu\'une courbe ou des barres pertinentes.',
      'Confondre corrélation calculée et causalité affirmée — un rapport doit distinguer le constat chiffré de l\'explication qui reste à vérifier.',
      'Livrer un rapport de gestion sans avoir fait relire les chiffres clés par une deuxième personne.',
    ],
  },
  {
    type: 'exercise',
    title: 'Diagnostic, nettoyage et rapport sur l\'export de dépenses',
    instructions: "Ouvrez le fichier de dépenses logistiques et rédigez votre propre prompt de diagnostic (norme CLARTE) adapté à ses colonnes et son nombre de lignes réels ; listez les quatre anomalies avec leur ligne exacte. Nettoyez le jeu de données, calculez le total par site et par trimestre, la variation en % et le fournisseur dont le coût a le plus augmenté. Rédigez enfin la synthèse exécutive et la recommandation dans le gabarit de rapport, en appliquant la méthode STAR.",
    deliverable: 'Le tableau de diagnostic, les totaux calculés par site et par trimestre, et le rapport complété — un ensemble ne dépassant pas 2 pages, KPI et graphique(s) inclus.',
  },
  {
    type: 'recap',
    items: [
      'Je sais lister les quatre défauts qui rendent un jeu de données brut inexploitable.',
      'Je sais formuler une question de gestion avant de demander une analyse à l\'IA, plutôt que de demander un résumé générique.',
      'Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.',
      'Je sais choisir un type de graphique en fonction du message à transmettre, pas par défaut.',
      'J\'ai vérifié à la main un échantillon des corrections proposées par l\'IA avant de les valider.',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 10 — IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot.',
  },
]
