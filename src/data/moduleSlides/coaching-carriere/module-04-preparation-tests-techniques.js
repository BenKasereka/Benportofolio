// Module 04 — Préparation aux Tests Techniques & Études de Cas
// Référence pas à pas : chaque procédure du module (cadrage de l'épreuve et
// banque de sujets, bases éliminatoires par secteur, séance chronométrée et
// grille d'entraînement, structuration d'une étude de cas avec le gabarit Word,
// défense à voix haute, pilotage de la progression et jour J) est détaillée
// étape par étape et appliquée à un cas fil rouge unique (Joël Kabeya et Amina
// Tshibola, fictifs), à partir du contenu source (01-theorie.md, 02-outils.md,
// 03-exercices.md) et des templates du dossier 04-templates.
export default [
  // ─────────────────────────────── OUVERTURE ───────────────────────────────
  {
    type: 'cover',
    title: 'Préparation aux Tests Techniques & Études de Cas',
    hook: "À la fin de ce module, vous aurez en main une fiche de cadrage de votre épreuve, une banque de sujets, quatre fiches de révision sectorielles, une grille d'entraînement chronométrée remplie séance après séance, un gabarit de réponse à une étude de cas complété en 30 minutes et une restitution orale de 3 minutes défendue sous questions — la préparation méthodique qui remplace le « on verra bien le jour J ».",
  },
  {
    type: 'objectives',
    items: [
      "Cadrer une épreuve de recrutement à partir de l'annonce et de la convocation (secteurs testés, format, durée, langue, matériel), en produisant une fiche de cadrage d'une page et une banque de 10 à 12 sujets d'entraînement.",
      "Réviser les bases éliminatoires de la supply chain, de la finance, des ressources humaines et de la gestion de projet en résolvant un exercice chiffré type par secteur, en produisant 4 fiches de révision d'une page.",
      "Conduire une séance d'entraînement sans jamais mettre le minuteur en pause, puis la consigner dans la grille d'entraînement chronométré (onglet « Entraînement ») avec un score honnête et un point à améliorer précis, en produisant une ligne complète par séance.",
      "Structurer en 30 minutes une réponse à une étude de cas avec le gabarit Word (contexte, contraintes chiffrées, au moins deux options, proposition reliée aux contraintes, trois questions pièges), en produisant un gabarit complété de 1 à 2 pages.",
      "Présenter votre proposition à voix haute en 3 minutes sans lire vos notes, puis la défendre sous objections avec des faits, en produisant un enregistrement et une auto-évaluation notée sur 10.",
      "Piloter votre progression en lisant l'onglet « Progression » toutes les 5 séances, distinguer un problème de gestion du temps d'un problème de fond, et ajuster votre plan, en produisant un plan d'entraînement corrigé et un protocole de jour J.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Vous ne repartez pas avec des conseils généraux : vous repartez avec 6 livrables, produits dans cet ordre, qui servent directement le jour de votre épreuve — et à votre entretien final (module 05).",
      "Cas fil rouge — Joël Kabeya, Superviseur MEAL à Goma (RDC), que vous connaissez depuis le module 01. Après son audit de carrière, son CV réécrit et sa lettre, sa candidature au poste de Responsable MEAL chez Terres Solidaires International (TSI, organisation fictive) a franchi la présélection. Le lundi 11 janvier 2027, il reçoit sa convocation : épreuve écrite de 60 minutes le jeudi 4 février 2027 à 9 h, puis étude de cas avec 30 minutes de préparation et 10 minutes de restitution l'après-midi. Il s'entraîne avec Amina Tshibola, la logisticienne du module 01, qui passe de son côté un test de coordinatrice supply chain dans une ONG médicale (Clinique Mobile Internationale, fictive) le vendredi 5 février. Chacun joue le jury de l'autre.",
    ],
    bullets: [
      "Livrable 1 — Fiche de cadrage de l'épreuve et banque de 10 à 12 sujets (Procédure 1).",
      "Livrable 2 — Quatre fiches de révision sectorielles : supply chain, finance, RH, gestion de projet (Procédure 2).",
      "Livrable 3 — Grille d'entraînement chronométré remplie, une ligne par séance (Procédure 3).",
      "Livrable 4 — Gabarit de structuration de réponse à une étude de cas complété, 1 à 2 pages (Procédure 4).",
      "Livrable 5 — Restitution orale de 3 minutes enregistrée, défendue sous trois questions pièges (Procédure 5).",
      "Livrable 6 — Onglet « Progression » lu, plan d'entraînement ajusté et protocole de jour J (Procédure 6).",
    ],
    table: {
      columns: ['Date', 'Étape', 'Joël (Responsable MEAL, TSI)', 'Amina (Coordinatrice supply chain, CMI)'],
      rows: [
        ['Lun. 11/01/2027', 'Convocations reçues', 'Écrit 60 min + étude de cas 30 + 10 min, jeu. 04/02', 'Étude de cas 30 + 10 min, ven. 05/02'],
        ['11 – 15/01', 'Cadrage et bases', 'Fiche de cadrage, banque de sujets, fiches de révision', 'Fiche de cadrage, banque de sujets, fiches de révision'],
        ['13/01 – 02/02', 'Entraînement', '10 séances chronométrées, 3 formats', '8 séances, dont 4 études de cas supply chain'],
        ['Jeu. 04/02 – ven. 05/02', 'Jours J', 'Épreuve écrite puis étude de cas', 'Étude de cas avec restitution orale'],
      ],
    },
    tip: "Les dates sont celles d'un calendrier réel de janvier-février 2027 : bloquez les vôtres dans votre agenda avant de tourner la page. Une préparation qui n'a pas de date ne se fait pas.",
  },

  // ─────────────────────────── THÉORIE ESSENTIELLE ──────────────────────────
  {
    type: 'stat-callout',
    stat: '30 à 90 minutes',
    caption: "Le temps réellement imposé par la plupart des tests techniques de recrutement : fixe, non négociable, et très souvent découvert pour la première fois le jour de l'épreuve.",
    context: "Le temps réel de préparation fait partie de l'épreuve. S'entraîner sans minuteur, en s'accordant « encore 5 minutes », ne prépare à rien : ce sont précisément ces 5 minutes que vous n'aurez pas le jour J.",
  },
  {
    type: 'concept',
    title: 'Ce qu\'un jury note réellement : votre méthode, pas la « bonne réponse »',
    body: [
      "Un test technique de recrutement humanitaire n'est presque jamais un examen scolaire où il existerait UNE bonne réponse à retrouver. Des candidats obtiennent un score élevé avec une proposition finale imparfaite, d'autres sont éliminés avec un chiffre juste : la différence se joue sur ce que le résultat révèle de votre raisonnement.",
      "Un jury sait qu'en contexte réel vous n'avez jamais toutes les ressources, tout le temps ni toutes les informations. Le test le simule volontairement. La question posée n'est pas « avez-vous trouvé la solution idéale ? » mais « avez-vous su choisir, parmi des options imparfaites, celle qui est réalisable avec ce qui est disponible ? ».",
    ],
    example: {
      title: "Deux copies, même énoncé, même chiffre final",
      lines: [
        "Copie 1 — La bonne réponse chiffrée, écrite en tête de page, sans contexte ni option, sans mention du risque. Le jury ne sait pas comment le candidat y est arrivé : note faible.",
        "Copie 2 — Un résultat un peu faux, mais un contexte reformulé, 4 contraintes listées, 3 options comparées, un risque nommé et une solution de repli : note élevée.",
      ],
    },
    highlight: "Un test technique ne mesure pas votre mémoire, il mesure votre méthode. Et une méthode, contrairement à un savoir encyclopédique, s'entraîne et se reproduit à volonté — c'est tout l'objet de ce module.",
  },
  {
    type: 'concept',
    title: "Les 4 éléments notés, dans l'ordre d'importance",
    body: "Un jury ou une grille de correction note quatre choses. Pour chacune, sachez ce qui est lu comme un signal positif et ce qui est lu comme un signal éliminatoire.",
    table: {
      columns: ['Élément noté', 'Ce que le jury cherche', 'Signal positif', 'Signal éliminatoire'],
      rows: [
        ['1. Structure de la pensée', 'Un problème découpé en éléments traitables', 'Contexte, contraintes, options, proposition, dans cet ordre', 'Contraintes, hypothèses et solution mélangées dans un seul paragraphe'],
        ['2. Priorisation sous contrainte', 'Un choix réalisable avec ce qui est disponible', 'Option retenue reliée à des chiffres précis de l\'énoncé', 'Solution « propre » qui demande 3 véhicules quand l\'énoncé n\'en cite qu\'un'],
        ['3. Rigueur technique sectorielle', 'Les bases du métier maîtrisées', 'Calcul juste, vocabulaire exact, étapes dans le bon ordre', 'Ne pas savoir lire un budget ligne par ligne, confondre livrable et activité'],
        ['4. Défense et ajustement', 'Une position tenue avec des faits, ajustée si l\'objection est pertinente', 'Réponse factuelle puis ajustement conditionnel', 'Reculer à la première objection, ou s\'entêter face à un fait nouveau'],
      ],
    },
    tip: "Les pondérations varient selon les organisations. Un exemple de grille (fictif) : structure 30 points, priorisation 25, rigueur technique 25, défense 20. Même si votre épreuve est écrite, les trois premiers éléments restent notés.",
  },
  {
    type: 'comparison-table',
    title: "Les formats d'épreuve : ce qui est noté et votre arme principale",
    columns: ['Format', 'Durée typique', 'Noté en priorité', 'Votre arme principale'],
    rows: [
      ['Test technique écrit', '45 à 60 min', 'Exactitude technique et raisonnement visible', 'Budget temps par question, hypothèses écrites'],
      ['Étude de cas écrite', '45 à 90 min (repère indicatif)', 'Structure, contraintes chiffrées, options comparées', 'Gabarit en 5 sections'],
      ['Étude de cas avec restitution orale', '20 à 30 min de préparation, puis environ 10 min de restitution et de questions', 'Structure, puis défense sous objections', 'Gabarit rempli transformé en plan oral ; questions pièges préparées'],
      ['Exercice pratique chronométré (tableur, calcul budgétaire)', '30 à 60 min (repère indicatif)', 'Exactitude, cohérence des chiffres, hypothèses', 'Les 5 contrôles avant de rendre'],
      ['Simulation orale / soutenance', '10 à 30 min (repère indicatif)', 'Aplomb, ajustement face à l\'objection', 'Méthode Reformuler – Faits – Position – Ajustement'],
    ],
  },
  {
    type: 'concept',
    title: "La logique d'une étude de cas humanitaire : un scénario volontairement incomplet",
    body: [
      "Qu'elle porte sur une rupture de stock, une crise de trésorerie terrain, un conflit d'équipe ou une réponse d'urgence, une étude de cas suit presque toujours la même mécanique : un scénario incomplet, des contraintes de ressources et de délai, et l'attente d'une proposition défendable — pas d'une solution parfaite qui n'existerait que sur le papier.",
      "L'erreur la plus fréquente, y compris chez des candidats expérimentés, est de sauter à la solution la plus « propre » techniquement sans avoir compris le contexte réel. Sur le terrain, une solution techniquement parfaite mais irréalisable avec les ressources, le personnel ou le délai disponibles n'est pas une bonne réponse : c'est une réponse hors-sujet.",
    ],
    example: {
      title: "Anatomie d'un énoncé — le cas du module, annoté",
      lines: [
        "Chiffres donnés : 12 000 personnes ; 4 jours de stock ; protocole de 15 jours ; livraison habituelle en 12 jours ; alternative en 5 jours à +40 % ; budget engagé à 70 %.",
        "Contraintes implicites : kits de traitement d'une malnutrition aiguë sévère, donc pas de rationnement possible sans avis médical ; fournisseur alternatif non vérifié, donc un risque qualité.",
        "Manques volontaires : montant du budget d'urgence, consommation journalière, accès routier, délais de validation du siège. Vous les traitez par une hypothèse annoncée à voix haute.",
        "Question finale : « Que proposez-vous ? » — une décision, pas un exposé.",
      ],
    },
    tip: "Un manque volontaire n'est pas un piège : c'est une invitation à poser une hypothèse chiffrée, à la dire (« je pars de l'hypothèse que… ») et à indiquer comment vous la vérifieriez.",
  },
  {
    type: 'concept',
    title: 'La méthode en 5 temps : contexte → contraintes → options → proposition → défense',
    body: "C'est la mécanique que vous appliquerez à chaque étude de cas du module, avec le gabarit Word pour ne jamais la perdre de vue sous pression. Chaque temps a sa section dans le gabarit et son budget de minutes sur une préparation de 30 minutes.",
    table: {
      columns: ['Temps', 'Question à vous poser', 'Où l\'écrire dans le gabarit', 'Minutes (sur 30)'],
      rows: [
        ['0. Lecture', 'Qu\'est-ce qui est chiffré ? Qu\'est-ce qui manque ?', 'Marges de l\'énoncé', '3'],
        ['1. Contexte', 'Où, quoi, depuis quand, pour qui ?', 'Section 1', '3'],
        ['2. Contraintes', 'Que ne puis-je pas faire (ressources, temps, accès, sécurité) ?', 'Section 2 (deux colonnes)', '5'],
        ['3. Options', 'Quelles pistes réalistes, avec quels avantages et quels risques ?', 'Section 3 (options A, B, C)', '8'],
        ['4. Proposition', 'Quelle option, justifiée par quels chiffres ?', 'Section 4', '5'],
        ['5. Défense', 'Quelles objections viendront, et quelle réponse factuelle ?', 'Section 5 (3 questions)', '5'],
        ['Relecture', 'Les chiffres sont-ils cités ? Le risque est-il nommé ?', 'Cartouche « Rédigé par » et date', '1'],
      ],
    },
    pitfall: "Commencer à rédiger ou à parler avant d'avoir listé les contraintes. Le candidat se contredit presque toujours en cours de route ou oublie un élément clé du scénario — ce qu'un jury repère immédiatement.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Test technique sectoriel', definition: "Épreuve écrite ou pratique évaluant vos connaissances et votre raisonnement dans un domaine précis (supply chain, finance, RH, gestion de projet), généralement chronométrée et notée sur grille." },
      { term: 'Étude de cas', definition: "Scénario réaliste et volontairement incomplet, à analyser puis à traiter par une proposition structurée et défendable, à l'écrit ou devant un jury." },
      { term: 'Question piège', definition: "Question posée délibérément pour tester votre capacité à défendre ou à ajuster votre raisonnement sous objection, pas pour vous faire « perdre » au sens scolaire." },
      { term: 'Temps réel de préparation', definition: "Le temps effectivement imposé par le processus de recrutement (souvent 30 à 90 minutes), à respecter dès l'entraînement — jamais simulé « à tête reposée » sans chronomètre." },
      { term: 'Stock de sécurité', definition: "Réserve minimale fixée à l'avance (ici par le protocole médical : 15 jours) qu'on ne consomme pas en temps normal et qui absorbe retards et variations de consommation. Le stock tampon, lui, est un volume supplémentaire constitué pour un risque identifié à court terme (afflux, saison des pluies). Les définitions varient : posez la vôtre dans votre réponse." },
      { term: 'Livrable / activité', definition: "Une activité est une action à mener (« former 30 agents »). Un livrable est le produit concret et vérifiable qui en résulte (« 30 agents formés, guide validé »). Les confondre est un éliminatoire en gestion de projet." },
      { term: "Taux d'exécution budgétaire", definition: "Part du budget d'une ligne déjà dépensée (parfois dépensée et engagée) : dépensé ÷ budget × 100. Il se lit toujours en regard du temps écoulé." },
      { term: 'Hypothèse annoncée', definition: "Donnée absente de l'énoncé que vous fixez vous-même, que vous dites à voix haute ou notez, et dont vous indiquez comment la vérifier. C'est un signe de rigueur, pas de faiblesse." },
    ],
  },
  {
    type: 'concept',
    title: 'Le temps est une compétence évaluée, pas un décor',
    body: [
      "Un candidat qui s'est toujours accordé « encore quelques minutes » à l'entraînement découvre en conditions réelles qu'il lui manque un tiers de son temps, et improvise le reste — ce qui s'entend immédiatement dans la qualité de la réponse. La gestion du temps se corrige différemment de la connaissance technique : c'est pourquoi la grille d'entraînement mesure les deux séparément.",
      "Le principe : on découpe le temps imposé en blocs, on pose une alarme à chaque bloc et on ne met jamais le minuteur en pause, même quand on est bloqué — c'est exactement la situation que vous devez apprendre à gérer.",
    ],
    table: {
      columns: ['Durée imposée', 'Lecture', 'Construction', 'Questions pièges ou contrôles', 'Relecture'],
      rows: [
        ['30 min (étude de cas orale)', '3 min', '21 min (contexte, contraintes, options, proposition)', '5 min', '1 min'],
        ['45 min (test écrit)', '3 min', '34 min', '4 min', '4 min'],
        ['60 min (test écrit)', '3 min', '47 min', '5 min', '5 min'],
      ],
    },
    tip: "Ces découpages sont des repères d'entraînement, pas des normes officielles. Ajustez-les à votre épreuve une fois que vous avez la convocation, puis gardez le même découpage à chaque séance.",
  },
  {
    type: 'case-study',
    title: 'Cas vécu — « Deux candidats, le même énoncé, 30 minutes »',
    scenario: "Lors d'une sélection pour un poste de coordinateur supply chain, deux candidats de niveau comparable reçoivent le même énoncé de rupture de kits de traitement. Le premier a 9 ans de terrain, le second 6. Les deux savent ce qu'est un stock de sécurité.",
    steps: [
      { title: 'Candidat 1 — la solution « propre »', body: "Il écrit dès la 2e minute : « Je commande immédiatement chez le fournisseur alternatif pour tout le volume. » Aucune contrainte listée, aucune option. Le jury l'interroge sur le budget : il découvre alors que le budget est engagé à 70 % et que le fournisseur n'est pas vérifié. Il reprend sa copie, perd 8 minutes." },
      { title: 'Candidat 2 — la structure', body: "Il passe 3 minutes à lire, 8 minutes à poser le contexte et les contraintes, compare trois options, choisit une solution mixte en citant 4 chiffres et nomme son risque principal. Sa solution est moins élégante, mais chaque phrase renvoie à l'énoncé." },
      { title: 'Le verdict du jury', body: "Candidat 2 retenu. Commentaire de la grille : « Raisonnement traçable, risque identifié, solution réalisable avec le budget annoncé. » Le candidat 1 avait pourtant le meilleur CV." },
    ],
    result: "L'écart ne vient ni de l'expérience ni de l'intelligence : il vient de la méthode et de la tenue du temps. Vous allez construire exactement ces deux réflexes, séance après séance.",
  },
  {
    type: 'concept',
    title: 'La méthode du module : 6 procédures, dans cet ordre',
    body: "Chaque procédure produit l'entrée de la suivante. Comptez environ 25 heures réparties sur 3 semaines, à raison de 10 séances chronométrées. Ne sautez pas la Procédure 1 : s'entraîner sur le mauvais format est une perte de temps pure.",
    table: {
      columns: ['Procédure', 'Entrée', 'Livrable produit', 'Durée indicative'],
      rows: [
        ['1. Cadrer l\'épreuve et monter la banque de sujets', 'Annonce, convocation', 'Fiche de cadrage, banque de 10 à 12 sujets, calendrier', '2 h'],
        ['2. Réviser les bases sectorielles', 'Fiche de cadrage', '4 fiches de révision, temps de test écrit calibré', '4 h'],
        ['3. Séance chronométrée et grille', 'Un sujet de la banque', 'Une ligne complète de la grille par séance', '1 h par séance'],
        ['4. Structurer une étude de cas', 'Un énoncé', 'Gabarit Word complété, 1 à 2 pages', '30 min de préparation'],
        ['5. Défendre à voix haute', 'Gabarit complété', 'Enregistrement de 3 min, score /10', '45 min par passage'],
        ['6. Piloter la progression et préparer le jour J', 'Grille remplie', 'Plan ajusté, protocole de jour J', '30 min toutes les 5 séances'],
      ],
    },
    tip: "Joël a réservé 3 soirées et 1 samedi matin par semaine pendant 3 semaines, avec Amina comme binôme. Un binôme coûte une heure par semaine et double la qualité de l'entraînement oral.",
  },

  // ───────── PROCÉDURE 1 — CADRER L'ÉPREUVE ET MONTER LA BANQUE (5 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: "Identifier le type de test probable et remplir la fiche de cadrage",
    intro: "Pourquoi : un test supply chain ne porte pas sur les mêmes compétences qu'un test finance ou RH, et s'entraîner sur le mauvais format est une perte de temps pure. Cette information conditionne tout le reste de votre préparation. Entrées : l'annonce du poste et le courriel de convocation.",
    steps: [
      {
        title: 'Relever ce qui est écrit',
        actions: [
          "Ouvrez l'annonce (PDF) et le courriel de convocation côte à côte.",
          "Surlignez dans l'annonce les compétences des rubriques « profil recherché » et « qualifications » : ce sont les sujets probables du test.",
          "Surlignez dans le courriel tout ce qui touche à l'épreuve : dates, durées, format, langue, matériel, jury.",
        ],
      },
      {
        title: 'Remplir la fiche',
        actions: [
          "Ouvrez un document vierge et titrez-le « Fiche de cadrage — [poste] — [organisation] ».",
          "Créez un tableau à deux colonnes (Élément / Valeur relevée) avec 7 lignes : secteurs testés, format, durée, date et heure, langue, matériel autorisé, jury et notation.",
          "Écrivez « À confirmer » partout où l'information n'est pas écrite : ne la devinez pas.",
        ],
      },
      {
        title: 'Classer les secteurs à travailler',
        actions: [
          "Pour chaque secteur testé, notez de 1 à 3 son poids dans l'annonce, puis de 1 à 3 votre faiblesse actuelle.",
          "Multipliez les deux notes : le produit le plus élevé indique le secteur à travailler en premier.",
        ],
      },
    ],
    table: {
      columns: ['Élément', 'Valeur relevée — fiche de cadrage de Joël (TSI)'],
      rows: [
        ['Secteurs testés', "Annonce : « cadre logique, gestion budgétaire, management d'équipe, redevabilité » → gestion de projet, finance, RH (pas de supply chain)"],
        ['Format', 'Épreuve 1 : écrit en ligne. Épreuve 2 : étude de cas avec restitution orale'],
        ['Durée', 'Épreuve 1 : 60 min. Épreuve 2 : 30 min de préparation + 10 min de restitution et questions'],
        ['Date et heure', 'Jeudi 04/02/2027, 9 h 00 (écrit) et 14 h 00 (oral), en visioconférence'],
        ['Langue', 'À confirmer'],
        ['Matériel autorisé', 'À confirmer (calculatrice ? tableur ? documents ?)'],
        ['Jury et notation', 'À confirmer (nombre de personnes, grille communiquée ou non)'],
      ],
    },
    example: {
      title: 'Classement des secteurs de Joël (poids × faiblesse)',
      lines: [
        "Gestion de projet : poids 3 (cadre logique cité deux fois) × faiblesse 2 (il confond parfois livrable et résultat) = 6.",
        "Finance : poids 3 (gestion budgétaire exigée) × faiblesse 2 (il suit un budget MEAL, n'en a jamais construit un de A à Z) = 6.",
        "RH : poids 2 (management d'équipe) × faiblesse 3 (n'a jamais conduit de procédure disciplinaire) = 6.",
        "Redevabilité : poids 2 × faiblesse 1 (il a lancé le mécanisme de plaintes) = 2 → sans entraînement dédié.",
      ],
    },
    result: "Une fiche d'une page, avec au moins 2 lignes « À confirmer » qui deviennent les questions de l'étape suivante, et un classement qui dit par quel secteur commencer.",
    pitfall: "Vouloir réviser « tout le métier ». Une épreuve de 60 minutes ne couvre pas quatre secteurs : l'annonce vous dit lesquels, à vous de lui faire confiance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Poser les bonnes questions au recruteur',
    intro: "Pourquoi : les lignes « À confirmer » de la fiche changent votre préparation (langue, calculatrice, format oral). Demander des précisions logistiques est normal et attendu. Entrée : votre fiche de cadrage.",
    steps: [
      {
        title: 'Lister les questions',
        actions: [
          "Reprenez chaque ligne « À confirmer » et transformez-la en question fermée : « Les épreuves se déroulent-elles en français ? ».",
          "Limitez-vous à 4 questions : langue, matériel autorisé, notation, déroulé de la restitution orale.",
          "Ne demandez jamais les thèmes exacts ni le sujet : vous n'obtiendrez rien et vous donnerez une image de candidat qui cherche un raccourci.",
        ],
      },
      {
        title: 'Rédiger le courriel',
        actions: [
          "Reprenez la référence de la convocation dans l'objet.",
          "Écrivez 5 à 6 lignes : remerciement, 4 questions numérotées, formule de politesse.",
          "Relisez à voix haute, envoyez dans les 48 heures qui suivent la convocation.",
        ],
      },
      {
        title: 'Intégrer la réponse',
        actions: [
          "Complétez les lignes « À confirmer » de la fiche avec la réponse reçue, et notez la date de la réponse.",
          "Si aucune réponse ne vient sous 3 jours ouvrés, relancez une seule fois, en 2 lignes.",
        ],
      },
    ],
    example: {
      title: 'Courriel de Joël, envoyé le mardi 12/01/2027',
      lines: [
        "Objet : Convocation du 11/01/2027 — Responsable MEAL — questions logistiques",
        "« Bonjour Madame, merci pour votre convocation, que je confirme. Pour me préparer dans de bonnes conditions, pourriez-vous me préciser : 1) la langue de chacune des deux épreuves ; 2) le matériel autorisé (calculatrice, tableur, documents) ; 3) si une grille de notation est communiquée ; 4) la durée de l'exposé et des questions lors de la restitution orale ? Je vous remercie par avance. Cordialement, Joël Kabeya. »",
        "Réponse reçue le 13/01 : écrit en français ; calculatrice et tableur autorisés pour l'épreuve 1 ; épreuve 2 en français avec « quelques questions possibles en anglais » ; restitution de 10 minutes : exposé libre puis questions.",
      ],
    },
    result: "Les 3 lignes « À confirmer » de Joël sont closes et un nouveau point entre dans son plan : réviser 5 minutes de réponses orales en anglais (travail du module 05).",
    tip: "Une réponse qui précise « tableur autorisé » vous dit que l'écrit comportera un exercice chiffré : vous entraînerez des calculs dans Excel, pas à la main.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: "Constituer la banque de sujets d'entraînement à partir de l'annonce",
    intro: "Pourquoi : les tests portent quasiment toujours sur les compétences listées dans l'offre. Plus vos sujets ressemblent à votre poste cible réel, plus l'entraînement est transférable. Entrées : annonce surlignée, fiche de cadrage classée.",
    steps: [
      {
        title: 'Créer le fichier',
        actions: [
          "Ouvrez un nouveau classeur Excel, séparé de la grille d'entraînement, et nommez-le « banque-sujets-tests_AAAA-MM.xlsx ».",
          "Créez 6 colonnes en ligne 1 : N°, Secteur, Format, Durée (min), Sujet en une phrase, Source.",
          "Numérotez S01, S02… à mesure que vous ajoutez des lignes.",
        ],
      },
      {
        title: 'Écrire 2 à 3 sujets par compétence listée',
        actions: [
          "Pour chaque compétence surlignée dans l'annonce, écrivez un sujet par format probable (écrit, étude de cas, oral).",
          "Utilisez exactement les noms de secteur de la grille : Supply Chain, Finance, RH, Gestion de projet.",
          "Visez 10 à 12 sujets au total, avec au moins 2 sujets par secteur testé.",
        ],
      },
      {
        title: 'Équilibrer',
        actions: [
          "Comptez les sujets par secteur et par format : aucun format ne doit dépasser 5 sujets sur 10.",
          "Ajoutez 1 sujet « hors zone de confort » : le jour J, un énoncé déstabilisant est un classique.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Secteur', 'Format', 'Durée', 'Sujet en une phrase', 'Source'],
      rows: [
        ['S01', 'Gestion de projet', 'Test écrit', '60', 'Classer 12 énoncés d\'un cadre logique en activités, livrables, résultats, impact et corriger 3 indicateurs non SMART', 'Annonce : « cadre logique »'],
        ['S02', 'Finance', 'Test écrit', '45', 'Lire un budget à 8 mois sur 12, calculer le taux d\'exécution par ligne, proposer une réallocation', 'Annonce : « gestion budgétaire »'],
        ['S03', 'RH', 'Étude de cas', '30', 'Un enquêteur aux fiches suspectes (18 fiches sur 120 contrôlées) : que faites-vous ?', 'Incident de mai 2025, anonymisé'],
        ['S04', 'Gestion de projet', 'Étude de cas', '30', 'Enquête endline en retard de 3 semaines, rapport bailleur dû à date', 'Annonce : « pilotage »'],
        ['S05', 'RH', 'Simulation orale (défense)', '10', 'Défendre la proposition S03 face à 3 objections', 'Binôme (Amina)'],
        ['S06', 'Finance', 'Étude de cas', '30', 'Dépassement prévisible de 7 200 USD sur la ligne collecte, bailleur à informer', 'Annonce : « gestion budgétaire »'],
      ],
    },
    result: "Joël dispose de 12 sujets (extrait ci-dessus) : 5 en gestion de projet, 4 en finance, 3 en RH, répartis sur les trois formats. Il peut lancer une séance sans chercher de sujet.",
    pitfall: "Écrire des sujets trop faciles ou trop proches de ce que vous maîtrisez déjà. Si vous connaissez la réponse avant de lire la question, le sujet n'entraîne rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: "Transformer une situation vécue en énoncé d'entraînement",
    intro: "Pourquoi : vos notes de terrain sont la meilleure source d'énoncés réalistes. Les cas publiés par les grandes ONG et agences dans leurs guides de recrutement sont la seconde. Entrée : un événement professionnel marquant, que vous anonymisez.",
    steps: [
      {
        title: 'Choisir et anonymiser',
        actions: [
          "Choisissez un événement où vous avez dû décider sous contrainte (retard, rupture, conflit, dépassement).",
          "Supprimez tout nom de personne, de village et de partenaire ; gardez uniquement des chiffres agrégés.",
        ],
      },
      {
        title: 'Écrire l\'énoncé avec 5 éléments',
        actions: [
          "Écrivez 5 à 8 lignes : lieu et mandat, situation de départ, 3 contraintes chiffrées au minimum, 1 manque volontaire, 1 question finale.",
          "Changez les chiffres réels : vous ne devez pas réciter un souvenir.",
          "Rédigez la question finale à l'impératif de décision : « Que proposez-vous ? ».",
        ],
      },
      {
        title: 'Échanger avec votre binôme',
        actions: [
          "Donnez votre énoncé à votre binôme, qui ne connaît ni la fin ni votre solution, et prenez le sien.",
          "Demandez-lui d'écrire en marge ce qui lui paraît incomplet : c'est le manque volontaire ou un oubli de votre part.",
        ],
      },
    ],
    example: {
      title: "Énoncé S03 rédigé par Joël à partir de l'incident de mai 2025",
      lines: [
        "« Vous êtes responsable MEAL d'un programme de nutrition dans une province de l'est du pays. Vous encadrez 5 enquêteurs et 1 assistant data. Un contrôle qualité de 120 fiches du mois révèle que 18 fiches (15 %) présentent des coordonnées GPS et des réponses identiques ; elles proviennent toutes du même enquêteur, qui a collecté 22 % des fiches du mois. Le rapport trimestriel au bailleur est dû dans 9 jours. Son contrat à durée déterminée a encore 2 mois à courir. Votre coordinateur est absent jusqu'à lundi. Que proposez-vous ? »",
        "Manque volontaire : l'enquêteur a-t-il une explication ? Le règlement intérieur prévoit-il une procédure ? Les 102 autres fiches sont-elles fiables ?",
      ],
    },
    result: "Un énoncé complet, avec 4 chiffres, 3 contraintes et une question finale, que votre binôme peut traiter sans vous. La banque passe à 12 sujets.",
    tip: "Demandez à votre binôme de corriger vos chiffres : un énoncé dans lequel les chiffres ne se recoupent pas (22 % des fiches mais 15 % des erreurs) donne matière à analyse ; un énoncé incohérent donne matière à confusion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: "Planifier les séances d'entraînement dans l'agenda",
    intro: "Pourquoi : la grille d'entraînement transforme un entraînement isolé en progression mesurable, mais seulement si les séances ont lieu. La grille contient 15 lignes de séances (lignes 5 à 19) : c'est le plafond de votre cycle. Entrées : fiche de cadrage, banque de sujets, calendrier.",
    steps: [
      {
        title: 'Compter les jours disponibles',
        actions: [
          "Comptez les jours entre aujourd'hui et la date de l'épreuve, en retirant les 2 derniers jours (repos et relecture légère).",
          "Retenez 3 à 4 séances par semaine : au-delà, la fatigue dégrade la qualité des séances.",
        ],
      },
      {
        title: 'Répartir par secteur et par format',
        actions: [
          "Répartissez les séances selon le classement poids × faiblesse de l'étape 1 de la Procédure 1.",
          "Prévoyez les 3 formats : écrit, étude de cas, défense orale.",
          "Réservez les 2 dernières séances à des répétitions générales dans les conditions exactes du jour J (même heure, même durée).",
        ],
      },
      {
        title: 'Bloquer et partager',
        actions: [
          "Entrez chaque séance dans votre agenda avec le numéro du sujet de la banque et la durée du minuteur.",
          "Envoyez les dates à votre binôme et fixez avec lui les séances orales.",
          "Placez un rappel de relecture de la grille après la 5e et la 10e séance.",
        ],
      },
    ],
    table: {
      columns: ['Semaine', 'Dates', 'Séances (sujet)', 'Focus'],
      rows: [
        ['1', '11 – 15/01', '13/01 (S01), 15/01 (S02)', 'Bases sectorielles, écrit'],
        ['2', '18 – 22/01', '18/01 (S03), 20/01 (S01 bis), 22/01 (S06)', 'RH en étude de cas, gestion du temps ; relecture après la séance 5'],
        ['3', '25 – 29/01', '25/01 (S05), 27/01 (S04), 29/01 (S05 bis)', 'Défense orale, gestion de projet'],
        ['4', '01 – 03/02', '01/02 (écrit complet), 02/02 (étude de cas complète) ; 03/02 repos', 'Répétitions générales ; relecture après la séance 10'],
      ],
    },
    result: "10 séances datées dans l'agenda de Joël, dont 2 répétitions générales ; 5 lignes libres restent dans la grille pour les imprévus. Même exercice pour Amina, avec 4 études de cas supply chain.",
    pitfall: "Placer une séance lourde la veille de l'épreuve. Vous arrivez fatigué et vous remplacez une confiance construite par un doute de dernière minute.",
  },

  // ───────── PROCÉDURE 2 — BASES SECTORIELLES ÉLIMINATOIRES (6 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Supply chain : stock de sécurité, délai et point de commande',
    intro: "Pourquoi : un candidat supply chain qui ignore la différence entre stock de sécurité et stock tampon est éliminé, quelle que soit la qualité de son raisonnement. Livrable de l'étape : une fiche de révision d'une page. Entrées : votre cours, vos souvenirs de terrain, l'annonce.",
    steps: [
      {
        title: 'Fixer les définitions',
        actions: [
          "Écrivez la définition de votre stock de sécurité : réserve minimale qu'on ne consomme pas en temps normal (dans le cas du module : 15 jours, fixés par le protocole médical).",
          "Écrivez celle du stock tampon : volume supplémentaire constitué pour un risque identifié à court terme.",
          "Écrivez le délai d'approvisionnement : temps entre la commande et la livraison réelle.",
        ],
      },
      {
        title: 'Apprendre la formule du point de commande',
        actions: [
          "Point de commande = consommation moyenne journalière × (délai d'approvisionnement + jours de stock de sécurité).",
          "Calculez le stock actuel en jours : stock en unités ÷ consommation journalière.",
          "Comparez : si le stock actuel est inférieur au point de commande, la commande aurait déjà dû partir.",
        ],
      },
      {
        title: 'Lister les 3 réflexes d\'achat',
        actions: [
          "Mise en concurrence : comparer plusieurs offres écrites, selon les seuils de votre organisation (à demander).",
          "Achat d'urgence : dérogation motivée et validée par la hiérarchie, jamais un achat « au téléphone ».",
          "Contrôle à réception : lots, dates de péremption, quantités, état, avant de payer le solde.",
        ],
      },
    ],
    example: {
      title: 'Exercice chiffré type — fiche de révision d\'Amina',
      lines: [
        "Énoncé : consommation de 40 cartons par jour, délai d'approvisionnement de 12 jours, stock de sécurité de 15 jours. Stock actuel : 160 cartons.",
        "Stock actuel en jours = 160 ÷ 40 = 4 jours.",
        "Point de commande = 40 × (12 + 15) = 40 × 27 = 1 080 cartons, soit 27 jours de consommation.",
        "Lecture : le stock a franchi le point de commande il y a (1 080 − 160) ÷ 40 = 23 jours. La commande aurait dû partir à 27 jours de stock restant : c'est la cause racine de la rupture, à mentionner en une phrase sans chercher de coupable.",
      ],
    },
    result: "Votre fiche tient sur une page : 3 définitions, 1 formule, 1 exercice chiffré résolu, 3 réflexes d'achat. Vous savez refaire le calcul en 2 minutes.",
    pitfall: "Utiliser « stock tampon » et « stock de sécurité » comme synonymes sans l'annoncer. Définissez vos termes au début de la réponse : le jury note la rigueur, pas votre choix de vocabulaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Finance : lire un budget ligne par ligne',
    intro: "Pourquoi : un candidat finance qui ne sait pas lire un budget ligne par ligne est éliminé immédiatement. Joël s'y entraîne parce que l'annonce de TSI exige de la « gestion budgétaire ». Entrée : un tableau budgétaire à 8 mois sur 12.",
    steps: [
      {
        title: 'Connaître les 5 colonnes',
        actions: [
          "Budget : le montant autorisé pour la ligne sur toute la durée.",
          "Dépensé : les paiements effectués à date.",
          "Engagé : les commandes passées ou contrats signés pas encore payés.",
          "Solde disponible = budget − dépensé − engagé.",
          "Taux d'exécution = (dépensé + engagé) ÷ budget × 100, à comparer à la part du temps écoulé.",
        ],
      },
      {
        title: 'Faire le calcul dans l\'ordre',
        actions: [
          "Calculez le solde disponible de chaque ligne, puis le total.",
          "Vérifiez que le total des soldes égale le budget total moins le dépensé et l'engagé.",
          "Calculez le taux d'exécution de chaque ligne et comparez-le au temps écoulé (8 mois sur 12 = 66,7 %).",
        ],
      },
      {
        title: 'Projeter',
        actions: [
          "Rythme mensuel de dépense = dépensé ÷ nombre de mois écoulés.",
          "Projection sur les mois restants = rythme × mois restants ; comparez au solde disponible.",
          "Si la projection dépasse le solde : proposez une réallocation, vérifiez le seuil de flexibilité de l'accord (souvent 10 % d'une ligne, à confirmer) et préparez une demande d'avenant au-delà.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Budget', 'Dépensé', 'Engagé', 'Solde disponible', 'Taux d\'exécution'],
      rows: [
        ['Salaires équipe MEAL', '48 000', '32 000', '0', '16 000', '66,7 %'],
        ['Collecte de données', '24 000', '19 200', '2 400', '2 400', '90,0 %'],
        ['Formations', '12 000', '3 600', '0', '8 400', '30,0 %'],
        ['Évaluation externe', '12 000', '0', '9 600', '2 400', '80,0 %'],
        ['Total', '96 000', '54 800', '12 000', '29 200', '69,6 %'],
      ],
    },
    example: {
      title: 'Lecture de Joël — projet d\'entraînement, 8 mois sur 12 écoulés (USD)',
      lines: [
        "Total : (54 800 + 12 000) ÷ 96 000 = 69,6 % pour 66,7 % du temps écoulé : globalement cohérent.",
        "La ligne « Collecte de données » est à 90 % à 8 mois : rythme de 19 200 ÷ 8 = 2 400 USD par mois, soit 4 × 2 400 = 9 600 USD sur les 4 mois restants pour 2 400 USD de solde. Dépassement prévisible : 7 200 USD.",
        "La ligne « Formations » est à 30 % : 8 400 USD de solde. Réallouer 7 200 USD représente 60 % de cette ligne et 30 % de la ligne collecte, au-delà d'un seuil de 10 % : demande d'avenant au bailleur, avant d'engager la dépense.",
      ],
    },
    result: "Vous savez dire en 2 minutes : où est le budget, où il dérive, ce que vous proposez et ce qu'il faut demander au bailleur. Le test du bon candidat : il calcule le solde avant de commenter.",
    pitfall: "Confondre dépensé et engagé : une ligne « à 66,7 % » en dépensé peut être déjà à 100 % en engagé. Le solde disponible est la seule vérité pour décider d'un achat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: "Ressources humaines : dérouler un processus disciplinaire dans l'ordre",
    intro: "Pourquoi : un candidat RH qui ne connaît pas les étapes d'un processus disciplinaire est éliminé, même avec un excellent raisonnement. Joël l'applique au cas S03 (l'enquêteur aux fiches suspectes). Entrées : le règlement intérieur type, le droit du travail applicable (à vérifier dans votre pays).",
    steps: [
      {
        title: 'Apprendre les étapes dans l\'ordre',
        actions: [
          "1. Constater et documenter les faits (pièces, dates, témoins), sans conclure.",
          "2. Protéger si nécessaire : mesure conservatoire proportionnée (retrait temporaire du poste ou d'une tâche).",
          "3. Entendre la personne : entretien préalable, droit de répondre, éventuellement assistée.",
          "4. Décider une sanction proportionnée, selon l'échelle du règlement intérieur et le droit applicable.",
          "5. Notifier par écrit : faits, décision, voies de recours.",
          "6. Archiver de manière confidentielle et tirer la leçon pour l'équipe.",
        ],
      },
      {
        title: 'Distinguer les cas qui sortent du disciplinaire',
        actions: [
          "Une allégation d'exploitation ou d'abus sexuels, de harcèlement ou de fraude se signale tout de suite par le canal prévu (point focal, ligne dédiée) : vous ne menez pas l'enquête vous-même.",
          "Un manquement de compétence relève de l'accompagnement avant la sanction.",
        ],
      },
      {
        title: 'Relier au cas',
        actions: [
          "Pour le cas S03, reprenez les 6 étapes et écrivez, pour chacune, ce que vous feriez dans les 9 jours avant le rapport au bailleur.",
        ],
      },
    ],
    example: {
      title: 'Fiche de révision de Joël — cas S03, étapes datées',
      lines: [
        "Jour 1 : isoler les 18 fiches, comparer avec les 102 autres, relever les coordonnées GPS et horaires ; informer le coordinateur à son retour de congé, lundi.",
        "Jour 2 : retirer temporairement l'enquêteur de la collecte (mesure conservatoire, sans sanction) ; recontrôler sur le terrain les 18 fiches suspectes et un échantillon des 102 autres.",
        "Jour 3 : entretien préalable avec l'enquêteur : exposer les faits, recueillir son explication par écrit.",
        "Jour 4 à 6 : décision avec les RH, selon l'échelle du règlement intérieur ; notification écrite.",
        "Jour 9 : rapport au bailleur, avec les données non fiables exclues et la mesure corrective annoncée.",
      ],
    },
    result: "Vous savez énoncer les 6 étapes dans l'ordre, nommer ce qui sort du disciplinaire et les rattacher à un calendrier de 9 jours.",
    pitfall: "Proposer le licenciement immédiat. En l'absence de procédure contradictoire, la décision est fragile juridiquement et vous prive de la seule chose qui compte : établir les faits.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Gestion de projet : livrable, activité, résultat et chemin critique',
    intro: "Pourquoi : un candidat qui confond livrable et activité est éliminé immédiatement. Le cadre logique est cité dans l'annonce de Joël : c'est le premier sujet de sa banque. Entrée : un extrait de cadre logique ou de plan de projet.",
    steps: [
      {
        title: 'Distinguer les 4 niveaux',
        actions: [
          "Activité : une action à mener (verbe à l'infinitif) — « former 30 agents ».",
          "Livrable (produit) : le résultat concret que l'on peut montrer — « 30 agents formés et certifiés, guide validé ».",
          "Résultat (effet) : un changement chez les bénéficiaires ou dans les pratiques — « taux de dépistage de 40 % à 70 % ».",
          "Impact : un changement durable à l'échelle d'une population, qui dépend de plusieurs projets — « baisse de la mortalité infantile ».",
        ],
      },
      {
        title: 'Appliquer le test en 3 questions',
        actions: [
          "Puis-je le cocher « fait » à une date précise et en montrer la preuve ? Oui : livrable.",
          "Commence-t-il par un verbe d'action à l'infinitif ? Oui : activité.",
          "Décrit-il un changement observé chez des personnes ? Oui : résultat ou impact (impact si plusieurs projets et plusieurs années sont nécessaires).",
        ],
      },
      {
        title: 'Calculer un chemin critique',
        actions: [
          "Listez les tâches, leur durée et leurs prédécesseurs.",
          "Additionnez la durée de chaque chemin de bout en bout ; le plus long est le chemin critique.",
          "La marge d'une tâche = durée du chemin critique − durée du chemin qui la contient.",
        ],
      },
    ],
    table: {
      columns: ['Énoncé du cadre logique', 'Catégorie', 'Test appliqué'],
      rows: [
        ['Acheter 10 tablettes', 'Activité', 'Verbe à l\'infinitif, pas de preuve datée'],
        ['10 tablettes configurées et livrées aux enquêteurs', 'Livrable', 'Cochable à une date, bon de livraison à l\'appui'],
        ['Former 40 relais communautaires', 'Activité', 'Verbe à l\'infinitif'],
        ['Taux d\'erreur de saisie passé de 14 % à 5 %', 'Résultat', 'Changement dans la pratique des enquêteurs'],
        ['Baisse de la malnutrition aiguë dans la zone', 'Impact', 'Changement durable, plusieurs projets en cause'],
      ],
    },
    example: {
      title: 'Chemin critique — exercice résolu',
      lines: [
        "Tâches : A (3 jours), B (4 jours, après A), C (6 jours, après A), D (2 jours, après B et C).",
        "Chemin A → B → D = 3 + 4 + 2 = 9 jours. Chemin A → C → D = 3 + 6 + 2 = 11 jours.",
        "Chemin critique : A → C → D, 11 jours. Marge de la tâche B : 11 − 9 = 2 jours. Tout retard sur C retarde le projet ; un retard de 2 jours sur B est sans effet.",
      ],
    },
    result: "Votre fiche contient la distinction des 4 niveaux, le test en 3 questions et un exercice de chemin critique résolu. Le jour de l'épreuve, votre premier réflexe sera de classer.",
    tip: "Quand un énoncé vous demande de « corriger un indicateur », vérifiez les 5 critères SMART : spécifique, mesurable, atteignable, réaliste, daté. Un indicateur sans valeur de départ, sans cible ou sans date n'est pas mesurable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Calibrer le temps par question pour un test écrit de 60 minutes',
    intro: "Pourquoi : un test écrit a un temps limite fixe, et la majorité des candidats qui échouent découvrent la contrainte le jour J. On calibre une fois le budget par point, puis on le répète à chaque séance. Entrée : la durée et le barème de l'épreuve (à demander si absent).",
    steps: [
      {
        title: 'Poser le budget',
        actions: [
          "Retirez de la durée totale 3 minutes de lecture et 5 minutes de relecture.",
          "Divisez le temps restant par le total des points : c'est votre budget de minutes par point.",
        ],
      },
      {
        title: 'Répartir par question',
        actions: [
          "Multipliez le budget par point par le barème de chaque question et arrondissez à la minute.",
          "Notez l'heure de fin visée à côté de chaque question.",
          "Réglez une alarme à chaque heure de fin visée.",
        ],
      },
      {
        title: 'Appliquer la règle de sortie',
        actions: [
          "Quand l'alarme sonne, vous passez à la question suivante, même si votre réponse est incomplète.",
          "Terminez par la relecture : unités, totaux, noms de secteur, pas de question laissée blanche.",
        ],
      },
    ],
    table: {
      columns: ['Question', 'Barème', 'Minutes allouées', 'Heure de fin visée'],
      rows: [
        ['Lecture complète du sujet', '—', '3', '9 h 03'],
        ['Q1 — Cadre logique (classer, corriger 3 indicateurs)', '25 points', '13', '9 h 16'],
        ['Q2 — Budget (solde, taux, proposition)', '35 points', '18', '9 h 34'],
        ['Q3 — Management d\'équipe (cas de fiches suspectes)', '40 points', '21', '9 h 55'],
        ['Relecture', '—', '5', '10 h 00'],
      ],
    },
    example: {
      title: 'Calcul de Joël pour son épreuve du 04/02/2027 (60 min, 100 points)',
      lines: [
        "(60 − 3 − 5) ÷ 100 = 0,52 minute par point.",
        "Q1 : 25 × 0,52 = 13 min ; Q2 : 35 × 0,52 = 18,2 ≈ 18 min ; Q3 : 40 × 0,52 = 20,8 ≈ 21 min. Total : 13 + 18 + 21 = 52 min.",
        "Départ à 9 h 00 : Q1 terminée à 9 h 16, Q2 à 9 h 34, Q3 à 9 h 55, relecture jusqu'à 10 h 00.",
      ],
    },
    result: "Un tableau de minutes par question collé au bord de l'écran, que vous utilisez à chaque séance écrite. Vous savez, à 9 h 34, si vous êtes en retard.",
    pitfall: "Commencer par la question qui rapporte le plus de points sans la chronométrer. La question la plus lourde est aussi celle où l'on peut perdre 30 minutes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Exercice chiffré sur tableur : les 5 contrôles avant de rendre',
    intro: "Pourquoi : quand le tableur ou la calculatrice est autorisé, le test contient un exercice chiffré où l'erreur la plus fréquente n'est pas la méthode mais la cohérence. Cinq contrôles de 1 minute chacun suffisent à les repérer. Entrée : un exercice de budget ou de suivi à calculer.",
    steps: [
      {
        title: 'Contrôles 1 et 2 : unités et ordre de grandeur',
        actions: [
          "Vérifiez la devise et l'unité de chaque colonne (USD, jours, personnes, pourcentage).",
          "Demandez-vous si le résultat est plausible : un taux d'exécution supérieur à 100 % ou négatif doit vous alerter.",
        ],
      },
      {
        title: 'Contrôles 3 et 4 : sommes de contrôle et hypothèses',
        actions: [
          "Vérifiez que le total des lignes égale le total du tableau, dans les deux sens (lignes et colonnes).",
          "Écrivez en bas de page chaque hypothèse que vous avez dû poser, avec sa valeur.",
        ],
      },
      {
        title: 'Contrôle 5 : formules visibles',
        actions: [
          "Saisissez des formules plutôt que des résultats tapés à la main : =(C5+D5)/B5.",
          "Ne mettez jamais un nombre dans une formule : référencez toujours une cellule.",
          "Mettez en gras le résultat final demandé et encadrez-le.",
        ],
      },
    ],
    example: {
      title: 'Les 5 contrôles appliqués au tableau de Joël',
      lines: [
        "1. Unités : montants en USD, taux en %, durée en mois — confirmé.",
        "2. Ordre de grandeur : taux de 69,6 % à 8 mois sur 12 (66,7 %) — plausible.",
        "3. Sommes : 48 000 + 24 000 + 12 000 + 12 000 = 96 000 ; 32 000 + 19 200 + 3 600 + 0 = 54 800 ; 0 + 2 400 + 0 + 9 600 = 12 000 ; 16 000 + 2 400 + 8 400 + 2 400 = 29 200 = 96 000 − 54 800 − 12 000. Cohérent.",
        "4. Hypothèse notée : « le budget est supposé réparti linéairement sur 12 mois ».",
        "5. Formule du taux de la ligne 2 : =(D6+E6)/B6 → 90,0 %.",
      ],
    },
    result: "Aucune erreur de somme, aucune unité manquante, toutes les hypothèses écrites. Le correcteur peut refaire votre calcul sans vous appeler.",
    pitfall: "Rendre un tableau sans l'avoir additionné dans les deux sens. Une erreur de report entre deux lignes coûte plus de points que n'importe quelle erreur de méthode.",
  },

  // ───────── PROCÉDURE 3 — SÉANCE CHRONOMÉTRÉE ET GRILLE (7 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 7',
    title: 'Préparer la séance comme le jour du test',
    intro: "Pourquoi : la majorité des candidats qui échouent à un test technique ne manquent pas de compétences — ils découvrent la contrainte de temps réelle le jour de l'épreuve. Une séance utile ne se prépare pas pour être confortable, mais pour ressembler au test. Entrées : un sujet de votre banque, 10 minutes.",
    steps: [
      {
        title: 'Choisir le sujet sans le lire',
        actions: [
          "Ouvrez votre agenda : le numéro du sujet y est noté (S01, S02…).",
          "Ne lisez pas l'énoncé à l'avance : si vous avez un binôme, c'est lui qui vous le remet à l'heure prévue.",
          "Repérez le format : écrit, étude de cas ou défense orale, et la durée du minuteur.",
        ],
      },
      {
        title: 'Préparer le poste de travail',
        actions: [
          "Dégagez une table : de quoi écrire ou l'ordinateur strictement nécessaire, rien d'autre.",
          "Retirez tout document non autorisé le jour réel (notes, cours, téléphone hors minuteur).",
          "Fermez la messagerie, coupez les notifications, prévenez votre entourage : 60 minutes sans interruption.",
        ],
      },
      {
        title: 'Préparer le support de réponse',
        actions: [
          "Pour une étude de cas : enregistrez une copie du gabarit Word, vide, sous un nom daté, avant de lancer le minuteur ; vous le remplirez pendant les 30 minutes.",
          "Pour un écrit : préparez des feuilles numérotées ou un document vierge avec le tableau de minutes par question.",
        ],
      },
    ],
    example: {
      title: 'Séance n°1 de Joël — mercredi 13/01/2027, 19 h 00',
      lines: [
        "Sujet : S01 (test écrit de gestion de projet, 60 minutes), préparé par Amina, qui l'envoie par courriel à 19 h 00 précises.",
        "Poste : table de la salle à manger libérée, une feuille numérotée par question, calculatrice, téléphone en mode avion posé hors de portée.",
        "Minuteur : montre de bureau réglée sur 60 minutes, alarmes aux heures de fin de question (tableau de la Procédure 2, étape 5).",
      ],
    },
    result: "Le sujet est inconnu, le temps est fixé, le poste est vide de tout ce qui vous aiderait le jour J : vous êtes dans les conditions de l'épreuve.",
    pitfall: "Faire la séance « en passant » dans les transports ou entre deux réunions. Une séance interrompue entraîne la gestion des interruptions, pas celle du test.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 7',
    title: 'Régler et lancer le minuteur : la règle du temps réel',
    intro: "Pourquoi : avant d'ouvrir le sujet, on fixe la durée réellement annoncée par le processus. À défaut d'information : 45 à 60 minutes pour un test écrit, 20 à 30 minutes de préparation pour une étude de cas orale. Entrée : la fiche de cadrage.",
    steps: [
      {
        title: 'Régler la durée',
        actions: [
          "Réglez le minuteur (montre, téléphone, application dédiée) sur la durée de votre fiche de cadrage.",
          "Si la fiche indique « À confirmer », prenez la durée par défaut du format et notez-la dans la colonne D de la grille.",
        ],
      },
      {
        title: 'Poser les alarmes de jalon',
        actions: [
          "Calculez l'heure de fin visée de chaque bloc (lecture, contexte, options…) à partir du tableau de minutes.",
          "Programmez une alarme à chaque heure de fin, avec une sonnerie différente de l'alarme finale.",
        ],
      },
      {
        title: 'Lancer sans jamais mettre en pause',
        actions: [
          "Ouvrez le sujet au moment où vous lancez le minuteur, pas avant.",
          "Ne mettez jamais « en pause » parce que vous êtes bloqué : c'est exactement la situation que vous devez apprendre à gérer, pas éviter.",
          "Si une interruption extérieure survient, notez l'heure et la durée de l'interruption : vous les retrancherez du temps réel.",
        ],
      },
    ],
    table: {
      columns: ['Format', 'Durée du minuteur', 'Alarmes de jalon'],
      rows: [
        ['Test écrit de 60 min (Joël)', '60 min', 'Fin de la lecture à 3 min, fin Q1 à 16 min, fin Q2 à 34 min, fin Q3 à 55 min, fin à 60 min'],
        ['Étude de cas orale — préparation (Amina)', '30 min', 'À 3, 6, 11, 19, 24 et 29 min ; fin à 30 min'],
        ['Défense orale (Joël et Amina)', '10 min', 'Exposé à 3 min ; questions de 3 à 10 min'],
      ],
    },
    result: "Un minuteur lancé, des alarmes posées, une règle claire : aucune pause. Chaque séance ressemble désormais à l'épreuve.",
    tip: "Un minuteur visible (une montre sur la table) crée plus d'urgence qu'un minuteur caché dans un téléphone. Vous apprenez à lire le temps en travaillant, pas à le subir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 7',
    title: 'Traiter le sujet sous contrainte et gérer le blocage',
    intro: "Pourquoi : un blocage de 10 minutes sur une question coûte plus de points que cette question n'en rapporte. La séance est faite pour apprendre à débloquer sans perdre le fil, pas pour finir à tout prix. Entrée : le sujet ouvert et le minuteur lancé.",
    steps: [
      {
        title: 'Lire puis structurer avant d\'écrire',
        actions: [
          "Lisez tout le sujet une première fois sans stylo, puis une seconde fois en entourant les chiffres et en soulignant les verbes.",
          "Pour une étude de cas, ouvrez le gabarit Word et remplissez dans l'ordre : contexte, contraintes, options, proposition, questions pièges.",
        ],
      },
      {
        title: 'Appliquer la règle des 2 minutes',
        actions: [
          "Si vous êtes bloqué depuis 2 minutes, écrivez l'hypothèse la plus plausible, marquez-la d'un « ? » et passez à la suite.",
          "Revenez au « ? » à la relecture, si le temps le permet.",
          "N'effacez rien : une ligne barrée est lisible, un blanc ne l'est pas.",
        ],
      },
      {
        title: 'Obéir à l\'alarme',
        actions: [
          "À chaque alarme de jalon, regardez où vous en êtes et passez au bloc suivant, même si le bloc en cours est inachevé.",
          "N'ouvrez ni messagerie, ni cours, ni moteur de recherche.",
        ],
      },
    ],
    example: {
      title: 'Journal de blocage de Joël — séance 1, test écrit S01',
      lines: [
        "19 h 06 : bloqué sur l'énoncé 7 (résultat ou impact ?). Règle des 2 minutes : à 19 h 08, il écrit « résultat (hypothèse) » et passe.",
        "19 h 16 : l'alarme de fin de Q1 sonne alors qu'il corrige encore l'indicateur 3. Il aurait dû passer à Q2 : il continue 5 minutes, et prendra 18 minutes sur Q1 au lieu de 13.",
        "19 h 55 : l'alarme de fin de Q3 sonne, la Q3 est inachevée.",
      ],
    },
    result: "Un journal de 3 lignes qui explique d'où vient l'écart : pas de la connaissance, mais de l'alarme non respectée en fin de Q1. Cette information va directement dans la colonne « Points à améliorer ».",
    pitfall: "Considérer qu'une séance interrompue ou dépassée « ne compte pas ». C'est la séance la plus utile : elle montre ce qui se passera si rien ne change.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 7',
    title: 'S\'arrêter à la sonnerie et mesurer le dépassement',
    intro: "Pourquoi : une fois le temps écoulé, même si vous n'avez pas terminé, vous vous arrêtez. Mais vous pouvez mesurer votre besoin réel pour la colonne « Temps réel pris » de la grille : écart, donc diagnostic. Entrées : copie en cours, minuteur arrivé à zéro.",
    steps: [
      {
        title: 'Figer la copie à la sonnerie',
        actions: [
          "À l'alarme finale, posez le stylo ou arrêtez de taper.",
          "Photographiez ou enregistrez la copie telle quelle : c'est la copie qui serait notée le jour J.",
        ],
      },
      {
        title: 'Terminer dans une autre couleur',
        actions: [
          "Si vous voulez savoir combien de temps il vous aurait fallu, changez de stylo (rouge) ou de police, relancez un chronomètre et finissez sans pression.",
          "Notez la durée de ce dépassement ; si vous avez terminé avant l'alarme, notez l'heure de fin réelle.",
        ],
      },
      {
        title: 'Calculer le temps réel pris',
        actions: [
          "Temps réel pris = temps alloué + durée du dépassement chronométré (ou heure de fin − heure de début).",
          "Retranchez toute interruption extérieure notée à l'étape précédente.",
        ],
      },
    ],
    example: {
      title: 'Séance n°1 de Joël — chiffres',
      lines: [
        "Début 19 h 00, sonnerie finale 20 h 00. La Q3 est inachevée : il termine en rouge jusqu'à 20 h 11.",
        "Temps alloué : 60 minutes. Temps réel pris : 71 minutes. Écart = 71 − 60 = + 11 minutes.",
        "Copie à noter : celle de 20 h 00, avec 2 questions complètes et la 3e à moitié écrite.",
      ],
    },
    result: "Deux nombres exploitables (temps alloué 60, temps réel 71) et une copie figée à l'heure. Vous pouvez séparer ce que le jury aurait lu de ce que vous auriez pu produire.",
    pitfall: "Continuer sans changer de couleur : vous obtenez une copie « propre » qui ne reflète plus rien de ce que le jury aurait vu, et vous ne mesurez ni le fond ni le temps.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 7',
    title: "Ouvrir la grille d'entraînement et en repérer chaque colonne",
    intro: "Le classeur grille-entrainement-tests-techniques-chronometre.xlsx contient 2 onglets : « Entraînement » (où vous saisissez chaque séance) et « Progression » (calculé automatiquement, à ne pas modifier). Vous le remplissez immédiatement après chaque séance, pas le lendemain.",
    steps: [
      {
        title: 'Enregistrer votre copie',
        actions: [
          "Ouvrez le fichier depuis le dossier 04-templates du module.",
          "Faites Fichier > Enregistrer sous, et nommez-le « NOM_Prenom_grille-entrainement_AAAA-MM.xlsx ».",
          "Ne travaillez jamais dans l'original : il vous servira pour un second cycle.",
        ],
      },
      {
        title: 'Repérer les colonnes et les lignes',
        actions: [
          "Sur l'onglet « Entraînement », les en-têtes sont en ligne 4, colonnes A à I.",
          "Les lignes 5 à 19 accueillent jusqu'à 15 séances ; les lignes 5 à 7 contiennent 3 séances d'exemple datées d'août 2026.",
          "Ne fusionnez aucune cellule et n'insérez pas de ligne au-dessus de la ligne 5 : les formules de l'onglet « Progression » lisent les plages C5:C19, D5:D19, E5:E19 et G5:G19.",
        ],
      },
      {
        title: 'Traiter les 3 lignes d\'exemple',
        actions: [
          "Les 3 lignes d'exemple sont comptées par l'onglet « Progression » : remplacez-les par vos propres séances au fur et à mesure (écrasez les colonnes A, B, C, D, E, G, H et I).",
          "Si vous préférez les vider, copiez la formule de F8 sur F5:F7 pour que l'écart reste vide quand D ou E est vide.",
        ],
      },
    ],
    table: {
      columns: ['Col.', 'En-tête', 'Ce que vous saisissez', 'Exemple de Joël (ligne 5)'],
      rows: [
        ['A', 'Date', 'Date de la séance au format AAAA-MM-JJ (texte, comme les exemples)', '2027-01-13'],
        ['B', 'Type de test', 'Test technique écrit, Étude de cas ou Simulation orale (défense)', 'Test technique écrit'],
        ['C', 'Secteur', 'Supply Chain, Finance, RH ou Gestion de projet, exactement', 'Gestion de projet'],
        ['D', 'Temps alloué (min)', 'Durée du minuteur, nombre seul', '60'],
        ['E', 'Temps réel pris (min)', 'Temps alloué + dépassement, nombre seul', '71'],
        ['F', 'Écart (min)', 'Formule automatique : E − D (ne rien saisir)', '11 (calculé)'],
        ['G', 'Score auto-évalué (/10)', 'Note honnête de 0 à 10', '5'],
        ['H', 'Points à améliorer', 'Une phrase précise : quoi, où, comment mesurer', 'Voir étape 7'],
        ['I', 'Statut', 'Terminé ou À refaire', 'À refaire'],
      ],
    },
    result: "Votre copie de la grille est enregistrée et nommée, les 3 lignes d'exemple sont identifiées et vous savez ce que chaque colonne attend.",
    pitfall: "Dépasser 15 séances dans un même fichier : les plages s'arrêtent à la ligne 19 et la 16e séance ne serait pas comptée. Au-delà, ouvrez un nouveau fichier pour le cycle suivant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 7',
    title: 'Renseigner la ligne de la séance : colonnes A à F',
    intro: "Pourquoi : cette rigueur de consignation est ce qui transforme un entraînement isolé en véritable courbe de progression. Vous remplissez une nouvelle ligne immédiatement après la séance. Entrées : votre journal de séance, les deux durées mesurées.",
    steps: [
      {
        title: 'Colonnes A, B et C : situer la séance',
        actions: [
          "Colonne A : saisissez la date au format AAAA-MM-JJ (comme les exemples).",
          "Colonne B : reprenez l'un des trois libellés des exemples : « Test technique écrit », « Étude de cas » ou « Simulation orale (défense) ».",
          "Colonne C : saisissez le secteur exactement comme dans l'onglet « Progression » : Supply Chain, Finance, RH ou Gestion de projet.",
        ],
      },
      {
        title: 'Colonnes D et E : saisir les deux durées',
        actions: [
          "Colonne D : saisissez le temps alloué en nombre seul, sans « min » ni texte.",
          "Colonne E : saisissez le temps réel pris, en nombre seul, selon l'étape précédente.",
        ],
      },
      {
        title: 'Colonne F : lire, ne pas saisir',
        actions: [
          "Ne tapez rien en F : la formule affiche E − D.",
          "Lisez-la : positif = vous avez dépassé le temps ; négatif = vous avez fini en avance ; zéro = pile dans le temps.",
        ],
      },
    ],
    example: {
      title: "Ligne 5 de la grille de Joël (séance du 13/01/2027)",
      lines: [
        "A5 = 2027-01-13 · B5 = Test technique écrit · C5 = Gestion de projet",
        "D5 = 60 · E5 = 71 · F5 = 11 (calculé par la formule)",
      ],
    },
    result: "Les 5 premières colonnes de la ligne sont complètes et l'écart s'affiche seul. Le secteur est écrit comme dans l'onglet « Progression » : la séance y sera comptée.",
    pitfall: "Écrire « Gestion projet » ou « 60 min ». Le premier libellé n'est reconnu dans aucun secteur de l'onglet « Progression » ; le second est du texte, ignoré par la moyenne : le tableau de synthèse sera faux sans message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 7',
    title: "Auto-évaluer honnêtement et rédiger le point à améliorer précis (colonnes G, H, I)",
    intro: "Pourquoi : la colonne « Points à améliorer » est celle qui fait progresser. Un point précis (« j'ai mal géré mon temps sur la partie calcul budgétaire ») se corrige à la séance suivante ; un point vague (« je dois progresser en finance ») ne se corrige jamais. Entrée : votre journal de séance.",
    steps: [
      {
        title: 'Colonne G : noter sur 10 avec une grille d\'ancrage',
        actions: [
          "9 à 10 : toutes les sections traitées, chiffres de l'énoncé cités, risque nommé, dans le temps.",
          "7 à 8 : complet, avec une seule faiblesse (un chiffre non cité, un dépassement de moins de 10 %).",
          "5 à 6 : structure présente, mais deux faiblesses ou un dépassement important.",
          "3 à 4 : réponse incomplète, structure absente par endroits. 0 à 2 : hors sujet ou blanc.",
          "En cas d'hésitation entre deux notes, retenez la plus basse.",
        ],
      },
      {
        title: 'Colonne H : écrire une phrase en 3 parties',
        actions: [
          "Écrivez : quoi (le comportement), où (la partie du sujet), comment je le mesure (le critère de la prochaine séance).",
          "Une seule phrase, un seul point : le plus coûteux de la séance.",
        ],
      },
      {
        title: 'Colonne I : choisir le statut',
        actions: [
          "Inscrivez « Terminé » si la séance a atteint son objectif (par exemple score ≥ 7 et écart ≤ 5 minutes), « À refaire » sinon.",
          "Planifiez dans l'agenda la nouvelle séance des lignes « À refaire », avec un sujet voisin.",
        ],
      },
    ],
    example: {
      title: "Colonnes G, H et I de la ligne 5 — Joël",
      lines: [
        "G5 = 5 (structure présente, 2 questions sur 3 traitées, 11 minutes de dépassement).",
        "H5 = « Passé 18 min au lieu de 13 sur Q1 car alarme de fin de question non respectée ; critère à la prochaine séance : fin de Q1 à 13 min, alarme obéie. »",
        "I5 = À refaire.",
        "Mauvais point à améliorer : « Je dois progresser en gestion de projet. » — pas de comportement, pas de critère mesurable.",
      ],
    },
    result: "Une ligne complète, avec un score ancré sur des faits et un point que vous pouvez vérifier à la séance suivante. Elle alimente automatiquement l'onglet « Progression ».",
    tip: "Faites évaluer votre score par votre binôme sur les séances d'études de cas : la note de l'observateur est presque toujours plus basse, et plus juste.",
  },

  // ───────── PROCÉDURE 4 — STRUCTURER UNE ÉTUDE DE CAS (9 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 9',
    title: 'Ouvrir le gabarit de structuration et répartir les 30 minutes',
    intro: "Le document gabarit-structuration-reponse-etude-de-cas.docx force la méthode contexte → contraintes → options → proposition → défense, avec des sections dédiées. Vous le remplissez pendant le temps de préparation chronométré, pas après. Fil rouge : Amina, séance du jeudi 21/01/2027 à 18 h 30, énoncé de rupture de kits de traitement ; Joël est son jury. Les extraits des étapes suivantes montrent la version finale de sa copie, corrigée après le débrief du 22/01.",
    steps: [
      {
        title: 'Enregistrer la copie avant le top',
        actions: [
          "Ouvrez le gabarit depuis le dossier 04-templates du module.",
          "Enregistrez-le sous « NOM_Prenom_etude-de-cas_AAAA-MM-JJ.docx » : l'original sert aux séances suivantes.",
          "Laissez-le vide et ouvert en arrière-plan : vous écrivez dedans pendant les 30 minutes, jamais avant ni après.",
        ],
      },
      {
        title: 'Repérer les 5 sections',
        actions: [
          "En-tête : « Gabarit de structuration — Réponse à une étude de cas » ; une ligne « Objectif ».",
          "Section 1 : un cadre pour 2-3 phrases ; section 2 : un tableau à deux colonnes ; section 3 : un tableau à trois colonnes avec Option A, B, C ; section 4 : un cadre de proposition ; section 5 : un tableau de 3 questions et réponses.",
          "En bas : un cartouche « Rédigé par (nom, fonction) » et « Date ».",
        ],
      },
      {
        title: 'Poser le budget temps',
        actions: [
          "Programmez 6 alarmes sur 30 minutes selon le tableau ci-dessous.",
        ],
      },
    ],
    table: {
      columns: ['Section du gabarit', 'Ce que le gabarit demande', 'Durée', 'Fin visée (départ 18 h 30)'],
      rows: [
        ['Lecture de l\'énoncé', 'Marges de l\'énoncé, pas encore le gabarit', '3 min', '18 h 33'],
        ['1. Contexte de la mission / du scénario', 'Où, quoi, depuis quand, pour qui, en 2-3 phrases', '3 min', '18 h 36'],
        ['2. Contraintes identifiées', 'Deux colonnes : ressources ; temps, accès ou sécurité', '5 min', '18 h 41'],
        ['3. Options envisagées', 'Au moins deux options, avantages, inconvénients et risques', '8 min', '18 h 49'],
        ['4. Proposition recommandée', 'L\'option choisie, justifiée par les contraintes de la section 2', '5 min', '18 h 54'],
        ['5. Questions pièges anticipées', 'Au moins trois questions, réponses factuelles préparées', '5 min', '18 h 59'],
        ['Relecture et cartouche', 'Nom, fonction, date ; 1 à 2 pages', '1 min', '19 h 00'],
      ],
    },
    result: "Le gabarit est enregistré, vide ; les 7 jalons de la séance sont dans le minuteur. Vous savez ce que vous devez avoir écrit à 18 h 41.",
    pitfall: "Ouvrir le gabarit après avoir déjà rédigé sur une feuille : vous recopiez, vous perdez 5 minutes et la structure ne vous sert plus à penser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 9',
    title: "Lire l'énoncé activement : chiffres, manques, question finale",
    intro: "Pourquoi : un candidat qui commence à rédiger avant d'avoir identifié ses contraintes finit presque toujours par se contredire ou oublier un élément clé. Les 3 premières minutes ne sont pas du temps perdu : ce sont les plus rentables. Entrée : l'énoncé remis par le jury.",
    steps: [
      {
        title: 'Première lecture, sans stylo',
        actions: [
          "Lisez l'énoncé en entier, une fois, pendant 1 minute.",
          "Répondez mentalement à la question : de quoi s'agit-il, en une phrase ?",
        ],
      },
      {
        title: 'Seconde lecture, stylo en main',
        actions: [
          "Entourez chaque chiffre (nombres, pourcentages, délais).",
          "Soulignez chaque contrainte exprimée par un verbe ou un adjectif : « limité », « jamais utilisé », « exige ».",
          "Mettez un « ? » en marge à chaque information qui manque.",
        ],
      },
      {
        title: 'Faire 3 listes dans la marge',
        actions: [
          "Liste 1 : les chiffres donnés. Liste 2 : les manques volontaires. Liste 3 : la question finale, recopiée mot pour mot.",
        ],
      },
    ],
    example: {
      title: "Lecture annotée par Amina — énoncé de rupture de kits (3 minutes)",
      lines: [
        "Chiffres : 12 000 personnes · 4 jours de stock · 15 jours de stock de sécurité exigés · délai habituel 12 jours · délai alternatif 5 jours · surcoût + 40 % · budget engagé à 70 %.",
        "Manques ( ? ) : montant du budget d'urgence · consommation journalière · accès routier et délais de validation du siège · qualité réelle de l'alternatif.",
        "Question finale : « Que proposez-vous ? ».",
      ],
    },
    result: "Trois listes dans la marge : 7 chiffres, 4 manques, 1 question. Elles alimentent directement les sections 1 et 2 du gabarit.",
    pitfall: "Lire en cherchant la solution : on s'arrête à la première idée qui semble bonne et on ne voit plus le reste de l'énoncé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 9',
    title: 'Section 1 — Résumer le contexte en 2-3 phrases',
    intro: "Pourquoi : un candidat qui commence par « je ferais X » sans avoir reformulé le contexte perd des points dès la première minute, même si X est une bonne idée. Le contexte prouve que vous avez compris avant de proposer. Entrées : liste 1 et question finale de l'étape précédente.",
    steps: [
      {
        title: 'Répondre aux 4 questions du gabarit',
        actions: [
          "Où : le lieu et le cadre (camp, province, projet).",
          "Quoi : la situation critique en une phrase.",
          "Depuis quand : l'origine ou le moment de la découverte.",
          "Pour qui : les personnes concernées et votre rôle dans le scénario.",
        ],
      },
      {
        title: 'Rédiger en 40 à 60 mots',
        actions: [
          "Cliquez dans le cadre de la section 1 et remplacez le texte indicatif.",
          "Écrivez 2 à 3 phrases avec vos mots, pas ceux de l'énoncé.",
          "N'écrivez ni solution, ni jugement : seulement la situation.",
        ],
      },
      {
        title: 'Faire le test de l\'inconnu',
        actions: [
          "Demandez-vous : une personne qui n'a pas lu l'énoncé comprend-elle la situation et sa gravité ?",
        ],
      },
    ],
    example: {
      title: 'Section 1 de la copie d\'Amina',
      lines: [
        "« Camp de 12 000 personnes déplacées. Notre ONG y fournit les kits de traitement de la malnutrition aiguë sévère ; un audit de stock vient de révéler 4 jours de couverture alors que le protocole médical exige 15 jours. En tant que coordinatrice supply chain, je dois proposer un plan d'approvisionnement avant la rupture. » (58 mots)",
      ],
    },
    result: "Un contexte de 58 mots, sans solution, qui contient le lieu, la population, le produit, l'écart de stock et votre rôle. Il vous a pris 3 minutes.",
    pitfall: "Recopier l'énoncé mot pour mot. Une reformulation prouve la compréhension ; une copie ne prouve que la lecture.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 9',
    title: 'Section 2 — Lister les contraintes dans les deux colonnes',
    intro: "Pourquoi : lister les contraintes avant de réfléchir aux options vous évite de proposer une solution qui demande trois véhicules quand l'énoncé n'en mentionne qu'un. Le tableau de la section 2 a deux colonnes : ressources, puis temps, accès et sécurité. Entrées : listes 1 et 2 de la lecture active.",
    steps: [
      {
        title: 'Colonne de gauche : contraintes de ressources',
        actions: [
          "Écrivez le budget disponible, le personnel qualifié sur place, le matériel existant et la qualité des fournisseurs.",
          "Écrivez chaque contrainte avec son chiffre, en une ligne, séparée par un point médian.",
        ],
      },
      {
        title: 'Colonne de droite : temps, accès, sécurité',
        actions: [
          "Écrivez les délais, les contraintes d'accès (routes, saison) et de sécurité, avec leur chiffre.",
          "Convertissez les délais en écart avec le stock : 12 jours de délai pour 4 jours de stock = 8 jours de rupture.",
        ],
      },
      {
        title: 'Marquer les hypothèses',
        actions: [
          "Pour chaque manque volontaire utile, posez une hypothèse chiffrée et marquez-la « (H) ».",
          "Ne proposez aucune solution dans cette section : une contrainte est un fait, pas une réponse.",
        ],
      },
    ],
    example: {
      title: 'Section 2 de la copie d\'Amina',
      lines: [
        "Colonne gauche — Ressources : stock de 4 jours (cible protocole : 15 jours) · budget d'urgence engagé à 70 % · (H) budget d'urgence de 150 000 USD, soit 45 000 USD disponibles, à confirmer avec la finance · fournisseur alternatif : surcoût de + 40 %, aucune référence qualité vérifiée · (H) magasinier-chef et équipe logistique du camp disponibles.",
        "Colonne droite — Temps, accès, sécurité : fournisseur habituel : livraison à 12 jours, soit 8 jours après la rupture · fournisseur alternatif : livraison à 5 jours, soit 1 jour après la rupture · 12 000 personnes déplacées dont le traitement ne peut pas être interrompu · (H) accès routier ouvert, à vérifier avec le responsable sécurité.",
      ],
    },
    result: "Les deux colonnes sont remplies, chaque contrainte porte un chiffre ou une hypothèse marquée (H), et aucune solution ne s'est glissée dans la section 2.",
    tip: "Dites votre hypothèse à voix haute le jour de la restitution : « je pars de l'hypothèse que 45 000 USD sont disponibles ; si le chiffre est différent, voici ce qui change ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 9',
    title: "Chiffrer l'écart : quatre calculs en 2 minutes",
    intro: "Pourquoi : une réponse qui cite les chiffres précis du scénario ne ressemble jamais à une réponse apprise par cœur. Quatre calculs simples transforment l'énoncé en arguments. Ils se font sous la section 2, dans le même créneau de 5 minutes. Entrée : les chiffres de la section 2.",
    steps: [
      {
        title: 'Calcul 1 et 2 : déficit et rupture',
        actions: [
          "Déficit par rapport au protocole = stock exigé − stock actuel : 15 − 4 = 11 jours.",
          "Rupture = délai de livraison − jours de stock : 12 − 4 = 8 jours avec le fournisseur habituel ; 5 − 4 = 1 jour avec l'alternatif.",
        ],
      },
      {
        title: 'Calcul 3 : l\'effet du rationnement',
        actions: [
          "Ration possible = jours de stock ÷ jours à couvrir : 4 ÷ 12 = 33 % de la ration prescrite si l'on attend le fournisseur habituel.",
        ],
      },
      {
        title: 'Calcul 4 : surcoût et budget',
        actions: [
          "Posez le prix habituel en hypothèse : (H) 1 600 USD par jour de couverture, soit 24 000 USD pour 15 jours.",
          "Prix alternatif = 1 600 × 1,4 = 2 240 USD par jour de couverture, soit 33 600 USD pour 15 jours.",
          "Comparez aux 45 000 USD disponibles : 33 600 passe, mais laisse 11 400 USD, insuffisant pour recommander ensuite chez l'habituel.",
        ],
      },
    ],
    example: {
      title: 'Résultats d\'Amina, notés sous la section 2',
      lines: [
        "Déficit : 11 jours. Rupture : 8 jours (habituel) ou 1 jour (alternatif).",
        "Rationnement : 4 ÷ 12 = 33 % de la ration — inacceptable pour des enfants en traitement.",
        "Coût 15 jours : 24 000 USD (habituel) · 33 600 USD (alternatif, soit + 9 600 USD) · disponible : 45 000 USD (H).",
      ],
    },
    result: "Quatre chiffres tiennent sur trois lignes et vont servir à chaque section suivante. Ils montrent déjà au jury que vous raisonnez sur le cas précis, pas sur un principe.",
    pitfall: "Poser le surcoût de 40 % sans le convertir en dollars. Le jury veut savoir si 40 % représente 1 000 ou 10 000 USD ; sans le chiffre, vous ne pouvez pas défendre votre choix.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 9',
    title: 'Section 3 — Comparer au moins deux options, avantages et risques',
    intro: "Pourquoi : un jury valorise fortement un candidat qui a envisagé deux ou trois pistes avant de trancher : cela prouve que le choix est un arbitrage réfléchi, pas le premier réflexe. Le tableau de la section 3 compte trois lignes (Option A, B, C) et trois colonnes. Entrée : les contraintes chiffrées.",
    steps: [
      {
        title: 'Construire les 3 options',
        actions: [
          "Option A : la plus simple ou celle du statu quo.",
          "Option B : l'inverse radical de A.",
          "Option C : une combinaison des deux, si elle est réaliste. Si vous n'en trouvez que deux, laissez la ligne C vide ou raturez-la.",
        ],
      },
      {
        title: 'Remplir les colonnes',
        actions: [
          "Colonne « Avantages » : chaque avantage renvoie à une contrainte de la section 2.",
          "Colonne « Inconvénients / risques » : chaque inconvénient porte un chiffre (jours, USD, pourcentage).",
          "Nommez au moins un risque par option, y compris pour celle que vous allez retenir.",
        ],
      },
    ],
    table: {
      columns: ['Option envisagée', 'Avantages', 'Inconvénients / risques'],
      rows: [
        ['A. Attendre le fournisseur habituel (12 jours) et rationner', 'Coût le plus bas : 24 000 USD pour 15 jours ; fournisseur connu, qualité vérifiée', '8 jours sans kits ; rationner revient à 33 % de la ration prescrite : risque vital pour les enfants en traitement'],
        ['B. Basculer 100 % sur le fournisseur alternatif (5 jours)', 'Rupture réduite à 1 jour ; 33 600 USD, dans les 45 000 USD (H)', 'Surcoût de 9 600 USD ; qualité non vérifiée sur tout le volume ; il faudra quand même recommander chez l\'habituel pour reconstituer 15 jours'],
        ['C. Solution mixte : alternatif sur 9 jours (essai) + habituel sur 15 jours', 'Couvre les 8 jours de pont ; stock reconstitué à 16 jours le jour de la livraison habituelle ; risque qualité limité à 9 jours', '44 160 USD (9 × 2 240 + 24 000), marge de 840 USD ; contrôle qualité obligatoire à réception ; 1 jour de rupture à combler par un emprunt de stock'],
      ],
    },
    example: {
      title: 'Vérification des chiffres de l\'option C',
      lines: [
        "Alternatif : 9 jours × 2 240 USD = 20 160 USD. Habituel : 15 jours × 1 600 USD = 24 000 USD. Total : 44 160 USD ≤ 45 000 USD (H) ; marge : 840 USD.",
        "Chronologie : le stock s'épuise à J + 4 ; l'alternatif arrive à J + 5 (9 jours de couverture, dont 8 jours de pont jusqu'à J + 12 et 1 jour de marge) ; l'habituel arrive à J + 12 : 1 + 15 = 16 jours de stock, protocole rétabli.",
        "Le jour manquant entre J + 4 et J + 5 est couvert par un emprunt de stock auprès d'un partenaire du camp ou du cluster nutrition.",
      ],
    },
    result: "Trois options, chacune avec un avantage relié à une contrainte et un risque chiffré. Le jury voit que le choix de l'option C est un arbitrage, pas un réflexe.",
    pitfall: "Traiter chaque option comme si elle était sans coût ni risque. Proposer une solution sans mentionner ses limites donne l'impression que vous ne les avez pas vues.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 9',
    title: 'Section 4 — Formuler la proposition recommandée et la relier aux contraintes',
    intro: "Pourquoi : la proposition doit être reliée explicitement aux contraintes de la section 2, pas à des principes abstraits comme « il faut sécuriser l'approvisionnement ». Elle tient en un paragraphe de 5 phrases. Entrées : sections 2 et 3.",
    steps: [
      {
        title: 'Appliquer la formule en 5 phrases',
        actions: [
          "Phrase 1 : « Je recommande l'option X » et ce qu'elle contient.",
          "Phrase 2 : « Parce que » et 3 chiffres de l'énoncé.",
          "Phrase 3 : le risque principal de votre choix.",
          "Phrase 4 : comment vous le surveillez ou le couvrez.",
          "Phrase 5 : ce que vous faites dans les 24 premières heures.",
        ],
      },
      {
        title: 'Vérifier le lien aux contraintes',
        actions: [
          "Soulignez dans votre texte les 3 chiffres cités et retrouvez-les dans la section 2.",
          "Supprimez toute phrase qui pourrait s'appliquer à un autre énoncé.",
        ],
      },
    ],
    example: {
      title: 'Section 4 de la copie d\'Amina',
      lines: [
        "« Je recommande l'option C : une commande de 15 jours chez le fournisseur habituel, livrée à J + 12, et une commande d'essai de 9 jours chez l'alternatif, livrée à J + 5. Parce que 4 jours de stock pour 12 jours de délai imposent un pont de 8 jours, que le rationnement ramènerait chaque enfant à 33 % de la ration, et que l'ensemble coûte 44 160 USD pour 45 000 USD disponibles (hypothèse à confirmer). Le risque principal est la qualité de l'alternatif ; je le couvre par un contrôle à réception (lots, péremption, échantillon) avant toute distribution et par un paiement du solde après contrôle. Dans les 24 premières heures : passer les deux commandes, demander à l'alternatif ses certificats, obtenir un emprunt de stock d'un jour et informer le siège avec une note chiffrée. »",
      ],
    },
    result: "Un paragraphe qui cite 4 chiffres de l'énoncé, nomme le risque et donne un plan à 24 heures. Il prend 5 minutes à écrire et 50 secondes à dire.",
    pitfall: "Terminer par « c'est ma proposition » sans le risque. Un bon candidat nomme explicitement le risque de son propre choix et explique comment il compte le surveiller.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 8 sur 9',
    title: 'Section 5 — Préparer les trois questions pièges et leurs réponses factuelles',
    intro: "Pourquoi : le jury demande presque toujours « et si telle contrainte change ? » ou « pourquoi pas l'option B ? ». Un candidat qui a déjà réfléchi à l'objection gagne un temps précieux et une crédibilité immédiate. Le tableau de la section 5 compte trois lignes. Entrée : votre proposition.",
    steps: [
      {
        title: 'Trouver les 3 questions',
        actions: [
          "Question 1 : l'option que vous avez écartée (« pourquoi pas A ? »).",
          "Question 2 : le point faible de votre option (conformité, coût, qualité).",
          "Question 3 : la contrainte qui change (budget refusé, délai prolongé, accès coupé).",
        ],
      },
      {
        title: 'Rédiger chaque réponse en 3 temps',
        actions: [
          "Un fait chiffré de la section 2 ou 4.",
          "Votre position (maintenue ou ajustée).",
          "La condition qui la ferait changer : « si X, alors Y ».",
        ],
      },
      {
        title: 'Remplir le tableau',
        actions: [
          "Colonne de gauche : la question, telle qu'un jury la poserait.",
          "Colonne de droite : la réponse en 3 à 4 lignes maximum, avec au moins un chiffre.",
        ],
      },
    ],
    table: {
      columns: ['Question probable du jury', 'Réponse préparée (extrait)'],
      rows: [
        ['Pourquoi ne pas simplement attendre les 12 jours du fournisseur habituel en rationnant ?', '4 jours de stock répartis sur 12 jours = 33 % de la ration pour des enfants en traitement : risque vital. Je ne rationne qu\'en dernier recours, sur décision du responsable médical, 1 jour au plus, le temps de l\'emprunt.'],
        ['Comment justifiez-vous un surcoût de 40 % sur un fournisseur non vérifié, côté conformité et contrôle qualité ?', 'Le surcoût porte sur 9 jours : 20 160 USD au lieu de 14 400, soit + 5 760 USD, le prix d\'éviter 8 jours de rupture. Conformité : dérogation d\'urgence documentée et validée. Qualité : certificats, lots, péremption, échantillon contrôlé, paiement après contrôle.'],
        ['Si le budget d\'urgence est refusé par votre siège, quelle est votre solution de repli immédiate ?', 'Je réduis la demande au strict nécessaire : le pont de 8 jours, soit 17 920 USD (8 × 2 240), la commande habituelle étant financée sur la ligne d\'approvisionnement ordinaire. Si le refus est total : prêt de stock d\'un partenaire ou du cluster nutrition, demande de réallocation au bailleur, note chiffrée à la direction pays en 24 heures.'],
      ],
    },
    result: "Les 3 questions du module sont préparées avec 3 réponses chiffrées. Chacune est dans le gabarit, donc disponible pendant la restitution.",
    tip: "Ajoutez en marge une quatrième question que vous craignez : votre binôme la posera. Si le jury ne la pose pas, vous aurez gagné en aisance sur les trois autres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 9 sur 9',
    title: 'Relire, compléter le cartouche et contrôler le format',
    intro: "Pourquoi : une réponse structurée mais illisible ou trop longue perd son effet. La dernière minute sert à 5 contrôles et au cartouche. Le gabarit complété doit tenir en 1 à 2 pages. Entrée : les 5 sections remplies.",
    steps: [
      {
        title: 'Faire les 5 contrôles',
        actions: [
          "Au moins 4 chiffres de l'énoncé sont cités dans la section 4.",
          "Au moins 2 options sont comparées, chacune avec un risque chiffré.",
          "Les hypothèses sont marquées (H) et signalées comme à vérifier.",
          "Le risque principal de votre propre choix est nommé.",
          "Trois questions pièges ont une réponse écrite.",
        ],
      },
      {
        title: 'Remplir le cartouche',
        actions: [
          "Dans le dernier tableau, saisissez « Rédigé par (nom, fonction) » : votre nom et votre fonction.",
          "Saisissez la « Date » de la séance.",
        ],
      },
      {
        title: 'Contrôler le format',
        actions: [
          "Ouvrez Fichier > Imprimer pour afficher l'aperçu : le document doit tenir en 1 à 2 pages.",
          "Si besoin, raccourcissez les cellules, sans changer les titres de section.",
          "Arrêtez le minuteur à la sonnerie, quelle que soit l'avancement de la relecture.",
        ],
      },
    ],
    example: {
      title: 'Cartouche et bilan de la copie d\'Amina',
      lines: [
        "Rédigé par : Amina Tshibola, candidate — coordinatrice supply chain · Date : 22/01/2027 (version corrigée après la séance du 21/01).",
        "Contrôles : 7 chiffres de l'énoncé cités · 3 options comparées · hypothèses marquées (H) · risque qualité nommé · 3 réponses écrites.",
        "Format : 1 page et demie. Séance du 21/01 : terminée à 19 h 04, soit 4 minutes de dépassement, relecture non faite.",
      ],
    },
    result: "Un gabarit complété d'une page et demie, qui sert à la fois de livrable écrit et de plan de restitution orale. Il est prêt pour la Procédure 5.",
    pitfall: "Changer les titres des sections pour gagner de la place. Le jury (ou la grille de correction) cherche les 5 temps dans l'ordre : les titres sont vos repères comme les siens.",
  },

  // ───────── PROCÉDURE 5 — DÉFENDRE SA PROPOSITION À VOIX HAUTE (5 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Transformer le gabarit rempli en plan de restitution de 3 minutes',
    intro: "Pourquoi : rédiger une réponse structurée et la défendre à voix haute face à un jury sous pression sont deux compétences différentes. Le gabarit complété devient votre plan de restitution, à l'écrit comme à l'oral — mais jamais un texte à lire. Fil rouge : Joël défend son cas S03 (l'enquêteur aux fiches suspectes). Entrée : le gabarit complété.",
    steps: [
      {
        title: 'Découper en 6 blocs chronométrés',
        actions: [
          "Reprenez les 5 sections du gabarit et ajoutez un 6e bloc de clôture : contexte, contraintes, options, proposition, risque et surveillance, ouverture aux questions.",
          "Allouez les secondes : 20, 30, 50, 50, 20 et 10, soit 3 minutes.",
        ],
      },
      {
        title: 'Réduire chaque bloc à 3 ou 4 mots-clés',
        actions: [
          "Pour chaque bloc, retenez les chiffres et les mots qui déclenchent la phrase : pas la phrase elle-même.",
          "Tenez sur une demi-feuille : 6 lignes, lisibles à bout de bras.",
        ],
      },
      {
        title: 'Calibrer le volume',
        actions: [
          "Comptez environ 130 mots par minute à voix posée : 3 minutes représentent au maximum 390 mots, moins si vous marquez des pauses.",
          "Pour une restitution de 10 minutes avec questions, visez un exposé de 3 à 4 minutes et gardez le reste pour le jury.",
        ],
      },
    ],
    table: {
      columns: ['Bloc', 'Durée', 'Mots-clés de Joël (cas S03)'],
      rows: [
        ['1. Contexte', '20 s', 'Programme nutrition · 18 fiches sur 120 identiques · rapport bailleur dans 9 jours'],
        ['2. Contraintes', '30 s', '15 % des fiches contrôlées · 22 % collectées par lui · CDD 2 mois · coordinateur absent jusqu\'à lundi'],
        ['3. Options', '50 s', 'A sanctionner de suite · B corriger sans traiter · C établir les faits puis décider'],
        ['4. Proposition', '50 s', 'C · isoler les fiches · entretien préalable J + 3 · décision J + 4 à 6 · bailleur J + 9'],
        ['5. Risque et surveillance', '20 s', 'Enquête incomplète à J + 9 · l\'écrire au bailleur · point quotidien'],
        ['6. Ouverture', '10 s', 'Je suis prêt pour vos questions'],
      ],
    },
    result: "Un plan de 6 lignes, 180 secondes, entièrement dérivé du gabarit. Joël n'a rien à apprendre par cœur : il doit seulement s'entraîner à relier les mots-clés.",
    pitfall: "Écrire le discours mot à mot. Vous le lirez, vous perdrez l'œil du jury, et à la première interruption vous ne saurez plus où reprendre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: "S'entraîner à voix haute : première passe enregistrée",
    intro: "Pourquoi : si votre processus inclut une restitution orale ou une soutenance, entraînez-vous au moins une fois en présentant votre proposition à voix haute — à un proche, un miroir ou en vous enregistrant. Entrée : le plan de 6 lignes.",
    steps: [
      {
        title: 'Installer l\'enregistrement',
        actions: [
          "Posez le téléphone à 1 mètre, en enregistrement audio (ou vidéo si votre épreuve est en visioconférence).",
          "Réglez un minuteur de 3 minutes, visible.",
          "Tenez-vous debout ou assis comme le jour J, avec la demi-feuille de 6 lignes pour seul support.",
        ],
      },
      {
        title: 'Parler sans relire',
        actions: [
          "Lancez l'enregistrement et le minuteur ensemble, puis parlez en suivant les 6 mots-clés.",
          "Si vous bafouillez, poursuivez : ne recommencez pas.",
          "À 3 minutes, terminez la phrase en cours et arrêtez.",
        ],
      },
      {
        title: 'Noter 3 repères bruts',
        actions: [
          "Durée réelle de l'exposé.",
          "Nombre de fois où vous avez lu votre feuille mot à mot.",
          "Nombre de chiffres de l'énoncé cités.",
        ],
      },
    ],
    example: {
      title: 'Première passe de Joël — lundi 25/01/2027',
      lines: [
        "Durée de l'exposé : 4 minutes 10 secondes, soit 70 secondes de trop ; le bloc « Options » a pris 1 minute 30.",
        "Lecture mot à mot de la feuille : 3 fois.",
        "Chiffres de l'énoncé cités : 3 sur 6 (les 15 %, les 9 jours et le CDD de 2 mois ; il a omis les 22 % et la durée de l'absence du coordinateur).",
      ],
    },
    result: "Trois mesures brutes et un enregistrement à réécouter. Joël sait déjà ce qu'il corrigera : les options et la lecture de la feuille.",
    tip: "Faites cette passe sans aucun auditeur d'abord, puis devant votre binôme. Vous apprenez la structure seul, et la présence du regard ensuite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Répondre à une objection : Reformuler – Faits – Position – Ajustement',
    intro: "Pourquoi : le jury va délibérément challenger votre proposition, parfois avec un argument faible ou une objection presque injuste. Ce n'est pas pour vous piéger : c'est pour observer si vous reculez immédiatement (raisonnement fragile) ou si vous argumentez avec des faits tout en restant capable d'ajuster. Entrée : les 3 questions de la section 5 du gabarit.",
    steps: [
      {
        title: 'Appliquer les 4 temps',
        actions: [
          "Reformuler la question en une phrase : vous gagnez 5 secondes et vous vérifiez que vous l'avez comprise.",
          "Faits : citer un chiffre ou une contrainte de l'énoncé.",
          "Position : dire explicitement « je maintiens » ou « j'ajuste ».",
          "Ajustement conditionnel : « si X change, alors je fais Y ».",
        ],
      },
      {
        title: 'Trier l\'objection',
        actions: [
          "Posez-vous 3 questions : l'objection apporte-t-elle un fait nouveau ? Une contrainte que j'avais ignorée ? Une erreur dans mon calcul ?",
          "Si oui à l'une des trois : ajustez ouvertement et dites pourquoi.",
          "Si non à toutes : maintenez poliment votre position, avec vos faits.",
        ],
      },
      {
        title: 'Tenir le ton',
        actions: [
          "Gardez le même débit, répondez au jury et non à votre feuille.",
          "Ne dites jamais « vous avez raison, je change d'avis » sans fait nouveau : reculer dès la première objection envoie un signal de raisonnement fragile, même quand la proposition initiale était solide.",
        ],
      },
    ],
    example: {
      title: 'Deux objections au cas S03 — Amina joue le jury',
      lines: [
        "Objection faible — « Le bailleur attend le rapport dans 9 jours : pourquoi ne pas licencier aujourd'hui et gagner du temps ? »",
        "Réponse de Joël : « Vous me demandez pourquoi ne pas sanctionner tout de suite. [Reformuler] Parce que 18 fiches sur 120 prouvent un problème de données, pas encore une faute établie ; sans entretien préalable, la sanction serait contestable et je perdrais l'explication qui m'aide à juger les 102 autres fiches. [Faits] Je maintiens donc l'enquête de 3 jours. [Position] Si l'enquêteur reconnaît les faits dès l'entretien, j'accélère la décision à J + 4. [Ajustement] »",
        "Objection pertinente — « Et si le règlement intérieur prévoit une suspension immédiate en cas de falsification de données ? »",
        "Réponse de Joël : « C'est un fait que je n'avais pas. Dans ce cas, je l'applique comme mesure conservatoire dès le jour 2 et je conserve l'entretien préalable avant la décision définitive. » (Il ajuste, et dit pourquoi.)",
      ],
    },
    result: "Joël dispose de 2 réponses types : une position maintenue avec des faits, une position ajustée avec un fait nouveau. Les deux sont sûres de leur structure.",
    pitfall: "Confondre fermeté et entêtement. Défendre avec des faits n'est pas de l'entêtement, c'est prouver que le choix était réfléchi ; mais refuser de bouger face à un fait nouveau est tout aussi éliminatoire que reculer d'emblée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Gérer les situations difficiles : inconnue, trou de mémoire, silence, temps',
    intro: "Pourquoi : le jury ne vous juge pas seulement sur ce que vous savez, mais sur ce que vous faites quand vous ne savez pas. Cinq situations reviennent presque à chaque restitution : préparez une phrase pour chacune. Entrée : votre enregistrement de la première passe.",
    steps: [
      {
        title: 'Préparer une phrase par situation',
        actions: [
          "Écrivez, pour chaque ligne du tableau ci-dessous, la phrase exacte que vous direz.",
          "Entraînez-vous à la dire à voix haute, trois fois, sans la relire.",
        ],
      },
      {
        title: 'Les tester en séance',
        actions: [
          "Demandez à votre binôme de créer volontairement chaque situation pendant une séance : question hors champ, silence de 5 secondes, interruption.",
          "Notez dans votre carnet celles qui vous ont fait perdre le fil.",
        ],
      },
    ],
    table: {
      columns: ['Situation', 'Ce qu\'il ne faut pas faire', 'Réponse recommandée'],
      rows: [
        ['Question dont vous ignorez la réponse', 'Inventer un chiffre', '« Je n\'ai pas cette information. Mon hypothèse est X, et je la vérifierais auprès de Y dans les 24 heures. »'],
        ['Trou de mémoire', 'S\'excuser longuement, relire la feuille', '« Permettez-moi de reprendre au point précédent. » Puis reprenez le dernier mot-clé.'],
        ['Silence du jury', 'Combler le vide en parlant plus vite', 'Compter 3 secondes, puis : « Souhaitez-vous que je développe un point ? »'],
        ['Objection sans fait nouveau, répétée', 'Céder à la 2e répétition', '« Je comprends ce point. Mon choix repose sur [chiffre] ; je reste ouvert si un fait nouveau change la contrainte. »'],
        ['Il reste 30 secondes et la proposition n\'est pas dite', 'Continuer le plan prévu', '« Pour conclure : je recommande C, pour ces trois raisons. » Et vous dites la proposition.'],
      ],
    },
    result: "Cinq phrases prêtes, dites à voix haute, qui vous évitent d'improviser dans les moments où l'on perd le plus de points.",
    tip: "Le silence du jury est souvent un test : il laisse volontairement la place pour voir si vous allez vous contredire pour le remplir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: "Réécouter l'enregistrement, se noter sur 5 critères et consigner la séance",
    intro: "Pourquoi : on ne progresse à l'oral que si on se réécoute. L'auto-évaluation notée sur 5 critères donne le score de la colonne G et le point à améliorer de la colonne H. Entrées : l'enregistrement et le plan de 6 lignes.",
    steps: [
      {
        title: 'Réécouter deux fois',
        actions: [
          "Première écoute sans interruption, pour la perception d'ensemble.",
          "Seconde écoute avec une feuille de grille : mettez en pause aux moments clés et notez ce que vous entendez.",
        ],
      },
      {
        title: 'Noter 5 critères de 0 à 2',
        actions: [
          "Structure annoncée : les 5 temps sont reconnaissables.",
          "Chiffres de l'énoncé cités : au moins 4.",
          "Risque de votre propre choix nommé, avec son suivi.",
          "Traitement des objections : faits, sans recul immédiat ni entêtement.",
          "Tenue du temps, sans lecture mot à mot.",
          "Additionnez : le total sur 10 est le score de la colonne G.",
        ],
      },
      {
        title: 'Consigner dans la grille',
        actions: [
          "Saisissez une nouvelle ligne : Type « Simulation orale (défense) », secteur du sujet, temps alloué (durée de la séance avec questions), temps réel, score, point à améliorer, statut.",
        ],
      },
    ],
    table: {
      columns: ['Critère (0 à 2 points)', 'Note', 'Preuve relevée dans l\'enregistrement de Joël'],
      rows: [
        ['Structure annoncée', '2', 'Contexte, contraintes, options, proposition et risque reconnaissables dans l\'ordre'],
        ['Chiffres de l\'énoncé cités (au moins 4)', '1', '3 chiffres sur 6 cités'],
        ['Risque nommé et suivi', '1', 'Risque nommé, sans indicateur de suivi'],
        ['Objections traitées avec des faits', '0', 'À la 1re objection : « ah oui, vous avez raison, je change d\'avis »'],
        ['Tenue du temps sans lecture', '1', '4 min 10 au lieu de 3 min ; feuille lue 3 fois'],
        ['Total', '5', 'Score auto-évalué : 5 sur 10'],
      ],
    },
    example: {
      title: 'Ligne 10 de la grille de Joël (séance du 25/01/2027)',
      lines: [
        "A10 = 2027-01-25 · B10 = Simulation orale (défense) · C10 = RH · D10 = 10 · E10 = 11 · F10 = 1 (calculé)",
        "G10 = 5 · H10 = « Reculé dès la 1re objection (« vous avez raison, je change ») ; critère prochaine séance : appliquer Reformuler–Faits–Position–Ajustement sur 3 objections, aucun recul sans fait nouveau. » · I10 = À refaire.",
        "Séance suivante, le 29/01 : score 7, écart 0, statut Terminé.",
      ],
    },
    result: "Un enregistrement réécouté, un score de 5 sur 10 fondé sur 5 critères, une ligne de grille et un critère précis pour la séance du 29/01.",
    pitfall: "Se noter à l'impression (« c'était plutôt bien »). Sans critères, la note n'a aucun lien avec le jury ; avec les 5 critères, vous pouvez comparer vos passages entre eux.",
  },

  // ───────── PROCÉDURE 6 — PILOTER LA PROGRESSION ET LE JOUR J (5 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: "Lire l'onglet « Progression » toutes les 5 séances",
    intro: "Pourquoi : relisez votre grille régulièrement, pas uniquement la veille d'un entretien. L'onglet « Progression » calcule, par secteur, le nombre de séances, le temps moyen alloué, le temps moyen réel, l'écart moyen et le score moyen. Fil rouge : point d'étape de Joël après sa 5e séance, vendredi 22/01/2027.",
    steps: [
      {
        title: 'Ouvrir et lire sans modifier',
        actions: [
          "Cliquez sur l'onglet « Progression » : ne modifiez aucune cellule, les formules sont automatiques.",
          "Lisez les colonnes B (nombre de séances), C (temps moyen alloué), D (temps moyen réel), E (écart moyen) et F (score moyen), secteur par secteur, puis la ligne TOTAL (ligne 9).",
          "Un tiret (—) signifie qu'aucune séance n'est enregistrée pour ce secteur.",
        ],
      },
      {
        title: 'Comprendre les formules',
        actions: [
          "Colonne B : COUNTIF compte les lignes de l'onglet « Entraînement » dont le secteur correspond (en français : NB.SI).",
          "Colonnes C, D et F : AVERAGEIF calcule la moyenne par secteur, arrondie à 1 décimale (en français : MOYENNE.SI).",
          "Colonne E : écart moyen = temps moyen réel − temps moyen alloué. Positif : vous dépassez systématiquement.",
        ],
      },
      {
        title: 'Vérifier les secteurs',
        actions: [
          "Si un secteur affiche 0 séance alors que vous en avez saisi, vérifiez l'orthographe du secteur dans la colonne C de l'onglet « Entraînement ».",
        ],
      },
    ],
    table: {
      columns: ['Secteur', 'Séances', 'Temps alloué moyen', 'Temps réel moyen', 'Écart moyen', 'Score moyen'],
      rows: [
        ['Supply Chain', '0', '—', '—', '—', '—'],
        ['Finance', '2', '37,5', '42,5', '5,0', '6,5'],
        ['RH', '1', '30,0', '36,0', '6,0', '5,0'],
        ['Gestion de projet', '2', '60,0', '67,5', '7,5', '5,5'],
        ['TOTAL', '5', '45,0', '51,2', '6,2', '5,8'],
      ],
    },
    example: {
      title: 'Lecture de Joël au 22/01/2027',
      lines: [
        "Sur 5 séances : l'écart moyen est de + 6,2 minutes et le score moyen de 5,8 sur 10.",
        "Supply Chain affiche 0 séance : normal, ce secteur n'est pas testé chez TSI.",
        "RH n'a qu'une séance (score 5) : trop peu pour conclure, mais c'est le secteur le moins bien noté.",
      ],
    },
    result: "Vous lisez 5 chiffres par secteur et vous savez ce qu'ils mesurent. Le tableau ne dit pas encore quoi faire : c'est l'objet de l'étape suivante.",
    pitfall: "Lire l'écart moyen d'un secteur comme une tendance. C'est une moyenne : elle cache la baisse éventuelle ligne après ligne. La tendance se lit dans la colonne F de l'onglet « Entraînement », séance par séance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Distinguer un problème de temps d\'un problème de fond',
    intro: "Pourquoi : ce sont deux problèmes qui se corrigent différemment. Si l'écart entre le temps alloué et le temps réel ne diminue pas après plusieurs séances sur un même secteur, le problème est probablement la gestion du temps, pas la connaissance technique. Entrées : l'onglet « Progression » et la colonne F de l'onglet « Entraînement ».",
    steps: [
      {
        title: 'Lire la tendance, secteur par secteur',
        actions: [
          "Dans l'onglet « Entraînement », filtrez ou repérez les lignes d'un secteur et lisez la colonne F de la plus ancienne à la plus récente.",
          "Une colonne F qui décroît (11, puis 4) signale un progrès, même si la moyenne reste positive.",
        ],
      },
      {
        title: 'Croiser écart et score',
        actions: [
          "Appliquez le tableau de décision ci-dessous à chaque secteur.",
          "En cas de double signal (écart positif et score bas), traitez toujours le temps avant le fond technique.",
        ],
      },
      {
        title: 'Écrire la décision',
        actions: [
          "Écrivez, par secteur, une phrase de décision : « diagnostic — action — critère de contrôle ».",
        ],
      },
    ],
    table: {
      columns: ['Observation', 'Diagnostic', 'Action'],
      rows: [
        ['Écart positif, score ≥ 7', 'Problème de temps', 'Alarmes de jalon, règle de sortie, séances plus courtes'],
        ['Écart proche de 0 ou négatif, score ≤ 5', 'Problème de fond', 'Reprendre la fiche de révision du secteur, refaire un sujet voisin'],
        ['Écart positif et score bas', 'Les deux', 'Traiter le temps d\'abord, puis le fond'],
        ['Écart en baisse séance après séance', 'Progression', 'Garder le rythme et ne rien changer'],
        ['Score qui stagne sur un secteur', 'Dispersion', 'Concentrer les prochaines séances sur ce secteur'],
      ],
    },
    example: {
      title: 'Décisions de Joël au 22/01/2027, secteur par secteur',
      lines: [
        "Gestion de projet : écart de 7,5 min en moyenne mais ligne 5 → ligne 8 : 11 puis 4 minutes. Progression : on garde le rythme (séances du 27/01 et du 01/02).",
        "Finance : écart de 5,0 min, score 6,5. Double signal modéré : temps d'abord, grâce au tableau de minutes ; une séance de contrôle le 02/02.",
        "RH : 1 séance, score 5 : le seul secteur où le fond est en cause. Deux séances de défense orale sont déjà planifiées les 25/01 et 29/01 ; relire la fiche RH avant le 25/01.",
      ],
    },
    result: "Une décision écrite par secteur, avec un critère de contrôle : vous ne vous entraînez plus au hasard, vous traitez le point faible identifié.",
    pitfall: "Réviser du fond quand le problème est le temps. Joël aurait relu trois cours de gestion de projet alors qu'il connaît ses livrables : ce qui lui manque, c'est une alarme obéie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Ajuster le plan des séances restantes',
    intro: "Pourquoi : si votre score auto-évalué stagne sur un secteur précis, concentrez vos prochaines séances spécifiquement dessus plutôt que de continuer à vous disperser. Un plan qui ne bouge jamais n'a pas écouté la grille. Entrées : les décisions de l'étape 2, l'agenda.",
    steps: [
      {
        title: 'Réécrire le calendrier',
        actions: [
          "Reprenez l'agenda des séances restantes et affectez chacune à un secteur et à un critère de contrôle.",
          "Gardez au moins une séance par semaine dans le secteur le plus faible.",
          "N'enchaînez pas plus de 2 séances consécutives dans le même secteur.",
        ],
      },
      {
        title: 'Fixer un critère de sortie par séance',
        actions: [
          "Reformulez le « point à améliorer » de la dernière séance en critère mesurable (ex. écart ≤ + 3 minutes).",
          "Écrivez-le sur la première ligne de votre feuille de séance.",
        ],
      },
      {
        title: 'Enrichir la banque',
        actions: [
          "Ajoutez un sujet voisin de chaque séance « À refaire » : refaire le même sujet fausse la mesure, car vous en connaissez la fin.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Séance', 'Critère de contrôle'],
      rows: [
        ['25/01', 'RH — défense orale (S05)', 'Appliquer Reformuler–Faits–Position–Ajustement sur 3 objections, aucun recul sans fait nouveau'],
        ['27/01', 'Gestion de projet — étude de cas (S04)', 'Alarmes de jalon obéies ; écart ≤ + 3 minutes'],
        ['29/01', 'RH — défense orale (S05 bis)', 'Score ≥ 7, aucune lecture de la feuille'],
        ['01/02', 'Test écrit complet de 60 minutes', 'Fin de chaque question à l\'heure du tableau de minutes ; écart ≤ 0'],
        ['02/02', 'Finance — étude de cas complète', 'Répétition générale : gabarit rempli en 30 minutes, restitution de 3 minutes'],
      ],
    },
    example: {
      title: "Ce que Joël modifie dans son plan du 22/01/2027",
      lines: [
        "Ajout : relecture de la fiche RH (Procédure 2, étape 3) avant la séance du 25/01.",
        "Modification : la séance du 27/01 devient une séance « sans filet » : alarmes de jalon, aucun dépassement toléré.",
        "Maintien : le 01/02 (écrit complet) et le 02/02 (étude de cas complète) restent des répétitions générales.",
      ],
    },
    result: "Le plan des 5 dernières séances est réécrit, chaque séance a son critère de sortie, et chaque critère se vérifie dans la grille.",
    tip: "Notez la date de votre prochaine relecture de la grille dans l'agenda : après la 10e séance, ou la veille du jour J si vous en faites moins.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Faire le bilan après la dernière séance et donner le feu vert',
    intro: "Pourquoi : savoir si vous êtes prêt n'est pas une impression. Le bilan final lit la synthèse de l'onglet « Progression » et les 3 dernières lignes de l'onglet « Entraînement ». Fil rouge : Joël, lundi 02/02/2027 au soir, après sa 10e séance.",
    steps: [
      {
        title: 'Lire la synthèse sur 10 séances',
        actions: [
          "Ouvrez l'onglet « Progression » et notez les 5 colonnes par secteur et le TOTAL.",
          "Repérez le secteur au score moyen le plus bas.",
        ],
      },
      {
        title: 'Lire les 3 dernières lignes',
        actions: [
          "Dans l'onglet « Entraînement », relevez les colonnes F et G des 3 dernières séances : ce sont elles qui comptent, car la moyenne cumulée traîne les premières séances.",
        ],
      },
      {
        title: 'Appliquer les critères de feu vert',
        actions: [
          "Écart de chacune des 3 dernières séances ≤ + 3 minutes.",
          "Score de chacune des 3 dernières séances ≥ 7.",
          "Au moins une défense orale notée ≥ 7.",
          "Si un critère n'est pas rempli, planifiez une séance de plus avant la veille, dans la limite des 15 lignes de la grille.",
        ],
      },
    ],
    table: {
      columns: ['Secteur', 'Séances', 'Temps alloué moyen', 'Temps réel moyen', 'Écart moyen', 'Score moyen'],
      rows: [
        ['Supply Chain', '0', '—', '—', '—', '—'],
        ['Finance', '3', '35,0', '38,3', '3,3', '7,0'],
        ['RH', '3', '16,7', '19,0', '2,3', '5,7'],
        ['Gestion de projet', '4', '52,5', '56,5', '4,0', '6,3'],
        ['TOTAL', '10', '36,5', '39,8', '3,3', '6,3'],
      ],
    },
    example: {
      title: 'Bilan de Joël — critères de feu vert',
      lines: [
        "Les 3 dernières lignes : séance du 29/01 (RH, écart 0, score 7), du 01/02 (Gestion de projet, écart 0, score 7), du 02/02 (Finance, écart 0, score 8).",
        "Écarts : 0, 0, 0 → critère rempli. Scores : 7, 7, 8 → critère rempli. Défense orale : 7 le 29/01 → critère rempli.",
        "Lecture : le RH reste à 5,7 en moyenne parce que la moyenne cumulée garde la séance à 5 du 18/01 et celle à 5 du 25/01 ; les écarts sont à 0 sur les 3 dernières séances. Feu vert.",
      ],
    },
    result: "Une décision étayée par 9 chiffres (3 écarts, 3 scores, 1 oral, 2 moyennes de contrôle). Le feu vert ne dit pas « je suis parfait » mais « je suis dans mes conditions de test ».",
    pitfall: "Se rassurer avec la moyenne cumulée. Une moyenne de 6,3 cache des séances à 5 et à 8 ; seules les 3 dernières lignes disent où vous en êtes aujourd'hui.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Appliquer le protocole de la veille, du jour J et du lendemain',
    intro: "Pourquoi : le jour J, vous ne devez plus rien décider d'autre que la réponse. La logistique, le minuteur et l'ordre des gestes sont réglés avant. Entrées : fiche de cadrage, tableau de minutes, fiches de révision. Fil rouge : Joël, du mercredi 03/02 au vendredi 05/02/2027.",
    steps: [
      {
        title: 'La veille',
        actions: [
          "Relisez vos 4 fiches de révision (30 minutes), sans nouvelle séance lourde.",
          "Préparez le matériel : calculatrice, feuilles numérotées, tableau de minutes imprimé, eau, chargeur.",
          "Testez la connexion et la plateforme de visioconférence ; prévoyez un second appareil ou un partage de connexion.",
          "Couchez-vous à l'heure habituelle.",
        ],
      },
      {
        title: 'Le jour J',
        actions: [
          "Arrivez au poste 45 minutes avant : table dégagée, téléphone en mode avion, minuteur visible.",
          "Au top : lisez tout le sujet 3 minutes, posez les alarmes de jalon, respectez la règle des 2 minutes et l'ordre du tableau de minutes.",
          "Entre deux épreuves, mangez et marchez : ne relisez pas de cours.",
          "Pour l'étude de cas, ouvrez le gabarit dès le top des 30 minutes et suivez les 7 jalons.",
        ],
      },
      {
        title: 'Après l\'épreuve',
        actions: [
          "Dans les 15 minutes, notez dans un carnet les questions posées, ce qui vous a surpris et ce que vous referiez.",
          "Ajoutez 2 sujets inspirés de l'épreuve réelle à votre banque.",
          "Envoyez, dans les 24 heures, un courriel de remerciement de 3 lignes au recruteur.",
        ],
      },
    ],
    table: {
      columns: ['Heure (jeudi 04/02/2027)', 'Action de Joël', 'Repère'],
      rows: [
        ['8 h 15', 'Poste installé, téléphone en mode avion, minuteur et tableau de minutes visibles', 'Rien d\'autre sur la table'],
        ['8 h 45', 'Test de connexion et de la plateforme', 'Second appareil prêt'],
        ['9 h 00', 'Lecture complète du sujet, alarmes posées', 'Fin de la lecture à 9 h 03'],
        ['9 h 16, 9 h 34, 9 h 55', 'Fins de Q1, Q2, Q3', 'Alarmes obéies'],
        ['10 h 00', 'Fin de l\'épreuve écrite', 'Pause, repas, pas de révision'],
        ['14 h 00', 'Étude de cas : 30 minutes de préparation avec le gabarit', 'Jalons à 3, 6, 11, 19, 24, 29, 30 min'],
        ['14 h 30', 'Restitution de 10 minutes avec questions', 'Exposé de 3 min, plan de 6 lignes'],
        ['14 h 45', 'Carnet de bord, 15 minutes', 'Questions posées, ce qui a surpris'],
      ],
    },
    result: "Un protocole sur une page, dont chaque ligne a une heure. Le jour J, Joël n'a plus à choisir comment travailler, seulement à appliquer.",
    pitfall: "Relire des cours entre l'écrit et l'oral. Vous arrivez à l'étude de cas avec la tête pleine du dernier sujet et sans énergie pour la structure.",
  },

  // ────────────────────── CAS RÉSOLU DE BOUT EN BOUT ──────────────────────
  {
    type: 'case-study',
    title: "Cas résolu (1/5) — Amina : la séance du 21/01 et la reprise du 28/01, minute par minute",
    scenario: "Amina Tshibola prépare son test de coordinatrice supply chain chez Clinique Mobile Internationale (vendredi 05/02/2027). Jeudi 21/01 à 18 h 30, elle traite l'énoncé de rupture de kits de traitement en 30 minutes, Joël en jury. Le 28/01, elle traite un énoncé voisin (rupture de médicaments essentiels dans un camp de 8 000 personnes) avec la même méthode.",
    steps: [],
    table: {
      columns: ['Bloc', 'Prévu', 'Séance du 21/01 (énoncé du module)', 'Séance du 28/01 (énoncé voisin)'],
      rows: [
        ['Lecture de l\'énoncé', '3 min', '4 min', '3 min'],
        ['1. Contexte', '3 min', '3 min', '3 min'],
        ['2. Contraintes et chiffrage', '5 min', '7 min', '5 min'],
        ['3. Options', '8 min', '11 min', '8 min'],
        ['4. Proposition', '5 min', '5 min', '5 min'],
        ['5. Questions pièges', '5 min', '4 min', '5 min'],
        ['Relecture et cartouche', '1 min', '0 min', '1 min'],
        ['Total', '30 min', '34 min', '30 min'],
      ],
    },
    example: {
      title: 'Ce qui a changé entre les deux séances',
      lines: [
        "21/01 : les alarmes de jalon n'étaient posées qu'au début et à la fin ; le calcul du surcoût a été fait après les options ; la relecture n'a pas eu lieu.",
        "28/01 : 6 alarmes de jalon, calculs faits avant les options, règle des 2 minutes appliquée à l'option C, relecture faite en 1 minute.",
      ],
    },
    result: "Même candidate, même méthode : la séance du 21/01 dépasse de 4 minutes, celle du 28/01 est dans le temps. Ce qui a changé, ce sont l'ordre des calculs et les alarmes, pas les connaissances.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/5) — Le gabarit final d\'Amina (version corrigée le 22/01, condensée)',
    scenario: "Version corrigée par Amina, au débrief du 22/01 avec Joël, du gabarit-structuration-reponse-etude-de-cas.docx pour l'énoncé de rupture de kits de traitement (12 000 personnes déplacées, 4 jours de stock, protocole de 15 jours, 12 jours contre 5 jours, + 40 %, budget engagé à 70 %). Une page et demie.",
    steps: [],
    example: {
      title: 'gabarit-structuration — Amina Tshibola (extrait condensé)',
      lines: [
        "1. Contexte — Camp de 12 000 personnes déplacées ; notre ONG y fournit les kits de traitement de la malnutrition aiguë sévère ; l'audit de stock révèle 4 jours de couverture pour 15 exigés. Je dois proposer un plan d'approvisionnement avant la rupture.",
        "2. Contraintes — Ressources : stock 4 jours · budget engagé à 70 % · (H) 45 000 USD disponibles · alternatif : + 40 %, qualité non vérifiée. Temps : habituel 12 jours (8 jours de rupture) · alternatif 5 jours (1 jour) · traitement non interruptible. Chiffrage : déficit 11 jours ; rationnement = 33 % de la ration ; 24 000 USD (habituel) contre 33 600 USD (alternatif).",
        "3. Options — A attendre et rationner : 24 000 USD, mais 8 jours sans kits. B tout chez l'alternatif : 33 600 USD, 1 jour de rupture, qualité non vérifiée sur tout le volume. C mixte : 9 jours chez l'alternatif + 15 jours chez l'habituel : 44 160 USD, marge 840 USD.",
        "4. Proposition — Option C. Parce que : pont de 8 jours, rationnement à 33 %, 44 160 USD pour 45 000 (H). Risque principal : qualité de l'alternatif → contrôle à réception, paiement après contrôle. 24 h : deux commandes, certificats, emprunt d'un jour de stock, note au siège.",
        "5. Questions pièges — Pourquoi pas A ? 33 % de la ration, risque vital. Surcoût de 40 % ? + 5 760 USD pour éviter 8 jours de rupture, dérogation documentée, contrôle qualité. Budget refusé ? Pont de 8 jours = 17 920 USD ; prêt de stock ; réallocation ; note à la direction pays.",
        "Rédigé par : Amina Tshibola, candidate — coordinatrice supply chain · Date : 22/01/2027.",
      ],
    },
    result: "Un document d'une page et demie dont chaque section renvoie à la précédente par un chiffre : c'est ce que le jury lit comme un raisonnement traçable.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/5) — La restitution orale de 3 minutes, bloc par bloc',
    scenario: "Le 22/01, Amina présente sa proposition corrigée à Joël, uniquement avec son plan de 6 lignes, sans lire le gabarit. Voici ce qu'elle dit, dans l'ordre et au rythme prévu (environ 250 mots, pauses comprises).",
    steps: [],
    example: {
      title: "Restitution d'Amina — 180 secondes",
      lines: [
        "Contexte (20 s) — « Nous sommes dans un camp de 12 000 personnes déplacées. Notre stock de kits contre la malnutrition aiguë sévère ne couvre plus que 4 jours, alors que le protocole en exige 15. »",
        "Contraintes (30 s) — « Le fournisseur habituel livre en 12 jours : 8 jours de rupture. L'alternatif livre en 5 jours, avec 40 % de surcoût et sans référence qualité. Le budget d'urgence est engagé à 70 % ; je pars de l'hypothèse de 45 000 USD disponibles. »",
        "Options (50 s) — « Première option : attendre et rationner. 4 jours de stock sur 12 jours donnent un tiers de la ration à des enfants en traitement. Deuxième option : tout chez l'alternatif, 33 600 USD, mais sans garantie qualité sur le volume entier. Troisième option : une solution mixte. »",
        "Proposition (50 s) — « Je recommande la troisième : 15 jours chez l'habituel, livrés à J + 12, et 9 jours chez l'alternatif, livrés à J + 5, pour 44 160 USD. Le pont de 8 jours est couvert, et le protocole de 15 jours est rétabli le jour de la livraison habituelle. »",
        "Risque et surveillance (20 s) — « Le risque est la qualité de l'alternatif. Je le couvre par un contrôle des lots et de la péremption à réception, et je paie le solde après contrôle. »",
        "Ouverture (10 s) — « Voilà ma proposition. Je suis prête pour vos questions. »",
      ],
    },
    result: "Durée : 2 minutes 55 secondes. Chiffres cités : 9 (12 000 ; 4 ; 15 ; 12 ; 5 ; 40 % ; 70 % ; 45 000 ; 44 160). Feuille consultée 0 fois mot à mot. Score auto-évalué : 8 sur 10, noté 7 par Joël, qui a relevé que le suivi du risque n'avait pas d'indicateur.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/5) — Les questions pièges en direct : maintenir, puis ajuster',
    scenario: "Joël joue un jury exigeant. Il enchaîne deux objections : l'une faible, qu'Amina maintient avec des faits ; l'autre pertinente, qu'elle intègre en le disant.",
    steps: [
      { title: 'Objection faible — « Votre alternatif n\'a aucune référence : pourquoi prendre ce risque ? »', body: "Reformulation : « Vous me demandez pourquoi accepter un fournisseur non vérifié. » Faits : « Parce que 4 jours de stock pour 12 jours de délai laissent 8 jours de rupture, et que le rationnement donne 33 % de la ration. » Position : « Je maintiens le recours à l'alternatif, mais borné à 9 jours et sous contrôle à réception. » Ajustement : « Si le contrôle des lots est négatif, je ne distribue pas et j'active l'emprunt de stock du cluster nutrition. »" },
      { title: 'Objection pertinente — « Notre politique exige trois offres pour tout achat au-dessus de 15 000 USD. »', body: "C'est un fait nouveau : Amina ne l'avait pas. Réponse : « Dans ce cas, la commande de 20 160 USD à l'alternatif demande une dérogation d'urgence, que je documente et que je soumets à la direction dans les 24 heures. Je sollicite parallèlement une seconde offre écrite d'un autre fournisseur, sous 24 heures, sans retarder la commande habituelle. »" },
      { title: 'Ce que le jury retient', body: "Amina a réagi aux deux objections sans changer de ton, a maintenu ce qui était étayé et ajusté ce qui était contredit par un fait. C'est exactement le signal cherché : un raisonnement possédé, pas appris." },
    ],
    result: "Deux objections, deux réponses structurées. Remarquez ce qu'Amina n'a pas dit : « ah oui, vous avez raison, je change d'avis ».",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/5) — La notation du jury, la grille remplie et la décision',
    scenario: "Joël note la copie et la défense d'Amina avec une grille fictive de l'exemple (structure 30, priorisation 25, rigueur technique 25, défense 20 ; les pondérations réelles varient selon les organisations). Amina consigne ensuite ses deux séances dans sa grille d'entraînement.",
    steps: [],
    table: {
      columns: ['Élément noté', 'Séance du 21/01', 'Séance du 28/01', 'Commentaire du jury (28/01)'],
      rows: [
        ['Structure de la pensée (30)', '22', '26', 'Les 5 temps sont dans l\'ordre ; chaque section renvoie à la précédente'],
        ['Priorisation sous contrainte (25)', '15', '21', "Option retenue reliée à 4 chiffres de l'énoncé ; marge budgétaire signalée"],
        ['Rigueur technique (25)', '18', '20', 'Stock de sécurité défini ; point de commande évoqué comme cause racine'],
        ['Défense et ajustement (20)', '8', '15', 'Objection faible maintenue, objection pertinente intégrée'],
        ['Total (100)', '63', '82', 'Progression de 19 points en 7 jours'],
      ],
    },
    example: {
      title: 'Lignes de la grille d\'Amina et lecture de la Progression',
      lines: [
        "Ligne du 21/01 : 2027-01-21 · Étude de cas · Supply Chain · 30 · 34 · écart 4 · score 6 · « Section 3 trop longue (11 min au lieu de 8), surcoût calculé après les options ; critère : calculs avant la section 3 » · À refaire.",
        "Ligne du 28/01 : 2027-01-28 · Étude de cas · Supply Chain · 30 · 30 · écart 0 · score 8 · « Réponse à la question piège n°3 à chiffrer dès le premier jet ; critère : citer le montant du pont minimal » · Terminé.",
        "Onglet « Progression », ligne Supply Chain (2 séances) : temps alloué moyen 30,0 ; temps réel moyen 32,0 ; écart moyen 2,0 ; score moyen 7,0.",
      ],
    },
    result: "Amina arrive à son test avec un écart de 0 minute sur ses 2 dernières séances et une défense qui tient. Elle n'a pas appris le cas par cœur : elle a acquis la méthode, ce qui est ce que le test mesure.",
  },

  // ─────────────────────────────── EXERCICES ───────────────────────────────
  {
    type: 'exercise',
    title: "Exercice noté 1 — Rupture d'approvisionnement, 30 minutes de préparation",
    instructions: "Vous passez le test technique final pour un poste de coordinateur ou coordinatrice supply chain au sein d'une ONG médicale internationale. Le jury vous accorde 30 minutes de préparation, puis 10 minutes de restitution orale avec questions. Réglez un minuteur sur 30 minutes exactement et traitez ce scénario dans ces conditions réelles, sans les dépasser. Suivez les Procédures 3, 4 et 5 comme Amina.",
    example: {
      title: 'Énoncé remis par le jury',
      lines: [
        "« Votre organisation intervient dans un camp de déplacés de 12 000 personnes. Un audit de stock révèle qu'il ne reste que 4 jours de kits de traitement contre la malnutrition aiguë sévère, alors que le protocole médical exige un stock de sécurité de 15 jours. Le fournisseur habituel annonce un délai de livraison de 12 jours pour la prochaine commande. Un fournisseur alternatif, jamais utilisé par votre organisation, peut livrer en 5 jours mais à un coût 40 % plus élevé et sans référence de qualité vérifiée par votre organisation. Vous disposez d'un budget d'urgence limité, déjà engagé à 70 % sur d'autres lignes. Que proposez-vous ? »",
        "Questions pièges probables : pourquoi ne pas simplement attendre les 12 jours en rationnant ? Comment justifiez-vous un surcoût de 40 % sur un fournisseur non vérifié ? Si le budget d'urgence est refusé par votre siège, quelle est votre solution de repli ?",
      ],
    },
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Enregistrez une copie du gabarit-structuration-reponse-etude-de-cas.docx et une copie de la grille d'entraînement.",
          "Réglez un minuteur de 30 minutes avec les alarmes de jalon de la Procédure 4, étape 1.",
        ],
      },
      {
        title: '1. Entraînement chronométré (30 minutes)',
        actions: [
          "Lancez le minuteur, ouvrez l'énoncé et remplissez le gabarit dans l'ordre, sans jamais mettre le minuteur en pause.",
          "Remplissez : contexte résumé, contraintes identifiées (stock, délai, budget, qualité du fournisseur), au moins deux options avec avantages et inconvénients (par exemple attendre l'habituel avec rationnement, basculer sur l'alternatif, solution mixte), proposition recommandée justifiée, réponse préparée à chacune des trois questions pièges.",
          "Si vous posez des hypothèses chiffrées pour le budget et le prix, marquez-les (H).",
        ],
      },
      {
        title: '2. Consigner la séance',
        actions: [
          "Ouvrez la grille et saisissez une ligne : secteur Supply Chain, type Étude de cas, temps alloué 30, temps réel, score auto-évalué honnête, au moins un point précis à améliorer.",
        ],
      },
      {
        title: '3. Restitution orale (3 minutes maximum)',
        actions: [
          "Présentez votre proposition à voix haute, comme si le jury était en face de vous, en vous appuyant uniquement sur votre gabarit rempli, sans texte rédigé mot à mot.",
          "Enregistrez-vous, réécoutez et notez-vous sur les 5 critères de la Procédure 5, étape 5.",
        ],
      },
    ],
    tip: "Faites jouer le jury par un proche ou un collègue : demandez-lui de poser les 3 questions pièges, puis une quatrième de son choix. Le meilleur entraînement oral est celui où l'on ne sait pas exactement ce qui va être demandé.",
    pitfall: "Écrire « il faut sécuriser l'approvisionnement » sans citer 4 jours, 12 jours, 5 jours, 40 % ou 70 %. Une réponse qui ne cite aucun chiffre de l'énoncé donne l'impression d'une réponse apprise.",
    deliverable: "Le gabarit complété (1 à 2 pages), votre ligne d'entraînement enregistrée dans la grille chronométrée et l'enregistrement de votre restitution orale de 3 minutes.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Vous avez réglé un minuteur sur 30 minutes exactement et ne l'avez jamais mis en pause, même quand vous étiez bloqué.",
      "Le gabarit contient un contexte en 2-3 phrases reformulées, sans solution.",
      "La section 2 liste le stock (4 jours), le délai (12 et 5 jours), le surcoût (40 %), le budget engagé (70 %) et la qualité non vérifiée du fournisseur alternatif, chacun avec son chiffre ou son hypothèse marquée (H).",
      "La section 3 compare au moins deux options, chacune avec un avantage relié à une contrainte et un risque chiffré.",
      "La proposition de la section 4 cite au moins 4 chiffres de l'énoncé, nomme le risque de votre propre choix et dit comment vous le surveillez.",
      "Les trois questions pièges ont chacune une réponse écrite, factuelle, avec au moins un chiffre.",
      "La grille contient une ligne complète : secteur « Supply Chain » écrit exactement, durées en nombres seuls, score honnête et un point à améliorer précis (quoi, où, comment le mesurer).",
      "Votre restitution orale de 3 minutes a été faite à voix haute, sans relire un texte mot à mot, et enregistrée.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice d'application — Votre propre préparation, en 3 semaines",
    instructions: "Appliquez maintenant les 6 procédures à votre propre épreuve. Si vous n'avez pas encore de convocation, prenez une annonce réelle de votre secteur cible et une date fictive à 3 semaines. Bloquez les créneaux dans votre agenda dès aujourd'hui ; chaque période produit un livrable précis.",
    steps: [
      { title: 'Jour 1 (2 h) — Procédure 1', actions: ["Fiche de cadrage, courriel de questions au recruteur (ou liste de questions si la convocation n'est pas encore reçue), banque de 10 à 12 sujets, calendrier des séances daté dans l'agenda."] },
      { title: 'Jours 2 à 4 (4 h) — Procédure 2', actions: ["Une fiche de révision d'une page par secteur testé, avec un exercice chiffré résolu ; tableau de minutes par question pour votre épreuve écrite."] },
      { title: 'Semaine 1 à 3 — Procédure 3 et 4', actions: ["Au moins 10 séances chronométrées sans pause, chacune consignée immédiatement dans la grille (score honnête, point à améliorer précis), dont au moins 4 études de cas remplies avec le gabarit en 30 minutes."] },
      { title: 'Semaine 2 et 3 — Procédure 5', actions: ["Au moins 3 restitutions orales de 3 minutes enregistrées, dont 1 face à un binôme qui pose 3 objections ; chaque enregistrement noté sur les 5 critères."] },
      { title: 'Après les séances 5 et 10 — Procédure 6', actions: ["Lecture de l'onglet « Progression », diagnostic temps ou fond par secteur, plan ajusté, critères de feu vert appliqués."] },
      { title: 'Veille et jour J — Procédure 6', actions: ["Protocole horaire d'une page, matériel préparé, carnet de bord à remplir après l'épreuve."] },
    ],
    deliverable: "Votre dossier « Préparation test » contenant : fiche de cadrage, banque de sujets, fiches de révision, grille d'entraînement avec au moins 10 lignes, 4 gabarits d'étude de cas, 3 enregistrements oraux notés, bilan des séances 5 et 10 et protocole de jour J.",
  },
  {
    type: 'checklist',
    title: 'Votre préparation personnelle est correcte si…',
    items: [
      "Votre fiche de cadrage indique les secteurs testés, le format, la durée, la langue et le matériel, et chaque ligne « À confirmer » a été close ou relancée.",
      "Votre banque contient 10 à 12 sujets, au moins 2 par secteur testé, avec les noms de secteur exacts de la grille.",
      "Vos fiches de révision tiennent chacune sur une page, avec un exercice chiffré résolu en moins de 5 minutes.",
      "Vous avez fait au moins 10 séances sans jamais mettre le minuteur en pause, et chacune a une ligne complète dans la grille.",
      "Chaque ligne de la grille a un point à améliorer écrit en trois parties (quoi, où, comment je le mesure) et un score ancré sur la grille d'ancrage.",
      "Vous avez rempli le gabarit en 30 minutes sur au moins 4 études de cas, avec au moins 4 chiffres de l'énoncé cités à chaque fois.",
      "Vous avez enregistré au moins 3 restitutions de 3 minutes et traité des objections avec la méthode Reformuler – Faits – Position – Ajustement.",
      "Vous avez lu l'onglet « Progression » après la 5e et la 10e séance, et vos 3 dernières séances satisfont aux critères de feu vert.",
    ],
  },

  // ─────────────────────── PIÈGES, BILAN, SUITE ───────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Se précipiter sur la première idée venue sans structurer sa réponse avant d'écrire ou de parler — le candidat se contredit ou oublie un élément du scénario. Parade : lecture active de 3 minutes, puis les sections du gabarit dans l'ordre.",
      "S'entraîner sans respecter les contraintes de temps réelles, puis paniquer le jour de l'épreuve. Parade : minuteur lancé avant l'ouverture du sujet, alarmes de jalon, jamais de pause.",
      "Ne pas défendre ses choix avec assurance quand le jury les challenge — reculer dès la première objection envoie un signal de raisonnement fragile. Parade : Reformuler – Faits – Position – Ajustement, et ajuster seulement sur un fait nouveau.",
      "Traiter chaque option comme si elle était sans coût ni risque — le jury pense que vous ne les avez pas vus. Parade : un risque chiffré par option, y compris la vôtre, et un moyen de le surveiller.",
      "Oublier de relier la proposition aux chiffres du scénario (4 jours de stock, 12 jours de délai, budget engagé à 70 %). Parade : au moins 4 chiffres de l'énoncé dans la section 4.",
      "Écrire « Gestion projet » ou « 60 min » dans la grille : le secteur n'est pas reconnu, la durée est ignorée, l'onglet « Progression » est faux sans message d'erreur. Parade : noms de secteur exacts, nombres seuls.",
      "Mélanger sur une même ligne un test de 60 minutes et une défense de 10 minutes, ou lire un écart moyen comme une tendance. Parade : une ligne par séance, lecture des colonnes F et G des 3 dernières lignes.",
      "Réviser du fond quand le problème est la gestion du temps — ce sont deux problèmes qui se corrigent différemment. Parade : tableau de décision de la Procédure 6, étape 2.",
      "Inventer un chiffre quand une donnée manque. Parade : poser une hypothèse chiffrée marquée (H), la dire à voix haute et dire comment la vérifier.",
      "Lire son texte à voix haute : on perd l'œil du jury et le fil à la première interruption. Parade : un plan de 6 lignes de mots-clés, jamais un discours rédigé.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez rempli une fiche de cadrage de votre épreuve, close les points « À confirmer » par un courriel au recruteur et classé vos secteurs par priorité.",
      "Vous avez constitué une banque de 10 à 12 sujets, dont certains tirés de vos propres situations de terrain, et posé 10 séances datées dans votre agenda.",
      "Vous avez rédigé 4 fiches de révision (supply chain, finance, RH, gestion de projet), chacune avec un exercice chiffré résolu, et calibré le temps par question d'un test écrit.",
      "Vous avez conduit des séances chronométrées sans pause et rempli la grille d'entraînement : score ancré, point à améliorer en trois parties, statut.",
      "Vous avez rempli le gabarit de structuration en 30 minutes : contexte, contraintes chiffrées, au moins deux options, proposition reliée aux contraintes, trois questions pièges.",
      "Vous avez présenté votre proposition à voix haute en 3 minutes, enregistré, et défendu votre choix sous objections avec une méthode.",
      "Vous avez lu l'onglet « Progression », distingué le temps du fond, ajusté votre plan et préparé un protocole de jour J daté.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer les quatre éléments qu'un jury évalue réellement dans un test technique.",
      "Je connais la méthode en 5 étapes pour structurer une réponse à une étude de cas (contexte → contraintes → options → proposition → défense).",
      "Je me suis entraîné(e) au moins une fois avec un minuteur réglé sur une durée réelle, sans le mettre en pause.",
      "J'ai rempli au moins une ligne complète dans la grille d'entraînement chronométré, avec une auto-évaluation honnête.",
      "J'ai complété un gabarit de structuration de réponse pour l'étude de cas de ce module.",
      "J'ai anticipé au moins deux questions pièges pour cette étude de cas et préparé une réponse factuelle à chacune.",
      "Je me suis entraîné(e) à défendre ma proposition à voix haute, sans relire un texte mot à mot.",
      "Je sais identifier, dans mon dernier entraînement, un point précis à améliorer pour la prochaine séance.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 05 — Simulation d'Entretiens — Méthode STAR Maîtrisée : vous y transformerez vos réalisations « Oui » et votre aisance acquise à l'oral en réponses structurées Situation, Tâche, Action, Résultat, travaillées en simulations avec retours détaillés — y compris les questions difficiles et, pour Joël, les premières réponses en anglais.",
  },
]
