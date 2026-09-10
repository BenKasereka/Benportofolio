# Module 08 — Automatisation & Agents IA
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Distinguer un agent IA d'une simple conversation avec un chatbot, et savoir en 30 secondes si une tâche mérite l'un ou l'autre.
- Concevoir un agent IA multi-étapes qui utilise des outils externes et conserve un état entre les étapes, plutôt qu'une suite de messages sans mémoire.
- Construire un workflow d'automatisation complet (déclencheur → traitement IA → action de sortie) sur une plateforme comme Make, Zapier ou N8N.
- Automatiser un rapport, un email ou une tâche récurrente de votre organisation sans écrire une ligne de code.
- Documenter un agent ou un workflow IA de façon à ce qu'un collègue puisse le comprendre, le reprendre et le corriger en votre absence.

### Ce qu'est un agent IA, concrètement — et ce qu'il n'est pas

La plupart des gens qui utilisent ChatGPT ou Claude au quotidien n'ont jamais utilisé un agent IA — ils ont une conversation. Vous posez une question, le modèle répond, vous reformulez, il répond encore. C'est utile, mais ça reste **vous** qui pilotez chaque étape, qui copiez-collez le résultat d'un outil vers un autre, qui décidez de la suite.

Un **agent IA** est différent sur trois points précis, et c'est cette combinaison qui fait la différence — pas un seul des trois isolément :

1. **Il utilise des outils externes.** Un agent ne se contente pas de générer du texte : il peut interroger une API, lire un fichier, envoyer un email, écrire dans un tableur, chercher une information sur le web. Le modèle décide quel outil appeler, avec quels paramètres, et à quel moment de la tâche.
2. **Il enchaîne plusieurs étapes de façon autonome.** Vous donnez un objectif final (« résume le rapport reçu ce matin et envoie-le à la liste de diffusion »), pas une suite d'instructions micro-détaillées. L'agent décompose lui-même la tâche en étapes et les exécute l'une après l'autre, sans que vous validiez chaque étape intermédiaire.
3. **Il conserve un état — une mémoire — entre les étapes.** Ce qui s'est passé à l'étape 2 (le contenu extrait d'un email, par exemple) est disponible et exploitable à l'étape 4, sans que vous ayez à le retransmettre manuellement. C'est ce qui distingue un agent d'une série de prompts indépendants : chaque étape sait ce qu'a produit la précédente.

**Ce qu'un agent IA n'est pas** : ce n'est pas une intelligence qui « comprend » votre métier ou qui prend des décisions à votre place sur des sujets sensibles. C'est un exécutant automatisé de tâches que vous avez cadrées à l'avance — un exécutant rapide et infatigable, mais qui suit exactement la logique que vous lui avez donnée, avec ses limites. Un agent mal cadré répète une erreur cent fois plus vite qu'un collaborateur humain ne le ferait une seule fois — c'est tout l'enjeu de la conception dont ce module traite.

### Chat ponctuel ou agent — comment trancher en 30 secondes

Construire un agent a un coût de conception (30 minutes à plusieurs heures selon la complexité) qui n'est rentable que si la tâche revient. La question à se poser systématiquement avant de se lancer :

| Situation | Choix recommandé |
|---|---|
| Tâche ponctuelle, contexte différent à chaque fois, décision à forte marge d'appréciation | Un prompt bien construit dans ChatGPT ou Claude — inutile d'automatiser |
| Tâche répétitive, entrée standardisée (même type de document, même format d'email), sortie prévisible | Un agent ou un workflow d'automatisation |
| Tâche répétitive mais impliquant un jugement humain sensible à chaque occurrence (arbitrage RH, communication de crise) | Ni l'un ni l'autre en autonome — l'IA prépare, l'humain décide et valide |

Le critère décisif n'est donc jamais « est-ce que l'IA peut le faire techniquement » — elle peut presque tout essayer — mais « est-ce que la répétition et la prévisibilité de la tâche justifient l'investissement, et est-ce que la nature de la décision permet de la déléguer sans supervision humaine directe ».

### La logique d'une plateforme d'automatisation (Make / Zapier / N8N)

Une plateforme comme **Make**, **Zapier** ou **N8N** n'est pas elle-même une IA : c'est la **colle** qui relie une IA (ChatGPT, Claude, Gemini...) à vos outils professionnels habituels — boîte email, tableur, CRM, messagerie d'équipe, formulaire en ligne — sans avoir à écrire de code d'intégration.

Le principe est toujours le même, en trois blocs :

- **Déclencheur (trigger)** : l'événement qui démarre le workflow — un nouvel email reçu, un fichier déposé dans un dossier, une ligne ajoutée dans un tableur, une heure programmée chaque semaine.
- **Traitement IA (action intermédiaire)** : le contenu capté par le déclencheur est transmis à un modèle IA via son API, avec des instructions précises (l'équivalent d'un prompt RCCF, mais écrit une fois pour toutes dans la configuration du workflow) — résumer, classer, extraire une information, rédiger une réponse.
- **Action de sortie** : ce que le workflow fait du résultat produit par l'IA — envoyer un email, écrire dans un tableur, publier un message, créer une tâche dans un outil de gestion de projet.

**Ce que ces plateformes apportent que l'IA seule n'apporte pas** : la connexion technique aux dizaines d'outils professionnels du quotidien (Gmail, Outlook, Google Sheets, Excel Online, Slack, Teams, Trello...) sans code, et l'exécution automatique déclenchée par un événement réel — pas par vous qui copiez-collez manuellement chaque jour. C'est la différence entre « je demande à l'IA de résumer ce document chaque lundi » et « le résumé arrive dans ma boîte chaque lundi sans que j'y pense ».

### Vocabulaire clé à maîtriser dès ce module

- **Agent IA** : système qui utilise des outils, enchaîne des étapes de façon autonome et conserve un état entre ces étapes — par opposition à un chat conversationnel simple.
- **Workflow d'automatisation** : séquence structurée déclencheur → traitement → action, exécutée sans intervention manuelle une fois configurée.
- **Point de vérification humaine (human-in-the-loop)** : étape d'un workflow où une validation humaine est requise avant que le processus continue ou produise un effet irréversible (envoi, publication, décision).
- **API** : le canal technique par lequel une plateforme d'automatisation envoie une demande à un modèle IA et récupère sa réponse, sans passer par une interface de chat.
