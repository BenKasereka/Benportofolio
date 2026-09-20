// Module 02 — ChatGPT (OpenAI) — Productivité maximale & automatisation
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'ChatGPT (OpenAI) — Productivité maximale & automatisation',
    hook: "Un prompt vague produit toujours une réponse moyenne : apprenez à structurer vos demandes pour obtenir un résultat exploitable dès la première tentative.",
  },
  {
    type: 'objectives',
    items: [
      'Structurer n\'importe quelle demande à ChatGPT selon la méthode RCCF (Rôle, Contexte, Contraintes, Format) pour obtenir un résultat exploitable sans reformuler cinq fois.',
      'Distinguer les situations où reprompter suffit de celles où construire un GPT personnalisé (une version de ChatGPT préconfigurée avec vos propres instructions, pour une tâche qui revient souvent) est le choix rentable.',
      'Créer un GPT personnalisé complet (instructions, base de connaissances, tests) pour une tâche récurrente de votre organisation.',
      'Utiliser ChatGPT pour analyser un document long en obtenant une réponse ciblée, pas un résumé générique.',
      'Itérer efficacement sur une réponse insatisfaisante au lieu de tout relancer depuis zéro.',
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi un prompt vague produit toujours une réponse moyenne",
    body: [
      "ChatGPT ne devine pas ce que vous voulez : il prédit la suite de texte la plus statistiquement probable compte tenu de ce que vous lui donnez. Un prompt comme \"aide-moi à écrire un rapport sur notre projet\" ne dit rien sur qui vous êtes, à qui le rapport s'adresse, quelle longueur est attendue, ni quelles données inclure.",
      "Le modèle produit alors la réponse la plus généraliste possible — calibrée pour ne déplaire à personne plutôt que pour servir précisément votre cas. C'est mathématiquement la réponse la moins utile qui soit.",
    ],
  },
  {
    type: 'concept',
    title: 'Une logique de délégation, pas un défaut du modèle',
    body: "Ce n'est pas un défaut du modèle — c'est la conséquence directe de l'information que vous lui donnez. Un consultant senior qui délègue une tâche à un junior sans préciser le destinataire, le format attendu ni les contraintes obtiendra le même résultat : un travail moyen, techniquement correct mais inutilisable tel quel. La qualité de la réponse est directement proportionnelle à la qualité et à la précision de l'instruction de départ.",
    highlight: "Un professionnel qui maîtrise ChatGPT ne discute pas au fil de l'eau en espérant tomber sur la bonne réponse : il construit sa demande une fois, avec toute l'information nécessaire intégrée dès le premier message.",
  },
  {
    type: 'comparison-table',
    title: 'La méthode RCCF — Rôle, Contexte, Contraintes, Format',
    columns: ['Bloc', 'Ce qu\'il apporte au modèle', 'Exemple de formulation'],
    rows: [
      ['Rôle', "Le point de vue et le niveau d'expertise à adopter. Sans rôle, le modèle répond en généraliste neutre.", '"Tu es un directeur financier d\'ONG avec 15 ans d\'expérience en reporting bailleurs."'],
      ['Contexte', 'La situation réelle : qui est concerné, quelles données existent déjà, quelle contrainte de terrain s\'applique. Sans contexte, le modèle invente ou généralise.', '"Ce rapport s\'adresse à un bailleur institutionnel européen, sur un projet de 8 mois déjà clôturé, budget de 240 000 USD."'],
      ['Contraintes', "Les limites à respecter : longueur, ce qu'il faut éviter, niveau de langage, éléments obligatoires. Sans elles, le modèle choisit à votre place — souvent mal.", '"Maximum 500 mots, aucun jargon technique non expliqué, ton factuel sans superlatifs."'],
      ['Format', "La structure exacte de sortie : plan, tableau, liste, nombre de sections. Sans format précisé, vous récupérez un bloc de texte continu à restructurer vous-même.", '"Structure en 4 sections : Contexte, Résultats, Écarts budgétaires, Recommandations."'],
    ],
  },
  {
    type: 'concept',
    title: 'Les 4 blocs ne sont pas facultatifs à la carte',
    body: "Un rôle sans contraintes donne un ton correct mais une longueur ou un format imprévisibles. Des contraintes sans contexte donnent un texte bien calibré mais générique, qui ne colle pas à votre situation réelle.",
    highlight: "C'est la combinaison des quatre blocs qui élimine l'aléatoire — pas un seul des quatre isolément.",
  },
  {
    type: 'concept',
    title: "Qu'est-ce qu'un GPT personnalisé, concrètement",
    body: "Un GPT personnalisé (Custom GPT, accessible aux comptes ChatGPT Plus, Team ou Enterprise) n'est pas un nouveau modèle d'IA : c'est un jeu d'instructions RCCF déjà écrites une fois pour toutes, packagé avec — en option — des fichiers de connaissance que le GPT consulte à chaque réponse, et parfois des actions. Vous écrivez votre rôle, votre contexte et vos contraintes une seule fois, et chaque membre autorisé de votre organisation les réutilise en un clic.",
  },
  {
    type: 'concept',
    title: 'Quand construire un GPT plutôt que reprompter',
    body: "Règle pratique : si une même tâche RCCF revient plus de 3 à 4 fois par mois, avec un rôle et des contraintes qui ne changent pas, le temps investi dans un GPT personnalisé (30 à 60 minutes de configuration) est rentabilisé dès la deuxième ou troisième utilisation. Pour une tâche ponctuelle ou qui change de nature à chaque fois, un bon prompt RCCF direct reste plus rapide.",
    highlight: "Exemples typiques : relecture des rapports bailleurs selon un format fixe, comptes rendus de réunion selon un gabarit, analyse de CV selon une grille de critères, réponses de premier niveau sur une procédure interne.",
  },
  {
    type: 'concept',
    title: "Ce qu'un GPT personnalisé ne remplace pas",
    body: "Un GPT bien configuré réduit le temps de mise en forme et de cadrage — il ne dispense jamais de relire, corriger et valider la sortie avant de l'utiliser, exactement comme vous le feriez pour le travail d'un collaborateur junior à qui vous auriez délégué la même tâche.",
  },
  {
    type: 'process',
    title: 'Construire un prompt RCCF complet',
    steps: [
      { title: 'Formulez la demande brute', body: "En une phrase, sans structure : ce que vous voulez obtenir, pour clarifier l'objectif dans votre tête avant de le structurer." },
      { title: 'Définissez le Rôle', body: "Quel professionnel, avec quelle expertise précise, serait le mieux placé pour produire ce livrable ? Un rôle précis oriente le vocabulaire, la structure et les priorités du texte." },
      { title: 'Rassemblez le Contexte réel', body: "Qui est concerné, quelles données existent déjà (collées, pas résumées de mémoire), quelle est la situation exacte. Plus le contexte est concret et chiffré, moins le modèle invente." },
      { title: 'Fixez les Contraintes', body: "Longueur attendue, ton, ce qui est à éviter (jargon, superlatifs), et toute règle propre à votre organisation ou secteur." },
      { title: 'Précisez le Format de sortie', body: "Nombre de sections et leurs titres, présence d'un tableau ou d'une liste, résumé exécutif ou non — pour éviter de restructurer la réponse à la main." },
      { title: 'Assemblez et envoyez', body: 'Combinez Rôle → Contexte → Contraintes → Format dans cet ordre, dans un seul message structuré.' },
      { title: 'Évaluez et itérez si nécessaire', body: "Si le résultat ne convient pas, indiquez précisément ce qui cloche plutôt que de repartir de zéro — c'est presque toujours plus rapide et plus précis." },
    ],
  },
  {
    type: 'process',
    title: 'Créer un GPT personnalisé pour une tâche récurrente',
    steps: [
      { title: 'Validez que la tâche justifie un GPT', body: 'Vérifiez qu\'elle revient au moins 3 à 4 fois par mois, avec un rôle et des contraintes stables — sinon, un prompt RCCF direct reste plus efficace.' },
      { title: 'Rédigez les instructions comme un prompt RCCF permanent', body: "En mode \"Configurer\", écrivez le Rôle et les Contraintes qui s'appliqueront à toutes les futures conversations ; seul le Contexte variera à chaque utilisation." },
      { title: 'Attachez les fichiers de connaissance nécessaires', body: 'Gabarit de rapport, procédure interne, grille de critères : le GPT les consultera automatiquement à chaque réponse.' },
      { title: 'Testez avec 3 à 5 cas réels', body: 'Avant diffusion, testez avec des exemples réels tirés du travail effectif, pas des cas fictifs simplifiés.' },
      { title: 'Itérez à partir des échecs de test', body: "Chaque réponse insatisfaisante signale une contrainte ou une précision de contexte manquante dans les instructions — pas une défaillance de l'outil." },
      { title: 'Diffusez et fixez une règle de mise à jour', body: 'Partagez le lien et désignez qui met à jour les fichiers de connaissance quand le gabarit source change.' },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Prompt vague sans rôle ni format de sortie attendu — produit une réponse générique qui demande presque autant de réécriture qu'une page blanche.",
      "Copier-coller un document entier sans préciser l'angle attendu (résumé, critique, reformulation) — le modèle choisit un défaut qui correspond rarement à votre besoin réel.",
      "Ne jamais itérer sur une réponse insatisfaisante — accepter le premier résultat au lieu de préciser ce qui ne convient pas.",
      "Construire un GPT personnalisé pour une tâche ponctuelle — mauvais calcul de temps pour un usage qui ne se reproduira jamais.",
      "Laisser un GPT connecté à un document de connaissance obsolète — il produit des réponses obsolètes avec la même assurance, sans aucun signal d'alerte.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Du prompt vague au livrable exploitable"',
    scenario: "Chargé(e) de projet, vous devez envoyer un rapport d'avancement à un partenaire financier d'ici la fin de journée. Pressé(e), vous écrivez à ChatGPT : \"Aide-moi à écrire un rapport sur notre projet.\" Résultat : un texte générique, sans chiffre réel, avec des formulations vagues comme \"le projet avance globalement bien\" — correctement écrit mais entièrement inutilisable tel quel.",
    steps: [
      "Rôle : \"Tu es un chargé de suivi-évaluation de projet, habitué à rédiger des rapports d'avancement pour des partenaires financiers institutionnels.\"",
      "Contexte : les vraies données du projet — 85 jeunes accompagnés sur un objectif de 100, taux de placement de 62 %, obstacle des délais administratifs pour 3 conventions de stage, budget consommé à 58 %.",
      "Contraintes : 400 mots maximum, ton factuel et sobre, aucune formulation vague sans donnée chiffrée à l'appui, aucun superlatif marketing.",
      "Format : 4 sections avec sous-titres — Résumé exécutif, Résultats chiffrés à mi-parcours, Obstacle principal et mesure corrective, Prochaines étapes.",
      "Résultat : un rapport directement utilisable, qui ne nécessite qu'une relecture de validation — pas une réécriture complète, avec exactement le même modèle qu'au départ.",
    ],
  },
  {
    type: 'exercise',
    title: 'Reconstruction RCCF et décision GPT personnalisé',
    instructions: "Choisissez une tâche de rédaction ou d'analyse réelle et récurrente dans votre travail. Rédigez le prompt vague que vous auriez tapé en premier réflexe, puis reconstruisez-le en RCCF avec le template bibliotheque-prompts-rccf-chatgpt.xlsx (Rôle, Contexte réel avec de vraies données, Contraintes, Format). Soumettez-le à ChatGPT et, si nécessaire, notez ce que vous avez dû préciser pour l'améliorer sans repartir de zéro. Enfin, déterminez si cette tâche justifierait un GPT personnalisé (récurrence d'au moins 3 à 4 fois par mois, rôle et contraintes stables) ; si oui, complétez le guide-creation-gpt-personnalise.docx avec objectif, instructions, fichiers de connaissance et au moins 3 cas de test réels.",
    deliverable: "La ligne complétée dans la bibliothèque de prompts RCCF, et — si applicable — le guide de création de GPT rempli.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi un prompt vague produit systématiquement une réponse générique.",
      "Je sais construire un prompt complet selon les 4 blocs Rôle, Contexte, Contraintes, Format, dans cet ordre.",
      "Je sais reconnaître une tâche qui justifie un GPT personnalisé plutôt qu'un reprompting répété.",
      "J'ai créé au moins un GPT personnalisé avec des instructions RCCF permanentes, testé sur des cas réels.",
      "Je sais itérer sur une réponse insatisfaisante en ciblant précisément le correctif, sans repartir de zéro.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 03 — Claude (Anthropic) : raisonnement, analyse et rédaction d'élite.",
  },
]
