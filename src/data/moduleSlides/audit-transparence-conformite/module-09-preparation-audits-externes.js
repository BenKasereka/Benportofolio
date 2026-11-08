// Module 09 — Préparation aux Audits Externes & Interaction avec les Auditeurs
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran. Dernier module de la formation : la diapositive de clôture
// référence l'attestation de fin de formation, conformément à la
// section "Pour conclure cette formation" du markdown source.
export default [
  {
    type: 'cover',
    title: 'Préparation aux Audits Externes & Interaction avec les Auditeurs',
    hook: "Un audit externe ne se prépare pas département par département : c'est justement ce qui fait grimper le nombre de points relevés. Ce dernier module vous apprend à coordonner Finance, Achats, RH et Programme comme une seule voix — et à transformer un désaccord avec l'auditeur en preuve documentée, jamais en confrontation.",
  },
  {
    type: 'objectives',
    items: [
      "Coordonner, en tant qu'auditeur interne ou Compliance Officer (le responsable conformité de l'organisation), la constitution d'un dossier de préparation à l'audit externe couvrant Finance, Supply Chain/Achats, RH et Programme — pas un seul département isolé.",
      "Distinguer ce que veut réellement un auditeur externe (une opinion défendable sur les états financiers et la conformité) de la crainte, encore répandue, d'une « chasse aux erreurs » — pour préparer chaque équipe avec la bonne posture.",
      "Piloter l'avancement de la préparation à travers un tableau de bord centralisé, sans devenir vous-même le goulot d'étranglement de chaque département.",
      "Communiquer professionnellement avec une équipe d'audit externe tout au long de la mission, du cadrage initial à la restitution du rapport final.",
      "Défendre une position de l'organisation avec des preuves documentées face à un point de divergence (un constat que l'organisation conteste ou nuance) soulevé par l'auditeur, sans jamais transformer un désaccord technique en confrontation personnelle.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que veut réellement un auditeur externe',
    body: [
      "Des équipes entières se braquent à l'annonce d'un audit externe et vivent la semaine comme une inspection policière. Cette lecture est fausse, et elle coûte cher : un auditeur externe — cabinet mandaté par le bailleur, par le Conseil d'Administration, ou par les deux — ne cherche pas à vous piéger.",
      "Il cherche à formuler une opinion défendable sur la sincérité des états financiers, le respect des règles d'éligibilité bailleur et la fiabilité des systèmes de contrôle interne. Cette opinion, il devra la signer et en assumer la responsabilité professionnelle : il a donc objectivement intérêt à ce que votre dossier soit clair, complet et cohérent.",
    ],
    highlight: "Un dossier confus oblige l'auditeur à creuser plus, pas moins.",
  },
  {
    type: 'concept',
    title: "Vous n'êtes plus l'auditeur d'un domaine : vous êtes le coordinateur transversal",
    body: [
      "Un auditeur externe qui audite les états financiers annuels d'une ONG ne se limite jamais à la Finance : il tire un échantillon de transactions qui remonte inévitablement vers les achats (le fournisseur a-t-il été sélectionné selon la procédure ?), vers la RH (le salaire payé correspond-il au contrat et à la présence réelle ?), vers le Programme (la dépense correspond-elle à une activité réellement mise en œuvre et documentée ?).",
      "Si chaque domaine répond séparément, avec ses propres formats et ses propres délais, l'auditeur passe plus de temps à réconcilier vos réponses qu'à les évaluer — et cela se traduit presque toujours par davantage de points relevés, pas moins.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '87,2 %',
    caption: 'de réduction du risque de non-conformité chez ACTED, en 3 mois',
    context: "Obtenue en supprimant les incohérences qui n'apparaissent qu'au croisement des domaines — pas en travaillant plus dans chaque département isolément. C'est exactement la logique de coordination transversale de ce module.",
  },
  {
    type: 'concept',
    title: "Un désaccord n'est jamais une question personnelle",
    body: [
      "Le réflexe du professionnel junior face à un point de divergence — une position de l'auditeur que l'organisation conteste ou nuance — est de le vivre comme une remise en cause personnelle : ton défensif, justification orale improvisée. C'est l'erreur à ne jamais commettre.",
      "Un point de divergence n'est, structurellement, jamais une question de personnes : c'est une question de preuve documentée disponible ou non au moment où la question est posée. Un auditeur ne retire jamais un constat parce que vous avez su le défendre avec conviction verbale — il le retire ou le nuance uniquement face à un document, un contrat, une clé de répartition validée, un procès-verbal.",
    ],
    highlight: "Ne jamais répondre à un point de divergence à chaud, de mémoire, sans avoir vérifié la pièce : un délai de 24 à 48 heures pour rassembler la preuve coûte bien moins cher à la crédibilité qu'une réponse rapide mais inexacte.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: "Opinion d'audit", definition: "Conclusion formelle qu'un auditeur externe exprime sur la sincérité des états financiers et/ou la conformité d'une organisation, à l'issue de sa mission." },
      { term: 'Point de divergence', definition: "Constat de l'auditeur externe que l'organisation conteste ou nuance, sur la base d'une preuve documentée qu'elle apporte." },
      { term: 'Management letter', definition: "Document distinct du rapport d'audit final, où l'auditeur externe formule ses observations sur les faiblesses de contrôle interne constatées." },
      { term: 'Point focal domaine', definition: 'Personne désignée dans chaque département (Finance, SCM, RH, Programme) comme référence unique pour la préparation de l\'audit dans son périmètre.' },
      { term: 'Coordinateur transversal', definition: "Rôle tenu par l'auditeur interne ou le Compliance Officer, qui pilote la préparation d'ensemble sans se substituer aux domaines." },
    ],
  },
  {
    type: 'process',
    title: "Piloter une mission d'audit externe, de la notification à la clôture",
    steps: [
      { title: 'Cadrer la mission dès la notification (J-30 à J-45)', body: "Identifiez précisément le périmètre (exercice comptable, projets, bases) en vérifiant le mandat exact de la lettre d'engagement, et fixez une date interne de « prêt à recevoir l'auditeur » plusieurs jours avant l'arrivée réelle." },
      { title: 'Répartir les responsabilités par domaine (J-30 à J-25)', body: "Désignez un point focal par domaine dans le tableau de bord. Votre rôle : fixer le calendrier commun et vérifier la cohérence du vocabulaire et des documents entre domaines — pas rassembler les pièces à leur place." },
      { title: "Suivre l'avancement de façon centralisée (en continu jusqu'à J-1)", body: "Utilisez le tableau de bord en réunion hebdomadaire courte avec les points focaux. Votre valeur ajoutée : repérer les incohérences entre domaines, pas refaire leur travail de vérification." },
      { title: "Communiquer professionnellement avec l'équipe d'audit", body: "Organisez une réunion de cadrage dès l'arrivée de l'équipe, désignez un point de contact unique côté organisation qui centralise toutes les demandes et réponses." },
      { title: 'Gérer un point de divergence dès qu\'il est soulevé', body: "Ouvrez immédiatement la note de réponse et rassemblez la preuve documentée avant toute réponse formelle — jamais d'improvisation orale, même face à l'insistance de l'auditeur." },
      { title: 'Revoir le rapport provisoire avant toute réponse officielle', body: "Convoquez une réunion avec chaque responsable domaine concerné, validez collectivement chaque réponse avant de consolider et transmettre la réponse officielle." },
    ],
  },
  {
    type: 'checklist',
    title: "Communiquer avec l'équipe d'audit : les réflexes qui protègent votre crédibilité",
    items: [
      "Organiser une réunion de cadrage (kick-off meeting) dès l'arrivée de l'équipe d'audit pour confirmer périmètre et calendrier.",
      "Désigner un point de contact unique côté organisation — qui reçoit toutes les demandes et centralise toutes les réponses.",
      "Ne jamais laisser chaque département répondre séparément aux mêmes questions de l'auditeur : une incohérence pèse plus lourd qu'une simple lacune documentaire.",
      "Répondre à un point de divergence avec un délai assumé plutôt qu'une improvisation non vérifiée : « je vérifie et je reviens vers vous d'ici demain, avec le document ».",
      "Revoir tout rapport provisoire avec les responsables de domaine concernés avant de transmettre une réponse officielle.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Se braquer ou réagir émotionnellement face à un désaccord avec l'auditeur — un constat n'est jamais une attaque personnelle contre votre compétence.",
      "Préparer chaque domaine (Finance, SCM, RH, Programme) en silo, sans coordination transversale : des incohérences entre domaines sont souvent plus dommageables que la faiblesse initialement constatée.",
      "Répondre au rapport final d'audit sans consulter au préalable les responsables de domaine concernés par chaque constat.",
      "Laisser chaque point focal domaine répondre directement à l'auditeur sans passer par le coordinateur transversal.",
      "Attendre le rapport provisoire pour commencer à rassembler la preuve d'un point déjà évoqué oralement pendant la mission.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — « La clé de répartition contestée », base de Goma, Nord-Kivu',
    scenario: "Vous êtes Compliance Officer d'une ONG au Nord-Kivu avec deux projets sur la même base de Goma (nutrition ECHO / wash bilatéral), qui partagent un entrepôt et une équipe de gardiennage répartie 60 %/40 % selon une clé validée l'année précédente par des responsables aujourd'hui partis. Pendant l'audit annuel, l'auditrice relève que, sur trois mois, le gardiennage a été imputé à 100 % au projet ECHO sans application de la clé — et conclut que l'organisation « n'applique pas de façon cohérente sa propre méthode de répartition ».",
    steps: [
      "Vos vérifications informelles révèlent que le projet wash était en pause opérationnelle durant ces trois mois (attente de validation d'un avenant bailleur).",
      "Une décision d'imputer temporairement 100 % du gardiennage à ECHO avait été prise, mais jamais formalisée par écrit à l'époque.",
      "Votre mission : rassembler, avec Finance et Programme, la preuve documentée de cette situation avant de construire une contre-argumentation — sans confronter l'auditrice ni improviser une réponse orale.",
    ],
  },
  {
    type: 'exercise',
    title: 'Documenter et répondre à un point de divergence',
    instructions: "Listez les documents à rechercher (contrat de gardiennage, clé de répartition validée et par qui, tout échange écrit même informel mentionnant la pause du projet wash, calendrier réel des activités wash sur ces trois mois) en distinguant ce qui constitue une preuve solide de ce qui reste une affirmation non documentée. Complétez ensuite note-reponse-point-divergence-audit.docx : le point tel que formulé par l'auditrice, la position documentée de l'organisation, les preuves rassemblées, et une résolution proposée réaliste — par exemple une régularisation rétroactive documentée si la preuve écrite de la décision s'avère insuffisante.",
    deliverable: 'Le template de réponse complété, tenant sur une page, avec au moins deux pièces justificatives précisément identifiées.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer ce que veut réellement un auditeur externe et pourquoi ce n'est pas une « chasse aux erreurs ».",
      "Je sais désigner un point focal par domaine et coordonner leur préparation dans un calendrier commun.",
      "Je sais utiliser un tableau de bord centralisé pour suivre l'avancement sans me substituer au travail de chaque domaine.",
      "Je sais organiser une communication centralisée avec un point de contact unique côté organisation.",
      "Je sais qu'un point de divergence se résout par la preuve documentée, jamais par la conviction orale ou la réaction émotionnelle.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Vous avez terminé les 9 modules de cette formation — des fondamentaux de l'audit interne (Module 01) à cette préparation transversale aux audits externes. Cette maîtrise combinée des neuf compétences est validée par l'attestation de fin de formation en Audit Interne et Conformité délivrée par BK-BOOST Ltd.",
  },
]
