# Module 08 — KPIs, Reporting & Tableau de Bord Supply Chain
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Définir et calculer correctement les 3 KPIs supply chain clés : taux de rupture de stock, délai d'approvisionnement, taux de conformité achats.
- Identifier, pour chaque KPI, la décision opérationnelle qu'il doit déclencher — pas seulement le consigner dans un tableau.
- Construire un tableau de bord Excel fonctionnel à partir de données brutes d'achats et de stocks.
- Adapter la structure, le ton et le niveau de détail d'un rapport supply chain selon l'audience : siège ou bailleur.
- Présenter des données de performance à un coordinateur avec une recommandation claire, pas une simple liste de chiffres.

### Un KPI n'est pas une statistique, c'est un déclencheur de décision

C'est l'erreur la plus répandue chez les Supply Chain Officers juniors : ils produisent le chiffre, l'affichent dans un rapport, et passent au mois suivant. Un taux de rupture de stock de 12% n'a aucune valeur en soi. Ce qui a de la valeur, c'est ce que ce chiffre vous oblige à faire ensuite.

Un logisticien senior lit un KPI comme un médecin lit une fièvre : le chiffre seul ne dit rien, c'est son évolution et son contexte qui orientent l'action. Un délai d'approvisionnement qui grimpe de 21 à 35 jours n'est pas "une statistique à noter" — c'est un signal qui doit immédiatement déclencher une question : est-ce un problème de capacité du fournisseur retenu au Module 03, un goulot d'étranglement dans le circuit de validation des Purchase Orders vu au Module 02, ou une dégradation du transport international abordée au Module 06 ? Le KPI vous dit QU'IL Y A un problème. Votre travail de Supply Chain Manager est de remonter jusqu'à la cause, pas de vous arrêter au symptôme.

C'est pour cette raison que la construction d'un tableau de bord n'est jamais une fin en soi. Le tableau de bord existe pour une seule raison : rendre visible, mois après mois, l'endroit exact de la chaîne où il faut intervenir. Un tableau de bord qui ne débouche sur aucune décision est un exercice Excel inutile, aussi joli soit-il.

### Les 3 KPIs supply chain clés

**1. Le taux de rupture de stock (stock-out rate)**

Il mesure la proportion d'articles (ou de commandes bénéficiaires) pour lesquels le stock disponible était insuffisant au moment où il fallait le distribuer. La formule la plus utilisable sur le terrain :

> Taux de rupture = (Nombre de lignes d'article en rupture sur la période) ÷ (Nombre total de lignes d'article suivies sur la période) × 100

Ce KPI prolonge directement le travail du Module 04 (gestion des stocks). Un taux de rupture qui grimpe n'est presque jamais un problème d'entrepôt en tant que tel — c'est un problème de seuil de réapprovisionnement mal calibré, de délai fournisseur sous-estimé, ou de consommation programme qui a changé sans que la logistique en soit informée à temps. Un taux de rupture de 0% n'est pas non plus automatiquement une bonne nouvelle : cela peut signaler un surstockage coûteux, avec le risque de péremption traité au Module 04.

**2. Le délai d'approvisionnement (procurement lead time)**

Il mesure le temps réel écoulé entre le déclenchement d'une demande d'achat et la réception effective de la marchandise en entrepôt.

> Délai d'approvisionnement = Date de réception en entrepôt − Date d'émission de la demande d'achat (moyenne sur toutes les commandes de la période)

Ce KPI est le thermomètre de tout le cycle vu au Module 02 (RFQ/RFP/ITB jusqu'à la PO) et au Module 06 (transport international, dédouanement). Un délai qui augmente doit être décomposé avant d'être commenté : est-ce le temps de validation interne (comité CPC) qui s'allonge, le fournisseur qui livre en retard, ou le transit douanier qui bloque ? Un tableau de bord sérieux isole ces sous-délais dès que possible ; à défaut, le délai global reste le point de départ obligatoire de l'investigation.

**3. Le taux de conformité achats (procurement compliance rate)**

Il mesure la proportion des achats de la période qui respectent intégralement la procédure requise : seuils d'autorisation respectés, nombre d'offres concurrentielles conforme au montant, vérification d'inéligibilité effectuée, dossier complet et archivé.

> Taux de conformité = (Nombre de dossiers d'achat conformes) ÷ (Nombre total de dossiers d'achat audités) × 100

Ce KPI est directement hérité des Modules 02 et 03. C'est le chiffre que les bailleurs regardent en premier lors d'un audit, parce qu'il ne mesure pas la performance opérationnelle mais le risque fiduciaire de l'organisation. Un taux de conformité qui baisse pendant une urgence n'est pas nécessairement une faute — les procédures d'urgence prévoient des dérogations documentées — mais chaque dérogation doit être tracée, sinon le chiffre devient indéfendable devant un auditeur.

### Rapport bailleur et rapport siège : deux documents, jamais un seul

C'est le piège le plus coûteux du reporting supply chain humanitaire : croire qu'un bon rapport peut servir aux deux audiences à la fois. Ce n'est jamais le cas, parce que le siège et le bailleur ne lisent pas un rapport pour la même raison.

Le **rapport siège** est un document de pilotage opérationnel. Le coordinateur pays ou le desk au siège doit pouvoir, en le lisant, savoir où intervenir cette semaine : quel entrepôt a un problème de rupture, quel fournisseur retient un stock, quelle ligne budgétaire dérape. Il tolère le jargon interne, le détail granulaire, et attend des recommandations d'action concrètes.

Le **rapport bailleur** (donor compliance report) répond à une question différente : l'argent confié a-t-il été géré selon les règles convenues dans l'accord de financement ? Il exige un cadrage explicite de conformité — références aux clauses du contrat, justification de tout écart de procédure, narratif orienté résultats et redevabilité — et beaucoup moins de détail opérationnel interne. Un bailleur qui reçoit un rapport noyé dans l'argot logistique interne (codes d'entrepôt, sigles de systèmes ERP internes) ne peut pas l'exploiter, et cela nuit à la crédibilité de l'organisation autant qu'un rapport incomplet.

Les deux rapports partent pourtant des **mêmes données sous-jacentes** — c'est tout l'enjeu de ce module : une seule base de données propre, deux narrations différentes, construites pour deux décideurs différents.

### Vocabulaire clé à maîtriser dès ce module

- **KPI (Key Performance Indicator)** : un indicateur choisi précisément parce qu'il doit déclencher une décision — pas n'importe quel chiffre disponible.
- **Lead time** : délai réel entre le déclenchement d'un besoin et sa satisfaction effective ; toujours mesuré en jours calendaires sur le terrain, sauf mention contraire.
- **Compliance rate** : taux de conformité procédurale d'un échantillon d'achats ou d'opérations, central dans tout audit bailleur.
- **So what** : la question que doit toujours anticiper un tableau de bord — au-delà du chiffre, quelle décision recommandez-vous ?
