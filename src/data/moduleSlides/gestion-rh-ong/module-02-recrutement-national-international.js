// Module 02 — Recrutement National & International
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Recrutement National & International',
    hook: "Un recrutement mal mené se paie des mois plus tard, en conflit d'équipe ou en licenciement coûteux. Ce module vous donne la méthode qui transforme un entretien \"au feeling\" en processus objectif, et qui repère un dossier truqué avant la signature du contrat.",
  },
  {
    type: 'objectives',
    items: [
      "Rédiger une description de poste compétitive et inclusive, adaptée à un contexte de recrutement national et international.",
      "Construire une grille d'entretien structuré (mêmes questions, même notation pour tous les candidats) et l'utiliser pour évaluer plusieurs candidats de façon objective et comparable.",
      "Conduire une vérification de références et d'antécédents qui détecte les signaux de fraude documentaire avant la signature du contrat.",
      "Piloter un processus de recrutement complet, de la définition du poste jusqu'à l'offre de contrat, sans sauter d'étape sous la pression d'une urgence.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi l\'entretien structuré bat l\'entretien informel',
    body: [
      "Dans beaucoup d'ONG, l'entretien ressemble encore à une conversation libre : le recruteur pose les questions qui lui viennent à l'esprit et évalue \"au feeling\". C'est le format le moins fiable pour prédire la performance réelle d'un candidat une fois en poste — et pourtant le plus souvent appliqué sur le terrain, y compris par des recruteurs expérimentés.",
      "Un entretien structuré — mêmes questions, posées dans le même ordre, à tous les candidats pour un même poste, avec une grille de notation commune — a un pouvoir prédictif nettement supérieur. Deux recruteurs différents, utilisant la même grille, arrivent à des scores comparables sur le même candidat, alors qu'avec un entretien libre, deux recruteurs peuvent avoir des impressions totalement opposées sans pouvoir justifier objectivement leur jugement.",
    ],
  },
  {
    type: 'checklist',
    title: 'Ce que "structuré" veut dire concrètement',
    items: [
      "Les mêmes questions sont posées à tous les candidats pour le même poste — pas de questions improvisées parce que le feeling était bon.",
      "Chaque question est reliée à une compétence précise du poste, pas à la curiosité du recruteur.",
      "Une grille de notation (1 à 5, ou équivalent) est appliquée de la même façon à chaque candidat, avec des critères écrits pour chaque niveau de score.",
      "Le score final est calculé, pas ressenti — pas d'impression générale dominée par le dernier entretien de la journée (biais de récence).",
    ],
  },
  {
    type: 'concept',
    title: 'Piège classique : le candidat qu\'on connaît déjà',
    body: "Un recruteur qui connaît déjà un candidat — recommandé par un collègue, croisé sur une mission précédente — a tendance, inconsciemment, à lui poser des questions plus faciles ou à interpréter ses réponses plus favorablement.",
    highlight: "L'entretien structuré ne supprime pas totalement ce biais, mais il le réduit fortement, parce que la grille de notation oblige à justifier chaque score par une observation concrète, jamais par une impression.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Shortlisting', definition: "Présélection des candidatures reçues sur la base de critères objectifs et écrits, avant tout entretien." },
      { term: 'Grille d\'entretien structuré', definition: "Document listant les questions à poser, les compétences évaluées et les critères de notation, identique pour tous les candidats d'un même poste." },
      { term: 'Référence indépendante', definition: "Contact professionnel identifié par le recruteur lui-même (LinkedIn, réseau, ancien collègue commun), et non transmis par le candidat — la seule vérification réellement neutre." },
      { term: 'Biais de récence', definition: "Tendance à sur-évaluer ou sous-évaluer un candidat simplement parce qu'il a été interviewé en dernier, plus frais dans la mémoire du recruteur." },
    ],
  },
  {
    type: 'warning',
    title: 'Fraude documentaire : les red flags classiques',
    items: [
      "Diplômes non vérifiables — université introuvable, établissement disparu sans traçabilité, ou archives détruites en zone de conflit.",
      "Références fournies uniquement par le candidat, sans aucun moyen de vérification croisée indépendante.",
      "Incohérences de dates ou de poste entre le CV et les attestations de travail — une seule peut être une erreur, plusieurs sur le même dossier ne le sont jamais.",
      "Postes ou responsabilités déclarés qui ne correspondent pas à la taille réelle de la structure mentionnée.",
      "Attestations de travail qui portent un cachet mais aucun contact vérifiable (numéro ou email qui ne répond jamais).",
    ],
  },
  {
    type: 'concept',
    title: 'Un signal isolé ne prouve rien, l\'accumulation retarde l\'offre',
    body: "Aucun de ces signaux, pris isolément, ne prouve une fraude. Un diplôme difficile à vérifier en zone de conflit n'est pas automatiquement un faux diplôme.",
    highlight: "L'accumulation de plusieurs signaux sur le même dossier, ou l'absence totale de vérification indépendante possible, doit systématiquement retarder l'offre jusqu'à clarification — jamais l'inverse.",
  },
  {
    type: 'process',
    title: 'Le processus de recrutement complet, de A à Z',
    steps: [
      { title: 'Définir le poste avant d\'écrire une annonce', body: 'Clarifier avec le hiring manager (le responsable qui a besoin de ce poste) 3 à 5 compétences réellement indispensables, le niveau d\'expérience minimum, et le type de contrat.' },
      { title: 'Rédiger une description de poste compétitive et inclusive', body: 'Critères essentiels séparés des souhaitables, langage inclusif, fourchette salariale ou grille de référence indiquée.' },
      { title: 'Publier et présélectionner sur critères écrits', body: 'Documenter pourquoi chaque candidat non retenu ne correspond pas aux critères essentiels — protection en cas de contestation.' },
      { title: 'Tests techniques quand le poste le justifie', body: 'Un exercice pratique identique pour tous, corrigé avec une grille écrite à l\'avance, pour les postes techniques.' },
      { title: 'Conduire l\'entretien avec la grille structurée', body: 'Mêmes questions, même ordre, notation immédiate avec justification concrète — jamais de mémoire en fin de journée.' },
      { title: 'Vérifier les références et antécédents avant toute offre', body: 'L\'étape la plus souvent bâclée sous pression de temps — et celle qui protège le plus votre organisation.' },
      { title: 'Formuler l\'offre de contrat', body: 'En cohérence avec la grille salariale et le type de contrat définis à l\'étape 1, une fois la vérification complétée sans signal non résolu.' },
    ],
  },
  {
    type: 'process',
    title: 'Vérifier les références : la méthode qui fonctionne réellement',
    steps: [
      { title: 'Ne jamais se limiter aux contacts fournis', body: 'Un candidat ne donnera jamais spontanément le contact d\'un superviseur avec qui la relation s\'est mal terminée.' },
      { title: 'Identifier au moins un contact indépendant', body: 'Ancien collègue trouvé via LinkedIn, connexion commune, ou contact obtenu en appelant le standard général de l\'organisation.' },
      { title: 'Poser les mêmes questions à toutes les références', body: 'Missions réellement exercées, raison du départ, points forts, points de vigilance, et une question directe sur la réembauche.' },
      { title: 'Documenter systématiquement', body: 'Qui a été contacté, comment ce contact a été identifié (fourni ou indépendant), ce qui a été dit, et les signaux d\'alerte repérés.' },
      { title: 'Ne jamais céder à la pression du "on n\'a pas le temps"', body: 'Une vérification bien ciblée prend rarement plus de 30 à 45 minutes par candidat retenu.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le candidat parfait, Abuja, Nigeria"',
    scenario: "Pour un poste de Program Manager, un dossier se détache nettement : 8 ans d'expérience, CV impeccable, meilleur score d'entretien du groupe (72/100), trois références excellentes. Le bailleur presse pour un démarrage dans trois semaines et le comité veut envoyer l'offre dès le lendemain. Les trois références fournies confirment un profil exemplaire — rien à signaler.",
    steps: [
      "Une recherche LinkedIn permet de retrouver une ancienne coordinatrice adjointe, absente de la liste des références fournies.",
      "Contactée directement, elle révèle que le candidat aurait quitté son précédent poste après une enquête interne pour comportement inapproprié envers son équipe.",
      "L'enquête a été close sans sanction formelle faute de témoignages écrits, et le départ a été présenté comme une démission volontaire dans les documents officiels.",
      "Une décision doit être prise et documentée avant l'échéance fixée par le comité de recrutement.",
    ],
  },
  {
    type: 'exercise',
    title: 'Grille d\'entretien et fiche de vérification',
    instructions: "Complétez le template grille-entretien-structure-evaluation.xlsx en simulant l'évaluation d'au moins 2 candidats fictifs sur le même poste (dont un profil \"Emeka\"), avec des scores par compétence cohérents avec le cas étudié, et vérifiez que le score pondéré et le classement se calculent correctement. Rédigez ensuite la fiche de vérification des références avec le template fiche-verification-references-antecedents.docx, en y intégrant les trois références fournies, le contact indépendant trouvé via LinkedIn et comment vous l'avez identifié, les signaux d'alerte relevés, et votre recommandation motivée.",
    deliverable: 'Les deux fichiers complétés, avec une recommandation finale clairement tranchée et justifiée par écrit.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Ne vérifier les références qu'auprès des contacts fournis par le candidat — ce n'est pas une vérification, c'est une formalité.",
      "Un entretien non structuré où chaque candidat reçoit des questions différentes, rendant toute comparaison objective impossible.",
      "Se précipiter sur un recrutement urgent en sautant la vérification des références \"faute de temps\".",
      "Se laisser impressionner par un excellent score d'entretien et relâcher la vigilance sur la vérification des références.",
      "Traiter une \"démission volontaire\" comme une information suffisante sans creuser la raison réelle du départ.",
    ],
  },
  {
    type: 'recap',
    items: [
      "Je sais rédiger une description de poste avec des critères essentiels séparés des critères souhaitables.",
      "Je sais construire une grille d'entretien structuré avec les mêmes questions et la même pondération pour tous les candidats.",
      "Je sais citer au moins 5 signaux d'alerte classiques de fraude documentaire dans un dossier de candidature.",
      "Je sais identifier et contacter une référence indépendante, non fournie par le candidat.",
      "Je sais qu'un excellent score d'entretien ne dispense jamais d'une vérification rigoureuse des références.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 03 — Contrats de Travail & Administration du Personnel.',
  },
]
