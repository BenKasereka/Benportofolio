# Module 02 — Cycle Complet des Achats — De la RFQ à la PO
## 01. Théorie

### Objectifs pédagogiques

À l'issue de ce module, vous serez capable de :
- Distinguer RFQ, RFP, ITB et AMI selon le seuil d'achat et la nature du besoin, et choisir la bonne procédure sans hésitation ni improvisation.
- Faire fonctionner un Comité de Validation des Achats (CPC) dans le respect du quorum et de la séparation des tâches.
- Produire une analyse comparative des offres (CBA) qui résiste à un audit bailleur, formule de pondération à l'appui.
- Repérer, dans un jeu d'offres réel, les indices de collusion entre soumissionnaires.
- Constituer un dossier d'achat archivable et traçable de la demande initiale jusqu'au paiement.

### Pourquoi les seuils d'autorisation existent — la logique qu'on oublie de vous expliquer

La première chose qu'on vous dit sur un poste achats, c'est une liste de seuils en dollars : en dessous de X, une procédure ; au-dessus, une autre. Présentée comme ça, elle ressemble à de la bureaucratie. Elle n'en est pas. Chaque seuil existe pour une seule raison : réduire l'opportunité de fraude en multipliant le nombre de personnes qui doivent regarder une transaction avant qu'elle ne se conclue.

C'est le principe du **triangle de la fraude** appliqué aux achats : une fraude a besoin d'une opportunité, d'une pression et d'une rationalisation. Le logisticien ne peut rien faire contre la pression personnelle d'un collègue ni contre sa capacité à se justifier à lui-même — mais il peut supprimer l'opportunité. Un achat où une seule personne exprime le besoin, choisit le fournisseur, valide le prix et signe le paiement est un achat où l'opportunité de fraude est maximale. Plus le montant grandit, plus le nombre d'yeux qui doivent converger avant la décision doit grandir avec lui.

Les paliers ci-dessous sont une architecture générique — les seuils exacts varient selon l'organisation et le bailleur (ECHO, USAID/BHA, FCDO ont chacun leurs propres plafonds, parfois plus bas que votre politique interne), mais la logique à 4 niveaux revient de façon quasi universelle dans les grandes ONG :

| Palier | Montant indicatif | Procédure | Qui valide |
|---|---|---|---|
| 1 — Achat direct | Jusqu'à ~1 000 USD | Comparaison informelle, une seule cotation possible si justifiée par écrit | Logisticien terrain |
| 2 — Consultation restreinte | ~1 000 à 25 000 USD | **RFQ** — minimum 3 devis écrits obligatoires | Log Manager + validation budgétaire programme |
| 3 — Appel d'offres formel | ~25 000 à 100 000 USD | **RFP** ou **ITB** — critères figés, ouverture des plis en comité | **CPC** (comité de validation des achats) |
| 4 — Achat stratégique | Au-delà de ~100 000 USD | Appel d'offres international, souvent piloté ou co-validé par le siège | CPC + validation siège / bailleur |

**Piège classique de terrain — le fractionnement des achats ("purchase splitting")** : diviser un besoin de 30 000 USD en trois commandes de 9 999 USD pour rester sous le seuil RFQ et éviter le comité, c'est la fraude la plus classique et la plus facilement détectée en audit. Un auditeur bailleur croise systématiquement les commandes passées au même fournisseur, sur la même période, pour le même projet. Trois POs consécutives à un mois d'écart chez le même fournisseur pour des articles similaires déclenchent une question immédiate — et souvent un refinancement refusé sur toute la ligne budgétaire concernée.

### RFQ, RFP, ITB, AMI — quatre outils, pas quatre synonymes

Sur le terrain, "on va faire un appel d'offres" est souvent utilisé pour désigner n'importe laquelle de ces quatre procédures — c'est justement ce qui crée la confusion. Ce ne sont pas quatre façons différentes de dire la même chose. Chacune répond à une logique différente, sollicite une réponse différente du fournisseur, et se tromper d'outil affaiblit votre dossier même si le prix final obtenu est correct.

