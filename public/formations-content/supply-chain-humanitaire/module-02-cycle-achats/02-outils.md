# Module 02 — Cycle Complet des Achats — De la RFQ à la PO
## 02. Outils & Guide Pratique

### Outils utilisés dans ce module

**`bon-demande-interne-ir.xlsx`** — le bon de demande interne (Internal Request / IR), point de départ documentaire du cycle d'achat. Il formalise ce que le programme demande (articles, spécificité, quantité) et porte les quatre signatures qui tracent la séparation des tâches dès la première étape : demandeur, validation, responsable Supply, magasinier.

**`fiche-etude-marche-fournisseur.xlsx`** — la fiche de demande d'information envoyée à un fournisseur potentiel lors du sourcing initial (voir le guide pratique d'étude de marché ci-dessous). Elle recueille son identité légale, ses coordonnées, ses données financières, ses modalités de paiement et ses références — sans lui demander le moindre prix ferme.

**`grille-rfq-demande-cotation.xlsx`** — le formulaire de demande de cotation à envoyer aux fournisseurs présélectionnés, avec son propre mode d'emploi intégré (premier onglet). Le fournisseur y indique son prix, ses conditions de paiement et de livraison ; le classeur calcule automatiquement le total de l'offre.

**`cas-pratique-analyse-comparative-offres-cba.xlsx`** — un cas pratique entièrement rempli, à étudier avant de produire votre propre CBA : trois offres fournisseurs anonymisées, avec des anomalies réelles à repérer (prix anormalement bas, non-conformité de capacité, articles non chiffrés, écart entre quantité demandée et quantité réellement cohérente sur le marché, erreur arithmétique dans une cotation). Ce n'est pas un gabarit vierge : pour votre propre CBA, dupliquez sa structure (colonnes Prix unitaire / Prix total / Commentaire par fournisseur) et videz les valeurs d'exemple. C'est ce document rempli que le CPC examine en réunion — jamais les offres brutes une par une.

**`checklist-validation-dossier-achat.xlsx`** — le contrôle documentaire en 13 points qu'applique la Finance avant tout paiement, avec sa matrice d'autorisation (feuille 2) précisant qui doit signer à quelle étape selon le montant de l'achat. Le statut final ("FINANCE READY", "INCOMPLET" ou "BLOQUÉ") se calcule automatiquement à partir des 13 contrôles renseignés.

**`demande-avance-terrain.xlsx`** — le formulaire d'avance professionnelle et son rendu de compte, utile lorsqu'un achat terrain de faible montant (palier 1) doit être réglé en espèces avant qu'une PO ne soit possible. Le rendu d'avance impose de justifier chaque dépense et de restituer tout solde non dépensé.

**`trame-rfp-et-contrat-cadre.docx`** — les deux gabarits de rédaction pour les instruments d'achat complexes : une trame de RFP humanitaire (partie A) et une trame de contrat-cadre (partie B), tous deux détaillés au 01-théorie de ce module.

**`pv-comite-achats-cpc.docx`** — le procès-verbal type de réunion du comité de validation des achats. Il structure la traçabilité exigée par tout bailleur : membres présents, objet examiné, offres comparées, décision motivée, signatures. Un CPC sans PV signé n'a, aux yeux d'un auditeur, tout simplement pas eu lieu.

**Excel / Google Sheets** — au-delà des grilles fournies, ce sont les outils que vous utiliserez pour construire vos propres registres d'ouverture des offres et vos matrices d'autorisation internes quand elles ne sont pas déjà standardisées par votre organisation.

**Prise de contact directe fournisseurs, chambres de commerce locales et répertoires sectoriels** — pour une étude de marché, ce sont vos meilleures sources terrain : la chambre de commerce locale, les associations professionnelles du secteur concerné (transport, BTP, équipement médical...), et le simple bouche-à-oreille entre logisticiens d'autres ONG déjà installées dans la zone valent souvent plus qu'un annuaire en ligne obsolète.

### Guide pratique — Réaliser une étude de marché avant de lancer une consultation

Avant même de choisir entre RFQ, RFP ou ITB, il faut savoir ce que le marché local peut réellement offrir. C'est une activité distincte du lancement d'une consultation — elle la précède et la nourrit. Une étude de marché sert à connaître les fourchettes de prix réalistes (pour ne pas se faire surprendre par une offre "anormalement basse" ou refuser à tort une offre "chère" mais juste), à savoir quels fournisseurs existent réellement dans la zone (au lieu de deviner), et à rédiger une spécification technique défendable plutôt qu'une spécification copiée d'un autre contexte. Sauter cette étape, c'est lancer une consultation à l'aveugle — et souvent devoir la relancer une deuxième fois faute d'offres exploitables.

