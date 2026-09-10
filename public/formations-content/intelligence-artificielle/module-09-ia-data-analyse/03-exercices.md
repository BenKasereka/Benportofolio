# Module 09 — IA pour la Data & l'Analyse — De la donnée brute à la décision
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Export brut de dépenses logistiques, janvier-juin 2026"

**Contexte (fictif, réaliste)**

Le responsable achats de votre organisation vous transmet un export de dépenses logistiques sur six mois, extrait directement du système comptable, avec ce seul message : *"Peux-tu regarder ce qu'on peut en tirer avant le comité budgétaire de vendredi ?"* Le fichier contient 26 lignes (date, fournisseur, catégorie, montant, site) et, comme tout export brut, il n'est pas prêt à être analysé : il contient au moins une ligne dupliquée, une colonne de dates au format incohérent, une valeur de montant manquante, et un nom de fournisseur saisi deux fois avec une casse et des espaces différents (`Transco Sarl` et `transco sarl `), ce qui le ferait compter comme deux fournisseurs distincts dans un tableau croisé dynamique classique.

Le fichier complet est fourni dans `04-templates/grille-diagnostic-nettoyage-donnees.xlsx` (feuille "Données brutes"), avec des colonnes de diagnostic déjà construites par formule que vous pouvez observer une fois l'exercice terminé, pour comparer avec votre propre travail.

**Votre mission** : produire, avant vendredi, un rapport d'une à deux pages qui répond à une question simple mais précise : *quel site ou quel fournisseur explique la plus grande partie de la hausse des dépenses logistiques du second trimestre, et que faut-il faire ?*

### Exercice noté

1. **Diagnostic** — Ouvrez `04-templates/grille-diagnostic-nettoyage-donnees.xlsx`, feuille "Données brutes". En vous inspirant du Prompt 1 de la section Outils de ce module (norme CLARTE), rédigez et exécutez votre propre prompt de diagnostic adapté à ce fichier précis (colonnes réelles, nombre de lignes réel). Listez au minimum les quatre anomalies décrites dans le contexte ci-dessus, avec leur ligne exacte.

   > **Prompt d'exercice — Diagnostic appliqué (norme CLARTE)**
   > "Tu es analyste de données pour le service achats. Voici un export de 26 lignes de dépenses logistiques (colonnes : Date, Fournisseur, Catégorie, Montant, Site) couvrant janvier à juin 2026. Identifie toutes les lignes dupliquées, toutes les valeurs de Montant manquantes, toutes les incohérences de format dans la colonne Date, et tout nom de fournisseur qui apparaît sous plusieurs orthographes ou casses différentes (espaces, majuscules/minuscules). Présente le résultat en un tableau à quatre colonnes : type d'anomalie, ligne(s) concernée(s), valeur observée, correction proposée. Ne modifie pas le fichier, limite-toi à la liste des anomalies. Sois exhaustif plutôt que synthétique : cet exercice sera vérifié ligne par ligne."

   *Pourquoi ce prompt est structuré ainsi* : le **C**ontexte précise le volume exact (26 lignes) et les colonnes réelles du fichier remis, ce qui évite une réponse générique ; le **L**ivrable est fixé à un tableau à quatre colonnes précises ; la **R**estriction "Ne modifie pas le fichier" sépare le diagnostic de la correction ; "Sois exhaustif plutôt que synthétique" adapte le **T**on à un exercice noté où l'exhaustivité prime sur la concision.

2. **Nettoyage et analyse** — À partir du diagnostic, nettoyez le jeu de données (à la main ou avec un prompt de nettoyage sur le modèle du Prompt 2 de la section Outils de ce module), puis calculez : le total des dépenses par site pour chaque trimestre, la variation en pourcentage entre les deux trimestres, et le fournisseur dont le coût total a le plus augmenté.

