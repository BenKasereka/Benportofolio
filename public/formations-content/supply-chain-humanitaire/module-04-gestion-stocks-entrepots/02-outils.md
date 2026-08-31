# Module 04 — Gestion des Stocks & Entrepôts
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Excel / Google Sheets** — l'outil central de ce module pour documenter la réception et le contrôle qualité. Une feuille bien structurée, avec les bonnes colonnes et les bonnes formules de calcul d'écart, suffit à produire un document de réception défendable devant un bailleur ou un auditeur, sans dépendre d'un système ERP complet dès le premier jour d'une opération.

**Le système ERP de votre organisation** — quel qu'il soit (les grandes organisations utilisent des systèmes dédiés de gestion intégrée), le principe enseigné ici reste identique : le système ERP n'est fiable que si chaque mouvement physique y est reporté au moment où il a lieu. Ce module ne forme pas sur un logiciel ERP précis, mais sur la logique de réconciliation entre ce système — quel qu'il soit — et la réalité physique de l'entrepôt.

### Guide pratique étape par étape — "Du camion qui arrive au registre qui doit dire la vérité"

Ce guide suit le cycle complet d'un point de vue SCM : réception, contrôle qualité, décision d'acceptation, suivi par lot, puis réconciliation. Il part d'une situation réelle : un camion arrive à l'entrepôt avec une livraison attendue depuis plusieurs jours, et l'équipe est sous pression pour décharger vite.

**Étape 1 — Préparer la réception avant l'arrivée du camion**

Avant même que le véhicule n'arrive, sortez la PO correspondante et le packing list transmis par le fournisseur. Vérifiez qu'ils correspondent bien à la livraison attendue (référence de commande, fournisseur, quantités annoncées). Préparez le template `bon-de-reception-controle-qualite.xlsx` fourni avec ce module, en y reportant déjà les quantités attendues selon la PO — vous n'aurez plus, à l'arrivée, qu'à compléter les colonnes de quantités réellement reçues et de résultat du contrôle qualité. Cette préparation en amont est ce qui évite de découvrir, sous la pression du déchargement, qu'il manque une information essentielle.

**Étape 2 — Compter et contrôler avant de signer quoi que ce soit**

À l'arrivée du camion, comptez physiquement chaque ligne d'article et effectuez le contrôle qualité décrit au Module 01 (état des emballages, cohérence de l'étiquetage, échantillonnage pour les lots volumineux, durée de vie résiduelle pour tout produit périssable). Reportez ces chiffres dans le template, colonne par colonne, article par article. **Ne signez aucun document de livraison du transporteur avant d'avoir terminé cette étape.** Le transporteur peut attendre le temps du contrôle ; une signature donnée pour "aller plus vite" engage votre organisation sur des chiffres que vous n'avez pas encore vérifiés.

**Étape 3 — Laisser le calcul d'écart automatique guider la décision**

Le template calcule automatiquement, pour chaque ligne, l'écart entre quantité attendue (PO) et quantité reçue, et signale par un indicateur visuel tout écart qui dépasse le seuil de tolérance défini (colonne "Écart" et indicateur "Conforme" / "À vérifier" / "Écart significatif"). Utilisez ce signal, pas votre impression générale de la livraison, pour décider : accepter intégralement, accepter partiellement en documentant précisément ce qui est rejeté, ou rejeter la totalité de la ligne concernée. Un écart en dessous du seuil de tolérance ne dispense pas de le noter — il doit simplement être classé "Conforme" plutôt que déclencher une procédure de rejet.

**Étape 4 — Documenter tout rejet, même partiel, avec la même rigueur qu'un incident majeur**

Dès qu'une ligne est rejetée, en tout ou en partie, complétez la colonne "Décision" et le motif précis (dommage constaté, quantité manquante, péremption trop proche, non-conformité de l'étiquetage). Une décision de rejet non justifiée par écrit, avec seulement une quantité barrée à la main, est une source de litige quasi garantie avec le fournisseur — et un risque de non-remboursement si votre organisation ne peut pas prouver la raison du rejet lors d'une réclamation.

**Étape 5 — Reporter les numéros de lot et dates de péremption dans le document de réception**

Pour tout article périssable ou tout produit pour lequel un rappel de fournisseur reste possible (matériel médical, nutrition, pharmaceutique), reportez systématiquement le numéro de lot dans le template, ligne par ligne. C'est cette information, rattachée dès la réception au document qui l'a fait entrer en stock, qui permettra plus tard de répondre en quelques minutes à la question "où sont passés les produits du lot X ?" — au lieu de devoir reconstituer l'information à partir de mémoire ou d'étiquettes physiques dispersées.

**Étape 6 — Enregistrer la réception validée dans le système ERP**

Une fois le bon de réception et contrôle qualité complété et signé, reportez les quantités effectivement acceptées — pas les quantités de la PO initiale — dans le système ERP de votre organisation. C'est cette étape, souvent négligée sous prétexte que "le document papier suffit", qui rend le système ERP réellement fiable pour la suite : sans elle, l'écart entre PO et quantité réellement acceptée n'existe nulle part de façon exploitable.

**Étape 7 — Réconcilier périodiquement le stock physique avec le système ERP**

À intervalle régulier (et systématiquement lors d'un inventaire physique complet), comptez réellement le stock disponible par article et par lot, puis comparez ce comptage aux quantités déclarées dans le système ERP. Pour chaque écart constaté, ouvrez le template `rapport-reconciliation-inventaire-erp.docx` fourni avec ce module. Il vous guide pour documenter : les articles et lots concernés, le comptage physique versus le registre ERP, l'explication de l'écart, l'action corrective engagée, et la validation de votre superviseur. **Ne réconciliez jamais "sur papier"** — c'est-à-dire en ajustant les chiffres pour qu'ils correspondent, sans comptage physique réel préalable : cette pratique fait disparaître exactement l'information qu'une réconciliation est censée produire.

**Étape 8 — Communiquer au fournisseur toute décision de rejet ou d'acceptation partielle**

Dernière étape, trop souvent oubliée sous la pression du quotidien : transmettez formellement au fournisseur toute décision de rejet ou d'acceptation partielle, avec le document de réception à l'appui. Cette communication écrite, faite rapidement après la réception, est ce qui permet un remboursement, un remplacement ou un avoir — et ce qui évite qu'une même non-conformité se répète sur la commande suivante faute d'avoir été signalée.
