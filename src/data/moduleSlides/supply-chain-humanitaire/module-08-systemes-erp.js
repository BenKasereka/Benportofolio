// Module 08 — Systèmes ERP Humanitaires — SAP, LINK & Power Query
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure du
// reporting ERP (suivre un achat dans le workflow, extraire un export complet,
// connecter Power Query, traiter doublons, dates et devises, qualifier les
// anomalies, documenter, produire le rapport mensuel, actualiser le mois
// suivant) est déroulée étape par étape (une étape par écran), champ par champ
// dans les deux templates du module, appliquée à un cas fil rouge chiffré,
// puis résolue intégralement sur le cas source de Bunia et transposée en
// exercices. Les diapositives trop chargées sont découpées automatiquement en
// « (suite) » par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'cover',
    title: 'Systèmes ERP Humanitaires — SAP, LINK & Power Query',
    hook: "En une semaine de reporting, vous allez produire ce qu'attend votre coordination quand elle demande « le statut des achats » : la fiche de circuit d'un achat dans l'ERP, un export contrôlé et archivé, un pipeline Power Query qui nettoie doublons, dates et devises, le classeur de nettoyage du template complété avec ses notes de transformation, un rapport mensuel de 1 à 2 pages qui signale ses propres limites, et la procédure qui permet à un collègue de le relancer le mois suivant. Chaque étape est déroulée ici, clic par clic, sur un cas réel de terrain.",
  },
  {
    type: 'objectives',
    items: [
      "Suivre un achat à travers le workflow d'un ERP (demande d'achat, vérification budgétaire, approbation par seuils, bon de commande, réception, fiche actif) et lire sa piste d'audit, en produisant la fiche de circuit d'un achat et la matrice des seuils d'approbation de votre mission.",
      "Extraire de l'ERP un export complet et contrôlé (période, périmètre, statuts, nombre de lignes comparé à l'écran), en produisant le fichier source archivé en lecture seule et sa fiche de contrôle d'exhaustivité.",
      "Connecter Power Query à un export brut sans jamais modifier la source, puis traiter les doublons sur un critère d'unicité rigoureux, harmoniser des dates mélangées et normaliser des devises, en produisant une requête documentée dont chaque étape est nommée.",
      "Compléter le template guide-extraction-nettoyage-power-query.xlsx (Données brutes, Données nettoyées, Notes de transformation) et qualifier chaque anomalie par une décision justifiée, en produisant la synthèse chiffrée et la passerelle qui explique le total retenu.",
      "Documenter chaque transformation en langage clair pour qu'un collègue puisse vérifier vos chiffres, en produisant les six lignes des Notes de transformation relues par un tiers.",
      "Produire le rapport mensuel gabarit-rapport-erp-mensuel.docx (source, chiffres clés, qualité de la donnée, anomalies, validation), en signalant explicitement les données manquantes ou incertaines au lieu de les masquer.",
      "Rendre le reporting reproductible : remplacer la source, actualiser, contrôler le résultat et faire relire le pipeline, en produisant la procédure mensuelle testée qu'un collègue peut relancer après vous.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une lecture : c'est la semaine de reporting d'un Supply Chain Manager qui doit transformer un export d'ERP en un rapport que la coordination et le bailleur peuvent croire. Il est découpé en 10 procédures. À la fin, vous aurez en main sept livrables réutilisables tels quels chaque mois.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé, à Gogrial (État du Warrap, Soudan du Sud), qui doit présenter son rapport de statut des achats de mars à mai 2026. Le cas source du module (la base de Bunia et ses 140 lignes) est ensuite résolu de bout en bout sur les données du template.",
    ],
    bullets: [
      "L1 — La fiche de circuit d'un achat (demande d'achat → bon de commande → réception → fiche actif) et la matrice des seuils d'approbation.",
      "L2 — L'export ERP complet, archivé en lecture seule, avec sa fiche de contrôle d'exhaustivité (écran ERP comparé au fichier).",
      "L3 — Le pipeline Power Query : requête connectée à l'export, avec ses étapes nommées (doublons, dates, devises, montant converti).",
      "L4 — Le classeur guide-extraction-nettoyage-power-query.xlsx complété : Données brutes, Données nettoyées (formules, synthèse E25:E28, taux Q:R).",
      "L5 — L'onglet « Notes de transformation » rédigé (6 lignes) et relu par un collègue.",
      "L6 — Le rapport mensuel gabarit-rapport-erp-mensuel.docx rempli, avec sa section d'anomalies.",
      "L7 — La procédure d'actualisation mensuelle, testée avec un second export.",
    ],
    tip: "Ouvrez dès maintenant un dossier « Reporting ERP » avec un sous-dossier par livrable (L1 à L7) et un dossier « SOURCES » en lecture seule. Le jour où un bailleur interroge une ligne, vous retrouvez l'export d'origine en 10 secondes.",
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : Kerowa Santé prépare son rapport d\'achats de fin mai',
    body: [
      "Kerowa Santé (ONG fictive) mène depuis le 1er décembre 2025 un projet médical et nutritionnel de 12 mois à Gogrial : centre de stabilisation nutritionnelle, pédiatrie, deux cliniques mobiles. Budget 1 200 000 EUR, dont 85 % financés par ECHO ; rapport intermédiaire dû le 15 juin 2026. Vous êtes Supply Chain Manager depuis le 2 mars : le registre des flux, la cartographie des acteurs et l'entrepôt sont en place.",
      "Nous sommes le lundi 1er juin 2026. Grace M. vous demande le rapport de statut des achats de mars à mai pour la réunion de coordination du vendredi 5 juin à 14 h ; ses chiffres alimenteront le rapport intermédiaire ECHO. Tous les achats passent par l'ERP du siège (un progiciel de type SAP), saisis à Gogrial ou à Juba. Vous n'y avez qu'un accès en lecture ; Joseph K. est l'utilisateur référent (key-user) qui sait extraire.",
    ],
    table: {
      columns: ['Personne (fictive)', 'Fonction', 'Rôle dans cette semaine de reporting'],
      rows: [
        ['Vous', 'Supply Chain Manager', 'Extrayez, nettoyez, documentez, rédigez le rapport'],
        ['Grace M.', 'Coordinatrice pays (Juba)', 'Demande le rapport, valide, le présente à ECHO'],
        ['Joseph K.', 'Administration-finance, key-user ERP', 'Réalise les exports, confirme les données dans l\'ERP, fournit les taux de change'],
        ['Peter A.', 'Logisticien terrain', 'Demandeur de la plupart des achats, confirme les réceptions'],
        ['Achol D.', 'Magasinière', 'Enregistre les réceptions (GRN) dans l\'ERP'],
        ['Daniel O.', 'Coordinateur terrain', 'Premier niveau d\'approbation des demandes d\'achat'],
      ],
    },
    example: {
      title: 'Les 4 constats du lundi matin',
      lines: [
        "1. « Joseph a sorti un export hier, mais il n'a que 13 lignes alors que je compte beaucoup plus de commandes. »",
        "2. « Certaines dates sont en jour/mois, d'autres en mois/jour : une saisie a été faite pendant une coupure internet en avril. »",
        "3. « Les vivres sont payés en livres sud-soudanaises, les médicaments en euros, le reste en dollars. »",
        "4. « ECHO attend des chiffres qu'on puisse justifier ligne par ligne. »",
      ],
    },
    pitfall: "Les personnes, l'ONG, les fournisseurs, les taux et les montants sont fictifs et donnés à titre d'exemple ; ne réutilisez jamais ces chiffres tels quels sur votre mission.",
  },
  {
    type: 'concept',
    title: 'Votre semaine de reporting, procédure par procédure',
    body: "Chaque procédure correspond à un créneau de la semaine du 1er au 5 juin. Respectez l'ordre : l'export alimente le pipeline, le pipeline alimente les chiffres, les chiffres alimentent le rapport.",
    table: {
      columns: ['Quand', 'Procédure', 'Livrable produit', 'Temps'],
      rows: [
        ['Lundi matin', 'P1 — Suivre un achat dans le workflow ERP', 'L1 Fiche de circuit + matrice des seuils', '½ jour'],
        ['Lundi après-midi', 'P2 — Extraire un export complet / P3 — Préparer le classeur et connecter Power Query', 'L2 Export archivé + contrôle', '½ jour'],
        ['Mardi', 'P4 — Doublons / P5 — Dates', 'L3 Pipeline (début), L4 Données nettoyées', '1 jour'],
        ['Mercredi matin', 'P6 — Devises', 'L3 Pipeline (fin), taux Q:R documentés', '½ jour'],
        ['Mercredi après-midi', 'P7 — Qualifier les anomalies et lire la synthèse', 'L4 Synthèse E25:E28 + passerelle', '½ jour'],
        ['Jeudi matin', 'P8 — Documenter les transformations', 'L5 Notes de transformation relues', '½ jour'],
        ['Jeudi après-midi', 'P9 — Construire les chiffres clés et remplir le rapport', 'L6 Rapport mensuel .docx', '½ jour'],
        ['Vendredi matin', 'P10 — Actualiser et faire relire le pipeline', 'L7 Procédure mensuelle testée', '½ jour'],
        ['Vendredi 14 h', 'Réunion de coordination', 'Rapport validé, actions lancées', '45 min'],
      ],
    },
    tip: "Bloquez ces créneaux dans l'agenda partagé dès le lundi 8 h. Un reporting fiable ne se bâcle pas la veille : la relecture du jeudi et le test du vendredi sont les deux créneaux les plus souvent sacrifiés, et les plus utiles.",
  },
  {
    type: 'comparison-table',
    title: 'Trois outils, trois rôles : ne les mélangez jamais',
    columns: ['Outil', 'Son rôle', 'Ce que vous n\'y faites jamais'],
    rows: [
      ['L\'ERP (SAP, LINK, système maison)', 'Source de vérité : il enregistre les demandes, commandes, réceptions, actifs avec leur piste d\'audit. Vous l\'interrogez et en extrayez des données.', 'Corriger une donnée « pour que le rapport soit joli », ou utiliser l\'identifiant d\'un collègue.'],
      ['Excel avec Power Query', 'Atelier de transformation : il lit l\'export, applique des règles reproductibles et charge un jeu de données propre.', 'Corriger cellule par cellule le fichier exporté, ou écraser la colonne du montant original.'],
      ['Le template .xlsx du module', 'Démonstration pas à pas de la logique par formules, synthèse automatique et onglet de documentation des transformations.', 'Le laisser tel quel avec ses exemples : vous y reportez vos données, vos taux et vos notes.'],
      ['Le rapport .docx', 'Restitution lisible par la coordination : chiffres, qualité de la donnée, anomalies, validation.', 'Y présenter un chiffre sans sa source, ni signaler les lignes incertaines.'],
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Ce qu\'un ERP standardise réellement',
    body: [
      "Un ERP (Enterprise Resource Planning) n'est pas d'abord un logiciel : c'est une discipline organisationnelle mise sous contrainte informatique. Avant l'ERP, une ONG qui gère ses achats sur des classeurs Excel dispersés entre le bureau pays, les bases terrain et le siège se retrouve tôt ou tard avec trois versions du même engagement financier, aucune ne faisant foi. L'ERP impose une source unique de vérité : une seule ligne de commande, un seul statut, visible et modifiable selon des droits définis, par tout le monde en même temps.",
      "Il apporte aussi la piste d'audit (audit trail) : chaque action laisse une trace, qui a créé la demande d'achat, qui l'a validée, à quelle date, avec quelle modification. Les bailleurs (ECHO, USAID/BHA, agences onusiennes) peuvent auditer un projet des mois après sa clôture : cette traçabilité protège l'organisation, et vous personnellement, en cas de contestation sur une dépense.",
    ],
    example: {
      title: 'Kerowa — le groupe électrogène avant et après l\'ERP',
      lines: [
        "Avant : le classeur de la base de Gogrial indiquait 7 000 USD, celui du bureau de Juba 6 900 USD, et le siège ne voyait « rien en cours ».",
        "Avec l'ERP : une seule ligne, PO-GOG-036, à 6 900 USD, avec le nom de chaque approbateur et la date de chaque étape.",
      ],
    },
    highlight: "Ce que retient un ERP : le workflow d'approbation, le registre des actifs, l'historique des mouvements de stock et de fonds. Ce qu'il ne retient PAS automatiquement : la qualité des données saisies en amont.",
  },
  {
    type: 'comparison-table',
    title: 'Ce que l\'ERP contrôle pour vous, et ce qu\'il vous laisse à contrôler',
    columns: ['Situation', 'L\'ERP la contrôle-t-il ?', 'Ce que vous faites'],
    rows: [
      ['Une demande dépasse la ligne budgétaire disponible', 'Oui : blocage ou alerte automatique avant toute validation humaine', 'Vous vérifiez qu\'une alerte n\'a pas été contournée par une ligne budgétaire « fourre-tout »'],
      ['Un montant dépasse le seuil d\'un approbateur', 'Oui : la demande remonte au niveau supérieur, sans exception', 'Vous contrôlez que les seuils configurés correspondent à votre politique'],
      ['Qui a créé, validé, modifié un document', 'Oui : piste d\'audit non modifiable', 'Vous la consultez pour reconstituer « qui a validé quoi »'],
      ['Une date saisie en JJ/MM par un agent et en MM/JJ par un autre', 'Non : l\'ERP ne sait pas ce que l\'agent avait en tête', 'Vous détectez les formats mélangés dans l\'export et levez les doutes à la source'],
      ['Une ligne saisie deux fois pendant une coupure internet', 'Non : deux saisies = deux lignes', 'Vous cherchez les doublons sur un critère rigoureux, puis vérifiez dans l\'ERP'],
      ['Une devise saisie « USD », « US$ » ou « Dollars »', 'Non, si le champ est libre', 'Vous normalisez les libellés puis convertissez au taux de référence de la mission'],
      ['Un export qui n\'a pas toutes les commandes', 'Non : il exporte ce que ses paramètres et filtres par défaut lui demandent', 'Vous comparez le nombre de lignes à l\'écran avant tout nettoyage'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Même logique, noms différents : SAP, LINK ou système maison',
    columns: ['Étape générique', 'Terme anglais', 'Exemple SAP (codes courants)', 'LINK ou autre ERP'],
    rows: [
      ['Demande d\'achat', 'Purchase Request (PR)', 'ME51N créer, ME53N afficher, ME5A liste', 'Même document, intitulé et menu propres à votre installation'],
      ['Approbation par seuils', 'Release strategy / workflow', 'ME54N libérer une demande, boîte de travail', 'Circuit de validation configuré par le siège'],
      ['Bon de commande', 'Purchase Order (PO)', 'ME21N créer, ME23N afficher, ME2N liste par n° de PO', 'Écran « Commandes fournisseurs »'],
      ['Réception et rapprochement', 'Goods Receipt (GR / GRN)', 'MIGO réception, MB51 liste des mouvements, MIRO facture', 'Écran « Réceptions » rapproché de la commande'],
      ['Fiche actif', 'Asset Register', 'AS01 créer, AS03 afficher, AW01N explorateur d\'actifs', 'Module « Immobilisations » ou « Actifs »'],
      ['Piste d\'audit', 'Audit trail / change log', 'Journal des modifications depuis l\'écran d\'affichage du document', 'Historique ou journal des modifications du document'],
    ],
    tip: "Ces codes SAP sont donnés à titre d'exemple : votre version (ECC, S/4HANA, Fiori) et votre configuration peuvent différer. Demandez à votre key-user la liste des 6 écrans de votre ERP : c'est la première chose à faire le jour de votre arrivée. Pour LINK, comme pour tout autre ERP, la logique est la même : seuls les intitulés d'écrans changent.",
  },
  {
    type: 'process',
    title: 'Le workflow d\'approbation type SAP/LINK en 6 étapes',
    steps: [
      { title: "Demande d'achat (Purchase Request, PR)", body: "Un besoin est exprimé par un programme ou un département, avec quantité, spécification et budget associé." },
      { title: 'Vérification budgétaire automatique', body: "Le système bloque ou alerte si la ligne budgétaire n'a plus de disponible, avant même qu'un humain n'intervienne." },
      { title: "Workflow d'approbation à seuils", body: "La demande remonte vers un ou plusieurs valideurs selon le montant. Le seuil est configuré une fois pour toutes dans le système et s'applique sans exception ni négociation." },
      { title: 'Bon de commande (Purchase Order, PO)', body: "Généré une fois la demande validée, avec engagement automatique du budget correspondant." },
      { title: 'Réception et rapprochement (Goods Receipt)', body: "L'entrée en stock ou en actif est enregistrée et rapprochée de la commande ; un écart de quantité ou de prix déclenche une alerte." },
      { title: 'Registre des actifs (Asset Register)', body: "Pour tout bien durable (véhicule, générateur, équipement informatique), une fiche unique : numéro, localisation, responsable, valeur, date d'acquisition, statut, mise à jour à chaque mouvement." },
    ],
    tip: "Le workflow n'existe pas pour ralentir votre travail : il garantit qu'aucune dépense significative ne peut être engagée par une seule personne sans contrôle croisé. C'est un principe de contrôle interne, pas une lourdeur administrative.",
  },
  {
    type: 'concept',
    title: 'Les seuils d\'approbation : une règle écrite, pas une habitude',
    body: "Les seuils sont configurés dans l'ERP : ils déterminent qui doit valider quoi. Votre rôle de SCM n'est pas de les négocier mais de les connaître, de vérifier qu'ils correspondent à la politique de l'organisation et de savoir où une demande attend. Une règle simple de contrôle interne s'y ajoute : la séparation des tâches (celui qui demande ne valide pas sa propre demande ; celui qui réceptionne n'est pas celui qui paie).",
    table: {
      columns: ['Valeur de la demande (équivalent USD)', 'Approbations requises (exemple Kerowa, valeurs fictives)'],
      rows: [
        ['Moins de 1 000', 'Coordinateur terrain'],
        ['1 000 à 9 999', 'Coordinateur terrain, puis Supply Chain Manager'],
        ['10 000 à 49 999', 'Coordinateur terrain, Supply Chain Manager, puis Coordinatrice pays'],
        ['50 000 et plus', 'Les trois niveaux, puis la direction des opérations au siège'],
      ],
    },
    example: {
      title: 'Kerowa — qui doit approuver quoi ?',
      lines: [
        "Groupe électrogène à 6 900 USD → coordinateur terrain, puis SCM (2 niveaux).",
        "Médicaments à 17 200 EUR (≈ 18 748 USD) → coordinateur terrain, SCM, puis Coordinatrice pays (3 niveaux).",
      ],
    },
    pitfall: "Fractionner un achat en deux demandes pour passer sous un seuil est un contournement de contrôle interne : l'ERP le laisse passer, l'auditeur le repère. Si vous le constatez dans un export (même fournisseur, même article, mêmes dates, deux montants juste sous le seuil), signalez-le.",
  },
  {
    type: 'concept',
    title: 'Le rapprochement à trois : commande, réception, facture',
    body: "Avant tout paiement, un ERP rapproche trois documents : le bon de commande (ce qui a été commandé et à quel prix), la réception (ce qui est réellement entré) et la facture (ce que le fournisseur demande). Quand les trois concordent, le paiement est autorisé ; un écart de quantité ou de prix bloque ou alerte. C'est la dernière barrière avant la sortie d'argent.",
    table: {
      columns: ['Document', 'PO-GOG-038 (transport Juba → Gogrial)', 'Contrôle'],
      rows: [
        ['Bon de commande (PO)', '2 camions de 10 t, 4 700 USD', 'Référence de comparaison'],
        ['Réception (GRN) du 22/05/2026', '2 camions réceptionnés, waybills signés', 'Quantité = PO'],
        ['Facture du transporteur', '4 700 USD, 2 rotations', 'Montant = PO, quantité = GRN'],
      ],
    },
    result: "Trois documents concordants : le paiement peut être libéré. Si la facture indiquait 3 rotations pour 7 050 USD, l'écart bloquerait le paiement jusqu'à explication.",
    tip: "Quand vous préparez un rapport sur les achats « livrés », vous appuyez sur le statut de réception, pas sur la facture : un achat peut être facturé sans être livré, ou livré sans être facturé.",
  },
  {
    type: 'concept',
    title: 'Le registre des actifs : une fiche par bien durable',
    body: "Un bien durable (véhicule, groupe électrogène, réfrigérateur de chaîne du froid, ordinateur) ne finit pas dans un stock : il devient un actif, avec une fiche unique créée à la réception et mise à jour à chaque mouvement (transfert, réparation, mise au rebut). Cette fiche permet de répondre à l'auditeur : où est ce bien, sous la responsabilité de qui, pour quelle valeur ?",
    table: {
      columns: ['Champ de la fiche actif', 'Exemple Kerowa — groupe électrogène 20 kVA'],
      rows: [
        ['Numéro d\'actif', 'Attribué par l\'ERP à la création de la fiche'],
        ['Désignation', 'Groupe électrogène 20 kVA, insonorisé'],
        ['Localisation', 'Centre de stabilisation nutritionnelle, local technique'],
        ['Responsable', 'Peter A., logisticien terrain'],
        ['Valeur d\'acquisition', '6 900 USD (celle du PO-GOG-036)'],
        ['Date d\'acquisition', '19/05/2026 (date de réception)'],
        ['Statut', 'En service'],
      ],
    },
    tip: "Une commande de 2 réfrigérateurs solaires (PO-GOG-031, 7 800 USD) crée 2 fiches actif de 3 900 USD, une par unité : c'est ce qui permet de suivre chaque appareil individuellement.",
  },
  {
    type: 'stat-callout',
    stat: '60-80 %',
    caption: "Le temps qu'un analyste consacre en moyenne à nettoyer des données mal formatées, plutôt qu'à les analyser.",
    context: "Ordre de grandeur avancé dans les formations professionnelles en supply chain, tout aussi vrai en humanitaire. Le terrain l'amplifie : rotation du personnel de saisie, connexions instables, devises multiples.",
  },
  {
    type: 'comparison-table',
    title: 'Trois facteurs de « saleté » propres au terrain humanitaire',
    columns: ['Facteur', 'Symptôme dans l\'export', 'Exemple Kerowa'],
    rows: [
      ['Rotation élevée du personnel de saisie : chaque arrivant a ses habitudes', 'Formats de date et abréviations de devise différents selon l\'agent', 'Dates « 16/03/2026 », « 2026-03-19 » et « 03/27/2026 » dans la même colonne'],
      ['Connexions internet instables : saisie en différé, copier-coller depuis WhatsApp, papier scanné, tableurs locaux', 'Lignes saisies deux fois, champs vides', 'PO-GOG-032 saisi deux fois le 14 avril, pendant une coupure'],
      ['Multiplicité des devises dans une même mission', 'Montants de devises différentes additionnés comme s\'ils étaient identiques', 'SSP pour les vivres de Wau, EUR pour les médicaments, USD pour le reste'],
    ],
    highlight: "Un rapport produit sur des données non nettoyées n'est pas seulement imprécis : il peut être activement trompeur (volume gonflé par des doublons, délais faussés par des dates mal lues, totaux qui additionnent des devises différentes).",
  },
  {
    type: 'concept',
    title: 'Tous les ERP exportent en tableau : la compétence qui voyage',
    body: [
      "Chaque ONG a son propre ERP : SAP, LINK, un système propriétaire, un outil sur mesure. Une compétence apprise comme une séquence de clics propre à un seul logiciel devient obsolète le jour où vous changez d'employeur, ce qui arrive statistiquement tous les 2 à 3 ans dans le secteur. Ce qui reste transférable : votre capacité à extraire, comprendre et nettoyer les données qui sortent de l'ERP, car tous exportent au final vers des formats tabulaires (CSV, Excel).",
      "Le principe qui structure ce travail s'appelle ETL (Extract, Transform, Load) : extraire la donnée brute, la transformer selon des règles reproductibles, la charger dans un format exploitable. Power Query en est l'outil, intégré à Excel.",
    ],
    table: {
      columns: ['Temps ETL', 'Ce que vous faites', 'Où dans ce module'],
      rows: [
        ['Extract — extraire', 'Paramétrer et contrôler l\'export, le connecter à Power Query sans le modifier', 'P2 et P3'],
        ['Transform — transformer', 'Doublons, dates, devises, anomalies, documentation des règles', 'P4 à P8'],
        ['Load — charger', 'Fermer et charger en tableau propre, construire les chiffres et le rapport, actualiser le mois suivant', 'P9 et P10'],
      ],
    },
    highlight: "Un logisticien senior qui maîtrise Power Query peut reprendre un export de n'importe quel ERP, de n'importe quelle ONG, et en tirer un rapport propre en une heure.",
  },
  {
    type: 'comparison-table',
    title: 'Ressaisie manuelle, formules Excel ou Power Query : que choisir ?',
    columns: ['Critère', 'Ressaisie manuelle', 'Formules Excel (template)', 'Power Query'],
    rows: [
      ['Reproductible le mois suivant', 'Non : tout est à refaire', 'Partiellement : formules à étendre aux nouvelles lignes', 'Oui : remplacez la source, cliquez sur Actualiser tout'],
      ['Source préservée', 'Non : la cellule corrigée écrase l\'original', 'Oui : onglet des données brutes intact', 'Oui : la requête lit le fichier, sans le modifier'],
      ['Traçabilité des corrections', 'Aucune', 'Visible dans les colonnes de contrôle', 'Chaque action est enregistrée dans « Étapes appliquées »'],
      ['Volume raisonnable', 'Quelques lignes', 'Quelques dizaines de lignes (démonstration)', 'Des milliers de lignes'],
      ['Quand l\'utiliser', 'Jamais pour corriger un export', 'Pour comprendre la logique et contrôler un petit échantillon', 'Pour le reporting réel, chaque mois'],
    ],
    tip: "Le template du module sert à comprendre et à documenter la logique ; Power Query sert à l'appliquer sur les vrais volumes. Les deux doivent donner les mêmes chiffres : c'est votre contrôle croisé.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'PR / PO', definition: "Purchase Request (demande d'achat) et Purchase Order (bon de commande) : les deux documents pivots du workflow achats dans tout ERP." },
      { term: 'GR / GRN', definition: "Goods Receipt / Goods Received Note : la réception enregistrée, rapprochée de la commande avant paiement." },
      { term: 'Asset Register', definition: "Registre des actifs : la base de données ERP qui trace chaque bien durable de l'organisation." },
      { term: 'Audit trail', definition: "Piste d'audit : l'historique complet et non modifiable des actions effectuées dans le système." },
      { term: 'Source unique de vérité', definition: "Principe selon lequel une seule version d'une donnée fait foi dans toute l'organisation." },
      { term: 'Key-user', definition: "Utilisateur référent d'un ERP : celui qui connaît les écrans, les exports et les droits, et que vous sollicitez pour confirmer une donnée." },
      { term: 'ETL', definition: "Extract, Transform, Load : extraire une donnée brute, la transformer selon des règles reproductibles, la charger dans un format exploitable." },
      { term: 'Critère d\'unicité', definition: "Ensemble de colonnes qui identifient une ligne d'achat de façon unique (typiquement n° de PO et article). Jamais une simple ressemblance visuelle." },
      { term: 'Doublon exact', definition: "Ligne strictement identique à une autre sur tous les champs du critère d'unicité (le template compare n° de PO, article, date, montant, devise)." },
      { term: 'Devise de reporting', definition: "Devise unique dans laquelle tous les montants sont convertis pour être additionnés, au taux de référence officiel de la mission." },
      { term: 'Lignes incomplètes', definition: "Lignes dont un champ clé (montant, statut) manque : signalées en anomalie et exclues des totaux jusqu'à confirmation." },
      { term: 'Passerelle de totaux', definition: "Tableau qui explique, ligne à ligne, le passage du total brut de la synthèse au total retenu dans le rapport." },
    ],
  },
  {
    type: 'process',
    title: "D'un export ERP brut à un rapport fiable : les 7 étapes du pipeline",
    steps: [
      { title: 'Ouvrir Power Query sur le fichier brut, sans toucher la source', body: "Power Query travaille sur une copie transformée ; le fichier source reste intact et consultable en cas de litige. (Procédures 2 et 3)" },
      { title: 'Identifier et supprimer les doublons', body: "Sur un critère d'unicité rigoureux, jamais sur l'ensemble du tableau. Consignez le nombre de doublons repérés. (Procédure 4)" },
      { title: 'Harmoniser les formats de date', body: "Repérez les valeurs incohérentes, spécifiez explicitement le format d'origine ; en cas de doute réel, remontez à la source. (Procédure 5)" },
      { title: 'Normaliser les devises', body: "Uniformisez les libellés, appliquez un taux de référence documenté, ajoutez une colonne « montant converti » sans écraser l'original. (Procédure 6, puis Procédure 7 pour les lignes incomplètes)" },
      { title: 'Documenter chaque étape de transformation', body: "Notes de transformation : doublons supprimés, formats de date traités, taux de change et sa source, lignes exclues et pourquoi. (Procédure 8)" },
      { title: 'Charger le résultat et construire le rapport', body: "Fermer et charger en tableau structuré ; tableaux croisés dynamiques et rapport sur la base propre, jamais sur la base brute. (Procédure 9)" },
      { title: 'Rafraîchir plutôt que refaire, le mois suivant', body: "Remplacez le fichier source, cliquez sur Actualiser tout, contrôlez. (Procédure 10)" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — SUIVRE UN ACHAT DANS LE WORKFLOW ERP (LUNDI MATIN)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 7',
    title: 'Retrouver la demande d\'achat (PR) et vérifier qu\'elle est complète',
    intro: "Avant de nettoyer des données, vous devez comprendre comment elles naissent. Vous suivez un achat réel, le groupe électrogène du centre de stabilisation, de sa demande à sa fiche actif. La PR est le point de départ de la piste d'audit : si elle est incomplète, tout ce qui suit l'est aussi. Entrées : accès en lecture à l'ERP, nom du demandeur.",
    steps: [
      {
        title: 'Ouvrez la demande dans l\'ERP',
        actions: [
          "Ouvrez la liste des demandes d'achat : menu Achats > Demandes d'achat > Liste (SAP : ME5A, ou ME53N pour une demande dont vous connaissez le numéro).",
          "Filtrez par demandeur (Peter A.) et élargissez la période : le filtre de date par défaut cache souvent les demandes anciennes.",
          "Ouvrez la ligne voulue en lecture seule.",
        ],
      },
      {
        title: 'Contrôlez les 6 champs minimaux',
        actions: [
          "Demandeur et date de création.",
          "Désignation précise, quantité et unité.",
          "Spécification technique (texte long ou pièce jointe).",
          "Valeur estimée et devise.",
          "Imputation budgétaire (ligne bailleur, centre de coût).",
          "Lieu et date de livraison souhaités.",
        ],
      },
      {
        title: 'Démarrez votre fiche de circuit (L1)',
        actions: [
          "Créez un tableau Excel « L1_Circuit_achat.xlsx » avec les colonnes : Étape | Document | N° | Date | Auteur | Contrôle effectué | Anomalie.",
          "Saisissez la première ligne : Demande d'achat, n° de PR, date, demandeur.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — PR-2026-0142',
      lines: [
        "Créée le 21/04/2026 à 14 h 02 par Peter A.",
        "Article : groupe électrogène 20 kVA triphasé, insonorisé, quantité 1.",
        "Valeur estimée : 7 000 USD. Imputation : ECHO — ligne B3.2 « Équipement du centre de stabilisation » (ligne fictive).",
        "Livraison souhaitée à Gogrial avant le 15/05/2026. Spécification : fiche technique jointe.",
        "Constat : les 6 champs sont renseignés. Fiche L1, ligne 1 : « Demande d'achat | PR-2026-0142 | 21/04/2026 | Peter A. | complète | aucune ».",
      ],
    },
    result: "Fiche de circuit démarrée : numéro de PR, demandeur, date, valeur estimée, imputation, avec la liste des champs manquants éventuels.",
    pitfall: "Corriger vous-même une PR créée par un autre ou vous connecter avec l'identifiant d'un collègue : vous brouillez la piste d'audit. Demandez au demandeur de modifier : l'ERP historise chaque modification.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 7',
    title: 'Lire la vérification budgétaire',
    intro: "L'ERP compare automatiquement la valeur de la demande au disponible de la ligne budgétaire. Vous devez savoir lire ce contrôle : il vous dit si l'achat est finançable et si la demande a été imputée à la bonne ligne bailleur.",
    steps: [
      {
        title: 'Retrouvez le disponible de la ligne',
        actions: [
          "Dans la PR, relevez la ligne budgétaire imputée (ici B3.2).",
          "Ouvrez le rapport budgétaire de cette ligne (SAP : rapport de disponibilité ; autre ERP : menu Budget > Disponible par ligne). Demandez-le à Joseph K. si vous n'avez pas ce droit.",
          "Relevez : budget total, déjà engagé, disponible avant la demande.",
        ],
      },
      {
        title: 'Calculez le disponible après engagement',
        actions: [
          "Disponible après = disponible avant − valeur de la demande.",
          "Si le résultat est négatif, la demande doit être bloquée ou le budget réalloué avant toute approbation.",
          "Notez le résultat dans la fiche L1, colonne Contrôle effectué.",
        ],
      },
    ],
    table: {
      columns: ['Ligne B3.2 (USD)', 'Montant'],
      rows: [
        ['Budget de la ligne', '24 000'],
        ['Déjà engagé avant la demande', '14 600'],
        ['Disponible avant la demande', '9 400'],
        ['Valeur de la PR-2026-0142', '7 000'],
        ['Disponible après engagement', '2 400'],
      ],
    },
    result: "Budget OK : 2 400 USD restent disponibles. Fiche L1, ligne 2 : « Vérification budgétaire | ligne B3.2 | disponible après 2 400 USD | OK ».",
    pitfall: "Considérer qu'un « budget OK » vaut accord du bailleur : la vérification budgétaire contrôle un solde dans l'ERP, pas l'éligibilité de la dépense. L'éligibilité se vérifie dans la convention (module 01, procédure 3).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 7',
    title: 'Identifier où la demande attend dans le workflow d\'approbation',
    intro: "Une demande qui « traîne » est presque toujours en attente d'un approbateur précis. Savoir qui doit valider, selon le seuil, vous permet de relancer la bonne personne au lieu de vous plaindre de « l'administration ».",
    steps: [
      {
        title: 'Déterminez les niveaux requis',
        actions: [
          "Convertissez la valeur de la demande en USD équivalent si besoin.",
          "Lisez la ligne correspondante dans la matrice des seuils d'approbation (voir la théorie) ; si votre mission n'a pas de matrice écrite, demandez la configuration du workflow à Joseph K. et reportez-la dans un tableau.",
        ],
      },
      {
        title: 'Ouvrez le statut d\'approbation de la demande',
        actions: [
          "Dans la PR, ouvrez l'onglet ou l'écran « Statut d'approbation » (SAP : stratégie de libération de la demande).",
          "Relevez, pour chaque niveau : approbateur, date, décision (approuvé, rejeté, en attente).",
          "Reportez-les dans la fiche L1.",
        ],
      },
      {
        title: 'Contrôlez avant d\'approuver (votre niveau SCM)',
        actions: [
          "Au moins 3 devis joints si la valeur dépasse le seuil de votre politique d'achat.",
          "Spécification complète et imputation cohérente avec la nature de l'achat.",
          "Aucun fractionnement : cherchez une autre demande récente du même fournisseur ou du même article.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — PR-2026-0142 à 7 000 USD',
      lines: [
        "Seuil : 1 000 à 9 999 USD → coordinateur terrain, puis SCM.",
        "Niveau 1 : Daniel O., approuvé le 22/04/2026 à 09 h 15.",
        "Niveau 2 : SCM (vous), approuvé le 23/04/2026 à 16 h 40, après contrôle : 3 devis joints (6 900, 7 250 et 7 400 USD), spécification complète, aucune autre demande de groupe électrogène en cours.",
        "Statut de la PR : libérée. Fiche L1, ligne 3 : « Approbation | PR-2026-0142 | 23/04/2026 | Daniel O. puis SCM | 3 devis, pas de fractionnement | aucune ».",
      ],
    },
    result: "Vous savez qui a validé, à quelle date, et qui attendrait si la demande était bloquée.",
    tip: "Quand un approbateur est absent, l'ERP propose en général une fonction de suppléance déclarée à l'avance. N'utilisez jamais l'identifiant de l'absent : demandez à la personne de déclarer un suppléant, ou à la coordination de réaffecter l'approbation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 7',
    title: 'Contrôler le bon de commande (PO) généré',
    intro: "Une fois la PR libérée, le service achats met les fournisseurs en concurrence, puis le PO est créé avec engagement automatique du budget. Vous vérifiez que le PO reste fidèle à la demande et à l'offre retenue.",
    steps: [
      {
        title: 'Retrouvez le PO lié à la PR',
        actions: [
          "Ouvrez le PO à partir de la PR (SAP : ME23N, puis historique du document) ou recherchez par numéro de PR dans la liste des commandes (ME2N).",
          "Relevez : numéro de PO, date, fournisseur, valeur, devise, conditions de livraison et de garantie.",
        ],
      },
      {
        title: 'Comparez PO, PR et offre retenue',
        actions: [
          "Valeur du PO ≤ valeur de la PR (sauf tolérance prévue par la politique).",
          "Le fournisseur correspond à l'offre la moins-disante conforme, ou une justification est jointe.",
          "L'article et la quantité sont identiques à la demande.",
          "L'engagement budgétaire est ajusté : l'engagement de la PR est remplacé par celui du PO.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — PO-GOG-036',
      lines: [
        "Créé le 07/05/2026 par l'assistant achats. Fournisseur : Électro-Solaire Juba, offre la moins-disante (6 900 USD contre 7 250 et 7 400).",
        "Valeur 6 900 USD ≤ 7 000 USD de la PR. Livraison sous 14 jours à Gogrial, garantie 12 mois.",
        "Engagement de la ligne B3.2 : 7 000 USD remplacés par 6 900 USD, soit 100 USD libérés (disponible : 2 500 USD).",
        "Fiche L1, ligne 4 : « Bon de commande | PO-GOG-036 | 07/05/2026 | assistant achats | PO ≤ PR, offre la moins-disante | aucune ».",
      ],
    },
    result: "Le PO est rattaché à sa demande, son prix et son fournisseur sont justifiés, l'engagement budgétaire est à jour.",
    pitfall: "Un PO créé sans PR (« commande pour régulariser plus tard ») est le premier signal de contournement : notez-le comme anomalie dans la fiche L1 et remontez-le.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 7',
    title: 'Contrôler la réception et le rapprochement à trois',
    intro: "La réception enregistre ce qui est réellement entré. Le rapprochement de la commande, de la réception et de la facture autorise (ou bloque) le paiement. C'est aussi ici que naissent les statuts « Livré » que vous retrouverez dans l'export.",
    steps: [
      {
        title: 'Retrouvez la réception',
        actions: [
          "Ouvrez la liste des mouvements de réception liés au PO (SAP : MB51, ou historique du PO dans ME23N).",
          "Relevez : date de réception, quantité reçue, utilisateur (la magasinière, pas l'acheteur).",
        ],
      },
      {
        title: 'Comparez les trois documents',
        actions: [
          "Quantité réceptionnée = quantité commandée ? Si non, quel écart et quelle décision (réception partielle, réclamation) ?",
          "Montant de la facture = valeur du PO pour la quantité reçue ?",
          "Documents rapprochés et paiement libéré par une personne différente de celle qui a réceptionné.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — PO-GOG-036',
      lines: [
        "Réception le 19/05/2026 à 11 h 30 par Achol D. : 1 groupe électrogène 20 kVA, numéro de série relevé, plaque signalétique conforme.",
        "Facture du fournisseur reçue le 22/05/2026 : 6 900 USD, enregistrée par Joseph K.",
        "Rapprochement : commande 6 900 = réception 1 unité = facture 6 900 → paiement autorisé.",
        "Délai de livraison : 07/05 → 19/05 = 12 jours (contractuel : 14 jours).",
        "Fiche L1, ligne 5 : « Réception + rapprochement | GRN du 19/05 | Achol D. | 3 documents concordants | aucune ».",
      ],
    },
    result: "Statut de livraison étayé par une réception signée ; le paiement s'appuie sur trois documents concordants.",
    tip: "Quand vous lisez « Livré » dans un export, rappelez-vous que ce statut vient de la réception : un achat facturé mais non réceptionné ne doit pas apparaître comme livré.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 7',
    title: 'Créer ou vérifier la fiche actif pour un bien durable',
    intro: "Un groupe électrogène n'est pas un article de stock : c'est un actif, qui doit être localisé, valorisé et affecté à un responsable. Si la fiche n'existe pas à la réception, le bien est invisible pour l'auditeur.",
    steps: [
      {
        title: 'Vérifiez que le bien est à immobiliser',
        actions: [
          "Comparez la valeur unitaire au seuil de capitalisation de votre politique (exemple fictif : 500 USD) et vérifiez la nature durable du bien.",
          "Une fiche par unité : 2 réfrigérateurs = 2 fiches.",
        ],
      },
      {
        title: 'Ouvrez ou créez la fiche',
        actions: [
          "Ouvrez le registre des actifs (SAP : AS03 pour afficher, AW01N explorateur d'actifs ; la création AS01 est réservée à la finance).",
          "Contrôlez les 7 champs : numéro, désignation, localisation, responsable, valeur d'acquisition, date d'acquisition, statut.",
          "Apposez l'étiquette d'inventaire portant le numéro d'actif et photographiez le bien et sa plaque.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — fiche actif du groupe électrogène',
      lines: [
        "Numéro d'actif : attribué par l'ERP à la création (demandé à Joseph K. le 22/05/2026).",
        "Désignation : groupe électrogène 20 kVA insonorisé, n° de série relevé à la réception.",
        "Localisation : centre de stabilisation nutritionnelle, local technique. Responsable : Peter A.",
        "Valeur d'acquisition : 6 900 USD. Date d'acquisition : 19/05/2026. Statut : en service.",
        "Fiche L1, ligne 6 : « Fiche actif | 1 fiche | 22/05/2026 | Joseph K. | 7 champs complets, étiquette posée | aucune ».",
      ],
    },
    result: "Le bien durable a une fiche unique, localisée, valorisée et affectée ; l'étiquette physique correspond au numéro de l'ERP.",
    pitfall: "Laisser un bien durable dans un stock de consommables : il n'a plus de responsable, plus de localisation suivie, et disparaît au premier inventaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 7 sur 7',
    title: 'Lire la piste d\'audit et conclure la fiche de circuit',
    intro: "La piste d'audit reconstitue « qui a fait quoi, quand ». C'est ce document que l'on vous demandera en cas de contestation : vous devez savoir l'ouvrir et la lire avec un œil de contrôleur.",
    steps: [
      {
        title: 'Ouvrez l\'historique du document',
        actions: [
          "Dans l'écran d'affichage de la PR ou du PO, ouvrez le journal des modifications (SAP : menu Environnement > Modifications ; autre ERP : onglet Historique).",
          "Relevez chaque événement avec sa date, son heure et son utilisateur.",
        ],
      },
      {
        title: 'Contrôlez la cohérence avec 4 questions',
        actions: [
          "L'ordre chronologique est-il logique (demande, approbation, commande, réception, facture) ?",
          "Une même personne a-t-elle fait deux étapes incompatibles (demander et approuver, réceptionner et payer) ?",
          "Une modification a-t-elle eu lieu après approbation (montant, fournisseur) ?",
          "Les approbateurs correspondent-ils à la matrice des seuils ?",
        ],
      },
      {
        title: 'Concluez la fiche',
        actions: [
          "Ajoutez une dernière ligne « Conclusion » : circuit conforme ou liste des anomalies avec action et échéance.",
          "Enregistrez L1 et ajoutez-la à votre dossier « Reporting ERP ».",
        ],
      },
    ],
    table: {
      columns: ['Date et heure', 'Utilisateur', 'Action', 'Document'],
      rows: [
        ['21/04/2026 14:02', 'Peter A.', 'Création de la demande', 'PR-2026-0142'],
        ['22/04/2026 09:15', 'Daniel O.', 'Approbation niveau 1', 'PR-2026-0142'],
        ['23/04/2026 16:40', 'SCM', 'Approbation niveau 2', 'PR-2026-0142'],
        ['07/05/2026 10:12', 'Assistant achats', 'Création du bon de commande', 'PO-GOG-036'],
        ['19/05/2026 11:30', 'Achol D.', 'Réception', 'GRN, PO-GOG-036'],
        ['22/05/2026 09:50', 'Joseph K.', 'Enregistrement de la facture', 'PO-GOG-036'],
        ['22/05/2026 15:20', 'Joseph K.', 'Demande de création de la fiche actif', 'Actif groupe 20 kVA'],
      ],
    },
    result: "Livrable L1 terminé : circuit conforme, 6 personnes différentes, aucune modification après approbation, 12 jours de la commande à la réception, fiche actif créée.",
    pitfall: "Conclure « tout est conforme » en ne regardant que les statuts. Lisez les dates et les auteurs : c'est là que l'on trouve une approbation postérieure à la commande ou deux étapes faites par la même personne.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — EXTRAIRE UN EXPORT COMPLET (LUNDI APRÈS-MIDI)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Définir précisément ce que vous voulez extraire',
    intro: "Un export se prépare avant de cliquer. Un export mal cadré (période trop courte, statuts oubliés) produit un rapport parfaitement nettoyé mais faux. Vous écrivez d'abord la demande : question posée, période, périmètre, colonnes.",
    steps: [
      {
        title: 'Rédigez la fiche de demande d\'export',
        actions: [
          "Question : quel est le statut de tous les achats de la base sur la période ?",
          "Période : dates de début et de fin de la date de commande (mois comptables complets).",
          "Périmètre : base, projet, ligne bailleur, types de document (commandes, appels sous commande-cadre).",
          "Colonnes : n° de PO, fournisseur, article, date de commande, montant, devise, statut (les 7 colonnes de l'onglet Données brutes du template).",
          "Format : CSV, séparateur point-virgule, encodage UTF-8.",
        ],
      },
      {
        title: 'Envoyez-la à la personne qui exporte',
        actions: [
          "Envoyez la fiche par écrit à Joseph K. en demandant de vous indiquer le nombre de lignes affiché à l'écran avant l'export.",
          "Notez l'envoi dans votre journal de bord.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — message du 1er juin à 8 h 30',
      lines: [
        "« Joseph, peux-tu extraire de l'ERP toutes les commandes de la base de Gogrial créées du 01/03/2026 au 31/05/2026, tous statuts confondus (livrées, en cours, annulées) et tous types de documents ? »",
        "« Colonnes : n° de PO, fournisseur, article, date de commande, montant, devise, statut. Format CSV, point-virgule, UTF-8. »",
        "« Merci de me dire combien de lignes l'écran affiche avant d'exporter. Je compare. »",
      ],
    },
    result: "Une demande d'export écrite, datée, qui sert aussi de référence pour contrôler le fichier reçu.",
    tip: "Demandez toujours des mois comptables complets : un export du « 5 au 28 » ne se rapproche jamais de la comptabilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Paramétrer l\'export dans l\'ERP et supprimer les filtres par défaut',
    intro: "Un ERP peut avoir des filtres actifs par défaut, une plage de dates restreinte ou exclure certains statuts sans que ce soit visible immédiatement. Si vous exportez vous-même, ou si vous accompagnez Joseph K., vérifiez chaque paramètre un par un.",
    steps: [
      {
        title: 'Ouvrez la liste et réglez les critères de sélection',
        actions: [
          "Ouvrez la liste des commandes (SAP : ME2N ou ME2M ; autre ERP : menu Achats > Commandes > Liste).",
          "Saisissez la période sur la date du document : du 01/03/2026 au 31/05/2026.",
          "Vérifiez le groupe d'achats et le site : toute la base de Gogrial.",
          "Décochez les restrictions de statut : commandes ouvertes, livrées et annulées.",
        ],
      },
      {
        title: 'Réglez la mise en page puis exécutez',
        actions: [
          "Choisissez ou créez une mise en page (layout) contenant les 7 colonnes demandées et rien d'autre.",
          "Exécutez, puis vérifiez dans la liste affichée qu'aucun filtre ne s'applique (icône de filtre grisée).",
          "Lisez le nombre de lignes affiché à l'écran et notez-le.",
        ],
      },
    ],
    table: {
      columns: ['Paramètre', 'Valeur par défaut de l\'ERP', 'Valeur correcte pour le rapport'],
      rows: [
        ['Période', '60 derniers jours (du 02/04 au 01/06/2026)', 'Du 01/03/2026 au 31/05/2026'],
        ['Statuts', 'Commandes ouvertes et livrées', 'Toutes, y compris annulées'],
        ['Mise en page', 'Mise en page personnelle de Joseph K., 9 colonnes', 'Mise en page « Reporting SCM », 7 colonnes'],
        ['Résultat', '13 lignes', '18 lignes'],
      ],
    },
    result: "Écran ERP : 18 lignes de commande pour la période. C'est ce chiffre qui servira de référence au prochain contrôle.",
    pitfall: "Exporter « ce qui s'affiche » sans lire les critères de sélection. Le premier export de Joseph K. (13 lignes) omettait les 4 commandes de mars et la commande annulée : un rapport nettoyé à la perfection sur ces 13 lignes aurait été faux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Exporter au bon format et figer le fichier source',
    intro: "Le fichier exporté est votre pièce justificative : en cas de litige sur un chiffre, on y revient. Vous le conservez tel quel, nommé, daté, en lecture seule. Toute transformation se fait sur une copie ou dans Power Query.",
    steps: [
      {
        title: 'Exportez',
        actions: [
          "Dans la liste, utilisez Liste > Exporter > Fichier local (SAP) ou le bouton Exporter de votre ERP.",
          "Choisissez le format CSV (ou texte délimité), séparateur point-virgule, encodage UTF-8.",
          "Enregistrez directement dans le dossier « SOURCES » du dossier Reporting ERP.",
        ],
      },
      {
        title: 'Figez le fichier',
        actions: [
          "Nommez le fichier : SOURCE_export_ERP_achats_Gogrial_2026-06-01_1042.csv (type, base, date, heure).",
          "Clic droit > Propriétés > cochez « Lecture seule » > OK.",
          "N'ouvrez jamais le CSV en double-cliquant dessus pour le corriger : Excel convertirait les dates selon les paramètres régionaux et l'enregistrement écraserait la source.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — fichier reçu à 10 h 42',
      lines: [
        "Nom : SOURCE_export_ERP_achats_Gogrial_2026-06-01_1042.csv, 18 lignes de données plus une ligne d'en-tête.",
        "En-tête : N° PO;Fournisseur;Article;Date commande (saisie brute);Montant (saisi brut);Devise (saisie brute);Statut",
        "Ligne 2 du fichier : PO-GOG-026;Grossiste Wau — marché central;Farine de maïs et haricots (2,1 t);16/03/2026;6400000;SSP;Livré",
      ],
    },
    result: "Fichier source nommé, daté, en lecture seule, rangé dans SOURCES.",
    pitfall: "Corriger le CSV à la main « juste cette fois » : la source n'existe plus, personne ne peut vérifier vos chiffres, et le mois suivant vous recommencez à zéro.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Contrôler l\'exhaustivité de l\'export avant de nettoyer quoi que ce soit',
    intro: "Un rapport parfaitement nettoyé sur des données incomplètes reste un rapport faux. Cinq contrôles de 10 minutes comparent le fichier à l'écran de l'ERP, avant la moindre transformation.",
    steps: [
      {
        title: 'Faites les 5 contrôles',
        actions: [
          "Nombre de lignes : comparez les lignes du fichier au nombre affiché à l'écran de l'ERP.",
          "Plage de dates : triez la colonne des dates (sans les modifier) et vérifiez que la plus ancienne et la plus récente couvrent la période demandée.",
          "Statuts : vérifiez que les trois statuts attendus (livré, en cours, annulé) sont présents.",
          "Fournisseurs : comparez le nombre de fournisseurs distincts à votre liste de fournisseurs actifs.",
          "Totaux par devise : comparez la somme par devise du fichier à celle de l'ERP (la liste ERP affiche en général un total par devise).",
        ],
      },
      {
        title: 'Décidez',
        actions: [
          "Tout concorde : poursuivez.",
          "Un écart : identifiez sa cause (filtre, période, statut) et demandez un nouvel export. Ne nettoyez rien tant que l'écart n'est pas expliqué.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Écran ERP', 'Fichier reçu', 'Verdict'],
      rows: [
        ['Nombre de lignes', '18', '18', 'Concordant'],
        ['Date la plus ancienne / récente (lues à la main)', '16/03/2026 / 29/05/2026', '16/03/2026 / 29/05/2026', 'Concordant, période couverte'],
        ['Statuts présents', 'Livré, En cours, Annulé, 1 vide', 'Livré, En cours, Annulé, 1 vide', 'Concordant'],
        ['Fournisseurs distincts', '8', '8', 'Concordant'],
        ['Total SSP', '24 400 000 (4 lignes)', '24 400 000 (4 lignes)', 'Concordant'],
        ['Total USD (libellés USD, US$, $, Dollars)', '50 050 (11 lignes)', '50 050 (11 lignes)', 'Concordant'],
        ['Total EUR (libellés EUR, Euro)', '29 100 (2 lignes + 1 sans montant)', '29 100 (2 lignes + 1 sans montant)', 'Concordant'],
      ],
    },
    result: "Le fichier reflète exactement l'écran de l'ERP, défauts compris : le doublon du 14 avril existe aussi dans l'ERP. L'export est complet ; il reste à le nettoyer.",
    tip: "Le premier export de 13 lignes aurait échoué dès le contrôle n° 1 (18 à l'écran) et n° 2 (aucune date avant le 06/04). Vous seriez revenu vers Joseph K. avant d'avoir perdu une heure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Archiver l\'export et consigner sa fiche de contrôle',
    intro: "Le jour où un collègue reprend votre reporting, il doit savoir d'où vient chaque donnée. Vous consignez l'export dans une fiche courte, qui alimentera la ligne « Source » de l'onglet Notes de transformation.",
    steps: [
      {
        title: 'Remplissez la fiche de contrôle (L2)',
        actions: [
          "Créez « L2_Fiche_controle_export.xlsx » (ou une feuille de votre classeur) avec : Fichier | Date et heure d'export | Exporté par | Période | Périmètre | Paramètres | Lignes à l'écran | Lignes au fichier | Contrôles | Verdict.",
          "Recopiez les résultats des 5 contrôles de l'étape précédente.",
        ],
      },
      {
        title: 'Préparez le texte de la ligne « Source » des notes',
        actions: [
          "Rédigez en 3 phrases : nom du fichier, date d'export, période couverte, périmètre, résultat du contrôle.",
          "Gardez-le : vous le collerez dans la cellule B5 de l'onglet Notes de transformation (procédure 8).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — texte de la ligne « Source »',
      lines: [
        "Fichier : SOURCE_export_ERP_achats_Gogrial_2026-06-01_1042.csv, exporté de l'ERP par Joseph K. le 01/06/2026 à 10 h 42, non modifié (lecture seule).",
        "Période : commandes créées du 01/03/2026 au 31/05/2026, base de Gogrial, tous statuts et tous types de document. Un premier export aux paramètres par défaut (13 lignes) a été rejeté.",
        "Contrôle : 18 lignes au fichier = 18 lignes à l'écran ; totaux par devise concordants.",
      ],
    },
    result: "Livrable L2 terminé : export archivé en lecture seule, fiche de contrôle remplie, texte de la ligne « Source » prêt.",
    pitfall: "Oublier de consigner l'export rejeté. Mentionner que le premier fichier a été écarté, et pourquoi, vous protège si quelqu'un d'autre l'a déjà utilisé dans un autre rapport.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — PRÉPARER LE CLASSEUR ET CONNECTER POWER QUERY
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Ouvrir le template et le préparer pour votre mission',
    intro: "Le template guide-extraction-nettoyage-power-query.xlsx contient trois onglets : « Données brutes » (un jeu d'exemple volontairement sale), « Données nettoyées » (la logique de nettoyage par formules, colonnes A à O, synthèse en lignes 25 à 28, taux de change en Q:R) et « Notes de transformation » (6 lignes à documenter à chaque cycle).",
    steps: [
      {
        title: 'Copiez-le et renommez-le',
        actions: [
          "Ouvrez le template et enregistrez-le immédiatement sous « L4_Nettoyage_ERP_Kerowa_2026-06.xlsx » dans votre dossier de travail.",
          "Parcourez les trois onglets sans rien modifier : repérez les en-têtes en ligne 4, les formules de l'onglet Données nettoyées et la synthèse en A24:E28.",
        ],
      },
      {
        title: 'Remplacez les repères de l\'exemple',
        actions: [
          "Dans « Données brutes », cellule A2, remplacez la mention d'exemple par : « Export ERP Kerowa Santé — base de Gogrial — commandes du 01/03/2026 au 31/05/2026 ».",
          "Même chose dans « Données nettoyées » (A2) et « Notes de transformation » (A2).",
          "Effacez la note pédagogique en A24 de « Données brutes » : elle décrit le jeu d'exemple, pas le vôtre.",
        ],
      },
    ],
    result: "Un classeur à votre nom, aux repères de votre mission, dont vous connaissez les trois onglets.",
    tip: "Gardez une copie vierge du template dans un dossier « MODELES » : elle servira au mois suivant.",
    pitfall: "Garder le jeu de données d'exemple « pour comparer » : ses lignes sont comptées dans la synthèse et faussent vos totaux. Remplacez-le avant de saisir quoi que ce soit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Charger vos 18 lignes dans l\'onglet « Données brutes »',
    intro: "Les formules du template lisent le texte des dates avec LEFT, MID et FIND. Si Excel convertit vos dates en vraies dates au collage, le texte d'origine disparaît et les formules échouent. Vous protégez donc la colonne avant de coller.",
    steps: [
      {
        title: 'Protégez la colonne des dates',
        actions: [
          "Dans « Données brutes », effacez le contenu des lignes 5 à 22 (touche Suppr, sans supprimer les lignes).",
          "Sélectionnez D5:D22, clic droit > Format de cellule > Texte > OK.",
        ],
      },
      {
        title: 'Collez en texte puis séparez les colonnes',
        actions: [
          "Ouvrez le CSV dans le Bloc-notes (clic droit > Ouvrir avec), copiez les 18 lignes de données, sans l'en-tête.",
          "Collez-les en A5, puis Données > Convertir > Délimité > séparateur Point-virgule.",
          "À l'étape 3 de l'assistant, cliquez sur la colonne des dates et cochez Texte, puis Terminer.",
          "Vérifiez que les montants de la colonne E sont alignés à droite (nombres) et les dates de la colonne D alignées à gauche (texte).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — extrait de l\'onglet Données brutes après collage',
      lines: [
        "Ligne 5 : PO-GOG-026 | Grossiste Wau — marché central | Farine de maïs et haricots (2,1 t) | 16/03/2026 | 6400000 | SSP | Livré",
        "Ligne 7 : PO-GOG-028 | Centrale d'achat internationale | Médicaments essentiels (38 colis) | 03/27/2026 | 17200 | EUR | Livré",
        "Ligne 12 : PO-GOG-032 | Station Kuajok | Carburant diesel (3 000 L) | 14/04/2026 | 3300 | USD | Livré (la ligne 13 est identique)",
        "Ligne 20 : PO-GOG-039 | Centrale d'achat internationale | Médicaments essentiels (15 colis) | 22/05/2026 | (vide) | EUR | (vide)",
      ],
    },
    result: "Les 18 lignes sont dans A5:G22, dates en texte, montants en nombres, cellules vides laissées vides.",
    pitfall: "Coller directement depuis un tableur dont les dates ont été converties : « 06/04/2026 » devient le 6 avril ou le 4 juin selon la langue d'Excel, et l'information d'origine est perdue sans avertissement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Connecter Power Query à l\'export sans toucher à la source',
    intro: "Power Query lit le fichier CSV d'origine et applique les transformations sur une copie en mémoire : la source reste intacte et consultable. C'est la première règle professionnelle du nettoyage de données ERP. Vous travaillez dans un classeur de reporting distinct du template.",
    steps: [
      {
        title: 'Ouvrez un classeur de reporting et lancez la connexion',
        actions: [
          "Créez un nouveau classeur « L3_Pipeline_ERP_Kerowa.xlsx ».",
          "Cliquez sur Données > Récupérer des données > À partir d'un fichier > À partir d'un classeur/texte-CSV.",
          "Sélectionnez le fichier SOURCE_export_ERP_achats_Gogrial_2026-06-01_1042.csv.",
        ],
      },
      {
        title: 'Réglez l\'aperçu puis transformez',
        actions: [
          "Origine du fichier : 65001 : Unicode (UTF-8). Délimiteur : Point-virgule.",
          "Détection du type de données : « Ne pas détecter les types de données » (la détection automatique devinerait les dates dans la mauvaise langue).",
          "Cliquez sur Transformer les données (et non sur Charger) pour ouvrir l'éditeur Power Query.",
        ],
      },
    ],
    result: "L'éditeur Power Query est ouvert sur les 18 lignes ; le panneau « Étapes appliquées » affiche Source et En-têtes promus.",
    pitfall: "Cliquer sur Charger au lieu de Transformer les données : Excel charge un tableau avec des types devinés, y compris des dates déjà (mal) converties.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Contrôler les colonnes dans l\'éditeur et fixer les types',
    intro: "Avant toute transformation, vous contrôlez ce que Power Query a lu : en-têtes corrects, nombre de lignes, vides, valeurs distinctes. Le profil de colonne le montre sans formule.",
    steps: [
      {
        title: 'Activez le profilage complet',
        actions: [
          "Affichage > cochez Qualité de la colonne, Distribution de la colonne et Profil de la colonne.",
          "En bas à gauche, remplacez « Profilage de colonne basé sur les 1 000 premières lignes » par « Profilage de colonne basé sur le jeu de données entier ».",
        ],
      },
      {
        title: 'Fixez les types et nommez la requête',
        actions: [
          "Sélectionnez la colonne Montant (saisi brut), Transformer > Type de données > Nombre décimal. Laissez toutes les autres colonnes en Texte, dates comprises.",
          "Renommez la requête (panneau Propriétés à droite) : Achats_ERP.",
          "Clic droit sur chaque étape > Renommer : « Source brute CSV », « Montant en nombre ».",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Lignes', 'Valeurs distinctes', 'Vides', 'Erreurs'],
      rows: [
        ['N° PO', '18', '16', '0', '0'],
        ['Date commande (saisie brute)', '18', '17', '0', '0'],
        ['Montant (saisi brut)', '18', '17', '1', '0'],
        ['Devise (saisie brute)', '18', '7', '0', '0'],
        ['Statut', '18', '3 (+ vide)', '1', '0'],
      ],
    },
    result: "Le profil confirme ce que vous attendiez : 16 PO distincts sur 18 lignes (deux PO apparaissent deux fois), 7 libellés de devise pour 3 devises réelles, 1 montant et 1 statut vides.",
    tip: "Le profil de colonne est votre détecteur de saleté : 7 valeurs distinctes dans une colonne de devises annonce déjà des libellés non normalisés.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — DOUBLONS
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Fixer le critère d\'unicité et la règle de décision',
    intro: "Deux commandes identiques en apparence (même article, même fournisseur, même montant) peuvent être deux commandes réellement passées à deux dates différentes pour reconstituer un stock. Supprimer sans critère rigoureux peut faire disparaître de vraies dépenses du rapport : une erreur au moins aussi grave que les compter deux fois.",
    steps: [
      {
        title: 'Écrivez le critère',
        actions: [
          "Le template compare cinq champs : N° PO + Article + Date + Montant + Devise, correspondance exacte.",
          "Le numéro de PO est indispensable : ne jamais conclure sur la seule ressemblance visuelle.",
        ],
      },
      {
        title: 'Écrivez la règle de décision pour les trois cas',
        actions: [
          "Cas A : les cinq champs sont identiques → doublon exact : vérifier dans l'ERP, puis supprimer une occurrence.",
          "Cas B : même PO et même article mais une date ou un montant différent → ne pas supprimer, vérifier dans l'ERP (appel, poste, avenant, double commande).",
          "Cas C : même fournisseur, article et montant mais PO différents → commandes distinctes, conserver.",
        ],
      },
    ],
    table: {
      columns: ['Cas', 'Ce que vous voyez', 'Exemple Kerowa', 'Décision'],
      rows: [
        ['A — doublon exact', '5 champs identiques', 'PO-GOG-032, 14/04/2026, 3 300 USD, deux fois', 'Vérifier puis supprimer une occurrence'],
        ['B — même PO, date différente', 'Même PO et même article, dates 06/04 et 20/04', 'PO-GOG-030, farine de maïs (1,9 t), 5 900 000 SSP', 'Conserver, vérifier dans l\'ERP'],
        ['C — PO différents', 'Même fournisseur, même type d\'article', 'Carburant diesel 3 000 L à Kuajok : PO-GOG-032 et PO-GOG-041', 'Conserver : commandes distinctes'],
      ],
    },
    result: "Une règle écrite avant d'ouvrir les données : vous ne déciderez pas « à l'œil ».",
    pitfall: "Utiliser « Supprimer les doublons » sur toutes les colonnes ou sur le fournisseur seul : vous supprimez des commandes légitimes qui se ressemblent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Repérer les doublons sans rien supprimer (template et Power Query)',
    intro: "Avant de supprimer, vous comptez. Le chiffre des lignes en double doit figurer dans votre note de transformation : c'est une information que votre coordination doit connaître.",
    steps: [
      {
        title: 'Dans le template (onglet Données nettoyées)',
        actions: [
          "Cliquez sur la cellule L5 : la formule COUNTIFS compte les lignes de « Données brutes » identiques sur le n° de PO, l'article, la date, le montant et la devise brute.",
          "Lisez la colonne L : 1 = ligne unique, 2 = ligne qui existe en deux exemplaires.",
          "Lisez la colonne M : « OUI - doublon exact, a verifier avant suppression » apparaît sur les DEUX lignes du couple, « NON » sinon.",
          "Lisez la cellule E26 (« Dont doublons exacts détectés ») : elle compte les lignes marquées OUI.",
        ],
      },
      {
        title: 'Dans Power Query (comptage sans suppression)',
        actions: [
          "Dupliquez la requête (clic droit > Dupliquer) pour ne pas toucher le pipeline principal, nommez-la « Controle_doublons ».",
          "Sélectionnez les 5 colonnes du critère, Transformer > Regrouper par > Opération « Compter les lignes ».",
          "Filtrez la colonne de comptage pour garder les valeurs supérieures à 1.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — résultat sur les 18 lignes',
      lines: [
        "Lignes 12 et 13 de « Données nettoyées » (PO-GOG-032) : L = 2, M = « OUI - doublon exact… ». E26 = 2 lignes, soit 1 couple.",
        "Lignes 9 et 10 (PO-GOG-030, dates 06/04 et 20/04) : L = 1, M = « NON » : la date diffère, ce n'est pas un doublon exact au sens du critère. À vérifier malgré tout (cas B).",
        "Power Query : 1 groupe de 2 lignes (PO-GOG-032, 3 300 USD).",
      ],
    },
    result: "Un seul couple de doublons exacts (1 ligne en trop), et un cas B à vérifier.",
    tip: "Si votre export dépasse les 18 lignes du template, insérez les nouvelles lignes à l'intérieur de la plage 5–22 et recopiez les formules : les plages $A$5:$A$22 des formules COUNTIFS s'étendent alors automatiquement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Vérifier chaque cas dans l\'ERP avec le key-user',
    intro: "Le fichier ne vous dit pas pourquoi une ligne est en double. L'ERP, lui, le sait : documents distincts ou non, heure de création, utilisateur, réceptions associées. Une question précise par cas suffit.",
    steps: [
      {
        title: 'Préparez une question fermée par cas',
        actions: [
          "Cas A (PO-GOG-032) : « Existe-t-il un ou deux documents d'achat ? Heures et auteur de création ? Combien de réceptions ? »",
          "Cas B (PO-GOG-030) : « Les deux lignes sont-elles deux postes du même PO ? Combien de réceptions, à quelles dates ? »",
        ],
      },
      {
        title: 'Consignez les réponses avec leur source',
        actions: [
          "Notez la réponse, le nom de la personne, la date et le document de l'ERP consulté.",
          "Si un doublon existe dans l'ERP lui-même, demandez à la personne habilitée de l'annuler à la source pour libérer l'engagement budgétaire.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — réponses de Joseph K. le 2 juin à 9 h',
      lines: [
        "PO-GOG-032 : deux documents d'achat identiques, créés le 14/04/2026 à 16 h 41 et 16 h 43 par le même utilisateur, pendant la coupure internet. Une seule réception (15/04/2026). → doublon confirmé.",
        "Action : Joseph K. demande l'annulation du second document au siège, pour libérer 3 300 USD d'engagement sur la ligne budgétaire.",
        "PO-GOG-030 : commande-cadre avec le grossiste de Wau, deux appels (poste 10 le 06/04, poste 20 le 20/04), deux réceptions distinctes (13/04 et 27/04). → deux lignes légitimes.",
      ],
    },
    result: "Décision documentée pour chaque cas : PO-GOG-032, supprimer une occurrence ; PO-GOG-030, conserver les deux lignes.",
    pitfall: "Penser que le nettoyage dans Power Query répare l'ERP. Il ne corrige que votre rapport : le doublon continue de bloquer 3 300 USD de budget tant qu'il n'est pas annulé à la source.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Supprimer les doublons confirmés dans Power Query et consigner',
    intro: "Une fois les cas vérifiés, vous supprimez dans le pipeline, sur le critère exact, et vous inscrivez le nombre de lignes supprimées dans vos notes. Les lignes ne sont pas supprimées du fichier source.",
    steps: [
      {
        title: 'Nettoyez d\'abord les espaces parasites',
        actions: [
          "Sélectionnez les colonnes de texte (N° PO, Fournisseur, Article, Devise, Statut), Transformer > Format > Supprimer les espaces, puis Nettoyer : sans cela, « Grossiste Wau » et « Grossiste Wau » suivi d'un espace final ne sont pas vus comme identiques.",
        ],
      },
      {
        title: 'Supprimez les doublons sur le critère exact',
        actions: [
          "Dans la requête Achats_ERP, sélectionnez avec Ctrl+clic les cinq colonnes : N° PO, Article, Date commande (saisie brute), Montant (saisi brut), Devise (saisie brute).",
          "Accueil > Supprimer les lignes > Supprimer les doublons.",
          "Vérifiez dans la barre d'état : le nombre de lignes passe de 18 à 17.",
          "Renommez l'étape « Doublons exacts supprimés (PO + article + date + montant + devise) ».",
        ],
      },
      {
        title: 'Consignez',
        actions: [
          "Notez : 1 ligne supprimée (PO-GOG-032), 1 cas conservé après vérification (PO-GOG-030), source de la confirmation.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — l\'étape en langage M (Éditeur avancé)',
      lines: [
        "= Table.Distinct(#\"Montant en nombre\", {\"N° PO\", \"Article\", \"Date commande (saisie brute)\", \"Montant (saisi brut)\", \"Devise (saisie brute)\"})",
        "Résultat : 17 lignes, 16 PO distincts. Lignes conservées pour PO-GOG-030 : 2.",
        "Texte pour la ligne « Doublons » des notes : « 1 ligne supprimée sur critère exact PO + article + date + montant + devise (PO-GOG-032, double saisie du 14/04/2026 confirmée dans l'ERP par J.K. le 02/06). PO-GOG-030 conservé en 2 lignes : appels distincts sous commande-cadre. »",
      ],
    },
    result: "Pipeline à 17 lignes, doublon traité, décision justifiée et consignée.",
    pitfall: "Supprimer sur la seule colonne N° PO : vous perdriez la seconde ligne de PO-GOG-030, une vraie commande de 1 298 USD.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — DATES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Détecter le format de chaque date',
    intro: "Un export consolidé à partir de plusieurs postes de saisie mélange souvent JJ/MM/AAAA, MM/JJ/AAAA et AAAA-MM-JJ. Vous commencez par poser un diagnostic ligne par ligne : quel format, ou lequel est impossible à trancher.",
    steps: [
      {
        title: 'Dans le template',
        actions: [
          "Lisez la colonne E « Format détecté » de « Données nettoyées ». Sa logique : si le texte contient « - » c'est ISO ; sinon, si le 1er nombre dépasse 12 c'est un jour (JJ/MM/AAAA) ; sinon, si le 2e nombre dépasse 12 c'est un jour (MM/JJ/AAAA) ; sinon « AMBIGU - A VERIFIER MANUELLEMENT ».",
          "Comptez les cas : le tri de la colonne E ou un filtre vous donne la répartition.",
        ],
      },
      {
        title: 'Dans Power Query',
        actions: [
          "Ajouter une colonne > Colonne personnalisée, nom « Format détecté ».",
          "Collez : if Text.Contains([#\"Date commande (saisie brute)\"], \"-\") then \"ISO\" else if Number.FromText(Text.BeforeDelimiter([#\"Date commande (saisie brute)\"], \"/\")) > 12 then \"JJ/MM/AAAA\" else if Number.FromText(Text.BetweenDelimiters([#\"Date commande (saisie brute)\"], \"/\", \"/\")) > 12 then \"MM/JJ/AAAA\" else \"AMBIGU\"",
        ],
      },
    ],
    table: {
      columns: ['Format détecté', 'Nombre de lignes (sur 18)', 'Exemples Kerowa'],
      rows: [
        ['ISO (AAAA-MM-JJ)', '6', '2026-03-19, 2026-04-28, 2026-05-29'],
        ['JJ/MM/AAAA (1er nombre > 12)', '8', '16/03/2026, 30/03/2026, 22/05/2026'],
        ['MM/JJ/AAAA (2e nombre > 12)', '2', '03/27/2026 (PO-GOG-028), 05/20/2026 (PO-GOG-038)'],
        ['AMBIGU', '2', '06/04/2026 (PO-GOG-030), 04/05/2026 (PO-GOG-035)'],
      ],
    },
    result: "Diagnostic : 16 dates dont le format est démontrable, 2 dates réellement ambiguës.",
    pitfall: "Laisser Excel ou Power Query « deviner » avec la langue de votre poste : « 03/27/2026 » deviendrait une erreur ou, pire, « 06/04/2026 » serait lu au hasard, sans aucun avertissement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Normaliser les dates dont le format est démontré',
    intro: "Pour chaque ligne au format démontré, vous convertissez en vraie date en indiquant explicitement le format d'origine. Les dates ambiguës restent vides : elles ne sont jamais devinées.",
    steps: [
      {
        title: 'Dans le template',
        actions: [
          "Lisez la colonne F « Date normalisée » : elle reconstruit la date avec la fonction DATE à partir du format détecté, et affiche « — » pour une date ambiguë.",
          "Sélectionnez F5:F22, Format de cellule > Date > 14/03/2012 pour lire des jours/mois/années sans équivoque.",
        ],
      },
      {
        title: 'Dans Power Query',
        actions: [
          "Ajouter une colonne > Colonne personnalisée, nom « Date normalisée ».",
          "Collez : if [Format détecté] = \"ISO\" then Date.FromText([#\"Date commande (saisie brute)\"], [Format=\"yyyy-MM-dd\"]) else if [Format détecté] = \"JJ/MM/AAAA\" then Date.FromText([#\"Date commande (saisie brute)\"], [Format=\"dd/MM/yyyy\", Culture=\"fr-FR\"]) else if [Format détecté] = \"MM/JJ/AAAA\" then Date.FromText([#\"Date commande (saisie brute)\"], [Format=\"MM/dd/yyyy\", Culture=\"en-US\"]) else null",
          "Sélectionnez la colonne puis Transformer > Type de données > Date.",
          "Variante par l'interface : Transformer > Colonne Date/Heure > Analyser, en précisant le format ; elle ne gère qu'un seul format à la fois, d'où la colonne personnalisée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — dates normalisées',
      lines: [
        "16/03/2026 → 16/03/2026 (JJ/MM).   2026-03-19 → 19/03/2026 (ISO).",
        "03/27/2026 → 27/03/2026 (MM/JJ : le 2e nombre est un jour).   05/20/2026 → 20/05/2026.",
        "06/04/2026 et 04/05/2026 → vides (null) : ambiguës, traitées à l'étape suivante.",
      ],
    },
    result: "16 lignes ont une vraie date, 2 lignes portent « null » et ressortiront comme anomalies.",
    tip: "Une date vide est une alerte honnête ; une date fausse est un mensonge silencieux. Préférez toujours la première.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Lever les doutes à la source, jamais au hasard',
    intro: "Pour une date ambiguë, un indice vous aide à choisir qui interroger et quoi demander, mais il ne remplace pas la confirmation : une date fausse dans un rapport de délai peut fausser une décision opérationnelle.",
    steps: [
      {
        title: 'Cherchez un indice de cohérence',
        actions: [
          "Les numéros de PO croissent avec le temps : encadrez la ligne ambiguë par le PO précédent et le PO suivant.",
          "Écartez une lecture qui placerait la date après la date d'export ou hors de la période.",
        ],
      },
      {
        title: 'Faites confirmer dans l\'ERP',
        actions: [
          "Demandez au key-user la date de document des POs concernés, lue à l'écran de l'ERP.",
          "Notez la réponse dans une feuille « Corrections » de votre classeur de reporting : N° PO | Date brute | Date confirmée | Confirmé par | Date de confirmation.",
        ],
      },
      {
        title: 'Fusionnez la correction dans le pipeline',
        actions: [
          "Transformez la plage en tableau (Ctrl+T), nommez-le tblCorrections, Données > À partir d'un tableau/d'une plage, chargez comme connexion seulement.",
          "Dans Achats_ERP : Accueil > Fusionner les requêtes, jointure externe gauche sur N° PO et Date commande (saisie brute) ; développez « Date confirmée ».",
          "Ajoutez la colonne « Date retenue » : if [Date normalisée] <> null then [Date normalisée] else [Date confirmée].",
        ],
      },
    ],
    example: {
      title: 'Kerowa — les deux dates ambiguës',
      lines: [
        "PO-GOG-030 (06/04/2026) : PO-029 est daté du 30/03, PO-031 du 09/04 → le 6 avril est cohérent ; le 4 juin est impossible (après l'export). Joseph K. confirme : date de document 06/04/2026.",
        "PO-GOG-035 (04/05/2026) : PO-034 est daté du 28/04, PO-036 du 07/05 → le 4 mai est cohérent ; le 5 avril serait antérieur à PO-030. Joseph K. confirme : 04/05/2026.",
        "Corrections consignées le 02/06/2026, par Joseph K.",
      ],
    },
    result: "Les deux dates sont confirmées par l'ERP, consignées dans la table des corrections et appliquées automatiquement par le pipeline à chaque actualisation.",
    pitfall: "Écrire la bonne date directement dans la colonne du fichier : la correction disparaît à la prochaine actualisation, et personne ne sait qu'elle a eu lieu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Contrôler la cohérence des dates retenues',
    intro: "Une date bien formatée peut rester absurde (hors période, dans le futur, antérieure à la réception). Trois contrôles de 5 minutes garantissent que la colonne est utilisable pour calculer des délais.",
    steps: [
      {
        title: 'Faites les contrôles',
        actions: [
          "Plage : dans l'éditeur, filtrez la colonne « Date retenue » (menu déroulant) : la plus ancienne et la plus récente doivent tomber dans la période demandée.",
          "Aucune valeur vide : le filtre « (null) » ne doit renvoyer aucune ligne.",
          "Ordre : triez sur le n° de PO : les dates doivent croître, à l'exception des appels sous commande-cadre expliqués.",
        ],
      },
      {
        title: 'Traitez les écarts',
        actions: [
          "Date hors période : retournez à la source (étape 3), n'ajustez pas.",
          "Notez les résultats des contrôles pour la ligne « Dates » des notes de transformation.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — contrôles du 2 juin',
      lines: [
        "Plus ancienne : 16/03/2026. Plus récente : 29/05/2026. Période demandée : 01/03 → 31/05/2026 → conforme.",
        "Valeurs vides : 0. Dates retenues : 17 lignes sur 17.",
        "Ordre : PO-GOG-030 (20/04) apparaît après PO-GOG-031 (09/04) et PO-GOG-032 (14/04) : explication ERP (second appel de la commande-cadre).",
        "Texte pour la ligne « Dates » des notes : « Formats rencontrés : AAAA-MM-JJ, JJ/MM/AAAA, MM/JJ/AAAA. 16 dates converties par format démontré ; 2 ambiguës (PO-GOG-030, PO-GOG-035) confirmées dans l'ERP par J.K. le 02/06. »",
      ],
    },
    result: "Colonne « Date retenue » complète, dans la période, conforme à la numérotation des PO, avec ses exceptions expliquées.",
    pitfall: "Passer directement au calcul des délais sans contrôler les dates : un seul jour/mois inversé peut produire un délai de 160 jours ou de -40 jours, que personne ne remarque dans une moyenne.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — DEVISES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Inventorier les libellés de devise réellement saisis',
    intro: "Le champ devise est souvent saisi de façon non standard : « USD », « US$ », « $ » et « Dollars » désignent la même devise. Vous ne pouvez normaliser que ce que vous avez inventorié : commencez par la liste exacte des libellés présents.",
    steps: [
      {
        title: 'Dans le template',
        actions: [
          "Dans « Données brutes », sélectionnez la colonne F, puis Données > Filtrer : le menu déroulant liste les libellés distincts.",
          "Dans « Données nettoyées », lisez la colonne H (devise brute) puis la colonne I (devise normalisée) : un libellé non reconnu y reste tel quel.",
        ],
      },
      {
        title: 'Dans Power Query',
        actions: [
          "Dupliquez la requête, nommez-la « Controle_devises », sélectionnez la colonne Devise (saisie brute), Transformer > Regrouper par > Compter les lignes.",
          "Triez par nombre décroissant pour voir les variantes rares, souvent les plus dangereuses.",
        ],
      },
    ],
    table: {
      columns: ['Libellé saisi', 'Lignes', 'Devise réelle', 'Reconnu par le template tel quel ?'],
      rows: [
        ['USD', '8', 'Dollar américain', 'Oui'],
        ['US$', '1', 'Dollar américain', 'Oui'],
        ['$', '1', 'Dollar américain', 'Oui'],
        ['Dollars', '1', 'Dollar américain', 'Oui'],
        ['EUR', '2', 'Euro', 'Oui'],
        ['Euro', '1', 'Euro', 'Non : libellé absent de la formule'],
        ['SSP', '4', 'Livre sud-soudanaise', 'Non : le template prévoit CDF, pas SSP'],
      ],
    },
    result: "Inventaire complet : 7 libellés pour 3 devises réelles, dont 2 que le template ne reconnaît pas.",
    pitfall: "Se contenter des trois devises « attendues » : la ligne PO-GOG-033 libellée « Euro » aurait été ignorée sans le moindre message d'erreur, comme vous le verrez à l'étape 5.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Uniformiser les libellés : devise normalisée',
    intro: "Le template propose une colonne « Devise normalisée » (I) qui ramène les variantes à un code unique. Il faut l'adapter à vos devises, puis reproduire la même règle dans Power Query.",
    steps: [
      {
        title: 'Dans le template : adaptez les devises',
        actions: [
          "Ouvrez « Données nettoyées », Ctrl+H. Rechercher : CDF. Remplacer par : SSP. Options > Dans : Feuille ; Regarder dans : Formules. Remplacer tout (colonnes I et J et cellule Q7 sont mises à jour).",
          "Corrigez la colonne I : dans I5, ajoutez les variantes d'euro. Formule obtenue : =SI(H5=\"\";\"(vide)\";SI(OU(H5=\"USD\";H5=\"US$\";H5=\"$\";H5=\"Dollars\");\"USD\";SI(OU(H5=\"EUR\";H5=\"Euro\";H5=\"€\");\"EUR\";SI(H5=\"SSP\";\"SSP\";H5))))",
          "Recopiez la formule de I5 jusqu'à I22.",
        ],
      },
      {
        title: 'Dans Power Query : remplacez les valeurs',
        actions: [
          "Dupliquez la colonne Devise (saisie brute) et nommez-la « Devise normalisée » : le brut reste intact.",
          "Sélectionnez-la, Transformer > Remplacer les valeurs. Valeur à rechercher « US$ », remplacer par « USD ». Développez Options avancées et cochez « Faire correspondre le contenu de la cellule entière ».",
          "Répétez pour « $ » → « USD », « Dollars » → « USD », « Euro » → « EUR », en cochant à chaque fois la correspondance de la cellule entière.",
        ],
      },
    ],
    result: "Dans le template et dans Power Query, trois codes uniques : USD, EUR, SSP.",
    pitfall: "Remplacer « $ » par « USD » sans cocher la correspondance de la cellule entière : « US$ » devient « USUSD » et la ligne n'est plus reconnue. Traitez « US$ » en premier, et cochez toujours l'option.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Documenter les taux de référence de la mission',
    intro: "Le taux de change n'est jamais celui que vous avez trouvé sur un moteur de recherche : c'est le taux de référence officiellement adopté par la mission pour le mois concerné. Utiliser un autre taux crée des écarts avec la finance, qui remontent généralement pendant un audit.",
    steps: [
      {
        title: 'Obtenez le taux officiel auprès de la finance',
        actions: [
          "Demandez par écrit à Joseph K. le taux de référence de la mission, le mois comptable concerné et le document source.",
          "Si la politique de la mission prévoit un taux par mois, demandez-les tous ; sinon, demandez la règle applicable aux rapports de statut.",
        ],
      },
      {
        title: 'Saisissez-le dans le template, à l\'endroit prévu',
        actions: [
          "Dans « Données nettoyées », les cellules Q4:R7 contiennent la table « Taux de référence appliqués (à documenter chaque mois) » : devise en Q, taux en R.",
          "Saisissez R5 (USD) = 1, R6 (EUR) = 1,09, R7 (SSP) = 0,00022.",
          "Remplacez le texte pédagogique de la cellule Q9 par la source : nom du document, mois comptable, date, personne qui l'a fourni.",
        ],
      },
      {
        title: 'Reproduisez-le pour Power Query',
        actions: [
          "Dans votre classeur de reporting, créez une feuille « Taux » avec le tableau tblTaux : Devise | Taux vers USD | Mois comptable | Source.",
          "Chargez-le comme connexion seulement (Données > À partir d'un tableau/d'une plage, puis Fermer et charger dans > Créer uniquement une connexion).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — taux fournis par Joseph K. le 2 juin',
      lines: [
        "Devise de reporting : USD (devise de trésorerie de la mission ; la conversion en EUR pour ECHO relève de la finance).",
        "Taux (valeurs fictives) : 1 EUR = 1,09 USD ; 1 SSP = 0,00022 USD ; USD = 1.",
        "Source : bulletin des taux de référence de la mission, mois comptable de mai 2026, daté du 30/05/2026. Règle de la mission : les rapports de statut du trimestre utilisent le taux du dernier mois clos, pour comparer les achats entre eux ; les montants comptables officiels restent ceux de la finance.",
        "Texte de Q9 : « Taux de référence mission, mois comptable mai 2026, bulletin du 30/05/2026, fourni par J.K. le 02/06/2026. »",
      ],
    },
    result: "Les trois taux sont saisis dans Q5:R7, leur source est inscrite en Q9, la table tblTaux est prête pour Power Query.",
    tip: "Si votre mission convertit chaque achat au taux de son mois, ajoutez la colonne « Mois comptable » à tblTaux et fusionnez sur la devise ET le mois de la date retenue. Quelle que soit la règle, écrivez-la : c'est elle que l'on vous demandera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Calculer le montant converti sans écraser l\'original',
    intro: "Quiconque relit le rapport doit pouvoir vérifier votre conversion : les deux montants, l'original et le converti, restent côte à côte. Ne remplacez jamais la colonne du montant original.",
    steps: [
      {
        title: 'Dans le template',
        actions: [
          "Colonne G « Montant brut » : le montant d'origine, ou « — » si le montant manque.",
          "Colonne J « Taux appliqué » : va chercher le taux dans R5:R7 selon la devise normalisée, ou affiche « TAUX INCONNU ».",
          "Colonne K « Montant converti (USD) » : =SI(OU(ESTTEXTE(J5);ESTTEXTE(G5));\"—\";G5*J5).",
        ],
      },
      {
        title: 'Dans Power Query',
        actions: [
          "Accueil > Fusionner les requêtes > Fusionner : Achats_ERP et tblTaux, sur « Devise normalisée » et « Devise », jointure externe gauche. Développez la colonne « Taux vers USD ».",
          "Ajouter une colonne > Colonne personnalisée, nom « Montant converti (USD) » : if [#\"Montant (saisi brut)\"] = null or [#\"Taux vers USD\"] = null then null else Number.Round([#\"Montant (saisi brut)\"] * [#\"Taux vers USD\"], 2)",
          "Conservez la colonne « Montant (saisi brut) » telle quelle.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — trois conversions à vérifier à la main',
      lines: [
        "PO-GOG-026 : 6 400 000 SSP × 0,00022 = 1 408 USD.",
        "PO-GOG-028 : 17 200 EUR × 1,09 = 18 748 USD.",
        "PO-GOG-033 : 11 900 EUR (libellé « Euro ») × 1,09 = 12 971 USD, une fois « Euro » reconnu.",
      ],
    },
    result: "Chaque ligne porte son montant brut, son taux et son montant converti ; le contrôle à la main sur trois lignes donne les mêmes résultats que le tableau.",
    pitfall: "Remplacer la colonne du montant par le montant converti : à la première question d'un bailleur, vous ne pouvez plus prouver le montant d'origine.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Contrôler la conversion : aucune ligne ne doit disparaître en silence',
    intro: "Dans le template, une ligne dont le taux est inconnu reçoit « — » comme montant converti, et la colonne d'anomalie ne la signale pas : son montant sort du total sans aucun message. C'est le piège le plus coûteux de cette procédure.",
    steps: [
      {
        title: 'Faites les trois contrôles',
        actions: [
          "Comptez les taux inconnus : dans une cellule libre, =NB.SI(J5:J22;\"TAUX INCONNU\"). Le résultat doit être 0.",
          "Recoupez par devise : total brut de chaque devise × son taux = somme des montants convertis correspondants.",
          "Comparez le total converti de la synthèse (E28) avant et après correction : s'il bouge, comprenez pourquoi.",
        ],
      },
      {
        title: 'Corrigez puis recommencez',
        actions: [
          "Pour chaque « TAUX INCONNU », identifiez le libellé en colonne I et ajoutez-le à la formule (étape 2) ou à la table des taux.",
          "Dans Power Query, filtrez la colonne « Taux vers USD » sur null : la liste doit être vide.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Avant correction', 'Après correction'],
      rows: [
        ['Lignes en « TAUX INCONNU »', '5 avec le template tel que fourni (4 lignes SSP + PO-GOG-033 « Euro »)', '0'],
        ['E28 « Montant total converti (USD) — lignes sans anomalie »', '57 098 USD', '74 139 USD'],
        ['Recoupement : 24 400 000 SSP × 0,00022 + 50 050 USD + 29 100 EUR × 1,09', '—', '5 368 + 50 050 + 31 719 = 87 137 USD (toutes lignes, doublon et annulée compris)'],
      ],
    },
    result: "Aucune devise inconnue, conversions recoupées par devise : 17 041 USD qui manquaient au total (4 070 USD de lignes SSP et 12 971 USD de PO-GOG-033) sont réintégrés.",
    pitfall: "Lire « E28 = 57 098 » comme un total fiable parce que la colonne d'anomalies est vide pour les lignes concernées. La colonne d'anomalie ne couvre que quatre cas (date ambiguë, doublon, montant ou statut manquant) : un taux inconnu n'en fait pas partie.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — QUALIFIER LES ANOMALIES ET LIRE LA SYNTHÈSE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Lire la colonne « Anomalie / à vérifier » et ce qu\'elle ne voit pas',
    intro: "La colonne O de « Données nettoyées » rassemble en un texte lisible les anomalies détectées par la formule. Vous devez savoir ce qu'elle couvre, et surtout ce qu'elle ne couvre pas.",
    steps: [
      {
        title: 'Lisez les 4 anomalies détectées',
        actions: [
          "« Date ambigue; » : la colonne E vaut AMBIGU.",
          "« Doublon potentiel; » : la colonne M vaut OUI.",
          "« Montant manquant; » : le montant de « Données brutes » est vide.",
          "« Statut manquant; » : le statut de « Données brutes » est vide. Une ligne sans anomalie affiche « — ».",
        ],
      },
      {
        title: 'Listez ce que la colonne ne signale pas',
        actions: [
          "Un taux inconnu (vu à la procédure 6).",
          "Un statut « Annulé » : la ligne est « propre » mais ne doit pas compter comme montant engagé.",
          "Un doublon de type cas B (même PO, date différente).",
        ],
      },
    ],
    table: {
      columns: ['Ligne du template', 'N° PO', 'Texte de la colonne O', 'Ce qu\'il faut en faire'],
      rows: [
        ['9', 'PO-GOG-030 (06/04/2026)', 'Date ambigue;', 'Date confirmée par l\'ERP : réintégrer au total'],
        ['12 et 13', 'PO-GOG-032', 'Doublon potentiel;', 'Doublon confirmé : compter une seule occurrence'],
        ['16', 'PO-GOG-035 (04/05/2026)', 'Date ambigue;', 'Date confirmée par l\'ERP : réintégrer au total'],
        ['20', 'PO-GOG-039', 'Montant manquant; Statut manquant;', 'Exclure du total, signaler, relancer'],
        ['18', 'PO-GOG-037', '— (aucune anomalie signalée)', 'Statut « Annulé » : à retirer du montant engagé'],
      ],
    },
    result: "5 lignes signalées par la colonne O, 1 ligne « propre » à traiter malgré tout (annulée), 2 cas supplémentaires hors colonne O déjà traités (taux inconnu, cas B).",
    tip: "Après avoir lu la colonne O, faites toujours un second balayage sur les statuts : tout « Annulé » est une ligne à soustraire d'un montant « engagé ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Décider du sort de chaque ligne incomplète ou douteuse',
    intro: "Une ligne incomplète ne se « compte par défaut » ni ne s'efface en silence. Le template exclut du total toute ligne en anomalie, jusqu'à confirmation. Vous gardez ce principe, mais vous écrivez votre décision et sa raison pour chaque ligne.",
    steps: [
      {
        title: 'Appliquez l\'arbre de décision',
        actions: [
          "Le champ manquant est-il le montant ? Alors exclure du total : un montant ne s'estime jamais.",
          "Le champ manquant est-il le statut seul, avec montant connu ? Inclure à part, avec la mention « à vérifier », ou exclure : justifiez votre choix.",
          "La date est-elle ambiguë mais l'ERP la confirme ? Réintégrer et noter la source.",
        ],
      },
      {
        title: 'Interrogez la source avant de trancher',
        actions: [
          "Demandez à l'acheteur ou au key-user le statut réel et le montant du document.",
          "Notez la réponse et la date : une ligne exclue « en attendant confirmation » doit avoir une date de relance.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — PO-GOG-039, médicaments (15 colis)',
      lines: [
        "Constat : montant vide, statut vide, 22/05/2026, centrale d'achat internationale, devise EUR.",
        "Réponse de Joseph K. le 3 juin : le document est resté à l'état de brouillon, non transmis à la centrale ; la proforma est attendue.",
        "Décision : exclu du total engagé (montant inconnu) et exclu du décompte des commandes engagées ; listé en « À vérifier » dans le rapport.",
        "Justification : estimer le montant à partir du PO précédent (22 colis, 11 900 EUR) serait une extrapolation non documentée ; relance de la proforma le 8 juin par l'assistant achats.",
      ],
    },
    result: "Pour chaque ligne en anomalie : une décision (inclure, exclure, inclure sous réserve), sa raison, la source de l'information, une date de relance.",
    pitfall: "Extrapoler un montant manquant « pour avoir un total complet ». Le rapport ne doit jamais contenir un chiffre que vous ne pouvez pas rattacher à un document.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Lire la synthèse E25:E28 et construire la passerelle de totaux',
    intro: "La synthèse du template (lignes 24 à 28) donne quatre chiffres. Aucun n'est le total que vous publierez : la passerelle explique, ligne par ligne, le passage de E28 au total retenu. C'est ce tableau qui répond à « d'où vient ce chiffre ? ».",
    steps: [
      {
        title: 'Lisez les quatre cellules',
        actions: [
          "E25 « Nombre total de lignes brutes » : =NBVAL('Données brutes'!A5:A22).",
          "E26 « Dont doublons exacts détectés » : compte les lignes marquées OUI (les deux lignes d'un couple).",
          "E27 « Dont lignes avec anomalie » : lignes dont la colonne O n'est pas « — ».",
          "E28 « Montant total converti (USD) — lignes sans anomalie uniquement » : somme de K sur les lignes sans anomalie, annulées comprises.",
        ],
      },
      {
        title: 'Construisez la passerelle',
        actions: [
          "Partez de E28 une fois les devises corrigées.",
          "Ajoutez les lignes légitimes écartées par prudence (doublon à une occurrence, dates confirmées).",
          "Retranchez ce qui n'est pas un engagement (commandes annulées).",
          "Le résultat doit être égal au total de votre tableau croisé dynamique de la procédure 9.",
        ],
      },
    ],
    table: {
      columns: ['Ligne de la passerelle', 'USD', 'Explication'],
      rows: [
        ['E28 après correction des devises', '74 139', 'Lignes sans anomalie, annulée comprise, doublon exclu en entier'],
        ['+ PO-GOG-032 (une occurrence)', '+ 3 300', 'Doublon confirmé : les deux lignes étaient exclues, une doit compter'],
        ['+ PO-GOG-030 (06/04, 1 298 USD)', '+ 1 298', 'Date confirmée par l\'ERP le 02/06'],
        ['+ PO-GOG-035 (04/05, 5 100 USD)', '+ 5 100', 'Date confirmée par l\'ERP le 02/06'],
        ['− PO-GOG-037 (annulée)', '− 2 700', 'Une commande annulée n\'est pas un engagement'],
        ['= Montant total engagé retenu', '81 137', '15 lignes, 14 PO (hors PO-GOG-037 annulée et PO-GOG-039 à vérifier)'],
      ],
    },
    example: {
      title: 'Kerowa — synthèse lue le 3 juin',
      lines: [
        "E25 = 18 lignes brutes. E26 = 2 lignes de doublon (1 couple). E27 = 5 lignes avec anomalie. E28 = 74 139 USD après correction des devises.",
        "Après dédoublonnage : 17 lignes, 16 PO distincts.",
      ],
    },
    result: "Chaque dollar du total publié est expliqué : 81 137 USD = 74 139 + 3 300 + 1 298 + 5 100 − 2 700.",
    pitfall: "Publier E28 tel quel : ici, 74 139 USD comprenait une commande annulée de 2 700 USD et excluait 9 698 USD de commandes légitimes (3 300 + 1 298 + 5 100).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Transformer chaque anomalie ouverte en action datée',
    intro: "Une anomalie qui reste dans le rapport sans suite devient une habitude. Vous convertissez chaque point ouvert en action avec un responsable et une échéance : c'est ce que votre coordinatrice présentera au bailleur.",
    steps: [
      {
        title: 'Construisez le plan d\'action',
        actions: [
          "Créez un tableau : Anomalie | Impact | Action | Responsable | Échéance | Statut.",
          "Une ligne par anomalie encore ouverte, une ligne par correction à effectuer dans l'ERP.",
          "Fixez des échéances avant la réunion du vendredi et avant le rapport ECHO du 15 juin.",
        ],
      },
      {
        title: 'Faites-le valider',
        actions: [
          "Envoyez le tableau à Grace M. avant la relecture du rapport.",
          "Reportez-le dans la section 4 du rapport mensuel (procédure 9).",
        ],
      },
    ],
    table: {
      columns: ['Anomalie', 'Action', 'Responsable', 'Échéance', 'Statut'],
      rows: [
        ['PO-GOG-032 en double dans l\'ERP (3 300 USD d\'engagement bloqués)', 'Faire annuler le second document', 'Joseph K. avec le siège', '05/06/2026', 'Demandé le 02/06'],
        ['PO-GOG-039 sans montant ni statut (brouillon)', 'Obtenir la proforma, compléter ou annuler le PO', 'Assistant achats', '08/06/2026', 'Ouvert'],
        ['Libellés de devise libres (USD, US$, $, Dollars, Euro)', 'Demander au siège un champ devise à liste fermée', 'Joseph K. avec le key-user siège', '30/06/2026', 'Demandé'],
        ['Dates saisies en formats mélangés', 'Rappeler le format JJ/MM/AAAA aux saisissants', 'Vous, avec Peter A.', '05/06/2026', 'À faire'],
      ],
    },
    result: "Livrable L4 terminé : classeur de nettoyage complété (Données brutes, Données nettoyées, taux Q:R, synthèse E25:E28), passerelle de totaux et plan d'action daté.",
    tip: "Réclamer la correction à la source est ce qui rend le rapport du mois prochain plus propre que celui-ci : chaque anomalie corrigée dans l'ERP est une règle de nettoyage de moins à maintenir.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 8 — DOCUMENTER LES TRANSFORMATIONS
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 4',
    title: 'Nommer chaque étape dans Power Query et conserver le code',
    intro: "Le panneau « Étapes appliquées » enregistre automatiquement chaque action : c'est déjà une documentation technique, à condition que chaque étape ait un nom lisible. Ce n'est cependant pas suffisant pour votre équipe : les notes en langage clair viennent ensuite.",
    steps: [
      {
        title: 'Renommez les étapes',
        actions: [
          "Dans l'éditeur Power Query, clic droit sur chaque étape > Renommer : donnez un nom qui dit ce que l'étape fait.",
          "Clic droit > Propriétés : ajoutez une description d'une phrase pour les étapes qui portent une décision (doublons, dates, devises).",
        ],
      },
      {
        title: 'Conservez le code',
        actions: [
          "Accueil > Éditeur avancé : copiez tout le code M dans un fichier « Pipeline_M_Achats_ERP.txt » rangé à côté du classeur.",
          "Notez dans le fichier la date et la version : « v1 — 03/06/2026 ».",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Nom de l\'étape', 'Ce qu\'elle fait'],
      rows: [
        ['1', 'Source brute CSV', 'Lit le fichier d\'export sans le modifier'],
        ['2', 'Montant en nombre', 'Type nombre décimal sur le seul montant'],
        ['3', 'Textes nettoyés', 'Supprime les espaces parasites'],
        ['4', 'Doublons exacts supprimés', 'Critère PO + article + date + montant + devise'],
        ['5', 'Format de date détecté', 'ISO, JJ/MM/AAAA, MM/JJ/AAAA ou AMBIGU'],
        ['6', 'Date normalisée', 'Date explicite selon le format détecté'],
        ['7', 'Corrections de date fusionnées', 'Applique les dates confirmées par l\'ERP'],
        ['8', 'Devise normalisée', 'Ramène US$, $, Dollars, Euro à USD ou EUR'],
        ['9', 'Taux fusionné', 'Récupère le taux de la table tblTaux'],
        ['10', 'Montant converti USD', 'Montant brut × taux, brut conservé'],
        ['11', 'Statut vide à vérifier', 'Remplace un statut vide par « À vérifier »'],
      ],
    },
    result: "Un pipeline lisible de 11 étapes, nommées, commentées, dont le code est archivé.",
    tip: "Un nom comme « Étape 4 » ne dit rien à votre remplaçant. Préférez « Doublons exacts supprimés » : l'objectif est qu'il comprenne sans vous poser la question.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 4',
    title: 'Rédiger les lignes « Source », « Doublons » et « Dates » des notes',
    intro: "L'onglet « Notes de transformation » du template compte six lignes (5 à 10) : Étape en colonne A, texte en colonne B. Pour chaque ligne, le template donne le principe ; vous y ajoutez les faits de ce cycle, sans effacer la règle.",
    steps: [
      {
        title: 'Complétez la colonne B',
        actions: [
          "Ligne 5 « 1. Source » : collez le texte préparé à la procédure 2 (fichier, date d'export, période, périmètre, contrôle).",
          "Ligne 6 « 2. Doublons » : nombre de doublons, critère, décision pour chaque cas. Attention : le texte du template renvoie à la cellule E23 pour le nombre de doublons ; dans le fichier la valeur se trouve en E26 : corrigez la référence.",
          "Ligne 7 « 3. Dates » : formats rencontrés, nombre de dates ambiguës, comment elles ont été levées et par qui.",
        ],
      },
      {
        title: 'Datez et signez',
        actions: [
          "Finissez chaque texte par vos initiales et la date de rédaction.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — lignes 5 à 7 de la colonne B',
      lines: [
        "5 : « Fichier SOURCE_export_ERP_achats_Gogrial_2026-06-01_1042.csv, exporté par J.K. le 01/06/2026, non modifié. Période 01/03–31/05/2026, base de Gogrial. 18 lignes = 18 à l'écran ERP ; totaux par devise concordants. Premier export (13 lignes, filtres par défaut) rejeté. SCM, 03/06. »",
        "6 : « Critère d'unicité : N° PO + Article + Date + Montant + Devise. Doublons détectés : 2 lignes (voir E26), 1 couple : PO-GOG-032, double saisie du 14/04 confirmée dans l'ERP par J.K. (02/06) ; 1 ligne supprimée, annulation demandée à la source. PO-GOG-030 : 2 lignes conservées, appels distincts d'une commande-cadre. SCM, 03/06. »",
        "7 : « Formats : AAAA-MM-JJ (6 lignes), JJ/MM/AAAA (8), MM/JJ/AAAA (2), ambiguës (2 : PO-GOG-030 et PO-GOG-035), levées dans l'ERP par J.K. le 02/06 et consignées dans la feuille Corrections. SCM, 03/06. »",
      ],
    },
    result: "Les trois premières lignes sont rédigées avec des faits vérifiables, datés, attribuables.",
    pitfall: "Laisser le texte générique du template tel quel (« Nombre de doublons exacts détectés ce mois : voir cellule E23 ») : la note ne décrit alors aucun fait de votre cycle et pointe la mauvaise cellule.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 4',
    title: 'Rédiger les lignes « Devises », « Lignes incomplètes » et « Reproductibilité »',
    intro: "Les trois dernières lignes décrivent ce qui fausse le plus souvent les chiffres : les devises, les lignes exclues, et la capacité d'un collègue à relancer le travail. Elles doivent rester courtes et précises.",
    steps: [
      {
        title: 'Complétez les lignes 8 à 10',
        actions: [
          "Ligne 8 « 4. Devises » : devise de reporting, libellés normalisés, taux, source et mois comptable, où se trouvent les taux (colonnes Q:R) et la règle appliquée.",
          "Ligne 9 « 5. Lignes incomplètes » : chaque ligne exclue, la raison, l'action de relance et la date.",
          "Ligne 10 « 6. Reproductibilité » : où se trouvent le fichier source, le classeur de reporting, la requête, et la marche à suivre (remplacer la source, Actualiser tout, contrôles).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — lignes 8 à 10 de la colonne B',
      lines: [
        "8 : « Devise de reporting : USD. Libellés USD, US$, $, Dollars ramenés à USD ; EUR et Euro à EUR ; SSP inchangé. Taux : 1 EUR = 1,09 ; 1 SSP = 0,00022 (bulletin de mai 2026 du 30/05, fourni par J.K.), cellules R5:R7 ; règle : taux du dernier mois clos pour tout le trimestre. Montant original conservé en colonne G. »",
        "9 : « 1 ligne exclue des totaux : PO-GOG-039 (montant et statut vides, brouillon non transmis). Relance de la proforma le 08/06 par l'assistant achats. Aucune ligne estimée. »",
        "10 : « Source dans SOURCES, requête Achats_ERP dans L3_Pipeline_ERP_Kerowa.xlsx. Mois suivant : remplacer le fichier, Données > Actualiser tout, puis contrôles de la procédure 10 (lignes, taux inconnus, dates vides). »",
      ],
    },
    result: "Les six lignes sont rédigées : un lecteur extérieur sait d'où viennent les chiffres, ce qui a été exclu et comment refaire.",
    tip: "Écrivez chaque ligne comme si le lecteur n'avait jamais vu votre ordinateur : un nom de fichier complet, un chemin, une date, une personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 4',
    title: 'Faire relire le pipeline par un collègue',
    intro: "Parce que Power Query fonctionne en silence une fois configuré, il est tentant de ne plus jamais réexaminer sa propre logique. Une paire d'yeux neuve repère ce que vous ne voyez plus : un format de date oublié, une devise non prévue, une note incompréhensible.",
    steps: [
      {
        title: 'Organisez la relecture',
        actions: [
          "Choisissez quelqu'un qui n'a pas participé : Peter A. ou l'assistant achats.",
          "Donnez-lui uniquement le fichier source, le classeur et l'onglet Notes de transformation, pas votre explication orale.",
          "Demandez-lui de retrouver en 30 minutes le total engagé de 81 137 USD à partir de la passerelle.",
        ],
      },
      {
        title: 'Traitez les remarques et tracez la relecture',
        actions: [
          "Notez chaque point incompris ou introuvable, corrigez la note ou le pipeline.",
          "Sous le tableau des notes, en A12, inscrivez : « Relu par [nom], le [date], remarques traitées ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — relecture du 4 juin par Peter A.',
      lines: [
        "Remarque 1 : il ne trouve pas la feuille Corrections. → ajout du nom de la feuille dans la ligne 7 des notes.",
        "Remarque 2 : « US$ » dans la colonne I du template ne se transforme pas comme prévu. → il avait ouvert l'ancienne copie du template : version datée dans le nom du fichier.",
        "Il retrouve 81 137 USD en 25 minutes grâce à la passerelle.",
        "Trace : « Relu par Peter A., le 04/06/2026, remarques traitées ».",
      ],
    },
    result: "Livrable L5 terminé : six lignes de notes relues par un tiers, qui a refait le calcul seul.",
    pitfall: "Faire relire par la personne qui vous a aidé à nettoyer : elle connaît déjà les réponses et ne détectera pas ce qui manque à la documentation.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 9 — CHIFFRES CLÉS ET RAPPORT MENSUEL
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 5',
    title: 'Charger le résultat dans un tableau structuré',
    intro: "Une fois les données propres, on les charge dans une feuille Excel sous forme de tableau structuré. C'est sur cette base propre, jamais sur les données brutes, que vous construisez tableaux croisés et rapport.",
    steps: [
      {
        title: 'Choisissez les colonnes à garder',
        actions: [
          "Dans l'éditeur, gardez : N° PO, Fournisseur, Article, Date retenue, Montant (saisi brut), Devise normalisée, Montant converti (USD), Statut.",
          "Supprimez les colonnes techniques (Format détecté, Taux fusionné, colonnes intermédiaires) : elles restent dans les étapes, mais pas dans le tableau final.",
          "Remplacez les statuts vides par « À vérifier » (Transformer > Remplacer les valeurs, null → À vérifier).",
        ],
      },
      {
        title: 'Chargez',
        actions: [
          "Accueil > Fermer et charger dans… > Tableau > Nouvelle feuille de calcul.",
          "Renommez le tableau « tblAchats » (Création de tableau > Nom du tableau).",
          "Vérifiez : 17 lignes, aucune cellule d'erreur, une ligne « À vérifier ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — tblAchats, quatre lignes',
      lines: [
        "PO-GOG-026 | Grossiste Wau — marché central | Farine de maïs et haricots (2,1 t) | 16/03/2026 | 6 400 000 | SSP | 1 408 | Livré",
        "PO-GOG-033 | Centrale d'achat internationale | Médicaments essentiels (22 colis) | 21/04/2026 | 11 900 | EUR | 12 971 | En cours",
        "PO-GOG-037 | Informatique Juba | Ordinateurs portables (3 unités) | 12/05/2026 | 2 700 | USD | 2 700 | Annulé",
        "PO-GOG-039 | Centrale d'achat internationale | Médicaments essentiels (15 colis) | 22/05/2026 | (vide) | EUR | (vide) | À vérifier",
      ],
    },
    result: "Un tableau propre de 17 lignes, nommé, prêt à alimenter les chiffres du rapport.",
    pitfall: "Construire les tableaux croisés sur l'onglet de données brutes « parce qu'il était déjà là » : vous retomberiez sur les doublons, les devises mélangées et les dates ambiguës.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 5',
    title: 'Construire le nombre de commandes, la répartition par statut et le montant engagé',
    intro: "Trois chiffres répondent à la question de la coordination : combien de commandes, dans quels états, pour quel montant. Un tableau croisé dynamique les donne en une minute, à condition de ne pas compter ce qui n'est pas un engagement.",
    steps: [
      {
        title: 'Créez le tableau croisé',
        actions: [
          "Cliquez dans tblAchats, Insertion > Tableau croisé dynamique > Nouvelle feuille ; cochez « Ajouter ces données au modèle de données ».",
          "Lignes : Statut. Valeurs : Nombre de N° PO (nombre), Nombre distinct de N° PO (clic droit > Synthèse des valeurs par > Nombre distinct), Somme de Montant converti (USD).",
        ],
      },
      {
        title: 'Lisez les chiffres',
        actions: [
          "Montant total engagé = Livré + En cours. Annulé et À vérifier n'en font pas partie.",
          "Nombre total de commandes = Nombre distinct de N° PO tous statuts confondus.",
          "Comparez le total engagé à la passerelle de la procédure 7 : ils doivent être identiques.",
        ],
      },
    ],
    table: {
      columns: ['Statut', 'Lignes', 'PO distincts', 'Montant converti (USD)'],
      rows: [
        ['Livré', '10', '9', '55 952'],
        ['En cours', '5', '5', '25 185'],
        ['Annulé', '1', '1', '2 700 (non engagé)'],
        ['À vérifier', '1', '1', 'montant inconnu'],
        ['Total engagé (Livré + En cours)', '15', '14', '81 137'],
        ['Total des commandes de la période', '17', '16', '—'],
      ],
    },
    result: "Chiffres clés : 16 PO (17 lignes), dont 14 engagées pour 81 137 USD, 1 annulée, 1 à vérifier ; le total engagé égale la passerelle.",
    pitfall: "Compter lignes et PO comme la même chose : PO-GOG-030 compte pour deux lignes mais un seul PO. Écrivez toujours l'unité (lignes ou PO).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 5',
    title: 'Calculer le délai moyen commande → livraison avec un second export',
    intro: "Le premier export ne contient pas la date de réception : le délai moyen n'est donc pas calculable avec lui. Vous demandez un second export, celui des réceptions, et vous le rapprochez des commandes. Sinon, écrivez dans le rapport « non calculé : date de réception absente de l'export ».",
    steps: [
      {
        title: 'Obtenez les réceptions',
        actions: [
          "Demandez à Joseph K. l'export des réceptions de la période (SAP : MB51 ou historique des PO) : N° de PO, date de commande, date de réception.",
          "Contrôlez-le comme le premier (procédure 2, étape 4) : 10 réceptions pour 10 lignes « Livré ».",
        ],
      },
      {
        title: 'Calculez dans Excel ou Power Query',
        actions: [
          "Fusionnez sur N° PO et Date retenue (PO-GOG-030 porte deux appels, donc deux réceptions).",
          "Ajoutez la colonne « Délai (j) » = Date de réception − Date de commande.",
          "Moyenne : =MOYENNE(tblDelais[Délai (j)]). Calculez aussi la médiane (=MEDIANE) pour détecter l'effet des extrêmes.",
        ],
      },
    ],
    table: {
      columns: ['N° PO', 'Date de commande', 'Date de réception', 'Délai (j)'],
      rows: [
        ['PO-GOG-026', '16/03/2026', '23/03/2026', '7'],
        ['PO-GOG-027', '19/03/2026', '28/03/2026', '9'],
        ['PO-GOG-028', '27/03/2026', '21/04/2026', '25'],
        ['PO-GOG-029', '30/03/2026', '01/04/2026', '2'],
        ['PO-GOG-030 (appel 1)', '06/04/2026', '13/04/2026', '7'],
        ['PO-GOG-030 (appel 2)', '20/04/2026', '27/04/2026', '7'],
        ['PO-GOG-031', '09/04/2026', '05/05/2026', '26'],
        ['PO-GOG-032', '14/04/2026', '15/04/2026', '1'],
        ['PO-GOG-036', '07/05/2026', '19/05/2026', '12'],
        ['PO-GOG-038', '20/05/2026', '22/05/2026', '2'],
      ],
    },
    result: "Délai moyen : 98 jours / 10 réceptions = 9,8 jours ; médiane : 7 jours. Les deux achats importés (médicaments 25 j, réfrigérateurs solaires 26 j) tirent la moyenne.",
    tip: "Donnez toujours la médiane avec la moyenne : « 9,8 jours en moyenne » cache que 8 réceptions sur 10 sont en 12 jours ou moins. Le PO-GOG-031 (26 jours pour un délai contractuel de 21) mérite une ligne dans la section anomalies.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 4 sur 5',
    title: 'Remplir les sections 1 et 2 du rapport mensuel',
    intro: "Le gabarit gabarit-rapport-erp-mensuel.docx tient en une à deux pages : un bandeau, une phrase d'objectif, puis cinq sections numérotées. La section 1 dit d'où viennent les chiffres ; la section 2 les donne, dans un tableau de quatre cases.",
    steps: [
      {
        title: 'Personnalisez le bandeau',
        actions: [
          "Ouvrez le gabarit, enregistrez-le sous « L6_Rapport_mensuel_ERP_Kerowa_2026-05.docx ».",
          "Dans le bandeau, remplacez la mention d'exemple de la seconde ligne par : « Kerowa Santé — base de Gogrial — achats du 01/03 au 31/05/2026 ».",
        ],
      },
      {
        title: 'Section 1 — Source et période des données',
        actions: [
          "Première ligne : ERP source, nom du fichier d'export, date et heure d'export.",
          "Seconde ligne : période couverte (mois comptable) et périmètre (base, projet, ligne bailleur).",
        ],
      },
      {
        title: 'Section 2 — Chiffres clés extraits (tableau de 4 cases)',
        actions: [
          "Case « Nombre total de commandes (PO) sur la période » ; case « Montant total engagé (devise de reporting unique) ».",
          "Case « Répartition par statut : livrées / en cours / annulées » ; case « Délai moyen commande → livraison ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — sections 1 et 2 remplies',
      lines: [
        "1. ERP du siège (type SAP) — SOURCE_export_ERP_achats_Gogrial_2026-06-01_1042.csv — exporté le 01/06/2026 à 10 h 42 par J.K. Période : commandes du 01/03 au 31/05/2026 ; base de Gogrial, projet ECHO, tous statuts.",
        "Nombre de PO : 16 (17 lignes), dont 14 engagées, 1 annulée, 1 à vérifier.",
        "Montant total engagé : 81 137 USD (taux de référence mission, mai 2026 ; passerelle en annexe).",
        "Répartition : 9 PO livrés (55 952 USD), 5 en cours (25 185 USD), 1 annulé (2 700 USD, non engagé), 1 à vérifier.",
        "Délai moyen commande → livraison : 9,8 jours (médiane 7) sur 10 réceptions ; achats importés : 25 et 26 jours.",
      ],
    },
    result: "Les sections 1 et 2 permettent à un lecteur pressé de connaître la source, la période et les cinq chiffres essentiels.",
    pitfall: "Écrire un chiffre sans son unité ni sa devise (« 81 137 ») : le lecteur ne sait pas s'il s'agit de dollars, d'euros ou de livres sud-soudanaises, ni de lignes ou de PO.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 5 sur 5',
    title: 'Remplir les sections 3, 4 et 5 : qualité, anomalies, validation',
    intro: "Les trois dernières sections font la différence entre un rapport « propre » et un rapport fiable : elles disent ce qui a été corrigé, ce qui reste incertain et qui valide. Signaler « 1 ligne en attente de confirmation, non comptabilisée » est plus professionnel et plus protecteur qu'un chiffre rond présenté sans réserve.",
    steps: [
      {
        title: 'Section 3 — Nettoyage et qualité de la donnée',
        actions: [
          "Doublons détectés et traités : nombre et critère d'unicité.",
          "Anomalies de format corrigées : dates, devises, méthode appliquée (pipeline Power Query).",
          "Lignes exclues du rapport en attente de vérification : nombre et raison.",
        ],
      },
      {
        title: 'Section 4 — Anomalies signalées à la coordination',
        actions: [
          "Un point par écart nécessitant une décision ou une vérification humaine : fait, impact, action, échéance. Reprenez le plan d'action de la procédure 7.",
        ],
      },
      {
        title: 'Section 5 — Validation',
        actions: [
          "Tableau : « Rédigé par (nom, fonction) » et date ; « Validé par (coordinateur) » et date de validation.",
          "Remplissez la partie « Rédigé par » ; la validation reste vide jusqu'à la relecture de Grace M.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — sections 3 à 5',
      lines: [
        "3. Doublons : 1 ligne supprimée (PO-GOG-032, critère PO + article + date + montant + devise). Formats : 16 dates converties, 2 ambiguës levées dans l'ERP ; libellés de devise ramenés à USD, EUR, SSP. Exclu : PO-GOG-039 (montant et statut vides).",
        "4. a) PO-GOG-032 en double dans l'ERP : 3 300 USD d'engagement bloqués, annulation demandée, échéance 05/06. b) PO-GOG-039 : brouillon sans montant, proforma attendue le 08/06. c) PO-GOG-031 livré en 26 jours pour 21 contractuels : explication à demander au fournisseur.",
        "5. Rédigé par : Supply Chain Manager, 04/06/2026. Validé par : Grace M., coordinatrice pays, le 05/06/2026 à 9 h (après relecture).",
      ],
    },
    result: "Livrable L6 terminé : rapport de deux pages avec chiffres, qualité de la donnée, anomalies datées et validation.",
    pitfall: "Envoyer le rapport au bailleur sans la validation de la coordinatrice : c'est elle qui engage l'organisation. Le rapport circule avec la date de validation inscrite.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 10 — ACTUALISER LE MOIS SUIVANT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 1 sur 3',
    title: 'Préparer l\'actualisation : nouvelle source, mêmes règles',
    intro: "C'est l'avantage décisif de Power Query : le mois suivant, vous n'avez pas à refaire les étapes précédentes. Mais « actualiser » n'est pas « cliquer » : on vérifie d'abord que le nouveau fichier ressemble à l'ancien.",
    steps: [
      {
        title: 'Obtenez et contrôlez le nouvel export',
        actions: [
          "Demandez l'export avec la même fiche de demande (mêmes colonnes, même mise en page « Reporting SCM »), période adaptée.",
          "Archivez-le dans SOURCES avec son nom daté, en lecture seule, puis refaites les 5 contrôles d'exhaustivité (procédure 2, étape 4).",
        ],
      },
      {
        title: 'Vérifiez la compatibilité du fichier',
        actions: [
          "Les en-têtes de colonnes sont identiques à l'ancien fichier (un en-tête renommé fait échouer l'étape qui le cite).",
          "Le séparateur et l'encodage sont inchangés.",
        ],
      },
      {
        title: 'Pointez la requête vers le nouveau fichier',
        actions: [
          "Données > Obtenir des données > Paramètres de la source de données > Changer la source > sélectionnez le nouveau CSV. Les étapes ne bougent pas.",
        ],
      },
    ],
    result: "Nouvelle source archivée, contrôlée et connectée, sans modification du pipeline.",
    pitfall: "Écraser l'ancien fichier source avec le nouveau en gardant le même nom : vous perdez la preuve du rapport précédent. Un fichier par export, daté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 2 sur 3',
    title: 'Actualiser, puis contrôler ce que Power Query a fait en silence',
    intro: "Une fois configuré, Power Query ne vous prévient pas qu'un nouveau libellé de devise ou qu'un nouveau format de date est apparu. Les contrôles d'actualisation sont ce qui garde le pipeline honnête.",
    steps: [
      {
        title: 'Actualisez',
        actions: [
          "Cliquez sur Données > Actualiser tout. Attendez la fin du chargement (la barre d'état indique la fin).",
          "Ouvrez tblAchats : comparez le nombre de lignes à celui de l'export moins les doublons supprimés.",
        ],
      },
      {
        title: 'Faites les 4 contrôles de robustesse',
        actions: [
          "Taux manquants : filtrez « Taux vers USD » sur null ; la liste doit être vide.",
          "Dates vides : filtrez « Date retenue » sur null ; chaque ligne doit être expliquée ou confirmée.",
          "Statuts : listez les valeurs distinctes ; un nouveau libellé signale une modification de l'ERP.",
          "Montants vides : listez-les, comme la première fois.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — test de robustesse du vendredi 5 juin',
      lines: [
        "Test : copie du fichier d'export dans un dossier d'essai, ajout volontaire de deux lignes : une avec le libellé « Euros », une avec la date « 07/06/2026 ».",
        "Après Actualiser tout : 19 lignes chargées. Taux null : 1 ligne (« Euros »). Date retenue null : 1 ligne (07/06/2026, ambiguë).",
        "Réaction : « Euros » ajouté à la table de remplacement ; la date ambiguë est renvoyée à la source. Le pipeline a signalé les deux, rien n'est passé en silence.",
        "Le dossier d'essai est supprimé, le pipeline réel reste inchangé.",
      ],
    },
    result: "Pipeline actualisé, quatre contrôles passés, deux anomalies d'essai détectées par les contrôles, pas par chance.",
    tip: "Faites ce test de robustesse une fois à la création du pipeline, puis à chaque trimestre : il vous apprend où votre pipeline est aveugle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 3 sur 3',
    title: 'Écrire la procédure mensuelle et organiser la relecture trimestrielle',
    intro: "Un pipeline que seule une personne sait relancer n'est pas un pipeline d'équipe. Vous écrivez une procédure de 8 lignes, vous la faites tester par un collègue et vous fixez une relecture périodique des règles.",
    steps: [
      {
        title: 'Écrivez la procédure mensuelle (L7)',
        actions: [
          "Créez « L7_Procedure_mensuelle_reporting_ERP.docx » : une page, 8 étapes numérotées, chacune avec le nom de fichier, le bouton ou la formule, et le contrôle attendu.",
          "Ajoutez en tête : qui, quand, où sont les fichiers, qui valide.",
        ],
      },
      {
        title: 'Faites-la tester et planifiez la relecture',
        actions: [
          "Demandez à un collègue de suivre la procédure seul, sur le mois suivant ou sur le fichier d'essai.",
          "Fixez une relecture trimestrielle des règles : nouveaux formats de date, nouvelles devises, nouveaux statuts, nouvelles colonnes.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — procédure mensuelle en 8 étapes',
      lines: [
        "1. Envoyer la fiche de demande d'export à J.K. (le 1er du mois). 2. Archiver le CSV en lecture seule, contrôler les 5 points d'exhaustivité.",
        "3. Changer la source de la requête Achats_ERP. 4. Actualiser tout.",
        "5. Contrôler : taux null, dates null, nouveaux statuts, montants vides. 6. Relever E25:E28 du template et refaire la passerelle.",
        "7. Compléter les 6 lignes des notes et le rapport .docx. 8. Faire valider par la coordinatrice pays avant envoi.",
        "Relecture trimestrielle : prochaine le 31/08/2026, avec Peter A. ou l'assistant achats.",
      ],
    },
    result: "Livrable L7 terminé : procédure d'une page, testée par un collègue, avec une relecture trimestrielle planifiée.",
    pitfall: "Écrire la procédure sans la faire tester : une étape évidente pour vous (« changer la source ») est invisible pour un autre.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU DE BOUT EN BOUT — BUNIA (CAS SOURCE DU MODULE)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Le rapport de fin de mois, base de Bunia',
    scenario: "Vous êtes Supply Chain Officer pour une ONG internationale (fictive) sur une base à Bunia, en RDC. Le 28 avril 2025, votre coordinateur logistique vous demande le rapport mensuel de statut des achats, à présenter en réunion de coordination pays dans 3 jours. Vous exportez de l'ERP un CSV de 140 lignes couvrant tous les achats depuis le début du projet. Dès l'ouverture : des lignes semblent identiques (double saisie lors d'une coupure internet, ou commandes réellement répétées), la colonne date mélange deux formats, les montants sont en USD, US$, CDF et EUR (un fournisseur de Kampala facture parfois en devise tierce), et des lignes n'ont ni date de réception ni statut. Le template reprend ce cas en 18 lignes qui concentrent tous les défauts (la version à 140 lignes comptait trois lignes incomplètes ; le template en garde une, PO-2025-024). Vous le résolvez ici de bout en bout.",
    steps: [
      {
        title: 'Contrôler l\'exhaustivité avant tout nettoyage',
        body: "Comparez le fichier à l'écran de l'ERP : nombre de lignes, plage de dates, statuts, totaux par devise (procédure 2). Un rapport nettoyé sur un export incomplet reste faux.",
        result: "Export confirmé complet : 140 lignes à l'écran, 140 au fichier ; dans le template : 18 lignes à traiter.",
      },
      {
        title: 'Charger les lignes dans « Données brutes » sans toucher la source',
        body: "Les dates sont en texte, le fichier d'origine est archivé en lecture seule ; l'onglet Données brutes contient déjà les 18 lignes (A5:G22) et sa note pédagogique en A24.",
        result: "18 lignes brutes, 7 colonnes : N° PO, Fournisseur, Article, Date, Montant, Devise, Statut.",
      },
      {
        title: 'Traiter les doublons sur le critère PO + article + date + montant + devise',
        body: "Lisez L et M, puis décidez cas par cas (procédure 4).",
        result: "PO-2025-014 (2 100 USD, 18/03/2025) : doublon exact, 1 ligne supprimée sous réserve de confirmation dans l'ERP. PO-2025-018 (890 USD) : deux lignes à dates différentes, conservées, vérifier dans l'ERP.",
      },
      {
        title: 'Harmoniser les dates',
        body: "Lisez la colonne E : 5 dates ISO, 7 au format JJ/MM/AAAA, 1 au format MM/JJ/AAAA (« 03/22/2025 »), 5 ambiguës (procédure 5).",
        result: "13 dates normalisées ; 5 ambiguës non devinées : PO-2025-011, 018 (ligne du 05/04), 021, 022 et 024.",
      },
      {
        title: 'Normaliser les devises et convertir',
        body: "6 libellés (USD, US$, $, Dollars, EUR, CDF) pour 3 devises ; taux fictifs du template : EUR 1,08 ; CDF 0,00036 ; USD 1 (procédure 6).",
        result: "Aucune devise inconnue. Exemple : 980 000 CDF × 0,00036 = 352,80 USD ; 1 500 EUR × 1,08 = 1 620 USD.",
      },
      {
        title: 'Traiter la ligne incomplète',
        body: "PO-2025-024 : montant et statut vides (procédure 7).",
        result: "Exclue des totaux en attendant confirmation, signalée dans la section anomalies ; aucun montant estimé.",
      },
      {
        title: 'Lire la synthèse et construire la passerelle',
        body: "E25 = 18 ; E26 = 2 ; E27 = 7 ; E28 = 18 377,60 USD.",
        result: "18 377,60 + 2 100 (PO-014 une fois) − 4 200 (PO-023 annulée) = 16 277,60 USD confirmés ; + 2 818,40 USD sous réserve de date = 19 096,00 USD engagés.",
      },
      {
        title: 'Documenter puis rédiger le rapport',
        body: "Six lignes de notes, puis le gabarit .docx (procédures 8 et 9).",
        result: "Rapport de deux pages : 16 PO, 19 096 USD engagés, 5 anomalies listées, validation en attente du coordinateur.",
      },
    ],
    example: {
      title: 'Ce que vous remettez au coordinateur le 30 avril',
      lines: [
        "Le classeur de nettoyage complété, ses notes de transformation, la passerelle de totaux et le rapport de deux pages.",
        "Une phrase d'accompagnement : « Total engagé 19 096 USD, dont 2 818 USD sous réserve de confirmation de dates ; 1 commande à vérifier ; délai moyen non calculable avec cet export. »",
      ],
    },
    result: "Le rapport est présenté avec ses limites : le coordinateur sait ce qui est certain, ce qui est sous réserve, ce qui est exclu, et pourquoi.",
    pitfall: "Présenter 18 377,60 USD « parce que c'est le chiffre du template ». Ce nombre comprend une commande annulée de 4 200 USD, exclut les deux lignes de PO-014 (2 100 USD à compter une fois) et laisse de côté quatre lignes à montant certain mais à date ambiguë.",
  },
  {
    type: 'comparison-table',
    title: 'Cas Bunia — les 18 lignes après nettoyage',
    columns: ['N° PO', 'Date brute (format détecté)', 'Date normalisée', 'Devise brute → normalisée', 'Montant converti (USD)', 'Anomalie (colonne O)'],
    rows: [
      ['PO-2025-011', '12/03/2025 (AMBIGU)', '—', 'USD → USD', '1 250,00', 'Date ambigue;'],
      ['PO-2025-012', '2025-03-14 (ISO)', '14/03/2025', 'US$ → USD', '3 400,00', '—'],
      ['PO-2025-013', '15/03/2025 (JJ/MM)', '15/03/2025', 'CDF → CDF', '352,80', '—'],
      ['PO-2025-014', '18/03/2025 (JJ/MM)', '18/03/2025', 'USD → USD', '2 100,00', 'Doublon potentiel;'],
      ['PO-2025-014', '18/03/2025 (JJ/MM)', '18/03/2025', 'USD → USD', '2 100,00', 'Doublon potentiel;'],
      ['PO-2025-015', '20/03/2025 (JJ/MM)', '20/03/2025', 'EUR → EUR', '1 620,00', '—'],
      ['PO-2025-016', '03/22/2025 (MM/JJ)', '22/03/2025', 'Dollars → USD', '2 200,00', '—'],
      ['PO-2025-017', '2025-03-25 (ISO)', '25/03/2025', 'CDF → CDF', '219,60', '—'],
      ['PO-2025-018', '05/04/2025 (AMBIGU)', '—', '$ → USD', '890,00', 'Date ambigue;'],
      ['PO-2025-018', '14/04/2025 (JJ/MM)', '14/04/2025', '$ → USD', '890,00', '— (même PO, date différente)'],
      ['PO-2025-019', '27/03/2025 (JJ/MM)', '27/03/2025', 'EUR → EUR', '1 620,00', '—'],
      ['PO-2025-020', '2025-04-02 (ISO)', '02/04/2025', 'USD → USD', '1 780,00', '—'],
      ['PO-2025-021', '05/04/2025 (AMBIGU)', '—', 'CDF → CDF', '338,40', 'Date ambigue;'],
      ['PO-2025-022', '09/04/2025 (AMBIGU)', '—', 'US$ → USD', '340,00', 'Date ambigue;'],
      ['PO-2025-023', '2025-04-11 (ISO)', '11/04/2025', 'USD → USD', '4 200,00', '— (statut Annulé)'],
      ['PO-2025-024', '12/04/2025 (AMBIGU)', '—', 'USD → USD', '—', 'Date ambigue; Montant manquant; Statut manquant;'],
      ['PO-2025-025', '15/04/2025 (JJ/MM)', '15/04/2025', 'EUR → EUR', '1 728,00', '—'],
      ['PO-2025-026', '2025-04-18 (ISO)', '18/04/2025', 'CDF → CDF', '367,20', '—'],
    ],
  },
  {
    type: 'concept',
    title: 'Cas Bunia — la synthèse et la passerelle de totaux',
    body: "La synthèse du template donne E25 = 18 lignes brutes, E26 = 2 lignes de doublon (un couple), E27 = 7 lignes avec anomalie, E28 = 18 377,60 USD. La passerelle transforme E28 en total publiable et sépare ce qui est confirmé de ce qui est sous réserve.",
    table: {
      columns: ['Ligne de la passerelle', 'USD', 'Explication'],
      rows: [
        ['E28 du template', '18 377,60', 'Lignes sans anomalie, annulée comprise, PO-014 exclu en entier'],
        ['+ PO-2025-014 (une occurrence)', '+ 2 100,00', 'Doublon exact : une des deux lignes compte'],
        ['− PO-2025-023 (annulée)', '− 4 200,00', 'Une commande annulée n\'est pas un engagement'],
        ['= Total engagé confirmé', '16 277,60', '11 lignes, 11 PO'],
        ['+ Lignes à date ambiguë (011, 018, 021, 022)', '+ 2 818,40', '1 250 + 890 + 338,40 + 340 : montant certain, date à confirmer'],
        ['= Total engagé sous réserve de dates', '19 096,00', '15 lignes, 14 PO'],
        ['Exclu : PO-2025-024', '—', 'Montant et statut manquants, aucune estimation'],
      ],
    },
    example: {
      title: 'Répartition par statut (17 lignes après dédoublonnage, 16 PO)',
      lines: [
        "Livré : 11 lignes, 10 PO, 14 510,40 USD (dont 2 480,00 sous réserve de date : PO-011, PO-018 du 05/04 et PO-022).",
        "En cours : 4 lignes, 4 PO, 4 585,60 USD (dont 338,40 sous réserve : PO-021).",
        "Annulé : 1 PO (PO-023, 4 200,00 USD, non engagé). À vérifier : 1 PO (PO-024).",
      ],
    },
    result: "Total engagé : 19 096,00 USD pour 14 PO ; 16 277,60 confirmés et 2 818,40 sous réserve. Délai moyen commande → livraison : non calculé, l'export ne contient pas la date de réception.",
    tip: "Quand une date ambiguë ne change pas le montant mais peut changer la période (un « 05/04 » qui serait le 4 mai sortirait de la période), séparez toujours « confirmé » et « sous réserve » au lieu d'arbitrer seul.",
  },
  {
    type: 'concept',
    title: 'Cas Bunia — les notes de transformation rédigées',
    body: "Voici la colonne B de l'onglet « Notes de transformation », six lignes, telle que le coordinateur et un collègue peuvent la relire.",
    example: {
      title: 'Notes de transformation — base de Bunia, export du 28/04/2025',
      lines: [
        "1. Source : export ERP des achats de la base de Bunia, 28/04/2025, non modifié (copie de travail). Exhaustivité comparée à l'écran ERP avant nettoyage : lignes, plage de dates, statuts, totaux par devise.",
        "2. Doublons : critère N° PO + Article + Date + Montant + Devise. 2 lignes marquées (E26), 1 couple : PO-2025-014, 2 100 USD, 18/03/2025, double saisie lors d'une coupure internet : 1 ligne supprimée, sous réserve de confirmation du numéro de PO dans l'ERP. PO-2025-018 : deux lignes à dates différentes, conservées, commande répétée probable à confirmer.",
        "3. Dates : AAAA-MM-JJ (5), JJ/MM/AAAA (7), MM/JJ/AAAA (1), ambiguës (5 : PO-011, 018, 021, 022, 024), marquées « AMBIGU - A VERIFIER » et non devinées, à confirmer à la source de saisie.",
        "4. Devises : devise de reporting USD ; USD, US$, $, Dollars → USD ; EUR et CDF conservés. Taux (fictifs du template) : EUR 1,08 ; CDF 0,00036, à remplacer par le taux officiel de la mission pour le mois concerné, source en cellule Q9. Montant original conservé en colonne G.",
        "5. Lignes incomplètes : PO-2025-024 (montant et statut manquants) exclue des totaux, signalée en anomalie, à confirmer ; aucune estimation.",
        "6. Reproductibilité : pipeline Power Query à reprendre chaque mois ; remplacer la source, Données > Actualiser tout, puis contrôler taux inconnus, dates vides et nouveaux statuts.",
      ],
    },
    tip: "Chaque ligne contient un fait vérifiable (un numéro de PO, un nombre, une date) et la décision correspondante. Les mots « divers » et « OK » n'ont pas leur place dans cet onglet.",
  },
  {
    type: 'concept',
    title: 'Cas Bunia — le rapport mensuel rempli',
    body: "Le gabarit gabarit-rapport-erp-mensuel.docx rempli en deux pages pour la réunion de coordination du 1er mai 2025.",
    example: {
      title: 'Rapport mensuel supply chain — données ERP — base de Bunia',
      lines: [
        "1. Source et période : ERP de l'organisation ; fichier d'export du 28/04/2025 ; achats de mars et avril 2025 (période exacte sous réserve des 5 dates ambiguës) ; base de Bunia, tous statuts.",
        "2. Chiffres clés : 16 PO (17 lignes après dédoublonnage) ; montant engagé 19 096,00 USD, dont 16 277,60 confirmés et 2 818,40 sous réserve de dates ; 10 PO livrés (14 510,40 USD), 4 en cours (4 585,60 USD), 1 annulé (4 200,00 USD, non engagé), 1 à vérifier ; délai moyen : non calculé, date de réception absente de l'export.",
        "3. Qualité de la donnée : 1 doublon exact supprimé (PO-2025-014) ; dates harmonisées (3 formats), 5 ambiguës non devinées ; devises ramenées à USD au taux de référence de la mission ; 1 ligne exclue (PO-2025-024).",
        "4. Anomalies à vérifier avant validation : a) confirmer en ERP que PO-2025-014 est une double saisie ; b) confirmer les dates des PO 011, 018 (05/04), 021, 022 et 024 ; c) PO-2025-018 : commande répétée ou erreur ? ; d) compléter PO-2025-024 ; e) fournir la date de réception pour calculer le délai.",
        "5. Validation : rédigé par le Supply Chain Officer, 30/04/2025. Validé par le coordinateur logistique : à compléter.",
      ],
    },
    result: "Un rapport qui chiffre sans masquer : le coordinateur peut décider, et le bailleur peut remonter ligne par ligne.",
    tip: "Notez la liste des vérifications avant validation dans la section 4 : c'est ce que demande le gabarit (« points qui nécessitent une vérification humaine avant validation finale par votre coordinateur »).",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 (noté) — Nettoyer l\'export de juin avec le template',
    instructions: "Le 1er juillet 2026, Joseph K. vous remet l'export des commandes de juin de la base de Gogrial (12 lignes, ci-dessous). Reproduisez la logique de nettoyage dans le template guide-extraction-nettoyage-power-query.xlsx : doublons, dates, devises, lignes incomplètes. Taux de référence de juin (valeurs fictives, bulletin de la finance du 30/06/2026) : 1 EUR = 1,10 USD ; 1 SSP = 0,00021 USD ; USD = 1. Devise de reporting : USD.",
    steps: [
      "Enregistrez le template sous « Exercice1_Nettoyage_ERP_juin2026.xlsx ». Dans « Données brutes », effacez l'exemple, mettez D5:D22 au format Texte, collez les 12 lignes en A5:G16 (Données > Convertir, colonne date en Texte).",
      "Dans « Données nettoyées », supprimez les lignes 17 à 22 (elles n'ont pas de données) : la synthèse se réduit automatiquement. Adaptez les devises : CDF → SSP (Ctrl+H, dans les formules), saisissez les taux en R5:R7, renseignez la source en Q9.",
      "Lisez E25:E28 avant toute autre correction, puis comptez les « TAUX INCONNU » (=NB.SI(J5:J16;\"TAUX INCONNU\")) et corrigez la colonne I pour chaque libellé non reconnu.",
      "Pour chaque ligne en anomalie, écrivez une décision (supprimer, conserver, exclure, sous réserve) et sa raison. Le doublon se vérifie dans l'ERP : supposez la double saisie confirmée par Joseph K. La date de PO-GOG-042 n'est pas encore confirmée.",
      "Construisez la passerelle de totaux : de E28 (après corrections) au total engagé retenu, en séparant « confirmé » et « sous réserve ».",
      "Rédigez les six lignes de l'onglet « Notes de transformation » avec des faits chiffrés. Corrigez la référence E23 du texte du template : le nombre de doublons est en E26.",
      "Variante pour aller plus loin : reproduisez les étapes dans Power Query et vérifiez que vous obtenez le même total engagé.",
    ],
    table: {
      columns: ['N° PO', 'Fournisseur', 'Article', 'Date (saisie brute)', 'Montant (brut)', 'Devise (brute)', 'Statut'],
      rows: [
        ['PO-GOG-042', 'Grossiste Wau — marché central', 'Farine de maïs et haricots (2,0 t)', '03/06/2026', '6300000', 'SSP', 'Livré'],
        ['PO-GOG-043', 'Fournisseur Juba — vivres', 'Riz, huile enrichie (3,0 t)', '2026-06-05', '5400', 'USD', 'Livré'],
        ['PO-GOG-044', 'Station Kuajok', 'Carburant diesel (3 000 L)', '16/06/2026', '3450', 'US$', 'En cours'],
        ['PO-GOG-044', 'Station Kuajok', 'Carburant diesel (3 000 L)', '16/06/2026', '3450', 'US$', 'En cours'],
        ['PO-GOG-045', 'Centrale d\'achat internationale', 'Médicaments essentiels (30 colis)', '06/18/2026', '14800', '€', 'En cours'],
        ['PO-GOG-046', 'Transporteur Juba', 'Transport Juba-Gogrial (2 camions 10 t)', '19/06/2026', '4900', '$', 'Livré'],
        ['PO-GOG-047', 'Nairobi Lab Supplies', 'Consommables de laboratoire', '2026-06-22', '2350', 'USD', 'Livré'],
        ['PO-GOG-048', 'Grossiste Wau — marché central', 'Farine de maïs et haricots (2,0 t)', '24/06/2026', '6300000', 'SSP', 'En cours'],
        ['PO-GOG-049', 'Électro-Solaire Juba', 'Panneaux solaires pour clinique mobile (6 unités)', '2026-06-25', '3100', 'US Dollars', 'En cours'],
        ['PO-GOG-050', 'Station Kuajok', 'Carburant diesel (3 000 L)', '29/06/2026', '(vide)', 'USD', 'En cours'],
        ['PO-GOG-051', 'Informatique Juba', 'Imprimante réseau', '2026-06-30', '480', 'USD', '(vide)'],
        ['PO-GOG-052', 'Transporteur Juba', 'Transport Juba-Gogrial (2 camions 10 t)', '30/06/2026', '4900', 'USD', 'Annulé'],
      ],
    },
    tip: "Avant de commencer, dites à voix haute ce que vous attendez : combien de doublons, de formats de date, de libellés de devise. Si le template vous donne autre chose, vous avez trouvé quelque chose.",
    pitfall: "Décider d'un doublon en comparant PO-GOG-042 et PO-GOG-048 : même fournisseur, même montant, mais PO différents et dates différentes. Ce sont deux commandes.",
    deliverable: "Le classeur Exercice1_Nettoyage_ERP_juin2026.xlsx : données brutes, données nettoyées avec synthèse corrigée, taux documentés, onglet Notes de transformation rédigé, et la passerelle de totaux.",
  },
  {
    type: 'checklist',
    title: 'Exercice 1 — Votre livrable est correct si…',
    items: [
      "Lue avant correction des libellés de devise, la synthèse donne E25 = 12 lignes brutes, E26 = 2 lignes de doublon (un couple : PO-GOG-044), E27 = 5 lignes avec anomalie et E28 = 18 873 USD (SSP déjà adapté).",
      "Le compteur de « TAUX INCONNU » vaut 0 après correction : les libellés « € » et « US Dollars » sont reconnus, SSP remplace CDF.",
      "E28 vaut 38 253 USD une fois les devises corrigées.",
      "La passerelle donne : 38 253 + 3 450 (PO-044 une fois) − 4 900 (PO-052 annulée) = 36 803 USD confirmés ; + 1 323 USD (PO-042, date non confirmée) = 38 126 USD engagés sous réserve.",
      "PO-GOG-042 et PO-GOG-048 sont conservés (PO différents), et la date de PO-GOG-042 est signalée « à vérifier » sans être devinée.",
      "PO-GOG-050 (montant vide) et PO-GOG-051 (statut vide) sont exclus du total, avec leur raison, une relance datée et aucun montant estimé.",
      "Les six lignes de Notes de transformation citent des faits (fichier, nombre de doublons, formats, taux et source, lignes exclues, mode d'emploi) et la référence E26 est corrigée.",
      "Le montant original reste visible en colonne G à côté du montant converti en colonne K.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Rédiger le rapport mensuel de juin',
    instructions: "À partir de votre exercice 1, remplissez le gabarit gabarit-rapport-erp-mensuel.docx pour la réunion de coordination de juin. Joseph K. vous transmet en plus l'export des réceptions (ci-dessous) pour calculer le délai commande → livraison. Le rapport doit tenir en une à deux pages et signaler ses réserves.",
    steps: [
      "Enregistrez le gabarit sous « Exercice2_Rapport_mensuel_ERP_juin2026.docx » et personnalisez le bandeau (Kerowa Santé — base de Gogrial — achats de juin 2026).",
      "Section 1 : source, nom du fichier d'export, date d'export (01/07/2026), période (01/06–30/06/2026) et périmètre.",
      "Section 2 : nombre de PO, montant engagé en USD (confirmé et sous réserve), répartition par statut, délai moyen. Pour le délai, ne retenez que les réceptions dont la date de commande est confirmée et indiquez le nombre de PO utilisés.",
      "Section 3 : doublons traités, formats corrigés, lignes exclues avec leur raison.",
      "Section 4 : une ligne par point à vérifier avec action, responsable et échéance (dates de relance au plus tard le 08/07/2026).",
      "Section 5 : remplissez « Rédigé par » et la date ; laissez la validation de la coordinatrice vide.",
    ],
    table: {
      columns: ['N° PO', 'Date de commande', 'Date de réception', 'Remarque'],
      rows: [
        ['PO-GOG-042', '03/06/2026 (ambiguë, non confirmée)', '10/06/2026', 'Date de commande à confirmer'],
        ['PO-GOG-043', '05/06/2026', '12/06/2026', 'Confirmé'],
        ['PO-GOG-046', '19/06/2026', '21/06/2026', 'Confirmé'],
        ['PO-GOG-047', '22/06/2026', '26/06/2026', 'Confirmé'],
      ],
    },
    tip: "Écrivez toujours « sur N PO » à côté d'un délai moyen : « 4,3 jours sur 3 PO » dit autre chose que « 4,3 jours ».",
    pitfall: "Calculer un délai de 7 jours pour PO-GOG-042 comme s'il était certain : si le « 03/06 » était en réalité le 6 mars, le délai deviendrait absurde. Laissez-le hors du calcul tant que la date n'est pas confirmée.",
    deliverable: "Le rapport Exercice2_Rapport_mensuel_ERP_juin2026.docx, de une à deux pages, prêt à être validé.",
  },
  {
    type: 'checklist',
    title: 'Exercice 2 — Votre livrable est correct si…',
    items: [
      "La section 1 cite le fichier d'export, sa date et le périmètre ; la période est écrite en dates complètes.",
      "La section 2 indique 11 PO (11 lignes après dédoublonnage), avec l'unité (PO ou lignes) à côté de chaque nombre.",
      "Le montant engagé est donné en USD : 36 803 confirmés, 1 323 sous réserve, soit 38 126 USD, avec la phrase qui explique la différence.",
      "La répartition est cohérente : 4 PO livrés, 5 en cours, 1 annulé (4 900 USD non engagé), 1 à vérifier ; PO-GOG-050 signalé sans montant.",
      "Le délai moyen est 4,3 jours sur 3 PO (7, 2 et 4 jours) et mentionne que PO-GOG-042 est exclu du calcul.",
      "La section 4 contient au moins 4 points datés : date de PO-GOG-042, montant de PO-GOG-050, statut de PO-GOG-051, libellés de devise non standard saisis dans l'ERP.",
      "Aucun chiffre du rapport n'est estimé ni arrondi sans le dire ; chaque chiffre est retrouvable dans la passerelle ou dans le tableau croisé.",
      "La validation de la coordinatrice est vide : le rapport n'a pas été présenté comme validé avant de l'être.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Diagnostiquer une demande bloquée et contrôler une fiche actif',
    instructions: "Deux situations du 4 juin 2026. A) La demande d'achat PR-2026-0187 (groupe électrogène de secours 30 kVA pour une clinique mobile, 12 400 USD, livraison attendue avant le 20/06) n'avance plus. B) Vous contrôlez la fiche actif du réfrigérateur solaire reçu le 05/05/2026. Utilisez la matrice des seuils d'approbation de ce module.",
    steps: [
      "A1. D'après la valeur de la demande, listez les niveaux d'approbation requis et repérez où elle attend.",
      "A2. Calculez le délai probable : combien de jours ouvrables entre aujourd'hui et le retour de la personne en attente ? La livraison avant le 20/06 reste-t-elle possible ?",
      "A3. Proposez deux solutions conformes (une qui respecte le circuit, une pour sécuriser le délai) et une solution interdite.",
      "A4. Rédigez en 5 lignes le message à la coordinatrice pays et à Joseph K. : fait, impact, demande, échéance.",
      "B1. Comparez la fiche actif aux 7 champs attendus et listez les champs manquants, incorrects ou ambigus.",
      "B2. Dites combien de fiches doivent exister pour cette commande et avec quelle valeur chacune.",
      "B3. Écrivez les trois corrections à demander à la finance et le moyen de vérifier ensuite sur le terrain.",
    ],
    table: {
      columns: ['Élément', 'Information relevée dans l\'ERP le 04/06/2026'],
      rows: [
        ['PR-2026-0187', 'Créée le 02/06/2026 par Peter A., 12 400 USD, groupe électrogène 30 kVA, ligne B3.2'],
        ['Niveau 1 : coordinateur terrain', 'Approuvé le 03/06/2026 à 08 h 50 (Daniel O.)'],
        ['Niveau 2 : SCM', 'Approuvé le 03/06/2026 à 15 h 10'],
        ['Niveau 3 : coordinatrice pays', 'En attente depuis le 04/06/2026 ; Grace M. est en déplacement et de retour le 10/06/2026 (mercredi)'],
        ['Fiche actif (B) — numéro', '(vide)'],
        ['Fiche actif (B) — désignation / localisation', 'Réfrigérateur solaire / « Gogrial »'],
        ['Fiche actif (B) — responsable / valeur / date', '(vide) / 7 800 USD / 05/05/2026'],
        ['Fiche actif (B) — statut', 'En service'],
      ],
    },
    tip: "Avant d'écrire une solution, relisez la règle de la suppléance : l'ERP ne se contourne pas, il se paramètre.",
    pitfall: "Demander à Grace M. son mot de passe, ou demander à Daniel O. d'approuver à sa place « pour gagner du temps » : c'est une rupture de séparation des tâches, visible dans la piste d'audit.",
    deliverable: "Une note d'une page : le diagnostic de la PR-2026-0187 avec ses deux options et le message de 5 lignes, puis la liste des corrections de la fiche actif.",
  },
  {
    type: 'checklist',
    title: 'Exercice 3 — Votre livrable est correct si…',
    items: [
      "Les niveaux sont bien identifiés : 12 400 USD tombe dans la tranche 10 000 à 49 999 USD, donc trois niveaux (coordinateur terrain, SCM, coordinatrice pays) ; la demande attend au niveau 3.",
      "Le calcul des jours ouvrables est exact (de la demande en attente le jeudi 04/06 au retour le mercredi 10/06 : 4 jours ouvrables, les 5, 8, 9 et 10 juin) et la tension avec la date du 20/06 est signalée.",
      "Une solution conforme respecte le circuit : approbation par Grace M. elle-même, à distance, avec son propre identifiant ; suppléant officiel déclaré dans l'ERP ; ou délégation écrite de la direction des opérations ; l'autre sécurise le délai : demande d'offre de livraison anticipée au fournisseur déjà qualifié, sans engagement avant approbation.",
      "La solution interdite est nommée : utiliser l'identifiant d'un collègue, faire approuver par une autre personne que celle prévue, ou scinder la demande pour passer sous le seuil.",
      "Le message contient le fait (n° de PR, valeur, niveau en attente), l'impact (date de livraison), la demande (suppléance ou approbation) et une échéance.",
      "Pour la fiche actif, vous avez relevé : numéro vide, localisation trop vague, responsable vide, valeur de 7 800 USD qui correspond à deux unités (donc deux fiches de 3 900 USD).",
      "Vous avez proposé une vérification physique : étiquette posée, numéro de série relevé, photographie.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, FIN
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents sur le terrain — et comment les éviter',
    items: [
      "Faire confiance aux données de l'ERP sans valider l'exhaustivité de l'export : filtres actifs par défaut, plage de dates restreinte, statuts exclus. Comparez toujours le nombre de lignes à l'écran avant de nettoyer.",
      "Ressaisir manuellement au lieu d'utiliser Power Query : fausse économie, source d'erreurs, et impossible à reproduire le mois suivant.",
      "Ne pas documenter les étapes de transformation : le jour de votre absence ou d'une question du bailleur sur une ligne précise, personne ne sait expliquer vos chiffres.",
      "Supprimer des « doublons » sans critère d'unicité rigoureux : deux commandes identiques en apparence peuvent être deux vraies dépenses. Vérifiez le numéro de PO et la date dans l'ERP.",
      "Convertir les devises avec un taux trouvé sur un moteur de recherche plutôt qu'avec le taux de référence de la mission : l'écart avec la finance remontera pendant un audit.",
      "Présenter un rapport sans signaler les données manquantes ou incertaines : « 1 ligne en attente de confirmation, non comptabilisée dans le total » est plus protecteur qu'un chiffre rond sans réserve.",
      "Ne jamais faire relire son pipeline : une règle de nettoyage devenue obsolète (nouveau format de date, nouvelle devise) fausse le rapport en silence jusqu'au jour où quelqu'un la repère.",
    ],
  },
  {
    type: 'warning',
    title: 'Les pièges du template et de Power Query qui ne préviennent pas',
    items: [
      "Un taux inconnu fait disparaître la ligne du total sans aucune alerte : la colonne d'anomalie ne le signale pas. Comptez les « TAUX INCONNU » après chaque adaptation du template.",
      "Les commandes annulées sont comprises dans E28 : retranchez-les pour obtenir un montant engagé.",
      "Les deux lignes d'un doublon sont exclues du total : une des deux doit être réintégrée après vérification.",
      "Les dates doivent rester du texte dans « Données brutes » : un collage qui les convertit détruit l'information et fait échouer les formules.",
      "Les plages du template s'arrêtent à la ligne 22 : au-delà de 18 lignes, insérez à l'intérieur de la plage et recopiez les formules ; en dessous de 18, supprimez les lignes vides de « Données nettoyées ».",
      "Le texte de l'onglet Notes de transformation renvoie à la cellule E23 pour le nombre de doublons : la valeur est en E26, corrigez la référence.",
      "Dans Power Query, « Remplacer les valeurs » sans la correspondance de la cellule entière transforme « US$ » en « USUSD » ; et « Supprimer les doublons » sur toutes les colonnes ou sur le seul PO supprime de vraies lignes.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez suivi un achat réel de la demande d'achat à la fiche actif, lu sa piste d'audit et rédigé la fiche de circuit avec la matrice des seuils d'approbation (L1).",
      "Vous avez extrait un export complet, comparé à l'écran de l'ERP, figé en lecture seule et consigné sur une fiche de contrôle (L2).",
      "Vous avez construit un pipeline Power Query de 11 étapes nommées qui supprime les doublons sur critère exact, harmonise les dates, normalise les devises et convertit sans écraser l'original (L3).",
      "Vous avez complété le template de nettoyage : synthèse E25:E28, taux Q:R documentés, passerelle qui explique le total retenu, plan d'action daté (L4).",
      "Vous avez rédigé les six lignes des Notes de transformation, relues par un collègue qui a refait votre calcul seul (L5).",
      "Vous avez produit le rapport mensuel de deux pages, avec chiffres clés, qualité de la donnée, anomalies datées et validation (L6).",
      "Vous avez testé l'actualisation et écrit la procédure mensuelle qu'un collègue peut relancer sans vous (L7).",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer ce qu'un ERP standardise (source unique de vérité, piste d'audit) et pourquoi ça protège l'organisation et moi-même.",
      "Je sais décrire, dans l'ordre, les étapes d'un workflow d'approbation (demande, vérification budgétaire, seuils d'approbation, bon de commande, réception, registre des actifs) et lire la piste d'audit d'un achat.",
      "Je comprends pourquoi la compétence transférable est l'extraction et le nettoyage de données, pas la maîtrise boutons-par-boutons d'un ERP donné.",
      "Je sais extraire un export complet et le comparer à l'écran de l'ERP avant de nettoyer quoi que ce soit.",
      "Je sais ouvrir un export ERP dans Power Query sans modifier le fichier source.",
      "Je sais identifier et supprimer des doublons sur un critère d'unicité rigoureux, pas sur une simple ressemblance visuelle.",
      "Je sais harmoniser des formats de date incohérents en vérifiant les cas ambigus plutôt qu'en laissant l'outil deviner.",
      "Je sais normaliser des montants en devises mixtes vers une devise de reporting unique, en conservant les montants originaux et en documentant le taux et sa source.",
      "Je documente systématiquement mes étapes de transformation et je fais relire mon pipeline par un collègue.",
      "J'ai complété le classeur de nettoyage et le rapport mensuel avec les templates fournis, et je sais les actualiser le mois suivant.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 09 — KPIs, Reporting & Tableau de Bord Supply Chain : transformer vos données propres en indicateurs, en tableaux de bord et en rapports pour le siège et les bailleurs.',
  },
]
