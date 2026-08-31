# Module 07 — Systèmes ERP Humanitaires — SAP, LINK & Power Query
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**SAP et LINK (niveau conceptuel)** — ce sont deux des ERP les plus répandus dans le secteur humanitaire international. SAP équipe de grandes agences onusiennes et ONGI ; LINK est utilisé notamment dans l'écosystème du Mouvement Croix-Rouge/Croissant-Rouge. Ce module ne propose pas de prise en main licenciée d'un logiciel propriétaire précis (ce n'est ni réaliste, ni transférable hors de ce contexte) — il vous donne le fonctionnement conceptuel commun, pour que le premier jour où vous ouvrez l'ERP réel de votre employeur, vous compreniez déjà la logique derrière chaque écran.

**Excel avec Power Query (Data > Récupérer et transformer / Get & Transform)** — c'est l'outil pratique central de ce module. Disponible nativement dans Excel 2016 et versions ultérieures (y compris Microsoft 365), Power Query permet de connecter, nettoyer et transformer des données de façon reproductible, sans écraser vos données sources et sans devoir répéter manuellement les mêmes corrections à chaque nouvel export.

**Le template `guide-extraction-nettoyage-power-query.xlsx`** — fourni avec ce module, il contient un jeu de données brut volontairement sale (doublons, dates incohérentes, devises mélangées) et une démonstration pas-à-pas de la logique de nettoyage, feuille "avant" et feuille "après", avec chaque étape de transformation documentée.

### Guide pratique étape par étape — "D'un export ERP brut à un rapport fiable"

Ce guide part d'une situation extrêmement courante sur le terrain : vous recevez (ou vous exportez vous-même) un fichier CSV issu de l'ERP de votre organisation, censé lister le statut de tous les achats en cours sur votre base. Le fichier est techniquement complet, mais inexploitable en l'état. Voici exactement comment le transformer en rapport de statut des achats fiable.

**Étape 1 — Ouvrir Power Query sur le fichier brut, sans toucher à la source**

Dans Excel, allez dans `Données > Récupérer des données > À partir d'un fichier > À partir d'un classeur/texte-CSV`. Sélectionnez votre export ERP. **Ne l'ouvrez jamais directement pour le corriger à la main** : Power Query travaille sur une copie transformée, votre fichier source reste intact et consultable en cas de litige sur les chiffres. C'est la première règle professionnelle du nettoyage de données ERP.

**Étape 2 — Identifier et supprimer les doublons**

Dans l'éditeur Power Query, sélectionnez les colonnes qui, ensemble, identifient une ligne d'achat de façon unique (typiquement : numéro de PO + référence article). Utilisez `Accueil > Supprimer les lignes > Supprimer les doublons` sur cette sélection de colonnes précise — jamais sur l'ensemble du tableau, sous peine de supprimer des lignes légitimement différentes qui se ressemblent. Avant de supprimer, comptez le nombre de lignes en double repérées : ce chiffre doit apparaître dans votre note de transformation (voir étape 5), car c'est une information que votre coordination doit connaître.

**Étape 3 — Harmoniser les formats de date**

Un export ERP consolidé à partir de plusieurs postes de saisie mélange souvent JJ/MM/AAAA, MM/JJ/AAAA et AAAA-MM-JJ dans la même colonne. Repérez d'abord, en triant la colonne, les valeurs qui ne correspondent à aucun format cohérent (par exemple un "13/05/2025" à côté d'un "05/13/2025" — le premier ne peut être que JJ/MM, le second ne peut être que MM/JJ). Utilisez `Transformer > Colonne De Date/Heure > Analyser` en spécifiant explicitement la locale d'origine plutôt que de laisser Power Query deviner. En cas de doute réel sur un format ambiguë (ex. "03/04/2025" qui pourrait être les deux), remontez à la source de saisie plutôt que de trancher au hasard — une date fausse dans un rapport de délai de livraison peut fausser une décision opérationnelle.

**Étape 4 — Normaliser les devises**

Créez une colonne calculée qui identifie la devise déclarée sur chaque ligne (le champ est souvent saisi de façon non standard : "USD", "US$", "$", "Dollars" pour la même devise). Utilisez `Transformer > Remplacer les valeurs` pour uniformiser les libellés de devise, puis appliquez un taux de change de référence documenté (celui utilisé officiellement par votre mission pour le mois concerné — jamais un taux improvisé) pour convertir toutes les lignes vers une devise unique de reporting, dans une nouvelle colonne dédiée. **Ne remplacez jamais la colonne "montant original" — ajoutez toujours une colonne "montant converti" à côté**, pour que quiconque relit le rapport puisse vérifier votre conversion.

**Étape 5 — Documenter chaque étape de transformation**

Dans l'éditeur Power Query, le panneau "Étapes appliquées" enregistre automatiquement chaque action — c'est déjà une documentation technique. Mais ce n'est pas suffisant pour votre équipe : ajoutez, dans le classeur final (voir le template fourni), un onglet ou un encart "Notes de transformation" qui résume en langage clair ce que vous avez fait : nombre de doublons supprimés, formats de date rencontrés et comment ils ont été traités, taux de change utilisé et sa source, toute ligne exclue manuellement et pourquoi. Un rapport sans cette documentation n'est pas reproductible : le prochain collègue qui reprend votre fichier ne pourra ni vérifier vos chiffres, ni relancer le même nettoyage sur le mois suivant.

**Étape 6 — Charger le résultat et construire le rapport final**

Une fois les données propres, utilisez `Fermer et charger` pour les envoyer dans une nouvelle feuille Excel, sous forme de tableau structuré. C'est sur cette base propre — jamais sur les données brutes — que vous construisez vos tableaux croisés dynamiques, vos indicateurs de statut d'achat et votre rapport final. Remplissez le template `gabarit-rapport-erp-mensuel.docx` avec les chiffres consolidés : source de la donnée, période couverte, chiffres clés, anomalies signalées et notes de qualité de la donnée.

**Étape 7 — Rafraîchir plutôt que refaire, le mois suivant**

C'est l'avantage décisif de Power Query sur un nettoyage manuel : le mois suivant, quand vous recevez un nouvel export ERP au même format, vous n'avez pas à refaire les six étapes précédentes. Remplacez simplement le fichier source et cliquez sur `Données > Actualiser tout`. Toutes les transformations enregistrées se réappliquent automatiquement au nouveau fichier. Un pipeline construit une fois, utilisé chaque mois — c'est exactement ce qui distingue un reporting professionnel reproductible d'un rafistolage Excel refait de zéro à chaque échéance.
