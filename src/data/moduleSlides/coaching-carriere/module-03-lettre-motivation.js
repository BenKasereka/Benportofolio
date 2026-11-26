// Module 03 — Lettre de Motivation Percutante
// Référence pas à pas : chaque procédure du module (diagnostic d'une lettre
// générique, recherche ciblée et grille de personnalisation, préparation du
// gabarit Word, Hook, paragraphe Valeur, Call-to-Action, relecture et checklist
// de complétude, adaptation à chaque candidature) est détaillée étape par étape
// et appliquée à un cas fil rouge unique (Joël Kabeya, fictif, repris du module
// 01), à partir du contenu source (01-theorie.md, 02-outils.md, 03-exercices.md)
// et des templates du dossier 04-templates.
export default [
  // ─────────────────────────────── OUVERTURE ───────────────────────────────
  {
    type: 'cover',
    title: 'Lettre de Motivation Percutante',
    hook: "À la fin de ce module, vous aurez en main une lettre de motivation d'une page en 3 paragraphes (Hook, Valeur, Call-to-Action), construite sur 2 à 3 faits réels de l'organisation visée, une grille de personnalisation complétée et une checklist cochée à 10 sur 10 — plus une méthode de 45 minutes pour recommencer à chaque candidature sans jamais envoyer deux fois la même lettre.",
  },
  {
    type: 'objectives',
    items: [
      "Diagnostiquer une lettre existante en repérant ses formules génériques (ouverture passive, organisation sans nom, adjectifs sans preuve, répétition du CV, clôture passive), en produisant un tableau de diagnostic et un score sur la checklist de complétude.",
      "Mener une recherche ciblée de 15 minutes sur une organisation (site institutionnel, rapport annuel, LinkedIn) et la consigner dans la grille de personnalisation Excel, en produisant une ligne complète avec 2 à 3 faits concrets, sourcés et datés.",
      "Préparer le gabarit Word de la lettre, en produisant un en-tête complet, un objet qui reprend l'intitulé exact de l'annonce et une salutation nominative quand c'est possible.",
      "Écrire un Hook de 1 à 2 phrases appuyé sur un fait de la grille, en produisant un paragraphe qui réussit le test du changement de destinataire.",
      "Rédiger un paragraphe Valeur qui relie UNE réalisation chiffrée de votre parcours à UNE exigence précise de l'annonce, sans recopier votre CV, et un Call-to-Action actif sans formule d'attente passive.",
      "Relire à voix haute, cocher la checklist de complétude à 10 sur 10 et exporter une lettre d'une page en PDF, prête à être envoyée avec une ligne de journal de candidature.",
      "Adapter votre lettre à une deuxième organisation en refaisant la recherche, le Hook et le lien avec l'annonce, en produisant une seconde lettre qui ne ressemble pas à la première.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Vous ne repartez pas avec des conseils d'écriture : vous repartez avec 8 livrables, produits dans cet ordre, que vous réutiliserez à chaque candidature de votre recherche d'emploi.",
      "Cas fil rouge — Joël Kabeya (module 01), Superviseur MEAL à Goma, 7 ans d'expérience. Son diagnostic a montré 31 candidatures envoyées avec la même lettre pour 1 seul entretien. Son CV est réécrit (module 02). Le lundi 14 décembre 2026, son alerte ReliefWeb signale une offre qui correspond exactement à sa phrase de profil de poste idéal : Responsable MEAL chez Mwangaza Santé International (organisation fictive), à Bukavu. Clôture : vendredi 18 décembre 2026. Il décide d'écrire, pour la première fois, une lettre qui n'existe que pour cette offre.",
    ],
    bullets: [
      "Livrable 1 — Diagnostic chiffré d'une lettre générique, avec son score sur 10 (Procédure 1).",
      "Livrable 2 — Une ligne complète de la grille de personnalisation : 2 à 3 faits, emplacement prévu, source et date (Procédure 2).",
      "Livrable 3 — Gabarit Word préparé : en-tête, objet, salutation (Procédure 3).",
      "Livrable 4 — Paragraphe 1, le Hook (Procédure 4).",
      "Livrable 5 — Paragraphe 2, la Valeur ajoutée (Procédure 5).",
      "Livrable 6 — Paragraphe 3, le Call-to-Action, et la clôture (Procédure 6).",
      "Livrable 7 — Lettre complète d'une page, checklist à 10/10, PDF prêt à envoyer (Procédure 7).",
      "Livrable 8 — Seconde lettre adaptée à une autre organisation (Procédure 8).",
    ],
    table: {
      columns: ["Élément de l'annonce", 'Contenu (organisation fictive)'],
      rows: [
        ['Organisation', 'Mwangaza Santé International — ONG internationale de santé et de nutrition'],
        ['Poste (intitulé exact)', 'Responsable MEAL (MEAL Manager)'],
        ['Lieu et contrat', 'Bukavu, Sud-Kivu (RDC) — 12 mois renouvelables'],
        ['Référence et clôture', 'MWA-RDC-2026-047 — vendredi 18 décembre 2026'],
        ['Exigences clés', "5 ans d'expérience dont 2 en encadrement ; garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé ; déployer le mécanisme de redevabilité communautaire ; produire les rapports aux bailleurs"],
        ['Langues', 'Français courant exigé ; anglais professionnel apprécié'],
      ],
    },
    tip: "MEAL = Monitoring, Evaluation, Accountability and Learning (suivi, évaluation, redevabilité et apprentissage). Si vous visez un autre métier, remplacez simplement les exemples de Joël par les vôtres : la méthode ne change pas.",
  },

  // ─────────────────────────── THÉORIE ESSENTIELLE ──────────────────────────
  {
    type: 'stat-callout',
    stat: '80 à 300+',
    caption: "Le nombre de candidatures qu'un recruteur peut recevoir pour une seule offre dans une ONG internationale.",
    context: "Il ne les lit pas en entier : il les trie, dès la première phrase. Votre lettre n'a donc pas pour mission de tout dire, mais de faire lire la suite.",
  },
  {
    type: 'concept',
    title: 'Pourquoi une lettre générique se voit en 10 secondes',
    body: [
      "Un recruteur d'ONG internationale ne lit pas des centaines de lettres en entier : il les trie, et le tri commence par la première phrase. Une lettre qui pourrait être envoyée telle quelle à dix organisations différentes se reconnaît immédiatement : elle ne cite aucun nom, aucun projet, aucune mission précise. Elle parle de « votre organisation » là où elle pourrait dire « le programme nutrition d'urgence que vous conduisez actuellement ».",
      "Dans ces 10 premières secondes, il ne cherche pas à savoir si vous êtes qualifié : le CV y répond déjà. Il cherche un signal que vous avez compris CE poste précis et que vous n'arrosez pas large. Une lettre interchangeable envoie le signal inverse : « je postule à tout ce qui passe ». Même un excellent profil se fait éliminer sur ce seul indice.",
    ],
    example: {
      title: 'Ce que le recruteur retient de la lettre de Joël, envoyée 31 fois',
      lines: [
        "Seule ligne qui changeait d'une candidature à l'autre : l'intitulé du poste. Le reste était identique, mot pour mot.",
        "Après 10 secondes, le recruteur sait que Joël vise un poste MEAL — il le savait déjà, l'objet du message le dit.",
        "Il ne sait ni pourquoi ce poste, ni pourquoi cette organisation, ni ce que Joël apporte de concret : pas un nom, pas un chiffre, pas un projet.",
        'Verdict probable : tri « non », avant même d\'ouvrir le CV réécrit.',
      ],
    },
    highlight: "La lettre de motivation n'est pas un résumé du CV mis en phrases : le CV dit ce que vous avez fait, la lettre dit pourquoi CE poste, dans CETTE organisation, maintenant — et ce que vous y apportez concrètement.",
  },
  {
    type: 'comparison-table',
    title: 'CV et lettre : deux documents, deux fonctions',
    columns: ['Question du recruteur', 'Le CV répond', 'La lettre répond'],
    rows: [
      ['Est-il qualifié ?', 'Oui : réalisations chiffrées, dates, diplômes', 'Elle ne le redit pas : recopier une ligne du CV n\'ajoute aucune information'],
      ['Pourquoi ce poste ?', 'Il ne le dit pas', 'Un fait précis sur le poste et le programme visés'],
      ['Pourquoi cette organisation, maintenant ?', 'Il ne le dit pas', 'Un fait récent et vérifiable : projet lancé, rapport publié, extension'],
      ['Que m\'apporte-t-il concrètement ?', 'Une liste de réalisations', 'UNE réalisation reliée à UNE exigence précise de l\'annonce'],
      ['Quelle suite ?', 'Aucune', 'Une invitation explicite à échanger'],
      ['Format', 'Normes ATS vues au module 02', 'Une page maximum, 3 paragraphes'],
    ],
  },
  {
    type: 'concept',
    title: "L'anatomie d'une lettre d'une page",
    body: "Le gabarit Word fourni avec ce module impose la même ossature à chaque lettre : un en-tête, un objet, une salutation, trois paragraphes et une formule de politesse. Les longueurs ci-dessous sont des repères de terrain pour tenir sur une page ; la règle ferme, elle, est la page unique.",
    table: {
      columns: ['Bloc du gabarit', 'Contenu', 'Repère de longueur'],
      rows: [
        ['En-tête', 'Vos coordonnées, destinataire et organisation, ville et date', '4 à 8 lignes'],
        ['Objet', "Candidature au poste de [intitulé copié de l'annonce] — [référence]", '1 ligne'],
        ['Salutation', 'Nom du destinataire si connu, sinon « Madame, Monsieur »', '1 ligne'],
        ['Paragraphe 1 — Hook', 'Un fait récent de l\'organisation relié à vous', '1 à 2 phrases, 30 à 50 mots'],
        ['Paragraphe 2 — Valeur', 'Une réalisation chiffrée reliée à une exigence du poste', '80 à 120 mots'],
        ['Paragraphe 3 — Call-to-Action', "Invitation active à l'étape suivante", '1 phrase, 25 à 45 mots'],
        ['Politesse et signature', 'Formule alignée sur la salutation, prénom et nom', '2 lignes'],
      ],
    },
    tip: "Soit 150 à 220 mots de corps de lettre. Au-delà, la page déborde ou, plus souvent, la lettre recopie le CV : un paragraphe qui peut être remplacé par une ligne déjà présente sur le CV ne sert à rien.",
  },
  {
    type: 'concept',
    title: 'La logique du Hook : capter l\'attention dès la première phrase',
    body: [
      "Le Hook est la première phrase de votre lettre. Sa seule fonction : donner envie de lire la deuxième. Ce n'est ni un résumé de votre parcours, ni une déclaration d'intérêt générale : c'est un élément concret et spécifique qui prouve, dès la première ligne, que vous connaissez l'organisation et le poste.",
      "Ce qu'un Hook n'est jamais : « Je vous écris pour postuler au poste de [intitulé]. » Le recruteur a l'intitulé sous les yeux, c'est lui qui l'a publié : la phrase n'apporte aucune information et annonce une suite du même niveau. Un bon Hook ancre la lettre dans un fait réel et récent — un projet lancé, une prise de position, un résultat communiqué, une évolution de mandat — et le relie à votre expérience directe.",
    ],
    example: {
      title: 'Même poste, deux ouvertures',
      lines: [
        'Générique : « Suite à votre annonce parue sur ReliefWeb, je me permets de vous adresser ma candidature au poste de Responsable MEAL. »',
        "Spécifique : « En passant de 38 à 43 zones de santé au Sud-Kivu et au Maniema d'ici juin 2027, Mwangaza Santé International doit faire tenir un même système de suivi sur cinq nouvelles zones : c'est le défi que je relève à Goma depuis mars 2024. »",
      ],
    },
    highlight: "Le test le plus simple : le Hook pourrait-il être copié-collé dans une lettre adressée à une autre organisation ? S'il survit au changement de destinataire, il est trop générique.",
  },
  {
    type: 'concept',
    title: 'Trois façons de construire un bon Hook',
    body: "Toutes sont valables, aucune n'est « la meilleure » : le choix dépend de ce que vous avez trouvé pendant la recherche. Dans les trois cas, le Hook ne peut pas être copié dans la lettre d'une autre organisation.",
    table: {
      columns: ['Construction', 'Principe', 'Exemple pour Joël (Mwangaza)'],
      rows: [
        ["Le fait d'actualité", "Une nouvelle initiative, un rapport publié, une expansion géographique, mentionnée avec précision", "L'extension du programme de 38 à 43 zones de santé d'ici juin 2027"],
        ["La connexion d'expérience directe", "Un lien concret entre une situation que vous avez vécue et la mission spécifique du poste", "La suspension d'une enquête à 9 % de doublons, reliée à la fiabilité des données que le poste doit garantir"],
        ['La mission incarnée', "Reformuler la mission de l'organisation, non pas en la citant depuis son site, mais en montrant que vous comprenez son application sur le terrain", "112 000 enfants dépistés, c'est 112 000 fiches à fiabiliser avant toute décision de prise en charge"],
      ],
    },
    tip: "En cas de doute, choisissez le fait d'actualité : daté et vérifiable, c'est le plus facile à prouver et le plus difficile à copier.",
  },
  {
    type: 'concept',
    title: 'Le paragraphe Valeur : une réalisation, une exigence, un lien',
    body: [
      "Le paragraphe Valeur est le cœur de la lettre : ce que vous apportez concrètement à CE poste, illustré par UNE réalisation précise — jamais une liste de qualités abstraites. Une seule réalisation concrète convainc plus que cinq adjectifs, parce qu'un adjectif est une affirmation et qu'une réalisation est une preuve.",
      "La formule qui fonctionne : « Chez [organisation ou mission précédente], j'ai [action concrète avec résultat mesurable] — une expérience directement transférable à [exigence précise du poste, citée depuis l'annonce]. » Le lien explicite, avec l'exigence citée mot pour mot, est ce qui distingue la lettre du CV.",
    ],
    example: {
      title: 'Adjectifs contre preuve',
      lines: [
        "Sans preuve : « Rigoureux et réactif, je suis très attaché à la qualité des données. »",
        "Avec preuve : « En mai 2025, j'ai suspendu une enquête nutritionnelle à 9 % de doublons et évité l'envoi de données erronées au bailleur. »",
      ],
    },
    pitfall: "Reformuler une ligne du CV sans rien ajouter. Le paragraphe doit apporter ce que le CV ne dit pas : le lien avec l'exigence de l'annonce, la manière dont vous avez procédé, ce que vous en avez retenu.",
  },
  {
    type: 'comparison-table',
    title: 'Call-to-Action : la clôture passive contre la clôture active',
    columns: ['Formule passive (ferme la lettre)', 'Formule active (propulse vers la suite)'],
    rows: [
      ["« Dans l'attente d'une réponse de votre part… »", "« Je serais heureux d'échanger avec vous sur la façon dont mon expérience en [domaine précis] peut contribuer à [objectif précis cité au Hook]. »"],
      ['« Je reste à votre disposition pour tout renseignement complémentaire. »', "« Je serais heureuse de vous présenter, lors d'un échange, comment [réalisation] s'appliquerait à [enjeu du poste]. »"],
      ["« En espérant que ma candidature retiendra votre attention… »", "« Un échange de 20 minutes me permettrait de détailler [méthode ou résultat] et de répondre à vos questions sur [exigence]. »"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les formules génériques qui condamnent une lettre, et leur remplaçant',
    columns: ['Formule générique', 'Pourquoi elle condamne la lettre', 'Ce qui la remplace'],
    rows: [
      ['« Je vous écris pour postuler… » / « Suite à votre annonce… »', "Redit une information que le recruteur possède déjà", 'Un fait récent et précis sur l\'organisation'],
      ['« Votre organisation », « votre structure »', "Prouve que la lettre pourrait partir ailleurs", "Le nom de l'organisation, du programme ou de la zone"],
      ['« Rigoureux, motivé, dynamique, passionné »', 'Affirmations sans preuve', 'UNE réalisation chiffrée'],
      ['« Mon CV ci-joint détaille mon parcours »', "La lettre n'ajoute rien au CV", "Le lien entre une réalisation et une exigence du poste"],
      ["« Dans l'attente d'une réponse de votre part… »", 'Ferme la lettre au lieu de la propulser', "Une invitation active à échanger"],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Hook', definition: "La phrase ou les deux premières phrases d'ouverture, dont la seule fonction est de capter l'attention par un élément spécifique et vérifiable." },
      { term: 'Paragraphe Valeur', definition: "Le cœur de la lettre : ce que vous apportez concrètement à CE poste, illustré par une réalisation précise, jamais une liste de qualités abstraites." },
      { term: 'Call-to-Action (CTA)', definition: "La clôture qui invite explicitement à l'étape suivante (entretien, échange), sans formule d'attente passive." },
      { term: 'Personnalisation', definition: "L'ensemble des éléments de la lettre qui ne pourraient pas être réutilisés tels quels pour une autre candidature — le seul vrai indicateur, au-delà du simple remplacement du nom de l'organisation." },
      { term: 'Fait concret', definition: "Une information vérifiable et datée sur l'organisation (mission précise, projet nommé, chiffre, valeur illustrée par une action), par opposition à une généralité que vous pourriez écrire sans rien avoir lu." },
      { term: 'Test du changement de destinataire', definition: "Vérification qui consiste à imaginer la phrase envoyée à une autre organisation du même secteur : si elle reste vraie, elle est trop générique." },
      { term: 'Checklist de complétude', definition: "Les 10 items du second onglet du template Excel, à cocher avant l'envoi de chaque lettre : une seule case non cochée, et la lettre n'est pas prête." },
    ],
  },
  {
    type: 'concept',
    title: 'Où trouver la matière : 4 sources et leur budget temps',
    body: "Beaucoup de candidats ne consultent que la page de l'offre : ils passent à côté de l'essentiel de la matière personnalisable, disponible gratuitement. La recherche ciblée tient en 15 minutes si chaque source a son budget.",
    table: {
      columns: ['Source', 'Ce que vous y prenez', 'Budget'],
      rows: [
        ["L'annonce complète", "Intitulé exact, référence, exigences à citer, enjeu du poste, nom du destinataire s'il y est", '3 min'],
        ['Site institutionnel : « À propos », « Actualités », « Nos projets »', "Langage exact de la mission ; projets récents, extensions, publications", '5 min'],
        ['Rapports annuels et rapports pays (PDF)', "Un chiffre précis par pays ou zone d'intervention, avec sa page", '3 min'],
        ["LinkedIn de l'organisation et du responsable", "Ton réel de communication ; nom du responsable du recrutement ou du poste hiérarchique", '2 min'],
      ],
    },
    tip: "Le template Excel vous empêche d'écrire une seule ligne de lettre avant d'avoir des faits concrets à y placer. Si vous n'avez pas 2 faits au bout de 15 minutes, c'est peut-être un signe que cette organisation ne mérite pas votre candidature.",
  },
  {
    type: 'concept',
    title: 'La méthode : 8 procédures, dans cet ordre',
    body: "Chaque procédure produit l'entrée de la suivante. Une fois la méthode maîtrisée, comptez 45 minutes par lettre ; la première fois, prévoyez environ 1 h 15. Ne sautez pas la recherche : écrire le Hook avant d'avoir des faits, c'est écrire une formule.",
    table: {
      columns: ['Procédure', 'Entrée', 'Livrable produit', 'Durée type'],
      rows: [
        ['1. Diagnostiquer une lettre générique', 'Votre lettre habituelle', 'Diagnostic surligné, score sur 10', '20 min (une fois)'],
        ['2. Recherche ciblée et grille', "Annonce, site, rapport, LinkedIn", 'Une ligne de grille complète', '15 à 17 min'],
        ['3. Préparer le gabarit Word', 'Grille, annonce', 'En-tête, objet, salutation', '3 min'],
        ['4. Écrire le Hook', 'Colonne E de la grille', 'Paragraphe 1', '5 min'],
        ['5. Écrire le paragraphe Valeur', 'Colonne F, réalisations du CV', 'Paragraphe 2', '10 à 15 min'],
        ['6. Écrire le Call-to-Action', 'Hook et Valeur', 'Paragraphe 3 et clôture', '2 min'],
        ['7. Relire, vérifier, envoyer', 'Lettre complète', 'PDF, checklist à 10/10, journal', '5 à 8 min'],
        ['8. Adapter pour la candidature suivante', 'Lettre n° 1', 'Lettre n° 2 sans duplication', '45 min'],
      ],
    },
    tip: "Joël a réservé le lundi 14 décembre à 19 h pour la recherche et la rédaction, puis le mardi 15 à 7 h 30 pour la relecture à voix haute : un œil frais repère ce que la fatigue du soir laisse passer.",
  },
  {
    type: 'case-study',
    title: "Cas vécu — « D'une lettre fade à une lettre qui décroche un entretien »",
    scenario: "Amina postule au poste de Coordinateur/trice Logistique publié par Eau Sahel Solidaire (organisation fictive) pour sa mission au Niger. L'annonce mentionne la gestion d'un programme d'urgence eau-assainissement dans la région de Diffa, et la page Actualités du site indique que l'organisation vient d'étendre ce programme à 3 nouveaux sites après un afflux de personnes déplacées. Amina a 4 ans d'expérience en logistique humanitaire, dont 18 mois au Tchad sur un programme similaire. Elle écrit sa lettre en 10 minutes, la veille de la date limite.",
    steps: [
      { title: 'La lettre telle qu\'elle est partie', body: "« Madame, Monsieur, Je vous écris pour postuler au poste de Coordinateur Logistique au sein de votre organisation. Je suis très intéressé par votre organisation et je pense que mon profil correspond au poste. J'ai 4 ans d'expérience en logistique humanitaire et j'ai travaillé sur plusieurs missions. Je suis rigoureux, autonome et je m'adapte facilement à des environnements difficiles. Vous trouverez ci-joint mon CV pour plus de détails sur mon parcours. Dans l'attente d'une réponse de votre part, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. »" },
      { title: 'Le diagnostic', body: "Cette lettre pourrait être envoyée telle quelle à n'importe quelle ONG, pour n'importe quel poste logistique : elle ne cite ni l'organisation, ni le Niger, ni Diffa, ni le programme, ni l'extension à 3 nouveaux sites — alors que ces éléments sont publics et directement exploitables." },
      { title: 'La correction', body: "Un Hook appuyé sur l'extension à 3 nouveaux sites ; un paragraphe Valeur qui relie les 18 mois tchadiens à l'enjeu du poste ; un Call-to-Action sans formule d'attente passive. Aucune nouvelle expérience n'est nécessaire." },
    ],
    result: "Vous ferez ce travail pour Amina dans l'exercice noté. Joël, notre fil rouge, présente exactement le même symptôme : suivons-le procédure par procédure.",
  },

  // ──────── PROCÉDURE 1 — DIAGNOSTIQUER UNE LETTRE GÉNÉRIQUE (3 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 3',
    title: 'Relire votre lettre comme un recruteur et surligner les formules génériques',
    intro: "Pourquoi : on ne corrige que ce qu'on voit. Avant d'écrire une nouvelle lettre, repérez ce qui condamnait l'ancienne. Entrée : la lettre que vous envoyez d'habitude (ici, celle de Joël, envoyée 31 fois). Durée : environ 10 minutes.",
    steps: [
      {
        title: 'Lire en mode « tri »',
        actions: [
          'Affichez votre lettre en plein écran ou imprimez-la.',
          "Lancez un minuteur de 10 secondes et lisez uniquement la première phrase de chaque paragraphe, comme un recruteur qui a 200 lettres à trier.",
          "Écrivez en une ligne ce que vous avez retenu : quelle organisation ? quel projet ? quel chiffre ? Si la réponse est « rien », le diagnostic est déjà posé.",
        ],
      },
      {
        title: 'Surligner les cinq familles de formules',
        actions: [
          "Jaune : toute ouverture passive (« Je vous écris pour postuler… », « Suite à votre annonce… », « Je me permets de… »).",
          "Orange : « votre organisation », « votre structure », « vos valeurs » — tout ce qui désigne l'organisation sans la nommer ni citer un projet.",
          "Rose : les adjectifs sans preuve (rigoureux, dynamique, motivé, passionné).",
          "Bleu : toute phrase qui reprend le CV, ou qui renvoie vers lui (« mon CV ci-joint détaille… »).",
          "Vert : la clôture passive (« Dans l'attente d'une réponse de votre part… »).",
        ],
      },
      {
        title: 'Compter les familles présentes',
        actions: [
          'Comptez combien des 5 familles apparaissent.',
          "Repère : 3 familles ou plus = lettre générique ; elle ne se corrige pas formule par formule, elle se réécrit.",
        ],
      },
    ],
    example: {
      title: 'Lettre type de Joël, annotée (A = ouverture passive ; B = organisation sans nom ; C = adjectifs et répétition du CV ; D = renvoi au CV ; E = clôture passive)',
      lines: [
        'Madame, Monsieur,',
        '[A] Suite à votre annonce parue sur ReliefWeb, je me permets de vous adresser ma candidature au poste de Responsable MEAL.',
        "[B] Passionné par l'humanitaire depuis toujours, je suis très motivé à l'idée de rejoindre votre organisation, dont je partage pleinement les valeurs.",
        "[C] Dynamique, rigoureux et doté d'un excellent esprit d'équipe, j'ai acquis sept ans d'expérience en suivi-évaluation sur de nombreux programmes de santé, d'eau et de sécurité alimentaire.",
        '[D] Mon CV ci-joint détaille mon parcours.',
        "[E] Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
        'Bilan : les 5 familles sont présentes. Ce que retient le recruteur en 10 secondes : « un candidat MEAL, sans nom, sans chiffre, sans projet ».',
      ],
    },
    result: "Votre lettre est surlignée en cinq couleurs et vous savez combien de familles elle cumule. Joël en trouve 5 sur 5.",
    pitfall: "Corriger formule par formule en gardant la même structure : remplacer « Suite à votre annonce » par « À la suite de la publication de votre offre » ne change rien, l'ouverture reste passive.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 3',
    title: 'Appliquer le test du changement de destinataire phrase par phrase',
    intro: "Pourquoi : c'est le test le plus simple et le plus fiable pour mesurer la personnalisation d'une lettre. Il remplace l'impression (« ma lettre est plutôt bien ») par un constat. Entrée : la lettre surlignée de l'étape précédente.",
    steps: [
      {
        title: 'Préparer le test',
        actions: [
          'Choisissez mentalement une autre organisation du même secteur (pour Joël : une autre ONG de santé-nutrition en RDC).',
          "Numérotez les phrases de la lettre, hors salutation et politesse.",
        ],
      },
      {
        title: 'Tester chaque phrase',
        actions: [
          "Relisez la phrase en imaginant la lettre adressée à cette autre organisation.",
          "Posez deux questions : la phrase reste-t-elle vraie ? contient-elle un nom, un projet, un chiffre ou une date propres à l'organisation visée ?",
          "Si elle reste vraie et ne contient rien de propre à l'organisation : elle « survit » et elle est donc générique.",
        ],
      },
      {
        title: 'Noter le résultat',
        actions: ['Comptez les phrases qui survivent et les phrases personnalisées, dans un petit tableau à trois colonnes.'],
      },
    ],
    table: {
      columns: ['Phrase de la lettre de Joël (abrégée)', 'Survit au changement de destinataire ?', 'Verdict'],
      rows: [
        ['« Suite à votre annonce parue sur ReliefWeb… »', 'Oui : vraie pour toute offre publiée sur ReliefWeb', 'Générique'],
        ['« Passionné par l\'humanitaire… votre organisation, dont je partage les valeurs »', 'Oui : aucune organisation citée', 'Générique'],
        ['« Dynamique, rigoureux… sept ans d\'expérience… »', 'Oui : adjectifs et durée sans lien avec le poste', 'Générique'],
        ['« Mon CV ci-joint détaille mon parcours. »', 'Oui : vraie pour toute candidature', 'Générique'],
        ["« Dans l'attente de votre réponse… »", 'Oui : formule universelle', 'Générique'],
      ],
    },
    result: "Joël obtient « 5 phrases sur 5 survivent, 0 phrase personnalisée ». Ce chiffre explique mieux le silence des recruteurs que n'importe quelle hypothèse sur son expérience.",
    tip: "Faites aussi le test sur une lettre « personnalisée » que vous croyez bonne : si la seule différence avec la précédente est le nom de l'organisation en tête de page, le test la classe générique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 3',
    title: 'Chiffrer le diagnostic avec la checklist de complétude',
    intro: "Pourquoi : le second onglet du template Excel, « Checklist complétude », donne un score sur 10 que vous réutiliserez avant chaque envoi. Le calculer sur l'ancienne lettre fixe votre point de départ. Entrée : l'ancienne lettre, supposée envoyée telle quelle à Mwangaza.",
    steps: [
      {
        title: 'Préparer une copie de diagnostic',
        actions: [
          "Ouvrez grille-personnalisation-lettre-par-organisation.xlsx (dossier 04-templates).",
          "Enregistrez-le sous « DIAGNOSTIC_ancienne-lettre.xlsx » : ce fichier ne servira qu'à cet exercice.",
          "Cliquez sur l'onglet « Checklist complétude » (second onglet).",
        ],
      },
      {
        title: 'Répondre aux 10 items',
        actions: [
          'Dans la colonne B, lignes 5 à 14, cliquez sur la cellule, puis sur la flèche de la liste déroulante, et choisissez Oui ou Non. Toutes les cellules démarrent à « Non ».',
          "Répondez « Oui » seulement si vous pouvez le prouver sur la lettre, pas si vous « pensez que oui ».",
          'Utilisez la colonne C (commentaire) pour noter la raison de chaque « Non ».',
        ],
      },
      {
        title: 'Lire le score',
        actions: [
          'B16 affiche le nombre de « Oui » sous la forme « 1/10 » ; C16 affiche le pourcentage.',
          "La ligne 18 rappelle la règle : objectif 10/10 avant envoi ; en dessous de 8/10, reprenez la lettre avec le gabarit Word.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Item (abrégé)', 'Réponse', 'Pourquoi'],
      rows: [
        ['5', "Nom de l'organisation orthographié et vérifié", 'Non', "L'organisation n'est jamais nommée"],
        ['6', "Intitulé du poste repris exactement comme dans l'annonce", 'Non', '« Responsable MEAL » au lieu de « Responsable MEAL (MEAL Manager) »'],
        ['7', "Le Hook s'appuie sur un fait spécifique", 'Non', "L'ouverture est une formule passive"],
        ['8', 'Le paragraphe Valeur relie une réalisation chiffrée à une exigence du poste', 'Non', 'Aucune réalisation, aucun chiffre'],
        ['9', 'Aucune formule générique copiée-collée', 'Non', '« Suite à votre annonce… », « Dans l\'attente… »'],
        ['10', 'Nom du destinataire vérifié quand c\'est possible', 'Non', '« Madame, Monsieur » par défaut'],
        ['11', 'Aucun paragraphe ne reformule une ligne du CV', 'Non', 'Années et domaines répétés, renvoi au CV'],
        ['12', 'Call-to-Action actif', 'Non', 'Clôture d\'attente passive'],
        ['13', 'La lettre tient sur une seule page', 'Oui', 'Dix lignes de texte'],
        ['14', 'La lettre a été relue à voix haute', 'Non', 'Jamais relue avant envoi'],
      ],
    },
    result: "B16 = 1/10 et C16 = 10 %. Joël voit enfin ce que recevaient les 31 recruteurs : une lettre à 10 % de complétude, très en dessous du seuil de 8/10.",
    tip: "Cette checklist se remplit pour CHAQUE lettre. Gardez une copie du classeur par candidature, ou remettez B5:B14 à « Non » avant de commencer la lettre suivante.",
  },

  // ───────── PROCÉDURE 2 — RECHERCHE CIBLÉE ET GRILLE (6 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Ouvrir la grille de personnalisation et comprendre ses colonnes',
    intro: "La grille grille-personnalisation-lettre-par-organisation.xlsx structure toute votre recherche avant la rédaction : elle vous interdit d'écrire une ligne de lettre avant d'avoir des faits concrets à y placer. Règle : une ligne PAR candidature, remplie avant de rédiger. Durée : 2 minutes.",
    steps: [
      {
        title: 'Enregistrer votre copie',
        actions: [
          'Ouvrez le fichier depuis le dossier 04-templates du module.',
          "Faites Fichier > Enregistrer sous, et nommez-le « NOM_Prenom_grille-personnalisation_AAAA-MM.xlsx » dans un dossier « Candidatures AAAA-MM ».",
          "Ne travaillez jamais dans l'original : il vous resservira pour chaque nouvelle campagne.",
        ],
      },
      {
        title: "Lire l'onglet « Recherche & Personnalisation »",
        actions: [
          'Lignes 1 à 4 : titre et consigne. La ligne 4 précise que la ligne 6 est un exemple illustratif pré-rempli (cas d\'Amina).',
          'Ligne 5 : les 7 en-têtes des colonnes A à G (voir tableau).',
          'Conservez la ligne 6 comme modèle de précision attendue ; commencez à remplir à la ligne 7.',
        ],
      },
      {
        title: "Repérer le second onglet",
        actions: ["L'onglet « Checklist complétude » sera utilisé en Procédure 7 : n'y touchez pas avant d'avoir une lettre à vérifier."],
      },
    ],
    table: {
      columns: ['Col.', 'En-tête dans le template', 'Ce que vous y écrivez'],
      rows: [
        ['A', 'Organisation ciblée / Poste visé', "Nom de l'organisation et intitulé du poste copié tel quel de l'annonce"],
        ['B', 'Fait clé n°1 (mission / valeurs)', "Une mission précise ou une valeur illustrée par une action réelle"],
        ['C', 'Fait clé n°2 (projet ou actualité récente)', 'Un projet récent nommé, daté, de préférence chiffré'],
        ['D', 'Fait clé n°3 (culture, chiffre, autre)', 'Un chiffre de rapport, un trait de culture, un autre fait concret'],
        ['E', 'Utilisation prévue — Hook', "Le fait qui ouvrira la lettre"],
        ['F', 'Utilisation prévue — Paragraphe Valeur', 'Le lien avec votre réalisation et l\'exigence visée'],
        ['G', 'Source & date de consultation', "Où vous l'avez trouvé, et le jour de consultation"],
      ],
    },
    example: {
      title: 'Mise en place de Joël, lundi 14 décembre 2026, 19 h',
      lines: [
        'Fichier : Kabeya_Joel_grille-personnalisation_2026-12.xlsx, dans le dossier « Candidatures 2026-12 ».',
        'Onglet 1 : ligne 6 = exemple d\'Amina, conservé ; ligne 7 = première ligne de Joël, pour Mwangaza.',
        'Onglet 2 : non touché avant la Procédure 7.',
      ],
    },
    pitfall: "Commencer à rédiger la lettre avant d'avoir rempli au moins les colonnes A, B et C : la grille existe précisément pour l'empêcher. Une lettre écrite d'abord se justifie ensuite avec des faits qui ne lui correspondent pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: "Décoder l'annonce et remplir la colonne A",
    intro: "Pourquoi : la lettre répond à UNE annonce. Vous y prélevez l'intitulé exact, la référence, les exigences que vous citerez mot pour mot et, si possible, le nom du destinataire. Entrée : l'annonce complète (page ReliefWeb ou page carrières). Durée : 3 minutes.",
    steps: [
      {
        title: "Copier l'intitulé exact",
        actions: [
          "Ouvrez l'annonce complète, pas seulement son titre dans la liste.",
          "Copiez l'intitulé du poste tel quel, avec ses parenthèses et ses majuscules, et collez-le en A7 après le nom de l'organisation.",
          'Notez à côté la référence de l\'offre et la date limite.',
        ],
      },
      {
        title: 'Surligner trois exigences',
        actions: [
          "Dans la rubrique « missions » ou « profil recherché », surlignez les 3 exigences les plus centrales : celles qui reviennent, qui ouvrent la liste ou qui décrivent l'enjeu du poste.",
          'Recopiez-les mot pour mot dans un bloc-notes : vous les citerez en Procédure 5.',
        ],
      },
      {
        title: 'Chercher un nom',
        actions: [
          "Cherchez dans l'annonce un nom de destinataire ou un service (« à l'attention de… »).",
          "S'il n'y en a pas, notez-le : vous le chercherez à l'étape 4.",
        ],
      },
    ],
    example: {
      title: "Annonce de Mwangaza et cellule A7 de Joël",
      lines: [
        'Annonce : « Mwangaza Santé International recrute un(e) Responsable MEAL (MEAL Manager) — Bukavu, Sud-Kivu (RDC) — Réf. MWA-RDC-2026-047 — clôture le 18/12/2026. »',
        "Missions : piloter le dispositif de suivi, évaluation et apprentissage du programme nutrition ; encadrer l'équipe MEAL ; garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé ; déployer le mécanisme de redevabilité communautaire ; produire les rapports aux bailleurs.",
        "Profil : master ; 5 ans d'expérience en MEAL dont 2 en encadrement ; français courant ; anglais professionnel apprécié.",
        'Exigences retenues par Joël : (1) encadrer l\'équipe MEAL ; (2) garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé ; (3) déployer le mécanisme de redevabilité communautaire.',
        "A7 : Mwangaza Santé International — Responsable MEAL (MEAL Manager), Bukavu (Mission RDC). Destinataire : non précisé dans l'annonce, à chercher.",
      ],
    },
    result: "A7 est rempli avec l'intitulé exact ; vous avez 3 exigences citables et vous savez s'il vous manque un nom de destinataire.",
    pitfall: "Reformuler l'intitulé (« Responsable suivi-évaluation » au lieu de « MEAL Manager ») : le recruteur cherche son propre intitulé, et l'item 2 de la checklist échouera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: "Explorer le site institutionnel : « À propos » et « Actualités »",
    intro: "Pourquoi : la page « À propos » donne le langage exact de l'organisation ; la page « Actualités » ou « Nos projets » donne les faits récents à citer. Beaucoup de candidats n'ouvrent que la page de l'offre. Entrée : l'adresse du site de l'organisation. Durée : 5 minutes.",
    steps: [
      {
        title: 'Page « À propos » ou « Notre mission »',
        actions: [
          'Ouvrez le site de l\'organisation (pas la page de l\'offre) puis la page « À propos » ou « Notre mission ».',
          "Notez la phrase de mission en une ligne, et surtout le vocabulaire exact : « zones de santé » ou « districts » ? « communautés » ou « bénéficiaires » ?",
        ],
      },
      {
        title: 'Page « Actualités » ou « Nos projets »',
        actions: [
          'Ouvrez la page et repérez les publications des 12 derniers mois : lancement, extension, partenariat, rapport publié, prise de position.',
          "Retenez les 2 ou 3 plus proches du poste visé, avec leur date.",
          "Utilisez la barre de recherche du site avec 2 mots du poste (« données », « redevabilité », le nom de la zone).",
        ],
      },
      {
        title: 'Tracer ce que vous trouvez',
        actions: [
          'Pour chaque information, notez dans un brouillon : la phrase factuelle, la date de publication, la page.',
          "Arrêtez-vous à 5 minutes : la recherche a un budget, elle n'est pas une fin.",
        ],
      },
    ],
    example: {
      title: 'Notes de Joël, site de Mwangaza (brouillon)',
      lines: [
        'Mission (page « Notre mission ») : « Programme intégré de prise en charge de la malnutrition aiguë des enfants de moins de 5 ans dans les zones de santé rurales du Sud-Kivu. » Vocabulaire : « zones de santé », « communautés », « redevabilité ».',
        "Actualité (page « Actualités », publication du 12/10/2026) : extension du programme de nutrition de 38 à 43 zones de santé, dans le Sud-Kivu et le Maniema, d'ici juin 2027.",
        'Autre actualité (09/2026) : atelier de formation de 40 agents de santé à la collecte électronique — retenu en réserve.',
      ],
    },
    tip: "Reprenez le vocabulaire de l'organisation tel quel : écrire « zones de santé » quand elle écrit « zones de santé » montre que vous connaissez son terrain ; écrire « districts » montre que vous lisez son offre sans plus.",
    pitfall: "S'arrêter à la page de l'offre : vous passez à côté de l'essentiel de la matière personnalisable, disponible gratuitement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Relever un chiffre de rapport annuel et un nom sur LinkedIn',
    intro: "Pourquoi : une phrase qui cite un chiffre exact d'un rapport récent pèse plus que n'importe quelle formule sur « l'engagement humanitaire ». LinkedIn donne le ton réel de l'organisation et, parfois, le nom du destinataire. Durée : 5 minutes.",
    steps: [
      {
        title: 'Ouvrir le dernier rapport annuel',
        actions: [
          'Sur le site, cherchez « Publications » ou « Rapports » et ouvrez le rapport annuel le plus récent, souvent en PDF.',
          "Appuyez sur Ctrl+F et cherchez 3 mots : la zone ou le pays du poste, un mot du métier (« suivi », « données »), « chiffres clés ».",
          'Relevez UN chiffre précis avec sa page et vérifiez la date du rapport.',
        ],
      },
      {
        title: "Regarder la page LinkedIn de l'organisation",
        actions: [
          "Ouvrez la page de l'organisation sur LinkedIn, onglet Publications, et lisez les 3 derniers messages.",
          "Notez le ton : formel, direct, orienté terrain. Votre lettre n'imite pas ce ton, mais elle ne le contredit pas.",
        ],
      },
      {
        title: 'Chercher le destinataire',
        actions: [
          "Dans l'onglet Personnes, cherchez « recrutement », « ressources humaines » ou le titre du responsable hiérarchique du poste.",
          "Vérifiez trois choses : l'orthographe du nom, la fonction actuelle (poste occupé aujourd'hui, pas il y a deux ans), le pays ou la mission concernés.",
          "En cas de doute, ne devinez pas : gardez « Madame, Monsieur » et le nom du service.",
        ],
      },
    ],
    example: {
      title: 'Trouvailles de Joël',
      lines: [
        'Rapport annuel 2025 (PDF, p. 4) : « 112 000 enfants de moins de 5 ans dépistés dans 38 zones de santé ». Stratégie 2026-2028 (p. 9) : « décisions fondées sur les données » et redevabilité envers les communautés, deuxième axe.',
        'LinkedIn, 3 derniers messages : ton direct et orienté terrain, chiffres plutôt que slogans.',
        'Personnes : Odette Mukendi, Responsable Recrutement, Mission RDC — fonction confirmée par la page « Carrières » de l\'organisation, rubrique « Contact ». Nom et fonction retenus.',
      ],
    },
    pitfall: "Écrire à une personne qui a quitté l'organisation, ou dont vous avez mal lu le titre : un nom faux est pire que « Madame, Monsieur ». Vérifiez avant de l'utiliser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Trier vos trouvailles et remplir les colonnes B, C et D',
    intro: "Pourquoi : tout ce que vous avez trouvé n'est pas utilisable. Un fait clé est une information concrète et vérifiable, jamais une généralité que vous pourriez écrire sans avoir rien recherché. Entrée : vos notes de brouillon. Durée : 2 minutes.",
    steps: [
      {
        title: 'Passer chaque information par trois tests',
        actions: [
          "Test 1 — Aurais-je pu écrire cette phrase sans rien lire ? Si oui, c'est une généralité : rejetez-la.",
          'Test 2 — Est-elle vérifiable (un nom de projet, un chiffre, une date, une page) ?',
          'Test 3 — A-t-elle un lien avec CE poste, et date-t-elle de moins de 12 mois ? Sinon, laissez-la de côté.',
        ],
      },
      {
        title: 'Conserver 2 à 3 faits',
        actions: [
          'Gardez au moins 2 faits, 3 au mieux.',
          'Classez-les : B = mission ou valeur illustrée ; C = projet ou actualité récente ; D = chiffre, culture ou autre.',
        ],
      },
      {
        title: 'Saisir dans la grille',
        actions: [
          'Cliquez sur B7, C7 puis D7 et saisissez une phrase factuelle par cellule, avec le chiffre, le nom ou la date.',
          'Pas d\'adjectif d\'admiration : un fait ne s\'embellit pas.',
        ],
      },
    ],
    table: {
      columns: ['Information trouvée par Joël', 'Concret ?', 'Utile pour CE poste ?', 'Décision'],
      rows: [
        ['« Mwangaza est engagée pour la santé des enfants. »', 'Non : généralité', '—', 'Rejetée'],
        ['« Valeurs : humanité, excellence, intégrité. »', 'Non : aucune action associée', '—', 'Rejetée'],
        ["Extension de 38 à 43 zones de santé d'ici juin 2027 (12/10/2026)", 'Oui : chiffre, date, page', 'Oui : suivi à étendre sur de nouvelles zones', 'Colonne C'],
        ['Programme intégré de prise en charge de la malnutrition aiguë, zones rurales du Sud-Kivu', 'Oui : mission précise', 'Oui : programme que le poste pilote', 'Colonne B'],
        ['112 000 enfants de moins de 5 ans dépistés en 2025', 'Oui : chiffre de rapport, p. 4', 'Oui : volume de données à fiabiliser', 'Colonne D'],
        ['Organisation créée en 2011', 'Oui', 'Non : sans lien avec le poste', 'Non retenue'],
      ],
    },
    result: "B7, C7 et D7 contiennent 3 faits concrets. Une généralité ne passe jamais le test 1 : si votre cellule pouvait figurer dans la grille d'un concurrent, retirez-la.",
    tip: "Un fait non utilisé dans la lettre n'est pas perdu : il servira à préparer l'entretien (module 05).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Décider où chaque fait servira (E et F) et sourcer (G)',
    intro: "Pourquoi : une décision prise à l'avance vous évite d'écrire la lettre en cherchant vos idées en même temps que vos mots ; les deux tâches, séparées, vont chacune plus vite. Entrée : colonnes A à D complétées. Durée : 2 minutes.",
    steps: [
      {
        title: 'Colonne E — le fait du Hook',
        actions: [
          'Choisissez le fait le plus récent et le plus relié au poste.',
          "Écrivez en E7 la manière dont il ouvrira la lettre, en une phrase.",
        ],
      },
      {
        title: 'Colonne F — le lien du paragraphe Valeur',
        actions: [
          "Écrivez en F7 la réalisation de votre parcours que vous allez relier et l'exigence de l'annonce visée, citée mot pour mot.",
          "Ne placez jamais le même fait en E et en F : le Hook ouvre, la Valeur démontre.",
        ],
      },
      {
        title: 'Colonne G — la source',
        actions: [
          "Écrivez la page ou l'adresse où vous avez trouvé chaque fait, puis « consulté le JJ/MM/AAAA ».",
          "Vérifiez qu'un fait sans source n'est pas utilisé.",
        ],
      },
    ],
    example: {
      title: 'Ligne 7 de la grille — Joël (complète)',
      lines: [
        'A7 : Mwangaza Santé International — Responsable MEAL (MEAL Manager), Bukavu (Mission RDC)',
        'B7 : Programme intégré de prise en charge de la malnutrition aiguë des enfants de moins de 5 ans dans les zones de santé rurales du Sud-Kivu',
        "C7 : Extension annoncée le 12/10/2026 : de 38 à 43 zones de santé (Sud-Kivu et Maniema) d'ici juin 2027",
        'D7 : Rapport annuel 2025 : 112 000 enfants de moins de 5 ans dépistés ; stratégie 2026-2028 : décisions fondées sur les données et redevabilité envers les communautés',
        'E7 : Ouverture sur le passage de 38 à 43 zones de santé et le défi de faire tenir un même système de suivi',
        'F7 : Réalisation de mai 2025 (9 % de doublons, enquête suspendue) reliée à l\'exigence « garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé »',
        'G7 : Site de l\'organisation (« Notre mission », « Actualités », mwangaza-sante.example) ; rapport annuel 2025, p. 4 — consultés le 14/12/2026',
      ],
    },
    result: "La ligne 7 est complète en 15 à 17 minutes de travail, et chaque cellule peut être défendue par une source. La lettre peut maintenant s'écrire en quelques minutes par paragraphe.",
    pitfall: "Mettre deux faits dans le Hook pour « faire plus sérieux » : le Hook s'appuie sur UN fait concret et récent, les autres attendent leur place.",
  },

  // ───────── PROCÉDURE 3 — PRÉPARER LE GABARIT WORD (3 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 3',
    title: 'Ouvrir le gabarit Word et le préparer pour votre lettre',
    intro: "Le gabarit gabarit-lettre-motivation-3-paragraphes.docx contient deux parties : la Partie 1, structure vierge à remplir, et la Partie 2, un exemple complet (cas d'Amina). Les indications entre crochets expliquent quoi écrire ; elles ne doivent jamais apparaître dans la lettre envoyée. Durée : 1 minute.",
    steps: [
      {
        title: 'Enregistrer et nommer votre copie',
        actions: [
          'Ouvrez le fichier depuis le dossier 04-templates.',
          "Faites Fichier > Enregistrer sous : « NOM_Prenom_lettre_REFERENCE_AAAA-MM-JJ.docx » dans votre dossier de candidatures.",
        ],
      },
      {
        title: 'Lire les deux parties',
        actions: [
          'Lisez le cadre « Comment utiliser ce gabarit » puis la Partie 1 en entier.',
          'Parcourez la Partie 2 pour mesurer le niveau de précision attendu à chaque paragraphe.',
          "Ne recopiez jamais un texte de la Partie 2 : elle montre un niveau, pas une phrase à réutiliser.",
        ],
      },
      {
        title: 'Alléger votre copie',
        actions: [
          'Dans votre copie de travail, supprimez le cadre « Comment utiliser ce gabarit » et toute la Partie 2 : seule la Partie 1 reste à remplir.',
          "Conservez le fichier d'origine intact pour les candidatures suivantes.",
        ],
      },
    ],
    example: {
      title: 'Les zones à remplir de la Partie 1',
      lines: [
        'Expéditeur : [Prénom NOM] / [Adresse — ville, pays] / [Téléphone] · [Adresse e-mail professionnelle]',
        'Destinataire : [Nom du destinataire et fonction — à défaut, le nom du service recrutement] / [Nom de l\'organisation] / [Ville, pays]',
        'Lieu et date : [Ville], le [date]',
        "Objet : Candidature au poste de [intitulé exact du poste, copié depuis l'annonce] — [référence de l'offre si disponible]",
        'Salutation : [Madame, Monsieur / Nom du destinataire si connu],',
        'Corps : PARAGRAPHE 1 — LE HOOK / PARAGRAPHE 2 — LA VALEUR AJOUTÉE / PARAGRAPHE 3 — LE CALL-TO-ACTION',
        'Clôture : Je vous prie d\'agréer, [Madame, Monsieur / Nom], l\'expression de mes salutations distinguées. / [Signature — Prénom NOM]',
      ],
    },
    result: "Votre copie ne contient plus que la structure à remplir, avec un nom de fichier qui permet de la retrouver.",
    tip: "Une fois la lettre terminée, appuyez sur Ctrl+F et cherchez le crochet « [ » : s'il en reste un, une consigne du gabarit est encore visible dans votre lettre. Les titres « PARAGRAPHE 1 — LE HOOK », eux aussi, sont des indications à supprimer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 3',
    title: "Remplir l'en-tête : expéditeur, destinataire, lieu et date",
    intro: "Pourquoi : l'en-tête est le premier signal de soin. Une erreur sur le nom de l'organisation, ou une ancienne dénomination, suffit à ruiner l'effort de personnalisation. Entrée : colonnes A et G de la grille, notes du brouillon.",
    steps: [
      {
        title: "Bloc expéditeur",
        actions: [
          'Remplacez [Prénom NOM], [Adresse] et [Téléphone] · [Adresse e-mail] par vos coordonnées.',
          "Utilisez une adresse e-mail professionnelle, de type prenom.nom@…, jamais un pseudonyme.",
          'Indiquez ville et pays, pas votre adresse postale complète.',
        ],
      },
      {
        title: 'Bloc destinataire',
        actions: [
          "Saisissez le nom et la fonction du destinataire vérifiés à la Procédure 2, étape 4 ; à défaut, le nom du service recrutement.",
          "Recopiez le nom de l'organisation exactement comme sur son site, sans faute ni ancienne dénomination.",
          "Ajoutez la ville et le pays du lieu du poste.",
        ],
      },
      {
        title: 'Lieu et date',
        actions: [
          'Écrivez la ville où vous résidez, puis « le » et la date d\'envoi prévue, pas celle où vous avez commencé la lettre.',
        ],
      },
    ],
    example: {
      title: 'En-tête de Joël',
      lines: [
        'Joël KABEYA',
        'Goma, Nord-Kivu, RDC',
        '+243 XX XX XX XX · joel.kabeya@email.com',
        '',
        'Madame Odette Mukendi, Responsable Recrutement',
        'Mwangaza Santé International — Mission RDC',
        'Bukavu, RDC',
        '',
        'Goma, le 15 décembre 2026',
      ],
    },
    result: "L'en-tête est complet, cohérent avec la colonne A de la grille et daté du jour d'envoi prévu (mardi 15 décembre 2026).",
    pitfall: "Laisser le nom de l'organisation d'une lettre précédente quand vous dupliquez un fichier : c'est l'erreur la plus courante, et la plus fatale. Vérifiez par Ctrl+F avant d'envoyer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 3',
    title: "Rédiger l'objet et choisir la salutation",
    intro: "Pourquoi : l'objet est lu avant la lettre, et l'item 2 de la checklist exige l'intitulé exact de l'annonce. La salutation nominative change immédiatement la perception de la lettre. Entrée : colonne A de la grille, référence de l'offre.",
    steps: [
      {
        title: "Écrire l'objet",
        actions: [
          'Suivez la formule : « Objet : Candidature au poste de [intitulé exact] — [référence de l\'offre si disponible] ».',
          "Copiez l'intitulé depuis la cellule A7 de la grille, sans le retaper.",
          "Ajoutez la référence si l'annonce en donne une : elle aide le recruteur à classer votre dossier.",
        ],
      },
      {
        title: 'Choisir la salutation',
        actions: [
          'Nom du destinataire vérifié : « Madame Mukendi, » ou « Monsieur [Nom], ».',
          "Nom non vérifié ou fonction seule : « Madame, Monsieur, » et le nom du service dans le bloc destinataire.",
          'Ne devinez jamais un genre ou une fonction.',
        ],
      },
      {
        title: 'Aligner la formule de politesse',
        actions: [
          "Recopiez la même appellation dans la formule finale : « Je vous prie d'agréer, Madame Mukendi, l'expression de mes salutations distinguées. »",
        ],
      },
    ],
    table: {
      columns: ['Situation', 'Salutation', 'Politesse finale'],
      rows: [
        ['Nom et fonction vérifiés', 'Madame Mukendi,', "Je vous prie d'agréer, Madame Mukendi, …"],
        ['Service connu, nom inconnu', 'Madame, Monsieur,', "Je vous prie d'agréer, Madame, Monsieur, …"],
        ['Nom douteux (poste ancien, orthographe incertaine)', 'Madame, Monsieur,', "Je vous prie d'agréer, Madame, Monsieur, …"],
      ],
    },
    example: {
      title: 'Objet et salutation de Joël',
      lines: [
        'Objet : Candidature au poste de Responsable MEAL (MEAL Manager) — Réf. MWA-RDC-2026-047',
        'Madame Mukendi,',
      ],
    },
    result: "Le haut de la lettre est terminé : en 10 secondes, le recruteur lit le nom de l'organisation, l'intitulé exact de son offre et son propre nom.",
    pitfall: "Garder « Madame, Monsieur » par paresse alors que le nom est affiché sur la page carrières : l'item 6 de la checklist n'est alors pas coché.",
  },

  // ───────────────── PROCÉDURE 4 — RÉDIGER LE HOOK (5 étapes) ─────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Choisir la construction du Hook',
    intro: "Pourquoi : on n'écrit pas un Hook en attendant l'inspiration ; on choisit d'abord la construction qui s'appuie sur ce que contient la grille. Entrée : colonnes C, D et E de la ligne 7. Durée : 1 minute.",
    steps: [
      {
        title: 'Lire la ligne de grille avec trois questions',
        actions: [
          'La colonne C contient-elle un fait récent, daté, chiffré ? Alors : fait d\'actualité.',
          'Avez-vous vécu une situation très proche de l\'enjeu du poste ? Alors : connexion d\'expérience directe.',
          "La mission est-elle claire et pouvez-vous l'illustrer par le terrain ? Alors : mission incarnée.",
        ],
      },
      {
        title: 'Écrire un brouillon par construction',
        actions: [
          'Rédigez une phrase pour chacune des constructions possibles, sans chercher la perfection.',
          'Comparez-les avec le test de la ligne suivante.',
        ],
      },
      {
        title: 'Trancher',
        actions: [
          "Gardez la construction dont le fait est le plus récent, le plus précis et le plus proche du poste.",
          "En cas d'égalité, retenez le fait d'actualité.",
        ],
      },
    ],
    table: {
      columns: ['Construction', 'À choisir si…', 'Risque principal', 'Choix de Joël'],
      rows: [
        ["Fait d'actualité", 'Un fait récent et chiffré figure en colonne C', 'Se contenter de constater le fait sans le relier à soi', 'Retenu'],
        ['Connexion d\'expérience', "Une situation vécue ressemble à l'enjeu du poste", 'Se raconter sans lien avec l\'organisation', 'En réserve'],
        ['Mission incarnée', "La mission est claire et illustrable par un chiffre de rapport", 'Paraphraser le site de l\'organisation', 'En réserve'],
      ],
    },
    example: {
      title: 'Les trois brouillons de Joël',
      lines: [
        "Fait d'actualité : « En passant de 38 à 43 zones de santé au Sud-Kivu et au Maniema d'ici juin 2027, Mwangaza Santé International doit faire tenir un même système de suivi nutritionnel sur cinq nouvelles zones : c'est le défi que je relève à Goma depuis mars 2024. »",
        "Connexion d'expérience : « Le jour où j'ai dû suspendre une enquête nutritionnelle à 9 % de doublons, j'ai compris ce que doit garantir un responsable MEAL quand un programme s'étend : c'est la mission que vous confiez au futur responsable du suivi à Bukavu. »",
        "Mission incarnée : « Dépister 112 000 enfants de moins de 5 ans en un an, c'est d'abord 112 000 fiches à fiabiliser avant qu'une décision de prise en charge ne s'appuie dessus : c'est là que se joue, selon moi, le métier de responsable MEAL. »",
        "Décision : le fait d'actualité, daté du 12/10/2026 et chiffré. Les deux autres sont gardés pour l'entretien.",
      ],
    },
    tip: "Le Hook peut mêler deux constructions (un fait d'actualité relié à une expérience, comme ci-dessus) : ce qui compte est qu'il s'appuie sur UN fait vérifiable de l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Écrire la première version : le fait, puis le lien',
    intro: "Pourquoi : un Hook efficace tient en deux mouvements — un fait précis de l'organisation, puis le lien avec votre expérience ou votre motivation. Entrée : la cellule E7 de la grille. Durée : 2 minutes.",
    steps: [
      {
        title: 'Poser le fait',
        actions: [
          "Ouvrez le gabarit Word et placez-vous sous le titre du paragraphe 1.",
          "Écrivez le fait de la colonne E avec son chiffre et sa date, sans adjectif d'admiration.",
          'Commencez par le fait, pas par « Je ».',
        ],
      },
      {
        title: 'Ajouter le lien',
        actions: [
          "Après un deux-points ou une virgule, reliez le fait à votre expérience : « c'est le défi que… », « c'est exactement… », « c'est ce que… ».",
          "Le lien doit annoncer le paragraphe Valeur : il y mènera.",
        ],
      },
      {
        title: 'Interdire les ouvertures passives',
        actions: [
          "Vérifiez que le paragraphe ne commence ni par « Je vous écris », ni par « Suite à votre annonce », ni par « Je me permets ».",
        ],
      },
    ],
    example: {
      title: 'Version 1 du Hook de Joël, trop longue',
      lines: [
        "« Lors de votre annonce d'octobre 2026, j'ai appris avec grand intérêt que Mwangaza Santé International étendrait son programme nutrition de 38 à 43 zones de santé au Sud-Kivu et au Maniema d'ici juin 2027, un défi de taille pour tout dispositif de suivi, défi que j'ai moi-même eu l'occasion de relever à Goma depuis mars 2024 en supervisant une équipe de six personnes. »",
        'Constat : 63 mots, une phrase qui s\'essouffle. Le fait est bon ; il reste à le resserrer (étape 4).',
      ],
    },
    result: "Le paragraphe 1 existe en première version : un fait daté et chiffré, un lien avec votre expérience. Il n'est pas encore bon, mais il est vrai.",
    pitfall: "Chercher la phrase parfaite du premier coup et perdre 20 minutes. Écrivez vite, testez ensuite : la qualité vient des étapes 3 et 4.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Appliquer le test du changement de destinataire au Hook',
    intro: "Pourquoi : c'est le test qui décide si le Hook est personnalisé. Vous l'avez utilisé en Procédure 1 pour condamner l'ancienne lettre ; vous l'utilisez maintenant pour valider la nouvelle. Entrée : la version 1 du Hook.",
    steps: [
      {
        title: 'Copier la phrase et changer le destinataire',
        actions: [
          "Copiez la phrase d'ouverture dans un brouillon.",
          "Imaginez-la adressée à une autre organisation du même secteur.",
        ],
      },
      {
        title: 'Poser les trois questions',
        actions: [
          "Cette phrase serait-elle fausse ou incohérente envoyée ailleurs ?",
          "Contient-elle un nom, un projet ou un chiffre qu'aucune autre organisation ne peut revendiquer ?",
          "Le fait est-il daté, et la date est-elle récente ?",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Trois « oui » : le Hook est validé.",
          "Un seul « non » : reprenez-le avec un fait plus précis.",
        ],
      },
    ],
    table: {
      columns: ['Version testée', 'Survit au changement de destinataire ?', 'Décision'],
      rows: [
        ["« Je suis très intéressé par votre programme de nutrition. »", 'Oui : vraie pour toute ONG de nutrition', 'À refaire'],
        ["« Votre programme nutrition au Sud-Kivu m'intéresse beaucoup. »", "Oui, pour toute ONG de nutrition au Sud-Kivu", 'À refaire'],
        ["« En passant de 38 à 43 zones de santé au Sud-Kivu et au Maniema d'ici juin 2027, Mwangaza… »", "Non : cette trajectoire n'appartient qu'à Mwangaza", 'Validé'],
      ],
    },
    result: "Le Hook de Joël est validé par les trois questions. Le même test aurait éliminé les deux premières versions, qu'un candidat pressé aurait pourtant envoyées.",
    tip: "Une version qui nomme l'organisation mais ne cite aucun fait ne passe pas le test : le nom seul ne personnalise pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Resserrer le Hook à 30–50 mots et vérifier chaque chiffre',
    intro: "Pourquoi : un Hook trop long se lit comme un paragraphe et perd son effet d'accroche ; un chiffre faux détruit la personnalisation. Entrée : la version 1 validée au test. Durée : 1 minute.",
    steps: [
      {
        title: 'Compter les mots',
        actions: [
          'Sélectionnez le paragraphe dans Word et lisez le compteur de mots dans la barre d\'état (ou Révision > Nombre de mots).',
          "Visez 30 à 50 mots, une idée, une ou deux phrases.",
        ],
      },
      {
        title: 'Supprimer ce qui ne porte pas',
        actions: [
          "Retirez les formules de remplissage : « j'ai appris avec grand intérêt », « j'ai eu l'occasion de ».",
          "Retirez les détails qui appartiennent au paragraphe Valeur (ici : « en supervisant une équipe de six personnes »).",
          'Coupez les adjectifs.',
        ],
      },
      {
        title: 'Vérifier les faits à la source',
        actions: [
          'Rouvrez la colonne G de la grille et comparez chaque chiffre, nom et date du Hook à la source consultée.',
          "Écrivez ce que la source dit, pas ce que vous en avez retenu.",
        ],
      },
    ],
    example: {
      title: 'Du Hook v1 au Hook final — Joël',
      lines: [
        'Version 1 : 63 mots (voir étape 2).',
        'Coupes : « Lors de votre annonce d\'octobre 2026, j\'ai appris avec grand intérêt que » ; « un défi de taille pour tout dispositif de suivi » ; « en supervisant une équipe de six personnes ».',
        "Version finale : « En passant de 38 à 43 zones de santé au Sud-Kivu et au Maniema d'ici juin 2027, Mwangaza Santé International doit faire tenir un même système de suivi nutritionnel sur cinq nouvelles zones : c'est le défi que je relève à Goma depuis mars 2024. »",
        'Contrôle : 44 mots ; 38, 43, juin 2027 et Maniema concordent avec le site (12/10/2026) ; mars 2024 concorde avec le CV.',
      ],
    },
    result: "Le Hook tient en 44 mots, dit une seule chose et chacun de ses faits est sourcé. Si un chiffre n'est pas dans votre source, il sort de la lettre.",
    pitfall: "Arrondir ou « embellir » un chiffre de l'organisation : si elle écrit 38 zones et que vous écrivez 40, le recruteur y verra une lettre écrite sans lire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Insérer le Hook dans le gabarit et faire le contrôle final',
    intro: "Pourquoi : le Hook est prêt, il faut le placer dans le gabarit et vérifier qu'aucune consigne ni formule générique n'est restée. Entrée : le Hook final.",
    steps: [
      {
        title: 'Insérer',
        actions: [
          'Remplacez la consigne entre crochets du paragraphe 1 par votre Hook, sans la conserver.',
          'Supprimez le titre « PARAGRAPHE 1 — LE HOOK » : il est destiné à vous guider, pas au recruteur.',
        ],
      },
      {
        title: 'Rechercher les formules interdites',
        actions: [
          "Avec Ctrl+F, cherchez : « Je vous écris », « Suite à », « Je me permets », « votre organisation », « votre structure ».",
          "Chaque résultat trouvé est à remplacer par un fait ou par le nom de l'organisation.",
        ],
      },
      {
        title: 'Relire seul',
        actions: [
          "Relisez le Hook à voix basse : il doit se lire en une respiration ou deux.",
          "Vérifiez qu'il annonce le sujet du paragraphe suivant.",
        ],
      },
    ],
    example: {
      title: 'Paragraphe 1 de Joël, dans le gabarit',
      lines: [
        'Madame Mukendi,',
        "En passant de 38 à 43 zones de santé au Sud-Kivu et au Maniema d'ici juin 2027, Mwangaza Santé International doit faire tenir un même système de suivi nutritionnel sur cinq nouvelles zones : c'est le défi que je relève à Goma depuis mars 2024.",
      ],
    },
    result: "Le paragraphe 1 est en place, sans consigne ni formule interdite. Le Hook annonce un défi de fiabilité du suivi : le paragraphe Valeur va y répondre.",
    tip: "Si l'organisation a un nom long, utilisez-le en entier dans le Hook (à son sujet) puis seulement son sigle ou « votre équipe » ensuite.",
  },

  // ──────── PROCÉDURE 5 — RÉDIGER LE PARAGRAPHE VALEUR (6 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Dresser la liste de vos réalisations candidates',
    intro: "Pourquoi : le paragraphe Valeur repose sur UNE réalisation, mais on ne la choisit pas de tête. On part de ce qu'on a déjà prouvé. Entrées : votre onglet « Réalisations » du module 01 (colonne F = Oui) et les lignes de réalisations de votre CV (module 02, méthode PAR). Durée : 2 minutes.",
    steps: [
      {
        title: 'Ouvrir vos réalisations prouvées',
        actions: [
          "Ouvrez le classeur bilan-competences-positionnement-carriere.xlsx du module 01, onglet « Réalisations ».",
          'Filtrez la colonne F sur « Oui » : ce sont les réalisations que vous avez décidé de réutiliser.',
        ],
      },
      {
        title: 'Retenir celles qui ont un chiffre et une preuve',
        actions: [
          'Gardez les réalisations qui ont à la fois un chiffre (colonne C) et une pièce ou un témoin (colonne D).',
          'Écartez celles dont le résultat est flou : une lettre se défend en entretien.',
        ],
      },
      {
        title: 'Copier les candidates dans un brouillon',
        actions: ['Collez 4 à 6 candidates dans un bloc-notes, avec leur preuve : vous les comparerez à l\'étape 3.'],
      },
    ],
    table: {
      columns: ['Réalisation candidate (extrait)', 'Chiffre / preuve', 'Managérial'],
      rows: [
        ["Supervisé une équipe de 6 personnes sur un programme de 4,6 M USD, 30 rapports mensuels sur 30 livrés", 'Organigramme ; registre des rapports', 'Oui'],
        ["Géré l'exécution du budget MEAL de 120 000 USD à 96 %", 'Suivi budgétaire MEAL 2025', 'Oui'],
        ['Mis en place un mécanisme de plaintes : 1 340 retours en 12 mois, délai de 19 à 7 jours', 'Tableau de suivi des plaintes', 'Oui'],
        ["Décidé, en l'absence du coordinateur, de suspendre une enquête à 9 % de doublons", 'Note interne de mai 2025', 'Oui'],
        ['Piloté une baseline de 1 150 ménages, livrée en 6 semaines au lieu de 8', 'Rapport de baseline', 'Oui'],
        ["Formé 18 relais communautaires : taux d'erreur de saisie de 14 % à 5 % en 3 mois", 'Fiches de présence ; rapport qualité', 'Oui'],
      ],
    },
    result: "Vous avez 4 à 6 réalisations candidates, chacune avec un chiffre et une preuve. Joël en a 6, toutes issues de son onglet « Réalisations ».",
    pitfall: "Inventer une réalisation « sur mesure » pour coller à l'annonce : elle ne figure pas dans votre CV, et la question d'entretien qui suivra la révélera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: "Choisir l'exigence de l'annonce à adresser",
    intro: "Pourquoi : un paragraphe Valeur relie UNE réalisation à UNE exigence précise du poste. Tout se joue donc dans le choix de l'exigence. Entrée : les 3 exigences recopiées à la Procédure 2, étape 2, et le Hook rédigé.",
    steps: [
      {
        title: "Classer les exigences par place et par répétition",
        actions: [
          "Relisez les 3 exigences citées mot pour mot.",
          "Notez pour chacune sa place dans l'annonce (missions, profil), et si elle revient ailleurs dans le texte.",
          "Une exigence répétée ou reprise dans le profil pèse plus qu'une exigence citée une seule fois.",
        ],
      },
      {
        title: 'Vérifier la cohérence avec le Hook',
        actions: [
          "Le Hook a posé un défi : le paragraphe Valeur doit y répondre.",
          "Donnez la priorité à l'exigence qui prolonge le défi du Hook.",
        ],
      },
      {
        title: 'Retenir une seule exigence',
        actions: [
          'Écrivez-la en haut de votre brouillon, mot pour mot, entre guillemets.',
          'Les deux autres ne sont pas perdues : elles seront traitées par votre CV et en entretien.',
        ],
      },
    ],
    table: {
      columns: ["Exigence citée dans l'annonce", "Place dans l'annonce", 'Lien avec le Hook', 'Priorité'],
      rows: [
        ["encadrer l'équipe MEAL", 'Missions, 2e puce ; reprise dans le profil (« dont 2 en encadrement »)', 'Indirect', '2'],
        ['garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé', 'Missions, 3e puce ; au cœur de l\'enjeu du poste', 'Direct : le Hook parle de faire tenir un même système sur cinq nouvelles zones', '1'],
        ['déployer le mécanisme de redevabilité communautaire', 'Missions, 4e puce', 'Aucun', '3'],
      ],
    },
    result: "Joël retient l'exigence n° 2, citée telle quelle : « garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé ». Elle prolonge directement son Hook.",
    tip: "Si votre meilleure réalisation répond à l'exigence n° 3 mais que le Hook parle de l'exigence n° 2, changez d'abord de Hook ou de réalisation : une lettre qui change de sujet entre deux paragraphes se lit comme un collage.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Apparier chaque réalisation avec les exigences et choisir UNE réalisation',
    intro: "Pourquoi : remplacer le « je crois que celle-ci est la meilleure » par un score. Entrées : les 6 réalisations candidates et les 3 exigences. Durée : 2 minutes.",
    steps: [
      {
        title: 'Construire la matrice',
        actions: [
          'Dans votre bloc-notes ou dans Excel, tracez un tableau : réalisations en lignes, exigences en colonnes.',
          'Notez 0 (aucun lien), 1 (lien partiel) ou 2 (lien direct) à chaque croisement.',
        ],
      },
      {
        title: 'Additionner et départager',
        actions: [
          "Faites la somme par ligne, en regardant d'abord la colonne de l'exigence prioritaire.",
          "En cas d'égalité, retenez la réalisation la plus récente, la plus facile à prouver et la moins déjà mise en avant dans l'en-tête de votre CV.",
        ],
      },
      {
        title: 'Retenir UNE réalisation',
        actions: [
          "Écrivez-la en dessous de l'exigence retenue.",
          'Les autres ne disparaissent pas : elles peuvent servir dans une autre lettre ou en entretien.',
        ],
      },
    ],
    table: {
      columns: ['Réalisation', 'Encadrer (1)', 'Qualité des données (2)', 'Redevabilité (3)', 'Total'],
      rows: [
        ['Équipe de 6, 30 rapports sur 30', '2', '1', '0', '3'],
        ['Budget MEAL à 96 %', '0', '0', '0', '0'],
        ['Mécanisme de plaintes', '0', '0', '2', '2'],
        ['Suspension d\'une enquête à 9 % de doublons (mai 2025)', '1', '2', '0', '3'],
        ['Baseline de 1 150 ménages', '1', '1', '0', '2'],
        ['18 relais formés, erreurs 14 % à 5 %', '1', '2', '0', '3'],
      ],
    },
    result: "Trois réalisations à égalité (3 points). Joël choisit la suspension de l'enquête de mai 2025 : plus récente que la formation des relais (2019-2021), et plus directement liée à la qualité des données que l'équipe de 6, déjà visible dans son CV.",
    pitfall: "Choisir la réalisation la plus impressionnante plutôt que la plus pertinente : le budget MEAL de 120 000 USD est un beau chiffre, mais il ne répond à aucune exigence retenue.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Rédiger la première version avec la formule « Chez…, j\'ai… — transférable à… »',
    intro: "Pourquoi : la formule impose les trois éléments d'un bon paragraphe Valeur — une réalisation, un résultat mesurable, un lien explicite avec l'annonce. Entrées : la réalisation et l'exigence retenues. Durée : 5 minutes.",
    steps: [
      {
        title: 'Poser la formule dans le gabarit',
        actions: [
          'Placez-vous sous le titre du paragraphe 2 dans le gabarit Word.',
          "Écrivez : « Chez [organisation ou mission précédente], j'ai [action concrète avec résultat mesurable] — une expérience directement transférable à [exigence précise du poste, citée depuis l'annonce]. »",
        ],
      },
      {
        title: 'Remplir les trois blancs',
        actions: [
          "Organisation : le nom de votre employeur ou de votre projet (celui du CV).",
          "Action et résultat : la réalisation choisie, avec son chiffre.",
          "Exigence : la citation exacte de l'étape 2, entre guillemets.",
        ],
      },
      {
        title: 'Ne rien optimiser pour l\'instant',
        actions: [
          'Écrivez la version 1 sans vous relire.',
          "L'étape 5 sert à corriger : le but ici est d'avoir un texte vrai.",
        ],
      },
    ],
    example: {
      title: 'Version 1 du paragraphe Valeur de Joël',
      lines: [
        "« Chez Alliance Santé Grands Lacs, j'ai décidé, en l'absence du coordinateur, de suspendre puis de réorganiser une enquête nutritionnelle après la détection de 9 % de doublons, évitant la transmission de données erronées au bailleur. Je suis rigoureux, réactif et très attaché à la qualité des données. Cette expérience est transférable à votre poste. »",
        'Constat : trois défauts à corriger à l\'étape suivante (voir ci-dessous).',
      ],
    },
    result: "Un paragraphe 2 existe, avec une réalisation chiffrée et un début de lien. Il n'est pas encore bon : la phrase 1 recopie le CV, la phrase 2 empile des adjectifs, la phrase 3 ne cite pas l'exigence.",
    pitfall: "S'arrêter à cette version « parce que le chiffre est là » : la lettre doit apporter ce que le CV ne dit pas. Passez à l'étape 5.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Chasser le recopiage du CV et les adjectifs, ajouter ce que le CV ne dit pas',
    intro: "Pourquoi : un paragraphe qui peut être remplacé par une ligne déjà présente sur le CV ne sert à rien ; une qualité non démontrée ne convainc personne. Entrée : la version 1. Durée : 5 minutes.",
    steps: [
      {
        title: 'Passer trois tests sur chaque phrase',
        actions: [
          'Test du CV : cette phrase est-elle déjà, à peu près, une ligne de mon CV ? Si oui, que lui ajoute-t-elle ?',
          "Test de l'adjectif : puis-je remplacer cet adjectif par un fait ? (rigoureux → « chaque lot de fiches est contrôlé avant validation »).",
          "Test du lien : cette phrase cite-t-elle l'exigence de l'annonce mot pour mot ?",
        ],
      },
      {
        title: 'Ajouter une information que le CV ne contient pas',
        actions: [
          "Ajoutez le contexte (taille du programme, équipe mobilisée).",
          "Ajoutez la manière dont vous avez procédé, ou ce que vous en avez retenu : une règle, un outil, un réflexe.",
          "Ne donnez ni nom de bénéficiaire ni document interne : uniquement des chiffres agrégés.",
        ],
      },
      {
        title: 'Contrôler la longueur',
        actions: [
          'Visez 80 à 120 mots.',
          "Vérifiez que la dernière phrase relie explicitement la réalisation à l'exigence citée.",
        ],
      },
    ],
    example: {
      title: 'Du paragraphe v1 au paragraphe Valeur final — Joël',
      lines: [
        "Phrase 1 : ligne du CV recopiée. → Contexte ajouté (4,6 M USD, trois provinces, équipe de six personnes) et manière de procéder (contrôle qualité réorganisé).",
        'Phrase 2 : « rigoureux, réactif ». → Remplacée par un fait que le CV ne dit pas : « Depuis, chaque lot de fiches passe par un contrôle automatique des doublons avant validation. »',
        'Phrase 3 : « transférable à votre poste ». → Remplacée par l\'exigence citée mot pour mot.',
        "Version finale : « Chez Alliance Santé Grands Lacs, en mai 2025, l'enquête nutritionnelle de mon programme (4,6 M USD, trois provinces) affichait 9 % de doublons alors que le coordinateur était absent : j'ai suspendu la collecte, fait réorganiser le contrôle qualité par mon équipe de six personnes et évité l'envoi de données erronées au bailleur. Depuis, chaque lot de fiches passe par un contrôle automatique des doublons avant validation. Cette expérience — décider vite et fiabiliser un dispositif sur plusieurs zones — correspond directement à votre exigence de « garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé ». »",
        'Contrôle : environ 100 mots ; 9 %, 4,6 M USD et mai 2025 concordent avec le CV et le dossier de preuves.',
      ],
    },
    result: "Le paragraphe 2 démontre au lieu d'affirmer : une réalisation, un contexte, une règle retenue, une exigence citée. Il répond au défi posé par le Hook.",
    pitfall: "Empiler deux ou trois réalisations pour « en dire plus » : une seule, bien reliée, convainc plus que trois survolées. Le reste de vos preuves est dans le CV.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Traiter honnêtement un écart avec le poste et protéger la confidentialité',
    intro: "Pourquoi : aucun profil ne coche 100 % des lignes d'une annonce, et une lettre ne doit ni mentir, ni se justifier. Savoir quoi dire, quoi taire et quoi ne jamais écrire fait partie de la qualité du paragraphe Valeur. Entrée : l'annonce et votre CV.",
    steps: [
      {
        title: "Repérer l'écart",
        actions: [
          'Relisez la rubrique « profil » : séparez ce qui est exigé de ce qui est apprécié.',
          "Comparez-la honnêtement à votre CV : niveau de langue, années, outil, diplôme.",
        ],
      },
      {
        title: 'Appliquer la règle correspondante',
        actions: [
          "Apprécié que vous n'avez pas encore : ne le mentionnez pas dans la lettre ; votre CV indique votre niveau réel et vous préparez la réponse d'entretien.",
          "Exigé que vous n'avez pas : soit vous ne postulez pas, soit une phrase factuelle avec un plan daté. Jamais une affirmation que vous ne pourrez pas tenir en entretien.",
        ],
      },
      {
        title: 'Protéger les données',
        actions: [
          'Ne citez que des chiffres agrégés : jamais de nom de bénéficiaire, de document interne ni de critique de votre employeur.',
          'Ne joignez pas la « note interne » : citez le fait, pas le document.',
        ],
      },
    ],
    table: {
      columns: ["Situation dans l'annonce", 'Ce que dit la lettre', "Cas de Joël (anglais B1)"],
      rows: [
        ['Compétence « appréciée » que vous avez à un niveau inférieur', "Rien : la lettre n'est pas un aveu", 'Anglais professionnel apprécié : rien dans la lettre ; le CV indique B1, la réponse est préparée pour l\'entretien'],
        ['Compétence « exigée » que vous n\'avez pas encore', 'Soit pas de candidature ; soit une phrase factuelle et datée', "Si l'anglais courant était exigé : « Anglais B1, en cours de passage au B2 (3 h par semaine, certification visée au 30/06/2027). »"],
        ['Donnée ou document confidentiel', 'Chiffre agrégé uniquement', "« 9 % de doublons » oui ; noms des enquêteurs ou note interne, non"],
      ],
    },
    result: "Joël ne dit rien de son anglais dans cette lettre (compétence apprécié, non exigée) : son CV affiche B1, et la question sera traitée en entretien. Chaque donnée citée est agrégée et vérifiable.",
    pitfall: "Écrire « anglais courant » parce que l'annonce le valorise : la première question en anglais en entretien dévoilera l'écart, et la confiance est perdue pour le reste du dossier.",
  },

  // ───────── PROCÉDURE 6 — CALL-TO-ACTION ET CLÔTURE (3 étapes) ─────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 3',
    title: 'Rédiger le Call-to-Action actif',
    intro: "Pourquoi : la dernière phrase laisse l'impression finale. Une formule d'attente ferme la lettre ; une invitation active la propulse vers l'étape suivante. Entrées : l'objectif cité dans le Hook et votre domaine d'expérience. Durée : 2 minutes.",
    steps: [
      {
        title: 'Reprendre la structure',
        actions: [
          "Formule : « Je serais heureux/heureuse d'échanger avec vous sur la façon dont mon expérience en [domaine précis] peut contribuer à [objectif précis de l'organisation, repris du Hook]. »",
          "Accordez « heureux » ou « heureuse » avec votre genre.",
        ],
      },
      {
        title: 'Remplir les deux blancs',
        actions: [
          "Domaine précis : le sujet du paragraphe Valeur, nommé avec précision (pas « le suivi-évaluation » : « la fiabilisation des données de suivi »).",
          "Objectif : celui du Hook, repris avec ses mots.",
        ],
      },
      {
        title: 'Proposer sans exiger',
        actions: [
          "Gardez une seule phrase de 25 à 45 mots.",
          "Ne fixez pas d'heure ni de date : vous proposez, vous n'imposez pas.",
        ],
      },
    ],
    example: {
      title: 'Paragraphe 3 de Joël',
      lines: [
        "« Je serais heureux d'échanger avec vous sur la façon dont mon expérience en fiabilisation des données de suivi peut contribuer, dès les premières semaines, au déploiement de votre dispositif sur les cinq nouvelles zones de santé. »",
        'Contrôle : 36 mots ; le domaine (« fiabilisation des données de suivi ») vient du paragraphe 2 ; l\'objectif (« cinq nouvelles zones ») vient du Hook.',
      ],
    },
    result: "Le paragraphe 3 boucle la lettre : il reprend l'objectif du Hook, nomme votre domaine et propose un échange.",
    tip: "Une bonne formule reste courte, confiante, et propose la suite sans l'exiger. Si la phrase dépasse 45 mots, vous êtes en train de refaire un paragraphe Valeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 3',
    title: 'Vérifier que la clôture est active, pas passive',
    intro: "Pourquoi : les formules passives sont si courantes qu'on les écrit sans les voir. Entrée : le paragraphe 3 et toute la fin de la lettre.",
    steps: [
      {
        title: 'Rechercher les formules passives',
        actions: [
          "Avec Ctrl+F, cherchez : « dans l'attente », « reste à votre disposition », « n'hésitez pas », « espérant que ».",
          "Chaque résultat est à supprimer ou à réécrire.",
        ],
      },
      {
        title: 'Appliquer le double test',
        actions: [
          "Test 1 : la phrase contient-elle un verbe d'action de votre part (échanger, présenter, détailler) ?",
          "Test 2 : indique-t-elle un bénéfice pour l'organisation, repris de votre Hook ?",
          "Deux « oui » : la clôture est active.",
        ],
      },
      {
        title: 'Réécrire si besoin',
        actions: ["Reprenez la structure de l'étape 1 en remplaçant la formule passive."],
      },
    ],
    table: {
      columns: ['Formule trouvée dans un brouillon', 'Verbe d\'action + bénéfice ?', 'Réécriture pour Joël'],
      rows: [
        ["« Dans l'attente d'une réponse de votre part… »", 'Non : attente passive', "« Je serais heureux d'échanger avec vous sur la façon dont mon expérience en fiabilisation des données… »"],
        ['« Je reste à votre disposition pour tout renseignement complémentaire. »', 'Non : rien proposé', "« Je serais heureux de vous présenter ma méthode de contrôle des doublons et son application à vos nouvelles zones. »"],
        ["« N'hésitez pas à me contacter. »", 'Non : laisse l\'initiative à l\'autre', "« Un échange de 20 minutes me permettrait de détailler cette méthode et de répondre à vos questions sur le suivi des cinq nouvelles zones. »"],
        ['Paragraphe 3 de Joël (étape 1)', 'Oui : « échanger » + « déploiement sur les cinq nouvelles zones »', 'Validé'],
      ],
    },
    result: "Aucune formule d'attente ne figure plus dans la lettre : la fin ouvre l'étape suivante.",
    pitfall: "Remplacer « dans l'attente » par « dans l'espoir d'une réponse » : la formule reste passive. Seule une proposition d'échange change le ton.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 3',
    title: 'Terminer avec la formule de politesse et la signature',
    intro: "Pourquoi : la fin de la lettre doit rester sobre et alignée sur la salutation. Entrée : la salutation choisie en Procédure 3, étape 3.",
    steps: [
      {
        title: 'Formule de politesse',
        actions: [
          "Remplacez [Madame, Monsieur / Nom] dans « Je vous prie d'agréer, … l'expression de mes salutations distinguées. » par la même appellation que la salutation.",
          'Ne rallongez pas la formule : elle n\'est ni le lieu de l\'enthousiasme ni celui de la preuve.',
        ],
      },
      {
        title: 'Signature',
        actions: [
          'Remplacez [Signature — Prénom NOM] par votre prénom et votre nom en majuscules.',
          "Ajoutez une signature manuscrite scannée seulement si l'annonce le demande.",
        ],
      },
      {
        title: 'Supprimer les consignes restantes',
        actions: [
          "Ctrl+F sur le crochet « [ » : aucune consigne ne doit rester.",
          'Vérifiez que les 3 titres de paragraphes du gabarit sont supprimés.',
        ],
      },
    ],
    example: {
      title: 'Clôture de Joël',
      lines: [
        "Je vous prie d'agréer, Madame Mukendi, l'expression de mes salutations distinguées.",
        '',
        'Joël KABEYA',
      ],
    },
    result: "La lettre est complète : en-tête, objet, salutation, 3 paragraphes, politesse, signature. Elle n'a pas encore été relue ni vérifiée : c'est la Procédure 7.",
    pitfall: "Une formule de politesse qui nomme une autre personne que la salutation (« Madame » en haut, « Monsieur Dupont » en bas) : relisez les deux.",
  },

  // ───── PROCÉDURE 7 — RELIRE, VÉRIFIER ET ENVOYER (5 étapes) ─────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Relire à voix haute et vérifier la page unique',
    intro: "Pourquoi : les formules génériques et les phrases trop longues s'entendent avant de se voir. Entrée : la lettre complète. Durée : 3 minutes. Idéalement : le lendemain matin, avec un œil frais.",
    steps: [
      {
        title: 'Lire à voix haute',
        actions: [
          'Lisez la lettre entière à voix haute, à vitesse normale, debout si possible.',
          "Soulignez chaque endroit où vous butez, reprenez votre souffle ou perdez le fil : c'est une phrase à couper.",
          'Repère : la lecture complète dure environ 1 min 30 ; au-delà de 2 minutes, la lettre est trop longue.',
        ],
      },
      {
        title: 'Corriger',
        actions: [
          "Coupez toute phrase de plus de 35 mots, ou séparez-la en deux.",
          "Supprimez toute formule qui sonne comme une lettre-type.",
        ],
      },
      {
        title: 'Vérifier la page unique',
        actions: [
          'Ouvrez Fichier > Imprimer et regardez l\'aperçu : la lettre doit tenir sur 1 page, signature comprise.',
          "En cas de débordement : retirez d'abord les lignes vides superflues, puis resserrez le texte. Ne réduisez jamais la police sous 10,5 points ni les marges sous 2 cm pour « faire tenir ».",
        ],
      },
    ],
    example: {
      title: 'Relecture de Joël, mardi 15 décembre 2026, 7 h 30',
      lines: [
        "À voix haute, il bute sur « un contrôle automatique des doublons avant validation, une règle que je déploierais » : phrase coupée en deux.",
        'La signature et la formule de politesse passent en page 2 (3 lignes de débordement) : causes — 3 lignes vides superflues et un interligne à 1,5 dans sa copie.',
        "Correction : interligne remis à celui du gabarit, lignes vides supprimées. Le texte tient maintenant sur une page.",
      ],
    },
    result: "La lettre se lit en environ 1 min 30, sans butée, et tient sur une seule page signature comprise.",
    tip: "Lire à voix haute le matin, avant de rouvrir la boîte de réception, donne à votre relecture la même fraîcheur que celle du recruteur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Cocher la checklist de complétude — items des lignes 5 à 9',
    intro: "Pourquoi : si un seul item n'est pas coché, la lettre n'est pas prête à être envoyée, même si le délai presse. Entrée : la lettre relue et la ligne 7 de la grille. Vous travaillez dans l'onglet « Checklist complétude » d'une copie propre (cellules B5 à B14 à « Non »).",
    steps: [
      {
        title: 'Ouvrir la checklist',
        actions: [
          "Dans votre grille, cliquez sur l'onglet « Checklist complétude ».",
          "Vérifiez que les cellules B5 à B14 sont toutes à « Non » : une case ne se coche qu'après vérification.",
        ],
      },
      {
        title: 'Vérifier chaque item avant de répondre',
        actions: [
          "Pour chaque item, appliquez la vérification du tableau, puis choisissez « Oui » dans la liste déroulante de la colonne B.",
          'En cas de « Non », écrivez la raison en colonne C et corrigez la lettre avant de continuer.',
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Item (abrégé)', 'Comment le vérifier', 'Joël'],
      rows: [
        ['5', "Nom de l'organisation orthographié et vérifié", 'Comparer à la page du site, lettre par lettre ; Ctrl+F « Mwangaza »', 'Oui'],
        ['6', "Intitulé repris exactement comme dans l'annonce", "Comparer l'objet à la cellule A7 et à l'annonce, parenthèses comprises", 'Oui'],
        ['7', "Le Hook s'appuie sur un fait spécifique", 'Test du changement de destinataire (Procédure 4, étape 3)', 'Oui'],
        ['8', 'La Valeur relie une réalisation chiffrée à une exigence précise', "Repérer le chiffre et l'exigence entre guillemets dans le paragraphe 2", 'Oui'],
        ['9', 'Aucune formule générique copiée-collée', 'Ctrl+F des 5 formules (Procédure 4, étape 5)', 'Oui'],
      ],
    },
    result: "Les 5 premiers items sont cochés sur preuve, pas sur impression. Pour Joël : 5 « Oui » sur 5.",
    pitfall: "Cocher « Oui » de mémoire pour gagner du temps : la checklist devient décorative, et l'erreur de nom d'organisation que vous cherchiez à éviter passe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Cocher la checklist de complétude — items des lignes 10 à 14',
    intro: "Suite de la checklist : destinataire, non-répétition du CV, Call-to-Action, page unique et relecture à voix haute. Ces items sont les plus souvent oubliés parce qu'ils ne se voient qu'à la relecture.",
    steps: [
      {
        title: 'Vérifier les items 10 à 12',
        actions: [
          "Ligne 10 : le nom du destinataire est celui vérifié sur la page carrières, pas deviné.",
          "Ligne 11 : comparez chaque paragraphe à votre CV ; chaque phrase doit apporter une information que le CV ne contient pas (le lien, la méthode, la règle retenue).",
          "Ligne 12 : le Call-to-Action contient un verbe d'action et aucune formule d'attente.",
        ],
      },
      {
        title: 'Vérifier les items 13 et 14',
        actions: [
          "Ligne 13 : l'aperçu avant impression montre une seule page.",
          "Ligne 14 : vous avez relu la lettre entière à voix haute après vos dernières corrections.",
        ],
      },
      {
        title: 'Noter chaque « Non » en colonne C',
        actions: ["Écrivez la raison, corrigez la lettre, puis repassez l'item à « Oui »."],
      },
    ],
    table: {
      columns: ['Ligne', 'Item (abrégé)', 'Comment le vérifier', 'Joël (1er passage)'],
      rows: [
        ['10', 'Nom du destinataire vérifié', 'Page « Carrières » de Mwangaza', 'Oui'],
        ['11', 'Aucun paragraphe ne reformule le CV', "Chaque phrase apporte du nouveau : contexte, contrôle automatique, lien", 'Oui'],
        ['12', 'Call-to-Action actif', '« échanger » + déploiement sur les cinq zones', 'Oui'],
        ['13', 'Une seule page', 'Aperçu avant impression', 'Non : débordement de 3 lignes'],
        ['14', 'Relue à voix haute', 'Pas encore après les corrections', 'Non'],
      ],
    },
    result: "Premier passage de Joël : 8 « Oui » sur 10. Deux items restent à corriger : la page unique et la relecture à voix haute.",
    tip: "Cochez la checklist à chaque envoi, même pour une candidature « rapide » : la règle sert précisément quand le délai presse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Lire le taux de complétude et corriger jusqu\'à 10/10',
    intro: "Pourquoi : la checklist calcule elle-même le taux, vous n'avez qu'à le lire et à agir. Entrée : l'onglet « Checklist complétude » renseigné.",
    steps: [
      {
        title: 'Lire les deux cellules calculées',
        actions: [
          'B16 compte les « Oui » et affiche une fraction du type « 8/10 » (formule NB.SI dans la version française d\'Excel).',
          'C16 convertit en pourcentage, par exemple « 80% ».',
          "N'écrivez rien dans B16 ni C16 : ce sont des formules.",
        ],
      },
      {
        title: "Appliquer la règle de la ligne 18",
        actions: [
          "Objectif avant envoi : 10/10.",
          "En dessous de 8/10, reprenez la lettre avec le gabarit Word avant de la considérer terminée.",
          "Entre 8 et 9, corrigez les items restants avant l'envoi : une seule case non cochée suffit à ne pas envoyer.",
        ],
      },
      {
        title: 'Corriger puis repasser la checklist',
        actions: [
          'Corrigez la lettre pour chaque « Non », puis repassez uniquement les items concernés à « Oui ».',
          'Relisez B16 : il doit afficher « 10/10 ».',
        ],
      },
    ],
    example: {
      title: 'Score de Joël, avant et après correction',
      lines: [
        'Avant : B16 = 8/10, C16 = 80 %. Items à « Non » : ligne 13 (page unique) et ligne 14 (relecture à voix haute).',
        'Actions : interligne et lignes vides corrigés ; phrase du paragraphe 2 coupée en deux ; relecture complète à voix haute le mardi 15 décembre à 7 h 30.',
        'Après : lignes 13 et 14 repassées à « Oui » ; B16 = 10/10, C16 = 100 %.',
        "Rappel de l'ancienne lettre (Procédure 1) : 1/10, soit 10 %.",
      ],
    },
    result: "Le score affiche 10/10. Votre lettre est prête, et vous pouvez prouver pourquoi.",
    pitfall: "Passer un « Non » à « Oui » sans avoir corrigé la lettre : le taux monte, la qualité non. La checklist ne vaut que si elle reflète la lettre qui part.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Exporter, nommer, envoyer et journaliser',
    intro: "Pourquoi : une lettre parfaite envoyée dans un format inadapté, ou dont vous perdez la trace, ne sert pas. Entrée : la lettre validée à 10/10 et le CV du module 02.",
    steps: [
      {
        title: 'Exporter',
        actions: [
          "Lisez d'abord les consignes de dépôt de l'annonce : si elles imposent un format, suivez-les.",
          "À défaut, faites Fichier > Enregistrer sous > PDF, et nommez le fichier « Lettre_NOM_Prenom_REFERENCE.pdf ».",
          "Si le portail de candidature n'offre qu'une zone de texte, collez le corps de la lettre sans l'en-tête, en conservant les 3 paragraphes.",
        ],
      },
      {
        title: 'Envoyer',
        actions: [
          "Dans un e-mail, reprenez l'objet de la lettre comme objet du message.",
          "Rédigez 2 lignes dans le corps du message : ne recopiez pas la lettre.",
          "Joignez la lettre et le CV du module 02. Envoyez au moins 24 heures avant la clôture, jamais dans la dernière heure.",
        ],
      },
      {
        title: 'Journaliser et archiver',
        actions: [
          "Dans votre journal de candidatures du module 01, ajoutez la ligne : date, organisation, référence, Hook utilisé, réalisation utilisée.",
          'Archivez la lettre PDF, la ligne de grille et la checklist à 10/10 dans le dossier de la candidature.',
        ],
      },
    ],
    example: {
      title: 'Envoi de Joël, mardi 15 décembre 2026, 7 h 45',
      lines: [
        'Fichier : Lettre_KABEYA_Joel_MWA-RDC-2026-047.pdf.',
        'Objet du message : Candidature au poste de Responsable MEAL (MEAL Manager) — Réf. MWA-RDC-2026-047.',
        'Corps du message : « Madame Mukendi, veuillez trouver ci-joint ma lettre et mon CV pour le poste de Responsable MEAL (réf. MWA-RDC-2026-047). Cordialement, Joël Kabeya. »',
        "Journal : 15/12/2026 · Mwangaza Santé International · MWA-RDC-2026-047 · Hook : extension 38 à 43 zones · Réalisation : suspension de l'enquête, mai 2025.",
      ],
    },
    result: "La candidature est envoyée trois jours avant la clôture, avec un PDF d'une page ; le journal permet de savoir quoi relancer et quoi réutiliser.",
    pitfall: "Envoyer le fichier Word ouvert à une mise en page cassée, ou garder le nom de fichier d'une lettre précédente : le nom du fichier est lu avant la lettre.",
  },

  // ───── PROCÉDURE 8 — ADAPTER, JAMAIS DUPLIQUER (3 étapes) ─────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 3',
    title: 'Trier ce qui se réutilise et ce qui se refait',
    intro: "Pourquoi : la tentation, à la deuxième candidature, est de dupliquer le fichier et de changer le nom. C'est exactement ce que le recruteur repère en une phrase. Entrée : la lettre n° 1 et une deuxième annonce qui vous intéresse réellement.",
    steps: [
      {
        title: 'Ouvrir une nouvelle ligne et un nouveau fichier',
        actions: [
          "Dans la grille, passez à la ligne 8 (une ligne par candidature).",
          "Enregistrez le gabarit original sous un nouveau nom : ne dupliquez pas la lettre n° 1.",
        ],
      },
      {
        title: 'Refaire tout ce qui dépend de l\'organisation',
        actions: [
          "Reprenez les Procédures 2, 3 et 4 depuis le début : recherche, en-tête, objet, Hook.",
          "Chaque nouvelle organisation, même sur un poste très similaire, demande une nouvelle recherche.",
        ],
      },
      {
        title: 'Réutiliser avec discernement',
        actions: [
          "Le paragraphe Valeur peut rester structurellement proche d'une candidature à l'autre.",
          "Mais la réalisation doit être reliée à l'exigence précise de la nouvelle annonce, pas recopiée.",
        ],
      },
    ],
    table: {
      columns: ['Bloc', 'Réutilisable tel quel ?', 'À refaire'],
      rows: [
        ['En-tête, objet, salutation', 'Non', "Nom de l'organisation, destinataire, intitulé exact, référence"],
        ['Hook', 'Jamais', 'Nouvelle recherche, nouveau fait, test du changement de destinataire'],
        ['Valeur', 'Structure oui, texte non', "Réalisation choisie pour l'exigence de la nouvelle annonce"],
        ['Call-to-Action', 'Structure oui', "Objectif repris du nouveau Hook"],
        ['Politesse, signature', 'Oui', "Alignement sur la nouvelle salutation"],
      ],
    },
    result: "Vous savez ce qui se réutilise (la structure, la méthode) et ce qui ne se réutilise jamais (le Hook, les faits, les noms).",
    pitfall: "Garder le Hook de la lettre précédente « parce qu'il marchait » : c'est précisément l'élément qui prouve que la lettre n'est pas un envoi de masse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 3',
    title: 'Appliquer la méthode à une deuxième candidature',
    intro: "Pour fixer la méthode, Joël écrit une deuxième lettre : une offre de MEAL Manager à Bunia (Ituri), celle qui apparaissait « prioritaire » dans sa grille de tri du module 01. Durée : 45 minutes, comme la première, pas plus.",
    steps: [
      {
        title: 'Recherche : ligne 8 de la grille',
        actions: [
          'Remplissez A8 à G8 comme à la Procédure 2, avec une nouvelle recherche de 15 minutes.',
          "Choisissez un nouveau fait pour le Hook.",
        ],
      },
      {
        title: 'Hook et Valeur : nouveaux, reliés à la nouvelle annonce',
        actions: [
          'Appliquez les tests des Procédures 4 et 5.',
          "Choisissez la réalisation qui répond à l'exigence prioritaire de cette annonce.",
        ],
      },
      {
        title: 'Relire et vérifier',
        actions: ['Reprenez la Procédure 7 : checklist à 10/10 avant envoi.'],
      },
    ],
    example: {
      title: 'Deuxième lettre de Joël — Fondation Imara Santé (fictive), MEAL Manager, Bunia',
      lines: [
        'A8 : Fondation Imara Santé — MEAL Manager, Bunia (Ituri) — clôture le mardi 22/12/2026.',
        "C8 : Inauguration en septembre 2026 d'un centre régional de formation de relais communautaires à Bunia ; objectif : 240 relais formés d'ici fin 2027 (page « Actualités »).",
        'Exigence retenue : « mettre en place et animer un mécanisme de retours et plaintes communautaires ».',
        "Hook : « Former 240 relais communautaires d'ici fin 2027 à Bunia suppose de mesurer ce que chaque formation change à la qualité des données : c'est ce que j'ai fait dans le Kivu avec 18 relais, dont le taux d'erreur de saisie est passé de 14 % à 5 % en trois mois. »",
        "Valeur : « Chez Alliance Santé Grands Lacs, j'ai mis en place, en avril 2025, un mécanisme de retours et plaintes communautaires (ligne verte et boîtes à suggestions) : 1 340 retours traités en 12 mois, avec un délai moyen de réponse ramené de 19 à 7 jours. Chaque retour est classé par thème et présenté chaque mois au comité de direction du programme, qui a modifié deux horaires de séances de dépistage à la suite de ces retours. Cette expérience répond à votre exigence de « mettre en place et animer un mécanisme de retours et plaintes communautaires ». »",
      ],
    },
    result: "La deuxième lettre ne partage avec la première que sa structure : un autre fait, un autre Hook, une autre réalisation, une autre exigence citée.",
    tip: "Le test final : posez les deux lettres côte à côte. Si un recruteur pouvait confondre les deux paragraphes 1, recommencez le Hook.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 3',
    title: 'Installer la routine : 45 minutes par lettre, 2 lettres par semaine',
    intro: "Pourquoi : la méthode ne vaut que si elle tient dans votre agenda. Le module 01 fixe la cadence à 2 à 3 candidatures ciblées par semaine au maximum ; avec 45 minutes par lettre, cela représente environ 2 h 30 hebdomadaires. Entrée : votre grille de tri (module 01) et votre journal.",
    steps: [
      {
        title: 'Bloquer les créneaux',
        actions: [
          "Réservez dans votre agenda un créneau de 30 minutes pour le tri des alertes (module 01) et deux créneaux de 45 minutes pour deux lettres.",
          "Évitez le soir de la clôture : écrivez au moins 48 heures avant.",
        ],
      },
      {
        title: 'Compléter votre journal',
        actions: [
          "Dans votre journal de candidatures du module 01, ajoutez 2 colonnes : « Hook utilisé » et « Réalisation utilisée ».",
          "Vérifiez qu'une même formule de Hook ne figure pas deux fois dans la colonne.",
        ],
      },
      {
        title: 'Contrôler avant chaque envoi',
        actions: [
          "Faites Ctrl+F du nom de l'organisation de la lettre précédente : aucun résultat ne doit apparaître.",
          'Refaites la checklist à partir de « Non » : un classeur par candidature.',
        ],
      },
    ],
    table: {
      columns: ['Jour', 'Durée', 'Tâche (semaine du 14 au 18 décembre 2026)'],
      rows: [
        ['Lundi 14/12', '30 min', 'Tri des alertes avec la grille de tri (module 01) : 2 offres « prioritaires »'],
        ['Lundi 14/12 soir', '45 min', 'Procédures 2 à 6 pour Mwangaza (lettre n° 1)'],
        ['Mardi 15/12 matin', '15 min', 'Procédure 7 : relecture à voix haute, checklist, envoi'],
        ['Jeudi 17/12', '45 min', 'Procédures 2 à 6 pour la deuxième offre (lettre n° 2)'],
        ['Vendredi 18/12', '15 min', 'Procédure 7 pour la lettre n° 2 ; journal à jour'],
      ],
    },
    result: "Joël investit environ 2 h 30 pour 2 candidatures ciblées, au lieu de 31 envois génériques répartis sur 5 mois sans résultat.",
    tip: "Moins de candidatures, mieux ciblées : 10 dossiers adaptés valent mieux que 40 dossiers génériques, qui se reconnaissent en quelques secondes.",
  },

  // ────────────────────── CAS RÉSOLU DE BOUT EN BOUT ──────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/5) — Joël : le raisonnement, du diagnostic à la décision',
    scenario: "Joël Kabeya, Superviseur MEAL, 7 ans d'expérience. 31 candidatures, 1 entretien : il pense que son CV, même réécrit, ne suffira pas et qu'il lui manque de l'expérience pour un poste de Responsable MEAL. Le lundi 14 décembre 2026, une offre exactement conforme à son profil apparaît : Mwangaza Santé International, Bukavu, clôture le 18 décembre.",
    steps: [
      { title: 'Constat chiffré (Procédure 1)', body: "Sa lettre type cumule les 5 familles de formules génériques ; 5 phrases sur 5 survivent au changement de destinataire ; la checklist de complétude donne 1/10, soit 10 %. Ce n'est pas l'expérience qui fait défaut, c'est le signal envoyé au recruteur." },
      { title: 'Hypothèse', body: "Le CV réécrit (module 02) montre les réalisations ; la lettre doit prouver que Joël a compris CE poste, chez Mwangaza, maintenant. Une recherche de 15 minutes doit lui fournir 2 à 3 faits." },
      { title: 'Construction (Procédures 2 à 6)', body: "Recherche : 3 faits sourcés (extension de 38 à 43 zones, programme nutrition, 112 000 enfants dépistés). Hook : l'extension. Valeur : la suspension de l'enquête de mai 2025, reliée à « garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé ». Call-to-Action : un échange sur la fiabilisation des données de suivi." },
      { title: 'Vérification (Procédure 7)', body: "Premier passage 8/10 : page unique et relecture à voix haute à corriger. Après correction : 10/10, PDF d'une page, envoi le mardi 15 décembre à 7 h 45, trois jours avant la clôture." },
      { title: 'Décision (Procédure 8)', body: "Joël ne duplique pas sa lettre : il refait la recherche, le Hook et le lien pour la candidature suivante (Bunia) et planifie 2 lettres par semaine, 45 minutes chacune." },
    ],
    result: "Un candidat qui pensait manquer d'expérience avait un problème de signal. La méthode a pris 45 minutes par lettre, contre 10 minutes de copier-coller pour une lettre à 10 % de complétude.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/5) — La ligne 7 de la grille de personnalisation de Joël',
    scenario: "La ligne complétée dans l'onglet « Recherche & Personnalisation », avant toute rédaction. Chaque fait est sourcé et daté ; le Hook et la Valeur s'appuient sur des cellules différentes.",
    steps: [],
    table: {
      columns: ['Colonne', 'Contenu saisi'],
      rows: [
        ['A — Organisation / Poste', 'Mwangaza Santé International — Responsable MEAL (MEAL Manager), Bukavu (Mission RDC)'],
        ['B — Fait clé n°1 (mission)', 'Programme intégré de prise en charge de la malnutrition aiguë des enfants de moins de 5 ans dans les zones de santé rurales du Sud-Kivu'],
        ['C — Fait clé n°2 (actualité)', "Extension annoncée le 12/10/2026 : de 38 à 43 zones de santé (Sud-Kivu et Maniema) d'ici juin 2027"],
        ['D — Fait clé n°3 (chiffre)', 'Rapport annuel 2025 : 112 000 enfants de moins de 5 ans dépistés ; stratégie 2026-2028 : décisions fondées sur les données, redevabilité envers les communautés'],
        ['E — Utilisation Hook', 'Ouverture sur le passage de 38 à 43 zones de santé et le défi de faire tenir un même système de suivi'],
        ['F — Utilisation Valeur', "Réalisation de mai 2025 (9 % de doublons, enquête suspendue) reliée à l'exigence « garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé »"],
        ['G — Source et date', "Site de l'organisation (« Notre mission », « Actualités », mwangaza-sante.example) ; rapport annuel 2025, p. 4 — consultés le 14/12/2026"],
      ],
    },
    result: "Recherche : environ 15 minutes ; décision et sourçage : 2 minutes. Les faits des colonnes B et D, non utilisés dans la lettre, resservent à l'entretien.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/5) — La lettre finale de Joël',
    scenario: "Le document Word final, une page, exporté en PDF le mardi 15 décembre 2026. Aucune consigne du gabarit ne subsiste, aucune formule générique n'y figure.",
    steps: [],
    example: {
      title: 'Lettre_KABEYA_Joel_MWA-RDC-2026-047',
      lines: [
        'Joël KABEYA',
        'Goma, Nord-Kivu, RDC',
        '+243 XX XX XX XX · joel.kabeya@email.com',
        '',
        'Madame Odette Mukendi, Responsable Recrutement',
        'Mwangaza Santé International — Mission RDC',
        'Bukavu, RDC',
        '',
        'Goma, le 15 décembre 2026',
        '',
        'Objet : Candidature au poste de Responsable MEAL (MEAL Manager) — Réf. MWA-RDC-2026-047',
        '',
        'Madame Mukendi,',
        '',
        "En passant de 38 à 43 zones de santé au Sud-Kivu et au Maniema d'ici juin 2027, Mwangaza Santé International doit faire tenir un même système de suivi nutritionnel sur cinq nouvelles zones : c'est le défi que je relève à Goma depuis mars 2024.",
        '',
        "Chez Alliance Santé Grands Lacs, en mai 2025, l'enquête nutritionnelle de mon programme (4,6 M USD, trois provinces) affichait 9 % de doublons alors que le coordinateur était absent : j'ai suspendu la collecte, fait réorganiser le contrôle qualité par mon équipe de six personnes et évité l'envoi de données erronées au bailleur. Depuis, chaque lot de fiches passe par un contrôle automatique des doublons avant validation. Cette expérience — décider vite et fiabiliser un dispositif sur plusieurs zones — correspond directement à votre exigence de « garantir la qualité et la fiabilité des données de suivi sur plusieurs zones de santé ».",
        '',
        "Je serais heureux d'échanger avec vous sur la façon dont mon expérience en fiabilisation des données de suivi peut contribuer, dès les premières semaines, au déploiement de votre dispositif sur les cinq nouvelles zones de santé.",
        '',
        "Je vous prie d'agréer, Madame Mukendi, l'expression de mes salutations distinguées.",
        '',
        'Joël KABEYA',
      ],
    },
    result: "Hook de 44 mots, Valeur d'environ 100 mots, Call-to-Action de 36 mots : le corps de la lettre tient en environ 180 mots, sur une seule page.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/5) — La checklist de complétude de Joël, avant et après',
    scenario: "Les 10 items de l'onglet « Checklist complétude », à vérifier avant l'envoi. Le score passe de 8/10 au premier passage à 10/10 après correction.",
    steps: [],
    table: {
      columns: ['Ligne', 'Item (abrégé)', '1er passage', 'Après correction'],
      rows: [
        ['5', "Nom de l'organisation vérifié", 'Oui', 'Oui'],
        ['6', "Intitulé repris exactement de l'annonce", 'Oui', 'Oui'],
        ['7', "Hook sur un fait spécifique", 'Oui', 'Oui'],
        ['8', 'Valeur : réalisation chiffrée reliée à une exigence', 'Oui', 'Oui'],
        ['9', 'Aucune formule générique', 'Oui', 'Oui'],
        ['10', 'Destinataire vérifié', 'Oui', 'Oui'],
        ['11', 'Aucune reformulation du CV', 'Oui', 'Oui'],
        ['12', 'Call-to-Action actif', 'Oui', 'Oui'],
        ['13', 'Une seule page', 'Non', 'Oui'],
        ['14', 'Relue à voix haute', 'Non', 'Oui'],
      ],
    },
    example: {
      title: 'Cellules calculées',
      lines: [
        '1er passage : B16 = 8/10 · C16 = 80 %',
        'Après correction : B16 = 10/10 · C16 = 100 %',
        'Ancienne lettre type : 1/10 · 10 %',
      ],
    },
    result: "Le taux passe de 10 % (ancienne lettre) à 100 %. Les deux items corrigés relevaient de la forme ; les 8 autres, du fond, étaient déjà acquis grâce à la recherche de la Procédure 2.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/5) — Avant / après : ce qui a changé pour Joël',
    scenario: "Comparaison de l'ancienne lettre générique, envoyée 31 fois, avec la lettre personnalisée pour Mwangaza. L'expérience de Joël n'a pas changé d'une ligne.",
    steps: [],
    table: {
      columns: ['Indicateur', 'Avant (lettre type, 31 envois)', 'Après (lettre pour Mwangaza)'],
      rows: [
        ["Phrases propres à l'organisation", '0 sur 5', '3 paragraphes sur 3'],
        ['Score de la checklist de complétude', '1/10 (10 %)', '10/10 (100 %)'],
        ['Faits sourcés dans la lettre', '0', '1 fait dans le Hook, 1 exigence citée mot pour mot'],
        ['Temps de préparation par lettre', 'Environ 10 minutes (copier-coller)', 'Environ 45 minutes'],
        ["Nombre de candidatures par semaine", 'Environ 6 (31 en 5 mois)', '2, sur offres « prioritaires »'],
      ],
    },
    result: "Point d'étape fictif au 15/01/2027 : 6 lettres personnalisées envoyées depuis le 15/12/2026, accompagnées du CV réécrit, et 2 entretiens obtenus, soit 33 % de réponse contre 3,2 % avant l'audit. Le gain vient de l'ensemble : ciblage (module 01), CV (module 02) et lettre.",
  },

  // ─────────────────────────────── EXERCICES ───────────────────────────────
  {
    type: 'exercise',
    title: "Exercice noté 1 — La recherche ciblée d'Amina (grille de personnalisation)",
    instructions: "Amina postule au poste de Coordinateur/trice Logistique publié par Eau Sahel Solidaire (organisation fictive), mission Niger, Réf. NER-LOG-2026-014. L'annonce demande de coordonner la logistique d'un programme d'urgence eau-assainissement multi-sites à Diffa, de gérer une flotte et des stocks de matériel en accès restreint et de négocier les accès avec les autorités locales. Amina a 4 ans d'expérience en logistique humanitaire, dont 18 mois au Tchad sur un programme similaire (4 sites, flotte de 6 véhicules, stocks de matériel de forage, négociation directe des accès). Complétez une ligne de la grille à partir du tableau des informations trouvées ci-dessous.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Enregistrez une copie de la grille nommée « AMINA_grille-personnalisation.xlsx ».",
          "Ouvrez l'onglet « Recherche & Personnalisation » et placez-vous en ligne 7.",
        ],
      },
      {
        title: 'Trier les 6 informations trouvées',
        actions: [
          "Appliquez les 3 tests de la Procédure 2, étape 5, à chaque information du tableau.",
          "Écrivez en commentaire pourquoi vous rejetez les généralités.",
          'Retenez 2 à 3 faits, au-delà de ceux déjà donnés dans le contexte du cas.',
        ],
      },
      {
        title: 'Compléter A à G',
        actions: [
          "A : « Eau Sahel Solidaire — Coordinateur/trice Logistique (Mission Niger) », intitulé copié tel quel.",
          'B, C, D : vos 2 à 3 faits retenus, une phrase factuelle chacun.',
          "E : le fait qui ouvrira la lettre. F : l'expérience tchadienne reliée à une exigence citée mot pour mot.",
          "G : la source de chaque fait et une date de consultation de votre choix.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Information trouvée sur Eau Sahel Solidaire', 'Source'],
      rows: [
        ['1', "« Notre mission : permettre aux populations déplacées et d'accueil du Sahel d'accéder à l'eau potable et à l'assainissement. »", 'Page « Notre mission »'],
        ['2', "Extension du programme d'urgence eau-assainissement à 3 nouveaux sites de la région de Diffa après un afflux de personnes déplacées", 'Page « Actualités »'],
        ['3', '« Nos équipes sont animées par la passion de l\'humanitaire. »', 'Page « À propos »'],
        ['4', "Ouverture en 2026 d'une base logistique régionale à Diffa : entrepôt de 600 m², flotte de 12 véhicules", 'Page « Actualités »'],
        ['5', "62 000 personnes ont eu accès à une source d'eau aménagée dans la région de Diffa en 2025", 'Rapport annuel 2025, p. 6'],
        ['6', '« Valeurs : solidarité, rapidité, rigueur. »', 'Page « À propos »'],
      ],
    },
    tip: "Les informations 3 et 6 sont des généralités : elles survivent au changement de destinataire. Parmi les autres, demandez-vous laquelle ouvrirait le mieux la lettre d'une logisticienne, et laquelle servirait de lien avec l'expérience du Tchad.",
    deliverable: "La ligne 7 de la grille complétée (A à G), avec au moins 2 faits concrets sourcés, un fait placé en E et un lien placé en F.",
  },
  {
    type: 'exercise',
    title: "Exercice noté 2 — La réécriture complète de la lettre d'Amina (gabarit Word)",
    instructions: "Réécrivez entièrement la lettre d'Amina avec gabarit-lettre-motivation-3-paragraphes.docx, en respectant strictement la structure en 3 paragraphes. Vous ne devez reprendre aucune phrase de la version originale (celle du cas vécu). Appuyez-vous sur la ligne de grille de l'exercice 1.",
    steps: [
      {
        title: 'Préparer le gabarit (Procédure 3)',
        actions: [
          "Enregistrez une copie « AMINA_lettre_NER-LOG-2026-014.docx » ; supprimez le cadre d'instructions et la Partie 2.",
          "En-tête : Amina DIALLO, Niamey (Niger) ; destinataire : Responsable Recrutement, Eau Sahel Solidaire — Mission Niger, Niamey ; date de votre choix.",
          "Objet : « Candidature au poste de Coordinateur/trice Logistique — Réf. NER-LOG-2026-014 ». Salutation : « Madame, Monsieur, ».",
        ],
      },
      {
        title: 'Paragraphe 1 — le Hook (Procédure 4)',
        actions: [
          "Appuyez-le sur l'extension du programme à 3 nouveaux sites (ou sur un autre fait trouvé lors de votre recherche), en 30 à 50 mots.",
          "Appliquez le test du changement de destinataire.",
        ],
      },
      {
        title: 'Paragraphe 2 — la Valeur (Procédure 5)',
        actions: [
          "Reliez explicitement l'expérience tchadienne d'Amina (18 mois, programme similaire, 4 sites, 6 véhicules, négociation des accès) à l'enjeu du poste au Niger.",
          "Citez une exigence de l'annonce mot pour mot. Une seule réalisation, 80 à 120 mots, aucun adjectif non démontré.",
        ],
      },
      {
        title: 'Paragraphe 3 — le Call-to-Action (Procédure 6)',
        actions: [
          "Invitez à l'entretien, sans formule d'attente passive, en reprenant l'objectif cité dans le Hook.",
          "Terminez avec la formule de politesse alignée sur la salutation.",
        ],
      },
    ],
    pitfall: "Résumer toute la carrière d'Amina dans le paragraphe Valeur : une seule réalisation (les 18 mois au Tchad), le reste figure déjà sur son CV et alourdirait la lettre.",
    deliverable: "La lettre d'Amina, sur une seule page, sans reprendre une seule phrase de la version originale.",
  },
  {
    type: 'exercise',
    title: "Exercice noté 3 — Auto-évaluation : diagnostic de l'ancienne lettre, checklist de la nouvelle",
    instructions: "Mesurez le chemin parcouru. Vous appliquez à la lettre originale d'Amina le diagnostic de la Procédure 1, puis la checklist de complétude à votre nouvelle lettre, et vous corrigez jusqu'à 10/10.",
    steps: [
      {
        title: 'Diagnostiquer la lettre originale (Procédure 1)',
        actions: [
          "Surlignez les 5 familles de formules génériques dans la lettre originale d'Amina (cas vécu).",
          "Appliquez le test du changement de destinataire phrase par phrase et comptez les phrases qui survivent.",
          "Ouvrez une copie de la grille nommée « DIAGNOSTIC_lettre-Amina.xlsx », onglet « Checklist complétude », et notez son score.",
        ],
      },
      {
        title: 'Vérifier votre nouvelle lettre (Procédure 7)',
        actions: [
          "Relisez votre lettre à voix haute et vérifiez la page unique.",
          "Dans une copie propre de la grille, cochez les 10 items de la checklist, un par un, en vérifiant sur la lettre.",
          "Si un item n'est pas coché, corrigez la lettre avant de la considérer terminée.",
        ],
      },
      {
        title: 'Comparer',
        actions: [
          'Écrivez en 3 lignes : score avant, score après, deux changements qui expliquent la différence.',
        ],
      },
    ],
    tip: "Le diagnostic de l'ancienne lettre d'Amina doit ressembler à celui de Joël : 5 familles, 0 phrase personnalisée, un score très bas (aucun fait, aucun chiffre, clôture passive). Seule la page unique est probablement respectée.",
    deliverable: "Le diagnostic chiffré de la lettre originale (familles, phrases survivantes, score) et la checklist de votre nouvelle lettre à 10/10.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable « Amina » est correct si…',
    items: [
      "La ligne 7 de la grille contient 2 à 3 faits concrets, vérifiables et datés, dont au moins un qui n'est pas donné dans le contexte du cas, et aucune des généralités du tableau (informations 3 et 6).",
      "L'intitulé en colonne A et dans l'objet est « Coordinateur/trice Logistique », copié tel quel de l'annonce, avec la référence NER-LOG-2026-014.",
      "Le Hook s'appuie sur un fait de l'organisation (l'extension à 3 nouveaux sites ou un autre fait) et ne pourrait pas être envoyé tel quel à une autre organisation.",
      "Le Hook ne commence pas par « Je vous écris pour postuler » et tient en 30 à 50 mots.",
      "Le paragraphe Valeur relie UNE réalisation (les 18 mois au Tchad) à UNE exigence de l'annonce citée mot pour mot, et ne contient aucun adjectif non démontré.",
      "Le Call-to-Action invite à échanger avec un verbe d'action, reprend l'objectif du Hook et ne contient aucune formule d'attente passive.",
      "La lettre tient sur une seule page, ne contient aucune consigne entre crochets et ne reprend aucune phrase de la version originale.",
      "La checklist de complétude indique 10/10 et le diagnostic de la lettre originale montre un score nettement inférieur.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice d'application — Votre propre lettre en 45 minutes",
    instructions: "Appliquez maintenant la méthode à une offre réelle qui vous intéresse vraiment, pas à une offre « pour s'entraîner ». Choisissez l'offre dans votre grille de tri du module 01 : une offre « prioritaire » uniquement. Chronométrez-vous ; la première fois, prévoyez jusqu'à 1 h 15.",
    steps: [
      { title: 'Diagnostic (20 min, une seule fois)', actions: ['Procédure 1 sur votre lettre habituelle : 5 familles, test du changement de destinataire, score de la checklist.'] },
      { title: 'Recherche (15 à 17 min)', actions: ["Procédure 2 : intitulé exact, 3 exigences citées, site, rapport annuel, LinkedIn, 2 à 3 faits triés, ligne 7 complète avec sources et dates."] },
      { title: 'Gabarit et Hook (8 min)', actions: ['Procédures 3 et 4 : en-tête, objet, salutation, puis Hook testé et resserré à 30-50 mots.'] },
      { title: 'Valeur et Call-to-Action (12 à 17 min)', actions: ['Procédures 5 et 6 : réalisation choisie par la matrice, exigence citée, formule « Chez…, j\'ai… — transférable à… », puis Call-to-Action actif.'] },
      { title: 'Relecture et envoi (8 min)', actions: ['Procédure 7 : relecture à voix haute, page unique, checklist à 10/10, PDF, e-mail et journal.'] },
      { title: 'Seconde lettre (45 min, un autre jour)', actions: ['Procédure 8 : nouvelle ligne de grille, nouveau Hook, nouvelle réalisation reliée à la nouvelle annonce.'] },
    ],
    deliverable: "Votre dossier de candidature : la ligne de grille complétée, la lettre en PDF d'une page, la checklist à 10/10, la ligne de journal, puis une seconde lettre adaptée à une autre organisation.",
  },
  {
    type: 'checklist',
    title: 'Votre lettre personnelle est correcte si…',
    items: [
      "Votre grille contient, pour cette candidature, au moins 2 faits concrets sourcés et datés, et aucune généralité.",
      "L'intitulé de l'objet est celui de l'annonce, copié tel quel, et le nom de l'organisation est celui de son site, orthographié sans faute.",
      "Le nom du destinataire est vérifié ; à défaut, « Madame, Monsieur » et le nom du service.",
      "Le Hook survit au test du changement de destinataire : il serait faux ou incohérent envoyé à une autre organisation.",
      "Le paragraphe Valeur contient une seule réalisation chiffrée, reliée à une exigence citée mot pour mot, et une information que votre CV ne contient pas.",
      "Aucun adjectif non démontré, aucune formule générique, aucune formule d'attente passive.",
      "Le Call-to-Action invite à échanger et reprend l'objectif du Hook.",
      "La lettre tient sur une page, a été relue à voix haute, et la checklist de complétude affiche 10/10.",
      "Votre deuxième lettre ne partage avec la première que sa structure.",
    ],
  },

  // ─────────────────────── PIÈGES, BILAN, SUITE ───────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Ouvrir par « Je vous écris pour postuler à… » ou « Suite à votre annonce parue le… » — ces formules reformulent une information que le recruteur possède déjà et signalent une lettre écrite sans effort. Parade : un Hook appuyé sur un fait de la grille.",
      "Réutiliser mot pour mot la même lettre pour plusieurs candidatures — changer uniquement le nom de l'organisation n'est pas une personnalisation, un recruteur expérimenté la repère en une phrase. Parade : reprendre les Procédures 2 à 4 à chaque candidature.",
      "Oublier de changer le nom de l'organisation ou du destinataire en dupliquant un fichier — c'est l'erreur la plus fréquente et la plus fatale. Parade : Ctrl+F du nom de la lettre précédente avant chaque envoi.",
      "Écrire une lettre trop longue qui répète le CV — si un paragraphe peut être remplacé par une ligne du CV, il ne sert à rien. Parade : chaque phrase apporte une information nouvelle, une page maximum.",
      "Confondre « montrer de l'enthousiasme » et « empiler des adjectifs » — une seule réalisation chiffrée vaut plus que cinq qualificatifs non démontrés. Parade : remplacer chaque adjectif par un fait.",
      "Terminer sur une formule d'attente passive — elle ferme la lettre au lieu de la propulser. Parade : un Call-to-Action actif qui propose un échange.",
      "Utiliser un fait sans source ou un chiffre arrondi « pour faire joli » — le recruteur connaît ses propres chiffres. Parade : colonne G de la grille, chaque fait sourcé et daté.",
      "Écrire à une personne dont vous n'avez pas vérifié le nom et la fonction actuelle — un nom faux est pire que « Madame, Monsieur ». Parade : vérifier sur la page carrières ou LinkedIn, sinon le nom du service.",
      "Affirmer une compétence exigée que vous n'avez pas (une langue, un outil) — l'entretien dévoilera l'écart. Parade : niveau réel sur le CV, plan daté si l'exigence est ferme, ou pas de candidature.",
      "Laisser une consigne entre crochets ou le titre « PARAGRAPHE 1 — LE HOOK » dans la lettre envoyée — Parade : Ctrl+F sur « [ » et relecture de la version PDF avant envoi.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez diagnostiqué une lettre générique avec 5 familles de formules, le test du changement de destinataire et un score sur 10 qui sert de point de départ.",
      "Vous avez mené une recherche de 15 minutes et rempli une ligne de la grille de personnalisation : 2 à 3 faits concrets, leur emplacement prévu, leur source et leur date.",
      "Vous avez préparé le gabarit Word : en-tête complet, objet avec l'intitulé exact de l'annonce, salutation nominative vérifiée.",
      "Vous avez écrit un Hook de 30 à 50 mots, appuyé sur un fait, qui ne pourrait pas partir chez une autre organisation.",
      "Vous avez rédigé un paragraphe Valeur qui relie UNE réalisation chiffrée à UNE exigence citée, sans recopier le CV.",
      "Vous avez rédigé un Call-to-Action actif, relu votre lettre à voix haute et obtenu 10/10 à la checklist de complétude.",
      "Vous avez une lettre d'une page en PDF prête à envoyer, une ligne de journal, et une méthode de 45 minutes que vous savez refaire sans dupliquer.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer, en une phrase, la différence de fonction entre un CV et une lettre de motivation.",
      "Je sais structurer une lettre en 3 paragraphes distincts (Hook, Valeur, Call-to-Action) tenant sur une page.",
      "J'ai identifié, pour une organisation cible réelle, au moins 2 faits concrets et récents exploitables dans une lettre.",
      "J'ai rédigé un Hook qui ne pourrait pas être envoyé tel quel à une autre organisation.",
      "J'ai rédigé un paragraphe Valeur qui relie une réalisation précise de mon parcours à une exigence du poste visé, sans reformuler mon CV.",
      "J'ai rédigé un Call-to-Action actif, sans formule d'attente passive.",
      "J'ai complété la grille de personnalisation et coché sa checklist de complétude avant d'envoyer ma lettre.",
      "J'ai gardé la lettre PDF, la ligne de grille et mon journal de candidatures à jour : ils me serviront à préparer les entretiens.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 04 — Préparation aux Tests Techniques & Études de Cas : votre lettre et votre CV vous ont ouvert la porte, vous y préparerez les épreuves de sélection — tests techniques en supply chain, finance, RH et gestion de projet, études de cas humanitaires, gestion du temps et défense de vos résultats sous pression.",
  },
]
