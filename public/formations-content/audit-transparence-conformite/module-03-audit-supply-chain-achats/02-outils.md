# Module 03 — Audit de la Supply Chain & des Achats
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**`grille-audit-echantillon-achats.xlsx`** — le support central de ce module. Un premier onglet vous aide à calculer la taille d'échantillon appropriée selon la taille de la population de dossiers et le niveau de risque du contexte (fournisseur unique dominant, zone à forte corruption connue, historique d'irrégularités). Un second onglet est la grille de vérification dossier par dossier, avec un score de conformité calculé automatiquement.

**`fiche-detection-collusion-fournisseurs.docx`** — une fiche d'une page pour documenter, une fois un pattern suspect repéré sur plusieurs dossiers, les indicateurs de collusion observés, les preuves rassemblées et la recommandation d'action. C'est le document qui accompagne l'escalade d'un doute vers l'investigation formelle — approfondie au Module 08 de cette formation.

**Excel (tableau croisé dynamique)** — au-delà de la grille fournie, un tableau croisé dynamique simple sur votre registre d'achats (fournisseur en ligne, mois en colonne, statut gagnant/perdant en valeur) est souvent l'outil le plus rapide pour visualiser un pattern d'alternance sur douze mois de dossiers, avant même d'ouvrir un seul dossier physique.

### Guide pratique étape par étape — "Auditer un cycle d'achats sans tout vérifier"

Ce guide part d'une situation réelle : on vous confie l'audit des achats d'un bureau pays sur les 12 derniers mois. Le registre d'achats compte plusieurs dizaines de dossiers. Vous n'avez ni le temps ni le mandat d'ouvrir chaque dossier un par un — et ce n'est de toute façon pas la méthode la plus efficace pour détecter une fraude organisée. Voici la démarche, dans l'ordre.

**Étape 1 — Définir la population et la période d'audit**

Listez l'ensemble des dossiers d'achat de la période concernée à partir du registre ou de l'ERP. Notez le nombre total de dossiers, leur répartition par palier de seuil (achat direct, RFQ, RFP/ITB), et les fournisseurs impliqués. Cette population complète est la base de tout échantillonnage sérieux — un échantillon construit sans connaître la population de départ n'a aucune valeur probante.

**Étape 2 — Échantillonner par risque, pas au hasard**

Ouvrez l'onglet "Sélection de l'échantillon" du template `grille-audit-echantillon-achats.xlsx`. Contrairement à un tirage aléatoire pur (utile en audit financier statistique, mais inefficace ici), l'audit d'achats en contexte humanitaire gagne à prioriser les dossiers selon des critères de risque explicites : montant proche d'un seuil (risque de fractionnement), fournisseur revenant très souvent, dossier signalé incomplet par le service achats lui-même, zone géographique déjà identifiée à risque. Le template calcule une taille d'échantillon indicative à partir de la taille de la population et du niveau de risque global du contexte — un point de départ à ajuster avec votre jugement professionnel, jamais une formule à appliquer aveuglément.

**Étape 3 — Remplir la grille de vérification, dossier par dossier**

Pour chaque dossier de l'échantillon, ouvrez l'onglet "Checklist par dossier" et répondez, pièce à l'appui, à quatre questions fermées : le seuil déclaré correspond-il au montant réellement payé ? La procédure suivie (achat direct / RFQ / RFP-ITB) correspond-elle bien à ce seuil ? La CBA (analyse comparative des offres) est-elle complète et cohérente avec le nombre d'offres exigé ? Le PV du CPC, si applicable, est-il signé par un quorum valide ? Chaque réponse "Non" ou "Partiel" doit être commentée avec la pièce manquante précise — jamais une simple case cochée sans preuve à l'appui en cas de question ultérieure.

**Étape 4 — Croiser les dossiers échantillonnés avec les données d'inventaire**

Pour chaque dossier portant sur un bien physique (et non un service), vérifiez que l'achat a bien une entrée en stock correspondante (bon de réception / GRN) dans le système d'inventaire, avec une date de réception cohérente avec la date de commande. Un achat sans réception visible en stock est à signaler immédiatement comme anomalie prioritaire, indépendamment du reste du score de conformité du dossier — voir la Théorie de ce module sur ce point.

**Étape 5 — Élargir la lecture : chercher les patterns sur l'ensemble de la population, pas seulement sur l'échantillon**

C'est l'étape que les auditeurs pressés sautent le plus souvent, et c'est une erreur : les red flags de collusion (prix identiques, alternance de gagnants) ne se voient presque jamais sur un dossier isolé de l'échantillon — ils se voient en comparant les fournisseurs gagnants et les prix proposés sur l'ensemble de la population de dossiers, échantillonnés ou non. Consultez le registre complet des 12 mois, listez les fournisseurs gagnants par appel d'offres dans l'ordre chronologique, et cherchez visuellement une alternance régulière ou des prix suspicieusement proches entre "concurrents". Si un pattern apparaît, documentez-le avec la fiche `fiche-detection-collusion-fournisseurs.docx`.

**Étape 6 — Conclure et restituer**

Calculez le taux de conformité global de l'échantillon (automatique dans le template), listez les non-conformités par ordre de gravité, et distinguez clairement dans votre restitution ce qui relève d'une faiblesse procédurale corrigible (ex : PV mal archivé) de ce qui nécessite une escalade vers une investigation formelle (pattern de collusion documenté, achat sans réception en stock). Un bon rapport d'audit d'achats sépare toujours ces deux niveaux — mélanger les deux affaiblit la crédibilité des constats les plus graves.
