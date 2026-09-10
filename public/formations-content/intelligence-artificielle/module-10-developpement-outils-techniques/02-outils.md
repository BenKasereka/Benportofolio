# Module 10 — IA pour le Développement & les Outils Techniques — Visual Studio Code & Copilot
## 02. Outils & Guide Pratique

### Rappel — deux méthodes de prompting utilisées tout au long de ce module

Tout prompt professionnel structuré combine six éléments, résumés par la norme **CLARTE** : **C**ontexte (qui vous êtes, dans quel cadre, quelles données ou quels fichiers sont concernés) ; **L**ivrable attendu (le résultat exact voulu — un script, une explication, un mode test) ; **A**udience / rôle (le rôle que doit endosser l'IA, et le niveau technique réel de la personne qui va lire la réponse) ; **R**estrictions (contraintes, ce qu'il ne faut PAS faire, système d'exploitation, format exact attendu) ; **T**on & style (registre attendu — ici, presque toujours "sans jargon, en langage clair pour un non-développeur") ; **E**xemples (un exemple de nom de fichier, de structure de dossier ou de format de sortie attendu).

Pour les cas qui demandent un raisonnement en plusieurs étapes plutôt qu'une simple restitution, on utilise la méthode **STAR** appliquée au prompting : **S**ituation (description factuelle de l'état de départ — le script déjà obtenu, les fichiers concernés) ; **T**âche (objectif précis à atteindre) ; **A**ction (ce que l'IA doit concrètement exécuter ou modifier, étape par étape) ; **R**ésultat (le livrable final et son critère de réussite, par exemple "un mode test qui n'écrit rien sur le disque").

Chaque prompt donné ci-dessous précise entre parenthèses quelle méthode il applique, et un commentaire qui suit explique quel élément correspond à quelle ligne. Vous pouvez copier-coller ces prompts tels quels et remplacer les éléments entre crochets par vos propres données. Une bibliothèque plus large de prompts de délégation technique, avec des exemples déjà remplis, est fournie dans `04-templates/bibliotheque-prompts-delegation-technique.xlsx`.

### Outils utilisés dans ce module

**Visual Studio Code (VS Code)** — l'éditeur gratuit dans lequel vous ouvrez le dossier concerné par votre tâche et exécutez le script généré via son terminal intégré. Aucune connaissance de programmation n'est nécessaire pour cet usage minimal : ouvrir un dossier, ouvrir un terminal, coller une commande.

**GitHub Copilot** — l'assistant IA intégré à VS Code, accessible via une fenêtre de chat directement dans l'éditeur. C'est l'outil le plus adapté quand vous voulez rester dans un seul environnement, du besoin décrit jusqu'au script prêt à exécuter, avec la possibilité de lui redemander une explication ou une correction sans changer d'outil.

**Claude Code** — un agent IA en ligne de commande qui peut écrire, tester et corriger un script lui-même en plusieurs étapes, puis vous rendre compte du résultat en langage clair. C'est l'outil à privilégier pour une automatisation un peu plus longue (plusieurs étapes de traitement) que vous préférez déléguer de bout en bout plutôt que piloter ligne par ligne.

**ChatGPT** — pratique pour un premier jet de script sans rien installer : vous décrivez votre besoin dans le chat, vous récupérez le code proposé, puis vous le collez dans VS Code pour l'exécuter. C'est souvent le point de départ le plus rapide quand vous ne savez pas encore si votre besoin mérite d'ouvrir un éditeur de code.

### Guide pratique étape par étape — Déléguer une automatisation interne sans savoir coder

Ce guide part d'une situation réelle : vous avez une tâche répétitive sur des fichiers (renommer, fusionner, extraire) que vous faites à la main depuis des mois, et vous voulez la déléguer à l'IA sans jamais avoir appris à programmer. Voici le pipeline complet, dans l'ordre.

**Étape 1 — Installation et prise en main minimale de VS Code**

Installez VS Code (gratuit, disponible sur windows/mac/linux), puis ouvrez le dossier concerné par votre tâche via *Fichier > Ouvrir un dossier*. Repérez la liste des fichiers dans le panneau de gauche, puis ouvrez le terminal intégré (menu *Terminal > Nouveau terminal*, ou raccourci `Ctrl + \``). C'est tout ce dont vous avez besoin à ce stade : voir vos fichiers, et avoir un endroit où coller une commande. Rien de plus n'est nécessaire pour la suite de ce module — ce n'est pas un cours de développement.

**Étape 2 — Décrire le besoin à l'IA et obtenir un script**

Ouvrez la fenêtre de chat de Copilot dans VS Code, ou ChatGPT/Claude Code, et décrivez votre besoin avec un prompt structuré plutôt qu'une phrase vague comme "fais-moi un script pour renommer mes fichiers".

> **Prompt 1 — Description du besoin d'automatisation (norme CLARTE)**
> "Tu es un assistant technique qui écrit du code pour une personne non-développeuse dans le service administratif d'une organisation. J'ai un dossier Windows contenant environ 150 fichiers PDF de factures fournisseurs, nommés de façon incohérente (certains avec une date, d'autres non, avec des majuscules et espaces variables). Écris-moi un script Python qui renomme chaque fichier selon le format `AAAA-MM-JJ_NomFournisseur.pdf`, en lisant la date et le nom du fournisseur dans le nom actuel du fichier quand c'est possible. N'utilise que des bibliothèques Python déjà incluses de base (pas d'installation supplémentaire), et prévois un message clair si un fichier ne peut pas être renommé automatiquement plutôt que de planter le script. Explique-moi en 3 phrases maximum, en langage courant, ce que fait le script avant de me donner le code."

*Pourquoi ce prompt est structuré ainsi* : "Tu es un assistant technique... personne non-développeuse" fixe le **C**ontexte et l'**A**udience réelle (le niveau technique du lecteur, pas seulement le rôle de l'IA) ; "Écris-moi un script Python qui renomme..." fixe le **L**ivrable précis avec le format exact attendu ; "N'utilise que des bibliothèques déjà incluses" et "prévois un message clair" sont des **R**estrictions qui évitent un script fragile ou impossible à exécuter simplement ; "Explique-moi en 3 phrases maximum, en langage courant" cadre le **T**on ; l'**E**xemple est le format de nom de fichier donné explicitement (`AAAA-MM-JJ_NomFournisseur.pdf`).

