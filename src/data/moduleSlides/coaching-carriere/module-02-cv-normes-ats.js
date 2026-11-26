// Module 02 — CV aux Normes ATS Internationales
// Référence pas à pas : chaque procédure du module (diagnostic du CV actuel,
// reconstruction dans le gabarit ATS-safe, grille de transformation PAR,
// mots-clés sectoriels, assemblage du CV, vérification du parsing, export et
// adaptation par portail) est détaillée étape par étape et appliquée à un cas
// fil rouge unique (Joël Kabeya, fictif, suite du module 01), à partir du
// contenu source (01-theorie.md, 02-outils.md, 03-exercices.md) et des
// templates du dossier 04-templates (gabarit-cv-ats-international.docx et
// grille-transformation-par-realisations.xlsx).
export default [
  // ─────────────────────────────── OUVERTURE ───────────────────────────────
  {
    type: 'cover',
    title: 'CV aux Normes ATS Internationales',
    hook: "À la fin de ce module, vous aurez un CV d'une seule colonne que le logiciel de tri lit sans perdre une ligne (test du copier-coller validé), 8 à 12 réalisations réécrites en Problème → Action → Résultat chiffré, les mots-clés exacts de votre offre cible intégrés sans mensonge, et deux versions prêtes à déposer : un PDF pour une ONG internationale, un Word pour un portail onusien.",
  },
  {
    type: 'objectives',
    items: [
      "Expliquer pourquoi un CV visuellement réussi peut être rejeté avant d'être vu par un humain, en produisant le diagnostic écrit de votre CV actuel : test de collage en texte brut et liste des éléments qui cassent la lecture automatique (parsing).",
      "Structurer votre CV dans le gabarit ATS-safe à une seule colonne (coordonnées dans le corps du document, titres de section standards, dates avec mois et année), en produisant un squelette complet qui ne perd aucune information de votre contenu brut.",
      "Transformer chaque tâche de votre parcours en réalisation avec la méthode PAR (Problème → Action → Résultat), en complétant 8 à 12 lignes de la grille Excel : tâche d'origine, Problème, Action, Résultat quantifié et phrase finale.",
      "Chiffrer vos réalisations même sans chiffre exact, avec des estimations honnêtes que vous savez justifier en entretien, en produisant pour chaque chiffre une note de méthode et la pièce ou le témoin qui l'appuie.",
      "Relever les mots-clés d'offres réelles et les intégrer uniquement lorsqu'ils correspondent à votre parcours, en produisant une grille de mots-clés (présent, ajouté, non possédé) et un Profil réécrit.",
      "Produire un CV complet de 2 pages maximum, au format attendu par les ONG internationales et les organisations onusiennes, vérifié par le test du copier-coller, exporté sous un nom professionnel dans le format demandé par chaque plateforme (PDF ou Word).",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Vous ne repartez pas avec des notions : vous repartez avec 7 livrables, produits dans cet ordre, qui sont les pièces que vous déposerez sur les plateformes de candidature (et que le module 03 prolongera avec la lettre de motivation).",
      "Cas fil rouge — Joël Kabeya, notre Superviseur MEAL du module 01 (Goma, RDC ; organisations fictives). Le lundi 30 novembre 2026, son audit est terminé : il a 9 réalisations « Oui », une phrase de profil de poste idéal et, dans sa feuille de route, l'action « CV réécrit au 11/12/2026 ». Son CV actuel, 3 pages en deux colonnes avec photo, jauges de compétences et coordonnées en en-tête, est celui qui a obtenu 1 entretien sur 31 candidatures. Il le reconstruit pour deux offres de son dossier « 00_Offres-cibles » : un poste de MEAL Manager à Bunia dans une ONG internationale (clôture le 15/01/2027) et un poste d'administrateur national NO-B à Goma dans une agence onusienne. Première candidature prévue : lundi 14 décembre 2026.",
    ],
    bullets: [
      "Livrable 1 — Diagnostic du CV actuel et contenu brut daté et vérifié (Procédure 1).",
      "Livrable 2 — Squelette du CV dans le gabarit ATS-safe, une colonne, titres standards (Procédure 2).",
      "Livrable 3 — Grille de transformation PAR complétée : 8 à 12 lignes avec phrase finale (Procédure 3).",
      "Livrable 4 — Grille de mots-clés par offre cible, avec décision honnête pour chaque terme (Procédure 4).",
      "Livrable 5 — CV assemblé : Profil, Expérience en phrases PAR, Compétences, 2 pages maximum (Procédure 5).",
      "Livrable 6 — Rapport de vérification : test du collage sur le Word et sur le PDF, longueur, test des 90 secondes (Procédure 6).",
      "Livrable 7 — Deux versions exportées, nommées et archivées : PDF pour l'ONG, Word pour le portail onusien (Procédure 7).",
    ],
    table: {
      columns: ['Jour (2026)', 'Procédure', 'Durée', 'Ce que Joël produit'],
      rows: [
        ['Lun 30/11', '1 — Diagnostic et contenu brut', '1 h 30', 'Test de collage, inventaire des défauts, fichier de contenu brut'],
        ['Mar 01/12', '2 — Gabarit ATS-safe', '1 h 30', 'Squelette du CV en une colonne'],
        ['Mer 02 et jeu 03/12', '3 — Grille PAR', '3 h', '9 lignes complètes, 9 phrases finales'],
        ['Sam 05/12', '4 — Mots-clés', '1 h 30', 'Grilles ONG et onusienne, décisions honnêtes'],
        ['Lun 07/12', '5 — Assemblage', '1 h 30', 'CV de 2 pages'],
        ['Mer 09 et jeu 10/12', '6 — Vérification', '45 min', 'Rapport de parsing et test des 90 secondes'],
        ['Ven 11/12', '7 — Export et adaptation', '1 h 15', 'PDF et Word nommés, archivés'],
      ],
    },
    tip: "Total : environ 11 h réparties sur deux semaines. Bloquez ces créneaux dans votre agenda comme des réunions, comme au module 01.",
  },

  // ─────────────────────────── THÉORIE ESSENTIELLE ──────────────────────────
  {
    type: 'stat-callout',
    stat: '2 lecteurs',
    caption: "Votre CV est lu deux fois, dans cet ordre : d'abord par un logiciel qui extrait le texte et le note, puis, seulement s'il passe, par un humain.",
    context: "Un CV excellent pour l'œil peut ne jamais atteindre le second lecteur. Tout ce module sert à ce que le premier lise tout, dans le bon ordre, et que le second trouve des preuves en quelques secondes.",
  },
  {
    type: 'concept',
    title: "Ce qu'un ATS fait réellement de votre CV",
    body: [
      "Un ATS (Applicant Tracking System) est un logiciel de tri utilisé par la quasi-totalité des grandes organisations — portails onusiens comme UN Talent, portails de recrutement des ONG internationales, outils de recrutement d'entreprise — pour trier le volume de candidatures reçu avant qu'un recruteur n'en voie une seule.",
      "Son fonctionnement est mécanique, pas intelligent. Étape 1 : il extrait le texte brut de votre fichier, bloc par bloc, dans l'ordre où il le rencontre dans le code du document — pas dans l'ordre où vous le voyez à l'écran. Étape 2 : il cherche des mots-clés (intitulé, compétences, certifications, années, langues) définis par le recruteur ou tirés de l'offre. Étape 3 : il calcule un score de correspondance. Seuls les CV au-dessus d'un seuil remontent à l'humain.",
    ],
    example: {
      title: 'Ce que le logiciel « lit » dans le CV actuel de Joël (extrait de son test de collage)',
      lines: [
        'Ce que Joël voit : colonne de gauche = photo, contacts, compétences ; colonne de droite = expérience.',
        'Ce que la machine extrait, ligne à ligne :',
        '   Superviseur MEAL — Alliance Santé',
        '   KoboToolbox  Excel  Power BI',
        '   Mars 2024 – aujourd\'hui',
        '   Anglais  Français',
        '   Grands Lacs, Goma',
        '→ L\'intitulé « Alliance Santé Grands Lacs » est coupé en deux par la liste des compétences, les dates sont séparées du poste, et le téléphone (placé en en-tête) n\'apparaît nulle part.',
      ],
    },
    highlight: "Un CV ATS-safe n'est pas un CV terne : c'est un CV dont la structure logicielle est simple (une colonne, du vrai texte, des titres standards), même si sa présentation reste soignée.",
  },
  {
    type: 'comparison-table',
    title: 'Ce qui casse la lecture automatique — et ce qu’il faut faire à la place',
    columns: ['Élément fréquent', 'Ce que fait l’ATS', 'À faire à la place'],
    rows: [
      ['Deux colonnes ou tableau de mise en page', "Mélange les colonnes ligne par ligne : le poste se retrouve collé au milieu des compétences linguistiques", "Une seule colonne du début à la fin, aucun tableau"],
      ['Coordonnées en en-tête ou pied de page', 'N’analyse souvent pas ces zones : téléphone et e-mail deviennent invisibles, donc on ne peut pas vous rappeler', 'Coordonnées dans le corps du document, sous le nom et le titre'],
      ['Photo, logo, icônes de contact', 'Ne voit pas les images ; une icône à la place du mot « Tél. » ne dit rien', 'Aucune image ; écrire le texte en toutes lettres'],
      ['Jauges et barres de compétences (« Excel : 90 % »)', 'Équivalent d’une case vide : la compétence n’est pas lue', 'Écrire la compétence en texte, avec le niveau en mots ou le contexte'],
      ['Zones de texte flottantes, polices non standards', 'Texte lu dans le désordre, ou pas du tout ; caractères remplacés par des symboles', 'Texte normal du corps du document, police courante (Calibri, Arial)'],
      ['PDF exporté depuis un logiciel de design (Canva, InDesign) sans contrôle', 'Texte parfois extractible en partie seulement, ou converti en image', 'Exporter depuis Word en PDF, puis tester le texte extrait'],
    ],
  },
  {
    type: 'concept',
    title: 'Soigné pour l’humain, simple pour la machine',
    body: "Le gabarit du module est volontairement sobre : un CV n'est pas un support de présentation, c'est un document qui doit d'abord survivre à un filtre automatique. La règle professionnelle est simple : en cas de doute entre « plus joli » et « plus sûr », on choisit la sécurité du parsing. Mais sobre ne veut pas dire négligé : vous disposez de leviers de lisibilité que l'ATS lit sans difficulté.",
    table: {
      columns: ['Levier de lisibilité (sûr)', 'Élément à proscrire (risqué)'],
      rows: [
        ['Titres de section en MAJUSCULES et en gras', 'Titres dans des bandeaux de couleur ou des formes'],
        ['Espaces avant/après les paragraphes, marges de 2 cm', 'Colonnes, tableaux, cadres pour « aérer » la page'],
        ['Gras sur l’intitulé du poste ou un chiffre clé', 'Texte blanc sur fond de couleur, texte en image'],
        ['Puces standard (•) ou simples tirets', 'Puces fantaisie (▪, ➤, icônes) qui peuvent devenir des « ? »'],
        ['Police Calibri ou Arial, 10 à 11 points', 'Polices décoratives, texte vertical, texte en WordArt'],
      ],
    },
    tip: "Test mental avant d'ajouter un élément graphique : « Si cet élément disparaît, le CV perd-il une information ? ». Si oui, il faut l'écrire en texte.",
  },
  {
    type: 'concept',
    title: "Les mots-clés : ce que l'ATS cherche vraiment",
    body: [
      "Un ATS bien configuré ne cherche pas seulement l'intitulé du poste : il cherche un ensemble de termes sectoriels qui, mis bout à bout, dessinent le profil recherché — acronymes du secteur, certifications reconnues, compétences techniques nommées précisément, langues avec leur niveau, intitulés de poste standards.",
      "Conséquence pratique : votre CV doit reprendre, quand c'est honnête et exact, le vocabulaire précis de l'offre. Un recruteur humain comprendra que « suivi-évaluation » et « MEAL » désignent la même chose ; un ATS configuré pour chercher « MEAL » peut ne jamais faire le lien.",
    ],
    table: {
      columns: ['Ce que vous écrivez spontanément', 'Ce que l’offre écrit', 'Formulation à retenir (si vrai)'],
      rows: [
        ['Suivi-évaluation', 'MEAL', 'Suivi-évaluation (MEAL)'],
        ['Cadre de mesure du projet', 'Cadre logique, plan MEAL, indicateurs', 'Cadre de mesure (cadre logique, 32 indicateurs)'],
        ['Mécanisme de plaintes', 'Redevabilité envers les populations affectées (AAP)', 'Mécanisme de plaintes et retours — redevabilité (AAP)'],
        ['Kobo', 'KoboToolbox / ODK', 'KoboToolbox / ODK'],
      ],
    },
    pitfall: "Ajouter un mot-clé parce qu'il est demandé alors que vous ne l'avez jamais pratiqué : l'entretien commence par « parlez-moi de votre expérience de… », et l'incohérence se voit immédiatement.",
  },
  {
    type: 'concept',
    title: 'La méthode PAR : Problème → Action → Résultat',
    body: [
      "La deuxième cause d'échec, presque aussi fréquente que le format, est un CV qui décrit des responsabilités au lieu de démontrer des résultats. « Responsable du mécanisme de plaintes » n'apprend rien au recruteur : n'importe quel candidat, bon ou médiocre, peut écrire cette phrase.",
      "La méthode PAR structure chaque ligne d'expérience en trois temps : le Problème (la situation de départ : un manque, un retard, un risque, un besoin non couvert), l'Action (ce que vous avez fait, vous, personnellement), le Résultat (l'impact mesurable : un chiffre, un pourcentage, un délai réduit, un volume traité).",
    ],
    example: {
      title: 'Avant / après — deux exemples',
      lines: [
        'Modèle du module — AVANT : « Responsable des achats et de la gestion des fournisseurs. »',
        'Modèle du module — APRÈS : « Face à des délais de livraison dépassant régulièrement 3 semaines, j\'ai renégocié les contrats-cadres avec les 5 principaux fournisseurs et mis en place un suivi hebdomadaire, réduisant le délai moyen à 9 jours et évitant 2 ruptures de stock critique. »',
        'Joël — AVANT : « Responsable du mécanisme de plaintes. »',
        'Joël — APRÈS : « Face à des retours communautaires traités au cas par cas (19 jours de délai), j\'ai mis en place une ligne verte et des boîtes à suggestions : 1 340 retours traités en 12 mois, délai de réponse ramené à 7 jours. »',
      ],
    },
    highlight: "La seconde version prouve une compétence de résolution de problème, donne un chiffre vérifiable et se distingue de dizaines d'autres CV qui listent la même responsabilité en une ligne plate.",
  },
  {
    type: 'concept',
    title: 'Chiffres exacts, estimations honnêtes, inventions : la ligne rouge',
    body: "Vous n'avez pas besoin d'un chiffre exact issu d'un rapport officiel pour utiliser PAR honnêtement. Une estimation raisonnable, défendable en entretien, vaut infiniment mieux qu'une phrase sans chiffre. Ce qui est interdit, c'est d'inventer un résultat que vous ne pourriez pas justifier si on vous demandait : « comment avez-vous mesuré cela ? »",
    table: {
      columns: ['Niveau', 'Exemple (Joël)', 'Comment l\'écrire', 'Défendable ?'],
      rows: [
        ['Chiffre exact et prouvé', '120 000 USD de budget, 96 % exécuté', 'Tel quel : « 96 % »', 'Oui — pièce : suivi budgétaire'],
        ['Estimation reconstituée depuis une pièce', '1 150 ménages ÷ 12 enquêteurs ÷ 30 jours', '« environ 3 ménages par enquêteur et par jour »', 'Oui — calcul montrable'],
        ['Ordre de grandeur honnête', 'Une dizaine de partenaires aux réunions', '« une dizaine », « plus de », « près de »', 'Oui — si l\'ordre de grandeur est juste'],
        ['Chiffre inventé ou arrondi à la hausse', '« 100 % de satisfaction » sans enquête', 'À ne pas écrire', 'Non — élimine la candidature à la vérification des références'],
      ],
    },
    pitfall: "Un recruteur humanitaire peut appeler votre ancien superviseur. Un chiffre faux découvert à ce moment élimine une candidature plus sûrement qu'une absence de chiffre.",
  },
  {
    type: 'comparison-table',
    title: 'Le format international attendu : ONG internationales et portails onusiens',
    columns: ['Convention', 'ONG internationales', 'Portails onusiens (ex. UN Talent)'],
    rows: [
      ['Longueur', '2 pages ; 3 maximum pour un parcours très riche', 'Même règle pour le CV joint ; le détail est saisi dans le profil en ligne'],
      ['Structure', 'Profil, Expérience professionnelle, Formation, Compétences, Langues', 'Même ordre ; les mêmes informations sont saisies champ par champ dans le portail'],
      ['Dates', 'Mois et année pour chaque poste, sans trou inexpliqué', 'Dates précises : le portail contrôle la cohérence du parcours'],
      ['Photo, âge, état civil', 'Aucune photo ; pas de date de naissance ni de situation familiale', 'Idem ; la nationalité n’est donnée que si l’offre la demande (postes réservés aux nationaux)'],
      ['Langue du CV', 'Celle de l’offre', 'Celle de l’offre ; niveaux de langue exprimés clairement'],
      ['Format de dépôt', 'PDF le plus souvent', 'Word demandé par certains portails, pour leur propre extraction du texte'],
      ['Contenu', 'Réalisations chiffrées, mots-clés de l’offre', 'Réalisations chiffrées, vocabulaire du poste et critères minimaux (diplôme, années) visibles'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'ATS (Applicant Tracking System)', definition: "Logiciel de tri automatique des candidatures par extraction de texte et recherche de mots-clés, utilisé en amont de la lecture humaine." },
      { term: 'Parsing', definition: "L'action, pour l'ATS, d'extraire et de structurer le texte d'un document. Un CV « mal parsé » est un CV dont le contenu est déformé, mélangé ou perdu lors de cette extraction." },
      { term: 'CV ATS-safe', definition: "CV dont la structure technique (une colonne, sans tableaux, images ou en-têtes graphiques) garantit une extraction fidèle du texte par n'importe quel système de tri." },
      { term: 'Méthode PAR', definition: "Problème → Action → Résultat : la structure de chaque ligne d'expérience d'un CV international." },
      { term: 'Mot-clé sectoriel', definition: "Terme précis du secteur (intitulé, acronyme, outil, certification, langue) que l'ATS recherche et que l'offre répète." },
      { term: 'Texte brut', definition: "Texte sans mise en forme (Bloc-notes). C'est la vue la plus proche de ce que voit l'ATS : le test du copier-coller consiste à y coller votre CV." },
      { term: 'Titre de section standard', definition: "Intitulé reconnu par les ATS : Profil, Expérience professionnelle, Formation, Compétences, Langues. Ne le remplacez jamais par une formule originale." },
      { term: 'Gabarit', definition: "Le fichier gabarit-cv-ats-international.docx : une structure à une colonne avec sections standards et exemples PAR, que vous reconstruisez avec votre contenu." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — « Le CV d’Aline, 6 ans d’expérience, zéro réponse depuis 8 mois »',
    scenario: "Aline a 6 ans d'expérience en administration et logistique de bureau dans deux ONG nationales. Elle postule depuis 8 mois à des postes de Coordinatrice Administrative et Logistique en ONG internationale, sans un seul entretien — pas même un accusé de réception personnalisé. Son CV : 4 pages, deux colonnes, photo et frise chronologique graphique, avec des lignes comme « Responsable de la logistique du bureau », « En charge des achats pour les activités du programme », « Gestion administrative du personnel local », « Organisation des déplacements de l'équipe et des missions terrain ».",
    steps: [
      { title: 'Le diagnostic ATS', body: "En collant le texte de son CV dans un bloc-notes, les deux colonnes se mélangent : le bloc « Compétences » de la colonne de gauche s'intercale au milieu de ses expériences. Sa photo et sa frise, en image, sont invisibles pour le logiciel." },
      { title: 'Le diagnostic de fond', body: "Chaque ligne décrit une responsabilité, jamais un résultat. Un recruteur qui a rédigé des dizaines de fiches de poste reconnaît ces formulations : elles ne disent rien de ce qu'Aline a accompli." },
      { title: 'La correction', body: "Reconstruire le CV dans une seule colonne (Procédures 1, 2 et 5), transformer chaque ligne en phrase PAR avec un chiffre ou une estimation honnête (Procédure 3), puis tester le parsing (Procédure 6)." },
    ],
    result: "Vous ferez ce travail pour Aline dans l'exercice noté. Joël, notre fil rouge, présente le même symptôme : un CV beau mais illisible pour la machine et muet sur ses résultats.",
  },
  {
    type: 'concept',
    title: 'La méthode : 7 procédures, dans cet ordre',
    body: "Chaque procédure produit l'entrée de la suivante. Ne remplissez pas le CV avant d'avoir fait la grille PAR : le piège classique est de reformuler directement dans le CV, sans avoir identifié le résultat mesurable derrière chaque tâche.",
    table: {
      columns: ['Procédure', 'Entrée', 'Livrable produit', 'Durée'],
      rows: [
        ['1. Diagnostiquer et isoler le contenu', 'CV actuel, contrats, rapports', 'Diagnostic, contenu brut vérifié', '1 h 30'],
        ['2. Structurer dans le gabarit', 'Contenu brut, gabarit .docx', 'Squelette à une colonne', '1 h 30'],
        ['3. Grille de transformation PAR', 'Dossier de preuves, réalisations du module 01', '8 à 12 phrases PAR', '3 h'],
        ['4. Mots-clés sectoriels', '2 à 3 offres cibles, CV, grille PAR', 'Grille de mots-clés et décisions', '1 h 30'],
        ['5. Assemblage et 2 pages', 'Squelette, phrases PAR, mots-clés', 'CV complet de 2 pages', '1 h 30'],
        ['6. Vérification du parsing', 'CV Word et PDF', 'Rapport de test du collage', '45 min'],
        ['7. Export, nom, version par portail', 'CV validé, consignes des offres', 'PDF et Word nommés, archivés', '1 h 15'],
      ],
    },
    tip: "Les procédures 1 à 3 sont le fond, 4 et 5 sont l'adaptation, 6 et 7 sont le contrôle. Une candidature envoyée sans la procédure 6 est une candidature non testée.",
  },

  // ──────── PROCÉDURE 1 — DIAGNOSTIQUER VOTRE CV ET ISOLER LE CONTENU (4 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Faire le test du collage sur votre CV actuel',
    intro: "Pourquoi : avant de réparer, mesurez ce que la machine voit réellement. Le test prend 5 minutes et ne coûte rien. Entrées : le fichier exact que vous avez envoyé (PDF ou Word, pas votre fichier de travail), un éditeur de texte brut (Bloc-notes sous Windows, TextEdit converti en texte brut sous Mac).",
    steps: [
      {
        title: 'Ouvrir le fichier réellement envoyé',
        actions: [
          "Ouvrez dans votre dossier « 00_CV-actuel » la version envoyée aux recruteurs : le PDF ou le Word déposé sur les plateformes.",
          "Ne testez pas votre fichier de conception d'origine (Canva ou autre) : l'ATS ne lit que ce que vous envoyez.",
        ],
      },
      {
        title: 'Copier tout le texte',
        actions: [
          "Cliquez dans le document puis appuyez sur Ctrl+A (tout sélectionner) et Ctrl+C (copier).",
          "Si la sélection surligne une page entière d'un seul bloc, ou si rien n'est sélectionnable : votre document est une image, l'ATS ne lira rien. Notez-le comme un constat bloquant.",
        ],
      },
      {
        title: 'Coller en texte brut et lire',
        actions: [
          "Ouvrez le Bloc-notes, appuyez sur Ctrl+V, puis enregistrez le fichier sous « cv-actuel_collage.txt » dans « 00_CV-actuel ».",
          "Lisez le texte du haut vers le bas sans regarder votre CV : dans quel ordre arrivent les informations ? Qu'est-ce qui manque ? Qu'est-ce qui est coupé ou mélangé ?",
          "Notez par écrit 3 constats précis (ex. : « le téléphone est absent », « la colonne de gauche est insérée dans mon dernier poste »).",
        ],
      },
    ],
    example: {
      title: 'Test de collage du CV actuel de Joël — lundi 30/11/2026',
      lines: [
        'Constat 1 : le nom « KABEYA Joël » est en tête, mais ni le téléphone ni l\'e-mail n\'apparaissent (ils étaient en en-tête).',
        'Constat 2 : les lignes « KoboToolbox  Excel  Power BI  Anglais » s\'intercalent au milieu de l\'intitulé du poste de Superviseur MEAL.',
        'Constat 3 : les dates « 2021 – 2024 » sont séparées de l\'intitulé du poste correspondant de 6 lignes.',
        'Constat 4 : aucune trace de la photo ni des jauges ; les compétences n\'ont plus aucun niveau.',
        'Fichier produit : cv-actuel_collage.txt, 3 pages de texte désordonné.',
      ],
    },
    result: "Un fichier texte et 3 à 4 constats écrits. Vous savez maintenant, preuve en main, si votre CV est lisible, partiellement lisible ou illisible pour un ATS.",
    pitfall: "Tester sur l'écran en regardant le document : ce n'est pas un test. Seul le texte collé dans l'éditeur compte, parce qu'il est ce que le logiciel reçoit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Recenser les éléments qui cassent le parsing',
    intro: "Pourquoi : le test de collage dit que quelque chose casse, pas quoi. Cette étape identifie la cause de chaque défaut pour décider de ce qu'il faudra supprimer à la Procédure 2. Entrées : votre CV actuel et votre fichier de collage.",
    steps: [
      {
        title: 'Détecter chaque élément à risque',
        actions: [
          "Tableau ou colonnes : cliquez dans le texte ; si un onglet « Disposition » de tableau apparaît dans le ruban Word, le texte est dans un tableau. Sur un PDF, des lignes qui se lisent en travers de la page trahissent des colonnes.",
          "En-tête et pied de page : double-cliquez dans la marge haute et basse de la page ; tout texte qui s'y trouve est à rapatrier dans le corps.",
          "Zones de texte : cliquez sur un bloc ; un cadre aux poignées rondes autour du texte signale une zone de texte flottante.",
          "Images : photo, logo, icônes de contact (téléphone, e-mail), jauges de compétences.",
          "Exportation : l'outil qui a produit le PDF (Canva, InDesign) et la possibilité de sélectionner le texte avec la souris.",
        ],
      },
      {
        title: 'Contrôler longueur, dates et intitulés',
        actions: [
          "Comptez les pages : plus de 3 est un défaut ; la cible est 2.",
          "Vérifiez que chaque poste a un mois et une année de début et de fin.",
          "Relevez le nombre de lignes qui décrivent une tâche sans chiffre.",
        ],
      },
      {
        title: 'Classer par gravité',
        actions: [
          "Bloquant : une information essentielle disparaît ou le texte est mélangé (coordonnées absentes, colonnes entrelacées).",
          "Grave : de l'information visuelle est perdue (jauges, icônes, photo inutile).",
          "À corriger : longueur, dates incomplètes, tâches sans résultat.",
        ],
      },
    ],
    table: {
      columns: ['Élément contrôlé', 'Constat sur le CV de Joël', 'Gravité'],
      rows: [
        ['Colonnes / tableau', '2 colonnes ; compétences à gauche, expérience à droite', 'Bloquant'],
        ['En-tête / pied de page', 'Téléphone et e-mail dans l\'en-tête', 'Bloquant'],
        ['Images', 'Photo et icônes de contact (téléphone, e-mail, localisation)', 'Grave'],
        ['Jauges', 'Kobo, Excel, Power BI et Anglais en barres de progression', 'Grave'],
        ['Export', 'PDF exporté depuis Canva ; texte sélectionnable mais ordre perturbé', 'Grave'],
        ['Longueur', '3 pages', 'À corriger'],
        ['Dates', 'Années seules pour 2 postes sur 3', 'À corriger'],
        ['Contenu', '14 tâches, aucun chiffre', 'À corriger (Procédure 3)'],
      ],
    },
    result: "Joël compte 2 défauts bloquants, 3 graves et 3 à corriger. Chaque défaut a une cause identifiée ; la solution est la même pour tous les défauts de structure : repartir du gabarit à une colonne.",
    tip: "Gardez ce tableau : à la Procédure 6, vous le relirez ligne par ligne pour vérifier que chaque défaut a disparu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Isoler le contenu brut, sans aucune mise en forme',
    intro: "Pourquoi : on ne répare pas une mise en page, on la reconstruit. Il faut donc séparer entièrement le contenu de sa présentation actuelle, sans perdre une seule information de fond. Entrées : votre CV actuel, vos contrats, votre dossier de preuves du module 01 (« Audit carrière 2026 »).",
    steps: [
      {
        title: 'Créer le fichier de contenu brut',
        actions: [
          "Ouvrez le Bloc-notes (ou un document Word vierge sans mise en forme) et enregistrez-le sous « contenu-brut_Kabeya.txt » dans « Audit carrière 2026 ».",
          "Créez les 7 rubriques en MAJUSCULES : IDENTITÉ ET CONTACT, PROFIL ACTUEL, POSTES, FORMATION, COMPÉTENCES, LANGUES, AUTRES (certifications, formations courtes).",
        ],
      },
      {
        title: 'Recopier chaque information, poste par poste',
        actions: [
          "Pour chaque poste, notez : intitulé exact du contrat, organisation, ville et pays, date de début et de fin (mois et année), type de contrat si utile.",
          "Recopiez ensuite, en vrac, les tâches et résultats que vous aviez listés dans le CV : ne reformulez rien, c'est la matière de la Procédure 3.",
          "Ajoutez les 9 réalisations marquées « Oui » dans l'onglet « Réalisations » du module 01 : elles sont déjà chiffrées et prouvées.",
        ],
      },
      {
        title: 'Vérifier que rien ne manque',
        actions: [
          "Relisez le CV actuel ligne à ligne et cochez chaque information retrouvée dans le fichier de contenu brut.",
          "Toute information du CV absente du fichier est une perte : ajoutez-la ou décidez consciemment de l'abandonner.",
        ],
      },
    ],
    example: {
      title: 'Extrait du fichier contenu-brut_Kabeya.txt',
      lines: [
        'IDENTITÉ ET CONTACT : Joël Kabeya — Goma, RDC — téléphone — e-mail — profil LinkedIn.',
        'POSTES : Superviseur MEAL, Alliance Santé Grands Lacs (ASGL), Goma, mars 2024 – en cours, contrat à durée déterminée ; rattaché au coordinateur programme.',
        '   Tâches du CV : gestion équipe enquêteurs ; suivi budget MEAL ; responsable du mécanisme de plaintes ; contrôle qualité des enquêtes.',
        '   Réalisations module 01 : équipe de 6 ; budget MEAL de 120 000 USD à 96 % ; 1 340 retours traités ; décision de mai 2025.',
        'POSTES : Chargé de suivi-évaluation, Horizons Solidaires International (HSI), Goma, juillet 2021 – février 2024 ; projet WASH.',
        'POSTES : Assistant suivi-évaluation, Action Communautaire Kivu (ACK), Goma, septembre 2019 – juin 2021.',
        'FORMATION : Master en santé publique ; formation interne sur la redevabilité envers les populations affectées (AAP), ASGL, 2025.',
        'LANGUES : français courant ; anglais B1 ; swahili courant.',
      ],
    },
    result: "Un fichier texte qui contient 100 % des informations de votre CV actuel plus vos réalisations du module 01, sans aucune mise en page. C'est la source unique à partir de laquelle vous allez reconstruire.",
    pitfall: "Copier-coller depuis l'ancien CV des intitulés ou des dates déjà approximatifs. Quand un contrat existe, c'est le contrat qui fait foi, pas le CV : vous corrigez les erreurs à la source.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Fiabiliser les informations : dates, intitulés, diplômes, langues',
    intro: "Pourquoi : un recruteur habitué à repérer les trous de parcours doute dès qu'une date est incomplète ou incohérente, et ce doute joue toujours en votre défaveur. Entrées : contenu brut, contrats et attestations, profil LinkedIn.",
    steps: [
      {
        title: 'Compléter les dates en mois et année',
        actions: [
          "Reprenez chaque poste : date de début (mois et année) et de fin (mois et année).",
          "Cherchez la date dans le contrat, l'attestation ou le bulletin de paie ; à défaut, dans un courriel de prise de poste.",
          "Marquez [?] toute date que vous n'avez pas pu prouver et vérifiez-la avant d'écrire le CV.",
        ],
      },
      {
        title: 'Vérifier les intitulés et les noms',
        actions: [
          "Recopiez l'intitulé du poste tel qu'écrit dans le contrat, avec la forme standard du secteur si elle diffère (ex. « Chargé de suivi-évaluation » plutôt qu'un intitulé interne).",
          "Écrivez le nom complet de l'organisation (acronyme entre parenthèses), la ville et le pays.",
          "Alignez le profil LinkedIn : mêmes intitulés, mêmes dates.",
        ],
      },
      {
        title: 'Noter honnêtement vos langues',
        actions: [
          "Utilisez les niveaux du cadre européen (A1, A2, B1, B2, C1, C2) ou des mots clairs : débutant, intermédiaire, courant, langue maternelle.",
          "En cas de doute, retenez le niveau le plus bas que vous pouvez défendre dans une réunion de travail.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Date dans le CV actuel', 'Date vérifiée', 'Pièce'],
      rows: [
        ['Superviseur MEAL (ASGL)', '2024 – aujourd\'hui', 'Mars 2024 — Aujourd\'hui', 'Contrat du 01/03/2024'],
        ['Chargé de S&E (HSI)', '2021 – 2024', 'Juillet 2021 — Février 2024', 'Attestation de fin de contrat'],
        ['Assistant S&E (ACK)', '2019 – 2021', 'Septembre 2019 — Juin 2021', 'Attestation de fin de contrat'],
      ],
    },
    result: "Contenu brut complet, daté au mois près, avec des intitulés vérifiés. Pour Joël : l'anglais est noté « Intermédiaire (B1) », jamais « courant », même si 15 offres sur 20 de son benchmark exigent l'anglais courant (module 01) — c'est un écart à combler, pas un mot à écrire.",
    pitfall: "Écrire « 2019 — 2021 » en pensant que les mois n'ont pas d'importance : les portails onusiens vérifient la continuité du parcours et un trou apparent de 11 mois se remarque immédiatement.",
  },

  // ──────────── PROCÉDURE 2 — RECONSTRUIRE DANS LE GABARIT ATS-SAFE (6 étapes) ────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Enregistrer le gabarit et en lire la structure',
    intro: "Le fichier gabarit-cv-ats-international.docx contient une structure à une colonne, sans tableau ni image, avec des exemples PAR déjà rédigés pour un profil logistique. Vous le reconstruisez avec votre propre contenu : vous gardez la structure, vous remplacez tout le contenu.",
    steps: [
      {
        title: 'Enregistrer votre copie',
        actions: [
          "Ouvrez le gabarit depuis le dossier 04-templates du module.",
          "Faites Fichier > Enregistrer sous et nommez-le « Kabeya_Joel_CV_travail.docx » dans « Audit carrière 2026 » : c'est votre fichier de travail, le fichier envoyé sera exporté à la Procédure 7.",
          "Appuyez sur Ctrl+Maj+8 pour afficher les marques de mise en forme : vous verrez les tabulations, sauts de ligne et espaces inutiles qui perturbent l'ATS.",
        ],
      },
      {
        title: 'Repérer les blocs du gabarit',
        actions: [
          "Haut du document : nom, ligne de titre professionnel, ligne de contact.",
          "Cinq sections dans cet ordre : PROFIL, EXPÉRIENCE PROFESSIONNELLE, FORMATION, COMPÉTENCES, LANGUES.",
          "Trois encadrés « Note de conception » ou « Rappel de mise en page » : ils expliquent le gabarit et seront supprimés à la fin (Procédure 5).",
        ],
      },
      {
        title: 'Garder les exemples comme modèles',
        actions: [
          "Gardez le contenu du gabarit sous les yeux le temps de remplacer chaque bloc, puis effacez-le : aucun exemple (Alpha, Beta, SAP, Université de Kinshasa) ne doit rester dans votre CV.",
        ],
      },
    ],
    table: {
      columns: ['Bloc du gabarit', 'Ce qu\'il contient', 'Ce que vous y mettez'],
      rows: [
        ['Ligne 1', 'PRÉNOM NOM', 'Votre nom, en majuscules'],
        ['Ligne 2', 'Titre professionnel + « Secteur Humanitaire & International »', 'Le poste visé'],
        ['Ligne 3', 'Ville, pays | téléphone | e-mail | LinkedIn', 'Vos coordonnées, en texte'],
        ['PROFIL', 'Un paragraphe de 4 phrases', 'Votre positionnement (Procédure 5)'],
        ['EXPÉRIENCE PROFESSIONNELLE', 'Par poste : intitulé — organisation, dates, phrases PAR, ligne de périmètre', 'Vos postes, du plus récent au plus ancien'],
        ['FORMATION', 'Diplôme — établissement ; années', 'Vos diplômes'],
        ['COMPÉTENCES', '5 lignes de texte', 'Vos compétences en texte, sans jauge'],
        ['LANGUES', '3 lignes : langue — niveau', 'Vos langues et niveaux réels'],
      ],
    },
    result: 'Votre copie de travail est enregistrée, les marques de mise en forme sont visibles, et vous savez ce que chaque bloc attend.',
    pitfall: "Travailler dans l'original : conservez-le intact pour pouvoir y revenir, notamment pour l'exercice d'Aline.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Remplir le nom, le titre professionnel et la ligne de contact',
    intro: "Pourquoi : ces trois lignes sont lues en premier par l'humain et en premier par la machine. Le gabarit les place dans le corps du document, jamais dans l'en-tête Word : beaucoup d'ATS n'analysent pas cette zone. Entrées : contenu brut, phrase de profil de poste idéal du module 01.",
    steps: [
      {
        title: 'Ligne 1 — le nom',
        actions: [
          "Remplacez « PRÉNOM NOM » par votre prénom et votre nom en majuscules, accents conservés (ex. JOËL KABEYA).",
          "Aucun titre de civilité, aucune particule décorative.",
        ],
      },
      {
        title: 'Ligne 2 — le titre professionnel visé',
        actions: [
          "Reprenez l'intitulé de votre phrase de profil de poste idéal (module 01), tel qu'il revient dans les offres : il sera un mot-clé de premier rang.",
          "Placez-le avec la forme du secteur entre parenthèses si besoin (ex. Responsable MEAL (MEAL Manager)).",
          "Gardez la mention « Secteur Humanitaire & International » du gabarit si elle correspond à votre cible.",
        ],
      },
      {
        title: 'Ligne 3 — les coordonnées',
        actions: [
          "Écrivez, séparés par une barre verticale : ville et pays | téléphone au format international (+243…) | e-mail professionnel | adresse LinkedIn en clair.",
          "Pas d'icône à la place de « Tél. » ou d'« E-mail », pas d'adresse postale complète, pas de date de naissance ni de situation familiale.",
          "Ajoutez la nationalité uniquement si l'offre l'exige (poste national d'une agence onusienne).",
        ],
      },
    ],
    example: {
      title: 'Les trois premières lignes du CV de Joël',
      lines: [
        'JOËL KABEYA',
        'Responsable MEAL (MEAL Manager) — Secteur Humanitaire & International',
        'Goma, RDC  |  +243 000 000 000  |  joel.kabeya@email.com  |  linkedin.com/in/joelkabeya',
      ],
    },
    result: "Trois lignes en texte pur, copiables, qui répondent aux questions « qui ? », « quel poste ? » et « comment le joindre ? » sans rien déléguer à une image ou à un en-tête.",
    pitfall: "Une adresse e-mail non professionnelle (joel_goma_98@…) ou illisible : elle abîme l'image du candidat et complique la correspondance avec votre profil dans le portail. Créez une adresse du type prénom.nom@.",
    tip: "Le titre de la ligne 2 annonce le poste visé, il ne remplace pas votre intitulé actuel : Joël est aujourd'hui Superviseur MEAL, et c'est ce qui figurera dans la rubrique Expérience.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Conserver les titres de section standards et leur ordre',
    intro: "Pourquoi : la reconnaissance des sections par mot-clé standard est précisément ce qui sécurise le parsing. L'ordre du gabarit est celui attendu par la majorité des recruteurs du secteur humanitaire et onusien. Entrée : le gabarit ouvert.",
    steps: [
      {
        title: 'Vérifier les 5 titres',
        actions: [
          "Contrôlez que les titres sont exactement : PROFIL, EXPÉRIENCE PROFESSIONNELLE, FORMATION, COMPÉTENCES, LANGUES — dans cet ordre.",
          "Ne renommez aucun titre avec une formule originale.",
        ],
      },
      {
        title: 'Traduire vos envies de titres créatifs',
        actions: [
          "Remplacez chaque titre créatif de votre ancien CV par son équivalent standard (tableau ci-dessous).",
          "Ne créez pas de nouvelle section : rangez vos certifications et formations courtes comme lignes de FORMATION.",
        ],
      },
      {
        title: 'Cas du CV en anglais',
        actions: [
          "Si une offre est en anglais, utilisez : PROFILE (ou SUMMARY), PROFESSIONAL EXPERIENCE, EDUCATION, SKILLS, LANGUAGES. Ne mélangez jamais les deux langues dans un même CV.",
        ],
      },
    ],
    table: {
      columns: ['Titre créatif (à éviter)', 'Titre standard (à utiliser)'],
      rows: [
        ['Mon parcours / Ce que j\'ai accompli', 'EXPÉRIENCE PROFESSIONNELLE'],
        ['Ce que je sais faire / Mes atouts', 'COMPÉTENCES'],
        ['À propos de moi / Qui suis-je', 'PROFIL'],
        ['Mon bagage / Mes études', 'FORMATION'],
        ['Parlez-vous ? / Communication', 'LANGUES'],
        ['Certifications / Formations continues (section à part)', 'Lignes dans FORMATION'],
      ],
    },
    result: "Un CV dont la structure est reconnaissable en une seconde par un logiciel comme par un recruteur humain, dans l'ordre Profil, Expérience, Formation, Compétences, Langues.",
    pitfall: "Placer FORMATION avant EXPÉRIENCE par habitude de jeune diplômé : avec 7 ans d'expérience, c'est l'expérience que le recruteur cherche d'abord. Respectez l'ordre du gabarit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Construire le squelette de la rubrique Expérience professionnelle',
    intro: "Le gabarit organise chaque poste en quatre éléments : une ligne « Intitulé — Organisation, Ville, Pays », une ligne de dates, les phrases PAR, puis une ligne de périmètre (équipe, budget, sites). Ici, vous posez les 3 blocs avec intitulés et dates ; les phrases viendront de la Procédure 3. Entrées : contenu brut vérifié.",
    steps: [
      {
        title: 'Dupliquer un bloc par poste',
        actions: [
          "Copiez le bloc « Coordinateur Logistique — ONG Internationale Alpha » du gabarit autant de fois que vous avez de postes à présenter (maximum 4 à 5 postes détaillés pour 2 pages).",
          "Classez-les du plus récent au plus ancien.",
        ],
      },
      {
        title: 'Remplir la ligne d\'intitulé et la ligne de dates',
        actions: [
          "Ligne 1 : « Intitulé  —  Organisation, Ville, Pays » avec le tiret long du gabarit.",
          "Ligne 2 : « Mois AAAA — Mois AAAA » ou « Mois AAAA — Aujourd'hui » pour le poste en cours, avec les dates vérifiées à l'étape 4 de la Procédure 1.",
          "Écrivez l'ordre : intitulé d'abord, organisation ensuite, jamais l'inverse.",
        ],
      },
      {
        title: 'Marquer les emplacements',
        actions: [
          "Sous chaque ligne de dates, tapez en toutes lettres [PAR 1], [PAR 2]… et [PÉRIMÈTRE] : des repères à remplacer à la Procédure 5.",
          "Pour les postes anciens (plus de 10 ans) ou sans lien avec la cible, un seul bloc court de 2 lignes suffit.",
        ],
      },
    ],
    example: {
      title: 'Squelette de Joël',
      lines: [
        'Superviseur MEAL  —  Alliance Santé Grands Lacs (ONG internationale), Goma, RDC',
        'Mars 2024 — Aujourd\'hui',
        '[PAR 1] [PAR 2] [PAR 3] [PAR 4] [PÉRIMÈTRE]',
        '',
        'Chargé de suivi-évaluation  —  Horizons Solidaires International (ONG internationale), Goma, RDC',
        'Juillet 2021 — Février 2024',
        '[PAR 1] [PAR 2] [PAR 3] [PÉRIMÈTRE]',
        '',
        'Assistant suivi-évaluation  —  Action Communautaire Kivu (ONG nationale), Goma, RDC',
        'Septembre 2019 — Juin 2021',
        '[PAR 1] [PAR 2] [PÉRIMÈTRE]',
      ],
    },
    result: "3 blocs complets avec intitulé, organisation, lieu et dates en mois et année, et le nombre de phrases PAR prévu par poste (4, 3 et 2 : 9 au total, comme les 9 réalisations du module 01).",
    pitfall: "Réécrire les dates sous la forme « 03/24 » ou « 2024 » seule : écrivez le mois en toutes lettres et l'année en 4 chiffres, c'est la forme que l'ATS et les portails comparent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Remplir Formation, Compétences et Langues',
    intro: "Ces trois sections tiennent en une dizaine de lignes de texte. Elles contiennent beaucoup de mots-clés : diplômes, outils, langues. Entrées : contenu brut, onglet « Compétences » du module 01, étape 4 de la Procédure 1.",
    steps: [
      {
        title: 'FORMATION',
        actions: [
          "Format du gabarit : « Diplôme  —  Établissement » puis les années sur la ligne suivante.",
          "Ajoutez en dessous, comme lignes de FORMATION, vos certifications et formations courtes pertinentes pour la cible, avec l'année.",
        ],
      },
      {
        title: 'COMPÉTENCES — première version',
        actions: [
          "Reprenez les compétences de votre onglet « Compétences » (module 01), triées par score décroissant (colonne E).",
          "Retirez les compétences à pertinence ≤ 2 (ex. animation radio communautaire) : elles prendraient la place d'une preuve utile.",
          "Écrivez chaque compétence en texte précis : « KoboToolbox / ODK » et non « collecte de données ».",
        ],
      },
      {
        title: 'LANGUES',
        actions: [
          "Une ligne par langue : « Langue — Niveau », avec le niveau validé à la Procédure 1.",
          "Ajoutez entre parenthèses un contexte d'usage réel (lecture de rapports, animation de réunions) si cela précise le niveau.",
        ],
      },
    ],
    example: {
      title: 'Sections de Joël (première version)',
      lines: [
        'FORMATION',
        'Master en Santé Publique  —  Institut Universitaire de Santé Publique du Kivu, Goma',
        '2017 — 2019',
        'Redevabilité envers les populations affectées (AAP)  —  formation interne, Alliance Santé Grands Lacs, 2025',
        'COMPÉTENCES (triées par score, radio communautaire retirée)',
        'Cadres logiques et plans de suivi — KoboToolbox / ODK — Conception d\'évaluations — Supervision d\'équipe — Rapports bailleurs — Excel / Power Query — Mécanisme de plaintes — Formation d\'équipes — Power BI — Budget MEAL — Coordination multi-partenaires',
        'LANGUES',
        'Français — Courant  |  Anglais — Intermédiaire (B1)  |  Swahili — Courant',
      ],
    },
    result: "Les trois sections sont remplies en texte simple, avec les niveaux réels. Elles seront regroupées et enrichies des mots-clés à la Procédure 5.",
    pitfall: "Écrire « Anglais — Courant » parce que l'offre l'exige : c'est le mot-clé le plus souvent vérifié en entretien. Un niveau B1 écrit B1 reste crédible ; un « courant » non tenu coûte l'entretien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Régler la mise en forme pour qu’elle reste lisible par la machine',
    intro: "Pourquoi : la mise en forme est la seconde cause d'échec après la structure. Les réglages ci-dessous sont sobres mais suffisent à rendre le CV net pour un humain. Entrée : le squelette construit aux étapes 1 à 5.",
    steps: [
      {
        title: 'Réglages de page et de police',
        actions: [
          "Mise en page > Marges : 2 cm de chaque côté, format A4.",
          "Police Calibri ou Arial ; corps du texte entre 10 et 11 points ; titre de section entre 11 et 12 points, en majuscules et en gras ; nom entre 16 et 18 points.",
          "Interligne simple, 6 points d'espacement après chaque paragraphe.",
        ],
      },
      {
        title: 'Éléments à proscrire — chasse aux intrus',
        actions: [
          "Avec Ctrl+Maj+8 activé, supprimez les tabulations d'alignement et les suites d'espaces : un paragraphe, une idée.",
          "Aucun tableau, aucune zone de texte, aucune colonne multiple, aucune image, aucun en-tête ni pied de page rempli.",
          "Si vous utilisez des puces, choisissez la puce ronde standard de Word (•) ou un tiret simple.",
        ],
      },
      {
        title: 'Contrôler les dates et les alignements',
        actions: [
          "Gardez la date sur une ligne à part sous l'intitulé, comme dans le gabarit : n'alignez jamais une date à droite avec des tabulations.",
          "Désactivez la justification du texte (alignement à gauche) et la césure automatique.",
        ],
      },
    ],
    table: {
      columns: ['Réglage', 'Valeur recommandée', 'Pourquoi'],
      rows: [
        ['Marges', '2 cm', 'Évite de perdre du texte à l\'impression et reste lisible'],
        ['Police', 'Calibri ou Arial, 10 à 11 pt', 'Polices installées partout, extraction fiable'],
        ['Titres de section', 'MAJUSCULES + gras', 'Reconnaissance de section'],
        ['Alignement', 'À gauche, sans césure', 'La justification peut créer des espaces parasites'],
        ['Puces', '• standard ou tiret', 'Une puce fantaisie peut devenir « ? » au collage'],
      ],
    },
    result: "Un document sobre, à une colonne, dont chaque élément est du vrai texte. Il reste à y mettre le contenu : la grille PAR (Procédure 3).",
    tip: "Joël a réglé ces paramètres une fois dans le fichier de travail : tous les CV adaptés par la suite sont des copies de ce fichier, donc héritent des bons réglages.",
  },

  // ──────── PROCÉDURE 3 — GRILLE DE TRANSFORMATION PAR (8 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 8',
    title: 'Ouvrir la grille PAR et lire ses trois exemples',
    intro: "Le classeur grille-transformation-par-realisations.xlsx fait le travail de reformulation ligne par ligne, hors du CV, avant toute rédaction finale. Ce détour par le tableur évite le piège classique : reformuler directement dans le CV sans avoir identifié le résultat mesurable derrière chaque tâche. Il compte 2 onglets : « Transformation PAR » et « Mode d'emploi ».",
    steps: [
      {
        title: 'Enregistrer votre copie',
        actions: [
          "Ouvrez le fichier depuis le dossier 04-templates et enregistrez-le sous « Kabeya_Joel_grille-PAR.xlsx » dans « Audit carrière 2026 ».",
        ],
      },
      {
        title: 'Lire le « Mode d\'emploi »',
        actions: [
          "Cliquez sur l'onglet « Mode d'emploi » : 5 consignes, une par colonne (A à E), puis un rappel : n'inventez jamais un résultat que vous ne pourriez pas justifier en entretien.",
          "Notez que les 3 premières lignes de l'onglet « Transformation PAR » sont des exemples déjà remplis ; les lignes suivantes sont à vous.",
        ],
      },
      {
        title: 'Étudier les lignes 5 à 7 de l\'onglet « Transformation PAR »',
        actions: [
          "Ligne 4 : les 5 en-têtes ; la zone de saisie va de la ligne 8 à la ligne 19, soit 12 lignes disponibles.",
          "Pour chaque exemple, lisez en travers : A (tâche vague) → B (Problème) → C (Action) → D (Résultat) → E (phrase finale).",
          "Repérez que B, C et D contiennent la matière, et que E n'est que leur assemblage fluide.",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'En-tête dans la grille', 'Ce qu\'elle attend'],
      rows: [
        ['A', 'Description de tâche originale (vague)', 'La tâche telle que vous l\'auriez écrite spontanément'],
        ['B', 'Problème', 'La situation de départ qui rendait la tâche nécessaire'],
        ['C', 'Action', 'Ce que VOUS avez fait, à la première personne'],
        ['D', 'Résultat (quantifié)', 'Le chiffre réel ou l\'estimation honnête et défendable'],
        ['E', 'Phrase CV finale (PAR)', 'La phrase prête à copier dans le CV'],
      ],
    },
    example: {
      title: 'Ligne 6 du modèle, lue en travers',
      lines: [
        'A : « En charge des achats pour les activités du programme. »',
        'B : les demandes d\'achat des équipes programme prenaient en moyenne 12 jours à être traitées.',
        'C : mise en place d\'un formulaire de demande standardisé et d\'un circuit de validation à 2 niveaux maximum.',
        'D : délai ramené à 4 jours en moyenne, sur environ 40 demandes mensuelles.',
        'E : « En standardisant le circuit de demande d\'achat (…), j\'ai réduit le délai de traitement de 12 à 4 jours en moyenne… »',
      ],
    },
    result: "Votre copie est enregistrée et nommée ; vous savez que vous saisirez vos réalisations à partir de la ligne 8, colonnes A à E.",
    pitfall: "Recopier les exemples du modèle tels quels : ils décrivent un profil logistique fictif, pas votre parcours. Effacez-les seulement quand votre grille est terminée, ils servent de repère de qualité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 8',
    title: 'Colonne A : saisir vos tâches telles que vous les avez écrites',
    intro: "Pourquoi : la colonne A garde la trace de l'« avant ». Elle sert de point de comparaison avec la phrase finale et vous empêche de reformuler sans avoir creusé. Entrées : votre CV actuel, le fichier de contenu brut, vos 9 réalisations « Oui » du module 01.",
    steps: [
      {
        title: 'Choisir les tâches à traiter',
        actions: [
          "Prévoyez au moins 1 ligne par poste, et de 2 à 4 lignes pour les 3 derniers postes ; visez 8 à 12 lignes au total.",
          "Priorité aux tâches qui servent votre poste visé et aux preuves managériales : équipe, budget, décision.",
          "Écartez les tâches sans résultat identifiable (réunions, classement, présence) : elles ne deviendront pas des phrases PAR.",
        ],
      },
      {
        title: 'Saisir ligne par ligne',
        actions: [
          "Cliquez dans A8, tapez la première tâche, puis descendez avec la touche Entrée.",
          "Recopiez la formulation de votre CV actuel, mot pour mot, y compris les « En charge de » et « Responsable de » : le contraste fait partie de l'exercice.",
          "Classez les lignes par poste, du plus récent au plus ancien.",
        ],
      },
    ],
    example: {
      title: 'Colonne A de Joël — lignes 8 à 16',
      lines: [
        'A8 : « Gestion de l\'équipe d\'enquêteurs et production des rapports mensuels. »  [Superviseur MEAL]',
        'A9 : « Suivi du budget MEAL. »',
        'A10 : « Responsable du mécanisme de plaintes. »',
        'A11 : « Contrôle qualité des enquêtes. »',
        'A12 : « Élaboration du cadre de suivi du projet WASH. »  [Chargé de S&E]',
        'A13 : « Organisation de l\'enquête de référence. »',
        'A14 : « Rédaction des rapports aux bailleurs. »',
        'A15 : « Numérisation du suivi des ménages. »  [Assistant S&E]',
        'A16 : « Formation des relais communautaires. »',
        'Écartées : « Participe aux réunions du cluster santé » (aucun résultat propre), « Classement des documents de projet ».',
      ],
    },
    result: "9 tâches saisies en A8:A16, groupées par poste. Chacune correspond à une réalisation du module 01 : la grille PAR en fait des phrases de CV.",
    pitfall: "Reformuler la tâche en la recopiant, avant d'avoir répondu aux questions suivantes. Si vous « améliorez » la colonne A, vous perdez le point de comparaison.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 8',
    title: 'Colonne B : identifier le Problème de départ',
    intro: "Pourquoi : un résultat n'a de valeur que par rapport à la situation de départ. « 4 jours » ne dit rien sans « 12 jours avant ». Le Problème est la situation qui rendait votre tâche nécessaire : un manque, un retard, un risque, un besoin non couvert. Il doit être vrai et si possible chiffré.",
    steps: [
      {
        title: 'Poser les 4 questions',
        actions: [
          "Qu'est-ce qui n'allait pas, manquait ou menaçait quand vous avez pris cette tâche en charge ?",
          "Quel était le coût : retard, erreurs, plaintes, risque financier, risque pour les bénéficiaires ?",
          "Qui en souffrait : l'équipe, le bailleur, les communautés ?",
          "Comment le mesurait-on avant votre action ? (chiffre de départ)",
        ],
      },
      {
        title: 'Chercher la réponse dans vos pièces',
        actions: [
          "Rapports d'avant votre arrivée, descriptions de poste, notes de passation, courriels du supérieur, évaluations annuelles.",
          "En cas de doute sur un chiffre de départ, demandez à un ancien collègue : ne le déduisez pas de mémoire.",
        ],
      },
      {
        title: 'Rédiger en une phrase',
        actions: [
          "Écrivez la situation au passé, sans jugement et sans « je » : « Les rapports mensuels arrivaient souvent hors délai. »",
          "Évitez les adjectifs (« gros problème ») : donnez un fait.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'A — Tâche d\'origine (résumé)', 'B — Problème'],
      rows: [
        ['8', 'Équipe et rapports mensuels', 'Rapports mensuels des 3 provinces souvent livrés hors délai, faute de calendrier commun'],
        ['9', 'Budget MEAL', 'Budget MEAL 2025 de 120 000 USD exposé à des dépassements sur les lignes collecte et transport'],
        ['10', 'Mécanisme de plaintes', 'Retours communautaires traités au cas par cas, 19 jours en moyenne avant réponse'],
        ['11', 'Contrôle qualité des enquêtes', 'Enquête nutrition de mai 2025 : 9 % de doublons détectés, coordinateur absent'],
        ['12', 'Cadre de suivi WASH', '3 bailleurs aux indicateurs et formats différents, sans cadre commun (1,8 M USD)'],
        ['13', 'Enquête de référence', 'Données de référence attendues à une date ferme, baseline prévue en 8 semaines'],
        ['14', 'Rapports aux bailleurs', 'Rapports trimestriels hérités renvoyés pour correction par 2 des 3 bailleurs'],
        ['15', 'Numérisation du suivi', 'Données saisies sur papier, 21 jours pour atteindre le bureau central (4 200 ménages)'],
        ['16', 'Formation des relais', 'Taux d\'erreur de saisie de 14 % chez les relais communautaires'],
      ],
    },
    result: "Chaque ligne a un Problème d'une phrase, appuyé sur un fait, souvent avec un chiffre de départ : c'est ce qui rendra le résultat convaincant.",
    pitfall: "Inventer un Problème pour « faire joli ». Pour votre propre CV, le Problème doit être réel et vérifiable par une pièce ou un témoin ; seul l'exercice d'Aline autorise un Problème plausible déduit du type de poste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 8',
    title: 'Colonne C : décrire l’Action que vous avez menée, vous',
    intro: "Pourquoi : l'Action est ce que le recruteur achète. C'est elle qui sera questionnée en entretien (« qu'avez-vous fait, vous ? »). Elle doit nommer ce que vous avez décidé, conçu, négocié, supervisé — pas ce que l'équipe ou l'organisation a fait.",
    steps: [
      {
        title: 'Écrire à la première personne',
        actions: [
          "Commencez chaque action par un verbe au passé composé : j'ai conçu, instauré, négocié, standardisé, formé, supervisé, arbitré, décidé.",
          "Si vous avez agi avec d'autres, précisez votre part : « j'ai coordonné », « j'ai proposé et obtenu », « j'ai animé ».",
        ],
      },
      {
        title: 'Limiter à une ou deux actions',
        actions: [
          "Retenez l'action qui a produit le résultat de la colonne D, pas toutes les tâches de la période.",
          "Précisez le périmètre : combien de personnes, de sites, de partenaires.",
        ],
      },
      {
        title: 'Passer le test du « nous »',
        actions: [
          "Relisez chaque phrase : si vous ne pouvez pas la dire en entretien sans écrire « nous », l'action n'est pas encore la vôtre.",
          "Réécrivez avec un verbe qui indique votre rôle : décidé, conçu, piloté, coordonné.",
        ],
      },
    ],
    example: {
      title: 'Colonne C de Joël',
      lines: [
        'C8 : j\'ai mis en place un calendrier commun aux 3 provinces et une relecture hebdomadaire avec les 5 enquêteurs et l\'assistant data.',
        'C9 : j\'ai instauré un suivi mensuel ligne par ligne avec le service finance et arbitré 2 reports d\'activités.',
        'C10 : j\'ai conçu et lancé la ligne verte et les boîtes à suggestions (avril 2025), avec un registre et un délai cible de 7 jours.',
        'C11 : en l\'absence du coordinateur, j\'ai décidé de suspendre la collecte et réorganisé les contrôles de doublons.',
        'C12 : j\'ai conçu un cadre de mesure unique de 32 indicateurs aligné sur les trois bailleurs.',
        'C13 : j\'ai recruté, formé et coordonné 12 enquêteurs temporaires, sur 2 zones de santé en parallèle.',
        'C14 : j\'ai standardisé le gabarit de rapport et instauré une relecture croisée avant envoi.',
        'C15 : j\'ai numérisé le suivi avec des formulaires Kobo, déployés sur les 4 200 ménages.',
        'C16 : j\'ai formé 18 relais communautaires à la collecte en 6 sessions.',
      ],
    },
    pitfall: "S'attribuer le résultat de toute l'équipe sans préciser son rôle : la question « qu'avez-vous fait, vous ? » arrivera, et la réponse doit coller mot pour mot à la phrase écrite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 8',
    title: 'Colonne D : trouver et calculer le chiffre qui manque',
    intro: "Règle du guide : si vous ne trouvez aucun chiffre pour une réalisation, cherchez-en un avant de continuer. Il existe presque toujours l'un des cinq types de chiffres ci-dessous. Entrées : vos pièces du dossier de preuves, vos rapports, vos suivis budgétaires.",
    steps: [
      {
        title: 'Passer en revue les 5 types de chiffres',
        actions: [
          "Volume : ménages, bénéficiaires, sites, rapports, formulaires.",
          "Délai : durée avant / après, semaines d'avance sur le calendrier.",
          "Personnes : membres d'équipe encadrés, personnes formées, partenaires coordonnés.",
          "Argent : budget géré, montant arbitré, économie réalisée.",
          "Taux : erreurs, exécution budgétaire, couverture, satisfaction.",
        ],
      },
      {
        title: 'Calculer la variation correctement',
        actions: [
          "Variation en % = (valeur avant − valeur après) ÷ valeur avant × 100. Dans Excel, dans une cellule de brouillon hors du tableau : =(21-4)/21 puis format Pourcentage.",
          "Quand un taux passe d'un pourcentage à un autre, exprimez l'écart en points de pourcentage, pas en pourcentage.",
          "Arrondissez toujours à la baisse.",
        ],
      },
      {
        title: 'Noter la preuve en regard du chiffre',
        actions: [
          "Dans la colonne D, après le chiffre, ajoutez entre parenthèses la pièce qui l'appuie : rapport, suivi budgétaire, courriel du bailleur.",
        ],
      },
    ],
    example: {
      title: 'Calculs de Joël, ligne par ligne (colonne D)',
      lines: [
        'D8 : 30 rapports mensuels sur 30 livrés dans les délais (registre des rapports).',
        'D9 : 115 200 ÷ 120 000 × 100 = 96 % exécuté, aucun dépassement de ligne (suivi budgétaire MEAL 2025).',
        'D10 : 1 340 retours en 12 mois ; délai de 19 à 7 jours : (19 − 7) ÷ 19 × 100 = 63,2 %, donc « ramené de 19 à 7 jours » (tableau de suivi des plaintes).',
        'D11 : doublons de 9 % à moins de 1 % = baisse de plus de 8 points ; aucune donnée erronée envoyée au bailleur (note interne de mai 2025).',
        'D12 : 32 indicateurs, utilisés 30 mois sans révision majeure (cadre de mesure validé).',
        'D13 : 1 150 ménages en 6 semaines au lieu de 8, soit 2 semaines d\'avance, 12 enquêteurs (rapport de baseline).',
        'D14 : 10 rapports trimestriels consécutifs acceptés sans correction de fond (courriels d\'acceptation).',
        'D15 : délai de 21 à 4 jours : (21 − 4) ÷ 21 × 100 = 80,9 %, donc « −80 % » (rapport trimestriel T4 2020).',
        'D16 : taux d\'erreur de 14 % à 5 % = −9 points de pourcentage, en 3 mois (fiches de présence, rapport qualité).',
      ],
    },
    pitfall: "Écrire « baisse de 9 % » quand le taux passe de 14 % à 5 % : c'est une baisse de 9 points de pourcentage (et de 64 % en relatif). Un recruteur analytique relève cette confusion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 8',
    title: 'Chiffrer honnêtement quand le chiffre exact est introuvable',
    intro: "Pourquoi : l'absence de chiffre exact n'est pas une raison de renoncer au résultat mesurable. Le guide l'admet explicitement : une estimation raisonnable et défendable en entretien vaut infiniment mieux qu'une phrase sans aucun chiffre. Ce qui est interdit, c'est d'inventer.",
    steps: [
      {
        title: 'Reconstituer à partir d\'une pièce',
        actions: [
          "Combinez deux chiffres connus : nombre de rapports × nombre de sites, nombre de bénéficiaires ÷ nombre de jours.",
          "Notez la formule de reconstitution dans la colonne D : vous devrez pouvoir la refaire à voix haute.",
        ],
      },
      {
        title: 'Exprimer l\'incertitude avec les bons mots',
        actions: [
          "Utilisez « environ », « plus de », « près de », « de l'ordre de » : jamais un chiffre rond présenté comme exact.",
          "Choisissez l'arrondi qui ne vous avantage pas : « plus de 80 % » si le calcul donne 80,9 %.",
        ],
      },
      {
        title: 'Vérifier la défendabilité',
        actions: [
          "Posez-vous : « si on me demande comment j'ai mesuré cela, puis-je répondre en deux phrases ? »",
          "Si la réponse est non, retirez le chiffre ou cherchez une pièce ou un témoin (ancien supérieur, collègue).",
        ],
      },
    ],
    example: {
      title: 'Estimation honnête chez Joël',
      lines: [
        'Tâche : coordination des 12 enquêteurs de la baseline. Chiffre manquant : productivité par enquêteur.',
        'Reconstitution : 1 150 ménages ÷ 12 enquêteurs = 95,8 ménages chacun ; sur 6 semaines de 5 jours = 30 jours → 95,8 ÷ 30 = 3,2 ménages par jour.',
        'Formulation retenue : « environ 3 ménages par enquêteur et par jour ».',
        'Note colonne D : « calcul à partir du rapport de baseline (1 150 ménages, 12 enquêteurs, 6 semaines) ».',
        'Chiffre écarté : « satisfaction des équipes : 95 % » — aucune enquête de satisfaction n\'a été menée, donc jamais écrit.',
      ],
    },
    result: "Chaque chiffre de la grille est soit exact et prouvé, soit une estimation reconstituée avec sa méthode notée en colonne D. Aucun chiffre ne repose sur « à peu près ».",
    pitfall: "Arrondir à la hausse un résultat flatteur. Un chiffre faux découvert à la vérification des références élimine une candidature plus sûrement qu'une absence de chiffre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 8',
    title: 'Colonne E : rédiger la phrase finale PAR, prête à copier',
    intro: "Pourquoi : la colonne E est la seule qui ira dans le CV. Elle enchaîne Problème → Action → Résultat en une ou deux phrases fluides, avec les mots-clés précis de votre cible. Entrées : colonnes B, C et D de la même ligne.",
    steps: [
      {
        title: 'Choisir la structure de la phrase',
        actions: [
          "Structure 1 : « Face à [Problème], j'ai [Action], [Résultat]. »",
          "Structure 2 : « Pour [objectif], j'ai [Action] : [Résultat]. »",
          "Structure 3 : « Lors de [situation], j'ai [Action], [Résultat]. »",
          "Alternez les structures : 9 phrases commençant toutes par « Face à » se lisent comme un modèle recopié.",
        ],
      },
      {
        title: 'Assembler et resserrer',
        actions: [
          "Mettez le Problème en une proposition courte, l'Action avec un verbe fort, le Résultat chiffré en fin de phrase.",
          "Visez 25 à 40 mots (Word > Révision > Statistiques pour compter).",
          "Supprimez « en charge de », « responsable de », « participation à » : ils décrivent un poste, pas un résultat.",
        ],
      },
      {
        title: 'Intégrer les termes exacts de la cible',
        actions: [
          "Si un terme de l'offre correspond honnêtement à votre action, utilisez-le (« redevabilité », « mécanisme de plaintes », « KoboToolbox »).",
          "Vous affinerez cette étape à la Procédure 4 avec la grille de mots-clés.",
        ],
      },
    ],
    example: {
      title: 'Avant / après de trois lignes de Joël',
      lines: [
        'A15 (avant) : « Numérisation du suivi des ménages. »',
        'E15 (après, structure 2, 36 mots) : « Pour réduire un délai de transmission des données de 21 jours, dû à la saisie papier, j\'ai numérisé le suivi de 4 200 ménages avec des formulaires Kobo : délai ramené à 4 jours (−80 %). »',
        'A11 (avant) : « Contrôle qualité des enquêtes. »',
        'E11 (après, structure 3, 38 mots) : « Lors d\'une enquête nutritionnelle affichant 9 % de doublons, en l\'absence du coordinateur, j\'ai décidé de suspendre la collecte et de réorganiser les contrôles, ramenant les doublons sous 1 % et évitant l\'envoi de données erronées au bailleur. »',
        'A16 (avant) : « Formation des relais communautaires. »',
        'E16 (après, structure 1, 34 mots) : « Face à un taux d\'erreur de saisie de 14 %, j\'ai formé 18 relais communautaires à la collecte de données en 6 sessions : taux ramené à 5 % en 3 mois (−9 points). »',
      ],
    },
    result: "9 phrases en colonne E, de 25 à 40 mots, chacune avec un Problème, une Action à la première personne et un résultat chiffré. Elles seront copiées telles quelles à la Procédure 5.",
    tip: "Lisez chaque phrase à voix haute : si vous butez dessus, elle est trop longue. Coupez en deux phrases courtes plutôt qu'une phrase à rallonge.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 8 sur 8',
    title: 'Contrôler la grille avec cinq tests',
    intro: "Avant de passer au CV, passez chaque ligne de la grille au crible. Une ligne qui échoue à un test est réécrite, pas gardée « faute de mieux ». Entrée : la grille complétée, colonnes A à E.",
    steps: [
      { title: 'Test du chiffre', actions: ["La colonne D contient au moins un chiffre ou une estimation reconstituée, et la phrase E le reprend exactement."] },
      { title: 'Test de l\'entretien', actions: ["Pour chaque chiffre : « comment l'avez-vous mesuré ? » — répondez en deux phrases, avec la pièce ou le témoin cité en colonne D."] },
      { title: 'Test du « je »', actions: ["L'action est la vôtre : le verbe indique votre rôle (décidé, conçu, piloté, formé), pas « l'équipe a »."] },
      { title: 'Test d\'authenticité', actions: ["La phrase décrit ce que vous avez fait, pas une fiche de poste copiée : aucune formule comme « assurer la gestion efficace de… ». Vérifiez que vous n'avez conservé aucun exemple du modèle."] },
      {
        title: 'Test de couverture et de variété',
        actions: [
          "Au moins 1 phrase par poste présenté et 3 phrases pour le poste le plus récent.",
          "Pas plus de 4 phrases sur 9 avec la même structure d'ouverture.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Test échoué à la première relecture', 'Correction apportée'],
      rows: [
        ['14', 'Authenticité : « Rédigé 10 rapports de haute qualité » (adjectif, pas de preuve)', '« …10 rapports trimestriels consécutifs acceptés sans correction de fond »'],
        ['9', 'Chiffre : « budget bien géré »', '« 96 % exécuté (115 200 USD), sans dépassement de ligne »'],
        ['12', 'Variété : les lignes 8, 10, 12, 14 et 16 commençaient toutes par « Face à »', 'Lignes 9, 12, 13 et 15 passées en « Pour… », ligne 11 en « Lors de… » : 4 « Face à » seulement'],
        ['13', 'Je : « l\'enquête a été livrée en 6 semaines »', '« j\'ai piloté l\'enquête… en coordonnant 12 enquêteurs temporaires »'],
      ],
    },
    result: "La grille de Joël est validée : 9 lignes, 9 phrases de 31 à 40 mots, 4 pour le poste actuel, 3 pour le suivant et 2 pour le premier poste, chaque chiffre adossé à une pièce. C'est la matière première du CV et de ses réponses d'entretien (module 05).",
    pitfall: "Garder une ligne faible « pour faire le nombre ». Une réalisation sans résultat prouvé fragilise les autres ; il vaut mieux 7 lignes solides que 12 dont 3 que vous ne pourrez pas défendre.",
  },

  // ──────── PROCÉDURE 4 — MOTS-CLÉS SECTORIELS (6 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Réunir 3 offres cibles et copier leur texte',
    intro: "Pourquoi : les mots-clés ne se devinent pas, ils se lisent dans les offres. Le guide demande de reprendre l'offre visée ou, à défaut, 2 à 3 offres similaires du secteur ciblé. Entrées : le dossier « 00_Offres-cibles » du module 01 et votre phrase de profil de poste idéal.",
    steps: [
      {
        title: 'Choisir les offres',
        actions: [
          "Prenez l'offre sur laquelle vous allez postuler en premier, puis 2 offres du même intitulé et du même secteur (ou le plus proche).",
          "Une offre par jeu de mots-clés d'un même secteur : mélanger une offre ONG et une offre onusienne dilue la liste.",
        ],
      },
      {
        title: 'Copier le texte brut',
        actions: [
          "Copiez le titre, la mission, les responsabilités et les profils exigés dans un fichier texte par offre : « offre-FSAC.txt », « offre-SSIK.txt », « offre-RHSN.txt ».",
          "Notez en haut la date, l'organisation, le lieu et la date de clôture.",
        ],
      },
      {
        title: 'Rassembler dans un dossier',
        actions: [
          "Rangez les 3 fichiers dans « 00_Offres-cibles » ; les PDF d'origine restent à côté pour mémoire.",
        ],
      },
    ],
    example: {
      title: 'Offre n°1 de Joël, résumée (organisation fictive)',
      lines: [
        'MEAL Manager — Fraternité Santé Afrique Centrale (FSAC), ONG internationale — Bunia (Ituri), RDC — 12 mois renouvelable — clôture le 15/01/2027.',
        'Mission : concevoir et piloter le dispositif MEAL (suivi, évaluation, redevabilité et apprentissage) d\'un programme santé-nutrition financé par des bailleurs institutionnels.',
        'Responsabilités : encadrer l\'équipe MEAL ; élaborer le cadre logique et le plan MEAL ; superviser la collecte de données (KoboToolbox/ODK) et la qualité des données ; gérer le mécanisme de plaintes et retours (AAP) ; rédiger les rapports bailleurs ; gérer le budget MEAL ; produire des tableaux de bord (Power BI apprécié).',
        'Profil : master en santé publique ou équivalent ; 5 ans en suivi-évaluation dont 2 en encadrement d\'équipe ; baseline et endline ; anglais courant ; français.',
        'Autres offres : SSIK (MEAL Manager, Goma, ONG internationale) et RHSN (MEAL Manager, ONG internationale, Grands Lacs).',
      ],
    },
    result: "3 fichiers texte d'offres comparables, avec le contexte noté. Vous avez la matière pour compter les termes à l'étape suivante.",
    pitfall: "Travailler sur une seule offre : un terme qui n'y figure qu'une fois peut être une particularité de ce recruteur. Un terme présent dans 2 offres sur 3 est un signal de marché.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Relever et compter les termes qui reviennent',
    intro: "Pourquoi : un mot-clé qui revient dans les trois offres a plus de poids qu'un mot-clé unique. Comptez au lieu d'estimer. Durée : environ 30 minutes. Entrées : les 3 fichiers d'offres.",
    steps: [
      {
        title: 'Surligner les termes par catégorie',
        actions: [
          "Dans chaque fichier, surlignez : intitulé du poste, compétences techniques, outils et logiciels, acronymes sectoriels, diplôme, certifications, langues avec niveau, années d'expérience exigées.",
          "Surlignez aussi les verbes d'action répétés : superviser, élaborer, piloter, rédiger.",
        ],
      },
      {
        title: 'Compter dans quelles offres chaque terme apparaît',
        actions: [
          "Créez un tableau simple (3 colonnes d'offres) et cochez Oui ou Non pour chaque terme.",
          "Vous pouvez vérifier chaque terme avec Ctrl+F dans le fichier : Word ou le Bloc-notes indique si le terme est trouvé.",
          "Ajoutez une colonne « Total sur 3 » : 3 sur 3 = terme central ; 2 sur 3 = terme fréquent.",
        ],
      },
      {
        title: 'Retenir les termes utiles',
        actions: [
          "Gardez les termes présents dans au moins 2 offres sur 3, et ceux marqués « exigé » dans l'offre prioritaire (12 à 15 termes en tout).",
          "Marquez séparément les critères non négociables (diplôme, années, langue) : ils filtrent avant les mots-clés.",
        ],
      },
    ],
    table: {
      columns: ['Terme', 'FSAC', 'SSIK', 'RHSN', 'Total'],
      rows: [
        ['MEAL (suivi, évaluation, redevabilité, apprentissage)', 'Oui', 'Oui', 'Oui', '3/3'],
        ["Encadrement d'équipe", 'Oui', 'Oui', 'Oui', '3/3'],
        ['KoboToolbox / ODK', 'Oui', 'Oui', 'Oui', '3/3'],
        ['Cadre logique / plan MEAL / indicateurs', 'Oui', 'Oui', 'Oui', '3/3'],
        ['Rapports bailleurs', 'Oui', 'Oui', 'Oui', '3/3'],
        ['Anglais courant', 'Oui', 'Oui', 'Oui', '3/3'],
        ['Redevabilité (AAP) / mécanisme de plaintes et retours', 'Oui', 'Oui', 'Non', '2/3'],
        ['Gestion budgétaire', 'Oui', 'Non', 'Oui', '2/3'],
        ['Baseline / endline', 'Oui', 'Oui', 'Non', '2/3'],
        ['Qualité des données', 'Oui', 'Non', 'Oui', '2/3'],
        ['Power BI', 'Oui (atout)', 'Non', 'Oui (atout)', '2/3'],
        ['Master en santé publique ou équivalent', 'Oui', 'Oui', 'Non', '2/3'],
      ],
    },
    result: "12 termes retenus, dont 6 centraux (3 sur 3). Le premier tri est fait par les offres elles-mêmes : plus de devinette.",
    tip: "Alignez ce relevé avec le benchmarking du module 01 : un terme qui ressort aussi de vos 20 offres ReliefWeb (supervision d'équipe 16/20, Kobo 14/20) est un mot-clé de premier rang.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Comparer avec votre CV : où chaque terme apparaît-il déjà ?',
    intro: "Pourquoi : certains mots-clés sont déjà dans votre CV, sous leur forme exacte ou sous un synonyme que la machine ne reconnaîtra pas. Cette étape établit l'état des lieux terme par terme. Entrées : liste des 12 termes, contenu brut, grille PAR.",
    steps: [
      {
        title: 'Rechercher chaque terme dans votre contenu',
        actions: [
          "Ouvrez votre contenu brut et votre grille PAR ; avec Ctrl+F, cherchez chaque terme de la liste.",
          "Notez le statut : Exact (même mot), Synonyme (idée présente, mot différent), Absent.",
        ],
      },
      {
        title: 'Évaluer votre possession réelle',
        actions: [
          "Pour chaque terme, répondez : « puis-je citer une situation précise où je l'ai pratiqué ? ».",
          "Notez : Oui avec preuve, Partiel (niveau limité), ou Non.",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Croisez les deux colonnes avec la règle des trois cas (étape suivante).",
        ],
      },
    ],
    table: {
      columns: ['Terme de l\'offre', 'Dans le contenu de Joël', 'Possédé ?', 'Preuve'],
      rows: [
        ['MEAL', 'Synonyme : « suivi-évaluation »', 'Oui', '7 ans de suivi-évaluation'],
        ['Cadre logique / plan MEAL', 'Synonyme : « cadre de mesure »', 'Oui', 'Cadre de 32 indicateurs, onglet Compétences'],
        ['KoboToolbox / ODK', 'Synonyme : « Kobo »', 'Oui', '4 200 ménages, 18 relais formés'],
        ['Redevabilité (AAP) / mécanisme de plaintes et retours', 'Synonyme : « mécanisme de plaintes »', 'Oui', '1 340 retours traités'],
        ['Encadrement d\'équipe', 'Absent du CV actuel (« gestion de l\'équipe »)', 'Oui', 'Équipe de 6 depuis mars 2024'],
        ['Qualité des données', 'Absent (décision de mai 2025 non formulée ainsi)', 'Oui', 'Note interne de mai 2025'],
        ['Baseline / endline', 'Synonyme : « enquête de référence »', 'Oui', 'Baseline de 1 150 ménages'],
        ['Gestion budgétaire', 'Exact : « budget MEAL »', 'Partiel', 'Exécute, n\'a pas construit un budget'],
        ['Power BI', 'Absent', 'Partiel', 'Tableaux simples réalisés seul'],
        ['Anglais courant', 'Exact : « Anglais »', 'Non', 'Niveau B1'],
      ],
    },
    result: "Joël a 5 mots-clés sous forme de synonymes (à doubler), 2 mots-clés absents mais possédés (à injecter) et 3 cas limites : budget et Power BI à niveau partiel, anglais non possédé. Il sait exactement ce qu'il peut écrire et ce qu'il ne peut pas.",
    pitfall: "Considérer qu'un synonyme suffit. Pour un ATS qui cherche « redevabilité », « mécanisme de plaintes » seul ne marque aucun point ; il faut les deux, quand c'est exact.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Décider honnêtement : la règle des trois cas',
    intro: "Pourquoi : le guide est formel : n'ajoutez jamais un mot-clé qui ne correspond à aucune réalité de votre parcours, parce qu'un recruteur qui vous interroge dessus détectera l'incohérence immédiatement. Entrée : votre tableau de l'étape 3.",
    steps: [
      {
        title: 'Cas 1 — Vous le possédez et il est déjà exact',
        actions: [
          "Conservez-le et vérifiez qu'il apparaît au moins deux fois : une fois dans le Profil ou les Compétences, une fois dans une phrase PAR (la preuve).",
        ],
      },
      {
        title: 'Cas 2 — Vous le possédez sous un synonyme ou il est absent',
        actions: [
          "Écrivez les deux formes quand c'est exact : le terme de l'offre et votre formulation d'origine.",
          "Placez le terme dans une phrase PAR qui le prouve, pas dans une liste isolée.",
        ],
      },
      {
        title: 'Cas 3 — Vous ne le possédez pas, ou seulement en partie',
        actions: [
          "Ne l'écrivez pas, ou écrivez-le avec le niveau réel (« Power BI — tableaux de bord de suivi », sans « avancé »).",
          "Inscrivez l'écart dans votre feuille de route du module 01 : il y est déjà ou il doit s'y ajouter (action, échéance).",
        ],
      },
    ],
    table: {
      columns: ['Terme', 'Cas', 'Formulation retenue pour Joël', 'Où l\'écrire'],
      rows: [
        ['MEAL', '2', 'Suivi-évaluation (MEAL)', 'Titre, Profil, Compétences'],
        ['Cadre logique', '2', 'Cadre de mesure (cadre logique, 32 indicateurs)', 'Phrase PAR du poste HSI'],
        ['Redevabilité (AAP)', '2', 'Mécanisme de plaintes et retours — redevabilité (AAP)', 'Phrase PAR du poste ASGL, Compétences'],
        ['Qualité des données', '2', '« contrôles qualité des données » dans la phrase de la décision de mai 2025', 'Phrase PAR + Compétences'],
        ['Gestion budgétaire', '3 (partiel)', 'Budget MEAL de 120 000 USD exécuté à 96 % — suivi, pas construction', 'Phrase PAR du poste ASGL'],
        ['Power BI', '3 (partiel)', 'Power BI (tableaux de bord de suivi)', 'Compétences seulement'],
        ['Anglais courant', '3', 'Anglais — Intermédiaire (B1)', 'Langues'],
      ],
    },
    result: "Joël a une liste d'actions claire : 5 termes à doubler, 2 à injecter, 2 à écrire avec leur niveau réel (budget, Power BI) et 1 à ne pas écrire (anglais courant). L'écart d'anglais est déjà dans son plan d'action : 3 heures par semaine, certification B2 visée au 30/06/2027.",
    pitfall: "Passer l'anglais à « Courant » ou « Bilingue » pour ne pas être filtré : si l'entretien commence en anglais, la candidature s'arrête en 2 minutes et le recruteur retient une impression de manque d'honnêteté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Placer les mots-clés aux bons endroits, sans bourrage',
    intro: "Pourquoi : un mot-clé n'a de valeur que dans un contexte qui le prouve ; il doit être placé là où l'ATS et l'humain le trouvent. Entrées : décisions de l'étape 4, grille PAR (colonne E).",
    steps: [
      {
        title: 'Les 4 emplacements utiles',
        actions: [
          "Ligne de titre : l'intitulé de l'offre (MEAL Manager).",
          "Profil : 4 à 5 mots-clés centraux, dans des phrases lisibles.",
          "Phrases PAR de la rubrique Expérience : le terme dans une réalisation qui le prouve.",
          "Compétences : la liste des outils, méthodes et domaines, en texte simple.",
        ],
      },
      {
        title: 'Écrire l\'acronyme ET la forme développée une fois',
        actions: [
          "Exemple : « redevabilité envers les populations affectées (AAP) » à la première mention, puis « AAP » ensuite.",
          "Un ATS peut chercher l'un ou l'autre : donnez-lui les deux formes.",
        ],
      },
      {
        title: 'Éviter ce qui se voit à la lecture',
        actions: [
          "Pas de liste de 40 mots-clés alignés, pas de texte blanc invisible, pas de répétition d'un même mot plus de 3 fois.",
          "Relisez à voix haute : si la phrase sonne creuse, le mot-clé est en trop.",
        ],
      },
    ],
    table: {
      columns: ['Mot-clé', 'Emplacement 1', 'Emplacement 2 (preuve)'],
      rows: [
        ['MEAL / suivi-évaluation', 'Titre et Profil', 'Intitulé de chaque poste'],
        ['KoboToolbox / ODK', 'Compétences', 'Phrase PAR : 4 200 ménages (poste ACK)'],
        ['Redevabilité (AAP)', 'Profil et Compétences', 'Phrase PAR : ligne verte, 1 340 retours (poste ASGL)'],
        ['Encadrement d\'équipe', 'Profil', 'Phrase PAR : équipe de 6 (ASGL), ligne de périmètre'],
        ['Qualité des données', 'Compétences', 'Phrase PAR : décision de mai 2025 (ASGL)'],
        ['Power BI', 'Compétences', '— (pas de preuve : niveau limité)'],
      ],
    },
    result: "Chaque mot-clé central apparaît au moins deux fois, dont une dans une phrase qui le prouve. Aucun mot-clé orphelin dans une liste sans preuve, sauf Power BI, assumé à son niveau réel.",
    pitfall: "Bourrer le CV de mots-clés en texte blanc ou en liste interminable : les logiciels le repèrent de plus en plus, et un humain y lit immédiatement la manœuvre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Refaire la grille pour l’offre onusienne (poste NO-B)',
    intro: "Pourquoi : un portail onusien n'a pas les mêmes mots que l'offre d'une ONG, et il applique des critères minimaux (diplôme, années) avant le moindre score. Joël refait donc l'exercice sur l'offre d'administrateur national suivi-évaluation NO-B à Goma (agence onusienne, offre fictive). Entrées : offre onusienne copiée en texte brut, grille de mots-clés ONG.",
    steps: [
      {
        title: 'Vérifier d\'abord les critères minimaux',
        actions: [
          "Relevez les critères d'éligibilité de l'offre : diplôme, années d'expérience, langues, nationalité si poste national.",
          "Comparez-les à votre situation : si un critère manque, ne candidatez pas à ce grade (module 01, matrice de ciblage).",
        ],
      },
      {
        title: 'Relever les termes propres au système onusien',
        actions: [
          "Repérez les formulations spécifiques : gestion axée sur les résultats (RBM), partenaires de mise en œuvre, renforcement des capacités.",
          "Comptez-les comme à l'étape 2 ; une offre seule suffit si le grade est précis.",
        ],
      },
      {
        title: 'Comparer à la grille ONG',
        actions: [
          "Notez le noyau commun (environ 80 % des termes) et les termes propres à l'offre onusienne.",
          "N'ajoutez un terme que si vous l'avez pratiqué.",
        ],
      },
    ],
    table: {
      columns: ['Critère ou terme', 'Offre onusienne NO-B', 'Joël', 'Décision'],
      rows: [
        ['Diplôme', 'Master en santé publique ou équivalent', 'Master en santé publique', 'Éligible'],
        ['Années d\'expérience', '2 ans minimum en suivi-évaluation', '7 ans', 'Éligible'],
        ['Nationalité', 'Poste réservé aux ressortissants du pays', 'Congolaise', 'Éligible'],
        ['Langues', 'Français exigé ; anglais souhaitable', 'Français courant, anglais B1', 'Éligible (atout à construire)'],
        ['Gestion axée sur les résultats (RBM)', '2 mentions', 'Cadres logiques et cadre de 32 indicateurs', 'Écrire : « gestion axée sur les résultats (RBM) » dans la phrase du cadre de mesure'],
        ['Partenaires de mise en œuvre', '2 mentions', 'Coordination de partenaires (projet WASH, 3 bailleurs)', 'Écrire « coordination de partenaires », sans extrapoler'],
        ['Renforcement des capacités', '1 mention', '18 relais formés', 'Écrire « renforcement des capacités » dans la phrase de formation'],
      ],
    },
    result: "Joël confirme son éligibilité NO-B et a la liste des 3 termes onusiens à ajouter pour la version Word, tous adossés à une réalisation existante.",
    pitfall: "Postuler à un grade pour lequel il manque une année d'expérience ou le diplôme requis : les présélections onusiennes écartent souvent d'office les dossiers qui ne remplissent pas ces critères minimaux, quelle que soit la qualité du CV.",
  },

  // ──────── PROCÉDURE 5 — ASSEMBLER LE CV (4 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Copier les phrases PAR dans la rubrique Expérience professionnelle',
    intro: "Pourquoi : c'est le moment où la grille devient un CV. On ne réécrit rien : on copie la colonne E, on retire les étiquettes du modèle et on termine chaque poste par la ligne de périmètre du gabarit. Entrées : squelette de la Procédure 2, colonne E de la grille, mots-clés de la Procédure 4.",
    steps: [
      {
        title: 'Copier la colonne E dans le squelette',
        actions: [
          "Dans la grille, sélectionnez la phrase E8, copiez-la (Ctrl+C), cliquez à la place de [PAR 1] sous le poste Superviseur MEAL, et collez en texte seul (Ctrl+Maj+V ou clic droit > Conserver le texte seul).",
          "Répétez pour chaque phrase, un paragraphe par phrase. Le gabarit n'utilise pas de puces ; si vous en ajoutez pour la lisibilité, prenez la puce standard (•). Joël, par habitude, reprend la puce « ▪ » de son ancien CV : le test de la Procédure 6 la signalera.",
          "Ordonnez les phrases de chaque poste par pertinence pour la cible, pas par chronologie : la preuve de management d'abord.",
        ],
      },
      {
        title: 'Retirer les étiquettes du modèle',
        actions: [
          "Le gabarit affiche ses exemples avec l'étiquette « PAR — Problème : … Action : … Résultat : … » à des fins pédagogiques. Dans votre CV final, n'écrivez ni « PAR — » ni les mots « Problème : », « Action : », « Résultat : » : la phrase de la colonne E est déjà fluide.",
        ],
      },
      {
        title: 'Écrire la ligne de périmètre de chaque poste',
        actions: [
          "Remplacez [PÉRIMÈTRE] par une ligne qui donne l'échelle : équipe, budget, rattachement, nombre de sites ou de bailleurs.",
          "Ne répétez pas un chiffre déjà donné dans les phrases : ajoutez ce qui manque.",
        ],
      },
    ],
    example: {
      title: 'Lignes de périmètre de Joël',
      lines: [
        'ASGL : Équipe de 6 personnes (5 enquêteurs, 1 assistant data) ; budget MEAL de 120 000 USD ; rattaché au coordinateur programme ; 3 provinces.',
        'HSI : Projet WASH de 1,8 M USD financé par 3 bailleurs ; 12 enquêteurs temporaires coordonnés ; 2 zones de santé.',
        'ACK : Projet de sécurité alimentaire, 4 200 ménages suivis ; 18 relais communautaires formés.',
      ],
    },
    result: "Les 3 postes contiennent 4, 3 et 2 phrases PAR sans étiquette, plus une ligne de périmètre. Chaque phrase est identique à la colonne E de la grille.",
    pitfall: "Retoucher les phrases en cours de copie : toute modification doit repasser par la grille, pour que CV et grille restent identiques. C'est la grille qui fait foi lors de la préparation d'entretien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Rédiger le Profil : 4 phrases qui annoncent la cible',
    intro: "Le gabarit propose un paragraphe de 4 phrases : l'expérience en années et en domaine, l'expertise en trois points, la recherche d'un poste précis, et un atout. Le Profil est lu en premier et concentre vos mots-clés de premier rang. Entrées : phrase de profil de poste idéal du module 01, grille de mots-clés, chiffres clés.",
    steps: [
      {
        title: 'Phrase 1 — Qui vous êtes',
        actions: [
          "Formule : « [Domaine] avec [N] ans d'expérience en [types d'organisations], dont [N] ans d'encadrement. »",
          "Utilisez des années réellement pertinentes pour le poste (module 01) et l'intitulé du secteur (MEAL).",
        ],
      },
      {
        title: 'Phrase 2 — Votre expertise',
        actions: [
          "Citez 3 à 4 compétences à fort score de votre onglet Compétences, avec les termes exacts de l'offre : cadres logiques, KoboToolbox/ODK, redevabilité (AAP), rapports bailleurs.",
        ],
      },
      {
        title: 'Phrases 3 et 4 — Ce que vous visez et votre atout',
        actions: [
          "Reprenez l'intitulé de la phrase de profil de poste idéal et la zone ou le secteur.",
          "Terminez par un atout prouvé par un chiffre du CV (budget exécuté, équipe).",
          "Interdits : « je », adjectifs sans preuve (« dynamique »), formules génériques (« passionné par l'humanitaire »).",
        ],
      },
    ],
    example: {
      title: 'Profil de Joël (90 mots)',
      lines: [
        'Professionnel du suivi-évaluation (MEAL) avec 7 ans d\'expérience en ONG nationales et internationales, dont plus de 2 ans d\'encadrement d\'équipe en tant que Superviseur MEAL d\'un programme santé-nutrition de 4,6 M USD.',
        'Expertise en cadres logiques et plans de suivi, KoboToolbox/ODK, redevabilité envers les populations affectées (AAP) et rapports bailleurs.',
        'Recherche un poste de Responsable MEAL (MEAL Manager) en ONG internationale dans la région des Grands Lacs, avec une capacité démontrée à piloter un budget MEAL (120 000 USD exécutés à 96 %) et à transformer des données en décisions.',
      ],
    },
    result: "Un Profil de 3 à 5 lignes, sans « je », qui contient l'intitulé visé, 4 mots-clés centraux et 2 chiffres prouvés par la rubrique Expérience.",
    pitfall: "Écrire un Profil passe-partout (« professionnel motivé cherchant de nouveaux défis ») : il ne contient aucun mot-clé, aucun chiffre, et pourrait figurer sur n'importe quel CV.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Finaliser Compétences et Langues avec les mots-clés',
    intro: "Pourquoi : la section COMPÉTENCES est celle que les ATS scrutent le plus pour compter les mots-clés ; elle doit rester du texte lisible. Le gabarit propose 5 lignes, chacune regroupant des compétences d'un même domaine. Entrées : liste de compétences de la Procédure 2, décisions de la Procédure 4.",
    steps: [
      {
        title: 'Regrouper en 5 lignes',
        actions: [
          "Regroupez par domaine : méthodes de suivi-évaluation ; collecte et analyse de données ; redevabilité ; management ; rapports et coordination.",
          "Un libellé en début de ligne suivi de deux-points, puis les compétences séparées par des virgules.",
        ],
      },
      {
        title: 'Trier par pertinence et retirer l\'inutile',
        actions: [
          "Placez en premier ce qui a le plus de poids dans les offres (score ≥ 16 au module 01).",
          "Retirez toute compétence hors cible : animation radio communautaire ne figure plus.",
        ],
      },
      {
        title: 'Aligner les niveaux honnêtement',
        actions: [
          "Si vous écrivez un outil à niveau limité, précisez son usage réel : « Power BI (tableaux de bord de suivi) », pas « Power BI avancé ».",
          "Section LANGUES : une ligne par langue, avec le niveau défendable ; ajoutez entre parenthèses une précision utile.",
        ],
      },
    ],
    example: {
      title: 'COMPÉTENCES et LANGUES finales de Joël',
      lines: [
        'COMPÉTENCES',
        'Suivi-évaluation (MEAL) : cadres logiques, plans de suivi, indicateurs, baseline et endline, gestion axée sur les résultats (RBM)',
        'Collecte et analyse de données : KoboToolbox / ODK, Excel et Power Query, Power BI (tableaux de bord de suivi), contrôle qualité des données',
        'Redevabilité (AAP) : mécanismes de plaintes et retours communautaires, formation interne AAP',
        'Management : encadrement d\'équipe (6 personnes), pilotage budgétaire (budget MEAL de 120 000 USD), formation d\'équipes',
        'Rapports et coordination : rédaction de rapports bailleurs, coordination de partenaires',
        'LANGUES',
        'Français — Courant  |  Anglais — Intermédiaire (B1), lecture de rapports bailleurs, formation en cours  |  Swahili — Courant',
      ],
    },
    result: "5 lignes de compétences en texte pur, ordonnées par poids dans les offres, sans jauge ni compétence hors cible, et des niveaux de langue que Joël peut tenir à l'oral.",
    tip: "Gardez « RBM » ici seulement si la phrase PAR du cadre de mesure l'utilise aussi : une compétence listée sans preuve voisine est la première à être questionnée en entretien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Réduire à 2 pages et supprimer les notes de conception',
    intro: "Pourquoi : un recruteur qui traite des centaines de dossiers ne lira jamais une quatrième page, et l'information importante se noie dans le détail secondaire. Visez 2 pages ; 3 maximum seulement pour un parcours très riche. Entrée : le CV assemblé aux étapes 1 à 3.",
    steps: [
      {
        title: 'Supprimer les notes du gabarit',
        actions: [
          "Supprimez les 3 encadrés : la « Note de conception » sous la ligne de contact, celle sous l'expérience, et le « Rappel de mise en page » en fin de document.",
          "Contrôlez qu'il ne reste aucun exemple du gabarit (Alpha, Beta, SAP, Université de Kinshasa) ni aucun repère [PAR n].",
        ],
      },
      {
        title: 'Mesurer',
        actions: [
          "Regardez la barre d'état de Word (« Page 1 sur 3 ») ou Fichier > Imprimer pour l'aperçu.",
          "Révision > Statistiques : un CV de 2 pages à 10,5 points tient environ 700 à 900 mots.",
        ],
      },
      {
        title: 'Réduire dans cet ordre',
        actions: [
          "1) Raccourcir les phrases PAR les plus faibles ou en retirer une du poste le plus ancien.",
          "2) Condenser la ligne de périmètre et la section FORMATION.",
          "3) Retirer les compétences à pertinence faible.",
          "Ne réduisez jamais la police en dessous de 10 points ni les marges en dessous de 2 cm : c'est un contournement, pas une réduction.",
        ],
      },
    ],
    table: {
      columns: ['Passe', 'Action de Joël', 'Résultat'],
      rows: [
        ['Brouillon', 'CV assemblé avec 9 phrases PAR, Profil de 84 mots, 5 lignes de compétences', '2 pages et demie, 960 mots'],
        ['Réduction 1', 'Phrases du poste ACK condensées à 2 lignes, ligne de périmètre ASGL raccourcie', '2 pages et quart, 880 mots'],
        ['Réduction 2', 'Ligne FORMATION condensée, doublon retiré entre Profil et Compétences', '2 pages, 820 mots'],
      ],
    },
    result: "Un CV de 2 pages, sans note de conception ni repère, avec une page 2 remplie aux trois quarts. Joël l'enregistre sous « Kabeya_Joel_CV_v1.docx » avant de passer au test.",
    pitfall: "Faire entrer 3 pages dans 2 en passant à 9 points et 1 cm de marge : le CV devient illisible pour l'humain, et l'ATS ne gagne rien. Coupez le contenu, pas la lisibilité.",
  },

  // ──────── PROCÉDURE 6 — VÉRIFIER LE PARSING (4 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Exécuter le test du copier-coller sur le Word final',
    intro: "Pourquoi : c'est la vérification gratuite que le guide impose avant tout envoi. Si le texte collé est complet, dans le bon ordre et lisible, votre CV a de bonnes chances d'être correctement parsé ; sinon la mise en page casse le parsing et doit être revue. Entrée : « Kabeya_Joel_CV_v1.docx ».",
    steps: [
      {
        title: 'Copier et coller',
        actions: [
          "Ouvrez le document, appuyez sur Ctrl+A (tout sélectionner), puis Ctrl+C.",
          "Ouvrez un nouveau fichier du Bloc-notes et appuyez sur Ctrl+V ; enregistrez-le sous « cv-v1_collage.txt ».",
        ],
      },
      {
        title: 'Lire avec la liste de contrôle',
        actions: [
          "Vérifiez dans cet ordre : (1) nom en premier ; (2) ligne de contact complète avec téléphone, e-mail et LinkedIn ; (3) sections dans l'ordre Profil, Expérience, Formation, Compétences, Langues ; (4) chaque poste avec intitulé, organisation, dates ; (5) chaque phrase PAR entière.",
          "Cherchez aussi : caractères étranges (« ? », « Ã© »), mots coupés, lignes vides en trop, texte en double, mots absents.",
        ],
      },
      {
        title: 'Noter le score et les écarts',
        actions: [
          "Comptez les contrôles réussis sur 8 et notez chaque écart avec la ligne concernée.",
        ],
      },
    ],
    example: {
      title: 'Résultat du premier test de Joël — mercredi 09/12/2026',
      lines: [
        'JOËL KABEYA',
        'Responsable MEAL (MEAL Manager) — Secteur Humanitaire & International',
        'Goma, RDC  |  +243 000 000 000  |  joel.kabeya@email.com  |  linkedin.com/in/joelkabeya',
        'PROFIL',
        'Professionnel du suivi-évaluation (MEAL) avec 7 ans d\'expérience…',
        'EXPÉRIENCE PROFESSIONNELLE',
        'Superviseur MEAL — Alliance Santé Grands Lacs (ONG internationale), Goma, RDC',
        'Mars 2024 — Aujourd\'hui',
        '? Face à des rapports mensuels souvent livrés hors délai…   ← la puce « ▪ » apparaît comme « ? »',
        'Score : 7 contrôles sur 8 ; 1 écart : puces à remplacer.',
      ],
    },
    result: "Un fichier cv-v1_collage.txt lisible de haut en bas, un score sur 8 et la liste des écarts. Un CV à 8 sur 8 est prêt pour le test PDF ; sinon on corrige à l'étape suivante.",
    pitfall: "Ne tester que visuellement (« ça a l'air bien à l'écran ») : l'ordre de lecture d'un ATS n'est pas celui de l'écran. Seul le texte collé dans l'éditeur le montre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Lire le résultat et corriger la cause',
    intro: "Pourquoi : chaque symptôme du collage a une cause connue et une correction simple. Ne réparez pas à l'aveugle : identifiez la cause avant de toucher au document. Entrées : cv-v1_collage.txt et tableau des défauts de la Procédure 1.",
    steps: [
      {
        title: 'Relier chaque écart à sa cause',
        actions: [
          "Reportez-vous au tableau ci-dessous pour chaque symptôme noté à l'étape précédente.",
        ],
      },
      {
        title: 'Corriger dans le Word',
        actions: [
          "Corrigez la cause (pas seulement l'effet) : supprimez le tableau, remplacez la police, déplacez le texte hors de l'en-tête.",
          "Enregistrez en « v2 » : gardez v1 pour pouvoir comparer.",
        ],
      },
      {
        title: 'Refaire le test jusqu\'à 8 sur 8',
        actions: [
          "Refaites le copier-coller sur la version corrigée ; un seul passage ne suffit pas toujours.",
        ],
      },
    ],
    table: {
      columns: ['Symptôme dans le texte collé', 'Cause probable', 'Correction'],
      rows: [
        ['Téléphone ou e-mail absents', 'Coordonnées dans un en-tête, un pied de page ou une zone de texte', 'Remonter la ligne de contact dans le corps du document'],
        ['Lignes de plusieurs rubriques mélangées', 'Colonnes ou tableau', 'Supprimer le tableau, une seule colonne'],
        ['Phrases ou blocs manquants', 'Zone de texte ou image', 'Retaper le texte dans le corps du document'],
        ['Caractères « ? » ou « Ã© »', 'Puce fantaisie, police non standard, mauvais encodage', 'Puce • standard, police Calibri ou Arial'],
        ['Mots coupés en deux (« Super- viseur »)', 'Césure automatique ou justification', 'Désactiver la césure, aligner à gauche'],
        ['Date séparée de son poste', 'Tabulation ou alignement à droite', 'Date sur une ligne à part sous l\'intitulé'],
        ['Rubriques dans un autre ordre', 'Titres renommés ou blocs déplacés', 'Rétablir les titres standards et l\'ordre du gabarit'],
      ],
    },
    result: "Joël remplace les puces « ▪ » par la puce standard, enregistre en v2 et obtient 8 contrôles sur 8 au second collage. Il compare avec cv-actuel_collage.txt : plus aucun des 2 défauts bloquants de la Procédure 1.",
    tip: "Ne corrigez jamais en supprimant la mise en forme à la main dans le fichier collé : c'est le Word que vous envoyez, pas le fichier texte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Tester le PDF exporté, pas seulement le Word',
    intro: "Pourquoi : le fichier que le recruteur reçoit est souvent le PDF. Un PDF issu d'un logiciel de design peut se comporter autrement que le Word qui l'a produit. Le test se refait donc sur le fichier exporté. Entrée : « Kabeya_Joel_CV_v2.docx » à 8 sur 8.",
    steps: [
      {
        title: 'Exporter correctement',
        actions: [
          "Dans Word : Fichier > Enregistrer sous > PDF (ou Exporter > Créer un PDF), pas une impression en image.",
          "Gardez la case « Optimiser pour : Standard » ; le PDF doit conserver le texte réel.",
        ],
      },
      {
        title: 'Refaire le test sur le PDF',
        actions: [
          "Ouvrez le PDF dans un lecteur (navigateur, Adobe), appuyez sur Ctrl+A, Ctrl+C, puis collez dans le Bloc-notes.",
          "Essayez aussi de sélectionner une phrase à la souris : si elle se surligne mot à mot, le texte est réel ; si un bloc entier se sélectionne d'un coup, c'est une image.",
        ],
      },
      {
        title: 'Comparer avec le Word',
        actions: [
          "Comparez les deux fichiers texte : même contenu, même ordre, même nombre de lignes à peu près.",
          "Toute différence pointe un problème d'export à corriger avant d'envoyer.",
        ],
      },
    ],
    example: {
      title: 'Comparaison des trois tests de Joël',
      lines: [
        'Ancien CV (PDF Canva) : 3 pages ; contacts absents ; compétences intercalées ; poste coupé — illisible.',
        'CV v2 (Word) : 8 contrôles sur 8.',
        'CV v2 (PDF exporté depuis Word) : texte sélectionnable mot à mot ; collage identique au Word, 2 pages ; 8 contrôles sur 8.',
      ],
    },
    result: "Le PDF est validé : le texte extrait est identique à celui du Word. Vous pouvez l'envoyer à une ONG qui demande un PDF.",
    pitfall: "Ré-exporter après une modification de dernière minute sans refaire le test : toute retouche impose un nouveau collage. Un détail oublié (une puce, un en-tête) peut tout casser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Mesurer la longueur, les mots-clés et le test des 90 secondes',
    intro: "Pourquoi : un CV peut passer le test technique et échouer la lecture humaine. Dernier contrôle, trois mesures : longueur, présence des mots-clés, lecture de 90 secondes par un tiers (même méthode qu'au module 01). Entrée : le PDF validé.",
    steps: [
      {
        title: 'Mesurer la longueur',
        actions: [
          "Contrôlez : 2 pages (3 maximum), police ≥ 10 points, marges ≥ 2 cm, pas de page 3 avec 3 lignes.",
        ],
      },
      {
        title: 'Vérifier la présence des mots-clés',
        actions: [
          "Dans le fichier collé, cherchez avec Ctrl+F chacun des 12 termes de la grille : ils doivent tous apparaître, sauf ceux que vous avez volontairement écartés (anglais courant).",
          "Cochez dans la grille « présent dans le CV : Oui/Non ».",
        ],
      },
      {
        title: 'Refaire le test des 90 secondes avec un tiers',
        actions: [
          "Demandez à la collègue qui avait testé l'ancien CV (module 01) de lire le nouveau pendant 90 secondes, sans explication.",
          "Posez-lui les mêmes 3 questions : quel poste vise ce candidat ? à quel niveau ? quelles preuves chiffrées a-t-elle retenues ?",
        ],
      },
    ],
    example: {
      title: 'Rapport de vérification de Joël — jeudi 10/12/2026',
      lines: [
        'Longueur : 2 pages, 820 mots, Calibri 10,5 points, marges de 2 cm.',
        'Mots-clés : 11 termes sur 12 présents ; absent volontaire : « anglais courant ».',
        'Test des 90 secondes (avant, 30/11) : « Chargé de suivi-évaluation polyvalent, niveau officer, aucun chiffre retenu ».',
        'Test des 90 secondes (après, 10/12) : « Candidat MEAL Manager, équipe de 6, budget de 120 000 USD, 1 340 retours traités ».',
        'Conclusion : poste visé, niveau et 3 chiffres retenus en 90 secondes, contre aucun chiffre auparavant.',
      ],
    },
    result: "Un rapport d'une demi-page qui prouve que le CV est ATS-safe (collage 8 sur 8, Word et PDF), complet (11 mots-clés sur 12) et efficace pour un lecteur humain (3 chiffres retenus en 90 secondes).",
    pitfall: "Faire relire par quelqu'un qui connaît déjà votre parcours : il lira ce qu'il sait, pas ce qui est écrit. Le regard d'un tiers extérieur au projet est bien plus fiable.",
  },

  // ──────── PROCÉDURE 7 — EXPORTER, NOMMER ET ADAPTER PAR PORTAIL (5 étapes) ────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Nommer le fichier avec un nom professionnel',
    intro: "Pourquoi : le nom du fichier est la première chose que le recruteur voit dans sa liste de pièces jointes, parfois avant même d'ouvrir le CV. Le guide demande un nom professionnel et identifiable (« Prénom_Nom_CV_2026.docx » plutôt que « cv_final_v3_dernier.docx »). Entrée : le CV validé à la Procédure 6.",
    steps: [
      {
        title: 'Composer le nom',
        actions: [
          "Formule : Prénom_Nom_CV_année, sans espace, avec des tirets bas.",
          "Évitez les accents et les caractères spéciaux dans le nom lui-même : certains portails les rejettent ou les déforment (Joel_Kabeya_CV_2026.pdf).",
          "Ajoutez la langue en fin de nom si vous avez plusieurs versions linguistiques : Joel_Kabeya_CV_2026_FR.pdf.",
        ],
      },
      {
        title: 'Séparer le fichier envoyé du fichier de travail',
        actions: [
          "Créez dans « Audit carrière 2026 » : « 01_CV-maitre » (fichiers Word de travail) et « 02_Envoyes » (un sous-dossier par candidature).",
          "Dans « 02_Envoyes », le sous-dossier porte la date et l'organisation (2026-12-14_FSAC) ; le fichier à l'intérieur garde le nom générique.",
        ],
      },
      {
        title: 'Supprimer les versions parasites',
        actions: [
          "Supprimez ou archivez hors du dossier d'envoi les v1, v2, « final », « dernier » : un seul fichier par format dans le dossier d'envoi.",
        ],
      },
    ],
    example: {
      title: 'Arborescence de Joël',
      lines: [
        'Audit carrière 2026/01_CV-maitre/Kabeya_Joel_CV_travail.docx',
        'Audit carrière 2026/02_Envoyes/2026-12-14_FSAC/Joel_Kabeya_CV_2026.pdf',
        'Audit carrière 2026/02_Envoyes/2026-12-17_Agence-NO-B-Goma/Joel_Kabeya_CV_2026.docx',
        'Noms à ne plus jamais utiliser : cv_final_v3_dernier.docx, CV Joël (copie).pdf, nouveau CV ONG.docx',
      ],
    },
    result: "Deux fichiers au nom net et identique, rangés dans des dossiers datés, et un fichier de travail séparé. Quelqu'un qui reçoit votre pièce jointe sait immédiatement qui vous êtes et ce que c'est.",
    pitfall: "Mettre le nom de l'organisation visée dans le fichier envoyé (CV_FSAC.pdf) puis l'envoyer à une autre par oubli : l'erreur de pièce jointe est classique et éliminatoire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Choisir le format selon la plateforme de dépôt',
    intro: "Pourquoi : le guide est clair : PDF le plus souvent pour la lecture humaine finale, mais toujours vérifier les instructions de la plateforme. Certains portails onusiens (comme UN Talent) demandent explicitement le format Word, pour permettre leur propre extraction du texte. Entrée : le texte de l'offre et les consignes du portail.",
    steps: [
      {
        title: 'Lire les consignes de dépôt',
        actions: [
          "Dans l'offre, cherchez les mots « format », « CV », « Word », « PDF », « pièces jointes » et la taille maximale.",
          "Sur le portail, regardez la liste des formats acceptés avant de charger.",
        ],
      },
      {
        title: 'Choisir selon le canal',
        actions: [
          "Consigne explicite → suivez-la à la lettre.",
          "Candidature par courriel à une ONG, sans consigne → PDF (mise en page figée).",
          "Portail qui extrait automatiquement le contenu du CV pour pré-remplir des champs → Word si autorisé, PDF sinon.",
          "En cas de doute : PDF, et nommez-le correctement.",
        ],
      },
      {
        title: 'Vérifier après le chargement',
        actions: [
          "Si le portail pré-remplit des champs depuis votre CV, vérifiez chaque champ : dates, intitulés, organisations, langues.",
          "Corrigez dans le portail ce que l'extraction a mal lu : c'est le signe qu'un point de votre mise en page résiste encore.",
        ],
      },
    ],
    table: {
      columns: ['Canal', 'Format', 'Raison'],
      rows: [
        ['Courriel à une ONG internationale sans consigne', 'PDF', 'Mise en page figée, lecture humaine'],
        ['Portail onusien demandant Word (ex. UN Talent)', 'Word (.docx)', 'Extraction du texte par le portail'],
        ['Portail onusien sans consigne de format', 'PDF ou Word selon les formats acceptés', 'Suivre la liste du portail'],
        ['Formulaire de candidature en ligne d\'une ONG avec chargement de CV', 'PDF ou Word selon la liste', 'Ce que le portail accepte ; tester le pré-remplissage'],
        ['Offre qui précise un format', 'Celui demandé', 'La consigne prime sur toute règle générale'],
      ],
    },
    result: "Joël retient : PDF pour le courriel à FSAC (consigne : « CV et lettre en PDF ») ; Word pour le portail onusien. Il a vérifié les consignes avant de charger, pas après.",
    pitfall: "Charger un PDF sur un portail qui demande du Word, en supposant que ce sera accepté : le portail peut le refuser, ou l'extraire de façon dégradée sans vous prévenir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Adapter et exporter la version « ONG internationale »',
    intro: "Pourquoi : un CV adapté à l'offre se fait en 20 minutes à partir du CV maître : seules quelques zones changent, le reste reste identique, ce qui garantit la cohérence avec LinkedIn et l'entretien. Entrées : CV maître validé, grille de mots-clés de l'offre FSAC.",
    steps: [
      {
        title: 'Dupliquer le CV maître',
        actions: [
          "Dans « 01_CV-maitre », copiez « Kabeya_Joel_CV_travail.docx » et nommez la copie « Kabeya_Joel_CV_FSAC.docx ».",
          "Ne modifiez jamais le maître directement pour une candidature.",
        ],
      },
      {
        title: 'Adapter les 4 zones modifiables',
        actions: [
          "Ligne de titre : l'intitulé exact de l'offre (Responsable MEAL / MEAL Manager).",
          "Profil : la première phrase reprend le vocabulaire de l'offre (« dispositif MEAL », « programme santé-nutrition »).",
          "Compétences : placez en tête les termes cités dans l'offre.",
          "Phrases PAR : inversez l'ordre de 1 à 2 phrases pour que les plus proches de l'offre soient en premier.",
        ],
      },
      {
        title: 'Rejouer le contrôle puis exporter',
        actions: [
          "Refaites le test du collage sur la copie (3 minutes).",
          "Exportez en PDF sous le nom « Joel_Kabeya_CV_2026.pdf » dans « 02_Envoyes/2026-12-14_FSAC ».",
        ],
      },
    ],
    example: {
      title: 'Ce que Joël adapte pour FSAC (reste du CV inchangé)',
      lines: [
        'Titre : « Responsable MEAL (MEAL Manager) — Secteur Humanitaire & International » (inchangé : identique à l\'offre).',
        'Profil, phrase 1 : « …d\'un programme santé-nutrition de 4,6 M USD » conservé ; ajout de « dispositif MEAL » dans la phrase 3.',
        'Compétences : « redevabilité (AAP) » et « KoboToolbox / ODK » remontés en tête des lignes.',
        'Expérience ASGL : la phrase du mécanisme de plaintes est passée en 2e position, avant celle du budget.',
        'Contrôle : collage 8 sur 8 ; export « Joel_Kabeya_CV_2026.pdf » ; 2 pages.',
      ],
    },
    result: "Un PDF de 2 pages, prêt pour la candidature à FSAC (clôture le 15/01/2027), qui reprend les mots de l'offre sans en inventer un seul. Temps nécessaire : environ 20 minutes.",
    pitfall: "Réécrire le CV en profondeur pour chaque offre : vous perdriez la cohérence avec LinkedIn et vos phrases PAR. Adaptez 4 zones, pas 40 lignes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Adapter et déposer la version « portail onusien » (Word)',
    intro: "Pourquoi : un portail onusien demande généralement de saisir chaque poste dans un formulaire en ligne (employeur, intitulé, dates précises, description des fonctions) en plus du CV joint. L'ATS compare les deux : ils doivent dire exactement la même chose. Entrées : CV maître, grille onusienne (Procédure 4, étape 6), consignes du portail (Word).",
    steps: [
      {
        title: 'Préparer le Word',
        actions: [
          "Copiez le CV maître sous « Kabeya_Joel_CV_NO-B.docx ».",
          "Titre : « Administrateur national suivi-évaluation (NO-B) » si l'offre porte cet intitulé ; Profil : ajoutez « gestion axée sur les résultats (RBM) » et « renforcement des capacités » dans des phrases qui les prouvent.",
          "Gardez les critères minimaux visibles : master en santé publique, 7 ans d'expérience, nationalité congolaise si exigée.",
        ],
      },
      {
        title: 'Remplir le profil en ligne champ par champ',
        actions: [
          "Pour chaque poste, saisissez dans les champs du portail : employeur (nom complet), intitulé exact, dates précises, lieu, description.",
          "Pour la description, collez les phrases PAR du CV, en texte seul, sans étiquette.",
        ],
      },
      {
        title: 'Contrôler la cohérence',
        actions: [
          "Comparez ligne à ligne CV, portail et LinkedIn : mêmes intitulés, mêmes dates, mêmes chiffres.",
          "Enregistrez l'accusé de réception du portail dans « 02_Envoyes » avec le CV déposé.",
        ],
      },
    ],
    table: {
      columns: ['Champ du portail', 'Source dans le CV', 'Valeur pour Joël'],
      rows: [
        ['Employeur', 'Ligne 1 du poste', 'Alliance Santé Grands Lacs'],
        ['Intitulé du poste', 'Ligne 1 du poste', 'Superviseur MEAL'],
        ['Dates de début et de fin', 'Ligne de dates', 'Mars 2024 — en cours'],
        ['Lieu', 'Ligne 1 du poste', 'Goma, RDC'],
        ['Description des fonctions', 'Phrases PAR + périmètre', '4 phrases PAR collées en texte seul, périmètre en dernière ligne'],
        ['Langues', 'Section LANGUES', 'Français : courant ; anglais : B1 ; swahili : courant'],
        ['Formation', 'Section FORMATION', 'Master en santé publique, 2017 — 2019'],
      ],
    },
    result: "Un CV Word déposé et un profil en ligne rempli à l'identique : le portail n'a aucune contradiction à signaler. L'accusé de réception est archivé.",
    pitfall: "Saisir dans le portail des dates ou des intitulés différents de ceux du CV : le recruteur voit deux versions de votre parcours et se demande laquelle est vraie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Archiver, journaliser et planifier le point d’étape',
    intro: "Pourquoi : le module 01 a posé une règle : sous 10 % de réponse après 10 candidatures ciblées, revenez à votre positionnement avant d'en envoyer d'autres. Il faut donc savoir quelle version du CV est partie où. Entrées : fichiers envoyés, journal de candidatures du module 01.",
    steps: [
      {
        title: 'Archiver',
        actions: [
          "Rangez dans chaque dossier « 02_Envoyes/AAAA-MM-JJ_Organisation » : le CV envoyé, la lettre (module 03), l'accusé de réception, le texte de l'offre.",
          "Placez à la racine de « Audit carrière 2026 » : la grille PAR, la grille de mots-clés, les deux fichiers de collage.",
        ],
      },
      {
        title: 'Journaliser',
        actions: [
          "Dans votre journal de candidatures (module 01), ajoutez une colonne « Version CV » : ONG, NO-B ou autre.",
          "À chaque envoi, notez la date, la version, et la date de relance prévue (J+10 ouvrés).",
        ],
      },
      {
        title: 'Planifier',
        actions: [
          "Inscrivez dans l'agenda : relire le CV à chaque poste nouveau ou chiffre nouveau ; refaire le test du collage à chaque modification.",
          "Fixez le point d'étape après 10 candidatures prioritaires.",
        ],
      },
    ],
    example: {
      title: 'Journal et planning de Joël',
      lines: [
        '14/12/2026 — MEAL Manager — FSAC, Bunia — ONG — Version ONG — Relance le 29/12/2026.',
        '17/12/2026 — Administrateur national suivi-évaluation NO-B — agence onusienne, Goma — Version NO-B — suivi du portail.',
        'Cadence : 2 candidatures ciblées par semaine à partir du 14/12 (feuille de route, module 01).',
        'Point d\'étape : après la 10e candidature prioritaire ; si moins de 10 % de réponses, revenir au positionnement.',
        'Prochaine révision de la feuille de route : lundi 15/03/2027.',
      ],
    },
    result: "Joël sait quelle version du CV est partie où, quand relancer, et à quel moment il évaluera si son CV remplit son rôle. Son dossier « Audit carrière 2026 » contient maintenant 7 livrables du module 02.",
    tip: "Mettez à jour le CV maître dès qu'une réalisation nouvelle est chiffrée (budget 2027 co-construit, tableau de bord Power BI livré) : c'est ce que votre plan d'action du module 01 prévoit de produire d'ici mars 2027.",
  },

  // ────────────────────── CAS RÉSOLU DE BOUT EN BOUT ──────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/6) — Joël : le raisonnement, du diagnostic à l’envoi',
    scenario: "Joël Kabeya, Superviseur MEAL, 7 ans d'expérience, 31 candidatures en 5 mois, 1 entretien pour un poste inférieur à son niveau. Il pense que son CV est « joli mais trop générique » et envisage de le refaire dans un nouveau modèle graphique, plus moderne, en deux colonnes.",
    steps: [
      { title: 'Constat chiffré (Procédure 1)', body: "Le test de collage révèle un CV illisible pour la machine : coordonnées absentes, compétences intercalées dans le poste, dates séparées. Défauts relevés : 2 bloquants, 3 graves, 3 à corriger. Le test des 90 secondes (module 01) n'avait retenu aucun chiffre." },
      { title: 'Hypothèse', body: "Le problème n'est pas le design ni l'expérience : c'est la structure (la machine lit mal) et le contenu (tâches sans résultat). Un nouveau modèle graphique aurait aggravé le premier et laissé intact le second." },
      { title: 'Vérification (Procédures 2 et 3)', body: "Reconstruit dans le gabarit à une colonne, avec 9 phrases PAR chiffrées, toutes appuyées sur une pièce. Aucun chiffre n'est inventé : deux estimations sont reconstituées avec leur méthode." },
      { title: 'Ciblage (Procédures 4 et 5)', body: "Grille de mots-clés sur 3 offres : 12 termes, dont 6 centraux ; 5 synonymes à doubler, 2 termes à injecter, 1 écart assumé (anglais). Le Profil et les compétences sont réécrits autour de ces termes." },
      { title: 'Contrôle et envoi (Procédures 6 et 7)', body: "Collage à 8 sur 8 sur le Word puis sur le PDF, 2 pages, 820 mots. Deux versions : PDF pour FSAC, Word pour le portail onusien NO-B. Première candidature le 14/12/2026." },
    ],
    result: "Le « nouveau modèle moderne » envisagé aurait coûté une semaine de plus et laissé le CV illisible pour la machine. La reconstruction a pris environ 11 heures, sans une seule journée d'expérience supplémentaire.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/6) — La grille PAR de Joël : colonnes A, B et D',
    scenario: "Lignes 8 à 16 de l'onglet « Transformation PAR », après passage des 5 tests de contrôle. Les colonnes C et E (action et phrase finale) sont détaillées aux deux diapositives suivantes.",
    steps: [],
    table: {
      columns: ['Ligne', 'A — Tâche d\'origine', 'B — Problème', 'D — Résultat (preuve)'],
      rows: [
        ['8', 'Gestion de l\'équipe d\'enquêteurs et production des rapports mensuels', 'Rapports mensuels des 3 provinces souvent hors délai', '30 rapports sur 30 dans les délais (registre)'],
        ['9', 'Suivi du budget MEAL', 'Budget 2025 de 120 000 USD exposé aux dépassements', '96 % exécuté, 0 dépassement de ligne (suivi budgétaire)'],
        ['10', 'Responsable du mécanisme de plaintes', 'Retours traités au cas par cas, 19 jours', '1 340 retours en 12 mois ; 19 → 7 jours (tableau de suivi)'],
        ['11', 'Contrôle qualité des enquêtes', '9 % de doublons, coordinateur absent', 'Doublons < 1 % ; aucune donnée erronée au bailleur (note interne)'],
        ['12', 'Élaboration du cadre de suivi du projet WASH', '3 bailleurs, indicateurs et formats différents', '32 indicateurs, 30 mois sans révision majeure (cadre validé)'],
        ['13', 'Organisation de l\'enquête de référence', 'Baseline attendue à date ferme, 8 semaines prévues', '1 150 ménages en 6 semaines, 12 enquêteurs (rapport)'],
        ['14', 'Rédaction des rapports aux bailleurs', 'Rapports hérités renvoyés pour correction par 2 bailleurs sur 3', '10 rapports acceptés sans correction de fond (courriels)'],
        ['15', 'Numérisation du suivi des ménages', 'Saisie papier, 21 jours de transmission', '21 → 4 jours, −80 % (rapport T4 2020)'],
        ['16', 'Formation des relais communautaires', 'Erreurs de saisie de 14 %', '14 % → 5 %, −9 points en 3 mois (fiches, rapport qualité)'],
      ],
    },
    result: "9 lignes complètes : chaque Problème est un fait, chaque résultat est chiffré et adossé à une pièce. Le poste ASGL (le plus récent) compte 4 lignes, dont 3 managériales ; les deux postes précédents, 3 et 2.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/6) — Les 9 phrases finales (colonne E) de Joël',
    scenario: "Les phrases prêtes à copier dans le CV, par poste, structure d'ouverture variée.",
    steps: [],
    example: {
      title: 'Colonne E — lignes 8 à 16 (Superviseur MEAL, puis Chargé de S&E, puis Assistant S&E)',
      lines: [
        'E8 : Face à des rapports mensuels souvent livrés hors délai, j\'ai supervisé une équipe de 6 personnes avec un calendrier commun aux 3 provinces : 30 rapports mensuels sur 30 livrés dans les délais (programme santé-nutrition de 4,6 M USD).',
        'E9 : Pour maintenir le budget MEAL 2025 de 120 000 USD sous contrôle, j\'ai instauré un suivi mensuel par ligne avec la finance et arbitré deux reports d\'activités : 96 % exécuté, sans dépassement de ligne.',
        'E10 : Face à des retours communautaires traités au cas par cas (19 jours de délai), j\'ai mis en place une ligne verte et des boîtes à suggestions (AAP) : 1 340 retours traités en 12 mois, délai ramené à 7 jours.',
        'E11 : Lors d\'une enquête nutritionnelle affichant 9 % de doublons, en l\'absence du coordinateur, j\'ai décidé de suspendre la collecte et de réorganiser les contrôles qualité des données : doublons sous 1 %, aucune donnée erronée transmise au bailleur.',
        'E12 : Pour répondre aux exigences distinctes de 3 bailleurs sur un projet WASH de 1,8 M USD, j\'ai conçu un cadre de mesure unique (cadre logique, 32 indicateurs, gestion axée sur les résultats), utilisé 30 mois sans révision majeure.',
        'E13 : Pour tenir le calendrier de démarrage du projet, j\'ai piloté l\'enquête de référence (baseline) de 1 150 ménages dans 2 zones de santé, en coordonnant 12 enquêteurs temporaires : livrée en 6 semaines au lieu de 8.',
        'E14 : Face à des rapports renvoyés pour correction par les bailleurs, j\'ai standardisé le gabarit de rapport et instauré une relecture croisée : 10 rapports trimestriels consécutifs acceptés sans correction de fond.',
        'E15 : Pour réduire un délai de transmission des données de 21 jours, dû à la saisie papier, j\'ai numérisé le suivi de 4 200 ménages avec des formulaires KoboToolbox : délai ramené à 4 jours (−80 %).',
        'E16 : Face à un taux d\'erreur de saisie de 14 %, j\'ai formé 18 relais communautaires à la collecte de données en 6 sessions : taux ramené à 5 % en 3 mois (−9 points).',
      ],
    },
    result: "Les 9 phrases contiennent chacune un Problème, une action à la première personne et un résultat chiffré. Les termes de l'offre (AAP, cadre logique, qualité des données, baseline, KoboToolbox) apparaissent là où ils sont prouvés.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/6) — Grille de mots-clés finale de Joël (offre FSAC)',
    scenario: "Les 12 termes de l'offre, la forme retenue dans le CV et l'emplacement. Les écarts assumés sont indiqués.",
    steps: [],
    table: {
      columns: ['Terme de l\'offre', 'Forme retenue dans le CV', 'Emplacement', 'Statut'],
      rows: [
        ['MEAL', 'Suivi-évaluation (MEAL)', 'Titre, Profil, Compétences', 'Intégré'],
        ['Encadrement d\'équipe', 'Encadrement d\'équipe (6 personnes)', 'Profil, E8, Compétences, périmètre', 'Intégré'],
        ['KoboToolbox / ODK', 'KoboToolbox / ODK', 'E15, Compétences', 'Intégré'],
        ['Cadre logique, plan MEAL, indicateurs', 'Cadre de mesure (cadre logique, 32 indicateurs)', 'E12, Compétences', 'Intégré'],
        ['Rapports bailleurs', 'Rapports bailleurs', 'E14, Compétences', 'Exact déjà'],
        ['Redevabilité (AAP)', 'Redevabilité (AAP), mécanisme de plaintes et retours', 'E10, Profil, Compétences', 'Intégré'],
        ['Gestion budgétaire', 'Budget MEAL de 120 000 USD, 96 % exécuté', 'E9, Profil, Compétences', 'Niveau réel : pilotage, pas construction'],
        ['Baseline / endline', 'Enquête de référence (baseline)', 'E13, Compétences', 'Intégré'],
        ['Qualité des données', 'Contrôles qualité des données', 'E11, Compétences', 'Intégré'],
        ['Power BI', 'Power BI (tableaux de bord de suivi)', 'Compétences', 'Niveau réel : tableaux simples'],
        ['Master en santé publique', 'Master en Santé Publique', 'FORMATION', 'Exact déjà'],
        ['Anglais courant', 'Anglais — Intermédiaire (B1)', 'LANGUES', 'Non possédé : jamais écrit « courant »'],
      ],
    },
    result: "9 termes intégrés, 2 écrits à leur niveau réel, 1 écart assumé. Joël ne perd pas de points par mensonge, il les perd par écart de niveau — et il le sait avant l'entretien.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/6) — Le CV final de Joël, page 1',
    scenario: "En-tête, Profil et poste actuel. Une seule colonne, aucun tableau, aucune image. Toutes les informations sont du texte réel.",
    steps: [],
    example: {
      title: 'Kabeya_Joel_CV_travail.docx → Joel_Kabeya_CV_2026.pdf (page 1, condensée)',
      lines: [
        'JOËL KABEYA',
        'Responsable MEAL (MEAL Manager) — Secteur Humanitaire & International',
        'Goma, RDC  |  +243 000 000 000  |  joel.kabeya@email.com  |  linkedin.com/in/joelkabeya',
        'PROFIL',
        'Professionnel du suivi-évaluation (MEAL) avec 7 ans d\'expérience en ONG nationales et internationales, dont plus de 2 ans d\'encadrement d\'équipe en tant que Superviseur MEAL d\'un programme santé-nutrition de 4,6 M USD. Expertise en cadres logiques et plans de suivi, KoboToolbox/ODK, redevabilité envers les populations affectées (AAP) et rapports bailleurs. Recherche un poste de Responsable MEAL (MEAL Manager) en ONG internationale dans la région des Grands Lacs, avec une capacité démontrée à piloter un budget MEAL (120 000 USD exécutés à 96 %) et à transformer des données en décisions.',
        'EXPÉRIENCE PROFESSIONNELLE',
        'Superviseur MEAL  —  Alliance Santé Grands Lacs (ONG internationale), Goma, RDC',
        'Mars 2024 — Aujourd\'hui',
        '[E8] [E10] [E9] [E11]  (4 phrases PAR, la plus proche de l\'offre en premier)',
        'Équipe de 6 personnes (5 enquêteurs, 1 assistant data) ; budget MEAL de 120 000 USD ; rattaché au coordinateur programme ; 3 provinces.',
      ],
    },
    result: "Le recruteur voit sur une même page : le poste visé, le niveau (7 ans, encadrement), 5 mots-clés centraux et 4 résultats prouvés — en moins de 90 secondes.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (6/6) — Le CV final de Joël, page 2, et le bilan des tests',
    scenario: "Postes précédents, formation, compétences, langues ; puis les résultats des tests de la Procédure 6.",
    steps: [],
    example: {
      title: 'Page 2 (condensée) et rapport de vérification du 10/12/2026',
      lines: [
        'Chargé de suivi-évaluation  —  Horizons Solidaires International (ONG internationale), Goma, RDC  |  Juillet 2021 — Février 2024',
        '[E12] [E13] [E14]  +  Projet WASH de 1,8 M USD financé par 3 bailleurs ; 12 enquêteurs temporaires coordonnés ; 2 zones de santé.',
        'Assistant suivi-évaluation  —  Action Communautaire Kivu (ONG nationale), Goma, RDC  |  Septembre 2019 — Juin 2021',
        '[E15] [E16]  +  Projet de sécurité alimentaire, 4 200 ménages suivis ; 18 relais communautaires formés.',
        'FORMATION : Master en Santé Publique — Institut Universitaire de Santé Publique du Kivu, Goma, 2017 — 2019 ; Redevabilité (AAP) — formation interne ASGL, 2025.',
        'COMPÉTENCES : 5 lignes (MEAL ; collecte et analyse de données ; redevabilité (AAP) ; management ; rapports et coordination).',
        'LANGUES : Français — Courant | Anglais — Intermédiaire (B1) | Swahili — Courant.',
        '--- Bilan : collage Word 8/8 · collage PDF 8/8 · 2 pages, 820 mots · 11 mots-clés sur 12 · test des 90 secondes : poste, niveau et 3 chiffres retenus.',
      ],
    },
    result: "Résultat attendu à la clôture (exemple fictif) : après 10 candidatures prioritaires avec ce CV, 3 réponses favorables, soit 30 % contre 3,2 % avant le travail — avec exactement la même expérience.",
  },

  // ─────────────────────────────── EXERCICES ───────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice noté 1 — La grille PAR et le CV reconstruit d’Aline',
    instructions: "Mettez-vous à la place d'un consultant qui reconstruit le CV d'Aline (cas vécu présenté en début de module). Suivez les Procédures 2 et 3 exactement comme pour Joël, avec les 4 lignes d'Aline : « Responsable de la logistique du bureau », « En charge des achats pour les activités du programme », « Gestion administrative du personnel local », « Organisation des déplacements de l'équipe et des missions terrain ».",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Enregistrez une copie de la grille nommée « ALINE_grille-PAR.xlsx » et une copie du gabarit nommée « ALINE_CV.docx ».",
          "Définissez le profil d'Aline : 6 ans d'expérience en administration et logistique dans deux ONG nationales, visant un poste de Coordinatrice Administrative et Logistique en ONG internationale ; inventez un intitulé de poste plausible et une ancienneté pour chacun des deux postes.",
        ],
      },
      {
        title: 'Grille PAR — 4 lignes complètes (colonnes A à E)',
        actions: [
          "Saisissez les 4 tâches telles quelles en A8 à A11. Les 3 premières sont déjà modélisées en lignes 5 à 7 de la grille pour un profil logistique : n'en recopiez pas la solution, personnalisez Problème, Action et chiffres pour qu'ils collent au profil d'Aline que vous avez inventé. La 4e (déplacements) est à bâtir entièrement.",
          "Pour chaque ligne, identifiez un Problème plausible et réaliste, l'Action menée à la première personne, et un Résultat quantifié honnête (volume, délai, nombre de collaborateurs), avec une estimation raisonnable si nécessaire, notée en colonne D comme « hypothèse d'exercice ».",
          "Rédigez la phrase finale PAR en colonne E, entre 25 et 40 mots, avec des structures d'ouverture variées.",
        ],
      },
      {
        title: 'Reconstruction du CV dans le gabarit',
        actions: [
          "Remplacez le nom, le titre professionnel et la ligne de contact.",
          "Intégrez vos 4 phrases PAR dans la section EXPÉRIENCE PROFESSIONNELLE, avec un intitulé et des dates en mois et année pour chaque poste.",
          "Complétez PROFIL, FORMATION, COMPÉTENCES et LANGUES avec un contenu cohérent, sans jauge, sans tableau, sans image. Supprimez toutes les notes du gabarit.",
        ],
      },
      {
        title: 'Vérification du parsing — 3 à 4 phrases',
        actions: [
          "Décrivez comment vous vérifieriez que ce document est lisible par un ATS : méthode du collage en texte brut sur le Word puis sur le PDF, ce que vous contrôlez (nom, contact, ordre des sections, phrases entières).",
          "Précisez ce que vous vérifieriez en priorité si le collage révélait un problème : l'en-tête, les colonnes, les zones de texte, la police.",
        ],
      },
    ],
    tip: "Pour amorcer la ligne 4 : problème = déplacements organisés au dernier moment, avec des coûts d'urgence ; action = calendrier mensuel partagé des déplacements et procédure de demande à 5 jours ; résultat = délai et nombre de missions organisées par mois (estimation honnête).",
    pitfall: "Écrire un résultat que le profil d'Aline ne rend pas plausible (« 100 % de satisfaction ») ou lister des adjectifs (« organisée, rigoureuse ») à la place de preuves. Chaque phrase doit contenir un chiffre ou une estimation défendable.",
    deliverable: 'La grille PAR complétée (4 lignes) et le CV reconstruit dans le gabarit, sur 2 pages maximum, accompagnés de 3 à 4 phrases décrivant la vérification du parsing.',
  },
  {
    type: 'checklist',
    title: 'Votre livrable « Aline » est correct si…',
    items: [
      "Chaque ligne de la grille a un Problème, une Action à la première personne et un Résultat chiffré, et la phrase finale de la colonne E fait entre 25 et 40 mots.",
      "Aucune phrase PAR ne commence par « En charge de », « Responsable de » ou « Participation à ».",
      "Les estimations sont signalées comme hypothèses d'exercice en colonne D et restent plausibles pour un profil de coordination administrative et logistique de 6 ans.",
      "Le CV est en une seule colonne, sans tableau, sans image, sans coordonnées dans l'en-tête, et les notes du gabarit ont été supprimées.",
      "Les titres de section standards (PROFIL, EXPÉRIENCE PROFESSIONNELLE, FORMATION, COMPÉTENCES, LANGUES) sont conservés, dans l'ordre.",
      "Chaque poste a un intitulé et des dates avec mois et année ; aucun exemple du gabarit (Alpha, Beta, SAP) ne subsiste.",
      "La vérification du parsing décrit le collage en texte brut et cite ce qu'on contrôle en priorité (contacts, ordre, phrases entières).",
      "Le CV tient en 2 pages maximum.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice d'application — Votre propre CV, en 2 semaines",
    instructions: "Appliquez maintenant les 7 procédures à votre propre CV. Bloquez les créneaux dans votre agenda dès aujourd'hui ; chaque jour de travail produit un livrable précis. Utilisez vos réalisations du module 01 comme point de départ de la grille PAR.",
    steps: [
      { title: 'Jour 1 (1 h 30) — Procédure 1', actions: ['Test du collage sur votre CV actuel, tableau des défauts, fichier de contenu brut, dates et intitulés vérifiés, niveaux de langue honnêtes.'] },
      { title: 'Jour 2 (1 h 30) — Procédure 2', actions: ['Copie du gabarit, nom, titre, contact, titres standards, squelette de la rubrique Expérience, sections Formation, Compétences et Langues, mise en forme sûre.'] },
      { title: 'Jours 3 et 4 (3 h) — Procédure 3', actions: ['Grille PAR de 8 à 12 lignes : colonnes A à E, chiffres calculés et justifiés, 5 tests de contrôle.'] },
      { title: 'Jour 5 (1 h 30) — Procédure 4', actions: ['3 offres cibles, relevé et comptage de 12 à 15 termes, comparaison avec votre CV, règle des trois cas, placement des mots-clés ; grille onusienne si besoin.'] },
      { title: 'Jour 6 (1 h 30) — Procédure 5', actions: ['Phrases PAR copiées dans le gabarit, Profil, Compétences, Langues, notes supprimées, 2 pages.'] },
      { title: 'Jour 7 (45 min) — Procédure 6', actions: ['Test du collage Word et PDF, correction des écarts, longueur, mots-clés, test des 90 secondes avec un tiers.'] },
      { title: 'Jour 8 (1 h 15) — Procédure 7', actions: ['Nom du fichier, format par plateforme, version ONG, version onusienne si pertinente, archivage, journal de candidatures.'] },
    ],
    deliverable: "Votre dossier « CV » contenant : diagnostic et fichier de collage, contenu brut, grille PAR complétée, grille de mots-clés, CV Word et PDF de 2 pages maximum validés par le test du collage, et journal de candidatures mis à jour.",
  },
  {
    type: 'checklist',
    title: 'Votre CV personnel est correct si…',
    items: [
      "Vous savez expliquer, avec vos propres mots, pourquoi un ATS peut rejeter un CV visuellement réussi.",
      "Le collage de votre CV en texte brut donne un texte complet, dans le bon ordre, avec coordonnées, sections et phrases entières, sur le Word comme sur le PDF.",
      "Votre CV est en une seule colonne, sans tableau, sans image de compétence, sans en-tête ni pied de page contenant une information essentielle.",
      "Vos 3 expériences les plus récentes sont reformulées en PAR, chacune avec un chiffre ou une estimation honnête que vous savez justifier.",
      "Chaque chiffre est adossé à une pièce ou à un témoin, et aucun résultat n'est inventé.",
      "Votre CV utilise le vocabulaire exact de votre secteur cible, sans mot-clé inventé ou infondé, et vos écarts de niveau (langues, outils) sont écrits à leur niveau réel.",
      "Chaque poste a un intitulé, une organisation, un lieu et des dates avec mois et année ; votre CV, votre LinkedIn et votre profil de portail disent la même chose.",
      "Votre CV tient sur 2 pages (3 maximum pour un parcours très riche) et vous avez complété la grille PAR et reconstruit le CV avec le gabarit fourni.",
      "Le fichier envoyé porte un nom professionnel (Prenom_Nom_CV_2026), dans le format demandé par la plateforme.",
    ],
  },

  // ─────────────────────── PIÈGES, BILAN, SUITE ───────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Le CV en tableau ou en colonnes multiples, joli pour un humain, invisible pour une machine — un design jamais testé au collage en texte brut peut échouer avant d'être lu. Parade : une colonne, et le test de la Procédure 6.",
      "Les coordonnées placées dans l'en-tête ou le pied de page, ou remplacées par des icônes — invisibles pour beaucoup d'ATS, donc impossible de vous rappeler. Parade : ligne de contact en texte, sous le titre.",
      "Copier-coller la fiche de poste officielle au lieu de décrire ses propres réalisations — cela ne dit rien de ce que vous avez accompli et se reconnaît immédiatement. Parade : une phrase PAR par réalisation, issue de la grille.",
      "Le CV de 4-5 pages qui dilue l'essentiel — un recruteur qui traite 200 candidatures cherche la correspondance la plus rapide. Parade : 2 pages, 3 maximum, en coupant le contenu plutôt qu'en réduisant la police.",
      "Des dates d'emploi incomplètes ou incohérentes (« 2019-2021 » sans mois) — elles créent un doute immédiat. Parade : mois et année partout, vérifiés sur les contrats.",
      "Utiliser des adjectifs à la place de preuves (« excellent sens de l'organisation ») — ignorés par les recruteurs expérimentés. Parade : une réalisation PAR chiffrée démontre ces mêmes qualités sans les nommer.",
      "Ajouter un mot-clé que l'on ne possède pas, ou écrire « anglais courant » en étant B1 — l'entretien commence par ce point. Parade : la règle des trois cas ; l'écart va dans la feuille de route.",
      "Gonfler un chiffre ou s'attribuer le résultat d'une équipe — découvert à la vérification des références, il élimine la candidature. Parade : un chiffre = une pièce ou un témoin ; arrondi à la baisse.",
      "Tester le CV seulement à l'écran, ou tester le Word mais envoyer un PDF — l'ordre de lecture n'est pas celui de l'écran. Parade : collage sur le fichier réellement envoyé, après chaque modification.",
      "Envoyer « cv_final_v3_dernier.docx », ou la mauvaise version pour la mauvaise organisation — Parade : nom générique, dossier daté par candidature, journal des versions.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez diagnostiqué votre CV actuel avec le test du collage, listé ce qui casse le parsing et classé les défauts par gravité.",
      "Vous avez isolé votre contenu brut, daté en mois et année, avec des intitulés vérifiés et des niveaux de langue honnêtes.",
      "Vous avez reconstruit votre CV dans le gabarit ATS-safe : une colonne, titres de section standards, coordonnées dans le corps, mise en forme sûre.",
      "Vous avez complété la grille de transformation PAR : 8 à 12 lignes avec Problème, Action, Résultat chiffré et phrase finale, chacune prouvée.",
      "Vous avez relevé et compté les mots-clés de 3 offres, appliqué la règle des trois cas et placé les mots-clés dans le Profil, l'Expérience et les Compétences.",
      "Vous avez assemblé un CV de 2 pages maximum, vérifié par le test du copier-coller sur le Word et sur le PDF, et par le test des 90 secondes.",
      "Vous avez exporté deux versions nommées et archivées, adaptées au format de chaque plateforme, et journalisé vos envois.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer, avec mes propres mots, pourquoi un ATS peut rejeter un CV visuellement réussi.",
      "Je sais tester le parsing de mon propre CV avec la méthode du copier-coller en texte brut, sur le Word comme sur le PDF.",
      "Mon CV est en une seule colonne, sans tableau, sans image de compétence, sans en-tête graphique contenant des informations essentielles.",
      "J'ai reformulé au moins mes 3 expériences les plus récentes selon la méthode PAR, avec un chiffre ou une estimation honnête pour chacune.",
      "Mon CV utilise le vocabulaire sectoriel exact de mon secteur cible, sans mot-clé inventé ou infondé.",
      "Mon CV tient sur 2 pages (3 maximum pour un parcours très riche).",
      "J'ai complété la grille de transformation PAR et reconstruit mon CV avec le gabarit fourni.",
      "J'ai mon CV maître, mes phrases PAR (colonne E) et ma grille de mots-clés sous la main : ce sont les entrées directes du module 03.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 03 — Lettre de Motivation Percutante : vous y réutiliserez vos phrases PAR, vos mots-clés et votre CV de 2 pages pour construire une lettre en 3 paragraphes (accroche, valeur, appel à l'action), personnalisée par organisation et par poste, qui prolonge le CV au lieu de le répéter.",
  },
]
