// Module 14 — Big Data Analysis avec Claude (avec Code)
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Big Data Analysis avec Claude (avec Code)',
    hook: "Reconnaître le moment où Excel ne suffit plus, et obtenir de Claude une analyse réellement exécutée sur vos données volumineuses ou croisées — sans écrire une ligne de code.",
  },
  {
    type: 'objectives',
    items: [
      "Reconnaître qu'un besoin d'analyse dépasse les limites pratiques d'Excel et de Power Query, plutôt que de forcer un fichier qui rame ou plante.",
      "Obtenir de Claude une analyse de données volumineuses ou croisées en décrivant le besoin en langage courant, sans écrire une seule ligne de code.",
      "Lire et vérifier un résultat produit par du code exécuté par l'IA, sans avoir besoin de savoir le lire ligne par ligne.",
      "Faire construire par Claude Code un pipeline de données automatisé et récurrent, capable de tourner chaque mois sans intervention manuelle.",
      "Superviser dans la durée une automatisation de données pour éviter qu'elle ne devienne une boîte noire non vérifiée.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce qui fait basculer d\'Excel vers ce module',
    body: "\"Big data\" est un terme marketing qui ne veut rien dire d'opérationnel en soi. La définition utile n'est pas une taille en gigaoctets mais un ensemble de symptômes concrets : un fichier qui devient lent ou qui plante, plusieurs fichiers sources qu'il faut croiser sans erreur manuelle, ou un calcul statistique qu'Excel ne fait pas nativement ou fait mal. Ce module donne le réflexe de reconnaître ce moment, et la méthode pour basculer vers un outil qui exécute réellement du code à votre place.",
  },
  {
    type: 'comparison-table',
    title: 'Grille de seuils de passage à l\'échelle',
    columns: ['Critère', 'Seuil indicatif de passage à l\'échelle'],
    rows: [
      ['Volume de lignes du fichier principal', "Au-delà d'environ 50 000 lignes, ou dès qu'un tableau croisé dynamique devient lent ou que le fichier plante à l'ouverture"],
      ['Nombre de fichiers sources à croiser', 'Plus de 2 fichiers à rapprocher sur une clé commune (site, commande, référence)'],
      ['Type de calcul demandé', "Un calcul qu'Excel ne fait pas nativement ou fait de façon fragile (écart-type pondéré, corrélation multi-variables, agrégation glissante)"],
    ],
  },
  {
    type: 'concept',
    title: "Ce qu'est concrètement l'exécution de code par Claude",
    body: [
      "Claude.ai dispose d'un outil d'analyse qui va au-delà de la conversation : quand vous déposez un fichier volumineux ou posez une question qui demande un calcul complexe, Claude peut écrire du code — le plus souvent en Python avec pandas — et l'exécuter réellement en arrière-plan sur le fichier fourni.",
      "Le résultat reçu n'est pas une estimation ou une explication générale : c'est la sortie réelle d'un calcul qui a effectivement tourné sur vos données. Cette capacité permet de traiter des fichiers de plusieurs centaines de milliers de lignes, de croiser plusieurs sources, et de produire des statistiques qu'aucune formule Excel ne calcule proprement — en décrivant le besoin en français.",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Exécution de code dans claude.ai vs Claude Code',
    columns: ['Outil', 'Usage'],
    rows: [
      ["Exécution de code dans claude.ai", "Ponctuelle et conversationnelle : vous déposez un fichier, posez une question, Claude exécute le calcul une fois et rend un résultat dans la conversation. Adaptée à une analyse unique."],
      ['Claude Code (CLI)', "Adaptée quand le même traitement doit se répéter sur des données qui changent : construit un script persistant, sauvegardé sur votre poste, réexécutable chaque mois sans redécrire le besoin."],
    ],
  },
  {
    type: 'concept',
    title: 'Le principe non-négociable de ce module',
    body: "Une seule règle prime sur toutes les autres, dans la continuité du principe de sécurité posé au Module 10 : ne jamais faire confiance à un résultat de code exécuté sans le vérifier sur un échantillon connu, et ne jamais laisser tourner une automatisation récurrente sans supervision périodique.",
    highlight: "L'exécution de code élimine l'erreur de calcul humaine — elle n'élimine pas une clé de jointure instable, une donnée source déjà fausse, ou une automatisation qui tourne sur un format de fichier qui a changé sans que personne ne l'ait signalé.",
  },
  {
    type: 'warning',
    title: 'Ce qu\'une automatisation qui tourne seule peut devenir',
    items: [
      "Une automatisation jamais revérifiée devient une \"boîte noire\" : elle produit un résultat avec la même confiance apparente, que ce résultat soit encore juste ou non.",
      "Un pipeline mis en service correctement en janvier peut produire un résultat silencieusement faux en juin si le format des fichiers sources a changé entre-temps.",
      "\"L'IA a exécuté du code\" ne veut pas dire \"le résultat est fiable\" : l'exécution garantit le calcul sur les données fournies, pas que ces données étaient correctes en amont.",
    ],
  },
  {
    type: 'process',
    title: 'Du fichier volumineux au pipeline supervisé',
    steps: [
      { title: 'Reconnaître le seuil de passage à l\'échelle', body: 'Vérifier la grille de critères avant de déposer quoi que ce soit dans un outil d\'IA — sinon rester dans Excel (Module 09).' },
      { title: 'Décrire à Claude le besoin d\'analyse', body: 'Déposer les fichiers et poser une question de gestion précise (norme CLARTE), en exigeant une exécution réelle du calcul.' },
      { title: 'Lire et vérifier le résultat produit', body: 'Faire expliquer le calcul en langage clair, obtenir un échantillon tracé jusqu\'aux fichiers sources, et le vérifier à la main.' },
      { title: 'Faire construire un pipeline récurrent', body: 'Une fois le besoin stabilisé et répétitif, demander à Claude Code un script réexécutable, avec un mode test.' },
      { title: 'Mettre en place une supervision périodique', body: 'Revérifier le pipeline au moins une fois par mois — format des fichiers, cohérence du résultat, délai depuis la dernière vérification.' },
    ],
  },
  {
    type: 'concept',
    title: 'Étape 3 en détail — la vérification qui valide le résultat',
    body: "Ne jamais diffuser un résultat de code exécuté sans l'avoir fait expliquer en langage clair, puis vérifié à la main sur un échantillon. Vous n'avez pas besoin de savoir lire le code : vous avez besoin de savoir ce qu'il a fait. Une fois l'échantillon reçu — tracé jusqu'aux lignes sources — ouvrez vous-même les fichiers d'origine et contrôlez à la main les lignes indiquées.",
    highlight: "C'est cette vérification manuelle, et non l'exécution du code en elle-même, qui valide le résultat.",
  },
  {
    type: 'checklist',
    title: 'Supervision mensuelle d\'un pipeline automatisé',
    items: [
      'Le format des fichiers sources a-t-il changé depuis la dernière vérification (nom de colonne, nombre de colonnes, format de date) ?',
      'Le résultat produit ce mois-ci est-il cohérent avec un contrôle manuel ponctuel sur un échantillon ?',
      'La date de dernière vérification du pipeline date-t-elle de moins de 30 jours ?',
      'Un pipeline non revérifié depuis plus de 30 jours doit être considéré comme non fiable, même s\'il a l\'air correct.',
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Pipeline de données', definition: "L'enchaînement complet et automatisé des étapes qui transforment un ou plusieurs fichiers bruts en un résultat exploitable, construit une fois par Claude Code puis réexécuté à l'identique." },
      { term: 'Jointure', definition: "L'opération qui croise plusieurs fichiers sources en rapprochant leurs lignes sur une clé commune — l'équivalent, plus robuste et plus rapide, d'une recherche RECHERCHEV répétée." },
      { term: 'Échantillon de vérification', definition: "Un sous-ensemble restreint (5 à 10 lignes) contrôlé à la main contre les fichiers sources pour confirmer la fiabilité d'un résultat avant diffusion." },
      { term: 'Boîte noire', definition: "Une automatisation qui continue de produire un résultat avec la même confiance apparente, sans que personne ne vérifie plus si ce résultat est encore juste." },
      { term: 'Seuil de passage à l\'échelle', definition: "Le point à partir duquel un besoin d'analyse dépasse ce qu'Excel et Power Query peuvent raisonnablement traiter." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Trois exports mensuels à croiser avant le comité"',
    scenario: "Un coordinateur logistique transmet trois fichiers CSV (juillet, août, septembre) à croiser sur le site de destination avant un comité trimestriel. La colonne \"site\" n'est pas identique d'un fichier à l'autre : GOMA-01, Goma01, GOMA 01 désignent le même site sous trois orthographes — non corrigées, elles produiraient trois lignes distinctes au lieu d'une seule.",
    steps: [
      "Déposer les trois fichiers dans Claude et exiger explicitement la détection des variantes de nom de site avant toute fusion.",
      "Faire présenter la liste des regroupements proposés, avec les valeurs brutes concernées, avant qu'ils ne soient appliqués.",
      "Une fois les regroupements validés, obtenir le tableau trimestriel trié par quantité totale décroissante, avec exécution réelle du calcul.",
      "Vérifier un échantillon tracé jusqu'aux fichiers sources, puis demander la détection des sites dont un mois s'écarte de plus de 40 % des deux autres.",
    ],
  },
  {
    type: 'exercise',
    title: 'Croisement trimestriel, vérification et cadrage du pipeline futur',
    instructions: "1) Déposez vos trois fichiers dans Claude (exécution de code) et rédigez un prompt CLARTE exigeant la détection des variantes de nom de site avant fusion. 2) Demandez une explication en langage clair et un échantillon de 8 à 10 lignes tracées jusqu'aux fichiers sources, puis vérifiez-le manuellement. 3) Faites détecter les sites dont le volume d'un mois s'écarte de plus de 40 % des deux autres, et complétez le gabarit gabarit-brief-pipeline-donnees-automatise.docx comme cadrage d'une future automatisation.",
    deliverable: "Le tableau trimestriel par site avec les regroupements de clé validés, la liste des anomalies de volume avec leur pourcentage d'écart, et le gabarit de brief de pipeline complété.",
  },
  {
    type: 'recap',
    items: [
      "Je sais reconnaître, à l'aide d'une grille de critères, qu'un besoin d'analyse dépasse les limites pratiques d'Excel.",
      "Je sais décrire à Claude un besoin d'analyse volumineuse ou croisée en langage courant, en exigeant une exécution réelle.",
      "Je sais demander une explication en langage clair d'un résultat de code exécuté et vérifier un échantillon tracé jusqu'aux sources.",
      "Je sais identifier et faire valider une incohérence de clé de jointure avant tout croisement automatique.",
      "Je sais faire construire par Claude Code un pipeline récurrent avec un mode test, et je sais pourquoi il doit être revérifié régulièrement.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 15 — Atelier Pratique : mini-projet certifiant par domaine.',
  },
]