| | **RFQ** (Request for Quotation — Demande de cotation) | **RFP** (Request for Proposal — Appel à propositions) | **ITB** (Invitation to Bid — Appel d'offres ouvert) | **AMI** (Appel à Manifestation d'Intérêt — Expression of Interest / EOI) |
|---|---|---|---|---|
| **Utilisé pour** | Biens standards, spécifications déjà connues et fixes | Services ou biens complexes où l'approche technique compte autant que le prix | Achats de très forte valeur, biens ou travaux homogènes et bien définis | Explorer un marché fournisseur mal connu, en amont d'un achat complexe ou d'un accord-cadre |
| **Seuil / complexité typique** | Palier 2 — consultation restreinte | Palier 3 — appel d'offres formel | Palier 3 à 4 — appel d'offres formel à stratégique | Aucun seuil financier propre : c'est une étape de présélection, pas un achat |
| **Ce qui est demandé au fournisseur** | Un prix ferme, directement comparable entre offres | Une proposition technique **et** financière, évaluée par pondération | Une offre ferme sous pli scellé, conformité stricte aux spécifications | Une simple preuve de capacité / qualification — un signal d'intérêt, jamais un prix ferme |
| **Exemple terrain** | Achat de 200 moustiquaires imprégnées | Recrutement d'un bureau d'études pour un forage | Construction d'un entrepôt régional de 500 m² | Présélectionner des transporteurs routiers avant un accord-cadre logistique régional en RDC |

**Piège classique de terrain n°1** : lancer une RFQ pour un achat qui aurait dû être une ITB parce que "c'est plus rapide" — c'est le raccourci le plus fréquent en contexte d'urgence, et le premier point relevé par tout audit bailleur qui compare le montant réellement dépensé au type de procédure utilisée.

**Piège classique de terrain n°2** : confondre un AMI avec une RFQ déguisée. Un AMI n'engage jamais un fournisseur sur un prix ferme — il sert uniquement à constituer une liste restreinte (shortlist) de fournisseurs qualifiés, sur laquelle on lance ensuite une RFP ou une ITB. "Retenir" directement un prix reçu en réponse à un AMI, sans procédure de mise en concurrence formelle derrière, est une non-conformité fréquente et facilement repérée en audit.

### Gouvernance du CPC — pourquoi une seule signature est un signal d'alerte

Le **CPC (Comité de Validation des Achats — Procurement Committee)** est l'organe qui examine la CBA et décide quel fournisseur retenir, au-dessus du seuil de consultation restreinte. Sa raison d'être n'est pas de ralentir l'achat : c'est de garantir qu'aucune décision d'achat significative ne repose sur le jugement d'une seule personne.

Un CPC qui fonctionne correctement respecte systématiquement trois règles :

1. **Quorum minimum de 3 membres**, dont au moins un profil finance/compliance et un profil technique ou programme — jamais uniquement des logisticiens entre eux.
2. **Séparation des tâches** : la personne qui a exprimé le besoin initial (le programme demandeur) ou qui a négocié avec les fournisseurs ne doit jamais être seule décisionnaire au sein du comité. Elle informe, elle ne tranche pas seule.
3. **Décision documentée et signée par tous les membres présents**, avec justification écrite du choix — pas uniquement le nom du fournisseur retenu, mais pourquoi les autres offres ont été écartées.

**C'est là qu'intervient le signal d'alerte le plus fiable en audit** : un procès-verbal de CPC signé par une seule personne, ou par des membres qui n'ont manifestement pas de rôle dans l'achat (deux logisticiens du même bureau qui se signent mutuellement), est statistiquement l'indicateur le plus corrélé à une fraude d'achat dans les rapports d'investigation interne des grandes ONG. Ce n'est presque jamais la seule preuve d'une fraude — mais c'est presque toujours la première chose qu'un auditeur ou un enquêteur anti-fraude regarde avant même d'examiner les prix.

### Vocabulaire clé à maîtriser dès ce module

- **PR (Purchase Requisition)** : la demande d'achat initiale émise par le programme, point de départ officiel du cycle.
- **RFQ / RFP / ITB / AMI** : les quatre familles de consultation fournisseurs, voir tableau ci-dessus.
- **CBA (Comparative Bid Analysis)** : la grille d'analyse comparative des offres reçues, avec pondération prix/technique.
- **CPC (Procurement Committee)** : le comité de validation des achats au-dessus du seuil de consultation restreinte.
- **PO (Purchase Order)** : le bon de commande, engagement contractuel formel envers le fournisseur retenu.
- **3-way match** : le rapprochement à trois entre la PO, le bon de réception des biens (GRN) et la facture fournisseur, avant tout paiement.
- **Purchase splitting** : fractionnement frauduleux d'un achat en plusieurs commandes pour rester sous un seuil d'autorisation.
