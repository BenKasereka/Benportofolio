// Module 06 — Distribution & Last-Mile Delivery
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran. Style aligné sur la référence de la formation IA (module 01).
export default [
  {
    type: 'cover',
    title: 'Distribution & Last-Mile Delivery',
    hook: "Tout ce que vous avez planifié en amont — achat, dédouanement, transport, stockage — se joue en quelques heures sur le point de distribution, sous les yeux de toute la communauté. Ce module vous apprend à livrer l'aide à des centaines ou des milliers de bénéficiaires sans incident, en protégeant à la fois leur sécurité, leur dignité et la réputation de votre organisation.",
  },
  {
    type: 'objectives',
    items: [
      "Planifier la chaîne logistique complète d'une distribution, de l'entrepôt jusqu'au point de distribution final.",
      "Constituer et vérifier l'intégrité d'une liste de bénéficiaires avant toute distribution, pour empêcher les doubles-enregistrements.",
      "Mettre en place un système de vérification d'identité — jetons numérotés ou outil de collecte mobile — adapté à la taille et au risque du site.",
      "Conduire un PDM (Post-Distribution Monitoring, le suivi réalisé après une distribution pour vérifier que l'aide a bien atteint les bénéficiaires ciblés) et en tirer des mesures correctives documentées.",
      "Traiter une plainte via un CFM (Complaints and Feedback Mechanism, le mécanisme de plaintes et de retour communautaire), de l'enregistrement à la clôture justifiée.",
    ],
  },
  {
    type: 'concept',
    title: 'Le dernier maillon : le plus visible, le plus risqué',
    body: "C'est le seul moment de toute la chaîne où l'organisation est physiquement face à des centaines, parfois des milliers de bénéficiaires en même temps. C'est aussi le moment où le plus grand nombre de choses peuvent mal tourner, et où elles tournent mal sous les yeux de tout le monde : bailleurs en visite, journalistes, autorités locales, communauté entière.",
  },
  {
    type: 'concept',
    title: 'Trois raisons rendent ce maillon particulièrement sensible',
    body: [
      "La sécurité physique — rassembler plusieurs centaines de personnes, parfois en compétition pour des ressources rares, dans un espace limité, crée un risque de mouvement de foule ou d'incident sécuritaire qui n'existe à aucune autre étape de la chaîne.",
      "La dignité des bénéficiaires — files interminables au soleil, absence d'ombre ou d'eau, traitement brusque : la qualité de l'accueil sur le site fait partie intégrante de l'aide délivrée, pas un supplément optionnel.",
      "La redevabilité publique — contrairement à un entrepôt ou un bureau, une distribution se déroule devant témoins. Toute anomalie devient immédiatement visible et peut compromettre la réputation de l'organisation bien au-delà du site concerné.",
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi l'intégrité des listes de bénéficiaires est non négociable",
    body: [
      "Le double-enregistrement — un même individu ou ménage s'inscrit sur plusieurs listes, parfois sous une identité légèrement modifiée. Multiplié sur une distribution de plusieurs milliers de bénéficiaires, l'effet cumulé peut représenter des dizaines de tonnes de marchandises détournées de leur objectif.",
      "Le risque de détournement par des tiers — des listes mal sécurisées ouvrent la porte à l'ajout de bénéficiaires fictifs par du personnel local ou des intermédiaires, souvent en échange d'une commission prélevée sur l'aide distribuée.",
    ],
    highlight: "Une liste de bénéficiaires doit être verrouillée avant le jour de distribution, croisée avec les listes des tours précédents et, si possible, avec celles des autres acteurs présents sur le même site. Toute modification de dernière minute doit passer par une validation documentée — jamais une décision orale sur le site le jour même.",
  },
  {
    type: 'concept',
    title: "La logique d'un mécanisme de feedback communautaire (CFM)",
    body: "Un CFM n'est pas un service après-vente optionnel : c'est un outil de redevabilité envers les populations affectées, au même titre qu'un rapport financier l'est envers un bailleur. Il repose sur trois piliers : l'accessibilité (un canal que les bénéficiaires connaissent réellement et peuvent utiliser sans risque de représailles), la traçabilité (chaque plainte enregistrée, horodatée, suivie jusqu'à sa clôture) et la clôture justifiée (aucune plainte n'est fermée sans une action documentée, même quand elle s'avère non fondée).",
    highlight: "Un CFM bien utilisé remonte des signaux d'alerte précoces — plaintes répétées sur un même point, un même agent, un même quartier — qui permettent de corriger un problème avant qu'il ne devienne une crise de confiance généralisée avec la communauté.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'PDM (Post-Distribution Monitoring)', definition: "Suivi réalisé après une distribution pour vérifier que l'aide a atteint les bénéficiaires ciblés, dans les quantités et la qualité prévues, et pour recueillir leur retour sur le processus." },
      { term: 'Taux de couverture', definition: 'Pourcentage de bénéficiaires ciblés effectivement atteints lors d\'une distribution — indicateur clé du PDM.' },
      { term: 'CFM (Complaints and Feedback Mechanism)', definition: 'Mécanisme structuré de réception, traitement et clôture des plaintes et retours des bénéficiaires.' },
      { term: 'Double-enregistrement', definition: "Inscription d'un même bénéficiaire ou ménage sur plusieurs listes de distribution, par erreur ou intentionnellement, entraînant une double réception de l'aide." },
    ],
  },
  {
    type: 'process',
    title: 'Planifier et exécuter une journée de distribution',
    steps: [
      { title: 'Verrouiller et croiser la liste de bénéficiaires (J-7 à J-3)', body: 'Croisez la liste finale avec les tours précédents et les autres organisations présentes, cherchez les doublons, puis verrouillez-la : toute modification ultérieure doit être documentée et validée.' },
      { title: 'Calculer les besoins logistiques amont (J-5 à J-3)', body: "Dans plan-logistique-distribution-pdm.xlsx, calculez rotations de camion, agents requis par poste et chronogramme de la journée — avec toujours une marge de temps pour les imprévus." },
      { title: 'Dimensionner le site et la gestion de foule (J-3 à J-1)', body: "Vérifiez la capacité d'accueil au pic de la journée, les zones d'ombre et points d'eau, un circuit à sens unique clair, et un dispositif de sécurité proportionné à la foule attendue." },
      { title: 'Organiser la vérification des bénéficiaires (Jour J, dès l\'ouverture)', body: "Chaque bénéficiaire est vérifié sur la liste verrouillée — via Kobo Toolbox/ODK ou jeton numéroté. Toute anomalie est isolée sans interrompre le flux ni créer d'esclandre public." },
      { title: 'Documenter la distribution en temps réel (Jour J)', body: "Un agent dédié, qui ne distribue pas physiquement, enregistre ménages servis, incidents et plaintes dans registre-plaintes-feedback-communautaire.docx — jamais de mémoire en fin de journée." },
      { title: 'Conduire le suivi post-distribution, PDM (J+2 à J+7)', body: "Sur un échantillon de ménages servis, vérifiez quantité, qualité et délai reçus. Le taux de couverture se calcule automatiquement ; tout écart doit déclencher une analyse des causes." },
      { title: 'Clôturer les plaintes avec une action documentée (jusqu\'à J+14)', body: "Pour chaque plainte, une action doit être consignée avant clôture. Une plainte marquée « résolue » sans ligne d'action renseignée n'est pas traitée aux yeux d'un auditeur." },
    ],
  },
  {
    type: 'checklist',
    title: 'Avant le jour J — dimensionner le site',
    items: [
      "La capacité réelle d'accueil du site est-elle vérifiée par rapport au nombre de bénéficiaires attendus au pic de la journée ?",
      "Le site dispose-t-il de zones d'ombre et de points d'eau ?",
      "Le circuit est-il à sens unique (entrée, vérification, distribution, sortie) pour éviter reflux et bousculades ?",
      "Le dispositif de sécurité est-il proportionné à la taille de la foule attendue — pas seulement à la taille du site lors d'un tour précédent plus petit ?",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Sous-estimer la taille de la foule et les besoins sécuritaires en dimensionnant le site sur le seul nombre de ménages ciblés, sans les accompagnants et curieux.",
      "Ne pas croiser les listes de bénéficiaires avec les tours précédents — une porte ouverte au double-enregistrement répété.",
      "Clôturer une plainte du CFM sans suivi documenté — équivalent, en cas d'audit, à ne pas l'avoir traitée du tout.",
      "Déléguer entièrement la gestion de foule aux gardes ou aux autorités locales, sans que le staff de distribution y participe activement.",
      "Improviser une correction de liste le jour J, sous la pression d'un chef de communauté ou d'une file qui s'impatiente.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — Distribution NFI, site de déplacés, N\'Djamena, Tchad',
    scenario: "Vous êtes Supply Chain Officer pour une ONG internationale, au 3e tour de distribution de kits NFI (Non-Food Items) sur un site regroupant environ 1 800 ménages. Vers 10h30, sous une chaleur écrasante, la file déborde faute de balisage suffisant tandis qu'un agent signale un nom déjà marqué « servi » une heure plus tôt — un cas apparent de double-passage.",
    steps: [
      "Ne pas interrompre l'ensemble de la distribution : résorber le débordement de foule sans créer de panique.",
      "Isoler le cas de double-passage suspecté vers un point de vérification secondaire, sans exposer publiquement la personne concernée.",
      "Faire participer activement le staff de distribution à la gestion de foule, pas seulement les gardes ou les autorités locales.",
      "Documenter l'incident en temps réel, via un agent dédié qui ne distribue pas physiquement.",
    ],
  },
  {
    type: 'exercise',
    title: 'Plan logistique, PDM et registre de plaintes',
    instructions: "À partir du cas de N'Djamena, complétez plan-logistique-distribution-pdm.xlsx pour 1 800 ménages ciblés, en révisant à la hausse l'estimation du pic horaire et du staffing de gestion de foule. Simulez ensuite un suivi post-distribution sur un échantillon de 60 ménages, avec au moins 3 ménages présentant un écart de couverture. Consignez enfin le cas de double-passage dans registre-plaintes-feedback-communautaire.docx, avec une référence anonymisée, l'action prise sur le moment et un statut de suivi cohérent avec une clôture qui ne peut pas encore être définitive.",
    deliverable: "Une réponse écrite d'une page maximum sur la gestion des incidents, le fichier Excel complété et le registre Word complété.",
  },
  {
    type: 'recap',
    items: [
      "Je sais calculer les besoins de transport et de staffing pour une distribution à partir du nombre de ménages ciblés.",
      "Je sais pourquoi une liste de bénéficiaires doit être verrouillée et croisée avec les tours précédents avant chaque distribution.",
      "Je sais organiser un circuit de site qui limite le risque de bousculade.",
      "Je sais isoler un cas de double-passage suspecté sans interrompre la distribution ni exposer publiquement la personne concernée.",
      "Je sais expliquer pourquoi un CFM est un outil de redevabilité, pas une formalité de conformité.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 07 — Transport International & Dédouanement : sécuriser une expédition internationale de la signature de la commande jusqu\'au dossier prêt pour le dédouanement.',
  },
]
