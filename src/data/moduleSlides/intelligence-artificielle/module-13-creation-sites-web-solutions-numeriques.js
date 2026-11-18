// Module 13 — IA pour la Création de Sites Web & Solutions Numériques — Du cahier des charges au site généré
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (choix de l'outil, cahier des charges, génération, test,
// itération, diffusion, application avec logique métier) est détaillée étape
// par étape et appliquée au même fil rouge, la page d'inscription à l'atelier
// « Gérer les stocks de médicaments au centre de santé » d'Horizon Grands
// Lacs. Organisation, personnes et chiffres fictifs ; les prompts sont donnés
// en entier, prêts à copier et à adapter.
export default [
  {
    type: 'cover',
    title: 'IA pour la Création de Sites Web & Solutions Numériques — Du cahier des charges au site généré',
    hook: "À la fin de ce module, vous saurez transformer une consigne floue du type « fais-moi quelque chose qui donne envie de s'inscrire » en une page web réellement en ligne : cahier des charges complété à 100 %, prompt de génération complet, première version testée lien par lien et sur téléphone, corrections ciblées en langage courant, puis diffusion validée — sans écrire une ligne de code.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Choisir l'outil no-code/IA adapté à un besoin réel (Lovable, v0, Bolt ou Claude Code) à partir de la grille de décision et de l'onglet « Comparatif outils », en produisant un choix justifié par écrit : l'outil retenu et la raison.",
      "Rédiger un cahier des charges complet — objectif mesurable, pages, fonctionnalités indispensables et secondaires, style, public, contraintes — en produisant le gabarit checklist-cahier-des-charges-site-ia.xlsx rempli, avec un taux de complétion de 100 %.",
      "Construire un prompt de génération complet (norme CLARTE) qui reprend ce cahier des charges, en produisant le modèle de la bibliothèque de prompts rempli, prêt à coller dans l'outil.",
      "Tester vous-même la première version générée — liens, formulaire, affichage mobile, textes de remplacement, données personnelles — en produisant un journal de tests où chaque constat est classé par gravité.",
      "Corriger le résultat en langage courant avec des prompts d'itération précis (méthode STAR : un problème, un prompt, un test), en produisant une série de corrections vérifiées une à une et un journal des versions.",
      "Valider et diffuser la page : mention sur les données personnelles, test par une deuxième personne sur un vrai téléphone, accord du demandeur, en produisant une note de livraison de 5 à 8 lignes et un lien public testé.",
      "Appliquer la même méthode à une petite application avec logique métier, en produisant une règle de calcul écrite, quatre cas de test et un verdict de test par cas.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un panorama d'outils à la mode : vous allez conduire un vrai projet de bout en bout, de la consigne floue à la page en ligne, sur un seul cas suivi du début à la fin. Chaque procédure est découpée en étapes numérotées, avec les menus à ouvrir, les champs du gabarit à remplir, le prompt exact à copier et le résultat attendu sur le cas.",
      "À la fin du module, vous aurez en main huit livrables réutilisables tels quels sur vos propres projets :",
    ],
    bullets: [
      "Un choix d'outil justifié, noté dans le cahier des charges (ligne « Outil retenu »).",
      "Le gabarit checklist-cahier-des-charges-site-ia.xlsx (onglet « Cahier des charges ») rempli à 100 %, avec ses 14 points complétés.",
      "Un prompt de structuration (Prompt 1) puis un prompt de génération complet (Prompt 2) construits à partir du modèle de bibliotheque-prompts-creation-web-iteration.docx.",
      "Une première version générée, comparée point par point au cahier des charges.",
      "Un journal de tests classant chaque constat par gravité (bloquant, gênant, cosmétique).",
      "Une série de prompts d'itération STAR — un par problème — et un journal des versions.",
      "Une page validée, publiée et accompagnée d'une note de livraison de 5 à 8 lignes.",
      "Une règle de calcul et ses cas de test pour une application avec logique métier.",
    ],
    tip: "Ouvrez dès maintenant le classeur 04-templates/checklist-cahier-des-charges-site-ia.xlsx (deux onglets : « Cahier des charges » et « Comparatif outils ») et le document bibliotheque-prompts-creation-web-iteration.docx : vous les remplirez et les utiliserez pas à pas, à l'écran, en même temps que vous lirez les procédures.",
  },
  {
    type: 'concept',
    title: "Le fil rouge : Horizon Grands Lacs et l'atelier du 22 septembre 2026",
    body: [
      "Horizon Grands Lacs est une organisation fictive qui opère trois sites : Goma, Bukavu et Kinshasa. Dans le cadre du projet « Route Santé Nord-Kivu », elle appuie 48 centres de santé partenaires. Le lundi 3 août 2026, Furaha Bisimwa, directrice pays, écrit à Amani Kahindo, chargée administrative et logistique à Goma : « Pour l'atelier de septembre avec les centres de santé, il me faut une page où ils peuvent s'inscrire. Fais-moi quelque chose qui donne envie de s'inscrire, je n'ai pas le temps de tout t'expliquer. Je veux le lien vendredi. »",
      "Aucun cahier des charges, aucune maquette, aucun texte prêt. Les faits dont Amani dispose : l'atelier « Gérer les stocks de médicaments au centre de santé » se tient les mardi 22 et mercredi 23 septembre 2026 à Goma (8 h 30 – 16 h 30), il est gratuit, déjeuner inclus, limité à 35 places, avec clôture des inscriptions le vendredi 11 septembre 2026. Il est animé par Sylvie Mwamini, pharmacienne, responsable de l'appui pharmaceutique du projet. Le public : infirmiers titulaires et gestionnaires de pharmacie, qui lisent surtout sur smartphone Android, souvent en connexion lente.",
    ],
    table: {
      columns: ['Jour', 'Étape du fil rouge', 'Personne'],
      rows: [
        ['Lun. 03/08', 'Consigne floue reçue ; outil choisi ; cahier des charges rédigé', 'Amani Kahindo'],
        ['Mar. 04/08', 'Cahier des charges validé à 14/14 points ; première version générée', 'Furaha Bisimwa, Esther Mapendo'],
        ['Mer. 05/08', 'Tests de la première version : 8 constats ; corrections 1 à 4', 'Amani Kahindo'],
        ['Jeu. 06/08', 'Corrections 5 à 8 ; retest ; essai sur téléphone ; accord du demandeur', 'Gédéon Safari, Furaha Bisimwa'],
        ['Ven. 07/08', 'Page publiée, lien diffusé à 14 h', 'Amani Kahindo'],
      ],
    },
    highlight: "Votre mission, comme celle d'Amani : produire en une semaine le cahier des charges, la page générée avec un outil no-code/IA, des corrections ciblées et une page testée — avant de partager un seul lien.",
  },
  {
    type: 'concept',
    title: "La carte du module : 7 procédures, dans l'ordre où vous les exécuterez",
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. Ne sautez aucune étape : un point mal cadré au départ se retrouve, multiplié, dans toutes les corrections qui suivent.",
    bullets: [
      "Procédure 1 — Choisir l'outil adapté à son besoin et à son niveau (4 étapes).",
      "Procédure 2 — Rédiger le cahier des charges avant de générer, point par point dans le gabarit (9 étapes).",
      "Procédure 3 — Générer une première version avec un prompt complet (5 étapes).",
      "Procédure 4 — Tester soi-même la première version : liens, formulaire, mobile, textes, données personnelles (6 étapes).",
      "Procédure 5 — Itérer en langage courant avec des prompts de correction STAR (6 étapes).",
      "Procédure 6 — Retester, faire valider et diffuser (4 étapes).",
      "Procédure 7 — Appliquer la méthode à une application avec logique métier (4 étapes).",
    ],
  },
  {
    type: 'concept',
    title: 'Quatre outils qui ne se valent pas pour le même usage',
    body: [
      "Il existe une multitude d'outils qui promettent de « créer un site en un prompt ». En pratique, quatre couvrent l'essentiel des besoins professionnels courants. Le critère de choix n'est jamais « lequel est le meilleur » dans l'absolu.",
    ],
    bullets: [
      "Lovable et v0 : vous décrivez l'écran voulu en langage naturel, l'outil génère une interface soignée, modifiable par un nouvel échange. Très efficaces pour une page de présentation, un tableau de bord visuel ou une maquette interactive ; moins adaptés à une logique métier lourde (paiement, base de données complexe, comptes multi-rôles).",
      "Bolt : génère une application complète, avec la structure technique nécessaire pour fonctionner réellement, et propose un déploiement rapide vers une adresse en ligne. À privilégier quand le livrable doit réellement tourner et être testé en conditions réelles.",
      "Claude Code : agent en ligne de commande qui lit, écrit et modifie les fichiers d'un vrai projet de code sur votre machine. Le plus précis en contrôle du résultat, mais le plus technique : il suppose l'aisance acquise au Module 10 (terminal, logique d'un projet de code).",
      "ChatGPT ou Copilot : utiles en amont pour structurer un cahier des charges ou reformuler une idée floue. Ce n'est pas l'outil qui génère le site qui doit clarifier votre besoin à votre place.",
    ],
    tip: "Les deux questions qui décident : quel est le niveau de complexité réel du besoin, et quel est votre niveau d'autonomie technique ?",
  },
  {
    type: 'comparison-table',
    title: 'La grille de décision : quel outil pour quel besoin',
    columns: ['Besoin', 'Outil à privilégier', 'Pourquoi', 'Exemple Horizon Grands Lacs'],
    rows: [
      ['Site vitrine simple (présentation, contact)', 'Lovable ou v0', "Génération rapide d'une interface soignée, sans logique métier à gérer", "La page d'inscription à l'atelier du 22 septembre"],
      ['Application avec logique métier (calcul, données, comptes utilisateurs)', 'Bolt', "Génère une structure applicative complète, prête à être testée et déployée", "Un calculateur de quantité à commander pour les centres de santé"],
      ['Modification d\'un projet de code existant, contrôle fin du résultat', 'Claude Code', "Agent capable de lire et modifier directement les fichiers d'un vrai projet (requiert l'aisance du Module 10)", "Corriger le menu du site institutionnel déjà en ligne"],
      ['Prototype ou maquette à montrer rapidement, sans engagement de déploiement', 'v0 ou Lovable', "Aperçu immédiat, modifiable en continu par échange en langage courant", "Une maquette de tableau de bord à montrer au bailleur"],
    ],
  },
  {
    type: 'comparison-table',
    title: "Le comparatif des quatre outils — onglet « Comparatif outils » du gabarit",
    columns: ['Critère', 'Claude Code', 'Lovable', 'v0', 'Bolt'],
    rows: [
      ['Niveau technique requis', "Élevé : aisance avec un terminal (Module 10)", 'Faible : langage naturel uniquement', 'Faible : langage naturel uniquement', 'Faible à moyen : langage naturel, quelques réglages techniques possibles'],
      ['Rapidité de génération', "Moyenne : dépend de la taille du projet modifié", 'Très rapide : aperçu quasi instantané', 'Très rapide : aperçu quasi instantané', 'Rapide : application complète en quelques minutes'],
      ["Cas d'usage idéal", "Modifier un projet de code existant, contrôle fin", 'Site vitrine ou interface de présentation soignée', "Interface proche d'un standard moderne, maquette interactive", 'Application complète avec logique métier, à déployer et tester'],
      ['Contrôle sur le résultat final', "Très élevé : accès direct aux fichiers du projet", 'Moyen : modifiable par échange en langage courant', 'Moyen : modifiable par échange en langage courant', "Moyen à élevé : accès à la structure applicative générée"],
      ['Déploiement inclus', "Non : dépend de l'hébergement choisi", 'Oui : publication en un clic', 'Oui : publication en un clic (écosystème Vercel)', 'Oui : déploiement rapide vers une adresse en ligne testable'],
      ["Coût d'entrée", "Abonnement ou accès API ; gratuit à l'essai selon l'offre", 'Usage gratuit limité, puis offres payantes', 'Usage gratuit limité, puis offres payantes', 'Usage gratuit limité, puis offres payantes'],
    ],
  },
  {
    type: 'stat-callout',
    stat: '3 à 5 phrases',
    caption: "C'est la longueur d'un cahier des charges qui suffit la plupart du temps pour changer la nature du résultat généré, à condition de couvrir réellement les cinq dimensions : objectif, pages, fonctionnalités, style visuel, public cible.",
    context: "Un prompt du type « fais-moi un site pour mon activité » produit un résultat générique — structure par défaut, texte de remplissage, style arbitraire — qu'il faut reprendre presque intégralement : le temps gagné par la génération est perdu dans les reprises. Avec un cahier des charges, l'IA ne devine plus votre besoin, elle l'exécute.",
  },
  {
    type: 'concept',
    title: '« Fais-moi un site » contre un cahier des charges',
    body: "Un cahier des charges utilisable répond à cinq questions avant toute génération : pourquoi cette page existe (objectif mesurable), ce qu'elle contient (pages ou écrans), ce qu'elle doit savoir faire (fonctionnalités indispensables, séparées de celles qui peuvent attendre), à quoi elle ressemble (style, référence) et pour qui elle est faite (public, appareil, contexte de lecture).",
    example: {
      title: 'Appliqué au fil rouge',
      lines: [
        "À éviter : « Fais-moi une page pour l'atelier de septembre qui donne envie de s'inscrire. »",
        "À utiliser : « Une page unique pour l'atelier des 22-23 septembre 2026 à Goma, qui amène 35 inscriptions avant le 11 septembre ; sections : en-tête avec bouton, trois acquis, formatrice, infos pratiques, formulaire (nom, e-mail, téléphone) ; lisible sur smartphone Android en connexion lente ; bleu marine et vert sur fond blanc cassé ; ni témoignages vidéo ni chat dans cette version. »",
      ],
    },
    tip: "Le cahier des charges ne reste pas dans un fichier à part : il est transcrit intégralement dans le prompt de génération. Un cahier qui n'est pas dans le prompt ne sert à rien.",
  },
  {
    type: 'concept',
    title: 'Indispensable ou version 2 : la règle de décision',
    body: [
      "Une première version qui part « dans trop de directions à la fois » est difficile à tester et à corriger. Pour chaque fonctionnalité, posez une seule question : la page peut-elle remplir son objectif sans elle ? Si oui, c'est une fonctionnalité de version 2 ; elle est écrite dans le cahier des charges ET interdite explicitement dans le prompt.",
      "Limitez-vous à trois fonctionnalités indispensables pour une première version : c'est le nombre de lignes prévues par le gabarit, et c'est ce qu'on peut tester sérieusement en une session.",
    ],
    table: {
      columns: ['Fonctionnalité envisagée', 'L\'objectif est-il atteint sans elle ?', 'Décision'],
      rows: [
        ["Formulaire d'inscription avec confirmation", "Non : sans lui, personne ne s'inscrit", 'Indispensable n°1'],
        ["Bouton d'inscription visible pendant le défilement", "Non : sur mobile, la page est longue", 'Indispensable n°2'],
        ["Affichage correct sur smartphone", "Non : c'est l'appareil du public", 'Indispensable n°3'],
        ['Version en swahili', 'Oui : la page en français suffit pour le lancement', 'Version 2'],
        ['Rappel automatique par SMS', "Oui : un e-mail de confirmation suffit d'abord", 'Version 2'],
      ],
    },
    pitfall: "Écrire « indispensable » partout : une liste de dix fonctionnalités indispensables est une liste que personne n'a arbitrée, et la première version sort incomplète sur tous les fronts.",
  },
  {
    type: 'comparison-table',
    title: 'La norme CLARTE — ce que vous écrivez pour chaque lettre',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt de génération du fil rouge'],
    rows: [
      ['C — Contexte', "Qui vous êtes, l'activité, le projet concerné", "« Atelier « Gérer les stocks de médicaments au centre de santé », 22 et 23 septembre 2026, Goma »"],
      ['L — Livrable attendu', 'Le site ou l\'application exact voulu : pages, fonctionnalités, format', "« Une seule page : en-tête, trois acquis, formatrice, infos pratiques, formulaire d'inscription »"],
      ['A — Audience / rôle', "Le rôle de l'IA et le public cible réel", "« Tu es un générateur de site web professionnel » ; « infirmiers titulaires qui lisent sur smartphone Android »"],
      ['R — Restrictions', "Ce qu'il ne faut PAS faire, contraintes de contenu ou techniques", "« Ne génère aucune des fonctionnalités secondaires ; n'invente aucun texte »"],
      ['T — Ton & style', "L'identité visuelle et le registre attendus", "« Sobre et chaleureux, bleu marine #1B3A5C et vert #2E8B57 sur fond blanc cassé »"],
      ['E — Exemples', "Une référence de style ou de structure existante", "« Dans l'esprit de la page d'inscription de l'atelier du Cluster Santé : un titre, un bouton, un formulaire court »"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La méthode STAR — pour corriger un résultat déjà généré',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple tiré du prompt de correction du fil rouge'],
    rows: [
      ['S — Situation', "Ce qui existe déjà, tel qu'il apparaît, et ce qui pose problème : un fait, pas un jugement", "« Le bouton « Je m'inscris » n'apparaît qu'une fois, tout en haut de la page »"],
      ['T — Tâche', "Le résultat corrigé exact attendu, avec la contrainte de non-régression", "« Il doit rester accessible pendant toute la lecture, sans changer le reste de la mise en page »"],
      ['A — Action', "Ce que l'IA doit concrètement modifier, en gestes réalisables un par un", "« Ajoute une barre fixe en bas de l'écran contenant ce bouton, sur ordinateur comme sur mobile »"],
      ['R — Résultat', "Le critère précis, vérifiable par vous, qui dit que la correction est réussie", "« Je clique sur le bouton depuis n'importe quelle section sans remonter ; la barre ne cache aucun titre »"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Une correction vague ne produit jamais un résultat prévisible',
    columns: ['Type de correction', 'Formulation vague à éviter', 'Formulation précise à utiliser (STAR condensée)'],
    rows: [
      ['Mise en page', '« Réorganise la page, c\'est pas terrible. »', '« Le bloc [nom du bloc] doit occuper toute la largeur de la page au lieu de la colonne de droite, sans déplacer les autres sections. »'],
      ['Couleur & style', '« Change les couleurs, ça manque de peps. »', '« Remplace le fond bleu clair par un blanc cassé, et le texte gris par un gris plus foncé (#374151) pour améliorer la lisibilité. »'],
      ['Contenu', '« Le texte est trop long, raccourcis. »', '« Réduis le paragraphe d\'introduction à trois phrases maximum, en gardant le chiffre clé et l\'appel à l\'action, sans changer le titre. »'],
      ['Fonctionnalité', '« Ajoute un truc pour que les gens puissent réagir. »', '« Ajoute un bouton « Télécharger la brochure » sous le formulaire de contact, qui déclenche le téléchargement d\'un PDF, visible uniquement après validation du formulaire. »'],
    ],
  },
  {
    type: 'concept',
    title: "Règles d'usage avant de confier un projet à un outil de génération",
    body: "Un outil de génération reçoit tout ce que vous écrivez dans le prompt et héberge souvent le résultat. Appliquez ces règles avant le premier prompt.",
    bullets: [
      "Utilisez un compte validé par votre organisation, jamais un compte personnel gratuit pour un projet professionnel.",
      "Ne collez jamais dans un prompt de données personnelles réelles (listes de participants, numéros de téléphone), de mots de passe, de clés d'accès ni de chiffres internes confidentiels : décrivez la structure, pas les données.",
      "Tout ce qui est publié est public : relisez la page comme si elle était affichée sur un panneau. Retirez budgets, noms de bailleurs non autorisés et informations internes.",
      "Un formulaire généré collecte des données personnelles sans mention légale par défaut : prévoyez la mention avant toute mise en ligne réelle.",
      "Testez toujours avec des données fictives, puis supprimez les inscriptions de test avant la diffusion.",
    ],
    example: {
      title: 'Décision pour le fil rouge',
      lines: [
        "Horizon Grands Lacs autorise Lovable sur son compte professionnel pour des pages publiques sans donnée interne.",
        "Le prompt ne contiendra que des informations déjà publiques : titre, dates, lieu, programme.",
        "Aucun nom de participant réel dans les tests : « Test Amani », test@example.org.",
      ],
    },
    pitfall: "Coller la liste des 48 centres de santé avec les numéros des infirmiers « pour que l'IA pré-remplisse le formulaire » : c'est une fuite de données personnelles, même si la page marche.",
  },
  {
    type: 'concept',
    title: "Pourquoi l'IA ne teste pas à votre place",
    body: [
      "Un site généré en quelques minutes qui n'a jamais été cliqué une seule fois par un humain avant sa mise en ligne est le scénario le plus courant d'incident évitable de ce type de projet. L'aperçu a l'air juste ; le défaut est dans le clic, dans le téléphone, dans la dernière ligne du formulaire.",
      "Avant de partager un lien, vous vérifiez vous-même, un par un, cinq points. Chacun fait l'objet d'une étape de la procédure 4.",
    ],
    bullets: [
      "Chaque lien du menu et chaque bouton mènent à la bonne page ou à la bonne section.",
      "Le formulaire affiche une confirmation ou envoie réellement un message quand vous le testez, et vous retrouvez l'inscription de test.",
      "L'affichage sur mobile ne casse pas la mise en page (fenêtre réduite ou vrai téléphone).",
      "Aucun texte de remplacement (« lorem ipsum », placeholder générique) ne subsiste.",
      "Un formulaire qui collecte des données personnelles porte une mention minimale sur leur usage.",
    ],
    highlight: "Cliquer, remplir, réduire la fenêtre, chercher « lorem » : quelques minutes qui évitent de diffuser un lien dont vous ne savez pas s'il fonctionne.",
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'No-code/IA', definition: "Catégorie d'outils qui génèrent une interface ou une application fonctionnelle à partir d'une description en langage naturel, sans écriture manuelle de code par l'utilisateur." },
      { term: 'Cahier des charges (brief)', definition: "Document court rédigé avant toute génération : objectif, pages ou écrans, fonctionnalités indispensables, style visuel, public cible." },
      { term: 'Landing page', definition: "Page unique à sections multiples dont le but est une action précise (ici : s'inscrire), avec un bouton d'appel à l'action et un formulaire." },
      { term: 'Prompt de génération', definition: "Message complet qui reprend l'intégralité du cahier des charges pour obtenir dès la première version un résultat exploitable." },
      { term: 'Itération', definition: "Cycle de correction en langage courant appliqué à un résultat déjà généré, par opposition à une régénération complète depuis zéro." },
      { term: 'Déploiement', definition: "Mise en ligne effective du site ou de l'application, avec une adresse réellement accessible et testable, par opposition à un simple aperçu visuel." },
      { term: 'Affichage mobile (responsive)', definition: "Capacité d'une page à réorganiser son contenu selon la taille de l'écran : blocs empilés sur téléphone, côte à côte sur ordinateur." },
      { term: 'Texte de remplacement', definition: "Texte provisoire laissé par l'outil (« lorem ipsum », « Prénom Nom ») qui ne doit jamais subsister dans la version diffusée." },
      { term: 'Non-régression', definition: "Vérification qu'une correction n'a rien cassé d'autre : on retest la correction ET ce qui fonctionnait déjà." },
      { term: 'Mention légale sur les données', definition: "Texte court sous le formulaire : quelles données, pour quoi faire, combien de temps, à qui s'adresser pour les consulter ou les faire supprimer." },
    ],
  },

  // ───────────── Procédure 1 — Choisir l'outil ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Qualifier le besoin : décrire ce que la page ou l\'application doit permettre de faire',
    intro: "Avant d'ouvrir un outil, vous devez savoir ce que vous construisez. Entrée nécessaire : la demande reçue, telle quelle, et cinq minutes avec un stylo. Le résultat de cette étape est un besoin classé dans l'une des quatre lignes de la grille de décision.",
    steps: [
      {
        title: 'Décrire le besoin en deux phrases',
        actions: [
          "Recopiez la demande reçue mot pour mot en haut d'un fichier de notes nommé « Journal_projet_atelier_stocks ».",
          "Écrivez en dessous, en deux phrases maximum : qui doit pouvoir faire quoi grâce à cette page ou cette application.",
          "Relisez : si la phrase contient « et aussi », vous avez probablement deux besoins. Séparez-les.",
        ],
      },
      {
        title: 'Poser les quatre questions de complexité',
        actions: [
          "Y a-t-il un calcul, une base de données ou des comptes utilisateurs ? Si oui, il y a une logique métier.",
          "Doit-il réellement tourner et être testé en conditions réelles, ou seulement être montré ? Un aperçu n'est pas un déploiement.",
          "Existe-t-il déjà un projet de code à modifier ? Si oui, vous ne partez pas de zéro.",
          "Qui l'utilisera, sur quel appareil, avec quelle connexion ?",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — journal du 03/08/2026, 09 h 15',
      lines: [
        "Demande reçue : « Pour l'atelier de septembre avec les centres de santé, il me faut une page où ils peuvent s'inscrire. Fais-moi quelque chose qui donne envie de s'inscrire… »",
        "Besoin en deux phrases : un responsable de centre de santé doit pouvoir lire l'essentiel de l'atelier et s'inscrire en moins de deux minutes depuis son téléphone. Horizon Grands Lacs doit recevoir ses coordonnées.",
        "Questions : calcul ? non — base de données ? seulement la liste des inscrits — comptes ? non — doit tourner ? oui (lien public) — projet existant ? non — appareil : smartphone Android, connexion lente.",
        "Classement : site vitrine simple, une page avec formulaire → première ligne de la grille.",
      ],
    },
    result: "Un besoin décrit en deux phrases, quatre questions de complexité répondues et une ligne de la grille identifiée.",
    pitfall: "Choisir l'outil avant d'avoir qualifié le besoin : vous finissez avec un outil de génération d'application pour une simple page, ou l'inverse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Mesurer votre autonomie technique, la deuxième moitié du critère de choix',
    intro: "Un outil excellent mais trop technique vous fera perdre plus de temps qu'un outil moyen que vous maîtrisez. L'autonomie technique se mesure par des faits, pas par une impression.",
    steps: [
      {
        title: 'Répondre à trois questions factuelles',
        actions: [
          "Avez-vous déjà ouvert un terminal et exécuté une commande sans aide ? (Module 10 : VS Code & Copilot.)",
          "Savez-vous lire un message d'erreur et décider si vous pouvez le corriger seul ?",
          "Qui maintiendra la page ou l'application dans six mois ? Si c'est vous seul, choisissez ce que vous pouvez modifier en langage courant.",
        ],
      },
      {
        title: 'Traduire les réponses en niveau',
        actions: [
          "Trois « non » : visez les outils au niveau technique faible (Lovable, v0).",
          "Deux « oui » sur le terminal et les erreurs, et un projet de code existant : Claude Code devient envisageable.",
          "Une application qui doit tourner mais sans terminal : Bolt demande « faible à moyen », avec quelques réglages techniques possibles.",
        ],
      },
    ],
    table: {
      columns: ['Question', 'Réponse d\'Amani', 'Conséquence'],
      rows: [
        ['Terminal utilisé sans aide ?', "Quelques commandes au Module 10, avec l'aide de Copilot", 'Pas assez pour piloter un projet complet seule'],
        ['Lire un message d\'erreur ?', 'Parfois, pas toujours', 'Éviter les outils qui exposent beaucoup de code'],
        ['Qui maintient dans six mois ?', 'Amani seule, en langage courant', 'Choisir un outil modifiable par échange en langage courant'],
      ],
    },
    result: "Un niveau d'autonomie noté : faible à moyen pour Amani. Claude Code est écarté pour cette échéance, pas définitivement.",
    tip: "Ce choix n'est pas définitif : vous pouvez changer d'outil en cours de route. L'objectif est seulement d'éviter de partir sur un outil mal dimensionné pour la tâche.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: "Lire l'onglet « Comparatif outils » critère par critère",
    intro: "L'onglet « Comparatif outils » du classeur checklist-cahier-des-charges-site-ia.xlsx est un tableau de lecture : en colonne A les critères, en colonnes B à E les quatre outils (Claude Code, Lovable, v0, Bolt). Vous n'y saisissez rien ; vous le lisez ligne par ligne avec votre besoin en tête.",
    steps: [
      {
        title: 'Ouvrir et lire les six lignes',
        actions: [
          "Ouvrez le classeur, cliquez sur l'onglet « Comparatif outils » (en bas à gauche).",
          "Ligne 5, « Niveau technique requis » : éliminez les outils dont le niveau dépasse votre autonomie notée à l'étape précédente.",
          "Ligne 7, « Cas d'usage idéal » : gardez ceux dont le cas d'usage ressemble à votre besoin.",
          "Ligne 8, « Contrôle sur le résultat final » et ligne 6, « Rapidité » : départagez les outils restants.",
          "Ligne 9, « Déploiement inclus » : si une adresse publique est nécessaire, vérifiez qu'elle est incluse.",
          "Ligne 10, « Coût d'entrée » : contrôlez qu'un usage gratuit limité suffit pour un premier test.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Verdict pour la page d\'inscription', 'Outils retenus'],
      rows: [
        ['Niveau technique requis', 'Autonomie faible à moyenne : élimine Claude Code (« élevé »)', 'Lovable, v0, Bolt'],
        ['Rapidité de génération', 'Il faut une première version aujourd\'hui : très rapide', 'Lovable, v0'],
        ['Cas d\'usage idéal', 'Site vitrine / interface de présentation soignée', 'Lovable (v0 en secours)'],
        ['Contrôle sur le résultat', 'Moyen suffit : on corrige par échange en langage courant', 'Lovable, v0'],
        ['Déploiement inclus', 'Lien public nécessaire : publication en un clic', 'Lovable, v0'],
        ['Coût d\'entrée', 'Usage gratuit limité pour un premier test', 'Lovable, v0'],
      ],
    },
    result: "Un choix principal (Lovable) et un outil de secours (v0), chacun justifié critère par critère.",
    pitfall: "Parcourir le comparatif en cherchant l'outil « le meilleur » : le critère est l'adéquation à votre besoin et à votre niveau, pas le classement général.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: "Décider, tester l'outil pendant dix minutes et consigner le choix",
    intro: "Un choix d'outil qui n'est pas écrit sera remis en cause à la première difficulté. Vous le consignez avec sa raison, puis vous vérifiez en dix minutes que l'outil répond à vos attentes avant d'y investir une journée.",
    steps: [
      {
        title: 'Faire un test de dix minutes',
        actions: [
          "Ouvrez l'outil dans votre navigateur avec le compte professionnel validé (règle d'usage vue plus haut).",
          "Créez un projet d'essai et saisissez un prompt très court : « Une page avec un titre, un paragraphe et un bouton. »",
          "Observez : où s'affiche l'aperçu, comment se saisit une correction, où se trouve le bouton de publication, quel quota gratuit est affiché.",
          "Supprimez ce projet d'essai ou notez qu'il ne sera pas utilisé.",
        ],
      },
      {
        title: 'Consigner le choix',
        actions: [
          "Dans le journal de projet, écrivez : outil retenu, outil de secours, raison en une phrase, date.",
          "Gardez cette phrase : elle ira telle quelle dans la ligne « Outil retenu » du cahier des charges.",
        ],
      },
    ],
    example: {
      title: 'Journal de projet — entrée du 03/08/2026, 10 h 05',
      lines: [
        "Outil retenu : Lovable. Secours : v0.",
        "Raison : page de présentation avec formulaire simple, aucun calcul ; publication en un clic ; modifiable en langage courant, sans terminal ; usage gratuit limité suffisant pour un premier test.",
        "Test de dix minutes : aperçu affiché à droite, zone de correction sous l'aperçu, bouton « Publier » en haut — conforme.",
      ],
    },
    result: "Un choix d'outil écrit, justifié, testé en dix minutes, prêt à être recopié dans le cahier des charges.",
    tip: "Gardez le comparatif ouvert pendant tout le projet : si l'outil bute sur un besoin (par exemple une logique de calcul), relire la ligne « Cas d'usage idéal » vous dira vite s'il faut changer.",
  },

  // ───────────── Procédure 2 — Cahier des charges ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 9',
    title: 'Rassembler la matière en vrac avant de structurer',
    intro: "C'est l'étape la plus souvent sautée, et celle qui explique le plus d'itérations inutiles ensuite. Vous n'écrivez pas encore le cahier des charges : vous videz votre tête et vos sources, sans trier, pour que l'IA puisse ensuite structurer à votre place.",
    steps: [
      {
        title: 'Collecter les faits',
        actions: [
          "Rassemblez les sources : le message du demandeur, le programme de l'événement ou du service, le public visé, les dates et le lieu, les contacts.",
          "Écrivez toutes les idées, sans ordre, en une liste de lignes courtes : ce que la page doit montrer, permettre, éviter.",
          "Soulignez en rouge les informations que vous ne connaissez pas encore : elles deviendront des questions pour le demandeur.",
        ],
      },
    ],
    example: {
      title: 'Liste en vrac d\'Amani — 03/08/2026, 10 h 30',
      lines: [
        "S'inscrire depuis un téléphone · dates et lieu bien visibles · présenter Sylvie Mwamini · que ça donne envie · 35 places seulement · couleurs de l'organisation · pas de compte à créer · dire ce qu'ils sauront faire · une version en swahili plus tard ? · un rappel par SMS peut-être ?",
        "Faits connus : atelier « Gérer les stocks de médicaments au centre de santé » ; mardi 22 et mercredi 23 septembre 2026, 8 h 30 – 16 h 30 ; salle de formation d'Horizon Grands Lacs à Goma ; gratuit, déjeuner inclus ; clôture des inscriptions le 11 septembre.",
        "À demander à Furaha (en rouge) : qui reçoit les inscriptions ? quelles informations demander aux inscrits ? le public est-il limité aux 48 centres partenaires ?",
      ],
    },
    result: "Une liste en vrac de dix idées, les faits solides séparés des zones d'ombre, et trois questions préparées pour le demandeur.",
    pitfall: "Trier et rédiger au fil de l'eau : vous écrivez un cahier des charges incomplet avec l'impression qu'il est fini. Videz d'abord, structurez ensuite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 9',
    title: 'Structurer le besoin avec le Prompt 1 (norme CLARTE)',
    intro: "Votre idée est encore floue : vous demandez à ChatGPT ou à Claude de la structurer en cinq points, sans rédiger aucun contenu. Copiez le modèle ci-dessous et remplacez seulement les éléments entre crochets.",
    steps: [
      {
        title: 'Assembler le prompt lettre par lettre',
        actions: [
          "A : donnez à l'IA le rôle de consultant en cadrage de projets numériques.",
          "C : décrivez votre projet et collez votre liste en vrac, telle quelle.",
          "L : imposez cinq points — objectif, pages, fonctionnalités indispensables distinctes de la version 2, style avec référence, public cible.",
          "T : limitez chaque point à deux ou trois phrases, dans un langage collable dans un prompt de génération.",
          "R : interdisez tout texte de contenu rédigé à ce stade.",
        ],
      },
    ],
    example: {
      title: 'Prompt 1 — fil rouge (à copier)',
      lines: [
        "« Tu es consultant en cadrage de projets numériques. [A]",
        "Je veux créer une page web pour l'atelier « Gérer les stocks de médicaments au centre de santé » que mon organisation, Horizon Grands Lacs, organise à Goma pour ses centres de santé partenaires, sans savoir encore précisément comment structurer ma demande. Voici en vrac ce que je veux : s'inscrire depuis un téléphone, dates et lieu bien visibles, présenter la formatrice Sylvie Mwamini, que ça donne envie, 35 places seulement, couleurs de l'organisation, pas de compte à créer, dire ce que les participants sauront faire, peut-être une version en swahili et un rappel par SMS plus tard. [C]",
        "Structure-moi un cahier des charges clair en cinq points : objectif de la page, liste des pages nécessaires, fonctionnalités indispensables (distinctes de celles qui peuvent attendre une version 2), style visuel souhaité avec si possible une référence de site existant, et public cible précis. [L]",
        "Limite chaque point à deux ou trois phrases maximum, dans un langage direct que je pourrai coller tel quel dans un prompt de génération. [T]",
        "Ne me propose aucun texte de contenu rédigé à ce stade, uniquement la structure du besoin. » [R]",
      ],
    },
    result: "Un prompt où chaque phrase correspond à une lettre CLARTE identifiable et qui contient vos vraies informations, pas des généralités.",
    tip: "Ne cachez pas ce que vous ne savez pas : écrivez « je ne sais pas encore qui reçoit les inscriptions ». L'IA le fera apparaître comme une question ouverte dans sa réponse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 9',
    title: 'Lire la réponse de l\'IA et la faire valider par le demandeur',
    intro: "L'IA structure ; le demandeur décide. Vous lisez la structure proposée comme un relecteur, vous isolez les questions ouvertes et vous obtenez des réponses écrites avant de remplir le gabarit.",
    steps: [
      {
        title: 'Lire la structure proposée',
        actions: [
          "Vérifiez que les cinq points sont présents et que chacun tient en deux ou trois phrases.",
          "Barrez tout ce qui sort du besoin réel (fonctionnalité inventée, public inventé).",
          "Listez les points que l'IA signale comme à confirmer.",
        ],
      },
      {
        title: 'Obtenir les réponses du demandeur',
        actions: [
          "Envoyez à Furaha une liste de cinq questions fermées, par message, pas à l'oral.",
          "Demandez une réponse écrite à chaque question et conservez-la dans le journal de projet.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — échange du 03/08/2026, 11 h 45 à 14 h 10',
      lines: [
        "Structure de l'IA : objectif = inscriptions à l'atelier ; une page unique à sections ; indispensable = formulaire, bouton visible, affichage mobile ; v2 = swahili, SMS ; public = responsables de centres de santé sur smartphone.",
        "Questions d'Amani : (1) 35 inscriptions = notre objectif ? (2) gratuit et déjeuner inclus ? (3) public limité aux 48 centres partenaires ? (4) qui reçoit les inscriptions ? (5) quelles informations demander ?",
        "Réponses de Furaha à 14 h 10 : (1) oui, 35 avant le 11/09 ; (2) oui ; (3) oui ; (4) Amani, adresse atelier.stocks@horizon-grands-lacs.example ; (5) nom, e-mail, téléphone pour l'instant.",
      ],
    },
    result: "Une structure en cinq points relue, et cinq réponses écrites du demandeur : plus aucune zone d'ombre sur le fond.",
    pitfall: "Remplir le gabarit avec les hypothèses de l'IA : elle présente comme des faits des éléments qu'elle a déduits. Seul le demandeur valide.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 9',
    title: "Remplir le gabarit : l'objectif mesurable (ligne 6)",
    intro: "Ouvrez checklist-cahier-des-charges-site-ia.xlsx, onglet « Cahier des charges ». Les colonnes sont A « Catégorie », B « Élément à préciser », C « Votre réponse », D « Complété ? ». La ligne 5 est un exemple fourni : lisez-le, il n'est pas compté. Vous remplissez les lignes 6 à 19, soit 14 points.",
    steps: [
      {
        title: 'Rédiger la réponse de la ligne 6',
        actions: [
          "Cliquez dans C6, en face de « Résultat mesurable attendu (ex. nombre d'inscriptions, de prises de contact) ».",
          "Écrivez un résultat chiffré ET daté : un nombre, une échéance, éventuellement la façon de le suivre.",
          "Passez à D6 : la liste déroulante propose « Oui » ou « Non ». Choisissez « Oui » seulement quand la réponse est rédigée et validée.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Élément à préciser', 'Votre réponse', 'Complété ?'],
      rows: [
        ['Objectif', "Résultat mesurable attendu (ex. nombre d'inscriptions, de prises de contact)", "35 inscriptions confirmées (35 places) avant le vendredi 11 septembre 2026 ; nombre d'inscrits relevé chaque lundi.", 'Oui'],
      ],
    },
    result: "La ligne 6 est remplie avec un nombre, une échéance et un suivi : « donner envie de s'inscrire » est devenu un objectif vérifiable.",
    pitfall: "Écrire « informer les centres de santé » : ce n'est pas mesurable, personne ne pourra dire si la page a réussi ou échoué.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 9',
    title: "Remplir le gabarit : pages ou écrans nécessaires (lignes 7 et 8)",
    intro: "Deux points : la liste complète des pages ou écrans, et celui qui doit convaincre en premier. Pour une landing page, c'est une seule page à sections ; la liste décrit alors les sections dans l'ordre de lecture.",
    steps: [
      {
        title: 'Ligne 7 — Liste complète des pages ou écrans',
        actions: [
          "Écrivez le nombre de pages, puis chaque section dans l'ordre où un visiteur la lira.",
          "Ne décrivez pas encore les textes : seulement ce que contient chaque section.",
        ],
      },
      {
        title: 'Ligne 8 — Page ou écran prioritaire',
        actions: [
          "Désignez la zone qui doit convaincre en premier et dites ce qu'elle doit montrer sans défilement.",
          "Passez D7 et D8 à « Oui » une fois les réponses rédigées.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Élément à préciser', 'Votre réponse', 'Complété ?'],
      rows: [
        ['Pages / écrans', 'Liste complète des pages ou écrans nécessaires', "Une seule page, six sections : 1 en-tête (titre, dates, bouton) ; 2 trois acquis ; 3 la formatrice ; 4 infos pratiques (dates, durée, lieu, gratuité, repas) ; 5 formulaire d'inscription ; 6 pied de page (contact, mention données).", 'Oui'],
        ['Pages / écrans', 'Page ou écran prioritaire, celui qui doit convaincre en premier', "L'en-tête : titre de l'atelier, dates, lieu et bouton « Je m'inscris » visibles sans faire défiler, sur un écran de smartphone.", 'Oui'],
      ],
    },
    result: "Les lignes 7 et 8 décrivent la structure complète de la page et la zone décisive : le générateur n'aura plus à deviner l'organisation.",
    tip: "Pensez à l'ordre de lecture d'un visiteur pressé : ce qu'il voit en trois secondes (en-tête), ce qu'il lit s'il est intéressé (acquis, infos pratiques), ce qu'il fait ensuite (formulaire).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 9',
    title: 'Remplir le gabarit : fonctionnalités indispensables et secondaires (lignes 9 à 13)',
    intro: "Cinq lignes pour séparer deux listes : trois fonctionnalités indispensables (lignes 9, 10, 11) et deux à reporter à une version 2 (lignes 12 et 13). Appliquez la règle de décision : la page peut-elle remplir son objectif sans elle ?",
    steps: [
      {
        title: 'Lignes 9 à 11 — Indispensables',
        actions: [
          "Écrivez une fonctionnalité par ligne, en une phrase testable (on doit pouvoir dire « ça marche » ou « ça ne marche pas »).",
          "Incluez toujours le comportement sur mobile si le public lit sur téléphone.",
        ],
      },
      {
        title: 'Lignes 12 et 13 — À reporter à une version 2',
        actions: [
          "Notez les idées attrayantes mais non nécessaires : elles seront explicitement interdites dans le prompt de génération.",
          "Passez les cinq lignes à « Oui ».",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Élément à préciser', 'Votre réponse', 'Complété ?'],
      rows: [
        ['Fonctionnalités indispensables', 'Fonctionnalité indispensable n°1', "Formulaire d'inscription fonctionnel (nom, e-mail, téléphone) avec message de confirmation à l'envoi.", 'Oui'],
        ['Fonctionnalités indispensables', 'Fonctionnalité indispensable n°2', "Bouton d'inscription accessible pendant tout le défilement, sans remonter en haut de la page.", 'Oui'],
        ['Fonctionnalités indispensables', 'Fonctionnalité indispensable n°3', "Affichage lisible sur smartphone Android, sans zoom, et page légère pour une connexion lente.", 'Oui'],
        ['Fonctionnalités secondaires (v2)', 'Fonctionnalité à reporter à une version 2 n°1', 'Version de la page en swahili.', 'Oui'],
        ['Fonctionnalités secondaires (v2)', 'Fonctionnalité à reporter à une version 2 n°2', "Rappel automatique par SMS avant l'atelier.", 'Oui'],
      ],
    },
    result: "Trois indispensables testables et deux idées parquées en version 2, prêtes à être interdites dans le prompt.",
    pitfall: "Laisser la ligne 12 ou 13 vide « parce qu'il n'y a rien à reporter » : il y a toujours quelque chose, et si vous ne le notez pas, l'outil l'inventera dans la première version.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 9',
    title: 'Remplir le gabarit : style visuel et public cible (lignes 14 à 16)',
    intro: "Le style se décrit avec des mots que l'IA peut exécuter : ambiance, couleurs codées, et une référence existante. Le public se décrit avec l'appareil et le contexte de lecture, deux informations directement actionnables.",
    steps: [
      {
        title: 'Lignes 14 et 15 — Style visuel',
        actions: [
          "Ligne 14 : ambiance en trois adjectifs, couleurs dominantes avec leur code (#1B3A5C, #2E8B57), fond, type de boutons.",
          "Ligne 15 : nommez une page existante dont vous aimez la structure. Si vous n'en avez pas, demandez à un collègue.",
        ],
      },
      {
        title: 'Ligne 16 — Public cible',
        actions: [
          "Écrivez qui visitera la page, sur quel appareil, avec quelle connexion, pendant combien de temps.",
          "Passez D14, D15 et D16 à « Oui ».",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Élément à préciser', 'Votre réponse', 'Complété ?'],
      rows: [
        ['Style visuel', 'Description du style souhaité (ambiance, couleurs dominantes)', 'Sobre, chaleureux, institutionnel sans froideur ; bleu marine #1B3A5C et vert #2E8B57 sur fond blanc cassé ; police sans empattement lisible ; boutons larges.', 'Oui'],
        ['Style visuel', "Référence de site ou d'application existante (nom ou lien)", "Page d'inscription de l'atelier du Cluster Santé Nord-Kivu (référence fictive pour l'exemple) : un titre, un bouton, un formulaire court.", 'Oui'],
        ['Public cible', "Public cible précis et contexte d'utilisation (ex. depuis mobile, en quelques minutes)", "Infirmiers titulaires et gestionnaires de pharmacie de centres de santé du Nord-Kivu ; lisent sur smartphone Android, souvent en connexion lente ; décident en moins de deux minutes.", 'Oui'],
      ],
    },
    result: "Un style codé (couleurs en hexadécimal), une référence et un public décrit par son appareil et sa connexion : trois informations qui changent directement le rendu.",
    tip: "Une référence vaut mille adjectifs. Si vous n'en avez pas, écrivez « pas de référence » plutôt que de laisser vide : le point est ainsi traité, pas oublié.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 8 sur 9',
    title: "Remplir le gabarit : contraintes et outil retenu (lignes 17 à 19)",
    intro: "Les contraintes évitent les mauvaises surprises : données personnelles et mention associée, délai, budget, hébergement. La ligne 19 reprend le choix de la procédure 1.",
    steps: [
      {
        title: 'Ligne 17 — Données personnelles et mention légale',
        actions: [
          "Listez chaque donnée collectée par le formulaire et dites à quoi elle servira.",
          "Prévoyez la mention minimale (finalité, durée de conservation, contact) et qui la valide.",
          "Laissez D17 à « Non » tant que la mention n'est pas validée par la personne responsable : le taux de complétion le montrera.",
        ],
      },
      {
        title: 'Lignes 18 et 19 — Autre contrainte et outil',
        actions: [
          "Ligne 18 : délai, budget, hébergement. Ligne 19 : recopiez la décision du journal de projet.",
          "Passez D18 à « Oui » ; D19 à « Oui » dès que le choix est consigné.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Élément à préciser', 'Votre réponse', 'Complété ?'],
      rows: [
        ['Contraintes', 'Données personnelles collectées et mention légale associée', "Nom, e-mail, téléphone, utilisés seulement pour l'organisation de l'atelier, conservés jusqu'au 31/10/2026. Mention sous le formulaire, à faire valider par E. Mapendo (conformité).", 'Non'],
        ['Contraintes', 'Autre contrainte (délai, budget, hébergement)', "Page en ligne avant le vendredi 07/08/2026 ; budget : offre gratuite de l'outil ; adresse fournie par l'outil.", 'Oui'],
        ['Outil retenu', 'Outil no-code/IA choisi et raison du choix', "Lovable : page de présentation avec formulaire simple, aucun calcul, publication en un clic, sans terminal. Secours : v0.", 'Oui'],
      ],
    },
    result: "Les 14 lignes sont rédigées. La ligne 17 reste volontairement à « Non » : un point rédigé mais non validé n'est pas un point complété.",
    pitfall: "Passer D17 à « Oui » parce que le texte est écrit : la validation par la personne compétente est ce qui fait la différence entre une mention et une mention conforme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 9 sur 9',
    title: 'Lire le taux de complétion et obtenir la validation du cahier des charges',
    intro: "Le gabarit calcule seul le taux de complétion en ligne 21. Il vous dit si vous pouvez passer à la génération. Règle de travail : on ne génère pas avant 100 %.",
    steps: [
      {
        title: 'Lire le taux',
        actions: [
          "Descendez en ligne 21 : C21 affiche le pourcentage de points « Oui » (formule du gabarit : nombre de « Oui » de D6:D19 divisé par le nombre de lignes remplies de B6:B19) et D21 le nombre de points complétés sur 14.",
          "Corrigez les « Non » : relancez le demandeur, la personne qui doit valider, ou rédigez la réponse manquante.",
          "Remarquez que la ligne 5, exemple fourni, n'est pas comptée.",
        ],
      },
      {
        title: 'Faire valider',
        actions: [
          "Envoyez le cahier à Furaha, avec une demande explicite : « Je lance la génération demain si tu valides ces 14 points. »",
          "Obtenez la réponse écrite et passez les dernières cellules à « Oui ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — taux de complétion',
      lines: [
        "Lundi 03/08, 16 h 20 : 13 « Oui » sur 14 → C21 = 93 %, D21 = « 13 / 14 points » (ligne 17 en attente de la conformité).",
        "Mardi 04/08, 09 h 30 : Esther Mapendo valide la mention ; D17 passe à « Oui » → C21 = 100 %, D21 = « 14 / 14 points ».",
        "Mardi 04/08, 11 h : Furaha répond « Validé, lance » — cahier archivé sous 2026-08-04_cahier_des_charges_atelier.xlsx.",
      ],
    },
    result: "Un cahier des charges à 100 %, validé par écrit, prêt à être transcrit dans le prompt de génération.",
    tip: "Si votre taux affiche 93 % et que vous « savez » que tout est bon, c'est que vous avez un point rédigé mais non validé : traitez-le, ne contournez pas la formule.",
  },

  // ───────────── Procédure 3 — Générer la première version ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Ouvrir le modèle de prompt de génération dans la bibliothèque',
    intro: "Un cahier des charges qui reste dans un fichier séparé du prompt ne sert à rien : c'est sa reprise intégrale dans le prompt qui évite le résultat générique. Le document bibliotheque-prompts-creation-web-iteration.docx contient, en section 1, le modèle à remplir.",
    steps: [
      {
        title: 'Repérer le modèle',
        actions: [
          "Ouvrez bibliotheque-prompts-creation-web-iteration.docx dans Word.",
          "Rendez-vous à la section « 1. Prompt de génération complète (à personnaliser) » : le modèle est dans un encadré.",
          "Copiez l'encadré entier dans un nouveau document nommé « Prompt_generation_atelier_V1 » : vous ne modifiez jamais la bibliothèque elle-même.",
          "Repérez les six crochets à remplacer, dans l'ordre : objectif, pages, fonctionnalités indispensables, fonctionnalités secondaires, style visuel, public cible.",
        ],
      },
    ],
    example: {
      title: 'Le modèle de la section 1 (avant remplissage)',
      lines: [
        "« Tu es un générateur de site web professionnel. Objectif du site : [décrire l'objectif précis…]. Pages nécessaires : [lister les pages…]. Fonctionnalités indispensables : [lister les fonctionnalités non négociables pour cette première version…]. Fonctionnalités secondaires qui peuvent attendre une version 2 : [lister ce qui peut être ajouté plus tard…]. Style visuel : [décrire l'ambiance et les couleurs souhaitées, avec si possible une référence de site existant]. Public cible : [décrire précisément qui visitera ce site et dans quel contexte…]. Ne génère aucune des fonctionnalités listées comme secondaires dans cette première version. »",
      ],
    },
    result: "Une copie du modèle dans un document de travail, avec les six crochets repérés et la phrase finale de restriction.",
    pitfall: "Réécrire le prompt de mémoire au lieu de partir du modèle : vous oubliez la dernière phrase (celle qui interdit les fonctionnalités secondaires) et la première version part dans trop de directions.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Remplacer chaque crochet par la réponse correspondante du cahier des charges',
    intro: "Vous ne rédigez rien de nouveau : vous transposez. Chaque crochet a une ou deux lignes sources dans l'onglet « Cahier des charges ». Si un crochet ne trouve pas sa source, c'est que le cahier est incomplet : retournez le compléter.",
    steps: [
      {
        title: 'Transposer crochet par crochet',
        actions: [
          "Ouvrez le cahier des charges validé à côté du document « Prompt_generation_atelier_V1 ».",
          "Pour chaque crochet, copiez la réponse de la colonne C des lignes indiquées dans le tableau ci-dessous.",
          "Reformulez en phrases complètes ; conservez les chiffres, dates, noms et codes de couleur exactement.",
          "Cochez dans le cahier chaque ligne transposée.",
        ],
      },
    ],
    table: {
      columns: ['Crochet du modèle', 'Source dans le cahier', 'Texte inséré dans le prompt (extrait)'],
      rows: [
        ['Objectif du site', 'Ligne 6', "amener 35 responsables de centres de santé partenaires à s'inscrire avant le vendredi 11 septembre 2026"],
        ['Pages nécessaires', 'Lignes 7 et 8', "une seule page, six sections dans cet ordre : en-tête avec bouton « Je m'inscris », trois acquis, la formatrice, infos pratiques, formulaire, pied de page"],
        ['Fonctionnalités indispensables', 'Lignes 9, 10, 11', "formulaire fonctionnel avec confirmation ; bouton accessible pendant le défilement ; affichage correct sur smartphone Android et page légère"],
        ['Fonctionnalités secondaires (v2)', 'Lignes 12 et 13', 'version en swahili, rappel par SMS'],
        ['Style visuel', 'Lignes 14 et 15', 'sobre et chaleureux, bleu marine #1B3A5C et vert #2E8B57 sur fond blanc cassé, boutons larges, référence de page d\'inscription'],
        ['Public cible', 'Ligne 16', 'infirmiers titulaires et gestionnaires de pharmacie, smartphone Android, connexion lente, décision en moins de deux minutes'],
      ],
    },
    result: "Les six crochets sont remplacés, sans reformulation qui déforme un chiffre, une date ou un code couleur.",
    tip: "Ajoutez aussi les contenus que vous connaissez déjà (dates, lieu, trois acquis, nom de la formatrice) : un contenu fourni n'est pas inventé par l'outil.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Ajouter les garde-fous et relire le prompt lettre par lettre',
    intro: "Avant d'envoyer, vous ajoutez les restrictions qui évitent les mauvaises surprises, puis vous passez le prompt au crible des six lettres CLARTE. Cinq minutes ici évitent une demi-journée de corrections.",
    steps: [
      {
        title: 'Ajouter deux garde-fous',
        actions: [
          "Après le public cible, ajoutez : « N'invente aucun texte, aucun chiffre, aucun témoignage ni aucun nom : écris [À COMPLÉTER] pour toute information que je n'ai pas fournie. »",
          "Gardez en dernière phrase : « Ne génère aucune des fonctionnalités listées comme secondaires dans cette première version. »",
        ],
      },
      {
        title: 'Passer le prompt au crible CLARTE',
        actions: [
          "C : le contexte nomme-t-il l'événement, les dates, le lieu ? A : le rôle et le public sont-ils précis ?",
          "L : toutes les sections sont-elles listées dans l'ordre ? R : les restrictions sont-elles écrites ? T : couleurs codées ? E : référence présente ?",
          "Relisez à voix haute : un prompt qu'on ne peut pas lire d'une traite est trop confus.",
        ],
      },
    ],
    example: {
      title: 'Prompt de génération V1 — fil rouge (à copier)',
      lines: [
        "« Tu es un générateur de site web professionnel. [A] Objectif de la page : présenter en une seule page l'atelier « Gérer les stocks de médicaments au centre de santé » (mardi 22 et mercredi 23 septembre 2026, Goma) et amener 35 responsables de centres de santé partenaires à s'inscrire avant le vendredi 11 septembre 2026. [C]",
        "Pages nécessaires : une seule page, six sections dans cet ordre — en-tête (titre, dates, lieu, bouton « Je m'inscris »), trois acquis, la formatrice, informations pratiques, formulaire d'inscription (nom, e-mail, téléphone), pied de page (contact et mention sur les données). [L]",
        "Les trois acquis sont : (1) calculer la quantité de médicaments à commander à partir de la consommation, du délai de livraison et du stock de sécurité ; (2) tenir une fiche de stock à jour et repérer les produits proches de la péremption ; (3) préparer une commande de réapprovisionnement que la zone de santé peut valider du premier coup. La formatrice est Sylvie Mwamini, pharmacienne, responsable de l'appui pharmaceutique du projet Route Santé Nord-Kivu. Infos pratiques : 8 h 30 – 16 h 30, salle de formation d'Horizon Grands Lacs à Goma, gratuit, déjeuner inclus, 35 places.",
        "Fonctionnalités indispensables : formulaire fonctionnel avec message de confirmation, bouton d'inscription accessible pendant tout le défilement, affichage correct sur smartphone Android et page légère. Fonctionnalités secondaires qui peuvent attendre une version 2 : version en swahili, rappel par SMS.",
        "Style visuel : sobre et chaleureux, bleu marine #1B3A5C et vert #2E8B57 sur fond blanc cassé, police sans empattement lisible, boutons larges, dans l'esprit d'une page d'inscription d'atelier d'une organisation humanitaire. [T, E]",
        "Public cible : infirmiers titulaires et gestionnaires de pharmacie de centres de santé du Nord-Kivu, qui lisent sur smartphone Android, souvent en connexion lente, et décident en moins de deux minutes. [A]",
        "N'invente aucun texte, aucun chiffre, aucun témoignage ni aucun nom : écris [À COMPLÉTER] pour toute information que je n'ai pas fournie. Ne génère aucune des fonctionnalités listées comme secondaires dans cette première version. » [R]",
      ],
    },
    result: "Un prompt complet de moins de 400 mots, où chaque lettre CLARTE est identifiable et où toute information manquante est signalée plutôt qu'inventée.",
    pitfall: "Croire que la consigne « n'invente rien » suffit : elle réduit le risque, elle ne l'annule pas. C'est le test de la procédure 4 qui détecte ce que l'outil a quand même inventé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: "Envoyer le prompt dans l'outil et observer la première version",
    intro: "Vous envoyez le prompt une seule fois, en entier, et vous regardez le résultat sans intervenir. Entrée nécessaire : le prompt validé et le compte professionnel de l'outil choisi.",
    steps: [
      {
        title: 'Lancer la génération',
        actions: [
          "Ouvrez l'outil (ici Lovable) dans votre navigateur, connectez-vous avec le compte professionnel et démarrez un nouveau projet.",
          "Collez le prompt dans la zone de saisie, vérifiez qu'il n'est pas tronqué (dernière phrase visible), puis envoyez.",
          "Patientez sans rien taper : une correction envoyée pendant la génération perturbe le résultat.",
        ],
      },
      {
        title: 'Observer sans corriger',
        actions: [
          "Quand l'aperçu s'affiche, parcourez toute la page en faisant défiler, sans cliquer sur « Publier ».",
          "Faites une capture d'écran de la page entière et enregistrez-la sous « V1_2026-08-04 ».",
          "Notez dans le journal de projet l'heure, l'outil, la version et la place de quota gratuit consommée.",
        ],
      },
    ],
    example: {
      title: 'Journal des versions — première ligne',
      lines: [
        "Version : V1 | Date : 04/08/2026, 14 h 05 | Outil : Lovable (compte pro) | Prompt : Prompt_generation_atelier_V1 | État : aperçu seul, non publié | Remarque : génération en environ deux minutes, six sections présentes.",
      ],
    },
    result: "Une première version visible dans l'aperçu, enregistrée en capture et consignée dans le journal des versions. Rien n'est publié.",
    pitfall: "Publier tout de suite « pour voir ce que ça donne » : l'adresse publique peut être partagée, indexée ou copiée avant que vous ayez cliqué une seule fois sur la page.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Comparer la première version au cahier des charges',
    intro: "Avant de tester le fonctionnement, vous vérifiez que la page contient ce que le cahier des charges demandait. Un écart ici est un défaut de génération ou de prompt ; un défaut de fonctionnement sera traité à la procédure 4.",
    steps: [
      {
        title: 'Cocher le cahier ligne par ligne',
        actions: [
          "Reprenez l'onglet « Cahier des charges » et, pour chaque ligne 7 à 16, cherchez l'élément correspondant dans l'aperçu.",
          "Notez trois états : présent, partiel, absent. Ajoutez la liste des fonctionnalités de version 2 apparues sans avoir été demandées.",
          "Joignez la capture V1 à votre note.",
        ],
      },
    ],
    table: {
      columns: ['Élément du cahier des charges', 'Dans la V1 ?', 'Constat du 04/08, 14 h 30'],
      rows: [
        ['En-tête : titre, dates, lieu, bouton (lignes 7 et 8)', 'Présent', 'Titre, dates et bouton « Je m\'inscris » visibles dès l\'arrivée'],
        ['Trois acquis (ligne 7)', 'Présent', 'Trois blocs côte à côte, contenu conforme au prompt'],
        ['La formatrice (ligne 7)', 'Partiel', 'Nom et titre corrects ; le reste de la présentation est un texte provisoire'],
        ['Infos pratiques (ligne 7)', 'Présent', 'Dates, durée, lieu, gratuité, déjeuner, 35 places'],
        ['Formulaire nom / e-mail / téléphone (ligne 9)', 'Présent', 'Trois champs et un bouton « Envoyer » ; fonctionnement à tester'],
        ['Bouton accessible pendant le défilement (ligne 10)', 'Absent', 'Un seul bouton, en haut de la page'],
        ['Mention sur les données (ligne 17)', 'Absent', 'Aucune mention sous le formulaire'],
        ['Fonctionnalités de version 2 (lignes 12 et 13)', 'Absent', 'Ni swahili ni SMS : conforme à la restriction'],
        ['Style (ligne 14)', 'Présent', 'Bleu marine et vert sur fond clair ; contraste du texte secondaire à vérifier'],
      ],
    },
    result: "Un tableau d'écarts : deux fonctionnalités manquantes (bouton permanent, mention sur les données) et un contenu partiel (la formatrice), à confirmer au test.",
    tip: "La V1 n'a pas besoin d'être parfaite : l'important est de savoir précisément ce qui manque. C'est ce tableau qui nourrira vos prompts de correction.",
  },

  // ───────────── Procédure 4 — Tester le résultat ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: "Préparer le test : environnement, jeu de données fictives et journal de tests",
    intro: "Le test est une dernière étape non négociable : l'IA ne teste pas à votre place. Vous le préparez comme un petit protocole, pour qu'il soit complet et reproductible après chaque correction.",
    steps: [
      {
        title: "Préparer l'environnement",
        actions: [
          "Ouvrez l'aperçu (ou l'adresse de test fournie par l'outil) dans une fenêtre de navigation privée : vous voyez ce que verra un visiteur, sans vos sessions ouvertes.",
          "Prévoyez un second appareil : votre téléphone, ou celui d'un collègue, pour la partie mobile.",
          "Préparez des données fictives : « Test Amani », test@example.org, 000 000 000.",
        ],
      },
      {
        title: 'Créer le journal de tests',
        actions: [
          "Dans le journal de projet, créez un tableau à cinq colonnes : N°, Zone testée, Action effectuée, État constaté, Gravité.",
          "Fixez la gravité avant de tester : Bloquant (empêche la diffusion : lien cassé, formulaire inutilisable, donnée personnelle non encadrée, texte de remplacement) ; Gênant (nuit à l'objectif : bouton introuvable, mobile écrasé, texte illisible) ; Cosmétique (confort : texte trop long).",
        ],
      },
    ],
    example: {
      title: 'Journal de tests — en-tête et première ligne (05/08/2026, 08 h 30)',
      lines: [
        "N° | Zone testée | Action effectuée | État constaté | Gravité",
        "— | Page V1, fenêtre privée, Chrome sur ordinateur 1366 px | Chargement de l'aperçu | Page chargée en 2 secondes | (aucune)",
      ],
    },
    result: "Un environnement de test propre, trois jeux de données fictives, un journal vide et une échelle de gravité fixée avant le premier clic.",
    pitfall: "Définir la gravité après avoir vu les défauts : vous minimisez ce qui est pénible à corriger. Fixez l'échelle d'abord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Tester les liens, les boutons et la navigation',
    intro: "Chaque lien du menu doit mener à la bonne page ou à la bonne section. Sur une page unique, le menu repose sur des ancres : un clic doit amener à la section annoncée, et le retour doit fonctionner.",
    steps: [
      {
        title: 'Cliquer sur tout',
        actions: [
          "Cliquez, l'un après l'autre, sur chaque élément du menu et notez où vous arrivez.",
          "Cliquez sur chaque bouton de la page (en-tête, formulaire, pied de page).",
          "Cliquez sur chaque lien du pied de page, même s'il semble secondaire.",
          "Sur chaque clic qui ne fait rien, rechargez et recommencez : un défaut répété est un vrai défaut.",
        ],
      },
      {
        title: 'Consigner',
        actions: [
          "Une ligne du journal par défaut constaté : zone, action, état constaté, gravité.",
          "Notez aussi ce qui fonctionne : le journal complet sert de preuve à la livraison.",
        ],
      },
    ],
    table: {
      columns: ['Élément cliqué', 'Résultat attendu', 'Résultat constaté', 'Gravité'],
      rows: [
        ['Menu « Les acquis »', 'Section des trois acquis', 'Conforme', '—'],
        ['Menu « La formatrice »', 'Section formatrice', 'Conforme', '—'],
        ['Menu « Infos pratiques »', 'Section infos pratiques', 'Reste en haut de la page : aucun défilement', 'Bloquant'],
        ['Bouton « Je m\'inscris » (en-tête)', 'Section formulaire', 'Conforme', '—'],
        ['Pied de page : adresse de contact', 'Ouvre un message vers l\'adresse de l\'atelier', 'Adresse affichée mais non cliquable', 'Cosmétique'],
      ],
    },
    result: "Cinq éléments testés, un lien de menu cassé (n°1 du journal, bloquant) et un confort manquant dans le pied de page.",
    pitfall: "Tester seulement la page d'accueil et le premier lien : le défaut est presque toujours dans le lien que personne n'a cliqué.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Tester le formulaire de bout en bout, cas normal puis cas d\'erreur',
    intro: "Un formulaire qui s'affiche n'est pas un formulaire qui fonctionne. Vous le testez en trois temps : une inscription normale, des saisies erronées, puis la vérification que l'inscription est bien arrivée là où vous la lirez.",
    steps: [
      {
        title: 'Cas normal',
        actions: [
          "Remplissez les trois champs avec vos données fictives et cliquez sur « Envoyer ».",
          "Vérifiez qu'une confirmation s'affiche ou qu'un message est réellement envoyé.",
          "Retrouvez l'inscription de test là où l'outil stocke les réponses (tableau, e-mail de notification, export). Si vous ne la trouvez pas, demandez à l'outil où les réponses sont enregistrées et comment les exporter.",
        ],
      },
      {
        title: "Cas d'erreur",
        actions: [
          "Envoyez le formulaire vide : un message doit demander de compléter les champs.",
          "Saisissez « abc » dans le champ e-mail et « bonjour » dans le téléphone : la saisie doit être refusée ou signalée.",
          "Cliquez deux fois de suite sur « Envoyer » : une seule inscription doit être enregistrée.",
        ],
      },
    ],
    table: {
      columns: ['Test', 'Saisie', 'Résultat constaté', 'Gravité'],
      rows: [
        ['Cas normal', 'Test Amani · test@example.org · 000 000 000', 'Message « Merci, votre inscription est enregistrée » ; ligne retrouvée dans le tableau des réponses', '—'],
        ['Formulaire vide', 'Aucun champ rempli', 'Refus avec message de champ obligatoire', '—'],
        ['E-mail invalide', 'abc', 'Accepté et enregistré', 'Bloquant'],
        ['Double clic', 'Deux clics rapides', 'Une seule ligne enregistrée', '—'],
      ],
    },
    result: "Le formulaire fonctionne dans le cas normal ; un défaut bloquant est constaté : une adresse e-mail sans « @ » est acceptée (n°5 du journal).",
    tip: "N'oubliez pas de supprimer vos inscriptions de test avant la diffusion : sinon l'organisateur compte 36 inscrits pour 35 places en comptant « Test Amani ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: "Tester l'affichage mobile, puis sur un vrai téléphone",
    intro: "Un site validé uniquement sur l'écran large de votre ordinateur peut afficher un menu illisible, un bouton inaccessible ou un texte écrasé sur un téléphone, précisément le format depuis lequel la plupart des visiteurs le découvriront. Ici, c'est le format du public cible.",
    steps: [
      {
        title: 'Simuler un téléphone sur ordinateur',
        actions: [
          "Dans Chrome ou Edge, appuyez sur F12, puis Ctrl+Maj+M pour afficher la barre de simulation d'appareil.",
          "Choisissez une largeur de 360 px (téléphone Android courant), puis 390 px. Faites défiler toute la page.",
          "Dans l'onglet Réseau, choisissez un ralentissement « 3G lente » et rechargez : la page doit rester utilisable.",
        ],
      },
      {
        title: 'Vérifier sur un vrai téléphone',
        actions: [
          "Ouvrez le lien d'aperçu sur votre téléphone, en position verticale puis horizontale.",
          "Contrôlez : texte lisible sans zoom ; boutons assez grands pour le pouce (environ 44 à 48 px de haut) ; aucun texte coupé ; formulaire utilisable avec le clavier ouvert.",
        ],
      },
    ],
    example: {
      title: 'Journal de tests — constats du 05/08/2026, 09 h 10',
      lines: [
        "N°3 | Section « Ce que vous saurez faire » | 360 px de large | Les trois blocs restent côte à côte : texte écrasé, difficile à lire | Gênant",
        "N°2 | Bouton « Je m'inscris » | Défilement jusqu'aux infos pratiques | Le bouton n'est plus à l'écran : il faut remonter | Gênant",
        "Autres contrôles : 3G lente → page affichée en 6 secondes, acceptable ; boutons de 48 px de haut ; formulaire utilisable.",
      ],
    },
    result: "Deux défauts d'affichage mobile consignés (n°2 et n°3) et trois contrôles passés.",
    pitfall: "Se contenter de réduire la fenêtre de l'ordinateur : le clavier du téléphone, la connexion lente et la taille du pouce ne s'y simulent pas. Le vrai téléphone reste indispensable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Traquer les textes de remplacement et relire chaque information',
    intro: "Même avec la consigne « n'invente rien », un générateur laisse parfois un texte provisoire à un endroit où vous ne regardez pas. Ce texte ne doit jamais subsister dans la version que vous diffusez.",
    steps: [
      {
        title: 'Chercher les restes',
        actions: [
          "Sur la page d'aperçu, appuyez sur Ctrl+F et cherchez successivement : lorem, ipsum, [À COMPLÉTER], Prénom, Nom, exemple, your.",
          "Passez en revue les images et leurs légendes : une image générique ou une légende absente est un texte de remplacement visuel.",
          "Contrôlez le titre de l'onglet du navigateur et le texte des boutons.",
        ],
      },
      {
        title: 'Relire chaque fait',
        actions: [
          "Comparez chaque date, heure, lieu, chiffre et nom de la page avec le cahier des charges validé.",
          "Cochez chaque fait vérifié dans le journal de tests.",
        ],
      },
    ],
    example: {
      title: 'Résultats de la recherche — fil rouge',
      lines: [
        "« lorem » : 1 occurrence — section formatrice, paragraphe de présentation : « Lorem ipsum dolor sit amet… » → n°4, bloquant.",
        "« [À COMPLÉTER] » : 0 occurrence. « Prénom » : 0. « exemple » : 0.",
        "Faits relus : 22 et 23 septembre 2026 ✔ ; 8 h 30 – 16 h 30 ✔ ; 35 places ✔ ; clôture le 11 septembre ✔ ; « Sylvie Mwamini, pharmacienne » ✔.",
      ],
    },
    result: "Un texte provisoire trouvé (n°4, bloquant), tous les faits relus et conformes au cahier des charges.",
    tip: "Faites la recherche Ctrl+F aussi après chaque correction : un générateur peut réintroduire un texte provisoire en modifiant un bloc voisin.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Vérifier la collecte de données personnelles et clore le journal de tests',
    intro: "Un formulaire généré collecte des données personnelles (nom, e-mail, téléphone) sans mention légale ni information sur leur usage par défaut. Avant toute mise en ligne réelle, une mention minimale doit être présente, faute de quoi le formulaire lui-même devient un risque de conformité.",
    steps: [
      {
        title: 'Contrôler la mention',
        actions: [
          "Cherchez, près du formulaire et dans le pied de page, un texte qui dit quelles données sont collectées, pourquoi, pendant combien de temps et à qui s'adresser.",
          "Si elle manque : consignez-la comme bloquante. Si elle est présente : vérifiez qu'elle est fidèle à la ligne 17 du cahier.",
        ],
      },
      {
        title: 'Clore et classer le journal',
        actions: [
          "Numérotez les constats de 1 à n et comptez par gravité.",
          "Triez : bloquants d'abord. Ce tableau devient l'entrée de la procédure 5.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Zone testée', 'État constaté', 'Gravité'],
      rows: [
        ['1', 'Menu « Infos pratiques »', 'Ne mène à aucune section', 'Bloquant'],
        ['2', "Bouton « Je m'inscris »", "Visible une seule fois, en haut de la page", 'Gênant'],
        ['3', 'Section « Ce que vous saurez faire » sur mobile', 'Trois blocs côte à côte, texte écrasé', 'Gênant'],
        ['4', 'Section formatrice', 'Texte « Lorem ipsum »', 'Bloquant'],
        ['5', 'Champ e-mail', 'Une saisie sans « @ » est acceptée', 'Bloquant'],
        ['6', 'Pied de page / formulaire', "Aucune mention sur l'usage des données", 'Bloquant'],
        ['7', 'Section infos pratiques', 'Texte gris clair sur fond bleu clair : lecture pénible', 'Gênant'],
        ['8', 'Paragraphe d\'introduction', 'Neuf lignes avant le premier bouton', 'Cosmétique'],
      ],
    },
    result: "Un journal de huit constats : quatre bloquants (1, 4, 5, 6), trois gênants (2, 3, 7), un cosmétique (8). Aucune diffusion n'est possible tant que les quatre bloquants ne sont pas levés.",
    pitfall: "Considérer l'absence de mention comme « un détail à ajouter plus tard » : une fois le lien partagé, des données personnelles sont collectées sans cadre. Elle est bloquante.",
  },

  // ───────────── Procédure 5 — Itérer ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Prioriser les constats : un problème, un prompt, un test',
    intro: "Une première version n'est presque jamais parfaite, et ce n'est pas le problème. Le problème apparaît quand la demande de correction est vague, ou quand vous demandez dix corrections d'un coup : vous ne savez plus laquelle a cassé quoi. Cette étape transforme le journal de tests en plan de corrections.",
    steps: [
      {
        title: 'Classer et ordonner',
        actions: [
          "Classez chaque constat selon les quatre types de la bibliothèque : Mise en page, Couleur & style, Contenu, Fonctionnalité.",
          "Ordonnez : bloquants d'abord, puis gênants, puis cosmétiques.",
          "Attribuez un numéro de prompt par constat : un constat, un prompt.",
        ],
      },
      {
        title: 'Fixer les règles de la boucle',
        actions: [
          "Après chaque prompt : testez le point corrigé, puis relisez rapidement le reste de la page.",
          "Si la correction casse autre chose : demandez à l'outil de revenir à la version précédente (la plupart des outils conservent l'historique) et reformulez.",
          "Notez chaque version dans le journal des versions.",
        ],
      },
    ],
    table: {
      columns: ['Prompt', 'Constat', 'Type (bibliothèque)', 'Gravité'],
      rows: [
        ['1', 'N°4 — texte « Lorem ipsum » (formatrice)', 'Contenu', 'Bloquant'],
        ['2', 'N°6 — aucune mention sur les données', 'Contenu', 'Bloquant'],
        ['3', 'N°1 — lien de menu « Infos pratiques »', 'Fonctionnalité', 'Bloquant'],
        ['4', 'N°5 — e-mail sans « @ » accepté', 'Fonctionnalité', 'Bloquant'],
        ['5', 'N°2 — bouton visible une seule fois', 'Fonctionnalité', 'Gênant'],
        ['6', 'N°3 — trois blocs écrasés sur mobile', 'Mise en page', 'Gênant'],
        ['7', 'N°7 — texte gris clair sur fond bleu clair', 'Couleur & style', 'Gênant'],
        ['8', 'N°8 — introduction de neuf lignes', 'Contenu', 'Cosmétique'],
      ],
    },
    result: "Un plan de huit prompts ordonné par gravité, chacun rattaché à un type de correction et à un constat du journal.",
    pitfall: "Regrouper les huit corrections dans un seul message : l'outil en traite sept bien et la huitième mal, et vous ne savez plus quelle version restaurer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Corriger le contenu bloquant (prompts 1 et 2) : texte provisoire et mention sur les données',
    intro: "Le contenu manquant ne se corrige pas par un jugement (« complète la page ») mais par un texte que vous fournissez. Pour la mention, le texte est celui validé par la conformité : vous le donnez à l'outil, vous ne le laissez pas le rédiger.",
    steps: [
      {
        title: 'Rédiger le prompt 1 (méthode STAR)',
        actions: [
          "Situation : décrivez ce que dit la page aujourd'hui, avec son emplacement.",
          "Tâche : donnez le texte exact à mettre à la place.",
          "Action : demandez le remplacement, uniquement dans cette section.",
          "Résultat : un critère vérifiable, ici « plus aucune occurrence de lorem ipsum ».",
        ],
      },
      {
        title: 'Rédiger le prompt 2 (mention)',
        actions: [
          "Fournissez le texte validé, mot pour mot, et son emplacement : sous le bouton d'envoi, en petits caractères lisibles.",
          "Demandez en plus une case à cocher d'acceptation seulement si votre organisation l'exige.",
        ],
      },
    ],
    example: {
      title: 'Prompts 1 et 2 — fil rouge (à copier)',
      lines: [
        "Prompt 1 : « Situation : dans la section « La formatrice », le paragraphe de présentation affiche un texte provisoire « Lorem ipsum… ». Tâche : je veux à la place ce texte exact : « Sylvie Mwamini est pharmacienne et responsable de l'appui pharmaceutique du projet Route Santé Nord-Kivu. Elle accompagne les centres de santé partenaires dans la gestion de leurs stocks de médicaments. » Action : remplace uniquement ce paragraphe, sans changer le nom, le titre ni le reste de la section. Résultat attendu : plus aucun texte provisoire dans la page, la section garde la même mise en forme. »",
        "Prompt 2 : « Situation : le formulaire d'inscription n'a aucune mention sur l'usage des données personnelles. Tâche : je veux une mention visible sous le bouton « Envoyer ». Action : ajoute, en petits caractères lisibles, ce texte exact : « Les informations recueillies (nom, e-mail, téléphone) servent uniquement à organiser l'atelier des 22 et 23 septembre 2026 et à vous envoyer les informations pratiques. Elles sont conservées jusqu'au 31 octobre 2026 puis supprimées, et ne sont pas transmises à des tiers. Contact : atelier.stocks@horizon-grands-lacs.example. » Résultat attendu : la mention est lisible sur mobile, sans défilement horizontal, et ne chevauche aucun autre élément. »",
      ],
    },
    result: "Deux prompts ciblés, chacun avec un texte fourni et un critère vérifiable. Après envoi : recherche de « lorem » → 0 résultat ; mention visible sous le bouton, lisible sur mobile.",
    pitfall: "Écrire « ajoute une mention légale » : l'outil rédige un texte générique, parfois faux (durée, destinataires). Vous fournissez le texte, validé par la personne compétente.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Corriger les fonctionnalités bloquantes (prompts 3 et 4) : lien de menu et formulaire',
    intro: "Une fonctionnalité se corrige en décrivant le comportement attendu et un critère de test précis. Le prompt 4 en profite pour intégrer un champ « Centre de santé » demandé par Furaha en cours de route : une demande de fonctionnalité entre dans la même boucle, jamais en parallèle.",
    steps: [
      {
        title: 'Prompt 3 — le lien de menu',
        actions: [
          "Situation : nommez le lien et ce qu'il fait aujourd'hui (rien).",
          "Action : demandez que le lien amène en douceur à la section « Informations pratiques ».",
          "Résultat : le clic fonctionne sur ordinateur et sur mobile.",
        ],
      },
      {
        title: 'Prompt 4 — le formulaire',
        actions: [
          "Demandez la validation de l'e-mail, l'ajout du champ « Centre de santé » (obligatoire) et un message d'erreur sous chaque champ invalide.",
          "Écrivez le critère de test en trois cas : e-mail sans @, champ vide, saisie correcte.",
        ],
      },
    ],
    example: {
      title: 'Prompts 3 et 4 — fil rouge (à copier)',
      lines: [
        "Prompt 3 : « Situation : dans le menu en haut de la page, le lien « Infos pratiques » ne mène à aucune section : le clic ne fait rien. Tâche : je veux que ce lien amène à la section « Informations pratiques », sans changer les autres liens. Action : relie ce lien à la section « Informations pratiques » avec un défilement doux. Résultat attendu : un clic sur « Infos pratiques » affiche le début de cette section, sur ordinateur comme sur mobile. »",
        "Prompt 4 : « Situation : le formulaire accepte une saisie « abc » dans le champ e-mail et ne demande pas le centre de santé. Tâche : je veux un formulaire qui refuse une adresse invalide et collecte le centre de santé. Action : ajoute un champ obligatoire « Centre de santé » entre le nom et l'e-mail ; refuse toute adresse e-mail sans « @ » ni domaine ; affiche un message rouge sous le champ en erreur ; dans la mention sous le formulaire, remplace « (nom, e-mail, téléphone) » par « (nom, centre de santé, e-mail, téléphone) ». Résultat attendu : « abc » est refusé avec un message ; un formulaire avec un champ vide est refusé ; une saisie correcte affiche la confirmation. »",
      ],
    },
    result: "Le lien de menu mène à la bonne section ; le formulaire refuse « abc » et un champ vide, accepte une saisie correcte, et collecte désormais quatre informations (nom, centre de santé, e-mail, téléphone).",
    pitfall: "Ajouter le champ « Centre de santé » sans mettre à jour la mention sur les données : une donnée de plus est collectée, la mention doit la citer. C'est pourquoi le prompt 4 corrige aussi la mention : une fonctionnalité qui change les données collectées change le texte légal.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: "Corriger l'appel à l'action (prompt 5) : un bouton accessible pendant tout le défilement",
    intro: "C'est la correction type de la méthode STAR : un problème observé, un mécanisme concret, un critère de test. Elle reprend l'exemple de la section Outils du module.",
    steps: [
      {
        title: 'Rédiger le prompt 5',
        actions: [
          "Situation : décrivez l'état actuel exact — le bouton n'apparaît qu'une fois, en haut.",
          "Tâche : fixez l'objectif — le bouton reste accessible à tout moment — avec la contrainte de ne pas masquer le contenu.",
          "Action : nommez le mécanisme — une barre fixe en bas de l'écran — et où elle s'applique (ordinateur et mobile).",
          "Résultat : un critère vérifiable — cliquer depuis n'importe quelle section sans remonter, sans qu'aucun titre ne soit caché.",
        ],
      },
    ],
    example: {
      title: 'Prompt 5 — fil rouge (à copier)',
      lines: [
        "« Situation : sur la version générée, le bouton « Je m'inscris » n'apparaît qu'une fois, tout en haut de la page ; un visiteur qui a lu jusqu'aux informations pratiques doit remonter pour s'inscrire. Tâche : je veux que le bouton d'inscription reste accessible à tout moment pendant la lecture, sans obliger à remonter. Action : ajoute une barre fixe en bas de l'écran contenant le bouton « Je m'inscris », visible en permanence pendant le défilement, sur ordinateur comme sur mobile, sans masquer le contenu au moment du chargement initial. Résultat attendu : je dois pouvoir cliquer sur le bouton depuis n'importe quelle section sans faire défiler vers le haut, sans que cette barre ne cache un titre ou un bloc de texte important. »",
      ],
    },
    result: "Après envoi, test : sur ordinateur et sur téléphone, le bouton reste visible du haut au bas de la page ; un clic mène au formulaire ; aucun titre n'est masqué.",
    pitfall: "Écrire « mets le bouton plus visible » : l'outil le déplace, change sa couleur ou le grossit, sans que vous sachiez lequel de ces gestes était souhaité. Nommez le mécanisme.",
    tip: "Une barre fixe en bas de l'écran sur mobile peut entrer en conflit avec le clavier ou avec un autre élément fixe : c'est précisément ce que la non-régression de la procédure 6 contrôlera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Corriger la mise en page mobile (prompt 6) sans changer la version ordinateur',
    intro: "Une correction de mise en page doit toujours préciser ce qui fonctionne déjà. Ici, la version ordinateur est correcte : la contrainte de non-régression est la moitié du prompt.",
    steps: [
      {
        title: 'Rédiger le prompt 6',
        actions: [
          "Situation : comparez explicitement le comportement défaillant (mobile) et le comportement correct (ordinateur).",
          "Tâche : fixez la contrainte — lisible sur mobile sans changer l'ordinateur.",
          "Action : précisez le mécanisme — empilement vertical des trois blocs uniquement sur petits écrans.",
          "Résultat : critère de test — chaque bloc occupe toute la largeur et se lit sans zoom.",
        ],
      },
    ],
    example: {
      title: 'Prompt 6 — fil rouge (à copier)',
      lines: [
        "« Situation : sur mobile, la section « Ce que vous saurez faire » affiche trois blocs de texte côte à côte, ce qui les rend écrasés et difficiles à lire sur un petit écran, alors qu'ils s'affichent correctement côte à côte sur ordinateur. Tâche : je veux que cette section reste lisible sur mobile sans changer son apparence sur ordinateur. Action : fais en sorte que les trois blocs s'empilent verticalement l'un au-dessus de l'autre uniquement sur les écrans de taille mobile, en conservant la disposition côte à côte actuelle sur les écrans plus larges. Résultat attendu : sur un écran de smartphone, chaque bloc doit occuper toute la largeur disponible et rester entièrement lisible sans avoir besoin de zoomer, sans que la version ordinateur ne soit modifiée. »",
      ],
    },
    result: "Test à 360 px puis sur un vrai téléphone : les trois blocs sont empilés, pleine largeur, lisibles sans zoom. À 1366 px, ils sont toujours côte à côte : la version ordinateur est inchangée.",
    pitfall: "Oublier de retester la version ordinateur : une correction « pour le mobile » peut déformer l'écran large, et vous ne le voyez que lorsque le demandeur ouvre la page sur son PC.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Corriger couleur et texte (prompts 7 et 8), puis tenir le journal des versions',
    intro: "Deux derniers prompts, de gravité moindre, qui illustrent les deux types restants de la bibliothèque : Couleur & style et Contenu. Vous en profitez pour clore le journal des versions, qui permet de revenir en arrière.",
    steps: [
      {
        title: 'Prompts 7 et 8',
        actions: [
          "Prompt 7 : citez la couleur actuelle exacte et la couleur cible, avec le code.",
          "Prompt 8 : fixez une longueur maximale, ce qu'on garde (chiffre clé, appel à l'action) et ce qu'on ne touche pas (titre).",
          "Envoyez un prompt à la fois ; testez ; passez au suivant.",
        ],
      },
      {
        title: 'Clore le journal des versions',
        actions: [
          "Une ligne par version : numéro, date et heure, prompt appliqué, résultat du test.",
          "Gardez la capture d'écran de la dernière version stable.",
        ],
      },
    ],
    example: {
      title: 'Prompts 7 et 8 — fil rouge (à copier)',
      lines: [
        "Prompt 7 : « Situation : dans la section « Informations pratiques », le texte est gris clair sur un fond bleu clair, difficile à lire. Tâche : améliorer la lisibilité sans changer l'identité visuelle. Action : remplace le fond bleu clair par un blanc cassé et le texte gris par un gris plus foncé (#374151), sans modifier le bleu marine ni le vert des titres et des boutons. Résultat attendu : le texte se lit sans effort sur mobile en plein soleil, avec un contraste largement supérieur au minimum de 4,5 pour 1 recommandé pour le texte courant. »",
        "Prompt 8 : « Situation : le paragraphe d'introduction compte neuf lignes avant le premier bouton. Tâche : une introduction courte. Action : réduis-le à trois phrases maximum, en gardant les dates, le lieu et la mention des 35 places, sans changer le titre. Résultat attendu : le bouton « Je m'inscris » apparaît sans défilement sur un écran de 360 px de large. »",
      ],
    },
    table: {
      columns: ['Version', 'Date et heure', 'Prompt appliqué', 'Résultat du test'],
      rows: [
        ['V2', '05/08, 10 h 40', '1 — texte de la formatrice', 'Plus de « lorem » ✔'],
        ['V3', '05/08, 11 h 05', '2 — mention sur les données', 'Visible sous « Envoyer », lisible sur mobile ✔'],
        ['V4', '05/08, 11 h 30', '3 — lien « Infos pratiques »', 'Défile jusqu\'à la section ✔'],
        ['V5', '05/08, 14 h 15', '4 — formulaire (e-mail, centre de santé)', '« abc » refusé, centre de santé obligatoire ✔'],
        ['V6', '06/08, 08 h 40', '5 — barre fixe du bouton', 'Visible partout, aucun titre masqué ✔'],
        ['V7', '06/08, 09 h 05', '6 — blocs empilés sur mobile', 'Empilés à 360 px, inchangés à 1366 px ✔'],
        ['V8', '06/08, 09 h 25', '7 — contraste du texte', 'Gris #374151 sur blanc cassé ✔'],
        ['V9', '06/08, 09 h 40', '8 — introduction raccourcie', 'Bouton visible sans défilement à 360 px ✔'],
      ],
    },
    result: "Huit corrections, huit versions, chacune testée : le journal de tests passe de huit constats ouverts à zéro, et chaque étape peut être restaurée.",
    tip: "Un journal des versions de huit lignes prend deux minutes à tenir. Le jour où une correction casse la page, c'est lui qui vous dit à quelle version revenir.",
  },

  // ───────────── Procédure 6 — Retester, valider, diffuser ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Rejouer le test complet : la non-régression',
    intro: "Huit corrections ont été appliquées. Chacune a été testée isolément, mais une correction peut en casser une autre. Avant toute diffusion, vous rejouez le protocole entier de la procédure 4 sur la dernière version.",
    steps: [
      {
        title: 'Rejouer le protocole',
        actions: [
          "Ouvrez la dernière version (V9) dans une fenêtre privée et repassez dans l'ordre : liens, formulaire (cas normal et erreurs), mobile à 360 px, recherche des textes de remplacement, mention sur les données.",
          "Ajoutez un contrôle propre aux corrections apportées : sur mobile, ouvrez le clavier en touchant un champ du formulaire et vérifiez que le bouton « Envoyer » reste atteignable.",
          "Consignez chaque nouveau constat à la suite du journal, avec sa gravité.",
        ],
      },
      {
        title: 'Corriger un éventuel nouveau défaut',
        actions: [
          "Appliquez la même boucle : un problème, un prompt STAR, un test, une ligne dans le journal des versions.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — retest du 06/08/2026, 09 h 50',
      lines: [
        "Constats 1 à 8 : tous levés. Recherche « lorem » : 0 résultat. Formulaire : « abc » refusé, centre de santé obligatoire.",
        "Nouveau constat n°9 : sur mobile, quand le clavier s'ouvre, la barre fixe du bouton « Je m'inscris » se place au-dessus du clavier et masque le bouton « Envoyer » → Bloquant sur mobile.",
        "Prompt 9 : « Situation : sur smartphone, quand le clavier s'ouvre pour remplir le formulaire, la barre fixe du bouton « Je m'inscris » masque le bouton « Envoyer ». Tâche : que le formulaire reste utilisable sans toucher au reste de la page. Action : masque la barre fixe tant que la section du formulaire est affichée à l'écran, et fais-la réapparaître dès qu'on quitte cette section. Résultat attendu : en remplissant le formulaire sur mobile, le bouton « Envoyer » est toujours atteignable et la barre fixe est visible ailleurs sur la page. »",
        "Version V10 (10 h 05) : bouton « Envoyer » atteignable clavier ouvert ✔ ; barre fixe visible ailleurs ✔.",
      ],
    },
    result: "Un journal de tests à zéro constat ouvert sur la dernière version, y compris celui que la correction n°5 avait créé.",
    pitfall: "Considérer que « chaque correction a été testée » suffit : c'est justement l'interaction entre deux corrections (barre fixe et clavier) que personne ne regarde.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Faire tester la page par une deuxième personne, sur un vrai téléphone',
    intro: "Vous connaissez la page : vous cliquez là où il faut. Une deuxième personne qui ne la connaît pas révèle ce que vous ne voyez plus. Le test se fait sur le téléphone de cette personne, dans les conditions réelles du public.",
    steps: [
      {
        title: 'Préparer le scénario',
        actions: [
          "Choisissez un testeur proche du public (ici le logisticien de Goma) et écrivez un scénario d'une phrase : « Vous êtes responsable d'un centre de santé partenaire ; vous recevez ce lien par WhatsApp ; inscrivez-vous à l'atelier. »",
          "Prévoyez un chronomètre et ne donnez aucune aide.",
        ],
      },
      {
        title: 'Observer et consigner',
        actions: [
          "Regardez l'écran sans parler : notez les hésitations, les erreurs de saisie, les endroits où il fait défiler en cherchant.",
          "Notez le temps total, comparez-le à l'objectif (moins de deux minutes) et recueillez une remarque libre.",
          "Transformez chaque remarque en constat avec une gravité.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — test de Gédéon Safari, 06/08/2026, 10 h 30',
      lines: [
        "Appareil : téléphone Android, connexion mobile 3G. Scénario donné sans aide.",
        "Résultat : inscription terminée en 1 min 50 s, confirmation affichée.",
        "Hésitation : 10 secondes sur « Centre de santé » (il cherche une liste de choix). Décision : champ libre accepté pour cette version, liste à noter pour la version 2.",
        "Constat n°10, gênant : le champ « Téléphone » ouvre le clavier de lettres, pas le clavier numérique.",
        "Prompt 10 : « Situation : sur Android, le champ « Téléphone » ouvre le clavier de lettres. Tâche : faciliter la saisie du numéro sans changer le formulaire. Action : fais en sorte que ce champ ouvre le clavier numérique sur mobile, en gardant les autres champs inchangés. Résultat attendu : en touchant le champ « Téléphone » sur Android, le clavier numérique s'affiche. » → V11, test refait par Gédéon ✔.",
      ],
    },
    result: "Un test en situation réelle en moins de deux minutes, un constat supplémentaire corrigé (V11) et une idée de version 2 consignée : la liste des centres de santé.",
    tip: "Ne testez pas avec la personne qui a demandé la page : elle sait ce qu'elle veut voir. Un testeur du public, qui ne vous aide pas, vaut dix relectures.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: "Valider la mention sur les données, obtenir l'accord du demandeur, purger les tests",
    intro: "Trois verrous avant la publication : la mention est validée par la personne compétente telle qu'elle s'affiche à l'écran, le demandeur donne son accord par écrit, et les données de test sont supprimées.",
    steps: [
      {
        title: 'Valider la mention et la page',
        actions: [
          "Envoyez à la personne en charge de la conformité une capture de la mention sur mobile, avec le texte exact et la liste des données collectées.",
          "Envoyez au demandeur le lien d'aperçu et demandez-lui de le regarder sur son téléphone, avec une question fermée : « Es-tu d'accord pour diffusion ? ».",
          "Conservez les deux réponses écrites dans le journal de projet.",
        ],
      },
      {
        title: 'Purger les données de test',
        actions: [
          "Ouvrez le tableau des réponses du formulaire et supprimez chaque inscription de test (« Test Amani », « Gédéon Test »).",
          "Vérifiez qu'il ne reste aucune ligne avant de publier.",
        ],
      },
    ],
    table: {
      columns: ['Verrou', 'Qui', 'Réponse', 'Date'],
      rows: [
        ['Mention sur les données conforme (4 données, durée jusqu\'au 31/10/2026, contact)', 'Esther Mapendo, conformité', '« Conforme. » ', '06/08, 11 h 10'],
        ['Accord de diffusion sur téléphone', 'Furaha Bisimwa', '« OK pour diffusion, bravo. »', '06/08, 12 h 20'],
        ['Inscriptions de test supprimées', 'Amani Kahindo', '0 ligne dans le tableau des réponses', '06/08, 12 h 30'],
      ],
    },
    result: "Trois verrous levés et conservés par écrit : conformité, accord du demandeur, tableau de réponses vide.",
    pitfall: "Publier en laissant « Test Amani » dans la liste : l'organisateur compte 36 inscrits, ou contacte une personne fictive. Purgez, et recontrôlez le tableau juste avant de publier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Publier, tester le lien public et rédiger la note de livraison',
    intro: "La publication est la dernière action, pas la première. Vous testez ensuite le lien public comme un visiteur, puis vous remettez au demandeur une note qui dit ce qui a été corrigé et comment c'est vérifié.",
    steps: [
      {
        title: 'Publier et vérifier',
        actions: [
          "Cliquez sur le bouton de publication de l'outil, notez l'adresse fournie et le numéro de la version publiée.",
          "Ouvrez l'adresse publique dans une fenêtre privée, puis sur un téléphone en connexion mobile (pas en Wi-Fi) : refaites en deux minutes le parcours inscription.",
          "Supprimez cette dernière inscription de test, puis partagez le lien.",
        ],
      },
      {
        title: 'Rédiger la note de livraison',
        actions: [
          "5 à 8 lignes : l'objectif, la version publiée, ce que chaque itération a corrigé, comment chaque correction a été vérifiée, ce qui est reporté en version 2.",
          "Joignez le cahier des charges, le journal de tests et le journal des versions.",
        ],
      },
    ],
    example: {
      title: 'Note de livraison — fil rouge (vendredi 07/08/2026)',
      lines: [
        "Page d'inscription à l'atelier « Gérer les stocks de médicaments au centre de santé » (22-23/09/2026), version V11, publiée le 07/08 à 13 h 40 ; objectif : 35 inscriptions avant le 11/09.",
        "Contenu : texte provisoire de la formatrice remplacé par le texte fourni ; mention sur les données ajoutée et validée par la conformité (vérifiée sur mobile).",
        "Fonctionnement : lien du menu relié à « Informations pratiques » ; e-mail invalide refusé, champ « Centre de santé » ajouté ; clavier numérique pour le téléphone ; vérifié par saisies fictives puis par un test réel sur Android (1 min 50 s).",
        "Appel à l'action : barre fixe du bouton « Je m'inscris », masquée quand le formulaire est affiché pour ne pas cacher « Envoyer » ; vérifié à 360 px et sur ordinateur.",
        "Mise en page et style : blocs empilés sur mobile, version ordinateur inchangée ; texte #374151 sur blanc cassé ; introduction ramenée à trois phrases.",
        "Reporté en version 2 : version en swahili, rappel par SMS, liste déroulante des centres de santé.",
        "Pièces jointes : cahier des charges 14/14, journal de tests (10 constats levés), journal des versions V1 à V11.",
      ],
    },
    result: "Une page publiée le vendredi 07/08 à 13 h 40, lien public testé sur mobile, note de livraison de 7 lignes envoyée à Furaha avec ses trois pièces jointes. Le lien est diffusé à 14 h.",
    pitfall: "Diffuser le lien « d'aperçu » au lieu de l'adresse publiée : l'aperçu peut cesser de fonctionner à la prochaine correction. Diffusez uniquement l'adresse publique, après l'avoir testée.",
  },

  // ───────────── Procédure 7 — Application avec logique métier ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Écrire la règle métier et les cas de test avant de générer',
    intro: "Une application avec logique métier — calcul, données, comptes — suit la même méthode que la page, avec une exigence de plus : l'IA ne connaît pas votre règle de calcul. Vous l'écrivez, avec des exemples dont vous connaissez la réponse, avant de générer quoi que ce soit. Cette procédure prolonge le module avec une pratique courante : elle s'applique ici à un petit calculateur de réapprovisionnement pour l'atelier.",
    steps: [
      {
        title: 'Formuler la règle en une phrase et en calcul',
        actions: [
          "Écrivez la règle en langage courant, puis sous forme de calcul avec les noms des variables.",
          "Précisez les cas limites : que se passe-t-il si le résultat est négatif ? si une donnée manque ? si une valeur est impossible ?",
        ],
      },
      {
        title: 'Écrire quatre cas de test avec leur résultat attendu',
        actions: [
          "Un cas normal, un deuxième cas normal, un cas où le stock suffit, un cas de saisie invalide.",
          "Calculez à la main le résultat attendu de chacun : ce sont eux qui diront plus tard si l'application est juste.",
        ],
      },
    ],
    example: {
      title: 'Règle du calculateur — fil rouge',
      lines: [
        "Règle : quantité à commander = consommation mensuelle × (délai de livraison + stock de sécurité, en mois) − stock actuel ; jamais négative.",
        "Cas limites : si le résultat est négatif, afficher 0 et « Stock suffisant » ; stock négatif → erreur « Le stock ne peut pas être négatif » ; champ vide → erreur « Complétez tous les champs ».",
        "Cas 1 : conso 1 200, délai 1,5, sécurité 1, stock 1 800 → cible 1 200 × 2,5 = 3 000 → à commander 1 200.",
        "Cas 2 : conso 800, délai 1, sécurité 0,5, stock 600 → cible 1 200 → à commander 600.",
        "Cas 3 : conso 500, délai 1, sécurité 1, stock 1 400 → cible 1 000 → brut − 400 → afficher 0 et « Stock suffisant ».",
        "Cas 4 : stock = −50 → message d'erreur, aucun calcul.",
      ],
    },
    result: "Une règle écrite, des cas limites décidés, quatre cas de test dont vous connaissez les réponses avant la première génération.",
    pitfall: "Laisser l'outil « deviner la formule » : il en choisit une plausible, sans que vous puissiez dire si elle est juste. Sans cas de test calculés à la main, vous ne pouvez pas la vérifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: "Adapter le cahier des charges à une application : les mêmes lignes du gabarit, un autre contenu",
    intro: "Le gabarit reste le même : 14 lignes. Mais le contenu des lignes change, parce que le « résultat » n'est plus un nombre d'inscriptions : c'est un calcul juste.",
    steps: [
      {
        title: 'Reprendre le gabarit ligne par ligne',
        actions: [
          "Ligne 6 (objectif) : un résultat vérifiable par les cas de test.",
          "Lignes 9 à 11 (indispensables) : la règle de calcul, le contrôle des saisies, l'affichage du résultat avec message d'alerte.",
          "Ligne 17 (données personnelles) : écrivez explicitement si l'application stocke ou non des données. Une application qui calcule sans rien enregistrer évite la question.",
          "Ligne 19 (outil) : application avec logique métier → Bolt, d'après la grille de décision.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Élément à préciser', 'Votre réponse (calculateur)'],
      rows: [
        ['Objectif', 'Résultat mesurable attendu', 'Les quatre cas de test donnent le résultat attendu ; un participant de l\'atelier obtient sa quantité en moins d\'une minute.'],
        ['Fonctionnalités indispensables', 'n°1', 'Calcul : conso × (délai + sécurité) − stock, jamais négatif.'],
        ['Fonctionnalités indispensables', 'n°2', 'Contrôle des saisies : champ vide, stock négatif, valeur non numérique.'],
        ['Fonctionnalités indispensables', 'n°3', 'Résultat clair avec message « Stock suffisant » quand la quantité est 0.'],
        ['Fonctionnalités secondaires (v2)', 'n°1 et n°2', 'Liste de plusieurs produits ; export en fichier Excel.'],
        ['Contraintes', 'Données personnelles collectées', 'Aucune : le calcul se fait dans le navigateur, rien n\'est enregistré ; aucune mention nécessaire.'],
        ['Outil retenu', 'Outil choisi et raison', 'Bolt : application avec logique de calcul, déploiement rapide pour la tester.'],
      ],
    },
    result: "Un cahier des charges d'application qui contient la règle, les contrôles et l'absence de données personnelles : tout ce qui permet de tester l'application.",
    tip: "Une application qui ne stocke aucune donnée personnelle n'a pas la contrainte de la mention légale : c'est un argument pour la tenir ainsi dans une première version.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: "Générer l'application avec un prompt CLARTE qui contient la règle et les cas de test",
    intro: "Le prompt d'une application reprend la structure du prompt de génération de la page. Il y ajoute deux éléments : la règle de calcul en toutes lettres, et les cas de test, pour que l'outil sache ce que « juste » veut dire.",
    steps: [
      {
        title: 'Assembler et envoyer',
        actions: [
          "Partez du modèle de la bibliothèque, section 1, et adaptez : objectif, écrans, fonctionnalités, style, public.",
          "Ajoutez après les fonctionnalités : la règle, les cas limites et les quatre cas de test avec leurs résultats.",
          "Ajoutez la restriction « ne génère aucune des fonctionnalités de version 2 » et « n'enregistre aucune donnée ».",
          "Envoyez dans l'outil retenu (ici Bolt), observez la première version sans la publier.",
        ],
      },
    ],
    example: {
      title: 'Prompt de génération — calculateur (à copier)',
      lines: [
        "« Tu es un générateur d'application web professionnel. Objectif : un calculateur qui donne à un responsable de centre de santé la quantité d'un médicament à commander. Un seul écran, trois champs numériques — consommation mensuelle, délai de livraison en mois, stock de sécurité en mois — plus le stock actuel, un bouton « Calculer » et une zone de résultat. [C, L]",
        "Règle : cible = consommation mensuelle × (délai + stock de sécurité) ; quantité à commander = cible − stock actuel ; jamais négative. Si le résultat est négatif ou nul, afficher 0 et « Stock suffisant ». Si le stock est négatif, afficher « Le stock ne peut pas être négatif » sans calculer ; si un champ est vide, afficher « Complétez tous les champs ». [L]",
        "Cas de test : (1) 1 200, 1,5, 1, stock 1 800 → 1 200 ; (2) 800, 1, 0,5, stock 600 → 600 ; (3) 500, 1, 1, stock 1 400 → 0 et « Stock suffisant » ; (4) stock −50 → message d'erreur. [E]",
        "Style : sobre, bleu marine #1B3A5C et vert #2E8B57 sur fond blanc cassé, gros boutons. Public : gestionnaires de pharmacie qui utilisent un smartphone Android en connexion lente. [T, A]",
        "N'enregistre aucune donnée. Ne génère ni liste de plusieurs produits ni export. N'invente aucun texte : écris [À COMPLÉTER] si une information manque. » [R]",
      ],
    },
    result: "Une première version de l'application, générée sans être publiée, avec la règle et les cas de test dans le prompt.",
    pitfall: "Donner la règle sans les cas de test : l'outil l'applique, mais vous n'avez aucune manière de savoir s'il l'a appliquée juste. Les cas de test sont aussi pour vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: "Tester l'application avec les quatre cas, corriger l'écart et valider",
    intro: "Le test d'une application consiste à rejouer chaque cas de test et à comparer le résultat obtenu au résultat attendu. Un écart est un défaut, qu'on corrige par un prompt STAR comme pour la page.",
    steps: [
      {
        title: 'Rejouer les cas de test',
        actions: [
          "Pour chaque cas, saisissez les valeurs, cliquez sur « Calculer », relevez le résultat.",
          "Comparez avec le résultat attendu écrit à l'étape 1 et notez Conforme ou Écart.",
          "Testez aussi sur mobile à 360 px : champs numériques, bouton, zone de résultat.",
        ],
      },
      {
        title: 'Corriger et retester tous les cas',
        actions: [
          "Rédigez un prompt STAR pour chaque écart, avec le cas de test comme critère de réussite.",
          "Après correction, rejouez les quatre cas, pas seulement celui qui échouait.",
        ],
      },
    ],
    table: {
      columns: ['Cas', 'Résultat attendu', 'Résultat obtenu', 'Verdict'],
      rows: [
        ['1 — 1 200 / 1,5 / 1 / stock 1 800', '1 200', '1 200', 'Conforme'],
        ['2 — 800 / 1 / 0,5 / stock 600', '600', '600', 'Conforme'],
        ['3 — 500 / 1 / 1 / stock 1 400', '0 et « Stock suffisant »', '−400', 'Écart'],
        ['4 — stock −50', 'Message d\'erreur', 'Message « Le stock ne peut pas être négatif »', 'Conforme'],
      ],
    },
    example: {
      title: 'Prompt de correction du cas 3 (méthode STAR)',
      lines: [
        "« Situation : avec consommation 500, délai 1, sécurité 1 et stock 1 400, le résultat affiché est −400. Tâche : une quantité à commander jamais négative. Action : quand le résultat du calcul est inférieur ou égal à 0, affiche 0 et le message « Stock suffisant » à la place du nombre, sans modifier les autres cas. Résultat attendu : le cas (500 ; 1 ; 1 ; 1 400) affiche 0 et « Stock suffisant » ; les cas 1, 2 et 4 donnent toujours 1 200, 600 et le message d'erreur. »",
        "Après correction : cas 1 → 1 200 ✔ ; cas 2 → 600 ✔ ; cas 3 → 0 et « Stock suffisant » ✔ ; cas 4 → erreur ✔ ; mobile 360 px ✔.",
      ],
    },
    result: "Quatre cas conformes sur quatre après une seule correction : l'application est jugée juste sur la base de cas que vous aviez calculés vous-même, pas sur la parole de l'outil.",
    pitfall: "Ne tester que les cas qui marchent : c'est le cas limite (stock suffisant, stock négatif) qui produit l'erreur affichée à un utilisateur réel.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — De la consigne floue au cahier des charges validé',
    scenario: "Rappel : le lundi 3 août 2026, Furaha Bisimwa demande « une page où ils peuvent s'inscrire, quelque chose qui donne envie ». Aucun brief. Voici le raisonnement complet d'Amani, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Qualifier le besoin', body: "Page vitrine avec formulaire, aucun calcul ni compte : première ligne de la grille de décision. Public sur smartphone Android, connexion lente.", result: 'Besoin classé en 20 minutes.' },
      { title: "Choisir l'outil", body: "Autonomie faible à moyenne, lien public nécessaire, première version dans la journée : Lovable, v0 en secours. Test de dix minutes sur compte professionnel.", result: 'Choix écrit et justifié, 03/08 à 10 h 05.' },
      { title: 'Structurer et faire valider', body: "Liste en vrac, Prompt 1 (CLARTE), cinq questions fermées à la directrice pays : 35 inscriptions avant le 11/09, gratuit, public limité aux 48 centres, adresse de réception, trois champs.", result: 'Cinq réponses écrites à 14 h 10.' },
      { title: 'Remplir le gabarit', body: "Lignes 6 à 19 : objectif chiffré, une page à six sections, trois indispensables, deux idées en version 2 (swahili, SMS), style codé, public décrit, mention sur les données, outil.", result: '13 / 14 le lundi (93 %), 14 / 14 le mardi à 09 h 30 après validation de la mention (100 %).' },
    ],
    table: {
      columns: ['Contrôle', 'Résultat'],
      rows: [
        ['Taux de complétion (ligne 21)', '100 % — 14 / 14 points'],
        ['Fonctionnalités indispensables / version 2', '3 / 2'],
        ['Données personnelles collectées', 'Nom, e-mail, téléphone (le centre de santé s\'ajoutera en cours de route)'],
        ['Validation du demandeur', 'Réponse écrite le 04/08 à 11 h : « Validé, lance »'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — De la première version à la page testée',
    scenario: "Le cahier est validé. Amani transcrit les 14 points dans le prompt, génère la V1 le mardi 4 août, teste le mercredi 5 et corrige jusqu'au jeudi 6.",
    steps: [
      { title: 'Générer', body: "Modèle de la bibliothèque, six crochets transposés, garde-fous « n'invente rien » et « pas de version 2 ». Envoi dans Lovable, aperçu non publié, capture V1.", result: 'V1, 04/08 à 14 h 05.' },
      { title: 'Tester', body: "Liens, formulaire (cas normal, erreurs, double clic), mobile à 360 px et sur téléphone, recherche de « lorem », mention sur les données. Journal de tests classé par gravité.", result: '8 constats : 4 bloquants, 3 gênants, 1 cosmétique.' },
      { title: 'Corriger', body: "Un constat, un prompt STAR, un test : texte de la formatrice, mention, lien de menu, formulaire et champ « Centre de santé », barre fixe, blocs empilés sur mobile, contraste, introduction.", result: 'V2 à V9, chacune testée.' },
      { title: 'Retester', body: "Protocole complet rejoué : le bouton « Envoyer » masqué par la barre fixe quand le clavier s'ouvre (constat 9). Test de Gédéon Safari sur Android : 1 min 50 s, clavier numérique à corriger (constat 10).", result: 'V10 et V11 : journal à zéro constat ouvert.' },
    ],
    result: "La page V11 a passé 10 constats corrigés et vérifiés, dont deux que seul un retest ou un testeur extérieur pouvait voir.",
    tip: "Les constats 9 et 10 ne figuraient pas dans la première liste : sans retest complet et sans second testeur, ils auraient été découverts par les visiteurs.",
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Validation, diffusion et suivi de l\'objectif',
    scenario: "Jeudi 6 août, la page est stable. Reste à verrouiller, publier, diffuser et suivre l'objectif de 35 inscriptions.",
    steps: [
      { title: 'Verrouiller', body: "Mention vérifiée sur mobile par la conformité, accord écrit de la directrice pays sur son téléphone, tableau des réponses purgé (0 ligne).", result: 'Trois verrous levés le 06/08 avant 12 h 30.' },
      { title: 'Publier et tester le lien public', body: "Publication le 07/08 à 13 h 40 ; ouverture en fenêtre privée, puis sur téléphone en connexion mobile ; inscription de test supprimée ensuite.", result: 'Lien public conforme, diffusé à 14 h par WhatsApp et par e-mail aux 48 centres.' },
      { title: 'Remettre la note de livraison', body: "Sept lignes : objectif, version V11, ce que chaque itération a corrigé et comment c'est vérifié, reporté en version 2 (swahili, SMS, liste déroulante), trois pièces jointes.", result: 'Note envoyée à Furaha Bisimwa le 07/08 à 14 h 20.' },
      { title: "Suivre l'objectif", body: "Relevé des inscriptions chaque lundi, comme écrit en ligne 6 du cahier des charges.", result: 'Lundi 10/08 : 14 inscrits sur 35 (40 %).' },
    ],
    table: {
      columns: ['Date', 'Inscriptions confirmées', 'Taux de l\'objectif (35 places)'],
      rows: [
        ['Lundi 10/08/2026', '14', '40 %'],
        ['Lundi 17/08/2026', '25', '71 %'],
        ['Lundi 24/08/2026', '31', '89 %'],
        ['Vendredi 11/09/2026 (clôture)', '35', '100 %'],
      ],
    },
    result: "Objectif atteint à la clôture : 35 inscriptions sur 35, sans correction en urgence après diffusion (exemple fictif, à titre d'illustration d'un suivi).",
    tip: "Gardez ce corrigé comme modèle : sur votre prochain projet, seuls le sujet, les chiffres et le public changeront. La structure du raisonnement est la même.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Landing page pour une formation courte, sans brief exploitable',
    instructions: "Un formateur indépendant qui anime des sessions courtes de gestion de projet vous sollicite pour créer la landing page de sa nouvelle formation « Piloter un projet en 3 jours ». Sa seule consigne : « fais-moi quelque chose qui donne envie de s'inscrire, je n'ai pas le temps de tout t'expliquer. » Il n'a ni cahier des charges, ni maquette, ni texte prêt. Produisez, en une session de travail, le cahier des charges, la page générée avec l'outil de votre choix et deux corrections ciblées. Inventez des dates, un lieu (ou une modalité à distance) et un tarif fictifs.",
    steps: [
      {
        title: 'Cadrage',
        actions: [
          "Complétez le gabarit checklist-cahier-des-charges-site-ia.xlsx pour cette page : objectif chiffré, pages ou écrans (probablement une seule page à sections multiples), fonctionnalités indispensables séparées de celles qui peuvent attendre, style avec référence, public, contraintes (mentions légales, formulaire de collecte).",
          "Aidez-vous du Prompt 1 de la section Outils si votre idée est floue.",
          "Obtenez un taux de complétion de 100 % : lisez la ligne 21.",
        ],
      },
      {
        title: 'Génération',
        actions: [
          "Choisissez l'outil en vous aidant de la grille et de l'onglet « Comparatif outils » ; notez la raison dans la ligne 19.",
          "Rédigez le prompt de génération complet à partir du modèle de la bibliothèque, en y reprenant tout le cahier des charges et les garde-fous « n'invente rien » et « pas de version 2 ».",
          "Générez sans publier et comparez la V1 au cahier, ligne par ligne.",
        ],
      },
      {
        title: 'Test et itération',
        actions: [
          "Testez vous-même : liens, formulaire (cas normal et erreurs), mobile à 360 px et sur téléphone, recherche de « lorem », mention sur les données.",
          "Rédigez deux prompts STAR, sur deux problèmes distincts réellement constatés — par exemple un bouton d'inscription qui disparaît au défilement et une section illisible sur mobile.",
          "Retestez après chaque correction, puis rejouez le protocole complet.",
        ],
      },
      {
        title: 'Note',
        actions: [
          "Rédigez une note de 5 à 8 lignes : ce que chaque itération a corrigé et comment vous l'avez vérifié avant de considérer la page prête à partager.",
        ],
      },
    ],
    tip: "Points de contrôle : le bouton d'inscription doit rester accessible pendant le défilement ; chaque bloc doit se lire sans zoom sur smartphone ; le formulaire doit porter une mention sur les données ; aucun texte provisoire ne doit subsister.",
    deliverable: "Le cahier des charges complété (taux de 100 %), le prompt de génération utilisé, les deux prompts d'itération, le journal de tests et une note de 5 à 8 lignes expliquant ce que chaque itération a corrigé et comment vous l'avez vérifié.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Un calculateur pour une autre règle métier",
    instructions: "Reprenez la procédure 7 pour un autre produit : les sachets de sels de réhydratation orale. Règle identique : quantité à commander = consommation mensuelle × (délai de livraison + stock de sécurité) − stock actuel, jamais négative. Vous utilisez l'outil adapté aux applications avec logique métier.",
    steps: [
      {
        title: 'Cadrer et générer',
        actions: [
          "Écrivez la règle, les cas limites et quatre cas de test avec les résultats que vous avez calculés à la main.",
          "Complétez le cahier des charges adapté à une application (lignes 6, 9 à 11, 17 et 19).",
          "Rédigez le prompt de génération contenant règle, cas limites et cas de test.",
        ],
      },
      {
        title: 'Tester et corriger',
        actions: [
          "Rejouez les quatre cas dans l'application, relevez chaque résultat et notez Conforme ou Écart.",
          "Rédigez un prompt STAR pour chaque écart, puis rejouez les quatre cas.",
          "Testez à 360 px de large.",
        ],
      },
    ],
    tip: "Point de contrôle : avec une consommation de 600 sachets par mois, un délai de 2 mois, un stock de sécurité de 1 mois et un stock actuel de 900 sachets, la quantité à commander est 600 × 3 − 900 = 900. Si votre application affiche autre chose, corrigez-la avant d'aller plus loin.",
    deliverable: "La règle écrite avec ses cas limites, les quatre cas de test et leur verdict, le prompt de génération, le prompt de correction d'un éventuel écart.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre site ou application',
    instructions: "Appliquez la méthode complète à un besoin réel de votre travail : page d'inscription, présentation d'un service, mini-outil de calcul, maquette à montrer à un responsable, dans le respect des règles d'usage de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Qualifiez le besoin en deux phrases et choisissez l'outil avec la grille et le comparatif ; consignez la raison.",
          "Remplissez le cahier des charges jusqu'à 100 % et faites-le valider par écrit par le demandeur.",
          "Vérifiez que votre prompt ne contient aucune donnée personnelle réelle ni information interne confidentielle.",
        ],
      },
      {
        title: 'Exécuter',
        actions: [
          "Générez la V1, comparez-la au cahier, testez-la (liens, formulaire, mobile, textes, données personnelles).",
          "Corrigez en prompts STAR, un problème par prompt, avec un journal de versions.",
          "Rejouez le protocole, faites tester par une deuxième personne sur téléphone et faites valider la mention éventuelle.",
        ],
      },
    ],
    deliverable: "Le cahier des charges rempli, le prompt de génération, le journal de tests, les prompts d'itération et la note de livraison de 5 à 8 lignes — prêts à servir de base au mini-projet du Module 15.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre cahier des charges affiche un taux de complétion de 100 % et chaque ligne 6 à 19 est renseignée (« Oui » seulement pour un point rédigé et validé).",
      "L'objectif de la ligne 6 est chiffré et daté ; les fonctionnalités indispensables sont au nombre de trois, chacune testable ; la version 2 est listée.",
      "Votre prompt de génération reprend tout le cahier des charges, nomme les fonctionnalités à ne pas générer et interdit d'inventer du contenu.",
      "Chaque correction est un prompt STAR avec une situation factuelle, une tâche, une action précise et un résultat que vous avez vérifié vous-même.",
      "Vous avez testé chaque lien, chaque bouton et chaque champ du formulaire, en cas normal et en cas d'erreur.",
      "L'affichage mobile a été vérifié à 360 px et sur un vrai téléphone, pas seulement sur ordinateur.",
      "Aucun texte de remplacement (« lorem ipsum », « Prénom Nom ») ne subsiste : la recherche Ctrl+F ne renvoie rien.",
      "Le formulaire collectant des données personnelles porte une mention sur leur usage, validée par la personne compétente.",
      "Votre journal de tests ne contient plus de constat ouvert, et le protocole complet a été rejoué après la dernière correction.",
      "Votre note de livraison fait 5 à 8 lignes et dit, pour chaque itération, ce qu'elle a corrigé et comment vous l'avez vérifié.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Demander un site « complet » en un seul prompt vague au lieu de cadrer d'abord : le temps gagné par la génération est perdu dans les reprises. Complétez le cahier des charges à 100 % avant de générer.",
      "Laisser le cahier des charges dans un fichier à part : transcrivez-le intégralement dans le prompt de génération, avec les fonctionnalités à ne pas générer.",
      "Écrire « indispensable » partout : limitez-vous à trois fonctionnalités indispensables et parquez le reste en version 2.",
      "Formuler une correction vague comme « améliore le design » : nommez l'élément, l'état actuel constaté et le résultat attendu.",
      "Demander plusieurs corrections dans un même prompt : un problème, un prompt, un test. Sinon vous ne savez plus quelle correction a cassé quoi.",
      "Ne jamais tester soi-même avant de partager : cliquez sur chaque lien, remplissez le formulaire, cherchez « lorem ».",
      "Ignorer la version mobile alors que la majorité du trafic web y passe : testez à 360 px puis sur un vrai téléphone, en connexion lente.",
      "Publier un formulaire sans mention sur les données personnelles : une mention minimale validée est un préalable, pas un détail.",
      "Oublier de purger les inscriptions de test ou diffuser le lien d'aperçu au lieu de l'adresse publiée.",
      "Ne pas rejouer le test complet après les corrections : une correction peut en casser une autre, comme la barre fixe qui masque le bouton « Envoyer ».",
      "Coller des données personnelles réelles ou des chiffres internes dans un prompt : décrivez la structure, pas les données.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez qualifié un besoin flou et choisi l'outil adapté avec la grille de décision et l'onglet « Comparatif outils », avec une raison écrite.",
      "Vous avez rempli le cahier des charges (lignes 6 à 19) jusqu'à 100 % et l'avez fait valider par écrit avant toute génération.",
      "Vous avez construit un prompt de structuration (Prompt 1) puis un prompt de génération complet à partir du modèle de la bibliothèque.",
      "Vous avez comparé la première version au cahier des charges et testé liens, formulaire, mobile, textes de remplacement et données personnelles.",
      "Vous avez classé dix constats par gravité et les avez corrigés par des prompts STAR, un problème par prompt, avec un journal des versions.",
      "Vous avez fait tester la page par une deuxième personne sur téléphone, validé la mention sur les données, purgé les tests et publié.",
      "Vous avez rédigé une note de livraison de 5 à 8 lignes et appliqué la méthode à une application avec règle de calcul et quatre cas de test.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais choisir l'outil no-code/IA adapté à mon besoin selon la grille de décision de ce module (Lovable, v0, Bolt, Claude Code).",
      "J'ai rédigé un cahier des charges complet (objectif, pages, fonctionnalités indispensables vs secondaires, style, public cible) avant toute génération.",
      "Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.",
      "J'ai utilisé au moins quatre prompts CLARTE/STAR de ce module, adaptés à mon propre projet.",
      "Je sais formuler une demande de correction précise (élément concerné, état actuel, résultat attendu) plutôt qu'un jugement vague comme « améliore le design ».",
      "J'ai testé moi-même chaque lien, bouton et formulaire du résultat généré avant de le partager.",
      "J'ai vérifié l'affichage mobile de mon site ou de mon application, pas uniquement l'affichage sur ordinateur.",
      "J'ai complété le gabarit checklist-cahier-des-charges-site-ia.xlsx pour mon propre projet.",
      "J'ai utilisé la bibliothèque de prompts d'itération bibliotheque-prompts-creation-web-iteration.docx pour au moins une correction réelle.",
      "J'ai vérifié qu'un formulaire généré collectant des données personnelles porte une mention minimale sur leur usage avant toute mise en ligne.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « Big Data Analysis avec Claude (avec Code) ». Vous y analyserez des jeux de données volumineux et croiserez plusieurs fichiers en pilotant l'exécution de code par Claude en langage courant, puis vous automatiserez des pipelines de données récurrents avec Claude Code — avec la même discipline que dans ce module : décrire précisément, tester vous-même, ne jamais déléguer la vérification. Le site ou l'outil que vous venez de cadrer, générer et corriger peut aussi devenir la base de votre mini-projet du Module 15.",
  },
]
