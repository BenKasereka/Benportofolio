# Module 03 — Audit de la Supply Chain & des Achats
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Vérifier le respect des seuils et des procédures d'achat (RFQ, RFP, ITB) sur un échantillon de dossiers, sans avoir à examiner 100% de la population.
- Construire une grille d'audit par dossier permettant de noter objectivement la conformité procédurale, indépendamment du fait que le prix final "semble correct".
- Détecter, dans un jeu de données d'achats réel, les red flags typiques d'une collusion entre fournisseurs.
- Auditer un écart d'inventaire et distinguer méthodiquement une simple erreur de gestion d'un signal de détournement.
- Restituer un constat d'audit factuel et appuyé sur preuves documentaires, sans accusation prématurée ni conclusion hâtive.

### La logique d'un audit d'achats : auditer le PROCESSUS, pas le résultat

C'est l'erreur la plus fréquente chez un auditeur junior, et paradoxalement la plus difficile à corriger chez quelqu'un qui vient lui-même de la logistique ou des achats : regarder un dossier d'achat et se demander "est-ce que ce prix est raisonnable ?" Cette question a sa place, mais elle vient en second. La première question d'un audit d'achats n'est jamais "le résultat est-il bon ?" — c'est **"la procédure suivie était-elle la bonne, et a-t-elle été respectée intégralement ?"**

La raison est simple : un prix correct obtenu par un processus non conforme ne prouve rien sur l'absence de fraude — il prouve seulement que, cette fois-là, le hasard ou l'habileté du fournisseur a produit un résultat acceptable. Un fournisseur peut très bien proposer un prix honnête sur un dossier où il a été choisi sans mise en concurrence réelle, simplement parce qu'il connaît les prix du marché local. Cela ne rend pas le dossier conforme, et cela n'empêche pas le même mécanisme de produire, le mois suivant, un prix gonflé de 40% sur un fournisseur complice. **L'audit de conformité des achats ne juge pas un résultat isolé : il juge la fiabilité du système qui produit ce résultat, dossier après dossier.**

Concrètement, cela signifie qu'un dossier peut être classé "non conforme" en audit même si le bailleur n'a payé ni trop cher ni pour un bien non livré — parce que le nombre de devis exigé n'a pas été respecté, parce que le CPC n'a pas siégé au bon quorum, ou parce que la CBA n'a pas été signée avant la commande et non après (un classique : la commande part, puis on "régularise" la paperasse). Ces non-conformités procédurales sont exactement les failles qu'un cas de fraude plus sophistiqué exploitera la fois où le prix, lui, ne sera plus honnête.

### Typologie des red flags de collusion fournisseurs

La collusion entre fournisseurs (bid rigging) est l'une des fraudes les plus difficiles à détecter dossier par dossier, précisément parce que chaque dossier pris isolément peut être formellement irréprochable : trois devis reçus, trois signatures, un prix qui semble dans la fourchette du marché. C'est un défaut qui n'apparaît qu'à l'échelle — en comparant plusieurs dossiers entre eux, jamais en lisant un seul dossier en profondeur.

Trois indicateurs reviennent de façon quasi systématique dans les cas de collusion fournisseurs documentés en contexte humanitaire :

| Red flag | Ce qu'il faut chercher | Pourquoi c'est un signal fort |
|---|---|---|
| **Prix identiques à la décimale près** | Deux offres "concurrentes" qui proposent exactement le même prix unitaire, parfois au centime près, sur des lignes d'articles différentes | Deux fournisseurs indépendants qui calculent leurs coûts séparément n'aboutissent statistiquement jamais à une identité parfaite — sauf s'ils se sont concertés avant de soumettre, ou si l'un a rédigé l'offre de l'autre |
| **Coordonnées partagées sous raisons sociales différentes** | Même numéro de téléphone, même adresse physique, même email de contact, ou même signataire, déclarés sur des entreprises officiellement distinctes | C'est l'indicateur le plus fiable et le plus facile à vérifier : deux entreprises réellement concurrentes n'ont normalement aucune raison de partager leur ligne téléphonique ou leur siège social |
| **Alternance régulière des gagnants entre les mêmes 2-3 fournisseurs** | Sur une période de plusieurs mois, les appels d'offres sont remportés à tour de rôle par un petit groupe fermé de fournisseurs, sans qu'aucun nouvel acteur n'entre jamais dans la compétition | C'est le schéma classique du "bid rotation" : les fournisseurs s'entendent pour se partager les marchés à tour de rôle, chacun soumettant un prix volontairement plus élevé quand ce n'est pas son tour de gagner |

