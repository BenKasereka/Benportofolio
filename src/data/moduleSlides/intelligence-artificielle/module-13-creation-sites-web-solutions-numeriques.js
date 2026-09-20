// Module 13 — IA pour la Création de Sites Web & Solutions Numériques — Du cahier des charges au site généré
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'IA pour la Création de Sites Web & Solutions Numériques',
    hook: "Du cahier des charges au site généré : choisir le bon outil no-code/IA, cadrer avant de générer, itérer précisément, et tester soi-même avant toute diffusion.",
  },
  {
    type: 'objectives',
    items: [
      "Identifier l'outil no-code/IA adapté à son besoin réel (site vitrine, application avec logique métier, prototype rapide) plutôt que le premier outil connu.",
      "Rédiger un cahier des charges complet — objectif, pages, fonctionnalités indispensables, style visuel, public cible — avant de générer quoi que ce soit.",
      "Construire un prompt de génération complet qui reprend ce cahier des charges, pour un résultat exploitable dès la première version.",
      "Itérer en langage courant sur un résultat déjà généré, avec des demandes de correction précises plutôt que des jugements vagues.",
      "Tester soi-même le résultat produit par l'IA avant toute diffusion, sans déléguer cette vérification à l'outil.",
    ],
  },
  {
    type: 'concept',
    title: 'Quatre outils qui ne se valent pas pour le même usage',
    body: "Il existe une multitude d'outils qui promettent de « créer un site en un prompt ». En pratique, quatre couvrent l'essentiel des besoins professionnels courants, et le critère de choix n'est jamais « lequel est le meilleur » dans l'absolu, mais deux questions concrètes : quel est le niveau de complexité réel du besoin, et quel est votre niveau d'autonomie technique ?",
  },
  {
    type: 'comparison-table',
    title: 'Quel outil pour quel besoin',
    columns: ['Besoin', 'Outil à privilégier', 'Pourquoi'],
    rows: [
      ['Site vitrine simple (présentation, contact)', 'Lovable ou v0', "Génération rapide d'une interface soignée, sans logique métier à gérer"],
      ['Application avec logique métier (calcul, données, comptes)', 'Bolt', "Génère une structure applicative complète, prête à être testée et déployée"],
      ['Modification d\'un projet de code existant, contrôle fin', 'Claude Code', "Agent capable de lire et modifier directement les fichiers d'un vrai projet (requiert l'aisance du Module 10)"],
      ['Prototype ou maquette à montrer rapidement', 'v0 ou Lovable', "Aperçu immédiat, modifiable en continu par échange en langage courant"],
    ],
  },
  {
    type: 'concept',
    title: 'ChatGPT et Copilot restent utiles en amont',
    body: "Dans tous les cas, ChatGPT ou Copilot aident à structurer le cahier des charges ou à reformuler une idée encore floue avant de la transmettre à l'outil de génération choisi — ce n'est pas l'outil qui génère le site qui doit clarifier le besoin à votre place.",
  },
  {
    type: 'warning',
    title: 'Pourquoi cadrer avant de générer change tout le résultat',
    items: [
      "Un prompt du type « fais-moi un site pour mon activité de conseil » produit un résultat générique : structure par défaut, texte de remplissage, style arbitraire — un résultat qu'il faut reprendre presque intégralement.",
      "Un cahier des charges rédigé avant de générer quoi que ce soit change la nature du résultat : l'IA ne devine plus le besoin, elle l'exécute.",
      "Trois à cinq phrases précises suffisent la plupart du temps, à condition de couvrir réellement objectif, pages, fonctionnalités, style visuel et public cible.",
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'No-code/IA', definition: "Catégorie d'outils qui génèrent une interface ou une application fonctionnelle à partir d'une description en langage naturel, sans écriture manuelle de code." },
      { term: 'Cahier des charges (brief)', definition: "Document court rédigé avant toute génération, qui fixe l'objectif, les pages ou écrans, les fonctionnalités indispensables, le style visuel et le public cible." },
      { term: 'Itération', definition: "Cycle de correction en langage courant appliqué à un résultat déjà généré, par opposition à une régénération complète depuis zéro à chaque ajustement." },
      { term: 'Déploiement', definition: "Mise en ligne effective du site ou de l'application, avec une adresse réellement accessible et testable, par opposition à un simple aperçu visuel." },
    ],
  },
  {
    type: 'process',
    title: 'Le pipeline complet, du besoin au site testé',
    steps: [
      { title: '1. Choisir l\'outil adapté', body: "Situer le besoin sur la grille de décision : page simple → Lovable/v0 ; logique métier → Bolt ; modification d'un projet existant → Claude Code. Ce choix n'est pas définitif." },
      { title: '2. Rédiger le cahier des charges (norme CLARTE)', body: "Objectif, pages nécessaires, fonctionnalités indispensables séparées de celles qui peuvent attendre, style visuel avec référence, public cible, contraintes — avant toute génération." },
      { title: '3. Générer une première version (norme CLARTE)', body: "Reprendre intégralement le cahier des charges dans le prompt de génération envoyé à l'outil choisi — un cahier des charges resté dans un fichier séparé ne sert à rien." },
      { title: '4. Itérer en langage courant (méthode STAR)', body: "Formuler chaque correction avec l'état actuel constaté, l'objectif précis et un critère vérifiable, plutôt qu'un jugement vague comme « améliore le design »." },
      { title: '5. Tester soi-même avant diffusion', body: "Vérifier chaque lien, le formulaire, l'affichage mobile, et l'absence de texte de remplacement — l'IA ne teste pas à votre place." },
    ],
  },
  {
    type: 'concept',
    title: 'Une correction vague ne produit jamais un résultat prévisible',
    body: "« Améliore le design » ne donne à l'IA aucune direction exploitable, elle ne peut que deviner, et le résultat suivant a autant de chances d'être pire que meilleur. À l'inverse, « le bouton principal doit être plus visible, en haut à droite » donne une direction précise, vérifiable, et qui produit un résultat prévisible.",
    highlight: "Une bonne demande de correction nomme l'élément concerné, l'état actuel constaté, et le résultat attendu — sur la méthode STAR.",
  },
  {
    type: 'case-study',
    title: 'Étude de cas — Landing page pour une formation courte, sans brief exploitable',
    scenario: "Un formateur indépendant vous sollicite avec pour seule consigne : « fais-moi quelque chose qui donne envie de s'inscrire, je n'ai pas le temps de tout t'expliquer. » Aucun cahier des charges, aucune maquette, aucun texte prêt. Votre mission : produire en une session le cahier des charges, la landing page générée, puis deux corrections ciblées et réalistes.",
    steps: [
      "Compléter le cahier des charges : objectif, sections de la page, fonctionnalités indispensables vs secondaires, style visuel, public cible, contraintes (mentions légales, collecte de contact).",
      "Choisir un outil no-code/IA et rédiger le prompt de génération complet reprenant ce cahier des charges.",
      "Itération 1 : le bouton d'inscription n'apparaît qu'en haut de page — demander une barre fixe visible en permanence pendant le défilement, sans masquer le contenu.",
      "Itération 2 : une section à trois blocs s'affiche écrasée sur mobile — demander un empilement vertical uniquement sur petit écran, sans changer la version ordinateur.",
    ],
  },
  {
    type: 'warning',
    title: 'Les 5 pièges fréquents de ce module',
    items: [
      "Demander un site « complet » en un seul prompt vague au lieu de cadrer d'abord — le temps gagné par la génération instantanée est perdu dans les reprises qui suivent.",
      "Formuler une demande de correction trop vague comme « améliore le design », qui ne donne aucune direction exploitable.",
      "Ne jamais tester soi-même le résultat généré avant de le partager ou de le mettre en ligne.",
      "Ignorer la version mobile alors que la majorité du trafic web y passe.",
      "Ne pas vérifier les mentions légales et la collecte de données personnelles avant de publier un formulaire généré automatiquement.",
    ],
  },
  {
    type: 'exercise',
    title: 'Landing page pour une formation courte',
    instructions: "Complétez le gabarit de cahier des charges pour cette landing page (objectif, sections, fonctionnalités indispensables vs secondaires, style, public cible, contraintes). Choisissez un outil no-code/IA et rédigez le prompt de génération complet reprenant ce cahier des charges. Rédigez deux prompts de correction ciblée (méthode STAR) sur deux problèmes distincts et réalistes constatés en testant vous-même le résultat.",
    deliverable: "Le cahier des charges complété, le prompt de génération utilisé, les deux prompts d'itération, et une courte note (5 à 8 lignes) expliquant ce que chaque itération a corrigé et comment vous l'avez vérifié avant de considérer la page prête à partager.",
  },
  {
    type: 'recap',
    items: [
      "Je sais choisir l'outil no-code/IA adapté à mon besoin selon la grille de décision (Lovable, v0, Bolt, Claude Code).",
      "J'ai rédigé un cahier des charges complet avant toute génération.",
      "Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.",
      "Je sais formuler une demande de correction précise (élément concerné, état actuel, résultat attendu) plutôt qu'un jugement vague.",
      "J'ai testé moi-même chaque lien, bouton et formulaire du résultat généré avant de le partager.",
      "J'ai vérifié l'affichage mobile de mon site, pas uniquement l'affichage sur ordinateur.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 14 — Big Data Analysis avec Claude (avec Code).',
  },
]
