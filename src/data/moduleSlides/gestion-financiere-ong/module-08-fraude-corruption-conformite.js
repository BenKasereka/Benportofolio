// Module 08 — Fraude, Corruption & Conformité Financière
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Fraude, Corruption & Conformité Financière',
    hook: "Une comptabilité rigoureuse, un budget bien construit, une trésorerie disciplinée : tout cela ne sert à rien si, au bout de la chaîne, quelqu'un peut détourner des fonds sans que personne ne le voie venir. Ce dernier module vous donne la dernière ligne de défense — et souvent la première chose qu'un bailleur regarde après un incident.",
  },
  {
    type: 'objectives',
    items: [
      "Identifier les red flags (des signaux d'alerte isolés, pas des preuves en soi) classiques de fraude financière et de détournement, avant qu'ils ne deviennent un scandale ouvert.",
      "Expliquer pourquoi le triangle de la fraude (un modèle qui identifie trois conditions réunies chez une personne qui commet une fraude : la pression, l'opportunité, la rationalisation) trouve un terrain particulièrement favorable dans nos organisations.",
      "Faire fonctionner un mécanisme de signalement (le canal par lequel un employé peut rapporter un soupçon de fraude) réellement sécurisé — pas seulement une politique écrite dans un manuel que personne n'ouvre.",
      "Effectuer une vérification d'inéligibilité (screening) d'un partenaire ou d'un fournisseur sur les listes de sanctions internationales OFAC (le Trésor américain), UE et ONU, et documenter cette vérification comme une obligation légale, pas une formalité.",
      "Déclencher et structurer une investigation méthodique face à un faisceau d'indices convergents, sans accuser prématurément ni laisser filer une fraude avérée.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi ce module ferme la formation, pas par hasard',
    body: "Une comptabilité rigoureuse (Module 01), un budget bien construit (Module 02), une trésorerie disciplinée (Module 03) : tout cela ne sert à rien si, au bout de la chaîne, quelqu'un peut détourner des fonds sans que personne ne le voie venir.",
    highlight: "Ce module n'est pas un supplément moral ajouté en fin de programme — c'est la dernière ligne de défense d'un système financier, et souvent la première chose qu'un bailleur regarde après un incident.",
  },
  {
    type: 'concept',
    title: 'Le triangle de la fraude (Cressey)',
    body: [
      "Le criminologue Donald Cressey a formalisé, dès les années 1950, un modèle qui reste la meilleure grille de lecture disponible : une fraude se produit quand trois conditions se rencontrent chez une même personne.",
      "La pression — un besoin financier personnel, souvent caché. L'opportunité — un système de contrôle qu'elle sait pouvoir contourner. La rationalisation — une justification intérieure qui rend l'acte acceptable à ses propres yeux (\"je ne fais que récupérer ce qu'on me doit\", \"l'organisation a largement les moyens\").",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi le secteur humanitaire réunit les trois conditions',
    body: [
      "La pression est quasi permanente : salaires nationaux souvent bas face au coût de la vie en contexte de crise, personnel expatrié isolé, agents locaux qui portent seuls la charge financière d'un foyer élargi.",
      "L'opportunité explose en contexte d'urgence : accès à des montants de trésorerie importants, zones reculées où le contrôle hiérarchique direct est rare, rotation rapide du personnel, pression opérationnelle qui pousse à sauter des étapes de vérification.",
      "La rationalisation trouve un terreau spécifique dans le discours humanitaire lui-même : la conviction que \"l'argent des bailleurs ne manque à personne de concret\", ou un sentiment de justice personnelle face aux écarts de traitement salarial.",
    ],
    highlight: "Un contrôle interne efficace n'essaie pas de rendre les gens plus honnêtes — il agit sur le seul facteur qu'on peut réellement réduire : l'opportunité.",
  },
  {
    type: 'concept',
    title: 'Pourquoi un mécanisme de signalement doit garantir un anonymat réel',
    body: "Le problème n'est presque jamais l'absence de politique écrite — c'est son inefficacité pratique. La peur des représailles l'emporte sur le sens du devoir, tant que l'anonymat n'est pas crédible en pratique, pas seulement promis en théorie.",
    highlight: "Un agent qui soupçonne son supérieur direct ne signalera jamais via un canal qui passe, même indirectement, par ce même supérieur.",
  },
  {
    type: 'checklist',
    title: "Les critères d'un mécanisme de signalement réellement sécurisé",
    items: [
      "Un canal indépendant de la ligne hiérarchique directe — jamais uniquement \"parlez-en à votre chef de base\".",
      "Plusieurs canaux disponibles, y compris non numériques — courrier scellé, ligne téléphonique dédiée, contact en personne hors de sa base.",
      "Une politique explicite de non-représailles, avec des conséquences disciplinaires prévues pour quiconque exercerait des représailles.",
      "Un retour d'information, même minimal, au lanceur d'alerte quand c'est possible sans compromettre l'investigation.",
    ],
  },
  {
    type: 'concept',
    title: "Le screening d'inéligibilité — une responsabilité légale",
    body: "Vérifier qu'un partenaire, un fournisseur ou un bénéficiaire de subvention ne figure pas sur une liste de sanctions internationales n'est pas une bonne pratique parmi d'autres : c'est une obligation légale directe. Transférer des fonds à une entité listée expose l'organisation à des sanctions pénales et administratives, et peut faire perdre l'ensemble d'un portefeuille de financement.",
    highlight: "Le screening n'est pas un contrôle qu'on fait une fois à la signature du premier contrat : les listes de sanctions évoluent en continu, une entité en règle peut y apparaître dix-huit mois plus tard.",
  },
  {
    type: 'comparison-table',
    title: 'Trois référentiels de sanctions dominent la pratique',
    columns: ['Référentiel', 'Portée', "Quand il s'applique"],
    rows: [
      ['OFAC SDN List (Trésor américain)', 'Entités et personnes désignées par les États-Unis', "Tout financement lié aux bailleurs américains (USAID/BHA) ou avec un lien au dollar américain"],
      ["Liste consolidée de l'Union européenne", 'Mesures restrictives UE', 'Tout financement ECHO ou autre instrument européen'],
      ["Liste du Comité des sanctions de l'ONU", 'Référentiel universel', 'Contextes sous mandat ou financement onusien direct'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Red flag', definition: "Indicateur isolé, pas une preuve en soi, qui doit déclencher une vigilance accrue — jamais une accusation directe sur la seule base d'un signal unique." },
      { term: 'Triangle de la fraude (Cressey)', definition: "Pression + opportunité + rationalisation — les trois conditions qui, réunies, rendent une fraude possible chez un individu donné." },
      { term: "Lanceur d'alerte (whistleblower)", definition: "Personne qui signale de bonne foi un soupçon de fraude, de corruption ou de faute grave, et qui bénéficie d'une protection formelle contre les représailles." },
      { term: "Screening d'inéligibilité", definition: "Vérification qu'une entité ou une personne ne figure pas sur une liste de sanctions internationales (OFAC, UE, ONU) avant tout engagement, et à intervalles réguliers ensuite." },
      { term: 'Due diligence partenaire', definition: "Ensemble des vérifications (financières, légales, de gouvernance) menées avant et pendant une relation de partenariat, dont le screening n'est qu'une composante." },
    ],
  },
  {
    type: 'process',
    title: "De la vigilance de routine à l'investigation structurée",
    steps: [
      { title: 'Intégrer la checklist de red flags dans la routine', body: "Achats/procurement, caisse et avances, paie/RH, relations partenaires — à passer en revue à chaque clôture, pas seulement en cas de doute déjà formé." },
      { title: 'Documenter chaque red flag repéré, même isolé', body: "Sans attendre une \"preuve complète\" : de quoi il s'agit, sur quel dossier, à quelle date. Un score \"Modéré\" ou \"Élevé\" signifie qu'une investigation structurée doit s'ouvrir." },
      { title: 'Signaler un soupçon par le canal sécurisé approprié', body: "Ne jamais remonter un soupçon impliquant son supérieur direct via ce même supérieur." },
      { title: "Vérifier l'inéligibilité avant tout engagement contractuel", body: "Interroger les trois référentiels pour l'entité ET ses dirigeants/signataires légaux, et conserver une preuve datée de chaque vérification." },
      { title: 'Revérifier les partenaires existants à intervalles réguliers', body: "Au minimum annuelle pour les partenariats actifs, immédiatement en cas de changement de gouvernance connu." },
      { title: "Structurer l'investigation dès qu'un soupçon est jugé recevable", body: "Résumé factuel, mesures conservatoires proportionnées et réversibles, étapes datées et attribuées, résultat, actions correctives." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Ignorer un red flag isolé en se disant \"ce n'est probablement rien\" — un justificatif \"perdu\" une fois est un incident ; répété trois fois par la même personne, c'est un motif d'investigation.",
      "Un mécanisme de signalement qui n'est pas réellement anonyme dans la pratique — la peur des représailles décourage tout signalement tant que la confidentialité n'est pas concrètement garantie.",
      "Screener un partenaire une seule fois à l'entrée en relation et ne jamais revérifier ensuite — un partenariat vérifié il y a deux ans peut être aujourd'hui une exposition légale non détectée.",
      "Confondre \"personne de confiance\" et \"personne dispensée de contrôle\" — plus une personne inspire confiance, moins elle est contrôlée, plus l'opportunité grandit.",
      "Traiter l'investigation comme un jugement de culpabilité avant même qu'elle ne commence — les mesures conservatoires doivent rester proportionnées et réversibles tant que l'investigation n'a pas conclu.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Avances terrain suspectes, Maiduguri"',
    scenario: "Lors de votre revue trimestrielle de routine des avances terrain sur une base satellite à trois heures du bureau régional, votre checklist de red flags fait apparaître plusieurs éléments concernant le même assistant logistique.",
    steps: [
      "Le même assistant logistique a \"égaré\" les justificatifs originaux de trois avances différentes en six mois, chaque fois proche du plafond sans double signature.",
      "Un même fournisseur de carburant est systématiquement retenu alors que deux autres proposent des prix inférieurs de 12 à 18 %, sans mise en concurrence documentée.",
      "L'assistant logistique n'a pris aucun congé en quatorze mois et se porte systématiquement volontaire sur les tâches liées aux caisses.",
      "Le chef de base a validé chaque avance sans relever ces éléments, expliquant que \"c'est quelqu'un de confiance, on n'a pas le temps de tout redocumenter\".",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice noté — investiguer sans accuser',
    instructions: "Remplissez la checklist-red-flags-fraude-financiere.xlsx pour ce dossier : identifiez au moins 4 red flags précis dans les catégories \"Caisse & Avances terrain\" et \"Achats & Procurement\", documentez chacun dans la colonne preuve/commentaire, et observez le niveau de risque global calculé. Rédigez ensuite, avec le procedure-signalement-plan-action-fraude.docx, un résumé factuel de l'allégation, une évaluation initiale incluant au moins une mesure conservatoire immédiate proportionnée, et un plan d'étapes d'investigation daté et attribué.",
    deliverable: "Les deux fichiers complétés, avec un plan d'investigation ne dépassant pas 5 étapes concrètes et réalisables dans un délai de deux semaines.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer le triangle de la fraude (pression, opportunité, rationalisation) et pourquoi le contrôle interne agit avant tout sur l'opportunité.",
      "Je sais citer les raisons pour lesquelles le contexte humanitaire favorise structurellement les trois conditions du triangle de la fraude.",
      "Je peux énumérer les critères qui rendent un mécanisme de signalement réellement sécurisé, au-delà d'une politique écrite.",
      "Je sais interroger les trois référentiels de sanctions (OFAC, UE, ONU) et documenter une vérification d'inéligibilité de façon opposable.",
      "Je sais distinguer une mesure conservatoire proportionnée d'une sanction anticipée avant conclusion d'une investigation.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Vous arrivez au terme des huit modules de cette formation. La validation de cet exercice, comme celle des modules précédents, ouvre droit à votre attestation de fin de formation BK-BOOST Ltd. — le signal, pour tout recruteur du secteur, que vous maîtrisez non seulement les chiffres, mais les responsabilités qui vont avec.",
  },
]