**Ce qu'il faut retenir opérationnellement** : aucun de ces trois signaux, pris seul, ne constitue une preuve de fraude. Un chiffre rond identique peut être une coïncidence sur un petit marché local où les prix sont connus de tous. Mais la combinaison de deux signaux sur le même groupe de fournisseurs, ou la répétition d'un seul signal sur plusieurs dossiers consécutifs, doit systématiquement déclencher une investigation approfondie — jamais une conclusion immédiate, mais jamais non plus un classement sans suite.

### Auditer un écart d'inventaire : erreur de gestion ou signal de détournement ?

Un écart entre le stock théorique (ce que dit la fiche de stock ou le système) et le stock physique (ce qui est réellement sur l'étagère) n'est pas en soi une preuve de vol. Dans un entrepôt humanitaire actif, une part d'écart est normale : erreurs de comptage, produits périmés retirés sans mise à jour immédiate de la fiche, casse non enregistrée, mauvaise application du **FEFO** (First Expired, First Out — sortir en priorité les produits dont la date d'expiration est la plus proche, pour éviter la péremption en stock). La compétence d'un auditeur ici n'est pas de présumer la fraude au premier écart, mais de savoir distinguer méthodiquement les deux cas :

- Un écart de **gestion** est généralement dispersé (plusieurs petites références, pas de motif), documentable a posteriori (bon de sortie retrouvé mal classé, produit périmé effectivement détruit mais sans PV), et cohérent avec le niveau de rigueur général de l'entrepôt observé pendant l'audit.
- Un écart de **détournement potentiel** est généralement concentré (une ou deux références à forte valeur ou forte revente, jamais le lot de gants ou de formulaires vierges), récurrent sur plusieurs inventaires successifs sans jamais être résorbé, et impossible à justifier par un document même après recherche active dans les archives.

Le réflexe d'audit indispensable — et trop souvent oublié — est de **croiser systématiquement les données d'achats avec les données d'inventaire**. Un achat parfaitement documenté, avec CBA et PV en règle, qui n'apparaît jamais comme une entrée en stock, n'est pas un simple problème de classement : c'est l'un des signaux les plus forts qui existent en audit de supply chain, parce qu'il montre qu'un bien a été payé sans jamais entrer physiquement dans le circuit qu'il était censé approvisionner.

### Vocabulaire clé à maîtriser dès ce module

- **Échantillonnage par risque** : sélection raisonnée des dossiers à auditer en priorisant ceux qui présentent le plus de facteurs de risque, par opposition à un tirage purement aléatoire.
- **Bid rigging / collusion fournisseurs** : entente entre soumissionnaires censés être concurrents pour fausser le résultat d'une mise en concurrence.
- **Bid rotation** : forme de collusion où un groupe de fournisseurs se partage les marchés à tour de rôle sur une période donnée.
- **FEFO (First Expired, First Out)** : règle de gestion de stock imposant de sortir en priorité les produits dont la date d'expiration est la plus proche.
- **3-way match** : rapprochement entre la commande (PO), le bon de réception (GRN) et la facture, avant tout paiement — le point de contrôle où un achat fictif est le plus souvent détecté.
- **Écart d'inventaire** : différence entre le stock théorique enregistré et le stock physique constaté lors d'un inventaire.
