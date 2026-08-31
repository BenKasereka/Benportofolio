# Module 07 — Systèmes ERP Humanitaires — SAP, LINK & Power Query
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Expliquer ce qu'un ERP standardise réellement dans une chaîne supply humanitaire, et pourquoi ça compte pour votre travail quotidien.
- Décrire le fonctionnement d'un workflow d'approbation type SAP/LINK, du besoin exprimé à l'actif enregistré.
- Reconnaître, dans un export de données ERP, les défauts qui rendent un rapport non fiable (doublons, dates incohérentes, devises mélangées).
- Nettoyer et transformer un export ERP brut avec Power Query pour produire un jeu de données exploitable.
- Construire un pipeline de reporting reproductible, documenté, que n'importe quel collègue peut relancer après vous.

### Ce qu'un ERP standardise réellement

Un ERP (Enterprise Resource Planning) n'est pas d'abord un logiciel : c'est une discipline organisationnelle mise sous contrainte informatique. Avant l'ERP, une ONG qui gère ses achats sur des classeurs Excel dispersés entre le bureau pays, les bases terrain et le siège se retrouve tôt ou tard avec trois versions différentes du même engagement financier, aucune ne faisant foi. L'ERP impose une **source unique de vérité** : une seule ligne de commande, un seul statut, visible et modifiable selon des droits définis, par tout le monde en même temps.

La deuxième chose qu'un ERP apporte — et c'est souvent la plus sous-estimée par les logisticiens juniors — c'est la **piste d'audit** (audit trail). Chaque action laisse une trace : qui a créé la demande d'achat, qui l'a validée, à quelle date, avec quelle modification éventuelle. En contexte humanitaire, où les bailleurs (ECHO, USAID/BHA, agences onusiennes) peuvent auditer un projet des mois après sa clôture, cette traçabilité n'est pas un détail technique — c'est ce qui protège l'organisation, et vous personnellement, en cas de contestation sur une dépense.

**Ce que retient un ERP** : le workflow d'approbation (qui doit valider quoi, à partir de quel montant), le registre des actifs (quel bien, où, sous la responsabilité de qui), et l'historique des mouvements de stock et de fonds. **Ce qu'il ne retient PAS automatiquement** : la qualité des données saisies en amont. Un ERP bien configuré peut quand même produire un rapport inexploitable si les utilisateurs saisissent des dates au mauvais format ou dupliquent une ligne par erreur — ce qui nous amène au cœur de ce module.

### Pourquoi la compétence transférable n'est pas "savoir cliquer sur tel ERP"

C'est le point le plus important de ce module, et il mérite d'être dit clairement dès le départ : **chaque ONG a son propre ERP**. L'une utilise SAP, une autre LINK, une autre un système propriétaire interne, une autre encore un outil développé sur mesure. Si vous passez cette formation à mémoriser une séquence de clics propre à un seul logiciel, cette compétence devient obsolète le jour où vous changez d'employeur — ce qui, dans le secteur humanitaire, arrive statistiquement tous les 2 à 3 ans.

Ce qui reste transférable d'un ERP à l'autre, en revanche, c'est votre capacité à **extraire, comprendre et nettoyer les données qui en sortent**. Tous les ERP, quels qu'ils soient, exportent au final vers des formats tabulaires — CSV, Excel — pour être analysés, présentés en réunion de coordination, ou envoyés à un bailleur. Et c'est précisément à ce moment, entre l'export brut et le rapport final, que se joue la fiabilité de votre reporting. Un logisticien senior qui maîtrise Power Query peut reprendre un export de n'importe quel ERP, de n'importe quelle ONG, et en tirer un rapport propre en une heure. C'est cette compétence — pas les vingt boutons d'une interface propriétaire donnée — que ce module construit.

Il existe aussi des ERP propriétaires comme UNIFIELD, mais cette formation se concentre sur des outils que vous pourrez réutiliser hors de ce contexte spécifique.

### Le workflow d'approbation type SAP/LINK — vue conceptuelle

