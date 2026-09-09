# Module 02 — Contrôles Internes — Séparation des Tâches & Matrices d'Autorisation
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Expliquer pourquoi la séparation des tâches est le contrôle interne le plus important d'une organisation, avant même les procédures écrites.
- Identifier, dans une structure réelle, les cumuls de fonctions incompatibles en Finance, Achats et RH.
- Construire une matrice d'autorisation par niveau de responsabilité et par type d'opération, adaptée à un effectif réel et non à un organigramme théorique.
- Définir des seuils de délégation de pouvoir cohérents avec la taille et le niveau de risque d'une mission.
- Rédiger et archiver une lettre d'autorisation ou de révocation de signataire dans les règles.

### Pourquoi la séparation des tâches est LE contrôle interne fondamental

Sur le terrain, on entend souvent la même phrase après une fraude découverte tardivement : "on avait des procédures, tout était écrit". Le problème n'était presque jamais l'absence de procédure — c'était qu'une seule personne pouvait, seule, dérouler tout le cycle d'une transaction du début à la fin. Demander, approuver, exécuter, enregistrer : quand ces quatre fonctions se retrouvent dans les mains d'une seule personne, aucune procédure écrite ne protège plus rien, parce que personne n'est jamais en position de contredire ce que cette personne décide.

La règle d'or de la séparation des tâches (en anglais **Segregation of Duties**, SoD) tient en une phrase que je répète dans chaque mission d'audit d'ouverture : **la personne qui demande une dépense, celle qui l'approuve et celle qui la paie ne doivent jamais être la même personne.** Ce n'est pas une question de confiance individuelle — j'ai vu des agents parfaitement honnêtes rester quinze ans dans une organisation sans jamais rien détourner. La question n'est pas "est-ce que cette personne va frauder", elle est "est-ce que la structure permettrait à quelqu'un de frauder sans être détecté, et est-ce que cette même structure protège cette personne honnête d'une accusation infondée le jour où un chiffre ne colle pas". Un contrôle interne bien conçu protège autant l'organisation que la personne intègre placée dans un poste à risque.

**Les quatre fonctions à ne jamais cumuler sur une même transaction** :

| Fonction | Ce qu'elle recouvre concrètement | Exemple |
|---|---|---|
| **Initiation / demande** | Exprimer un besoin, déclencher une opération | Un chef de projet demande l'achat de 200 bâches |
| **Approbation** | Valider que la dépense ou l'opération est justifiée et budgétée | Le coordinateur terrain approuve la demande d'achat |
| **Exécution / garde des actifs** | Manipuler physiquement l'argent, le stock ou le bien | Le caissier décaisse, le magasinier réceptionne et stocke |
| **Enregistrement / contrôle** | Comptabiliser l'opération, la rapprocher, la vérifier a posteriori | Le comptable enregistre la sortie de caisse et rapproche le stock théorique et physique |

Dans une organisation correctement structurée, ces quatre fonctions passent par au moins trois personnes différentes pour toute opération significative. C'est ce qu'on appelle le principe des "quatre yeux" (four-eyes principle) poussé à son niveau le plus rigoureux : personne ne boucle seul un cycle complet.

### Les cumuls de fonctions les plus fréquents — Finance, Achats, RH

**En Finance** : le cumul le plus dangereux et le plus fréquent que j'ai rencontré en quinze ans d'audit terrain est un caissier qui tient aussi le livre de caisse (le brouillard) et qui rapproche lui-même sa caisse en fin de mois. Cette personne décaisse, enregistre, et contrôle sa propre écriture. Le rapprochement de caisse doit toujours être fait — ou au minimum contre-vérifié par surprise — par quelqu'un qui n'a pas manipulé l'argent physiquement.

