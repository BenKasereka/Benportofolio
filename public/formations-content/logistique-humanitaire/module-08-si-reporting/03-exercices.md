# Module 08 — Systèmes d'Information & Reporting Logistique
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Le rapport mensuel de Maiduguri, Nigeria"

**Contexte (fictif, inspiré de situations réelles rencontrées dans le Nord-Est du Nigeria)**

Vous êtes coordinateur(trice) logistique pour une ONG internationale intervenant sur quatre sites autour de Maiduguri (État de Borno). Le mois vient de se terminer et vous devez produire, sous 5 jours, le rapport logistique mensuel attendu par le siège. Le problème : personne n'a tenu le tableau de bord à jour pendant le mois. Vous récupérez, en vrac :

- Un export du registre de livraisons du magasin central, avec des dates dans deux formats différents et le nom d'un site orthographié de trois façons différentes ("Maiduguri", "MAIDUGURI Nord", "Maidug. Nord").
- Un carnet papier photographié par le gérant d'un site secondaire, listant 8 livraisons et 2 ruptures de stock sur des intrants nutritionnels, jamais saisies nulle part.
- Un message du chauffeur signalant qu'un des quatre camions est resté immobilisé 9 jours ce mois-ci pour une panne, sans que cela ait été formellement consigné comme incident.
- Un chiffre de coût logistique total du mois transmis par la finance, sans détail par site.

**Votre mission** : à partir de ces données brutes désordonnées et incomplètes, reconstituer un tableau de bord fiable, puis produire le rapport mensuel attendu par le siège dans les délais.

### Exercice noté

1. **Nettoyage et saisie des données** — Dans le template `tableau-de-bord-kpi-logistique.xlsx`, saisissez dans la feuille "Données brutes" les informations reconstituées à partir du cas ci-dessus (y compris les livraisons et ruptures du carnet papier), en appliquant la règle de standardisation vue dans le guide pratique : un seul nom pour le site de Maiduguri, un seul format de date, un statut limité aux trois valeurs prévues (Livré / Rupture / Retard). Listez explicitement, dans une note à part, les informations que vous marqueriez comme "à confirmer" avant diffusion officielle (par exemple : le coût logistique total n'étant pas ventilé par site, comment l'utiliser sans induire le siège en erreur ?).
2. **Lecture et interprétation des KPI** — Une fois les données saisies, lisez les trois KPI calculés automatiquement dans la feuille "Tableau de bord KPI" et le récapitulatif par site. Identifiez lequel des quatre sites tire le taux de rupture global vers le haut, et proposez, en une phrase, l'action corrective correspondante (cf. logique du point de commande vue en théorie).
3. **Rédaction du rapport mensuel** — Complétez le template `gabarit-rapport-logistique-mensuel.docx` en y intégrant explicitement : le résumé exécutif du mois, les KPI et leur tendance, l'incident du camion immobilisé 9 jours (état de flotte), les ruptures d'intrants nutritionnels du site secondaire (risque à signaler), et vos priorités logistiques pour le mois suivant.

**Livrable attendu** : les deux fichiers complétés (tableau de bord et rapport mensuel), plus votre courte note listant les informations "à confirmer".

### Pièges fréquents (25 ans de terrain condensés)

- **Publier un KPI sans point de comparaison** — un taux de rupture de 8 % n'a aucun sens présenté seul. Sans le mois précédent et sans le seuil d'alerte de référence, le lecteur au siège ne peut pas savoir si c'est une amélioration, une dégradation, ou un niveau normal pour ce contexte.
- **Laisser la saisie incohérente polluer les agrégats** — un même site orthographié de trois façons différentes fait apparaître trois lignes distinctes dans un TCD ou une requête Power Query, sans aucun message d'erreur. Le tableau de bord semble fonctionner, mais chaque chiffre qu'il affiche est faux. C'est l'erreur la plus fréquente et la plus difficile à détecter après coup.
- **Attendre la fin du mois pour tout compiler** — reconstituer un mois entier de mouvements à partir de mémoire, de carnets papier et de messages épars (exactement la situation du cas ci-dessus) génère systématiquement des oublis et des doublons. La discipline de saisie continue, vue dans le guide pratique, n'est pas une option de confort : c'est ce qui évite cette situation.
- **Noyer un incident critique dans le format mensuel de routine** — un camion immobilisé 9 jours ou une rupture d'intrants nutritionnels sur un site sont des informations qui, selon leur gravité et leur urgence au moment des faits, auraient parfois mérité un SitRep immédiat plutôt que d'attendre l'échéance du rapport mensuel. Le rapport mensuel documente la tendance ; il ne doit jamais être le seul canal par lequel une urgence remonte au siège.
- **Présenter un coût par bénéficiaire agrégé quand les contextes d'accès diffèrent fortement entre sites** — un site accessible par route et un site nécessitant un transport aérien n'ont pas le même coût structurel. Un chiffre unique, non ventilé et non contextualisé, expose à des questions du siège que vous auriez pu anticiper en le signalant vous-même dans le rapport.

### Check-list de fin de module

- [ ] Je sais expliquer, pour chacun des trois KPI logistiques du module, la décision opérationnelle qu'il doit déclencher.
- [ ] Je sais distinguer un rapport mensuel de routine d'un SitRep, et je sais lequel produire selon la situation.
- [ ] Je sais situer le rôle de MIMOSA et de LINK dans l'écosystème des outils logistiques, sans confondre leur usage avec celui de mon tableau de bord Excel local.
- [ ] J'ai construit un tableau de bord KPI fiable avec le template fourni, à partir de données brutes désordonnées.
- [ ] Je sais identifier une incohérence de saisie susceptible de fausser silencieusement un tableau croisé dynamique ou une requête Power Query.
- [ ] J'ai rédigé un rapport logistique mensuel complet avec le gabarit fourni, incluant KPI, incidents et priorités.
- [ ] Je sais reconnaître, dans un ensemble de faits du mois, ce qui relève du rapport mensuel et ce qui aurait dû faire l'objet d'un SitRep immédiat.

### Pour conclure la formation

Ce module clôt la formation en logistique humanitaire. Le Module 01 vous a présenté le logisticien humanitaire comme **le garant de la faisabilité** — celui qui transforme une décision programme en une réalité opérationnelle sur le terrain. Les systèmes d'information et le reporting vus dans ce dernier module ne sont pas une couche administrative séparée de ce rôle : ils en sont le prolongement direct. Un tableau de bord fiable et un rapport clair sont ce qui permet à votre coordination et à votre siège de continuer à vous faire confiance sur la faisabilité de ce qu'ils décident — mission après mission, rapport après rapport. À l'issue de ce dernier exercice, votre attestation de formation "Logistique Humanitaire" vous sera délivrée, sanctionnant les huit modules parcourus depuis les fondamentaux jusqu'au reporting au siège.
