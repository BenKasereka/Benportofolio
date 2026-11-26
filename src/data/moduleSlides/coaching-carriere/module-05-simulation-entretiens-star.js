// Module 05 — Simulation d'Entretiens — Méthode STAR Maîtrisée
// Référence pas à pas : chaque procédure du module (plan des 7 jours et
// décodage de l'offre, banque d'histoires STAR, simulation chronométrée et
// enregistrée, grille d'auto-évaluation, cycles de progression, questions
// pièges, jour J) est détaillée étape par étape et appliquée à un cas fil
// rouge unique (Joël Kabeya, fictif, convoqué par un panel), à partir du
// contenu source (01-theorie.md, 02-outils.md, 03-exercices.md) et des
// templates du dossier 04-templates (banque-histoires-star-preparation.xlsx
// et grille-auto-evaluation-simulation-entretien.docx).
export default [
  // ─────────────────────────────── OUVERTURE ───────────────────────────────
  {
    type: 'cover',
    title: "Simulation d'Entretiens — Méthode STAR Maîtrisée",
    hook: "À la fin de ce module, vous aurez en main une banque de 8 histoires STAR chiffrées, au moins 3 simulations chronométrées et enregistrées, analysées avec la grille d'auto-évaluation, une réponse honnête préparée pour 3 à 5 questions pièges et un plan de 7 jours qui vous amène prêt au jour J — pas simplement « au courant du sujet ».",
  },
  {
    type: 'objectives',
    items: [
      "Décoder une offre d'emploi et reconnaître en quelques secondes une question comportementale, théorique, d'opinion ou hypothétique, en produisant une liste classée de 5 à 8 compétences clés à prouver.",
      "Rédiger 5 à 8 histoires STAR (Situation, Tâche, Action, Résultat) dans le classeur « banque-histoires-star-preparation.xlsx », en produisant une banque dont chaque ligne affiche « OK — prête pour l'entretien » dans la colonne « Complétude de la ligne ».",
      "Raconter chaque histoire à voix haute en 2 minutes maximum, avec une Action qui occupe 60 à 70 % du temps de parole, en produisant un enregistrement audio ou vidéo chronométré.",
      "Auto-évaluer chaque simulation avec « grille-auto-evaluation-simulation-entretien.docx » en repérant tics de langage, débit, réponses trop longues ou trop vagues et résultats non chiffrés, en produisant une grille remplie de 1 à 2 pages et 3 axes d'amélioration vérifiables.",
      "Répéter le cycle simulation puis auto-évaluation au moins 3 fois en priorisant les histoires les plus faibles, en produisant un tableau de progression daté, de la première à la dernière simulation.",
      "Préparer une stratégie de réponse honnête à 3 à 5 questions pièges probables (échec, parcours, limite, écart de profil, silence du jury), en produisant une fiche de réponses d'une page.",
      "Tenir un entretien en panel de 2 à 4 évaluateurs, de la veille au remerciement, en produisant un plan de 7 jours et une checklist du jour J.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Vous ne repartez pas avec des notions : vous repartez avec 6 livrables, produits dans cet ordre, que vous réutiliserez à chaque entretien (et au module 06 pour la négociation qui suit l'offre).",
      "Cas fil rouge — Joël Kabeya, Superviseur MEAL à Alliance Santé Grands Lacs (Goma, RDC), dont vous avez suivi l'audit de carrière au module 01. Sa candidature a franchi les filtres : le lundi 11 janvier 2027 à 16 h, Initiative Santé Kivu International (ISKI, ONG internationale fictive) le convoque à un entretien de panel pour le poste de Responsable MEAL (MEAL Manager) à Bukavu, programme santé-nutrition de 6,2 M USD. Entretien : lundi 18 janvier 2027 à 10 h, en visioconférence, 60 minutes. Il lui reste 7 jours.",
    ],
    bullets: [
      "Livrable 1 — Plan des 7 jours, liste de 8 compétences classées et fiche du format d'entretien (Procédure 1).",
      "Livrable 2 — Banque d'histoires STAR complétée : 8 lignes toutes en « OK — prête pour l'entretien » (Procédure 2).",
      "Livrable 3 — Enregistrement chronométré d'une simulation et fiches d'ancres pour raconter sans réciter (Procédure 3).",
      "Livrable 4 — Grille d'auto-évaluation remplie pour chaque simulation, 1 à 2 pages (Procédure 4).",
      "Livrable 5 — Tableau de progression sur 3 simulations et critère de sortie atteint (Procédure 5).",
      "Livrable 6 — Fiche d'une page de réponses aux 3 à 5 questions pièges, puis checklist du jour J (Procédures 6 et 7).",
    ],
    table: {
      columns: ['Évaluateur du panel ISKI', 'Fonction', 'Ce qu\'il regardera en priorité'],
      rows: [
        ['Mme Odette Mbuyi', 'Directrice des programmes (future supérieure hiérarchique)', 'Leadership, décision, résultats chiffrés'],
        ['M. Patrick Lemaire', 'Responsable des ressources humaines régional', 'Cohérence du parcours, gestion des désaccords, grille de notation'],
        ['Dr Fatuma Said', 'Coordinatrice technique santé-nutrition (pair)', 'Rigueur des données, crédibilité technique'],
      ],
    },
    tip: "MEAL = Monitoring, Evaluation, Accountability and Learning (suivi, évaluation, redevabilité et apprentissage). Les 3 évaluateurs de ce cas sont fictifs, comme l'organisation.",
  },

  // ─────────────────────────── THÉORIE ESSENTIELLE ──────────────────────────
  {
    type: 'concept',
    title: 'Ce que le jury cherche réellement',
    body: [
      "Un candidat compétent perd des points non pas parce qu'il manque d'expérience, mais parce qu'il répond comme si on lui demandait une opinion générale, alors qu'on lui demande un fait vécu. Les organisations internationales — agences onusiennes, grandes ONG, bailleurs — utilisent très majoritairement l'entretien comportemental, aussi appelé compétence-based interview.",
      "Le principe : le comportement passé est le meilleur prédicteur du comportement futur. Chaque question attend un exemple concret, daté, vécu par vous — jamais une opinion générale ni une réponse au conditionnel.",
    ],
    example: {
      title: 'Même question, trois réponses — comment le jury les note',
      lines: [
        "Question : « Racontez-nous une situation où vous avez dû convaincre un collègue réticent. »",
        "Opinion → « Je pense qu'il faut toujours écouter l'autre et rester ouvert. » — note 1 : aucun fait, aucune preuve.",
        "Conditionnel → « Je commencerais par organiser une réunion pour comprendre ses craintes. » — note 2 : une intention, pas un comportement.",
        "Vécu → « En septembre 2025, j'ai obtenu l'accord du responsable logistique en 30 minutes, en proposant un calendrier commun… » — note 4 ou 5 si le Résultat est chiffré.",
      ],
    },
    highlight: "Un jury entraîné entend la différence en une phrase : une réponse au conditionnel sur une question comportementale est notée en dessous d'une réponse construite sur du vécu, même si l'idée derrière est bonne.",
  },
  {
    type: 'stat-callout',
    stat: '60 à 70 %',
    caption: "La part du temps de parole que doit occuper la partie Action de votre réponse STAR.",
    context: "C'est là que le jury évalue votre raisonnement, vos choix et votre capacité à agir sous contrainte. Une réponse STAR complète dépasse rarement 2 minutes : au-delà, vous perdez le jury en digressions.",
  },
  {
    type: 'comparison-table',
    title: 'Reconnaître le type de question en quelques secondes',
    columns: ['Type de question', 'Signal dans la formulation', 'Exemple', 'Format de réponse attendu'],
    rows: [
      ['Comportementale (compétence-based)', '« Racontez », « décrivez une situation où », « donnez-moi un exemple », « une fois où » — passé composé', 'Décrivez une situation où vous avez géré un désaccord avec un collègue.', 'Histoire STAR complète, 2 minutes maximum'],
      ['Théorique', '« Qu\'est-ce que », « expliquez », « définissez » — présent', "Qu'est-ce qu'un cadre logique ?", 'Définition en 2 phrases, puis une phrase de vécu qui la prouve'],
      ['Opinion', '« Que pensez-vous de », « selon vous » — présent', 'Que pensez-vous de la redevabilité envers les populations ?', 'Position en une phrase, puis preuve vécue en STAR court'],
      ['Hypothétique', '« Que feriez-vous si » — conditionnel', 'Que feriez-vous si un bailleur refusait votre rapport ?', 'Méthode en 3 temps, puis « dans une situation comparable, j\'ai… »'],
      ['Question piège', 'Échec, faiblesse, trou ou incohérence dans le parcours, silence du jury', 'Parlez-moi d\'un échec.', 'Réponse honnête préparée (Procédure 6) — jamais une esquive'],
    ],
  },
  {
    type: 'concept',
    title: 'La structure STAR : un budget de temps pour une réponse de 2 minutes',
    body: "La méthode STAR correspond exactement à ce que la grille du jury cherche à cocher : chaque lettre est une information que l'évaluateur doit pouvoir extraire de votre réponse pour la noter. Voici le budget de temps à viser et le test qui prouve que la lettre est tenue.",
    table: {
      columns: ['Lettre', 'Ce qu\'elle contient', 'Temps visé', 'Test de contrôle'],
      rows: [
        ['S — Situation', 'Quand, où, dans quel type de projet ou d\'organisation, quel enjeu ; 1 à 2 phrases', '10 à 15 secondes (≈ 10 %)', 'Un auditeur sans contexte sait dire quand, où et quel était l\'enjeu'],
        ['T — Tâche', 'Votre rôle exact et l\'objectif ou la responsabilité qui était la vôtre — pas celle de l\'équipe', '10 à 15 secondes (≈ 10 %)', 'Je ne peux pas remplacer « je » par « nous » dans cette phrase'],
        ['A — Action', 'Ce que vous avez fait, personnellement, étape par étape', '70 à 85 secondes (60 à 70 %)', 'Au moins 3 verbes d\'action à la première personne, dans l\'ordre'],
        ['R — Résultat', 'L\'issue mesurable : un chiffre, un pourcentage, un délai, une conséquence observable, plus un apprentissage si pertinent', '15 à 25 secondes (≈ 15 %)', 'On peut vérifier le Résultat : il contient un chiffre ou un fait observable'],
      ],
    },
    pitfall: "Passer une minute entière à planter le décor avant d'arriver au fait utile : c'est le piège numéro un des candidats non préparés. Une Situation qui dépasse 2 phrases est trop longue.",
  },
  {
    type: 'concept',
    title: 'Le Résultat : sans chiffre ni fait observable, ce n\'est pas une histoire STAR',
    body: "Une histoire STAR sans Résultat chiffré ou observable n'est pas une histoire STAR : c'est une anecdote. Le jury ne peut évaluer que ce qui est vérifiable. « Et finalement, la situation s'est améliorée » ne dit rien ; « le taux de rotation de l'équipe est passé de 40 % à 12 % sur les six mois suivants » dit tout. Il existe presque toujours l'un de ces 5 types de résultats.",
    table: {
      columns: ['Type de résultat', 'Exemple', 'Comment le trouver'],
      rows: [
        ['Volume', '38 centres de santé sur 38 couverts ; 1 340 retours traités', 'Comptez bénéficiaires, sites, rapports, formulaires'],
        ['Délai', 'Rapport livré avec 1 jour d\'avance ; délai de réponse de 19 à 7 jours', 'Comparez la durée avant et après, ou l\'avance sur le calendrier'],
        ['Taux', 'Erreurs de saisie de 14 % à 5 % ; complétude de 100 % contre 68 %', 'Variation en % = (avant − après) ÷ avant × 100 ; sinon écart en points'],
        ['Argent', 'Budget de 120 000 USD exécuté à 96 %', 'Budget géré, économie réalisée, montant arbitré'],
        ['Fait observable', 'Grille de critères réutilisée sur 3 opérations ; décision confirmée par le coordinateur', 'Réutilisation, adoption, validation écrite, demande d\'extension'],
      ],
    },
    tip: "Terminez par une phrase d'apprentissage quand elle est vraie : « ce que j'en ai retenu, et ce que je ferais différemment ». Elle est obligatoire pour la question sur un échec.",
    pitfall: "Gonfler un chiffre : un jury humanitaire peut appeler votre ancien superviseur. Arrondissez à la baisse et sachez citer la pièce ou le témoin qui le confirme.",
  },
  {
    type: 'concept',
    title: "Le panel d'entretien et sa grille de notation",
    body: [
      "Un entretien comportemental se déroule presque toujours en panel : 2 à 4 évaluateurs (le futur responsable hiérarchique, un représentant RH, parfois un pair technique) posent des questions issues d'un référentiel de compétences défini à l'avance, chacun notant vos réponses sur une grille partagée, avec une pondération par compétence.",
      "Conséquences pour vous : la même question est posée dans les mêmes termes à tous les candidats (inutile d'espérer une question sur mesure), et une réponse structurée et complète est plus facile à noter favorablement qu'une réponse brillante mais décousue. Chaque compétence fait l'objet d'au moins une question, souvent suivie d'une relance : « pouvez-vous me donner un autre exemple, dans un contexte différent ? ».",
    ],
    example: {
      title: 'Extrait de grille d\'un évaluateur (illustration fictive)',
      lines: [
        'Compétence : Gestion de conflit — Question n° 3 — Note /5 : ____',
        'Situation datée et contextualisée ?  oui / non      Rôle du candidat clair ?  oui / non',
        'Actions personnelles décrites (verbes, méthode) ?  oui / non      Résultat vérifiable ?  oui / non',
        'Relance posée : exemple dans un autre contexte ?  oui / non  →  exemple fourni ?  oui / non',
      ],
    },
    highlight: "Vous ne pouvez pas vous préparer question par question : vous ne connaîtrez jamais la formulation exacte. Préparez-vous compétence par compétence, avec au moins une histoire STAR prête — et une de réserve pour les compétences indispensables.",
  },
  {
    type: 'concept',
    title: 'Les 8 compétences de la banque : ce que le jury y cherche',
    body: "Le classeur du module prévoit 8 compétences, celles que les panels de l'humanitaire testent le plus souvent. Pour chacune, connaissez ce que le jury cherche et les formulations qui la cachent.",
    table: {
      columns: ['Compétence', 'Ce que le jury cherche', 'Formulations typiques de la question'],
      rows: [
        ['Leadership', 'Capacité à fixer un cap, répartir, motiver et obtenir un résultat collectif', 'Racontez une situation où vous avez dirigé une équipe vers un objectif difficile.'],
        ['Gestion de conflit', 'Désamorcer un désaccord par des faits et un compromis, sans rupture de relation', 'Décrivez un désaccord avec un collègue ou un partenaire et comment vous l\'avez résolu.'],
        ['Résolution de problème sous pression', 'Diagnostic rapide, priorisation, action sous contrainte de délai', 'Parlez-moi d\'une fois où tout a dérapé à quelques jours d\'une échéance.'],
        ['Travail d\'équipe multiculturel', 'Adaptation à d\'autres cultures de travail, inclusion, résultat commun', 'Donnez un exemple de collaboration avec des collègues de cultures différentes.'],
        ['Communication avec parties prenantes', 'Adapter le message à des interlocuteurs divers (bailleurs, autorités, communautés) et obtenir leur adhésion', 'Décrivez comment vous avez obtenu l\'adhésion d\'un acteur réticent.'],
        ['Gestion du changement / adaptabilité', 'Accompagner ou subir un changement d\'outil, de rôle ou de contexte et rester efficace', 'Racontez un changement important dans votre travail et comment vous vous y êtes adapté.'],
        ['Prise de décision avec informations incomplètes', 'Décider sans attendre la certitude, assumer et rendre compte', 'Décrivez une décision difficile prise sans toutes les informations.'],
        ['Échec assumé / apprentissage', 'Honnêteté, responsabilité, capacité à corriger durablement', 'Parlez-moi d\'un échec professionnel et de ce que vous en avez tiré.'],
      ],
    },
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'STAR', definition: "Situation, Tâche, Action, Résultat — la structure à appliquer à toute réponse d'entretien comportemental." },
      { term: 'Entretien comportemental / compétence-based interview', definition: "Méthode d'entretien fondée sur le principe que le comportement passé prédit le comportement futur, où chaque question demande un exemple vécu rattaché à une compétence précise." },
      { term: "Panel d'entretien", definition: 'Plusieurs évaluateurs interrogeant conjointement un candidat, chacun notant ses réponses sur une grille de compétences partagée.' },
      { term: 'Question piège', definition: "Question conçue pour tester la réaction sous pression, la cohérence ou l'honnêteté du candidat plus que la compétence technique elle-même (échec, incohérence apparente dans le CV, silence délibéré du jury)." },
      { term: 'Résultat quantifié', definition: "Élément chiffré ou observable clôturant une histoire STAR, sans lequel la réponse reste une anecdote non vérifiable aux yeux du jury." },
      { term: 'Relance', definition: "Question complémentaire du jury sur la même compétence, souvent : un autre exemple dans un contexte différent. D'où l'histoire de réserve." },
      { term: 'Tic de langage', definition: "Mot ou expression répétés sans fonction (« du coup », « en fait », « voilà ») que l'enregistrement révèle et qui finissent par couvrir le contenu de votre réponse." },
      { term: "Banque d'histoires", definition: "Le classeur Excel du module : une ligne par compétence, une colonne par lettre S-T-A-R, une vérification automatique du Résultat et une synthèse de couverture." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu (1/2) — Diagnostic d\'une réponse vague',
    scenario: "En simulation, un candidat reçoit la question classique sur la gestion de conflit : « Décrivez une situation où vous avez dû gérer un désaccord avec un collègue. » Sa réponse enregistrée : « Oui, alors, j'ai déjà géré une situation difficile avec un collègue, on n'était pas d'accord sur la façon de faire les choses, il y a eu des tensions pendant un moment, mais on en a discuté et finalement ça s'est bien passé, on a retrouvé une bonne relation de travail. »",
    steps: [],
    table: {
      columns: ['Composante', 'Ce que dit le candidat', 'Ce que le jury note', 'Ce qui manque'],
      rows: [
        ['Situation', '« une situation difficile avec un collègue »', 'Aucun contexte', 'Quel projet, quand, quelle organisation'],
        ['Tâche', '(rien)', 'Rôle inconnu', 'Quel était son rôle dans le désaccord'],
        ['Action', '« on en a discuté »', 'Action quasi inexistante', 'Discuté comment, qui a fait le premier pas, quelle méthode'],
        ['Résultat', '« ça s\'est bien passé »', 'Non vérifiable', 'Un fait mesurable ou observable'],
      ],
    },
    result: "Un jury entraîné note cette réponse en dessous de la moyenne, non pas parce que la compétence n'existe probablement pas chez le candidat, mais parce qu'elle n'a jamais été démontrée.",
  },
  {
    type: 'case-study',
    title: 'Cas vécu (2/2) — Reconstruction en STAR complet',
    scenario: "Même candidat, même histoire vraie, reconstruite avec les quatre colonnes S-T-A-R. La différence n'est pas cosmétique : la version reconstruite prouve la compétence au lieu de l'affirmer.",
    steps: [
      { title: 'Situation', body: "« Lors d'un projet de distribution alimentaire d'urgence il y a environ un an, mon collègue chargé du volet logistique et moi avions des visions opposées sur la priorisation des zones à couvrir en premier, avec un délai de 48 h à respecter. »" },
      { title: 'Tâche', body: "« En tant que coordinateur du projet, il m'appartenait de trancher rapidement pour ne pas retarder l'opération, sans écarter unilatéralement l'expertise logistique de mon collègue. »" },
      { title: 'Action', body: "« J'ai proposé une réunion de 30 minutes le jour même où chacun présentait ses critères avec les données disponibles. J'ai identifié que nos deux approches partageaient 80 % des zones prioritaires, et j'ai proposé un compromis basé sur les données de vulnérabilité les plus récentes plutôt que sur nos préférences. »" },
      { title: 'Résultat', body: "« Le convoi est parti dans les délais, la relation de travail s'est renforcée, et nous avons formalisé une grille de critères de priorisation réutilisée sur 3 opérations ultérieures. »" },
    ],
    result: "Contexte vérifiable, rôle personnel, actions détaillées, résultat mesurable et bénéfice qui dépasse l'anecdote : c'est exactement ce que le jury sait noter. Cette ligne est aussi l'exemple pré-rempli de la ligne 5 du classeur.",
  },
  {
    type: 'concept',
    title: 'La méthode : 7 procédures, dans cet ordre, sur 7 jours',
    body: "Chaque procédure produit l'entrée de la suivante. Comptez environ 15 heures réparties sur 7 jours : c'est la semaine type d'un candidat convoqué à un entretien dans une semaine. Ne sautez pas d'étape : écrire des histoires avant d'avoir décodé l'offre, c'est préparer au hasard.",
    table: {
      columns: ['Procédure', 'Entrée', 'Livrable produit', 'Durée / jours'],
      rows: [
        ["1. Plan et décodage de l'offre", 'Convocation, offre, agenda', 'Plan de 7 jours, 5 à 8 compétences classées, fiche du format', '1 h — J1'],
        ["2. Banque d'histoires STAR", "Compétences, réalisations du module 01", '8 lignes S-T-A-R, toutes « OK — prête pour l\'entretien »', '6 h 30 — J1 à J4'],
        ['3. Simulation chronométrée', 'Banque complète', 'Fiches d\'ancres, enregistrement de la simulation 1', '1 h 30 — J4'],
        ["4. Auto-évaluation", 'Enregistrement, grille Word', 'Grille remplie, 3 axes d\'amélioration', '1 h par simulation — J4'],
        ['5. Cycles de progression', 'Grilles, banque', 'Simulations 2 et 3, tableau de progression, critère de sortie', '3 h — J5 et J6'],
        ['6. Questions pièges', 'Parcours, écarts, grilles', 'Fiche de 3 à 5 réponses honnêtes', '1 h 30 — J6 et J7'],
        ['7. Jour J', 'Tous les livrables', 'Checklist, pitch de 90 secondes, remerciement', '30 min — J7, puis jour J'],
      ],
    },
    tip: "Bloquez ces créneaux dans votre agenda comme des réunions, avant même de commencer (Procédure 1, étape 1) : une préparation « quand j'aurai le temps » se réduit à relire ses notes la veille.",
  },
  {
    type: 'concept',
    title: 'Votre matériel de simulation',
    body: "Quatre outils suffisent. Le plus sous-utilisé par les candidats est aussi le plus efficace : l'enregistrement de vous-même. S'écouter ou se revoir répondre révèle des défauts invisibles à l'oral en direct. Aucune relecture mentale ne remplace ce retour direct.",
    table: {
      columns: ['Outil', 'À quoi il sert', 'Réglage minimal'],
      rows: [
        ['banque-histoires-star-preparation.xlsx', 'Organiser vos histoires par compétence, une colonne par lettre, vérification automatique du Résultat, synthèse de couverture', 'Une copie datée par candidature ; ne jamais travailler dans l\'original'],
        ['Enregistrement audio ou vidéo (smartphone)', 'Révéler les tics (« du coup », « en fait », « voilà »), le débit trop rapide, le regard qui fuit, la réponse qui ne mène jamais au Résultat', 'Vidéo en paysage, caméra à hauteur des yeux, 10 secondes de test écoutées avant de commencer'],
        ['grille-auto-evaluation-simulation-entretien.docx', 'Structurer l\'auto-critique juste après la simulation, au lieu d\'un vague « ça s\'est plutôt bien passé »', 'Une copie par simulation, numérotée et datée'],
        ['Partenaire de simulation (collègue, ami, mentor, ou vous face caméra)', 'Reproduire la surprise réelle d\'un jury ; idéalement quelqu\'un qui ne connaît pas vos histoires par cœur', 'À défaut de partenaire, vous filmer seul reste préférable à vous entraîner en silence'],
      ],
    },
    tip: "Demandez toujours l'accord d'un partenaire avant de l'enregistrer, et supprimez l'enregistrement après analyse s'il apparaît à l'image.",
  },

  // ─────── PROCÉDURE 1 — PLAN DES 7 JOURS ET DÉCODAGE DE L'OFFRE (5 étapes) ───────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Bloquer les 7 jours dans votre agenda',
    intro: "Pourquoi : 7 jours, c'est peu. Sans créneaux réservés, la préparation se réduit à relire ses notes la veille. Entrées : la convocation (date et heure de l'entretien) et votre agenda. Jour 1 = le jour où vous recevez la convocation.",
    steps: [
      {
        title: 'Compter à rebours',
        actions: [
          "Écrivez la date et l'heure de l'entretien en haut d'une page, puis J1 à J7 jusqu'à la veille.",
          "Repérez vos contraintes fixes de la semaine : horaires de travail, déplacements, coupures d'électricité ou de connexion prévisibles.",
        ],
      },
      {
        title: 'Réserver 7 créneaux',
        actions: [
          'Créez dans votre agenda un événement « Préparation entretien » par jour, de 1 à 2 heures ; évitez les blocs de plus de 3 heures, qui fatiguent sans progresser.',
          'Placez les 3 simulations (J4, J5, J6) en soirée ou le week-end, à l\'heure de l\'entretien réel si possible.',
        ],
      },
      {
        title: 'Affecter une procédure à chaque jour',
        actions: [
          'Reportez dans chaque événement la procédure du jour et le livrable attendu (voir le tableau).',
          'Contactez dès J1 votre partenaire de simulation et fixez avec lui les créneaux de J4, J5 et J6.',
        ],
      },
    ],
    table: {
      columns: ['Jour', 'Date (cas Joël)', 'Activité et livrable du jour', 'Durée'],
      rows: [
        ['J1', 'lun. 11/01/2027', 'Plan, décodage de l\'offre, compétences classées ; ouverture de la banque, expériences brutes (Proc. 1 et 2, étapes 1-2)', '2 h 30'],
        ['J2', 'mar. 12/01', 'Histoires 1 à 3 rédigées : Leadership, Communication parties prenantes, Décision (Proc. 2)', '2 h'],
        ['J3', 'mer. 13/01', 'Histoires 4 à 6 : Résolution sous pression, Gestion de conflit, Travail d\'équipe multiculturel (Proc. 2)', '2 h'],
        ['J4', 'jeu. 14/01', 'Histoires 7 et 8, version orale, simulation 1 enregistrée, grille n° 1 (Proc. 2, 3 et 4)', '3 h 30'],
        ['J5', 'ven. 15/01', 'Priorités, corrections, simulation 2 et grille n° 2 (Proc. 5)', '2 h'],
        ['J6', 'sam. 16/01', 'Simulation 3 à 10 h, grille n° 3 ; questions pièges 1 à 3 (Proc. 5 et 6)', '2 h'],
        ['J7', 'dim. 17/01', 'Questions pièges 4 et 5, silence ; veille de l\'entretien (Proc. 6 et 7)', '1 h'],
        ['Jour J', 'lun. 18/01, 10 h', 'Entretien de panel en visioconférence, 60 minutes (Proc. 7)', '—'],
      ],
    },
    result: 'Sept événements d\'agenda posés, trois créneaux de simulation confirmés avec un partenaire, total de 15 heures environ.',
    pitfall: "Garder le dernier jour pour « tout reprendre » : la veille de l'entretien sert à se reposer et à vérifier la technique, pas à apprendre de nouvelles histoires.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: "Décoder l'offre : verbes et qualités, ligne par ligne",
    intro: "Pourquoi : le référentiel du panel est construit à partir de l'offre. Vous devez lire l'annonce comme le jury l'a écrite. Entrées : l'offre complète, la description de poste, le référentiel de compétences publié par l'organisation s'il existe, vos notes de lettre de motivation (module 03).",
    steps: [
      {
        title: "Copier l'offre hors ligne",
        actions: [
          "Copiez le texte de l'offre dans un document texte et enregistrez aussi le PDF : une annonce peut disparaître avant l'entretien.",
          'Numérotez les lignes des rubriques « Responsabilités » et « Profil recherché ».',
        ],
      },
      {
        title: 'Surligner verbes et qualités',
        actions: [
          'Surlignez chaque verbe de la rubrique Responsabilités : vous dirigez, vous pilotez, vous représentez, vous décidez…',
          'Surlignez chaque qualité de la rubrique Profil : leadership, adaptabilité, esprit d\'équipe, aisance relationnelle…',
        ],
      },
      {
        title: 'Traduire chaque ligne en compétence',
        actions: [
          'À côté de chaque ligne surlignée, écrivez la compétence comportementale qu\'elle sous-entend.',
          'Ajoutez celles que les panels du secteur testent toujours (gestion de conflit, résolution de problème sous pression, travail d\'équipe multiculturel, échec assumé).',
          'Notez à part les exigences non comportementales (langue, diplôme, années d\'expérience) : elles deviendront des questions pièges (Procédure 6).',
        ],
      },
    ],
    example: {
      title: 'Offre ISKI — Responsable MEAL, Bukavu (extrait) et décodage par Joël',
      lines: [
        '« Vous dirigez une équipe MEAL de 7 personnes et la coachez au quotidien »  →  Leadership',
        '« Vous pilotez le cadre de résultats (38 indicateurs) d\'un programme de 6,2 M USD »  →  Décision, rigueur',
        '« Vous représentez ISKI auprès de la Division provinciale de la santé et des bailleurs »  →  Communication avec parties prenantes',
        '« Vous travaillez avec une équipe nationale et internationale »  →  Travail d\'équipe multiculturel',
        '« Vous rétablissez la qualité des données en situation d\'urgence »  →  Résolution de problème sous pression',
        '« Vous introduisez un outil unique de collecte numérique »  →  Gestion du changement / adaptabilité',
        '« Vous arbitrez avec des informations parfois incomplètes »  →  Prise de décision avec informations incomplètes',
        '« Anglais professionnel exigé »  →  exigence non comportementale : piège probable (Procédure 6)',
      ],
    },
    result: "Une liste brute de 8 à 12 formulations de compétences, chacune reliée à une phrase de l'offre, et une courte liste d'exigences à traiter en questions pièges.",
    pitfall: "Se contenter de la rubrique « Profil » : les responsabilités révèlent des compétences (décision, représentation, coaching) que l'annonce ne nomme jamais.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Hiérarchiser et retenir 5 à 8 compétences clés',
    intro: "Pourquoi : c'est cette liste qui structure toute la suite du travail — ne la sautez pas pour aller écrire des histoires au hasard. Entrée : la liste brute de l'étape précédente. Sortie : 5 à 8 compétences, classées.",
    steps: [
      {
        title: 'Compter les mentions',
        actions: [
          'Comptez combien de fois chaque compétence est citée dans l\'offre : verbes, qualités, intitulé.',
          'Ajoutez 1 point si elle figure dans les deux rubriques (Responsabilités et Profil).',
        ],
      },
      {
        title: 'Rapprocher des 8 intitulés du classeur',
        actions: [
          'Regroupez vos formulations sous les 8 intitulés du template : Leadership ; Gestion de conflit ; Résolution de problème sous pression ; Travail d\'équipe multiculturel ; Communication avec parties prenantes ; Gestion du changement / adaptabilité ; Prise de décision avec informations incomplètes ; Échec assumé / apprentissage.',
          "Si l'offre exige une compétence absente de la liste, notez-la : vous l'ajouterez à la banque à l'étape 8 de la Procédure 2.",
        ],
      },
      {
        title: 'Trancher et classer',
        actions: [
          'Gardez 5 à 8 compétences : au-delà de 8, la préparation devient superficielle.',
          'Classez-les : « indispensable » à partir de 3 mentions, « probable » en dessous.',
          'Gardez « Échec assumé / apprentissage » d\'office : la question est classique même si l\'offre n\'en parle pas.',
        ],
      },
    ],
    table: {
      columns: ['Compétence (intitulé du classeur)', 'Mentions dans l\'offre ISKI', 'Niveau'],
      rows: [
        ['Leadership', '4 (dirigez, coachez, encadrez, équipe de 7)', 'Indispensable'],
        ['Communication avec parties prenantes', '3 (Division provinciale, bailleurs, partenaires)', 'Indispensable'],
        ['Prise de décision avec informations incomplètes', '3 (arbitrez, pilotez, décidez)', 'Indispensable'],
        ['Résolution de problème sous pression', '2 (qualité des données, urgence)', 'Probable'],
        ["Travail d'équipe multiculturel", '2 (équipe nationale et internationale)', 'Probable'],
        ['Gestion du changement / adaptabilité', '2 (outil unique, nouvelle organisation)', 'Probable'],
        ['Gestion de conflit', '1 (« médiation entre équipes »)', 'Probable'],
        ['Échec assumé / apprentissage', '0 — retenue d\'office', 'D\'office'],
      ],
    },
    result: "Joël retient 8 compétences : 3 indispensables, 4 probables, 1 d'office. C'est le plafond de la banque (lignes 6 à 13 du classeur) et l'ordre dans lequel il rédigera.",
    tip: "Un candidat qui vise plusieurs postes de nature différente prépare une banque par famille de poste, pas une banque unique : les compétences indispensables changent d'une offre à l'autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'S\'entraîner à reconnaître le type de question',
    intro: "Pourquoi : si vous répondez à une question d'opinion par une histoire de 2 minutes, ou à une question comportementale par une opinion, vous perdez des points avant même de parler. Entrée : le tableau des types vu en théorie. Durée : 10 minutes.",
    steps: [
      {
        title: 'Repérer le verbe et le temps',
        actions: [
          'Soulignez le verbe de la question : « racontez », « décrivez », « donnez-moi un exemple », « une fois où » annoncent une question comportementale.',
          'Repérez le temps : passé composé = comportementale ; présent général = théorique ou opinion ; conditionnel = hypothétique.',
        ],
      },
      {
        title: 'Démasquer les questions déguisées',
        actions: [
          '« Comment réagissez-vous sous pression ? » est écrite au présent, mais le jury attend un exemple vécu.',
          'En cas de doute, répondez par du vécu : commencez par « Par exemple, en… » et déroulez un STAR court.',
        ],
      },
      {
        title: 'Choisir le format de réponse',
        actions: [
          'Comportementale : STAR complet, 2 minutes maximum.',
          'Théorique, opinion ou hypothétique : réponse brève, puis une phrase de vécu qui la prouve.',
        ],
      },
    ],
    table: {
      columns: ['Question entendue (exercice de Joël)', 'Type', 'Format de réponse'],
      rows: [
        ["Parlez-moi d'une fois où vous avez dû convaincre un partenaire réticent.", 'Comportementale', 'STAR complet (Communication avec parties prenantes)'],
        ["Qu'est-ce qu'un cadre logique ?", 'Théorique', "Définition en 2 phrases + « j'ai conçu un cadre de 32 indicateurs »"],
        ['Que pensez-vous de la redevabilité envers les populations ?', 'Opinion', 'Position en 1 phrase + STAR court du mécanisme de plaintes'],
        ['Que feriez-vous si un bailleur refusait votre rapport ?', 'Hypothétique', 'Méthode en 3 temps + « dans un cas comparable, j\'ai… »'],
        ['Comment gérez-vous la pression ?', 'Comportementale déguisée', 'STAR court : « Par exemple, en août 2026… »'],
        ['Quelle est votre plus grande faiblesse ?', 'Piège', 'Réponse préparée (Procédure 6)'],
      ],
    },
    result: "6 questions classées en moins de 3 minutes, sans hésitation. Faites le même exercice avec 6 questions que vous inventez à partir de votre offre.",
    pitfall: "Répondre à une question comportementale par une opinion (« je pense qu'il faut toujours… ») ou au conditionnel (« je commencerais par… ») : c'est la faute la plus lourde de la grille.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Cartographier le panel et confirmer le format',
    intro: "Pourquoi : le format décide de votre entraînement (visio ou présentiel, langue, nombre d'évaluateurs, durée). Entrées : la convocation, le site de l'organisation, les profils professionnels publics des évaluateurs.",
    steps: [
      {
        title: 'Extraire les faits de la convocation',
        actions: [
          'Notez : date, heure, fuseau horaire, durée, plateforme, langue, composition du panel, documents à fournir.',
          'Convertissez l\'heure dans votre fuseau si l\'organisation est ailleurs.',
        ],
      },
      {
        title: 'Rechercher chaque évaluateur',
        actions: [
          "Cherchez sur le site de l'organisation et sur les profils publics la fonction et le parcours de chaque évaluateur.",
          'Notez pour chacun ce qu\'il regardera probablement : le responsable hiérarchique les résultats, la RH la cohérence, le pair technique la rigueur.',
        ],
      },
      {
        title: 'Confirmer par courriel',
        actions: [
          'Écrivez 3 lignes à l\'assistante RH pour confirmer le format, la langue et les documents.',
          'Ne demandez jamais les questions à l\'avance.',
        ],
      },
    ],
    example: {
      title: 'Fiche format de Joël et courriel de confirmation',
      lines: [
        'ISKI — lundi 18/01/2027, 10 h (Bukavu = Goma, même fuseau), visioconférence, 60 minutes, panel de 3 : Mme Mbuyi, M. Lemaire, Dr Said.',
        "Langue : français ; une question peut être posée en anglais (précisé par la RH). Documents : aucun, CV et lettre déjà transmis.",
        'Courriel : « Madame, merci pour votre convocation. Je confirme ma présence lundi 18 janvier à 10 h en visioconférence. Pourriez-vous me confirmer la plateforme, la durée prévue et la langue de l\'entretien ? Cordialement, Joël Kabeya. »',
      ],
    },
    result: "Une fiche d'une demi-page : conditions de l'entretien, 3 évaluateurs et leur centre d'intérêt, et les 3 conditions à reproduire en simulation (visio, durée de 60 minutes, une question en anglais).",
    tip: "Entraînez-vous dans les conditions exactes du jour J : même plateforme, même pièce, même tenue, même heure. Ce que le cerveau a déjà vécu l'inquiète moins.",
  },

  // ─────────── PROCÉDURE 2 — BANQUE D'HISTOIRES STAR (8 étapes) ───────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 8',
    title: 'Ouvrir le classeur et repérer chaque colonne',
    intro: "La banque est le document central de votre préparation. Le classeur « banque-histoires-star-preparation.xlsx » contient 2 onglets : « Banque histoires STAR » (là où vous écrivez) et « Synthèse couverture » (calculée). Vous le complétez progressivement, pas en une seule session.",
    steps: [
      {
        title: 'Enregistrer votre copie',
        actions: [
          'Ouvrez le fichier depuis le dossier 04-templates du module.',
          "Faites Fichier > Enregistrer sous, puis nommez-le « NOM_Prenom_banque-STAR_AAAA-MM-JJ.xlsx » dans un dossier dédié à l'entretien.",
          "Ne travaillez jamais dans l'original : il resservira pour la prochaine candidature.",
        ],
      },
      {
        title: "Repérer l'onglet « Banque histoires STAR »",
        actions: [
          'Lignes 1 à 3 : titre et consigne, cellules fusionnées — n\'y écrivez pas.',
          'Ligne 4 : en-têtes A Compétence, B Situation, C Tâche, D Action, E Résultat (chiffré / observable), F Complétude de la ligne.',
          'Ligne 5 : « EXEMPLE — Gestion de conflit », rempli — gardez-le comme modèle. Lignes 6 à 13 : les 8 compétences déjà écrites en colonne A.',
        ],
      },
      {
        title: "Repérer l'onglet « Synthèse couverture »",
        actions: [
          'Colonnes : A Compétence cible, B Histoire préparée ? (nombre d\'histoires « OK »), C Statut (« Prête » ou « A préparer »).',
          'B14 : total des compétences couvertes ; B15 : compétences encore à préparer. Ne modifiez aucune de ces formules.',
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Contenu', 'Qui la remplit'],
      rows: [
        ['A — Compétence', 'Intitulé de la compétence testée', 'Pré-remplie (ne pas renommer)'],
        ['B — Situation', 'Quand, où, quel enjeu', 'Vous'],
        ['C — Tâche', 'Votre rôle et votre objectif', 'Vous'],
        ['D — Action', 'Ce que vous avez fait, étape par étape', 'Vous'],
        ['E — Résultat (chiffré / observable)', 'Un chiffre, un % ou un fait observable', 'Vous'],
        ['F — Complétude de la ligne', 'Message automatique : champ manquant / résultat non chiffré / OK', 'Formule — ne pas toucher'],
      ],
    },
    result: "Votre copie est enregistrée et vous savez exactement ce que chaque colonne attend. Une ligne = une histoire.",
    pitfall: "Renommer la compétence en colonne A (« Leadership d'équipe » au lieu de « Leadership ») : la Synthèse cherche le nom exact et affichera « A préparer » alors que la ligne est prête.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 8',
    title: 'Associer une expérience réelle à chaque compétence',
    intro: "Pourquoi : vérifier que vous avez une expérience concrète pour chaque compétence avant de passer du temps à la rédiger. Entrées : l'onglet « Réalisations » de votre classeur du module 01, votre dossier de preuves, vos évaluations annuelles. Jour 1 à 2.",
    steps: [
      {
        title: 'Relire vos réalisations',
        actions: [
          "Ouvrez votre classeur du module 01, onglet « Réalisations », et repérez les lignes marquées « Oui » en colonne F.",
          'Pour chaque compétence de la banque, cherchez la réalisation qui la prouve le mieux.',
        ],
      },
      {
        title: 'Poser les 5 questions de la mine',
        actions: [
          'Quand et où cela s\'est-il passé ?',
          'Quel était l\'enjeu ou la contrainte ?',
          'Qu\'ai-je fait personnellement, moi et non l\'équipe ?',
          'Qu\'est-ce qui a changé grâce à moi : avant / après ?',
          'Quelle pièce ou quel témoin le prouve ?',
        ],
      },
      {
        title: 'Écrire une phrase brute par compétence',
        actions: [
          'Dans un brouillon, notez en une phrase l\'expérience la plus pertinente, sans la structurer.',
          "Vérifiez que vous n'utilisez pas la même anecdote pour deux compétences.",
          'Pour les 3 compétences indispensables, identifiez aussi une histoire de réserve (contexte différent) pour répondre à la relance.',
        ],
      },
    ],
    example: {
      title: 'Phrases brutes de Joël (brouillon)',
      lines: [
        'Leadership : prise en main de l\'équipe MEAL en 03/2024, rapports mensuels en retard — réserve : formation de 18 relais.',
        'Gestion de conflit : véhicules partagés avec la logistique, 09/2025.',
        'Résolution sous pression : 12 centres sans données à J-3 du rapport bailleur, 08/2026.',
        'Travail d\'équipe multiculturel : projet WASH, 3 bailleurs, 4 nationalités, 2022.',
        'Communication avec parties prenantes : lancement de la ligne verte, Division provinciale de la santé, 04/2025 — réserve : reporting à 3 bailleurs.',
        'Gestion du changement : passage du papier à Kobo, 18 relais, début 2020.',
        'Décision avec informations incomplètes : 9 % de doublons, coordinateur absent, 05/2025 — réserve : remplacement de 2 villages inaccessibles lors de la baseline.',
        'Échec assumé : erreur de dénominateur dans un rapport trimestriel, 06/2022.',
      ],
    },
    result: "8 phrases brutes, une par compétence, aucune histoire utilisée deux fois, une histoire de réserve identifiée pour chaque compétence indispensable.",
    pitfall: "Inventer ou emprunter une histoire pour boucher un trou : si vous n'avez aucun exemple pour une compétence, cherchez dans le bénévolat, la vie associative ou les études, ou laissez la ligne « A préparer » — un jury repère l'histoire fabriquée dès la première relance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 8',
    title: 'Rédiger la Situation (colonne B)',
    intro: "Une Situation fait 1 à 2 phrases : c'est le piège numéro un des candidats non préparés que d'y passer une minute. Elle doit répondre, pour un auditeur qui ne connaît ni votre organisation ni votre pays, à trois questions : quand, où, quel enjeu.",
    steps: [
      {
        title: 'Appliquer la formule',
        actions: [
          'Écrivez : quand (mois et année) + où (type d\'organisation ou de projet) + enjeu ou contrainte chiffrés.',
          'Visez 25 à 40 mots : environ 15 secondes à l\'oral.',
        ],
      },
      {
        title: 'Supprimer le décor inutile',
        actions: [
          "Retirez l'historique de l'organisation, les noms de personnes et les détails techniques que le jury n'utilisera pas pour noter.",
          'Gardez un chiffre qui donne l\'échelle : budget, équipe, nombre de sites.',
        ],
      },
      {
        title: 'Saisir dans le classeur',
        actions: [
          'Cliquez sur la cellule B de la ligne de la compétence (par exemple B6 pour Leadership) et saisissez la Situation.',
          'Une seule cellule, sans retour à la ligne : ne mélangez pas Situation et Tâche dans la même case.',
        ],
      },
    ],
    example: {
      title: 'Situation « Leadership » de Joël — avant / après',
      lines: [
        "AVANT (52 mots, 25 secondes) : « Alliance Santé Grands Lacs est une ONG internationale qui intervient dans l'est du pays depuis de nombreuses années, avec plusieurs bailleurs, et j'y suis arrivé en tant que superviseur après un recrutement en interne. »",
        "APRÈS (34 mots, 15 secondes) : « Mars 2024 : je prends la supervision d'une équipe MEAL de 6 personnes sur un programme santé-nutrition de 4,6 M USD en 3 provinces ; les rapports mensuels arrivent avec 12 jours de retard en moyenne. »",
        'Cellule B6 = la version APRÈS.',
      ],
    },
    result: "Test de contrôle : un auditeur sans contexte sait dire quand, où et quel était l'enjeu — et la phrase se lit en 15 secondes environ.",
    tip: "Terminez la Situation sur l'enjeu (ici : 12 jours de retard). Le jury comprend alors immédiatement pourquoi la suite compte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 8',
    title: 'Rédiger la Tâche (colonne C)',
    intro: "La Tâche est votre rôle exact et l'objectif ou la responsabilité spécifique qui était la vôtre — pas celle de votre équipe ni de votre organisation en général. C'est ce qui permet au jury de savoir qui a fait quoi.",
    steps: [
      {
        title: 'Nommer votre rôle dans cette situation',
        actions: [
          'Écrivez votre intitulé ou votre position réelle à ce moment-là : « Superviseur nouvellement nommé », « Chargé de suivi-évaluation », « Responsable du calendrier d\'enquête ».',
        ],
      },
      {
        title: "Formuler l'objectif",
        actions: [
          'Utilisez « il m\'appartenait de… » ou « ma responsabilité était de… » suivi d\'un verbe d\'action et du résultat attendu.',
          'Ajoutez la contrainte qui donne de la valeur à l\'action : délai, absence de ressources, pas d\'autorité hiérarchique.',
        ],
      },
      {
        title: 'Faire le test du « nous »',
        actions: [
          'Relisez : pouvez-vous remplacer « je » par « nous » sans changer le sens ? Si oui, la tâche décrit l\'équipe, pas vous.',
          'Visez 15 à 25 mots, soit 10 à 15 secondes.',
          'Saisissez le texte en colonne C de la ligne.',
        ],
      },
    ],
    example: {
      title: 'Tâche de Joël — avant / après et exemples',
      lines: [
        "AVANT : « L'équipe devait fiabiliser les rapports mensuels. »",
        "APRÈS (C6) : « Superviseur nouvellement nommé, il m'appartenait de ramener les rapports mensuels dans les délais sans recruter ni modifier la composition de l'équipe. »",
        "C7 (Gestion de conflit) : « Responsable du calendrier d'enquête, je devais obtenir un accord en 48 h sans faire arbitrer la direction ni sacrifier une livraison de médicaments. »",
        "C12 (Décision) : « Je devais décider seul, avant le lendemain matin, de poursuivre ou de suspendre la collecte. »",
      ],
    },
    result: "On comprend en une phrase quel était VOTRE rôle et ce que vous deviez obtenir, avec une contrainte réelle.",
    pitfall: "Écrire la mission de l'organisation (« ASGL vise à améliorer la santé des populations ») : ce n'est pas votre tâche.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 8',
    title: "Rédiger l'Action (colonne D) : le cœur de la réponse",
    intro: "L'Action est ce que vous avez fait, personnellement, étape par étape. Elle occupe 60 à 70 % du temps de parole, soit 70 à 85 secondes d'une réponse de 2 minutes : c'est ici que le jury évalue votre raisonnement, vos choix et votre capacité à agir sous contrainte.",
    steps: [
      {
        title: 'Lister 3 à 5 actions personnelles',
        actions: [
          'Écrivez-les dans l\'ordre chronologique, chacune avec un verbe d\'action à la première personne : « j\'ai reçu », « j\'ai cartographié », « j\'ai fixé », « j\'ai instauré », « j\'ai délégué ».',
          'Ajoutez à chaque action un mot sur la méthode ou le critère : pourquoi celle-là et pas une autre.',
        ],
      },
      {
        title: 'Chasser le « nous » et le « on »',
        actions: [
          'Barrez tout « nous » ou « on » qui masque votre geste.',
          'Gardez « nous » pour une décision réellement collective, en précisant « j\'ai proposé, nous avons validé ».',
        ],
      },
      {
        title: 'Dimensionner et saisir',
        actions: [
          'Visez 40 à 80 mots dans la cellule : en style télégraphique, vous les développerez à l\'oral en 70 à 85 secondes.',
          'Saisissez le texte en colonne D, actions séparées par des points-virgules.',
        ],
      },
    ],
    example: {
      title: 'Action « Leadership » de Joël — avant / après',
      lines: [
        "AVANT : « On a mis en place des réunions et des procédures, et ça a amélioré les choses. »",
        "APRÈS (D6) : « J'ai reçu chaque membre 30 minutes en entretien individuel ; cartographié les 4 étapes de la chaîne de données ; fixé un calendrier de collecte du 1er au 20 du mois ; instauré un point d'équipe de 30 minutes chaque lundi ; délégué la validation de chaque province à un enquêteur référent. »",
        'Contrôle : 5 verbes à la première personne, 0 « on », 0 « nous ».',
      ],
    },
    result: "Lue à voix haute, la cellule D contient au moins 3 verbes d'action à la première personne, dans l'ordre, et aucun « on » non justifié.",
    pitfall: "Raconter le mérite de l'équipe : le jury demande explicitement « qu'avez-vous fait, vous ? ». Une réponse qui reste au « nous » du début à la fin ne permet pas d'évaluer votre contribution, même si le résultat collectif était excellent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 8',
    title: 'Rédiger le Résultat (colonne E) et lire la colonne F',
    intro: "Le Résultat est l'issue mesurable de votre action. Sans chiffre ni fait observable, ce n'est pas une histoire STAR. La formule de contrôle de la colonne F vous signale automatiquement toute ligne où le Résultat n'est pas chiffré : ne l'ignorez pas, c'est l'erreur qui coûte le plus de points en entretien réel.",
    steps: [
      {
        title: 'Choisir le type de résultat',
        actions: [
          'Parcourez les 5 types : volume, délai, taux, argent, fait observable.',
          'Prenez le plus parlant et, si possible, un deuxième qui le confirme.',
        ],
      },
      {
        title: 'Calculer correctement',
        actions: [
          'Variation en % = (valeur avant − valeur après) ÷ valeur avant × 100.',
          'Quand un taux passe d\'un pourcentage à un autre, exprimez l\'écart en points de pourcentage : de 14 % à 5 %, c\'est 9 points.',
          'Arrondissez à la baisse et gardez la pièce qui prouve le chiffre.',
        ],
      },
      {
        title: 'Rédiger puis lire la colonne F',
        actions: [
          'Saisissez 1 à 2 phrases en colonne E : chiffre + effet + durabilité ou apprentissage.',
          "Lisez la colonne F : « OK — prête pour l'entretien », « A COMPLETER — résultat non chiffré » ou « Incomplète — champ manquant ».",
          'Corrigez jusqu\'à lire « OK — prête pour l\'entretien ».',
        ],
      },
    ],
    example: {
      title: 'Résultat de Joël, ligne par ligne',
      lines: [
        "PREMIÈRE VERSION (E7) : « Au final tout s'est bien passé et on a gardé de bonnes relations. » → F7 = A COMPLETER — résultat non chiffré.",
        "VERSION FINALE (E7) : « Enquête terminée le 28/09, 11 centres sur 11 couverts ; 0 livraison retardée ; le calendrier commun des véhicules est reconduit chaque mois depuis plus d'un an. » → F7 = OK — prête pour l'entretien.",
        "E6 (Leadership) : « Sur les 30 premiers mois, 30 rapports mensuels sur 30 livrés à la date prévue ; retard moyen ramené de 12 jours à 0 ; aucun départ dans l'équipe. »",
        'Calcul : retard de 12 jours à 0 = baisse de 100 % ; erreurs de 14 % à 5 % = baisse de 9 points.',
      ],
    },
    result: "Chaque ligne affiche « OK — prête pour l'entretien » en colonne F, et chaque chiffre est celui d'un effet de votre action, pas d'un contexte.",
    pitfall: "La formule se contente de chercher un chiffre (0 à 9) dans la colonne E : « Une équipe de 3 collègues, ça s'est bien passé » passerait en « OK ». Le vrai contrôle reste le vôtre : le chiffre doit mesurer ce que votre action a produit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 8',
    title: 'Compléter les 8 lignes dans le bon ordre',
    intro: "Rédiger les 8 histoires est un travail de 3 jours, pas d'une soirée. Le guide l'impose : pour chaque ligne, remplissez les quatre colonnes séparément, vérifiez le Résultat, puis passez à la suivante. Entrées : vos phrases brutes et les procédures des étapes 3 à 6.",
    steps: [
      {
        title: 'Appliquer la boucle ligne par ligne',
        actions: [
          'Pour chaque ligne : B (Situation), C (Tâche), D (Action), E (Résultat), puis lecture de F.',
          'Ne passez à la ligne suivante qu\'une fois F à « OK — prête pour l\'entretien ».',
        ],
      },
      {
        title: "Respecter l'ordre de priorité",
        actions: [
          'Rédigez d\'abord les compétences indispensables, ensuite les probables, enfin l\'échec assumé.',
          'Chronométrez 25 à 40 minutes par histoire : au-delà, vous écrivez un roman.',
        ],
      },
      {
        title: 'Lire chaque ligne à voix haute',
        actions: [
          'Lisez la ligne complète en 2 minutes maximum avec un minuteur.',
          'Si elle dépasse, coupez d\'abord la Situation, puis les actions secondaires.',
        ],
      },
    ],
    table: {
      columns: ['Jour', 'Lignes rédigées par Joël', 'Durée', 'État de la colonne F'],
      rows: [
        ['mar. 12/01', '6 Leadership ; 10 Communication parties prenantes ; 12 Décision', '2 h', '3 lignes « OK »'],
        ['mer. 13/01', '8 Résolution sous pression ; 7 Gestion de conflit ; 9 Travail d\'équipe multiculturel', '2 h', '5 lignes « OK » ; la ligne 9 affiche « A COMPLETER — résultat non chiffré »'],
        ['jeu. 14/01 (midi)', '11 Gestion du changement ; 13 Échec assumé ; correction de la ligne 9', '1 h', '8 lignes « OK »'],
      ],
    },
    result: "Les 8 lignes sont complètes et lisibles à voix haute en moins de 2 minutes chacune. Le contenu complet figure dans le cas résolu en fin de module.",
    tip: "Écrivez les chiffres en chiffres (« 6 »), pas en lettres (« six ») : c'est ce que la formule cherche, et c'est ce que l'œil du jury retient.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 8 sur 8',
    title: "Lire la « Synthèse couverture » et adapter la liste à votre poste",
    intro: "L'onglet « Synthèse couverture » vous montre en un coup d'œil quelles compétences n'ont encore aucune histoire prête. Il se calcule seul à partir de la colonne F de la banque. Objectif de la source : au moins 5 histoires complètes ; objectif de ce module : toutes les compétences indispensables couvertes.",
    steps: [
      {
        title: 'Lire les colonnes B et C',
        actions: [
          'Ouvrez l\'onglet « Synthèse couverture ».',
          'Colonne B : nombre d\'histoires « OK » par compétence ; colonne C : « Prête » si B ≥ 1, sinon « A préparer ».',
          'B14 = compétences couvertes ; B15 = compétences à préparer.',
        ],
      },
      {
        title: 'Corriger chaque « A préparer »',
        actions: [
          'Retournez dans l\'onglet « Banque histoires STAR », ouvrez la ligne concernée et lisez le message de la colonne F.',
          'Complétez le champ manquant ou chiffrez le Résultat.',
          "Vérifiez que le nom en colonne A est identique à celui de la Synthèse.",
        ],
      },
      {
        title: 'Ajouter une compétence propre à votre poste (si nécessaire)',
        actions: [
          'Banque : écrivez la nouvelle compétence en A14 et copiez la formule de F13 vers F14.',
          'Synthèse : écrivez-la en A13, copiez B12:C12 vers B13:C13.',
          'Dans B5:B13 de la Synthèse, remplacez $A$13 par $A$14 et $F$13 par $F$14 (Ctrl+H) ; dans B14 et B15, étendez C5:C12 à C5:C13.',
        ],
      },
    ],
    table: {
      columns: ['Moment', 'B14 (couvertes)', 'B15 (à préparer)', 'Lecture'],
      rows: [
        ['Mercredi 13/01, 21 h', '5', '3', 'Gestion de conflit prête ; Travail d\'équipe multiculturel non chiffré ; Gestion du changement et Échec non écrits'],
        ['Jeudi 14/01, 13 h', '8', '0', 'Les 8 compétences affichent « Prête »'],
      ],
    },
    result: "Joël lit B14 = 8 et B15 = 0 : toutes les compétences du panel ISKI sont couvertes par une histoire chiffrée. Il n'a pas besoin d'ajouter de ligne : l'offre ne contient aucune compétence hors liste.",
    pitfall: "Considérer « Prête » comme « maîtrisée » : le statut dit seulement que la ligne est complète et chiffrée. Elle devient maîtrisée après les simulations des Procédures 3 à 5.",
  },

  // ─────────── PROCÉDURE 3 — SIMULATION CHRONOMÉTRÉE ET ENREGISTRÉE (5 étapes) ───────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: "Installer le dispositif d'enregistrement",
    intro: "Pourquoi : s'écouter ou se revoir répondre révèle des défauts invisibles à l'oral en direct — tics de langage, débit trop rapide sous stress, regard qui fuit, réponse qui s'étire sans arriver au Résultat. Entrées : un smartphone, un endroit calme, un minuteur. Durée : 15 minutes, une seule fois.",
    steps: [
      {
        title: 'Choisir le support et le cadrage',
        actions: [
          'Utilisez la vidéo du smartphone en mode paysage : elle capte à la fois la voix, le regard et la posture. À défaut, l\'audio seul reste préférable à rien.',
          'Posez le téléphone à hauteur des yeux, à environ un mètre, sur une pile de dossiers ; cadrez la tête, les épaules et les mains.',
          'Placez la lumière de face (fenêtre devant vous), jamais dans le dos.',
        ],
      },
      {
        title: 'Soigner le son et le temps',
        actions: [
          'Choisissez une pièce silencieuse et passez le téléphone en mode avion pour éviter les notifications.',
          'Posez un minuteur visible hors du cadre (montre, second téléphone) : vous lancerez le chrono à la première parole.',
        ],
      },
      {
        title: 'Reproduire les conditions réelles',
        actions: [
          'Si l\'entretien est en visio, utilisez la même plateforme, le même ordinateur, la même pièce et la même tenue.',
          "Faites un test de 10 secondes : parlez, arrêtez, réécoutez. Vérifiez que la voix est claire et le visage éclairé.",
          'Demandez l\'accord de votre partenaire avant de l\'enregistrer et supprimez le fichier après analyse.',
        ],
      },
    ],
    example: {
      title: 'Installation de Joël à Goma (jeudi 14/01, 18 h)',
      lines: [
        'Smartphone sur une pile de classeurs, à hauteur des yeux, paysage ; fenêtre face à lui, rideau ouvert.',
        "Coupures d'électricité fréquentes à Goma : batterie du téléphone et de l'ordinateur chargées, modem 4G de secours branché.",
        'Chrono visible sur la montre posée à gauche de l\'écran ; téléphone en mode avion.',
        'Test de 10 secondes écouté : voix claire, visage éclairé, rien à corriger.',
      ],
    },
    result: "Un fichier de test de 10 secondes, vérifié, et un dispositif que vous pouvez relancer en moins de 2 minutes avant chaque simulation.",
    pitfall: "Se préparer uniquement mentalement : une histoire claire dans votre tête devient souvent hésitante, trop longue ou décousue à l'oral la première fois qu'elle sort. Se filmer seul reste largement préférable à s'entraîner en silence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Préparer la version orale : ancres et transitions, pas un texte à réciter',
    intro: "Pourquoi : le texte de la banque est écrit pour l'œil. À l'oral, vous devez raconter, pas réciter : une phrase apprise par cœur se perd au premier trou et s'entend. Entrée : les 8 lignes complétées de la banque. Durée : 30 minutes.",
    steps: [
      {
        title: 'Extraire 4 ancres par histoire',
        actions: [
          'S : la date et le lieu. T : « mon rôle » et l\'objectif. A : les 3 à 5 verbes d\'action, dans l\'ordre. R : le chiffre clé et l\'apprentissage.',
          'Écrivez ces ancres sur une fiche par histoire, 20 mots maximum.',
        ],
      },
      {
        title: 'Préparer les transitions',
        actions: [
          'Annoncez chaque lettre par une phrase courte : « Le contexte : … », « Mon rôle : … », « J\'ai d\'abord…, ensuite…, enfin… », « Le résultat : … ».',
          'Ces transitions aident le jury à ranger votre réponse dans sa grille.',
        ],
      },
      {
        title: 'S\'entraîner en trois passes',
        actions: [
          'Passe 1 : racontez en lisant la cellule de la banque.',
          'Passe 2 : racontez avec la fiche d\'ancres seulement.',
          'Passe 3 : racontez sans rien, en retenant uniquement les 3 chiffres clés.',
        ],
      },
    ],
    example: {
      title: 'Fiche d\'ancres de Joël — Gestion de conflit (ligne 7)',
      lines: [
        'S : sept. 2025 — 2 véhicules, 11 centres, échéance bailleur 30/09.',
        'T : responsable du calendrier d\'enquête — accord en 48 h.',
        'A : 30 min le jour même → contraintes avec dates → 6 centres sur 11 sur l\'axe de ses livraisons → je propose de coupler → calendrier d\'1 page validé.',
        'R : 11 sur 11, 0 livraison retardée, calendrier mensuel depuis plus d\'un an.',
      ],
    },
    result: "8 fiches de 4 ancres chacune ; vous pouvez raconter chaque histoire en 2 minutes sans lire, et vous savez ses 3 chiffres par cœur.",
    pitfall: "Apprendre mot à mot : si le jury vous interrompt par une relance, vous perdez le fil. Retenez les ancres et les chiffres, pas les phrases. À l'entretien, ne comptez pas sur des notes : vérifiez avec l'organisation ce qui est toléré en visio, et ne lisez jamais.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Préparer les questions et le tirage au sort',
    intro: "Pourquoi : la simulation doit reproduire la surprise réelle d'un jury. Le partenaire pose des questions sans vous dire à quelle compétence elles correspondent ; si vous êtes seul, vous piochez une compétence au hasard et formulez la question autrement que dans votre tête.",
    steps: [
      {
        title: 'Écrire une carte par compétence',
        actions: [
          'Écrivez sur 8 cartes (ou 8 lignes numérotées) une question par compétence, avec une formulation différente de celle de votre tête (voir tableau).',
          'Gardez la liste des compétences cachée : seul le partenaire la connaît.',
        ],
      },
      {
        title: 'Tirer 3 questions',
        actions: [
          'Faites tirer 3 cartes dans un ordre inconnu ; seul, lancez un dé ou piochez à l\'aveugle.',
          'Pour la simulation 1, incluez au moins une compétence indispensable.',
        ],
      },
      {
        title: 'Prévoir relances et silence',
        actions: [
          'Demandez au partenaire de poser, à une des questions, la relance : « Pouvez-vous me donner un autre exemple, dans un contexte différent ? ».',
          'Demandez-lui de se taire 5 secondes après votre dernière réponse.',
        ],
      },
    ],
    table: {
      columns: ['Compétence', 'Formulation de la question (partenaire)', 'Variante'],
      rows: [
        ['Leadership', 'Parlez-moi d\'une fois où vous avez dû remettre une équipe en mouvement.', 'Comment avez-vous pris la tête d\'une équipe dont vous ne connaissiez pas les membres ?'],
        ['Gestion de conflit', 'Décrivez une situation où vous avez dû gérer un désaccord avec un collègue.', 'Racontez un moment où vous et un partenaire ne vouliez pas la même chose.'],
        ['Résolution de problème sous pression', 'Quel est le plus gros problème que vous avez dû résoudre à quelques jours d\'une échéance ?', 'Racontez une fois où tout a dérapé juste avant une livraison.'],
        ['Travail d\'équipe multiculturel', 'Donnez un exemple de travail avec des collègues de cultures différentes.', 'Comment avez-vous fait travailler ensemble des personnes aux habitudes opposées ?'],
        ['Communication avec parties prenantes', 'Décrivez comment vous avez obtenu l\'adhésion d\'un acteur réticent.', 'Racontez une fois où vous avez dû convaincre un bailleur ou une autorité.'],
        ['Gestion du changement / adaptabilité', 'Racontez un changement important dans votre travail et comment vous vous y êtes adapté.', 'Quand avez-vous dû apprendre un nouvel outil dans un délai court ?'],
        ['Prise de décision avec informations incomplètes', 'Décrivez une décision difficile prise sans toutes les informations.', 'Racontez une fois où vous avez dû trancher sans votre supérieur.'],
        ['Échec assumé / apprentissage', 'Parlez-moi d\'un échec professionnel et de ce que vous en avez tiré.', 'Quelle est l\'erreur qui vous a le plus appris ?'],
      ],
    },
    result: "Un jeu de 8 cartes, un tirage de 3 questions inconnues de vous, une relance et un silence prévus.",
    tip: "Notez la compétence au dos de chaque carte : le partenaire s'en servira pour remplir la section 2 de la grille avec vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Mener la simulation chronométrée et enregistrée',
    intro: "Pourquoi : c'est l'étape qui transforme une histoire écrite en une prestation. Respectez le déroulé d'un vrai panel : accueil, question d'ouverture, 3 questions comportementales, vos questions. Durée : 20 minutes. Entrées : cartes, minuteur, enregistrement prêt.",
    steps: [
      {
        title: 'Briefer le partenaire (2 minutes)',
        actions: [
          'Demandez-lui de lire les questions telles qu\'écrites, de ne pas vous aider et de rester neutre, en prenant des notes comme un évaluateur.',
          'Convenez qu\'il chronomètre aussi, pour comparer avec votre propre mesure.',
        ],
      },
      {
        title: 'Dérouler',
        actions: [
          'Lancez l\'enregistrement, puis la question d\'ouverture : « Présentez-vous brièvement ».',
          'Enchaînez les 3 questions tirées, avec une relance sur l\'une d\'elles.',
          'Terminez par « Avez-vous des questions pour nous ? », puis laissez 5 secondes de silence.',
        ],
      },
      {
        title: 'Tenir le cadre',
        actions: [
          'Lancez le chrono à la première parole, arrêtez-le au dernier mot et notez la durée de chaque réponse.',
          'N\'interrompez jamais une réponse ratée pour la recommencer : en réel, il n\'y a pas de seconde chance. Entraînez-vous à vous rattraper.',
          'Fermez la banque : vous n\'avez qu\'une feuille blanche et un stylo.',
        ],
      },
    ],
    example: {
      title: 'Simulation 1 de Joël — jeudi 14/01/2027, 18 h 30 à 18 h 50, avec Chantal Mwamba',
      lines: [
        '18 h 30 — consigne et lancement de l\'enregistrement ; 18 h 32 — présentation, 1 min 30 s.',
        'Q1 Gestion de conflit : 2 min 45 s, relance (autre exemple) 40 s. Q2 Décision avec informations incomplètes : 2 min 20 s.',
        'Q3 Échec assumé : 1 min 50 s. Total des réponses : 6 min 55 s (2 min 45 + 2 min 20 + 1 min 50).',
        '18 h 45 — questions de Joël au jury, 2 minutes ; silence de 5 secondes ; fin de l\'enregistrement à 18 h 50.',
      ],
    },
    result: "Un fichier vidéo de 15 à 20 minutes et la durée de chaque réponse. Dès la fin, passez à la grille d'auto-évaluation (Procédure 4) sans attendre.",
    pitfall: "Reporter l'analyse au lendemain : le souvenir précis de vos hésitations s'efface en quelques heures, alors que la grille doit être remplie pendant que la simulation est encore fraîche.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Répondre en panel : regard, relance, clarification',
    intro: "Pourquoi : en panel, plusieurs évaluateurs vous écoutent et notent en silence. Ce n'est pas un signe de désintérêt : c'est la grille qui se remplit. Il faut s'y préparer comme à un exercice, avec des gestes précis.",
    steps: [
      {
        title: 'Partager le regard',
        actions: [
          'En présentiel : regardez d\'abord la personne qui a posé la question, puis répartissez votre regard sur les autres évaluateurs.',
          'En visio : regardez la caméra, pas votre propre image ni l\'écran des évaluateurs.',
        ],
      },
      {
        title: 'Prendre le temps de répondre',
        actions: [
          'Prenez 5 secondes de silence avant de répondre, ou dites : « Puis-je prendre quelques secondes pour choisir un exemple ? ».',
          'Si la question est ambiguë, clarifiez : « Souhaitez-vous un exemple de terrain ou de coordination ? ».',
        ],
      },
      {
        title: 'Gérer la relance',
        actions: [
          'Quand le jury demande « un autre exemple, dans un contexte différent », sortez l\'histoire de réserve de la compétence.',
          'Ne racontez jamais deux fois la même histoire sous deux compétences.',
        ],
      },
      {
        title: 'Conclure proprement',
        actions: [
          'Arrêtez-vous quand le Résultat est dit. Ajoutez, si le temps le permet : « Souhaitez-vous plus de détails sur un point ? ».',
        ],
      },
    ],
    table: {
      columns: ['Compétence indispensable', 'Histoire principale', 'Histoire de réserve (relance)'],
      rows: [
        ['Leadership', 'Prise en main de l\'équipe MEAL, 6 personnes (ASGL, 2024)', 'Formation de 18 relais communautaires (ACK, 2020)'],
        ['Communication avec parties prenantes', 'Lancement de la ligne verte avec la Division provinciale (2025)', 'Reporting harmonisé pour 3 bailleurs (HSI, 2022)'],
        ['Prise de décision avec informations incomplètes', '9 % de doublons, coordinateur absent (mai 2025)', 'Remplacement de 2 villages inaccessibles pendant la baseline (HSI, 2021)'],
      ],
    },
    result: "Pour chaque compétence indispensable, une histoire principale et une histoire de réserve dans un contexte différent, listées sur la fiche d'ancres.",
    pitfall: "Recaser une histoire préparée sur une question qui teste une autre compétence, parce qu'elle est bien préparée : un jury entraîné le repère immédiatement et le perçoit comme un manque d'écoute ou une esquive.",
  },

  // ─────────── PROCÉDURE 4 — GRILLE D'AUTO-ÉVALUATION (5 étapes) ───────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Ouvrir la grille et remplir les sections 1 et 2',
    intro: "La grille « grille-auto-evaluation-simulation-entretien.docx » est le support à remplir juste après chaque simulation, pendant que le souvenir est encore précis. Elle structure votre auto-critique au lieu de vous laisser sur une impression vague. Une copie par simulation.",
    steps: [
      {
        title: 'Enregistrer une copie par simulation',
        actions: [
          'Ouvrez le fichier, puis Fichier > Enregistrer sous : « NOM_grille-simulation-01_AAAA-MM-JJ.docx ».',
          'Pour la simulation suivante, repartez de l\'original et nommez la copie « -02 », « -03 ».',
        ],
      },
      {
        title: '1. Identification de la simulation',
        actions: [
          'Date de la simulation ; Numéro de la simulation (1ère, 2ème…).',
          'Poste visé ; Partenaire de simulation (ou seul face caméra).',
        ],
      },
      {
        title: '2. Questions posées pendant la simulation',
        actions: [
          'Question 1, 2 et 3 et compétence visée : recopiez la question telle qu\'elle a été posée, puis la compétence entre parenthèses (utilisez les mêmes intitulés que la banque).',
          'Ne notez rien encore dans la section 3 : réécoutez ou revisionnez d\'abord l\'enregistrement.',
        ],
      },
    ],
    example: {
      title: 'Sections 1 et 2 de la grille n° 1 de Joël',
      lines: [
        'Date : 14/01/2027 — Numéro : 1ère — Poste visé : Responsable MEAL, ISKI Bukavu — Partenaire : Chantal Mwamba.',
        'Question 1 : « Décrivez une situation où vous avez dû gérer un désaccord avec un collègue. » (Gestion de conflit)',
        'Question 2 : « Décrivez une décision difficile prise sans toutes les informations. » (Prise de décision avec informations incomplètes)',
        'Question 3 : « Parlez-moi d\'un échec professionnel et de ce que vous en avez tiré. » (Échec assumé / apprentissage)',
      ],
    },
    result: "Une grille enregistrée, nommée et datée, avec l'identification et les 3 questions renseignées ; la section 3 est encore vide.",
    tip: "Gardez l'ordre des 3 questions exactement tel qu'il a été posé : il vous servira à retrouver le moment dans l'enregistrement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: "Revoir l'enregistrement en trois passes et mesurer",
    intro: "Pourquoi : on ne note pas une prestation à l'impression. On la mesure. Trois passes séparées révèlent trois familles de défauts : l'image (regard, posture), le son (tics, débit) et la structure (temps par lettre, « je » ou « nous »). Durée : 25 minutes pour 3 réponses.",
    steps: [
      {
        title: 'Passe 1 — image seule (son coupé)',
        actions: [
          'Repérez les fuites de regard de plus de 3 secondes, les mains qui bougent sans raison, les mouvements parasites.',
        ],
      },
      {
        title: 'Passe 2 — son seul (écran masqué)',
        actions: [
          'Faites un trait au crayon à chaque tic (« du coup », « en fait », « voilà »), une colonne par tic.',
          'Repérez les silences, le débit trop rapide, l\'intonation monotone.',
        ],
      },
      {
        title: 'Passe 3 — structure avec chrono',
        actions: [
          'Notez l\'heure où commence chaque lettre S, T, A, R et calculez les durées.',
          'Comptez « je » et « nous » dans la partie Action.',
          'Transcrivez 1 minute pour compter les mots : débit = mots par minute.',
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Comment le mesurer', 'Repère de travail', 'Joël — simulation 1'],
      rows: [
        ['Durée de la réponse', 'Chrono, début à fin', '2 minutes maximum', '2 min 45 s / 2 min 20 s / 1 min 50 s'],
        ['Part de l\'Action', 'Durée de A ÷ durée totale × 100', '60 à 70 %', '51 % (Q1 : 85 s sur 165 s ; Situation 55 s)'],
        ['Tics par minute', 'Nombre de tics ÷ minutes de parole', '3 ou moins', '4,0 (28 tics en 6 min 55 s : 14 « du coup », 9 « en fait », 5 « voilà »)'],
        ['« Je » contre « nous »', 'Pointage dans la partie Action', '« je » devant « nous »', '6 « je » contre 11 « nous »'],
        ['Débit', 'Mots comptés sur 1 minute transcrite', '130 à 160 mots par minute', 'Environ 175 : trop rapide'],
      ],
    },
    result: "Un tableau de 5 indicateurs chiffrés pour chaque simulation. Les repères sont des seuils de travail personnels : ils servent à mesurer votre progression, pas à rendre un verdict.",
    pitfall: "Se juger sur sa voix ou son apparence à la première écoute : tout le monde déteste s'entendre. Jugez la structure, le Résultat et le temps ; la voix devient supportable à la deuxième écoute.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Noter les 5 critères de la section 3',
    intro: "La section 3 est une auto-évaluation notée : 1 = « à revoir entièrement », 5 = « prêt pour l'entretien réel ». Le tableau a 5 critères en lignes et les cases 1 à 5 en colonnes. Chaque note doit s'appuyer sur une mesure de l'étape précédente, pas sur une impression.",
    steps: [
      {
        title: 'Cocher une seule case par critère',
        actions: [
          'Pour chaque critère, remplacez le symbole ☐ de la colonne choisie par ☒ ou ajoutez une croix, sur une seule note.',
          'Appuyez-vous sur les mesures : durée, part de l\'Action, nombre de « je ».',
        ],
      },
      {
        title: 'Utiliser les repères d\'ancrage',
        actions: [
          'Comparez votre prestation aux repères du tableau pour les notes 1, 3 et 5.',
          'En cas d\'hésitation entre deux notes, retenez la plus basse.',
        ],
      },
      {
        title: 'Additionner',
        actions: [
          'Additionnez les 5 notes : total sur 25.',
          'Lecture de travail : 20 ou plus et aucun critère à 2 ou moins = prêt ; 15 à 19 = à retravailler ; moins de 15 = reprendre les histoires concernées.',
        ],
      },
    ],
    table: {
      columns: ['Critère de la grille', 'Note 1', 'Note 3', 'Note 5'],
      rows: [
        ['Structure STAR respectée (S, T, A, R identifiables)', 'Lettres mélangées, une ou plusieurs manquantes', 'Les 4 lettres sont là mais la Situation ou le Résultat est faible', 'Les 4 lettres nettes, Action à 60 à 70 %'],
        ['Résultat final chiffré ou clairement observable', 'Résultat absent ou « ça s\'est bien passé »', 'Résultat observable mais sans chiffre', 'Chiffre ou fait vérifiable, plus apprentissage'],
        ['Clarté et concision (réponse ≤ 2 minutes, sans digression)', 'Plus de 3 minutes', 'Entre 2 et 2 min 30 s ou une digression', '2 minutes ou moins, sans digression'],
        ['Confiance et débit de parole maîtrisés', 'Débit saccadé, tics en rafale, regard fuyant', 'Quelques tics ou un débit trop rapide par moments', 'Débit posé, voix stable, 3 tics par minute ou moins'],
        ['Action personnelle bien mise en avant (« j\'ai fait », pas seulement « nous »)', '« Nous » du début à la fin', '« Je » et « nous » à égalité', '« Je » dominant, rôle de chacun clair'],
      ],
    },
    example: {
      title: 'Notation de Joël, simulation 1 (total 13/25)',
      lines: [
        'Structure : 3 (les 4 lettres sont présentes, Situation de 55 s, Action à 51 %).',
        'Résultat : 2 (Q3, échec : « tout va mieux depuis » sans chiffre).',
        'Clarté et concision : 2 (Q1 à 2 min 45 s, avec une digression sur l\'historique de la logistique).',
        'Confiance et débit : 3 (175 mots par minute, 4 tics par minute). Action personnelle : 3 (6 « je » contre 11 « nous »).',
      ],
    },
    result: "5 cases cochées, 1 par critère, et un total sur 25 justifié par une mesure.",
    pitfall: "Noter l'intention (« je voulais dire le chiffre ») au lieu de ce qui a été entendu : le jury ne note que ce qui est sorti de votre bouche.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Remplir les sections 4 et 5 et le cartouche final',
    intro: "Les deux dernières sections transforment la mesure en plan d'action. Section 4 : tics de langage et points relevés à l'écoute. Section 5 : axes d'amélioration avant la prochaine simulation. Un cartouche final fixe qui remplit la grille et la date de la prochaine simulation. L'ensemble tient en 1 à 2 pages.",
    steps: [
      {
        title: '4. Tics de langage et points relevés',
        actions: [
          'Listez les tics répétés avec leur nombre (« du coup » ×14), les silences, le débit trop rapide, le regard fuyant.',
          'Notez le moment où la structure s\'est diluée (mm:ss de l\'enregistrement).',
        ],
      },
      {
        title: '5. Axes d\'amélioration avant la prochaine simulation',
        actions: [
          'Répondez aux deux questions de la grille : quelles histoires retravailler en priorité ? quel comportement corriger consciemment la prochaine fois ?',
          'Limitez-vous à 3 axes, chacun avec un test mesurable à la prochaine simulation.',
        ],
      },
      {
        title: 'Cartouche final',
        actions: [
          'Rempli par (nom) : votre nom.',
          'Date de la prochaine simulation prévue : écrivez-la et posez-la dans l\'agenda tout de suite.',
        ],
      },
    ],
    example: {
      title: 'Sections 4 et 5 de la grille n° 1 de Joël',
      lines: [
        'Section 4 : « du coup » ×14, « en fait » ×9, « voilà » ×5 (4 tics par minute) ; débit rapide sur Q2 ; Situation de Q1 trop longue (55 s) ; Résultat de Q3 sans chiffre.',
        'Section 5, axe 1 : réécrire le Résultat de l\'échec avec un chiffre (histoire 13) — test : un chiffre dit à voix haute en moins de 20 s.',
        'Axe 2 : ramener la Situation de Q1 à 15 s — test : Action à 60 % ou plus.',
        'Axe 3 : remplacer « nous » par « j\'ai » dans les actions — test : 10 « je » ou plus ; remplacer « du coup » par un silence de 1 s.',
        'Rempli par : Joël Kabeya — Prochaine simulation : vendredi 15/01/2027, 19 h.',
      ],
    },
    result: "Une grille de 1 à 2 pages dont chaque axe d'amélioration est vérifiable à la simulation suivante.",
    pitfall: "Écrire des axes vagues (« être plus confiant », « parler moins vite ») : sans test mesurable, vous ne saurez jamais si l'axe a été corrigé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Obtenir un retour détaillé de votre partenaire et le comparer au vôtre',
    intro: "Pourquoi : votre propre regard est biaisé. Un partenaire qui a noté la même simulation, sans voir vos notes, vous donne un deuxième point de vue. L'écart entre les deux révèle ce que vous ne voyez pas. Durée : 15 minutes.",
    steps: [
      {
        title: 'Faire noter indépendamment',
        actions: [
          'Donnez à votre partenaire une copie vierge de la grille, section 3 uniquement, à remplir juste après la simulation, avant de voir la vôtre.',
        ],
      },
      {
        title: 'Comparer critère par critère',
        actions: [
          'Alignez les 5 notes côte à côte.',
          'Pour tout écart de 2 points ou plus, revoyez ensemble le passage concerné dans l\'enregistrement.',
        ],
      },
      {
        title: 'Poser 3 questions',
        actions: [
          '« Quel chiffre as-tu retenu ? » : si le partenaire ne sait pas répéter le Résultat, il n\'a pas porté.',
          '« À quel moment as-tu décroché ? » : repérez le passage trop long ou trop flou.',
          '« Quel mot as-tu entendu trop souvent ? » : confirmez vos tics.',
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Joël', 'Chantal Mwamba', 'Écart'],
      rows: [
        ['Structure STAR', '3', '3', '0'],
        ['Résultat chiffré ou observable', '2', '2', '0'],
        ['Clarté et concision', '2', '2', '0'],
        ['Confiance et débit', '3', '2', '1'],
        ['Action personnelle', '3', '3', '0'],
        ['Total /25', '13', '12', '1'],
      ],
    },
    result: "Joël et Chantal se rejoignent à un point près : le diagnostic est fiable. Chantal ajoute : « Je n'ai retenu aucun chiffre de Q3, et j'ai décroché à la minute 2 de Q1 pendant l'historique de la logistique. »",
    tip: "Si les deux évaluations divergent d'au moins 2 points sur un critère, faites confiance à la plus basse jusqu'à preuve du contraire.",
  },

  // ─────────── PROCÉDURE 5 — CYCLES DE PROGRESSION (4 étapes) ───────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Prioriser les histoires les plus faibles',
    intro: "Ne répétez pas indéfiniment vos meilleures histoires par confort : concentrez les répétitions sur les compétences où l'auto-évaluation a révélé le plus de faiblesses. C'est un entraînement ciblé, pas un rabâchage uniforme. Entrées : colonne F, grille remplie, durées mesurées.",
    steps: [
      {
        title: 'Croiser trois sources',
        actions: [
          'Colonne F de la banque : lignes non « OK ».',
          'Grille de simulation : les critères notés 2 ou moins, et l\'histoire qui les a causés.',
          'Durées mesurées : toute réponse au-dessus de 2 minutes.',
        ],
      },
      {
        title: 'Classer du plus faible au plus fort',
        actions: [
          'Attribuez 1 point à chaque défaut relevé sur une histoire (Résultat vague, durée excessive, « nous », tics).',
          'Classez les histoires par nombre de points décroissant.',
        ],
      },
      {
        title: 'Réserver le temps',
        actions: [
          'Gardez les 3 plus faibles pour les prochaines simulations, avec au moins une compétence indispensable.',
          'Laissez de côté, sans les travailler davantage, les histoires sans défaut.',
        ],
      },
    ],
    table: {
      columns: ['Histoire', 'Défauts relevés (simulation 1)', 'Points', 'Priorité'],
      rows: [
        ['13 — Échec assumé', 'Résultat sans chiffre à l\'oral ; Action de 25 s seulement', '2', '1'],
        ['7 — Gestion de conflit', 'Durée de 2 min 45 s ; Situation de 55 s ; « nous » dominant', '3', '1'],
        ['12 — Décision', 'Durée de 2 min 20 s ; débit rapide', '2', '2'],
        ['6 — Leadership, 8 — Résolution, 10 — Communication', 'Aucune simulation encore : non évaluées', '—', '3 (simulation 2)'],
      ],
    },
    result: "Joël retient 3 histoires à retravailler vendredi : l'échec (13), le conflit (7) et la décision (12), et teste en plus Leadership et Communication à la simulation 2.",
    pitfall: "Ne retravailler que l'histoire qui s'est le mieux passée : elle rassure, mais ne vous fera pas gagner de points.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Corriger la cause, pas le symptôme',
    intro: "Pourquoi : le même symptôme peut avoir des causes différentes. Une réponse trop longue vient presque toujours d'une Situation qui s'étire ; corriger le débit n'y changera rien. Entrées : tableau des indicateurs et grille remplie.",
    steps: [
      {
        title: 'Identifier la cause',
        actions: [
          'Pour chaque symptôme relevé, cherchez la cause dans le tableau : où la réponse s\'est-elle étirée, où la structure s\'est-elle diluée ?',
        ],
      },
      {
        title: 'Corriger dans le classeur',
        actions: [
          'Retournez dans l\'onglet « Banque histoires STAR », modifiez la cellule concernée (B, C, D ou E) et relisez la colonne F.',
          'Mettez à jour la fiche d\'ancres correspondante.',
        ],
      },
      {
        title: 'Refaire passer le chrono',
        actions: [
          'Racontez à voix haute la version corrigée, chrono lancé, jusqu\'à tenir 2 minutes avec une Action à 60 % ou plus.',
        ],
      },
    ],
    table: {
      columns: ['Symptôme observé', 'Cause probable', 'Correction dans la banque', 'Correction à l\'oral'],
      rows: [
        ['Réponse de plus de 2 minutes', 'Situation trop longue ; actions secondaires', 'Réduire B à 25 à 40 mots ; garder 3 à 5 actions en D', 'Chrono de 15 s sur la Situation'],
        ['Résultat vague à l\'oral', 'Chiffre absent ou oublié', 'Chiffrer E ; relire F', 'Dire le chiffre en premier, puis l\'effet'],
        ['« Nous » dominant', 'Habitude de raconter le collectif', 'Réécrire D avec « j\'ai » ; préciser « j\'ai proposé, ils ont validé »', 'Pointer « je » et « nous » sur l\'enregistrement'],
        ['Tics en rafale', 'Réflexion à voix haute', '—', 'Remplacer le tic par un silence de 1 seconde'],
        ['Débit trop rapide', 'Stress, texte trop dense', 'Alléger D', 'Respirer à chaque transition de lettre'],
        ['Structure diluée', 'Lettres mélangées', 'Séparer B, C, D, E strictement', 'Annoncer chaque lettre par sa transition'],
      ],
    },
    example: {
      title: 'Corrections de Joël après la simulation 1',
      lines: [
        'Histoire 13 (échec) : E complété par « 82 % affiché au lieu de 71 % ; 6 rapports suivants sans erreur » ; l\'apprentissage tient en une phrase.',
        'Histoire 7 (conflit) : B ramené de 55 à 15 secondes en supprimant l\'historique de la logistique ; D récrit en « j\'ai » (10 « je »).',
        'Histoire 12 (décision) : D allégé de 3 actions secondaires ; la durée passe de 2 min 20 s à 2 minutes.',
      ],
    },
    result: "Chaque correction est faite dans le classeur et dans la fiche d'ancres, puis testée au chrono. La colonne F reste en « OK — prête pour l'entretien ».",
    tip: "Corrigez un défaut à la fois sur une même histoire : c'est la seule façon de voir lequel a produit l'amélioration.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Refaire les simulations 2 et 3 en durcissant les conditions',
    intro: "Le cycle simulation puis auto-évaluation se répète au moins 3 fois. À chaque tour, changez une condition pour que le jour J ne soit pas la première fois que vous répondez dans des conditions réelles. Entrées : cartes de questions, grille vierge, partenaire(s).",
    steps: [
      {
        title: 'Simulation 2 — questions nouvelles',
        actions: [
          'Tirez 3 nouvelles questions : 2 sur vos histoires les plus faibles, 1 sur une histoire non encore testée.',
          'Remplissez immédiatement une nouvelle copie de la grille (-02) selon la Procédure 4.',
        ],
      },
      {
        title: 'Simulation 3 — conditions réelles',
        actions: [
          'Faites-la au jour et à l\'heure de l\'entretien (même heure, même plateforme, tenue complète).',
          'Faites jouer le panel par 2 personnes qui ne connaissent pas vos histoires, et ajoutez une question en anglais si l\'entretien le prévoit.',
        ],
      },
      {
        title: 'Remplir le tableau de progression',
        actions: [
          'Reportez les 5 notes de chaque grille dans un tableau commun, avec les mesures clés.',
        ],
      },
    ],
    table: {
      columns: ['Critère', 'S1 jeu. 14/01', 'S2 ven. 15/01', 'S3 sam. 16/01, 10 h'],
      rows: [
        ['Structure STAR', '3', '4', '4'],
        ['Résultat chiffré ou observable', '2', '3', '4'],
        ['Clarté et concision', '2', '4', '4'],
        ['Confiance et débit', '3', '3', '4'],
        ['Action personnelle', '3', '3', '5'],
        ['Total /25', '13', '17', '21'],
        ['Mesures clés', 'Action 51 % ; 4 tics/min ; 6 « je » / 11 « nous »', 'Action 58 % ; 2,6 tics/min', 'Action 62 % ; 1,6 tic/min ; 14 « je » / 4 « nous » ; durée moyenne 2 min 05 s'],
      ],
    },
    result: "Le total progresse de 13 à 17 puis à 21 sur 25 en 3 jours, sans aucune nouvelle expérience : la différence vient uniquement de la structure, du chiffre et du temps maîtrisés. Simulation 3 avec Chantal Mwamba et Jean-Paul Mukendi, ancien MEAL Manager (mentor).",
    pitfall: "Faire la simulation 3 en conditions confortables : la différence entre une réponse dite devant un ami en pyjama et devant un écran à 10 h avec un panel est plus grande qu'on ne le croit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Décider quand arrêter : le critère de sortie',
    intro: "Pourquoi : on peut répéter indéfiniment. Il faut un critère de sortie objectif, fixé à l'avance, qui dit « c'est prêt », sinon l'anxiété décidera à votre place. Entrées : tableau de progression et Synthèse couverture.",
    steps: [
      {
        title: 'Poser le critère de sortie',
        actions: [
          'Dernier total de grille de 20 sur 25 ou plus.',
          'Aucun critère noté 2 ou moins.',
          'Les compétences indispensables : Résultat noté 4 ou plus.',
        ],
      },
      {
        title: 'Vérifier le classeur',
        actions: [
          'Onglet « Synthèse couverture » : B14 égal au nombre de compétences retenues, B15 égal à 0.',
        ],
      },
      {
        title: 'Si le critère n\'est pas atteint',
        actions: [
          'Faites une simulation de plus, uniquement sur l\'histoire en échec, plutôt que de tout reprendre.',
          'Veille d\'entretien : aucune nouvelle histoire à apprendre ; relisez seulement les fiches d\'ancres.',
        ],
      },
    ],
    table: {
      columns: ['Condition de sortie', 'Résultat de Joël au 16/01', 'Atteinte ?'],
      rows: [
        ['Total ≥ 20/25', '21/25', 'Oui'],
        ['Aucun critère ≤ 2', 'Minimum : 4', 'Oui'],
        ['Résultat ≥ 4 sur les compétences indispensables', 'Leadership 4, Communication 4, Décision 5', 'Oui'],
        ['Synthèse : B14 = 8 et B15 = 0', '8 et 0', 'Oui'],
      ],
    },
    result: "Joël peut s'arrêter : il consacrera les dernières heures aux questions pièges (Procédure 6) et à la logistique du jour J (Procédure 7), pas à de nouvelles répétitions des mêmes histoires.",
    tip: "Notez le critère de sortie par écrit au début de la semaine : si vous le décidez le dimanche soir, l'angoisse le déplacera vers le haut.",
  },

  // ─────────── PROCÉDURE 6 — QUESTIONS PIÈGES (5 étapes) ───────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Lister les questions pièges probables pour ce poste précis',
    intro: "Une question piège anticipée perd presque tout son pouvoir déstabilisant le jour J. Elle est conçue pour tester la réaction sous pression, la cohérence ou l'honnêteté du candidat plus que la compétence technique. Entrées : votre CV, la fiche des exigences non comportementales de l'offre (Procédure 1), vos écarts du module 01. Durée : 30 minutes (Jour 6).",
    steps: [
      {
        title: 'Parcourir les 6 familles de pièges',
        actions: [
          'Échec assumé ; parcours (départ, changement de cap, période sans emploi, incohérence apparente) ; limite ou faiblesse ; écart de profil (langue, diplôme, niveau) ; pression ou silence délibéré ; question personnelle intrusive.',
          'Pour chaque famille, cherchez dans votre dossier le point faible réel : c\'est celui que le jury trouvera.',
        ],
      },
      {
        title: 'Formuler la question probable',
        actions: [
          'Écrivez la question exactement comme le jury la poserait, avec ses mots.',
          'Relisez les exigences de l\'offre : tout écart entre l\'offre et votre profil devient une question.',
        ],
      },
      {
        title: 'Noter probabilité et gravité, retenir 3 à 5 questions',
        actions: [
          'Notez la probabilité (1 à 3) et la gravité si vous répondez mal (1 à 3), puis multipliez.',
          'Retenez les 3 à 5 scores les plus hauts.',
        ],
      },
    ],
    table: {
      columns: ['Question piège probable (Joël, ISKI)', 'Famille', 'Probabilité × gravité', 'Retenue'],
      rows: [
        ['Parlez-moi d\'un échec professionnel.', 'Échec assumé', '3 × 2 = 6', 'Oui (ligne 13 de la banque)'],
        ['Pourquoi quitter ASGL après près de 3 ans ?', 'Parcours', '3 × 2 = 6', 'Oui'],
        ['Le poste exige un anglais B2 : où en êtes-vous ?', 'Écart de profil', '3 × 3 = 9', 'Oui'],
        ['Vous n\'avez jamais construit un budget MEAL seul : comment gérerez-vous le nôtre ?', 'Limite', '2 × 3 = 6', 'Oui'],
        ['(Silence de 5 à 8 secondes après votre réponse)', 'Silence délibéré', '2 × 2 = 4', 'Oui'],
        ['Quelle est votre situation familiale ?', 'Intrusive', '1 × 1 = 1', 'Non : traitée par le recentrage'],
      ],
    },
    result: "Joël retient 5 questions, de la plus grave à la moins grave : anglais (9), échec, parcours et budget (6 chacune), silence (4).",
    pitfall: "Ne préparer que les questions de compétence en espérant que le jury oubliera votre point faible : il l'a lu dans votre dossier avant vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Choisir la stratégie de réponse par famille',
    intro: "Principe : jamais une esquive. Une question piège appelle une réponse honnête structurée en STAR ou en une variante courte assumée. Le jury ne cherche pas un candidat sans faille, il cherche un candidat qui se connaît et sait corriger. Entrée : les 5 questions retenues.",
    steps: [
      {
        title: 'Associer une stratégie à chaque famille',
        actions: [
          'Lisez le tableau et reportez, à côté de chaque question retenue, sa stratégie.',
        ],
      },
      {
        title: 'Choisir la structure',
        actions: [
          'STAR court : Situation et Tâche en une phrase chacune, Action et Résultat développés, apprentissage en une phrase.',
          'Reconnaître – Expliquer – Projeter : vous reconnaissez le fait, vous l\'expliquez en 1 à 2 phrases sans vous justifier, vous projetez la suite avec un plan daté.',
        ],
      },
      {
        title: 'Fixer ce qu\'il ne faut jamais dire',
        actions: [
          'Ne dénigrez jamais un ancien employeur ni un collègue.',
          'Ne minimisez pas (« ce n\'est pas vraiment un échec ») et ne retournez pas la faiblesse en qualité déguisée (« mon défaut, c\'est que je travaille trop »).',
        ],
      },
    ],
    table: {
      columns: ['Famille', 'Stratégie', 'Structure', 'À éviter'],
      rows: [
        ['Échec assumé', 'Un vrai échec, assumé, centré sur ce que vous avez corrigé', 'STAR court + apprentissage', 'Un faux échec (« j\'ai trop travaillé ») ; accuser l\'équipe'],
        ['Parcours, départ, incohérence', 'Raison positive, factuelle, tournée vers le poste visé', 'Reconnaître – Expliquer – Projeter', 'Critiquer l\'employeur ; se justifier trop longuement'],
        ['Limite ou faiblesse', 'Une limite réelle mais non rédhibitoire, avec la preuve que vous travaillez dessus', 'STAR court', 'Une qualité déguisée'],
        ['Écart de profil (langue, diplôme)', 'Chiffre exact, plan daté, preuve de progrès', 'Reconnaître – Expliquer – Projeter', 'Surestimer son niveau'],
        ['Silence délibéré', 'Compter 5 secondes en silence, puis proposer d\'approfondir', 'Une phrase de clôture ou une offre de précision', 'Combler le silence en ajoutant des détails au hasard'],
        ['Question intrusive', 'Répondre brièvement sur ce qui est professionnel et recentrer', 'Réponse en 1 phrase + retour au poste', 'S\'énerver ; donner des détails privés non nécessaires'],
      ],
    },
    result: "À côté de chaque question retenue, une stratégie et une structure : Joël associe l'échec et le budget au STAR court, le départ et l'anglais à « Reconnaître – Expliquer – Projeter », et le silence à une phrase de clôture.",
    tip: "Dans tous les cas, finissez sur une direction : ce que vous faites maintenant, avec une date. Le jury retient la dernière phrase.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Rédiger les réponses en STAR court : l\'échec et le budget',
    intro: "L'échec assumé figure déjà en ligne 13 de la banque : la version orale est sa version courte. Pour la limite (le budget), appliquez la même structure. Chaque réponse tient en 90 secondes et se termine par un fait vérifiable. Entrée : ligne 13 de la banque ; le budget MEAL 2027 co-construit en décembre.",
    steps: [
      {
        title: 'Rédiger la réponse sur l\'échec',
        actions: [
          'Choisissez une erreur réelle, dont vous étiez responsable, et dont les effets ont été limités et corrigés.',
          'Racontez-la en STAR : l\'Action doit contenir ce que vous avez corrigé et ce que vous avez changé durablement.',
          'Terminez par l\'apprentissage en une phrase.',
        ],
      },
      {
        title: 'Rédiger la réponse sur la limite (budget)',
        actions: [
          'Reconnaissez le fait sans détour : « Je n\'ai pas encore construit seul un budget MEAL complet ».',
          'Enchaînez avec ce que vous avez fait pour combler cet écart, daté et chiffré.',
        ],
      },
      {
        title: 'Chronométrer',
        actions: [
          'Lisez chaque réponse à voix haute au chrono : 90 secondes maximum.',
          'Saisissez la version de l\'échec dans la ligne 13 (colonnes B à E) et contrôlez la colonne F.',
        ],
      },
    ],
    example: {
      title: 'Réponses préparées par Joël',
      lines: [
        "ÉCHEC — « En juin 2022, j'ai calculé la couverture d'un indicateur avec une population de 2018 : 82 % affiché au lieu de 71 %. L'erreur a été détectée à la relecture interne, 36 heures avant l'échéance. J'ai prévenu le coordinateur dans l'heure, recalculé avec la population actualisée, corrigé les 3 indicateurs dérivés, puis créé une fiche des sources de dénominateurs et une revue croisée à quatre yeux. Le rapport est parti à temps, les 6 rapports suivants n'ont eu aucune erreur de dénominateur. Ce que j'en retiens : un indicateur n'est fiable que si sa source est tracée. »",
        "BUDGET — « C'est exact, je n'avais pas construit seul un budget MEAL complet. En décembre 2026, j'ai co-construit avec le coordinateur programme le budget MEAL 2027 de 135 000 USD : j'ai proposé la répartition des lignes, nous l'avons validée ensemble le 15 décembre. Chez vous, je demanderai un binôme avec votre responsable financier pour la première année, et je construirai moi-même le budget de la deuxième. »",
      ],
    },
    result: "Deux réponses de 90 secondes, chacune avec un fait vérifiable, un apprentissage ou un plan, et sans mot de défense.",
    pitfall: "Choisir un échec sans conséquence réelle ou, à l'inverse, une faute éthique grave : le premier sonne faux, la seconde est éliminatoire. Choisissez une erreur professionnelle réelle, rattrapée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Rédiger les réponses « Reconnaître – Expliquer – Projeter » : le départ et l\'anglais',
    intro: "Pour les questions sur le parcours et sur un écart de profil, vous n'avez pas besoin d'une histoire complète : vous avez besoin d'une réponse honnête, courte et tournée vers l'avenir. Chaque réponse tient en 45 à 60 secondes. Entrées : le contrat en cours, le dernier test de langue, le plan d'action du module 01.",
    steps: [
      {
        title: 'Reconnaître',
        actions: [
          'Dites le fait tel qu\'il est, avec le chiffre exact : « Mon niveau d\'anglais est B1+ » ; « mon contrat prend fin en septembre 2027 ».',
        ],
      },
      {
        title: 'Expliquer',
        actions: [
          'Donnez la raison en 1 à 2 phrases, sans vous justifier ni critiquer personne.',
        ],
      },
      {
        title: 'Projeter',
        actions: [
          'Terminez par un plan daté et une preuve de progrès : ce que vous avez déjà fait, ce que vous ferez avant quelle date.',
          'Proposez, si le jury le souhaite, de répondre en anglais immédiatement.',
        ],
      },
    ],
    example: {
      title: 'Réponses préparées par Joël',
      lines: [
        "DÉPART — « Je ne quitte pas ASGL par désaccord : j'y ai construit une équipe de 6 personnes et un mécanisme de plaintes qui a traité 1 340 retours. Mon contrat court jusqu'en septembre 2027 et il n'existe pas de poste de responsable d'unité MEAL chez ASGL à court terme. Votre poste est la suite logique : diriger 7 personnes et un cadre de 38 indicateurs. Je prépare le budget 2027 et un tableau de bord avant tout départ, pour une transition propre. »",
        "ANGLAIS — « Mon niveau est aujourd'hui B1+ selon le test du 15 décembre 2026 ; le poste exige B2. Depuis, je suis 3 heures de cours par semaine et je mène une réunion d'équipe par semaine en anglais — 5 réunions à ce jour. Mon objectif est la certification B2 au 30 juin 2027. Si vous le souhaitez, je réponds à la prochaine question en anglais. »",
        "EN ANGLAIS (extrait) — « For three years I have written donor reports in English templates, and I now lead a weekly team meeting in English. My vocabulary is still limited when I improvise, and I am working on that every week. »",
      ],
    },
    result: "Deux réponses de 45 à 60 secondes, avec des chiffres exacts, une date et une preuve de progrès. Aucune ne contient d'excuse ni de critique d'un tiers.",
    pitfall: "Surestimer son niveau de langue : si le jury passe à l'anglais et que vous décrochez, c'est le niveau annoncé qui sera jugé, pas votre honnêteté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: "S'entraîner au silence et à la pression, puis finaliser la fiche",
    intro: "Une réponse préparée ne sert à rien si le silence du jury ou un ton sec vous fait perdre vos moyens. Le dernier travail est donc physique : tenir 5 secondes sans parler, rester calme face à une relance dure, puis consolider les 3 à 5 réponses sur une seule page.",
    steps: [
      {
        title: 'S\'entraîner au silence',
        actions: [
          'Demandez à votre partenaire de se taire 5 à 8 secondes après votre réponse, plusieurs fois, sans commentaire.',
          'Comptez 5 secondes dans votre tête, respirez, puis dites : « Souhaitez-vous que je précise un point ? » ou terminez par une phrase de clôture.',
        ],
      },
      {
        title: 'S\'entraîner à la relance dure',
        actions: [
          'Faites dire à votre partenaire une phrase sèche : « Votre réponse ne me convainc pas ».',
          'Répondez sans vous justifier : reformulez, donnez un fait de plus, et laissez le jury conclure.',
        ],
      },
      {
        title: 'Finaliser la fiche d\'une page',
        actions: [
          'Dans un document d\'une page, notez pour chaque question : la stratégie, la phrase d\'ouverture, le chiffre ou la preuve, la phrase de clôture.',
          'Relisez-la une fois le dimanche, ne l\'apprenez pas par cœur.',
        ],
      },
    ],
    table: {
      columns: ['Question piège', 'Phrase d\'ouverture', 'Chiffre ou preuve', 'Phrase de clôture'],
      rows: [
        ['Échec', 'En juin 2022, j\'ai fait une erreur de dénominateur', '82 % au lieu de 71 % ; 6 rapports sans erreur', 'Un indicateur n\'est fiable que si sa source est tracée'],
        ['Départ d\'ASGL', 'Je ne quitte pas ASGL par désaccord', '6 personnes ; 1 340 retours ; contrat jusqu\'en 09/2027', 'Votre poste est la suite logique'],
        ['Anglais', 'Mon niveau est B1+ selon le test du 15/12/2026', '3 h par semaine ; 5 réunions en anglais', 'Certification B2 visée au 30/06/2027'],
        ['Budget', 'C\'est exact, je n\'avais pas construit seul un budget MEAL', 'Budget 2027 de 135 000 USD validé le 15/12', 'Je construirai le budget de la 2e année moi-même'],
        ['Silence', '(5 secondes de silence)', '—', 'Souhaitez-vous que je précise un point ?'],
      ],
    },
    result: "Une fiche d'une page, une répétition du silence réussie sans combler le vide, et la certitude que chaque piège a une réponse prête.",
    tip: "Pendant les 5 secondes de silence, relâchez les épaules et regardez la caméra : un silence calme se lit comme de l'assurance.",
  },

  // ─────────── PROCÉDURE 7 — LE JOUR J (4 étapes) ───────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: "La veille et le matin : technique, matériel, énergie",
    intro: "La veille d'un entretien sert à se reposer et à vérifier la technique, pas à apprendre de nouvelles histoires. Une panne de connexion ou de batterie à 9 h 58 ruine une semaine de préparation. Entrées : la fiche format (Procédure 1), la checklist ci-dessous. Durée : 30 minutes la veille.",
    steps: [
      {
        title: 'Technique (veille au soir)',
        actions: [
          'Testez la plateforme avec le lien de l\'entretien, la caméra, le micro et le casque.',
          'Chargez ordinateur et téléphone, branchez le modem 4G de secours et notez le numéro d\'un évaluateur ou de la RH à appeler en cas de coupure.',
        ],
      },
      {
        title: 'Matériel et décor',
        actions: [
          'Posez sur la table : CV, offre imprimée, feuille blanche, stylo, verre d\'eau.',
          'Choisissez la tenue, un fond neutre et une lumière de face.',
        ],
      },
      {
        title: 'Matin du jour J',
        actions: [
          'Mangez léger, relisez uniquement les 8 fiches d\'ancres et la fiche des pièges pendant 15 minutes maximum.',
          'Connectez-vous 15 minutes avant l\'heure, micro coupé, et attendez en salle d\'attente.',
        ],
      },
    ],
    example: {
      title: 'Checklist de Joël — dimanche 17/01 au soir et lundi 18/01',
      lines: [
        'Dim. 20 h : test de la plateforme réussi ; batteries chargées ; modem 4G branché ; numéro de la RH noté.',
        'Dim. 21 h : tenue prête, fond neutre, lumière de face ; coucher à 22 h.',
        'Lun. 8 h 30 : petit-déjeuner ; 9 h : relecture des 8 fiches d\'ancres (15 minutes) ; 9 h 45 : connecté, micro coupé, en salle d\'attente.',
        'Lun. 10 h : entretien.',
      ],
    },
    result: "Tout est testé et prêt. Il ne reste plus qu'à parler, avec l'esprit libre.",
    pitfall: "Apprendre une nouvelle histoire la veille : elle n'a pas été testée à l'oral, elle sortira mal, et elle vous fait douter des autres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: "Réussir l'ouverture : « Présentez-vous » en 75 à 90 secondes",
    intro: "Presque tous les panels ouvrent par cette consigne. Ce n'est pas une question de compétence : c'est une occasion de poser votre cadre en 90 secondes. Utilisez la structure Présent – Passé – Futur et placez 3 chiffres du dossier. Entrées : votre profil de poste idéal (module 01), vos 3 meilleurs résultats.",
    steps: [
      {
        title: 'Présent (20 secondes)',
        actions: [
          'Dites qui vous êtes, votre poste actuel et l\'échelle : équipe, budget, périmètre.',
        ],
      },
      {
        title: 'Passé (35 secondes)',
        actions: [
          'Donnez 2 ou 3 preuves chiffrées de votre parcours, en lien avec les compétences du poste.',
        ],
      },
      {
        title: 'Futur (20 secondes)',
        actions: [
          'Expliquez pourquoi ce poste dans cette organisation, avec une phrase précise sur leur programme ou leur zone.',
          'Terminez par une phrase de remerciement courte, puis arrêtez-vous.',
        ],
      },
    ],
    example: {
      title: 'Pitch de Joël (environ 170 mots, 75 secondes)',
      body: "Je m'appelle Joël Kabeya, je suis Superviseur MEAL à Alliance Santé Grands Lacs, à Goma. Je supervise une équipe de 6 personnes sur un programme santé-nutrition de 4,6 millions USD dans 3 provinces, avec 30 rapports mensuels sur 30 livrés à la date prévue. Auparavant, j'ai conduit le suivi-évaluation d'un projet eau et assainissement financé par 3 bailleurs, et numérisé le suivi de 4 200 ménages : sept ans en tout. Ce que je retiens : un système MEAL ne vaut que si les données arrivent à l'heure et si les équipes s'en servent. C'est ce que j'ai construit, jusqu'à un mécanisme de plaintes qui a traité 1 340 retours en 12 mois, avec un délai de réponse ramené de 19 à 7 jours. Le poste de Responsable MEAL à ISKI est la suite logique : diriger 7 personnes et un cadre de 38 indicateurs, et peser sur les décisions de programme au Sud-Kivu. Je vous remercie de votre temps.",
    },
    result: "Un pitch de 75 à 90 secondes, avec 3 chiffres du dossier de preuves, que vous racontez sans le lire. Entraînez-le au chrono comme une réponse STAR.",
    tip: "Ne racontez pas toute votre carrière : le panel a votre CV sous les yeux. Choisissez ce qui répond aux 3 compétences indispensables.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Pendant l\'entretien : tenir son cap, puis poser vos questions',
    intro: "Soixante minutes, 6 à 8 questions : l'énergie se gère. Chaque question est une chance de poser une preuve, et la dernière vous donne la parole. Entrées : toutes les procédures précédentes ; un stylo et une feuille blanche pour noter les questions.",
    steps: [
      {
        title: 'Appliquer le réflexe en 4 temps à chaque question',
        actions: [
          'Identifier le type de question en 2 secondes (comportementale, théorique, opinion, hypothétique, piège).',
          'Prendre 3 à 5 secondes de silence et choisir l\'histoire de la compétence (ou sa réserve si c\'est une relance).',
          'Raconter en STAR avec les transitions, Action à 60 à 70 %.',
          'S\'arrêter quand le Résultat est dit ; noter la question sur la feuille.',
        ],
      },
      {
        title: 'Gérer le trou de mémoire',
        actions: [
          'Dites : « Puis-je reformuler la question pour être sûr de bien répondre ? », ou « Puis-je revenir sur ce point dans quelques instants ? ».',
          'Ne comblez jamais un trou par une histoire inventée.',
        ],
      },
      {
        title: 'Poser vos questions au jury',
        actions: [
          'Préparez 3 questions qui montrent votre projection dans le poste.',
          'Réservez le salaire et les conditions pour la phase d\'offre (module 06), sauf si le jury l\'aborde.',
        ],
      },
    ],
    table: {
      columns: ['Question à poser au jury', 'Ce qu\'elle montre', 'À qui la poser'],
      rows: [
        ['Quels seront les 3 plus grands défis de l\'équipe MEAL pendant mes 90 premiers jours ?', 'Vous vous projetez dans l\'action', 'Mme Mbuyi'],
        ['Comment le succès du poste sera-t-il mesuré à 6 mois ?', 'Vous raisonnez en résultats', 'Mme Mbuyi, M. Lemaire'],
        ['Comment la qualité des données est-elle revue aujourd\'hui, entre le terrain et le bailleur ?', 'Vous êtes un pair technique crédible', 'Dr Said'],
      ],
    },
    result: "Joël répond à 7 questions en 55 minutes, utilise la relance de réserve une fois, et pose 3 questions qui s'adressent chacune à un évaluateur différent.",
    pitfall: "Dire « non, pas de question » : le jury y lit un manque d'intérêt. Une question préparée est une dernière preuve de motivation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Après l\'entretien : débrief à chaud et remerciement sous 24 heures',
    intro: "L'entretien n'est fini qu'une fois le débrief fait et le remerciement envoyé. Le débrief alimente votre banque pour les prochains entretiens ; le remerciement, sobre, garde le contact et rappelle un point fort. Durée : 30 minutes, le jour même.",
    steps: [
      {
        title: 'Débriefer à chaud (30 minutes)',
        actions: [
          'Notez, avant d\'oublier, les questions posées, l\'histoire utilisée pour chacune, et ce qui a surpris.',
          'Reprenez la grille d\'auto-évaluation : remplissez les sections 2 et 4 pour cet entretien réel et notez-vous sur les 5 critères.',
        ],
      },
      {
        title: 'Mettre à jour la banque',
        actions: [
          'Dans le classeur, améliorez la ligne de toute histoire qui a mal tourné ou qui a manqué de chiffre.',
          'Ajoutez une ligne si une compétence nouvelle est apparue.',
        ],
      },
      {
        title: 'Envoyer le remerciement',
        actions: [
          'Dans les 24 heures, écrivez 4 lignes à l\'assistante RH pour tous les évaluateurs : remerciement, un point précis de l\'échange, rappel de votre motivation.',
          'Relisez deux fois, n\'ajoutez aucune pièce jointe.',
        ],
      },
    ],
    example: {
      title: 'Remerciement de Joël — lundi 18/01/2027, 15 h',
      lines: [
        '« Madame, Monsieur, merci pour cet échange de ce matin. Il m\'a confirmé mon intérêt pour le poste, en particulier la mise en place d\'un outil de collecte numérique unique dans vos 4 zones de santé.',
        'J\'ai apprécié la question du Dr Said sur la qualité des données : elle rejoint ma conviction qu\'un indicateur n\'est fiable que si sa source est tracée.',
        'Je reste à votre disposition pour toute information complémentaire. Cordialement, Joël Kabeya. »',
      ],
    },
    result: "Un débrief de 30 minutes, une banque mise à jour et un remerciement envoyé. Au fil rouge : le 26 janvier 2027, Mme Mbuyi appelle Joël, et une proposition écrite suivra — l'objet du module 06.",
    pitfall: "Attendre sans rien faire, ou relancer le jour même : un remerciement unique sous 24 heures suffit, puis respectez le délai annoncé par l'organisation.",
  },

  // ────────────────────── CAS RÉSOLU DE BOUT EN BOUT ──────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/6) — Joël : le raisonnement de la semaine',
    scenario: "Joël Kabeya, Superviseur MEAL à Goma, est convoqué le lundi 11 janvier 2027 à un entretien de panel pour le poste de Responsable MEAL chez ISKI, fixé au lundi 18 janvier à 10 h en visioconférence. Il est compétent, mais n'a jamais préparé un entretien comportemental.",
    steps: [
      { title: 'Jour 1 — Cadrer (Procédure 1)', body: "Il réserve 7 créneaux de 1 à 3 h (15 h au total), décode l'offre, retient 8 compétences dont 3 indispensables (Leadership, Communication avec parties prenantes, Décision) et confirme avec la RH un format en visio, en français, avec une question possible en anglais." },
      { title: 'Jours 2 à 4 — Écrire (Procédure 2)', body: "Il rédige 8 histoires S-T-A-R dans la banque, en 25 à 40 minutes chacune. La colonne F signale la ligne 9 « résultat non chiffré » : il la corrige. Jeudi à 13 h, la synthèse affiche 8 compétences prêtes et 0 à préparer." },
      { title: 'Jour 4 — Simuler et mesurer (Procédures 3 et 4)', body: "Première simulation avec Chantal Mwamba : 13 sur 25. Diagnostic chiffré : Action à 51 %, Situation de 55 s, 4 tics par minute, 6 « je » contre 11 « nous », résultat de l'échec sans chiffre." },
      { title: 'Jours 5 et 6 — Progresser (Procédure 5)', body: "Il corrige la cause de chaque symptôme et refait 2 simulations en durcissant les conditions : 17 puis 21 sur 25. Le critère de sortie fixé à l'avance est atteint." },
      { title: 'Jours 6 et 7 — Préparer les pièges et la logistique (Procédures 6 et 7)', body: "Cinq questions pièges, cinq réponses honnêtes d'une page ; checklist technique du dimanche soir ; pitch de 75 secondes." },
    ],
    result: "15 heures de préparation, sans aucune nouvelle expérience, ont fait passer Joël d'un candidat qui « a de l'expérience » à un candidat dont chaque compétence est prouvée par un fait chiffré et racontable en 2 minutes.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/6) — Banque d\'histoires de Joël : lignes 6 à 8',
    scenario: "Les histoires 1 à 3 du classeur « banque-histoires-star-preparation.xlsx », onglet « Banque histoires STAR ». Les colonnes B, C, D et E sont celles du classeur ; la colonne F affiche « OK — prête pour l'entretien » pour chaque ligne.",
    steps: [],
    table: {
      columns: ['A — Compétence', 'B — Situation', 'C — Tâche', 'D — Action', 'E — Résultat'],
      rows: [
        ['Leadership', "Mars 2024 : je prends la supervision d'une équipe MEAL de 6 personnes sur un programme santé-nutrition de 4,6 M USD en 3 provinces ; les rapports mensuels arrivent avec 12 jours de retard en moyenne.", "Superviseur nouvellement nommé, il m'appartenait de ramener les rapports mensuels dans les délais sans recruter ni modifier la composition de l'équipe.", "J'ai reçu chaque membre 30 minutes en entretien individuel ; cartographié les 4 étapes de la chaîne de données ; fixé un calendrier de collecte du 1er au 20 du mois ; instauré un point d'équipe de 30 minutes chaque lundi ; délégué la validation de chaque province à un enquêteur référent.", "Sur les 30 premiers mois, 30 rapports mensuels sur 30 livrés à la date prévue ; retard moyen ramené de 12 jours à 0 ; aucun départ dans l'équipe."],
        ['Gestion de conflit', "Septembre 2025 : désaccord avec le responsable logistique sur l'usage de 2 véhicules, réclamés les mêmes 4 jours pour mon enquête dans 11 centres de santé et pour ses livraisons de médicaments ; échéance bailleur au 30/09.", "Responsable du calendrier d'enquête, je devais obtenir un accord en 48 h sans faire arbitrer la direction ni sacrifier une livraison de médicaments.", "J'ai demandé 30 minutes le jour même ; chacun a présenté ses contraintes avec dates ; j'ai constaté que 6 des 11 centres étaient sur l'axe de ses livraisons ; j'ai proposé que mes enquêteurs voyagent dans ses véhicules sur ces 6 centres et que j'utilise 1 véhicule seul sur les 5 autres ; j'ai écrit le calendrier sur 1 page, validé par nous deux.", "Enquête terminée le 28/09, 11 centres sur 11 couverts ; 0 livraison retardée ; le calendrier commun des véhicules est reconduit chaque mois depuis plus d'un an."],
        ['Résolution de problème sous pression', "Août 2026, à 3 jours de l'échéance du 31 août : les données de 12 centres de santé sur 38 manquent après une panne de réseau.", "Superviseur MEAL, je devais livrer au bailleur un rapport complet le 31 août sans demander de report.", "J'ai appelé les 12 responsables de centre en une journée pour identifier la cause ; fait synchroniser les formulaires Kobo hors ligne de 9 centres depuis un point de connexion ; envoyé 2 enquêteurs à moto récupérer les formulaires papier des 3 autres ; vérifié avec l'assistant data la cohérence des totaux avant envoi.", "Rapport transmis le 30 août, avec 38 centres sur 38 (complétude de 100 % contre 68 % à J-3) ; synchronisation hebdomadaire obligatoire instaurée depuis."],
      ],
    },
    result: "Trois lignes, trois résultats chiffrés, trois actions racontées avec « j'ai » : la colonne F lit « OK — prête pour l'entretien » partout.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/6) — Banque d\'histoires de Joël : lignes 9 à 11',
    scenario: "Les histoires 4 à 6 du classeur. La ligne 9 avait d'abord affiché « A COMPLETER — résultat non chiffré » ; elle a été corrigée le jeudi à midi.",
    steps: [],
    table: {
      columns: ['A — Compétence', 'B — Situation', 'C — Tâche', 'D — Action', 'E — Résultat'],
      rows: [
        ["Travail d'équipe multiculturel", "2022, projet WASH de 1,8 M USD à Goma, équipe de 9 personnes de 4 nationalités ; chacun des 3 bailleurs exige son propre format de rapport, et les habitudes de travail divergent.", "Chargé de suivi-évaluation, je devais concevoir un dispositif de mesure unique acceptable par tous, sans autorité hiérarchique sur les autres membres.", "J'ai interrogé chaque collègue 20 minutes sur ses habitudes de reporting ; animé 2 ateliers de 2 heures avec supports visuels et temps de parole tournant pour que les plus discrets s'expriment ; proposé un cadre unique de 32 indicateurs avec un tableau de correspondance vers les 3 formats ; fait valider le cadre par chaque bailleur.", "Cadre de 32 indicateurs utilisé 30 mois sans révision majeure ; 10 rapports trimestriels acceptés sans demande de correction de fond ; 1 seul format interne au lieu de 3."],
        ['Communication avec parties prenantes', "Avril 2025 : lancement d'une ligne verte de plaintes ; la Division provinciale de la santé et 3 chefs de zone craignent qu'elle expose leurs centres.", "Concepteur du mécanisme, je devais obtenir leur adhésion avant le lancement du 28 avril.", "J'ai présenté en 20 minutes, sur 1 page, ce que le mécanisme fait et ne fait pas ; tenu 4 réunions avec les comités de santé ; adapté le protocole à leur demande : retours anonymisés, bilan trimestriel remis à la Division avant le bailleur.", "Lancement le 28/04 dans les 3 provinces ; 1 340 retours traités en 12 mois ; délai de réponse ramené de 19 à 7 jours ; 3 chefs de zone ont demandé l'extension du dispositif à tous leurs centres."],
        ['Gestion du changement / adaptabilité', "Début 2020, Action Communautaire Kivu : le suivi de 4 200 ménages se fait sur papier (21 jours de remontée, 14 % d'erreurs de saisie) et la direction décide de passer à Kobo.", "Assistant suivi-évaluation, je devais former 18 relais communautaires, dont plusieurs n'avaient jamais utilisé de smartphone, en 3 mois.", "J'ai donné 6 sessions pratiques de 3 heures, 3 relais par tablette ; produit une fiche illustrée de 1 page ; désigné 1 relais référent par zone ; assuré un appui hebdomadaire par téléphone pendant 2 mois.", "Délai de remontée ramené de 21 à 4 jours ; erreurs de saisie de 14 % à 5 % en 3 mois ; 18 relais sur 18 autonomes."],
      ],
    },
    result: "Trois histoires de contexte différent (ONG internationale, projet à 3 bailleurs, ONG nationale) : elles permettent des relances variées sans jamais raconter deux fois la même chose.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/6) — Banque d\'histoires de Joël : lignes 12 et 13, et synthèse',
    scenario: "Les histoires 7 et 8 du classeur, puis l'onglet « Synthèse couverture » tel que Joël le lit le jeudi 14 janvier à 13 h.",
    steps: [],
    table: {
      columns: ['A — Compétence', 'B — Situation', 'C — Tâche', 'D — Action', 'E — Résultat'],
      rows: [
        ['Prise de décision avec informations incomplètes', "Mai 2025, enquête nutrition en cours dans 3 provinces ; le coordinateur programme est absent 5 jours ; je détecte 9 % de doublons (108 sur 1 200 questionnaires) sans en connaître l'origine.", "Je devais décider seul, avant le lendemain matin, de poursuivre ou de suspendre la collecte.", "J'ai trié la base par identifiant et par enquêteur en 2 heures : doublons concentrés sur 2 tablettes ; j'ai suspendu la collecte à 18 h ; écrit au coordinateur mes 3 options et ma décision ; rétabli la collecte 2 jours plus tard avec un contrôle quotidien des identifiants.", "Aucune donnée erronée transmise au bailleur ; 108 doublons supprimés ; enquête achevée avec 3 jours de retard, validée sans réserve ; décision confirmée par le coordinateur à son retour."],
        ['Échec assumé / apprentissage', "Juin 2022, rapport trimestriel du projet WASH : j'ai calculé un taux de couverture avec une population de 2018 au lieu de la population actualisée.", "Chargé de suivi-évaluation, j'étais responsable de l'exactitude des indicateurs du rapport.", "L'erreur est détectée à la relecture interne, 36 h avant l'échéance (82 % affiché au lieu de 71 %) ; j'ai prévenu le coordinateur dans l'heure ; recalculé avec la population actualisée ; corrigé les 3 indicateurs dérivés ; créé une fiche des sources de dénominateurs et une revue croisée à 4 yeux.", "Rapport envoyé à temps et accepté ; 6 rapports trimestriels suivants sans erreur de dénominateur ; la fiche est reprise par 2 autres projets. Apprentissage : un indicateur n'est fiable que si sa source est tracée."],
      ],
    },
    example: {
      title: "Onglet « Synthèse couverture » — jeudi 14/01/2027, 13 h",
      lines: [
        'Leadership : B = 1 — Prête  ·  Gestion de conflit : 1 — Prête  ·  Résolution de problème sous pression : 1 — Prête',
        "Travail d'équipe multiculturel : 1 — Prête  ·  Communication avec parties prenantes : 1 — Prête  ·  Gestion du changement / adaptabilité : 1 — Prête",
        "Prise de décision avec informations incomplètes : 1 — Prête  ·  Échec assumé / apprentissage : 1 — Prête",
        'B14 (compétences couvertes) = 8  ·  B15 (compétences encore à préparer) = 0',
      ],
    },
    result: "8 histoires, 8 résultats chiffrés, 0 compétence à préparer : la banque est complète, mais encore jamais dite à voix haute. Les simulations vont la rendre solide.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/6) — Joël : le tableau de progression et les conditions du jour J',
    scenario: "Le cycle simulation puis auto-évaluation répété 3 fois, avec les mesures qui ont guidé chaque correction, et ce que Joël a changé entre deux simulations.",
    steps: [],
    table: {
      columns: ['Indicateur', 'S1 — jeu. 14/01', 'S2 — ven. 15/01', 'S3 — sam. 16/01, 10 h'],
      rows: [
        ['Total grille /25', '13', '17', '21'],
        ['Durée moyenne d\'une réponse', '2 min 17 s (6 min 55 s pour 3 réponses)', '2 min 25 s puis 2 min 05 s après correction', '2 min 05 s'],
        ['Part de l\'Action', '51 %', '58 %', '62 %'],
        ['Tics par minute', '4,0', '2,6', '1,6'],
        ['« Je » / « nous » dans l\'Action', '6 / 11', '9 / 7', '14 / 4'],
        ['Principale correction faite ensuite', 'Chiffrer le Résultat de l\'échec ; Situation de Q1 de 55 s à 15 s', 'Alléger l\'Action de la décision ; remplacer « du coup » par un silence', 'Relire seulement les fiches d\'ancres ; pas de nouvelle histoire'],
      ],
    },
    result: "Joël atteint son critère de sortie le samedi à midi : total de 21 sur 25, aucun critère inférieur à 4. Le panel de la simulation 3 comprenait Chantal Mwamba et Jean-Paul Mukendi, mentor.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (6/6) — L\'entretien du 18 janvier 2027 et ce qu\'il a prouvé',
    scenario: "Lundi 18 janvier 2027, 10 h, visioconférence, 55 minutes, panel de 3 évaluateurs. Joël est connecté depuis 9 h 45 ; il a testé sa connexion la veille.",
    steps: [],
    table: {
      columns: ['Moment', 'Question (type)', 'Histoire de Joël', 'Durée'],
      rows: [
        ['10 h 00', 'Présentez-vous (ouverture)', 'Pitch Présent – Passé – Futur', '1 min 20 s'],
        ['10 h 03', 'Dirigez-vous une équipe en difficulté ? (comportementale, Leadership)', 'Ligne 6 : prise en main de l\'équipe MEAL', '2 min 05 s'],
        ['10 h 08', 'Relance : un autre exemple, dans un contexte différent', 'Réserve : formation des 18 relais (ACK, 2020)', '1 min 30 s'],
        ['10 h 14', 'Désaccord avec un partenaire (Gestion de conflit)', 'Ligne 7 : véhicules partagés', '2 min'],
        ['10 h 20', 'Décision sans toutes les informations', 'Ligne 12 : 9 % de doublons', '2 min'],
        ['10 h 27', 'Où en êtes-vous en anglais ? (piège)', 'Reconnaître – Expliquer – Projeter ; une phrase en anglais', '1 min'],
        ['10 h 32', 'Un échec professionnel (piège)', 'Ligne 13 : erreur de dénominateur', '1 min 45 s'],
        ['10 h 40', 'Vous n\'avez jamais construit un budget MEAL seul (piège)', 'Budget 2027 de 135 000 USD co-construit', '1 min 30 s'],
        ['10 h 48', 'Silence de 6 secondes après la réponse', 'Compté 5 secondes, puis « Souhaitez-vous que je précise un point ? »', '—'],
        ['10 h 50', 'Questions de Joël au jury', '3 questions préparées', '4 min'],
      ],
    },
    result: "Lundi 18/01 à 15 h : remerciement envoyé. Mardi 26/01 : Mme Mbuyi appelle Joël, une proposition écrite suivra — il se prépare à négocier (module 06). Joël a utilisé 6 histoires de la banque sur 8, aucune question n'était imprévue, et la relance sur le leadership est tombée sur une histoire de réserve. Cas fictif.",
  },

  // ─────────────────────────────── EXERCICES ───────────────────────────────
  {
    type: 'exercise',
    title: "Exercice 1 — Réécrire en STAR la réponse vague d'Amina",
    instructions: "Amina est la logisticienne du module 01 : 5 ans de terrain, équipe de 8 personnes, budget logistique de 250 000 USD arbitré, décision prise seule lors d'une rupture de stock critique. En simulation, à la question « Décrivez une décision difficile prise sans toutes les informations », elle répond : « Une fois on a eu une rupture de stock pendant une distribution, c'était stressant, mais on a trouvé des solutions et au final les gens ont reçu leur aide. » Appliquez les Procédures 2 et 4 pour la transformer. Ouvrez votre copie du classeur et travaillez la ligne « Prise de décision avec informations incomplètes ».",
    steps: [
      {
        title: 'Diagnostiquer',
        actions: [
          'Pour chaque lettre S, T, A, R, notez ce que la réponse contient et ce qui manque, avec le tableau de diagnostic du cas vécu.',
        ],
      },
      {
        title: 'Inventer les faits manquants',
        actions: [
          'Pour les chiffres non donnés par le cas, inventez des valeurs réalistes et signalez-les comme « hypothèse d\'exercice ».',
          'Quel est le contexte (mois, lieu), le rôle d\'Amina, le délai, le nombre de bénéficiaires ?',
        ],
      },
      {
        title: 'Rédiger les 4 colonnes',
        actions: [
          'B : Situation en 25 à 40 mots. C : Tâche avec « je » et une contrainte. D : 3 à 5 actions avec « j\'ai ». E : Résultat chiffré, avec un apprentissage.',
          'Lisez la colonne F : elle doit afficher « OK — prête pour l\'entretien ».',
        ],
      },
      {
        title: 'Chronométrer',
        actions: [
          'Racontez la version finale à voix haute, chrono lancé : 2 minutes maximum, Action à 60 % ou plus.',
        ],
      },
    ],
    tip: "Début de réponse possible : « En [mois, année], lors d'une distribution pour [nombre] ménages à [lieu], le stock de [produit] s'est révélé insuffisant à [délai] de la distribution. » Ne commencez jamais par « une fois ».",
    pitfall: "Ne pas distinguer ce qu'Amina a décidé seule de ce que l'équipe a exécuté : la compétence demandée est la décision, pas la logistique.",
    deliverable: "Une ligne complétée en B à E (colonne F à « OK — prête pour l'entretien ») et un chronométrage de la version orale.",
  },
  {
    type: 'checklist',
    title: 'Votre réécriture d\'Amina est correcte si…',
    items: [
      "La Situation contient un mois, un lieu et un enjeu chiffré, en 25 à 40 mots, sans historique inutile.",
      "La Tâche dit le rôle d'Amina avec « je » et une contrainte réelle (délai, absence du supérieur, budget).",
      "L'Action contient 3 à 5 verbes d'action à la première personne, aucun « on » non justifié, et fait ressortir la décision prise seule.",
      "Le Résultat contient au moins un chiffre ou un fait observable vérifiable et, si pertinent, une phrase d'apprentissage.",
      "La colonne F de la ligne affiche « OK — prête pour l'entretien ».",
      "La version orale tient en 2 minutes maximum, avec une Action à 60 à 70 % du temps.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice noté 2 — Transformation avant/après et simulation enregistrée',
    instructions: "Choisissez une compétence de votre propre banque dont la première rédaction reste proche du style « avant » de l'étude de cas (anecdote non structurée, résultat vague), et réécrivez-la intégralement dans « banque-histoires-star-preparation.xlsx ». Faites-vous poser la question par un partenaire (ou seul face caméra), répondez en 2 minutes maximum, enregistrez, puis remplissez immédiatement « grille-auto-evaluation-simulation-entretien.docx ».",
    steps: [
      {
        title: 'Transformation avant/après',
        actions: [
          'Réécrivez la ligne en respectant strictement les quatre colonnes S, T, A, R, avec un Résultat obligatoirement chiffré ou clairement observable.',
          'Contrôlez la colonne F jusqu\'à « OK — prête pour l\'entretien ».',
        ],
      },
      {
        title: 'Simulation enregistrée',
        actions: [
          'Demandez à votre partenaire de vous poser la question, sans vous dire à quelle compétence elle correspond.',
          'Répondez à voix haute en 2 minutes maximum, chrono lancé, et enregistrez la session.',
        ],
      },
      {
        title: 'Auto-évaluation',
        actions: [
          'Remplissez les sections 1 à 5 de la grille : structure STAR respectée ou non, tics de langage relevés à l\'écoute, points à améliorer avant la prochaine session.',
          'Complétez le cartouche : votre nom et la date de la prochaine simulation.',
        ],
      },
    ],
    tip: "Faites votre première écoute en passe « son seul », un crayon à la main : un tic compté est un tic que vous pourrez corriger.",
    pitfall: "Remplir la grille de mémoire, sans réécouter l'enregistrement : les notes et le comptage des tics seront faux.",
    deliverable: "La ligne complétée dans la banque d'histoires, plus la grille d'auto-évaluation remplie pour cette simulation, tenant sur 1 à 2 pages.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable de l\'exercice noté est correct si…',
    items: [
      "La ligne réécrite sépare nettement Situation, Tâche, Action et Résultat dans les colonnes B à E.",
      "La colonne E contient un chiffre, un pourcentage ou un élément clairement observable, et la colonne F affiche « OK — prête pour l'entretien ».",
      "Votre réponse enregistrée dure 2 minutes ou moins et vous pouvez dire la durée de chaque lettre.",
      "La grille indique pour chacun des 5 critères une seule note de 1 à 5, justifiée par une mesure (durée, nombre de « je », nombre de tics).",
      "La section 4 nomme au moins un tic de langage avec son nombre, ou un point d'amélioration concret.",
      "La section 5 contient au plus 3 axes, chacun avec un test mesurable, et la date de la prochaine simulation est fixée.",
      "L'ensemble tient sur 1 à 2 pages.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Votre banque de 5 à 8 histoires et vos 3 cycles, en 7 jours',
    instructions: "Appliquez maintenant les 7 procédures à votre propre cas : un entretien réel ou, à défaut, une offre que vous visez. Bloquez les créneaux dès aujourd'hui ; chaque jour produit un livrable précis.",
    steps: [
      { title: 'Jour 1 (2 h 30) — Procédure 1', actions: ['Plan de 7 jours dans l\'agenda, offre décodée, 5 à 8 compétences classées, fiche de format de l\'entretien.', 'Phrases brutes pour chaque compétence (Procédure 2, étape 2).'] },
      { title: 'Jours 2 et 3 (4 h) — Procédure 2', actions: ['Rédigez 5 à 8 histoires dans la banque, colonnes B à E, jusqu\'à « OK — prête pour l\'entretien » en colonne F.', 'Contrôlez la Synthèse couverture.'] },
      { title: 'Jour 4 (3 h 30) — Procédures 2, 3 et 4', actions: ['Fiches d\'ancres, simulation 1 enregistrée, grille n° 1 complétée avec mesures.'] },
      { title: 'Jours 5 et 6 (4 h) — Procédure 5', actions: ['Priorités, corrections, simulations 2 et 3 en durcissant les conditions, tableau de progression, critère de sortie vérifié.'] },
      { title: 'Jours 6 et 7 (1 h 30) — Procédures 6 et 7', actions: ['Fiche d\'une page de 3 à 5 réponses aux questions pièges, pitch de 90 secondes, checklist de la veille.'] },
    ],
    deliverable: "Votre dossier d'entretien contenant : le plan de 7 jours, la banque complétée (5 à 8 lignes « OK »), 3 grilles remplies, le tableau de progression, la fiche des questions pièges et la checklist du jour J.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Vos réponses aux questions pièges',
    instructions: "Préparez, pour l'entretien que vous visez, une stratégie de réponse honnête à 3 à 5 questions pièges. Appliquez la Procédure 6, étape par étape.",
    steps: [
      { title: 'Étape 1 — Lister', actions: ['Au moins 3 questions pièges probables pour votre poste précis, avec probabilité × gravité, dont une sur un échec et une sur un écart de profil (langue, diplôme, niveau) ou de parcours.'] },
      { title: 'Étape 2 — Choisir la stratégie', actions: ['Pour chaque question, indiquez la famille, la structure (STAR court ou Reconnaître – Expliquer – Projeter) et ce qu\'il ne faut jamais dire.'] },
      { title: 'Étape 3 — Rédiger', actions: ['Rédigez chaque réponse en 45 à 90 secondes, avec un chiffre ou une preuve et une phrase de clôture.', 'Saisissez la réponse sur l\'échec dans la ligne « Échec assumé / apprentissage » de la banque.'] },
      { title: 'Étape 4 — Tester', actions: ['Faites-vous poser chaque question par un partenaire, dont une avec un silence de 5 à 8 secondes, et enregistrez.', 'Réécoutez : aucune esquive, aucune critique d\'un tiers, aucune excuse.'] },
    ],
    pitfall: "Préparer un faux échec (« mon défaut, c'est que je travaille trop ») ou une réponse qui accuse un ancien employeur : le jury ne retient que l'esquive.",
    deliverable: "Une fiche d'une page : 3 à 5 questions, la stratégie de chacune, la réponse rédigée, le chiffre ou la preuve, la phrase de clôture.",
  },
  {
    type: 'checklist',
    title: 'Votre préparation personnelle est correcte si…',
    items: [
      "Vos compétences viennent du décodage d'une offre réelle (verbes et qualités), classées en indispensables et probables.",
      "Votre banque contient au moins 5 histoires complètes, et la colonne F affiche « OK — prête pour l'entretien » pour chacune.",
      "Chaque compétence indispensable a une histoire de réserve dans un contexte différent, notée sur votre fiche d'ancres.",
      "Vous avez fait au moins 3 simulations chronométrées dont une enregistrée en conditions réelles, avec une grille remplie pour chacune.",
      "Votre tableau de progression montre une hausse du total, et vous avez fixé à l'avance un critère de sortie.",
      "Vos axes d'amélioration contiennent chacun un test mesurable (durée, part de l'Action, nombre de tics, nombre de « je »).",
      "Vous avez une réponse honnête, courte et chiffrée pour 3 à 5 questions pièges, dont l'échec et l'écart de profil principal.",
      "Votre checklist de la veille est cochée et votre remerciement du jour J est rédigé à l'avance.",
    ],
  },

  // ─────────────────────── PIÈGES, BILAN, SUITE ───────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Mélanger Situation, Tâche, Action et Résultat sans structure claire — le jury perd le fil avant d'arriver à ce qui compte. Parade : quatre colonnes séparées dans la banque et des transitions annoncées à l'oral.",
      "Ne jamais quantifier le Résultat — une compétence non démontrée est notée comme non prouvée, pas comme « probable ». Parade : lire la colonne F ; chaque Résultat contient un chiffre ou un fait vérifiable.",
      "Se préparer uniquement mentalement — une histoire claire dans la tête devient hésitante ou trop longue à l'oral. Parade : au moins 3 simulations chronométrées, dont une enregistrée.",
      "Raconter le mérite de l'équipe au lieu de sa propre action — le jury demande « qu'avez-vous fait, vous ». Parade : compter les « je » et les « nous » sur l'enregistrement.",
      "Recaser une histoire préparée sur une question qui teste une autre compétence — un jury entraîné le repère immédiatement. Parade : une histoire par compétence et une histoire de réserve en contexte différent.",
      "Une Situation de plus de 2 phrases — c'est le piège numéro un des candidats non préparés. Parade : 25 à 40 mots, ramenée à 15 secondes au chrono.",
      "Réciter un texte appris par cœur — il se perd à la première relance. Parade : 4 ancres par histoire et les 3 chiffres clés.",
      "Éviter les questions pièges ou préparer un faux échec — l'esquive est notée plus bas que l'aveu. Parade : une réponse honnête en STAR court ou en Reconnaître – Expliquer – Projeter.",
      "Remplir la grille de mémoire ou noter l'intention plutôt que ce qui a été dit — le score devient décoratif. Parade : trois passes d'écoute avant la section 3, et un partenaire pour comparer.",
      "Arriver au jour J sans avoir testé la technique, ni les conditions réelles. Parade : simulation 3 à l'heure et sur la plateforme de l'entretien ; checklist de la veille.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez décodé une offre réelle et retenu 5 à 8 compétences classées, et vous savez reconnaître en quelques secondes le type d'une question.",
      "Vous avez rédigé une banque d'histoires STAR dont chaque ligne est chiffrée et affiche « OK — prête pour l'entretien », avec une histoire de réserve pour chaque compétence indispensable.",
      "Vous avez réalisé au moins 3 simulations chronométrées, dont une enregistrée en conditions réelles, et mesuré durée, part de l'Action, tics et « je » contre « nous ».",
      "Vous avez rempli une grille d'auto-évaluation par simulation, avec 3 axes d'amélioration mesurables, et comparé votre notation à celle d'un partenaire.",
      "Vous avez un tableau de progression et un critère de sortie atteint.",
      "Vous avez préparé 3 à 5 réponses honnêtes aux questions pièges et vous savez tenir un silence de 5 secondes.",
      "Vous avez un plan de 7 jours, un pitch de 90 secondes, une checklist du jour J et un remerciement à envoyer sous 24 heures.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer en une phrase pourquoi les entretiens comportementaux dominent le recrutement international.",
      "Je sais nommer les quatre composantes de la méthode STAR et ce que chacune doit contenir.",
      "J'ai identifié les 5 à 8 compétences clés attendues dans mon secteur cible.",
      "J'ai rédigé au moins 5 histoires STAR complètes dans la banque, chacune avec un Résultat chiffré ou observable.",
      "Je me suis enregistré(e) au moins une fois en simulation chronométrée et je me suis réécouté(e) ou revisionné(e).",
      "J'ai rempli une grille d'auto-évaluation après une simulation et identifié au moins un tic de langage ou un point d'amélioration concret.",
      "J'ai préparé une stratégie de réponse honnête pour au moins 3 questions pièges probables pour ce poste.",
      "J'ai mon classeur de banque d'histoires et mes grilles sous la main : ce sont mes outils pour chaque entretien à venir.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 06 — Négociation de Contrat & Conditions d'Expatriation : vous y apprendrez à benchmarker votre valeur salariale (grilles ONU, ONGI et secteur privé), à négocier avec assurance et à lire et sécuriser un contrat international avant de signer — la suite logique d'un entretien réussi.",
  },
]
