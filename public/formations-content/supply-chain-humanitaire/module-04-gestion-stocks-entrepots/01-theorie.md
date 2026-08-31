# Module 04 — Gestion des Stocks & Entrepôts
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Réaliser un processus de réception conforme, en vérifiant systématiquement la marchandise livrée contre la commande d'achat (PO) et le packing list, avant toute signature.
- Effectuer un contrôle qualité documenté à la réception et appliquer la procédure correcte de rejet total ou partiel en cas d'écart.
- Assurer un suivi par lot et par date de péremption qui reste exploitable en cas de rappel de produit ou de question d'un bailleur, des mois plus tard.
- Réconcilier un inventaire physique avec les registres du système ERP et expliquer un écart avec des causes crédibles, pas des suppositions.
- Distinguer, à chaque étape de la chaîne réception → stockage → sortie, ce qui relève de l'opérationnel entrepôt de ce qui relève de la redevabilité SCM vis-à-vis du bailleur et de l'organisation.

### La réception : un point de contrôle contractuel, pas une simple livraison

Sur le terrain, on entend souvent "le camion est arrivé, on décharge" comme si la réception se résumait à un geste logistique. Ce n'est pas le cas. Une réception, au sens SCM du terme, est le moment où vous vérifiez que ce qui arrive physiquement correspond à ce qui a été **commandé et engagé contractuellement** — la commande d'achat (Purchase Order / PO) et le packing list qui l'accompagne. Tant que cette vérification n'est pas faite, vous n'avez aucune base pour dire que le fournisseur a rempli ses obligations, ni que votre organisation doit le payer intégralement.

Cette distinction a des conséquences concrètes. Un chef d'entrepôt qui reçoit 480 cartons annoncés sur le bon de livraison du transporteur et qui décharge sans comparer ce chiffre à la PO (qui, elle, en engageait peut-être 500) transforme un écart contractuel en simple problème administratif à régler "plus tard". Plus tard, c'est souvent trop tard : le transporteur est reparti, le fournisseur a été payé sur la base de la PO, et personne ne peut plus prouver ce qui est réellement arrivé ce jour-là.

**Ce qu'il faut retenir opérationnellement** : la réception se fait toujours en trois documents simultanés — la PO (ce qui a été commandé), le packing list (ce que le fournisseur déclare avoir expédié) et le comptage physique réel (ce qui arrive). Un seul de ces trois éléments, pris isolément, ne prouve rien. C'est leur confrontation qui constitue une réception conforme.

### Pourquoi le contrôle qualité à la réception change tout

Le réflexe naturel, sous la pression d'un camion qui attend et d'une équipe déjà débordée, est de vérifier la quantité et de laisser la qualité "se voir plus tard, à l'usage". C'est l'inverse de ce qu'impose une gestion SCM sérieuse. Un contrôle qualité fait à la réception permet de **rejeter maintenant**, pendant que le fournisseur ou le transporteur est encore responsable et présent — un rejet documenté à ce moment engage sa responsabilité contractuelle. Le même défaut découvert des semaines plus tard, une fois le produit distribué ou déjà en rayon sur le terrain, ne peut plus être imputé à personne : c'est votre organisation qui porte la perte, et pire, c'est parfois le bénéficiaire qui reçoit un produit endommagé ou dégradé.

Un contrôle qualité à la réception porte au minimum sur : l'état des emballages (écrasement, humidité, traces de manipulation), la cohérence entre l'étiquetage et le produit réellement livré, la date de péremption restante (un produit livré avec une durée de vie résiduelle trop courte pour être distribué avant expiration est un problème de qualité, pas seulement de logistique), et un échantillonnage physique pour les lots volumineux plutôt qu'une vérification visuelle du seul carton du dessus.

**Ce qu'il faut retenir opérationnellement** : un rejet à la réception n'est jamais un échec de la procédure — c'est la procédure qui fonctionne. Le vrai échec, c'est de signer une réception conforme sur un produit défectueux parce que "on verra bien" ou parce que le camion doit repartir.

