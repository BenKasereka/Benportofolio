# Module 14 — Big Data Analysis avec Claude (avec Code)
## 02. Outils & Guide Pratique

### Rappel — deux méthodes de prompting utilisées tout au long de ce module

Tout prompt professionnel structuré combine six éléments, résumés par la norme **CLARTE** : **C**ontexte (qui vous êtes, dans quel cadre, quelles données) ; **L**ivrable attendu (le résultat exact voulu — format, structure, ce qui doit être calculé) ; **A**udience / rôle (le rôle que doit endosser l'IA, et pour qui elle produit) ; **R**estrictions (contraintes, ce qu'il ne faut PAS faire, limites de vérifiabilité) ; **T**on & style (registre attendu) ; **E**xemples (un format ou une sortie attendue, si possible).

Pour les demandes qui exigent un raisonnement en plusieurs étapes — typiquement, faire construire un pipeline complet plutôt qu'obtenir un résultat ponctuel — on utilise la méthode **STAR** appliquée au prompting : **S**ituation (contexte factuel de départ) ; **T**âche (objectif précis à atteindre) ; **A**ction (ce que l'IA doit concrètement exécuter, étape par étape) ; **R**ésultat (le livrable final et son critère de réussite).

Chaque prompt de ce module précise entre parenthèses la méthode appliquée, suivi d'un commentaire qui indique quel élément correspond à quelle lettre. Copiez-collez ces prompts tels quels et remplacez les éléments entre crochets par vos propres données.

### Outils utilisés dans ce module

