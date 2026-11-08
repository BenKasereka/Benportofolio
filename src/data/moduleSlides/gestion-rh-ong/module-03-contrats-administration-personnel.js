// Module 03 — Contrats de Travail & Administration du Personnel
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Contrats de Travail & Administration du Personnel',
    hook: "Un mauvais choix de contrat ou une procédure disciplinaire bâclée se transforme, des mois plus tard, en contentieux perdu devant l'inspection du travail — même quand le fond du dossier était légitime. Ce module vous donne les réflexes qui évitent ce piège.",
  },
  {
    type: 'objectives',
    items: [
      "Choisir le type de contrat adapté à une situation donnée (CDD, CDI, contrat d'expatriation) en connaissant les risques juridiques propres à chacun.",
      "Identifier un risque de requalification (transformation légale) d'un CDD en CDI avant qu'il ne se transforme en contentieux.",
      "Constituer un dossier individuel de personnel complet, correctement archivé et sécurisé, dès le premier jour de contrat.",
      "Conduire une procédure disciplinaire progressive et légale, sans jamais sauter une étape faute de temps ou de pression hiérarchique.",
      "Produire, à chaque étape disciplinaire, le document écrit qui protège à la fois l'employé et l'organisation.",
    ],
  },
  {
    type: 'concept',
    title: 'CDD, CDI, contrat d\'expatriation : trois logiques, trois niveaux de risque',
    body: [
      "Le CDD (Contrat à Durée Déterminée) est l'outil de la flexibilité contrôlée : remplacement d'un congé maternité, pic d'activité, poste lié à la durée d'un financement bailleur. Il n'est légal que s'il correspond à un motif réel et temporaire.",
      "Le CDI (Contrat à Durée Indéterminée) est la norme pour tout poste structurel de la mission. Il engage l'organisation sur la durée et implique des obligations de rupture plus lourdes — c'est le contrat qui protège le mieux l'employé national qui construit une carrière avec vous.",
      "Le contrat d'expatriation combine souvent un droit du siège et des conditions spécifiques à la mission (hardship, R&R — repos et récupération, assurance santé/évacuation, logement). Il expose à un risque juridique croisé : celui du droit local ET celui du droit applicable au contrat lui-même.",
    ],
    highlight: "Réutiliser le même gabarit de contrat pour trois situations qui n'ont rien à voir est l'erreur la plus fréquente d'un HR Officer junior sur le terrain.",
  },
  {
    type: 'comparison-table',
    title: 'Trois types de contrat, trois risques différents',
    columns: ['Type de contrat', 'Usage correct', 'Risque principal si mal géré'],
    rows: [
      ['CDD', 'Motif réel et temporaire (remplacement, pic d\'activité, durée liée à un financement)', 'Requalification automatique en CDI si renouvelé sans limite ni justification'],
      ['CDI', 'Tout poste structurel et permanent de la mission', 'Procédure de rupture plus lourde si mal anticipée dès l\'embauche'],
      ['Contrat d\'expatriation', 'Personnel international en mission, avec conditions spécifiques (hardship, évacuation, assurance)', 'Clauses de sécurité/santé absentes parce que copiées d\'un gabarit national'],
    ],
  },
  {
    type: 'concept',
    title: 'Le risque de requalification : la bombe à retardement du CDD répété',
    body: [
      "Un CDD renouvelé de façon répétée, sans motif objectif renouvelé à chaque fois, se transforme en CDI — automatiquement, et souvent rétroactivement, au moment où un inspecteur du travail ou un tribunal l'examine. L'organisation se retrouve alors face à une obligation de licenciement en bonne et due forme, avec préavis et indemnités calculés depuis la date du tout premier contrat.",
      "Ce risque se matérialise presque toujours de la même façon : un poste financé par un projet à durée limitée est reconduit CDD après CDD, parce que le financement est reconduit d'année en année. Après le troisième ou quatrième renouvellement, la réalité du poste n'est plus temporaire — c'est un poste permanent financé par un flux de projets qui se succèdent.",
    ],
    highlight: "Dès le deuxième renouvellement d'un CDD sur le même poste, demandez-vous si ce poste est réellement temporaire. Si la réponse est non, ouvrez la conversation sur un passage en CDI avant qu'une inspection du travail ne la tranche pour vous.",
  },
  {
    type: 'comparison-table',
    title: 'La séquence disciplinaire progressive : document et délai à chaque étape',
    columns: ['Étape', 'Document requis', 'Délai à respecter'],
    rows: [
      ['Avertissement oral documenté', 'Note interne au dossier, même non remise à l\'employé', 'Rédigée le jour même du fait constaté'],
      ['Avertissement écrit', 'Document formel décrivant le fait et la règle enfreinte', 'Remis sous 5 jours ouvrables après le fait constaté'],
      ['Mise en demeure', 'Même gabarit, en référence explicite aux avertissements antérieurs', 'Remise sous 5 jours ouvrables après la récidive constatée'],
      ['Licenciement', 'Dossier disciplinaire complet en pièce jointe', 'Selon le préavis légal applicable au contrat et à l\'ancienneté'],
    ],
  },
  {
    type: 'concept',
    title: 'Piège classique : sauter une étape "pour gagner du temps"',
    body: "Un superviseur excédé qui veut un licenciement immédiat pour un problème répété depuis des mois pousse souvent à sauter une étape de la séquence disciplinaire sous pression opérationnelle.",
    highlight: "L'absence de traçabilité écrite à chaque étape antérieure transforme un licenciement légitime sur le fond en licenciement abusif sur la forme — et l'organisation perd le contentieux, non pas parce que l'employé avait raison sur les faits, mais parce que la procédure n'a pas été respectée.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Requalification', definition: "Transformation légale, souvent automatique, d'un CDD en CDI lorsque les conditions de recours au CDD ne sont plus réunies dans les faits." },
      { term: 'Faute grave', definition: "Fait d'une gravité telle qu'il rend impossible le maintien du salarié dans l'entreprise, même pendant un préavis — procédure accélérée mais toujours documentée." },
      { term: 'Mise en demeure', definition: "Avertissement formel de dernier niveau avant licenciement, qui doit explicitement mentionner le risque de rupture du contrat en cas de récidive." },
      { term: 'Dossier individuel du personnel', definition: "L'ensemble des documents obligatoires archivés pour chaque employé, du recrutement à la séparation — la preuve écrite de toute la relation de travail." },
    ],
  },
  {
    type: 'checklist',
    title: 'Documents obligatoires d\'un dossier individuel',
    items: [
      "Le contrat de travail signé (original).",
      "Une copie de la pièce d'identité ou du passeport valide.",
      "Le CV à jour, les diplômes et certificats de qualification.",
      "Le certificat médical d'aptitude.",
      "La vérification documentée d'au moins deux références.",
      "Le formulaire de personne à contacter en cas d'urgence.",
      "Le code de conduite signé, y compris la politique PSEA (prévention des abus et exploitation sexuelle).",
      "La fiche de poste signée et une photo d'identité.",
      "Les coordonnées bancaires pour la paie.",
      "Pour le personnel expatrié uniquement : la copie du visa ou permis de travail.",
    ],
  },
  {
    type: 'process',
    title: 'Constituer et sécuriser un dossier individuel complet',
    steps: [
      { title: 'Ouvrir le dossier dès la signature du contrat', body: 'Jamais après — dès la signature, avec le statut initial de chaque document requis (obtenu, en attente, non applicable).' },
      { title: 'Collecter les documents dans l\'ordre de la checklist', body: 'Ne jamais considérer un dossier "complet à 90%" comme suffisant : les documents manquants sont ceux qui manqueront le jour d\'un audit ou d\'un contentieux.' },
      { title: 'Archiver selon un ordre fixe et identique pour tous', body: 'Identification et contrat en premier, qualifications ensuite, suivi disciplinaire et évaluations en dernier — sans exception, même dans l\'urgence.' },
      { title: 'Sécuriser l\'accès, physique et numérique', body: 'Armoire fermée à clé, accès restreint à l\'équipe RH — jamais un dossier partagé accessible à toute la mission "pour faciliter les choses".' },
      { title: 'Mettre à jour le taux de complétude chaque trimestre', body: 'Identifier les dossiers sous le seuil acceptable avant qu\'un litige ou un audit ne révèle un document manquant.' },
    ],
  },
  {
    type: 'process',
    title: 'Conduire une procédure disciplinaire légale',
    steps: [
      { title: 'Documenter le fait dès sa constatation', body: 'Date, heure, description factuelle, personnes présentes — jamais de mémoire des semaines plus tard.' },
      { title: 'Vérifier l\'historique disciplinaire avant d\'agir', body: 'Consulter le dossier individuel pour savoir où l\'employé se situe déjà dans la séquence — cela détermine l\'étape que vous avez le droit d\'appliquer.' },
      { title: 'Appliquer l\'étape correcte, avec le bon document et le bon délai', body: 'Selon la séquence vue précédemment : oral documenté, écrit, mise en demeure ou licenciement.' },
      { title: 'Laisser un droit de réponse réel, jamais symbolique', body: 'Au minimum 48h, davantage pour une mise en demeure — un droit repris dans la même heure n\'a aucune valeur en cas de contestation.' },
      { title: 'Classer chaque document signé dans le dossier, sans délai', body: 'Un avertissement rédigé mais jamais classé n\'existe pas, du point de vue de la preuve, le jour où vous en avez besoin.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le raccourci qui coûte cher, Goma, RDC"',
    scenario: "Depuis six semaines, un chauffeur logistique en CDI depuis 2 ans et demi accumule des retards répétés sur des rotations sensibles. Le superviseur logistique, excédé, réclame un licenciement immédiat : \"On n'a pas le temps de faire tout un processus\" et \"je lui ai déjà dit oralement plusieurs fois\". Le dossier individuel du chauffeur ne contient aucun avertissement écrit — seule trace, une mention orale du superviseur, non datée, jamais formalisée.",
    steps: [
      "Un licenciement immédiat, à ce stade, exposerait l'organisation à un risque réel devant l'inspection du travail.",
      "Le dossier se situe en réalité à l'étape de l'avertissement écrit, la première étape formelle applicable, pas au licenciement souhaité par le superviseur.",
      "Les rappels oraux invoqués n'ont aucune valeur de preuve tant qu'ils n'ont pas été notés par écrit au moment des faits.",
      "La marche à suivre doit être décidée et justifiée avant que la situation ne s'aggrave ou que le superviseur n'agisse de son propre chef.",
    ],
  },
  {
    type: 'exercise',
    title: 'Avertissement écrit et mise à jour du dossier',
    instructions: "Expliquez en quelques lignes pourquoi un licenciement immédiat exposerait l'organisation à un risque réel devant l'inspection du travail, et identifiez l'étape réelle de la procédure disciplinaire applicable à ce dossier. Rédigez ensuite, avec le gabarit gabarit-procedure-disciplinaire-avertissement.docx, l'avertissement écrit correspondant : faits constatés à partir des feuilles de pointage, mention explicite de l'absence d'avertissement écrit antérieur, et délai de réponse laissé au chauffeur. Complétez enfin la ligne du chauffeur dans checklist-dossier-individuel-personnel.xlsx avec ce nouvel avertissement.",
    deliverable: 'L\'avertissement écrit complété (1 page) et la ligne mise à jour de la checklist, avec une note d\'une phrase expliquant la nécessité de cette étape au superviseur.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Découvrir un dossier individuel incomplet au moment d'un litige, quand il est déjà trop tard pour réclamer le document manquant.",
      "Mener une procédure disciplinaire sans traçabilité écrite à chaque étape — une procédure orale, même sincère, n'est pas défendable.",
      "Confondre les clauses d'un contrat local et d'un contrat d'expatriation en réutilisant le même gabarit.",
      "Laisser un CDD se renouveler sans jamais réévaluer si le poste est encore réellement temporaire.",
      "Traiter le droit de réponse de l'employé comme une formalité qu'on coche vite, sans délai réel de réflexion.",
    ],
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi le type de contrat (CDD, CDI, expatriation) est une question de risque juridique, pas de préférence administrative.",
      "Je sais identifier un risque de requalification d'un CDD répété en CDI avant qu'il ne devienne un contentieux.",
      "J'ai constitué ou vérifié un dossier individuel complet avec le template fourni.",
      "Je sais nommer les quatre étapes d'une procédure disciplinaire progressive et le document requis à chacune.",
      "J'ai rédigé un avertissement complet incluant les avertissements antérieurs et un délai de réponse réel.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 04 — Politique de Rémunération & Avantages Sociaux.',
  },
]
