// Module 04 — Gestion des Fournisseurs & Conformité
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Gestion des Fournisseurs & Conformité',
    hook: "Vous allez apprendre à transformer un carnet de contacts pris dans l'urgence en un portefeuille fournisseurs qualifié et défendable en audit — et à trancher, sans céder à la panique ni à l'habitude, le cas ambigu d'un nom qui ressemble à une entité sanctionnée.",
  },
  {
    type: 'objectives',
    items: [
      'Qualifier un nouveau fournisseur en constituant le dossier documentaire requis avant toute première commande.',
      "Effectuer une vérification d'inéligibilité (un contrôle sur les listes de sanctions internationales OFAC, UE et ONU, qui recensent les entités avec lesquelles il est interdit de commercer) et documenter le résultat de façon traçable.",
      'Évaluer un fournisseur de façon périodique sur des critères objectifs et pondérés, pas sur une impression.',
      'Gérer le cycle de vie complet d\'un contrat-cadre (Framework Agreement, un accord qui fixe à l\'avance les conditions d\'une série d\'achats récurrents), de sa mise en place à son renouvellement.',
      'Trancher et documenter un cas de correspondance ambiguë (near-match) sur une liste de sanctions, sans bloquer à tort une relation légitime ni couvrir un vrai risque.',
    ],
  },
  {
    type: 'concept',
    title: 'Le portefeuille fournisseurs : un actif, pas une formalité',
    body: [
      "Un Supply Chain Manager humanitaire hérite rarement d'un portefeuille fournisseurs propre. Le plus souvent, c'est un empilement de contacts pris dans l'urgence, jamais requalifiés, avec des dossiers incomplets et des évaluations qui n'existent que dans la mémoire du logisticien parti six mois plus tôt. Le rôle du SCM est de transformer ça en un actif géré, sur lequel toute l'organisation peut s'appuyer sans repartir de zéro à chaque achat.",
      "Ce n'est pas une tâche administrative secondaire : c'est ce qui détermine si votre organisation peut acheter vite ET correctement en situation de crise.",
    ],
    highlight: 'Un fournisseur qualifié à l\'avance, avec un contrat-cadre en place, permet de sortir un bon de commande en quelques heures. Un fournisseur non qualifié force à relancer un cycle d\'achat complet pendant que la population attend.',
  },
  {
    type: 'concept',
    title: "Le screening sanctions n'est pas négociable",
    body: [
      "Responsabilité légale directe : les régimes de sanctions (OFAC américain, régime UE, listes du Conseil de sécurité de l'ONU) s'appliquent à toute transaction qui transite, même indirectement, par le système bancaire international. Payer — même involontairement — une entité sanctionnée peut engager la responsabilité pénale et financière de l'organisation elle-même.",
      "Perte de financement bailleur : les bailleurs institutionnels (les organismes qui financent les projets, comme ECHO ou USAID/BHA) intègrent systématiquement une clause d'inéligibilité. Un fournisseur sanctionné payé avec des fonds de ces bailleurs constitue une dépense inéligible, rejetable en audit avec obligation de remboursement — parfois des années après la transaction.",
    ],
    highlight: 'Le screening se fait AVANT la première commande, ET se répète à chaque changement significatif chez le fournisseur (propriétaire, raison sociale, dirigeants) ainsi qu\'à chaque réévaluation périodique.',
  },
  {
    type: 'comparison-table',
    title: 'Les outils de screening sanctions',
    columns: ['Outil', 'Ce qu\'il couvre'],
    rows: [
      ['OFAC Sanctions List Search', 'Liste SDN et autres listes de sanctions américaines — recherche gratuite, sans compte, avec un score de correspondance approximative réglable.'],
      ['EU Financial Sanctions Database', 'Base consolidée des sanctions financières de l\'Union européenne, filtrable par régime de sanctions.'],
      ['UN Security Council Consolidated List', "Liste consolidée des sanctions du Conseil de sécurité de l'ONU — la référence pour les mesures onusiennes."],
      ['OpenSanctions.org', 'Agrégateur gratuit qui consolide OFAC, UE, ONU et des listes nationales — un premier balayage rapide, jamais une source finale de décision.'],
    ],
  },
  {
    type: 'concept',
    title: 'La logique des contrats-cadres : efficacité contre remise en concurrence',
    body: [
      "Un contrat-cadre fixe à l'avance, avec un fournisseur qualifié, les conditions applicables à une série d'achats récurrents, typiquement 12 mois. L'intérêt est double : un temps considérable gagné, et généralement de meilleures conditions grâce au volume garanti.",
      "Mais cette efficacité a un coût caché si elle est mal gérée : un contrat-cadre reconduit automatiquement, année après année, sans nouvelle mise en concurrence, finit par coûter plus cher que le marché.",
    ],
    highlight: "Un contrat-cadre n'est pas un mariage. C'est un outil d'efficacité sous condition de revue régulière — sa facilité au quotidien est précisément ce qui pousse à en oublier l'échéance.",
  },
  {
    type: 'process',
    title: 'Du premier contact fournisseur au contrat-cadre géré',
    steps: [
      { title: 'Constituer le dossier documentaire de qualification', body: "Preuve d'existence légale, certificat fiscal à jour, coordonnées bancaires, 2-3 références vérifiables, preuve de capacité opérationnelle — un dossier incomplet n'est pas qualifié, point final." },
      { title: "Effectuer le screening d'inéligibilité avant toute signature", body: "Un balayage large sur OpenSanctions.org, puis, en cas de résultat, confirmation systématique sur la liste primaire concernée (OFAC, UE ou ONU) — jamais de décision basée sur l'agrégateur seul." },
      { title: 'Documenter la décision de qualification', body: 'Qualifié, Qualifié sous condition, ou Rejeté — toute décision, y compris une validation malgré un résultat approximatif, justifiée par écrit.' },
      { title: 'Évaluer le fournisseur périodiquement avec le scorecard pondéré', body: 'Répétée tous les 6 à 12 mois selon le volume d\'achat, pas seulement lors d\'un incident.' },
      { title: 'Suivre les échéances de réévaluation dans le temps', body: 'Un fournisseur dont la date de prochaine validation est dépassée doit être réévalué avant toute nouvelle commande significative — pas après.' },
      { title: 'Décider entre achat ponctuel et contrat-cadre', body: 'Pour un besoin récurrent et prévisible, établir un contrat-cadre avec une durée précise (12 mois recommandé) et une clause de revue de performance.' },
      { title: 'Gérer le renouvellement du contrat-cadre', body: 'Croiser systématiquement le score de la dernière évaluation et une remise en concurrence au moins partielle — jamais une reconduction automatique.' },
    ],
  },
  {
    type: 'stat-callout',
    stat: '29 critères',
    caption: "L'évaluation pondérée d'un fournisseur, répartis sur 5 catégories",
    context: 'Financier, légal, produits, service, prix — notés Oui/Non, avec un panneau de synthèse qui calcule automatiquement le taux de réponses complètes pour repérer un dossier qui se dégrade.',
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Qualification fournisseur', definition: 'Processus documentaire par lequel un fournisseur est reconnu apte à contracter avec l\'organisation (existence légale, capacité financière, éligibilité, références).' },
      { term: 'Inéligibilité (ineligibility screening)', definition: "Vérification qu'une entité ou un individu ne figure pas sur une liste de sanctions ou d'exclusion (OFAC, UE, ONU, ou liste interne bailleur)." },
      { term: 'Contrat-cadre / Framework Agreement (FWA)', definition: 'Accord fixant les conditions d\'achats récurrents avec un fournisseur qualifié, sur une durée déterminée, sans engagement de volume ferme.' },
      { term: 'Scorecard pondéré', definition: 'Outil d\'évaluation périodique attribuant un score objectif à chaque fournisseur sur plusieurs critères, chacun pesé selon son importance relative.' },
      { term: 'Quasi-correspondance (near-match)', definition: 'Résultat de screening où le nom d\'un fournisseur ressemble, sans être strictement identique, à une entité listée — une situation qui exige une analyse documentée, jamais une décision automatique.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas pratique — Changement de propriétaire chez un fournisseur historique, Maiduguri, Nigeria',
    scenario: "Votre organisation travaille depuis 4 ans avec un fournisseur local fiable, sans incident. En préparant le renouvellement annuel du contrat-cadre, vous découvrez un changement de propriétaire récent : le nouveau dirigeant est le fils du fondateur. Le screening de reconduction sur ce nouveau nom fait remonter, sur un agrégateur, un résultat approximatif : un nom très proche apparaît associé à une liste de vigilance régionale secondaire (non une liste OFAC/UE/ONU primaire), pour des soupçons non confirmés vieux de six ans, sans condamnation. Le nom n'est pas identique, le contexte géographique diffère légèrement, et le fournisseur a un historique de 4 ans irréprochable. Bloquer sur cette seule base risquerait de couper une chaîne d'approvisionnement fiable ; ignorer le signal exposerait l'organisation si le lien s'avère réel.",
    steps: [
      'Rechercher des informations complémentaires (date de naissance, deuxième prénom complet, numéro d\'enregistrement d\'entreprise) pour confirmer ou infirmer la correspondance.',
      'Confirmer en dernier recours sur une liste officielle primaire (OFAC, UE ou ONU) — jamais sur l\'agrégateur seul.',
      'Documenter la décision par écrit dans la fiche de qualification, avec les sources consultées et le résultat exact obtenu.',
      'Aligner le renouvellement du contrat-cadre sur cette décision, avec une clause de revue de performance reflétant une remise en concurrence au moins partielle.',
    ],
  },
  {
    type: 'exercise',
    title: 'Vérification approfondie et qualification documentée',
    instructions: "Décrivez les recherches complémentaires à effectuer pour confirmer ou infirmer la correspondance du cas de Maiduguri, et sur quelle liste officielle primaire vous confirmeriez en dernier recours. Complétez ensuite fiche-qualification-evaluation-fournisseur.xlsx : identification du fournisseur, date de vérification, critères légaux concernés, et une décision documentée (renouveler, renouveler sous condition, ou suspendre). Complétez enfin le renouvellement dans accord-cadre-framework-agreement-template.docx, en veillant à ce que la clause de revue de performance reflète une évaluation récente et une remise en concurrence au moins partielle.",
    deliverable: 'Les deux fichiers complétés, avec une justification de la décision ne dépassant pas une demi-page.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (fournisseurs)',
    items: [
      'Ne screener qu\'à l\'entrée en relation, jamais après — un fournisseur qualifié il y a trois ans peut avoir changé de propriétaire ou de raison sociale sans que personne ne le remarque.',
      "Renouveler un contrat-cadre sans remise en concurrence après échéance — la facilité du quotidien fait oublier l'échéance.",
      "Ignorer une évaluation défavorable \"parce que c'est toujours ce fournisseur\" — un score qui se dégrade doit déclencher une action corrective documentée.",
      'Traiter toute quasi-correspondance comme un blocage automatique, ou au contraire ignorer le signal pour gagner du temps — seule une vérification documentée tranche correctement.',
      'Se fier à un agrégateur gratuit comme source finale de décision — une liste officielle primaire doit toujours confirmer en dernier recours.',
      'Ne pas dater les décisions de qualification et de screening — une décision non datée ne prouve rien en cas d\'audit.',
    ],
  },
  {
    type: 'recap',
    items: [
      'Je sais constituer un dossier de qualification fournisseur complet avant toute première commande.',
      "Je sais où et comment effectuer un screening d'inéligibilité sur les listes OFAC, UE, ONU, avec un premier balayage sur un agrégateur.",
      'Je sais documenter par écrit une décision sur un cas de quasi-correspondance, qu\'elle mène à un blocage ou à une validation.',
      'Je sais évaluer un fournisseur avec un scorecard pondéré et interpréter une alerte sous seuil.',
      'Je sais dans quelles conditions établir un contrat-cadre et comment gérer correctement son renouvellement.',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 05 — Gestion des Stocks & Entrepôts.',
  },
]
