# Module 09 — IA pour la Data & l'Analyse — De la donnée brute à la décision
## 02. Outils & Guide Pratique

### Rappel — deux méthodes de prompting utilisées tout au long de ce module

Tout prompt professionnel structuré combine six éléments, résumés par la norme **CLARTE** : **C**ontexte (qui vous êtes, dans quel cadre, quelles données) ; **L**ivrable attendu (le résultat exact voulu — format, longueur, structure) ; **A**udience / rôle (le rôle que doit endosser l'IA, et pour qui elle produit) ; **R**estrictions (contraintes, ce qu'il ne faut PAS faire, limites de confidentialité) ; **T**on & style (registre attendu — formel, synthétique, technique...) ; **E**xemples (un exemple de format ou de sortie attendue, si possible).

Pour les cas qui demandent un raisonnement en plusieurs étapes plutôt qu'une simple restitution, on utilise la méthode **STAR** appliquée au prompting : **S**ituation (description factuelle du contexte de départ) ; **T**âche (objectif précis à atteindre) ; **A**ction (ce que l'IA doit concrètement exécuter, étape par étape) ; **R**ésultat (le livrable final et son critère de réussite).

Chaque prompt donné ci-dessous précise entre parenthèses quelle méthode il applique, et un commentaire qui suit explique quel élément correspond à quelle ligne. Vous pouvez copier-coller ces prompts tels quels et remplacer les éléments entre crochets par vos propres données.

### Outils utilisés dans ce module

**Excel avec Copilot** — Copilot dans Excel (disponible sur les licences Microsoft 365 avec add-on Copilot) peut auditer une feuille, proposer des formules et générer des étapes Power Query directement à partir d'une demande en langage naturel, sans quitter le tableur. C'est l'outil à privilégier quand le fichier reste petit ou moyen et que vous voulez rester dans Excel du diagnostic jusqu'au graphique.

**ChatGPT (Code Interpreter / Data Analysis)** — le mode Data Analysis de ChatGPT exécute réellement du code Python sur le fichier que vous déposez : il peut calculer des statistiques exactes, détecter des doublons par comparaison ligne à ligne et produire des graphiques. C'est l'outil le plus fiable pour un calcul chiffré exact sur un fichier de plusieurs centaines de lignes.

**Claude (analyse de fichiers)** — Claude.ai accepte le dépôt direct d'un fichier Excel ou CSV et peut en faire une lecture qualitative fine (repérer une incohérence de logique métier, formuler une synthèse rédigée) ; pour un calcul chiffré volumineux et vérifiable, préférez toutefois ChatGPT Data Analysis ou une formule Excel que vous pouvez auditer vous-même.

**Power BI (mention brève)** — quand un jeu de données doit être suivi dans la durée par plusieurs personnes (tableau de bord vivant plutôt qu'analyse ponctuelle), Power BI prend le relais d'Excel : mêmes principes de nettoyage via Power Query, mais avec une visualisation interactive partagée. Ce module reste centré sur Excel et l'IA conversationnelle ; Power BI est l'étape naturelle suivante une fois le pipeline de nettoyage stabilisé.

### Guide pratique étape par étape — Du fichier brut au rapport de gestion

Ce guide part d'une situation réelle : vous recevez un export de dépenses ou d'achats sur plusieurs mois, sans autre consigne que "regarde ce qu'on peut en tirer". Voici le pipeline complet, dans l'ordre, avec à chaque étape le prompt exact à utiliser.

**Étape 1 — Diagnostic initial des données brutes**

Avant de corriger quoi que ce soit, faites auditer le fichier tel quel. Déposez-le dans Claude ou ChatGPT (ou ouvrez-le dans Excel avec Copilot) et utilisez le prompt suivant.

> **Prompt 1 — Diagnostic (norme CLARTE)**
> "Tu es analyste de données pour le service achats/logistique d'une organisation. Je te fournis un export Excel de dépenses sur plusieurs mois (colonnes : date, fournisseur, catégorie, montant, site). Audite ce fichier ligne par ligne et produis un tableau récapitulatif avec quatre colonnes : type de problème détecté, nombre de lignes concernées, exemples précis (numéro de ligne ou valeur), et gravité (bloquant / à corriger / mineur). Cherche spécifiquement les doublons, les valeurs manquantes, les formats de date incohérents et les colonnes qui n'apportent aucune information utile à l'analyse. Ne corrige rien à ce stade, limite-toi au diagnostic. Reste factuel et synthétique, sans commentaire général sur la qualité globale du fichier."

*Pourquoi ce prompt est structuré ainsi* : "Tu es analyste... service achats/logistique" pose le **C**ontexte et l'**A**udience (le rôle endossé par l'IA) ; "produis un tableau récapitulatif avec quatre colonnes..." fixe le **L**ivrable attendu ; "Ne corrige rien à ce stade" est une **R**estriction explicite qui évite que l'IA saute des étapes ; "Reste factuel et synthétique" cadre le **T**on. L'**E**xemple est implicite dans la description précise des quatre colonnes attendues.

