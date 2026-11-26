// Module 05 — Audit des RH & Programmes
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (grille-audit-paie-presences.xlsx, fiche-controle-programmatique-realise-planifie.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (audit RH et programmes du projet « Santé communautaire et nutrition »
// de la base d'Uvira, ONG fictive « Horizon Santé Grands Lacs »), avec exemples
// remplis, résultat attendu, astuces et erreurs à éviter.
// Les organisations, bailleurs, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Audit des RH & Programmes',
    hook: "Un nom bien réel sur la liste de paie, un contrat en règle, des bulletins sans erreur — et pourtant personne, sur le terrain, qui puisse confirmer avoir déjà vu cette personne travailler. À la fin de ce module, vous aurez produit le dossier complet d'un audit RH et programmes : une grille paie & présences remplie et lue, un suivi des heures supplémentaires avec sa double lecture, une fiche de contrôle réalisé/planifié appuyée sur des preuves terrain, et une conclusion qui distingue ce qui est prouvé de ce qui reste à vérifier.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Constituer un échantillon de paie stratifié (terrain, supervision, administration) à partir d'une liste de paie dont vous avez vérifié l'exhaustivité, en produisant l'onglet « Paie & Présences » de grille-audit-paie-presences.xlsx saisi pour 12 personnes (colonnes A à D) avec la méthode de tirage écrite.",
      "Croiser chaque ligne de paie avec le dossier RH (contrat, avenants, notes de service) et contrôler indemnités et cotisations, en produisant les colonnes E et F de la grille et un tableau d'anomalies classées « expliquée » ou « à documenter ».",
      "Vérifier la présence physique réelle par des sources indépendantes de la feuille de présence et interpréter le drapeau « risque ghost worker », en produisant une matrice de preuves, les colonnes G et H et la lecture de la colonne I.",
      "Croiser présences, congés et heures supplémentaires, puis analyser les schémas d'heures sup avec l'onglet « Heures Supplémentaires », en produisant pour chaque équipe à récurrence deux lignes de constat : un point RH et un point programmatique.",
      "Contrôler la conformité programmatique d'une activité sur un échantillon de 10 à 15 % appuyé sur des preuves terrain indépendantes, en complétant les sections 1, 2 et 4 de fiche-controle-programmatique-realise-planifie.docx.",
      "Vérifier le ciblage réel des bénéficiaires par rapport aux critères d'éligibilité du projet, en produisant la section 3 de la fiche avec le classement des déviations (isolées ou schéma répété) et leur gravité.",
      "Mener une investigation structurée sur une anomalie RH sans conclusion hâtive (silence, ordre d'interrogation, explication bénigne, croisement de deux sources indépendantes), en produisant une conclusion graduée (section 5 de la fiche) et une note confidentielle à l'instance de rattachement.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur la paie : c'est une mission d'audit RH et programmes déroulée dans l'ordre où vous la vivrez, du tirage de l'échantillon jusqu'à la conclusion écrite. Chaque procédure se termine par une pièce du dossier de mission, construite sur un seul cas fil rouge, et remplit pas à pas les deux templates du module.",
      "Le cas fil rouge : vous êtes Amani K., auditeur(rice) interne de « Horizon Santé Grands Lacs » (HSGL), l'ONG de santé fictive que vous connaissez depuis le module 01. Le 3 août 2026, la présidente du comité d'audit, Hélène V., vous confie l'audit RH et programmes du projet « Santé communautaire et nutrition » (SCN) de la base d'Uvira (Sud-Kivu), financé par le Fonds Meridian, avant la revue à mi-parcours du bailleur en octobre. Fatou S., auditrice senior, vous accompagne.",
    ],
    bullets: [
      "Livrable 1 — L'échantillon de paie justifié (12 personnes, 3 strates) et la grille saisie, colonnes A à D (procédure 1).",
      "Livrable 2 — Les colonnes E et F de la grille, le tableau des anomalies (écart, indemnités) et le rapprochement des cotisations (procédure 2).",
      "Livrable 3 — La matrice des preuves de présence, les colonnes G et H et la lecture du drapeau « risque ghost worker » (procédure 3).",
      "Livrable 4 — Le triple rapprochement congés / présences / paie et l'onglet « Heures Supplémentaires » avec ses deux lignes de constat par équipe (procédure 4).",
      "Livrable 5 — La fiche de contrôle programmatique : sections 1, 2 et 4 (procédure 5), section 3 (procédure 6).",
      "Livrable 6 — Le dossier d'investigation : extension d'échantillon, plan d'entretiens, tableau de convergence des sources, section 5 de la fiche et note confidentielle (procédure 7).",
      "Livrable 7 — Les deux fichiers complets du cas résolu, que vous comparerez ensuite avec ceux de l'exercice noté.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : HSGL, base d\'Uvira',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. L'organisation, les personnes et les chiffres sont fictifs, mais construits sur des configurations réelles de bases déployées dans l'Est de la RDC, où les dossiers RH sont souvent conservés loin du terrain.",
    table: {
      columns: ['Personne', 'Fonction', 'Rôle dans la mission'],
      rows: [
        ['Hélène V.', "Présidente du comité d'audit", 'Commanditaire, destinataire des notes confidentielles'],
        ['Fatou S.', 'Auditrice interne senior', "Auditrice associée : vérifications terrain à Sange et Kiliba"],
        ['Dr Claudine M.', "Coordinatrice de la base d'Uvira", 'Responsable du projet SCN sur place'],
        ['Mireille N.', 'Superviseure communautaire', 'Supervise les 12 agents de suivi communautaire (ASC)'],
        ['Gaspard T.', 'HR Manager pays (Goma)', 'Garde les dossiers RH et prépare la paie'],
        ['Solange P.', 'Assistante administrative et RH (Uvira)', 'Tient le registre des congés et les feuilles de temps'],
        ['Bahati M.', 'Agent de suivi communautaire, aire de Sange', 'Personne dont la ligne de paie déclenchera le signal'],
      ],
    },
    example: {
      title: 'Chiffres clés du périmètre',
      lines: [
        "Base d'Uvira : 44 employés nationaux, masse salariale brute de juillet 2026 : 19 800 USD.",
        "Projet SCN (Fonds Meridian) : 12 agents de suivi communautaire dans 6 aires de santé (Sange, Kiliba, Luvungi, Kavimvira, Runingu, Katogota), objectif de 60 ménages visités par agent et par mois, soit 720 visites mensuelles.",
        "Période de paie contrôlée : mai, juin et juillet 2026. Mois programmatique contrôlé : juin 2026 (702 visites déclarées).",
        "Terrain : du lundi 17 au vendredi 28 août 2026 ; dossiers RH conservés à Goma, scans reçus le 14 août.",
      ],
    },
    pitfall: "Partir sur le terrain sans avoir dit au commanditaire ce que vous ferez de vos premiers soupçons. Dans ce module, une seule règle vaut pour tout le dossier : aucun soupçon n'est communiqué avant que deux sources indépendantes convergent.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: "Pourquoi l'audit RH/Programme n'est pas un audit financier bis",
    body: [
      "Beaucoup d'auditeurs juniors abordent l'audit RH comme une simple extension de l'audit financier : on prend la liste de paie, on vérifie les montants, on classe. C'est une erreur de méthode qui laisse passer l'essentiel.",
      "Un problème RH est presque toujours aussi un signal programmatique, et parfois un signal de fraude. Un employé listé sur la paie que personne ne peut décrire n'est pas qu'une ligne comptable suspecte : c'est potentiellement une activité non supervisée, donc un programme qui tourne avec moins de ressources humaines réelles que ce qui est rapporté au bailleur.",
    ],
    example: {
      title: 'Même ligne, deux lectures (fil rouge)',
      lines: [
        "Lecture financière : « Bahati M., agent de suivi communautaire, 380 USD payés, 380 USD au contrat, écart 0. Conforme. »",
        "Lecture RH + programme : « Bahati M. est payé depuis 5 mois ; aucune trace de sa présence dans les rapports de supervision ni dans les registres de l'aire de Sange. Si le poste n'est pas réellement occupé, l'aire de Sange est couverte par un agent de moins que ce que déclare le rapport au Fonds Meridian. »",
      ],
    },
    highlight: "L'audit RH/Programme ne se clôt jamais uniquement sur un constat financier : il doit toujours se prolonger jusqu'à « qu'est-ce que ça signifie pour la mise en œuvre réelle du programme ? ».",
  },
  {
    type: 'stat-callout',
    stat: '3 red flags',
    caption: "les schémas classiques d'une fraude à la paie",
    context: "Employés fantômes, cotisations détournées, indemnités sans base contractuelle — le signal est rarement dans les documents, il est dans l'écart avec le terrain.",
  },
  {
    type: 'comparison-table',
    title: "Les red flags classiques d'un audit de paie",
    columns: ['Red flag', 'Comment il se manifeste', 'Comment le détecter', 'Où le chercher à Uvira'],
    rows: [
      ['Ghost worker (employé fantôme)', "Une personne reste sur la paie sans être présente sur le terrain : ancien employé jamais retiré, personne fictive, ou proche d'un responsable", "Écart entre le document de paie et la réalité physique du terrain, jamais dans les documents eux-mêmes", "Colonnes G, H et I de la grille ; matrice de preuves de présence (procédure 3)"],
      ['Cotisations mal calculées ou détournées', "Retenues sur le salaire brut mais jamais reversées, ou calculées sur une base erronée", "Croiser le montant retenu sur les bulletins avec le récépissé de versement à l'organisme", "Rapprochement retenues / récépissé INSS de juillet (procédure 2, étape 5)"],
      ['Indemnités sans base contractuelle claire', "Prime de risque, de déplacement ou de responsabilité versée sans avenant ni note de service", "Vérifier qu'un document contractuel justifie le principe et le montant de chaque indemnité récurrente", "Colonne F de la grille et revue des rubriques de l'état de paie (procédure 2, étapes 3 et 4)"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Document ou réalité : ce que prouve chaque source',
    columns: ['Source', 'Ce qu\'elle établit', 'Ce qu\'elle ne prouve pas', 'Exemple à Uvira'],
    rows: [
      ['Dossier RH (contrat, avenants, notes de service)', 'Ce qui est autorisé', "Que la personne travaille", "Contrat de Bahati M. signé le 02/03/2026, dossier complet"],
      ['Bulletin / état de paie', 'Ce qui a été payé', "Que la personne existe sur le terrain", "380 USD versés chaque mois"],
      ['Feuille de présence signée', 'Qu\'un document a été rempli', "Qu'une personne était sur site : elle peut être remplie à l'avance ou signée par complaisance", "Feuille de juillet signée par le superviseur le 31/07"],
      ['Rapport de supervision', "Qu'un tiers hiérarchique a vu la personne (ou ne l'a pas vue)", "Qu'il a tout vu : une visite d'une journée ne couvre pas un mois", "Trois rapports (12/05, 16/06, 14/07) sans mention de Bahati M."],
      ['Registre ou liste d\'un tiers (centre de santé, distribution, réunion)', 'Une présence ou une action constatée par quelqu\'un qui n\'est pas dans la ligne RH', "Rien d'autre que ce qui y est consigné", "Registre de dépistage du centre de santé de Sange, colonne « référé par »"],
      ['Témoignage croisé, photo géolocalisée', "Une confirmation indépendante recueillie par l'auditeur", "Rien si une seule voix, ou si la photo n'est pas datée", "Chauffeur, relais communautaires, ménages visités"],
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi les heures supplémentaires sont un signal à double lecture',
    body: "Des heures supplémentaires qui reviennent mois après mois, sur la même équipe, signalent presque toujours l'une de ces deux réalités, parfois les deux à la fois : un sous-effectif chronique (le programme a été planifié avec un effectif insuffisant pour le volume d'activité réel, et l'équipe compense en heures sup), ou une manipulation des heures (enregistrées pour gonfler artificiellement une rémunération, avec ou sans la complicité de l'employé).",
    example: {
      title: 'Double lecture sur l\'équipe de suivi communautaire d\'Uvira',
      lines: [
        "Lecture RH : 142 h en mai, 156 h en juin, 151 h en juillet. Question : au bon taux, avec autorisation préalable, dans le plafond ?",
        "Lecture programme : 150 h par mois équivalent à environ 0,87 poste à temps plein (150 / 173 h). Question : l'équipe compense-t-elle le travail d'un agent absent, ou le plan de 60 visites par agent est-il irréaliste ?",
      ],
    },
    highlight: "Un audit RH sérieux ne s'arrête jamais à « les heures sup sont-elles payées au bon taux ? » : il pose toujours la question programmatique en parallèle — pourquoi cette équipe a-t-elle besoin de ces heures ?",
  },
  {
    type: 'concept',
    title: 'Trois hypothèses devant un même signal',
    body: "Un agent payé, contrat en règle, que personne ne voit : le signal est réel, mais sa cause ne l'est pas encore. Trois hypothèses restent également plausibles tant que vous n'avez pas investigué, et confondre ces trois hypothèses avant investigation est l'erreur la plus coûteuse à ce stade.",
    table: {
      columns: ['Hypothèse', 'Ce que vous devriez trouver si elle est vraie', 'Ce qui la rendrait fausse'],
      rows: [
        ['1. Ghost worker (personne fictive ou complice qui touche un salaire sans travailler)', "Aucune trace dans des sources sans lien entre elles ; compte de paiement à vérifier", "Une activité de la personne documentée par un tiers"],
        ['2. Problème de couverture documentaire (la personne travaille, mais les rapports sont mal tenus)', "Des traces dans des documents hors supervision (registres, distributions, témoins)", "Aucune trace nulle part, même hors supervision"],
        ['3. Réaffectation informelle non actée (déplacée par son superviseur sans mise à jour du dossier RH)', "Un ordre de mission verbal, un message, une note non classée ; des traces dans une autre aire", "Aucun écrit, aucun témoin, aucune activité ailleurs"],
      ],
    },
    tip: "Écrivez ces trois hypothèses dans votre dossier dès que le signal apparaît. Chaque test que vous ferez ensuite doit pouvoir départager au moins deux d'entre elles.",
  },
  {
    type: 'concept',
    title: 'Soupçon, indice, preuve : les quatre niveaux de la fiche',
    body: "La section 5 de la fiche de contrôle vous impose de choisir un niveau de preuve atteint. Ce choix est ce qui protège l'organisation (pas d'accusation infondée) et vous-même (pas de conclusion que vous ne pouvez pas défendre).",
    table: {
      columns: ['Niveau (libellé de la fiche)', 'Condition pour l\'écrire', 'Exemple à Uvira'],
      rows: [
        ['Conformité confirmée', "Document conforme ET confirmation indépendante", "Neema K. : contrat, bulletin, 3 rapports de supervision, listes d'émargement"],
        ['Écart mineur expliqué', "Écart relevé, expliqué par une pièce datée et signée", "Sylvain M. : −20 USD, reçu d'avance signé du 03/06"],
        ['Soupçon documenté à investiguer', "Au moins deux sources indépendantes convergentes, aucune explication bénigne trouvée", "Bahati M. : 0 mention dans le registre du centre de santé ET 0 signature aux distributions"],
        ['Anomalie confirmée', "Vérification contradictoire menée (visite, entretien formel) qui établit le fait", "Réservé à l'étape suivante, menée avec les RH : jamais dans cet audit documentaire"],
      ],
    },
    pitfall: "Écrire « anomalie confirmée » parce que vous en êtes convaincu(e). Un seul signal, même fort, ne se formalise pas : tant que deux sources indépendantes ne convergent pas, vous poursuivez le travail sans conclure.",
  },
  {
    type: 'concept',
    title: 'Vos deux outils en un coup d\'œil',
    body: "Le module vous fait travailler dans deux fichiers. Voici leur structure exacte, telle que vous la trouverez à l'ouverture. Rien n'est à ajouter : vous remplissez, vous ne reconstruisez pas.",
    table: {
      columns: ['Fichier / onglet', 'Ce que vous y trouvez', 'Ce qui est calculé pour vous'],
      rows: [
        ['grille-audit-paie-presences.xlsx — onglet « Paie & Présences »', "Ligne 4 : 9 colonnes (A employé, B site, C période, D salaire payé, E salaire autorisé, F écart, G présence confirmée, H nb de périodes sans confirmation, I risque ghost worker) ; lignes 5 à 24 : 20 lignes ; 2 lignes d'exemple (5 et 6)", "F = D − E ; I = « RISQUE GHOST WORKER » si G = Non et H ≥ 2, « À surveiller » si G = Non et H < 2, « OK » sinon ; D28 = nombre de lignes en risque"],
        ['grille-audit-paie-presences.xlsx — onglet « Heures Supplémentaires »', "Ligne 4 : 8 colonnes (A équipe, B site, C mois -2, D mois -1, E mois en cours, F moyenne, G récurrence, H lecture combinée) ; lignes 5 à 16 : 12 équipes ; ligne 5 : exemple", "F = moyenne des 3 mois ; G = « Oui » si les 3 mois sont supérieurs à 0 ; H = lecture combinée RH + Programme"],
        ['fiche-controle-programmatique-realise-planifie.docx', "5 sections : 1. identification (4 champs) ; 2. réalisé vs planifié (4 lignes) ; 3. ciblage (3 champs de texte) ; 4. preuves terrain indépendantes (tableau) ; 5. conclusion, recommandation, rédacteur et date", "Rien : la fiche est entièrement rédigée par vous"],
      ],
    },
    tip: "Ouvrez les deux fichiers maintenant et vérifiez que vous voyez les colonnes décrites ci-dessus. Si une version diffère, travaillez avec la vôtre et notez les écarts : la méthode ne change pas.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé à maîtriser dès ce module',
    terms: [
      { term: 'Ghost worker (employé fantôme)', definition: "Personne présente sur la liste de paie mais absente ou inexistante sur le terrain — le red flag central de ce module." },
      { term: 'Réalisé vs planifié', definition: "Comparaison entre ce qu'un programme a effectivement livré et ce qui était prévu dans le document de projet — l'outil de base du contrôle programmatique." },
      { term: 'Ciblage des bénéficiaires', definition: "Vérification que les personnes réellement assistées correspondent aux critères d'éligibilité du projet, et non à un réseau de connaissances locales ou à une logique de favoritisme." },
      { term: 'Vérification terrain indépendante', definition: "Contrôle mené par une source distincte du rapport d'activité lui-même (visite physique, témoignage croisé, photo géolocalisée) — sans elle, un rapport de programme n'est qu'une déclaration non vérifiée." },
      { term: 'Salaire autorisé', definition: "Salaire que justifie un document contractuel : contrat, avenant ou note de service datée et signée. Il se lit dans le dossier RH, jamais sur le bulletin." },
      { term: 'Source indépendante', definition: "Source qui n'est produite ni par la personne contrôlée ni à sa place, et qui ne peut pas être remplie à l'avance ou signée par complaisance. Plus elle vient d'un tiers éloigné de la ligne hiérarchique, plus elle est solide." },
      { term: 'Échantillon stratifié', definition: "Échantillon tiré séparément dans chaque catégorie de personnel (terrain, supervision, administration) pour qu'aucune strate ne soit oubliée." },
      { term: 'Double lecture', definition: "Réflexe qui consiste à poser, pour chaque anomalie RH, la question programmatique correspondante, et inversement." },
    ],
  },

  // ───────────────────────── 5. LE CŒUR : les procédures ─────────────────────────

  // ── Procédure 1 — Échantillon de paie et grille ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Obtenir la liste de paie et vérifier qu\'elle est complète',
    intro: "Pourquoi : on ne tire pas un échantillon dans une liste incomplète ; si les lignes manquantes sont justement celles à risque, l'audit passe à côté. Quand : jour 1 (lundi 17 août), dès l'ouverture. Entrées : état de paie nominatif de mai, juin et juillet 2026, liste du personnel actif, journal des charges de personnel du grand livre.",
    steps: [
      {
        title: 'Demandez trois pièces à la Finance et aux RH',
        actions: [
          "1. L'état de paie nominatif de mai, juin et juillet 2026, au format Excel.",
          "2. La liste du personnel actif au 31 juillet 2026, avec la date d'entrée de chaque personne.",
          "3. Le détail des charges de personnel du grand livre pour les mêmes mois.",
        ],
      },
      {
        title: 'Rapprochez les trois sources en trois contrôles',
        actions: [
          "Effectif : comparez le nombre de lignes de paie au nombre de noms de la liste RH, puis listez les noms présents d'un côté seulement (Données > Supprimer les doublons, ou RECHERCHEV).",
          "Montant : comparez le total brut de l'état de paie au grand livre.",
          "Mouvements : repérez tout nom resté sur la paie après une date de sortie, et listez les entrées de la période.",
        ],
      },
      {
        title: 'Faites expliquer par écrit chaque différence avant de continuer',
        body: "Un écart sans explication écrite bloque la suite : vous ne saurez pas de quelle population vous tirez l'échantillon.",
      },
    ],
    example: {
      title: 'Rapprochement du 17 août 2026',
      lines: [
        "État de paie de juillet : 44 lignes, masse salariale brute 19 800 USD. Liste RH du personnel actif : 44 noms, aucun nom isolé.",
        "Grand livre, charges de personnel de juillet : 19 800 USD → écart 0.",
        "Sorties : 2 départs en juin (un chauffeur, un gardien de nuit), absents de la paie de juillet : conforme.",
        "Entrées depuis mars : 3 personnes, dont Bahati M. (agent de suivi communautaire, entré le 02/03/2026) — notées pour mémoire.",
      ],
    },
    result: "Une liste de 44 lignes dont l'exhaustivité est vérifiée (écart 0 avec la liste RH et avec le grand livre) et la liste des entrées et sorties de la période.",
    pitfall: "Tirer l'échantillon directement dans l'extraction remise par le service audité sans la rapprocher du grand livre : si la liste a été « nettoyée », vous ne verrez jamais le fantôme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Définir les strates, la taille et la méthode de tirage',
    intro: "Pourquoi : ne prenez jamais uniquement les postes à risque évident (chauffeurs, gardiens, journaliers). Un échantillon biaisé sur les postes les plus visibles laisse passer les fraudes qui se nichent dans l'encadrement. Entrée : la liste de 44 lignes vérifiée.",
    steps: [
      {
        title: 'Répartissez les 44 lignes en trois strates',
        actions: [
          "Terrain : agents de suivi communautaire, chauffeurs, gardiens, agents d'entretien.",
          "Supervision : superviseurs, infirmiers titulaires, coordination adjointe.",
          "Administration : finance, logistique, assistance administrative et RH.",
        ],
      },
      {
        title: 'Fixez un minimum de 20 % par strate, arrondi à l\'entier supérieur',
        body: "Ajoutez ensuite les postes à risque : nouveaux entrants, postes isolés, personnes percevant des indemnités.",
      },
      {
        title: 'Tirez chaque strate au hasard, puis ajoutez les postes ciblés',
        actions: [
          "Collez la strate dans une feuille de travail, ajoutez une colonne =ALEA() (ALEATOIRE dans certaines versions), triez-la et retenez les n premières lignes.",
          "Ajoutez à la main les personnes ciblées par le risque, et écrivez pourquoi.",
        ],
      },
      {
        title: 'Écrivez la méthode en trois lignes dans le dossier de mission',
        body: "Date du tirage, règle de tirage, personnes ajoutées par jugement. Un auditeur externe doit pouvoir refaire le raisonnement.",
      },
    ],
    table: {
      columns: ['Strate', 'Effectif', 'Minimum 20 %', 'Retenu', 'Composition'],
      rows: [
        ['Terrain', '22', '5', '6', '4 agents de suivi communautaire, 1 chauffeur, 1 gardien'],
        ['Supervision', '8', '2', '3', 'Superviseure communautaire, infirmier titulaire, coordinatrice adjointe'],
        ['Administration', '14', '3', '3', 'Comptable, assistante administrative et RH, logisticien'],
        ['Total', '44', '10', '12', '27 % de l\'effectif'],
      ],
    },
    example: {
      title: 'Personnes ajoutées par jugement (note au dossier du 17/08)',
      lines: [
        "Bahati M. : entrée en mars 2026 (nouvel entrant, poste de terrain isolé dans l'aire de Sange).",
        "Elie T. : perçoit une indemnité distincte du salaire de base sur la ligne de paie de juillet.",
        "Les 10 autres personnes sont issues du tirage aléatoire (colonne =ALEA(), tri croissant).",
      ],
    },
    result: "Un échantillon de 12 personnes réparti dans les trois strates, avec une méthode écrite que vous pouvez défendre.",
    tip: "Tirez toujours un peu au-dessus du minimum : quand un signal apparaît, vous aurez besoin de marge pour élargir sans repartir de zéro.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Ouvrir la grille et la préparer pour votre périmètre',
    intro: "Pourquoi : un fichier d'audit se prépare avant d'être rempli, sinon les exemples du template finissent dans votre dossier. Quand : jour 1. Outil : grille-audit-paie-presences.xlsx, onglet « Paie & Présences ».",
    steps: [
      {
        title: 'Enregistrez une copie de travail',
        body: "Fichier > Enregistrer sous : 2026-08-17_Grille_Paie_Uvira.xlsx, dans le dossier « 03_Terrain » de la mission.",
      },
      {
        title: 'Repérez la structure de l\'onglet',
        actions: [
          "Ligne 4 : les intitulés des 9 colonnes A à I.",
          "Lignes 5 à 24 : 20 lignes de saisie ; les lignes 5 et 6 contiennent deux exemples fictifs (Amara K. et Paul N.).",
          "Colonnes F et I : formules déjà posées sur les 20 lignes ; colonne G : liste déroulante Oui / Non.",
          "Cellule D28 : nombre de lignes en « RISQUE GHOST WORKER ». Cellule A26 : la note de lecture du drapeau.",
        ],
      },
      {
        title: 'Effacez les deux lignes d\'exemple sans toucher aux formules',
        actions: [
          "Sélectionnez A5:E6, appuyez sur Suppr. Sélectionnez G5:H6, appuyez sur Suppr.",
          "Ne touchez ni à F5:F6 ni à I5:I6 : ce sont des formules.",
          "Vérifiez que la liste Oui / Non de la colonne G fonctionne encore.",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Intitulé dans le template', 'Nature'],
      rows: [
        ['A', 'Employé (nom, poste)', 'Saisie'],
        ['B', 'Site / commune', 'Saisie'],
        ['C', 'Période contrôlée', 'Saisie'],
        ['D', 'Salaire payé (bulletin)', 'Saisie, en USD'],
        ['E', 'Salaire autorisé (contrat)', 'Saisie, en USD'],
        ['F', 'Écart (calculé)', 'Formule : D − E'],
        ['G', 'Présence confirmée sur site (source indépendante) ?', 'Liste : Oui / Non'],
        ['H', 'Nb. périodes consécutives sans confirmation', 'Saisie, nombre entier'],
        ['I', 'Risque ghost worker', 'Formule : OK / À surveiller / RISQUE GHOST WORKER'],
      ],
    },
    result: "Une grille vierge, identifiée et enregistrée, dont les formules des colonnes F et I et la liste de la colonne G sont intactes.",
    pitfall: "Taper par-dessus une cellule de la colonne F ou I « pour aller plus vite » : la formule disparaît et le drapeau ne se déclenchera plus, sans aucun message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Saisir l\'identité et le salaire payé (colonnes A à D)',
    intro: "Pourquoi : la colonne D doit refléter ce qui a été réellement versé, copié à la source. Entrées : l'échantillon de 12 personnes, les bulletins de juillet 2026. Les colonnes E, G et H restent vides à ce stade : elles se remplissent avec les preuves des procédures 2 et 3.",
    steps: [
      {
        title: 'Saisissez la colonne A au format « Nom Initiale, poste »',
        body: "Utilisez le même format sur toutes les lignes : vous pourrez trier et rechercher sans erreur.",
      },
      {
        title: 'Saisissez le site (B) et la période (C)',
        actions: [
          "B : aire de santé pour les agents de terrain, « Uvira (base) » pour les autres.",
          "C : « Juil. 2026 », le dernier mois clos, pour toutes les lignes. Les mois de mai et juin serviront à compter les périodes sans confirmation (procédure 3).",
        ],
      },
      {
        title: 'Copiez le salaire payé (D) depuis le bulletin, pas depuis le tableau récapitulatif',
        actions: [
          "Ouvrez le bulletin de juillet de chaque personne et recopiez le montant total payé.",
          "Contrôlez que les bulletins de mai et de juin portent le même montant ; notez toute différence en commentaire de cellule.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'A — Employé, poste', 'B — Site', 'C — Période', 'D — Payé (USD)'],
      rows: [
        ['5', 'Bahati M., agent de suivi communautaire', 'Sange', 'Juil. 2026', '380'],
        ['6', 'Neema K., agent de suivi communautaire', 'Kiliba', 'Juil. 2026', '380'],
        ['7', 'Elie T., agent de suivi communautaire', 'Luvungi', 'Juil. 2026', '440'],
        ['8', 'Chantal A., agent de suivi communautaire', 'Kavimvira', 'Juil. 2026', '380'],
        ['9', 'Rénald K., chauffeur', 'Uvira (base)', 'Juil. 2026', '340'],
        ['10', 'Sylvain M., gardien', 'Uvira (base)', 'Juil. 2026', '190'],
        ['11', 'Mireille N., superviseure communautaire', 'Uvira (base)', 'Juil. 2026', '620'],
        ['12', 'Dr Josias B., infirmier titulaire', 'Sange', 'Juil. 2026', '700'],
        ['13', 'Aimée Z., coordinatrice adjointe projet', 'Uvira (base)', 'Juil. 2026', '780'],
        ['14', 'Odette L., comptable', 'Uvira (base)', 'Juil. 2026', '640'],
        ['15', 'Solange P., assistante administrative et RH', 'Uvira (base)', 'Juil. 2026', '450'],
        ['16', 'Gédéon R., logisticien', 'Uvira (base)', 'Juil. 2026', '560'],
      ],
    },
    result: "Douze lignes saisies (lignes 5 à 16), colonnes A à D complètes. Tant que la colonne E est vide, la colonne F affiche le salaire entier : c'est normal.",
    pitfall: "Saisir les montants d'après un tableau récapitulatif produit par l'audité : copiez toujours depuis le bulletin ou la pièce de paiement, sinon vous contrôlez sa version de la paie, pas la paie.",
  },

  // ── Procédure 2 — Croiser avec le dossier RH ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Rassembler les documents contractuels de chaque personne',
    intro: "Pourquoi : le contrat de travail dit ce qui est autorisé ; la feuille de paie ne dit que ce qui a été payé. Un audit qui compare la paie à elle-même ne détecte jamais rien : il faut une source externe au circuit de paie. Quand : jour 2 (mardi 18 août). Entrées : les scans des dossiers RH conservés à Goma, reçus le 14 août.",
    steps: [
      {
        title: 'Demandez la liste des pièces attendues, pas « le dossier »',
        actions: [
          "Contrat signé par les deux parties.",
          "Tous les avenants, numérotés et datés.",
          "Les notes de service sur la rémunération et les indemnités, datées et signées.",
          "La grille salariale de HSGL et la politique RH sur les indemnités.",
        ],
      },
      {
        title: 'Contrôlez la complétude de chaque dossier',
        actions: [
          "La date d'entrée du contrat correspond à la date du premier bulletin.",
          "Aucun avenant ne manque dans la numérotation.",
          "Chaque indemnité de la paie a un document dans le dossier.",
        ],
      },
      {
        title: 'Notez les pièces manquantes avant de passer à la saisie',
        body: "Une pièce manquante se demande par écrit à Gaspard T., avec une date limite : elle ne se « devine » pas.",
      },
    ],
    table: {
      columns: ['Personne', 'Contrat signé', 'Avenants', 'Notes de service', 'Observation'],
      rows: [
        ['Bahati M.', '02/03/2026', 'Aucun', 'Aucune', 'Dossier complet, en règle'],
        ['Elie T.', '01/09/2025', 'Aucun', 'Aucune sur les indemnités', 'Indemnité de déplacement sans pièce'],
        ['Sylvain M.', '15/01/2024', 'Avenant n° 1 (2025)', 'Reçu d\'avance du 03/06/2026', 'Pièces cohérentes'],
        ['Mireille N.', '01/06/2024', 'Avenant n° 1 (2025)', 'Prime de responsabilité, 10/01/2026', 'Pièces cohérentes'],
        ['Dr Josias B.', '05/02/2023', 'Avenants n° 1 et 2', 'Aucune', 'Indemnité de logement prévue au contrat'],
      ],
    },
    result: "Les dossiers des 12 personnes de l'échantillon sont rassemblés, leur complétude est notée et les pièces manquantes sont demandées par écrit.",
    pitfall: "Accepter un dossier « trop propre » comme une preuve. Un dossier impeccable et des bulletins sans erreur ne disent rien du travail réellement effectué.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Reporter le salaire autorisé (colonne E) et lire l\'écart (colonne F)',
    intro: "Pourquoi : la formule d'écart ne vaut que si la colonne E vient d'un document contractuel, jamais de la paie. Entrées : les dossiers rassemblés à l'étape 1, la grille ouverte.",
    steps: [
      {
        title: 'Reportez en colonne E le salaire autorisé par le contrat',
        actions: [
          "Lisez le dernier avenant en vigueur, sinon le contrat.",
          "Additionnez le salaire de base et les indemnités que ce contrat, cet avenant ou une note de service signée prévoient.",
          "Comparez toujours brut avec brut (ou net avec net) : le bulletin et le contrat doivent être sur la même base.",
        ],
      },
      {
        title: 'Lisez la colonne F sans la corriger',
        actions: [
          "F = D − E : un écart positif signifie « payé plus que le contrat », un écart négatif « payé moins ».",
          "Ne modifiez jamais D pour faire disparaître un écart.",
        ],
      },
      {
        title: 'Listez toutes les lignes dont F est différent de zéro',
        body: "Chacune devra être expliquée ou documentée à l'étape 3.",
      },
    ],
    table: {
      columns: ['Ligne', 'Employé', 'D — Payé', 'E — Autorisé', 'F — Écart'],
      rows: [
        ['5', 'Bahati M.', '380', '380', '0'],
        ['6', 'Neema K.', '380', '380', '0'],
        ['7', 'Elie T.', '440', '380', '60'],
        ['8', 'Chantal A.', '380', '380', '0'],
        ['9', 'Rénald K.', '340', '340', '0'],
        ['10', 'Sylvain M.', '190', '210', '−20'],
        ['11', 'Mireille N.', '620', '620', '0'],
        ['12', 'Dr Josias B.', '700', '700', '0'],
        ['13', 'Aimée Z.', '780', '780', '0'],
        ['14', 'Odette L.', '640', '640', '0'],
        ['15', 'Solange P.', '450', '450', '0'],
        ['16', 'Gédéon R.', '560', '560', '0'],
      ],
    },
    result: "Colonnes E et F renseignées pour 12 lignes : deux écarts à traiter (+60 USD pour Elie T., −20 USD pour Sylvain M.), dix lignes à zéro.",
    pitfall: "Conclure « aucune anomalie » parce que dix lignes sur douze sont à zéro. Un écart nul ne dit rien de la présence : la ligne de Bahati M. est à zéro, et c'est précisément ce qui rend ce cas piégeux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Expliquer ou documenter chaque écart',
    intro: "Pourquoi : tout écart non expliqué par une note de service datée et signée est une anomalie à documenter, jamais à ignorer parce que « c'est probablement une régularisation ». Entrées : la liste des lignes à écart, les dossiers RH, la politique RH sur les indemnités.",
    steps: [
      {
        title: 'Cherchez, pour chaque écart, une pièce explicative datée et signée',
        actions: [
          "Note de service, avenant, décision RH signée.",
          "Reçu d'avance ou retenue autorisée par l'employé.",
          "Une explication orale ne suffit pas : demandez la pièce.",
        ],
      },
      {
        title: 'Classez chaque écart en trois catégories',
        actions: [
          "Expliqué et régulier : une pièce datée et signée justifie le montant.",
          "Expliqué mais irrégulier : une explication existe, mais la pièce manque ou arrive après coup.",
          "Non expliqué : aucune pièce ; anomalie à documenter.",
        ],
      },
      {
        title: 'Rédigez une phrase d\'anomalie au format fait + montant + période + source',
      },
    ],
    table: {
      columns: ['Écart', 'Pièce trouvée', 'Classement', 'Suite'],
      rows: [
        ['Sylvain M. : −20 USD', "Reçu d'avance de 60 USD signé le 03/06/2026, remboursement en 3 retenues de 20 USD", 'Expliqué et régulier', "Vérifier que la retenue s'arrête après la 3e échéance (août)"],
        ['Elie T. : +60 USD', "Aucune. La politique RH ne prévoit une indemnité de déplacement que sur ordre de mission", 'Non expliqué', 'Documenter, demander la base à Gaspard T., poser la question au superviseur'],
      ],
    },
    example: {
      title: 'Phrase d\'anomalie rédigée le 18 août 2026',
      lines: [
        "« Une indemnité de déplacement de 60 USD par mois est versée à Elie T. depuis avril 2026 (180 USD sur la période mai-juillet, 240 USD depuis avril). Le dossier RH ne contient ni avenant ni note de service la justifiant ; la politique RH (art. 7) la réserve aux déplacements sur ordre de mission. — Source : bulletins de paie, dossier RH, politique RH. »",
      ],
    },
    result: "Deux écarts classés, dont une anomalie documentée en une phrase sourcée, prête à être reprise dans le rapport.",
    tip: "Une anomalie documentée n'est pas une accusation : « sans pièce justificative » ne veut pas dire « irrégulier de mauvaise foi ». Décrivez le fait, laissez la direction expliquer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Contrôler les indemnités récurrentes de toute la paie',
    intro: "Pourquoi : une indemnité qui revient chaque mois pour le même montant sans document contractuel est le red flag classique ; une indemnité « parce que c'est comme ça depuis toujours » n'est pas une base d'audit acceptable. Votre échantillon n'en montre qu'une partie : vérifiez-les toutes dans l'état de paie de juillet.",
    steps: [
      {
        title: 'Extrayez les rubriques d\'indemnité de l\'état de paie',
        actions: [
          "Ouvrez l'état de paie de juillet, filtrez les colonnes de primes et d'indemnités (prime de risque, déplacement, responsabilité, logement).",
          "Insérez un tableau croisé dynamique : rubrique en lignes, nombre de bénéficiaires et somme en valeurs.",
        ],
      },
      {
        title: 'Cherchez la base contractuelle de chaque indemnité récurrente',
        body: "Un avenant, une note de service signée ou une clause du contrat doit justifier le principe ET le montant.",
      },
      {
        title: 'Classez chaque rubrique : documentée ou sans base',
      },
      {
        title: 'Chiffrez l\'exposition de chaque rubrique sans base',
        body: "Montant mensuel × nombre de mois de la période contrôlée, puis depuis l'origine si les bulletins le permettent.",
      },
    ],
    table: {
      columns: ['Rubrique', 'Bénéficiaires', 'Montant mensuel', 'Document justificatif', 'Statut'],
      rows: [
        ['Prime de risque terrain', '12 ASC et 4 chauffeurs', '20 USD', 'Avenant collectif n° 1 de janvier 2026', 'Documentée'],
        ['Prime de responsabilité', 'Mireille N.', '40 USD', 'Note de service signée du 10/01/2026', 'Documentée'],
        ['Indemnité de logement', 'Dr Josias B.', '80 USD', 'Clause 4 du contrat', 'Documentée'],
        ['Indemnité de déplacement', 'Elie T.', '60 USD', 'Aucun', 'Sans base : 180 USD sur la période'],
      ],
    },
    result: "Quatre rubriques contrôlées sur toute la paie : trois documentées, une sans base (Elie T., 180 USD sur mai-juillet), cohérente avec l'anomalie de l'étape 3.",
    pitfall: "Vous limiter à l'échantillon : une indemnité sans base touchant une personne de l'échantillon doit vous faire contrôler les mêmes rubriques sur les 44 lignes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Rapprocher les retenues de cotisations du récépissé de versement',
    intro: "Pourquoi : une retenue sur le bulletin qui n'arrive jamais à l'organisme crée une trésorerie parallèle ; une base de calcul erronée réduit la charge affichée au bailleur. La seule façon de le voir est de croiser les retenues avec le récépissé, jamais de se contenter du bulletin. La grille ne calcule pas les cotisations : faites ce rapprochement dans une feuille de travail séparée de votre dossier.",
    steps: [
      {
        title: 'Totalisez les retenues du mois sur l\'état de paie',
        body: "Prenez la colonne des retenues salariales de sécurité sociale (INSS en RDC) de juillet et additionnez-la.",
      },
      {
        title: 'Demandez le récépissé de versement et la liste nominative des personnes déclarées',
        body: "Pièce émise par l'organisme, pas par la Finance de l'ONG.",
      },
      {
        title: 'Rapprochez montants et nombre de personnes',
        actions: [
          "Montant retenu moins montant versé = écart à expliquer.",
          "Nombre de lignes de paie moins nombre de personnes déclarées = personnes à identifier.",
        ],
      },
      {
        title: 'Identifiez les personnes concernées et chiffrez l\'exposition',
        body: "Comparez les noms de l'état de paie à la liste nominative de l'organisme.",
      },
      {
        title: 'Classez l\'écart : erreur de base, retard de versement, ou à investiguer',
        body: "Écrivez ce que vous observez, pas ce que vous supposez.",
      },
    ],
    table: {
      columns: ['Contrôle', 'Valeur', 'Source'],
      rows: [
        ['Masse salariale brute de juillet 2026', '19 800 USD', 'État de paie'],
        ['Retenues salariales de 5 % (taux à confirmer dans la réglementation applicable)', '990 USD', 'Bulletins de paie'],
        ['Montant versé selon le récépissé', '971 USD', 'Récépissé INSS de juillet'],
        ['Écart retenu non versé', '19 USD, soit 5 % de 380 USD', 'Calcul'],
        ['Personnes sur la paie / personnes déclarées', '44 / 43', 'État de paie, liste nominative INSS'],
      ],
    },
    example: {
      title: 'Résultat du rapprochement du 18 août 2026',
      lines: [
        "L'écart de 19 USD correspond exactement à 5 % d'un salaire de 380 USD : une seule personne n'est pas déclarée.",
        "Comparaison des noms : la personne absente de la liste de l'organisme est Bahati M.",
        "Lecture : erreur de déclaration d'un nouvel entrant, ou personne qui n'existe pas dans l'organisme ? Les deux sont possibles ; cet indice relève du circuit RH et ne prouve donc pas l'absence de la personne sur le terrain.",
      ],
    },
    result: "Un écart chiffré (19 USD retenus non reversés), rattaché à un nom, classé « à investiguer » et noté comme indice à croiser avec la procédure 3.",
    pitfall: "Utiliser ce rapprochement comme preuve d'absence : il vient du circuit RH et finance, il n'est donc pas indépendant des documents que vous contrôlez. Il alimente le soupçon, il ne le remplace pas.",
  },

  // ── Procédure 3 — Vérifier la présence physique ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Dresser la liste des sources de confirmation indépendantes',
    intro: "Pourquoi : c'est l'étape que les auditeurs juniors sautent le plus souvent, et c'est la plus importante. Une feuille de présence signée prouve qu'un document a été rempli : elle ne prouve jamais qu'une personne était physiquement sur site. Quand : jours 3 et 4 (19 et 20 août). Entrée : la grille avec colonnes A à F.",
    steps: [
      {
        title: 'Pour chaque catégorie de poste, listez les sources possibles',
        body: "Pensez à qui, hors de la ligne RH et hors de la ligne hiérarchique directe, voit la personne travailler.",
      },
      {
        title: 'Appliquez le test d\'indépendance à chaque source',
        actions: [
          "Qui a produit la source ? La personne contrôlée, ou quelqu'un qui l'a remplie à sa place : non indépendante.",
          "Peut-elle être remplie à l'avance, ou signée par complaisance en fin de mois, sans que personne le sache ? Si oui : non indépendante.",
          "A-t-elle été produite par un tiers (un superviseur qui n'est pas la personne, un centre de santé, un bénéficiaire) à une date traçable ? Si oui : indépendante. Plus ce tiers est éloigné de la ligne hiérarchique de la personne, plus la source est solide.",
        ],
      },
      {
        title: 'Retenez une source principale et une source de secours par poste',
      },
    ],
    table: {
      columns: ['Poste', 'Sources indépendantes', 'Sources non indépendantes'],
      rows: [
        ['Agent de suivi communautaire', "Registre du centre de santé (colonne « référé par »), listes de distribution de produits nutritionnels, listes d'émargement des réunions communautaires, rapports de supervision", "Feuille de présence signée en fin de mois, rapport d'activité de l'agent"],
        ['Chauffeur', "Carnets de bord, bons de carburant, ordres de mission, fiche d'entretien du garage", 'Feuille de présence'],
        ['Gardien', "Registre des visiteurs, témoignage de l'équipe de jour, rapport de ronde signé par un tiers", 'Feuille de présence'],
        ['Supervision', "Courriels horodatés, comptes rendus de réunion signés par des tiers, rapports de visite reçus par la direction", "Auto-déclaration de présence"],
        ['Administration', "Journaux de connexion, signatures de tiers sur des pièces datées, échanges de courriels", 'Feuille de présence'],
      ],
    },
    result: "Pour chaque poste de l'échantillon, une source principale et une source de secours qui passent le test d'indépendance.",
    pitfall: "Prendre la feuille de présence signée en fin de mois par le superviseur comme source de confirmation. Elle peut être remplie à l'avance ou signée par complaisance : elle ne compte jamais dans la colonne G.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Collecter les preuves et bâtir la matrice des présences',
    intro: "Pourquoi : la colonne G ne se remplit pas de mémoire. Chaque « Oui » doit renvoyer à une référence que vous retrouverez en une minute. Entrées : les sources retenues à l'étape 1. Outil : une feuille de travail à vous (la grille n'a pas de colonne de références).",
    steps: [
      {
        title: 'Collectez les documents vous-même, auprès de leur détenteur',
        body: "Ne demandez pas à la ligne hiérarchique de la personne de vous les envoyer : un document que l'audité vous apporte peut avoir été « complété » avant.",
      },
      {
        title: 'Cherchez, pour chaque personne et chaque mois, au moins une mention',
        actions: [
          "Mois contrôlés : mai, juin, juillet 2026.",
          "Notez la référence de chaque preuve : document, date, page ou numéro.",
        ],
      },
      {
        title: 'Notez aussi les absences de mention',
        body: "« Zéro mention sur trois rapports » est une information d'audit : écrivez-la, avec les références des rapports consultés.",
      },
    ],
    table: {
      columns: ['Personne', 'Mai', 'Juin', 'Juillet', 'Références'],
      rows: [
        ['Bahati M.', 'Aucune', 'Aucune', 'Aucune', "Rapports de supervision du 12/05, 16/06, 14/07 : aucune mention ; listes d'émargement des 3 réunions de Sange : absent ; registre du centre de santé de Sange : aucune référence"],
        ['Neema K.', 'Oui', 'Oui', 'Oui', "Les 3 rapports de supervision ; listes d'émargement de Kiliba"],
        ['Rénald K.', 'Oui', 'Oui', 'Oui', "Carnet de bord du véhicule : 41, 38 et 44 trajets"],
        ['Solange P.', 'Oui', 'Oui', 'Aucune', "Courriels horodatés en mai et juin ; aucune source indépendante en juillet"],
        ['Odette L.', 'Oui', 'Oui', 'Oui', "Signatures de tiers sur les pièces comptables, courriels"],
      ],
    },
    result: "Une matrice personne × mois × références pour les 12 personnes, qui permet de remplir la colonne G sans hésitation.",
    tip: "Faites accompagner vos collectes d'un second regard : pour le centre de santé de Sange, Fatou S. consulte le registre pendant que vous interrogez l'infirmier titulaire. Deux témoins du même constat valent mieux qu'un.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Renseigner la colonne G : présence confirmée, oui ou non',
    intro: "Pourquoi : la colonne G déclenche le drapeau. Une règle claire, écrite avant de saisir, évite que le même fait reçoive deux réponses selon les lignes. Entrée : la matrice de l'étape 2.",
    steps: [
      {
        title: 'Posez la règle par écrit en tête de votre feuille de travail',
        actions: [
          "« Oui » = au moins une confirmation indépendante de présence dans la période contrôlée (juillet 2026).",
          "« Non » = aucune confirmation indépendante trouvée, malgré la recherche des sources prévues.",
          "Jamais de cellule vide, jamais « Oui » sur la base de la seule feuille de présence.",
        ],
      },
      {
        title: 'Choisissez la valeur dans la liste déroulante de chaque cellule G5 à G16',
        body: "Cliquez la cellule, ouvrez la liste, choisissez Oui ou Non. Ne tapez pas à la main : une faute de frappe désactive le drapeau.",
      },
      {
        title: 'Pour chaque « Non », notez ce que vous avez cherché',
        body: "Ajoutez un commentaire de cellule : sources consultées et dates. Un « Non » doit rester défendable face à la personne concernée.",
      },
    ],
    table: {
      columns: ['Ligne', 'Employé', 'Source retenue pour juillet', 'G'],
      rows: [
        ['5', 'Bahati M.', 'Aucune source indépendante trouvée', 'Non'],
        ['6', 'Neema K.', 'Rapport de supervision du 14/07', 'Oui'],
        ['7', 'Elie T.', 'Rapport de supervision du 14/07', 'Oui'],
        ['8', 'Chantal A.', 'Liste d\'émargement de Kavimvira du 21/07', 'Oui'],
        ['9', 'Rénald K.', 'Carnet de bord, 44 trajets', 'Oui'],
        ['10', 'Sylvain M.', 'Registre des visiteurs de la base, juillet', 'Oui'],
        ['11', 'Mireille N.', 'Rapport de supervision du 14/07 (auteure) et courriels de Dr Claudine M.', 'Oui'],
        ['12', 'Dr Josias B.', 'Registre de dépistage du centre de santé de Sange', 'Oui'],
        ['13', 'Aimée Z.', 'Compte rendu de la réunion de coordination du 08/07', 'Oui'],
        ['14', 'Odette L.', 'Pièces comptables signées par un tiers', 'Oui'],
        ['15', 'Solange P.', 'Aucune source indépendante pour juillet', 'Non'],
        ['16', 'Gédéon R.', 'Bons de commande signés par des tiers', 'Oui'],
      ],
    },
    result: "La colonne G est complète pour les 12 lignes : dix « Oui » référencés, deux « Non » (Bahati M. et Solange P.) dont la recherche est tracée.",
    pitfall: "Mettre « Oui » à Mireille N. parce qu'elle a signé le rapport de supervision qui mentionne les autres : sa propre présence se confirme par une source venant de quelqu'un d'autre (ici les courriels de la coordinatrice).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Compter les périodes consécutives sans confirmation (colonne H)',
    intro: "Pourquoi : un « Non » isolé est un trou de documentation ; plusieurs « Non » consécutifs forment un signal. La colonne H mesure cette durée. Entrée : la matrice mois par mois de l'étape 2.",
    steps: [
      {
        title: 'Remontez mois par mois à partir de la période contrôlée',
        body: "Juillet, puis juin, puis mai : arrêtez-vous au premier mois où une confirmation indépendante existe.",
      },
      {
        title: 'Comptez les mois consécutifs sans confirmation',
        actions: [
          "Une période couverte par un congé ou une maladie documentés ne compte pas comme « sans confirmation » : notez-la en commentaire.",
          "Pour une ligne dont G vaut « Oui », saisissez 0.",
        ],
      },
      {
        title: 'Saisissez le nombre entier dans la colonne H',
        body: "Si votre recherche ne couvre que trois mois, H ne peut pas dépasser 3 : notez la limite, vous l'étendrez en procédure 7.",
      },
    ],
    table: {
      columns: ['Ligne', 'Employé', 'Mois sans confirmation (juillet, juin, mai)', 'H'],
      rows: [
        ['5', 'Bahati M.', 'Juillet, juin, mai : aucune', '3'],
        ['15', 'Solange P.', 'Juillet : aucune ; juin : confirmée par courriels', '1'],
        ['6 à 14 et 16', 'Les dix autres', 'Confirmation trouvée dès juillet', '0'],
      ],
    },
    result: "La colonne H est saisie : Bahati M. à 3 périodes (à étendre en procédure 7), Solange P. à 1, les autres à 0.",
    tip: "La recherche des sources de Bahati M. ne couvre que mai-juillet : saisissez 3 et commentez « recherche limitée à 3 mois ». Un chiffre prudent et honnête vaut mieux qu'un chiffre extrapolé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Lire la colonne I et la cellule D28, puis trier les signaux',
    intro: "Pourquoi : la colonne I résume la logique de la procédure ; vous devez pouvoir la refaire à la main et expliquer ce qu'elle dit — et ce qu'elle ne dit pas. Entrée : colonnes G et H saisies.",
    steps: [
      {
        title: 'Lisez la règle de la colonne I',
        actions: [
          "G = Non et H ≥ 2 : « RISQUE GHOST WORKER » (ligne en rouge).",
          "G = Non et H < 2 : « À surveiller » (ligne en orange).",
          "G = Oui : « OK ».",
          "La note de la cellule A26 rappelle que le fichier déclenche dès 2 périodes consécutives ; le cas de Bahati M. en compte 3.",
        ],
      },
      {
        title: 'Lisez le compteur de la cellule D28',
        body: "D28 compte uniquement les lignes en « RISQUE GHOST WORKER » : ce n'est pas le nombre d'anomalies de la paie.",
      },
      {
        title: 'Rédigez une ligne par signal, avec le vocabulaire de la prudence',
        actions: [
          "« Signal à investiguer », « absence de confirmation indépendante » : jamais « fraude ».",
          "Pour chaque « À surveiller » : fixez la date où vous refaites la recherche.",
        ],
      },
    ],
    table: {
      columns: ['Résultat de la colonne I', 'Lignes', 'Décision'],
      rows: [
        ['RISQUE GHOST WORKER', '1 (Bahati M.)', 'Investigation selon la procédure 7 ; aucune communication hors canal d\'audit'],
        ['À surveiller', '1 (Solange P.)', "Demander l'ordre de mission de juillet ; relancer la recherche sous une semaine"],
        ['OK', '10', 'Aucune action ; conserver les références'],
        ['D28', '1', 'Un seul signal à investiguer sur 12 lignes'],
      ],
    },
    example: {
      title: 'Ligne de synthèse rédigée le 20 août 2026',
      lines: [
        "« Bahati M. (agent de suivi communautaire, Sange) : salaire payé conforme au contrat (écart 0) ; aucune confirmation indépendante de présence sur 3 mois consécutifs (mai-juillet 2026) ; le drapeau « RISQUE GHOST WORKER » se déclenche. Signal à investiguer ; aucune conclusion à ce stade. »",
      ],
    },
    result: "La grille est lue : un signal à investiguer, un point à surveiller, dix lignes confirmées, et une phrase de synthèse prudente au dossier.",
    pitfall: "Lire « RISQUE » comme une conclusion, ou « OK » comme une absolution : le drapeau est un signal à investiguer, et un « OK » ne couvre que la période et la source que vous avez testées.",
  },

  // ── Procédure 4 — Congés, présences, heures supplémentaires ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Rassembler registre de congés, feuilles de temps et heures sup payées',
    intro: "Pourquoi : un contrôle des heures supplémentaires sans les congés et les présences compare des chiffres sans contexte. Quand : jour 4 (jeudi 20 août, matin). Entrées : les trois mois les plus récents disponibles (jusqu'à six si les données existent). Vous croisez trois sources qui ne sont pas tenues par les mêmes mains.",
    steps: [
      {
        title: 'Demandez les trois documents, par mois',
        actions: [
          "Le registre des congés et absences (congés annuels, maladie, permissions).",
          "Les feuilles de temps mensuelles de chaque équipe.",
          "Le détail des heures supplémentaires payées par personne dans l'état de paie.",
        ],
      },
      {
        title: 'Vérifiez qui tient chaque document',
        body: "Le registre est tenu par l'assistante administrative, les feuilles de temps par les superviseurs, l'état de paie par les RH. Trois mains différentes : c'est ce qui rend le croisement utile.",
      },
      {
        title: 'Vérifiez que les trois sources couvrent les mêmes mois',
        body: "Un mois manquant dans une source rend impossible le croisement : demandez-le avant de commencer.",
      },
    ],
    table: {
      columns: ['Document', 'Tenu par', 'Période', 'Reçu le'],
      rows: [
        ['Registre des congés et absences 2026', 'Solange P.', 'Janvier à juillet 2026', '20/08/2026'],
        ['Feuilles de temps des 4 équipes', 'Superviseurs d\'équipe', 'Mai, juin, juillet 2026', '20/08/2026'],
        ['Heures supplémentaires payées, par personne', 'RH, Goma', 'Mai, juin, juillet 2026', '20/08/2026'],
      ],
    },
    result: "Trois documents couvrant les mêmes trois mois, avec le nom de leur détenteur, prêts pour le croisement.",
    pitfall: "Ne demander que l'état des heures supplémentaires payées : vous ne verrez ni les congés pris les mêmes jours ni les jours où la personne n'était pas là.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Croiser congés, absences, présences et paie (triple rapprochement)',
    intro: "Pourquoi : une personne en congé qui apparaît sur une liste de présence, ou qui perçoit des heures supplémentaires le même jour, signale un registre qui n'est pas tenu à jour, ou pire. Cette vérification de cohérence se fait dans une feuille de travail à part : la grille n'a pas de colonne de congés. Entrées : les trois documents de l'étape 1, la matrice des présences de la procédure 3.",
    steps: [
      {
        title: 'Listez pour chaque personne de l\'échantillon les jours de congé et d\'absence du registre',
      },
      {
        title: 'Comparez ces jours aux sources de présence et aux heures supplémentaires payées',
        actions: [
          "Présence confirmée par une source indépendante un jour de congé : incohérence.",
          "Heures supplémentaires payées un jour de congé : incohérence.",
          "Congé payé alors que la personne est confirmée sur site : incohérence.",
        ],
      },
      {
        title: 'Calculez le solde de congés acquis et non pris au 31 juillet',
        body: "Un solde très élevé signale un contrôle faible : pas de rotation, pas de continuité en cas d'absence, et un risque de passif financier.",
      },
      {
        title: 'Classez chaque incohérence avant de conclure',
        body: "Pièce datée qui l'explique : écart expliqué ; aucune pièce : à documenter.",
      },
    ],
    table: {
      columns: ['Personne', 'Registre des congés', 'Constat croisé', 'Classement'],
      rows: [
        ['Chantal A.', 'Congé annuel du 08 au 19 juin (10 jours ouvrés)', "Présente à la réunion communautaire de Kavimvira du 11/06 (liste d'émargement)", "Expliqué : congé reporté par courriel de Mireille N. du 05/06, mais registre non corrigé. Contrôle faible du registre"],
        ['Elie T.', '31 jours de congé annuel acquis et non pris au 31/07', 'Aucun congé enregistré depuis janvier', 'À documenter : solde élevé, pas de rotation, passif à provisionner'],
        ['Rénald K.', 'Congé du 13 au 17 juillet', "Carnet de bord : aucun trajet ces jours-là ; aucune heure supplémentaire payée", 'Cohérent'],
      ],
    },
    result: "Trois cas croisés : un expliqué (registre à corriger), un à documenter (solde de congés), un cohérent. Une recommandation sur la tenue du registre, sans soupçon sur la personne.",
    tip: "Le but du triple rapprochement n'est pas de piéger la personne : un registre contredit par la réalité est d'abord un défaut de contrôle de l'organisation, et c'est ainsi qu'il se rédige.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Saisir les heures sup dans l\'onglet « Heures Supplémentaires »',
    intro: "Pourquoi : l'onglet est conçu pour révéler la récurrence par équipe, pas le cas d'une personne. Quand : jeudi 20 août, après-midi. Entrées : les heures supplémentaires payées, regroupées par équipe, des trois derniers mois.",
    steps: [
      {
        title: 'Ouvrez l\'onglet et repérez sa structure',
        actions: [
          "Ligne 4 : 8 colonnes A à H (équipe, site, mois -2, mois -1, mois en cours, moyenne, récurrence, lecture combinée).",
          "Lignes 5 à 16 : 12 lignes de saisie ; la ligne 5 contient un exemple (équipe de suivi communautaire des Nippes).",
          "Colonnes F, G et H : formules déjà posées ; ne les modifiez pas.",
        ],
      },
      {
        title: 'Effacez l\'exemple de la ligne 5 (colonnes A à E uniquement)',
      },
      {
        title: 'Saisissez équipe, site et heures supplémentaires de mai (C), juin (D) et juillet (E)',
        actions: [
          "Prenez les heures payées dans l'état de paie, par équipe, et comparez-les aux feuilles de temps.",
          "Saisissez 0 pour un mois sans heure supplémentaire, jamais une cellule vide : une cellule vide est ignorée par la formule de moyenne et la fausse.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'A — Équipe / activité', 'B — Site', 'C — Mai', 'D — Juin', 'E — Juillet'],
      rows: [
        ['5', 'Équipe suivi communautaire (12 ASC)', '6 aires de santé', '142', '156', '151'],
        ['6', 'Équipe logistique et chauffeurs', 'Uvira (base)', '20', '0', '14'],
        ['7', 'Équipe nutrition, centre de santé', 'Sange', '64', '71', '78'],
        ['8', 'Équipe administration et finance', 'Uvira (base)', '6', '0', '0'],
      ],
    },
    result: "Quatre équipes saisies, avec les trois mois en heures, zéros compris : les colonnes F, G et H se calculent seules.",
    pitfall: "Prendre les heures déclarées par l'équipe elle-même plutôt que les heures payées : vous contrôleriez la déclaration, pas la paie, et vous ne verriez pas un écart entre les deux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Lire la moyenne, la récurrence et la lecture combinée',
    intro: "Pourquoi : les formules calculent seules ; c'est vous qui comprenez et vérifiez. Une récurrence sur trois mois consécutifs ne se clôture jamais uniquement côté RH. Entrée : l'onglet saisi à l'étape 3.",
    steps: [
      {
        title: 'Recalculez une moyenne à la main',
        body: "Prenez la ligne 5 : (142 + 156 + 151) / 3 = 449 / 3 = 149,67 heures par mois.",
      },
      {
        title: 'Lisez la colonne G : récurrence',
        body: "Elle affiche « Oui » si les trois mois sont supérieurs à zéro (la colonne G est alors surlignée). Elle ne mesure pas la stabilité du chiffre, seulement l'absence d'interruption.",
      },
      {
        title: 'Lisez la colonne H : lecture combinée',
        actions: [
          "Si G = Oui : « Sous-effectif chronique probable OU heures manipulées — à documenter RH ET Programme ».",
          "Si G = Non : « Ponctuel — vérifier la cause avant de classer ».",
        ],
      },
    ],
    table: {
      columns: ['Équipe', 'Moyenne 3 mois (F)', 'Récurrence (G)', 'Lecture (H)'],
      rows: [
        ['Suivi communautaire (12 ASC)', '149,67', 'Oui', 'À documenter RH ET Programme'],
        ['Logistique et chauffeurs', '11,33', 'Non', 'Ponctuel — vérifier la cause'],
        ['Nutrition, centre de santé de Sange', '71,00', 'Oui', 'À documenter RH ET Programme'],
        ['Administration et finance', '2,00', 'Non', 'Ponctuel — vérifier la cause'],
      ],
    },
    result: "Deux équipes à récurrence (suivi communautaire et nutrition de Sange), deux équipes en lecture « ponctuel » : leurs causes sont à vérifier, pas à classer.",
    pitfall: "Considérer qu'un « Non » veut dire « sans problème ». Une équipe à 20, 0 et 14 heures n'est pas récurrente selon l'onglet, mais la cause d'un zéro en juin doit être vérifiée avant de classer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Poser la question programmatique : pourquoi cette équipe a-t-elle besoin de ces heures ?',
    intro: "Pourquoi : la note de l'onglet l'exige : l'effectif budgété est-il réaliste face au plan d'activité ? Cette question se traite en parallèle du contrôle de paiement, jamais après. Entrées : l'équipe à récurrence (suivi communautaire), le document de projet, le registre des visites.",
    steps: [
      {
        title: 'Convertissez les heures supplémentaires moyennes en postes équivalents',
        body: "Heures supplémentaires moyennes / heures mensuelles d'un poste à temps plein (173 h, ou la base fixée par la politique RH de l'organisation).",
      },
      {
        title: 'Comparez effectif budgété et effectif réel confirmé',
        body: "Budget : 12 agents. Effectif réel confirmé par la procédure 3 : 11. Écart : 1 poste, soit environ 173 heures par mois.",
      },
      {
        title: 'Testez le réalisme du plan',
        body: "720 visites par mois pour 12 agents = 60 visites par agent, soit environ 3 par jour ouvré : plan ambitieux mais pas irréaliste sur le papier.",
      },
      {
        title: 'Testez la répartition par personne',
        body: "Heures concentrées sur 2 ou 3 personnes (manipulation possible) ou réparties sur toute l'équipe (compensation d'un manque d'effectif) ?",
      },
    ],
    table: {
      columns: ['Hypothèse', 'Ce qu\'on devrait observer', 'Test réalisé', 'Résultat'],
      rows: [
        ['Sous-effectif de fait', "Heures supplémentaires ≈ capacité du poste manquant", "150 h / 173 h ≈ 0,87 poste ; 11 agents confirmés sur 12", 'Compatible'],
        ['Plan irréaliste', "Heures réparties partout, y compris sur des équipes complètes", "60 visites par agent, soit environ 3 par jour : plan tenable ; nutrition de Sange (équipe complète) aussi à récurrence", 'Partiel : à creuser pour Sange'],
        ['Manipulation des heures', 'Heures concentrées sur quelques noms, sans variation', "Juillet : 151 h réparties sur 11 agents, de 7 h à 22 h chacun ; aucune concentration", 'Non observée'],
      ],
    },
    result: "Une double lecture documentée : l'heure supplémentaire de l'équipe de suivi communautaire est cohérente avec un poste non occupé, hypothèse déjà alimentée par la procédure 3 et à tester dans la procédure 7.",
    tip: "Ne cherchez pas à départager les hypothèses à ce stade : écrivez quel test chacune appelle. Départager sans preuve, c'est conclure trop tôt.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Formuler les deux lignes de constat : point RH et point programmatique',
    intro: "Pourquoi : ne clôturez jamais ce point uniquement côté RH. Chaque équipe à récurrence reçoit deux lignes de constat distinctes, adressées à deux lecteurs différents : la direction RH et la direction du programme. Entrées : étapes 1 à 5.",
    steps: [
      {
        title: 'Rédigez le point RH (conformité du paiement)',
        actions: [
          "Taux appliqué, plafond respecté, autorisation préalable écrite existante ou non.",
          "Montant total payé sur la période.",
        ],
      },
      {
        title: 'Rédigez le point programmatique (réalisme du plan, capacité réelle)',
        actions: [
          "Effectif budgété, effectif réel, volume d'activité planifié.",
          "L'hypothèse que ces heures éclairent, formulée comme une hypothèse à tester.",
        ],
      },
      {
        title: 'Reportez les deux lignes dans le dossier et préparez leur reprise dans le rapport',
      },
    ],
    example: {
      title: 'Deux lignes de constat — équipe de suivi communautaire (21 août 2026)',
      lines: [
        "Point RH : « Les heures supplémentaires de mai à juillet (449 h) ont été payées au taux majoré de 30 % prévu par l'art. 7.2 de la politique RH, soit environ 1 280 USD (449 h × 2,85 USD). Aucune des 449 h ne dispose d'une autorisation écrite préalable, que la politique exige. »",
        "Point programme : « Les 150 heures supplémentaires mensuelles équivalent à environ 0,87 poste. Un poste sur 12 n'est pas confirmé sur le terrain (aire de Sange). Hypothèse à tester : l'équipe compense l'absence de fait d'un agent. Le réalisme du plan (60 visites par agent) est à confirmer par la vérification du réalisé (procédure 5). »",
      ],
    },
    result: "Deux lignes de constat par équipe à récurrence, une pour la direction RH, une pour la direction du programme, toutes deux sourcées et prudentes.",
    pitfall: "Écrire le point RH seul, parce qu'il est plus facile à prouver. Il ne vous dit pas pourquoi l'équipe travaille davantage, et c'est la seule question qui intéresse le bailleur.",
  },

  // ── Procédure 5 — Contrôle réalisé vs planifié ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Ouvrir la fiche et remplir la section 1 : identification de l\'activité',
    intro: "Pourquoi : un rapport d'activité est une déclaration, pas une vérification. La fiche documente l'écart entre planifié et réalisé constaté à partir de preuves terrain indépendantes, avant toute conclusion d'audit. Quand : jour 6 (lundi 24 août). Outil : fiche-controle-programmatique-realise-planifie.docx.",
    steps: [
      {
        title: 'Enregistrez une copie de travail',
        body: "Fichier > Enregistrer sous : 2026-08-24_Fiche_Programmatique_SCN_Uvira.docx, dans « 03_Terrain ».",
      },
      {
        title: 'Repérez les cinq sections de la fiche',
        actions: [
          "1. Identification de l'activité contrôlée : quatre champs.",
          "2. Réalisé vs planifié : un tableau de quatre colonnes, quatre lignes.",
          "3. Vérification du ciblage : trois zones de texte.",
          "4. Preuves terrain indépendantes mobilisées : un tableau de deux colonnes.",
          "5. Conclusion de l'auditeur : niveau de preuve, recommandation, rédacteur et date.",
        ],
      },
      {
        title: 'Remplissez les quatre champs de la section 1, avec les libellés du document de projet',
        body: "Reprenez mot pour mot les termes de la convention et du cadre logique : un lecteur du bailleur doit reconnaître son projet.",
      },
    ],
    table: {
      columns: ['Champ de la section 1', 'Valeur saisie (fil rouge)'],
      rows: [
        ['Programme / projet — bailleur', 'Santé communautaire et nutrition (SCN) — Fonds Meridian'],
        ['Activité contrôlée', 'Visites à domicile de dépistage nutritionnel et de suivi des ménages par les agents de suivi communautaire (ASC)'],
        ['Période contrôlée', 'Juin 2026'],
        ['Site(s) / commune(s)', "Aires de santé de Sange, Kiliba, Luvungi, Kavimvira, Runingu et Katogota (territoire d'Uvira, Sud-Kivu)"],
      ],
    },
    result: "La section 1 est remplie : le lecteur sait quoi, pour qui, quand et où, sans ouvrir un autre document.",
    pitfall: "Choisir un mois « le plus récent » sans vérifier qu'il est clos : le rapport consolidé de juillet n'était pas encore validé. Juin est le dernier mois entièrement rapporté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Relever les cibles planifiées dans le document de projet',
    intro: "Pourquoi : on ne mesure un écart que contre une cible écrite et non contestable. Entrées : la convention avec le Fonds Meridian, le cadre logique (version 2, janvier 2026), le plan de suivi-évaluation.",
    steps: [
      {
        title: 'Ouvrez le cadre logique et repérez les indicateurs liés à l\'activité',
        body: "Notez, pour chacun, la cible, la période de référence (mensuelle ou cumulée) et la source de vérification prévue.",
      },
      {
        title: 'Vérifiez que la même cible figure dans les trois documents',
        body: "Convention, cadre logique et plan de travail : si les trois ne concordent pas, signalez-le avant de mesurer quoi que ce soit.",
      },
      {
        title: 'Retenez quatre lignes pour la section 2',
        actions: [
          "Trois indicateurs d'activité mesurables sur le terrain.",
          "Un indicateur de moyens (effectif en poste), qui relie le contrôle programmatique à l'audit de la paie.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur retenu', 'Cible planifiée', 'Référence'],
      rows: [
        ['Ménages visités à domicile par les ASC', '720 par mois (12 ASC × 60)', 'Cadre logique v2, indicateur 2.1'],
        ['Séances de sensibilisation communautaire', '36 par mois (6 aires × 6)', 'Cadre logique v2, indicateur 2.2'],
        ['Enfants de 6 à 59 mois dépistés', '1 800 par mois', 'Cadre logique v2, indicateur 2.3'],
        ['ASC en poste', '12', 'Budget, ligne 1.2'],
      ],
    },
    result: "Quatre cibles planifiées, chacune avec sa référence documentaire, identiques dans la convention, le cadre logique et le plan de travail.",
    tip: "Notez la date de la version du cadre logique : une cible révisée en cours de projet change la lecture de l'écart.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Constituer l\'échantillon d\'activités à vérifier (10 à 15 %)',
    intro: "Pourquoi : vous n'avez ni le temps ni les moyens de tout vérifier. Un échantillon aléatoire de 10 à 15 % des activités du mois, tiré sans l'aide de l'équipe, donne un résultat défendable. Entrées : le rapport consolidé de juin et ses registres sources (registre des visites, liste des séances, registres de dépistage).",
    steps: [
      {
        title: 'Obtenez les registres sources du rapport, pas seulement le rapport',
        body: "Le registre des visites donne pour chaque visite : date, agent, ménage, village. Vous tirez l'échantillon dans cette liste.",
      },
      {
        title: 'Tirez par aire de santé pour couvrir tout le territoire',
        actions: [
          "Répartissez l'échantillon à parts égales entre les 6 aires.",
          "Dans chaque aire, tirez au hasard avec =ALEA() et retenez les premières lignes.",
        ],
      },
      {
        title: 'Écrivez le tirage dans le dossier : taille, règle, date',
      },
    ],
    table: {
      columns: ['Activité de juin', 'Déclaré', 'Échantillon', 'Part vérifiée'],
      rows: [
        ['Visites à domicile (registre des visites)', '702', '84 (14 par aire)', '12 %'],
        ['Séances de sensibilisation', '36', '9', '25 %'],
        ['Fiches de dépistage', '1 746', '180', '10,3 %'],
      ],
    },
    result: "Un échantillon écrit pour les trois activités, entre 10 et 15 % pour les volumes importants et 25 % pour les 36 séances, tiré par vous et non par l'équipe.",
    pitfall: "Laisser l'équipe choisir les visites à vérifier « les plus représentatives » : elle choisira les mieux documentées. Le tirage au hasard est votre seule protection.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Chercher une preuve terrain indépendante pour chaque activité échantillonnée',
    intro: "Pourquoi : un rapport est une déclaration, pas une preuve. Pour chaque activité, cherchez une preuve indépendante du rapport : liste de bénéficiaires signée sur site, photo géolocalisée, témoignage croisé recueilli séparément par vous ou par un collègue non impliqué dans la mise en œuvre. Quand : lundi 24 au mercredi 26 août.",
    steps: [
      {
        title: 'Définissez, pour chaque activité, la preuve indépendante que vous accepterez',
        body: "Écrivez-la avant de partir : vous ne devez pas adapter l'exigence à ce que vous trouvez.",
      },
      {
        title: 'Répartissez la vérification entre documents et contre-visites',
        actions: [
          "Documents : registres des centres de santé, listes d'émargement et de distribution détenues par des tiers.",
          "Contre-visites : visitez 20 des 84 ménages avec Fatou S. (Sange et Kiliba), et demandez séparément aux ménages si la visite a eu lieu.",
        ],
      },
      {
        title: 'Faites vérifier par quelqu\'un qui n\'est pas dans la mise en œuvre',
        body: "Les auditeurs, jamais la superviseure ni les agents. La personne qui vérifie doit être nommée dans la section 4 de la fiche.",
      },
      {
        title: 'Notez chaque résultat : confirmé, non confirmé, ou non vérifiable',
        body: "« Non vérifiable » est un résultat : il ne se range ni dans confirmé ni dans non confirmé.",
      },
    ],
    table: {
      columns: ['Activité échantillonnée', 'Preuve indépendante cherchée', 'Résultat'],
      rows: [
        ['84 visites à domicile', "Registre de dépistage du centre de santé, liste de distribution, ou ménage qui confirme séparément ; photo géolocalisée si elle existe", '71 confirmées, 13 non confirmées'],
        ['9 séances de sensibilisation', "Liste d'émargement signée sur site, détenue par le comité communautaire", '8 confirmées, 1 sans liste (Sange)'],
        ['180 fiches de dépistage', 'Inscription de l\'enfant dans le registre du centre de santé', '168 retrouvées, 12 non retrouvées'],
      ],
    },
    result: "Un résultat par activité échantillonnée, appuyé sur une preuve indépendante dont vous connaissez la nature et le vérificateur.",
    pitfall: "Demander à l'ASC ou à sa superviseure de vous procurer la preuve : une preuve qu'on vous apporte peut avoir été préparée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Compléter le tableau « Réalisé vs planifié » (section 2)',
    intro: "Pourquoi : c'est le cœur de la fiche. La colonne « Réalisé constaté » ne contient que ce que vos preuves indépendantes établissent ; le chiffre déclaré ne sert que de contexte. Entrées : les cibles de l'étape 2, les résultats de l'étape 4. Le tableau de la section 2 compte quatre lignes : une par indicateur.",
    steps: [
      {
        title: 'Saisissez l\'indicateur et la cible planifiée dans les colonnes 1 et 2',
        body: "Reprenez les libellés et les cibles de l'étape 2, sans reformuler.",
      },
      {
        title: 'Saisissez le réalisé constaté dans la colonne 3',
        actions: [
          "Écrivez le nombre confirmé sur le nombre vérifié, et le pourcentage.",
          "Rappelez le chiffre déclaré entre parenthèses, pour que le lecteur voie l'écart entre déclaration et constat.",
        ],
      },
      {
        title: 'Saisissez dans la colonne 4 l\'écart et son explication',
        body: "Si l'explication n'est pas vérifiée, écrivez-le : « explication déclarée, non vérifiée ».",
      },
    ],
    table: {
      columns: ['Indicateur', 'Cible planifiée', 'Réalisé constaté', 'Écart / explication'],
      rows: [
        ['Ménages visités à domicile (juin)', '720 (12 ASC × 60)', '71 visites confirmées sur 84 vérifiées (84,5 %) ; 702 déclarées, soit 97,5 % de la cible', "13 non confirmées, dont 9 à Sange, toutes enregistrées au nom de Bahati M. Explication non vérifiée"],
        ['Séances de sensibilisation (juin)', '36 (6 aires × 6)', '8 séances confirmées sur 9 vérifiées ; 36 déclarées', "1 séance de Sange sans liste d'émargement ; explication demandée"],
        ['Enfants de 6 à 59 mois dépistés (juin)', '1 800', '168 fiches retrouvées sur 180 vérifiées (93,3 %) ; 1 746 déclarés, soit 97 % de la cible', '12 fiches non retrouvées, dont 8 à Sange ; à croiser avec la présence des agents'],
        ['ASC en poste', '12', '11 confirmés ; 1 non confirmé (Bahati M., Sange)', "Voir la grille paie & présences : signal à investiguer"],
      ],
    },
    result: "Les quatre lignes de la section 2 sont renseignées : le constat est séparé du déclaré, et chaque écart est qualifié.",
    pitfall: "Écrire le chiffre déclaré (702) en colonne « Réalisé constaté » : vous recopiez la déclaration de l'audité et la fiche perd sa raison d'être.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Expliquer les écarts et remplir la section 4 : preuves mobilisées',
    intro: "Pourquoi : une explication d'écart sans vérificateur nommé est une opinion, et la section 4 impose de désigner une personne non impliquée dans la mise en œuvre pour chaque preuve. Entrées : les résultats de l'étape 4, les explications recueillies. Le tableau de la section 4 a deux colonnes et ne contient qu'une ligne d'en-tête : ajoutez une ligne par preuve.",
    steps: [
      {
        title: 'Distinguez explication vérifiée et explication déclarée',
        actions: [
          "Vérifiée : vous avez retrouvé la pièce ou recoupé le témoignage.",
          "Déclarée : quelqu'un vous l'a dite, vous ne l'avez pas encore vérifiée. Écrivez-le.",
        ],
      },
      {
        title: 'Ajoutez une ligne au tableau de la section 4 par preuve mobilisée',
        body: "Placez le curseur dans la dernière cellule du tableau et appuyez sur Tab pour créer une ligne.",
      },
      {
        title: 'Renseignez pour chaque ligne la nature de la preuve, puis la date et le vérificateur',
        body: "Le vérificateur est une personne qui n'est pas impliquée dans la mise en œuvre : les auditeurs, jamais l'équipe du projet.",
      },
    ],
    table: {
      columns: ['Nature de la preuve', 'Date et vérificateur'],
      rows: [
        ["Registre de dépistage du centre de santé de Sange, colonne « référé par » : 94 références de mars à juillet, dont 0 par Bahati M.", '21/08/2026 — Fatou S.'],
        ['Listes de distribution de produits nutritionnels à Sange : 11 distributions, aucune signature de Bahati M.', '21/08/2026 — Fatou S.'],
        ['Contre-visites de 20 ménages (Sange et Kiliba) avec témoignage séparé et photo géolocalisée datée', '25 et 26/08/2026 — Amani K. et Fatou S.'],
        ["Listes d'émargement signées sur site de 9 séances de sensibilisation", '24/08/2026 — Amani K.'],
        ['Entretien avec le chauffeur Rénald K. sur les tournées de supervision', '26/08/2026 — Amani K.'],
      ],
    },
    result: "La section 4 liste cinq preuves, chacune avec sa date et un vérificateur extérieur à la mise en œuvre ; la section 2 distingue explication vérifiée et déclarée.",
    tip: "Ajoutez une ligne dès que vous obtenez une preuve, pas à la fin : la fiche se remplit au fil de l'eau, et vous n'oublierez ni une date ni un nom.",
  },

  // ── Procédure 6 — Ciblage des bénéficiaires ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Relever les critères d\'éligibilité dans le document de projet',
    intro: "Pourquoi : on ne vérifie pas un ciblage sans critère écrit : sans lui, chaque auditeur apprécie « à vue » qui devait être assisté. Quand : mardi 25 août. Entrées : la convention avec le Fonds Meridian, le protocole de ciblage du projet, le registre de ciblage validé par le comité communautaire. Les résultats iront dans la section 3 de la fiche.",
    steps: [
      {
        title: 'Retrouvez les critères dans le document de projet, pas dans la pratique de l\'équipe',
        actions: [
          "Convention du bailleur : annexe sur les bénéficiaires.",
          "Protocole de ciblage du projet (version et date).",
          "Si deux documents divergent, retenez le plus contraignant et signalez la divergence.",
        ],
      },
      {
        title: 'Décomposez les critères en conditions vérifiables une à une',
        body: "Une condition est vérifiable si une pièce ou une observation permet de répondre oui ou non : résidence, présence d'un enfant d'un âge précis, inscription au registre.",
      },
      {
        title: 'Recopiez-les dans la première zone de texte de la section 3',
        body: "« Critères d'éligibilité définis par le document de projet » : reprenez les termes du document, avec la référence.",
      },
    ],
    example: {
      title: 'Section 3, première zone de texte (fil rouge)',
      lines: [
        "« Sont éligibles les ménages (1) résidant dans l'une des 6 aires de santé du projet ; (2) comptant au moins un enfant de 6 à 59 mois, ou une femme enceinte ou allaitante ; (3) inscrits au registre de ciblage validé par le comité communautaire de santé. Source : convention Fonds Meridian, annexe 2 ; protocole de ciblage SCN, v1, janvier 2026. »",
      ],
    },
    result: "Trois conditions vérifiables, référencées, dans la section 3 de la fiche.",
    pitfall: "Prendre pour critère ce que l'équipe vous dit faire en pratique (« on visite d'abord les familles accessibles »). C'est une pratique : elle peut être justement ce que vous contrôlez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Constituer l\'échantillon de bénéficiaires et tester chaque critère',
    intro: "Pourquoi : le ciblage se contrôle sur les bénéficiaires dont vous avez déjà confirmé la visite par une preuve indépendante : inutile de tester l'éligibilité d'un ménage que personne ne peut situer. Entrées : les 71 visites confirmées en procédure 5, le registre de ciblage.",
    steps: [
      {
        title: 'Retenez comme échantillon les ménages dont la visite est confirmée',
        body: "71 ménages, issus du tirage aléatoire de 84 visites (14 par aire de santé).",
      },
      {
        title: 'Ouvrez une feuille de travail à six colonnes',
        body: "Ménage, aire, agent, critère 1, critère 2, critère 3, puis une colonne « conforme ».",
      },
      {
        title: 'Testez les trois critères pour chaque ménage',
        actions: [
          "Critère 1 : l'adresse relève bien d'une des 6 aires (carte des aires, chef de village).",
          "Critère 2 : lors de la contre-visite ou par témoignage séparé, un enfant de 6 à 59 mois ou une femme enceinte ou allaitante vit dans le ménage.",
          "Critère 3 : le ménage figure dans le registre de ciblage validé par le comité communautaire.",
        ],
      },
      {
        title: 'Marquez un ménage « conforme » uniquement si les trois critères sont remplis',
      },
    ],
    table: {
      columns: ['Critère', 'Ménages conformes sur 71', 'Ménages non conformes'],
      rows: [
        ['1. Résidence dans une aire du projet', '70', '1 (Runingu : village d\'une aire voisine)'],
        ['2. Enfant de 6 à 59 mois ou femme enceinte / allaitante', '67', '4 (Kiliba : aucun enfant ni femme éligible)'],
        ['3. Inscription au registre de ciblage', '66', '5 (les 4 de Kiliba et celui de Runingu)'],
        ['Conformes aux trois critères', '66 (93,0 %)', '5 (7,0 %)'],
      ],
    },
    result: "Un résultat de ciblage sur 71 ménages : 66 conformes (93,0 %), 5 non conformes, localisés précisément.",
    pitfall: "Tester l'éligibilité sur les seuls dossiers du registre de ciblage : un ménage inscrit au registre peut quand même ne pas remplir le critère 2 sur le terrain.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Classer les déviations : isolées ou schéma répété, et leur gravité',
    intro: "Pourquoi : cinq déviations sur 71 peuvent signifier une erreur ou une pratique ; la section 3 demande de dire si elles sont isolées ou répétées, et leur gravité. Une déviation de ciblage n'a pas le même sens quand elle suit une logique de proximité relationnelle. Entrée : les 5 ménages non conformes.",
    steps: [
      {
        title: 'Cherchez ce que les ménages non conformes ont en commun',
        actions: [
          "Même agent, même village ou même cellule ?",
          "Lien de voisinage ou de parenté avec l'agent, l'équipe ou un responsable ?",
        ],
      },
      {
        title: 'Classez : déviation isolée ou schéma répété',
        actions: [
          "Isolée : un cas, sans lien avec les autres.",
          "Schéma répété : trois cas ou plus reliés par un agent, un lieu ou une relation.",
        ],
      },
      {
        title: 'Attribuez une gravité avec une échelle écrite',
        actions: [
          "Faible : un ou deux cas isolés (moins de 3 % de l'échantillon).",
          "Moyenne : schéma limité à un agent ou à un lieu, ou 3 à 10 % de l'échantillon.",
          "Forte : schéma étendu (plus de 10 %) ou ménages liés à l'équipe de mise en œuvre.",
        ],
      },
    ],
    table: {
      columns: ['Déviation', 'Ce qu\'ils ont en commun', 'Classement', 'Gravité'],
      rows: [
        ['1 ménage de Runingu', 'Village de l\'aire voisine ; aucun lien avec les autres cas', 'Isolée', 'Faible'],
        ['4 ménages de Kiliba', "Même cellule, même agent (Neema K.), voisins immédiats du domicile de l'agent selon la contre-visite", 'Schéma répété', 'Moyenne : schéma limité à un agent, 4 ménages sur 71 (5,6 %)'],
      ],
    },
    result: "Deux déviations classées : un cas isolé de gravité faible, un schéma répété de gravité moyenne limité à un agent et à une cellule.",
    tip: "Écrivez votre échelle de gravité dans la fiche : « faible, moyenne, forte » sans définition donne un jugement subjectif que l'audité contestera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Rédiger la section 3 et décider de l\'extension de l\'échantillon',
    intro: "Pourquoi : la section 3 doit se lire seule : critères, méthode d'échantillonnage, déviations. Un schéma répété appelle une vérification élargie à tout l'activité de l'agent concerné avant toute conclusion. Entrées : résultats des étapes 1 à 3.",
    steps: [
      {
        title: 'Rédigez la deuxième zone : échantillon vérifié (taille, méthode de sélection)',
      },
      {
        title: 'Rédigez la troisième zone : déviations observées (isolées ou schéma répété) et gravité',
      },
      {
        title: 'Décidez de l\'extension de la vérification',
        body: "Un schéma répété autour d'un agent : vérifiez 100 % des visites de cet agent sur la période, sur pièces (registre de ciblage), avant toute conclusion.",
      },
    ],
    example: {
      title: 'Section 3 telle que saisie (zones 2 et 3)',
      lines: [
        "Échantillon vérifié : « 71 ménages, soit les ménages dont la visite de juin a été confirmée par une preuve indépendante, issus d'un tirage aléatoire de 84 visites (14 par aire de santé), contrôlés sur le registre de ciblage et par contre-visite ou témoignage séparé. »",
        "Déviations : « 5 ménages non conformes (7,0 %). Un cas isolé à Runingu (village hors aire, gravité faible). Un schéma répété à Kiliba : 4 ménages d'une même cellule, rattachés au même agent, sans enfant éligible et non inscrits, voisins immédiats du domicile de l'agent (gravité moyenne). »",
        "Suite décidée : vérification sur pièces des 62 visites de juin de l'agent de Kiliba contre le registre de ciblage ; aucune conclusion sur les personnes à ce stade.",
      ],
    },
    result: "La section 3 est complète, avec les trois zones de texte, et l'extension de la vérification est décidée et tracée.",
    pitfall: "Écrire que l'agent « favorise ses voisins » : vous constatez que quatre ménages non éligibles sont ses voisins immédiats, vous n'établissez pas son intention. Le constat se limite aux faits.",
  },

  // ── Procédure 7 — Investigation structurée ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 7',
    title: 'Poser la règle du silence et sécuriser les pièces',
    intro: "Pourquoi : une fuite à ce stade peut déclencher soit une fabrication rétroactive de preuves de présence, soit une alerte donnée à un éventuel complice. Quand : dès que le drapeau se déclenche (jeudi 20 août). Entrées : la grille signalant la ligne de Bahati M., la règle des deux sources.",
    steps: [
      {
        title: 'Limitez le cercle de ceux qui savent',
        actions: [
          "Vous, Fatou S. et la présidente du comité d'audit : personne d'autre.",
          "Ne parlez pas du cas à la superviseure, au HR Manager, à la coordinatrice ni à l'équipe, y compris informellement.",
        ],
      },
      {
        title: 'Sécurisez les pièces le jour même',
        actions: [
          "Photographiez ou copiez les pages des registres consultés, avec la date.",
          "Rangez la grille et la fiche dans un dossier protégé par mot de passe, nommé sans le nom de la personne.",
        ],
      },
      {
        title: 'Ne désignez pas la cible par vos demandes',
        body: "Demandez les registres des six aires, pas celui de Sange seul ; demandez la liste de toutes les réaffectations de l'année, pas celle d'un agent.",
      },
      {
        title: 'Tenez un journal de confidentialité',
        body: "Qui sait quoi, depuis quand, et pourquoi il doit le savoir.",
      },
    ],
    table: {
      columns: ['Date', 'Personne informée', 'Information', 'Raison'],
      rows: [
        ['20/08', 'Fatou S.', 'Signal complet (grille, matrice des preuves)', 'Auditrice associée, vérifications terrain'],
        ['20/08', 'Hélène V., présidente du comité', "Existence d'un signal à investiguer, sans nom", 'Instance de rattachement ; mandat'],
        ['—', 'Dr Claudine M., Mireille N., Gaspard T., Joseph T.', 'Non informés', 'Ligne hiérarchique ou RH de la personne concernée'],
      ],
    },
    result: "Un cercle de trois personnes, des pièces copiées et protégées, et un journal de confidentialité ouvert.",
    pitfall: "Demander innocemment à la superviseure « comment travaille Bahati ? » : même sans accusation, la question désigne la cible, et la superviseure est la personne la plus susceptible d'être impliquée si c'est une complicité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 7',
    title: 'Élargir l\'échantillon de paie à toute l\'équipe',
    intro: "Pourquoi : trouver une anomalie sur une personne doit déclencher une vérification ciblée sur les autres membres de la même équipe ou du même superviseur. Un ghost worker isolé est rare ; un schéma organisé impliquant plusieurs personnes sous la même ligne hiérarchique est le cas qui compte financièrement. Quand : vendredi 21 août. Entrée : la grille avec 12 lignes.",
    steps: [
      {
        title: 'Identifiez le périmètre à élargir',
        body: "Les agents de suivi communautaire supervisés par Mireille N. : 12 agents, dont 4 déjà dans l'échantillon. Il reste 8 agents à ajouter.",
      },
      {
        title: 'Ajoutez les 8 agents en lignes 17 à 24 de la grille',
        body: "Appliquez les procédures 1 à 3 à chaque ligne : bulletin (D), contrat (E), présence indépendante (G), périodes (H). La grille compte 20 lignes (5 à 24) : elle est alors pleine.",
      },
      {
        title: 'Lisez le résultat de l\'extension',
        body: "Un seul signal de plus ? Un schéma ? Aucun ? Écrivez ce que vous voyez, sans extrapoler.",
      },
    ],
    table: {
      columns: ['Ligne', 'Employé, site', 'D', 'E', 'F', 'G', 'H', 'I'],
      rows: [
        ['17', 'Jean-Paul S., Sange', '380', '380', '0', 'Oui', '0', 'OK'],
        ['18', 'Salomé R., Kiliba', '380', '380', '0', 'Oui', '0', 'OK'],
        ['19', 'Prosper N., Luvungi', '380', '380', '0', 'Non', '1', 'À surveiller'],
        ['20', 'Léa M., Kavimvira', '380', '380', '0', 'Oui', '0', 'OK'],
        ['21', 'Augustin B., Runingu', '380', '380', '0', 'Oui', '0', 'OK'],
        ['22', 'Rachel T., Runingu', '380', '380', '0', 'Oui', '0', 'OK'],
        ['23', 'Fidèle K., Katogota', '380', '380', '0', 'Oui', '0', 'OK'],
        ['24', 'Judith W., Katogota', '380', '380', '0', 'Oui', '0', 'OK'],
      ],
    },
    result: "L'extension porte la grille à 20 lignes : une seule ligne reste en « RISQUE GHOST WORKER » (D28 = 1), une ligne de plus passe « À surveiller » (Prosper N., aucune confirmation en juillet, confirmé en juin).",
    tip: "Une extension qui ne trouve rien d'autre est un résultat : elle oriente vers un cas isolé et réduit le risque d'un schéma organisé. Écrivez-le dans le dossier, avec la date et les 8 noms.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 7',
    title: 'Élargir la fenêtre de vérification à 6 mois avec des documents distincts',
    intro: "Pourquoi : trois mois de rapports peuvent être insuffisants si les visites de supervision sont elles-mêmes irrégulières. Remontez à six mois et croisez avec des documents totalement distincts du circuit RH et supervision. Quand : vendredi 21 août. Entrées : les registres des centres de santé et les listes de distribution de produits nutritionnels.",
    steps: [
      {
        title: 'Fixez la nouvelle fenêtre',
        body: "Février à juillet 2026 (6 mois), qui couvre toute la période d'emploi de la personne (entrée le 02/03/2026).",
      },
      {
        title: 'Choisissez des documents sans lien avec les RH ni la supervision',
        actions: [
          "Registres de dépistage et de référence des centres de santé.",
          "Listes de distribution de produits nutritionnels (ATPE), signées par les bénéficiaires.",
          "Listes de présence aux formations et réunions de lancement.",
        ],
      },
      {
        title: 'Comptez, pour chaque source, les mentions de la personne',
        body: "Zéro mention est un résultat : écrivez-le avec la taille de la source (zéro sur combien).",
      },
      {
        title: 'Recalculez la colonne H avec la nouvelle fenêtre',
        body: "Remontez mois par mois jusqu'à la première confirmation trouvée.",
      },
    ],
    table: {
      columns: ['Source distincte du circuit RH', 'Période', 'Taille', 'Mentions de Bahati M.'],
      rows: [
        ['Rapports de supervision (4 visites)', 'Fév. à juil.', '18/03, 12/05, 16/06, 14/07', '0'],
        ["Listes d'émargement des réunions communautaires de Sange", 'Mars à juil.', '5 listes', '0'],
        ['Registre de dépistage du centre de santé de Sange (« référé par »)', 'Mars à juil.', '94 références', '0 (58 par Jean-Paul S., 36 par d\'autres)'],
        ['Listes de distribution de produits nutritionnels à Sange', 'Mars à juil.', '11 distributions', '0 signature'],
        ['Liste de présence de la formation d\'accueil des ASC', '04/03/2026', '12 agents attendus', '1 présence (Bahati M. a signé)'],
      ],
    },
    result: "Une seule présence trouvée sur six mois (formation d'accueil du 04/03) : la colonne H passe de 3 à 4 (avril, mai, juin, juillet). Les sources distinctes du circuit RH confirment l'absence de traces.",
    pitfall: "Étendre la fenêtre sans changer de type de document : six mois de rapports de supervision vous donneront six mois de la même lacune. Il faut des sources que la supervision ne contrôle pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 7',
    title: 'Interroger les sources dans le bon ordre : des plus périphériques à la ligne directe',
    intro: "Pourquoi : la ligne hiérarchique directe est aussi la plus susceptible d'être impliquée si le schéma est une complicité. Commencez par les sources les moins susceptibles d'avoir un intérêt dans le résultat. Quand : du lundi 24 au jeudi 27 août. Entrée : la liste des sources de l'étape 3.",
    steps: [
      {
        title: 'Classez les personnes par éloignement du circuit RH et de la ligne hiérarchique',
        body: "Tiers extérieurs d'abord, collègues d'autres aires ensuite, ligne directe en dernier.",
      },
      {
        title: 'Préparez des questions ouvertes qui ne nomment pas la personne au début',
        actions: [
          "« Qui intervient dans l'aire de Sange ? Qui était présent à la dernière distribution ? »",
          "Ne nommez la personne qu'en fin d'entretien, si la conversation y mène naturellement.",
        ],
      },
      {
        title: 'Menez les entretiens à deux auditeurs, avec une note signée par l\'interlocuteur',
        body: "Un auditeur pose les questions, l'autre note. Faites relire et signer la note par la personne interrogée.",
      },
      {
        title: 'Ne menez pas, dans cette mission, l\'entretien de la personne concernée',
        body: "Il se fera plus tard, en vérification contradictoire avec les RH, quand le soupçon sera formalisé (étape 7).",
      },
    ],
    table: {
      columns: ['Ordre', 'Source', 'Pourquoi à cette place', 'Date', 'Auditeur'],
      rows: [
        ['1', 'Dr Josias B., infirmier titulaire du centre de santé de Sange', 'Tiers extérieur à la ligne RH, voit les agents passer', '24/08', 'Amani K.'],
        ['2', 'Deux relais communautaires de Sange (bénévoles)', 'Voient les agents dans les villages, sans lien avec la paie', '25/08', 'Fatou S.'],
        ['3', 'Ménages de Sange (contre-visites)', 'Bénéficiaires directs, sans intérêt dans le résultat', '25 et 26/08', 'Amani K. et Fatou S.'],
        ['4', 'Rénald K., chauffeur des tournées de supervision', 'Voit qui monte dans le véhicule', '26/08', 'Amani K.'],
        ['5', 'Neema K., Chantal A., Jean-Paul S. (ASC d\'autres aires)', 'Collègues, mais sans lien direct avec la ligne de Sange', '26/08', 'Fatou S.'],
        ['6', 'Mireille N., superviseure communautaire', 'Ligne hiérarchique directe : en dernier', '27/08', 'Amani K. et Fatou S.'],
        ['7', 'Gaspard T., HR Manager', 'Faits sur le recrutement et le dossier : après la ligne directe', '27/08', 'Amani K.'],
      ],
    },
    result: "Un plan d'entretiens de sept sources, de la plus périphérique à la ligne directe, avec dates et auditeurs ; la personne concernée n'est volontairement pas interrogée dans cette mission.",
    pitfall: "Commencer par la superviseure « parce qu'elle sait tout » : vous perdriez l'effet de surprise, et ce qu'elle vous dirait influencerait les entretiens suivants.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 7',
    title: 'Chercher activement l\'explication la plus bénigne',
    intro: "Pourquoi : l'absence de preuve de travail n'est pas encore la preuve d'une absence de travail. Avant de conclure à la fraude, cherchez l'explication la plus bénigne : un ordre de mission verbal, un échange de messagerie, une note interne non classée. Entrées : les hypothèses de la théorie, les résultats des étapes 3 et 4.",
    steps: [
      {
        title: 'Listez toutes les explications bénignes plausibles',
        actions: [
          "Réaffectation informelle non actée, sans mise à jour du dossier RH.",
          "Maladie ou congé long non enregistrés.",
          "Travail réel mal documenté (rapports de supervision mal tenus).",
          "Mission à un autre poste, au bureau ou ailleurs.",
        ],
      },
      {
        title: 'Cherchez chaque explication par une demande neutre',
        body: "Demandez la liste de toutes les réaffectations et avenants de 2026 pour les 44 agents, pas pour un seul.",
      },
      {
        title: 'Testez l\'explication sur des sources que la ligne directe ne contrôle pas',
      },
    ],
    table: {
      columns: ['Explication bénigne', 'Où l\'avons-nous cherchée', 'Résultat'],
      rows: [
        ['Réaffectation informelle', "Liste des avenants et réaffectations 2026 des 44 agents ; registres des centres de santé de Kiliba et de Luvungi", 'Aucune réaffectation écrite ; 0 mention de Bahati M. dans les autres aires'],
        ['Maladie ou congé long', "Registre des congés, certificats médicaux de l'année", 'Aucun enregistrement à son nom'],
        ['Travail réel mal documenté', "Documents hors supervision : registre du centre de santé, distributions, ménages", "0 trace hors supervision également : l'explication ne tient pas"],
        ['Travail au bureau d\'Uvira', "Registre des visiteurs et feuilles d'accueil du bureau", 'Aucune entrée à son nom depuis mars, hors la formation du 04/03'],
      ],
    },
    result: "Les quatre explications bénignes ont été cherchées sur des sources hors de la ligne directe ; aucune ne résiste. Aucune conclusion n'est tirée pour autant.",
    tip: "Dites-vous qu'il vous faut réfuter l'explication innocente, pas la chercher à moitié : un auditeur qui a vraiment cherché la réaffectation informelle est crédible, même quand il ne l'a pas trouvée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 7',
    title: 'Évaluer la convergence des sources et déterminer le niveau de preuve',
    intro: "Pourquoi : on ne formalise un soupçon que lorsque deux sources indépendantes convergent, avec la référence précise de chaque source. Quand : jeudi 27 août, après l'entretien de la superviseure. Entrées : tous les résultats des procédures 3, 5 et 7.",
    steps: [
      {
        title: 'Dressez le tableau des sources et qualifiez leur indépendance',
        actions: [
          "Hors circuit RH et hors ligne hiérarchique : poids fort.",
          "Dans la ligne de supervision : poids moyen.",
          "Issue du circuit RH ou financier : indice, jamais une source indépendante.",
        ],
      },
      {
        title: 'Vérifiez qu\'aucune source ne contredit les autres',
        body: "Une seule source contraire (une distribution où l'agent est signalé) suffit à suspendre la conclusion.",
      },
      {
        title: 'Appliquez la règle des deux sources et choisissez le niveau dans la liste de la fiche',
        body: "Deux sources fortes convergentes et aucune explication bénigne : « soupçon documenté à investiguer ». « Anomalie confirmée » est réservé à une vérification contradictoire.",
      },
    ],
    table: {
      columns: ['Source', 'Indépendante ?', 'Constat', 'Poids'],
      rows: [
        ['A. Registre de dépistage du centre de santé de Sange', 'Oui : tiers extérieur', '0 référence sur 94 (mars à juillet)', 'Fort'],
        ['B. Listes de distribution de produits nutritionnels', 'Oui : bénéficiaires et comité communautaire', '0 signature sur 11 distributions', 'Fort'],
        ['C. Contre-visites de 9 ménages dont la visite est attribuée à Bahati M.', 'Oui : ménages interrogés séparément', '0 confirmation sur 9', 'Fort'],
        ['D. Rapports de supervision et listes d\'émargement', 'Partielle : dans la ligne de supervision', '0 mention sur 4 rapports et 5 listes', 'Moyen'],
        ['E. Rapprochement des cotisations (19 USD non reversés)', 'Non : circuit RH et finance', 'Une personne non déclarée à l\'organisme', 'Indice'],
      ],
    },
    example: {
      title: 'Décision du 27 août 2026 (extrait du dossier)',
      lines: [
        "Trois sources fortes indépendantes (A, B, C) convergent. Aucune ne contredit les autres. Les quatre explications bénignes ont été cherchées et écartées.",
        "Niveau retenu : « soupçon documenté à investiguer ». Pas d'« anomalie confirmée » : aucune vérification contradictoire n'a été menée et la personne concernée n'a pas été entendue.",
      ],
    },
    result: "Un tableau de convergence avec les références de chaque source, et un niveau de preuve choisi pour une raison écrite.",
    pitfall: "Compter le rapprochement des cotisations (E) comme deuxième source : il vient du circuit RH et finance que vous contrôlez. Il alimente le soupçon, il ne satisfait pas la règle des deux sources indépendantes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 7 sur 7',
    title: 'Formaliser : section 5 de la fiche et note confidentielle au comité',
    intro: "Pourquoi : ce n'est qu'à ce stade, jamais avant, que vous documentez le soupçon, avec la référence précise de chaque source croisée, et que vous recommandez une vérification physique contradictoire menée conjointement avec les RH. Quand : vendredi 28 août. Entrées : tableau de convergence, fiche sections 1 à 4.",
    steps: [
      {
        title: 'Renseignez « Niveau de preuve atteint » dans la section 5',
        body: "Choisissez un des quatre libellés de la fiche (conformité confirmée, écart mineur expliqué, soupçon documenté à investiguer, anomalie confirmée) et rappelez en une phrase ce que ce niveau n'est pas.",
      },
      {
        title: 'Rédigez « Recommandation et suite à donner »',
        actions: [
          "Vérification contradictoire : visite inopinée à Sange et entretien formel de la personne, avec un représentant RH désigné par la présidente du comité hors ligne hiérarchique de la superviseure.",
          "Vérifications à demander sous l'autorité du comité : compte de réception du salaire et dossier de recrutement.",
          "Extension sur pièces de l'activité de l'agent de Kiliba.",
        ],
      },
      {
        title: 'Complétez « Rédigé par (nom, fonction) » et « Date »',
      },
      {
        title: 'Adressez une note confidentielle d\'une page à la présidente du comité, et à elle seule',
        body: "Pas de diffusion à la direction pays ni à l'équipe tant que le comité n'a pas décidé.",
      },
    ],
    example: {
      title: 'Section 5 de la fiche telle que saisie (28/08/2026)',
      lines: [
        "Niveau de preuve atteint : « Soupçon documenté à investiguer » pour le poste d'ASC de l'aire de Sange (trois sources indépendantes convergentes : registre du centre de santé 0/94, listes de distribution 0/11, contre-visites 0/9 ; aucune explication bénigne retrouvée). Ce n'est pas une anomalie confirmée : la personne n'a pas été entendue. Ciblage de Kiliba : soupçon documenté à investiguer (4 ménages non éligibles liés à un même agent).",
        "Recommandation : (1) vérification contradictoire sous 10 jours, visite inopinée et entretien formel avec un représentant RH désigné par la présidente du comité ; (2) vérification du compte de réception du salaire et du dossier de recrutement de mars 2026, via la Finance sous autorité du comité ; (3) vérification de 100 % des 62 visites de juin de l'agent de Kiliba ; (4) décision de suspension éventuelle du paiement à prendre par la direction, sur avis du comité.",
        "Rédigé par : Amani K., auditeur(rice) interne — Date : 28/08/2026.",
      ],
    },
    result: "La section 5 est complète et graduée, la note confidentielle est envoyée à la présidente du comité, et rien n'a circulé en dehors du canal d'audit.",
    pitfall: "Écrire « fraude » dans la fiche ou dans la note : vous êtes au niveau du soupçon documenté. La qualification de fraude est une décision d'une autre instance, après vérification contradictoire.",
  },

  // ───────────────────────── 6. Cas complet résolu ─────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Un nom sur la paie, personne sur le terrain, Uvira » : partie 1, la grille paie & présences",
    scenario: "Rappel de l'énoncé : le comité d'audit vous confie l'audit RH et programmes du projet SCN d'Uvira. Un agent de suivi communautaire, Bahati M., est payé à taux plein depuis cinq mois, son contrat est en règle et son dossier complet, mais personne ne peut confirmer l'avoir vu travailler. Livrable 1 : l'onglet « Paie & Présences » tel qu'il doit être rendu, 20 lignes (5 à 24).",
    steps: [
      {
        title: 'Raisonnement 1 — Un écart à zéro ne protège pas',
        body: "La ligne de Bahati M. est conforme au contrat et au bulletin : le contrôle financier seul conclurait « rien à signaler ». C'est la colonne G, pas la colonne F, qui porte le signal.",
      },
      {
        title: 'Raisonnement 2 — Chaque colonne a sa source',
        body: "D vient du bulletin, E du contrat (avec avenants et notes signées), G d'une source indépendante, H d'un décompte mois par mois. La colonne I n'est qu'un résumé de G et de H.",
      },
      {
        title: 'Raisonnement 3 — L\'extension fait partie du livrable',
        body: "Les 8 lignes ajoutées en procédure 7 sont dans la grille finale : elles montrent que le signal n'est pas un schéma organisé, et qu'une seule autre ligne reste à surveiller.",
      },
    ],
    table: {
      columns: ['Ligne — Employé, site', 'D — Payé', 'E — Autorisé', 'F — Écart', 'G — Présence', 'H — Périodes', 'I — Risque'],
      rows: [
        ['5 — Bahati M., ASC, Sange', '380', '380', '0', 'Non', '4', 'RISQUE GHOST WORKER'],
        ['6 — Neema K., ASC, Kiliba', '380', '380', '0', 'Oui', '0', 'OK'],
        ['7 — Elie T., ASC, Luvungi', '440', '380', '60', 'Oui', '0', 'OK'],
        ['8 — Chantal A., ASC, Kavimvira', '380', '380', '0', 'Oui', '0', 'OK'],
        ['9 — Rénald K., chauffeur', '340', '340', '0', 'Oui', '0', 'OK'],
        ['10 — Sylvain M., gardien', '190', '210', '−20', 'Oui', '0', 'OK'],
        ['11 — Mireille N., superviseure', '620', '620', '0', 'Oui', '0', 'OK'],
        ['12 — Dr Josias B., infirmier titulaire', '700', '700', '0', 'Oui', '0', 'OK'],
        ['13 — Aimée Z., coordinatrice adjointe', '780', '780', '0', 'Oui', '0', 'OK'],
        ['14 — Odette L., comptable', '640', '640', '0', 'Oui', '0', 'OK'],
        ['15 — Solange P., assistante admin. et RH', '450', '450', '0', 'Non', '1', 'À surveiller'],
        ['16 — Gédéon R., logisticien', '560', '560', '0', 'Oui', '0', 'OK'],
        ['17 — Jean-Paul S., ASC, Sange', '380', '380', '0', 'Oui', '0', 'OK'],
        ['18 — Salomé R., ASC, Kiliba', '380', '380', '0', 'Oui', '0', 'OK'],
        ['19 — Prosper N., ASC, Luvungi', '380', '380', '0', 'Non', '1', 'À surveiller'],
        ['20 — Léa M., ASC, Kavimvira', '380', '380', '0', 'Oui', '0', 'OK'],
        ['21 — Augustin B., ASC, Runingu', '380', '380', '0', 'Oui', '0', 'OK'],
        ['22 — Rachel T., ASC, Runingu', '380', '380', '0', 'Oui', '0', 'OK'],
        ['23 — Fidèle K., ASC, Katogota', '380', '380', '0', 'Oui', '0', 'OK'],
        ['24 — Judith W., ASC, Katogota', '380', '380', '0', 'Oui', '0', 'OK'],
      ],
    },
    result: "Livrable 1 terminé : 20 lignes saisies, D28 = 1 (une seule ligne en risque), deux lignes « À surveiller » et deux écarts de paie (+60 USD et −20 USD) traités à part. Le signal est isolé et documenté.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 2, l\'onglet « Heures Supplémentaires » et ses deux lignes de constat',
    scenario: "Livrable 2 : l'onglet « Heures Supplémentaires » rempli pour les quatre équipes de la base, et, pour chaque équipe à récurrence, un point RH et un point programmatique.",
    steps: [
      {
        title: 'Raisonnement — La lecture combinée pose la question avant que vous ne la posiez',
        body: "La colonne H affiche, pour une équipe récurrente, « Sous-effectif chronique probable OU heures manipulées — à documenter RH ET Programme ». Votre travail est de documenter les deux lectures par des tests, puis de formuler deux lignes distinctes.",
      },
    ],
    table: {
      columns: ['A — Équipe', 'B — Site', 'C — Mai', 'D — Juin', 'E — Juillet', 'F — Moyenne', 'G — Récurrence', 'H — Lecture'],
      rows: [
        ['Suivi communautaire (12 ASC)', '6 aires de santé', '142', '156', '151', '149,67', 'Oui', 'RH ET Programme'],
        ['Logistique et chauffeurs', 'Uvira (base)', '20', '0', '14', '11,33', 'Non', 'Ponctuel : vérifier la cause'],
        ['Nutrition, centre de santé', 'Sange', '64', '71', '78', '71,00', 'Oui', 'RH ET Programme'],
        ['Administration et finance', 'Uvira (base)', '6', '0', '0', '2,00', 'Non', 'Ponctuel : vérifier la cause'],
      ],
    },
    example: {
      title: 'Les deux lignes de constat des équipes à récurrence',
      lines: [
        "Suivi communautaire — RH : « 449 h payées de mai à juillet au taux majoré de 30 % (environ 1 280 USD) ; aucune n'a d'autorisation écrite préalable. » Programme : « 150 h par mois équivalent à environ 0,87 poste ; un poste sur 12 n'est pas confirmé sur le terrain ; hypothèse de compensation à tester. »",
        "Nutrition de Sange — RH : « 213 h payées de mai à juillet (moyenne 71 h) en croissance régulière de 64 à 78 h ; autorisations préalables à vérifier. » Programme : « croissance continue sans changement de plan connu : la charge du centre augmente-t-elle (cas de malnutrition en hausse) ou l'effectif est-il insuffisant ? Question posée à la direction du projet. »",
      ],
    },
    result: "Livrable 2 terminé : quatre équipes saisies, deux à récurrence, chacune avec un point RH et un point programmatique distincts.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 3, la fiche de contrôle programmatique : sections 1 et 2',
    scenario: "Livrable 3 : les deux premières sections de la fiche, telles que lues par le bailleur : l'activité identifiée, puis le réalisé constaté par rapport au planifié.",
    steps: [
      {
        title: 'Raisonnement — Le constaté est séparé du déclaré',
        body: "Dans la section 2, la colonne « Réalisé constaté » ne contient que ce que vos preuves établissent. Le chiffre déclaré (702 visites, 36 séances, 1 746 enfants) y apparaît entre parenthèses, comme contexte.",
      },
    ],
    example: {
      title: 'Section 1 — Identification de l\'activité contrôlée',
      lines: [
        "Programme / projet — bailleur : Santé communautaire et nutrition (SCN) — Fonds Meridian.",
        "Activité contrôlée : visites à domicile de dépistage nutritionnel et de suivi des ménages par les agents de suivi communautaire (ASC).",
        "Période contrôlée : juin 2026. Site(s) / commune(s) : aires de santé de Sange, Kiliba, Luvungi, Kavimvira, Runingu et Katogota (territoire d'Uvira, Sud-Kivu).",
      ],
    },
    table: {
      columns: ['Indicateur', 'Cible planifiée', 'Réalisé constaté', 'Écart / explication'],
      rows: [
        ['Ménages visités à domicile', '720', '71 confirmées sur 84 vérifiées (84,5 %) ; 702 déclarées', '13 non confirmées, dont 9 à Sange, attribuées à Bahati M. ; explication non vérifiée'],
        ['Séances de sensibilisation', '36', '8 confirmées sur 9 vérifiées ; 36 déclarées', '1 séance de Sange sans liste d\'émargement'],
        ['Enfants de 6 à 59 mois dépistés', '1 800', '168 retrouvées sur 180 (93,3 %) ; 1 746 déclarés', '12 non retrouvées, dont 8 à Sange'],
        ['ASC en poste', '12', '11 confirmés', '1 non confirmé (Sange) : voir la grille paie & présences'],
      ],
    },
    result: "Livrable 3 terminé : sections 1 et 2 complètes ; les écarts se concentrent sur l'aire de Sange et rejoignent le signal de la grille de paie.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 4, la fiche : sections 3, 4 et 5',
    scenario: "Livrable 4 : le ciblage, les preuves terrain mobilisées, et la conclusion graduée. C'est la partie qui distingue ce qui est prouvé de ce qui reste à vérifier.",
    steps: [
      {
        title: 'Raisonnement 1 — Ce qui est prouvé',
        body: "Trois sources indépendantes confirment l'absence de traces de Bahati M. sur six mois (registre du centre de santé, listes de distribution, contre-visites). Quatre ménages non éligibles, liés à un même agent et à une cellule de Kiliba, sont documentés.",
      },
      {
        title: 'Raisonnement 2 — Ce qui reste à vérifier',
        body: "L'intention, l'identité réelle du bénéficiaire du salaire, l'existence éventuelle d'une explication non écrite : rien de cela n'est établi. Les trois hypothèses (ghost worker, couverture documentaire, réaffectation informelle) ne sont pas départagées, bien que les deux dernières aient été cherchées et écartées sur pièces.",
      },
      {
        title: 'Raisonnement 3 — Le niveau choisi',
        body: "« Soupçon documenté à investiguer » : deux sources indépendantes convergentes ou plus, aucune explication bénigne retrouvée, mais pas de vérification contradictoire. « Anomalie confirmée » serait une conclusion que le dossier ne peut pas défendre.",
      },
    ],
    table: {
      columns: ['Section', 'Contenu saisi'],
      rows: [
        ['3. Critères d\'éligibilité', 'Ménage résidant dans une des 6 aires, avec un enfant de 6 à 59 mois ou une femme enceinte / allaitante, inscrit au registre de ciblage (convention, annexe 2 ; protocole v1)'],
        ['3. Échantillon vérifié', '71 ménages dont la visite est confirmée, issus d\'un tirage de 84 visites (14 par aire)'],
        ['3. Déviations et gravité', '5 ménages non conformes (7,0 %) : 1 cas isolé à Runingu (faible) ; schéma répété à Kiliba, 4 ménages, même agent, même cellule (moyenne)'],
        ['4. Preuves terrain', 'Registre du centre de santé de Sange ; listes de distribution ; contre-visites de 20 ménages ; listes d\'émargement de 9 séances ; entretien du chauffeur, chacun avec date et vérificateur'],
        ['5. Niveau de preuve', 'Soupçon documenté à investiguer (poste de Sange ; ciblage de Kiliba) : pas d\'anomalie confirmée'],
        ['5. Recommandation', 'Vérification contradictoire avec un représentant RH désigné par la présidente du comité ; vérification du compte de réception du salaire et du dossier de recrutement ; extension aux 62 visites de l\'agent de Kiliba ; décision éventuelle de suspension du paiement par la direction'],
        ['5. Rédigé par / Date', 'Amani K., auditeur(rice) interne — 28/08/2026'],
      ],
    },
    result: "Livrable 4 terminé : une fiche de cinq sections, cohérente avec la grille, qui sépare le prouvé du à vérifier et recommande la suite sans accuser personne.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — le dossier de mission complet, de l\'assignation à la note confidentielle',
    scenario: "Voici la chronologie complète de la mission d'Uvira et la pièce produite à chaque étape. C'est le modèle de dossier que vous reproduirez pour chaque audit RH et programmes.",
    steps: [
      {
        title: 'Lecture de la chronologie',
        body: "Notez que le soupçon n'est communiqué qu'à la présidente du comité (20 août, sans nom ; 28 août, note complète), et que l'entretien de la personne concernée n'a pas lieu dans cette mission : il relève de la vérification contradictoire qui suit.",
      },
    ],
    table: {
      columns: ['Date', 'Étape', 'Pièce produite', 'Dossier'],
      rows: [
        ['03/08', 'Assignation par le comité', "Courriel d'assignation, auto-évaluation d'indépendance (aucun lien avec Uvira)", '00_Indépendance'],
        ['07/08', 'Lettre de mission', 'Lettre signée et diffusée', '02_Lettre_de_mission'],
        ['17/08', 'Liste de paie et échantillon', 'Rapprochement 44 lignes, méthode de tirage, grille colonnes A à D', '03_Terrain'],
        ['18/08', 'Croisement avec le dossier RH', 'Colonnes E et F, anomalies, rapprochement des cotisations', '04_Tests'],
        ['19-20/08', 'Présence physique et heures sup', 'Matrice des preuves, colonnes G et H, onglet Heures Supplémentaires', '04_Tests'],
        ['20/08', 'Signal et confidentialité', 'Journal de confidentialité, information de la présidente sans nom', '99_Confidentiel'],
        ['21/08', 'Extension', '8 lignes ajoutées, fenêtre de 6 mois, deux lignes de constat par équipe', '04_Tests'],
        ['24-26/08', 'Contrôle programmatique et ciblage', 'Fiche : sections 1 à 4, contre-visites, résultats de ciblage', '04_Tests'],
        ['24-27/08', 'Entretiens', 'Notes signées, ordre de la périphérie vers la ligne directe', '04_Tests'],
        ['27/08', 'Convergence des sources', 'Tableau de convergence et décision sur le niveau de preuve', '99_Confidentiel'],
        ['28/08', 'Formalisation', 'Section 5 de la fiche, note confidentielle à la présidente du comité', '99_Confidentiel'],
      ],
    },
    result: "Un dossier de onze étapes, dans lequel chaque pièce est datée et justifie la suivante, et dont les pièces sensibles sont séparées dans un dossier à accès restreint.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: 'Exercice noté — « Un nom sur la paie, personne sur le terrain, Nippes, Haïti »',
    instructions: "Vous auditez un programme d'appui agricole dans le département des Nippes, avec 14 agents de terrain répartis sur 6 communes. En constituant votre échantillon de paie, vous relevez Jonas M., « agent de suivi communautaire », payé à taux plein depuis 5 mois. Son contrat est en règle, son dossier RH complet, ses bulletins sans anomalie de montant. Aucun des trois derniers rapports de supervision ne mentionne sa présence, et son nom n'apparaît sur aucune liste d'émargement des réunions communautaires. Un collègue interrogé de façon informelle dit « l'avoir croisé une fois au bureau régional, il y a longtemps ». Complétez grille-audit-paie-presences.xlsx et fiche-controle-programmatique-realise-planifie.docx.",
    table: {
      columns: ['Donnée de départ', 'Valeur'],
      rows: [
        ['Jonas M., agent de suivi communautaire, Miragoâne', 'Payé 350 USD, contrat 350 USD ; présence non confirmée sur les 3 dernières périodes'],
        ['Autres lignes plausibles à saisir (au moins 3)', 'Marie-Ange P., agent de suivi, Miragoâne, 350 / 350, présence confirmée ; Wilner D., superviseur agronome, Anse-à-Veau, 520 / 520 ; Rose-Mireille C., assistante administrative, 400 / 400'],
        ['Heures supplémentaires (équipe à schéma récurrent)', 'Équipe de distribution d\'intrants, Nippes : 18, 22 et 25 h sur les 3 derniers mois'],
        ['Activité de suivi communautaire (fiche)', 'Cible : 14 agents × 40 ménages = 560 visites par mois ; déclaré : 548 ; échantillon de 60 visites, dont 49 confirmées par preuve indépendante'],
      ],
    },
    steps: [
      {
        title: 'Saisissez les quatre lignes dans l\'onglet « Paie & Présences » (colonnes A à E, G, H)',
        actions: ['Jonas M. : G = Non, H = 3. Les autres : G = Oui pour au moins une ligne, H = 0.'],
      },
      {
        title: 'Vérifiez que le drapeau « RISQUE GHOST WORKER » se déclenche automatiquement',
        actions: ['Contrôlez D28, puis expliquez en une phrase pourquoi l\'écart financier est nul.'],
      },
      {
        title: 'Saisissez l\'équipe à schéma récurrent dans l\'onglet « Heures Supplémentaires »',
        actions: ['Recalculez la moyenne à la main et lisez la colonne H.'],
      },
      {
        title: 'Remplissez la section 1 de la fiche',
      },
      {
        title: 'Remplissez la section 2 à partir des seuls résultats confirmés par preuve indépendante',
        actions: ['Calculez le pourcentage de visites confirmées et le réalisé en pourcentage de la cible.'],
      },
      {
        title: 'Remplissez les sections 3 et 4 de la fiche',
        actions: ['Rédigez des critères d\'éligibilité réalistes pour un projet agricole ; nommez les preuves et leur vérificateur.'],
      },
      {
        title: 'Rédigez la section 5 : niveau de preuve atteint, recommandation, rédacteur et date',
        actions: ['Écrivez explicitement ce qui est prouvé, ce qui reste à vérifier, et les trois hypothèses.'],
      },
    ],
    tip: "Repères de correction : le drapeau doit se déclencher (G = Non et H = 3, soit au moins 2), l'écart financier est nul (c'est ce qui rend le cas piégeux), la moyenne de l'équipe de distribution est de 21,67 h avec récurrence « Oui », 49 / 60 visites sont confirmées (81,7 %) et 548 / 560 déclarées (97,9 % de la cible). Le niveau de la section 5 n'est jamais « anomalie confirmée ».",
    pitfall: "Écrire dans la conclusion « Jonas M. est un employé fantôme ». Vous avez des absences de traces documentaires (prouvé) et trois hypothèses à départager (à vérifier) : la conclusion doit distinguer les deux.",
    deliverable: "Les deux fichiers complétés, avec une conclusion qui distingue clairement ce qui est prouvé (absence de traces documentaires de présence) de ce qui reste à vérifier (les trois hypothèses).",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Quel niveau de preuve atteint ? Six situations',
    instructions: "Pour chaque situation, choisissez le niveau de la section 5 de la fiche (conformité confirmée, écart mineur expliqué, soupçon documenté à investiguer, anomalie confirmée) ou, si la règle des deux sources n'est pas satisfaite, « signal non formalisable : poursuivre le travail ». Justifiez en une phrase et indiquez la prochaine action.",
    table: {
      columns: ['N°', 'Situation'],
      rows: [
        ['1', "Un agent est payé 380 USD pour un contrat de 380 USD. Deux listes de distribution signées et un rapport de supervision confirment sa présence en juin."],
        ['2', "Une indemnité de 50 USD est versée sans avenant. Une note de service datée et signée par le Directeur Pays, retrouvée dans les archives de la direction, la justifie depuis janvier."],
        ['3', "Un agent payé depuis 4 mois n'apparaît ni dans le registre du centre de santé, ni sur les listes de distribution, ni dans le témoignage de 3 ménages interrogés séparément. Aucune réaffectation écrite n'existe."],
        ['4', "Après une visite inopinée avec les RH : l'adresse du dossier n'existe pas, le compte de réception du salaire a été ouvert avec la pièce d'identité du superviseur direct, et l'entretien formel confirme que la personne n'a jamais travaillé."],
        ['5', "Un agent n'est pas mentionné dans les rapports de supervision de juin et de juillet. Aucune autre source n'a encore été consultée."],
        ['6', "Un agent est absent des trois rapports de supervision, mais l'infirmier du centre de santé le décrit précisément, deux ménages confirment sa visite et il signe les listes de distribution."],
      ],
    },
    steps: [
      { title: 'Remplissez un tableau Situation / Niveau / Justification en une phrase / Prochaine action' },
      { title: 'Pour la situation 5, listez les trois sources que vous consultez ensuite, dans l\'ordre' },
      { title: 'Pour la situation 6, rédigez la recommandation adressée à la supervision' },
    ],
    tip: "Corrigé indicatif : 1 conformité confirmée ; 2 écart mineur expliqué (régulariser le dossier RH) ; 3 soupçon documenté à investiguer ; 4 anomalie confirmée (vérification contradictoire menée) ; 5 signal non formalisable : poursuivre ; 6 écart mineur expliqué (lacune de supervision, présence confirmée par trois sources indépendantes).",
    pitfall: "Situation 5 : « absent des rapports » ne suffit jamais. Un signal sur une seule source ne se formalise pas, il se poursuit.",
    deliverable: "Un tableau de six lignes, chaque niveau justifié par la règle des deux sources, et trois actions de suite nommées.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Lire les heures supplémentaires de quatre équipes',
    instructions: "Saisissez les données ci-dessous dans l'onglet « Heures Supplémentaires », recalculez à la main les moyennes, lisez les colonnes G et H, puis rédigez pour chaque équipe à récurrence un point RH et un point programmatique. Contexte de l'équipe de distribution : 6 agents budgétés, 6 en poste, 8 distributions réalisées par mois alors que le budget a été construit pour 4.",
    table: {
      columns: ['Équipe', 'Site', 'Mois -2', 'Mois -1', 'Mois en cours'],
      rows: [
        ['Vaccination et dépistage', 'Centre de santé de Kiliba', '40', '44', '47'],
        ['Chauffeurs', 'Uvira (base)', '15', '0', '22'],
        ['Distribution de produits nutritionnels', 'Luvungi', '90', '88', '91'],
        ['Administration', 'Uvira (base)', '0', '0', '12'],
      ],
    },
    steps: [
      { title: 'Saisissez les quatre équipes avec leurs trois mois, zéros compris' },
      { title: 'Recalculez à la main les quatre moyennes et déterminez la colonne G' },
      { title: 'Rédigez les deux lignes de constat pour chaque équipe à récurrence' },
      { title: 'Pour les équipes en « Ponctuel », indiquez la vérification de cause à mener avant de classer' },
    ],
    tip: "Repères de correction : moyennes de 43,67, 12,33, 89,67 et 4,00 ; récurrence « Oui » pour la vaccination et la distribution. L'équipe de distribution illustre un plan sous-budgété (8 distributions pour un budget de 4) : la lecture programmatique y est plus pertinente que la lecture RH.",
    pitfall: "Conclure pour la distribution « heures manipulées » parce que les chiffres sont stables : une stabilité à 90 h par mois est aussi le signe d'une charge fixe que le plan n'a pas budgétée.",
    deliverable: "L'onglet complété pour quatre équipes, quatre moyennes recalculées, deux lignes de constat par équipe récurrente et une vérification de cause pour chaque équipe ponctuelle.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre échantillon de paie couvre les trois strates (terrain, supervision, administration), son tirage est décrit en trois lignes et les postes ajoutés par jugement sont justifiés.",
      "Chaque ligne de la grille a un salaire autorisé qui vient d'un document contractuel, et chaque écart est expliqué par une pièce datée et signée ou classé « à documenter ».",
      "Chaque « Oui » de la colonne G renvoie à une source indépendante référencée, et chaque « Non » indique ce qui a été cherché.",
      "Le drapeau « RISQUE GHOST WORKER » se déclenche pour Jonas M. (ou Bahati M.) et votre commentaire dit « signal à investiguer », jamais « fraude ».",
      "Vous avez saisi 0 (et non une cellule vide) pour un mois sans heure supplémentaire, et vous avez recalculé au moins une moyenne à la main.",
      "Chaque équipe à récurrence a deux lignes de constat distinctes : un point RH et un point programmatique.",
      "Votre fiche sépare le réalisé constaté (preuves indépendantes) du déclaré, et chaque preuve de la section 4 a une date et un vérificateur non impliqué dans la mise en œuvre.",
      "La section 3 contient les critères d'éligibilité du document de projet, la méthode d'échantillonnage et le classement des déviations (isolée ou schéma répété, avec la gravité).",
      "La section 5 indique un niveau de preuve choisi dans la liste de la fiche, dit ce que ce niveau n'est pas, et recommande une vérification contradictoire conjointe avec les RH.",
      "Rien dans votre dossier n'a été communiqué en dehors du canal d'audit avant la convergence de deux sources indépendantes.",
    ],
  },

  // ───────────────────────── 8. Erreurs fréquentes ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Auditer la paie uniquement sur pièces, sans vérifier la présence physique — un dossier impeccable ne dit rien du travail effectué, et c'est même souvent le signe d'un dossier « trop propre ». Parade : une source indépendante par personne et par mois, référencée dans la matrice (procédure 3).",
      "Accepter un rapport d'activité sans échantillon de vérification terrain indépendant — c'est laisser l'audité auditer lui-même son propre travail. Parade : tirage aléatoire de 10 à 15 % des activités et preuve tierce pour chacune (procédure 5).",
      "Ignorer des heures supplémentaires récurrentes en les qualifiant de « normales » — c'est soit un sous-effectif chronique, soit une manipulation des heures. Parade : deux lignes de constat, RH et programme, pour chaque équipe à récurrence (procédure 4).",
      "Conclure à la fraude dès le premier signal, sans chercher l'explication la plus bénigne — vous exposez l'auditeur à une accusation infondée. Parade : chercher d'abord réaffectation, maladie et lacune de documentation, sur des sources hors de la ligne directe (procédure 7, étape 5).",
      "Se limiter à l'échantillon initial quand un signal apparaît — un ghost worker isolé est rare, un schéma organisé sous la même ligne hiérarchique est le cas qui compte. Parade : étendre à toute l'équipe et au même superviseur (procédure 7, étape 2).",
      "Compter comme preuve une source issue du circuit RH ou une feuille de présence signée — elles ne sont pas indépendantes. Parade : appliquer le test d'indépendance avant de saisir un « Oui » (procédure 3, étape 1).",
      "Interroger d'abord le superviseur direct — vous perdez l'effet de surprise et vous influencez les autres témoignages. Parade : ordre de la périphérie vers la ligne directe, et jamais la personne concernée avant la vérification contradictoire (procédure 7, étape 4).",
      "Communiquer un soupçon avant d'avoir croisé deux sources indépendantes — une fuite peut déclencher une fabrication de preuves. Parade : cercle de trois personnes, journal de confidentialité, note à la seule présidente du comité (procédure 7, étapes 1 et 7).",
      "Écraser les formules de la grille ou laisser des cellules vides dans l'onglet des heures supplémentaires — le drapeau ne se déclenche plus ou la moyenne est faussée. Parade : ne saisir que les colonnes de saisie, mettre 0 plutôt que vide, vérifier les formules après effacement des exemples (procédures 1 et 4).",
    ],
  },

  // ───────────────────────── 9. Réalisations + check-list ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez vérifié l'exhaustivité d'une liste de paie de 44 lignes et tiré un échantillon stratifié de 12 personnes avec une méthode écrite, puis saisi les colonnes A à D de la grille.",
      "Vous avez croisé chaque ligne avec le dossier RH (colonnes E et F), documenté deux écarts, contrôlé quatre rubriques d'indemnités sur toute la paie et rapproché les cotisations du récépissé de versement.",
      "Vous avez bâti une matrice de preuves de présence, saisi les colonnes G et H, lu la colonne I et D28, et rédigé la ligne de synthèse prudente du signal.",
      "Vous avez réalisé un triple rapprochement congés / présences / paie, saisi quatre équipes dans l'onglet « Heures Supplémentaires » et rédigé les deux lignes de constat de chaque équipe à récurrence.",
      "Vous avez rempli la section 1, la section 2 et la section 4 de la fiche de contrôle programmatique à partir d'un échantillon tiré par vous et de preuves terrain indépendantes.",
      "Vous avez vérifié le ciblage de 71 ménages, classé les déviations (un cas isolé, un schéma répété) et rédigé la section 3.",
      "Vous avez conduit une investigation sans conclusion hâtive : silence et pièces sécurisées, extension à 8 agents, fenêtre de 6 mois, plan d'entretiens de la périphérie vers la ligne directe, explications bénignes écartées sur pièces.",
      "Vous avez formalisé un soupçon documenté (section 5 et note confidentielle) en distinguant le prouvé du à vérifier, et recommandé une vérification contradictoire menée avec les RH.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi l'audit RH/Programme ne peut jamais se limiter à un contrôle financier de la paie.",
      "Je sais citer les trois red flags classiques d'un audit de paie (ghost worker, cotisations, indemnités sans base) et le test qui détecte chacun.",
      "Je sais pourquoi des heures supplémentaires récurrentes se lisent toujours comme un signal RH ET programmatique, et je sais rédiger les deux lignes de constat.",
      "J'ai complété la grille d'audit paie & présences avec un cas de risque ghost worker et vérifié le déclenchement automatique du drapeau.",
      "J'ai complété la fiche de contrôle programmatique réalisé/planifié avec une conclusion distinguant le prouvé du à vérifier.",
      "Je sais dans quel ordre interroger mes sources lors d'une investigation RH sensible, et pourquoi cet ordre protège l'intégrité de l'audit.",
      "Je sais distinguer une source indépendante d'une feuille de présence signée ou d'un document du circuit RH.",
      "Je ne communique jamais un soupçon de fraude avant d'avoir croisé au moins deux sources indépendantes, et je n'écris jamais « fraude » à un niveau de simple soupçon.",
    ],
  },

  // ───────────────────────── 10. Clôture ─────────────────────────
  {
    type: 'closing',
    nextModuleHint: "Module 06 — Prévention de la Fraude & Politique Anti-Corruption. À Uvira, vous avez documenté un soupçon de ghost worker sans accuser personne : le module suivant vous apprend à reconnaître les typologies de fraude (détournements, fausses factures, ghost workers), à construire un système de signalement sécurisé et protégé, et à lire la culture organisationnelle qui rend ces schémas possibles.",
  },
]
