# Module 08 — Systèmes d'Information & Reporting Logistique
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**Excel avancé (tableaux croisés dynamiques, RECHERCHEX, Power Query)** — c'est l'outil que vous utiliserez réellement, tous les mois, quel que soit votre poste ou votre organisation. Un **tableau croisé dynamique (TCD)** permet d'agréger des centaines de lignes de données brutes (livraisons, stocks, coûts) en quelques cases lisibles, par site ou par période, sans toucher aux données sources. **RECHERCHEX** (la version moderne de RECHERCHEV) sert à croiser deux tables — par exemple relier une ligne de livraison à la fiche du site correspondant — sans les limites de sens de lecture de l'ancienne fonction. **Power Query** est l'outil à utiliser dès que vos données brutes viennent de plusieurs fichiers ou onglets et doivent être nettoyées et assemblées automatiquement chaque mois plutôt que recopiées à la main : une fois la requête construite, un clic sur "Actualiser" suffit à réintégrer les nouvelles données du mois.

**LINK** — une plateforme de gestion de la chaîne d'approvisionnement utilisée par certaines organisations humanitaires pour tracer une commande depuis son émission jusqu'à sa livraison finale, avec une visibilité partagée entre le terrain et le siège. Comme MIMOSA, son paramétrage et son accès dépendent de l'organisation qui l'a déployée ; retenez surtout qu'il répond au même besoin que votre tableau de bord Excel — donner une vision fiable du pipeline logistique — mais à une échelle organisationnelle plus large et avec une traçabilité imposée par des règles internes plus strictes.

**MIMOSA** — voir Module 08.1 : système de gestion des actifs et des stocks à l'échelle organisationnelle. Il est mentionné ici pour mémoire : vous n'en aurez pas nécessairement l'accès direct, mais vous devez savoir qu'il existe et à quoi il sert si vous rejoignez une organisation qui l'utilise.

**Kobo Toolbox et ODK (Open Data Kit)** — deux outils de collecte de données mobile, gratuits et largement utilisés dans le secteur humanitaire pour construire des formulaires de terrain (suivi de distribution, contrôle de stock physique, évaluation rapide) remplis directement sur smartphone ou tablette, y compris hors connexion. Les données collectées via Kobo ou ODK atterrissent généralement dans un fichier exportable (Excel ou CSV) qui peut ensuite alimenter directement votre tableau de bord — c'est souvent la source la plus fiable de données de terrain, parce qu'elle élimine une étape de ressaisie manuelle.

### Guide pratique étape par étape — "Construire et faire vivre un tableau de bord logistique mensuel"

Ce guide part d'une situation réelle : vous êtes responsable logistique d'une mission avec plusieurs sites, et vous devez produire, chaque mois, un tableau de bord KPI fiable puis un rapport pour le siège — sans y passer trois jours à la fin de chaque mois.

**Étape 1 — Centraliser les données brutes en continu, pas en fin de mois**

Ouvrez le template `tableau-de-bord-kpi-logistique.xlsx` fourni avec ce module. Sa feuille **"Données brutes"** est structurée pour recevoir, ligne par ligne, chaque mouvement logistique : date de commande, date de livraison réelle, site, article, quantités commandée et livrée, statut (Livré / Rupture / Retard), coût total et nombre de bénéficiaires couverts. La règle d'or : cette feuille se remplit au fil de l'eau, à chaque livraison ou incident, jamais en une seule séance en fin de mois. Un tableau de bord rempli rétroactivement de mémoire est un tableau de bord faux.

**Étape 2 — Standardiser la saisie avant de calculer quoi que ce soit**

Avant même de regarder les formules, vérifiez que chaque ligne respecte un format cohérent : mêmes noms de site orthographiés à l'identique d'une ligne à l'autre ("Goma" et pas tantôt "GOMA" tantôt "Goma-Est"), dates au même format, statuts limités aux trois valeurs prévues. Un tableau croisé dynamique ou une requête Power Query ne détecte pas "Goma" et "GOMA " (avec espace) comme le même site — il les traite comme deux sites différents, et votre agrégat devient silencieusement faux sans message d'erreur visible.

**Étape 3 — Lire les KPI déjà calculés dans la feuille "Tableau de bord KPI"**

La feuille **"Tableau de bord KPI"** du template calcule automatiquement, par formule et non en valeur figée, les trois indicateurs vus en théorie :
- Le **taux de rupture de stock global** (formule `COUNTIFS` sur la colonne Statut de la feuille Données brutes) ;
- Le **lead time moyen** en jours (formule `AVERAGEIFS` sur une colonne de délai calculé à partir des dates de commande et de livraison) ;
- Le **coût par bénéficiaire** (division sécurisée avec `IFERROR` pour éviter une erreur de division par zéro si aucun bénéficiaire n'est encore enregistré).

Un tableau récapitulatif par site, construit avec les mêmes logiques de formules (`SUMIFS`, `COUNTIFS`, `AVERAGEIFS`), vous permet de repérer immédiatement le site qui tire la moyenne globale vers le bas — exactement le réflexe de ventilation évoqué dans la partie théorique.

**Étape 4 — Actualiser plutôt que reconstruire**

Si vos données brutes viennent de plusieurs sources (export Kobo Toolbox d'un site, fichier Excel local d'un autre), utilisez Power Query pour construire une requête qui assemble ces sources automatiquement. Chaque mois, un clic sur "Actualiser tout" réintègre les nouvelles lignes sans que vous ayez à reconstruire le fichier. C'est ce qui transforme un tableau de bord "fait une fois" en un outil de pilotage réellement utilisable dans la durée.

**Étape 5 — Interpréter avant de reporter**

Ne recopiez jamais un chiffre brut dans un rapport sans le comparer au mois précédent et au seuil d'alerte que vous vous êtes fixé. Un taux de rupture de 6 % ne veut rien dire seul : est-ce en hausse ou en baisse par rapport au mois dernier ? Est-ce au-dessus du seuil que votre organisation tolère ? C'est cette contextualisation, pas le chiffre isolé, qui doit apparaître dans votre rapport.

**Étape 6 — Rédiger le rapport mensuel avec le gabarit fourni**

Une fois le tableau de bord à jour et interprété, ouvrez le template `gabarit-rapport-logistique-mensuel.docx`. Reportez-y le résumé exécutif, le tableau des KPI du mois (avec leur tendance), l'état de la flotte, de l'entrepôt et de la chaîne du froid, les incidents et risques majeurs du mois, et vos priorités pour le mois suivant. Ce document, structuré et cohérent d'un mois sur l'autre, est ce qui permet au siège de suivre votre mission dans la durée sans avoir à vous relancer pour comprendre où vous en êtes.

**Étape 7 — Diffuser selon le calendrier convenu, et non "quand vous aurez le temps"**

Un rapport mensuel envoyé avec deux semaines de retard perd une grande partie de sa valeur : le siège prend ses décisions de planification et d'allocation de ressources sur un cycle régulier. Convenez d'une échéance fixe avec votre coordination et tenez-la, y compris les mois où l'activité opérationnelle a été plus intense que d'habitude — c'est précisément dans ces mois-là que le rapport a le plus de valeur.