**Étape 1 — Recherche documentaire de benchmark de prix (desk research)**

Rassemblez les prix pratiqués récemment pour des biens ou services comparables : vos propres achats antérieurs similaires, ceux d'autres projets de votre organisation dans la même zone, les prix partagés en réunion de coordination inter-ONG, et les catalogues fournisseurs publics quand ils existent. Consignez ces prix dans une grille de benchmark (Excel/Google Sheets) avec la date et la source de chaque prix — un prix non daté n'a aucune valeur de référence six mois plus tard.

**Étape 2 — Identification et présélection des fournisseurs potentiels**

Listez les fournisseurs plausibles pour le bien ou le service recherché : recherche auprès de la chambre de commerce locale, des associations professionnelles du secteur, des répertoires sectoriels existants, et des contacts partagés par d'autres logisticiens présents dans la zone. Pour un marché mal connu ou un achat complexe à venir, c'est le moment d'envisager un **AMI (Appel à Manifestation d'Intérêt)** formel pour constituer une liste restreinte qualifiée, plutôt que de se fier à une liste de fournisseurs non vérifiée.

**Étape 3 — Sondage de prix informel auprès des fournisseurs identifiés**

Contactez directement quelques fournisseurs présélectionnés pour obtenir un ordre de grandeur de prix — par téléphone, visite terrain ou email informel. Ce sondage n'engage aucune des deux parties : il ne crée **aucune obligation de dépôt d'offre formelle**, et vous n'êtes pas engagé à consulter le fournisseur plus tard. Ne le présentez jamais comme une consultation officielle. C'est à ce stade qu'intervient `fiche-etude-marche-fournisseur.xlsx` : une simple demande d'information (identité légale, coordonnées, données financières, modalités de paiement, références), sans le moindre prix ferme demandé.

**Étape 4 — Documenter les résultats dans une note d'étude de marché**

Synthétisez en une note courte : la fourchette de prix observée, la liste des fournisseurs identifiés avec leur capacité apparente, et la spécification technique que vous en déduisez comme réaliste pour le contexte local. Cette note accompagne la PR et sert de référence lorsque le CPC examine, plus tard, si les offres reçues sont cohérentes avec le marché réel.