**Dans les Achats** : le cumul classique est la même personne qui sélectionne le fournisseur, signe le bon de commande, réceptionne la marchandise et valide la facture pour paiement. C'est la porte ouverte à la collusion fournisseur (fournisseur fictif, surfacturation, marchandise jamais livrée mais facture payée quand même) — sujet approfondi en détail au Module 03 de cette formation.

**En RH** : le cumul le plus sous-estimé est celui qui touche la gestion de la paie — une même personne qui gère le fichier du personnel (embauches, départs, modifications de salaire) ET qui prépare le virement de paie. Cette configuration a permis, dans des cas réels que j'ai audités, le maintien d'employés fantômes sur la liste de paie pendant plusieurs mois après leur départ effectif, le salaire continuant d'être viré sur un compte resté accessible.

**Ce qu'il faut retenir opérationnellement** : la séparation des tâches ne se juge jamais sur l'organigramme officiel, mais sur qui détient réellement, dans les faits, chaque mot de passe, chaque clé de coffre, chaque droit de signature. Un organigramme peut afficher trois postes différents alors qu'en pratique une seule personne cumule les trois accès faute de remplaçant recruté à temps.

### La matrice de délégation de pouvoir par seuil

Une fois les fonctions correctement séparées entre les personnes disponibles, il reste une deuxième question : **qui a le droit d'approuver quoi, jusqu'à quel montant ?** C'est l'objet de la matrice de délégation de pouvoir (Delegation of Authority, DOA), qui croise deux dimensions : le type d'opération (achat, paiement, recrutement, avenant contractuel, décaissement de caisse...) et le niveau hiérarchique, avec un plafond en montant pour chaque niveau.

La logique est simple à énoncer mais rigoureuse à appliquer : plus le montant est élevé, plus le niveau d'approbation requis monte, et au-delà d'un certain seuil, une double signature devient obligatoire quel que soit le niveau du signataire. Un chef de base peut typiquement approuver seul une dépense courante jusqu'à un plafond fixé par les procédures internes ou le bailleur ; au-delà, l'approbation remonte au coordinateur pays, puis, pour les montants les plus élevés, nécessite une validation siège.

| Niveau | Type d'exemple de seuil (à adapter aux procédures internes de votre organisation) | Signature requise |
|---|---|---|
| Chef d'équipe / superviseur | Achats courants de faible montant | Signature simple |
| Chef de base | Achats et paiements de montant intermédiaire | Signature simple |
| Coordinateur terrain / pays | Montants supérieurs, engagements contractuels | Signature simple ou double selon seuil |
| Direction pays / siège | Montants élevés, contrats cadres, dérogations | Double signature obligatoire |

Cette matrice n'est pas un document théorique de siège : elle doit être connue par cœur par chaque comptable et chaque acheteur, affichée dans les bureaux financiers, et surtout **mise à jour à chaque changement de personnel occupant un poste signataire** — c'est le piège le plus fréquent, détaillé dans le module suivant de ce chapitre.

### Vocabulaire clé à maîtriser dès ce module

- **Séparation des tâches (SoD — Segregation of Duties)** : principe selon lequel aucune personne ne doit contrôler seule l'intégralité d'un cycle de transaction (demande, approbation, exécution, enregistrement).
- **Matrice de délégation de pouvoir (DOA — Delegation of Authority)** : tableau croisant les types d'opérations et les niveaux hiérarchiques, précisant qui peut approuver quoi, jusqu'à quel montant.
- **Cumul de fonctions incompatibles** : situation où une même personne détient deux fonctions qui, ensemble, lui permettraient de commettre et de dissimuler une erreur ou une fraude sans être détectée pendant longtemps.
- **Contrôle compensatoire** : mesure de supervision renforcée mise en place quand un cumul de fonctions ne peut pas être évité faute d'effectif suffisant (revue croisée, contre-signature a posteriori, audit surprise plus fréquent).
- **Signataire autorisé** : personne formellement habilitée, par une lettre d'autorisation signée, à engager l'organisation sur un type d'opération donné jusqu'à un seuil précis.
