# Module 10 — IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Expliquer à quoi servent concrètement Visual Studio Code, GitHub Copilot et Claude Code pour un profil métier qui ne sait pas coder, sans les confondre avec des logiciels réservés aux développeurs.
- Décrire à l'IA un besoin d'automatisation interne réaliste (renommage en masse, fusion de fichiers, extraction de données) en langage courant, de façon assez précise pour obtenir un script directement utilisable.
- Lire un script généré par l'IA dans ses grandes lignes — repérer un chemin de dossier, une boucle "pour chaque fichier", une action de suppression ou de renommage — sans avoir besoin de savoir programmer.
- Exiger et vérifier un mode test (dry-run) avant toute exécution d'un script sur des données réelles, comme réflexe de sécurité systématique.
- Exécuter un script généré par l'IA, en vérifier le résultat et le documenter pour qu'il soit réutilisable par vous-même ou un collègue.

### Pourquoi un profil non-développeur a intérêt à s'y mettre

Pendant longtemps, "automatiser une tâche sur des fichiers" voulait dire soit la faire à la main pendant des heures, soit attendre qu'un développeur ait le temps de s'en occuper. L'IA générative a changé cet équilibre de façon très concrète pour des tâches simples et répétitives : renommer 200 fichiers selon une convention précise, fusionner 12 exports Excel mensuels en un seul fichier, extraire toutes les dates et tous les montants d'un dossier de 80 factures PDF. Ce ne sont pas des projets informatiques — ce sont des corvées administratives qu'un script de quelques lignes résout en quelques secondes, et qu'une IA peut aujourd'hui écrire à partir d'une simple description en français.

La barrière technique n'a pas disparu, mais elle s'est nettement abaissée : vous n'avez plus besoin d'apprendre un langage de programmation pour obtenir un script fonctionnel, seulement de savoir décrire votre besoin avec précision, lire le résultat avec un minimum de recul, et le tester avant de l'utiliser sur de vraies données. C'est exactement l'objet de ce module — pas un cours de développement, mais une méthode pour déléguer une tâche technique à l'IA en toute sécurité.

### Trois outils, trois rôles complémentaires

- **Visual Studio Code (VS Code)** — ce n'est pas un logiciel intimidant réservé aux développeurs : c'est un éditeur de texte gratuit, comme un bloc-notes très perfectionné, qui permet d'ouvrir un dossier, de voir la liste de ses fichiers, et d'ouvrir un terminal intégré pour exécuter un script. Pour ce module, votre usage de VS Code s'arrête volontairement là : ouvrir un dossier, ouvrir un terminal, coller et exécuter un script. Ce n'est pas un cours de développement.
- **GitHub Copilot** — l'assistant IA intégré directement dans VS Code. Vous lui décrivez ce que vous voulez en langage naturel (dans un commentaire ou une fenêtre de chat) et il écrit le code correspondant, propose des corrections et peut expliquer une portion de script en français si vous le lui demandez.
- **Claude Code** — un agent IA en ligne de commande capable d'exécuter lui-même des tâches techniques en plusieurs étapes : écrire un script, le tester, corriger une erreur, et vous rendre compte du résultat, sans que vous ayez à taper chaque commande. Claude Code sera revu plus en détail au Module 13 (création de sites web & solutions numériques) ; dans ce module, il est présenté comme une option pour déléguer une automatisation de bout en bout plutôt que de gérer chaque étape manuellement dans VS Code.

Un quatrième outil, **ChatGPT**, revient régulièrement dans ce module comme alternative accessible sans installation : il peut générer un script à partir d'une description, sans qu'il soit nécessaire d'ouvrir VS Code pour obtenir ce premier jet.

### Le principe de sécurité fondamental de ce module

Une seule règle prime sur toutes les autres dans ce module : **ne jamais exécuter un script généré par l'IA directement sur des données réelles sans l'avoir testé d'abord sur une copie ou un échantillon.** Un script de renommage ou de fusion de fichiers agit souvent de façon irréversible — un fichier renommé, écrasé ou fusionné à tort ne se récupère pas toujours facilement, même quand le script "avait l'air correct". Ce principe structure tout le guide pratique de ce module : décrire, lire, tester en mode simulation, puis seulement exécuter sur les vraies données.

### Vocabulaire clé à maîtriser dès ce module

- **Script** : un fichier d'instructions écrites dans un langage de programmation (souvent Python dans ce module), que l'ordinateur exécute automatiquement du début à la fin — l'équivalent d'une recette de cuisine que la machine suit sans intervention manuelle à chaque étape.
- **Mode test / dry-run / simulation** : un mode d'exécution dans lequel le script affiche ce qu'il *ferait* (quels fichiers il renommerait, fusionnerait ou supprimerait) sans réellement modifier quoi que ce soit sur le disque — le filet de sécurité indispensable avant une exécution réelle.
- **Chemin de dossier (path)** : l'adresse exacte d'un fichier ou d'un dossier sur l'ordinateur (par exemple `C:\Factures\2026`) ; une erreur de chemin est la cause la plus fréquente d'un script qui "ne trouve pas" les fichiers attendus.
- **Boucle "pour chaque fichier"** : la partie du script qui répète la même action sur tous les fichiers d'un dossier l'un après l'autre — c'est ce mécanisme qui permet de traiter 150 fichiers aussi facilement qu'un seul.
- **Terminal intégré** : la fenêtre en ligne de commande à l'intérieur de VS Code, dans laquelle on tape la commande qui lance l'exécution du script.
