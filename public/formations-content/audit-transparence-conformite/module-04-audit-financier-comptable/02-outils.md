# Module 04 — Audit Financier & Comptable
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Grille de vérification des pièces comptables** (`grille-verification-pieces-comptables.xlsx`) — l'outil central de ce module. Elle structure le contrôle d'un échantillon de transactions en formalisant, pour chacune, la présence des trois documents du 3-way match, une appréciation de légitimité et une vérification d'éligibilité budgétaire, avec un taux de conformité calculé automatiquement. Un second onglet croise vos transactions par fournisseur et par mois pour faire ressortir automatiquement les patterns de fractionnement — celui-là même que vous ne verriez pas en examinant les pièces une par une, dans l'ordre où elles sont classées.

**Rapport de rapprochement bancaire orienté audit** (`rapport-rapprochement-bancaire-audit.docx`) — le document dans lequel vous consignez formellement chaque anomalie détectée lors d'un rapprochement bancaire multi-mois : sa nature, son montant, l'explication obtenue auprès de l'équipe financière, et votre appréciation professionnelle sur cette explication. C'est ce document, et non vos notes de travail personnelles, qui devient la preuve d'audit opposable en cas de contestation ultérieure.

**Grand livre comptable, journal de caisse et relevés bancaires** — les documents sources que vous ne produisez pas mais que vous exploitez systématiquement. Demandez-les toujours sur plusieurs mois consécutifs dès le départ, jamais mois par mois au fil de l'eau : c'est cette vue multi-mois qui rend visibles les patterns que ce module vous apprend à chercher.

**Excel / Google Sheets** — au-delà de la grille fournie, vous vous en servirez pour trier et filtrer librement vos données extraites (tri par fournisseur, par montant, par bénéficiaire) chaque fois que l'analyse dépasse ce que la grille standard couvre.

### Guide pratique étape par étape — "Vérifier un échantillon de pièces comptables et détecter les anomalies bancaires"

Ce guide part d'une situation réelle et récurrente : on vous confie l'audit financier d'un bureau ou d'un projet, avec un grand livre de plusieurs centaines de transactions et quelques mois de relevés bancaires. Vous ne pouvez pas — et ne devez pas — tout vérifier ligne par ligne. Voici exactement comment structurer le travail, dans quel ordre.

**Étape 1 — Construire un échantillon orienté risque, pas un échantillon aléatoire pur (avant tout examen de pièce)**

Un échantillon purement aléatoire traite une dépense de 15 $ en fournitures de bureau exactement comme un paiement fournisseur de 8 000 $ — ce qui n'a aucun sens en audit, où le temps disponible doit aller vers ce qui présente le plus de risque. Constituez votre échantillon en croisant plusieurs critères : toutes les transactions au-dessus d'un seuil de matérialité que vous fixez (par exemple 500 $), un échantillon aléatoire des transactions plus petites pour garder une couverture représentative, toutes les transactions impliquant un nouveau fournisseur apparu dans les 3 derniers mois, et toutes les transactions en espèces (plus vulnérables que les virements traçables). Documentez votre méthode de sélection dans votre dossier de travail — un échantillon dont la logique n'est pas expliquée est un échantillon dont la représentativité peut être contestée.

**Étape 2 — Appliquer le 3-way match à chaque pièce de l'échantillon avec la grille dédiée**

Ouvrez le template `grille-verification-pieces-comptables.xlsx`. Pour chaque transaction de votre échantillon, renseignez la référence, le montant, et cochez Y/N la présence de chacun des trois documents requis (contrat/bon de commande, facture, preuve de paiement). Ne cochez "Oui" que si le document est non seulement présent, mais cohérent avec les deux autres — même montant, même bénéficiaire, même référence. La colonne de score de complétude se calcule automatiquement à partir de vos trois cases.

**Étape 3 — Aller au-delà de la forme : évaluer la légitimité réelle de chaque dépense**

C'est l'étape que les auditeurs juniors sautent le plus souvent, pressés de passer à la transaction suivante une fois les trois documents cochés "présents". Pour chaque transaction où le montant ou la nature de la dépense le justifie, posez-vous activement la question de la réalité économique : ce bien a-t-il été physiquement vu en stock ou en usage ? Ce service a-t-il un livrable vérifiable (rapport, compte rendu, témoin) ? Le prix payé est-il cohérent avec un prix de marché raisonnable pour ce contexte ? Documentez votre appréciation dans la colonne dédiée de la grille — "légitime", "à approfondir" ou "non légitime" — avec une justification d'une phrase, jamais une case cochée sans commentaire.

**Étape 4 — Vérifier l'éligibilité budgétaire de chaque transaction retenue**

Pour chaque transaction imputée à une subvention bailleur, vérifiez dans la grille : la période (la dépense tombe-t-elle dans la fenêtre de mise en œuvre du projet ?), la ligne budgétaire (la nature de la dépense correspond-elle à l'intitulé de la ligne sur laquelle elle est imputée ?), et les règles spécifiques du bailleur concerné le cas échéant. Une dépense légitime mais mal imputée n'est pas une broutille administrative — signalez-la comme un constat à part entière, distinct d'un problème de légitimité.

**Étape 5 — Consolider le taux de conformité et faire ressortir les patterns multi-mois**

Une fois l'échantillon complet renseigné, consultez l'onglet de synthèse de la grille : le taux de conformité global de l'échantillon s'y calcule automatiquement, ainsi qu'un tableau qui recense, par fournisseur et par mois, les transactions répétées juste sous votre seuil de matérialité — le signal le plus classique d'un fractionnement de dépense déguisé. Un fournisseur qui apparaît trois ou quatre fois par mois avec des montants qui frôlent systématiquement un seuil, mois après mois, mérite un examen prioritaire même si chaque transaction prise isolément semble parfaitement en règle.

**Étape 6 — Réaliser le rapprochement bancaire orienté détection sur plusieurs mois consécutifs**

Rassemblez les relevés bancaires et le livre de caisse d'au moins 3 mois consécutifs — jamais un seul mois isolé. Alignez-les côte à côte plutôt que de les traiter séquentiellement, et parcourez-les en cherchant activement : des montants ronds inhabituels pour le type de dépense, des bénéficiaires qui ne correspondent à aucun fournisseur ou employé connu, des transactions dont la date ou la fréquence ne colle à aucun cycle opérationnel logique, et d'éventuels doublons de paiement pour une même facture. Pour chaque anomalie repérée, ouvrez le template `rapport-rapprochement-bancaire-audit.docx` et documentez-la immédiatement : sa nature, son montant, l'explication obtenue de l'équipe financière au moment où vous la questionnez, et votre appréciation professionnelle sur la solidité de cette explication. Terminez le rapport par une conclusion claire et une recommandation actionnable — jamais un simple constat sans suite proposée.
