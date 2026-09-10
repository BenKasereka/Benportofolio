# Module 14 — Big Data Analysis avec Claude (avec Code)
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Reconnaître qu'un besoin d'analyse dépasse les limites pratiques d'Excel et de Power Query (volume de lignes, fichiers multiples à croiser, calcul statistique lourd) plutôt que de forcer un fichier qui rame ou plante.
- Obtenir de Claude une analyse de données volumineuses ou croisées en décrivant le besoin en langage courant, sans écrire une seule ligne de code vous-même.
- Lire et vérifier un résultat produit par du code exécuté par l'IA — comprendre ce que le code a fait, sans avoir besoin de savoir le lire ligne par ligne.
- Faire construire par Claude Code un pipeline de données automatisé et récurrent, capable de tourner chaque mois sur un nouvel export sans intervention manuelle.
- Superviser dans la durée une automatisation de données pour éviter qu'elle ne devienne une boîte noire non vérifiée, avec des points de contrôle réguliers.

### Pourquoi ce module va plus loin que le Module 09

Le Module 09 vous a appris à nettoyer, analyser et présenter un jeu de données dans Excel, avec l'appui de l'IA pour générer des formules et des étapes Power Query. Cette approche fonctionne très bien tant que le fichier reste dans les limites pratiques du tableur. Ce module part du moment où ce n'est plus le cas.

"Big data" est un terme marketing qui ne veut rien dire d'opérationnel en soi. La définition utile, pour votre travail quotidien, n'est pas une taille en gigaoctets mais un ensemble de symptômes concrets :

- **Un fichier qui devient lent ou qui plante** — au-delà de quelques dizaines de milliers de lignes, un tableau croisé dynamique met plusieurs secondes à se recalculer à chaque modification, une formule matricielle rend Excel non réactif, ou le fichier refuse tout simplement de s'ouvrir dans un temps raisonnable.
- **Plusieurs fichiers sources qu'il faut croiser sans erreur manuelle** — au-delà de deux fichiers à rapprocher sur une clé commune (un identifiant de site, un numéro de commande), le copier-coller et la recherche RECHERCHEV multiplient les risques d'erreur et le temps passé, surtout si la clé de jointure n'est pas rigoureusement identique d'un fichier à l'autre.
- **Un calcul statistique qu'Excel ne fait pas nativement, ou fait mal** — un écart-type pondéré, une corrélation entre plusieurs variables, une agrégation glissante sur une fenêtre de temps mobile : ce sont des calculs qu'Excel peut simuler avec des formules complexes et fragiles, mais qu'un langage de calcul statistique fait nativement et de façon vérifiable.

Ce module s'adresse précisément à ces trois situations. Ce n'est pas un module "plus avancé" au sens où il faudrait déjà savoir coder — c'est un module qui vous donne le réflexe de reconnaître le moment où continuer dans Excel devient contre-productif, et la méthode pour basculer vers un outil qui exécute réellement du code à votre place.

### Ce qu'est concrètement l'exécution de code par Claude

Claude.ai dispose d'un outil d'analyse qui va au-delà de la conversation : quand vous déposez un fichier volumineux ou que vous posez une question qui demande un calcul complexe, Claude peut écrire du code — le plus souvent en Python, avec la bibliothèque pandas pour manipuler les tableaux de données — et **l'exécuter réellement en arrière-plan** sur le fichier que vous avez fourni. Le résultat que vous recevez n'est pas une estimation ou une explication générale : c'est la sortie réelle d'un calcul qui a effectivement tourné sur vos données.

C'est une distinction importante à bien intégrer : ce n'est pas "Claude qui vous explique comment on calculerait une moyenne pondérée" — c'est "Claude qui a écrit le code, qui l'a fait tourner sur votre fichier, et qui vous donne le chiffre obtenu". Cette capacité permet de traiter des fichiers de plusieurs centaines de milliers de lignes, de croiser plusieurs sources sur une clé commune, et de produire des statistiques qu'aucune formule Excel ne calcule proprement — le tout en décrivant votre besoin en français, sans ouvrir un éditeur de code.

