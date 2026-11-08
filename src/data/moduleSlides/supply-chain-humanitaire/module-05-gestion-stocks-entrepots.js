// Module 05 — Gestion des Stocks & Entrepôts
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Gestion des Stocks & Entrepôts',
    hook: "Vous allez apprendre pourquoi signer un bon de livraison sans avoir tout vérifié est l'un des gestes les plus risqués de tout l'entrepôt — et comment produire, en quelques minutes, un document de réception qui protège votre organisation des mois plus tard, en plein audit bailleur.",
  },
  {
    type: 'objectives',
    items: [
      "Réaliser un processus de réception conforme, en vérifiant systématiquement la marchandise livrée contre la commande d'achat (Purchase Order, ou PO) et le packing list (le document qui détaille le contenu réel d'un envoi), avant toute signature.",
      'Effectuer un contrôle qualité documenté à la réception et appliquer la procédure correcte de rejet total ou partiel en cas d\'écart.',
      "Assurer un suivi par lot et par date de péremption qui reste exploitable en cas de rappel de produit ou de question d'un bailleur, des mois plus tard.",
      "Réconcilier un inventaire physique avec les registres du système ERP (le logiciel de gestion intégrée de l'organisation) et expliquer un écart avec des causes crédibles, pas des suppositions.",
      'Distinguer, à chaque étape de la chaîne réception → stockage → sortie, ce qui relève de l\'opérationnel entrepôt de ce qui relève de la redevabilité SCM vis-à-vis du bailleur (l\'organisme qui finance le projet) et de l\'organisation.',
    ],
  },
  {
    type: 'concept',
    title: 'La réception : un point de contrôle contractuel, pas une simple livraison',
    body: [
      "Sur le terrain, on entend souvent \"le camion est arrivé, on décharge\" comme si la réception se résumait à un geste logistique. Une réception, au sens SCM du terme, est le moment où vous vérifiez que ce qui arrive physiquement correspond à ce qui a été commandé et engagé contractuellement.",
      "Un chef d'entrepôt qui décharge sans comparer le bon de livraison du transporteur à la PO transforme un écart contractuel en simple problème administratif à régler \"plus tard\". Plus tard, c'est souvent trop tard : le transporteur est reparti et le fournisseur a déjà été payé.",
    ],
    highlight: "La réception se fait toujours en trois documents simultanés — la PO, le packing list et le comptage physique réel. Un seul de ces trois éléments, pris isolément, ne prouve rien.",
  },
  {
    type: 'concept',
    title: 'Pourquoi le contrôle qualité à la réception change tout',
    body: [
      'Le réflexe naturel, sous la pression d\'un camion qui attend, est de vérifier la quantité et de laisser la qualité "se voir plus tard, à l\'usage". C\'est l\'inverse de ce qu\'impose une gestion SCM sérieuse : un contrôle fait à la réception permet de rejeter maintenant, pendant que le fournisseur est encore responsable et présent.',
      "Un contrôle qualité à la réception porte au minimum sur : l'état des emballages, la cohérence entre l'étiquetage et le produit livré, la date de péremption restante, et un échantillonnage physique pour les lots volumineux plutôt qu'une vérification visuelle du seul carton du dessus.",
    ],
    highlight: 'Un rejet à la réception n\'est jamais un échec de la procédure — c\'est la procédure qui fonctionne. Le vrai échec, c\'est de signer une réception conforme sur un produit défectueux "parce qu\'on verra bien".',
  },
  {
    type: 'concept',
    title: 'Le suivi par lot : un outil de traçabilité, pas seulement de rotation physique',
    body: [
      "La gestion des stocks par lot a un usage opérationnel immédiat en entrepôt : savoir quoi sortir en premier physiquement. Mais le numéro de lot est avant tout un identifiant de traçabilité SCM — celui qui permet de répondre, des mois après la réception, à des questions comme \"ce lot a-t-il été distribué, et où ?\" ou \"si le fournisseur signale un défaut, quels stocks sont concernés ?\"",
      "Un suivi par lot qui n'existe que sur une étiquette physique, sans lien enregistré vers le document de réception qui l'a fait entrer dans le système, devient inutilisable pour un rappel de produit ciblé ou une réponse à un bailleur.",
    ],
  },
  {
    type: 'concept',
    title: 'La réconciliation d\'inventaire : un exercice de redevabilité',
    body: [
      "Réconcilier un inventaire physique avec le système ERP consiste à comparer ce qui est réellement compté en entrepôt avec ce que le système déclare, ligne par ligne, lot par lot. C'est l'un des exercices les plus scrutés par les bailleurs et les auditeurs : la preuve, ou l'absence de preuve, que l'organisation sait où se trouve l'aide qu'elle a mandat de distribuer.",
      "Un écart non expliqué n'est jamais anodin : il peut signaler une simple erreur de saisie, ou un problème plus grave qui s'accumule silencieusement d'un inventaire à l'autre. La différence se voit dans la qualité de l'explication qui accompagne l'écart, pas dans le chiffre lui-même.",
    ],
    highlight: "Une réconciliation audit-ready répond toujours à trois questions par écart constaté : quelle est l'ampleur exacte de l'écart, quelle est la cause la plus probable, et quelle action corrective a été engagée, avec qui l'a validée ?",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'PO (Purchase Order / commande d\'achat)', definition: 'Document contractuel qui engage l\'organisation et le fournisseur sur une quantité, une qualité et un prix donnés — la référence de base de toute réception conforme.' },
      { term: 'Packing list', definition: "Document fourni par le fournisseur ou le transporteur, détaillant le contenu réel d'un envoi — à confronter systématiquement à la PO et au comptage physique." },
      { term: 'GRN (Goods Received Note / bon de réception)', definition: 'Document interne qui formalise ce qui a réellement été reçu et accepté, avec le résultat du contrôle qualité — c\'est lui, pas le bon de livraison du transporteur, qui fait foi côté organisation.' },
      { term: 'Rejet partiel / rejet total', definition: 'Décision documentée de refuser tout ou partie d\'une livraison non conforme, avec justification écrite et notification au fournisseur.' },
      { term: 'Réconciliation d\'inventaire', definition: 'Comparaison systématique entre comptage physique et registres ERP, avec documentation de tout écart et de son traitement.' },
      { term: 'Audit-readiness', definition: "État dans lequel les documents et registres d'une organisation permettent de répondre, à tout moment, aux questions d'un auditeur ou d'un bailleur sans reconstitution a posteriori." },
    ],
  },
  {
    type: 'process',
    title: 'Du camion qui arrive au registre qui doit dire la vérité',
    steps: [
      { title: "Préparer la réception avant l'arrivée du camion", body: 'Sortir la PO et le packing list, préparer le bon de réception et contrôle qualité avec les quantités attendues déjà reportées.' },
      { title: 'Compter et contrôler avant de signer quoi que ce soit', body: "Comptage physique et contrôle qualité (emballages, étiquetage, échantillonnage, péremption résiduelle) — ne jamais signer le bon de livraison avant la fin de cette étape." },
      { title: "Laisser le calcul d'écart automatique guider la décision", body: 'Accepter intégralement, partiellement (en documentant précisément) ou rejeter la ligne — sur la base de l\'écart calculé, pas de l\'impression générale.' },
      { title: 'Documenter tout rejet avec rigueur, et reporter les numéros de lot', body: 'Motif précis (dommage, quantité manquante, péremption trop proche), et numéro de lot pour tout article périssable — indispensable pour un rappel de produit ciblé.' },
      { title: "Enregistrer la réception validée dans l'ERP", body: 'Reporter les quantités effectivement acceptées, pas celles de la PO initiale.' },
      { title: "Réconcilier périodiquement le stock physique avec l'ERP", body: "Comptage réel, comparaison avec le registre ERP, documentation de l'écart, de sa cause et de l'action corrective — jamais de réconciliation \"sur papier\"." },
      { title: 'Communiquer au fournisseur et tracer toute sortie de stock', body: "Transmettre formellement toute décision de rejet ou d'acceptation partielle ; documenter toute sortie (livraison, transfert, carburant) avec la même rigueur qu'une réception." },
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de signer un bon de livraison',
    items: [
      'Ai-je comparé la PO, le packing list et le comptage physique réel ?',
      "Ai-je effectué le contrôle qualité (emballages, étiquetage, péremption résiduelle, échantillonnage) séparément du comptage ?",
      "Ai-je reporté les numéros de lot pour tout article périssable ou à risque de rappel ?",
      'Tout écart ou rejet est-il documenté par écrit, avec quantité et motif précis ?',
    ],
  },
  {
    type: 'case-study',
    title: 'Cas pratique — Livraison de suppléments nutritionnels, Port-au-Prince, Haïti',
    scenario: "Une livraison de suppléments nutritionnels (RUTF) arrive, correspondant à une PO de 600 cartons en lot unique. Le packing list du fournisseur annonce bien 600 cartons, mais répartis sur deux lots non mentionnés à la commande : 450 cartons (lot A) et 150 cartons (lot B). Le comptage physique ne trouve que 580 cartons : les 450 du lot A, et seulement 130 du lot B. Sur ces 130, 12 cartons montrent des emballages écrasés et humides, avec une décoloration visible du produit. Le lot B périme dans 10 semaines, contre 7 mois pour le lot A.",
    steps: [
      'Décider, pour chaque lot, entre acceptation totale, acceptation partielle documentée ou rejet total — en laissant le calcul d\'écart automatique guider la décision.',
      "Rédiger un rapport de réconciliation si l'ERP a été mis à jour sur la base des 600 cartons annoncés avant vérification complète.",
      'Envoyer une communication précise au fournisseur, chiffres à l\'appui, sur l\'écart de quantité et la non-conformité qualité.',
    ],
  },
  {
    type: 'exercise',
    title: 'Bon de réception, réconciliation et communication fournisseur',
    instructions: "Complétez bon-de-reception-controle-qualite.xlsx pour les deux lots (quantités attendues, reçues, résultat du contrôle qualité, décision justifiée par écrit). Rédigez rapport-reconciliation-inventaire-erp.docx en indiquant le comptage physique réel, le registre ERP erroné, l'écart, au moins deux causes plausibles et l'action corrective. Rédigez enfin en 5 à 8 lignes le message à envoyer au fournisseur, chiffres exacts à l'appui.",
    deliverable: 'Les trois documents, avec des chiffres qui concordent entre eux du premier au dernier.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (réception et stocks)',
    items: [
      "Signer le bon de livraison du transporteur avant vérification complète — une fois signé, un écart découvert cinq minutes plus tard devient très difficile à faire valoir.",
      'Mal documenter un rejet — noter "carton abîmé, refusé" sans quantité précise, sans référence de lot ni signature n\'est pas une documentation, c\'est une source de litige garantie.',
      'Réconcilier un inventaire "sur papier", en ajustant le chiffre système sans comptage physique réel préalable.',
      'Traiter réception et contrôle qualité comme une seule étape rapide sous pression de temps, ce qui conduit à sous-évaluer les non-conformités qualité.',
      "Ne pas tracer les numéros de lot dès la réception, ce qui rend impossible tout rappel de produit ciblé plus tard.",
    ],
  },
  {
    type: 'recap',
    items: [
      'Je sais expliquer pourquoi une réception se vérifie contre trois documents (PO, packing list, comptage physique) et non contre un seul.',
      'Je sais mener un contrôle qualité documenté à la réception et distinguer acceptation totale, partielle et rejet total.',
      'Je comprends la différence entre le suivi de lot pour la rotation physique et le suivi de lot comme outil de traçabilité SCM.',
      "J'ai complété un bon de réception et un rapport de réconciliation cohérents avec le calcul d'écart automatique.",
      'Je sais identifier, dans une réception réelle, les informations à documenter en priorité pour rester "audit-ready" plusieurs mois plus tard.',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 06 — Distribution & Last-Mile Delivery : de l\'entrepôt au dernier kilomètre.',
  },
]
