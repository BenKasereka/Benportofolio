// Module 04 — Politique de Rémunération & Avantages Sociaux
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure est
// détaillée étape par étape et appliquée à un cas fil rouge unique (mission
// RDC de Kivu Santé Solidaire, base de Goma), avec les templates remplis
// champ par champ. Les noms, chiffres, taux et dates des exemples sont fictifs.
export default [
  {
    type: 'cover',
    title: 'Politique de Rémunération & Avantages Sociaux',
    hook: "À la fin de ce module, vous aurez en main une grille salariale par coefficients adossée à un benchmarking daté, la vérification d'équité interne de vos salaires réels, un plan de transition chiffré qui corrige un écart de 35 % sans baisser personne, des notes de calcul de primes terrain, de risque et de hardship signées, un contrôle annuel des cotisations sociales (CNSS ou équivalent) et un inventaire chiffré des avantages sociaux. Tout cela en suivant, étape par étape, ce qu'un HR Manager expérimenté fait avant qu'un salarié ne compare sa fiche de paie à celle de son collègue.",
  },
  {
    type: 'objectives',
    items: [
      "Remplir l'onglet Benchmarking de grille-salariale-benchmarking-coefficients.xlsx avec les trois sources (barème ONU/ICSC, enquête inter-ONG, salaire minimum légal), datées et sourcées, et écrire la règle de positionnement de l'organisation.",
      "Construire la grille salariale par coefficients de poste : coter chaque poste sur quatre critères objectifs, saisir coefficients et facteurs d'expérience, calibrer le salaire de base de l'organisation et contrôler chaque ligne contre la règle de positionnement.",
      "Détecter une inégalité salariale avec les onglets Grille salariale et Équité interne, la qualifier par des preuves et la corriger par un plan de transition chiffré de dix lignes maximum, validé avant toute communication.",
      "Distinguer prime terrain, indemnité de risque et hardship allowance, fixer le barème de la mission et produire une note de calcul (note-calcul-primes-terrain-hardship.docx) signée et archivée pour chaque employé concerné.",
      "Contrôler la conformité aux cotisations sociales (CNSS ou équivalent local) : taux en vigueur datés, recalcul d'une fiche de paie, preuve des dépôts, chiffrage des arriérés éventuels et fiche de contrôle annuel.",
      "Inventorier et chiffrer les avantages sociaux du personnel national et international, en séparant le socle légal du conventionnel, avec le coût total employeur par profil.",
      "Installer la revue annuelle de la politique de rémunération (benchmarking, inflation, classifications risque et hardship, équité, CNSS) avec un calendrier et un responsable par action.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un exposé sur les systèmes de rémunération : c'est la méthode complète pour bâtir une politique de rémunération que vous pouvez défendre devant un salarié, un auditeur de bailleur ou un inspecteur du travail, appliquée à un seul cas suivi du début à la fin. À la fin, vous aurez produit sept livrables réutilisables tels quels sur votre propre mission.",
      "Le cas fil rouge (fictif, inspiré de situations réelles) : vous retrouvez N. Mbusa, HR Officer de la base de Goma de Kivu Santé Solidaire (KSS). Le lundi 14 septembre 2026, A. Kavira, HR Manager de mission à Kinshasa, lui confie la refonte de la politique de rémunération de la mission RDC (71 salariés nationaux) : la grille datant de 2022 n'est plus appliquée et un audit du bailleur est annoncé pour novembre. En ouvrant les dossiers, elle découvre que deux Chargés de Programme au même poste, S. Murhula (Goma, 905 USD) et G. Cirhuza (Uvira, 670 USD), ont 35 % d'écart de salaire de base. Le comité de validation (Head of Mission H. Mwamba, HR Manager, Finance Manager R. Ilunga) est fixé au jeudi 22 octobre 2026 ; le budget 2027 est déposé le 15 novembre.",
    ],
    bullets: [
      "Livrable 1 — L'onglet Benchmarking rempli et daté, avec la règle de positionnement et la cible chiffrée de chaque poste-repère.",
      "Livrable 2 — La grille salariale calibrée (onglet Grille salariale) : coefficients cotés, facteur d'expérience, salaire de base de l'organisation retenu après trois essais.",
      "Livrable 3 — La vérification d'équité interne (onglet Équité interne) et le plan de transition de dix lignes, chiffré, validé par le comité et communiqué individuellement.",
      "Livrable 4 — Le barème des compléments de la mission et deux notes de calcul de primes signées et archivées.",
      "Livrable 5 — La fiche de contrôle annuel des cotisations sociales, avec le chiffrage des écarts et le plan de régularisation.",
      "Livrable 6 — L'inventaire chiffré des avantages sociaux (national et international) et le coût total employeur par profil.",
      "Livrable 7 — Le calendrier de revue annuelle de la politique de rémunération, avec un responsable par action.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '35 %',
    caption: "d'écart entre 905 USD et 670 USD pour deux Chargés de Programme KSS qui ont le même diplôme, la même expérience et la même fiche de poste — c'est ce que l'onglet Équité interne fait apparaître le mardi 22 septembre 2026.",
    context: "Chiffres fictifs. Personne n'a fait d'erreur de mauvaise foi : le plus payé a obtenu 905 USD à l'embauche en 2025 parce qu'il avait une offre concurrente, à une époque où KSS n'appliquait aucune grille. C'est le type d'écart que la méthode de ce module détecte et corrige avant qu'il ne devienne une plainte.",
  },

  // ─── Théorie essentielle ───────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Deux piliers, toujours documentés séparément',
    body: [
      "Une grille salariale défendable repose sur deux piliers. Le benchmarking externe répond à la question : combien paie le marché pour ce type de poste dans ce contexte ? La cohérence interne répond à : deux postes de valeur comparable dans mon organisation sont-ils rémunérés de façon comparable ?",
      "Négliger l'un des deux, même si l'autre est solide, expose l'ONG au même risque : un salarié qui compare sa fiche de paie à celle d'un collègue, ou à une offre d'une agence onusienne dans la même ville, et qui a de bonnes raisons de se sentir lésé.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Pilier externe : l'enquête inter-ONG situe le Chargé de Programme entre 700 et 1 100 USD par mois. S. Murhula (905) et G. Cirhuza (670) sont tous deux dans ou sous la fourchette : le marché ne dit rien d'anormal.",
        "Pilier interne : 905 contre 670 pour le même poste, soit 35 % d'écart. C'est le pilier interne qui révèle le risque, pas le marché.",
      ],
    },
    highlight: "Benchmarking externe + équité interne : les deux sont nécessaires, aucun ne remplace l'autre. Un salaire peut être au prix du marché et pourtant injuste par rapport au collègue de bureau.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois sources de benchmarking salarial : jamais une seule',
    columns: ['Source', 'Rôle dans la grille', 'Où la trouver', 'Limite à connaître'],
    rows: [
      ['Grilles ONU (barèmes ICSC / UNDP)', 'Référence « plafond » dans la plupart des contextes', 'Site public de la Commission de la fonction publique internationale (ICSC) ; barème du pays ou du lieu d\'affectation', "Une ONG ne peut généralement pas s'aligner dessus (primes financées par des budgets qu'elle n'a pas), mais les ignorer fait partir vos meilleurs éléments nationaux"],
      ['Enquêtes salariales inter-ONG', 'Référence la plus pertinente pour une ONG de taille moyenne : fourchettes par poste et par zone', 'Sur demande directe au coordinateur RH du cluster ou du consortium inter-ONG', 'Circulent rarement en libre accès ; dépendent du nombre d\'ONG participantes'],
      ['Secteur public local et salaire minimum légal', 'Plancher absolu, jamais une cible', 'Ministère du Travail, Journal officiel local', "Avec plus de 20 % d'inflation par an, un salaire aligné dessus devient un salaire de misère qui ne retient personne"],
    ],
  },
  {
    type: 'concept',
    title: 'Écrire sa règle de positionnement, puis la chiffrer',
    body: [
      "Une grille sérieuse positionne chaque poste-repère entre ces trois références par une décision explicite et documentée. Exemple de règle : « jamais en dessous du salaire minimum légal local, jamais au-dessus de 65 % du barème ONU/ICSC équivalent, cible générale = percentile indiqué par poste ». C'est la formulation du template, à adapter à votre organisation.",
      "Un percentile se calcule sur votre enquête. Si l'enquête ne donne que le minimum et le maximum, on estime par interpolation linéaire : cible = minimum + (maximum − minimum) × percentile. Si elle donne les quartiles ou la médiane, utilisez-les directement. Dans tous les cas, écrivez la méthode dans la colonne Source/commentaire.",
    ],
    example: {
      title: 'Calcul pour le Chargé de Programme KSS',
      lines: [
        'Enquête inter-ONG : minimum 700 USD, maximum 1 100 USD. Percentile retenu : 60e.',
        'Cible = 700 + (1 100 − 700) × 0,60 = 700 + 240 = 940 USD par mois.',
        'Plafond = 65 % × barème ONU équivalent 1 800 = 1 170 USD. Zone admise : de 700 à 1 100 USD (le maximum de l\'enquête est plus bas que le plafond).',
      ],
    },
    highlight: "Une fois écrite, cette règle vous permet de répondre à toute contestation salariale par un argument objectif plutôt que par une justification improvisée.",
  },
  {
    type: 'concept',
    title: "Le principe « à travail égal, salaire égal » et ses conséquences pratiques",
    body: [
      "Dans beaucoup de pays d'intervention, le droit du travail local reconnaît ce principe même si l'ONG n'a pas de politique RH écrite : un écart de salaire entre deux postes de même valeur, qui ne s'explique ni par le diplôme, ni par l'expérience prouvable, ni par la responsabilité, est une base solide de plainte. Vérifiez la formulation exacte dans le code du travail applicable, avec un cabinet juridique local.",
      "Deux conséquences. Premièrement, vous ne pouvez pas régler un écart en baissant unilatéralement le salaire le plus élevé : c'est, dans la plupart des contextes, une modification substantielle du contrat sans accord, et c'est destructeur pour le climat social. Deuxièmement, le temps ne règle rien : l'écart sera découvert, car les collègues se côtoient, et il vaut mieux le corriger avant qu'ils ne le découvrent.",
    ],
    tip: "Ne disculpez jamais un écart par « il a mieux négocié ». La négociation n'est ni un diplôme, ni une expérience, ni une responsabilité : elle ne se défend pas devant un juge ou un auditeur.",
  },
  {
    type: 'comparison-table',
    title: 'Prime terrain, indemnité de risque, hardship allowance : trois logiques',
    columns: ['Complément', "Ce qu'il compense", 'Base de calcul typique', 'Question à poser avant de l\'accorder'],
    rows: [
      ['Prime terrain (field allowance)', "Déploiement loin du lieu de résidence habituel, conditions de vie et de travail plus dures qu'au siège ou en capitale — indépendamment de tout danger particulier", 'Forfait journalier ou mensuel fixe, identique pour tous les postes déployés sur une même base, quel que soit le niveau hiérarchique', 'Le poste est-il déployé sur une base de terrain, hors capitale ?'],
      ['Indemnité de risque (security/risk allowance)', "Niveau de menace sécuritaire spécifique et documenté (conflit actif, risque INSO/UNDSS élevé, danger identifié) — pas la dureté générale de la vie", 'Pourcentage du salaire de base, aligné sur la classification sécuritaire officielle de la zone, révisé quand elle change', 'Existe-t-il une classification sécuritaire datée qui justifie ce niveau ?'],
      ['Hardship allowance', "Éloignement, isolement et conditions de vie dégradées sur la durée (eau potable, électricité, santé, éducation, enclavement) — pas un danger immédiat", 'Pourcentage du salaire de base ou grille à paliers (catégories A/B/C), calquée sur une classification externe reconnue et adaptée au contexte', 'Les conditions de vie de la zone sont-elles objectivement dégradées ?'],
    ],
  },
  {
    type: 'concept',
    title: 'Piège classique : la « prime de risque » en capitale stable',
    body: "Accorder une prime de risque à un poste basé dans une capitale relativement stable, sous prétexte que le pays dans son ensemble est classé à risque, alors que le poste ne justifie ni indemnité de risque (pas d'exposition directe) ni hardship (conditions de vie urbaines correctes). Une indemnité mal ciblée, une fois connue des autres employés, est presque toujours perçue comme un privilège arbitraire, même accordée de bonne foi.",
    example: {
      title: 'Test rapide sur trois postes KSS',
      lines: [
        'Finance Manager à Kinshasa : base de capitale, aucune exposition directe, conditions urbaines correctes → aucun complément.',
        'Chargé de Programme à Goma : base de terrain, classification sécuritaire niveau 3, conditions de vie dégradées → prime terrain + risque + hardship, chacun avec son critère.',
        'Chargé de Programme à Uvira : base de terrain, niveau 2, mêmes conditions de vie que Goma → prime terrain + risque (5 %) + hardship identique à Goma.',
      ],
    },
    pitfall: "Ne cumulez jamais deux compléments pour le même critère : un poste peut cumuler plusieurs compléments seulement si chacun répond à un critère distinct et documenté.",
  },
  {
    type: 'concept',
    title: 'Cotisations sociales : le socle non négociable',
    body: [
      "Tout employeur, ONG comprise, a des obligations légales de cotisations sociales (CNSS en RDC et dans plusieurs pays d'Afrique francophone, équivalents locaux ailleurs) : une part salariale retenue sur le brut, une part patronale à la charge de l'ONG, versées à un organisme de sécurité sociale qui couvre en théorie la retraite, les prestations familiales et parfois les accidents du travail.",
      "Le non-respect expose à un redressement administratif, souvent des années plus tard, avec pénalités de retard cumulées : changement d'inspecteur, plainte d'un ancien employé, audit de bailleur exigeant une preuve de conformité sociale.",
    ],
    highlight: "Un HR Manager sérieux ne délègue jamais cette question uniquement à la Finance : il vérifie au moins une fois par an que les taux correspondent au barème légal en vigueur et que les déclarations sont effectivement déposées, pas seulement calculées sur une fiche de paie.",
    tip: "Les taux et plafonds changent parfois sans communication officielle claire. Datez la source que vous utilisez et, en cas de doute, passez par un cabinet comptable ou juridique local plutôt que par une information non datée trouvée en ligne.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire à maîtriser dès ce module',
    terms: [
      { term: 'Grille salariale par coefficient de poste', definition: "Système où chaque poste reçoit un coefficient reflétant son niveau de responsabilité ; le salaire se calcule par salaire de base de l'organisation × coefficient × facteur d'expérience." },
      { term: "Salaire de base de l'organisation", definition: "Valeur unique (cellule B3 du template) multipliée par chaque coefficient, sorte de « valeur du point ». On la calibre une fois par an sur le marché." },
      { term: "Facteur d'expérience", definition: "Multiplicateur individuel (1,00 ; 1,10 ; 1,20 dans l'exemple) fondé sur l'expérience prouvable. Il ne reflète jamais le pouvoir de négociation." },
      { term: 'Poste-repère', definition: "Poste bien défini, occupé par plusieurs personnes ou facile à comparer au marché, sur lequel on construit le benchmarking ; les autres postes se positionnent par comparaison." },
      { term: 'Percentile de positionnement', definition: "Position choisie de votre grille par rapport au marché de référence (par exemple 50e percentile = salaire médian du secteur)." },
      { term: 'Équité interne', definition: "Le fait que deux postes de valeur comparable dans la même organisation soient rémunérés de façon comparable, indépendamment du marché externe." },
      { term: 'Prime terrain / indemnité de risque / hardship', definition: "Trois compléments distincts : conditions générales de la base, menace sécuritaire documentée, conditions de vie dégradées sur la durée." },
      { term: 'Plan de transition', definition: "Document écrit qui explique comment les salaires hors grille, à la hausse comme à la baisse, rejoignent la grille : dates, montants, conditions, coût." },
      { term: 'CNSS (ou équivalent local)', definition: "Caisse nationale de sécurité sociale : organisme percevant les cotisations sociales obligatoires de l'employeur et de l'employé." },
      { term: 'Coût total employeur', definition: "Salaire brut, compléments, cotisations patronales et avantages payés par l'ONG pour un salarié : c'est le chiffre qui entre dans le budget bailleur." },
    ],
  },
  {
    type: 'concept',
    title: 'Qui est qui dans le cas fil rouge',
    body: "Avant toute action, posez les noms sur les rôles : ce tableau dit à qui vous demandez quoi dans ce module. Les personnes de la base de Goma sont les mêmes qu'au Module 01.",
    table: {
      columns: ['Rôle', 'Nom (fictif)', 'Lieu', 'Rôle dans ce module'],
      rows: [
        ['Head of Mission', 'H. Mwamba', 'Kinshasa', 'Décide la grille et le plan de transition (comité du 22 octobre).'],
        ['HR Manager de mission', 'A. Kavira', 'Kinshasa', 'Valide techniquement, signe les notes de primes, mène les entretiens sensibles.'],
        ['HR Officer de base', 'N. Mbusa (vous)', 'Goma', 'Construit la grille, rédige les notes, prépare le plan.'],
        ['Finance Manager de mission', 'R. Ilunga', 'Kinshasa', 'Valide le coût, les taux de cotisations et la ligne budgétaire.'],
        ['Payroll Officer', 'C. Bahati', 'Goma', 'Fournit les extraits de paie, applique les tranches.'],
        ['Chargé de Programme, zone de Goma', 'S. Murhula', 'Goma', 'Salaire de base 905 USD, entré en mars 2025.'],
        ['Chargé de Programme, zone d\'Uvira', 'G. Cirhuza', 'Uvira', 'Salaire de base 670 USD, entré en mars 2023.'],
        ['Head of HR siège', 'S. Lambert', 'Siège', 'Informée de toute révision de grille (politique RH globale).'],
      ],
    },
    tip: "Les salaires individuels sont confidentiels : seuls le HR Manager, le HR Officer habilité et la Finance les voient. Un classeur contenant des salaires nominatifs se protège par mot de passe et ne circule jamais en copie libre.",
  },
  {
    type: 'concept',
    title: 'Vos outils pour ce module : les deux templates, champ par champ',
    body: "Les deux templates du dossier 04-templates sont utilisés champ par champ dans les procédures qui suivent. Ne créez ni colonne ni onglet supplémentaire dans les zones de formule.",
    table: {
      columns: ['Template', 'Ce qu\'il contient', 'Utilisé dans'],
      rows: [
        ['grille-salariale-benchmarking-coefficients.xlsx', "Onglet Benchmarking (A à H : Poste-repère, Barème ONU/ICSC équivalent, Enquête inter-ONG min et max, Salaire minimum légal local, Percentile retenu, Date de la donnée, Source/commentaire ; règle de positionnement en A12). Onglet Grille salariale (B3 salaire de base ; A à I : Nom, Poste, Famille, Coefficient, Facteur d'expérience, Salaire de base, Salaire proposé, Salaire réel actuel, Écart). Onglet Équité interne (A à F : Poste, Coefficient, Nombre de lignes, Salaire réel min et max, Écart max/min)", 'Procédures 1, 2, 6'],
        ['note-calcul-primes-terrain-hardship.docx', "Note d'une page en 7 sections : 1 Identification, 2 Salaire de base, 3 Prime terrain, 4 Indemnité de risque, 5 Hardship allowance, 6 Récapitulatif du calcul (4 lignes + totaux), 7 Vérification de cohérence, puis tableau de signatures", 'Procédure 3'],
      ],
    },
    pitfall: "Ne modifiez jamais les colonnes de formule (F, G, I de la Grille ; B à F de l'Équité interne), seulement les valeurs d'entrée. Une formule écrasée par un chiffre tapé à la main fausse silencieusement toute la grille.",
  },

  // ─── Procédure 1 — Construire la grille ───────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 1 — Construire la grille salariale par coefficient de poste (semaines 1 et 2)',
    body: "C'est la procédure centrale du module, adaptée du guide pratique source. Vous allez transformer une grille de 2022 que personne n'applique en grille chiffrée, calibrée sur le marché et vérifiée ligne par ligne, avec le template grille-salariale-benchmarking-coefficients.xlsx.",
    bullets: [
      'Étape 1 — Préparer le classeur et lister les postes-repères.',
      'Étape 2 — Collecter les trois sources de benchmarking.',
      "Étape 3 — Remplir l'onglet Benchmarking.",
      'Étape 4 — Écrire la règle de positionnement et calculer la cible de chaque poste.',
      'Étape 5 — Coter chaque poste sur quatre critères objectifs.',
      "Étape 6 — Saisir la structure et les coefficients dans l'onglet Grille salariale.",
      "Étape 7 — Calibrer le salaire de base de l'organisation et contrôler la grille.",
      'Étape 8 — Saisir les salaires réels actuels et lire les écarts.',
      "Étape 9 — Lire l'onglet Équité interne.",
    ],
    result: "Livrable : le classeur complété, avec benchmarking daté, grille calibrée et alertes d'équité identifiées, prêt pour la Procédure 2.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 9',
    title: 'Préparer le classeur et lister les postes-repères',
    intro: "Entrée : l'organigramme validé (Module 01), les fiches de poste, l'extrait de paie avec matricule. Aucune donnée de marché n'est collectée avant que la liste des postes soit vérifiée.",
    steps: [
      {
        title: 'Préparez le classeur',
        actions: [
          "Copiez grille-salariale-benchmarking-coefficients.xlsx sous « Grille_KSS_RDC_2026-09.xlsx » dans le dossier RH confidentiel.",
          "Ouvrez les trois onglets : Benchmarking, Grille salariale, Équité interne. Notez que les lignes d'exemple (N'Djamena, Chad) sont des valeurs de démonstration à remplacer.",
          "Protégez le fichier par mot de passe : il contiendra des salaires nominatifs.",
        ],
      },
      {
        title: 'Listez les postes réellement occupés',
        actions: [
          "Demandez à la Payroll Officer l'extrait de paie : matricule, nom, intitulé de poste, salaire de base.",
          "Regroupez les intitulés par famille (Support, Programme, Coordination) puis par niveau hiérarchique.",
          "Vérifiez chaque intitulé contre la fiche de poste : même titre mais responsabilités différentes = deux postes ; titres différents pour les mêmes responsabilités = un seul poste.",
        ],
      },
      {
        title: 'Choisissez les postes-repères',
        actions: [
          "Retenez les postes occupés par plusieurs personnes ou faciles à comparer au marché. Les autres seront positionnés ensuite par comparaison avec ces repères.",
          "Écrivez l'intitulé exact de chaque poste-repère : il sera recopié à l'identique dans les trois onglets.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 14 septembre 2026',
      lines: [
        "Mission RDC : 71 salariés nationaux, 18 intitulés distincts dans la paie, dont deux variantes de « Chargé de Programme » (Nutrition, Santé) aux responsabilités identiques d'après les fiches de poste → fusionnées.",
        'Six postes-repères retenus pour ce premier cycle : Chauffeur / Logisticien base (9 personnes), Assistant Administratif RH (4), Chargé de Programme (2), HR Officer (3), Coordinateur Terrain (3), HR Manager Pays (1).',
        'Familles : Support (Chauffeur, Assistant RH, HR Officer), Programme (Chargé de Programme), Coordination (Coordinateur Terrain, HR Manager Pays).',
      ],
    },
    result: 'Fait quand : vous avez une liste écrite des postes-repères avec famille, effectif et intitulé exact, validée par le HR Manager.',
    pitfall: "Partir des intitulés existants sans vérifier les fiches de poste : deux personnes peuvent porter le même titre pour des responsabilités très différentes selon qui a rédigé leur contrat. Votre grille hériterait de l'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 9',
    title: 'Collecter les trois sources de benchmarking',
    intro: "Semaine 1. Pour chaque poste-repère, il vous faut trois chiffres en USD par mois et la date de chacun. Aucune des trois sources ne suffit seule.",
    steps: [
      {
        title: 'Barème ONU/ICSC',
        actions: [
          "Téléchargez, sur le site public de l'ICSC, le barème en vigueur pour le pays ou le lieu d'affectation.",
          "Pour chaque poste-repère, choisissez la classe la plus proche : par exemple une classe de cadre national pour un Chargé de Programme, la classe supérieure pour la coordination, l'échelle des services généraux pour les postes d'appui.",
          "Convertissez en USD par mois (annuel ÷ 12) et notez la date de publication et le taux de change utilisé.",
        ],
      },
      {
        title: 'Enquête inter-ONG',
        actions: [
          "Écrivez au coordinateur RH du cluster ou du consortium inter-ONG pour obtenir l'enquête la plus récente.",
          "Demandez : année de l'enquête, nombre d'ONG participantes, définition des postes, minimum et maximum (ou quartiles) par poste.",
          "Proposez en échange vos propres données : une enquête circule d'autant mieux que vous y contribuez.",
        ],
      },
      {
        title: 'Salaire minimum légal',
        actions: [
          "Consultez le Ministère du Travail ou le Journal officiel local pour le salaire minimum de la catégorie correspondant à chaque poste.",
          "Notez la référence du texte (numéro, date) et convertissez en USD par mois.",
          "En cas de doute sur la version en vigueur, faites confirmer par un cabinet juridique local.",
        ],
      },
    ],
    example: {
      title: 'Courriel envoyé le lundi 14 septembre 2026',
      lines: [
        'Objet : Enquête salariale inter-ONG 2026 — demande de partage (KSS RDC)',
        "Bonjour, KSS prépare la mise à jour de sa grille salariale nationale. Pourriez-vous nous transmettre l'enquête inter-ONG la plus récente (fourchettes minimum et maximum par poste, zone Nord et Sud-Kivu) ?",
        'Nous pouvons en retour partager nos fourchettes pour les six postes suivants : Chauffeur/Logisticien base, Assistant Administratif RH, Chargé de Programme, HR Officer, Coordinateur Terrain, HR Manager Pays.',
        'Merci de nous préciser la date de collecte et le nombre d\'organisations participantes. N. Mbusa, HR Officer KSS — copie : A. Kavira.',
      ],
    },
    result: 'Fait quand : les trois sources sont enregistrées dans un dossier « Benchmarking_2026-09 », chacune avec sa date, son auteur et sa référence.',
    pitfall: "Un chiffre non daté, ou trouvé en ligne sans source, est inutilisable dans 18 mois et indéfendable devant un auditeur. Mieux vaut un poste sans donnée qu'un chiffre sans date.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 9',
    title: "Remplir l'onglet Benchmarking, ligne par ligne",
    intro: "Une ligne par poste-repère, de la ligne 5 à la ligne 10 du template (insérez des lignes à l'intérieur de la plage si vous avez plus de six postes). Les huit colonnes sont toutes à saisir.",
    steps: [
      {
        title: 'Saisissez les colonnes A à E (chiffres)',
        actions: [
          'A — Poste-repère : intitulé exact, identique à celui que vous utiliserez dans la Grille salariale.',
          'B — Barème ONU/ICSC équivalent (USD/mois).',
          "C et D — Enquête inter-ONG : minimum puis maximum (USD/mois).",
          'E — Salaire minimum légal local (USD/mois).',
        ],
      },
      {
        title: 'Saisissez les colonnes F, G et H (décision et source)',
        actions: [
          'F — Percentile de positionnement retenu, en texte : « 60e percentile ONG ».',
          "G — Date de la donnée, au format AAAA-MM-JJ comme dans le template. Si vos trois sources ont des dates différentes, saisissez la plus ancienne.",
          'H — Source / commentaire : nom de l\'enquête, classe ICSC, référence du texte légal, méthode de calcul du percentile.',
        ],
      },
      {
        title: 'Contrôlez la cohérence des valeurs',
        actions: [
          "Vérifiez que pour chaque ligne : minimum légal < minimum de l'enquête < maximum de l'enquête < barème ONU.",
          "Si une ligne ne respecte pas cet ordre, revérifiez la source avant de continuer.",
        ],
      },
    ],
    table: {
      columns: ['A — Poste-repère', 'B — ONU/ICSC', 'C — ONG min', 'D — ONG max', 'E — Min. légal', 'F — Percentile', 'G — Date'],
      rows: [
        ['Chauffeur / Logisticien base', '760', '380', '520', '90', '60e percentile ONG', '2026-06-15'],
        ['Assistant Administratif RH', '900', '440', '620', '110', '55e percentile ONG', '2026-06-15'],
        ['Chargé de Programme', '1 800', '700', '1 100', '160', '60e percentile ONG', '2026-06-15'],
        ['HR Officer', '1 950', '760', '1 200', '160', '60e percentile ONG', '2026-06-15'],
        ['Coordinateur Terrain', '3 200', '1 500', '2 300', '220', '65e percentile ONG', '2026-06-15'],
        ['HR Manager Pays', '3 700', '1 700', '2 600', '220', '65e percentile ONG', '2026-06-15'],
      ],
    },
    example: {
      title: 'Fil rouge — colonne H (Source / commentaire) du Chargé de Programme',
      lines: [
        "Enquête inter-ONG Nord et Sud-Kivu, collecte juin 2026, 11 ONG participantes ; classe ICSC cadre national niveau A, barème publié 01/2026 ; minimum légal : texte de la catégorie « cadres », vérifié par le cabinet juridique le 10/09/2026 ; percentile estimé par interpolation linéaire min–max.",
      ],
    },
    result: "Fait quand : les six lignes sont complètes (colonnes A à H), chaque donnée est datée et chaque ligne a sa source. Les valeurs de démonstration de N'Djamena ont disparu.",
    tip: "Copiez-collez l'intitulé du poste depuis l'onglet Benchmarking vers la Grille : l'onglet Équité interne compare les postes par texte exact. Une espace en trop ou « Chargé » sans accent casse le regroupement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 9',
    title: 'Écrire la règle de positionnement et calculer la cible de chaque poste',
    intro: "La règle est la phrase en bas de l'onglet Benchmarking (cellule A12). Sans elle, la grille n'a pas de critère d'acceptation : chaque contestation se réglera au cas par cas.",
    steps: [
      {
        title: 'Rédigez et faites valider la règle (cellule A12)',
        actions: [
          'Écrivez trois clauses : plancher (jamais en dessous du salaire minimum légal), plafond (jamais au-dessus de X % du barème ONU/ICSC équivalent), cible (percentile indiqué par poste).',
          "Fixez X avec la Finance : c'est la part du barème ONU que l'organisation peut soutenir à long terme, y compris après une baisse de financement bailleur.",
          "Contrôlez la cohérence : le plafond doit rester au-dessus de la cible de chaque poste.",
        ],
      },
      {
        title: 'Calculez cible, plafond et zone admise pour chaque poste',
        actions: [
          'Cible = minimum enquête + (maximum − minimum) × percentile.',
          'Plafond = pourcentage de la règle × barème ONU équivalent.',
          "Zone admise = de la colonne C (minimum de l'enquête) jusqu'au plus petit entre D (maximum de l'enquête) et le plafond.",
          "Notez ces valeurs dans une zone libre de la feuille (à partir de la ligne 15) ou sur papier : ne créez pas de colonne dans le tableau.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Cible', 'Plafond 65 % ONU', 'Zone admise (USD)'],
      rows: [
        ['Chauffeur / Logisticien base', '464', '494', '380 à 494'],
        ['Assistant Administratif RH', '539', '585', '440 à 585'],
        ['Chargé de Programme', '940', '1 170', '700 à 1 100'],
        ['HR Officer', '1 024', '1 268', '760 à 1 200'],
        ['Coordinateur Terrain', '2 020', '2 080', '1 500 à 2 080'],
        ['HR Manager Pays', '2 285', '2 405', '1 700 à 2 405'],
      ],
    },
    example: {
      title: 'Fil rouge — cellule A12 après validation du HR Manager le 17 septembre',
      lines: [
        "Règle de positionnement de l'organisation : jamais en dessous du salaire minimum légal local, jamais au-dessus de 65 % du barème ONU/ICSC équivalent, cible générale = percentile indiqué par poste ci-dessus.",
        'Contrôle : pour le Chauffeur, le plafond (494) est inférieur au maximum de l\'enquête (520) : c\'est le plafond qui borne la zone.',
      ],
    },
    result: "Fait quand : la règle est validée par écrit et chaque poste-repère a une cible, un plafond et une zone admise chiffrés.",
    pitfall: "Une règle qui place la cible au-dessus du plafond (par exemple 90e percentile avec 65 % de l'ONU) est impossible à appliquer : vous le découvrirez à la première contestation. Chiffrez avant de valider.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 9',
    title: 'Coter chaque poste sur quatre critères objectifs',
    intro: "Le coefficient reflète le niveau de responsabilité du poste, pas l'ancienneté de la personne ni son pouvoir de négociation. La cotation se fait sur la fiche de poste, jamais sur la personne.",
    steps: [
      {
        title: 'Construisez la table de cotation (feuille de travail, hors template)',
        actions: [
          'Quatre critères, cinq niveaux chacun (1 à 5) : subordonnés directs, budget géré, niveau de décision autonome, qualification requise.',
          "Subordonnés : 1 = aucun, 2 = 1 à 2, 3 = 3 à 5, 4 = 6 à 10, 5 = plus de 10.",
          'Budget géré par an : 1 = aucun, 2 = moins de 20 000 USD, 3 = 20 000 à 100 000, 4 = 100 000 à 500 000, 5 = plus de 500 000.',
          'Décision : 1 = exécute des consignes, 2 = organise son travail, 3 = décide dans un cadre défini, 4 = engage l\'ONG sur sa zone, 5 = arbitre pour toute la mission.',
          'Qualification : 1 = niveau primaire ou permis, 2 = secondaire ou technique, 3 = baccalauréat + 2 ans ou expérience équivalente, 4 = licence, 5 = master et plus de 7 ans d\'expérience.',
        ],
      },
      {
        title: 'Cotez à deux, puis additionnez',
        actions: [
          'Deux personnes cotent séparément (HR Officer et HR Manager) à partir des fiches de poste.',
          'Si deux notes diffèrent de plus d\'un niveau, relisez la fiche de poste ensemble et tranchez par écrit.',
          'Additionnez les quatre niveaux : total de 4 à 20.',
        ],
      },
      {
        title: 'Convertissez les points en coefficient par une table de bandes',
        actions: [
          'Regroupez les postes ayant un score proche dans un même coefficient.',
          'Table KSS : 4–5 points = 1,6 ; 6–7 = 2,1 ; 8–9 = 2,5 ; 10–11 = 3,3 ; 12–13 = 4,5 ; 14–15 = 6,5 ; 16–17 = 9,0 ; 18–20 = 10,0.',
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Subordonnés', 'Budget', 'Décision', 'Qualification', 'Total', 'Coefficient'],
      rows: [
        ['Chauffeur / Logisticien base', '1', '1', '2', '2', '6', '2,1'],
        ['Assistant Administratif RH', '1', '1', '3', '3', '8', '2,5'],
        ['Chargé de Programme', '3', '3', '3', '4', '13', '4,5'],
        ['HR Officer', '2', '2', '4', '4', '12', '4,5'],
        ['Coordinateur Terrain', '4', '4', '4', '4', '16', '9,0'],
        ['HR Manager Pays', '4', '4', '5', '5', '18', '10,0'],
      ],
    },
    result: "Fait quand : chaque poste-repère a quatre notes justifiées par sa fiche de poste, un total et un coefficient, et la table de bandes est écrite.",
    pitfall: "Corriger un coefficient pour « faire rentrer » le salaire d'une personne : le coefficient appartient au poste. Si un salarié vous paraît mal classé, c'est la fiche de poste qu'il faut réviser, pas le coefficient.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 9',
    title: "Saisir la structure et les coefficients dans l'onglet Grille salariale",
    intro: "Vous entrez les valeurs d'entrée seulement : colonnes A à E et cellule B3. Les colonnes F, G et I sont des formules : F = B3, G = F × D × E, I = H − G (vide si H est vide).",
    steps: [
      {
        title: 'Préparez les lignes sans casser les plages',
        actions: [
          "Le template contient 7 lignes (5 à 11). Pour en ajouter, sélectionnez la ligne 11, clic droit > Insérer : la plage de calcul de l'onglet Équité interne s'étend automatiquement.",
          "Copiez les formules F, G et I de la ligne voisine dans la ligne insérée.",
          "Ne tapez jamais de ligne sous la dernière : elle serait ignorée par l'onglet Équité interne.",
        ],
      },
      {
        title: 'Saisissez les colonnes A à E',
        actions: [
          'A — Nom, ou « Poste-type » si le poste n\'a pas de titulaire saisi.',
          'B — Poste : copie exacte de l\'intitulé du Benchmarking.',
          'C — Famille de poste : Support, Programme ou Coordination.',
          'D — Coefficient de poste, issu de la table de bandes.',
          "E — Facteur d'expérience : pour une ligne poste-type, saisissez 1,10 (profil de référence).",
        ],
      },
      {
        title: "Écrivez l'échelle du facteur d'expérience",
        actions: [
          "Hors template, dans la politique : 1,00 = moins de 3 ans d'expérience pertinente ; 1,10 = 3 à 7 ans ; 1,20 = plus de 7 ans.",
          "Chaque facteur supérieur à 1,00 se justifie par des pièces : CV, certificats de travail, diplômes.",
        ],
      },
    ],
    table: {
      columns: ['A — Nom', 'B — Poste', 'C — Famille', 'D — Coefficient', 'E — Facteur'],
      rows: [
        ['Poste-type', 'Chauffeur / Logisticien base', 'Support', '2,1', '1,10'],
        ['Poste-type', 'Assistant Administratif RH', 'Support', '2,5', '1,10'],
        ['S. Murhula', 'Chargé de Programme', 'Programme', '4,5', '1,10'],
        ['G. Cirhuza', 'Chargé de Programme', 'Programme', '4,5', '1,10'],
        ['Poste-type', 'HR Officer', 'Support', '4,5', '1,10'],
        ['Poste-type', 'Coordinateur Terrain', 'Coordination', '9,0', '1,10'],
        ['Poste-type', 'HR Manager Pays', 'Coordination', '10,0', '1,10'],
      ],
    },
    result: "Fait quand : toutes les lignes ont A à E remplies et la cellule B3 contient encore la valeur par défaut (300). À ce stade les salaires proposés en G sont provisoires et trop élevés : c'est normal, l'étape 7 les calibre.",
    tip: "S. Murhula et G. Cirhuza ont le même facteur (1,10) : tous deux avaient 5 ans d'expérience pertinente et le même master à l'embauche. Si vous constatiez une vraie différence d'expérience prouvable, ce serait la seule justification légitime d'un facteur différent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 7 sur 9',
    title: "Calibrer le salaire de base de l'organisation et contrôler la grille",
    intro: "Le salaire de base de l'organisation (cellule B3) est la seule valeur qui déplace toute la grille d'un coup. Vous la choisissez par essais, avec trois tests appliqués à chaque poste.",
    steps: [
      {
        title: 'Testez plusieurs valeurs de B3',
        actions: [
          'Partez du poste pivot (le plus occupé ou le plus comparable) : B3 ≈ cible ÷ (coefficient × facteur) = 940 ÷ (4,5 × 1,10) ≈ 190.',
          'Changez seulement B3, relevez les salaires proposés en G, essayez 190, 200 puis 210.',
        ],
      },
      {
        title: 'Appliquez trois tests à chaque poste',
        actions: [
          "Test 1 : le salaire proposé (G) est supérieur ou égal au minimum légal et au minimum de l'enquête.",
          "Test 2 : G est inférieur ou égal au plafond (65 % de l'ONU) et au maximum de l'enquête.",
          "Test 3 : le percentile atteint = (G − minimum) ÷ (maximum − minimum) reste à plus ou moins 15 points du percentile cible.",
        ],
      },
      {
        title: 'Retenez la valeur et figez-la',
        actions: [
          "Retenez la valeur qui laisse le moins de postes hors tolérance.",
          'Notez la décision avec date et auteur (colonne H du Benchmarking ou compte rendu).',
        ],
      },
    ],
    table: {
      columns: ['Valeur de B3', 'Postes hors tolérance sur 6', 'Lecture'],
      rows: [
        ['300 (valeur par défaut du template)', '6', 'Tous les postes dépassent le plafond : Chargé de Programme à 1 485 USD pour une zone admise de 700 à 1 100.'],
        ['190', '4', 'Chauffeur à 42e percentile, HR Officer à 41e, Coordinateur à 48e, HR Manager à 43e : trop bas.'],
        ['200', '0', 'Chauffeur 59e, Assistant 61e, Chargé 73e, HR Officer 52e, Coordinateur 60e, HR Manager 56e : tous dans la tolérance.'],
        ['210', '3', 'Chargé à 85e percentile (+25 points) ; Assistant et Chauffeur au-dessus de la tolérance.'],
      ],
    },
    example: {
      title: 'Fil rouge — grille retenue le jeudi 24 septembre 2026 (B3 = 200)',
      lines: [
        'Chauffeur / Logisticien base : 2,1 × 200 × 1,10 = 462 USD (cible 464).',
        'Assistant Administratif RH : 2,5 × 200 × 1,10 = 550 USD (cible 539).',
        'Chargé de Programme : 4,5 × 200 × 1,10 = 990 USD (cible 940).',
        'HR Officer : 4,5 × 200 × 1,10 = 990 USD (cible 1 024).',
        'Coordinateur Terrain : 9,0 × 200 × 1,10 = 1 980 USD (cible 2 020, plafond 2 080).',
        'HR Manager Pays : 10,0 × 200 × 1,10 = 2 200 USD (cible 2 285, plafond 2 405).',
      ],
    },
    result: "Fait quand : B3 = 200 est retenu, les six postes passent les trois tests, et la décision est écrite et datée.",
    pitfall: "Appliquer un facteur d'expérience de 1,20 à un coordinateur de la grille : 9,0 × 200 × 1,20 = 2 160 USD dépasse le plafond de 2 080. Le facteur est borné par la règle, il ne la contourne pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 8 sur 9',
    title: 'Saisir les salaires réels actuels et lire les écarts',
    intro: "La colonne H est la seule colonne de la Grille qui vient de la paie. L'écart de la colonne I et le surlignage vous disent où regarder, pas ce qu'il faut décider.",
    steps: [
      {
        title: 'Saisissez la colonne H sur pièces',
        actions: [
          "Prenez le salaire de base mensuel dans le contrat signé et ses avenants (Module 03), recoupé avec l'extrait de paie : jamais de mémoire.",
          "Saisissez le salaire de base seul, hors prime terrain, risque, hardship et cotisations.",
          "Pour un poste dont vous saisissez le titulaire, remplacez « Poste-type » par son nom dans la colonne A. Les salaires du HR Manager et du Head of Mission sont saisis par le HR Manager seul.",
        ],
      },
      {
        title: 'Lisez I et le surlignage',
        actions: [
          'I = H − G : négatif si le salarié est payé moins que la grille, positif s\'il est payé plus.',
          "Une ligne est surlignée par le template si la valeur absolue de l'écart dépasse 15 % du salaire proposé.",
          "Classez les lignes surlignées : à documenter ou à corriger avant validation.",
        ],
      },
    ],
    table: {
      columns: ['Nom', 'Poste', 'G — proposé', 'H — réel', 'I — écart', 'Écart en %', 'Surlignée ?'],
      rows: [
        ['H. Mushagalusa', 'Chauffeur / Logisticien base', '462', '450', '−12', '−2,6 %', 'Non'],
        ['C. Riziki', 'Assistant Administratif RH', '550', '520', '−30', '−5,5 %', 'Non'],
        ['S. Murhula', 'Chargé de Programme', '990', '905', '−85', '−8,6 %', 'Non'],
        ['G. Cirhuza', 'Chargé de Programme', '990', '670', '−320', '−32,3 %', 'Oui'],
      ],
    },
    result: "Fait quand : H est saisi sur pièces pour chaque titulaire pris en compte, et la liste des lignes surlignées est établie. Fil rouge : une seule ligne surlignée (G. Cirhuza), mais l'équité entre les deux Chargés n'est pas encore visible ici.",
    pitfall: "Conclure que S. Murhula est « dans la grille » parce que sa ligne n'est pas surlignée : l'écart au sens de la grille (−8,6 %) ne dit rien de l'écart avec son collègue (35 %). C'est l'onglet suivant qui le montre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 9 sur 9',
    title: "Lire l'onglet Équité interne et compléter le contrôle à la main",
    intro: "L'onglet compare les employés d'un même poste. Il ne remplace pas votre jugement : il vous montre les lignes à regarder.",
    steps: [
      {
        title: 'Lisez les six colonnes',
        actions: [
          'A — Poste. B — Coefficient (recherché dans la Grille). C — Nombre de lignes de la Grille portant ce poste.',
          'D et E — Salaire réel minimum et maximum parmi les lignes qui ont un salaire réel saisi.',
          "F — Écart max/min = (E − D) ÷ D. Rouge si F est supérieur à 10 %.",
          'Une ligne vide en D, E, F signifie qu\'aucun salaire réel n\'est saisi : la comparaison est impossible, pas rassurante.',
        ],
      },
      {
        title: 'Faites le contrôle manuel que l\'onglet ne fait pas',
        actions: [
          "L'onglet regroupe par intitulé exact. Triez la Grille par coefficient (colonne D) et comparez à la main les postes différents qui ont le même coefficient.",
          "Vérifiez qu'aucune variante d'intitulé (« Chargé de Programme Santé » et « Chargé de Programme ») n'échappe au regroupement.",
        ],
      },
      {
        title: 'Notez les alertes',
        actions: [
          'Pour chaque ligne rouge, notez le poste, le pourcentage, les deux salaires et la date de constat.',
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Coefficient', 'Nb lignes', 'Réel min', 'Réel max', 'Écart max/min'],
      rows: [
        ['Chauffeur / Logisticien base', '2,1', '1', '450', '450', '0 %'],
        ['Assistant Administratif RH', '2,5', '1', '520', '520', '0 %'],
        ['Chargé de Programme', '4,5', '2', '670', '905', '35,1 % (rouge)'],
        ['HR Officer', '4,5', '1', '—', '—', '—'],
        ['Coordinateur Terrain', '9', '1', '—', '—', '—'],
        ['HR Manager Pays', '10', '1', '—', '—', '—'],
      ],
    },
    example: {
      title: 'Fil rouge — notes du mardi 22 septembre 2026',
      lines: [
        'Alerte : Chargé de Programme, 35,1 % = (905 − 670) ÷ 670. Titulaires : S. Murhula (Goma, entré 03/2025) et G. Cirhuza (Uvira, entré 03/2023).',
        'Contrôle manuel : HR Officer et Chargé de Programme ont le même coefficient (4,5) ; les salaires réels des HR Officers seront saisis par le HR Manager seul.',
        'La colonne C compte aussi les lignes poste-type : « 1 » sur HR Officer ne veut pas dire un titulaire saisi.',
      ],
    },
    result: "Fait quand : chaque alerte rouge est notée avec ses preuves à réunir, et vous savez quelles lignes de l'onglet sont vides faute de données. C'est la matière de la Procédure 2.",
    pitfall: "Lire la colonne C comme un effectif : elle compte les lignes de la Grille, y compris les lignes poste-type sans salaire. Lisez-la toujours avec D et E.",
  },

  // ─── Procédure 2 — Corriger l'écart ───────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 2 — Corriger une inégalité salariale et faire valider la grille (semaines 3 à 6)",
    body: "L'onglet Équité interne vous a donné une alerte à 35 %. Il reste à décider quoi faire, sans baisser de salaire acquis, sans improviser le coût, et sans que la nouvelle grille ne soit connue avant que chaque situation individuelle ne soit réglée.",
    bullets: [
      'Étape 1 — Qualifier chaque écart : justifié ou non justifié, preuves à l\'appui.',
      "Étape 2 — Choisir la stratégie d'alignement.",
      'Étape 3 — Chiffrer le plan.',
      'Étape 4 — Rédiger le plan de transition en dix lignes maximum.',
      'Étape 5 — Faire valider par le comité avant toute communication.',
      'Étape 6 — Communiquer individuellement, puis collectivement.',
      "Étape 7 — Formaliser par avenant et mettre à jour les outils.",
    ],
    result: 'Livrable : un plan de transition de dix lignes, chiffré, validé par le comité et communiqué à chaque salarié concerné, avec avenants signés.',
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Qualifier chaque écart : justifié ou non justifié',
    intro: "Chaque écart signalé par l'onglet Équité interne doit être soit justifié par une différence réelle et prouvable, soit corrigé. Jamais laissé sans explication écrite.",
    steps: [
      {
        title: 'Constituez le dossier comparatif',
        actions: [
          'Ouvrez les dossiers individuels des deux salariés (Module 03) : contrat, avenants, diplômes, CV, certificats de travail, évaluations.',
          "Relevez les fiches de poste signées et vérifiez qu'elles décrivent les mêmes responsabilités.",
          'Cherchez la trace de la décision de salaire à l\'embauche : courriel d\'offre, compte rendu de recrutement.',
        ],
      },
      {
        title: 'Testez chaque critère de justification',
        actions: [
          "Justifications admises : diplôme requis, expérience pertinente prouvable, responsabilité différente documentée, tension de marché temporaire documentée au moment de l'embauche.",
          "Non admises : meilleure négociation, date d'embauche seule, sexe, nationalité, proximité avec un responsable.",
          "Concluez par écrit : justifié, partiellement justifié ou non justifié.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'S. Murhula (Goma)', 'G. Cirhuza (Uvira)', 'Différence objective ?'],
      rows: [
        ['Diplôme', 'Master en santé publique', 'Master en santé publique', 'Non'],
        ["Expérience pertinente à l'embauche", '5 ans', '5 ans', 'Non'],
        ['Entrée dans KSS', 'Mars 2025', 'Mars 2023', 'Oui, mais plus ancienne pour le moins payé'],
        ['Fiche de poste', 'Chargé de Programme, 4 agents, projet 180 000 USD', 'Chargé de Programme, 4 agents, projet 170 000 USD', 'Non (écart de 6 %)'],
        ['Zone et conditions', 'Goma, hardship 7 points', 'Uvira, hardship 7 points', 'Non (comparables)'],
        ['Décision à l\'embauche', 'Offre concurrente évoquée, 905 USD accordés', 'Salaire du barème de 2022, 670 USD', 'Négociation seule'],
      ],
    },
    result: 'Fait quand : chaque critère est rempli avec une pièce, et la conclusion écrite est : écart non justifié, origine = négociation à l\'embauche en l\'absence de grille.',
    pitfall: "Tirer la conclusion à partir de rumeurs ou d'un seul entretien : un dossier comparatif se construit sur pièces. Une conclusion non prouvée ne résiste ni à la contestation de l'un, ni à celle de l'autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: "Choisir la stratégie d'alignement",
    intro: "Quatre options existent. Une seule respecte à la fois le droit, le climat social et la trésorerie : le maintien du salaire le plus haut, avec alignement progressif du plus bas.",
    steps: [
      {
        title: 'Évaluez chaque option sur quatre critères',
        actions: [
          'Légalité : une modification du contrat à la baisse exige l\'accord explicite du salarié.',
          'Coût pour l\'organisation et imputation sur les budgets bailleurs.',
          'Effet sur le climat social et sur la rétention.',
          'Capacité à tenir dans le temps si le financement baisse.',
        ],
      },
      {
        title: 'Retenez et justifiez par écrit',
        actions: [
          'Écrivez la stratégie retenue en une phrase et les raisons du rejet des autres.',
        ],
      },
    ],
    table: {
      columns: ['Option', 'Légalité', 'Coût', 'Climat social', 'Décision'],
      rows: [
        ['A — Baisser le salaire le plus haut', 'Illégale sans accord explicite', 'Faible', 'Très dégradé : perte de confiance de toute l\'équipe', 'Rejetée'],
        ['B — Tout aligner sur la grille immédiatement', 'Conforme', 'Très élevé (+320 USD pour G. Cirhuza, hausse de 48 %)', 'Bon mais décidé hors budget', 'Rejetée : hors budget 2027'],
        ['C — Maintenir le plus haut, aligner le plus bas par tranches', 'Conforme', 'Maîtrisé et planifiable', 'Bon : personne ne perd', 'Retenue'],
        ['D — Geler le plus haut jusqu\'à convergence', 'Conforme', 'Faible', 'Risque de démotivation', 'À éviter : pas de gel punitif'],
      ],
    },
    example: {
      title: 'Fil rouge — stratégie retenue',
      lines: [
        "Option C : maintien du salaire de S. Murhula à 905 USD ; hausse de G. Cirhuza en deux tranches pour ramener l'écart interne sous 10 % au 1er juillet 2027 ; convergence vers la grille traitée séparément à la revue annuelle.",
        'Raison : le seuil de 10 % est celui du template (rouge au-delà) et reste soutenable avec le budget 2027.',
      ],
    },
    result: "Fait quand : la stratégie est écrite en une phrase, avec les raisons du rejet des trois autres options.",
    tip: "Une baisse de salaire acquis reste à éviter sauf cas exceptionnel et accord explicite du salarié, par écrit. Même alors, elle doit être compensée (prime, avantage, calendrier) : pas de baisse sèche.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Chiffrer le plan : salaire, compléments proportionnels, cotisations',
    intro: "Le coût d'une hausse n'est pas la hausse seule. Il faut ajouter les compléments calculés en pourcentage du salaire de base (Procédure 3) et la part patronale des cotisations sociales (Procédure 4, taux illustratif de 13 % dans ce cas).",
    steps: [
      {
        title: 'Définissez les tranches',
        actions: [
          "Fixez le nombre de tranches et leur date : chaque tranche doit être assez grande pour être perceptible et assez petite pour rester soutenable.",
          "Vérifiez après chaque tranche l'écart de la colonne F de l'onglet Équité interne : l'objectif est de passer sous 10 %.",
        ],
      },
      {
        title: 'Calculez le coût par tranche',
        actions: [
          'Hausse mensuelle de salaire de base.',
          'Hausse des compléments en pourcentage : base × (taux de risque + taux de hardship).',
          'Cotisations patronales : taux patronal total × (hausse de salaire + hausse des compléments).',
          'Multipliez par le nombre de mois de la période.',
        ],
      },
      {
        title: 'Faites valider le coût par la Finance',
        actions: [
          "Demandez à la Finance l'imputation : ligne du budget projet ou coûts de soutien ; vérifiez que la hausse est éligible chez le bailleur.",
        ],
      },
    ],
    table: {
      columns: ['Tranche', 'Salaire de base G. Cirhuza', 'Hausse base', 'Compléments (15 %)', 'Hausse brute mensuelle', 'Écart avec S. Murhula'],
      rows: [
        ['Avant plan', '670', '—', '—', '—', '35,1 %'],
        ['T1 — 1er janvier 2027', '760', '+90', '+13,50', '+103,50', '19,1 %'],
        ['T2 — 1er juillet 2027', '830', '+160 cumulés', '+24', '+184', '9,0 %'],
      ],
    },
    example: {
      title: 'Fil rouge — coût du plan',
      lines: [
        'Coût brut 2027 = 103,50 × 6 mois + 184 × 6 mois = 621 + 1 104 = 1 725 USD.',
        'Cotisations patronales 13 % = 224,25 USD. Coût total 2027 = 1 949,25 USD.',
        'Coût annuel à partir de 2028 = 184 × 12 × 1,13 = 2 495,04 USD par an.',
        "Écart interne après T2 = (905 − 830) ÷ 830 = 9,0 % : sous le seuil de 10 %.",
      ],
    },
    result: "Fait quand : le coût 2027 et le coût annuel récurrent sont calculés, et la Finance a confirmé l'imputation par écrit avant le dépôt du budget du 15 novembre.",
    pitfall: "Oublier que les compléments en pourcentage et les cotisations suivent la hausse : un plan chiffré à 1 500 USD de salaire seul sous-estime le coût de 30 %.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Rédiger le plan de transition en dix lignes maximum',
    intro: "Dix lignes maximum : si le plan ne tient pas en dix lignes, il n'est pas encore clair. Il sera lu par le comité, puis relu par l'auditeur.",
    steps: [
      {
        title: 'Suivez la structure de dix lignes',
        actions: [
          '1 Constat chiffré ; 2 Principe (pas de baisse) ; 3 Maintien du plus haut ; 4 Tranche 1 ; 5 Tranche 2 ; 6 Critère de convergence ; 7 Effet sur les compléments ; 8 Coût et imputation ; 9 Communication ; 10 Formalisation et revue.',
        ],
      },
      {
        title: 'Relisez avec trois questions',
        actions: [
          'Chaque salarié concerné pourrait-il comprendre ce qui lui arrive à la lecture de sa ligne ?',
          'Chaque chiffre est-il traçable jusqu\'à une cellule du classeur ?',
          'Une action ou un mois manque-t-il ?',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — plan de transition soumis le 19 octobre 2026',
      lines: [
        '1. Constat : deux Chargés de Programme au même poste présentent 35,1 % d\'écart de salaire de base (905 et 670 USD), sans différence objective de diplôme, d\'expérience ou de responsabilité.',
        '2. Principe : aucun salaire acquis n\'est réduit.',
        '3. Le salaire de S. Murhula est maintenu à 905 USD ; il participe à la revue de grille comme tous les autres.',
        '4. Tranche 1, au 1er janvier 2027 : le salaire de G. Cirhuza passe de 670 à 760 USD.',
        '5. Tranche 2, au 1er juillet 2027 : il passe de 760 à 830 USD.',
        '6. Critère de convergence : écart interne sous 10 % après T2 (9,0 %) ; convergence vers la grille (990 USD) examinée à la revue annuelle.',
        '7. Les compléments en pourcentage (risque, hardship) suivent le nouveau salaire de base.',
        '8. Coût : 1 949,25 USD en 2027, puis 2 495,04 USD par an ; imputation validée par la Finance.',
        '9. Communication : entretien individuel avec chaque salarié avant toute communication collective.',
        "10. Formalisation par avenant au 1er janvier 2027 ; revue de l'écart à chaque revue annuelle.",
      ],
    },
    result: "Fait quand : le plan tient en dix lignes, chaque salarié sait ce qui le concerne, chaque chiffre est traçable. Le plan est signé par le HR Manager avant d'aller au comité.",
    tip: "Écrivez les montants en chiffres et les dates en toutes lettres (« 1er janvier 2027 »). Aucun adjectif sur les personnes : le plan parle du poste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Faire valider la grille et le plan par le comité, avant toute communication',
    intro: "Une grille salariale n'est jamais appliquée unilatéralement par le HR Manager seul. Elle se valide par la direction, et selon la taille de l'organisation par le siège ou le conseil d'administration.",
    steps: [
      {
        title: 'Préparez le dossier de décision',
        actions: [
          'Une note d\'une page : constat, grille (les six postes), plan de transition, coût, décisions demandées.',
          'En pièces jointes : le classeur (version sans salaires nominatifs pour les non-RH), les preuves du dossier comparatif, la confirmation de la Finance.',
          "Formulez les décisions pour une réponse oui ou non : « Approuvez-vous la grille 2026-09 ? Approuvez-vous le plan de transition ? »",
        ],
      },
      {
        title: 'Tenez le comité et consignez',
        actions: [
          'Participants : Head of Mission (décision), HR Manager, Finance Manager ; informez le siège si la politique RH globale l\'exige.',
          'Rédigez un compte rendu de décisions le jour même ; archivez-le.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — comité du jeudi 22 octobre 2026',
      lines: [
        'Décision 1 : la grille 2026-09 (B3 = 200) est approuvée, entrée en vigueur le 1er janvier 2027.',
        'Décision 2 : le plan de transition est approuvé ; coût 2027 de 1 949,25 USD à imputer par la Finance.',
        'Décision 3 : aucune communication collective avant les entretiens individuels (5 et 6 novembre).',
        'Information : S. Lambert (siège) reçoit la grille et le plan le 23 octobre.',
      ],
    },
    result: "Fait quand : les trois décisions sont écrites, datées, signées par le Head of Mission, et archivées. Ce document est votre Livrable 3.",
    pitfall: "Communiquer la grille avant d'avoir validé le plan de transition : l'annonce d'une grille sans plan clair pour les cas hors grille crée plus d'inquiétude qu'elle n'en résout, et les rumeurs vont plus vite que les entretiens.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: "Communiquer individuellement d'abord, collectivement ensuite",
    intro: "L'ordre est une règle : chaque salarié concerné apprend sa situation avant le collectif. Vous n'annoncez jamais le salaire d'un collègue.",
    steps: [
      {
        title: 'Préparez les entretiens individuels',
        actions: [
          'Un entretien par salarié concerné, avec le HR Manager présent pour la situation la plus sensible.',
          "Fixez les dates le même jour pour les deux salariés (par exemple 5 et 6 novembre) pour que personne n'apprenne les faits par l'autre.",
          'Apportez la lettre d\'avenant en projet, le plan de transition individuel et un tableau simple.',
        ],
      },
      {
        title: 'Conduisez en cinq temps',
        actions: [
          'Ouverture : pourquoi cet entretien.',
          'Faits : la grille du poste, votre position par rapport à elle, sans citer le salaire d\'un autre salarié.',
          'Ce qui change : montants et dates.',
          'Ce qui ne change pas : aucun salaire acquis n\'est réduit.',
          'Questions et délai de réflexion avant signature.',
        ],
      },
      {
        title: 'Communiquez collectivement ensuite',
        actions: [
          'Après tous les entretiens individuels : note collective avec la grille par poste, jamais les salaires nominatifs.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — phrases clés de l\'entretien avec G. Cirhuza (jeudi 5 novembre 2026)',
      lines: [
        "« La mission adopte une grille de rémunération par poste. Pour votre poste, la grille prévoit 990 USD pour votre profil. Votre salaire actuel est de 670 USD. »",
        "« Nous avons décidé de vous faire progresser en deux étapes : 760 USD au 1er janvier 2027, puis 830 USD au 1er juillet 2027, avec avenant à signer. »",
        "« Vos compléments suivent la hausse. Rien de ce que vous percevez aujourd'hui n'est réduit. »",
        "À éviter : « un de vos collègues gagne plus que vous ». Vous ne citez aucun nom ni aucun montant d'un autre salarié.",
      ],
    },
    result: "Fait quand : chaque salarié concerné a été reçu, a reçu son projet d'avenant avec délai de réflexion, et la note collective est partie après.",
    tip: "Dès l'entretien avec le salarié le mieux payé, rappelez que son salaire n'est pas touché. L'inquiétude qu'on ne dissipe pas se transforme en rumeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: 'Formaliser par avenant et mettre à jour les outils',
    intro: "Un plan verbal ne survit pas à un changement de HR Manager. L'avenant est la preuve ; la grille mise à jour est la mémoire.",
    steps: [
      {
        title: "Rédigez et faites signer l'avenant (Module 03)",
        actions: [
          'Mentionnez : salaire de base avant et après, dates des tranches, références de la grille 2026-09.',
          "Indiquez que les compléments en pourcentage suivent le salaire de base et qu'ils restent liés à la classification de la zone (voir Procédure 3).",
          'Signatures : salarié et Head of Mission ; archivage dans le dossier individuel.',
        ],
      },
      {
        title: 'Mettez à jour les outils',
        actions: [
          'Dans la Grille salariale, mettez à jour la colonne H à chaque tranche et relisez la colonne I.',
          "Transmettez chaque tranche à la Finance dans la fiche d'interface RH-Finance du mois (Module 01), avant la date limite de paie.",
          "Créez deux rappels : 15 décembre 2026 et 15 juin 2027, pour vérifier que les tranches sont bien appliquées.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait de l\'avenant de G. Cirhuza',
      lines: [
        'Article 1 : à compter du 1er janvier 2027, le salaire de base mensuel brut est porté de 670 USD à 760 USD.',
        'Article 2 : à compter du 1er juillet 2027, il est porté à 830 USD.',
        'Article 3 : la prime terrain, l\'indemnité de risque et la hardship allowance restent régies par la politique de rémunération de la mission et sont révisables en fonction de la classification de la zone.',
        'Signatures : G. Cirhuza, salarié — H. Mwamba, Head of Mission — le 12 novembre 2026.',
      ],
    },
    result: "Fait quand : les avenants sont signés et archivés, la Grille est à jour, les deux rappels de contrôle existent.",
    pitfall: "Appliquer une tranche sans avenant : en cas de départ, de contentieux ou d'audit, vous ne pouvez pas prouver l'accord du salarié sur le nouveau salaire.",
  },

  // ─── Procédure 3 — Primes terrain, risque, hardship ───────────────────
  {
    type: 'concept',
    title: 'Procédure 3 — Calculer une prime terrain, une indemnité de risque ou une hardship allowance documentée (semaine 4)',
    body: "Les trois compléments sont les plus mal compris et les plus contestés d'une politique de rémunération. Un montant sans note de calcul est un souvenir verbal : il ne se défend pas devant un auditeur. Cette procédure utilise le template note-calcul-primes-terrain-hardship.docx, section par section.",
    bullets: [
      'Étape 1 — Identifier la nature exacte du complément.',
      'Étape 2 — Fixer le barème de la mission.',
      'Étape 3 — Remplir les sections 1 et 2 (identification et salaire de base).',
      'Étape 4 — Remplir la section 3 (prime terrain).',
      "Étape 5 — Remplir la section 4 (indemnité de risque).",
      'Étape 6 — Remplir la section 5 (hardship allowance).',
      'Étape 7 — Remplir la section 6 (récapitulatif du calcul).',
      'Étape 8 — Remplir la section 7 (vérification de cohérence).',
      'Étape 9 — Faire signer, archiver et planifier la revue.',
    ],
    result: "Livrable : deux notes de calcul signées, archivées dans les dossiers individuels, avec une cohérence démontrable entre elles et avec la grille.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 9',
    title: 'Identifier la nature exacte du complément',
    intro: "Aucun complément n'est accordé par défaut ni parce que « c'est ce qu'on donne d'habitude ». Chacun répond à un critère distinct, documenté et daté.",
    steps: [
      {
        title: 'Posez les trois questions dans l\'ordre',
        actions: [
          'Question 1 : le poste est-il déployé sur une base de terrain, hors capitale, dans des conditions de vie et de travail plus dures ? Si oui, prime terrain.',
          'Question 2 : une classification sécuritaire officielle et datée place-t-elle la zone à un niveau supérieur au niveau faible ? Si oui, indemnité de risque.',
          'Question 3 : les conditions de vie sont-elles objectivement dégradées sur la durée (eau, électricité, santé, éducation, enclavement) ? Si oui, hardship allowance.',
        ],
      },
      {
        title: 'Écartez les justifications qui ne comptent pas',
        actions: [
          'Le pays est classé à risque dans son ensemble : insuffisant, il faut le niveau de la zone du poste.',
          "« C'est ce qu'on a toujours fait » : aucune base.",
          'La personne le demande : une demande n\'est pas un critère.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — réponses pour les deux Chargés de Programme',
      lines: [
        'S. Murhula (Goma) : Q1 oui (base de zone) ; Q2 oui (niveau 3, vigilance renforcée) ; Q3 oui (7 points hardship).',
        'G. Cirhuza (Uvira) : Q1 oui (base de zone) ; Q2 oui mais niveau 2, taux plus bas ; Q3 oui (7 points hardship).',
        "Les trois compléments s'appliquent aux deux salariés ; seul le taux de risque diffère, parce que la classification sécuritaire diffère.",
      ],
    },
    result: "Fait quand : pour chaque salarié, vous avez écrit oui ou non aux trois questions avec la pièce qui le prouve.",
    pitfall: "Répondre « oui » à la question 2 parce que le pays est à risque : la classification qui compte est celle de la zone du poste, datée, émise par le responsable sécurité ou la source officielle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 9',
    title: 'Fixer le barème de la mission avant les notes individuelles',
    intro: "Une seule fois par mission, validé par le comité : sans barème, chaque note est une improvisation. Les valeurs ci-dessous sont fictives : remplacez-les par celles de votre mission.",
    steps: [
      {
        title: 'Fixez le forfait terrain avec la Finance',
        actions: [
          'Un montant fixe mensuel par catégorie de base, identique pour tous les niveaux hiérarchiques.',
          "Vérifiez qu'il est supportable dans les budgets bailleurs.",
        ],
      },
      {
        title: 'Alignez le risque sur la classification sécuritaire',
        actions: [
          "Demandez au responsable sécurité de la mission la classification de chaque zone, avec sa date.",
          "Fixez un pourcentage du salaire de base par niveau de risque, et la règle de révision quand la classification change.",
        ],
      },
      {
        title: 'Construisez la cotation hardship',
        actions: [
          'Six critères cotés de 0 à 2 : eau potable, électricité, soins de santé, éducation pour une famille, enclavement, durée de l\'affectation.',
          'Convertissez le total en catégorie A, B ou C avec un pourcentage du salaire de base.',
        ],
      },
    ],
    table: {
      columns: ['Complément', 'Critère', 'Taux ou montant'],
      rows: [
        ['Prime terrain', 'Base de zone (Goma, Uvira)', '60 USD par mois'],
        ['Prime terrain', 'Base avancée (hors ville)', '90 USD par mois'],
        ['Indemnité de risque', 'Niveau 1 faible / 2 modéré / 3 vigilance renforcée / 4 élevé', '0 % / 5 % / 10 % / 15 % du salaire de base'],
        ['Hardship allowance', 'Total 0 à 3 points : aucune ; 4 à 6 : catégorie A', 'Catégorie A : 5 % du salaire de base'],
        ['Hardship allowance', '7 à 9 points : catégorie B ; 10 à 12 points : catégorie C', 'B : 10 % ; C : 15 %'],
      ],
    },
    result: "Fait quand : le barème est validé par le comité, daté et archivé, et la classification sécuritaire de chaque zone porte sa date (par exemple 2 septembre 2026).",
    tip: "Le complément en pourcentage du salaire de base se calcule sur le salaire de base seul, jamais sur le salaire augmenté des autres compléments : sinon vous composez les pourcentages entre eux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 9',
    title: "Remplir les sections 1 et 2 : identification et salaire de base",
    intro: "Ouvrez note-calcul-primes-terrain-hardship.docx et enregistrez une copie par salarié : « Note_primes_Murhula_2026-10.docx ». Les sections 1 et 2 sont des tableaux de deux colonnes.",
    steps: [
      {
        title: 'Section 1 — Identification',
        actions: [
          "Nom de l'employé et Fonction / poste : exactement comme dans le contrat.",
          "Base / lieu d'affectation et Date d'entrée en vigueur : la date à laquelle le complément est dû.",
        ],
      },
      {
        title: 'Section 2 — Salaire de base',
        actions: [
          'Salaire de base mensuel (devise + montant) : celui du contrat en vigueur, pas celui de la grille.',
          "Coefficient de poste appliqué (grille salariale) : le coefficient de l'onglet Grille salariale.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note de S. Murhula, sections 1 et 2',
      lines: [
        'Nom de l\'employé : S. Murhula. Fonction / poste : Chargé de Programme.',
        'Base / lieu d\'affectation : base de Goma, zone de Goma. Date d\'entrée en vigueur : 1er novembre 2026.',
        'Salaire de base mensuel : 905 USD. Coefficient de poste appliqué : 4,5 (grille KSS RDC 2026-09, facteur 1,10).',
      ],
    },
    result: 'Fait quand : les quatre cellules des sections 1 et 2 sont remplies sans abréviation personnelle.',
    pitfall: "Inscrire le salaire de la grille (990 USD) au lieu du salaire réel (905 USD) : tous les pourcentages de la note seraient calculés sur un salaire que la personne ne perçoit pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 9',
    title: 'Remplir la section 3 : prime terrain',
    intro: "Le critère de la prime terrain décrit les conditions générales de la base. Il ne doit contenir aucun mot sur la sécurité : ce serait le critère de la section 4.",
    steps: [
      {
        title: 'Cochez Applicable et indiquez le forfait',
        actions: [
          'Applicable : Oui / Non. Biffez la mention inutile.',
          'Si oui, notez le forfait applicable à la base concernée, tel qu\'il figure au barème de la mission.',
        ],
      },
      {
        title: 'Rédigez le critère',
        actions: [
          'Décrivez en deux ou trois phrases les conditions de vie et de travail générales de la base : logement, électricité, déplacements, bureaux.',
          'Citez la catégorie de base du barème (base de zone ou base avancée).',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 3 de la note de S. Murhula',
      lines: [
        'Applicable : Oui — forfait applicable à la base de Goma (catégorie base de zone) : 60 USD par mois.',
        'Critère justifiant le montant : affectation à une base de terrain hors capitale, avec coupures d\'électricité fréquentes, locaux et logements précaires, déplacements réguliers sur les sites de distribution. Montant identique pour tous les postes de la base, quel que soit leur niveau.',
      ],
    },
    result: "Fait quand : le critère ne parle que des conditions générales de vie et de travail, et le forfait est celui du barème.",
    pitfall: "Moduler la prime terrain selon le grade ou la personne : le forfait est identique pour tous les postes déployés sur une même base. Une prime qui varie avec le salaire est une indemnité de risque ou de hardship déguisée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 9',
    title: 'Remplir la section 4 : indemnité de risque',
    intro: "Cette section se fonde uniquement sur une classification sécuritaire officielle et datée. Si elle n'existe pas, la réponse est Non.",
    steps: [
      {
        title: 'Cochez Applicable et indiquez le pourcentage',
        actions: [
          'Applicable : Oui / Non.',
          'Si oui, notez le pourcentage du salaire de base fixé par le barème pour le niveau de la zone.',
        ],
      },
      {
        title: 'Citez la classification retenue',
        actions: [
          "Nommez la source (phase UNDSS/INSO ou classification interne alignée sur elles), le niveau, et sa date.",
          "Notez que la classification est révisable : le complément suit le niveau, jamais l'inverse.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 4 pour les deux Chargés de Programme',
      lines: [
        'S. Murhula : Applicable : Oui — 10 % du salaire de base. Classification : niveau 3 (vigilance renforcée) de la zone de Goma, classification du responsable sécurité de la mission, datée du 2 septembre 2026.',
        'G. Cirhuza : Applicable : Oui — 5 % du salaire de base. Classification : niveau 2 (modéré) de la zone d\'Uvira, classification du responsable sécurité, datée du 2 septembre 2026.',
      ],
    },
    result: "Fait quand : le niveau, le pourcentage et la date de la classification sont écrits, et le pourcentage est celui du barème pour ce niveau.",
    pitfall: "Accorder 10 % à Uvira « pour que les deux Chargés soient traités pareil » : l'équité de rémunération ne consiste pas à égaliser les compléments, mais à appliquer les mêmes critères. Zones différentes, niveaux différents.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 9',
    title: 'Remplir la section 5 : hardship allowance',
    intro: "La hardship compense la durée et les conditions de vie dégradées, pas un danger immédiat. Elle se cote, elle ne se négocie pas.",
    steps: [
      {
        title: 'Cotez la zone sur les six critères',
        actions: [
          'Pour chaque critère, attribuez 0 (correct), 1 (limité) ou 2 (très limité) : eau potable, électricité, soins de santé, éducation pour une famille, enclavement, durée de l\'affectation.',
          'Additionnez et reportez la catégorie A, B ou C selon le barème.',
        ],
      },
      {
        title: 'Remplissez la section',
        actions: [
          'Applicable : Oui / Non, puis catégorie retenue et pourcentage.',
          "Critère justifiant la catégorie : copiez la cotation critère par critère avec la date de l'évaluation.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 5 (identique pour les deux zones)',
      lines: [
        'Applicable : Oui — catégorie B, 10 % du salaire de base.',
        'Critère : eau potable 1, électricité 2 (coupures fréquentes), soins de santé 1, éducation 1, enclavement 1, durée d\'affectation 1 = 7 points → catégorie B (7 à 9 points). Évaluation du 2 septembre 2026, Goma et Uvira.',
      ],
    },
    result: "Fait quand : la cotation est écrite critère par critère, le total mène à la catégorie, et la date d'évaluation figure dans la note.",
    pitfall: "Écrire « conditions difficiles » comme seul critère : un auditeur ne peut ni le vérifier ni le comparer avec une autre zone. Une catégorie sans cotation n'est pas défendable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 9',
    title: 'Remplir la section 6 : récapitulatif du calcul',
    intro: "Le montant total doit apparaître avec le détail du calcul, pas seulement le chiffre final. Le tableau compte quatre lignes : Élément, Base de calcul, Taux ou montant appliqué, Montant.",
    steps: [
      {
        title: 'Remplissez une ligne par complément',
        actions: [
          'Élément : prime terrain, indemnité de risque, hardship allowance.',
          'Base de calcul : « forfait base de zone » ou « 905 USD × niveau 3 ».',
          'Taux / montant appliqué : 60 USD, 10 %, 10 %.',
          'Montant (devise) : le résultat en USD, avec deux décimales.',
        ],
      },
      {
        title: 'Calculez les deux totaux',
        actions: [
          'Total mensuel des compléments = somme des montants.',
          'Salaire total mensuel = salaire de base + compléments.',
          'Barrez la quatrième ligne vide pour empêcher un ajout ultérieur.',
        ],
      },
    ],
    table: {
      columns: ['Élément', 'Base de calcul', 'Taux / montant', 'Montant (USD)'],
      rows: [
        ['Prime terrain', 'Forfait base de zone', '60 USD fixes', '60,00'],
        ['Indemnité de risque', '905 USD × niveau 3', '10 %', '90,50'],
        ['Hardship allowance', '905 USD × catégorie B', '10 %', '90,50'],
        ['—', '—', '—', '—'],
      ],
    },
    example: {
      title: 'Fil rouge — totaux des deux notes',
      lines: [
        'S. Murhula : total compléments = 60 + 90,50 + 90,50 = 241,00 USD ; salaire total = 905 + 241 = 1 146,00 USD.',
        'G. Cirhuza : 60 + 670 × 5 % (33,50) + 670 × 10 % (67,00) = 160,50 USD ; salaire total = 670 + 160,50 = 830,50 USD.',
      ],
    },
    result: "Fait quand : chaque montant est recalculable à la calculatrice à partir de la colonne « Base de calcul », et les deux totaux sont écrits.",
    pitfall: "Calculer le pourcentage sur le salaire déjà augmenté d'un autre complément : 905 + 60 = 965 × 10 % donnerait 96,50 au lieu de 90,50. Le barème fixe le pourcentage sur le salaire de base seul.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 8 sur 9',
    title: 'Remplir la section 7 : vérification de cohérence',
    intro: "Avant de faire signer, comparez la note avec celles déjà émises pour des postes similaires. Deux employés de niveau comparable, sur des bases aux conditions comparables, doivent recevoir des compléments calculés selon les mêmes critères.",
    steps: [
      {
        title: 'Complétez les deux champs de la section 7',
        actions: [
          'Poste(s) comparable(s) vérifié(s) : nom du poste et écart constaté.',
          'La note a-t-elle été comparée à la dernière note émise pour un poste comparable ? Oui / Non, avec commentaire.',
        ],
      },
      {
        title: 'Décomposez l\'écart entre les deux notes',
        actions: [
          "Calculez ce qui vient du niveau de risque, à salaire de base identique : (10 % − 5 %) × 905 = 45,25 USD.",
          "Calculez ce qui est dû à l'écart de salaire de base : (905 − 670) × (5 % + 10 %) = 35,25 USD.",
          'Vérifiez que la somme égale l\'écart total des compléments : 45,25 + 35,25 = 80,50 = 241,00 − 160,50.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 7 de la note de S. Murhula',
      lines: [
        'Poste comparable vérifié : Chargé de Programme, G. Cirhuza (Uvira). Écart des compléments : 80,50 USD, dont 45,25 USD dus au niveau de risque (niveau 3 contre niveau 2, justifié) et 35,25 USD dus à l\'écart de salaire de base (plan de transition en cours).',
        'Comparée à la dernière note émise : Non — première note émise avec le barème 2026-09 ; comparée à la note de G. Cirhuza du même jour. Les 35,25 USD disparaîtront à mesure que le plan réduit l\'écart de base.',
      ],
    },
    result: "Fait quand : l'écart entre les deux notes est entièrement expliqué, et la part qui vient de l'écart de salaire de base est identifiée comme transitoire.",
    pitfall: "Confondre l'écart de risque (justifié par une classification) avec l'écart de base (non justifié). Les deux se superposent dans les montants : séparez-les par écrit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 9 sur 9',
    title: 'Faire signer, archiver et planifier la revue',
    intro: "C'est ce document signé, et non un souvenir verbal, qui permettra de justifier le montant plusieurs années plus tard, en cas de contrôle interne, d'audit bailleur ou de contestation de l'employé.",
    steps: [
      {
        title: 'Remplissez le tableau de signatures',
        actions: [
          'Rédigé par (nom, fonction) : vous.',
          'Valide par (Coordination/RH) : le HR Manager, et selon le niveau hiérarchique, la coordination.',
          "Date et signatures : date unique, signature du rédacteur, du valideur et de l'employé (« lu et pris connaissance »).",
        ],
      },
      {
        title: 'Archivez et planifiez',
        actions: [
          "Enregistrez en PDF dans le dossier individuel du salarié (Module 03), sous « Note_primes_NOM_AAAA-MM.pdf ».",
          'Transmettez le montant à la Finance dans la fiche RH-Finance du mois.',
          'Créez une revue à date fixe, ou à chaque changement de classification de la zone.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — signatures du mercredi 28 octobre 2026',
      lines: [
        'Rédigé par : N. Mbusa, HR Officer. Validé par : A. Kavira, HR Manager.',
        'Date et signatures : 28/10/2026 — N. Mbusa, A. Kavira, S. Murhula (« lu et pris connaissance »).',
        'Archivage : Note_primes_Murhula_2026-10.pdf dans son dossier. Revue : octobre 2027 ou changement de classification.',
      ],
    },
    result: "Fait quand : les deux notes sont signées, archivées, transmises à la Finance, et une date de revue est inscrite. Ce sont votre Livrable 4.",
    tip: "Indiquez dans l'avenant que les compléments sont liés à la zone et révisables : c'est ce qui évite qu'une hardship ne devienne un avantage acquis le jour où l'hôpital ouvre ou la route est réhabilitée.",
  },

  // ─── Procédure 4 — CNSS ───────────────────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 4 — Contrôler la conformité aux cotisations sociales (CNSS ou équivalent local) (semaine 5)",
    body: "Les taux utilisés ci-dessous sont illustratifs et fictifs : ils reprennent une structure courante (retraite, prestations familiales, risques professionnels) sans correspondre à un barème officiel. Vous remplacez toujours ces valeurs par le barème légal en vigueur dans votre pays, daté et sourcé. La procédure se fait au moins une fois par an, avec la Finance.",
    bullets: [
      'Étape 1 — Collecter les taux et plafonds légaux en vigueur, datés.',
      'Étape 2 — Reconstituer le calcul sur une fiche de paie.',
      'Étape 3 — Comparer aux taux appliqués par la paie.',
      'Étape 4 — Vérifier le dépôt effectif des déclarations et des paiements.',
      'Étape 5 — Chiffrer et traiter les écarts.',
      'Étape 6 — Installer le contrôle annuel.',
    ],
    result: "Livrable : la fiche de contrôle annuel remplie, avec les écarts chiffrés, le plan de régularisation et le calendrier du prochain contrôle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Collecter les taux et plafonds légaux en vigueur, datés',
    intro: "Le taux utilisé par habitude n'est pas un taux : c'est une hypothèse. La source doit être datée et vérifiable.",
    steps: [
      {
        title: 'Rassemblez les sources',
        actions: [
          'Journal officiel ou textes du Ministère du Travail pour le texte légal.',
          'Site ou bureau de la caisse (CNSS ou équivalent) pour les taux et plafonds appliqués.',
          'Cabinet comptable ou juridique local pour confirmer en cas de doute.',
        ],
      },
      {
        title: 'Rédigez la fiche des taux',
        actions: [
          'Une ligne par cotisation : branche, part salariale, part patronale, plafond éventuel, texte de référence, date de la source.',
          "Demandez par écrit à la caisse ou au cabinet de confirmer les taux ; archivez la réponse.",
        ],
      },
    ],
    table: {
      columns: ['Cotisation (taux illustratifs)', 'Part salariale', 'Part patronale', 'Source à citer'],
      rows: [
        ['Retraite', '5 %', '5 %', 'Texte légal, date, confirmation de la caisse'],
        ['Prestations familiales', '—', '6,5 %', 'Texte légal, date, confirmation de la caisse'],
        ['Risques professionnels', '—', '1,5 %', 'Texte légal, date ; la classe de risque peut faire varier le taux'],
        ['Total', '5 %', '13 %', 'Plafond d\'assiette éventuel à vérifier'],
      ],
    },
    result: "Fait quand : la fiche des taux est datée, signée par la Finance et le HR Manager, et la confirmation écrite de la caisse ou du cabinet est archivée.",
    pitfall: "Utiliser un taux trouvé en ligne sans date : les taux changent parfois sans grande communication officielle. Un taux non daté est le premier point que conteste un contrôleur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Reconstituer le calcul sur une fiche de paie',
    intro: "Recalculez vous-même les cotisations d'au moins trois fiches de paie (un salaire bas, un salaire moyen, un cadre) à partir des taux de la fiche. Vous ne vérifiez pas l'outil de paie, vous vérifiez son résultat.",
    steps: [
      {
        title: "Déterminez l'assiette",
        actions: [
          "Vérifiez avec la Finance et le cabinet ce que la loi retient dans l'assiette : salaire de base, primes et indemnités, avantages en nature ; les remboursements de frais réels en sont en général exclus.",
          "Notez l'assiette retenue par la paie pour chaque salarié.",
        ],
      },
      {
        title: 'Recalculez et comparez',
        actions: [
          'Cotisation salariale = assiette × taux salarial.',
          'Cotisation patronale = assiette × taux patronal, branche par branche.',
          'Comparez avec la fiche de paie ligne par ligne.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — recalcul sur la fiche de S. Murhula (assiette 1 146,00 USD)',
      lines: [
        'Assiette = salaire de base 905 + compléments 241 = 1 146,00 USD.',
        'Part salariale : 5 % × 1 146 = 57,30 USD, retenue sur le brut.',
        'Part patronale : retraite 57,30 + prestations familiales 6,5 % (74,49) + risques professionnels 1,5 % (17,19) = 148,98 USD, soit 13 %.',
        'Net avant autres retenues = 1 146,00 − 57,30 = 1 088,70 USD.',
      ],
    },
    result: "Fait quand : trois fiches recalculées, avec le même résultat que la paie ou un écart identifié et daté.",
    pitfall: "Calculer les cotisations sur le salaire de base seul alors que la loi inclut les compléments dans l'assiette : sous-déclaration silencieuse sur tous les salariés qui perçoivent des primes terrain, de risque ou de hardship.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Comparer aux taux appliqués par la paie',
    intro: "Extrayez le paramétrage du logiciel de paie ou de la feuille de calcul et rapprochez-le de la fiche des taux, ligne par ligne.",
    steps: [
      {
        title: 'Relevez les taux appliqués',
        actions: [
          'Demandez à la Payroll Officer la capture ou l\'export du paramétrage des cotisations, avec la date de dernière modification.',
          'Notez chaque taux appliqué, salarial et patronal.',
        ],
      },
      {
        title: 'Comparez avec les taux légaux',
        actions: [
          'Une ligne par cotisation : taux légal, taux appliqué, écart.',
          'Pour chaque écart, déterminez depuis quelle date il s\'applique (mise en place du logiciel, changement de texte, erreur de saisie).',
        ],
      },
    ],
    table: {
      columns: ['Cotisation', 'Taux légal', 'Taux appliqué en paie', 'Écart'],
      rows: [
        ['Retraite salariale', '5 %', '5 %', 'Aucun'],
        ['Retraite patronale', '5 %', '5 %', 'Aucun'],
        ['Prestations familiales patronales', '6,5 %', '6,5 %', 'Aucun'],
        ['Risques professionnels patronaux', '1,5 %', '0 %', '−1,5 % depuis janvier 2025'],
      ],
    },
    example: {
      title: 'Fil rouge — constat du mardi 6 octobre 2026',
      lines: [
        'La branche risques professionnels n\'a jamais été paramétrée depuis le passage au nouveau logiciel de paie en janvier 2025.',
        'Aucune pénalité n\'a encore été notifiée : la caisse n\'a pas réclamé la cotisation, mais l\'obligation existe.',
      ],
    },
    result: "Fait quand : chaque taux appliqué est comparé au taux légal, et chaque écart a une date de début identifiée.",
    tip: "Demandez toujours à la Payroll Officer la date de dernière modification du paramétrage : c'est elle qui indique si l'écart date d'un changement de texte ou d'une erreur de mise en route.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Vérifier le dépôt effectif des déclarations et des paiements',
    intro: "Calculer une cotisation sur une fiche de paie n'est pas la déclarer ni la payer. Ce sont les preuves de dépôt qui comptent : accusés de réception, quittances, relevés bancaires.",
    steps: [
      {
        title: 'Constituez le tableau des preuves',
        actions: [
          'Une ligne par mois sur la période contrôlée (12 mois au minimum).',
          'Colonnes : déclaration déposée (date, référence), paiement effectué (date, montant), preuve archivée (oui ou non).',
        ],
      },
      {
        title: 'Demandez les pièces à la Finance',
        actions: [
          'Accusés de réception de déclaration, quittances ou reçus de paiement, extraits bancaires.',
          'Comparez le montant payé à la somme des cotisations des fiches de paie du mois.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — période janvier 2025 à août 2026 (20 mois)',
      lines: [
        '18 mois sur 20 : déclaration déposée, paiement effectué, quittance archivée.',
        'Mars et avril 2026 : paiement effectué mais quittance introuvable ; la Finance obtient une copie de la caisse le 9 octobre 2026.',
        'Aucun mois sans déclaration. Mais le montant payé est inférieur de 1,5 % de l\'assiette à celui qui serait dû (branche non paramétrée).',
      ],
    },
    result: "Fait quand : chaque mois a une preuve de dépôt et de paiement archivée, ou un écart identifié avec une action datée pour obtenir la pièce.",
    pitfall: "S'arrêter à la fiche de paie : une cotisation retenue au salarié et non reversée à la caisse est un risque pénal et réputationnel. Vérifiez toujours la preuve du versement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Chiffrer et traiter les écarts',
    intro: "Un écart de cotisations se traite vite, par écrit, et par le bon canal : ce n'est pas à vous de négocier avec la caisse. Vous informez, vous chiffrez, la Finance et le cabinet régularisent.",
    steps: [
      {
        title: 'Chiffrez l\'arriéré',
        actions: [
          'Arriéré = assiette mensuelle × taux manquant × nombre de mois.',
          "Demandez au cabinet ou à la caisse le taux de pénalité de retard applicable : ne l'estimez pas.",
        ],
      },
      {
        title: 'Informez par écrit, dans cet ordre',
        actions: [
          'HR Manager et Finance Manager le jour du constat.',
          'Head of Mission avec une note factuelle : constat, montant, cause probable, action proposée.',
          "Le bailleur si l'écart concerne un budget qu'il finance et si les règles du contrat l'exigent.",
        ],
      },
      {
        title: 'Régularisez et corrigez la cause',
        actions: [
          'Corrigez le paramétrage de la paie avant la prochaine échéance.',
          "Déposez une déclaration rectificative avec l'appui du cabinet ; une régularisation volontaire est en général mieux traitée qu'un redressement après contrôle.",
          "Vérifiez avec les règles du bailleur si les pénalités sont éligibles : elles sont souvent inéligibles et doivent alors être couvertes sur fonds propres.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note au Head of Mission du jeudi 8 octobre 2026',
      lines: [
        'Constat : la branche risques professionnels (1,5 % patronal) n\'est pas appliquée depuis janvier 2025.',
        'Montant : masse brute mensuelle de la base de Goma 24 800 USD × 1,5 % × 20 mois = 7 440 USD, hors pénalités. Les autres bases de la mission sont à contrôler.',
        'Cause probable : paramétrage non repris lors de la migration du logiciel de paie (constat à vérifier, pas conclusion).',
        'Décisions demandées : (1) autoriser la régularisation volontaire avec le cabinet ; (2) autoriser la correction du paramétrage dès la paie d\'octobre ; (3) valider l\'imputation du solde à la Finance.',
      ],
    },
    result: "Fait quand : l'arriéré est chiffré, les décisions sont demandées pour une réponse oui ou non, et la correction du paramétrage est datée.",
    pitfall: "Annoncer un montant de pénalité sans l'avoir obtenu de la caisse ou du cabinet : un chiffre inexact devant le Head of Mission ruine votre crédibilité sur le reste du dossier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Installer le contrôle annuel et la fiche de contrôle',
    intro: "Le contrôle ponctuel corrige un incident ; le contrôle annuel empêche le suivant. Il tient sur une page, se signe, et s'archive.",
    steps: [
      {
        title: 'Rédigez la fiche de contrôle annuel',
        actions: [
          'Six points : fiche des taux datée ; taux de paie conformes ; assiette conforme ; déclarations déposées ; paiements prouvés ; écarts traités.',
          'Pour chaque point : résultat (conforme ou écart), pièce archivée, responsable, date.',
        ],
      },
      {
        title: 'Planifiez',
        actions: [
          'Date fixe chaque année, par exemple octobre, avant le budget suivant.',
          "Déclencheur supplémentaire : tout changement de texte légal ou de logiciel de paie.",
          'Signatures : HR Manager et Finance Manager.',
        ],
      },
    ],
    table: {
      columns: ['Point de contrôle', 'Résultat 2026', 'Pièce archivée', 'Responsable'],
      rows: [
        ['Fiche des taux datée', 'Conforme (octobre 2026)', 'Confirmation du cabinet', 'HR Manager'],
        ['Taux de paie conformes', 'Écart : risques professionnels', 'Capture du paramétrage', 'Payroll Officer'],
        ['Assiette conforme', 'Conforme après confirmation', 'Note du cabinet', 'Finance Manager'],
        ['Déclarations déposées', 'Conforme', 'Accusés de réception', 'Finance Manager'],
        ['Paiements prouvés', 'Conforme (2 quittances retrouvées)', 'Quittances', 'Finance Manager'],
        ['Écarts traités', 'En cours', 'Note du 8 octobre', 'HR Manager'],
      ],
    },
    result: "Fait quand : la fiche est signée, les pièces sont archivées, la prochaine date de contrôle est dans le calendrier. C'est votre Livrable 5.",
    tip: "Faites signer la fiche par la Finance en même temps que par le RH : une fiche signée uniquement par le RH ne prouve pas que la Finance a bien déposé les déclarations.",
  },

  // ─── Procédure 5 — Avantages sociaux ──────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 5 — Inventorier et chiffrer les avantages sociaux, nationaux et internationaux (semaine 6)',
    body: "Le template de la grille ne couvre pas les avantages sociaux : cette procédure utilise un tableau de travail à créer dans votre classeur de politique de rémunération. Elle répond à une question simple : combien coûte réellement chaque profil à l'organisation, et qu'est-ce qui, dans le paquet, est une obligation légale ou un choix de l'ONG ?",
    bullets: [
      'Étape 1 — Inventorier le paquet actuel par catégorie de personnel.',
      'Étape 2 — Séparer le socle légal du conventionnel.',
      'Étape 3 — Chiffrer le coût total employeur par profil.',
      'Étape 4 — Vérifier la cohérence entre personnel national et international, puis documenter.',
    ],
    result: "Livrable : l'inventaire des avantages sociaux, le coût total employeur de chaque profil type et une règle documentée de différenciation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Inventorier le paquet actuel par catégorie de personnel',
    intro: "Rassemblez les sources : politique RH, contrats-types, contrat d'assurance, extraits de paie. L'inventaire décrit ce qui est réellement versé ou fourni, pas ce que dit la politique.",
    steps: [
      {
        title: 'Construisez le tableau de travail',
        actions: [
          'Colonnes : Avantage, Personnel national, Personnel international, Source (contrat, loi, politique).',
          'Lignes : assurance santé, évacuation médicale, congés annuels, congé maladie et maternité, transport, logement, repos et récupération (R&R), billets de voyage, assurance accident et décès, fin de contrat.',
        ],
      },
      {
        title: 'Remplissez à partir de pièces',
        actions: [
          'Pour chaque cellule : montant ou règle précise (jours, pourcentage, plafond) et la pièce qui la fonde.',
          "Une cellule sans pièce se marque « à vérifier » et se traite avant le comité.",
        ],
      },
    ],
    table: {
      columns: ['Avantage', 'Personnel national', 'Personnel international (exemple)', 'Source'],
      rows: [
        ['Assurance santé', '38 USD par mois, payés par KSS', 'Assurance internationale', 'Contrat d\'assurance'],
        ['Évacuation médicale', 'Évacuation nationale vers un centre de référence', 'Évacuation et rapatriement internationaux', 'Politique RH'],
        ['Congés annuels', 'Selon le Code du travail', 'Selon le contrat et la loi du pays du contrat', 'Loi / contrat'],
        ['Repos et récupération (R&R)', 'Non applicable', 'Un congé toutes les 6 à 8 semaines selon la zone', 'Politique RH'],
        ['Logement', 'Non fourni', 'Logement fourni ou allocation', 'Contrat'],
        ['Sécurité sociale', 'CNSS locale', 'Régime du pays d\'origine ou assurance privée', 'Loi / contrat'],
      ],
    },
    result: "Fait quand : chaque cellule contient une règle chiffrée et sa pièce, ou la mention « à vérifier » avec un responsable.",
    pitfall: "Décrire la politique plutôt que la pratique : un avantage promis par un coordinateur sortant et jamais écrit existe dans la tête du personnel même si aucun contrat ne le prévoit. Interrogez la paie et le personnel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Séparer le socle légal du conventionnel',
    intro: "Le socle légal ne se négocie pas ; le conventionnel est un choix de l'ONG, donc un coût qu'elle peut aussi réviser avec préavis.",
    steps: [
      {
        title: 'Marquez chaque ligne',
        actions: [
          'Légal : congés payés, congé de maternité, préavis, indemnités de rupture, cotisations sociales, couverture des accidents du travail.',
          'Conventionnel : assurance santé complémentaire, transport, logement, R&R, indemnités de fin de contrat supérieures au minimum légal.',
          'En cas de doute sur un seuil légal, faites confirmer par le cabinet juridique.',
        ],
      },
      {
        title: 'Vérifiez le respect du socle',
        actions: [
          "Pour chaque ligne légale : l'ONG respecte-t-elle au moins le minimum de la loi, avec preuve ?",
          'Pour chaque ligne conventionnelle : est-elle écrite dans le contrat ou la politique ?',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — résultat du tri du 13 octobre 2026',
      lines: [
        'Légal : congés annuels, congé de maternité, préavis, CNSS, accident du travail — conformes, sauf la branche risques professionnels de la Procédure 4.',
        'Conventionnel : assurance santé (38 USD par mois), évacuation nationale, transport sur sites — écrits dans la politique.',
        'Non écrit : un « bonus de fin d\'année » versé en 2024 à l\'équipe de Goma par le coordinateur d\'alors. À clarifier : si répété, il peut devenir un usage opposable.',
      ],
    },
    result: "Fait quand : chaque ligne porte la mention légal ou conventionnel, avec la pièce, et les pratiques non écrites sont listées pour décision.",
    tip: "Un avantage versé trois fois de suite sans décision écrite peut être traité comme un usage opposable. Statuez par écrit sur chaque pratique non écrite : maintien, transformation ou arrêt.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Chiffrer le coût total employeur par profil',
    intro: "Le coût total employeur est le chiffre qui entre dans le budget bailleur. Il comprend tout ce que l'ONG paie pour un salarié, pas seulement le salaire.",
    steps: [
      {
        title: 'Posez la formule',
        actions: [
          'Coût total mensuel = salaire de base + compléments + cotisations patronales + avantages payés par l\'ONG.',
          "Cotisations patronales = taux patronal (13 % illustratif) × assiette (base + compléments).",
        ],
      },
      {
        title: 'Calculez pour deux profils types',
        actions: [
          'Un profil national de zone (ici le Chargé de Programme de Goma, base 905 USD).',
          'Un second profil de comparaison (ici le Chargé de Programme d\'Uvira, base 670 USD).',
          'Multipliez par 12 pour le coût annuel.',
        ],
      },
    ],
    table: {
      columns: ['Élément (USD par mois)', 'S. Murhula (Goma)', 'G. Cirhuza (Uvira)'],
      rows: [
        ['Salaire de base', '905,00', '670,00'],
        ['Compléments (terrain, risque, hardship)', '241,00', '160,50'],
        ['Cotisations patronales 13 %', '148,98', '107,97'],
        ['Assurance santé payée par KSS', '38,00', '38,00'],
        ['Coût total mensuel', '1 332,98', '976,47'],
        ['Coût total annuel', '15 995,76', '11 717,64'],
      ],
    },
    example: {
      title: 'Fil rouge — lecture',
      lines: [
        'Le coût réel mensuel de S. Murhula est de 1 332,98 USD, soit 47 % de plus que son salaire de base. Un budget établi sur 905 USD sous-estime la ligne de 428 USD par mois.',
        "Après le plan de transition (Procédure 2), le coût annuel de G. Cirhuza augmente de 2 495,04 USD par an à partir de 2028.",
      ],
    },
    result: "Fait quand : le coût total employeur est calculé pour chaque profil type, avec la formule et les taux utilisés, et transmis à la Finance pour le budget 2027.",
    pitfall: "Budgétiser sur le salaire de base seul : les cotisations patronales, les compléments et l'assurance représentent près de la moitié du coût dans cet exemple, et sont inéligibles quand ils n'ont pas été budgétés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Vérifier la cohérence nationaux et internationaux, puis documenter',
    intro: "Une différence de traitement entre personnel national et international doit se justifier par la mobilité, le coût de la vie ou la loi du pays d'origine, jamais par la nationalité elle-même.",
    steps: [
      {
        title: 'Testez chaque différence',
        actions: [
          'Pour chaque avantage plus favorable à une catégorie : quelle raison objective ? mobilité, éloignement de la famille, régime de sécurité sociale du pays d\'origine, risque d\'évacuation.',
          "Écartez toute raison qui ne tient qu'à la nationalité ou au statut.",
          'Vérifiez que le personnel national bénéficie au minimum des protections prévues par la loi du pays et de la couverture santé et évacuation adaptées à sa zone.',
        ],
      },
      {
        title: 'Documentez et communiquez',
        actions: [
          'Annexe de la politique de rémunération : tableau des avantages par catégorie, avec la justification de chaque différence.',
          'Validation par le comité, date, version.',
          'Communication par catégorie de personnel, sans salaires nominatifs.',
        ],
      },
    ],
    example: {
      title: 'Fil rouge — justifications retenues',
      lines: [
        'R&R, billets, logement pour le personnel international : justifiés par la mobilité et l\'éloignement de la famille.',
        'Assurance internationale : justifiée par l\'absence de régime local adapté pour un non-résident.',
        'Assurance santé et évacuation nationale pour le personnel national : alignées sur le niveau de la zone, 38 USD par mois, ouvertes à tous les salariés nationaux sans distinction de grade.',
        'Aucune différence fondée uniquement sur la nationalité.',
      ],
    },
    result: "Fait quand : chaque différence de traitement a une justification écrite et objective, validée au comité. L'inventaire chiffré est votre Livrable 6.",
    tip: "Le test à poser : « si la nationalité des deux personnes était inversée, la différence resterait-elle justifiée ? » Si la réponse est non, ce n'est pas une règle, c'est un privilège.",
  },

  // ─── Procédure 6 — Revue annuelle ─────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 6 — Installer la revue annuelle de la politique de rémunération (octobre)',
    body: "Une grille jamais mise à jour malgré une inflation réelle, une hardship jamais révisée, des cotisations jamais revérifiées : ce sont les trois pièges qui font mourir une politique de rémunération. La revue annuelle les neutralise par un calendrier, pas par la bonne volonté.",
    bullets: [
      "Étape 1 — Actualiser le benchmarking et tester l'inflation.",
      'Étape 2 — Réviser les classifications de risque et de hardship.',
      "Étape 3 — Rejouer l'équité interne, les cotisations, et publier le calendrier.",
    ],
    result: "Livrable : un calendrier annuel de revue avec dates, responsables et pièces attendues.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 3',
    title: "Actualiser le benchmarking et tester l'inflation",
    intro: "Mars à juin : vous redemandez l'enquête inter-ONG, vous relisez le barème ICSC et le salaire minimum, et vous mesurez ce que l'inflation a fait de vos salaires.",
    steps: [
      {
        title: 'Relancez les sources',
        actions: [
          "Redemandez l'enquête inter-ONG la plus récente au coordinateur RH du cluster ; mettez à jour les colonnes B à E de l'onglet Benchmarking.",
          "Mettez à jour la colonne G (date de la donnée) : une ligne qui n'est pas redatée est présumée périmée.",
        ],
      },
      {
        title: 'Testez l\'inflation et recalibrez B3',
        actions: [
          "Calculez l'inflation cumulée depuis la dernière actualisation avec la source officielle ou celle du cluster.",
          "Fixez une règle de déclenchement par écrit : par exemple révision si l'enquête monte de plus de 5 % ou si l'inflation cumulée dépasse 10 %.",
          "Si l'enquête monte, refaites les trois tests de la Procédure 1, étape 7, en ne modifiant que B3.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — simulation pour la revue de 2027',
      lines: [
        "Hypothèse : l'enquête 2027 monte de 6 % sur tous les postes. B3 passe de 200 à 212 USD (200 × 1,06) ; le Chargé de Programme à 4,5 × 212 × 1,10 = 1 049,40 USD.",
        'On refait les trois tests : zone admise du Chargé = 742 à 1 166 USD (700 et 1 100 × 1,06) ; 1 049,40 reste dans la zone et sous le plafond de 65 % de l\'ONU revalorisé.',
        'Décision à soumettre au comité : indexation de la grille de 6 % au 1er janvier 2028, après vérification du budget.',
      ],
    },
    result: "Fait quand : benchmarking redaté, inflation mesurée, B3 recalibré ou maintenu par décision écrite.",
    pitfall: "Ne rien faire pendant cinq ans avec 15 % d'inflation par an : le personnel perd du pouvoir d'achat chaque mois sans qu'aucune ligne ne bouge, jusqu'à ce que les départs volontaires deviennent le signal d'alarme — souvent trop tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 3',
    title: 'Réviser les classifications de risque et de hardship',
    intro: "Septembre : une indemnité de risque et une hardship doivent rester liées à une classification objective et révisable de la zone. Sans révision, elles deviennent des avantages acquis injustifiables.",
    steps: [
      {
        title: 'Redemandez les classifications',
        actions: [
          'Obtenez du responsable sécurité la classification à jour de chaque zone, avec la date.',
          'Refaites la cotation hardship de chaque zone sur les six critères.',
        ],
      },
      {
        title: 'Appliquez la règle de révision',
        actions: [
          "Si le niveau baisse durablement (hôpital ouvert, route réhabilitée, stabilisation sécuritaire), préparez la révision du taux avec un préavis et une période de transition.",
          "Appuyez-vous sur la clause de l'avenant qui rend le complément révisable.",
          "Émettez une nouvelle note de calcul pour chaque salarié concerné.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — hypothèse pour septembre 2027',
      lines: [
        "Uvira : ouverture d'un centre de santé et réhabilitation de la route principale → cotation hardship : santé 0 et enclavement 0, total 5 points, catégorie A (5 %) au lieu de B (10 %).",
        'Le comité décide un préavis de trois mois et une baisse du taux en deux étapes plutôt qu\'une coupure sèche ; une nouvelle note est émise pour chaque salarié de la zone.',
        "Aucun complément n'est modifié sans note nouvelle : la note signée d'origine reste dans le dossier.",
      ],
    },
    result: "Fait quand : chaque zone a une classification et une cotation hardship à jour, et chaque changement donne lieu à une nouvelle note signée.",
    pitfall: "Verser la même hardship pendant des années après une amélioration réelle des conditions locales : le complément devient un avantage acquis, difficile à ajuster plus tard sans grave tension sociale.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 3',
    title: "Rejouer l'équité interne et les cotisations, puis publier le calendrier",
    intro: "Octobre : vous rejouez les contrôles et vous fixez le calendrier de l'année suivante, avec un responsable par action.",
    steps: [
      {
        title: "Rejouez l'équité interne",
        actions: [
          "Mettez à jour la colonne H de la Grille avec les salaires réels après les tranches et les nouvelles embauches.",
          "Relisez l'onglet Équité interne : toute ligne rouge doit avoir un plan ou une justification écrite.",
          "Pour chaque nouvelle embauche, le salaire proposé doit venir de la grille, jamais d'une négociation hors grille.",
        ],
      },
      {
        title: 'Rejouez le contrôle CNSS et publiez le calendrier',
        actions: [
          'Refaites la fiche de contrôle annuel de la Procédure 4.',
          'Publiez le calendrier : action, date, responsable, pièce attendue.',
        ],
      },
    ],
    table: {
      columns: ['Période', 'Action', 'Responsable', 'Pièce attendue'],
      rows: [
        ['Mars', "Demande de l'enquête inter-ONG et du barème ICSC", 'HR Officer', 'Enquête et barème datés'],
        ['Juin', 'Mise à jour du Benchmarking et test d\'inflation', 'HR Officer, HR Manager', 'Onglet Benchmarking redaté'],
        ['Septembre', 'Classification sécuritaire et cotation hardship', 'HR Manager, responsable sécurité', 'Classifications datées'],
        ['Octobre', 'Équité interne, contrôle CNSS, comité', 'HR Manager, Finance Manager, Head of Mission', 'Fiche de contrôle signée, compte rendu'],
        ['Novembre', 'Budget N+1 avec coût total employeur', 'Finance Manager', 'Budget validé'],
        ['Janvier', 'Application des tranches et de la grille', 'Payroll Officer', 'Fiche RH-Finance signée'],
      ],
    },
    result: "Fait quand : le calendrier est publié, chaque action a un responsable et une pièce attendue. C'est votre Livrable 7.",
    tip: "Inscrivez ces dates dans l'agenda du HR Manager et de la Finance dès l'approbation : une revue qui dépend de la mémoire ne survit pas à un changement de personnel.",
  },

  // ─── Cas résolu ────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Deux Chargés de Programme, KSS RDC » : de septembre à novembre 2026",
    scenario: "Rappel : HR Officer de la base de Goma, mission de refondre la politique de rémunération avant l'audit du bailleur de novembre, découvrant un écart de 35 % entre deux Chargés de Programme. Voici le déroulé complet, tel qu'un professionnel l'aurait conduit.",
    steps: [
      { title: 'Lundi 14 au vendredi 18 septembre — Postes et sources', body: 'Procédure 1 (étapes 1 à 4) : postes-repères, courriel d\'enquête, onglet Benchmarking rempli, règle de positionnement validée le 17.', result: 'Six postes-repères datés et sourcés, cibles chiffrées.' },
      { title: 'Lundi 21 au jeudi 24 septembre — Grille et équité', body: 'Procédure 1 (étapes 5 à 9) : cotation, coefficients, essais B3 (190, 200, 210), salaires réels, onglet Équité interne.', result: 'B3 = 200 retenu ; alerte à 35,1 % sur le Chargé de Programme (constatée le 22).' },
      { title: 'Lundi 28 septembre au vendredi 2 octobre — Qualifier et choisir', body: 'Procédure 2 (étapes 1 et 2) : dossier comparatif, écart non justifié, option C retenue.', result: 'Stratégie écrite : maintien du salaire le plus haut, alignement progressif.' },
      { title: 'Lundi 5 au jeudi 8 octobre — Cotisations', body: 'Procédure 4 (étapes 1 à 5) : fiche des taux, recalcul, écart sur la branche risques professionnels, note au Head of Mission du 8.', result: 'Arriéré de 7 440 USD chiffré, régularisation engagée.' },
      { title: 'Lundi 12 au vendredi 16 octobre — Avantages et coût', body: 'Procédure 5 (étapes 1 à 3) et Procédure 2 (étape 3) : inventaire, tri légal ou conventionnel, coût total employeur, coût du plan.', result: 'Coût 2027 : 1 949,25 USD ; coût annuel : 2 495,04 USD.' },
      { title: 'Lundi 19 au jeudi 22 octobre — Plan et comité', body: 'Procédure 2 (étapes 4 et 5) : plan de dix lignes (19), dossier de décision, comité du 22.', result: 'Grille et plan approuvés.' },
      { title: 'Mercredi 28 octobre — Notes de primes', body: 'Procédure 3 (étapes 1 à 9) : barème, deux notes signées.', result: 'Compléments : 241,00 et 160,50 USD.' },
      { title: 'Jeudi 5 au jeudi 12 novembre — Communication et avenants', body: 'Procédure 2 (étapes 6 et 7) : entretiens individuels (5 et 6), note collective ensuite, avenants signés le 12 ; Procédure 6 (calendrier publié).', result: 'Tous les salariés concernés informés avant le collectif ; avenants archivés.' },
    ],
  },
  {
    type: 'case-study',
    title: "Cas résolu — La grille finale, onglet Grille salariale (après le comité du 22 octobre)",
    scenario: "État de l'onglet Grille salariale après validation. B3 = 200. Les colonnes F, G et I sont des formules. Ligne de G. Cirhuza surlignée (écart supérieur à 15 %).",
    steps: [],
    table: {
      columns: ['Nom', 'Poste', 'D — Coef.', 'E — Facteur', 'G — Proposé', 'H — Réel', 'I — Écart'],
      rows: [
        ['H. Mushagalusa', 'Chauffeur / Logisticien base', '2,1', '1,10', '462,00', '450', '−12,00'],
        ['C. Riziki', 'Assistant Administratif RH', '2,5', '1,10', '550,00', '520', '−30,00'],
        ['S. Murhula', 'Chargé de Programme', '4,5', '1,10', '990,00', '905', '−85,00'],
        ['G. Cirhuza', 'Chargé de Programme', '4,5', '1,10', '990,00', '670', '−320,00 (surlignée)'],
        ['Poste-type', 'HR Officer', '4,5', '1,10', '990,00', '—', '—'],
        ['Poste-type', 'Coordinateur Terrain', '9,0', '1,10', '1 980,00', '—', '—'],
        ['Poste-type', 'HR Manager Pays', '10,0', '1,10', '2 200,00', '—', '—'],
      ],
    },
    result: "Contrôle final : chaque poste passe les trois tests (plancher, plafond, tolérance de percentile) ; la seule ligne surlignée (G. Cirhuza) est expliquée par le plan de transition ; l'écart interne 35,1 % repasse à 9,0 % après T2.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La note de calcul de S. Murhula, remplie section par section',
    scenario: 'Version signée, archivée sous Note_primes_Murhula_2026-10.pdf. Les sections 1 et 2 ont été vues en Procédure 3, étape 3.',
    steps: [],
    example: {
      title: 'Note remplie',
      lines: [
        '1. Identification : S. Murhula, Chargé de Programme — base de Goma — entrée en vigueur le 1er novembre 2026.',
        '2. Salaire de base : 905 USD par mois — coefficient 4,5.',
        '3. Prime terrain : Oui — 60 USD (base de zone) ; critère : conditions générales de la base, hors capitale.',
        '4. Indemnité de risque : Oui — 10 % ; classification : niveau 3, vigilance renforcée, daté du 02/09/2026.',
        '5. Hardship : Oui — catégorie B, 10 % ; cotation 1 + 2 + 1 + 1 + 1 + 1 = 7 points.',
        '6. Récapitulatif : 60,00 + 90,50 + 90,50 = 241,00 ; salaire total = 1 146,00 USD.',
        '7. Cohérence : comparé à G. Cirhuza ; écart de compléments de 80,50 USD = 45,25 (risque) + 35,25 (écart de base, transitoire).',
        'Signatures : N. Mbusa, A. Kavira, S. Murhula — 28/10/2026.',
      ],
    },
    result: "La note de G. Cirhuza suit la même méthode : risque niveau 2 à 5 %, hardship B à 10 %, compléments 160,50 USD, salaire total 830,50 USD.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le plan de transition et son coût',
    scenario: "Version approuvée au comité du 22 octobre, signée par H. Mwamba.",
    steps: [],
    table: {
      columns: ['Période', 'Base G. Cirhuza', 'Hausse brute mensuelle', 'Écart avec S. Murhula', 'Coût de la période (cotisations incluses)'],
      rows: [
        ['Jusqu\'au 31/12/2026', '670', '—', '35,1 %', '—'],
        ['01/01 au 30/06/2027 (T1)', '760', '+103,50', '19,1 %', '621,00 × 1,13 = 701,73'],
        ['01/07 au 31/12/2027 (T2)', '830', '+184,00', '9,0 %', '1 104,00 × 1,13 = 1 247,52'],
        ['À partir de 2028', '830', '+184,00', '9,0 %', '2 208 × 1,13 = 2 495,04 par an'],
      ],
    },
    result: "Coût 2027 : 701,73 + 1 247,52 = 1 949,25 USD, imputation validée par la Finance. L'écart interne passe sous le seuil de 10 % du template au 1er juillet 2027.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La fiche de contrôle annuel CNSS',
    scenario: 'Fiche signée par le HR Manager et le Finance Manager le 16 octobre 2026, archivée sous Controle_CNSS_2026-10.pdf.',
    steps: [],
    example: {
      title: 'Fiche remplie',
      lines: [
        '1. Fiche des taux datée : oui, confirmée par le cabinet le 10/10/2026.',
        '2. Taux de paie : écart sur la branche risques professionnels (1,5 % non appliqué depuis 01/2025), paramétrage corrigé le 15/10/2026.',
        '3. Assiette : compléments inclus, confirmé par le cabinet.',
        '4. Déclarations : 20 mois sur 20 déposées ; 2 quittances retrouvées le 09/10/2026.',
        '5. Arriéré chiffré : base de Goma 24 800 × 1,5 % × 20 = 7 440 USD hors pénalités ; autres bases à contrôler.',
        '6. Écarts traités : déclaration rectificative déposée avec le cabinet ; solde imputé selon la décision du Head of Mission.',
        'Prochain contrôle : octobre 2027, ou à tout changement de texte légal ou de logiciel de paie.',
      ],
    },
    result: 'La Finance a confirmé le 16 octobre que les montants et l\'imputation étaient validés ; le bailleur est informé conformément à son contrat avant l\'audit de novembre.',
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Pourquoi cet ordre et ces choix',
    scenario: "L'exercice source demande de corriger l'inégalité sans la transformer en conflit ouvert. Voici le raisonnement.",
    steps: [
      { title: '1. Le benchmarking avant la grille', body: "On ne calibre pas des coefficients sans savoir ce que paie le marché, et on ne défend pas une grille sans ses trois sources datées." },
      { title: "2. L'équité interne avant toute décision individuelle", body: "L'alerte à 35 % vient de l'onglet Équité interne, pas d'un témoignage. On qualifie l'écart sur pièces avant de proposer quoi que ce soit." },
      { title: '3. Le maintien du salaire le plus haut', body: "Une baisse sans accord est illégale et détruit le climat social. Le seuil de 10 % fixe un objectif mesurable sans toucher aux salaires acquis." },
      { title: '4. Le chiffrage avec compléments et cotisations', body: "Un plan chiffré sur le salaire seul sous-estime le coût de 30 % ; le comité doit décider sur le vrai coût." },
      { title: '5. La validation avant la communication, puis l\'individuel avant le collectif', body: "Une grille annoncée sans plan inquiète ; un salarié qui apprend sa situation par un collègue perd confiance." },
      { title: '6. Les primes séparées du salaire de base', body: "L'écart de compléments entre les deux notes se décompose : 45,25 USD sont justifiés par le niveau de risque, 35,25 USD par l'écart de base, que le plan résorbe." },
    ],
    result: "Résultat : une grille défendable, un écart corrigé sans baisse de salaire, des compléments documentés, une conformité CNSS rétablie et un calendrier de revue qui empêche la dérive.",
  },

  // ─── Exercices ────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: "Exercice — À vous : deux salaires, un même poste, N'Djamena, Tchad",
    instructions: "Vous prenez vos fonctions de HR Manager dans une ONG de développement présente au Tchad depuis 8 ans (cas fictif). Deux Chargés de Programme, recrutés à deux ans d'intervalle, ont le même poste, les mêmes responsabilités sur deux zones comparables et le même master avec 5 ans d'expérience. Fatime A. gagne 620 USD, Mamadou K. gagne 837 USD (35 % d'écart), sans différence objective ; le second a mieux négocié, sans grille écrite. Ils travaillent dans le même bureau régional et n'ont pas comparé leurs fiches de paie. Le droit du travail tchadien reconnaît « à travail égal, salaire égal ». Utilisez le template tel qu'il est livré : ses valeurs de benchmarking de N'Djamena (Chargé de Programme : ONU/ICSC 1 450, enquête 650 à 950, minimum légal 220, percentile 60e ; règle : plafond 65 % de l'ONU).",
    table: {
      columns: ['Donnée', 'Fatime A.', 'Mamadou K.'],
      rows: [
        ['Salaire de base actuel (USD)', '620', '837'],
        ['Zone', 'Zone B : risque niveau 2 (5 %), hardship catégorie B (10 %)', 'Zone A : risque niveau 3, vigilance renforcée (10 %), hardship catégorie B (10 %)'],
        ['Forfait terrain du bureau régional', '50 USD', '50 USD'],
      ],
    },
    deliverable: "La grille complétée, le plan de transition (10 lignes maximum) et les deux notes de calcul de primes, avec une cohérence démontrable entre les trois documents.",
    tip: "Dans le template livré, la cellule H7 contient 950 pour Mamadou K. : remplacez-la par 837 pour travailler sur le cas de l'énoncé.",
  },
  {
    type: 'exercise',
    title: "Exercice — Les étapes à suivre pour le cas de N'Djamena",
    deliverable: "La grille de rémunération construite, le plan de transition rédigé et les deux notes de primes complétées.",
    steps: [
      {
        title: 'Construisez la grille (Procédure 1)',
        actions: [
          "Dans Benchmarking, vérifiez la ligne Chargé de Programme et calculez la cible : 650 + (950 − 650) × 0,60 = 830 USD ; plafond 65 % × 1 450 = 942,50 USD.",
          "Dans Grille salariale, mettez le même facteur d'expérience (1,10) aux deux Chargés de Programme, car aucune différence objective n'existe, puis remplacez H7 par 837 et vérifiez H8 = 620.",
          "Calibrez B3 par essais en partant de 830 ÷ (4,5 × 1,10) ≈ 168 ; essayez 170 et vérifiez que le Chargé de Programme reste dans la zone et dans la tolérance de ±15 points de percentile.",
          "Lisez l'onglet Équité interne : écart max/min du Chargé de Programme.",
        ],
      },
      {
        title: 'Rédigez le plan de transition (Procédure 2)',
        actions: [
          "En 10 lignes maximum : constat, maintien du salaire le plus haut, alignement progressif du second par tranches, effet sur les compléments, communication individuelle avant collective.",
          "Chiffrez : tranches de 620 à 700 puis 770 (écart sous 10 %), coût avec compléments en pourcentage et cotisations patronales de 13 % (taux illustratif).",
        ],
      },
      {
        title: 'Complétez les deux notes de primes (Procédure 3)',
        actions: [
          "Hardship comparable (catégorie B, 10 %), risque différent : niveau 3 (10 %) pour Mamadou K., niveau 2 (5 %) pour Fatime A.",
          "Remplissez les sections 1 à 7 de chaque note, avec le calcul détaillé et la décomposition de l'écart entre les deux notes : part due au risque, part due à l'écart de base.",
        ],
      },
    ],
    tip: "Pour les notes, calculez les pourcentages sur le salaire de base actuel (837 et 620), et décomposez l'écart des compléments : ce qui vient du risque (5 points de pourcentage) ne se confond pas avec l'écart de base.",
    pitfall: "Ne baissez jamais le salaire de Mamadou K. pour « corriger » l'écart : un plan qui commence par une baisse est rejeté dès le comité et expose l'organisation à une contestation.",
  },
  {
    type: 'checklist',
    title: 'Auto-correction — votre livrable est correct si…',
    items: [
      "Cible du Chargé de Programme calculée : 830 USD (650 + 300 × 0,60) ; plafond 942,50 USD ; zone admise 650 à 942,50.",
      "Les deux Chargés de Programme ont le même facteur d'expérience, avec justification écrite (même diplôme, même expérience).",
      "B3 retenu autour de 170 ; salaire proposé du Chargé de Programme : 4,5 × 170 × 1,10 = 841,50 USD, dans la zone et à 64e percentile environ.",
      "Grille : Mamadou K. à −4,50 USD (−0,5 %), non surlignée ; Fatime A. à −221,50 USD (−26,3 %), surlignée.",
      "Équité interne : écart max/min = (837 − 620) ÷ 620 = 35,0 %, ligne rouge ; vous avez noté que les postes de coordination du template sortent de la tolérance avec ce B3 et que leurs coefficients sont à revoir hors de cet exercice.",
      "Plan de transition : 10 lignes maximum, aucun salaire réduit, écart sous 10 % après deuxième tranche (837 − 770) ÷ 770 = 8,7 %, communication individuelle avant collective.",
      "Note de Mamadou K. : terrain 50 + risque 83,70 + hardship 83,70 = 217,40 ; total 1 054,40 USD.",
      "Note de Fatime A. : terrain 50 + risque 31,00 + hardship 62,00 = 143,00 ; total 763,00 USD.",
      "Décomposition de l'écart de compléments (74,40 USD) : 41,85 USD dus au risque (5 % × 837) et 32,55 USD dus à l'écart de base (217 × 15 %) ; somme = 74,40.",
      "Les trois documents se recoupent : mêmes salaires, mêmes coefficients, mêmes pourcentages dans la grille, le plan et les notes.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice complémentaire — Appliquez la méthode à votre propre mission',
    instructions: "Si vous êtes en poste, refaites les Procédures 1, 3 et 4 sur votre mission réelle avec les vrais documents. Si vous n'êtes pas en poste, appliquez la Procédure 1 à trois postes d'une mission fictive de votre choix, à partir de données publiques (barème ICSC, enquête publiée).",
    steps: [
      { title: 'Votre benchmarking et votre grille', actions: ['Onglet Benchmarking rempli et daté pour au moins trois postes-repères.', 'Règle de positionnement écrite et validée par votre hiérarchie.', "Coefficients cotés sur quatre critères, B3 calibré par au moins trois essais."] },
      { title: 'Votre contrôle d\'équité', actions: ['Onglet Équité interne lu et chaque ligne rouge justifiée ou corrigée par un plan.', 'Au moins une note de calcul de primes signée et archivée.'] },
      { title: 'Votre conformité sociale', actions: ['Fiche des taux datée et recalcul de trois fiches de paie.', 'Fiche de contrôle annuel remplie, avec prochaine date.'] },
    ],
    deliverable: 'Votre grille validée par votre hiérarchie, votre contrôle d\'équité documenté, au moins une note de calcul de primes signée et votre fiche de contrôle CNSS.',
    pitfall: "N'utilisez jamais les données réelles de vos collègues (noms, salaires) en dehors des outils et dossiers RH sécurisés de votre organisation, y compris pour un exercice de formation.",
  },

  // ─── Pièges, récapitulatif, clôture ───────────────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Grille salariale jamais mise à jour malgré une inflation locale réelle : des grilles figées 5 ans avec plus de 15 % d'inflation par an — les départs volontaires sont le signal d'alarme, souvent trop tard. Revue annuelle datée, calendrier à l'appui.",
      "Primes terrain accordées « au cas par cas » sans base écrite ni cohérence : source numéro un de rumeurs et de tensions internes. Barème écrit, note de calcul signée pour chaque salarié.",
      "Cotisations sociales mal calculées : un taux appliqué par habitude, jamais revérifié, peut générer des années d'arriérés découverts lors d'un contrôle, avec des pénalités qui dépassent largement le coût d'une vérification annuelle. Fiche des taux datée et preuve de dépôt chaque année.",
      "Confondre alignement sur les barèmes ONU et concurrence directe avec l'ONU : une petite ONG ne pourra pas suivre, et créera un choc budgétaire à la prochaine réduction de financement bailleur. Visez un percentile réaliste, plafonné par la règle écrite.",
      "Traiter la hardship allowance comme un acquis permanent : elle doit rester liée à une classification objective et révisable de la zone (hôpital ouvert, route réhabilitée, stabilisation sécuritaire). Clause de révision dans l'avenant.",
      "Corriger un écart en baissant le salaire le plus haut : illégal sans accord et destructeur pour le climat social. Maintien du plus haut, alignement progressif du plus bas.",
      "Écraser une formule du template ou ajouter des lignes sous la plage : la grille semble correcte, l'onglet Équité interne ignore les lignes ajoutées et affiche zéro alerte à tort.",
      "Annoncer la grille avant d'avoir validé le plan de transition : l'annonce d'une grille sans plan pour les cas hors grille crée plus d'inquiétude qu'elle n'en résout. Validation, puis individuel, puis collectif.",
      "Budgétiser sur le salaire de base seul : compléments, cotisations patronales et assurance font du coût réel près de 47 % de plus dans notre exemple.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez rempli l'onglet Benchmarking avec trois sources datées et sourcées, écrit la règle de positionnement et chiffré la cible, le plafond et la zone admise de chaque poste-repère.",
      "Vous avez construit la grille salariale : cotation sur quatre critères, coefficients, facteur d'expérience, salaire de base de l'organisation calibré par trois essais et contrôlé poste par poste.",
      "Vous avez détecté un écart de 35 % avec l'onglet Équité interne, l'avez qualifié sur pièces, et corrigé par un plan de transition de dix lignes chiffré, validé et communiqué individuellement.",
      "Vous avez distingué prime terrain, indemnité de risque et hardship, fixé le barème de la mission et produit deux notes de calcul signées, avec l'écart entre elles décomposé.",
      "Vous avez contrôlé les cotisations sociales : taux datés, assiette, comparaison avec la paie, preuves de dépôt, arriéré chiffré et fiche de contrôle annuel.",
      "Vous avez inventorié et chiffré les avantages sociaux nationaux et internationaux, séparé le légal du conventionnel et calculé le coût total employeur par profil.",
      "Vous avez installé la revue annuelle avec calendrier, responsables et pièces attendues.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer la différence entre benchmarking externe et équité interne, et pourquoi les deux sont nécessaires.",
      "Je sais construire un coefficient de poste sur des critères objectifs, indépendants de la personne qui occupe le poste actuellement.",
      "Je peux distinguer prime terrain, indemnité de risque et hardship allowance, et justifier laquelle appliquer dans une situation donnée.",
      "J'ai complété une grille salariale avec le template fourni, y compris la vérification d'équité interne.",
      "J'ai rédigé au moins une note de calcul de prime terrain/hardship documentée, signée et archivée.",
      "Je sais où trouver les taux de cotisations sociales à jour pour mon pays d'affectation, et pourquoi les revérifier chaque année.",
      "Je sais identifier, dans un dossier de personnel existant, un écart salarial non justifié, et le corriger sans baisse de salaire acquis.",
      "J'ai réalisé l'exercice de N'Djamena et mon livrable passe toutes les lignes de l'auto-correction.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 05 — Évaluation des Performances & Développement des Compétences : vous savez désormais combien chaque poste est payé et pourquoi. Vous allez maintenant évaluer la performance de ceux qui occupent ces postes et construire leurs plans de développement, sur une grille de rémunération qui ne dépend plus de la négociation.",
  },
]
