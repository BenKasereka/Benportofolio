// Module 04 — Microsoft Copilot — L'IA native dans Office 365 & Teams
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Microsoft Copilot — L'IA native dans Office 365 & Teams",
    hook: "Copilot n'est pas un chat à côté de votre travail : c'est un assistant intégré dans le document, la feuille de calcul ou la réunion en cours — avec un vrai réflexe à prendre avant de lui faire confiance.",
  },
  {
    type: 'objectives',
    items: [
      "Générer une présentation PowerPoint structurée à partir d'un document Word existant avec Copilot, sans repartir d'une slide blanche.",
      "Produire un rapport Word à partir de notes, données ou documents sources, en gardant le contrôle sur la structure et le ton.",
      "Utiliser Copilot dans Excel pour construire un tableau croisé dynamique ou une formule complexe, en formulant une demande vérifiable.",
      "Rédiger des emails et des résumés de réunion avec Copilot dans Outlook et Teams, prêts à être envoyés après relecture.",
      "Identifier, avant de lancer une demande, si Copilot s'appuie sur les bonnes données organisationnelles ou risque de travailler sur un périmètre incomplet.",
    ],
  },
  {
    type: 'concept',
    title: 'Un assistant intégré, pas un chat à côté du travail',
    body: "ChatGPT et Claude sont des IA autonomes : vous ouvrez un chat isolé, vous collez ou uploadez ce dont l'IA a besoin, et rien de ce qui s'y passe n'affecte vos fichiers tant que vous ne recopiez pas vous-même le résultat. Copilot fonctionne à l'inverse : quand vous l'ouvrez dans Word, il voit le document ouvert ; dans Excel, la feuille active et ses données ; dans un canal Teams, l'historique ou la transcription de la réunion. Vous ne recopiez rien, Copilot agit dans le fichier lui-même.",
  },
  {
    type: 'concept',
    title: "Copilot peut chercher au-delà du document ouvert",
    body: "Dans sa configuration Microsoft 365, via Microsoft Graph, Copilot peut interroger vos emails Outlook, vos fichiers OneDrive et SharePoint, vos conversations Teams — tout ce à quoi votre compte a accès. C'est ce qui permet une demande comme \"résume les échanges de la semaine avec ce partenaire\" sans rassembler les emails à la main.",
    highlight: "Si un dossier SharePoint mal configuré est visible par toute l'organisation, Copilot peut le faire remonter dans une synthèse — pour le meilleur comme pour le pire. À l'inverse, des droits d'accès trop restreints peuvent produire une analyse qui a l'air complète mais ignore silencieusement des données pertinentes.",
  },
  {
    type: 'concept',
    title: 'Le premier réflexe professionnel avec Copilot',
    body: "Avant de vous fier à un résultat, demandez-vous toujours sur quel périmètre de données il a réellement travaillé — le document ouvert seulement, ou une recherche plus large dans l'organisation. Un chat ChatGPT isolé ne pose jamais cette question, parce qu'il ne voit que ce que vous lui donnez. Copilot, lui, peut voir plus — ou moins — que ce que vous croyez.",
  },
  {
    type: 'concept',
    title: 'Où Copilot apporte un vrai gain, et où il ne remplace rien',
    body: "Copilot excelle sur trois tâches récurrentes : transformer un contenu existant d'un format à un autre (Word → PowerPoint, notes → compte-rendu), accélérer une manipulation technique dans un outil mal maîtrisé (formule Excel, tableau croisé dynamique), et produire un premier jet dont le contexte est déjà présent dans vos outils (email de suivi, résumé de réunion). Il n'est pas fait pour du raisonnement long sur un document complexe — le terrain de Claude — ni pour de la recherche d'information externe actualisée — le terrain de Perplexity.",
    highlight: "Copilot gagne sur un seul critère, mais qui compte énormément au quotidien : la vitesse d'exécution sans changer d'outil.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Microsoft Graph', definition: "L'API qui relie Copilot à vos données Microsoft 365 (emails, fichiers, calendrier, conversations Teams) selon vos permissions d'accès existantes — Copilot n'accède jamais à plus que ce que votre compte peut déjà voir." },
      { term: 'Copilot dans l\'application vs Copilot Chat', definition: "Le premier travaille directement dans le document ouvert (volet latéral dans Word, Excel, PowerPoint) ; le second est un chat autonome façon ChatGPT, avec accès optionnel aux données organisationnelles." },
      { term: 'Prompt vérifiable', definition: "Une demande formulée pour que vous puissiez contrôler facilement si le résultat est correct — en précisant la source exacte, la plage de données ou le format attendu — plutôt qu'une demande vague qui oblige à tout re-vérifier à l'aveugle." },
    ],
  },
  {
    type: 'process',
    title: "Générer une présentation PowerPoint à partir d'un document Word",
    steps: [
      { title: 'Préparez le document source', body: "Copilot construit sa présentation à partir de la structure du Word (Titre 1, Titre 2, listes). Un document sans hiérarchie de titres donnera une présentation plate et mal découpée." },
      { title: 'Identifiez les messages clés avant de lancer', body: "Pas tout le contenu du Word, une synthèse de 3-4 messages clés. Copilot résume, il ne devine pas vos priorités." },
      { title: 'Lancez la génération avec public et contrainte de slides', body: 'Volet Copilot → "Créer une présentation à partir d\'un fichier", puis pointez le Word et ajoutez en une phrase le public visé et le nombre de slides souhaité.' },
      { title: 'Relisez le fond avant la forme', body: "Vérifiez d'abord que les messages clés identifiés sont bien présents et mis en avant, avant tout ajustement visuel." },
      { title: 'Ne diffusez jamais le résultat brut', body: "Une présentation générée n'est jamais calée sur votre charte graphique dès la sortie — reprenez le template visuel avant tout envoi externe." },
    ],
  },
  {
    type: 'process',
    title: 'Demander une analyse de données Excel de façon vérifiable',
    steps: [
      { title: 'Structurez vos données en tableau', body: "Ctrl+T ou Insérer > Tableau, avant d'appeler Copilot. Sans cette structuration, il ne sait pas identifier les colonnes et propose des analyses approximatives." },
      { title: 'Formulez une demande précise, jamais générale', body: 'Nommez la colonne, le calcul et le regroupement attendus — par exemple un tableau croisé dynamique du montant total par région et par mois, à partir d\'un tableau nommé.' },
      { title: "Demandez l'explication en plus de la formule", body: "Ajoutez \"explique-moi la logique de la formule\" : cette explication permet de la valider avant de vous en servir, plutôt que de la copier en aveugle." },
      { title: 'Vérifiez sur un échantillon connu', body: "Recalculez à la main un ou deux totaux du tableau croisé généré : un mauvais paramétrage peut agréger sur le mauvais niveau de détail sans qu'aucune erreur ne s'affiche." },
      { title: 'Consignez le prompt qui a fonctionné', body: "Dans le template grille-prompts-copilot-office-teams.xlsx, pour ne pas repartir de zéro la prochaine fois." },
    ],
  },
  {
    type: 'process',
    title: 'Extraire un résumé de réunion actionnable dans Teams',
    steps: [
      { title: 'Activez la transcription en début de réunion', body: "Icône Copilot ou menu Enregistrer — sans transcription, Copilot n'a rien à résumer après coup." },
      { title: 'Demandez un résumé structuré en trois blocs', body: "Décisions prises, actions à suivre avec responsable, points non résolus à reprendre — plutôt qu'un résumé narratif continu." },
      { title: "Vérifiez les noms des responsables avant diffusion", body: "Une reformulation ambiguë à l'oral (\"on verra qui s'en charge\") peut se traduire par une attribution erronée ou absente." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Lancer une analyse sans vérifier les permissions ou l'exactitude des données organisationnelles interrogées — Copilot peut produire une synthèse qui a l'air complète alors qu'elle s'appuie sur des données incomplètes ou obsolètes, sans jamais le signaler.",
      "Accepter un résultat Copilot sans relecture critique — une formule Excel ou un chiffre généré doit toujours être vérifié manuellement avant d'être utilisé pour une décision.",
      "Ne pas exploiter l'intégration Teams pour les résumés de réunion — un des usages les plus rentables, encore trop souvent ignoré par habitude de prise de notes manuelle.",
      "Formuler des prompts vagues directement dans le document (\"améliore ce texte\", \"fais-moi un résumé\") sans préciser la source, le format et le public visé.",
      "Diffuser une présentation ou un rapport généré sans révision de la mise en forme et de la charte graphique — un draft automatique n'est jamais un livrable final tel quel.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Le rapport trimestriel qui doit devenir un comité de direction en 24h"',
    scenario: "Vous venez de terminer un rapport trimestriel Word de 12 pages, correctement structuré, destiné à votre coordination directe. En fin de journée, la direction veut une présentation devant le comité de direction demain 9h — 8 slides maximum, format exécutif. Dans la foulée, vous recevez le compte-rendu d'une réunion Teams d'1h30 avec un partenaire, dont il faut extraire les actions à suivre avant la fin de journée.",
    steps: [
      "Listez par écrit les 3 à 4 messages clés à extraire du rapport Word pour construire la présentation.",
      "Formulez le prompt exact pour Copilot dans PowerPoint, en précisant le public visé (comité de direction) et la contrainte de slides (8 maximum).",
      "Identifiez au moins deux points de vigilance à vérifier impérativement sur la structure générée avant de la présenter en comité.",
      "Rédigez le prompt exact pour Copilot dans Teams afin d'obtenir un résumé en trois blocs (décisions, actions avec responsable, points non résolus) de la réunion avec le partenaire.",
      "Précisez comment vous vérifieriez l'attribution des actions avant de diffuser ce compte-rendu.",
    ],
  },
  {
    type: 'exercise',
    title: "Transformation d'un rapport en présentation et résumé de réunion actionnable",
    instructions: "En vous appuyant sur la Méthode 1 du guide pratique, listez les 3 à 4 messages clés que vous extrairiez du rapport Word, la formulation exacte du prompt PowerPoint (public visé, contrainte de slides), et au moins deux points de vigilance à vérifier sur la structure générée avant présentation en comité de direction. En vous appuyant sur la Méthode 3, rédigez le prompt exact pour obtenir dans Teams un résumé en trois blocs (décisions, actions avec responsable, points non résolus) de la réunion avec le partenaire, et précisez comment vous vérifieriez l'attribution des actions avant diffusion.",
    deliverable: "Un document d'une page maximum réunissant les deux réponses, rédigé comme si vous deviez le montrer à votre formateur pour validation.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer ce qui distingue Copilot d'un ChatGPT ou d'un Claude en termes d'accès aux données.",
      "Je sais identifier, avant de lancer une demande, sur quel périmètre de données elle va réellement porter.",
      "J'ai généré une présentation PowerPoint structurée à partir d'un document Word, avec un prompt précisant public et contrainte de slides.",
      "J'ai demandé une analyse Excel vérifiable et contrôlé le résultat sur un échantillon connu.",
      "Je sais citer au moins 3 pièges fréquents à éviter avec Copilot en contexte professionnel.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 05 — Perplexity AI : recherche temps réel et veille stratégique.",
  },
]