### La différence avec Claude Code (vu au Module 10)

Le Module 10 vous a présenté Claude Code comme un agent en ligne de commande capable d'exécuter des tâches techniques en plusieurs étapes — écrire un script, le tester, corriger une erreur, rendre compte du résultat. Ce module réutilise cet outil, mais avec un usage précis et complémentaire à l'exécution de code dans claude.ai :

- **L'exécution de code dans claude.ai** est **ponctuelle et conversationnelle** : vous déposez un fichier, vous posez une question, Claude exécute le calcul une fois et vous rend un résultat dans la conversation. C'est l'outil adapté pour une analyse unique — comprendre ce jeu de données précis, répondre à cette question de gestion précise.
- **Claude Code** est adapté quand le même traitement doit se répéter dans le temps sur des données qui changent : un rapport mensuel, un export hebdomadaire à consolider. Claude Code construit un **script persistant**, le sauvegarde sur votre poste, et peut le faire tourner de façon récurrente — chaque mois, sur le nouvel export du mois, sans qu'il faille redécrire le besoin à chaque fois.

Ces deux usages ne sont pas concurrents, ils se succèdent naturellement dans un même projet : vous utilisez d'abord l'exécution de code dans claude.ai pour explorer un jeu de données et comprendre ce qu'il faut en tirer, puis, une fois que le besoin est stabilisé et se répète, vous demandez à Claude Code de construire le pipeline qui automatisera ce même traitement sur chaque nouvel export.

### Le principe non-négociable de ce module

Une seule règle prime sur toutes les autres dans ce module, dans la continuité directe du principe de sécurité posé au Module 10 : **ne jamais faire confiance à un résultat de code exécuté sans le vérifier sur un échantillon connu, et ne jamais laisser tourner une automatisation récurrente sans supervision périodique.**

L'exécution de code élimine une catégorie d'erreur précise — l'erreur de calcul humaine, la formule Excel mal recopiée, le total oublié dans une plage mal sélectionnée. Elle n'élimine pas les autres catégories d'erreur : une clé de jointure qui n'est pas réellement identique d'un fichier à l'autre (espace superflu, casse différente, orthographe divergente d'un identifiant de site), une donnée source déjà fausse avant même d'être traitée, ou une automatisation qui continue de tourner alors que le format des fichiers qu'on lui donne a changé sans que personne ne l'ait signalé. Une automatisation qui tourne seule, sans jamais être revérifiée, devient ce qu'on appelle une **boîte noire** : elle produit un résultat avec la même confiance apparente, que ce résultat soit encore juste ou non.

### Vocabulaire clé à maîtriser dès ce module

- **Pipeline de données** : l'enchaînement complet et automatisé des étapes qui transforment un ou plusieurs fichiers bruts en un résultat exploitable (lecture des fichiers, nettoyage, croisement, calcul, mise en forme de la sortie) — construit une fois par Claude Code, puis réexécuté à l'identique à chaque nouvel export.
- **Jointure** : l'opération qui croise plusieurs fichiers sources en rapprochant leurs lignes sur une clé commune (un identifiant de site, un numéro de commande) — l'équivalent, en plus robuste et plus rapide, d'une recherche RECHERCHEV répétée entre plusieurs fichiers.
- **Échantillon de vérification** : un sous-ensemble restreint et connu de lignes (5 à 10 lignes typiquement) que vous contrôlez à la main contre les fichiers sources après un calcul ou un croisement, pour confirmer que le résultat produit par le code est fiable avant de le diffuser.
- **Script récurrent / programmé** : un script construit une seule fois par Claude Code mais destiné à être réexécuté à intervalle régulier (chaque mois, chaque semaine) sur des données qui se renouvellent, par opposition à un script ou une analyse à usage unique.
- **Seuil de passage à l'échelle** : le point à partir duquel un besoin d'analyse dépasse ce qu'Excel et Power Query peuvent raisonnablement traiter (volume de lignes, nombre de fichiers à croiser, type de calcul demandé), et à partir duquel il devient plus efficace de décrire le besoin à Claude plutôt que de continuer à forcer le tableur.
