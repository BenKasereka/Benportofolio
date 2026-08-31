# Module 04 — Entrepôt & Gestion des Stocks
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Écart constaté après une distribution médicale, Maiduguri, Nigeria"

**Contexte (fictif, inspiré de situations réelles rencontrées dans le Nord-Est du Nigeria)**

Vous êtes responsable d'entrepôt pour une ONG médicale intervenant dans un camp de personnes déplacées près de Maiduguri. Une distribution de kits de traitement contre la malnutrition aiguë vient de se terminer. Le comptage systématique post-distribution, réalisé par votre équipe, révèle les éléments suivants :

- Le système de stock indiquait **480 cartons** de RUTF (Ready-to-Use Therapeutic Food) disponibles avant la distribution, sur le lot L2026-047 (péremption dans 6 semaines).
- La distribution a officiellement consommé **320 cartons**, selon les listes de bénéficiaires signées.
- Le comptage physique après distribution ne trouve que **135 cartons** en entrepôt, au lieu des 160 attendus (480 − 320).
- L'équipe entrepôt signale que la porte de la zone de stockage alimentaire est restée ouverte une partie de l'après-midi de distribution "parce qu'on allait et venait sans arrêt pour charger le camion".
- Un autre lot de RUTF (L2026-052, péremption dans 4 mois) était stocké devant le lot L2026-047 depuis une livraison récente.

**Votre mission** : avec les outils de ce module, vous devez traiter cet écart correctement avant la fin de la journée.

### Exercice noté

1. **Mise à jour de l'inventaire** — Dans le template `fiche-inventaire-entrepot-fifo-fefo.xlsx`, ajoutez les deux lots de RUTF (L2026-047 et L2026-052) avec leurs dates de péremption respectives, et vérifiez ce que l'alerte FEFO automatique aurait dû signaler à l'équipe **avant** la distribution — notamment si le lot L2026-047 aurait dû sortir en priorité.
2. **Rapport d'écart** — Rédigez le rapport avec le template `rapport-ecarts-stock.docx` : indiquez la quantité attendue (160) versus la quantité comptée (135), calculez l'écart en unités et en pourcentage, et proposez au moins deux causes possibles crédibles compte tenu du contexte décrit (porte restée ouverte, mauvais respect du tri FEFO, erreur de comptage possible sur les listes de distribution signées).
3. **Action corrective** — Dans la section correspondante du rapport, proposez une action corrective concrète et une mesure préventive pour éviter la récurrence — ne vous contentez pas d'écrire "renforcer la vigilance" : proposez un changement de procédure ou de disposition physique réellement applicable.

**Livrable attendu** : la fiche d'inventaire mise à jour et le rapport d'écart complété, cohérents entre eux (les chiffres du rapport doivent correspondre à ceux de la fiche).

### Pièges fréquents (25 ans de terrain condensés)

- **Mélanger la logique FIFO et FEFO par habitude** — un logisticien formé sur des stocks NFI (où FIFO suffit) applique parfois ce réflexe par défaut aux produits périssables. Sur du médical ou de l'alimentaire, FEFO n'est jamais une option : c'est la seule règle qui compte, y compris quand elle contredit l'ordre d'arrivée physique des lots.
- **Ignorer la procédure de radiation des produits endommagés ou périmés** — un article cassé ou périmé qui reste des semaines "en attente de décision" dans le système fausse tous vos chiffres de stock disponible et peut être compté par erreur comme utilisable lors d'une distribution suivante. Radiez-le formellement (avec justification écrite) dès le constat, ne laissez jamais un article inutilisable trainer dans le stock actif.
- **Négliger l'étiquetage des casiers et emplacements** — un entrepôt où les emplacements ne sont pas clairement identifiés (référence article + lot visible sur chaque étagère ou palette) génère des erreurs de préparation de commande (picking) même avec une fiche de stock parfaitement à jour sur le papier. La fiabilité du document ne compense jamais un entrepôt illisible physiquement.
- **Traiter un inventaire annuel unique comme suffisant** — attendre l'inventaire physique complet de fin d'année pour découvrir un écart accumulé sur douze mois rend la cause quasiment impossible à identifier. Les comptages tournants réguliers, même partiels, permettent de détecter un problème pendant qu'il est encore possible de comprendre ce qui s'est passé.
- **Ajuster un écart dans le système sans le documenter** — corriger silencieusement un chiffre de stock pour qu'il corresponde au comptage physique, sans rapport d'écart écrit, fait disparaître l'information la plus utile : celle qui permettrait de repérer un problème récurrent (même catégorie d'article, même période, même équipe de garde) avant qu'il ne devienne un vrai cas de détournement.

### Check-list de fin de module

- [ ] Je sais citer les trois exigences de base d'un entrepôt humanitaire conforme (disposition, sécurité physique, contrôle d'accès).
- [ ] Je sais expliquer la différence entre FIFO et FEFO et dire, pour n'importe quel article, laquelle des deux logiques s'applique.
- [ ] Je sais ce que doit contenir une fiche de stock et à quel moment elle doit être mise à jour.
- [ ] Je comprends pourquoi un écart d'inventaire est un enjeu de redevabilité et pas seulement un détail comptable.
- [ ] J'ai mis à jour une fiche d'inventaire avec le template fourni et vérifié ses alertes FEFO automatiques.
- [ ] J'ai rédigé un rapport d'écart de stock complet et cohérent avec le template fourni.
- [ ] Je sais distinguer un inventaire physique complet d'un comptage tournant, et pourquoi les deux sont nécessaires.
