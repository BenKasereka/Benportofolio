// Module 03 — Gestion de Flotte & Transport en Zones Complexes
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Gestion de Flotte & Transport en Zones Complexes',
    hook: "Un véhicule mal géré, c'est un chauffeur en danger et un budget qui dérive sans que personne ne le voie venir. Ce module vous donne les réflexes et les outils pour garder le contrôle d'une flotte, même sur un terrain que rien ne planifie.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer pourquoi une flotte humanitaire se gère différemment d'une flotte commerciale, et en tirer des règles concrètes de dimensionnement et d'affectation.",
      "Calculer et interpréter un coût par kilomètre (cost-per-km) par véhicule pour détecter une dérive avant qu'elle ne devienne un problème budgétaire ou sécuritaire.",
      "Appliquer une politique de priorité de réquisition des véhicules qui protège la mission des conflits d'usage entre programmes.",
      "Tenir un carnet de bord (logbook, le registre chronologique de chaque trajet d'un véhicule) comme un véritable outil de contrôle, et l'utiliser pour détecter une anomalie avant l'incident.",
      "Mettre en place une organisation de flotte minimale mais fiable, exploitable dès l'arrivée sur une mission qui n'en a pas encore.",
    ],
  },
  {
    type: 'concept',
    title: 'Un terrain mixte et dégradé, pas planifié',
    body: "Une entreprise de transport commerciale optimise le coût, le délai et le taux de remplissage. Une flotte humanitaire optimise ces mêmes variables, mais sous une contrainte supplémentaire qui change tout : l'accès n'est jamais garanti. En RDC comme au Tchad ou au Soudan du Sud, un même trajet peut combiner asphalte, piste latéritique et franchissement de rivière à gué. La maintenance préventive doit être calée sur les kilomètres réels ET sur le type de terrain, jamais sur un calendrier générique importé du siège.",
  },
  {
    type: 'concept',
    title: "La sécurité prime sur l'efficience",
    body: "Un itinéraire plus court qui traverse une zone à risque n'est pas automatiquement le bon choix — parfois, l'itinéraire le plus long est le seul acceptable.",
    highlight: "Le coût par kilomètre d'une flotte humanitaire sera structurellement plus élevé que celui d'une flotte commerciale équivalente — un logisticien doit pouvoir l'expliquer à un bailleur qui compare vos chiffres à un référentiel qui n'a pas ce contexte.",
  },
  {
    type: 'concept',
    title: 'La fatigue des conducteurs : une question de sécurité, pas de confort',
    body: "Un chauffeur qui roule 11 heures d'affilée sur une piste dégradée, seul, dans une zone où un checkpoint peut apparaître à tout moment, n'a plus les réflexes nécessaires pour gérer une négociation d'accès ou éviter un accident.",
    highlight: "Une politique de flotte sérieuse fixe un maximum de 8 à 9 heures effectives de conduite par jour sur piste (moins en zone à tension élevée), impose un second chauffeur pour les trajets longs, et interdit la conduite de nuit hors urgence vitale documentée.",
  },
  {
    type: 'concept',
    title: 'Le coût par kilomètre : détecter une dérive avant qu\'elle ne coûte cher',
    body: "Le cost-per-km s'obtient en additionnant carburant, entretien, réparations, assurance et amortissement sur une période, divisé par les kilomètres parcourus. Un véhicule dont le coût par km augmente de mois en mois sans explication signale un problème mécanique qui s'aggrave ou une anomalie de consommation à investiguer. C'est aussi le chiffre que la plupart des bailleurs institutionnels demandent pour justifier la ligne budgétaire transport : un logisticien qui ne peut pas le produire en quelques minutes perd du temps en période d'audit, et de la crédibilité face au bailleur.",
  },
  {
    type: 'concept',
    title: "La politique d'utilisation des véhicules : l'arbitre écrit d'avance",
    body: "Sans règle écrite, un véhicule de mission devient un objet de négociation informelle entre programmes, où le service qui crie le plus fort obtient le véhicule. Une politique d'utilisation fixe par écrit qui peut réquisitionner (une fonction, pas un nom), selon quel ordre de priorité (urgence médicale et sécurité toujours avant la logistique de routine), et quelles utilisations sont interdites (usage personnel, transport de tiers non autorisés).",
    highlight: "Sans cette politique, l'arbitrage se fait au rapport de force. Avec elle, il se fait sur des critères objectifs, documentés, et défendables devant n'importe qui.",
  },
  {
    type: 'concept',
    title: "Le carnet de bord : un outil de contrôle, pas de la paperasse",
    body: "Le carnet de bord est le seul document qui permet de répondre, avec preuve, à trois questions : où était ce véhicule à telle date et heure, qui le conduisait, et sa consommation était-elle cohérente avec le trajet déclaré ? Un écart significatif et répété entre kilométrage déclaré et carburant consommé est le signal le plus fiable de détournement de carburant — l'un des vols les plus fréquents et les plus coûteux en contexte humanitaire, parce qu'il se dissimule facilement dans le bruit d'une activité normale.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Cost-per-km', definition: "Coût total d'exploitation d'un véhicule sur une période, divisé par les kilomètres parcourus — l'indicateur de référence pour détecter une dérive et justifier un budget transport." },
      { term: 'Carnet de bord (logbook)', definition: "Registre chronologique obligatoire de chaque trajet (date, conducteur, kilométrage, motif, carburant), preuve d'usage et outil de détection d'anomalie." },
      { term: 'Fuel management', definition: "Procédures de suivi de la consommation de carburant (bons de carburant, rapprochement avec le kilométrage, seuils d'alerte) pour prévenir la fraude." },
      { term: 'Ratio de consommation attendu', definition: "Fourchette de consommation (litres/100 km) propre à chaque modèle et type de terrain, utilisée comme référence pour repérer un écart anormal." },
    ],
  },
  {
    type: 'process',
    title: 'Mettre en place un système de gestion de flotte fiable en zone complexe',
    steps: [
      { title: 'Recenser la flotte et ouvrir un onglet dédié par véhicule', body: "Jour 1, dans carnet-de-bord-vehicule.xlsx : immatriculation, modèle, date de mise en service, consommation théorique constructeur." },
      { title: 'Former les conducteurs à la saisie AVANT de l\'exiger', body: "Jour 1-2 : un carnet mal rempli parce que mal expliqué donne une fausse impression de contrôle. Le kilométrage se relève sur le compteur au moment exact du départ et de l'arrivée, jamais estimé après coup." },
      { title: 'Saisir les trajets au fil de l\'eau', body: "En continu, dans l'onglet Trajets : les calculs de consommation et d'écart sont automatiques, une mise en forme conditionnelle signale en rouge tout écart au-delà du seuil d'alerte, à vérifier chaque semaine." },
      { title: 'Consulter le tableau de bord pour le suivi mensuel', body: "Chaque fin de mois : kilométrage total, carburant consommé et coût par kilomètre par véhicule et par conducteur, prêts pour la coordination et le reporting bailleur." },
      { title: "Rédiger ou adapter la politique d'utilisation des véhicules", body: "Semaine 1, avec politique-utilisation-vehicules.docx, signée par chaque conducteur et responsable de programme habilité — une politique non signée n'a aucune force." },
      { title: "Planifier chaque mission avec une vérification d'itinéraire préalable", body: "Avant tout trajet non routinier : tracés alternatifs sur Google Maps, croisement avec la dernière information sécuritaire, activation du suivi GPS ou du check-in WhatsApp avant le départ." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Convoi bloqué à un check-point contesté, Nord-Kivu, RDC"',
    scenario: "Un véhicule de la flotte (« V-03 »), conduit par un chauffeur expérimenté avec un infirmier superviseur à bord, part pour une mission de supervision médicale. En fin de matinée, il est arrêté à un check-point non officiel tenu par un groupe armé non identifié, qui exige un « droit de passage » en carburant pour laisser passer les véhicules. En parallèle, le carnet de bord de V-03 montre une consommation en hausse d'environ 18 % sur deux semaines, sans mission exceptionnelle qui l'explique.",
    steps: [
      "Ne jamais autoriser un « droit de passage » en carburant sans en informer immédiatement la coordination sécurité — un paiement non documenté devient un précédent et un risque pour la neutralité perçue de l'organisation.",
      "Exiger des informations précises avant toute décision et remonter l'incident en parallèle à la coordination sécurité, et le cas échéant au Logistics Cluster.",
      "Traiter l'anomalie de consommation comme un signal possible de détournement de carburant à vérifier, sans pour autant accuser le chauffeur avant d'avoir croisé les bons de carburant et l'état mécanique.",
      "Mener les deux investigations — incident sécuritaire et anomalie de consommation — en parallèle, sans laisser l'urgence de l'une faire oublier l'autre.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Accepter un « droit de passage » sans le documenter ni le remonter — un paiement en nature non documenté aujourd'hui devient une exigence systématique demain.",
      "Confondre un carnet de bord rempli et un carnet de bord fiable — le remplissage régulier ne dispense jamais du rapprochement mensuel avec les bons de carburant réellement délivrés.",
      "Reporter la maintenance préventive « parce que le véhicule roule encore bien » — la panne finit presque toujours par arriver au pire moment, jamais tranquillement au garage.",
      "Laisser un seul conducteur faire un trajet long et isolé sans relais ni check-in prévu — la fatigue et l'isolement retardent la détection d'un problème de plusieurs heures inutiles.",
      "Traiter l'anomalie de consommation comme un problème purement mécanique — ou l'inverse, accuser un chauffeur avant toute vérification factuelle croisée.",
    ],
  },
  {
    type: 'exercise',
    title: 'Incident check-point, anomalie de consommation et mise à jour de la politique',
    instructions: "À partir du cas du Nord-Kivu, rédigez la marche à suivre transmise au dispatcheur pour l'incident du check-point, en justifiant chaque recommandation par un principe explicite. Simulez ensuite l'investigation de l'anomalie de consommation dans carnet-de-bord-vehicule.xlsx : quelles lignes croiser en priorité, quelles pièces justificatives demander, à partir de quel écart un signalement formel s'impose. Identifiez enfin la section de politique-utilisation-vehicules.docx à compléter pour ce type de situation, et rédigez le paragraphe correspondant.",
    deliverable: 'Les trois réponses rédigées, plus le classeur avec les lignes de l\'anomalie identifiées.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer en quoi une flotte humanitaire diffère structurellement d'une flotte commerciale.",
      "Je sais calculer un coût par kilomètre par véhicule et l'utiliser pour du reporting bailleur.",
      "J'ai complété le carnet de bord pour au moins un véhicule fictif et vérifié que les formules et alertes fonctionnent.",
      "J'ai adapté la politique d'utilisation des véhicules avec les règles spécifiques d'un contexte de mission donné.",
      "Je sais distinguer une décision d'urgence sécuritaire d'une investigation de fraude, et je sais qu'elles se mènent en parallèle.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 04 — Entrepôt & Gestion des Stocks.',
  },
]
