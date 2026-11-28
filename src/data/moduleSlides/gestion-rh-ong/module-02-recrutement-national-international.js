// Module 02 — Recrutement National & International
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : les sept étapes du guide
// pratique sont détaillées procédure par procédure et appliquées à un cas fil
// rouge unique (recrutement d'un Program Manager à Goma), avec les deux
// templates remplis champ par champ. Les noms, chiffres et dates des exemples
// sont fictifs.
export default [
  {
    type: 'cover',
    title: 'Recrutement National & International',
    hook: "À la fin de ce module, vous aurez mené un recrutement complet de bout en bout, comme un HR Officer expérimenté : un plan de recrutement validé, une description de poste publiable, une présélection documentée, un test corrigé en aveugle, la grille d'entretien remplie et classée, des fiches de vérification de références avec un contact indépendant, et une offre écrite dont aucune condition n'est cachée. Tout cela en suivant, étape par étape, un cas suivi du début à la fin avec les deux templates du module.",
  },
  {
    type: 'objectives',
    items: [
      "Cadrer un besoin de recrutement avec le hiring manager (3 à 5 compétences indispensables, expérience minimum réaliste, type de contrat, plafond budgétaire) et le consigner dans un plan de recrutement d'une page validé par le Head of Mission.",
      "Rédiger une description de poste compétitive et inclusive : critères essentiels séparés des souhaitables, langage audité, fourchette salariale indiquée, prête à publier.",
      "Publier sur les bons canaux nationaux et internationaux et présélectionner (shortlisting) sur critères écrits, avec un registre qui justifie chaque candidat non retenu.",
      "Concevoir, faire passer et corriger un test technique identique pour tous les candidats, avec une grille de correction écrite avant la passation.",
      "Compléter grille-entretien-structure-evaluation.xlsx (onglets Grille Entretien et Comparaison candidats) : mêmes questions, notes saisies en direct, classement calculé et non ressenti.",
      "Conduire une vérification de références et d'antécédents avec fiche-verification-references-antecedents.docx, dont au moins un contact indépendant, et trancher par écrit : poursuivre, poursuivre sous conditions ou arrêter.",
      "Formuler une offre de contrat écrite, alignée sur la grille salariale, dont les conditions encore ouvertes sont écrites noir sur blanc, puis clôturer le dossier de recrutement.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un exposé sur les bonnes pratiques de recrutement : c'est la méthode complète, étape par étape, d'un recrutement mené sans sauter aucune étape malgré la pression du calendrier. Vous suivrez un seul cas du début à la fin et vous produirez sept livrables réutilisables tels quels sur votre propre mission.",
      "Le cas fil rouge (fictif, inspiré de situations réelles) : vous êtes toujours N. Mbusa, HR Officer de la base de Goma de Kivu Santé Solidaire (KSS), en poste depuis cinq semaines. Le lundi 31 août 2026, A. Kavira, HR Manager de mission, vous écrit : l'UNICEF a validé une convention de 18 mois pour un projet de protection de l'enfance dans les sites de déplacés autour de Goma, avec un démarrage opérationnel le lundi 2 novembre 2026. KSS doit recruter un Program Manager Protection de l'enfance, basé à Goma, avec une équipe de 9 personnes. Le hiring manager est L. Safari, Coordinateur Programmes ; H. Mwamba, Head of Mission, approuve le recrutement. Vous disposez de neuf semaines.",
    ],
    bullets: [
      "Livrable 1 — Le plan de recrutement d'une page (besoin, critères, contrat, plafond budgétaire, rétro-planning, règle de décision) validé par le Head of Mission.",
      "Livrable 2 — La description de poste publiable, avec critères essentiels et souhaitables séparés et fourchette salariale.",
      "Livrable 3 — Le registre des candidatures, la grille de présélection et la liste courte motivée (46 candidatures, 8 retenues).",
      "Livrable 4 — Le test technique, sa grille de correction écrite à l'avance et les résultats corrigés en aveugle.",
      "Livrable 5 — Le classeur grille-entretien-structure-evaluation.xlsx rempli pour 3 candidats, avec classement calculé.",
      "Livrable 6 — Les fiches de vérification des références et antécédents (une par contact), avec contact indépendant et recommandation tranchée.",
      "Livrable 7 — L'offre écrite avec conditions explicites, puis le dossier de recrutement clôturé et archivé.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '30 à 45 min',
    caption: "C'est le temps d'une vérification de références bien ciblée par candidat retenu. C'est aussi l'étape que l'on sacrifie le plus souvent « faute de temps » sur un recrutement urgent.",
    context: "Comparez avec le coût d'un recrutement raté découvert trois mois après la prise de poste, humain et financier. Dans le cas fil rouge, cette demi-heure fera changer le candidat auquel l'offre est finalement envoyée.",
  },

  // ─── Théorie essentielle ───────────────────────────────────────────────
  {
    type: 'concept',
    title: "Pourquoi l'entretien structuré bat l'entretien informel",
    body: [
      "Dans beaucoup d'ONG, l'entretien ressemble encore à une conversation libre : le recruteur pose les questions qui lui viennent, dans l'ordre qui lui plaît, et note « au feeling » à la fin. C'est le format le moins fiable pour prédire la performance réelle d'un candidat une fois en poste, et pourtant le plus répandu sur le terrain, y compris chez des HR Managers expérimentés qui pensent savoir juger les gens.",
      "Un entretien structuré (mêmes questions, même ordre, même grille de notation pour tous les candidats d'un poste) a un pouvoir prédictif nettement supérieur. Avec la même grille, deux recruteurs arrivent à des scores comparables sur le même candidat. Avec un entretien libre, ils peuvent avoir des impressions opposées sans pouvoir justifier ni l'une ni l'autre.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Sans grille : L. Safari aime l'aisance d'un candidat, E. Kasongo préfère un autre, personne ne peut dire pourquoi. Le comité se réunit le 28 septembre sans critère partagé.",
        "Avec grille : les trois membres du jury ont posé les cinq mêmes questions, noté chacune de 1 à 5 avec une justification, et le fichier calcule 74, 72 et 67 sur 100. La discussion porte sur des faits, pas sur des impressions.",
      ],
    },
    tip: "Quand un collègue vous dit « celui-là, on sent tout de suite qu'il est bon », répondez par une question : « Sur quelle compétence, et quelle phrase du candidat te l'a montré ? » C'est la grille qui vous donne cette phrase.",
  },
  {
    type: 'comparison-table',
    title: "Entretien informel ou entretien structuré : ce qui change concrètement",
    columns: ['Critère', 'Entretien informel', 'Entretien structuré'],
    rows: [
      ['Questions', "Improvisées, différentes d'un candidat à l'autre", "Identiques, dans le même ordre, écrites avant l'entretien"],
      ['Lien avec le poste', "Selon la curiosité du recruteur", "Chaque question est reliée à une compétence précise du poste"],
      ['Notation', "Impression générale en fin de journée", "Score de 1 à 5 par compétence, avec critères écrits pour chaque niveau"],
      ['Score final', "Ressenti", "Somme pondérée calculée par le fichier"],
      ['Moment de la note', "De mémoire, en fin de journée", "Sur le moment, avec une justification concrète"],
      ['Comparaison des candidats', "Impossible : questions différentes", "Directe : même grille, classement calculé"],
      ["Défense en cas de contestation ou d'audit bailleur", "Difficile : aucune trace objective", "Solide : grille archivée avec observations datées"],
    ],
  },
  {
    type: 'concept',
    title: 'Les biais à neutraliser, et la parade intégrée à la méthode',
    body: "Le piège classique en contexte humanitaire : le recruteur qui connaît déjà un candidat (recommandé par un collègue, croisé sur une mission précédente) pose sans le vouloir des questions plus faciles et interprète ses réponses plus favorablement. La grille ne supprime pas ce biais, elle le réduit fortement parce qu'elle oblige à justifier chaque score par une observation concrète, jamais par une impression.",
    table: {
      columns: ['Biais', 'Comment il se manifeste', 'Parade'],
      rows: [
        ['Biais de récence', "Le dernier candidat de la journée, plus frais dans la mémoire, est sur-évalué (ou sous-évalué)", "Noter immédiatement après chaque entretien ; tirer au sort l'ordre de passage"],
        ['Candidat connu', "Questions plus faciles, réponses interprétées avec indulgence", "Déclarer le lien avant l'entretien ; les mêmes questions ; justification écrite du score"],
        ['Effet de halo', "Une qualité marquante (aisance orale, grande ONG sur le CV) colore toutes les notes", "Noter compétence par compétence, question par question, sans relire les notes précédentes"],
        ['Effet de ressemblance', "On favorise celui qui nous ressemble (même école, même parcours)", "Critères de notation écrits avant l'entretien ; jury de 3 personnes aux profils différents"],
        ['Influence du groupe', "Le plus senior donne son avis et les autres s'alignent", "Chaque évaluateur note seul avant la discussion ; le plus senior parle en dernier"],
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Recrutement national et international : ce qui change pour le HR Officer',
    columns: ['Point', 'Recrutement national', 'Recrutement international'],
    rows: [
      ['Vivier', "Candidats résidant dans le pays de la mission", "Candidats du secteur humanitaire disponibles à la mobilité, y compris d'autres pays de la région"],
      ['Canaux de publication', "Presse locale, universités, réseaux professionnels du pays, groupes de travail sectoriels locaux", "ReliefWeb, LinkedIn, réseaux du secteur (Bond, CHS Alliance, groupes LinkedIn RH humanitaire)"],
      ['Grille salariale', "Grille nationale de la mission", "Grille internationale de l'organisation, fixée avec le siège"],
      ['Documents à vérifier', "Diplômes locaux, attestations d'organisations nationales, références de proximité", "Diplômes étrangers, équivalences, attestations d'organisations basées hors du pays"],
      ['Délais incompressibles', "Préavis chez l'employeur actuel", "Préavis, permis de travail, visa, déménagement : à intégrer dès le rétro-planning"],
      ['Vérification des références', "Contacts joignables localement ; archives parfois détruites en zone de conflit", "Fuseaux horaires et organisations dissoutes ; recourir au standard général de l'organisation"],
      ['Contrat', "Contrat national (détaillé au Module 03)", "Contrat d'expatriation ou international (détaillé au Module 03)"],
    ],
  },
  {
    type: 'concept',
    title: 'Qui fait quoi dans un recrutement : les rôles dans le cas fil rouge',
    body: "Avant d'écrire la moindre annonce, clarifiez qui prépare, qui valide et qui est consulté. Cette répartition reprend la matrice des responsabilités du Module 01 (ligne « Fiche de poste et besoin » : HR Officer réalise, Head of Mission approuve, les autres sont consultés). Les statuts d'autorité exacts dépendent de la délégation d'autorité de votre ONG.",
    table: {
      columns: ['Rôle', 'Nom (fictif)', 'Ce que cette personne fait dans ce recrutement'],
      rows: [
        ['Hiring manager (Coordinateur Programmes)', 'L. Safari', "Exprime le besoin, fixe les critères techniques, siège au jury, note les entretiens"],
        ['HR Officer de base', 'N. Mbusa (vous)', "Pilote le processus, rédige l'annonce, tient le registre, conduit les vérifications de références, prépare l'offre"],
        ['HR Manager de mission', 'A. Kavira', "Valide la description de poste et l'offre (niveau 2), contrôle la conformité à la politique RH"],
        ['Head of Mission', 'H. Mwamba', "Approuve le recrutement et signe l'offre (niveau 3 de la matrice pour un contrat national)"],
        ['Finance Manager', 'R. Ilunga', "Confirme la ligne budgétaire et le plafond de coût employeur"],
        ['Base Manager', 'E. Kasongo', "Siège au jury, apporte l'avis du terrain sur l'équipe qui accueillera la personne"],
        ['Head of HR siège', 'S. Lambert', "Consultée si le candidat retenu est international (grille et contrat)"],
      ],
    },
    tip: "Une personne, un seul rôle d'approbation : si deux personnes pensent « c'est à l'autre de valider », l'offre part sans validation ou ne part jamais.",
  },
  {
    type: 'process',
    title: 'Le recrutement de A à Z : 7 procédures, 7 livrables',
    intro: "Ces sept procédures sont les sept étapes du guide pratique du module. Elles s'enchaînent dans cet ordre : sauter une étape pour gagner du temps transfère le risque vers l'étape suivante, jamais ne le supprime.",
    steps: [
      { title: 'Procédure 1 — Cadrer le besoin', body: "Compétences indispensables, expérience minimum, type de contrat, plafond budgétaire, rétro-planning. Livrable : plan de recrutement validé." },
      { title: 'Procédure 2 — Rédiger la description de poste', body: "Critères essentiels séparés des souhaitables, langage inclusif, fourchette salariale. Livrable : description de poste publiable." },
      { title: 'Procédure 3 — Publier et présélectionner', body: "Canaux nationaux et internationaux, registre, grille de présélection sur critères écrits, motifs de non-sélection. Livrable : liste courte motivée." },
      { title: 'Procédure 4 — Tester techniquement', body: "Test identique pour tous, grille de correction écrite à l'avance, correction en aveugle. Livrable : résultats classés." },
      { title: 'Procédure 5 — Conduire les entretiens structurés', body: "Template grille-entretien-structure-evaluation.xlsx : mêmes questions, notes en direct, classement calculé. Livrable : grille remplie." },
      { title: 'Procédure 6 — Vérifier références et antécédents', body: "Template fiche-verification-references-antecedents.docx : contacts fournis et au moins un contact indépendant. Livrable : fiches et recommandation." },
      { title: "Procédure 7 — Formuler l'offre et clôturer", body: "Offre écrite, conditions explicites, notifications, archivage. Livrable : offre signée et dossier clos." },
    ],
    result: "Chaque procédure dépend du livrable de la précédente : sans critères écrits (P1) il n'y a pas de présélection défendable (P3), sans grille commune (P5) il n'y a pas de comparaison, sans vérification (P6) il n'y a pas d'offre sûre (P7).",
  },
  {
    type: 'warning',
    title: 'Fraude documentaire : les red flags classiques à connaître avant toute vérification',
    items: [
      "Diplômes non vérifiables : université ne correspondant à aucun établissement reconnu, établissement disparu ou renommé sans traçabilité, archives détruites (fréquent en zone de conflit : cela complique la vérification mais n'excuse jamais l'absence de vérification).",
      "Références fournies uniquement par le candidat, sans aucun moyen de vérification croisée : deux ou trois contacts manifestement choisis parce qu'ils diront du bien de lui.",
      "Incohérences de dates ou de poste entre le CV et les attestations de travail : une seule peut être une erreur de frappe, plusieurs sur le même dossier ne le sont jamais.",
      "Postes ou responsabilités qui ne correspondent pas à la taille réelle de la structure mentionnée : par exemple 40 personnes et 5 millions de dollars supervisés dans une organisation qui n'a jamais eu cette envergure dans le pays.",
      "Attestations de travail avec cachet mais sans contact vérifiable : numéro qui ne répond jamais, adresse email générique non professionnelle.",
    ],
  },
  {
    type: 'concept',
    title: "La règle de lecture des red flags : l'accumulation, jamais le signal isolé",
    body: [
      "Aucun de ces signaux, pris seul, ne prouve une fraude. Un diplôme difficile à vérifier en zone de conflit n'est pas automatiquement un faux. Mais l'accumulation de plusieurs signaux sur le même dossier, ou l'absence totale de vérification indépendante possible, doit retarder l'offre jusqu'à clarification, jamais l'inverse.",
      "Ce que vous faites de cette règle : vous ne jugez pas un candidat sur un signal, vous documentez chaque signal sur la fiche de vérification (Procédure 6), vous cherchez une source indépendante, puis vous recommandez. La décision est motivée par des faits datés, pas par une intuition.",
    ],
    table: {
      columns: ['Signal', 'Première vérification possible'],
      rows: [
        ['Diplôme non vérifiable', "Écrire au service de scolarité ou au registre de l'établissement par ses coordonnées publiques ; demander l'attestation de réussite ou le relevé de notes"],
        ['Références uniquement fournies par le candidat', "Chercher au moins un contact indépendant (LinkedIn, collègue commun, standard de l'organisation)"],
        ['Incohérence CV / attestation', "Demander au candidat une explication écrite et la pièce qui la prouve (contrat, bulletins de paie)"],
        ["Taille de la structure incohérente", "Consulter les rapports publics de l'organisation, demander au contact indépendant"],
        ["Attestation sans contact vérifiable", "Appeler le standard général de l'organisation, pas le numéro porté sur l'attestation"],
      ],
    },
    highlight: "Un retard de quelques jours pour clarifier est toujours moins cher qu'une offre à retirer, ou pire, qu'un contrat à rompre.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire à maîtriser dès ce module',
    terms: [
      { term: 'Hiring manager', definition: "Responsable qui a besoin du poste, exprime le besoin, définit les critères techniques et manage la personne recrutée. Il ne mène pas seul le recrutement : le HR Officer pilote le processus." },
      { term: 'Critère essentiel / souhaitable', definition: "Un critère essentiel est indispensable pour tenir le poste dès les trois premiers mois ; un critère souhaitable est un plus qui se compense ou se forme. Mélanger les deux décourage les bons candidats et brouille le tri." },
      { term: 'Critère éliminatoire', definition: "Condition oui/non vérifiable sur le dossier (dossier complet, minimum d'expérience). Un dossier qui ne la remplit pas n'est pas évalué plus loin." },
      { term: 'Shortlisting', definition: "Présélection des candidatures sur la base de critères objectifs et écrits (correspondance avec les critères essentiels), avant tout entretien." },
      { term: "Grille d'entretien structuré", definition: "Document listant les questions à poser, les compétences évaluées, les pondérations et les critères de notation, identique pour tous les candidats d'un même poste." },
      { term: 'Pondération', definition: "Poids d'une compétence dans le score final (en points sur 100). Les pondérations d'une grille totalisent 100 et sont fixées avant le premier entretien." },
      { term: 'Biais de récence', definition: "Tendance à sur-évaluer ou sous-évaluer un candidat parce qu'il a été interviewé en dernier et que son entretien est plus frais dans la mémoire du recruteur." },
      { term: 'Référence fournie / référence indépendante', definition: "La référence fournie est transmise par le candidat. La référence indépendante est un contact identifié par le recruteur lui-même (LinkedIn, collègue commun, standard de l'organisation) : la seule vérification réellement neutre." },
      { term: 'Offre conditionnelle', definition: "Offre de contrat dont une ou plusieurs vérifications restent ouvertes. Les conditions et leur échéance doivent être écrites explicitement dans l'offre, jamais implicites." },
      { term: "Misconduct Disclosure Scheme (MDS)", definition: "Dispositif d'échange d'informations entre organisations du secteur sur les personnes licenciées ou ayant démissionné après une enquête pour violence sexuelle, exploitation, abus ou harcèlement. À utiliser seulement si votre organisation y participe et dans le cadre fixé par sa politique." },
    ],
  },
  {
    type: 'concept',
    title: 'Vos outils pour ce module',
    body: [
      "Trois familles d'outils. LinkedIn (recherche avancée) pour identifier des références indépendantes et vérifier la cohérence des dates et des postes. ReliefWeb (reliefweb.int/jobs) et les réseaux du secteur pour toucher des profils familiers du contexte humanitaire, complétés par les canaux locaux indispensables au recrutement national. Excel ou Google Sheets pour la grille d'entretien et le comparatif des candidats, avec calcul automatique du score pondéré.",
      "Deux templates du dossier 04-templates seront remplis champ par champ dans les procédures 5 et 6. Les autres documents (plan de recrutement, description de poste, registre, test) sont des documents de travail que vous créez simplement, en Word ou en Excel.",
    ],
    table: {
      columns: ['Template', "Ce qu'il contient", 'Utilisé dans'],
      rows: [
        ['grille-entretien-structure-evaluation.xlsx', "Onglet Grille Entretien : colonnes A à H (Candidat, Poste visé, Compétence évaluée, Question posée, Pondération sur 100, Score obtenu de 1 à 5, Score pondéré calculé, Commentaires de l'évaluateur), 3 blocs candidats de 5 compétences, une ligne de total par candidat, légende du score. Onglet Comparaison candidats : colonnes A à E (Candidat, Poste visé, Total pondéré sur 100, Rang, Recommandation) et rappel des seuils.", 'Procédure 5'],
        ['fiche-verification-references-antecedents.docx', "5 sections : 1 Identification du candidat, 2 Contact de référence (avec la case de mode d'identification), 3 Questions posées et éléments obtenus, 4 Signaux d'alerte relevés, 5 Évaluation globale et recommandation, avec ligne Rédigé par et Date.", 'Procédure 6'],
      ],
    },
    pitfall: "Une fiche par référence contactée : une seule fiche pour tous les contacts d'un candidat mélange les sources et efface la distinction entre contact fourni et contact indépendant, qui est précisément ce que la fiche doit rendre visible.",
  },

  // ─── Procédure 1 — Cadrer le besoin ────────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 1 — Cadrer le besoin avant d'écrire une seule ligne d'annonce (lundi 31 août – mardi 1er septembre)",
    body: "C'est l'étape la plus souvent sautée par manque de temps, et c'est elle qui évite de recevoir 150 candidatures dont 140 ne correspondent à rien. Elle prend une journée de travail et fixe tout ce qui suivra : critères de présélection, grille d'entretien, offre.",
    bullets: [
      'Étape 1 — Réunir le hiring manager et poser le besoin par écrit.',
      'Étape 2 — Fixer les 3 à 5 compétences réellement indispensables.',
      "Étape 3 — Fixer l'expérience minimum réaliste, le type de contrat et le plafond budgétaire.",
      'Étape 4 — Valider le plan de recrutement et construire le rétro-planning.',
    ],
    result: "Livrable 1 : un plan de recrutement d'une page, validé par écrit par le Head of Mission.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Réunir le hiring manager et poser le besoin par écrit',
    intro: "Entrées : le courriel d'A. Kavira, le résumé de la convention UNICEF, l'organigramme à jour de la base (Module 01). Durée : 45 minutes en tête-à-tête avec L. Safari, le lundi 31 août.",
    steps: [
      {
        title: 'Préparez le document « Besoin » avant la réunion',
        actions: [
          'Ouvrez un document Word, enregistrez-le sous « Besoin_ProgramManagerPE_2026-08-31 ».',
          'Créez six titres : Pourquoi ce poste / Date de démarrage / Équipe / Rattachement / Financement / Décisions autonomes.',
          'Demandez à L. Safari, avant la réunion, le résumé du projet et la ligne budgétaire RH.',
        ],
      },
      {
        title: 'Posez les six questions et notez les réponses mot pour mot',
        actions: [
          'Pourquoi ce poste : remplacement, création de poste ou renfort d\'urgence ?',
          'Quelle date de démarrage est non négociable, et pourquoi ?',
          'Qui sera dans son équipe, et qui le remplacera en cas d\'absence ?',
          'À qui rapportera-t-il : ligne administrative et ligne technique (Module 01) ?',
          'Quel financement, jusqu\'à quelle date, et sous quelles conditions de renouvellement ?',
          'Quelles décisions prendra-t-il seul, lesquelles remonteront à Kinshasa ?',
        ],
      },
      {
        title: 'Faites préciser ce que le poste doit produire',
        actions: [
          'Demandez : « Quelles sont les trois premières choses que cette personne doit avoir faites à 90 jours ? »',
          'Notez des résultats observables, pas des qualités : « équipe recrutée et formée », pas « leader inspirant ».',
          'Relisez à voix haute et faites corriger L. Safari sur le champ.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — document « Besoin » rempli (extrait)',
      lines: [
        'Pourquoi : création de poste, nouveau projet UNICEF « Protection de l\'enfance — sites de déplacés de Goma ».',
        'Démarrage : lundi 2 novembre 2026, date inscrite dans la convention, non négociable.',
        'Équipe : 9 personnes (4 gestionnaires de cas, 3 mobilisateurs communautaires, 1 data et suivi-évaluation, 1 assistant administratif).',
        'Rattachement : technique, Coordinateur Programmes (L. Safari, Kinshasa) ; administratif, Base Manager de Goma (E. Kasongo).',
        'Financement : convention UNICEF de 18 mois, du 2 novembre 2026 au 30 avril 2028, renouvellement non garanti.',
        'À 90 jours : équipe complète recrutée et formée, plan de gestion de cas en place, premier rapport trimestriel au bailleur.',
      ],
    },
    result: "Fait quand : le besoin tient sur une page, les six réponses sont écrites et L. Safari a relu et corrigé le document.",
    pitfall: "Accepter « il nous faut quelqu'un de solide » sans résultats attendus à 90 jours : vous recevrez 150 candidatures dont 140 ne correspondent à rien, et vous ne saurez pas comment les trier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Fixer les 3 à 5 compétences réellement indispensables',
    intro: "Une liste de vingt qualités désirables ne sert à rien pour trier. Il vous faut trois à cinq compétences essentielles, chacune avec la preuve que vous demanderez. Les autres deviennent souhaitables ou disparaissent.",
    steps: [
      {
        title: 'Listez sans filtrer, avec le hiring manager',
        actions: [
          'Demandez à L. Safari de dire tout ce qu\'il voudrait voir chez le candidat idéal ; notez chaque item sur une ligne.',
          'Ajoutez ce que la convention exige (exigences du bailleur sur le profil, sur la langue de travail).',
        ],
      },
      {
        title: 'Appliquez le test du premier mois à chaque ligne',
        actions: [
          'Posez la question : « Si la personne n\'a pas cela le jour 1, le projet est-il en danger dans les trois premiers mois ? »',
          'Oui : critère essentiel. Non, mais utile : souhaitable. Ni l\'un ni l\'autre ou non observable : supprimez.',
        ],
      },
      {
        title: 'Plafonnez à cinq et reformulez chaque essentiel en preuve observable',
        actions: [
          'Si vous avez plus de cinq essentiels, demandez lesquels peuvent se former en un mois : ils passent en souhaitables.',
          'Écrivez chaque essentiel avec un seuil mesurable et la pièce qui le prouvera (CV, attestation, référence).',
        ],
      },
    ],
    table: {
      columns: ['Critère évoqué', 'Test du premier mois', 'Décision'],
      rows: [
        ["Au moins 5 ans en gestion de programmes de protection de l'enfance en contexte humanitaire", "Sans cela, pas de gestion de cas encadrée ni de dialogue crédible avec le bailleur", 'Essentiel'],
        ["A dirigé une équipe d'au moins 8 personnes", "L'équipe de 9 personnes démarre en novembre", 'Essentiel'],
        ["Connaît les standards de protection de l'enfance en urgence et les règles de signalement", "Risque direct pour des enfants dès la première semaine", 'Essentiel'],
        ["A rédigé des rapports pour un bailleur institutionnel (UNICEF, ECHO ou équivalent)", "Premier rapport trimestriel à 90 jours", 'Essentiel'],
        ["Français courant à l'oral et à l'écrit", "Langue de travail avec l'équipe et le bailleur", 'Essentiel'],
        ['Kiswahili', "L'équipe travaille en kiswahili, un interprète peut compenser un temps", 'Souhaitable'],
        ["Expérience dans l'Est de la RDC", "Se rattrape en quelques semaines avec l'appui de l'équipe", 'Souhaitable'],
        ['Formation PSEA ou safeguarding', "Formation organisable à l'arrivée", 'Souhaitable'],
        ['Permis de conduire', "Les déplacements se font avec chauffeur", 'Supprimé'],
        ['« Dynamique, flexible, passionné »', 'Non observable, non vérifiable', 'Supprimé'],
      ],
    },
    result: "Fait quand : vous avez 5 critères essentiels au maximum, 3 critères souhaitables, et aucun critère non vérifiable.",
    tip: "Pour chaque critère essentiel, écrivez tout de suite la phrase que vous mettrez dans l'annonce et la pièce que vous demanderez. Cela deviendra mot pour mot votre grille de présélection (Procédure 3).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: "Fixer l'expérience minimum, le type de contrat et le plafond budgétaire",
    intro: "Trois décisions qui conditionnent le vivier de candidats et l'offre finale. Chacune doit être confirmée par la bonne personne avant la publication.",
    steps: [
      {
        title: "Choisissez un niveau d'expérience minimum réaliste",
        actions: [
          'Demandez à L. Safari : « Qu\'est-ce qu\'un candidat avec 10 ans fait que celui avec 5 ans ne ferait pas ? »',
          'Si la réponse n\'est pas décisive, retenez 5 ans. Exiger 10 ans pour un poste tenable avec 5 écarte de bons profils.',
          'Précisez la nature de l\'expérience : gestion de programme, pas seulement travail de terrain.',
        ],
      },
      {
        title: 'Déterminez le type de contrat',
        actions: [
          'CDD lié au financement : durée = durée de la convention, avec mention « sous réserve du financement ».',
          'Poste ouvert aux candidats nationaux et internationaux : demandez à A. Kavira le statut applicable selon nationalité et lieu de résidence (la politique RH du siège le définit).',
          'Notez que les clauses détaillées relèvent du Module 03.',
        ],
      },
      {
        title: 'Faites confirmer le plafond par la Finance',
        actions: [
          'Demandez à R. Ilunga la ligne « Program Manager » du budget bailleur et le coût employeur maximal mensuel.',
          'Calculez le coût employeur = salaire brut × (1 + taux de charges et assurance) et comparez au plafond.',
          'Faites confirmer par courriel : la réponse écrite devient votre référence.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — décisions de la Procédure 1, étape 3',
      lines: [
        'Expérience minimum : 5 ans de gestion de programmes de protection de l\'enfance en contexte humanitaire.',
        'Contrat : CDD de 18 mois, du 02/11/2026 au 30/04/2028, sous réserve du financement. Statut national ou international selon la politique RH (confirmation A. Kavira).',
        'Fourchette salariale nationale, catégorie « Cadre 2 » (chiffres fictifs) : 2 600 à 3 200 USD brut par mois.',
        'Coût employeur maximal : 3 200 × 1,12 (charges et assurance, hypothèse fictive) = 3 584 USD ≤ plafond budgétaire 3 600 USD.',
        'Plafond sur la durée : 3 600 × 18 mois = 64 800 USD.',
        'Courriel de R. Ilunga du 31/08 : « Ligne confirmée jusqu\'à 3 600 USD de coût employeur mensuel. »',
      ],
    },
    result: "Fait quand : l'expérience minimum, le type de contrat et la fourchette salariale sont écrits, et la Finance a confirmé le plafond par courriel.",
    pitfall: "Publier une fourchette salariale avant la confirmation de la Finance : vous engagez l'organisation sans le savoir et vous perdrez la crédibilité de l'offre finale.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Valider le plan de recrutement et construire le rétro-planning',
    intro: "Le plan de recrutement est la page qui vous protège pendant tout le processus : quand la pression monte, vous renvoyez à ce que le Head of Mission a validé.",
    steps: [
      {
        title: "Rédigez le plan de recrutement d'une page",
        actions: [
          'Sections : besoin ; critères essentiels et souhaitables ; contrat et plafond ; jury ; calendrier ; règle de décision.',
          'Règle de décision écrite maintenant : seuil de recommandation 70/100 ; écart inférieur à 3 points = ex æquo, départage par la vérification des références puis par les critères souhaitables.',
          'Jury : trois personnes aux profils différents. Chacune déclare par écrit tout lien avec un candidat.',
        ],
      },
      {
        title: 'Construisez le rétro-planning à partir de la date de démarrage',
        actions: [
          'Partez du lundi 2 novembre et reculez : préavis du candidat, délai d\'acceptation de l\'offre, vérification des références, entretiens, test, présélection, publication.',
          'Ajoutez une marge de trois jours ouvrés avant la date limite du comité.',
          'Pour un candidat international, ajoutez les délais de permis de travail et de visa.',
        ],
      },
      {
        title: 'Faites valider (niveau 2 puis approbation)',
        actions: [
          'Envoyez le plan à A. Kavira pour avis, puis à H. Mwamba pour approbation.',
          'Demandez une réponse écrite simple : « Plan approuvé » ou ses corrections.',
          'Archivez la réponse dans le dossier de recrutement.',
        ],
      },
    ],
    table: {
      columns: ['Date', 'Jalon', 'Responsable'],
      rows: [
        ['Mar 1/09', 'Plan de recrutement approuvé ; description de poste validée', 'H. Mwamba / A. Kavira'],
        ['Mer 2/09', "Publication de l'annonce (ReliefWeb, LinkedIn, canaux locaux)", 'N. Mbusa'],
        ['Ven 11/09, 18 h', 'Clôture des candidatures', 'N. Mbusa'],
        ['Lun 14 – mar 15/09', 'Présélection sur critères écrits', 'N. Mbusa + L. Safari'],
        ['Jeu 17/09', 'Test technique écrit (8 candidats)', 'N. Mbusa'],
        ['Ven 18/09', 'Correction en aveugle, convocation des 3 meilleurs', 'L. Safari + E. Kasongo'],
        ['Lun 21/09', 'Entretiens structurés (jury de 3)', 'Jury'],
        ['Mer 23 – ven 25/09', 'Vérification des références et antécédents', 'N. Mbusa'],
        ['Lun 28/09', 'Comité de recrutement : décision', 'H. Mwamba'],
        ['Mar 29/09 – ven 2/10', "Offre envoyée, réponse du candidat", 'N. Mbusa'],
        ['Ven 16/10', 'Date limite de levée des conditions', 'N. Mbusa'],
        ['Lun 2/11', 'Prise de poste', 'Candidat retenu'],
      ],
    },
    result: "Fait quand : le plan est approuvé par écrit par le Head of Mission le 1er septembre. C'est votre Livrable 1.",
    tip: "La vérification des références doit tomber trois jours ouvrés avant le comité, jamais la veille : c'est précisément quand le temps manque qu'on la sacrifie.",
  },

  // ─── Procédure 2 — Description de poste ────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 2 — Rédiger une description de poste compétitive et inclusive (mardi 1er septembre)',
    body: "Une bonne description de poste fait la différence entre attirer les meilleurs profils disponibles et n'attirer que ceux qui n'ont pas trouvé mieux. Trois principes non négociables : des critères essentiels séparés des souhaitables, un langage inclusif, une fourchette salariale ou au moins une grille de référence.",
    bullets: [
      'Étape 1 — Poser la structure de la description de poste.',
      'Étape 2 — Rédiger les responsabilités et séparer les critères essentiels des souhaitables.',
      "Étape 3 — Passer l'audit de langage inclusif.",
      'Étape 4 — Indiquer la fourchette salariale ou la grille de référence.',
      'Étape 5 — Relire, valider et préparer la publication.',
    ],
    result: "Livrable 2 : une description de poste d'une page et demie, validée, prête à publier le lendemain.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Poser la structure de la description de poste',
    intro: "Partez du plan de recrutement validé : tout ce qu'il contient se retrouve dans l'annonce, sans rien ajouter de nouveau. Longueur cible : une page et demie.",
    steps: [
      {
        title: 'Créez le document et ses neuf sections',
        actions: [
          'Ouvrez un document Word, enregistrez-le sous « DescriptionPoste_ProgramManagerPE_v1 ».',
          'Créez les titres dans cet ordre : 1 Intitulé, lieu, contrat ; 2 Organisation et projet ; 3 But du poste ; 4 Responsabilités ; 5 Critères essentiels ; 6 Critères souhaitables ; 7 Conditions ; 8 Comment postuler ; 9 Nos engagements.',
          'Attribuez une référence unique à l\'offre : « KSS-GOM-PM-2026-01 ».',
        ],
      },
      {
        title: 'Remplissez les sections factuelles à partir du plan',
        actions: [
          'Section 1 : intitulé, lieu, durée, rattachement, taille de l\'équipe.',
          'Section 2 : cinq lignes maximum sur KSS et sur le projet (ce qu\'il fait, pour qui, avec quel bailleur).',
          'Section 3 : but du poste en deux phrases, au présent, avec un résultat.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — sections 1 à 3 rédigées',
      lines: [
        'Intitulé : Program Manager — Protection de l\'enfance (H/F). Référence : KSS-GOM-PM-2026-01.',
        'Lieu : Goma, Nord-Kivu (RDC). Contrat : CDD de 18 mois, du 02/11/2026 au 30/04/2028, sous réserve du financement.',
        'Rattachement : Coordinateur Programmes (technique) et Base Manager de Goma (administratif). Équipe : 9 personnes.',
        'Organisation et projet : Kivu Santé Solidaire est une ONG médicale internationale présente à Goma. Le projet, financé par l\'UNICEF pour 18 mois, protège les enfants des sites de déplacés autour de Goma (gestion de cas, espaces sûrs, mobilisation communautaire).',
        'But du poste : dirige l\'équipe du projet et garantit une réponse sûre et de qualité aux enfants à risque. Rend compte au bailleur et à la coordination des programmes.',
      ],
    },
    result: "Fait quand : les trois premières sections sont rédigées, tiennent sur une demi-page et ne contredisent pas le plan de recrutement.",
    tip: "Ne recopiez pas la fiche de poste d'un poste similaire d'un autre bailleur : copiez la structure, réécrivez le contenu. Les anciennes fiches embarquent des critères que personne ne vérifie plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Rédiger les responsabilités et séparer les critères essentiels des souhaitables',
    intro: "C'est le cœur du document. Les responsabilités disent ce que la personne fera, les critères disent ce qu'elle doit déjà savoir faire. Ne mélangez pas les deux.",
    steps: [
      {
        title: 'Rédigez six à huit responsabilités',
        actions: [
          'Commencez chaque ligne par un verbe d\'action : diriger, planifier, superviser, rendre compte.',
          'Reliez chaque responsabilité à un résultat du projet, pas à une activité vague.',
          'Reprenez les résultats à 90 jours de l\'étape 1 de la Procédure 1.',
        ],
      },
      {
        title: 'Recopiez les critères essentiels avec leur preuve',
        actions: [
          'Une ligne par critère, avec un seuil mesurable : « au moins 5 ans », « équipe d\'au moins 8 personnes ».',
          'Précisez la preuve demandée : CV, attestation de travail, références.',
        ],
      },
      {
        title: 'Placez les critères souhaitables dans un bloc distinct',
        actions: [
          'Titre explicite : « Un plus, sans être éliminatoire ».',
          'Ajoutez une phrase : « Si vous ne remplissez pas tous les critères souhaitables, nous vous encourageons à postuler. »',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — sections 4 à 6 rédigées',
      lines: [
        'Responsabilités : 1. Dirige une équipe de 9 personnes et assure sa formation. 2. Supervise la gestion de cas : chaque enfant à risque reçoit une réponse dans les délais fixés par les procédures du projet. 3. Planifie et suit le budget et le plan d\'action du projet. 4. Représente KSS au groupe de travail protection de l\'enfant. 5. Rédige les rapports trimestriels au bailleur. 6. Applique et fait appliquer les règles de signalement et de protection contre l\'exploitation et les abus.',
        'Indispensable (essentiel) : 5 ans d\'expérience en gestion de programmes de protection de l\'enfance en contexte humanitaire ; a dirigé une équipe d\'au moins 8 personnes ; connaît les standards de protection de l\'enfance en urgence et les règles de signalement ; a rédigé des rapports pour un bailleur institutionnel ; français courant.',
        'Un plus : kiswahili ; expérience dans l\'Est de la RDC ; formation PSEA ou safeguarding.',
      ],
    },
    result: "Fait quand : chaque critère essentiel a un seuil mesurable et une preuve ; aucun critère souhaitable n'apparaît dans le bloc des indispensables.",
    pitfall: "Mélanger essentiels et souhaitables dans une seule liste : les bons candidats qui ne cochent pas 100 % des cases ne postulent pas, et vous ne pourrez pas trier objectivement à la réception.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: "Passer l'audit de langage inclusif",
    intro: "Certaines formulations découragent implicitement des profils compétents. L'audit prend vingt minutes et se fait avec une liste de questions, ligne par ligne.",
    steps: [
      {
        title: 'Relisez le document avec les sept questions',
        actions: [
          'Les années d\'expérience exigées sont-elles le minimum réellement nécessaire ?',
          'L\'intitulé et les phrases fonctionnent-ils pour une femme comme pour un homme (H/F, formulations neutres) ?',
          'La mobilité ou la disponibilité exigées sont-elles justifiées par le poste réel ?',
          'Le diplôme exigé l\'est-il vraiment, ou peut-il être remplacé par une expérience équivalente ?',
          'Aucun critère d\'âge, de situation familiale, de religion, d\'origine ou de photo ?',
          'Aucun adjectif non observable (« jeune », « dynamique ») ?',
          'Une mention d\'aménagements possibles pour une personne en situation de handicap ?',
        ],
      },
      {
        title: 'Corrigez chaque ligne repérée et notez la raison',
        actions: [
          'Réécrivez la ligne ; conservez l\'ancienne version dans un commentaire Word avec le motif.',
          'Montrez la version corrigée à L. Safari : le sens du critère ne doit pas avoir changé.',
        ],
      },
    ],
    table: {
      columns: ['Formulation initiale', 'Problème', 'Formulation corrigée'],
      rows: [
        ['10 ans d\'expérience minimum', "Le poste est tenable avec 5 ans : écarte de bons profils", "Au moins 5 ans d'expérience en gestion de programmes de protection de l'enfance"],
        ['Le candidat doit être disponible et mobile en permanence', "Mobilité totale non justifiée par le poste réel", "Déplacements réguliers sur les sites de déplacés autour de Goma, avec chauffeur"],
        ['Jeune diplômé dynamique', "Critère d'âge implicite, adjectif non observable", "Diplôme de niveau master ou expérience équivalente"],
        ['Il sera responsable de l\'équipe', "Formulation genrée", "La personne recrutée dirigera l'équipe"],
        ['Pas de mention d\'accessibilité', "Candidats en situation de handicap découragés", "Des aménagements raisonnables sont possibles : contactez-nous"],
      ],
    },
    result: "Fait quand : les sept questions ont une réponse « oui » et chaque correction est tracée.",
    tip: "Demandez à une personne qui n'est pas du métier de lire l'annonce : si elle ne comprend pas qui peut postuler, vos candidats potentiels ne le comprendront pas non plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Indiquer la fourchette salariale ou la grille de référence',
    intro: "L'absence totale d'information salariale fait perdre un temps considérable en entretiens avec des candidats dont les attentes sont incompatibles dès le départ. Reprenez uniquement ce que la Finance a confirmé.",
    steps: [
      {
        title: 'Rédigez la section 7 « Conditions »',
        actions: [
          'Indiquez la fourchette confirmée (Procédure 1, étape 3) ou, à défaut, la grille de référence applicable.',
          'Précisez l\'unité : USD, brut, mensuel.',
          'Mentionnez que le positionnement dans la fourchette dépend de l\'expérience validée par les vérifications.',
        ],
      },
      {
        title: 'Traitez séparément le cas international',
        actions: [
          'Indiquez que, pour un contrat international, les conditions suivent la grille internationale de l\'organisation et sont communiquées avant l\'entretien final.',
          'Faites valider cette phrase par A. Kavira, qui consulte S. Lambert au siège si nécessaire.',
        ],
      },
      {
        title: 'Renvoyez les avantages à la politique RH sans les inventer',
        actions: [
          'Citez uniquement les avantages prévus par la politique RH de KSS (assurance santé, congés).',
          'Ajoutez : « Détail des conditions fourni avec l\'offre écrite. »',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 7 rédigée',
      lines: [
        'Rémunération : 2 600 à 3 200 USD brut par mois pour un contrat national (catégorie Cadre 2), selon l\'expérience validée.',
        'Contrat international : conditions selon la grille internationale de l\'organisation, communiquées avant l\'entretien final.',
        'Durée : 18 mois, du 02/11/2026 au 30/04/2028, sous réserve du financement du projet.',
        'Autres conditions (assurance santé, congés) : selon la politique RH de KSS, détaillées dans l\'offre écrite.',
      ],
    },
    result: "Fait quand : la fourchette de la description de poste est identique à celle confirmée par la Finance, au dollar près.",
    pitfall: "Écrire « salaire attractif » ou « selon profil » : ce n'est pas une information, et cela vous vaut des entretiens inutiles avec des candidats qui attendent le double.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Relire, valider et préparer la publication',
    intro: "Une annonce relue par trois personnes aux regards différents évite l'erreur qui reste en ligne dix jours. La validation de l'HR Manager est de niveau 2 dans la matrice de décision du Module 01.",
    steps: [
      {
        title: 'Faites une relecture croisée',
        actions: [
          'L. Safari relit les critères techniques et les responsabilités.',
          'A. Kavira relit la conformité à la politique RH, le contrat et la fourchette.',
          'Une personne extérieure au métier, par exemple P. Sifa, vous dit en deux phrases ce qu\'elle a compris du poste et de la manière de postuler.',
        ],
      },
      {
        title: 'Rédigez la section 8 « Comment postuler » avec précision',
        actions: [
          'Documents demandés : CV, lettre de motivation d\'une page, copies des diplômes, noms de trois références professionnelles dont le supérieur direct.',
          'Adresse de courriel dédiée au recrutement (jamais votre adresse personnelle) et objet imposé : « KSS-GOM-PM-2026-01 — Nom ».',
          'Date limite : vendredi 11 septembre 2026, 18 h heure de Goma. Étapes du processus et dates indicatives (test, entretien).',
        ],
      },
      {
        title: 'Finalisez et archivez',
        actions: [
          'Enregistrez en PDF « DescriptionPoste_KSS-GOM-PM-2026-01_v1.pdf ».',
          'Archivez la validation écrite d\'A. Kavira dans le dossier de recrutement.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — sections 8 et 9 (extrait)',
      lines: [
        'Comment postuler : envoyez CV, lettre (1 page), diplômes en copie et les noms de trois références professionnelles (dont votre supérieur direct) avant le vendredi 11 septembre 2026, 18 h (Goma).',
        'Processus : présélection sur les critères indispensables, test écrit le 17 septembre, entretiens le 21 septembre, vérification des références avant toute offre.',
        'Nos engagements : KSS est un employeur qui offre l\'égalité des chances à toutes les candidatures. Nous appliquons une tolérance zéro envers l\'exploitation, les abus et le harcèlement ; les vérifications d\'antécédents font partie de notre processus.',
      ],
    },
    result: "Fait quand : le PDF est validé par écrit, la date limite et l'adresse figurent dans l'annonce, et le plan de publication est prêt. C'est votre Livrable 2.",
    pitfall: "Oublier de demander le nom du supérieur direct parmi les références, puis découvrir à l'étape 6 que le candidat n'en a fourni aucun : annoncez-le dès l'annonce.",
  },

  // ─── Procédure 3 — Publier et présélectionner ──────────────────────────
  {
    type: 'concept',
    title: 'Procédure 3 — Publier et présélectionner sur critères écrits (mercredi 2 – mardi 15 septembre)',
    body: "Publier sur les bons canaux, puis présélectionner uniquement sur les critères essentiels définis à la Procédure 1, appliqués de façon identique à tous les dossiers. Pas sur une impression de mise en page du CV. Documenter pourquoi chaque candidat non retenu ne correspond pas aux critères est votre protection en cas de contestation, et une exigence de plus en plus fréquente des bailleurs.",
    bullets: [
      'Étape 1 — Choisir les canaux de publication nationaux et internationaux.',
      "Étape 2 — Publier et ouvrir le registre des candidatures.",
      "Étape 3 — Construire la grille de présélection avant d'ouvrir le premier CV.",
      'Étape 4 — Appliquer la grille à tous les dossiers.',
      'Étape 5 — Documenter les non-retenus et convoquer la liste courte.',
    ],
    result: 'Livrable 3 : le registre des candidatures, la grille de présélection remplie et la liste courte motivée.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Choisir les canaux de publication',
    intro: "Le poste est ouvert aux candidats nationaux et internationaux : il faut donc deux familles de canaux. Chaque canal est choisi pour un public précis, pas par habitude.",
    steps: [
      {
        title: 'Dressez la liste des canaux par public visé',
        actions: [
          'International et sectoriel : ReliefWeb (reliefweb.int/jobs), LinkedIn, réseaux du secteur (Bond, CHS Alliance, groupes LinkedIn RH humanitaire).',
          'National : universités de Goma et de la région, réseaux professionnels du pays, groupe de travail protection de l\'enfant, presse locale, affichage au bureau de la base.',
        ],
      },
      {
        title: 'Vérifiez les conditions de chaque canal',
        actions: [
          'Demandez à A. Kavira si KSS a un compte ReliefWeb et qui publie ; sinon demandez la création ou la délégation.',
          'Notez le coût éventuel et le délai de mise en ligne de chaque canal.',
          'Prévoyez la même date de clôture sur tous les canaux.',
        ],
      },
      {
        title: 'Préparez une version courte pour les réseaux',
        actions: [
          'Un texte de cinq lignes : intitulé, lieu, contrat, date limite, lien vers la description de poste en PDF.',
          'Aucune information qui ne figure pas dans la description validée.',
        ],
      },
    ],
    table: {
      columns: ['Canal', 'Public touché', 'Délai de mise en ligne', 'Responsable'],
      rows: [
        ['ReliefWeb', 'Humanitaires de la région et internationaux', '24 à 48 h', 'N. Mbusa'],
        ['LinkedIn', 'Profils de la région, réseau de L. Safari', 'Immédiat', 'N. Mbusa'],
        ['Groupe de travail protection de l\'enfant', 'Professionnels déjà présents à Goma', 'Immédiat (message au coordinateur)', 'L. Safari'],
        ['Universités de la région (psychologie, sciences sociales)', 'Jeunes cadres nationaux', '2 à 3 jours (courrier au service des carrières)', 'P. Sifa'],
      ],
    },
    result: "Fait quand : chaque canal a un responsable, un délai et le même texte validé ; la date de clôture est identique partout.",
    tip: "Pour un recrutement national, les canaux locaux sont souvent ceux qui rapportent les meilleurs profils : ne vous contentez pas de ReliefWeb.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: "Publier et ouvrir le registre des candidatures",
    intro: "Dès la mise en ligne, chaque dossier reçu doit laisser une trace. Un registre simple vous évite de perdre une candidature et sert de preuve de traitement équitable.",
    steps: [
      {
        title: 'Publiez le mercredi 2 septembre',
        actions: [
          'Mettez en ligne la description de poste PDF et la version courte sur tous les canaux.',
          'Relevez l\'URL de chaque publication et la date dans votre dossier de recrutement.',
          'Configurez une réponse automatique : « Votre dossier est bien reçu. Réponse à tous les candidats après le 18 septembre. »',
        ],
      },
      {
        title: 'Ouvrez le registre des candidatures',
        actions: [
          'Créez un classeur Excel « Registre_KSS-GOM-PM-2026-01 ».',
          'Colonnes : N° d\'ordre / Date de réception / Canal d\'origine / Dossier complet (oui-non) / Décision / Motif.',
          'Attribuez à chaque dossier un numéro, et enregistrez le dossier sous « C-001_Nom ».',
        ],
      },
      {
        title: 'Tenez le registre chaque jour',
        actions: [
          'Chaque soir, saisissez les candidatures reçues et le canal d\'origine.',
          'N\'ouvrez pas encore les CV pour juger : saisissez seulement la réception.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état du registre le vendredi 11 septembre, 18 h',
      lines: [
        '46 candidatures reçues : ReliefWeb 24, LinkedIn 11, canaux locaux 11 (24 + 11 + 11 = 46).',
        'Une candidature arrivée à 18 h 20 : enregistrée avec la mention « hors délai » ; décision à prendre avec L. Safari selon la règle écrite dans l\'annonce.',
        'Dossiers sans diplôme en copie : 7, signalés « dossier incomplet ».',
      ],
    },
    result: "Fait quand : chaque candidature reçue a un numéro, une date et un canal d'origine dans le registre.",
    pitfall: "Accepter des candidatures envoyées à plusieurs adresses personnelles : certaines se perdent et vous ne pouvez plus prouver que tous les dossiers ont été traités.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: "Construire la grille de présélection avant d'ouvrir le premier CV",
    intro: "La grille est écrite à partir des critères essentiels du plan de recrutement. Elle est figée avant la lecture des dossiers : on ne l'ajuste jamais en fonction des candidatures déjà lues.",
    steps: [
      {
        title: 'Définissez deux critères éliminatoires (oui ou non)',
        actions: [
          'Dossier complet : CV, lettre, copies de diplôme.',
          'Au moins 3 ans d\'expérience en protection de l\'enfance en contexte humanitaire (seuil minimal sous le critère essentiel de 5 ans).',
        ],
      },
      {
        title: 'Notez les cinq critères essentiels sur 2 points chacun',
        actions: [
          'Oui, pleinement démontré dans le dossier : 2 points. Partiellement : 1 point. Non : 0 point.',
          'Total maximum : 10 points. Seuil de liste courte : 8 points.',
        ],
      },
      {
        title: 'Écrivez la règle de départage et de liste de réserve',
        actions: [
          'Entre deux dossiers à 8 points, le nombre de critères souhaitables départage.',
          'Les dossiers à 7 points forment la liste de réserve.',
        ],
      },
    ],
    table: {
      columns: ['Critère essentiel', 'Oui (2 points)', 'Partiel (1 point)', 'Non (0 point)'],
      rows: [
        ['C1 — Gestion de programmes de protection de l\'enfance', '5 ans ou plus', '3 à 4 ans', 'Moins de 3 ans'],
        ['C2 — Équipe dirigée', '8 personnes ou plus', '4 à 7 personnes', 'Moins de 4 ou non précisé'],
        ['C3 — Standards et signalement', 'Formation ou pratique documentée', 'Mentionné sans détail', 'Absent'],
        ['C4 — Reporting à un bailleur institutionnel', 'Rapports rédigés, bailleur cité', 'Contribution partielle', 'Absent'],
        ['C5 — Français courant', 'Dossier irréprochable', 'Quelques erreurs', 'Insuffisant'],
      ],
    },
    result: "Fait quand : la grille est enregistrée avec sa date AVANT la première lecture de CV, et L. Safari l'a validée.",
    pitfall: "Ajuster le seuil ou les critères après avoir lu quelques CV « pour avoir plus de monde » : vous perdez la neutralité du tri et la capacité de le défendre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Appliquer la grille à tous les dossiers de la même façon',
    intro: "Deux passes : d'abord les critères éliminatoires sur les 46 dossiers, puis la notation des essentiels sur ceux qui restent. Deux lecteurs se partagent les cas limites.",
    steps: [
      {
        title: 'Passe 1 : critères éliminatoires',
        actions: [
          'Dans le registre, remplissez la colonne « Dossier complet » puis « Au moins 3 ans ».',
          'Écartez un dossier uniquement si un critère éliminatoire est clairement non rempli, et notez le motif exact dans la colonne Motif.',
        ],
      },
      {
        title: 'Passe 2 : notation des cinq critères essentiels',
        actions: [
          'Ajoutez les colonnes C1 à C5 et Total dans le registre.',
          'Notez chaque dossier, un critère après l\'autre, sur tous les dossiers, plutôt qu\'un dossier après l\'autre.',
          'Calculez le total avec la formule =SOMME(Fn:Jn).',
        ],
      },
      {
        title: 'Faites relire les cas limites',
        actions: [
          'Demandez à L. Safari de noter indépendamment les dossiers à 7 ou 8 points.',
          'En cas d\'écart, discutez sur la base du texte du dossier, pas de l\'impression.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — résultats de la présélection (14 et 15 septembre)',
      lines: [
        '46 dossiers reçus. Écartés par les critères éliminatoires : 19 (7 dossiers incomplets + 12 avec moins de 3 ans d\'expérience). Reste : 27.',
        'Sur les 27 notés : 8 dossiers à 8 points ou plus (liste courte), 6 à 7 points (liste de réserve), 13 en dessous.',
        'Contrôle : 19 + 8 + 6 + 13 = 46.',
        'Les candidats A, B et C du reste du module sont dans la liste courte : A = C-014 (9 points), B = C-031 (9 points), C = C-038 (8 points).',
      ],
    },
    result: "Fait quand : chaque dossier a une décision et un motif dans le registre, et les totaux se recoupent (19 + 8 + 6 + 13 = 46).",
    pitfall: "Écarter un dossier sur sa mise en page ou sa photo : ce critère n'est pas dans la grille, il ne peut donc pas justifier une décision.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Documenter les non-retenus et convoquer la liste courte',
    intro: "Le motif de chaque non-sélection est déjà dans le registre. Il reste à informer les candidats correctement et à convoquer les huit retenus dans le délai prévu.",
    steps: [
      {
        title: 'Convoquez les 8 candidats retenus',
        actions: [
          'Envoyez le courriel le mardi 15 septembre : date, durée (2 h), lieu, matériel autorisé, code anonyme du candidat.',
          'Demandez une confirmation de présence avant le mercredi 16 septembre à midi.',
        ],
      },
      {
        title: 'Préparez les réponses aux autres candidats',
        actions: [
          'Rédigez deux modèles : « non retenu » et « conservé en réserve ».',
          'Prévoyez l\'envoi après la clôture de la phase de tests, pour ne pas fragiliser la liste de réserve.',
        ],
      },
      {
        title: 'Archivez',
        actions: [
          'Enregistrez le registre complet, la grille et les décisions dans le dossier de recrutement.',
          'Appliquez la durée de conservation prévue par la politique RH pour les candidatures non retenues.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — courriel de convocation (extrait)',
      lines: [
        'Objet : KSS-GOM-PM-2026-01 — Test écrit du jeudi 17 septembre',
        'Bonjour, votre candidature est retenue pour l\'étape suivante : un test écrit de 2 heures le jeudi 17 septembre 2026, à 9 h, dans les locaux de KSS à Goma.',
        'Votre code candidat est T-0X ; ne l\'écrivez que sur votre copie, pas votre nom.',
        'Merci de confirmer votre présence avant le mercredi 16 septembre à 12 h.',
      ],
    },
    result: "Fait quand : les 8 candidats ont confirmé et les modèles de réponse aux autres candidats sont prêts. C'est votre Livrable 3.",
    tip: "Gardez une liste de réserve : si un candidat se désiste ou si une vérification de références tourne mal, vous gagnez des semaines.",
  },

  // ─── Procédure 4 — Tests techniques ────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 4 — Tester techniquement les candidats de la liste courte (jeudi 17 – vendredi 18 septembre)',
    body: "Pour les postes techniques (finance, logistique, IT, coordination de programme), un test pratique court avant l'entretien élimine les candidats qui parlent bien mais ne maîtrisent pas les compétences annoncées. Le test est identique pour tous, et corrigé avec une grille écrite à l'avance, jamais improvisée après coup en fonction des résultats.",
    bullets: [
      'Étape 1 — Décider si un test est justifié pour ce poste.',
      'Étape 2 — Concevoir le test et sa grille de correction avant de le diffuser.',
      'Étape 3 — Organiser la passation à l\'identique pour tous.',
      'Étape 4 — Corriger en aveugle et sélectionner les candidats à interviewer.',
    ],
    result: 'Livrable 4 : le test, sa grille de correction, les copies anonymes corrigées et la liste des 3 candidats convoqués.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Décider si un test est justifié pour ce poste',
    intro: "Un test coûte du temps aux candidats et à votre équipe : il n'est justifié que s'il mesure une compétence que l'entretien seul ne vérifie pas.",
    steps: [
      {
        title: 'Posez trois questions',
        actions: [
          'Le poste exige-t-il une compétence technique qu\'on peut montrer par écrit en deux heures ?',
          'L\'entretien seul risque-t-il de récompenser quelqu\'un qui parle bien sans maîtriser le sujet ?',
          'Peut-on corriger le test de façon objective, avec une grille ?',
        ],
      },
      {
        title: 'Décidez avec le hiring manager et consignez la décision',
        actions: [
          'Trois oui : test écrit. Au moins un non : mise en situation orale dans l\'entretien, ou pas de test.',
          'Notez la décision dans le plan de recrutement, avec la durée prévue du test.',
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Test utile ?', 'Forme de test'],
      rows: [
        ['Program Manager Protection de l\'enfance', 'Oui', 'Cas pratique écrit de 2 heures : plan, gestion de cas, budget, note au bailleur'],
        ['Comptable de base', 'Oui', 'Exercice de saisie et de rapprochement bancaire'],
        ['Chauffeur', 'Oui, mais pratique', 'Conduite et contrôle du véhicule, avec une grille de notation'],
        ['Gardien de nuit', 'Rarement écrit', 'Entretien structuré et références ; pas de test écrit'],
      ],
    },
    result: "Fait quand : la décision « test écrit de 2 heures » est écrite dans le plan de recrutement et L. Safari l'a approuvée.",
    tip: "Un test trop long décourage les bons candidats déjà en poste. Deux heures sont un maximum raisonnable pour un test d'entrée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Concevoir le test et sa grille de correction avant de le diffuser',
    intro: "La grille de correction est écrite avant que le premier candidat ne passe le test. C'est ce qui garantit que tous sont jugés sur les mêmes critères, quels que soient leurs réponses.",
    steps: [
      {
        title: 'Rédigez quatre questions liées aux critères essentiels',
        actions: [
          'Une question par compétence centrale du poste, avec un contexte court et réaliste.',
          'Précisez le livrable attendu pour chaque question (une page, un tableau, un message).',
        ],
      },
      {
        title: 'Écrivez la grille de correction, question par question',
        actions: [
          'Pour chaque question, listez les éléments attendus et les points attribués.',
          'Ajoutez 2 points pour la clarté de la rédaction, pour un total de 20.',
          'Fixez le seuil d\'admission à l\'entretien : 13 sur 20.',
        ],
      },
      {
        title: 'Faites tester le sujet',
        actions: [
          'Demandez à L. Safari de résoudre le test en temps réel : s\'il ne tient pas en 2 heures, raccourcissez-le.',
          'Corrigez les ambiguïtés détectées avant diffusion.',
        ],
      },
    ],
    table: {
      columns: ['Question', 'Éléments attendus', 'Points'],
      rows: [
        ['Q1 — Plan de démarrage à 90 jours', 'Recrutement et formation de l\'équipe, cartographie des sites, procédures de gestion de cas, calendrier réaliste', '6'],
        ['Q2 — Gestion d\'un signalement d\'abus sur un enfant', 'Sécurité de l\'enfant d\'abord, confidentialité, consentement, référencement, information de la hiérarchie dans le délai, aucune enquête menée par le programme', '5'],
        ['Q3 — Analyse d\'un tableau budgétaire', 'Détection de la ligne sur-consommée, calcul de l\'écart, mesure corrective', '4'],
        ['Q4 — Note de 10 lignes au bailleur', 'Retard annoncé, cause, plan correctif, demande claire', '3'],
        ['Clarté de la rédaction', 'Structure, orthographe, concision', '2'],
      ],
    },
    result: "Fait quand : le sujet, la grille sur 20, le seuil de 13 et la durée de 2 heures sont écrits et enregistrés avant la diffusion.",
    pitfall: "Corriger sans grille écrite à l'avance, puis ajuster le barème en fonction des copies reçues : le test n'est plus identique pour tous, donc plus défendable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Organiser la passation à l\'identique pour tous',
    intro: "Des conditions de passation différentes rendent les scores incomparables. Même salle (ou même plateforme), même durée, mêmes consignes, même matériel pour les huit candidats.",
    steps: [
      {
        title: 'Préparez la salle et les copies',
        actions: [
          'Réservez une salle à Goma pour le jeudi 17 septembre, 9 h à 11 h.',
          'Imprimez le sujet et préparez des copies numérotées avec les codes T-01 à T-08, sans nom.',
          'Prévoyez un surveillant : P. Sifa, qui ne note pas le test.',
        ],
      },
      {
        title: 'Lisez les consignes, identiques pour tous',
        actions: [
          'Durée de 2 heures, aucun téléphone, documents autorisés : aucun.',
          'Répétez que seul le code figure sur la copie.',
          'Notez l\'heure de début et de fin de chaque candidat.',
        ],
      },
      {
        title: 'Traitez les cas particuliers par écrit',
        actions: [
          'Un candidat à distance passe le test à la même heure, avec le même sujet, sur une plateforme surveillée.',
          'Une personne en situation de handicap bénéficie d\'un aménagement (temps supplémentaire) décidé avant le test et noté dans le dossier.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — passation du jeudi 17 septembre',
      lines: [
        '8 candidats convoqués, 8 présents. Début 9 h 05, fin 11 h 05 pour tous.',
        'Un retard de 10 minutes d\'un candidat : début décalé pour lui, fin 11 h 15, noté sur le procès-verbal signé par P. Sifa.',
        'Codes distribués au hasard : T-03 = candidat A, T-05 = candidat B, T-07 = candidat C (la correspondance code-nom reste sous clé chez N. Mbusa).',
      ],
    },
    result: "Fait quand : les 8 copies anonymes sont collectées, le procès-verbal de passation est signé, la table code-nom est conservée à part.",
    tip: "Un candidat peut contester si les conditions n'étaient pas égales. Un procès-verbal court et daté est la meilleure défense.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Corriger en aveugle et sélectionner les candidats à interviewer',
    intro: "Deux correcteurs notent chaque copie séparément, sans connaître le nom du candidat, avec la grille écrite à l'étape 2.",
    steps: [
      {
        title: 'Faites corriger chaque copie par deux personnes',
        actions: [
          'L. Safari et E. Kasongo corrigent chacun les 8 copies, sans se parler.',
          'Chacun note question par question dans un tableau Excel avec les colonnes Q1, Q2, Q3, Q4, Clarté, Total.',
        ],
      },
      {
        title: 'Rapprochez les notes',
        actions: [
          'Calculez la moyenne des deux totaux pour chaque copie.',
          'Si deux notes diffèrent de plus de 2 points sur le total, faites relire la copie par un troisième correcteur (A. Kavira).',
        ],
      },
      {
        title: 'Levez l\'anonymat et sélectionnez',
        actions: [
          'Appliquez le seuil de 13 sur 20.',
          'Seulement ensuite, associez les codes aux noms avec votre table.',
          'Convoquez les candidats au-dessus du seuil.',
        ],
      },
    ],
    table: {
      columns: ['Code', 'Correcteur 1', 'Correcteur 2', 'Moyenne', 'Décision'],
      rows: [
        ['T-01', '11', '11', '11', 'Non retenu'],
        ['T-02', '9', '9', '9', 'Non retenu'],
        ['T-03 (candidat A)', '15', '15', '15', 'Convoqué'],
        ['T-04', '12', '12', '12', 'Non retenu'],
        ['T-05 (candidat B)', '16', '16', '16', 'Convoqué'],
        ['T-06', '10', '10', '10', 'Non retenu'],
        ['T-07 (candidat C)', '14', '14', '14', 'Convoqué'],
        ['T-08', '12', '12', '12', 'Non retenu'],
      ],
    },
    result: "Fait quand : trois candidats au-dessus du seuil de 13 sont convoqués pour le lundi 21 septembre, avec la liste des notes archivée. C'est votre Livrable 4.",
    pitfall: "Lever l'anonymat avant la fin de la correction : vous risquez de relire généreusement la copie d'un candidat que vous connaissez déjà.",
  },

  // ─── Procédure 5 — Entretien structuré avec la grille ──────────────────
  {
    type: 'concept',
    title: 'Procédure 5 — Conduire les entretiens avec la grille structurée (lundi 21 septembre)',
    body: "C'est la procédure où le template grille-entretien-structure-evaluation.xlsx est utilisé de bout en bout. Principe fondamental : les mêmes questions, dans le même ordre, à tous les candidats. Chaque réponse est notée sur le moment avec une justification concrète, jamais de mémoire à la fin de la journée. Le fichier calcule le score pondéré et classe les candidats côte à côte.",
    bullets: [
      "Étape 1 — Ouvrir la grille et l'adapter au poste (onglet Grille Entretien, colonnes A à H).",
      "Étape 2 — Préparer le jury, les repères de notation et le plan d'entretien.",
      "Étape 3 — Accueillir et ouvrir chaque entretien de façon identique.",
      "Étape 4 — Conduire l'entretien et noter en direct (colonnes F et H).",
      "Étape 5 — Calibrer les notes du jury et saisir les scores consolidés.",
      "Étape 6 — Lire l'onglet Comparaison candidats (colonnes C, D, E) et appliquer la règle de décision.",
      "Étape 7 — Rendre compte au comité et archiver.",
    ],
    result: 'Livrable 5 : le classeur rempli pour trois candidats, avec classement calculé, justifications écrites et compte rendu du jury.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 7',
    title: "Ouvrir la grille et l'adapter au poste, colonne par colonne",
    intro: "Le template est livré avec des scores d'exemple (79, 78 et 71 sur 100) et des candidats nommés « Candidat A », « Candidat B (profil Emeka) » et « Candidat C ». Vous allez le préparer avant le premier entretien, sans toucher aux formules.",
    steps: [
      {
        title: 'Enregistrez et lisez la structure',
        actions: [
          'Ouvrez le classeur et enregistrez-le sous « Grille_KSS-GOM-PM-2026-01.xlsx ».',
          'Lignes 1 à 3 : titre et rappel de la règle. Ligne 4 : en-têtes A à H. Lignes 5 à 9, 11 à 15 et 17 à 21 : un bloc de cinq compétences par candidat. Lignes 10, 16 et 22 : totaux. Lignes 24 et 25 : légende du score.',
          'Colonne G (Score pondéré) et colonne de total : ne les modifiez jamais, elles contiennent des formules.',
        ],
      },
      {
        title: 'Vérifiez les compétences, les questions et les pondérations',
        actions: [
          'Colonne C : les cinq compétences correspondent-elles aux critères essentiels du plan ? Ici oui (expérience technique, gestion d\'équipe, communication, résolution de problèmes, valeurs et éthique).',
          'Colonne D : conservez les questions identiques dans les trois blocs ; ajoutez des relances communes dans la même cellule, par exemple « Relances : votre rôle exact ? résultat chiffré ? »',
          'Colonne E : les pondérations (25, 20, 20, 20, 15) doivent totaliser 100. Contrôlez avec =SOMME(E5:E9) dans une cellule libre hors du tableau, puis effacez-la.',
        ],
      },
      {
        title: 'Remplacez les noms et videz les scores d\'exemple',
        actions: [
          'Colonne A, lignes 5 à 9, 11 à 15, 17 à 21 : remplacez par le nom du candidat, par exemple « Candidat A — M. Kahindo », sur les cinq lignes du bloc.',
          'Retapez aussi le libellé dans les lignes de total A10, A16 et A22.',
          'Sélectionnez F5:F22, appuyez sur Suppr : effacez les scores d\'exemple. Effacez aussi la colonne H.',
          'Onglet Comparaison candidats : retapez les mêmes noms, exactement, dans A5, A6 et A7.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — grille prête pour les entretiens du 21 septembre',
      lines: [
        'Colonne A : « Candidat A — M. Kahindo », « Candidat B — C. Ndayizeye », « Candidat C — F. Salim » (noms fictifs).',
        'Colonne B : « Program Manager — Protection Enfance » (conservé).',
        'Compétences et pondérations : Expérience technique du poste 25 ; Gestion d\'équipe et leadership 20 ; Communication et parties prenantes 20 ; Résolution de problèmes sous contrainte 20 ; Valeurs et éthique humanitaire 15 ; total 100.',
        'Colonne D, ajout de relances communes, par exemple pour la ligne Expérience technique : « Décrivez une situation où vous avez dû assumer une responsabilité clé de ce poste. Quel a été le résultat concret ? Relances : votre rôle exact ? Combien de personnes ? Quel chiffre ? »',
        'Colonnes F et H vides ; colonne G affiche 0.',
      ],
    },
    result: "Fait quand : les noms sont identiques dans les deux onglets, les pondérations totalisent 100, les scores d'exemple sont effacés et les formules sont intactes.",
    pitfall: "Renommer un candidat dans l'onglet Grille Entretien sans retaper exactement le même nom dans l'onglet Comparaison : la formule SOMME.SI ne trouve rien et le total du candidat affiche 0.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 7',
    title: 'Préparer le jury, les repères de notation et le plan d\'entretien',
    intro: "Une grille de 1 à 5 sans repères écrits devient vite un « 3 par défaut ». Écrivez, avant l'entretien, ce que vaut un 1, un 3 et un 5 pour chaque compétence.",
    steps: [
      {
        title: 'Constituez le jury et déclarez les liens',
        actions: [
          'Trois personnes : L. Safari (hiring manager), E. Kasongo (Base Manager), N. Mbusa (RH).',
          'Chacun écrit par courriel tout lien avec un candidat avant la séance, et le jury décide de la parade.',
          'Chaque évaluateur dispose de sa propre copie du fichier, nommée avec ses initiales.',
        ],
      },
      {
        title: 'Écrivez les repères de notation de chaque compétence',
        actions: [
          'Un repère pour le niveau 1, un pour 3, un pour 5, en comportements observables.',
          'Imprimez la légende de la ligne 25 du fichier et les repères.',
        ],
      },
      {
        title: 'Fixez le plan d\'entretien',
        actions: [
          '60 minutes par candidat : accueil 5, cinq questions 35, questions du candidat 10, clôture 5, puis 10 minutes pour noter.',
          'Ordre de passage tiré au sort.',
          'Une seule personne pose les questions ; les deux autres écoutent et notent.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — préparation du lundi 21 septembre',
      lines: [
        'Lien déclaré : L. Safari a croisé le candidat B lors d\'une réunion inter-agences en 2023. Parade : il reste dans le jury, note comme les autres et s\'exprimera en dernier lors du calibrage.',
        'Ordre tiré au sort : C à 9 h, A à 11 h, B à 14 h 30. Le candidat B passe en dernier : risque de biais de récence, d\'où la règle de noter dans les 10 minutes qui suivent chaque entretien.',
        'Repères, compétence « Gestion d\'équipe et leadership » : 1 = ne cite aucune situation vécue ; 3 = décrit un conflit résolu avec une action personnelle claire mais un résultat vague ; 5 = situation précise, action personnelle, résultat vérifiable et leçon tirée.',
      ],
    },
    result: "Fait quand : trois copies du fichier existent, les liens sont déclarés par écrit et les repères 1-3-5 sont imprimés pour chacune des cinq compétences.",
    tip: "Faites relire les repères par L. Safari : une même compétence peut vouloir dire autre chose pour le technique et pour la RH, mieux vaut le découvrir avant l'entretien qu'au moment de comparer les notes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 7',
    title: 'Accueillir et ouvrir chaque entretien de façon identique',
    intro: "L'ouverture est identique pour tous : même texte, même durée. Elle met le candidat à l'aise sans lui donner d'avantage.",
    steps: [
      {
        title: 'Lisez le même texte d\'ouverture à chaque candidat',
        actions: [
          'Présentez les trois membres du jury et leur rôle.',
          'Annoncez la structure : cinq questions identiques pour tous les candidats, des notes prises pendant l\'entretien, des questions du candidat à la fin.',
          'Précisez la suite : des vérifications de références auront lieu avant toute offre, avec son accord.',
        ],
      },
      {
        title: 'Posez les questions dans l\'ordre de la grille',
        actions: [
          'Lisez la question telle qu\'écrite en colonne D, sans la reformuler.',
          'Utilisez uniquement les relances écrites en colonne D.',
          'Si le candidat répond déjà à une question suivante, notez-le, mais posez quand même la question suivante.',
        ],
      },
      {
        title: 'Fermez l\'entretien identiquement',
        actions: [
          'Demandez les noms de trois références professionnelles, dont le supérieur direct, et l\'accord du candidat pour les contacter.',
          'Demandez la durée de préavis et la prétention salariale, mêmes questions pour tous (informations non notées).',
          'Annoncez la date à laquelle il aura des nouvelles.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte d\'ouverture (extrait)',
      lines: [
        'Bonjour, merci d\'être venu. Voici L. Safari, Coordinateur Programmes, E. Kasongo, Base Manager de Goma, et moi-même, HR Officer.',
        'Nous posons les mêmes cinq questions à tous les candidats et nous prenons des notes pour être justes avec chacun.',
        'À la fin, vous pourrez poser vos questions. Avant toute offre, nous vérifions les références, avec votre accord.',
      ],
    },
    result: "Fait quand : les trois candidats ont reçu le même texte d'ouverture, la même série de questions et la même clôture.",
    pitfall: "Improviser une question « parce que le feeling était bon avec ce candidat » : vous brisez la comparabilité et vous ne pourrez plus défendre le classement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 7',
    title: 'Conduire l\'entretien et noter en direct, colonnes F et H',
    intro: "Notez sur le moment. Chaque score de la colonne F s'appuie sur une observation écrite en colonne H : ce que le candidat a dit, pas ce que vous en pensez.",
    steps: [
      {
        title: 'Notez la réponse pendant qu\'elle est donnée',
        actions: [
          'Dans votre copie du fichier, restez sur le bloc du candidat en cours.',
          'En colonne H, écrivez trois éléments : la situation décrite, l\'action personnelle du candidat, le résultat cité.',
          'Notez des phrases courtes, avec des chiffres quand il y en a.',
        ],
      },
      {
        title: 'Attribuez le score de 1 à 5 en colonne F',
        actions: [
          'Comparez ce que vous avez noté aux repères 1-3-5 de l\'étape 2.',
          'Saisissez un entier de 1 à 5 : la cellule refuse tout autre nombre et affiche « Score invalide ».',
          'Vérifiez que la colonne G se calcule : par exemple 4 sur une pondération de 25 donne 20.',
        ],
      },
      {
        title: 'Terminez dans les 10 minutes qui suivent',
        actions: [
          'Complétez les cinq lignes avant le candidat suivant.',
          'Ne relisez pas les notes des candidats précédents avant d\'avoir fini le bloc en cours.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait des notes de N. Mbusa pour le candidat B (colonnes F et H)',
      lines: [
        'Expérience technique, F = 5 : « A décrit la mise en place d\'un système de gestion de cas sur 3 sites, 140 enfants suivis, délai de prise en charge ramené de 10 à 4 jours. Chiffres précis, rôle personnel clair. »',
        'Gestion d\'équipe, F = 4 : « Conflit entre deux assistants sociaux résolu par une médiation puis une réaffectation. Action claire, résultat à 3 mois non précisé. »',
        'Communication avec le bailleur, F = 3 : « Exemple de retard annoncé au bailleur, mais le message difficile est resté vague. »',
        'Résolution de problèmes, F = 3 : « Décision rapide décrite sans mention de l\'information manquante ni du risque assumé. »',
        'Valeurs et éthique, F = 3 : « Définit la neutralité par la théorie ; exemple vécu peu précis. »',
      ],
    },
    result: "Fait quand : chaque ligne du bloc a un score entier en F et une observation concrète en H, saisis avant le candidat suivant.",
    pitfall: "Noter de mémoire à la fin de la journée : le dernier candidat est sur-évalué par le biais de récence, et vous n'avez plus de justification pour la colonne H.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 7',
    title: 'Calibrer les notes du jury et saisir les scores consolidés',
    intro: "Après les trois entretiens, les trois copies du fichier sont comparées ligne par ligne. L'objectif n'est pas la moyenne mais un score défendable pour chaque ligne.",
    steps: [
      {
        title: 'Comparez les trois copies, ligne par ligne',
        actions: [
          'Projetez un tableau avec les notes de F des trois évaluateurs pour chaque candidat et chaque compétence.',
          'Repérez les lignes où l\'écart entre deux évaluateurs est de 2 points ou plus.',
        ],
      },
      {
        title: 'Discutez uniquement les écarts, sur les observations de la colonne H',
        actions: [
          'Chaque évaluateur lit sa justification ; le plus senior parle en dernier.',
          'Visez un consensus sur un entier. Si aucun accord, l\'avis du hiring manager sur la compétence technique et celui de la RH sur les valeurs prévalent, mais notez-le.',
        ],
      },
      {
        title: 'Saisissez les scores consolidés dans le fichier maître',
        actions: [
          'Dans le fichier « Grille_KSS-GOM-PM-2026-01.xlsx », saisissez le score consolidé en colonne F et la justification retenue en colonne H.',
          'Conservez les trois copies individuelles dans le dossier de recrutement.',
        ],
      },
    ],
    table: {
      columns: ['Compétence (pondération)', 'Candidat A', 'Candidat B', 'Candidat C'],
      rows: [
        ['Expérience technique (25)', '4 → 20', '5 → 25', '3 → 15'],
        ['Gestion d\'équipe et leadership (20)', '3 → 12', '4 → 16', '4 → 16'],
        ['Communication et parties prenantes (20)', '4 → 16', '3 → 12', '3 → 12'],
        ['Résolution de problèmes sous contrainte (20)', '3 → 12', '3 → 12', '3 → 12'],
        ['Valeurs et éthique humanitaire (15)', '4 → 12', '3 → 9', '4 → 12'],
        ['Total pondéré (colonne G, lignes 10, 16, 22)', '72', '74', '67'],
      ],
    },
    result: "Fait quand : les 15 lignes ont un score consolidé et une justification en H, et les trois totaux sont 72, 74 et 67.",
    tip: "Pour la ligne « Gestion d'équipe » du candidat B, les évaluateurs avaient noté 5, 3 et 4. La discussion a porté sur le résultat à 3 mois, absent de la réponse : consensus à 4.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 7',
    title: 'Lire l\'onglet Comparaison candidats et appliquer la règle de décision',
    intro: "L'onglet Comparaison candidats est calculé automatiquement à partir de l'onglet Grille Entretien. Il ne se modifie jamais à la main : vous lisez, vous n'écrivez pas dans les colonnes C, D et E.",
    steps: [
      {
        title: 'Lisez les colonnes calculées',
        actions: [
          'Colonne C « Total pondéré (/100) » : =SOMME.SI sur le nom du candidat dans l\'onglet Grille Entretien.',
          'Colonne D « Rang » : =RANG du total parmi les trois candidats.',
          'Colonne E « Recommandation » : 70 ou plus = « Recommandé au comité final » ; 50 à 69 = « À rediscuter en comité » ; moins de 50 = « Non recommandé en l\'état ».',
        ],
      },
      {
        title: 'Appliquez la règle de décision écrite au plan de recrutement',
        actions: [
          'Calculez l\'écart entre les deux premiers : écart inférieur à 3 points = ex æquo.',
          'En cas d\'ex æquo, ne décidez pas sur les points : départagez par la vérification des références, puis par les critères souhaitables.',
        ],
      },
      {
        title: 'Si vous interviewez plus de trois candidats, étendez le fichier',
        actions: [
          'Onglet Grille Entretien : copiez le bloc du dernier candidat (lignes 17 à 22), sélectionnez la ligne 17, clic droit > Insérer les cellules copiées. Les plages se prolongent.',
          'Onglet Comparaison : insérez une ligne entre deux lignes existantes, recopiez les formules de C, D et E, tapez le nom exact en A, puis contrôlez que la plage de la colonne D s\'est étendue.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — onglet Comparaison candidats après saisie',
      lines: [
        'Candidat A — M. Kahindo : total 72, rang 2, « Recommandé au comité final ».',
        'Candidat B — C. Ndayizeye : total 74, rang 1, « Recommandé au comité final ».',
        'Candidat C — F. Salim : total 67, rang 3, « À rediscuter en comité ».',
        'Écart entre B et A : 74 − 72 = 2 points, inférieur à 3 : ex æquo. La décision ne se fait pas sur les points mais sur la vérification des références.',
      ],
    },
    result: "Fait quand : vous savez lire les trois colonnes calculées, l'écart entre les deux premiers est calculé et la règle de départage est appliquée.",
    pitfall: "Modifier une formule de l'onglet Comparaison pour « faire apparaître » le candidat préféré en rang 1 : vous perdez toute valeur probante du fichier, et un audit bailleur le détecterait.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 7',
    title: 'Rendre compte au comité et archiver',
    intro: "Le jury ne décide pas de l'offre : il recommande. Le compte rendu est court, factuel et prépare la vérification des références, qui est l'étape suivante, pas la dernière.",
    steps: [
      {
        title: 'Rédigez le compte rendu du jury (une page)',
        actions: [
          'Rappelez le poste, les critères, la grille, les trois candidats et les totaux.',
          'Indiquez la règle de départage appliquée et la conclusion : les deux premiers passent à la vérification des références.',
          'Signalez le lien déclaré par L. Safari et la parade.',
        ],
      },
      {
        title: 'Informez les candidats sans annoncer de résultat',
        actions: [
          'Écrivez à A et B : « Nous poursuivons le processus avec les vérifications de références. »',
          'Écrivez à C : « Votre candidature est conservée en réserve. »',
        ],
      },
      {
        title: 'Archivez',
        actions: [
          'Enregistrez le fichier maître, les trois copies individuelles et le compte rendu dans le dossier de recrutement.',
          'Protégez le dossier en accès restreint : il contient des données personnelles.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — compte rendu du jury (extrait, 21 septembre)',
      lines: [
        'Résultats : B 74, A 72, C 67 sur 100. Écart B-A de 2 points, inférieur au seuil de 3 fixé par le plan de recrutement : ex æquo.',
        'Décision du jury : vérification des références de B (mercredi 23) puis de A (jeudi 24), avant tout contact d\'offre. C conservée en réserve.',
        'Lien déclaré : L. Safari connaît B (réunion inter-agences, 2023). Il a noté comme les autres ; son écart d\'un point sur la gestion d\'équipe a été discuté et réglé par consensus.',
      ],
    },
    result: "Fait quand : le compte rendu est envoyé à H. Mwamba et A. Kavira, les trois candidats sont informés de la suite, et l'archive est complète. C'est votre Livrable 5.",
    tip: "Ne dites jamais à un candidat qu'il est « premier » ou « très bien classé » avant la vérification des références : vous créez une attente que vous devrez peut-être retirer.",
  },

  // ─── Procédure 6 — Vérification des références et antécédents ─────────
  {
    type: 'concept',
    title: 'Procédure 6 — Vérifier les références et les antécédents avant toute offre (mercredi 23 – vendredi 25 septembre)',
    body: "C'est l'étape la plus souvent bâclée sous pression de temps, et c'est celle qui protège votre organisation d'une erreur de recrutement coûteuse, humainement et financièrement. Les références fournies par le candidat sont un point de départ, pas une vérification. La méthode qui fonctionne : ne jamais s'en tenir aux contacts fournis, identifier au moins un contact indépendant, poser les mêmes questions à tous les contacts, documenter systématiquement dans la fiche.",
    bullets: [
      "Étape 1 — Lister les éléments à vérifier et passer le dossier au crible des red flags.",
      "Étape 2 — Vérifier diplômes et attestations à la source.",
      "Étape 3 — Obtenir l'accord du candidat et ses références.",
      "Étape 4 — Identifier au moins un contact indépendant.",
      "Étape 5 — Préparer les questions communes à tous les contacts.",
      "Étape 6 — Mener les appels et noter sur le moment.",
      "Étape 7 — Remplir la fiche, sections 1 à 3.",
      "Étape 8 — Remplir la fiche, sections 4 et 5, et trancher.",
    ],
    result: "Livrable 6 : une fiche de vérification par contact joint, avec distinction visible entre contacts fournis et contacts indépendants, et une recommandation tranchée par candidat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 8',
    title: 'Lister les éléments à vérifier et passer le dossier au crible des red flags',
    intro: "Avant d'appeler qui que ce soit, sachez exactement ce que vous voulez confirmer. Faites le tableau « ce que dit le CV / ce que disent les pièces / ce qui reste à confirmer » pour le candidat B, premier au classement.",
    steps: [
      {
        title: 'Construisez le tableau de contrôle',
        actions: [
          'Ouvrez un document de travail « Controle_B_Ndayizeye ».',
          'Colonnes : Élément / Ce que dit le CV / Ce que disent les pièces / Écart.',
          'Lignes : chaque poste, chaque diplôme, chaque chiffre de responsabilité (taille d\'équipe, budget).',
        ],
      },
      {
        title: 'Passez les cinq red flags de la théorie',
        actions: [
          'Diplôme vérifiable ? Références uniquement fournies ? Incohérences de dates ou de poste ? Taille de la structure cohérente ? Attestation avec contact vérifiable ?',
          'Comptez les signaux et ne tirez aucune conclusion : un signal isolé ne prouve rien.',
        ],
      },
      {
        title: 'Fixez le niveau de vérification',
        actions: [
          'Un signal : vérification ciblée sur ce point.',
          'Deux signaux ou plus : vérification approfondie, avec contact indépendant obligatoire et explication écrite du candidat.',
        ],
      },
    ],
    table: {
      columns: ['Élément', 'CV', 'Pièces', 'Écart'],
      rows: [
        ['Poste et dates', 'Coordinateur Protection de l\'enfance, Association Mwanga pour l\'Enfance (AME), janvier 2020 – décembre 2022', 'Attestation : Responsable de projet protection (Child Protection Officer), mars 2020 – août 2022', 'Poste différent, dates décalées de 2 et 4 mois'],
        ['Taille', 'Équipe de 25 personnes, budget de 2,5 millions USD', 'Rapports publics de l\'AME : environ 40 salariés et 600 000 USD par an pour toute l\'association', 'Incohérent avec la taille réelle'],
        ['Attestation', 'Cachet et signature', 'Numéro de téléphone qui ne répond pas, adresse électronique générique', 'Contact non vérifiable'],
        ['Diplôme', 'Master en travail social', 'Copie sans relevé de notes', 'Non vérifié'],
      ],
    },
    result: "Fait quand : le tableau est rempli, les signaux sont comptés (quatre pour B) et le niveau de vérification approfondie est décidé.",
    pitfall: "Conclure « fraudeur » à ce stade : quatre signaux imposent de vérifier, pas de condamner. Vous documentez, vous cherchez une source indépendante, vous recommandez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 8',
    title: 'Vérifier diplômes et attestations à la source',
    intro: "Un diplôme et une attestation se vérifient auprès de l'émetteur, par des coordonnées que vous avez trouvées vous-même, jamais celles portées sur le document.",
    steps: [
      {
        title: 'Contactez l\'établissement émetteur du diplôme',
        actions: [
          'Cherchez le site officiel ou le standard de l\'établissement ; écrivez au service de scolarité ou au registre.',
          'Demandez de confirmer le nom, le diplôme et la date d\'obtention, en joignant la copie avec l\'accord du candidat.',
          'Pour un diplôme étranger, vérifiez l\'équivalence auprès de l\'organisme national de reconnaissance.',
        ],
      },
      {
        title: 'Contactez l\'employeur pour confirmer l\'attestation',
        actions: [
          'Appelez le standard général de l\'organisation, pas le numéro porté sur l\'attestation.',
          'Demandez le service RH ou un cadre en poste, et confirmez poste et dates d\'emploi.',
        ],
      },
      {
        title: 'Si les archives sont détruites, cherchez une preuve alternative',
        actions: [
          'Relevé de notes, attestation de réussite, inscription à un ordre professionnel, témoignage de promotion.',
          'Notez « non vérifiable » sans le masquer : l\'impossibilité de vérifier est une information, pas une absence d\'information.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état des vérifications au mercredi 23 septembre',
      lines: [
        'B, Master en travail social (Institut Supérieur de Développement Social, fictif) : courriel au registre le 22/09, réponse non reçue ; le standard répond que les archives de 2012 sont en cours de numérisation. Statut : EN COURS.',
        'B, attestation de l\'AME : le numéro porté sur le document ne répond pas ; le standard général de l\'AME confirme un « Child Protection Officer » nommé C. Ndayizeye de mars 2020 à août 2022. Statut : PARTIELLEMENT VÉRIFIÉ.',
        'A, Licence en psychologie (Université Catholique du Haut-Kivu, fictive) : courriel au registre le 22/09, accusé de réception, réponse attendue sous 7 jours. Statut : EN COURS.',
        'A, attestation du Réseau Enfance Kivu : confirmée par le standard, poste « Responsable de programme » de 2018 à 2026. Statut : VÉRIFIÉ.',
      ],
    },
    result: "Fait quand : chaque diplôme et chaque attestation a un statut daté : vérifié, en cours ou non vérifiable.",
    tip: "Une adresse électronique générique sur une attestation n'est pas une preuve de fraude, mais c'est une raison suffisante pour passer par le standard général de l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 8',
    title: "Obtenir l'accord du candidat et ses références",
    intro: "Les vérifications se font avec l'accord du candidat, et sur la base de ce qu'il vous a dit à l'entretien. L'accord couvre explicitement des contacts autres que ceux qu'il fournit.",
    steps: [
      {
        title: 'Demandez l\'accord écrit',
        actions: [
          'Envoyez un courriel court : objet de la vérification, personnes qui seront contactées, usage limité au recrutement.',
          'Précisez que des personnes ne figurant pas sur sa liste pourront être contactées.',
          'Demandez de ne pas contacter son employeur actuel sans son accord.',
        ],
      },
      {
        title: 'Demandez trois références, dont le supérieur direct',
        actions: [
          'Nom, fonction et organisation au moment des faits, courriel, téléphone, lien avec le candidat.',
          'Si le candidat ne fournit aucun supérieur direct, notez-le : c\'est un signal à documenter à l\'étape 8.',
        ],
      },
      {
        title: 'Protégez les données',
        actions: [
          'Stockez les réponses dans le dossier de recrutement à accès restreint.',
          'Ne partagez les réponses qu\'avec le jury et le Head of Mission.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — courriel envoyé à B le mardi 22 septembre',
      lines: [
        'Objet : KSS-GOM-PM-2026-01 — Vérification de vos références',
        'Bonjour, dans le cadre de votre candidature, nous vérifions les références professionnelles et les antécédents avant toute offre.',
        'Merci de nous transmettre trois références, dont votre supérieur direct de l\'AME, et de confirmer par retour de courriel votre accord pour que nous les contactions, ainsi que d\'autres personnes du secteur ayant travaillé avec vous. Ces échanges sont confidentiels et utilisés uniquement pour ce recrutement.',
        'Cordialement, N. Mbusa, HR Officer, KSS Goma.',
      ],
    },
    result: "Fait quand : l'accord écrit du candidat est archivé et les trois références sont reçues avec nom, fonction et organisation au moment des faits.",
    pitfall: "Contacter l'employeur actuel du candidat sans son accord : vous pouvez lui coûter son emploi avant même qu'une offre existe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 8',
    title: 'Identifier au moins un contact indépendant',
    intro: "Un candidat ne donnera jamais spontanément le contact d'un ancien superviseur avec qui la relation s'est mal terminée. Le contact indépendant est identifié par vous, non communiqué par le candidat : c'est la seule vérification réellement neutre.",
    steps: [
      {
        title: 'Cherchez sur LinkedIn',
        actions: [
          'Cherchez l\'organisation du candidat, ouvrez « Personnes », puis filtrez sur « Anciens employés ».',
          'Gardez les profils dont la période d\'emploi recoupe celle du candidat et dont le poste est proche (supérieur, pair, finance, logistique).',
          'Regardez les connexions en commun avec vous ou votre équipe.',
        ],
      },
      {
        title: 'Passez par l\'organisation',
        actions: [
          'Appelez le standard général de l\'organisation et demandez le service RH ou un cadre du programme concerné.',
          'Demandez la confirmation des dates et du poste, sans partager d\'informations confidentielles sur la candidature.',
        ],
      },
      {
        title: 'Demandez un second nom au premier contact indépendant',
        actions: [
          'En fin d\'appel : « Connaissez-vous une autre personne qui a travaillé avec lui ? »',
          'Documentez à chaque fois comment le contact a été identifié.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — contacts indépendants identifiés',
      lines: [
        'B : recherche LinkedIn « AME », anciens employés 2020-2022 ; profil de Mme C. Nkurunziza, ancienne Finance Officer de l\'AME, aujourd\'hui dans une autre ONG de Bujumbura ; une connexion en commun avec un collègue de L. Safari. Contact indépendant n°1.',
        'A : appel au standard du Réseau Enfance Kivu, orienté vers M. J. Mugisho, ancien collègue de A, aujourd\'hui chez un autre acteur de Bukavu. Contact indépendant n°1.',
      ],
    },
    result: "Fait quand : chaque candidat vérifié a au moins un contact indépendant dont le mode d'identification est écrit.",
    tip: "Soyez factuel sur l'objet de l'appel : « je vérifie des antécédents professionnels dans le cadre d'un recrutement ». N'annoncez ni le poste précis ni les soupçons.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 8',
    title: 'Préparer les questions communes à tous les contacts',
    intro: "Les mêmes questions sont posées à tous les contacts d'un même candidat, fournis ou indépendants. Sans cela, vous ne pouvez pas comparer les réponses ni repérer une contradiction.",
    steps: [
      {
        title: 'Écrivez les cinq questions',
        actions: [
          'Missions réellement exercées : titre, durée, équipe, budget.',
          'Raison du départ.',
          'Points forts observés.',
          'Points de vigilance.',
          'Réembauche : « Si vous en aviez l\'opportunité, referiez-vous appel à cette personne ? »',
        ],
      },
      {
        title: 'Préparez l\'ouverture et les relances',
        actions: [
          'Une phrase d\'ouverture identique pour tous les contacts.',
          'Une relance par question : « Pouvez-vous m\'en dire plus ? », « Pouvez-vous me donner un exemple ? »',
        ],
      },
      {
        title: 'Ajoutez les questions propres aux écarts repérés',
        actions: [
          'Pour B : « Quel était exactement son titre, de quelle date à quelle date ? » « Combien de personnes encadrait-il ? »',
          'Posez ces questions factuelles à tous les contacts du même candidat.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — script d\'appel (extrait)',
      lines: [
        'Ouverture : « Bonjour, je suis N. Mbusa, HR Officer de KSS à Goma. Je vérifie des antécédents professionnels dans le cadre d\'un recrutement. Avez-vous dix minutes ? »',
        'Q1 : « Quelles missions exerçait réellement C. Ndayizeye, avec quel titre, de quelle date à quelle date ? Combien de personnes encadrait-il ? »',
        'Q2 : « Pour quelle raison a-t-il quitté l\'organisation ? »',
        'Q3 : « Quels sont ses principaux points forts ? » Q4 : « Quels points de vigilance retiendriez-vous ? »',
        'Q5 : « Si vous en aviez l\'opportunité, referiez-vous appel à lui ? À quel poste ? »',
      ],
    },
    result: "Fait quand : le script de cinq questions plus les questions factuelles propres aux écarts est écrit et utilisé tel quel pour tous les contacts du candidat.",
    pitfall: "Poser à chaque contact des questions différentes selon l'humeur de l'appel : vous ne pourrez ni comparer ni documenter une contradiction.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 8',
    title: 'Mener les appels et noter sur le moment',
    intro: "Une vérification bien ciblée prend rarement plus de 30 à 45 minutes par candidat retenu. Notez en direct : les citations exactes valent plus que votre résumé.",
    steps: [
      {
        title: 'Planifiez les appels du candidat dans une même plage',
        actions: [
          'Appelez d\'abord les contacts fournis, puis le contact indépendant, dans la même demi-journée.',
          'Prévoyez 10 minutes par contact fourni, 15 minutes pour un contact indépendant.',
        ],
      },
      {
        title: 'Conduisez l\'appel avec le script',
        actions: [
          'Lisez l\'ouverture, posez les questions dans l\'ordre, laissez des silences.',
          'À la question 2 (raison du départ), relancez toujours : « Y a-t-il autre chose qui ait compté dans cette décision ? »',
          'Notez les citations exactes entre guillemets, séparez ce qui est dit de ce que vous en déduisez.',
        ],
      },
      {
        title: 'Rédigez dans l\'heure',
        actions: [
          'Complétez la fiche dans l\'heure qui suit l\'appel, avant le contact suivant.',
          'Ne comparez pas les contacts avant d\'avoir rédigé chaque fiche séparément.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — appels du mercredi 23 septembre pour le candidat B',
      lines: [
        '09 h 00 — M. Niyonzima, ancien directeur de l\'AME (fourni) : « Excellent professionnel, très apprécié. » Titre exact : « Il coordonnait la protection. » Dates : « Je ne me souviens pas exactement. » Réembauche : oui.',
        '09 h 20 — Mme A. Hakizimana, ancienne collègue, Responsable Programmes (fournie) : « Très bon avec les enfants et les familles. » Pas de précision sur le titre ni l\'effectif.',
        '09 h 40 — M. Bizimana, ancien partenaire de mise en œuvre (fourni) : « Collaboration fluide. » N\'a travaillé avec lui que sur deux projets.',
        '14 h 00 — Mme C. Nkurunziza (indépendante) : « Il était Child Protection Officer à partir de mars 2020, puis chargé de l\'intérim de la coordination de février à juillet 2022. Il encadrait 5 personnes, 12 pendant l\'intérim. Le budget de son projet était d\'environ 380 000 USD. » Départ en août 2022 : « fin du financement, départ en bons termes ». Réembauche : « Oui, comme Officer. Pour la coordination d\'une équipe de 9 personnes, je ne suis pas certaine. »',
      ],
    },
    result: "Fait quand : chaque contact a été joint avec les mêmes questions, et les réponses sont notées avec leurs citations dans l'heure qui suit.",
    pitfall: "Se contenter des trois contacts fournis, tous élogieux : c'est la formalité qui rassure et qui n'aurait rien détecté. Seul le contact indépendant a fait apparaître la différence entre « coordonnait » et « intérim de cinq mois ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 7 sur 8',
    title: 'Remplir la fiche de vérification, sections 1 à 3',
    intro: "Le template fiche-verification-references-antecedents.docx est conçu pour être complété pour chaque référence contactée. Vous faites donc quatre fiches pour le candidat B : trois contacts fournis et un contact indépendant.",
    steps: [
      {
        title: 'Section 1 — Identification du candidat',
        actions: [
          'Nom du candidat : C. Ndayizeye. Poste visé : Program Manager — Protection de l\'enfance, KSS Goma.',
          'Date de l\'entretien : date de l\'entretien de recrutement du candidat (21/09/2026). Évaluateur / recruteur : N. Mbusa, HR Officer.',
        ],
      },
      {
        title: 'Section 2 — Contact de référence',
        actions: [
          'Nom du contact et fonction / organisation au moment des faits.',
          'Lien avec le candidat (ancien superviseur, collègue, subordonné).',
          'Mode d\'identification : cochez UNE case, « Fourni par le candidat » ou « Identifié indépendamment ».',
        ],
      },
      {
        title: 'Section 3 — Questions posées et éléments obtenus',
        actions: [
          'Tableau à deux colonnes : Question posée / Réponse ou élément obtenu. Ajoutez des lignes pour couvrir vos cinq questions plus les questions factuelles.',
          'Écrivez la date et la durée de l\'appel dans la première ligne.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche du contact indépendant de B (sections 1 à 3)',
      lines: [
        '1. Candidat : C. Ndayizeye. Poste visé : Program Manager — Protection de l\'enfance. Date de l\'entretien : 21/09/2026. Évaluateur : N. Mbusa.',
        '2. Contact : Mme C. Nkurunziza, Finance Officer à l\'AME au moment des faits. Lien : collègue (finance), même organisation de 2019 à 2023. Mode d\'identification : ☒ Identifié indépendamment (LinkedIn, ancienne de l\'AME ; connexion commune).',
        '3. Appel du 23/09, 14 h 00, 15 min. Q1 missions : « Child Protection Officer dès mars 2020 ; intérim de coordination février-juillet 2022 ; 5 personnes, 12 pendant l\'intérim ; budget d\'environ 380 000 USD. »',
        '3. Q2 départ : « Fin du financement, août 2022, bons termes. » Q3 points forts : « Rigoureux, très bon terrain. » Q4 vigilance : « Peu d\'expérience de la relation bailleur. » Q5 réembauche : « Oui, comme Officer ; coordination d\'une équipe de 9, pas certaine. »',
      ],
    },
    result: "Fait quand : les sections 1 à 3 sont remplies pour chaque contact, avec la case de mode d'identification cochée sans ambiguïté.",
    tip: "Cochez la case « Identifié indépendamment » uniquement si le contact n'a jamais été donné par le candidat. La distinction doit être visible sur le document : c'est elle que lira le comité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 8 sur 8',
    title: 'Remplir les sections 4 et 5 de la fiche et trancher',
    intro: "La section 4 liste les signaux, la section 5 tranche. « On verra plus tard » n'est pas une recommandation acceptable : choisissez l'une des trois cases et motivez par écrit.",
    steps: [
      {
        title: 'Section 4 — Signaux d\'alerte relevés',
        actions: [
          'Listez les incohérences de dates, de poste, de motif de départ, les diplômes ou attestations non vérifiables, l\'absence de contact vérifiable.',
          'Pour chaque signal, indiquez le contact ou la pièce qui l\'a révélé et la date.',
        ],
      },
      {
        title: 'Section 5 — Évaluation globale et recommandation',
        actions: [
          'Synthèse : le contact reprendrait-il ce candidat, à quel poste ?',
          'Cochez UNE case : Poursuivre, Poursuivre sous conditions, ou Arrêter le processus.',
          'Poursuivre : aucun signal non résolu. Sous conditions : signaux partiellement levés, conditions précises, mesurables, avec échéance. Arrêter : fausse déclaration établie, faute grave non contestée, refus d\'éclaircir ou impossibilité totale de vérifier.',
        ],
      },
      {
        title: 'Signez et transmettez',
        actions: [
          'Renseignez « Rédigé par (nom, fonction) » et la date.',
          'Transmettez les fiches au jury, à A. Kavira et au Head of Mission avant le comité.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — sections 4 et 5, candidat B (fiche de synthèse)',
      lines: [
        '4. Signaux : (1) Poste et dates : « Coordinateur, janv. 2020-déc. 2022 » au CV ; « Child Protection Officer, mars 2020-août 2022 » sur l\'attestation ; intérim de coordination de 5 mois selon contact indépendant. (2) Taille : 25 personnes et 2,5 M USD déclarés ; 12 personnes et environ 380 000 USD selon contact indépendant. (3) Attestation : numéro non joignable ; confirmée par le standard. (4) Diplôme : en cours de vérification.',
        '5. Synthèse : le contact indépendant reprendrait B comme Officer, sans certitude sur la coordination d\'une équipe de 9. Recommandation : ☒ Poursuivre sous conditions.',
        'Conditions : (a) explication écrite de l\'écart de titre et de dates, avec contrat ou bulletins de paie, avant le vendredi 25/09 à 17 h ; (b) confirmation du diplôme par l\'établissement ; (c) si ces deux conditions ne sont pas remplies au comité du 28/09, l\'offre ne lui est pas faite.',
        'Candidat A : trois contacts fournis cohérents, contact indépendant (M. J. Mugisho) cohérent sur poste, dates et équipe de 9 personnes, réembauche « oui » ; seule la confirmation du diplôme est en cours. Recommandation : ☒ Poursuivre. Rédigé par N. Mbusa, HR Officer, 24/09/2026.',
      ],
    },
    result: "Fait quand : chaque candidat vérifié a une case cochée, des signaux listés avec leur source, et une signature datée. C'est votre Livrable 6.",
    pitfall: "Écrire « sous conditions » sans échéance ni critère mesurable : ce n'est pas une décision, c'est un report. Une condition doit pouvoir être déclarée remplie ou non remplie à une date précise.",
  },

  // ─── Procédure 7 — Offre et clôture ────────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 7 — Formuler l'offre de contrat et clôturer le recrutement (lundi 28 septembre – lundi 2 novembre)",
    body: "Une fois la vérification des références complétée et documentée, sans signal d'alerte non résolu, formulez l'offre en cohérence avec la grille salariale de l'organisation (Module 04) et le type de contrat défini à la Procédure 1. Toute offre conditionnée à des vérifications encore en cours doit le mentionner explicitement et par écrit, jamais implicitement.",
    bullets: [
      "Étape 1 — Contrôler le go / no-go avec le comité de recrutement.",
      "Étape 2 — Cadrer le salaire et le type de contrat selon la grille.",
      "Étape 3 — Rédiger l'offre écrite avec ses conditions explicites.",
      "Étape 4 — Faire valider, envoyer et suivre l'acceptation.",
      "Étape 5 — Lever les conditions, notifier les autres candidats et clôturer.",
    ],
    result: "Livrable 7 : une offre écrite signée par le candidat retenu, les autres candidats informés et un dossier de recrutement clôturé et archivé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Contrôler le go / no-go avec le comité de recrutement',
    intro: "Le comité du lundi 28 septembre décide à partir de documents, pas d'impressions : classement, fiches de vérification, règle de départage écrite au plan.",
    steps: [
      {
        title: 'Préparez le dossier du comité',
        actions: [
          'Joignez : compte rendu du jury, onglet Comparaison, fiches de vérification de A et de B, résultat du test.',
          'Résumez en une page : écart de points, signaux, conditions.',
        ],
      },
      {
        title: 'Déroulez la liste de contrôle go / no-go',
        actions: [
          'Total pondéré de 70 ou plus ?',
          'Références vérifiées et documentées, dont un contact indépendant ?',
          'Signaux d\'alerte résolus, ou levés par des conditions écrites et datées ?',
          'Liens d\'intérêt déclarés et gérés ?',
          'Budget confirmé par la Finance ?',
          'Candidat toujours intéressé et disponible à la date de démarrage ?',
        ],
      },
      {
        title: 'Consignez la décision',
        actions: [
          'Un compte rendu d\'une demi-page signé par H. Mwamba : candidat retenu, conditions, candidat de réserve.',
        ],
      },
    ],
    table: {
      columns: ['Critère go / no-go', 'Candidat B — C. Ndayizeye', 'Candidat A — M. Kahindo'],
      rows: [
        ['Total pondéré ≥ 70', '74 (oui)', '72 (oui)'],
        ['Écart entre les deux premiers', '2 points : ex æquo', '2 points : ex æquo'],
        ['Références vérifiées, contact indépendant', 'Oui, 3 fournies + 1 indépendante', 'Oui, 3 fournies + 1 indépendante'],
        ['Signaux résolus ou levés par conditions écrites', 'Non : 4 signaux, explication écrite attendue le 25/09, non reçue au 28/09', 'Oui : aucun signal ; diplôme en cours'],
        ['Décision', 'NO GO à ce stade, mis en réserve', 'GO conditionnel (diplôme)'],
      ],
    },
    result: "Fait quand : le compte rendu du comité signé par le Head of Mission désigne un candidat retenu, un candidat en réserve et les conditions éventuelles.",
    pitfall: "Départager deux candidats à 2 points d'écart sur la seule intuition de l'équipe : c'est exactement le biais que la grille et la règle de départage écrite devaient éviter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Cadrer le salaire et le type de contrat selon la grille',
    intro: "L'offre est alignée sur la grille salariale de l'organisation et sur le type de contrat défini au plan. Le positionnement dans la fourchette se justifie par l'expérience validée, pas par la négociation.",
    steps: [
      {
        title: 'Déterminez le type de contrat',
        actions: [
          'Nationalité et lieu de résidence de la personne retenue : confirmez avec A. Kavira le statut (national ou international) selon la politique RH.',
          'Si international : consultez S. Lambert (siège) avant toute offre.',
        ],
      },
      {
        title: 'Positionnez le salaire dans la fourchette',
        actions: [
          'Règle interne (fictive) : 2 600 USD brut pour 5 ans d\'expérience validée, plus 100 USD par année supplémentaire validée, plafond 3 200 USD.',
          'Comptez uniquement les années confirmées par vos vérifications.',
          'Vérifiez qu\'aucun cadre de même catégorie ayant plus d\'ancienneté n\'est moins bien payé sans raison.',
        ],
      },
      {
        title: 'Vérifiez le plafond avec la Finance',
        actions: [
          'Calculez le coût employeur mensuel et sur 18 mois.',
          'Envoyez le calcul à R. Ilunga et conservez sa confirmation.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — calcul de l\'offre pour M. Kahindo',
      lines: [
        'Expérience validée : 8 ans (Réseau Enfance Kivu, 2018-2026, confirmés par l\'attestation et deux contacts).',
        'Salaire brut : 2 600 + (8 − 5) × 100 = 2 900 USD par mois.',
        'Coût employeur : 2 900 × 1,12 = 3 248 USD par mois, inférieur au plafond de 3 600 USD.',
        'Sur 18 mois : 3 248 × 18 = 58 464 USD, pour un plafond de 64 800 USD : marge de 6 336 USD.',
        'Contrat : CDD national de 18 mois, du 02/11/2026 au 30/04/2028, sous réserve du financement (statut confirmé par A. Kavira).',
      ],
    },
    result: "Fait quand : le salaire offert, le type de contrat et le calcul de coût sont écrits et confirmés par la Finance et l'HR Manager.",
    tip: "Gardez la marge sous le plafond pour une négociation éventuelle : une offre au plafond ne laisse aucun espace pour répondre à une contre-proposition raisonnable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: "Rédiger l'offre écrite avec ses conditions explicites",
    intro: "L'offre est un document écrit, daté et signé. Toute condition encore ouverte y figure avec son échéance. Les clauses détaillées du contrat feront l'objet du Module 03.",
    steps: [
      {
        title: 'Rédigez les éléments fixes de l\'offre',
        actions: [
          'Poste, lieu, rattachement, type de contrat, durée, date de démarrage.',
          'Rémunération brute mensuelle en USD, avantages renvoyés à la politique RH.',
          'Date limite de réponse du candidat (ici trois jours ouvrés).',
        ],
      },
      {
        title: 'Rédigez les conditions suspensives',
        actions: [
          'Une phrase par condition : ce qui reste à vérifier, la date limite et la conséquence si elle n\'est pas remplie.',
          'Précisez que l\'offre est conditionnée à la vérification définitive des références et des diplômes.',
        ],
      },
      {
        title: 'Ajoutez les engagements de conduite',
        actions: [
          'Joignez le code de conduite et la politique de protection contre l\'exploitation et les abus à signer avant la prise de poste.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — offre envoyée le mardi 29 septembre 2026 (extrait)',
      lines: [
        'Objet : Offre de poste — Program Manager Protection de l\'enfance, KSS Goma.',
        'Madame, nous avons le plaisir de vous proposer le poste de Program Manager Protection de l\'enfance, à Goma, dans le cadre d\'un contrat à durée déterminée de 18 mois du 2 novembre 2026 au 30 avril 2028, sous réserve du financement du projet.',
        'Rémunération : 2 900 USD brut par mois. Avantages : selon la politique RH de KSS.',
        'Cette offre est conditionnée à la confirmation par l\'Université Catholique du Haut-Kivu de votre licence en psychologie, au plus tard le vendredi 16 octobre 2026. À défaut, l\'offre sera sans effet.',
        'Merci de nous retourner l\'offre signée avant le vendredi 2 octobre 2026 à 17 h. H. Mwamba, Head of Mission.',
      ],
    },
    result: "Fait quand : l'offre contient poste, durée, salaire, date limite de réponse et chaque condition avec son échéance et sa conséquence.",
    pitfall: "Laisser une condition implicite (« sous réserve de vérifications ») sans la nommer ni la dater : en cas de désaccord, ni vous ni le candidat ne savez ce qui était attendu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: "Faire valider l'offre, l'envoyer et suivre l'acceptation",
    intro: "Dans la matrice du Module 01, le contrat national est préparé par le HR Officer, validé par l'HR Manager et approuvé par le Head of Mission. Respectez cet ordre.",
    steps: [
      {
        title: 'Faites valider avant envoi',
        actions: [
          'Envoyez le projet d\'offre à A. Kavira (validation niveau 2), puis à H. Mwamba pour signature.',
          'Conservez les deux réponses écrites dans le dossier.',
        ],
      },
      {
        title: 'Envoyez et appelez',
        actions: [
          'Envoyez l\'offre signée en PDF par courriel, le mardi 29 septembre.',
          'Appelez la personne dans l\'heure pour confirmer la réception et répondre aux questions.',
        ],
      },
      {
        title: 'Traitez la réponse et les négociations',
        actions: [
          'Notez la date et l\'heure de réception de l\'offre signée.',
          'Toute demande de salaire supérieur est examinée dans la limite de la fourchette (plafond 3 200 USD) avec une justification écrite, sinon refusée avec une explication.',
          'Relancez à J-1 de la date limite.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — suivi de l\'offre',
      lines: [
        'Mardi 29/09, 10 h : offre validée par A. Kavira, signée par H. Mwamba. 11 h : envoyée à M. Kahindo ; appel de 12 minutes, la candidate demande une précision sur l\'assurance santé, réponse écrite à 15 h.',
        'Jeudi 01/10, 16 h 20 : offre signée reçue. Aucune négociation.',
        'Vendredi 02/10 : accusé de réception envoyé ; la condition « diplôme avant le 16/10 » est rappelée par écrit.',
      ],
    },
    result: "Fait quand : l'offre signée par le candidat est archivée avec la date de réception, avant la date limite de réponse.",
    pitfall: "Dire à un candidat « c'est bon, vous êtes pris » par téléphone avant que l'offre soit signée par le Head of Mission : vous engagez l'organisation sans document.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Lever les conditions, notifier les autres candidats et clôturer',
    intro: "Le recrutement n'est pas terminé à la signature. Il se clôt quand la condition est levée, que les autres candidats sont informés et que le dossier est archivé et transmis aux étapes suivantes du cycle RH.",
    steps: [
      {
        title: 'Suivez la condition jusqu\'à la date limite',
        actions: [
          'Relancez le registre de l\'université le lundi 12 octobre.',
          'À réception de la confirmation, mettez à jour la fiche de vérification de A : « Condition levée le 12/10/2026 ».',
          'À défaut au 16 octobre, appliquez la clause : l\'offre est sans effet, vous passez au candidat de réserve.',
        ],
      },
      {
        title: 'Notifiez les autres candidats',
        actions: [
          'Écrivez à B et C : le poste est pourvu ; B et C peuvent être conservés en réserve avec leur accord.',
          'Envoyez la réponse « non retenu » aux candidats restants de la présélection.',
        ],
      },
      {
        title: 'Archivez et transmettez',
        actions: [
          'Archivez : plan, description, registre, grille, tests, fiches, offre signée, comptes rendus.',
          'Transmettez à la Finance, via la fiche RH-Finance du mois (Module 01, section Embauches) : nom, poste, date d\'entrée 02/11/2026, salaire 2 900 USD.',
          'Informez la Logistique de l\'arrivée (badge, matériel, bureau) et préparez le contrat (Module 03).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — bilan du recrutement KSS-GOM-PM-2026-01',
      lines: [
        'Entonnoir : 46 candidatures, 8 en liste courte, 3 interviewés, 2 vérifiés, 1 offre.',
        'Délais : publication le 02/09, offre acceptée le 01/10 (29 jours), prise de poste le 02/11/2026, soit à la date fixée par la convention.',
        'Condition levée : confirmation du diplôme de M. Kahindo reçue le lundi 12/10/2026.',
        'Réserve : C. Ndayizeye (sous réserve de ses pièces) et F. Salim.',
      ],
    },
    result: "Fait quand : la condition est levée ou l'offre annulée par écrit, les autres candidats sont informés et le dossier est archivé. C'est votre Livrable 7.",
    tip: "Notez le délai de recrutement et le nombre de candidats à chaque étape : ces chiffres nourrissent votre prochain rapport RH et vos prochains rétro-plannings.",
  },

  // ─── Cas résolu ────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Le recrutement du Program Manager de Goma, semaine par semaine',
    scenario: "Rappel : lundi 31 août 2026, KSS doit recruter un Program Manager Protection de l'enfance pour un projet UNICEF qui démarre le lundi 2 novembre. Voici le déroulé complet tel qu'un professionnel l'aurait conduit, sans sauter d'étape malgré le calendrier serré.",
    steps: [
      { title: 'Lundi 31 août – mardi 1er septembre — Cadrage et description de poste', body: 'Procédure 1 (étapes 1 à 4) et Procédure 2 (étapes 1 à 5) : besoin écrit avec L. Safari, 5 critères essentiels, contrat et plafond confirmés par la Finance (3 584 USD ≤ 3 600 USD), plan approuvé par H. Mwamba.', result: 'Plan de recrutement approuvé et description de poste validée le 1er septembre.' },
      { title: 'Mercredi 2 – vendredi 11 septembre — Publication', body: 'Procédure 3 (étapes 1 et 2) : ReliefWeb, LinkedIn, groupe de travail protection de l\'enfant, universités ; registre ouvert.', result: '46 candidatures reçues : 24 + 11 + 11.' },
      { title: 'Lundi 14 – mardi 15 septembre — Présélection', body: 'Procédure 3 (étapes 3 à 5) : grille figée le lundi à 8 h avant toute lecture ; critères éliminatoires, puis notation des 5 critères essentiels.', result: '19 écartés, 8 en liste courte, 6 en réserve, 13 sous le seuil (19 + 8 + 6 + 13 = 46).' },
      { title: 'Jeudi 17 – vendredi 18 septembre — Test technique', body: 'Procédure 4 : test de 2 heures, grille sur 20 écrite à l\'avance, correction en aveugle par deux correcteurs.', result: '3 candidats au-dessus de 13/20 : T-05 (16), T-03 (15), T-07 (14).' },
      { title: 'Lundi 21 septembre — Entretiens structurés', body: 'Procédure 5 : grille adaptée, ordre tiré au sort, notes en direct, calibrage du jury.', result: 'B 74, A 72, C 67. Écart de 2 points : ex æquo selon la règle du plan.' },
      { title: 'Mercredi 23 – vendredi 25 septembre — Références et antécédents', body: 'Procédure 6 : quatre signaux sur B, contact indépendant qui nuance titre, dates et taille ; A cohérent sur tous les points.', result: 'B : poursuivre sous conditions. A : poursuivre.' },
      { title: 'Lundi 28 septembre – vendredi 2 octobre — Comité et offre', body: 'Procédure 7 (étapes 1 à 4) : B n\'a pas levé ses conditions, A est retenue ; calcul 2 900 USD ; offre envoyée le 29, signée le 1er octobre.', result: 'Offre conditionnelle acceptée avant la date limite.' },
      { title: 'Lundi 12 octobre – lundi 2 novembre — Clôture', body: 'Procédure 7 (étape 5) : diplôme confirmé le 12 octobre, autres candidats informés, dossier archivé, fiche RH-Finance de novembre alimentée.', result: 'Prise de poste le 2 novembre, à la date de la convention.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le tableau de décision final',
    scenario: "Voici la synthèse que le comité du 28 septembre a eue sous les yeux. Elle réunit les trois filtres indépendants : test, entretien structuré, vérification des références. Un excellent score à l'un ne remplace jamais les deux autres.",
    steps: [],
    table: {
      columns: ['Candidat', 'Test (/20)', 'Entretien (/100)', 'Rang', 'Vérification des références', 'Décision du comité'],
      rows: [
        ['A — M. Kahindo', '15', '72', '2', '3 contacts fournis + 1 indépendant, tous cohérents ; diplôme en cours : Poursuivre', 'Offre conditionnelle (diplôme avant le 16/10)'],
        ['B — C. Ndayizeye', '16', '74', '1', '3 contacts fournis + 1 indépendant ; 4 signaux, explication écrite non reçue : Poursuivre sous conditions', 'Non retenu à ce stade, mis en réserve'],
        ['C — F. Salim', '14', '67', '3', 'Non vérifié (seuil de 70 non atteint)', 'Réserve'],
      ],
    },
    result: "Contrôle : la décision suit la règle écrite au plan de recrutement (écart de 2 points = ex æquo, départage par la vérification des références). Ni l'ordre du classement ni l'impression de l'équipe ne l'ont dictée.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Pourquoi A et non B : le raisonnement',
    scenario: "B est classé premier, avec 2 points d'avance seulement, et son contact indépendant ne dit rien de grave. Pourquoi l'offre part-elle vers A ? Voici le raisonnement, étape par étape.",
    steps: [
      { title: '1. L\'écart de 2 points n\'est pas une différence', body: 'Le plan de recrutement, validé avant le moindre entretien, fixe à 3 points le seuil sous lequel deux candidats sont considérés ex æquo. La décision se déplace donc vers les autres filtres.' },
      { title: '2. Les quatre signaux de B portent sur le critère le plus important', body: 'L\'expérience de gestion d\'équipe est le critère essentiel du poste (équipe de 9 personnes). Le contact indépendant ramène « coordinateur de 25 personnes » à « intérim de 5 mois, 12 personnes ». L\'écart n\'est pas une fraude prouvée : c\'est une surestimation non expliquée.' },
      { title: '3. Les conditions de B étaient mesurables et datées, et n\'ont pas été remplies', body: 'Explication écrite et pièces avant le 25 septembre à 17 h. Le candidat a répondu qu\'il les fournirait « dans la semaine suivante ». Le comité du 28 septembre ne peut pas attendre : la convention démarre le 2 novembre.' },
      { title: '4. A n\'a aucun signal ouvert, seul son diplôme reste à confirmer', body: 'Une offre conditionnelle écrite protège KSS : si le diplôme n\'est pas confirmé le 16 octobre, l\'offre est sans effet et B ou C reprennent la suite.' },
      { title: '5. B reste en réserve, sans mise en cause', body: 'On ne l\'a pas écarté pour fraude : on a constaté que les conditions n\'étaient pas levées à la date du comité. Si ses pièces arrivent et expliquent l\'écart, il reste un candidat de réserve valable.' },
    ],
    result: "Résultat : l'offre part le 29 septembre vers la candidate dont tous les signaux sont résolus, avec une condition écrite. Le calendrier de la convention est tenu et la décision est défendable devant un audit.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le dossier de recrutement tel qu\'archivé',
    scenario: "À la clôture, le dossier contient les sept livrables du module, chacun avec son nom de fichier, sa date et la personne qui l'a validé.",
    steps: [],
    table: {
      columns: ['Livrable', 'Fichier', 'Date', 'Validé par'],
      rows: [
        ['1 — Plan de recrutement', 'Plan_Recrutement_KSS-GOM-PM-2026-01.pdf', '01/09/2026', 'H. Mwamba (courriel archivé)'],
        ['2 — Description de poste', 'DescriptionPoste_KSS-GOM-PM-2026-01_v1.pdf', '01/09/2026', 'A. Kavira (courriel archivé)'],
        ['3 — Registre et liste courte', 'Registre_KSS-GOM-PM-2026-01.xlsx', '15/09/2026', 'L. Safari'],
        ['4 — Test et résultats', 'Test_Grille_Resultats_T01-T08.xlsx', '18/09/2026', 'L. Safari + E. Kasongo'],
        ['5 — Grille d\'entretien', 'Grille_KSS-GOM-PM-2026-01.xlsx (3 copies individuelles + maître)', '21/09/2026', 'Jury'],
        ['6 — Fiches de vérification', 'Fiche_Verification_A (x4) et B (x4).docx', '23 et 24/09/2026', 'N. Mbusa'],
        ['7 — Offre signée', 'Offre_M_Kahindo_signee.pdf', '01/10/2026', 'H. Mwamba / candidate'],
      ],
    },
    result: "Contrôle final : chaque pièce est datée et le compte rendu du comité du 28 septembre relie les décisions aux pièces. Un audit bailleur peut reconstituer chaque étape en une heure.",
  },

  // ─── Exercice ──────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: "Exercice — « Le candidat parfait, Abuja »",
    instructions: "Vous êtes HR Officer de la mission KSS à Abuja (Nigeria, mission fictive de la même ONG). Vous recrutez un Program Manager pour un projet de protection de l'enfance. Sur les 8 candidats présélectionnés, un dossier se détache : Emeka, 8 ans d'expérience dans deux ONG internationales reconnues, CV impeccable, 72/100 à la grille d'entretien structuré (meilleur score du groupe) et trois références professionnelles fournies, toutes excellentes. Le bailleur a fixé le démarrage du projet dans trois semaines et le comité souhaite envoyer l'offre dès demain. Vous contactez les trois références : toutes confirment un profil exemplaire. Avant de finaliser, vous retrouvez sur LinkedIn une ancienne coordinatrice adjointe de sa dernière organisation, absente de la liste fournie. Elle explique qu'Emeka a quitté son poste après une enquête interne pour comportement inapproprié envers plusieurs membres de son équipe (intimidation, pressions sur des subordonnées), close sans sanction faute de témoignages écrits, ayant conduit à un départ « négocié » présenté comme une démission volontaire. Vous devez décider de la suite et documenter votre décision avant l'échéance du comité.",
    table: {
      columns: ['Élément du dossier', 'Ce que dit le dossier'],
      rows: [
        ['Poste', 'Program Manager — Protection Enfance, Abuja'],
        ['Candidat B (profil « Emeka »)', '8 ans, deux ONG internationales, 72/100, meilleur score du groupe'],
        ['Références fournies', 'Trois contacts, tous excellents'],
        ['Contact indépendant', 'Ancienne coordinatrice adjointe, trouvée via LinkedIn : enquête interne close sans sanction, départ « négocié »'],
        ['Échéance', 'Le comité veut envoyer l\'offre demain ; démarrage du projet dans 3 semaines'],
      ],
    },
    deliverable: "Les deux fichiers complétés (grille-entretien-structure-evaluation.xlsx et les fiches de vérification fiche-verification-references-antecedents.docx) avec une recommandation finale clairement tranchée et justifiée par écrit. « On verra plus tard » n'est pas une réponse acceptable.",
    tip: "Le fichier est livré avec des scores d'exemple (79, 78 et 71) où Emeka n'est pas premier : à vous de les remplacer pour qu'ils collent au cas.",
  },
  {
    type: 'exercise',
    title: "Exercice — Les étapes à suivre pour « Le candidat parfait, Abuja »",
    deliverable: "La grille de notation pondérée complétée, les quatre fiches de vérification et la note d'une demi-page au comité qui tranche entre les trois candidats.",
    steps: [
      {
        title: 'Remplissez la grille (Procédure 5, étapes 1, 4 et 6)',
        actions: [
          'Conservez les libellés « Candidat A », « Candidat B (profil Emeka) » et « Candidat C » (ou renommez-les dans les DEUX onglets).',
          'Effacez les scores d\'exemple. Saisissez 15 scores entiers de 1 à 5 et une justification en colonne H pour chaque ligne.',
          'Réglez les scores pour que le total du candidat B soit 72 et strictement supérieur aux deux autres.',
          'Lisez l\'onglet Comparaison candidats : total, rang et recommandation.',
        ],
      },
      {
        title: 'Rédigez quatre fiches de vérification (Procédure 6, étapes 4 à 7)',
        actions: [
          'Une fiche par contact : trois contacts fournis (teneur élogieuse) et la coordinatrice adjointe.',
          'Cochez la bonne case de mode d\'identification et écrivez comment la coordinatrice a été identifiée.',
          'Section 3 : les mêmes cinq questions pour les quatre contacts, avec les réponses que vous attendez.',
        ],
      },
      {
        title: 'Relevez les signaux et tranchez (Procédure 6, étape 8)',
        actions: [
          'Section 4 : l\'incohérence entre « démission volontaire » et enquête interne close, source et date.',
          'Notez aussi la limite : une seule source indépendante, aucun témoignage écrit.',
          'Section 5 : cochez UNE case et motivez par écrit. Pesez le risque : poste de protection de l\'enfance, équipe, réputation du bailleur.',
        ],
      },
      {
        title: 'Rédigez la note au comité (une demi-page)',
        actions: [
          'Annoncez clairement que l\'offre ne part pas demain, et pourquoi.',
          'Proposez les prochaines actions avec des dates : un second contact indépendant, une question écrite au candidat sur les circonstances de son départ, et, si votre organisation y participe, une consultation du Misconduct Disclosure Scheme.',
          'Attribuez chaque information à sa source (« selon l\'ancienne coordinatrice adjointe ») et n\'employez aucun qualificatif sur la personne.',
        ],
      },
    ],
    pitfall: "Rejeter ou accepter sur la seule parole de la coordinatrice : une source unique, non corroborée, impose de vérifier et d'entendre le candidat, pas de conclure.",
  },
  {
    type: 'checklist',
    title: 'Auto-correction — votre livrable est correct si…',
    items: [
      "Grille : le total pondéré du candidat B est exactement 72 et strictement supérieur à celui de A et de C. Par exemple, les scores 4-4-3-3-4 donnent 20 + 16 + 12 + 12 + 12 = 72.",
      "Grille : les 15 scores sont des entiers de 1 à 5, chaque ligne a une justification concrète en colonne H, aucune formule de G, des lignes de total ou de l'onglet Comparaison n'a été modifiée.",
      "Comparaison : les noms de l'onglet Comparaison sont identiques, caractère pour caractère, à ceux de l'onglet Grille Entretien ; B apparaît au rang 1 avec « Recommandé au comité final ».",
      "Fiches : quatre fiches, une par contact ; chaque section 2 a exactement une case cochée ; la coordinatrice porte « Identifié indépendamment » avec le chemin d'identification (LinkedIn, même organisation, poste de coordinatrice adjointe) ; les trois autres portent « Fourni par le candidat ».",
      "Les mêmes cinq questions figurent dans la section 3 des quatre fiches, et la question sur la raison du départ est posée à chaque contact.",
      "Section 4 : l'incohérence entre « démission volontaire » et l'enquête interne close est nommée avec sa source et la date, et la limite de la preuve (une source, aucun témoignage écrit) est mentionnée.",
      "Section 5 : une seule case cochée, motivée par des faits. « Poursuivre » sans condition n'est pas défendable avec un signal grave non résolu ; « Arrêter » et « Poursuivre sous conditions » sont défendables si les raisons ou les conditions sont précises et datées.",
      "Si vous avez choisi « sous conditions » : chaque condition est mesurable, datée, et l'offre ne part pas avant qu'elle soit remplie.",
      "La note au comité tient en une demi-page, annonce que l'offre ne part pas demain, propose des actions datées et n'accuse personne.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice complémentaire — Appliquez la méthode à votre propre mission',
    instructions: "Si vous êtes en poste, refaites les Procédures 1, 2 et 5 sur un recrutement réel ou prévu de votre base. Sinon, prenez un poste réel publié sur ReliefWeb et construisez le dossier de cadrage à partir de son annonce.",
    steps: [
      { title: 'Votre plan de recrutement', actions: ['Besoin, 3 à 5 critères essentiels et leurs preuves, contrat, plafond budgétaire, rétro-planning, règle de départage.'] },
      { title: 'Votre description de poste', actions: ['Critères essentiels séparés des souhaitables, audit de langage inclusif tracé, fourchette salariale ou grille de référence.'] },
      { title: 'Votre grille d\'entretien', actions: ['Cinq compétences, pondérations totalisant 100, une question et une relance par compétence, repères 1-3-5, noms identiques dans les deux onglets.'] },
    ],
    deliverable: "Votre plan de recrutement validé par votre hiérarchie, votre description de poste publiable et votre grille d'entretien adaptée à votre poste, avec ses repères de notation.",
    pitfall: "N'utilisez jamais les données réelles de candidats (noms, CV) en dehors des outils et dossiers RH sécurisés de votre organisation, y compris pour un exercice de formation.",
  },

  // ─── Pièges, récapitulatif, clôture ───────────────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Ne vérifier les références qu'auprès des contacts fournis par le candidat : un candidat ne donnera jamais le contact d'une personne susceptible de nuire à sa candidature. Une vérification qui s'arrête à la liste fournie est une formalité, pas une vérification. Cherchez toujours un contact indépendant.",
      "Mener un entretien non structuré où chaque candidat reçoit des questions différentes : sans grille commune, impossible de comparer ; le recrutement se réduit à une préférence subjective, difficile à défendre en cas de contestation.",
      "Sauter la vérification des références « faute de temps » sur un recrutement urgent : c'est précisément sous pression de délai bailleur que cette étape est sacrifiée, et que le risque d'un mauvais recrutement est le plus coûteux. Une vérification ciblée prend 30 à 45 minutes.",
      "Se laisser impressionner par un excellent score d'entretien : un candidat peut très bien préparer un entretien structuré sans que cela reflète sa conduite en poste. Score d'entretien et vérification des références sont deux filtres indépendants, jamais substituables.",
      "Traiter une « démission volontaire » comme une information suffisante : un départ présenté comme volontaire cache parfois une sortie négociée après un problème de conduite. Posez la question sur la raison du départ à chaque contact, notamment indépendant.",
      "Renommer un candidat dans la grille sans le retaper à l'identique dans l'onglet Comparaison, ou modifier une formule : le total affiche 0 ou un classement faussé. Les colonnes G, C, D et E sont calculées, ne les saisissez jamais.",
      "Mélanger critères essentiels et souhaitables, ou ajuster la grille de présélection après avoir lu des CV : le tri n'est plus neutre ni défendable.",
      "Laisser une condition d'offre implicite, ou « sous conditions » sans échéance mesurable : en cas de désaccord, personne ne sait ce qui était attendu.",
      "Noter de mémoire en fin de journée : le biais de récence sur-évalue le dernier candidat. Notez en direct, avec une justification concrète.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez cadré un besoin de recrutement avec le hiring manager et produit un plan de recrutement d'une page, validé par le Head of Mission, avec critères, contrat, plafond budgétaire et rétro-planning.",
      "Vous avez rédigé une description de poste compétitive et inclusive : critères essentiels séparés des souhaitables, audit de langage tracé, fourchette salariale confirmée par la Finance.",
      "Vous avez publié sur les canaux nationaux et internationaux, tenu un registre et présélectionné 8 candidats sur 46 avec une grille écrite avant la lecture des dossiers.",
      "Vous avez conçu, fait passer et corrigé en aveugle un test technique identique pour tous, avec une grille de correction écrite à l'avance.",
      "Vous avez rempli grille-entretien-structure-evaluation.xlsx (onglets Grille Entretien et Comparaison candidats) : mêmes questions, notes en direct, calibrage du jury, classement calculé et règle de départage appliquée.",
      "Vous avez vérifié références et antécédents avec fiche-verification-references-antecedents.docx, identifié des contacts indépendants et tranché : poursuivre, poursuivre sous conditions ou arrêter.",
      "Vous avez formulé une offre écrite avec conditions explicites et échéances, suivi l'acceptation, levé la condition et clôturé un dossier de recrutement auditable.",
      "Vous savez citer au moins cinq signaux de fraude documentaire et expliquer pourquoi un excellent score d'entretien ne dispense jamais d'une vérification rigoureuse.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais rédiger une description de poste avec des critères essentiels clairement séparés des critères souhaitables.",
      "Je sais construire une grille d'entretien structuré avec les mêmes questions et la même pondération pour tous les candidats d'un poste.",
      "Je sais expliquer pourquoi l'entretien structuré est plus fiable que l'entretien informel pour prédire la performance future.",
      "Je sais citer au moins 5 signaux d'alerte classiques de fraude documentaire dans un dossier de candidature.",
      "Je sais identifier et contacter une référence indépendante, non fournie par le candidat.",
      "J'ai complété une grille d'entretien avec comparaison de candidats dans le template fourni, sans casser les formules.",
      "J'ai rédigé une fiche de vérification de références documentant clairement l'origine de chaque contact.",
      "Je sais reconnaître qu'un excellent score d'entretien ne dispense jamais d'une vérification rigoureuse des références.",
      "J'ai réalisé l'exercice « Le candidat parfait, Abuja » et mon livrable passe toutes les lignes de l'auto-correction.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 03 — Contrats de Travail & Administration du Personnel : votre candidate a signé l'offre et prend son poste le 2 novembre. Vous allez maintenant transformer cette offre en contrat conforme (CDD, CDI, contrats nationaux et d'expatriation), constituer le dossier individuel du personnel et gérer congés, absences et procédures disciplinaires.",
  },
]
