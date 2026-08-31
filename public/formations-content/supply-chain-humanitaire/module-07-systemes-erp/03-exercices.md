# Module 07 — Systèmes ERP Humanitaires — SAP, LINK & Power Query
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Le rapport de fin de mois, base de Bunia"

**Contexte (fictif, inspiré de situations réelles rencontrées en RDC et au Tchad)**

Vous êtes Supply Chain Officer pour une ONG internationale sur une base à Bunia. Le 28 du mois, votre coordinateur logistique vous demande le rapport mensuel de statut des achats à présenter en réunion de coordination pays dans 3 jours. Vous exportez depuis l'ERP de votre organisation un fichier CSV de 140 lignes couvrant tous les achats initiés depuis le début du projet. En l'ouvrant, vous constatez immédiatement plusieurs problèmes :

- Une dizaine de lignes semblent identiques (même fournisseur, même article, même montant) — possiblement des doublons issus d'une double saisie lors d'une coupure internet le mois précédent, possiblement des commandes réellement répétées. Impossible de trancher à l'œil nu.
- La colonne date de commande mélange des formats "12/03/2025" et "2025-03-12" selon l'agent qui a saisi la ligne.
- La colonne montant contient des valeurs en "USD", en "US$", en "CDF" (franc congolais) et une poignée en "€" pour des achats effectués via un fournisseur basé à Kampala qui facture parfois en devise tierce.
- Trois lignes n'ont ni date de réception ni statut renseigné — probablement des commandes toujours en cours, mais rien ne le confirme dans le fichier.

**Votre mission** : produire, avant l'échéance de 3 jours, un rapport de statut des achats fiable, avec ses chiffres justifiés et ses limites clairement signalées.

### Exercice noté

1. **Nettoyage avec le template** — Ouvrez `guide-extraction-nettoyage-power-query.xlsx`, reproduisez la logique de nettoyage (doublons, dates, devises) sur un jeu de données équivalent à celui décrit ci-dessus. Documentez dans l'onglet "Notes de transformation" : combien de lignes potentiellement dupliquées vous avez identifiées, votre décision pour chacune (suppression ou conservation, et pourquoi), le taux de change utilisé et sa source, et comment vous traitez les trois lignes incomplètes (les exclure du rapport en attendant confirmation, ou les inclure avec un statut "à vérifier" explicite — justifiez votre choix).
2. **Rapport final** — Remplissez `gabarit-rapport-erp-mensuel.docx` avec les chiffres consolidés issus de votre nettoyage : période couverte, nombre total de commandes après dédoublonnage, montant total en devise de reporting unique, et une section "anomalies détectées" listant explicitement les points qui nécessitent une vérification humaine avant validation finale par votre coordinateur.

**Livrable attendu** : le classeur de nettoyage complété et le rapport d'une à deux pages, prêts à être présentés en réunion de coordination.

### Pièges fréquents (25 ans de terrain condensés)

- **Faire confiance aux données ERP sans valider l'exhaustivité de l'export** — un ERP peut avoir des filtres actifs par défaut, une plage de dates restreinte, ou exclure certains statuts sans que ce soit visible immédiatement. Vérifiez toujours, avant de nettoyer quoi que ce soit, que votre export couvre bien la totalité de la période et du périmètre attendus. Un rapport parfaitement nettoyé sur des données incomplètes reste un rapport faux.
- **Ressaisir manuellement au lieu d'utiliser Power Query** — corriger les dates ou les doublons directement dans le fichier Excel, cellule par cellule, semble plus rapide sur le moment. C'est une fausse économie : c'est une source d'erreurs de saisie supplémentaires, et surtout, ce n'est pas reproductible. Le mois suivant, vous recommencez tout depuis zéro au lieu de simplement actualiser.
- **Ne pas documenter les étapes de transformation** — un rapport dont personne d'autre que vous ne peut expliquer les chiffres devient un problème le jour où vous partez en congé, changez de poste, ou êtes simplement absent le jour où un bailleur pose une question précise sur une ligne.
- **Supprimer des doublons sans vérifier qu'il s'agit bien de doublons** — deux commandes identiques en apparence (même article, même fournisseur, même montant) peuvent être deux commandes réellement passées à deux dates différentes pour reconstituer un stock. Supprimer automatiquement sans un critère d'unicité rigoureux (numéro de PO, pas juste la ressemblance visuelle) peut faire disparaître de vraies dépenses de votre rapport — une erreur au moins aussi grave que de les compter deux fois.
- **Convertir les devises avec un taux improvisé** — utiliser le taux de change du jour trouvé sur un moteur de recherche, plutôt que le taux de référence officiellement adopté par votre mission pour le mois comptable concerné, crée des écarts avec la comptabilité et la finance qui remonteront tôt ou tard, généralement au pire moment : pendant un audit.
- **Présenter un rapport sans signaler les données manquantes ou incertaines** — un tableau qui a l'air complet et propre inspire une confiance que les données ne méritent peut-être pas. Signaler explicitement "3 lignes en attente de confirmation, non comptabilisées dans le total" est plus professionnel, et plus protecteur pour vous, qu'un chiffre rond présenté sans réserve.
- **Ne jamais faire relire son pipeline de nettoyage par un collègue** — parce que Power Query fonctionne "en silence" une fois configuré, il est tentant de ne plus jamais réexaminer sa propre logique de transformation. Une paire d'yeux neuve, même une fois par trimestre, repère des règles de nettoyage devenues obsolètes (un nouveau format de date apparu, un nouveau fournisseur facturant dans une devise non prévue) avant qu'elles ne faussent silencieusement un rapport.

### Check-list de fin de module

- [ ] Je sais expliquer ce qu'un ERP standardise (source unique de vérité, piste d'audit) et pourquoi ça protège l'organisation et moi-même.
- [ ] Je sais décrire, dans l'ordre, les grandes étapes d'un workflow d'approbation ERP type (PR, vérification budgétaire, seuils d'approbation, PO, réception, registre des actifs).
- [ ] Je comprends pourquoi la compétence transférable est le nettoyage de données, pas la maîtrise boutons-par-boutons d'un ERP propriétaire donné.
- [ ] Je sais ouvrir un export ERP dans Power Query sans modifier le fichier source.
- [ ] Je sais identifier et supprimer des doublons sur un critère d'unicité rigoureux, pas sur une simple ressemblance visuelle.
- [ ] Je sais harmoniser des formats de date incohérents en vérifiant les cas ambigus plutôt qu'en laissant l'outil deviner.
- [ ] Je sais normaliser des montants en devises mixtes vers une devise de reporting unique, en conservant les montants originaux.
- [ ] Je documente systématiquement mes étapes de transformation pour qu'un collègue puisse reproduire mon rapport.
- [ ] J'ai complété le classeur de nettoyage et le rapport mensuel avec les templates fournis.