**Frontière avec le Module 04** : cette étude de marché sert à *identifier et présélectionner* des fournisseurs pour un achat donné, via `fiche-etude-marche-fournisseur.xlsx`. La *qualification formelle* (dossier documentaire, screening d'inéligibilité) et l'*évaluation continue* d'un fournisseur retenu relèvent du Module 04, avec son propre outil `fiche-qualification-evaluation-fournisseur.xlsx`. Un fournisseur peut apparaître dans dix études de marché sans jamais être qualifié — l'un ne remplace jamais l'autre.

### Guide pratique étape par étape — "De l'expression du besoin à l'émission de la PO"

Ce guide part d'une situation réelle : un projet a besoin d'un achat significatif, au-dessus du seuil de consultation restreinte. Voici la séquence exacte à suivre, dans l'ordre, pour produire un dossier qui tient face à un audit — y compris quand la pression du terrain pousse à sauter des étapes.

**Étape 1 — Recevoir et valider la PR (Purchase Requisition)**

Le programme exprime son besoin par écrit, avec spécifications techniques précises, quantité, date de livraison souhaitée et ligne budgétaire. Le logisticien vérifie que la ligne budgétaire existe et couvre le montant estimé avant de lancer quoi que ce soit. Une PR verbale ou par message informel n'est pas une PR — c'est une demande de renseignement.

**Étape 2 — Déterminer le seuil et la procédure applicable**

Sur la base du montant total estimé (jamais du montant unitaire, jamais fractionné) — affiné, si vous en disposez, par votre note d'étude de marché — identifiez le palier applicable dans la grille de seuils de votre organisation et choisissez en conséquence RFQ, RFP ou ITB (voir 01-théorie). C'est à cette étape que se joue le premier risque de fractionnement — si le montant estimé dépasse un seuil de peu, ne cherchez pas à le faire "tenir" en dessous.

**Étape 3 — Figer les critères d'évaluation avant tout contact fournisseur**

Rédigez et validez en interne la grille de critères (poids prix, poids technique, spécifications minimales non négociables) **avant** d'envoyer la consultation. C'est une règle non négociable : des critères définis après réception des offres, même de bonne foi, ouvrent la porte à un ajustement — conscient ou non — en faveur d'un fournisseur déjà pressenti.

**Étape 4 — Lancer la consultation**

Envoyez la RFQ/RFP/ITB à un minimum de 3 fournisseurs qualifiés (davantage pour une ITB), avec un délai de réponse identique pour tous et les mêmes spécifications. Documentez la liste des fournisseurs contactés et la date d'envoi — c'est la première pièce du dossier d'archivage.

**Étape 5 — Réceptionner et enregistrer les offres sans les ouvrir isolément**

Chaque offre reçue est enregistrée dans un registre d'ouverture (date, heure, fournisseur, mode de réception) avant d'être examinée. Pour une ITB, l'ouverture se fait en présence d'au moins deux personnes, jamais par un seul agent qui consulterait les offres au fil de leur arrivée — cette pratique, même sans intention frauduleuse, expose à un soupçon de favoritisme difficile à lever après coup.

**Étape 6 — Remplir la grille CBA**

Dupliquez la structure de `cas-pratique-analyse-comparative-offres-cba.xlsx` (colonnes Prix unitaire / Prix total / Commentaire par fournisseur) et saisissez chaque offre reçue : prix, délai, conformité technique, informations de contact du fournisseur. Examinez systématiquement chaque commentaire fournisseur pour repérer un signal de collusion : prix identiques au centime près, mêmes coordonnées de contact, formatage de devis visiblement identique entre deux "fournisseurs" différents sont des signaux à documenter, pas à ignorer parce que le prix le plus bas semble arranger tout le monde — le cas pratique de ce module en donne des exemples concrets à reconnaître.

**Étape 7 — Convoquer le CPC et documenter la décision**

Au-dessus du seuil de consultation restreinte, présentez la CBA au Comité de Validation des Achats. Le comité examine, discute, et documente sa décision — y compris la justification du rejet des offres écartées — dans `pv-comite-achats-cpc.docx`. Un comité qui se contente d'entériner le rang calculé automatiquement sans discussion n'a pas rempli sa fonction : la CBA est une aide à la décision, pas une décision automatique, surtout en présence d'un signal de collusion.

**Étape 8 — Négocier et documenter le PV de Négociation**

Une fois l'offre retenue identifiée par le CPC, il reste souvent une phase de négociation avant signature — prix final, délais, conditions de paiement, modalités de livraison. Cette négociation se documente toujours dans un **procès-verbal de négociation**, qui couvre : les **participants** (côté organisation et côté fournisseur), les **points négociés** un par un, les **concessions obtenues de part et d'autre**, l'**accord final** tel qu'il sera repris dans la PO ou le contrat, et les **signatures** des personnes présentes.

Documenter ce PV est une exigence de conformité et d'audit au même titre que le PV de CPC : sans lui, un auditeur ne peut pas distinguer une négociation menée dans l'intérêt du projet d'un ajustement de dernière minute décidé seul par un agent en contact direct avec le fournisseur. La méthode de négociation elle-même — préparer ses objectifs, structurer les concessions, reconnaître les tactiques du fournisseur en face — est traitée en détail au **Module 03 de cette formation** ("Techniques de Négociation en Profondeur") ; ce module-ci se limite à documenter le résultat obtenu.

**Étape 9 — Émettre la Purchase Order (PO)**

La PO référence explicitement la PR d'origine, le PV du CPC et, le cas échéant, le PV de négociation. Elle est signée selon la matrice d'autorisation en vigueur (jamais par la seule personne qui a mené la négociation) et communiquée au fournisseur retenu avant toute réception de biens ou de services.

**Étape 10 — Réceptionner et effectuer le rapprochement à 3 (3-way match)**

À la livraison, un bon de réception (GRN) est établi et comparé à la PO et à la facture fournisseur avant tout paiement. Un écart entre les trois documents — quantité, prix ou spécification — doit être résolu avant paiement, jamais après.

**Étape 11 — Constituer et archiver le dossier complet**

Rassemblez dans un seul dossier, physique ou numérique, dans l'ordre chronologique : la PR, la preuve d'envoi de la consultation, les offres reçues, la grille CBA complétée, le PV du CPC, le PV de négociation le cas échéant, la PO signée, le GRN et la facture. C'est ce dossier complet — pas seulement la PO — qu'un auditeur bailleur demande en premier lieu. Un dossier incomplet, même pour un achat parfaitement honnête, est traité comme une non-conformité en audit.
