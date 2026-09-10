# Module 04 — Microsoft Copilot — L'IA native dans Office 365 & Teams
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Générer une présentation PowerPoint structurée à partir d'un document Word existant avec Copilot, sans repartir d'une slide blanche.
- Produire un rapport Word à partir de notes, données ou documents sources, en gardant le contrôle sur la structure et le ton.
- Utiliser Copilot dans Excel pour construire un tableau croisé dynamique ou une formule complexe, en formulant une demande vérifiable.
- Rédiger des emails et des résumés de réunion avec Copilot dans Outlook et Teams, prêts à être envoyés après relecture.
- Identifier, avant de lancer une demande, si Copilot va s'appuyer sur les bonnes données organisationnelles ou risque de travailler sur un périmètre incomplet.

### Ce qui distingue Copilot d'un ChatGPT ou d'un Claude

Vous avez déjà appris, dans les Modules 02 et 03, à travailler avec ChatGPT et Claude. Ce sont des IA **autonomes** : vous ouvrez un chat isolé, vous collez ou uploadez ce dont l'IA a besoin, elle vous répond, et rien de ce qui se passe dans ce chat n'a d'effet sur vos fichiers tant que vous ne copiez-collez pas vous-même le résultat.

Copilot fonctionne à l'inverse. Ce n'est pas un chat à côté de votre travail — c'est un assistant **intégré directement dans le document, la feuille de calcul, l'email ou la réunion en cours**. Quand vous ouvrez Copilot dans Word, il voit le document ouvert. Quand vous l'ouvrez dans Excel, il voit la feuille active et ses données. Quand vous l'invoquez dans un canal Teams, il peut lire l'historique de conversation ou la transcription de la réunion. Vous ne recopiez rien : Copilot agit dans le fichier lui-même.

Cette intégration a une deuxième conséquence, plus importante encore pour un usage professionnel : **Copilot peut aller chercher de l'information au-delà du document ouvert**. Dans sa configuration Microsoft 365 (Copilot avec accès aux données de l'organisation, via Microsoft Graph), il peut interroger vos emails Outlook, vos fichiers OneDrive et SharePoint, vos conversations Teams — tout ce à quoi votre compte a accès. C'est ce qui permet des demandes comme *"résume les échanges de la semaine avec ce partenaire"* sans avoir à rassembler manuellement les emails.

**Ce que cela implique concrètement, et que ChatGPT/Claude n'imposent jamais** : la qualité et la fiabilité d'une réponse Copilot dépendent directement de la gouvernance des permissions de votre organisation. Si un dossier SharePoint mal configuré est visible par "tout le monde dans l'organisation" alors qu'il ne devrait être visible que par une équipe, Copilot peut le faire remonter dans une synthèse — pour le meilleur (vous gagnez du temps) comme pour le pire (une information sensible ou obsolète se retrouve dans un livrable). Et à l'inverse, si vos propres droits d'accès sont trop restreints ou mal indexés, Copilot peut produire une analyse qui *a l'air* complète mais qui ignore silencieusement une partie des données pertinentes — sans vous prévenir que quelque chose manque.

Ce point n'est pas une nuance technique réservée aux administrateurs IT : c'est le premier réflexe professionnel à prendre avec Copilot. **Avant de vous fier à un résultat, demandez-vous toujours sur quel périmètre de données il a réellement travaillé** — le document ouvert seulement, ou une recherche plus large dans l'organisation. Un chat ChatGPT isolé ne pose jamais cette question, parce qu'il ne voit que ce que vous lui donnez. Copilot, lui, peut voir plus — ou moins — que ce que vous croyez.

### Où Copilot apporte un vrai gain, et où il ne remplace rien

Copilot est excellent pour trois types de tâches récurrentes de bureau : transformer un contenu existant d'un format à un autre (Word → PowerPoint, notes de réunion → compte-rendu structuré), accélérer une manipulation technique dans un outil que vous maîtrisez déjà mal (formule Excel, tableau croisé dynamique), et produire un premier jet rédactionnel sur un sujet dont le contexte est déjà présent dans vos outils (email de suivi, résumé de réunion Teams).

Il n'est pas fait pour du raisonnement long ou de l'analyse critique approfondie sur un document volumineux et complexe — c'est le terrain de Claude, vu au Module 03. Et il n'est pas fait pour de la recherche d'information externe actualisée — c'est le terrain de Perplexity, au Module 05. Copilot gagne sur un seul critère, mais un critère qui compte énormément au quotidien : **la vitesse d'exécution sans changer d'outil**.

### Vocabulaire clé à maîtriser dès ce module

- **Microsoft Graph** : l'API qui relie Copilot à vos données Microsoft 365 (emails, fichiers, calendrier, conversations Teams) selon vos permissions d'accès existantes — Copilot n'accède jamais à plus que ce que votre compte peut déjà voir.
- **Copilot dans l'application** vs **Copilot Chat** : le premier travaille directement dans le document ouvert (volet latéral dans Word/Excel/PowerPoint) ; le second est un chat autonome façon ChatGPT, mais avec accès optionnel à vos données organisationnelles.
- **Prompt vérifiable** : une demande formulée de façon à ce que vous puissiez contrôler facilement si le résultat est correct — en précisant la source exacte, la plage de données, ou le format attendu — plutôt qu'une demande vague qui oblige à tout re-vérifier à l'aveugle.
