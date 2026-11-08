// Module 08 — Gestion des Conflits & Médiation en Équipe Multiculturelle
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Gestion des Conflits & Médiation en Équipe Multiculturelle',
    hook: "Deux collègues qui ne se parlent plus que par messages secs, une équipe qui se replie en silence : le plus souvent, personne n'a commis de faute — c'est un malentendu de style que chacun interprète à sa façon. Ce module vous apprend à le voir tôt, à le nommer sans accuser, et à le résoudre sans prendre parti.",
  },
  {
    type: 'objectives',
    items: [
      "Identifier précocement un conflit interpersonnel avant qu'il ne s'envenime et n'affecte l'ensemble de l'équipe.",
      "Distinguer un conflit de fond d'un malentendu culturel de communication — et adapter votre réponse en conséquence.",
      "Choisir entre médiation et arbitrage selon la nature réelle du différend et le niveau d'autorité que la situation exige.",
      "Conduire une médiation structurée en équipe multiculturelle sans prendre parti, même implicitement, pour une culture ou un style de communication.",
      "Contribuer activement à construire, au quotidien, une culture d'équipe saine qui prévient une partie des conflits avant qu'ils n'émergent.",
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi les conflits interculturels s'enveniment différemment",
    body: [
      "Un HR Manager habitué à un contexte culturel homogène découvre, en contexte humanitaire multiculturel, que ses réflexes ne suffisent plus. La raison n'est pas que les gens se disputent davantage : c'est que le mécanisme d'escalade change de nature.",
      "Dans une équipe homogène, un conflit part généralement d'un désaccord de fond identifiable : une décision contestée, une répartition de tâches jugée injuste, une rivalité de pouvoir. En équipe multiculturelle, une part importante des tensions démarre dans un malentendu de communication que chaque partie interprète à travers sa propre grille culturelle, sans jamais nommer cette grille.",
    ],
    highlight: "Ce qui s'envenime n'est pas toujours le désaccord initial : c'est souvent la boucle d'interprétation erronée qui se construit autour de lui, chaque partie renforçant sa lecture négative de l'autre à chaque échange.",
  },
  {
    type: 'concept',
    title: 'Direct ou indirect : le même message, deux lectures opposées',
    body: [
      "Un chef d'équipe qui donne une instruction de façon très directe, parce que c'est le registre professionnel normal dans sa culture d'origine, peut être perçu par un collègue venant d'une culture à communication plus indirecte comme cassant, irrespectueux ou même hostile — alors qu'aucune intention hostile n'existait.",
      "À l'inverse, un membre d'équipe qui exprime son désaccord de façon détournée, par politesse culturelle, peut être perçu par un manager habitué à la confrontation directe comme quelqu'un qui cache un problème ou qui manque de transparence.",
    ],
    highlight: "Traiter d'emblée ce type de situation comme « un problème de personnalité » ou « un manque de professionnalisme » rate la cause réelle et risque d'aggraver la situation.",
  },
  {
    type: 'comparison-table',
    title: 'Deux distinctions pratiques pour comprendre un désaccord',
    columns: ['Distinction', 'Un pôle', 'L\'autre pôle'],
    rows: [
      ['Communication directe vs indirecte', 'Expression explicite et frontale du désaccord : « je ne suis pas d\'accord avec cette décision, et voici pourquoi »', 'Expression feutrée, qui préserve la relation et la face de l\'interlocuteur avant le contenu : « peut-être pourrions-nous envisager une autre option »'],
      ['Rapport à la hiérarchie', 'Contredire ouvertement un supérieur en réunion est acceptable, voire attendu comme preuve d\'engagement', 'Cela est perçu comme un manque de respect grave, quel que soit le bien-fondé du désaccord sur le fond'],
    ],
  },
  {
    type: 'warning',
    title: 'Piège classique de terrain : le silence pris pour un accord',
    items: [
      "Un HR Manager international interprète le silence d'un membre d'équipe national en réunion comme une adhésion.",
      "En réalité, il peut s'agir d'un désaccord profond exprimé par le canal culturellement acceptable : le silence, ou une remarque en aparté après la réunion.",
      "Ce silence mal interprété devient ensuite un conflit larvé, découvert bien plus tard sous une forme aggravée : démotivation, rumeurs, départ.",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Médiation vs arbitrage : deux logiques, pas deux synonymes',
    columns: ['', 'Médiation', 'Arbitrage'],
    rows: [
      ['Rôle du HR Manager', 'Reste strictement neutre, ne prend pas position sur le fond, facilite l\'écoute mutuelle et la recherche d\'un accord', 'Écoute les deux parties puis tranche : une décision est rendue et s\'impose aux parties'],
      ['Qui décide de l\'issue', 'Les parties elles-mêmes, avec l\'aide du médiateur pour structurer le dialogue', 'Le HR Manager (ou une autre autorité désignée), qui rend une décision'],
      ['Quand l\'utiliser', 'Conflit interpersonnel, relationnel, souvent alimenté par un malentendu de communication ; les deux parties ont un intérêt commun à continuer à travailler ensemble', 'Décision nécessaire dans un délai court, règle ou politique claire manifestement enfreinte, ou médiation tentée sans accord possible'],
      ['Résultat typique', 'Un accord mutuellement compris, documenté, avec un plan de suivi', 'Une décision, parfois assortie d\'une sanction ou d\'une mesure organisationnelle, non négociable une fois rendue'],
    ],
  },
  {
    type: 'concept',
    title: 'Ne pas basculer trop vite — ni trop tard — en arbitrage',
    body: [
      "Un HR Manager qui bascule trop vite en arbitrage sur un conflit qui aurait pu se résoudre par médiation prive l'équipe d'un accord dont elle est elle-même l'auteure. Un accord imposé de l'extérieur est presque toujours moins durable qu'un accord construit par les parties.",
      "À l'inverse, s'obstiner en médiation sur une situation qui exige clairement une décision (une violation avérée du code de conduite, par exemple) fait perdre un temps précieux et peut être perçu comme une absence de leadership.",
    ],
    highlight: "Médiation et arbitrage ne sont pas deux intensités de la même intervention : ce sont deux logiques fondamentalement différentes, avec des rôles différents pour le HR Manager.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Conflit larvé', definition: "Conflit pas encore ouvertement exprimé mais qui affecte déjà, de façon souterraine, la dynamique d'équipe : baisse de collaboration spontanée, communication réduite au strict minimum, alliances informelles." },
      { term: 'Malentendu culturel de communication', definition: "Divergence d'interprétation d'un même message ou comportement, due à des normes culturelles différentes — à ne jamais confondre avec un désaccord de fond sur le contenu." },
      { term: 'Neutralité du médiateur', definition: "Engagement à ne favoriser aucune des parties, y compris la culture qui lui est la plus familière — facile à énoncer, difficile à tenir sans vigilance active." },
      { term: "Culture d'équipe", definition: "Ensemble des valeurs, rituels et comportements de leadership qui façonnent, au quotidien, la façon dont une équipe gère naturellement le désaccord — un déterminant plus puissant sur la durée que n'importe quelle procédure de médiation ponctuelle." },
    ],
  },
  {
    type: 'concept',
    title: 'Deux outils de base : la grille de signaux faibles et l\'écoute séparée',
    body: [
      "La grille d'identification précoce des conflits d'équipe (grille-identification-precoce-conflits-equipe.xlsx) est un outil de suivi continu, pas un outil d'urgence. Elle sert à documenter les signaux faibles — baisse de collaboration, tension observée en réunion, plainte informelle rapportée par un Base Manager — pour intervenir quand une médiation légère suffit encore. Elle se tient sous Excel ou Google Sheets, mise à jour au fil de l'eau.",
      "Les entretiens individuels séparés sont l'outil central de toute médiation bien conduite : ce n'est pas une formalité avant la « vraie » discussion, mais le moment où chaque partie expose sa version sans la pression de la présence de l'autre.",
    ],
    highlight: "Trop de HR Managers ne s'intéressent à un conflit qu'une fois qu'il éclate publiquement.",
  },
  {
    type: 'process',
    title: 'Conduire une médiation structurée en 5 étapes',
    steps: [
      { title: 'Écoute individuelle séparée de chaque partie', body: "Cadre confidentiel, sans l'autre partie. Laissez chacune raconter sans l'interrompre, et demandez : « quand cela s'est produit, comment avez-vous compris l'intention de l'autre personne ? » Notez les faits et émotions dans les « Notes de pré-médiation » de protocole-mediation-conflit-equipe-multiculturelle.docx, une section distincte par partie." },
      { title: 'Cadrage des règles de dialogue', body: "Communiquez séparément à chacune les règles de la session conjointe : parler à tour de rôle, s'adresser aux faits et comportements plutôt qu'aux intentions supposées, accepter le médiateur comme facilitateur neutre. Ces règles doivent être acceptées explicitement par les deux parties." },
      { title: 'Session conjointe structurée', body: "Rappelez les règles et l'objectif : un accord de fonctionnement, pas déterminer qui a « raison ». Reformulez systématiquement ce que vous entendez avant de passer la parole, et nommez sans jugement la dimension culturelle si elle est réellement en jeu." },
      { title: "Recherche d'un accord concret", body: "Engagements concrets et vérifiables, pas d'intentions vagues : que fera chaque partie différemment, dans quelles situations, et comment l'autre le saura-t-elle ? Consignez l'accord dans le template, avec signature ou accord explicite des deux parties." },
      { title: 'Suivi documenté', body: "Fixez un point de suivi deux à quatre semaines plus tard. Consignez-en le résultat dans le template et reportez l'information dans la grille xlsx pour clore ou maintenir le dossier sous observation." },
    ],
  },
  {
    type: 'concept',
    title: 'Le médiateur n\'est jamais culturellement neutre par défaut',
    body: [
      "Un médiateur appartient lui-même à une culture, avec ses propres réflexes de communication, et penche naturellement, sans en avoir conscience, vers l'interprétation la plus proche de ses propres normes. Un HR Manager qui partage le style direct d'une des parties peut la trouver « plus claire » ou « plus honnête » — alors qu'il ne fait que reconnaître son propre style.",
      "La parade n'est pas de prétendre à une neutralité parfaite, mais de la rendre vérifiable : reformuler à voix haute et de façon strictement équivalente les propos des deux parties, demander à la partie la moins favorisée par votre style si elle se sent entendue de la même façon, et, en cas de doute persistant, faire coconduire ou superviser la médiation par un collègue d'une autre origine culturelle.",
    ],
    highlight: "Une neutralité parfaite est impossible à atteindre : rendez-la vérifiable.",
  },
  {
    type: 'case-study',
    title: 'Cas pratique — « Tension chef d\'équipe expatrié / équipe nationale, base de Goma, RDC »',
    scenario: "Vous êtes HR Manager d'une ONG internationale à Goma, dans une réponse à un déplacement de population lié aux tensions dans le Nord-Kivu. Le chef d'équipe logistique, expatrié en poste depuis quatre mois, vous sollicite un vendredi en fin de journée : « je ne comprends pas ce qui se passe avec mon équipe, ils ne me disent jamais s'ils ne sont pas d'accord avec une décision, et là je découvre par le Base Manager qu'il y a une vraie grogne depuis des semaines. » (Contexte fictif, inspiré de situations réelles.)",
    steps: [
      "Le chef d'équipe donne ses instructions de façon très directe et factuelle, un style qu'il juge clair et efficace, hérité de son expérience professionnelle européenne.",
      "Plusieurs membres de l'équipe nationale perçoivent ce style comme cassant et irrespectueux, surtout quand il corrige une erreur devant les autres en réunion.",
      "Aucun membre n'a exprimé son désaccord ouvertement : le contredire en public n'est pas acceptable dans le registre professionnel de la majorité de l'équipe.",
      "La tension passe par des canaux détournés : baisse de l'initiative spontanée, remarques informelles rapportées au Base Manager, échanges réduits au strict opérationnel.",
      "Le chef d'équipe interprète ce retrait comme un manque d'engagement, pas comme un signal qu'il aurait lui-même déclenché. Aucune faute au sens du code de conduite : c'est un malentendu culturel de communication, et vous devez médier sans jamais sembler prendre le parti de « votre » culture ni de celle du chef qui vous a saisi en premier.",
    ],
  },
  {
    type: 'exercise',
    title: 'Grille de signaux et protocole de médiation',
    instructions: "1. Complétez rétrospectivement grille-identification-precoce-conflits-equipe.xlsx pour cette base : au moins 3 indicateurs de tension distincts observés avant votre intervention (baisse d'initiative, remarques rapportées au Base Manager, réduction des échanges informels), avec date estimée et niveau de sévérité, et observez le déclenchement du signal d'escalade automatique. 2. Conduisez la médiation avec protocole-mediation-conflit-equipe-multiculturelle.docx : notes de pré-médiation réellement distinctes pour le chef d'équipe et pour l'équipe nationale, au moins 3 règles de dialogue concrètes, et un accord qui nomme explicitement la dimension culturelle sans jamais désigner l'une des parties comme fautive.",
    deliverable: 'Les deux fichiers complétés, avec un accord de médiation tenant sur les emplacements prévus du template et une date de suivi fixée à moins de 4 semaines.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Intervenir trop tard, quand le conflit couve depuis des semaines : une grille tenue à jour, pas seulement consultée en réaction à une crise, fait la différence.",
      "Le médiateur qui prend involontairement parti pour la culture qui lui est la plus familière, et juge l'autre équipe « trop passive » alors qu'elle applique son registre professionnel légitime.",
      "Traiter un conflit interculturel comme un simple désaccord professionnel, sans jamais nommer la dimension culturelle réelle.",
      "Sauter l'écoute individuelle séparée pour « gagner du temps » : la partie la plus réservée se contentera de confirmer poliment un accord de façade.",
      "Considérer une médiation ponctuelle réussie comme un problème définitivement clos : sans travail continu sur la culture d'équipe, la même dynamique réapparaîtra avec d'autres personnes.",
    ],
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi un conflit interculturel s'envenime souvent par une boucle d'interprétation erronée plutôt que par un désaccord de fond.",
      "Je sais distinguer un style de communication directe d'un style indirect, et anticiper les malentendus les plus fréquents entre les deux.",
      "Je sais choisir entre médiation et arbitrage selon la nature réelle de la situation, et justifier ce choix.",
      "Je sais conduire les 5 étapes d'une médiation structurée, dans l'ordre, sans sauter l'écoute individuelle séparée.",
      "Je sais nommer explicitement une dimension culturelle dans un conflit sans désigner l'une des parties comme fautive.",
      "J'ai complété une grille d'identification précoce et interprété correctement son signal d'escalade, puis conduit une médiation complète jusqu'à un accord documenté et une date de suivi.",
      "Je sais identifier, dans ma propre pratique de médiateur, le risque de favoriser inconsciemment la culture qui m'est la plus familière.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Fin de la formation — la validation de ce dernier exercice, comme celle des modules précédents, ouvre droit à votre attestation de fin de formation BK-BOOST Ltd.",
  },
]
