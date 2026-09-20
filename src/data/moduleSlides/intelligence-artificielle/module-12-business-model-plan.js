// Module 12 — IA pour le Business Model & le Business Plan — Structurer sans déléguer la décision
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'IA pour le Business Model & le Business Plan',
    hook: "Structurer, reformuler, challenger : l'IA est un excellent copilote pour un Business Model Canvas ou un plan financier — mais jamais un décideur final en stratégie d'entreprise.",
  },
  {
    type: 'objectives',
    items: [
      "Construire et challenger un Business Model Canvas (BMC — le schéma en 9 blocs qui résume un modèle économique sur une page) en utilisant l'IA comme partenaire de brainstorming, puis comme contradicteur systématique.",
      "Faire produire une étude de marché synthétisée, en sachant tracer et vérifier chaque chiffre cité contre sa source réelle.",
      "Structurer un plan financier prévisionnel simplifié avec des hypothèses explicites, sans déléguer à l'IA la fiabilité des calculs.",
      "Resserrer un pitch et un executive summary (la synthèse d'une page qui ouvre un business plan) en utilisant l'IA comme lecteur critique, plutôt que comme rédacteur final.",
      "Distinguer, à chaque étape, ce qui relève du jugement stratégique (à trancher soi-même) de ce qui relève de la structuration (délégable à l'IA).",
    ],
  },
  {
    type: 'concept',
    title: 'Un excellent copilote de structuration',
    body: [
      "Face à un Business Model Canvas vierge ou un pitch trop long, l'IA rend un service réel : elle organise une pensée confuse en blocs cohérents, reformule une idée floue en phrase actionnable, et challenge une hypothèse en quelques secondes.",
      "Un entrepreneur qui itère seul tombe presque toujours dans le même piège : ne challenger que les blocs qui l'intéressent (produit, proposition de valeur) et négliger les autres (structure de coûts, partenaires clés). Une IA bien sollicitée traite les 9 blocs avec la même rigueur, à condition qu'on le lui demande explicitement.",
    ],
  },
  {
    type: 'warning',
    title: 'Mais un mauvais décideur final en stratégie',
    items: [
      "Une IA générative n'a ni responsabilité légale ou financière sur l'issue du projet, ni intuition du marché réel — celle qui vient du terrain et des vrais clients.",
      "Elle peut proposer trois positionnements différents avec la même assurance rédactionnelle pour chacun, sans jamais dire lequel elle « préfère » au sens d'un jugement engagé.",
      "Si on lui demande de trancher, sa réponse ressemble à une décision mais n'en est pas une : c'est une extrapolation statistique de ce qui sonne plausible, pas une évaluation de votre marché spécifique.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce qu\'il faut retenir opérationnellement',
    body: "À chaque étape de ce module, l'IA structure, propose, challenge et reformule — mais la décision finale (quel positionnement retenir, quel prix fixer, quelle hypothèse de croissance est réaliste) reste entièrement de votre ressort.",
    highlight: "Un Business Model Canvas ou un business plan qui porte les décisions de l'IA plutôt que les vôtres n'est pas plus faible sur la forme — il est vide sur le fond, parce qu'aucune décision stratégique réelle n'a été prise par la personne qui en portera les conséquences.",
  },
  {
    type: 'stat-callout',
    stat: '0',
    caption: "chiffre de marché IA utilisable sans source vérifiée",
    context: "Aucun chiffre de marché, de croissance sectorielle ou de taille d'audience cité par une IA ne doit être utilisé dans un document destiné à un tiers sans que sa source réelle ait été retrouvée et vérifiée.",
  },
  {
    type: 'concept',
    title: 'Le risque des chiffres de marché hallucinés',
    body: "Une IA peut citer une taille de marché avec exactement le même niveau de confiance rédactionnelle qu'un chiffre réellement sourcé — rien dans le ton ne distingue une estimation inventée d'une donnée réelle. Sur un chiffre de marché, l'hallucination est particulièrement traître : elle a l'air précise (souvent avec une ou deux décimales) et s'intègre naturellement dans un paragraphe par ailleurs solide.",
    highlight: "Perplexity attache des citations vérifiables à ses réponses — mais même une citation affichée doit être ouverte et lue, jamais simplement supposée fiable.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Business Model Canvas (BMC)', definition: "Cadre de structuration en 9 blocs (segments de clientèle, proposition de valeur, canaux, relations clients, flux de revenus, ressources clés, activités clés, partenaires clés, structure de coûts) qui donne une vue d'ensemble d'un modèle économique sur une page." },
      { term: 'TAM / SAM / SOM', definition: "Trois niveaux de taille de marché emboîtés : TAM (marché total théorique), SAM (part réellement accessible), SOM (part réaliste captable à moyen terme) — que l'IA aide à structurer mais jamais à inventer sans source." },
      { term: 'Hypothèse', definition: "Toute affirmation chiffrée ou stratégique non encore confirmée par une source externe ou un test terrain — doit être marquée comme telle, jamais présentée comme un fait acquis." },
      { term: 'Executive summary', definition: "Synthèse d'une page qui ouvre un business plan et que la majorité des lecteurs pressés liront seule — doit porter le message central sans nécessiter la lecture du reste." },
      { term: 'Point mort (break-even)', definition: "Niveau d'activité à partir duquel les revenus couvrent l'ensemble des coûts — une question que l'IA aide à poser clairement, sans jamais garantir l'exactitude du calcul." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Quel outil pour quelle étape',
    columns: ['Outil', 'Rôle dans ce module'],
    rows: [
      ['ChatGPT', "Brainstorming pour un premier jet des 9 blocs du BMC, et génération rapide de variantes de pitch à comparer"],
      ['Claude', "Phase de challenge critique : repérer les incohérences entre blocs, les affirmations non étayées, les hypothèses financières qui se contredisent"],
      ['Perplexity', "Toute recherche de marché : sources vérifiables et actualisées attachées aux réponses, condition indispensable avant d'utiliser un chiffre"],
      ['Gemini', "Analyser un support visuel existant (canevas concurrent, pitch deck) et transposer une trame de plan financier dans Google Sheets"],
    ],
  },
  {
    type: 'process',
    title: 'Le pipeline complet, du canevas vierge au pitch resserré',
    steps: [
      { title: '1. Construction du BMC (norme CLARTE)', body: "Remplir les 9 blocs avec l'IA comme partenaire de brainstorming, puis demander explicitement un challenge bloc par bloc — sans lui laisser proposer de décision de positionnement." },
      { title: '2. Étude de marché sourcée (méthode STAR)', body: "Ne jamais demander une taille de marché sans demander la source exacte dans le même mouvement ; format tableau (donnée, source, année), sans estimation par défaut si aucune source fiable n'existe." },
      { title: '3. Plan financier simplifié (norme CLARTE)', body: "Structurer les hypothèses d'un compte de résultat sur 12 mois, chaque ligne avec son hypothèse explicite entre crochets ; aucun total calculé sur une hypothèse non fournie." },
      { title: '4. Resserrement du pitch (méthode STAR)', body: "Ne jamais faire réécrire un pitch depuis une page blanche : le faire challenger et resserrer. Diagnostic (coupes, affirmations à étayer, questions d'un investisseur sceptique) livré avant la version resserrée, jamais l'inverse." },
    ],
  },
  {
    type: 'concept',
    title: 'Étape 2 en détail — vérifier chaque source, sans exception',
    body: "Une fois la réponse obtenue, ouvrez chaque source citée une par une : si un lien ne mène à rien, si l'organisme cité n'existe pas, ou si le chiffre trouvé diverge de celui annoncé par l'IA, ce chiffre est écarté du business plan — sans exception.",
    highlight: "Consignez chaque vérification (hypothèse / source ou preuve / statut) : c'est cette traçabilité qui protège le document final.",
  },
  {
    type: 'case-study',
    title: 'Étude de cas — GomaLogis Conseil, service de conseil logistique pour PME',
    scenario: "Vous portez un projet de conseil en optimisation logistique pour PME de la région de Goma (audit, outils de suivi de stock, formation), déjà testé sur trois missions en indépendant, sans jamais avoir formalisé canevas, étude de marché ou plan financier. Un partenaire potentiel vous propose un rendez-vous dans dix jours, à condition de présenter un dossier structuré.",
    steps: [
      "Remplir les 9 blocs du BMC à partir du projet, puis obtenir un challenge ciblé : cohérence entre segment de clientèle et canaux de vente, sous-estimation possible du temps de déplacement terrain.",
      "Obtenir une estimation du marché du conseil aux PME via Perplexity, puis documenter par écrit la vérification d'un chiffre choisi : chiffre et source annoncés, ce que la source réelle donne, décision finale (retenu, retenu avec réserve, ou écarté).",
      "Construire une trame de compte de résultat sur 12 mois (revenus de mission, coûts de déplacement, coûts d'outils, prospection non facturée), en confrontant chaque hypothèse à la réalité du secteur.",
      "Rédiger un pitch de trois minutes, puis le resserrer sans changer la voix ni l'histoire personnelle du porteur de projet.",
    ],
  },
  {
    type: 'warning',
    title: 'Les pièges fréquents de ce module',
    items: [
      "Accepter un chiffre de taille de marché sans jamais vérifier la source citée — un chiffre halluciné a exactement la même apparence de sérieux qu'un chiffre réel.",
      "Laisser l'IA « décider » d'un positionnement au lieu de challenger les options et trancher soi-même — la bonne question est toujours « quelles sont les faiblesses de chaque option ? », suivie d'une décision prise par vous.",
      "Construire un plan financier avec des hypothèses irréalistes suggérées par l'IA sans les confronter à la réalité du secteur.",
      "Présenter un BMC généré par IA sans jamais l'avoir testé auprès de vrais clients potentiels.",
      "Laisser l'IA resserrer un pitch au point de lui faire perdre la voix et l'authenticité du porteur de projet.",
    ],
  },
  {
    type: 'exercise',
    title: 'Construire le dossier GomaLogis Conseil',
    instructions: "Remplissez les 9 blocs du BMC pour GomaLogis Conseil puis obtenez le challenge de l'IA. Obtenez une estimation de marché sourcée avec Perplexity et documentez par écrit la vérification d'un chiffre choisi (chiffre et source annoncés, ce que vous trouvez en ouvrant la source, votre décision finale). Construisez une trame de plan financier sur 12 mois en confrontant chaque hypothèse à la réalité du secteur. Rédigez et resserrez un pitch de trois minutes sans changer votre voix ni votre histoire.",
    deliverable: "Le canevas complété, la fiche de vérification de source rédigée à la main, le plan financier et le pitch resserré — un dossier prêt à présenter en dix jours, sans dépasser 2 pages pour la partie plan financier et pitch.",
  },
  {
    type: 'recap',
    items: [
      "Je sais nommer les 9 blocs du Business Model Canvas et remplir chacun avec l'aide de l'IA.",
      "J'ai obtenu de l'IA un challenge explicite de mon canevas, bloc par bloc, plutôt qu'une simple validation.",
      "Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.",
      "J'ai vérifié à la main au moins un chiffre de marché cité par l'IA contre sa source réelle, et documenté cette vérification.",
      "Je sais structurer une trame de plan financier simplifié avec des hypothèses explicites, jamais présentées comme des chiffres acquis.",
      "J'ai fait challenger un pitch existant par l'IA sans lui laisser réécrire l'intégralité du texte à ma place.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 13 — IA pour la Création de Sites Web & Solutions Numériques.',
  },
]
