// Module 11 — IA pour le Marketing & la Communication
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran. Style aligné sur module-01-introduction-ia-generatives.js.
export default [
  {
    type: 'cover',
    title: 'IA pour le Marketing & la Communication',
    hook: "Le rapport que personne ne lit en dehors de votre équipe contient déjà toute la matière d'un bon post : ce module vous apprend à le transformer en quelques minutes, et à choisir le bon outil pour l'image qui l'accompagne.",
  },
  {
    type: 'objectives',
    items: [
      "Transformer un document professionnel existant (rapport, fiche technique, compte-rendu) en support de communication adapté à un canal précis, en identifiant d'abord le message central et les paramètres du nouveau format.",
      "Choisir le bon outil d'IA pour générer un visuel marketing selon le besoin réel — visuel rapide interne, infographie de données, post réseau social, visuel de présentation — plutôt que par habitude.",
      "Connaître les forces et les limites concrètes des quatre outils de génération visuelle comparés dans ce module (ChatGPT/DALL-E, Claude, Copilot Designer, Gemini).",
      "Repérer, avant toute publication, les défauts caractéristiques d'un visuel généré par IA et savoir quand corriger dans un outil de retouche plutôt que de régénérer en boucle.",
      "Appliquer la norme CLARTE et la méthode STAR à des prompts de transformation de contenu et de génération d'image.",
    ],
  },
  {
    type: 'concept',
    title: 'Un cas d\'usage à fort rendement : le contenu existe déjà',
    body: [
      "Une organisation produit en permanence des documents de fond : rapports d'activité, fiches techniques, comptes-rendus de projet, notes de synthèse. Ce contenu a déjà demandé le travail le plus coûteux — rassembler les faits, les vérifier, les structurer — mais il reste presque toujours enfermé dans son format d'origine, un document interne que personne en dehors de l'équipe ne lira jamais.",
      "Le réflexe le plus fréquent face à un besoin de communication est de repartir de zéro : ouvrir une page blanche et rédiger un post comme s'il n'existait aucune matière préalable. C'est une perte de temps et souvent une perte de précision, car le document source contient déjà les chiffres exacts et la structure logique que l'auteur du post improvisé devra reconstituer de mémoire.",
    ],
    highlight: "La bonne approche est inverse : partir du document existant et le reformater pour une audience et un canal différents. Le contenu de fond ne change pas ; ce qui change, c'est la longueur, le ton, l'accroche et la structure de lecture.",
  },
  {
    type: 'concept',
    title: 'Deux repères à fixer avant tout prompt de transformation',
    body: "Le message central est l'idée unique et prioritaire qu'un document source doit transmettre une fois réduit à sa version la plus courte — le point de départ obligatoire de toute transformation, avant même de penser au ton. Le format cible regroupe les contraintes du canal choisi (longueur maximale, ton attendu, présence ou non d'un visuel, audience réelle) : il doit être fixé avant de demander la transformation, pas après. Fournissez ensuite le document complet à l'IA plutôt qu'un résumé que vous en auriez fait, pour qu'elle travaille sur les faits exacts.",
  },
  {
    type: 'concept',
    title: 'La norme CLARTE pour structurer un prompt de transformation',
    body: "Tout prompt professionnel structuré combine six éléments : Contexte (qui vous êtes, dans quel cadre, quel document de départ) ; Livrable attendu (le résultat exact voulu — format, longueur, structure) ; Audience / rôle (le rôle que doit endosser l'IA, et pour qui elle produit) ; Restrictions (ce qu'il ne faut PAS faire, limites de fidélité au document source) ; Ton & style (registre attendu) ; Exemples (un exemple de format ou de sortie attendue, si possible).",
    highlight: "Pour un contenu destiné à des donateurs ou partenaires externes, la restriction \"n'invente et n'arrondis aucun chiffre absent du document source\" n'est jamais négociable.",
  },
  {
    type: 'concept',
    title: 'La méthode STAR pour un prompt en plusieurs étapes',
    body: "Pour les cas qui demandent un raisonnement en plusieurs étapes plutôt qu'une simple reformulation, on utilise STAR appliqué au prompting : Situation (description factuelle du document ou du besoin de départ) ; Tâche (objectif précis à atteindre) ; Action (ce que l'IA doit concrètement exécuter, étape par étape) ; Résultat (le livrable final et son critère de réussite). Elle est particulièrement adaptée aux prompts de génération d'image, où le format technique et les exclusions doivent être précisés étape par étape.",
  },
  {
    type: 'comparison-table',
    title: 'Panorama réaliste des quatre outils de génération d\'image',
    columns: ['Outil', 'Ce qu\'il fait bien', 'Sa limite à connaître'],
    rows: [
      ['ChatGPT (moteur DALL-E)', "Le plus créatif et rapide pour une image originale à partir d'une simple description (illustration, ambiance, couverture).", "Le texte intégré à l'image (titre, slogan, chiffre) est très souvent déformé, mal orthographié ou illisible."],
      ['Claude', "Écrit du code SVG ou HTML/CSS produisant un visuel net à texte parfaitement lisible : bannière, infographie, schéma de comparaison.", "Ne génère pas d'image nativement — c'est une génération par code, pas par rendu direct d'image."],
      ['Copilot Designer', "Intégré à Microsoft 365 (Office, Teams) : visuels rapides d'allure professionnelle pour des supports internes, sans quitter l'environnement.", "La force est la rapidité d'intégration plus que la précision créative."],
      ['Gemini', "Intégré à Google Workspace (Docs, Slides) : génère un visuel sans sortir du document en cours de rédaction.", "Mêmes limites de fiabilité du texte intégré que les autres générateurs d'image classiques."],
    ],
  },
  {
    type: 'process',
    title: 'Le pipeline complet — du document existant au visuel diffusé',
    steps: [
      { title: '1. Transformer le document en post (ChatGPT, CLARTE)', body: "Fournir le document complet, préciser le message central et le format cible, puis fixer la structure attendue (accroche, résultats chiffrés, conclusion) sans jamais inventer de chiffre." },
      { title: '2. Visuel d\'illustration sans texte intégré (ChatGPT/DALL-E, STAR)', body: "Réservé à un visuel sans message écrit critique : préciser le format technique exact (dimensions, style) et exclure tout texte, logo ou visage identifiable." },
      { title: '3. Infographie chiffrée (Claude en SVG, CLARTE)', body: "Dès qu'un texte exact ou des chiffres précis doivent apparaître dans l'image, demander le code SVG complet plutôt qu'un générateur d'image classique." },
      { title: '4. Visuel interne rapide (Copilot Designer, STAR)', body: "Pour une bannière ou un visuel diffusé en interne sous délai serré, sans budget créatif : un visuel simple exploitable immédiatement, sans retouche lourde." },
      { title: '5. Visuel intégré au document (Gemini, CLARTE)', body: "Quand le support final est rédigé dans Google Docs ou Slides, générer l'image directement dans le document pour éviter un aller-retour d'export/import." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Tableau de synthèse — quel outil pour quel besoin marketing',
    columns: ['Besoin marketing', 'Outil recommandé', 'Pourquoi'],
    rows: [
      ['Visuel rapide pour un support interne (newsletter d\'équipe, diapositive de réunion)', 'Copilot Designer', 'Rapidité et intégration directe à Office/Teams, sans exigence de précision créative élevée'],
      ['Infographie de données avec chiffres exacts', 'Claude (code SVG/HTML)', 'Texte et chiffres toujours nets, pas d\'approximation typographique'],
      ['Post réseau social avec image d\'illustration sans texte intégré', 'ChatGPT (DALL-E)', 'Créativité et rapidité, sur un usage qui évite justement sa limite connue'],
      ['Visuel de présentation intégré à un document Google déjà en cours de rédaction', 'Gemini', 'Génération sans sortir du document, flux de travail continu'],
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents à éviter avant publication',
    items: [
      "Demander à une IA de générer une image avec du texte lisible dedans — la limite la plus documentée des générateurs comme DALL-E : titres déformés, chiffres faux. Si un message écrit précis est requis, générez-le en SVG avec Claude ou ajoutez-le après coup dans un outil de retouche léger.",
      "Utiliser toujours le même outil par habitude sans comparer sur le besoin réel — une infographie chiffrée demandée à un générateur d'image classique plutôt qu'en SVG à Claude est un détour évitable.",
      "Publier un visuel généré par IA sans le vérifier en grand format — mains mal formées, objets dupliqués, texte halluciné qui imite l'écriture sans former de mots réels.",
      "Recopier tel quel le ton du document source dans le nouveau canal, ou ignorer les contraintes de format du canal (dimensions, longueur) avant de lancer la génération.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de considérer un visuel prêt à publier',
    items: [
      "Le message central et le format cible ont-ils été fixés avant de rédiger le prompt de transformation ?",
      "Le prompt suit-il la norme CLARTE ou la méthode STAR selon le type de demande (reformulation simple ou raisonnement en plusieurs étapes) ?",
      "Le visuel a-t-il été comparé avec au moins une alternative produite par un autre outil avant le choix final ?",
      "Le visuel a-t-il été regardé en grand format pour repérer un élément incohérent avant toute diffusion externe ?",
      "Une bibliothèque de prompts visuels marketing prêts à copier-coller pour les 5 IA de cette formation (ChatGPT, Claude, Copilot, Perplexity, Gemini) est disponible en téléchargement à la fin de ce module — pour aller plus vite sur les prochains visuels.",
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Message central', definition: "L'idée unique et prioritaire qu'un document source doit transmettre une fois réduit à sa version la plus courte — le point de départ obligatoire de toute transformation vers un nouveau format." },
      { term: 'Format cible', definition: "L'ensemble des contraintes du canal de diffusion choisi (longueur maximale, ton attendu, présence ou non d'un visuel, audience réelle) à fixer avant de demander la transformation, pas après." },
      { term: 'SVG (Scalable Vector Graphics)', definition: "Format d'image vectorielle décrit par du code plutôt que par des pixels — c'est ce que Claude génère pour produire un visuel redimensionnable sans perte, avec un texte toujours net." },
      { term: 'Hallucination visuelle', definition: "Élément incohérent ou physiquement impossible produit par un générateur d'image (main à six doigts, objet dupliqué, texte qui imite l'écriture sans former de mots réels) — à vérifier systématiquement avant publication externe." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Compte-rendu de clôture, transformé en post LinkedIn"',
    scenario: "Le service communication transmet le compte-rendu de clôture du projet d'appui logistique de Tine-Ourécassoni (janvier-juin 2026) : 18 tonnes de matériel livrées, 4 200 bénéficiaires atteints contre un objectif de 3 500, un défi climatique surmonté grâce à un itinéraire de contournement. Seule consigne reçue : \"On a besoin d'un post LinkedIn cette semaine, et si possible un visuel qui va avec.\"",
    steps: [
      "Extraire le message central en une phrase : l'objectif de bénéficiaires a été dépassé malgré un obstacle logistique majeur — pas simplement \"le projet est terminé\".",
      "Fixer le format cible avant tout prompt : canal LinkedIn, audience partenaires et donateurs externes, ton chaleureux mais factuel, 120 à 150 mots.",
      "Transformer le compte-rendu complet (pas un résumé) avec un prompt CLARTE, en interdisant explicitement toute invention ou arrondi de chiffre.",
      "Générer un visuel d'accompagnement avec au moins deux outils différents et les comparer avant de choisir lequel publier.",
    ],
  },
  {
    type: 'exercise',
    title: 'Du compte-rendu de Tine-Ourécassoni au post publiable',
    instructions: "À partir du compte-rendu de clôture du projet logistique de Tine-Ourécassoni : (1) formulez en une phrase son message central et notez les paramètres du format cible (canal, audience, ton, longueur) ; (2) rédigez et exécutez un prompt CLARTE inspiré du Prompt 1 de ce module pour produire un post LinkedIn de 120 à 150 mots, sans inventer ni arrondir aucun chiffre ; (3) générez un visuel d'accompagnement avec au moins deux des quatre outils vus dans ce module (par exemple ChatGPT/DALL-E et Claude en SVG) ; (4) comparez les deux visuels avec la grille `04-templates/comparatif-outils-generation-visuels-ia.xlsx` et sélectionnez celui qui correspond le mieux au post et à l'audience visée.",
    deliverable: "Le post LinkedIn final (120-150 mots), les deux visuels générés, et la grille comparative complétée avec la justification du choix retenu.",
  },
  {
    type: 'recap',
    items: [
      "Je sais extraire le message central d'un document existant avant de le transformer, plutôt que de partir d'une page blanche.",
      "Je sais fixer les paramètres du format cible (canal, audience, ton, longueur) avant de demander une transformation à l'IA.",
      "Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.",
      "Je connais les forces et les limites concrètes des quatre outils de génération visuelle comparés dans ce module, et je sais lequel utiliser pour un besoin marketing donné.",
      "Je vérifie systématiquement un visuel généré par IA en grand format avant toute publication externe.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 12 — IA pour le Business Model & le Business Plan.',
  },
]
