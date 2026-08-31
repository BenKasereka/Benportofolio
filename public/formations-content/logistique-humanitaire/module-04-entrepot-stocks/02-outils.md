# Module 04 — Entrepôt & Gestion des Stocks
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Excel / Google Sheets** — l'outil central de ce module. Vous l'utiliserez pour tenir vos fiches d'inventaire, calculer automatiquement les alertes de péremption (formules de type "jours restants avant péremption") et produire vos synthèses de stock par catégorie. Aucune organisation de taille modeste ne peut se permettre un ERP dédié dès le premier jour d'une urgence : Excel bien structuré, avec les bonnes formules, couvre l'essentiel des besoins de suivi d'entrepôt tant que le volume reste gérable.

**LINK** — le système de gestion des actifs et des stocks utilisé par plusieurs grandes ONG internationales pour les entrepôts de taille significative. Il centralise les mouvements de stock multi-sites et permet un reporting consolidé pour la coordination logistique. Si votre organisation utilise LINK, le principe reste identique à celui enseigné ici avec Excel : chaque mouvement physique doit être enregistré au moment où il a lieu, sans quoi le système, aussi sophistiqué soit-il, ne reflète plus la réalité de l'entrepôt.

### Guide pratique étape par étape — "Organiser et contrôler un entrepôt humanitaire dès la prise de poste"

Ce guide part d'une situation réelle : vous prenez la responsabilité d'un entrepôt déjà en fonctionnement, avec un historique de mouvements dont vous n'êtes pas certain(e) de la fiabilité. Voici exactement quoi faire, dans quel ordre, pour reprendre le contrôle sans tout arrêter.

**Étape 1 — Faire un état des lieux physique de la disposition (Jour 1)**

Avant de toucher au moindre document, parcourez physiquement l'entrepôt. Vérifiez : les catégories d'articles sont-elles séparées (médical / alimentaire / NFI) ? Les allées de circulation sont-elles dégagées ? L'accès est-il verrouillé et limité à un nombre restreint de personnes identifiées ? Notez tout écart avec ces standards minimums — vous les corrigerez progressivement, mais il faut d'abord savoir précisément où vous en êtes.

**Étape 2 — Ouvrir le template `fiche-inventaire-entrepot-fifo-fefo.xlsx` et y transférer le stock existant (Jour 1-3)**

Ouvrez le fichier fourni avec ce module. L'onglet "Inventaire" contient une colonne par information essentielle : référence article, désignation, catégorie, numéro de lot, date de péremption, quantités entrées et sorties. Le stock disponible se calcule automatiquement (colonne "Stock disponible"), de même que le nombre de jours restants avant péremption et une alerte FEFO automatique ("OK", "Surveiller", "URGENT — sortir en priorité", "PÉRIMÉ — retirer"). Reportez-y, article par article et lot par lot, l'état réel constaté lors de votre comptage physique — pas les chiffres de l'ancien système si vous avez un doute sur leur fiabilité.

**Étape 3 — Trier physiquement selon la logique FEFO (Jour 2-3)**

Une fois les dates de péremption saisies, utilisez le tri de la colonne "Alerte FEFO" pour identifier immédiatement les lots à sortir en priorité ("URGENT") et ceux à retirer du stock actif ("PÉRIMÉ"). Réorganisez physiquement l'entrepôt en conséquence : les lots à péremption la plus proche doivent être les plus accessibles, jamais en fond d'étagère. C'est cette étape — pas seulement le tableau Excel — qui rend la logique FEFO réellement applicable au quotidien par toute l'équipe entrepôt, y compris les jours où vous n'êtes pas présent(e) pour vérifier.

**Étape 4 — Consulter l'onglet "Synthèse par catégorie" pour une vue d'ensemble (Jour 3, puis chaque semaine)**

L'onglet "Synthèse par catégorie" calcule automatiquement, à partir de vos données d'inventaire, le stock disponible total par catégorie, le nombre d'articles en alerte "URGENT" et le nombre d'articles périmés. Consultez cette synthèse chaque semaine — c'est votre outil de pilotage pour anticiper les sorties prioritaires et signaler à votre coordination toute catégorie qui approche d'une rupture ou accumule des pertes.

**Étape 5 — Planifier et réaliser un inventaire physique complet, puis des comptages tournants réguliers (Jour 5 puis en continu)**

Un inventaire physique complet consiste à compter réellement, article par article, tout ce qui se trouve en entrepôt, et à comparer ce comptage au stock déclaré dans votre fiche. Faites-le dès votre prise de poste pour établir une base fiable, puis planifiez des **comptages tournants** (cycle counts) réguliers sur des sous-ensembles du stock — par exemple une catégorie différente chaque semaine — plutôt que d'attendre un inventaire complet annuel pour détecter un problème qui, à ce moment-là, sera devenu difficile à expliquer.

**Étape 6 — Documenter systématiquement tout écart avec le template `rapport-ecarts-stock.docx` (dès qu'un écart est détecté)**

Dès qu'un comptage physique révèle un écart avec le stock système — même minime — ouvrez le template `rapport-ecarts-stock.docx` fourni avec ce module. Il vous guide pour documenter : l'article et le lot concernés, la quantité attendue versus la quantité comptée, les causes possibles, l'action corrective engagée, et la validation par votre superviseur. Ne classez jamais un écart comme "réglé" par un simple ajustement silencieux du chiffre système : le rapport écrit est ce qui protège l'équipe entrepôt en cas de question ultérieure, et ce qui permet à l'organisation d'identifier un problème récurrent avant qu'il ne devienne une perte majeure.
