# Module 14 — Big Data Analysis avec Claude (avec Code)
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Trois exports mensuels de livraisons logistiques à croiser avant le comité trimestriel"

**Contexte (fictif, réaliste)**

Votre coordinateur logistique vous transmet trois fichiers CSV d'exports mensuels de livraisons — `export-juillet.csv`, `export-aout.csv` et `export-septembre.csv` — chacun comportant plusieurs milliers de lignes (date de livraison, site de destination, identifiant de commande, quantité livrée, statut). Sa demande : *"J'ai besoin d'un tableau de synthèse trimestriel par site avant le comité de la semaine prochaine, avec les volumes qui sortent de l'ordinaire signalés."*

Trois fichiers à croiser sur une clé commune (le site de destination) et un volume de lignes qui rend tout croisement manuel dans Excel long et risqué : cette situation dépasse clairement le seuil de passage à l'échelle vu à l'étape 1 de ce module. Comme souvent avec des exports mensuels produits par des personnes différentes, la colonne "site de destination" n'est pas rigoureusement identique d'un fichier à l'autre : le site de Goma apparaît comme `GOMA-01` dans l'export de juillet, `Goma01` dans celui d'août et `GOMA 01` dans celui de septembre — trois orthographes du même site qui, non corrigées, produiraient trois lignes distinctes dans le tableau de synthèse au lieu d'une seule.

Le jeu de données complet (trois fichiers d'exemple réduits, avec l'incohérence de clé volontairement présente) est fourni dans `04-templates/checklist-passage-echelle-big-data.xlsx`, feuille "Seuils de passage à l'échelle", à titre d'illustration du type de fichier concerné — utilisez vos propres exports ou des exports test de votre organisation pour réaliser l'exercice en conditions réelles.

**Votre mission** : produire, avant le comité, un tableau de synthèse trimestriel par site (quantité totale livrée sur les trois mois) et une liste des anomalies de volume détectées (un site dont le volume d'un mois s'écarte fortement des deux autres, par exemple).

### Exercice noté

1. **Croisement et diagnostic de clé** — Déposez vos trois fichiers dans Claude (exécution de code) et, en vous inspirant du Prompt 1 de la section Outils de ce module (norme CLARTE), rédigez et exécutez votre propre prompt adapté au nombre de lignes et aux colonnes réelles de vos fichiers. Exigez explicitement la détection des variantes de nom de site avant toute fusion.

   > **Prompt d'exercice — Croisement trimestriel avec détection de clé (norme CLARTE)**
   > "Tu es analyste de données pour le service logistique. Je te fournis trois fichiers CSV d'exports mensuels de livraisons (juillet, août, septembre), avec les colonnes : date de livraison, site de destination, identifiant de commande, quantité livrée, statut. Croise ces trois fichiers sur le site de destination pour produire un total de quantité livrée par site sur le trimestre complet. Avant de fusionner, identifie toute valeur de la colonne 'site de destination' qui pourrait désigner le même site sous une orthographe différente d'un fichier à l'autre (espace, tiret, casse) et présente-moi la liste de ces regroupements proposés avant de les appliquer, avec pour chacun les valeurs brutes concernées. Une fois les regroupements validés par moi, produis le tableau trimestriel par site, trié par quantité totale décroissante. Exécute réellement le calcul sur les fichiers fournis, ne donne aucune estimation."

   *Pourquoi ce prompt est structuré ainsi* : le **C**ontexte précise les trois fichiers réels et leurs colonnes ; la **R**estriction "identifie... avant de les fusionner" et "présente-moi la liste... avant de les appliquer" impose une étape de validation humaine avant toute fusion automatique, condition indispensable pour une clé de jointure connue pour être instable ; le **L**ivrable est fixé au tableau trimestriel trié ; "Exécute réellement le calcul... ne donne aucune estimation" est la même restriction qu'à l'étape 2 de ce module, appliquée ici à un cas concret.

2. **Vérification par échantillon** — Sur le modèle du Prompt 2 de la section Outils de ce module, demandez une explication en langage clair du croisement effectué et un échantillon de 8 à 10 lignes tracées jusqu'aux fichiers sources. Ouvrez vous-même les trois fichiers CSV d'origine et vérifiez manuellement chaque ligne de l'échantillon. Notez tout écart constaté.

