// Module 02 — CV aux Normes ATS Internationales
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'CV aux Normes ATS Internationales',
    hook: "Votre CV peut être excellent et pourtant ne jamais atteindre un humain, parce qu'un logiciel de tri l'a mal lu avant même qu'un recruteur y jette un œil. Ce module vous apprend à construire un CV que la machine ET l'humain liront correctement, et à transformer chaque ligne de votre parcours en résultat qui convainc.",
  },
  {
    type: 'objectives',
    items: [
      "Structurer un CV réellement lisible par un système ATS (Applicant Tracking System — le logiciel qui trie automatiquement les candidatures avant qu'un recruteur ne les voie), sans perdre une seule ligne d'information au moment du scan.",
      "Expliquer concrètement pourquoi un CV visuellement réussi peut être rejeté avant même d'être vu par un humain.",
      'Appliquer la méthode PAR (Problème → Action → Résultat) pour transformer chaque ligne d\'expérience en réalisation mesurable.',
      'Reformuler une description de poste vague en résultat chiffré, même quand vous ne disposez que d\'estimations honnêtes.',
      'Produire un CV complet, au format attendu par les organisations onusiennes et les grandes ONG, prêt à être déposé sur n\'importe quelle plateforme de candidature.',
    ],
  },
  {
    type: 'concept',
    title: "Ce qu'un ATS fait réellement de votre CV",
    body: [
      "Un ATS est un logiciel utilisé par la quasi-totalité des grandes organisations pour trier automatiquement le volume de candidatures reçu avant qu'un recruteur humain n'en voie une seule. Le fonctionnement est mécanique, pas intelligent : le système extrait le texte brut de votre fichier dans l'ordre où il le rencontre techniquement dans le code du document — pas dans l'ordre où vous le voyez à l'écran.",
      "Il recherche ensuite des mots-clés définis par le recruteur ou générés depuis l'offre d'emploi, et attribue un score de correspondance. Seuls les CV au-dessus d'un certain score remontent jusqu'à l'humain.",
    ],
    highlight: "Un CV ATS-safe n'est pas nécessairement un CV terne : c'est un CV dont la structure logicielle est simple, même si sa présentation visuelle reste soignée et professionnelle.",
  },
  {
    type: 'warning',
    title: 'Ce qui casse le parsing (la lecture automatique) de votre CV',
    items: [
      "Les tableaux et colonnes multiples — un CV en deux colonnes est souvent lu en mélangeant les deux colonnes ligne par ligne, produisant un charabia illisible pour la machine.",
      "Les en-têtes et pieds de page graphiques — beaucoup d'ATS n'analysent pas leur contenu. Des coordonnées placées en en-tête peuvent devenir invisibles pour le système.",
      "Les images et graphiques de compétences (barres de progression, jauges, icônes) — le système ne \"voit\" pas une image ; une jauge \"Excel : 90 %\" équivaut à une case vide.",
      "Les polices non standards, les zones de texte flottantes et les PDF exportés depuis un design graphique complexe sans vérification du texte réellement extractible.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '2 pages',
    caption: 'La longueur à viser pour un CV, 3 pages maximum pour un parcours très riche.',
    context: "Un recruteur qui filtre des centaines de candidatures ne lira jamais une quatrième page, quelle que soit la qualité du contenu qui s'y trouve.",
  },
  {
    type: 'concept',
    title: "Les mots-clés : ce que l'ATS cherche vraiment",
    body: [
      "Un ATS bien configuré ne cherche pas seulement l'intitulé exact du poste visé : il cherche un ensemble de termes sectoriels qui, mis bout à bout, dessinent le profil recherché — acronymes du secteur, certifications reconnues, compétences techniques nommées précisément, langues avec leur niveau, intitulés de poste standards.",
      "Conséquence pratique : votre CV doit reprendre, quand c'est honnête et exact, le vocabulaire précis de l'offre d'emploi — pas des synonymes plus élégants à vos yeux mais absents du champ lexical recherché par la machine.",
    ],
  },
  {
    type: 'process',
    title: 'La méthode PAR : Problème → Action → Résultat',
    steps: [
      { title: 'Problème', body: 'Quelle était la situation ou la difficulté de départ ? Un manque, un retard, un risque, un besoin non couvert.' },
      { title: 'Action', body: "Qu'avez-vous fait concrètement, vous, personnellement — pas votre équipe ou votre organisation en général ?" },
      { title: 'Résultat', body: "Quel a été l'impact mesurable de cette action ? Un chiffre, un pourcentage, un délai réduit, un budget respecté, un volume traité." },
    ],
  },
  {
    type: 'concept',
    title: 'PAR en pratique — un exemple avant/après',
    body: [
      'Avant (description de tâche) : "Responsable des achats et de la gestion des fournisseurs."',
      'Après (PAR) : "Face à des délais de livraison fournisseurs dépassant régulièrement 3 semaines, j\'ai renégocié les contrats-cadres avec les 5 principaux fournisseurs et mis en place un suivi hebdomadaire, réduisant le délai moyen à 9 jours et évitant 2 ruptures de stock critique."',
    ],
    highlight: "Une estimation raisonnable et défendable en entretien (\"environ 30 bénéficiaires par jour\") vaut infiniment mieux qu'une phrase sans chiffre. Ce qui est interdit, c'est d'inventer un résultat que vous ne pourriez pas justifier si un recruteur vous demandait \"comment avez-vous mesuré ça ?\"",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'ATS (Applicant Tracking System)', definition: 'Logiciel de tri automatique des candidatures par extraction de texte et recherche de mots-clés, utilisé en amont de la lecture humaine.' },
      { term: 'Parsing', definition: "L'action, pour l'ATS, d'extraire et de structurer le texte d'un document — un CV \"mal parsé\" est un CV dont le contenu est déformé ou perdu lors de cette extraction." },
      { term: 'Méthode PAR', definition: 'Problème → Action → Résultat, la structure à utiliser pour chaque ligne d\'expérience professionnelle sur un CV international.' },
      { term: 'CV ATS-safe', definition: "Un CV dont la structure technique (une colonne, sans tableaux, images ou en-têtes graphiques) garantit une extraction fidèle du texte par n'importe quel système de tri automatique." },
    ],
  },
  {
    type: 'process',
    title: 'Reconstruire votre CV au format ATS-safe',
    steps: [
      { title: 'Isoler le contenu brut de votre CV actuel', body: 'Listez dans un document texte simple chaque information : coordonnées, postes, dates, diplômes, compétences, langues — séparez le contenu de sa présentation actuelle.' },
      { title: 'Reconstruire la structure dans le gabarit ATS-safe', body: "Respectez l'ordre des sections standards de gabarit-cv-ats-international.docx (Profil, Expérience, Formation, Compétences, Langues), sans renommer les titres de section." },
      { title: 'Remplir chaque ligne avec la grille de transformation PAR', body: 'Pour chaque poste, remplissez grille-transformation-par-realisations.xlsx : tâche originale, Problème, Action, Résultat quantifié, puis la phrase finale prête à copier.' },
      { title: 'Injecter les mots-clés sectoriels pertinents et exacts', body: "Reprenez les termes techniques répétés dans l'offre visée et vérifiez qu'ils apparaissent dans votre CV — sans jamais ajouter un mot-clé qui ne correspond à aucune réalité de votre parcours." },
      { title: 'Vérifier le parsing avant tout envoi', body: 'Sélectionnez tout le texte de votre CV, copiez-le, collez-le dans un bloc-notes texte brut : s\'il reste complet, dans le bon ordre et lisible, le parsing est correct.' },
      { title: 'Adapter le nom de fichier et le format d\'export', body: 'Enregistrez avec un nom professionnel ("Prénom_Nom_CV_2026.docx") et vérifiez le format demandé par la plateforme — PDF le plus souvent, parfois Word pour certains portails onusiens.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le CV d\'Aline, 6 ans d\'expérience, zéro réponse depuis 8 mois"',
    scenario: "Aline postule depuis 8 mois à des postes de Coordinatrice Administrative et Logistique, sans obtenir un seul entretien. Son CV, 4 pages en deux colonnes avec photo et frise chronologique graphique, décrit des tâches (\"Responsable de la logistique du bureau\") jamais des résultats.",
    steps: [
      "En collant le texte de son CV dans un bloc-notes, les deux colonnes se mélangent complètement — le document devient illisible pour un système de tri automatique.",
      "Sa photo et sa frise chronologique, en image, sont totalement invisibles pour l'ATS.",
      'Chaque ligne de tâche doit être reconstruite en PAR, avec un Problème, une Action et un Résultat quantifié même estimé.',
      'La mission consiste à reconstruire intégralement son profil pour le rendre à la fois ATS-safe et impactant.',
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents à éviter',
    items: [
      "Le CV en tableau ou colonnes multiples, joli pour un humain, invisible pour une machine — un design qui n'a jamais été testé au collage en texte brut peut échouer avant même d'être lu.",
      "Copier-coller la fiche de poste officielle au lieu de décrire ses propres réalisations — cela ne dit rien de ce que VOUS avez concrètement accompli.",
      'Le CV de 4-5 pages qui dilue l\'essentiel — un recruteur qui traite 200 candidatures cherche la correspondance la plus rapide possible.',
      'Des dates d\'emploi incomplètes ou incohérentes ("2019-2021" sans les mois) qui créent un doute immédiat chez le recruteur.',
      'Utiliser des adjectifs à la place de preuves ("excellent sens de l\'organisation") : ignorés par la quasi-totalité des recruteurs expérimentés, faute de preuve.',
    ],
  },
  {
    type: 'exercise',
    title: 'Transformation PAR et reconstruction du CV',
    instructions: "Pour les 4 lignes de tâches d'Aline, complétez grille-transformation-par-realisations.xlsx (Problème, Action, Résultat estimé honnêtement) et rédigez la phrase PAR finale. Intégrez ensuite ces 4 phrases dans gabarit-cv-ats-international.docx, avec un intitulé de poste plausible, et complétez les sections Profil, Formation, Compétences et Langues. Décrivez enfin en 3-4 phrases comment vous vérifieriez le parsing de ce nouveau document avant de le soumettre.",
    deliverable: 'La grille PAR complétée (4 lignes) et le CV reconstruit, sur 2 pages maximum.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi un ATS peut rejeter un CV visuellement réussi.",
      'Je sais tester le parsing de mon CV avec la méthode du copier-coller en texte brut.',
      "Mon CV est en une seule colonne, sans tableau, sans image de compétence, sans en-tête graphique contenant des informations essentielles.",
      "J'ai reformulé mes expériences les plus récentes selon la méthode PAR, avec un chiffre ou une estimation honnête.",
      'Mon CV utilise le vocabulaire sectoriel exact de mon secteur cible et tient sur 2 pages (3 maximum).',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 03 — Lettre de Motivation Percutante.',
  },
]
