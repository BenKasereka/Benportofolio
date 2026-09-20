// Module 10 — IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot',
    hook: "Déléguer une automatisation interne (renommer, fusionner, extraire) à l'IA sans savoir coder — et sans jamais l'exécuter sur de vraies données sans l'avoir testée d'abord.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer à quoi servent VS Code, GitHub Copilot et Claude Code pour un profil métier qui ne sait pas coder, sans les confondre avec des logiciels réservés aux développeurs.",
      "Décrire à l'IA un besoin d'automatisation interne réaliste en langage courant, assez précisément pour obtenir un script directement utilisable.",
      "Lire un script généré par l'IA dans ses grandes lignes — chemin de dossier, boucle, action de suppression ou de renommage — sans savoir programmer.",
      "Exiger et vérifier un mode test (dry-run) avant toute exécution d'un script sur des données réelles, comme réflexe systématique.",
      "Exécuter un script, en vérifier le résultat et le documenter pour qu'il soit réutilisable par soi-même ou un collègue.",
    ],
  },
  {
    type: 'concept',
    title: 'Une barrière technique qui s\'est nettement abaissée',
    body: [
      "Pendant longtemps, automatiser une tâche sur des fichiers voulait dire soit la faire à la main pendant des heures, soit attendre qu'un développeur ait le temps de s'en occuper.",
      "Renommer 200 fichiers selon une convention précise, fusionner 12 exports Excel mensuels, extraire les dates et montants de 80 factures PDF : ce ne sont pas des projets informatiques, mais des corvées administratives qu'un script de quelques lignes résout en quelques secondes — et qu'une IA peut aujourd'hui écrire à partir d'une simple description en français.",
    ],
    highlight: "Vous n'avez plus besoin d'apprendre un langage de programmation : seulement décrire votre besoin avec précision, lire le résultat avec du recul, et le tester avant de l'utiliser sur de vraies données.",
  },
  {
    type: 'comparison-table',
    title: 'Trois outils, trois rôles complémentaires',
    columns: ['Outil', 'Rôle', 'Usage dans ce module'],
    rows: [
      ['Visual Studio Code (VS Code)', "Éditeur de texte gratuit, façon bloc-notes perfectionné", "Ouvrir un dossier, voir ses fichiers, ouvrir un terminal pour coller et exécuter un script — rien de plus"],
      ['GitHub Copilot', "Assistant IA intégré directement dans VS Code", "Décrire un besoin en langage naturel, obtenir le code, une correction ou une explication sans changer d'outil"],
      ['Claude Code', "Agent IA en ligne de commande, multi-étapes", "Écrire, tester et corriger un script lui-même, pour une automatisation déléguée de bout en bout (approfondi au Module 13)"],
      ['ChatGPT (alternative)', "Génère un script à partir d'une description, sans installation", "Premier jet rapide, sans avoir besoin d'ouvrir VS Code"],
    ],
  },
  {
    type: 'warning',
    title: 'Le principe de sécurité fondamental de ce module',
    items: [
      "Ne jamais exécuter un script généré par l'IA directement sur des données réelles sans l'avoir testé d'abord sur une copie ou un échantillon.",
      "Un script de renommage ou de fusion agit souvent de façon irréversible — un fichier renommé, écrasé ou fusionné à tort ne se récupère pas toujours, même quand le script \"avait l'air correct\".",
      "Ce principe structure tout le guide pratique : décrire, lire, tester en mode simulation, puis seulement exécuter sur les vraies données.",
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Script', definition: "Fichier d'instructions écrites dans un langage de programmation (souvent Python ici), exécuté automatiquement du début à la fin — l'équivalent d'une recette de cuisine suivie sans intervention manuelle." },
      { term: 'Mode test / dry-run / simulation', definition: "Mode d'exécution où le script affiche ce qu'il ferait sans réellement rien modifier sur le disque — le filet de sécurité indispensable avant une exécution réelle." },
      { term: 'Chemin de dossier (path)', definition: "L'adresse exacte d'un fichier ou dossier sur l'ordinateur (ex. C:\\Factures\\2026) ; une erreur de chemin est la cause la plus fréquente d'un script qui ne trouve pas ses fichiers." },
      { term: 'Boucle « pour chaque fichier »', definition: "La partie du script qui répète la même action sur tous les fichiers d'un dossier l'un après l'autre — permet de traiter 150 fichiers aussi facilement qu'un seul." },
      { term: 'Terminal intégré', definition: "La fenêtre en ligne de commande à l'intérieur de VS Code, où l'on tape la commande qui lance l'exécution du script." },
    ],
  },
  {
    type: 'concept',
    title: 'La norme CLARTE pour décrire un besoin d\'automatisation',
    body: "Contexte (qui vous êtes, quels fichiers) ; Livrable attendu (le script exact voulu, le format de sortie) ; Audience/rôle (le niveau technique réel du lecteur) ; Restrictions (bibliothèques déjà incluses, comportement en cas d'erreur) ; Ton & style (sans jargon, langage clair) ; Exemples (un nom de fichier ou un format attendu). Une bibliothèque de prompts déjà remplis est fournie dans 04-templates/bibliotheque-prompts-delegation-technique.xlsx.",
  },
  {
    type: 'process',
    title: 'Le pipeline complet en 5 étapes',
    steps: [
      { title: '1. Prise en main de VS Code', body: "Ouvrir le dossier concerné (Fichier > Ouvrir un dossier), repérer la liste des fichiers, ouvrir le terminal intégré (Terminal > Nouveau terminal, ou Ctrl + `)." },
      { title: '2. Décrire le besoin et obtenir un script', body: "Utiliser un prompt structuré (norme CLARTE) plutôt qu'une phrase vague comme « fais-moi un script pour renommer mes fichiers »." },
      { title: '3. Lire les grandes lignes du script', body: "Demander systématiquement à l'IA d'expliquer son script section par section : où est le dossier à adapter, où est la boucle, où est l'action réelle de renommage." },
      { title: '4. Tester en mode dry-run', body: "Exiger un mode test qui affiche ce que le script ferait, exécuté d'abord sur une copie du dossier — jamais sur l'original." },
      { title: '5. Exécuter, vérifier et documenter', body: "Passer en mode réel, vérifier un échantillon des fichiers, puis demander à l'IA de documenter le script pour une réutilisation future." },
    ],
  },
  {
    type: 'concept',
    title: 'Étape 3 en détail — lire sans être développeur',
    body: "Il ne s'agit pas de comprendre chaque ligne, mais de repérer ce qui touche réellement aux fichiers. Le prompt d'explication précise : « Explique-moi, section par section, ce que fait chaque partie, en une phrase simple, sans terme technique non expliqué. Indique où se trouve le nom du dossier à adapter, où se trouve la boucle qui lit chaque fichier, et où se trouve la partie qui renomme réellement un fichier. Ne me donne aucun nouveau code à ce stade. »",
    highlight: "C'est cette étape d'explication — et non la lecture brute du code — qui permet de savoir ce qu'un script va réellement faire avant de l'exécuter.",
  },
  {
    type: 'concept',
    title: 'Étape 4 en détail — le mode test, non négociable',
    body: "Le prompt (méthode STAR) demande d'ajouter une variable simple, par exemple MODE_TEST = True, qui affiche l'ancien et le nouveau nom prévu pour chaque fichier sans rien renommer réellement ; passée à False, le script exécute pour de vrai. Le résultat attendu inclut toujours une phrase précisant exactement quelle ligne changer pour passer en mode réel.",
    highlight: "Exécutez d'abord ce mode test sur une copie du dossier, jamais directement sur l'original, même en mode test.",
  },
  {
    type: 'case-study',
    title: 'Étude de cas — 150 factures fournisseurs avant la clôture comptable',
    scenario: "La comptabilité vous transmet 150 PDF de factures aux noms hétérogènes (avec ou sans date, casse variable, certains noms de scanner comme scan0047.pdf sans information exploitable), avec la consigne : il faut que ces factures soient nommées pareil avant la clôture. Votre mission : obtenir un script qui renomme l'ensemble selon AAAA-MM-JJ_NomFournisseur.pdf, testé en toute sécurité avant exécution réelle.",
    steps: [
      "Décrire le besoin avec un prompt CLARTE précisant le volume réel et le cas des fichiers non identifiables, à laisser inchangés avec un message plutôt que mal renommés.",
      "Appliquer le prompt d'explication section par section avant toute exécution.",
      "Ajouter un mode test (méthode STAR) qui affiche l'ancien/nouveau nom pour chacun des 150 fichiers, ou « non identifiable » pour les autres.",
      "Exécuter le mode test sur une copie, vérifier 15 à 20 fichiers répartis dans le dossier, noter tout renommage douteux avant de continuer.",
      "Passer en mode réel, vérifier un échantillon, puis documenter le script pour la prochaine clôture.",
    ],
  },
  {
    type: 'warning',
    title: 'Les 4 pièges fréquents de ce module',
    items: [
      "Exécuter un script directement sur les fichiers originaux sans jamais l'avoir testé sur une copie — un script qui « a l'air correct » peut se comporter différemment sur des cas particuliers réels (accents, espaces, extensions en majuscules).",
      "Coller des données confidentielles dans un outil IA public pour « juste demander un script » — décrivez la structure avec un exemple fictif plutôt que de déposer un vrai fichier de factures.",
      "Accepter un script sans le lire du tout, sous prétexte de ne pas être développeur — l'étape d'explication en langage clair existe précisément pour éviter cela.",
      "Lancer une opération de masse irréversible sans garder de sauvegarde du dossier d'origine — une sauvegarde coûte quelques secondes contre plusieurs heures de reconstitution manuelle.",
    ],
  },
  {
    type: 'exercise',
    title: 'Renommer 150 factures fournisseurs en toute sécurité',
    instructions: "En vous inspirant du Prompt 1 de ce module, rédigez votre propre prompt de description (norme CLARTE) adapté à un dossier de 150 factures PDF aux noms hétérogènes, avec des fichiers de scanner non identifiables. Obtenez le script, faites-le expliquer section par section (Prompt 2), ajoutez-lui un mode test (Prompt 3, méthode STAR), vérifiez 15 à 20 fichiers sur une copie, puis exécutez en mode réel et documentez le script pour réutilisation (Prompt 4).",
    deliverable: "Le script final documenté avec son mode test, la liste des fichiers laissés inchangés avec la raison, et une note de trois phrases résumant la procédure pour un collègue qui devra la refaire dans six mois.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer la différence de rôle entre VS Code, GitHub Copilot et Claude Code pour un usage non-développeur.",
      "Je sais décrire un besoin d'automatisation à l'IA avec un prompt structuré (CLARTE/STAR), plutôt qu'une demande vague.",
      "Je sais lire un script dans ses grandes lignes : chemin de dossier, boucle « pour chaque fichier », action de renommage ou de suppression.",
      "Je n'exécute jamais un script sur des données réelles sans être passé par un mode test sur une copie au préalable.",
      "J'ai documenté au moins un script pour qu'il soit réutilisable par moi-même ou un collègue non-développeur.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 11 — IA pour le Marketing & la Communication.',
  },
]
