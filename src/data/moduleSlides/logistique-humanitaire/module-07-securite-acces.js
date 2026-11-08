// Module 07 — Sécurité, Accès & Gestion des Risques
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Sécurité, Accès & Gestion des Risques',
    hook: "Un convoi qui part sans évaluation sérieuse du risque met en jeu des vies, pas seulement un planning. Ce module vous donne une méthode pour décider — accepter, réduire ou renoncer — au lieu d'appliquer un réflexe unique sous pression.",
  },
  {
    type: 'objectives',
    items: [
      "Construire une évaluation des risques sécuritaires pour un itinéraire ou un mouvement logistique, en utilisant une logique probabilité × impact.",
      "Choisir entre acceptation, atténuation et évitement du risque pour une situation donnée, au lieu d'appliquer un réflexe unique.",
      "Distinguer un incident d'un near-miss (un événement qui aurait pu mal tourner mais a été évité de justesse) et savoir pourquoi les deux doivent être reportés avec la même rigueur.",
      "Appliquer les principes du CICR (Comité International de la Croix-Rouge) pour négocier un accès sécurisé avec un acteur armé, sans compromettre la neutralité de votre organisation.",
      "Produire une fiche de reporting d'incident exploitable par votre coordination sécurité dans l'heure suivant un événement.",
    ],
  },
  {
    type: 'concept',
    title: 'La logique probabilité × impact',
    body: "Une bonne évaluation des risques répond à une seule question opérationnelle : ce mouvement vaut-il la peine d'être fait, et si oui, dans quelles conditions ? La méthode consiste à noter chaque risque sur deux axes de 1 à 5 : la probabilité (à quelle fréquence ce risque se matérialise réellement, à partir de faits récents, jamais d'une impression) et l'impact (les conséquences pour les personnes, les biens et la mission si le risque se matérialise).",
    highlight: "Le score = probabilité × impact donne une hiérarchie sur une échelle de 1 à 25. Un score élevé ne veut pas dire \"on n'y va pas\" — il veut dire \"on n'y va pas sans mesure d'atténuation, ou on y va autrement\".",
  },
  {
    type: 'concept',
    title: 'Les trois stratégies face à un risque',
    body: [
      "L'acceptation : le risque est jugé suffisamment faible pour continuer sans mesure supplémentaire — un choix légitime, mais qui doit être écrit noir sur blanc, pas simplement \"on a décidé d'y aller\".",
      "L'atténuation : vous réduisez la probabilité ou l'impact par une mesure concrète (reconnaissance préalable, convoi groupé, horaires ajustés, négociation d'accès). C'est la stratégie la plus fréquente en logistique humanitaire.",
      "L'évitement : vous renoncez à l'itinéraire, au mode de transport ou au calendrier prévu, parce qu'aucune atténuation ne ramène le risque à un niveau acceptable. Décréter une zone no-go en est un exemple — rarement populaire, souvent vital.",
    ],
    highlight: "Le risque résiduel — ce qui subsiste après les mesures d'atténuation — doit guider la décision finale, pas le score initial, et doit être revu après chaque mouvement.",
  },
  {
    type: 'concept',
    title: "Pourquoi le reporting d'incident n'est pas de la paperasse",
    body: "Un rapport d'incident a deux fonctions vitales : l'accountability immédiate (la coordination doit savoir dans l'heure ce qui s'est passé, pas l'apprendre trois jours plus tard par rumeur) et la détection de motifs à l'échelle de la mission (cinq incidents similaires sur le même tronçon en un mois sont un signal qui doit changer une décision opérationnelle). C'est pour cette deuxième raison que le near-miss doit être reporté avec la même rigueur qu'un incident réalisé.",
    highlight: "Un near-miss non reporté est une information perdue qui aurait pu éviter le prochain incident, réel celui-là.",
  },
  {
    type: 'checklist',
    title: "Les principes CICR pour négocier avec un acteur armé",
    items: [
      "Le dialogue s'établit avec tous les acteurs qui contrôlent l'accès, sans exception ni préférence — refuser de parler à un acteur armé par principe revient souvent à abandonner les populations sous son contrôle.",
      "Le contenu du dialogue reste strictement humanitaire : accès, sécurité du personnel et des convois, respect du matériel médical ou alimentaire.",
      "La transparence sur le mandat : l'acteur armé doit comprendre précisément qui vous êtes, ce que vous transportez, et pourquoi.",
      "Aucune contrepartie n'est négociée au-delà du passage sécurisé lui-même — ni paiement disproportionné, ni service qui dépasse le cadre logistique.",
      "Chaque accord d'accès est documenté et daté — un accord verbal avec un chef local peut ne plus être reconnu par son successeur trois semaines plus tard.",
    ],
  },
  {
    type: 'concept',
    title: 'Négocier, documenter, avancer — sans attendre une garantie qui n\'existera jamais',
    body: "Le Module 01 a introduit une distinction essentielle : la neutralité n'est pas la passivité. Rester neutre ne signifie pas refuser de parler aux acteurs armés qui contrôlent l'accès à une zone — cela signifie encadrer strictement comment cette négociation se déroule.",
    highlight: "Le piège classique : attendre une confirmation officielle et complète avant d'agir, par confusion entre prudence et paralysie. Le professionnel expérimenté négocie, documente, et avance avec un risque résiduel géré.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Acceptation / atténuation / évitement', definition: "Les trois réponses possibles face à un risque : continuer sans changement, réduire le risque par une mesure concrète, ou renoncer au mouvement tel que prévu." },
      { term: 'Dissuasion (deterrence)', definition: "Mesure visant à décourager une menace par une présence ou une communication visible (ex. signalisation humanitaire claire), à distinguer de l'atténuation." },
      { term: 'Zone no-go', definition: "Zone où aucun mouvement logistique n'est autorisé sans dérogation explicite de la direction pays, le risque étant jugé inacceptable même après atténuation." },
      { term: 'Proof of life protocol', definition: "Procédure prédéfinie permettant de confirmer, en cas d'enlèvement ou de disparition, qu'une personne est toujours en vie." },
      { term: 'Incident vs near-miss', definition: "Un incident est un événement sécuritaire réalisé avec conséquence ; un near-miss est un événement évité de justesse — les deux se reportent selon la même procédure." },
      { term: 'Risque résiduel', definition: "Le niveau de risque qui subsiste une fois les mesures d'atténuation appliquées — c'est ce niveau qui doit guider la décision finale." },
    ],
  },
  {
    type: 'process',
    title: "Évaluer et sécuriser un itinéraire logistique avant un mouvement",
    steps: [
      { title: "Collecter l'information sécuritaire récente", body: "Dernier point sécurité, alertes du Logistics Cluster, retour direct des chauffeurs et du staff national — une information non datée n'a pas de valeur." },
      { title: 'Compléter la grille de risques', body: "Dans grille-evaluation-risques-securite.xlsx : décrire chaque risque factuellement, noter probabilité et impact de 1 à 5 (score automatique), renseigner une mesure d'atténuation et le risque résiduel obtenu." },
      { title: "Décider : acceptation, atténuation ou évitement", body: "Pour chaque risque significatif, pas seulement pour l'itinéraire dans son ensemble — la trace écrite protège bénéficiaires, équipe et organisation." },
      { title: 'Mettre en place le dispositif de communication du convoi', body: "Groupe WhatsApp dédié, points de situation à heure fixe, protocole clair en cas de silence radio prolongé." },
      { title: "Rédiger la fiche de reporting dans l'heure en cas d'incident ou de near-miss", body: "Avec fiche-reporting-incident.docx : identification, personnes et biens impliqués, chronologie factuelle, action immédiate, suivi requis." },
      { title: 'Mettre à jour la grille après chaque mouvement', body: "Une grille non actualisée depuis plusieurs semaines dans un contexte instable n'est plus fiable." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Convoi médical vers Rutshuru, Nord-Kivu, RDC"',
    scenario: "Un convoi de deux véhicules doit livrer du matériel médical à un centre de santé partenaire, à trois heures de route de Goma. Un groupe armé non étatique tient un checkpoint informel depuis trois semaines sur l'axe ; deux véhicules d'une autre ONG l'ont franchi sans incident la semaine dernière après négociation. Un tronçon de 8 km est en mauvais état depuis les dernières pluies. Un near-miss a été rapporté oralement par un chauffeur d'une autre organisation, sans rapport écrit. Une rupture de stock de médicaments essentiels est prévue dans 4 jours si la livraison n'a pas lieu.",
    steps: [
      "Documenter les trois risques identifiés (checkpoint armé, état de la route, near-miss non confirmé) avec probabilité, impact, mesure d'atténuation et risque résiduel pour chacun.",
      "Vérifier dans l'onglet Synthèse si un ou plusieurs risques nécessitent une validation hiérarchique avant le départ.",
      "Justifier par écrit la décision finale (acceptation, atténuation ou évitement) pour l'itinéraire dans son ensemble, sans laisser l'urgence médicale faire baisser artificiellement le score de risque.",
      "Si le convoi est retenu 40 minutes au checkpoint pour inspection avant de repartir sans incident violent, qualifier correctement l'événement (incident ou near-miss) et documenter l'action immédiate prise.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Sous-reporter les near-miss par crainte d'être blâmé — un near-miss bien reporté protège la prochaine équipe, il ne sanctionne pas la précédente.",
      "Traiter le briefing sécurité comme un événement ponctuel — la grille de risques doit être un document vivant, révisé à chaque nouvelle information.",
      "Ignorer la connaissance situationnelle des chauffeurs et du staff national au profit des cartes du siège.",
      "Confondre un accord verbal ponctuel avec un accès sécurisé durable — un changement de chef ou de contexte peut l'annuler du jour au lendemain.",
      "Sous-estimer la pression du calendrier programme face à un risque réel — l'urgence ne doit jamais faire baisser artificiellement un score de risque.",
    ],
  },
  {
    type: 'exercise',
    title: "Grille de risques et fiche de reporting",
    instructions: "À partir du cas de Rutshuru, complétez grille-evaluation-risques-securite.xlsx en documentant les trois risques du briefing avec probabilité, impact, mesure d'atténuation et risque résiduel, puis justifiez par écrit votre décision finale pour l'itinéraire. Rédigez ensuite fiche-reporting-incident.docx pour l'événement du checkpoint de Kiwanja, en qualifiant correctement s'il s'agit d'un incident ou d'un near-miss.",
    deliverable: "La grille de risques avec décision finale justifiée, et la fiche de reporting tenant sur une à deux pages maximum.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer la différence entre acceptation, atténuation et évitement d'un risque, avec un exemple logistique concret pour chacun.",
      "Je sais calculer un score de risque (probabilité × impact) et interpréter un risque résiduel après mesure d'atténuation.",
      "Je sais pourquoi un near-miss doit être reporté avec la même rigueur qu'un incident réalisé.",
      "J'ai rédigé une fiche de reporting d'incident factuelle, chronologique et tenant sur une à deux pages.",
      "Je peux citer au moins trois principes du CICR pour la négociation d'accès avec un acteur armé.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 08 — Systèmes d'Information & Reporting Logistique.",
  },
]
