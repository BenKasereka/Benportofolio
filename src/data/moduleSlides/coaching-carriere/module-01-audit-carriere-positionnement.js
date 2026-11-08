// Module 01 — Audit de Carrière & Positionnement Stratégique
// Référence pas à pas : chaque procédure du module (dossier de preuves,
// onglet Réalisations, onglet Compétences, benchmarking et ciblage sectoriel,
// profil de poste idéal et stratégie d'approche, feuille de route) est
// détaillée étape par étape et appliquée à un cas fil rouge unique (Joël
// Kabeya, fictif), à partir du contenu source (01-theorie.md, 02-outils.md,
// 03-exercices.md) et des templates du dossier 04-templates.
export default [
  // ─────────────────────────────── OUVERTURE ───────────────────────────────
  {
    type: 'cover',
    title: 'Audit de Carrière & Positionnement Stratégique',
    hook: "À la fin de ce module, vous aurez en main votre bilan de compétences chiffré, votre score de positionnement interprété, 2 à 3 secteurs cibles justifiés, une phrase de profil de poste idéal qui trie les offres à votre place, et une feuille de route datée — exactement ce qu'il faut construire avant d'envoyer la moindre candidature.",
  },
  {
    type: 'objectives',
    items: [
      "Constituer votre dossier de preuves et la chronologie de vos postes à partir de vos contrats, rapports et évaluations, en produisant un tableau poste par poste (période, équipe encadrée, budget, zone, bénéficiaires).",
      "Rédiger 2 à 4 réalisations par poste au format action + contexte + résultat mesurable, en complétant l'onglet « Réalisations » du template Excel avec la preuve associée et la dimension managériale de chacune.",
      "Noter 10 à 14 compétences sur votre confiance réelle et leur pertinence marché à l'aide de grilles d'ancrage, en produisant l'onglet « Compétences » complété et un score de positionnement que vous savez décomposer.",
      "Benchmarker votre cible sur ReliefWeb, Impactpool et LinkedIn, puis choisir 2 à 3 secteurs avec une matrice de ciblage notée, en produisant une grille de 15 à 20 offres analysées et une matrice justifiée.",
      "Formuler votre profil de poste idéal en une phrase vérifiable (intitulé, niveau, secteur, zone) et la convertir en grille de tri des offres et en stratégie d'approche hebdomadaire mesurable.",
      "Rédiger votre feuille de route de carrière (2 pages maximum) avec le template Word : situation actuelle, cible, analyse d'écart, plan d'action daté et date de révision.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Vous ne repartez pas avec des notions : vous repartez avec 6 livrables, produits dans cet ordre, que vous réutiliserez directement aux modules suivants (CV, lettre, entretien, négociation).",
      "Cas fil rouge — Joël Kabeya, 33 ans, basé à Goma (RDC), titulaire d'un master en santé publique, 7 ans d'expérience en suivi-évaluation humanitaire, aujourd'hui Superviseur MEAL dans une ONG internationale (organisations fictives). En 5 mois, il a envoyé 31 candidatures et obtenu 1 seul entretien. Nous auditons son parcours étape par étape, du lundi 16 au vendredi 27 novembre 2026.",
    ],
    bullets: [
      "Livrable 1 — Dossier de preuves et chronologie des postes (Procédure 1).",
      "Livrable 2 — Onglet « Réalisations » complété : 2 à 4 réalisations chiffrées par poste (Procédure 2).",
      "Livrable 3 — Onglet « Compétences » noté et score de positionnement interprété (Procédure 3).",
      "Livrable 4 — Grille de benchmarking de 15 à 20 offres et matrice de ciblage sectoriel (Procédure 4).",
      "Livrable 5 — Phrase de profil de poste idéal, grille de tri des offres et stratégie d'approche (Procédure 5).",
      "Livrable 6 — Feuille de route de carrière Word, 2 pages maximum, datée et signée (Procédure 6).",
    ],
    table: {
      columns: ['Période', 'Poste de Joël', 'Organisation (fictive)', 'Périmètre'],
      rows: [
        ["03/2024 – aujourd'hui", 'Superviseur MEAL', 'Alliance Santé Grands Lacs (ONG internationale)', 'Programme santé-nutrition, 3 provinces, 4,6 M USD'],
        ['07/2021 – 02/2024', 'Chargé de suivi-évaluation', 'Horizons Solidaires International (ONG internationale)', 'Projet eau-hygiène-assainissement (WASH), 1,8 M USD, 3 bailleurs'],
        ['09/2019 – 06/2021', 'Assistant suivi-évaluation', 'Action Communautaire Kivu (ONG nationale)', 'Projet sécurité alimentaire, 4 200 ménages'],
      ],
    },
    tip: "MEAL = Monitoring, Evaluation, Accountability and Learning (suivi, évaluation, redevabilité et apprentissage) : l'intitulé courant des fonctions de suivi-évaluation dans les ONG internationales.",
  },

  // ─────────────────────────── THÉORIE ESSENTIELLE ──────────────────────────
  {
    type: 'stat-callout',
    stat: '90 secondes',
    caption: "Le temps qu'un recruteur consacre à trier votre dossier parmi des centaines d'autres.",
    context: "Sans stratégie claire, un dossier envoyé au hasard se repère dans ce court laps de temps — et se met de côté tout aussi vite. Tout ce module sert à préparer ce que le recruteur doit voir pendant ces 90 secondes.",
  },
  {
    type: 'concept',
    title: 'Pourquoi un audit de carrière précède toute candidature sérieuse',
    body: [
      "Un dossier envoyé sans stratégie se repère en quelques secondes. Ce n'est pas une question de mise en forme : le candidat n'a jamais répondu, pour lui-même, à trois questions simples — qu'ai-je vraiment à offrir, à qui, et pourquoi ce poste précisément. Le recruteur, lui, pose ces trois questions en lisant votre CV, que vous y ayez répondu ou non. Et un recruteur pressé ne devine jamais en votre faveur.",
      "Un candidat qui a fait cet audit — même avec un parcours plus modeste sur le papier — écrit un dossier qui montre une trajectoire cohérente, un objectif clair et une raison précise de postuler ici et pas ailleurs. C'est ce dossier-là qui obtient l'entretien.",
    ],
    example: {
      title: 'Les 3 questions du recruteur, appliquées au dossier de Joël avant audit',
      lines: [
        "1. Qu'a-t-il vraiment à offrir ? → Son CV de 3 pages liste 14 tâches et aucun chiffre : impossible à dire.",
        "2. À qui ? → Il a postulé en ONG, en agence onusienne, en bureau d'études, en institution et en communication : aucun secteur ne ressort.",
        "3. Pourquoi ce poste précisément ? → Même lettre de motivation pour les 31 offres, seul le nom de l'organisation change.",
      ],
    },
    highlight: "L'audit de carrière est la première étape technique de toute recherche d'emploi sérieuse, au même titre qu'un cahier des charges précède un projet — pas un exercice à faire « quand on aura le temps ».",
  },
  {
    type: 'concept',
    title: 'La valeur marché : une évaluation relative, pas un ressenti',
    body: [
      "La plupart des candidats évaluent leur profil à partir de ce qu'ils ressentent avoir accompli — ancienneté, diplômes, engagement personnel. Un recruteur évalue un profil à partir de ce qu'il peut objectivement vérifier et comparer à un besoin précis. L'écart entre ces deux logiques est souvent la cause principale d'une recherche d'emploi qui s'enlise.",
      "La valeur marché n'est pas une note absolue : c'est une évaluation relative à un poste et à un secteur donnés, construite à partir d'éléments vérifiables — expérience réellement pertinente pour le poste visé (pas le nombre total d'années), résultats démontrables et si possible chiffrés, progression de responsabilité visible dans le temps.",
    ],
    example: {
      title: 'Deux profils face à la même offre de MEAL Manager',
      lines: [
        "Candidat A — 8 ans d'expérience, Chargé de suivi-évaluation depuis 8 ans sur le même périmètre, sans encadrement : valeur marché moyenne pour un poste de manager (aucune preuve d'évolution).",
        "Candidat B — 5 ans d'expérience : Assistant (2 ans) → Chargé (2 ans) → Superviseur d'une équipe de 6 (1 an) : valeur marché supérieure pour ce poste, malgré 3 ans de moins.",
      ],
    },
    pitfall: "Additionner vos années d'expérience totales au lieu de compter les années réellement pertinentes pour le poste visé, et confondre ancienneté et niveau de responsabilité.",
  },
  {
    type: 'comparison-table',
    title: 'Ce qui pèse réellement dans un dossier de candidature',
    columns: ['Ce qui pèse réellement', 'Ce qui pèse peu, contrairement à une croyance répandue'],
    rows: [
      ['Résultats quantifiables dans un rôle comparable (« a réduit les délais de livraison de 30 % »)', 'Liste de qualités personnelles non illustrées (« rigoureux, dynamique, motivé »)'],
      ["Progression de responsabilité visible et datée (d'assistant à coordinateur à chef d'équipe)", 'Ancienneté brute dans un même poste sans évolution de périmètre'],
      ["Alignement précis entre l'expérience présentée et l'intitulé du poste visé", "Motivation généraliste (« je suis passionné par l'humanitaire depuis toujours »)"],
      ['Preuves vérifiables : chiffres, résultats, références mobilisables', 'Accumulation de formations courtes sans lien avec une compétence réellement exercée'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Valeur marché', definition: "La valeur objective de votre profil pour un poste et un secteur donnés, telle qu'un recruteur peut la vérifier — par opposition à votre auto-perception." },
      { term: 'Positionnement', definition: "La manière dont vous présentez votre profil pour qu'il corresponde clairement à un type de poste et à un niveau précis, plutôt qu'à « tout ce qui pourrait m'intéresser »." },
      { term: 'Bascule de rôle', definition: "Le passage d'un rôle opérationnel (exécution) à un rôle managérial (supervision, arbitrage, décision) — un changement à démontrer dans le discours et le CV, pas seulement vécu sur le terrain." },
      { term: 'Réalisation quantifiable', definition: "Un fait professionnel formulé en action + contexte + résultat mesurable (volume, délai, personnes, montant ou taux), vérifiable par une pièce ou un témoin." },
      { term: 'Profil de poste idéal', definition: 'La description précise du poste que vous visez réellement — intitulé, niveau de séniorité, secteur, zone géographique — utilisée comme filtre pour choisir où candidater.' },
      { term: 'Benchmarking', definition: "La comparaison de votre profil et de vos prétentions (salaire, niveau, intitulé) à des références réelles du marché, plutôt qu'à une estimation personnelle non vérifiée." },
      { term: 'Score de positionnement', definition: "Le score sur 100 calculé par le template Excel à partir de votre confiance moyenne, de la pertinence marché moyenne et du nombre de réalisations saisies : un signal, pas un verdict." },
      { term: "Analyse d'écart (gap analysis)", definition: "L'identification précise des compétences, expériences ou preuves qui manquent entre votre situation actuelle et le profil visé, et pourquoi chacune est bloquante." },
    ],
  },
  {
    type: 'concept',
    title: 'Les quatre secteurs cibles : ce que chacun vérifie en premier',
    body: "Le module vous demande de choisir 2 à 3 secteurs parmi quatre. Avant de choisir, sachez ce que chacun regarde en priorité : c'est ce qui détermine si votre expérience y est directement transférable.",
    table: {
      columns: ['Secteur', 'Exemples de postes', 'Ce qui est vérifié en premier', 'Où faire la veille'],
      rows: [
        ['ONG nationales et internationales', 'Chargé, Superviseur, Manager, Coordinateur', 'Expérience terrain comparable, résultats chiffrés, contexte similaire (urgence, développement)', 'ReliefWeb, pages carrières des ONG, LinkedIn'],
        ['Onusien (agences des Nations Unies)', 'Postes nationaux (G, NO), internationaux (P), consultants, listes de réserve', "Diplôme et années d'expérience exigés au grade, langues, compétences du référentiel de l'agence", 'Impactpool, portails de carrière des agences'],
        ['Institutionnel', 'Ministères, projets financés par des bailleurs, coopération bilatérale', 'Expérience de gestion de fonds publics, conformité aux procédures, qualité des rapports', 'Sites des bailleurs et ministères, avis de recrutement des projets'],
        ['Privé', "Bureaux d'études, cabinets de conseil, entreprises (opérations, RSE)", 'Résultats en coûts, délais et qualité ; capacité à livrer pour un client', 'LinkedIn, sites des cabinets, réseau professionnel'],
      ],
    },
    tip: "Chaque secteur a son vocabulaire : « bénéficiaires » en ONG, « populations cibles » en institutionnel, « clients » dans le privé. Cibler 2 à 3 secteurs, c'est préparer 2 à 3 discours — pas 6.",
  },
  {
    type: 'concept',
    title: "La bascule de rôle : passer d'une tâche à une responsabilité",
    body: "Un recruteur qui cherche un manager cherche des preuves de supervision d'équipe, de gestion budgétaire et de prise de décision. Ces preuves existent souvent dans votre parcours, mais rédigées comme des tâches, elles restent invisibles. La même expérience, reformulée, change de catégorie.",
    table: {
      columns: ['Formulation « tâche » (lue comme opérationnelle)', 'Formulation « responsabilité » (lue comme managériale)'],
      rows: [
        ['Supervision des livraisons', "Supervision d'une équipe de 8 personnes"],
        ['Gestion des stocks', "Arbitrage d'un budget logistique de 250 000 USD"],
        ['Suivi des ruptures', 'Décision unilatérale lors d\'une rupture de stock critique, sans rupture de service'],
        ["Gestion de l'équipe d'enquêteurs (Joël)", 'Supervision de 6 personnes sur un programme de 4,6 M USD, 30 rapports mensuels sur 30 livrés à date'],
      ],
    },
    tip: "Pour chaque poste, cherchez 3 types de moments : j'ai encadré des personnes, j'ai géré ou arbitré de l'argent, j'ai décidé sans attendre mon supérieur. Même informels, ce sont vos preuves managériales.",
  },
  {
    type: 'case-study',
    title: 'Cas vécu — « Cinq ans de terrain, zéro réponse pour un poste de management »',
    scenario: "Amina a cinq ans d'expérience en logistique humanitaire de terrain : responsable d'entrepôt, puis coordinatrice logistique sur deux missions successives. Elle a supervisé une équipe de 8 personnes, arbitré un budget logistique de 250 000 USD sur sa dernière mission et pris seule des décisions stratégiques lors d'une rupture de stock critique. Elle postule depuis quatre mois à des postes de Supply Chain Manager, sans un seul entretien.",
    steps: [
      { title: 'Ce que lit le recruteur', body: "Son CV liste missions, tâches quotidiennes (« supervision des livraisons », « gestion des stocks ») et formations — jamais une responsabilité de management, un budget arbitré ou une décision prise sous sa seule autorité. Il lit une exécutante compétente, pas une manager." },
      { title: 'Le vrai problème', body: "Ce n'est pas son expérience, c'est son positionnement : la réalité de son travail a basculé vers un rôle managérial, mais pas son discours." },
      { title: 'La correction', body: "Aucune nouvelle expérience n'est nécessaire : reprendre chaque mission avec la grille de réalisations quantifiables, isoler explicitement les moments managériaux même informels, et reformuler tout le discours autour de ces preuves." },
    ],
    result: "Le même parcours, sans une seule journée d'expérience supplémentaire, devient lisible comme un dossier de candidate managériale. Vous ferez ce travail pour Amina dans l'exercice noté ; Joël, notre fil rouge, présente exactement le même symptôme.",
  },
  {
    type: 'concept',
    title: 'La méthode : 6 procédures, dans cet ordre',
    body: "Chaque procédure produit l'entrée de la suivante. Comptez environ 12 heures réparties sur 2 semaines. Ne sautez pas d'étape : rédiger le profil de poste idéal avant d'avoir benchmarké, c'est écrire un vœu.",
    table: {
      columns: ['Procédure', 'Entrée', 'Livrable produit', 'Durée indicative'],
      rows: [
        ["1. Préparer l'audit", 'Contrats, rapports, évaluations, CV actuel', 'Dossier de preuves, chronologie, diagnostic de départ, aspirations', '2 h 30'],
        ['2. Onglet Réalisations', 'Dossier de preuves, chronologie', '6 à 12 réalisations chiffrées, prouvées, qualifiées', '3 h'],
        ['3. Onglet Compétences', 'Réalisations, 5 offres cibles', '10 à 14 compétences notées, score lu', '1 h 30'],
        ['4. Benchmarking et ciblage', 'ReliefWeb, Impactpool, LinkedIn', 'Grille de 15 à 20 offres, matrice sectorielle, niveau calibré', '3 h'],
        ["5. Profil de poste idéal et approche", 'Matrice, benchmark, aspirations', "Phrase cible, grille de tri, stratégie d'approche", '1 h'],
        ['6. Feuille de route', 'Tous les livrables précédents', 'Feuille de route Word de 2 pages maximum', '2 h'],
      ],
    },
    tip: "Bloquez ces créneaux dans votre agenda comme des réunions : Joël a réservé 2 soirées et 1 samedi matin par semaine pendant 2 semaines.",
  },

  // ──────────────── PROCÉDURE 1 — PRÉPARER L'AUDIT (4 étapes) ────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Rassembler votre dossier de preuves',
    intro: "Pourquoi : un recruteur ne croit que ce qui est vérifiable. Avant d'écrire une ligne, réunissez tout ce qui prouve ce que vous avez fait. Entrées : votre messagerie, vos dossiers partagés, vos contrats.",
    steps: [
      {
        title: "Créer l'arborescence",
        actions: [
          "Créez un dossier « Audit carrière 2026 » sur votre ordinateur ou votre espace cloud.",
          "Créez un sous-dossier par poste occupé, nommé « AAAA-MM_Intitulé_Organisation » (ex. « 2024-03_Superviseur-MEAL_ASGL »).",
          "Ajoutez deux sous-dossiers : « 00_Offres-cibles » et « 00_CV-actuel ».",
        ],
      },
      {
        title: 'Collecter les pièces poste par poste',
        actions: [
          'Récupérez le contrat et la description de poste (termes de référence) de chaque poste.',
          'Récupérez vos évaluations annuelles de performance et vos lettres de recommandation.',
          'Récupérez 2 à 3 rapports que vous avez rédigés ou alimentés (rapports bailleurs, trimestriels, d\'enquête).',
          "Cherchez dans votre messagerie les mots « félicitations », « merci », « budget », « équipe », « validé » : chaque message trouvé est une preuve potentielle.",
          "Enregistrez en PDF, dans « 00_Offres-cibles », 5 offres qui correspondent à ce que vous visez aujourd'hui (cible provisoire).",
        ],
      },
      {
        title: 'Vérifier la confidentialité',
        actions: [
          "Ne copiez aucune donnée nominative de bénéficiaires ni aucun document classé confidentiel.",
          'Gardez uniquement des chiffres agrégés : nombre de ménages, budget total, délais.',
        ],
      },
    ],
    example: {
      title: 'Dossier de preuves de Joël — état au lundi 16/11/2026',
      lines: [
        '2019-09_Assistant-SE_ACK : contrat, description de poste, rapport trimestriel T4 2020, attestation de fin de contrat.',
        '2021-07_Charge-SE_HSI : description de poste, cadre de mesure du projet WASH (32 indicateurs), rapport de baseline, 2 évaluations annuelles.',
        '2024-03_Superviseur-MEAL_ASGL : contrat, organigramme MEAL, suivi budgétaire MEAL 2025, note interne de suspension d\'enquête (mai 2025).',
        "00_Offres-cibles : 5 offres « MEAL Manager » d'ONG internationales en Afrique centrale.",
        '00_CV-actuel : le CV de 3 pages envoyé aux 31 offres.',
      ],
    },
    result: "Un dossier par poste contenant au minimum la description de poste et une pièce chiffrée (rapport, budget, évaluation). Si un poste n'a aucune pièce chiffrée, notez-le : vous reconstituerez ses chiffres à la Procédure 2.",
    pitfall: "Attendre d'avoir « tout retrouvé » pour avancer : 80 % des pièces suffisent. Fixez-vous 1 heure maximum pour cette étape.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Construire la chronologie de vos postes',
    intro: "Pourquoi : la progression de responsabilité est l'un des critères qui pèsent réellement. Elle ne se voit que si vous mettez vos postes à plat, avec le même gabarit. Entrée : le dossier de preuves.",
    steps: [
      {
        title: 'Préparer le tableau',
        actions: [
          'Ouvrez une feuille Excel vierge et nommez l\'onglet « Chronologie ».',
          'Créez 7 colonnes : Période, Intitulé, Organisation, Équipe encadrée, Budget géré ou suivi, Zone / bénéficiaires, Rattachement hiérarchique.',
        ],
      },
      {
        title: 'Remplir une ligne par poste',
        actions: [
          'Partez du poste le plus récent.',
          'Saisissez des chiffres, pas des adjectifs : « 6 personnes », « 120 000 USD », « 3 provinces ».',
          "Si vous n'avez encadré personne, écrivez « 0 » : un zéro est une information, une case vide ne l'est pas.",
        ],
      },
      {
        title: 'Lire la progression',
        actions: [
          'Comparez la colonne « Équipe encadrée » de bas en haut : augmente-t-elle ?',
          'Faites de même pour le budget et pour la zone.',
          'Coloriez en vert chaque colonne qui progresse, en orange chaque colonne qui stagne.',
        ],
      },
    ],
    table: {
      columns: ['Période', 'Intitulé', 'Équipe encadrée', 'Budget', 'Zone / bénéficiaires'],
      rows: [
        ['03/2024 – auj.', 'Superviseur MEAL', '6 (5 enquêteurs, 1 assistant data)', 'Budget MEAL 120 000 USD géré', '3 provinces, programme de 4,6 M USD'],
        ['07/2021 – 02/2024', 'Chargé de suivi-évaluation', '0 permanent ; 12 enquêteurs temporaires coordonnés', 'Aucun budget propre', '2 zones de santé, projet de 1,8 M USD'],
        ['09/2019 – 06/2021', 'Assistant suivi-évaluation', '0 (a formé 18 relais communautaires)', 'Aucun', '4 200 ménages suivis'],
      ],
    },
    result: "Joël voit enfin noir sur blanc sa progression : de 0 à 6 personnes encadrées et de 0 à 120 000 USD de budget géré en 5 ans. Rien de cela n'apparaît dans son CV actuel : premier écart de positionnement repéré.",
    tip: 'Ce tableau vous resservira tel quel au module 02 pour structurer la rubrique Expérience de votre CV.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Faire le test des 90 secondes et le bilan de vos candidatures',
    intro: "Pourquoi : mesurer d'où vous partez, pour pouvoir prouver plus tard que votre positionnement s'est amélioré. Entrées : votre CV actuel et la liste de vos candidatures des 6 derniers mois.",
    steps: [
      {
        title: 'Test des 90 secondes sur votre CV',
        actions: [
          'Ouvrez votre CV actuel en plein écran ou imprimez-le.',
          'Lancez un minuteur de 90 secondes et lisez-le comme un recruteur qui a 200 dossiers à trier.',
          'À la sonnerie, fermez-le et répondez par écrit : (1) quel poste vise ce candidat ? (2) à quel niveau ? (3) quelles preuves chiffrées ai-je retenues ?',
          'Mieux : faites faire le test à un collègue qui ne connaît pas votre parcours.',
        ],
      },
      {
        title: 'Reconstituer votre journal de candidatures',
        actions: [
          'Dans Excel, une ligne par candidature : Date, Intitulé, Organisation, Secteur, Niveau, Réponse (Aucune / Refus / Entretien / Offre).',
          `Calculez le taux de réponse : =NB.SI(F:F;"Entretien")/NBVAL(B:B)-1 sur un en-tête en ligne 1, ou plus simplement nombre d'entretiens ÷ nombre de candidatures × 100.`,
          'Comptez le nombre de secteurs et le nombre d\'intitulés différents visés.',
        ],
      },
    ],
    example: {
      title: 'Diagnostic de départ de Joël',
      lines: [
        'Test des 90 secondes (fait par une collègue) : « Chargé de suivi-évaluation polyvalent, niveau officer, aucun chiffre retenu ».',
        "Journal : 31 candidatures en 5 mois — 9 MEAL Manager (ONG), 6 Program Manager, 5 analystes en agence onusienne, 4 bureaux d'études privés, 4 postes institutionnels, 3 postes de communication.",
        "Réponses : 1 entretien (pour un poste de MEAL Officer, inférieur à son niveau actuel), 0 offre.",
        'Taux de réponse : 1 ÷ 31 × 100 = 3,2 %. Secteurs visés : 5. Intitulés différents : 11.',
      ],
    },
    result: "Vous avez un point de départ chiffré (taux de réponse, nombre de secteurs, nombre d'intitulés) que vous recalculerez à la date de révision. Repère : au-delà de 3 secteurs ou de 4 intitulés différents, le diagnostic « candidature dispersée » est posé.",
    pitfall: "Faire le test en connaissant déjà la réponse : vous « verrez » ce que vous savez. Le regard d'un tiers est bien plus fiable que le vôtre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Formaliser vos aspirations et vos contraintes',
    intro: "Pourquoi : le ciblage croise expérience réelle ET aspirations. Une cible parfaite sur le papier que vous refuserez au moment de l'offre vous fait perdre des mois. Entrée : 30 minutes au calme — avec votre famille si une mobilité est envisagée.",
    steps: [
      {
        title: 'Aspirations : ce que vous voulez',
        actions: [
          "Écrivez les 3 activités de votre travail actuel qui vous donnent le plus d'énergie, puis les 3 qui vous en coûtent le plus.",
          'Écrivez le niveau de responsabilité visé à 2 ans : encadrer ? décider ? conseiller ?',
          'Écrivez le type de structure souhaité : taille, secteur, mission.',
        ],
      },
      {
        title: "Contraintes : ce qui n'est pas négociable",
        actions: [
          'Mobilité : national, régional, expatriation, télétravail — et à partir de quand.',
          "Situation familiale : lieu d'affectation où la famille est autorisée ou non.",
          'Plancher de rémunération et durée minimale de contrat acceptables.',
          "Langues de travail réellement maîtrisées aujourd'hui.",
        ],
      },
      {
        title: 'Classer',
        actions: [
          'Marquez chaque élément « non négociable » ou « souhaitable ».',
          "Limitez-vous à 3 non négociables : au-delà, plus aucune offre ne passe le filtre.",
        ],
      },
    ],
    example: {
      title: 'Aspirations et contraintes de Joël',
      lines: [
        "Énergie + : concevoir les dispositifs de suivi, former l'équipe, présenter les résultats à la direction.",
        'Énergie − : saisie et nettoyage de données répétitifs, rapports de pure compilation.',
        'Responsabilité à 2 ans : diriger une unité MEAL et peser sur les décisions de programme.',
        "Non négociables (3) : contrat ≥ 12 mois ; hors RDC uniquement sur un lieu d'affectation famille autorisée ; rémunération ≥ actuelle + 15 %.",
        "Souhaitable : rester dans la région des Grands Lacs ; organisation de plus de 200 salariés.",
        'Langues : français courant, anglais B1 (intermédiaire).',
      ],
    },
    tip: "Les activités qui vous coûtent de l'énergie sont un signal : si le poste visé en est fait à 60 %, vous ne le tiendrez pas longtemps, même bien payé.",
  },

  // ──────────── PROCÉDURE 2 — ONGLET « RÉALISATIONS » (6 étapes) ────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Ouvrir et préparer le template de bilan de compétences',
    intro: "Le classeur bilan-competences-positionnement-carriere.xlsx contient 3 onglets : « Réalisations » (1/3), « Compétences » (2/3) et « Synthèse positionnement » (3/3), entièrement calculé. Vous commencez toujours par les réalisations, jamais par les qualités.",
    steps: [
      {
        title: 'Enregistrer votre copie',
        actions: [
          'Ouvrez le fichier depuis le dossier 04-templates du module.',
          "Faites Fichier > Enregistrer sous, et nommez-le « NOM_Prenom_bilan-positionnement_AAAA-MM.xlsx » dans votre dossier « Audit carrière 2026 ».",
          "Ne travaillez jamais dans l'original : il vous servira à la révision.",
        ],
      },
      {
        title: "Repérer les colonnes de l'onglet « Réalisations »",
        actions: [
          'A — Poste occupé ; B — Période ; C — Réalisation quantifiable (action + contexte + résultat mesurable).',
          'D — Chiffre / preuve associée ; E — Compétence managériale démontrée (oui/non + laquelle) ; F — À réutiliser dans le CV ? (liste déroulante Oui/Non).',
          'Les lignes 6 à 21 accueillent jusqu\'à 16 réalisations : largement suffisant.',
        ],
      },
      {
        title: 'Respecter les formules',
        actions: [
          "Ne modifiez aucune cellule de l'onglet « Synthèse positionnement » en dehors de C5, C6 et C7.",
          'N\'insérez pas de lignes au-dessus de la ligne 6 : les formules visent les plages C6:C21 (Réalisations) et C6:D19 (Compétences).',
        ],
      },
    ],
    result: 'Votre copie est enregistrée et nommée, et vous savez exactement ce que chaque colonne attend.',
    pitfall: "Écrire une réalisation dans la colonne A ou fusionner des cellules : le compteur de réalisations (NB.SI sur C6:C21) ne la verra pas et votre score sera faussé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Extraire la matière brute de chaque poste',
    intro: "Pourquoi : on ne rédige pas une réalisation de mémoire, on l'extrait du dossier de preuves avec des questions systématiques. Entrées : dossier de preuves et chronologie.",
    steps: [
      {
        title: "Poser les 6 questions d'extraction, poste par poste",
        actions: [
          'Quel problème ou besoin existait au départ ?',
          "Qu'ai-je fait personnellement, moi, et non l'équipe ?",
          'Avec quels moyens : combien de personnes, quel budget, quel délai ?',
          'Pour qui : combien de bénéficiaires, de sites, de partenaires ?',
          "Qu'est-ce qui a changé grâce à moi : avant / après ?",
          'Quelle pièce, ou quel témoin, le prouve ?',
        ],
      },
      {
        title: 'Noter en vrac',
        actions: [
          'Notez toutes les réponses en style télégraphique dans un brouillon, sans filtrer.',
          "Visez 5 à 8 faits bruts par poste : vous n'en garderez que 2 à 4.",
        ],
      },
      {
        title: 'Souligner les moments managériaux',
        actions: [
          "Soulignez chaque fait où vous avez encadré des personnes, géré ou arbitré un budget, décidé sans attendre votre supérieur, représenté l'organisation ou formé des personnes.",
          'Ces faits soulignés sont prioritaires, même si le rôle était informel.',
        ],
      },
    ],
    example: {
      title: 'Faits bruts de Joël — poste Superviseur MEAL',
      lines: [
        '[souligné] Encadre 5 enquêteurs et 1 assistant data depuis 03/2024 (organigramme).',
        '[souligné] Budget MEAL 2025 : 120 000 USD, exécuté à 96 % (suivi budgétaire).',
        '[souligné] Ligne verte et boîtes à suggestions lancées en 04/2025 : 1 340 retours en 12 mois, délai de réponse de 19 à 7 jours.',
        "[souligné] Mai 2025 : 9 % de doublons détectés dans l'enquête nutrition, coordinateur absent ; j'ai suspendu l'enquête et réorganisé la collecte (note interne).",
        'Rapports mensuels : 30 sur 30 livrés à date.',
        'Participe aux réunions du cluster santé (aucun résultat propre identifié).',
      ],
    },
    tip: "Si vous bloquez, relisez vos évaluations annuelles : votre superviseur y a souvent écrit vos meilleures réalisations à votre place.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Rédiger chaque réalisation : action + contexte + résultat mesurable',
    intro: "C'est le cœur du module : chaque réalisation deviendra une ligne de CV (module 02) et une réponse d'entretien (module 05). Une bonne réalisation se lit en 5 secondes et se vérifie en un appel.",
    steps: [
      {
        title: 'Appliquer la formule',
        actions: [
          'Commencez par un verbe d\'action au participe passé, sans sujet : Supervisé, Conçu, Piloté, Réduit, Arbitré, Décidé, Mis en place, Formé.',
          'Ajoutez le périmètre et le contexte : pour qui, où, avec quelle contrainte.',
          'Terminez par le résultat chiffré : volume, délai, pourcentage ou montant.',
          'Visez 1 à 2 lignes, soit 25 à 40 mots.',
        ],
      },
      {
        title: 'Transformer les tâches en réalisations',
        actions: [
          'Reprenez chaque fait souligné à l\'étape précédente.',
          "Supprimez « en charge de », « responsable de », « participation à » : ils décrivent un poste, pas un résultat.",
          "Si un fait n'a pas de résultat, mettez-le en réserve : ce n'est pas encore une réalisation.",
        ],
      },
      {
        title: 'Saisir dans le template',
        actions: [
          'Colonne A : intitulé exact du poste ; colonne B : période au format MM/AAAA – MM/AAAA.',
          'Colonne C : la réalisation rédigée, une seule par ligne.',
          'Regroupez les lignes par poste, du plus récent au plus ancien.',
        ],
      },
    ],
    example: {
      title: 'Avant / après — Joël',
      lines: [
        "AVANT : « Suivi des données de nutrition et gestion de l'équipe d'enquêteurs. »",
        'APRÈS : « Supervisé une équipe de 6 personnes (5 enquêteurs, 1 assistant data) sur un programme santé-nutrition de 4,6 M USD couvrant 3 provinces, avec 30 rapports mensuels sur 30 livrés à date. »',
        'AVANT : « Responsable du mécanisme de plaintes. »',
        'APRÈS : « Mis en place un mécanisme de plaintes et retours (ligne verte, boîtes à suggestions) : 1 340 retours traités en 12 mois, délai moyen de réponse ramené de 19 à 7 jours. »',
        "REJETÉ : « Participé aux réunions du cluster santé » — aucune action propre, aucun résultat.",
      ],
    },
    pitfall: "S'attribuer le résultat de toute l'équipe sans préciser votre rôle : en entretien, la question « qu'avez-vous fait, vous ? » arrivera, et la réponse doit coller mot pour mot à la ligne écrite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Trouver et calculer le chiffre qui manque',
    intro: "Règle du guide : si vous ne trouvez aucun chiffre pour une réalisation, cherchez-en un avant de continuer. Il existe presque toujours l'un des 5 types de chiffres ci-dessous.",
    steps: [
      {
        title: 'Passer en revue les 5 types de chiffres',
        actions: [
          'Volume : ménages, bénéficiaires, sites, rapports, formulaires, articles.',
          'Délai : durée avant / après, jours d\'avance sur le calendrier.',
          'Personnes : membres d\'équipe encadrés, personnes formées, partenaires coordonnés.',
          'Argent : budget géré, montant arbitré, économie réalisée.',
          'Taux : erreurs, exécution budgétaire, couverture, satisfaction.',
        ],
      },
      {
        title: 'Calculer correctement une variation',
        actions: [
          'Variation en % = (valeur avant − valeur après) ÷ valeur avant × 100.',
          "Quand un taux passe d'un pourcentage à un autre, exprimez l'écart en points de pourcentage.",
          'Arrondissez toujours à la baisse.',
        ],
      },
      {
        title: 'Quand le chiffre exact est introuvable',
        actions: [
          'Reconstituez une estimation prudente à partir d\'une pièce (ex. nombre de rapports × nombre de sites).',
          'Signalez-la par « environ », « plus de » ou « près de ».',
          "Notez en colonne D l'origine de l'estimation : vous devez pouvoir la justifier en entretien.",
        ],
      },
    ],
    example: {
      title: 'Calculs de Joël, ligne par ligne',
      lines: [
        'Délai de transmission des données : 21 jours → 4 jours. (21 − 4) ÷ 21 × 100 = 80,9 % → « réduit de plus de 80 % ».',
        "Taux d'erreur de saisie : 14 % → 5 % = baisse de 9 points de pourcentage (et non « baisse de 9 % »).",
        'Délai de réponse aux plaintes : 19 → 7 jours. (19 − 7) ÷ 19 × 100 = 63,2 % → « réduit de 63 % » ou « ramené de 19 à 7 jours ».',
        'Exécution budgétaire : 115 200 USD dépensés ÷ 120 000 USD prévus × 100 = 96 %.',
        'Baseline : 1 150 ménages enquêtés en 6 semaines au lieu de 8 prévues → « livrée avec 2 semaines d\'avance ».',
      ],
    },
    pitfall: "Gonfler un chiffre : un recruteur humanitaire peut appeler votre ancien superviseur. Un chiffre faux découvert à la vérification des références élimine une candidature plus sûrement qu'une absence de chiffre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Compléter les colonnes D, E et F',
    intro: "Les trois dernières colonnes transforment une liste en outil de tri : la preuve (D), la dimension managériale (E) et le choix pour le CV (F).",
    steps: [
      {
        title: 'Colonne D — Chiffre / preuve associée',
        actions: [
          "Écrivez le chiffre clé et la pièce qui le prouve : « 120 000 USD — suivi budgétaire MEAL 2025 ».",
          "Si la preuve est un témoin, écrivez sa fonction : « confirmable par le coordinateur programme ».",
        ],
      },
      {
        title: 'Colonne E — Compétence managériale démontrée',
        actions: [
          "Écrivez « Oui — » suivi de la compétence : supervision d'équipe, gestion budgétaire, décision, représentation, formation.",
          'Écrivez « Non » si la réalisation est purement technique : c\'est normal, elle reste utile.',
        ],
      },
      {
        title: 'Colonne F — À réutiliser dans le CV ?',
        actions: [
          'Cliquez sur la cellule, puis sur la flèche de la liste déroulante, et choisissez Oui ou Non.',
          'Choisissez « Oui » si la réalisation sert directement votre cible provisoire, « Non » sinon.',
          'Visez au moins 6 « Oui » au total, dont 2 sur le poste le plus récent.',
        ],
      },
    ],
    table: {
      columns: ['A — Poste', 'C — Réalisation (extrait)', 'D — Preuve', 'E — Managérial', 'F — CV'],
      rows: [
        ['Superviseur MEAL', "Géré l'exécution du budget MEAL de 120 000 USD, exécuté à 96 % sans dépassement de ligne", 'Suivi budgétaire MEAL 2025', 'Oui — gestion budgétaire', 'Oui'],
        ['Superviseur MEAL', "Décidé, en l'absence du coordinateur, de suspendre puis réorganiser une enquête nutritionnelle après détection de 9 % de doublons", 'Note interne de mai 2025', 'Oui — décision sous sa seule autorité', 'Oui'],
        ['Chargé de suivi-évaluation', 'Produit 10 rapports trimestriels bailleurs, tous acceptés sans demande de correction de fond', "Courriels d'acceptation des bailleurs", 'Non', 'Oui'],
      ],
    },
    result: 'Chaque ligne répond désormais à trois questions : est-ce prouvé ? est-ce managérial ? est-ce utile pour ma cible ?',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: "Contrôler la qualité de l'onglet Réalisations",
    intro: "Avant de passer aux compétences, passez chaque ligne au crible de 4 tests. Une ligne qui échoue à un test est réécrite, pas gardée « faute de mieux ».",
    steps: [
      { title: 'Test « Et alors ? »', actions: ["Lisez la ligne et demandez « et alors ? ». Si la réponse (le résultat) n'est pas déjà écrite, complétez-la."] },
      { title: 'Test de vérifiabilité', actions: ['Pour chaque chiffre, pointez la pièce de votre dossier de preuves ou le témoin qui peut le confirmer.'] },
      { title: 'Test du « je »', actions: ["Vérifiez que l'action décrite est la vôtre : « Supervisé », pas « l'équipe a réalisé »."] },
      {
        title: 'Test de couverture',
        actions: [
          'Comptez 2 à 4 réalisations par poste, et au moins 3 « Oui » en colonne E si vous visez un poste managérial.',
          "Regardez la cellule C10 de l'onglet « Synthèse positionnement » : elle compte vos réalisations saisies (le score les plafonne à 8).",
        ],
      },
    ],
    example: {
      title: "Onglet Réalisations de Joël après contrôle",
      lines: [
        'Superviseur MEAL : 4 réalisations, 4 « Oui » en colonne E.',
        "Chargé de suivi-évaluation : 3 réalisations, 1 « Oui » en E (coordination de 12 enquêteurs temporaires).",
        'Assistant suivi-évaluation : 2 réalisations, 1 « Oui » en E (formation de 18 relais communautaires).',
        'Total : 9 réalisations, dont 6 managériales, toutes marquées « Oui » pour le CV. Cellule C10 = 9.',
      ],
    },
    result: "Toutes les lignes passent les 4 tests : votre onglet « Réalisations » est terminé. C'est la matière première de votre CV et de vos réponses d'entretien.",
  },

  // ───────────── PROCÉDURE 3 — ONGLET « COMPÉTENCES » (5 étapes) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Lister vos compétences à partir des réalisations et des offres',
    intro: "Pourquoi : on ne liste pas ses compétences « de tête ». On les déduit de ce qu'on a prouvé (Réalisations) et de ce que le marché demande (offres cibles). Entrées : onglet Réalisations et les 5 offres du dossier « 00_Offres-cibles ».",
    steps: [
      {
        title: 'Extraire des réalisations',
        actions: [
          'Pour chaque réalisation, notez la ou les compétences qu\'elle prouve (ex. « baseline de 1 150 ménages » → conception d\'évaluations).',
          'Fusionnez les doublons.',
        ],
      },
      {
        title: 'Extraire des offres cibles',
        actions: [
          'Ouvrez les 5 offres et surlignez chaque compétence des rubriques « profil recherché » ou « qualifications ».',
          "Ajoutez à votre liste celles qui n'y sont pas encore, même si vous êtes faible dessus : c'est précisément ce qui révélera l'écart.",
        ],
      },
      {
        title: "Saisir dans l'onglet « Compétences »",
        actions: [
          'Colonne A, lignes 6 à 19 : une compétence par ligne, 10 à 14 au total.',
          'Formulez-les précisément : « Collecte de données mobile (Kobo/ODK) » plutôt que « informatique ».',
        ],
      },
    ],
    example: {
      title: 'Origine des 13 compétences de Joël',
      lines: [
        '9 déduites de ses réalisations : cadres logiques et plans de suivi, collecte Kobo/ODK, analyse Excel/Power Query, conception d\'évaluations, mécanisme de plaintes, supervision d\'équipe, budget MEAL, formation d\'équipes, rapports bailleurs.',
        '3 ajoutées depuis les offres cibles : tableaux de bord Power BI, coordination multi-partenaires, anglais professionnel.',
        "1 compétence qui lui tient à cœur : animation radio communautaire.",
      ],
    },
    pitfall: "Lister des qualités (« rigoureux », « dynamique ») : ce ne sont pas des compétences notables par un recruteur. Une compétence se prouve par une réalisation ou une certification.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Typer chaque compétence (colonne B)',
    intro: "La liste déroulante de la colonne B propose trois types. Les distinguer est indispensable pour préparer la bascule de rôle : la Synthèse compte vos compétences managériales en C11.",
    steps: [
      {
        title: 'Appliquer les définitions',
        actions: [
          "Opérationnelle : exécution technique du métier (ex. collecte Kobo, analyse Excel).",
          'Managériale : encadrer, budgéter, arbitrer, décider, former, représenter.',
          'Transférable : utile dans plusieurs métiers et secteurs (rédaction, coordination, langues).',
        ],
      },
      {
        title: 'Sélectionner dans la liste',
        actions: ["Cliquez sur la cellule B, puis sur la flèche, et choisissez le type. Ne tapez pas à la main : une faute de frappe (« Managerial ») fausse le compteur C11."],
      },
      {
        title: "Vérifier l'équilibre",
        actions: ['Si vous visez un poste managérial, il vous faut au moins 3 compétences « Managériale » appuyées chacune sur une réalisation.'],
      },
    ],
    table: {
      columns: ['Compétence de Joël (A)', 'Type (B)', 'Prouvée par'],
      rows: [
        ['Cadres logiques et plans de suivi', 'Opérationnelle', 'Cadre de mesure de 32 indicateurs (projet WASH)'],
        ['Collecte de données mobile (Kobo/ODK)', 'Opérationnelle', 'Numérisation du suivi de 4 200 ménages'],
        ['Analyse de données Excel / Power Query', 'Opérationnelle', 'Rapports trimestriels et mensuels'],
        ['Tableaux de bord Power BI', 'Opérationnelle', 'Tableaux simples réalisés seul'],
        ['Conception d\'évaluations (baseline / endline)', 'Opérationnelle', 'Baseline de 1 150 ménages'],
        ['Mécanisme de plaintes et redevabilité', 'Opérationnelle', '1 340 retours traités en 12 mois'],
        ["Supervision d'équipe", 'Managériale', 'Équipe de 6 personnes depuis 03/2024'],
        ['Pilotage d\'un budget MEAL', 'Managériale', '120 000 USD exécutés à 96 %'],
        ["Formation et coaching d'équipes", 'Managériale', '18 relais formés, erreurs − 9 points'],
        ['Rédaction de rapports bailleurs', 'Transférable', '10 rapports acceptés sans correction de fond'],
        ['Coordination multi-partenaires', 'Transférable', 'Projet WASH à 3 bailleurs'],
        ['Animation radio communautaire', 'Transférable', 'Émissions de sensibilisation (2020)'],
        ['Anglais professionnel', 'Transférable', 'Lecture de rapports, pas de réunion menée'],
      ],
    },
    result: 'Joël obtient 3 compétences « Managériale » (cellule C11 = 3), chacune appuyée sur une réalisation chiffrée.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Noter votre niveau de confiance réel (colonne C)',
    intro: "Pourquoi : la confiance se note sur des faits, pas sur une envie. Sans grille commune, tout le monde note tout à 4. Les cellules C6 à C19 n'acceptent que des valeurs de 1 à 5.",
    steps: [
      {
        title: 'Utiliser la grille d\'ancrage',
        actions: [
          '1 — Notions théoriques, jamais pratiqué seul.',
          '2 — Pratiqué sous supervision ou ponctuellement.',
          '3 — Pratiqué seul sur des cas courants.',
          '4 — Pratiqué seul sur des cas complexes, avec un résultat chiffré à montrer.',
          '5 — Référent : vous formez d\'autres personnes ou d\'autres équipes vous sollicitent.',
        ],
      },
      {
        title: 'Noter',
        actions: [
          'Pour chaque compétence, lisez la grille de bas en haut et arrêtez-vous au dernier niveau dont vous avez la preuve.',
          'Saisissez un entier de 1 à 5 en colonne C.',
          'En cas d\'hésitation entre deux notes, retenez la plus basse.',
        ],
      },
    ],
    example: {
      title: 'Quelques notes de Joël et leur justification',
      lines: [
        'Collecte Kobo/ODK = 5 : il a formé 18 relais et deux autres projets le sollicitent.',
        'Tableaux de bord Power BI = 3 : tableaux réalisés seul, mais simples et non publiés.',
        "Pilotage d'un budget MEAL = 3 : il exécute et suit, mais n'a jamais construit un budget de A à Z.",
        'Anglais professionnel = 2 : lit les rapports, ne mène pas de réunion en anglais.',
        'Somme des 13 notes de confiance : 49.',
      ],
    },
    pitfall: "Se sous-noter par modestie ou se surnoter par ambition : dans les deux cas l'écart calculé sera faux. Faites relire vos notes par un collègue qui vous a vu travailler.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Noter la pertinence marché (colonne D)',
    intro: "Pourquoi : la pertinence ne dépend pas de vous mais de la cible. Vous la mesurez dans les 5 offres cibles, pas dans votre ressenti. La colonne E calcule ensuite confiance × pertinence (score sur 25).",
    steps: [
      {
        title: 'Compter les occurrences dans les 5 offres',
        actions: [
          'Pour chaque compétence, comptez dans combien des 5 offres elle apparaît.',
          'Appliquez la grille : citée dans 5 offres, ou dans 4 et exigée = 5 ; citée dans 3 ou 4 = 4 ; dans 2 = 3 ; dans 1, ou seulement en « atout » = 2 ; dans aucune = 1.',
          'Saisissez la note en colonne D.',
        ],
      },
      {
        title: 'Lire la colonne E (calculée)',
        actions: [
          'Repère de lecture : score ≥ 16 = atout à mettre en avant.',
          'Pertinence ≥ 4 et confiance ≤ 3 = écart à combler (vous le reprendrez en Procédure 6).',
          'Pertinence ≤ 2 = compétence à retirer de la tête de votre CV, même si elle vous est chère.',
        ],
      },
    ],
    example: {
      title: 'Pertinence chez Joël',
      lines: [
        'Anglais professionnel : cité dans 5 offres sur 5, exigé dans 4 → pertinence 5 ; confiance 2 → score 10 : écart majeur.',
        'Supervision d\'équipe : citée dans 5 offres sur 5 → 5 ; confiance 4 → score 20 : atout.',
        'Tableaux de bord Power BI : cités dans 3 offres sur 5 → 4 ; confiance 3 → score 12 : écart.',
        'Animation radio communautaire : 0 offre sur 5 → 1 ; confiance 4 → score 4 : ne figurera pas en tête de CV.',
        'Somme des 13 notes de pertinence : 54.',
      ],
    },
    tip: "Si votre cible change à la Procédure 4, renotez uniquement la colonne D : la confiance ne dépend pas de la cible, la pertinence si.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Lire et décomposer le score de positionnement',
    intro: "L'onglet « Synthèse positionnement » calcule tout automatiquement. Votre travail : comprendre d'où vient le score, pour savoir quoi corriger.",
    steps: [
      {
        title: 'Lire les indicateurs',
        actions: [
          'C10 : réalisations saisies ; C11 : compétences managériales ; C12 : confiance moyenne ; C13 : pertinence moyenne ; C14 : part des compétences à forte pertinence (≥ 4/5).',
          'C16 : score sur 100 ; C17 : lecture du score.',
        ],
      },
      {
        title: 'Décomposer le score',
        actions: [
          'Score = confiance moyenne ÷ 5 × 40 + pertinence moyenne ÷ 5 × 40 + (réalisations saisies, plafonnées à 8) ÷ 8 × 20.',
          '≥ 75 : profil aligné ; 50 à 74 : partiellement aligné, écart à traiter dans la feuille de route ; < 50 : écart important.',
        ],
      },
      {
        title: 'Identifier le levier',
        actions: [
          'Part « réalisations » inférieure à 20 points → levier : la formalisation (Procédure 2).',
          'Pertinence moyenne basse → levier : le ciblage (Procédure 4).',
          'Confiance basse sur des compétences pertinentes → levier : le plan d\'action (Procédure 6).',
        ],
      },
    ],
    example: {
      title: 'Calcul pas à pas — Joël',
      lines: [
        'Confiance : 49 ÷ 13 = 3,77 → 3,77 ÷ 5 × 40 = 30,2 points (C12 affiche 3,8).',
        'Pertinence : 54 ÷ 13 = 4,15 → 4,15 ÷ 5 × 40 = 33,2 points (C13 affiche 4,2).',
        '1er passage, avec seulement 4 réalisations saisies : 4 ÷ 8 × 20 = 10 points → score 73, « Profil partiellement aligné ».',
        '2e passage, avec 9 réalisations (plafonnées à 8) : 8 ÷ 8 × 20 = 20 points → score 83, « Profil déjà aligné avec la cible déclarée ».',
        'Part des compétences à forte pertinence : 12 ÷ 13 = 92 % (C14).',
      ],
    },
    pitfall: "Prendre le score pour un verdict. Joël est à 83 et n'obtient pourtant aucun entretien : le score mesure le potentiel formalisé dans le classeur, pas ce que le recruteur voit aujourd'hui dans son CV. C'est un signal, à croiser avec le test des 90 secondes.",
  },

  // ───────── PROCÉDURE 4 — BENCHMARKING ET CIBLAGE SECTORIEL (5 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Balayer 15 à 20 offres sur ReliefWeb',
    intro: "Pourquoi : remplacer votre intuition du marché par des faits. Ici, on ne candidate pas : on observe intitulés, niveaux, zones et mots-clés. Durée : environ 1 h 30.",
    steps: [
      {
        title: 'Chercher',
        actions: [
          'Ouvrez reliefweb.int/jobs.',
          "Saisissez le mot-clé de votre métier (ex. « MEAL », puis « suivi-évaluation ») et filtrez par pays ou région ciblés.",
          'Ouvrez les offres une par une, y compris celles légèrement au-dessus de votre niveau.',
        ],
      },
      {
        title: 'Relever dans une grille',
        actions: [
          'Créez un onglet « Benchmark » avec 9 colonnes : Date, Intitulé, Type d\'organisation, Pays / zone, Années exigées, Encadrement exigé (Oui/Non), Langues, Mots-clés de compétences, Lien.',
          'Une ligne par offre.',
          "Arrêtez-vous à 15 à 20 offres : au-delà, les tendances ne bougent plus.",
        ],
      },
      {
        title: 'Compter',
        actions: [
          `Pour chaque mot-clé, comptez les offres qui le citent : =NB.SI(H:H;"*Power BI*").`,
          "Relevez la fourchette d'années d'expérience exigées pour chaque intitulé.",
        ],
      },
    ],
    example: {
      title: "Balayage de Joël — 20 offres, Afrique centrale et de l'Ouest francophone, novembre 2026 (chiffres d'exemple)",
      lines: [
        'Intitulés : MEAL Manager (7), M&E Officer (6), MEAL Coordinator (4), Head of MEAL (3).',
        'Expérience exigée : Officer 2 à 3 ans ; Manager 5 ans dont 2 en encadrement ; Coordinator 7 ans dont 4 en encadrement ; Head 8 à 10 ans.',
        "Mots-clés : supervision d'équipe 16/20, anglais courant 15/20, Kobo/ODK 14/20, redevabilité 13/20, gestion budgétaire 11/20, Power BI 9/20.",
        "Conclusion : avec 7 ans d'expérience dont plus de 2 ans et demi d'encadrement, Joël correspond au niveau Manager ; Coordinator est atteignable à 2-3 ans ; Head of MEAL est prématuré.",
      ],
    },
    tip: "Enregistrez la recherche et activez l'alerte e-mail : vous suivrez l'évolution du marché sans y repasser 1 h 30.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Situer votre niveau dans le secteur onusien avec Impactpool',
    intro: "Pourquoi : les agences onusiennes classent chaque poste par grade et famille de métier, avec des exigences minimales de diplôme et d'années d'expérience appliquées strictement. Vérifiez à quel grade vous êtes éligible avant de viser ce secteur.",
    steps: [
      {
        title: 'Comprendre les catégories',
        actions: [
          'G (services généraux) : postes d\'appui recrutés localement.',
          "NO-A à NO-D (administrateurs nationaux) : postes professionnels réservés aux ressortissants du pays d'affectation.",
          "P-1 à P-5 puis D (administrateurs internationaux) : postes ouverts à l'international, avec mobilité.",
          "Repères courants, à vérifier dans chaque offre : P-2 ≈ 2 ans d'expérience avec un master, P-3 ≈ 5 ans, P-4 ≈ 7 ans.",
        ],
      },
      {
        title: 'Chercher et créer vos alertes',
        actions: [
          'Ouvrez impactpool.org, rubrique des offres.',
          'Filtrez par famille de métier (ex. suivi-évaluation, programme) et par grade.',
          'Créez une alerte par grade visé et par famille de métier.',
        ],
      },
      {
        title: "Vérifier l'éligibilité sur 5 offres",
        actions: [
          'Comparez ligne par ligne : diplôme exigé, années exigées, langues exigées, nationalité (postes NO).',
          'Notez pour chaque offre : éligible / non éligible / éligible si [condition].',
        ],
      },
    ],
    example: {
      title: 'Vérification de Joël',
      lines: [
        "Profil : master en santé publique, 7 ans d'expérience, français courant, anglais B1, nationalité congolaise.",
        'Postes NO-B suivi-évaluation en RDC : éligible (diplôme et années conformes, poste national).',
        'Postes P-3 suivi-évaluation hors RDC : diplôme et années conformes, mais anglais courant exigé dans 5 offres sur 5 → « éligible si anglais B2 à C1 ».',
        'Décision provisoire : secteur onusien accessible dès maintenant via les postes NO-B/NO-C, et à moyen terme via P-3 si l\'anglais progresse.',
      ],
    },
    pitfall: "Postuler à un grade pour lequel il vous manque une année ou le diplôme requis : les présélections onusiennes écartent souvent d'office les dossiers qui ne remplissent pas ces critères minimaux, quelle que soit leur qualité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Étudier 5 profils qui occupent déjà le poste visé (LinkedIn)',
    intro: "Pourquoi : voir le chemin réel qui mène au poste — intitulés intermédiaires, durée, preuves mises en avant — plutôt que l'imaginer.",
    steps: [
      {
        title: 'Trouver les profils',
        actions: [
          "Dans la barre de recherche LinkedIn, tapez l'intitulé visé (ex. « MEAL Manager ») puis filtrez sur Personnes, par lieu et par secteur.",
          'Retenez 5 profils dont le point de départ ressemble au vôtre.',
        ],
      },
      {
        title: 'Analyser chaque profil',
        actions: [
          'Notez : intitulé précédent, années avant d\'atteindre le poste, diplômes et certifications, 3 compétences mises en avant, langues affichées.',
          'Repérez ce que 3 profils sur 5 au moins ont et que vous n\'avez pas, ou pas encore affiché.',
        ],
      },
      {
        title: 'Optionnel : demander une conversation',
        actions: ['Envoyez un message court à 1 ou 2 d\'entre eux pour demander 20 minutes d\'échange sur leur parcours — sans demander de poste.'],
      },
    ],
    example: {
      title: 'Analyse de Joël — 5 MEAL Managers en Afrique centrale',
      lines: [
        'Intitulé précédent : MEAL Officer senior ou Superviseur MEAL (5 sur 5).',
        "Années avant le poste : 5 à 8 ans (Joël : 7 ans → dans la fourchette).",
        "Points communs absents chez Joël : anglais professionnel affiché (5/5), tableau de bord Power BI montré en projet (3/5), « encadrement d'équipe » explicite dans le profil (5/5).",
        "Conclusion : rien d'inatteignable — l'écart est surtout un écart d'affichage, plus l'anglais.",
      ],
    },
    tip: "Ne copiez pas un profil : servez-vous-en pour repérer les preuves que le marché attend à votre niveau.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Choisir 2 à 3 secteurs avec la matrice de ciblage',
    intro: "Pourquoi : rendre le choix des secteurs explicite et défendable, en croisant expérience réelle (transférabilité) et aspirations, puis en vérifiant l'accessibilité et le volume d'offres. Entrées : Réalisations, aspirations, étapes 1 à 3.",
    steps: [
      {
        title: 'Construire la matrice',
        actions: [
          'Créez un tableau : 4 lignes (ONG, onusien, institutionnel, privé) × 4 critères notés de 1 à 5, plus une colonne Total sur 20.',
          'Transférabilité : vos réalisations y ont-elles une valeur directe ?',
          'Aspiration : en avez-vous envie (Procédure 1, étape 4) ?',
          'Accessibilité : remplissez-vous les exigences minimales (diplôme, années, langues) ?',
          'Volume : combien d\'offres avez-vous observées sur votre zone ?',
        ],
      },
      {
        title: 'Décider',
        actions: [
          'Retenez les 2 secteurs au plus fort total, et un 3e seulement s\'il dépasse 12/20.',
          'Écrivez une phrase « pourquoi » pour chaque secteur retenu et une phrase « pourquoi pas maintenant » pour chaque secteur écarté.',
        ],
      },
    ],
    table: {
      columns: ['Secteur', 'Transférabilité', 'Aspiration', 'Accessibilité', 'Volume', 'Total /20'],
      rows: [
        ['ONG internationales', '5', '4', '5', '5', '19'],
        ['Onusien (postes NO)', '4', '5', '3', '3', '15'],
        ['Institutionnel', '4', '3', '3', '2', '12'],
        ["Privé (bureaux d'études)", '3', '2', '3', '2', '10'],
      ],
    },
    result: "Joël retient 2 secteurs : les ONG internationales (priorité 1) et l'onusien via les postes d'administrateur national (priorité 2). L'institutionnel (12/20) est écarté pour l'instant : il passe de 5 secteurs visés à 2.",
    pitfall: "Garder 6 secteurs « pour ne rien rater » : chaque secteur exige un discours et des mots-clés différents. Cibler 6 secteurs revient, dans les faits, à n'en cibler aucun sérieusement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Calibrer votre niveau et votre fourchette de rémunération',
    intro: "Pourquoi : le benchmarking porte aussi sur vos prétentions — niveau, intitulé, salaire. Sans comparaison, on vise trop bas par manque de confiance, ou trop haut sans preuve à l'appui.",
    steps: [
      {
        title: 'Fixer le niveau',
        actions: [
          "Comparez vos années pertinentes et vos années d'encadrement aux exigences relevées à l'étape 1.",
          'Retenez le niveau dont vous remplissez toutes les exigences minimales, et notez le niveau suivant comme cible à 2-3 ans.',
        ],
      },
      {
        title: 'Relever les fourchettes',
        actions: [
          'Relevez les fourchettes publiées dans les offres de votre grille (certaines ONG publient leur grille salariale) et les barèmes publics des agences pour les postes nationaux.',
          'Calculez la médiane des fourchettes relevées.',
          'Comparez-la au plancher défini à la Procédure 1, étape 4.',
        ],
      },
    ],
    example: {
      title: 'Calibrage de Joël',
      lines: [
        "Niveau retenu : managérial — MEAL Manager (exigé : 5 ans dont 2 en encadrement ; Joël : 7 ans dont 2 ans et 8 mois d'encadrement).",
        'Cible à 2-3 ans : MEAL Coordinator (7 ans dont 4 en encadrement).',
        'Fourchettes relevées sur 6 offres de MEAL Manager à recrutement national (exemple fictif) : 2 400 à 3 600 USD bruts mensuels, médiane 2 900 USD.',
        'Plancher de Joël (actuel 2 200 USD + 15 %) : 2 530 USD → cohérent avec le marché ; il peut viser la médiane sans se sous-évaluer.',
      ],
    },
    tip: "La négociation elle-même se prépare au module 06 ; ici, vous vérifiez seulement que votre cible est réaliste et que vous ne visez pas sous votre valeur.",
  },

  // ──── PROCÉDURE 5 — PROFIL DE POSTE IDÉAL ET STRATÉGIE D'APPROCHE (4 étapes) ────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Rédiger la phrase de profil de poste idéal',
    intro: "Pourquoi : une cible vague (« un poste intéressant ») ne filtre rien et ne permet pas de construire un discours cohérent. Une phrase à 4 critères filtre tout. Entrées : matrice de ciblage, calibrage du niveau, contraintes.",
    steps: [
      {
        title: 'Remplir les 4 critères',
        actions: [
          "Intitulé précis : celui qui revient dans les offres balayées, pas une catégorie (« Coordinateur Supply Chain », pas « un poste dans l'humanitaire »).",
          'Niveau de séniorité : junior, confirmé, senior ou managérial.',
          'Secteur : parmi les 2 à 3 retenus.',
          'Zone géographique : national, régional, expatriation ou télétravail — avec les lieux.',
        ],
      },
      {
        title: 'Assembler la phrase',
        actions: [
          'Formule : « Je vise un poste de [intitulé], niveau [séniorité], dans [secteur(s)], basé [zone]. »',
          'Relisez : chaque mot doit permettre de répondre oui ou non face à une offre.',
        ],
      },
    ],
    example: {
      title: 'Phrase de Joël',
      lines: [
        "Version vague (avant) : « Un poste à responsabilité dans l'humanitaire, de préférence en Afrique. »",
        "Version finale : « Je vise un poste de Responsable MEAL (MEAL Manager), niveau managérial, dans une ONG internationale basée dans la région des Grands Lacs ou en Afrique francophone sur un lieu d'affectation famille autorisée, ou, en second choix, dans une agence onusienne sur un poste d'administrateur national (NO-B/NO-C) en RDC. »",
      ],
    },
    result: 'La phrase répond aux 4 critères et tient en 3 lignes. Recopiez-la en tête de votre journal de candidatures et de votre feuille de route.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Transformer la phrase en grille de tri des offres',
    intro: "Le profil de poste idéal devient votre filtre : une offre qui s'en éloigne sur plusieurs critères à la fois n'est probablement pas une priorité, même si elle est disponible aujourd'hui.",
    steps: [
      {
        title: 'Créer la grille',
        actions: [
          'Dans votre journal de candidatures, ajoutez 4 colonnes : Intitulé OK ?, Niveau OK ?, Secteur OK ?, Zone OK ? (Oui/Non).',
          'Ajoutez une colonne Décision avec la règle : 4 Oui = prioritaire ; 3 Oui = possible si les non négociables sont respectés ; 2 Oui ou moins = on passe.',
        ],
      },
      {
        title: 'Tester sur 4 offres réelles',
        actions: [
          'Passez les 4 dernières offres reçues par alerte dans la grille.',
          "Comparez avec votre décision instinctive ; si elles divergent souvent, c'est généralement que votre phrase est trop large.",
        ],
      },
    ],
    table: {
      columns: ['Offre (exemple)', 'Intitulé', 'Niveau', 'Secteur', 'Zone', 'Décision'],
      rows: [
        ['MEAL Manager — ONG internationale — Bunia (RDC)', 'Oui', 'Oui', 'Oui', 'Oui', 'Prioritaire'],
        ['Administrateur national suivi-évaluation NO-B — agence onusienne — Goma', 'Oui', 'Oui', 'Oui', 'Oui', 'Prioritaire'],
        ['Head of MEAL — ONG internationale — Juba, 10 ans exigés', 'Non', 'Non', 'Oui', 'Non', 'On passe'],
        ["Data Analyst — bureau d'études privé — télétravail", 'Non', 'Non', 'Non', 'Oui', 'On passe'],
      ],
    },
    pitfall: "Assouplir la grille à chaque offre « parce qu'elle a l'air bien » : en 3 semaines, vous serez revenu à 31 candidatures dispersées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Déclarer la cible dans le template et relire le score',
    intro: "Pourquoi : le score n'a de sens que rapporté à une cible écrite. Tant que les cellules C5 à C7 sont vides, la lecture du score reste abstraite.",
    steps: [
      {
        title: 'Renseigner la cible déclarée',
        actions: [
          "Ouvrez l'onglet « Synthèse positionnement ».",
          'Saisissez en C5 l\'intitulé de poste visé, en C6 le niveau de séniorité, en C7 le secteur.',
          'Ne touchez à aucune autre cellule de cet onglet.',
        ],
      },
      {
        title: 'Revérifier la cohérence',
        actions: [
          "Si la cible finale diffère de la cible provisoire utilisée en Procédure 3, renotez la colonne D de l'onglet « Compétences » à partir de votre grille de benchmarking.",
          'Relisez C16 et C17 : le score et sa lecture portent désormais sur la cible écrite en C5 à C7.',
        ],
      },
    ],
    example: {
      title: 'Synthèse de Joël',
      lines: [
        'C5 : Responsable MEAL (MEAL Manager)',
        'C6 : Managérial',
        'C7 : ONG internationale (priorité 1) ; onusien, poste national (priorité 2)',
        'Cible identique à la cible provisoire → colonne D conservée. C16 = 83 ; C17 : « Profil déjà aligné avec la cible déclarée — vous pouvez candidater. »',
      ],
    },
    result: 'Votre classeur est complet et cohérent : réalisations, compétences notées pour la bonne cible, cible déclarée, score interprété.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: "Définir votre stratégie d'approche",
    intro: "Pourquoi : savoir quoi viser ne suffit pas, il faut savoir par où entrer et à quel rythme. La stratégie d'approche fixe vos canaux, votre cadence et vos indicateurs.",
    steps: [
      {
        title: 'Choisir les canaux par secteur',
        actions: [
          'ONG internationales : alertes ReliefWeb, pages carrières des organisations repérées, réseau professionnel.',
          "Onusien : alertes Impactpool par grade et famille de métier, portails de carrière des agences, inscription aux listes de réserve (rosters) lorsqu'elles sont ouvertes.",
          'Pour chaque secteur, listez 10 organisations cibles maximum.',
        ],
      },
      {
        title: 'Fixer la cadence',
        actions: [
          'Lundi, 30 minutes : tri des alertes avec la grille de tri.',
          '2 à 3 candidatures ciblées par semaine au maximum, chacune adaptée à l\'offre.',
          '2 conversations réseau par mois avec des professionnels occupant le poste visé.',
        ],
      },
      {
        title: 'Mesurer',
        actions: [
          'Suivez dans le journal le taux de réponse des seules candidatures « prioritaires ».',
          'Repère : sous 10 % après 10 candidatures ciblées, revenez à votre positionnement avant d\'en envoyer d\'autres.',
        ],
      },
    ],
    example: {
      title: "Stratégie d'approche de Joël (extrait)",
      lines: [
        "Canaux : alertes ReliefWeb « MEAL » (RDC, Rwanda, Burundi, Afrique de l'Ouest francophone) ; alertes Impactpool suivi-évaluation NO-B/NO-C en RDC ; 10 ONG internationales et 4 agences listées.",
        'Cadence : 2 candidatures ciblées par semaine à partir du lundi 14 décembre 2026, une fois le CV réécrit.',
        'Réseau : 2 conversations par mois avec les MEAL Managers identifiés sur LinkedIn.',
        'Indicateur : taux de réponse des candidatures prioritaires ; point d\'étape après les 10 premières.',
      ],
    },
    tip: "Moins de candidatures, mieux ciblées : 10 dossiers adaptés valent mieux que 40 dossiers génériques, qui se reconnaissent en quelques secondes.",
  },

  // ─────────── PROCÉDURE 6 — FEUILLE DE ROUTE DE CARRIÈRE (6 étapes) ───────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 6',
    title: 'Ouvrir le template et rédiger la situation actuelle (section 1)',
    intro: "Le template feuille-de-route-carriere.docx compte 5 sections — 1. Situation actuelle, 2. Profil de poste idéal, 3. Analyse de l'écart, 4. Plan d'action et échéances, 5. Date de révision — et un cartouche « Rédigé par / Date ». Objectif : 2 pages maximum.",
    steps: [
      {
        title: 'Préparer le fichier',
        actions: [
          'Enregistrez une copie nommée « NOM_Prenom_feuille-de-route_AAAA-MM.docx » dans votre dossier « Audit carrière 2026 ».',
          'Gardez la consigne placée sous chaque titre le temps de rédiger, puis supprimez-la.',
        ],
      },
      {
        title: 'Rédiger la section 1',
        actions: [
          'En 3 à 4 lignes : poste occupé, secteur, principales responsabilités et 2 résultats clés chiffrés repris de l\'onglet Réalisations.',
          'Ajoutez une ligne de diagnostic : taux de réponse actuel et cause identifiée.',
        ],
      },
    ],
    example: {
      title: 'Section 1 — Joël',
      lines: [
        'Superviseur MEAL dans une ONG internationale de santé-nutrition (Goma, RDC) depuis mars 2024 ; 7 ans d\'expérience en suivi-évaluation humanitaire.',
        'Encadre une équipe de 6 personnes et gère un budget MEAL de 120 000 USD exécuté à 96 % ; a mis en place un mécanisme de plaintes ayant traité 1 340 retours en 12 mois.',
        'Diagnostic : 31 candidatures en 5 mois sur 5 secteurs, 1 entretien (3,2 %). Cause : CV rédigé en tâches, responsabilités managériales invisibles, candidatures dispersées.',
      ],
    },
    pitfall: 'Raconter tout votre parcours : la section 1 est une photographie, pas une biographie.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 6',
    title: 'Renseigner le profil de poste idéal (section 2)',
    intro: "Section la plus rapide si les Procédures 4 et 5 sont faites : on recopie, on ne réinvente pas. Le tableau du template contient 4 cases : intitulé, niveau, secteur, zone.",
    steps: [
      {
        title: 'Remplir les 4 cases',
        actions: [
          'Intitulé de poste visé ; Niveau de séniorité ; Secteur visé ; Zone géographique — repris tels quels de la Procédure 5.',
          'Sous le tableau, collez la phrase complète de profil de poste idéal.',
        ],
      },
      {
        title: 'Contrôler',
        actions: ['Vérifiez que les cases correspondent mot pour mot aux cellules C5 à C7 du classeur Excel.'],
      },
    ],
    example: {
      title: 'Section 2 — Joël',
      lines: [
        'Intitulé de poste visé : Responsable MEAL (MEAL Manager)',
        'Niveau de séniorité : Managérial',
        'Secteur visé : ONG internationale (priorité 1) ; onusien, poste NO-B/NO-C (priorité 2)',
        "Zone géographique : Grands Lacs (RDC, Rwanda, Burundi) ; Afrique francophone si lieu d'affectation famille autorisée",
      ],
    },
    result: "Section 2 remplie en moins de 5 minutes, puisque tout vient des procédures précédentes : c'est le signe que l'ordre a été respecté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 6',
    title: "Conduire l'analyse de l'écart (section 3)",
    intro: "Pourquoi : la gap analysis dit exactement ce qui manque entre votre situation et la cible, et pourquoi c'est bloquant. Entrées : onglet Compétences (colonnes C et D), grille de benchmarking, analyse des profils LinkedIn.",
    steps: [
      {
        title: 'Extraire les écarts de compétences',
        actions: [
          "Dans l'onglet « Compétences », sélectionnez la ligne 5, activez Données > Filtrer, puis gardez les lignes où D ≥ 4 et C ≤ 3.",
          'Chaque ligne obtenue est un écart de compétence.',
        ],
      },
      {
        title: "Ajouter les écarts de preuve et d'expérience",
        actions: [
          "Comparez votre CV actuel aux mots-clés les plus fréquents du benchmark : chaque élément que vous possédez mais qui n'apparaît pas dans le CV est un écart de preuve.",
          "Comparez les exigences d'expérience (années, encadrement) à votre chronologie : chaque manque est un écart d'expérience.",
        ],
      },
      {
        title: 'Remplir le tableau du template',
        actions: [
          "Colonne 1 : l'écart, formulé précisément ; colonne 2 : pourquoi il est bloquant, avec le chiffre du benchmark.",
          'Pour ajouter une ligne dans Word, placez le curseur dans la dernière cellule et appuyez sur Tab.',
          'Classez les écarts du plus bloquant au moins bloquant.',
        ],
      },
    ],
    table: {
      columns: ['Écart identifié', 'Pourquoi il est bloquant pour la cible'],
      rows: [
        ['Preuve : responsabilités managériales absentes du CV (équipe de 6, budget de 120 000 USD, décision de mai 2025)', "Supervision d'équipe citée dans 16 offres sur 20 : sans preuve visible, le dossier est lu comme celui d'un officer"],
        ['Compétence : anglais professionnel (confiance 2, pertinence 5)', 'Anglais courant exigé dans 15 offres sur 20 et dans 5 offres P-3 sur 5'],
        ['Compétence : tableaux de bord Power BI (confiance 3, pertinence 4)', 'Cité dans 9 offres sur 20 ; affiché par 3 MEAL Managers sur 5 analysés'],
        ["Compétence : construction d'un budget MEAL (confiance 3, pertinence 4)", "Gestion budgétaire citée dans 11 offres sur 20 ; Joël exécute mais n'a jamais construit de budget"],
        ['Compétence : coordination multi-partenaires (confiance 3, pertinence 4)', 'Attendue au niveau Manager, mais moins discriminante que les précédentes'],
      ],
    },
    result: "Le premier écart, le plus bloquant, n'exige aucune nouvelle expérience : comme pour Amina, c'est un problème de positionnement. Les quatre autres exigent un plan d'action.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 6',
    title: "Construire le plan d'action daté (section 4)",
    intro: "Chaque écart reçoit au moins une action concrète — formation courte, certification, projet à valoriser, réseau à activer — avec une ressource et une échéance. Le tableau du template a 3 colonnes : Action concrète, Ressource / détail, Échéance.",
    steps: [
      {
        title: 'Formuler chaque action',
        actions: [
          'Commencez par un verbe et un livrable vérifiable : « Obtenir… », « Livrer… », « Réécrire… ».',
          'Une action traite un écart ; un écart peut recevoir 2 actions.',
          "Vérifiez que l'action dépend de vous (pas « être promu »).",
        ],
      },
      {
        title: 'Remplir les 3 colonnes',
        actions: [
          'Ressource / détail : où, avec qui, coût, temps par semaine.',
          'Échéance : une date précise, pas « bientôt ».',
          "Étalez les échéances : pas plus de 2 actions qui se terminent le même mois.",
        ],
      },
      {
        title: 'Vérifier le réalisme',
        actions: ["Additionnez le temps hebdomadaire de toutes les actions : au-delà de 5 à 6 heures par semaine en parallèle d'un emploi, le plan ne tiendra pas."],
      },
    ],
    table: {
      columns: ['Action concrète', 'Ressource / détail', 'Échéance'],
      rows: [
        ['Programmer les alertes ReliefWeb et Impactpool et lister 14 organisations cibles', 'Recherches enregistrées ; 1 h', '30/11/2026'],
        ['Réécrire le CV autour des 9 réalisations et des 3 preuves managériales', 'Module 02 de la formation ; 4 h au total', '11/12/2026'],
        ['Co-construire le budget MEAL 2027 avec le coordinateur programme', 'Demande écrite au coordinateur ; preuve : budget validé', '15/12/2026'],
        ['Livrer un tableau de bord Power BI du programme, présenté au comité de pilotage', 'Formation en ligne gratuite + données agrégées du programme ; 1 h 30 par semaine', '31/01/2027'],
        ["Suivre 3 h d'anglais professionnel par semaine et mener 1 réunion d'équipe par semaine en anglais", 'Cours en ligne ; test de positionnement le 15/12/2026', 'Certification B2 visée au 30/06/2027'],
        ['Tenir 2 conversations réseau par mois avec des MEAL Managers', 'Liste LinkedIn de la Procédure 4, étape 3 ; 1 h par mois', 'Dès le 01/12/2026, bilan au 15/03/2027'],
      ],
    },
    result: 'Temps total de Joël : environ 5 h 30 par semaine. Chaque écart de la section 3 a au moins une action ; l\'objectif anglais, plus long, est explicitement daté au-delà de la révision.',
    pitfall: "Des actions vagues (« améliorer mon anglais », « développer mon réseau ») : sans livrable ni date, impossible de vérifier à la révision si elles sont faites.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 6',
    title: 'Fixer la date de révision (section 5)',
    intro: "Pourquoi : la feuille de route est un outil de pilotage, pas un document figé. La date de révision se fixe maintenant, 3 à 6 mois plus tard selon votre situation.",
    steps: [
      {
        title: 'Choisir la date',
        actions: [
          'Plutôt 3 mois si vous êtes sans emploi ou en fin de contrat proche ; plutôt 6 mois si vous êtes en poste et que la transition peut attendre.',
          'Inscrivez-la dans votre agenda avec un rappel une semaine avant.',
        ],
      },
      {
        title: 'Prévoir la suite',
        actions: ["Dans la case « Prochaine étape si l'écart n'est pas comblé d'ici là », écrivez une décision concrète, pas un vœu."],
      },
      {
        title: 'Préparer la révision',
        actions: [
          "À la date prévue : refaites le test des 90 secondes, recalculez le taux de réponse, renotez la colonne C de l'onglet Compétences, mettez à jour le plan.",
          'Révisez aussi après une avancée réelle (promotion, nouveau périmètre, certification), pas seulement en cas d\'échec.',
        ],
      },
    ],
    example: {
      title: 'Section 5 — Joël',
      lines: [
        'Date de révision : lundi 15 mars 2027 (4 mois : Joël est en poste, mais son contrat se termine en septembre 2027).',
        "Prochaine étape si l'écart n'est pas comblé : concentrer les candidatures sur les postes de MEAL Manager francophones n'exigeant pas l'anglais courant, et prolonger de 3 mois le plan anglais avant de viser les postes P-3.",
      ],
    },
    tip: "Proposez à un pair ou à un mentor de vous relancer à la date de révision : un engagement pris devant quelqu'un est bien plus souvent tenu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 6',
    title: 'Relire, finaliser et archiver (2 pages maximum)',
    intro: "Dernier contrôle avant de considérer le module comme terminé : cohérence entre les sections, cohérence avec le classeur Excel, et format.",
    steps: [
      {
        title: 'Contrôler la cohérence',
        actions: [
          'Chaque écart de la section 3 a au moins une action en section 4.',
          'Chaque échéance tombe avant la date de révision, sauf objectif long signalé comme tel.',
          "Les chiffres de la section 1 sont identiques à ceux de l'onglet Réalisations.",
        ],
      },
      {
        title: 'Contrôler la forme',
        actions: [
          'Supprimez toutes les consignes du template.',
          'Vérifiez dans Fichier > Imprimer (aperçu) que le document tient en 2 pages maximum.',
          'Remplissez le cartouche « Rédigé par (nom, fonction) » et « Date ».',
        ],
      },
      {
        title: 'Archiver',
        actions: [
          'Exportez en PDF (Fichier > Enregistrer sous > PDF) dans votre dossier « Audit carrière 2026 ».',
          'Rangez-y aussi le classeur Excel final, le journal de candidatures et la grille de benchmarking.',
        ],
      },
    ],
    result: 'Joël termine le vendredi 27 novembre 2026 avec une feuille de route d\'une page et demie, signée et datée, et un dossier « Audit carrière 2026 » complet.',
  },

  // ────────────────────── CAS RÉSOLU DE BOUT EN BOUT ──────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/4) — Joël : le raisonnement, du diagnostic à la décision',
    scenario: "Joël Kabeya, Superviseur MEAL, 7 ans d'expérience, 31 candidatures en 5 mois, 1 entretien pour un poste inférieur à son niveau. Il pense manquer d'expérience et envisage une nouvelle formation diplômante.",
    steps: [
      { title: 'Constat chiffré (Procédure 1)', body: "Taux de réponse de 3,2 % ; 5 secteurs et 11 intitulés visés ; le test des 90 secondes ne retient aucun chiffre ; la chronologie montre pourtant une progression nette, de 0 à 6 personnes encadrées et de 0 à 120 000 USD de budget." },
      { title: 'Hypothèse', body: "Le problème n'est ni l'expérience (7 ans, dans la fourchette des MEAL Managers observés) ni les compétences (pertinence moyenne 4,2/5), mais la dispersion des candidatures et l'invisibilité managériale du CV." },
      { title: 'Vérification (Procédures 2 et 3)', body: "9 réalisations chiffrées sont formalisées, dont 6 managériales ; le score passe de 73 à 83 sans aucune nouvelle expérience, uniquement par la formalisation." },
      { title: 'Ciblage (Procédures 4 et 5)', body: "Le benchmark confirme le niveau Manager ; la matrice réduit les secteurs de 5 à 2 ; la phrase cible et la grille de tri éliminent 2 offres sur 4 dès le premier test." },
      { title: 'Décision (Procédure 6)', body: "Pas de nouvelle formation diplômante : réécriture du CV, deux preuves à créer dans son poste actuel (budget 2027, tableau de bord Power BI) et un plan anglais daté." },
    ],
    result: "La « formation diplômante » envisagée aurait coûté 2 ans sans traiter le vrai problème. L'audit a pris 12 heures.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/4) — Onglet « Réalisations » final de Joël',
    scenario: "Les 9 réalisations retenues après les 4 tests de contrôle qualité. Toutes sont marquées « Oui » en colonne F (à réutiliser dans le CV).",
    steps: [],
    table: {
      columns: ['Poste', 'Réalisation quantifiable (C)', 'Preuve (D)', 'Managérial (E)'],
      rows: [
        ['Superviseur MEAL', 'Supervisé une équipe de 6 personnes sur un programme santé-nutrition de 4,6 M USD couvrant 3 provinces, avec 30 rapports mensuels sur 30 livrés à date', 'Organigramme ; registre des rapports', "Oui — supervision d'équipe"],
        ['Superviseur MEAL', "Géré l'exécution du budget MEAL de 120 000 USD, exécuté à 96 % sans dépassement de ligne", 'Suivi budgétaire MEAL 2025', 'Oui — gestion budgétaire'],
        ['Superviseur MEAL', 'Mis en place un mécanisme de plaintes et retours : 1 340 retours traités en 12 mois, délai de réponse ramené de 19 à 7 jours', 'Tableau de suivi des plaintes', 'Oui — conception et pilotage d\'un dispositif'],
        ['Superviseur MEAL', "Décidé, en l'absence du coordinateur, de suspendre puis réorganiser une enquête nutritionnelle après détection de 9 % de doublons, évitant la transmission de données erronées au bailleur", 'Note interne de mai 2025', 'Oui — décision sous sa seule autorité'],
        ['Chargé de S&E', 'Conçu le cadre de mesure (32 indicateurs) d\'un projet WASH de 1,8 M USD financé par 3 bailleurs, utilisé sans révision majeure pendant 30 mois', 'Cadre de mesure validé', 'Non'],
        ['Chargé de S&E', "Piloté l'enquête de référence auprès de 1 150 ménages dans 2 zones de santé, livrée en 6 semaines au lieu de 8, en coordonnant 12 enquêteurs temporaires", 'Rapport de baseline', 'Oui — coordination d\'équipe'],
        ['Chargé de S&E', 'Produit 10 rapports trimestriels bailleurs, tous acceptés sans demande de correction de fond', "Courriels d'acceptation", 'Non'],
        ['Assistant S&E', 'Numérisé le suivi de 4 200 ménages avec des formulaires Kobo, réduisant le délai de transmission des données de plus de 80 % (21 à 4 jours)', 'Rapport trimestriel T4 2020', 'Non'],
        ['Assistant S&E', "Formé 18 relais communautaires à la collecte de données en 6 sessions, faisant passer le taux d'erreur de saisie de 14 % à 5 % en 3 mois", "Fiches de présence ; rapport qualité", 'Oui — formation'],
      ],
    },
    result: '9 réalisations (C10 = 9), 6 managériales, 4 sur le poste le plus récent : la bascule de rôle est désormais démontrée noir sur blanc.',
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/4) — Onglet « Compétences » et synthèse de Joël',
    scenario: "Les 13 compétences notées, avec le score calculé en colonne E (confiance × pertinence) et la lecture qui en découle.",
    steps: [],
    table: {
      columns: ['Compétence', 'Type', 'Confiance', 'Pertinence', 'Score /25', 'Lecture'],
      rows: [
        ['Cadres logiques et plans de suivi', 'Opérationnelle', '5', '5', '25', 'Atout'],
        ['Collecte Kobo/ODK', 'Opérationnelle', '5', '4', '20', 'Atout'],
        ['Analyse Excel / Power Query', 'Opérationnelle', '4', '4', '16', 'Atout'],
        ['Tableaux de bord Power BI', 'Opérationnelle', '3', '4', '12', 'Écart'],
        ["Conception d'évaluations", 'Opérationnelle', '4', '5', '20', 'Atout'],
        ['Mécanisme de plaintes', 'Opérationnelle', '4', '4', '16', 'Atout'],
        ["Supervision d'équipe", 'Managériale', '4', '5', '20', 'Atout'],
        ['Pilotage budget MEAL', 'Managériale', '3', '4', '12', 'Écart'],
        ["Formation d'équipes", 'Managériale', '4', '4', '16', 'Atout'],
        ['Rapports bailleurs', 'Transférable', '4', '5', '20', 'Atout'],
        ['Coordination multi-partenaires', 'Transférable', '3', '4', '12', 'Écart'],
        ['Animation radio communautaire', 'Transférable', '4', '1', '4', 'Hors cible'],
        ['Anglais professionnel', 'Transférable', '2', '5', '10', 'Écart majeur'],
      ],
    },
    example: {
      title: 'Onglet « Synthèse positionnement »',
      lines: [
        'C5 Responsable MEAL (MEAL Manager) · C6 Managérial · C7 ONG internationale ; onusien, poste national',
        'C10 = 9 · C11 = 3 · C12 = 3,8 · C13 = 4,2 · C14 = 92 %',
        'C16 = 83 · C17 : « Profil déjà aligné avec la cible déclarée — vous pouvez candidater. »',
      ],
    },
    result: "Les 4 écarts (Power BI, budget, coordination, anglais) alimentent directement la section 3 de la feuille de route ; la radio communautaire sort de la tête du CV.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/4) — La feuille de route finale de Joël',
    scenario: "Le document Word final, condensé : 1 page et demie, signé le 27/11/2026.",
    steps: [],
    example: {
      title: 'feuille-de-route-carriere — Joël Kabeya (extrait condensé)',
      lines: [
        '1. Situation actuelle — Superviseur MEAL, ONG internationale santé-nutrition, Goma, depuis 03/2024 ; 7 ans en suivi-évaluation ; équipe de 6, budget MEAL de 120 000 USD exécuté à 96 %. Diagnostic : 3,2 % de réponse, candidatures dispersées, CV en tâches.',
        "2. Profil de poste idéal — Responsable MEAL (MEAL Manager) · managérial · ONG internationale (1) / onusien NO-B/NO-C (2) · Grands Lacs ou Afrique francophone en lieu d'affectation famille autorisée.",
        '3. Écarts — (1) preuves managériales invisibles ; (2) anglais B1 pour une exigence B2 à C1 ; (3) Power BI ; (4) construction budgétaire ; (5) coordination multi-partenaires.',
        "4. Plan — alertes 30/11/2026 · CV réécrit 11/12/2026 · budget 2027 co-construit 15/12/2026 · tableau de bord Power BI 31/01/2027 · anglais 3 h/semaine, B2 visé 30/06/2027 · 2 conversations réseau par mois dès le 01/12/2026.",
        "5. Révision — 15/03/2027. Si l'écart persiste : cibler les MEAL Manager francophones sans exigence d'anglais courant, prolonger le plan anglais de 3 mois.",
        'Rédigé par : Joël Kabeya, Superviseur MEAL — Date : 27/11/2026.',
      ],
    },
    result: "Exemple de point d'étape au 15/03/2027 (fictif) : 10 candidatures prioritaires envoyées depuis le 14/12/2026, 3 entretiens obtenus, soit 30 % de réponse contre 3,2 % avant l'audit — avec exactement la même expérience.",
  },

  // ─────────────────────────────── EXERCICES ───────────────────────────────
  {
    type: 'exercise',
    title: "Exercice noté 1 — Le bilan de compétences et de positionnement d'Amina",
    instructions: "Mettez-vous à la place d'Amina (cas vécu présenté en début de module) et complétez le template bilan-competences-positionnement-carriere.xlsx. Suivez les Procédures 2 et 3 exactement comme pour Joël.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          'Enregistrez une copie du template nommée « AMINA_bilan-positionnement.xlsx ».',
          "Relisez le cas et listez ses 3 postes ou missions : responsable d'entrepôt, coordinatrice logistique (mission 1), coordinatrice logistique (mission 2).",
        ],
      },
      {
        title: "Onglet « Réalisations »",
        actions: [
          'Rédigez au moins 4 réalisations au format action + contexte + résultat, réparties sur ses deux missions.',
          "Faites apparaître explicitement : la supervision d'une équipe de 8 personnes, l'arbitrage du budget logistique de 250 000 USD, la décision prise seule lors de la rupture de stock critique.",
          "Pour les chiffres non donnés par le cas, inventez des valeurs réalistes et signalez-les en colonne D comme « hypothèse d'exercice ».",
          'Complétez les colonnes D, E et F pour chaque ligne.',
        ],
      },
      {
        title: "Onglet « Compétences »",
        actions: [
          'Listez 10 à 14 compétences en distinguant clairement opérationnelles déjà solides (entreposage, gestion des stocks…) et managériales à mettre en avant.',
          'Notez la confiance avec la grille d\'ancrage et la pertinence pour un poste de Supply Chain Manager.',
        ],
      },
      {
        title: 'Synthèse',
        actions: ['Renseignez C5 à C7 (Supply Chain Manager, confirmé/senior, secteur de votre choix), relevez le score C16 et expliquez en 3 lignes ce qui le compose.'],
      },
    ],
    tip: "Réalisation de départ possible : « Supervisé une équipe de 8 personnes (magasiniers, chauffeurs, agents de distribution) sur [contexte], avec [résultat chiffré] ». Ne commencez jamais par « En charge de ».",
    deliverable: "Le classeur Excel complété (au moins 4 réalisations, 10 compétences notées, cible déclarée) et 3 lignes d'interprétation du score.",
  },
  {
    type: 'exercise',
    title: "Exercice noté 2 — La feuille de route de carrière d'Amina",
    instructions: "Rédigez la feuille de route d'Amina avec le template feuille-de-route-carriere.docx, en suivant la Procédure 6 section par section.",
    steps: [
      { title: 'Section 1 — Situation actuelle', actions: ['Coordinatrice logistique terrain, 5 ans d\'expérience, 2 résultats chiffrés repris de votre onglet Réalisations, diagnostic : 4 mois de candidatures sans entretien.'] },
      { title: 'Section 2 — Profil de poste idéal', actions: ['Supply Chain Manager, niveau confirmé/senior, secteur et zone géographique de votre choix, en une phrase vérifiable.'] },
      { title: "Section 3 — Analyse de l'écart", actions: ["Faites apparaître explicitement l'écart entre son discours actuel (tâches) et la réalité de son expérience managériale, puis les écarts de compétences issus de l'onglet Compétences."] },
      { title: "Section 4 — Plan d'action", actions: ['Au moins 4 actions datées, dont la réécriture de son CV avant sa prochaine candidature, chacune avec une ressource et une échéance.'] },
      { title: 'Section 5 — Révision', actions: ['Une date à 3 ou 6 mois, justifiée, et une décision concrète si l\'écart n\'est pas comblé.'] },
    ],
    pitfall: "Écrire dans la section 3 « manque d'expérience managériale » : c'est faux pour Amina. Son écart est un écart de preuve et de discours, pas d'expérience.",
    deliverable: 'Les deux fichiers complétés (classeur Excel et feuille de route Word), avec une feuille de route ne dépassant pas 2 pages.',
  },
  {
    type: 'checklist',
    title: "Votre livrable « Amina » est correct si…",
    items: [
      'Au moins 4 réalisations sont rédigées au format action + contexte + résultat chiffré, aucune ne commence par « En charge de » ou « Responsable de ».',
      "Les trois preuves managériales du cas apparaissent explicitement : équipe de 8 personnes, budget de 250 000 USD arbitré, décision prise seule lors de la rupture de stock.",
      'La colonne E indique « Oui — » suivi de la compétence managériale pour au moins 3 lignes.',
      'Les compétences sont typées via la liste déroulante et la cellule C11 de la Synthèse compte au moins 3 compétences managériales.',
      'Les cellules C5 à C7 sont renseignées et vous savez expliquer le score C16 (confiance, pertinence, réalisations).',
      "La section 3 de la feuille de route qualifie l'écart principal comme un écart de positionnement, pas d'expérience.",
      'Chaque action de la section 4 a une ressource et une échéance datée ; une date de révision et une décision de repli figurent en section 5.',
      'La feuille de route tient en 2 pages maximum.',
    ],
  },
  {
    type: 'exercise',
    title: "Exercice d'application — Votre propre audit, en 2 semaines",
    instructions: "Appliquez maintenant les 6 procédures à votre propre parcours. Bloquez les créneaux dans votre agenda dès aujourd'hui ; chaque jour de travail produit un livrable précis.",
    steps: [
      { title: 'Jour 1 (2 h 30) — Procédure 1', actions: ['Dossier de preuves, chronologie des postes, test des 90 secondes par un tiers, journal de candidatures, aspirations et contraintes.'] },
      { title: 'Jours 2 et 3 (3 h) — Procédure 2', actions: ['Faits bruts par poste, rédaction de 2 à 4 réalisations par poste, colonnes D-E-F, contrôle par les 4 tests.'] },
      { title: 'Jour 4 (1 h 30) — Procédure 3', actions: ['10 à 14 compétences listées, typées, notées en confiance et en pertinence sur 5 offres cibles ; score lu et décomposé.'] },
      { title: 'Jours 5 et 6 (3 h) — Procédure 4', actions: ['Grille de 15 à 20 offres ReliefWeb, vérification de grade sur Impactpool si l\'onusien vous intéresse, 5 profils LinkedIn, matrice sectorielle, calibrage du niveau et de la fourchette.'] },
      { title: 'Jour 7 (1 h) — Procédure 5', actions: ["Phrase de profil de poste idéal, grille de tri testée sur 4 offres, cible déclarée en C5-C7, stratégie d'approche."] },
      { title: 'Jour 8 (2 h) — Procédure 6', actions: ['Feuille de route Word complète, relue, signée, exportée en PDF ; date de révision dans votre agenda.'] },
    ],
    deliverable: "Votre dossier « Audit carrière » contenant : chronologie, classeur Excel complété, grille de benchmarking, matrice sectorielle, journal de candidatures avec grille de tri, et feuille de route PDF de 2 pages maximum.",
  },
  {
    type: 'checklist',
    title: 'Votre audit personnel est correct si…',
    items: [
      'Chaque poste occupé a 2 à 4 réalisations chiffrées, chacune adossée à une pièce ou à un témoin cité en colonne D.',
      "Un tiers qui refait le test des 90 secondes sur vos réalisations retient au moins 3 chiffres et devine votre poste cible.",
      "Votre inventaire distingue confiance réelle et pertinence marché, et la pertinence a été notée à partir d'offres réelles, pas de votre ressenti.",
      'Vous visez 2 à 3 secteurs au maximum, chacun justifié par la matrice et par une phrase « pourquoi ».',
      "Votre phrase de profil de poste idéal contient un intitulé précis, un niveau, un secteur et une zone, et permet de trancher oui ou non face à n'importe quelle offre.",
      "Votre stratégie d'approche précise vos canaux, votre cadence hebdomadaire et l'indicateur suivi.",
      'Votre feuille de route relie chaque écart à au moins une action datée, et fixe une date de révision à 3 à 6 mois.',
      "Vos prétentions (niveau, fourchette) reposent sur au moins 6 références relevées sur le marché.",
    ],
  },

  // ─────────────────────── PIÈGES, BILAN, SUITE ───────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Candidater « à tout » sans cibler un secteur ou un niveau précis — un dossier générique envoyé à 40 offres se reconnaît en quelques secondes. Parade : la grille de tri ; 2 Oui ou moins, on passe.",
      "Sous-évaluer ou surévaluer sa valeur marché sans benchmarking réel — viser trop bas par manque de confiance coûte autant que viser trop haut sans preuve. Parade : 15 à 20 offres relevées et une fourchette médiane calculée.",
      "Définir un objectif vague (« un poste intéressant », « un poste stimulant ») — il ne filtre aucune offre et ne permet aucun discours cohérent. Parade : la phrase à 4 critères.",
      "Confondre années d'expérience et niveau de responsabilité — postuler à un rôle managérial sans avoir démontré noir sur blanc avoir supervisé une équipe, arbitré un budget ou porté seul une décision. Parade : colonne E du template et au moins 3 réalisations managériales.",
      "Ne jamais mettre à jour son positionnement après une évolution réelle — se présenter comme « coordinateur terrain » après avoir géré 12 personnes et 400 000 USD. Parade : réviser la feuille de route après chaque avancée, pas seulement après un échec.",
      "Gonfler un chiffre ou s'attribuer le résultat d'une équipe — découvert à la vérification des références, il élimine la candidature. Parade : un chiffre = une pièce ou un témoin ; arrondi à la baisse.",
      "Noter sa confiance selon l'envie et sa pertinence selon le cœur — le score devient décoratif. Parade : grilles d'ancrage, et relecture par un collègue.",
      "Garder en tête de CV une compétence chère mais hors cible — elle prend la place d'une preuve utile. Parade : toute compétence à pertinence ≤ 2 descend en bas de CV ou disparaît.",
      "Copier des données de bénéficiaires ou des documents confidentiels dans son dossier de preuves — faute professionnelle. Parade : uniquement des chiffres agrégés.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez constitué un dossier de preuves classé par poste et une chronologie qui rend votre progression de responsabilité visible en un coup d'œil.",
      'Vous avez mesuré votre point de départ : test des 90 secondes, taux de réponse, nombre de secteurs et d\'intitulés visés.',
      "Vous avez rédigé et prouvé 2 à 4 réalisations chiffrées par poste dans l'onglet « Réalisations », en isolant explicitement vos preuves managériales.",
      'Vous avez noté 10 à 14 compétences sur la confiance et la pertinence marché, et vous savez décomposer votre score de positionnement.',
      "Vous avez relevé 15 à 20 offres, vérifié votre éligibilité par grade, analysé 5 profils et choisi 2 à 3 secteurs avec une matrice notée.",
      "Vous avez écrit votre profil de poste idéal en une phrase, transformé en grille de tri et en stratégie d'approche hebdomadaire.",
      'Vous avez une feuille de route de 2 pages maximum : situation, cible, écarts, plan d\'action daté et date de révision dans votre agenda.',
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "J'ai listé, pour chaque poste occupé, 2 à 4 réalisations quantifiables formulées en action + contexte + résultat mesurable.",
      "J'ai complété l'inventaire de compétences en distinguant mon niveau de confiance réel de la pertinence marché de chaque compétence.",
      "J'ai identifié 2 à 3 secteurs cibles réalistes, en croisant mon expérience réelle et mes aspirations — pas plus.",
      "J'ai formulé mon profil de poste idéal en une phrase précise : intitulé, niveau, secteur, zone géographique.",
      "J'ai complété le bilan de compétences et positionnement avec le template fourni et j'ai regardé mon score de positionnement.",
      "J'ai rédigé ma feuille de route de carrière avec un plan d'action daté et une date de révision fixée à l'avance.",
      "Je sais expliquer, pour mon propre parcours, ce qui relève d'une réalisation vérifiable et ce qui relève d'une qualité générique à ne plus utiliser seule dans mon discours.",
      "J'ai mon classeur Excel final et ma liste de réalisations « Oui » sous la main : ce sont les entrées directes du module 02.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 02 — CV aux Normes ATS Internationales : vous y transformerez vos réalisations « Oui » et votre profil de poste idéal en un CV structuré pour les logiciels de tri (ATS), avec les mots-clés relevés dans votre benchmark.",
  },
]