**Étape 3 — Lire et comprendre les grandes lignes du script sans être développeur**

Vous n'avez pas besoin de comprendre chaque ligne : il suffit de repérer les parties qui touchent réellement à vos fichiers. Avant d'exécuter quoi que ce soit, demandez systématiquement à l'IA de vous expliquer son propre script section par section.

> **Prompt 2 — Explication en langage clair (norme CLARTE)**
> "Tu es un assistant technique qui explique du code à une personne qui ne sait pas programmer. Voici le script que tu viens de me proposer : [coller le script]. Explique-moi, section par section, ce que fait chaque partie, en une phrase simple par section, sans terme technique non expliqué. Indique clairement : où se trouve le nom du dossier que je dois adapter à mon cas, où se trouve la partie qui lit chaque fichier un par un, et où se trouve la partie qui renomme réellement un fichier sur le disque. Ne me donne aucun nouveau code à ce stade, uniquement l'explication."

*Pourquoi ce prompt est structuré ainsi* : le **C**ontexte et l'**A**udience répètent volontairement le niveau technique réel du lecteur, même si l'IA l'a déjà vu à l'étape précédente, pour éviter une explication qui redevient technique ; le **L**ivrable est fixé précisément (une phrase par section, trois repères précis à identifier) ; "Ne me donne aucun nouveau code à ce stade" est une **R**estriction qui sépare volontairement la lecture de la modification ; "sans terme technique non expliqué" cadre le **T**on. C'est cette étape, et non la lecture brute du code, qui permet à un profil non-développeur de savoir ce qu'un script va réellement faire avant de l'exécuter.

**Étape 4 — Tester sur une copie avant d'exécuter sur les vraies données**

C'est l'étape la plus importante de tout ce module. Avant d'exécuter le script sur votre dossier réel, exigez toujours un mode test qui affiche ce que le script *ferait*, sans rien modifier réellement.

