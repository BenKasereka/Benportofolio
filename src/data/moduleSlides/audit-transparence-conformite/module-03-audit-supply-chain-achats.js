// Module 03 — Audit de la Supply Chain & des Achats
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Audit de la Supply Chain & des Achats',
    hook: "Un dossier d'achat peut être impeccable sur le papier — trois devis, trois signatures, un prix correct — et cacher une entente entre fournisseurs qu'aucun dossier pris seul ne révèle jamais. Ce module vous apprend à auditer un cycle d'achats entier sans tout vérifier, et à repérer les schémas de collusion invisibles dossier par dossier.",
  },
  {
    type: 'objectives',
    items: [
      "Vérifier le respect des seuils et des procédures d'achat — devis simple (RFQ) ou appel d'offres formel (RFP/ITB) selon le montant — sur un échantillon de dossiers, sans avoir à examiner 100% de la population.",
      "Construire une grille d'audit par dossier permettant de noter objectivement la conformité procédurale, indépendamment du fait que le prix final \"semble correct\".",
      "Détecter, dans un jeu de données d'achats réel, les red flags (signaux d'alerte) typiques d'une collusion entre fournisseurs.",
      "Auditer un écart d'inventaire et distinguer méthodiquement une simple erreur de gestion d'un signal de détournement.",
      "Restituer un constat d'audit factuel et appuyé sur preuves documentaires, sans accusation prématurée ni conclusion hâtive.",
    ],
  },
  {
    type: 'concept',
    title: "Auditer le PROCESSUS, pas le résultat",
    body: [
      "L'erreur la plus fréquente chez un auditeur junior est de se demander \"est-ce que ce prix est raisonnable ?\" en premier. Cette question a sa place, mais elle vient en second. La première question d'un audit d'achats est toujours : la procédure suivie était-elle la bonne, et a-t-elle été respectée intégralement ?",
      "Un prix correct obtenu par un processus non conforme ne prouve rien sur l'absence de fraude — il prouve seulement que, cette fois-là, le résultat a été acceptable. Le même mécanisme peut produire, le mois suivant, un prix gonflé de 40% chez un fournisseur complice.",
    ],
    highlight: "L'audit de conformité des achats ne juge pas un résultat isolé : il juge la fiabilité du système qui produit ce résultat, dossier après dossier.",
  },
  {
    type: 'concept',
    title: 'Un dossier peut être "non conforme" même sans perte financière',
    body: "Un dossier peut être classé non conforme en audit même si le bailleur n'a payé ni trop cher ni pour un bien non livré — parce que le nombre de devis exigé n'a pas été respecté, parce que le comité d'achat n'a pas siégé au quorum requis, ou parce que l'analyse comparative des offres (CBA) a été signée après la commande et non avant. Ces non-conformités procédurales sont exactement les failles qu'un cas de fraude plus sophistiqué exploitera la fois où le prix, lui, ne sera plus honnête.",
  },
  {
    type: 'stat-callout',
    stat: '3 red flags',
    caption: "les signaux d'alerte d'une collusion fournisseurs",
    context: "Pris séparément, aucun n'est une preuve — mais leur combinaison, ou leur répétition sur plusieurs dossiers, doit toujours déclencher une investigation approfondie.",
  },
  {
    type: 'comparison-table',
    title: 'Typologie des red flags de collusion fournisseurs',
    columns: ['Red flag', 'Ce qu\'il faut chercher', 'Pourquoi c\'est un signal fort'],
    rows: [
      ['Prix identiques à la décimale près', 'Deux offres "concurrentes" qui proposent exactement le même prix unitaire', 'Deux fournisseurs indépendants n\'aboutissent statistiquement jamais à une identité parfaite sans concertation'],
      ['Coordonnées partagées sous raisons sociales différentes', 'Même téléphone, même adresse, même email ou même signataire sur des entreprises officiellement distinctes', 'C\'est l\'indicateur le plus fiable et le plus facile à vérifier'],
      ['Alternance régulière des gagnants', 'Un petit groupe fermé de 2-3 fournisseurs qui remportent les marchés à tour de rôle', 'C\'est le schéma classique du "bid rotation" : les fournisseurs se partagent les marchés'],
    ],
  },
  {
    type: 'concept',
    title: "Écart d'inventaire : erreur de gestion ou signal de détournement ?",
    body: [
      "Un écart entre le stock théorique et le stock physique n'est pas en soi une preuve de vol. Une part d'écart est normale : erreurs de comptage, produits périmés retirés sans mise à jour, mauvaise application du FEFO (First Expired, First Out — sortir en priorité les produits dont la date d'expiration est la plus proche).",
      "Un écart de gestion est généralement dispersé sur plusieurs petites références et documentable a posteriori. Un écart de détournement potentiel est généralement concentré sur une ou deux références à forte valeur, récurrent sur plusieurs inventaires successifs, et impossible à justifier même après recherche active.",
    ],
    highlight: "Le réflexe indispensable : croiser systématiquement les données d'achats avec les données d'inventaire. Un achat parfaitement documenté qui n'apparaît jamais comme une entrée en stock est l'un des signaux les plus forts qui existent en audit de supply chain.",
  },
  {
    type: 'process',
    title: 'Auditer un cycle d\'achats sans tout vérifier',
    steps: [
      { title: 'Définir la population et la période d\'audit', body: 'Listez tous les dossiers de la période, leur répartition par palier de seuil, et les fournisseurs impliqués.' },
      { title: 'Échantillonner par risque, pas au hasard', body: 'Priorisez selon des critères explicites : montant proche d\'un seuil, fournisseur récurrent, dossier signalé incomplet, zone à risque.' },
      { title: 'Remplir la grille de vérification dossier par dossier', body: 'Seuil déclaré vs montant payé, procédure suivie vs seuil, CBA complète, quorum du comité d\'achat — chaque "Non" commenté avec la pièce manquante.' },
      { title: 'Croiser les dossiers échantillonnés avec l\'inventaire', body: 'Pour tout bien physique, vérifiez l\'entrée en stock correspondante. Une absence est une anomalie prioritaire.' },
      { title: 'Élargir la lecture à toute la population', body: 'Les red flags de collusion ne se voient presque jamais sur un dossier isolé — comparez les fournisseurs gagnants et les prix sur l\'ensemble du registre.' },
      { title: 'Conclure et restituer', body: 'Distinguez toujours la faiblesse procédurale corrigible de ce qui nécessite une escalade vers une investigation formelle.' },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Échantillonnage par risque', definition: 'Sélection raisonnée des dossiers à auditer en priorisant ceux qui présentent le plus de facteurs de risque, par opposition à un tirage purement aléatoire.' },
      { term: 'Bid rigging / collusion fournisseurs', definition: 'Entente entre soumissionnaires censés être concurrents pour fausser le résultat d\'une mise en concurrence.' },
      { term: 'Bid rotation', definition: 'Forme de collusion où un groupe de fournisseurs se partage les marchés à tour de rôle sur une période donnée.' },
      { term: 'FEFO', definition: 'First Expired, First Out — règle de gestion de stock imposant de sortir en priorité les produits dont la date d\'expiration est la plus proche.' },
      { term: '3-way match', definition: 'Rapprochement entre la commande (PO), le bon de réception (GRN) et la facture, avant tout paiement — le point de contrôle où un achat fictif est le plus souvent détecté.' },
      { term: "Écart d'inventaire", definition: 'Différence entre le stock théorique enregistré et le stock physique constaté lors d\'un inventaire.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Les deux fournisseurs qui ne se croisent jamais, Nigeria"',
    scenario: "Sur un registre de 74 dossiers d'achats, un échantillon de 18 dossiers par risque paraît irréprochable : devis suffisants, CBA cohérente, PV signé. C'est en élargissant la lecture aux 74 dossiers que vous remarquez qu'Agro-Delta Supplies et Novak Trading Ltd remportent, à eux deux, 19 marchés sur 21 en alternant presque parfaitement — et que le prix \"perdant\" de l'un est identique au centime près à un prix qu'il avait lui-même proposé, en tant que gagnant, quatre mois plus tôt.",
    steps: [
      "Un score de conformité procédurale élevé sur l'échantillon ne dit rien de l'existence d'une entente entre fournisseurs — ce sont deux questions différentes.",
      "Le pattern d'alternance et les prix identiques ne se voient qu'à l'échelle de la population complète, jamais dossier par dossier.",
      "Documenter précisément le pattern observé avec la fiche de détection de collusion, sans conclure soi-même à la fraude.",
      "Pour les marchés portant sur des biens physiques, croiser systématiquement avec le registre d'inventaire.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Auditer 100% des dossiers au lieu d'un échantillon raisonné par risque — ce temps mal alloué manque ensuite pour l'étape la plus rentable : comparer les fournisseurs entre eux.",
      "Écarter un pattern suspect parce que chaque dossier, pris isolément, est irréprochable — la conformité procédurale et l'entente entre fournisseurs sont deux questions distinctes.",
      "Ne jamais croiser les données d'achats avec les données d'inventaire — un des signaux les plus forts qui existent en audit de supply chain.",
      "Confondre \"je soupçonne une collusion\" avec \"je peux l'affirmer dans mon rapport\" — le rôle de l'auditeur est de factualiser et de recommander l'escalade.",
      "Se laisser rassurer par l'ancienneté ou la réputation d'un fournisseur \"qu'on connaît depuis toujours\" — cette confiance acquise retarde justement la détection.",
    ],
  },
  {
    type: 'exercise',
    title: 'Grille de conformité, fiche de collusion et croisement inventaire',
    instructions: "Complétez grille-audit-echantillon-achats.xlsx : justifiez une taille d'échantillon d'au moins 18 dossiers sur 74 compte tenu du niveau de risque, puis notez que chaque dossier échantillonné obtient individuellement un score de conformité élevé. Remplissez fiche-detection-collusion-fournisseurs.docx en documentant le nombre de marchés remportés par chaque fournisseur, le motif d'alternance et les prix identiques relevés. Décrivez enfin, en 4-5 lignes, la vérification exacte que vous mèneriez dans le registre d'inventaire pour les 6 marchés portant sur des intrants physiques.",
    deliverable: 'La grille complétée, la fiche de détection remplie, et la note de croisement inventaire (demi-page max).',
  },
  {
    type: 'recap',
    items: [
      "Je sais construire un échantillon de dossiers pondéré par le risque et justifier sa taille.",
      "Je sais remplir une grille de conformité par dossier et calculer un taux de conformité global.",
      "Je sais expliquer pourquoi un score de conformité élevé ne suffit pas à écarter un risque de collusion.",
      "Je sais identifier les trois red flags principaux de collusion sur un registre d'achats réel.",
      "Je sais pourquoi et comment croiser systématiquement un dossier d'achat physique avec l'inventaire.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 04 — Audit Financier & Comptable.',
  },
]