3. **Détection des anomalies de volume et rapport final** — Demandez à Claude de comparer, pour chaque site, le volume de chacun des trois mois et de signaler tout site dont un mois s'écarte fortement des deux autres (par exemple une variation de plus de 40 % par rapport à la moyenne des deux autres mois). Rédigez ensuite la synthèse destinée au comité en vous appuyant sur le gabarit `04-templates/gabarit-brief-pipeline-donnees-automatise.docx` — même si ce trimestre n'est traité qu'une fois pour l'exercice, complétez ce gabarit comme si vous prépariez d'ores et déjà l'automatisation du même rapport pour les trimestres suivants.

   > **Prompt d'exercice — Détection d'anomalies et cadrage du pipeline futur (méthode STAR)**
   > "Situation : j'ai croisé et vérifié un tableau trimestriel de livraisons par site à partir de trois exports mensuels ; ce même rapport devra être refait chaque trimestre à partir de nouveaux exports au même format. Tâche : d'une part, signaler les sites dont le volume d'un mois s'écarte fortement des deux autres mois du trimestre ; d'autre part, me lister les informations dont j'aurai besoin pour faire construire un pipeline automatisé de ce même rapport. Action : (1) calcule pour chaque site l'écart en pourcentage entre le volume de chaque mois et la moyenne des deux autres mois, et signale tout écart supérieur à 40 %, avec le chiffre exact ; (2) liste-moi, sous forme de points, les éléments à préciser pour automatiser ce pipeline : emplacement et format attendu des futurs exports, logique de regroupement des variantes de site à mémoriser, fréquence de réexécution, et point de vérification à prévoir avant diffusion. Résultat attendu : un tableau des anomalies avec pourcentage d'écart, et une liste prête à reporter dans un gabarit de brief de pipeline."

   *Pourquoi ce prompt est structuré ainsi* : la **S**ituation rappelle que le tableau trimestriel est déjà croisé et vérifié, pour ne pas redemander un calcul déjà fait ; la **T**âche combine volontairement deux objectifs complémentaires (anomalie immédiate + préparation de l'automatisation future) ; l'**A**ction fixe un seuil chiffré explicite (40 %) pour la détection d'anomalie, ce qui évite une réponse vague de type "ce site semble élevé" ; le **R**ésultat cadre une sortie directement réutilisable, y compris pour compléter le gabarit de brief.

**Livrable attendu** : le tableau trimestriel par site avec les regroupements de clé validés, la liste des anomalies de volume avec leur pourcentage d'écart, et le gabarit `gabarit-brief-pipeline-donnees-automatise.docx` complété comme cadrage d'un futur pipeline récurrent pour ce même rapport.

### Pièges fréquents

- **Faire confiance à un résultat de calcul volumineux sans jamais le vérifier sur un échantillon connu** — l'exécution de code élimine l'erreur de calcul, pas l'erreur de logique ; sans vérification manuelle d'un échantillon tracé jusqu'aux fichiers sources, une erreur de regroupement ou de filtre peut passer inaperçue jusqu'au comité.
- **Croiser des fichiers sur une clé qui n'est pas réellement identique d'un fichier à l'autre** — un espace superflu, une casse différente ou une orthographe divergente d'un identifiant de site (comme `GOMA-01` / `Goma01` / `GOMA 01` dans l'étude de cas) crée des doublons silencieux dans un croisement automatique si cette incohérence n'est pas explicitement recherchée et validée avant la fusion.
- **Laisser tourner une automatisation Claude Code pendant des mois sans jamais la revérifier** — un pipeline mis en service correctement en janvier peut produire un résultat silencieusement faux en juin si le format des fichiers sources a changé entre-temps ; c'est exactement le risque de "boîte noire" décrit dans la théorie de ce module.
- **Confondre "l'IA a exécuté du code donc le résultat est fiable" avec une vérification réelle** — l'exécution de code garantit que le calcul a été fait correctement sur les données fournies, pas que ces données étaient elles-mêmes correctes en amont, ni que la logique demandée correspondait réellement au besoin métier.
- **Déposer des données confidentielles ou sensibles dans un outil d'IA pour une analyse volumineuse sans avoir vérifié que c'est autorisé** — un fichier de livraisons peut sembler anodin mais contenir des informations sur des bénéficiaires, des sites sensibles ou des partenaires à ne pas exposer ; la vérification de ce qui peut ou non être transmis à un outil d'IA a été posée au Module 01 et reste valable, avec plus d'acuité encore, pour des fichiers volumineux qui peuvent contenir des colonnes entières passées inaperçues.

### Check-list de fin de module

- [ ] Je sais reconnaître, à l'aide d'une grille de critères, qu'un besoin d'analyse dépasse les limites pratiques d'Excel et de Power Query.
- [ ] Je sais décrire à Claude un besoin d'analyse volumineuse ou croisée en langage courant, sans écrire de code, et exiger que le calcul soit réellement exécuté.
- [ ] Je sais demander une explication en langage clair d'un résultat de code exécuté, et vérifier un échantillon tracé jusqu'aux fichiers sources.
- [ ] Je sais identifier et faire valider une incohérence de clé de jointure (espace, casse, orthographe) avant tout croisement automatique de fichiers.
- [ ] J'ai utilisé au moins quatre prompts CLARTE/STAR du module, adaptés à mes propres données.
- [ ] Je sais faire construire par Claude Code un pipeline récurrent, avec un mode test avant toute exécution sur des données réelles.
- [ ] J'ai complété la feuille "Suivi des pipelines automatisés" du gabarit `checklist-passage-echelle-big-data.xlsx` pour au moins un pipeline mis en service.
- [ ] Je sais expliquer pourquoi une automatisation de données doit être revérifiée périodiquement plutôt que laissée tourner sans supervision.