3. **Rapport final** — Rédigez la synthèse exécutive et la recommandation dans le gabarit `04-templates/gabarit-rapport-analyse-donnees.docx`, en vous appuyant sur le Prompt 5 de la section Outils de ce module (méthode STAR) adapté à vos propres résultats.

   > **Prompt d'exercice — Rapport final appliqué (méthode STAR)**
   > "Situation : j'ai nettoyé et analysé un export de dépenses logistiques sur le premier semestre 2026 ; après correction des doublons et de la casse fournisseur, le site [nom du site] et le fournisseur [nom du fournisseur] concentrent la majorité de la hausse du second trimestre, avec les montants suivants : [coller vos totaux]. Tâche : rédiger la synthèse exécutive et la recommandation d'un rapport destiné au comité budgétaire de vendredi, qui dispose de trois minutes de lecture. Action : rédige une synthèse exécutive de 5 lignes maximum et une recommandation en 3 points priorisés, chacun avec une prochaine étape concrète et un délai réaliste. Résultat attendu : un texte prêt à coller dans le gabarit de rapport, fondé uniquement sur les chiffres fournis, sans arrondi trompeur ni extrapolation au-delà du semestre analysé."

   *Pourquoi ce prompt est structuré ainsi* : la **S**ituation résume l'état déjà nettoyé et chiffré du dossier, sans redemander un calcul déjà fait ; la **T**âche cadre une contrainte réelle et fréquente en entreprise (trois minutes de lecture) qui doit déterminer la longueur du texte produit ; l'**A**ction fixe une structure exacte et bornée ; le **R**ésultat impose la fidélité stricte aux chiffres, condition non négociable pour un document soumis à un comité budgétaire.

**Livrable attendu** : le tableau de diagnostic, les totaux calculés par site et par trimestre, et le rapport complété — un ensemble ne dépassant pas 2 pages pour le rapport final, KPI et graphique(s) recommandé(s) inclus.

### Pièges fréquents

- **Demander une analyse sans avoir défini la question de gestion en amont** — "analyse ce fichier" produit un résultat générique et inexploitable ; toute demande d'analyse doit partir d'une question précise ("quel site explique la hausse ?"), jamais l'inverse.
- **Faire confiance à un nettoyage automatique sans vérifier un échantillon à la main** — l'IA peut mal interpréter une ligne ambiguë (un doublon apparent qui correspond en réalité à deux commandes distinctes le même jour chez le même fournisseur) ; vérifiez toujours 5 à 10 lignes corrigées contre le fichier source avant de valider le nettoyage complet.
- **Demander "un graphique" sans préciser le message à faire passer** — vous obtenez un graphique techniquement correct mais qui ne dit rien : un camembert à onze catégories illisible plutôt que la courbe ou les barres qui auraient réellement porté le message.
- **Confondre corrélation calculée et causalité affirmée dans le rapport final** — parce qu'un fournisseur explique la plus forte hausse chiffrée ne veut pas dire que ce fournisseur en est la cause ; un rapport de gestion doit distinguer clairement le constat chiffré ("ce fournisseur concentre X % de la hausse") de l'explication qui reste à vérifier ("hausse probablement due à une augmentation tarifaire non documentée dans ce fichier — à confirmer avec le service achats").
- **Livrer un rapport de gestion sans avoir fait relire les chiffres clés par une deuxième personne** — même avec un prompt rigoureux, une erreur de colonne mal identifiée ou un trimestre mal borné peut se glisser dans un calcul ; un chiffre erroné présenté à un comité budgétaire coûte beaucoup plus cher à corriger après coup qu'avant diffusion.

### Check-list de fin de module

- [ ] Je sais lister les quatre défauts qui rendent un jeu de données brut inexploitable.
- [ ] Je sais formuler une question de gestion avant de demander une analyse à l'IA, plutôt que de demander un résumé générique.
- [ ] Je connais la norme CLARTE et la méthode STAR et je sais dire quel élément de mon prompt correspond à quelle lettre.
- [ ] J'ai utilisé au moins deux prompts CLARTE/STAR du module, adaptés à mes propres données.
- [ ] Je sais générer avec l'IA une formule Excel de détection de doublons et une étape Power Query de nettoyage.
- [ ] Je sais choisir un type de graphique en fonction du message à transmettre, pas par défaut.
- [ ] J'ai complété le gabarit de rapport avec une synthèse exécutive et une recommandation priorisée fondées uniquement sur mes chiffres calculés.
- [ ] J'ai vérifié à la main un échantillon des corrections proposées par l'IA avant de les valider.
