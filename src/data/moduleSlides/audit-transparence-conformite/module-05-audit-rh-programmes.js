// Module 05 — Audit des RH & Programmes
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Audit des RH & Programmes',
    hook: "Un nom bien réel sur la liste de paie, un contrat en règle, des bulletins sans erreur — et pourtant personne, sur le terrain, qui puisse confirmer avoir déjà vu cette personne travailler. Ce module vous apprend à repérer ce genre de signal et à comprendre pourquoi un problème RH est presque toujours aussi un problème de programme.",
  },
  {
    type: 'objectives',
    items: [
      "Auditer un échantillon de paie (salaires, cotisations, indemnités) en le confrontant systématiquement aux dossiers RH et aux présences réelles constatées sur le terrain.",
      "Identifier les red flags classiques d'une fraude à la paie, en particulier le schéma du \"ghost worker\" (employé fantôme).",
      "Vérifier la cohérence entre présences, congés et heures supplémentaires, et interpréter les heures sup récurrentes comme un signal à double lecture (financier ET programmatique).",
      "Contrôler la conformité programmatique d'une activité : réalisé vs planifié, ciblage réel des bénéficiaires.",
      "Mener une investigation structurée sur une anomalie RH sans tirer de conclusion hâtive avant d'avoir croisé plusieurs sources indépendantes.",
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi l'audit RH/Programme n'est pas un audit financier bis",
    body: [
      "Beaucoup d'auditeurs juniors abordent l'audit RH comme une simple extension de l'audit financier : on prend la liste de paie, on vérifie les montants, on classe. C'est une erreur de méthode qui laisse passer l'essentiel.",
      "Un problème RH est presque toujours aussi un signal programmatique, et parfois un signal de fraude. Un employé listé sur la paie que personne ne peut décrire précisément n'est pas qu'une ligne comptable suspecte — c'est potentiellement une activité non supervisée, et donc un programme qui tourne avec moins de ressources humaines réelles que ce qui est rapporté au bailleur.",
    ],
    highlight: "L'audit RH/Programme ne se clôt jamais uniquement sur un constat financier : il doit toujours se prolonger jusqu'à \"qu'est-ce que ça signifie pour la mise en œuvre réelle du programme ?\"",
  },
  {
    type: 'stat-callout',
    stat: '3 red flags',
    caption: "les schémas classiques d'une fraude à la paie",
    context: "Employés fantômes, cotisations détournées, indemnités sans base contractuelle — le signal est rarement dans les documents, il est dans l'écart avec le terrain.",
  },
  {
    type: 'comparison-table',
    title: "Les red flags classiques d'un audit de paie",
    columns: ['Red flag', 'Comment il se manifeste', 'Comment le détecter'],
    rows: [
      ['Ghost worker (employé fantôme)', "Une personne reste sur la liste de paie sans être présente sur le terrain — ancien employé jamais retiré, personne fictive, ou proche d'un responsable", "L'écart entre le document de paie et la réalité physique du terrain, jamais dans les documents eux-mêmes"],
      ['Cotisations sociales mal calculées ou détournées', "Retenues sur le salaire brut mais jamais reversées, ou calculées sur une base erronée", "Croiser le montant retenu sur le bulletin avec le récépissé de versement à l'organisme"],
      ['Indemnités sans base contractuelle claire', "Prime de risque, de déplacement ou de responsabilité versée sans avenant ni note de service", "Vérifier qu'un document contractuel justifie le principe et le montant de chaque indemnité récurrente"],
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi les heures supplémentaires sont un signal à double lecture',
    body: "Des heures supplémentaires qui reviennent mois après mois, sur la même équipe, signalent presque toujours l'une de ces deux réalités, parfois les deux à la fois : un sous-effectif chronique (le programme a été planifié avec un effectif insuffisant pour le volume d'activité réel), ou une manipulation des heures (enregistrées pour gonfler artificiellement une rémunération).",
    highlight: "Un audit RH sérieux ne s'arrête jamais à \"les heures sup sont-elles payées au bon taux\" — il pose toujours la question programmatique en parallèle : pourquoi cette équipe a-t-elle besoin de ces heures ?",
  },
  {
    type: 'process',
    title: "Auditer un échantillon de paie et un échantillon programmatique",
    steps: [
      { title: 'Constituer un échantillon de paie représentatif', body: 'Mélangez postes de terrain, de supervision et administratifs — un échantillon biaisé sur les postes visibles laisse passer les fraudes de l\'encadrement.' },
      { title: 'Croiser chaque ligne avec le dossier RH', body: 'Le contrat de travail dit ce qui est autorisé ; la feuille de paie ne dit que ce qui a été payé. Tout écart non expliqué est une anomalie.' },
      { title: 'Vérifier la présence physique réelle, pas la feuille signée', body: 'Cherchez une confirmation indépendante : rapport de supervision, témoignage croisé, photo datée — jamais la feuille de présence seule.' },
      { title: 'Analyser les schémas d\'heures supplémentaires par équipe', body: 'Signalez à la fois comme point RH (conformité du paiement) et comme point programmatique (le plan d\'activité est-il réaliste ?).' },
      { title: 'Contrôler le réalisé contre des preuves terrain indépendantes', body: 'Un rapport d\'activité est une déclaration, pas une preuve — échantillonnez 10 à 15% des activités et cherchez une preuve terrain distincte.' },
      { title: 'Vérifier le ciblage réel des bénéficiaires', body: 'Contrôlez la correspondance aux critères d\'éligibilité du projet, pas à une logique de proximité relationnelle.' },
      { title: 'Formaliser la conclusion avant toute communication', body: 'Ne communiquez jamais un soupçon avant d\'avoir croisé au moins deux sources indépendantes.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Ghost worker (employé fantôme)', definition: 'Personne présente sur la liste de paie mais absente ou inexistante sur le terrain — le red flag central de ce module.' },
      { term: 'Réalisé vs planifié', definition: "Comparaison entre ce qu'un programme a effectivement livré et ce qui était prévu dans le document de projet — l'outil de base du contrôle programmatique." },
      { term: 'Ciblage des bénéficiaires', definition: "Vérification que les personnes réellement assistées correspondent aux critères d'éligibilité du projet, et non à une logique de favoritisme." },
      { term: 'Vérification terrain indépendante', definition: "Contrôle mené par une source distincte du rapport d'activité lui-même — sans elle, un rapport de programme n'est qu'une déclaration non vérifiée." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Un nom sur la paie, personne sur le terrain, Nippes, Haïti"',
    scenario: "Jonas M., \"agent de suivi communautaire\", est payé à taux plein depuis 5 mois. Son contrat est en règle, son dossier RH complet. Mais aucun des trois derniers rapports de supervision ne mentionne sa présence, et son nom n'apparaît sur aucune liste d'émargement des réunions communautaires. Trois hypothèses restent également plausibles à ce stade : ghost worker, problème de couverture documentaire, ou réaffectation informelle non actée.",
    steps: [
      "Ne rien communiquer en dehors du canal d'audit tant que deux sources indépendantes convergentes ne sont pas réunies — une fuite peut déclencher une fabrication de preuves.",
      "Élargir la fenêtre de vérification à 6 mois et croiser avec un document totalement distinct du circuit RH/supervision.",
      "Interroger le superviseur direct en dernier, jamais en premier — commencer par les sources les plus périphériques.",
      "Chercher activement l'explication la plus bénigne (réaffectation informelle) avant de conclure à la fraude.",
      "Formaliser un soupçon de ghost worker uniquement quand deux sources indépendantes convergent, avec la référence précise de chaque source.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Auditer la paie uniquement sur pièces, sans jamais vérifier la présence physique sur le terrain — un dossier impeccable ne dit rien du travail réellement effectué.",
      "Accepter un rapport d'activité programme sans échantillon de vérification terrain indépendant — c'est laisser l'audité auditer lui-même son propre travail.",
      "Ignorer des heures supplémentaires récurrentes en les qualifiant de \"normales\" — c'est soit un sous-effectif chronique, soit une manipulation des heures.",
      "Conclure à la fraude dès le premier signal, sans chercher l'explication la plus bénigne — cela expose l'auditeur à une accusation infondée.",
      "Se limiter à l'échantillon de paie initial sans jamais l'élargir quand un signal apparaît — un ghost worker isolé est rare, un schéma organisé impliquant plusieurs personnes est le cas qui compte financièrement.",
    ],
  },
  {
    type: 'exercise',
    title: 'Grille paie & présences et fiche de contrôle programmatique',
    instructions: "Complétez grille-audit-paie-presences.xlsx en simulant l'échantillon du cas de Jonas M. : salaire payé identique au contractuel (aucun écart financier), statut de présence \"non confirmé\" sur les 3 dernières périodes, et vérifiez que le drapeau \"risque ghost worker\" se déclenche. Ajoutez au moins 3 autres lignes fictives plausibles et une équipe avec un schéma d'heures sup récurrent. Remplissez ensuite fiche-controle-programmatique-realise-planifie.docx avec une conclusion qui distingue explicitement le niveau de preuve atteint (soupçon documenté vs. fraude confirmée).",
    deliverable: "Les deux fichiers complétés, avec une conclusion distinguant ce qui est prouvé de ce qui reste à vérifier.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi l'audit RH/Programme ne peut jamais se limiter à un contrôle financier de la paie.",
      "Je sais citer les red flags classiques d'un audit de paie, en particulier le schéma du ghost worker.",
      "Je sais pourquoi des heures supplémentaires récurrentes doivent toujours être lues comme un signal RH ET programmatique.",
      "Je sais dans quel ordre interroger mes sources lors d'une investigation RH sensible.",
      "Je ne communique jamais un soupçon de fraude avant d'avoir croisé au moins deux sources indépendantes.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 06 — Prévention de la Fraude & Politique Anti-Corruption.',
  },
]
