# Module 04 — Gestion des Stocks & Entrepôts
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Livraison de suppléments nutritionnels, Port-au-Prince, Haïti"

**Contexte (fictif, inspiré de situations réelles rencontrées en Haïti)**

Vous êtes responsable SCM pour une ONG médicale intervenant dans la région de Port-au-Prince. Une livraison de suppléments nutritionnels prêts à l'emploi (RUTF) arrive à votre entrepôt, correspondant à la PO n°HTI-2026-0311 passée trois semaines plus tôt auprès d'un fournisseur régional. Le contrôle à la réception, effectué avant toute signature, révèle les éléments suivants :

- La PO engageait **600 cartons** de RUTF, lot unique attendu.
- Le packing list du fournisseur annonce **600 cartons** expédiés, répartis en réalité sur **deux lots** différents (le fournisseur ne l'avait pas mentionné à la commande) : lot N2026-118 (450 cartons) et lot N2026-121 (150 cartons).
- Le comptage physique à la réception ne trouve que **580 cartons** au total : 450 du lot N2026-118, et seulement 130 du lot N2026-121.
- Sur les 130 cartons du lot N2026-121 effectivement présents, **12 cartons** montrent des emballages écrasés et humides, avec une décoloration visible du produit à l'intérieur — signe probable d'exposition à l'humidité pendant le transport.
- Le lot N2026-121 a une date de péremption dans **10 semaines**, contre **7 mois** pour le lot N2026-118.

**Votre mission** : avec les outils de ce module, vous devez traiter cette réception correctement, avant le départ du transporteur, et documenter la décision qui en découle.

### Exercice noté

1. **Bon de réception et contrôle qualité** — Complétez le template `bon-de-reception-controle-qualite.xlsx` pour les deux lots : reportez les quantités attendues (selon la PO), les quantités reçues, le résultat du contrôle qualité (y compris les 12 cartons endommagés), et laissez le calcul d'écart automatique indiquer le niveau de conformité de chaque ligne. Décidez, pour chaque lot, s'il s'agit d'une acceptation totale, d'une acceptation partielle (avec quantité et motif précis) ou d'un rejet total, et justifiez votre décision par écrit dans la colonne prévue.
2. **Rapport de réconciliation** — En supposant que cette réception a été enregistrée dans l'ERP sur la base des 600 cartons annoncés par erreur avant vérification complète, rédigez le rapport avec le template `rapport-reconciliation-inventaire-erp.docx` : indiquez le comptage physique réel par lot, le registre ERP erroné, l'écart en unités, au moins deux causes plausibles (erreur de saisie anticipée, perte en transport, non-conformité qualité) et l'action corrective à engager.
3. **Communication fournisseur** — Rédigez en 5 à 8 lignes le message que vous enverriez au fournisseur pour signaler l'écart de quantité et la non-conformité qualité constatée sur le lot N2026-121, en vous appuyant sur les chiffres exacts de votre bon de réception.

**Livrable attendu** : le bon de réception et contrôle qualité complété pour les deux lots, le rapport de réconciliation cohérent avec ces chiffres, et le message fournisseur rédigé — trois documents dont les chiffres doivent concorder entre eux du premier au dernier.

### Pièges fréquents (25 ans de terrain condensés)

- **Signer le bon de livraison du transporteur avant vérification complète** — sous la pression d'un camion qui doit repartir ou d'une équipe déjà débordée, signer "pour faire vite" transforme un contrôle qualité en formalité vide. Une fois signé, il devient très difficile de faire valoir un écart découvert cinq minutes plus tard.
- **Mal documenter un rejet** — noter "carton abîmé, refusé" sans quantité précise, sans référence de lot, sans photo ni signature n'est pas une documentation de rejet : c'est une source de litige quasi garantie avec le fournisseur, et un risque réel de non-remboursement si l'organisation ne peut pas prouver ce qu'elle a effectivement refusé et pourquoi.
- **Réconcilier un inventaire "sur papier"** — ajuster un chiffre système pour qu'il corresponde à ce qu'on pense être la réalité, sans comptage physique réel effectué au préalable, fait disparaître exactement l'information qu'une réconciliation est censée produire, et peut masquer un problème récurrent pendant des mois.
- **Traiter la réception et le contrôle qualité comme une seule étape rapide sous pression de temps** — compter les cartons en même temps que l'on inspecte superficiellement leur état, en une seule passe accélérée pour "libérer le camion", conduit systématiquement à sous-évaluer les non-conformités qualité. Les deux vérifications demandent chacune leur propre attention, même si elles se font le même jour.
- **Ne pas tracer les numéros de lot dès la réception** — un document de réception qui ne mentionne pas les numéros de lot rend impossible tout rappel de produit ciblé plus tard : si le fournisseur signale un problème sur une fabrication précise, l'organisation ne peut identifier ni où se trouve le stock concerné, ni s'il a déjà été distribué.

### Check-list de fin de module

- [ ] Je sais expliquer pourquoi une réception se vérifie contre trois documents (PO, packing list, comptage physique) et non contre un seul.
- [ ] Je sais mener un contrôle qualité documenté à la réception et distinguer acceptation totale, acceptation partielle et rejet total.
- [ ] Je sais pourquoi un rejet doit toujours être justifié par écrit, avec quantité et motif précis, avant le départ du transporteur.
- [ ] Je comprends la différence entre le suivi de lot pour la rotation physique en entrepôt et le suivi de lot comme outil de traçabilité SCM.
- [ ] J'ai complété un bon de réception et contrôle qualité avec le template fourni, en laissant le calcul d'écart automatique guider ma décision.
- [ ] J'ai rédigé un rapport de réconciliation d'inventaire complet et cohérent avec le template fourni.
- [ ] Je sais identifier, dans une réception réelle, les informations à documenter en priorité pour rester "audit-ready" plusieurs mois plus tard.
