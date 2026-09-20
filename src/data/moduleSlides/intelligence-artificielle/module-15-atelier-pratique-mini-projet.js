// Module 15 — Atelier Pratique — Mini-projet certifiant par domaine (module final)
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Atelier Pratique — Mini-projet certifiant par domaine',
    hook: "Le module final : combiner ce que vous avez appris sur un problème réel de votre métier, jusqu'à un livrable que vous utiliserez réellement dès lundi.",
  },
  {
    type: 'objectives',
    items: [
      "Définir le périmètre d'un mini-projet IA personnalisé, réaliste et dimensionné pour le temps réellement disponible avant la revue finale.",
      "Choisir et combiner au moins deux outils vus dans cette formation plutôt qu'un seul outil par habitude.",
      "Fixer des critères de succès vérifiables avant de commencer à produire, et non après coup.",
      "Produire un livrable professionnel réellement réutilisable dans votre travail dès la fin de la formation.",
      "Solliciter et intégrer un retour d'expert à un point d'étape intermédiaire, puis présenter le projet de façon structurée à la revue finale.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce qui distingue un projet "certifiant" d\'un exercice académique',
    body: "Un exercice académique se termine quand vous avez démontré que vous avez compris un concept. Un projet certifiant se termine quand vous avez produit quelque chose que vous allez réellement utiliser lundi matin. Ce mini-projet est un test grandeur réelle : êtes-vous capable, seul, de partir d'un problème professionnel flou, de le cadrer, de choisir les bons outils, et de sortir un livrable que votre organisation peut réellement utiliser ?",
    highlight: "Si votre livrable final ne peut pas être ouvert et utilisé tel quel dans votre travail réel dès la semaine prochaine, le projet n'est pas terminé.",
  },
  {
    type: 'concept',
    title: 'Pourquoi combiner plusieurs outils plutôt qu\'un seul',
    body: [
      "Le réflexe le plus fréquent, après huit modules sur cinq IA différentes, est de retomber sur l'outil qu'on maîtrise déjà le mieux et de l'utiliser pour tout. C'est presque toujours un choix sous-optimal pour un projet réel.",
      "Chaque plateforme a une force dominante : Perplexity pour la recherche factuelle sourcée, Claude pour l'analyse et la rédaction de documents longs, Copilot pour le travail direct dans les fichiers Office existants, Gemini pour le multimodal et Google Workspace, ChatGPT pour la polyvalence et l'automatisation. Un mini-projet réel touche rarement à une seule de ces forces.",
    ],
    highlight: "La règle pratique : pour chaque étape du projet, demandez-vous quel outil est le mieux positionné pour cette étape précise — pas quel outil vous avez ouvert en premier.",
  },
  {
    type: 'process',
    title: 'Cadrer, produire, faire valider votre mini-projet',
    steps: [
      { title: 'Choisir un problème réel, pas un thème', body: 'Une tâche répétitive, un document mal produit, une information obtenue trop lentement — pas un thème général abstrait.' },
      { title: 'Remplir le brief avant de produire quoi que ce soit', body: 'Secteur, problème exact, outils combinés et rôle de chacun, livrable attendu, critères de succès, calendrier et date de point d\'étape.' },
      { title: 'Dimensionner le périmètre au temps disponible', body: 'Si la livraison est incertaine, réduire le périmètre maintenant — pas à mi-parcours en panique.' },
      { title: 'Tester les outils à petite échelle', body: 'Un seul prompt sur un extrait, un seul brouillon de section, avant de s\'engager sur la version complète.' },
      { title: 'Produire une première version complète', body: 'Viser une version complète, même imparfaite, sur laquelle un retour est possible — pas la perfection immédiate.' },
      { title: 'Solliciter le point d\'étape intermédiaire', body: 'Le périmètre est-il toujours réaliste, le choix d\'outils pertinent, la structure sur la bonne voie ?' },
      { title: 'Finaliser et s\'auto-évaluer avant la revue finale', body: 'Intégrer les retours, puis remplir honnêtement la grille d\'évaluation sur les cinq critères.' },
      { title: 'Structurer la présentation pour la revue', body: 'Problème résolu, outils combinés et pourquoi, livrable montré directement, résultat mesurable, limites connues.' },
    ],
  },
  {
    type: 'concept',
    title: 'Les deux gabarits qui cadrent le mini-projet',
    body: "Le gabarit-brief-mini-projet-ia-par-secteur.docx cadre le projet avant toute production : secteur et contexte, problème précis, outils retenus, livrable attendu, critères de succès, calendrier et point d'étape — c'est le document montré en premier au formateur. La grille-evaluation-livrable-mini-projet.xlsx sert à l'auto-évaluation puis à l'évaluation par le formateur, sur cinq critères notés de 1 à 5, avec un score global calculé automatiquement.",
  },
  {
    type: 'comparison-table',
    title: 'Les cinq critères de la grille d\'évaluation',
    columns: ['Critère', 'Ce qu\'il mesure'],
    rows: [
      ['Clarté du problème résolu', 'Le problème de départ est précis, pas un thème général'],
      ['Pertinence des outils choisis', 'Chaque outil est utilisé sur son point fort réel'],
      ['Qualité du livrable', 'Le résultat produit est directement exploitable'],
      ['Reproductibilité / documentation', 'Les prompts et étapes clés sont tracés et réutilisables'],
      ['Impact professionnel réel', 'Le livrable sera réellement utilisé dans le travail'],
    ],
  },
  {
    type: 'concept',
    title: 'Cinq pistes de mini-projets par secteur',
    body: [
      "Logistique : un tableau de bord généré avec Copilot + Excel à partir de données brutes, qui se met à jour en quelques minutes au lieu de quelques heures.",
      "RH : une bibliothèque de prompts ChatGPT pour structurer des entretiens de recrutement, réutilisable par toute l'équipe.",
      "Audit : un mini-rapport d'audit assisté par Claude à partir d'observations de terrain, avec constats classés par niveau de risque.",
    ],
    highlight: "Finance/conformité : une veille réglementaire automatisée avec Perplexity. Coaching : un pack de prompts de coaching réutilisable en entretien individuel. Ces pistes sont des points de départ à adapter à votre poste, pas des sujets à reproduire à l'identique.",
  },
  {
    type: 'warning',
    title: 'Pièges fréquents en fin de formation',
    items: [
      "Choisir un projet trop ambitieux pour le temps disponible — un projet modeste et fini vaut toujours mieux qu'un projet impressionnant et inachevé.",
      "Ne pas définir de critère de succès clair avant de commencer, ce qui transforme la revue finale en discussion d'impression plutôt qu'en évaluation.",
      "Attendre la revue finale pour le tout premier retour, au lieu de solliciter le point d'étape intermédiaire.",
      "Se concentrer sur la sophistication technique de l'outil plutôt que sur l'utilité réelle du livrable.",
      "Ne pas documenter la démarche : un livrable sans trace des prompts et étapes suivies n'est reproductible ni par vous dans six mois, ni par un collègue.",
    ],
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé',
    terms: [
      { term: 'Brief cadré', definition: "Le document rempli avant toute production, qui fixe le problème, les outils, le livrable, les critères de succès et le calendrier du mini-projet." },
      { term: 'Point d\'étape intermédiaire', definition: "Un retour d'expert ou de pair sollicité à mi-parcours, sur le périmètre, le choix d'outils et la structure du livrable — non optionnel dans la méthode." },
      { term: 'Reproductibilité / documentation', definition: "Le critère d'évaluation qui vérifie que les prompts et étapes clés sont tracés, pour que le livrable soit repris par vous-même ou un collègue." },
      { term: 'Attestation de compétences IA', definition: "Le certificat délivré par BK-BOOST Ltd. à l'issue de la revue individuelle validée du mini-projet, preuve transmissible de la capacité à diriger l'IA vers un résultat professionnel réel." },
    ],
  },
  {
    type: 'exercise',
    title: 'Le mini-projet — exercice central de la formation',
    instructions: "L'exercice se déroule en trois livrables, remis dans cet ordre : 1) le gabarit-brief-mini-projet-ia-par-secteur.docx complété avant toute production, avec un périmètre réaliste ; 2) le livrable final (document, tableau de bord, bibliothèque de prompts ou automatisation) dans un état directement utilisable, accompagné d'une note de 10 à 15 lignes documentant les prompts et étapes clés ; 3) la grille-evaluation-livrable-mini-projet.xlsx remplie honnêtement sur les cinq critères avant remise au formateur.",
    deliverable: "Les trois éléments ci-dessus, plus votre présence au point d'étape intermédiaire fixé dans votre brief. La revue individuelle par le formateur expert porte sur l'ensemble et débouche, en cas de validation, sur l'attestation de compétences IA délivrée par BK-BOOST Ltd.",
  },
  {
    type: 'recap',
    items: [
      "J'ai rempli le gabarit de brief avant de commencer à produire, avec un périmètre dimensionné pour le temps réellement disponible.",
      "J'ai fixé des critères de succès mesurables, pas une impression générale de réussite.",
      "J'ai combiné au moins deux outils IA de la formation, chacun sur son point fort réel.",
      "J'ai sollicité et intégré un retour au point d'étape intermédiaire, avant la revue finale.",
      "Mon livrable final est directement utilisable dans mon travail réel, et j'ai documenté les prompts et étapes clés de ma démarche.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Vous venez de terminer les 15 modules de la formation Maîtrise de l'Intelligence Artificielle. La revue individuelle de ce mini-projet, une fois validée, débouche sur votre attestation de compétences IA délivrée par BK-BOOST Ltd. — la preuve, transmissible à votre organisation ou à un futur employeur, que vous savez désormais diriger l'IA vers un résultat professionnel réel plutôt que de la subir au fil de l'eau.",
  },
]
