// Module 08 — Systèmes d'Information & Reporting Logistique
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Systèmes d'Information & Reporting Logistique",
    hook: "Un chiffre qui ne déclenche aucune décision ne sert à rien, même parfaitement calculé. Ce dernier module vous apprend à construire un tableau de bord et un rapport qui font vraiment confiance au siège dans votre gestion du terrain.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer la logique de 3 indicateurs logistiques clés, ou KPI (Key Performance Indicator — un chiffre suivi dans le temps parce qu'il doit déclencher une décision précise) : taux de rupture de stock, coût par bénéficiaire, lead time (délai d'approvisionnement).",
      "Distinguer un rapport logistique mensuel de routine d'un SitRep (Situation Report, un rapport court déclenché par un événement), et savoir dans quel cas produire lequel.",
      "Situer le rôle de MIMOSA comme système de gestion des actifs et des stocks dans l'écosystème des outils logistiques humanitaires.",
      "Identifier les données brutes minimales nécessaires pour construire un tableau de bord logistique fiable et exploitable par le siège.",
      "Reconnaître, avant qu'elles ne polluent un rapport envoyé au siège, les erreurs de saisie qui rendent un calcul automatique non fiable.",
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi un logisticien senior s'intéresse aux chiffres",
    body: "Beaucoup de logisticiens juniors considèrent le reporting comme une corvée administrative qu'on fait en fin de mois \"parce que le siège le demande\". Un KPI logistique n'est pas un chiffre pour rassurer un bailleur — c'est un signal qui doit déclencher une décision précise. Si vous ne savez pas quelle décision un chiffre est censé provoquer, ce chiffre ne sert à rien, même parfaitement calculé.",
    highlight: "Je ne demande jamais un indicateur à mon équipe sans savoir d'avance ce que je ferai selon qu'il soit bon ou mauvais. Un tableau de bord qui ne débouche sur aucune décision est du temps perdu à produire, et du temps perdu à lire.",
  },
  {
    type: 'concept',
    title: 'Le taux de rupture de stock',
    body: "Le taux de rupture de stock mesure la proportion de commandes ou de contrôles où un article essentiel n'était pas disponible au moment où il était nécessaire : (nombre de lignes en rupture) / (nombre total de lignes de commande ou de contrôle) × 100. Un taux qui dépasse le seuil d'alerte (typiquement 5 à 10 %) doit remettre en question votre point de commande et votre stock de sécurité, pas seulement votre fournisseur.",
    highlight: "Piège classique : publier un taux global sans le ventiler par site. Un taux global de 4 % peut cacher un site à 25 % de rupture pendant que les autres sont à zéro — la moyenne masque le problème que le siège doit précisément voir.",
  },
  {
    type: 'concept',
    title: 'Le coût par bénéficiaire',
    body: "Le coût par bénéficiaire rapporte le coût logistique total d'une activité (transport, stockage, manutention) au nombre de bénéficiaires effectivement atteints. Ce n'est pas un indicateur de performance individuelle, c'est un indicateur d'efficience de la chaîne : un coût qui grimpe d'un mois sur l'autre sans que le contexte ait changé signale une inefficience à corriger (sur-stockage, camions mal remplis, ruptures répétées).",
    highlight: "Piège classique : comparer un coût par bénéficiaire entre deux contextes radicalement différents (route bitumée vs. pont aérien) sans le signaler — le chiffre brut, sans son contexte d'accès, induit le lecteur en erreur.",
  },
  {
    type: 'concept',
    title: "Le lead time (délai d'approvisionnement)",
    body: "Le lead time mesure le temps écoulé entre le moment où une commande est passée et le moment où elle est effectivement livrée sur site. Le lead time moyen observé doit directement fixer votre stock de sécurité et le moment où vous déclenchez une nouvelle commande : si votre lead time moyen est de 21 jours et que vous ne commandez qu'au moment où le stock atteint zéro, vous êtes structurellement en rupture trois semaines par cycle.",
    highlight: "Piège classique : calculer un lead time moyen sur des commandes de nature très différente (un container maritime et une pièce détachée par coursier) — segmentez toujours par type d'approvisionnement.",
  },
  {
    type: 'comparison-table',
    title: 'Rapport mensuel de routine et SitRep : deux documents, deux objectifs',
    columns: ['', 'Rapport mensuel de routine', 'SitRep'],
    rows: [
      ['Déclenché par', 'Un calendrier fixe (début de mois)', 'Un événement (urgence, incident, rupture critique)'],
      ['Question à laquelle il répond', 'Comment évoluons-nous ?', 'Que se passe-t-il maintenant et qu\'attendez-vous de moi ?'],
      ['Format', 'KPI sur la durée, tendance, état des ressources, priorités du mois suivant', 'Court, factuel, daté et horodaté précisément, lisible en moins de deux minutes'],
    ],
  },
  {
    type: 'concept',
    title: 'MIMOSA : un système de gestion des actifs et des stocks',
    body: "MIMOSA est un système d'information propriétaire utilisé par plusieurs organisations humanitaires internationales pour la gestion des actifs et le suivi des stocks à l'échelle d'une mission ou d'un siège. Vous n'y aurez pas nécessairement accès en dehors d'une organisation qui l'a déployé.",
    highlight: "C'est un outil de traçabilité à l'échelle organisationnelle, complémentaire — et non concurrent — des tableaux de bord KPI que vous construisez vous-même en local : la logique des indicateurs reste la même, que la donnée vienne d'un tableur maison ou d'un système comme MIMOSA.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'KPI', definition: "Key Performance Indicator : indicateur clé de performance, un chiffre suivi dans le temps parce qu'il doit déclencher une décision précise." },
      { term: 'Lead time', definition: "Délai entre la commande et la livraison effective d'un article ou d'un lot." },
      { term: 'Taux de rupture de stock', definition: "Proportion de commandes ou de contrôles où un article requis n'était pas disponible." },
      { term: 'SitRep (Situation Report)', definition: "Rapport court, déclenché par un événement, décrivant une situation, son impact et les besoins immédiats." },
    ],
  },
  {
    type: 'process',
    title: 'Construire et faire vivre un tableau de bord logistique mensuel',
    steps: [
      { title: 'Centraliser les données brutes en continu', body: "Dans tableau-de-bord-kpi-logistique.xlsx, à chaque livraison ou incident — jamais en une seule séance de fin de mois. Un tableau rempli rétroactivement de mémoire est un tableau faux." },
      { title: 'Standardiser la saisie avant de calculer quoi que ce soit', body: "Mêmes noms de site orthographiés à l'identique, dates au même format, statuts limités aux valeurs prévues — un TCD ne détecte pas \"Goma\" et \"GOMA \" comme le même site." },
      { title: 'Lire les KPI déjà calculés', body: "La feuille Tableau de bord KPI calcule automatiquement le taux de rupture global, le lead time moyen et le coût par bénéficiaire, plus un récapitulatif par site pour repérer celui qui tire la moyenne vers le bas." },
      { title: 'Actualiser plutôt que reconstruire', body: "Avec Power Query, si les données viennent de plusieurs sources : un clic sur \"Actualiser tout\" réintègre les nouvelles lignes chaque mois." },
      { title: 'Interpréter avant de reporter', body: "Un taux de rupture de 6 % ne veut rien dire seul : est-ce en hausse ou en baisse, au-dessus du seuil toléré ? C'est cette contextualisation qui doit apparaître dans le rapport." },
      { title: 'Rédiger et diffuser le rapport mensuel selon le calendrier convenu', body: "Avec gabarit-rapport-logistique-mensuel.docx, à échéance fixe — un rapport envoyé avec deux semaines de retard perd une grande partie de sa valeur." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le rapport mensuel de Maiduguri, Nigeria"',
    scenario: "Coordinateur(trice) logistique sur quatre sites, vous devez produire sous 5 jours le rapport mensuel attendu par le siège, mais personne n'a tenu le tableau de bord à jour. Vous récupérez en vrac : un export de livraisons avec le même site orthographié de trois façons différentes, un carnet papier photographié listant 8 livraisons et 2 ruptures d'intrants nutritionnels jamais saisies, un message signalant un camion immobilisé 9 jours sans incident formellement consigné, et un coût logistique total du mois non ventilé par site.",
    steps: [
      "Saisir les données reconstituées en appliquant la standardisation : un seul nom de site, un seul format de date, un statut parmi les trois valeurs prévues.",
      "Lister à part les informations \"à confirmer\" avant diffusion officielle, notamment le coût logistique non ventilé par site.",
      "Identifier, dans le récapitulatif par site, lequel des quatre sites tire le taux de rupture global vers le haut, et proposer l'action corrective correspondante.",
      "Intégrer au rapport mensuel l'incident du camion immobilisé et les ruptures d'intrants nutritionnels comme risques à signaler, sans attendre qu'ils se noient dans le format de routine.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Publier un KPI sans point de comparaison — un taux de rupture de 8 % n'a aucun sens seul, sans le mois précédent et le seuil d'alerte de référence.",
      "Laisser la saisie incohérente polluer les agrégats — un même site orthographié de trois façons fait apparaître trois lignes distinctes, sans aucun message d'erreur visible.",
      "Attendre la fin du mois pour tout compiler — reconstituer un mois entier à partir de mémoire et de carnets papier génère systématiquement des oublis et des doublons.",
      "Noyer un incident critique dans le format mensuel de routine — un camion immobilisé 9 jours aurait parfois mérité un SitRep immédiat plutôt que d'attendre l'échéance mensuelle.",
      "Présenter un coût par bénéficiaire agrégé quand les contextes d'accès diffèrent fortement entre sites — un chiffre non ventilé expose à des questions du siège évitables.",
    ],
  },
  {
    type: 'exercise',
    title: 'Nettoyage des données, lecture des KPI et rapport mensuel',
    instructions: "À partir du cas de Maiduguri, saisissez dans tableau-de-bord-kpi-logistique.xlsx les données reconstituées en appliquant la standardisation (un seul nom de site, un format de date, trois statuts), et listez à part ce qui reste \"à confirmer\". Identifiez ensuite, dans le récapitulatif par site, lequel tire le taux de rupture global vers le haut et proposez une action corrective en une phrase. Complétez enfin gabarit-rapport-logistique-mensuel.docx avec le résumé exécutif, les KPI et leur tendance, l'incident du camion, les ruptures d'intrants nutritionnels et vos priorités pour le mois suivant.",
    deliverable: "Le tableau de bord et le rapport mensuel complétés, plus la note listant les informations à confirmer.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer, pour chacun des trois KPI logistiques du module, la décision opérationnelle qu'il doit déclencher.",
      "Je sais distinguer un rapport mensuel de routine d'un SitRep, et je sais lequel produire selon la situation.",
      "Je sais situer le rôle de MIMOSA dans l'écosystème des outils logistiques, sans confondre son usage avec celui de mon tableau de bord local.",
      "Je sais identifier une incohérence de saisie susceptible de fausser silencieusement un calcul automatique.",
      "J'ai construit un tableau de bord KPI fiable et rédigé un rapport logistique mensuel complet à partir de données brutes désordonnées.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Vous avez terminé les 8 modules de la formation en Logistique Humanitaire, des fondamentaux de la coordination jusqu'au reporting au siège. Le Module 01 vous a présenté le logisticien humanitaire comme le garant de la faisabilité : le tableau de bord fiable et le rapport clair que vous savez désormais produire sont le prolongement direct de ce rôle. Votre attestation de formation \"Logistique Humanitaire\", délivrée par BK-BOOST Ltd, sanctionne les huit modules parcourus.",
  },
]
