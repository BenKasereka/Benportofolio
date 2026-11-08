// Module 04 — Politique de Rémunération & Avantages Sociaux
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Politique de Rémunération & Avantages Sociaux',
    hook: "Deux collègues, même poste, mêmes responsabilités — et 35% d'écart de salaire parce que l'un a mieux négocié. Tant que personne ne compare les fiches de paie, tout va bien ; le jour où ils le font, c'est une plainte pour inégalité de traitement. Ce module vous apprend à bâtir une grille salariale que vous pouvez défendre.",
  },
  {
    type: 'objectives',
    items: [
      "Construire une grille salariale par coefficients de poste, adossée à un benchmarking documenté et non arbitraire.",
      "Distinguer prime terrain, indemnité de risque et hardship allowance, et justifier laquelle appliquer selon le contexte.",
      "Calculer le montant d'une prime terrain ou d'une hardship allowance de façon cohérente entre postes comparables.",
      "Appliquer correctement les obligations légales de cotisations sociales (CNSS ou équivalent local) qui pèsent sur l'employeur.",
      "Détecter et corriger une inégalité salariale non formalisée avant qu'elle ne devienne un contentieux.",
    ],
  },
  {
    type: 'concept',
    title: 'Une grille qui existe sur le papier mais que personne n\'applique',
    body: [
      "La situation la plus fréquente dans les ONG de taille moyenne n'est pas l'absence de grille salariale : c'est une grille que plus personne n'applique vraiment. Un HR Manager arrive, hérite de contrats signés par trois coordinateurs différents sur trois ans, et découvre que le salaire d'un poste dépend surtout de qui a négocié, et quand.",
      "C'est le terreau exact d'une plainte pour inégalité de traitement — et dans beaucoup de pays d'intervention, le droit du travail local protège ce principe même quand l'ONG n'a pas de politique RH écrite.",
    ],
    highlight: "Une grille salariale n'est pas un tableau Excel qu'on remplit \"au feeling\" : elle doit pouvoir répondre à toute contestation par un argument objectif.",
  },
  {
    type: 'concept',
    title: 'Deux piliers, toujours documentés séparément',
    body: [
      "Le benchmarking externe : combien paie le marché pour ce type de poste dans ce contexte.",
      "La cohérence interne : deux postes de valeur comparable dans mon organisation sont-ils rémunérés de façon comparable ?",
      "Négliger l'un des deux piliers, même si l'autre est solide, expose l'ONG au même risque : un salarié qui compare sa fiche de paie à celle d'un collègue, ou à une offre d'une agence onusienne dans la même ville, et qui a de bonnes raisons de se sentir lésé.",
    ],
    highlight: "Benchmarking externe + équité interne : les deux sont nécessaires, aucun ne remplace l'autre.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois sources de benchmarking salarial : jamais une seule',
    columns: ['Source', 'Rôle dans la grille', 'Limite à connaître'],
    rows: [
      ['Grilles ONU (barèmes ICSC / UNDP)', 'Référence "plafond" dans la plupart des contextes', 'Une ONG ne peut généralement pas s\'aligner dessus (primes financées par des budgets que les ONG n\'ont pas), mais les ignorer fait partir vos meilleurs éléments nationaux'],
      ['Enquêtes salariales inter-ONG', 'Référence la plus pertinente pour une ONG de taille moyenne : fourchettes par poste et par zone', 'Circulent souvent uniquement sur demande directe, via le coordinateur RH du cluster ou du consortium'],
      ['Secteur public local et salaire minimum légal', 'Plancher absolu, jamais une cible', 'Avec une inflation supérieure à 20% par an, un salaire aligné dessus devient un salaire de misère qui ne retient personne'],
    ],
  },
  {
    type: 'concept',
    title: 'Écrire sa règle de positionnement',
    body: "Une grille sérieuse positionne chaque poste-repère entre ces trois références, avec une décision explicite et documentée. Exemple de règle : \"70e percentile des ONG du secteur, jamais en dessous du secteur public local, jamais au-dessus de 60% du barème ONU équivalent\".",
    highlight: "Une fois écrite, cette règle vous permet de répondre à toute contestation salariale par un argument objectif plutôt que par une justification improvisée.",
  },
  {
    type: 'comparison-table',
    title: 'Prime terrain, indemnité de risque, hardship allowance : trois logiques',
    columns: ['Complément', 'Ce qu\'il compense', 'Base de calcul typique'],
    rows: [
      ['Prime terrain (field allowance)', 'Déploiement loin du lieu de résidence habituel, conditions de vie et de travail plus dures qu\'au siège ou en capitale — indépendamment de tout danger particulier', 'Forfait journalier ou mensuel fixe, identique pour tous les postes déployés sur une même base, quel que soit le niveau hiérarchique'],
      ['Indemnité de risque (security/risk allowance)', 'Niveau de menace sécuritaire spécifique et documenté (conflit actif, risque INSO/UNDSS élevé, danger identifié) — pas la dureté générale de la vie', 'Pourcentage du salaire de base, aligné sur la classification sécuritaire officielle de la zone (phase UNDSS ou équivalent), révisé quand elle change'],
      ['Hardship allowance', 'Éloignement, isolement et conditions de vie dégradées sur la durée (eau potable, électricité, santé, éducation, enclavement) — pas un danger immédiat', 'Pourcentage du salaire de base ou grille à paliers (catégories A/B/C), souvent calquée sur une classification externe reconnue et adaptée au contexte'],
    ],
  },
  {
    type: 'concept',
    title: 'Piège classique : la "prime de risque" en capitale stable',
    body: "Accorder une prime de risque à un poste basé dans une capitale relativement stable, sous prétexte que le pays dans son ensemble est classé à risque, alors que le poste ne justifie ni indemnité de risque (pas d'exposition directe) ni hardship (conditions de vie urbaines correctes).",
    highlight: "Une indemnité mal ciblée, une fois connue des autres employés, est presque toujours perçue comme un privilège arbitraire, même accordée de bonne foi.",
  },
  {
    type: 'concept',
    title: 'Cotisations sociales : le socle non négociable',
    body: [
      "Tout employeur, ONG comprise, a des obligations légales de cotisations sociales (CNSS en RDC et dans plusieurs pays d'Afrique francophone, équivalents locaux ailleurs) : une part salariale retenue sur le brut, une part patronale à la charge de l'ONG, versées à un organisme de sécurité sociale.",
      "Le non-respect expose à un redressement administratif, souvent des années plus tard, avec pénalités de retard cumulées : changement d'inspecteur, plainte d'un ancien employé, audit de bailleur exigeant une preuve de conformité sociale.",
    ],
    highlight: "Un HR Manager sérieux ne délègue jamais cette question uniquement à la finance : il vérifie au moins une fois par an que les taux correspondent au barème légal en vigueur et que les déclarations sont effectivement déposées, pas seulement calculées sur une fiche de paie.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Grille salariale par coefficient de poste', definition: "Système où chaque poste reçoit un coefficient reflétant son niveau de responsabilité ; le salaire se calcule à partir d'un salaire de base multiplié par ce coefficient." },
      { term: 'Percentile de positionnement', definition: "La position choisie de votre grille par rapport au marché de référence (par exemple \"50e percentile\" = salaire médian du secteur)." },
      { term: 'Équité interne', definition: "Le fait que deux postes de valeur comparable dans la même organisation soient rémunérés de façon comparable, indépendamment du marché externe." },
      { term: 'CNSS (ou équivalent local)', definition: "Caisse Nationale de Sécurité Sociale : organisme national percevant les cotisations sociales obligatoires employeur/employé." },
    ],
  },
  {
    type: 'process',
    title: 'Construire une grille salariale par coefficient de poste',
    steps: [
      { title: 'Lister tous les postes-repères', body: "Dans l'onglet Grille de grille-salariale-benchmarking-coefficients.xlsx, par famille (support, programme, coordination) et par niveau. Ne partez jamais des intitulés existants sans les vérifier : même titre, responsabilités parfois très différentes." },
      { title: 'Collecter le benchmarking externe (Semaine 1)', body: "Onglet Benchmarking : barème ONU le plus proche, fourchette inter-ONG si elle existe, salaire minimum légal. Datez chaque donnée — un chiffre non daté est inutilisable dans 18 mois." },
      { title: 'Attribuer un coefficient de poste (Semaine 1-2)', body: "Il reflète le niveau de responsabilité, pas l'ancienneté de la personne ni son pouvoir de négociation. Critères objectifs : subordonnés directs, budget géré, autonomie de décision, qualification requise." },
      { title: 'Vérifier l\'équité interne (Semaine 2)', body: "L'onglet Équité interne signale les postes à coefficient proche mais salaire réel très divergent. Chaque écart doit être justifié par une différence prouvable ou corrigé — jamais laissé sans explication écrite." },
      { title: 'Faire valider avant toute communication (Semaine 2-3)', body: "Validation par la direction (et selon la taille, siège ou conseil d'administration), avec un plan de transition écrit pour les salaires hors grille, à la hausse comme à la baisse." },
    ],
  },
  {
    type: 'concept',
    title: 'Dans le template : ne touchez que les valeurs d\'entrée',
    body: [
      "Le classeur contient une feuille de référence pour le benchmarking (ONU, ONG, secteur public), une feuille de grille calculant le salaire de chaque poste par la formule salaire de base × coefficient de poste × facteur d'expérience, et une feuille d'équité interne.",
    ],
    highlight: "Ne modifiez jamais la formule directement dans les cellules de résultat, seulement les valeurs d'entrée. Et ne communiquez jamais la grille au personnel avant d'avoir un plan de transition validé : une grille sans plan pour les cas hors grille crée plus d'inquiétude qu'elle n'en résout.",
  },
  {
    type: 'process',
    title: 'Calculer une prime terrain ou une hardship allowance documentée',
    steps: [
      { title: 'Identifier la nature exacte du complément', body: "Prime terrain, indemnité de risque ou hardship : jamais par défaut, jamais parce que \"c'est ce qu'on donne d'habitude\". Un poste peut cumuler plusieurs compléments s'ils répondent chacun à un critère distinct et documenté." },
      { title: 'Renseigner la note de calcul', body: "Avec note-calcul-primes-terrain-hardship.docx : salaire de base, compléments applicables, critère précis de chacun, et le détail du calcul — pas seulement le chiffre final." },
      { title: 'Vérifier la cohérence avec les postes comparables', body: "Deux employés de niveau comparable, sur des bases aux conditions similaires, doivent recevoir des compléments calculés selon les mêmes critères — sinon vous recréez l'inégalité que la grille doit éviter." },
      { title: 'Faire signer et archiver dans le dossier individuel', body: "Note signée (employé, HR Manager et, selon le niveau, la coordination), archivée dans le dossier individuel (voir Module 03). Ce document, et non un souvenir verbal, justifiera le montant des années plus tard." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas — "Deux salaires, un même poste, N\'Djamena, Tchad"',
    scenario: "Vous prenez vos fonctions de HR Manager dans une ONG de développement présente au Tchad depuis 8 ans. En reprenant les dossiers du personnel, vous découvrez que deux Chargés de Programme, recrutés à deux ans d'intervalle, avec le même poste et les mêmes responsabilités sur deux zones comparables, ont un écart de salaire de base de 35%, sans différence objective de diplôme, d'ancienneté ou de responsabilité. Le mieux payé a simplement mieux négocié, dans un contexte sans grille salariale écrite. Ils travaillent dans le même bureau régional et n'ont pas encore comparé leurs fiches de paie.",
    steps: [
      "Un tel écart, une fois découvert, constitue une base solide pour une plainte en inégalité de traitement : le droit du travail tchadien reconnaît le principe \"à travail égal, salaire égal\".",
      "Baisser unilatéralement le salaire le plus élevé serait illégal dans la plupart des contextes (modification substantielle du contrat sans accord) et destructeur pour le climat social.",
      "Votre mission : corriger la situation avec les outils du module avant qu'elle n'éclate en conflit ouvert, sans créer un nouveau problème.",
    ],
  },
  {
    type: 'exercise',
    title: 'Grille, plan de transition et notes de primes',
    instructions: "1. Complétez grille-salariale-benchmarking-coefficients.xlsx avec le poste de Chargé de Programme : coefficient reflétant objectivement son niveau de responsabilité, salaire de base benchmarké (ONU, enquête inter-ONG, secteur public tchadien), puis vérifiez ce que révèle l'onglet Équité interne pour les deux employés. 2. Rédigez en 10 lignes maximum un plan de transition : maintien du salaire le plus haut (les baisses de salaire acquis sont à éviter sauf cas exceptionnel et accord explicite), alignement progressif du second via une augmentation planifiée, communication individuelle avant toute communication collective. 3. En supposant un hardship comparable mais un risque sécuritaire différent (l'une des zones est classée en vigilance renforcée), complétez deux notes avec note-calcul-primes-terrain-hardship.docx qui reflètent cette différence, sans la confondre avec l'écart de salaire de base injustifié.",
    deliverable: "La grille complétée, le plan de transition (10 lignes max) et les deux notes de calcul de primes, avec une cohérence démontrable entre les trois documents.",
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Grille salariale jamais mise à jour malgré une inflation locale réelle : des grilles figées 5 ans avec plus de 15% d'inflation par an — les départs volontaires sont le signal d'alarme, souvent trop tard.",
      "Primes terrain accordées \"au cas par cas\" sans base écrite ni cohérence : source numéro un de rumeurs et de tensions internes.",
      "Cotisations sociales mal calculées : un taux appliqué par habitude, jamais revérifié, peut générer des années d'arriérés découverts lors d'un contrôle, avec des pénalités qui dépassent largement le coût d'une vérification annuelle.",
      "Confondre alignement sur les barèmes ONU et concurrence directe avec l'ONU : une petite ONG ne pourra pas suivre, et créera un choc budgétaire à la prochaine réduction de financement bailleur. Visez un percentile réaliste et documenté.",
      "Traiter la hardship allowance comme un acquis permanent : elle doit rester liée à une classification objective et révisable de la zone (hôpital ouvert, route réhabilitée, stabilisation sécuritaire).",
    ],
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer la différence entre benchmarking externe et équité interne, et pourquoi les deux sont nécessaires.",
      "Je sais construire un coefficient de poste sur des critères objectifs, indépendants de la personne qui occupe le poste actuellement.",
      "Je peux distinguer prime terrain, indemnité de risque et hardship allowance, et justifier laquelle appliquer.",
      "J'ai complété une grille salariale avec le template fourni, y compris la vérification d'équité interne.",
      "J'ai rédigé au moins une note de calcul de prime terrain/hardship documentée et défendable.",
      "Je sais où trouver les taux de cotisations sociales à jour pour mon pays d'affectation et pourquoi les revérifier chaque année.",
      "Je sais identifier, dans un dossier existant, un écart salarial non justifié avant qu'il ne devienne un contentieux.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 05 — Évaluation des Performances & Développement.',
  },
]
