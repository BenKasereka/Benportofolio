// Module 06 — Préparation & Réussite des Audits Financiers
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Préparation & Réussite des Audits Financiers',
    hook: "Un audit ne sanctionne pas l'absence totale d'erreurs — aucune organisation n'y échappe. Il juge votre capacité à détecter vos propres erreurs, à les documenter et à les corriger. Ce module vous montre comment transformer un audit redouté en une simple vérification de routine, préparée onze mois à l'avance.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer ce qu'un auditeur externe (un contrôleur indépendant qui vérifie vos comptes et vos procédures) cherche réellement, pour arrêter de le vivre comme une menace et commencer à le traiter comme un exercice normal du métier.",
      "Constituer et maintenir à jour, tout au long de l'année, un dossier d'audit complet et organisé par catégorie.",
      "Répondre à une question ou une demande d'un auditeur de façon professionnelle — sans se braquer, sans improviser, sans sur-expliquer.",
      "Rédiger un plan d'action correctif (le document qui transforme chaque observation d'audit en engagement vérifiable : action, responsable, délai, preuve) rigoureux, avec des délais réellement vérifiables.",
      "Distinguer un finding (une observation formelle consignée par l'auditeur) mineur d'un finding qui doit remonter immédiatement à votre coordination pays et à votre siège.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce qu\'un auditeur externe cherche réellement',
    body: [
      "La première chose à désapprendre est l'idée que l'auditeur est venu vous piéger. Il vient se former une opinion défendable sur deux choses : vos états financiers reflètent-ils fidèlement la réalité de vos opérations, et vos procédures ont-elles été respectées avec une constance suffisante pour qu'on puisse faire confiance aux chiffres qu'elles produisent.",
      "Un auditeur qui trouve une pièce manquante ne cherche pas à humilier qui que ce soit — il cherche à savoir si c'est un incident isolé ou le symptôme d'un contrôle interne qui ne tient pas.",
    ],
    highlight: "Un audit ne juge pas votre organisation sur l'absence totale d'erreurs, mais sur sa capacité à détecter ses propres erreurs, à les documenter, et à les corriger avant qu'elles ne deviennent systémiques.",
  },
  {
    type: 'concept',
    title: 'La préparation continue bat toujours la préparation de dernière minute',
    body: [
      "Il y a deux façons de vivre un audit : apprendre la date de la mission six semaines à l'avance et lancer une course effrénée pour retrouver des factures égarées ; ou ouvrir un dossier déjà à jour, transformant la mission en simple vérification plutôt qu'en fouille archéologique.",
      "La différence ne se joue jamais pendant les six semaines de préparation — elle se joue pendant les onze mois qui précèdent. Un dossier d'audit se construit en continu, comme sous-produit naturel d'une comptabilité bien tenue mois après mois.",
    ],
    highlight: "Le dossier d'audit n'est pas un livrable, c'est un état permanent — un Finance Manager senior se demande \"sommes-nous prêts ?\" à chaque clôture mensuelle, pas seulement quand l'auditeur annonce sa venue.",
  },
  {
    type: 'comparison-table',
    title: "Les catégories d'audit que vous rencontrerez",
    columns: ["Type d'audit", 'Qui le déclenche', 'Ce qu\'il vérifie principalement'],
    rows: [
      ['Audit financier annuel (statutaire)', "Obligation légale du pays d'enregistrement, ou politique interne", "Sincérité des états financiers globaux de l'organisation, sur l'ensemble de l'exercice"],
      ['Audit de projet / bailleur', "Le bailleur de fonds (USAID, ECHO, agences ONU...), prévu dans l'accord", 'Conformité des dépenses aux règles du bailleur, éligibilité des coûts, respect du budget approuvé'],
      ['Single Audit (type USAID/2 CFR 200)', "Obligation fédérale américaine au-delà d'un seuil de financement cumulé", "Contrôle interne global de l'organisation bénéficiaire, pas seulement un projet isolé"],
      ['Audit interne / spot-check', 'Votre propre siège, ou le bailleur en cours de projet', 'Vérification ciblée sur un point précis (caisse, procurement, paie), sans opinion formelle globale'],
    ],
  },
  {
    type: 'checklist',
    title: "Les 4 éléments d'un plan d'action correctif solide",
    items: [
      "Un constat précis — la cause racine réellement comprise après investigation, pas une reformulation vague du finding de l'auditeur.",
      "Une action concrète — ce qui va réellement changer (\"mettre en place une checklist de réception obligatoire\"), jamais \"sensibiliser l'équipe\".",
      "Un responsable nommé — une personne identifiée par son nom et sa fonction, jamais \"l'équipe finance\" ou \"le bureau\".",
      "Un délai vérifiable et une preuve de clôture — une date précise, et un document qui prouvera que l'action a réellement eu lieu.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '5 jours ouvrés',
    caption: "Délai recommandé pour transmettre un plan d'action correctif après réception du rapport",
    context: "Même incomplet sur certains points encore en investigation, un plan transmis rapidement est toujours mieux perçu qu'un silence de plusieurs semaines.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Finding (constat d\'audit)', definition: "Une observation formelle de l'auditeur, classée par niveau de sévérité (mineur, significatif, majeur), consignée dans le rapport ou la management letter." },
      { term: 'Management letter', definition: "Document distinct du rapport d'audit, où l'auditeur détaille ses recommandations sur le contrôle interne — il appelle directement un plan d'action correctif." },
      { term: "Scope de l'audit", definition: "Le périmètre exact couvert par la mission — projet(s), période, rubriques budgétaires concernées. À demander systématiquement avant de préparer un dossier." },
      { term: "Piste d'audit (audit trail)", definition: "La capacité à retracer, document par document, le chemin complet d'une transaction depuis son engagement jusqu'à son paiement et son enregistrement comptable." },
      { term: 'Séparation des tâches (segregation of duties)', definition: "Principe selon lequel une même personne ne doit jamais cumuler deux rôles clés d'une même transaction (par exemple demander et approuver un achat)." },
    ],
  },
  {
    type: 'process',
    title: "De la clôture mensuelle à la clôture d'audit",
    steps: [
      { title: 'Tenir la checklist à jour à chaque clôture mensuelle', body: 'Un statut "Manquant" identifié en mars se corrige en une heure ; le même statut découvert en décembre peut coûter des jours entiers.' },
      { title: "Obtenir le scope exact dès l'annonce d'une mission", body: "Période, projet(s), rubriques, type d'audit — avant de mobiliser qui que ce soit." },
      { title: 'Consolider le dossier en fonction du scope confirmé', body: 'Vérifiez ligne par ligne que chaque document "Disponible" est réellement accessible et à jour, pas seulement coché.' },
      { title: "Briefer l'équipe avant l'arrivée de l'auditeur", body: 'On répond avec les documents en main, jamais de mémoire ; on ne devine jamais une réponse ; toute question sensible se transmet au Finance Manager.' },
      { title: 'Répondre aux demandes selon une méthode fixe', body: 'Vérifier le fait avant de répondre, répondre précisément sans sur-expliquer, consigner chaque demande reçue et chaque document transmis.' },
      { title: "Ouvrir et suivre le plan d'action jusqu'à preuve de clôture", body: 'Transcrire chaque finding sous 5 jours ouvrés, puis reprendre le plan à chaque revue mensuelle jusqu\'à clôture documentée de toutes les actions.' },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Réunir les pièces seulement au moment où l'auditeur les demande — reconstituer six mois de rapprochements bancaires en une semaine produit toujours un travail de moins bonne qualité qu'un dossier tenu au fil de l'eau.",
      "Répondre à une question d'auditeur sans vérifier les faits avant de répondre — une réponse incorrecte donnée avec assurance nuit beaucoup plus à la crédibilité qu'un délai de réponse assumé calmement.",
      "Classer un plan d'action correctif comme \"clos\" sans échéance vérifiable ni preuve documentée — un point coché de bonne foi sans preuve n'est pas différent, pour un auditeur, d'un point resté ouvert.",
      "Traiter tous les findings comme équivalents et les classer par ordre d'apparition dans le rapport — la priorisation doit suivre le risque de récurrence et de fraude, pas l'ordre du rapport ni le seul montant en cause.",
      "Corriger le symptôme sans documenter la cause racine ni couvrir toute l'équipe concernée — cela garantit presque toujours de revoir le même finding l'année suivante, avec la mention aggravante \"finding répété non résolu\".",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Audit externe annuel, Port-au-Prince"',
    scenario: "ONG internationale en Haïti depuis six ans, trois projets, deux bailleurs. L'audit financier annuel statutaire vient de se conclure après deux semaines de mission. Votre checklist de dossier d'audit était tenue à jour depuis le début de l'exercice, ce qui a rendu la mission fluide — mais le rapport final contient trois findings à traiter sous 10 jours ouvrés.",
    steps: [
      "Finding 1 — pièce justificative manquante : un paiement de 1 850 USD ne dispose que du bon de commande et du reçu, le bon de livraison signé est introuvable.",
      "Finding 2 — séparation des tâches insuffisante : le même Assistant Logistique a initié ET approuvé cinq achats, en l'absence du Coordinateur Terrain sans délégation formelle.",
      "Finding 3 — écart de caisse non expliqué : 42 USD d'écart constaté en présence de l'auditeur, dernier rapprochement formel vieux de trois semaines.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice noté — traiter trois findings',
    instructions: "Pour chacun des trois findings, formulez en 2-3 phrases l'hypothèse de cause racine la plus probable, en vous appuyant sur le contexte donné. Remplissez ensuite le plan-action-correctif-recommandations-audit.docx pour les trois findings, en veillant à ce que chaque action soit concrète et vérifiable, chaque responsable nommé par fonction, et chaque délai assorti d'une preuve de clôture. Indiquez enfin lequel des trois findings vous semble le plus urgent à traiter en premier, et pourquoi, en tenant compte du risque de récurrence plutôt que du seul montant financier.",
    deliverable: "Le plan d'action correctif complété pour les trois findings, avec une note d'une demi-page justifiant votre priorisation.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer ce qu'un auditeur externe cherche réellement dans une mission d'audit.",
      "Je sais distinguer un audit statutaire, un audit de projet/bailleur, un Single Audit et un spot-check interne.",
      "Je tiens une checklist de dossier d'audit mise à jour à chaque clôture mensuelle, pas seulement avant une mission.",
      "Je sais comment répondre à une question d'auditeur sans improviser et sans sur-expliquer.",
      "Je sais construire un plan d'action correctif avec constat, cause racine, action concrète, responsable nommé, délai et preuve de clôture.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 07 — Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé.',
  },
]