**Claude — exécution de code (outil d'analyse de claude.ai)** — décrit dans la théorie de ce module : vous déposez un ou plusieurs fichiers, vous décrivez votre besoin en langage courant, et Claude écrit puis exécute réellement du code (Python/pandas) pour produire un résultat vérifiable. C'est l'outil à privilégier pour une analyse ponctuelle sur un fichier volumineux ou plusieurs fichiers à croiser une seule fois.

**Claude Code (CLI, déjà vu au Module 10)** — repris ici avec un usage précis : construire et faire tourner un **pipeline récurrent**. Contrairement à l'usage du Module 10 (automatiser une tâche administrative ponctuelle comme un renommage de fichiers), ce module utilise Claude Code pour un script destiné à être réexécuté chaque mois ou chaque semaine sur un nouvel export, avec une sortie stable dans sa structure.

**Excel / Power Query (rappel du Module 09)** — reste l'outil de référence tant que le seuil de passage à l'échelle décrit à l'étape 1 ci-dessous n'est pas atteint. Ce module ne remplace pas le Module 09, il en prend le relais au-delà de ses limites pratiques.

### Guide pratique étape par étape — Du fichier volumineux au pipeline supervisé

**Étape 1 — Reconnaître le seuil de passage à l'échelle**

Avant de déposer quoi que ce soit dans un outil d'IA, vérifiez si votre situation correspond réellement à ce module ou si elle relève encore du Module 09. Utilisez la grille de critères ci-dessous, reprise et complétée dans le gabarit `04-templates/checklist-passage-echelle-big-data.xlsx` fourni avec ce module (feuille "Seuils de passage à l'échelle") :

| Critère | Seuil indicatif de passage à l'échelle |
|---|---|
| Volume de lignes du fichier principal | Au-delà d'environ 50 000 lignes, ou dès qu'un tableau croisé dynamique devient lent ou que le fichier plante à l'ouverture |
| Nombre de fichiers sources à croiser | Plus de 2 fichiers à rapprocher sur une clé commune (site, commande, référence) |
| Type de calcul demandé | Un calcul qu'Excel ne fait pas nativement ou fait de façon fragile (écart-type pondéré, corrélation multi-variables, agrégation glissante) |

Si aucun de ces trois seuils n'est franchi, restez dans Excel avec les méthodes du Module 09 — ce sera toujours plus rapide et plus facile à auditer par vous-même. Si au moins un seuil est franchi, passez à l'étape 2.

**Étape 2 — Décrire à Claude un besoin d'analyse volumineuse ou croisée**

Déposez le ou les fichiers concernés dans claude.ai et décrivez votre besoin avec le même niveau de précision qu'au Module 09 — une question de gestion, jamais "analyse ce fichier".

> **Prompt 1 — Analyse croisée volumineuse (norme CLARTE)**
> "Tu es analyste de données pour le service logistique d'une organisation. Je te fournis trois fichiers CSV d'exports mensuels de livraisons (environ 4 000 à 6 000 lignes chacun), avec les colonnes : date de livraison, site de destination, identifiant de commande, quantité livrée, statut. Ces trois fichiers doivent être croisés sur le site de destination pour produire un total de quantités livrées par site sur les trois mois combinés. Exécute le calcul réellement sur les données fournies, ne te contente pas d'une estimation. Avant de croiser les fichiers, vérifie si la colonne 'site de destination' contient des valeurs qui désignent probablement le même site sous une orthographe différente (espace, casse, tiret) et signale-les moi avant de les fusionner automatiquement. Présente le résultat sous forme de tableau trié par quantité totale décroissante, avec une ligne séparée listant les anomalies de clé détectées. Reste factuel, aucune recommandation à ce stade."

*Pourquoi ce prompt est structuré ainsi* : "Tu es analyste de données... service logistique" pose le **C**ontexte et l'**A**udience ; la description précise des trois fichiers et de leurs colonnes cadre les données réelles à traiter ; "Exécute le calcul réellement... ne te contente pas d'une estimation" est une **R**estriction essentielle qui impose l'exécution de code plutôt qu'une réponse générative approximative ; la consigne sur les anomalies de clé anticipe le piège de jointure le plus fréquent de ce module (voir plus bas dans ce module) ; "Présente le résultat sous forme de tableau..." fixe le **L**ivrable ; "Reste factuel" cadre le **T**on.

**Étape 3 — Lire et vérifier le résultat produit**

Ne diffusez jamais un résultat de code exécuté sans l'avoir fait expliquer en langage clair, puis vérifié à la main sur un échantillon. Vous n'avez pas besoin de savoir lire le code : vous avez besoin de savoir ce qu'il a fait.

> **Prompt 2 — Explication en langage clair et échantillon vérifiable (norme CLARTE)**
> "Tu es l'analyste qui vient de produire le tableau croisé de l'étape précédente. Je ne sais pas lire le code Python. Explique-moi en cinq phrases maximum, en langage courant, ce que le calcul a fait concrètement : comment les trois fichiers ont été combinés, comment les anomalies de nom de site ont été traitées, et si des lignes ont été exclues du calcul (et pourquoi). Donne-moi ensuite un échantillon de 8 lignes du résultat final, avec pour chacune le ou les fichiers sources et les lignes d'origine dont elle provient, pour que je puisse la vérifier moi-même contre les fichiers de départ. N'utilise aucun terme de programmation dans ton explication."

*Pourquoi ce prompt est structuré ainsi* : "Je ne sais pas lire le code Python" fixe l'**A**udience réelle et empêche une réponse technique inexploitable ; "Explique-moi en cinq phrases maximum..." fixe le **L**ivrable et une **R**estriction de longueur ; la demande d'un échantillon traçable jusqu'aux lignes sources est le cœur de la vérifiabilité — sans cette traçabilité, aucune vérification manuelle n'est possible ; "N'utilise aucun terme de programmation" cadre le **T**on pour un public non-développeur.

Une fois l'échantillon reçu, ouvrez vous-même les fichiers sources et contrôlez à la main les 8 lignes indiquées : les valeurs annoncées correspondent-elles réellement aux lignes d'origine ? C'est cette vérification manuelle, et non l'exécution du code en elle-même, qui valide le résultat.

**Étape 4 — Faire construire par Claude Code un pipeline récurrent**

Une fois qu'un besoin d'analyse se répète (le même rapport, refait chaque mois à partir d'un nouvel export), il ne s'agit plus d'une analyse ponctuelle : c'est le moment de passer à Claude Code pour construire un pipeline réutilisable.

> **Prompt 3 — Construction d'un pipeline récurrent (méthode STAR)**
> "Situation : chaque mois, je reçois un nouvel export CSV de livraisons logistiques par site (mêmes colonnes que le mois précédent : date, site, identifiant de commande, quantité, statut), et je refais actuellement à la main, dans Excel, un tableau de synthèse des quantités livrées par site que je transmets à mon coordinateur. Tâche : je veux un pipeline que je peux réexécuter chaque mois sur le nouvel export, sans repartir de zéro. Action : construis un script qui (1) lit le nouvel export CSV déposé dans un dossier donné, (2) uniformise la colonne 'site' pour regrouper les variantes d'orthographe probables du même site, (3) calcule le total de quantités livrées par site et la variation par rapport au mois précédent si un fichier du mois précédent est disponible, (4) enregistre le résultat dans un fichier de synthèse au format Excel, avec un nom incluant le mois traité. Ajoute un mode test qui affiche ce que le script ferait sans écrire le fichier final. Résultat attendu : un script documenté que je peux relancer moi-même chaque mois en changeant uniquement le nom du fichier d'entrée, avec une explication en langage courant de son fonctionnement avant toute exécution sur mes vraies données."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation décrit précisément la tâche répétitive actuelle et son rythme mensuel ; la **T**âche fixe l'objectif d'automatisation réutilisable, pas d'un script à usage unique ; l'**A**ction découpe le pipeline en quatre étapes ordonnées et vérifiables une par une ; le **R**ésultat impose un mode test — reprise directe du principe de sécurité du Module 10 — et une explication en langage courant avant toute exécution réelle, condition non négociable pour un non-développeur.

**Étape 5 — Mettre en place une supervision périodique du pipeline**

Un pipeline construit une fois n'est pas un pipeline fiable pour toujours. Le format des fichiers sources peut changer (une colonne renommée, un nouveau site ajouté, un export généré différemment par un nouveau logiciel) sans que le script en soit averti. Complétez la feuille "Suivi des pipelines automatisés" du gabarit `04-templates/checklist-passage-echelle-big-data.xlsx` à chaque mise en service d'un nouveau pipeline, puis revenez-y au minimum une fois par mois :

- Le format des fichiers sources a-t-il changé depuis la dernière vérification (nom de colonne, nombre de colonnes, format de date) ?
- Le résultat produit par le pipeline ce mois-ci est-il cohérent avec un contrôle manuel ponctuel sur un échantillon, comme à l'étape 3 ?
- La date de dernière vérification du pipeline dans le tableau de suivi date-t-elle de moins de 30 jours ? Le gabarit calcule automatiquement ce délai et signale les pipelines en retard de vérification.

Un pipeline qui n'a pas été revérifié depuis plus de 30 jours doit être considéré comme non fiable jusqu'à nouvelle vérification, même s'il continue de produire un résultat qui a l'air correct.
