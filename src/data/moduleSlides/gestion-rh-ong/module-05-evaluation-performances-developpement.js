// Module 05 — Évaluation des Performances & Développement des Compétences
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure est
// détaillée étape par étape et appliquée à un cas fil rouge unique (campagne
// d'évaluation 2026 à la base de Goma, janvier 2027), avec les deux templates
// remplis champ par champ. Les noms, chiffres et dates des exemples sont fictifs.
export default [
  {
    type: 'cover',
    title: 'Évaluation des Performances & Développement des Compétences',
    hook: "À la fin de ce module, vous aurez produit, pour un vrai poste clé, une grille d'évaluation dont chaque note est défendable, le compte rendu signé d'un entretien annuel de 75 minutes, un plan de développement individuel (PDI) aux actions datées, un plan de succession avec un niveau de préparation honnête, le plan de formation arbitré de votre base et la liste de vos hauts potentiels. Tout cela étape par étape, du premier courriel de la campagne au point de suivi du 21 juillet 2027.",
  },
  {
    type: 'objectives',
    items: [
      "Préparer la campagne d'évaluation : fixer la date de l'entretien au moins deux semaines à l'avance, construire la grille (compétences et objectifs, pondérations à 100 %) et envoyer l'auto-évaluation au moins une semaine avant, pour obtenir une grille prête et un calendrier accepté par les trois parties.",
      "Noter de façon défendable : remplir l'évaluation du superviseur sans voir l'auto-évaluation, adosser chaque note à un exemple daté, analyser les écarts et vérifier le score global, pour obtenir une grille complète dont chaque ligne tient devant un désaccord.",
      "Conduire l'entretien annuel en trois temps (revue des résultats, PDI, objectifs) pendant au moins 45 minutes, obtenir la validation de l'employé ou consigner son désaccord, pour obtenir un compte rendu signé.",
      "Rédiger un PDI actionnable (Partie A du modèle Word) où chaque écart de l'évaluation devient une action avec une modalité, une échéance datée et un statut, plus 2 à 3 objectifs SMART, pour obtenir un PDI que l'employé reconnaît comme le sien.",
      "Identifier les postes clés de la mission et construire le plan de succession (Partie B) : criticité, successeurs potentiels, niveau de préparation honnête, actions et risques, pour obtenir un plan validé avant qu'un départ ne l'impose.",
      "Piloter le suivi et le développement : point à 6 mois, onglet Historique et tendance, plan de formation interne arbitré avec la Finance, liste des hauts potentiels, pour obtenir un cycle de performance qui continue entre deux entretiens.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un exposé sur la gestion de la performance : c'est la méthode complète d'une campagne d'évaluation annuelle, de la première invitation au point de suivi, appliquée à un seul dossier suivi du début à la fin. À la fin, vous aurez produit sept livrables réutilisables tels quels sur votre propre mission.",
      "Le cas fil rouge (fictif) prolonge le Module 01 : nous sommes en janvier 2027 à la base de Goma de Kivu Santé Solidaire (KSS). N. Mbusa, HR Officer, a cinq mois de poste. A. Kavira, HR Manager de mission à Kinshasa, lui confie le pilotage de la campagne d'évaluation 2026 pour les 34 agents éligibles de la base (les 2 agents arrivés après le 1er octobre 2026 en sont exclus par la politique RH de KSS). Vous suivrez un dossier en détail : celui de B. Kahindo, Responsable Pharmacie, évaluée par son superviseur direct, le Dr M. Kitenge, Coordinateur Médical, avec vous comme garante de la méthode. L'entretien aura lieu le jeudi 21 janvier 2027 à 9 h 00.",
    ],
    bullets: [
      "Livrable 1 — Le calendrier de campagne, l'invitation agenda acceptée et la grille d'auto-évaluation envoyée (grille-evaluation-performance-annuelle.xlsx, en-tête et pondérations renseignés).",
      "Livrable 2 — La grille complète : évaluation du superviseur argumentée, tableau des écarts, score global 3,54 vérifié et classification « Dépasse les attentes ».",
      "Livrable 3 — Le plan minuté et le compte rendu signé de l'entretien du 21 janvier, avec le désaccord consigné.",
      "Livrable 4 — Le PDI (Partie A de plan-developpement-individuel-succession.docx) rempli : écarts, actions datées, 3 objectifs SMART.",
      "Livrable 5 — Le plan de succession du poste de Responsable Pharmacie (Partie B), signé et classé en accès restreint.",
      "Livrable 6 — Le point de suivi à 6 mois programmé et l'onglet Historique et tendance à jour.",
      "Livrable 7 — Le plan de formation 2027 de la base, arbitré avec la Finance, et la liste des hauts potentiels.",
    ],
  },
  {
    type: 'concept',
    title: 'Qui est qui dans le cas fil rouge',
    body: "Posez les noms sur les rôles avant d'agir. Ce tableau vous dit qui évalue, qui décide, qui est informé et à qui vous demandez un budget.",
    table: {
      columns: ['Rôle', 'Nom (fictif)', 'Lieu', 'Rôle dans le dossier'],
      rows: [
        ['HR Officer de base', 'N. Mbusa (vous)', 'Goma', "Pilote la campagne, garante de la méthode, rédige le PDI et le plan de succession."],
        ['HR Manager de mission', 'A. Kavira', 'Kinshasa', "Donne mandat pour la campagne, valide les PDI et le plan de formation."],
        ['Head of Mission', 'H. Mwamba', 'Kinshasa', 'Valide le plan de succession (Partie B).'],
        ['Base Manager', 'E. Kasongo', 'Goma', "Informé ; couvre les absences liées aux formations."],
        ['Coordinateur Médical', 'Dr M. Kitenge', 'Goma', "Superviseur direct de B. Kahindo : il note, vous garantissez la méthode."],
        ['Responsable Pharmacie', 'B. Kahindo', 'Goma', "Employée évaluée, titulaire d'un poste clé."],
        ['Assistant Pharmacie', 'F. Amani', 'Goma', 'Successeur potentiel et candidat haut potentiel.'],
        ['Aide-pharmacienne', 'L. Neema', 'Goma', 'Second successeur potentiel.'],
        ['Finance Manager de mission', 'R. Ilunga', 'Kinshasa', 'Confirme l\'enveloppe de formation 2027.'],
        ['Assistant RH', 'P. Sifa', 'Goma', 'Tient le registre de formation et les rappels agenda.'],
        ['Head of HR siège', 'S. Lambert', 'Siège', 'Politique RH globale ; informée de la liste des hauts potentiels.'],
      ],
    },
    tip: "Sur votre mission, un superviseur direct note, le RH garantit la méthode (preuves, écarts, formules). Si vous êtes vous-même le superviseur direct, vous cumulez les deux rôles : les étapes restent les mêmes.",
  },
  {
    type: 'stat-callout',
    stat: '75 min',
    caption: "durée de l'entretien du cas fil rouge : 5 min d'ouverture, 25 min de revue, 20 min de PDI, 15 min d'objectifs, 10 min de validation. La source fixe le minimum à 45 minutes à 1 heure.",
    context: "Un entretien expédié en 10 minutes n'est pas un entretien, c'est une formalité administrative : il ne laisse la place ni à contester une note, ni à bâtir un PDI. Le temps est le seul moment de l'année où l'employé et le superviseur comparent leurs notes avec des exemples.",
  },

  // ─── Théorie essentielle ───────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Évaluer des faits observables, jamais une impression générale',
    body: [
      "Le piège le plus répandu n'est pas la malveillance, c'est la paresse méthodologique : un superviseur débordé résume une année en une impression (« il est sérieux », « elle a fait de son mieux »). Ces phrases ne sont pas fausses, mais elles sont inexploitables : elles ne justifient ni une prime auprès de la Finance, ni une note face à un désaccord, ni un PDI.",
      "Une évaluation professionnelle repose sur des faits, des livrables, des dates et des indicateurs, pas sur des adjectifs. Chaque fois que vous lisez un adjectif dans une grille, demandez : « quel fait, à quelle date, prouvé par quel document ? »",
    ],
    table: {
      columns: ['Impression (inexploitable)', 'Fait observable (défendable)', 'Source de la preuve'],
      rows: [
        ['« Il est sérieux »', "12 rapports mensuels de stock remis sur 12, audit du 14/09/2026 : 0 non-conformité majeure", 'Rapports archivés, rapport d\'audit'],
        ['« Elle a fait de son mieux »', 'Taux de rupture des 24 médicaments traceurs ramené de 20 % (janvier) à 4,2 % (décembre 2026)', 'États de stock mensuels'],
        ['« On n\'a pas eu de problème »', "0 excursion de température non traitée sur 365 jours de relevés biquotidiens", 'Registre de chaîne du froid'],
        ['« Elle manage bien »', "Réunion d'équipe tenue 44 lundis sur 46, compte rendu écrit à chaque fois, 0 démission", 'Comptes rendus, registre des départs'],
      ],
    },
    highlight: "Chaque note doit être adossée à au moins un exemple concret et daté. Si le superviseur ne peut citer aucun exemple pour justifier un 4/5, la note ne se valide pas telle quelle : on reprend l'entretien, on ne remplit pas la case pour « avancer ».",
  },
  {
    type: 'comparison-table',
    title: 'Deux familles de critères : compétences et objectifs',
    columns: ['Famille', 'Question à laquelle elle répond', 'Exemple concret', 'Si on ne retient qu\'elle'],
    rows: [
      ['Compétences comportementales', "Comment la personne travaille-t-elle, indépendamment du contexte de l'année ?", 'Qualité du travail livré, respect des délais, leadership, communication, respect des procédures et des principes humanitaires', "Évaluation floue, déconnectée des priorités réelles de la mission sur l'année"],
      ['Objectifs de résultat', "Qu'est-ce que la personne devait accomplir cette année précisément, et l'a-t-elle fait ?", "« Réduire le taux de rupture de stock de la pharmacie de 20 % à moins de 5 % d'ici décembre », fixé à l'entretien précédent", "Un résultat atteint par des comportements problématiques est validé sans question"],
    ],
  },
  {
    type: 'concept',
    title: 'Pondérer les deux familles : la logique du template',
    body: [
      "Une grille professionnelle pondère les deux familles. Dans grille-evaluation-performance-annuelle.xlsx, chaque ligne est typée « Compétence » ou « Objectif » et porte sa propre pondération (colonne C), le total devant faire 100 %.",
      "Le template propose 5 compétences (15, 15, 15, 10, 10 soit 65 %) et 3 objectifs (15, 10, 10 soit 35 %). Vous pouvez adapter ces poids à la fonction : un poste très orienté résultats (logistique d'approvisionnement) peut peser davantage sur les objectifs. Deux règles de terrain : fixer les poids avant de voir les notes, et ne descendre sous 5 % pour aucune ligne (une ligne à 2 % ne pèse rien).",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Poste : Responsable Pharmacie. Les objectifs de stock sont au coeur de la fonction : on conserve les poids du template (65 % compétences, 35 % objectifs).",
        "Le poids de l'objectif « rupture de stock » reste à 15 % : c'est l'objectif qui porte le plus de risque pour les patients.",
      ],
    },
    pitfall: "Changer les pondérations après avoir vu les résultats pour obtenir la classification que l'on souhaite : la grille perd toute crédibilité.",
  },
  {
    type: 'concept',
    title: 'Auto-évaluation et superviseur : deux regards, pas un vote',
    body: [
      "L'auto-évaluation n'est pas une formalité, c'est un outil de dialogue. L'écart entre la note que l'employé se donne et celle que le superviseur envisage est souvent l'information la plus utile du processus : un employé qui se sous-évalue révèle un déficit de reconnaissance ; un employé qui se surévalue largement révèle un déficit de feedback en cours d'année (il découvre le désaccord le jour de l'entretien, ce qui est toujours une faute du management) ou un vrai désalignement.",
      "La note retenue n'est jamais une moyenne mécanique : le template la calcule à 30 % auto-évaluation et 70 % évaluation du superviseur (colonne F : D × 0,3 + E × 0,7). Le jugement du responsable du résultat reste prépondérant.",
    ],
    example: {
      title: 'Ligne « Leadership et gestion d\'équipe » — B. Kahindo',
      lines: [
        "Auto-évaluation 4, superviseur 2.",
        "Moyenne simple : (4 + 2) ÷ 2 = 3,0 → « Conforme aux attentes », aucun PDI déclenché.",
        "Template : 4 × 0,3 + 2 × 0,7 = 1,2 + 1,4 = 2,6 → sous le seuil 3 : un PDI s'impose sur ce point.",
      ],
    },
    highlight: "La moyenne simple aurait caché le problème. Le poids 70 % du superviseur le fait apparaître — à condition que sa note soit défendue par des faits datés.",
  },
  {
    type: 'comparison-table',
    title: "Échelle de notation 1 à 5 : des repères observables (à adapter à votre mission)",
    columns: ['Note', 'Libellé du template', 'Pour une compétence', 'Pour un objectif'],
    rows: [
      ['1', 'Insuffisant', "Écart grave ou répété, malgré des rappels documentés", "Moins de 50 % de la cible"],
      ['2', 'À améliorer', "Écarts réguliers qui nécessitent un rappel ou une reprise par le superviseur", "50 à 99 % de la cible, ou cible atteinte après l'échéance"],
      ['3', 'Conforme aux attentes', "Niveau attendu tenu de façon constante, sans rappel", "Cible atteinte à l'échéance"],
      ['4', 'Dépasse les attentes', "Va au-delà : anticipe, aide ses collègues, des exemples datés le prouvent", "Cible atteinte avec au moins un mois d'avance, ou dépassée d'au moins 20 %"],
      ['5', 'Exceptionnel', "Devient une référence pour d'autres équipes, effets mesurables hors de son périmètre", "Cible dépassée d'au moins 50 % ou impact exceptionnel documenté"],
    ],
  },
  {
    type: 'concept',
    title: "Les biais qui faussent une note — et l'antidote de chacun",
    body: "Un superviseur honnête se trompe encore, parce que le cerveau résume. Connaître les biais ne suffit pas : l'antidote est une règle de méthode appliquée avant de figer les notes (Procédure 2, étape 5).",
    table: {
      columns: ['Biais', 'Comment il se manifeste', 'Antidote'],
      rows: [
        ['Effet de récence', "Tous les exemples cités datent d'octobre à décembre", "Exiger au moins un exemple par trimestre, ou noter dans un journal de performance chaque mois"],
        ['Effet de halo', "Une qualité marquante (ponctualité) tire toutes les notes vers le haut", "Noter ligne par ligne, en relisant l'échelle, sans regarder les autres lignes"],
        ['Complaisance', "On remonte un 2 en 3 pour « ne pas démotiver »", "Se demander : quel exemple justifie le 3 ? S'il n'y en a pas, la note reste 2"],
        ['Sévérité', "On note toujours bas, par principe", "Comparer chaque note aux repères de l'échelle, pas à un idéal"],
        ['Similarité', "On note mieux ceux qui nous ressemblent ou parlent comme nous", "Relire la preuve, pas la personne : la note doit être justifiable par quelqu'un d'autre"],
      ],
    },
    pitfall: "Attribuer une note de complaisance pour éviter un conflit détruit la valeur de toute la grille : elle ne reflète plus la réalité, ne peut plus fonder un PDI et prive l'employé du signal honnête dont il a besoin.",
  },
  {
    type: 'concept',
    title: "La logique du PDI : jamais déconnecté de l'évaluation",
    body: [
      "Un PDI rédigé sans lien avec l'évaluation n'est qu'un vœu pieux : « se former au leadership », « améliorer sa communication ». Un PDI professionnel part exclusivement des écarts identifiés pendant l'évaluation : une compétence notée 2/5 en gestion d'équipe appelle une action sur ce point exact.",
      "Il se construit pendant l'entretien, avec l'employé, immédiatement après avoir discuté chaque écart, jamais de mémoire plusieurs jours après. Chaque action porte une échéance datée et un mode de suivi, jamais « à travailler dans l'année ».",
      "Repère pour choisir les modalités : le modèle 70-20-10 situe environ 70 % de l'apprentissage dans le travail lui-même, 20 % dans l'échange avec les autres (mentorat, feedback) et 10 % dans la formation formelle. Un écart se traite donc rarement par une formation seule.",
    ],
    example: {
      title: 'Écart « Leadership » de B. Kahindo',
      lines: [
        '70 % — Apprentissage sur le poste : réunion d\'équipe de 20 minutes chaque lundi avec compte rendu écrit, dès le 25/01/2027.',
        '20 % — Mentorat : 6 séances d\'une heure avec le Dr Kitenge, du 17/02 au 07/07/2027.',
        '10 % — Formation externe : « Encadrer une petite équipe de terrain », 3 jours, du 24 au 26/03/2027.',
      ],
    },
  },
  {
    type: 'concept',
    title: 'Un objectif SMART se teste en cinq questions',
    body: "Le guide source demande 2 à 3 objectifs pour la période suivante, formulés SMART : spécifiques, mesurables, atteignables, réalistes, temporellement définis. Testez chaque objectif sur ces cinq questions avant de l'écrire dans le PDI.",
    table: {
      columns: ['Formulation vague', 'Formulation SMART', 'Ce qui a changé'],
      rows: [
        ['Améliorer la gestion de stock', "Maintenir le taux de rupture des 24 traceurs sous 5 % chaque mois, état de stock du 1er du mois validé par le Coordinateur Médical", 'Un indicateur, un seuil, une source'],
        ['Mieux communiquer', "Remettre le rapport mensuel de consommation avant le 5 du mois suivant, au moins 11 fois sur 12 en 2027", 'Un comportement observable et une échéance'],
        ['Former l\'équipe', "Faire valider 6 fiches de procédure par le Coordinateur Médical avant le 30/06/2027 et faire passer la commande de juillet à F. Amani sous supervision", 'Un livrable, une date, un témoin'],
      ],
    },
    tip: "Un objectif que vous ne pouvez pas déclarer « atteint » ou « non atteint » le 31 décembre sans débat n'est pas mesurable : réécrivez-le.",
  },
  {
    type: 'concept',
    title: 'Le plan de succession : anticiper, pas subir',
    body: [
      "Les départs imprévus sur les postes clés arrivent toujours au pire moment : une mutation interne, une offre d'une agence onusienne mieux rémunérée, une urgence familiale. Sans successeur identifié, l'organisation perd des semaines, parfois des mois, de capacité opérationnelle pendant le recrutement et la prise de poste.",
      "Un poste clé est un poste dont la vacance non anticipée entraînerait un risque opérationnel, financier ou réputationnel significatif. Pour chacun, le plan nomme au moins un successeur potentiel avec un niveau de préparation évalué honnêtement. Ce n'est pas une promesse de promotion : c'est un outil de gestion du risque RH, à usage interne de la coordination.",
    ],
    highlight: "Plus un poste concentre de savoir-faire critique non documenté, plus il est prioritaire pour un plan de succession : confondre « performant » et « irremplaçable » est l'erreur la plus coûteuse.",
  },
  {
    type: 'comparison-table',
    title: 'Les quatre niveaux de préparation du modèle (readiness)',
    columns: ['Niveau (libellé du modèle)', 'Test de preuve proposé', 'Action typique'],
    rows: [
      ['Prêt maintenant', "A déjà tenu le poste en intérim avec succès, possède la qualification requise, évaluation d'au moins 3 sur les compétences du poste", 'Documenter la passation, valider le successeur au niveau du Head of Mission'],
      ['Prêt dans 6-12 mois', "Remplit deux des trois preuves ; l'écart restant se comble en moins d'un an", "Mission élargie sous supervision, formation ciblée, co-signature"],
      ['Prêt dans 12-24 mois', "Remplit une seule preuve ; il manque expérience et qualification", "Parcours de développement structuré, mobilité courte, mentorat"],
      ['À développer sur le long terme', "Potentiel visible mais profil encore éloigné du poste", "Suivi dans le plan des hauts potentiels, revue annuelle"],
    ],
  },
  {
    type: 'concept',
    title: 'Formation continue et hauts potentiels : deux prolongements du PDI',
    body: [
      "Les PDI de tous les agents d'une base représentent une demande de formation considérable pour un budget limité. Gérer les formations internes, c'est consolider ces besoins, choisir pour chacun la modalité la moins coûteuse qui fonctionne, arbitrer avec la Finance selon des critères écrits, puis mesurer ce qu'elle a changé (Procédure 7).",
      "Les hauts potentiels sont les employés dont les évaluations successives et la trajectoire de compétences justifient un investissement de développement prioritaire, au-delà du PDI standard. On les repère avec des critères écrits, jamais « à l'impression » (Procédure 8). L'onglet Historique et tendance du template fournit la donnée de base : le score global sur plusieurs années.",
    ],
    tip: "Accès aux ressources de développement : avant d'acheter une formation, vérifiez ce qui existe gratuitement (mentorat interne, observation d'un collègue, modules en ligne gratuits comme ceux d'OpenWHO pour les sujets de santé) ; l'achat vient en dernier.",
  },
  {
    type: 'comparison-table',
    title: 'Qui voit quoi : circulation et classement des documents',
    columns: ['Document', 'Qui le reçoit', 'Où il est classé'],
    rows: [
      ['Grille d\'évaluation (xlsx)', "Employé, superviseur, HR Manager", 'Dossier individuel (Module 03)'],
      ['PDI — Partie A', "Employé (copie remise dans les 48 heures), superviseur, HR Manager", 'Dossier individuel'],
      ['Plan de succession — Partie B', "Head of Mission, HR Manager, superviseur direct : usage interne de la coordination", "Dossier à accès restreint, hors dossier individuel"],
      ['Liste des hauts potentiels', 'Head of Mission, HR Manager, siège (Head of HR)', 'Dossier à accès restreint'],
    ],
    pitfall: "Les deux parties sont dans le même fichier Word : avant d'envoyer le PDI à l'employé, enregistrez une copie contenant uniquement la Partie A. Envoyer la Partie B à l'employé évalué, ou à ses successeurs, est une faute de confidentialité.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire à maîtriser dès ce module',
    terms: [
      { term: 'PDI (Plan de Développement Individuel)', definition: "Document formalisant les actions de développement d'un employé pour la période à venir, directement issu des écarts constatés lors de l'évaluation." },
      { term: 'Note retenue', definition: "Score final d'une ligne après pondération : 30 % auto-évaluation, 70 % évaluation du superviseur. Jamais une moyenne arithmétique non réfléchie." },
      { term: 'Score global pondéré', definition: "Somme des notes retenues multipliées par la pondération de chaque ligne (cellule G19 du template) : il donne la classification." },
      { term: 'Classification', definition: "Insuffisant (< 1,5), À améliorer (1,5 à < 2,5), Conforme aux attentes (2,5 à < 3,5), Dépasse les attentes (3,5 à < 4,5), Exceptionnel (4,5 et plus)." },
      { term: 'Écart auto / superviseur', definition: "Différence entre la note que l'employé se donne et celle du superviseur : le point de départ du dialogue de l'entretien." },
      { term: 'Objectif SMART', definition: "Spécifique, mesurable, atteignable, réaliste, temporellement défini." },
      { term: 'Poste clé', definition: "Poste dont la vacance non anticipée entraînerait un risque opérationnel, financier ou réputationnel significatif pour la mission." },
      { term: 'Niveau de préparation (readiness)', definition: "Délai estimé avant qu'un successeur potentiel puisse tenir un poste clé de façon autonome." },
      { term: 'Hauts potentiels', definition: "Employés dont les évaluations successives et la trajectoire justifient un investissement de développement prioritaire, au-delà du PDI standard." },
    ],
  },
  {
    type: 'process',
    title: 'Le calendrier annuel de la performance : ce que vous faites et quand',
    intro: "Le cycle ne s'arrête pas à l'entretien. Chaque temps ci-dessous est repris dans une procédure de ce module. Dates du cas fil rouge pour le cycle 2027.",
    steps: [
      { title: 'Janvier — Campagne et entretiens annuels (Procédures 1 à 5)', body: "Grille, auto-évaluation, entretiens, PDI, objectifs, succession. Dans le cas fil rouge : du 4 janvier au 12 février 2027." },
      { title: 'Février — Plan de formation arbitré (Procédure 7)', body: "Consolidation des PDI de la base, arbitrage budgétaire avec la Finance, calendrier publié." },
      { title: 'Juillet — Point de suivi à 6 mois (Procédure 6)', body: "Revue des actions du PDI et du plan de succession : mercredi 21 juillet 2027." },
      { title: "Octobre — Collecte des preuves de fin d'année", body: "Relance du journal de performance : un exemple par trimestre évite l'effet de récence." },
      { title: 'Décembre — Revue des hauts potentiels et préparation de la campagne suivante (Procédures 6 et 8)', body: "Liste mise à jour, historique figé, calendrier de la campagne suivante posé dans l'agenda partagé." },
    ],
    result: "Une évaluation annuelle sans suivi intermédiaire n'est qu'une photo : le PDI relu seulement un an plus tard n'a influencé aucun comportement entre-temps.",
  },
  {
    type: 'concept',
    title: 'Vos outils pour ce module',
    body: "Deux templates du dossier 04-templates sont utilisés champ par champ dans les procédures, avec l'agenda partagé (Outlook, Google Calendar ou équivalent). Les Procédures 7 et 8 s'appuient en plus sur deux petits fichiers de travail que vous créez vous-même (ils ne sont pas fournis dans le dossier).",
    table: {
      columns: ['Outil', 'Contenu exact', 'Utilisé dans'],
      rows: [
        ['grille-evaluation-performance-annuelle.xlsx', "Onglet « Evaluation annuelle » : en-tête (B4 à E6), lignes 11 à 18 (colonnes A à H : Compétence / Objectif évalué, Type, Pondération, Auto-évaluation, Éval. superviseur, Note retenue, Score pondéré, Commentaire), total ligne 19, évaluation globale E21. Onglet « Historique et tendance » : colonnes Année, Poste occupé, Score global pondéré, Évaluation globale, Évolution vs année précédente", 'Procédures 1, 2, 3 et 6'],
        ['plan-developpement-individuel-succession.docx', "Partie A (sections 1 à 4 : informations générales, compétences à développer, actions et échéancier, objectifs) et Partie B (sections 5 à 7 : poste clé, successeurs potentiels, plan d'action de préparation et prochaine revue)", 'Procédures 4 et 5'],
        ['Agenda partagé', "Date de l'entretien communiquée au moins deux semaines à l'avance, point de suivi à 6 mois", 'Procédures 1 et 6'],
        ['Plan_formation_2027 et liste des hauts potentiels (fichiers de travail à créer)', "Besoins consolidés, arbitrage budgétaire, registre de formation ; matrice performance et potentiel", 'Procédures 7 et 8'],
      ],
    },
    pitfall: "Les deux templates sont livrés remplis avec un exemple (Jean-Baptiste Étienne, Log Officer). Travaillez toujours sur une copie et effacez toutes les valeurs d'exemple avant d'envoyer quoi que ce soit.",
  },

  // ─── Procédure 1 — Préparer la campagne et la grille ───────────────────
  {
    type: 'concept',
    title: "Procédure 1 — Préparer la campagne et la grille d'évaluation (avant l'entretien)",
    body: "Un entretien se gagne ou se perd avant d'avoir lieu. Source : un employé qui découvre la grille le jour de l'entretien n'a pas pu réfléchir à son année, et vous perdez l'un des deux regards que le processus doit produire. Cette procédure couvre les trois semaines qui précèdent l'entretien.",
    bullets: [
      "Étape 1 — Cadrer le périmètre et rassembler les documents d'entrée.",
      "Étape 2 — Fixer la date et poser le calendrier de la campagne (au moins deux semaines à l'avance).",
      "Étape 3 — Créer la copie de la grille et renseigner l'en-tête.",
      "Étape 4 — Définir les lignes : compétences et objectifs de l'année écoulée.",
      "Étape 5 — Fixer les pondérations à 100 %.",
      "Étape 6 — Envoyer la grille d'auto-évaluation au moins une semaine avant l'entretien.",
    ],
    result: "Livrable 1 : le calendrier accepté, la copie de grille préparée et le courriel d'envoi de l'auto-évaluation archivé dans le dossier de campagne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 6',
    title: "Cadrer le périmètre et rassembler les documents d'entrée",
    intro: "Une évaluation se juge par rapport à ce qui a été demandé à la personne. Si l'objectif de l'an dernier n'est pas retrouvé, vous ne pourrez pas dire s'il est atteint.",
    steps: [
      {
        title: 'Listez les agents à évaluer',
        actions: [
          "Ouvrez la masse salariale de décembre 2026 (36 lignes) et copiez la liste dans un fichier « Campagne_Eval_2026 ».",
          "Retirez les agents entrés après le 1er octobre 2026 (règle de la politique RH de KSS : moins de 3 mois d'ancienneté).",
          "Ajoutez en face de chaque agent son superviseur direct.",
        ],
      },
      {
        title: 'Constituez un dossier par agent',
        actions: [
          "Créez le dossier « Eval_2026_Nom » dans l'espace RH confidentiel (pas sur votre bureau).",
          "Rassemblez la fiche de poste à jour, le compte rendu et les objectifs de l'entretien de janvier 2026, le PDI précédent, l'historique des scores.",
          "Notez dans « Manquants.txt » chaque document introuvable.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 4 janvier 2027, dossier de B. Kahindo',
      lines: [
        "Périmètre : 36 lignes − 2 arrivées après le 01/10/2026 = 34 agents évalués.",
        "Fiche de poste Responsable Pharmacie : reçue (version février 2024, à confirmer avec le Dr Kitenge).",
        "Objectifs fixés en janvier 2026 : reçus (3 objectifs chiffrés, courriel du 22/01/2026).",
        "PDI 2026 : INTROUVABLE — demandé à A. Kavira le 04/01.",
        "Historique des scores : 2024 = 3,0 ; 2025 = 3,3.",
      ],
    },
    result: "Fait quand : la liste des 34 agents avec superviseurs est complète et chaque dossier contient ses documents ou une demande de document en cours.",
    pitfall: "Évaluer sur une fiche de poste obsolète ou sur des objectifs que personne n'a écrits : l'employé contestera à raison, et vous n'aurez aucun contre-argument.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 6',
    title: "Fixer la date de l'entretien et poser le calendrier de la campagne",
    intro: "Source : la date doit être fixée et communiquée au moins deux semaines à l'avance, jamais improvisée le jour même. Entrées : agendas du superviseur, de l'employé et de la salle.",
    steps: [
      {
        title: 'Trouvez le créneau',
        actions: [
          "Ouvrez l'agenda partagé et affichez ensemble les agendas du Dr Kitenge, de B. Kahindo, le vôtre et celui de la salle de réunion.",
          "Réservez 75 minutes sans déplacement, hors jours de cut-off de paie (le 20) et de virement (le 28).",
        ],
      },
      {
        title: 'Envoyez l\'invitation',
        actions: [
          "Créez l'événement « Entretien annuel 2026 — B. Kahindo », durée 75 minutes, lieu précisé, ordre du jour en trois temps dans la description.",
          "Envoyez-la au moins 14 jours avant, et ne joignez aucune note ni donnée sensible à l'invitation.",
          "Posez dans le même temps vos propres jalons de campagne (envoi de la grille, retours, analyse).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — calendrier de campagne pour B. Kahindo',
      lines: [
        "Lun 04/01 — Lancement de la campagne (liste des 34 agents).",
        "Jeu 07/01 — Invitation envoyée (14 jours avant) et grille d'auto-évaluation envoyée.",
        "Jeu 14/01 — Évaluation du superviseur terminée, sans avoir vu celle de l'employée.",
        "Ven 15/01, 17 h — Retour de l'auto-évaluation.",
        "Lun 18/01 — Analyse des écarts et contrôle des biais.",
        "Mer 20/01 — Cut-off de paie : aucun entretien ce jour-là.",
        "Jeu 21/01, 9 h 00 à 10 h 15 — Entretien. Ven 22/01 — Documents finalisés.",
        "Mer 27/01 — Validations. Ven 12/02 — Fin de la campagne des 34 agents.",
      ],
    },
    result: "Fait quand : l'invitation est acceptée par les trois personnes et chaque jalon de campagne figure dans votre agenda.",
    pitfall: "Fixer l'entretien la veille « parce que tout le monde est là » : pas d'auto-évaluation préparée, pas d'exemples, donc une formalité de 10 minutes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 6',
    title: "Créer la copie de la grille et renseigner l'en-tête",
    intro: "Entrée : le fichier grille-evaluation-performance-annuelle.xlsx du dossier 04-templates, livré rempli avec un exemple. Vous ne travaillez jamais dans l'original.",
    steps: [
      {
        title: 'Dupliquez et nettoyez',
        actions: [
          "Copiez le fichier et renommez-le « Grille_Eval_2026_Kahindo.xlsx » dans le dossier de l'agent.",
          "Ouvrez l'onglet « Evaluation annuelle ».",
          "Effacez les notes d'exemple dans D11:E18 et les textes d'exemple en A16:A18.",
          "Ne touchez jamais aux formules des colonnes F et G, ni à C19, G19 et E21.",
        ],
      },
      {
        title: "Renseignez l'en-tête (lignes 4 à 6)",
        actions: [
          "B4 : nom de l'employé. E4 : poste / fonction.",
          "B5 : évaluateur (superviseur). E5 : année évaluée, saisie comme un nombre (l'onglet Historique la relit).",
          "B6 : date de l'entretien. E6 : mission / base.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — en-tête rempli',
      lines: [
        "B4 : B. Kahindo        E4 : Responsable Pharmacie",
        "B5 : Dr M. Kitenge, Coordinateur Médical (superviseur direct), avec N. Mbusa, HR Officer",
        "E5 : 2026        B6 : 2027-01-21 (même format texte que l'exemple)        E6 : RDC — Base de Goma",
      ],
    },
    result: "Fait quand : l'en-tête ne contient plus aucune trace de « Jean-Baptiste Étienne », E5 est un nombre et les formules F11:G18 sont intactes.",
    pitfall: "Oublier d'effacer les notes d'exemple : l'employé reçoit une grille déjà notée pour un autre. Cochez aussi que la date B6 n'est pas celle de l'exemple (20 janvier 2026).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 6',
    title: 'Définir les lignes : compétences et objectifs de l\'année écoulée',
    intro: "Les 5 premières lignes (11 à 15) sont des compétences prêtes à l'emploi. Les 3 dernières (16 à 18) sont à personnaliser avec les objectifs fixés lors de l'entretien précédent. Entrée : le compte rendu de janvier 2026.",
    steps: [
      {
        title: 'Vérifiez les 5 lignes de compétences',
        actions: [
          "Relisez A11:A15 : qualité et fiabilité, respect des délais et des priorités, leadership et gestion d'équipe, communication et coordination inter-services, respect des procédures et des principes humanitaires.",
          "Conservez-les si elles correspondent à la fonction ; adaptez le libellé sinon.",
          "Vérifiez que la colonne B affiche « Compétence » (liste déroulante : ne tapez pas).",
        ],
      },
      {
        title: 'Remplacez les 3 lignes « à personnaliser »',
        actions: [
          "Saisissez en A16:A18 les objectifs réellement fixés, avec leur cible chiffrée et leur échéance.",
          "Vérifiez que la colonne B affiche « Objectif ».",
          "Ne réécrivez jamais un objectif après coup pour qu'il colle aux résultats.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lignes 16 à 18',
      lines: [
        "A16 : Objectif 1 — Ramener le taux de rupture des 24 médicaments traceurs de 20 % à moins de 5 % au 31/12/2026.",
        "A17 : Objectif 2 — Réaliser 4 inventaires physiques trimestriels en double comptage, écart de stock < 2 % sur au moins 3 inventaires.",
        "A18 : Objectif 3 — Former 2 aides-pharmaciens à la tenue des fiches de stock et à l'inventaire avant le 30/09/2026 (test ≥ 80 %).",
      ],
    },
    result: "Fait quand : chaque objectif porte une cible et une échéance qui permettent de dire « atteint » ou « non atteint » sans débat.",
    tip: "Le template offre exactement 3 lignes d'objectifs. Si l'employé en avait 4, regroupez les deux plus proches plutôt que d'ajouter une ligne sous la plage : les totaux C19 et G19 ne la compteraient pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 6',
    title: 'Fixer les pondérations : un total de 100 %',
    intro: "La colonne C porte le poids de chaque ligne. Le total C19 doit faire 100 % ; sinon la cellule E21 n'affiche plus la classification mais un message d'erreur.",
    steps: [
      {
        title: 'Saisissez les poids',
        actions: [
          "Saisissez en C11:C18 : 15 %, 15 %, 15 %, 10 %, 10 %, 15 %, 10 %, 10 % (valeurs du template, à adapter à la fonction).",
          "Fixez les poids avant de connaître les notes et validez-les avec le superviseur.",
        ],
      },
      {
        title: 'Vérifiez le total',
        actions: [
          "Lisez C19 : il doit afficher 100 %.",
          "Si E21 affiche « Vérifier la pondération (doit totaliser 100%) », corrigez la colonne C avant toute autre action.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Type', 'Poids', 'Justification'],
      rows: [
        ['Qualité et fiabilité du travail livré', 'Compétence', '15 %', "Sécurité des patients : cœur du poste"],
        ['Respect des délais et des priorités', 'Compétence', '15 %', "Rapports et commandes à date fixe"],
        ["Leadership et gestion d'équipe", 'Compétence', '15 %', "Encadre 2 aides-pharmaciens et un assistant"],
        ['Communication et coordination inter-services', 'Compétence', '10 %', 'Interface Programmes et Logistique'],
        ['Respect des procédures et des principes humanitaires', 'Compétence', '10 %', 'Stupéfiants et chaîne du froid'],
        ['Objectif 1 — rupture de stock', 'Objectif', '15 %', 'Priorité de la base en 2026'],
        ['Objectif 2 — inventaires', 'Objectif', '10 %', 'Fiabilité des stocks'],
        ['Objectif 3 — formation des aides', 'Objectif', '10 %', 'Préparation de la relève'],
      ],
    },
    result: "Fait quand : C19 = 100 %, aucune ligne sous 5 % et le superviseur a validé les poids avant de noter.",
    pitfall: "Modifier les poids après avoir vu les résultats pour franchir un seuil de classification : c'est la manipulation la plus facile à détecter en audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 6',
    title: "Envoyer la grille d'auto-évaluation au moins une semaine avant",
    intro: "Source : l'employé complète uniquement la colonne « Auto-évaluation », avec au moins un exemple concret par ligne dans « Commentaire ». Les colonnes A, B et C sont déjà pré-remplies par vos soins.",
    steps: [
      {
        title: "Préparez la copie à envoyer",
        actions: [
          "Enregistrez une copie « Grille_Eval_2026_Kahindo_AUTO.xlsx » sans aucune note dans la colonne E (jamais votre grille ou celle du superviseur).",
          "Vérifiez que seules D11:D18 et H11:H18 sont à remplir.",
        ],
      },
      {
        title: 'Rédigez et envoyez le courriel',
        actions: [
          "Fixez la date de retour (une semaine d'écart au moins avec l'entretien pour votre analyse).",
          "Indiquez la consigne de commentaire : préfixe « Emp. : », un fait, une date, un chiffre.",
          "Rappelez la date et l'heure de l'entretien et la confidentialité du fichier.",
          "Programmez un rappel à J-3 dans votre agenda.",
        ],
      },
    ],
    example: {
      title: 'Courriel envoyé le jeudi 7 janvier 2027',
      lines: [
        "Objet : Entretien annuel 2026 — votre auto-évaluation, à retourner avant le vendredi 15 janvier 17 h",
        "Bonjour B., votre entretien annuel aura lieu le jeudi 21 janvier à 9 h 00 (75 min, salle de réunion de la base).",
        "Merci de compléter le fichier joint : pour chaque ligne, choisissez une note de 1 à 5 dans la colonne D (liste déroulante).",
        "Dans la colonne H, écrivez « Emp. : » puis un exemple concret : un fait, une date, un chiffre. Un exemple par ligne, y compris pour les objectifs.",
        "Ne modifiez pas les autres colonnes. Il n'y a pas de bonne note attendue : ce qui compte, c'est l'exemple.",
        "Cordialement, N. Mbusa — copie : Dr M. Kitenge",
      ],
    },
    result: "Fait quand : l'accusé de réception de l'employée est reçu et le rappel du 11 janvier est posé. C'est votre Livrable 1.",
    tip: "Ouvrez la grille avec l'employé en 10 minutes si l'outil est nouveau pour lui : une grille mal comprise donne une auto-évaluation vide.",
  },

  // ─── Procédure 2 — Évaluer ─────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 2 — Noter de façon défendable : preuves, écarts, contrôle',
    body: "Source : le superviseur complète sa colonne de façon indépendante, avant d'avoir vu les réponses de l'employé, et prépare dès maintenant un exemple daté pour chaque note inférieure à 3. Rien ne discrédite plus vite un HR Manager qu'une note basse qu'il ne peut pas justifier. Cette procédure se déroule du 8 au 18 janvier 2027.",
    bullets: [
      "Étape 1 — Rassembler les preuves de l'année.",
      "Étape 2 — Remplir « Éval. superviseur » sans voir l'auto-évaluation.",
      "Étape 3 — Documenter chaque note par un exemple daté (colonne H).",
      "Étape 4 — Réceptionner l'auto-évaluation et mesurer les écarts.",
      "Étape 5 — Contrôler les biais avant de figer les notes.",
      "Étape 6 — Vérifier les formules, la note retenue et la classification.",
    ],
    result: "Livrable 2 : la grille complète, un tableau des écarts, un score global vérifié à la main.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: "Rassembler les preuves de l'année",
    intro: "Aucune note sans preuve. Le superviseur et vous construisez un dossier de preuves avant d'ouvrir la colonne E. Entrée : le dossier de l'agent (Procédure 1, étape 1).",
    steps: [
      {
        title: 'Collectez par type de preuve',
        actions: [
          "Créez le sous-dossier « Preuves_2026 » dans le dossier de l'agent.",
          "Demandez au superviseur : rapports et livrables datés, indicateurs mensuels, courriels de félicitations ou de plainte, comptes rendus d'audit.",
          "Ajoutez les registres RH utiles : absences, incidents, entretiens de sortie de son équipe.",
        ],
      },
      {
        title: 'Reliez chaque ligne de la grille à sa preuve',
        actions: [
          "Dressez le tableau « ligne → preuve → où la trouver ».",
          "Repérez les lignes sans preuve : le superviseur doit les compléter avant de noter.",
        ],
      },
    ],
    table: {
      columns: ['Ligne de la grille', 'Preuve à rassembler', 'Où la trouver'],
      rows: [
        ['Qualité et fiabilité', 'Rapport d\'audit pharmacie du 14/09/2026, rapports mensuels', 'Dossier Qualité, archive Coordination Médicale'],
        ['Respect des délais', 'Dates de remise des 12 rapports de consommation, date de la commande T3', 'Courriels, tableau de suivi'],
        ["Leadership et gestion d'équipe", 'Plaintes écrites, comptes rendus de réunion, départs', 'Dossier RH, entretien de sortie'],
        ['Communication', 'Courriels d\'alerte rupture, délais de réponse', 'Boîte du Coordinateur Médical'],
        ['Procédures et principes', 'Registre stupéfiants, registre de température, refus de don du 08/08/2026', 'Registres de la pharmacie'],
        ['Objectifs 1, 2, 3', "États de stock du 1er du mois, procès-verbaux d'inventaire, tests de formation", 'Pharmacie, dossier Formation'],
      ],
    },
    result: "Fait quand : chacune des 8 lignes a au moins une preuve identifiée et accessible.",
    tip: "Un journal de performance de dix lignes par mois, tenu par le superviseur toute l'année, évite de reconstituer l'année en décembre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: "Remplir la colonne « Éval. superviseur » sans voir l'auto-évaluation",
    intro: "Le regard du superviseur doit être indépendant. S'il lit d'abord la note de l'employé, il s'ancre dessus et le dialogue perd sa valeur.",
    steps: [
      {
        title: 'Préparez les conditions',
        actions: [
          "Le superviseur travaille dans sa propre copie de la grille (colonne E vide, colonne D vide).",
          "N'ouvrez pas le fichier retourné par l'employée avant d'avoir terminé les 8 lignes.",
          "Gardez sous les yeux le tableau de repères de l'échelle 1 à 5.",
        ],
      },
      {
        title: 'Notez ligne par ligne',
        actions: [
          "Choisissez la note dans la liste déroulante de E11:E18 (valeurs 1 à 5 uniquement).",
          "Relisez le repère de l'échelle avant de valider chaque note.",
          "Complétez les 8 lignes : une cellule vide compte pour 0 dans le calcul de la note retenue.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — Dr Kitenge, jeudi 14 janvier 2027',
      lines: [
        "Qualité et fiabilité : 4 — audit du 14/09/2026 sans non-conformité majeure.",
        "Respect des délais : 3 — 5 rapports mensuels remis après le 5 sur 12.",
        "Leadership et gestion d'équipe : 2 — deux plaintes écrites et une démission.",
        "Communication : 3 — alerte amoxicilline remontée avec 6 jours de retard en mai.",
        "Procédures et principes humanitaires : 5 — 0 écart stupéfiants sur 12 contrôles.",
        "Objectif 1 : 4 — cible atteinte dès novembre. Objectif 2 : 3 — cible atteinte. Objectif 3 : 4 — 2 aides formées avec 2 mois d'avance.",
      ],
    },
    result: "Fait quand : E11:E18 contiennent 8 notes de 1 à 5, saisies avant toute lecture de l'auto-évaluation.",
    pitfall: "Noter après avoir lu l'auto-évaluation « pour gagner du temps » : l'employée se retrouve notée à peine moins que ce qu'elle s'est donnée, et l'écart disparaît.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Documenter chaque note par un exemple daté (colonne H)',
    intro: "La grille n'a qu'une colonne « Commentaire » (H). Préfixez chaque texte par « Emp. : » ou « Sup. : » pour ne pas mélanger les deux regards. Source : toute note inférieure à 3 exige un exemple daté et vérifiable ; les notes de 4 et plus aussi.",
    steps: [
      {
        title: 'Écrivez le commentaire sous la forme fait — date — chiffre — source',
        actions: [
          "Saisissez en H un texte commençant par « Sup. : ».",
          "Citez un fait précis, sa date, un chiffre et le document qui le prouve.",
          "N'utilisez aucun adjectif sur la personne : décrivez ce qui a été observé.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Note', 'Commentaire insuffisant', 'Commentaire défendable'],
      rows: [
        ["Leadership", '2', "Manque d'autorité sur son équipe", "Sup. : plaintes écrites de deux aides-pharmaciens les 12/03 et 28/08/2026 (consignes contradictoires) ; démission d'une aide-pharmacienne le 30/10/2026, entretien de sortie : « climat d'équipe »"],
        ['Délais', '3', 'Parfois en retard', "Sup. : rapports de consommation remis après le 5 en mars, mai, juin, août et octobre (5 sur 12) ; commande T3 passée à J-2"],
        ['Procédures', '5', 'Très rigoureuse', "Sup. : 12 contrôles mensuels du registre stupéfiants signés, 0 écart ; refus documenté d'un don à 5 mois de péremption le 08/08/2026"],
        ['Objectif 1', '4', 'Bon résultat', "Sup. : taux de rupture 8,3 % en octobre (2/24), 4,2 % en novembre et décembre (1/24) : cible < 5 % atteinte avec un mois d'avance"],
      ],
    },
    result: "Fait quand : les 8 lignes portent un commentaire « Sup. : » avec fait, date, chiffre et source, et le superviseur peut produire la source en entretien.",
    pitfall: "Écrire « Sup. : à discuter » dans H pour les notes basses : c'est reporter le travail de preuve au moment où il est le plus inconfortable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: "Réceptionner l'auto-évaluation et mesurer les écarts",
    intro: "Le fichier de B. Kahindo est arrivé le vendredi 15 janvier à 16 h 40. Vous le consolidez dans une copie maître, puis calculez les écarts sur une feuille de brouillon, pas dans la grille.",
    steps: [
      {
        title: 'Consolidez',
        actions: [
          "Copiez D11:D18 et les commentaires « Emp. : » du fichier retourné vers la copie maître (supervisor + employée).",
          "Vérifiez que les 8 notes d'auto-évaluation sont des entiers de 1 à 5 et que chaque commentaire contient un fait.",
        ],
      },
      {
        title: 'Calculez et lisez les écarts',
        actions: [
          "Sur une feuille de brouillon, calculez écart = auto-évaluation − superviseur pour chaque ligne.",
          "Écart de 0 : confirmez rapidement. Écart de 1 : vérifiez un exemple. Écart de 2 ou plus : point d'ordre du jour avec preuves.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Auto', 'Sup.', 'Écart', 'Lecture', 'Traitement en entretien'],
      rows: [
        ['Qualité', '4', '4', '0', 'Alignement', 'Confirmer'],
        ['Délais', '3', '3', '0', "Alignement, l'employée se juge lucidement", 'Confirmer'],
        ['Leadership', '4', '2', '+2', 'Surévaluation : feedback en cours d\'année insuffisant ou désalignement', "Point central : 8 minutes avec preuves"],
        ['Communication', '3', '3', '0', 'Alignement', 'Confirmer'],
        ['Procédures', '5', '5', '0', 'Alignement', 'Confirmer'],
        ['Objectif 1', '4', '4', '0', 'Alignement', 'Confirmer'],
        ['Objectif 2', '4', '3', '+1', "Légère surévaluation : 4/4 inventaires faits, mais écart T4 de 2,6 %", 'Vérifier l\'exemple'],
        ['Objectif 3', '3', '4', '−1', 'Sous-évaluation : reconnaissance à exprimer', 'Dire clairement ce qui est reconnu'],
      ],
    },
    result: "Fait quand : vous avez la liste hiérarchisée de ce qui sera discuté (1 point central, 2 vérifications, 1 reconnaissance).",
    pitfall: "Utiliser l'écart comme base de négociation (« coupons la poire en deux ») : la note retenue sera calculée par la grille, jamais négociée à la moyenne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Contrôler les biais avant de figer les notes',
    intro: "Lundi 18 janvier, le superviseur et vous relisez les notes avant que l'entretien ne les rende visibles. Cinq questions, dix minutes.",
    steps: [
      {
        title: 'Posez les cinq questions',
        actions: [
          "Récence : les exemples de chaque ligne sont-ils répartis sur plusieurs trimestres ?",
          "Halo : une qualité marquante a-t-elle tiré plusieurs notes vers le haut ?",
          "Complaisance : une note a-t-elle été remontée sans exemple pour éviter un conflit ?",
          "Sévérité : chaque note correspond-elle au repère de l'échelle ?",
          "Similarité : un tiers retrouverait-il la même note à partir de la preuve seule ?",
        ],
      },
      {
        title: 'Corrigez ou complétez',
        actions: [
          "Si un biais est identifié, ajoutez un exemple d'un autre trimestre ou revoyez la note.",
          "Notez dans votre dossier la date du contrôle et le résultat.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — contrôle de la ligne « Respect des délais »',
      lines: [
        "Exemples initiaux : rapports en retard en août, octobre et la commande T3 — 3 exemples sur 3 au second semestre : biais de récence possible.",
        "Ajout de deux exemples du premier semestre : rapports en retard en mars et mai.",
        "Les 5 retards sont répartis sur 3 trimestres : la note 3 est confirmée, sans changement.",
      ],
    },
    result: "Fait quand : au moins un exemple par ligne sort du dernier trimestre et aucune note n'a été modifiée sans preuve nouvelle.",
    tip: "Faites relire anonymement vos deux notes les plus extrêmes (2 et 5) par le HR Manager : si elles ne se défendent pas à froid, elles ne tiendront pas en entretien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Vérifier les formules, la note retenue et la classification',
    intro: "Le template calcule seul, mais vous devez comprendre ce qu'il calcule pour repérer une erreur de saisie. Entrée : la grille maître avec D et E remplies.",
    steps: [
      {
        title: 'Comprenez les formules',
        actions: [
          "Colonne F (note retenue) : D × 0,3 + E × 0,7, le 30/70 est écrit dans la formule.",
          "Colonne G (score pondéré) : C × F. Total G19 = somme de G11:G18 ; C19 = somme des poids.",
          "E21 : « Exceptionnel » dès 4,5 ; « Dépasse les attentes » dès 3,5 ; « Conforme aux attentes » dès 2,5 ; « À améliorer » dès 1,5 ; sinon « Insuffisant ».",
        ],
      },
      {
        title: 'Contrôlez à la main',
        actions: [
          "Recalculez deux lignes à la main, dont la plus basse.",
          "Vérifiez qu'aucune cellule de D11:E18 n'est vide : une cellule vide compte pour 0 et fausse F, G et le total.",
          "Comparez votre total manuel à G19 (écart toléré : 0,01).",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Poids', 'Auto', 'Sup.', 'Note retenue', 'Score pondéré'],
      rows: [
        ['Qualité et fiabilité', '15 %', '4', '4', '4,00', '0,60'],
        ['Respect des délais', '15 %', '3', '3', '3,00', '0,45'],
        ['Leadership et gestion d\'équipe', '15 %', '4', '2', '2,60', '0,39'],
        ['Communication', '10 %', '3', '3', '3,00', '0,30'],
        ['Procédures et principes', '10 %', '5', '5', '5,00', '0,50'],
        ['Objectif 1', '15 %', '4', '4', '4,00', '0,60'],
        ['Objectif 2', '10 %', '4', '3', '3,30', '0,33'],
        ['Objectif 3', '10 %', '3', '4', '3,70', '0,37'],
        ['TOTAL', '100 %', '', '', '', '3,54'],
      ],
    },
    result: "Fait quand : G19 = 3,54, C19 = 100 % et E21 affiche « Dépasse les attentes ». Le score est à 0,04 du seuil de 3,5 : ne retouchez aucune note pour le franchir ou l'éviter.",
    pitfall: "Corriger un chiffre pour que la classification « soit plus juste » : si le score est à la limite, expliquez-le en entretien, ne l'ajustez pas.",
  },

  // ─── Procédure 3 — Entretien ───────────────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 3 — Conduire l'entretien annuel en trois temps",
    body: "Source : un entretien annuel expédié en 10 minutes n'est pas un entretien. Prévoyez au minimum 45 minutes à 1 heure, structurées en trois temps : revue des résultats (20-25 min), construction du PDI (15-20 min), objectifs de la période suivante (10-15 min). Le cas fil rouge ajoute 5 minutes d'ouverture et 10 minutes de validation, soit 75 minutes.",
    bullets: [
      "Étape 1 — Préparer le dossier, la salle et le plan minuté.",
      "Étape 2 — Ouvrir l'entretien et poser le cadre (5 min).",
      "Étape 3 — Temps 1 : revue des résultats ligne par ligne (25 min).",
      "Étape 4 — Temps 2 : construire le PDI avec l'employé (20 min).",
      "Étape 5 — Temps 3 : fixer 2 à 3 objectifs SMART (15 min).",
      "Étape 6 — Faire valider la note globale et le PDI, consigner un désaccord, signer (10 min).",
    ],
    result: "Livrable 3 : le plan minuté et le compte rendu signé de l'entretien du 21 janvier 2027.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Préparer le dossier, la salle et le plan minuté',
    intro: "La veille de l'entretien (mercredi 20 janvier), vous réunissez tout ce dont vous aurez besoin. Entrées : grille maître complétée, tableau des écarts, modèle de PDI.",
    steps: [
      {
        title: 'Préparez les supports',
        actions: [
          "Imprimez deux exemplaires de la grille maître (notes superviseur et employée visibles) et une copie du tableau des écarts pour vous.",
          "Ouvrez la grille et le modèle de PDI sur votre ordinateur, prêts à être projetés ou partagés à l'écran.",
          "Préparez les preuves des 3 lignes à discuter (plaintes, entretien de sortie, état de stock).",
        ],
      },
      {
        title: 'Préparez la salle et les rôles',
        actions: [
          "Réservez une salle fermée, sans passage, téléphones en silencieux.",
          "Répartissez les rôles : le Dr Kitenge conduit le Temps 1, vous gardez le temps et remplissez les documents.",
        ],
      },
    ],
    table: {
      columns: ['Heure', 'Durée', 'Temps', 'Support'],
      rows: [
        ['09 h 00', '5 min', 'Ouverture et cadre', 'Aucun'],
        ['09 h 05', '25 min', 'Temps 1 — Revue des résultats', 'Grille (onglet Evaluation annuelle)'],
        ['09 h 30', '20 min', 'Temps 2 — Construction du PDI', 'Modèle PDI, Partie A, sections 1 à 3'],
        ['09 h 50', '15 min', 'Temps 3 — Objectifs de la période suivante', 'Modèle PDI, section 4'],
        ['10 h 05', '10 min', 'Validation, désaccord, signatures', 'Grille (G19, E21), PDI'],
        ['10 h 15', '—', 'Fin', '—'],
      ],
    },
    result: "Fait quand : les supports sont imprimés, la salle est réservée et le plan minuté a été lu par le superviseur.",
    tip: "Gardez dix minutes de marge après l'entretien dans l'agenda du superviseur : un entretien qui déborde ne doit pas être coupé par le rendez-vous suivant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: "Ouvrir l'entretien et poser le cadre (5 minutes)",
    intro: "Les cinq premières minutes décident du climat. L'employé doit comprendre ce qui va se passer, que chaque note a un exemple et que son désaccord sera écrit.",
    steps: [
      {
        title: 'Posez le cadre',
        actions: [
          "Remerciez l'employée pour son auto-évaluation et rappelez la durée et les trois temps.",
          "Annoncez les trois règles : chaque note a un exemple, un désaccord est autorisé et sera noté, le contenu reste confidentiel.",
          "Posez une question ouverte et laissez l'employée parler en premier au moins une minute.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — formulations du Dr Kitenge',
      lines: [
        "« Merci pour votre auto-évaluation, elle est précise. Nous avons 75 minutes : d'abord vos résultats, ensuite votre plan de développement, enfin vos objectifs 2027. »",
        "« Trois règles : chaque note repose sur un exemple daté ; vous pouvez ne pas être d'accord, et nous l'écrirons ; ce qui se dit ici reste entre nous trois. »",
        "« Avant de regarder les notes : comment résumez-vous votre année en deux ou trois phrases ? »",
      ],
    },
    result: "Fait quand : l'employée a parlé au moins une minute sans interruption et a compris les trois règles.",
    pitfall: "Commencer par les mauvaises nouvelles ou par un long monologue du superviseur : l'employée passe l'entretien sur la défensive.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Temps 1 — Revue des résultats ligne par ligne (25 minutes)',
    intro: "Source : parcourir la grille compétence par compétence et objectif par objectif, comparer auto-évaluation et évaluation du superviseur, discuter chaque écart significatif avec les exemples préparés.",
    steps: [
      {
        title: 'Parcourez les lignes dans l\'ordre de la grille',
        actions: [
          "Pour chaque ligne, faites énoncer d'abord la note et l'exemple de l'employée, puis ceux du superviseur.",
          "Confirmez en une minute les lignes sans écart ; réservez 8 minutes à l'écart de 2 points.",
          "Appliquez le modèle situation — comportement — impact : le fait daté, ce qui a été observé, la conséquence.",
        ],
      },
      {
        title: 'Traitez une contestation',
        actions: [
          "Demandez à l'employée quel fait ou quel document nouveau elle apporte.",
          "Modifiez une note uniquement pour un fait nouveau vérifiable, puis recalculez ; sinon maintenez-la et expliquez pourquoi.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — ligne « Leadership et gestion d\'équipe » (4 contre 2)',
      lines: [
        "Dr Kitenge : « Le 12 mars et le 28 août, deux aides-pharmaciens m'ont écrit pour des consignes contradictoires dans la même journée. »",
        "« Le 30 octobre, l'une d'elles a démissionné ; lors de son entretien de sortie, elle a cité le climat d'équipe. »",
        "« Je ne dis pas que c'était voulu. Je dis que ce sont trois faits, et qu'ils justifient un 2. Comment les voyez-vous ? »",
        "B. Kahindo reconnaît le 12 mars, conteste le lien entre la démission et son management, sans fait nouveau.",
        "Décision : la note reste 2 ; la contestation est notée dans H pour l'étape 6.",
      ],
    },
    result: "Fait quand : les 8 lignes ont été relues, l'écart de 2 points a été traité avec preuves et chaque modification de note est liée à un fait nouveau.",
    pitfall: "Baisser ou monter une note pour mettre fin à la discussion : la note perd son lien avec les faits et le PDI qui en découle n'a plus de fondement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: "Temps 2 — Construire le PDI avec l'employé (20 minutes)",
    intro: "Source : pour chaque compétence sous le seuil attendu, définir ensemble une action précise, une modalité (formation interne, formation externe, mentorat, coaching, apprentissage sur le poste) et une échéance datée, en remplissant en direct les sections 2 et 3 du modèle de PDI.",
    steps: [
      {
        title: 'Listez les écarts à traiter',
        actions: [
          "Reprenez les lignes dont la note retenue est inférieure à 3 (ici : leadership, 2,60).",
          "Ajoutez les écarts liés au poste clé (ici : savoir-faire non documenté).",
        ],
      },
      {
        title: 'Co-construisez chaque action',
        actions: [
          "Demandez à l'employée de proposer d'abord : « Qu'est-ce qui vous aiderait ? »",
          "Complétez avec une modalité par niveau du 70-20-10, puis fixez une date de calendrier précise.",
          "Saisissez l'action en direct dans le modèle de PDI (la Procédure 4 détaille chaque champ).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — ce qui est décidé en 20 minutes',
      lines: [
        "B. Kahindo propose d'abord : « Une réunion d'équipe chaque semaine, je n'en tiens plus depuis avril. » → action 3, dès le 25/01.",
        "Le Dr Kitenge ajoute un mentorat mensuel (6 séances) et propose la formation externe du 24 au 26 mars.",
        "B. Kahindo soulève un risque : « Si je pars, personne ne sait faire mes commandes. » → action 4 : documenter 6 procédures.",
        "Résultat : 4 actions, chacune avec modalité, date et responsable.",
      ],
    },
    result: "Fait quand : chaque écart a au moins une action datée, et l'employée reconnaît au moins une action comme sa propre proposition.",
    tip: "Limitez-vous à 3 ou 4 actions : un PDI de 10 actions n'est suivi sur aucune.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Temps 3 — Fixer 2 à 3 objectifs SMART (15 minutes)',
    intro: "Source : formuler 2 à 3 objectifs SMART pour la période suivante, qui alimenteront directement la grille de l'année prochaine. Entrée : les priorités 2027 de la base, que le superviseur annonce.",
    steps: [
      {
        title: 'Partez des priorités de la base',
        actions: [
          "Faites annoncer par le superviseur les 2 ou 3 priorités de la base pour 2027.",
          "Demandez à l'employée ce qu'elle propose comme objectifs sur ces priorités.",
        ],
      },
      {
        title: 'Testez chaque objectif',
        actions: [
          "Appliquez les 5 questions SMART : spécifique, mesurable, atteignable, réaliste, daté.",
          "Réécrivez séance tenante ceux qui échouent à une question.",
          "Notez-les dans la section 4 du PDI et proposez un poids provisoire pour la grille 2027.",
        ],
      },
    ],
    table: {
      columns: ['Objectif 2027 (résumé)', 'S', 'M', 'A', 'R', 'T'],
      rows: [
        ['1. Rupture de stock des 24 traceurs < 5 % chaque mois, < 3 % en moyenne au 2e semestre', 'Oui', 'État de stock du 1er du mois', 'Atteint à 4,2 % en 2026', 'Oui', '31/12/2027'],
        ['2. 6 fiches de procédure validées et commande de juillet passée par F. Amani sous supervision', 'Oui', '6 fiches, 1 commande', 'Oui', 'Oui', '30/06/2027'],
        ['3. Rapport de consommation remis avant le 5 du mois, au moins 11 fois sur 12', 'Oui', 'Date de remise', 'Oui, 7 retards en 2026', 'Oui', '31/12/2027'],
      ],
    },
    result: "Fait quand : 3 objectifs passent les 5 questions et chacun sera la ligne d'objectif de la grille 2027.",
    pitfall: "Fixer des objectifs inatteignables « pour tirer vers le haut » : l'employé les abandonne en mars et le suivi à 6 mois devient une audience de justification.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Faire valider la note globale et le PDI, consigner un désaccord, signer',
    intro: "Source : montrez à l'employé la note globale calculée automatiquement et la classification qui en découle. Un désaccord persistant doit être noté explicitement, jamais gommé pour finir sur une note positive.",
    steps: [
      {
        title: 'Montrez le résultat',
        actions: [
          "Affichez G19 (3,54) et E21 (« Dépasse les attentes ») à l'écran.",
          "Montrez la progression de l'onglet Historique et tendance (3,0 puis 3,3 puis 3,54).",
          "Demandez : « Reconnaissez-vous cette évaluation ? Ce PDI ? »",
        ],
      },
      {
        title: 'Consignez le désaccord et signez',
        actions: [
          "En cas de désaccord persistant, écrivez-le dans le commentaire H de la ligne concernée, avec la position de chacun.",
          "Proposez à l'employée un délai de 5 jours ouvrés pour ajouter un commentaire écrit.",
          "Faites signer la grille et le PDI par l'employée et le superviseur, puis contresignez en tant que RH.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — désaccord consigné en H13 (ligne Leadership)',
      lines: [
        "Emp. : en désaccord avec le lien établi entre la démission du 30/10 et mon management ; j'accepte les consignes contradictoires du 12/03.",
        "Sup. : note maintenue à 2 ; trois faits datés cités ; point repris au suivi du 21/07/2027.",
        "Signatures : B. Kahindo, Dr M. Kitenge, N. Mbusa — jeudi 21/01/2027, 10 h 12.",
      ],
    },
    result: "Fait quand : la grille et le PDI sont signés, le désaccord est lisible dans le fichier et la date de suivi est annoncée. C'est votre Livrable 3.",
    pitfall: "Étouffer un désaccord documenté aujourd'hui pour finir de bonne humeur : vous le retrouverez amplifié dans un litige de fin de contrat.",
  },

  // ─── Procédure 4 — PDI ─────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 4 — Rédiger le PDI : la Partie A du modèle Word, champ par champ',
    body: "Le modèle plan-developpement-individuel-succession.docx s'ouvre sur un bandeau « PLAN DE DÉVELOPPEMENT INDIVIDUEL & PLAN DE SUCCESSION » et une phrase d'objectif. La Partie A contient quatre sections. Vous les remplissez en direct pendant les Temps 2 et 3 de l'entretien, projetées à l'écran, puis vous finalisez le jour même.",
    bullets: [
      "Étape 1 — Section 1 : informations générales (6 champs).",
      "Étape 2 — Section 2 : compétences à développer, issues de l'évaluation.",
      "Étape 3 — Section 3 : actions de développement et échéancier.",
      "Étape 4 — Section 4 : objectifs professionnels pour la période suivante.",
      "Étape 5 — Contrôler la qualité et diffuser le PDI.",
    ],
    result: "Livrable 4 : le PDI de B. Kahindo (Partie A) complet, enregistré sous un nom de fichier daté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Section 1 — Informations générales',
    intro: "Le tableau de la section 1 compte trois lignes de deux cellules : Nom de l'employé et Poste actuel ; Évaluateur / HR Manager et Date de l'entretien ; Mission / Base et Période couverte par le PDI.",
    steps: [
      {
        title: 'Créez la copie',
        actions: [
          "Copiez le modèle et enregistrez-le sous « PDI_Kahindo_2027.docx » dans le dossier de l'agent.",
          "Ne modifiez ni le bandeau, ni les titres de sections.",
        ],
      },
      {
        title: 'Remplissez les six champs',
        actions: [
          "Saisissez chaque information dans la cellule portant son libellé.",
          "Pour la période couverte, indiquez des dates précises et non « l'année prochaine ».",
        ],
      },
    ],
    table: {
      columns: ['Champ', 'Contenu saisi'],
      rows: [
        ["Nom de l'employé", 'B. Kahindo'],
        ['Poste actuel', 'Responsable Pharmacie'],
        ['Évaluateur / HR Manager', 'Dr M. Kitenge (superviseur direct) et N. Mbusa (HR Officer)'],
        ["Date de l'entretien", 'Jeudi 21 janvier 2027'],
        ['Mission / Base', 'RDC — Base de Goma'],
        ['Période couverte par le PDI', 'Du 1er février au 31 décembre 2027'],
      ],
    },
    result: "Fait quand : les six cellules sont remplies et la période se termine à une date qui précède le prochain entretien.",
    tip: "Le PDI porte la même date d'entretien que la grille (B6) : cohérence entre les deux documents, vérifiable par un auditeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Section 2 — Compétences à développer (issues de l\'évaluation)',
    intro: "Le tableau a deux colonnes : « Compétence / Écart identifié » et « Priorité », avec quatre lignes vides. Chaque ligne doit pouvoir être reliée à une ligne de la grille ou au plan de succession.",
    steps: [
      {
        title: 'Transformez les écarts en lignes',
        actions: [
          "Reprenez les lignes de la grille dont la note retenue est inférieure à 3.",
          "Rédigez l'écart : compétence, note retenue, faits datés qui l'expliquent.",
          "Ajoutez, si le poste est clé, les savoir-faire concentrés sur une seule personne.",
        ],
      },
      {
        title: 'Attribuez la priorité',
        actions: [
          "Haute : note retenue sous 3, ou risque opérationnel (poste clé).",
          "Moyenne : au seuil de 3 mais avec une tendance négative. Basse : souhait de carrière.",
          "Laissez vides les lignes inutilisées : n'inventez pas un écart pour remplir.",
        ],
      },
    ],
    table: {
      columns: ['Compétence / Écart identifié', 'Priorité'],
      rows: [
        ["Leadership et gestion d'équipe — note retenue 2,6 (auto 4, sup. 2) : plaintes écrites des 12/03 et 28/08/2026, démission du 30/10/2026 citant le climat d'équipe", 'Haute'],
        ["Documentation du savoir-faire du poste clé — 6 procédures pharmacie (réception, chaîne du froid, dispensation, inventaire, produits périmés, commande urgente) connues d'une seule personne", 'Haute'],
        ['(ligne laissée vide)', ''],
        ['(ligne laissée vide)', ''],
      ],
    },
    result: "Fait quand : chaque ligne renvoie à une note de la grille ou au plan de succession, et aucune ligne ne porte un souhait générique.",
    pitfall: "Écrire « se former au leadership » : sans le fait qui l'explique, l'action de la section 3 sera arbitraire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Section 3 — Actions de développement et échéancier',
    intro: "Le tableau a quatre colonnes : « Action de développement », « Modalité », « Échéance » et « Statut », avec quatre lignes vides. Modalités du guide source : formation interne, formation externe, mentorat, coaching, apprentissage sur le poste.",
    steps: [
      {
        title: 'Rédigez chaque action',
        actions: [
          "Formulez l'action avec un verbe, un contenu, une fréquence ou une durée.",
          "Choisissez la modalité parmi les cinq du guide source.",
          "Saisissez une échéance de calendrier (jour, mois, année), jamais « dans l'année ».",
        ],
      },
      {
        title: 'Fixez un vocabulaire de statut',
        actions: [
          "Utilisez toujours les mêmes statuts : À démarrer, En cours, Réalisée, Reportée.",
          "Au démarrage, tous les statuts sont « À démarrer ».",
        ],
      },
    ],
    table: {
      columns: ['Action de développement', 'Modalité', 'Échéance', 'Statut'],
      rows: [
        ["Formation « Encadrer une petite équipe de terrain », session groupée à Goma, 3 jours", 'Formation externe', '26/03/2027', 'À démarrer'],
        ["Mentorat par le Dr Kitenge : 6 séances d'une heure, une toutes les 4 semaines, thème consignes claires et gestion d'un désaccord", 'Mentorat', '07/07/2027 (6e séance)', 'À démarrer'],
        ["Réunion d'équipe pharmacie de 20 minutes chaque lundi à 8 h 00, compte rendu écrit de 5 lignes", 'Apprentissage sur le poste', 'Dès le 25/01/2027', 'À démarrer'],
        ["Rédiger les 6 fiches de procédure et les faire valider par le Coordinateur Médical (F. Amani relit)", 'Apprentissage sur le poste', '30/06/2027', 'À démarrer'],
      ],
    },
    result: "Fait quand : chaque action a une modalité, une date de calendrier et un statut, et chaque écart de la section 2 est couvert par au moins une action.",
    tip: "Avant de signer, vérifiez le coût et le temps : 300 USD pour la formation (budget à confirmer avec R. Ilunga) et 3 jours d'absence validés par le Base Manager.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Section 4 — Objectifs professionnels pour la période suivante',
    intro: "La section 4 est un bloc de texte à trois paragraphes : « Objectif 1 (spécifique, mesurable, atteignable, réaliste, temporellement défini) », « Objectif 2 » et « Objectif 3 ». Ces objectifs deviendront les lignes d'objectif de la grille 2027.",
    steps: [
      {
        title: 'Rédigez un objectif par paragraphe',
        actions: [
          "Commencez par un verbe d'action et indiquez l'indicateur, la cible et la source de mesure.",
          "Terminez par une date de calendrier.",
          "Évitez deux indicateurs dans un même objectif : scindez-le.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 4 remplie',
      lines: [
        "Objectif 1 : Maintenir le taux de rupture des 24 médicaments traceurs sous 5 % chaque mois et le ramener à moins de 3 % en moyenne de juillet à décembre 2027, mesuré par l'état de stock du 1er du mois validé par le Coordinateur Médical.",
        "Objectif 2 : Faire valider 6 fiches de procédure par le Coordinateur Médical avant le 30/06/2027, et faire passer la commande de juillet 2027 par F. Amani sous la supervision de B. Kahindo.",
        "Objectif 3 : Remettre le rapport mensuel de consommation avant le 5 du mois suivant au moins 11 fois sur 12 en 2027.",
      ],
    },
    result: "Fait quand : chaque objectif a un indicateur, une cible, une source et une date, et le superviseur peut dire le 31/12/2027 s'il est atteint.",
    pitfall: "Écrire « améliorer… » sans cible : c'est un souhait, pas un objectif. Réécrivez avant la signature.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Contrôler la qualité du PDI et le diffuser',
    intro: "Le PDI est signé le 21 janvier, mais il n'est pas fini : il doit passer un contrôle avant d'être envoyé à l'employée (dans les 48 heures).",
    steps: [
      {
        title: 'Contrôlez les six points',
        actions: [
          "Chaque ligne de la section 2 renvoie à un fait de la grille.",
          "Chaque action de la section 3 a une modalité, une date de calendrier et un statut.",
          "Les actions sont 4 au plus, dont au moins une en apprentissage sur le poste.",
          "Le coût et le temps d'absence sont validés (budget Finance, accord du Base Manager).",
          "Les objectifs de la section 4 passent les cinq questions SMART.",
          "L'employée a donné son accord et sa signature figure.",
        ],
      },
      {
        title: 'Diffusez et archivez',
        actions: [
          "Enregistrez une copie contenant uniquement la Partie A et envoyez-la à l'employée sous 48 heures.",
          "Archivez la version signée dans son dossier individuel.",
        ],
      },
    ],
    result: "Fait quand : les six contrôles sont cochés, la Partie A est envoyée le vendredi 22 janvier et le PDI figure dans le dossier individuel.",
    pitfall: "Garder le PDI « pour finir plus tard » : au-delà de quelques jours, le contenu de l'entretien s'efface et le document devient un résumé de mémoire.",
  },

  // ─── Procédure 5 — Succession ──────────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 5 — Construire le plan de succession : la Partie B du modèle Word',
    body: "Source : avant de refermer le dossier, posez-vous la question indépendamment du niveau de performance : ce poste est-il un poste clé ? Si oui, complétez la Partie B en identifiant au moins un successeur potentiel avec un niveau de préparation honnête. C'est l'étape que la majorité des HR Managers sautent par manque de temps, et celle qui évite une crise de continuité.",
    bullets: [
      "Étape 1 — Appliquer le test du poste clé.",
      "Étape 2 — Section 5 : renseigner le poste clé.",
      "Étape 3 — Section 6 : identifier les successeurs potentiels.",
      "Étape 4 — Section 7 : plan d'action de préparation, risques et prochaine revue.",
      "Étape 5 — Faire valider, signer et protéger le plan.",
    ],
    result: "Livrable 5 : la Partie B signée, classée en accès restreint.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Appliquer le test du poste clé',
    intro: "Le test se fait pour chaque poste évalué, bon ou mauvais titulaire. Il tient en quatre questions, avec réponse Oui ou Non. C'est un repère de terrain, à adapter à votre mission.",
    steps: [
      {
        title: 'Posez les quatre questions',
        actions: [
          "Q1 : une vacance de 4 semaines arrêterait-elle ou dégraderait-elle gravement une activité vitale (soins, paie, approvisionnement, sécurité) ?",
          "Q2 : le recrutement d'un remplaçant prendrait-il plus de 8 semaines ?",
          "Q3 : le savoir-faire est-il concentré sur une personne et non documenté ?",
          "Q4 : un intérim interne est-il impossible sans formation ou habilitation préalable ?",
        ],
      },
      {
        title: 'Déduisez la criticité',
        actions: [
          "4 ou 3 Oui : criticité Élevé. 2 Oui : Moyen. 0 ou 1 Oui : Faible.",
          "Un poste Élevé déclenche la Partie B ; un poste Moyen est suivi en revue annuelle.",
        ],
      },
    ],
    table: {
      columns: ['Poste (Goma)', 'Q1', 'Q2', 'Q3', 'Q4', 'Criticité'],
      rows: [
        ['Responsable Pharmacie (B. Kahindo)', 'Oui', 'Oui', 'Oui', 'Oui', 'Élevé'],
        ['Payroll Officer (C. Bahati)', 'Oui', 'Non', 'Oui', 'Non', 'Moyen'],
        ['Assistant RH (P. Sifa)', 'Non', 'Non', 'Non', 'Non', 'Faible'],
      ],
    },
    result: "Fait quand : chaque poste évalué a une criticité justifiée et la liste des postes clés de la base est tenue à jour.",
    pitfall: "Écarter un poste du test parce que son titulaire est « moyen » : un poste est clé par ses conséquences, pas par la performance de la personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Section 5 — Renseigner le poste clé concerné',
    intro: "Le tableau de la section 5 compte deux lignes de deux cellules : « Intitulé du poste » et « Titulaire actuel » ; « Niveau de criticité (Élevé / Moyen / Faible) » et « Raison de l'inclusion dans le plan de succession ».",
    steps: [
      {
        title: 'Saisissez les quatre champs',
        actions: [
          "Intitulé : l'intitulé exact de la fiche de poste. Titulaire : nom et fonction.",
          "Criticité : choisissez l'un des trois niveaux, sans autre formulation.",
          "Raison : reprenez les réponses Oui du test, avec des faits chiffrés.",
        ],
      },
    ],
    table: {
      columns: ['Champ', 'Contenu saisi'],
      rows: [
        ['Intitulé du poste', 'Responsable Pharmacie — Base de Goma'],
        ['Titulaire actuel', 'B. Kahindo'],
        ['Niveau de criticité', 'Élevé'],
        ["Raison de l'inclusion", "Seule personne à tenir les commandes trimestrielles de 24 médicaments traceurs, le registre stupéfiants et la chaîne du froid ; recrutement d'un remplaçant estimé à 8-12 semaines ; 6 procédures non documentées ; profil très recherché par les agences."],
      ],
    },
    result: "Fait quand : la raison contient au moins un fait chiffré et correspond aux réponses Oui du test.",
    tip: "Ne vous contentez pas de « poste stratégique » : un lecteur qui ne connaît pas la base doit comprendre en 10 secondes pourquoi sa vacance fait mal.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Section 6 — Identifier les successeurs potentiels',
    intro: "Le tableau de la section 6 a quatre colonnes : « Nom du successeur potentiel », « Poste actuel », « Niveau de préparation » et « Développement nécessaire », avec trois lignes. Le modèle précise les niveaux : Prêt maintenant, Prêt dans 6-12 mois, Prêt dans 12-24 mois, À développer sur le long terme.",
    steps: [
      {
        title: 'Repérez les candidats',
        actions: [
          "Parcourez l'onglet Historique et tendance de chaque candidat et les évaluations de l'année.",
          "Cherchez qui a déjà tenu une partie du poste (intérim, remplacements de congés).",
        ],
      },
      {
        title: 'Évaluez honnêtement la préparation',
        actions: [
          "Appliquez le test des trois preuves : a tenu le poste en intérim, possède la qualification, évaluation d'au moins 3 sur les compétences du poste.",
          "Écrivez le niveau le moins flatteur que les preuves permettent.",
          "Si personne n'est « prêt maintenant », écrivez-le : c'est une information utile.",
        ],
      },
    ],
    table: {
      columns: ['Nom du successeur potentiel', 'Poste actuel', 'Niveau de préparation', 'Développement nécessaire'],
      rows: [
        ['F. Amani', 'Assistant Pharmacie, 5 ans d\'ancienneté', 'Prêt dans 6-12 mois', "A tenu le poste 2 semaines en août 2026 (évaluation 2026 : 3,8). Manque : validation pour les produits contrôlés, relation avec la centrale d'achat, commande trimestrielle en autonomie"],
        ['L. Neema', 'Aide-pharmacienne, 22 mois d\'ancienneté', 'Prêt dans 12-24 mois', "Aucun intérim tenu, évaluation 2026 : 3,1. Manque : gestion de stock autonome, chaîne du froid, encadrement"],
        ['(ligne laissée vide)', '', '', ''],
      ],
    },
    result: "Fait quand : au moins un successeur est nommé, chaque niveau de préparation est justifié par les trois preuves et un manque précis est écrit.",
    pitfall: "Écrire « Prêt maintenant » par optimisme de façade : le jour du départ, le plan s'effondre. « Prêt dans 6-12 mois » est une réponse respectable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: "Section 7 — Plan d'action de préparation, risques et prochaine revue",
    intro: "La section 7 contient trois blocs de texte : « Actions de préparation prioritaires pour le(s) successeur(s) identifié(s) », « Risques si le poste devait se libérer sans préavis » et « Date de la prochaine revue de ce plan de succession ».",
    steps: [
      {
        title: 'Rédigez les trois blocs',
        actions: [
          "Actions : une action datée par successeur, issue du « développement nécessaire » de la section 6.",
          "Risques : conséquences concrètes en jours ou en semaines, pas des formules générales.",
          "Date de revue : une date de calendrier, alignée sur le point de suivi à 6 mois.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 7 remplie',
      lines: [
        "Actions : F. Amani passe la commande de juillet 2027 sous supervision (échéance 31/07/2027) et relit les 6 fiches de procédure (30/06/2027). L. Neema suit la formation de gestion de stock interne au 2e trimestre 2027.",
        "Risques : rupture de plusieurs des 24 traceurs dès la 3e semaine faute de commande ; chaîne du froid non maîtrisée pendant l'intérim ; remplacement estimé à 8-12 semaines ; appui d'un pharmacien d'une autre base du réseau de 3 semaines au plus.",
        "Prochaine revue : mercredi 21 juillet 2027, le jour du point de suivi du PDI.",
      ],
    },
    result: "Fait quand : chaque successeur a une action datée, les risques sont chiffrés en semaines et la revue figure dans l'agenda.",
    tip: "Les 6 fiches de procédure de B. Kahindo servent à la fois le PDI (action 4) et le plan de succession : un seul travail, deux protections.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Faire valider, signer et protéger le plan',
    intro: "Les deux dernières lignes du modèle sont « Rédigé par (nom, fonction) » avec une date, et « Validé par (Chef de Mission / superviseur direct) » avec une date. Un plan non validé n'engage personne.",
    steps: [
      {
        title: 'Faites valider',
        actions: [
          "Remplissez « Rédigé par » : votre nom, votre fonction et la date.",
          "Envoyez le plan au Head of Mission et au superviseur direct pour validation.",
          "Enregistrez la date de validation dans « Validé par ».",
        ],
      },
      {
        title: 'Protégez-le',
        actions: [
          "Classez la Partie B dans un dossier à accès restreint, hors dossier individuel de l'employée.",
          "Ne transmettez jamais la Partie B à l'employée évaluée ni aux successeurs.",
          "Parlez à chaque successeur sans promesse : « vous êtes identifié comme une relève possible ; ce n'est pas une promotion ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — signatures et conversation',
      lines: [
        "Rédigé par : N. Mbusa, HR Officer — 22/01/2027.",
        "Validé par : H. Mwamba, Head of Mission — 27/01/2027 ; Dr M. Kitenge, superviseur direct, a approuvé le 22/01.",
        "À F. Amani, le 29/01 : « Vous avez bien tenu la pharmacie en août. Nous voulons vous préparer sur 6 à 12 mois à une responsabilité plus large. Ce n'est pas une promesse de poste. »",
      ],
    },
    result: "Fait quand : le plan est signé, rangé en accès restreint, et chaque successeur a été informé sans promesse. C'est votre Livrable 5.",
    pitfall: "Laisser un successeur comprendre qu'il est promis au poste : à son départ non annoncé, vous aurez un conflit en plus d'une vacance.",
  },

  // ─── Procédure 6 — Suivi ───────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 6 — Suivre le PDI et la tendance dans le temps',
    body: "Source : placez dès maintenant, dans l'agenda partagé, un point de suivi à 6 mois ; un PDI relu une fois par an n'a jamais influencé le comportement de l'employé entre-temps. Cette procédure couvre le suivi à 6 mois, l'onglet Historique et tendance et la clôture du cycle.",
    bullets: [
      "Étape 1 — Programmer le point de suivi à 6 mois dans la foulée de l'entretien.",
      "Étape 2 — Préparer et conduire le point de suivi.",
      "Étape 3 — Alimenter l'onglet « Historique et tendance ».",
      "Étape 4 — Clôturer le cycle : archiver et préparer la grille suivante.",
    ],
    result: "Livrable 6 : le point du 21 juillet 2027 programmé et l'historique de B. Kahindo à jour.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Programmer le point de suivi à 6 mois dans la foulée',
    intro: "Le jour de l'entretien, avant de quitter la salle, posez l'événement dans l'agenda partagé. Reporté à « plus tard », il ne sera jamais posé.",
    steps: [
      {
        title: 'Créez l\'événement',
        actions: [
          "Créez l'événement « Point de suivi PDI + plan de succession — B. Kahindo » le mercredi 21 juillet 2027, 45 minutes.",
          "Invitez l'employée, le superviseur et vous-même.",
          "Dans la description, listez les 4 actions du PDI et les 3 objectifs.",
        ],
      },
      {
        title: 'Posez vos rappels',
        actions: [
          "Rappel à J-14 (7 juillet) : demander à chacun le statut de chaque action.",
          "Ajoutez un point de contrôle informel à 3 mois si une action est en risque.",
        ],
      },
    ],
    result: "Fait quand : l'événement du 21 juillet est accepté par les trois personnes avant le 22 janvier.",
    pitfall: "Attendre l'entretien suivant pour découvrir qu'aucune action n'a été engagée : un PDI sans point intermédiaire n'est qu'une case administrative.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Préparer et conduire le point de suivi (30 à 45 minutes)',
    intro: "Le point de suivi ne rouvre pas l'évaluation : il vérifie les actions et ajuste ce qui doit l'être. Exemple illustratif du point du 21 juillet 2027.",
    steps: [
      {
        title: 'Préparez',
        actions: [
          "Ouvrez la section 3 du PDI et listez les statuts attendus à cette date.",
          "Rassemblez les preuves (attestation de formation, comptes rendus de réunion, états de stock).",
        ],
      },
      {
        title: 'Conduisez et mettez à jour',
        actions: [
          "Pour chaque action : où en êtes-vous, qu'est-ce qui bloque, que décide-t-on ?",
          "Mettez à jour le statut et la date si une action glisse, avec la raison écrite.",
          "Revoyez le plan de succession : le niveau de préparation de F. Amani a-t-il évolué ?",
        ],
      },
    ],
    table: {
      columns: ['Action du PDI', 'Statut au 21/07/2027', 'Preuve / décision'],
      rows: [
        ['Formation encadrement (24-26/03)', 'Réalisée', "Attestation reçue, présence 3 jours sur 3"],
        ['Mentorat (6 séances)', 'Réalisée', '6 séances tenues, dernière le 07/07'],
        ['Réunion hebdomadaire du lundi', 'En cours', "20 réunions tenues sur 24 semaines, comptes rendus archivés"],
        ['Rédiger 6 fiches de procédure', 'Reportée', "4 fiches sur 6 validées au 30/06 ; nouvelle échéance 15/09/2027 pour les 2 restantes (chaîne du froid, commande urgente)"],
      ],
    },
    result: "Fait quand : chaque action a un statut à jour, chaque report a une nouvelle date et une raison, et le compte rendu est envoyé sous 48 heures.",
    tip: "Un report accepté une fois est normal ; deux fois, c'est un signal : traitez-le en point de suivi, pas en entretien annuel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: "Alimenter l'onglet « Historique et tendance »",
    intro: "Le second onglet trace le score global de l'employé sur plusieurs années. Ses colonnes sont : Année, Poste occupé, Score global pondéré (/5), Évaluation globale et Évolution vs année précédente. Il s'ouvre rempli avec un exemple à remplacer.",
    steps: [
      {
        title: "Remplacez les lignes d'historique",
        actions: [
          "Ligne 5 (première année) : saisissez l'année, le poste et le score réel. La colonne E reste « — ».",
          "Ligne 6 (année précédente) : saisissez l'année, le poste et le score réel.",
          "Les colonnes D (évaluation globale) et E (évolution) se calculent seules : ne les modifiez pas.",
        ],
      },
      {
        title: "Lisez la ligne de l'année en cours",
        actions: [
          "La ligne 7 se calcule seule à partir de l'onglet Evaluation annuelle : année (E5), poste et base (E4 et E6), score (G19), classification (E21).",
          "Lisez l'évolution : +0,30 puis +0,24 est une progression régulière.",
        ],
      },
    ],
    table: {
      columns: ['Année', 'Poste occupé', 'Score global pondéré (/5)', 'Évaluation globale', 'Évolution vs année précédente'],
      rows: [
        ['2024', 'Responsable Pharmacie, Base de Goma', '3,0', 'Conforme aux attentes', '—'],
        ['2025', 'Responsable Pharmacie, Base de Goma', '3,3', 'Conforme aux attentes', '+0,30'],
        ['2026 (calculée)', 'Responsable Pharmacie — RDC — Base de Goma', '3,54', 'Dépasse les attentes', '+0,24'],
      ],
    },
    result: "Fait quand : les lignes 5 et 6 contiennent les vrais scores, la ligne 7 affiche 3,54 et aucune formule n'a été modifiée.",
    pitfall: "Laisser les scores d'exemple (3,2 et 3,6) et les postes d'exemple : l'employée affiche une tendance qui n'est pas la sienne, et personne ne s'en aperçoit avant un audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Clôturer le cycle : archiver et préparer la grille suivante',
    intro: "Le cycle se termine par un classement et une préparation. Sans classement, l'an prochain, vous reconstituez tout ; sans préparation, la campagne suivante démarre de zéro.",
    steps: [
      {
        title: 'Archivez',
        actions: [
          "Enregistrez la grille signée en PDF et le PDI Partie A signé dans le dossier individuel.",
          "Rangez la Partie B en accès restreint.",
          "Avant de réutiliser le fichier pour l'année suivante, figez la ligne 7 de l'historique : copiez ses valeurs en « valeurs seules », puis copiez les formules sur la ligne 8.",
        ],
      },
      {
        title: 'Préparez la campagne suivante',
        actions: [
          "Reportez les 3 objectifs de la section 4 en A16:A18 de la grille 2027.",
          "Posez dans l'agenda les jalons de la campagne de janvier 2028.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — classement',
      lines: [
        "Dossier individuel B. Kahindo : Grille_Eval_2026_signee.pdf ; PDI_Kahindo_2027_PartieA_signe.pdf.",
        "Accès restreint (Head of Mission, HR Manager) : Succession_Pharmacie_Goma_2027-01.docx.",
        "Grille 2027 : A16, A17, A18 prérenseignés avec les 3 objectifs de la section 4.",
      ],
    },
    result: "Fait quand : trois classements sont faits, l'historique de l'année est figé et la campagne suivante est dans l'agenda. C'est votre Livrable 6.",
    pitfall: "Écraser la grille de l'année précédente : la ligne 7 de l'historique se recalcule et l'ancien score disparaît.",
  },

  // ─── Procédure 7 — Formations internes ─────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 7 — Gérer les formations internes et l\'accès aux ressources',
    body: "Une fois les 34 PDI signés (jusqu'au 12 février), vous disposez de la demande réelle de formation de la base. Cette procédure transforme 34 listes d'actions en un plan de formation 2027 arbitré, publié et évalué. Elle s'appuie sur un fichier de travail que vous créez : Plan_formation_2027 (non fourni dans le dossier 04-templates).",
    bullets: [
      "Étape 1 — Consolider les besoins issus des PDI.",
      "Étape 2 — Choisir la modalité et la ressource pour chaque thème.",
      "Étape 3 — Chiffrer, arbitrer avec la Finance et fixer les critères d'accès.",
      "Étape 4 — Publier le plan, inscrire les agents et planifier.",
      "Étape 5 — Évaluer la formation et boucler avec la prochaine évaluation.",
    ],
    result: "Livrable 7 (première partie) : le plan de formation 2027 de la base, arbitré, publié et assorti d'un registre de formation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Consolider les besoins issus des PDI',
    intro: "Le fichier de travail commence par un onglet « Besoins » alimenté à la main depuis la section 2 de chaque PDI. Il ne contient que des besoins issus d'écarts d'évaluation, pas des envies.",
    steps: [
      {
        title: 'Créez l\'onglet Besoins',
        actions: [
          "Créez Plan_formation_2027.xlsx avec les colonnes : Agent, Poste, Écart (section 2 du PDI), Priorité, Thème de formation.",
          "Saisissez une ligne par écart de chaque PDI, au fur et à mesure des entretiens.",
        ],
      },
      {
        title: 'Regroupez par thème',
        actions: [
          "Créez un tableau croisé (ou des NB.SI) : nombre d'agents par thème et plus haute priorité.",
          "Classez les thèmes par priorité puis par effectif.",
        ],
      },
    ],
    table: {
      columns: ['Thème', 'Agents', 'Priorité', 'Origine'],
      rows: [
        ['Encadrement de première ligne', '6', 'Haute', 'Écarts de leadership dont B. Kahindo'],
        ['Premiers secours (secouristes désignés)', '8', 'Obligatoire', 'Sécurité de la base'],
        ['Gestion de stock médical', '5', 'Moyenne', 'Succession pharmacie et inventaires'],
        ['Excel intermédiaire', '7', 'Moyenne', 'Rapports mensuels'],
        ['Anglais professionnel', '4', 'Moyenne', 'Reporting aux bailleurs'],
        ['Code de conduite et PSEA (rappel)', '34', 'Obligatoire', 'Tous les agents'],
      ],
    },
    result: "Fait quand : chaque besoin vient d'un PDI, les thèmes sont regroupés et le nombre d'agents par thème est connu.",
    pitfall: "Acheter une formation « parce qu'il y en a une » : sans écart d'évaluation derrière, vous dépensez sans effet mesurable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Choisir la modalité et la ressource pour chaque thème',
    intro: "Règle de terrain : interne d'abord, externe seulement si la compétence manque en interne ou si une certification est requise. Entrée : le tableau des thèmes.",
    steps: [
      {
        title: 'Cherchez d\'abord dans la base',
        actions: [
          "Identifiez qui maîtrise déjà le thème (ex. : B. Kahindo pour la gestion de stock, P. Sifa pour Excel).",
          "Listez les ressources gratuites : mentorat interne, observation d'un collègue, modules en ligne gratuits (par exemple OpenWHO pour les sujets de santé).",
        ],
      },
      {
        title: 'Choisissez la modalité',
        actions: [
          "Interne : session animée par un collègue, mentorat, observation sur le poste.",
          "Externe : groupée à Goma plutôt qu'individuelle, pour réduire le coût par agent.",
        ],
      },
    ],
    table: {
      columns: ['Thème', 'Modalité retenue', 'Formateur / ressource', 'Coût'],
      rows: [
        ['Encadrement de première ligne', 'Externe, session groupée à Goma, 24-26/03/2027', 'Prestataire local', '6 × 300 = 1 800 USD'],
        ['Premiers secours', 'Externe, certifiante', 'Prestataire local', '8 × 120 = 960 USD'],
        ['Gestion de stock médical', 'Interne, 2 demi-journées', 'B. Kahindo et F. Amani (après la documentation des procédures)', '0 USD'],
        ['Excel intermédiaire', 'Interne, 2 ateliers + e-learning gratuit', 'P. Sifa', '0 USD'],
        ['Anglais professionnel', 'Externe, cours individuels', 'Prestataire local', '4 × 350 = 1 400 USD'],
        ['Code de conduite et PSEA', 'Interne, session de 90 minutes', 'N. Mbusa', '0 USD'],
      ],
    },
    result: "Fait quand : chaque thème a une modalité, un formateur ou une ressource et un coût en USD.",
    tip: "Une formation interne est aussi un développement pour le formateur : elle sert directement l'objectif de transmission du savoir de B. Kahindo.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Chiffrer, arbitrer avec la Finance et fixer les critères d\'accès',
    intro: "L'enveloppe de formation 2027 de la base est de 3 600 USD, confirmée par courriel par R. Ilunga. La demande externe est supérieure : il faut arbitrer par des critères écrits, avant de nommer qui que ce soit.",
    steps: [
      {
        title: 'Chiffrez la demande',
        actions: [
          "Additionnez le coût des formations externes : 1 800 + 960 + 1 400 = 4 160 USD.",
          "Comparez à l'enveloppe : 4 160 − 3 600 = 560 USD de dépassement.",
          "Vérifiez auprès de la Finance que ces dépenses sont éligibles à la ligne budgétaire (certains bailleurs plafonnent ou excluent le renforcement de capacités).",
        ],
      },
      {
        title: 'Arbitrez avec des critères écrits',
        actions: [
          "Priorité 1 : écart de priorité Haute du PDI et postes clés.",
          "Priorité 2 : formations obligatoires de sécurité. Priorité 3 : les autres demandes.",
          "Équité : une formation externe payée par agent et par an, avec liste publiée et critères connus.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — arbitrage',
      lines: [
        "Encadrement (Priorité 1) : 1 800 USD, maintenu.",
        "Premiers secours (Priorité 2, obligatoire) : 960 USD, maintenu.",
        "Anglais (Priorité 3) : 4 agents demandés → 2 agents retenus selon le lien avec leur poste (reporting aux bailleurs) : 2 × 350 = 700 USD.",
        "Total : 1 800 + 960 + 700 = 3 460 USD ; reste 3 600 − 3 460 = 140 USD de réserve.",
        "Décision validée par A. Kavira le 15/02/2027 ; les 2 agents non retenus sont inscrits en e-learning gratuit.",
      ],
    },
    result: "Fait quand : le total arbitré est inférieur ou égal à l'enveloppe, chaque refus est expliqué par un critère écrit et la validation figure par écrit.",
    pitfall: "Arbitrer selon la sympathie ou l'ancienneté : le premier agent écarté qui comprend le critère réel ouvre un conflit que le Module 08 vous apprendra à gérer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Publier le plan, inscrire les agents et planifier',
    intro: "Un plan de formation que personne ne connaît ne forme personne. Le plan est publié avec son calendrier, ses critères et la marche à suivre pour demander une place.",
    steps: [
      {
        title: 'Publiez',
        actions: [
          "Envoyez à tous les superviseurs le calendrier, les critères d'accès et la liste des agents retenus.",
          "Posez chaque session dans l'agenda partagé avec les participants.",
        ],
      },
      {
        title: 'Organisez la couverture et le suivi',
        actions: [
          "Obtenez du Base Manager la couverture des absences : la pharmacie ne ferme pas pendant la formation.",
          "Ouvrez dans Plan_formation_2027 un onglet « Registre » : Agent, Formation, Date, Durée, Coût, Résultat du test, Suivi à 3 mois.",
          "Confiez la tenue du registre à P. Sifa.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Formation', 'Participants', 'Couverture'],
      rows: [
        ['24-26/03/2027', 'Encadrement de première ligne', '6 agents dont B. Kahindo', "F. Amani tient la pharmacie, validé par E. Kasongo"],
        ['12/05/2027', 'Premiers secours', '8 agents', 'Deux groupes de 4, matin et après-midi'],
        ['Avril-mai 2027', 'Anglais professionnel', '2 agents', 'Cours hors heures de pointe'],
        ['Juin 2027', 'Gestion de stock médical', '5 agents', 'Interne, 2 demi-journées'],
      ],
    },
    result: "Fait quand : les sessions sont dans l'agenda, les absences sont couvertes et le registre est ouvert.",
    tip: "Faites signer à l'agent formé (hors engagement de remboursement, point de droit du travail vu au Module 06) un accusé de participation : il sert de preuve au dossier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Évaluer la formation et boucler avec la prochaine évaluation',
    intro: "Une formation se juge sur ce qu'elle change, pas sur sa tenue. Le modèle de Kirkpatrick propose quatre niveaux ; trois suffisent à une base : la réaction, l'apprentissage et le comportement.",
    steps: [
      {
        title: 'Mesurez à trois moments',
        actions: [
          "Réaction, le jour même : questionnaire de 5 questions notées de 1 à 5.",
          "Apprentissage : test avant et après (notes sur 100) sur le contenu clé.",
          "Comportement, à 3 mois : le superviseur vérifie un indicateur observable.",
        ],
      },
      {
        title: 'Rebouclez avec la grille',
        actions: [
          "Saisissez les résultats dans le registre.",
          "Reportez l'indicateur de comportement comme preuve dans la ligne correspondante de la grille de l'année suivante.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — formation encadrement du 24 au 26 mars 2027',
      lines: [
        "Réaction : 4,3 / 5 en moyenne sur 6 participants.",
        "Apprentissage : test de 55 / 100 avant, 82 / 100 après (moyenne).",
        "Comportement à 3 mois (26/06/2027) : B. Kahindo a tenu 20 réunions d'équipe sur 22 semaines, comptes rendus archivés ; pas de nouvelle plainte écrite.",
        "Cette preuve alimentera la ligne « Leadership » de la grille 2027.",
      ],
    },
    result: "Fait quand : chaque formation a trois mesures dans le registre et un indicateur de comportement est rattaché à une ligne de la prochaine grille.",
    pitfall: "S'arrêter au questionnaire de satisfaction : un participant satisfait peut ne rien avoir changé dans son travail.",
  },

  // ─── Procédure 8 — Hauts potentiels ────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 8 — Identifier et gérer les hauts potentiels',
    body: "Les hauts potentiels sont des employés dont les évaluations successives et la trajectoire justifient un investissement de développement prioritaire. Cette procédure vous évite deux erreurs symétriques : ne repérer personne, ou repérer « à l'impression » et créer des favoris. Elle s'appuie sur la matrice performance × potentiel, un fichier de travail que vous créez.",
    bullets: [
      "Étape 1 — Définir des critères de haut potentiel écrits.",
      "Étape 2 — Remplir la matrice performance × potentiel.",
      "Étape 3 — Construire le plan d'accélération.",
      "Étape 4 — Communiquer sans rien promettre et réviser chaque année.",
    ],
    result: "Livrable 7 (seconde partie) : la liste des hauts potentiels de la base, avec un plan par personne, en accès restreint.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 4',
    title: 'Définir des critères de haut potentiel écrits, avant de regarder les noms',
    intro: "Les critères sont fixés d'abord, validés par le HR Manager, et appliqués à tous de la même façon. Entrée : l'onglet Historique et tendance de chaque agent.",
    steps: [
      {
        title: 'Fixez le critère de performance',
        actions: [
          "Exigez un score global d'au moins 3,5 deux années consécutives (lu dans l'onglet Historique et tendance).",
          "Ajoutez une condition de trajectoire : évolution positive sur la dernière année.",
        ],
      },
      {
        title: 'Fixez les signes de potentiel',
        actions: [
          "Apprend vite : une tâche nouvelle maîtrisée en moins de 3 mois.",
          "Élargit son périmètre sans supervision constante.",
          "Exprime une aspiration claire à davantage de responsabilité.",
          "Retenez le haut potentiel si deux signes sur trois sont observés avec des exemples datés.",
        ],
      },
    ],
    result: "Fait quand : une page de critères est validée par le HR Manager et chaque agent évalué sera jugé selon les mêmes règles. Sur 34 agents, 3 à 5 hauts potentiels est un ordre de grandeur crédible.",
    pitfall: "Repérer un haut potentiel « parce qu'il est brillant en réunion » : sans critère écrit et sans exemple daté, vous créez un favori, pas un haut potentiel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 4',
    title: 'Remplir la matrice performance × potentiel',
    intro: "La matrice croise deux lectures indépendantes : la performance, tirée des scores de l'historique, et le potentiel, jugé sur les trois signes de l'étape 1.",
    steps: [
      {
        title: 'Créez la matrice',
        actions: [
          "Créez un onglet « Matrice » avec les colonnes : Agent, Scores des 3 années, Performance (< 3 ; 3 à 3,49 ; 3,5 et plus), Potentiel (Faible, Moyen, Élevé), Case.",
          "Reprenez les scores sans les arrondir.",
        ],
      },
      {
        title: 'Classez chaque agent',
        actions: [
          "Performance 3,5 et plus deux années de suite et potentiel Élevé : haut potentiel.",
          "Performance 3,5 et plus et potentiel Moyen : performant clé, à fidéliser. Autres cas : développer ou suivre.",
        ],
      },
    ],
    table: {
      columns: ['Agent', 'Scores 2024 / 2025 / 2026', 'Potentiel', 'Case'],
      rows: [
        ['F. Amani', '3,2 / 3,6 / 3,8', 'Élevé (3 signes sur 3)', 'Haut potentiel'],
        ['G. Zawadi (Superviseur Distribution)', '3,3 / 3,5 / 3,7', 'Moyen', 'Performant clé, à fidéliser'],
        ['B. Kahindo', '3,0 / 3,3 / 3,54', 'Moyen', "À suivre : un seul score ≥ 3,5 à ce jour"],
        ['L. Neema', '2,8 / 3,1 / 3,1', 'Élevé (2 signes sur 3)', 'Potentiel à confirmer'],
      ],
    },
    result: "Fait quand : chaque agent évalué a une case justifiée par des chiffres et des exemples, et la liste des hauts potentiels est établie.",
    tip: "Un potentiel jugé avec deux signes sur trois reste « à confirmer » : donnez-lui une occasion de le prouver avant de le classer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 4',
    title: "Construire le plan d'accélération (au-delà du PDI standard)",
    intro: "Un haut potentiel reçoit en plus du PDI trois types de leviers, la plupart sans coût : une mission élargie, un mentorat, une mobilité courte. Le plan se rattache au plan de succession quand le poste visé est un poste clé.",
    steps: [
      {
        title: 'Choisissez les leviers',
        actions: [
          "Mission élargie (stretch assignment) : une responsabilité supérieure, sous supervision.",
          "Mentorat par une personne qui tient déjà le niveau visé.",
          "Mobilité courte : détachement de quelques semaines dans une autre base.",
          "Formation prioritaire sur l'enveloppe, selon l'arbitrage de l'étape 3 de la Procédure 7.",
        ],
      },
      {
        title: 'Datez et rattachez',
        actions: [
          "Fixez une date et un responsable pour chaque levier.",
          "Reportez-les dans la section 7 du plan de succession si le poste est clé.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — plan d\'accélération de F. Amani',
      lines: [
        "Mission élargie : passer la commande trimestrielle de juillet 2027 sous la supervision de B. Kahindo (échéance 31/07/2027).",
        "Mentorat : une heure par mois avec B. Kahindo, de février à décembre 2027.",
        "Mobilité courte : détachement de 3 semaines à la pharmacie d'une autre base du réseau KSS en septembre 2027 (frais de déplacement à valider avec R. Ilunga).",
        "Rattachement : actions reprises en section 7 de la Partie B, niveau « Prêt dans 6-12 mois ».",
      ],
    },
    result: "Fait quand : chaque haut potentiel a au moins deux leviers datés, un responsable et un lien avec la Partie B si le poste visé est clé.",
    tip: "La mission élargie est le levier le plus puissant et le moins coûteux : donnez une vraie responsabilité, pas une tâche de plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 4',
    title: 'Communiquer sans rien promettre et réviser chaque année',
    intro: "L'étiquette « haut potentiel » est un outil interne, pas un grade. Mal communiquée, elle crée des attentes que l'organisation ne peut pas tenir, ou du ressentiment chez les autres.",
    steps: [
      {
        title: 'Parlez de trajectoire, pas d\'étiquette',
        actions: [
          "Organisez un entretien de carrière individuel : aspirations, plan d'accélération, limites.",
          "Évitez l'expression « haut potentiel » : parlez d'un parcours de développement.",
          "Ne promettez ni poste, ni date de promotion, ni augmentation.",
        ],
      },
      {
        title: 'Protégez et révisez',
        actions: [
          "Classez la liste en accès restreint (Head of Mission, HR Manager, siège).",
          "Révisez-la chaque décembre : sortez ceux dont la performance chute, ajoutez ceux qui franchissent le critère.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — entretien de carrière avec F. Amani, vendredi 29 janvier 2027',
      lines: [
        "« Vos trois dernières évaluations progressent. Nous voulons investir dans votre parcours : commande de juillet sous supervision, mentorat avec B. Kahindo, un détachement en septembre. »",
        "« Je ne peux rien promettre sur un poste ou une date. Nous referons le point le 21 juillet. »",
        "F. Amani demande : « Est-ce que je serai Responsable Pharmacie ? » — Réponse : « Cela dépendra d'un départ éventuel, de la qualification requise et de vos résultats. »",
      ],
    },
    result: "Fait quand : l'agent comprend son parcours sans entendre de promesse, la liste est classée en accès restreint et la révision de décembre est dans l'agenda.",
    pitfall: "Laisser filtrer la liste : un agent qui découvre qu'il n'y figure pas et que son collègue y est vous le fera payer en climat d'équipe.",
  },

  // ─── Cas résolu ────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Le poste sans successeur, Goma » : la campagne de B. Kahindo jour par jour",
    scenario: "Rappel : janvier 2027, N. Mbusa pilote la campagne d'évaluation 2026 de la base de Goma. Parmi les 34 dossiers, celui de la Responsable Pharmacie cumule une très bonne performance (3,54), un écart de leadership et un poste clé sans successeur formalisé. Voici le déroulé complet tel qu'un professionnel l'aurait conduit.",
    steps: [
      { title: 'Lundi 4 janvier — Cadrage', body: 'Procédure 1, étape 1 : 34 agents, dossier de B. Kahindo constitué ; PDI 2026 introuvable, demandé à A. Kavira.', result: 'Périmètre et documents d\'entrée verrouillés.' },
      { title: 'Jeudi 7 janvier — Calendrier et envoi', body: "Procédure 1, étapes 2 à 6 : invitation 14 jours avant, grille préparée (en-tête, 8 lignes, poids 100 %), auto-évaluation envoyée avec date de retour.", result: 'Invitation acceptée, courriel archivé.' },
      { title: 'Du 8 au 14 janvier — Notation indépendante', body: "Procédure 2, étapes 1 à 3 : preuves collectées, Dr Kitenge note sans voir l'auto-évaluation, 8 commentaires « Sup. : » avec fait, date, chiffre.", result: 'Colonne E complète le jeudi 14.' },
      { title: 'Du 15 au 18 janvier — Écarts et contrôle', body: "Procédure 2, étapes 4 à 6 : écart +2 sur le leadership, contrôle des biais, score 3,54 vérifié à la main.", result: 'Ordre du jour hiérarchisé.' },
      { title: 'Jeudi 21 janvier — Entretien', body: "Procédure 3 (6 étapes) et Procédure 4 : 75 minutes, PDI rempli en direct, 3 objectifs SMART, désaccord consigné, signatures à 10 h 12.", result: 'Grille et PDI signés.' },
      { title: 'Du 22 au 29 janvier — Succession et suivi', body: "Procédure 4, étape 5 : Partie A envoyée. Procédure 5 : poste clé Élevé, 2 successeurs, validation du Head of Mission le 27. Procédure 6, étape 1 : suivi du 21 juillet posé. Procédure 8 : entretien de carrière de F. Amani.", result: 'Partie B en accès restreint.' },
      { title: 'Février — Plan de formation', body: "Procédure 7 : 34 PDI consolidés, arbitrage 3 460 USD sur 3 600, plan validé par A. Kavira le 15 février.", result: 'Plan publié, registre ouvert.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La grille finale de B. Kahindo',
    scenario: "Voici l'état final de l'onglet « Evaluation annuelle » après l'entretien du 21 janvier 2027. E21 affiche « Dépasse les attentes ».",
    steps: [],
    table: {
      columns: ['Ligne', 'Poids', 'Auto', 'Sup.', 'Retenue', 'Score', 'Commentaire clé (colonne H)'],
      rows: [
        ['Qualité et fiabilité', '15 %', '4', '4', '4,00', '0,60', 'Sup. : audit du 14/09/2026, 0 non-conformité majeure'],
        ['Respect des délais', '15 %', '3', '3', '3,00', '0,45', 'Sup. : 5 rapports sur 12 remis après le 5'],
        ["Leadership et gestion d'équipe", '15 %', '4', '2', '2,60', '0,39', 'Sup. : plaintes 12/03 et 28/08, démission 30/10. Désaccord de l\'employée consigné'],
        ['Communication', '10 %', '3', '3', '3,00', '0,30', 'Sup. : alerte amoxicilline à J+6 en mai 2026'],
        ['Procédures et principes', '10 %', '5', '5', '5,00', '0,50', 'Sup. : 12 contrôles stupéfiants, 0 écart ; refus de don du 08/08'],
        ['Objectif 1 — rupture de stock', '15 %', '4', '4', '4,00', '0,60', 'Sup. : 4,2 % dès novembre, cible < 5 %'],
        ['Objectif 2 — inventaires', '10 %', '4', '3', '3,30', '0,33', 'Sup. : 3 inventaires sur 4 sous 2 % ; T4 : 2,6 %'],
        ['Objectif 3 — formation des aides', '10 %', '3', '4', '3,70', '0,37', 'Sup. : 2 aides formées avec 2 mois d\'avance, test ≥ 80 %'],
        ['TOTAL', '100 %', '', '', '', '3,54', 'Dépasse les attentes ; évolution +0,24 vs 2025'],
      ],
    },
    result: "Contrôles finaux : C19 = 100 %, aucune cellule vide en D11:E18, G19 = 3,54 recalculé à la main, onglet Historique : 3,0 → 3,3 → 3,54, aucune trace de l'exemple « Jean-Baptiste Étienne ».",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le PDI et le plan de succession finaux',
    scenario: "État final des documents signés : Partie A du PDI (envoyée à l'employée le 22 janvier) et Partie B (signée le 27 janvier, accès restreint).",
    steps: [],
    table: {
      columns: ['Document', 'Contenu essentiel'],
      rows: [
        ['PDI — section 2', "2 écarts : leadership (2,6, priorité Haute) et documentation des 6 procédures du poste clé (priorité Haute)"],
        ['PDI — section 3', "4 actions : formation du 24-26/03 ; mentorat 6 séances jusqu'au 07/07 ; réunion du lundi dès le 25/01 ; 6 fiches de procédure au 30/06 — statuts « À démarrer »"],
        ['PDI — section 4', "3 objectifs SMART : ruptures < 5 % puis < 3 % ; 6 fiches validées et commande de juillet par F. Amani ; rapport avant le 5, 11 fois sur 12"],
        ['Succession — section 5', "Responsable Pharmacie Goma, B. Kahindo, criticité Élevé, raison chiffrée"],
        ['Succession — section 6', "F. Amani, prêt dans 6-12 mois ; L. Neema, prêt dans 12-24 mois"],
        ['Succession — section 7', "Actions datées, risques en semaines, prochaine revue le 21/07/2027 ; rédigé le 22/01 par N. Mbusa, validé le 27/01 par H. Mwamba"],
        ['Suivi', "Point du 21/07/2027 posé ; historique figé ; 3 objectifs reportés en A16:A18 de la grille 2027"],
      ],
    },
    result: "Contrôle final : chaque écart a une action, chaque action une date, chaque successeur un niveau justifié par trois preuves, et la Partie B n'a été envoyée ni à l'employée, ni aux successeurs.",
  },

  // ─── Exercices ─────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: "Exercice 1 — Réécrire trois commentaires vagues en commentaires défendables",
    instructions: "Entraînement court avant l'exercice noté. Vous êtes HR Officer et relisez la grille d'un Magasinier. Réécrivez chaque commentaire du superviseur sous la forme fait — date — chiffre — source en inventant des faits réalistes.",
    table: {
      columns: ['Ligne', 'Note', 'Commentaire à réécrire'],
      rows: [
        ['Qualité et fiabilité', '4', 'Très fiable'],
        ['Respect des délais', '2', 'Souvent en retard'],
        ['Leadership', '5', "Un vrai chef d'équipe"],
      ],
    },
    steps: [
      { title: 'Pour chaque ligne', actions: ["Écrivez un commentaire commençant par « Sup. : ».", "Citez un fait, une date, un chiffre et la preuve qui l'établit.", "Supprimez tout adjectif sur la personne."] },
      { title: 'Pour la note 5', actions: ["Vérifiez qu'un exemple correspond au repère « référence pour d'autres équipes »."] },
    ],
    deliverable: "Trois commentaires réécrits, chacun avec fait, date, chiffre et source.",
    tip: "Un commentaire est bon si un tiers peut retrouver la preuve sans vous poser de question.",
  },
  {
    type: 'exercise',
    title: "Exercice noté — « Le poste sans successeur, Port-au-Prince, Haïti » : le cas",
    instructions: "Vous êtes HR Manager d'une ONG médicale internationale sur la mission Haïti. Jean-Baptiste Étienne, Log Officer de la base de Port-au-Prince depuis trois ans, vient de terminer son entretien annuel : note globale pondérée de 3,94 / 5, « Dépasse les attentes », en progression (3,2 en 2024, 3,6 en 2025). Il gère seul la logistique de deux bases, coordonne avec le Logistics Cluster, et est la mémoire opérationnelle de la mission : fournisseurs locaux, procédures de dédouanement du port, historique des incidents de sécurité. Aucun plan de succession n'a jamais été formalisé pour son poste. Une mutation interne, une offre d'une agence onusienne ou une urgence familiale le rendraient vacant sans préavis. Votre mission : constituer le dossier de succession avant la fin de la semaine avec les deux templates.",
    steps: [
      {
        title: '1. Grille — grille-evaluation-performance-annuelle.xlsx',
        actions: [
          "Ouvrez une copie du fichier : il contient déjà les notes d'exemple de Jean-Baptiste Étienne. Vérifiez que G19 = 3,94 et que E21 = « Dépasse les attentes ».",
          "Corrigez la date de l'entretien : l'exemple (20 janvier 2026) précède la fin de l'année évaluée 2026.",
          "Dans l'onglet Historique et tendance, remplacez les postes d'exemple (Base de Goma) par « Log Officer, Base de Port-au-Prince » ; vérifiez +0,40 puis +0,34.",
          "Rédigez en colonne H un commentaire « Sup. : » (fait, date, chiffre, source) pour les 8 lignes, au moins pour 3 compétences et 2 objectifs qui justifient un « Dépasse les attentes ».",
        ],
      },
      {
        title: '2. PDI — Partie A du docx',
        actions: [
          "Remplissez la section 1 et, en section 2, identifiez au moins une compétence à développer même chez un employé très performant (formation d'une relève, documentation des procédures qu'il est seul à maîtriser).",
          "En section 3, saisissez au moins une action datée, avec modalité, échéance et statut. En section 4, rédigez 2 à 3 objectifs SMART.",
        ],
      },
      {
        title: '3. Succession — Partie B du docx',
        actions: [
          "Formalisez le poste de Log Officer comme poste clé (test des 4 questions, criticité, raison chiffrée).",
          "Identifiez au moins un successeur plausible avec un niveau de préparation honnête (« prêt dans 6-12 mois » plutôt qu'un optimisme de façade) et une action de préparation d'ici la prochaine revue.",
          "Remplissez les risques, la date de prochaine revue, « Rédigé par » et « Validé par ».",
        ],
      },
    ],
    deliverable: "Les deux fichiers complétés, avec une justification écrite en une phrase pour chaque note de compétence attribuée dans la grille.",
    tip: "Contrôle de la grille : notes retenues 4,00 / 3,30 / 4,30 / 4,00 / 5,00 / 4,00 / 3,70 / 3,30 ; total 3,94. La note 3 du superviseur sur les délais et sur l'objectif 3 montre que « Dépasse les attentes » globalement n'exclut pas des points à travailler.",
  },
  {
    type: 'exercise',
    title: "Exercice complémentaire — Arbitrer un budget de formation",
    instructions: "Base de Port-au-Prince : enveloppe de formation 2027 de 2 400 USD. Demandes issues des PDI : encadrement de première ligne pour 4 agents (250 USD chacun, priorité Haute), secourisme pour 6 agents (120 USD chacun, obligatoire), anglais professionnel pour 3 agents (300 USD chacun, priorité Moyenne), gestion de stock médical pour 5 agents (interne, 0 USD).",
    steps: [
      { title: 'Chiffrez et comparez', actions: ["Calculez le coût de chaque thème externe et le total demandé.", "Calculez le dépassement par rapport à l'enveloppe."] },
      { title: 'Arbitrez avec les critères écrits', actions: ["Appliquez : priorité Haute et postes clés, puis obligations de sécurité, puis les autres demandes.", "Écrivez la raison de chaque réduction et proposez une alternative gratuite pour les agents non retenus."] },
    ],
    deliverable: "Un tableau d'arbitrage (thème, agents retenus, coût, justification) dont le total ne dépasse pas 2 400 USD, et un courriel de 5 lignes à la Finance pour valider.",
    tip: "Contrôle : demande externe = 1 000 + 720 + 900 = 2 620 USD, dépassement de 220 USD ; réduire l'anglais à 2 agents ramène le total à 2 320 USD.",
    pitfall: "Réduire la formation obligatoire de sécurité pour sauver une formation « confort » : l'obligation passe toujours avant.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Grille : G19 = 3,94, E21 = « Dépasse les attentes », C19 = 100 %, aucune cellule vide en D11:E18, aucune trace des notes d'exemple d'un autre agent.",
      "Grille : la date d'entretien est postérieure à la fin de l'année évaluée, et l'onglet Historique et tendance affiche « Log Officer, Base de Port-au-Prince » avec +0,40 puis +0,34.",
      "Chaque note de compétence et d'objectif porte un commentaire « Sup. : » avec un fait, une date, un chiffre et une source ; aucun adjectif sur la personne.",
      "PDI : chaque ligne de la section 2 renvoie à une note de la grille ou au plan de succession ; au moins une compétence concerne la transmission du savoir.",
      "PDI : chaque action a une modalité parmi les cinq du guide, une échéance de calendrier et un statut ; les objectifs de la section 4 passent le test SMART.",
      "Succession : le test du poste clé est appliqué (au moins 3 Oui), la criticité est « Élevé » avec une raison chiffrée.",
      "Succession : au moins un successeur est nommé avec un niveau de préparation justifié par les trois preuves ; il n'est pas « Prêt maintenant » sans preuve.",
      "Succession : action de préparation datée, risques exprimés en semaines, date de revue alignée sur le point de suivi, « Rédigé par » et « Validé par » renseignés.",
      "Confidentialité : la Partie B n'est pas dans la copie envoyée à l'employé évalué.",
    ],
  },

  // ─── Pièges, récapitulatif, clôture ───────────────────────────────────
  {
    type: 'warning',
    title: "Pièges fréquents sur le terrain (25 ans d'expérience condensés)",
    items: [
      "Évaluation annuelle expédiée en 10 minutes sans préparation des deux côtés : sans grille envoyée en amont ni exemples préparés, vous ne produisez ni notes défendables ni PDI utile. Appliquez les Procédures 1 et 2 avant toute rencontre.",
      "PDI rédigé en fin d'entretien puis jamais suivi : sans point de suivi programmé à 6 mois, le document reste un vœu pieux. Posez l'événement dans l'agenda avant de quitter la salle.",
      "Aucun plan de succession sur les postes clés : l'absence n'est remarquée que le jour où le poste se libère. Appliquez le test des 4 questions à chaque poste évalué.",
      "Confondre « performant » et « irremplaçable » au point de ne jamais documenter son savoir-faire : plus un poste concentre de savoir critique non documenté, plus il est prioritaire.",
      "Note de complaisance pour éviter un conflit : remonter un 2 à un 3 détruit la valeur de la grille et prive l'employé du signal honnête dont il a besoin.",
      "Noter après avoir lu l'auto-évaluation : l'écart disparaît et avec lui l'information la plus utile du processus. Notez d'abord, comparez ensuite.",
      "Gommer un désaccord pour finir de bonne humeur : un désaccord documenté aujourd'hui, étouffé, revient amplifié dans un litige.",
      "Envoyer la Partie B (succession) à l'employé évalué ou promettre un poste à un successeur : le plan est un outil de gestion du risque, pas une promesse.",
    ],
  },
  {
    type: 'warning',
    title: 'Pièges du template Excel et du modèle Word',
    items: [
      "Les deux templates sont livrés remplis avec un exemple (Jean-Baptiste Étienne, scores 3,2 et 3,6, postes « Base de Goma ») : travaillez sur une copie et effacez tout avant d'envoyer.",
      "Une cellule vide en D11:E18 compte pour 0 dans la note retenue : la grille affiche un score faussé sans message d'erreur. Contrôlez que les 8 lignes sont remplies.",
      "Le 30 % / 70 % est écrit dans les formules de la colonne F : ne les modifiez jamais pour « arranger » un score, et ne tapez pas de note à la main dans F ou G.",
      "Si C19 n'affiche pas 100 %, E21 affiche « Vérifier la pondération » à la place de la classification : corrigez les poids avant de lire le score.",
      "Une seule colonne de commentaire (H) pour deux regards : préfixez toujours « Emp. : » ou « Sup. : ».",
      "L'onglet Historique et tendance se recalcule : sans figer la ligne 7 avant la campagne suivante, vous perdez l'ancien score.",
      "Dans le modèle Word, la date d'entretien, la période du PDI et la date de revue doivent être des dates de calendrier ; « l'année prochaine » n'est pas une échéance.",
      "Les lignes vides du modèle ne sont pas des quotas : n'inventez pas un écart ou un successeur pour remplir.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez préparé une campagne d'évaluation : périmètre de 34 agents, invitation envoyée 14 jours avant, grille renseignée (en-tête, 8 lignes, pondérations à 100 %) et auto-évaluation envoyée une semaine avant.",
      "Vous avez construit une grille dont chaque note repose sur un fait daté : évaluation du superviseur indépendante, tableau des écarts, contrôle des biais, score global 3,54 vérifié à la main.",
      "Vous avez conduit un entretien de 75 minutes en trois temps, fait valider la note globale, consigné un désaccord et obtenu les signatures.",
      "Vous avez rédigé un PDI actionnable : 2 écarts, 4 actions datées avec modalité et statut, 3 objectifs SMART.",
      "Vous avez appliqué le test du poste clé et construit un plan de succession avec deux successeurs, des niveaux de préparation honnêtes, des risques chiffrés et une revue datée.",
      "Vous avez programmé le point de suivi du 21 juillet 2027 et mis à jour l'onglet Historique et tendance en figeant l'année écoulée.",
      "Vous avez consolidé les besoins de formation de la base, arbitré 3 460 USD sur une enveloppe de 3 600 USD avec des critères écrits, et prévu l'évaluation de chaque formation.",
      "Vous avez défini des critères écrits de hauts potentiels, rempli une matrice performance × potentiel et construit un plan d'accélération sans promesse.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi une évaluation doit reposer sur des critères observables, et je peux transformer un commentaire d'impression en un fait daté.",
      "Je sais construire une grille combinant compétences et objectifs avec une pondération assumée à 100 %.",
      "Je sais remplir l'évaluation du superviseur sans voir l'auto-évaluation, mesurer les écarts et contrôler les cinq biais.",
      "Je sais structurer un entretien annuel en trois temps sur au moins 45 minutes, valider la note globale et consigner un désaccord.",
      "J'ai complété la grille avec le template fourni, y compris l'onglet Historique et tendance, et j'ai vérifié G19 à la main.",
      "J'ai rédigé un PDI avec des actions datées, un statut et un point de suivi à 6 mois posé dans l'agenda.",
      "Je sais appliquer le test du poste clé et j'ai complété un plan de succession avec un niveau de préparation honnête.",
      "Je sais consolider les PDI en plan de formation arbitré et identifier des hauts potentiels sans rien promettre.",
      "J'ai réalisé l'exercice de Port-au-Prince et mon livrable passe toutes les lignes de l'auto-correction.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 06 — Droit du Travail Humanitaire, RDC & Droit International : vous savez désormais évaluer, développer et préparer la relève de vos équipes. Vous allez maintenant vérifier que chaque décision RH, du PDI à la fin de contrat, respecte le Code du Travail de la RDC et les accords internationaux applicables.",
  },
]
