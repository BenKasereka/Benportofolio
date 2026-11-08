// Module 04 — Entrepôt & Gestion des Stocks
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Entrepôt & Gestion des Stocks',
    hook: "Un carton égaré, un lot périmé oublié en fond d'étagère : en logistique humanitaire, ce n'est jamais \"juste un chiffre\" — c'est une personne qui ne reçoit pas ce qui lui était destiné. Ce module vous donne les règles qui préviennent la majorité des pertes en entrepôt.",
  },
  {
    type: 'objectives',
    items: [
      "Organiser un entrepôt humanitaire selon les standards minimums de disposition, sécurité et contrôle d'accès.",
      "Choisir correctement entre logique FIFO (le premier article entré sort en premier) et logique FEFO (l'article qui périme le plus tôt sort en premier) selon la nature de chaque article stocké.",
      "Tenir une fiche de stock (stock card / bin card, le document qui enregistre chaque entrée et sortie d'un article) qui reflète en permanence la réalité physique de l'entrepôt.",
      "Expliquer pourquoi un écart d'inventaire n'est jamais \"juste un chiffre\" mais un enjeu de redevabilité vis-à-vis des bailleurs et des bénéficiaires.",
      "Identifier les points de contrôle qui préviennent la majorité des pertes, vols et dommages en entrepôt.",
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi les standards Sphere s'appliquent aussi à l'entrepôt",
    body: "Le Manuel Sphere (Charte humanitaire et standards minimums de la réponse humanitaire) est surtout connu pour ses standards de distribution — quantité d'eau par personne, surface d'abri minimale. On oublie souvent qu'il fixe aussi des exigences indirectes sur l'entrepôt qui précède cette distribution : si l'aide doit arriver intacte, en quantité et en qualité au bénéficiaire, cela suppose un entrepôt qui la protège entre la réception et la sortie.",
    highlight: "Un entrepôt qui respecte les standards de base réduit mécaniquement le risque de perte, de vol et de détournement — bien avant même de parler d'inventaire ou de logiciel de gestion.",
  },
  {
    type: 'checklist',
    title: "Les 3 exigences de base d'un entrepôt humanitaire conforme",
    items: [
      "La disposition — un espace organisé par catégorie (médical, alimentaire, NFI/biens non alimentaires), avec des allées de circulation dégagées pour l'inspection, la manutention et l'évacuation d'urgence.",
      "La sécurité physique — accès verrouillé, registre des entrées/sorties de personnel, séparation claire entre la zone de stockage et la zone de réception/expédition.",
      "Le contrôle d'accès — une liste fermée de personnes autorisées à entrer en zone de stockage, avec une raison enregistrée à chaque entrée, pour pouvoir reconstituer ce qui s'est passé le jour où un écart apparaît.",
    ],
  },
  {
    type: 'concept',
    title: 'FIFO et FEFO : deux logiques, pas une option de préférence',
    body: [
      "FIFO (First In, First Out) : le premier article entré est le premier sorti. C'est la logique par défaut pour tout ce qui n'a pas de date de péremption — bâches, couvertures, kits NFI, pièces détachées.",
      "FEFO (First Expired, First Out) : l'article dont la date de péremption est la plus proche sort en premier, indépendamment de sa date d'entrée en stock. C'est la règle obligatoire pour tout produit médical ou alimentaire — un lot arrivé la semaine dernière peut périmer avant un lot arrivé il y a trois mois.",
    ],
    highlight: "Piège classique : ranger les nouveaux arrivages devant les anciens \"pour que ce soit plus simple à charger\" inverse silencieusement la logique FEFO. La solution : les nouveaux lots stockés physiquement derrière les anciens, avec la date de péremption visible sur chaque palette.",
  },
  {
    type: 'comparison-table',
    title: 'Quelle logique appliquer, selon l\'article',
    columns: ['Situation', 'Logique à appliquer'],
    rows: [
      ['Kits NFI, bâches, outils, pièces détachées', 'FIFO'],
      ['Médicaments, vaccins, réactifs de laboratoire', 'FEFO (obligatoire)'],
      ['Denrées alimentaires (CSB+, huile, farine enrichie)', 'FEFO (obligatoire)'],
      ['Carburant, lubrifiants', 'FEFO si date de péremption indiquée par le fournisseur, FIFO sinon'],
    ],
  },
  {
    type: 'concept',
    title: 'La fiche de stock : le document qui doit toujours dire la vérité',
    body: "Une fiche de stock (stock card) ou fiche de casier (bin card) enregistre chaque mouvement — entrée, sortie, quantité, date, référence du document source. Sa règle d'or : elle se met à jour au moment du mouvement, jamais après coup, jamais \"de mémoire\" en fin de journée. C'est la seule preuve écrite, indépendante du système informatique, que le stock déclaré correspond au stock réel — celle qu'un audit ou un bailleur recoupe avec les bons de réception et de sortie signés.",
  },
  {
    type: 'concept',
    title: "Pourquoi un écart d'inventaire n'est jamais une broutille administrative",
    body: [
      "Redevabilité envers les bailleurs — l'aide humanitaire est financée par des fonds publics ou des dons, souvent avec obligation contractuelle de traçabilité complète ; un écart non expliqué peut entraîner un remboursement ou la suspension d'un financement.",
      "Risque de détournement — un écart répété sur les mêmes catégories (carburant, médicaments, denrées alimentaires) est le signal classique d'un détournement organisé, pas d'une simple erreur de comptage.",
      "Impact direct sur les bénéficiaires — chaque unité manquante au moment de la distribution est une personne qui ne reçoit pas ce qui lui était destiné.",
    ],
    highlight: "Un inventaire physique n'est pas un exercice comptable déconnecté du terrain : c'est un outil de protection — de l'organisation, de l'équipe entrepôt, et des bénéficiaires.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Stock card / bin card', definition: "Fiche de suivi des mouvements d'un article ou d'un emplacement, mise à jour à chaque entrée et sortie." },
      { term: 'FIFO / FEFO', definition: "Le plus ancien entré sort en premier / le plus proche de la péremption sort en premier — priorité absolue sur le périssable." },
      { term: 'Shrinkage (perte de stock)', definition: "Différence entre stock théorique et stock physique non expliquée par un mouvement documenté — casse, vol, erreur, péremption non retirée." },
      { term: 'Buffer stock (stock tampon)', definition: "Quantité minimale conservée en réserve pour absorber un pic de demande ou une rupture d'approvisionnement." },
      { term: 'Cycle count (comptage tournant)', definition: "Inventaire physique partiel, réalisé régulièrement sur une partie du stock, en complément de l'inventaire complet périodique." },
    ],
  },
  {
    type: 'process',
    title: 'Organiser et contrôler un entrepôt humanitaire dès la prise de poste',
    steps: [
      { title: 'Faire un état des lieux physique de la disposition', body: "Jour 1 : catégories séparées, allées dégagées, accès verrouillé et limité — notez tout écart avant de le corriger." },
      { title: 'Transférer le stock existant dans le template dédié', body: "Jour 1-3, dans fiche-inventaire-entrepot-fifo-fefo.xlsx : référence, désignation, catégorie, lot, péremption. Le stock disponible et l'alerte FEFO se calculent automatiquement." },
      { title: 'Trier physiquement selon la logique FEFO', body: "Jour 2-3 : les lots à péremption la plus proche deviennent les plus accessibles, jamais en fond d'étagère — c'est cette étape, pas seulement le tableau, qui rend FEFO applicable au quotidien." },
      { title: 'Consulter la synthèse par catégorie', body: "Jour 3 puis chaque semaine : stock disponible total, articles en alerte \"URGENT\", articles périmés — votre outil de pilotage hebdomadaire." },
      { title: 'Réaliser un inventaire complet puis des comptages tournants', body: "Jour 5 puis en continu : un inventaire complet établit une base fiable ; des comptages tournants réguliers sur des sous-ensembles détectent un problème avant qu'il ne devienne difficile à expliquer." },
      { title: 'Documenter systématiquement tout écart', body: "Dès qu'un écart est détecté, avec rapport-ecarts-stock.docx : jamais d'ajustement silencieux du chiffre système." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Écart constaté après une distribution médicale, Maiduguri, Nigeria"',
    scenario: "Le système indiquait 480 cartons de RUTF (aliment thérapeutique prêt à l'emploi) disponibles sur le lot L2026-047 (péremption dans 6 semaines). La distribution a officiellement consommé 320 cartons. Le comptage physique après distribution n'en trouve que 135, au lieu des 160 attendus. La porte de la zone de stockage est restée ouverte une partie de l'après-midi, et un autre lot (L2026-052, péremption dans 4 mois) était stocké devant le lot L2026-047.",
    steps: [
      "Vérifier ce que l'alerte FEFO automatique aurait dû signaler avant la distribution — le lot L2026-047 aurait-il dû sortir en priorité ?",
      "Calculer l'écart en unités et en pourcentage (160 attendus contre 135 comptés) et documenter au moins deux causes crédibles : porte restée ouverte, mauvais respect du tri FEFO, erreur de comptage possible.",
      "Proposer une action corrective concrète et une mesure préventive applicable — pas seulement \"renforcer la vigilance\".",
      "S'assurer que les chiffres du rapport d'écart correspondent exactement à ceux de la fiche d'inventaire mise à jour.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Mélanger FIFO et FEFO par habitude — sur du médical ou de l'alimentaire, FEFO n'est jamais une option, même quand elle contredit l'ordre d'arrivée physique des lots.",
      "Ignorer la procédure de radiation des produits endommagés ou périmés — un article laissé \"en attente de décision\" fausse tous vos chiffres de stock disponible.",
      "Négliger l'étiquetage des casiers et emplacements — un entrepôt illisible physiquement génère des erreurs de préparation, même avec une fiche de stock parfaite sur le papier.",
      "Traiter un inventaire annuel unique comme suffisant — un écart accumulé sur douze mois devient quasiment impossible à expliquer.",
      "Ajuster un écart dans le système sans le documenter — cela fait disparaître l'information qui permettrait de repérer un problème récurrent avant qu'il ne devienne un détournement avéré.",
    ],
  },
  {
    type: 'exercise',
    title: "Inventaire, rapport d'écart et action corrective",
    instructions: "À partir du cas de Maiduguri, ajoutez les lots L2026-047 et L2026-052 dans fiche-inventaire-entrepot-fifo-fefo.xlsx avec leurs dates de péremption, et vérifiez l'alerte FEFO qui aurait dû s'afficher avant la distribution. Rédigez ensuite le rapport avec rapport-ecarts-stock.docx : quantité attendue (160) contre quantité comptée (135), écart en unités et en pourcentage, au moins deux causes crédibles, une action corrective et une mesure préventive concrètes.",
    deliverable: "La fiche d'inventaire mise à jour et le rapport d'écart complété, cohérents entre eux.",
  },
  {
    type: 'recap',
    items: [
      "Je sais citer les trois exigences de base d'un entrepôt humanitaire conforme.",
      "Je sais expliquer la différence entre FIFO et FEFO et dire, pour n'importe quel article, laquelle des deux logiques s'applique.",
      "Je sais ce que doit contenir une fiche de stock et à quel moment elle doit être mise à jour.",
      "Je comprends pourquoi un écart d'inventaire est un enjeu de redevabilité et pas seulement un détail comptable.",
      "J'ai mis à jour une fiche d'inventaire et rédigé un rapport d'écart cohérents avec les templates fournis.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 05 — Chaîne du Froid & Produits Médicaux.',
  },
]
