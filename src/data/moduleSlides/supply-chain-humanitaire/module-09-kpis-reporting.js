// Module 09 — KPIs, Reporting & Tableau de Bord Supply Chain
// Dernier module de la formation. Référence pas à pas construite à partir du
// contenu source (01-theorie.md, 02-outils.md, 03-exercices.md, 04-templates/) :
// chaque procédure (définir les KPI, alimenter et vérifier le tableau de bord
// Excel, interpréter et décider, rapport siège, rapport bailleur, SITREP,
// présentation au coordinateur, narrative annuelle, miroir Power BI,
// pérennisation) est déroulée étape par étape (une étape par écran),
// appliquée à un cas fil rouge chiffré, puis résolue intégralement et
// transposée en exercice. Les diapositives trop chargées sont découpées
// automatiquement en « (suite) » par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'cover',
    title: 'KPIs, Reporting & Tableau de Bord Supply Chain',
    hook: "En quatre jours de clôture mensuelle, vous allez produire ce que votre coordinateur, votre siège et votre bailleur attendent d'un Supply Chain Manager : un tableau de bord KPI qui se calcule par formules (template Excel), une fiche de décisions, deux rapports distincts bâtis sur les mêmes chiffres (template Word), un SITREP mensuel, une présentation « so what » à votre coordinateur et la narrative de planification annuelle. Chaque étape est déroulée ici, cellule par cellule et champ par champ, sur un cas de terrain chiffré.",
  },
  {
    type: 'objectives',
    items: [
      "Définir et calculer les 3 KPI supply chain (taux de rupture de stock, délai d'approvisionnement, taux de conformité achats) avec leur formule exacte, leur définition figée et leurs seuils d'alerte, en produisant une fiche KPI validée par votre coordination.",
      "Construire le tableau de bord Excel (tableau-de-bord-kpi-supply-chain.xlsx) à partir des registres d'achats et des mouvements de stock : données contrôlées, 3 KPI calculés par formules sans aucune valeur codée en dur, synthèse catégorie × période à jour.",
      "Lire la synthèse par catégorie, par période et par zone pour localiser un problème masqué par une moyenne globale, et décomposer un délai en sous-délais, en produisant une note d'analyse d'une page.",
      "Écrire, pour chaque KPI qui dérive, la décision qu'il déclenche (constat, cause prouvée, action, responsable, échéance), en produisant la fiche de décisions du mois.",
      "Rédiger à partir des mêmes chiffres un rapport interne siège et un rapport de conformité bailleur (Parties A et B du gabarit .docx), puis le SITREP mensuel, sans copier-coller de l'un vers l'autre.",
      "Présenter les résultats à un coordinateur avec une recommandation « so what » par KPI, et rédiger la narrative de planification annuelle (template .docx) pour cadrer le dialogue budgétaire avec le siège.",
      "Pérenniser le dispositif : mode d'emploi intégré au fichier, calendrier de clôture, remplaçant formé, et miroir Power BI lorsque le volume de données le justifie.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une lecture : c'est la clôture mensuelle d'un Supply Chain Manager, découpée en 11 procédures. À la fin, vous aurez en main dix livrables réutilisables tels quels sur votre propre mission.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé (vue dans les modules 01 à 08), qui clôture son mois d'août 2026 à Gogrial (État du Warrap, Soudan du Sud). Le cas du Nigeria (« Fin de mois à Maiduguri ») vous est donné en exercice noté, avec ses éléments de correction.",
    ],
    bullets: [
      "L1 — La fiche KPI : formule, numérateur, dénominateur, source, seuils vert / orange / rouge et décision rattachée à chacun des 3 KPI.",
      "L2 — Le tableau de bord complété (tableau-de-bord-kpi-supply-chain.xlsx) : données contrôlées, 3 KPI par formules, synthèse par catégorie et par période.",
      "L3 — La note d'analyse d'une page : problème localisé (catégorie, zone) et décomposition du délai en sous-délais.",
      "L4 — La fiche de décisions du mois : constat, cause prouvée, action, responsable, échéance, pour chaque KPI qui dérive.",
      "L5 et L6 — Les Parties A (rapport interne siège) et B (rapport de conformité bailleur) de gabarit-rapport-bailleur-vs-rapport-siege.docx.",
      "L7 — Le SITREP mensuel (gabarit-sitrep-mensuel-supply-chain.docx), cinq domaines.",
      "L8 — La présentation au coordinateur : une diapositive « so what » par KPI qui dérive, et le compte rendu de décisions.",
      "L9 — La narrative de planification annuelle (gabarit-narrative-planification-annuelle-supply-chain.docx).",
      "L10 — Le miroir Power BI (optionnel) et le mode d'emploi de mise à jour intégré au fichier, testé par un remplaçant.",
    ],
    tip: "Ouvrez dès maintenant un dossier « Reporting SCM » avec un sous-dossier par mois (2026-08, etc.) et, dedans, un dossier « SOURCE » pour les données brutes reçues. Un chiffre que vous ne savez pas retracer jusqu'à sa source n'est pas défendable devant un auditeur.",
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : Kerowa Santé clôture son mois d\'août 2026',
    body: [
      "Rappel : Kerowa Santé (ONG fictive) mène depuis le 1er décembre 2025 un projet médical et nutritionnel de 12 mois à Gogrial (État du Warrap, Soudan du Sud), budget 1 200 000 EUR dont 85 % financés par ECHO. Vous êtes Supply Chain Manager depuis le 2 mars 2026. Depuis le 1er juin, un point de stockage avancé à Kuajok (« entrepôt secondaire ») alimente la clinique mobile Nord ; l'entrepôt principal reste le hangar de 300 m² de Gogrial.",
      "Nous sommes le lundi 31 août 2026, dernier jour du mois. Deux échéances approchent : le desk siège attend le tableau de bord KPI d'août avec vos recommandations pour le mercredi 2 septembre ; ECHO attend le vendredi 4 septembre le rapport de conformité du trimestre juin–août, alors qu'une mission d'audit est annoncée pour octobre.",
    ],
    table: {
      columns: ['Personne (fictive)', 'Fonction', 'Rôle dans cette clôture'],
      rows: [
        ['Grace M.', 'Coordinatrice pays (Juba)', 'Valide le rapport bailleur, relation avec ECHO'],
        ['Daniel O.', 'Coordinateur terrain', 'Valide le rapport siège, destinataire de la présentation'],
        ['Hélène D.', 'Desk supply au siège', 'Attend le tableau de bord et les recommandations'],
        ['Peter A.', 'Logisticien terrain', 'Fiches de stock, entrepôts de Gogrial et de Kuajok'],
        ['Joseph K.', 'Administration-finance', 'Paiements, rapprochement des factures, archivage des dérogations'],
        ['Dr Samuel T.', 'Coordinateur médical', 'Demandeur des médicaments et du matériel médical, autorisations d\'importation'],
      ],
    },
    example: {
      title: 'Les trois phrases entendues le lundi 31 août',
      lines: [
        "1. Peter A. : « Les kits d'hygiène ont manqué à Kuajok deux fois ce mois-ci. »",
        "2. Dr Samuel T. : « Les gants sont arrivés très en retard : le Ministère avait renvoyé notre dossier d'importation pour des certificats d'analyse manquants. »",
        "3. Joseph K. : « Deux achats d'urgence ont été payés avec une seule offre. Les notes de dérogation sont signées, mais je ne sais pas comment on les compte dans la conformité. »",
      ],
    },
    pitfall: "Les personnes, l'ONG et tous les chiffres sont fictifs et donnés à titre d'exemple : ne réutilisez jamais ces valeurs telles quelles sur votre mission.",
  },
  {
    type: 'concept',
    title: 'Votre cycle de clôture : quatre jours, onze procédures',
    body: "Le guide de la source déroule 7 étapes sur 4 jours. Ce module les détaille en procédures et y ajoute le SITREP, la narrative annuelle, le miroir Power BI et la pérennisation. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    table: {
      columns: ['Quand', 'Procédure', 'Livrable produit', 'Temps'],
      rows: [
        ['Avant le jour 1 (une fois)', 'P1 — Définir les 3 KPI, la période et les seuils', 'L1 Fiche KPI', '½ jour'],
        ['Jour 1 (lundi 31/08)', 'P2 — Alimenter le tableau de bord', 'L2 Template rempli', '1 jour'],
        ['Jour 1–2', 'P3 — Vérifier et lire les KPI', 'L2 vérifié, L3 Note d\'analyse', '½ à 1 jour'],
        ['Jour 2–3', 'P4 — Interpréter et décider', 'L4 Fiche de décisions', '½ jour'],
        ['Jour 3 (mercredi 02/09)', 'P5 — Rapport siège / P6 — Rapport bailleur / P7 — SITREP', 'L5, L6, L7', '1 jour'],
        ['Jour 3–4', 'P8 — Présenter au coordinateur', 'L8 Présentation + compte rendu', '½ jour'],
        ['Une fois par an (novembre)', 'P9 — Narrative de planification annuelle', 'L9 Narrative', '1 à 2 jours'],
        ['Selon le besoin', 'P10 — Miroir Power BI / P11 — Pérenniser', 'L10 Mode d\'emploi + miroir', 'selon volume'],
      ],
    },
    tip: "Inscrivez ces jours dans l'agenda partagé de la mission dès le 25 du mois. Le jour 1 dépend des données des autres (finance, logisticien, ERP) : demandez-les par écrit avec une date.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Un KPI n\'est pas une statistique, c\'est un déclencheur de décision',
    body: [
      "L'erreur la plus répandue chez les Supply Chain Officers juniors : produire le chiffre, l'afficher dans un rapport et passer au mois suivant. Un taux de rupture de 12 % n'a aucune valeur en soi ; ce qui a de la valeur, c'est ce que ce chiffre vous oblige à faire ensuite.",
      "Un logisticien senior lit un KPI comme un médecin lit une fièvre : le chiffre seul ne dit rien, c'est son évolution et son contexte qui orientent l'action. Un délai qui passe de 21 à 35 jours déclenche une question : fournisseur retenu (Module 04), validation des bons de commande (Module 02) ou transport et dédouanement (Module 07) ?",
    ],
    table: {
      columns: ['Niveau de lecture', 'La question à poser', 'Où trouver la réponse'],
      rows: [
        ['1. Le chiffre', 'Quelle est la valeur, sur combien de lignes (n sur N) ?', 'Tableau de bord, cartes et synthèse'],
        ['2. La tendance', 'Monte-t-il, baisse-t-il, est-il stable depuis quand ?', 'Trois derniers mois côte à côte'],
        ['3. L\'écart au seuil', 'Vert, orange ou rouge selon la fiche KPI ?', 'Fiche KPI (L1)'],
        ['4. La cause', 'Quel maillon de la chaîne explique l\'écart, avec quelle preuve ?', 'Registres, fiches de stock, dossiers d\'achat'],
        ['5. La décision', 'Qui fait quoi, pour quand, et comment saura-t-on que ça marche ?', 'Fiche de décisions (L4)'],
      ],
    },
    highlight: "Le KPI vous dit qu'il y a un problème. Votre travail de Supply Chain Manager est de remonter jusqu'à la cause, pas de vous arrêter au symptôme.",
  },
  {
    type: 'concept',
    title: 'KPI 1 — Le taux de rupture de stock (stock-out rate)',
    body: [
      "Il mesure la proportion d'articles pour lesquels le stock disponible était insuffisant au moment où il fallait le distribuer. Formule utilisable sur le terrain : Taux de rupture = (nombre de lignes d'article en rupture sur la période) ÷ (nombre total de lignes d'article suivies sur la période) × 100.",
      "Un taux qui grimpe est rarement un problème d'entrepôt en soi : c'est un seuil de réapprovisionnement mal calibré, un délai fournisseur sous-estimé, ou une consommation programme qui a changé sans que la logistique le sache (Module 05).",
    ],
    example: {
      title: 'Kerowa — la même formule, trois lectures',
      lines: [
        "Kits d'hygiène, juillet : 1 ligne en rupture sur 24 suivies → 1 ÷ 24 × 100 = 4,2 %.",
        "Kits d'hygiène, août : 2 ÷ 18 × 100 = 11,1 %.",
        "Toutes catégories, août : 3 lignes en rupture sur 50 → 6,0 % (kits d'hygiène : 2 ; matériel médical : 1).",
        "Toujours écrire « 2 sur 18 » à côté du pourcentage : sur 18 lignes, une seule ligne de plus ou de moins fait varier le taux de 5,6 points.",
      ],
    },
    highlight: "Un taux de 0 % n'est pas automatiquement une bonne nouvelle : il peut signaler un surstockage coûteux, avec un risque de péremption (Module 05).",
    pitfall: "Confondre « en rupture aujourd'hui » et « a connu une rupture ce mois-ci ». Le template mesure la seconde (colonne « En rupture ce mois »). Fixez une définition le premier mois et ne la changez plus.",
  },
  {
    type: 'concept',
    title: 'KPI 2 — Le délai d\'approvisionnement (procurement lead time)',
    body: [
      "Il mesure le temps réel écoulé entre le déclenchement d'une demande d'achat et la réception effective de la marchandise en entrepôt. Formule : Délai = date de réception en entrepôt − date d'émission de la demande d'achat, en jours calendaires, moyenné sur toutes les commandes de la période (Modules 02 et 07).",
      "Un délai qui augmente doit être décomposé avant d'être commenté : est-ce le temps de validation interne qui s'allonge, le fournisseur qui livre en retard, ou le transit douanier qui bloque ? À défaut de sous-délais, le délai global reste le point de départ obligatoire de l'investigation.",
    ],
    example: {
      title: 'Kerowa — un délai, une ligne, puis la moyenne',
      lines: [
        "Une ligne de médicaments essentiels : demande d'achat le 29/06/2026, réception à Gogrial le 06/08/2026 → 06/08 − 29/06 = 38 jours.",
        "Moyenne du mois : (somme des délais de toutes les lignes reçues en août) ÷ 50 lignes = 25,4 jours.",
        "Seules les commandes reçues comptent : une ligne sans date de réception n'a pas de délai et reste hors du tableau.",
      ],
    },
    tip: "Choisissez et écrivez une convention de période : ici, le mois de réception en entrepôt. Elle garantit que chaque ligne du mois a ses deux dates.",
  },
  {
    type: 'concept',
    title: 'KPI 3 — Le taux de conformité achats (procurement compliance rate)',
    body: [
      "Il mesure la proportion des achats de la période qui respectent intégralement la procédure requise : seuils d'autorisation respectés, nombre d'offres conforme au montant, vérification d'inéligibilité effectuée, dossier complet et archivé. Formule : Taux de conformité = (dossiers d'achat conformes) ÷ (total des dossiers d'achat audités) × 100.",
      "C'est le chiffre que les bailleurs regardent en premier lors d'un audit, car il mesure le risque fiduciaire de l'organisation, pas sa performance opérationnelle (Modules 02 et 04).",
    ],
    example: {
      title: 'Kerowa — trois états, pas deux',
      lines: [
        "Trimestre juin–août : 150 dossiers audités.",
        "144 conformes → 144 ÷ 150 × 100 = 96,0 %.",
        "6 dérogations d'urgence justifiées et archivées → 4,0 % (comptées hors « Conforme » dans le template).",
        "0 dossier non conforme sans justification → 0,0 %.",
      ],
    },
    highlight: "Un taux de conformité qui baisse pendant une urgence n'est pas nécessairement une faute, car les procédures prévoient des dérogations documentées. Mais chaque dérogation doit être tracée, sinon le chiffre devient indéfendable devant un auditeur.",
    pitfall: "Le template compte comme « Conforme » uniquement le libellé exact « Conforme ». Une dérogation justifiée fait donc baisser le taux affiché : expliquez-le toujours dans le rapport.",
  },
  {
    type: 'comparison-table',
    title: 'Les 3 KPI en un coup d\'œil',
    columns: ['KPI', 'Formule', 'Causes fréquentes d\'une dérive', 'Première question', 'Décision typique'],
    rows: [
      ['Taux de rupture de stock', 'Lignes en rupture ÷ lignes suivies × 100', 'Seuil de réappro trop bas, délai fournisseur sous-estimé, consommation programme en hausse', 'Le seuil min tient-il compte du délai réel et de la consommation actuelle ?', 'Recalibrer min / max, passer commande, sécuriser un stock tampon'],
      ['Délai d\'approvisionnement', 'Date de réception − date de demande, en moyenne, en jours calendaires', 'Validation interne lente, fournisseur en retard, dédouanement ou transport bloqué', 'Quel sous-délai a augmenté : validation, fournisseur, douane, transport ?', 'Relancer l\'étape en cause, changer de fournisseur ou de procédure'],
      ['Taux de conformité achats', 'Dossiers conformes ÷ dossiers audités × 100', 'Offres manquantes, seuils mal appliqués, dossiers incomplets, urgences mal tracées', 'Les écarts sont-ils justifiés par une dérogation signée et archivée ?', 'Contrôle avant paiement, rappel de procédure, régularisation datée'],
    ],
  },
  {
    type: 'concept',
    title: 'Un KPI sans tendance ni contexte ne dit rien',
    body: [
      "Un taux de conformité de 96 % affiché seul ne dit rien : est-ce stable, en hausse, en baisse par rapport aux trois derniers mois ? Un chiffre isolé de son historique est une invitation à mal l'interpréter. Présentez toujours le mois courant à côté des deux mois précédents, avec n sur N et le seuil.",
    ],
    table: {
      columns: ['KPI (Kerowa)', 'Juin', 'Juillet', 'Août', 'Lecture'],
      rows: [
        ['Rupture globale', '2,0 % (1/50)', '2,0 % (1/50)', '6,0 % (3/50)', 'Triplement en août'],
        ['Délai global (jours)', '17,4', '18,0', '25,4', '+7,4 jours en un mois'],
        ['Délai catégories importées (jours)', '22,6', '24,0', '38,0', '+14 jours en un mois'],
        ['Conformité achats', '96,0 % (48/50)', '96,0 % (48/50)', '96,0 % (48/50)', 'Stable, 2 dérogations par mois'],
      ],
    },
    tip: "Gardez chaque mois une copie datée du tableau de bord : c'est ce qui vous permet de comparer à l'identique le mois suivant, sans reconstituer l'historique.",
  },
  {
    type: 'concept',
    title: 'Une moyenne globale peut masquer un problème localisé',
    body: [
      "Un taux de rupture global stable peut cacher une rupture chronique sur une seule catégorie critique ; un délai moyen peut décrire une réalité qui n'existe pour aucune commande. Seule la lecture par catégorie, par période et par zone révèle où intervenir.",
    ],
    table: {
      columns: ['Vue — août 2026', 'Rupture', 'Délai moyen', 'Lecture'],
      rows: [
        ['Global (50 lignes)', '6,0 % (3/50)', '25,4 jours', 'Alerte, mais où ?'],
        ['Catégories importées (ME + MM)', '4,5 % (1/22)', '38,0 jours', 'Le retard est là : douane et autorisations'],
        ['Catégories locales (KH + NU)', '7,1 % (2/28)', '15,6 jours', 'Délai stable, ruptures concentrées'],
        ['Kits d\'hygiène — Gogrial', '0 % (0/12)', '14,5 jours', 'Aucun problème'],
        ['Kits d\'hygiène — Kuajok', '33,3 % (2/6)', '16,3 jours', 'Tout le problème de rupture est ici'],
      ],
    },
    highlight: "Toujours croiser le chiffre global avec la synthèse par catégorie et par période avant de conclure : le global dit qu'il y a un problème, la synthèse dit où il est.",
  },
  {
    type: 'comparison-table',
    title: 'Trois documents, trois lecteurs : siège, bailleur, SITREP',
    columns: ['Document', 'Lecteur et question', 'Rythme', 'Ton et niveau de détail'],
    rows: [
      ['Rapport interne siège (Partie A du gabarit)', 'Coordinateur pays, desk siège : où dois-je intervenir cette semaine ?', 'Mensuel', 'Opérationnel, jargon interne toléré, détail par catégorie et entrepôt, actions avec responsable et échéance'],
      ['Rapport de conformité bailleur (Partie B)', 'Bailleur institutionnel : l\'argent confié a-t-il été géré selon les règles convenues ?', 'Trimestriel, parfois semestriel', 'Redevabilité, références aux clauses de l\'accord, justification de tout écart, pas de codes internes ni de jargon logistique'],
      ['SITREP mensuel (gabarit dédié)', 'Coordination et autres départements : où en est la supply chain ce mois-ci ?', 'Mensuel, plus court', 'Tactique : un point d\'avancement par domaine (stocks, RH, achats, transport, finance), sans analyse KPI complète'],
    ],
  },
  {
    type: 'concept',
    title: 'Écrire pour un bailleur : cadrer la conformité, traduire le jargon',
    body: [
      "Un bailleur qui reçoit un rapport noyé dans l'argot logistique interne (codes d'entrepôt, sigles de l'ERP) ne peut pas l'exploiter, et cela nuit à la crédibilité de l'organisation autant qu'un rapport incomplet. Inversement, un rapport siège noyé dans des références de clauses empêche le coordinateur de voir où intervenir.",
      "Un paragraphe bailleur contient toujours quatre éléments : la règle de référence (clause), le constat chiffré, la justification documentée de chaque écart avec la référence du dossier archivé, et l'effet sur le taux global.",
    ],
    table: {
      columns: ['Langage interne (siège)', 'Langage bailleur (traduction)'],
      rows: [
        ['Rupture des kits à Kuajok, seuil min 150', 'Indisponibilité temporaire d\'articles d\'hygiène sur un site de stockage secondaire'],
        ['GRN, IR, DN, FEFO', 'Bon de réception, demande interne, bon de livraison, rotation des lots par péremption'],
        ['Dérogation D-2026-08-02', 'Procédure d\'urgence prévue à l\'article de la convention, dossier archivé sous la référence indiquée'],
        ['Blocage douane Juba, certificats d\'analyse', 'Retard de formalités d\'importation hors de notre contrôle, régularisé et documenté'],
      ],
    },
    pitfall: "Envoyer le même rapport aux deux audiences : un rapport bailleur sans cadrage de conformité explicite ne répond pas à la question posée, même si les chiffres sont exacts.",
  },
  {
    type: 'comparison-table',
    title: 'Excel ou Power BI : quand choisir quoi',
    columns: ['Critère', 'Excel (centre de ce module)', 'Power BI'],
    rows: [
      ['Volume de données', 'Quelques centaines à quelques milliers de lignes par mois', 'Dizaines de milliers de lignes, plusieurs missions'],
      ['Source des données', 'Extraction ERP propre, collée ou chargée par Power Query', 'Connexion directe aux bases ERP, actualisation automatique'],
      ['Compétence disponible', 'Formules conditionnelles, tableaux croisés, mise en forme conditionnelle', 'Équipe data capable de maintenir le modèle et les mesures DAX'],
      ['Diffusion', 'Fichier et PDF envoyés par e-mail', 'Rapport partagé en ligne, filtres libres pour chaque lecteur'],
      ['Verdict terrain', 'Couvre entièrement le besoin de l\'immense majorité des postes', 'Pertinent pour une organisation à équipe data mature'],
    ],
  },
  {
    type: 'concept',
    title: 'Fixez les règles du jeu avant le premier chiffre',
    body: "Un tableau de bord n'est comparable d'un mois à l'autre que si les règles ne bougent jamais. Les cinq règles ci-dessous se décident une fois, s'écrivent dans la fiche KPI et ne se modifient qu'avec une date de changement et une explication.",
    bullets: [
      "Définition unique : par exemple « rupture = au moins un jour sans stock pendant le mois ».",
      "Périmètre : quelles catégories, quels entrepôts, quelles lignes sont suivies.",
      "Période : mois de réception en entrepôt, dates en jours calendaires.",
      "Source : quel registre ou quelle extraction ERP alimente quelle colonne, et qui en est responsable.",
      "Seuils : vert, orange, rouge, fixés avant de connaître le chiffre du mois.",
    ],
    example: {
      title: 'Kerowa — ce que la fiche KPI interdit',
      lines: [
        "Passer en juillet de « rupture ce mois » à « rupture le dernier jour du mois » sans le signaler : la comparaison avec juin devient trompeuse.",
        "Ajouter en août les achats non encore reçus au délai moyen : le délai est mesuré à la réception, pas à la commande.",
      ],
    },
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'KPI (Key Performance Indicator)', definition: "Un indicateur choisi précisément parce qu'il doit déclencher une décision, pas n'importe quel chiffre disponible." },
      { term: 'Taux de rupture (stock-out rate)', definition: "Lignes d'article en rupture ÷ lignes d'article suivies × 100, avec une définition unique de la rupture (« ce mois » ou « aujourd'hui »)." },
      { term: 'Lead time (délai d\'approvisionnement)', definition: "Délai réel entre le déclenchement d'un besoin et sa satisfaction effective, mesuré en jours calendaires sauf mention contraire." },
      { term: 'Compliance rate (taux de conformité)', definition: "Part des dossiers d'achat qui respectent intégralement la procédure ; central dans tout audit bailleur." },
      { term: 'Dérogation d\'urgence', definition: "Écart de procédure autorisé et documenté en situation d'urgence : note datée, signée au bon niveau, archivée dans le dossier d'achat." },
      { term: '« So what »', definition: "La question que doit toujours anticiper un tableau de bord : au-delà du chiffre, quelle décision recommandez-vous ?" },
      { term: 'SITREP (situation report)', definition: "Rapport de situation mensuel, plus court et plus fréquent que le rapport bailleur, limité à un point par domaine (stocks, RH, achats, transport, finance)." },
      { term: 'Donor compliance report', definition: "Rapport de conformité adressé au bailleur : références aux clauses de l'accord de financement, justification des écarts, narratif de redevabilité." },
      { term: 'Sous-délai', definition: "Partie du délai global imputable à une étape (validation, fournisseur, transit, douane, transport) ; sert à localiser la cause d'un retard." },
      { term: 'Power Query', definition: "Outil d'Excel qui extrait et transforme des données d'un ERP ou d'un fichier de façon répétable, sans ressaisie manuelle (Module 08)." },
      { term: 'Mesure DAX', definition: "Formule de Power BI qui calcule un indicateur (par exemple un taux) et se recalcule selon les filtres du rapport." },
      { term: 'Narrative de planification annuelle', definition: "Document annuel du département Supply Chain : contexte et risques, bilan, objectifs, ressources humaines, chronogramme." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — DÉFINIR LES 3 KPI ET CADRER LES RÈGLES DU JEU
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 3',
    title: 'Écrire la fiche de définition de chaque KPI',
    intro: "La fiche KPI est un document de travail que vous créez vous-même (le module ne fournit pas de template pour elle) : une page qui fige ce que vous mesurez. Entrées : les trois formules de ce module, les colonnes G, H et I de l'onglet « Données brutes » du template, et la politique d'achat de la mission.",
    steps: [
      {
        title: 'Créez le tableau de définitions',
        actions: [
          "Ouvrez un nouveau document et enregistrez-le sous « L1_Fiche_KPI_Kerowa_2026-08.docx ».",
          "Insérez un tableau à 6 colonnes : KPI | Formule | Numérateur / dénominateur | Source (colonne du template) | Fréquence | Responsable de la donnée.",
          "Ajoutez trois lignes, une par KPI.",
        ],
      },
      {
        title: 'Remplissez une ligne par KPI',
        actions: [
          "Écrivez la formule avec les mots du terrain (« lignes en rupture ÷ lignes suivies »), pas avec des lettres de colonnes.",
          "Indiquez la colonne du template qui porte la donnée : H pour la rupture, G pour le délai, I pour la conformité.",
          "Nommez une personne responsable de la donnée source, pas un service.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — fiche KPI, définitions (extrait)',
      lines: [
        "Taux de rupture | lignes d'article en rupture ÷ lignes d'article suivies × 100 | n = lignes « Oui » en H, N = lignes du mois | colonne H | mensuel | Peter A. (fiches de stock)",
        "Délai d'approvisionnement | date de réception − date de demande d'achat, moyenne en jours calendaires | colonne G = F − E | colonnes E, F, G | mensuel | assistante achats (registre des PO)",
        "Taux de conformité achats | dossiers conformes ÷ dossiers audités × 100 | lignes « Conforme » en I ÷ lignes du mois | colonne I | mensuel (rapport bailleur : trimestriel) | Joseph K. (archivage des dossiers)",
      ],
    },
    result: "Une page où chaque KPI a sa formule, son numérateur, son dénominateur, sa colonne source, sa fréquence et un responsable nommé.",
    pitfall: "Écrire « taux de rupture » sans dire sur quelles lignes il se calcule : deux personnes calculeront deux chiffres différents et le tableau de bord perdra sa crédibilité dès le premier désaccord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 3',
    title: 'Figer la définition de la rupture, le périmètre et les règles de saisie',
    intro: "Un chiffre n'est comparable d'un mois à l'autre que si la définition ne bouge jamais. Vous écrivez maintenant les règles que le tableau de bord appliquera pendant toute la durée du projet.",
    steps: [
      {
        title: 'Choisissez une seule définition de la rupture',
        actions: [
          "Lisez l'en-tête de la colonne H du template : « En rupture ce mois ». Elle correspond à la définition « a connu une rupture ce mois-ci ».",
          "Écrivez la phrase exacte dans la fiche : « Une ligne est en rupture si le stock a été insuffisant au moins un jour du mois, constaté sur la fiche de stock ou par une demande non servie. »",
          "Ajoutez : « Définition applicable à partir de juin 2026 ; toute modification sera datée et expliquée. »",
        ],
      },
      {
        title: 'Fixez le périmètre',
        actions: [
          "Catégories suivies : les 4 libellés du template (Médicaments essentiels, Kits d'hygiène, Matériel médical, Nutrition).",
          "Entrepôts suivis : principal (Gogrial) et secondaire (Kuajok).",
          "Lignes suivies : articles dotés d'un seuil minimum dans la fiche de stock (Module 05).",
        ],
      },
      {
        title: 'Fixez les règles de saisie',
        actions: [
          "Période = mois de réception en entrepôt ; délai en jours calendaires (date de réception − date de demande).",
          "Une commande sans date de réception reste hors du tableau et sera saisie le mois où elle arrive.",
          "Le statut de conformité n'a que deux libellés exacts : « Conforme » et « Non conforme (dérogation urgence justifiée) ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — les 5 règles écrites en tête de la fiche',
      lines: [
        "Règle 1 : rupture = au moins un jour sans stock dans le mois (colonne H « Oui / Non »).",
        "Règle 2 : 4 catégories, 2 entrepôts, uniquement les articles avec seuil minimum.",
        "Règle 3 : période = mois de réception ; 13 commandes du registre sans date de réception au 31/08 restent hors du tableau.",
        "Règle 4 : délai en jours calendaires, de la demande d'achat à la réception à l'entrepôt.",
        "Règle 5 : une dérogation d'urgence justifiée porte le statut « Non conforme (dérogation urgence justifiée) » et n'est jamais comptée comme « Conforme ».",
      ],
    },
    result: "Cinq règles datées, qui répondent à : qu'est-ce qu'une rupture, quelles lignes, quelle période, quel mode de calcul du délai, quel statut de conformité.",
    pitfall: "Passer d'un mois à l'autre de « en rupture aujourd'hui » à « a connu une rupture ce mois-ci » : toute comparaison historique devient trompeuse. Fixez la définition dès le premier mois.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 3',
    title: 'Fixer les seuils d\'alerte et la décision rattachée à chaque KPI',
    intro: "Un KPI sans seuil ne déclenche rien. Vous fixez, avec la coordination et avant de connaître le chiffre d'août, ce qui est vert, orange ou rouge, et ce qui se passe quand c'est rouge. Entrées : les mois de juin et juillet comme référence, la convention du bailleur et la politique d'achat.",
    steps: [
      {
        title: 'Posez trois seuils par KPI',
        actions: [
          "Partez des deux mois précédents : un seuil vert doit être atteignable, un seuil rouge doit signaler un vrai problème.",
          "Ajoutez deux règles de rouge direct : toute rupture sur un article critique, et tout dossier en dérogation non justifiée.",
          "Définissez vos articles critiques par écrit : médicaments essentiels, matériel médical de protection, produits nutritionnels thérapeutiques.",
        ],
      },
      {
        title: 'Rattachez une décision à chaque rouge',
        actions: [
          "Écrivez ce qui doit se passer quand le KPI est rouge : qui est alerté, quelle analyse est lancée, sous quel délai.",
          "Ajoutez la colonne « Décision si rouge » à la fiche et nommez le décideur.",
        ],
      },
      {
        title: 'Faites valider',
        actions: [
          "Envoyez la fiche à Daniel O. (coordinateur terrain) et à Grace M. avec une demande de réponse sous 48 heures.",
          "Enregistrez la version validée et datée dans le dossier « Reporting SCM ».",
        ],
      },
    ],
    table: {
      columns: ['KPI', 'Vert', 'Orange', 'Rouge', 'Décision si rouge'],
      rows: [
        ['Rupture globale', '≤ 3 %', '> 3 à 5 %', '> 5 %, ou > 10 % sur une catégorie, ou tout article critique en rupture', 'Revoir le seuil min / max sous 5 jours ; achat d\'urgence documenté'],
        ['Délai — catégories importées', '≤ 28 jours', '29 à 35 jours', '> 35 jours', 'Décomposer en sous-délais ; relancer l\'étape en cause ; stock tampon'],
        ['Délai — catégories locales', '≤ 18 jours', '19 à 25 jours', '> 25 jours', 'Remise en concurrence ou réévaluation du fournisseur'],
        ['Conformité achats', '≥ 95 %', '90 à 94 %', '< 90 %, ou toute dérogation non justifiée', 'Contrôle de 100 % des dossiers avant paiement ; rappel de procédure'],
      ],
    },
    result: "Livrable L1 terminé : fiche KPI d'une page, avec définitions, règles de saisie, seuils et décisions, validée et datée.",
    tip: "Les valeurs ci-dessus sont celles de l'exemple Kerowa : adaptez-les à votre mission et à la convention de votre bailleur. Un seuil fixé après avoir vu le chiffre ressemble à un arrangement.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — ALIMENTER LE TABLEAU DE BORD
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Rassembler les données brutes de la période (jour 1)',
    intro: "Le template a besoin de deux familles de données : les registres d'achats (date de demande d'achat, date de réception, statut de conformité du dossier, issus du cycle du Module 02) et les mouvements de stock (ruptures constatées, issus du Module 05). Si votre organisation utilise un ERP, vous l'extrayez plutôt que de le ressaisir : chaque ressaisie est une source d'erreur et de perte de temps.",
    steps: [
      {
        title: 'Demandez les données par écrit, avec une date',
        actions: [
          "Assistante achats : export du registre des PO de la période, avec date de demande, date de réception et statut du dossier.",
          "Logisticien : fiches de stock des 4 catégories et relevé des ruptures du mois (jour, article, entrepôt).",
          "Finance : liste des dérogations d'urgence signées et archivées.",
          "Fixez la remise à 12 h le jour 1 et précisez le format (Excel, pas PDF).",
        ],
      },
      {
        title: 'Extrayez depuis l\'ERP si vous en avez un',
        actions: [
          "Dans Excel, ouvrez Données > Obtenir des données (Power Query, Module 08) et connectez-vous à l'extraction de l'ERP.",
          "Filtrez sur la date de réception entre le 01/06/2026 et le 31/08/2026 et gardez uniquement les colonnes utiles.",
          "Fermez et chargez, puis utilisez Données > Actualiser tout le mois suivant au lieu de recommencer.",
        ],
      },
      {
        title: 'Archivez les sources sans les modifier',
        actions: [
          "Copiez chaque fichier reçu dans Reporting SCM > 2026-08 > SOURCE, avec le préfixe « SOURCE_ ».",
          "Tenez un journal : ce que vous avez demandé, à qui, à quelle heure, ce qui manque.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — inventaire des sources le 31 août à 12 h',
      lines: [
        "Registre des PO juin–août (assistante achats) : 163 lignes, dont 13 sans date de réception au 31/08 → exclues, reportées en septembre. 163 − 13 = 150 lignes.",
        "Fiches de stock et registre des lots (Peter A.) : 4 catégories, 2 entrepôts, ruptures relevées en colonne « Remarques ».",
        "Dérogations d'urgence (Joseph K.) : 6 notes signées sur le trimestre, 2 en août, archivées par numéro.",
        "Extraction ERP par Power Query : 150 lignes d'article reçues entre le 01/06 et le 31/08.",
      ],
    },
    result: "Les sources sont rangées dans un seul dossier, intactes, avec un journal de ce qui manque.",
    pitfall: "Ressaisir à la main des données déjà dans l'ERP : une faute de frappe sur une date change un délai de 38 à 380 jours et personne ne la verra.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Ouvrir le template, l\'enregistrer et lire la démonstration',
    intro: "Le template tableau-de-bord-kpi-supply-chain.xlsx contient deux onglets : « Données brutes » (saisie) et « Tableau de bord » (calculs). Il est livré avec 92 lignes de démonstration. Avant de les effacer, vous relevez les valeurs qu'elles produisent : ce sera votre preuve que les formules fonctionnent.",
    steps: [
      {
        title: 'Enregistrez immédiatement',
        actions: [
          "Ouvrez le fichier depuis 04-templates et faites Fichier > Enregistrer sous : « L2_Tableau_de_bord_KPI_Kerowa_2026-08.xlsx ».",
          "Conservez l'original intact dans son dossier : c'est votre modèle vierge pour les mois suivants.",
        ],
      },
      {
        title: 'Parcourez l\'onglet « Données brutes »',
        actions: [
          "Lisez le titre en A1 et le sous-titre en A2 ; les en-têtes sont en ligne 4 (A4 à I4), les données en lignes 5 à 96.",
          "Cliquez sur G5 : la formule =IFERROR(F5-E5,\"\") calcule le délai ; vous ne la saisissez jamais.",
        ],
      },
      {
        title: 'Parcourez l\'onglet « Tableau de bord »',
        actions: [
          "Trois cartes : A5 (taux de rupture global), C5 (délai moyen), E5 (taux de conformité global).",
          "Synthèse : en-têtes en ligne 11 (A11 à F11), 12 lignes en A12:F23, texte « Lecture rapide » en A27:F29.",
          "Relevez les valeurs de la démonstration : 5,43 %, 28,62 jours et 96,74 %.",
        ],
      },
    ],
    table: {
      columns: ['Col.', 'En-tête (ligne 4)', 'Contenu attendu', 'Saisi ou calculé'],
      rows: [
        ['A', 'ID ligne', 'Numéro unique de la ligne', 'Saisi'],
        ['B', 'Catégorie', 'Libellé exact : Médicaments essentiels, Kits d\'hygiène, Matériel médical, Nutrition', 'Saisi'],
        ['C', 'Zone / Entrepôt', 'Entrepôt principal - [site] ou Entrepôt secondaire - [site]', 'Saisi'],
        ['D', 'Période (AAAA-MM)', 'Texte, par exemple 2026-08', 'Saisi'],
        ['E', 'Date demande d\'achat', 'Date réelle jj/mm/aaaa', 'Saisi'],
        ['F', 'Date réception', 'Date réelle jj/mm/aaaa, postérieure à E', 'Saisi'],
        ['G', 'Délai (jours)', 'F − E, protégé par SIERREUR', 'Calculé'],
        ['H', 'En rupture ce mois', 'Oui ou Non', 'Saisi'],
        ['I', 'Statut conformité achat', 'Conforme ou Non conforme (dérogation urgence justifiée)', 'Saisi'],
      ],
    },
    result: "Le fichier est renommé, vous connaissez les neuf colonnes de saisie, les trois cartes et la synthèse, et vous avez noté les trois valeurs de la démonstration.",
    tip: "Les données de démonstration portent sur Maiduguri et Monguno : elles servent à comprendre le fonctionnement et seront entièrement remplacées par les vôtres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Vider la démonstration sans casser les formules',
    intro: "Vous remplacez les 92 lignes de démonstration par vos données. La colonne G (délai) contient des formules : elle doit survivre. Le moindre « Supprimer les lignes » fait apparaître des #REF! dans le tableau de bord.",
    steps: [
      {
        title: 'Effacez le contenu des colonnes saisies, pas la colonne G',
        actions: [
          "Dans « Données brutes », sélectionnez A5:F96, maintenez Ctrl, sélectionnez aussi H5:I96, puis appuyez sur Suppr.",
          "Vérifiez que G5:G96 contient toujours la formule (cliquez sur G5 : =IFERROR(F5-E5,\"\")).",
          "Ne touchez ni aux lignes 1 et 2 (titres) ni à la ligne 4 (en-têtes).",
        ],
      },
      {
        title: 'Préparez les formats',
        actions: [
          "Sélectionnez D5:D96, ouvrez Format de cellule (Ctrl + 1) et choisissez « Texte » : la période 2026-08 ne sera pas convertie en date.",
          "Sélectionnez E5:F96 et choisissez le format Date jj/mm/aaaa.",
        ],
      },
      {
        title: 'Ajoutez des listes déroulantes (recommandé)',
        actions: [
          "Colonne B : Données > Validation des données > Liste, source : Médicaments essentiels;Kits d'hygiène;Matériel médical;Nutrition.",
          "Colonne H : liste Oui;Non. Colonne I : liste Conforme;Non conforme (dérogation urgence justifiée).",
        ],
      },
    ],
    result: "Le tableau de bord affiche 0 partout (IFERROR renvoie 0 sans donnée) : c'est normal. Les formules de la colonne G et du tableau de bord sont intactes.",
    pitfall: "Sélectionner tout l'onglet et appuyer sur Suppr, ou supprimer des lignes entières : vous effacez la colonne G ou vous créez des erreurs #REF! dans le tableau de bord. Effacez le contenu des cellules, jamais la structure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Adapter la taille du tableau au nombre de lignes de la période',
    intro: "Les formules du tableau de bord lisent exactement les lignes 5 à 96 de l'onglet « Données brutes ». Si vous avez plus de 92 lignes, vous insérez des lignes à l'intérieur de cette plage. Si vous en avez moins, vous supprimez les lignes vides. Kerowa a 150 lignes pour juin, juillet et août.",
    steps: [
      {
        title: 'Calculez l\'écart',
        actions: [
          "Nombre de lignes à saisir − 92 = nombre de lignes à insérer (ou à supprimer si le résultat est négatif).",
          "Kerowa : 150 − 92 = 58 lignes à insérer.",
        ],
      },
      {
        title: 'Si positif : insérez à l\'intérieur de la plage',
        actions: [
          "Cliquez sur le numéro de ligne 50, maintenez Maj et cliquez sur le numéro de ligne 107 (58 lignes sélectionnées), puis clic droit > Insérer.",
          "Les plages passent de 5:96 à 5:154. Copiez G5, sélectionnez G6:G154 et collez pour recopier la formule du délai sur les nouvelles lignes.",
        ],
      },
      {
        title: 'Si négatif : supprimez les lignes vides, pas seulement leur contenu',
        actions: [
          "Une ligne vide garde sa formule en G : F − E vaut 0 et la moyenne des délais est tirée vers le bas.",
          "Exemple : 70 lignes de données → sélectionnez les lignes 75 à 96, clic droit > Supprimer.",
        ],
      },
      {
        title: 'Contrôlez les plages',
        actions: [
          "Sur « Tableau de bord », cliquez sur A5 et lisez la barre de formule : les plages doivent finir à la dernière ligne de données.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — plages après insertion de 58 lignes',
      lines: [
        `A5 : =IFERROR(COUNTIF('Données brutes'!H5:H154,"Oui")/COUNTA('Données brutes'!A5:A154)*100,0)`,
        "C5 : =IFERROR(AVERAGE('Données brutes'!G5:G154),0)",
        `E5 : =IFERROR(COUNTIF('Données brutes'!I5:I154,"Conforme")/COUNTA('Données brutes'!A5:A154)*100,0)`,
        "Les lignes de la synthèse (A12:F23) lisent aussi B5:B154, D5:D154, etc.",
      ],
    },
    result: "Les plages couvrent exactement vos 150 lignes (5 à 154), la formule du délai est recopiée partout, aucune ligne vide ne fausse la moyenne.",
    pitfall: "Insérer les lignes sous la ligne 96 : les formules ne s'étendent pas et les nouvelles lignes ne sont jamais comptées. Insérez toujours au milieu de la plage.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Saisir ou coller les données, colonne par colonne',
    intro: "Vous collez vos 150 lignes dans l'onglet « Données brutes », dans le respect strict des colonnes existantes. Le tableau de bord ne fonctionne que si les catégories saisies correspondent exactement à celles de la synthèse : ne renommez jamais une catégorie à la volée.",
    steps: [
      {
        title: 'Collez en valeurs, colonne par colonne',
        actions: [
          "Colonne A : numéros continus (1 à 150) ; chaque ID est unique.",
          "Colonnes B et C : libellés exacts de catégorie et de zone ; respectez l'apostrophe droite de « Kits d'hygiène » et le tiret entouré d'espaces de « Entrepôt principal - Gogrial ».",
          "Colonne D : période AAAA-MM en texte. Colonnes E et F : vraies dates.",
          "Colonnes H et I : Oui / Non et statut de conformité aux libellés exacts.",
          "Pour coller depuis un autre fichier : Collage spécial > Valeurs, afin de ne pas écraser la colonne G ni les formats.",
        ],
      },
      {
        title: 'Vérifiez le nombre de lignes',
        actions: [
          "Sélectionnez A5:A154 et lisez le « Nombre » dans la barre d'état : 150.",
          "Cliquez sur G154 : le délai doit s'afficher en nombre entier.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — extrait des lignes saisies (août 2026)',
      lines: [
        "104 | Médicaments essentiels | Entrepôt principal - Gogrial | 2026-08 | 29/06/2026 | 06/08/2026 | 38 | Non | Conforme",
        "112 | Matériel médical | Entrepôt principal - Gogrial | 2026-08 | 15/07/2026 | 24/08/2026 | 40 | Oui | Conforme",
        "121 | Kits d'hygiène | Entrepôt secondaire - Kuajok | 2026-08 | 06/08/2026 | 19/08/2026 | 13 | Oui | Conforme",
        "126 | Nutrition | Entrepôt principal - Gogrial | 2026-08 | 05/08/2026 | 21/08/2026 | 16 | Non | Conforme",
        "133 | Matériel médical | Entrepôt principal - Gogrial | 2026-08 | 13/08/2026 | 19/08/2026 | 6 | Non | Non conforme (dérogation urgence justifiée)",
        "139 | Kits d'hygiène | Entrepôt secondaire - Kuajok | 2026-08 | 14/08/2026 | 20/08/2026 | 6 | Non | Non conforme (dérogation urgence justifiée)",
      ],
    },
    result: "150 lignes saisies sans cellule vide, avec des libellés exacts, des dates réelles et une période en texte.",
    pitfall: "Excel convertit « 2026-08 » en date (août 2026) dès la saisie : la période devient un nombre, la synthèse ne trouve plus aucune ligne et affiche 0. Une période en texte est alignée à gauche ; formatez la colonne en « Texte » avant de saisir.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — VÉRIFIER ET LIRE LES KPI
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Contrôler la qualité des données avant de lire un seul KPI',
    intro: "Un KPI calculé sur des données sales est faux avec dix décimales. Avant de regarder les cartes, vous contrôlez les 150 lignes avec les filtres d'Excel. Une erreur vient presque toujours d'une catégorie mal orthographiée ou d'une date manquante dans l'onglet de données brutes, jamais de la formule elle-même.",
    steps: [
      {
        title: 'Activez les filtres et lisez chaque liste',
        actions: [
          "Cliquez sur A4, puis Données > Filtrer.",
          "Ouvrez la flèche de la colonne B : la liste ne doit contenir que les 4 catégories exactes. Faites de même pour C (2 zones), D (3 périodes), H (Oui, Non) et I (2 statuts).",
          "Toute valeur inattendue, variante d'orthographe ou « (Vides) » est une erreur de saisie à corriger.",
        ],
      },
      {
        title: 'Triez le délai et cherchez les doublons',
        actions: [
          "Flèche de la colonne G > Trier du plus petit au plus grand : les premières valeurs doivent être positives (au moins 1) et les dernières plausibles (moins de 90 jours).",
          "Une valeur négative ou nulle signale une date de réception vide, antérieure à la demande, ou une année mal saisie.",
          "Sélectionnez A5:A154, Accueil > Mise en forme conditionnelle > Règles de mise en surbrillance > Valeurs en double. Ne lancez pas « Supprimer les doublons ».",
          "Retriez ensuite la colonne A du plus petit au plus grand pour retrouver l'ordre initial.",
        ],
      },
      {
        title: 'Corrigez à la source et journalisez',
        actions: [
          "Corrigez la cellule, jamais la formule, après avoir vérifié la pièce d'origine (registre, bon de réception).",
          "Notez chaque correction dans le journal : ligne, valeur avant, valeur après, pièce consultée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — trois anomalies trouvées avant lecture',
      lines: [
        "Colonne B : deux cellules « Kits d'hygiene » sans accent (ID 87 et ID 92) → catégorie corrigée, la synthèse les ignorait.",
        "Colonne D : quatre périodes converties en dates (ID 41 à 44, alignées à droite) → reformatées en texte « 2026-07 ».",
        "Colonne G : un délai de −349 jours (ID 58) : date de réception saisie « 05/08/2025 » au lieu de « 05/08/2026 » → corrigée d'après le bon de réception.",
      ],
    },
    result: "Les listes de filtres ne montrent que des valeurs attendues, aucun délai négatif, aucun doublon d'ID, et le journal des corrections est à jour.",
    pitfall: "Corriger la formule du tableau de bord pour « faire sortir un bon chiffre » : vous masquez l'erreur de saisie qui reviendra le mois suivant. Corrigez la donnée, toujours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Lire les trois KPI et les recalculer à la main',
    intro: "Vous passez sur l'onglet « Tableau de bord ». Les trois KPI doivent s'afficher automatiquement, calculés par formules. Mais attention : les cartes A5, C5 et E5 calculent sur toutes les lignes de la plage, donc ici sur les trois mois. Pour lire le mois d'août, vous passez par la synthèse.",
    steps: [
      {
        title: 'Lisez les trois cartes',
        actions: [
          "A5 : taux de rupture de stock global ; C5 : délai d'approvisionnement moyen ; E5 : taux de conformité achats global.",
          "Rappelez-vous la définition : ces valeurs couvrent la période chargée (ici juin à août), pas un mois isolé.",
        ],
      },
      {
        title: 'Calculez les valeurs d\'un mois par pondération de la synthèse',
        actions: [
          "Les lignes du mois d'août dans la synthèse sont 14, 17, 20 et 23 (une par catégorie).",
          "Dans une cellule libre en dehors de la zone du template (par exemple H14), saisissez : =(C14*D14+C17*D17+C20*D20+C23*D23)/(C14+C17+C20+C23) pour la rupture.",
          "Remplacez D par E pour le délai et par F pour la conformité. Ces calculs de contrôle ne se diffusent pas.",
        ],
      },
      {
        title: 'Contrôlez avec les filtres',
        actions: [
          "Dans « Données brutes », filtrez D = 2026-08 et lisez le « Nombre » en barre d'état sur la colonne A : 50.",
          "Ajoutez le filtre H = Oui : 3 lignes. 3 ÷ 50 × 100 = 6,0 %, identique à la pondération.",
          "Sélectionnez les cellules visibles de G : la barre d'état affiche la moyenne (25,44). Filtrez I = Conforme : 48 lignes.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — les valeurs lues le 31 août',
      lines: [
        "Cartes (trimestre juin–août, 150 lignes) : rupture 3,33 % (5 sur 150) ; délai 20,28 jours ; conformité 96,00 % (144 sur 150).",
        "Mois d'août (50 lignes, par pondération et par filtres) : rupture 6,0 % (3 sur 50) ; délai 25,4 jours ; conformité 96,0 % (48 sur 50).",
        "Les cartes servent au rapport bailleur (trimestre) ; les valeurs du mois servent au rapport siège.",
      ],
    },
    result: "Les valeurs des cartes et celles recalculées à la main concordent, au centième près pour la rupture et la conformité.",
    tip: "Si vous voulez que les cartes affichent directement un mois, faites un classeur par mois contenant uniquement les lignes de ce mois, et conservez chaque classeur daté pour la tendance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Diagnostiquer un résultat suspect sans toucher aux formules',
    intro: "Quand un chiffre vous surprend, la règle est stricte : ne corrigez jamais la formule sans avoir d'abord vérifié la donnée source. Le tableau ci-dessous relie les symptômes les plus fréquents à leur cause réelle.",
    steps: [
      {
        title: 'Identifiez le symptôme',
        actions: [
          "Valeur absurde (délai de milliers de jours), valeur à zéro alors que vous savez le contraire, ou cellule qui ne change pas.",
        ],
      },
      {
        title: 'Remontez à la donnée source',
        actions: [
          "Repérez dans le tableau la cause probable, puis vérifiez-la ligne par ligne avec les filtres.",
          "Corrigez la donnée, relisez la carte, notez la correction dans le journal.",
        ],
      },
    ],
    table: {
      columns: ['Symptôme', 'Cause probable', 'Correction'],
      rows: [
        ['Conformité très basse ou à 0 %', 'Libellé différent de « Conforme » (espace en trop, faute de frappe)', 'Filtrer la colonne I, uniformiser avec la liste déroulante'],
        ['Rupture à 0 % alors que des ruptures existent', '« Oui » saisi avec un espace, ou saisi dans la mauvaise colonne', 'Filtrer la colonne H, corriger'],
        ['Délai moyen anormalement bas', 'Lignes vides qui gardent la formule en G (F − E = 0)', 'Supprimer les lignes vides de la plage'],
        ['Délai négatif ou énorme (milliers de jours)', 'Date de réception vide ou antérieure à la demande', 'Compléter la date ou retirer la ligne non reçue'],
        ['Une ligne de la synthèse affiche 0 ligne', 'Catégorie ou période écrite autrement qu\'en A ou B (période convertie en date)', 'Corriger le texte dans A12:B23 ou dans les données'],
        ['Les cartes ne bougent pas après saisie', 'Calcul manuel activé', 'Formules > Options de calcul > Automatique'],
      ],
    },
    example: {
      title: 'Kerowa — un cas réel de diagnostic',
      lines: [
        "Symptôme : la ligne « Médicaments essentiels, 2026-07 » de la synthèse affiche 0 ligne alors que 10 lignes existent.",
        "Vérification : filtre sur la colonne D, liste de périodes : « 2026-07 » apparaît deux fois, dont une alignée à droite → période convertie en date.",
        "Correction : reformatage de la colonne en texte et ressaisie de la période sur les lignes concernées ; la synthèse affiche de nouveau 10 lignes.",
      ],
    },
    result: "Chaque anomalie est reliée à une cause prouvée dans la donnée, corrigée à la source, et tracée.",
    pitfall: "Écraser une formule par une valeur tapée pour « faire tomber juste » : le tableau de bord n'est plus calculé et ne se recalculera plus le mois suivant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Adapter la synthèse et la lire par catégorie et par période',
    intro: "La synthèse (lignes 11 à 23) croise catégorie d'article et période. C'est là que vous repérez si un problème est généralisé (tous les KPI se dégradent) ou localisé (une seule catégorie, un seul mois). Un taux global stable peut cacher une rupture chronique sur une seule catégorie critique.",
    steps: [
      {
        title: 'Adaptez les libellés en A12:B23',
        actions: [
          "Les cellules A12:A23 (catégorie) et B12:B23 (période) sont du texte modifiable ; les colonnes C à F sont des formules à ne jamais toucher.",
          "Chaque mois, faites glisser la fenêtre : remplacez les trois périodes par les trois derniers mois (par exemple 2026-07, 2026-08, 2026-09).",
          "Si vous renommez une catégorie dans les données, renommez-la aussi dans la colonne A de la synthèse, à l'identique.",
        ],
      },
      {
        title: 'Lisez colonne par colonne, puis repérez la combinaison qui diverge',
        actions: [
          "Colonne D (rupture), E (délai moyen), F (conformité) : comparez chaque ligne aux seuils de la fiche KPI et à la valeur globale.",
          "Surlignez : sélectionnez D12:D23, Accueil > Mise en forme conditionnelle > Règles de mise en surbrillance > Supérieur ou égal à 10, en rouge. Faites de même sur E pour les lignes importées (supérieur à 35).",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Période', 'Nb lignes', 'Rupture (%)', 'Délai moyen (jours)', 'Conformité (%)'],
      rows: [
        ['Médicaments essentiels', '2026-06', '11', '0,0', '22,4', '100,0'],
        ['Médicaments essentiels', '2026-07', '10', '0,0', '24,3', '90,0'],
        ['Médicaments essentiels', '2026-08', '12', '0,0', '38,2', '100,0'],
        ['Kits d\'hygiène', '2026-06', '23', '4,3', '13,8', '100,0'],
        ['Kits d\'hygiène', '2026-07', '24', '4,2', '14,2', '95,8'],
        ['Kits d\'hygiène', '2026-08', '18', '11,1', '15,1', '94,4'],
        ['Matériel médical', '2026-06', '8', '0,0', '23,0', '87,5'],
        ['Matériel médical', '2026-07', '8', '0,0', '23,6', '100,0'],
        ['Matériel médical', '2026-08', '10', '10,0', '37,8', '90,0'],
        ['Nutrition', '2026-06', '8', '0,0', '15,1', '87,5'],
        ['Nutrition', '2026-07', '8', '0,0', '16,0', '100,0'],
        ['Nutrition', '2026-08', '10', '0,0', '16,4', '100,0'],
      ],
    },
    result: "Trois signaux ressortent : D17 (kits d'hygiène en août, 11,1 %), D20 (matériel médical en août, 10,0 %, article critique : rouge direct) et E14 / E20 (délais de 38,2 et 37,8 jours, au-dessus de 35). Nutrition reste stable sur les trois mois.",
    tip: "Le texte « Lecture rapide » en A27:F29 du template le rappelle : une dérive sur une seule combinaison catégorie / période, alors que la moyenne globale reste stable, est le signal typique d'un problème localisé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Descendre à la zone et décomposer le délai (note d\'analyse L3)',
    intro: "La synthèse ne croise pas la zone ni les étapes d'un délai. Vous les analysez à côté du template, avec les filtres et le registre des PO, pour écrire une note d'une page qui dit où est le problème. Le template reste inchangé.",
    steps: [
      {
        title: 'Isolez la zone responsable de la rupture',
        actions: [
          "Dans « Données brutes », filtrez B = Kits d'hygiène, D = 2026-08, puis C = Entrepôt secondaire - Kuajok. Lisez le nombre de lignes et le nombre de « Oui » en H.",
          "Refaites avec C = Entrepôt principal - Gogrial et comparez.",
          "Répétez pour juin et juillet : une zone qui porte toutes les ruptures du trimestre est un problème structurel, pas un accident.",
        ],
      },
      {
        title: 'Décomposez le délai en sous-délais',
        actions: [
          "Pour chaque expédition importée de la période, relevez dans le registre des PO et les documents de transport les 5 jalons : demande, PO signé, expédition fournisseur, arrivée et dédouanement, réception.",
          "Calculez la durée moyenne de chaque étape pour juillet et pour août.",
          "L'étape dont la durée a le plus augmenté est le point de départ de l'enquête.",
        ],
      },
    ],
    table: {
      columns: ['Étape (catégories importées)', 'Juillet (jours)', 'Août (jours)', 'Variation'],
      rows: [
        ['Demande d\'achat → PO signé', '4', '4', '0'],
        ['PO signé → expédition fournisseur', '9', '9', '0'],
        ['Transit international', '6', '6', '0'],
        ['Dédouanement et autorisations', '2', '16', '+14'],
        ['Transport Juba → Gogrial et réception', '3', '3', '0'],
        ['Délai total', '24', '38', '+14'],
      ],
    },
    example: {
      title: 'Kerowa — la note d\'analyse d\'une page (L3), en trois phrases',
      lines: [
        "Ruptures : 4 ruptures de kits d'hygiène sur le trimestre (1 en juin, 1 en juillet, 2 en août), toutes à Kuajok ; Gogrial n'en compte aucune.",
        "Délais : les catégories importées passent de 24 à 38 jours ; les +14 jours sont entièrement dans l'étape « dédouanement et autorisations » (2 → 16 jours), les autres étapes sont inchangées.",
        "Conformité : stable à 96 % ; 2 dérogations d'urgence en août, justifiées et archivées.",
      ],
    },
    result: "Livrable L3 terminé : une page qui localise chaque dérive (zone, catégorie, étape du délai), chiffrée et prête à être transformée en cause puis en action.",
    pitfall: "Commenter le délai global (« les délais s'allongent ») sans l'avoir décomposé : vous direz au coordinateur qu'il y a un problème, pas où se trouve la cause.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — INTERPRÉTER ET DÉCIDER
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Comparer chaque KPI à sa tendance et à son seuil',
    intro: "Le réflexe central de ce module : ne jamais afficher un chiffre sans la phrase qui l'accompagne. La première étape consiste à placer chaque chiffre dans sa tendance et à le classer vert, orange ou rouge selon la fiche KPI. Entrées : la synthèse, les valeurs du mois, les seuils de L1.",
    steps: [
      {
        title: 'Montez le tableau de tendance',
        actions: [
          "Pour chaque KPI en dérive, alignez juin, juillet et août avec n sur N, et calculez la variation en points ou en jours.",
          "Reportez la valeur de la fiche KPI correspondante : seuil rouge ou règle de rouge direct.",
        ],
      },
      {
        title: 'Classez et contrôlez la solidité du signal',
        actions: [
          "Appliquez vert, orange, rouge. Une règle de rouge direct (article critique en rupture, dérogation non justifiée) l'emporte sur le taux.",
          "Si N est inférieur à 20 lignes, vérifiez que le signal est récurrent : au moins deux lignes ou deux mois consécutifs.",
        ],
      },
      {
        title: 'Triez les décisions à prendre',
        actions: [
          "Rouge : une ligne dans la fiche de décisions (étape 4). Orange : une surveillance datée. Vert : une phrase « maintenu ».",
        ],
      },
    ],
    table: {
      columns: ['KPI', 'Juillet', 'Août', 'Seuil', 'Statut août'],
      rows: [
        ['Rupture globale', '2,0 % (1/50)', '6,0 % (3/50)', 'Rouge > 5 %', 'Rouge'],
        ['Rupture kits d\'hygiène', '4,2 % (1/24)', '11,1 % (2/18)', 'Rouge > 10 % par catégorie', 'Rouge'],
        ['Rupture matériel médical (gants)', '0 % (0/8)', '10,0 % (1/10)', 'Article critique : rouge direct', 'Rouge direct'],
        ['Délai — catégories importées', '24,0 jours', '38,0 jours', 'Rouge > 35 jours', 'Rouge'],
        ['Délai — catégories locales', '14,7 jours', '15,6 jours', 'Rouge > 25 jours', 'Vert'],
        ['Conformité achats', '96,0 % (48/50)', '96,0 % (48/50)', 'Vert ≥ 95 %', 'Vert'],
      ],
    },
    result: "Quatre statuts rouges (dont un rouge direct), deux verts. Les rouges alimentent la fiche de décisions ; les verts reçoivent une phrase de maintien.",
    pitfall: "Conclure d'une seule ligne en rupture sur 10 qu'une catégorie est « en crise », ou à l'inverse ignorer une rupture sur un article critique parce que le taux est faible. Lisez n sur N et le seuil.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Remonter à la cause avec une preuve, pas une opinion',
    intro: "Pour chaque KPI rouge, vous formulez trois hypothèses de cause et vous demandez la preuve de chacune. Vous ne retenez que ce qui est prouvé par un document. Le KPI dit qu'il y a un problème ; la cause dit où agir.",
    steps: [
      {
        title: 'Posez trois hypothèses par KPI en dérive',
        actions: [
          "Rupture : seuil de réapprovisionnement trop bas, délai fournisseur sous-estimé, consommation programme qui a changé.",
          "Délai : validation interne, fournisseur, dédouanement ou transport.",
          "Conformité : seuils mal appliqués, offres manquantes, dossier incomplet, urgence mal tracée.",
        ],
      },
      {
        title: 'Demandez la preuve de chaque hypothèse',
        actions: [
          "Pour chaque hypothèse, nommez le document qui la confirme ou l'infirme et la personne qui le détient.",
          "Éliminez ce qui n'est pas prouvé ; posez « pourquoi » jusqu'à atteindre une cause sur laquelle vous pouvez agir (cinq fois au maximum).",
        ],
      },
    ],
    table: {
      columns: ['KPI en dérive', 'Hypothèse', 'Preuve à demander'],
      rows: [
        ['Rupture', 'Seuil min trop bas', 'Fiche de stock : seuil, consommation hebdomadaire, délai fournisseur'],
        ['Rupture', 'Consommation programme en hausse', 'Demandes internes (IR) des 4 dernières semaines'],
        ['Délai', 'Validation interne lente', 'Registre des PO : date de demande, date de signature'],
        ['Délai', 'Dédouanement ou autorisation', 'Courrier du Ministère, déclaration en douane, lettre de transport'],
        ['Conformité', 'Urgence mal tracée', 'Notes de dérogation signées, dossier d\'achat'],
      ],
    },
    example: {
      title: 'Kerowa — deux chaînes de causes, deux preuves',
      lines: [
        "Kits d'hygiène à Kuajok : rupture à partir du 11 août, puis de nouveau le 24 août → pourquoi ? Seuil minimum de 150 kits, fixé le 1er juin sur 60 kits par semaine ; consommation d'août : 120 kits par semaine (fiche de stock, IR de la clinique mobile Nord) ; délai Wau → Kuajok : 2 semaines. Couverture au seuil : 150 ÷ 120 = 1,25 semaine, inférieure aux 2 semaines de délai : rupture arithmétique.",
        "Seuil à retenir : consommation × (délai + marge de sécurité) = 120 × (2 + 1) = 360 kits.",
        "Délai des catégories importées : dossier retourné par le Ministère de la Santé le 05/08 pour certificats d'analyse manquants, régularisé le 19/08 (14 jours) ; preuve : courrier du Ministère et accusé de dépôt du 19/08. Les gants en rupture dépendent de ce retard.",
      ],
    },
    result: "Chaque dérive est reliée à une cause prouvée par un document, avec la date et la personne qui détient la pièce.",
    pitfall: "Écrire « problème de fournisseur » ou « lenteur de la douane » sans pièce : une cause sans preuve ne résiste pas à la première question du coordinateur ni à celle de l'auditeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Traiter les dérogations d\'urgence : les compter, les justifier, les archiver',
    intro: "Un taux de conformité qui baisse pendant une urgence n'est pas nécessairement une faute, car les procédures d'urgence prévoient des dérogations documentées. Mais chaque dérogation doit être tracée, sinon le chiffre devient indéfendable devant un auditeur. Entrées : les lignes au statut « Non conforme (dérogation urgence justifiée) » du template.",
    steps: [
      {
        title: 'Listez les lignes concernées',
        actions: [
          "Dans « Données brutes », filtrez la colonne I sur « Non conforme (dérogation urgence justifiée) » et notez l'ID de chaque ligne.",
        ],
      },
      {
        title: 'Vérifiez le dossier de chacune avec six contrôles',
        actions: [
          "1) Note de dérogation datée et signée au niveau requis, dans les 48 heures.",
          "2) Motif d'urgence factuel (rupture, risque pour les bénéficiaires).",
          "3) Montant et seuil dépassé indiqués.",
          "4) Offre(s) obtenue(s) et raison de l'impossibilité d'une mise en concurrence complète.",
          "5) Clause de la procédure d'urgence invoquée.",
          "6) Pièces archivées dans le dossier d'achat, avec la référence.",
        ],
      },
      {
        title: 'Qualifiez et calculez les trois parts',
        actions: [
          "Dossier complet : statut « Non conforme (dérogation urgence justifiée) ». Dossier incomplet : changez le statut en « Non conforme » (libellé distinct) : c'est un rouge direct.",
          "Calculez : part conforme, part dérogation justifiée, part non conforme sans justification.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — les deux dérogations d\'août',
      lines: [
        "D-2026-08-01 (ID 133, 13/08) : 40 boîtes de gants d'examen taille M, 1 420 EUR, 1 offre (grossiste pharmaceutique agréé de Juba) au lieu de 3 ; motif : rupture de gants en consultation depuis le 8/08, import bloqué en douane ; signée par Daniel O. le 13/08 ; dossier archivé.",
        "D-2026-08-02 (ID 139, 14/08) : 300 kits d'hygiène, 1 980 EUR, 1 offre (grossiste de Wau) au lieu de 3 ; motif : rupture à Kuajok, clinique mobile Nord sans kits depuis le 11/08 ; signée par Daniel O. le 14/08 ; dossier archivé.",
        "Trimestre : 144 conformes = 96,0 % ; 6 dérogations justifiées = 4,0 % ; 0 non conforme sans justification = 0,0 %.",
      ],
    },
    result: "Chaque dérogation a ses six pièces et son numéro ; les trois parts du taux sont calculées et prêtes pour le rapport bailleur.",
    pitfall: "Antidater une note de dérogation ou la fabriquer après coup : c'est une falsification. Une note manquante se régularise par une note au dossier datée du jour réel, qui explique l'écart, et le dossier reste classé « Non conforme ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Rédiger la fiche de décisions du mois : constat, cause, action, responsable, échéance',
    intro: "C'est le livrable qui rend le tableau de bord utile. Pour chaque KPI qui s'écarte de la tendance habituelle, vous écrivez par écrit, avant même de rédiger un rapport, la cause probable et l'action proposée. Un coordinateur qui doit déduire lui-même la recommandation perdra confiance dans votre tableau de bord.",
    steps: [
      {
        title: 'Créez la fiche',
        actions: [
          "Dans un nouveau document, créez un tableau à 5 colonnes : Constat | Cause prouvée | Action | Responsable | Échéance.",
          "Ajoutez une ligne par KPI rouge ou orange, plus une ligne « maintenu » pour les KPI verts.",
        ],
      },
      {
        title: 'Rédigez chaque ligne avec la même phrase type',
        actions: [
          "Constat : KPI, valeur, référence de comparaison et n sur N.",
          "Action : un verbe, un objet, un seuil ou un volume, jamais « suivre » seul.",
          "Responsable : un nom ; échéance : une date ; ajoutez comment vous saurez que l'action a marché.",
        ],
      },
    ],
    table: {
      columns: ['Constat', 'Cause prouvée', 'Action', 'Responsable', 'Échéance'],
      rows: [
        ['Rupture kits d\'hygiène à Kuajok : 2 sur 6 en août (11,1 % sur la catégorie, 4,2 % en juillet)', 'Seuil min de 150 kits fixé sur 60 kits par semaine ; consommation de 120 ; délai Wau → Kuajok 2 semaines', 'Passer le seuil min à 360 kits ; commander 400 kits à Wau (3 devis) ; réviser les seuils des 4 catégories', 'Peter A. et le SCM', '04/09 ; revue le 30/09 : zéro rupture de kits en septembre'],
        ['Délai des catégories importées : 38 jours contre 24 en juillet', 'Dédouanement et autorisations : 2 → 16 jours ; dossier renvoyé le 05/08 pour certificats d\'analyse manquants', 'Dossier-type d\'importation complet 10 jours avant chaque expédition ; demande d\'autorisation-cadre trimestrielle au Ministère', 'Dr Samuel T., le SCM ; demande portée par Grace M.', 'Dossier-type le 11/09 ; demande le 18/09'],
        ['Rupture de gants (matériel médical, article critique) : 1 sur 10, du 8 au 19/08', 'Conséquence directe du retard d\'importation ci-dessus', 'Stock tampon de 6 semaines sur les 5 articles critiques importés', 'Le SCM et Dr Samuel T.', '15/09'],
        ['Conformité stable à 96 % (48/50), 2 dérogations justifiées en août', 'Urgences liées aux ruptures ci-dessus, dossiers complets', 'Maintenir ; contrôle de 100 % des dossiers ≥ 1 000 EUR avant paiement ; audit blanc de 10 dossiers', 'Joseph K. et le SCM', 'Audit blanc le 25/09, avant la mission ECHO d\'octobre'],
      ],
    },
    result: "Livrable L4 terminé : une fiche d'une page dont chaque ligne a une cause prouvée, une action, un nom et une date. C'est la matière brute des rapports et de la présentation.",
    tip: "Une action sans date ni responsable n'est pas une action. Reprenez la fiche chaque mois : le premier point de la prochaine réunion est « qu'est-il advenu des décisions du mois dernier ? ».",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — RAPPORT INTERNE SIÈGE (PARTIE A DU GABARIT)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Partie A, section 1 : ouvrir le gabarit et rédiger le résumé du mois',
    intro: "Le gabarit gabarit-rapport-bailleur-vs-rapport-siege.docx contient un bandeau de titre, une phrase d'objectif, la Partie A (rapport interne siège, 5 sections) et la Partie B (rapport de conformité bailleur, 5 sections). Les deux se complètent séparément : ne jamais envoyer le même document aux deux audiences. Usage de la Partie A : desk ou coordinateur pays ; ton opérationnel ; jargon interne toléré.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le gabarit et enregistrez-le sous « L5-L6_Rapports_Kerowa_2026-08.docx ».",
          "Gardez le bandeau et la phrase d'objectif tels quels.",
          "Ouvrez à côté la fiche de décisions (L4), la synthèse et la note d'analyse (L3) : vous ne calculez plus rien, vous rédigez.",
        ],
      },
      {
        title: 'Remplissez le tableau « Résumé du mois »',
        actions: [
          "Le tableau a deux cellules : « Période couverte (mois / année) » et « Base / mission concernée ». Placez le curseur à la fin du libellé, appuyez sur Entrée et saisissez la valeur.",
        ],
      },
      {
        title: 'Rédigez la synthèse en 2 ou 3 phrases',
        actions: [
          "Remplacez la consigne grise par la tendance générale des 3 KPI par rapport au mois précédent : une phrase par KPI qui bouge, une phrase pour ce qui reste stable.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — Partie A, section 1 remplie',
      lines: [
        "Période couverte : août 2026. Base / mission : Kerowa Santé — Gogrial (entrepôt principal) et Kuajok (entrepôt secondaire).",
        "Synthèse : août se dégrade sur deux KPI et reste stable sur le troisième. Le taux de rupture passe de 2,0 % à 6,0 % (3 lignes sur 50), tiré par les kits d'hygiène à Kuajok (2 sur 18) et par les gants (1 sur 10). Le délai des catégories importées passe de 24 à 38 jours à cause de 14 jours de blocage à l'importation. La conformité reste à 96 % (48 sur 50), avec 2 dérogations d'urgence justifiées.",
      ],
    },
    result: "Le fichier est prêt et la section 1 donne, en un paragraphe, l'état du mois et le sens de la tendance.",
    pitfall: "Écrire « le mois a été difficile » sans chiffre ni comparaison : le lecteur du siège doit savoir quel KPI, de combien, par rapport à quand.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Partie A, section 2 : détailler les KPI par catégorie et par zone',
    intro: "La section 2 comporte trois consignes : taux de rupture, délai d'approvisionnement moyen, taux de conformité achats, chacun avec « valeur globale, et détail par catégorie / entrepôt si écart notable ». Le siège tolère le détail granulaire : donnez-le dès qu'un écart dépasse un seuil de la fiche KPI.",
    steps: [
      {
        title: 'Rédigez un paragraphe par KPI',
        actions: [
          "Phrase 1 : valeur globale du mois avec n sur N et comparaison au mois précédent.",
          "Phrase 2 : le détail qui explique l'écart (catégorie, entrepôt), tiré de la synthèse et de L3.",
          "Phrase 3 : le statut selon la fiche KPI (vert, orange, rouge).",
        ],
      },
      {
        title: 'Contrôlez les chiffres',
        actions: [
          "Chaque valeur du rapport doit se retrouver dans la synthèse ou dans L3.",
          "Un détail est donné seulement si l'écart est notable ; les catégories stables sont regroupées en une phrase.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — Partie A, section 2 remplie',
      lines: [
        "Taux de rupture : 6,0 % (3 sur 50) en août contre 2,0 % en juillet — rouge. Kits d'hygiène 11,1 % (2 sur 18), tout à Kuajok (2 sur 6, contre 0 sur 12 à Gogrial) ; matériel médical 10,0 % (1 sur 10, gants) ; médicaments essentiels et nutrition : 0 %.",
        "Délai d'approvisionnement : 25,4 jours en moyenne contre 18,0 — catégories importées 38,0 jours contre 24,0 (médicaments essentiels 38,2 ; matériel médical 37,8) — rouge ; catégories locales stables à 15,6 jours — vert. Décomposition : dédouanement et autorisations 2 → 16 jours, autres étapes inchangées.",
        "Taux de conformité achats : 96,0 % (48 sur 50), identique à juin et juillet — vert. Kits d'hygiène 94,4 % (17 sur 18) et matériel médical 90,0 % (9 sur 10), une dérogation d'urgence justifiée chacun ; médicaments essentiels et nutrition 100 %.",
      ],
    },
    result: "Trois paragraphes courts, chacun avec sa valeur globale, son détail localisé, sa comparaison et son statut.",
    tip: "Ne détaillez pas ce qui va bien : un paragraphe par KPI de trois phrases se lit en deux minutes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Partie A, section 3 : causes identifiées et actions correctives',
    intro: "La section 3 demande, pour chaque KPI en écart, la cause probable (fournisseur, procédure interne, transport, dédouanement…) puis l'action corrective proposée, avec responsable et échéance. Vous ne rédigez rien de nouveau : vous reprenez la fiche de décisions (L4).",
    steps: [
      {
        title: 'Reportez les causes prouvées',
        actions: [
          "Pour chaque ligne rouge ou orange de L4, écrivez la cause en une phrase avec sa preuve (document et date).",
        ],
      },
      {
        title: 'Reportez les actions avec responsable et échéance',
        actions: [
          "Chaque action a un verbe, un volume ou un seuil, un nom et une date.",
          "Ajoutez l'indicateur qui dira si l'action a fonctionné : « zéro rupture de kits à Kuajok en septembre ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — Partie A, section 3 remplie',
      lines: [
        "Rupture de kits à Kuajok — Cause : seuil min de 150 kits fixé sur 60 kits par semaine, consommation d'août à 120, délai Wau → Kuajok de 2 semaines (fiche de stock, IR de la clinique mobile Nord). Action : seuil porté à 360 kits et commande de 400 kits (3 devis) — Peter A. et le SCM — 04/09 ; contrôle le 30/09.",
        "Délai des catégories importées — Cause : dossier d'autorisation renvoyé par le Ministère le 05/08 pour certificats d'analyse manquants, régularisé le 19/08. Action : dossier-type d'importation complet 10 jours avant chaque expédition (Dr Samuel T., 11/09) ; demande d'autorisation-cadre trimestrielle portée par Grace M. (18/09).",
        "Rupture de gants — Cause : conséquence du retard d'importation. Action : stock tampon de 6 semaines sur 5 articles critiques importés — le SCM et Dr Samuel T. — 15/09.",
      ],
    },
    result: "Chaque KPI en écart a une cause prouvée, une action, un responsable nommé et une échéance.",
    pitfall: "Écrire des actions du type « surveiller », « sensibiliser » ou « améliorer la communication » : sans volume, sans nom ni date, elles ne se vérifient pas le mois suivant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Partie A, sections 4 et 5 : points d\'attention et validation',
    intro: "La section 4 regarde vers l'avant : les risques identifiés à surveiller le mois suivant (rupture prévisible, fournisseur en difficulté, retard de transit en cours). La section 5 est une table de validation à trois cases : rédigé par, validé par, date.",
    steps: [
      {
        title: 'Rédigez les points d\'attention',
        actions: [
          "Listez 3 à 5 risques à venir, chacun avec son échéance probable et le premier signal qui l'annoncera.",
          "Reprenez les risques qui ne sont pas encore des écarts : couverture de stock, expédition en transit, dérive des dérogations.",
        ],
      },
      {
        title: 'Complétez la validation',
        actions: [
          "Remplissez « Rédigé par (nom, fonction) » et « Date », puis envoyez au coordinateur pour « Validé par (coordinateur) ».",
          "Enregistrez la version validée en PDF dans le dossier du mois.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — Partie A, sections 4 et 5 remplies',
      lines: [
        "Médicaments essentiels : couverture de 5 semaines ; 2 expéditions de la centrale d'achat en transit, réception attendue du 10 au 14/09 sous réserve de l'autorisation.",
        "Kuajok : après la commande de 400 kits, couverture à surveiller jusqu'à la fin de la saison des pluies (octobre).",
        "Dérogations : 2 par mois depuis juin ; vigilance pour qu'elles ne deviennent pas un mode de fonctionnement.",
        "Audit ECHO en octobre : contrôle de 100 % des dossiers avant paiement en septembre.",
        "Validation : Rédigé par Supply Chain Manager, Kerowa Santé Gogrial — Validé par Daniel O., coordinateur terrain — 02/09/2026.",
      ],
    },
    result: "Partie A terminée (livrable L5) : cinq sections remplies, validée par le coordinateur et enregistrée en PDF.",
    pitfall: "Y glisser des références de clauses contractuelles et des formulations d'audit : cette audience veut savoir où intervenir cette semaine. Ces éléments appartiennent à la Partie B.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — RAPPORT DE CONFORMITÉ BAILLEUR (PARTIE B DU GABARIT)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Partie B, section 1 : période, référence de l\'accord et résumé exécutif',
    intro: "La Partie B répond à la question du bailleur : l'argent confié a-t-il été géré selon les règles convenues ? Ton attendu : redevabilité, cadrage de conformité explicite, références aux clauses de l'accord de financement, peu de détail opérationnel interne, ni jargon logistique ni codes d'entrepôt ou d'ERP.",
    steps: [
      {
        title: 'Récupérez la référence exacte de l\'accord',
        actions: [
          "Ouvrez la convention de financement et relevez : numéro ou date, article sur la passation des marchés, article sur la procédure d'urgence ou les dérogations.",
          "En cas de doute sur un article, demandez à la personne responsable de la relation contractuelle (ici Grace M.) : ne citez jamais une clause de mémoire.",
        ],
      },
      {
        title: 'Remplissez le tableau d\'en-tête',
        actions: [
          "Deux cellules : « Période couverte (trimestre / année) » et « Référence de l'accord de financement ».",
        ],
      },
      {
        title: 'Rédigez le résumé exécutif',
        actions: [
          "2 ou 3 phrases en langage non technique : niveau global de performance et de conformité, écart principal, mesure prise.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — Partie B, section 1 remplie',
      lines: [
        "Période couverte : trimestre juin–août 2026. Référence : convention de subvention ECHO du 01/12/2025 (réf. interne fictive KS-ECHO-2025-01), article 7 sur la passation des marchés.",
        "Résumé : sur le trimestre juin–août 2026, la chaîne d'approvisionnement du projet de Gogrial a respecté les règles d'achat de la convention pour 96 % des 150 dossiers audités. Les 4 % restants sont six achats d'urgence réalisés selon la procédure prévue, tous justifiés et archivés. Un retard de formalités d'importation en août a allongé les délais de livraison de certains produits médicaux, sans incident de conformité.",
      ],
    },
    result: "L'en-tête cite la période et la clause exacte ; le résumé répond en trois phrases à la question du bailleur.",
    pitfall: "Écrire en termes logistiques (« rupture à Kuajok, certificats d'analyse ») : le bailleur lit une redevabilité, pas un compte rendu d'entrepôt. Gardez ce détail pour la Partie A.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Partie B, section 2 : indicateurs clés, présentation simplifiée',
    intro: "La section 2 comporte trois consignes : taux de rupture, délai moyen, taux de conformité, chacun avec valeur et tendance sur la période, sans détail d'entrepôt interne. Pour la conformité, ajoutez la référence au seuil contractuel attendu si elle existe. Les chiffres sont ceux du trimestre : lisez les cartes A5, C5 et E5 du tableau de bord.",
    steps: [
      {
        title: 'Reprenez les valeurs trimestrielles',
        actions: [
          "Cartes du tableau de bord : rupture 3,33 %, délai 20,28 jours, conformité 96,00 %.",
          "Tendance : valeurs de juin, juillet et août (pondération de la synthèse, procédure 3).",
        ],
      },
      {
        title: 'Traduisez en langage non technique',
        actions: [
          "Remplacez « rupture » par « indisponibilité temporaire », supprimez les noms de sites, les sigles de l'ERP et les codes internes.",
          "Une phrase par KPI : valeur, tendance sur la période, cause d'ensemble en termes simples.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — Partie B, section 2 remplie',
      lines: [
        "Disponibilité des produits : 3,3 % des lignes d'article suivies ont connu une indisponibilité temporaire sur le trimestre (5 sur 150), soit 2,0 % en juin, 2,0 % en juillet et 6,0 % en août. Les cas d'août ont été résolus par des achats d'urgence documentés.",
        "Délai d'approvisionnement : 20,3 jours en moyenne sur le trimestre (17,4 en juin, 18,0 en juillet, 25,4 en août). La hausse d'août résulte de formalités d'importation de produits médicaux, hors de la maîtrise de l'organisation.",
        "Conformité des achats : 96,0 % des dossiers conformes (144 sur 150), stable chaque mois. Seuil de référence interne : 95 % ; la convention ne fixe pas de taux minimal chiffré.",
      ],
    },
    result: "Trois phrases courtes, chiffrées, avec tendance sur la période, sans un seul code d'entrepôt ni sigle interne.",
    tip: "Relisez votre texte avec une question : un lecteur qui n'a jamais mis les pieds dans l'entrepôt comprend-il chaque mot ? Sinon, traduisez ou supprimez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Partie B, section 3 : écarts constatés et justification',
    intro: "C'est la section la plus importante pour un auditeur. Elle contient trois éléments exigés par le gabarit : l'écart ou les écarts par rapport à la procédure standard ou aux clauses, la justification documentée (dérogation d'urgence, clause invoquée, référence au dossier archivé), et l'impact sur le taux de conformité global de la période.",
    steps: [
      {
        title: 'Décrivez l\'écart et son périmètre',
        actions: [
          "Nombre de dossiers concernés, part du total, nature de l'écart (une seule offre au lieu de trois), répartition dans le temps.",
        ],
      },
      {
        title: 'Justifiez avec clause et référence archivée',
        actions: [
          "Citez la clause de la convention qui autorise la procédure d'urgence et le niveau de signature requis.",
          "Listez les références des notes de dérogation (numéro, date) et dites où elles sont archivées.",
        ],
      },
      {
        title: 'Chiffrez l\'impact sur le taux global',
        actions: [
          "Donnez les trois parts : conformes, dérogations justifiées, non conformes sans justification, et précisez que les dérogations sont incluses dans le calcul.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — Partie B, section 3 remplie',
      lines: [
        "Écarts : 6 dossiers sur 150 (4,0 %) traités avec une seule offre au lieu de trois, selon la procédure d'urgence : 2 en juin, 2 en juillet, 2 en août.",
        "Justification : chaque dossier répond à une rupture d'un produit essentiel ou à un risque pour les bénéficiaires ; clause invoquée : article 7.4 de la convention (procédure d'urgence, référence fictive) ; notes D-2026-06-01 à D-2026-08-02, signées par le coordinateur terrain dans les 48 heures, archivées dans les dossiers d'achat correspondants.",
        "Impact : ces dossiers sont inclus dans le calcul ; le taux de conformité stricte est de 96,0 %, stable depuis juin ; 0 dossier non justifié (0,0 %) ; en comptant les dérogations justifiées comme conformes, il serait de 100 %.",
      ],
    },
    result: "Chaque écart est chiffré, rattaché à une clause, relié à un dossier archivé, et son effet sur le taux global est explicite.",
    pitfall: "Écrire « quelques dérogations en urgence » sans nombre, sans clause et sans référence d'archivage : c'est exactement la phrase qu'un auditeur transforme en constat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Partie B, sections 4 et 5 : mesures correctives, validation et cohérence avec la Partie A',
    intro: "La section 4 demande les mesures correctives engagées ou prévues pour éviter la récurrence de l'écart. La section 5 comporte trois cases : rédigé par, validé par (directeur pays ou responsable conformité), date. Avant de transmettre, vous vérifiez que les deux parties racontent les mêmes faits.",
    steps: [
      {
        title: 'Rédigez les mesures sous forme d\'engagements',
        actions: [
          "Chaque mesure : ce que l'organisation fait, à partir de quand, avec quel contrôle. Formulez à la première personne du pluriel : « Kerowa Santé s'engage à… ».",
        ],
      },
      {
        title: 'Faites la relecture croisée A / B',
        actions: [
          "Vérifiez que les chiffres du trimestre se déduisent de ceux du mois (voir tableau).",
          "Relisez la Partie B avec quatre contrôles : chiffres, absence de jargon, absence de détail interne, clause citée.",
        ],
      },
      {
        title: 'Validez et transmettez par le bon canal',
        actions: [
          "Envoyez à Grace M. le 03/09 pour validation. Elle transmet à ECHO le 04/09 : le SCM n'écrit pas directement au bailleur.",
        ],
      },
    ],
    table: {
      columns: ['KPI', 'Partie A (août)', 'Partie B (trimestre)', 'Contrôle de cohérence'],
      rows: [
        ['Rupture', '6,0 % (3/50)', '3,3 % (5/150)', '1 + 1 + 3 = 5 lignes sur 150'],
        ['Délai moyen', '25,4 jours', '20,3 jours', '(869 + 901 + 1 272) ÷ 150 = 20,28'],
        ['Conformité', '96,0 % (48/50)', '96,0 % (144/150)', '48 × 3 = 144 dossiers conformes'],
      ],
    },
    example: {
      title: 'Kerowa — Partie B, sections 4 et 5',
      lines: [
        "Mesures : Kerowa Santé s'engage à contrôler 100 % des dossiers d'achat de 1 000 EUR et plus avant paiement dès septembre 2026 ; à réaliser un audit interne de 10 dossiers le 25/09/2026 ; à constituer un dossier-type d'importation complet avant chaque expédition ; à archiver toute note de dérogation dans les 48 heures.",
        "Validation : Rédigé par Supply Chain Manager, Kerowa Santé Gogrial — Validé par Grace M., coordinatrice pays — 03/09/2026.",
      ],
    },
    result: "Partie B terminée (livrable L6) : mêmes données que la Partie A, structure, ton et niveau de détail différents, validée par la coordinatrice pays.",
    pitfall: "Copier-coller un paragraphe de la Partie A dans la Partie B « pour gagner du temps » : le jargon interne et les codes d'entrepôt entrent chez le bailleur, et la crédibilité de l'organisation baisse.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — SITREP MENSUEL
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 3',
    title: 'SITREP : ouvrir le gabarit, personnaliser l\'en-tête et rédiger l\'état d\'avancement',
    intro: "Le gabarit-sitrep-mensuel-supply-chain.docx est un troisième document, à ne pas confondre avec les deux rapports : un point de situation opérationnel, plus court et plus fréquent que le rapport bailleur, plus tactique que le rapport siège. Il se limite à un point d'avancement par domaine plutôt qu'à une analyse KPI complète. Vous l'utilisez pour partager rapidement l'état du mois, sans attendre le cycle complet.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Enregistrez le gabarit sous « L7_SITREP_Kerowa_2026-08.docx ».",
          "Dans le bandeau, remplacez [MOIS ANNÉE] par AOÛT 2026 et [nom de la base ou du projet] par Kerowa Santé — Gogrial et Kuajok.",
        ],
      },
      {
        title: 'Remplissez « État d\'avancement synthétique du mois »',
        actions: [
          "Remplacez le texte entre crochets par 2 ou 3 lignes : tendance générale du mois, niveau d'activité, point le plus notable à retenir avant la lecture du détail par domaine.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — état d\'avancement synthétique',
      lines: [
        "Août : activité soutenue (150 lignes d'article reçues sur le trimestre, 50 en août) mais deux points sous tension. Les kits d'hygiène ont manqué à Kuajok à deux reprises et un retard d'importation de 14 jours a allongé de 24 à 38 jours le délai des produits médicaux importés. La conformité des achats reste à 96 %.",
      ],
    },
    result: "L'en-tête est personnalisé et la synthèse donne en trois lignes le point notable du mois.",
    tip: "Le SITREP ne reprend pas l'analyse des causes du rapport siège : un renvoi (« détail dans le rapport siège d'août ») suffit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 3',
    title: 'SITREP : suivi par domaine, stocks, ressources humaines, achats',
    intro: "Le tableau « Suivi opérationnel par domaine » comporte 4 colonnes (Domaine, Réalisations, Difficultés rencontrées, Actions du mois prochain) et 5 lignes de domaine. Les lignes en italique grisé illustrent le type de contenu : remplacez-les par vos points réels du mois. Cette étape traite les trois premiers domaines.",
    steps: [
      {
        title: 'Domaine 1 — Gestion des stocks et de l\'entrepôt',
        actions: [
          "Réalisations : contrôles, inventaires, mises à jour de fiches de stock, respect du FEFO.",
          "Difficultés : espace, ruptures, nuisibles ; Actions : inventaire prévu, réagencement, seuils à réviser.",
        ],
      },
      {
        title: 'Domaine 2 — Ressources humaines (équipe Supply)',
        actions: [
          "Réalisations : recrutements finalisés, formations dispensées ; Difficultés : postes vacants, rotation ; Actions : recrutement en cours, plan de formation.",
        ],
      },
      {
        title: 'Domaine 3 — Achats et traitement des demandes internes (IR)',
        actions: [
          "Réalisations : demandes traitées dans le délai standard, suivi du taux de conformité ; Difficultés : demandes incomplètes, validation lente ; Actions : rappel de procédure, relance des dossiers en attente.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — domaines 1 à 3 remplis',
      lines: [
        "1. Stocks — Réalisations : inventaire tournant de Kuajok le 25/08, écart nul ; fiches de stock à jour. Difficultés : 2 ruptures de kits à Kuajok, 1 rupture de gants à Gogrial du 8 au 19/08. Actions : seuil min de Kuajok porté à 360 kits ; stock tampon de 6 semaines sur 5 articles critiques.",
        "2. RH — Réalisations : formation de 3 heures sur la fiche de stock pour les 2 magasiniers de Kuajok (12/08). Difficultés : poste de magasinier de Kuajok tenu par un journalier, forte rotation. Actions : recrutement d'un assistant stock national lancé le 07/09.",
        "3. Achats et IR — Réalisations : 163 lignes de PO traitées, 150 reçues ; conformité 96 % ; 2 dérogations signées et archivées. Difficultés : 4 demandes internes de la clinique mobile Nord reçues incomplètes ; dossier d'importation renvoyé le 05/08. Actions : rappel de procédure aux équipes programme le 07/09 ; dossier-type d'importation le 11/09.",
      ],
    },
    result: "Les trois premiers domaines contiennent des faits datés dans chaque colonne, sans texte grisé résiduel.",
    pitfall: "Laisser une ligne d'exemple grisée par oubli : le lecteur croit à un fait réel (« recrutement d'un assistant stock finalisé ») qui ne l'est pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 3',
    title: 'SITREP : transport, finance, validation et diffusion',
    intro: "Les deux derniers domaines complètent le tableau ; la table finale comporte deux cases : « Préparé par / Nom, fonction / Date » et « Validé par / Nom, fonction / Date ». Le SITREP est un document de partage rapide : il part le jour même de sa validation.",
    steps: [
      {
        title: 'Domaine 4 — Transport',
        actions: [
          "Réalisations : rotations réalisées, livraisons dans les délais ; Difficultés : état des routes, véhicule immobilisé ; Actions : plan de transport du mois suivant, entretien préventif.",
        ],
      },
      {
        title: 'Domaine 5 — Finance (suivi des paiements fournisseurs)',
        actions: [
          "Réalisations : paiements à jour, rapprochement PO – GRN – facture ; Difficultés : retard de paiement, pièce manquante ; Actions : relance, régularisation avant la fin du mois.",
        ],
      },
      {
        title: 'Complétez la validation et diffusez',
        actions: [
          "Remplissez les deux cases (nom, fonction, date) et exportez en PDF.",
          "Envoyez à la coordination, aux programmes, à la finance et au desk siège avec un message de deux lignes.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — domaines 4 et 5 et validation',
      lines: [
        "4. Transport — Réalisations : 14 rotations Gogrial–Kuajok, toutes dans les délais sauf une. Difficultés : route de Kuajok inondée du 19 au 21/08 ; camion KS-03 immobilisé 2 jours pour entretien. Actions : plan de transport de septembre le 04/09 avec itinéraire de repli ; entretien préventif de KS-03 le 10/09.",
        "5. Finance — Réalisations : paiements fournisseurs à jour, rapprochement PO – GRN – facture avant chaque paiement ; 6 notes de dérogation archivées. Difficultés : 1 facture bloquée, GRN manquant sur une livraison de gants. Actions : régularisation avec Peter A. avant le 04/09.",
        "Validation : Préparé par Supply Chain Manager, 02/09/2026 — Validé par Daniel O., coordinateur terrain, 02/09/2026.",
      ],
    },
    result: "Livrable L7 terminé : SITREP à cinq domaines, signé, exporté en PDF et diffusé le 02/09 avec le rapport siège.",
    tip: "Gardez le SITREP d'un mois comme base du suivant : vous recopiez les « Actions du mois prochain » dans « Réalisations » ou « Difficultés » selon ce qui s'est passé, et le document se construit en trente minutes.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 8 — PRÉSENTER AU COORDINATEUR
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 3',
    title: 'Choisir ce que vous présentez et bâtir la structure « so what »',
    intro: "Avant toute réunion de restitution, vous préparez, pour chaque KPI qui dérive, une seule diapositive ou un seul paragraphe qui répond à la question « so what » : que recommandez-vous, concrètement, pour le mois suivant ? Un coordinateur qui doit déduire lui-même la recommandation à partir d'un tableau de chiffres perdra confiance dans votre tableau de bord, même s'il est mathématiquement irréprochable.",
    steps: [
      {
        title: 'Triez les KPI à présenter',
        actions: [
          "Une diapositive par KPI rouge ou orange (fiche de décisions L4), plus une diapositive de synthèse et une diapositive de décisions demandées.",
          "Les KPI verts tiennent en une ligne sur la diapositive de synthèse.",
        ],
      },
      {
        title: 'Fixez la structure de chaque diapositive',
        actions: [
          "Un titre qui est la conclusion en une phrase complète, pas un nom de KPI.",
          "Le chiffre, la tendance et le n sur N ; la cause prouvée ; la recommandation avec responsable et date ; la décision demandée.",
        ],
      },
      {
        title: 'Limitez le volume',
        actions: [
          "Quatre diapositives au maximum pour une réunion de 15 minutes. Si vous en avez plus, vous mélangez analyse et décision.",
        ],
      },
    ],
    table: {
      columns: ['Bloc de la diapositive', 'Contenu', 'Longueur'],
      rows: [
        ['Titre-message', 'La conclusion en une phrase, avec le chiffre qui la fonde', '1 ligne'],
        ['Chiffre et tendance', 'Valeur, n sur N, trois derniers mois, seuil', 'Un mini-tableau'],
        ['Cause', 'Cause prouvée et document qui la prouve', '1 à 2 lignes'],
        ['Recommandation', 'Action, volume, responsable, date', '2 à 3 lignes'],
        ['Décision demandée', 'Ce que vous attendez du coordinateur, et pour quand', '1 ligne'],
      ],
    },
    example: {
      title: 'Kerowa — le plan des quatre diapositives',
      lines: [
        "1. Août en 30 secondes : 2 KPI rouges, 1 vert ; trois chiffres et trois statuts.",
        "2. Kits d'hygiène à Kuajok : rupture 11,1 % ; seuil trop bas ; passer à 360 kits.",
        "3. Délai des importations : 38 jours au lieu de 24 ; goulot à la douane ; dossier-type et autorisation-cadre.",
        "4. Décisions demandées : trois décisions, avec dates.",
      ],
    },
    result: "Vous avez le plan de la présentation : une diapositive par KPI qui dérive, une structure identique pour chacune, quatre diapositives en tout.",
    pitfall: "Présenter les 3 KPI, les 12 lignes de la synthèse et les 6 sous-délais : le coordinateur sort sans décision. Vous présentez seulement ce qui appelle une décision.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 3',
    title: 'Rédiger les diapositives et le paragraphe de repli',
    intro: "Vous rédigez les quatre diapositives à partir de la fiche de décisions L4. Rédigez aussi une version « paragraphe » de six lignes : si le projecteur ne marche pas ou si le coordinateur vous demande un résumé par message, vous aurez le même contenu.",
    steps: [
      {
        title: 'Écrivez le titre-message de chaque diapositive',
        actions: [
          "Un sujet, un verbe, un chiffre : « Les produits importés arrivent 14 jours plus tard ».",
          "Le titre doit pouvoir être lu seul et transmettre le message.",
        ],
      },
      {
        title: 'Remplissez les blocs avec les données de L3 et L4',
        actions: [
          "Chiffre et tendance : trois mois côte à côte avec n sur N ; cause : une ligne avec la pièce ; recommandation : une action chiffrée ; décision demandée : une phrase avec une date.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — diapositives 2 et 3 rédigées',
      lines: [
        "Diapositive 2 — Titre : « À Kuajok, sans changement de seuil, la rupture de kits reviendra en septembre ». Chiffre : 2 sur 6 en août à Kuajok (0 sur 12 à Gogrial) ; 4 ruptures sur le trimestre, toutes à Kuajok. Cause : seuil de 150 kits pour 120 kits par semaine et 2 semaines de délai. Recommandation : seuil à 360 kits, commande de 400 kits (3 devis), revue des seuils des 4 catégories — Peter A., 04/09. Décision : valider ce jour la commande de 400 kits (environ 2 640 EUR).",
        "Diapositive 3 — Titre : « Les produits importés arrivent 14 jours plus tard : le goulot est à la douane, pas chez le fournisseur ». Chiffre : 24 → 38 jours ; seule l'étape dédouanement et autorisations change (2 → 16 jours). Cause : dossier renvoyé par le Ministère le 05/08, certificats d'analyse manquants. Recommandation : dossier-type 10 jours avant expédition, autorisation-cadre trimestrielle, stock tampon de 6 semaines. Décision : que Grace M. porte la demande d'autorisation-cadre d'ici le 18/09 ; approuver environ 4 800 EUR de stock tampon.",
      ],
    },
    result: "Quatre diapositives rédigées, chacune avec un titre-message, un chiffre, une cause, une recommandation et une décision demandée ; un paragraphe de repli de six lignes.",
    pitfall: "Écrire « Délai d'approvisionnement : analyse » comme titre : vous annoncez un sujet, pas un message. Un titre qui ne dit pas la conclusion oblige le coordinateur à la chercher.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 3',
    title: 'Conduire la réunion et suivre les décisions',
    intro: "La réunion de restitution n'a de valeur que par les décisions qui en sortent. Vous la menez en quinze minutes, vous répondez aux questions avec des chiffres, et vous mettez à jour la fiche de décisions le jour même.",
    steps: [
      {
        title: 'Envoyez les diapositives la veille et préparez les questions',
        actions: [
          "Envoyez-les au coordinateur avec une ligne : « Je viens avec trois décisions à prendre. »",
          "Listez les trois questions probables et préparez une réponse chiffrée à chacune.",
        ],
      },
      {
        title: 'Menez la réunion au chronomètre',
        actions: [
          "Suivez l'ordre du tableau ci-dessous et demandez chaque décision à voix haute avant de passer à la diapositive suivante.",
        ],
      },
      {
        title: 'Notez et diffusez les décisions sous 24 heures',
        actions: [
          "Rédigez un compte rendu de cinq lignes : décision, responsable, date, budget éventuel.",
          "Mettez à jour la fiche de décisions L4 et planifiez le point du mois suivant.",
        ],
      },
    ],
    table: {
      columns: ['Minutes', 'Contenu', 'Support'],
      rows: [
        ['0 à 2', 'Août en 30 secondes, puis trois statuts', 'Diapositive 1'],
        ['2 à 5', 'Kits d\'hygiène à Kuajok', 'Diapositive 2'],
        ['5 à 8', 'Délai des importations', 'Diapositive 3'],
        ['8 à 12', 'Décisions demandées', 'Diapositive 4'],
        ['12 à 15', 'Questions', 'Fiche de décisions L4'],
      ],
    },
    example: {
      title: 'Kerowa — réunion du jeudi 3 septembre, 10 h, avec Daniel O.',
      lines: [
        "Question 1 : « Pourquoi 360 kits et pas 300 ? » → « 120 par semaine × (2 semaines de délai + 1 semaine de marge) = 360. À 300, la marge tombe à une demi-semaine. »",
        "Question 2 : « Les dérogations menacent-elles la conformité ? » → « 6 sur 150 en trois mois, 0 non justifiée ; contrôle avant paiement dès septembre. »",
        "Décisions : (1) commande de 400 kits validée ; (2) Grace M. porte la demande d'autorisation-cadre au Ministère avant le 18/09 ; (3) stock tampon de 6 semaines approuvé, environ 4 800 EUR immobilisés.",
        "Compte rendu envoyé le jour même à 15 h ; fiche L4 mise à jour avec les trois décisions.",
      ],
    },
    result: "Livrable L8 terminé : présentation de quatre diapositives, trois décisions obtenues, compte rendu diffusé et fiche L4 à jour.",
    tip: "Terminez toujours par : « Qu'est-ce que je dois savoir de plus pour que vous décidiez aujourd'hui ? » Une question qui reste ouverte devient une décision repoussée.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 9 — NARRATIVE DE PLANIFICATION ANNUELLE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 5',
    title: 'Réunir la matière de l\'année et ouvrir le gabarit de narrative',
    intro: "Là où le tableau de bord KPI et le gabarit de rapport pilotent le mois, la narrative structure l'année : contexte externe et risques, bilan de l'année écoulée, objectifs de l'année à venir, ressources humaines, chronogramme. Elle se rédige une seule fois par an, en fin d'année, en amont du cycle de planification suivant, et sert de base au dialogue avec votre coordinateur ou votre desk avant l'arbitrage du budget. Kerowa la rédige le 18 novembre 2026, pour la phase suivante du projet.",
    steps: [
      {
        title: 'Réunissez la matière',
        actions: [
          "Copies datées des tableaux de bord mensuels, fiches de décisions, SITREP, note de positionnement du Module 01, plan d'action de la fragilité.",
          "Pour chaque KPI, calculez la moyenne de la période et le nombre de mois verts, orange et rouges.",
        ],
      },
      {
        title: 'Ouvrez le gabarit et repérez les cinq sections',
        actions: [
          "Enregistrez gabarit-narrative-planification-annuelle-supply-chain.docx sous « L9_Narrative_planification_Kerowa_2026.docx ».",
          "Sections : 1 Contexte externe et risques ; 2 Objectifs stratégiques de l'année en cours (bilan) ; 3 Objectifs stratégiques de l'année à venir ; 4 Ressources humaines ; 5 Chronogramme.",
          "Les lignes en gris sont des consignes et les « Ex. » sont des exemples : remplacez-les par votre contenu.",
        ],
      },
    ],
    table: {
      columns: ['KPI (valeurs fictives de l\'exemple)', 'Moyenne juin–octobre', 'Mois verts', 'Mois orange', 'Mois rouges'],
      rows: [
        ['Rupture globale', '3,0 %', '4', '0', '1 (août)'],
        ['Délai — catégories importées', '29,0 jours', '3', '1', '1 (août)'],
        ['Conformité achats', '96,6 %', '5', '0', '0'],
      ],
    },
    result: "Le fichier est prêt, vous avez le tableau de synthèse des KPI de l'année, et toute la matière nécessaire est ouverte à côté du gabarit.",
    tip: "Une narrative qui reprend les chiffres du tableau de bord est crédible ; une narrative qui n'en cite aucun est une opinion. Citez au moins un chiffre dans chaque section.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 5',
    title: 'Section 1 : contexte externe et risques liés à la chaîne d\'approvisionnement',
    intro: "Deux consignes dans le gabarit : le marché fournisseurs local (nombre et fiabilité des fournisseurs qualifiés, niveau de concurrence, contraintes logistiques ou sécuritaires de la zone : accès, saisonnalité, coupures de route) et les risques liés aux opérations d'approvisionnement susceptibles d'avoir des conséquences opérationnelles (fournisseur unique, volatilité des prix, délais douaniers, dépendance à un seul axe de transport).",
    steps: [
      {
        title: 'Rédigez le paragraphe « marché fournisseurs local »',
        actions: [
          "Appuyez-vous sur le portefeuille qualifié (Module 04) et sur la cartographie des acteurs (Module 01) : combien de fournisseurs qualifiés, quelle concurrence, quelles contraintes de saison et d'accès.",
        ],
      },
      {
        title: 'Rédigez les risques, un par ligne',
        actions: [
          "Pour chaque risque : la source, la conséquence opérationnelle chiffrée, le premier signal qui l'annonce, la parade prévue.",
          "Gardez 4 à 6 risques : au-delà, plus rien ne se hiérarchise.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 1 remplie',
      lines: [
        "Marché local : 3 grossistes qualifiés à Wau (Module 04) et un accord-cadre de vivres ; concurrence réelle sur les vivres, quasi nulle sur les médicaments et le matériel médical, achetés à une centrale internationale. Contraintes : la saison des pluies (juin à octobre) coupe l'axe Gogrial–Kuajok plusieurs jours ; le délai Wau → Kuajok passe de 10 à 14 jours.",
        "Risque 1 — Autorisation d'importation : 16 jours de blocage en août, soit +14 jours sur le délai importé ; signal : dossier renvoyé ; parade : dossier-type et autorisation-cadre.",
        "Risque 2 — Fournisseur unique pour les produits nutritionnels thérapeutiques (dotation d'une agence onusienne) ; parade : rapports mensuels de consommation avant le 5.",
        "Risque 3 — Dépendance à un seul axe routier Gogrial–Kuajok ; signal : pluies de plus de 3 jours ; parade : stock tampon à Kuajok.",
      ],
    },
    result: "La section 1 décrit le marché en quelques phrases chiffrées et liste des risques avec signal et parade.",
    pitfall: "Écrire des généralités sur l'humanitaire (« contexte sécuritaire instable ») sans conséquence opérationnelle chiffrée : le coordinateur ne sait pas quoi budgétiser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 5',
    title: 'Section 2 : bilan de l\'année (objectifs, défis, réalisations, enseignements)',
    intro: "La section 2 est organisée en quatre blocs : objectifs principaux de l'année écoulée (atteints ou non), principaux défis, « Autres réalisations et défis » (un tableau à deux cellules) et « Principaux enseignements à conserver » (trois consignes). Chaque bloc s'appuie sur un chiffre du tableau de bord.",
    steps: [
      {
        title: 'Rédigez les objectifs et les défis',
        actions: [
          "Reprenez la liste des objectifs fixés en début d'année : pour chacun, atteint, partiellement ou non, avec le chiffre.",
          "Listez ensuite les trois défis qui ont pesé sur la mise en œuvre.",
        ],
      },
      {
        title: 'Remplissez le tableau « Autres réalisations et défis »',
        actions: [
          "Cellule de gauche : actions de sensibilisation et de communication auprès des départements demandeurs, avec résultat mesuré.",
          "Cellule de droite : outil de suivi partagé mis en place ou consolidé, pour quel usage.",
        ],
      },
      {
        title: 'Rédigez trois enseignements',
        actions: [
          "Infrastructures et conformité ; séparation des fonctions (matrice RACI, découplage achats et gestion de stock) ; anticipation par la transparence (partager la visibilité des données avec les programmes).",
          "Pour chacun : ce que vous avez observé cette année et ce que vous conservez.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 2 remplie (valeurs fictives)',
      lines: [
        "Objectifs : conformité ≥ 95 % : atteint (96,6 % en moyenne, 5 mois sur 5) ; 3 grossistes qualifiés et accord-cadre vivres : atteint ; rupture globale ≤ 3 % : atteint 4 mois sur 5 ; délai des importations ≤ 28 jours : non atteint (3 mois sur 5). Défis : autorisation d'importation, fournisseur unique de produits nutritionnels, axe routier saisonnier.",
        "Sensibilisation : 3 sessions de 45 minutes avec les équipes programme ; demandes internes incomplètes passées de 11 en mai à 4 en août. Outil partagé : tracker des demandes internes avec le statut visible de chaque demande, ouvert aux programmes depuis juin.",
        "Enseignements : (1) la capacité de stockage de Kuajok conditionne la conformité des produits sensibles ; (2) la séparation des fonctions (celui qui commande ne réceptionne pas) a supprimé les écarts de réception ; (3) partager le tableau de bord chaque mois avec les programmes leur a permis d'annoncer la hausse de consommation de kits en août, trop tard pour agir sur le seuil.",
      ],
    },
    result: "Le bilan cite pour chaque objectif son résultat chiffré, les défis et trois enseignements tirés de faits observés.",
    pitfall: "Présenter un bilan uniquement positif : un objectif non atteint (le délai des importations) expliqué avec sa cause est plus crédible, et prépare l'objectif de l'année suivante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 4 sur 5',
    title: 'Sections 3 et 4 : objectifs de l\'année à venir et ressources humaines',
    intro: "La section 3 demande les objectifs retenus et la méthode (jalons, indicateurs de suivi, ressources), la raison de leur choix avec le lien aux objectifs des programmes, et les objectifs de plus long terme. La section 4 demande l'organigramme (document séparé), les profils de staff international et national, l'impact sur le budget RH et la demande de support planifié.",
    steps: [
      {
        title: 'Section 3 — Formulez des objectifs mesurables par un KPI',
        actions: [
          "Chaque objectif = un KPI de la fiche L1, une cible, un jalon, une ressource ; reliez-le à un objectif du programme.",
          "Ajoutez un objectif pluriannuel si pertinent (digitalisation du cycle achats, diversification du panel fournisseurs).",
        ],
      },
      {
        title: 'Section 4 — Décrivez l\'équipe et les demandes',
        actions: [
          "Référence à l'organigramme (document séparé) ; postes internationaux avec niveau, durée, mois FTE ; postes nationaux ajoutés ou modifiés avec justification.",
          "Chiffrez l'impact sur le budget RH et formulez la demande de support au département référent.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — sections 3 et 4 remplies (phase 2 hypothétique, sous réserve d\'approbation du bailleur)',
      lines: [
        "Objectifs : (1) rupture globale ≤ 3 % chaque mois et zéro rupture sur un article critique ; (2) délai des importations ≤ 28 jours grâce à l'autorisation-cadre ; (3) conformité ≥ 97 % et 100 % des dérogations archivées sous 48 heures ; (4) tableau de bord alimenté par Power Query, miroir Power BI si le projet couvre 3 sites.",
        "Pourquoi : les ruptures et les retards ont touché la clinique mobile Nord ; chaque objectif est relié à la continuité des soins et à l'audit ECHO. Long terme : accord-cadre pluriannuel avec 2 fournisseurs qualifiés.",
        "RH : équipe de 5 personnes (SCM, logisticien, assistante achats, 2 magasiniers). Demande : un assistant stock national pour Kuajok, 12 mois FTE ; formation reporting de 2 jours pour le remplaçant. Support demandé au desk : appui de 3 jours pour l'audit blanc.",
      ],
    },
    result: "Objectifs reliés à un KPI et à un programme, équipe décrite, demandes RH et de support chiffrées.",
    pitfall: "Formuler des objectifs non mesurables (« améliorer la performance ») : à la prochaine narrative, vous ne pourrez ni dire s'ils sont atteints ni justifier votre budget.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 5 sur 5',
    title: 'Section 5 : chronogramme, relecture et dialogue avec le coordinateur',
    intro: "Le chronogramme est un tableau à trois colonnes (Période, Jalon / échéance clé, Responsable), avec une ligne d'exemple (« Ex. : T1 — lancement de l'appel d'offres cadre annuel — Supply Chain Manager ») et cinq lignes vides. Vous le remplissez, vous relisez l'ensemble, puis vous présentez la narrative avant l'arbitrage du budget.",
    steps: [
      {
        title: 'Remplissez le tableau',
        actions: [
          "Remplacez la ligne d'exemple par un vrai jalon et complétez les lignes vides ; ajoutez des lignes si nécessaire (clic droit > Insérer).",
          "Chaque jalon a une période, une date ou un mois, et un responsable nommé par sa fonction.",
        ],
      },
      {
        title: 'Relisez avec trois contrôles',
        actions: [
          "Chaque objectif de la section 3 a au moins un jalon dans le chronogramme.",
          "Chaque demande RH de la section 4 apparaît avec une date.",
          "Aucune consigne grise ni « Ex. » ne subsiste.",
        ],
      },
      {
        title: 'Planifiez le dialogue',
        actions: [
          "Envoyez la narrative trois jours avant la réunion et réservez 45 minutes avec le coordinateur ou le desk.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — chronogramme rempli',
      lines: [
        "T1 (déc.–févr.) | Appel d'offres cadre annuel vivres et consommables | Supply Chain Manager.",
        "T1 | Dossier-type d'importation et demande d'autorisation-cadre | Coordinateur médical, coordinatrice pays.",
        "T2 (mars–mai) | Audit blanc de 10 dossiers et inventaire complet | Supply Chain Manager, administration-finance.",
        "T2 | Revue des seuils min / max avant la saison des pluies | Logisticien.",
        "T3 (juin–août) | Test du miroir Power BI si 3 sites | Supply Chain Manager.",
        "T4 (sept.–nov.) | Bilan annuel et narrative suivante | Supply Chain Manager.",
      ],
    },
    result: "Livrable L9 terminé : narrative complète en cinq sections, chronogramme rempli, présentée à la coordination avant l'arbitrage budgétaire.",
    tip: "Reprenez la narrative de l'année précédente comme point de départ : la section 2 de cette année devient la base de comparaison de l'année suivante.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 10 — MIROIR POWER BI
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 1 sur 3',
    title: 'Décider si Power BI se justifie, et pourquoi pas Excel seul',
    intro: "Power BI est un outil de visualisation plus avancé qu'Excel : il se connecte aux bases ERP et actualise les tableaux de bord automatiquement. Il devient pertinent dans une organisation qui dispose d'une équipe data mature et de volumes importants sur plusieurs missions. Pour l'immense majorité des postes de terrain, Excel, avec des extractions ERP propres (Module 08), couvre entièrement le besoin. Vous appliquez cinq critères avant de décider.",
    steps: [
      {
        title: 'Appliquez les cinq critères à votre mission',
        actions: [
          "Volume de lignes par mois, nombre de missions à consolider, source ERP connectable, compétence disponible pour maintenir le modèle, besoin de diffusion en ligne.",
          "Si au moins trois critères dépassent le seuil de basculement, lancez un pilote ; sinon, restez sur Excel.",
        ],
      },
      {
        title: 'Notez la décision et sa date de revue',
        actions: [
          "Écrivez la décision et ses raisons dans le mode d'emploi du fichier (procédure 11).",
          "Fixez une date de revue : à l'ouverture d'un nouveau site ou lorsque le volume mensuel double.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Kerowa (août 2026)', 'Seuil de basculement', 'Verdict'],
      rows: [
        ['Volume mensuel', '50 lignes', 'Plusieurs milliers de lignes', 'Excel'],
        ['Nombre de missions', '1 (2 entrepôts)', '3 missions ou plus à consolider', 'Excel'],
        ['Source de données', 'Extraction ERP par Power Query, déjà maîtrisée', 'Connexion directe à une base ERP', 'Excel'],
        ['Compétence', 'Le SCM et un remplaçant', 'Équipe data capable de maintenir un modèle', 'Excel'],
        ['Diffusion', 'PDF par e-mail suffisant', 'Rapport partagé en ligne avec filtres', 'Excel'],
      ],
    },
    result: "Décision documentée : Excel conservé pour 2026, miroir Power BI à tester si la phase suivante couvre trois sites. La procédure ci-après sert alors de pilote.",
    pitfall: "Passer à Power BI parce que c'est à la mode : vous ajoutez un outil que seul son auteur sait maintenir, et le tableau de bord dépend de nouveau d'une seule personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 2 sur 3',
    title: 'Importer le classeur dans Power BI Desktop et préparer les colonnes',
    intro: "Le miroir Power BI se construit sur le même classeur Excel : une seule base de données propre, plusieurs narrations. Le fichier source est l'onglet « Données brutes » du template, dont l'en-tête est en ligne 4 et les données à partir de la ligne 5.",
    steps: [
      {
        title: 'Importez l\'onglet « Données brutes »',
        actions: [
          "Dans Power BI Desktop : Accueil > Obtenir les données > Classeur Excel, choisissez L2_Tableau_de_bord_KPI_Kerowa_2026-08.xlsx.",
          "Cochez « Données brutes » (et non « Tableau de bord ») puis cliquez sur Transformer les données.",
        ],
      },
      {
        title: 'Préparez les colonnes dans l\'éditeur Power Query',
        actions: [
          "Accueil > Supprimer les lignes > Supprimer les lignes du haut : 3 (titre, sous-titre, ligne vide), puis Utiliser la première ligne comme en-têtes.",
          "Définissez les types : dates pour E et F, nombre entier pour A, texte pour B, C, D, H et I.",
          "Ajoutez une colonne personnalisée « Délai calculé » : Duration.Days([Date réception] - [Date demande d'achat]).",
          "Filtrez les lignes vides de la colonne ID ligne, puis Accueil > Fermer et appliquer.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — résultat dans le volet Données',
      lines: [
        "Table « Données brutes » : 150 lignes, 10 colonnes (les 9 colonnes du template plus « Délai calculé »).",
        "Contrôle : le nombre de lignes affiché en bas de la table doit correspondre au « Nombre » compté dans Excel : 150.",
        "Le fichier Excel reste la source ; chaque mois, il suffit de le remplacer et d'actualiser.",
      ],
    },
    result: "Les données sont chargées dans le modèle avec des types corrects et une colonne de délai recalculée.",
    pitfall: "Importer l'onglet « Tableau de bord » : vous chargez des formules déjà agrégées et vous ne pouvez plus croiser par zone ou par période. Importez toujours les données brutes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 3 sur 3',
    title: 'Créer les trois mesures DAX, la page de rapport, puis actualiser et partager',
    intro: "Une mesure DAX est une formule qui se recalcule selon les filtres du rapport : c'est l'équivalent des COUNTIFS et AVERAGEIFS du template, mais pour n'importe quelle combinaison de catégorie, de zone ou de période choisie par le lecteur.",
    steps: [
      {
        title: 'Créez les trois mesures',
        actions: [
          "Accueil > Nouvelle mesure, une par KPI, dans la table « Données brutes » (formules ci-dessous).",
        ],
      },
      {
        title: 'Construisez la page',
        actions: [
          "Trois visuels « Carte » avec les trois mesures.",
          "Une « Matrice » : catégorie en lignes, période en colonnes, rupture en valeurs ; un graphique en courbes de la tendance par période.",
          "Deux « Segments » : Période et Zone / Entrepôt, pour que chaque lecteur choisisse son mois et son site.",
        ],
      },
      {
        title: 'Actualisez et partagez',
        actions: [
          "Chaque mois, remplacez le fichier Excel, puis Accueil > Actualiser.",
          "Pour partager, publiez dans l'espace de travail Power BI et donnez l'accès en lecture aux seuls destinataires prévus (coordination, desk).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — les trois mesures DAX',
      lines: [
        `Taux de rupture (%) = DIVIDE( CALCULATE( COUNTROWS('Données brutes'), 'Données brutes'[En rupture ce mois] = "Oui" ), COUNTROWS('Données brutes') ) * 100`,
        "Délai moyen (jours) = AVERAGE( 'Données brutes'[Délai calculé] )",
        `Taux de conformité (%) = DIVIDE( CALCULATE( COUNTROWS('Données brutes'), 'Données brutes'[Statut conformité achat] = "Conforme" ), COUNTROWS('Données brutes') ) * 100`,
        "Vérification : avec le segment Période = 2026-08, les trois cartes affichent 6,0 %, 25,4 jours et 96,0 %, comme la pondération faite dans Excel.",
      ],
    },
    result: "Livrable L10 (partie Power BI) terminé : trois mesures qui reproduisent à l'identique les trois KPI d'Excel, une page filtrable par période et par zone.",
    tip: "Les trois cartes de Power BI affichent directement un mois si vous sélectionnez la période dans le segment : c'est le gain principal par rapport aux trois cartes du template, qui calculent sur toute la plage.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 11 — PÉRENNISER LE DISPOSITIF
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 1 sur 2',
    title: 'Documenter la méthode de mise à jour dans le fichier lui-même',
    intro: "Un fichier que seul son créateur sait mettre à jour ne survit pas à son départ en congé ou à son remplacement. La méthode de mise à jour se documente directement dans le fichier, pas seulement dans votre tête. Le template ne contient pas d'onglet de mode d'emploi : vous l'ajoutez vous-même, en dernière position, sans toucher aux deux onglets existants.",
    steps: [
      {
        title: 'Ajoutez un onglet « Mode d\'emploi »',
        actions: [
          "Clic droit sur l'onglet « Tableau de bord » > Insérer > Feuille de calcul, renommez-la « Mode d'emploi » et placez-la en dernier.",
        ],
      },
      {
        title: 'Écrivez dix lignes qui permettent à un tiers de refaire le travail',
        actions: [
          "Objectif et lecteurs du fichier ; sources et responsables de chaque colonne ; calendrier de clôture ; étapes de mise à jour numérotées ; pièges connus ; journal des versions.",
        ],
      },
      {
        title: 'Protégez les formules',
        actions: [
          "Révision > Protéger la feuille sur « Tableau de bord » : les cellules calculées sont verrouillées, personne ne les écrase par erreur.",
          "Rangez le fichier vierge et le mode d'emploi à un endroit connu de deux personnes au moins.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — extrait du mode d\'emploi',
      lines: [
        "1. Chaque mois, à J1 : demander les 3 sources à l'assistante achats, au logisticien et à la finance avant 12 h.",
        "2. Ouvrir le modèle vierge, l'enregistrer sous L2_Tableau_de_bord_KPI_Kerowa_AAAA-MM.xlsx.",
        "3. Vider A5:F et H5:I, jamais la colonne G ; formater D en Texte avant de coller.",
        "4. Insérer ou supprimer des lignes à l'intérieur de la plage pour qu'elle corresponde au nombre de lignes.",
        "5. Contrôler les filtres B, C, D, H, I ; trier G ; aucun délai négatif.",
        "6. Mettre à jour A12:B23 avec les trois derniers mois ; relire les cartes et la synthèse.",
        "7. Piège connu : une ligne sans date de réception reste hors du tableau.",
        "8. Journal des versions : date, auteur, changement.",
      ],
    },
    result: "Le fichier contient son propre mode d'emploi et ses formules sont protégées : un remplaçant peut refaire la clôture sans vous appeler.",
    pitfall: "Écrire le mode d'emploi dans un document séparé que personne ne retrouve : le jour de votre congé, il n'existe pas. Il doit voyager avec le fichier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 2 sur 2',
    title: 'Installer le calendrier de clôture et former un remplaçant',
    intro: "Un tableau de bord vit tant qu'il est mis à jour à date fixe par quelqu'un qui n'est pas forcément son auteur. Vous fixez le calendrier, vous nommez un remplaçant et vous testez que le mode d'emploi suffit.",
    steps: [
      {
        title: 'Fixez le calendrier de clôture',
        actions: [
          "Inscrivez dans l'agenda partagé les jours J−3 à J+4 du tableau ci-dessous, et chaque responsable.",
        ],
      },
      {
        title: 'Nommez un remplaçant et faites-lui refaire la clôture',
        actions: [
          "Choisissez une personne de l'équipe (assistante achats, logisticien).",
          "Demandez-lui de produire le mois suivant en suivant uniquement le mode d'emploi ; chronométrez, notez chaque question qu'elle pose.",
          "Corrigez le mode d'emploi pour chaque blocage rencontré.",
        ],
      },
    ],
    table: {
      columns: ['Jour', 'Action', 'Responsable'],
      rows: [
        ['J−3', 'Rappel des 3 sources demandées', 'Supply Chain Manager'],
        ['J1', 'Réception, saisie, contrôle des données (procédures 2 et 3)', 'Supply Chain Manager ou remplaçant'],
        ['J2', 'Interprétation et fiche de décisions (procédure 4)', 'Supply Chain Manager'],
        ['J3', 'Rapports siège, bailleur et SITREP (procédures 5 à 7)', 'Supply Chain Manager'],
        ['J4', 'Présentation au coordinateur et compte rendu (procédure 8)', 'Supply Chain Manager'],
      ],
    },
    example: {
      title: 'Kerowa — test du remplaçant sur le mois de septembre',
      lines: [
        "Remplaçante : l'assistante achats. Durée de la première clôture avec le seul mode d'emploi : 3 h 40, contre 2 h pour l'auteur.",
        "Trois blocages notés : la colonne D qui se convertit en date, l'insertion de lignes sous la ligne 96, l'oubli de retirer les commandes non reçues. Chacun est ajouté au mode d'emploi.",
        "Décision : la remplaçante refait la clôture d'octobre en entier ; le SCM relit seulement l'interprétation.",
      ],
    },
    result: "Livrable L10 terminé : calendrier inscrit, remplaçant formé, mode d'emploi corrigé sur la base d'un test réel. Le tableau de bord ne dépend plus d'une seule personne.",
    tip: "Refaites le test à chaque changement de remplaçant et à chaque changement de version du template : un mode d'emploi n'est valable que s'il a été exécuté par quelqu'un d'autre.",
  },
  {
    type: 'checklist',
    title: 'Routine mensuelle : garder le dispositif vivant',
    items: [
      "À J−3, demandez par écrit les trois sources (registre des PO, fiches de stock et ruptures, dérogations) avec la date et le format.",
      "À J1, recopiez le modèle vierge, videz la démonstration sans toucher à la colonne G, ajustez la plage et collez les données en valeurs.",
      "Contrôlez les filtres B, C, D, H et I, triez le délai, cherchez les doublons : aucune valeur inattendue, aucun délai négatif.",
      "Relevez les trois cartes (trimestre) et calculez les valeurs du mois par pondération ; comparez-les à un contrôle par filtre.",
      "Mettez à jour les trois périodes de la synthèse (A12:B23), lisez par catégorie et par zone, notez chaque cellule rouge.",
      "Écrivez la fiche de décisions : constat, cause prouvée, action, responsable, échéance pour chaque rouge et orange.",
      "Rédigez la Partie A, la Partie B (si trimestre clos) et le SITREP à partir des mêmes chiffres ; relisez pour la cohérence et le jargon.",
      "Présentez au coordinateur en 15 minutes, diffusez le compte rendu sous 24 heures et mettez à jour la fiche de décisions.",
      "Archivez le classeur daté, la fiche de décisions et les rapports en PDF dans le dossier du mois.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU — KEROWA SANTÉ, CLÔTURE D'AOÛT 2026, DE BOUT EN BOUT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/4) — De la donnée au chiffre : le tableau de bord d\'août',
    scenario: "Lundi 31 août 2026, jour 1 de la clôture. Registre des PO : 163 lignes dont 13 sans date de réception, donc 150 lignes à saisir. Le template a 92 lignes de démonstration : 58 lignes sont insérées à l'intérieur de la plage. Le SCM contrôle les données, lit les cartes et la synthèse.",
    steps: [
      { title: 'Alimenter et contrôler (procédures 2 et 3)', body: "Démonstration vidée sans toucher à la colonne G, plages portées à 5:154, colonne D formatée en texte, 150 lignes collées en valeurs.", actions: ["Trois anomalies corrigées avant lecture : catégorie sans accent (ID 87, 92), quatre périodes converties en dates, une date de réception en 2025 (ID 58).", "Cartes lues : 3,33 %, 20,28 jours, 96,00 % sur le trimestre ; pondération de la synthèse pour le mois d'août ; contrôle par filtre : identique."] },
      { title: 'Lire la synthèse (procédure 3, étapes 4 et 5)', body: "Trois signaux ressortent de la synthèse, un par KPI.", actions: ["Kits d'hygiène en août : 11,1 % (2 sur 18), les deux à Kuajok (2 sur 6, contre 0 sur 12 à Gogrial).", "Catégories importées : 24 → 38 jours, dont +14 jours dans l'étape « dédouanement et autorisations ».", "Conformité : 96,0 % stable ; 2 dérogations d'urgence justifiées en août."] },
    ],
    table: {
      columns: ['KPI (Kerowa)', 'Juin', 'Juillet', 'Août', 'Trimestre (cartes)', 'Statut août'],
      rows: [
        ['Rupture globale', '2,0 % (1/50)', '2,0 % (1/50)', '6,0 % (3/50)', '3,33 % (5/150)', 'Rouge'],
        ['Délai global (jours)', '17,4', '18,0', '25,4', '20,28', '—'],
        ['Délai — catégories importées (jours)', '22,6', '24,0', '38,0', 'Non affiché', 'Rouge'],
        ['Délai — catégories locales (jours)', '14,2', '14,7', '15,6', 'Non affiché', 'Vert'],
        ['Conformité achats', '96,0 % (48/50)', '96,0 % (48/50)', '96,0 % (48/50)', '96,00 % (144/150)', 'Vert'],
      ],
    },
    result: "Le tableau de bord est validé : 3 KPI par formules, aucune valeur codée en dur, trois signaux localisés. Livrables L1 (fiche KPI), L2 et L3 terminés.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/4) — Du chiffre à la décision : trois chaînes constat – cause – action',
    scenario: "Jours 2 et 3. Pour chaque signal, le SCM pose trois hypothèses, demande la preuve de chacune, ne retient que ce qui est prouvé, puis rédige la ligne de la fiche de décisions (L4).",
    steps: [
      { title: 'Fait 1 — Rupture des kits d\'hygiène : 4,2 % → 11,1 %, tout à Kuajok', body: "Hypothèses : seuil trop bas, délai fournisseur sous-estimé, consommation en hausse. Preuves : fiche de stock de Kuajok et demandes internes de la clinique mobile Nord.", actions: ["Seuil min de 150 kits fixé le 1er juin sur 60 kits par semaine ; consommation d'août de 120 kits par semaine ; délai Wau → Kuajok de 2 semaines : 150 ÷ 120 = 1,25 semaine, inférieure au délai.", "Nouveau seuil : 120 × (2 + 1) = 360 kits ; commande de 400 kits en 3 devis ; revue des seuils des 4 catégories."], result: "Responsable : Peter A. et le SCM, échéance 04/09, contrôle le 30/09 (zéro rupture de kits en septembre)." },
      { title: 'Fait 2 — Délai des catégories importées : 24 → 38 jours', body: "Hypothèses : validation interne, fournisseur, douane et autorisations. Preuve : registre des PO, courrier du Ministère, accusé de dépôt.", actions: ["Décomposition : seule l'étape « dédouanement et autorisations » change (2 → 16 jours) ; validation, fournisseur, transit et transport sont inchangés.", "Cause prouvée : dossier renvoyé par le Ministère le 05/08, certificats d'analyse manquants, régularisé le 19/08 (14 jours). La rupture de gants du 8 au 19/08 en découle."], result: "Actions : dossier-type d'importation 10 jours avant chaque expédition (Dr Samuel T., 11/09), autorisation-cadre trimestrielle portée par Grace M. (18/09), stock tampon de 6 semaines sur 5 articles critiques (15/09)." },
      { title: 'Fait 3 — Conformité stable à 96 %, 2 dérogations sur 50', body: "Les deux dossiers (ID 133 et ID 139) répondent à des ruptures réelles.", actions: ["Contrôle des six pièces de chaque dérogation : notes D-2026-08-01 (1 420 EUR, gants) et D-2026-08-02 (1 980 EUR, kits), signées par Daniel O. dans les 48 heures, archivées.", "Trois parts du trimestre : 96,0 % conformes, 4,0 % dérogations justifiées, 0,0 % non justifiées."], result: "Action : maintenir ; contrôle de 100 % des dossiers de 1 000 EUR et plus avant paiement en septembre ; audit blanc de 10 dossiers le 25/09." },
    ],
    tip: "Un même mois peut raconter deux causes différentes : ici, la rupture de kits est une cause interne (seuil), la rupture de gants une cause externe (douane). Elles ne se traitent pas de la même façon.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/4) — Mêmes chiffres, deux rapports, deux narrations',
    scenario: "Jour 3 (mercredi 2 septembre) pour la Partie A et le SITREP ; jeudi 3 septembre pour la Partie B, validée par Grace M. et envoyée à ECHO le vendredi 4. Les deux parties partent de la même base de données ; le tableau montre ce qui change.",
    steps: [
      { title: 'Ce qui reste commun', body: "Les chiffres : 6,0 % en août et 3,3 % sur le trimestre pour la rupture, 25,4 et 20,3 jours pour le délai, 96,0 % pour la conformité. Aucun chiffre n'est modifié d'une partie à l'autre ; seule la période et le niveau de détail changent." },
    ],
    table: {
      columns: ['Sujet', 'Partie A — rapport interne siège', 'Partie B — rapport de conformité bailleur'],
      rows: [
        ['Rupture', 'Rupture de 6,0 % en août (3 sur 50) ; kits d\'hygiène à Kuajok 2 sur 6 ; seuil min de 150 kits trop bas ; passer à 360 kits avant le 04/09', 'Indisponibilité temporaire de 3,3 % des lignes sur le trimestre (5 sur 150) ; cas d\'août résolus par achats d\'urgence documentés'],
        ['Délai', 'Importés 38 jours contre 24 ; dédouanement 2 → 16 jours ; dossier renvoyé le 05/08 ; dossier-type et autorisation-cadre', '20,3 jours en moyenne sur le trimestre ; hausse d\'août due à des formalités d\'importation hors maîtrise de l\'organisation'],
        ['Conformité', '96,0 % (48 sur 50) ; kits 94,4 % et matériel médical 90,0 % ; une dérogation chacun', '96,0 % (144 sur 150) ; 6 dérogations d\'urgence justifiées, notes D-2026-06-01 à D-2026-08-02, article 7.4 ; 0 non justifiée'],
        ['Ton et structure', 'Opérationnel ; actions avec responsable et date ; points d\'attention', 'Redevabilité ; clause citée ; écarts justifiés ; engagements'],
      ],
    },
    result: "Deux documents distincts, aucune phrase copiée de l'un à l'autre, aucun code interne chez le bailleur, mêmes chiffres. Livrables L5, L6 et L7 (SITREP) terminés.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/4) — La présentation, les décisions et le dossier final',
    scenario: "Jeudi 3 septembre, 10 h : réunion de 15 minutes avec Daniel O., quatre diapositives. Voici ce qui est décidé et ce que contient le dossier du mois à la fin du cycle.",
    steps: [
      { title: 'Décisions obtenues en réunion', actions: ["Commande de 400 kits d'hygiène validée (environ 2 640 EUR, 3 devis).", "Grace M. porte la demande d'autorisation-cadre au Ministère avant le 18/09.", "Stock tampon de 6 semaines approuvé (environ 4 800 EUR immobilisés).", "Compte rendu envoyé à 15 h ; fiche L4 mise à jour."] },
      { title: 'Après la réunion', actions: ["Grace M. valide la Partie B le 03/09 et la transmet à ECHO le 04/09.", "Le SITREP est diffusé le 02/09.", "Le remplaçant est formé sur la clôture de septembre."] },
    ],
    example: {
      title: 'Dossier « Reporting SCM / 2026-08 » en fin de cycle',
      lines: [
        "SOURCE_ : registre des PO, fiches de stock, liste des dérogations, extraction ERP.",
        "L1_Fiche_KPI_Kerowa_2026-08.docx — définitions, règles de saisie, seuils, décisions.",
        "L2_Tableau_de_bord_KPI_Kerowa_2026-08.xlsx — 150 lignes, 3 KPI par formules, synthèse, mode d'emploi.",
        "L3 note d'analyse (1 page) ; L4 fiche de décisions (4 lignes) ; L5-L6_Rapports_Kerowa_2026-08.docx (Parties A et B) ; L7_SITREP_Kerowa_2026-08.docx.",
        "L8 présentation (4 diapositives) et compte rendu du 03/09.",
      ],
    },
    result: "Le cas est résolu : un tableau de bord par formules, quatre décisions traçables, deux rapports distincts, un SITREP, une présentation qui a produit trois décisions le jour même.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 (noté) — Fin de mois à Maiduguri, Nigeria',
    instructions: "Vous êtes Supply Chain Manager d'une ONG internationale (fictive) qui répond à la crise humanitaire du bassin du lac Tchad, basée à Maiduguri. Nous sommes le dernier jour du mois. Le desk siège attend le tableau de bord KPI complet avec vos recommandations pour le mois suivant ; un bailleur institutionnel majeur, qui finance 60 % de vos achats sur le projet, attend son rapport de conformité trimestriel, la même semaine où une mission d'audit est annoncée pour le trimestre suivant. Vous disposez des mêmes données pour produire les deux. Les faits marquants du mois : le taux de rupture passe de 4 % à 11 % sur la catégorie « Kits d'hygiène », concentré sur l'entrepôt secondaire ; le délai moyen passe de 24 à 38 jours sur les commandes internationales, à cause d'un retard de dédouanement documenté ; le taux de conformité reste stable à 96 %, avec 2 dossiers sur 50 marqués « dérogation d'urgence », justifiés et archivés.",
    steps: [
      { title: 'Rédigez la fiche KPI (P1)', actions: ["Définitions, règle de la rupture « ce mois », périmètre, seuils vert / orange / rouge et décision pour chaque rouge."] },
      { title: 'Simulez les données et remplissez le template (P2)', actions: ["Dans tableau-de-bord-kpi-supply-chain.xlsx, saisissez deux mois de 50 lignes chacun (mois précédent et mois courant), zones « Entrepôt principal - Maiduguri » et « Entrepôt secondaire - Monguno », 4 catégories exactes.", "Contraintes : kits d'hygiène 1 ligne en rupture sur 24 le mois précédent (4 %), 3 sur 27 le mois courant (11 %), toutes à Monguno ; délai moyen des catégories importées 24 puis 38 jours ; 2 dérogations sur 50 le mois courant.", "Ajustez la plage, formatez D en texte, collez en valeurs."] },
      { title: 'Contrôlez et lisez (P3)', actions: ["Contrôlez les données avec les filtres, relisez les cartes, calculez le mois courant par pondération de la synthèse, descendez à la zone et décomposez le délai de 24 à 38 jours en 5 sous-délais dont un seul varie."] },
      { title: 'Écrivez la fiche de décisions (P4)', actions: ["Une ligne par écart : rupture des kits à Monguno, délai des commandes internationales, conformité stable avec dérogations. Chaque ligne : constat, cause prouvée, action, responsable, échéance."] },
      { title: 'Rédigez la Partie A du gabarit (P5)', actions: ["Section « rapport interne siège » : cause probable de chaque écart (entrepôt secondaire, dédouanement) et action corrective concrète pour le mois suivant."] },
      { title: 'Rédigez la Partie B du gabarit (P6)', actions: ["Section « rapport de conformité bailleur » : justification des deux dérogations d'urgence, absence d'impact sur la stabilité du taux global, sans reproduire le détail opérationnel interne."] },
      { title: 'Préparez la présentation au coordinateur (P8)', actions: ["Une diapositive ou un paragraphe « so what » par KPI qui dérive, avec la décision demandée."] },
    ],
    tip: "Gardez la même méthode que sur le cas Kerowa : fixez la définition d'abord, contrôlez les données ensuite, interprétez après. Ne rédigez aucun rapport avant d'avoir écrit la fiche de décisions.",
    pitfall: "Inventer des données qui ne correspondent pas aux trois faits marquants : le tableau de bord doit produire exactement ces faits par formules, sans aucune valeur codée en dur.",
    deliverable: "Le tableau de bord complété (3 KPI par formules, synthèse à jour), la fiche de décisions, et les deux sections du rapport (Partie A siège et Partie B bailleur), cohérentes entre elles mais clairement différenciées dans leur structure et leur ton.",
  },
  {
    type: 'concept',
    title: 'Exercice 1 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Comparez votre travail à ces repères. D'autres choix sont acceptables s'ils sont justifiés par les données et documentés.",
    example: {
      title: 'Chiffres attendus avec les contraintes de l\'énoncé',
      lines: [
        "Kits d'hygiène : mois précédent 1 ÷ 24 × 100 = 4,2 % ; mois courant 3 ÷ 27 × 100 = 11,1 %. Toutes les ruptures à l'entrepôt secondaire.",
        "Rupture globale (si seuls les kits sont en rupture) : 1 ÷ 50 = 2,0 % puis 3 ÷ 50 = 6,0 %.",
        "Délai des catégories importées : 24,0 puis 38,0 jours ; sous-délais attendus par exemple 4 + 9 + 6 + 2 + 3 = 24, puis 4 + 9 + 6 + 16 + 3 = 38 : seule l'étape « dédouanement et autorisations » varie.",
        "Conformité : 48 ÷ 50 × 100 = 96,0 % les deux mois ; 2 dérogations justifiées = 4,0 % ; 0 non justifiée.",
      ],
    },
    bullets: [
      "Partie A : cause de la rupture prouvée par la fiche de stock (seuil de l'entrepôt secondaire, consommation, délai), action chiffrée avec responsable et date ; cause du délai prouvée par un document de douane ; vocabulaire interne autorisé.",
      "Partie B : clause de l'accord citée, nombre de dossiers en dérogation, références des notes archivées, taux stable à 96 %, engagements de contrôle ; aucun nom d'entrepôt, aucun sigle interne.",
      "Cohérence : les chiffres de la Partie B se déduisent de ceux de la Partie A ; aucune phrase n'est copiée d'une partie à l'autre.",
      "Présentation : titre-message, chiffre, cause, recommandation chiffrée, décision demandée, pour chaque KPI qui dérive.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Transposer à votre propre mission',
    instructions: "Appliquez les procédures à votre mission actuelle ou à la dernière que vous avez connue. Si vous n'êtes pas en poste, utilisez une mission dont vous connaissez bien le contexte et construisez des données plausibles. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    steps: [
      { title: 'Jour 1', actions: ["Fiche KPI (définitions, règles, seuils) et tableau de bord alimenté avec les trois derniers mois, plages ajustées, données contrôlées."] },
      { title: 'Jour 2', actions: ["Lecture de la synthèse par catégorie et par zone, décomposition du délai, fiche de décisions avec une cause prouvée par ligne."] },
      { title: 'Jour 3', actions: ["Partie A (siège) et Partie B (bailleur) du gabarit, puis SITREP des cinq domaines."] },
      { title: 'Jour 4', actions: ["Présentation de 4 diapositives « so what » à un collègue qui joue le coordinateur ; compte rendu de décisions."] },
      { title: 'En fin d\'année', actions: ["Narrative de planification annuelle en cinq sections avec chronogramme rempli."] },
      { title: 'Pérennisation', actions: ["Mode d'emploi intégré au fichier et clôture du mois suivant refaite par un remplaçant ; optionnel : miroir Power BI avec les trois mesures."] },
    ],
    tip: "Anonymisez les noms de fournisseurs, les prix négociés et les noms de personnes si vous partagez votre travail en dehors de votre organisation.",
    deliverable: "Votre propre dossier de clôture mensuelle (L1 à L10), réutilisable chaque mois et à chaque nouvelle affectation.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "La fiche KPI donne pour chaque KPI sa formule, son numérateur, son dénominateur, sa colonne source, ses seuils vert / orange / rouge et la décision rattachée au rouge, et elle a été validée.",
      "Le tableau de bord se calcule par formules (colonne G et tableau de bord intacts), aucune valeur n'est codée en dur, les plages couvrent exactement vos lignes, et le journal de corrections existe.",
      "Aucun libellé inattendu, aucun doublon d'ID, aucun délai négatif ou nul : les listes de filtres de B, C, D, H et I ne montrent que des valeurs attendues.",
      "Chaque chiffre du rapport a son n sur N et sa tendance sur trois mois ; les valeurs du mois recalculées par pondération et par filtre concordent avec la synthèse.",
      "La fiche de décisions a pour chaque KPI en dérive un constat, une cause prouvée par un document, une action avec un verbe et un volume, un responsable nommé et une échéance datée.",
      "La Partie A et la Partie B partent des mêmes chiffres mais sont clairement différenciées : la B cite une clause, justifie chaque dérogation avec sa référence d'archivage et ne contient ni jargon interne ni code d'entrepôt ; aucune phrase n'est copiée de A en B.",
      "Chaque dérogation d'urgence a ses six pièces ; les trois parts du taux (conformes, dérogations justifiées, non conformes sans justification) sont calculées.",
      "Chaque diapositive de présentation a un titre-message, un chiffre, une cause, une recommandation et une décision demandée, avec responsable et date.",
      "Le fichier contient son mode d'emploi ; un remplaçant a refait une clôture avec ce seul document.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, CLÔTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Publier un KPI sans tendance ni contexte : un taux de conformité de 96 % affiché seul ne dit rien. → Trois mois côte à côte, n sur N, seuil de la fiche KPI.",
      "Envoyer le même rapport aux deux audiences. → Partie A pour le siège, Partie B pour le bailleur, rédigées séparément à partir des mêmes chiffres, sans copier-coller.",
      "Présenter des données sans recommandation (« so what »). → Une ligne de fiche de décisions par KPI rouge ou orange : constat, cause prouvée, action, responsable, échéance.",
      "Confondre « en rupture aujourd'hui » et « a connu une rupture ce mois-ci ». → Une définition unique, écrite dans la fiche KPI et datée ; ne jamais la changer sans le signaler.",
      "Laisser le tableau de bord dépendre d'une seule personne. → Mode d'emploi dans le fichier, remplaçant formé et testé.",
      "Corriger une formule ou écraser une valeur pour « faire tomber juste ». → Corriger la donnée source, jamais la formule ; journaliser chaque correction.",
      "Laisser des lignes vides avec leur formule en G, ou insérer des lignes sous la ligne 96. → Supprimer les lignes vides ; insérer à l'intérieur de la plage.",
      "Saisir la période « 2026-08 » dans une colonne au format général. → Formater la colonne D en texte avant de saisir.",
      "Commenter un délai global sans le décomposer, ou conclure d'une moyenne globale stable. → Descendre à la catégorie, à la zone et au sous-délai avant de conclure.",
      "Antidater ou fabriquer une note de dérogation. → Note datée du jour réel, dossier classé « Non conforme » si elle manque.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez rédigé la fiche KPI : formule, numérateur, dénominateur, source, règle de la rupture, seuils et décision rattachée à chaque rouge.",
      "Vous avez alimenté le template de tableau de bord, ajusté ses plages, contrôlé les données et vérifié que les 3 KPI se calculent par formules, sans valeur codée en dur.",
      "Vous avez lu la synthèse par catégorie, par période et par zone, décomposé un délai en sous-délais et rédigé une note d'analyse localisant chaque dérive.",
      "Vous avez traité chaque dérogation d'urgence (six pièces, trois parts du taux) et écrit la fiche de décisions : constat, cause prouvée, action, responsable, échéance.",
      "Vous avez rédigé, à partir des mêmes chiffres, la Partie A (siège) et la Partie B (bailleur) du gabarit, puis le SITREP mensuel à cinq domaines.",
      "Vous avez préparé et conduit une présentation « so what » de quatre diapositives, obtenu des décisions datées et diffusé le compte rendu.",
      "Vous avez rédigé la narrative de planification annuelle, décidé si Power BI se justifie et construit ses trois mesures, puis documenté le fichier et formé un remplaçant.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de clore la formation',
    items: [
      "Je sais définir et calculer les 3 KPI supply chain avec leur formule exacte, leur définition figée et leurs seuils.",
      "Je sais expliquer, pour chaque KPI, au moins une cause probable de dérive et l'action qu'elle doit déclencher.",
      "J'ai construit un tableau de bord Excel où les 3 KPI se calculent par formules, sans valeur codée en dur.",
      "Je sais lire une synthèse par catégorie et par période pour détecter un problème localisé caché dans une moyenne globale stable.",
      "Je sais expliquer au moins trois différences structurelles entre un rapport bailleur et un rapport siège, et je sais ce qu'est un SITREP.",
      "J'ai rédigé les deux versions d'un rapport à partir des mêmes données, sans copier-coller de l'une vers l'autre.",
      "Je sais formuler une recommandation « so what » pour chaque KPI présenté à un coordinateur.",
      "J'ai documenté la méthode de mise à jour dans le fichier, et mes dossiers de clôture sont prêts à servir de base à ma pratique de terrain.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Fin de la formation : vous avez parcouru l'intégralité des 9 modules de la Formation en Supply Chain Management Humanitaire, du cycle d'achat jusqu'au pilotage par les données. Le Module 01 vous positionnait comme le garant de la faisabilité de la chaîne humanitaire ; ce dernier module referme la boucle. Un Supply Chain Manager qui maîtrise les achats, les fournisseurs, les stocks, la distribution, le transport et l'ERP, mais qui ne sait pas transformer ces données en décisions lisibles pour un coordinateur et en redevabilité crédible pour un bailleur, reste un exécutant très compétent, pas encore un manager. C'est cette dernière compétence qui distingue un profil senior sur le marché humanitaire. Votre attestation de formation certifie cette maîtrise complète, la base sur laquelle repose désormais votre pratique de terrain.",
  },
]