### Le suivi par lot : un outil de traçabilité, pas seulement de rotation physique

La gestion des stocks par lot et par date de péremption a un usage opérationnel immédiat, au niveau de l'entrepôt — savoir quoi sortir en premier physiquement. Ce niveau-là est traité en détail dans le module dédié à l'entrepôt de la formation Logistique Humanitaire. Ici, l'angle est différent et complémentaire : le numéro de lot est avant tout un **identifiant de traçabilité SCM**. C'est lui qui permet de répondre, des mois après la réception, à des questions comme : "ce lot précis a-t-il été distribué, et où ?", "si le fournisseur signale un défaut sur une fabrication donnée, quels stocks sont concernés ?", "quel document de réception justifie l'entrée de ce lot dans le système ?"

Un suivi par lot qui n'existe que sur une étiquette physique en entrepôt, sans lien enregistré vers le document de réception qui l'a fait entrer dans le système, perd l'essentiel de sa valeur SCM : il reste utile pour la rotation FEFO du jour, mais devient inutilisable pour un rappel de produit ciblé ou une réponse à un bailleur qui demande la traçabilité complète d'un lot précis.

### La réconciliation d'inventaire : un exercice de redevabilité, pas un contrôle comptable

Réconcilier un inventaire physique avec le système ERP consiste à comparer ce qui est réellement compté en entrepôt avec ce que le système déclare, ligne par ligne, lot par lot. Vue depuis le terrain, cette tâche ressemble à une corvée administrative de fin de mois. Vue depuis le niveau SCM, c'est l'un des exercices les plus scrutés par les bailleurs et les auditeurs : c'est la preuve, ou l'absence de preuve, que l'organisation sait à tout moment où se trouve l'aide qu'elle a reçu mandat de distribuer.

Un écart non expliqué entre stock physique et stock ERP n'est jamais anodin à ce niveau : il peut signaler une erreur de saisie corrigible en cinq minutes, ou un problème plus grave (perte, détournement, mauvaise réception jamais corrigée) qui, non traité, s'accumule silencieusement d'un inventaire à l'autre. La différence entre les deux situations ne se voit jamais dans le chiffre de l'écart lui-même — elle se voit dans la qualité de l'explication qui l'accompagne. Un rapport de réconciliation qui se contente d'ajuster le chiffre système sans explication écrite ne protège personne : ni l'équipe entrepôt en cas de question ultérieure, ni l'organisation en cas d'audit bailleur.

**Ce qu'il faut retenir opérationnellement** : une réconciliation d'inventaire audit-ready répond toujours à trois questions par écart constaté — quelle est l'ampleur exacte de l'écart, quelle est la cause la plus probable compte tenu du contexte réel (pas une formule générique), et quelle action corrective a été engagée, avec qui l'a validée.

### Vocabulaire clé à maîtriser dès ce module

- **PO (Purchase Order / commande d'achat)** : document contractuel qui engage l'organisation et le fournisseur sur une quantité, une qualité et un prix donnés — la référence de base de toute réception conforme.
- **Packing list** : document fourni par le fournisseur ou le transporteur, détaillant le contenu réel d'un envoi (quantités, colisage) — à confronter systématiquement à la PO et au comptage physique.
- **GRN (Goods Received Note / bon de réception)** : document interne qui formalise ce qui a réellement été reçu et accepté, avec le résultat du contrôle qualité — c'est ce document, pas le bon de livraison du transporteur, qui doit faire foi côté organisation.
- **Rejet partiel / rejet total** : décision documentée de refuser tout ou partie d'une livraison non conforme, avec justification écrite et notification au fournisseur.
- **Réconciliation d'inventaire** : comparaison systématique entre comptage physique et registres ERP, avec documentation de tout écart et de son traitement.
- **Audit-readiness** : état dans lequel les documents et registres d'une organisation permettent de répondre, à tout moment, aux questions d'un auditeur ou d'un bailleur sans reconstitution a posteriori.
