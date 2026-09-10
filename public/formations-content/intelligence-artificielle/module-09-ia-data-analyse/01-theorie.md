# Module 09 — IA pour la Data & l'Analyse — De la donnée brute à la décision
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Diagnostiquer avec l'IA les défauts d'un jeu de données brut (doublons, valeurs manquantes, formats incohérents, colonnes inutiles) avant toute exploitation.
- Formuler une demande d'analyse orientée décision plutôt qu'une demande de résumé générique, en précisant la question de gestion en amont.
- Générer avec l'IA des formules Excel, des règles de validation et des étapes Power Query pour nettoyer un jeu de données sans tout refaire à la main.
- Produire des KPI, des comparatifs et des recommandations de visualisation pertinents pour un message de gestion précis.
- Transformer un résultat d'analyse en rapport de gestion structuré, avec synthèse exécutive et recommandation actionnable.

### Ce qui rend un jeu de données brut inexploitable

Un export Excel ou CSV qui sort d'un système d'achat, d'une caisse ou d'un tableau de suivi terrain n'est presque jamais prêt à être analysé tel quel. Quatre défauts reviennent systématiquement :

- **Les doublons** : une même dépense saisie deux fois (souvent parce que deux personnes ont alimenté le même fichier, ou qu'une ligne a été copiée par erreur), qui gonfle artificiellement les totaux si elle n'est pas repérée.
- **Les valeurs manquantes** : une date de paiement vide, un montant non renseigné, un nom de fournisseur laissé en blanc — chacune de ces cases vides peut fausser un calcul de moyenne ou de total si elle n'est pas traitée explicitement (exclue, corrigée ou signalée).
- **Les formats incohérents** : la même colonne "date" qui mélange `12/03/2026`, `2026-03-12` et `12-Mar-26` selon qui a saisi la ligne — un tableau croisé dynamique ou une formule de calcul de délai traite ces trois formats différemment, voire n'en reconnaît aucun correctement.
- **Les colonnes inutiles ou redondantes** : des colonnes de commentaires libres, d'identifiants internes ou de champs dupliqués qui n'apportent rien à l'analyse mais alourdissent le fichier et le rendent illisible pour l'IA comme pour un humain.

Ce travail de diagnostic et de nettoyage est fastidieux, répétitif, et c'est précisément pour cela qu'il est mal fait ou pas fait dans beaucoup d'organisations : personne n'a le temps de vérifier ligne par ligne un fichier de 500 lignes. L'IA change la donne sur ce point précis — pas parce qu'elle remplace le jugement humain, mais parce qu'elle peut scanner l'intégralité d'un fichier en quelques secondes et signaler chaque anomalie avec sa position exacte, un travail qu'un humain ferait en une heure ou ferait mal en cinq minutes par lassitude.

### "Fais-moi un résumé" contre "réponds à ma question de gestion"

La différence la plus importante de ce module se joue avant même d'ouvrir un outil d'IA. Demander "résume-moi ce fichier de dépenses" produit un résumé plat : nombre de lignes, quelques totaux, une liste de colonnes. C'est un résultat qui ne sert à rien pour décider quoi que ce soit, parce qu'aucune question n'a été posée.

Demander "quels sont les trois fournisseurs dont le coût moyen par commande a le plus augmenté entre le premier et le second semestre, et cette hausse est-elle due au volume ou au prix unitaire ?" produit une analyse orientée décision : elle répond à une question de gestion précise, et son résultat mène directement à une action (renégocier, changer de fournisseur, vérifier un volume anormal).

**Ce qu'il faut retenir opérationnellement** : avant de déposer un fichier dans un outil d'IA, écrivez la question de gestion en une phrase. Si vous ne pouvez pas formuler cette phrase, ce n'est pas un problème d'outil — c'est que la question elle-même n'est pas encore claire, et aucune IA ne peut la clarifier à votre place. C'est tout l'objet de la norme CLARTE et de la méthode STAR présentées dans la partie Outils & Guide Pratique de ce module : elles obligent à préciser cette question avant de solliciter l'IA.

### Vocabulaire clé à maîtriser dès ce module

- **KPI (Key Performance Indicator)** : un indicateur chiffré directement relié à une décision de gestion (coût moyen par commande, délai moyen de livraison, part d'un fournisseur dans le budget total) — par opposition à une statistique descriptive sans finalité décisionnelle.
- **Score de qualité de données** : une mesure agrégée (souvent en pourcentage) de la fiabilité d'un jeu de données, calculée à partir du taux de doublons, du taux de valeurs manquantes et du taux d'incohérences de format détectés.
- **Power Query** : le moteur de transformation de données intégré à Excel et Power BI, qui permet d'enregistrer une suite d'étapes de nettoyage reproductibles sur un fichier, plutôt que de corriger manuellement à chaque nouvel export.