Sans entrer dans le détail d'une interface précise (ce qui n'aurait de sens que sur le poste réel, avec la licence de votre organisation), voici la logique commune que vous retrouverez, sous des noms parfois différents, dans SAP, LINK et la quasi-totalité des ERP humanitaires :

1. **Demande d'achat (Purchase Request / PR)** — un besoin est exprimé par un programme ou un département, avec quantité, spécification et budget associé.
2. **Vérification budgétaire automatique** — le système bloque ou alerte si la ligne budgétaire concernée n'a plus de disponible, avant même qu'un humain n'intervienne.
3. **Workflow d'approbation à seuils** — la demande remonte vers un ou plusieurs valideurs selon le montant : un chef de base peut valider jusqu'à un certain seuil, au-delà il faut le coordinateur logistique, puis la direction pays, puis parfois le siège. Ce seuil est configuré une fois pour toutes dans le système et s'applique sans exception ni négociation.
4. **Génération du bon de commande (Purchase Order / PO)** une fois la demande validée, avec engagement automatique du budget correspondant.
5. **Réception et rapprochement (Goods Receipt)** — l'entrée en stock ou en actif est enregistrée, rapprochée de la commande initiale ; un écart de quantité ou de prix déclenche une alerte.
6. **Registre des actifs (Asset Register)** — pour tout bien durable (véhicule, générateur, équipement informatique), l'ERP crée une fiche actif unique : numéro, localisation, responsable, valeur, date d'acquisition, statut. Cette fiche est ensuite mise à jour à chaque mouvement (transfert, réparation, mise au rebut).

Ce qu'il faut retenir : le workflow n'existe pas pour ralentir votre travail, il existe pour qu'aucune dépense significative ne puisse être engagée par une seule personne sans contrôle croisé. C'est un principe de contrôle interne, pas une lourdeur administrative gratuite.

### Pourquoi le nettoyage de données compte plus que la maîtrise boutons-par-boutons

Un chiffre qui circule dans les formations Supply Chain professionnelles (hors secteur humanitaire, mais tout aussi vrai ici) : un analyste passe en moyenne 60 à 80 % de son temps de reporting non pas à analyser, mais à nettoyer des données mal formatées. En contexte humanitaire, ce problème est amplifié par trois facteurs propres au terrain :

- **Rotation élevée du personnel de saisie**, chaque nouvel arrivant ayant ses propres habitudes de saisie (formats de date, abréviations de devise).
- **Connexions internet instables**, qui poussent parfois à saisir en différé, avec des copier-coller depuis des sources hétérogènes (WhatsApp, feuilles papier scannées, tableurs locaux).
- **Multiplicité des devises** dans une même mission (monnaie locale, USD de référence bailleur, parfois une troisième devise pour les frontaliers), rarement harmonisée à la saisie.

Un rapport produit à partir de données non nettoyées n'est pas juste imprécis — il peut être activement trompeur : des doublons qui gonflent artificiellement un volume d'achat, des dates mal interprétées qui faussent un délai moyen de livraison, des montants mélangeant deux devises additionnés comme si c'était la même. C'est pour cette raison que Power Query, l'outil que vous allez pratiquer dans le guide suivant, est présenté ici comme la compétence centrale du module — bien plus que la familiarisation conceptuelle avec SAP ou LINK.

### Vocabulaire clé à maîtriser dès ce module

- **PR / PO** : Purchase Request (demande d'achat) et Purchase Order (bon de commande) — les deux documents pivots du workflow achats dans tout ERP.
- **Asset Register** : registre des actifs, la base de données ERP qui trace chaque bien durable de l'organisation.
- **Audit trail** : piste d'audit, l'historique complet et non modifiable des actions effectuées dans le système.
- **ETL** (Extract, Transform, Load) : le principe général derrière Power Query — extraire une donnée brute, la transformer selon des règles reproductibles, la charger dans un format exploitable.
- **Source unique de vérité** (Single Source of Truth) : le principe selon lequel une seule version d'une donnée fait foi dans toute l'organisation, éliminant les versions contradictoires.