Vérifiez toujours un échantillon des anomalies signalées à la main avant de passer à l'étape suivante — voir le piège correspondant plus bas.

**Étape 2 — Nettoyage assisté par IA**

Une fois le diagnostic validé, demandez la correction elle-même : formules Excel, règles de validation, ou étapes Power Query si le nettoyage doit être reproductible sur les prochains exports du même format.

> **Prompt 2 — Nettoyage (méthode STAR)**
> "Situation : j'ai un fichier Excel de dépenses avec des doublons exacts sur les colonnes date+fournisseur+montant, une colonne 'Date' qui mélange les formats JJ/MM/AAAA et AAAA-MM-JJ, et une colonne 'Montant' avec quelques cellules vides. Tâche : je veux un jeu de données propre et une checklist réutilisable pour les prochains exports du même modèle. Action : (1) donne-moi une formule Excel utilisant COUNTIFS pour signaler chaque doublon, (2) donne-moi la suite d'étapes Power Query pour uniformiser la colonne Date au format JJ/MM/AAAA, (3) propose une règle de validation de données pour empêcher la saisie d'un montant vide à l'avenir. Résultat attendu : un jeu de formules et d'étapes que je peux appliquer directement dans Excel, avec pour chacune une phrase expliquant ce qu'elle fait et pourquoi."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation décrit exactement l'état du fichier avec les trois défauts réels ; la **T**âche fixe l'objectif (fichier propre + checklist réutilisable, pas juste une correction ponctuelle) ; l'**A**ction découpe la demande en trois livrables concrets et ordonnés, ce qui évite une réponse vague ; le **R**ésultat précise le format de sortie et le critère de réussite (une formule applicable directement, avec explication).

**Étape 3 — Analyse : KPI, tendances et comparatifs**

Sur le jeu de données nettoyé, demandez les indicateurs qui répondent à une vraie question de gestion — jamais "analyse ce fichier" seul.

> **Prompt 3 — Analyse orientée décision (norme CLARTE)**
> "Tu es analyste financier pour un service logistique. Voici mon fichier de dépenses nettoyé (date, fournisseur, catégorie, montant, site, mois). Ma question de gestion : quels sites ou fournisseurs expliquent la plus forte variation de coût entre le premier et le second trimestre ? Calcule pour moi : le coût total par site et par trimestre, la variation en pourcentage entre les deux trimestres, et le top 3 des fournisseurs dont le coût moyen par commande a le plus augmenté. Présente le résultat sous forme de tableau, trié par variation décroissante, avec une phrase de lecture par ligne du top 3. Ne formule aucune recommandation à ce stade, uniquement les chiffres et leur lecture factuelle. Adopte un ton neutre et chiffré, sans superlatif."

*Pourquoi ce prompt est structuré ainsi* : "Tu es analyste financier" fixe l'**A**udience/rôle ; "Ma question de gestion : quels sites ou fournisseurs..." est le cœur de la méthode — la question précède le calcul, ce qui distingue une analyse d'un résumé (voir la théorie de ce module) ; "Présente le résultat sous forme de tableau..." fixe le **L**ivrable ; "Ne formule aucune recommandation à ce stade" est une **R**estriction volontaire qui sépare le constat de l'interprétation ; "ton neutre et chiffré" cadre le **T**on.

