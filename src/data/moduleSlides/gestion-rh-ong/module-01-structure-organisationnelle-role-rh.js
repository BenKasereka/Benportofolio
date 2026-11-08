// Module 01 — Structure Organisationnelle des ONG & Rôle des RH
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure est
// détaillée étape par étape et appliquée à un cas fil rouge unique (base de
// Goma), avec les templates remplis champ par champ. Les noms, chiffres et
// dates des exemples sont fictifs.
export default [
  {
    type: 'cover',
    title: 'Structure Organisationnelle des ONG & Rôle des RH',
    hook: "À la fin de ce module, vous aurez en main la cartographie réelle d'une base (onglet Alertes à zéro), votre fiche de positionnement validée par écrit, la matrice des responsabilités RH du recrutement à la séparation, une fiche d'interface RH-Finance signée par les deux parties et la note qui fait valider vos corrections sans braquer l'équipe. Tout cela en suivant, étape par étape, ce qu'un HR Officer expérimenté fait pendant sa première semaine sur une mission.",
  },
  {
    type: 'objectives',
    items: [
      "Établir votre fiche de positionnement dès la première semaine : ligne administrative, ligne technique et matrice de décision à trois niveaux (je décide seul / avis du HR Manager / siège), confirmées par écrit par votre HR Manager.",
      "Construire la matrice des responsabilités RH de la mission, du recrutement à la séparation (qui prépare, qui valide, qui est consulté, qui est informé), et appliquer une check-list de séparation qui empêche tout poste fantôme.",
      "Cartographier l'organigramme réel d'une base en remplissant organigramme-cartographie-roles-rh.xlsx à partir de trois sources (organigramme officiel, masse salariale, contrats actifs) et d'entretiens terrain, jusqu'à obtenir un onglet Alertes à zéro.",
      "Détecter et sécuriser un poste fantôme encore payé : rassembler les preuves, alerter la Finance par écrit avant la date limite de paie, instruire la cause sans accuser et faire décider la régularisation au bon niveau.",
      "Installer le circuit mensuel RH-Finance pour la paie et les avantages sociaux en remplissant fiche-interface-rh-finance-paie.docx (sections 1 à 7), avec signature conjointe et contrôle après virement.",
      "Faire valider vos corrections sans braquer l'équipe : entretien préalable avec le Base Manager, note d'une demi-page au HR Manager et au Head of Mission, organigramme versionné et diffusé.",
      "Rédiger la narrative de planification annuelle RH avec gabarit-narrative-planification-annuelle-rh.docx : bilan, priorités, impact budgétaire chiffré et chronogramme.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une présentation de l'organigramme type d'une ONG : c'est la méthode complète de votre première semaine en poste RH, appliquée à un seul cas suivi du début à la fin. À la fin, vous aurez produit sept livrables réutilisables tels quels sur votre propre mission.",
      "Le cas fil rouge (fictif, inspiré de situations réelles) : vous êtes N. Mbusa, nouvelle HR Officer de la base de Goma d'une ONG médicale internationale que nous appellerons Kivu Santé Solidaire (KSS). Vous prenez votre poste le lundi 3 août 2026. Votre prédécesseure est partie il y a six semaines sans passation écrite. Lors d'un briefing de 30 minutes, on vous remet l'organigramme officiel de la base (un PowerPoint daté de décembre 2025, 36 postes nominatifs) et la masse salariale de juillet 2026 (36 lignes). La prochaine paie, celle d'août, doit être transmise à la Finance au plus tard le jeudi 20 août.",
    ],
    bullets: [
      "Livrable 1 — Votre fiche de positionnement et votre matrice de décision à trois niveaux, confirmées par courriel par le HR Manager de mission.",
      "Livrable 2 — La matrice des responsabilités RH de la base (cycle complet) et la check-list de séparation.",
      "Livrable 3 — Le classeur organigramme-cartographie-roles-rh.xlsx rempli, rapproché de la paie et des contrats, onglet Alertes à zéro.",
      "Livrable 4 — Le courriel d'alerte à la Finance et la note factuelle sur le poste fantôme payé.",
      "Livrable 5 — La fiche d'interface RH-Finance d'août 2026 remplie, signée par le RH et la Finance, et contrôlée après virement.",
      "Livrable 6 — La note d'une demi-page de présentation des écarts et l'organigramme validé, daté et diffusé.",
      "Livrable 7 — La narrative de planification annuelle RH 2027 de la base, avec impact budgétaire et chronogramme.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '1 120 USD',
    caption: "versés en deux virements (juin et juillet 2026) à un Assistant Logistique parti le 12 mai — c'est ce que vous découvrirez le mardi 4 août, deuxième jour du cas fil rouge.",
    context: "Montant fictif. Personne n'a fraudé à ce stade : le solde de tout compte a été payé à part, mais la ligne de paie n'a jamais été désactivée. C'est exactement le type d'écart que la méthode de ce module fait apparaître en moins de 48 heures.",
  },

  // ─── Théorie essentielle ───────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Terrain vs siège : deux logiques, pas une hiérarchie décorative',
    body: [
      "Le siège porte la responsabilité institutionnelle : relation avec les bailleurs, conformité légale dans le pays d'enregistrement, politique RH globale, risques réputationnels, arbitrages budgétaires entre missions. Ses décisions engagent toute l'organisation, d'où des circuits de validation plus longs : un Head of HR répond devant un Directeur Général, lui-même redevable devant un conseil d'administration.",
      "Le terrain (mission ou base) porte la responsabilité opérationnelle immédiate : un projet qui tourne, une équipe à payer à temps, une urgence qui n'attend pas le siège. Une mission bien structurée délègue donc au Head of Mission et à son HR Manager une autorité réelle sur le quotidien (recrutement national, disciplinaire de premier niveau, ajustements de planning). Le siège ne reprend que les dossiers à fort enjeu : licenciement d'un cadre international, faute grave, révision de la grille salariale.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Remplacer le Superviseur Distribution pendant son absence (intérim interne) → décision terrain (Base Manager + HR Manager de mission).",
        "Valider le congé sans solde de ce superviseur → décision terrain, niveau HR Manager de mission.",
        "Décider d'une procédure de recouvrement ou d'un signalement de fraude sur le poste fantôme payé → Head of Mission, avec information du siège si la politique anti-fraude l'exige.",
      ],
    },
    highlight: "Un organigramme ne vous apprend pas seulement « qui rapporte à qui » : il vous dit quelles décisions vous prenez seul, lesquelles demandent l'avis du HR Manager et lesquelles remontent au siège. Confondre ces trois niveaux est l'erreur la plus fréquente d'un RH junior.",
  },
  {
    type: 'comparison-table',
    title: "Les rôles clés à identifier dans toute structure d'ONG",
    columns: ['Rôle', 'Niveau', "Ce qu'il faut savoir de lui dès le jour 1"],
    rows: [
      ['Head of Mission / Country Director', 'Terrain (national)', "Autorité finale sur les décisions RH de la mission, sauf celles réservées au siège par la politique RH globale. Premier point de validation pour tout dossier sensible."],
      ['HR Manager / Coordinateur RH', 'Terrain (national)', "Responsable hiérarchique direct du HR Officer de base ; centralise les dossiers RH de toutes les bases et fait l'interface avec le Head of Mission."],
      ['HR Officer / Admin-RH', 'Terrain (base)', "Exécution quotidienne : contrats, paie, dossiers individuels, présence. Souvent le poste d'entrée en RH humanitaire, et le plus proche du personnel national."],
      ['Base Manager / Chef de base', 'Terrain (base)', "Pas un poste RH, mais un interlocuteur RH quotidien incontournable : il gère l'équipe au jour le jour et remonte en premier les problèmes disciplinaires ou de moral."],
      ['Head of HR / RH Siège', 'Siège', "Porte la politique RH globale, valide les cas à fort enjeu, garantit la cohérence RH entre missions."],
      ['Finance Manager / Coordinateur Finance', 'Terrain (national)', "Interlocuteur pour la paie, les avantages sociaux et les coûts RH imputés aux budgets bailleurs. Au quotidien, la paie passe souvent par un Payroll Officer ou un comptable dédié."],
    ],
  },
  {
    type: 'concept',
    title: 'Qui est qui dans le cas fil rouge',
    body: "Avant toute action, posez les noms sur les rôles. Ce tableau est le premier que vous construisez en arrivant : il vous dit à qui parler, de quoi, et dans quel ordre.",
    table: {
      columns: ['Rôle', 'Nom (fictif)', 'Lieu', 'Ce que cette personne attend de vous'],
      rows: [
        ['Head of Mission', 'H. Mwamba', 'Kinshasa', 'Des dossiers RH sensibles remontés tôt, factuels, avec une proposition de décision.'],
        ['HR Manager de mission', 'A. Kavira', 'Kinshasa', 'Votre n+1 technique : application de la politique RH, alertes rapides, aucune décision hors de votre niveau.'],
        ['HR Officer de base', 'N. Mbusa (vous)', 'Goma', '—'],
        ['Base Manager', 'E. Kasongo', 'Goma', 'Votre n+1 administratif, en poste depuis 3 ans : être consulté avant toute correction qui touche son équipe.'],
        ['Assistant RH', 'P. Sifa', 'Goma', 'Savoir enfin à qui il rapporte et qui lui donne ses priorités.'],
        ['Finance Manager de mission', 'R. Ilunga', 'Kinshasa', "Des informations de paie fiables et datées, jamais d'ajustement promis sans accord de trésorerie."],
        ['Payroll Officer', 'C. Bahati', 'Goma', 'Les mouvements du mois avant le 20, sur un document signé.'],
        ['Head of HR siège', 'S. Lambert', 'Siège', 'Être informée des cas à fort enjeu prévus par la politique RH (fraude, faute grave, cadre international).'],
      ],
    },
    tip: "Sur votre propre mission, construisez ce tableau dès le jour 1 avec le Base Manager : demander « qui fait quoi ici ? » est la meilleure entrée en matière, et la moins menaçante.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois niveaux de décision du HR Officer de base',
    columns: ['Niveau', 'Qui décide', 'Exemples typiques (à confirmer dans la politique RH et la délégation d\'autorité de votre ONG)'],
    rows: [
      ['Niveau 1 — Je décide ou j\'exécute seul', 'HR Officer', "Tenue des dossiers individuels, vérification des soldes de congés, préparation d'un contrat sur modèle validé, transmission mensuelle des mouvements à la Finance, blocage d'une ligne de paie d'une personne dont le départ est documenté."],
      ['Niveau 2 — Avis ou validation du HR Manager', 'HR Manager de mission (et Head of Mission pour signature)', "Signature d'un contrat national, congé sans solde, premier avertissement écrit, changement de taux selon la grille, changement de rattachement hiérarchique, modification de l'organigramme."],
      ['Niveau 3 — Remonte au siège', 'Head of Mission + RH siège', "Licenciement d'un cadre international, faute grave, révision de la grille salariale, suspicion de fraude si la politique anti-fraude l'exige."],
    ],
  },
  {
    type: 'concept',
    title: 'Le Base Manager : le poste qui en sait plus qu\'il n\'y paraît',
    body: "Traiter le Base Manager comme un simple exécutant sans rôle RH est un piège classique. C'est souvent lui qui détecte en premier un conflit d'équipe, une absence répétée ou un problème de moral, bien avant qu'un dossier disciplinaire formel n'atterrisse sur votre bureau. Ignorer ce canal informel, c'est apprendre les problèmes RH avec plusieurs semaines de retard.",
    example: {
      title: 'Dans le cas fil rouge',
      body: "E. Kasongo savait depuis le mois de juin que le Superviseur Distribution était en congé sans solde et que l'Assistant Logistique était parti. Il a géré ces ajustements « à l'oreille », par manque de temps plus que par mauvaise volonté, sans les faire remonter. Il est à la fois votre meilleure source d'information et la personne qui risque de vivre vos corrections comme une remise en cause.",
    },
    tip: "Rencontrez le Base Manager en tête-à-tête dès le jour 1 et posez-lui des questions ouvertes avant de lui montrer le moindre document. Vous corrigerez l'organigramme avec lui, pas contre lui.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire à maîtriser dès ce module',
    terms: [
      { term: 'Reporting line', definition: "Ligne hiérarchique formelle : à qui un poste rapporte administrativement et techniquement. Dans une structure matricielle, ce ne sont pas toujours la même personne." },
      { term: 'Ligne administrative', definition: "Gestion quotidienne de la personne : présence, horaires, congés, sécurité, discipline de premier niveau. Souvent le Base Manager. Correspond à « Administratif » dans le template." },
      { term: 'Ligne fonctionnelle (technique)', definition: "Contenu métier du travail : normes, méthodes, validation technique. Pour un HR Officer de base, c'est le HR Manager de mission. Correspond à « Fonctionnel » dans le template. Les deux lignes coexistent et doivent être écrites, pas seulement comprises à l'oral." },
      { term: 'Poste fantôme', definition: "Poste qui figure encore sur l'organigramme officiel ou sur la masse salariale alors que la personne est partie depuis un moment. Un des signaux d'alerte les plus fréquents d'un organigramme non maintenu." },
      { term: 'Masse salariale (payroll)', definition: "Liste réelle des personnes payées un mois donné, avec poste, date d'entrée et montant. Souvent une meilleure photographie de la réalité que l'organigramme officiel." },
      { term: 'Interface RH-Finance', definition: "Circuit mensuel structuré par lequel le RH transmet à la Finance toute information affectant la paie (embauches, départs, changements de contrat, congés impactant le salaire)." },
      { term: 'Date limite de transmission (cut-off)', definition: "Date au-delà de laquelle la Finance ne peut plus intégrer un mouvement dans la paie du mois. Dans le cas fil rouge : le 20 du mois, validation Finance le 23, virement le 28." },
      { term: 'Rapprochement', definition: "Comparaison ligne à ligne de deux listes (organigramme, paie, contrats) par un identifiant commun, de préférence le matricule, pour faire apparaître les écarts." },
      { term: 'Délégation d\'autorité', definition: "Document interne qui fixe qui peut décider ou signer quoi (contrats, dépenses, sanctions). C'est la base écrite de votre matrice de décision." },
    ],
  },
  {
    type: 'process',
    title: 'Le cycle RH complet : le fil conducteur de toute la formation',
    intro: "Chaque module qui suit couvre une étape de ce même cycle. Le Module 01 vous donne la carte : qui est responsable de chaque étape sur votre mission.",
    steps: [
      { title: 'Recrutement national & international (Module 02)', body: 'Définition de poste, publication, sélection, entretiens, vérification des références.' },
      { title: 'Contrats & administration du personnel (Module 03)', body: 'Type de contrat, dossier individuel, gestion disciplinaire.' },
      { title: 'Rémunération & avantages sociaux (Module 04)', body: 'Grille salariale, primes terrain, avantages sociaux.' },
      { title: 'Évaluation des performances & développement (Module 05)', body: 'Suivi de la performance, plans de formation, évolution de carrière.' },
      { title: 'Séparation du personnel', body: "Fin de contrat, démission, licenciement, départ en fin de mission : la dernière étape, souvent négligée, alors qu'elle concentre un risque légal et réputationnel élevé." },
    ],
    result: "Chaque étape mal gérée en amont se paie plus cher en aval : une définition de poste imprécise devient un litige d'évaluation, une séparation mal clôturée devient un poste fantôme. Pensez toujours l'étape où vous êtes en fonction de la précédente et de la suivante.",
    example: {
      title: 'Dans le cas fil rouge',
      body: "Le poste fantôme de l'Assistant Logistique n'est pas un problème de paie : c'est une séparation mal clôturée (étape 5) dont la conséquence est apparue à l'étape 3 (rémunération).",
    },
  },
  {
    type: 'concept',
    title: "L'interface RH-Finance n'est jamais un sujet « purement RH »",
    body: [
      "La paie n'est pas un document RH transmis à la Finance pour exécution passive : c'est une collaboration mensuelle à enjeu partagé, où chaque camp détient une information que l'autre n'a pas.",
      "Sans échange structuré, l'un de ces deux scénarios finit toujours par arriver : la Finance paie sur des informations RH obsolètes (un employé parti reçoit encore un virement), ou le RH promet des ajustements que la trésorerie ne peut pas honorer à la date prévue.",
    ],
    table: {
      columns: ['Le RH sait…', 'La Finance sait…'],
      rows: [
        ['Qui a été recruté ce mois-ci et à quelle date', 'Quel budget bailleur porte chaque poste (et dans quelle proportion)'],
        ['Qui est parti, avec quelle date effective et quel motif', 'Quel taux de change appliquer sur une mission multi-devises'],
        ['Qui a changé de poste, de base ou de taux', 'Quelles échéances de trésorerie contraignent la date de virement'],
        ['Qui est en congé sans solde, en maladie non couverte, en absence injustifiée', 'Quelles cotisations et primes d\'assurance sont prélevées et pour qui'],
      ],
    },
    highlight: "Une erreur de paie n'est jamais un simple incident administratif : c'est un problème de confiance pour le personnel et un problème de trésorerie pour l'organisation.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois interfaces du RH : Finance, Logistique, Programmes',
    columns: ['Interface', 'Ce que le RH transmet', 'Ce que le RH reçoit', 'Rythme et support'],
    rows: [
      ['Finance', "Embauches, départs, changements de contrat ou de taux, congés impactant le salaire, ajouts et retraits aux avantages sociaux (assurance santé, indemnités)", "Imputation budgétaire de chaque poste, taux de change, calendrier de paie et de trésorerie, confirmation des virements", 'Mensuel, avant le cut-off — fiche d\'interface RH-Finance signée'],
      ['Logistique', "Arrivées et départs (badges, téléphones, ordinateurs, clés, hébergement, véhicules), déplacements du personnel", "Procès-verbaux de remise et de restitution du matériel, besoins en chauffeurs, gardes, personnel journalier", 'À chaque mouvement — check-lists d\'arrivée et de départ'],
      ['Programmes', "Délais réalistes de recrutement, profils disponibles sur le marché local, plan de staffing", "Calendrier des projets, postes et mois FTE budgétés par bailleur, besoins de formation", 'Trimestriel et à chaque nouveau projet — plan de staffing'],
    ],
  },
  {
    type: 'concept',
    title: 'Vos sources et vos outils pour ce module',
    body: [
      "L'organigramme officiel (PDF ou PowerPoint du siège) est une hypothèse à vérifier, jamais une vérité : il est mis à jour à intervalles irréguliers, parfois seulement lors d'un audit. La masse salariale du mois précédent dit qui est effectivement payé. La liste des contrats actifs dit qui est juridiquement employé. Leurs écarts sont votre matière de travail.",
      "Les trois templates du dossier 04-templates sont utilisés champ par champ dans les procédures qui suivent.",
    ],
    table: {
      columns: ['Template', 'Ce qu\'il contient', 'Utilisé dans'],
      rows: [
        ['organigramme-cartographie-roles-rh.xlsx', "Onglet Cartographie (colonnes A à I : Poste, Titulaire, Rattachement n+1, Type de rattachement, Responsabilités RH clés, Interface Finance/Logistique/Programmes, Statut, Date de départ, Alerte calculée) et onglet Alertes (4 compteurs automatiques)", 'Procédures 1, 3 et 6'],
        ['fiche-interface-rh-finance-paie.docx', "7 sections : période et échéance, embauches, départs, changements, congés, vérifications croisées, validation conjointe", 'Procédures 4 et 5'],
        ['gabarit-narrative-planification-annuelle-rh.docx', "5 sections : contexte et risques, bilan de l'année, objectifs de l'année à venir, ressources humaines et budget, chronogramme", 'Procédure 7'],
      ],
    },
    pitfall: "Les colonnes Statut (G) et Type de rattachement (D) sont des listes déroulantes. Tapez « Parti » à la main au lieu de choisir « Parti - à retirer » et les formules de l'onglet Alertes ne compteront plus la ligne correctement.",
  },

  // ─── Procédure 1 — Positionnement ──────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 1 — Établir votre positionnement et vos niveaux de décision (jour 1)',
    body: "Avant de cartographier les autres, clarifiez votre propre place. Un RH qui ne sait pas s'il doit trancher ou remonter un dossier finit soit par tout escalader (et saturer sa hiérarchie), soit par tout trancher seul (et décider hors de son ressort). Cette procédure prend une demi-journée et vous sert pendant toute la mission.",
    bullets: [
      'Étape 1 — Rassembler les documents qui définissent votre poste.',
      'Étape 2 — Identifier vos deux lignes hiérarchiques (administrative et technique).',
      'Étape 3 — Construire votre matrice de décision à trois niveaux.',
      'Étape 4 — Faire confirmer le tout par écrit par votre HR Manager.',
    ],
    result: 'Livrable : une fiche de positionnement d\'une page + un courriel de confirmation du HR Manager archivé dans votre dossier de prise de poste.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Rassembler les documents qui définissent votre poste',
    intro: "Votre positionnement ne se devine pas, il se lit dans des documents. Si l'un manque, c'est déjà une information : vous le demanderez à l'étape 4.",
    steps: [
      {
        title: 'Demandez les quatre documents de référence',
        actions: [
          'Votre fiche de poste signée (ou la version jointe à votre contrat).',
          'La politique RH de la mission (ou le manuel RH du siège applicable au pays).',
          "La délégation d'autorité de la mission (qui signe quoi : contrats, dépenses, sanctions).",
          "L'organigramme officiel le plus récent, avec sa date.",
        ],
      },
      {
        title: 'Créez votre dossier de prise de poste',
        actions: [
          'Créez un dossier « 00_Prise de poste_AAAA-MM » sur le serveur RH (pas sur votre bureau).',
          'Enregistrez chaque document reçu avec sa date dans le nom : « Organigramme_Goma_2025-12.pptx ».',
          'Notez dans un fichier « Manquants.txt » chaque document introuvable.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 3 août 2026, 10 h',
      lines: [
        'Fiche de poste HR Officer Goma : reçue (version mars 2024, non mise à jour).',
        'Politique RH mission RDC : reçue (version 2025).',
        "Délégation d'autorité : MANQUANTE — à demander au HR Manager.",
        'Organigramme officiel : reçu, PowerPoint daté de décembre 2025 (8 mois).',
      ],
    },
    result: 'Fait quand : les documents disponibles sont classés et datés, et la liste des manquants est écrite.',
    tip: "Une fiche de poste ancienne n'est pas un problème en soi : relevez simplement les tâches qu'elle mentionne et que personne ne fait plus, ou l'inverse. Ce sera utile à l'étape 3.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Identifier vos deux lignes hiérarchiques',
    intro: "Un HR Officer de base rapporte souvent administrativement au Base Manager et techniquement au HR Manager de mission. Les deux liens coexistent et doivent être écrits.",
    steps: [
      {
        title: 'Lisez ce que disent les documents',
        actions: [
          'Relevez dans la fiche de poste la mention « rapporte à » (souvent un seul nom).',
          "Relevez dans l'organigramme officiel la flèche qui part de votre poste.",
          'Notez les deux informations, même si elles se contredisent.',
        ],
      },
      {
        title: 'Vérifiez ce qui se passe en pratique',
        actions: [
          'Demandez au Base Manager : « Qui valide aujourd\'hui les congés et la présence du HR Officer ? »',
          'Demandez au HR Manager : « Sur quels dossiers voulez-vous être consulté avant décision ? »',
        ],
      },
      {
        title: 'Formulez les deux lignes séparément',
        actions: [
          'Ligne administrative : qui gère votre présence, vos congés, votre sécurité au quotidien.',
          'Ligne technique : qui valide le contenu RH de votre travail et vos décisions RH.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge',
      lines: [
        'Fiche de poste : « rapporte au HR Manager de mission ». Organigramme : flèche vers le HR Manager.',
        'En pratique : le Base Manager E. Kasongo valide les congés et la présence de toute la base.',
        'Ligne administrative → E. Kasongo, Base Manager Goma (présence, congés, sécurité, horaires).',
        'Ligne technique → A. Kavira, HR Manager de mission, Kinshasa (contenu RH, validations RH).',
      ],
    },
    result: 'Fait quand : vous pouvez écrire en deux lignes qui est votre n+1 administratif et qui est votre n+1 technique.',
    pitfall: "Ne choisissez pas l'une des deux lignes en ignorant l'autre : un Base Manager court-circuité sur la gestion quotidienne de « son » HR Officer devient vite un adversaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Construire votre matrice de décision à trois niveaux',
    intro: 'Entrée : la politique RH, la délégation d\'autorité (ou à défaut votre meilleure lecture), et la liste des tâches de votre fiche de poste.',
    steps: [
      {
        title: 'Listez vos décisions récurrentes',
        actions: [
          'Ouvrez une feuille Excel « Matrice_decision ».',
          'Créez 4 colonnes : Décision / Niveau (1, 2 ou 3) / Qui valide / Source (article de politique ou « à confirmer »).',
          'Saisissez au moins 12 décisions tirées de votre fiche de poste et des dossiers en cours.',
        ],
      },
      {
        title: 'Classez chaque décision',
        actions: [
          'Niveau 1 si la politique vous l\'attribue explicitement ou s\'il s\'agit d\'exécuter une règle claire.',
          'Niveau 2 si la décision engage un salaire, un contrat, une sanction ou l\'organigramme.',
          'Niveau 3 si la politique la réserve au siège (cadre international, faute grave, grille salariale, fraude).',
          'En cas de doute, classez au niveau supérieur et notez « à confirmer » dans la colonne Source.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait de la matrice de N. Mbusa',
      lines: [
        'Bloquer la ligne de paie d\'une personne dont la démission est documentée → Niveau 1 → HR Officer → Politique RH §4.2.',
        'Valider un congé sans solde → Niveau 2 → HR Manager → Politique RH §6.5.',
        'Modifier le rattachement d\'un poste dans l\'organigramme → Niveau 2 → HR Manager + Head of Mission → à confirmer.',
        'Décider d\'un recouvrement de salaire versé à tort à un ex-employé → Niveau 3 → Head of Mission (+ siège selon politique anti-fraude) → à confirmer.',
      ],
    },
    result: 'Fait quand : chaque décision a un niveau, un valideur et une source, et les cas « à confirmer » sont listés pour l\'étape 4.',
    tip: 'Les numéros d\'article de cet exemple sont fictifs : remplacez-les par ceux de votre propre politique RH. Une matrice sans source n\'est qu\'une opinion.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Faire confirmer votre positionnement par écrit',
    intro: 'Une validation orale ne survit pas à un changement de HR Manager. Envoyez un courriel court, qui demande une réponse simple.',
    steps: [
      {
        title: 'Rédigez et envoyez le courriel de confirmation',
        actions: [
          'Destinataire : votre n+1 technique ; copie : votre n+1 administratif.',
          'Joignez la fiche de positionnement (les deux lignes) et la matrice de décision.',
          'Posez des questions fermées sur les points « à confirmer ».',
          'Demandez la délégation d\'autorité si elle manque.',
        ],
      },
      {
        title: 'Archivez la réponse',
        actions: [
          'Enregistrez la réponse en PDF dans « 00_Prise de poste ».',
          'Mettez à jour la colonne Source de la matrice avec « Confirmé par courriel du JJ/MM/AAAA ».',
        ],
      },
    ],
    example: {
      title: 'Courriel envoyé le mardi 4 août 2026',
      lines: [
        'Objet : Confirmation de mon positionnement — HR Officer Goma',
        'Bonjour A., comme convenu, je vous propose de formaliser mon positionnement :',
        '1. Ligne technique : vous-même (HR Manager de mission). Ligne administrative : E. Kasongo (présence, congés, sécurité).',
        '2. Vous trouverez ci-jointe ma matrice de décision (14 décisions). Pouvez-vous me confirmer les 3 points marqués « à confirmer » ?',
        "3. Pouvez-vous me transmettre la délégation d'autorité de la mission ?",
        'Merci, N. Mbusa — copie : E. Kasongo',
      ],
    },
    result: 'Fait quand : la réponse du HR Manager est archivée et votre matrice ne contient plus de « à confirmer ». C\'est votre Livrable 1.',
    pitfall: "Ne retardez pas cette étape en attendant d'avoir « tout compris » : c'est justement parce que vous arrivez que la question est légitime. Trois mois plus tard, elle paraîtra étrange.",
  },

  // ─── Procédure 2 — Responsabilités RH sur le cycle ─────────────────────
  {
    type: 'concept',
    title: 'Procédure 2 — Cartographier les responsabilités RH du recrutement à la séparation',
    body: "Votre matrice de décision dit ce que vous faites. La matrice des responsabilités dit ce que fait chacun à chaque étape du cycle RH. Sans elle, chaque dossier repart d'une discussion sur « qui doit faire quoi », et les étapes dont personne ne se sent responsable sont sautées : le plus souvent, la séparation.",
    bullets: [
      'Étape 1 — Lister les sous-processus du cycle RH de la mission.',
      'Étape 2 — Attribuer les rôles R, A, C, I à chaque acteur.',
      'Étape 3 — Détailler la séparation avec une check-list de départ.',
      'Étape 4 — Faire valider et rendre la matrice visible.',
    ],
    result: 'Livrable : une matrice des responsabilités RH validée et une check-list de séparation intégrée au dossier individuel.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 4',
    title: 'Lister les sous-processus du cycle RH',
    intro: 'Les cinq grandes étapes du cycle sont trop larges pour attribuer des responsabilités. Découpez-les en actions concrètes que quelqu\'un doit faire.',
    steps: [
      {
        title: 'Créez la trame de la matrice',
        actions: [
          'Ouvrez un nouvel onglet « Matrice_RACI » dans le classeur de cartographie.',
          'En colonne A, saisissez les sous-processus ; en ligne 1, les acteurs : HR Officer, HR Manager, Base Manager / manager, Head of Mission, Finance, Logistique, RH siège.',
        ],
      },
      {
        title: 'Découpez chaque étape du cycle',
        actions: [
          'Recrutement : besoin et fiche de poste ; publication et présélection ; entretiens et références ; offre.',
          'Contrats et administration : contrat ; dossier individuel ; présence et congés ; disciplinaire de premier niveau.',
          'Rémunération : paie mensuelle ; avantages sociaux.',
          'Performance : évaluation annuelle ; plan de formation.',
          'Séparation : démission ou fin de contrat ; licenciement.',
        ],
      },
    ],
    result: 'Fait quand : vous avez entre 12 et 20 lignes, chacune commençant par un verbe ou un objet concret.',
    tip: 'Partez des dossiers réels de la base (un recrutement en cours, le départ de l\'Assistant Logistique) : ils révèlent les sous-processus que les manuels oublient.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 4',
    title: 'Attribuer les rôles R, A, C, I',
    intro: "R = réalise, A = approuve (un seul A par ligne), C = consulté avant, I = informé après. Appuyez-vous sur la politique RH et la délégation d'autorité confirmées en Procédure 1.",
    steps: [
      {
        title: 'Remplissez la matrice ligne par ligne',
        actions: [
          'Placez d\'abord le A : qui signe ou valide en dernier ?',
          'Placez ensuite le R : qui prépare concrètement ?',
          'Ajoutez les C et les I ; laissez vide quand l\'acteur n\'intervient pas.',
        ],
      },
      {
        title: 'Contrôlez la cohérence',
        actions: [
          'Vérifiez qu\'aucune ligne n\'a zéro ou deux A.',
          'Vérifiez que chaque ligne qui touche un salaire comporte Finance en C ou en I.',
          'Vérifiez que chaque arrivée ou départ comporte Logistique en I.',
        ],
      },
    ],
    table: {
      columns: ['Sous-processus', 'HR Officer', 'HR Manager', 'Base Manager', 'HoM', 'Finance', 'Logistique'],
      rows: [
        ['Fiche de poste et besoin', 'R', 'C', 'C', 'A', 'C', '—'],
        ['Contrat national', 'R', 'C', 'I', 'A', 'I', '—'],
        ['Présence et congés', 'R', 'I', 'A', '—', 'I', '—'],
        ['Premier avertissement écrit', 'R', 'A', 'C', 'I', '—', '—'],
        ['Paie mensuelle (mouvements)', 'R', 'A', 'I', '—', 'C', '—'],
        ['Démission / fin de contrat', 'R', 'A', 'C', 'I', 'I', 'I'],
        ['Licenciement cadre international', 'I', 'R', 'C', 'A (+ siège)', 'I', '—'],
      ],
    },
    result: 'Fait quand : chaque ligne a exactement un A et la Finance apparaît sur toutes les lignes à impact salarial.',
    pitfall: 'Cet extrait est un exemple : la répartition réelle dépend de la délégation d\'autorité de votre ONG. Ne la présentez jamais comme une règle générale.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 4',
    title: 'Détailler la séparation avec une check-list de départ',
    intro: "La séparation est l'étape la plus souvent négligée. Une check-list écrite, rangée dans le dossier individuel, est le seul moyen de garantir qu'aucun départ n'oublie la Finance ou la Logistique.",
    steps: [
      {
        title: 'Rédigez la check-list (une ligne = une action datée et signée)',
        actions: [
          '1. Accuser réception de la lettre de démission ou notifier la fin de contrat (date, préavis).',
          '2. Calculer la date de fin effective et le solde de tout compte (Modules 03 et 04).',
          '3. Inscrire le départ dans la section 3 de la fiche RH-Finance du mois, avant le cut-off.',
          '4. Faire désactiver la ligne de paie et retirer la personne des avantages sociaux (assurance santé).',
          '5. Récupérer badge, téléphone, clés, matériel (PV de restitution signé par la Logistique).',
          '6. Remettre le certificat de travail ; conduire l\'entretien de sortie.',
          '7. Mettre à jour la cartographie : Statut « Parti - à retirer », date de départ renseignée.',
          '8. Archiver le dossier individuel complet.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — la séparation de D. Mumbere, Assistant Logistique',
      lines: [
        '1. Lettre de démission du 10/04/2026 : reçue. ✔',
        '2. Dernier jour 12/05/2026 ; solde de tout compte payé par virement manuel le 15/05. ✔',
        '3. Fiche RH-Finance de mai : jamais établie. ✘',
        '4. Ligne de paie non désactivée, assurance santé maintenue. ✘ → virements du 30/06 et du 31/07.',
        '5. PV de restitution du matériel du 12/05 signé par la Logistique. ✔',
        '7. Cartographie non mise à jour. ✘',
      ],
    },
    result: 'Fait quand : la check-list existe en modèle et chaque départ en cours a sa check-list ouverte dans son dossier.',
    highlight: "Le poste fantôme n'est pas né d'une fraude, mais de deux cases non cochées (3 et 4). Une check-list de séparation est une protection financière, pas une formalité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 4',
    title: 'Faire valider et rendre la matrice visible',
    intro: 'Une matrice que seul le RH connaît ne change aucun comportement.',
    steps: [
      {
        title: 'Faites valider',
        actions: [
          'Envoyez la matrice et la check-list au HR Manager pour validation (Niveau 2).',
          'Présentez-les ensuite au Base Manager : c\'est lui qui déclenche la plupart des départs et des congés.',
        ],
      },
      {
        title: 'Diffusez et utilisez',
        actions: [
          'Enregistrez la version validée en PDF, datée : « Matrice_RACI_Goma_2026-08.pdf ».',
          'Envoyez-la aux managers de la base et à la Payroll Officer.',
          'Ajoutez la check-list de séparation au modèle de dossier individuel.',
        ],
      },
    ],
    result: 'Fait quand : la Payroll Officer et le Base Manager ont reçu la matrice et la check-list. C\'est votre Livrable 2.',
    tip: 'Relisez la matrice à chaque changement de Base Manager ou de HR Manager : c\'est à ce moment que les habitudes non écrites se perdent.',
  },

  // ─── Procédure 3 — Cartographie ────────────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 3 — Cartographier l'organigramme réel d'une base (jours 1 à 4)",
    body: "C'est la procédure centrale du module, adaptée du guide pratique source. Vous allez transformer un organigramme officiel de huit mois en cartographie vérifiée, ligne par ligne, avec le template organigramme-cartographie-roles-rh.xlsx.",
    bullets: [
      'Étape 1 — Réunir les trois sources (jour 1).',
      'Étape 2 — Préparer le classeur sans casser ses formules (jour 1).',
      "Étape 3 — Transcrire l'organigramme officiel tel quel, colonne par colonne (jours 1-2).",
      'Étape 4 — Rapprocher organigramme, paie et contrats dans Excel (jour 2).',
      'Étape 5 — Vérifier sur le terrain par la conversation (jours 2-4).',
      'Étape 6 — Marquer les écarts sans les effacer (jours 3-4).',
      "Étape 7 — Ramener l'onglet Alertes à zéro (jour 4).",
    ],
    result: 'Livrable : le classeur rempli, une ligne par poste, écarts documentés, onglet Alertes à zéro, prêt à être présenté (Procédure 6).',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 7',
    title: 'Réunir les trois sources avant toute autre action',
    intro: "Ces trois documents ne concordent presque jamais. C'est précisément l'écart entre eux qui constitue votre matière de travail.",
    steps: [
      {
        title: 'Obtenez chaque source et notez sa date',
        actions: [
          "Organigramme officiel : demandez la dernière version au HR Manager, pas seulement celle reçue au briefing.",
          'Masse salariale du mois précédent : demandez à la Payroll Officer l\'extrait Excel avec matricule, nom, poste, date d\'entrée, net payé.',
          'Liste des contrats actifs : extrayez-la des dossiers individuels ou du tableau de suivi des contrats (matricule, nom, type, date de début, date de fin).',
        ],
      },
      {
        title: 'Comptez avant de lire',
        actions: [
          'Notez le nombre de postes nominatifs de l\'organigramme, de lignes de paie, de contrats actifs.',
          'Si les trois nombres diffèrent, vous savez déjà combien d\'écarts minimum chercher.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 3 août 2026',
      lines: [
        'Organigramme officiel (décembre 2025) : 36 postes nominatifs.',
        'Masse salariale de juillet 2026 : 36 lignes, dont une à 0 USD.',
        'Contrats actifs au 31/07/2026 : 35.',
        '→ Même effectif affiché (36) mais un contrat de moins : au moins un écart caché derrière des totaux identiques.',
      ],
    },
    result: 'Fait quand : les trois fichiers sont enregistrés dans le dossier de travail, datés, avec leurs totaux notés.',
    pitfall: "Deux totaux identiques ne prouvent rien : un départ et une arrivée non reportés s'annulent dans le comptage. Seul le rapprochement ligne à ligne de l'étape 4 fait apparaître la vérité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 7',
    title: 'Préparer le classeur sans casser ses formules',
    intro: "L'onglet Alertes compte les lignes 5 à 20 de l'onglet Cartographie (16 postes). Une base de 36 postes demande d'étendre cette plage correctement.",
    steps: [
      {
        title: 'Sauvegardez et videz les lignes d\'exemple',
        actions: [
          'Enregistrez le template sous « Cartographie_Goma_2026-08.xlsx ».',
          'Effacez le contenu des lignes d\'exemple 5 à 9 (colonnes A à H uniquement : ne touchez jamais la colonne I).',
        ],
      },
      {
        title: 'Ajoutez des lignes à l\'intérieur de la plage',
        actions: [
          'Sélectionnez les lignes 10 à 30 (21 lignes), clic droit > Insérer : les nouvelles lignes s\'insèrent au-dessus de la ligne 10, à l\'intérieur de la plage comptée.',
          'Copiez la formule de l\'ancienne ligne 10 (devenue I31) et collez-la dans I10 à I30.',
          'Cliquez dans une nouvelle cellule de G puis de D : si la liste déroulante n\'apparaît pas, copiez G31 et D31 puis Collage spécial > Validation sur les nouvelles lignes.',
          'Ouvrez l\'onglet Alertes, cliquez sur B4 : la plage doit maintenant aller jusqu\'à la ligne 41.',
        ],
      },
      {
        title: 'Ajoutez vos colonnes de travail à droite',
        actions: [
          'J « Écart constaté et source », K « Matricule », L « Sur paie du mois ? », M « Contrat actif ? ».',
          'Ces colonnes sont hors des plages comptées : elles n\'affectent pas l\'onglet Alertes.',
        ],
      },
    ],
    result: 'Fait quand : 37 lignes sont disponibles (5 à 41), la colonne I et les listes déroulantes couvrent toutes les lignes, et les formules de l\'onglet Alertes vont jusqu\'à la ligne 41.',
    pitfall: "Ajouter des lignes en dessous de la ligne 20 au lieu de les insérer à l'intérieur : visuellement tout semble correct, mais l'onglet Alertes ignore ces postes et affiche zéro alerte à tort.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 7',
    title: "Transcrire l'organigramme officiel tel quel, colonne par colonne",
    intro: "Ne corrigez rien à cette étape, même si vous soupçonnez déjà des erreurs : vous avez besoin d'une trace de ce qui était affiché avant correction.",
    steps: [
      {
        title: 'Remplissez une ligne par poste',
        actions: [
          'A — Poste : intitulé exact + base (« Assistant Logistique – base de Goma »).',
          'B — Titulaire actuel : nom tel qu\'écrit dans l\'organigramme officiel.',
          'C — Rattachement n+1 : le poste (pas la personne) indiqué par la flèche de l\'organigramme. Laissez vide si aucune flèche.',
          'D — Type de rattachement : choisissez dans la liste ; si l\'organigramme ne dit rien, « À clarifier ».',
          'E — Responsabilités RH clés : ce que le poste fait en matière RH (« Aucune » pour un poste non RH).',
          'F — Interface Finance / Logistique / Programmes : ce que le poste échange avec ces fonctions.',
          'G — Statut : « Actif » pour tous les postes affichés comme occupés, « Vacant » si l\'organigramme l\'indique.',
          'H — Date de départ : vide à ce stade.',
          'K — Matricule : recopiez-le depuis la paie ou le dossier individuel.',
        ],
      },
      {
        title: 'Figez la version officielle',
        actions: [
          'Clic droit sur l\'onglet Cartographie > Déplacer ou copier > cochez « Créer une copie ».',
          'Renommez la copie « Officiel_2025-12 » et ne la modifiez plus jamais.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — trois lignes transcrites telles quelles',
      lines: [
        'Assistant Logistique – Goma | D. Mumbere | Base Manager | Administratif | Aucune (poste logistique) | Aucune interface RH directe | Actif | (vide)',
        'Superviseur Distribution – Goma | J. Furaha | Base Manager | Administratif | Aucune (poste programme) | Aucune interface RH directe | Actif | (vide)',
        'Assistant RH – Goma | P. Sifa | HR Manager de mission | À clarifier | Appui administratif RH, classement des dossiers individuels | Transmet les feuilles de présence au HR Officer avant clôture de paie | Actif | (vide)',
      ],
    },
    result: "Fait quand : les 36 postes de l'organigramme officiel sont saisis et l'onglet Officiel_2025-12 existe. À ce stade, l'onglet Alertes peut afficher zéro : c'est normal, vous n'avez encore rien confronté.",
    tip: "L'organigramme ne précise presque jamais le type de lien. Quand la flèche existe mais que rien ne dit s'il est administratif ou fonctionnel, recopiez le n+1 en C et choisissez « À clarifier » en D : vous trancherez après les entretiens terrain.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 7',
    title: 'Rapprocher organigramme, paie et contrats dans Excel',
    intro: "Rapprochez toujours par matricule, jamais par nom : « Mumbere D. », « D. Mumbere » et « Mumbere Dieudonné » sont trois noms différents pour Excel.",
    steps: [
      {
        title: 'Importez les deux autres sources',
        actions: [
          'Collez l\'extrait de paie dans un onglet « Paie_2026_07 » (A = Matricule, B = Nom, C = Poste, D = Date d\'entrée, E = Net payé).',
          'Collez les contrats dans un onglet « Contrats_2026_07 » (A = Matricule, B = Nom, C = Type, D = Début, E = Fin).',
        ],
      },
      {
        title: 'Organigramme vers paie et contrats (dans la Cartographie)',
        actions: [
          'En L5, saisissez la formule ci-dessous, puis recopiez-la vers le bas.',
          'En M5, saisissez la formule équivalente vers l\'onglet Contrats, puis recopiez-la.',
        ],
      },
      {
        title: 'Paie vers organigramme et contrats (dans l\'onglet Paie)',
        actions: [
          'En F2 : « Dans la cartographie ? » ; en G2 : « Contrat actif ? » (formules ci-dessous).',
          'Filtrez chaque colonne sur « NON » : chaque ligne filtrée est un écart à expliquer.',
        ],
      },
    ],
    example: {
      title: 'Formules (Excel en français, séparateur point-virgule)',
      lines: [
        'L5 : =SI(K5="";"";SI(NB.SI(Paie_2026_07!$A:$A;K5)>0;"Oui";"NON"))',
        'M5 : =SI(K5="";"";SI(NB.SI(Contrats_2026_07!$A:$A;K5)>0;"Oui";"NON"))',
        'Paie F2 : =SI(NB.SI(Cartographie!$K:$K;A2)>0;"Oui";"NON - hors organigramme")',
        'Paie G2 : =SI(NB.SI(Contrats_2026_07!$A:$A;A2)>0;"Oui";"NON - payé sans contrat actif")',
      ],
    },
    table: {
      columns: ['Matricule', 'Nom', 'Organigramme', 'Paie juillet', 'Contrat actif', 'Lecture'],
      rows: [
        ['KSS-GOM-014', 'D. Mumbere', 'Oui', 'Oui (560 USD)', 'NON', 'Payé sans contrat : poste fantôme probable'],
        ['KSS-GOM-022', 'J. Furaha', 'Oui', 'Oui (0 USD)', 'Oui', 'Payé à zéro sans document : à vérifier'],
        ['KSS-GOM-009', 'K. Paluku', 'Oui', 'NON', 'NON', 'Parti, poste vacant non signalé'],
        ['KSS-GOM-037', 'E. Neema', 'NON', 'Oui (690 USD)', 'Oui', 'Recrutée, jamais ajoutée à l\'organigramme'],
      ],
    },
    result: 'Fait quand : chaque « NON » des colonnes L, M, F et G est reporté dans votre liste d\'écarts à vérifier sur le terrain. Fil rouge : 4 écarts de données, plus le rattachement de l\'Assistant RH.',
    tip: "Si vous gérez plusieurs bases ou des fichiers de paie mensuels, Power Query (Données > Obtenir des données) permet de rejouer ce rapprochement chaque mois en un clic au lieu de recopier les formules.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 7',
    title: 'Vérifier sur le terrain, par la conversation',
    intro: "Un organigramme se corrige aussi par la conversation, pas uniquement par le croisement de fichiers. Les documents disent qu'il y a un écart ; seules les personnes disent pourquoi.",
    steps: [
      {
        title: 'Entretien avec le Base Manager (45 minutes, en tête-à-tête)',
        actions: [
          'Commencez par une question ouverte : « Comment l\'équipe a-t-elle évolué depuis décembre ? »',
          'Parcourez ensuite la liste des postes avec lui, sans montrer la paie.',
          'Pour chaque écart, demandez : « Depuis quand ? Qui était au courant ? Existe-t-il un document ? »',
          'Notez ses réponses mot pour mot, avec la date.',
        ],
      },
      {
        title: 'Recoupez avec 2 ou 3 membres d\'équipe de confiance',
        actions: [
          'Choisissez des personnes anciennes et peu impliquées dans les écarts (par exemple le Magasinier, une Infirmière, un Chauffeur).',
          'Posez des questions factuelles : « Qui vous donne vos instructions au quotidien ? »',
          'Vérifiez la présence physique des postes douteux (visite de l\'entrepôt, du site de distribution).',
        ],
      },
      {
        title: 'Cherchez les preuves écrites',
        actions: [
          'Dans les dossiers individuels : lettre de démission, demande de congé, PV de restitution.',
          'Dans les courriels de votre prédécesseure si vous y avez accès (avec l\'accord du HR Manager).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — ce que vous apprenez entre le 4 et le 6 août',
      lines: [
        'D. Mumbere : lettre de démission du 10/04/2026 au dossier, dernier jour 12/05/2026, PV de restitution signé. Le Base Manager pensait que « la Finance avait fait le nécessaire ».',
        'J. Furaha : en congé sans solde depuis le 01/06/2026, retour annoncé « fin septembre ». Le Base Manager retrouve le 6 août une demande manuscrite signée datée du 25/05, jamais transmise au RH.',
        'P. Sifa : reçoit chaque matin ses tâches du Base Manager ; le HR Manager de Kinshasa ne lui a pas écrit depuis février.',
        'K. Paluku : chauffeur, fin de contrat au 31/01/2026, non remplacé ; un chauffeur journalier assure le service.',
        'E. Neema : infirmière recrutée le 02/03/2026, rattachée au Superviseur médical de la base.',
      ],
    },
    result: 'Fait quand : chaque écart a une explication datée et, quand elle existe, une pièce justificative identifiée.',
    pitfall: "Interroger l'équipe avant le Base Manager : il l'apprendra dans l'heure et le vivra comme une enquête dans son dos. Lui d'abord, toujours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 7',
    title: 'Marquer les écarts sans les effacer',
    intro: "Chaque écart reste visible : vous modifiez le statut et la date, et vous expliquez l'écart en colonne J. Vous ne supprimez aucune ligne avant validation.",
    steps: [
      {
        title: 'Appliquez la bonne combinaison Statut / Date pour chaque cas',
        actions: [
          'Personne partie : saisissez d\'abord la date en H en laissant G sur « Actif » → l\'alerte « Incohérence statut/date de départ » apparaît. C\'est voulu : elle signale le poste fantôme tant que la Finance n\'est pas prévenue.',
          'Situation non documentée : G = « À vérifier ».',
          'Poste sans titulaire : B vide, G = « Vacant ».',
          'Poste réel absent de l\'organigramme : ajoutez une ligne, G = « Actif », J = « Ajouté — absent de l\'organigramme officiel ».',
          'Rattachement contredit par le terrain : effacez C dans l\'onglet Cartographie (la version officielle reste dans l\'onglet Officiel), laissez D sur « À clarifier » → l\'alerte « Rattachement manquant » apparaît jusqu\'à décision.',
        ],
      },
      {
        title: 'Documentez chaque écart en colonne J',
        actions: [
          'Format : nature de l\'écart — preuve — date de constat — action en cours.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état au jeudi 6 août, 17 h',
      lines: [
        'Mumbere : G = Actif, H = 12/05/2026 → I = « Incohérence statut/date de départ ». J = « Démission 10/04, dernier jour 12/05 — lettre + PV au dossier — constaté 04/08 — Finance alertée 04/08 ».',
        'Furaha : G = À vérifier → I = « À vérifier ». J = « Congé sans solde depuis 01/06, salaire 0 — demande manuscrite du 25/05 retrouvée 06/08 — validation HR Manager demandée ».',
        'Sifa : C effacé (officiel : HR Manager de mission), D = À clarifier → I = « Rattachement manquant ». J = « Officiel : HR Manager Kinshasa ; réel : consignes quotidiennes du Base Manager depuis février — constaté 05/08 ».',
        'Paluku : B vide, G = Vacant → I = « OK ». J = « Fin de contrat 31/01/2026, poste non signalé vacant ».',
        'Neema : ligne ajoutée, C = Superviseur médical de base, D = Administratif et fonctionnel, G = Actif → I = « OK ».',
        'Onglet Alertes : 1 sans rattachement / 1 poste fantôme potentiel / 1 à vérifier / 3 lignes en alerte.',
      ],
    },
    result: "Fait quand : chaque écart du rapprochement et du terrain est visible dans le classeur, avec une explication en colonne J. L'onglet Alertes reflète exactement les points encore ouverts.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 7',
    title: "Ramener l'onglet Alertes à zéro",
    intro: "Toute valeur supérieure à zéro dans l'onglet Alertes doit être vérifiée et corrigée avant de présenter la cartographie au Head of Mission. On ne met pas un compteur à zéro en trichant sur les statuts : on traite la cause.",
    steps: [
      {
        title: 'Traitez chaque alerte par son action réelle',
        actions: [
          'Poste fantôme : dès que la Finance a confirmé par écrit la désactivation de la ligne (Procédure 4), passez G à « Parti - à retirer ».',
          'À vérifier : dès que la pièce manquante est obtenue et validée au bon niveau, passez G au statut réel.',
          'Rattachement manquant : proposez un n+1 en C et un type en D, marqués « proposé » en colonne J, et faites-le valider (Procédure 6).',
        ],
      },
      {
        title: 'Contrôlez avant de clore',
        actions: [
          'Les quatre compteurs de l\'onglet Alertes affichent 0.',
          'Le total de lignes « Actif » est égal au nombre de contrats actifs (hors postes ajoutés en cours de contrat).',
          'Chaque ligne modifiée par rapport à l\'onglet Officiel_2025-12 a une explication en J.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vendredi 7 août, 9 h',
      lines: [
        'Mumbere : Finance confirme le 05/08 la désactivation → G = Parti - à retirer → I = OK.',
        'Furaha : HR Manager valide le congé sans solde par courriel du 06/08 (01/06 au 30/09/2026) → G = Actif, J complété → I = OK.',
        'Sifa : C = HR Officer – base de Goma, D = Fonctionnel ; J = « proposé — ligne administrative : Base Manager » → I = OK.',
        'Alertes : 0 / 0 / 0 / 0. Actifs : 35 lignes = 35 contrats actifs.',
      ],
    },
    result: "Fait quand : l'onglet Alertes est à zéro et chaque correction est justifiée. C'est votre Livrable 3, prêt pour la validation (Procédure 6).",
    pitfall: "Passer un statut à « Actif » ou « Vacant » juste pour faire disparaître une alerte avant une réunion. Le classeur devient faux et vous perdez votre seul outil de contrôle.",
  },

  // ─── Procédure 4 — Poste fantôme ───────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 4 — Sécuriser un poste fantôme encore payé (jours 2 et 3)',
    body: "Un virement continué vers un employé parti peut être une négligence, mais il peut aussi révéler une fraude (compte toujours actif utilisé par un tiers). La règle d'un HR Manager expérimenté : sécuriser d'abord le virement avec la Finance, puis investiguer la cause, sans conclure trop vite dans un sens ou dans l'autre. Cette procédure ne doit pas attendre la fin de la cartographie.",
    bullets: [
      'Étape 1 — Établir les faits et réunir les preuves.',
      'Étape 2 — Alerter la Finance et le HR Manager par écrit le jour même.',
      'Étape 3 — Instruire la cause sans accuser personne.',
      'Étape 4 — Documenter et faire décider la régularisation au bon niveau.',
      'Étape 5 — Corriger la cause racine pour que cela ne se reproduise pas.',
    ],
    result: 'Livrable : un courriel d\'alerte daté, une confirmation écrite de blocage par la Finance, une note factuelle d\'une page et la décision de régularisation prise au bon niveau.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Établir les faits et réunir les preuves',
    intro: 'En une heure, vous devez pouvoir répondre à trois questions : la personne est-elle partie ? depuis quand ? combien a été versé depuis ?',
    steps: [
      {
        title: 'Rassemblez les pièces',
        actions: [
          'Lettre de démission ou notification de fin de contrat (date, préavis).',
          'Preuve du dernier jour : PV de restitution du matériel, dernière feuille de présence.',
          'Preuve du solde de tout compte (date, montant, mode de paiement).',
          'Extraits de paie des mois suivant le départ (montant net, compte destinataire masqué sauf les 4 derniers chiffres).',
        ],
      },
      {
        title: 'Calculez le montant en jeu',
        actions: [
          'Nombre de virements après le dernier jour × net versé.',
          'Ajoutez les avantages payés pour son compte (prime d\'assurance santé, indemnités).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mardi 4 août, 11 h',
      lines: [
        'Démission : lettre du 10/04/2026 ; dernier jour : 12/05/2026 (PV de restitution signé).',
        'Solde de tout compte : virement manuel du 15/05/2026.',
        'Virements après départ : 30/06/2026 et 31/07/2026, 560 USD net chacun, compte se terminant par 4471.',
        'Salaires : 2 × 560 = 1 120 USD. Assurance santé groupe : 2 × 38 = 76 USD. Total en jeu : 1 196 USD.',
      ],
    },
    result: 'Fait quand : les faits tiennent en quatre lignes, chacune adossée à une pièce.',
    pitfall: "Écrire « fraude » ou « détournement » dans vos notes à ce stade. Vous ne le savez pas encore, et vos notes peuvent être lues par d'autres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Alerter la Finance et le HR Manager par écrit, le jour même',
    intro: "Bloquer la ligne de paie d'une personne dont le départ est documenté relève de votre niveau 1. Décider de la suite (recouvrement, signalement) n'en relève pas.",
    steps: [
      {
        title: 'Rédigez un courriel factuel',
        actions: [
          'À : Payroll Officer ; copie : Finance Manager de mission et votre HR Manager.',
          'Faits, pièces jointes, demande précise, échéance : rien d\'autre.',
          'Demandez une confirmation écrite de la désactivation.',
        ],
      },
      {
        title: 'Faites un suivi',
        actions: [
          'Appelez la Payroll Officer dans l\'heure pour vous assurer que le message est lu.',
          'Sans confirmation écrite sous 24 h, relancez en ajoutant le Head of Mission en copie.',
        ],
      },
    ],
    example: {
      title: 'Courriel du mardi 4 août 2026, 14 h 10',
      lines: [
        'Objet : URGENT — Désactivation ligne de paie KSS-GOM-014 avant la paie d\'août',
        'Bonjour C., en rapprochant l\'organigramme et la paie de juillet, je constate que M. D. Mumbere (Assistant Logistique, matricule KSS-GOM-014), dont le dernier jour était le 12/05/2026 (lettre de démission et PV de restitution joints), figure sur les paies de juin et juillet (2 × 560 USD net).',
        '1. Merci de désactiver sa ligne avant la paie d\'août et de me le confirmer par écrit.',
        '2. Pouvez-vous vérifier le statut de ces deux virements et de sa couverture d\'assurance santé ?',
        "À ce stade, il s'agit d'une constatation à vérifier, pas d'une conclusion. Je reste disponible pour en parler.",
        'N. Mbusa, HR Officer Goma — copie : R. Ilunga, A. Kavira',
      ],
    },
    result: "Fait quand : la Finance a confirmé par écrit la désactivation (fil rouge : réponse de C. Bahati le mercredi 5 août à 9 h 30).",
    tip: "La phrase « une constatation à vérifier, pas une conclusion » protège tout le monde : la Payroll Officer, le Base Manager et l'ex-employé. Elle vous protège aussi si la cause s'avère plus grave.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Instruire la cause sans accuser personne',
    intro: "Il faut comprendre comment la ligne est restée active, et si l'argent a été reçu par l'ex-employé ou par quelqu'un d'autre. Ces vérifications se font avec la Finance, pas seul.",
    steps: [
      {
        title: 'Reconstituez le circuit',
        actions: [
          'Qui a été informé du départ, quand, et par quel canal ?',
          'Comment le solde de tout compte a-t-il été payé (manuellement, hors du fichier de paie) ?',
          'Qui valide la paie chaque mois, et sur quel document ?',
        ],
      },
      {
        title: 'Faites vérifier le compte bénéficiaire par la Finance',
        actions: [
          'Le compte est-il toujours au nom de l\'ex-employé ? A-t-il changé récemment ?',
          'Les fonds ont-ils été retirés ou sont-ils toujours sur le compte ?',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mercredi 5 août',
      lines: [
        'Le Base Manager a informé oralement la Payroll Officer précédente en mai ; aucun document écrit.',
        'Le solde de tout compte a été payé par virement manuel : la ligne du fichier de paie n\'a jamais été désactivée.',
        'La paie est validée chaque mois sur le total global, sans contrôle des entrées et sorties.',
        'Compte au nom de D. Mumbere, inchangé depuis 2023 (vérification Finance, réponse attendue de la banque sur les retraits).',
        '→ Cause probable : défaut de circuit, pas de manipulation identifiée à ce stade.',
      ],
    },
    result: 'Fait quand : vous pouvez décrire la cause probable en une phrase et ce qui reste à vérifier.',
    pitfall: "Contacter l'ex-employé de votre propre initiative pour « lui demander de rembourser ». La démarche de recouvrement est une décision de niveau 3 et doit suivre la procédure de l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Documenter et faire décider la régularisation',
    intro: 'Votre rôle : présenter des faits, des options et une recommandation. La décision appartient au Head of Mission, avec information du siège selon la politique anti-fraude.',
    steps: [
      {
        title: 'Rédigez une note factuelle d\'une page',
        actions: [
          'Faits datés et pièces (étape 1).',
          'Mesure conservatoire prise (étape 2).',
          'Cause probable et vérifications en cours (étape 3).',
          'Options de régularisation et recommandation.',
          'Mesures correctives proposées (étape 5).',
        ],
      },
      {
        title: 'Transmettez par la bonne ligne',
        actions: [
          'Envoyez la note au HR Manager, qui la porte au Head of Mission.',
          'Ne la diffusez à personne d\'autre, Base Manager compris, avant décision.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — options présentées le 6 août',
      lines: [
        'Option A : demande de remboursement amiable de 1 120 USD à l\'ex-employé par courrier de l\'organisation, si la banque confirme qu\'il a bien reçu les fonds.',
        'Option B : si les fonds ont été retirés par un tiers, signalement selon la politique anti-fraude (information de la RH siège).',
        "Prime d'assurance (76 USD) : demande d'avoir à l'assureur pour les mois de juin et juillet.",
        'Recommandation : option A sous réserve de la réponse de la banque ; décision du Head of Mission attendue avant le 14/08.',
      ],
    },
    result: "Fait quand : la décision du Head of Mission est écrite et archivée avec la note. Le courriel d'alerte, la confirmation de blocage et la note forment votre Livrable 4.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Corriger la cause racine',
    intro: "Régulariser un cas sans changer le circuit, c'est préparer le suivant.",
    steps: [
      {
        title: 'Installez trois verrous simples',
        actions: [
          'Aucun départ sans ligne en section 3 de la fiche RH-Finance du mois (Procédure 5).',
          'Check-list de séparation ouverte dès réception de la lettre de démission (Procédure 2, étape 3).',
          'Contrôle mensuel : effectif du mois précédent + entrées − sorties = effectif payé (section 6 de la fiche).',
        ],
      },
      {
        title: 'Recherchez d\'éventuels cas similaires',
        actions: [
          'Repassez le rapprochement paie / contrats sur les 6 derniers mois.',
          'Demandez à la Finance la liste des paiements manuels (soldes de tout compte) de la période.',
        ],
      },
    ],
    result: 'Fait quand : les trois verrous sont écrits dans la fiche RH-Finance et la recherche sur 6 mois est faite. Fil rouge : aucun autre cas trouvé sur janvier-juillet 2026.',
    tip: "Présentez ces verrous comme une protection pour la Payroll Officer : c'est elle qui serait mise en cause au prochain audit, pas le RH.",
  },

  // ─── Procédure 5 — Interface RH-Finance ────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 5 — Installer le circuit mensuel RH-Finance (paie et avantages sociaux)',
    body: "Une fois l'organigramme clarifié, vous formalisez ce qui doit être transmis chaque mois à la Finance, la date limite, et la signature conjointe qui atteste que l'information a été communiquée et reçue. Le support : fiche-interface-rh-finance-paie.docx, à conserver comme preuve de transmission.",
    bullets: [
      'Étape 1 — Identifier votre interlocuteur et fixer le calendrier de paie.',
      'Étape 2 — Collecter les mouvements du mois depuis leurs sources.',
      'Étape 3 — Remplir les sections 1 à 3 (période, embauches, départs).',
      'Étape 4 — Remplir les sections 4 et 5 (changements, congés, avantages sociaux).',
      'Étape 5 — Remplir la section 6 (vérifications croisées).',
      'Étape 6 — Signer la section 7 et archiver.',
      'Étape 7 — Contrôler la paie après virement.',
    ],
    result: "Livrable : la fiche d'août 2026 remplie, signée par le RH et la Finance avant le 20 août, et contrôlée après le virement du 28.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 7',
    title: 'Identifier votre interlocuteur et fixer le calendrier de paie',
    intro: "Votre interlocuteur paie est rarement le Finance Manager lui-même : c'est souvent un Payroll Officer ou un comptable dédié.",
    steps: [
      {
        title: 'Rencontrez la personne qui fait la paie',
        actions: [
          'Demandez-lui comment la paie est produite (fichier Excel, logiciel, SAP…), qui la valide et quand.',
          'Demandez quelle information lui manque le plus souvent.',
        ],
      },
      {
        title: 'Fixez trois dates par écrit',
        actions: [
          'Date limite de transmission RH → Finance.',
          'Date de validation par la Finance.',
          'Date de virement.',
          'Règle de report : si une date tombe un week-end ou un jour férié, elle avance au jour ouvré précédent.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — calendrier convenu le 5 août avec C. Bahati',
      lines: [
        'Transmission RH → Finance : le 20 de chaque mois (août 2026 : jeudi 20).',
        'Validation Finance : le 23 (août 2026 : dimanche → avancée au vendredi 21).',
        'Virement : le 28 (août 2026 : vendredi 28).',
        "Feuilles de présence de l'Assistant RH vers le HR Officer : le 18 au plus tard.",
      ],
    },
    result: 'Fait quand : le calendrier des 12 prochains mois est envoyé par courriel à la Finance et accepté.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 7',
    title: 'Collecter les mouvements du mois depuis leurs sources',
    intro: 'Chaque section de la fiche a une source documentaire. Sans pièce, pas de ligne.',
    steps: [
      {
        title: 'Passez en revue chaque source entre le 1er et le 18',
        actions: [
          'Contrats signés dans le mois → section 2.',
          'Lettres de démission, fins de contrat, check-lists de séparation ouvertes → section 3.',
          'Avenants, décisions de promotion, changements de base → section 4.',
          'Feuilles de présence, demandes de congé sans solde, certificats maladie, absences non justifiées → section 5.',
          'Ajouts et retraits d\'ayants droit à l\'assurance santé, changements d\'indemnités → sections 2 à 5 selon le cas, et rappel en section 6.',
        ],
      },
    ],
    table: {
      columns: ['Mouvement d\'août 2026', 'Pièce', 'Section'],
      rows: [
        ['Embauche M. Kavugho, Agent de saisie Kobo, 17/08/2026', 'Contrat signé le 12/08', '2'],
        ['Départ D. Mumbere (régularisation)', 'Lettre du 10/04 + PV du 12/05', '3'],
        ['Congé sans solde J. Furaha', 'Demande du 25/05 + validation HR Manager du 06/08', '5'],
        ['E. Neema absente de la cartographie (déjà payée)', 'Contrat du 02/03/2026', '6'],
      ],
    },
    result: 'Fait quand : chaque mouvement est listé avec sa pièce.',
    pitfall: "Accepter un mouvement « oral » du Base Manager pour ne pas ralentir la paie. C'est exactement ainsi que le congé sans solde de J. Furaha est resté sans trace pendant deux mois.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 7',
    title: 'Remplir les sections 1 à 3 : période, embauches, départs',
    intro: "Chaque ligne doit permettre à la Payroll Officer de calculer sans vous rappeler.",
    steps: [
      {
        title: 'Section 1 — Période de paie et échéance',
        actions: ['Mois de paie concerné ; date limite de transmission RH → Finance.'],
      },
      {
        title: 'Section 2 — Nouvelles embauches',
        actions: [
          'Nom, poste, date d\'entrée, salaire de base ou taux journalier.',
          'Si l\'entrée a lieu en cours de mois, indiquez le prorata selon la règle de votre politique (ici : jours calendaires).',
        ],
      },
      {
        title: 'Section 3 — Départs à retirer',
        actions: ['Nom, poste, date de départ effective, motif (fin de contrat, démission, licenciement).'],
      },
    ],
    example: {
      title: 'Fil rouge — fiche d\'août 2026, sections 1 à 3',
      lines: [
        '1. Mois de paie : Août 2026 — Date limite de transmission : jeudi 20/08/2026.',
        '2. M. Kavugho — Agent de saisie (Kobo) — entrée le 17/08/2026 — 480 USD brut/mois — prorata août : 480 × 15/31 = 232,26 USD.',
        '3. D. Mumbere — Assistant Logistique — départ effectif le 12/05/2026 — démission — ligne désactivée le 05/08/2026 (régularisation, voir section 6).',
      ],
    },
    result: 'Fait quand : chaque ligne contient toutes les informations demandées par l\'intitulé de la section, sans abréviation ambiguë.',
    tip: "Écrivez toujours le calcul du prorata, pas seulement le résultat : la Finance vérifie en deux secondes, et l'employé aussi s'il conteste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 7',
    title: 'Remplir les sections 4 et 5 : changements, congés, avantages sociaux',
    intro: "C'est ici que se jouent les avantages sociaux : un changement de situation qui affecte une assurance, une indemnité ou une cotisation doit être écrit, même sans impact sur le salaire de base.",
    steps: [
      {
        title: 'Section 4 — Changements de contrat, poste ou taux',
        actions: [
          'Nom, nature du changement (promotion, changement de base, ajustement de taux), date d\'effet.',
          'Écrivez « Aucun changement ce mois-ci » plutôt que de laisser vide : un blanc ne prouve rien.',
        ],
      },
      {
        title: 'Section 5 — Congés affectant le calcul de la paie',
        actions: [
          'Congé sans solde, congé maladie non couvert, absence non justifiée : nom, période, impact sur le salaire.',
          'Précisez l\'impact sur les avantages (maintien ou suspension de l\'assurance) et qui l\'a décidé.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — sections 4 et 5',
      lines: [
        '4. Aucun changement de contrat, de poste ou de taux ce mois-ci.',
        '5. J. Furaha — Superviseur Distribution — congé sans solde du 01/06/2026 au 30/09/2026 (validé par le HR Manager le 06/08/2026) — salaire août : 0 USD — assurance santé : maintenue, part employé à régulariser au retour (décision HR Manager du 06/08).',
      ],
    },
    result: 'Fait quand : chaque congé impactant porte une période, un impact chiffré et la référence de la décision.',
    pitfall: "La règle de maintien ou de suspension des avantages pendant un congé sans solde dépend de la politique de votre ONG et du droit local : la décision de cet exemple est fictive. Ne l'appliquez jamais par analogie sans la faire valider (niveau 2).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 7',
    title: 'Remplir la section 6 : vérifications croisées',
    intro: 'Cette section transforme la fiche en outil de contrôle : elle compare la cartographie RH et la masse salariale du mois précédent.',
    steps: [
      {
        title: 'Faites le calcul de l\'effectif',
        actions: [
          'Effectif payé le mois précédent + entrées − sorties = effectif à payer ce mois.',
          'Comparez au nombre de lignes « Actif » de la cartographie (plus les postes ajoutés en cours de mois).',
        ],
      },
      {
        title: 'Listez les écarts et points de vigilance',
        actions: [
          'Postes fantômes, doublons de virement, lignes à zéro, personnes payées absentes de la cartographie.',
          'Tout autre point signalé par le RH ou la Finance (régularisations en cours, assurance).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 6',
      lines: [
        'Effectif : 36 lignes en juillet − 1 sortie (D. Mumbere) + 1 entrée (M. Kavugho) = 36 lignes en août, dont 1 à 0 USD (J. Furaha).',
        'Cartographie au 07/08 : 35 postes actifs + M. Kavugho (entrée le 17/08) = 36. Concordance OK.',
        'Écart : virements à tort à D. Mumbere les 30/06 et 31/07 (2 × 560 USD) et primes d\'assurance (2 × 38 USD) — régularisation selon décision du Head of Mission (note du 06/08).',
        'Autre point : E. Neema (KSS-GOM-037), payée depuis mars, ajoutée à la cartographie le 06/08 — aucun impact paie.',
      ],
    },
    result: 'Fait quand : le calcul de l\'effectif tombe juste et chaque écart a une action et un responsable.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 7',
    title: 'Signer la section 7 et archiver',
    intro: "La signature conjointe atteste que l'information a été transmise par le RH et reçue par la Finance. C'est votre preuve en cas d'erreur de paie ou d'audit.",
    steps: [
      {
        title: 'Faites signer',
        actions: [
          'Transmis par (RH) : nom, fonction, date.',
          'Reçu et validé par (Finance) : nom, fonction, date.',
          'Si la Finance conteste une ligne, corrigez la fiche et faites signer la version corrigée : jamais deux versions signées pour le même mois.',
        ],
      },
      {
        title: 'Archivez',
        actions: [
          'Enregistrez le PDF signé sous « Fiche_RH-Finance_Goma_2026-08.pdf » dans un dossier partagé RH-Finance.',
          'Joignez les pièces justificatives citées dans la fiche.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 7',
      lines: [
        'Transmis par (RH) : N. Mbusa, HR Officer Goma, mardi 18/08/2026.',
        'Reçu et validé par (Finance) : C. Bahati, Payroll Officer Goma, mercredi 19/08/2026.',
      ],
    },
    result: 'Fait quand : le PDF signé par les deux parties est archivé avant la date limite du 20. C\'est le cœur de votre Livrable 5.',
    tip: "Transmettez deux jours avant la date limite : cela laisse à la Finance le temps de poser ses questions sans repousser la paie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 7',
    title: 'Contrôler la paie après virement',
    intro: 'La fiche dit ce qui devait être payé. Le contrôle après virement vérifie que c\'est ce qui a été payé.',
    steps: [
      {
        title: 'Le jour du virement ou le lendemain',
        actions: [
          'Demandez à la Payroll Officer la liste des virements effectués (matricule, net).',
          'Vérifiez que chaque sortie de la section 3 n\'apparaît plus.',
          'Vérifiez que chaque entrée de la section 2 apparaît avec le bon prorata.',
          'Vérifiez que les lignes à zéro de la section 5 sont bien à zéro.',
        ],
      },
      {
        title: 'Clôturez le mois',
        actions: [
          'Notez « Contrôle post-virement OK le JJ/MM » sur la fiche archivée, ou listez les écarts et ouvrez une correction pour le mois suivant.',
          'Reportez les éventuels écarts dans la section 6 de la fiche du mois suivant.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 31 août 2026',
      lines: [
        'Virements du 28/08 : 35 virements + 1 ligne à 0 USD = 36 lignes.',
        'KSS-GOM-014 (D. Mumbere) : absent. ✔',
        'M. Kavugho : 232,26 USD. ✔',
        'J. Furaha : 0 USD. ✔',
        'Mention portée sur la fiche archivée : « Contrôle post-virement OK le 31/08/2026 — N. Mbusa ».',
      ],
    },
    result: 'Fait quand : la mention de contrôle est portée sur la fiche archivée. Le circuit est installé : vous le répéterez chaque mois.',
  },

  // ─── Procédure 6 — Faire valider sans braquer ──────────────────────────
  {
    type: 'concept',
    title: "Procédure 6 — Faire valider vos corrections sans braquer l'équipe (jours 4 et 5)",
    body: "Ne modifiez jamais l'organigramme officiel de votre propre initiative, même quand les écarts sont évidents. C'est la validation du Head of Mission ou du HR Manager, et non votre seule observation, qui transforme votre cartographie en nouvel organigramme de référence. Et une correction annoncée sans consultation du Base Manager concerné est vécue comme une sanction déguisée.",
    bullets: [
      'Étape 1 — Préparer le dossier de présentation.',
      'Étape 2 — Rencontrer le Base Manager en premier, en tête-à-tête.',
      'Étape 3 — Rédiger la note d\'une demi-page.',
      'Étape 4 — Présenter au HR Manager et au Head of Mission et obtenir les décisions.',
      'Étape 5 — Diffuser l\'organigramme validé et organiser sa mise à jour.',
    ],
    result: "Livrable : une note d'une demi-page, un compte rendu de décisions et un organigramme daté, validé et diffusé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Préparer le dossier de présentation',
    intro: "Votre interlocuteur doit pouvoir décider en 20 minutes. Classez les écarts par urgence, pas par ordre d'apparition dans le classeur.",
    steps: [
      {
        title: 'Rassemblez quatre pièces',
        actions: [
          'La cartographie (onglet Cartographie et onglet Officiel_2025-12 pour comparaison).',
          "L'onglet Alertes avant et après correction.",
          'Les preuves de chaque écart (lettre, PV, demande de congé).',
          'La chronologie de la semaine (qui a été informé, quand).',
        ],
      },
      {
        title: 'Classez les écarts en trois catégories',
        actions: [
          'Urgent / risque financier : déjà sécurisé, à faire décider (poste fantôme).',
          'À valider : rattachements, congés régularisés, postes vacants.',
          'Pour information : mises à jour sans enjeu (poste ajouté).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — classement',
      lines: [
        'Urgent : D. Mumbere, 1 120 USD versés à tort, ligne bloquée le 05/08, décision de régularisation à prendre.',
        'À valider : rattachement de P. Sifa ; poste de chauffeur vacant depuis février (remplacer ou supprimer ?).',
        'Information : congé sans solde de J. Furaha régularisé ; E. Neema ajoutée à l\'organigramme.',
      ],
    },
    result: 'Fait quand : chaque écart est classé et a sa pièce.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Rencontrer le Base Manager en premier, en tête-à-tête',
    intro: "Il ne doit rien découvrir en réunion devant le Head of Mission. Le but : qu'il porte les corrections avec vous, pas qu'il les subisse.",
    steps: [
      {
        title: 'Préparez l\'entretien (30 minutes, dans son bureau)',
        actions: [
          'Apportez la cartographie imprimée, pas l\'onglet Alertes : on parle d\'équipe, pas de compteurs.',
          'Préparez une phrase d\'ouverture qui reconnaît son rôle.',
        ],
      },
      {
        title: 'Conduisez l\'entretien en quatre temps',
        actions: [
          'Remerciez-le pour ce qu\'il vous a appris cette semaine.',
          'Présentez les écarts comme une mise à jour de documents, pas comme des fautes.',
          'Demandez son avis sur le rattachement de l\'Assistant RH et sur le poste de chauffeur.',
          'Annoncez ce qui sera présenté au Head of Mission et proposez qu\'il soit cité comme source.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — formulations utilisées le jeudi 6 août',
      lines: [
        '« Sans vous, j\'aurais mis des semaines à comprendre l\'équipe. Les documents n\'avaient pas suivi tout ce que vous avez géré sur le terrain. »',
        '« Pour le paiement de M. Mumbere, la Finance a bloqué la ligne ; le circuit n\'existait pas, c\'est lui qu\'on corrige. »',
        '« Pour P. Sifa, je propose que vous restiez sa ligne administrative et que je sois sa ligne technique. Qu\'en pensez-vous ? »',
      ],
    },
    result: 'Fait quand : le Base Manager a vu toutes les corrections et donné son avis sur les deux points à valider.',
    pitfall: "Lui demander de « s'expliquer » sur le poste fantôme. Les faits sont établis, la cause est un circuit absent : l'interroger comme un suspect braque durablement votre meilleur relais RH.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: "Rédiger la note d'une demi-page",
    intro: "Une demi-page maximum : faits, mesure prise, décisions demandées. La formulation sur le poste fantôme doit traiter l'urgence sans sous-entendre d'accusation avant vérification complète.",
    steps: [
      {
        title: 'Structurez la note en quatre blocs',
        actions: [
          'Contexte : une phrase.',
          'Écarts constatés : une ligne par écart, du plus urgent au moins urgent.',
          'Mesures déjà prises : avec dates.',
          'Décisions demandées : numérotées, formulées pour une réponse oui / non.',
        ],
      },
      {
        title: 'Relisez avec trois filtres',
        actions: [
          'Aucun adjectif qui juge une personne (« négligent », « suspect »).',
          'Chaque fait a une date.',
          'Le texte tient sur une demi-page en police 11.',
        ],
      },
    ],
    example: {
      title: 'Note du jeudi 6 août 2026 — À : A. Kavira, H. Mwamba',
      lines: [
        "Objet : Cartographie de la base de Goma — écarts et décisions à prendre.",
        "Contexte : rapprochement de l'organigramme (déc. 2025), de la paie de juillet et des contrats actifs, complété par des entretiens avec E. Kasongo, que je remercie pour son appui.",
        "1. D. Mumbere (parti le 12/05/2026) a reçu les paies de juin et juillet (1 120 USD). Ligne bloquée par la Finance le 05/08. Cause probable : solde payé hors fichier, ligne non désactivée ; vérification bancaire en cours. Aucune conclusion à ce stade.",
        "2. P. Sifa : rattachement non défini. Proposition concertée avec le Base Manager : technique = HR Officer, administratif = Base Manager.",
        "3. Chauffeur (K. Paluku, fin de contrat 31/01) : poste vacant non signalé, service assuré par un journalier.",
        "4. Pour information : congé sans solde de J. Furaha régularisé (06/08) ; E. Neema ajoutée.",
        "Décisions demandées : (a) option de régularisation du point 1 ; (b) validation du rattachement du point 2 ; (c) remplacement ou suppression du poste du point 3.",
      ],
    },
    result: 'Fait quand : la note tient sur une demi-page et chaque décision peut recevoir une réponse simple.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Présenter et obtenir les décisions',
    intro: 'Envoyez la note la veille, présentez en 20 minutes, sortez avec des décisions écrites.',
    steps: [
      {
        title: 'Conduisez la réunion',
        actions: [
          'Envoyez la note et la cartographie la veille.',
          'Rappelez les décisions demandées dès la première minute.',
          'Prenez les décisions dans l\'ordre de la note et reformulez chacune à voix haute.',
        ],
      },
      {
        title: 'Formalisez',
        actions: [
          'Envoyez un compte rendu de décisions dans les deux heures (trois lignes).',
          'Reportez chaque décision en colonne J de la cartographie, avec sa date.',
          'Retirez la mention « proposé » des rattachements validés.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — compte rendu du vendredi 7 août 2026',
      lines: [
        '(a) Point 1 : option A retenue sous réserve de la réponse de la banque ; la Finance pilote, le HR Manager informe la RH siège.',
        '(b) Point 2 : rattachement validé — P. Sifa, n+1 technique HR Officer Goma, n+1 administratif Base Manager. Fiche de poste à mettre à jour avant le 31/08.',
        '(c) Point 3 : poste de chauffeur supprimé ; besoin couvert par un journalier jusqu\'à la revue budgétaire 2027.',
      ],
    },
    result: 'Fait quand : le compte rendu est envoyé et la cartographie porte les décisions datées.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: "Diffuser l'organigramme validé et organiser sa mise à jour",
    intro: "Un organigramme qui n'est pas mis à jour depuis plusieurs mois n'est plus un organigramme, c'est un historique. Votre travail de la semaine ne vaut que s'il reste vrai.",
    steps: [
      {
        title: 'Diffusez',
        actions: [
          'Produisez l\'organigramme graphique à partir de la cartographie validée (PowerPoint ou SmartArt).',
          'Nommez-le avec sa date de validation : « Organigramme_Goma_v2026-08-07.pdf ».',
          'Envoyez-le au HR Manager pour mise à jour de la version siège, puis aux managers de la base.',
          'Annoncez les changements de rattachement aux personnes concernées avant la diffusion générale.',
        ],
      },
      {
        title: 'Installez la mise à jour',
        actions: [
          'Chaque mois : mettez à jour la cartographie en même temps que la fiche RH-Finance (mêmes mouvements).',
          'Chaque trimestre : refaites le rapprochement complet paie / contrats / cartographie.',
          'Ajoutez ces deux tâches à votre agenda partagé, avec rappel.',
        ],
      },
    ],
    result: "Fait quand : l'organigramme daté est diffusé et les rappels mensuel et trimestriel sont programmés. C'est votre Livrable 6.",
    tip: "Annoncez à l'Assistant RH son nouveau rattachement en présence du Base Manager : c'est la meilleure démonstration que la correction s'est faite ensemble.",
  },

  // ─── Procédure 7 — Narrative annuelle ──────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 7 — Rédiger la narrative de planification annuelle RH',
    body: [
      "La cartographie est structurelle et statique : qui rapporte à qui, à un instant donné. La narrative de planification annuelle en explique l'évolution chaque année : contexte, bilan, priorités, composition de l'équipe, impact chiffré sur le budget RH et chronogramme. Elle se rédige une fois par an, en amont du cycle de planification de l'année suivante, pour que la fonction RH arrive à la discussion budgétaire avec un narratif structuré plutôt qu'un simple organigramme à jour.",
      "Fil rouge : le HR Manager vous demande la contribution de la base de Goma à la narrative 2027, à rendre le lundi 5 octobre 2026.",
    ],
    bullets: [
      'Étape 1 — Section 1 : contexte externe et risques.',
      'Étape 2 — Section 2 : bilan des objectifs de l\'année en cours.',
      'Étape 3 — Section 3 : objectifs de l\'année à venir.',
      'Étape 4 — Section 4 : ressources humaines et impact budgétaire.',
      'Étape 5 — Section 5 : chronogramme.',
    ],
    result: 'Livrable : gabarit-narrative-planification-annuelle-rh.docx rempli pour la base, cohérent avec la cartographie validée.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Section 1 — Contexte externe et risques',
    intro: 'Décrivez ce qui, hors de l\'organisation, conditionne vos recrutements et votre masse salariale, puis les risques RH qui peuvent avoir des conséquences opérationnelles.',
    steps: [
      {
        title: 'Contexte externe',
        actions: [
          'Marché de l\'emploi local et disponibilité des profils qualifiés (délais de recrutement réels).',
          'Contraintes réglementaires de la zone (droit du travail, obligations sociales) : citez le texte, pas un souvenir.',
        ],
      },
      {
        title: 'Risques RH',
        actions: [
          'Turnover élevé sur un poste clé, dépendance à un seul profil senior, tension sociale.',
          'Pour chaque risque : un fait observé, une conséquence opérationnelle.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait',
      lines: [
        'Contexte : forte concurrence des autres organisations à Goma sur les profils de santé et de logistique ; délai moyen de recrutement national constaté en 2026 : 52 jours.',
        "Risque 1 : dépendance au Base Manager (3 ans de poste, mémoire des pratiques non écrites) — conséquence : perte d'information RH en cas de départ.",
        'Risque 2 : circuit de paie dépendant d\'une seule Payroll Officer — conséquence : erreurs non détectées en son absence.',
      ],
    },
    result: 'Fait quand : chaque risque est adossé à un fait de l\'année.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: "Section 2 — Bilan des objectifs de l'année en cours",
    intro: 'Pour chaque objectif RH de l\'année : atteint, partiellement atteint ou non atteint, avec un chiffre, puis les autres réalisations et les enseignements.',
    steps: [
      {
        title: 'Dressez le bilan',
        actions: [
          'Reprenez les objectifs de la narrative précédente (ou du plan de travail RH).',
          'Notez le résultat chiffré et la cause des écarts.',
          'Remplissez le tableau « Autres réalisations et défis » (actions de communication, outils de suivi pérennisés).',
          'Écrivez les enseignements à conserver.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — bilan 2026 de la base',
      lines: [
        'Délai de recrutement national inférieur à 45 jours : partiellement atteint (52 jours en moyenne).',
        'Zéro paiement erroné : non atteint (2 virements à tort en juin et juillet) ; cause corrigée en août par la fiche RH-Finance mensuelle signée.',
        'Organigramme à jour : atteint depuis août (cartographie mensuelle, onglet Alertes à zéro).',
        'Enseignement : séparation des fonctions RH-Finance et preuve écrite de chaque transmission.',
      ],
    },
    result: 'Fait quand : chaque objectif a un statut et un chiffre ; aucun échec n\'est masqué.',
    tip: "Un échec expliqué et corrigé renforce la crédibilité de la fonction RH. Un bilan sans aucun échec n'est pas cru.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: "Section 3 — Objectifs de l'année à venir",
    intro: 'Trois à cinq objectifs, chacun relié à un objectif opérationnel de la mission et à une méthode.',
    steps: [
      {
        title: 'Formulez chaque objectif',
        actions: [
          'Objectif mesurable + méthode prévue pour l\'atteindre.',
          'Pourquoi cette priorité : lien explicite avec les objectifs opérationnels de la mission.',
          'Objectifs pluriannuels le cas échéant (plan de nationalisation des postes, politique de rétention).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — objectifs 2027',
      lines: [
        "1. 100 % des mouvements transmis à la Finance avant le cut-off (12 fiches signées sur 12) — méthode : fiche mensuelle + contrôle post-virement.",
        '2. Délai de recrutement national ramené à 45 jours — méthode : vivier de candidats pour les postes de santé (Module 02).',
        '3. Plan de succession du Base Manager documenté avant juin 2027 — lien : continuité de la base (Module 05).',
        '4. Pluriannuel : nationalisation du poste de Coordinateur médical adjoint d\'ici fin 2028.',
      ],
    },
    result: 'Fait quand : chaque objectif a un indicateur, une méthode et un lien opérationnel.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Section 4 — Ressources humaines et impact budgétaire',
    intro: "Partez de la cartographie validée : c'est la photographie de départ. Décrivez les mouvements prévus, puis chiffrez leur impact.",
    steps: [
      {
        title: 'Décrivez l\'équipe',
        actions: [
          'Organigramme : référence à la cartographie (lignes administratives et techniques).',
          'Staff international : niveau, durée de mission, mois FTE budgétés.',
          'Staff national : postes ajoutés, modifiés ou supprimés, avec justification opérationnelle.',
          'Support et journaliers : volumes, saisonnalité.',
        ],
      },
      {
        title: 'Chiffrez l\'impact',
        actions: [
          'Calculez chaque variation (coût mensuel × mois FTE), puis le total en valeur et en %.',
          'Listez les principaux facteurs de variation et la demande de support au siège.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — budget RH de la base (coûts employeur, chiffres fictifs)',
      lines: [
        'Budget 2026 : 420 000 USD (staff national 300 000 ; staff international 96 000 ; support et journaliers 24 000).',
        'Révision de la grille nationale +4 % : 300 000 × 4 % = +12 000 USD.',
        "Création d'un poste d'Assistant(e) Paie : 700 USD × 12 mois FTE = +8 400 USD (réduit la dépendance à une seule Payroll Officer).",
        'Suppression du poste de chauffeur vacant : 450 USD × 12 = −5 400 USD.',
        'Budget 2027 : 420 000 + 12 000 + 8 400 − 5 400 = 435 000 USD, soit +15 000 USD (+3,6 %).',
        'Support siège demandé : appui à la révision de la grille salariale.',
      ],
    },
    result: 'Fait quand : le total se recalcule à partir des lignes et chaque création ou suppression a sa justification.',
    pitfall: "Annoncer une variation en % sans la valeur en USD (ou l'inverse). La Finance et le bailleur liront les deux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Section 5 — Chronogramme',
    intro: 'Le tableau final du gabarit : Période / Jalon ou échéance clé / Responsable. Il transforme les objectifs en calendrier.',
    steps: [
      {
        title: 'Remplissez le tableau',
        actions: [
          'Une ligne par jalon (recrutements, révision de grille, revues de cartographie, évaluations, narrative suivante).',
          'Un seul responsable nommé par ligne.',
          'Vérifiez la cohérence avec le calendrier des projets et des bailleurs.',
        ],
      },
    ],
    table: {
      columns: ['Période', 'Jalon / échéance clé', 'Responsable'],
      rows: [
        ['T1 2027', "Recrutement de l'Assistant(e) Paie", 'HR Officer Goma'],
        ['T1 2027', 'Application de la grille révisée', 'HR Manager de mission'],
        ['Mensuel', 'Fiche RH-Finance signée et contrôle post-virement', 'HR Officer Goma + Payroll Officer'],
        ['T2 2027', 'Plan de succession du Base Manager', 'HR Manager de mission'],
        ['Trimestriel', 'Rapprochement complet paie / contrats / cartographie', 'HR Officer Goma'],
        ['Octobre 2027', 'Narrative de planification 2028', 'HR Manager de mission'],
      ],
    },
    result: "Fait quand : chaque objectif de la section 3 a au moins un jalon dans le chronogramme. Le gabarit complet est votre Livrable 7.",
  },

  // ─── Cas résolu ────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « L'organigramme fantôme, Goma » : la semaine jour par jour",
    scenario: "Rappel : HR Officer arrivée le lundi 3 août 2026 sans passation, organigramme de huit mois, masse salariale de juillet. Mission : corriger l'organigramme sans braquer l'équipe, tout en sécurisant immédiatement le risque financier du poste fantôme. Voici le déroulé complet tel qu'un professionnel l'aurait conduit.",
    steps: [
      { title: 'Lundi 3 — Positionnement et sources', body: 'Procédure 1 (étapes 1 et 2), Procédure 3 (étapes 1 à 3).', result: 'Documents classés, 36 postes transcrits, onglet Officiel figé.' },
      { title: 'Mardi 4 — Rapprochement et alerte', body: 'Procédure 3 (étape 4) : le rapprochement révèle le paiement de D. Mumbere. Procédure 4 (étapes 1 et 2) : faits établis et courriel d\'alerte à 14 h 10. Courriel de positionnement au HR Manager.', result: 'Risque financier signalé par écrit le jour même.' },
      { title: 'Mercredi 5 — Sécurisation et circuit', body: 'Confirmation écrite de désactivation de la ligne. Procédure 4 (étape 3) : cause probable identifiée. Procédure 5 (étape 1) : calendrier de paie convenu.', result: 'Ligne bloquée avant la paie d\'août.' },
      { title: 'Jeudi 6 — Terrain et préparation', body: 'Procédure 3 (étapes 5 et 6). Demande de congé de J. Furaha retrouvée et validée. Procédure 4 (étape 4) : note factuelle. Procédure 6 (étapes 1 à 3) : entretien avec le Base Manager puis note d\'une demi-page.', result: 'Tous les écarts expliqués ; Base Manager associé.' },
      { title: 'Vendredi 7 — Validation', body: 'Procédure 3 (étape 7) : Alertes à zéro. Procédure 6 (étapes 4 et 5) : réunion de décision, compte rendu, organigramme v2026-08-07 diffusé.', result: 'Organigramme de référence validé.' },
      { title: 'Du 18 au 31 août — Paie', body: 'Procédure 5 (étapes 2 à 7) : fiche signée les 18 et 19 août, virement le 28, contrôle post-virement le 31.', result: 'Première paie juste et prouvée.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La cartographie finale (extrait des lignes concernées)',
    scenario: "Voici l'état final de l'onglet Cartographie pour les lignes modifiées, après validation du vendredi 7 août. L'onglet Alertes affiche 0 / 0 / 0 / 0.",
    steps: [],
    table: {
      columns: ['Poste', 'Titulaire', 'n+1 (type)', 'Statut', 'Date de départ', 'Alerte', 'Colonne J — écart et décision'],
      rows: [
        ['HR Officer – Goma', 'N. Mbusa', 'HR Manager de mission (Fonctionnel)', 'Actif', '', 'OK', 'Ligne administrative : Base Manager — confirmé par courriel du 04/08'],
        ['Assistant Logistique – Goma', 'D. Mumbere', 'Base Manager (Administratif)', 'Parti - à retirer', '12/05/2026', 'OK', 'Démission 10/04 ; payé à tort juin-juillet ; ligne bloquée 05/08 ; décision HoM 07/08'],
        ['Superviseur Distribution – Goma', 'J. Furaha', 'Base Manager (Administratif)', 'Actif', '', 'OK', 'Congé sans solde 01/06-30/09/2026, validé HR Manager 06/08'],
        ['Assistant RH – Goma', 'P. Sifa', 'HR Officer – Goma (Fonctionnel)', 'Actif', '', 'OK', 'Ligne administrative : Base Manager — validé 07/08'],
        ['Chauffeur – Goma', '', 'Base Manager (Administratif)', 'Vacant', '', 'OK', 'Fin de contrat K. Paluku 31/01 ; poste supprimé 07/08, à retirer à la prochaine version'],
        ['Infirmière – Goma', 'E. Neema', 'Superviseur médical (Administratif et fonctionnel)', 'Actif', '', 'OK', 'Recrutée 02/03/2026 ; ajoutée 06/08'],
      ],
    },
    result: "Contrôle final : 35 lignes Actif = 35 contrats actifs ; chaque ligne modifiée par rapport à l'onglet Officiel_2025-12 a son explication en colonne J.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — La fiche d'interface RH-Finance d'août 2026",
    scenario: 'Version signée, archivée sous Fiche_RH-Finance_Goma_2026-08.pdf.',
    steps: [],
    example: {
      title: 'Fiche remplie, section par section',
      lines: [
        '1. Mois de paie : Août 2026 — Date limite de transmission RH → Finance : 20/08/2026.',
        '2. Embauches : M. Kavugho, Agent de saisie (Kobo), entrée 17/08/2026, 480 USD brut/mois, prorata 480 × 15/31 = 232,26 USD.',
        '3. Départs : D. Mumbere, Assistant Logistique, départ effectif 12/05/2026, démission — ligne désactivée le 05/08/2026.',
        '4. Changements : aucun changement de contrat, de poste ou de taux ce mois-ci.',
        '5. Congés : J. Furaha, congé sans solde 01/06-30/09/2026, salaire août 0 USD, assurance maintenue (décision HR Manager 06/08).',
        '6. Vérifications croisées : 36 − 1 + 1 = 36 lignes (dont 1 à 0 USD), concordance cartographie OK. Virements à tort D. Mumbere 2 × 560 USD + assurance 2 × 38 USD, régularisation selon décision HoM du 07/08. E. Neema ajoutée à la cartographie, sans impact paie.',
        '7. Transmis par N. Mbusa, HR Officer, 18/08/2026 — Reçu et validé par C. Bahati, Payroll Officer, 19/08/2026.',
        'Mention ajoutée : « Contrôle post-virement OK le 31/08/2026 ».',
      ],
    },
    result: 'Le troisième virement erroné a été évité : la ligne était bloquée dès le 5 août, quinze jours avant la date limite.',
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Pourquoi cet ordre et ces formulations',
    scenario: "L'exercice source demande dans quel ordre présenter les écarts au Head of Mission et au Base Manager, et avec quelle formulation pour le poste fantôme. Voici le raisonnement.",
    steps: [
      { title: '1. La Finance et le HR Manager d\'abord, dès le mardi', body: 'Le risque financier ne peut pas attendre une réunion : le blocage d\'une ligne documentée relève de votre niveau 1, l\'information du HR Manager est obligatoire dès qu\'un paiement indu est possible.' },
      { title: '2. Le Base Manager ensuite, en tête-à-tête, avant toute réunion', body: 'Il apprend tout de vous, en privé, et il est consulté sur les décisions qui touchent son équipe. Il devient co-auteur des corrections.' },
      { title: '3. Le Head of Mission et le HR Manager enfin, pour décider', body: 'Ils reçoivent une note qui cite le Base Manager comme source, des faits datés et des décisions formulées pour une réponse simple.' },
      { title: '4. La formulation du poste fantôme', body: '« Constatation à vérifier, pas une conclusion » ; « le circuit n\'existait pas, c\'est lui qu\'on corrige » ; aucun adjectif sur les personnes.' },
    ],
    result: "Résultat : l'organigramme est corrigé en cinq jours, la paie d'août est juste, et le Base Manager reste votre allié pour la suite de la mission.",
  },

  // ─── Exercice ──────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: "Exercice — À vous : la base d'Uvira",
    instructions: "Vous êtes HR Officer de la base d'Uvira (fictive, même ONG). Vous arrivez le lundi 5 octobre 2026. On vous remet l'organigramme officiel (mars 2026, 8 postes nominatifs), la paie de septembre 2026 et la liste des contrats actifs. Les entretiens de vos premiers jours vous apprennent ce qui figure dans la dernière colonne. Paie : transmission le 20, virement le 28.",
    table: {
      columns: ['Poste', 'Organigramme (mars 2026)', 'Paie septembre 2026', 'Contrat actif', 'Constat terrain'],
      rows: [
        ['Base Manager', 'B. Mapendo', '1 450 USD', 'Oui', 'Présent'],
        ['Assistant Admin-RH', 'C. Riziki, n+1 Base Manager', '520 USD', 'Oui', "Reçoit par téléphone ses consignes de paie de l'ancien HR Officer, muté à Bukavu ; le reste, du Base Manager"],
        ['Comptable de base', 'D. Bisimwa', '780 USD', 'Oui', 'Présent'],
        ['Magasinier', 'F. Zawadi', '430 USD', 'Non', 'Démission, dernier jour 31/08/2026, lettre au dossier'],
        ["Agent d'entretien", 'G. Kahindo', 'Absent', 'Non', 'Fin de contrat 30/06/2026, non remplacé'],
        ['Chauffeur', 'H. Mushagalusa', '450 USD', 'Oui', 'Présent'],
        ['Chauffeur (second)', 'Absent', '450 USD', 'Oui', 'J. Baraka, recruté le 01/07/2026'],
        ['Infirmier superviseur', 'K. Lwambo', '0 USD (août et sept.)', 'Oui', 'Congé sans solde depuis le 01/08/2026, accord verbal seulement'],
      ],
    },
    deliverable: "Les trois fichiers complétés : la cartographie (onglet Alertes à zéro ou chaque alerte restante justifiée), la fiche RH-Finance d'octobre 2026 signable, et la note de présentation des écarts d'une demi-page maximum.",
  },
  {
    type: 'exercise',
    title: "Exercice — Les étapes à suivre pour la base d'Uvira",
    steps: [
      {
        title: 'Préparez et transcrivez (Procédure 3, étapes 1 à 3)',
        actions: [
          'Notez les totaux des trois sources.',
          'Enregistrez le template sous Cartographie_Uvira_2026-10.xlsx, figez l\'onglet Officiel_2026-03.',
          'Transcrivez les 8 postes de l\'organigramme tels quels.',
        ],
      },
      {
        title: 'Rapprochez et marquez les écarts (étapes 4 à 6)',
        actions: [
          'Identifiez chaque cas : poste fantôme, vacant non signalé, poste absent de l\'organigramme, situation à vérifier, rattachement à clarifier.',
          'Appliquez la bonne combinaison Statut / Date et documentez la colonne J.',
        ],
      },
      {
        title: 'Sécurisez le paiement indu (Procédure 4, étapes 1 et 2)',
        actions: [
          'Calculez le montant versé à tort.',
          'Rédigez le courriel d\'alerte à la Finance avec la demande précise et l\'échéance.',
        ],
      },
      {
        title: "Remplissez la fiche RH-Finance d'octobre 2026 (Procédure 5, étapes 3 à 6)",
        actions: [
          'Sections 1 à 7, y compris le calcul d\'effectif de la section 6.',
        ],
      },
      {
        title: 'Rédigez la note et proposez le rattachement de C. Riziki (Procédure 6, étapes 1 à 3)',
        actions: [
          'Classez les écarts (urgent / à valider / information) et indiquez dans quel ordre vous rencontrez qui.',
        ],
      },
    ],
    tip: "Pour le rattachement de l'Assistant Admin-RH, appuyez-vous sur la distinction ligne administrative / ligne technique : la réponse attendue n'est pas « l'un ou l'autre ».",
  },
  {
    type: 'checklist',
    title: 'Auto-correction — votre livrable est correct si…',
    items: [
      'Totaux de départ notés : 8 postes à l\'organigramme, 7 lignes de paie (dont 1 à 0 USD), 6 contrats actifs (F. Zawadi et G. Kahindo exclus, J. Baraka inclus).',
      "F. Zawadi : date de départ 31/08/2026 saisie ; statut « Parti - à retirer » uniquement après confirmation écrite de la Finance ; montant versé à tort identifié : 1 virement de 430 USD (paie du 28/09).",
      "G. Kahindo : titulaire vide, statut « Vacant », colonne J « Fin de contrat 30/06/2026, poste non signalé ».",
      "J. Baraka : ligne ajoutée, statut « Actif », colonne J « Ajouté — recruté le 01/07/2026, absent de l'organigramme ».",
      "K. Lwambo : statut « À vérifier » tant que la demande écrite et la validation du HR Manager n'existent pas ; la fiche RH-Finance mentionne le congé en section 5, avec salaire 0 USD.",
      "C. Riziki : deux lignes proposées (technique : vous, HR Officer d'Uvira, et non plus l'ancien titulaire muté à Bukavu ; administrative : Base Manager), marquées « proposé » jusqu'à validation.",
      "Après correction : 6 lignes « Actif » dans la cartographie = 6 contrats actifs.",
      "Fiche d'octobre, section 6 : 7 lignes en septembre − 1 sortie (F. Zawadi) + 0 entrée = 6 lignes en octobre, dont 1 à 0 USD.",
      "Courriel d'alerte : envoyé le jour du constat, factuel, avec demande de confirmation écrite et sans le mot « fraude ».",
      'Note : une demi-page maximum, écarts classés du plus urgent au moins urgent, décisions demandées formulées pour une réponse oui / non, Base Manager rencontré avant la réunion de décision.',
      "Onglet Alertes : à zéro, ou chaque alerte restante (K. Lwambo par exemple) justifiée par une action en cours datée.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice complémentaire — Appliquez la méthode à votre propre mission',
    instructions: "Si vous êtes en poste, refaites la Procédure 1 et la Procédure 3 sur votre base réelle, avec les vrais documents. Si vous n'êtes pas en poste, appliquez la Procédure 1 à un poste RH pour lequel vous postulez, à partir de sa fiche de poste publiée.",
    steps: [
      { title: 'Votre fiche de positionnement', actions: ['Deux lignes hiérarchiques écrites.', 'Matrice de décision d\'au moins 12 décisions classées en 3 niveaux.'] },
      { title: 'Votre cartographie (si en poste)', actions: ['Rapprochement organigramme / paie / contrats par matricule.', 'Liste des écarts avec preuve et date.'] },
      { title: 'Votre fiche RH-Finance du mois prochain', actions: ['Sections 1 à 7 remplies avant la date limite réelle de votre mission.'] },
    ],
    deliverable: 'Votre fiche de positionnement validée par votre hiérarchie et, si vous êtes en poste, votre cartographie et votre première fiche RH-Finance signée.',
    pitfall: "N'utilisez jamais les données réelles de vos collègues (noms, salaires) en dehors des outils et dossiers RH sécurisés de votre organisation, y compris pour un exercice de formation.",
  },

  // ─── Pièges, récapitulatif, clôture ───────────────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Se fier à l'organigramme officiel sans le vérifier contre la réalité : un document non mis à jour depuis plusieurs mois est un historique, pas un organigramme. Premier réflexe : le confronter à la paie, aux contrats et au terrain.",
      "Ignorer l'interface avec la Finance jusqu'à ce qu'un problème de paie éclate : un poste fantôme découvert par un audit externe coûte infiniment plus cher en confiance et en réputation qu'une fiche mensuelle signée.",
      "Ne pas clarifier son propre rattachement dès l'arrivée : soit vous escaladez tout et saturez votre hiérarchie, soit vous tranchez seul des dossiers qui ne sont pas de votre ressort.",
      "Corriger l'organigramme seul et l'imposer comme un fait accompli : même documentée, une correction sans consultation du Base Manager et sans validation du Head of Mission est vécue comme une sanction déguisée.",
      "Traiter un poste fantôme comme un simple oubli sans vérifier s'il cache une fraude, ou à l'inverse accuser avant vérification : sécurisez d'abord le virement, investiguez ensuite, concluez en dernier.",
      "Ajouter des lignes sous la plage du template au lieu de les insérer à l'intérieur, ou taper les statuts à la main : l'onglet Alertes affiche zéro alors que des écarts existent.",
      "Accepter des mouvements de paie oraux pour aller plus vite : sans pièce, pas de ligne dans la fiche RH-Finance.",
      "Clôturer une séparation sans la check-list de départ : la fiche RH-Finance et le retrait des avantages sociaux sont les deux cases les plus souvent oubliées.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez établi votre fiche de positionnement (ligne administrative, ligne technique) et une matrice de décision à trois niveaux confirmée par écrit.",
      "Vous avez construit la matrice des responsabilités RH du recrutement à la séparation et une check-list de séparation qui empêche les postes fantômes.",
      "Vous avez rempli organigramme-cartographie-roles-rh.xlsx à partir de trois sources rapprochées par matricule et d'entretiens terrain, jusqu'à un onglet Alertes à zéro.",
      "Vous avez sécurisé un poste fantôme payé : preuves, alerte écrite le jour même, cause instruite sans accusation, décision prise au bon niveau, cause racine corrigée.",
      "Vous avez rempli et fait signer la fiche d'interface RH-Finance (paie et avantages sociaux), puis contrôlé la paie après virement.",
      "Vous avez fait valider vos corrections avec le Base Manager et le Head of Mission grâce à une note d'une demi-page, puis diffusé un organigramme daté.",
      "Vous avez rédigé la narrative de planification annuelle RH avec un impact budgétaire chiffré et un chronogramme.",
      "Vous savez situer chaque dossier dans le cycle RH complet et dans les interfaces Finance, Logistique et Programmes.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi les circuits de décision diffèrent entre le terrain et le siège, avec un exemple de décision pour chacun des trois niveaux.",
      "Je peux citer les rôles clés d'une structure de mission et ce qu'il faut savoir de chacun dès le jour 1.",
      "Je connais les étapes du cycle RH et je sais situer chaque module de cette formation dans ce cycle.",
      "J'ai cartographié un organigramme avec le template fourni, en confrontant l'organigramme officiel, la masse salariale, les contrats et le terrain.",
      "Je sais identifier un poste fantôme et un rattachement erroné, et je sais les faire corriger sans braquer l'équipe.",
      "J'ai formalisé un circuit RH-Finance mensuel avec une échéance, une signature conjointe et un contrôle après virement.",
      "Je sais clarifier mon propre rattachement hiérarchique dès ma prise de poste et le faire confirmer par écrit.",
      "J'ai réalisé l'exercice de la base d'Uvira et mon livrable passe toutes les lignes de l'auto-correction.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 02 — Recrutement National & International : vous savez désormais qui décide quoi sur votre mission. Vous allez maintenant conduire la première étape du cycle RH, de la fiche de poste à l'offre de contrat, en sachant exactement qui valide chaque étape.",
  },
]
