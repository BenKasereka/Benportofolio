# Module 04 — Gestion Multi-Devises & Opérations Bancaires
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Dépréciation du Franc Congolais, Nord-Kivu, RDC"

**Contexte (fictif, inspiré de situations réelles rencontrées en RDC)**

Vous êtes Finance Manager d'"Action Santé Grands Lacs", une ONG médicale internationale opérant à Goma et dans ses zones de santé environnantes, sur un projet de 18 mois financé en USD par un bailleur institutionnel. Le budget a été construit sur un taux comptable de référence de **2 800 CDF pour 1 USD**. Les coûts internationaux (staff expatrié, achats internationaux) sont réglés directement en USD ; les coûts locaux (salaires du personnel national, loyers des structures de santé, carburant, fournisseurs locaux) représentent 65 % du budget et sont payés en francs congolais.

En l'espace de deux mois, le taux officiel publié par la Banque Centrale du Congo passe de 2 800 à **3 024 CDF pour 1 USD** — une dépréciation de 8 % du franc congolais. Vos contrats de service locaux (loyers, prestataires) sont libellés en CDF et n'évoluent pas automatiquement ; mais pour transformer vos décaissements CDF en rapport financier USD conforme au format du bailleur, vous devez désormais convertir chaque dépense locale à un taux moins favorable qu'au moment de la budgétisation. Le bailleur, en recevant votre rapport financier trimestriel, remarque un écart sur la ligne "coûts opérationnels locaux" et vous demande une explication écrite avant validation du rapport.

**Votre mission** : avec les outils vus dans ce module, produisez les deux livrables ci-dessous.

### Exercice noté

1. **Calcul de l'impact budgétaire** — Complétez le template `suivi-taux-change-impact-budgetaire.xlsx` en simulant ce cas : enregistrez le taux de 2 800 CDF/USD au mois 1 et de 3 024 CDF/USD au mois 2 dans l'onglet **Taux mensuels**. Dans l'onglet **Calcul gain/perte par transaction**, saisissez au moins 3 dépenses locales plausibles pour ce contexte (par exemple : loyer mensuel d'un centre de santé, masse salariale du personnel national, achat de carburant local), avec leur montant en CDF, et observez l'écart calculé automatiquement par rapport au taux du mois 1. Vérifiez que l'onglet **Synthèse impact budgétaire** reflète correctement l'écart cumulé.
2. **Note d'explication au bailleur** — Rédigez une note d'une demi-page maximum, destinée à votre point focal bailleur, qui explique l'écart constaté sur la ligne "coûts opérationnels locaux". La note doit citer explicitement : le taux comptable officiel appliqué chaque mois et sa source (Banque Centrale du Congo), le pourcentage de dépréciation constaté sur la période, et le montant total de la perte de change calculée dans votre template. Évitez tout jargon comptable non expliqué : un point focal bailleur non financier doit pouvoir comprendre votre note en une lecture.

**Livrable attendu** : le fichier `suivi-taux-change-impact-budgetaire.xlsx` complété, et la note d'explication au bailleur, sur un total ne dépassant pas 2 pages.

### Pièges fréquents (25 ans de terrain condensés)

- **Ne pas provisionner de marge de change dans le budget initial** — un budget multi-devises sans marge de prudence sur les lignes converties n'est pas un budget prudent, c'est un budget qui reporte le problème à la première variation de taux significative. La marge doit être posée dès la construction du budget, pas ajoutée après coup en réponse à un dépassement.
- **Laisser une procuration bancaire active pour un employé parti depuis des mois** — c'est, de très loin, le risque de fraude le plus fréquent que j'ai rencontré sur des dossiers de contrôle interne. Un ancien Finance Officer ou un ancien Chef de Base qui garde un accès bancaire actif après son départ n'est pas une négligence administrative mineure : c'est une brèche ouverte, parfois pendant des mois, avant qu'un audit ou un incident ne la révèle.
- **Convertir chaque transaction au taux du jour au lieu du taux comptable officiel du mois** — utiliser un taux différent pour chaque transaction individuelle, plutôt que le taux comptable officiel fixé une fois par mois, produit une comptabilité incohérente d'une ligne à l'autre, impossible à réconcilier proprement lors d'un audit externe. Le taux comptable officiel mensuel existe précisément pour éviter cette dérive.
- **Utiliser le taux du marché parallèle parce qu'il est "plus avantageux" pour le budget** — dans des contextes où l'écart entre taux officiel et taux parallèle est important, la tentation d'"optimiser" le rapport financier en utilisant le taux le plus favorable est réelle. C'est aussi l'un des signaux les plus immédiatement repérés par un auditeur externe, et selon le pays, cela peut constituer une infraction à la réglementation des changes elle-même — pas seulement un problème comptable interne.
- **Notifier la banque du retrait d'un signataire par un simple appel téléphonique** — sans confirmation écrite et datée de la banque actant la révocation, l'organisation reste juridiquement exposée si l'ancien signataire agit encore sur le compte. Le registre `registre-signataires-procurations-bancaires.docx` existe précisément pour tracer cette preuve écrite, pas seulement la date de la demande.

### Check-list de fin de module

- [ ] Je sais distinguer devise du bailleur, devise de référence terrain et devise locale de paiement sur un budget réel.
- [ ] Je sais où trouver le taux de change officiel applicable dans mon pays d'opération et pourquoi il prime sur le taux du marché parallèle.
- [ ] Je sais expliquer pourquoi une marge de prudence de change doit être intégrée dès la construction du budget, pas ajoutée après coup.
- [ ] Je connais la documentation typiquement requise pour ouvrir un compte bancaire en devise locale pour une ONG.
- [ ] Je sais appliquer le principe de double signature et expliquer pourquoi un signataire unique est toujours un risque de contrôle interne.
- [ ] J'ai mis à jour un registre de signataires et je sais comment révoquer correctement une procuration.
- [ ] Je sais calculer et enregistrer un gain ou une perte de change avec le taux comptable officiel mensuel, à l'aide du template fourni.
- [ ] Je sais rédiger une note claire, sans jargon inutile, expliquant un écart de change à un interlocuteur bailleur non financier.
