// Module 01 — Fondamentaux de l'Audit Interne ONG
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Fondamentaux de l'Audit Interne ONG",
    hook: "Une équipe qui vous voit arriver pense presque toujours \"l'inspecteur qui vient nous piéger\" — ce module vous donne le cadre professionnel qui change cette perception dès la première rencontre, et vous évite de confondre audit interne et simple contrôle hiérarchique.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer le rôle réel de l'audit interne — une activité d'assurance ET de conseil, indépendante et objective — et le distinguer clairement d'un contrôle hiérarchique ou d'une \"police interne\".",
      "Appliquer les principes fondateurs des Standards de l'IIA (Institute of Internal Auditors, l'organisme professionnel international de référence) à un contexte organisationnel humanitaire.",
      "Identifier les 5 composantes du référentiel COSO (Committee of Sponsoring Organizations of the Treadway Commission, le cadre de référence du contrôle interne) dans une structure terrain concrète, base par base.",
      "Garantir votre indépendance et votre objectivité en repérant, avant qu'ils ne vous explosent au visage, les conflits d'intérêt les plus classiques du secteur ONG.",
      "Distinguer, dans une situation réelle, ce qui relève de l'audit interne et ce qui relève du contrôle de gestion ou de la supervision hiérarchique directe.",
    ],
  },
  {
    type: 'concept',
    title: "Ce qu'est réellement l'audit interne",
    body: [
      "La définition de l'IIA (Institute of Internal Auditors, l'organisme international de référence de la profession) est claire : l'audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur la maîtrise de ses opérations, lui apporte ses conseils pour les améliorer, et contribue à créer de la valeur ajoutée.",
      "Indépendante : l'auditeur ne doit jamais être placé sous l'autorité hiérarchique directe de la personne ou de l'unité qu'il audite. Objective : il constate des faits vérifiables, pas des impressions — une conclusion qui commence par \"je pense que\" au lieu de \"les pièces justificatives montrent que\" n'est pas un audit. Assurance ET conseil : l'audit vérifie ET aide à améliorer, ce ne sont pas deux métiers séparés.",
    ],
    highlight: "La confusion la plus coûteuse sur le terrain : on vous présente comme \"l'auditeur\", l'équipe entend \"l'inspecteur qui vient nous piéger\". Cette confusion détermine si on vous parle honnêtement ou si on vous récite une version nettoyée de la réalité.",
  },
  {
    type: 'concept',
    title: "Ce que l'audit interne n'est PAS",
    body: "Ce n'est pas le contrôle de gestion, qui suit les écarts budgétaires au quotidien, en soutien direct à la ligne managériale. Ce n'est pas non plus la supervision hiérarchique : un Field Coordinator qui valide les dépenses de son équipe exerce son rôle de manager, pas une fonction d'audit interne. L'audit interne se distingue par trois critères cumulatifs : la périodicité (une mission ponctuelle et documentée, pas un suivi continu), l'indépendance vis-à-vis de la ligne opérationnelle auditée, et un mandat formel donné par une autorité au-dessus de celle-ci.",
  },
  {
    type: 'concept',
    title: 'Le cadre professionnel IIA : deux familles de normes',
    body: [
      "Le référentiel professionnel de l'IIA — l'IPPF (International Professional Practices Framework) — repose sur un Code de Déontologie et deux grandes familles de normes. Les normes de qualification définissent qui peut auditer et dans quelles conditions : indépendance de la fonction, objectivité individuelle, compétence. Concrètement, votre fonction d'audit doit disposer d'une charte d'audit signée par la Direction ou le Conseil, qui fixe votre rattachement hiérarchique, votre périmètre et votre droit d'accès à toute information.",
      "Les normes de fonctionnement définissent comment on conduit une mission : planification basée sur les risques, réalisation des travaux, communication des résultats, suivi des plans d'action — en particulier l'obligation de formaliser une lettre de mission avant tout travail de terrain.",
    ],
    highlight: "La crédibilité de vos conclusions dépend directement de la rigueur perçue de votre méthode : un bailleur ou un audit externe cherchera toujours une charte, une lettre de mission, une trace de planification basée sur les risques.",
  },
  {
    type: 'stat-callout',
    stat: '5 composantes',
    caption: 'Le référentiel COSO du contrôle interne',
    context: "Elles ne fonctionnent jamais isolément : un environnement de contrôle excellent avec des activités de contrôle inexistantes ne protège rien, ce n'est qu'une façade.",
  },
  {
    type: 'comparison-table',
    title: 'Les 5 composantes COSO traduites en exemples ONG',
    columns: ['Composante COSO', 'Ce qu\'elle signifie', 'Exemple terrain concret'],
    rows: [
      ['Environnement de contrôle', 'Le "ton donné au sommet" — éthique, valeurs, structure et politiques RH', 'Le Directeur Pays applique-t-il lui-même la politique de délégation de signature, ou signe-t-il "au feeling" ?'],
      ['Évaluation des risques', 'Identification et analyse structurée des risques qui menacent les objectifs', 'Une base a-t-elle un registre de risques couvrant la fraude sur salaires ou le détournement de carburant — ou le découvre-t-on après le scandale ?'],
      ['Activités de contrôle', 'Politiques et procédures garantissant l\'exécution des décisions — séparation des tâches, autorisations, réconciliations', 'La personne qui commande n\'est jamais celle qui réceptionne ni celle qui valide le paiement.'],
      ['Information et communication', 'Circulation fiable et à temps de l\'information, en interne comme vers l\'externe', 'Un mécanisme de signalement existe-t-il, est-il connu de tous, et quelqu\'un y a-t-il déjà eu recours sans représailles ?'],
      ['Activités de pilotage', 'Suivi dans le temps de l\'efficacité réelle du contrôle interne, dont l\'audit interne lui-même', 'Les recommandations de la mission précédente ont-elles un plan d\'action suivi et clôturé, ou dorment-elles depuis 8 mois ?'],
    ],
  },
  {
    type: 'concept',
    title: 'La tension entre indépendance et proximité terrain',
    body: [
      "Le secteur ONG fonctionne avec un vivier de professionnels relativement restreint et une forte rotation de postes. Il n'est pas rare qu'un auditeur se retrouve à auditer un bureau où il a lui-même travaillé, ou une équipe qu'il connaît personnellement.",
      "Trois menaces classiques à l'indépendance : la menace d'auto-révision (auditer un système que vous avez vous-même mis en place), la menace de familiarité (auditer des personnes avec qui vous entretenez une relation proche), et la menace de plaidoyer (défendre implicitement une équipe plutôt que l'évaluer objectivement).",
    ],
    highlight: "Ce que l'auditeur senior fait différemment du junior : il identifie ces menaces AVANT d'accepter la mission, les déclare formellement à son autorité de rattachement, et propose une mesure de mitigation concrète.",
  },
  {
    type: 'process',
    title: 'Se positionner et cadrer sa première mission',
    steps: [
      { title: 'Vérifier sa propre indépendance avant d\'accepter', body: 'Ai-je un lien antérieur — professionnel, hiérarchique ou personnel — avec l\'unité ou les personnes à auditer ? Si oui, documentez-le et remontez-le avant d\'accepter formellement.' },
      { title: 'Établir sa légitimité dès l\'arrivée (Jour 1)', body: 'Réunion d\'ouverture : montrez votre mandat, expliquez que vous cherchez des failles de système, pas des coupables.' },
      { title: 'Scoper précisément le périmètre (Jour 1-2)', body: 'Objectifs, périmètre exact et approche par les risques par écrit — un scoping trop large est le piège le plus commun des juniors.' },
      { title: 'Rédiger et faire valider la lettre de mission (Jour 2)', body: 'Complétez lettre-de-mission-audit-interne.docx : périmètre, objectifs, déclaration d\'indépendance, livrables. Faites-la signer AVANT le premier entretien.' },
      { title: 'Réaliser un premier diagnostic COSO (Jour 3-4)', body: 'Notez chaque sous-critère de 1 à 5 dans grille-evaluation-composantes-coso.xlsx pour savoir où concentrer vos tests détaillés.' },
      { title: 'Planifier entretiens et collecte documentaire (Jour 4-5)', body: 'Dans l\'ordre où l\'information est critique, pas dans l\'ordre de disponibilité des personnes — et communiquez la liste à l\'avance.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'IIA', definition: "Institute of Internal Auditors — organisme professionnel international qui édicte les Standards de référence de l'audit interne." },
      { term: 'IPPF', definition: "International Professional Practices Framework — le cadre de référence complet de l'IIA : Code de déontologie, normes de qualification et de fonctionnement." },
      { term: 'COSO', definition: 'Référentiel de contrôle interne structuré en 5 composantes, largement utilisé pour évaluer la maîtrise des opérations d\'une organisation.' },
      { term: 'Charte d\'audit', definition: 'Document fondateur, validé par la Direction ou le Conseil, qui fixe le mandat, le rattachement hiérarchique et les droits d\'accès de la fonction d\'audit interne.' },
      { term: 'Lettre de mission', definition: 'Document formel propre à CHAQUE mission d\'audit, qui en fixe le périmètre, les objectifs et les modalités avant tout travail de terrain.' },
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — \"Le conflit d'intérêt hérité, Goma, RDC\"",
    scenario: "Vous venez d'être nommé(e) auditeur(rice) interne et devez auditer le cycle achats-logistique du bureau de Goma. Vous réalisez que c'est exactement le bureau où vous avez travaillé comme Log Manager il y a un peu plus d'un an — vous y avez vous-même validé une partie des procédures d'achat aujourd'hui dans le périmètre, et l'équipe compte encore trois personnes que vous avez recrutées ou supervisées, dont un Logistics Officer avec qui vous étiez proche. Le comité d'audit du siège ignorait ce passé.",
    steps: [
      "Identifier les menaces applicables : auto-révision (vous auditez vos propres procédures passées) et familiarité (relation proche avec l'équipe actuelle).",
      "Ne pas accepter la mission en silence : documenter le conflit par écrit et le remonter au comité d'audit avant tout déplacement.",
      "Proposer une option de mitigation concrète : recours à un pair auditeur, maintien avec supervision renforcée sur les zones sensibles, ou report de la mission.",
      "Si le maintien avec supervision renforcée est retenu, l'intégrer explicitement dans la lettre de mission avant le premier entretien.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Confondre audit interne et contrôle de gestion / supervision hiérarchique — cela dilue la valeur ajoutée spécifique de l'audit : l'indépendance et la périodicité formalisée.",
      "Accepter une mission où l'indépendance est manifestement compromise sans le signaler — un conflit découvert plus tard détruit la crédibilité de tout le rapport.",
      "Auditer sans lettre de mission formelle validée en amont — sans ce document, aucun mandat opposable si votre légitimité est contestée en cours de mission.",
      "Se laisser dicter les conclusions avant même d'avoir terminé les tests — céder à ce type de pression, même implicite, détruit immédiatement votre valeur professionnelle.",
      "Traiter l'audité comme un suspect plutôt que comme un partenaire de la démarche de conseil — un ton accusateur ferme l'accès à l'information la plus utile.",
    ],
  },
  {
    type: 'exercise',
    title: "Analyse du conflit d'intérêt et lettre de mission",
    instructions: "En vous appuyant sur les trois menaces à l'indépendance (auto-révision, familiarité, plaidoyer), identifiez précisément les risques du cas de Goma et expliquez en 2-3 phrases pourquoi chacun compromettrait vos conclusions. Rédigez ensuite une note d'une demi-page adressée au comité d'audit, déclarant le conflit et proposant une option de mitigation justifiée. Enfin, en supposant l'option \"maintien avec supervision renforcée\" retenue, complétez lettre-de-mission-audit-interne.docx en y intégrant la déclaration d'indépendance et la mesure de mitigation.",
    deliverable: "L'analyse des risques, la note de déclaration, et la lettre de mission (une page maximum).",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer la différence entre une mission d'assurance et une mission de conseil en audit interne.",
      "Je peux citer les deux familles de Standards IIA et donner un exemple concret pour chacune.",
      "Je sais nommer les 5 composantes COSO et donner un exemple ONG concret pour chacune.",
      "Je sais identifier les trois menaces classiques à l'indépendance dans une situation réelle.",
      "Je sais rédiger une lettre de mission complète avant tout déplacement terrain.",
      "Je sais distinguer, dans une situation ambiguë, l'audit interne du contrôle de gestion ou de la supervision hiérarchique.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 02 — Contrôles Internes : Séparation des Tâches & Matrices d'Autorisation.",
  },
]
