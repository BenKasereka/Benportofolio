// Module 10 — IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot
// Référence pas à pas, construite sur le contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et les gabarits 04-templates : chaque
// procédure (poste de travail, description du besoin, lecture du script,
// mode test, exécution et documentation, fusion d'exports, mini-outil) est
// détaillée étape par étape et appliquée au même fil rouge, les 150 factures
// fournisseurs d'Horizon Grands Lacs à renommer avant la clôture semestrielle.
// Organisation et personnes fictives ; noms de fichiers et chiffres d'exemple.

// Indentation insécable : les extraits de code restent lisibles à l'écran.
// Ils servent à apprendre à LIRE un script ; le code à exécuter est toujours
// celui fourni par l'IA, copié avec le bouton de copie de l'outil.
const T = '\u00a0\u00a0\u00a0\u00a0'
const P_ORIG = 'C:\\Comptabilite\\Factures_S1_2026'
const P_COPIE = 'C:\\HGL_Automatisations\\essais\\Factures_S1_2026_COPIE_TEST'
const P_SCRIPTS = 'C:\\HGL_Automatisations\\scripts'
const P_RACINE = 'C:\\HGL_Automatisations'

export default [
  {
    type: 'cover',
    title: 'IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot',
    hook: "À la fin de ce module, sans avoir jamais appris à programmer, vous aurez fait écrire par l'IA un script qui renomme 150 factures en quelques secondes au lieu de près de quatre heures, vous l'aurez lu, testé en simulation sur une copie, corrigé, exécuté sans perdre un seul fichier et documenté pour un collègue — puis vous aurez appliqué la même méthode à la fusion de six exports Excel et à un mini-outil de tri que vous relancerez chaque semaine.",
  },
  {
    type: 'objectives',
    title: 'Ce que vous saurez faire — et le livrable qui le prouve',
    items: [
      "Installer et configurer VS Code, Python et GitHub Copilot, puis exécuter un premier script en lecture seule, en produisant un poste prêt, un espace de travail sécurisé (sauvegarde + copie de test) et un inventaire des fichiers à traiter.",
      "Décrire un besoin d'automatisation interne avec un prompt CLARTE précis (système, format, cas limites), en produisant un script de renommage enregistré mais pas encore exécuté.",
      "Lire un script généré par l'IA sans être développeur — chemin de dossier, boucle « pour chaque fichier », ligne qui modifie le disque — en produisant la grille de lecture du guide de sécurité complétée.",
      "Exiger, exécuter et analyser un mode test (dry-run) sur une copie, en produisant un bilan de simulation chiffré, un échantillon de 18 fichiers vérifiés et une version corrigée du script.",
      "Exécuter le script en mode réel, contrôler le résultat et le documenter, en produisant un dossier renommé sans perte (150 fichiers), la fiche de vérification signée, le script commenté, la liste des fichiers laissés inchangés et une note de trois phrases.",
      "Appliquer la même méthode à la fusion d'exports Excel avec Claude Code et à un mini-outil de tri réutilisable, en produisant un fichier fusionné rapproché ligne à ligne et un outil lançable d'un double-clic.",
      "Capitaliser chaque automatisation dans la bibliothèque de prompts de délégation technique, en produisant une ligne complète par tâche (description, prompt, outil, statut de test).",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de programmation : vous n'écrirez pas une ligne de code vous-même. Vous allez apprendre un métier différent — celui de donneur d'ordre exigeant face à une IA qui code : décrire, faire expliquer, faire tester, vérifier, puis seulement exécuter. Chaque procédure est découpée en étapes numérotées, avec le prompt exact à copier, les menus à ouvrir, les commandes à taper et le résultat attendu sur le cas.",
      "À la fin du module, vous aurez en main ces livrables, réutilisables tels quels sur vos propres dossiers :",
    ],
    bullets: [
      "Un poste équipé (VS Code en français, Python, GitHub Copilot) et un espace de travail « C:\\HGL_Automatisations » avec scripts, essais, sauvegardes et sorties séparés.",
      "Un script de renommage de factures en deux versions (v1 brute, v2 corrigée), avec mode test, gestion des doublons de noms et journal d'exécution CSV.",
      "Le gabarit « Guide de sécurité & de vérification des scripts IA » complété : checklist, grille de lecture section par section, validation signée.",
      "Un dossier de 150 factures renommé (125 au format AAAA-MM-JJ_NomFournisseur.pdf, 25 laissés inchangés avec leur raison) et une note de procédure de trois phrases.",
      "Un script de fusion de six exports mensuels, produit avec Claude Code, et le fichier fusionné contrôlé : 1 369 lignes, 386 075 USD.",
      "Un mini-outil de tri du dossier Téléchargements, en simulation par défaut, lançable par double-clic.",
      "La bibliothèque de prompts de délégation technique enrichie de vos trois automatisations.",
    ],
    tip: "Ouvrez dès maintenant les deux gabarits du dossier 04-templates : bibliotheque-prompts-delegation-technique.xlsx et guide-securite-verification-scripts-ia.docx. Vous les remplirez au fil des procédures, champ par champ, sur le cas du module.",
  },
  {
    type: 'concept',
    title: 'Le fil rouge : Horizon Grands Lacs et la clôture semestrielle du vendredi 31 juillet 2026',
    body: [
      "Horizon Grands Lacs, l'organisation fictive du module précédent, opère trois sites : Goma, Bukavu et Kinshasa. Le lundi 20 juillet 2026, Josué Bahati, comptable, transmet à Amani Kahindo, chargée administrative et logistique à Goma, le dossier « Factures_S1_2026 » : 150 PDF de factures fournisseurs de janvier à juin, avec un seul message : « Il faut que ces factures soient nommées pareil avant la clôture, on ne s'y retrouve plus. »",
      "Le problème est concret : la semaine précédente, pour l'action P1 du comité budgétaire (vérifier les cinq factures Transco du T2), Patrick Mumbere, responsable achats, a mis quarante minutes à les retrouver. La clôture comptable du semestre est fixée au vendredi 31 juillet ; la directrice pays, Furaha Bisimwa, a aussi demandé pour cette date un journal des dépenses du semestre fusionné à partir des six exports mensuels.",
    ],
    table: {
      columns: ['Famille', 'Exemple de nom actuel', 'Nombre', 'Ce qui pose problème'],
      rows: [
        ['A', 'facture_12032026_transco.pdf', '96', 'Date JJMMAAAA collée, fournisseur abrégé'],
        ['B', 'FACTURE_KIVU_05022026.pdf', '21', 'Majuscules, ordre fournisseur / date inversé'],
        ['C', 'Facture Alpha Logistics 18-06-2026.pdf', '9', 'Espaces, date avec tirets'],
        ['D', 'facture_transco_2.pdf', '13', 'Aucune date dans le nom'],
        ['E', 'scan0047.pdf', '11', "Nom du scanner, aucune information"],
      ],
    },
    highlight: "Convention demandée par la comptabilité : AAAA-MM-JJ_NomFournisseur.pdf (exemple : 2026-03-12_TranscoSarl.pdf). Six fournisseurs : Transco Sarl, Kivu Freight Co, Alpha Logistics, Beta Supply, Mwangaza Energie, Bureau Plus Goma. Total : 96 + 21 + 9 + 13 + 11 = 150 fichiers.",
  },
  {
    type: 'concept',
    title: "La carte du module : 7 procédures, dans l'ordre où vous les exécuterez",
    body: "Les procédures 2 à 5 suivent le pipeline de délégation du module — décrire, lire, tester, exécuter et documenter — sur les 150 factures. Les procédures 6 et 7 appliquent ensuite exactement la même méthode à une fusion de fichiers et à un mini-outil, pour que vous constatiez qu'elle ne dépend pas de la tâche.",
    bullets: [
      "Procédure 1 — Préparer le poste et l'espace de travail (5 étapes) : VS Code, Python, Copilot, dossiers sécurisés, premier script en lecture seule.",
      "Procédure 2 — Décrire le besoin et obtenir le script (3 étapes) : règle de renommage, prompt CLARTE, script enregistré sans l'exécuter.",
      "Procédure 3 — Lire le script sans être développeur (4 étapes) : explication section par section, lignes à risque, cas limites, grille de lecture.",
      "Procédure 4 — Tester en mode simulation et corriger (5 étapes) : prompt STAR, exécution sur la copie, bilan, échantillon, version corrigée.",
      "Procédure 5 — Exécuter, contrôler et documenter (5 étapes) : validation signée, exécution réelle, contrôles, documentation, bibliothèque.",
      "Procédure 6 — Fusionner des exports Excel mensuels avec Claude Code (5 étapes).",
      "Procédure 7 — Construire un mini-outil réutilisable : le tri des téléchargements (4 étapes).",
    ],
  },
  {
    type: 'stat-callout',
    stat: '3 h 45',
    caption: "C'est le temps de renommage manuel de 150 factures à 1 min 30 chacune (ouvrir, lire la date et le fournisseur, renommer). Le script final traite le dossier en moins de 2 secondes.",
    context: "Le vrai gain n'est pas la première fois — préparer, tester et documenter le script prend environ deux heures réparties sur quatre jours. Il est à chaque clôture suivante : deux minutes de simulation, une vérification d'échantillon, une exécution. Et le temps libéré se reporte sur ce qu'aucun script ne fera à votre place : les 25 fichiers ambigus, qu'il faut ouvrir et juger.",
  },
  {
    type: 'comparison-table',
    title: 'Ce que vous pouvez confier à un script — et ce que vous ne devez pas',
    columns: ['Situation', 'Bon candidat ?', 'Pourquoi'],
    rows: [
      ['Renommer 150 fichiers selon une convention écrite', 'Oui', 'Tâche répétitive, règle explicite, résultat vérifiable fichier par fichier'],
      ['Fusionner 6 ou 12 exports Excel aux mêmes colonnes', 'Oui', 'Opération mécanique, contrôlable par le nombre de lignes et les totaux'],
      ['Trier un dossier de téléchargements par type', 'Oui', "Règle simple (l'extension), tâche récurrente chaque semaine"],
      ['Extraire date, fournisseur et montant de PDF texte', 'Oui, avec contrôle', "Fonctionne si les factures suivent un motif ; « non trouvé » sinon"],
      ['Décider quelle facture est un doublon à supprimer', 'Non', "Jugement sur pièces : le script signale, l'humain décide"],
      ['Lire des factures scannées en image', 'Pas dans ce module', 'Exige une reconnaissance de caractères (OCR), avec un taux d\'erreur à gérer'],
      ['Renommer 5 fichiers une seule fois', 'Non', 'Plus rapide à la main que de préparer, tester et documenter un script'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Quatre outils, quatre rôles — lequel ouvrir et quand',
    columns: ['Outil', "Ce que c'est", 'Quand l\'utiliser', 'Limite à connaître'],
    rows: [
      ['Visual Studio Code (VS Code)', 'Éditeur de texte gratuit, « bloc-notes perfectionné », avec un terminal intégré', 'Ouvrir le dossier de travail, enregistrer le script, le lancer dans le terminal', "Votre usage s'arrête là : ouvrir un dossier, un terminal, coller et exécuter"],
      ['GitHub Copilot', "Assistant IA intégré à VS Code, dans une fenêtre de chat", 'Décrire le besoin, obtenir le code, une explication ou une correction sans changer d\'outil', "À ne pas confondre avec Copilot Microsoft 365 (module 04) : compte GitHub requis"],
      ['Claude Code', 'Agent IA en ligne de commande qui écrit, teste et corrige un script en plusieurs étapes', 'Automatisation plus longue déléguée de bout en bout (procédure 6 ; approfondi au module 13)', 'Il agit sur vos fichiers : lisez chaque action avant de l\'autoriser'],
      ['ChatGPT', 'Assistant conversationnel, sans installation', 'Premier jet de script quand vous ne savez pas encore si le besoin mérite VS Code', 'Le script est à copier ensuite dans VS Code pour être exécuté'],
    ],
  },
  {
    type: 'concept',
    title: "La règle d'or du module — et les quatre filets de sécurité qui l'appliquent",
    body: [
      "Une seule règle prime sur toutes les autres : ne jamais exécuter un script généré par l'IA directement sur des données réelles sans l'avoir testé d'abord sur une copie ou un échantillon. Un renommage, une fusion ou un déplacement de fichiers agit souvent de façon irréversible : un fichier renommé, écrasé ou fusionné à tort ne se récupère pas toujours, même quand le script « avait l'air correct ».",
      "Dans la pratique, cette règle se traduit par quatre filets, que vous poserez à chaque automatisation, dans cet ordre :",
    ],
    bullets: [
      "Filet 1 — La sauvegarde : une archive ZIP datée du dossier d'origine, rangée à part, avant toute chose.",
      "Filet 2 — La copie de test : un double du dossier, sur lequel le script travaille tant qu'il n'est pas validé.",
      "Filet 3 — Le mode test (dry-run) : le script affiche ce qu'il ferait, sans rien modifier sur le disque.",
      "Filet 4 — L'échantillon vérifié : 15 à 20 résultats contrôlés à la main, répartis dans tout le dossier, avant le passage en réel.",
    ],
    example: {
      title: 'Ce que les filets ont évité dans le fil rouge',
      lines: [
        "Version 1 du script lancée directement en réel sur le dossier de la comptabilité :",
        "→ 9 factures de la famille C ignorées sans que personne le remarque ;",
        "→ un fichier renommé « 2026-04-31_BetaSupply.pdf », une date qui n'existe pas ;",
        "→ arrêt brutal au premier doublon de nom (erreur FileExistsError) : dossier à moitié renommé, au moment de la clôture.",
      ],
    },
    pitfall: "Penser que le mode test suffit et sauter la copie : un mode test mal écrit par l'IA peut, lui aussi, modifier des fichiers. Tant que le comportement n'est pas certain à 100 %, même la simulation tourne sur la copie.",
  },
  {
    type: 'concept',
    title: "Anatomie d'un script : les quatre parties à reconnaître",
    body: "Vous n'avez pas besoin de comprendre chaque ligne. Presque tous les scripts d'automatisation de fichiers ont la même structure en quatre parties ; il suffit de savoir où chacune se trouve. Voici le cœur de la version 1 du script de renommage, annotée :",
    example: {
      title: 'Extrait annoté — renommer_factures_v1.py',
      lines: [
        "① PARAMÈTRES — ce que vous adaptez",
        `DOSSIER = r"${P_COPIE}"`,
        `FOURNISSEURS = {"transco": "TranscoSarl", "kivu": "KivuFreightCo", "alpha": "AlphaLogistics", …}`,
        "② BOUCLE — « pour chaque fichier du dossier »",
        `for nom in os.listdir(DOSSIER):`,
        "③ DÉCISION — le script cherche une date et un fournisseur, sinon il passe",
        `${T}if m is None or cle is None:`,
        `${T}${T}print("Non identifiable :", nom)`,
        "④ ACTION — la seule ligne qui modifie réellement le disque",
        `${T}os.rename(os.path.join(DOSSIER, nom), os.path.join(DOSSIER, nouveau))`,
      ],
    },
    result: "Si vous savez montrer du doigt ces quatre parties dans un script, vous savez ce qu'il va faire à vos fichiers : sur quel dossier, sur quels fichiers, selon quelle règle, avec quelle action.",
    tip: "En Python, le décalage vers la droite (l'indentation) indique ce qui est « à l'intérieur » de la boucle ou de la condition. Ne recopiez jamais le code depuis une diapositive : utilisez toujours le bouton de copie de l'outil IA, qui préserve ces décalages.",
  },
  {
    type: 'comparison-table',
    title: 'Les instructions qui touchent vos fichiers — à chercher avant toute exécution',
    columns: ['Ce que vous lisez dans le script', 'Ce que ça fait', 'Risque'],
    rows: [
      ['os.listdir(…), glob(…), print(…)', 'Lit la liste des fichiers, affiche du texte', 'Nul : lecture seule'],
      ['os.rename(…), os.replace(…)', 'Renomme un fichier (os.replace écrase la cible si elle existe)', 'Élevé : modifie le dossier'],
      ['shutil.move(…)', 'Déplace un fichier vers un autre dossier', 'Élevé : le fichier change de place'],
      ['os.makedirs(…), os.mkdir(…)', 'Crée un dossier', 'Faible, mais vérifiez où'],
      ["open(…, \"w\"), .save(…), .to_excel(…)", 'Écrit ou écrase un fichier', 'Élevé si le nom existe déjà'],
      ['os.remove(…), os.unlink(…), shutil.rmtree(…)', 'Supprime un fichier ou un dossier entier, sans passer par la corbeille', 'Critique : à refuser sauf demande explicite'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Le terminal : les commandes dont vous aurez besoin, et rien de plus',
    columns: ['Vous tapez (terminal PowerShell de VS Code)', 'Ce que ça fait', 'Exemple du fil rouge'],
    rows: [
      ['python --version', 'Vérifie que Python est installé et accessible', 'Réponse attendue : Python 3.12.x ou plus récent'],
      ['cd « chemin »', 'Se place dans un dossier', `cd ${P_SCRIPTS}`],
      ['dir', 'Liste le contenu du dossier courant', 'Vérifier que renommer_factures_v2.py est bien là'],
      ['python nom_du_script.py', 'Lance le script', 'python renommer_factures_v2.py'],
      ['(Get-ChildItem -Filter *.pdf).Count', 'Compte les fichiers PDF du dossier courant', 'Avant et après exécution : 150'],
      ['Flèche ↑ puis Entrée', 'Rappelle et relance la dernière commande', 'Relancer la simulation après une correction'],
      ['Ctrl + C', 'Interrompt un script en cours', 'Arrêter un script qui affiche des milliers de lignes'],
    ],
  },
  {
    type: 'concept',
    title: 'Les chemins de dossier sous Windows : première cause d\'échec, à maîtriser',
    body: [
      "Un chemin est l'adresse exacte d'un dossier. Une seule lettre fausse, et le script « ne trouve pas » vos fichiers — ou, pire, travaille sur un autre dossier que celui que vous croyez. Ne tapez jamais un chemin à la main : copiez-le.",
    ],
    bullets: [
      "Dans l'Explorateur, sélectionnez le dossier, puis clic droit > « Copier en tant que chemin d'accès » (sous Windows 10 : Maj + clic droit).",
      "Le chemin est copié entre guillemets : \"C:\\HGL_Automatisations\\essais\\Factures_S1_2026_COPIE_TEST\".",
      "Dans un script Python, placez-le derrière la lettre r, sans retirer les guillemets : DOSSIER = r\"C:\\…\". Le r évite que les barres obliques inverses soient mal interprétées.",
      "Dans le terminal, si le chemin contient des espaces, gardez les guillemets : cd \"C:\\Users\\amani.kahindo\\Mes documents\".",
      "Relisez la fin du chemin : le mot COPIE_TEST doit y figurer tant que le script n'est pas validé.",
    ],
    example: {
      title: 'Les trois emplacements du fil rouge',
      lines: [
        `Original (comptabilité, jamais touché avant validation) : ${P_ORIG}`,
        `Copie de test : ${P_COPIE}`,
        `Scripts et journaux : ${P_SCRIPTS}`,
      ],
    },
    pitfall: "Nommer le dossier d'essai « Factures_S1_2026 » comme l'original, juste ailleurs : le jour où vous modifiez le chemin, rien ne vous alerte. Un suffixe visible (COPIE_TEST) rend l'erreur impossible à manquer.",
  },
  {
    type: 'comparison-table',
    title: "La norme CLARTE appliquée à une demande d'automatisation",
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple du prompt de renommage du fil rouge'],
    rows: [
      ['C — Contexte', 'Qui vous êtes, quels fichiers, combien, sur quel système', '« Service administratif ; dossier Windows de 150 PDF de factures aux noms hétérogènes »'],
      ['L — Livrable attendu', 'Le script exact voulu et le format de sortie', '« Un script Python qui renomme au format AAAA-MM-JJ_NomFournisseur.pdf »'],
      ['A — Audience / rôle', "Le rôle de l'IA ET votre niveau technique réel", '« Tu es un assistant technique qui écrit du code pour une personne non-développeuse »'],
      ['R — Restrictions', "Bibliothèques autorisées, cas limites, ce qu'il ne faut PAS faire", '« Bibliothèques de base uniquement ; fichiers non identifiables laissés inchangés avec un message »'],
      ['T — Ton & style', 'Le registre de l\'explication', '« Explique en 3 phrases maximum, en langage courant, avant le code »'],
      ['E — Exemples', 'Un nom de fichier, une structure ou une sortie attendue', '« facture_12032026_transco.pdf doit devenir 2026-03-12_TranscoSarl.pdf »'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'La méthode STAR — pour modifier, tester ou documenter un script existant',
    columns: ['Lettre', 'Ce que vous écrivez', 'Exemple du prompt de mode test du fil rouge'],
    rows: [
      ['S — Situation', "L'état de départ : le script déjà obtenu, les fichiers, l'enjeu", '« Script de renommage ci-dessus, dossier réel de 150 PDF, impossible à abîmer avant la clôture »'],
      ['T — Tâche', "L'objectif précis", '« Vérifier ce que le script ferait avant qu\'il ne modifie un seul fichier »'],
      ['A — Action', "Ce que l'IA doit modifier, étape par étape", '« Ajoute MODE_TEST = True : afficher ancien et nouveau nom, ne rien renommer »'],
      ['R — Résultat', 'Le livrable final et son critère de réussite', '« Le même script + une phrase disant exactement quelle ligne changer pour passer en réel »'],
    ],
  },
  {
    type: 'concept',
    title: "Règles d'usage : un script n'a besoin d'aucune vraie donnée pour être écrit",
    body: "Pour écrire un script de renommage, l'IA a besoin de la structure des noms, pas des factures. Déposer un vrai dossier ou un extrait de données dans un outil IA, c'est le transmettre à un service externe. Appliquez ces règles à chaque demande :",
    bullets: [
      "Utilisez un compte validé par votre organisation (licence Copilot Business, offre entreprise de ChatGPT ou de Claude), jamais un compte personnel gratuit pour des fichiers de travail.",
      "Décrivez la structure avec des exemples de noms fictifs ou anonymisés (facture_12032026_transco.pdf), jamais le contenu d'une facture, un IBAN ou un montant réel.",
      "Ne déposez jamais un fichier de paie, de bénéficiaires ou de données personnelles « juste pour que l'IA comprenne les colonnes » : donnez la liste des en-têtes et une ligne inventée.",
      "Avec un agent (Claude Code, mode Agent de Copilot), lancez-le uniquement depuis le dossier de travail : il voit ce qui se trouve sous ce dossier, pas le reste du disque.",
      "Notez dans la bibliothèque de prompts l'outil utilisé pour chaque tâche : en cas de question de l'auditeur ou du service informatique, la trace existe.",
    ],
    example: {
      title: 'Décision pour le fil rouge',
      lines: [
        "Horizon Grands Lacs a validé GitHub Copilot (licence Business) et Claude Code pour le service administratif.",
        "Amani décrit les cinq familles de noms avec un exemple chacune ; aucun PDF n'est déposé dans l'IA.",
        "Le script s'exécute sur son poste : les factures ne quittent jamais l'ordinateur.",
      ],
    },
    pitfall: "Glisser trois vraies factures dans ChatGPT « pour qu'il voie le format » : le nom du fichier suffisait, et vous avez transmis des montants, des numéros de compte et des signatures.",
  },
  {
    type: 'vocabulary',
    title: 'Le vocabulaire du module',
    terms: [
      { term: 'Script', definition: "Fichier d'instructions dans un langage de programmation (ici Python, extension .py), exécuté automatiquement du début à la fin — une recette suivie par la machine sans intervention à chaque étape." },
      { term: 'Python', definition: "Langage de programmation gratuit, très utilisé pour l'automatisation ; il s'installe une fois sur le poste et exécute les fichiers .py." },
      { term: 'Bibliothèque de base / externe', definition: "De base : outils inclus d'office dans Python (os, re, csv, shutil, datetime). Externe : à installer en plus (openpyxl pour Excel, pypdf pour les PDF), avec l'accord de votre service informatique." },
      { term: 'Mode test / dry-run / simulation', definition: "Mode où le script affiche ce qu'il ferait sans rien modifier sur le disque — le filet de sécurité indispensable avant une exécution réelle." },
      { term: 'Chemin de dossier (path)', definition: "Adresse exacte d'un fichier ou d'un dossier (ex. C:\\Comptabilite\\Factures_S1_2026) ; une erreur de chemin est la cause la plus fréquente d'un script qui « ne trouve pas » ses fichiers." },
      { term: 'Boucle « pour chaque fichier »', definition: "Partie du script qui répète la même action sur tous les fichiers d'un dossier, l'un après l'autre : c'est elle qui permet de traiter 150 fichiers aussi facilement qu'un seul." },
      { term: 'Terminal intégré', definition: "Fenêtre en ligne de commande à l'intérieur de VS Code (PowerShell sous Windows), où l'on tape la commande qui lance le script." },
      { term: 'Collision de noms', definition: "Deux fichiers qui recevraient le même nouveau nom : selon le script, le second provoque un arrêt brutal ou écrase le premier. Un bon script ajoute un suffixe (_2) et le signale." },
      { term: "Journal d'exécution", definition: "Fichier (souvent CSV) écrit par le script : ancien nom, nouveau nom, statut, raison. Il prouve ce qui a été fait et permet d'annuler si besoin." },
      { term: 'Agent IA', definition: "IA qui ne se contente pas de répondre mais agit : crée des fichiers, lance des commandes (Claude Code, mode Agent de Copilot). Elle demande votre autorisation avant chaque action sensible." },
    ],
  },

  // ───────────── Procédure 1 — Préparer le poste et l'espace de travail ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Installer Visual Studio Code et le passer en français',
    intro: "VS Code est le seul logiciel « technique » du module, et vous n'en utiliserez qu'une petite partie : l'explorateur de fichiers, l'éditeur et le terminal. Entrée nécessaire : un poste Windows et, si votre organisation l'exige, l'accord du service informatique pour l'installation.",
    steps: [
      {
        title: 'Installer',
        actions: [
          "Ouvrez code.visualstudio.com (site officiel de Microsoft) et cliquez sur « Download for Windows ».",
          "Lancez le fichier téléchargé (version « User Installer », qui ne demande pas de droits administrateur).",
          "À l'écran « Tâches supplémentaires », cochez « Ajouter l'action Ouvrir avec Code au menu contextuel » pour les fichiers et les dossiers, et laissez cochée « Ajouter à PATH ».",
          "Terminez l'installation et lancez VS Code.",
        ],
      },
      {
        title: "Passer l'interface en français",
        actions: [
          "Cliquez sur l'icône Extensions dans la barre de gauche (quatre carrés) ou Ctrl + Maj + X.",
          "Recherchez « French Language Pack », choisissez celui publié par Microsoft, cliquez sur Install.",
          "Cliquez sur « Change Language and Restart » : VS Code redémarre en français.",
        ],
      },
    ],
    example: {
      title: 'Les quatre zones de VS Code que vous utiliserez',
      lines: [
        "À gauche : la barre d'activité (Explorateur, Recherche, Extensions, Chat).",
        "Panneau latéral : la liste des fichiers du dossier ouvert.",
        "Au centre : l'éditeur, où s'affiche le script (numéros de ligne à gauche).",
        "En bas : le terminal, où vous lancez le script et lisez ses messages.",
      ],
    },
    result: "VS Code s'ouvre en français ; le menu « Fichier » affiche « Ouvrir un dossier… » et le menu « Terminal » affiche « Nouveau terminal ».",
    tip: "Les icônes et l'emplacement des menus évoluent d'une version à l'autre. Si un libellé diffère, utilisez la palette de commandes (Ctrl + Maj + P) et tapez le nom de l'action : elle retrouve tout.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Installer Python et vérifier qu\'il répond',
    intro: "Les scripts du module sont écrits en Python. Sans Python installé, VS Code peut afficher un script mais pas l'exécuter. Cette étape se fait une seule fois par poste.",
    steps: [
      {
        title: 'Installer Python',
        actions: [
          "Ouvrez python.org > Downloads et téléchargez la dernière version stable pour Windows.",
          "Lancez l'installateur et, AVANT de cliquer sur « Install Now », cochez en bas « Add python.exe to PATH ».",
          "Terminez l'installation, puis fermez complètement VS Code et rouvrez-le (le terminal ne voit Python qu'après redémarrage).",
        ],
      },
      {
        title: 'Vérifier et compléter VS Code',
        actions: [
          "Menu Terminal > Nouveau terminal ; tapez python --version puis Entrée.",
          "Si la version s'affiche, c'est terminé ; sinon, voir la diapositive « Quand le terminal affiche une erreur ».",
          "Dans Extensions (Ctrl + Maj + X), installez l'extension « Python » publiée par Microsoft : elle colore le code et facilite la lecture.",
        ],
      },
    ],
    example: {
      title: 'Ce que vous devez voir dans le terminal',
      lines: [
        "PS C:\\Users\\amani.kahindo> python --version",
        "Python 3.12.4",
      ],
    },
    result: "La commande python --version renvoie un numéro de version ; l'extension Python apparaît dans la liste des extensions installées.",
    pitfall: "Oublier la case « Add python.exe to PATH » : Python est installé mais le terminal répond qu'il ne le connaît pas. Relancez l'installateur, choisissez « Modify » et cochez l'option « Add Python to environment variables ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Activer GitHub Copilot et ouvrir sa fenêtre de chat',
    intro: "Copilot est l'IA qui écrira et expliquera vos scripts sans quitter VS Code. Il faut un compte GitHub et un accès Copilot : licence fournie par votre organisation (Copilot Business) ou, pour un essai personnel, l'offre gratuite à quota mensuel limité.",
    steps: [
      {
        title: 'Connecter Copilot',
        actions: [
          "Demandez au service informatique quel compte utiliser : compte GitHub professionnel rattaché à la licence de l'organisation si elle existe.",
          "Dans VS Code, cliquez sur l'icône Copilot (en haut, à côté de la barre de recherche) ou sur « Se connecter pour utiliser Copilot ».",
          "Suivez la connexion GitHub dans le navigateur, autorisez VS Code, revenez à l'éditeur.",
        ],
      },
      {
        title: 'Ouvrir le chat et choisir le bon mode',
        actions: [
          "Ouvrez la vue Chat : icône Copilot, ou Ctrl + Alt + I.",
          "En bas de la zone de saisie, choisissez le mode « Ask » (Demander) : Copilot répond et propose du code, sans rien modifier lui-même.",
          "Testez avec : « Réponds en français : à quoi sert le terminal intégré de VS Code, en deux phrases ? »",
        ],
      },
    ],
    result: "La vue Chat de Copilot répond en français. Vous savez où taper une demande et où lire la réponse.",
    tip: "Le mode « Agent » de Copilot peut créer des fichiers et lancer des commandes lui-même. Réservez-le à quand vous maîtriserez la méthode du module : pour apprendre, le mode Ask vous oblige à lire et à coller vous-même, donc à garder la main.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: "Créer l'espace de travail sécurisé : sauvegarde, copie de test, dossier ouvert",
    intro: "Avant d'écrire la moindre demande à l'IA, vous posez les filets 1 et 2 : une sauvegarde intouchable et une copie sur laquelle le script travaillera. L'original de la comptabilité ne sera touché qu'en toute fin de procédure 5.",
    steps: [
      {
        title: 'Créer les dossiers',
        actions: [
          `Créez ${P_RACINE} avec quatre sous-dossiers : scripts, essais, sauvegardes, sorties.`,
          `Dans l'Explorateur, clic droit sur ${P_ORIG} > « Compresser dans un fichier ZIP » (Windows 10 : Envoyer vers > Dossier compressé).`,
          "Renommez l'archive Factures_S1_2026_sauvegarde_2026-07-20.zip et déplacez-la dans « sauvegardes ».",
          "Copiez le dossier original (Ctrl + C) dans « essais » (Ctrl + V) et renommez la copie Factures_S1_2026_COPIE_TEST.",
        ],
      },
      {
        title: 'Ouvrir l\'espace dans VS Code',
        actions: [
          `Fichier > Ouvrir un dossier… > sélectionnez ${P_RACINE} > Sélectionner un dossier.`,
          "À la question « Faites-vous confiance aux auteurs des fichiers de ce dossier ? », répondez « Oui, je fais confiance aux auteurs » : c'est votre propre dossier.",
          "Dépliez « essais » dans l'Explorateur de VS Code : la copie et ses PDF apparaissent.",
          "Terminal > Nouveau terminal : le terminal s'ouvre directement dans HGL_Automatisations.",
        ],
      },
    ],
    example: {
      title: 'Arborescence obtenue',
      lines: [
        "C:\\HGL_Automatisations",
        `${T}scripts       → les .py et les journaux d'exécution`,
        `${T}essais        → Factures_S1_2026_COPIE_TEST (150 PDF)`,
        `${T}sauvegardes   → Factures_S1_2026_sauvegarde_2026-07-20.zip`,
        `${T}sorties       → fichiers produits (fusion, récapitulatifs)`,
      ],
    },
    result: "La sauvegarde ZIP existe, la copie de test contient les 150 PDF, et VS Code a l'espace de travail ouvert avec un terminal prêt.",
    pitfall: "Ouvrir directement C:\\Comptabilite dans VS Code « pour aller plus vite » : tous les scripts et agents lancés depuis là verront l'original. Ouvrez toujours l'espace de travail, jamais le dossier de production.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Exécuter un premier script inoffensif : l\'inventaire du dossier',
    intro: "Votre premier script ne modifie rien : il lit et compte. Il vous fait pratiquer tout le circuit — demander, copier, enregistrer, lancer — sans aucun risque, et il produit l'inventaire dont vous aurez besoin pour décrire le besoin de renommage.",
    steps: [
      {
        title: 'Obtenir et enregistrer le script',
        actions: [
          "Dans le chat Copilot (mode Ask), envoyez le prompt ci-dessous.",
          "Lisez l'explication, puis survolez le bloc de code et cliquez sur le bouton de copie.",
          "Dans l'Explorateur de VS Code, clic droit sur « scripts » > Nouveau fichier > inventaire_dossier.py ; collez (Ctrl + V) ; enregistrez (Ctrl + S).",
        ],
      },
      {
        title: 'Lancer et lire le résultat',
        actions: [
          `Dans le terminal : cd ${P_SCRIPTS} puis Entrée.`,
          "Tapez python inventaire_dossier.py puis Entrée.",
          "Ouvrez le fichier inventaire_factures.txt créé dans « scripts » : il contient les 150 noms.",
        ],
      },
    ],
    example: {
      title: 'Prompt (CLARTE) et résultat attendu',
      lines: [
        `« Tu es un assistant technique qui écrit du code pour une personne non-développeuse. Écris un script Python, avec les bibliothèques de base uniquement, qui compte les fichiers PDF du dossier Windows ${P_COPIE}, affiche ce nombre et les 10 premiers noms, puis enregistre la liste complète des noms dans un fichier inventaire_factures.txt placé à côté du script. Le script ne doit renommer, déplacer ni supprimer aucun fichier. Explique-moi en 3 phrases ce qu'il fait avant de me donner le code. »`,
        "Terminal : 150 fichiers PDF trouvés dans Factures_S1_2026_COPIE_TEST",
        "Premiers noms : FACTURE_BETA_09032026.pdf, FACTURE_KIVU_05022026.pdf, Facture Alpha Logistics 18-06-2026.pdf…",
      ],
    },
    result: "Un script qui s'exécute sans erreur, le chiffre 150 confirmé, et la liste complète des noms dans inventaire_factures.txt.",
    tip: "Même pour un script « inoffensif », vérifiez avant de lancer qu'aucune des instructions à risque (rename, move, remove, rmtree) n'y figure : Ctrl + F dans l'éditeur. C'est le réflexe que vous systématiserez à la procédure 3.",
  },
  {
    type: 'comparison-table',
    title: 'Quand le terminal affiche une erreur : lire le message et agir',
    columns: ['Message (dernière ligne affichée)', 'Ce que ça veut dire', 'Que faire'],
    rows: [
      ["« python » n'est pas reconnu… / Python was not found", 'Python absent ou hors du PATH', 'Réinstaller en cochant « Add python.exe to PATH », redémarrer VS Code ; essayer aussi : py nom_du_script.py'],
      ["can't open file '…py': [Errno 2] No such file or directory", "Le terminal n'est pas dans le dossier du script", 'cd vers le dossier scripts, vérifier avec dir, relancer'],
      ["FileNotFoundError: [WinError 3] Le chemin d'accès spécifié est introuvable", 'Le chemin DOSSIER est mal écrit', "Recopier le chemin depuis l'Explorateur, garder le r devant les guillemets"],
      ['PermissionError: [WinError 32] … utilisé par un autre processus', 'Un fichier visé est ouvert (PDF, Excel)', 'Fermer le fichier, relancer'],
      ['SyntaxError / IndentationError', 'Code mal collé : ligne coupée ou décalage perdu', 'Recopier tout le bloc avec le bouton de copie, sans retoucher'],
      ['FileExistsError: [WinError 183]', 'Collision : le nouveau nom existe déjà', "Ne jamais forcer l'écrasement : faire ajouter une règle de suffixe"],
      ["ModuleNotFoundError: No module named 'openpyxl'", 'Bibliothèque externe non installée', 'python -m pip install openpyxl, après accord du service informatique'],
    ],
  },
  {
    type: 'concept',
    title: 'Faire corriger une erreur par l\'IA sans perdre la main',
    body: "Un message d'erreur n'est pas un échec : c'est une information précise, que l'IA sait lire. Mais une demande vague (« ça ne marche pas ») produit souvent un script entièrement réécrit, que vous devriez relire et retester de zéro. Demandez une explication et une correction ciblée.",
    example: {
      title: 'Prompt de correction (CLARTE) — à copier',
      lines: [
        "« Tu es un assistant technique qui explique à une personne non-développeuse. En lançant le script ci-dessous [coller le script], le terminal affiche ce message complet : [coller tout le message, de « Traceback » à la dernière ligne].",
        "Explique-moi en 2 phrases ce que signifie ce message et quelle ligne est en cause.",
        "Puis indique-moi uniquement la ou les lignes à modifier, avec leur numéro, sans réécrire le reste du script. Système : Windows 11, terminal PowerShell de VS Code. »",
      ],
    },
    result: "Une correction limitée à une ou deux lignes identifiées par leur numéro : ce que vous aviez déjà vérifié reste valable.",
    pitfall: "Coller seulement la dernière ligne de l'erreur : l'IA devine la cause. Sélectionnez tout le bloc rouge dans le terminal, du mot Traceback à la fin, avant de le copier.",
  },

  // ───────────── Procédure 2 — Décrire le besoin et obtenir le script ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 3',
    title: "Analyser l'inventaire et écrire la règle de renommage complète",
    intro: "L'IA ne peut écrire que la règle que vous lui donnez. Avant le prompt, vous transformez l'inventaire en règle complète : familles de noms, correspondance des fournisseurs, et sort réservé à chaque cas qu'on ne sait pas traiter.",
    steps: [
      {
        title: 'Classer les noms',
        actions: [
          "Ouvrez inventaire_factures.txt ; triez mentalement les noms en familles de même forme (aidez-vous de Ctrl + F : « scan », « facture_ », « FACTURE »).",
          "Pour chaque famille, notez un exemple réel et le nombre de fichiers ; vérifiez que la somme fait 150.",
          "Pour chaque famille, écrivez le nouveau nom attendu, ou « laisser inchangé ».",
        ],
      },
      {
        title: 'Fixer les correspondances et les cas limites',
        actions: [
          "Listez le mot-clé qui identifie chaque fournisseur dans les noms, et le nom officiel sans espace à utiliser.",
          "Écrivez la règle pour les cas sans date ou sans fournisseur : ne pas renommer, afficher un message.",
          "Faites valider la règle par écrit par Josué Bahati (comptable), demandeur de la tâche.",
        ],
      },
    ],
    table: {
      columns: ['Mot-clé dans le nom (toute casse)', 'Nom officiel dans le nouveau nom'],
      rows: [
        ['transco', 'TranscoSarl'],
        ['kivu', 'KivuFreightCo'],
        ['alpha', 'AlphaLogistics'],
        ['beta', 'BetaSupply'],
        ['mwangaza', 'MwangazaEnergie'],
        ['bureauplus ou bureau plus', 'BureauPlusGoma'],
      ],
    },
    result: "Une règle d'une demi-page validée par Josué le 21/07/2026 : 5 familles (A à E), 6 fournisseurs, familles D et E laissées inchangées avec message. C'est le contenu de votre futur prompt.",
    pitfall: "Laisser l'IA « deviner » le nom des fournisseurs : elle écrira Transco, TRANSCO ou Transco_Sarl selon les fichiers, et la convention ne sera pas respectée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 3',
    title: 'Rédiger le prompt de description du besoin (norme CLARTE)',
    intro: "Le prompt reprend le Prompt 1 du module et l'adapte au dossier réel : volume, familles de noms, système d'exploitation, format de date exact, correspondance des fournisseurs. Les détails omis ici se paient plus tard, fichier par fichier.",
    steps: [
      {
        title: 'Assembler le prompt lettre par lettre',
        actions: [
          "A + C : rôle de l'IA, votre niveau réel, le dossier Windows et son volume.",
          "L : le script Python et le format de nom exact, avec un exemple avant / après.",
          "R : bibliothèques de base, table des fournisseurs, fichiers non identifiables laissés inchangés, aucune suppression.",
          "T : explication en 3 phrases en langage courant, avant le code.",
          "Collez la règle validée à l'étape précédente plutôt que de la résumer.",
        ],
      },
    ],
    example: {
      title: 'Prompt 1 appliqué au fil rouge (à copier)',
      lines: [
        "« Tu es un assistant technique qui écrit du code pour une personne non-développeuse du service administratif d'une organisation. [A]",
        `J'ai un dossier Windows (${P_COPIE}) contenant 150 fichiers PDF de factures fournisseurs aux noms hétérogènes : date au format JJMMAAAA présente ou non, casse variable, environ 10 noms génériques de scanner comme scan0047.pdf. [C]`,
        "Écris-moi un script Python qui renomme chaque fichier au format AAAA-MM-JJ_NomFournisseur.pdf, en lisant la date et le fournisseur dans le nom actuel. Exemple : facture_12032026_transco.pdf doit devenir 2026-03-12_TranscoSarl.pdf. [L + E]",
        "Fournisseurs (mot-clé → nom officiel) : transco → TranscoSarl ; kivu → KivuFreightCo ; alpha → AlphaLogistics ; beta → BetaSupply ; mwangaza → MwangazaEnergie ; bureauplus → BureauPlusGoma. [R]",
        "N'utilise que des bibliothèques Python de base. Laisse inchangé, avec un message clair dans le terminal, tout fichier dont la date ou le fournisseur n'est pas identifiable. Le script ne doit supprimer aucun fichier. [R]",
        "Explique-moi en 3 phrases maximum, en langage courant, ce que fait le script avant de me donner le code. » [T]",
      ],
    },
    result: "Un prompt dont chaque phrase correspond à une lettre CLARTE, qui contient le vrai chemin, le vrai volume, un exemple avant / après et la table des six fournisseurs.",
    tip: "Le système d'exploitation et le format de date doivent figurer dans ce premier prompt. Un script écrit sans préciser « Windows » ou « AAAA-MM-JJ » peut produire 12-03-2026 au lieu de 2026-03-12 — et vous le découvririez sur 150 fichiers.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 3',
    title: 'Obtenir le script dans Copilot et l\'enregistrer — sans l\'exécuter',
    intro: "Vous récupérez le script et vous le rangez proprement, en version numérotée. Vous ne le lancez pas : à ce stade, il n'a ni mode test ni relecture, et il contient l'instruction qui modifie le disque.",
    steps: [
      {
        title: 'Obtenir la réponse',
        actions: [
          "Collez le prompt dans le chat Copilot (mode Ask) et envoyez.",
          "Lisez d'abord les 3 phrases d'explication : correspondent-elles à votre règle ? Si non, répondez « Ce n'est pas ma règle : [préciser] » avant de regarder le code.",
          "Vérifiez que le chemin indiqué dans le code est bien celui de la copie de test.",
        ],
      },
      {
        title: 'Enregistrer en version 1',
        actions: [
          "Copiez le bloc de code avec le bouton de copie.",
          "Dans « scripts », créez renommer_factures_v1.py, collez, enregistrez (Ctrl + S).",
          "Vérifiez qu'aucun soulignement rouge n'apparaît dans l'éditeur (signe d'un collage incomplet).",
        ],
      },
    ],
    example: {
      title: "Explication rendue par Copilot (extrait)",
      lines: [
        "1. Le script parcourt un par un les fichiers PDF du dossier indiqué en haut du fichier.",
        "2. Pour chaque nom, il cherche une suite de 8 chiffres (la date) et l'un des mots-clés fournisseurs, puis construit le nouveau nom AAAA-MM-JJ_NomFournisseur.pdf.",
        "3. S'il ne trouve pas l'un des deux, il affiche « Non identifiable » et passe au fichier suivant sans le modifier.",
      ],
    },
    result: "Le fichier renommer_factures_v1.py est enregistré dans « scripts », non exécuté, et son explication en trois phrases correspond à la règle validée.",
    pitfall: "Cliquer sur l'éventuel bouton d'exécution (triangle « Run ») en haut à droite de l'éditeur « pour voir » : vous lanceriez un renommage réel, sans mode test, au premier essai.",
  },

  // ───────────── Procédure 3 — Lire le script sans être développeur ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Faire expliquer le script section par section (Prompt 2)',
    intro: "C'est cette explication, et non la lecture brute du code, qui vous permet de savoir ce que le script va faire. Le prompt répète volontairement votre niveau technique et interdit tout nouveau code : lire et modifier sont deux temps séparés.",
    steps: [
      {
        title: 'Lancer le prompt',
        actions: [
          "Dans le même chat, collez le Prompt 2 ci-dessous, en y collant le script v1.",
          "Gardez la réponse ouverte à côté du script (clic droit sur l'onglet > Fractionner à droite).",
          "Pour chaque section expliquée, retrouvez les lignes correspondantes dans l'éditeur.",
        ],
      },
    ],
    example: {
      title: 'Prompt 2 — explication en langage clair (CLARTE, à copier)',
      lines: [
        "« Tu es un assistant technique qui explique du code à une personne qui ne sait pas programmer. Voici le script que tu viens de me proposer : [coller le script].",
        "Explique-moi, section par section, ce que fait chaque partie, en une phrase simple par section, sans terme technique non expliqué.",
        "Indique clairement : où se trouve le nom du dossier que je dois adapter à mon cas, où se trouve la partie qui lit chaque fichier un par un, et où se trouve la partie qui renomme réellement un fichier sur le disque, avec leurs numéros de ligne.",
        "Ne me donne aucun nouveau code à ce stade, uniquement l'explication. »",
      ],
    },
    result: "Une explication en 6 à 8 sections, chacune en une phrase, avec les numéros de ligne des trois repères : dossier (ligne 4), boucle (ligne 14), renommage réel (ligne 25).",
    tip: "Ajoutez « avec leurs numéros de ligne » : VS Code affiche les numéros à gauche de l'éditeur, vous passez ainsi de l'explication au code sans chercher.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Repérer vous-même les lignes qui touchent aux fichiers',
    intro: "Ne vous fiez pas seulement à l'explication : un contrôle de trente secondes dans l'éditeur confirme qu'aucune action dangereuse n'a été oubliée dans la description.",
    steps: [
      {
        title: 'Chercher les instructions à risque',
        actions: [
          "Dans l'éditeur du script, Ctrl + F, puis cherchez tour à tour : rename, replace, move, remove, unlink, rmtree, open(.",
          "Pour chaque résultat, notez le numéro de ligne et ce que fait l'instruction (tableau « Les instructions qui touchent vos fichiers »).",
          "Vérifiez que le nombre trouvé correspond à l'explication de Copilot : ici, une seule action, os.rename, ligne 25.",
        ],
      },
      {
        title: 'Vérifier le dossier visé',
        actions: [
          "Cherchez DOSSIER : la ligne 4 doit contenir le chemin de la copie de test, terminé par COPIE_TEST.",
          "Vérifiez qu'aucun autre chemin n'apparaît dans le script (cherchez « C:\\ »).",
        ],
      },
    ],
    example: {
      title: 'Résultat du contrôle sur renommer_factures_v1.py',
      lines: [
        `Ligne 4 : DOSSIER = r"${P_COPIE}" → copie de test ✔`,
        "Ligne 14 : for nom in os.listdir(DOSSIER): → boucle sur chaque fichier ✔",
        "Ligne 25 : os.rename(…) → SEULE ligne qui modifie le disque",
        "remove / unlink / rmtree / move : aucun résultat ✔",
      ],
    },
    result: "Vous savez désigner la ligne exacte qui modifiera vos fichiers et vous avez confirmé que le script ne supprime ni ne déplace rien.",
    pitfall: "Trouver os.remove ou shutil.rmtree dans un script de renommage et le lancer quand même « parce que l'IA l'a mis » : demandez pourquoi, et faites retirer toute suppression que vous n'avez pas demandée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Interroger le script sur les cas limites',
    intro: "Un script se trompe rarement sur le cas général ; il se trompe sur les exceptions. Vous posez à l'IA des questions « Que se passe-t-il si… ? » sur les cas réels de votre dossier, avant qu'ils ne se produisent.",
    steps: [
      {
        title: 'Poser les questions de cas limites',
        actions: [
          "Que se passe-t-il si deux fichiers doivent recevoir le même nouveau nom ?",
          "Que se passe-t-il si la date du nom est impossible (31042026) ?",
          "Que fait le script d'un nom comme « Facture Alpha Logistics 18-06-2026.pdf » (date avec tirets) ?",
          "Que se passe-t-il si un PDF est ouvert pendant l'exécution ?",
          "Que se passe-t-il si on relance le script sur un dossier déjà renommé ?",
        ],
      },
      {
        title: 'Noter les réponses',
        actions: [
          "Pour chaque réponse, notez : comportement actuel, acceptable ou non, correction à demander.",
          "Ne demandez pas encore la correction : vous les regrouperez après la simulation (procédure 4).",
        ],
      },
    ],
    table: {
      columns: ['Cas limite', 'Réponse de Copilot sur la v1', 'Acceptable ?'],
      rows: [
        ['Deux fichiers → même nom', "Sous Windows, os.rename s'arrête avec FileExistsError au second : le dossier reste à moitié renommé", 'Non : à corriger'],
        ['Date impossible 31042026', "Non vérifiée : produit 2026-04-31", 'Non : à corriger'],
        ['Date avec tirets (famille C)', "Pas 8 chiffres consécutifs : « Non identifiable »", 'Non : 9 fichiers identifiables perdus'],
        ['PDF ouvert', 'PermissionError, arrêt du script', 'Oui, si vous fermez tout avant'],
        ['Relance sur dossier renommé', '2026-03-12_TranscoSarl.pdf ne contient pas 8 chiffres collés : non identifiable, rien ne change', 'Oui'],
      ],
    },
    result: "Trois défauts identifiés avant toute exécution, dont un (la collision) qu'aucune simulation simple n'aurait montré, puisque rien n'est renommé en mode test.",
    tip: "La question « Que se passe-t-il si on relance le script ? » est l'une des plus utiles : un script qu'on peut relancer sans dégât (on dit « idempotent ») est bien plus sûr à confier à un collègue.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Remplir la grille de lecture du guide de sécurité (section 2)',
    intro: "Le gabarit guide-securite-verification-scripts-ia.docx contient, en section 2, une « Grille de lecture du script, section par section » : un tableau à trois colonnes (Partie du script, Ce qu'elle fait en langage clair, Vérifiée ?) à remplir à partir de l'explication de l'IA, une ligne par grande partie.",
    steps: [
      {
        title: 'Préparer le document',
        actions: [
          "Copiez le gabarit dans « scripts » et renommez-le 2026-07-21_verification_renommer_factures.docx.",
          "Allez à la section 2. Le tableau a trois lignes vides : pour en ajouter, placez le curseur dans la dernière cellule et appuyez sur Tab.",
        ],
      },
      {
        title: 'Remplir ligne par ligne',
        actions: [
          "Colonne « Partie du script » : le nom de la partie et ses numéros de ligne.",
          "Colonne « Ce qu'elle fait, en langage clair » : la phrase de Copilot, reformulée avec vos mots.",
          "Colonne « Vérifiée ? » : « Oui » seulement si vous avez retrouvé la partie dans le code vous-même ; sinon « Non — » et la raison.",
        ],
      },
    ],
    table: {
      columns: ['Partie du script', "Ce qu'elle fait, en langage clair", 'Vérifiée ?'],
      rows: [
        ['Paramètres (lignes 4-11)', 'Dossier à traiter (copie de test) et table des 6 fournisseurs', 'Oui'],
        ['Boucle (ligne 14)', 'Prend les fichiers du dossier un par un, ignore ceux qui ne sont pas des PDF', 'Oui'],
        ['Recherche date / fournisseur (lignes 17-18)', 'Cherche 8 chiffres collés et un mot-clé fournisseur', 'Oui — ne lit pas les dates à tirets'],
        ['Fichiers non identifiables (lignes 19-21)', 'Affiche « Non identifiable » et passe au suivant', 'Oui'],
        ['Renommage (ligne 25)', 'Renomme réellement le fichier sur le disque', 'Oui — aucune protection contre les doublons de nom'],
      ],
    },
    result: "La section 2 du guide est remplie pour la v1, avec deux réserves écrites. Ce document vous accompagnera jusqu'à la validation finale (procédure 5).",
    pitfall: "Cocher « Oui » partout en recopiant l'explication de l'IA : la colonne « Vérifiée ? » atteste que VOUS avez retrouvé la partie dans le code, pas que l'IA l'a décrite.",
  },

  // ───────────── Procédure 4 — Tester en mode simulation et corriger ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Demander l\'ajout du mode test (Prompt 3, méthode STAR)',
    intro: "C'est l'étape la plus importante du module. Vous demandez un interrupteur simple, MODE_TEST, qui fait afficher au script ce qu'il ferait sans rien modifier. Vous profitez de la demande pour faire signaler en simulation les collisions de noms repérées à l'étape précédente.",
    steps: [
      {
        title: 'Envoyer le prompt et enregistrer',
        actions: [
          "Collez le Prompt 3 ci-dessous dans le chat, avec le script v1.",
          "Lisez la phrase finale : elle doit indiquer exactement quelle ligne changer pour passer en réel.",
          "Enregistrez le script obtenu sous renommer_factures_v1_test.py (la v1 reste intacte).",
          "Ctrl + F « MODE_TEST » : vérifiez que os.rename n'est appelé que dans la branche où MODE_TEST est False.",
        ],
      },
    ],
    example: {
      title: 'Prompt 3 appliqué au fil rouge (STAR, à copier)',
      lines: [
        "« Situation : j'ai le script de renommage de factures fournisseurs ci-dessus [coller le script], destiné à s'exécuter sur un dossier réel de 150 fichiers PDF juste avant la clôture comptable, sans possibilité de récupérer facilement un fichier mal renommé.",
        "Tâche : je veux vérifier exactement ce que le script ferait sur chacun des 150 fichiers avant qu'il ne renomme quoi que ce soit.",
        "Action : ajoute une variable MODE_TEST = True en haut du fichier ; quand elle est activée, affiche pour chaque fichier son nom actuel et son nouveau nom prévu, ou « non identifiable », sans renommer aucun fichier ; signale aussi « CONFLIT » quand deux fichiers recevraient le même nom ; termine par un bilan chiffré.",
        "Résultat attendu : le script avec ce mode test, et une phrase m'indiquant exactement quelle ligne changer pour passer à l'exécution réelle. »",
      ],
    },
    result: "Un script renommer_factures_v1_test.py avec MODE_TEST = True en ligne 6, et la phrase de Copilot : « Pour passer en réel, remplacez True par False à la ligne 6. »",
    tip: "Ce prompt s'applique à toute automatisation qui modifie, déplace ou crée des fichiers — fusion, extraction, tri. Gardez-le dans la bibliothèque de prompts : vous le réutiliserez aux procédures 6 et 7.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: 'Exécuter la simulation sur la copie de test',
    intro: "Même en mode test, le script tourne sur la copie : tant que vous n'avez pas vu qu'il ne touche à rien, vous ne le pointez pas vers l'original.",
    steps: [
      {
        title: 'Contrôles avant de lancer',
        actions: [
          "Vérifiez dans l'éditeur : MODE_TEST = True (ligne 6) et DOSSIER se termine par COPIE_TEST (ligne 4).",
          "Fermez tous les PDF et l'Explorateur ouverts sur la copie.",
          "Dans le terminal : (Get-ChildItem -Filter *.pdf -Path \"" + P_COPIE + "\").Count → notez 150.",
        ],
      },
      {
        title: 'Lancer',
        actions: [
          `cd ${P_SCRIPTS}`,
          "python renommer_factures_v1_test.py",
          "Faites défiler toute la sortie jusqu'au bilan final ; agrandissez le terminal si besoin (glissez sa bordure supérieure).",
        ],
      },
    ],
    example: {
      title: 'Sortie du terminal (extrait)',
      lines: [
        "[TEST] facture_12032026_transco.pdf  ->  2026-03-12_TranscoSarl.pdf",
        "[TEST] FACTURE_KIVU_05022026.pdf  ->  2026-02-05_KivuFreightCo.pdf",
        "[TEST] facture_31042026_beta.pdf  ->  2026-04-31_BetaSupply.pdf",
        "Non identifiable : Facture Alpha Logistics 18-06-2026.pdf",
        "Non identifiable : facture_transco_2.pdf",
        "Non identifiable : scan0047.pdf",
        "CONFLIT : FACTURE_TRANSCO_12032026.pdf -> 2026-03-12_TranscoSarl.pdf (nom déjà prévu)",
        "BILAN (simulation) : 150 fichiers lus — 114 renommages prévus — 3 conflits — 33 non identifiables — 0 fichier modifié",
      ],
    },
    result: "La simulation s'exécute jusqu'au bilan, sans message d'erreur, et annonce explicitement « 0 fichier modifié ».",
    pitfall: "Lancer la simulation, voir défiler des lignes « [TEST] » et conclure « ça marche » sans lire le bilan : c'est le bilan qui révèle les 33 non identifiables et les 3 conflits.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Lire le bilan et prouver que rien n\'a bougé',
    intro: "Le bilan doit se rapprocher, au fichier près, de votre inventaire. Puis vous vérifiez, par vous-même, que la simulation n'a vraiment rien modifié : c'est la preuve que le mode test est fiable.",
    steps: [
      {
        title: 'Rapprocher le bilan de l\'inventaire',
        actions: [
          "Vérifiez : prévus + conflits + non identifiables = fichiers lus = 150.",
          "Comparez les non identifiables aux familles de l'inventaire : D (13) + E (11) = 24 attendus ; le bilan en annonce 33.",
          "Cherchez l'écart dans la sortie (Ctrl + F dans le terminal : « Non identifiable : Facture ») : les 9 fichiers de la famille C.",
        ],
      },
      {
        title: 'Vérifier que rien n\'a changé',
        actions: [
          "Recomptez les PDF de la copie : toujours 150.",
          "Ouvrez la copie dans l'Explorateur : aucun nom au format 2026-…, les anciens noms sont intacts.",
          "Notez le bilan dans la fiche de vérification (en marge de la section 2).",
        ],
      },
    ],
    table: {
      columns: ['Ligne du bilan', 'Simulation v1', 'Attendu selon la règle', 'Écart'],
      rows: [
        ['Fichiers lus', '150', '150', '—'],
        ['Renommages prévus', '114', '125 (A + B + C − 1 date invalide)', '− 11'],
        ['Conflits signalés', '3', '0 (doivent être traités)', '+ 3'],
        ['Non identifiables', '33', '25 (D + E + 1 date invalide)', '+ 8'],
        ['Fichiers modifiés', '0', '0', '—'],
      ],
    },
    result: "Le mode test est fiable (0 fichier modifié, 150 noms intacts) et les écarts avec la règle sont expliqués : famille C non lue, 3 collisions, une date impossible encore acceptée.",
    tip: "Faites toujours ce rapprochement chiffré. Un bilan « 114 prévus » paraît satisfaisant tant qu'on ne le compare pas aux 125 attendus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Vérifier un échantillon de 18 fichiers contre le contenu des PDF',
    intro: "Le script ne lit que les noms ; seule une vérification humaine compare le nom proposé au contenu de la facture. Le module exige au moins 15 à 20 fichiers répartis dans tout le dossier, pas les 15 premiers.",
    steps: [
      {
        title: 'Construire l\'échantillon',
        actions: [
          "Prenez un fichier sur huit dans la sortie de simulation (150 ÷ 8 ≈ 18 fichiers).",
          "Complétez pour avoir au moins un fichier de chaque famille (A à E) et chaque ligne « CONFLIT ».",
        ],
      },
      {
        title: 'Contrôler chaque fichier',
        actions: [
          "Ouvrez le PDF de la copie ; lisez le fournisseur et la date de facture.",
          "Comparez au nouveau nom proposé ; notez Conforme ou l'écart.",
          "Pour les conflits, ouvrez les deux fichiers : s'agit-il de deux factures distinctes ou de la même facture scannée deux fois ?",
          "Refermez chaque PDF avant de passer au suivant.",
        ],
      },
    ],
    table: {
      columns: ['Fichier actuel', 'Nom proposé (v1)', 'Contenu du PDF', 'Verdict'],
      rows: [
        ['facture_12032026_transco.pdf', '2026-03-12_TranscoSarl.pdf', 'Transco Sarl, 12/03/2026, n° TS-2026-0312', 'Conforme'],
        ['FACTURE_TRANSCO_12032026.pdf', 'CONFLIT', 'Même facture TS-2026-0312, scannée deux fois', 'Doublon possible : à signaler'],
        ['FACTURE_KIVU_05022026.pdf', '2026-02-05_KivuFreightCo.pdf', 'Kivu Freight Co, 05/02/2026', 'Conforme'],
        ['facture_31042026_beta.pdf', '2026-04-31_BetaSupply.pdf', 'Beta Supply, 30/04/2026', 'Écart : date impossible'],
        ['Facture Alpha Logistics 18-06-2026.pdf', 'Non identifiable', 'Alpha Logistics, 18/06/2026', 'Écart : identifiable, non traité'],
        ['scan0047.pdf', 'Non identifiable', 'Mwangaza Energie, 21/05/2026', 'Conforme (inchangé)'],
      ],
    },
    result: "18 fichiers contrôlés : 15 conformes, 3 écarts (une date impossible, deux fichiers de la famille C), et la nature des 3 conflits établie : 1 double scan, 2 paires de factures distinctes du même jour.",
    pitfall: "Corriger à la main, dans la copie, les quelques fichiers en écart : le prochain lancement reproduira les mêmes erreurs. On corrige la règle du script, pas les fichiers.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Faire corriger les cas limites et relancer la simulation (v2)',
    intro: "Vous regroupez tous les défauts trouvés (questions de cas limites, bilan, échantillon) dans une seule demande STAR. La correction doit garder le mode test et ajouter un journal, qui deviendra la liste des fichiers inchangés exigée par le livrable.",
    steps: [
      {
        title: 'Demander la version 2',
        actions: [
          "Envoyez le prompt de correction ci-dessous, avec le script v1_test.",
          "Enregistrez le résultat sous renommer_factures_v2.py ; refaites l'étape 2 de la procédure 3 (Ctrl + F des instructions à risque).",
        ],
      },
      {
        title: 'Retester',
        actions: [
          "Relancez la simulation sur la copie : python renommer_factures_v2.py.",
          "Rapprochez le nouveau bilan de la règle ; ouvrez le journal CSV dans Excel.",
          "Revérifiez les 3 fichiers en écart et 5 nouveaux fichiers pris au hasard.",
        ],
      },
    ],
    example: {
      title: 'Prompt de correction (STAR) et nouveau bilan',
      lines: [
        "« Situation : la simulation du script ci-dessus montre trois défauts : les dates au format JJ-MM-AAAA ne sont pas lues, une date impossible (31042026) donne 2026-04-31, et deux fichiers peuvent recevoir le même nom. Tâche : corriger ces trois points sans rien changer d'autre. Action : (1) lis aussi les dates JJ-MM-AAAA ; (2) vérifie que la date existe, sinon laisse le fichier inchangé avec la raison « date invalide » ; (3) en cas de nom déjà pris, ajoute _2, _3… et marque « DOUBLON POSSIBLE », sans jamais écraser un fichier ; (4) écris un journal CSV (séparateur point-virgule, encodage utf-8-sig) à côté du script : Ancien nom ; Nouveau nom ; Statut ; Raison. Résultat attendu : le script complet, MODE_TEST toujours à True. »",
        "BILAN (simulation) : 150 fichiers lus — 125 renommages prévus (dont 3 avec suffixe _2, DOUBLON POSSIBLE) — 25 inchangés — 0 fichier modifié",
      ],
    },
    result: "Version 2 : 125 prévus + 25 inchangés = 150, exactement la règle validée ; journal journal_renommage_2026-07-22_1015.csv lisible dans Excel ; les 8 fichiers revérifiés sont conformes.",
    tip: "Le journal CSV est aussi votre assurance : avec les colonnes Ancien nom et Nouveau nom, l'IA peut écrire en deux minutes un script d'annulation qui remet chaque fichier sous son ancien nom.",
  },

  // ───────────── Procédure 5 — Exécuter, contrôler et documenter ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Compléter la checklist de sécurité et faire signer la validation',
    intro: "Avant de passer du mode test au mode réel, le guide de sécurité impose deux sections : la checklist de vérification (section 1, cinq cases) et la validation avant exécution réelle (section 3). Aucune case ne se coche « de mémoire » : chacune renvoie à une preuve.",
    steps: [
      {
        title: 'Section 1 — Checklist de vérification avant exécution réelle',
        actions: [
          "Cochez « Le script a été testé en mode simulation (dry-run) sur une copie… » : preuve, le bilan v2.",
          "Cochez « Aucune donnée confidentielle ou sensible n'a été collée dans un outil IA public… » : preuve, vos prompts ne contiennent que des noms d'exemple.",
          "Cochez « Une sauvegarde du dossier ou du fichier original existe… » : preuve, le ZIP du 20/07.",
          "Cochez « Le système d'exploitation et le format exact attendu ont été précisés dès le prompt de départ » : Windows, AAAA-MM-JJ.",
          "Cochez « Le mode test a été vérifié ligne par ligne sur un échantillon représentatif » : preuve, le tableau des 18 + 8 fichiers.",
        ],
      },
      {
        title: 'Section 2 mise à jour et section 3',
        actions: [
          "Ajoutez à la grille de lecture les nouvelles parties de la v2 (mode test, contrôle des dates, suffixe, journal).",
          "Section 3 : remplissez Nom du responsable de la vérification, Date de vérification, Outil utilisé, Dossier ou fichier concerné.",
          "Cochez « Autorisé à exécuter sur les données réelles » seulement si tout ce qui précède est coché ; sinon « À retester avant une nouvelle validation ».",
        ],
      },
    ],
    table: {
      columns: ['Champ de la section 3', 'Valeur saisie (fil rouge)'],
      rows: [
        ['Nom du responsable de la vérification', 'Amani Kahindo, chargée administrative et logistique'],
        ['Date de vérification', '23/07/2026'],
        ['Outil utilisé (VS Code + Copilot / Claude Code / ChatGPT)', 'VS Code + Copilot'],
        ['Dossier ou fichier concerné', `${P_ORIG} (150 PDF) — script renommer_factures_v2.py`],
        ['Case cochée', '☒ Autorisé à exécuter sur les données réelles'],
      ],
    },
    result: "La fiche de vérification est complète, signée et enregistrée dans « scripts » : l'exécution réelle est autorisée par écrit, avec ses preuves.",
    pitfall: "Remplir la fiche après l'exécution « pour la forme » : elle n'a de valeur que si elle a réellement conditionné le passage en réel.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: "Exécuter en mode réel : d'abord sur la copie, puis sur l'original",
    intro: "Vous passez en réel en deux temps. Sur la copie d'abord, pour vérifier que le renommage réel se comporte exactement comme la simulation ; puis sur l'original, après une dernière simulation qui prouve qu'il est identique à la copie.",
    steps: [
      {
        title: 'Temps 1 — réel sur la copie',
        actions: [
          "Ligne 6 : remplacez MODE_TEST = True par MODE_TEST = False ; enregistrez.",
          "python renommer_factures_v2.py ; le bilan doit dire « 125 renommés — 25 inchangés ».",
          "Ouvrez la copie dans l'Explorateur : les noms au nouveau format apparaissent, triés par date.",
        ],
      },
      {
        title: 'Temps 2 — réel sur l\'original',
        actions: [
          "Vérifiez que la sauvegarde ZIP du 20/07 s'ouvre (double-clic) et contient bien 150 PDF.",
          `Ligne 4 : remplacez le chemin par ${P_ORIG} ; ligne 6 : remettez MODE_TEST = True ; enregistrez ; lancez.`,
          "Le bilan de simulation doit être identique à celui de la copie (125 / 25). Sinon, arrêtez : l'original a changé depuis le 20/07.",
          "Repassez MODE_TEST = False, enregistrez, prévenez Josué que personne ne doit ouvrir le dossier, lancez.",
        ],
      },
    ],
    example: {
      title: 'Sortie finale sur l\'original (23/07/2026, 16 h 05)',
      lines: [
        "[RÉEL] facture_12032026_transco.pdf  ->  2026-03-12_TranscoSarl.pdf",
        "[RÉEL] FACTURE_TRANSCO_12032026.pdf  ->  2026-03-12_TranscoSarl_2.pdf  (DOUBLON POSSIBLE)",
        "[INCHANGÉ] facture_31042026_beta.pdf : date invalide",
        "BILAN (réel) : 150 fichiers lus — 125 renommés — 25 inchangés — 0 erreur",
        "Journal : journal_renommage_2026-07-23_1605.csv",
      ],
    },
    result: "L'original est renommé avec le même résultat que la copie, sans erreur, et un journal horodaté de l'exécution réelle existe.",
    pitfall: "Changer le chemin vers l'original ET passer MODE_TEST à False dans la même modification : une faute de frappe dans le chemin et vous découvrez le problème en réel. Un changement à la fois, une simulation entre les deux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: "Contrôler le résultat après exécution",
    intro: "Un bilan « 0 erreur » dit que le script s'est bien déroulé, pas que le résultat est juste. Trois contrôles indépendants du script confirment qu'aucun fichier n'a été perdu et que les noms correspondent aux factures.",
    steps: [
      {
        title: 'Compter',
        actions: [
          `cd ${P_ORIG}`,
          "(Get-ChildItem -Filter *.pdf).Count → 150 (aucun fichier perdu).",
          "(Get-ChildItem -Filter \"2026-*_*.pdf\").Count → 125 (fichiers au nouveau format).",
        ],
      },
      {
        title: 'Vérifier le contenu',
        actions: [
          "Dans l'Explorateur, triez par nom ; ouvrez 5 fichiers au hasard au nouveau format et comparez date et fournisseur au contenu.",
          "Ouvrez le journal CSV dans Excel ; filtrez Statut sur « Inchangé » : 25 lignes, chacune avec sa raison.",
          "Filtrez Statut sur « Doublon possible » : 3 lignes, à transmettre à Josué.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Attendu', 'Constaté', 'Statut'],
      rows: [
        ['Nombre total de PDF', '150', '150', '✔'],
        ['Fichiers au format AAAA-MM-JJ_NomFournisseur.pdf', '125', '125', '✔'],
        ['Fichiers inchangés listés au journal', '25', '25', '✔'],
        ['Doublons possibles signalés', '3', '3', '✔'],
        ['Échantillon de 5 fichiers renommés', '5 conformes', '5 conformes', '✔'],
      ],
    },
    result: "Un tableau de contrôle entièrement « ✔ », collé dans la fiche de vérification. Le dossier peut être rendu à la comptabilité.",
    tip: "Les 25 fichiers inchangés se traitent à la main en une quarantaine de minutes (ouvrir, lire, renommer). C'est normal et voulu : le script a signalé honnêtement ce qu'il ne savait pas faire, au lieu d'inventer des noms.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Documenter le script pour un collègue (Prompt 4, méthode STAR)',
    intro: "Dans six mois, ni vous ni un collègue ne vous souviendrez de la ligne à modifier. La documentation se fait maintenant, sur un comportement vérifié, et produit deux livrables distincts : un commentaire en tête du script et une note de trois phrases en langage courant.",
    steps: [
      {
        title: 'Obtenir la documentation',
        actions: [
          "Collez le Prompt 4 ci-dessous avec le script v2 (remis en MODE_TEST = True et sur le chemin de la copie, état par défaut sûr).",
          "Collez le commentaire obtenu en tête de renommer_factures_v2.py ; enregistrez.",
          "Relancez une simulation : un commentaire mal collé peut casser le script.",
        ],
      },
      {
        title: 'Tester la documentation',
        actions: [
          "Donnez le script et la note à un collègue non-développeur (Josué) et demandez-lui de lancer la simulation seul.",
          "Corrigez toute phrase sur laquelle il a dû vous poser une question.",
        ],
      },
    ],
    example: {
      title: 'Prompt 4 (STAR) et commentaire obtenu',
      lines: [
        "« Situation : le script de renommage de factures a fonctionné correctement sur mon dossier réel de 150 fichiers, vérifié par échantillonnage. Tâche : pouvoir le réutiliser dans six mois ou le confier à un collègue qui n'a jamais vu de code. Action : ajoute en haut du script un commentaire qui explique à quoi il sert, quel dossier indiquer avant de le lancer, comment activer le mode test et quelle commande exacte taper dans le terminal. Résultat attendu : un fichier transmissible tel quel, plus trois phrases en langage courant, hors du script, pour une note interne. »",
        "# RENOMMER_FACTURES_V2 — Horizon Grands Lacs, service administratif (validé le 23/07/2026)",
        "# À quoi il sert : renomme les factures PDF d'un dossier au format AAAA-MM-JJ_NomFournisseur.pdf.",
        "# Avant de lancer : mettez dans DOSSIER le chemin de VOTRE COPIE du dossier (copier en tant que chemin d'accès).",
        "# Mode test : MODE_TEST = True affiche les renommages prévus sans rien modifier. False = renommage réel.",
        "# Lancement : dans le terminal de VS Code, tapez  python renommer_factures_v2.py",
        "# Résultat : journal_renommage_<date>.csv à côté du script (fichiers inchangés et doublons possibles).",
      ],
    },
    result: "Un script dont l'en-tête répond aux quatre questions (à quoi, quel dossier, mode test, commande), validé par un collègue qui a réussi la simulation sans aide.",
    pitfall: "Faire documenter le script avant de l'avoir validé : l'IA décrit alors ce que le script est censé faire, pas ce qu'il fait. Le Prompt 4 commence volontairement par « a fonctionné correctement ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Rédiger la note, transmettre la liste des inchangés et consigner dans la bibliothèque',
    intro: "Le livrable du module comprend trois pièces en plus du script : la liste des fichiers laissés inchangés avec leur raison, une note de trois phrases, et la trace de l'automatisation dans la bibliothèque de prompts (feuille « Bibliotheque de prompts » du gabarit xlsx).",
    steps: [
      {
        title: 'Transmettre à la comptabilité',
        actions: [
          "Depuis le journal CSV, filtrez Statut ≠ « Renommé » et enregistrez sous inchanges_et_doublons_2026-07-23.xlsx (28 lignes : 25 inchangés + 3 doublons possibles).",
          "Envoyez-le à Josué avec la note de trois phrases ; précisez que les doublons possibles sont à trancher sur pièces, pas par le script.",
        ],
      },
      {
        title: 'Remplir la bibliothèque de prompts',
        actions: [
          "Ouvrez bibliotheque-prompts-delegation-technique.xlsx : en-têtes en ligne 4, exemples en lignes 5 à 8, lignes libres à partir de 9.",
          "Ligne 9 : renseignez Tache a automatiser, Description en langage courant, Prompt complet (CLARTE ou STAR).",
          "Colonnes Outil utilise et Statut de test : choisissez dans la liste déroulante (valeurs sans accents dans le fichier).",
          "Statut « Execute sur donnees reelles » uniquement après l'étape 3 ; rangez scripts, fiche et journaux dans « scripts ».",
        ],
      },
    ],
    table: {
      columns: ['Colonne (ligne 9)', 'Valeur saisie'],
      rows: [
        ['Tache a automatiser', 'Renommage des factures fournisseurs S1 2026 (v2)'],
        ['Description en langage courant', '150 PDF aux noms hétérogènes renommés en AAAA-MM-JJ_NomFournisseur.pdf ; non identifiables et doublons laissés au jugement de la comptabilité'],
        ['Prompt complet (CLARTE ou STAR)', 'Prompt 1 du fil rouge + prompt de correction v2 (collés en entier)'],
        ['Outil utilise', 'VS Code + Copilot'],
        ['Statut de test', 'Execute sur donnees reelles'],
      ],
    },
    example: {
      title: 'Note de trois phrases (pour un collègue, dans six mois)',
      lines: [
        "1. Le script renommer_factures_v2.py renomme les factures PDF au format AAAA-MM-JJ_NomFournisseur.pdf à partir de leur nom actuel ; il ne supprime rien et laisse inchangé ce qu'il ne reconnaît pas.",
        "2. Faites d'abord une sauvegarde ZIP et une copie du dossier, indiquez le chemin de la copie dans DOSSIER, lancez « python renommer_factures_v2.py » en mode test et vérifiez 15 à 20 fichiers.",
        "3. Si tout est juste, passez MODE_TEST à False, rejouez sur l'original après une dernière simulation identique, puis traitez à la main les fichiers listés « Inchangé » ou « Doublon possible » dans le journal CSV.",
      ],
    },
    result: "Livrable complet remis à la comptabilité le 24/07/2026 : dossier renommé, liste des 28 cas à traiter, note de trois phrases ; la tâche figure en ligne 9 de la bibliothèque.",
  },

  // ───────────── Procédure 6 — Fusionner des exports Excel avec Claude Code ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Préparer la fusion : copie des exports et contrôle des en-têtes',
    intro: "Furaha Bisimwa veut pour la clôture un journal des dépenses du semestre en un seul fichier. Le service comptable produit un export par mois. Avant de déléguer, vous posez les mêmes filets que pour les factures et vous relevez ce que chaque fichier contient — la base de votre contrôle final.",
    steps: [
      {
        title: 'Copier et sauvegarder',
        actions: [
          "Zippez le dossier Exports_mensuels_2026 de la comptabilité dans « sauvegardes ».",
          `Copiez-le dans « essais » sous le nom Exports_S1_COPIE_TEST.`,
          "Fermez tous les classeurs : un fichier Excel ouvert ne peut pas être lu par un script.",
        ],
      },
      {
        title: 'Relever les en-têtes et les totaux de référence',
        actions: [
          "Ouvrez chaque export : notez le nom de la feuille, les en-têtes de la ligne 1, le nombre de lignes de données et le total de la colonne Montant (=SOMME).",
          "Repérez tout fichier dont le nom ou les en-têtes s'écartent du modèle.",
        ],
      },
    ],
    table: {
      columns: ['Fichier', 'Lignes', 'Total Montant (USD)', 'Remarque'],
      rows: [
        ['depenses_2026-01.xlsx', '214', '61 480', 'Modèle : Date, Fournisseur, Catégorie, Montant, Site'],
        ['depenses_2026-02.xlsx', '198', '58 920', ''],
        ['depenses_2026-03.xlsx', '236', '64 310', ''],
        ['depenses_2026-03 (copie).xlsx', '236', '64 310', 'Copie accidentelle de mars'],
        ['depenses_2026-04.xlsx', '251', '71 950', 'En-tête « Montant USD » au lieu de « Montant »'],
        ['depenses_2026-05.xlsx', '243', '69 140', ''],
        ['depenses_2026-06.xlsx', '227', '60 275', ''],
      ],
    },
    result: "Une fiche de référence : 6 exports valides, 1 369 lignes, 386 075 USD au total, et deux anomalies connues d'avance (copie de mars, en-tête d'avril).",
    tip: "Ce relevé prend dix minutes et vaut toute la suite : sans totaux de référence, vous ne pourrez jamais prouver que le fichier fusionné n'a perdu ni dupliqué aucune ligne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Lancer Claude Code dans l\'espace de travail et lui confier la tâche (STAR)',
    intro: "La fusion comporte plusieurs étapes (lire, contrôler, assembler, écrire) : c'est le cas d'usage de Claude Code, l'agent qui écrit le script, le teste et vous rend compte. Il s'installe selon la documentation officielle d'Anthropic, avec un compte validé par votre organisation, et se lance dans le terminal de VS Code.",
    steps: [
      {
        title: 'Lancer l\'agent au bon endroit',
        actions: [
          `Dans le terminal de VS Code : cd ${P_RACINE}`,
          "Tapez claude puis Entrée : l'agent s'ouvre dans le terminal et ne voit que ce dossier et ses sous-dossiers.",
          "Ne lancez jamais l'agent depuis C:\\ ou depuis le dossier de la comptabilité.",
        ],
      },
      {
        title: 'Donner la tâche',
        actions: [
          "Collez le prompt ci-dessous, adapté de la ligne 6 de la bibliothèque de prompts.",
          "Précisez l'unique bibliothèque externe autorisée (openpyxl, pour lire et écrire les .xlsx), validée au préalable avec le service informatique.",
        ],
      },
    ],
    example: {
      title: 'Prompt de fusion (STAR) — fil rouge',
      lines: [
        "« Situation : le dossier essais\\Exports_S1_COPIE_TEST contient les exports mensuels de dépenses de janvier à juin 2026 (fichiers depenses_AAAA-MM.xlsx), avec les colonnes Date, Fournisseur, Catégorie, Montant, Site. Je ne suis pas développeuse.",
        "Tâche : obtenir un seul fichier sorties\\fusion_S1_2026.xlsx qui réunit toutes les lignes, avec une seule ligne d'en-tête.",
        "Action : écris dans scripts\\fusionner_exports.py un script Python qui lit uniquement les fichiers dont le nom suit exactement le modèle depenses_AAAA-MM.xlsx, vérifie que les en-têtes sont identiques au modèle, ajoute une colonne Fichier_source, et refuse d'écrire le fichier final si un fichier présente un écart. Seule bibliothèque externe autorisée : openpyxl. Ajoute MODE_TEST = True : afficher par fichier le nombre de lignes, le total de Montant et le statut, sans rien écrire. Ne modifie et ne supprime aucun fichier existant.",
        "Résultat attendu : le script, une simulation exécutée, et un compte rendu en langage courant. »",
      ],
    },
    result: "Claude Code a reçu une tâche bornée : dossier source, dossier de sortie, modèle de nom, contrôles, mode test, interdictions explicites.",
    tip: "Les chemins relatifs (essais\\…, sorties\\…) fonctionnent parce que l'agent est lancé depuis HGL_Automatisations : c'est une raison de plus pour toujours démarrer au même endroit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: "Superviser l'agent : autoriser ou refuser chaque action",
    intro: "Un agent agit, mais il vous demande votre accord avant chaque action sensible : créer ou modifier un fichier, exécuter une commande. Votre rôle est de lire chaque demande avant de répondre — c'est l'équivalent, pour un agent, de l'étape de lecture du script.",
    steps: [
      {
        title: 'Lire chaque demande d\'autorisation',
        actions: [
          "Création de scripts\\fusionner_exports.py : vérifiez le chemin, puis autorisez.",
          "Commande python -m pip install openpyxl : autorisez seulement si le service informatique l'a validée.",
          "Commande python scripts\\fusionner_exports.py : vérifiez que MODE_TEST = True dans le fichier créé (ouvrez-le dans VS Code), puis autorisez.",
          "Toute action sur un chemin hors de HGL_Automatisations, toute suppression, toute commande que vous ne comprenez pas : refusez et demandez « Explique-moi cette commande en une phrase ».",
        ],
      },
      {
        title: 'Lire le compte rendu',
        actions: [
          "Relisez le compte rendu final de l'agent : fichiers créés, commandes exécutées, résultat.",
          "Demandez-lui ensuite le Prompt 2 : « Explique-moi section par section le script que tu as écrit, en langage courant, avec les numéros de ligne de l'écriture du fichier final. »",
        ],
      },
    ],
    example: {
      title: "Compte rendu de Claude Code (extrait)",
      lines: [
        "J'ai créé scripts\\fusionner_exports.py et l'ai exécuté en mode test : aucun fichier n'a été écrit.",
        "7 fichiers trouvés : 1 ignoré (nom hors modèle : « depenses_2026-03 (copie).xlsx »), 5 conformes, 1 en écart (avril : colonne « Montant USD »).",
        "Comme demandé, le fichier final ne sera pas écrit tant que l'écart d'avril subsiste.",
      ],
    },
    result: "Le script existe, n'a encore rien écrit, et l'agent a lui-même signalé les deux anomalies que votre relevé de l'étape 1 avait prévues.",
    pitfall: "Choisir l'option qui autorise d'avance toutes les commandes de la session « pour ne plus être dérangé » : vous perdez précisément le contrôle que le module vous apprend à exercer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Analyser la simulation et traiter les écarts',
    intro: "La simulation de la fusion se lit comme celle du renommage : on rapproche ses chiffres de la fiche de référence, puis on tranche chaque écart — en décidant vous-même, pas en laissant l'agent « arranger » les données.",
    steps: [
      {
        title: 'Rapprocher',
        actions: [
          "Comparez ligne à ligne la sortie de simulation à votre fiche de référence (lignes et totaux par fichier).",
          "Fichier (copie) : confirmez qu'il est identique à mars (236 lignes, 64 310 USD) → l'exclure est correct.",
        ],
      },
      {
        title: 'Traiter l\'écart d\'avril',
        actions: [
          "Vérifiez avec Josué que « Montant USD » contient bien des montants en USD (même unité que les autres mois).",
          "Dans la COPIE de test seulement, ouvrez depenses_2026-04.xlsx, renommez l'en-tête D1 en « Montant », enregistrez, fermez ; notez la correction dans la fiche de vérification.",
          "Demandez à l'agent de relancer la simulation.",
        ],
      },
    ],
    example: {
      title: 'Seconde simulation',
      lines: [
        "[TEST] depenses_2026-01.xlsx : 214 lignes — 61 480,00 — OK",
        "[TEST] depenses_2026-02.xlsx : 198 lignes — 58 920,00 — OK",
        "[TEST] depenses_2026-03 (copie).xlsx : IGNORÉ (nom hors modèle)",
        "[TEST] depenses_2026-03.xlsx : 236 lignes — 64 310,00 — OK",
        "[TEST] depenses_2026-04.xlsx : 251 lignes — 71 950,00 — OK",
        "[TEST] depenses_2026-05.xlsx : 243 lignes — 69 140,00 — OK",
        "[TEST] depenses_2026-06.xlsx : 227 lignes — 60 275,00 — OK",
        "BILAN (simulation) : 6 fichiers fusionnables — 1 369 lignes — 386 075,00 USD — aucun fichier écrit",
      ],
    },
    result: "La simulation concorde exactement avec la fiche de référence : 6 fichiers, 1 369 lignes, 386 075 USD.",
    pitfall: "Demander à l'agent « corrige l'en-tête d'avril » : il modifierait un fichier source de sa propre initiative. Les données sources se corrigent par une personne, sur la copie, avec une trace écrite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Écrire le fichier fusionné, le contrôler dans Excel et le consigner',
    intro: "Le passage en réel n'écrit qu'un fichier nouveau dans « sorties » : les exports ne sont pas modifiés. Le contrôle final se fait dans Excel, indépendamment du script, avec les totaux de la fiche de référence.",
    steps: [
      {
        title: 'Passer en réel',
        actions: [
          "Ouvrez fusionner_exports.py dans VS Code, passez MODE_TEST à False vous-même, enregistrez.",
          "Lancez python scripts\\fusionner_exports.py (ou autorisez l'agent à le faire) ; le bilan doit annoncer 1 369 lignes écrites.",
        ],
      },
      {
        title: 'Contrôler dans Excel',
        actions: [
          "Ouvrez sorties\\fusion_S1_2026.xlsx ; en-têtes en ligne 1 : Date, Fournisseur, Catégorie, Montant, Site, Fichier_source.",
          "=NBVAL(A:A)-1 → 1 369 ; =SOMME(D:D) → 386 075.",
          "Filtrez la colonne Date : aucune valeur « Date » (pas d'en-tête recopié au milieu) ; filtrez Fichier_source : 6 valeurs, pas de « (copie) ».",
          "Ajoutez la ligne 10 dans la bibliothèque : Tache « Fusion des exports mensuels S1 2026 », Outil « Claude Code », Statut « Execute sur donnees reelles ».",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Référence (étape 1)', 'Fichier fusionné', 'Statut'],
      rows: [
        ['Lignes de données', '1 369', '1 369', '✔'],
        ['Total Montant (USD)', '386 075', '386 075', '✔'],
        ["Lignes d'en-tête", '1', '1', '✔'],
        ['Fichiers sources', '6', '6 valeurs dans Fichier_source', '✔'],
      ],
    },
    result: "fusion_S1_2026.xlsx est rapproché au dollar et à la ligne près, transmis à Furaha et Josué le 27/07/2026, et la tâche est consignée en ligne 10 de la bibliothèque.",
    tip: "Le mois prochain, il suffira d'ajouter depenses_2026-07.xlsx dans une nouvelle copie et de rejouer simulation, contrôle et exécution : le script, déjà documenté, ne change pas.",
  },

  // ───────────── Procédure 7 — Mini-outil réutilisable ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Définir les règles du mini-outil de tri et rédiger le prompt (STAR)',
    intro: "Un mini-outil est un script que vous relancerez régulièrement, souvent sans y repenser. Il doit donc être plus prudent qu'un script ponctuel : simulation par défaut, aucun écrasement, fichiers en cours de téléchargement laissés en place. Cas du fil rouge : le dossier Téléchargements d'Amani, 415 fichiers en vrac.",
    steps: [
      {
        title: 'Écrire les règles',
        actions: [
          "Listez les sous-dossiers voulus (ceux de la ligne 8 de la bibliothèque : Documents, Images, Tableurs, Autres) et les extensions de chacun.",
          "Listez ce qu'il ne faut jamais déplacer : desktop.ini, téléchargements en cours (.crdownload, .part, .tmp), sous-dossiers existants.",
          "Fixez la règle de doublon : si le nom existe déjà dans le sous-dossier, ajouter « (2) », ne jamais écraser.",
        ],
      },
      {
        title: 'Rédiger et envoyer le prompt',
        actions: [
          "Adaptez le prompt de la ligne 8 de la bibliothèque avec vos règles, puis envoyez-le dans Copilot (mode Ask).",
          "Enregistrez le script sous scripts\\trier_telechargements.py, puis appliquez la procédure 3 (explication, Ctrl + F : move, makedirs).",
        ],
      },
    ],
    example: {
      title: 'Prompt du mini-outil (STAR) — fil rouge',
      lines: [
        "« Situation : mon dossier Téléchargements (Windows) contient plusieurs centaines de fichiers de types différents mélangés. Tâche : un mini-outil réutilisable qui range chaque fichier dans un sous-dossier selon son extension.",
        "Action : écris un script Python (bibliothèques de base) qui crée si besoin Documents (.pdf .doc .docx .txt .pptx), Images (.jpg .jpeg .png .gif .heic), Tableurs (.xlsx .xls .csv) et Autres, puis y déplace chaque fichier. Ignore desktop.ini, les fichiers .crdownload, .part, .tmp et les sous-dossiers. N'écrase jamais un fichier : ajoute (2), (3)… La simulation est le comportement par défaut ; le déplacement réel n'a lieu que si on lance le script avec --reel. Termine par un bilan par sous-dossier.",
        "Résultat attendu : le script, et un commentaire expliquant comment le lancer d'un double-clic. »",
      ],
    },
    result: "Un script de tri enregistré, lu et contrôlé : deux instructions à risque seulement (os.makedirs pour créer les sous-dossiers, shutil.move pour déplacer), toutes deux inactives sans --reel.",
    tip: "« Simulation par défaut, réel sur demande explicite » est le bon réglage pour tout outil relancé régulièrement : une erreur de manipulation produit au pire un affichage, jamais un déplacement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Tester sur un échantillon copié, puis simuler sur le vrai dossier',
    intro: "Copier 415 fichiers pesant plusieurs gigaoctets n'a pas de sens : pour un mini-outil, la copie de test peut être un échantillon représentatif. Une fois le comportement validé sur l'échantillon, la simulation sur le vrai dossier est sans risque, puisqu'elle n'écrit rien.",
    steps: [
      {
        title: 'Échantillon de test',
        actions: [
          "Créez essais\\Telechargements_COPIE_TEST et copiez-y 80 fichiers couvrant tous les cas : chaque extension, un desktop.ini, un .crdownload, deux fichiers sans extension.",
          "Pointez DOSSIER vers cette copie ; lancez python trier_telechargements.py (simulation), puis python trier_telechargements.py --reel.",
          "Vérifiez dans l'Explorateur : sous-dossiers créés, fichiers au bon endroit, desktop.ini et .crdownload restés en place.",
          "Relancez avec --reel : rien ne doit bouger (outil relançable sans dégât).",
        ],
      },
      {
        title: 'Simulation sur le vrai dossier',
        actions: [
          "Pointez DOSSIER vers C:\\Users\\amani.kahindo\\Downloads ; lancez sans --reel.",
          "Rapprochez le bilan du nombre de fichiers affiché par l'Explorateur (barre d'état : « 415 éléments »).",
        ],
      },
    ],
    example: {
      title: 'Bilan de simulation sur le vrai dossier',
      lines: [
        "[SIMULATION] Documents : 215 — Images : 121 — Tableurs : 52 — Autres : 24",
        "[SIMULATION] Ignorés : 3 (desktop.ini, 2 téléchargements en cours)",
        "[SIMULATION] Total : 412 déplacements prévus + 3 ignorés = 415 — aucun fichier déplacé",
        "Pour exécuter réellement : python trier_telechargements.py --reel",
      ],
    },
    result: "Comportement validé sur 80 fichiers copiés, relance sans dégât vérifiée, et simulation du vrai dossier rapprochée : 412 + 3 = 415.",
    pitfall: "Tester sur un échantillon qui ne contient que des PDF : les cas qui posent problème (fichier en cours de téléchargement, sans extension, même nom) ne sont jamais testés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: "Exécuter et rendre l'outil lançable d'un double-clic",
    intro: "Un outil que l'on doit relancer en ouvrant VS Code et en tapant une commande ne sera pas utilisé. Deux petits fichiers de lancement (.bat) suffisent à en faire un outil de bureau, en gardant la simulation comme premier réflexe.",
    steps: [
      {
        title: 'Exécution réelle',
        actions: [
          "Fermez les fichiers ouverts depuis Téléchargements ; lancez python trier_telechargements.py --reel.",
          "Vérifiez le bilan (412 déplacés, 3 ignorés) et le nombre d'éléments de chaque sous-dossier dans l'Explorateur.",
        ],
      },
      {
        title: 'Créer les lanceurs',
        actions: [
          "Dans « scripts », clic droit > Nouveau fichier > trier_SIMULATION.bat ; collez les trois lignes de l'exemple ; enregistrez.",
          "Créez trier_REEL.bat de la même façon, en ajoutant --reel à la fin de la ligne python.",
          "Dans l'Explorateur, clic droit sur trier_SIMULATION.bat > Afficher d'autres options > Envoyer vers > Bureau (créer un raccourci) ; faites de même pour REEL.",
          "Double-cliquez sur le raccourci SIMULATION : une fenêtre affiche le bilan et attend une touche.",
        ],
      },
    ],
    example: {
      title: 'Contenu de trier_SIMULATION.bat',
      lines: [
        "@echo off",
        `python "${P_SCRIPTS}\\trier_telechargements.py"`,
        "pause",
      ],
    },
    result: "Le dossier Téléchargements est rangé en 4 sous-dossiers, et deux raccourcis sur le bureau permettent de simuler puis d'exécuter le tri sans ouvrir VS Code.",
    tip: "Routine conseillée : chaque vendredi, double-clic sur SIMULATION, lecture du bilan, puis double-clic sur REEL seulement si le bilan est normal. À la deuxième semaine, le bilan d'Amani a signalé 2 fichiers renommés « (2) » : l'outil a évité deux écrasements.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: "Documenter le mini-outil et l'inscrire dans la bibliothèque",
    intro: "Un mini-outil est fait pour durer et passer de main en main. Vous appliquez le Prompt 4 comme pour les factures, puis vous enregistrez l'outil dans la bibliothèque, avec un statut qui reflète honnêtement où en sont les tests.",
    steps: [
      {
        title: 'Documenter',
        actions: [
          "Appliquez le Prompt 4 (STAR) au script validé : en-tête « à quoi il sert, quel dossier, simulation par défaut, commande et lanceurs .bat ».",
          "Ajoutez à la note interne : « Ne jamais pointer DOSSIER vers un dossier partagé ou vers le Bureau. »",
        ],
      },
      {
        title: 'Mettre à jour la bibliothèque',
        actions: [
          "La ligne 8 du gabarit (Mini-outil de tri de fichiers par type, statut « A tester ») est un exemple : laissez-la telle quelle.",
          "En ligne 11, saisissez votre version : tâche, description, prompt complet, Outil « VS Code + Copilot », Statut « Execute sur donnees reelles ».",
          "Relisez le rappel de sécurité de la cellule A20 : il s'applique à chaque nouvelle ligne.",
        ],
      },
    ],
    result: "La bibliothèque compte trois automatisations réelles (lignes 9 à 11), chacune avec son prompt complet, son outil et un statut de test vérifié.",
    tip: "La bibliothèque devient la mémoire du service : avant de demander un nouveau script, cherchez-y une tâche voisine (Ctrl + F) et repartez de son prompt déjà éprouvé.",
  },

  // ───────────── Étude de cas corrigée ─────────────
  {
    type: 'case-study',
    title: 'Corrigé intégral 1/3 — Préparer, décrire, lire',
    scenario: "Rappel : 150 factures PDF aux noms hétérogènes reçues le lundi 20 juillet 2026, clôture le vendredi 31 juillet, consigne unique « il faut que ces factures soient nommées pareil ». Voici le raisonnement complet d'Amani, tel qu'un correcteur l'attend.",
    steps: [
      { title: 'Poste et filets', body: "VS Code en français, Python vérifié (python --version), Copilot en mode Ask. Sauvegarde ZIP datée, copie COPIE_TEST, espace de travail ouvert dans VS Code — jamais le dossier de la comptabilité.", result: 'Inventaire en lecture seule : 150 PDF.' },
      { title: 'Règle', body: "Cinq familles (A 96, B 21, C 9, D 13, E 11), six fournisseurs avec leur nom officiel, familles D et E laissées inchangées avec message. Règle validée par écrit par la comptabilité." },
      { title: 'Description', body: "Prompt CLARTE avec chemin, volume, format AAAA-MM-JJ, exemple avant / après, table des fournisseurs, bibliothèques de base, aucune suppression. Script v1 enregistré, non exécuté." },
      { title: 'Lecture', body: "Explication section par section (Prompt 2) ; Ctrl + F : une seule instruction à risque, os.rename ligne 25 ; dossier visé = copie. Questions de cas limites : collision (arrêt FileExistsError), date impossible non contrôlée, dates à tirets non lues.", result: 'Grille de lecture remplie, deux réserves écrites.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 2/3 — Tester, corriger, exécuter',
    scenario: "Le script v1 est lu et ses risques sont connus. Amani déroule la simulation, corrige la règle, puis exécute en deux temps.",
    steps: [
      { title: 'Mode test (Prompt 3)', body: "MODE_TEST = True, affichage ancien / nouveau nom, signalement des conflits. Simulation sur la copie : 114 prévus, 3 conflits, 33 non identifiables, 0 fichier modifié — écart de 11 avec la règle (125 attendus)." },
      { title: 'Échantillon', body: "18 fichiers (un sur huit + chaque famille + chaque conflit) comparés au contenu des PDF : 15 conformes, 3 écarts ; conflits = 1 double scan (TS-2026-0312) et 2 paires de factures distinctes du même jour." },
      { title: 'Version 2', body: "Prompt de correction STAR : dates JJ-MM-AAAA, contrôle de validité, suffixe _2 sans écrasement, journal CSV. Nouvelle simulation : 125 prévus (dont 3 suffixés), 25 inchangés, 0 modifié." },
      { title: 'Validation et exécution', body: "Checklist (5 cases) et section 3 signées le 23/07. Réel sur la copie, puis simulation identique sur l'original, puis réel sur l'original : 125 renommés, 25 inchangés, 0 erreur." },
      { title: 'Contrôles', body: "150 PDF avant et après ; 125 au nouveau format ; 25 inchangés et 3 doublons possibles au journal ; 5 fichiers rouverts conformes." },
    ],
    table: {
      columns: ['Étape', 'Prévus / renommés', 'Inchangés', 'Conflits', 'Fichiers modifiés'],
      rows: [
        ['Simulation v1', '114', '33', '3', '0'],
        ['Simulation v2 (copie)', '125', '25', '0 (3 suffixés)', '0'],
        ['Réel v2 (original)', '125', '25', '0 (3 suffixés)', '125'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Corrigé intégral 3/3 — Les livrables remis à la comptabilité',
    scenario: "Voici ce qu'Amani remet le vendredi 24 juillet 2026, une semaine avant la clôture : exactement le livrable attendu par l'exercice du module.",
    steps: [
      { title: '1. Script final documenté', body: "renommer_factures_v2.py : en-tête de six lignes (à quoi il sert, dossier, mode test, commande, journal), MODE_TEST = True par défaut, chemin par défaut sur une copie." },
      { title: '2. Fichiers laissés inchangés, avec la raison', body: "25 fichiers : 13 « pas de date dans le nom » (famille D, ex. facture_transco_2.pdf), 11 « ni date ni fournisseur » (famille E, ex. scan0047.pdf), 1 « date invalide » (facture_31042026_beta.pdf, facture datée du 30/04). Plus 3 doublons possibles à trancher sur pièces, dont 2026-03-12_TranscoSarl_2.pdf (double scan de TS-2026-0312)." },
      { title: '3. Note de trois phrases', body: "Ce que fait le script et ce qu'il ne fait pas ; comment le préparer et le simuler ; comment passer en réel et traiter les cas du journal." },
      { title: '4. Traçabilité', body: "Guide de sécurité complété (checklist, grille de lecture, validation signée) ; journaux de simulation et d'exécution ; ligne 9 de la bibliothèque au statut « Execute sur donnees reelles »." },
    ],
    result: "Résultat pour la comptabilité : 125 factures classées automatiquement en 2 secondes, 25 traitées à la main en 40 minutes au lieu de 3 h 45 pour l'ensemble, et un double scan détecté avant la clôture. Patrick retrouve désormais une facture Transco en triant par nom.",
    tip: "Gardez ce corrigé comme modèle : sur votre prochaine automatisation, seuls la tâche, les chemins et les chiffres changeront ; la séquence décrire, lire, tester, exécuter, documenter reste identique.",
  },

  // ───────────── Exercices ─────────────
  {
    type: 'exercise',
    title: 'Exercice noté — Renommer 150 factures fournisseurs en toute sécurité',
    instructions: "Reproduisez le cas du module sans regarder les diapositives de procédure. Vous n'avez pas les factures d'Horizon Grands Lacs : commencez par faire générer un jeu d'essai fictif, ce qui est aussi la bonne pratique pour vous entraîner sans aucune donnée réelle.",
    steps: [
      {
        title: "Créer le jeu d'essai",
        actions: [
          "Demandez à Copilot un script qui crée, dans essais\\Factures_exercice, 150 fichiers PDF vides aux noms des cinq familles du module (96 / 21 / 9 / 13 / 11), dont une date impossible et trois paires donnant le même nouveau nom.",
          "Lancez-le, puis vérifiez : (Get-ChildItem -Filter *.pdf).Count → 150. Zippez ce dossier : c'est votre « original ».",
        ],
      },
      {
        title: 'Dérouler le pipeline',
        actions: [
          "Rédigez votre propre prompt CLARTE (inspiré du Prompt 1) et obtenez le script.",
          "Appliquez le Prompt 2 et identifiez : le dossier à adapter, la boucle, la ligne qui renomme réellement.",
          "Appliquez le Prompt 3 (STAR), simulez sur une copie, vérifiez 15 à 20 fichiers répartis, notez tout renommage douteux.",
          "Faites corriger les cas limites, resimulez, remplissez le guide de sécurité, exécutez en réel, contrôlez.",
          "Appliquez le Prompt 4 et consignez la tâche dans la bibliothèque.",
        ],
      },
    ],
    deliverable: "Le script final documenté (avec son mode test), la liste des fichiers laissés inchangés avec leur raison, une note de trois phrases pour un collègue qui devra refaire la procédure dans six mois, le guide de sécurité complété et la ligne de la bibliothèque de prompts.",
  },
  {
    type: 'exercise',
    title: "Exercice d'entraînement — Extraire date, fournisseur et montant de 80 factures PDF",
    instructions: "La ligne 7 de la bibliothèque (Extraction de données depuis un dossier de PDF, outil ChatGPT) est au statut « A tester ». Faites-la passer à « Teste (mode simulation valide) » en appliquant la méthode du module.",
    steps: [
      {
        title: 'Obtenir et lire le script',
        actions: [
          "Partez du prompt de la cellule C7 ; ajoutez : système Windows, chemins exacts, bibliothèque externe autorisée pypdf, refus d'écraser recapitulatif.xlsx s'il existe déjà.",
          "Obtenez le script dans ChatGPT, copiez-le dans VS Code, appliquez le Prompt 2 et le Ctrl + F des instructions à risque (seule écriture attendue : le fichier récapitulatif).",
        ],
      },
      {
        title: 'Tester',
        actions: [
          "Exécutez sur une copie de 10 factures PDF texte (pas scannées).",
          "Comparez chaque ligne du récapitulatif au contenu des 10 PDF : date, fournisseur, montant ; comptez les « non trouvé ».",
          "Ajoutez un PDF scanné à l'échantillon : vérifiez qu'il ressort en « non trouvé » et non avec une valeur inventée.",
          "Mettez à jour le statut de la ligne 7 seulement si les 10 lignes sont justes ou honnêtement « non trouvé ».",
        ],
      },
    ],
    tip: "Une extraction ne modifie pas les PDF, mais elle peut fournir des chiffres faux qui finiront dans un rapport : la vérification ligne à ligne contre la pièce est ici aussi importante que la copie de test pour un renommage.",
    deliverable: "Le script d'extraction testé, le recapitulatif.xlsx de l'échantillon annoté (juste / faux / non trouvé), et la ligne 7 de la bibliothèque mise à jour.",
  },
  {
    type: 'exercise',
    title: 'Exercice de transfert — Votre propre corvée de fichiers',
    instructions: "Choisissez une tâche répétitive réelle de votre service (renommer des rapports de terrain, fusionner des listes de distribution, trier des pièces justificatives…) et déléguez-la à l'IA en suivant les cinq procédures du pipeline, dans le respect des règles d'usage des données de votre organisation.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Vérifiez que la tâche est un bon candidat (répétitive, règle explicite, résultat vérifiable).",
          "Écrivez la règle et faites-la valider par le demandeur ; posez sauvegarde et copie de test.",
        ],
      },
      {
        title: 'Exécuter la méthode',
        actions: [
          "Prompt CLARTE avec exemples fictifs ; Prompt 2 ; questions de cas limites ; Prompt 3 ; échantillon ; correction ; guide de sécurité ; réel ; contrôles ; Prompt 4.",
          "Consignez la tâche en nouvelle ligne de la bibliothèque.",
        ],
      },
    ],
    deliverable: "Le script documenté, le guide de sécurité signé, le bilan des contrôles après exécution et la ligne de la bibliothèque — prêts à être réutilisés ou transmis.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Une sauvegarde ZIP datée et une copie de test existaient avant toute exécution, et le chemin de la copie se termine par un suffixe visible (COPIE_TEST).",
      "Votre prompt de départ précise le système (Windows), le format exact (AAAA-MM-JJ_NomFournisseur.pdf), un exemple avant / après, la table des fournisseurs et le sort des fichiers non identifiables.",
      "Vous savez désigner, avec son numéro de ligne, la seule instruction qui modifie le disque, et le script ne contient aucune suppression.",
      "Votre simulation annonce « 0 fichier modifié » et vous avez constaté vous-même que les 150 noms étaient intacts après elle.",
      "Votre échantillon compte au moins 15 fichiers répartis dans tout le dossier, couvre chaque famille de noms et a été comparé au contenu des PDF.",
      "Les collisions de noms sont gérées par suffixe, sans écrasement, et signalées comme doublons possibles.",
      "Votre bilan final se rapproche au fichier près : renommés + inchangés = fichiers lus = fichiers présents après exécution.",
      "Le guide de sécurité est complet : 5 cases cochées avec preuve, grille de lecture remplie, section 3 signée AVANT l'exécution réelle.",
      "L'en-tête du script répond à : à quoi il sert, quel dossier indiquer, comment activer le mode test, quelle commande taper.",
      "La note de trois phrases et la liste des fichiers inchangés avec leur raison ont été remises, et la tâche figure dans la bibliothèque avec un statut exact.",
    ],
  },

  // ───────────── Erreurs fréquentes ─────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Exécuter un script généré par l'IA directement sur les fichiers originaux : même un script qui « a l'air correct » peut se comporter autrement sur les cas réels (accents, espaces, extensions en majuscules). Copie de test et mode test, toujours.",
      "Coller des données confidentielles dans un outil IA public « juste pour demander un script » : le script n'a besoin que de la structure. Décrivez-la avec un exemple fictif.",
      "Accepter un script sans le lire, sous prétexte de ne pas être développeur : le Prompt 2 et le Ctrl + F des instructions à risque prennent cinq minutes.",
      "Omettre le système d'exploitation ou le format exact dans le prompt de départ : vous obtenez 12-03-2026 au lieu de 2026-03-12, sur 150 fichiers.",
      "Lancer une opération de masse sans sauvegarde du dossier d'origine : une archive ZIP coûte quelques secondes contre des heures de reconstitution.",
      "Conclure « ça marche » en voyant défiler la simulation sans rapprocher le bilan de l'inventaire : c'est le chiffre qui révèle les fichiers ignorés.",
      "Oublier les collisions de noms : sous Windows, le script s'arrête au milieu ; avec os.replace, il écrase silencieusement une facture.",
      "Changer en même temps le chemin vers l'original et le mode réel : une modification à la fois, une simulation entre les deux.",
      "Autoriser d'avance toutes les actions d'un agent IA, ou le lancer depuis la racine du disque : il agit alors bien au-delà de votre dossier de travail.",
      "Laisser l'IA corriger elle-même des données sources « pour que ça passe » : les données se corrigent par une personne, sur la copie, avec une trace.",
      "Ne pas documenter le script tout de suite : dans six mois, personne ne saura quelle ligne modifier, et l'outil sera abandonné ou mal utilisé.",
    ],
  },

  // ───────────── Récapitulatif ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez équipé votre poste (VS Code, Python, GitHub Copilot) et créé un espace de travail sécurisé, séparé des données de production.",
      "Vous avez transformé une consigne floue en règle de renommage validée, puis en prompt CLARTE qui a produit un script exploitable.",
      "Vous avez lu ce script sans être développeur : quatre parties, une seule ligne qui modifie le disque, trois cas limites détectés avant toute exécution.",
      "Vous avez fait ajouter un mode test, simulé sur une copie, rapproché le bilan de l'inventaire, vérifié 18 fichiers contre les PDF et obtenu une version corrigée.",
      "Vous avez exécuté le script en réel après une validation signée, sans perdre un fichier : 125 renommés, 25 inchangés avec raison, 3 doublons possibles signalés.",
      "Vous avez documenté le script, rédigé une note de trois phrases et rendu la procédure transmissible à un collègue non-développeur.",
      "Vous avez appliqué la même méthode à une fusion supervisée avec Claude Code (1 369 lignes, 386 075 USD rapprochés) et à un mini-outil de tri lançable d'un double-clic.",
      "Vous avez enrichi la bibliothèque de prompts de délégation technique de trois automatisations réelles.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer la différence de rôle entre VS Code, GitHub Copilot et Claude Code pour un usage non-développeur.",
      "Je sais décrire un besoin d'automatisation interne à l'IA avec un prompt structuré, plutôt qu'une demande vague.",
      "Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.",
      "J'ai utilisé au moins quatre prompts CLARTE / STAR de ce module, adaptés à mon propre besoin.",
      "Je sais lire un script généré par l'IA dans ses grandes lignes : chemin de dossier, boucle « pour chaque fichier », action de renommage, de déplacement ou de suppression.",
      "Je n'exécute jamais un script sur des données réelles sans être passé par un mode test sur une copie au préalable.",
      "Je sais demander à l'IA d'ajouter un mode test (dry-run) à un script qu'elle vient de générer, et rapprocher son bilan de mon inventaire.",
      "J'ai documenté au moins un script pour qu'il soit réutilisable par moi-même ou un collègue non-développeur.",
      "Je sais reconnaître les cinq pièges fréquents de ce module et les éviter dans ma propre pratique.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module suivant : « IA pour le Marketing & la Communication ». Vous y transformerez des documents existants — rapport, fiche, compte rendu — en supports de communication et comparerez ChatGPT, Claude, Copilot et Gemini pour générer des visuels, avec la même exigence qu'ici : décrire précisément, vérifier chaque résultat avant de le diffuser.",
  },
]
