# Module 08 — KPIs, Reporting & Tableau de Bord Supply Chain
## 03. Étude de Cas, Exercice & Check-list

### Étude de cas — "Fin de mois à Maiduguri, Nigeria"

**Contexte (fictif, inspiré de situations réelles rencontrées dans le Nord-Est du Nigeria)**

Vous êtes Supply Chain Manager pour une ONG internationale répondant à la crise humanitaire du bassin du lac Tchad, basée à Maiduguri. Nous sommes le dernier jour du mois. Deux échéances tombent le même jour :

- Le desk siège attend, comme chaque mois, le tableau de bord KPI complet avec vos recommandations opérationnelles pour le mois suivant.
- Un bailleur institutionnel majeur, qui finance 60% de vos opérations d'achat sur ce projet, attend son rapport de conformité trimestriel — la même semaine où une mission d'audit est annoncée pour le trimestre suivant.

Vous disposez des mêmes données sous-jacentes pour produire les deux : les registres d'achats du cycle RFQ/PO (Module 02), le fichier de qualification et d'évaluation de vos fournisseurs (Module 03), les mouvements et ruptures de stock de vos deux entrepôts (Module 04), les rapports d'incidents de distribution du mois (Module 05), les délais de transit et de dédouanement de deux commandes internationales retardées (Module 06), et l'extraction Power Query de votre ERP (Module 07).

L'analyse de vos données fait ressortir trois faits marquants du mois : le taux de rupture de stock est passé de 4% à 11% sur la catégorie "kits d'hygiène", concentré sur l'entrepôt secondaire ; le délai d'approvisionnement moyen est passé de 24 à 38 jours sur les commandes internationales, à cause d'un retard de dédouanement documenté ; et le taux de conformité achats est resté stable à 96%, avec deux dossiers sur cinquante marqués "dérogation d'urgence" correctement justifiée et archivée.

**Votre mission** : à partir de ces mêmes données, produire les deux livrables ci-dessous avant la fin de journée.

### Exercice noté

1. **Construction du tableau de bord** — Complétez le template `tableau-de-bord-kpi-supply-chain.xlsx` avec des données que vous simulez à partir du contexte ci-dessus (inventez des lignes de données brutes cohérentes avec les trois faits marquants décrits), et vérifiez que les 3 KPIs se calculent correctement par formules, sans aucune valeur codée en dur.
2. **Rapport interne siège** — Rédigez la section correspondante du gabarit `gabarit-rapport-bailleur-vs-rapport-siege.docx`, en expliquant la cause probable de chaque écart (entrepôt secondaire, dédouanement) et en proposant une action corrective concrète pour le mois suivant.
3. **Rapport de conformité bailleur** — Rédigez la section correspondante du même gabarit, en cadrant explicitement la conformité (justification des deux dérogations d'urgence, absence d'impact sur le taux global de conformité) sans reproduire le détail opérationnel interne du rapport siège.

**Livrable attendu** : le tableau de bord complété et les deux sections du rapport, cohérents entre eux mais clairement différenciés dans leur structure et leur ton.

### Pièges fréquents (25 ans de terrain condensés)

- **Publier un KPI sans tendance ni contexte historique** — un taux de conformité de 96% affiché seul ne dit rien. Est-ce stable, en hausse, en baisse par rapport aux trois derniers mois ? Un chiffre isolé de son historique est une invitation à mal l'interpréter.
- **Envoyer le même rapport aux deux audiences** — un rapport bailleur sans cadrage de conformité explicite ne répond pas à la question que le bailleur pose, même si les chiffres sont exacts. À l'inverse, un rapport siège noyé dans du jargon de conformité (références de clauses contractuelles, formulations d'audit) empêche le coordinateur de voir rapidement où intervenir cette semaine.
- **Présenter des données sans recommandation claire ("so what")** — un coordinateur débordé qui reçoit un tableau de chiffres sans proposition d'action passera à côté du signal, ou pire, perdra confiance dans l'utilité même du tableau de bord.
- **Confondre "en rupture aujourd'hui" et "a connu une rupture ce mois-ci"** — ce sont deux définitions différentes du taux de rupture, et les mélanger dans le même tableau de bord d'un mois à l'autre rend toute comparaison historique trompeuse. Fixez une définition unique dès le premier mois et ne la changez plus.
- **Laisser le tableau de bord dépendre d'une seule personne** — un fichier que seul son créateur sait mettre à jour ne survit pas à son départ en R&R ou à son remplacement. Documentez la méthode de mise à jour directement dans le fichier, pas seulement dans votre tête.

### Check-list de fin de module

- [ ] Je sais définir et calculer correctement les 3 KPIs SCM clés avec leur formule exacte.
- [ ] Je sais expliquer, pour chaque KPI, au moins une cause probable de dérive et l'action qu'elle doit déclencher.
- [ ] J'ai construit un tableau de bord Excel où les 3 KPIs se calculent par formules, sans valeur codée en dur.
- [ ] Je sais lire une synthèse par catégorie et par période pour détecter un problème localisé caché dans une moyenne globale stable.
- [ ] Je sais expliquer au moins 3 différences structurelles entre un rapport bailleur et un rapport siège.
- [ ] J'ai rédigé les deux versions d'un rapport à partir des mêmes données, sans copier-coller de l'une vers l'autre.
- [ ] Je sais formuler une recommandation "so what" pour chaque KPI présenté à un coordinateur.

### Pour conclure ce parcours

Le Module 01 de cette formation vous a positionné comme le garant de la faisabilité de la chaîne humanitaire — celui qui rend possible ce que le programme décide. Ce dernier module referme la boucle : un Supply Chain Manager qui maîtrise les achats, les fournisseurs, les stocks, la distribution, le transport et l'ERP, mais qui ne sait pas transformer ces données en décisions lisibles pour un coordinateur ou en redevabilité crédible pour un bailleur, reste un exécutant très compétent — pas encore un manager. C'est cette dernière compétence, souvent la moins enseignée, qui distingue un profil senior sur le marché humanitaire.

Vous avez maintenant parcouru l'intégralité du programme de la Formation en Supply Chain Management Humanitaire. Votre attestation de formation certifie cette maîtrise complète, du cycle d'achat jusqu'au pilotage par les données — la base sur laquelle repose désormais votre pratique de terrain.
