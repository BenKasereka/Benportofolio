// Module 11 — IA pour le Marketing & la Communication — Du document existant au support diffusable
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (préparation de la transformation, post LinkedIn, déclinaison
// multi-canal, choix de l'outil visuel, ChatGPT/DALL-E, Claude SVG, Copilot
// Designer, Gemini, comparaison et validation) est détaillée étape par étape
// et appliquée au même fil rouge : le compte-rendu de clôture du projet
// « Route Santé Nord-Kivu » d'Horizon Grands Lacs. Organisation, projet et
// personnes fictifs ; l'exercice noté reprend le cas Tine-Ourécassoni du module.
export default [
  {
    type: 'cover',
    title: 'IA pour le Marketing & la Communication — Du document existant au support diffusable',
    hook: "À la fin de ce module, vous saurez prendre un compte-rendu de trois pages que personne ne lira, en tirer en une matinée un post LinkedIn de 140 mots, un article de newsletter interne et une diapositive de coordination — sans un seul chiffre inventé — puis produire avec le bon outil d'IA les visuels qui les accompagnent, vérifiés en grand format avant publication.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Préparer une transformation avant d'ouvrir une IA : identifier le document source, inventorier ses faits, extraire le message central en une phrase et fixer le format cible du canal, en produisant les sections 1 à 3 du gabarit de transformation complétées.",
      "Transformer un compte-rendu en post LinkedIn de 120 à 150 mots avec un prompt CLARTE, puis le contrôler chiffre par chiffre, en produisant le post final et la section 4 « Avant / Après » du gabarit.",
      "Décliner le même document pour deux autres audiences (newsletter interne, diapositive de réunion de coordination), en produisant deux textes adaptés et un tableau de cohérence des chiffres entre les trois supports.",
      "Choisir l'outil de génération visuelle selon le besoin réel avec la grille comparative du module, en produisant un plan visuel justifié (besoin, outil, format, méthode de prompt).",
      "Générer et corriger un visuel avec chacun des quatre outils — ChatGPT/DALL-E, Claude en SVG, Copilot Designer, Gemini — en produisant quatre visuels aux dimensions exactes de leur canal.",
      "Comparer deux visuels sur un même besoin, repérer les hallucinations visuelles et valider avant publication, en produisant la grille comparative complétée avec la justification du choix, la checklist de relecture cochée et la signature du gabarit.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur la communication : vous allez produire, sur un seul cas suivi du début à la fin, tous les supports qu'une organisation tire d'un rapport de projet. Chaque procédure est découpée en étapes numérotées, avec le prompt exact à copier, les menus à ouvrir, les contrôles à faire et le résultat attendu sur le cas.",
      "À la fin du module, vous aurez en main huit livrables réutilisables tels quels sur vos propres documents :",
    ],
    bullets: [
      "Une fiche de faits : chaque chiffre et chaque fait du document source, numéroté, avec la phrase d'où il vient.",
      "Trois gabarits « Transformation document → communication » complétés (un par canal), sections 1 à 5 et signature.",
      "Un post LinkedIn de 120 à 150 mots, dont chaque chiffre est tracé jusqu'au document source.",
      "Un article de newsletter interne et le texte d'une diapositive de réunion de coordination, cohérents avec le post.",
      "Un plan visuel : pour chaque besoin, l'outil retenu, l'outil de comparaison, le format et la méthode de prompt.",
      "Quatre visuels : une illustration ChatGPT/DALL-E, une infographie SVG produite par Claude, une bannière Copilot Designer et une image Gemini intégrée à Google Slides.",
      "La grille comparative des outils complétée avec vos observations et la justification du visuel publié.",
      "Votre propre bibliothèque de prompts testés, rangée pour la prochaine publication.",
    ],
    tip: "Ouvrez dès maintenant les trois fichiers du dossier 04-templates : gabarit-transformation-document-communication.docx, comparatif-outils-generation-visuels-ia.xlsx et bibliotheque-prompts-visuels-marketing-multi-ia.docx. Chaque procédure vous indique quand et comment les utiliser.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs et le compte-rendu « Route Santé Nord-Kivu »',
    body: [
      "Horizon Grands Lacs est l'organisation fictive déjà suivie au module 9 (sites de Goma, Bukavu et Kinshasa). Le lundi 13 juillet 2026, la directrice pays Furaha Bisimwa écrit à Amani Kahindo, chargée administrative et logistique à Goma, qui assure l'intérim du poste de communication resté vacant : « Le compte-rendu de Jean-Claude est excellent, mais personne ne le lira. Il nous faut cette semaine un post LinkedIn pour nos partenaires et donateurs, un article dans la newsletter interne de vendredi et notre diapositive pour la réunion du Logistics Cluster de jeudi. Avec des visuels si possible. »",
      "Le document source : le compte-rendu de clôture du projet Route Santé Nord-Kivu, trois pages, daté du 3 juillet 2026, rédigé par Jean-Claude Baraka, coordinateur logistique terrain. Les échéances : diapositive à déposer dans la présentation partagée du Cluster le mercredi 15 juillet à 17 h ; newsletter envoyée le vendredi 17 juillet ; post LinkedIn publié le vendredi 17 juillet après validation de la directrice.",
    ],
    example: {
      title: 'Compte-rendu de clôture — les passages qui portent les faits',
      lines: [
        "« Le projet Route Santé Nord-Kivu, financé par ECHO, a débuté le 5 janvier 2026 et s'est achevé le 30 juin 2026. Il visait à sécuriser l'approvisionnement en médicaments essentiels et en intrants nutritionnels de 9 centres de santé des territoires de Masisi et Rutshuru, depuis l'entrepôt de Goma.",
        "Sur la période, 26 tonnes de médicaments et d'intrants ont été livrées en 112 livraisons, dont 109 à la date prévue. Le taux de rupture des médicaments traceurs dans les 9 centres est passé de 31 % en janvier à 6 % en juin.",
        "27 500 patients ont reçu un traitement avec les médicaments livrés, contre un objectif initial de 24 000, grâce à une planification des livraisons alignée sur les données de consommation hebdomadaires des centres, mise en place au deuxième mois.",
        "Du 14 au 25 avril, des pluies diluviennes ont coupé la route Sake–Masisi. Un itinéraire de contournement par une piste secondaire, avec transbordement sur motos pour le dernier tronçon, identifié avec le point focal du Logistics Cluster, a maintenu les livraisons : aucun centre n'a été privé de médicaments plus de 72 heures.",
        "Le projet a mobilisé une équipe de 8 personnes, dont 3 chauffeurs, et un budget logistique de 61 500 USD. La coordination recommande de pré-positionner trois semaines de stock dans les 4 centres les plus exposés avant la saison des pluies de septembre 2026. »",
      ],
    },
    highlight: "Tout ce qu'il faut pour trois supports de communication est déjà là, vérifié par l'auteur. Le travail d'Amani n'est pas d'écrire : c'est de choisir, d'adapter et de contrôler.",
  },
  {
    type: 'concept',
    title: "La carte du module : 9 procédures, dans l'ordre où vous les exécuterez",
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. Les procédures 1 à 3 traitent le texte, les procédures 4 à 9 les visuels. Ne sautez pas la procédure 1 : un message central mal choisi se retrouve, multiplié, dans les trois supports et les quatre visuels.",
    bullets: [
      "Procédure 1 — Préparer la transformation avant d'ouvrir une IA (5 étapes) : document source, fiche de faits, message central, format cible, règles de diffusion.",
      "Procédure 2 — Transformer le compte-rendu en post LinkedIn (5 étapes) : prompt CLARTE, exécution, contrôle, correction ciblée, gabarit Avant / Après.",
      "Procédure 3 — Décliner le contenu pour d'autres canaux (3 étapes) : newsletter interne, diapositive de coordination, tableau de cohérence.",
      "Procédure 4 — Choisir l'outil visuel selon le besoin (3 étapes) : qualifier le besoin, grille d'aide à la décision, plan visuel.",
      "Procédure 5 — Générer une illustration avec ChatGPT / DALL-E (4 étapes).",
      "Procédure 6 — Produire une infographie chiffrée avec Claude en SVG (4 étapes).",
      "Procédure 7 — Créer une bannière interne avec Copilot Designer (3 étapes).",
      "Procédure 8 — Générer un visuel dans Google Slides avec Gemini (2 étapes).",
      "Procédure 9 — Comparer, valider et publier (4 étapes).",
    ],
  },

  // ───────────── Théorie essentielle ─────────────
  {
    type: 'concept',
    title: 'Pourquoi transformer un document existant plutôt que partir d\'une page blanche',
    body: [
      "Un rapport de projet a déjà demandé le travail le plus coûteux : rassembler les faits, les vérifier, les structurer. Pourtant, face à un besoin de communication, le réflexe le plus fréquent est d'ouvrir une page blanche et d'écrire de mémoire. Résultat : du temps perdu, et des chiffres approximatifs que l'auteur du post reconstitue au lieu de les recopier.",
      "La bonne approche est inverse : partir du document et le reformater pour une autre audience et un autre canal. Les faits ne changent pas ; ce qui change, c'est la longueur, le ton, l'angle d'accroche et la structure de lecture. C'est précisément ce travail de reformatage — pas la création ex nihilo — que l'IA exécute le mieux, à condition de lui fournir le document complet et un format cible précis.",
    ],
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "À éviter : « Écris un post LinkedIn sur notre projet de santé au Nord-Kivu qui s'est bien passé. » → l'IA invente un « succès remarquable » et des chiffres plausibles mais faux.",
        "À utiliser : le compte-rendu complet de Jean-Claude Baraka + le message central + le format cible + l'interdiction d'inventer un chiffre.",
      ],
    },
    pitfall: "Donner à l'IA votre propre résumé du document « pour gagner du temps » : chaque résumé perd un chiffre ou en arrondit un autre. Fournissez toujours le document complet.",
  },
  {
    type: 'comparison-table',
    title: 'Ce qui change et ce qui ne change jamais quand on transforme un document',
    columns: ['Élément', 'Dans le compte-rendu (comité interne)', 'Dans le post LinkedIn (donateurs)', 'Règle'],
    rows: [
      ['Faits et chiffres', '26 t, 112 livraisons dont 109 à date, 27 500 patients / 24 000', 'Les mêmes, recopiés à l\'identique (une sélection de 2 ou 3)', 'Invariants : jamais arrondis, jamais recalculés'],
      ['Longueur', '3 pages', '120 à 150 mots', 'Fixée par le canal'],
      ['Ton', 'Neutre, technique, chronologique', 'Chaleureux mais factuel, phrases courtes', "Fixé par l'audience"],
      ['Ordre de lecture', 'Contexte → activités → résultats → recommandations', 'Accroche → résultats → défi → suite', 'Le plus important en premier'],
      ['Vocabulaire', 'Médicaments traceurs, transbordement, point focal', 'Mots compris sans formation logistique', "Tout sigle est expliqué ou supprimé"],
    ],
  },
  {
    type: 'stat-callout',
    stat: '27 500 / 24 000',
    caption: "Le résultat le plus fort du projet — l'objectif de patients traités dépassé — apparaît au milieu d'un paragraphe technique, en page 2 du compte-rendu.",
    context: "Le document a été écrit pour un comité qui lit tout. Un donateur sur LinkedIn lit deux lignes. Extraire ce chiffre et le placer en tête n'est pas de la « mise en valeur » : c'est rendre visible un fait déjà vérifié que le format d'origine cache.",
  },
  {
    type: 'concept',
    title: 'Le message central : une idée, une phrase, avant tout prompt',
    body: [
      "Le message central est l'idée unique et prioritaire que le document doit transmettre une fois réduit à sa version la plus courte. Ce n'est pas un résumé du document entier, et ce n'est presque jamais « le projet est terminé ».",
      "Pour le trouver, posez trois questions : quel est le résultat le plus marquant pour un lecteur extérieur ? Qu'est-ce qui le rend remarquable (un objectif dépassé, un obstacle surmonté) ? Peut-on le dire en une phrase de moins de 30 mots avec un chiffre ?",
    ],
    example: {
      title: 'Trois candidats pour le fil rouge',
      lines: [
        "« Le projet Route Santé Nord-Kivu est terminé. » → constat sans intérêt pour un lecteur externe : rejeté.",
        "« 26 tonnes de médicaments ont été livrées en six mois. » → chiffre réel, mais un volume ne dit pas si c'est un succès : rejeté comme message central, conservé comme preuve.",
        "« Malgré douze jours de route coupée en avril, le projet a dépassé son objectif : 27 500 patients traités au lieu des 24 000 prévus. » → résultat + obstacle + chiffre : retenu.",
      ],
    },
    tip: "Le message central reste le même pour tous les canaux ; c'est l'angle d'accroche qui change selon l'audience (remerciement de l'équipe en interne, leçon opérationnelle pour les pairs du Cluster).",
  },
  {
    type: 'comparison-table',
    title: 'Le format cible par canal — à fixer avant de lancer la moindre génération',
    columns: ['Canal', 'Longueur du texte', 'Ton habituel', 'Format du visuel'],
    rows: [
      ['Post LinkedIn', '120 à 150 mots ; l\'essentiel dans les 2 à 3 premières lignes, avant « … voir plus »', 'Chaleureux mais factuel', 'Paysage 1200 × 627'],
      ['Post Instagram / Facebook', '50 à 100 mots + hashtags', 'Direct, émotionnel sans exagération', 'Carré 1080 × 1080 ou portrait 1080 × 1350'],
      ['Newsletter interne (e-mail)', '150 à 200 mots par article', 'Chaleureux, remerciements nominatifs possibles', 'Bannière d\'en-tête 600 × 200'],
      ['Communiqué de presse', '250 à 400 mots, titre + chapeau + corps', 'Institutionnel, à la 3e personne', 'Photo réelle ou aucun visuel'],
      ['Diapositive de réunion', 'Un titre-message + 3 chiffres + 1 leçon (40 mots maximum)', 'Technique, entre pairs', 'Image 16:9 ou demi-diapositive'],
      ['Bannière web / couverture de page', 'Aucun texte long', 'Identité de marque', '1200 × 300 (bannière web), 1584 × 396 (couverture)'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La norme CLARTE appliquée à un prompt de transformation',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt du fil rouge'],
    rows: [
      ['C — Contexte', 'Le document source complet, son auteur, sa date', '« Voici le compte-rendu complet de clôture du projet Route Santé Nord-Kivu : [3 pages] »'],
      ['L — Livrable attendu', 'Canal, longueur, structure en temps', '« Un post LinkedIn de 120 à 150 mots : accroche, 2-3 chiffres, défi, remerciement, suite, 3 hashtags »'],
      ['A — Audience / rôle', "Le rôle de l'IA et le lecteur réel", '« Tu es responsable communication… pour nos partenaires et donateurs, qui ne l\'ont pas lu »'],
      ['R — Restrictions', 'Fidélité aux faits, données sensibles, sigles', '« N\'invente, n\'arrondis et ne calcule aucun chiffre. Aucun nom de patient. »'],
      ['T — Ton & style', 'Le registre de l\'audience, pas celui du document', '« Chaleureux mais factuel, phrases courtes, sans superlatif »'],
      ['E — Exemples', 'Une structure ou une phrase modèle', '« Structure : une accroche en une ou deux phrases courtes, puis… »'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La méthode STAR appliquée à un prompt de génération d\'image',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt d\'illustration du fil rouge'],
    rows: [
      ['S — Situation', 'Le support déjà rédigé, pour que l\'image lui corresponde', '« J\'ai rédigé un post LinkedIn sur un projet qui a maintenu l\'approvisionnement de centres de santé malgré une route coupée »'],
      ['T — Tâche', 'L\'objectif du visuel et ce qu\'il ne doit pas faire', '« Une image d\'accompagnement, sans aucun texte dans l\'image »'],
      ['A — Action', 'Sujet, style, composition, palette, format exact, exclusions', '« Format 1200 × 627, illustration réaliste, piste de terre et moto chargée de cartons, sans logo, sans visage en gros plan »'],
      ['R — Résultat', 'Le critère de réussite et la vérification prévue', '« Une image publiable telle quelle, que je vérifierai en grand format avant diffusion »'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Panorama réaliste des quatre outils de génération visuelle',
    columns: ['Outil', 'Ce qu\'il fait bien', 'Sa limite à connaître', 'Dans le fil rouge'],
    rows: [
      ['ChatGPT (moteur d\'image DALL-E)', 'Image originale, créative et rapide à partir d\'une description : illustration, ambiance, couverture', 'Le texte intégré (titre, slogan, chiffre) est très souvent déformé ou illisible', 'Illustration sans texte pour le post LinkedIn (option A)'],
      ['Claude', 'Écrit du code SVG ou HTML/CSS : visuel net, texte et chiffres exacts, structure géométrique précise', "Ne génère pas d'image nativement ; pas de rendu photo-réaliste ; il faut ouvrir et exporter le code", 'Infographie des trois chiffres pour le post LinkedIn (option B)'],
      ['Copilot Designer', 'Visuel d\'allure professionnelle en quelques secondes, sans quitter Microsoft 365', 'Rapidité d\'intégration plus que précision créative ; à éviter pour un visuel de marque externe', 'Bannière de la newsletter interne'],
      ['Gemini', 'Génère l\'image directement dans Google Docs ou Slides, sans export', 'Même fiabilité limitée du texte intégré que les autres générateurs d\'image', 'Image de la diapositive dans la présentation partagée du Cluster'],
    ],
  },
  {
    type: 'concept',
    title: "Les 7 éléments d'un prompt visuel efficace (bibliothèque du module)",
    body: "La section 1 de bibliotheque-prompts-visuels-marketing-multi-ia.docx résume ce qui fait un bon prompt d'image. Un prompt vague (« fais-moi un beau visuel ») laisse l'IA combler les vides par des choix par défaut, rarement alignés avec votre organisation. Vérifiez la présence des sept éléments, dans cet ordre de priorité :",
    bullets: [
      "1. Sujet unique et clair — un seul élément central par visuel.",
      "2. Style visuel nommé — photographie réaliste, illustration plate (flat design), aquarelle, 3D minimaliste… jamais « moderne » ou « joli ».",
      "3. Composition et cadrage — angle, cadrage large ou serré, règle des tiers, et surtout l'espace négatif laissé libre pour le texte ajouté après coup.",
      "4. Palette de marque — deux à trois couleurs maximum, nommées ou codées (ex. bleu marine #1B3A5C et vert #2E8B57 pour Horizon Grands Lacs).",
      "5. Ambiance et émotion — dynamique, chaleureux, sobre, institutionnel…",
      "6. Format et ratio du canal — 1200 × 627 pour LinkedIn, 1080 × 1080 pour un carré, 1200 × 300 pour une bannière web : fixé avant, jamais recadré après.",
      "7. Exclusions explicites — pas de texte intégré, pas de logo, pas de visage en gros plan, pas d'élément de décor superflu.",
    ],
    tip: "Ces sept éléments se rangent naturellement dans le « A — Action » d'un prompt STAR ou dans le « L » et le « R » d'un prompt CLARTE.",
  },
  {
    type: 'concept',
    title: 'Le piège n° 1 : le texte dans l\'image et les hallucinations visuelles',
    body: [
      "Un générateur d'image classique (ChatGPT/DALL-E, Copilot Designer, Gemini, et la génération d'image de Perplexity) ne « sait » pas écrire : il dessine des formes qui ressemblent à des lettres. Titres déformés, lettres qui ne forment pas de mots réels, chiffres faux sont sa limite la plus documentée. Les versions récentes progressent, mais la règle professionnelle ne change pas : on ne lui confie jamais un texte, un prix ou un chiffre exact.",
      "Deux solutions seulement : laisser une zone dégagée et ajouter le texte après coup dans un outil de mise en page (Word, PowerPoint, Slides, Canva), ou passer par Claude qui génère du code SVG/HTML où le texte est saisi caractère par caractère, donc exact.",
      "Plus largement, une hallucination visuelle est tout élément incohérent ou physiquement impossible : main à six doigts, roue en double, objet fusionné avec un autre, inscription fantôme sur un véhicule, faux logo.",
    ],
    pitfall: "Régénérer en boucle en espérant que le slogan finisse par s'écrire correctement : après deux essais ratés sur un texte, changez de méthode, pas de formulation.",
  },
  {
    type: 'concept',
    title: 'Règles d\'usage propres à la communication humanitaire',
    body: "Un support de communication engage l'organisation publiquement, souvent devant ses bailleurs. Ces règles de pratique professionnelle s'ajoutent à celles de votre organisation ; appliquez-les avant chaque diffusion.",
    bullets: [
      "Une image générée par IA n'est jamais présentée comme une photo du projet : ni légende trompeuse, ni « nos équipes sur le terrain » sous une illustration. Mentionnez « illustration » dans la légende ou le texte alternatif si votre politique le demande.",
      "Aucun nom, visage identifiable ou détail permettant de reconnaître un patient ou un bénéficiaire, ni dans le texte ni dans le prompt.",
      "Dignité des personnes : refusez tout visuel qui montre la détresse de façon spectaculaire, même « illustrative ».",
      "Emblèmes protégés : une croix rouge ou un croissant rouge sur fond blanc, fréquents dans les images générées sur le thème de la santé, est un emblème protégé par les Conventions de Genève — visuel à rejeter.",
      "Visibilité du bailleur : appliquez les obligations de la convention de financement (mention, logo selon les lignes directrices du bailleur).",
      "Validation : un support externe est validé par la personne habilitée (ici, la directrice pays) et publié depuis le compte officiel, jamais depuis un compte personnel.",
      "Compte IA professionnel validé par l'organisation pour tout document interne déposé dans une IA.",
    ],
  },
  {
    type: 'concept',
    title: 'La bibliothèque de prompts du module — comment l\'utiliser',
    body: "Le fichier bibliotheque-prompts-visuels-marketing-multi-ia.docx est votre boîte à outils pour toutes les publications futures. Il couvre cinq IA — ChatGPT, Claude, Microsoft Copilot (Designer), Perplexity et Google Gemini — et quatre types de supports : flyers, posts réseaux sociaux, visuels produits, bannières promotionnelles.",
    bullets: [
      "Section 1 — les 7 éléments d'un prompt visuel et le piège du texte intégré.",
      "Section 2 — conseils d'itération : que changer selon le problème observé (terne, surchargé, hors charte, texte faux, cadrage sans place pour le texte) et erreurs à éviter.",
      "Sections 3 à 7 — deux prompts prêts à copier par outil et par type de support, avec les éléments à remplacer entre crochets.",
      "Section 6 — Perplexity, en deux temps : une recherche sourcée (tendances, chiffres publics) puis une génération alignée sur ces références. Règle : aucun chiffre dans un visuel sans source vérifiable.",
      "Section 8 — le rappel avant toute publication externe, en cinq questions.",
    ],
    tip: "Pour le fil rouge, vous partirez du prompt « Post LinkedIn — annonce d'entreprise » (section 3), du prompt « Carte citation / statistique » (section 4) et du prompt « Bannière Teams / communication interne » (section 5), que vous adapterez au cas.",
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Message central', definition: "L'idée unique et prioritaire qu'un document doit transmettre une fois réduit à sa version la plus courte. Point de départ obligatoire de toute transformation." },
      { term: 'Format cible', definition: "L'ensemble des contraintes du canal : longueur maximale, ton attendu, présence et format d'un visuel, audience réelle. Fixé avant la transformation, pas après." },
      { term: "Angle d'accroche", definition: "La porte d'entrée choisie pour une audience donnée (résultat, remerciement, leçon) ; il varie selon le canal, le message central ne varie pas." },
      { term: 'Fiche de faits', definition: "Liste numérotée des chiffres et faits du document source, chacun avec sa phrase d'origine. Elle sert de référence pour contrôler tout texte produit par l'IA." },
      { term: 'SVG (Scalable Vector Graphics)', definition: "Format d'image vectorielle décrit par du code plutôt que par des pixels : redimensionnable sans perte, texte toujours net. C'est ce que Claude génère." },
      { term: 'Hallucination visuelle', definition: "Élément incohérent ou impossible produit par un générateur d'image : main à six doigts, objet dupliqué, texte qui imite l'écriture sans former de mots." },
      { term: 'Espace négatif', definition: "Zone volontairement vide d'une image, réservée au titre ou au texte ajouté après génération dans un outil de mise en page." },
      { term: 'Ratio', definition: "Rapport largeur / hauteur d'un visuel : 1,91:1 pour un post LinkedIn (1200 × 627), 1:1 pour un carré, 3:1 pour une bannière 600 × 200." },
      { term: 'Texte alternatif', definition: "Description textuelle d'une image, lue par les lecteurs d'écran et affichée si l'image ne charge pas. À renseigner pour chaque visuel publié." },
      { term: 'Logistics Cluster', definition: "Mécanisme de coordination logistique humanitaire entre organisations, piloté par le PAM. À expliquer en clair dès que l'audience n'est pas du secteur." },
    ],
  },

  // ───────────── Procédure 1 — Préparer la transformation ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Identifier le document source et ouvrir le gabarit (section 1)',
    intro: "Vous ne transformez qu'un document final, validé par son auteur : un brouillon contient des chiffres qui changeront. Entrées nécessaires : le compte-rendu reçu, le gabarit gabarit-transformation-document-communication.docx et un dossier de travail.",
    steps: [
      {
        title: 'Organiser le dossier',
        actions: [
          "Créez un dossier « Com_RouteSante_2026-07 » avec trois sous-dossiers : « 01_Source », « 02_Brouillons », « 03_Publie ».",
          "Enregistrez le compte-rendu dans 01_Source sous le nom 2026-07-03_CR_cloture_RouteSante_v-finale.pdf.",
          "Copiez le gabarit trois fois dans 02_Brouillons : gabarit_LinkedIn.docx, gabarit_Newsletter.docx, gabarit_Diapo-Cluster.docx — un gabarit par canal, car la section 3 ne décrit qu'un format cible.",
        ],
      },
      {
        title: 'Vérifier le statut du document et remplir la section 1',
        actions: [
          "Vérifiez que le document porte la mention « version finale » ou demandez à l'auteur : « Les chiffres de ce compte-rendu sont-ils définitifs et puis-je les publier ? »",
          "Ouvrez gabarit_LinkedIn.docx, section « 1. Document source identifié », et remplissez les trois lignes : type de document ; titre, date, auteur ; nombre de pages.",
          "Recopiez la même section 1 dans les deux autres gabarits.",
        ],
      },
    ],
    example: {
      title: 'Section 1 du gabarit — fil rouge',
      lines: [
        "Type de document : compte-rendu de clôture de projet",
        "Titre, date, auteur : « Projet Route Santé Nord-Kivu — compte-rendu de clôture », 3 juillet 2026, Jean-Claude Baraka, coordinateur logistique terrain",
        "Nombre de pages / longueur : 3 pages, environ 1 400 mots",
        "Réponse de Jean-Claude le 13/07 à 9 h 20 : « Version finale, chiffres validés avec le suivi-évaluation. Tu peux publier. »",
      ],
    },
    result: "Un dossier rangé, trois gabarits ouverts dont la section 1 est remplie, et une confirmation écrite de l'auteur que les chiffres sont publiables.",
    pitfall: "Communiquer à partir d'un brouillon ou d'un rapport intermédiaire : si le chiffre final change, votre post publié devient faux et ne peut plus être corrigé discrètement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Inventorier les faits et les chiffres dans une fiche de faits',
    intro: "La fiche de faits est votre référence de contrôle pour tout ce que l'IA produira ensuite : chaque chiffre d'un brouillon devra y être retrouvé. Elle alimente directement la colonne « AVANT — extrait du document source » de la section 4 du gabarit.",
    steps: [
      {
        title: 'Repérer chaque fait',
        actions: [
          "Ouvrez le compte-rendu et surlignez en jaune chaque chiffre, date, quantité et pourcentage.",
          "Surlignez en vert chaque fait qualitatif utile à une audience externe (un obstacle, une solution, une recommandation).",
          "Ignorez le jargon de gestion interne (codes budgétaires, références de bons de commande).",
        ],
      },
      {
        title: 'Construire la fiche',
        actions: [
          "Dans un document « Fiche_faits.docx », numérotez chaque fait F1, F2, F3…",
          "Pour chacun, notez la valeur exacte, l'unité, et copiez la phrase d'origine entre guillemets.",
          "Ne calculez rien : un pourcentage qui ne figure pas dans le document n'entre pas dans la fiche.",
          "Collez la fiche dans la colonne « AVANT » de la section 4 de chaque gabarit.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Fait (valeur exacte)', 'Phrase d\'origine (extrait)'],
      rows: [
        ['F1', '5 janvier → 30 juin 2026', '« a débuté le 5 janvier 2026 et s\'est achevé le 30 juin 2026 »'],
        ['F2', '9 centres de santé, Masisi et Rutshuru, depuis Goma', '« 9 centres de santé des territoires de Masisi et Rutshuru »'],
        ['F3', '26 tonnes de médicaments et d\'intrants', '« 26 tonnes de médicaments et d\'intrants ont été livrées »'],
        ['F4', '112 livraisons, dont 109 à la date prévue', '« en 112 livraisons, dont 109 à la date prévue »'],
        ['F5', 'Rupture traceurs : 31 % (janvier) → 6 % (juin)', '« est passé de 31 % en janvier à 6 % en juin »'],
        ['F6', '27 500 patients traités / objectif 24 000', '« 27 500 patients ont reçu un traitement… contre un objectif initial de 24 000 »'],
        ['F7', 'Route Sake–Masisi coupée du 14 au 25 avril', '« Du 14 au 25 avril, des pluies diluviennes ont coupé la route »'],
        ['F8', 'Contournement + motos ; aucun centre privé plus de 72 h', '« aucun centre n\'a été privé de médicaments plus de 72 heures »'],
        ['F9', 'Équipe de 8 dont 3 chauffeurs ; 61 500 USD ; ECHO', '« une équipe de 8 personnes, dont 3 chauffeurs, et un budget logistique de 61 500 USD »'],
        ['F10', '3 semaines de stock dans 4 centres avant septembre', '« pré-positionner trois semaines de stock dans les 4 centres les plus exposés »'],
      ],
    },
    result: "Une fiche de 10 faits numérotés, chacun traçable jusqu'à sa phrase d'origine, collée dans la colonne AVANT des trois gabarits.",
    tip: "Notez à part les faits qui expliquent le succès (ici, la planification alignée sur la consommation hebdomadaire) : ils feront une excellente phrase pour une audience de pairs, rarement pour des donateurs.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Extraire le message central et le noter en section 2',
    intro: "C'est la décision la plus importante du module : vous la prenez vous-même, avant l'IA. Un message central confié à l'IA devient presque toujours un résumé plat du document.",
    steps: [
      {
        title: 'Trier les faits candidats',
        actions: [
          "Dans la fiche de faits, entourez les faits qui montrent un résultat par rapport à un objectif ou à une situation de départ (F5, F6).",
          "Entourez ceux qui montrent un obstacle surmonté (F7, F8).",
          "Choisissez le fait le plus fort de chaque groupe : un résultat qui dépasse un objectif est plus parlant qu'un volume.",
        ],
      },
      {
        title: 'Rédiger et tester la phrase',
        actions: [
          "Écrivez une phrase qui combine le résultat, l'obstacle et un chiffre, en moins de 30 mots.",
          "Test du « Et alors ? » : lisez-la à un collègue qui ne connaît pas le projet. S'il demande « et alors ? », reformulez.",
          "Test de fidélité : chaque chiffre de la phrase doit figurer dans la fiche de faits.",
          "Saisissez la phrase dans la section « 2. Message central extrait » des trois gabarits.",
        ],
      },
    ],
    example: {
      title: 'Section 2 du gabarit — fil rouge',
      lines: [
        "Brouillon 1 : « Le projet a livré 26 tonnes et dépassé ses objectifs. » → « Et alors ? Quels objectifs ? » : reformulé.",
        "Brouillon 2 : « Le projet a amélioré l'accès aux soins au Nord-Kivu. » → aucun chiffre, invérifiable : reformulé.",
        "Version retenue (27 mots) : « Malgré douze jours de route coupée en avril, le projet Route Santé Nord-Kivu a dépassé son objectif : 27 500 patients traités au lieu des 24 000 prévus. »",
        "Contrôle : 12 jours (F7, du 14 au 25 avril inclus), 27 500 et 24 000 (F6) ✔",
      ],
    },
    result: "Un message central d'une phrase, chiffré, validé par le test du « Et alors ? », identique dans les trois gabarits.",
    pitfall: "« Douze jours » est un chiffre que vous avez déduit (du 14 au 25 avril inclus). C'est acceptable seulement parce que le calcul est trivial et vérifié ; dans le doute, faites-le confirmer par l'auteur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Fixer le format cible de chaque canal (section 3)',
    intro: "La section 3 du gabarit est un tableau de quatre cases : canal, audience, ton, longueur maximale. Remplies avant le prompt, elles deviennent mot pour mot les lettres L, A et T de votre prompt CLARTE.",
    steps: [
      {
        title: 'Remplir les quatre cases, pour chaque gabarit',
        actions: [
          "Canal de diffusion : nommez le canal précis et sa date de diffusion.",
          "Audience : écrivez qui lit ET ce qu'elle sait déjà (« n'a pas lu le compte-rendu », « connaît le projet de nom »).",
          "Ton attendu : deux adjectifs maximum, choisis pour l'audience et non pour le document.",
          "Longueur maximale : en mots pour un texte, en éléments pour une diapositive.",
          "Ajoutez sous le tableau le format du visuel éventuel (dimensions en pixels).",
        ],
      },
    ],
    table: {
      columns: ['Gabarit', 'Canal', 'Audience', 'Ton', 'Longueur / visuel'],
      rows: [
        ['LinkedIn', 'Post LinkedIn de la page officielle, ven. 17/07', 'Partenaires et donateurs ; n\'ont pas lu le compte-rendu', 'Chaleureux, factuel', '120-150 mots ; visuel 1200 × 627'],
        ['Newsletter', 'Newsletter interne e-mail, ven. 17/07', 'Personnel des 3 sites ; connaît le projet de nom', 'Chaleureux, reconnaissant', '200 mots max ; bannière 600 × 200'],
        ['Diapo Cluster', 'Présentation Google Slides partagée, réunion du jeu. 16/07', 'Logisticiens d\'autres organisations ; experts du secteur', 'Technique, synthétique', 'Titre + 3 chiffres + 1 leçon, 40 mots ; image 16:9'],
      ],
    },
    result: "Trois sections 3 remplies : chaque canal a sa propre audience, son ton et sa longueur, notés avant toute génération.",
    tip: "Remarquez que le jargon interdit sur LinkedIn (« médicaments traceurs », « transbordement ») est permis sur la diapositive du Cluster : le ton se règle sur l'audience, jamais sur le document d'origine.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Vérifier les règles de diffusion avant d\'ouvrir une IA',
    intro: "Trois questions à régler maintenant, car elles changent le contenu des prompts : peut-on déposer ce document dans une IA ? Qui valide la publication ? Quelles obligations de visibilité s'appliquent ?",
    steps: [
      {
        title: 'Données et outil',
        actions: [
          "Relisez le compte-rendu à la recherche de données personnelles (noms de patients, d'agents de santé, numéros de téléphone) : supprimez-les de la copie destinée à l'IA.",
          "Utilisez uniquement le compte IA professionnel validé par votre organisation.",
          "Vérifiez que le document ne contient pas d'information de sécurité (itinéraires, horaires de convoi, lieux de stockage précis) : ne la transmettez à aucune IA et ne la publiez jamais.",
        ],
      },
      {
        title: 'Validation et visibilité',
        actions: [
          "Identifiez la personne qui valide chaque support externe et notez son délai.",
          "Ouvrez la convention de financement, cherchez la clause de visibilité et notez l'obligation (mention, logo).",
          "Notez ces décisions en bas de la fiche de faits.",
        ],
      },
    ],
    example: {
      title: 'Décisions consignées — fil rouge',
      lines: [
        "Données personnelles : aucune dans le compte-rendu ; le nom de Jean-Claude Baraka n'est cité que dans la newsletter interne, avec son accord.",
        "Sécurité : le nom de la piste de contournement n'est pas repris dans les supports externes (« une piste secondaire » suffit).",
        "Outil : comptes professionnels Claude et ChatGPT d'Horizon Grands Lacs ; Copilot Microsoft 365 ; Gemini via le compte Google invité du Cluster.",
        "Validation : post LinkedIn et diapositive validés par Furaha Bisimwa ; newsletter validée par Amani elle-même. Visibilité : la convention impose de mentionner le financement d'ECHO dans toute communication publique sur le projet.",
      ],
    },
    result: "Une copie du document prête pour l'IA, les circuits de validation connus, l'obligation de visibilité notée — et donc des restrictions précises à écrire dans les prompts.",
    pitfall: "Publier l'itinéraire exact de contournement « pour montrer l'ingéniosité de l'équipe » : en zone d'insécurité, une route et un horaire publiés exposent les chauffeurs.",
  },

  // ───────────── Procédure 2 — Post LinkedIn ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Rédiger le prompt de transformation (norme CLARTE)',
    intro: "Le prompt reprend mot pour mot ce que vous avez fixé dans le gabarit : le message central (section 2) et le format cible (section 3). Copiez le modèle et remplacez uniquement ce qui diffère dans votre propre cas.",
    steps: [
      {
        title: 'Assembler le prompt lettre par lettre',
        actions: [
          "A : donnez le rôle (responsable communication) et nommez le lecteur réel.",
          "C : collez le document complet, pas votre résumé.",
          "L : canal, fourchette de mots, structure en cinq temps, nombre de hashtags.",
          "R : interdisez d'inventer, d'arrondir ET de calculer ; imposez l'explication des sigles ; excluez les noms de personnes.",
          "T : deux adjectifs de ton, plus « sans superlatif ».",
          "Ajoutez une demande de traçabilité : la liste des chiffres utilisés avec leur phrase source.",
        ],
      },
    ],
    example: {
      title: 'Prompt de transformation — fil rouge (à copier)',
      lines: [
        "« Tu es responsable communication pour une organisation humanitaire à but non lucratif. [A]",
        "Voici le compte-rendu complet de clôture du projet Route Santé Nord-Kivu, rédigé par notre coordinateur logistique : [coller les 3 pages]. [C]",
        "Transforme-le en un post LinkedIn de 120 à 150 mots, destiné à nos partenaires et donateurs, qui ne l'ont pas lu. [L + A]",
        "Message central à faire ressortir : malgré douze jours de route coupée en avril, le projet a dépassé son objectif, avec 27 500 patients traités au lieu des 24 000 prévus.",
        "Structure : une accroche en une ou deux phrases courtes ; deux ou trois résultats chiffrés tirés exclusivement du document ; une phrase sur le défi surmonté, sans le dramatiser ; un remerciement qui mentionne le financement d'ECHO ; une phrase sur la suite recommandée ; 3 hashtags. [L + E]",
        "N'invente, n'arrondis et ne calcule aucun chiffre : utilise uniquement les chiffres écrits dans le document. Aucun nom de personne. Explique en clair tout sigle ou nom d'organisme technique. [R]",
        "Ton chaleureux mais factuel, phrases courtes, sans superlatif ni jargon logistique. [T]",
        "Après le post, indique son nombre de mots, puis liste chaque chiffre utilisé avec la phrase du document d'où il vient. »",
      ],
    },
    result: "Un prompt dont chaque phrase correspond à une lettre CLARTE identifiable, qui contient le vrai message central et le vrai format cible.",
    tip: "La dernière consigne (liste des chiffres avec leur phrase source) ne sert pas à faire confiance à l'IA : elle accélère votre contrôle de l'étape 3, car chaque chiffre arrive déjà avec sa référence à vérifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Exécuter le prompt et obtenir le premier jet',
    intro: "Claude est particulièrement fiable pour reformuler en respectant strictement les faits fournis ; ChatGPT reformate efficacement un document long en texte court. Lancez le même prompt dans les deux et gardez le meilleur point de départ.",
    steps: [
      {
        title: 'Lancer le prompt',
        actions: [
          "Ouvrez une nouvelle conversation dans Claude (compte professionnel), joignez le PDF du compte-rendu ou collez son texte, puis collez le prompt.",
          "Ouvrez une nouvelle conversation dans ChatGPT et faites exactement la même chose.",
          "Copiez les deux réponses dans un document « Brouillons_LinkedIn.docx », l'une sous l'autre, avec le nom de l'outil.",
        ],
      },
      {
        title: 'Choisir le point de départ',
        actions: [
          "Lisez les deux versions à voix haute : laquelle donne envie de lire la deuxième ligne ?",
          "Comptez les chiffres non traçables dans chacune (comparez avec la fiche de faits).",
          "Retenez la version qui a la meilleure accroche ET le moins de chiffres non traçables ; c'est elle que vous corrigerez.",
        ],
      },
    ],
    example: {
      title: 'Premier jet retenu (extrait) — avec ses défauts',
      lines: [
        "« 🚚 Un succès exceptionnel au Nord-Kivu ! Malgré des pluies diluviennes, notre projet Route Santé a permis à plus de 27 000 patients d'être soignés.",
        "Avec 97 % des livraisons à l'heure et 26 tonnes de médicaments acheminées vers 9 centres, nos équipes ont prouvé que la logistique sauve des vies… »",
        "Nombre de mots annoncé : 148. Chiffres listés : 27 000, 97 %, 26 tonnes, 9 centres.",
      ],
    },
    result: "Deux brouillons archivés et un premier jet retenu, prêt pour le contrôle. Le contrôle va trouver des défauts : c'est normal, et c'est pour cela qu'il existe.",
    pitfall: "Publier le premier jet parce qu'il « sonne bien » : c'est la phrase la plus convaincante qui contient le plus souvent l'arrondi ou le superlatif interdit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Contrôler le brouillon : chiffres, ton, longueur',
    intro: "Trois passes, toujours dans cet ordre. Un chiffre faux est une faute grave devant un donateur ; un ton inadapté ou un texte trop long fait seulement perdre des lecteurs.",
    steps: [
      {
        title: 'Passe 1 — chiffres',
        actions: [
          "Surlignez chaque chiffre du brouillon.",
          "Pour chacun, retrouvez sa ligne dans la fiche de faits ; notez F1 à F10 à côté, ou « ABSENT ».",
          "Un chiffre absent, arrondi ou calculé est à remplacer par le chiffre exact ou à supprimer.",
        ],
      },
      {
        title: 'Passe 2 — ton',
        actions: [
          "Entourez les superlatifs (exceptionnel, incroyable, sauve des vies) et les emojis : supprimez-les sauf charte contraire.",
          "Entourez les sigles et termes techniques : expliquez-les ou remplacez-les.",
        ],
      },
      {
        title: 'Passe 3 — longueur',
        actions: [
          "Collez le texte dans Word : le nombre de mots s'affiche dans la barre d'état (ou Révision > Statistiques).",
          "Ne faites pas confiance au nombre de mots annoncé par l'IA : il est souvent faux.",
        ],
      },
    ],
    table: {
      columns: ['Élément du brouillon', 'Fiche de faits', 'Verdict', 'Correction'],
      rows: [
        ['« plus de 27 000 patients »', 'F6 : 27 500', 'Arrondi', '« 27 500 patients »'],
        ['« 97 % des livraisons à l\'heure »', 'F4 : 109 sur 112', 'Calculé, absent du document', '« 109 livraisons sur 112 à la date prévue » ou supprimer'],
        ['« 26 tonnes », « 9 centres »', 'F3, F2', 'Conformes', '—'],
        ['Objectif de 24 000', 'F6', 'Oublié : le message central disparaît', 'Ajouter « pour un objectif de 24 000 »'],
        ['« Un succès exceptionnel », 🚚, « sauve des vies »', '—', 'Superlatifs, emoji', 'Supprimer'],
        ['Longueur', '—', '163 mots dans Word (148 annoncés)', 'Raccourcir à 150 maximum'],
      ],
    },
    result: "Un tableau de contrôle qui liste chaque défaut, sa preuve dans la fiche de faits et la correction à demander.",
    tip: "Le message central sert aussi de contrôle : si le brouillon ne permet plus de comprendre que l'objectif a été dépassé, il a perdu l'essentiel, même si tous ses chiffres sont justes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Corriger par consignes ciblées et finaliser le post',
    intro: "Ne relancez pas le prompt complet : vous perdriez ce qui était bon. Donnez dans la même conversation une liste de corrections numérotées, puis faites vous-même les dernières retouches.",
    steps: [
      {
        title: 'Demander les corrections',
        actions: [
          "Dans la même conversation, collez la liste des corrections du tableau de contrôle, numérotées.",
          "Terminez par « Ne change rien d'autre » pour protéger les parties validées.",
          "Refaites les trois passes sur la nouvelle version, plus rapidement.",
        ],
      },
      {
        title: 'Finaliser',
        actions: [
          "Vérifiez que les deux ou trois premières lignes (ce qui s'affiche avant « … voir plus ») contiennent l'accroche et le message central.",
          "Vérifiez la mention du bailleur exigée par la convention.",
          "Enregistrez la version finale dans 02_Brouillons sous Post_LinkedIn_v-finale.docx.",
        ],
      },
    ],
    example: {
      title: 'Consigne de correction, puis post final (142 mots)',
      lines: [
        "Consigne : « Corrige uniquement : (1) remplace « plus de 27 000 » par « 27 500 » et ajoute l'objectif de 24 000 ; (2) supprime « 97 % » ; (3) supprime l'emoji, « succès exceptionnel » et « sauve des vies » ; (4) ramène le texte à 150 mots maximum en raccourcissant le paragraphe sur le défi. Ne change rien d'autre. »",
        "« Les pluies d'avril ont coupé la route pendant douze jours. Les médicaments, eux, ont continué d'arriver.",
        "De janvier à juin 2026, le projet Route Santé Nord-Kivu a approvisionné 9 centres de santé des territoires de Masisi et Rutshuru depuis notre entrepôt de Goma : 26 tonnes de médicaments et d'intrants nutritionnels livrées, et 27 500 patients traités, pour un objectif initial de 24 000.",
        "Quand la route principale a été coupée, un itinéraire de contournement trouvé avec le Logistics Cluster, la plateforme de coordination logistique humanitaire, et des motos pour le dernier tronçon ont maintenu les livraisons : aucun centre n'est resté plus de 72 heures sans médicaments.",
        "Merci à nos équipes et à ECHO, qui finance ce projet. Prochaine étape : constituer des stocks de réserve dans les centres les plus exposés avant les pluies de septembre.",
        "#Logistique #SantéPublique #NordKivu »",
      ],
    },
    result: "Un post de 142 mots : accroche en deux phrases, message central visible avant « voir plus », quatre chiffres tous traçables (F2, F3, F6, F8), sigle expliqué, bailleur mentionné.",
    pitfall: "Corriger en demandant « améliore le texte » : l'IA réécrit tout, réintroduit des superlatifs et vous oblige à refaire le contrôle complet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Compléter la section 4 du gabarit (Avant / Après)',
    intro: "La section 4 met côte à côte les faits du document source et le support transformé. Elle sert à la relecture par une deuxième personne : en un coup d'œil, elle vérifie que rien n'a été inventé.",
    steps: [
      {
        title: 'Remplir le tableau Avant / Après',
        actions: [
          "Colonne « AVANT — extrait du document source » : gardez uniquement les lignes de la fiche de faits réellement utilisées dans le post (F2, F3, F6, F7, F8, F9 pour ECHO).",
          "Colonne « APRÈS — brouillon du support de communication » : collez le post final.",
          "Dans le post, ajoutez entre crochets après chaque chiffre la référence de fait (« 27 500 [F6] ») — dans le gabarit seulement, jamais dans le texte publié.",
        ],
      },
      {
        title: 'Archiver le prompt',
        actions: [
          "Copiez le prompt final (avec les corrections) dans un fichier « Mes_prompts_com.docx », rubrique « Transformation → post LinkedIn ».",
          "Notez l'outil utilisé et le nombre d'itérations.",
        ],
      },
    ],
    example: {
      title: 'Section 4 — gabarit_LinkedIn.docx (extrait)',
      lines: [
        "AVANT : F6 « 27 500 patients ont reçu un traitement… contre un objectif initial de 24 000 » | F3 « 26 tonnes… » | F2 « 9 centres de santé… » | F7 « Du 14 au 25 avril… » | F8 « aucun centre n'a été privé de médicaments plus de 72 heures » | F9 « financé par ECHO »",
        "APRÈS : « Les pluies d'avril ont coupé la route pendant douze jours [F7]… 9 centres [F2]… 26 tonnes [F3]… 27 500 patients traités, pour un objectif initial de 24 000 [F6]… plus de 72 heures [F8]… ECHO [F9]… »",
      ],
    },
    result: "Sections 1 à 4 de gabarit_LinkedIn.docx complètes ; le prompt réutilisable est archivé. La section 5 (relecture) sera remplie à la procédure 9, une fois le visuel choisi.",
  },

  // ───────────── Procédure 3 — Déclinaison multi-canal ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 3',
    title: 'Décliner le compte-rendu en article de newsletter interne',
    intro: "Même document, même message central, autre audience : le personnel des trois sites connaît le projet de nom et veut savoir ce que l'équipe a accompli. Le ton change, la longueur aussi, et les remerciements nominatifs deviennent possibles.",
    steps: [
      {
        title: 'Adapter le prompt',
        actions: [
          "Dans la même conversation Claude, reprenez la structure CLARTE et changez seulement A, L et T en recopiant la section 3 de gabarit_Newsletter.docx.",
          "Autorisez les chiffres opérationnels (112 livraisons, 109 à date, rupture 31 % → 6 %) que l'audience interne apprécie.",
          "Autorisez le nom de Jean-Claude Baraka (accord obtenu à la procédure 1).",
        ],
      },
      {
        title: 'Contrôler',
        actions: [
          "Refaites les trois passes (chiffres, ton, longueur) avec la fiche de faits.",
          "Vérifiez que l'article remercie l'équipe sans exagérer les faits.",
          "Remplissez les sections 2 à 4 de gabarit_Newsletter.docx.",
        ],
      },
    ],
    example: {
      title: 'Prompt et article final (159 mots)',
      lines: [
        "Prompt : « Avec le même compte-rendu, rédige un article de 200 mots maximum pour la newsletter interne envoyée vendredi au personnel de nos trois sites, qui connaît le projet de nom. Même message central. Ton chaleureux et reconnaissant. Tu peux citer Jean-Claude Baraka et donner les chiffres opérationnels. Mêmes restrictions sur les chiffres. Propose un titre de 12 mots maximum. »",
        "Titre : « Route Santé Nord-Kivu : six mois, 112 livraisons, et un grand merci »",
        "« Le 30 juin, le projet Route Santé Nord-Kivu s'est achevé. En six mois, l'équipe logistique de Goma — huit personnes, dont trois chauffeurs — a livré 26 tonnes de médicaments et d'intrants nutritionnels à 9 centres de santé de Masisi et Rutshuru, en 112 livraisons dont 109 à la date prévue.",
        "Dans les centres, la rupture des médicaments traceurs est passée de 31 % en janvier à 6 % en juin, et 27 500 patients ont été traités, au-delà de l'objectif de 24 000.",
        "Le moment le plus difficile : du 14 au 25 avril, la route Sake–Masisi était coupée. Grâce au contournement préparé avec le Logistics Cluster et aux motos de relais, aucun centre n'a manqué de médicaments plus de 72 heures.",
        "Ce que nous retenons pour septembre : pré-positionner trois semaines de stock dans les quatre centres les plus exposés. Bravo à Jean-Claude Baraka et à toute l'équipe de Goma ! »",
      ],
    },
    result: "Un article de 159 mots avec un titre, dont les sept chiffres sont tous présents dans la fiche de faits (F1 à F10), et le gabarit Newsletter rempli jusqu'à la section 4.",
    tip: "Changer seulement A, L et T d'un prompt validé est la façon la plus rapide de décliner un contenu : le C (document) et le R (restrictions) restent identiques, donc la fidélité aussi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 3',
    title: 'Rédiger le texte de la diapositive pour la réunion du Logistics Cluster',
    intro: "Une diapositive de réunion de coordination n'est pas un post raccourci : les autres logisticiens veulent une information utile pour leurs propres opérations. Le format est très contraint — un titre-message, trois chiffres, une leçon.",
    steps: [
      {
        title: 'Demander les éléments séparément',
        actions: [
          "Demandez un titre-message de 15 mots maximum, trois chiffres avec un intitulé de 6 mots maximum chacun, une leçon opérationnelle de 20 mots maximum.",
          "Autorisez le vocabulaire technique : l'audience est du métier.",
          "Demandez deux propositions pour le titre et choisissez vous-même.",
        ],
      },
      {
        title: 'Contrôler et préparer la saisie',
        actions: [
          "Vérifiez chaque chiffre dans la fiche de faits.",
          "Comptez : 40 mots maximum sur toute la diapositive.",
          "Remplissez gabarit_Diapo-Cluster.docx et gardez le texte prêt à copier dans Google Slides (procédure 8).",
        ],
      },
    ],
    example: {
      title: 'Texte de la diapositive (37 mots)',
      lines: [
        "Titre : « Route Santé Nord-Kivu : approvisionnement maintenu malgré 12 jours de coupure »",
        "Chiffre 1 : « 26 t livrées à 9 centres de santé »",
        "Chiffre 2 : « 109 livraisons sur 112 à la date prévue »",
        "Chiffre 3 : « Rupture traceurs : 31 % → 6 % »",
        "Leçon : « Contournement par piste secondaire + transbordement moto : à formaliser avec le Cluster avant septembre. »",
      ],
    },
    result: "Un texte de diapositive de 37 mots, technique, entièrement traçable, prêt à être saisi à côté de l'image générée par Gemini.",
    pitfall: "Réutiliser le post LinkedIn sur la diapositive : des pairs n'ont que faire de « Merci à nos équipes » ; ils veulent la leçon opérationnelle que vous êtes seul à pouvoir partager.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 3',
    title: 'Contrôler la cohérence des chiffres entre les trois supports',
    intro: "Trois supports publiés la même semaine seront lus par des personnes qui se parlent. Un chiffre différent d'un support à l'autre suffit à faire douter de tous les autres.",
    steps: [
      {
        title: 'Construire le tableau de cohérence',
        actions: [
          "Dans la fiche de faits, ajoutez trois colonnes : LinkedIn, Newsletter, Diapositive.",
          "Pour chaque fait, recopiez la formulation exacte utilisée dans chaque support, ou « — » s'il n'est pas utilisé.",
          "Vérifiez que la valeur est identique partout ; seule la formulation peut changer.",
        ],
      },
    ],
    table: {
      columns: ['Fait', 'LinkedIn', 'Newsletter', 'Diapositive', 'Statut'],
      rows: [
        ['F6 — patients', '27 500 / objectif 24 000', '27 500 / objectif 24 000', '—', '✔'],
        ['F3 — tonnage', '26 tonnes', '26 tonnes', '26 t', '✔'],
        ['F2 — centres', '9 centres', '9 centres', '9 centres', '✔'],
        ['F4 — livraisons', '—', '112 dont 109 à date', '109 sur 112', '✔'],
        ['F5 — rupture', '—', '31 % → 6 %', '31 % → 6 %', '✔'],
        ['F7 — coupure', 'douze jours', 'du 14 au 25 avril', '12 jours', '✔ (même période)'],
        ['F8 — 72 h', 'plus de 72 heures', 'plus de 72 heures', '—', '✔'],
      ],
    },
    result: "Un tableau de cohérence entièrement « ✔ » : les trois supports racontent les mêmes faits, avec des valeurs identiques.",
    tip: "Gardez ce tableau : si un partenaire demande la source d'un chiffre dans six mois, vous retrouvez en dix secondes la phrase exacte du compte-rendu.",
  },

  // ───────────── Procédure 4 — Choisir l'outil visuel ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 3',
    title: 'Qualifier chaque besoin visuel avec cinq questions',
    intro: "Le bon outil se choisit à partir du besoin, jamais par habitude. Cinq questions suffisent à qualifier un besoin ; la première est presque toujours décisive.",
    steps: [
      {
        title: 'Poser les cinq questions pour chaque support',
        actions: [
          "Q1 — Le visuel doit-il contenir un texte, un chiffre ou un titre exact ? Si oui : Claude en SVG, ou texte ajouté après coup.",
          "Q2 — Le support est-il interne ou externe ? Externe : exigence de qualité et de vérification plus forte.",
          "Q3 — Dans quel environnement le support est-il produit (Microsoft 365, Google Workspace, autonome) ?",
          "Q4 — Quel format et quelles dimensions exige le canal ?",
          "Q5 — Quel délai et quel budget créatif ?",
        ],
      },
    ],
    table: {
      columns: ['Besoin', 'Q1 Texte exact ?', 'Q2', 'Q3 Environnement', 'Q4 Format', 'Q5 Délai'],
      rows: [
        ['V1 — Image du post LinkedIn', 'Option A : non (illustration) ; option B : oui (3 chiffres)', 'Externe', 'Autonome (page LinkedIn)', '1200 × 627', 'Ven. 17/07'],
        ['V2 — Bannière newsletter', 'Non (titre ajouté dans Word)', 'Interne', 'Word / Outlook', '600 × 200', 'Ven. 17/07, sans budget'],
        ['V3 — Image diapositive Cluster', 'Non (texte saisi dans Slides)', 'Pairs externes', 'Google Slides partagé', 'Demi-diapositive 16:9', 'Mer. 15/07, 17 h'],
      ],
    },
    result: "Trois besoins visuels qualifiés. Pour V1, deux options réellement différentes existent : c'est exactement le cas où l'on compare deux outils avant de choisir.",
    pitfall: "Sauter Q1 : c'est elle qui évite de demander une infographie chiffrée à un générateur d'image classique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 3',
    title: 'Utiliser la grille comparative du module (feuilles « Aide à la décision » et « Comparatif outils »)',
    intro: "Le classeur comparatif-outils-generation-visuels-ia.xlsx contient trois feuilles : « Comparatif outils » (une ligne par outil, six colonnes), « Aide à la décision » (une liste déroulante qui donne l'outil recommandé) et « Mapping » (la table de correspondance utilisée par la formule).",
    steps: [
      {
        title: 'Obtenir l\'outil recommandé',
        actions: [
          "Enregistrez une copie du classeur dans 02_Brouillons : comparatif_RouteSante.xlsx.",
          "Ouvrez la feuille « Aide à la décision », cliquez en B5 et choisissez le besoin dans la liste déroulante (cinq choix).",
          "Lisez l'outil recommandé en C5 (formule RECHERCHEV sur la feuille « Mapping »).",
          "Répétez pour chaque besoin et notez le résultat.",
        ],
      },
      {
        title: 'Lire la ligne de l\'outil',
        actions: [
          "Ouvrez la feuille « Comparatif outils » (en-têtes en ligne 4 : Outil, Meilleur usage, Forces, Limites, Rapidité, Intégration).",
          "Pour chaque outil recommandé, lisez sa ligne (5 à 8) et notez la limite à surveiller pendant la génération.",
        ],
      },
    ],
    table: {
      columns: ['Choix en B5', 'Résultat en C5', 'Limite notée (colonne D)'],
      rows: [
        ['Post réseau social avec image d\'illustration', 'ChatGPT (DALL-E)', 'Texte dans l\'image souvent déformé ou illisible'],
        ['Infographie de données avec chiffres exacts', 'Claude (code SVG/HTML)', 'Pas de rendu photo-réaliste ; ouvrir / exporter le code'],
        ['Visuel rapide pour un support interne', 'Copilot Designer', 'Moins précis pour un visuel de marque externe'],
        ['Visuel de présentation intégré à un document Google', 'Gemini', 'Même limite du texte intégré'],
        ['Bannière avec texte exact à conserver', 'Claude (code SVG/HTML)', '(non utilisé dans le fil rouge)'],
      ],
    },
    result: "Pour chaque besoin, l'outil recommandé par la grille et la limite précise à surveiller pendant la génération.",
    tip: "Ne modifiez pas les lignes 5 à 8 de « Comparatif outils » : ce sont les valeurs de référence. Vos observations iront en dessous, à la procédure 9.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 3',
    title: 'Établir le plan visuel',
    intro: "Le plan visuel fixe, avant toute génération, l'outil, le format, la méthode de prompt et le prompt de départ de la bibliothèque pour chaque visuel. Il évite de découvrir le bon format après trois générations.",
    steps: [
      {
        title: 'Rédiger le plan',
        actions: [
          "Pour chaque besoin, notez : outil principal, outil de comparaison éventuel, format exact, méthode (CLARTE ou STAR), prompt de départ dans la bibliothèque.",
          "Pour V1, prévoyez deux générations avec deux outils différents (illustration ChatGPT et infographie Claude).",
          "Faites valider le plan en deux minutes par la personne qui valide la publication.",
        ],
      },
    ],
    table: {
      columns: ['Visuel', 'Outil', 'Format', 'Méthode', 'Prompt de départ (bibliothèque)'],
      rows: [
        ['V1-A Illustration post', 'ChatGPT (DALL-E)', '1200 × 627', 'STAR', 'Section 3 — Post LinkedIn, annonce d\'entreprise'],
        ['V1-B Infographie post', 'Claude (SVG)', '1200 × 627', 'CLARTE', 'Section 4 — Carte citation / statistique'],
        ['V2 Bannière newsletter', 'Copilot Designer', '600 × 200', 'STAR', 'Section 5 — Bannière Teams / communication interne'],
        ['V3 Image diapositive', 'Gemini (Slides)', 'Demi-diapositive 16:9', 'CLARTE', 'Section 7 — Flyer événement dans Google Slides'],
      ],
    },
    result: "Un plan visuel de quatre lignes, validé par Furaha Bisimwa le 13/07 à 15 h : « OK, montre-moi les deux options pour LinkedIn avant de choisir. »",
  },

  // ───────────── Procédure 5 — ChatGPT / DALL-E ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Rédiger le prompt d\'illustration (méthode STAR + 7 éléments)',
    intro: "Vous partez du prompt « Post LinkedIn — annonce d'entreprise » de la bibliothèque et du Prompt 2 du module, et vous vérifiez la présence des sept éléments d'un prompt visuel. L'image ne contient aucun texte : c'est la condition pour utiliser cet outil.",
    steps: [
      {
        title: 'Construire le prompt',
        actions: [
          "S : résumez le post déjà rédigé en une phrase.",
          "T : nommez l'objectif et excluez explicitement tout texte dans l'image.",
          "A : sujet unique, style nommé, composition avec espace négatif, palette codée, ambiance, format exact, exclusions.",
          "R : critère de réussite et vérification en grand format annoncée.",
          "Cochez les 7 éléments sur la liste de la bibliothèque avant d'envoyer.",
        ],
      },
    ],
    example: {
      title: 'Prompt d\'illustration — fil rouge (à copier)',
      lines: [
        "« Situation : j'ai rédigé un post LinkedIn annonçant qu'un projet humanitaire a maintenu l'approvisionnement en médicaments de centres de santé ruraux malgré une route coupée par les pluies.",
        "Tâche : je veux une image d'accompagnement qui illustre une chaîne logistique qui continue malgré les obstacles, sans aucun texte à l'intérieur de l'image.",
        "Action : génère une illustration au style photographique réaliste et chaleureux, format paysage 1200 × 627, représentant une moto chargée de cartons sur une piste de terre rouge humide, collines verdoyantes en arrière-plan, lumière de fin de matinée après la pluie. Le conducteur est vu de dos ou de loin. Composition selon la règle des tiers, moto dans le tiers droit, tiers gauche dégagé. Tons dominants : vert et bleu marine.",
        "Exclusions : aucun texte, aucune inscription sur les cartons ou le véhicule, aucun logo, aucun emblème de croix ou de croissant, aucun visage en gros plan, aucun enfant.",
        "Résultat attendu : une image publiable telle quelle, que je vérifierai en grand format avant diffusion. »",
      ],
    },
    result: "Un prompt STAR où les sept éléments sont présents et cochés : sujet, style, composition, palette, ambiance, format, exclusions.",
    tip: "L'exclusion « aucune inscription sur les cartons ou le véhicule » est la plus utile : c'est là que les générateurs placent le plus souvent un faux texte ou un faux logo.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Générer l\'image et l\'inspecter en grand format',
    intro: "Une vignette de prévisualisation cache presque toutes les hallucinations. Vous ouvrez l'image à 100 % et vous la parcourez avec une grille d'inspection, zone par zone.",
    steps: [
      {
        title: 'Générer',
        actions: [
          "Ouvrez une nouvelle conversation ChatGPT (compte professionnel), collez le prompt et envoyez.",
          "Si le format n'est pas respecté, précisez « format paysage, ratio 1,91:1 » et relancez une fois.",
          "Téléchargez l'image (bouton de téléchargement), rangez-la dans 02_Brouillons sous V1A_illustration_v1.png.",
        ],
      },
      {
        title: 'Inspecter',
        actions: [
          "Ouvrez le fichier dans la visionneuse de photos, zoom à 100 %, puis parcourez l'image en quatre quarts.",
          "Vérifiez : mains et doigts, roues et rayons, ombres cohérentes, inscriptions sur les objets, logos ou emblèmes, symétries anormales, objets dupliqués.",
          "Vérifiez le contexte : paysage, véhicules et vêtements plausibles pour la région, aucune scène de détresse.",
          "Notez chaque défaut avec sa position (« carton arrière gauche : pseudo-texte »).",
        ],
      },
    ],
    example: {
      title: 'Inspection de la version 1 — fil rouge',
      lines: [
        "Vignette : image réussie, ambiance juste.",
        "Zoom 100 % — carton arrière : inscription fantôme « MEDCAL SUPPLLY » ; flanc de la moto : petite croix rouge sur fond blanc.",
        "Zoom 100 % — main gauche du conducteur : doigts fusionnés.",
        "Verdict : non publiable (pseudo-texte, emblème protégé, main déformée).",
      ],
    },
    result: "Une image téléchargée, inspectée à 100 %, avec la liste écrite et localisée de ses défauts.",
    pitfall: "Valider sur la vignette : en miniature, « MEDCAL SUPPLLY » ressemble à un vrai texte et la croix rouge passe pour un détail décoratif.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Itérer une variable à la fois — ou corriger hors de l\'outil',
    intro: "La section 2 de la bibliothèque est claire : on corrige un problème à la fois, avec la formule « la même image, sans [élément] ». Changer style, couleurs et composition en même temps rend impossible de savoir ce qui a amélioré ou dégradé le résultat.",
    steps: [
      {
        title: 'Itérer',
        actions: [
          "Traitez le défaut le plus grave d'abord (emblème, texte, puis anatomie).",
          "Écrivez une seule consigne par génération, dans la même conversation.",
          "Notez chaque version dans un petit journal : version, consigne, résultat.",
          "Règle d'arrêt : après trois générations sans progrès sur le même défaut, arrêtez.",
        ],
      },
      {
        title: 'Si le défaut persiste : corriger plutôt que régénérer',
        actions: [
          "Défaut en bordure (inscription sur un carton, élément parasite) : PowerPoint > Format de l'image > Rogner, en conservant le ratio 1,91:1.",
          "Petit défaut isolé : recouvrez-le d'une forme de la couleur du fond, ou rognez.",
          "Défaut central (main, visage) impossible à corriger proprement : changez de sujet (« conducteur vu de loin ») ou d'option visuelle.",
        ],
      },
    ],
    table: {
      columns: ['Version', 'Consigne (une seule variable)', 'Résultat'],
      rows: [
        ['v1', 'Prompt initial', 'Pseudo-texte sur carton, croix rouge, main déformée'],
        ['v2', '« La même image, sans aucune inscription ni symbole sur les cartons et la moto »', 'Cartons et moto nets ; main toujours déformée'],
        ['v3', '« La même image, conducteur vu de dos, plus éloigné, mains non visibles »', 'Aucun défaut visible à 100 % ✔'],
      ],
    },
    result: "Une image V1A_illustration_v3.png sans défaut visible, obtenue en trois générations, avec un journal d'itérations qui montre ce qui a fonctionné.",
    tip: "Le problème est le texte ? N'itérez pas du tout : la bibliothèque recommande de basculer directement sur Claude en SVG ou d'ajouter le texte après coup.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Finaliser l\'illustration : dimensions, texte alternatif, archivage',
    intro: "Une image validée doit encore respecter exactement le format du canal, porter un texte alternatif et rester traçable (quel outil, quel prompt), surtout parce qu'il s'agit d'une illustration et non d'une photo du projet.",
    steps: [
      {
        title: 'Vérifier les dimensions',
        actions: [
          "Clic droit sur le fichier > Propriétés > Détails : lisez largeur et hauteur.",
          "Calculez le ratio largeur ÷ hauteur : il doit être proche de 1,91 (1200 ÷ 627).",
          "Sinon, insérez l'image dans une diapositive PowerPoint, rognez au bon ratio, puis clic droit > Enregistrer en tant qu'image > PNG.",
        ],
      },
      {
        title: 'Préparer la publication',
        actions: [
          "Rédigez le texte alternatif en une phrase, en mentionnant qu'il s'agit d'une illustration.",
          "Renommez le fichier final : V1A_illustration_ChatGPT_final.png.",
          "Archivez le prompt final dans Mes_prompts_com.docx, rubrique « Illustration post LinkedIn ».",
        ],
      },
    ],
    example: {
      title: 'Finalisation — fil rouge',
      lines: [
        "Dimensions lues : 1536 × 1024 (ratio 1,5) → rognée dans PowerPoint au ratio 1,91 puis exportée : 1536 × 804 ✔",
        "Texte alternatif : « Illustration : une moto chargée de cartons de médicaments roule sur une piste de terre humide, entre des collines vertes. »",
        "Fichier : V1A_illustration_ChatGPT_final.png — prompt archivé (3 versions).",
      ],
    },
    result: "L'option A du visuel LinkedIn est prête : bon ratio, texte alternatif honnête, prompt archivé. Elle sera comparée à l'option B (procédure 9).",
    pitfall: "Écrire en légende « Nos équipes sur la route de Masisi » sous une image générée : c'est présenter une illustration comme une photo du projet, et un donateur qui le découvre doutera de tout le reste.",
  },

  // ───────────── Procédure 6 — Claude SVG ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Rédiger le prompt d\'infographie SVG (norme CLARTE)',
    intro: "Dès qu'un chiffre doit être lisible dans le visuel, Claude et le code SVG s'imposent : le texte y est saisi caractère par caractère, donc exact. Les chiffres sont recopiés depuis la fiche de faits, jamais retapés de mémoire.",
    steps: [
      {
        title: 'Construire le prompt',
        actions: [
          "A : rôle de designer de supports de communication.",
          "C : les trois chiffres exacts avec leur intitulé, copiés depuis la fiche de faits.",
          "L : code SVG complet, dimensions exactes, disposition en trois blocs, titre.",
          "R : texte exact, deux couleurs codées, police système lisible, pas d'image bitmap, code seul.",
          "T : sobre et institutionnel ; fond blanc.",
        ],
      },
    ],
    example: {
      title: 'Prompt d\'infographie — fil rouge (à copier)',
      lines: [
        "« Tu es designer de supports de communication pour une organisation humanitaire. [A]",
        "Voici les trois chiffres clés d'un projet clôturé, à reproduire exactement : « 27 500 » avec l'intitulé « patients traités » et le sous-intitulé « objectif : 24 000 » ; « 26 tonnes » avec « de médicaments et d'intrants livrées » ; « 9 » avec « centres de santé approvisionnés ». [C]",
        "Génère le code SVG complet d'une infographie de 1200 × 627 pixels : en haut, le titre « Route Santé Nord-Kivu — janvier à juin 2026 » ; en dessous, trois blocs alignés, chacun avec une forme géométrique simple, le chiffre en très grand et l'intitulé en dessous. [L]",
        "Deux couleurs seulement : bleu marine #1B3A5C et vert #2E8B57, fond blanc, police Arial ou sans-serif. Le texte doit être exact, accents compris, sans aucune approximation. Pas d'image bitmap, pas de logo. [R]",
        "Style sobre et institutionnel, beaucoup d'espace blanc. [T] Fournis uniquement le code SVG, en commençant par la déclaration XML en UTF-8. »",
      ],
    },
    result: "Un prompt CLARTE qui contient les chiffres exacts entre guillemets, les dimensions, les codes couleur et l'exigence d'encodage UTF-8.",
    tip: "Mettez chaque texte à afficher entre guillemets dans le prompt : vous verrez immédiatement, dans le code, si l'IA l'a reformulé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Récupérer le code et l\'ouvrir dans un navigateur',
    intro: "Claude ne vous donne pas une image mais un fichier texte qui décrit l'image. Vous l'enregistrez avec la bonne extension et le bon encodage, puis le navigateur le dessine.",
    steps: [
      {
        title: 'Si Claude affiche un aperçu',
        actions: [
          "Vérifiez le rendu dans le panneau d'aperçu, puis utilisez le bouton de téléchargement ou de copie du code.",
        ],
      },
      {
        title: 'Enregistrer le fichier à la main',
        actions: [
          "Cliquez sur « Copier » au-dessus du bloc de code.",
          "Ouvrez le Bloc-notes, collez, puis Fichier > Enregistrer sous.",
          "Type : « Tous les fichiers (*.*) » ; Encodage : UTF-8 ; Nom : V1B_infographie_v1.svg.",
          "Double-cliquez sur le fichier : il s'ouvre dans Edge ou Chrome.",
        ],
      },
    ],
    example: {
      title: 'Début du code reçu (extrait)',
      lines: [
        `<?xml version="1.0" encoding="UTF-8"?>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="627" viewBox="0 0 1200 627">`,
        `  <rect width="1200" height="627" fill="#FFFFFF"/>`,
        `  <text x="600" y="90" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="#1B3A5C">Route Santé Nord-Kivu — janvier à juin 2026</text>`,
        `  <circle cx="200" cy="230" r="48" fill="#2E8B57"/>`,
        `  <text x="200" y="380" text-anchor="middle" font-size="92" font-weight="700" fill="#1B3A5C">27 500</text>`,
        `  …`,
      ],
    },
    result: "Le fichier V1B_infographie_v1.svg s'ouvre dans le navigateur et affiche l'infographie complète, accents corrects.",
    pitfall: "Enregistrer en « .svg.txt » ou en ANSI : le fichier s'ouvre dans le Bloc-notes au lieu du navigateur, ou « Santé » devient « SantÃ© ». Vérifiez le type « Tous les fichiers » et l'encodage UTF-8.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Contrôler le rendu et demander les corrections',
    intro: "Le texte d'un SVG est exact par construction… s'il a été bien recopié. Vous contrôlez chaque chaîne de caractères contre la fiche de faits, puis la mise en page dans le navigateur.",
    steps: [
      {
        title: 'Contrôler le texte',
        actions: [
          "Dans le navigateur, lisez chaque chiffre et chaque intitulé ; comparez-les à la fiche de faits (F2, F3, F6).",
          "Vérifiez les accents et les espaces dans les nombres (« 27 500 », pas « 27500 »).",
        ],
      },
      {
        title: 'Contrôler la mise en page',
        actions: [
          "Réduisez la fenêtre du navigateur (Ctrl + molette) : un intitulé qui déborde de son bloc ou se superpose à un autre est à corriger.",
          "Vérifiez le contraste : texte vert sur blanc lisible, aucune couleur hors charte.",
        ],
      },
      {
        title: 'Corriger',
        actions: [
          "Dans la même conversation, listez les corrections numérotées et terminez par « Renvoie le code SVG complet corrigé ».",
          "Enregistrez la nouvelle version sous V1B_infographie_v2.svg et recontrôlez.",
        ],
      },
    ],
    example: {
      title: 'Contrôle et correction — fil rouge',
      lines: [
        "Constat v1 : chiffres exacts ✔ ; l'intitulé « de médicaments et d'intrants livrées » déborde du bloc central ; « objectif : 24 000 » est en gris clair, à peine lisible.",
        "Consigne : « (1) Coupe l'intitulé du bloc central sur deux lignes : « de médicaments » / « et d'intrants livrées » ; (2) affiche « objectif : 24 000 » en vert #2E8B57, taille 26. Renvoie le code SVG complet corrigé. »",
        "Contrôle v2 : texte exact, aucun débordement, contraste suffisant ✔",
      ],
    },
    result: "V1B_infographie_v2.svg : texte identique à la fiche de faits, aucun débordement, deux couleurs de charte uniquement.",
    tip: "Pour une petite correction (une couleur, une taille), vous pouvez aussi modifier vous-même la valeur dans le Bloc-notes : fill=\"#2E8B57\" ou font-size=\"26\". Enregistrez et actualisez le navigateur (F5).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Exporter l\'infographie en PNG pour la publication',
    intro: "LinkedIn et la plupart des réseaux n'acceptent pas le SVG : vous exportez une image PNG, en gardant le SVG comme fichier source modifiable.",
    steps: [
      {
        title: 'Exporter via PowerPoint',
        actions: [
          "Ouvrez une présentation vierge > Insertion > Images > Cet appareil > choisissez V1B_infographie_v2.svg.",
          "Agrandissez l'image à toute la largeur de la diapositive en tirant un coin (proportions conservées).",
          "Clic droit sur l'image > Enregistrer en tant qu'image > Type : PNG > Nom : V1B_infographie_Claude_final.png.",
        ],
      },
      {
        title: 'Vérifier',
        actions: [
          "Propriétés > Détails : largeur d'au moins 1200 pixels et ratio proche de 1,91. Si l'image est plus petite, agrandissez-la davantage dans PowerPoint et réexportez.",
          "Ouvrez le PNG à 100 % et relisez une dernière fois les trois chiffres.",
          "Rédigez le texte alternatif : il reprend les chiffres, puisqu'un lecteur d'écran ne lit pas le texte d'une image PNG.",
        ],
      },
    ],
    example: {
      title: 'Finalisation — fil rouge',
      lines: [
        "Export PNG : 1600 × 836 pixels, ratio 1,91 ✔ ; chiffres relus à 100 % ✔",
        "Texte alternatif : « Infographie : projet Route Santé Nord-Kivu, janvier à juin 2026 — 27 500 patients traités (objectif : 24 000), 26 tonnes de médicaments et d'intrants livrées, 9 centres de santé approvisionnés. »",
        "Archivés : V1B_infographie_v2.svg (source) et V1B_infographie_Claude_final.png ; prompt rangé dans Mes_prompts_com.docx.",
      ],
    },
    result: "L'option B du visuel LinkedIn est prête : PNG net à la bonne taille, texte alternatif complet, source SVG modifiable conservée.",
    pitfall: "Faire une capture d'écran du navigateur à 100 % : l'image sort souvent floue ou à la mauvaise taille, et l'on capture parfois la barre de défilement.",
  },

  // ───────────── Procédure 7 — Copilot Designer ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 3',
    title: 'Générer la bannière de la newsletter interne (méthode STAR)',
    intro: "Support interne, délai court, aucun budget créatif, environnement Microsoft 365 : c'est le cas d'usage de Copilot Designer. La bannière ne contient aucun texte ; le titre sera ajouté dans Word.",
    steps: [
      {
        title: 'Ouvrir l\'outil',
        actions: [
          "Ouvrez Designer depuis Copilot dans Word ou PowerPoint, ou depuis l'application Microsoft Designer, selon votre licence Microsoft 365.",
          "Si un choix de format est proposé, sélectionnez le format paysage le plus large disponible.",
        ],
      },
      {
        title: 'Lancer le prompt',
        actions: [
          "Partez du prompt « Bannière Teams / communication interne » de la bibliothèque (section 5) et adaptez-le.",
          "Envoyez, puis ouvrez chaque proposition en grand.",
        ],
      },
    ],
    example: {
      title: 'Prompt de bannière — fil rouge (à copier)',
      lines: [
        "« Situation : je dois envoyer vendredi la newsletter interne qui annonce la clôture d'un projet d'approvisionnement de centres de santé, sans budget ni délai pour un visuel travaillé.",
        "Tâche : je veux une bannière horizontale simple pour l'en-tête de cette newsletter interne.",
        "Action : génère un visuel horizontal sobre, illustration plate (flat design), aux couleurs de notre organisation, bleu marine et vert, évoquant une route qui serpente entre des collines vers un petit bâtiment de santé stylisé, avec un espace visuel dégagé en haut à gauche où j'ajouterai moi-même le titre dans Word. Sans texte, sans logo, sans croix ni emblème médical.",
        "Résultat attendu : un visuel exploitable immédiatement dans le gabarit de newsletter interne, sans retouche complexe. »",
      ],
    },
    result: "Plusieurs propositions de bannière aux couleurs de la charte, sans texte, avec une zone dégagée en haut à gauche.",
    pitfall: "Écrire « avec le titre Route Santé : merci à l'équipe ! » dans le prompt : Designer partage la limite de tous les générateurs d'image, et le titre sortirait déformé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 3',
    title: 'Choisir la proposition et la vérifier',
    intro: "Même pour un usage interne, la vérification à 100 % reste obligatoire : un faux texte dans la bannière d'une newsletter envoyée à tout le personnel se remarque immédiatement.",
    steps: [
      {
        title: 'Choisir',
        actions: [
          "Éliminez les propositions qui contiennent du pseudo-texte, un emblème ou une zone de titre encombrée.",
          "Parmi les restantes, gardez celle dont la zone haut-gauche est la plus dégagée et la plus contrastée pour un titre.",
          "Téléchargez-la : V2_banniere_Designer_v1.png.",
        ],
      },
      {
        title: 'Vérifier',
        actions: [
          "Ouvrez-la à 100 % et appliquez la même grille d'inspection qu'à la procédure 5.",
          "Vérifiez que les couleurs sont bien le bleu marine et le vert de la charte, pas un bleu ciel ou un vert pomme.",
        ],
      },
    ],
    example: {
      title: 'Choix — fil rouge',
      lines: [
        "Proposition 1 : pseudo-texte sur un panneau routier → éliminée.",
        "Proposition 2 : centre de santé surmonté d'une croix rouge → éliminée (emblème protégé).",
        "Proposition 3 : route et collines, zone haut-gauche bleu marine uni, aucun texte → retenue.",
      ],
    },
    result: "Une bannière retenue, vérifiée à 100 %, aux couleurs de la charte, avec une zone de titre exploitable.",
    tip: "Si aucune proposition ne convient, ne relancez pas le même prompt : retirez un seul élément (« la même bannière, sans le bâtiment ») comme le conseille la bibliothèque.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 3',
    title: 'Intégrer la bannière dans la newsletter et y ajouter le titre',
    intro: "La bannière d'en-tête d'un e-mail fait 600 × 200 pixels (ratio 3:1). Vous la recadrez dans Word, puis vous ajoutez le titre comme texte réel : il reste exact, modifiable et lisible par tous les lecteurs.",
    steps: [
      {
        title: 'Recadrer',
        actions: [
          "Dans le gabarit Word de la newsletter, Insertion > Images > Cet appareil > V2_banniere_Designer_v1.png.",
          "Format de l'image > Taille : largeur 15,9 cm (proportions verrouillées).",
          "Format de l'image > Rogner : rognez le haut et le bas jusqu'à une hauteur de 5,3 cm, en gardant la zone dégagée en haut à gauche.",
        ],
      },
      {
        title: 'Ajouter le titre',
        actions: [
          "Insertion > Zone de texte > Dessiner une zone de texte, placée dans la zone dégagée.",
          "Saisissez le titre de l'article, police de la charte, en blanc sur le bleu marine.",
          "Zone de texte : Format de la forme > Remplissage : aucun ; Contour : aucun.",
          "Envoyez-vous la newsletter en test et vérifiez l'affichage dans Outlook et sur téléphone.",
        ],
      },
    ],
    example: {
      title: 'Résultat — fil rouge',
      lines: [
        "Bannière recadrée à 15,9 × 5,3 cm (≈ 600 × 200 pixels à 96 ppp).",
        "Titre en blanc, gras, 20 pt : « Route Santé Nord-Kivu : six mois, 112 livraisons, et un grand merci »",
        "Test d'envoi le 16/07 à 16 h : affichage correct sur Outlook et sur téléphone ✔",
      ],
    },
    result: "Une newsletter interne dont l'en-tête combine une bannière générée et un titre exact, testée avant l'envoi de vendredi.",
    pitfall: "Grouper la zone de texte et l'image puis copier le tout dans un e-mail : selon la messagerie, le titre peut se décaler. Faites toujours un envoi test.",
  },

  // ───────────── Procédure 8 — Gemini ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 2',
    title: 'Générer l\'image directement dans la diapositive Google Slides (norme CLARTE)',
    intro: "Le Logistics Cluster prépare la réunion dans une présentation Google Slides partagée, où chaque organisation remplit sa diapositive. Gemini génère l'image sans quitter le document : ni export, ni import, ni problème de format.",
    steps: [
      {
        title: 'Ouvrir Gemini dans Slides',
        actions: [
          "Ouvrez la présentation partagée par le Cluster et placez-vous sur la diapositive attribuée à Horizon Grands Lacs.",
          "Ouvrez la génération d'image : panneau Gemini (en haut à droite) ou Insertion > Image > option de création d'image avec Gemini, selon votre version de Google Workspace.",
        ],
      },
      {
        title: 'Lancer le prompt',
        actions: [
          "Adaptez le Prompt 5 du module (une seule proposition, sans texte, sans élément superflu).",
          "Précisez que l'image occupera la moitié gauche de la diapositive.",
          "Insérez l'image proposée dans la diapositive.",
        ],
      },
    ],
    example: {
      title: 'Prompt Gemini — fil rouge (à copier)',
      lines: [
        "« Tu es assistant de mise en page pour une présentation Google Slides de réunion de coordination logistique. Je prépare la diapositive de mon organisation sur un projet d'approvisionnement de centres de santé qui a contourné une route coupée par les pluies.",
        "Génère directement dans cette diapositive une image d'illustration au style sobre et institutionnel, sans texte intégré : une piste de terre qui contourne une route inondée, vue aérienne lointaine, tons verts et bleus. Elle occupera la moitié gauche de la diapositive ; je saisirai moi-même le titre et les trois chiffres à droite.",
        "Limite-toi à une seule proposition. N'ajoute aucun cadre, filigrane ni bordure décorative. »",
      ],
    },
    result: "Une image d'illustration insérée dans la diapositive partagée, sans texte, prête à recevoir le texte préparé à la procédure 3.",
    tip: "Une vue aérienne lointaine évite d'emblée les deux défauts les plus fréquents : visages et mains mal formés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 2',
    title: 'Composer la diapositive et la vérifier',
    intro: "Le titre, les chiffres et la leçon sont saisis comme texte natif dans Slides : ils restent exacts et modifiables par les organisateurs du Cluster si la mise en page commune change.",
    steps: [
      {
        title: 'Composer',
        actions: [
          "Redimensionnez l'image pour qu'elle occupe la moitié gauche, sans la déformer (tirez par un coin).",
          "Dans la moitié droite, collez le titre-message, puis les trois chiffres en grand avec leur intitulé, puis la leçon en bas.",
          "Respectez la police et les couleurs du modèle du Cluster, pas celles d'Horizon Grands Lacs.",
        ],
      },
      {
        title: 'Vérifier',
        actions: [
          "Passez en mode Présentation et regardez l'image en plein écran : mêmes contrôles qu'à la procédure 5.",
          "Relisez les chiffres contre la fiche de faits.",
          "Envoyez le lien de la diapositive à Furaha Bisimwa pour validation avant mercredi 17 h.",
        ],
      },
    ],
    example: {
      title: 'Diapositive finale — fil rouge',
      lines: [
        "Gauche : image Gemini (piste de contournement, vue aérienne), vérifiée en plein écran ✔",
        "Droite : « Route Santé Nord-Kivu : approvisionnement maintenu malgré 12 jours de coupure » ; 26 t livrées à 9 centres ; 109 livraisons sur 112 à la date prévue ; rupture traceurs 31 % → 6 %",
        "Bas : « Contournement par piste secondaire + transbordement moto : à formaliser avec le Cluster avant septembre. »",
        "Validation de Furaha Bisimwa le 15/07 à 11 h, en commentaire Slides : « Parfait. »",
      ],
    },
    result: "La diapositive d'Horizon Grands Lacs est complète dans la présentation partagée, validée avant l'échéance du mercredi 17 h.",
    pitfall: "Générer l'image dans ChatGPT puis l'importer dans Slides « par habitude » : c'est exactement le détour que le module apprend à éviter quand le support vit déjà dans Google Workspace.",
  },

  // ───────────── Procédure 9 — Comparer, valider, publier ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 4',
    title: 'Comparer les deux options du visuel LinkedIn dans la grille',
    intro: "Vous avez deux visuels pour le même besoin, produits par deux outils différents. Vous les comparez avec les six critères de la feuille « Comparatif outils », mais cette fois avec ce que vous avez réellement observé, pas avec la réputation des outils.",
    steps: [
      {
        title: 'Préparer la comparaison dans la grille',
        actions: [
          "Ouvrez comparatif_RouteSante.xlsx, feuille « Comparatif outils ».",
          "Copiez la ligne d'en-têtes 4 (Outil, Meilleur usage, Forces, Limites, Rapidité, Intégration) et collez-la en ligne 10, sous le tableau de référence.",
          "En ligne 9, saisissez « Observations — post LinkedIn Route Santé, 14/07/2026 ».",
        ],
      },
      {
        title: 'Saisir vos observations',
        actions: [
          "Ligne 11 : ChatGPT (DALL-E) ; ligne 12 : Claude (code SVG/HTML).",
          "Pour chaque colonne, écrivez ce que vous avez constaté sur CE besoin : défauts réels, nombre d'itérations, temps passé, étapes d'export.",
          "Placez les deux visuels côte à côte à l'écran, à 100 %, au moment de remplir.",
        ],
      },
    ],
    table: {
      columns: ['Outil', 'Meilleur usage', 'Forces', 'Limites', 'Rapidité', 'Intégration'],
      rows: [
        ['ChatGPT (DALL-E)', 'Ambiance du post (option A)', 'Image chaleureuse, ratio respecté après rognage', 'Pseudo-texte, croix rouge et main déformée en v1 ; 3 versions ; peut être prise pour une photo du projet', '3 générations, environ 25 min', 'PNG à rogner dans PowerPoint'],
        ['Claude (code SVG/HTML)', 'Chiffres clés du post (option B)', 'Texte et chiffres exacts du premier coup ; charte respectée', '1 correction de mise en page ; enregistrement .svg à soigner', '2 versions, environ 20 min', 'SVG → PowerPoint → PNG'],
      ],
    },
    result: "Les lignes 9 à 12 de la feuille « Comparatif outils » contiennent vos observations réelles sur les deux options, sous les valeurs de référence inchangées.",
    tip: "Notez le temps réellement passé, export compris : c'est souvent là que la réputation d'un outil « très rapide » ne tient plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 4',
    title: 'Choisir le visuel publié et écrire la justification',
    intro: "Le choix ne se fait pas sur « la plus belle image » mais sur la correspondance avec le message central, l'audience et les risques. La justification tient en trois phrases et se range avec la grille.",
    steps: [
      {
        title: 'Décider',
        actions: [
          "Relisez le message central (section 2 du gabarit) : lequel des deux visuels le renforce le plus ?",
          "Relisez l'audience (section 3) : qu'attend-elle d'un visuel ?",
          "Listez le risque principal de chaque option.",
          "Choisissez, puis présentez les deux options à la personne qui valide, avec votre recommandation.",
        ],
      },
      {
        title: 'Justifier',
        actions: [
          "Sous la ligne 12 de la grille, saisissez « Choix retenu : » suivi de trois phrases : message, audience, risque.",
          "Indiquez le devenir de l'option non retenue (archivée, réutilisable ailleurs, supprimée).",
        ],
      },
    ],
    example: {
      title: 'Justification saisie dans la grille — fil rouge',
      lines: [
        "Choix retenu : option B, infographie Claude (V1B_infographie_Claude_final.png).",
        "Message : le message central est chiffré (27 500 contre 24 000) ; l'infographie le rend lisible en deux secondes, même sans lire le texte du post.",
        "Audience : des donateurs attendent des résultats vérifiables, pas une ambiance.",
        "Risque : l'illustration pourrait être prise pour une photo du projet ; l'infographie n'a aucun risque d'hallucination.",
        "Option A archivée dans 02_Brouillons, réutilisable pour un contenu non factuel (couverture de page, carte de vœux). Validation de Furaha Bisimwa le 15/07 : « Option B, d'accord. »",
      ],
    },
    result: "Un visuel choisi, une justification de trois phrases saisie dans la grille, et l'accord de la personne qui valide la publication.",
    pitfall: "Choisir l'option qui a demandé le plus de travail « pour ne pas l'avoir faite pour rien » : le temps passé n'est pas un critère.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 4',
    title: 'Relire avec la checklist du gabarit (section 5) et faire relire',
    intro: "La section 5 du gabarit compte cinq cases ; la section 8 de la bibliothèque ajoute cinq questions sur le visuel. Vous cochez tout, puis une deuxième personne relit — idéalement l'auteur du document, qui connaît les chiffres.",
    steps: [
      {
        title: 'Cocher la section 5 du gabarit',
        actions: [
          "☐ Tous les chiffres et faits figurent dans le document source → vérifié par la section 4 et le tableau de cohérence.",
          "☐ Le ton correspond à l'audience du canal → relu à voix haute.",
          "☐ La longueur respecte le canal → compteur de mots Word.",
          "☐ Le visuel a été vérifié en grand format → inspection à 100 %.",
          "☐ Une deuxième personne a relu → étape suivante.",
        ],
      },
      {
        title: 'Ajouter les questions de la bibliothèque et faire relire',
        actions: [
          "Vérifiez : format exact du canal, texte ajouté après génération sans faute, couleurs de la charte, comparaison avec au moins une alternative.",
          "Envoyez au relecteur le gabarit complet (sections 1 à 4) et le visuel, avec une question précise : « Peux-tu vérifier ces 4 chiffres contre ton compte-rendu ? »",
          "Intégrez ses corrections, puis remplissez « Rédigé par (nom, fonction) » et « Date ».",
        ],
      },
    ],
    example: {
      title: 'Relecture — fil rouge',
      lines: [
        "Relecteur : Jean-Claude Baraka, auteur du compte-rendu, le 15/07 à 14 h.",
        "Retour : « Chiffres conformes. Une précision : ce sont 27 500 patients traités, pas « soignés » — garde bien « traités ». » → déjà le cas ✔",
        "Signature du gabarit : Rédigé par Amani Kahindo, chargée administrative et logistique — 15/07/2026.",
      ],
    },
    result: "Trois gabarits avec section 5 entièrement cochée et signature remplie ; chaque support a été relu par l'auteur du document source.",
    tip: "Faites relire par l'auteur du document : il repère en dix secondes une nuance de sens (« traités » contre « soignés ») qu'aucune IA ni aucun relecteur extérieur ne verrait.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 4 sur 4',
    title: 'Publier, archiver et enrichir votre bibliothèque de prompts',
    intro: "La publication est faite par la personne habilitée sur le compte officiel. Votre dernier travail consiste à rendre la prochaine publication deux fois plus rapide : archiver les fichiers finaux et les prompts qui ont fonctionné.",
    steps: [
      {
        title: 'Publier',
        actions: [
          "Transmettez à la personne qui publie : le texte final, le PNG, le texte alternatif, l'heure de publication prévue.",
          "Sur LinkedIn, le texte alternatif se saisit à l'ajout de l'image (option de texte alternatif de l'éditeur d'image).",
          "Après publication, ouvrez le post depuis un téléphone : accroche visible avant « voir plus », image nette, aucun caractère cassé.",
        ],
      },
      {
        title: 'Archiver',
        actions: [
          "Déplacez dans 03_Publie : textes finaux, visuels finaux, gabarits signés, grille comparative, fiche de faits.",
          "Dans Mes_prompts_com.docx, gardez pour chaque prompt : l'outil, le besoin, la version finale, ce qu'il a fallu corriger.",
          "Une semaine plus tard, notez les réactions utiles (questions de partenaires, demandes d'information) dans la fiche de faits.",
        ],
      },
    ],
    example: {
      title: 'Clôture — fil rouge',
      lines: [
        "Vendredi 17/07 : post LinkedIn publié à 9 h par Furaha Bisimwa sur la page officielle ; newsletter envoyée à 10 h.",
        "Jeudi 16/07 : diapositive présentée à la réunion du Logistics Cluster ; deux organisations demandent le détail du dispositif de contournement.",
        "03_Publie : 3 textes, 3 visuels finaux + option A archivée, 3 gabarits signés, grille comparative, fiche de faits.",
        "Mes_prompts_com.docx : 7 prompts testés (post, newsletter, diapositive, illustration, infographie, bannière, Gemini).",
      ],
    },
    result: "Trois supports diffusés à l'heure, un dossier complet archivé, et une bibliothèque de prompts personnelle prête pour le prochain rapport.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Du compte-rendu au message central',
    scenario: "Rappel : compte-rendu de clôture de 3 pages reçu le lundi 13 juillet 2026, trois supports demandés pour la semaine, aucune personne de la communication disponible. Voici le raisonnement complet d'Amani, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Document source', body: "Version finale confirmée par écrit par son auteur ; trois gabarits ouverts, un par canal, section 1 remplie à l'identique.", result: 'Chiffres publiables, confirmés le 13/07 à 9 h 20.' },
      { title: 'Fiche de faits', body: "10 faits numérotés F1 à F10, chacun avec sa phrase d'origine ; aucun pourcentage calculé ajouté (le « 97 % » ne figure nulle part)." },
      { title: 'Message central', body: "« Malgré douze jours de route coupée en avril, le projet Route Santé Nord-Kivu a dépassé son objectif : 27 500 patients traités au lieu des 24 000 prévus. » — résultat, obstacle, chiffre, 27 mots." },
      { title: 'Format cible', body: "LinkedIn : donateurs, chaleureux et factuel, 120-150 mots, 1200 × 627. Newsletter : personnel, reconnaissant, 200 mots, 600 × 200. Diapositive : pairs du Cluster, technique, 40 mots, 16:9." },
      { title: 'Règles de diffusion', body: "Aucune donnée personnelle ; itinéraire exact non publié ; mention ECHO obligatoire ; validation par la directrice pays pour les supports externes." },
    ],
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — Les trois textes et les quatre visuels',
    scenario: "Le message central et les formats cibles sont fixés. Amani produit chaque support avec un prompt CLARTE ou STAR, puis le contrôle contre la fiche de faits avant de passer au suivant.",
    steps: [
      { title: 'Post LinkedIn', body: "Prompt CLARTE dans Claude et ChatGPT ; premier jet corrigé (arrondi « plus de 27 000 », « 97 % » calculé, superlatifs, 163 mots réels) par une consigne ciblée.", result: 'Post final de 142 mots, 4 chiffres tracés (F2, F3, F6, F8).' },
      { title: 'Newsletter et diapositive', body: "Même prompt, seuls A, L et T changent. Article de 159 mots avec remerciements nominatifs ; diapositive de 37 mots au vocabulaire technique. Tableau de cohérence entièrement ✔." },
      { title: 'Choix des outils', body: "Grille « Aide à la décision » : illustration → ChatGPT ; infographie chiffrée → Claude ; visuel interne → Copilot Designer ; visuel dans Google Slides → Gemini." },
      { title: 'Visuels', body: "Illustration DALL-E : 3 versions (pseudo-texte, croix rouge, main déformée corrigés une variable à la fois). Infographie SVG : 2 versions (débordement, contraste). Bannière Designer : 1 proposition retenue sur 3, recadrée à 600 × 200 dans Word, titre ajouté en texte réel. Image Gemini : générée dans la diapositive, vue aérienne." },
      { title: 'Ce que l\'IA n\'a pas fait', body: "Choisir le message central, décider de ce qui est publiable, vérifier les chiffres, juger la dignité d'une image, valider la publication : tout cela est resté humain." },
    ],
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Le dossier final remis et publié',
    scenario: "Voici le contenu final du dossier 03_Publie au vendredi 17 juillet 2026, tel qu'il peut être présenté à un auditeur ou à un bailleur qui demande « d'où vient ce chiffre ? ».",
    steps: [
      { title: 'gabarit_LinkedIn.docx', body: "Sections 1 à 5 complètes : document source, message central, format cible (LinkedIn, donateurs, chaleureux et factuel, 150 mots), Avant / Après avec références F2, F3, F6, F7, F8, F9, cinq cases cochées ; signé Amani Kahindo, 15/07/2026." },
      { title: 'gabarit_Newsletter.docx et gabarit_Diapo-Cluster.docx', body: 'Mêmes sections, audiences et tons différents ; chiffres identiques (tableau de cohérence).' },
      { title: 'comparatif_RouteSante.xlsx', body: "Valeurs de référence inchangées (lignes 5 à 8) ; observations réelles en lignes 9 à 12 ; choix de l'option B justifié en trois phrases (message, audience, risque)." },
      { title: 'Visuels', body: 'V1B_infographie_Claude_final.png (publié) + source SVG ; V1A_illustration_ChatGPT_final.png (archivé) ; bannière newsletter ; diapositive Cluster. Textes alternatifs rédigés.' },
      { title: 'Traçabilité', body: 'Fiche de faits F1 à F10 avec phrases d\'origine ; Mes_prompts_com.docx avec 7 prompts testés.' },
    ],
    result: "Résultat : trois supports diffusés dans les délais, zéro chiffre inventé ou arrondi, un visuel choisi par comparaison, et une organisation capable de refaire l'exercice en une demi-journée au prochain rapport.",
    tip: "Gardez ce corrigé comme modèle : sur votre prochain document, seuls le contenu, l'audience et les chiffres changeront — la séquence des 9 procédures reste la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Le compte-rendu de Tine-Ourécassoni, du document au post publiable',
    instructions: "Le service communication vous transmet le compte-rendu de clôture du projet d'appui logistique de la zone de Tine-Ourécassoni (janvier-juin 2026), reproduit dans 03-exercices.md, avec une seule consigne : « On a besoin d'un post LinkedIn pour annoncer ça cette semaine, et si possible un visuel qui va avec. » Refaites les procédures 1, 2, 4, 5, 6 et 9 sans regarder les diapositives du fil rouge.",
    steps: [
      {
        title: '1. Extraction du message central et du format cible',
        actions: [
          "Copiez le gabarit de transformation et remplissez les sections 1 à 3.",
          "Construisez la fiche de faits du compte-rendu (dates, tonnage, bénéficiaires, objectif, sites, durée de coupure, équipe, budget, recommandation).",
          "Formulez le message central en une phrase — indice : ce n'est pas « le projet est terminé ». Format cible : LinkedIn, partenaires et donateurs externes, chaleureux mais factuel, 120-150 mots.",
        ],
      },
      {
        title: '2. Transformation en post LinkedIn',
        actions: [
          "Rédigez votre prompt CLARTE en vous inspirant du « Prompt d'exercice — Transformation appliquée » du module, exécutez-le.",
          "Contrôlez chiffres, ton et longueur ; corrigez par consigne ciblée ; remplissez la section 4.",
        ],
      },
      {
        title: '3. Deux visuels avec deux outils différents',
        actions: [
          "Utilisez le « Prompt d'exercice — Visuel comparatif » (STAR) : une illustration sans texte en 1200 × 627 avec un générateur d'image, et une infographie des trois chiffres clés avec un autre outil.",
          "Inspectez chaque visuel à 100 % et corrigez une variable à la fois.",
        ],
      },
      {
        title: '4. Choix final et relecture',
        actions: [
          "Saisissez vos observations sous le tableau de référence de la feuille « Comparatif outils » et rédigez la justification du choix en trois phrases.",
          "Cochez la section 5 du gabarit et faites relire par une deuxième personne.",
        ],
      },
    ],
    deliverable: "Le post LinkedIn final (120-150 mots), les deux visuels générés, la grille comparative complétée avec la justification du choix retenu, et le gabarit de transformation signé.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Même document, nouveau canal : le communiqué de presse",
    instructions: "Furaha Bisimwa souhaite aussi un communiqué pour la radio et la presse locales de Goma sur le projet Route Santé Nord-Kivu. Repartez du compte-rendu et de votre fiche de faits, et produisez le communiqué et un visuel de bannière web, en appliquant les procédures 1 à 4, 6 et 9.",
    steps: [
      {
        title: 'Texte',
        actions: [
          "Remplissez un nouveau gabarit : communiqué de presse, journalistes locaux, ton institutionnel à la 3e personne, 250 à 400 mots.",
          "Adaptez le prompt CLARTE : titre, chapeau de deux phrases qui répond à qui / quoi / où / quand, corps, paragraphe « À propos d'Horizon Grands Lacs », contact presse.",
          "Si l'IA propose une citation de la directrice, remplacez-la par une citation que Furaha Bisimwa a réellement validée par écrit.",
        ],
      },
      {
        title: 'Visuel',
        actions: [
          "Dans la grille « Aide à la décision », choisissez « Bannière avec texte exact à conserver » et vérifiez l'outil proposé.",
          "Générez une bannière web 1200 × 300 avec le titre exact du communiqué, en adaptant le prompt « Bannière web avec appel à l'action (HTML/CSS) » ou « Bannière d'en-tête newsletter (SVG) » de la bibliothèque.",
          "Mettez à jour le tableau de cohérence avec une colonne pour le communiqué.",
        ],
      },
    ],
    tip: "Points de contrôle : le chapeau contient 27 500 patients et l'objectif de 24 000, la mention d'ECHO est présente, aucune citation n'est inventée, et la grille recommande Claude (code SVG/HTML) pour la bannière à texte exact.",
    deliverable: "Un communiqué de 250 à 400 mots, son gabarit signé, une bannière 1200 × 300 au texte exact et le tableau de cohérence à quatre colonnes.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre document',
    instructions: "Appliquez le pipeline complet à un document réel de votre service (rapport d'activité, fiche technique, compte-rendu de mission, note de synthèse), dans le respect des règles de diffusion de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Faites confirmer par l'auteur que le document est final et publiable.",
          "Construisez la fiche de faits, le message central et le format cible de deux canaux différents.",
          "Vérifiez données personnelles, informations de sécurité, obligations de visibilité et circuit de validation.",
        ],
      },
      {
        title: 'Produire',
        actions: [
          "Deux supports textuels avec CLARTE, contrôlés et mis en cohérence.",
          "Un plan visuel issu de la grille, puis deux visuels sur le même besoin avec deux outils différents.",
          "Comparaison dans la grille, choix justifié, section 5 cochée, relecture par l'auteur du document.",
        ],
      },
    ],
    deliverable: "Deux gabarits signés, deux supports prêts à diffuser, le visuel retenu et la grille comparative justifiée — plus vos prompts ajoutés à votre bibliothèque personnelle.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre message central parle du résultat le plus marquant — 4 200 bénéficiaires atteints contre un objectif de 3 500, malgré les pluies d'avril — et non de la simple fin du projet.",
      "Votre fiche de faits contient les valeurs exactes du compte-rendu : 18 tonnes, 6 sites, 4 200 / 3 500 bénéficiaires, aucune rupture de stock supérieure à 48 h, deux axes impraticables pendant dix jours, 6 personnes, 42 000 USD, fin le 28 juin 2026.",
      "Votre post fait entre 120 et 150 mots comptés dans Word, et non selon le décompte annoncé par l'IA.",
      "Aucun chiffre du post n'est arrondi (« plus de 4 000 »), calculé (« 120 % de l'objectif ») ou absent du compte-rendu.",
      "Le Logistics Cluster est expliqué en clair ou n'est pas cité ; aucun autre sigle n'est laissé sans explication.",
      "Le défi des pluies est mentionné sans dramatisation, et la conclusion ouvre sur la recommandation (reconduire le contournement avant la prochaine saison des pluies).",
      "Votre illustration ne contient aucun texte, logo, emblème ou visage en gros plan, et a été inspectée à 100 %.",
      "Votre infographie affiche exactement « 4 200 », « 18 tonnes » et « 6 sites », accents et espaces compris.",
      "Votre grille comparative garde les valeurs de référence intactes, contient vos observations réelles sur les deux outils et une justification en trois phrases (message, audience, risque).",
      "La section 5 du gabarit est entièrement cochée, une deuxième personne a relu, et la signature est remplie.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Repartir d'une page blanche au lieu du document : les chiffres sont reconstitués de mémoire. Fournissez toujours le document complet à l'IA.",
      "Laisser l'IA choisir le message central : vous obtenez un résumé plat. Écrivez-le vous-même, en une phrase chiffrée, avant le prompt.",
      "Fixer le format après la génération : texte deux fois trop long, visuel au mauvais ratio. Le canal, l'audience, le ton, la longueur et les dimensions vont dans le prompt.",
      "Recopier le ton du document source : un compte-rendu technique raccourci reste un compte-rendu. Le ton se règle sur l'audience du nouveau canal.",
      "Accepter un chiffre arrondi ou calculé par l'IA (« près de 100 % », « plus de 27 000 ») : chaque chiffre publié doit se retrouver tel quel dans la fiche de faits.",
      "Croire le nombre de mots annoncé par l'IA : comptez dans Word.",
      "Demander un texte exact à un générateur d'image : utilisez Claude en SVG, ou ajoutez le texte après coup dans Word, PowerPoint ou Slides.",
      "Utiliser toujours le même outil par habitude : passez par les cinq questions et la grille « Aide à la décision ».",
      "Valider un visuel sur sa vignette : ouvrez-le à 100 % et inspectez-le quart par quart (texte fantôme, mains, emblèmes, objets dupliqués).",
      "Régénérer en boucle : une variable à la fois, trois essais maximum, puis rognage, correction dans un outil de retouche ou changement d'outil.",
      "Présenter une illustration générée comme une photo du projet : la légende et le texte alternatif disent « illustration ».",
      "Publier sans relecture par une deuxième personne, idéalement l'auteur du document source.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez transformé un compte-rendu de 3 pages en fiche de faits traçable, en message central d'une phrase et en trois formats cibles distincts.",
      "Vous avez produit un post LinkedIn de 142 mots avec un prompt CLARTE, corrigé par consignes ciblées, dont chaque chiffre renvoie au document source.",
      "Vous avez décliné le même contenu en article de newsletter interne et en diapositive de coordination, avec un tableau de cohérence des chiffres.",
      "Vous avez choisi l'outil de chaque visuel avec la grille comparative du module et établi un plan visuel validé.",
      "Vous avez généré et corrigé quatre visuels : illustration ChatGPT/DALL-E, infographie SVG Claude, bannière Copilot Designer, image Gemini dans Google Slides.",
      "Vous avez comparé deux visuels sur le même besoin, justifié votre choix dans la grille, coché la checklist de relecture et fait signer les gabarits.",
      "Vous avez constitué votre propre bibliothèque de prompts testés, prête pour la prochaine publication.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais extraire le message central d'un document existant avant de le transformer, plutôt que de partir d'une page blanche.",
      "Je sais fixer les paramètres du format cible (canal, audience, ton, longueur) avant de demander une transformation à l'IA.",
      "Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.",
      "J'ai utilisé au moins deux prompts CLARTE / STAR de ce module, adaptés à mes propres documents.",
      "Je connais les forces et les limites concrètes des quatre outils de génération visuelle et je sais dire lequel utiliser pour un besoin marketing donné.",
      "Je sais pourquoi le texte intégré dans une image générée par ChatGPT ou Gemini est peu fiable, et je connais l'alternative SVG avec Claude.",
      "J'ai généré un visuel avec au moins deux outils différents sur un même besoin et je les ai comparés avant de choisir.",
      "Je vérifie systématiquement un visuel généré par IA en grand format avant toute publication externe.",
      "J'ai complété le gabarit de transformation document → communication et la grille comparative des outils fournis avec ce module.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « IA pour le Business Model & le Business Plan ». Vous y utiliserez l'IA comme copilote de structuration stratégique — Business Model Canvas, étude de marché, plan financier simplifié et pitch — avec la même discipline que dans ce module : vous fournissez les faits, l'IA structure et reformule, et le jugement final reste le vôtre.",
  },
]
