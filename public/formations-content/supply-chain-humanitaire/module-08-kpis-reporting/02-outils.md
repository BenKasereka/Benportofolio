# Module 08 — KPIs, Reporting & Tableau de Bord Supply Chain
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Excel** — c'est l'outil central de ce module, et de la grande majorité des tableaux de bord supply chain réellement utilisés sur le terrain, y compris dans de grandes organisations internationales. Contrairement à une idée reçue, la maîtrise d'Excel (formules conditionnelles, tableaux croisés, mise en forme conditionnelle) reste, en 2026, la compétence de reporting la plus demandée pour un poste de Supply Chain Manager — bien avant la maîtrise d'un outil de business intelligence.

**Power BI** — mentionné ici pour mémoire : c'est un outil de visualisation de données plus avancé qu'Excel, qui se connecte directement aux bases de données ERP et actualise les tableaux de bord automatiquement. Il devient pertinent dans des organisations disposant d'une équipe data mature et de volumes de données importants sur plusieurs missions. Pour l'immense majorité des postes de terrain, Excel — combiné à des extractions ERP propres, comme vu au Module 07 — couvre entièrement le besoin. Ce module reste donc volontairement centré sur Excel.

**Le tableau de bord fourni avec ce module** — `tableau-de-bord-kpi-supply-chain.xlsx`, disponible dans `04-templates/`. Il contient un onglet de saisie des données brutes (achats et stocks) et un onglet de tableau de bord qui calcule automatiquement les 3 KPIs par formules, ainsi qu'une synthèse par catégorie et par période. Aucune valeur n'y est codée en dur : modifiez les données brutes, et le tableau de bord se recalcule seul.

### Guide pratique étape par étape — "De la donnée brute au rapport, en 7 étapes"

Ce guide part d'une situation réelle : vous êtes en fin de mois, vous devez produire le tableau de bord KPI de votre base et, à partir de lui, un rapport pour le siège et un rapport pour un bailleur. Voici exactement comment procéder, dans l'ordre.

**Étape 1 — Rassembler les données brutes (Jour 1 du cycle de reporting)**

Rassemblez, pour la période concernée, les registres d'achats (dates de demande d'achat, dates de réception, statut de conformité du dossier — issus du cycle vu au Module 02) et les mouvements de stock (sorties, ruptures constatées, issus du Module 04). Si votre organisation utilise un ERP (SAP, LINK), extrayez ces données via Power Query comme vu au Module 07 plutôt que de les ressaisir manuellement — chaque ressaisie manuelle est une source d'erreur et de perte de temps.

**Étape 2 — Structurer les données dans l'onglet "Données brutes" (Jour 1)**

Ouvrez le template `tableau-de-bord-kpi-supply-chain.xlsx` et collez vos données dans l'onglet dédié, en respectant strictement les colonnes existantes (catégorie d'article, entrepôt/zone, dates, statut de conformité, statut de rupture). Le tableau de bord ne fonctionne correctement que si les catégories saisies correspondent exactement à celles utilisées dans les formules — ne renommez pas une catégorie à la volée sans vérifier l'impact sur les formules en aval.

**Étape 3 — Vérifier que les 3 KPIs se calculent correctement (Jour 1-2)**

Passez sur l'onglet "Tableau de bord". Le taux de rupture de stock, le délai d'approvisionnement moyen et le taux de conformité achats doivent s'afficher automatiquement, calculés par formules (COUNTIFS pour la rupture, AVERAGEIFS pour le délai, SUM/COUNT pour la conformité). Si une valeur affiche une erreur, c'est presque toujours une catégorie mal orthographiée ou une date manquante dans l'onglet de données brutes — ne corrigez jamais la formule elle-même sans avoir d'abord vérifié la donnée source.

**Étape 4 — Lire le tableau de synthèse par catégorie et par période (Jour 2)**

Le tableau de bord inclut une synthèse croisant catégorie d'article et période. C'est là que vous repérez si un problème est généralisé (tous les KPIs se dégradent) ou localisé (une seule catégorie d'article, un seul mois). Un taux de rupture global stable qui cache une rupture chronique sur une seule catégorie critique — les kits médicaux, par exemple — est un cas classique que seule la lecture par catégorie révèle.

**Étape 5 — Interpréter chaque KPI et écrire la décision qu'il déclenche (Jour 2-3)**

Pour chaque KPI qui s'écarte de la tendance habituelle, notez par écrit — avant même de rédiger un rapport — la cause probable et l'action proposée. C'est le réflexe central de ce module : ne jamais afficher un chiffre sans la phrase qui l'accompagne. "Le délai d'approvisionnement est passé de 21 à 35 jours, principalement sur la catégorie médicaments essentiels, à cause d'un changement de fournisseur retenu en février — action proposée : réévaluer ce fournisseur avant le prochain cycle d'achat."

**Étape 6 — Rédiger les deux rapports distincts avec le gabarit fourni (Jour 3)**

Ouvrez `gabarit-rapport-bailleur-vs-rapport-siege.docx`, dans `04-templates/`. Ce document contient deux formats bâtis à partir des mêmes données mais structurés différemment : la section "Rapport interne siège" privilégie le détail opérationnel et les actions correctives ; la section "Rapport de conformité bailleur" impose un cadrage de conformité explicite (référence aux clauses de l'accord de financement, justification de tout écart) et un narratif orienté redevabilité, avec beaucoup moins de détail interne. Remplissez les deux sections à partir des mêmes chiffres du tableau de bord — jamais un copier-coller de l'un vers l'autre.

**Étape 7 — Préparer la présentation au coordinateur (Jour 3-4)**

Avant toute réunion de restitution, préparez pour chaque KPI dérivant une seule diapositive ou un seul paragraphe qui répond à la question "so what" : que recommandez-vous, concrètement, pour le mois suivant ? Un coordinateur qui doit lui-même déduire la recommandation à partir d'un tableau de chiffres perdra confiance dans votre tableau de bord, même s'il est mathématiquement irréprochable.
