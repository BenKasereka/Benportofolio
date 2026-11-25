// Module 07 — Protection, Bien-Être & Prévention du Burnout
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure est
// détaillée étape par étape et appliquée à un cas fil rouge unique (base de
// Goma, février-mars 2027), avec les templates remplis champ par champ. Les
// noms, chiffres et dates des exemples sont fictifs.
export default [
  {
    type: 'cover',
    title: 'Protection, Bien-Être & Prévention du Burnout',
    hook: "À la fin de ce module, vous aurez fait vivre la protection du personnel de votre base : une sensibilisation PSEA tenue et documentée, un protocole de signalement complété, validé et affiché, une grille de suivi du bien-être alimentée par l'équipe, une note d'intervention de soutien rédigée avant la crise, et un signalement PSEA traité dans le bon ordre — protection d'abord, enquête ensuite. Tout cela en suivant, étape par étape, ce qu'un HR Officer expérimenté fait en cinq semaines sur une base.",
  },
  {
    type: 'objectives',
    items: [
      "Mener une sensibilisation PSEA d'arrivée de 30 minutes, au-delà de la signature du Code de Conduite, et la documenter dans un registre (date, participants, contenu abordé).",
      "Programmer et animer le rappel PSEA au minimum tous les 6 mois et à chaque changement de contexte, avec un calendrier annuel et un taux de couverture mesuré.",
      "Construire un canal de signalement réellement sécurisé en complétant protocole-signalement-psea-protection-personnel.docx : plusieurs points d'entrée dont une option anonyme, accusé de réception sous 48 heures, engagement de non-représailles, protocole validé et affiché.",
      "Alimenter grille-identification-precoce-burnout.xlsx à rythme régulier pour une équipe, lire les statuts (OK, A surveiller, ALERTE) et la tendance, puis préparer la revue RH-management qui en découle.",
      "Conduire un entretien de soutien et rédiger une note d'intervention d'une demi-page qui présente des faits objectifs, propose un soutien concret et n'est jamais vécue comme une remise en cause de la compétence.",
      "Réagir à un incident critique avec les premiers secours psychologiques et un plan de soutien psychosocial daté, suivi à J+2, J+7 et J+30.",
      "Traiter un signalement PSEA dans l'ordre non négociable (accusé de réception, protection immédiate, information, orientation vers l'enquête sous 5 jours ouvrés, soutien) et protéger la personne qui signale grâce à un calendrier de contrôles anti-représailles.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur la PSEA ou sur le burnout : c'est la méthode pour faire vivre, dans le bon ordre, la protection du personnel de votre base, appliquée à un seul cas suivi du début à la fin. À la fin, vous aurez produit huit livrables réutilisables tels quels sur votre propre mission.",
      "Le cas fil rouge (fictif, inspiré de situations réelles) : vous retrouvez N. Mbusa, HR Officer de la base de Goma de Kivu Santé Solidaire (KSS). Nous sommes le mardi 23 février 2027. A. Kavira, HR Manager de mission à Kinshasa, vous confie la mise en place du dispositif de protection du personnel de Goma (36 salariés et jusqu'à 25 journaliers pendant les distributions). Un bailleur institutionnel, ECHO, demandera les preuves de ce dispositif lors de sa revue partenaire du mercredi 31 mars 2027. Deux nouveaux salariés arrivent le lundi 1er mars, la dernière sensibilisation collective date du 22 septembre 2026, et l'équipe logistique du Superviseur L. Katembo tourne en sous-effectif depuis janvier.",
    ],
    bullets: [
      "Livrable 1 — Une session d'accueil PSEA de 30 minutes tenue, signée et inscrite au registre de sensibilisation.",
      "Livrable 2 — Le calendrier annuel des rappels PSEA et le registre à jour, avec le taux de couverture du premier rappel.",
      "Livrable 3 — Le protocole de signalement PSEA et de protection du personnel complété, validé, affiché et testé à blanc.",
      "Livrable 4 — La grille d'identification précoce du burnout de l'équipe logistique, alimentée sur trois périodes, avec l'onglet de synthèse à jour.",
      "Livrable 5 — La note d'intervention d'une demi-page et le plan de suivi de l'entretien de soutien.",
      "Livrable 6 — Le plan de soutien psychosocial d'un incident critique, suivi à J+2, J+7 et J+30.",
      "Livrable 7 — Le dossier de traitement d'un signalement PSEA : fiche de réception, mesures de protection, orientation vers l'enquête, soutien.",
      "Livrable 8 — Le calendrier de contrôle anti-représailles après la clôture du dossier.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '6 mois',
    caption: "C'est l'intervalle maximal entre deux sensibilisations PSEA de l'ensemble du personnel. À Goma, la dernière a eu lieu le 22 septembre 2026 : la prochaine est donc due au plus tard le 22 mars 2027, soit neuf jours avant la revue partenaire du bailleur.",
    context: "Dates fictives. La plupart des bases ne manquent pas de politique PSEA : elles manquent de dates dans un calendrier et de lignes dans un registre. C'est exactement ce que la Procédure 2 installe.",
  },

  // ─── Théorie essentielle ───────────────────────────────────────────────
  {
    type: 'concept',
    title: 'La PSEA est un sujet RH central, pas un programme à côté',
    body: [
      "Le personnel humanitaire est, par définition de sa fonction, en position de pouvoir vis-à-vis des populations qu'il sert : celui qui décide qui reçoit une ration, qui obtient un emploi journalier, qui accède à une distribution de kits ou qui signe une attestation de vulnérabilité détient un pouvoir réel sur des personnes dépendantes.",
      "Ce déséquilibre de pouvoir est un risque structurel, pas un risque lié à quelques « brebis galeuses ». Il existe dans chaque organisation et chaque contexte. Le gérer activement, côté RH, c'est faire quatre choses concrètes : vérifier les antécédents disciplinaires à chaque recrutement (journaliers et bénévoles compris) ; s'assurer que chaque arrivant comprend le Code de Conduite ; maintenir un canal qui fonctionne ; traiter chaque signalement avec rigueur et rapidité.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "À Goma, l'Agent de distribution qui établit la liste d'enregistrement d'un site décide qui reçoit un kit : c'est le poste où le pouvoir est le plus concentré.",
        "C'est donc le poste pour lequel la vérification des antécédents et la session d'accueil ne peuvent pas être reportées.",
      ],
    },
    highlight: "Une organisation dont un incident signalé met six mois à être traité pendant que le mis en cause continue de travailler au contact des bénéficiaires n'a pas de politique PSEA : elle a un document.",
  },
  {
    type: 'concept',
    title: "Zéro signalement n'est pas une bonne nouvelle",
    body: [
      "Le meilleur indicateur qu'une politique PSEA fonctionne n'est pas « zéro signalement » : c'est souvent le contraire. Zéro signalement pendant des années, dans une organisation qui opère auprès de personnes très vulnérables, est un signal d'alarme : soit les canaux ne sont pas connus ou pas fiables, soit la peur des représailles dissuade victimes et témoins de parler.",
      "Un nombre de signalements qui augmente après le lancement d'un canal réellement accessible est souvent le signe que le système commence à fonctionner, pas que la situation s'aggrave.",
    ],
    table: {
      columns: ['Ce que vous observez', 'Lecture prudente', 'Action RH'],
      rows: [
        ["0 signalement en 24 mois pour 36 salariés et 25 journaliers", "Alarme : canaux inconnus, peu fiables ou craints", "Tester le canal comme une victime potentielle (Procédure 3, étape 1)"],
        ["3 signalements dans les 2 mois qui suivent le lancement d'un canal anonyme", "Le canal est utilisé : le système commence à fonctionner", "Traiter chacun dans l'ordre du protocole ; ne pas chercher qui a parlé"],
        ["Signalements en hausse mais jamais de suite connue du personnel", "Risque de perte de confiance", "Rappeler l'accusé de réception et l'engagement de non-représailles"],
      ],
    },
    tip: "Ne présentez jamais « zéro signalement » comme un résultat au bailleur ou au siège. Présentez les points d'entrée, le taux de couverture des sensibilisations et le délai de traitement.",
  },
  {
    type: 'comparison-table',
    title: "Les six principes de base à expliquer en session (repères IASC)",
    columns: ['Principe', "Ce qu'il signifie pour un salarié ou un journalier", 'Comment le dire simplement'],
    rows: [
      ["1. Faute grave", "L'exploitation et les abus sexuels commis par du personnel humanitaire sont des fautes graves, motif de licenciement.", "« Ce n'est pas un écart de conduite : c'est un motif de fin de contrat. »"],
      ["2. Enfants", "Toute activité sexuelle avec une personne de moins de 18 ans est interdite, quel que soit l'âge de la majorité ou du consentement localement ; se tromper sur l'âge n'est pas une excuse.", "« Jamais, quelle que soit la loi locale. »"],
      ["3. Échange", "Il est interdit d'échanger de l'argent, un emploi, des biens ou des services contre des faveurs sexuelles, y compris l'aide qui est due aux bénéficiaires.", "« L'aide est un droit : on ne la monnaie jamais. »"],
      ["4. Relations", "Une relation sexuelle impliquant un usage abusif de rang ou de position avec un bénéficiaire est interdite. La plupart des ONG, et le Code de Conduite pris en exemple dans ce module, vont plus loin : tout contact sexuel avec un bénéficiaire est interdit, quel que soit son âge et son consentement apparent.", "« Le consentement apparent ne compte pas, parce que le pouvoir n'est pas égal. »"],
      ["5. Signaler", "Tout membre du personnel qui a une préoccupation sur un collègue doit la signaler par les canaux prévus.", "« Se taire, c'est devenir complice du risque. »"],
      ["6. Environnement", "Chacun contribue à un environnement qui prévient les abus ; les managers ont une responsabilité particulière.", "« Les chefs d'équipe sont les premiers responsables de ce que l'équipe ose dire. »"],
    ],
  },
  {
    type: 'comparison-table',
    title: "Trois situations qui arrivent sur votre bureau : ne pas les confondre",
    columns: ['Situation', 'Qui est concerné', "Exemple de terrain", 'Traitement'],
    rows: [
      ["Exploitation ou abus sexuel (SEA)", "Un membre du personnel envers un bénéficiaire ou un membre de la communauté", "Inscription sur une liste de distribution contre une faveur sexuelle", "Protocole PSEA : protection immédiate, enquête, décision disciplinaire, information du siège et du bailleur"],
      ["Harcèlement ou violence au travail", "Entre membres du personnel, y compris le harcèlement sexuel", "Remarques sexuelles répétées d'un superviseur envers une assistante", "Même canal de signalement et mêmes garanties de confidentialité et de non-représailles ; qualification selon le Code de Conduite et le droit national applicable"],
      ["Détresse, épuisement, stress traumatique", "Un salarié en difficulté, sans faute", "Chef d'équipe de plus en plus irritable, sans repos réel depuis des semaines", "Soutien, aménagement de charge, orientation psychosociale : ce n'est pas une procédure disciplinaire"],
    ],
  },
  {
    type: 'concept',
    title: "Le harcèlement au travail : ce que le RH doit savoir faire reconnaître",
    body: [
      "Le harcèlement est un comportement indésirable, répété ou même unique s'il est grave, qui porte atteinte à la dignité d'une personne ou crée un environnement d'intimidation, d'hostilité ou d'humiliation. Quand il est de nature sexuelle, on parle de harcèlement sexuel. La définition exacte et les sanctions dépendent du Code de Conduite de votre organisation et du droit du travail applicable : vérifiez-les (Module 06).",
      "Ce n'est pas du harcèlement : un retour critique légitime et respectueux, une exigence de résultat proportionnée, un désaccord professionnel. Ce qui compte, c'est la dignité de la personne, la répétition, le rapport de pouvoir et l'effet sur elle.",
    ],
    bullets: [
      "Prévention : listez les comportements interdits dans la session d'accueil, avec un exemple entre collègues et pas seulement envers les bénéficiaires.",
      "Détection : un harcèlement ne se signale presque jamais à la personne qui harcèle ou à sa ligne hiérarchique ; c'est pour cela que les points d'entrée du protocole sont multiples.",
      "Traitement : même circuit que la PSEA (accusé de réception, protection immédiate, enquête par une personne sans lien hiérarchique), sans jamais déplacer la personne qui signale.",
    ],
    pitfall: "Ne décidez pas seul(e) si un fait est « assez grave » pour être traité. Si le doute existe entre harcèlement, SEA et conflit de travail, traitez-le comme un signalement protégé et laissez la qualification au Responsable Protection du Personnel.",
  },
  {
    type: 'concept',
    title: "Protéger ceux qui signalent : la bonne foi suffit",
    body: [
      "Un lanceur d'alerte est une personne qui signale de bonne foi une préoccupation : elle n'a pas à prouver les faits, c'est le rôle de l'enquête. Le protocole du module lui garantit deux choses. La confidentialité : son identité n'est communiquée à aucun tiers sans son consentement explicite, y compris à la personne mise en cause, et seules les personnes strictement nécessaires accèdent au dossier. La protection contre les représailles, qu'elles soient directes ou indirectes, que le signalement soit confirmé ou non par l'enquête.",
      "Toute violation de la confidentialité est en elle-même une faute disciplinaire grave. C'est cette phrase, écrite et expliquée, qui rend le canal crédible.",
    ],
    table: {
      columns: ['Forme de représailles', 'Exemple à Goma'],
      rows: [
        ["Mise à l'écart", "La personne n'est plus invitée aux réunions de planning ou au groupe de messagerie de l'équipe."],
        ["Changement de poste non justifié", "Affectation soudaine sur des horaires de nuit ou sur un site plus éloigné, sans raison écrite."],
        ["Dégradation des conditions de travail", "Retrait d'un véhicule, d'un ordinateur ou de tâches valorisantes ; charge de travail alourdie."],
        ["Pression sociale organisée", "Remarques, surnoms, boycott par un groupe de collègues ; non-renouvellement de contrat présenté comme neutre."],
      ],
    },
    highlight: "La personne qui signale ne doit jamais être celle qui est déplacée ou pénalisée.",
  },
  {
    type: 'concept',
    title: 'Le burnout : agir AVANT la crise, pas après',
    body: [
      "Le burnout n'arrive jamais du jour au lendemain : il suit une trajectoire progressive, sur plusieurs semaines voire plusieurs mois, avec des signaux observables bien avant l'arrêt de travail ou la démission brutale. Le problème n'est presque jamais le manque de signaux : c'est le manque d'attention portée à ces signaux, ou l'absence de mécanisme pour les faire remonter.",
      "Le rôle du RH et du manager de proximité n'est pas de diagnostiquer (ce n'est pas un rôle médical) mais de reconnaître les signaux, d'ouvrir une conversation et d'orienter vers un soutien adapté. Une fois la personne en arrêt prolongé, l'organisation a déjà perdu des semaines de capacité, la personne a déjà subi un dommage réel, et le retour sera beaucoup plus délicat.",
    ],
    bullets: [
      "Regardez toujours les facteurs d'organisation en même temps que la personne : jours de repos réellement pris, heures effectuées, poste d'adjoint vacant, exposition à l'insécurité.",
      "Un signal isolé n'est presque jamais inquiétant ; c'est la courbe sur plusieurs périodes qui l'est.",
    ],
    highlight: "Le moment où il faut agir se situe AVANT l'arrêt de travail, pas après.",
  },
  {
    type: 'comparison-table',
    title: "Les quatre indicateurs de la grille et ce qu'ils recouvrent",
    columns: ['Indicateur de la grille', "Ce qu'on observe", "Où l'observer", "Piège d'interprétation"],
    rows: [
      ["Irritabilité inhabituelle", "Une personne posée devient cassante en réunion, répond sèchement, s'énerve pour des détails", "Réunions d'équipe, échanges avec les collègues, rapportés avec date et circonstance", "Un mauvais jour isolé : c'est la récurrence et le contraste avec le comportement habituel qui comptent"],
      ["Absentéisme croissant", "Absences de plus en plus fréquentes, souvent courtes, pour motifs vagues (« pas en forme », migraines)", "Registre de présence, demandes de congé, arrêts maladie", "Chaque absence semble anodine ; seule la courbe dans le temps parle"],
      ["Baisse d'engagement", "Plus d'initiatives, strict minimum, arrivée et départ à l'heure pile, retrait des échanges informels", "Réunions, initiatives proposées, vie d'équipe", "Le retrait silencieux est le plus sous-estimé : il ne dérange personne"],
      ["Taux d'erreurs inhabituel", "Erreurs dans des tâches que la personne maîtrisait, retards de livraison, oublis", "Rapports de stock, contrôles, incidents consignés", "Sanctionner l'erreur sans en parler au fond fait disparaître le signal et la confiance"],
    ],
  },
  {
    type: 'concept',
    title: 'Stress traumatique et stress cumulatif : deux situations, deux réactions',
    body: [
      "Le stress cumulatif vient de l'accumulation : sous-effectif, fatigue, pression, absence de repos. C'est lui que la grille de suivi du burnout permet de voir. Le stress traumatique vient d'un événement précis, un incident critique : attaque ou vol à main armée, accident grave, décès ou blessure d'un collègue, menace. Il peut frapper aussi un témoin ou celui qui apprend la nouvelle.",
      "Après un incident critique, des réactions sont normales dans les premiers jours : sommeil perturbé, sursauts, irritabilité, difficulté à se concentrer, envie de s'isoler. La plupart des personnes récupèrent avec du soutien. Le rôle du RH n'est pas de soigner, mais d'organiser les premiers secours psychologiques, le soutien psychosocial (MHPSS) et les suites pratiques.",
    ],
    bullets: [
      "Premiers secours psychologiques, en trois gestes : regarder (la sécurité, les besoins urgents), écouter (sans forcer à raconter), relier (aux proches, à l'aide, aux services).",
      "N'imposez jamais un compte rendu psychologique obligatoire ou collectif juste après l'événement : proposez un soutien volontaire.",
      "Si des signes forts persistent au-delà de quatre semaines (insomnie, reviviscences, évitement, alcool, panique), orientez vers une prise en charge médicale ou psychologique.",
    ],
    pitfall: "Ne confondez pas stress traumatique et faute professionnelle. Après un incident, cherchez à protéger la personne avant de chercher à expliquer ses erreurs.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire à maîtriser dès ce module',
    terms: [
      { term: 'PSEA', definition: "Protection contre l'Exploitation et les Abus Sexuels : politiques et mécanismes visant à prévenir, détecter et traiter les cas commis par du personnel humanitaire envers les populations qu'il sert." },
      { term: 'Code de Conduite', definition: "Document contractuel signé par tout employé, définissant les comportements attendus et interdits. Les clauses PSEA en sont une composante, pas l'ensemble." },
      { term: 'Canal de signalement (whistleblowing channel)', definition: "Mécanisme dédié permettant à un employé ou un bénéficiaire de signaler une préoccupation en toute confidentialité, protégé contre les représailles." },
      { term: 'Soutien psychosocial (MHPSS)', definition: "Mental Health and Psychosocial Support : ensemble des mécanismes d'accompagnement psychologique mis à disposition du personnel exposé à un stress traumatique ou cumulatif." },
      { term: 'Signal précoce (early warning sign)', definition: "Indicateur observable, souvent comportemental, qui précède une dégradation plus grave (burnout, départ, incident) et permet d'intervenir avant la crise." },
      { term: 'Premiers secours psychologiques', definition: "Réponse humaine de soutien immédiat après un événement éprouvant : regarder, écouter, relier. Ce n'est ni une thérapie ni un compte rendu forcé." },
      { term: 'Représailles', definition: "Toute mesure directe ou indirecte défavorable (mise à l'écart, changement de poste non justifié, dégradation des conditions, pression sociale) subie par une personne qui a signalé de bonne foi." },
      { term: 'Mesure conservatoire', definition: "Éloignement provisoire de la personne mise en cause, non disciplinaire et sans présomption de culpabilité, appliqué avant toute enquête pour protéger." },
      { term: 'Responsable Protection du Personnel', definition: "Personne nommée qui reçoit les signalements, évalue leur recevabilité et les oriente vers l'enquête. Dans le protocole du module, elle est le premier destinataire du signalement." },
    ],
  },
  {
    type: 'concept',
    title: 'Vos outils pour ce module',
    body: [
      "Le Code de Conduite de votre organisation est le document contractuel de référence. Ne le supposez jamais « générique » : chaque organisation a ses seuils de tolérance zéro, et c'est à vous de vérifier que la version utilisée sur le terrain est celle à jour du siège. Les deux templates du dossier 04-templates sont utilisés champ par champ dans les procédures qui suivent.",
      "Deux outils complémentaires ne sont pas des templates : un registre de sensibilisation et une fiche de réception de signalement. Les colonnes proposées sont le minimum recommandé ; vous les adaptez à votre mission.",
    ],
    table: {
      columns: ['Outil', "Ce qu'il contient", 'Utilisé dans'],
      rows: [
        ['grille-identification-precoce-burnout.xlsx', "Onglet « Suivi bien-etre » : colonnes A à H (Membre de l'equipe, Periode, quatre indicateurs notés de 0 à 3, Score de risque cumule, Statut) sur les lignes 5 à 24 ; onglet « Synthese par personne » : score maximum, nombre de périodes en ALERTE et « A surveiller »", 'Procédures 4 et 5'],
        ['protocole-signalement-psea-protection-personnel.docx', "5 sections (comment signaler, confidentialité, protection immédiate, orientation vers l'enquête, soutien) et deux tableaux finaux (Responsable Protection du Personnel et point focal RH ; rédacteur et date de mise à jour)", 'Procédures 3, 5, 7 et 8'],
        ['Code de Conduite à jour', "Comportements attendus et interdits, seuils de tolérance zéro de votre organisation", 'Procédures 1 et 2'],
        ['Registre de sensibilisation (à créer)', "Date, type, animateur, participants, contenu, questions, suivi", 'Procédures 1 et 2'],
      ],
    },
    pitfall: "Les noms de colonnes et d'onglets du classeur sont écrits sans accents dans le fichier. Recopiez-les tels quels, et ne les renommez pas : les formules de l'onglet de synthèse cherchent le nom exact de l'onglet « Suivi bien-etre ».",
  },

  // ─── Procédure 1 — Sensibilisation PSEA à l'arrivée ────────────────────
  {
    type: 'concept',
    title: "Procédure 1 — Sensibiliser réellement à la PSEA à l'arrivée (jour 1, jamais reporté)",
    body: "Faire signer le Code de Conduite entre le contrat et le formulaire bancaire n'est pas une sensibilisation. Cette procédure consacre un temps dédié, de 30 minutes, en tête-à-tête ou en petit groupe, où l'arrivant comprend pourquoi la règle existe, ce qui est interdit, où et comment signaler, et où il peut poser ses questions. Elle se prépare avant l'arrivée et se vérifie deux semaines après.",
    bullets: [
      "Étape 1 — Préparer la session avant l'arrivée.",
      "Étape 2 — Conduire la session en quatre temps.",
      "Étape 3 — Faire signer, remettre l'aide-mémoire et documenter dans le registre.",
      "Étape 4 — Vérifier la compréhension et faire le point individuel à deux semaines.",
    ],
    result: "Livrable 1 : une session tenue, le Code de Conduite signé après la session, une ligne dans le registre de sensibilisation et un point individuel à J+14 consigné.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: "Préparer la session avant l'arrivée",
    intro: "Entrées : le dossier d'embauche de chaque arrivant, la version à jour du Code de Conduite et les coordonnées réelles du canal de signalement (Procédure 3). Une session improvisée le matin de l'arrivée devient une lecture de texte.",
    steps: [
      {
        title: "Vérifiez le dossier d'embauche",
        actions: [
          "Ouvrez le dossier de chaque arrivant, journalier et bénévole compris.",
          "Vérifiez que la vérification des antécédents disciplinaires est faite et datée.",
          "Si elle manque, informez le HR Manager par écrit et demandez si l'arrivant peut être affecté au contact des bénéficiaires avant sa clôture.",
        ],
      },
      {
        title: 'Confirmez la version du Code de Conduite',
        actions: [
          "Demandez au HR Manager ou au RH siège la version en vigueur et sa date.",
          "Comparez-la avec les copies imprimées sur la base ; retirez les anciennes.",
          "Repérez dans votre Code les seuils de tolérance zéro à citer mot pour mot.",
        ],
      },
      {
        title: 'Préparez les quatre éléments de la session',
        actions: [
          "Un exemple concret et anonymisé du déséquilibre de pouvoir.",
          "La liste des comportements interdits, en phrases simples.",
          "Les coordonnées réelles du canal : numéro, adresse, emplacement de la boîte.",
          "Un créneau de 30 minutes dans une salle fermée, hors de la pile administrative.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vendredi 26 février 2027',
      lines: [
        "Arrivants du lundi 1er mars : P. Kanyere, Chauffeur (CDD), et J. Safari, Agent de distribution (CDD).",
        "Antécédents : références de P. Kanyere vérifiées le 19/02. Pour J. Safari, une référence manque : courriel à A. Kavira le 26/02.",
        "Réponse de A. Kavira : J. Safari est affecté au dépôt, sans contact avec les bénéficiaires, jusqu'à réception de la référence (attendue le 5 mars).",
        "Code de Conduite : version 3.1 du 15/01/2026 confirmée par le RH siège ; 3 copies de la version 2.4 retirées du classeur du dépôt.",
        "Créneau réservé : lundi 1er mars, 9 h 00 à 9 h 30, salle de réunion fermée. Les coordonnées du canal (complétées le 26/02) sont sur la carte aide-mémoire.",
      ],
    },
    result: "Fait quand : dossiers vérifiés, version du Code confirmée, quatre éléments prêts, créneau réservé.",
    pitfall: "Ne faites jamais la session en fin de pile administrative, entre le contrat et le formulaire bancaire : l'arrivant signe sans lire, et vous n'avez prouvé qu'une chose, que le papier existe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Conduire la session en quatre temps',
    intro: "Durée totale : 30 minutes. Parlez de situations, pas d'articles de loi. Chaque temps a un objectif et une phrase d'appui.",
    steps: [
      {
        title: 'Temps 1 (8 min) — Expliquer le pourquoi',
        actions: [
          "Racontez l'exemple anonymisé en trois phrases.",
          "Dites en une phrase le déséquilibre de pouvoir : nous décidons qui reçoit l'aide ou l'emploi.",
          "Terminez par : « la règle ne dépend pas du consentement apparent ».",
        ],
      },
      {
        title: 'Temps 2 (7 min) — Dire clairement les interdits',
        actions: [
          "Citez sans nuance les comportements strictement interdits de votre Code.",
          "Précisez l'obligation de signaler un collègue ; elle vaut pour tous.",
        ],
      },
      {
        title: 'Temps 3 (7 min) — Montrer où signaler',
        actions: [
          "Donnez les quatre points d'entrée avec numéro, adresse et emplacement réels.",
          "Dites l'engagement de non-représailles et l'accusé de réception sous 48 heures.",
        ],
      },
      {
        title: 'Temps 4 (8 min) — Laisser un temps de questions',
        actions: [
          "Demandez : « Qu'est-ce qui n'est pas clair, ou qui vous paraît difficile à appliquer ici ? »",
          "Dites que l'on peut revenir vous voir seul(e) ensuite.",
        ],
      },
    ],
    example: {
      title: 'Phrases d\'appui — session du 1er mars, à adapter',
      lines: [
        "Pourquoi : « Dans une autre mission, un agent qui tenait la liste des bénéficiaires a laissé entendre à une veuve qu'elle y figurerait si elle était gentille. Il pensait qu'elle était d'accord puisqu'elle n'avait pas protesté. Il a été licencié. »",
        "Interdits : « Tout contact sexuel avec un bénéficiaire est interdit, quel que soit son âge et son consentement apparent. Tout échange d'aide, d'emploi ou de service contre un acte sexuel est interdit. »",
        "Signaler : « Vous avez quatre portes, jamais une seule. Si votre superviseur est concerné, vous n'avez pas à passer par lui. »",
        "Questions : « Si vous préférez me poser une question en tête-à-tête, ma porte reste ouverte. »",
      ],
    },
    result: "Fait quand : les quatre temps sont passés, et l'arrivant sait citer un interdit et un point d'entrée sans regarder la carte.",
    tip: "Faites le tour du lieu avec l'arrivant : montrez-lui la boîte de signalement. Une boîte qu'on n'a jamais vue n'existe pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: "Faire signer, remettre l'aide-mémoire et documenter",
    intro: "La signature vient après la session, jamais avant. La session n'a de valeur pour un audit que si elle est enregistrée avec sa date, ses participants et son contenu.",
    steps: [
      {
        title: 'Faites signer après la session',
        actions: [
          "Remettez le Code de Conduite à jour (version et date visibles) et faites signer en deux exemplaires.",
          "Classez l'exemplaire signé dans le dossier individuel.",
        ],
      },
      {
        title: "Remettez la carte aide-mémoire",
        actions: [
          "Remettez une carte au format poche : interdits en trois lignes, quatre points d'entrée, engagement de non-représailles.",
          "Vérifiez que les numéros imprimés sont ceux du protocole validé.",
        ],
      },
      {
        title: 'Inscrivez la session au registre de sensibilisation',
        actions: [
          "Ouvrez le registre (un tableau partagé en accès restreint).",
          "Saisissez : Date, Type (arrivée ou rappel), Animateur, Participants (nom et fonction), Contenu abordé, Questions soulevées, Suivi nécessaire.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Type', 'Animateur', 'Participants', 'Contenu abordé', 'Questions / suivi'],
      rows: [
        ['01/03/2027', 'Arrivée', 'N. Mbusa', 'P. Kanyere (Chauffeur) ; J. Safari (Agent de distribution)', 'Pourquoi, interdits, 4 points d\'entrée, non-représailles ; Code v3.1 signé', 'Question de P. Kanyere sur le transport de bénéficiaires ; point à J+14 le 15/03'],
      ],
    },
    result: "Fait quand : le Code signé est dans le dossier, la carte est remise et la ligne du registre est complète. La source exige au minimum la date, les participants et le contenu abordé.",
    pitfall: "Ne photographiez pas la feuille de présence « pour plus tard ». Une session non inscrite le jour même est une session que vous ne pourrez pas prouver à l'audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Vérifier la compréhension et faire le point à deux semaines',
    intro: "Un nouvel employé qui n'ose pas poser une question sur un sujet aussi sensible en session doit savoir qu'il peut revenir. Fixez le rendez-vous vous-même plutôt que d'attendre qu'il vienne.",
    steps: [
      {
        title: 'Posez trois questions de vérification',
        actions: [
          "« Citez-moi deux comportements interdits. »",
          "« Que faites-vous si c'est votre superviseur qui est concerné ? »",
          "« Que se passe-t-il pour vous si vous signalez de bonne foi ? »",
        ],
      },
      {
        title: 'Planifiez et tenez le point à J+14',
        actions: [
          "Posez un rendez-vous individuel de 15 minutes, 14 jours après l'arrivée.",
          "Demandez ce qui a été vu, entendu, ou ce qui reste flou.",
          "Notez dans la colonne « Questions / suivi » du registre.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 15 mars 2027, 15 minutes avec P. Kanyere',
      lines: [
        "Question de P. Kanyere : « Puis-je déposer en ville une femme du site qui me le demande ? »",
        "Réponse selon le Code de KSS : pas de transport privé de bénéficiaires, sauf urgence médicale organisée avec le Base Manager. Un refus poli suffit : « C'est la règle pour tout le monde, ce n'est pas contre vous. »",
        "Ligne du registre complétée le 15/03 : « Point J+14 tenu ; 3 questions vérifiées correctement ; règle sur le transport réexpliquée. »",
      ],
    },
    result: "Fait quand : l'arrivant a répondu aux trois questions et la ligne du registre mentionne le point à J+14.",
    tip: "La question la plus utile d'un point à J+14 est : « Qu'avez-vous vu depuis votre arrivée qui vous a paru limite ? » Elle n'accuse personne et ouvre la porte.",
  },

  // ─── Procédure 2 — Rappel en cours de mission ──────────────────────────
  {
    type: 'concept',
    title: 'Procédure 2 — Réactiver la sensibilisation PSEA en cours de mission',
    body: "Une sensibilisation faite une seule fois, un jour d'accueil chargé en informations, s'oublie. Programmez un rappel a minima tous les 6 mois pour l'ensemble du personnel, et systématiquement lors d'un changement significatif de contexte : nouvelle zone d'intervention, nouveau type de population bénéficiaire, arrivée d'un nouveau responsable d'équipe. Le rappel peut être court, 15 minutes, mais il doit être régulier et documenté.",
    bullets: [
      "Étape 1 — Construire le calendrier annuel des rappels.",
      "Étape 2 — Préparer un rappel de 15 minutes.",
      "Étape 3 — Animer, rattraper les absents et enregistrer.",
      "Étape 4 — Mesurer la couverture et rendre compte.",
    ],
    result: "Livrable 2 : un calendrier annuel des rappels, un registre à jour et un taux de couverture chiffré.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 4',
    title: 'Construire le calendrier annuel des rappels',
    intro: "Entrée : le registre de sensibilisation, qui donne la date de la dernière session collective. Le calendrier se lit à l'envers : on part de l'échéance, pas de la bonne volonté.",
    steps: [
      {
        title: "Calculez l'échéance",
        actions: [
          "Ouvrez le registre et repérez la dernière session collective.",
          "Ajoutez 6 mois : c'est l'échéance maximale.",
          "Planifiez la date réelle au moins 5 jours avant l'échéance.",
        ],
      },
      {
        title: 'Listez les déclencheurs de contexte',
        actions: [
          "Interrogez le Base Manager et la Coordination : nouvelle zone, nouvelle population, nouveau responsable d'équipe, ouverture d'un site.",
          "Ajoutez après tout incident grave un rappel ciblé.",
        ],
      },
      {
        title: 'Posez les dates dans le calendrier partagé',
        actions: [
          "Créez les événements avec une alerte à J-14 pour vous et pour le Base Manager.",
          "Indiquez l'animateur, le public et la durée.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Déclencheur', 'Public', 'Animateur', 'Durée'],
      rows: [
        ['Mar. 16/03/2027', 'Échéance 6 mois (dernier rappel : 22/09/2026)', 'Tous les salariés et journaliers présents', 'N. Mbusa', '15 min'],
        ['Mer. 24/03/2027', 'Rattrapage des absents du 16/03', 'Absents du 16/03', 'N. Mbusa', '15 min'],
        ['Ven. 02/04/2027', 'Ouverture du nouveau site de distribution le 05/04', 'Équipe du site et journaliers', 'N. Mbusa + Base Manager', '20 min'],
        ['Sept. 2027', 'Échéance 6 mois suivante (16/03 + 6 mois)', 'Tous', 'N. Mbusa', '15 min'],
      ],
    },
    result: "Fait quand : chaque échéance a une date, un animateur et une alerte. L'échéance du 22/03/2027 est tenue avec six jours d'avance.",
    tip: "Un rappel « post-incident » n'est pas une punition : il rappelle les canaux au moment où l'équipe a le plus besoin de savoir qu'elle peut parler.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 4',
    title: 'Préparer un rappel de 15 minutes',
    intro: "Un rappel n'est pas une deuxième session d'accueil. C'est un message unique, ancré dans une situation que l'équipe reconnaît.",
    steps: [
      {
        title: 'Choisissez un seul message',
        actions: [
          "Prenez le contexte du moment (distribution, recrutement de journaliers, chantier).",
          "Formulez le message en une phrase : « qui contrôle l'accès à une ressource détient un pouvoir ».",
        ],
      },
      {
        title: 'Préparez un scénario et deux questions',
        actions: [
          "Écrivez un scénario anonymisé de quatre phrases, en lien avec le terrain.",
          "Préparez deux questions ouvertes pour lancer la discussion.",
          "Relisez les coordonnées du canal : changent-elles ? Mettez-les à jour sur la carte et l'affiche.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — rappel du mardi 16 mars 2027',
      lines: [
        "Message : « À Goma, chacun d'entre nous contrôle quelque chose que d'autres attendent : une liste, un véhicule, un emploi journalier. »",
        "Scénario : « Un journalier propose chaque semaine de déposer une jeune femme du site en ville et lui demande un petit merci. Rien n'est dit de plus. Est-ce un problème ? »",
        "Questions : « Qu'est-ce qui vous mettrait mal à l'aise dans cette scène ? À qui en parleriez-vous, si c'était votre collègue ? »",
        "Canal : numéro et adresse inchangés ; rappel que la boîte est relevée le lundi et le jeudi.",
      ],
    },
    result: "Fait quand : le message, le scénario et les deux questions tiennent sur une demi-page et se disent en 15 minutes.",
    pitfall: "Ne relisez pas le Code de Conduite article par article : au bout de trois minutes, personne n'écoute, et vous avez perdu la seule chose que le rappel doit produire, la discussion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 4',
    title: 'Animer, rattraper les absents et enregistrer',
    intro: "Le rappel doit toucher tout le monde : équipes de nuit, gardiens, journaliers, personnel des sites éloignés. Ceux qui manquent sont souvent ceux qui sont le plus exposés.",
    steps: [
      {
        title: 'Animez en point fixe',
        actions: [
          "Placez le rappel à l'ordre du jour de la réunion d'équipe du mardi, en point fixe, pas dans « divers ».",
          "Faites circuler la feuille de présence à signer.",
          "Limitez-vous à 15 minutes ; laissez la discussion sur le scénario prendre la moitié du temps.",
        ],
      },
      {
        title: 'Rattrapez les absents',
        actions: [
          "Comparez la feuille de présence à la liste des salariés et des journaliers du jour.",
          "Planifiez un rattrapage de 15 minutes dans les 10 jours pour chaque absent.",
        ],
      },
      {
        title: 'Complétez le registre',
        actions: [
          "Saisissez la ligne : date, type « rappel », participants, contenu, questions, suivi.",
          "Ajoutez une seconde ligne pour le rattrapage une fois fait.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mardi 16 mars 2027, 8 h 15',
      lines: [
        "Présents : 31 salariés sur 36 et 14 journaliers sur les 18 présents sur site ce jour-là.",
        "Taux de couverture : (31 + 14) / (36 + 18) = 45 / 54 = 83 %.",
        "Rattrapage mercredi 24 mars : 5 salariés et 4 journaliers, soit 9 personnes ; couverture finale 54 / 54 = 100 %.",
        "Question soulevée par un journalier : « Si je vois un collègue demander un service à une bénéficiaire, je dois en parler à qui ? » Réponse : n'importe laquelle des quatre portes, et sans avoir à prouver.",
      ],
    },
    result: "Fait quand : le registre contient deux lignes (rappel et rattrapage) et la couverture finale est de 100 % des personnes présentes sur la base à cette date.",
    tip: "Notez les questions des participants : elles montrent ce que l'équipe comprend de travers, et elles alimentent le scénario du prochain rappel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 4',
    title: 'Mesurer la couverture et rendre compte',
    intro: "Un rappel sans chiffres est invisible pour la hiérarchie et pour le bailleur. Quatre indicateurs suffisent et se calculent à partir du registre et des signalements.",
    steps: [
      {
        title: 'Calculez les quatre indicateurs',
        actions: [
          "Taux de couverture = personnes sensibilisées / personnes présentes sur la base.",
          "Délai entre l'échéance et le rappel (en jours, jamais négatif sans justification).",
          "Nombre de questions ou préoccupations remontées pendant la session.",
          "Nombre de signalements reçus, par canal, sans identité.",
        ],
      },
      {
        title: 'Envoyez une ligne de compte rendu au HR Manager',
        actions: [
          "Joignez l'extrait du registre.",
          "Ajoutez une phrase d'interprétation : ce qui va bien, ce qui reste à faire.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Valeur au 31/03/2027', 'Lecture'],
      rows: [
        ['Taux de couverture du rappel de mars', '100 % (45/54 le 16/03, 54/54 le 24/03)', 'Objectif atteint avec 8 jours de rattrapage'],
        ["Délai par rapport à l'échéance du 22/03", '6 jours d\'avance', 'Échéance tenue'],
        ['Questions remontées', '5, dont 2 sur le transport et 1 sur la boîte de signalement', 'Éléments pour le prochain rappel'],
        ['Signalements reçus depuis le 26/02', '1 (oral, nominatif)', 'Le canal est utilisé ; traité selon la Procédure 7'],
      ],
    },
    result: "Fait quand : les quatre indicateurs sont calculés à partir du registre et du suivi des signalements, et le HR Manager les a reçus.",
    pitfall: "Ne présentez pas la hausse des signalements comme une dégradation. Dites-le d'avance à votre hiérarchie : après un canal accessible, c'est souvent le signe que le système fonctionne.",
  },

  // ─── Procédure 3 — Canal de signalement et protocole ───────────────────
  {
    type: 'concept',
    title: 'Procédure 3 — Construire un canal de signalement réellement sécurisé',
    body: "Un canal qui n'existe que sur le papier (« contactez votre superviseur direct », alors que le superviseur peut être la personne mise en cause) n'est pas un canal sécurisé. Construisez le canal avant d'en avoir besoin : plusieurs points d'entrée, une option vraiment anonyme, un engagement de non-représailles et un accusé de réception systématique. Tout cela se formalise dans le protocole, que vous complétez champ par champ.",
    bullets: [
      "Étape 1 — Tester l'existant avec les yeux d'une victime potentielle.",
      "Étape 2 — Définir les points d'entrée et l'option anonyme.",
      "Étape 3 — Compléter la section 1 du protocole (champs « à compléter »).",
      "Étape 4 — Relire les sections 2 et 3 : confidentialité et protection immédiate.",
      "Étape 5 — Relire les sections 4 et 5 et compléter les deux tableaux finaux.",
      "Étape 6 — Valider, afficher, diffuser et tester à blanc.",
    ],
    result: "Livrable 3 : protocole-signalement-psea-protection-personnel.docx complété, validé par écrit, affiché, et un test à blanc consigné.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: "Tester l'existant avec les yeux d'une victime potentielle",
    intro: "Avant de construire, regardez ce qui existe. Placez-vous successivement dans la peau d'une bénéficiaire, d'une salariée, d'un journalier. La question n'est pas « le canal existe-t-il ? » mais « pourrais-je l'utiliser si la personne concernée était mon chef ? ».",
    steps: [
      {
        title: 'Listez tous les canaux existants',
        actions: [
          "Relevez ce que dit le manuel RH, le règlement intérieur, les affiches et le Code de Conduite.",
          "Notez chaque boîte, ligne ou adresse qui existe réellement.",
        ],
      },
      {
        title: 'Posez les cinq questions de test à chaque canal',
        actions: [
          "Peut-on l'utiliser si le superviseur direct est la personne mise en cause ?",
          "Est-il réellement anonyme : qui ouvre la boîte, qui détient la clé, qui est vu en train d'y déposer un mot ?",
          "Le personnel et les bénéficiaires le connaissent-ils, dans leur langue ?",
          "Y a-t-il un accusé de réception ?",
          "Est-il utilisable par une personne qui ne sait pas écrire ?",
        ],
      },
      {
        title: 'Faites un essai réel',
        actions: [
          "Appelez la ligne depuis un téléphone personnel ; notez le délai de réponse.",
          "Envoyez un courriel test ; notez si un accusé arrive.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mercredi 24 février 2027, audit du canal de Goma',
      lines: [
        "Superviseur direct : existe, inutilisable si le superviseur est concerné, non anonyme, connu de tous → insuffisant seul.",
        "Boîte à suggestions du dépôt : existe, clé détenue par le Base Manager, tout le monde le sait → non anonyme, à remplacer.",
        "Ligne du siège (anglais uniquement) : 2 appels tests, pas de réponse en français ni en swahili → à remplacer par une ligne régionale.",
        "Adresse courriel confidentielle : n'existe pas.",
        "Accusé de réception : aucun canal n'en prévoit.",
      ],
    },
    result: "Fait quand : chaque canal existant a un verdict écrit et une liste de failles est prête pour l'étape 2.",
    pitfall: "Ne testez pas votre canal en demandant à votre équipe si « tout va bien ». Testez-le comme le ferait une victime : en essayant réellement de l'utiliser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: "Définir les points d'entrée et l'option anonyme",
    intro: "Le principe est simple : jamais un seul point d'entrée, jamais une seule personne. Chaque canal doit pouvoir fonctionner si l'un des autres est précisément lié à la personne mise en cause.",
    steps: [
      {
        title: 'Choisissez au moins trois canaux indépendants',
        actions: [
          "Une ligne téléphonique gérée hors de la ligne hiérarchique locale (niveau régional ou siège).",
          "Une adresse courriel consultée uniquement par le Responsable Protection du Personnel.",
          "Une boîte physique fermée à clé, relevée par une personne extérieure à l'équipe locale.",
          "Le signalement oral direct à tout membre de l'encadrement RH, du management ou de la coordination.",
        ],
      },
      {
        title: "Nommez un responsable et un suppléant pour chaque canal",
        actions: [
          "Inscrivez le nom, la plage horaire et la langue de réponse.",
          "Décidez qui détient la clé de la boîte et à quel rythme elle est relevée.",
        ],
      },
    ],
    table: {
      columns: ['Canal', 'Qui le gère', 'Pourquoi il est sûr', 'Anonyme ?'],
      rows: [
        ['Ligne téléphonique dédiée', 'M. Tshibangu, Responsable Protection du Personnel, Kinshasa ; suppléant : A. Kavira', "Hors ligne hiérarchique de Goma ; swahili et français ; messagerie vocale hors heures", 'Oui, sans donner son nom'],
        ['Courriel confidentiel', 'M. Tshibangu seul', 'Aucune copie à la base ; adresse non nominative', 'Oui, avec une adresse neutre'],
        ['Boîte physique fermée à clé', 'Clé détenue par M. Tshibangu ou son délégué de Kinshasa ; relevée le lundi et le jeudi', "Placée hors de vue de la cellule logistique ; jamais ouverte par un salarié de Goma", 'Oui'],
        ['Signalement oral', 'N. Mbusa, A. Kavira, E. Kasongo, H. Mwamba ; chacun doit transmettre sans délai', "Quatre personnes, dont deux hors de Goma", 'Non, mais confidentiel'],
      ],
    },
    result: "Fait quand : au moins un canal est anonyme, aucun n'est géré par la seule hiérarchie locale, et chaque canal a un titulaire et un suppléant nommés.",
    pitfall: "Ne vous placez pas comme point de contact unique. Si vous êtes la seule porte, la personne mise en cause peut être votre ami, et vous devenez le problème.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Compléter la section 1 du protocole : comment signaler',
    intro: "Ouvrez protocole-signalement-psea-protection-personnel.docx. Le document porte, sous le titre et l'objectif, la section « 1. Comment signaler une préoccupation » : trois lignes contiennent un champ entre crochets à remplacer, une quatrième décrit le signalement oral et n'en contient pas.",
    steps: [
      {
        title: 'Remplacez les trois champs entre crochets',
        actions: [
          "Ligne téléphonique : remplacez « [à compléter par la mission] » par le numéro, les jours et heures, les langues.",
          "Adresse courriel : remplacez « [à compléter] » par l'adresse complète.",
          "Boîte de signalement : remplacez « [emplacement à compléter] » par le lieu précis et le rythme de relève.",
        ],
      },
      {
        title: 'Conservez le reste de la section',
        actions: [
          "Gardez la quatrième ligne : le signalement oral avec obligation de transmission sans délai.",
          "Gardez le paragraphe sur le signalement nominatif ou anonyme et l'accusé de réception sous 48 heures.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 1 complétée le jeudi 25 février 2027',
      lines: [
        "Ligne téléphonique dédiée, gérée au niveau régional (hors ligne hiérarchique locale) : +243 80 000 0000 (numéro fictif), du lundi au samedi de 7 h à 18 h, en swahili et en français ; messagerie vocale en dehors de ces heures.",
        "Adresse courriel confidentielle, consultée uniquement par le/la Responsable Protection du Personnel : protection@kss-exemple.org (adresse fictive).",
        "Boîte de signalement physique fermée à clé, relevée par une personne extérieure à l'équipe locale : couloir du dépôt de Goma, côté parking, hors vue de la cellule logistique ; relevée le lundi et le jeudi par le délégué de Kinshasa.",
        "Signalement oral direct : paragraphe conservé tel quel.",
      ],
    },
    result: "Fait quand : plus aucun crochet « à compléter » ne reste dans la section 1, et chaque coordonnée a été testée au moins une fois.",
    pitfall: "Ne laissez pas un seul champ vide « pour plus tard ». Un protocole affiché avec un crochet visible est pire que pas de protocole : il montre que personne n'y croit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Relire les sections 2 et 3 : confidentialité et protection immédiate',
    intro: "Ces deux sections n'ont pas de champ à remplir : elles contiennent les engagements. Votre travail est de vérifier qu'ils sont tenables par votre mission et qu'ils s'accordent avec votre politique institutionnelle.",
    steps: [
      {
        title: 'Vérifiez la section 2 : garantie de confidentialité',
        actions: [
          "Contrôlez les rôles cités : Responsable Protection du Personnel, RH senior et, si besoin, le siège.",
          "Vérifiez que l'engagement de non-représailles couvre mise à l'écart, changement de poste non justifié, dégradation des conditions et pression sociale organisée.",
          "Vérifiez la phrase qui fait de la violation de confidentialité une faute disciplinaire grave.",
        ],
      },
      {
        title: 'Vérifiez la section 3 : mesures de protection immédiate',
        actions: [
          "Relisez les trois mesures : éloignement provisoire de la personne mise en cause, évaluation du risque de sécurité, information de la coordination, du siège et des bailleurs.",
          "Notez dans votre propre procédure interne qui décide de l'éloignement (sur le fil rouge : le Head of Mission, sur proposition du RH).",
          "Notez le délai d'information des bailleurs prévu par votre politique institutionnelle.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — relecture de N. Mbusa avec A. Kavira, jeudi 25 février 2027',
      lines: [
        "Section 2 : rôles conformes à l'organigramme de KSS ; aucun changement nécessaire.",
        "Section 3 : la mesure d'éloignement est décidée par H. Mwamba, Head of Mission, sur proposition du HR Manager ; le RH la prépare et la notifie.",
        "Politique institutionnelle : le délai d'information du bailleur est celui de l'accord de partenariat ; A. Kavira le vérifiera avant le 5 mars.",
        "Aucun engagement du protocole n'a été affaibli : le texte est conservé tel quel.",
      ],
    },
    result: "Fait quand : chaque engagement des sections 2 et 3 est vérifié, et votre procédure interne dit qui décide de quoi.",
    tip: "Si votre politique impose un délai plus court que celui du protocole, remplacez le chiffre. Si elle impose un délai plus long, ne l'allongez jamais : le protocole est un minimum de protection.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Relire les sections 4 et 5 et compléter les deux tableaux finaux',
    intro: "La section 4 fixe l'orientation vers l'enquête (5 jours ouvrés, enquêteur sans lien hiérarchique). La section 5 fixe le soutien à la personne qui signale. Les deux tableaux de fin de document identifient les responsables et datent la version.",
    steps: [
      {
        title: 'Vérifiez les sections 4 et 5',
        actions: [
          "Section 4 : identifiez qui est l'enquêteur sans lien hiérarchique et qui prend le relais en cas de conflit d'intérêt (enquêteur externe).",
          "Section 5 : identifiez la ressource psychosociale réelle (psychologue conventionné, ligne d'écoute).",
        ],
      },
      {
        title: 'Complétez le premier tableau final',
        actions: [
          "Case « Responsable Protection du Personnel (nom, contact) » : nom, fonction, téléphone, courriel.",
          "Case « Point focal RH pour ce document » : votre nom et vos coordonnées.",
        ],
      },
      {
        title: 'Complétez le second tableau final',
        actions: [
          "Case « Rédigé par (nom, fonction) » : l'auteur du document.",
          "Case « Date de dernière mise à jour » : la date de la validation, à rafraîchir à chaque modification.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — tableaux finaux au vendredi 26 février 2027',
      lines: [
        "Responsable Protection du Personnel (nom, contact) : M. Tshibangu, Kinshasa, +243 80 000 0000 (fictif), protection@kss-exemple.org (fictive).",
        "Point focal RH pour ce document : N. Mbusa, HR Officer, base de Goma.",
        "Rédigé par (nom, fonction) : N. Mbusa, HR Officer ; relu par A. Kavira, HR Manager de mission.",
        "Date de dernière mise à jour : 26/02/2027.",
        "Section 4 : enquêteur désigné par le siège (unité d'enquête) ; si un lien existe avec la base de Goma, enquêteur externe.",
        "Section 5 : ressource psychosociale : psychologue conventionné à Goma, séances prises en charge par KSS.",
      ],
    },
    result: "Fait quand : les quatre cases des deux tableaux finaux sont remplies et les ressources citées aux sections 4 et 5 existent réellement.",
    pitfall: "Ne mettez pas un nom d'enquêteur ou de psychologue que vous n'avez pas contacté. Le jour où une victime l'appellera, elle doit trouver quelqu'un.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Valider, afficher, diffuser et tester à blanc',
    intro: "Un protocole non validé n'engage personne. Un protocole non affiché n'est pas connu. Un protocole non testé ne fonctionne probablement pas.",
    steps: [
      {
        title: 'Faites valider par écrit',
        actions: [
          "Envoyez le document au HR Manager et au Responsable Protection du Personnel.",
          "Archivez leurs réponses dans le dossier de prise de poste.",
        ],
      },
      {
        title: 'Affichez et diffusez',
        actions: [
          "Imprimez en A4 dans le dépôt, les bureaux, la salle de réunion et les sites de distribution, en français et en swahili.",
          "Remettez-le avec la carte aide-mémoire à chaque arrivant (Procédure 1).",
          "Rappelez-le à chaque session de sensibilisation (Procédure 2).",
        ],
      },
      {
        title: 'Faites un test à blanc',
        actions: [
          "Appelez la ligne, envoyez un courriel, déposez un message test dans la boîte.",
          "Mesurez le délai jusqu'à l'accusé de réception ; corrigez ce qui ne marche pas.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — test à blanc du vendredi 26 février 2027',
      lines: [
        "Appel à 15 h 05 depuis un téléphone personnel : réponse en 4 minutes, en swahili. Conforme.",
        "Courriel envoyé à 15 h 20 : accusé de réception reçu le samedi 27/02 à 9 h 00, soit moins de 48 heures. Conforme.",
        "Message test déposé dans la boîte à 15 h 30 : relevé le lundi 1er mars, accusé collectif affiché le mardi 2 mars. À améliorer : l'affiche doit dire que la boîte est relevée le lundi et le jeudi.",
        "Affiche en swahili manquante sur le site 2 : corrigée le 3 mars.",
        "Test consigné et à répéter tous les 6 mois, en même temps que le rappel PSEA.",
      ],
    },
    result: "Fait quand : le protocole est validé par écrit, affiché dans tous les lieux, et chaque canal a répondu à un test réel. C'est votre Livrable 3.",
    pitfall: "Ne testez pas avec le numéro du bureau ou en prévenant le titulaire. Un test qui n'est pas anonyme ne mesure pas ce que verra une victime.",
  },

  // ─── Procédure 4 — Grille d'identification précoce du burnout ──────────
  {
    type: 'concept',
    title: "Procédure 4 — Mettre en place le suivi périodique du bien-être avec la grille",
    body: [
      "Le suivi du bien-être ne se limite pas à l'entretien annuel. Ouvrez grille-identification-precoce-burnout.xlsx et instaurez un rythme de mise à jour régulier : mensuel en contexte stable, bimensuel ou hebdomadaire en contexte de forte pression (urgence, insécurité, sous-effectif prolongé). Pour chaque membre de l'équipe, vous notez les indicateurs observables de la période. Ce n'est pas un outil de diagnostic médical ni de surveillance punitive : c'est un outil de vigilance managériale, à faire vivre en réunion RH-management, pas à remplir seul dans un coin.",
      "Le classeur contient deux onglets. « Suivi bien-etre » : en-têtes en ligne 4, saisie sur les lignes 5 à 24 (20 lignes). Colonnes A « Membre de l'equipe », B « Periode », C « Irritabilite inhabituelle (0-3) », D « Absenteisme croissant (0-3) », E « Baisse d'engagement (0-3) », F « Taux d'erreurs inhabituel (0-3) », G « Score de risque cumule », H « Statut ». Seuils : 0 à 4 = OK, 5 à 7 = A surveiller, 8 à 12 = ALERTE. « Synthese par personne » : score maximum atteint, nombre de périodes en ALERTE, nombre de périodes « A surveiller ».",
    ],
    bullets: [
      "Étape 1 — Préparer le classeur de travail et informer l'équipe.",
      "Étape 2 — Calibrer l'échelle de 0 à 3 de chaque indicateur.",
      "Étape 3 — Collecter les observations avant la réunion.",
      "Étape 4 — Saisir les scores période par période.",
      "Étape 5 — Lire les statuts, la tendance et l'onglet de synthèse.",
      "Étape 6 — Tenir la revue RH-management.",
    ],
    result: "Livrable 4 : une grille de l'équipe logistique alimentée sur trois périodes, avec un onglet de synthèse à jour et un compte rendu de revue.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Préparer le classeur de travail et informer l\'équipe',
    intro: "Le fichier contient des données sensibles sur des personnes. Préparez-le comme tel : copie dédiée, accès restreint, équipe informée. Le template contient aussi un exemple (Jonas K., lignes 5 à 8) que vous devez retirer de votre copie de travail.",
    steps: [
      {
        title: 'Créez la copie de travail',
        actions: [
          "Conservez une copie intacte du template (avec l'exemple de Jonas K.) pour l'exercice.",
          "Enregistrez une copie sous « Grille_burnout_Logistique_Goma_2027-03.xlsx » dans un dossier à accès réservé au RH et au HR Manager.",
        ],
      },
      {
        title: "Retirez l'exemple sans casser les formules",
        actions: [
          "Dans « Suivi bien-etre », sélectionnez A5:F8 et effacez le contenu (touche Suppr).",
          "Ne touchez pas aux colonnes G et H : ce sont des formules.",
          "Copiez G9:H9 et collez-les sur G5:H8 : les lignes vides resteront blanches au lieu d'afficher « 0 » et « OK ».",
        ],
      },
      {
        title: "Annoncez l'outil à l'équipe",
        actions: [
          "Dites à l'équipe que la grille existe, à quoi elle sert (repérer tôt et soutenir), qui y accède, et qu'elle ne sert jamais à sanctionner.",
          "Précisez que chacun peut demander à voir sa propre ligne.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 1er mars 2027',
      lines: [
        "Fichier : Grille_burnout_Logistique_Goma_2027-03.xlsx, dossier « RH_Confidentiel », accès : N. Mbusa et A. Kavira.",
        "Périmètre pilote : équipe logistique de Goma, 5 personnes (L. Katembo, S. Ndagano, R. Amani, B. Kitoko, T. Rukundo). Extension à la base en avril.",
        "Capacité : 5 personnes × 3 périodes = 15 lignes, soit les lignes 5 à 19 ; il reste 5 lignes libres.",
        "Annonce à l'équipe lors de la réunion du 1er mars, par E. Kasongo et N. Mbusa, avec l'accord de A. Kavira.",
      ],
    },
    result: "Fait quand : l'exemple est retiré, les lignes vides sont blanches, le fichier est en accès restreint et l'équipe est informée.",
    pitfall: "Ne rajoutez jamais de lignes sous la ligne 24 : formules, validations, couleurs et onglet de synthèse s'arrêtent là. Pour plus de lignes, insérez des lignes à l'intérieur de la plage (par exemple au-dessus de la ligne 24) et recopiez les formules, ou ouvrez un fichier par trimestre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: "Calibrer l'échelle de 0 à 3 de chaque indicateur",
    intro: "Le template indique seulement : 0 (absent) à 3 (marqué). Sans repères communs, deux observateurs noteront très différemment. Rédigez une page d'ancrage, faites-la valider, puis appliquez-la à tous. Le tableau ci-dessous est une proposition de ce module, à adapter ; il n'est pas dans le fichier.",
    steps: [
      {
        title: "Rédigez les repères observables",
        actions: [
          "Pour chaque indicateur, écrivez ce qu'on voit à 0, 1, 2 et 3, avec des faits et jamais des adjectifs.",
          "Comparez toujours la personne à elle-même, pas aux autres.",
        ],
      },
      {
        title: 'Faites valider et diffusez aux évaluateurs',
        actions: [
          "Validez avec le HR Manager et le Base Manager.",
          "Remettez la page d'ancrage à toute personne qui fournit des observations.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', '0', '1', '2', '3'],
      rows: [
        ['Irritabilité inhabituelle', 'Aucun écart', 'Une ou deux réactions inhabituelles, une seule source', 'Réactions répétées, vues par plusieurs personnes', "Conflits ouverts ou propos blessants, intervention du manager nécessaire"],
        ['Absentéisme croissant', 'Aucune absence imprévue', 'Une ou deux absences courtes, motif vague', "Absences qui se répètent d'une période à l'autre", 'Absences fréquentes ou arrêt non anticipé'],
        ["Baisse d'engagement", 'Participation habituelle', 'Moins de propositions, moins de présence informelle', "Strict minimum, retrait des échanges, ponctualité « à la minute »", 'Désinvestissement net, ne répond plus aux sollicitations non obligatoires'],
        ["Taux d'erreurs inhabituel", 'Aucune erreur inhabituelle', 'Une erreur mineure corrigée', 'Deux erreurs, ou une erreur avec impact (rapport, stock)', 'Erreur à impact opérationnel ou erreurs multiples'],
      ],
    },
    result: "Fait quand : chaque indicateur a quatre repères observables, validés par le HR Manager et le Base Manager.",
    pitfall: "Ne notez pas la personne par rapport au « bon employé » idéal. Un chef d'équipe calme de nature qui devient cassant doit scorer plus qu'un collègue réputé impulsif qui reste égal à lui-même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Collecter les observations avant la réunion',
    intro: "Les scores viennent de faits datés, pas de l'impression du moment. Collectez-les trois jours avant la revue auprès des sources qui voient réellement la personne.",
    steps: [
      {
        title: "Identifiez une source par indicateur",
        actions: [
          "Irritabilité : le manager direct et un collègue, avec date et circonstance.",
          "Absentéisme : le registre de présence et les demandes de congé, jamais la mémoire.",
          "Engagement : la participation aux réunions et aux initiatives, observée par le manager.",
          "Erreurs : rapports de stock, contrôles, incidents consignés.",
        ],
      },
      {
        title: 'Demandez un fait par score supérieur à zéro',
        actions: [
          "Pour tout score de 1 à 3, demandez une observation datée : « le 3 mars, en réunion, il a répondu sèchement à… ».",
          "Refusez un score sans fait : il restera à zéro.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche de collecte pour L. Katembo, période du 1er au 14 mars 2027',
      lines: [
        "Irritabilité : « Le 3 mars, en réunion, a répondu sèchement à B. Kitoko sur un écart de stock » ; « le 10 mars, a élevé la voix contre un chauffeur ». Source : E. Kasongo. Score proposé : 2.",
        "Absentéisme : 2 absences d'un jour (4 et 11 mars), motif « fatigue » ; une absence similaire en février. Source : registre de présence. Score proposé : 2.",
        "Engagement : n'anime plus le point de fin de journée depuis le 5 mars ; arrive et part à l'heure exacte. Source : E. Kasongo. Score proposé : 2.",
        "Erreurs : une erreur de quantité dans le rapport de stock du 9 mars, signalée par B. Kitoko. Source : rapport de stock. Score proposé : 1.",
      ],
    },
    result: "Fait quand : chaque score supérieur à zéro est relié à au moins un fait daté et à une source nommée.",
    tip: "Ne demandez pas à l'équipe de noter ses collègues. Demandez au manager direct et croisez avec les données objectives : registre de présence, rapports, incidents.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Saisir les scores période par période',
    intro: "Une ligne par personne et par période. Vous ajoutez des lignes, vous n'effacez jamais l'historique : c'est la courbe qui alerte, pas le point.",
    steps: [
      {
        title: "Saisissez la première ligne libre de l'onglet « Suivi bien-etre »",
        actions: [
          "Colonne A « Membre de l'equipe » : le nom, recopié identique à chaque période (copier-coller).",
          "Colonne B « Periode » : un libellé clair et stable, par exemple « 15-28 fev. 2027 ».",
          "Colonnes C à F : un entier de 0 à 3.",
        ],
      },
      {
        title: 'Laissez les formules faire leur travail',
        actions: [
          "Ne touchez pas à G « Score de risque cumule » (somme de C à F) ni à H « Statut ».",
          "Vérifiez que chaque note saisie est bien un entier de 0 à 3 : la validation du fichier existe, mais elle n'affiche pas de message d'erreur.",
        ],
      },
    ],
    table: {
      columns: ["Membre de l'equipe", 'Periode', 'C Irrit.', 'D Absent.', 'E Engag.', 'F Erreurs', 'G Score', 'H Statut'],
      rows: [
        ['L. Katembo', '15-28 fev. 2027', '2', '1', '1', '0', '4', 'OK'],
        ['S. Ndagano', '15-28 fev. 2027', '0', '0', '0', '0', '0', 'OK'],
        ['R. Amani', '15-28 fev. 2027', '1', '0', '1', '0', '2', 'OK'],
        ['B. Kitoko', '15-28 fev. 2027', '0', '1', '0', '1', '2', 'OK'],
        ['T. Rukundo', '15-28 fev. 2027', '1', '0', '0', '0', '1', 'OK'],
        ['L. Katembo', '1-14 mars 2027', '2', '2', '2', '1', '7', 'A surveiller'],
      ],
    },
    result: "Fait quand : la ligne de chaque personne est saisie pour la période, le nom est identique à celui des périodes précédentes et les statuts se sont calculés seuls. Le 15 mars, L. Katembo passe de 4 à 7.",
    pitfall: "Un nom écrit « L. Katembo » une fois et « Katembo L. » la fois suivante rompt la lecture de l'historique et l'onglet de synthèse ne retrouvera plus ses lignes. Copiez-collez le nom.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: "Lire les statuts, la tendance et l'onglet de synthèse",
    intro: "La couleur et le statut disent le niveau. Ils ne disent pas la direction. Un score de 4 qui vient de 1 est plus inquiétant qu'un 5 qui vient de 8. Ajoutez donc votre propre lecture de tendance, puis alimentez l'onglet de synthèse.",
    steps: [
      {
        title: 'Lisez le niveau dans la colonne H',
        actions: [
          "OK de 0 à 4, A surveiller de 5 à 7, ALERTE de 8 à 12 ; la colonne G se colore en conséquence.",
        ],
      },
      {
        title: 'Calculez la tendance à la main',
        actions: [
          "Comparez G à la période précédente pour la même personne.",
          "Appliquez la règle complémentaire de ce module, qui n'est pas dans le fichier : une hausse d'au moins 3 points d'une période à l'autre, ou trois indicateurs sur quatre non nuls, déclenche une conversation préventive même si le statut reste OK.",
        ],
      },
      {
        title: "Alimentez l'onglet « Synthese par personne »",
        actions: [
          "En A5, remplacez le nom de l'exemple par le premier nom, recopié depuis l'onglet « Suivi bien-etre ».",
          "Pour les autres personnes, copiez la ligne 5 vers les lignes suivantes (formules en B, C, D) et retapez uniquement le nom en colonne A.",
          "Ne modifiez pas les formules : B est le score maximum atteint, C le nombre de périodes en ALERTE, D le nombre de périodes « A surveiller ».",
        ],
      },
    ],
    table: {
      columns: ["Membre de l'equipe", 'Score de risque maximum atteint', 'Nombre de periodes en ALERTE', "Nombre de periodes 'A surveiller'"],
      rows: [
        ['L. Katembo', '7', '0', '2'],
        ['S. Ndagano', '6', '0', '1'],
        ['R. Amani', '4', '0', '0'],
        ['B. Kitoko', '2', '0', '0'],
        ['T. Rukundo', '1', '0', '0'],
      ],
    },
    result: "Fait quand : pour chaque personne, vous pouvez dire le niveau, la direction et ce que la synthèse affiche. Synthèse après la troisième période, le 29 mars 2027.",
    pitfall: "Si le score maximum affiche une erreur dans une ancienne version d'Excel, la formule de la colonne B est une formule matricielle : confirmez-la avec Ctrl+Maj+Entrée. Et le nom en colonne A doit être identique à celui de « Suivi bien-etre », sinon les compteurs restent à zéro.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Tenir la revue RH-management',
    intro: "La grille ne vit que si elle est lue en réunion. Prévoyez 30 minutes, avec le HR Manager et le manager de l'équipe. La réunion répond à une seule question : que décide-t-on pour chaque personne qui n'est plus verte ?",
    steps: [
      {
        title: 'Préparez la réunion',
        actions: [
          "Envoyez la veille un extrait limité aux personnes concernées, sans l'ensemble de l'équipe.",
          "Préparez l'ordre du jour : nouveaux statuts, tendances, causes organisationnelles, actions, prochaine date.",
        ],
      },
      {
        title: "Tenez-la et consignez les décisions",
        actions: [
          "Pour chaque personne non verte, regardez d'abord la charge : jours de repos, heures, postes vacants.",
          "Notez chaque action avec un responsable et une date.",
          "N'affichez jamais la grille sur un écran partagé avec l'équipe.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — revue du lundi 15 mars 2027, 30 minutes, N. Mbusa, A. Kavira, E. Kasongo',
      lines: [
        "Nouveau statut : L. Katembo, 7, « A surveiller », hausse de 3 points en une période.",
        "Causes organisationnelles : aucun jour de repos réel depuis le 24 février ; poste d'Assistant Superviseur Logistique vacant depuis le 12 janvier.",
        "Décision 1 : entretien de soutien le mercredi 17 mars à 14 h, mené par N. Mbusa seule (E. Kasongo prévenu, sans le contenu).",
        "Décision 2 : E. Kasongo garantit deux jours de repos consécutifs à L. Katembo avant le 26 mars.",
        "Décision 3 : A. Kavira relance le recrutement de l'adjoint auprès de H. Mwamba d'ici le 19 mars.",
        "Prochaine revue : lundi 29 mars.",
      ],
    },
    result: "Fait quand : le compte rendu liste, pour chaque personne non verte, une action, un responsable et une date. C'est votre Livrable 4.",
    tip: "Commencez toujours par les causes d'organisation. Une grille qui ne mène qu'à « parler à la personne » alors que le poste adjoint est vacant depuis deux mois sert à blâmer, pas à soutenir.",
  },

  // ─── Procédure 5 — Entretien de soutien ────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 5 — Réagir à une alerte burnout : l'entretien de soutien",
    body: "Dès que la grille signale un score élevé, ou qu'une tendance déclenche votre règle complémentaire, engagez sans délai les étapes du protocole côté burnout : un entretien individuel bienveillant et non jugeant, une proposition concrète de soutien (aménagement temporaire de charge, orientation vers un soutien psychosocial, congé si nécessaire) et un suivi daté. Votre rôle n'est pas de diagnostiquer : c'est de reconnaître, d'ouvrir une conversation et d'orienter.",
    bullets: [
      "Étape 1 — Qualifier l'alerte.",
      "Étape 2 — Préparer l'entretien.",
      "Étape 3 — Conduire l'entretien en cinq temps.",
      "Étape 4 — Rédiger la note d'intervention d'une demi-page.",
      "Étape 5 — Mettre en œuvre le soutien et réévaluer.",
    ],
    result: "Livrable 5 : une note d'intervention d'une demi-page, un soutien daté et un point de suivi planifié.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: "Qualifier l'alerte",
    intro: "Avant de convoquer quelqu'un, vérifiez de quoi il s'agit : un signal préventif ou une urgence. Les deux appellent des réponses différentes.",
    steps: [
      {
        title: 'Relisez la courbe et le contexte',
        actions: [
          "Reprenez les trois dernières périodes de la personne dans « Suivi bien-etre ».",
          "Vérifiez la charge : jours de repos pris, heures, postes vacants, exposition à l'insécurité.",
          "Vérifiez les événements personnels ou professionnels connus (incident, deuil, mutation).",
        ],
      },
      {
        title: "Décidez le niveau de réponse",
        actions: [
          "A surveiller avec tendance : entretien préventif dans les 48 heures.",
          "ALERTE : entretien dans les 24 heures.",
          "Signes d'urgence (propos de désespoir ou d'auto-agression, alcool ou drogue au travail, risque pour la sécurité d'un convoi) : orientation médicale et psychosociale le jour même, retrait des tâches critiques pour la sécurité, information du HR Manager.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 15 mars 2027, qualification pour L. Katembo',
      lines: [
        "Courbe : 4 → 7, soit +3 en une période ; trois indicateurs à 2 ou plus.",
        "Contexte : aucun jour de repos réel depuis le 24 février ; adjoint absent depuis le 12 janvier ; sous-effectif de l'équipe.",
        "Signes d'urgence : aucun connu à ce jour.",
        "Décision : entretien préventif dans les 48 heures, soit le mercredi 17 mars à 14 h.",
      ],
    },
    result: "Fait quand : le niveau de réponse (préventif, alerte, urgence) et le délai sont notés dans votre dossier confidentiel.",
    pitfall: "Ne classez pas l'alerte « à voir à la prochaine période » parce que le statut est encore A surveiller. C'est exactement l'erreur du cas de Jonas, étudié plus loin : chaque signal pris isolément semblait gérable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: "Préparer l'entretien",
    intro: "Un entretien de soutien se joue dans sa préparation. Une feuille d'une page suffit : des faits, une proposition, un cadre, des phrases d'ouverture, et ce que vous ne ferez pas.",
    steps: [
      {
        title: 'Rassemblez les faits objectifs',
        actions: [
          "Listez quatre à six faits datés tirés de la fiche de collecte, sans adjectif.",
          "Écartez toute rumeur ou interprétation.",
        ],
      },
      {
        title: 'Préparez la proposition et le cadre',
        actions: [
          "Préparez trois propositions concrètes : aménagement de charge, repos, orientation psychosociale.",
          "Choisissez un lieu privé et neutre, 45 minutes, sans interruption.",
          "Décidez qui est présent : le RH et la personne, le manager seulement si elle le demande.",
        ],
      },
      {
        title: 'Notez ce que vous ne ferez pas',
        actions: [
          "Pas de diagnostic, pas de promesse que vous ne pouvez pas tenir, pas de communication à l'équipe.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — feuille de préparation pour le mercredi 17 mars, 14 h',
      lines: [
        "Faits : réponses sèches en réunion les 3 et 10 mars ; absences d'un jour les 4 et 11 mars ; point de fin de journée non animé depuis le 5 mars ; erreur de quantité le 9 mars ; aucun jour de repos réel depuis le 24 février.",
        "Propositions : confier la planification des convois du mardi et du jeudi à R. Amani pendant 2 semaines ; deux jours de repos consécutifs avant le 26 mars ; une séance avec le psychologue conventionné, confidentielle et volontaire.",
        "Cadre : salle de réunion fermée, 45 minutes, N. Mbusa seule.",
        "À ne pas faire : parler de performance, comparer avec d'autres, promettre l'arrivée de l'adjoint à une date précise.",
      ],
    },
    result: "Fait quand : la feuille de préparation tient sur une page, avec des faits datés et trois propositions concrètes.",
    tip: "Écrivez votre première phrase à l'avance. La plupart des entretiens ratés ont mal démarré : trop de précautions, ou une accusation déguisée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: "Conduire l'entretien en cinq temps",
    intro: "Prévoyez 45 minutes. L'objectif n'est pas de convaincre la personne qu'elle va mal : c'est de lui montrer que quelqu'un a vu, qu'elle ne sera pas jugée et qu'une aide concrète existe.",
    steps: [
      {
        title: 'Ouverture (5 min)',
        actions: [
          "Dites pourquoi vous la rencontrez : un soutien, pas une évaluation.",
          "Précisez la confidentialité : ce qui sera dit ici ne sera pas communiqué à l'équipe.",
        ],
      },
      {
        title: 'Faits (7 min)',
        actions: [
          "Présentez trois ou quatre faits datés, sans interprétation.",
          "Demandez : « Comment lisez-vous cela ? »",
        ],
      },
      {
        title: 'Écoute (15 min)',
        actions: [
          "Posez des questions ouvertes, laissez les silences, reformulez.",
          "Demandez ce qui pèse le plus en ce moment.",
        ],
      },
      {
        title: 'Propositions (10 min)',
        actions: [
          "Présentez vos trois propositions et laissez choisir.",
          "Complétez avec ce que la personne demande.",
        ],
      },
      {
        title: 'Engagements et suite (8 min)',
        actions: [
          "Résumez ce qui est décidé : qui fait quoi, pour quand.",
          "Fixez le prochain point, à deux semaines.",
        ],
      },
    ],
    example: {
      title: 'Phrases d\'appui — entretien du mercredi 17 mars 2027',
      lines: [
        "Ouverture : « Je ne vous convoque pas pour vous évaluer. Je viens parce que j'ai vu des changements et que je préfère vous en parler avant que ce soit plus lourd. »",
        "Compétence : « Votre compétence n'est pas en question. C'est parce que vous êtes fiable depuis des années que je remarque la différence. »",
        "Faits : « Le 3 et le 10 mars, des échanges plus tendus en réunion. Deux absences d'un jour, les 4 et 11. Le point de fin de journée n'est plus animé depuis le 5. Et pas de vrai jour de repos depuis le 24 février. »",
        "Écoute : « Qu'est-ce qui vous pèse le plus en ce moment ? » ; puis silence.",
        "Suite : « On se revoit le 31 mars. D'ici là : deux jours de repos, la planification du mardi et du jeudi confiée à R. Amani, et si vous le souhaitez, une séance avec le psychologue. »",
      ],
    },
    result: "Fait quand : la personne repart avec des engagements précis, une date de suivi et la certitude que l'entretien n'est pas un dossier contre elle.",
    pitfall: "Ne dites jamais « vous devriez vous reposer » comme un jugement ni « tout le monde est fatigué » comme une minimisation. Chaque phrase doit rester accrochée à un fait ou à une proposition.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: "Rédiger la note d'intervention d'une demi-page",
    intro: "La note formalise ce qui a été convenu. Elle tient sur une demi-page maximum, ne contient aucun diagnostic et n'est diffusée à personne d'autre que le HR Manager. Elle protège la personne autant que l'organisation.",
    steps: [
      {
        title: 'Utilisez la structure en six rubriques',
        actions: [
          "1. En-tête : nom, fonction, date, participants.",
          "2. Indicateurs objectifs présentés, avec dates.",
          "3. Ce que la personne a exprimé, avec son accord.",
          "4. Soutien convenu : action, responsable, date.",
          "5. Suivi : date du prochain point.",
          "6. Confidentialité : qui peut lire la note.",
        ],
      },
      {
        title: 'Classez-la correctement',
        actions: [
          "Enregistrez-la dans le dossier confidentiel RH, séparé du dossier administratif du personnel.",
          "Transmettez au manager seulement les aménagements de charge, jamais le contenu de l'entretien.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note du mercredi 17 mars 2027 (extrait de la demi-page)',
      lines: [
        "Note d'intervention de soutien — L. Katembo, Superviseur Logistique, Goma — 17/03/2027 — présente : N. Mbusa.",
        "Indicateurs présentés : réponses sèches en réunion (3 et 10 mars) ; absences d'un jour (4 et 11 mars) ; point de fin de journée non animé depuis le 5 mars ; erreur de quantité (9 mars) ; aucun repos réel depuis le 24 février. Grille : 4 puis 7 (A surveiller).",
        "Exprimé par L. Katembo (avec son accord) : sous-effectif, crainte de paraître faible devant l'équipe, mauvais sommeil.",
        "Soutien convenu : planification des convois du mardi et du jeudi confiée à R. Amani du 18 mars au 1er avril ; repos samedi 20 et dimanche 21 mars ; séance avec le psychologue conventionné le 24 mars, à sa demande ; relance du poste d'adjoint par A. Kavira.",
        "Suivi : point le 31 mars ; grille réévaluée le 29 mars. Diffusion : N. Mbusa et A. Kavira uniquement.",
      ],
    },
    result: "Fait quand : la note tient sur une demi-page, ne contient aucun diagnostic et mentionne une action, un responsable et une date pour chaque soutien. C'est votre Livrable 5.",
    pitfall: "Ne retranscrivez jamais ce que la personne a dit sans son accord. Elle doit savoir ce qui sera écrit et qui le lira, sinon elle ne dira plus rien à la prochaine conversation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Mettre en œuvre le soutien et réévaluer',
    intro: "Une note sans suite est pire que pas de note : elle montre que l'on a vu et que l'on n'a rien fait. Chaque soutien convenu a une date et un responsable, et se vérifie.",
    steps: [
      {
        title: 'Faites exécuter chaque soutien à sa date',
        actions: [
          "Vérifiez les repos effectivement pris (registre de présence).",
          "Vérifiez que l'aménagement de charge est visible dans le planning.",
          "Prenez les rendez-vous de soutien psychosocial si la personne le demande.",
        ],
      },
      {
        title: 'Tenez le point à deux semaines',
        actions: [
          "Demandez comment la personne se sent, ce qui a aidé, ce qui manque.",
          "Réévaluez la grille de la période suivante avec les mêmes repères.",
        ],
      },
      {
        title: 'Décidez de la suite',
        actions: [
          "Score en baisse : poursuivez, espacez le suivi.",
          "Score stable sur deux périodes : orientez vers un soutien psychosocial ou médical, envisagez un congé.",
          "Score en hausse ou signes d'urgence : escaladez au HR Manager et orientez le jour même.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — suivi du mercredi 31 mars 2027',
      lines: [
        "Repos pris les 20 et 21 mars : confirmé par le registre de présence.",
        "Planification des convois du mardi et du jeudi assurée par R. Amani depuis le 18 mars.",
        "Séance avec le psychologue le 24 mars : tenue ; L. Katembo demande deux séances de plus.",
        "Grille du 29 mars : 1, 1, 2, 1 = 5 (A surveiller), en baisse de 2 points depuis le 15 mars.",
        "Décision : poursuivre le suivi toutes les deux semaines ; point suivant le 14 avril ; poste d'adjoint toujours vacant, relance à H. Mwamba.",
      ],
    },
    result: "Fait quand : chaque soutien est confirmé ou remplacé, la grille est réévaluée et la décision (poursuivre, orienter, escalader) est écrite.",
    tip: "Faites revenir le poste vacant dans toutes vos conversations avec la hiérarchie. Un soutien individuel ne remplace pas la correction de la cause organisationnelle.",
  },

  // ─── Procédure 6 — Incident critique et soutien psychosocial ───────────
  {
    type: 'concept',
    title: 'Procédure 6 — Soutenir une équipe après un incident critique',
    body: "Le burnout est un stress qui s'accumule. Un incident critique est un choc : vol à main armée, accident grave, menace, décès d'un collègue. Dans les premières heures, le RH n'a pas à soigner : il organise la sécurité, les premiers secours psychologiques, le soutien psychosocial et les suites pratiques, puis suit les personnes touchées dans le temps. Cette procédure complète la grille : après un choc, c'est le suivi daté qui protège, pas l'attente.",
    bullets: [
      "Étape 1 — Sécuriser et activer le soutien dans les premières heures.",
      "Étape 2 — Appliquer les premiers secours psychologiques : regarder, écouter, relier.",
      "Étape 3 — Organiser le soutien psychosocial et la charge de travail.",
      "Étape 4 — Suivre à J+2, J+7 et J+30 et décider de la suite.",
    ],
    result: "Livrable 6 : un plan de soutien daté pour chaque personne touchée, avec ses points de suivi à J+2, J+7 et J+30.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Sécuriser et activer le soutien dans les premières heures',
    intro: "La priorité est la sécurité physique et les soins. La sécurité d'un convoi, la plainte ou le rapport d'incident viendront ensuite. Le RH intervient dès qu'il est informé, souvent le lendemain matin.",
    steps: [
      {
        title: 'Vérifiez la sécurité et les soins',
        actions: [
          "Demandez au Base Manager ou au responsable sécurité : toutes les personnes sont-elles en sécurité et examinées ?",
          "Ne posez aucune question sur les détails de l'événement à ce stade.",
        ],
      },
      {
        title: 'Identifiez toutes les personnes touchées',
        actions: [
          "Listez les personnes directement exposées, les témoins et celles qui ont appris la nouvelle.",
          "Désignez une personne de contact pour chacune.",
        ],
      },
      {
        title: 'Ouvrez la note d\'incident et informez',
        actions: [
          "Notez les faits strictement nécessaires : qui, quand, où, blessures, suites immédiates.",
          "Informez le HR Manager et le Head of Mission ; prévenez les proches avec l'accord de la personne.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 22 mars 2027, 21 h 10, informé le mardi 23 mars à 6 h 50',
      lines: [
        "Faits : le véhicule du convoi de retour a été arrêté par des hommes armés ; le chauffeur S. Ndagano et l'Assistant Logistique R. Amani ont été retenus 40 minutes, sans blessure, téléphones et carburant pris ; retour à la base à 23 h 30.",
        "6 h 50 : appel de E. Kasongo à N. Mbusa. Sécurité confirmée, examen médical fait à 23 h 45, pas de blessure physique.",
        "Personnes touchées : S. Ndagano et R. Amani (exposés) ; L. Katembo, qui a coordonné le convoi (témoin indirect) ; 2 autres chauffeurs qui attendaient.",
        "Contacts : E. Kasongo pour S. Ndagano ; N. Mbusa pour R. Amani ; A. Kavira informé à 7 h 30, H. Mwamba à 8 h 00.",
      ],
    },
    result: "Fait quand : la sécurité est confirmée, la liste des personnes touchées est écrite avec un contact par personne et les deux responsables sont informés.",
    pitfall: "Ne commencez pas par « que s'est-il passé exactement ? ». Les détails du récit relèvent du rapport de sécurité, plus tard, et ne doivent pas être arrachés à quelqu'un qui est encore sous le choc.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Appliquer les premiers secours psychologiques : regarder, écouter, relier',
    intro: "Ces gestes sont à la portée de tout RH formé. Ils ne remplacent pas un professionnel, mais ils réduisent le risque que la personne se sente seule. Faites-les dans un lieu calme, sans témoin inutile.",
    steps: [
      {
        title: 'Regarder',
        actions: [
          "Vérifiez les besoins immédiats : eau, nourriture, repos, vêtements, téléphone de remplacement.",
          "Repérez les signes d'alerte : tremblements, confusion, panique, mutisme total.",
        ],
      },
      {
        title: 'Écouter',
        actions: [
          "Proposez de parler sans obliger : « Si vous voulez en parler, je suis là. »",
          "Si la personne parle, écoutez sans interpréter ; si elle se tait, restez présent.",
        ],
      },
      {
        title: 'Relier',
        actions: [
          "Aidez la personne à joindre ses proches si elle le souhaite.",
          "Informez-la des services disponibles : psychologue conventionné, ligne d'écoute, jours de récupération.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mardi 23 mars 2027, 9 h 30, avec S. Ndagano',
      lines: [
        "Regarder : S. Ndagano a peu dormi, n'a pas mangé ; N. Mbusa fait servir un repas et propose un lieu calme.",
        "Écouter : « Je ne vous demande pas de raconter. Si vous voulez parler, je suis là ; si vous préférez vous taire, c'est très bien aussi. »",
        "Relier : appel à sa famille à 10 h 15 avec son accord ; remise du numéro du psychologue conventionné.",
        "À éviter : « Ça aurait pu être pire », « il faut passer à autre chose », « racontez-moi tout ».",
      ],
    },
    result: "Fait quand : chaque personne exposée a eu une réponse aux trois gestes, et aucune n'a été forcée à parler.",
    pitfall: "N'organisez pas de réunion collective de debriefing psychologique obligatoire le lendemain pour « libérer la parole ». Proposez un soutien volontaire, individuel ou en petit groupe, et laissez la personne choisir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Organiser le soutien psychosocial et la charge de travail',
    intro: "Le soutien est à la fois psychosocial (parler, comprendre ce qui arrive) et pratique (repos, charge, sécurité). Une personne sous le choc qui reprend les convois de nuit dès le lendemain n'est pas soutenue : elle est exposée.",
    steps: [
      {
        title: 'Proposez le soutien psychosocial',
        actions: [
          "Mettez à disposition un psychologue conventionné ou une ligne d'écoute, aux frais de l'organisation.",
          "Précisez que c'est volontaire et confidentiel.",
        ],
      },
      {
        title: 'Aménagez la charge et la sécurité',
        actions: [
          "Accordez un congé de récupération, par exemple 2 jours.",
          "Retirez temporairement les tâches qui rappellent l'événement (convois de nuit) pendant au moins une semaine.",
        ],
      },
      {
        title: "Informez l'équipe sobrement",
        actions: [
          "Rédigez un message court et neutre : ce qui s'est passé en deux lignes, ce qui est fait, où trouver du soutien.",
          "Ne donnez aucun détail sur la façon dont les personnes ont réagi.",
        ],
      },
    ],
    table: {
      columns: ['Personne', 'Besoin exprimé', 'Action', 'Responsable', 'Date'],
      rows: [
        ['S. Ndagano', 'Dormir, voir sa famille', 'Congé de récupération 24-25/03 ; séance psychologue le 26/03 ; pas de convoi de nuit jusqu\'au 05/04', 'E. Kasongo / N. Mbusa', 'Du 24/03 au 05/04'],
        ['R. Amani', 'Reprendre une activité normale', 'Séance psychologue le 26/03 ; planification de bureau jusqu\'au 29/03', 'N. Mbusa', 'Du 23/03 au 29/03'],
        ['L. Katembo', 'Culpabilité de coordonnateur', 'Séance supplémentaire avec le psychologue ; revue de la procédure de convoi sans recherche de faute', 'A. Kavira / E. Kasongo', 'Le 31/03'],
      ],
    },
    result: "Fait quand : chaque personne touchée a une action de soutien, une action de charge, un responsable et une date, et l'équipe a reçu un message sobre.",
    tip: "Associez toujours le suivi de la procédure de convoi à une phrase claire : « Nous cherchons à corriger la procédure, pas à désigner un fautif. » Sinon, la personne qui a coordonné se sentira accusée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Suivre à J+2, J+7 et J+30 et décider de la suite',
    intro: "Les premières réactions se calment le plus souvent en quelques jours. Ce qui persiste mérite attention. Fixez les dates dès le premier jour, sinon l'urgence du quotidien les effacera.",
    steps: [
      {
        title: 'Programmez trois points de suivi',
        actions: [
          "J+2 : prise de nouvelles de 10 minutes, besoins pratiques.",
          "J+7 : point de 15 minutes, état général, retour au poste, besoin de soutien.",
          "J+30 : point de 20 minutes, bilan, signes persistants éventuels.",
        ],
      },
      {
        title: 'Utilisez la grille et surveillez les signes persistants',
        actions: [
          "Ajoutez les personnes touchées à la grille pour la période suivante.",
          "Au-delà de quatre semaines, des signes forts (insomnie, reviviscences, évitement, alcool, panique) justifient une orientation médicale ou psychologique.",
        ],
      },
      {
        title: 'Décidez du retour et capitalisez',
        actions: [
          "Reprenez les tâches habituelles par paliers, avec l'accord de la personne.",
          "Organisez un retour d'expérience sur la procédure de sécurité, sans blâme.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — points de suivi pour S. Ndagano',
      lines: [
        "J+2, jeudi 25 mars : appel de 10 minutes pendant son congé de récupération ; dort un peu mieux ; reprise du travail de jour prévue le lundi 29 mars.",
        "J+7, lundi 29 mars : grille de la période 15-28 mars : 2, 1, 2, 1 = 6, « A surveiller » ; besoin d'une deuxième séance ; pas de convoi de nuit, maintenu.",
        "J+30, mercredi 21 avril : prévu, avec réévaluation de la grille et décision sur la reprise des convois de nuit.",
        "Retour d'expérience de la procédure de convoi : prévu le 8 avril avec E. Kasongo et le responsable sécurité.",
      ],
    },
    result: "Fait quand : les trois dates sont dans votre calendrier, chaque personne touchée figure dans la grille, et la reprise des tâches est décidée avec elle. C'est votre Livrable 6.",
    pitfall: "Ne considérez pas l'affaire close parce que la personne « a l'air d'aller bien » à J+7. Le suivi à J+30 existe précisément pour les signes qui se révèlent tard.",
  },

  // ─── Procédure 7 — Signalement PSEA ────────────────────────────────────
  {
    type: 'concept',
    title: "Procédure 7 — Traiter un signalement PSEA : la protection d'abord, l'enquête ensuite",
    body: "Dès qu'un signalement arrive par n'importe quel canal, engagez sans délai les étapes du protocole. L'ordre de priorité est non négociable : la protection de la personne d'abord, l'établissement des faits ensuite. Une organisation qui commence par vérifier les faits en laissant la victime potentielle en contact quotidien avec la personne mise en cause prend un risque grave et évitable. Votre rôle de RH n'est pas d'enquêter : c'est de recevoir, protéger, informer, orienter et soutenir.",
    bullets: [
      "Étape 1 — Recevoir le signalement et accuser réception.",
      "Étape 2 — Protéger : évaluer le risque et appliquer les mesures immédiates.",
      "Étape 3 — Informer dans les délais et verrouiller la confidentialité.",
      "Étape 4 — Orienter vers l'enquête sous 5 jours ouvrés.",
      "Étape 5 — Soutenir la personne qui signale et orienter la survivante avec son accord.",
      "Étape 6 — Clôturer et tirer les enseignements.",
    ],
    result: "Livrable 7 : un dossier de traitement complet, avec fiche de réception, mesures de protection, orientation vers l'enquête, soutien et clôture.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 6',
    title: 'Recevoir le signalement et accuser réception',
    intro: "Le moment de la réception décide de tout le reste : la personne qui parle doit sentir qu'elle est écoutée, crue au sens où elle n'a pas à prouver, et protégée. Vous n'enquêtez pas, vous recueillez.",
    steps: [
      {
        title: 'Écoutez et prenez note',
        actions: [
          "Isolez-vous dans un lieu privé, sans interruption.",
          "Laissez parler ; notez les mots de la personne, pas votre interprétation.",
          "Ne demandez ni preuve ni détails de l'événement ; posez seulement les questions nécessaires : quoi, quand, où, qui est cité, y a-t-il un danger immédiat.",
        ],
      },
      {
        title: 'Expliquez et ne promettez pas',
        actions: [
          "Expliquez la confidentialité, l'engagement de non-représailles et ce qui va se passer ensuite.",
          "Ne promettez aucun résultat ; ne promettez pas d'anonymat que vous ne pouvez pas tenir si la personne est identifiable.",
        ],
      },
      {
        title: "Remplissez la fiche de réception et qualifiez",
        actions: [
          "Saisissez : date et heure, canal, nominatif ou anonyme, faits rapportés, personnes citées, risque immédiat oui ou non, mesures demandées.",
          "En cas de doute entre PSEA, harcèlement ou autre, traitez comme un signalement protégé et transmettez au Responsable Protection.",
          "Envoyez l'accusé de réception par le canal utilisé, au plus tard sous 48 heures.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — jeudi 25 mars 2027, 16 h 40, signalement oral',
      lines: [
        "Canal : oral direct à N. Mbusa ; signalement nominatif de C. Ndungo, Assistante de distribution (CDD).",
        "Faits rapportés (ses mots) : « Une femme du site 2 m'a dit que l'agent chargé de l'enregistrement, matricule J-114, lui a laissé entendre qu'elle serait inscrite sur la liste si elle acceptait une relation. »",
        "Personne mise en cause : agent de distribution journalier J-114. Risque immédiat : oui, distribution prévue vendredi 26 mars à 8 h sur le site 2.",
        "Accusé de réception, dit à 17 h 05 : « Votre signalement est bien reçu et pris en charge. Je ne peux pas vous donner d'information sur l'avancement, mais je m'occupe de votre protection et de votre soutien. » Confirmation écrite le vendredi 26 mars à 8 h.",
      ],
    },
    result: "Fait quand : la fiche est remplie avec les mots de la personne, le risque immédiat est évalué et l'accusé de réception est donné dans les 48 heures.",
    pitfall: "Ne demandez pas à la personne qui signale de « prouver » ou de « refaire son récit devant le chef de base ». La preuve, c'est l'enquête qui la cherche, pas la victime ni le témoin.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 6',
    title: "Protéger : évaluer le risque et appliquer les mesures immédiates",
    intro: "Dès la réception, et avant toute investigation, évaluez et appliquez sans délai les mesures de protection. Aucune vérification préalable des faits ne justifie de retarder une mesure lorsqu'un risque est identifié. Le Head of Mission décide ; vous préparez, proposez et notifiez.",
    steps: [
      {
        title: "Alertez sans prévenir la personne mise en cause",
        actions: [
          "Appelez immédiatement le HR Manager, le Head of Mission et le Responsable Protection du Personnel.",
          "Ne parlez pas à la personne mise en cause avant la décision.",
        ],
      },
      {
        title: 'Évaluez le risque',
        actions: [
          "Risque pour la personne qui signale : contact quotidien, pression possible.",
          "Risque pour la survivante et les autres bénéficiaires : prochain contact, prochaine distribution.",
          "Risque de perte de preuves : listes, messages, plannings.",
        ],
      },
      {
        title: 'Appliquez les mesures',
        actions: [
          "Éloignement provisoire de la personne mise en cause de tout contact avec la personne qui signale et les bénéficiaires concernés, jamais l'inverse.",
          "Formulez-le comme une mesure conservatoire, non disciplinaire, rémunération maintenue.",
          "Changement d'affectation de la personne qui signale seulement à sa demande.",
          "Conservez les listes et messages sans enquêter.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — jeudi 25 mars 2027, 17 h 20 à 18 h 00',
      lines: [
        "17 h 20 : appel à A. Kavira, H. Mwamba et M. Tshibangu. Risque : distribution du site 2 le lendemain à 8 h.",
        "18 h 00 : décision de H. Mwamba : retrait immédiat de J-114 des tâches d'enregistrement et de tout site de distribution, affectation au dépôt de Goma, rémunération maintenue.",
        "Vendredi 26 mars, 7 h 30 : notification à J-114 par E. Kasongo et N. Mbusa : « Mesure administrative provisoire, non disciplinaire : vous êtes affecté au dépôt jusqu'à nouvel ordre, sans contact avec les sites de distribution ; votre rémunération est maintenue. » Aucune information sur l'origine du signalement.",
        "C. Ndungo conserve son poste et son site ; elle sait qu'elle peut demander un changement.",
        "Les listes d'enregistrement du site 2 sont copiées et mises sous clé par N. Mbusa.",
      ],
    },
    result: "Fait quand : la mesure est décidée, notifiée avant le prochain contact à risque, et la personne qui signale n'a subi aucun déplacement ni pénalité.",
    pitfall: "Ne convoquez pas la personne mise en cause pour « connaître sa version » avant d'avoir sécurisé la situation. Entendre sa version est le rôle de l'enquêteur, et le faire trop tôt expose la personne qui a signalé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 6',
    title: 'Informer dans les délais et verrouiller la confidentialité',
    intro: "L'information remonte la chaîne selon la gravité et la politique institutionnelle. La confidentialité se joue à chaque message, chaque dossier, chaque conversation de couloir.",
    steps: [
      {
        title: 'Informez selon la chaîne prévue',
        actions: [
          "Coordination : le Head of Mission, le jour même.",
          "Siège : le Head of HR ou le point focal PSEA du siège, dans le délai de votre politique.",
          "Bailleurs concernés : par le Head of Mission, selon l'accord de partenariat.",
        ],
      },
      {
        title: 'Verrouillez la confidentialité',
        actions: [
          "Ouvrez un dossier numéroté en accès restreint et listez les personnes autorisées.",
          "Utilisez le numéro de dossier dans les objets de courriel, jamais les noms.",
          "Ne discutez pas du dossier dans un espace ouvert.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — dossier P-2027-01, du jeudi 25 au vendredi 26 mars 2027',
      lines: [
        "Dossier : P-2027-01, dossier « RH_Confidentiel_PSEA », accès : N. Mbusa, A. Kavira, H. Mwamba, M. Tshibangu.",
        "Courriel à S. Lambert (Head of HR, siège) et M. Tshibangu, le 26/03 à 9 h : objet « Dossier P-2027-01 — confidentiel », sans nom dans l'objet ni le corps ; faits résumés en cinq lignes.",
        "Information du bailleur : par H. Mwamba, selon l'accord de partenariat ; calendrier vérifié par A. Kavira.",
        "Rappel de confidentialité envoyé le 26/03 aux quatre personnes autorisées : toute violation est une faute disciplinaire grave.",
      ],
    },
    result: "Fait quand : le dossier numéroté existe, la liste des personnes autorisées est écrite, et aucune information sensible ne figure dans un objet de courriel.",
    pitfall: "Ne partagez jamais « pour information » avec le Base Manager ou le superviseur direct de la personne mise en cause. Ils n'ont pas besoin de savoir, et ils peuvent être concernés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 6',
    title: "Orienter vers l'enquête sous 5 jours ouvrés",
    intro: "L'enquête n'est pas votre travail. Votre travail est de garantir qu'elle commence dans le délai, qu'elle est confiée à quelqu'un d'indépendant et que le dossier arrive complet.",
    steps: [
      {
        title: 'Faites évaluer la recevabilité',
        actions: [
          "Le Responsable Protection du Personnel évalue si le signalement est recevable.",
          "Vous lui fournissez la fiche de réception et les éléments du dossier RH de la personne mise en cause.",
        ],
      },
      {
        title: 'Contrôlez le conflit d\'intérêt',
        actions: [
          "Vérifiez qu'aucun lien hiérarchique ou personnel n'existe entre l'enquêteur et les parties.",
          "En cas de conflit, passez à un enquêteur externe.",
        ],
      },
      {
        title: 'Suivez le délai',
        actions: [
          "Calculez l'échéance : 5 jours ouvrés après la réception.",
          "Facilitez la logistique de l'enquêteur : accès, interprète, lieu neutre.",
          "Ne prenez pas part aux entretiens d'enquête.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — du jeudi 25 mars au jeudi 1er avril 2027',
      lines: [
        "Signalement reçu le jeudi 25 mars. Échéance : 5 jours ouvrés, soit au plus tard le jeudi 1er avril (26, 29, 30, 31 mars et 1er avril).",
        "Lundi 29 mars : M. Tshibangu déclare le signalement recevable et l'oriente vers l'unité d'enquête du siège ; l'enquêteur est issu d'un autre bureau pays, sans lien avec Goma.",
        "Note d'orientation écrite le 29 mars ; copie à A. Kavira et H. Mwamba.",
        "Logistique : salle neutre en ville réservée par N. Mbusa, interprète swahili indépendant désigné par le siège.",
        "Conclusions attendues par la coordination pour décision disciplinaire, dans le respect du droit du travail applicable.",
      ],
    },
    result: "Fait quand : l'orientation est écrite, datée dans le délai de 5 jours ouvrés, et l'enquêteur n'a aucun lien hiérarchique avec les parties.",
    pitfall: "Ne laissez pas le dossier « dormir » parce que le Responsable Protection est en déplacement. Le délai est une garantie pour la personne qui a signalé, et son dépassement est un signe visible que le système ne fonctionne pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 6',
    title: 'Soutenir la personne qui signale et orienter la survivante avec son accord',
    intro: "Indépendamment de l'issue de l'enquête, un soutien est proposé systématiquement à la personne qui a signalé de bonne foi. Pour la personne concernée par les faits, l'approche est centrée sur elle : rien ne se fait sans son consentement.",
    steps: [
      {
        title: 'Soutenez la personne qui signale',
        actions: [
          "Proposez l'accompagnement psychosocial si elle le souhaite.",
          "Programmez un point régulier sur l'état d'avancement, sans détail confidentiel de l'enquête.",
          "Demandez explicitement : « Avez-vous subi quoi que ce soit depuis votre signalement ? »",
        ],
      },
      {
        title: 'Orientez la survivante avec son accord',
        actions: [
          "Passez par le Responsable Protection ou le point focal prévu, jamais en interrogeant la survivante vous-même.",
          "Proposez l'accès aux services (santé, soutien psychosocial, sécurité) avec son consentement éclairé.",
          "Si elle refuse, respectez ce refus et notez-le.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vendredi 26 mars 2027, entretien de 20 minutes avec C. Ndungo',
      lines: [
        "Proposition de soutien : séance avec le psychologue conventionné ; C. Ndungo accepte et prend rendez-vous le 31 mars.",
        "Points réguliers : chaque vendredi, 10 minutes, sans détail d'enquête.",
        "Question posée : « Avez-vous subi quoi que ce soit depuis jeudi ? » Réponse : non.",
        "Survivante : le Responsable Protection prend contact par l'intermédiaire d'un partenaire de protection, avec son consentement ; le RH n'a aucun contact direct.",
        "Rappel donné à C. Ndungo : elle peut demander un changement d'affectation, jamais imposé.",
      ],
    },
    result: "Fait quand : un soutien est proposé et accepté ou refusé, les points réguliers sont fixés et la survivante est orientée par la voie prévue, avec son accord.",
    pitfall: "Ne déplacez jamais la personne qui signale « pour la protéger » sans son accord. Un changement d'affectation subi est une représaille, même bien intentionnée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 6',
    title: 'Clôturer et tirer les enseignements',
    intro: "La clôture n'est pas l'archivage d'un dossier : c'est la décision, l'information des personnes concernées dans les limites de la confidentialité, et la correction de ce que le dossier a révélé.",
    steps: [
      {
        title: 'Recevez les conclusions et décidez',
        actions: [
          "La coordination décide des suites disciplinaires, dans le respect du droit du travail applicable et de la politique institutionnelle.",
          "Le RH prépare la notification et applique la décision.",
        ],
      },
      {
        title: 'Informez les personnes concernées',
        actions: [
          "Informez la personne qui a signalé que le dossier est clos et que des mesures ont été prises, sans détail confidentiel.",
          "Respectez les droits de la personne mise en cause selon la politique et le droit du travail.",
        ],
      },
      {
        title: 'Faites le retour d\'expérience',
        actions: [
          "Vérifiez si la vérification des antécédents de la personne avait été faite et datée.",
          "Notez ce qui a marché et ce qui a échoué dans le canal, les délais et la protection.",
          "Mettez à jour le protocole si nécessaire, avec la date de mise à jour.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — clôture du dossier P-2027-01, vendredi 7 mai 2027',
      lines: [
        "7 mai : conclusions reçues ; faits établis ; décision disciplinaire prise par la coordination.",
        "C. Ndungo informée par N. Mbusa le 7 mai : « Le dossier est clos, des mesures ont été prises. Merci de votre démarche. » Aucun détail.",
        "Retour d'expérience : antécédents de J-114 vérifiés le 12/01/2027 ; protocole inchangé ; ajout, dans la carte aide-mémoire, de la mention de l'oral comme canal.",
        "Statistiques anonymisées mises à jour : 1 signalement reçu, 1 traité, délai de première mesure de protection : 1 heure 20.",
        "Début du calendrier anti-représailles (Procédure 8).",
      ],
    },
    result: "Fait quand : la décision est prise et notifiée, la personne qui a signalé est informée, le retour d'expérience est écrit et le calendrier anti-représailles est ouvert. C'est votre Livrable 7.",
    pitfall: "Ne clôturez pas le dossier sans avoir demandé à la personne qui a signalé si elle a subi des représailles. Sa réponse sera la mesure réelle de la confiance dans le canal.",
  },

  // ─── Procédure 8 — Représailles ────────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 8 — Protéger les lanceurs d\'alerte : surveiller les représailles',
    body: "Le protocole promet l'absence de représailles et une vérification explicite à intervalles réguliers après la clôture du dossier. Cette promesse ne tient que si elle est calendarisée. La procédure prend peu de temps, mais elle est la seule qui fait la différence entre un canal utilisé une fois et un canal en lequel on a confiance.",
    bullets: [
      "Étape 1 — Définir ce qu'est une représaille et le rendre visible.",
      "Étape 2 — Planifier les contrôles après la clôture.",
      "Étape 3 — Mener l'entretien de contrôle.",
      "Étape 4 — Traiter une représaille suspectée.",
    ],
    result: "Livrable 8 : un calendrier de contrôle anti-représailles avec dates, responsable et trace de chaque entretien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 4',
    title: "Définir ce qu'est une représaille et le rendre visible",
    intro: "Beaucoup de représailles ne sont ni des menaces ni des sanctions : ce sont des décisions ordinaires qui tombent au mauvais moment. Les managers doivent savoir où est la limite.",
    steps: [
      {
        title: 'Reprenez les quatre formes du protocole',
        actions: [
          "Mise à l'écart, changement de poste non justifié, dégradation des conditions de travail, pression sociale organisée.",
          "Ajoutez deux exemples de terrain par forme, issus de votre mission.",
        ],
      },
      {
        title: 'Installez un contrôle sur les décisions RH',
        actions: [
          "Pendant six mois après un signalement, toute décision qui touche la personne (affectation, planning, non-renouvellement, évaluation) passe par une relecture du RH avant signature.",
          "Informez les managers de cette règle, sans dire pourquoi si le dossier est confidentiel.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — rappel aux managers de Goma, lundi 10 mai 2027',
      lines: [
        "Message à E. Kasongo et aux superviseurs : « Toute décision d'affectation, de planning ou de renouvellement qui concerne un membre de l'équipe de distribution passe par une relecture du RH pendant six mois. »",
        "Exemples de représailles à afficher dans le protocole interne : planning de nuit soudain, retrait de véhicule, exclusion du groupe de messagerie de l'équipe, remarques répétées sur une « balance ».",
        "Dans la fiche de C. Ndungo : indicateur « décision RH soumise à relecture » actif jusqu'au 7 novembre 2027.",
      ],
    },
    result: "Fait quand : les managers connaissent les quatre formes de représailles et la règle de relecture est en vigueur pour la durée prévue.",
    pitfall: "Ne laissez pas un contrat à durée déterminée arriver à échéance sans relecture quand l'intéressé a signalé quelque chose. Un non-renouvellement « ordinaire » est la représaille la plus difficile à prouver.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 4',
    title: 'Planifier les contrôles après la clôture',
    intro: "Le protocole parle d'une vérification « à intervalles réguliers après la clôture du dossier ». Concrètement, fixez quatre dates dès le jour de la clôture.",
    steps: [
      {
        title: 'Posez les quatre points de contrôle',
        actions: [
          "J+7 : première vérification, pendant que le souvenir est frais.",
          "J+30 : le rythme normal a repris ; les petites pressions apparaissent.",
          "J+90 : les décisions de renouvellement et d'évaluation arrivent.",
          "J+180 : dernier contrôle formel.",
        ],
      },
      {
        title: "Désignez le responsable et fixez les modalités",
        actions: [
          "Le contrôle est fait par le RH ou le Responsable Protection, jamais par le manager direct de la personne.",
          "Prévoyez 15 minutes, dans un lieu privé, à une heure qui ne l'expose pas.",
          "Ajoutez les dates à votre calendrier avec alerte, en ajustant au jour ouvré suivant si nécessaire.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Date (clôture le 07/05/2027)', 'Responsable', 'Durée'],
      rows: [
        ['J+7', '14/05/2027', 'N. Mbusa', '15 min'],
        ['J+30', '06/06/2027', 'N. Mbusa', '15 min'],
        ['J+90', '05/08/2027', 'N. Mbusa ou M. Tshibangu', '15 min'],
        ['J+180', '03/11/2027', 'M. Tshibangu', '15 min'],
      ],
    },
    result: "Fait quand : les quatre dates sont dans le calendrier du RH et du Responsable Protection, avec alerte. C'est votre Livrable 8.",
    tip: "Programmez le contrôle de J+90 avant la période d'évaluation ou de renouvellement des contrats : c'est là que la représaille est la plus tentante et la plus discrète.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 4',
    title: "Mener l'entretien de contrôle",
    intro: "L'entretien de contrôle est court, structuré et chiffré par des faits. Il combine ce que la personne dit et ce que les données RH montrent.",
    steps: [
      {
        title: 'Posez les cinq questions',
        actions: [
          "Votre travail, vos horaires ou votre affectation ont-ils changé depuis le signalement ?",
          "Des collègues ou des responsables ont-ils changé d'attitude à votre égard ?",
          "Avez-vous reçu des remarques, des pressions ou des menaces ?",
          "Avez-vous été exclu(e) de réunions, de groupes ou d'échanges ?",
          "Avez-vous besoin d'un soutien supplémentaire ?",
        ],
      },
      {
        title: 'Recoupez avec les données',
        actions: [
          "Comparez ses déclarations avec les plannings, affectations, évaluations, paie et décisions de contrat.",
          "Notez dans le dossier : date, réponses, données vérifiées, action décidée.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — contrôle J+30 avec C. Ndungo, dimanche 6 juin 2027 reporté au lundi 7 juin',
      lines: [
        "Q1 : planning inchangé ; vérifié dans le planning de distribution.",
        "Q2 : une collègue lui a dit « tu as créé des problèmes à l'équipe » ; aucun fait précis, pas de menace.",
        "Q3 et Q4 : non. Q5 : souhaite continuer les séances de soutien.",
        "Données : affectation, planning, paie inchangés ; renouvellement du CDD prévu le 30 juin, relecture RH activée.",
        "Action : entretien de N. Mbusa avec la collègue, à titre de rappel des règles, sans nommer l'origine du dossier ; point au prochain contrôle.",
      ],
    },
    result: "Fait quand : chaque contrôle laisse une trace écrite avec les cinq réponses, les données vérifiées et une action ou une absence d'action justifiée.",
    pitfall: "Ne posez pas la question « tout va bien ? » : elle appelle un « oui » de politesse. Posez les cinq questions précises et recoupez avec les plannings.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 4',
    title: 'Traiter une représaille suspectée',
    intro: "Une représaille suspectée est un nouveau signalement : même ordre de priorité, même protocole, même rapidité. La protection d'abord, la vérification ensuite.",
    steps: [
      {
        title: 'Protégez d\'abord',
        actions: [
          "Suspendez ou annulez la décision contestée : affectation, planning, non-renouvellement, évaluation.",
          "Informez le HR Manager et le Responsable Protection dans les 24 heures.",
        ],
      },
      {
        title: 'Ouvrez un nouveau dossier',
        actions: [
          "Remplissez une nouvelle fiche de réception et un nouveau numéro de dossier.",
          "Orientez vers l'enquête selon la même procédure, avec le même délai de 5 jours ouvrés.",
          "Rappelez que la représaille est en elle-même une faute disciplinaire grave.",
        ],
      },
      {
        title: 'Renforcez le suivi',
        actions: [
          "Doublez la fréquence des contrôles pendant trois mois.",
          "Proposez un soutien supplémentaire.",
        ],
      },
    ],
    example: {
      title: 'Exemple illustratif — si, au contrôle de J+90 (5 août 2027), la situation avait été la suivante',
      lines: [
        "Constat : le planning de C. Ndungo est passé en horaires de nuit depuis le 2 août, sans motif écrit, sur décision d'un superviseur.",
        "Action le jour même : N. Mbusa fait annuler le changement par E. Kasongo et informe A. Kavira et M. Tshibangu.",
        "Nouveau dossier P-2027-02 ouvert ; orientation vers l'enquête dans le délai de 5 jours ouvrés.",
        "Contrôles de C. Ndungo doublés jusqu'en novembre ; soutien proposé.",
      ],
    },
    result: "Fait quand : la décision contestée est suspendue le jour même, un nouveau dossier est ouvert et le suivi est renforcé.",
    pitfall: "Ne cherchez pas d'abord à savoir si la représaille est « intentionnelle ». Protégez d'abord ; l'intention est une question d'enquête, et la protection ne peut pas attendre.",
  },

  // ─── Cas résolu ────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Cinq semaines de protection à Goma » : le déroulé jour par jour",
    scenario: "Rappel : N. Mbusa reçoit le mardi 23 février 2027 la mission de mettre en place le dispositif de protection du personnel de la base de Goma avant la revue partenaire du bailleur du mercredi 31 mars. Voici le déroulé complet, tel qu'un professionnel l'aurait conduit.",
    steps: [
      { title: 'Du 23 au 26 février — Le canal', body: 'Procédure 3 (étapes 1 à 6) : audit du 24, choix des canaux et remplissage du protocole le 25, validation, affichage et test à blanc le 26.', result: 'Protocole validé, affiché, testé ; ligne régionale et boîte opérationnelles.' },
      { title: 'Lundi 1er mars — Accueil et grille', body: 'Procédure 1 (étapes 1 à 3) : session d\'accueil de 9 h à 9 h 30 pour P. Kanyere et J. Safari. Procédure 4 (étapes 1 à 5) : première grille de l\'équipe logistique, période du 15 au 28 février.', result: 'Deux sessions inscrites au registre ; grille ouverte, tous les scores en OK.' },
      { title: 'Lundi 15 mars — Alerte et point J+14', body: 'Procédure 4 (étape 6) : revue RH-management, L. Katembo passe de 4 à 7. Procédure 1 (étape 4) : point à J+14 avec P. Kanyere.', result: 'Entretien de soutien planifié le 17 mars ; règle du transport réexpliquée.' },
      { title: 'Mardi 16 et mercredi 17 mars — Rappel et entretien', body: 'Procédure 2 (étapes 1 à 4) : rappel PSEA du 16 mars (couverture 83 %). Procédure 5 (étapes 1 à 5) : entretien de soutien avec L. Katembo et note d\'intervention le 17.', result: 'Rappel dans l\'échéance ; soutien convenu et daté.' },
      { title: 'Lundi 22 et mardi 23 mars — Incident critique', body: 'Procédure 6 (étapes 1 à 3) : incident du convoi le 22 au soir ; premiers secours psychologiques et plan de soutien le 23.', result: 'Deux personnes exposées soutenues, trois points de suivi fixés.' },
      { title: 'Jeudi 25 et vendredi 26 mars — Signalement PSEA', body: 'Procédure 7 (étapes 1 à 3 et 5) : réception à 16 h 40, mesure de protection décidée à 18 h, notification le 26 à 7 h 30, dossier numéroté.', result: 'Mesure appliquée 1 h 20 après la réception ; aucun contact entre J-114 et le site 2.' },
      { title: 'Lundi 29 mars — Orientation et grille', body: 'Procédure 7 (étape 4) : signalement orienté vers l\'enquête dans le délai. Procédure 4 : grille de la période du 15 au 28 mars.', result: 'Katembo à 5 (en baisse) ; Ndagano à 6 (A surveiller, suivi J+7).' },
      { title: 'Mercredi 31 mars — Revue partenaire', body: 'Le HR Manager présente : protocole affiché et testé, registre de sensibilisation, taux de couverture de 100 %, un signalement reçu et traité dans les délais, grille alimentée sans nom ni donnée individuelle.', result: 'Preuves remises au bailleur ; aucun nom, aucune note individuelle partagée.' },
    ],
  },
  {
    type: 'case-study',
    title: "Cas résolu — La grille de l'équipe logistique au 29 mars 2027",
    scenario: "État final de l'onglet « Suivi bien-etre » pour les lignes de L. Katembo et de S. Ndagano, après la saisie du 29 mars. Les autres membres de l'équipe restent verts.",
    steps: [],
    table: {
      columns: ["Membre de l'equipe", 'Periode', 'C', 'D', 'E', 'F', 'G Score', 'H Statut'],
      rows: [
        ['L. Katembo', '15-28 fev. 2027', '2', '1', '1', '0', '4', 'OK'],
        ['L. Katembo', '1-14 mars 2027', '2', '2', '2', '1', '7', 'A surveiller'],
        ['L. Katembo', '15-28 mars 2027', '1', '1', '2', '1', '5', 'A surveiller'],
        ['S. Ndagano', '15-28 fev. 2027', '0', '0', '0', '0', '0', 'OK'],
        ['S. Ndagano', '1-14 mars 2027', '0', '0', '0', '0', '0', 'OK'],
        ['S. Ndagano', '15-28 mars 2027', '2', '1', '2', '1', '6', 'A surveiller'],
      ],
    },
    example: {
      title: 'Lecture de N. Mbusa, lundi 29 mars',
      lines: [
        "L. Katembo : 4 → 7 → 5. Le pic du 15 mars a déclenché l'entretien du 17 ; la baisse de 2 points est cohérente avec les deux jours de repos et la délégation de la planification. Statut encore « A surveiller » : suivi maintenu toutes les deux semaines.",
        "S. Ndagano : 0 → 0 → 6. La hausse de 6 points en une période s'explique par l'incident du 22 mars : c'est le suivi J+7 de la Procédure 6, pas une alerte de burnout.",
        "Onglet « Synthese par personne » : L. Katembo, maximum 7, 0 période en ALERTE, 2 « A surveiller » ; S. Ndagano, maximum 6, 0 en ALERTE, 1 « A surveiller ».",
      ],
    },
    result: "Contrôle final : aucune personne en ALERTE, deux en « A surveiller » avec une action datée chacune, et l'historique de chaque ligne conservé.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le protocole de Goma complété, champ par champ',
    scenario: "Voici le protocole validé le vendredi 26 février 2027, avec les champs complétés et les engagements conservés tels quels. Coordonnées fictives.",
    steps: [],
    example: {
      title: 'protocole-signalement-psea-protection-personnel.docx — version du 26/02/2027',
      lines: [
        "Titre et objectif : conservés tels quels.",
        "1. Comment signaler : ligne téléphonique +243 80 000 0000 (fictive), lundi-samedi 7 h-18 h, swahili et français, messagerie vocale hors heures ; courriel protection@kss-exemple.org (fictif) consulté par M. Tshibangu seul ; boîte fermée à clé, couloir du dépôt côté parking, relevée le lundi et le jeudi par le délégué de Kinshasa ; signalement oral à l'encadrement RH, au management ou à la coordination, avec obligation de transmission sans délai. Paragraphe nominatif ou anonyme et accusé de réception sous 48 heures : conservé.",
        "2. Garantie de confidentialité : conservée ; rôles confirmés (Responsable Protection du Personnel, RH senior, siège).",
        "3. Mesures de protection immédiate : conservées ; décision d'éloignement par le Head of Mission, sur proposition du RH (procédure interne).",
        "4. Orientation vers l'enquête : 5 jours ouvrés ; enquêteur sans lien hiérarchique, désigné par l'unité d'enquête du siège ; enquêteur externe en cas de conflit d'intérêt.",
        "5. Soutien à la personne qui signale : accompagnement psychosocial par le psychologue conventionné de Goma ; points réguliers ; contrôles de non-représailles.",
        "Tableau final 1 : M. Tshibangu, Responsable Protection du Personnel, +243 80 000 0000, protection@kss-exemple.org ; point focal RH : N. Mbusa.",
        "Tableau final 2 : rédigé par N. Mbusa, HR Officer ; relu par A. Kavira ; dernière mise à jour 26/02/2027.",
      ],
    },
    result: "Contrôle final : aucun crochet « à compléter » ne reste, chaque nom correspond à une personne qui a répondu à un test réel, et le protocole est affiché dans le dépôt, les bureaux, la salle de réunion et les deux sites.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le dossier P-2027-01 : la chronologie qui a tenu',
    scenario: "Chronologie du traitement du signalement du jeudi 25 mars 2027, comparée aux engagements du protocole.",
    steps: [],
    table: {
      columns: ['Moment', 'Action', 'Qui', 'Engagement du protocole'],
      rows: [
        ['Jeu. 25/03, 16 h 40', 'Signalement oral, fiche de réception', 'N. Mbusa', 'Réception par l\'encadrement RH, transmission sans délai'],
        ['Jeu. 25/03, 17 h 05', 'Accusé de réception oral', 'N. Mbusa', 'Accusé sous 48 heures maximum'],
        ['Jeu. 25/03, 17 h 20', 'Alerte HR Manager, Head of Mission, Responsable Protection', 'N. Mbusa', 'Sans délai, avant toute investigation'],
        ['Jeu. 25/03, 18 h 00', 'Décision de retrait de J-114 des sites', 'H. Mwamba', 'Éloignement provisoire de la personne mise en cause'],
        ['Ven. 26/03, 7 h 30', 'Notification à J-114, mesure non disciplinaire', 'E. Kasongo, N. Mbusa', 'Protection avant les faits'],
        ['Ven. 26/03, 9 h', 'Information du siège, dossier numéroté', 'N. Mbusa', 'Information de la coordination et du siège'],
        ['Ven. 26/03', 'Entretien de soutien avec C. Ndungo', 'N. Mbusa', 'Soutien systématique'],
        ['Lun. 29/03', 'Orientation vers l\'enquête', 'M. Tshibangu', 'Dans un délai maximal de 5 jours ouvrés'],
        ['Ven. 07/05', 'Clôture, décision, information de C. Ndungo', 'Coordination, N. Mbusa', 'Décision par la coordination, droit du travail applicable'],
      ],
    },
    result: "Contrôle final : première mesure de protection 1 h 20 après la réception, orientation à J+2 ouvrés (limite : 5), accusé de réception dans la première heure (limite : 48 h), aucun contact entre la personne mise en cause et la personne qui a signalé.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Pourquoi cet ordre et ces formulations',
    scenario: "Le cas étudié pose deux questions de méthode : pourquoi protéger avant d'enquêter, et pourquoi parler de faits plutôt que de performance. Voici le raisonnement.",
    steps: [
      { title: '1. Protéger avant de vérifier', body: "Le signalement du 25 mars concernait une distribution prévue le lendemain à 8 h. Attendre la vérification aurait laissé J-114 au contact des bénéficiaires du site 2. La mesure conservatoire coûte un transfert au dépôt avec salaire maintenu ; l'attente aurait pu coûter un risque pour une personne." },
      { title: '2. Une mesure non disciplinaire', body: "Éloigner n'est pas sanctionner. La formulation « mesure administrative provisoire » protège l'organisation face au droit du travail et protège la personne mise en cause tant que l'enquête n'a pas conclu." },
      { title: '3. Aucune information sur l\'origine', body: "J-114 n'a reçu aucune information sur la personne qui a signalé. Dans une petite base, l'identité se devine vite ; la confidentialité se joue à chaque phrase." },
      { title: '4. Des faits, jamais de jugement, pour L. Katembo', body: "La phrase « votre compétence n'est pas en question » ne suffit pas seule : elle est crédible parce qu'elle est suivie de dates précises et de propositions concrètes. Sans faits, la conversation devient un reproche ; sans proposition, elle devient un constat sans suite." },
      { title: '5. Traiter la cause en même temps que la personne', body: "Le poste d'adjoint vacant depuis le 12 janvier était la cause de l'épuisement. Un soutien individuel qui laisse le poste vacant ne fait que repousser l'échéance." },
    ],
    result: "Résultat : un signalement traité dans l'ordre, un chef d'équipe soutenu avant l'incident, un dossier de preuves présentable au bailleur sans exposer de données individuelles.",
  },

  // ─── Exercices ─────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: "Exercice noté — « L'épuisement silencieux d'un chef d'équipe, Port-au-Prince »",
    instructions: "Jonas est chef d'équipe logistique d'une ONG internationale, sur une réponse d'urgence après un séisme à Port-au-Prince, depuis 4 mois. Reconnu pour son calme, il encadre 8 personnes dans un contexte de pénurie de carburant, d'insécurité croissante et de sous-effectif : son adjoint est parti deux mois plus tôt et n'a pas été remplacé. Reconstituez, avec les outils de ce module, le moment où une intervention aurait dû avoir lieu, comme si vous traitiez en prévention un autre membre de l'équipe qui présente aujourd'hui des signaux similaires.",
    table: {
      columns: ['Période', 'Signaux observés'],
      rows: [
        ['Semaine 1-2', "Jonas répond sèchement en réunion à des questions qu'il aurait prises avec calme. Un collègue dit : « il n'est pas dans son assiette ». Personne n'en parle au RH ni au coordinateur."],
        ['Semaine 3-4', "Deux absences d'une journée, motif « fatigue ». Personne ne les relie entre elles ni aux semaines précédentes."],
        ['Semaine 5-6', "Il cesse de participer aux échanges informels de fin de journée qu'il animait lui-même. Deux erreurs inhabituelles dans ses rapports de stock : la première corrigée sans commentaire, la seconde relevée par son responsable avec une remarque sèche."],
        ['Semaine 7', "Incident grave : erreur de coordination sur un convoi, retard critique. L'enquête révèle plusieurs semaines sans jour de repos réel, aucune difficulté signalée par crainte de paraître « faible », et aucun lien fait entre les signaux dispersés."],
      ],
    },
    deliverable: "La grille complétée sur 7 semaines (onglet « Suivi bien-etre »), l'identification de la période où une alerte aurait dû déclencher une conversation, et une note d'intervention tenant sur une demi-page maximum.",
    tip: "Le template contient déjà une notation de Jonas sur les lignes 5 à 8. Pour cet exercice, ne la regardez pas : travaillez dans une copie où vous avez effacé C5:F8, puis comparez avec le fichier d'origine à l'auto-correction.",
  },
  {
    type: 'exercise',
    title: "Exercice noté — Les étapes à suivre pour le cas de Jonas",
    steps: [
      {
        title: 'Préparez la grille (Procédure 4, étapes 1 à 2)',
        actions: [
          "Copiez le template ; effacez A5:F8 dans votre copie de travail ; recopiez G9:H9 sur G5:H8.",
          "Reprenez les repères d'ancrage de la Procédure 4, étape 2, pour noter chaque indicateur.",
        ],
      },
      {
        title: 'Reconstituez les scores (Procédure 4, étapes 3 et 4)',
        actions: [
          "Pour chaque période, relevez les faits qui justifient chaque score supérieur à zéro.",
          "Saisissez quatre lignes : Semaine 1-2, Semaine 3-4, Semaine 5-6, Semaine 7 (incident), avec le nom de Jonas identique à chaque ligne.",
        ],
      },
      {
        title: "Lisez les statuts et la tendance (Procédure 4, étape 5)",
        actions: [
          "Notez le score et le statut de chaque période.",
          "Appliquez la règle de tendance : hausse d'au moins 3 points ou trois indicateurs sur quatre non nuls.",
          "Indiquez la première période où une conversation aurait dû avoir lieu, et celle où le statut devient ALERTE.",
        ],
      },
      {
        title: "Préparez l'entretien de la semaine 4 (Procédure 5, étapes 2 à 3)",
        actions: [
          "Listez les faits objectifs à présenter, sans jugement.",
          "Formulez les trois propositions de soutien : aménagement de charge, repos, orientation psychosociale.",
          "Écrivez la phrase qui évite toute remise en cause de sa compétence.",
        ],
      },
      {
        title: "Rédigez la note d'intervention (Procédure 5, étape 4)",
        actions: [
          "Six rubriques : en-tête, indicateurs, expression de la personne, soutien convenu, suivi, confidentialité.",
          "Demi-page maximum, sans diagnostic.",
        ],
      },
    ],
    tip: "Pour la note, partez du protocole fourni : les engagements de confidentialité et de non-représailles de ses sections 2 et 5 s'appliquent aussi à une conversation de soutien. Vous ne diffusez pas la note.",
  },
  {
    type: 'checklist',
    title: 'Auto-correction du cas de Jonas — votre livrable est correct si…',
    items: [
      "Quatre lignes saisies, avec le même nom de Jonas K. à chaque ligne, et les formules des colonnes G et H intactes.",
      "Notation de référence du template : Semaine 1-2 = 1, 0, 0, 0, soit 1 (OK) ; Semaine 3-4 = 2, 1, 1, 0, soit 4 (OK) ; Semaine 5-6 = 2, 1, 2, 2, soit 7 (A surveiller) ; Semaine 7 = 3, 2, 3, 3, soit 11 (ALERTE). Un écart d'un point sur un indicateur est acceptable s'il est justifié par un fait.",
      "La première période qui n'est plus verte est la Semaine 5-6 (score 7, « A surveiller ») ; le statut ALERTE n'apparaît qu'à la Semaine 7, après l'incident.",
      "Vous avez vu que le seuil seul arrive trop tard : à la Semaine 3-4, le score reste à 4 (OK), mais il a augmenté de 3 points en une période et trois indicateurs sont non nuls. Votre règle de tendance déclenche l'entretien dès la semaine 4.",
      "La note présente des faits datés (réponses sèches, deux absences d'un jour, aucune demande de repos) sans adjectif ni diagnostic.",
      "Trois propositions concrètes figurent dans la note : aménagement de charge, repos garanti, orientation psychosociale volontaire ; la demande de remplacement de l'adjoint y est aussi mentionnée.",
      "Une phrase explicite que la compétence n'est pas en cause, appuyée sur des faits, et un point de suivi daté.",
      "La note tient sur une demi-page maximum et indique qui la lit (le RH et le coordinateur seulement).",
      "Vous n'avez noté aucun score à partir d'une rumeur sans fait : chaque score supérieur à zéro est relié à un événement du récit.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice — Un message anonyme dans la boîte, base d'Uvira",
    instructions: "Vous êtes HR Officer de la base d'Uvira (fictive, même ONG). Le lundi 12 avril 2027 à 8 h, le délégué de Kinshasa vous remet le contenu de la boîte de signalement relevée le matin : un seul message, non signé, écrit en swahili puis traduit : « Le superviseur du site de distribution demande aux femmes de coucher avec lui pour être inscrites sur la liste. » La prochaine distribution est prévue le mardi 13 avril. Voici huit actions possibles, dans le désordre. Classez-les dans le bon ordre, supprimez celles qu'il ne faut pas faire, et datez les échéances.",
    table: {
      columns: ['Lettre', 'Action possible'],
      rows: [
        ['A', 'Afficher un accusé de réception collectif sur le site et dans les bureaux'],
        ['B', 'Convoquer le superviseur pour entendre sa version avant de décider'],
        ['C', 'Appeler sans délai le HR Manager, le Head of Mission et le Responsable Protection du Personnel'],
        ['D', 'Interroger les femmes du site pour recueillir des preuves'],
        ['E', 'Éloigner provisoirement le superviseur de tout contact avec les bénéficiaires, avant la distribution'],
        ['F', 'Ouvrir un dossier numéroté en accès restreint et noter les faits mot pour mot'],
        ['G', 'Informer le siège et, selon l\'accord de partenariat, le bailleur ; orienter vers l\'enquête dans les 5 jours ouvrés'],
        ['H', 'Chercher à savoir qui a déposé le message pour compléter l\'information'],
      ],
    },
    deliverable: "L'ordre des actions à mener, la liste des actions à ne pas faire avec la raison de chacune, et les dates d'échéance (accusé collectif et orientation vers l'enquête).",
    pitfall: "Deux actions de la liste sont des erreurs classiques d'un RH bien intentionné, une troisième compromet l'anonymat. Identifiez-les en vous demandant, pour chacune : qui est exposé si je fais cela ?",
  },
  {
    type: 'checklist',
    title: "Auto-correction du cas d'Uvira — votre livrable est correct si…",
    items: [
      "Ordre retenu : C, F, E, A, G (puis soutien et orientation des survivantes par le Responsable Protection, avec leur consentement). Les actions C et F se font le jour même, avant toute autre démarche.",
      "Les actions B, D et H sont supprimées : B expose les personnes avant la protection ; D est le rôle de l'enquêteur et risque de traumatiser ou d'exposer les femmes ; H viole l'anonymat qui fait la crédibilité du canal.",
      "La mesure E est décidée par le Head of Mission sur votre proposition, formulée comme mesure conservatoire non disciplinaire, notifiée avant la distribution du mardi 13 avril, rémunération maintenue.",
      "L'accusé collectif (A) est affiché au plus tard le mercredi 14 avril, soit sous 48 heures après la réception du lundi, sans information sur l'avancement.",
      "L'orientation vers l'enquête (G) est datée au plus tard du lundi 19 avril, soit 5 jours ouvrés après la réception du 12 avril.",
      "Le message n'est cité que dans le dossier restreint ; aucun courriel ne mentionne le nom du superviseur dans l'objet.",
      "Vous avez prévu de tester le canal : un message anonyme est la preuve que la boîte fonctionne, pas le signe d'un problème.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice complémentaire — Appliquez la méthode à votre propre base',
    instructions: "Si vous êtes en poste, refaites les Procédures 3 et 4 sur votre base réelle, avec vos vrais outils. Si vous n'êtes pas en poste, appliquez-les à une base fictive d'une ONG que vous connaissez, à partir de documents publics.",
    steps: [
      { title: 'Votre test de canal (Procédure 3)', actions: ["Testez chaque canal existant avec les cinq questions : liste des failles, vos corrections, et le protocole complété."] },
      { title: 'Votre dispositif de sensibilisation (Procédures 1 et 2)', actions: ["Rédigez la trame de votre session d'accueil de 30 minutes, avec l'exemple anonymisé et les coordonnées réelles.", "Posez dans un calendrier les échéances de rappel des 12 prochains mois."] },
      { title: 'Votre grille de bien-être (Procédures 4 et 5)', actions: ["Alimentez la grille sur une période pour votre équipe pilote avec des faits datés.", "Préparez la feuille de préparation d'un entretien de soutien pour la personne la moins verte."] },
    ],
    deliverable: "Votre protocole complété et validé, votre calendrier des rappels, et une première grille de suivi de votre équipe pilote avec la feuille de préparation d'un entretien.",
    pitfall: "N'utilisez jamais de données réelles de collègues (noms, absences, santé) en dehors des outils et dossiers RH sécurisés de votre organisation, y compris pour un exercice de formation.",
  },

  // ─── Pièges, récapitulatif, clôture ───────────────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Traiter la PSEA comme une formalité de signature à l'embauche, jamais réexpliquée : un Code de Conduite signé le jour 1 et jamais revisité devient un document mort dès la semaine 2. Sensibilisation d'arrivée de 30 minutes, rappel au minimum tous les 6 mois, registre à jour.",
      "Ignorer des signes de burnout jusqu'à l'arrêt de travail : chaque signal pris isolément semble gérable ; c'est l'absence de vision cumulée qui fait la crise. Alimentez la grille à rythme fixe et lisez la tendance, pas seulement le statut.",
      "Un canal de signalement qui n'est pas réellement sécurisé ou anonyme : un canal qui passe par le supérieur direct, ou dont tout le monde sait qui ouvre la boîte « anonyme », ne protège personne. Testez-le comme une victime potentielle.",
      "Confondre « être fort » avec « ne jamais signaler de difficulté » : dans beaucoup d'équipes, admettre une fatigue est perçu comme un aveu de faiblesse. Créez explicitement un espace où le dire est valorisé.",
      "Enquêter avant d'avoir sécurisé la personne qui signale : l'ordre est non négociable, protection d'abord, enquête ensuite. Convoquer la personne mise en cause avant la mesure d'éloignement expose la victime.",
      "Oublier le protocole une fois affiché : un test à blanc tous les 6 mois, des coordonnées vérifiées, aucun crochet « à compléter » laissé dans le document.",
      "Saisir le nom de la personne différemment d'une période à l'autre dans la grille, ou ajouter des lignes sous la ligne 24 : l'onglet de synthèse perd ses lignes et l'historique devient illisible.",
      "Diffuser la grille ou une note d'intervention à l'équipe ou au manager direct : seuls les aménagements de charge se communiquent, jamais le contenu.",
      "Organiser un debriefing psychologique obligatoire et collectif juste après un incident critique : proposez un soutien volontaire et suivez à J+2, J+7 et J+30.",
      "Clôturer un dossier PSEA sans contrôler les représailles : le calendrier J+7, J+30, J+90 et J+180 est la preuve que l'engagement de non-représailles est tenu.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez conduit une session d'accueil PSEA de 30 minutes, fait signer le Code après la session et inscrit la session au registre, avec un point individuel à J+14.",
      "Vous avez construit un calendrier annuel de rappels PSEA, animé un rappel de 15 minutes, rattrapé les absents et calculé un taux de couverture.",
      "Vous avez complété protocole-signalement-psea-protection-personnel.docx champ par champ, validé le protocole par écrit, l'avez affiché et testé à blanc.",
      "Vous avez alimenté grille-identification-precoce-burnout.xlsx sur plusieurs périodes, lu les statuts et la tendance, rempli l'onglet de synthèse et tenu une revue RH-management.",
      "Vous avez conduit un entretien de soutien et rédigé une note d'intervention d'une demi-page, avec un soutien daté et un suivi réévalué.",
      "Vous avez organisé les premiers secours psychologiques et le plan de soutien après un incident critique, avec un suivi à J+2, J+7 et J+30.",
      "Vous avez traité un signalement PSEA dans l'ordre : accusé de réception, protection immédiate, information, orientation vers l'enquête, soutien, clôture.",
      "Vous avez installé un calendrier de contrôle anti-représailles et savez traiter une représaille suspectée comme un nouveau signalement.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi la PSEA est un risque structurel et non un problème de « quelques individus ».",
      "Je sais mener une sensibilisation PSEA réelle à l'arrivée d'un employé, au-delà de la signature du Code de Conduite.",
      "Je sais citer les trois familles de signes précoces du burnout et donner un exemple observable pour chacune, ainsi que le quatrième indicateur de la grille.",
      "J'ai mis en place ou complété une grille de suivi périodique du bien-être de mon équipe avec le template fourni.",
      "Je sais concevoir un canal de signalement PSEA avec plusieurs points d'entrée et une option réellement anonyme.",
      "Je connais l'ordre de priorité correct en cas de signalement : protection de la personne d'abord, enquête ensuite.",
      "J'ai rédigé une note d'intervention de soutien avant que la situation ne devienne une crise, en m'appuyant sur le protocole fourni.",
      "Je sais organiser les premiers secours psychologiques après un incident critique et suivre les personnes touchées à J+2, J+7 et J+30.",
      "Je sais protéger une personne qui a signalé de bonne foi, avec un calendrier de contrôle et une réaction immédiate à toute représaille suspectée.",
      "J'ai réalisé l'exercice du cas de Jonas et mon livrable passe toutes les lignes de l'auto-correction.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 08 — Gestion des Conflits & Médiation en Équipe Multiculturelle : vous savez désormais protéger votre équipe et repérer l'épuisement avant la crise. Vous allez maintenant traiter les tensions entre personnes, y compris entre cultures, par la médiation, avant qu'elles ne deviennent un dossier disciplinaire.",
  },
]