**Étape 4 — Visualisation orientée message**

Ne demandez jamais "fais-moi un graphique" seul : ce prompt produit un graphique techniquement correct mais qui ne dit rien. Le bon réflexe est de préciser le message que le graphique doit porter, et de laisser l'IA en déduire le type de visuel adapté :

| Message à faire passer | Type de graphique recommandé |
|---|---|
| Évolution d'un montant ou d'un volume dans le temps | Courbe (line chart) |
| Comparaison de catégories entre elles (fournisseurs, sites) | Barres (bar chart) |
| Répartition d'un total en quelques parts (moins de 5-6 catégories) | Camembert (pie chart), à utiliser avec parcimonie |
| Comparaison de deux dimensions à la fois (site ET trimestre) | Barres groupées ou empilées |

> **Prompt 4 — Recommandation de visualisation (norme CLARTE)**
> "Tu es analyste de données. Voici les résultats calculés à l'étape précédente (coût total par site et par trimestre, variation en %, top 3 fournisseurs). Le message que je veux faire passer à la direction : deux sites concentrent la hausse des coûts du second trimestre, et un fournisseur en particulier explique une grande partie de cette hausse. Propose-moi, pour chaque message, le type de graphique le plus adapté (parmi courbe, barres, barres groupées, camembert) et la structure exacte du graphique (axes, séries, tri). N'utilise un camembert que si la répartition compte 5 catégories ou moins. Limite ta réponse à deux graphiques maximum, un par message, avec une légende suggérée pour chacun."

*Pourquoi ce prompt est structuré ainsi* : le **C**ontexte reprend explicitement les résultats déjà obtenus (pas de redemande de calcul) ; le message à transmettre remplace la demande vague de "graphique" et guide le choix du type ; la **R**estriction sur le camembert évite l'erreur la plus fréquente de ce type de demande ; "Limite ta réponse à deux graphiques maximum" fixe un **L**ivrable borné et exploitable.

**Étape 5 — Rédaction du rapport de gestion final**

Dernière étape : transformer les résultats et les graphiques en document présentable, avec le template `04-templates/gabarit-rapport-analyse-donnees.docx` fourni avec ce module.

> **Prompt 5 — Rapport final (méthode STAR)**
> "Situation : j'ai analysé un fichier de dépenses logistiques sur deux trimestres et identifié que deux sites et un fournisseur concentrent la hausse des coûts, avec les chiffres suivants : [coller le tableau de résultats de l'étape 3]. Tâche : rédiger la synthèse exécutive et la section recommandation d'un rapport de gestion destiné à la direction, qui ne lira que ces deux sections. Action : rédige une synthèse exécutive de 5 lignes maximum reprenant le constat chiffré principal, puis une recommandation en 3 points classés par priorité, chacun avec une prochaine étape concrète et un responsable suggéré. Résultat attendu : un texte prêt à coller dans le gabarit de rapport, sans reformulation nécessaire, avec des chiffres exacts et aucune extrapolation au-delà des données fournies."

*Pourquoi ce prompt est structuré ainsi* : la **S**ituation rappelle les résultats déjà établis pour que l'IA ne réinvente rien ; la **T**âche précise l'audience réelle (la direction, qui ne lira que deux sections) ; l'**A**ction fixe une structure exacte (5 lignes, 3 points priorisés, prochaine étape + responsable) ; le **R**ésultat fixe le critère de réussite : un texte directement utilisable, fidèle aux chiffres fournis, sans extrapolation — un garde-fou essentiel pour un document destiné à la prise de décision.

Complétez ensuite le gabarit `04-templates/gabarit-rapport-analyse-donnees.docx` avec ce texte, les KPI calculés à l'étape 3 et les recommandations de graphiques de l'étape 4 : c'est ce document, et non la conversation avec l'IA, qui doit circuler auprès de votre hiérarchie.
