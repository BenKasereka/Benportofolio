// Module 08 — Gestion des Conflits & Médiation en Équipe Multiculturelle
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure est
// détaillée étape par étape et appliquée à un cas fil rouge unique (la base
// de Goma de Kivu Santé Solidaire), avec les deux templates remplis champ par
// champ. Les noms, chiffres et dates des exemples sont fictifs.
export default [
  {
    type: 'cover',
    title: 'Gestion des Conflits & Médiation en Équipe Multiculturelle',
    hook: "À la fin de ce module, vous aurez en main une grille d'identification précoce dont l'alerte d'escalade s'est déclenchée au bon moment, une fiche de qualification qui tranche entre malentendu culturel, faute et arbitrage, un protocole de médiation rempli de la première note d'entretien à la signature, un point de suivi documenté et une charte d'équipe avec ses rituels. Tout cela en suivant, étape par étape, ce qu'un HR Officer ou un HR Manager expérimenté fait quand une équipe multiculturelle se replie en silence.",
  },
  {
    type: 'objectives',
    items: [
      "Détecter un conflit avant qu'il n'éclate : tenir la grille grille-identification-precoce-conflits-equipe.xlsx en continu (indicateurs datés, sévérité 1 à 3, source) et interpréter l'onglet Alerte d'escalade, avec un statut ESCALADE daté et archivé.",
      "Distinguer un conflit de fond, une faute au sens du code de conduite et un malentendu culturel de communication, en séparant faits et interprétations dans une fiche de qualification écrite.",
      "Choisir entre médiation et arbitrage selon la nature réelle du différend, justifier ce choix par écrit et informer la bonne personne (HR Manager, Head of Mission) avant d'agir.",
      "Conduire les cinq étapes d'une médiation structurée avec protocole-mediation-conflit-equipe-multiculturelle.docx : entretiens individuels séparés, notes de pré-médiation distinctes, règles de dialogue acceptées, session conjointe, accord concret et vérifiable.",
      "Rester neutre de façon vérifiable : auto-diagnostic de vos réflexes culturels, reformulations strictement équivalentes, contrôle auprès de la partie la moins favorisée par votre style, coconduction ou supervision.",
      "Nommer la dimension culturelle d'un conflit sans désigner de fautif, puis fixer un point de suivi à 2 à 4 semaines et clore ou maintenir sous observation le dossier dans la grille.",
      "Construire avec une équipe sa culture de travail : charte de quelques comportements observables, trois rituels calendrés, plan de coaching du chef d'équipe et indicateurs de suivi.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un exposé sur la communication interculturelle : c'est la méthode complète d'une intervention RH sur un conflit d'équipe, appliquée à un seul cas suivi du premier signal faible jusqu'au point de suivi. À la fin, vous aurez produit sept livrables réutilisables tels quels sur votre propre mission.",
      "Le cas fil rouge (fictif, inspiré de situations réelles de l'Est de la RDC) : vous êtes toujours N. Mbusa, HR Officer de la base de Goma de Kivu Santé Solidaire (KSS), en poste depuis le lundi 3 août 2026. Le vendredi 14 août 2026 à 17 h 10, le chef d'équipe Logistique, L. Verhoeven, expatrié arrivé le 13 avril (quatre mois de présence), frappe à votre porte : « Je ne comprends pas ce qui se passe avec mon équipe : ils ne me disent jamais s'ils ne sont pas d'accord avec une décision, et je découvre par le Base Manager qu'il y a une vraie grogne depuis des semaines. » Son équipe nationale compte six personnes. Aucune faute n'a été commise : c'est un malentendu de style. La médiation doit avoir lieu sous cinq jours ouvrés, donc au plus tard le vendredi 21 août.",
    ],
    bullets: [
      "Livrable 1 — La grille d'identification précoce renseignée pour la base, avec le statut ESCALADE de l'équipe Logistique de Goma déclenché, daté et archivé.",
      "Livrable 2 — La fiche de qualification du conflit (faits / interprétations, test faute ou malentendu, choix médiation ou arbitrage) et le courriel d'information au HR Manager.",
      "Livrable 3 — Le protocole de médiation rempli, sections 1 à 6 : parties, notes de pré-médiation distinctes, règles de dialogue acceptées, accord, suivi, validation.",
      "Livrable 4 — Le plan de la session conjointe d'une page : horaires, rôles, formules de reformulation, phrase qui nomme la dimension culturelle.",
      "Livrable 5 — Le point de suivi documenté et la grille mise à jour (dossier clos ou maintenu sous observation).",
      "Livrable 6 — Votre auto-diagnostic de neutralité et le dispositif de coconduction ou de supervision décidé avant la première rencontre.",
      "Livrable 7 — La charte d'équipe (comportements observables), les trois rituels calendrés et le plan de coaching du chef d'équipe.",
    ],
    tip: "Si vous êtes HR Manager, conduisez vous-même ces étapes et informez le Head of Mission. Si vous êtes HR Officer, conduisez-les pour votre base et informez votre HR Manager avant chaque décision de niveau 2 (voir la matrice de décision du Module 01).",
  },
  {
    type: 'concept',
    title: 'Qui est qui dans le cas fil rouge',
    body: "Posez les noms sur les rôles avant d'agir. Les personnes déjà rencontrées dans les modules précédents gardent leur rôle ; les personnes nouvelles sont celles du conflit.",
    table: {
      columns: ['Rôle', 'Nom (fictif)', 'Lieu', 'Position dans cette situation'],
      rows: [
        ['HR Officer de base (vous)', 'N. Mbusa', 'Goma', "Médiatrice principale. Congolaise, parle swahili et français comme l'équipe nationale : vous devrez prouver votre neutralité."],
        ['HR Manager de mission', 'A. Kavira', 'Kinshasa', "Votre n+1 technique. Supervise votre démarche, valide les décisions de niveau 2, a observé directement l'équipe le 1er août lors d'une visite d'appui."],
        ['Base Manager', 'E. Kasongo', 'Goma', "N+1 administratif du chef d'équipe Logistique. Source des deux premiers signaux. Consulté, jamais présent en session."],
        ['Chef d\'équipe Logistique (partie A)', 'L. Verhoeven', 'Goma', "Cadre international, 4 mois de présence. Style direct et factuel. Vous a saisie le vendredi 14 août."],
        ['Équipe logistique nationale (partie B)', '6 personnes dont B. Muhindo (Magasinier principal, 9 ans d\'ancienneté) et S. Kahambu (Responsable du parc)', 'Goma', 'Registre de communication indirect avec la hiérarchie. Les quatre autres : G. Safari, R. Katembo, A. Mastaki, H. Bulenda.'],
        ['Coordinateur Programmes', 'Y. Haddad', 'Goma', "Co-médiateur : d'une troisième origine culturelle, sans lien hiérarchique avec le chef d'équipe ni avec l'équipe."],
        ['Assistant RH', 'P. Sifa', 'Goma', "Planifie les entretiens et tient la logistique : convocations individuelles, salle, copies."],
        ['Head of Mission', 'H. Mwamba', 'Kinshasa', "Informé de l'accord de médiation. Tranche seulement si la médiation échoue."],
      ],
    },
    tip: "Sur votre propre mission, construisez ce tableau avant d'ouvrir un dossier de conflit : il vous dit qui peut être médiateur sans lien avec les parties, et qui doit seulement être informé.",
  },
  {
    type: 'stat-callout',
    stat: '3 signaux en 30 jours',
    caption: "C'est le seuil qui fait passer une équipe en « ESCALADE - INTERVENTION REQUISE » dans la grille du module (ou une sévérité cumulée de 6). À Goma, ces trois signaux existaient entre le 14 juillet et le 1er août ; personne ne les avait rapprochés avant le vendredi 14 août.",
    context: "Chiffres fictifs. Le but de la grille n'est pas de prouver qu'un conflit existe : c'est de vous obliger à voir trois petits faits ensemble tant qu'une médiation légère suffit encore.",
  },

  // ─── Théorie essentielle ───────────────────────────────────────────────
  {
    type: 'concept',
    title: "Pourquoi les conflits interculturels s'enveniment différemment",
    body: [
      "Un HR Manager qui n'a géré que des équipes culturellement homogènes découvre, en contexte humanitaire multiculturel, que ses réflexes ne suffisent plus. Les gens ne se disputent pas davantage : c'est le mécanisme d'escalade qui change de nature.",
      "Dans une équipe homogène, un conflit part d'un désaccord de fond identifiable : une décision contestée, une répartition de tâches jugée injuste, une rivalité de pouvoir. En équipe multiculturelle, une part importante des tensions démarre dans un malentendu de communication que chaque partie interprète avec sa propre grille culturelle, sans jamais nommer cette grille.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "Désaccord de fond (hypothèse écartée) : personne ne conteste le planning des convois, ni la charge de travail, ni la rémunération.",
        "Malentendu de communication (hypothèse retenue) : une erreur de bordereau corrigée à voix haute devant toute l'équipe, lue d'un côté comme une efficacité normale, de l'autre comme une humiliation.",
      ],
    },
    highlight: "Ce qui s'envenime n'est pas toujours le désaccord initial : c'est souvent la boucle d'interprétation erronée qui se construit autour de lui. Traiter la situation comme « un problème de personnalité » ou « un manque de professionnalisme » rate la cause réelle.",
  },
  {
    type: 'concept',
    title: "La boucle d'interprétation erronée, étape par étape (cas de Goma)",
    body: "Pour intervenir, il faut savoir où casser la boucle. Elle comporte toujours les mêmes maillons : un fait, deux lectures, deux réactions, deux confirmations. Chaque tour renforce la lecture négative de l'autre.",
    example: {
      title: "La boucle à Goma, de juillet à août 2026",
      lines: [
        "1. Fait — mardi 7 juillet, en réunion d'équipe, L. Verhoeven signale à voix haute une erreur de quantité sur un bordereau de sortie (deuxième occurrence) et demande de le refaire avant midi. Intention : corriger vite, sans détour.",
        "2. Lecture de l'équipe — « Il a voulu humilier un collègue devant tous. » Personne ne le dit : contredire un chef en public n'est pas acceptable dans le registre professionnel de l'équipe.",
        "3. Réaction de l'équipe — plus aucune proposition en réunion, échanges limités au strict nécessaire, remarques faites au Base Manager et à B. Muhindo.",
        "4. Lecture du chef d'équipe — « Ils ne s'impliquent plus, ils ne disent jamais quand ils ne sont pas d'accord. » Il redouble de clarté et de fermeté pour obtenir de l'engagement.",
        "5. Confirmation — l'équipe lit cette fermeté renforcée comme la preuve de l'irrespect initial. Retour au maillon 2, un cran plus tendu.",
      ],
    },
    highlight: "La boucle ne s'arrête que lorsque quelqu'un met sur la table l'hypothèse d'un simple malentendu de style. Dans ce module, ce quelqu'un, c'est vous.",
  },
  {
    type: 'comparison-table',
    title: 'Direct ou indirect : le même comportement, deux lectures opposées',
    columns: ['Comportement observé', 'Lecture probable d\'un interlocuteur direct', 'Lecture probable d\'un interlocuteur indirect', 'Ce que vous vérifiez en entretien'],
    rows: [
      ['Instruction très directe, sans formule de politesse', 'Claire, efficace, respectueuse du temps de chacun', 'Cassante, irrespectueuse, parfois hostile', "Quelle était l'intention ? Comment a-t-elle été comprise ?"],
      ['Silence en réunion après une décision', 'Adhésion (ou manque de transparence)', 'Désaccord exprimé par le canal acceptable : se taire, puis parler en aparté', "Où et à qui chacun exprime-t-il ses désaccords d'habitude ?"],
      ['Correction d\'une erreur devant les autres', 'Gain de temps, transparence', 'Perte de face, humiliation publique', 'Où et comment la correction a-t-elle eu lieu ? Qui était présent ?'],
      ['Contredire un supérieur en réunion', 'Preuve d\'engagement', 'Manque de respect grave, quel que soit le fond', 'Que se passe-t-il quand on conteste une décision ici ?'],
    ],
  },
  {
    type: 'warning',
    title: 'Piège classique de terrain : le silence pris pour un accord',
    items: [
      "Un HR Manager international interprète le silence d'un membre d'équipe national en réunion comme une adhésion.",
      "En réalité, il peut s'agir d'un désaccord profond exprimé par le canal culturellement acceptable : le silence, ou une remarque en aparté après la réunion.",
      "Ce silence mal interprété devient ensuite un conflit larvé, découvert bien plus tard sous une forme aggravée : démotivation, rumeurs, départ.",
      "Ces lectures sont des tendances observées, pas des règles attachées à une nationalité : ne dites jamais « les Congolais font… » ou « les Européens font… » ; parlez de styles et de comportements observés chez des personnes précises.",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Médiation vs arbitrage : deux logiques, pas deux synonymes',
    columns: ['', 'Médiation', 'Arbitrage'],
    rows: [
      ['Rôle du HR Manager / médiateur', 'Reste strictement neutre, ne prend pas position sur le fond, facilite l\'écoute mutuelle et la recherche d\'un accord.', 'Écoute les deux parties puis tranche : une décision est rendue et s\'impose.'],
      ['Qui décide de l\'issue', 'Les parties elles-mêmes, avec l\'aide du médiateur pour structurer le dialogue.', 'Le HR Manager (ou une autre autorité désignée), qui rend une décision.'],
      ['Quand l\'utiliser', 'Conflit interpersonnel, relationnel, souvent alimenté par un malentendu de communication ; les deux parties ont intérêt à continuer à travailler ensemble.', 'Décision nécessaire dans un délai court, règle ou politique claire manifestement enfreinte, ou médiation tentée sans accord possible.'],
      ['Résultat typique', 'Un accord mutuellement compris, documenté, avec un plan de suivi.', 'Une décision, parfois assortie d\'une sanction ou d\'une mesure organisationnelle, non négociable une fois rendue.'],
    ],
  },
  {
    type: 'concept',
    title: 'Le coût d\'une mauvaise bascule : trop vite en arbitrage, ou trop longtemps en médiation',
    body: [
      "Basculer trop vite en arbitrage sur un conflit qui aurait pu se résoudre par médiation prive l'équipe d'un accord dont elle serait l'auteure : un accord imposé de l'extérieur est presque toujours moins durable qu'un accord construit par les parties.",
      "S'obstiner en médiation sur une situation qui exige clairement une décision (une violation avérée du code de conduite, par exemple) fait perdre un temps précieux et peut être perçu comme une absence de leadership.",
    ],
    example: {
      title: 'À Goma',
      body: "Si vous aviez « tranché » le 14 août en donnant raison à L. Verhoeven (« les consignes doivent être respectées ») ou à l'équipe (« le chef doit changer de ton »), vous auriez réglé un symptôme et ouvert un second conflit : celui des perdants contre la RH. Aucune règle n'avait été enfreinte, aucune décision urgente n'était à prendre : tout désignait la médiation.",
    },
  },
  {
    type: 'concept',
    title: 'Ce qui ne se médie pas : le cadre à respecter avant toute médiation',
    body: "Un professionnel sait aussi quand ne pas médier. Certaines situations relèvent d'une procédure formelle prévue par la politique de votre ONG, et une médiation informelle y ferait obstacle ou mettrait une personne en danger. Cette règle prolonge le contenu du module par la pratique standard des organisations humanitaires.",
    bullets: [
      "Harcèlement, discrimination, violence physique, menaces : procédure de plainte et d'enquête de l'ONG, pas de médiation.",
      "Exploitation et abus sexuels, atteinte à la protection des bénéficiaires : signalement immédiat par le canal prévu par la politique de protection, sans enquête personnelle.",
      "Fraude, corruption, détournement : canal anti-fraude et information du Head of Mission (et du siège si la politique l'exige).",
      "Violation avérée et claire du code de conduite ou d'une règle de sécurité : décision (arbitrage) et mesure disciplinaire de premier niveau, pas négociation.",
      "Rapport de pouvoir tel qu'une partie n'ose pas parler en présence de l'autre : entretiens individuels, puis décision de la hiérarchie si nécessaire.",
    ],
    pitfall: "Si, au milieu d'un entretien, une partie évoque l'un de ces faits, arrêtez-vous, ne promettez pas la confidentialité absolue, notez les faits tels que dits et remontez-les au niveau prévu par la politique. Vous ne triez pas la gravité seule.",
  },
  {
    type: 'concept',
    title: "Culture d'équipe : le déterminant le plus puissant sur la durée",
    body: [
      "Une médiation réussie traite l'épisode déclencheur, pas la culture d'équipe qui l'a rendu possible. Sans travail continu, la même dynamique de malentendu réapparaît tôt ou tard, avec d'autres personnes.",
      "Trois leviers agissent au quotidien sur la façon dont une équipe gère naturellement le désaccord : les valeurs (des comportements observables, pas des slogans), les rituels (des moments récurrents où l'on parle autrement), le leadership (ce que fait le manager, pas ce qu'il dit).",
    ],
    table: {
      columns: ['Levier', 'Ce que c\'est', 'Exemple pour la Logistique de Goma'],
      rows: [
        ['Valeurs', "Quatre ou cinq comportements communs, formulés en « nous » et observables par un tiers", "« Une erreur individuelle se corrige en tête-à-tête. »"],
        ['Rituels', "Moments récurrents, courts, calendrés, avec un animateur nommé", "Pré-réunion du lundi à 15 h avec les deux représentants de l'équipe."],
        ['Leadership', "Trois ou quatre comportements du manager, coachés et mesurés", "Donner la raison de chaque consigne et demander si l'échéance est tenable."],
      ],
    },
    highlight: "Procédure 5 de ce module : comment construire ces trois leviers avec l'équipe, en cinq étapes.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire à maîtriser dès ce module',
    terms: [
      { term: 'Conflit larvé', definition: "Conflit non encore exprimé ouvertement mais qui affecte déjà la dynamique d'équipe : baisse de collaboration spontanée, communication réduite au strict minimum, alliances informelles." },
      { term: 'Malentendu culturel de communication', definition: "Divergence d'interprétation d'un même message ou comportement due à des normes culturelles différentes sur la façon d'exprimer un désaccord, une critique ou une instruction. À ne jamais confondre avec un désaccord de fond." },
      { term: "Boucle d'interprétation erronée", definition: "Mécanisme par lequel chaque partie renforce sa lecture négative de l'autre à chaque échange, sans jamais envisager un malentendu de style." },
      { term: 'Neutralité du médiateur', definition: "Engagement à ne favoriser aucune des parties, y compris la culture qui lui est la plus familière. Elle n'est jamais acquise : elle se rend vérifiable (Procédure 4)." },
      { term: 'Entretien individuel séparé', definition: "Rencontre confidentielle avec une seule partie, avant toute session conjointe. Moment où chacun expose sa version sans la pression de l'autre." },
      { term: 'Reformulation neutre', definition: "Reprise à voix haute, dans des termes équivalents, de ce que vient de dire une partie, pour qu'elle se sente entendue et puisse corriger une erreur d'interprétation." },
      { term: 'Accord de façade', definition: "Accord que la partie la plus réservée confirme poliment sans y adhérer. Il apparaît quand on saute les entretiens séparés ou qu'on convoque trop vite la session conjointe." },
      { term: 'Culture d\'équipe', definition: "Ensemble des valeurs, rituels et comportements de leadership qui façonnent, au quotidien, la façon dont l'équipe gère le désaccord." },
      { term: 'ESCALADE - INTERVENTION REQUISE', definition: "Statut de l'onglet Alerte d'escalade de la grille : 3 indicateurs ou plus (ou sévérité cumulée de 6 ou plus) sur 30 jours glissants pour la même équipe. Il déclenche une médiation sous 5 jours ouvrés." },
    ],
  },
  {
    type: 'concept',
    title: 'Vos outils pour ce module',
    body: [
      "Deux templates, utilisés champ par champ dans les procédures qui suivent. Le premier se tient en continu, avant tout incident ; le second ne s'ouvre qu'au moment d'une médiation. Les entretiens individuels séparés sont l'outil central de la médiation : ils se préparent, se conduisent et se notent avec méthode (Procédure 3).",
      "Excel ou Google Sheets pour la grille ; Word pour le protocole. Dans les deux cas, enregistrez le fichier dans le dossier RH confidentiel de la mission, avec un accès limité.",
    ],
    table: {
      columns: ['Template', 'Ce qu\'il contient', 'Utilisé dans'],
      rows: [
        ['grille-identification-precoce-conflits-equipe.xlsx', "Onglet Indicateurs : colonnes A Équipe / Base, B Indicateur de tension observé, C Date constatée, D Sévérité (1-3), E Rapporté par ; 20 lignes de saisie (5 à 24). Onglet Alerte d'escalade : date de référence, nombre d'indicateurs et somme de sévérité sur 30 jours, statut.", 'Procédures 1, 2 et 3 (étape 12)'],
        ['protocole-mediation-conflit-equipe-multiculturelle.docx', "6 sections : 1 parties et médiateur ; 2 notes de pré-médiation (une colonne par partie) ; 3 règles de dialogue ; 4 accord ; 5 plan de suivi ; 6 validation.", 'Procédures 3 et 4'],
      ],
    },
    pitfall: "Le protocole réunit dans un même fichier les notes confidentielles des deux parties (section 2). Ne l'envoyez jamais tel quel aux parties : remettez-leur un extrait (sections 1, 3, 4, 5, 6) et gardez le fichier complet dans le dossier RH.",
  },
  {
    type: 'concept',
    title: 'Vue d\'ensemble : cinq procédures, un seul fil',
    body: "Les procédures s'enchaînent dans l'ordre d'une vraie intervention. Chaque étape est une diapositive : vous pouvez la suivre en parallèle de votre propre dossier.",
    bullets: [
      "Procédure 1 (5 étapes) — Détecter tôt : tenir la grille d'identification précoce et réagir à son signal.",
      "Procédure 2 (4 étapes) — Qualifier le conflit : accueillir la demande, séparer faits et interprétations, tester faute ou malentendu, choisir médiation ou arbitrage.",
      "Procédure 3 (12 étapes) — Conduire la médiation structurée : du dossier ouvert au point de suivi, section par section du protocole.",
      "Procédure 4 (4 étapes) — Rester neutre quand le médiateur appartient lui-même à l'une des cultures en présence.",
      "Procédure 5 (5 étapes) — Construire la culture d'équipe : charte, rituels, leadership, mesure.",
    ],
    result: "Calendrier du fil rouge : vendredi 14 août (alerte), lundi 17 (ouverture), mardi 18 (entretiens), jeudi 20 (session conjointe et accord), jeudi 10 septembre (point de suivi), jeudi 24 septembre (clôture).",
  },

  // ─── Procédure 1 — Détecter tôt ────────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 1 — Détecter tôt : tenir la grille d\'identification précoce',
    body: "Trop de HR Managers ne s'intéressent à un conflit qu'une fois qu'il éclate publiquement. La grille est un outil de suivi continu, pas un outil d'urgence : elle documente les signaux faibles (baisse de collaboration, tension observée en réunion, plainte informelle rapportée par un Base Manager) tant qu'une médiation légère suffit. Cette procédure vous prend une demi-journée à installer, puis dix minutes par semaine.",
    bullets: [
      "Étape 1 — Ouvrir le classeur et l'adapter à vos équipes.",
      "Étape 2 — Fixer votre barème de sévérité et votre catalogue de signaux.",
      "Étape 3 — Saisir chaque indicateur le jour où vous le constatez (colonnes A à E).",
      "Étape 4 — Lire l'onglet Alerte d'escalade et recalculer à la main.",
      "Étape 5 — Réagir selon le statut et installer la revue hebdomadaire.",
    ],
    result: "Livrable 1 : la grille renseignée pour votre base, avec un statut ESCALADE daté et archivé si les seuils sont atteints.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Ouvrir le classeur et l\'adapter à vos équipes',
    intro: "Entrée : le fichier grille-identification-precoce-conflits-equipe.xlsx et la liste des équipes ou bases que vous suivez. Le template arrive avec cinq lignes d'exemple (Goma ×3, Bunia ×1, Uvira ×1) : vous les relisez, puis vous les remplacez par vos propres constats.",
    steps: [
      {
        title: 'Enregistrez le classeur et repérez sa structure',
        actions: [
          "Ouvrez le fichier et enregistrez-le sous Grille_conflits_KSS_2026-08.xlsx dans le dossier RH confidentiel de la mission (jamais sur le bureau, jamais en pièce jointe sans contrôle).",
          "Repérez les deux onglets : Indicateurs (saisie) et Alerte d'escalade (calcul automatique, « ne pas modifier les formules »).",
          "Dans Indicateurs, repérez les en-têtes de la ligne 4 : Équipe / Base (A), Indicateur de tension observé (B), Date constatée (C), Sévérité (1-3) (D), Rapporté par (E).",
          "Notez que les lignes 5 à 24 sont la zone de saisie : 20 lignes, que les formules de l'onglet Alerte lisent exactement.",
        ],
      },
      {
        title: 'Adaptez la liste déroulante des équipes',
        actions: [
          "Cliquez en A5, ouvrez Données > Validation des données : la liste n'autorise que trois équipes (Base Goma - Logistique, Base Bunia - Santé, Base Uvira - WASH).",
          "Pour suivre une équipe de plus, modifiez la source de la liste sur la plage A5:A24 : ajoutez le nom après une virgule, sans espace parasite.",
          "Dans l'onglet Alerte d'escalade, saisissez exactement le même nom dans la première cellule libre de la colonne A (A10) : les formules des lignes 10 à 13 sont déjà prêtes et s'allument dès que le nom est saisi.",
          "Pour repartir de zéro, effacez le contenu de A5:E9 (sélectionnez les cellules et appuyez sur Suppr ; ne supprimez pas les lignes).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 10 août 2026',
      lines: [
        "Fichier enregistré : Grille_conflits_KSS_2026-08.xlsx, dossier « RH_confidentiel/Conflits », accès limité à N. Mbusa et A. Kavira.",
        "Équipe ajoutée : « Base Goma - Santé » — liste de A5:A24 devenue « Base Goma - Logistique,Base Goma - Santé,Base Bunia - Santé,Base Uvira - WASH ».",
        "Onglet Alerte d'escalade : « Base Goma - Santé » saisie en A10 ; B10, C10 et D10 affichent 0, 0, NORMAL.",
        "Les cinq lignes d'exemple sont conservées pour l'instant : elles servent de repère pour vérifier vos premiers calculs.",
      ],
    },
    result: "Fait quand : le fichier est dans le bon dossier, la liste déroulante contient toutes vos équipes et chaque équipe de la liste figure aussi en colonne A de l'onglet Alerte d'escalade.",
    pitfall: "N'ajoutez jamais une ligne sous la ligne 24 : les formules ne la voient pas et l'onglet Alerte affichera NORMAL alors que des signaux existent. Quand la zone est pleine, archivez les dossiers clos dans un autre fichier et effacez leurs cellules.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Fixer votre barème de sévérité et votre catalogue de signaux',
    intro: "La colonne D n'accepte que 1, 2 ou 3. Sans définition écrite de ces trois niveaux, deux observateurs noteront le même fait différemment et la somme de l'onglet Alerte ne voudra rien dire. Le barème ci-dessous est une proposition de pratique de terrain : calibrez-le avec votre HR Manager.",
    steps: [
      {
        title: 'Dressez le catalogue des signaux observables',
        actions: [
          "Listez les signaux faibles à surveiller : baisse de la collaboration spontanée, tension observée en réunion, plainte informelle rapportée par un Base Manager, communication réduite au strict nécessaire, messages écrits secs, évitement entre deux personnes, alliances informelles.",
          "Ajoutez ceux de votre contexte : absences à répétition aux réunions, retards sur livrables sans explication, rumeurs.",
          "Écrivez chaque signal comme un comportement observable, jamais comme un jugement sur une personne.",
        ],
      },
      {
        title: 'Écrivez le barème 1 à 3 et la règle de rédaction',
        actions: [
          "Rédigez une phrase de définition par niveau (voir le tableau ci-dessous).",
          "Collez-la en commentaire de l'en-tête D4 (clic droit > Insérer un commentaire) pour que tous les contributeurs voient la même règle.",
          "Faites relire le barème par un Base Manager et par votre HR Manager avant la première saisie.",
        ],
      },
    ],
    table: {
      columns: ['Sévérité', 'Définition proposée', 'Exemple (fil rouge)'],
      rows: [
        ['1', "Fait isolé, sans effet sur le travail, résolu ou résorbé en moins de 48 heures", "Désaccord sur un planning de garde à Bunia, résolu en 24 h."],
        ['2', "Fait répété, ou visible par plusieurs personnes, avec un effet léger sur le travail ou l'ambiance", "Baisse d'initiative spontanée de l'équipe en réunion hebdomadaire."],
        ['3', "Évitement ouvert, ou effet net sur le travail, ou remontée hiérarchique ; l'équipe élargie s'en aperçoit", "Réduction visible des échanges informels avec le chef d'équipe."],
      ],
    },
    example: {
      title: 'Réécrire un jugement en fait observable',
      lines: [
        "Jugement à éviter : « L. Verhoeven est autoritaire et l'équipe est passive. »",
        "Fait à saisir : « Depuis le 07/07, aucune proposition de l'équipe en réunion du mardi ; remarques rapportées au Base Manager par 3 personnes. »",
      ],
    },
    result: "Fait quand : chaque niveau de sévérité a une définition écrite en D4 et vos premiers indicateurs sont rédigés comme des faits.",
    pitfall: "La grille ne contient aucun nom de personne : la colonne A désigne une équipe, pas un individu. Évitez aussi tout élément de santé, de vie privée ou d'appartenance qui n'a rien à faire dans un tableau partagé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Saisir un indicateur le jour où vous le constatez (colonnes A à E)',
    intro: "Le bandeau du template le dit : chaque indicateur doit être daté dès sa constatation, pas reconstitué de mémoire plus tard, sinon la fenêtre de 30 jours n'est pas fiable. Quand le signal vient d'un tiers, utilisez la date inscrite dans sa source écrite (agenda du Base Manager, compte rendu de visite) et classez la pièce.",
    steps: [
      {
        title: 'Remplissez la ligne, colonne par colonne',
        actions: [
          "A — Équipe / Base : choisissez l'équipe dans la liste déroulante (ne tapez pas).",
          "B — Indicateur de tension observé : une phrase factuelle, sans jugement (voir étape 2).",
          "C — Date constatée : date réelle de constatation au format jj/mm/aaaa.",
          "D — Sévérité (1-3) : choisissez dans la liste selon le barème. Un 3 s'affiche en rouge.",
          "E — Rapporté par : fonction de la personne qui a constaté (« Base Manager », « HR Manager (observation directe) », « Collègue d'équipe »).",
        ],
      },
      {
        title: 'Classez la source et vérifiez la ligne',
        actions: [
          "Enregistrez la pièce source (extrait d'agenda, mail, compte rendu) dans le dossier du dossier de conflit, avec la date dans le nom du fichier.",
          "Relisez la ligne : cinq cellules remplies, aucune date au futur, aucune faute dans le nom d'équipe.",
        ],
      },
    ],
    table: {
      columns: ['Équipe / Base', 'Indicateur de tension observé', 'Date constatée', 'Sévérité (1-3)', 'Rapporté par'],
      rows: [
        ['Base Goma - Logistique', "Baisse notable d'initiative spontanée de l'équipe en réunion", '14/07/2026', '2', 'Base Manager'],
        ['Base Goma - Logistique', 'Remarques informelles rapportées par plusieurs membres au Base Manager', '22/07/2026', '2', 'Base Manager'],
        ['Base Goma - Logistique', "Réduction visible des échanges informels avec le chef d'équipe", '01/08/2026', '3', 'HR Manager (observation directe)'],
      ],
    },
    example: {
      title: 'Fil rouge — vendredi 14 août 2026, 18 h : d\'où viennent les trois lignes',
      lines: [
        "14/07 : extrait de l'agenda d'E. Kasongo, note du mardi : « réunion du mardi sans une proposition de l'équipe, première fois ».",
        "22/07 : mail d'E. Kasongo à lui-même, rapporté lors de votre entretien du 14/08 : trois membres de l'équipe sont venus le voir séparément.",
        "01/08 (samedi) : compte rendu de visite d'appui d'A. Kavira, réunion de préparation du convoi du lundi 3 août : l'équipe quitte la salle sans échanger avec le chef d'équipe.",
        "Les trois pièces sont classées dans « Dossier_Goma-Logistique_2026-08 ». La réunion du 7 juillet n'est pas une ligne de la grille : c'est l'événement déclencheur, décrit dans les notes d'entretien.",
      ],
    },
    result: "Fait quand : chaque ligne a ses cinq cellules, une date vérifiable et une pièce source classée. Les trois lignes ci-dessus sont celles du template d'origine : votre résultat doit coïncider.",
    pitfall: "Écrire « tension dans l'équipe » en colonne B sans fait ni date, ou dater l'indicateur du jour de saisie au lieu du jour de constat : l'onglet Alerte calculerait une fenêtre fausse.",
    tip: "Saisissez dans les 24 heures : une ligne écrite à chaud prend deux minutes, une reconstitution trois semaines plus tard vous coûte une demi-journée et perd sa fiabilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Lire l\'onglet Alerte d\'escalade et recalculer à la main',
    intro: "L'onglet se calcule seul à partir de Indicateurs. Vous ne le modifiez pas, mais vous devez savoir le recalculer : c'est ce qui vous permet de défendre le statut devant votre HR Manager.",
    steps: [
      {
        title: 'Comprenez les trois calculs',
        actions: [
          "C4 « Date de référence » = la date la plus récente de toute la colonne C (=MAX(Indicateurs!C5:C24)), toutes équipes confondues. Ce n'est pas la date du jour.",
          "B « Nb indicateurs (fenêtre 30j) » = nombre de lignes de l'équipe dont la date est comprise entre C4 − 30 jours et C4.",
          "C « Somme sévérité (fenêtre 30j) » = somme de la colonne D sur les mêmes lignes.",
          "D « Statut » : ESCALADE - INTERVENTION REQUISE si B ≥ 3 ou C ≥ 6 ; A SURVEILLER DE PRES si B ≥ 2 ou C ≥ 4 ; sinon NORMAL.",
        ],
      },
      {
        title: 'Recalculez à la main pour chaque équipe',
        actions: [
          "Repérez la date de référence : la plus récente de la colonne C.",
          "Retranchez 30 jours pour obtenir le début de fenêtre.",
          "Comptez et additionnez les lignes de l'équipe dans la fenêtre, puis appliquez les seuils.",
          "Comparez avec l'affichage du classeur : toute différence signale une erreur de saisie.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état du classeur le vendredi 14 août, 18 h 15',
      lines: [
        "Date de référence : la plus récente est le 05/08/2026 (indicateur d'Uvira). Début de fenêtre : 05/08 − 30 jours = 06/07/2026.",
        "Goma - Logistique : 14/07, 22/07, 01/08, toutes dans la fenêtre → 3 indicateurs, sévérité 2 + 2 + 3 = 7 → ESCALADE - INTERVENTION REQUISE (B ≥ 3 et C ≥ 6).",
        "Bunia - Santé : 10/07 dans la fenêtre → 1 indicateur, sévérité 1 → NORMAL.",
        "Uvira - WASH : 05/08 → 1 indicateur, sévérité 2 → NORMAL. Goma - Santé : 0, 0 → NORMAL.",
      ],
    },
    table: {
      columns: ['Équipe / Base', 'Nb indicateurs (30 j)', 'Somme sévérité (30 j)', 'Statut'],
      rows: [
        ['Base Goma - Logistique', '3', '7', 'ESCALADE - INTERVENTION REQUISE'],
        ['Base Bunia - Santé', '1', '1', 'NORMAL'],
        ['Base Uvira - WASH', '1', '2', 'NORMAL'],
        ['Base Goma - Santé', '0', '0', 'NORMAL'],
      ],
    },
    result: "Fait quand : vos chiffres calculés à la main égalent ceux du classeur, et vous pouvez dire en une phrase pourquoi chaque équipe a son statut.",
    pitfall: "La fenêtre glisse avec la date de référence, pas avec le calendrier. Si un indicateur daté du 14/08 était saisi ailleurs, le début de fenêtre passerait au 15/07 : le 14/07 de Goma sortirait, et l'équipe repasserait à A SURVEILLER DE PRES (2 indicateurs, sévérité 5) alors que la crise est intacte. Le jour où ESCALADE apparaît, enregistrez le classeur sous un nom daté et imprimez l'onglet en PDF.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Réagir selon le statut et installer la revue hebdomadaire',
    intro: "Un statut ne sert à rien si rien ne se passe ensuite. La note de bas de l'onglet le dit : un statut ESCALADE déclenche une médiation sous 5 jours ouvrés avec le protocole fourni. Les deux autres statuts demandent aussi une action, plus légère.",
    steps: [
      {
        title: 'Appliquez la réaction prévue pour chaque statut',
        actions: [
          "NORMAL : continuez l'observation, pas d'action particulière ; l'équipe reste dans la revue hebdomadaire.",
          "A SURVEILLER DE PRES : dans la semaine, entretien de contexte avec le manager ou le Base Manager de l'équipe, et qualification préliminaire (Procédure 2, étapes 1 et 2).",
          "ESCALADE - INTERVENTION REQUISE : informez votre HR Manager le jour même, qualifiez le conflit (Procédure 2), puis conduisez la médiation sous 5 jours ouvrés (Procédure 3).",
        ],
      },
      {
        title: 'Installez la revue hebdomadaire de dix minutes',
        actions: [
          "Bloquez un créneau fixe dans votre agenda (par exemple le vendredi à 16 h) : « Revue grille conflits ».",
          "Demandez à chaque Base Manager, une fois par mois, trois questions ouvertes : quels échanges ont changé dans vos équipes ? Y a-t-il des personnes qui s'évitent ? Quelles plaintes informelles avez-vous reçues ?",
          "Saisissez les nouveaux indicateurs, lisez l'onglet Alerte et notez la décision dans votre agenda de suivi.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vendredi 14 août, 18 h 20',
      lines: [
        "Statut constaté : Goma - Logistique en ESCALADE (3 indicateurs, sévérité 7). Délai de médiation : 5 jours ouvrés à partir du vendredi 14 août, donc au plus tard le vendredi 21 août.",
        "Actions : classeur enregistré sous Grille_conflits_KSS_2026-08-14_ESCALADE.xlsx ; onglet Alerte exporté en PDF ; courriel à A. Kavira : « Statut ESCALADE à Goma - Logistique, détails en pièce jointe, je commence la qualification lundi à 8 h, médiation prévue avant le 21/08. »",
        "Agenda : « Revue grille conflits » chaque vendredi à 16 h, à partir du 21/08.",
      ],
    },
    result: "Fait quand : un statut ESCALADE a toujours un courriel daté à votre HR Manager et une date de médiation dans l'agenda ; la revue hebdomadaire a lieu même quand tout est NORMAL.",
    tip: "Ne consultez pas la grille seulement quand quelqu'un vous alerte : le cas de Goma montre que le signal existait depuis plus d'un mois avant qu'on l'aperçoive. La régularité de la revue vaut plus que la précision du barème.",
  },

  // ─── Procédure 2 — Qualifier le conflit ────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 2 — Qualifier le conflit avant d\'intervenir',
    body: "Un statut ESCALADE dit qu'il faut intervenir, pas comment. Avant d'ouvrir le protocole, vous devez savoir à quoi vous avez affaire : un conflit de fond, une faute, ou un malentendu culturel de communication ? et si la logique est celle de la médiation ou celle de l'arbitrage. Cette procédure prend une demi-journée ; la décision est provisoire jusqu'aux entretiens individuels, puis confirmée.",
    bullets: [
      "Étape 1 — Recevoir la demande sans prendre parti.",
      "Étape 2 — Séparer les faits des interprétations dans une fiche à trois colonnes.",
      "Étape 3 — Passer le test « faute ou malentendu ? ».",
      "Étape 4 — Choisir médiation ou arbitrage, le justifier et informer.",
    ],
    result: "Livrable 2 : une fiche de qualification d'une page, validée par votre HR Manager par courriel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 4',
    title: 'Recevoir la demande sans prendre parti',
    intro: "La personne qui vous saisit en premier est rarement neutre dans son récit, et vous êtes naturellement tentée de la croire : elle est devant vous. Cette étape fixe les règles du jeu en dix minutes, sans rien trancher.",
    steps: [
      {
        title: 'Écoutez 20 à 30 minutes, sans corriger',
        actions: [
          "Fermez la porte, coupez le téléphone, asseyez-vous à côté de la personne plutôt qu'en face derrière votre bureau.",
          "Laissez-la raconter sans l'interrompre ; posez au plus deux questions de clarification factuelle (« Quand ? » « Qui était présent ? »).",
          "Posez la question qui ouvre la dimension culturelle sans la présumer : « Quand cela s'est produit, comment avez-vous compris l'intention de l'autre personne ? »",
        ],
      },
      {
        title: 'Cadrez la suite, en trois phrases',
        actions: [
          "Dites ce que vous allez faire : écouter chacun séparément avant toute conclusion.",
          "Dites ce que vous ne ferez pas : donner raison ou tort aujourd'hui.",
          "Dites ce que vous attendez : qu'il ou elle ne reparle pas du dossier à l'équipe d'ici les entretiens.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vendredi 14 août, 17 h 10 à 17 h 35',
      lines: [
        "L. Verhoeven : « Ils ne me disent jamais s'ils ne sont pas d'accord. Et je découvre par E. Kasongo qu'il y a une vraie grogne depuis des semaines. »",
        "Vous : « Quand vous leur donnez une consigne, comment comprenez-vous leur silence ? » — « Comme un manque d'implication. »",
        "Votre cadrage : « Merci de m'en parler. Je vais écouter chacun séparément avant de vous dire quoi que ce soit. Je ne vous dis pas aujourd'hui qui a raison, ni ce que sera le résultat. D'ici là, merci de ne pas aborder le sujet avec l'équipe. »",
      ],
    },
    result: "Fait quand : vous avez noté les faits entendus (sans adjectif), la question culturelle a été posée, et la personne a compris que vous n'êtes pas son avocate.",
    pitfall: "Dire « je comprends tout à fait » ou « effectivement, c'est inacceptable » : en une phrase, vous venez de prendre parti et l'autre partie le saura. Dites « je vous entends » et rien de plus sur le fond.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 4',
    title: 'Séparer les faits des interprétations dans une fiche à trois colonnes',
    intro: "Un conflit interculturel s'envenime par l'interprétation, pas par le fait. La fiche vous oblige à écrire ce qui est observable d'un côté, ce que chacun en conclut de l'autre. Vous la commencez avec les sources déjà disponibles (grille, Base Manager, demande du chef d'équipe) et la complétez après les entretiens.",
    steps: [
      {
        title: 'Créez la fiche et remplissez la colonne « Fait observable »',
        actions: [
          "Ouvrez un document « Fiche_qualification_Goma-Logistique_2026-08 » dans le dossier de conflit.",
          "Créez un tableau à quatre colonnes : Fait observable / Lecture de la partie A / Lecture de la partie B / Source.",
          "Écrivez un fait par ligne, sans adjectif, avec date et lieu ; indiquez la source (grille, entretien, observation).",
        ],
      },
      {
        title: 'Remplissez les deux colonnes de lecture et repérez les écarts',
        actions: [
          "Pour chaque fait, écrivez entre guillemets la lecture exprimée par chaque partie (utilisez leurs mots).",
          "Laissez « à recueillir » quand vous n'avez pas encore entendu une partie : ne devinez jamais.",
          "Surlignez les lignes où les deux lectures s'opposent alors que le fait est le même : ce sont les lignes de malentendu.",
        ],
      },
    ],
    table: {
      columns: ['Fait observable', 'Lecture de L. Verhoeven (A)', 'Lecture de l\'équipe (B)', 'Source'],
      rows: [
        ["07/07 : erreur de quantité sur un bordereau de sortie signalée à voix haute en réunion, correction demandée avant midi", "Correction claire et efficace, deuxième occurrence de l'erreur", "« Il a voulu humilier un collègue devant tous. »", 'Entretiens 17 et 18/08'],
        ["Depuis juillet : aucune proposition de l'équipe en réunion du mardi", "« Un manque d'implication. »", "À recueillir en entretien", 'Grille (14/07), A'],
        ["Remarques d'équipe au Base Manager et à B. Muhindo plutôt qu'en réunion", "« Ils ne me disent jamais s'ils ne sont pas d'accord. »", "À recueillir en entretien", 'Grille (22/07)'],
        ["01/08 : l'équipe quitte la salle sans échanger avec le chef d'équipe", "À recueillir en entretien", "À recueillir en entretien", 'Compte rendu A. Kavira'],
      ],
    },
    result: "Fait quand : chaque ligne a un fait sans adjectif, une source et, pour les lignes où les deux lectures divergent, la mention « malentendu possible ». La fiche v1 est complétée à l'issue des entretiens (Procédure 3, étape 5).",
    pitfall: "Écrire dans la colonne « Fait » une phrase comme « le chef d'équipe humilie son équipe ». C'est la lecture de l'équipe, pas le fait. Un fait se vérifie par un témoin ou une pièce.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 4',
    title: 'Passer le test « faute ou malentendu ? »',
    intro: "La médiation n'est pertinente que si aucune faute ne s'est produite au sens du code de conduite et si aucun fait grave ne se cache derrière la tension. Ce test se passe en cinq questions, par écrit, avant toute convocation.",
    steps: [
      {
        title: 'Posez les cinq questions et répondez par oui ou non, avec la preuve',
        actions: [
          "1. Un comportement décrit enfreint-il un article précis du code de conduite ou de la politique RH ? Citez l'article ou écrivez « aucun ».",
          "2. Une partie a-t-elle évoqué harcèlement, discrimination, violence, menace, exploitation ou abus sexuels, fraude ? Si oui, arrêtez ici.",
          "3. Une règle de sécurité ou de protection a-t-elle été violée ? Si oui, c'est une décision, pas une médiation.",
          "4. Chaque partie peut-elle parler librement en présence de l'autre (pas de rapport de pouvoir qui l'en empêche) ?",
          "5. Les deux parties ont-elles intérêt à continuer à travailler ensemble ?",
        ],
      },
      {
        title: 'Interprétez le résultat',
        actions: [
          "Non, non, non, oui, oui : conflit relationnel alimenté par un malentendu, médiation possible.",
          "Un oui aux questions 1 à 3 : procédure formelle prévue par la politique de l'ONG ; informez immédiatement votre HR Manager.",
          "Un non à la question 4 : entretiens séparés, puis décision de la hiérarchie, pas de session conjointe.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 17 août, 8 h 30',
      lines: [
        "1. Article violé : aucun. L. Verhoeven a corrigé une erreur réelle, dans un ton direct mais sans insulte ni menace ; l'équipe n'a refusé aucun ordre.",
        "2. Évoqué par une partie : non (ni dans la demande du chef d'équipe, ni dans les remarques rapportées par E. Kasongo).",
        "3. Règle de sécurité violée : non.",
        "4. Parole libre en présence de l'autre : non en réunion publique, oui en petit comité → entretiens séparés d'abord, session conjointe en petit groupe.",
        "5. Intérêt commun : oui, les six membres et L. Verhoeven veulent poursuivre le travail (à confirmer en entretien).",
      ],
    },
    result: "Fait quand : les cinq réponses sont écrites avec leur preuve, et la conclusion « médiation possible », « procédure formelle » ou « décision » est formulée.",
    pitfall: "Passer le test une seule fois, au début. Si un entretien révèle un fait nouveau (une parole déplacée, une menace, une pratique irrégulière), repassez les questions 1 à 3 avant d'aller plus loin.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 4',
    title: 'Choisir médiation ou arbitrage, le justifier et informer',
    intro: "Le choix n'est pas une question de gravité : c'est une question de logique. La médiation laisse l'issue aux parties ; l'arbitrage fait trancher une autorité. La décision de médier est de niveau 2 : informez le HR Manager et obtenez son accord écrit avant de convoquer.",
    steps: [
      {
        title: 'Appliquez les quatre tests',
        actions: [
          "Une décision est-elle nécessaire dans un délai très court (sécurité, continuité d'un service) ? Oui → arbitrage.",
          "Une règle ou une politique claire a-t-elle été manifestement enfreinte ? Oui → arbitrage (et mesure disciplinaire de premier niveau si prévue).",
          "Le conflit est-il relationnel, nourri par un malentendu de communication, avec un intérêt commun à continuer ? Oui → médiation.",
          "Une médiation a-t-elle déjà été tentée sans accord possible ? Oui → arbitrage, par l'autorité compétente.",
        ],
      },
      {
        title: 'Rédigez la justification et informez',
        actions: [
          "Écrivez en cinq lignes : situation, résultat du test faute/malentendu, choix, qui médie, calendrier.",
          "Envoyez-la à votre HR Manager (copie : Head of Mission si l'enjeu l'exige) avant toute convocation et attendez son accord écrit.",
          "Informez le Base Manager des seuls éléments nécessaires : la médiation aura lieu, il n'y participe pas, il sera informé de l'accord.",
        ],
      },
    ],
    example: {
      title: 'Courriel du lundi 17 août 2026, 9 h 15',
      lines: [
        "Objet : Goma - Logistique — qualification et choix de la médiation (statut ESCALADE du 14/08)",
        "Bonjour A., résultat de ma qualification : aucune faute au sens du code de conduite ; aucune allégation grave ; aucune règle de sécurité en cause ; intérêt commun à continuer du chef d'équipe et de l'équipe (à confirmer en entretien).",
        "Lecture : malentendu de communication (style direct / style indirect), pas de désaccord de fond. Je propose une médiation, pas un arbitrage : aucune décision urgente, personne n'a enfreint une règle.",
        "Médiateurs : moi-même et Y. Haddad (Coordinateur Programmes), sans lien hiérarchique avec les parties. Entretiens les 17 et 18/08, session conjointe le jeudi 20/08, suivi le 10/09. Pouvez-vous me confirmer votre accord et votre disponibilité pour un débriefing de 30 minutes le mercredi 19/08 ? N. Mbusa",
      ],
    },
    result: "Fait quand : votre HR Manager a répondu par écrit et la réponse est archivée avec la fiche. La décision reste provisoire jusqu'à la fin des entretiens individuels.",
    tip: "Gardez la même rédaction pour la partie « choix » dans tous vos dossiers : trois lignes (test, choix, justification). Au bout de dix dossiers, vous avez une jurisprudence maison qui rassure votre hiérarchie.",
  },

  // ─── Procédure 3 — Conduire la médiation ───────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 3 — Conduire une médiation structurée en équipe multiculturelle',
    body: "Le guide source tient en cinq étapes : écoute individuelle séparée, cadrage des règles de dialogue, session conjointe, recherche d'un accord concret, suivi documenté. Elles ne se sautent pas, et surtout pas la première. Pour que vous puissiez les exécuter sans improviser, cette procédure les détaille en douze étapes, section par section du protocole-mediation-conflit-equipe-multiculturelle.docx.",
    bullets: [
      "Source, étape 1 (écoute individuelle séparée) → étapes 1 à 5 : ouvrir le dossier, préparer et conduire les entretiens, rédiger les notes des deux parties.",
      "Source, étape 2 (cadrage des règles) → étape 6.",
      "Source, étape 3 (session conjointe, reformulation, dimension culturelle nommée) → étapes 7 à 9.",
      "Source, étape 4 (accord concret) → étape 10.",
      "Source, étape 5 (suivi documenté) → étapes 11 et 12 : validation, point de suivi, report dans la grille.",
    ],
    result: "Livrables 3, 4 et 5 : le protocole rempli (sections 1 à 6), le plan de la session conjointe et le point de suivi documenté.",
    pitfall: "Sauter l'écoute individuelle pour gagner du temps et convoquer directement une réunion conjointe. Dans un contexte où exprimer un désaccord devant l'autre partie n'est pas acceptable, la partie la plus réservée confirmera poliment un accord de façade.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 12',
    title: 'Ouvrir le dossier : section 1 du protocole (parties et médiateur)',
    intro: "Entrée : la décision de médiation confirmée par votre HR Manager (Procédure 2, étape 4) et le template protocole-mediation-conflit-equipe-multiculturelle.docx. Cette étape prend 20 minutes ; elle fixe qui est dans le dossier et qui le conduit.",
    steps: [
      {
        title: 'Enregistrez le protocole et préparez le dossier',
        actions: [
          "Ouvrez le fichier, ne modifiez ni les titres de sections ni les tableaux, et enregistrez-le sous Protocole_mediation_Goma-Logistique_2026-08.docx.",
          "Rangez-le dans le dossier « RH_confidentiel/Conflits/Goma-Logistique_2026-08 », avec accès limité à vous et à votre HR Manager.",
          "Créez dans le même dossier deux sous-dossiers : « Pieces_sources » (agendas, mails, comptes rendus) et « Notes_manuscrites ».",
        ],
      },
      {
        title: 'Remplissez la section 1, cellule par cellule',
        actions: [
          "Cellule « Partie A — nom, fonction, équipe/base » : nom, fonction, équipe et base de la personne.",
          "Cellule « Partie B — nom, fonction, équipe/base » : si la partie est un groupe, écrivez l'équipe, l'effectif et les représentants ; les représentants seront confirmés après les entretiens.",
          "Cellule « Médiateur (nom, fonction) » : vous, et le co-médiateur ou le superviseur si vous en avez (Procédure 4, étape 4).",
          "Cellule « Date d'ouverture du dossier » : la date réelle de décision de médier, au format jj/mm/aaaa.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 1, remplie le lundi 17 août 2026',
      lines: [
        "Partie A — nom, fonction, équipe/base : L. Verhoeven, Logistics Team Leader (cadre international), équipe Logistique, base de Goma.",
        "Partie B — nom, fonction, équipe/base : Équipe logistique nationale (6 personnes), base de Goma ; représentants à confirmer après entretiens (pressentis : B. Muhindo, Magasinier principal ; S. Kahambu, Responsable du parc).",
        "Médiateur (nom, fonction) : N. Mbusa, HR Officer de la base de Goma, médiatrice ; co-médiateur : Y. Haddad, Coordinateur Programmes ; supervision : A. Kavira, HR Manager de mission.",
        "Date d'ouverture du dossier : 17/08/2026.",
      ],
    },
    result: "Fait quand : les quatre cellules de la section 1 sont remplies, le fichier est dans le bon dossier et personne d'autre que vous et le HR Manager n'y a accès.",
    pitfall: "Écrire le nom des six membres de l'équipe dans la cellule Partie B « pour faire complet ». Un groupe est une partie : désignez-le par son équipe et ses représentants, pas par une liste nominative qui exposerait des individus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 12',
    title: 'Préparer les entretiens individuels séparés',
    intro: "L'entretien individuel est l'outil central de la médiation, pas une formalité avant la « vraie » discussion. Il se prépare : même durée pour chaque personne, lieu neutre, invitation identique, langue choisie par la personne.",
    steps: [
      {
        title: 'Planifiez les entretiens avec équité',
        actions: [
          "Donnez à chaque personne la même durée : 45 minutes, plus 15 minutes de marge pour écrire vos notes à chaud.",
          "Choisissez un lieu neutre : la salle de réunion RH, ni le bureau du chef d'équipe ni le dépôt.",
          "Demandez à l'Assistant RH de convoquer chaque personne par un message individuel, avec la même formulation pour tous, envoyé le même jour.",
          "Proposez le français ou le swahili : la personne choisit sa langue.",
        ],
      },
      {
        title: 'Préparez votre feuille d\'entretien',
        actions: [
          "Préparez une feuille par personne avec cinq blocs : accueil, récit, approfondissement, besoins, clôture (voir étape 3).",
          "Relisez la fiche de qualification et la grille : n'arrivez pas avec des conclusions, mais avec des questions.",
          "Imprimez, sans les remplir, les pages 1 et 2 du protocole : vous n'utiliserez le fichier numérique qu'après l'entretien.",
        ],
      },
    ],
    table: {
      columns: ['Date et heure', 'Personne', 'Durée', 'Lieu'],
      rows: [
        ['Lundi 17/08, 15 h', 'L. Verhoeven (partie A)', '45 min + 15 min', 'Salle de réunion RH'],
        ['Mardi 18/08, 8 h 30', 'B. Muhindo', '45 min + 15 min', 'Salle de réunion RH'],
        ['Mardi 18/08, 9 h 30', 'S. Kahambu', '45 min + 15 min', 'Salle de réunion RH'],
        ['Mardi 18/08, 10 h 30', 'G. Safari', '45 min + 15 min', 'Salle de réunion RH'],
        ['Mardi 18/08, 14 h', 'R. Katembo', '45 min + 15 min', 'Salle de réunion RH'],
        ['Mardi 18/08, 15 h', 'A. Mastaki', '45 min + 15 min', 'Salle de réunion RH'],
        ['Mardi 18/08, 16 h', 'H. Bulenda', '45 min + 15 min', 'Salle de réunion RH'],
      ],
    },
    example: {
      title: 'Message de convocation envoyé par P. Sifa le lundi 17 août, 8 h 45 (même texte pour les sept personnes)',
      lines: [
        "Bonjour B., N. Mbusa (RH) vous invite à un entretien individuel et confidentiel de 45 minutes le mardi 18 août à 8 h 30, en salle de réunion RH.",
        "Il ne s'agit pas d'un entretien disciplinaire. Nous écoutons chaque personne de l'équipe Logistique, ainsi que le chef d'équipe, séparément. La participation est volontaire.",
        "Vous pouvez parler en français ou en swahili. Les entretiens seront conduits par N. Mbusa, avec Y. Haddad comme co-médiateur. Si vous avez une objection sur ce choix, dites-le-nous en début d'entretien. Merci de ne pas en discuter avec vos collègues d'ici là.",
      ],
    },
    result: "Fait quand : les sept entretiens sont planifiés avec la même durée, la même salle et le même message, et personne n'a été convoqué par son propre chef.",
    pitfall: "Faire convoquer l'équipe par le chef d'équipe, ou passer par le bureau de la logistique : l'invitation devient un ordre hiérarchique et ferme la parole avant même d'avoir commencé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 12',
    title: 'Conduire un entretien individuel séparé',
    intro: "Recevez chaque personne séparément, dans un cadre confidentiel, sans l'autre partie ni témoin inutile. Votre rôle est de comprendre, pas encore de trancher. Le canevas ci-dessous tient dans 45 minutes.",
    steps: [
      {
        title: 'Posez le cadre, puis laissez parler (20 minutes)',
        actions: [
          "Accueil (5 min) : dites le but (comprendre, pas juger), la confidentialité et ses trois limites (danger pour quelqu'un, faute grave, signalement obligatoire selon la politique de l'ONG), le fait que le HR Manager supervise le dossier, et que vous prenez des notes.",
          "Récit libre (15 min) : « Racontez-moi ce qui s'est passé, depuis le début. » Ne coupez pas pour corriger ou nuancer.",
        ],
      },
      {
        title: 'Approfondissez, puis recueillez les besoins (20 minutes)',
        actions: [
          "Approfondissement (10 min) : questions ouvertes (« Qu'avez-vous ressenti ? » « Qu'avez-vous fait ensuite ? ») et la question culturelle systématique : « Quand cela s'est produit, comment avez-vous compris l'intention de l'autre personne ? »",
          "Besoins (10 min) : « Qu'est-ce qui vous aiderait ? Qu'aimeriez-vous que l'autre fasse différemment ? »",
        ],
      },
      {
        title: 'Clôturez et prenez vos notes à chaud (5 + 15 minutes)',
        actions: [
          "Clôture : reformulez en trois phrases (faits, ressenti, besoin) et demandez « Est-ce bien ça ? » ; expliquez la suite (règles de dialogue, puis session conjointe) sans rien promettre sur l'issue.",
          "Dans la marge de 15 minutes, écrivez vos notes en trois blocs : faits rapportés, émotions et besoins exprimés, élément culturel évoqué ou observé. Utilisez les mots de la personne.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait de l\'entretien de B. Muhindo, mardi 18 août, 8 h 30 (en swahili, traduit)',
      lines: [
        "Vous : « Racontez-moi ce qui s'est passé, depuis le début. » — B. Muhindo : « Depuis le mois d'avril, tout allait bien. Le 7 juillet, le chef a dit devant tous que mon bordereau était faux. »",
        "Vous : « Quand cela s'est produit, comment avez-vous compris son intention ? » — « Je crois qu'il voulait montrer à tous que je suis incapable. Chez nous, on corrige un ancien en privé. »",
        "Vous : « Et en réunion, qu'avez-vous fait ? » — « Rien. On ne répond pas à son chef devant les autres. J'en ai parlé à E. Kasongo après. »",
        "Vous : « Qu'est-ce qui vous aiderait ? » — « Qu'il nous dise les choses à nous seuls, et qu'il nous demande avant de changer le planning. »",
      ],
    },
    result: "Fait quand : la personne a parlé au moins les deux tiers du temps, vous avez posé la question culturelle, et vos notes à chaud sont écrites avant l'entretien suivant.",
    pitfall: "Interrompre le récit pour corriger un fait (« non, en réalité c'était le mardi ») ou pour défendre l'autre partie. Vous noterez l'écart de faits plus tard ; pendant le récit, vous écoutez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 12',
    title: 'Rédiger les notes de pré-médiation de la partie A : section 2, colonne de gauche',
    intro: "Section 2 du protocole : « Notes de pré-médiation (écoute individuelle séparée) ». Le tableau a deux colonnes, une par partie, et chacune a trois champs : résumé des faits tels que rapportés par cette partie, émotions et besoins exprimés, élément culturel évoqué ou observé. Remplissez d'abord la partie A, entièrement, avant de regarder la partie B.",
    steps: [
      {
        title: 'Remplissez les trois champs de la colonne « Partie A — entretien individuel »',
        actions: [
          "Résumé des faits tels que rapportés par cette partie : ce que la personne dit être arrivé, avec dates et lieux, dans ses mots ; aucun jugement de votre part.",
          "Émotions et besoins exprimés : ce que la personne ressent et ce dont elle dit avoir besoin, en deux listes distinctes.",
          "Élément culturel évoqué ou observé (le cas échéant) : ce que la personne dit de ses normes de communication, ou ce que vous avez observé ; écrivez « aucun » si rien n'a émergé, ne l'inventez pas.",
        ],
      },
      {
        title: 'Relisez avec trois contrôles',
        actions: [
          "Aucun adjectif qui ne soit pas une citation entre guillemets.",
          "Aucun fait rapporté par l'autre partie dans cette colonne.",
          "Notes écrites le jour de l'entretien.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — colonne de gauche, entretien de L. Verhoeven du lundi 17 août',
      lines: [
        "Résumé des faits : arrivé le 13/04. Donne ses consignes de façon directe et factuelle, style qu'il juge clair et efficace, hérité de son expérience professionnelle en Europe. Le 07/07, en réunion d'équipe, a signalé devant tous une erreur de quantité sur un bordereau de sortie (deuxième occurrence) et demandé de le refaire avant midi. Constate depuis juillet : plus aucune proposition de l'équipe en réunion, aucune objection exprimée, échanges réduits au strict nécessaire. A appris par E. Kasongo qu'il y a « une grogne ».",
        "Émotions et besoins exprimés : Émotions — surpris, un peu blessé (« je ne sais pas ce que j'ai fait »). Besoins — savoir tôt quand une décision pose problème ; être sûr que ses consignes sont comprises ; retrouver de l'initiative dans l'équipe. Veut continuer à travailler avec l'équipe et reconnaît sa compétence technique.",
        "Élément culturel évoqué ou observé : dit qu'une critique factuelle et immédiate est, dans son expérience, un signe de respect et d'efficacité ; pense qu'une équipe qui ne conteste jamais « n'est pas engagée ». À la question sur l'intention de l'équipe, répond : « un manque d'implication ».",
      ],
    },
    result: "Fait quand : les trois champs de la colonne de gauche sont remplis, factuels, et chaque phrase peut se rattacher à ce que la personne a dit.",
    pitfall: "Écrire « il est autoritaire » ou « il ne se remet pas en question ». Ce sont vos hypothèses, pas ses paroles. Elles fausseraient votre neutralité dès cette étape.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 12',
    title: 'Rédiger les notes de pré-médiation de la partie B : section 2, colonne de droite',
    intro: "Quand la partie est un groupe, vous avez six entretiens à synthétiser sans en faire un résumé unique reformulé deux fois : la colonne de droite doit être réellement distincte de celle de gauche. Vous protégez aussi les personnes : aucun propos n'est attribué à un nom sans son accord.",
    steps: [
      {
        title: 'Faites le tableau des thèmes avant d\'écrire',
        actions: [
          "Lisez vos six feuilles d'entretien et listez chaque thème rapporté.",
          "Pour chaque thème, comptez combien de personnes l'ont évoqué.",
          "Gardez en citation les mots les plus nets, sans nom.",
        ],
      },
      {
        title: 'Remplissez la colonne « Partie B — entretien individuel »',
        actions: [
          "Résumé des faits tels que rapportés : thèmes communs avec nombre de personnes (« cinq personnes sur six »), et faits divergents signalés comme tels.",
          "Émotions et besoins exprimés : en deux listes distinctes, avec les fréquences.",
          "Élément culturel évoqué ou observé : le registre professionnel de l'équipe tel qu'elle le décrit.",
        ],
      },
      {
        title: 'Faites le test de distinction',
        actions: [
          "Couvrez la colonne de gauche. Si la colonne de droite se lit comme sa reformulation, recommencez.",
          "Vérifiez que les deux colonnes ont la même densité : une ligne de gauche ne doit pas peser trois lignes de droite.",
        ],
      },
    ],
    table: {
      columns: ['Thème rapporté (entretiens du 18/08)', 'Personnes sur 6', 'Type'],
      rows: [
        ["Réunion du 07/07 : erreur de bordereau signalée devant toute l'équipe, ton perçu comme cassant", '5', 'Fait'],
        ["Depuis, plus de proposition en réunion ; les remarques passent par le Base Manager ou B. Muhindo", '6', 'Fait'],
        ["On ne contredit pas un supérieur devant les autres ; on le dit en privé, par un relais ou en se taisant", '4', 'Norme culturelle'],
        ["Gêne, crainte de passer pour irrespectueux, perte de face", '5', 'Émotion'],
        ["Veulent continuer à travailler avec L. Verhoeven ; apprécient la clarté des plannings et le suivi sécurité", '6', 'Besoin / intérêt commun'],
      ],
    },
    example: {
      title: 'Fil rouge — colonne de droite, six entretiens du mardi 18 août',
      lines: [
        "Résumé des faits : cinq personnes sur six citent la réunion du 07/07 (un bordereau signalé comme faux devant tous, correction demandée avant midi). Depuis, plus de propositions en réunion ; les remarques sont faites au Base Manager ou à un collègue ancien. Les six reconnaissent la clarté des plannings et du suivi sécurité du chef d'équipe.",
        "Émotions et besoins exprimés : Émotions — gêne, perte de face, crainte de passer pour irrespectueux (cinq sur six). Besoins — être corrigé en privé, être consulté avant un changement de planning, disposer d'un moyen de dire un désaccord sans contredire en public. Les six veulent continuer à travailler avec lui.",
        "Élément culturel évoqué ou observé : le registre professionnel de l'équipe place le désaccord vers la hiérarchie dans le privé, par un relais ou par le silence ; contredire un supérieur en public est décrit par quatre personnes comme un manque de respect grave. Le silence en réunion ne signifie pas adhésion.",
      ],
    },
    result: "Fait quand : les trois champs de la colonne de droite sont remplis avec fréquences, sans nom propre ni citation attribuée, et le test de distinction est passé. Reprenez alors la fiche de qualification et complétez les cellules « à recueillir ».",
    pitfall: "Écrire « B. Muhindo a dit que… » dans le protocole. Une personne identifiable dans un document lu par sa hiérarchie est exposée, et l'équipe ne vous reparlera plus librement lors du suivi.",
    tip: "Faites valider les thèmes par chaque personne avant la session : « Puis-je dire à l'autre partie que cinq d'entre vous ont été gênés par la réunion du 7 juillet ? » Vous obtenez un accord explicite et un accord de façade devient plus difficile.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 12',
    title: 'Cadrer les règles de dialogue : section 3 du protocole',
    intro: "Avant de réunir les parties, vous définissez les règles de la session conjointe et vous les communiquez séparément à chacune. Elles doivent être acceptées explicitement par les deux parties : pas simplement énoncées par vous au début de la session.",
    steps: [
      {
        title: 'Rédigez les règles dans la section 3',
        actions: [
          "Le gabarit propose trois lignes « Règle 1 / 2 / 3 » avec des exemples en italique : remplacez l'exemple par votre règle, dans vos mots.",
          "Pour une règle supplémentaire, copiez une ligne entière du gabarit juste en dessous ; ne touchez pas aux tableaux.",
          "Quatre règles maximum : au-delà, personne ne les retient.",
        ],
      },
      {
        title: 'Faites accepter par chaque partie, séparément',
        actions: [
          "Rencontrez la partie A seule et lisez-lui chaque règle ; demandez : « Pouvez-vous vous engager à la respecter ? Voulez-vous en ajouter ou en modifier une ? »",
          "Rencontrez la partie B séparément (pour une équipe : 20 minutes, en l'absence du chef d'équipe et du Base Manager) ; faites la même lecture et laissez-la ajouter une règle.",
          "Notez dans le tableau « Règles acceptées par la Partie A / B (initiales/date) » les initiales et la date, une fois l'accord obtenu.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 3 complétée, mercredi 19 août',
      lines: [
        "Règle 1 : Parler à tour de rôle, sans interrompre ; chaque tour dure au plus cinq minutes, et la médiatrice reformule avant de passer la parole.",
        "Règle 2 : S'adresser aux faits et aux comportements (« lors de la réunion du 7 juillet, j'ai entendu… »), pas aux intentions supposées de l'autre (« il veut m'humilier »).",
        "Règle 3 : Accepter le rôle strictement neutre des médiateurs, qui facilitent sans trancher et ne donnent raison à personne.",
        "Règle 4 (ligne ajoutée, proposée par l'équipe) : Ce qui est dit dans la salle y reste ; seul l'accord écrit est communiqué au Base Manager et au HR Manager.",
        "Règles acceptées par la Partie A (initiales/date) : L.V., 19/08/2026, 11 h.",
        "Règles acceptées par la Partie B (initiales/date) : B.M. et S.K., pour l'équipe, 19/08/2026, 9 h, après lecture aux six personnes en l'absence du chef d'équipe.",
      ],
    },
    result: "Fait quand : au moins trois règles concrètes sont écrites, chaque partie les a acceptées séparément et les initiales et la date sont dans le tableau.",
    pitfall: "Annoncer vous-même les règles en ouverture de session sans accord préalable. Une règle imposée devant l'autre partie est une règle que l'on subit, pas une règle que l'on a acceptée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 12',
    title: 'Préparer la session conjointe : lieu, composition, horaires, rôles',
    intro: "La session ne s'improvise pas : le lieu, la composition et le déroulé horaire décident de la parole que vous obtiendrez. Votre plan d'une page est le Livrable 4.",
    steps: [
      {
        title: 'Décidez la composition et le lieu',
        actions: [
          "Choisissez la taille du groupe : le cadre de la session ne doit pas recréer la situation publique qui bloque la parole (ici, la réunion d'équipe).",
          "Choisissez un lieu neutre et une disposition sans rapport de force : tables rapprochées en U, médiateurs en bout, mêmes chaises pour tous, personne derrière un bureau.",
          "Fixez la langue : le français, avec reformulation des mots clés dans les deux langues par la médiatrice, et la possibilité de demander une pause de cinq minutes.",
        ],
      },
      {
        title: 'Écrivez le déroulé et répartissez les rôles',
        actions: [
          "Découpez 120 minutes en phases (voir le tableau).",
          "Médiatrice principale : conduit les tours de parole et les reformulations. Co-médiateur : chronomètre, veille à l'équivalence des reformulations, prend les notes de l'accord.",
          "Planifiez un débriefing de 30 minutes avec le HR Manager la veille, et un autre juste après la session.",
        ],
      },
    ],
    table: {
      columns: ['Horaire (jeudi 20/08)', 'Phase', 'Qui conduit', 'Durée'],
      rows: [
        ['14 h 00', "Ouverture : but de la session, rappel des règles, objectif « un accord de fonctionnement, pas qui a raison »", 'N. Mbusa', '10 min'],
        ['14 h 10', "Premier tour : partie A, puis reformulation et vérification", 'N. Mbusa (Y. Haddad chronomètre)', '15 min'],
        ['14 h 25', "Second tour : représentants de l'équipe, puis reformulation et vérification", 'N. Mbusa (Y. Haddad chronomètre)', '15 min'],
        ['14 h 40', 'Pause de dix minutes', 'Tous', '10 min'],
        ['14 h 50', "Nommer la dimension culturelle, puis vérifier que chacun s'y reconnaît", 'N. Mbusa', '15 min'],
        ['15 h 05', "Construction de l'accord : engagements concrets et vérifiables", 'Y. Haddad écrit, N. Mbusa anime', '35 min'],
        ['15 h 40', "Relecture, validation, date de suivi", 'N. Mbusa', '15 min'],
        ['15 h 55', 'Clôture', 'N. Mbusa', '5 min'],
      ],
    },
    example: {
      title: 'Fil rouge — composition retenue',
      lines: [
        "Participants : L. Verhoeven (partie A) ; B. Muhindo et S. Kahambu (représentants désignés par l'équipe, après accord des six) ; N. Mbusa et Y. Haddad (médiateurs). Les quatre autres membres ne sont pas dans la salle : ils ont été consultés individuellement, et une restitution leur sera faite le vendredi 21 août par les représentants.",
        "Raison : les six dans la salle avec leur chef auraient reproduit le cadre de la réunion d'équipe, où personne ne contredit personne.",
        "Lieu : salle de réunion RH, tables en U, mêmes chaises pour tous ; thé et eau pour tous. Débriefing avec A. Kavira mercredi 19/08 à 16 h 30.",
      ],
    },
    result: "Fait quand : le plan d'une page est écrit, validé par les deux parties pour la composition, et le débriefing avec le HR Manager est dans les agendas.",
    pitfall: "Placer le chef d'équipe d'un côté de la table avec ses supérieurs et l'équipe de l'autre côté comme dans une audience. Vous recréez le tribunal que vous voulez éviter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 8 sur 12',
    title: 'Ouvrir la session et conduire les tours de parole avec reformulation',
    intro: "La reformulation neutre est l'outil le plus puissant du médiateur : elle permet à chaque partie de se sentir entendue et de corriger une interprétation erronée avant qu'elle ne s'installe. Reformulez systématiquement avant de passer la parole.",
    steps: [
      {
        title: 'Ouvrez la session (10 minutes)',
        actions: [
          "Remerciez chacun d'être venu et rappelez le but : trouver un accord de fonctionnement, pas déterminer qui a « raison ».",
          "Relisez les quatre règles acceptées à l'étape 6 et demandez un hochement ou un « oui » de chacun.",
          "Rappelez le rôle des médiateurs : faciliter sans trancher.",
        ],
      },
      {
        title: 'Conduisez deux tours de parole égaux (30 minutes)',
        actions: [
          "Donnez la parole à la partie A pendant cinq minutes maximum, sans interrompre ; puis reformulez en trois phrases (faits, ressenti, besoin) et demandez : « Est-ce bien ça ? »",
          "Faites de même avec la partie B, pour la même durée, en utilisant la même structure de reformulation.",
          "Si quelqu'un interrompt : « Je vous demande de noter ce point ; vous aurez la parole dans un instant. »",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — reformulations de N. Mbusa, jeudi 20 août',
      lines: [
        "À L. Verhoeven : « Si je vous ai bien compris, L. : depuis avril, vous donnez vos consignes de façon directe, parce que pour vous c'est la façon la plus claire et la plus respectueuse de travailler. Depuis juillet, vous ne recevez plus ni objection ni proposition, et vous l'avez compris comme un manque d'implication. Vous voulez savoir tôt ce qui pose problème. Est-ce bien ça ? »",
        "À B. Muhindo et S. Kahambu : « Si je vous comprends bien, B. et S. : pour l'équipe, corriger une erreur devant tout le monde est vécu comme une perte de face, même quand l'erreur est réelle. Contredire un chef en public n'est pas possible pour vous : vous le dites autrement, en privé, par un relais, ou en vous taisant. Vous voulez continuer à travailler avec L., dont vous appréciez la clarté des plannings. Est-ce bien ça ? »",
      ],
    },
    result: "Fait quand : chaque partie a parlé le même temps (vérifié au chronomètre par le co-médiateur), chaque partie a confirmé votre reformulation (« oui, c'est ça ») ou l'a corrigée, et personne n'a été interrompu.",
    pitfall: "Reformuler l'une des parties en trois phrases et l'autre en une demi-phrase, ou avec un verbe plus faible (« elle trouve que » contre « il affirme que »). L'écart d'équivalence est perçu par la partie lésée dans la minute qui suit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 9 sur 12',
    title: 'Nommer explicitement la dimension culturelle, sans juger',
    intro: "Éviter le sujet culturel par crainte de le rendre « trop sensible » prive les deux parties de la seule explication qui permet de sortir du cycle d'interprétation erronée. Mais nommer ne veut pas dire désigner : vous parlez de styles, jamais de nationalités ni de fautes.",
    steps: [
      {
        title: 'Choisissez le bon moment et la bonne formule',
        actions: [
          "Attendez que les deux versions aient été entendues et reformulées, et que chaque partie ait confirmé votre reformulation.",
          "Utilisez la formule source : « Il me semble qu'il y a ici deux styles différents d'exprimer un désaccord, ce n'est pas une question de bonne ou de mauvaise volonté. »",
          "Ajoutez votre description des deux styles avec les mots des parties, pas avec des catégories.",
        ],
      },
      {
        title: 'Vérifiez que chaque partie s\'y reconnaît',
        actions: [
          "Demandez à chacune, séparément : « Est-ce que cette lecture vous parle ? »",
          "Si l'une des parties la rejette, ne la forcez pas : revenez aux faits et aux besoins, et proposez de poursuivre l'accord sur les comportements, sans la lecture culturelle.",
          "Notez la réaction de chaque partie pour la section 4 du protocole.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — 14 h 50, jeudi 20 août',
      lines: [
        "N. Mbusa : « Il me semble qu'il y a ici deux styles différents d'exprimer un désaccord et de corriger une erreur. L'un est direct et immédiat : on dit tout de suite ce qui ne va pas, devant tous, parce que c'est efficace et respectueux. L'autre est privé et indirect : on dit ce qui ne va pas en tête-à-tête, ou par un relais, parce que c'est respectueux. Ce n'est pas une question de bonne ou de mauvaise volonté : chacun a lu le comportement de l'autre avec sa propre grille. Est-ce que cette lecture vous parle ? »",
        "L. Verhoeven : « Je pensais que le silence voulait dire que tout allait bien. »",
        "B. Muhindo : « Nous pensions qu'il voulait nous humilier. Ce n'était pas dit pour ça. »",
        "N. Mbusa : « Merci à tous les deux. Vous venez de dire la même chose avec des mots différents : personne n'a voulu blesser l'autre. »",
      ],
    },
    result: "Fait quand : la dimension culturelle est nommée une fois, avec des mots neutres, que les deux parties ont réagi, et que personne n'a été désigné comme fautif.",
    pitfall: "Parler de « culture africaine » et de « culture européenne », ou dire « chez vous, on… ». Vous généralisez et vous figez les personnes dans une origine. Dites « un style direct » et « un style indirect », et rapportez-les à ce que ces personnes ont dit.",
  },
  {
    type: 'concept',
    title: 'Aide-mémoire du médiateur : formules à utiliser, formules à bannir',
    body: "Quelques phrases très simples font le travail. Imprimez cette page et gardez-la sous les yeux pendant la session.",
    table: {
      columns: ['Moment', 'À dire', 'À ne jamais dire'],
      rows: [
        ['Ouverture', "« Nous ne sommes pas là pour déterminer qui a raison. Nous sommes là pour trouver un accord de fonctionnement. »", "« Je sais déjà ce qui s'est passé. »"],
        ['Après un récit', "« Si je vous ai bien compris, … Est-ce bien ça ? »", "« Ce que vous voulez dire en fait, c'est… »"],
        ['Quand une partie interrompt', "« Je note ce point ; vous aurez la parole dans un instant. »", "« Laissez-le finir, vous êtes trop agressif. »"],
        ['Nommer le culturel', "« Il me semble qu'il y a ici deux styles différents… »", "« Chez vous, on fait comme ça. » / « C'est typique de… »"],
        ['Quand une partie se tait', "« Souhaitez-vous ajouter quelque chose, ou préférez-vous en parler à part tout à l'heure ? »", "« Votre silence signifie que vous êtes d'accord. »"],
        ['Vérifier la neutralité', "« Vous sentez-vous entendu(e) de la même façon que l'autre ? »", "« Je suis totalement neutre, vous pouvez me croire. »"],
      ],
    },
    tip: "La phrase de neutralité est la plus mal comprise : vous ne dites pas que vous l'êtes, vous demandez si on a le sentiment que vous l'êtes. C'est la seule façon de la rendre vérifiable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 10 sur 12',
    title: 'Construire un accord concret et vérifiable : section 4 du protocole',
    intro: "Une fois les deux versions entendues et reformulées, orientez la discussion vers des engagements concrets et vérifiables, pas des déclarations d'intention (« on va essayer de mieux communiquer »). Chaque engagement répond à trois questions précises.",
    steps: [
      {
        title: 'Posez les trois questions à chaque partie, tour à tour',
        actions: [
          "Que fera cette partie différemment à partir de maintenant ?",
          "Dans quelles situations précises ?",
          "Comment l'autre partie le saura-t-elle ?",
          "Visez trois engagements par partie : au-delà, aucun ne sera tenu.",
        ],
      },
      {
        title: 'Rédigez dans la section 4',
        actions: [
          "Champ « Description de l'accord (engagements concrets et vérifiables, pas des intentions vagues) » : un paragraphe de contexte qui nomme la dimension culturelle sans désigner de fautif, puis la date d'entrée en vigueur.",
          "Colonne « Ce que la Partie A s'engage à faire différemment » : engagements numérotés A1, A2, A3.",
          "Colonne « Ce que la Partie B s'engage à faire différemment » : engagements numérotés B1, B2, B3.",
          "Relisez à voix haute pour valider chaque mot avec les parties.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 4 rédigée le jeudi 20 août',
      lines: [
        "Description de l'accord : les parties constatent que les tensions depuis juillet viennent d'une différence de style pour corriger une erreur et exprimer un désaccord (direct et immédiat d'un côté, privé et indirect de l'autre), et non d'un manquement de l'une ou de l'autre. Elles conviennent des six engagements ci-dessous, applicables à compter du lundi 24 août 2026.",
        "A1 — Toute correction individuelle (bordereau, saisie, rangement) se fait en tête-à-tête, jamais en réunion d'équipe. En réunion, je ne parle que de la règle ou de la procédure, sans nommer de personne. Visible à la réunion du mardi.",
        "A2 — Chaque lundi à 15 h, 15 minutes de pré-réunion avec B. Muhindo et S. Kahambu : je présente les décisions prévues pour le point du mardi et je recueille leurs remarques avant de trancher.",
        "A3 — Quand je donne une consigne avec une échéance, j'ajoute la raison et je demande « cette échéance est-elle tenable ? » ; je laisse jusqu'à midi le lendemain pour répondre.",
        "B1 — Quand une décision ou un délai pose problème, l'équipe me le fait savoir avant l'échéance par l'un des trois canaux : pré-réunion du lundi, message écrit court intitulé « Point à revoir », ou échange individuel.",
        "B2 — B. Muhindo et S. Kahambu recueillent chaque semaine les remarques de l'équipe et les présentent à la pré-réunion du lundi.",
        "B3 — Quand une consigne n'est pas claire, l'équipe pose la question au moment de la consigne ou dans les 24 heures ; elle ne la laisse pas sans réponse.",
      ],
    },
    result: "Fait quand : chaque engagement dit qui fait quoi, dans quelle situation, avec quel signe visible pour l'autre, et que la section 4 ne contient aucune formule vague ni désignation d'un fautif.",
    pitfall: "Accepter « on va essayer de mieux communiquer » sous la pression du temps. Un engagement non vérifiable est un engagement sans suivi : il se délite en deux semaines.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 11 sur 12',
    title: 'Faire valider, fixer le suivi et diffuser : sections 5 et 6 du protocole',
    intro: "Le suivi n'est pas optionnel : un accord non suivi se délite silencieusement dans la majorité des cas, chaque partie retournant à ses habitudes dès que l'attention du HR Manager se relâche. Vous fixez la date avant que les parties ne quittent la salle.",
    steps: [
      {
        title: 'Fixez le suivi : section 5 du protocole',
        actions: [
          "Cellule « Date du point de suivi (2 à 4 semaines après l'accord) » : choisissez la date avec les parties, dans l'agenda de tous.",
          "Cellule « Responsable du suivi » : une personne nommée (vous, en général).",
          "Laissez vide la ligne « Résultat du suivi » : vous la remplirez à l'étape 12.",
        ],
      },
      {
        title: 'Faites valider : section 6 du protocole',
        actions: [
          "Cellule « Partie A (signature ou accord explicite, date) » : signature de la personne, ou accord explicite noté par vous si une signature formelle n'est pas culturellement appropriée à ce stade.",
          "Cellule « Partie B (signature ou accord explicite, date) » : même règle pour les représentants de l'équipe.",
          "Cellule « Médiateur (signature, date) » : votre signature, et celle du co-médiateur si vous en avez un.",
        ],
      },
      {
        title: 'Diffusez l\'extrait, jamais le dossier complet',
        actions: [
          "Copiez les sections 1, 3, 4, 5 et 6 dans un nouveau document « Accord_… » ; supprimez la section 2.",
          "Remettez-le aux parties, au Base Manager et au HR Manager ; gardez le protocole complet dans le dossier RH confidentiel.",
          "Informez le Head of Mission par un message de trois lignes.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — sections 5 et 6 et message de diffusion, jeudi 20 août, 16 h',
      lines: [
        "Date du point de suivi : jeudi 10/09/2026 (trois semaines), 45 minutes. Responsable du suivi : N. Mbusa.",
        "Partie A : signature de L. Verhoeven, 20/08/2026. Partie B : accord explicite de B. Muhindo et S. Kahambu, pour l'équipe, noté par N. Mbusa, initiales B.M. et S.K., 20/08/2026 (l'équipe ne souhaitait pas de signature individuelle ; chacun a confirmé oralement en présence des deux médiateurs). Médiateurs : signatures de N. Mbusa et Y. Haddad, 20/08/2026.",
        "Message à A. Kavira, E. Kasongo, H. Mwamba : « Une médiation a eu lieu à Goma - Logistique. Un accord de six engagements a été signé le 20/08, applicable dès le 24/08, point de suivi le 10/09. L'extrait de l'accord est joint. Le détail des entretiens reste confidentiel. N. Mbusa »",
      ],
    },
    result: "Fait quand : la date de suivi est dans les agendas, la validation est consignée pour les deux parties, l'extrait est diffusé et le protocole complet reste verrouillé.",
    pitfall: "Envoyer à tout le monde le fichier complet « pour transparence ». Les notes de pré-médiation y figurent : vous venez de rompre la confidentialité promise aux deux parties et de détruire la confiance dont dépend le suivi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 12 sur 12',
    title: 'Tenir le point de suivi, clore ou maintenir sous observation, et reporter dans la grille',
    intro: "Le point de suivi vérifie que l'accord tient dans la durée. Vous consignez le résultat dans la ligne « Résultat du suivi » de la section 5, puis vous reportez la décision dans la grille pour clore ou maintenir le dossier sous observation.",
    steps: [
      {
        title: 'Préparez et conduisez le point de suivi (45 minutes)',
        actions: [
          "Avant la date, demandez séparément à chaque partie : « Qu'est-ce qui a changé ? Quel engagement a été difficile à tenir ? »",
          "Vérifiez chaque engagement sur une pièce ou un témoin : compte rendu des réunions, messages « Point à revoir » reçus, agenda de la pré-réunion.",
          "Réunissez les parties 20 minutes pour valider le constat et ajuster un engagement si nécessaire.",
        ],
      },
      {
        title: 'Consignez le résultat dans le protocole et dans la grille',
        actions: [
          "Section 5, ligne « Résultat du suivi (accord respecté / à réajuster / nouvelle médiation nécessaire) » : choisissez l'une des trois mentions et ajoutez deux lignes de justification factuelle.",
          "Si l'accord est respecté : copiez les trois lignes de l'équipe de l'onglet Indicateurs dans un fichier d'archive, puis effacez leur contenu (cellules A à E) ; l'équipe repasse à NORMAL.",
          "Si l'accord est à réajuster : conservez les lignes, ajoutez la nouvelle date de contrôle dans votre agenda, et saisissez tout nouvel indicateur à sa date réelle.",
          "Si une nouvelle médiation est nécessaire : ouvrez un nouveau protocole et reprenez la Procédure 2 (étape 3 : un fait nouveau grave a-t-il émergé ?).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — point de suivi du jeudi 10 septembre 2026',
      lines: [
        "A1 respecté : aucune correction individuelle en réunion sur les trois mardis (25/08, 01/09, 08/09). A2 respecté : trois pré-réunions sur trois. A3 respecté : raison de consigne donnée dans les messages relus.",
        "B1 respecté : deux messages « Point à revoir » reçus (planning du convoi du 31/08, délai d'un camion). B2 respecté. B3 non respecté : une consigne du 02/09 n'a donné lieu à une question que quatre jours après.",
        "Section 5, résultat du suivi : « À réajuster (un engagement sur six). B3 : L. Verhoeven donnera dorénavant la consigne par écrit avec un exemple ; contrôle léger le 24/09 par E. Kasongo. »",
        "Grille : les trois lignes de Goma - Logistique restent en place jusqu'au 24/09. Lors de la clôture, elles seront copiées dans Archive_conflits_KSS_2026.xlsx puis effacées.",
      ],
    },
    result: "Fait quand : la mention du suivi est l'une des trois du gabarit, chaque engagement est vérifié sur une pièce, et la grille reflète la décision (clôturé ou sous observation, avec une nouvelle date).",
    pitfall: "Considérer l'accord comme une victoire définitive. Il traite l'épisode déclencheur, pas la culture d'équipe qui l'a rendu possible : sans la Procédure 5, la même dynamique reviendra avec d'autres personnes.",
    tip: "Après le point de suivi, la grille continue d'afficher l'ancien statut tant que la date de référence ne bouge pas : c'est normal. Votre décision est celle que vous consignez dans le protocole ; la grille se nettoie lors de l'archivage, pas toute seule.",
  },

  // ─── Procédure 4 — Rester neutre ───────────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 4 — Rester neutre quand le médiateur appartient lui-même à l\'une des cultures en présence',
    body: [
      "Le piège le plus sérieux de la médiation mérite une procédure à part : un médiateur n'est jamais culturellement neutre par défaut. Il appartient à une culture, avec ses réflexes de communication, et penche sans le savoir vers l'interprétation la plus proche de ses propres normes. Un HR Manager qui partage le style direct d'une partie la trouvera « plus claire » ou « plus honnête » alors qu'il y reconnaît son propre style.",
      "La parade n'est pas de prétendre à une neutralité parfaite, impossible à atteindre : c'est de la rendre vérifiable. Quatre étapes, à faire avant et pendant la médiation.",
    ],
    bullets: [
      "Étape 1 — Faire votre auto-diagnostic écrit avant le premier entretien.",
      "Étape 2 — Reformuler à voix haute de façon strictement équivalente, et le mesurer.",
      "Étape 3 — Demander à la partie la moins favorisée par votre style si elle se sent entendue de la même façon que l'autre.",
      "Étape 4 — Décider de faire coconduire ou superviser la médiation.",
    ],
    result: "Livrable 6 : l'auto-diagnostic écrit et le dispositif de coconduction ou de supervision, décidés avant la première rencontre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Faire votre auto-diagnostic de neutralité avant le premier entretien',
    intro: "Vous ne pouvez pas corriger un biais que vous n'avez pas nommé. Ce diagnostic prend vingt minutes, par écrit, et reste dans votre dossier : personne d'autre que vous (et votre HR Manager si vous le souhaitez) ne le lit.",
    steps: [
      {
        title: 'Répondez par écrit à six questions',
        actions: [
          "1. Mon style de communication du désaccord : direct, indirect, variable selon le contexte ?",
          "2. Mon rapport à la hiérarchie quand je ne suis pas d'accord : puis-je contredire un supérieur en public ?",
          "3. De quelle partie suis-je la plus proche (langue, origine, relation de travail) ?",
          "4. Quelle partie m'a saisie en premier, et qu'est-ce que cela change à mon écoute ?",
          "5. Quelle partie a un statut ou une autorité qui m'impressionne ?",
          "6. Quelle conclusion ai-je déjà en tête ? Écrivez-la, elle devient un biais à surveiller.",
        ],
      },
      {
        title: 'Nommez vos trois risques et la parade de chacun',
        actions: [
          "Écrivez trois phrases de la forme « Je risque de … parce que … ; pour l'éviter, je … ».",
          "Relisez-les juste avant chaque entretien et chaque session.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — auto-diagnostic de N. Mbusa, dimanche 16 août au soir',
      lines: [
        "1. Style : plutôt indirect avec la hiérarchie, direct entre pairs. 2. Je ne contredis pas un cadre devant l'équipe ; je le fais en privé.",
        "3. Proximité : je partage la langue et les codes de l'équipe nationale. 4. L. Verhoeven m'a saisie en premier, en français, avec des mots précis ; son récit est très structuré. 5. Son statut de cadre international m'intimide un peu. 6. Conclusion déjà en tête : « il est trop brutal ». À surveiller.",
        "Risque 1 : comprendre le silence de l'équipe sans effort et juger L. Verhoeven brutal ; parade : lui poser, à lui aussi, la question « comment avez-vous compris leur silence ? » et reformuler son intention avec la même précision.",
        "Risque 2 : adhérer au récit du premier arrivé ; parade : écouter l'équipe avant de relire ses notes, et écrire les deux colonnes séparément.",
        "Risque 3 : ménager L. Verhoeven par déférence au statut ; parade : mêmes durées, mêmes questions, même salle pour tous.",
      ],
    },
    result: "Fait quand : les six réponses sont écrites, votre conclusion déjà en tête est nommée, et vous avez trois risques avec une parade chacun.",
    pitfall: "Répondre « je suis neutre, je n'ai pas de préférence ». Toute personne a un style. Si votre auto-diagnostic ne contient aucun risque, c'est que vous ne l'avez pas fait sérieusement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Reformuler de façon strictement équivalente, et le mesurer',
    intro: "Reformuler à voix haute et de façon strictement équivalente les propos des deux parties est la première parade. La mesure rend l'équivalence vérifiable : un co-médiateur ou vous-même, après coup, comparez.",
    steps: [
      {
        title: 'Utilisez le même gabarit de reformulation pour chaque partie',
        actions: [
          "Trois phrases dans le même ordre : les faits tels que la partie les rapporte ; ce qu'elle ressent ; ce dont elle a besoin.",
          "Mêmes verbes d'attribution pour les deux parties (« vous dites », « vous avez compris »), pas « il affirme » pour l'un et « elle pense » pour l'autre.",
          "Longueurs comparables : un écart de plus de 20 % entre les deux reformulations est un signal d'alerte.",
        ],
      },
      {
        title: 'Faites mesurer l\'équivalence pendant la session',
        actions: [
          "Demandez à votre co-médiateur de chronométrer le temps de parole de chaque partie et de compter les mots de chaque reformulation.",
          "À la pause, comparez les chiffres et corrigez immédiatement : redonnez la parole à la partie qui a parlé moins, ou reformulez à nouveau en équivalence.",
        ],
      },
    ],
    table: {
      columns: ['Critère (session du 20/08)', 'Partie A (L. Verhoeven)', 'Partie B (représentants)', 'Seuil'],
      rows: [
        ['Temps de parole du premier tour', '9 min', '9 min', 'Écart ≤ 1 min'],
        ['Longueur de la reformulation (mots)', '62', '66', 'Écart ≤ 20 %'],
        ['Nombre d\'émotions reprises', '1 (surprise)', '1 (perte de face)', 'Égal'],
        ['Verbes d\'attribution', '« vous dites », « vous avez compris »', '« vous dites », « vous avez compris »', 'Identiques'],
      ],
    },
    example: {
      title: 'Reformulation non équivalente, puis équivalente',
      lines: [
        "Non équivalente : « L. a expliqué en détail sa méthode de travail. Et B. dit que l'équipe se sent mal. » (précis d'un côté, vague de l'autre ; « expliqué » contre « dit » ; une émotion mise en avant d'un seul côté.)",
        "Équivalente : « L. dit qu'il donne ses consignes directement parce qu'il les juge claires ; il dit être surpris par le silence de l'équipe. B. dit que la correction faite devant tous l'a mis mal à l'aise ; il dit avoir besoin d'être corrigé en tête-à-tête. »",
      ],
    },
    result: "Fait quand : vos deux reformulations tiennent dans les seuils du tableau, mesurés par un tiers ou par vous après coup.",
    pitfall: "Embellir la partie qui s'exprime le plus clairement, ou ne pas reformuler celle qui parle peu. Dans un style direct vous êtes tentée de reformuler plus longuement celui qui a mieux structuré son récit ; ce n'est pas la même chose que celui qui a mieux compris.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Demander à la partie la moins favorisée par votre style si elle se sent entendue',
    intro: "La partie dont le style est le plus éloigné du vôtre est celle qui risque le plus de se sentir moins bien comprise. Vous le lui demandez explicitement, à voix haute, à des moments prévus, et vous agissez sur la réponse.",
    steps: [
      {
        title: 'Identifiez la partie la moins favorisée par votre style',
        actions: [
          "Reprenez les réponses 1 à 3 de votre auto-diagnostic.",
          "Désignez la partie dont le style est le plus éloigné du vôtre ; écrivez son nom en haut de votre feuille de session.",
        ],
      },
      {
        title: 'Posez la question à trois moments',
        actions: [
          "À la pause, en aparté, à cette partie : « Avez-vous le sentiment d'avoir été entendu(e) de la même façon que l'autre ? »",
          "En fin de session, à voix haute, aux deux parties : « Pouvez-vous dire si vous vous êtes sentis entendus de façon équivalente ? »",
          "Au point de suivi, séparément : même question.",
        ],
      },
      {
        title: 'Agissez sur la réponse',
        actions: [
          "Si la réponse est négative ou nuancée : changez quelque chose dans la minute (reformulez de nouveau, faites reformuler par le co-médiateur, redonnez la parole).",
          "Notez la réponse et l'action dans vos notes de session.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — pause de 14 h 40, jeudi 20 août',
      lines: [
        "Partie la moins favorisée par votre style : L. Verhoeven, dont le registre direct est le plus éloigné du vôtre.",
        "N. Mbusa, en aparté : « Avez-vous le sentiment d'avoir été entendu de la même façon que l'équipe ? » — L. Verhoeven : « Oui, mais j'ai trouvé que vous avez insisté sur la perte de face. Cela m'a semblé pencher de leur côté. »",
        "Action immédiate : au tour suivant, N. Mbusa reformule le besoin de L. Verhoeven avec la même précision (« vous voulez savoir tôt ce qui pose problème, sans devoir le deviner ») et demande à Y. Haddad de reformuler le second tour.",
        "Fin de session : les deux parties disent se sentir entendues de façon équivalente.",
      ],
    },
    result: "Fait quand : la question a été posée à la pause, en fin de session et au suivi, la réponse notée, et une action concrète prise chaque fois que la réponse n'était pas un oui franc.",
    pitfall: "Poser la question à la partie dont vous êtes proche : la réponse sera polie et vous apprendra peu. Posez-la d'abord à l'autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Décider de faire coconduire ou superviser la médiation',
    intro: "En cas de doute persistant sur votre propre impartialité, faites coconduire ou superviser la médiation par un collègue d'une autre origine culturelle. Ce n'est pas un aveu de faiblesse : c'est la mesure de protection des deux parties.",
    steps: [
      {
        title: 'Passez les cinq critères',
        actions: [
          "1. Je partage la culture, la langue ou l'origine d'une des deux parties.",
          "2. J'ai un lien hiérarchique, amical ou de dépendance avec une partie.",
          "3. Mon auto-diagnostic révèle une conclusion déjà en tête.",
          "4. L'enjeu est élevé (cadre international, équipe entière, risque de départ).",
          "5. C'est ma première médiation de ce type.",
        ],
      },
      {
        title: 'Choisissez et écrivez le dispositif',
        actions: [
          "Un seul « oui » : supervision (débriefing avant et après chaque entretien et session avec votre HR Manager).",
          "Deux « oui » ou un « oui » au critère 1 avec un enjeu élevé : coconduction, avec un co-médiateur sans lien hiérarchique avec les parties.",
          "Demandez à chaque partie d'accepter les médiateurs avant le premier entretien et notez l'acceptation dans la section 1.",
          "Écrivez le dispositif et envoyez-le à votre HR Manager.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — courriel du lundi 17 août, 7 h 30, à A. Kavira',
      lines: [
        "Objet : Goma - Logistique — dispositif de neutralité pour la médiation",
        "Bonjour A., critères : (1) oui, je partage la langue et les codes de l'équipe nationale ; (2) non ; (3) oui, ma conclusion spontanée est « il est trop brutal » ; (4) oui, c'est un cadre international et six personnes ; (5) oui, première médiation interculturelle.",
        "Dispositif proposé : coconduction avec Y. Haddad, Coordinateur Programmes, d'une troisième origine, sans lien avec le chef d'équipe ni avec l'équipe ; supervision par vos soins (débriefing mercredi 19/08 à 16 h 30 et jeudi 20/08 à 16 h 15). Chaque partie sera interrogée sur son acceptation des médiateurs avant le premier entretien. Êtes-vous d'accord ? N. Mbusa",
      ],
    },
    result: "Fait quand : le dispositif est écrit, validé par le HR Manager, et chaque partie a accepté les médiateurs (le cas de Goma : les deux parties ont répondu « aucune objection »).",
    pitfall: "Désigner comme co-médiateur un collègue de l'une des deux parties, ou un manager qui a un intérêt dans l'issue. Un co-médiateur qui n'est pas indépendant ne protège rien.",
  },

  // ─── Procédure 5 — Construire la culture d'équipe ──────────────────────
  {
    type: 'concept',
    title: 'Procédure 5 — Construire la culture d\'équipe : valeurs, rituels et leadership',
    body: [
      "Un accord de médiation clôt un épisode ; il ne change pas le terrain sur lequel l'épisode a poussé. La culture d'équipe est le déterminant le plus puissant, sur la durée, de la façon dont une équipe gère le désaccord. Elle se construit avec l'équipe, par petites décisions concrètes, et se mesure.",
      "Le contenu source pose cet enjeu comme l'un des trois objectifs du module ; cette procédure l'opérationnalise par les pratiques standard de management d'équipe en contexte humanitaire. Elle s'applique à toute équipe, pas seulement après un conflit.",
    ],
    bullets: [
      "Étape 1 — Diagnostiquer la culture actuelle de l'équipe.",
      "Étape 2 — Construire avec l'équipe quatre à cinq comportements communs (la charte).",
      "Étape 3 — Installer trois rituels calendrés.",
      "Étape 4 — Préparer le leadership du chef d'équipe.",
      "Étape 5 — Mesurer et ancrer dans la durée.",
    ],
    result: "Livrable 7 : la charte d'équipe, les trois rituels dans le calendrier, le plan de coaching du chef d'équipe et les indicateurs de suivi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Diagnostiquer la culture actuelle de l\'équipe',
    intro: "Avant de proposer quoi que ce soit, regardez comment l'équipe fonctionne réellement. Trois sources, croisées : l'observation de réunions, un court questionnaire anonyme, l'historique de la grille.",
    steps: [
      {
        title: 'Observez deux réunions avec une grille de cinq points',
        actions: [
          "Qui parle, et combien de temps ? Qui reste silencieux ?",
          "Comment les désaccords sont-ils exprimés (en réunion, en aparté, pas du tout) ?",
          "Comment les erreurs sont-elles traitées (en public, en privé, jamais) ?",
          "Comment les décisions sont-elles prises et expliquées ?",
          "Que se passe-t-il à la fin de la réunion (qui reste, qui parle à qui) ?",
        ],
      },
      {
        title: 'Lancez un questionnaire anonyme de cinq questions',
        actions: [
          "Posez cinq affirmations, notées de 1 (pas du tout d'accord) à 5 (tout à fait d'accord), sur papier, dans une urne.",
          "Dépouillez vous-même : seules les moyennes de toute l'équipe sont communiquées ; avec moins de cinq répondants, ne publiez aucun résultat par sous-groupe.",
          "Croisez avec les indicateurs de la grille de l'équipe.",
        ],
      },
    ],
    table: {
      columns: ['Affirmation (échelle de 1 à 5)', 'Moyenne de l\'équipe (6 réponses, 1er septembre)'],
      rows: [
        ['Je peux dire à mon chef d\'équipe qu\'une décision pose problème, sans crainte', '2,0'],
        ['Quand je fais une erreur, on me le dit d\'une façon qui préserve ma dignité', '2,3'],
        ['Je sais pourquoi on me demande ce qu\'on me demande', '3,5'],
        ['Mes propositions sont prises en compte', '2,7'],
        ['Je veux continuer à travailler dans cette équipe', '4,8'],
      ],
    },
    example: {
      title: 'Fil rouge — diagnostic de Goma - Logistique, 25 août au 3 septembre',
      lines: [
        "Observation des réunions du mardi 25/08 et du mardi 1er/09 : sur 20 minutes, L. Verhoeven parle 14 minutes ; B. Muhindo parle 2 minutes, les cinq autres personnes parlent 4 minutes à elles toutes. Aucune correction individuelle observée. Les questions sont posées à la fin, en aparté.",
        "Questionnaire du 1er/09 : les moyennes ci-dessus ; le score le plus bas (2,0) porte sur la possibilité de dire un désaccord, le plus haut (4,8) sur la volonté de rester.",
        "Lecture : le terrain est favorable (la volonté de rester est forte), mais le canal d'expression du désaccord n'existe pas encore. C'est la base de la charte.",
      ],
    },
    result: "Fait quand : vous avez une observation datée de deux réunions, cinq moyennes sur l'équipe entière, et une phrase de lecture qui identifie le manque principal.",
    pitfall: "Publier les résultats par ancienneté ou par fonction dans une équipe de six personnes : chacun identifie les autres. Avec moins de cinq répondants par groupe, seules les moyennes de toute l'équipe sont diffusées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Construire avec l\'équipe quatre à cinq comportements communs : la charte',
    intro: "Une valeur n'est pas un mot (« respect »), c'est un comportement qu'un tiers peut observer. L'atelier dure 90 minutes, le chef d'équipe parle en dernier, et chacun écrit avant de parler pour que la parole des plus réservés compte autant que celle des plus à l'aise.",
    steps: [
      {
        title: 'Préparez l\'atelier de 90 minutes',
        actions: [
          "Posez trois questions, écrites sur des feuilles : « Quand l'équipe fonctionne à son meilleur, que fait-on concrètement ? » « Quand ça se passe mal, que fait-on concrètement ? » « Que voudrions-nous faire différemment ? »",
          "Prévoyez des petites feuilles, un mur et des marqueurs.",
          "Invitez toute l'équipe, chef d'équipe compris ; précisez que le chef d'équipe s'exprime en dernier.",
        ],
      },
      {
        title: 'Conduisez les cinq temps de l\'atelier',
        actions: [
          "10 min — chacun écrit seul, une idée par feuille (écrit d'abord, parole ensuite).",
          "25 min — les feuilles sont collées au mur, regroupées par thèmes, le chef d'équipe n'intervient pas.",
          "25 min — l'équipe choisit quatre à cinq thèmes et les reformule en « Nous… », au présent, avec un comportement observable.",
          "20 min — test d'observabilité : un tiers peut-il voir cela ? Sinon, on reformule.",
          "10 min — le chef d'équipe s'exprime, le groupe valide, la charte est affichée.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — charte de l\'équipe Logistique de Goma, atelier du mardi 15 septembre 2026',
      lines: [
        "1. Nous corrigeons une erreur individuelle en tête-à-tête, jamais devant l'équipe.",
        "2. Nous expliquons la raison de chaque consigne et vérifions qu'elle est comprise.",
        "3. Nous disons qu'un délai ou une décision pose problème avant l'échéance, par l'un des trois canaux convenus.",
        "4. Nous donnons la parole à chacun au moins une fois au point du mardi.",
        "5. Nous reconnaissons publiquement, une fois par semaine, un travail bien fait.",
        "Test d'observabilité : « Nous respectons nos collègues » a été rejeté comme non observable ; remplacé par le n° 1.",
      ],
    },
    result: "Fait quand : la charte contient quatre à cinq comportements formulés en « nous », chacun observable par un tiers, affichés dans la salle de réunion, validés par toute l'équipe.",
    pitfall: "Demander à l'équipe de « définir ses valeurs » avec un chef d'équipe qui parle en premier. Vous obtiendrez ses valeurs, validées par un silence poli.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Installer trois rituels calendrés',
    intro: "Un rituel est un moment récurrent, court, avec un animateur nommé, où l'on parle autrement que dans l'urgence. Trois rituels suffisent : plus, ils s'abandonnent. Chacun casse un maillon précis de la boucle d'interprétation erronée.",
    steps: [
      {
        title: 'Choisissez les trois rituels et nommez les animateurs',
        actions: [
          "Un moment pour préparer les décisions avec les représentants de l'équipe (évite la surprise publique).",
          "Un moment d'expression de toute l'équipe, avec parole écrite d'abord (évite le silence en réunion).",
          "Un moment individuel chef-collaborateur (donne un canal privé pour dire un désaccord et pour recevoir une correction).",
        ],
      },
      {
        title: 'Mettez-les dans les agendas, avec une date de première occurrence',
        actions: [
          "Envoyez les invitations récurrentes avant le lancement, au nom de l'animateur, avec la durée.",
          "Notez chaque occurrence dans votre suivi : tenue, absents, une remarque utile.",
        ],
      },
    ],
    table: {
      columns: ['Rituel', 'Fréquence et durée', 'Animateur', 'Ce qu\'il prévient'],
      rows: [
        ["Pré-réunion avec deux représentants de l'équipe", 'Lundi 15 h, 15 min', 'L. Verhoeven', 'La décision annoncée en public sans avoir été entendue'],
        ['Tour de parole écrit au point du mardi : une ligne par personne, lue à tour de rôle', 'Mardi 8 h, 20 min', 'L. Verhoeven, parole en dernier', 'Le silence pris pour un accord'],
        ['Entretien individuel mensuel chef-collaborateur', 'Premier jeudi du mois, 20 min par personne', 'L. Verhoeven', 'La correction publique et le désaccord sans canal'],
      ],
    },
    example: {
      title: 'Fil rouge — calendrier de lancement',
      lines: [
        "Pré-réunion du lundi : lancée le 24/08 par l'accord de médiation (engagement A2), formalisée comme rituel d'équipe le 21/09.",
        "Tour de parole écrit du mardi : première occurrence le 22/09 ; rappel du chef d'équipe : « chacun écrit une ligne, je parle en dernier ».",
        "Entretiens individuels mensuels : première série le jeudi 1er octobre, six entretiens de 20 minutes, créneaux fixés en avance.",
      ],
    },
    result: "Fait quand : les trois rituels sont dans les agendas avec leur première date, leur animateur et leur durée, et vous avez un tableau de suivi des occurrences.",
    pitfall: "Installer un rituel sans animateur nommé ou sans date de première occurrence. Il disparaît dès que le chef d'équipe est occupé, c'est-à-dire en quinze jours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Préparer le leadership du chef d\'équipe',
    intro: "Le leadership est le levier le plus puissant et le plus délicat : un chef d'équipe qui se sent mis en cause se ferme. Cadrez l'accompagnement comme un soutien, avec trois comportements précis et trois séances courtes. Pour un manager qui arrive, faites un briefing interculturel dans ses deux premières semaines.",
    steps: [
      {
        title: 'Définissez les trois comportements de leadership à travailler',
        actions: [
          "Corriger en privé et valoriser en public (charte n° 1 et n° 5).",
          "Donner la raison de chaque consigne et demander si l'échéance est tenable (charte n° 2 et n° 3).",
          "Demander son avis à chaque personne avant de trancher une décision qui la concerne (charte n° 4).",
        ],
      },
      {
        title: 'Planifiez trois séances de 45 minutes, avec un exercice pratique',
        actions: [
          "Séance 1 : relire les trois comportements, préparer une consigne et une correction réelles à haute voix.",
          "Séance 2 : débriefer une situation vécue depuis la séance 1 (qu'est-ce que j'ai fait, qu'est-ce qui s'est passé).",
          "Séance 3 : revoir les indicateurs (tour de parole, messages « Point à revoir ») et décider de la suite.",
          "Ajoutez un objectif de management d'équipe dans les objectifs annuels (voir Module 05).",
        ],
      },
    ],
    table: {
      columns: ['Séance', 'Date', 'Thème', 'Exercice pratique'],
      rows: [
        ['1', 'Jeudi 17/09/2026', 'Les trois comportements de leadership', 'Reformuler à haute voix une correction individuelle réelle sans adjectif sur la personne'],
        ['2', 'Jeudi 01/10/2026', 'Débrief d\'une situation vécue', 'Récit en trois temps : fait, effet, ce que je ferais autrement'],
        ['3', 'Jeudi 15/10/2026', 'Indicateurs et suite', 'Lire les résultats du tour de parole et des messages « Point à revoir »'],
      ],
    },
    example: {
      title: 'Fil rouge — briefing d\'arrivée proposé pour tout nouveau manager (à intégrer à l\'accueil, Module 01)',
      lines: [
        "Dans vos deux premières semaines : une heure avec le HR Officer sur trois questions — « Comment votre équipe exprime-t-elle un désaccord ? » « Comment préfère-t-elle être corrigée ? » « Qui est son relais naturel ? »",
        "À la fin du premier mois : un entretien individuel avec chaque membre, sur la question « qu'est-ce qui vous aide à bien travailler avec un chef ? »",
      ],
    },
    result: "Fait quand : les trois comportements sont écrits, trois séances sont planifiées, et le chef d'équipe a accepté l'accompagnement comme un soutien.",
    pitfall: "Présenter l'accompagnement comme une remédiation liée au conflit. Le chef d'équipe vit ensuite la médiation comme une sanction déguisée, et le Base Manager ne vous en parlera plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Mesurer et ancrer dans la durée',
    intro: "Ce qui ne se mesure pas se perd. Quatre indicateurs, une revue trimestrielle de 45 minutes, une règle d'ancrage : tout changement de manager déclenche une relecture de la charte.",
    steps: [
      {
        title: 'Choisissez quatre indicateurs, avec valeur de départ et cible',
        actions: [
          "Nombre de signaux saisis dans la grille pour l'équipe sur le trimestre.",
          "Nombre de propositions de l'équipe au point du mardi, par mois.",
          "Moyenne du questionnaire de cinq affirmations (question 1 en particulier).",
          "Départs volontaires sur 12 mois glissants.",
        ],
      },
      {
        title: 'Installez la revue trimestrielle',
        actions: [
          "Planifiez une revue de 45 minutes chaque trimestre avec le Base Manager et le chef d'équipe ; ajoutez-la à votre agenda RH.",
          "Notez trois décisions à chaque revue : ce qu'on maintient, ce qu'on ajuste, ce qu'on arrête.",
          "Relisez la charte à chaque arrivée d'un nouveau manager ou d'un nouveau membre.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Valeur de départ (septembre 2026)', 'Cible au 3 décembre 2026', 'Alerte'],
      rows: [
        ['Signaux de la grille pour Goma - Logistique, par trimestre', '3 (juillet-août)', '0', '2 ou plus'],
        ['Propositions de l\'équipe au point du mardi', '0 par mois (juillet-août)', '4 par mois', 'Moins de 2 par mois'],
        ['Moyenne à « Je peux dire qu\'une décision pose problème »', '2,0 sur 5', '3,5 sur 5', 'Baisse de plus de 0,5'],
        ['Départs volontaires sur 12 mois glissants', '0', '0', '1 ou plus'],
      ],
    },
    example: {
      title: 'Fil rouge — calcul de la moyenne du questionnaire (6 réponses à la première question, 1er septembre)',
      lines: [
        "Réponses : 2, 1, 2, 3, 2, 2 → somme 12 ; 12 divisé par 6 = 2,0.",
        "Cible : 3,5 sur 5 au questionnaire du jeudi 3 décembre 2026, soit +1,5 point en trois mois.",
        "Alerte : si la moyenne baisse de plus de 0,5 point entre deux questionnaires, vous rouvrez la Procédure 5, étape 1.",
        "Première revue trimestrielle : jeudi 3 décembre 2026, 45 minutes, avec E. Kasongo et L. Verhoeven.",
      ],
    },
    result: "Fait quand : chaque indicateur a une source, une valeur de départ et une cible datée, la revue trimestrielle est dans les agendas, et la règle d'ancrage est écrite dans la charte.",
    pitfall: "Mesurer une seule fois, après la médiation, et conclure à la réussite. Une culture d'équipe se mesure sur plusieurs trimestres ; une amélioration de trois semaines n'est que l'effet de l'attention.",
  },

  // ─── Cas résolu ────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Tension chef d'équipe expatrié / équipe nationale, base de Goma » : du 14 août au 24 septembre",
    scenario: "Rappel : le chef d'équipe Logistique, L. Verhoeven (arrivé le 13 avril), vous saisit le vendredi 14 août à 17 h 10 : son équipe de six personnes ne lui dit jamais si elle n'est pas d'accord, et il découvre par le Base Manager une « grogne » depuis des semaines. Ni lui ni l'équipe n'ont commis de faute au sens du code de conduite. Mission : médier sans jamais laisser penser que vous prenez le parti de votre propre culture, ni celui du chef d'équipe qui vous a saisie en premier. Voici le déroulé complet, tel qu'un professionnel l'aurait conduit.",
    steps: [
      { title: 'Vendredi 14 août — Demande, grille et alerte', body: 'Procédure 2 (étape 1) : écoute de 25 minutes, cadrage en trois phrases. Procédure 1 (étapes 3 à 5) : trois indicateurs saisis à partir de pièces écrites, onglet Alerte recalculé à la main, classeur archivé.', result: 'Goma - Logistique en ESCALADE (3 indicateurs, sévérité 7) ; HR Manager informé par courriel le jour même.' },
      { title: 'Lundi 17 août — Qualification et ouverture du dossier', body: 'Procédure 2 (étapes 2 à 4) : fiche à trois colonnes, test faute ou malentendu, choix de la médiation. Procédure 4 (étapes 1 et 4) : auto-diagnostic et dispositif de coconduction. Procédure 3 (étapes 1 et 2) : section 1 remplie, convocations identiques.', result: 'Médiation validée par A. Kavira à 10 h ; Y. Haddad co-médiateur ; sept entretiens planifiés.' },
      { title: 'Lundi 17 (15 h) et mardi 18 août — Entretiens individuels séparés', body: 'Procédure 3 (étapes 3 à 5) : 45 minutes chacun, même salle, parole libre. Notes de pré-médiation de la partie A et de la partie B rédigées séparément le jour même.', result: 'Section 2 remplie dans deux colonnes distinctes ; fiche de qualification complétée et confirmée à 19 h.' },
      { title: 'Mercredi 19 août — Règles de dialogue et préparation', body: 'Procédure 3 (étapes 6 et 7) : quatre règles acceptées séparément par les deux parties ; plan de session en 120 minutes ; débriefing de 30 minutes avec A. Kavira.', result: 'Section 3 complétée avec initiales et dates ; composition de la session arrêtée.' },
      { title: 'Jeudi 20 août — Session conjointe et accord', body: 'Procédure 3 (étapes 8 à 11) : deux tours de parole égaux, dimension culturelle nommée à 14 h 50, six engagements, suivi fixé. Procédure 4 (étapes 2 et 3) : équivalence mesurée, question posée à L. Verhoeven à la pause.', result: 'Accord signé à 16 h ; extrait diffusé à A. Kavira, E. Kasongo, H. Mwamba.' },
      { title: 'Du 24 août au 10 septembre — Application', body: 'Engagements A1 à B3 appliqués à partir du lundi 24 août. Pré-réunions du lundi tenues. Diagnostic de culture d\'équipe en parallèle (Procédure 5, étape 1).', result: 'Trois pré-réunions sur trois ; aucune correction publique ; deux messages « Point à revoir ».' },
      { title: 'Jeudi 10 septembre — Point de suivi', body: 'Procédure 3 (étape 12) : constat engagement par engagement, un point à réajuster (B3).', result: 'Section 5 : « À réajuster (un engagement sur six) » ; contrôle léger prévu le 24/09.' },
      { title: 'Jeudi 24 septembre — Clôture et mise en place de la culture d\'équipe', body: 'Contrôle léger : B3 respecté ; trois lignes de Goma - Logistique archivées et effacées de la grille. Procédure 5 (étapes 2 à 5) : charte du 15/09, rituels du 21/09, coaching du 17/09 au 15/10, revue trimestrielle le 03/12.', result: 'Dossier clos ; Goma - Logistique repasse à NORMAL ; l\'équipe a ses comportements, ses rituels et ses indicateurs.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La grille finale : avant et après la médiation',
    scenario: "Voici les deux états de l'onglet Alerte d'escalade : ce que vous avez vu le vendredi 14 août à 18 h 15, puis ce qu'il affiche le jeudi 24 septembre, après archivage des trois lignes de Goma - Logistique dans Archive_conflits_KSS_2026.xlsx (extrait : Goma - Santé, à 0 et NORMAL dans les deux états, n'est pas repris).",
    steps: [],
    table: {
      columns: ['Moment', 'Équipe / Base', 'Nb indicateurs (30 j)', 'Somme sévérité (30 j)', 'Statut'],
      rows: [
        ['14/08/2026', 'Base Goma - Logistique', '3', '7', 'ESCALADE - INTERVENTION REQUISE'],
        ['14/08/2026', 'Base Bunia - Santé', '1', '1', 'NORMAL'],
        ['14/08/2026', 'Base Uvira - WASH', '1', '2', 'NORMAL'],
        ['24/09/2026', 'Base Goma - Logistique', '0', '0', 'NORMAL'],
        ['24/09/2026', 'Base Bunia - Santé', '1', '1', 'NORMAL'],
        ['24/09/2026', 'Base Uvira - WASH', '1', '2', 'NORMAL'],
      ],
    },
    example: {
      title: 'Ce qui change dans le classeur le 24 septembre',
      lines: [
        "Onglet Indicateurs : les cellules A5:E7 sont vidées (Goma - Logistique) ; restent les lignes de Bunia (10/07/2026) et d'Uvira (05/08/2026).",
        "Date de référence en C4 : 05/08/2026, car c'est la plus récente des lignes restantes ; début de fenêtre 06/07/2026.",
        "Archive_conflits_KSS_2026.xlsx : les trois lignes copiées, avec la mention « Dossier clos le 24/09/2026 — protocole Goma-Logistique_2026-08 » en colonne F.",
        "Les deux fichiers sont enregistrés dans le dossier RH confidentiel.",
      ],
    },
    result: "Contrôle final : le statut ESCALADE du 14/08 est conservé dans le classeur archivé du jour (Grille_conflits_KSS_2026-08-14_ESCALADE.xlsx) ; la grille de travail est propre ; la décision de clôture est consignée dans le protocole (section 5).",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La fiche de qualification, version finale',
    scenario: "Fiche_qualification_Goma-Logistique_2026-08.docx, complétée à l'issue des entretiens (mardi 18 août, 19 h), envoyée à A. Kavira.",
    steps: [],
    table: {
      columns: ['Fait observable', 'Lecture de L. Verhoeven (A)', 'Lecture de l\'équipe (B)', 'Source'],
      rows: [
        ["07/07 : erreur de quantité sur un bordereau signalée à voix haute en réunion, correction demandée avant midi", "« Correction claire et efficace, la deuxième fois que l'erreur se produisait. »", "« Il a voulu humilier un collègue devant tous. »", 'Entretiens 17 et 18/08'],
        ["Depuis juillet : aucune proposition de l'équipe en réunion du mardi", "« Un manque d'implication. »", "« On ne contredit pas un chef devant les autres, on le dit autrement. »", 'Grille (14/07), entretiens'],
        ["Remarques d'équipe au Base Manager et à B. Muhindo plutôt qu'en réunion", "« Ils ne me disent jamais s'ils ne sont pas d'accord. »", "« C'est la façon de le dire sans manquer de respect. »", 'Grille (22/07), entretiens'],
        ["01/08 : l'équipe quitte la salle sans échanger avec le chef d'équipe", "« Je pensais qu'ils étaient pressés. »", "« On ne savait pas quoi lui dire après le 7 juillet. »", 'Compte rendu A. Kavira, entretiens'],
      ],
    },
    example: {
      title: 'Test « faute ou malentendu ? » et choix, confirmés le 18/08',
      lines: [
        "1. Article violé : aucun. 2. Allégation grave : non. 3. Règle de sécurité violée : non.",
        "4. Parole libre en présence de l'autre : non en réunion publique, oui en petit comité. 5. Intérêt commun : oui, confirmé par les sept personnes entendues.",
        "Choix : médiation, avec session en petit groupe. Lecture : malentendu culturel de communication, quatre lignes sur quatre ; aucun désaccord de fond. Aucune décision urgente n'est à prendre.",
      ],
    },
    result: "Les quatre lignes ont un fait sans adjectif, deux lectures qui divergent sur le même fait et une source : la preuve écrite que l'on est face à un malentendu, pas à une faute.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le protocole rempli, sections 1 à 3',
    scenario: "Protocole_mediation_Goma-Logistique_2026-08.docx : ce que contiennent les trois premières sections le mercredi 19 août au soir (version complète, dossier RH confidentiel).",
    steps: [],
    example: {
      title: 'Sections 1 à 3, champ par champ',
      lines: [
        "1. Parties — Partie A : L. Verhoeven, Logistics Team Leader (cadre international), équipe Logistique, base de Goma. Partie B : équipe logistique nationale (6 personnes), base de Goma, représentants B. Muhindo et S. Kahambu, confirmés le 19/08. Médiateur : N. Mbusa, HR Officer ; co-médiateur Y. Haddad ; supervision A. Kavira. Date d'ouverture : 17/08/2026.",
        "2. Notes de pré-médiation, Partie A — Faits : consignes directes depuis avril, correction du 07/07 devant tous, plus aucune proposition depuis. Émotions et besoins : surpris, un peu blessé ; veut savoir tôt ce qui pose problème. Élément culturel : critique factuelle et immédiate = signe de respect ; silence lu comme un manque d'implication.",
        "2. Notes de pré-médiation, Partie B — Faits : réunion du 07/07 citée par cinq personnes sur six ; plus de proposition depuis ; remarques par relais. Émotions et besoins : gêne, perte de face (cinq sur six) ; être corrigé en privé, être consulté ; veulent continuer à travailler avec lui (six sur six). Élément culturel : désaccord exprimé en privé, par un relais ou par le silence ; contredire un supérieur en public = manque de respect grave.",
        "3. Règles — R1 : tour à tour, sans interrompre, cinq minutes maximum, reformulation avant de passer la parole. R2 : faits et comportements, pas intentions supposées. R3 : rôle neutre des médiateurs. R4 : confidentialité de la salle, seul l'accord écrit est communiqué. Acceptées par A : L.V., 19/08/2026. Acceptées par B : B.M. et S.K., pour l'équipe, 19/08/2026.",
      ],
    },
    result: "Contrôle : les deux colonnes de la section 2 sont distinctes (faits différents, besoins différents, normes différentes) ; aucun nom de membre de l'équipe n'y figure ; les quatre règles ont leurs initiales et leurs dates.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le protocole rempli, sections 4 à 6 (version diffusée)',
    scenario: "L'extrait remis aux parties, au Base Manager et au HR Manager le jeudi 20 août à 16 h (sections 1, 3, 4, 5, 6 ; la section 2 est supprimée).",
    steps: [],
    table: {
      columns: ['Partie', 'Engagement', 'Situation et signe visible'],
      rows: [
        ['A (L. Verhoeven)', 'A1 — Corriger une erreur individuelle en tête-à-tête, jamais en réunion d\'équipe', 'À partir du 24/08 ; aucune correction nominative au point du mardi'],
        ['A', 'A2 — Pré-réunion de 15 minutes avec les deux représentants, avant de trancher une décision', 'Chaque lundi à 15 h ; invitation dans les agendas'],
        ['A', 'A3 — Donner la raison de chaque consigne avec échéance, demander si elle est tenable', 'Réponse laissée jusqu\'à midi le lendemain ; message écrit conservé'],
        ['B (équipe)', 'B1 — Dire qu\'une décision ou un délai pose problème avant l\'échéance, par l\'un des trois canaux', 'Pré-réunion, message « Point à revoir », ou échange individuel'],
        ['B', 'B2 — B. Muhindo et S. Kahambu recueillent les remarques et les présentent', 'Chaque lundi à 15 h, en pré-réunion'],
        ['B', 'B3 — Poser la question au moment de la consigne ou dans les 24 heures', 'Aucune consigne laissée sans réponse'],
      ],
    },
    example: {
      title: 'Sections 5 et 6',
      lines: [
        "Section 5 — Date du point de suivi : jeudi 10/09/2026, 45 minutes. Responsable du suivi : N. Mbusa. Résultat du suivi : « À réajuster (un engagement sur six). B3 : consigne donnée par écrit avec un exemple ; contrôle léger le 24/09 par E. Kasongo. » (rempli le 10/09)",
        "Section 6 — Partie A : signature de L. Verhoeven, 20/08/2026. Partie B : accord explicite de B. Muhindo et S. Kahambu pour l'équipe, noté par N. Mbusa, 20/08/2026. Médiateurs : N. Mbusa et Y. Haddad, signatures, 20/08/2026.",
      ],
    },
    result: "Contrôle : chaque engagement répond aux trois questions (quoi, quand, comment l'autre le saura) ; l'accord nomme le malentendu de style sans désigner de fautif ; la date de suivi est à moins de quatre semaines.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Pourquoi ces choix',
    scenario: "Le raisonnement derrière chaque décision du cas : c'est lui qui vous permet de le transposer à votre propre dossier, quand les faits seront différents.",
    steps: [
      { title: '1. Médiation et pas arbitrage', body: 'Aucune règle n\'avait été enfreinte, aucune décision urgente n\'était à prendre et les deux parties voulaient continuer à travailler ensemble : les trois signes de la médiation. Trancher aurait créé des perdants contre la RH.' },
      { title: '2. Des entretiens séparés avant toute session', body: 'Dans une équipe où contredire un chef en public est impossible, une réunion conjointe d\'emblée aurait produit un accord de façade. Les six entretiens ont fait émerger ce que personne ne dirait en réunion.' },
      { title: '3. Une session en petit groupe, pas toute l\'équipe', body: 'Réunir les six avec leur chef aurait recréé le cadre de la réunion du 7 juillet. Deux représentants choisis par l\'équipe, après accord des six, et une restitution à tous le lendemain.' },
      { title: '4. Nommer le culturel en termes de styles, après les reformulations', body: 'Le nommer trop tôt, c\'est désigner. Le nommer après que chacun se soit senti entendu, avec les mots des parties (« direct et immédiat », « privé et indirect »), laisse chacun se reconnaître sans se sentir jugé.' },
      { title: '5. Des engagements symétriques et vérifiables', body: 'Trois engagements de chaque côté, chacun avec une situation et un signe visible. Si seule une partie s\'engage, l\'autre se sent mise en cause et l\'accord se brise dès le premier écart.' },
      { title: '6. Un suivi à trois semaines', body: 'Deux jours, c\'est trop tôt pour voir un changement ; deux mois, c\'est trop tard pour réajuster. Trois semaines tombent dans la fenêtre de 2 à 4 semaines du protocole, et l\'accord a été vérifié sur des pièces, pas sur des impressions.' },
    ],
    result: "Résultat : l'équipe retrouve une parole, le chef d'équipe sait désormais quel signal chercher, et la RH n'a pris le parti de personne. Le conflit n'est pas seulement apaisé : la boucle d'interprétation est cassée.",
  },

  // ─── Exercices ─────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: "Exercice 1 — À vous : la tension à Uvira, équipe WASH",
    instructions: "Vous êtes HR Officer (ou HR Manager) en charge de la base d'Uvira de KSS, pour cet exercice. Mardi 6 octobre 2026, le chef de base B. Mapendo vous dit que le Superviseur WASH et l'ingénieur WASH « ne se parlent plus que par messages écrits secs ». D. Amani, Superviseur WASH national, 52 ans, neuf ans d'ancienneté à KSS, est le n+1 de deux techniciens. E. Fontaine, WASH Engineer international, 31 ans, est arrivé le 10 août. Vous disposez des deux templates d'origine, avec leurs cinq lignes d'exemple. Les entretiens individuels séparés ont eu lieu le mercredi 7 octobre ; leurs extraits sont ci-dessous.",
    table: {
      columns: ['Date constatée', 'Constat', 'Rapporté par'],
      rows: [
        ['29/09/2026', "Messages écrits de l'ingénieur au Superviseur, hiérarchie en copie : « Rapport de chloration incomplet, à refaire avant jeudi 17 h ». Réponse du Superviseur : « OK », seulement. Même schéma depuis deux semaines.", 'Chef de base'],
        ['30/09/2026', "Rapport hebdomadaire de qualité de l'eau remis avec deux jours de retard, sans commentaire.", 'Technicien WASH'],
        ['01/10/2026', "Superviseur absent de la réunion WASH du jeudi, sans prévenir ; un technicien rapporte qu'il « ne veut plus s'asseoir à côté de l'ingénieur ».", 'Technicien WASH'],
      ],
    },
    example: {
      title: 'Extraits des entretiens du mercredi 7 octobre',
      lines: [
        "D. Amani : « Je suis à KSS depuis neuf ans. Il m'écrit comme à un stagiaire, et il met le coordinateur en copie pour que tout le monde voie que mon rapport est mauvais. Je ne réponds pas : je ne veux pas qu'on pense que je me dispute par écrit. On ne fait pas ça à un aîné. J'aimerais qu'il vienne me voir. »",
        "E. Fontaine : « Je mets le coordinateur en copie parce que c'est la procédure de transparence de mon ancienne organisation. Ses rapports sont incomplets et il me répond OK sans rien corriger. Je crois qu'il retarde exprès. J'ai besoin de rapports complets à temps, et de savoir si un délai pose problème. »",
        "Questions culturelles posées à chacun : « Comment avez-vous compris l'intention de l'autre ? » D. Amani : « Il veut me faire passer pour incompétent. » E. Fontaine : « Il ne s'implique pas. »",
      ],
    },
    deliverable: "Les deux fichiers complétés pour Uvira : la grille avec les trois indicateurs saisis (statuts observés à chaque saisie et statut final), le protocole de médiation sections 1 à 6 (notes distinctes, au moins trois règles, accord de six engagements maximum, date de suivi à moins de quatre semaines), plus la fiche de qualification en une page.",
  },
  {
    type: 'exercise',
    title: "Exercice 1 — Les étapes à suivre pour Uvira",
    deliverable: "La grille d'alerte lue pour Uvira, le conflit qualifié, l'auto-diagnostic et le dispositif, le protocole de médiation rempli et la session préparée.",
    steps: [
      {
        title: 'Saisissez et lisez la grille (Procédure 1, étapes 3 et 4)',
        actions: [
          "Enregistrez le classeur sous Grille_conflits_KSS_2026-10.xlsx ; gardez les cinq lignes d'exemple.",
          "Saisissez les trois indicateurs un par un, avec la sévérité de votre choix selon le barème ; notez le statut d'Uvira après chaque saisie.",
          "Recalculez à la main la date de référence, le début de fenêtre, le nombre d'indicateurs et la somme de sévérité.",
        ],
      },
      {
        title: 'Qualifiez le conflit (Procédure 2, étapes 2 à 4)',
        actions: [
          "Remplissez le tableau à trois colonnes (faits, lecture de A, lecture de B) avec les extraits d'entretien.",
          "Passez le test des cinq questions et rédigez le choix médiation ou arbitrage en cinq lignes.",
        ],
      },
      {
        title: 'Faites votre auto-diagnostic et votre dispositif (Procédure 4, étapes 1 et 4)',
        actions: [
          "Écrivez vos six réponses et vos trois risques ; décidez qui co-médie ou supervise.",
        ],
      },
      {
        title: 'Remplissez le protocole (Procédure 3, étapes 1, 4 à 7, 10 et 11)',
        actions: [
          "Section 1 : les quatre cellules.",
          "Section 2 : les notes de D. Amani et d'E. Fontaine, dans deux colonnes réellement distinctes.",
          "Section 3 : au moins trois règles de dialogue, avec initiales et dates fictives.",
          "Section 4 : l'accord qui nomme la dimension culturelle sans désigner de fautif, avec des engagements pour chaque partie.",
          "Sections 5 et 6 : date de suivi à moins de quatre semaines, responsable, validations.",
        ],
      },
      {
        title: 'Préparez la session (Procédure 3, étapes 7 à 9)',
        actions: [
          "Écrivez le plan de la session conjointe (horaires, composition, lieu).",
          "Rédigez vos deux reformulations (D. Amani, E. Fontaine) selon le gabarit en trois phrases, et la phrase qui nomme la dimension culturelle.",
        ],
      },
    ],
    tip: "Pour l'accord, pensez aux trois questions : quoi, dans quelle situation, comment l'autre le saura. Un engagement comme « je lui parlerai avant d'écrire » n'est pas vérifiable ; « avant tout message écrit comportant une critique, j'appelle D. Amani ou je le rencontre » l'est.",
    pitfall: "Ne désignez ni l'un ni l'autre comme fautif dans l'accord, et ne décrivez pas la dimension culturelle par des nationalités : parlez de styles (écrit direct avec copie à la hiérarchie / échange oral entre pairs, respect de l'ancienneté).",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Grille : avec les cinq lignes d'exemple conservées, les trois indicateurs d'Uvira (29/09, 30/09, 01/10) font passer Uvira de NORMAL (1 indicateur, sévérité 2) à A SURVEILLER DE PRES (2 indicateurs, 4) puis à ESCALADE - INTERVENTION REQUISE (3 indicateurs, 7 avec les sévérités 2, 2 et 3).",
      "Date de référence : 01/10/2026 ; début de fenêtre : 01/09/2026. Les lignes d'exemple de Goma, de Bunia et du 05/08 d'Uvira sont hors fenêtre : leur statut est NORMAL (0, 0).",
      "Les trois indicateurs sont rédigés comme des faits, avec date réelle et source ; aucune équipe ou personne n'est qualifiée de « agressive », « passive » ou « incompétente ».",
      "Fiche de qualification : trois colonnes distinctes (fait, lecture de D. Amani, lecture d'E. Fontaine) ; les deux lectures s'opposent sur le même fait ; test des cinq questions rempli ; conclusion « médiation, malentendu culturel de communication », sans allégation grave.",
      "Protocole section 2 : les deux colonnes ne sont pas une reformulation l'une de l'autre ; aucun jugement personnel de votre part ; l'élément culturel de chaque partie est décrit avec ses mots (lieu et destinataire de la critique, rapport à l'ancienneté, copie à la hiérarchie comme procédure).",
      "Section 3 : au moins trois règles concrètes, avec initiales et dates de chaque partie.",
      "Section 4 : l'accord nomme explicitement la différence de style d'écriture et de rapport à l'ancienneté, sans désigner de fautif ; au moins un engagement par partie répond aux trois questions (quoi, quand, comment l'autre le saura) ; par exemple : appeler avant tout message critique, et remettre le rapport avec un message de statut le jour de l'échéance.",
      "Section 5 : date de suivi entre le 22 octobre et le 5 novembre 2026 (moins de quatre semaines après un accord le 8 octobre) ; responsable nommé.",
      "Section 6 : accord explicite ou signature des deux parties et du médiateur.",
      "Le dispositif de neutralité est écrit : auto-diagnostic complété, risques nommés, co-médiateur ou superviseur désigné.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice 2 — Médiation, arbitrage ou procédure formelle ?",
    instructions: "Pour chacune des six situations, indiquez la logique à appliquer (médiation, arbitrage ou procédure formelle prévue par la politique de l'ONG), justifiez-la en deux lignes en vous appuyant sur les tests de la Procédure 2, et nommez la personne à informer en premier.",
    table: {
      columns: ['N°', 'Situation', 'Votre décision, votre justification et qui informer'],
      rows: [
        ['1', "À Bunia, deux superviseurs de santé se parlent sec depuis trois semaines après une décision de planning de garde. Aucun ne conteste la règle ; tous deux veulent continuer à travailler ensemble.", 'À compléter'],
        ['2', "Un chauffeur a quitté la base après le couvre-feu avec un véhicule de l'ONG, malgré l'instruction écrite du chef de base, pour la deuxième fois.", 'À compléter'],
        ['3', "Une assistante dit en entretien que son superviseur lui fait des « propositions » et des remarques sur son corps.", 'À compléter'],
        ['4', "Après deux sessions de médiation, deux collègues de l'équipe WASH n'arrivent pas à s'entendre sur le partage du véhicule ; la distribution du lundi est bloquée.", 'À compléter'],
        ['5', "Un manager international reproche à un collaborateur national de ne « jamais dire quand il n'est pas d'accord » ; le collaborateur répond qu'il ne peut pas contredire son chef en public. Aucune règle n'est enfreinte.", 'À compléter'],
        ['6', "Un membre d'équipe dit qu'un collègue lui a demandé 20 USD sur le salaire d'un journalier pour « faciliter » son recrutement.", 'À compléter'],
      ],
    },
    deliverable: "Le tableau complété : une décision, une justification de deux lignes et une personne à informer pour chacune des six situations.",
    tip: "Pour chaque situation, posez dans cet ordre : une faute ou un fait grave est-il évoqué ? une décision urgente est-elle nécessaire ? le conflit est-il relationnel avec un intérêt commun ? L'ordre est le même qu'à la Procédure 2, étape 3 puis 4.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercice 2)',
    items: [
      "Situation 1 : médiation. Conflit relationnel, aucune règle contestée, intérêt commun ; elle peut même rester au niveau de la grille (sévérité 2) si elle se résout en une semaine. Informer le HR Manager de mission.",
      "Situation 2 : arbitrage. Une règle de sécurité claire est violée, deux fois ; c'est une décision et une mesure disciplinaire de premier niveau, pas une négociation. Informer le Base Manager et le HR Manager (niveau 2).",
      "Situation 3 : procédure formelle de plainte. Harcèlement allégué : aucune médiation, ne pas promettre la confidentialité absolue, noter les faits tels que dits et remonter immédiatement selon la politique de protection de l'ONG. Informer le HR Manager et le canal prévu, le jour même.",
      "Situation 4 : arbitrage. La médiation a été tentée sans accord et une décision est nécessaire dans un délai court (la distribution). Décision de répartition par le Base Manager ou le HR Manager, avec explication aux deux.",
      "Situation 5 : médiation. C'est le cas de Goma : malentendu de style, aucune règle enfreinte. Informer le HR Manager.",
      "Situation 6 : procédure anti-fraude. Une sollicitation d'argent pour un recrutement est un fait grave, pas un conflit relationnel. Ne pas enquêter vous-même, noter les faits tels que dits, informer le HR Manager et le Head of Mission (et le siège si la politique l'exige).",
      "Vos justifications citent les tests de la Procédure 2 (faute, allégation grave, règle de sécurité, parole libre, intérêt commun) et ne reposent pas sur la gravité perçue.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice complémentaire — Appliquez la méthode à votre propre équipe',
    instructions: "Si vous êtes en poste, refaites la Procédure 1 et la Procédure 5 avec votre propre équipe. Si vous n'êtes pas en poste, appliquez la Procédure 5 à l'équipe logistique de Goma comme si vous étiez N. Mbusa, en vous appuyant sur le cas résolu.",
    steps: [
      { title: 'Votre grille', actions: ['Grille installée avec vos équipes, barème écrit, trois premiers indicateurs saisis à leur date réelle.', 'Premier recalcul à la main de l\'onglet Alerte d\'escalade.'] },
      { title: 'Votre diagnostic de culture d\'équipe', actions: ['Observation de deux réunions avec la grille de cinq points.', 'Questionnaire anonyme de cinq affirmations (au moins cinq répondants).'] },
      { title: 'Votre charte et vos rituels', actions: ['Quatre à cinq comportements formulés en « nous », chacun observable.', 'Trois rituels avec fréquence, durée, animateur et date de première occurrence.'] },
      { title: 'Votre plan de leadership et de mesure', actions: ['Trois comportements de leadership, trois séances de coaching planifiées.', 'Quatre indicateurs avec valeur de départ, cible datée et revue trimestrielle.'] },
    ],
    deliverable: "Votre grille installée avec ses premiers indicateurs, et votre dossier de culture d'équipe : diagnostic, charte, trois rituels calendrés, plan de coaching, indicateurs.",
    pitfall: "N'utilisez jamais les noms réels de vos collègues dans des documents hors des outils et dossiers RH sécurisés de votre organisation, y compris pour un exercice de formation, et ne diffusez jamais les résultats d'un questionnaire par sous-groupe de moins de cinq personnes.",
  },

  // ─── Pièges, récapitulatif, clôture ───────────────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Intervenir trop tard, une fois que le conflit couve depuis des semaines et a déjà affecté toute l'équipe : le signal existait dans le comportement de l'équipe bien avant que le Base Manager ne tire la sonnette d'alarme. Une grille tenue à jour chaque semaine, pas seulement consultée en crise, fait la différence.",
      "Le médiateur qui prend involontairement parti, souvent pour la culture qui lui est la plus familière : un HR Manager qui partage le style direct du chef d'équipe jugera l'équipe « trop passive ». Rendez votre neutralité vérifiable (Procédure 4) au lieu de la proclamer.",
      "Traiter un conflit interculturel purement comme un désaccord professionnel, sans jamais nommer la dimension culturelle : éviter le sujet par crainte de le rendre trop sensible prive les deux parties de la seule explication qui permet de sortir du cycle d'interprétation erronée.",
      "Sauter l'écoute individuelle séparée pour « gagner du temps » : la partie la plus réservée confirmera poliment un accord de façade sans y adhérer.",
      "Considérer une médiation réussie comme un problème définitivement clos : sans la Procédure 5, la même dynamique de malentendu reviendra avec d'autres personnes.",
      "Envoyer le protocole complet aux parties, ou citer des noms dans les notes de la partie B : vous rompez la confidentialité promise et vous perdez la parole des plus réservés. Diffusez l'extrait (sections 1, 3, 4, 5, 6).",
      "Parler de « culture africaine » et de « culture européenne », ou de nationalités : vous généralisez et vous figez les personnes. Parlez de styles direct et indirect, rapportés à ce que ces personnes ont dit.",
      "Accepter un accord vague (« on va essayer de mieux communiquer ») : exigez trois engagements par partie, avec situation et signe visible, ou l'accord se délite en deux semaines.",
      "Mal manipuler la grille : ajouter des lignes sous la ligne 24, taper un nom d'équipe absent de la liste, ou oublier que la fenêtre glisse avec la date de référence. Archivez le classeur le jour où ESCALADE apparaît.",
      "Médier ce qui ne se médie pas : harcèlement, violence, exploitation et abus, fraude, violation claire d'une règle de sécurité. Ces situations relèvent d'une procédure formelle ou d'une décision, jamais d'une négociation.",
      "Oublier le point de suivi : fixez sa date avant que les parties ne quittent la salle et inscrivez-la dans les agendas.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez installé et tenu la grille grille-identification-precoce-conflits-equipe.xlsx : barème de sévérité écrit, indicateurs datés avec source, onglet Alerte recalculé à la main, statut ESCALADE archivé.",
      "Vous avez qualifié un conflit par écrit : faits séparés des interprétations, test faute ou malentendu, choix de la médiation justifié et validé par votre HR Manager.",
      "Vous avez conduit les cinq étapes d'une médiation structurée avec protocole-mediation-conflit-equipe-multiculturelle.docx, des entretiens séparés jusqu'à un accord de six engagements vérifiables et signé.",
      "Vous avez rédigé des notes de pré-médiation réellement distinctes pour chaque partie, des règles de dialogue acceptées séparément, et un plan de session en 120 minutes avec rôles.",
      "Vous avez rendu votre neutralité vérifiable : auto-diagnostic écrit, reformulations équivalentes mesurées, question posée à la partie la moins favorisée, co-médiateur et supervision.",
      "Vous avez nommé la dimension culturelle sans désigner de fautif, et fixé un point de suivi à moins de quatre semaines avec un résultat consigné et reporté dans la grille.",
      "Vous avez construit une culture d'équipe : charte de cinq comportements observables, trois rituels calendrés, plan de coaching du chef d'équipe, quatre indicateurs et une revue trimestrielle.",
      "Vous savez distinguer médiation, arbitrage et procédure formelle, et vous avez traité deux exercices : la tension d'Uvira et les six situations de qualification.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi un conflit interculturel s'envenime souvent par une boucle d'interprétation erronée plutôt que par un désaccord de fond, avec un exemple.",
      "Je sais distinguer un style de communication directe d'un style indirect, et anticiper les malentendus les plus fréquents entre les deux.",
      "Je sais choisir entre médiation et arbitrage selon la nature réelle de la situation, justifier ce choix par écrit et reconnaître ce qui ne se médie pas.",
      "Je sais conduire les cinq étapes d'une médiation structurée, dans l'ordre, sans sauter l'écoute individuelle séparée.",
      "Je sais nommer explicitement une dimension culturelle dans un conflit sans désigner l'une des parties comme fautive.",
      "J'ai complété une grille d'identification précoce des conflits d'équipe avec le template fourni et interprété correctement son signal d'escalade.",
      "J'ai conduit une médiation complète avec le template fourni, jusqu'à un accord documenté et une date de suivi fixée.",
      "Je sais identifier, dans ma propre pratique de médiateur, le risque de favoriser inconsciemment la culture qui m'est la plus familière, et je sais le rendre vérifiable.",
      "J'ai construit, ou je sais construire, la charte, les rituels et les indicateurs d'une culture d'équipe saine.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Fin de la formation — ce module est le dernier des huit. Le Module 01 ouvrait sur une idée simple : la fonction RH est le point de passage de chaque décision qui touche aux personnes, du recrutement à la séparation. Un cycle RH bien construit ne suffit pas si, au quotidien, les équipes ne savent pas gérer leurs désaccords sans se déchirer ni se replier sur des malentendus jamais nommés. Vous savez maintenant détecter, qualifier, médier et prévenir : c'est ce qui protège la seule ressource qu'une ONG humanitaire ne peut pas se permettre de perdre, une équipe qui continue de travailler ensemble sous pression. La validation de ce dernier exercice, comme celle des modules précédents, ouvre droit à votre attestation de fin de formation BK-BOOST Ltd.",
  },
]
