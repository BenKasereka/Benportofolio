# Module 08 — Systèmes d'Information & Reporting Logistique
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Expliquer la logique de 3 indicateurs logistiques clés (taux de rupture de stock, coût par bénéficiaire, lead time) et la décision opérationnelle que chacun doit déclencher.
- Distinguer un rapport logistique mensuel de routine d'un rapport de situation d'urgence (SitRep), et savoir dans quel cas produire lequel.
- Situer le rôle de MIMOSA comme système de gestion des actifs et des stocks dans l'écosystème des outils logistiques humanitaires.
- Identifier les données brutes minimales nécessaires pour construire un tableau de bord logistique fiable et exploitable par le siège.
- Reconnaître, avant qu'elles ne polluent un rapport envoyé au siège, les erreurs de saisie qui rendent un tableau croisé dynamique ou une requête Power Query non fiables.

### Pourquoi un logisticien senior s'intéresse aux chiffres

Sur le terrain, beaucoup de logisticiens juniors considèrent le reporting comme une corvée administrative qu'on fait en fin de mois "parce que le siège le demande". C'est une erreur qui coûte cher. Un KPI logistique n'est pas un chiffre pour rassurer un bailleur — c'est un signal qui doit déclencher une décision précise. Si vous ne savez pas quelle décision un chiffre est censé provoquer, ce chiffre ne sert à rien, même parfaitement calculé.

Après 25 ans de terrain, la règle que j'applique est simple : je ne demande jamais un indicateur à mon équipe sans savoir d'avance ce que je ferai selon qu'il soit bon ou mauvais. Un tableau de bord qui ne débouche sur aucune décision est du temps perdu à produire, et du temps perdu à lire.

### Le taux de rupture de stock (stock-out rate)

Le **taux de rupture de stock** mesure la proportion de commandes, d'articles ou de jours pendant lesquels un article essentiel n'était pas disponible au moment où il était nécessaire. Il se calcule le plus souvent ainsi :

`Taux de rupture = (Nombre de lignes en rupture) / (Nombre total de lignes de commande ou de contrôle) × 100`