> **Prompt 3 — Ajout d'un mode test / dry-run (méthode STAR)**
> "Situation : j'ai le script de renommage de factures ci-dessus [coller le script], qui va s'exécuter sur un dossier réel de 150 fichiers PDF que je ne peux pas me permettre d'abîmer par erreur. Tâche : je veux pouvoir vérifier ce que le script ferait avant qu'il ne modifie réellement un seul fichier. Action : ajoute au script une option de mode test (par exemple une variable `MODE_TEST = True` en haut du fichier) qui, quand elle est activée, affiche dans le terminal l'ancien nom et le nouveau nom prévu pour chaque fichier, sans renommer réellement aucun fichier sur le disque ; quand elle est mise à `False`, le script exécute les renommages pour de vrai. Résultat attendu : le même script, avec ce mode test ajouté, accompagné d'une phrase m'indiquant exactement quelle ligne changer pour passer du mode test au mode réel."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation rappelle l'enjeu réel (150 fichiers qu'on ne peut pas se permettre d'abîmer), ce qui justifie la demande ; la **T**âche fixe l'objectif de vérification avant modification ; l'**A**ction décrit précisément le mécanisme attendu (une variable simple à activer/désactiver, un affichage clair avant/après) plutôt que de laisser l'IA choisir une implémentation vague ; le **R**ésultat impose un critère de réussite concret : savoir exactement quelle ligne changer pour passer en mode réel. Ce prompt s'applique à toute automatisation de ce module, pas seulement au renommage de fichiers : fusion de fichiers, extraction de données, tout script qui modifie ou déplace des fichiers doit passer par cette étape avant exécution réelle. La checklist de vérification pré-exécution complète est fournie dans `04-templates/guide-securite-verification-scripts-ia.docx`.

Exécutez d'abord le script en mode test sur une copie du dossier (jamais directement sur l'original, même en mode test, tant que vous n'êtes pas certain à 100 % de son comportement), vérifiez ligne par ligne dans le terminal que les nouveaux noms proposés sont corrects, puis seulement passez en mode réel.

**Étape 5 — Exécuter, vérifier le résultat et documenter le script**

Une fois le mode réel exécuté sur les vraies données, vérifiez un échantillon des fichiers renommés directement dans l'explorateur de fichiers, puis demandez à l'IA de documenter le script pour qu'il soit réutilisable la prochaine fois, par vous-même ou par un collègue qui ne l'a jamais vu.

> **Prompt 4 — Documentation pour réutilisation (méthode STAR)**
> "Situation : le script de renommage de factures a fonctionné correctement sur mon dossier réel de 150 fichiers, vérifié par échantillonnage. Tâche : je veux pouvoir réutiliser ce script dans six mois, ou le confier à un collègue qui n'a jamais vu de code, sans devoir tout réexpliquer. Action : ajoute en haut du script un commentaire de quelques lignes qui explique : à quoi sert ce script, quel dossier il faut indiquer avant de le lancer, comment activer le mode test, et quelle commande exacte taper dans le terminal pour le lancer. Résultat attendu : un fichier que je peux transmettre tel quel à un collègue non-développeur avec, en plus, trois phrases en langage courant (hors du script) résumant la procédure complète, à coller dans une note interne."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation confirme que le script a déjà été validé, pour que l'IA documente un comportement vérifié plutôt qu'hypothétique ; la **T**âche fixe l'objectif réel de la documentation (réutilisation différée, transmission à un tiers non-développeur) ; l'**A**ction liste précisément les quatre informations attendues dans le commentaire ; le **R**ésultat distingue le commentaire technique dans le script d'un résumé en langage courant destiné à une note interne, deux livrables différents pour deux usages différents.

Le script documenté, accompagné de son mode test, constitue votre premier outil réutilisable de la bibliothèque de prompts de délégation technique fournie dans `04-templates/bibliotheque-prompts-delegation-technique.xlsx` : consignez-y la tâche, le prompt utilisé et l'outil choisi, pour ne pas repartir de zéro la prochaine fois qu'un besoin similaire se présente.