**La décision qu'il doit déclencher** : un taux de rupture qui dépasse le seuil d'alerte (typiquement 5 à 10 % selon le type d'article et le contexte) doit immédiatement remettre en question votre point de commande (reorder point) et votre stock de sécurité, pas seulement votre fournisseur. Un logisticien senior ne se contente jamais de constater une rupture répétée sur un article : il regarde si le seuil de réapprovisionnement fixé est encore adapté à la consommation réelle, qui évolue avec l'ampleur de la crise.

**Piège classique** : publier un taux de rupture global sans le ventiler par site ou par catégorie d'article. Un taux global de 4 % peut cacher un site à 25 % de rupture sur les intrants nutritionnels pendant que les autres sites sont à zéro. La moyenne masque le problème que le siège doit précisément voir.

### Le coût par bénéficiaire (cost per beneficiary)

Le **coût par bénéficiaire** rapporte le coût logistique total d'une activité (transport, stockage, manutention, parfois dédouanement) au nombre de bénéficiaires effectivement atteints :

`Coût par bénéficiaire = Coût logistique total / Nombre de bénéficiaires couverts`

**La décision qu'il doit déclencher** : ce n'est pas un indicateur de performance individuelle, c'est un indicateur d'efficience de la chaîne. Un coût par bénéficiaire qui grimpe d'un mois sur l'autre sans que le contexte ait changé (même route, même volume, même fournisseur) signale une inefficience à corriger — sur-stockage, taux de remplissage des camions trop faible, ruptures répétées qui obligent à multiplier les petits transports au lieu d'un seul gros. C'est aussi l'indicateur que les bailleurs regardent en premier pour comparer votre efficience à celle d'autres opérations similaires.

**Piège classique** : comparer un coût par bénéficiaire entre deux contextes radicalement différents (zone accessible par route bitumée vs. zone accessible uniquement par pont aérien) sans le signaler. Le chiffre brut, sans son contexte d'accès, induit le lecteur en erreur — et c'est vous qui devrez vous justifier si le siège s'alarme à tort.

### Le lead time (délai d'approvisionnement)

Le **lead time** mesure le temps écoulé entre le moment où une commande est passée et le moment où elle est effectivement livrée sur site :

`Lead time = Date de livraison réelle − Date de commande`

**La décision qu'il doit déclencher** : le lead time moyen observé sur les derniers mois doit directement fixer votre stock de sécurité et le moment où vous déclenchez une nouvelle commande. Si votre lead time moyen est de 21 jours et que vous ne commandez qu'au moment où le stock atteint zéro, vous êtes structurellement en rupture trois semaines par cycle. C'est un calcul, pas une question de chance ou de "fournisseur peu fiable".

**Piège classique** : calculer un lead time moyen sur des commandes de nature très différente (un container maritime et une pièce détachée envoyée par coursier n'ont rien à voir) et en tirer une seule moyenne globale trompeuse. Segmentez toujours par type d'approvisionnement.

### Rapport mensuel de routine vs. rapport de situation d'urgence (SitRep)

Ce sont deux documents différents, avec des objectifs, un rythme et un format différents — les confondre est une erreur fréquente chez les logisticiens qui découvrent le reporting institutionnel.

Le **rapport logistique mensuel** est un document de routine, produit à échéance fixe (généralement en début de mois pour le mois précédent), qui présente les KPI sur la durée, leur tendance par rapport aux mois précédents, l'état des ressources (flotte, entrepôts, chaîne du froid) et les priorités du mois suivant. Son but est de donner au siège une vision consolidée et comparable dans le temps — pas d'alerter sur un problème ponctuel.

Le **SitRep (Situation Report)** est un document déclenché par un événement — une urgence, un incident sécuritaire, une rupture de stock critique, une catastrophe naturelle — et non par un calendrier. Il est court, factuel, daté et horodaté précisément, structuré autour de ce qui s'est passé, l'impact sur les opérations, les actions déjà prises et les besoins immédiats. Un SitRep qui ressemble à un rapport mensuel condensé a raté sa cible : il doit se lire en moins de deux minutes par quelqu'un qui doit décider vite.

**Ce qu'il faut retenir opérationnellement** : le rapport mensuel répond à la question "comment évoluons-nous ?", le SitRep répond à la question "que se passe-t-il maintenant et qu'attendez-vous de moi ?". Envoyer un SitRep au rythme d'un rapport mensuel, ou noyer une urgence dans le format mensuel en attendant l'échéance calendaire, sont deux erreurs symétriques qui coûtent un temps de réaction précieux au siège.

### MIMOSA : un système de gestion des actifs et des stocks

**MIMOSA** est un système d'information propriétaire utilisé par plusieurs organisations humanitaires internationales (notamment certaines sections de Médecins Sans Frontières) pour la gestion des actifs et le suivi des stocks à l'échelle d'une mission ou d'un siège. Il centralise les informations sur les équipements, les véhicules, les stocks de fournitures et leur localisation, avec des règles de traçabilité plus poussées qu'un simple tableur.

Vous n'y aurez pas nécessairement accès en dehors d'une organisation qui l'a déployé, et son paramétrage est généralement piloté au niveau siège ou coordination logistique nationale. Ce qu'il faut en retenir à ce stade : c'est un outil de traçabilité d'actifs et de stocks à l'échelle organisationnelle, complémentaire — et non concurrent — des tableaux de bord KPI que vous construisez vous-même en local pour piloter votre activité au quotidien. La logique des indicateurs vue dans ce module (rupture, coût, lead time) reste la même, que la donnée source vienne d'un tableur maison ou d'un système comme MIMOSA.

### Vocabulaire clé à maîtriser dès ce module

- **KPI (Key Performance Indicator)** : indicateur clé de performance — un chiffre suivi dans le temps parce qu'il doit déclencher une décision précise, pas seulement décrire une situation.
- **Lead time** : délai entre la commande et la livraison effective d'un article ou d'un lot.
- **Taux de rupture de stock (stock-out rate)** : proportion de commandes ou de contrôles où un article requis n'était pas disponible.
- **SitRep (Situation Report)** : rapport court, déclenché par un événement, décrivant une situation, son impact et les besoins immédiats — à ne pas confondre avec un rapport de routine.
