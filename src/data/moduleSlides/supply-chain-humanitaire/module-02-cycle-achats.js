// Module 02 — Cycle Complet des Achats — De la RFQ à la PO
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure du cycle
// d'achat est déroulée étape par étape (une étape par écran), champ par champ
// dans les 8 templates fournis, appliquée à un cas fil rouge chiffré, puis
// résolue intégralement et transposée en exercices. Les diapositives trop
// chargées sont découpées automatiquement en « (suite) » par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "cover",
    title: "Cycle Complet des Achats — De la RFQ à la PO",
    hook: "À la fin de ce module, vous saurez conduire un achat de la demande interne jusqu'au paiement, sans trou dans le dossier : une IR signée, une étude de marché, la bonne procédure choisie et ses critères gelés, une analyse comparative des offres (CBA) où vous aurez repéré anomalies et collusion, un PV de CPC motivé, un PV de négociation, un contrat-cadre, une PO, puis un dossier validé par la checklist Finance en 13 points. Chaque étape est déroulée champ par champ sur un cas de terrain chiffré.",
  },
  {
    type: "objectives",
    items: [
      "Exprimer un besoin par une demande interne (IR) complète et signée, estimer le montant total sans fractionnement et en déduire le palier d'achat applicable, en produisant l'IR du template bon-demande-interne-ir.xlsx et une note de palier.",
      "Réaliser une étude de marché avant toute consultation (benchmark de prix daté, identification des fournisseurs, sondage informel, fiche fournisseur) et lancer un AMI quand le marché est mal connu, en produisant une note d'étude de marché et une shortlist documentée.",
      "Choisir sans hésitation entre RFQ, RFP, AO ouvert ou restreint, AMI et contrat-cadre, puis figer les critères d'évaluation avant tout contact fournisseur, en produisant une note de choix de procédure signée.",
      "Lancer une consultation, enregistrer et ouvrir les offres dans les règles, puis produire une CBA pondérée qui résiste à un audit bailleur et repère les anomalies et les indices de collusion, en produisant la grille CBA complétée.",
      "Faire fonctionner un CPC (quorum, séparation des tâches) et documenter la décision et la négociation, en produisant le PV de CPC du template et un PV de négociation.",
      "Structurer un contrat-cadre et une RFP à partir de la trame fournie, émettre la PO, la rapprocher du bon de réception et de la facture (3-way match), en produisant les parties A et B de la trame et une PO conforme.",
      "Constituer un dossier d'achat archivable de la PR au paiement, le contrôler avec la checklist Finance en 13 points, fixer la matrice d'autorisation de votre mission et encadrer une avance de caisse, en produisant un dossier au statut FINANCE READY.",
    ],
  },
  {
    type: "concept",
    title: "Ce que vous allez réaliser dans ce module",
    body: [
      "Ce module n'est pas une lecture : c'est le déroulé complet d'un achat significatif, de la demande du programme jusqu'au paiement, découpé en 13 procédures. À la fin, vous aurez en main dix livrables réutilisables tels quels sur votre propre mission, dont six fichiers issus des templates fournis.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé (Gogrial, État du Warrap, Soudan du Sud), que vous avez découverte au module 1. Vous y êtes Supply Chain Manager et vous devez acheter, pour six mois, les vivres non périssables du centre de stabilisation nutritionnelle.",
    ],
    bullets: [
      "L1 — L'IR signée (bon-demande-interne-ir.xlsx), avec le montant total estimé et le palier d'achat.",
      "L2 — La note d'étude de marché : grille de benchmark datée, fiches fournisseurs (fiche-etude-marche-fournisseur.xlsx).",
      "L3 — L'avis d'AMI, la grille de qualification et la shortlist.",
      "L4 — La note de choix de procédure et de gel des critères d'évaluation.",
      "L5 — Le dossier de consultation : RFQ (grille-rfq-demande-cotation.xlsx), dossier d'AO restreint et trame de RFP (trame-rfp-et-contrat-cadre.docx, partie A).",
      "L6 — La CBA complétée, avec scores pondérés et contrôle anti-collusion.",
      "L7 — Le procès-verbal de CPC (pv-comite-achats-cpc.docx).",
      "L8 — Le PV de négociation, le contrat-cadre (trame partie B) et la PO.",
      "L9 — Le dossier d'achat validé (checklist-validation-dossier-achat.xlsx, 2 feuilles) et la matrice d'autorisation de la mission.",
      "L10 — L'avance de caisse et son rendu (demande-avance-terrain.xlsx).",
    ],
    tip: "Créez dès maintenant un dossier « Achat vivres AOR-2026-003 » avec un sous-dossier par livrable (L1 à L10), numérotés dans l'ordre du cycle. Le dossier d'achat final n'est que ce dossier, classé dans l'ordre chronologique.",
  },
  {
    type: "concept",
    title: "Le cas fil rouge : acheter six mois de vivres pour Kerowa Santé",
    body: [
      "Rappel (module 1) : Kerowa Santé mène depuis le 1er décembre 2025 une réponse médicale et nutritionnelle à Gogrial (1 200 000 EUR, ECHO 85 %). Politique d'achat appliquée, règle la plus stricte : 3 devis écrits dès 1 000 EUR, appel d'offres restreint dès 10 000 EUR, appel d'offres ouvert dès 60 000 EUR. La coordination a décidé, le 6 mars, d'acheter les vivres non périssables (farine de maïs, haricots) à Wau dans le cadre d'un accord-cadre de 6 mois, après appel d'offres restreint.",
      "Nous sommes le lundi 9 mars 2026. Besoin des programmes : 14 500 kg de farine de maïs, 2 000 kg de haricots secs, 1 000 L d'huile enrichie en vitamine A et 150 kg de sel iodé pour 6 mois (180 accompagnants en moyenne). Première livraison avant le 30 avril, stock de précaution de 2,75 t avant le 15 mai. Estimation : 12 955 EUR. Vous suivrez cet achat pas à pas, jusqu'au paiement de la première livraison.",
    ],
    table: {
      columns: ["Personne (fictive)", "Fonction", "Rôle dans cet achat"],
      rows: [
        ["Dr Rebecca N.", "Responsable programme nutrition", "Demandeur : exprime le besoin et signe l'IR"],
        ["Grace M.", "Coordinatrice pays (Juba)", "Budget holder, présidente du CPC, signe le contrat-cadre"],
        ["Daniel O.", "Coordinateur terrain (de retour le 23 mars)", "Signe les PO du palier intermédiaire"],
        ["Joseph K.", "Responsable administration-finance", "Membre du CPC (profil finance), contrôle le dossier avant paiement"],
        ["Dr Samuel T.", "Coordinateur médical", "Membre du CPC (profil technique)"],
        ["Peter A.", "Logisticien terrain", "Magasinier : réceptionne, établit le GRN"],
        ["Esther L.", "Assistante achats", "Prépare les dossiers, tient le registre d'ouverture"],
        ["Vous", "Supply Chain Manager", "Pilote le cycle, rapporteur du CPC (sans voix délibérative)"],
      ],
    },
    pitfall: "Les personnes, l'ONG, les fournisseurs et les montants sont fictifs et donnés à titre d'exemple ; ne réutilisez jamais ces chiffres tels quels sur votre mission.",
  },
  {
    type: "concept",
    title: "Les 13 procédures du module, dans l'ordre du cycle d'achat",
    body: "Chaque procédure produit un livrable qui sert d'entrée à la suivante. Respectez l'ordre : sauter une étape revient à créer un trou dans le dossier que l'auditeur trouvera.",
    table: {
      columns: ["Procédure", "Ce que vous faites", "Livrable", "Date Kerowa"],
      rows: [
        ["P1", "Rédiger et valider l'IR, estimer le palier", "L1 IR signée", "9 mars"],
        ["P2", "Réaliser l'étude de marché", "L2 Note + fiches", "10 – 13 mars"],
        ["P3", "Lancer et traiter l'AMI", "L3 Shortlist", "16 – 26 mars"],
        ["P4", "Choisir la procédure et figer les critères", "L4 Note de gel", "13 – 26 mars"],
        ["P5", "Lancer la consultation (RFQ, AO restreint)", "L5 Dossier de consultation", "27 mars"],
        ["P6", "Rédiger une RFP (transport)", "L5 Trame RFP (partie A)", "Avril"],
        ["P7", "Ouvrir les offres, construire la CBA", "L6 CBA", "7 – 9 avril"],
        ["P8", "Réunir le CPC et rédiger le PV", "L7 PV de CPC", "10 avril"],
        ["P9", "Négocier et rédiger le PV de négociation", "L8 PV de négociation", "14 avril"],
        ["P10", "Structurer le contrat-cadre", "L8 Contrat-cadre (partie B)", "16 avril"],
        ["P11", "Émettre la PO, réceptionner, 3-way match", "L8 PO, GRN", "17 – 29 avril"],
        ["P12", "Contrôler le dossier, fixer la matrice d'autorisation", "L9 Dossier FINANCE READY", "20 – 30 avril"],
        ["P13", "Encadrer une avance de caisse (palier 1)", "L10 Avance + rendu", "Au besoin"],
      ],
    },
    tip: "Chaque procédure est écrite pour être rejouée : revenez directement à l'étape qui vous bloque, les champs des templates y sont décrits un par un.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "concept",
    title: "Pourquoi les seuils d'autorisation existent : réduire l'opportunité de fraude",
    body: [
      "La première chose qu'on vous dit sur un poste achats, c'est une liste de seuils. Présentée seule, elle ressemble à de la bureaucratie. Elle n'en est pas une : chaque seuil existe pour réduire l'opportunité de fraude, en multipliant le nombre de personnes qui doivent regarder une transaction avant qu'elle ne se conclue.",
      "Le triangle de la fraude réunit trois ingrédients : une opportunité, une pression et une rationalisation. Vous ne pouvez rien contre la pression personnelle d'un collègue ni contre sa capacité à se justifier à lui-même. Vous pouvez supprimer l'opportunité. Un achat où la même personne exprime le besoin, choisit le fournisseur, valide le prix et signe le paiement est un achat à opportunité maximale.",
    ],
    highlight: "Plus le montant grandit, plus le nombre de personnes qui doivent converger avant la décision doit grandir avec lui.",
    example: {
      title: "Kerowa : qui voit l'achat de vivres (12 955 EUR) avant le paiement ?",
      lines: [
        "Besoin : Dr Rebecca N. (programme). Budget : Grace M. (budget holder). Procédure : vous et Esther L. Décision : CPC de 3 membres. Signature du contrat : Grace M. Réception : Peter A. Paiement : Joseph K. (finance).",
        "Aucune personne ne cumule deux de ces fonctions : c'est la séparation des tâches, visible dans le dossier.",
      ],
    },
  },
  {
    type: "comparison-table",
    title: "Les 4 paliers d'achat : l'architecture générique et son adaptation à Kerowa",
    columns: ["Palier", "Générique (USD, indicatif)", "Procédure", "Qui valide", "Kerowa (EUR, règle la plus stricte)"],
    rows: [
      ["1 — Achat direct", "Jusqu'à ~1 000", "Comparaison informelle ; une cotation possible si justifiée par écrit", "Logisticien terrain", "< 1 000"],
      ["2 — Consultation restreinte", "~1 000 à 25 000", "RFQ : 3 devis écrits minimum", "Log Manager + validation budgétaire programme", "1 000 à < 10 000"],
      ["3 — Appel d'offres formel", "~25 000 à 100 000", "RFP ou AO : critères figés, ouverture des plis en comité", "CPC", "10 000 à < 60 000 (AO restreint)"],
      ["4 — Achat stratégique", "Au-delà de ~100 000", "Appel d'offres international, souvent co-validé siège ou bailleur", "CPC + siège / bailleur", "≥ 60 000 (AO ouvert, visa siège)"],
    ],
  },
  {
    type: "concept",
    title: "Le fractionnement (« purchase splitting ») : la fraude la plus classique",
    body: [
      "Fractionner, c'est diviser un besoin en plusieurs commandes pour rester sous un seuil et éviter le comité. Les auditeurs bailleurs croisent systématiquement les commandes passées au même fournisseur, sur la même période, pour le même projet. Trois PO consécutives à un mois d'écart pour des articles similaires déclenchent une question immédiate, et parfois un refus de remboursement sur toute la ligne budgétaire.",
      "Le montant qui détermine le palier est toujours le montant total estimé du besoin, jamais le montant unitaire ni celui d'une commande isolée.",
    ],
    example: {
      title: "Ce qu'un auditeur verrait chez Kerowa",
      lines: [
        "Fractionnement : 12 955 EUR divisés en 2 commandes de 6 478 EUR pour rester sous 10 000 EUR et éviter le CPC.",
        "Fractionnement déguisé : 6 commandes mensuelles de ~2 100 EUR chez le même grossiste, sans accord-cadre.",
        "Pratique conforme : un accord-cadre attribué une seule fois, sur la valeur cumulée de 6 mois, puis des commandes mensuelles (appels) sous cet accord.",
      ],
    },
    pitfall: "Si le montant estimé dépasse un seuil de peu, ne cherchez jamais à le faire « tenir » en dessous : passez au palier supérieur et documentez-le.",
  },
  {
    type: "comparison-table",
    title: "RFQ, RFP, AO (ITB), AMI : quatre outils, pas quatre synonymes",
    columns: ["Critère", "RFQ", "RFP", "AO (ITB)", "AMI"],
    rows: [
      ["Utilisé pour", "Biens standards, spécifications déjà fixes", "Services ou biens complexes où l'approche technique compte autant que le prix", "Achats de forte valeur, biens ou travaux homogènes et bien définis", "Explorer un marché mal connu, avant un achat complexe ou un accord-cadre"],
      ["Palier typique", "Palier 2", "Palier 3", "Palier 3 à 4", "Aucun seuil : étape de présélection, pas un achat"],
      ["Demandé au fournisseur", "Un prix ferme, directement comparable", "Une proposition technique et financière, évaluée par pondération", "Une offre ferme sous pli scellé, conforme aux spécifications", "Une preuve de capacité, jamais un prix ferme"],
      ["Exemple terrain", "200 moustiquaires imprégnées", "Bureau d'études pour un forage", "Entrepôt régional de 500 m²", "Présélectionner des transporteurs avant un accord-cadre régional"],
    ],
  },
  {
    type: "warning",
    title: "Deux confusions classiques entre procédures",
    items: [
      "Lancer une RFQ pour un achat qui aurait dû être un AO « parce que c'est plus rapide » : c'est le premier point relevé par tout audit bailleur, qui compare le montant dépensé au type de procédure utilisé.",
      "Confondre un AMI avec une RFQ déguisée : un AMI n'engage jamais un fournisseur sur un prix ferme, il sert à constituer une shortlist. Retenir un prix reçu en réponse à un AMI, sans mise en concurrence formelle derrière, est une non-conformité fréquente et facilement repérée.",
      "Écrire une RFP quand vous savez rédiger une spécification complète sans consulter personne : c'est alors une RFQ ou un AO qu'il vous faut. La RFP compare des façons différentes de résoudre un problème.",
    ],
  },
  {
    type: "concept",
    title: "AO ouvert ou restreint : de la publication à l'attribution",
    body: [
      "L'AO (en anglais ITB) est une offre ferme sous pli scellé, évaluée sur la conformité stricte aux spécifications. Un AO ouvert est publié largement : tout fournisseur qualifié peut soumissionner, c'est le plus transparent et le plus lourd à traiter. Un AO restreint n'invite que des fournisseurs présélectionnés (via un AMI ou déjà qualifiés) : plus rapide, défendable en audit si la présélection est documentée.",
      "Au palier 3, un AO formel s'impose ; au palier 4, il devient quasi systématiquement ouvert, car la plupart des bailleurs exigent la mise en concurrence la plus large possible.",
    ],
    bullets: [
      "1. Publication de l'avis ou envoi des invitations, avec le dossier complet.",
      "2. Questions-réponses documentées et communiquées identiquement à tous.",
      "3. Date de clôture ferme.",
      "4. Ouverture des plis en présence d'au moins deux personnes, avec enregistrement horodaté.",
      "5. Évaluation selon les critères figés avant l'ouverture.",
      "6. Notification de l'attribution, avec le cas échéant un délai de suspension avant signature.",
    ],
    tip: "Délais moyens à annoncer en interne : RFQ quelques jours à 2 semaines ; RFP 2 à 4 semaines ; AO ouvert 3 à 6 semaines ; AMI 1 à 3 semaines. Planifiez-les dès la PR : l'urgence réelle se gère par un délai de réponse raccourci, jamais par l'absence de mise en concurrence.",
  },
  {
    type: "comparison-table",
    title: "Choisir le bon instrument : RFQ, RFP, AO, AMI ou contrat-cadre",
    columns: ["Critère", "RFQ", "RFP", "AO", "AMI", "Contrat-cadre"],
    rows: [
      ["À utiliser quand", "Spécification fixe, prix à comparer", "Besoin à résoudre, plusieurs solutions possibles", "Forte valeur, spécification homogène", "Marché mal connu, présélection à construire", "Besoin récurrent sur une période donnée"],
      ["Seuil typique", "Palier 2", "Palier 3", "Palier 3 à 4", "Sans seuil propre", "Selon le volume cumulé annuel"],
      ["Formalisme", "Modéré : 3 devis écrits", "Élevé : critères pondérés, double enveloppe", "Très élevé : plis scellés, ouverture formelle", "Faible à modéré : qualification documentée", "Élevé à la mise en place, allégé ensuite"],
      ["Délai moyen", "Quelques jours à 2 semaines", "2 à 4 semaines", "3 à 6 semaines (ouvert)", "1 à 3 semaines", "Plusieurs semaines, puis quasi immédiat par commande"],
    ],
  },
  {
    type: "concept",
    title: "Le CPC : pourquoi une seule signature est un signal d'alerte",
    body: [
      "Le CPC (Comité de Validation des Achats, Procurement Committee) examine la CBA et décide quel fournisseur retenir au-dessus du seuil de consultation restreinte. Sa raison d'être n'est pas de ralentir l'achat : c'est de garantir qu'aucune décision significative ne repose sur le jugement d'une seule personne.",
      "Un CPC qui fonctionne respecte trois règles systématiques.",
    ],
    bullets: [
      "Quorum minimum de 3 membres, dont au moins un profil finance ou compliance et un profil technique ou programme : jamais uniquement des logisticiens entre eux.",
      "Séparation des tâches : la personne qui a exprimé le besoin ou négocié avec les fournisseurs n'est jamais seule décisionnaire. Elle informe, elle ne tranche pas seule.",
      "Décision documentée et signée par tous les membres présents, avec la justification du choix et les raisons du rejet des autres offres.",
    ],
    highlight: "Un PV de CPC signé par une seule personne, ou par des membres sans rôle réel dans l'achat (deux logisticiens du même bureau qui se signent mutuellement), est l'indicateur le plus corrélé à une fraude d'achat dans les rapports d'investigation. C'est la première chose qu'un auditeur regarde, avant même les prix.",
  },
  {
    type: "concept",
    title: "Les indices de collusion : ce qu'un jeu d'offres vous dit sans le dire",
    body: "La collusion, c'est quand des soumissionnaires censés être concurrents s'entendent. Le cas typique : un même fournisseur dépose deux offres sous deux raisons sociales pour simuler une mise en concurrence et piloter le prix gagnant. La CBA doit faire apparaître chaque signal, même si le prix le plus bas arrange tout le monde.",
    table: {
      columns: ["Indice", "Ce que vous contrôlez", "Source"],
      rows: [
        ["Prix identiques au centime", "Prix totaux et unitaires de deux offres", "Cas du module (source)"],
        ["Mêmes coordonnées de contact", "Nom, téléphone, e-mail, adresse du signataire", "Cas du module (source)"],
        ["Mise en forme identique", "Police, mise en page, fautes, numérotation de devis", "Cas du module (source)"],
        ["Même compte bancaire ou même adresse", "Fiche fournisseur, coordonnées de paiement", "Pratique courante"],
        ["Dépôts simultanés par la même personne", "Registre d'ouverture : heure, mode de réception", "Pratique courante"],
        ["Rotation des gagnants, offre « de couverture » volontairement trop chère", "Historique des mises en concurrence du même groupe", "Pratique courante"],
      ],
    },
    pitfall: "Écarter un signal parce que le prix bas fait gagner du temps. Un signal se documente dans la CBA et se transmet au CPC, puis au référent compliance si nécessaire : jamais « ignoré ».",
  },
  {
    type: "vocabulary",
    terms: [
      { term: "IR / PR (Internal Request / Purchase Requisition)", definition: "La demande d'achat interne émise par le programme, point de départ officiel du cycle. Une demande verbale ou par message informel n'est pas une PR." },
      { term: "RFQ (demande de cotation)", definition: "Consultation sur spécification fixe où le fournisseur donne un prix ferme comparable. Palier 2, 3 devis écrits minimum." },
      { term: "RFP (appel à propositions)", definition: "Consultation où l'approche technique compte autant que le prix : le fournisseur remet une proposition technique et financière, évaluée par pondération." },
      { term: "AO / ITB (appel d'offres)", definition: "Offre ferme sous pli scellé, évaluée sur la conformité stricte aux spécifications. Ouvert (publié largement) ou restreint (fournisseurs présélectionnés)." },
      { term: "AMI (appel à manifestation d'intérêt)", definition: "Recueil de preuves de capacité pour constituer une shortlist. Jamais un prix ferme, jamais un achat." },
      { term: "Contrat-cadre (Framework Agreement)", definition: "Accord fixant à l'avance prix et délais pour une série d'achats récurrents, avec volumes indicatifs non engageants." },
      { term: "CBA (Comparative Bid Analysis)", definition: "L'analyse comparative des offres avec pondération prix et technique. C'est elle que le CPC examine, jamais les offres brutes une par une." },
      { term: "CPC (Procurement Committee)", definition: "Comité de validation des achats au-dessus du seuil de consultation restreinte : 3 membres minimum, séparation des tâches, PV signé." },
      { term: "PV de négociation", definition: "Compte-rendu des points négociés, des concessions de part et d'autre et de l'accord final, avant émission de la PO." },
      { term: "PO (Purchase Order)", definition: "Le bon de commande, engagement contractuel formel envers le fournisseur retenu." },
      { term: "GRN et 3-way match", definition: "Le bon de réception (GRN) est comparé à la PO et à la facture avant tout paiement : c'est le rapprochement à trois." },
      { term: "Purchase splitting", definition: "Fractionnement d'un achat en plusieurs commandes pour rester sous un seuil d'autorisation." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — EXPRIMER ET VALIDER LE BESOIN : L'IR
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 1 — Étape 1 sur 3",
    title: "Remplir l'en-tête et les lignes de l'IR (bon de demande interne)",
    intro: "Le template bon-demande-interne-ir.xlsx contient une feuille « IR » : un en-tête de 4 champs, un tableau de 18 lignes d'articles (lignes 8 à 25) et un bloc de 4 signatures (lignes 27 à 30). C'est le point de départ documentaire du cycle : sans IR approuvée, aucun contact fournisseur. Entrées nécessaires : le besoin chiffré par le programme, la fiche de stock, la ligne budgétaire.",
    steps: [
      {
        title: "Ouvrez le fichier et remplissez l'en-tête",
        actions: [
          "Ouvrez bon-demande-interne-ir.xlsx et enregistrez-le sous « L1_IR-2026-014_Vivres.xlsx ».",
          "Cellule B4 (Objet) : écrivez l'objet en une phrase, avec la durée et le site.",
          "Cellule E4 (IR Numéro) : saisissez le numéro unique selon la numérotation de la mission (IR-2026-014). Un numéro ne se réutilise jamais.",
          "Cellule B5 (Livrer à) : le lieu exact de livraison, car il conditionne le transport du fournisseur. Cellule E5 (Date de livraison demandée) : la date au plus tard de la première livraison.",
        ],
      },
      {
        title: "Saisissez une ligne par article (colonnes A à H)",
        actions: [
          "Colonne A (N° / Article) est pré-numérotée de 1 à 18 : gardez la numérotation.",
          "Colonne B (Code) : le code interne du catalogue de la mission. Colonne C (Description) : le nom précis de l'article, sans marque imposée.",
          "Colonne D (Spécificité) : les caractéristiques mesurables et non négociables (norme, taux, emballage, date limite). C'est ici que Sphère entre dans l'achat.",
          "Colonne E (Qté Demandée) : la quantité exprimée par le programme, avec l'unité écrite dans la description.",
          "Colonnes F, G et H (Qté Sortie, Qté PU, Qté OR) : leurs libellés abrégés ne sont pas définis dans le template. Fixez une convention écrite avec votre magasinier et votre Finance, et appliquez-la partout.",
        ],
      },
    ],
    example: {
      title: "Kerowa — IR-2026-014 remplie (convention Kerowa : Qté Sortie = prélevée sur le stock existant ; Qté PU = à acheter ; Qté OR = reçue, remplie à la livraison)",
      lines: [
        "B4 Objet : Vivres non périssables, accord-cadre 6 mois, centre de stabilisation nutritionnelle et pédiatrie de Gogrial.",
        "E4 IR Numéro : IR-2026-014. B5 Livrer à : Entrepôt Kerowa Santé, Gogrial. E5 Date : 30/04/2026 (1re livraison), puis mensuelle.",
        "Ligne 1 | VIV-001 | Farine de maïs blanche, sacs de 50 kg | Mouture fine, humidité ≤ 13 %, produite depuis moins de 30 jours | 14 500 kg | 0 | 14 500 | (vide)",
        "Ligne 2 | VIV-002 | Haricots secs | Calibre homogène, grains cassés ≤ 5 %, sans insectes | 2 000 kg | 0 | 2 000 | (vide)",
        "Ligne 3 | VIV-003 | Huile végétale enrichie en vitamine A, bidons de 20 L | Étiquette mentionnant l'enrichissement, durée de vie ≥ 9 mois | 1 000 L | 0 | 1 000 | (vide)",
        "Ligne 4 | VIV-004 | Sel iodé | Étiquette mentionnant l'iodation | 150 kg | 0 | 150 | (vide)",
      ],
    },
    result: "Les 4 champs d'en-tête et les 4 lignes d'articles sont remplis, chaque ligne a une spécification mesurable.",
    pitfall: "Écrire « vivres divers » ou « huile » sans enrichissement dans la colonne Spécificité : le fournisseur pourra proposer l'option la moins chère et non conforme, et vous n'aurez aucun critère pour la refuser.",
  },
  {
    type: "process",
    stepLabel: "Procédure 1 — Étape 2 sur 3",
    title: "Faire signer les quatre blocs et contrôler la ligne budgétaire",
    intro: "Le bloc de signatures (lignes 27 à 30) trace la séparation des tâches dès la première étape : Demandeur, Validé par, Responsable Supply, Magasinier / Stock. Chaque bloc a trois lignes : Nom, Signature, Date. L'IR doit être approuvée par le budget holder avant tout contact fournisseur.",
    steps: [
      {
        title: "Vérifiez la ligne budgétaire avant de collecter les signatures",
        actions: [
          "Ouvrez le budget détaillé du bailleur et repérez la ligne qui finance l'alimentation des accompagnants.",
          "Comparez le montant disponible sur cette ligne (budget moins engagements en cours) au montant estimé de l'IR.",
          "Si la ligne est insuffisante, ne lancez rien : demandez au budget holder un réaménagement écrit.",
        ],
      },
      {
        title: "Collectez les quatre signatures, dates comprises",
        actions: [
          "Bloc « Demandeur » (A27:B30) : le responsable programme qui exprime le besoin signe et date.",
          "Bloc « Magasinier / Stock » (G27:H30) : il confirme les stocks (colonne Qté Sortie) et signe.",
          "Bloc « Responsable Supply » (E27:F30) : vous vérifiez spécifications, quantités et cohérence avec la fiche de stock, puis signez.",
          "Bloc « Validé par » (C27:D30) : le budget holder approuve ; une validation électronique datée (e-mail archivé) est acceptable si le budget holder est distant.",
        ],
      },
    ],
    example: {
      title: "Kerowa — signatures de l'IR-2026-014",
      lines: [
        "Demandeur : Dr Rebecca N., signature le 09/03/2026 à 08 h 40.",
        "Magasinier / Stock : Peter A., 09/03/2026 : stock actuel de farine 380 kg, réservé au stock de sécurité, donc Qté Sortie = 0.",
        "Responsable Supply : vous, 09/03/2026, spécifications relues ligne par ligne.",
        "Validé par : Grace M. (budget holder), validation par e-mail le 09/03/2026 à 11 h 15, archivé dans L1. Ligne budgétaire ECHO « alimentation des accompagnants » : 31 400 EUR disponibles pour 12 955 EUR demandés.",
      ],
    },
    result: "Une IR signée, datée, antérieure à toute demande de prix, avec la preuve de la disponibilité budgétaire.",
    pitfall: "Faire signer le bloc « Validé par » après l'envoi de la consultation : la checklist Finance (contrôle 1) exige une validation antérieure à la date de la RFQ. Une régularisation après coup se traduit en non-conformité.",
  },
  {
    type: "process",
    stepLabel: "Procédure 1 — Étape 3 sur 3",
    title: "Estimer le montant total et déterminer le palier sans fractionnement",
    intro: "Le palier se déduit du montant total estimé du besoin, jamais du montant d'une commande isolée ni d'un montant unitaire. Entrées : l'IR, vos prix de référence les plus récents, la liste des achats des 12 derniers mois dans les mêmes familles.",
    steps: [
      {
        title: "Calculez le montant total estimé",
        actions: [
          "Dans un onglet de calcul du même classeur, multipliez la quantité de chaque ligne par un prix de référence daté.",
          "Additionnez : c'est le montant que vous comparerez aux seuils.",
        ],
      },
      {
        title: "Faites le contrôle anti-fractionnement",
        actions: [
          "Dans le registre des flux (module 1), filtrez les achats de la même famille et du même fournisseur sur 12 mois.",
          "Ajoutez-les au besoin actuel si l'objet est de même nature et de la même période de financement.",
          "Notez dans l'IR une phrase : « Montant total estimé : X EUR, palier Y, aucune commande fractionnée. »",
        ],
      },
      {
        title: "Lisez le palier et les signatures applicables",
        actions: [
          "Comparez le total aux seuils de votre mission (ici 1 000, 10 000 et 60 000 EUR).",
          "Relevez la procédure, le comité et le niveau de signature du palier atteint.",
        ],
      },
    ],
    table: {
      columns: ["Ligne", "Calcul", "Montant (EUR)"],
      rows: [
        ["VIV-001 Farine de maïs", "14 500 kg × 0,60", "8 700"],
        ["VIV-002 Haricots secs", "2 000 kg × 0,89", "1 780"],
        ["VIV-003 Huile enrichie", "1 000 L × 2,40", "2 400"],
        ["VIV-004 Sel iodé", "150 kg × 0,50", "75"],
        ["Total estimé", "", "12 955"],
      ],
    },
    example: {
      title: "Kerowa — conclusion de la note de palier",
      lines: [
        "Total estimé 12 955 EUR ≥ 10 000 EUR et < 60 000 EUR : palier 3 de Kerowa (appel d'offres restreint, CBA, passage en CPC, contrat signé par la coordinatrice pays).",
        "Contrôle anti-fractionnement : 3 achats antérieurs au grossiste de Wau (T01, T03, T07), 3 890 EUR en 3 mois. Déjà exécutés et payés, ils ne s'ajoutent pas au besoin à venir, mais ils prouvent un besoin récurrent : d'où un accord-cadre plutôt que des commandes successives.",
        "Interdit : scinder en 2 commandes de 6 478 EUR. Les 6 mois sont attribués en une seule procédure, sur la valeur cumulée.",
      ],
    },
    result: "Livrable L1 terminé : IR signée, montant total estimé, palier justifié et note anti-fractionnement.",
    tip: "Dès que le montant estimé dépasse un seuil de moins de 10 %, écrivez-le dans la note : c'est exactement la situation où l'on est tenté de « faire tenir » l'achat sous le seuil.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — RÉALISER L'ÉTUDE DE MARCHÉ
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 2 — Étape 1 sur 5",
    title: "Constituer la grille de benchmark de prix (recherche documentaire)",
    intro: "Une étude de marché précède la consultation et la nourrit. Elle vous évite de recevoir une offre « anormalement basse » sans le savoir, ou de refuser à tort une offre chère mais juste. Sauter cette étape, c'est lancer une consultation à l'aveugle et souvent la relancer faute d'offres exploitables.",
    steps: [
      {
        title: "Rassemblez les prix comparables",
        actions: [
          "Vos propres achats antérieurs similaires (registre des flux du module 1).",
          "Les achats d'autres projets de votre organisation dans la même zone.",
          "Les prix partagés en réunion de coordination inter-ONG, et les catalogues fournisseurs publics quand ils existent.",
        ],
      },
      {
        title: "Consignez chaque prix dans la grille de benchmark",
        actions: [
          "Créez un classeur « L2_Benchmark_prix.xlsx » avec les colonnes : Article | Spécification | Prix | Unité | Date du prix | Source | Lieu | Fiabilité.",
          "Une ligne par prix, jamais de prix sans date ni source : un prix non daté n'a aucune valeur six mois plus tard.",
          "Écartez les prix douteux et dites pourquoi dans la colonne Fiabilité.",
        ],
      },
    ],
    table: {
      columns: ["Article", "Prix", "Date", "Source", "Fiabilité"],
      rows: [
        ["Farine de maïs + haricots (mix 87/13), Wau", "638 EUR/t", "10/01/2026", "Achat Kerowa T03, 3 devis", "Élevée"],
        ["Farine de maïs, Wau", "0,60 EUR/kg", "12/03/2026", "Prix partagés en coordination inter-ONG", "Moyenne"],
        ["Haricots secs, Wau", "0,89 EUR/kg", "12/03/2026", "Idem, confirmé par une autre ONG", "Moyenne"],
        ["Huile enrichie vitamine A, rendue Wau", "2,40 EUR/L", "05/03/2026", "Catalogue d'un distributeur de Juba + transport", "Moyenne"],
        ["Farine de maïs + haricots, Wau", "842 EUR/t", "18/02/2026", "Achat Kerowa T07 : 1 devis, validateur inconnu", "Écartée"],
      ],
    },
    result: "Une grille de benchmark datée et sourcée, qui donne la fourchette de prix : farine 0,58 à 0,64 EUR/kg, haricots 0,85 à 0,95 EUR/kg.",
    pitfall: "Utiliser T07 comme prix de référence parce qu'il est « le plus récent » : un achat sans mise en concurrence ni validateur identifié n'a aucune valeur de benchmark.",
  },
  {
    type: "process",
    stepLabel: "Procédure 2 — Étape 2 sur 5",
    title: "Identifier et présélectionner les fournisseurs potentiels",
    intro: "Listez les fournisseurs plausibles au lieu de les deviner. Pour un marché mal connu ou un achat complexe à venir, c'est le moment de décider d'un AMI, plutôt que de se fier à une liste de fournisseurs non vérifiée.",
    steps: [
      {
        title: "Cherchez dans quatre sources",
        actions: [
          "La chambre de commerce locale.",
          "Les associations professionnelles du secteur concerné (négociants en céréales, transport, BTP, équipement médical selon le besoin).",
          "Les répertoires sectoriels existants.",
          "Les contacts partagés par les logisticiens d'autres ONG installées dans la zone : souvent plus fiables qu'un annuaire en ligne obsolète.",
        ],
      },
      {
        title: "Construisez la liste longue et décidez de l'AMI",
        actions: [
          "Un tableau : nom, localisation, produits, source de l'information, déjà consulté par Kerowa (oui/non).",
          "Si moins de 3 fournisseurs sont déjà connus et vérifiés, ou si le marché est mal connu, lancez un AMI (procédure 3).",
        ],
      },
    ],
    table: {
      columns: ["Fournisseur", "Localisation", "Source", "Déjà consulté ?"],
      rows: [
        ["Grossiste Wau — marché central (A)", "Wau", "Historique Kerowa (T01, T03, T07)", "Oui"],
        ["Wau Négoce Alimentaire (B)", "Wau", "Signalé par Peter A.", "Non"],
        ["Coopérative Agro-Warrap (C)", "Wau", "Signalée par une autre ONG", "Non"],
        ["Marché Nord Trading (D)", "Kuajok", "Chambre de commerce", "Non"],
        ["Distributeur Alimentaire du Nil (E)", "Juba", "Association des négociants", "Non"],
      ],
    },
    result: "Une liste longue de 5 fournisseurs, dont 4 jamais consultés, qui justifie un AMI.",
    tip: "Notez systématiquement qui vous a recommandé un fournisseur : si deux « recommandations » viennent de la même personne, ce n'est pas une vérification indépendante.",
  },
  {
    type: "process",
    stepLabel: "Procédure 2 — Étape 3 sur 5",
    title: "Sonder les prix sans engagement et envoyer la fiche fournisseur (sections 1 à 4)",
    intro: "Contactez directement quelques fournisseurs pour un ordre de grandeur de prix, par téléphone, visite terrain ou e-mail informel. Ce sondage n'engage aucune des deux parties : il ne crée aucune obligation de dépôt d'offre et ne vous engage pas à consulter le fournisseur plus tard. La fiche-etude-marche-fournisseur.xlsx est une simple demande d'information, sans le moindre prix ferme.",
    steps: [
      {
        title: "Menez le sondage de prix informel",
        actions: [
          "Dites-le dès la première phrase : « Il s'agit d'une étude de marché, pas d'une consultation officielle. »",
          "Demandez un ordre de grandeur pour votre panier et notez-le, avec date et interlocuteur, dans la grille de benchmark.",
          "Ne présentez jamais le sondage comme une mise en concurrence et ne donnez pas votre budget.",
        ],
      },
      {
        title: "Envoyez la fiche ; le fournisseur remplit les sections 1 à 4",
        actions: [
          "Section 1 « Identification » : nom complet (A5), description des produits (A6), adresse postale (A7), n° d'enregistrement (A8) et n° de TVA (D8), nom du propriétaire (A9).",
          "Section 2 « Contacts » : Contact 1 et Contact 2, avec Prénom, Nom, Téléphone, Email, Position.",
          "Section 3 « Données financières » : devise de référence, chiffre d'affaires des années N-1, N-2 et N-3, nombre d'employés.",
          "Section 4 « Trois clients majeurs » : nom du client, pays, % du chiffre d'affaires de chacun.",
        ],
      },
    ],
    example: {
      title: "Kerowa — fiche reçue de Coopérative Agro-Warrap (extrait, fictif)",
      lines: [
        "1. Nom : Coopérative Agro-Warrap ; produits : farine de maïs, haricots, huile, sel ; enregistrement : 2019 (n° fictif RC-WRP-0417) ; propriétaire : coopérative de 120 membres.",
        "2. Contact 1 : Mary — Gérante — téléphone direct et e-mail professionnel. Contact 2 : responsable commercial.",
        "3. Devise : EUR ; CA N-1 : 190 000 ; N-2 : 150 000 ; N-3 : 110 000 ; 14 employés.",
        "4. Clients majeurs : une agence onusienne (35 %), une ONG internationale (20 %), un hôpital régional (10 %).",
      ],
    },
    result: "Fiches envoyées à 5 fournisseurs, avec sondage de prix consigné dans le benchmark.",
    pitfall: "Demander un prix ferme sur la fiche ou promettre « on vous consultera » : vous créez une attente, voire une réclamation, et vous brouillez la frontière avec la consultation officielle.",
  },
  {
    type: "process",
    stepLabel: "Procédure 2 — Étape 4 sur 5",
    title: "Contrôler la fiche fournisseur retournée (sections 5 à 8)",
    intro: "Les sections 5 à 8 recueillent les modalités de paiement, de livraison, les références et l'acceptation des Conditions Générales d'Achat. Elles servent à décider si un fournisseur peut être invité plus tard. La qualification formelle (dossier documentaire, screening d'inéligibilité) relève du Module 4 : un fournisseur peut apparaître dans dix études de marché sans jamais être qualifié.",
    steps: [
      {
        title: "Section 5 « Informations de paiement »",
        actions: [
          "Accepte le virement bancaire ? (B29, liste Oui / Non). Compte bancaire 1 et 2 : Banque, Adresse de la banque, N° de compte, SWIFT / BIC, Devise.",
          "Autres modes acceptés (chèque, cash, mobile money), modalités de paiement (avant, à ou après livraison) et délai de paiement en nombre de jours.",
          "Rappelez le fournisseur sur un numéro déjà connu pour confirmer ses coordonnées bancaires avant tout enregistrement : c'est le contrôle anti-fraude le plus simple.",
        ],
      },
      {
        title: "Sections 6 à 8 « Livraison, références, CGA »",
        actions: [
          "Section 6 : commande par e-mail possible ? (B41, Oui / Non), adresse e-mail des commandes, délai maximum de livraison en jours.",
          "Section 7 : Référence 1 et Référence 2 (idéalement d'autres ONG) avec organisation, contact, téléphone, e-mail. Appelez au moins une référence.",
          "Section 8 : le fournisseur signe l'acceptation des CGA de l'organisation (signature, lieu, nom et fonction, date).",
        ],
      },
    ],
    example: {
      title: "Kerowa — contrôle des fiches reçues (4 retours sur 5)",
      lines: [
        "A : complète, 3 références dont 2 ONG, virement oui, délai paiement 15 jours, livraison 7 jours, CGA signées.",
        "B : complète, 2 références, paiement à la livraison, délai 5 jours, CGA signées.",
        "C : complète, 3 références, délai de paiement 30 jours, livraison 10 jours, CGA signées ; référence appelée le 12/03 : ponctuelle, bons retours.",
        "D : RIB au nom d'une personne physique, aucune référence : à clarifier avant toute suite. E : pas de réponse.",
      ],
    },
    result: "Quatre fiches contrôlées ; un fournisseur (D) signalé pour compte bancaire au nom d'une personne physique.",
    pitfall: "Enregistrer un RIB reçu par message sans le confirmer : le changement de coordonnées bancaires est une fraude de paiement classique.",
  },
  {
    type: "process",
    stepLabel: "Procédure 2 — Étape 5 sur 5",
    title: "Rédiger la note d'étude de marché",
    intro: "La note synthétise en une page ce que vous avez appris. Elle accompagne la PR et sert de référence quand le CPC se demande, plus tard, si les offres reçues sont cohérentes avec le marché réel.",
    steps: [
      {
        title: "Écrivez les quatre blocs de la note",
        actions: [
          "Fourchette de prix observée (benchmark), avec les dates et sources.",
          "Fournisseurs identifiés et leur capacité apparente (volume, stockage, références).",
          "Spécification technique réaliste déduite du marché : ce qui est disponible et ce qui ne l'est pas.",
          "Recommandation : procédure envisagée (AMI, AO restreint, accord-cadre) et risques.",
        ],
      },
      {
        title: "Datez, signez et classez",
        actions: [
          "Signez la note (vous) et faites-la viser par le responsable programme.",
          "Rangez-la dans L2 avec le benchmark et les fiches fournisseurs ; elle sera la pièce n° 2 du dossier d'achat.",
        ],
      },
    ],
    example: {
      title: "Kerowa — note d'étude de marché du 13/03/2026 (extrait)",
      lines: [
        "Prix : farine de maïs 0,58 à 0,64 EUR/kg, haricots secs 0,85 à 0,95 EUR/kg, huile enrichie 2,40 EUR/L rendue Wau, sel iodé 0,50 EUR/kg (sources et dates en annexe).",
        "Fournisseurs : 5 identifiés, 4 fiches reçues ; capacité mensuelle déclarée de 3 à 12 t ; un seul fournisseur actuel, A, couvre aujourd'hui 100 % du flux.",
        "Spécification : farine et haricots disponibles localement ; huile enrichie et sel iodé disponibles chez 2 fournisseurs sur 4, à vérifier par échantillon.",
        "Recommandation : AMI pour qualifier les fournisseurs peu connus, puis AO restreint avec accord-cadre de 6 mois, valeur estimée 12 955 EUR.",
      ],
    },
    result: "Livrable L2 terminé : note d'étude de marché, grille de benchmark datée, 4 fiches fournisseurs contrôlées.",
    tip: "Écrivez dans la note ce que vous n'avez pas pu vérifier. Un auditeur fait confiance à une note qui montre ses limites.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — LANCER ET TRAITER UN AMI
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 3 — Étape 1 sur 3",
    title: "Rédiger et publier l'avis d'AMI",
    intro: "Un AMI recueille des preuves de capacité pour construire, en amont, la liste des fournisseurs autorisés à participer à la procédure formelle. Ce n'est pas une procédure d'achat. Quand le lancer : marché mal connu, achat complexe à venir (palier 3 ou 4), ou en amont d'un contrat-cadre, pour que la présélection repose sur une base documentée et non sur les seuls contacts déjà connus.",
    steps: [
      {
        title: "Rédigez l'avis avec huit rubriques",
        actions: [
          "Objet et contexte du besoin, sans prix ni quantités fermes.",
          "Qui peut répondre : conditions d'éligibilité (existence légale, domaine d'activité).",
          "Critères de qualification qui seront appliqués, écrits dès l'avis.",
          "Documents demandés (voir exemple), la fiche fournisseur incluse.",
          "Date et heure limites, adresse e-mail unique de dépôt, contact pour les questions.",
          "Mention obligatoire : l'AMI ne constitue ni un engagement d'achat ni une promesse d'attribution, et aucun prix n'est demandé.",
        ],
      },
      {
        title: "Publiez et tracez",
        actions: [
          "Envoyez l'avis aux 5 fournisseurs de la liste longue et affichez-le au bureau et sur les canaux de coordination.",
          "Gardez la preuve d'envoi (e-mails) et la date de publication : première pièce du dossier AMI.",
        ],
      },
    ],
    example: {
      title: "Kerowa — avis d'AMI du 16/03/2026 (extrait)",
      lines: [
        "Objet : AMI-2026-001, présélection de fournisseurs de vivres non périssables pour un accord-cadre de 6 mois, livraison à Gogrial.",
        "Critères (pass/fail) : registre de commerce valide ; chiffre d'affaires N-1 ≥ 100 000 EUR ; au moins 2 références vérifiables d'approvisionnement alimentaire de ≥ 3 t par mois ; capacité de stockage ; fiche fournisseur et CGA signées.",
        "Dépôt : par e-mail à achats.gogrial@kerowa.example avant le lundi 23/03/2026 à 12 h 00 ; questions jusqu'au jeudi 19/03.",
        "Mention : cet avis ne constitue ni une commande ni un engagement d'attribution.",
      ],
    },
    result: "Avis publié le 16/03, tracé, avec critères de qualification connus de tous les candidats.",
    pitfall: "Écrire dans l'AMI « merci d'indiquer vos prix » : vous transformez l'AMI en RFQ déguisée et vous perdez la possibilité de lancer ensuite un AO propre.",
  },
  {
    type: "process",
    stepLabel: "Procédure 3 — Étape 2 sur 3",
    title: "Recevoir les manifestations et les évaluer sans regarder de prix",
    intro: "Évaluer un AMI, c'est qualifier, pas comparer. Pas de prix à ce stade : seulement l'existence légale, la capacité financière et technique déclarée, et l'expérience démontrable sur des prestations similaires.",
    steps: [
      {
        title: "Enregistrez les réponses à l'arrivée",
        actions: [
          "Un registre : date, heure, fournisseur, mode de réception, pièces reçues.",
          "Aucune réponse ouverte seule en dehors de l'heure fixée : vous et l'assistante achats ouvrez ensemble.",
        ],
      },
      {
        title: "Appliquez la grille de qualification critère par critère",
        actions: [
          "Un tableau : une ligne par candidat, une colonne par critère (pass/fail) et une colonne « Pièce vérifiée ».",
          "Vérifiez réellement les pièces : appel à une référence, contrôle du registre de commerce.",
          "Un critère non prouvé vaut « non » : ne comblez pas une lacune par supposition.",
        ],
      },
    ],
    table: {
      columns: ["Candidat", "Registre valide", "CA N-1 ≥ 100 000", "≥ 2 références", "Stockage", "Fiche + CGA", "Résultat"],
      rows: [
        ["A — Grossiste Wau", "Oui", "Oui (420 000)", "Oui (5)", "Oui", "Oui", "Qualifié"],
        ["B — Wau Négoce Alimentaire", "Oui", "Oui (260 000)", "Oui (2)", "Oui", "Oui", "Qualifié"],
        ["C — Coopérative Agro-Warrap", "Oui", "Oui (190 000)", "Oui (3)", "Oui", "Oui", "Qualifié"],
        ["D — Marché Nord Trading", "Non", "Non (40 000)", "Non (0)", "Oui", "Oui", "Non qualifié"],
        ["E — Distributeur du Nil", "—", "—", "—", "—", "—", "Pas de réponse"],
      ],
    },
    result: "Quatre manifestations reçues et évaluées le 24/03 ; trois candidats qualifiés, un non qualifié, un sans réponse.",
    pitfall: "Écarter D « à l'instinct » : sans grille écrite, le rejet n'est pas défendable si D se plaint. Chaque rejet est motivé par un critère publié dans l'avis.",
  },
  {
    type: "process",
    stepLabel: "Procédure 3 — Étape 3 sur 3",
    title: "Documenter la décision de shortlist avec la même rigueur qu'un CPC",
    intro: "La décision « qualifié ou non qualifié pour la shortlist » se documente comme une décision de CPC. Elle est la justification de la liste restreinte qui recevra l'AO : sans elle, un auditeur peut y voir un favoritisme.",
    steps: [
      {
        title: "Rédigez la note de shortlist",
        actions: [
          "Rappelez l'objet de l'AMI, les dates et le nombre de manifestations reçues.",
          "Joignez la grille de qualification et la liste des qualifiés.",
          "Faites signer la note par deux personnes au minimum (vous et le responsable finance).",
        ],
      },
      {
        title: "Notifiez tous les candidats",
        actions: [
          "Informez chaque candidat, qualifié ou non, par écrit, avec le motif pour les non qualifiés.",
          "Précisez aux qualifiés que la shortlist n'est pas une attribution : un AO suivra, avec le dossier complet pour tous.",
        ],
      },
    ],
    example: {
      title: "Kerowa — note de shortlist du 26/03/2026 (extrait)",
      lines: [
        "4 manifestations reçues sur 5 invitations ; 3 candidats qualifiés : A, B, C ; D non qualifié (registre de commerce non valide, CA inférieur au seuil, aucune référence).",
        "Signatures : SCM (vous), Joseph K. (finance). Notification envoyée le 26/03 à 16 h.",
        "Suite : AO restreint AOR-2026-003 envoyé aux 3 qualifiés le 27/03.",
      ],
    },
    result: "Livrable L3 terminé : avis d'AMI, registre, grille de qualification, note de shortlist, notifications.",
    tip: "Gardez la shortlist « vivante » : si un qualifié ne répond plus aux appels d'offres, notez-le ; la gestion continue des fournisseurs relève du Module 4.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — CHOISIR LA PROCÉDURE ET FIGER LES CRITÈRES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 4 — Étape 1 sur 3",
    title: "Choisir l'instrument avec les trois questions de décision",
    intro: "Le montant fixe le palier, mais le bon instrument dépend aussi de la nature du besoin. Trois questions, dans l'ordre, vous donnent le bon outil sans improvisation. Entrées : IR, note de palier, note d'étude de marché.",
    steps: [
      {
        title: "Répondez aux trois questions",
        actions: [
          "Question 1, la spécification est-elle complète et figée sans consulter personne ? Oui : RFQ ou AO. Non, plusieurs solutions possibles : RFP.",
          "Question 2, quel palier ? Palier 2 : RFQ ; palier 3 : AO restreint ou RFP ; palier 4 : AO ouvert.",
          "Question 3, le besoin est-il récurrent sur une période donnée ? Oui : prévoyez un contrat-cadre, attribué une fois sur la valeur cumulée.",
          "Question 0 en amont : le marché est-il connu ? Sinon, AMI.",
        ],
      },
      {
        title: "Écrivez la décision et sa justification",
        actions: [
          "Une phrase par question, avec la référence à la note d'étude de marché.",
        ],
      },
    ],
    table: {
      columns: ["Besoin Kerowa", "Spécification figée ?", "Palier", "Récurrent ?", "Instrument retenu"],
      rows: [
        ["Vivres non périssables 6 mois (12 955 EUR)", "Oui", "3 (10 000 à < 60 000)", "Oui", "AO restreint (après AMI) + contrat-cadre"],
        ["Transport routier Juba → Gogrial 12 mois (~46 000 EUR)", "Non : plan de rotation en saison des pluies, suivi, PSEA", "3", "Oui", "RFP + contrat-cadre"],
        ["Petit matériel d'entrepôt (269 EUR)", "Oui", "1", "Non", "Achat direct, avance de caisse"],
        ["Autre transporteur régional (marché inconnu)", "Non", "n/a", "Futur", "AMI"],
      ],
    },
    result: "Instrument choisi et justifié : AO restreint + accord-cadre pour les vivres.",
    pitfall: "Choisir la RFQ « parce que c'est plus rapide » alors que le palier impose un AO : c'est le premier écart qu'un audit bailleur relève.",
  },
  {
    type: "process",
    stepLabel: "Procédure 4 — Étape 2 sur 3",
    title: "Construire la grille de critères d'évaluation",
    intro: "Des critères définis après réception des offres, même de bonne foi, ouvrent la porte à un ajustement en faveur d'un fournisseur déjà pressenti. La grille se construit avant l'envoi, avec trois blocs : les critères éliminatoires, les critères pondérés, les barèmes de notation.",
    steps: [
      {
        title: "Fixez les critères éliminatoires (oui / non)",
        actions: [
          "Reprenez les spécifications minimales non négociables de l'IR (colonne Spécificité).",
          "Ajoutez les conditions administratives : offre signée, validité minimale, CGA acceptées.",
        ],
      },
      {
        title: "Fixez les poids et les barèmes, total 100",
        actions: [
          "Répartissez 100 points entre prix, conformité technique, délai et conditions de paiement, selon l'enjeu.",
          "Écrivez la formule du prix : points prix = poids × (prix conforme le plus bas ÷ prix de l'offre).",
          "Écrivez un barème chiffré pour chaque critère non prix, pour que deux évaluateurs notent de la même façon.",
        ],
      },
    ],
    table: {
      columns: ["Critère", "Poids", "Barème"],
      rows: [
        ["Prix (total conforme)", "60", "60 × (prix conforme le plus bas ÷ prix de l'offre)"],
        ["Conformité technique et échantillons", "20", "Échantillons conformes (12), entrepôt visité (4), références vérifiées (4)"],
        ["Délai de livraison", "10", "≤ 7 jours : 10 ; 8 à 10 jours : 8 ; 11 à 14 jours : 5 ; > 14 jours : 0"],
        ["Conditions de paiement", "10", "≥ 30 jours après livraison : 10 ; 15 à 29 : 7 ; 1 à 14 : 4 ; à la livraison : 0"],
        ["Total", "100", "Éliminatoires : huile enrichie vitamine A, sel iodé, validité ≥ 2 mois, CGA acceptées"],
      ],
    },
    result: "Grille écrite : éliminatoires, poids totalisant 100, barèmes chiffrés, formule du prix.",
    tip: "Évitez les critères que vous ne pourrez pas vérifier : un critère que personne ne contrôle devient un levier de manipulation.",
  },
  {
    type: "process",
    stepLabel: "Procédure 4 — Étape 3 sur 3",
    title: "Geler les critères : note signée avant tout envoi",
    intro: "Figer les critères est une règle non négociable du cycle : rédigés, validés en interne et datés avant l'envoi de la consultation. C'est ce qui empêche le choix après coup.",
    steps: [
      {
        title: "Rédigez la note de choix de procédure et de gel des critères",
        actions: [
          "Rappelez le besoin, le montant total estimé, le palier, l'instrument retenu et sa justification.",
          "Annexez la grille de critères et la liste des fournisseurs à inviter (la shortlist).",
          "Précisez le calendrier de la procédure.",
        ],
      },
      {
        title: "Faites signer et archivez avant l'envoi",
        actions: [
          "Signataires : vous, le responsable finance et le demandeur, avec date et heure.",
          "Archivez la note dans L4 avant d'envoyer la moindre invitation, puis reportez les critères tels quels dans le dossier de consultation.",
        ],
      },
    ],
    example: {
      title: "Kerowa — note de gel signée le 26/03/2026 à 17 h",
      lines: [
        "Besoin : IR-2026-014 ; total estimé 12 955 EUR ; palier 3 ; instrument : AO restreint AOR-2026-003, suivi d'un accord-cadre de 6 mois.",
        "Critères : 4 éliminatoires, 4 critères pondérés (60 / 20 / 10 / 10), barèmes en annexe.",
        "Calendrier : envoi 27/03 ; questions jusqu'au 01/04 ; clôture 07/04 à 12 h ; ouverture à 14 h ; CPC le 10/04.",
        "Signatures : SCM, Joseph K. (finance), Dr Rebecca N. (demandeur).",
      ],
    },
    result: "Livrable L4 terminé : note de choix de procédure et de gel des critères, signée et antérieure à l'envoi.",
    pitfall: "Modifier une spécification ou un poids après réception des offres pour faire gagner un fournisseur déjà pressenti : c'est une manipulation difficile à distinguer d'une fraude assumée aux yeux d'un enquêteur.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — LANCER LA CONSULTATION (RFQ, AO RESTREINT)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 5 — Étape 1 sur 4",
    title: "Préparer le formulaire de cotation : l'onglet RFQ côté demandeur",
    intro: "Le classeur grille-rfq-demande-cotation.xlsx a deux onglets : « Mode d'emploi » (à lire une fois) et « RFQ » (le formulaire). Avant d'aller sur le marché ou d'envoyer les e-mails, le demandeur remplit sa partie. Pour l'AO restreint de Kerowa, ce formulaire sert de bordereau de prix, complété par le dossier d'AO (étape 3).",
    steps: [
      {
        title: "Remplissez les champs du demandeur",
        actions: [
          "Enregistrez le classeur sous « L5_RFQ_AOR-2026-003_Vivres.xlsx » et lisez l'onglet « Mode d'emploi » (3 temps : demandeur, fournisseur, report en CBA).",
          "Cellule B4 (Matériel) : la famille d'articles (électrique, construction, WASH, papeterie, vivres…) à la place de « [famille d'articles] ».",
          "Cellule B19 (Adresse de livraison) : remplacez « [Base] » par l'adresse exacte ; ne l'oubliez jamais, elle conditionne les frais de transport.",
          "Ligne 21, tableau des articles (lignes 22 à 31) : Article, Quantité, Unité, Code interne, Description de l'article (la plus précise possible, photos jointes si nécessaire). Laissez vides Prix unitaire (colonne F) et Commentaires.",
          "Ligne 34 : Date de la RFQ (date de création) et Date de clôture (délai laissé au fournisseur pour répondre).",
        ],
      },
      {
        title: "Verrouillez ce que le fournisseur ne doit pas toucher",
        actions: [
          "La colonne G (Prix total) contient une formule qui calcule Quantité × Prix unitaire dès que les deux sont remplis, et G32 additionne : ne la remplacez jamais par une valeur.",
          "Protégez la feuille (Révision > Protéger la feuille) en laissant déverrouillées les cellules du fournisseur.",
        ],
      },
    ],
    example: {
      title: "Kerowa — onglet RFQ côté demandeur",
      lines: [
        "B4 : Vivres non périssables. B19 : Entrepôt Kerowa Santé, Gogrial.",
        "Ligne 22 | Farine de maïs blanche, sac de 50 kg | 14 500 | kg | VIV-001 | Mouture fine, humidité ≤ 13 %, production < 30 jours",
        "Ligne 23 | Haricots secs | 2 000 | kg | VIV-002 | Calibre homogène, grains cassés ≤ 5 %",
        "Ligne 24 | Huile enrichie vitamine A, bidon 20 L | 1 000 | L | VIV-003 | Étiquette mentionnant l'enrichissement, DLC ≥ 9 mois",
        "Ligne 25 | Sel iodé | 150 | kg | VIV-004 | Étiquette mentionnant l'iodation",
        "Date de la RFQ : 27/03/2026. Date de clôture : 07/04/2026, 12 h 00.",
      ],
    },
    result: "Un formulaire dont les champs « demandeur » sont complets et dont les formules sont protégées.",
    pitfall: "Écrire la marque d'un fournisseur dans la description : vous orientez l'offre et affaiblissez la mise en concurrence. Décrivez la performance, pas la marque.",
  },
  {
    type: "process",
    stepLabel: "Procédure 5 — Étape 2 sur 4",
    title: "Ce que le fournisseur remplit : champs, validité et pièces obligatoires",
    intro: "Le fournisseur renseigne l'onglet RFQ de son côté. Vous devez savoir ce que chaque champ engage, car c'est là que se jouent les écarts entre offres comparables.",
    steps: [
      {
        title: "Lisez les champs fournisseur (lignes 7 à 17)",
        actions: [
          "Lignes 7 à 11, informations du fournisseur : nom de la société, nom du contact, téléphone, adresse, e-mail.",
          "Ligne 13 : frais de transport inclus (liste Oui / Non, colonne D) ; ligne 14 : frais de transport si non inclus, à préciser séparément.",
          "Ligne 15 : conditions de paiement, en jours APRÈS livraison. Ligne 16 : validité de l'offre, en mois. Ligne 17 : délai de livraison, en jours après PO.",
          "Colonne F : prix unitaire par article ; colonne H : commentaires et observations (substituts proposés, quantité minimale de livraison, annexe technique).",
        ],
      },
      {
        title: "Exigez la forme de retour",
        actions: [
          "Si la cotation n'est pas envoyée par e-mail, le fournisseur doit signer et tamponner le formulaire papier (A35 : nom du contact, D35 Signature, A36 Date, D36 Cachet).",
          "Conservez la cotation signée : c'est une pièce obligatoire du dossier d'achat archivé.",
        ],
      },
    ],
    example: {
      title: "Kerowa — formulaire retourné par Coopérative Agro-Warrap",
      lines: [
        "Transport inclus : Oui. Paiement : 30 jours après livraison. Validité : 3 mois. Délai de livraison : 10 jours après PO.",
        "Farine 0,57 EUR/kg ; haricots 0,95 EUR/kg ; huile enrichie 2,38 EUR/L ; ligne sel iodé laissée vide.",
        "Cachet et signature de la gérante, date du 06/04/2026.",
      ],
    },
    result: "Pour chaque offre : conditions de paiement, de livraison, validité et prix sont lisibles sur le même formulaire, signé.",
    tip: "Les champs « paiement en jours après livraison » et « délai de livraison » sont des critères de votre grille : les fournisseurs peuvent les remplir différemment (avant, à, après). Comparez à unité égale.",
  },
  {
    type: "process",
    stepLabel: "Procédure 5 — Étape 3 sur 4",
    title: "Assembler le dossier d'AO restreint",
    intro: "Une RFQ tient sur le formulaire. Un AO restreint demande un dossier plus complet, communiqué identiquement à tous les invités : c'est ce dossier qui vous protège si un fournisseur écarté conteste. Entrées : IR, note de gel des critères, shortlist.",
    steps: [
      {
        title: "Rassemblez les sept pièces du dossier",
        actions: [
          "Lettre d'invitation : objet, référence AOR-2026-003, calendrier, contact unique pour les questions.",
          "Instructions aux soumissionnaires : langue, devise, validité minimale, mode de dépôt, interdiction de contact pendant la procédure.",
          "Spécifications techniques de l'IR, sans marque.",
          "Bordereau de prix : la grille RFQ de l'étape 1.",
          "Critères d'évaluation et pondération, tels que figés en procédure 4.",
          "Conditions générales d'achat et code de conduite (PSEA, lutte contre la fraude et la corruption).",
          "Projet de contrat-cadre (trame partie B), pour que personne ne découvre des conditions après coup.",
        ],
      },
      {
        title: "Organisez le dépôt sous pli scellé ou par e-mail verrouillé",
        actions: [
          "Dépôt papier : enveloppe scellée portant la mention « AOR-2026-003 — NE PAS OUVRIR avant le 07/04/2026 à 14 h 00 », reçue par l'assistante achats qui date et paraphe l'enveloppe.",
          "Dépôt par e-mail : une boîte dédiée dont les messages ne sont ouverts qu'à l'ouverture, en présence de deux personnes.",
        ],
      },
    ],
    result: "Dossier d'AO complet de 7 pièces, identique pour les trois invités, avec un mode de dépôt qui garantit la confidentialité des offres.",
    pitfall: "Envoyer un dossier différent à chaque fournisseur (une spécification précisée à l'oral à l'un d'eux) : toute précision doit passer par un addendum écrit communiqué à tous.",
  },
  {
    type: "process",
    stepLabel: "Procédure 5 — Étape 4 sur 4",
    title: "Envoyer, tracer et gérer les questions-réponses",
    intro: "Envoyez la consultation à un minimum de 3 fournisseurs qualifiés (davantage pour un AO), avec un délai de réponse identique pour tous et les mêmes spécifications. Documenter la liste des fournisseurs contactés et la date d'envoi est la première pièce du dossier d'archivage.",
    steps: [
      {
        title: "Envoyez et conservez la preuve",
        actions: [
          "Envoyez le même jour, à la même heure et par le même canal, à tous les invités, avec accusé de réception demandé.",
          "Archivez dans L5 : la liste des fournisseurs contactés, les e-mails d'envoi, les accusés de réception.",
        ],
      },
      {
        title: "Traitez les questions de façon identique pour tous",
        actions: [
          "Un seul canal : l'adresse e-mail de la lettre d'invitation. Pas de réponse orale.",
          "Rédigez chaque réponse par écrit, anonymisée, et envoyez-la à tous les invités à la date prévue.",
          "Si une réponse modifie la spécification ou le calendrier, publiez un addendum numéroté et, si nécessaire, repoussez la clôture pour tous.",
        ],
      },
    ],
    example: {
      title: "Kerowa — journal de la consultation AOR-2026-003",
      lines: [
        "27/03 à 09 h 00 : dossier envoyé à A, B et C ; accusés de réception reçus entre 09 h 12 et 10 h 40.",
        "30/03 : question de B (peut-on proposer une huile non enrichie à moindre coût ?). Réponse du 02/04 à tous : non, la vitamine A est éliminatoire.",
        "31/03 : question de C (livraison en 2 fois acceptée ?). Réponse du 02/04 à tous : oui, la première livraison avant le 30/04, puis mensuelle.",
        "Aucun addendum ; clôture maintenue au 07/04 à 12 h 00.",
      ],
    },
    result: "Livrable L5 (partie consultation) terminé : dossier d'AO, preuves d'envoi, journal des questions-réponses.",
    pitfall: "Répondre au téléphone à la question d'un fournisseur « pour aller vite » : vous créez une asymétrie d'information, exactement ce que les autres soumissionnaires et l'auditeur sanctionneront.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — RÉDIGER UNE RFP (TRAME PARTIE A)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 6 — Étape 1 sur 3",
    title: "RFP, sections A1 et A2 : le contexte et la solution recherchée",
    intro: "Une RFQ compare des prix sur une spécification déjà figée ; une RFP compare des façons différentes de résoudre un même problème, quand la meilleure réponse technique n'est pas connue à l'avance (forage manuel ou motorisé, distribution directe ou cash). La partie A du gabarit trame-rfp-et-contrat-cadre.docx suit six sections, A1 à A6. Kerowa l'applique à un second besoin : le transport routier, dont l'approche technique compte autant que le prix.",
    steps: [
      {
        title: "A1 « Contexte et objectif du besoin »",
        actions: [
          "Décrivez la situation qui motive l'achat : zone, population concernée, urgence.",
          "Ne présupposez pas la solution technique : n'écrivez pas « location de camions » si la solution peut être un service au tonnage.",
        ],
      },
      {
        title: "A2 « Description de la solution recherchée »",
        actions: [
          "Ce que le résultat final doit permettre, pas une spécification figée.",
          "Contraintes non négociables : délai, zone de livraison, normes sectorielles applicables.",
          "Ce qui reste ouvert à la proposition technique du fournisseur.",
        ],
      },
    ],
    example: {
      title: "Kerowa — RFP-2026-004 « Transport routier Juba / Wau → Gogrial, 12 mois » (A1 et A2)",
      lines: [
        "A1 : Gogrial est approvisionné depuis Juba (médicaments, matériel) et Wau (vivres) par un transporteur unique ; la route se dégrade entre mai et octobre. Besoin : sécuriser environ 20 t par mois pendant 12 mois (≈ 46 000 EUR estimés).",
        "A2 résultat : livraison des marchandises à l'entrepôt de Gogrial en moins de 4 jours après chargement, avec un taux de livraison dans les délais ≥ 95 %.",
        "A2 non négociable : assurance marchandises, waybill signé à l'arrivée, code de conduite PSEA signé par chaque chauffeur (liste nominative).",
        "A2 ouvert : type de flotte, tarification (à la tonne ou à la rotation), plan de continuité en saison des pluies, suivi par géolocalisation, stockage relais.",
      ],
    },
    result: "Les sections A1 et A2 sont rédigées : un besoin à résoudre, pas une solution imposée.",
    pitfall: "Rédiger A2 comme un cahier des charges d'AO (nombre de camions, tonnage par véhicule imposés) : vous retombez sur une RFQ et vous privez la RFP de son intérêt.",
  },
  {
    type: "process",
    stepLabel: "Procédure 6 — Étape 2 sur 3",
    title: "RFP, section A3 : les critères techniques et financiers pondérés",
    intro: "La section A3 est un tableau à deux colonnes : « Critères techniques et poids (%), à figer avant réception des offres » et « Critère financier et poids (%), la somme des poids doit faire 100 ». C'est la partie qui décidera du classement : elle se rédige avec les mêmes règles de gel que pour un AO.",
    steps: [
      {
        title: "Listez les critères techniques et leurs poids",
        actions: [
          "Un critère = une question qu'un évaluateur peut vérifier sur une pièce de l'offre.",
          "Donnez un poids en pourcentage à chacun ; pas plus de 5 ou 6 critères.",
        ],
      },
      {
        title: "Fixez le poids financier et contrôlez le total",
        actions: [
          "Poids du critère financier en pourcentage.",
          "Vérifiez que techniques + financier = 100. Écrivez la formule de notation du prix.",
          "Décidez d'un seuil technique minimum (par exemple 40 sur 60) sous lequel l'offre financière n'est même pas ouverte.",
        ],
      },
    ],
    table: {
      columns: ["Critères techniques (poids %)", "Critère financier (poids %)"],
      rows: [
        ["Plan de rotation et de continuité en saison des pluies : 20", "Prix total sur 12 mois : 40"],
        ["Capacité de la flotte, entretien, assurance : 15", "Formule : 40 × (prix le plus bas ÷ prix de l'offre)"],
        ["Conformité PSEA, code de conduite signé, liste nominative des chauffeurs : 15", "Seuil technique minimum : 40 sur 60"],
        ["Références vérifiées et suivi par géolocalisation : 10", "Total technique 60 + financier 40 = 100"],
      ],
    },
    result: "Section A3 remplie : cinq critères, poids totalisant 100, formule du prix et seuil technique.",
    tip: "Une RFP pèse plus de technique qu'un AO : si votre grille donne 80 % au prix, c'est probablement une RFQ.",
  },
  {
    type: "process",
    stepLabel: "Procédure 6 — Étape 3 sur 3",
    title: "RFP, sections A4 à A6 : soumission, calendrier et conditions générales",
    intro: "Les trois dernières sections cadrent la procédure : comment répondre, quand, et sous quelles clauses. Les conditions générales sont communiquées dès la RFP pour qu'aucun soumissionnaire ne découvre après coup des conditions qu'il n'aurait pas acceptées.",
    steps: [
      {
        title: "A4 « Modalités de soumission »",
        actions: [
          "Tableau à deux colonnes : délai de réponse et format attendu (technique et financier séparés), documents obligatoires à fournir.",
          "Imposez la double enveloppe ou deux fichiers distincts : l'évaluation technique se fait avant l'ouverture financière.",
        ],
      },
      {
        title: "A5 « Calendrier » et A6 « Conditions générales »",
        actions: [
          "A5 : publication, période de questions-réponses, clôture, évaluation, notification.",
          "A6 : les clauses contractuelles qui s'appliqueront au contrat final (paiement, pénalités, PSEA, anti-corruption, audit bailleur, résiliation).",
        ],
      },
    ],
    example: {
      title: "Kerowa — RFP-2026-004, sections A4 à A6",
      lines: [
        "A4 : 14 jours calendaires ; deux fichiers distincts (technique, financier) ; documents : registre de commerce, assurance, liste de flotte avec immatriculations, 3 références, code de conduite signé, fiche fournisseur.",
        "A5 : publication 20/04 ; questions jusqu'au 27/04 ; clôture 04/05 à 12 h ; évaluation technique 05 au 07/05 ; ouverture financière 08/05 ; notification 12/05.",
        "A6 : CGA de Kerowa ; clauses PSEA (code de conduite signé par chaque chauffeur, signalement au point focal, résiliation immédiate) ; anti-corruption ; droit d'audit du bailleur ; paiement à 30 jours sur facture rapprochée de la waybill.",
      ],
    },
    result: "Livrable L5 (partie RFP) terminé : partie A du gabarit complétée, prête à être validée et envoyée.",
    pitfall: "Oublier les conditions générales dans la RFP : le soumissionnaire retenu les découvrira à la signature, négociera dessus, et vous aurez perdu l'avantage de la concurrence.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — RECEVOIR LES OFFRES, OUVRIR, CONSTRUIRE LA CBA
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 7 — Étape 1 sur 8",
    title: "Enregistrer les offres et tenir la séance d'ouverture des plis",
    intro: "Chaque offre reçue est enregistrée dans un registre d'ouverture avant d'être examinée. Pour un AO, l'ouverture se fait en présence d'au moins deux personnes, jamais par un seul agent qui consulterait les offres au fil de leur arrivée : même sans intention frauduleuse, cette pratique expose à un soupçon de favoritisme difficile à lever.",
    steps: [
      {
        title: "Tenez un registre à l'arrivée",
        actions: [
          "Un tableau dans votre dossier L6 : date, heure, fournisseur, mode de réception, intégrité du pli.",
          "Pour un pli papier, paraphez l'enveloppe fermée ; pour un e-mail, ne l'ouvrez pas avant la séance.",
        ],
      },
      {
        title: "Ouvrez à l'heure fixée, à deux au moins",
        actions: [
          "À l'heure d'ouverture, après la clôture, ouvrez chaque offre, lisez à voix haute le nom du fournisseur et le prix total.",
          "Paraphez la page des prix de chaque offre, notez les observations (pièce manquante, cachet absent).",
          "Faites signer le registre par les personnes présentes, avec l'heure d'ouverture.",
        ],
      },
    ],
    table: {
      columns: ["Fournisseur", "Reçu le", "Mode", "Intégrité", "Présent à l'ouverture"],
      rows: [
        ["A — Grossiste Wau", "06/04, 16 h 20", "E-mail", "Complet", "SCM, Esther L."],
        ["B — Wau Négoce Alimentaire", "07/04, 09 h 05", "E-mail", "Complet", "SCM, Esther L."],
        ["C — Coopérative Agro-Warrap", "07/04, 11 h 40", "E-mail", "Complet, ligne sel vide", "SCM, Esther L."],
      ],
    },
    result: "Registre d'ouverture signé : trois offres reçues avant 12 h, ouvertes à 14 h en présence de deux personnes.",
    pitfall: "Ouvrir l'offre « dès qu'elle arrive » pour savoir où l'on en est : une offre connue d'avance est une information qui peut être communiquée. Aucune ouverture isolée avant la clôture.",
  },
  {
    type: "process",
    stepLabel: "Procédure 7 — Étape 2 sur 8",
    title: "Étudier le cas pratique CBA fourni avant de bâtir la vôtre",
    intro: "Le fichier cas-pratique-analyse-comparative-offres-cba.xlsx n'est pas un gabarit vierge : c'est un cas entièrement rempli, à étudier. Il montre une feuille « Cas pratique CBA » avec trois offres anonymisées pour des fournitures WASH (RFQ/2026/001) et des anomalies réelles à repérer. Pour votre propre CBA, vous dupliquerez sa structure et viderez les valeurs d'exemple.",
    steps: [
      {
        title: "Lisez la structure",
        actions: [
          "En-tête : Objet (B4), RFQ # (F4), Devise de référence (I4, « [devise locale] » à remplacer).",
          "Lignes 6 et 7 : Article, Unité, Qté (IR), Qté retenue (convergence offres), puis pour FOURNISSEUR A, B et C trois colonnes chacun : Prix unitaire, Prix total, Commentaire.",
          "Ligne 17 : TOTAL OFFRE (somme des lignes chiffrées), formule =SUM des prix totaux, par fournisseur.",
          "Lignes 21 à 23 : CONCLUSION DU COMITÉ, à compléter : Fournisseur recommandé et Justification.",
          "Légende : rouge = point d'attention ; jaune = quantité corrigée par rapport à l'IR.",
        ],
      },
      {
        title: "Repérez les anomalies une par une",
        actions: [
          "Pour chaque cellule rouge, lisez le commentaire, puis demandez-vous : quelle action, qui l'exécute, avant quelle date ?",
          "Puis comparez les totaux : le plus bas n'est pas toujours le meilleur.",
        ],
      },
    ],
    table: {
      columns: ["Ligne", "Fournisseur", "Anomalie dans le cas pratique", "Traitement attendu"],
      rows: [
        ["Raccord en T (ligne 9)", "B", "Article listé mais non chiffré", "Offre incomplète : clarification écrite, ou comparer à périmètre égal"],
        ["Kit moto-pompe (ligne 10)", "C", "250 par unité contre 9 200 et 8 950 chez A et B", "Prix anormalement bas : vérifier avant toute attribution (erreur ? offre non conforme ?)"],
        ["Réservoir PVC (ligne 11)", "B", "Capacité offerte 5 000 L au lieu de 10 000 L", "Non conforme : offre écartée sur cette ligne"],
        ["Sulfate d'aluminium (ligne 12)", "Toutes", "IR : 300 sacs, les 3 offres convergent vers 180", "Quantité retenue 180 (jaune) ; corriger l'IR avant la PO"],
        ["Chlore NaDCC (ligne 14)", "A", "Total 2 260 alors que 150 × 14 = 2 100", "Recalcul, écart signalé au fournisseur ; corriger la cellule F14 pour que le total soit juste"],
        ["Kit de chloration (ligne 15)", "B", "Article listé mais non chiffré", "Offre incomplète : clarification écrite"],
        ["Total offre (ligne 17)", "A / B / C", "79 956 / 74 280 / 26 568 avant correction", "Totaux non comparables : lignes non chiffrées, non conformes et anormales"],
      ],
    },
    result: "Vous savez lire une CBA remplie : chaque cellule rouge a un traitement, et les totaux bruts ne se comparent pas sans normalisation.",
    pitfall: "Faire confiance à la ligne TOTAL : la cellule F14 affiche encore 2 260 alors que le commentaire retient 2 100. Si vous ne corrigez pas la cellule, la formule SUM compte l'erreur (79 956 au lieu de 79 796).",
  },
  {
    type: "process",
    stepLabel: "Procédure 7 — Étape 3 sur 8",
    title: "Construire la structure de votre CBA en dupliquant celle du cas pratique",
    intro: "Votre CBA reprend exactement la structure du cas pratique. Vous ne créez pas un nouveau format : l'auditeur reconnaît la structure, et le CPC lit toujours au même endroit.",
    steps: [
      {
        title: "Dupliquez et videz",
        actions: [
          "Copiez le fichier et enregistrez-le sous « L6_CBA_AOR-2026-003_Vivres.xlsx ».",
          "Remplacez l'Objet (B4), la référence de consultation (F4) et la devise de référence (I4).",
          "Effacez les valeurs d'exemple des lignes 8 à 15, les commentaires et les surlignages ; supprimez la note d'analyse de la ligne 13.",
        ],
      },
      {
        title: "Adaptez les lignes et renommez les fournisseurs",
        actions: [
          "Une ligne par article de l'IR (colonnes A à D) ; insérez des lignes dans la plage des articles, au-dessus de la ligne TOTAL, pour que la formule SUM s'étende.",
          "Remplacez « FOURNISSEUR A / B / C » par les noms réels (E6, H6, K6). Si vous avez plus de 3 offres, copiez un bloc de 3 colonnes.",
          "Vérifiez que la ligne TOTAL OFFRE additionne bien toutes les lignes insérées.",
        ],
      },
    ],
    example: {
      title: "Kerowa — en-tête et colonnes de la CBA",
      lines: [
        "B4 Objet : Vivres non périssables, accord-cadre 6 mois. F4 RFQ # : AOR-2026-003. I4 Devise de référence : EUR.",
        "Lignes 8 à 11 : Farine de maïs (kg, 14 500, 14 500) | Haricots secs (kg, 2 000, 2 000) | Huile enrichie vitamine A (L, 1 000, 1 000) | Sel iodé (kg, 150, 150).",
        "E6 : Grossiste Wau (A) ; H6 : Wau Négoce Alimentaire (B) ; K6 : Coopérative Agro-Warrap (C).",
      ],
    },
    result: "Un classeur CBA vide, calé sur la structure du cas pratique, avec les 4 articles et les 3 fournisseurs nommés.",
    tip: "Gardez la ligne « Qté retenue (convergence offres) » : c'est elle qui vous alerte quand les offres s'écartent toutes de l'IR (comme les 300 sacs du cas pratique).",
  },
  {
    type: "process",
    stepLabel: "Procédure 7 — Étape 4 sur 8",
    title: "Saisir chaque offre : prix unitaire, prix total, commentaire",
    intro: "Saisissez ce que le fournisseur a écrit, pas ce que vous pensez qu'il a voulu écrire. Les corrections viennent à l'étape suivante, dans la colonne Commentaire.",
    steps: [
      {
        title: "Saisissez les prix unitaires et totaux",
        actions: [
          "Dans chaque bloc fournisseur, saisissez le Prix unitaire de l'offre ; saisissez ensuite le Prix total tel qu'inscrit sur la cotation.",
          "Laissez une cellule vide quand l'article n'est pas chiffré : ne mettez jamais 0.",
        ],
      },
      {
        title: "Ajoutez les conditions dans des lignes sous le tableau",
        actions: [
          "Sous la ligne TOTAL, dans les mêmes colonnes, ajoutez trois lignes : Délai de livraison (jours), Paiement (jours après livraison), Validité de l'offre (mois).",
          "Reportez-les depuis le formulaire signé de chaque fournisseur.",
        ],
      },
    ],
    table: {
      columns: ["Article", "Qté", "A PU", "A PT", "B PU", "B PT", "C PU", "C PT"],
      rows: [
        ["Farine de maïs (kg)", "14 500", "0,62", "8 990", "0,58", "8 410", "0,57", "8 265"],
        ["Haricots secs (kg)", "2 000", "0,92", "1 840", "0,90", "1 800", "0,95", "1 960"],
        ["Huile enrichie vitamine A (L)", "1 000", "2,45", "2 450", "1,90 (non enrichie)", "1 900", "2,38", "2 380"],
        ["Sel iodé (kg)", "150", "0,55", "82,50", "0,50", "75", "(vide)", "(vide)"],
        ["TOTAL OFFRE (somme saisie)", "", "", "13 362,50", "", "12 185", "", "12 605"],
        ["Délai / paiement / validité", "", "7 j / 15 j / 3 mois", "", "5 j / à la livraison / 2 mois", "", "10 j / 30 j / 3 mois", ""],
      ],
    },
    result: "Les trois offres sont saisies telles que reçues, y compris le 1 960 de C et l'huile de B.",
    pitfall: "Corriger silencieusement les erreurs du fournisseur en les saisissant : la CBA doit montrer ce qui a été remis, puis ce qui a été corrigé, avec la raison.",
  },
  {
    type: "process",
    stepLabel: "Procédure 7 — Étape 5 sur 8",
    title: "Contrôler les offres et documenter chaque anomalie",
    intro: "Quatre contrôles, dans cet ordre, pour chaque offre : conformité aux éliminatoires, complétude, arithmétique, cohérence avec le marché. Chaque anomalie est surlignée en rouge dans la CBA, avec une phrase dans la colonne Commentaire et une action.",
    steps: [
      {
        title: "Appliquez les quatre contrôles",
        actions: [
          "Conformité : comparez chaque ligne à la colonne Spécificité de l'IR ; une ligne non conforme est surlignée en rouge et l'offre est écartée si le critère est éliminatoire.",
          "Complétude : toute ligne vide est signalée ; demandez par écrit une clarification, sans modifier les autres prix, avec le même délai et la même règle pour tous.",
          "Arithmétique : recalculez Quantité × Prix unitaire ; si la cotation indique un autre total, notez l'écart et retenez le total recalculé.",
          "Cohérence : comparez chaque total à votre estimation (12 955 EUR) ; un écart supérieur à 30 % en dessous appelle une vérification avant attribution.",
        ],
      },
      {
        title: "Colorez et commentez",
        actions: [
          "Rouge : point d'attention (prix anormal, non-conformité, article non chiffré, écart arithmétique). Jaune : quantité corrigée par rapport à l'IR.",
          "Colonne Commentaire : une phrase factuelle, la date de l'action et la réponse reçue.",
        ],
      },
    ],
    example: {
      title: "Kerowa — commentaires saisis le 08/04/2026",
      lines: [
        "B, huile : NON CONFORME — huile non enrichie en vitamine A, critère éliminatoire de l'IR et de la réponse du 02/04. Offre B écartée.",
        "C, haricots : écart arithmétique — total inscrit 1 960, 2 000 × 0,95 = 1 900 ; total recalculé 1 900, écart signalé à C.",
        "C, sel iodé : article non chiffré — clarification écrite demandée le 08/04 à 08 h 30 ; réponse reçue à 16 h : 0,52 EUR/kg, soit 78 EUR.",
        "Cohérence : A 13 362,50 (+3,1 % vs estimation), C 12 623 après correction (−2,6 %). Aucun écart > 30 %.",
      ],
    },
    result: "Chaque anomalie est colorée, commentée, datée, avec une action ; les totaux corrigés sont connus : A 13 362,50 ; B écartée ; C 12 623.",
    pitfall: "Écarter C « parce qu'il n'a pas chiffré le sel » sans lui laisser clarifier : l'oubli ne change pas le classement ici, et le rejet pourrait être contesté. À l'inverse, ne laissez jamais un fournisseur modifier ses prix après ouverture.",
  },
  {
    type: "process",
    stepLabel: "Procédure 7 — Étape 6 sur 8",
    title: "Calculer les scores pondérés avec la grille figée",
    intro: "Le template calcule les totaux, pas le classement. Vous ajoutez, sous la ligne TOTAL et dans les mêmes colonnes, quelques lignes de score qui appliquent la grille figée en procédure 4. Rien de nouveau n'est décidé ici : on applique.",
    steps: [
      {
        title: "Ajoutez les lignes de score",
        actions: [
          "Ligne « Total corrigé » : le total après corrections de l'étape 5 (même cellule que TOTAL OFFRE, corrigée).",
          "Ligne « Points prix » : pour A, =60*$L$14/F14, où la ligne 14 contient le total corrigé et la colonne L le total de C, le plus bas des offres conformes. Pour C, =60*$L$14/L14 (donne 60).",
          "Lignes « Points technique », « Points délai », « Points paiement » : reportez les notes selon les barèmes écrits.",
          "Ligne « SCORE TOTAL » : somme des quatre lignes de points. Ligne « Rang » : le score le plus haut reçoit le rang 1.",
        ],
      },
      {
        title: "Excluez les offres écartées du calcul du prix le plus bas",
        actions: [
          "L'offre B, éliminée sur l'huile, ne sert pas de référence de prix : le prix de référence est le plus bas des offres conformes.",
          "Affichez le motif d'exclusion en toutes lettres à la place du score.",
        ],
      },
    ],
    table: {
      columns: ["Critère (poids)", "A — Grossiste Wau", "B — Wau Négoce", "C — Coopérative"],
      rows: [
        ["Total corrigé (EUR)", "13 362,50", "12 185 (non conforme)", "12 623"],
        ["Prix (60)", "60 × 12 623 ÷ 13 362,50 = 56,7", "Écartée", "60,0"],
        ["Technique (20)", "20 (échantillons, entrepôt visité, références)", "Écartée", "17 (entrepôt non encore visité)"],
        ["Délai (10)", "7 jours : 10", "Écartée", "10 jours : 8"],
        ["Paiement (10)", "15 jours : 7", "Écartée", "30 jours : 10"],
        ["SCORE TOTAL", "93,7", "—", "95,0"],
        ["Rang", "2", "Écartée", "1"],
      ],
    },
    result: "Classement calculé selon la grille figée : C 95,0, A 93,7, B écartée pour non-conformité.",
    pitfall: "Accorder un point « à l'appréciation » sans le justifier : tout point technique renvoie à un fait écrit dans le dossier (échantillon, visite, référence appelée).",
  },
  {
    type: "process",
    stepLabel: "Procédure 7 — Étape 7 sur 8",
    title: "Contrôler les indices de collusion avant de conclure",
    intro: "Examinez systématiquement chaque offre et chaque commentaire pour repérer un signal de collusion. Prix identiques au centime, mêmes coordonnées de contact, formatage de devis visiblement identique entre deux « fournisseurs » différents sont des signaux à documenter, pas à ignorer parce que le prix le plus bas semble arranger tout le monde.",
    steps: [
      {
        title: "Faites les six contrôles sur toutes les offres reçues",
        actions: [
          "Prix : deux offres ont-elles des prix totaux ou unitaires identiques, ou des écarts constants et réguliers entre elles ?",
          "Contact : mêmes nom, téléphone, e-mail ou adresse sur deux offres ?",
          "Forme : même police, même mise en page, mêmes fautes, numéros de devis qui se suivent ?",
          "Paiement : mêmes coordonnées bancaires ou même adresse de société dans les fiches fournisseurs ?",
          "Dépôt : plusieurs offres reçues presque au même instant de la même adresse ou de la même personne (registre d'ouverture) ?",
          "Historique : un même groupe de fournisseurs qui gagne à tour de rôle, ou une offre « de couverture » trop chère ?",
        ],
      },
      {
        title: "Inscrivez le résultat dans la CBA",
        actions: [
          "Une ligne « Contrôle anti-collusion » sous les scores : « Aucun signal » avec les six contrôles cochés, ou la description exacte des signaux trouvés.",
          "En cas de signal, ne le tranchez pas seul : transmettez au CPC et au référent compliance.",
        ],
      },
    ],
    example: {
      title: "Kerowa — contrôle anti-collusion du 09/04/2026",
      lines: [
        "Prix : A 13 362,50 ; B 12 185 ; C 12 605 saisi. Aucun prix identique, aucun écart constant.",
        "Contact : trois contacts, trois téléphones, trois adresses e-mail de domaines différents.",
        "Forme : trois formats de devis distincts. Paiement : trois banques différentes dans les fiches fournisseurs.",
        "Dépôt : heures de réception 06/04 16 h 20, 07/04 09 h 05 et 11 h 40, adresses différentes. Historique : aucune procédure antérieure.",
        "Conclusion écrite dans la CBA : aucun signal de collusion.",
      ],
    },
    result: "Un contrôle anti-collusion écrit et daté, appliqué à toutes les offres, y compris quand il n'y a rien à signaler.",
    tip: "Le contrôle protège autant les fournisseurs honnêtes que vous : « aucun signal » écrit et daté est une pièce d'audit.",
  },
  {
    type: "process",
    stepLabel: "Procédure 7 — Étape 8 sur 8",
    title: "Rédiger la conclusion de la CBA et préparer le dossier du CPC",
    intro: "Les lignes 21 à 23 du template contiennent la CONCLUSION DU COMITÉ : « Fournisseur recommandé » (B22) et « Justification » (B23, cellule fusionnée sur plusieurs lignes). Vous préparez ici la recommandation ; c'est le CPC qui décide. La CBA est une aide à la décision, pas une décision automatique.",
    steps: [
      {
        title: "Remplissez B22 et B23",
        actions: [
          "B22 : le nom du fournisseur recommandé, ou « Aucun, clarifications en cours » si le dossier n'est pas prêt.",
          "B23 : la justification en 4 points : classement, motif d'exclusion des autres, anomalies traitées, conditions éventuelles.",
        ],
      },
      {
        title: "Constituez le dossier de décision",
        actions: [
          "Joignez : l'IR, la note de gel, le registre d'ouverture, les trois offres, la CBA complétée, le journal des questions-réponses.",
          "Envoyez-le aux membres du CPC au moins 48 heures avant la réunion.",
        ],
      },
    ],
    example: {
      title: "Kerowa — conclusion de la CBA",
      lines: [
        "B22 — Fournisseur recommandé : Coopérative Agro-Warrap (C), sous réserve de la visite de son entrepôt avant signature.",
        "B23 — Justification : score 95,0 contre 93,7 pour A, prix conforme le plus bas (12 623 EUR, −2,6 % vs estimation). B écartée : huile non enrichie (éliminatoire). Anomalies traitées : total des haricots recalculé, sel clarifié. Aucun signal de collusion. Écart de 1,3 point seulement avec A : A proposé comme fournisseur de repli (rang 2). Condition : visite de l'entrepôt de C, échantillons à chaque livraison.",
      ],
    },
    result: "Livrable L6 terminé : CBA complétée (structure du cas pratique), scores pondérés, anomalies, contrôle anti-collusion, conclusion.",
    pitfall: "Présenter le CPC avec les offres brutes : le comité examine la CBA, jamais les offres une par une.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 8 — RÉUNIR LE CPC ET RÉDIGER LE PV
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 8 — Étape 1 sur 5",
    title: "Composer le comité : quorum, profils et conflits d'intérêts",
    intro: "Au-dessus du seuil de consultation restreinte, la CBA est présentée au Comité de Validation des Achats. Avant de convoquer, vérifiez que la composition rend la décision valable : un CPC mal composé produit un PV que l'auditeur écartera, quelle que soit la qualité du dossier.",
    steps: [
      {
        title: "Contrôlez les trois règles de composition",
        actions: [
          "Quorum : 3 membres présents au minimum, dont au moins un profil finance ou compliance et un profil technique ou programme.",
          "Séparation des tâches : le demandeur initial et la personne qui a conduit la négociation ne sont jamais seuls décisionnaires. Ils présentent, ils n'ont pas la voix délibérative.",
          "Indépendance : aucun membre n'a de lien personnel ou financier avec un soumissionnaire.",
        ],
      },
      {
        title: "Recueillez les déclarations d'absence de conflit",
        actions: [
          "Avant la réunion, chaque membre confirme par écrit qu'il n'a aucun lien avec A, B ou C.",
          "Si un membre déclare un lien, il se retire de la décision et un suppléant est désigné.",
        ],
      },
    ],
    table: {
      columns: ["Nom", "Fonction", "Rôle dans le comité", "Voix délibérative", "Conflit d'intérêts"],
      rows: [
        ["Grace M.", "Coordinatrice pays", "Présidente (visioconférence)", "Oui", "Aucun déclaré"],
        ["Joseph K.", "Responsable administration-finance", "Membre, profil finance / compliance", "Oui", "Aucun déclaré"],
        ["Dr Samuel T.", "Coordinateur médical", "Membre, profil technique", "Oui", "Aucun déclaré"],
        ["Dr Rebecca N.", "Responsable programme nutrition", "Demandeur, présente le besoin", "Non", "Sans objet"],
        ["Vous (SCM)", "Supply Chain Manager", "Rapporteur, présente la CBA", "Non", "Sans objet"],
      ],
    },
    result: "Un comité de 3 membres votants, avec les profils exigés, et deux intervenants sans voix : la décision sera valable.",
    pitfall: "Constituer le comité de deux logisticiens qui se signent mutuellement : c'est le profil de PV le plus corrélé à la fraude d'achat, et la première chose qu'un auditeur regarde.",
  },
  {
    type: "process",
    stepLabel: "Procédure 8 — Étape 2 sur 5",
    title: "Convoquer, préparer et conduire la réunion",
    intro: "Le CPC n'est pas une formalité de signature. Le rapporteur présente la CBA ; le comité l'examine, discute, et documente sa décision, y compris la justification du rejet des offres écartées. Un comité qui se contente d'entériner le rang calculé sans discussion n'a pas rempli sa fonction.",
    steps: [
      {
        title: "Convoquez avec le dossier, 48 heures avant",
        actions: [
          "Envoyez la convocation : date, heure, lien de visioconférence, ordre du jour, durée prévue de 45 minutes.",
          "Joignez le dossier : IR, note de gel des critères, registre d'ouverture, CBA complétée, journal des questions-réponses.",
        ],
      },
      {
        title: "Conduisez la séance dans cet ordre",
        actions: [
          "Vérification du quorum et des déclarations d'absence de conflit (2 minutes).",
          "Présentation du besoin par le demandeur (5 minutes), puis de la CBA par le rapporteur, anomalies et contrôle anti-collusion compris (15 minutes).",
          "Discussion, questions et demandes de vérification complémentaires (15 minutes). Vote hors présence du demandeur et du rapporteur.",
          "Lecture de la décision et des justifications avant signature (5 minutes).",
        ],
      },
    ],
    example: {
      title: "Kerowa — ordre du jour du CPC du vendredi 10/04/2026, 10 h 00",
      lines: [
        "1. Quorum et déclarations. 2. Besoin IR-2026-014 (Dr Rebecca N.). 3. Présentation de la CBA AOR-2026-003 (SCM). 4. Discussion. 5. Décision hors présence du demandeur et du rapporteur. 6. Signature du PV.",
        "Pièces envoyées le 08/04 à 17 h : toutes les pièces listées ci-dessus.",
      ],
    },
    result: "Réunion convoquée dans les délais, dossier complet, séance conduite en cinq temps, avec décision hors présence du demandeur.",
    tip: "Notez les désaccords en séance : un PV qui ne montre jamais un doute ou une question n'a pas l'air d'une vraie discussion.",
  },
  {
    type: "process",
    stepLabel: "Procédure 8 — Étape 3 sur 5",
    title: "Remplir le PV, sections 1 et 2 : réunion et membres",
    intro: "Le template pv-comite-achats-cpc.docx a une phrase d'objectif et sept sections numérotées : tracer, pour tout achat au-dessus du seuil de consultation restreinte, la décision motivée d'un comité d'au moins 3 membres. Les sections 1 et 2 identifient la réunion et les personnes.",
    steps: [
      {
        title: "Section 1 « Informations de la réunion »",
        actions: [
          "Tableau à quatre cases : Date et heure de la réunion ; Lieu / mode (présentiel, visioconférence) ; Référence de l'achat (n° PR / RFQ-RFP-ITB) ; Montant total estimé de l'achat.",
          "Le libellé du template indique USD : remplacez-le par la devise de votre mission (EUR) dans le libellé ou convertissez, mais restez cohérent avec la CBA.",
        ],
      },
      {
        title: "Section 2 « Membres du comité présents »",
        actions: [
          "Tableau Nom | Fonction | Rôle dans le comité : une ligne par membre présent. Le template propose 3 lignes ; ajoutez-en si besoin (clic droit > Insérer).",
          "Sous le tableau, « Membres absents et raison de l'absence » : écrivez les noms et les raisons, ou « Aucun ».",
          "Relisez la phrase de rappel du quorum, qui fait partie du PV : 3 membres minimum, un profil finance ou compliance, un profil technique ou programme, le demandeur n'étant pas seul décisionnaire.",
        ],
      },
    ],
    example: {
      title: "Kerowa — sections 1 et 2 remplies",
      lines: [
        "Date et heure : 10/04/2026, 10 h 00. Lieu / mode : visioconférence (Gogrial, Juba). Référence : IR-2026-014 / AOR-2026-003. Montant total estimé : 12 955 EUR.",
        "Grace M. | Coordinatrice pays | Présidente. Joseph K. | Responsable administration-finance | Membre, profil finance. Dr Samuel T. | Coordinateur médical | Membre, profil technique.",
        "Absents : Daniel O., coordinateur terrain, en mission de suivi à Kuajok (non requis pour le quorum). Présents sans voix : Dr Rebecca N. (demandeur), le SCM (rapporteur).",
      ],
    },
    result: "Sections 1 et 2 complètes : date, référence, montant, trois membres votants avec profils, absence motivée.",
    pitfall: "Laisser le champ « Membres absents » vide : un auditeur ne sait pas si l'absence est volontaire. Écrivez « Aucun » plutôt que de laisser un blanc.",
  },
  {
    type: "process",
    stepLabel: "Procédure 8 — Étape 4 sur 5",
    title: "Remplir le PV, sections 3 et 4 : objet examiné et offres comparées",
    intro: "Ces deux sections reprennent ce que le comité a examiné. Elles ne remplacent pas la CBA : elles en copient l'essentiel pour archivage, afin que le PV se lise seul.",
    steps: [
      {
        title: "Section 3 « Objet examiné »",
        actions: [
          "Besoin à l'origine de l'achat : référence PR, nature du bien ou du service, urgence éventuelle.",
          "Procédure suivie (RFQ, RFP ou ITB) et nombre d'offres reçues dans le délai imparti.",
        ],
      },
      {
        title: "Section 4 « Offres comparées »",
        actions: [
          "Le PV cite grille-rfq-comparaison-offres-cba.xlsx : c'est la CBA de votre dossier (L6). Recopiez ici sa synthèse.",
          "Tableau : Fournisseur | Prix total | Score pondéré | Rang | Conformité technique. Une ligne par offre, y compris les offres écartées.",
          "Rubrique « Anomalies ou indices de collusion relevés dans la CBA » : recopiez vos anomalies et le résultat du contrôle anti-collusion.",
        ],
      },
    ],
    table: {
      columns: ["Fournisseur", "Prix total (EUR)", "Score pondéré", "Rang", "Conformité technique"],
      rows: [
        ["C — Coopérative Agro-Warrap", "12 623", "95,0", "1", "Conforme, échantillons validés ; entrepôt à visiter"],
        ["A — Grossiste Wau", "13 362,50", "93,7", "2", "Conforme, entrepôt visité, références vérifiées"],
        ["B — Wau Négoce Alimentaire", "12 185", "Écartée", "—", "NON CONFORME : huile non enrichie en vitamine A"],
      ],
    },
    example: {
      title: "Kerowa — sections 3 et 4 (extrait)",
      lines: [
        "Besoin : IR-2026-014, vivres non périssables pour 6 mois, accord-cadre ; procédure : AO restreint AOR-2026-003 ; 3 offres reçues dans le délai (clôture 07/04 à 12 h).",
        "Anomalies : offre B, huile non enrichie ; offre C, total des haricots recalculé (1 960 devenu 1 900) et ligne sel clarifiée (78 EUR). Aucun indice de collusion relevé (contacts, prix, formats, coordonnées bancaires distincts).",
      ],
    },
    result: "Sections 3 et 4 complètes : la procédure, les trois offres, les scores, les anomalies et le contrôle de collusion.",
    pitfall: "Omettre l'offre écartée du tableau : le PV doit montrer que le comité a vu toutes les offres et pourquoi l'une d'elles ne participe pas au classement.",
  },
  {
    type: "process",
    stepLabel: "Procédure 8 — Étape 5 sur 5",
    title: "Remplir le PV, sections 5 à 7 : discussion, décision et signatures",
    intro: "C'est le cœur du PV : ce qui prouve que le comité a réellement délibéré. Un PV signé par une seule personne n'est pas valide : la signature de chaque membre présent est obligatoire. Un CPC sans PV signé n'a, aux yeux d'un auditeur, tout simplement pas eu lieu.",
    steps: [
      {
        title: "Section 5 « Discussion et analyse du comité »",
        actions: [
          "Points soulevés en réunion, y compris désaccords entre membres.",
          "Vérifications complémentaires demandées avant décision, le cas échéant, avec responsable et date.",
        ],
      },
      {
        title: "Section 6 « Décision du comité »",
        actions: [
          "Fournisseur retenu, avec les conditions éventuelles.",
          "Justification de la décision : pas seulement le prix le plus bas ; incluez pourquoi les autres offres sont écartées.",
          "Suite à donner si suspicion de collusion ou de fraude (par exemple signalement au référent compliance ou anti-fraude), ou « Sans objet ».",
        ],
      },
      {
        title: "Section 7 « Signatures des membres présents »",
        actions: [
          "Tableau Nom | Fonction | Signature | Date : une ligne par membre présent.",
          "Chaque membre présent signe de sa main ou par signature électronique ; un absent ne signe pas.",
          "Archivez le PV signé dans L7 et envoyez une copie à la Finance.",
        ],
      },
    ],
    example: {
      title: "Kerowa — sections 5 à 7 remplies (extrait)",
      lines: [
        "Discussion : Dr Samuel T. interroge la qualité des haricots de C ; Joseph K. note que C est un nouveau fournisseur et demande une visite de l'entrepôt ; Grace M. relève le risque de dépendance et demande de garder A en repli. Écart de 1,3 point entre C et A jugé faible : le comité confirme le choix sur le prix conforme le plus bas et la qualité des échantillons.",
        "Vérification demandée : visite de l'entrepôt de C avant le 13/04 (SCM et Peter A.).",
        "Décision (unanimité, 3 voix sur 3) : retenir Coopérative Agro-Warrap pour l'accord-cadre, sous réserve de la visite ; A rang 2, fournisseur de repli ; B écartée (huile non enrichie). Mandat de négociation autorisé (prix, délai, pénalités). Aucune suspicion de collusion : sans objet.",
        "Signatures : Grace M., Joseph K., Dr Samuel T., le 10/04/2026.",
      ],
    },
    result: "Livrable L7 terminé : PV de CPC complet, signé par les 3 membres présents, décision motivée et condition tracée.",
    pitfall: "Écrire « offre la moins chère retenue » dans la justification : la décision doit démontrer que le comité a examiné la cohérence des offres entre elles, et expliquer le rejet des autres.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 9 — NÉGOCIER ET DOCUMENTER LE PV DE NÉGOCIATION
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 9 — Étape 1 sur 3",
    title: "Préparer le mandat de négociation",
    intro: "Une fois l'offre retenue identifiée par le CPC, il reste souvent une phase de négociation avant signature : prix final, délais, conditions de paiement, modalités de livraison. La méthode (objectifs, concessions, tactiques) est traitée au Module 3 ; ce module se limite à documenter le résultat. Entrées : PV du CPC, CBA, offre du fournisseur retenu.",
    steps: [
      {
        title: "Fixez ce que le CPC autorise",
        actions: [
          "Relisez la section 6 du PV : mandat accordé par le comité (quels points, quelles limites).",
          "Rédigez une page de mandat : points à négocier, objectif, limite acceptable, contreparties que vous pouvez offrir.",
        ],
      },
      {
        title: "Désignez l'équipe, jamais un négociateur seul",
        actions: [
          "Deux personnes minimum côté Kerowa (vous et un second), pour éviter qu'un agent en contact direct avec le fournisseur décide seul.",
          "Prévenez le fournisseur du lieu, de la date, et de la possibilité d'être accompagné.",
        ],
      },
    ],
    table: {
      columns: ["Point", "Offre de C", "Objectif Kerowa", "Limite", "Contrepartie possible"],
      rows: [
        ["Prix farine (EUR/kg)", "0,57", "0,56", "0,57", "Plan d'approvisionnement mensuel fixe"],
        ["Prix haricots (EUR/kg)", "0,95", "0,92", "0,93", "Prévisions de commande 30 jours à l'avance"],
        ["Délai de livraison", "10 jours", "8 jours", "10 jours", "Commande passée le 5 de chaque mois"],
        ["Pénalités de retard", "Aucune", "0,5 % par jour, plafond 10 %", "0,3 % par jour", "Paiement strict à 30 jours"],
        ["Révision de prix", "Fixe 3 mois", "Trimestrielle plafonnée à ± 5 %", "± 8 %", "Preuve : relevé de prix du marché de Wau"],
      ],
    },
    result: "Un mandat écrit et validé, avec objectifs, limites et contreparties, et une équipe de deux personnes.",
    pitfall: "Négocier sans mandat écrit : si le résultat s'écarte de ce que le CPC a autorisé, l'auditeur y voit un ajustement de dernière minute décidé seul.",
  },
  {
    type: "process",
    stepLabel: "Procédure 9 — Étape 2 sur 3",
    title: "Mener la séance et noter chaque point au fil de l'eau",
    intro: "Prendre des notes pendant la négociation, point par point, est ce qui rend le PV fidèle. Le second membre de l'équipe est dédié à la prise de notes.",
    steps: [
      {
        title: "Tenez la séance",
        actions: [
          "Ouvrez en rappelant le cadre : accord de principe du comité, négociation sur les points listés, accord final à signer à la fin.",
          "Négociez point par point, dans l'ordre du mandat, sans mélanger les sujets.",
          "Pour chaque point, notez : la position initiale, la contre-proposition, la concession obtenue de chaque côté, la formulation finale convenue.",
        ],
      },
      {
        title: "Faites relire l'accord avant la fin",
        actions: [
          "Relisez à voix haute les points d'accord ; le fournisseur confirme chaque chiffre.",
          "Si un point dépasse votre mandat, suspendez-le et renvoyez-le au CPC : ne concédez jamais hors mandat.",
        ],
      },
    ],
    example: {
      title: "Kerowa — notes de la séance du 14/04/2026, 10 h 00, bureau de Gogrial",
      lines: [
        "Farine : 0,57 proposé ; 0,56 obtenu en échange d'un plan mensuel d'approvisionnement envoyé par Kerowa le 5 de chaque mois.",
        "Haricots : 0,95 proposé ; 0,92 obtenu (alignement sur le niveau de A), en échange de prévisions à 30 jours.",
        "Délai : 8 jours obtenu pour chaque commande. Pénalités : 0,5 % par jour de retard, plafond 10 %, acceptées.",
        "Révision de prix : trimestrielle, plafonnée à ± 5 %, sur relevé de prix du marché de Wau. Paiement : 30 jours après réception, confirmé.",
        "Visite de l'entrepôt de C effectuée le 13/04 : conforme (stockage sur palettes, protection contre l'humidité).",
      ],
    },
    result: "Notes de séance complètes, point par point, avec les concessions des deux côtés et l'accord relu à voix haute.",
    tip: "Faites écrire le chiffre final de chaque point par le fournisseur lui-même sur votre cahier : il ne pourra pas le contester ensuite.",
  },
  {
    type: "process",
    stepLabel: "Procédure 9 — Étape 3 sur 3",
    title: "Rédiger et signer le PV de négociation",
    intro: "Le PV de négociation est une exigence de conformité au même titre que le PV de CPC. Sans lui, un auditeur ne peut pas distinguer une négociation menée dans l'intérêt du projet d'un ajustement décidé seul. Aucun template n'est fourni dans le dossier : le contenu est cadré par cinq rubriques, que vous reprenez dans un document d'une page.",
    steps: [
      {
        title: "Rédigez les cinq rubriques",
        actions: [
          "Participants : noms et fonctions côté Kerowa et côté fournisseur, date, lieu.",
          "Points négociés : un par un, avec position initiale et position finale.",
          "Concessions obtenues de part et d'autre : ce que chacun a cédé.",
          "Accord final, tel qu'il sera repris dans la PO ou le contrat, avec les chiffres définitifs.",
          "Signatures des personnes présentes des deux côtés.",
        ],
      },
      {
        title: "Faites valider et archivez",
        actions: [
          "Si l'accord reste dans le mandat, il se signe sur place ; sinon, il passe devant la présidente du CPC avant signature.",
          "Archivez le PV dans L8 : il sera cité dans la PO.",
        ],
      },
    ],
    example: {
      title: "Kerowa — PV de négociation du 14/04/2026 (extrait)",
      lines: [
        "Participants : Kerowa : le SCM, Esther L. ; Coopérative Agro-Warrap : Mary (gérante), le responsable commercial.",
        "Points négociés : farine 0,57 → 0,56 ; haricots 0,95 → 0,92 ; délai 10 → 8 jours ; pénalités ajoutées ; révision de prix trimestrielle plafonnée.",
        "Concessions : C baisse deux prix et accepte les pénalités ; Kerowa s'engage à des prévisions mensuelles et au paiement à 30 jours.",
        "Accord final : farine 0,56 ; haricots 0,92 ; huile 2,38 ; sel 0,52 ; soit 8 120 + 1 840 + 2 380 + 78 = 12 418 EUR sur 6 mois, soit 205 EUR de moins que l'offre (12 623) et 537 EUR de moins que l'estimation (12 955).",
        "Signatures : le SCM, Esther L., Mary, le responsable commercial. Accord conforme au mandat du CPC.",
      ],
    },
    result: "Livrable L8 (partie négociation) terminé : PV signé, accord final chiffré, dans le mandat du CPC.",
    pitfall: "Corriger une condition « après coup » à la signature de la PO sans avenant au PV : le PV de négociation fait foi, la PO doit reprendre ses chiffres exactement.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 10 — STRUCTURER LE CONTRAT-CADRE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 10 — Étape 1 sur 3",
    title: "Contrat-cadre, sections B1 à B3 : parties, objet et durée",
    intro: "Un contrat-cadre fixe, avec un fournisseur qualifié, les conditions (prix, délais, spécifications) d'une série d'achats récurrents sur une période donnée, au lieu de relancer une RFQ complète à chaque besoin. La partie B du gabarit trame-rfp-et-contrat-cadre.docx suit huit sections (B1 à B8). Ce module montre comment le structurer ; sa gestion dans la durée (revue de performance, renouvellement, remise en concurrence partielle) relève du Module 4.",
    steps: [
      {
        title: "B1 « Parties au contrat » et B2 « Objet et périmètre »",
        actions: [
          "B1, tableau à deux colonnes : Organisation (raison sociale, adresse, représentant) ; Fournisseur (raison sociale, adresse, représentant). Le représentant doit avoir le pouvoir d'engager la société.",
          "B2 : catégorie(s) de biens ou services couverte(s) ; zone(s) géographique(s) et site(s) de livraison couverts.",
        ],
      },
      {
        title: "B3 « Durée »",
        actions: [
          "Tableau à deux colonnes : Date de prise d'effet ; Date d'échéance et date de révision explicite.",
          "Calez la durée sur la période de financement : l'accord ne doit pas dépasser la fin du financement du bailleur.",
        ],
      },
    ],
    example: {
      title: "Kerowa — contrat-cadre vivres, B1 à B3 remplis",
      lines: [
        "B1 : Kerowa Santé, bureau de Gogrial, représentée par Grace M., coordinatrice pays ; Coopérative Agro-Warrap, Wau, représentée par Mary, gérante.",
        "B2 : farine de maïs, haricots secs, huile enrichie en vitamine A, sel iodé, conformément aux spécifications de l'annexe ; livraison à l'entrepôt Kerowa de Gogrial.",
        "B3 : prise d'effet 16/04/2026 ; échéance 15/10/2026 ; révision explicite le 16/07/2026.",
      ],
    },
    result: "Sections B1 à B3 remplies : parties identifiées, objet délimité, durée de 6 mois avec date de révision.",
    pitfall: "Une durée sans date de révision explicite : le contrat-cadre se prolonge tacitement et le prix du marché s'éloigne sans que personne ne rouvre la discussion.",
  },
  {
    type: "process",
    stepLabel: "Procédure 10 — Étape 2 sur 3",
    title: "Contrat-cadre, sections B4 à B6 : volumes, prix et commandes",
    intro: "Ces trois sections sont celles qui font la valeur d'un contrat-cadre : elles disent ce que vous attendez sans vous engager, comment les prix évoluent, et comment une commande individuelle se passe.",
    steps: [
      {
        title: "B4 « Volumes indicatifs » et B5 « Prix et révision »",
        actions: [
          "B4 : un ordre de grandeur des achats prévus sur la durée, clairement non engageant : le contrat ne garantit aucune quantité minimale au fournisseur.",
          "B5, tableau à deux colonnes : Grille tarifaire applicable (référence à l'annexe prix) ; Mécanisme de révision (indexation, plafond, clause de renégociation).",
        ],
      },
      {
        title: "B6 « Modalités de commande dans le cadre de l'accord »",
        actions: [
          "La procédure d'émission d'une commande individuelle : document (PO), délai, signataires selon la matrice d'autorisation.",
          "Le seuil éventuel de repassage en consultation : au-delà de ce montant ou de cet écart de prix, on compare à nouveau.",
        ],
      },
    ],
    example: {
      title: "Kerowa — B4 à B6 remplis",
      lines: [
        "B4 : environ 14 500 kg de farine, 2 000 kg de haricots, 1 000 L d'huile et 150 kg de sel sur 6 mois, soit une livraison mensuelle d'environ 2,75 t de farine et haricots. Ces volumes sont indicatifs et n'engagent pas Kerowa Santé.",
        "B5 : grille en annexe (farine 0,56 ; haricots 0,92 ; huile 2,38 ; sel 0,52 EUR). Prix fixes 3 mois, puis révision trimestrielle plafonnée à ± 5 %, sur relevé de prix du marché de Wau fourni par le fournisseur et vérifié par Kerowa.",
        "B6 : une PO par livraison, émise le 5 de chaque mois, livraison sous 8 jours. Toute commande supérieure à 3 500 EUR, ou tout prix proposé s'écartant de plus de 10 % du marché, repasse en comparaison de prix.",
      ],
    },
    result: "Sections B4 à B6 remplies : volumes non engageants, grille de prix avec révision plafonnée, procédure de commande avec seuil de repassage.",
    pitfall: "Écrire dans B4 « Kerowa commandera au minimum 14 500 kg » : le volume devient un engagement, et le fournisseur peut réclamer en cas de commande inférieure.",
  },
  {
    type: "process",
    stepLabel: "Procédure 10 — Étape 3 sur 3",
    title: "Contrat-cadre, sections B7 et B8 : sortie, signatures et relecture",
    intro: "Une clause de sortie claire protège Kerowa si le fournisseur déçoit ou si le financement s'arrête. Les signatures doivent respecter la matrice d'autorisation : le contrat-cadre vaut sur la valeur cumulée, pas sur le montant d'une commande.",
    steps: [
      {
        title: "B7 « Clause de sortie / résiliation »",
        actions: [
          "Tableau à deux colonnes : Motifs de résiliation anticipée ; Préavis de résiliation applicable.",
          "Listez des motifs mesurables : retards répétés, lots rejetés, manquement PSEA ou éthique, fin du financement du bailleur.",
        ],
      },
      {
        title: "B8 « Signatures » et relecture",
        actions: [
          "Tableau à deux colonnes : pour l'organisation (nom, fonction, date, signature) ; pour le fournisseur.",
          "Faites signer par la personne désignée par la matrice d'autorisation pour la valeur cumulée, jamais par la seule personne qui a négocié.",
          "Faites relire par la Finance avant signature.",
        ],
      },
    ],
    example: {
      title: "Kerowa — B7 et B8 remplis",
      lines: [
        "B7 motifs : deux retards de plus de 5 jours en 3 mois ; deux lots rejetés à la réception ; manquement au code de conduite PSEA ; fraude ou corruption ; fin du financement du bailleur. Préavis : 30 jours (immédiat en cas de manquement PSEA ou de fraude).",
        "B8 : pour Kerowa, Grace M., coordinatrice pays, 16/04/2026 (palier 3, valeur 12 418 EUR) ; pour le fournisseur, Mary, gérante, 16/04/2026.",
      ],
    },
    result: "Livrable L8 (contrat-cadre) terminé : partie B du gabarit complète, signée selon la matrice d'autorisation.",
    tip: "Le suivi du contrat dans la durée (revue trimestrielle, performance du fournisseur, remise en concurrence) se prépare au Module 4 : notez dès maintenant la date de révision du 16/07.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 11 — PO, RÉCEPTION ET RAPPROCHEMENT À TROIS
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 11 — Étape 1 sur 3",
    title: "Émettre la PO en référençant la PR, le PV du CPC et le PV de négociation",
    intro: "La PO est l'engagement contractuel formel envers le fournisseur retenu. Elle est signée selon la matrice d'autorisation en vigueur (jamais par la seule personne qui a mené la négociation) et communiquée au fournisseur avant toute réception de biens ou de services. Le dossier ne fournit pas de modèle de PO : utilisez celui de votre mission ou de votre ERP.",
    steps: [
      {
        title: "Renseignez les mentions de la PO",
        actions: [
          "Numéro unique de PO, date, fournisseur, adresse de livraison, devise.",
          "Articles, quantités, prix unitaires et total : repris exactement de l'accord final du PV de négociation.",
          "Références : n° d'IR, n° du contrat-cadre, date du PV de CPC, date du PV de négociation.",
          "Ligne budgétaire imputée : celle de l'IR.",
          "Conditions : délai de livraison, paiement, pénalités.",
        ],
      },
      {
        title: "Signez selon la matrice et transmettez",
        actions: [
          "Faites signer les personnes prévues pour la tranche de montant.",
          "Envoyez la PO au fournisseur avec accusé de réception ; gardez la preuve dans L8.",
        ],
      },
    ],
    example: {
      title: "Kerowa — PO-2026-031, premier appel sous le contrat-cadre (17/04/2026)",
      lines: [
        "Fournisseur : Coopérative Agro-Warrap. Références : IR-2026-014 ; contrat-cadre du 16/04 ; PV CPC du 10/04 ; PV de négociation du 14/04.",
        "Farine 2 420 kg × 0,56 = 1 355,20 ; haricots 330 kg × 0,92 = 303,60 ; huile 170 L × 2,38 = 404,60 ; sel 25 kg × 0,52 = 13,00.",
        "Total PO-2026-031 : 2 076,40 EUR. Livraison avant le 27/04/2026 (8 jours). Signataires : SCM et Daniel O., coordinateur terrain (tranche de 1 000 à moins de 5 000 EUR).",
      ],
    },
    result: "PO conforme à l'accord de négociation, signée par deux personnes au moins, et transmise avant livraison.",
    pitfall: "Émettre la PO après la livraison, ou la faire signer par la seule personne qui a négocié : la checklist Finance bloquera le dossier (contrôle 10).",
  },
  {
    type: "process",
    stepLabel: "Procédure 11 — Étape 2 sur 3",
    title: "Réceptionner la livraison et établir le bon de réception (GRN)",
    intro: "À la livraison, le magasinier établit un bon de réception (GRN) avant toute acceptation. Sans réception constatée, aucun paiement n'est possible : c'est le contrôle 11 de la checklist Finance.",
    steps: [
      {
        title: "Contrôlez la livraison avec la PO en main",
        actions: [
          "Comparez le bon de livraison du transporteur à la PO : articles, quantités, date.",
          "Contrôlez la qualité sur échantillon : humidité et odeur de la farine, grains cassés des haricots, étiquette de l'huile (vitamine A), étiquette du sel (iodé), dates limites.",
          "Pesez ou comptez : ne prenez jamais la quantité du bon de livraison sans vérification.",
        ],
      },
      {
        title: "Établissez le GRN, signez et notez les écarts",
        actions: [
          "Le GRN reprend, ligne par ligne, la quantité commandée, la quantité reçue et le résultat du contrôle qualité.",
          "En cas d'écart ou de non-conformité, inscrivez une réserve sur le bon de livraison avant le départ du chauffeur.",
          "Faites signer le magasinier et le livreur, puis transmettez le GRN au SCM et à la Finance le jour même.",
        ],
      },
    ],
    example: {
      title: "Kerowa — GRN du 27/04/2026 (extrait)",
      lines: [
        "Farine : commandé 2 420 kg, reçu 2 420 kg ; humidité mesurée 12,4 %, conforme. Haricots : commandé 330 kg, reçu 330 kg ; grains cassés 2 %, conforme.",
        "Huile : commandé 170 L, reçu 170 L (9 bidons de 20 L et 1 de 10 L) ; étiquette « enrichie en vitamine A » vérifiée, DLC 12 mois. Sel : 25 kg, étiquette iodé vérifiée.",
        "Signé par Peter A. (magasinier) et le chauffeur ; aucune réserve. Transmis au SCM et à la Finance à 15 h 20.",
      ],
    },
    result: "GRN daté et signé, livraison conforme, aucune réserve, transmis le jour même.",
    pitfall: "Signer le bon de livraison du chauffeur sans contrôle pour « libérer le camion » : vous perdez votre recours si des quantités manquent.",
  },
  {
    type: "process",
    stepLabel: "Procédure 11 — Étape 3 sur 3",
    title: "Faire le rapprochement à trois (3-way match) avant tout paiement",
    intro: "Le 3-way match compare la PO, le GRN et la facture fournisseur. Un écart entre les trois documents (quantité, prix ou spécification) doit être résolu avant paiement, jamais après.",
    steps: [
      {
        title: "Comparez ligne à ligne",
        actions: [
          "Dans un tableau à trois colonnes (PO, GRN, facture), reportez pour chaque ligne la quantité et le prix unitaire.",
          "Calculez les écarts de quantité et de prix, puis l'écart sur le total.",
        ],
      },
      {
        title: "Traitez l'écart avant tout paiement",
        actions: [
          "Écart de prix : demandez une facture corrigée au fournisseur ; n'ajustez pas vous-même le montant à payer sans pièce.",
          "Écart de quantité : réserve sur le GRN ; avoir ou livraison complémentaire.",
          "Ne transmettez à la Finance qu'une facture rapprochée sans écart.",
        ],
      },
    ],
    table: {
      columns: ["Ligne", "PO", "GRN", "Facture", "Écart"],
      rows: [
        ["Farine (kg × prix)", "2 420 × 0,56 = 1 355,20", "2 420 kg", "2 420 × 0,56 = 1 355,20", "0"],
        ["Haricots (kg × prix)", "330 × 0,92 = 303,60", "330 kg", "330 × 0,95 = 313,50", "+ 9,90 (prix)"],
        ["Huile (L × prix)", "170 × 2,38 = 404,60", "170 L", "170 × 2,38 = 404,60", "0"],
        ["Sel (kg × prix)", "25 × 0,52 = 13,00", "25 kg", "25 × 0,52 = 13,00", "0"],
        ["Total", "2 076,40", "Conforme", "2 086,30", "+ 9,90"],
      ],
    },
    result: "Un écart de 9,90 EUR identifié (haricots facturés au prix de l'offre au lieu du prix négocié) : facture corrigée demandée le 28/04, reçue le 29/04 à 2 076,40 EUR.",
    pitfall: "Payer « pour 9,90 EUR, ça ne vaut pas la peine » : l'écart est un prix négocié non respecté, et sur 6 mois il se répète ; une facture non rapprochée est une non-conformité même pour un faible montant.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 12 — DOSSIER D'ACHAT, CHECKLIST FINANCE, MATRICE D'AUTORISATION
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 12 — Étape 1 sur 6",
    title: "Assembler le dossier d'achat dans l'ordre chronologique",
    intro: "C'est ce dossier complet, pas seulement la PO, qu'un auditeur bailleur demande en premier. Un dossier incomplet, même pour un achat parfaitement honnête, est traité comme une non-conformité. Rassemblez dans un seul dossier, physique ou numérique, les pièces dans l'ordre où elles ont été créées.",
    steps: [
      {
        title: "Classez les onze pièces dans l'ordre",
        actions: [
          "Créez le dossier « AOR-2026-003_PO-2026-031 » avec un index en première page : numéro de pièce, intitulé, date, emplacement.",
          "Classez de 1 à 11 sans trou : si une pièce n'existe pas, écrivez « non applicable » avec le motif dans l'index.",
        ],
      },
      {
        title: "Contrôlez les dates entre elles",
        actions: [
          "Chaque pièce doit être datée après la précédente : l'IR avant l'envoi de la consultation, la CBA après l'ouverture, la PO après le PV de négociation, la facture après le GRN.",
          "Une date incohérente est le premier indice qu'une pièce a été fabriquée après coup.",
        ],
      },
    ],
    table: {
      columns: ["N°", "Pièce du dossier", "Date Kerowa"],
      rows: [
        ["1", "PR / IR signée (IR-2026-014)", "09/03/2026"],
        ["2", "Note d'étude de marché et note de gel des critères", "13/03 et 26/03/2026"],
        ["3", "Preuve d'envoi de la consultation et liste des fournisseurs contactés", "27/03/2026"],
        ["4", "Offres reçues et registre d'ouverture", "06 et 07/04/2026"],
        ["5", "Grille CBA complétée", "08 – 09/04/2026"],
        ["6", "PV du CPC signé", "10/04/2026"],
        ["7", "PV de négociation signé", "14/04/2026"],
        ["8", "Contrat-cadre et PO-2026-031 signés", "16 et 17/04/2026"],
        ["9", "GRN (bon de réception)", "27/04/2026"],
        ["10", "Facture corrigée et rapprochement à trois", "29/04/2026"],
        ["11", "Demande de paiement et preuve de paiement", "30/04 et 27/05/2026"],
      ],
    },
    result: "Un dossier de onze pièces, indexé, daté dans l'ordre, prêt pour la checklist Finance.",
    pitfall: "Ne garder que la PO et la facture « parce que c'est ce que la Finance demande » : au premier audit, les pièces 1 à 7 sont celles qu'on cherchera d'abord.",
  },
  {
    type: "process",
    stepLabel: "Procédure 12 — Étape 2 sur 6",
    title: "Checklist Finance : la section A et les contrôles 1 à 4",
    intro: "Le classeur checklist-validation-dossier-achat.xlsx a deux feuilles : « Checklist Validation » (le contrôle documentaire en 13 points, avant paiement) et « Matrice d'autorisation ». Sa devise : NO DOCUMENT / NO APPROVAL → NO PAYMENT. Enregistrez-le sous « L9_Checklist_PO-2026-031.xlsx ».",
    steps: [
      {
        title: "Section A « Identification du dossier » (lignes 7 à 16)",
        actions: [
          "Dans la colonne de saisie de chaque ligne : N° PO/FO, Référence dossier, Date du PO/FO, Fournisseur, Département / Projet (remplacez « [Projet] »), Objet de l'achat, Devise, Montant total, Responsable du dossier, Date de soumission Finance.",
        ],
      },
      {
        title: "Section B, contrôles 1 à 4 (lignes 20 à 23)",
        actions: [
          "Colonnes B à E : étape, description, critère de vérification, pièce justificative attendue ; colonne F (Statut) : liste déroulante Oui / Non / N/A.",
          "Contrôle 1, Validation de l'IR : signature ou validation électronique datée, antérieure à la date de la RFQ.",
          "Contrôle 2, RFQ conforme à l'IR : mêmes spécifications, tout écart documenté. Contrôle 3, Articles IR vs RFQ : comparaison ligne à ligne.",
          "Contrôle 4, Analyse CBA : complétée, datée, référençant au moins 3 offres si le seuil l'exige.",
        ],
      },
    ],
    example: {
      title: "Kerowa — section A et contrôles 1 à 4",
      lines: [
        "A : PO-2026-031 | AOR-2026-003 | 17/04/2026 | Coopérative Agro-Warrap | Projet nutrition Gogrial, ECHO | Vivres non périssables, 1er appel | EUR | 2 076,40 | Esther L. | 30/04/2026.",
        "1 : Oui — IR signée 09/03, RFQ envoyée 27/03. 2 : Oui — spécifications reprises de l'IR. 3 : Oui — 4 lignes IR = 4 lignes RFQ. 4 : Oui — CBA du 09/04, 3 offres.",
      ],
    },
    result: "Section A complète et contrôles 1 à 4 à « Oui », chaque statut adossé à une pièce du dossier.",
    pitfall: "Cocher « Oui » sans ouvrir la pièce : la checklist est un contrôle, pas une formalité ; une case cochée sans pièce est un faux.",
  },
  {
    type: "process",
    stepLabel: "Procédure 12 — Étape 3 sur 6",
    title: "Checklist Finance : les contrôles 5 à 9 (cohérence entre documents)",
    intro: "Ces cinq contrôles vérifient que l'ensemble du dossier raconte une seule et même histoire : même besoin, mêmes articles, mêmes montants, même imputation budgétaire.",
    steps: [
      {
        title: "Contrôles 5 à 7 : instrument, articles et montant",
        actions: [
          "5, PO ou contrat commercial : le bon instrument (PO ponctuelle ou contrat-cadre) correspond à la nature et à la récurrence de l'achat ; pièce : PO ou contrat signé.",
          "6, Articles IR/RFQ vs PO/FO : comparaison ligne à ligne entre RFQ et PO ; pièce : tableau de correspondance.",
          "7, Montant RFQ vs PO/FO : le prix total de la PO correspond au prix de l'offre gagnante documentée dans la CBA, ou à l'accord de négociation ; pièce : CBA + PO rapprochées.",
        ],
      },
      {
        title: "Contrôles 8 et 9 : imputation et cohérence globale",
        actions: [
          "8, Imputation budgétaire PO/FO vs IR : code budgétaire identique, ou changement documenté et approuvé.",
          "9, Cohérence IR/PO-FO : dates, montants et responsables se recoupent logiquement ; pièce : revue documentaire globale.",
        ],
      },
    ],
    example: {
      title: "Kerowa — contrôles 5 à 9",
      lines: [
        "5 : Oui — contrat-cadre signé le 16/04 pour un besoin récurrent, PO d'appel le 17/04.",
        "6 : Oui — 4 lignes identiques. 7 : Oui — prix de la PO (0,56 / 0,92 / 2,38 / 0,52) = accord final du PV de négociation du 14/04 ; le total d'un appel (2 076,40) est cohérent avec la valeur du contrat (12 418 / 6 ≈ 2 070).",
        "8 : Oui — même ligne budgétaire ECHO « alimentation des accompagnants » sur l'IR et la PO. 9 : Oui — chronologie 09/03 → 17/04 sans contradiction.",
      ],
    },
    result: "Contrôles 5 à 9 à « Oui », avec la pièce de rapprochement jointe pour chacun.",
    tip: "Si un code budgétaire a changé entre l'IR et la PO, ne cochez pas « Oui » tant que le changement n'est pas documenté et approuvé par le budget holder.",
  },
  {
    type: "process",
    stepLabel: "Procédure 12 — Étape 4 sur 6",
    title: "Checklist Finance : les contrôles 10 à 13 (signatures, réception, facture, paiement)",
    intro: "Les quatre derniers contrôles couvrent la fin du cycle : signatures conformes à la matrice, livraison constatée, facture conforme à la PO, demande de paiement fidèle à la facture. C'est là que se bloquent le plus souvent les dossiers.",
    steps: [
      {
        title: "Contrôles 10 et 11 : signatures et réception",
        actions: [
          "10, Signatures et approbations : nombre et niveau de signataires conformes à la tranche de montant de la matrice d'autorisation (feuille 2).",
          "11, Réception de marchandise : un GRN ou équivalent, daté et signé par le réceptionnaire, établi avant tout paiement.",
        ],
      },
      {
        title: "Contrôles 12 et 13 : facture et demande de paiement",
        actions: [
          "12, PO/FO vs facture : rapprochement ligne à ligne (articles, quantités, prix) ; pièce : PO et facture rapprochées.",
          "13, Facture vs demande de paiement : montant, devise et bénéficiaire identiques ; pièce : facture et demande de paiement rapprochées.",
          "Si un contrôle n'est pas applicable, choisissez « N/A » et notez la raison dans l'index du dossier.",
        ],
      },
    ],
    example: {
      title: "Kerowa — première lecture du 28/04/2026 (avant facture corrigée)",
      lines: [
        "10 : Oui — PO signée par le SCM et Daniel O. (tranche 2). 11 : Oui — GRN du 27/04, aucune réserve.",
        "12 : Non — facture 2 086,30 EUR contre PO 2 076,40 EUR : haricots facturés à 0,95 au lieu de 0,92, écart 9,90 EUR.",
        "13 : (non renseigné) — la demande de paiement ne peut pas être établie tant que la facture n'est pas corrigée.",
      ],
    },
    result: "Premier passage : 11 contrôles à « Oui », 1 à « Non », 1 non renseigné ; la raison du « Non » est tracée.",
    pitfall: "Passer le contrôle 12 à « Oui » pour que la case soit verte : le statut automatique vous contredit à l'étape suivante, et la Finance bloquera de toute façon.",
  },
  {
    type: "process",
    stepLabel: "Procédure 12 — Étape 5 sur 6",
    title: "Lire le statut final automatique et faire valider le dossier",
    intro: "Le bloc « STATUT FINAL » (lignes 34 à 42) se calcule à partir des 13 statuts. Vous n'écrivez rien dedans : vous lisez, puis vous agissez. Le statut peut valoir « FINANCE READY », « INCOMPLET » ou « BLOQUÉ ».",
    steps: [
      {
        title: "Lisez les compteurs",
        actions: [
          "E35 : total des contrôles (13). E36 : conformes (Oui). E37 : non conformes (Non). E38 : N/A. E39 : non renseignés.",
          "E40 : pourcentage de conformité = Oui ÷ (13 − N/A). E42 : décision automatique.",
          "Règle du calcul : au moins un « Non » donne BLOQUÉ ; sinon des contrôles non renseignés donnent INCOMPLET ; sinon FINANCE READY.",
        ],
      },
      {
        title: "Corrigez, relisez, puis faites signer",
        actions: [
          "Traitez la cause de chaque « Non », avec la pièce corrective, puis mettez à jour le statut.",
          "Quand E42 affiche FINANCE READY : remplissez Préparé par, Vérifié par, Validé par (Nom, Signature, Date) et cochez « Dossier validé pour paiement ».",
          "Sinon, cochez « Dossier bloqué — retourné au demandeur pour complément » et renvoyez-le avec la liste des écarts.",
        ],
      },
    ],
    table: {
      columns: ["Compteur", "28/04 (1er passage)", "30/04 (après facture corrigée)"],
      rows: [
        ["Conformes (Oui)", "11", "13"],
        ["Non conformes (Non)", "1", "0"],
        ["Non renseignés", "1", "0"],
        ["% de conformité", "84,6 %", "100 %"],
        ["Décision automatique", "BLOQUÉ — au moins un contrôle non conforme", "FINANCE READY"],
      ],
    },
    example: {
      title: "Kerowa — validation du 30/04/2026",
      lines: [
        "Facture corrigée reçue le 29/04 à 2 076,40 EUR : contrôle 12 passé à « Oui » ; demande de paiement établie à 2 076,40 EUR, contrôle 13 « Oui ».",
        "Préparé par : Esther L. Vérifié par : le SCM. Validé par : Joseph K. Case « Dossier validé pour paiement » cochée. Échéance de paiement : 27/05/2026 (30 jours après réception).",
      ],
    },
    result: "Livrable L9 (dossier) terminé : checklist à 13 « Oui », statut FINANCE READY, trois signatures, dossier archivé.",
    pitfall: "Modifier à la main les formules du bloc « Statut final » pour afficher FINANCE READY : le statut est un contrôle indépendant ; toute modification est une falsification.",
  },
  {
    type: "process",
    stepLabel: "Procédure 12 — Étape 6 sur 6",
    title: "Fixer la matrice d'autorisation de votre mission (feuille 2)",
    intro: "La feuille « Matrice d'autorisation » précise qui doit signer à quelle étape selon le montant. Les cinq tranches sont génériques : chaque mission renseigne ses propres seuils dans les cellules [montant], dans sa devise de référence, en cohérence avec sa politique d'achat et les plafonds du bailleur. La matrice a deux tableaux identiques, BIENS (lignes 13 à 19) et SERVICES (lignes 22 à 28).",
    steps: [
      {
        title: "Renseignez les seuils et le bloc « VALIDÉ PAR »",
        actions: [
          "Colonne B (Montant) de chaque tranche : remplacez « [montant] » par la fourchette réelle (BIENS et SERVICES).",
          "Lignes 6 à 8 « VALIDÉ PAR » : Finance Manager (FinCo), Supply Manager (SupplyCo), Chef de Mission, avec Nom, Fonction, Date. Trois validations, pas une.",
        ],
      },
      {
        title: "Adaptez les signataires aux postes de la mission",
        actions: [
          "Pour chacune des quatre étapes (Processus achat, Engagement, Réception, Paiement), les colonnes donnent : document requis, signataires, preuve de paiement.",
          "Remplacez les rôles génériques (Supply Officer, Responsable du contenu, Coordinateur Projet) par les titulaires réels, sans réduire le nombre de signataires.",
          "Recopiez le même contenu dans le tableau SERVICES, puis faites relire par la Finance.",
        ],
      },
    ],
    table: {
      columns: ["Tranche", "Montant Kerowa (EUR)", "Processus achat", "Signataires de la PO / du contrat", "Signataires sur facture"],
      rows: [
        ["1", "< 1 000", "RFQ / bon de commande simple", "SCM", "SCM"],
        ["2", "1 000 à < 5 000", "RFQ + 3 devis", "SCM + coordinateur terrain", "SCM + responsable finance"],
        ["3", "5 000 à < 10 000", "RFQ + CBA", "SCM + responsable programme + coordinateur terrain", "SCM + responsable programme"],
        ["4", "10 000 à < 60 000", "AO restreint / RFP + CBA + PV CPC", "SCM + responsable programme + coordinateur terrain + coordinatrice pays", "Responsable programme + coordinateur terrain + responsable finance"],
        ["5", "≥ 60 000", "AO ouvert + CBA + PV CPC siège", "Contrat visé siège ; + responsable finance + coordinatrice pays", "+ coordinatrice pays"],
      ],
    },
    example: {
      title: "Kerowa — bloc « VALIDÉ PAR » (lignes 6 à 8)",
      lines: [
        "Finance Manager (FinCo) : Joseph K., Responsable administration-finance, 20/04/2026.",
        "Supply Manager (SupplyCo) : le SCM, 20/04/2026. Chef de Mission : Grace M., Coordinatrice pays, 20/04/2026.",
      ],
    },
    result: "Livrable L9 (matrice) terminé : cinq tranches renseignées pour BIENS et SERVICES, trois validations signées.",
    tip: "Ajoutez la ligne « Urgence » dans la note d'accompagnement : qui peut autoriser une procédure accélérée, avec quelle justification écrite et quel délai de régularisation. L'urgence raccourcit le délai de réponse, jamais la mise en concurrence.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 13 — AVANCE DE CAISSE (PALIER 1)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "process",
    stepLabel: "Procédure 13 — Étape 1 sur 2",
    title: "Remplir la demande d'avance de caisse",
    intro: "Le classeur demande-avance-terrain.xlsx sert quand un achat terrain de faible montant (palier 1) doit être réglé en espèces avant qu'une PO soit possible. Il a deux feuilles : « Demande d'avance » et « Rendu d'avance ». Règle imprimée en tête : une avance doit être dépensée sur les dépenses prévues, les dépenses non justifiées doivent être remboursées.",
    steps: [
      {
        title: "Remplissez l'en-tête (lignes 6 à 12)",
        actions: [
          "Nom du bénéficiaire, Poste, Signature, Avance du jour #, Date, Avance numéro, Devise.",
          "Le libellé « Avance du jour # » n'est pas défini dans le template : donnez-lui une convention écrite (par exemple le rang de l'avance dans la journée).",
        ],
      },
      {
        title: "Détaillez la demande (lignes 16 à 27) et faites valider",
        actions: [
          "Tableau N° | Description | Montant estimé : 12 lignes maximum. Dans la description, présentez les PO ou contrats concernés quand ils existent.",
          "TOTAL DEMANDE (F28) additionne les montants estimés : ne l'écrasez pas.",
          "Bloc VALIDATION : le superviseur signe (Nom, Signature, Date) après avoir vérifié la note en bas : les RO et PO ont été présentées et approuvées, et le bénéficiaire n'a pas une avance non soldée.",
        ],
      },
    ],
    example: {
      title: "Kerowa — avance AV-2026-007 du 20/04/2026, bénéficiaire Peter A., logisticien",
      lines: [
        "1 | 8 palettes en bois (8 × 12,50) | 100 EUR. 2 | 4 cadenas (4 × 6) | 24 EUR. 3 | 2 bâches d'entrepôt (2 × 35) | 70 EUR.",
        "4 | Recharge d'un extincteur | 45 EUR. 5 | Transport local du matériel | 30 EUR.",
        "TOTAL DEMANDE : 269 EUR, palier 1 (< 1 000 EUR). Superviseur : le SCM, après vérification qu'aucune avance de Peter A. n'est en attente de solde.",
      ],
    },
    result: "Demande d'avance de 269 EUR validée par le superviseur, bénéficiaire sans avance non soldée.",
    pitfall: "Donner une seconde avance à un bénéficiaire qui n'a pas soldé la première : le contrôle « pas d'avance non soldée » existe parce que c'est la voie classique de la perte de fonds.",
  },
  {
    type: "process",
    stepLabel: "Procédure 13 — Étape 2 sur 2",
    title: "Rendre compte de l'avance : dépenses justifiées, solde restitué, reçu de caisse",
    intro: "Le rendu d'avance impose de justifier chaque dépense et de restituer tout solde non dépensé. Il se fait dès que les achats sont terminés. Joignez les factures validées et les photocopies de PO ou contrats validés.",
    steps: [
      {
        title: "Remplissez l'en-tête et les dépenses",
        actions: [
          "Lignes 4 à 9 : nom du bénéficiaire, poste, date, avance du jour #, devise, avance numéro. Lignes 12 et 13 : date et montant de l'avance reçue.",
          "Tableau lignes 19 à 30 : N° | Date | Descriptif de l'achat | Projet | Montant | Total cumulé (colonne F, formule automatique).",
          "TOTAL DÉPENSÉ JUSTIFIÉ (E32) additionne les montants justifiés. Chaque ligne doit avoir sa pièce jointe.",
        ],
      },
      {
        title: "Soldez et remplissez le reçu de caisse",
        actions: [
          "Calculez le solde : avance reçue − total dépensé justifié. Restituez-le au caissier.",
          "Section « REÇU DE CAISSE » (lignes 34 à 42) : avance numéro, montant reçu (le solde restitué), courte description ; le caissier et le titulaire de l'avance signent et datent. Le coupon est remis au titulaire.",
        ],
      },
    ],
    example: {
      title: "Kerowa — rendu de l'avance AV-2026-007 du 22/04/2026",
      lines: [
        "Palettes 100 ; cadenas 24 ; bâches 2 × 33 = 66 (prix inférieur à l'estimation) ; recharge extincteur 45 ; transport 25.",
        "Total dépensé justifié : 100 + 24 + 66 + 45 + 25 = 260 EUR. Avance reçue : 269 EUR. Solde restitué : 9 EUR.",
        "Reçu de caisse : montant reçu 9 EUR, signé par le caissier et par Peter A. le 22/04/2026. Avance soldée.",
      ],
    },
    result: "Livrable L10 terminé : avance et rendu complets, solde de 9 EUR restitué, reçu de caisse signé.",
    pitfall: "Régulariser le rendu « plus tard, quand j'aurai toutes les factures » : une avance non soldée à la date limite bloque toute avance suivante et peut être déduite du salaire.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU — KEROWA SANTÉ, DE L'IR AU PAIEMENT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "case-study",
    title: "Cas résolu (1/5) — Cadrer l'achat : IR, palier, instrument, critères",
    scenario: "Rappel : lundi 9 mars 2026, Kerowa Santé doit acheter six mois de vivres non périssables pour le centre de stabilisation nutritionnelle de Gogrial (14 500 kg de farine, 2 000 kg de haricots, 1 000 L d'huile enrichie, 150 kg de sel iodé). Le grossiste historique est fournisseur unique, trois achats antérieurs sont à régulariser.",
    steps: [
      { title: "Procédure 1 — Le besoin devient une IR", body: "IR-2026-014 remplie ligne par ligne, spécifications mesurables (humidité, vitamine A, iodation), quatre signatures le 09/03 dont la validation du budget holder.", result: "Montant total estimé 12 955 EUR ; palier 3 de Kerowa ; fractionnement interdit." },
      { title: "Procédure 4 — L'instrument est choisi", body: "Spécification figée, palier 3, besoin récurrent sur 6 mois : AO restreint suivi d'un contrat-cadre, après étude de marché et AMI.", result: "Note de gel signée le 26/03 : 4 critères éliminatoires, grille 60 / 20 / 10 / 10 avec barèmes." },
    ],
    tip: "Chaque décision du cas se retrouve dans une pièce datée du dossier : c'est la définition d'un achat auditable.",
  },
  {
    type: "case-study",
    title: "Cas résolu (2/5) — Étude de marché, AMI et shortlist",
    scenario: "Le marché de Wau est mal connu : un seul fournisseur actif, quatre jamais consultés. Il faut une liste restreinte défendable avant l'AO.",
    steps: [
      { title: "Procédure 2 — Étude de marché (10 au 13 mars)", actions: ["Benchmark daté : farine 0,58 à 0,64 EUR/kg, haricots 0,85 à 0,95 EUR/kg ; l'achat T07 à 842 EUR/t est écarté (un seul devis, validateur inconnu).", "5 fournisseurs identifiés, 4 fiches contrôlées ; le RIB de D est au nom d'une personne physique.", "Note d'étude de marché signée le 13/03 : recommande un AMI puis un AO restreint."] },
      { title: "Procédure 3 — AMI (16 au 26 mars)", actions: ["Avis du 16/03 avec critères pass/fail, clôture le 23/03 à 12 h.", "4 manifestations reçues : A, B et C qualifiés ; D non qualifié (registre non valide, CA de 40 000, aucune référence).", "Note de shortlist signée le 26/03 par deux personnes, notifications envoyées."] },
    ],
    result: "Une shortlist de trois fournisseurs, motivée par une grille écrite et signée avant l'envoi de l'AO.",
  },
  {
    type: "case-study",
    title: "Cas résolu (3/5) — La CBA finale de l'AO restreint AOR-2026-003",
    scenario: "Trois offres reçues avant la clôture du 07/04 à 12 h, ouvertes à 14 h par deux personnes. Voici la CBA après contrôles du 08 et 09/04.",
    steps: [
      { title: "Ce que les contrôles ont révélé", actions: ["B : huile non enrichie, éliminatoire : offre écartée malgré le total le plus bas (12 185 EUR).", "C : total des haricots recalculé (1 960 devenu 1 900) ; sel non chiffré, clarifié à 0,52 EUR/kg (78 EUR).", "Contrôle anti-collusion : six contrôles, aucun signal."] },
    ],
    table: {
      columns: ["Fournisseur", "Total corrigé (EUR)", "Prix (60)", "Technique (20)", "Délai (10)", "Paiement (10)", "Score", "Rang"],
      rows: [
        ["C — Coopérative Agro-Warrap", "12 623", "60,0", "17", "8", "10", "95,0", "1"],
        ["A — Grossiste Wau", "13 362,50", "56,7", "20", "10", "7", "93,7", "2"],
        ["B — Wau Négoce Alimentaire", "12 185", "—", "—", "—", "—", "Écartée", "—"],
      ],
    },
    result: "CBA du template remplie : conclusion « C recommandée, A en repli, visite de l'entrepôt avant signature » et justification en quatre points.",
  },
  {
    type: "case-study",
    title: "Cas résolu (4/5) — CPC du 10 avril et négociation du 14 avril",
    scenario: "Le CPC réunit trois membres votants (finance, technique, présidence) ; le demandeur et le rapporteur présentent sans voter.",
    steps: [
      { title: "Procédure 8 — PV de CPC", actions: ["Sections 1 à 7 remplies, décision unanime 3 sur 3 : C retenue sous réserve de visite, A rang 2, B écartée.", "Discussion tracée : qualité des haricots, nouveau fournisseur, dépendance.", "Mandat de négociation autorisé."] },
      { title: "Procédure 9 — PV de négociation", actions: ["Farine 0,57 devient 0,56 ; haricots 0,95 devient 0,92 ; délai 10 devient 8 jours ; pénalités de 0,5 % par jour, plafond 10 % ; révision trimestrielle plafonnée à ± 5 %.", "Contreparties de Kerowa : plan mensuel, prévisions à 30 jours, paiement à 30 jours.", "Accord final : 12 418 EUR, soit 205 EUR sous l'offre et 537 EUR sous l'estimation."] },
    ],
    result: "Deux PV signés, une décision motivée et une négociation dans le mandat.",
  },
  {
    type: "case-study",
    title: "Cas résolu (5/5) — Contrat-cadre, PO, rapprochement et dossier FINANCE READY",
    scenario: "Du 16 avril au 30 avril, l'achat passe de la décision à un dossier prêt pour le paiement.",
    steps: [
      { title: "Procédures 10 et 11 — Engager et réceptionner", actions: ["Contrat-cadre signé le 16/04 par la coordinatrice pays (valeur 12 418 EUR, 6 mois, révision le 16/07).", "PO-2026-031 du 17/04 : 2 076,40 EUR, signée par le SCM et le coordinateur terrain.", "GRN du 27/04 : livraison conforme, aucune réserve."] },
      { title: "Procédures 11 et 12 — Rapprocher et valider", actions: ["3-way match : facture à 2 086,30 EUR contre PO à 2 076,40 EUR, écart de 9,90 EUR sur les haricots ; facture corrigée reçue le 29/04.", "Checklist Finance : premier passage 11 Oui, 1 Non, 1 non renseigné, statut BLOQUÉ ; second passage 13 Oui, FINANCE READY le 30/04.", "Paiement à l'échéance du 27/05."] },
    ],
    example: {
      title: "Dossier d'achat final — extrait de l'index",
      lines: [
        "1 IR 09/03 | 2 Notes étude de marché et gel 13/03, 26/03 | 3 Envoi consultation 27/03 | 4 Offres et registre 07/04 | 5 CBA 09/04 | 6 PV CPC 10/04 | 7 PV négociation 14/04 | 8 Contrat-cadre et PO 16 et 17/04 | 9 GRN 27/04 | 10 Facture corrigée 29/04 | 11 Demande et preuve de paiement 30/04 et 27/05.",
      ],
    },
    result: "Le cas est résolu : onze pièces, aucun trou, statut FINANCE READY, et un contrat-cadre qui évitera de relancer une consultation à chaque commande.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "exercise",
    title: "Exercice 1 (noté) — Achat urgent d'un générateur, projet santé, Beni, RDC",
    instructions: "Vous êtes Log Officer pour une ONG médicale internationale (fictive) qui gère un centre de santé à Beni, Nord-Kivu. Le générateur qui alimente la chaîne du froid du dépôt de vaccins et le bloc d'urgences est tombé en panne définitive il y a 3 jours. Sans générateur sous 5 jours, les stocks de vaccins devront être transférés vers un centre situé à 40 km, sur une route en mauvais état. Le montant estimé (35 000 USD) place l'achat au-dessus du seuil de consultation restreinte : RFQ formelle avec passage en CPC obligatoire. Votre assistant achats vous transmet trois offres reçues dans le délai imparti. Vous devez produire, avant l'échéance de 5 jours, la CBA et le PV de CPC.",
    table: {
      columns: ["Offre", "Fournisseur", "Générateur proposé", "Prix total (USD)", "Délai", "Contact"],
      rows: [
        ["Offre 1", "Kivu Power Générateurs SARL", "60 kVA, insonorisé", "34 850", "10 jours", "J. Mumbere, +243 99 XXX 1122"],
        ["Offre 2", "Beni Energy Solutions", "60 kVA, insonorisé", "34 850", "10 jours", "+243 99 XXX 1122 (poste : J. Mumbere)"],
        ["Offre 3", "Grands Lacs Équipements Industriels", "65 kVA, insonorisé, garantie 2 ans", "41 200", "14 jours", "S. Kahindo, +243 97 XXX 4478"],
      ],
    },
    steps: [
      { title: "Construisez la CBA (procédure 7)", actions: ["Dupliquez la structure de cas-pratique-analyse-comparative-offres-cba.xlsx : Prix unitaire, Prix total, Commentaire par fournisseur.", "Identifiez le moins-disant, puis remplissez la colonne Commentaire avec chaque élément qui vous alerte."] },
      { title: "Faites le contrôle anti-collusion", actions: ["Appliquez les six contrôles et écrivez le résultat dans la CBA."] },
      { title: "Composez le comité et rédigez le PV (procédure 8)", actions: ["Simulez une réunion à 3 membres avec pv-comite-achats-cpc.docx, sections 1 à 7.", "Documentez la décision d'écarter l'une des deux offres suspectes malgré son prix plus bas, la justification, et la recommandation de signalement au référent compliance ou anti-fraude."] },
    ],
    deliverable: "Les deux fichiers complétés : la CBA et le PV de CPC. La décision documentée ne doit jamais se limiter à « offre la moins chère retenue » : elle démontre que le comité a examiné la cohérence des trois offres entre elles.",
  },
  {
    type: "concept",
    title: "Exercice 1 — Éléments de correction (à consulter après avoir fait l'exercice)",
    body: "Comparez votre travail à ces repères. D'autres choix sont acceptables s'ils sont justifiés par les données et documentés.",
    table: {
      columns: ["Offre", "Total (USD)", "Écart vs offre 1", "Alertes à écrire dans la colonne Commentaire"],
      rows: [
        ["1 — Kivu Power", "34 850", "—", "Moins-disant apparent. Même modèle, même prix, même délai et même contact que l'offre 2."],
        ["2 — Beni Energy", "34 850", "0 %", "Prix identique au dollar près, même numéro de contact (seul le nom de l'en-tête change) : profil de collusion, un seul fournisseur sous deux raisons sociales."],
        ["3 — Grands Lacs", "41 200", "+ 6 350 (+ 18,2 %)", "Seule offre indépendante (contact, délai, garantie différents). Puissance de 65 kVA conforme (supérieure à 60 kVA) ; garantie de 2 ans."],
      ],
    },
    example: {
      title: "PV de CPC — sections 5 et 6 (modèle de rédaction)",
      lines: [
        "Discussion : les offres 1 et 2 sont identiques (prix, modèle, délai, contact). Le comité les traite comme une seule offre. Aucune des trois offres ne livre sous 5 jours (10, 10 et 14 jours) : un plan de continuité est demandé (location d'un groupe de secours ou transfert partiel des vaccins en glacières).",
        "Décision : offre 2 écartée ; offre 1 suspendue jusqu'à vérification de son indépendance par le référent compliance sous 48 h (registre de commerce, adresse, compte bancaire). Si les deux offres relèvent du même fournisseur, attribution à l'offre 3, sous réserve de négociation du délai.",
        "Justification : le prix le plus bas ne résulte pas d'une mise en concurrence réelle ; l'écart de 6 350 USD (18,2 %) est le coût d'une concurrence indépendante et d'une garantie de 2 ans.",
        "Suite : signalement au référent compliance et anti-fraude avant l'échéance de 5 jours, avec la CBA et les offres. Signatures des trois membres présents.",
      ],
    },
    bullets: [
      "Quorum : trois membres dont un profil finance ou compliance et un profil technique ; le Log Officer présente et n'a pas de voix.",
      "Le piège du moins-disant : un prix identique ne prouve pas la bonne affaire, il signale l'absence de concurrence.",
    ],
  },
  {
    type: "exercise",
    title: "Exercice 2 — Choisir la procédure et détecter un fractionnement (Lumen Eau & Abri)",
    instructions: "Lumen Eau & Abri (ONG fictive, département du Mayo-Tsanaga, Cameroun) applique les paliers génériques : achat direct jusqu'à 1 000 USD, consultation restreinte jusqu'à 25 000 USD, appel d'offres formel jusqu'à 100 000 USD, achat stratégique au-delà. Pour chaque besoin, choisissez l'instrument et justifiez-le en une phrase, puis analysez les trois PO.",
    table: {
      columns: ["Besoin", "Estimation (USD)", "Particularité"],
      rows: [
        ["a) 200 bâches d'abri", "8 000", "Spécification figée"],
        ["b) Bureau d'études pour un forage", "40 000", "Forage manuel ou motorisé : à proposer par le prestataire"],
        ["c) Entrepôt régional de 500 m²", "150 000", "Plans et spécifications figés"],
        ["d) Kits d'hygiène", "60 000 par an", "Commandes mensuelles pendant 12 mois"],
        ["e) Transporteurs routiers régionaux", "Inconnu", "Marché mal connu, accord-cadre envisagé"],
      ],
    },
    steps: [
      { title: "Choisissez l'instrument pour a à e", actions: ["Appliquez les trois questions de la procédure 4 : spécification figée ? palier ? besoin récurrent ? marché connu ?"] },
      { title: "Analysez trois PO", actions: ["Fournisseur X, même projet et même famille (pompes) : PO du 12/05 à 9 800 USD, du 14/06 à 9 700 USD, du 15/07 à 9 900 USD.", "Calculez le total, identifiez le palier réellement applicable, nommez la pratique et écrivez les mesures de régularisation."] },
    ],
    deliverable: "Un tableau de cinq lignes (besoin, instrument, justification) et une note d'une demi-page sur les trois PO.",
  },
  {
    type: "concept",
    title: "Exercice 2 — Éléments de correction",
    body: "Les réponses attendues, avec la logique à retrouver.",
    table: {
      columns: ["Besoin", "Instrument", "Justification"],
      rows: [
        ["a) 200 bâches", "RFQ (palier 2)", "Spécification figée, montant sous 25 000 USD, 3 devis écrits"],
        ["b) Bureau d'études forage", "RFP (palier 3)", "La meilleure solution technique n'est pas connue : l'approche compte autant que le prix"],
        ["c) Entrepôt 500 m²", "AO ouvert (palier 4), CPC + siège", "Forte valeur, spécification homogène, mise en concurrence la plus large"],
        ["d) Kits d'hygiène", "Contrat-cadre, attribué sur 60 000 USD cumulés", "Besoin récurrent : une procédure, puis commandes mensuelles ; volumes indicatifs non engageants"],
        ["e) Transporteurs régionaux", "AMI, puis RFP ou AO restreint", "Marché mal connu : présélection documentée, aucun prix demandé"],
      ],
    },
    example: {
      title: "Les trois PO du fournisseur X",
      lines: [
        "Total : 9 800 + 9 700 + 9 900 = 29 400 USD, supérieur à 25 000 USD : palier 3 (appel d'offres formel, CPC).",
        "Pratique : fractionnement (« purchase splitting »), chaque PO restant sous 10 000 USD, la même famille chez le même fournisseur sur trois mois.",
        "Régularisation : note au dossier datée et signée, information du référent compliance, passage du besoin cumulé devant un CPC, mise en concurrence formelle pour les achats futurs, éventuellement contrat-cadre. Jamais de pièce antidatée.",
      ],
    },
  },
  {
    type: "exercise",
    title: "Exercice 3 — Transposer à un achat réel de votre mission",
    instructions: "Choisissez un achat significatif récent (ou à venir) de votre mission, de palier 2 ou 3. Si vous n'êtes pas en poste, utilisez une mission dont vous connaissez bien le contexte. Respectez l'ordre des procédures : chaque livrable sert d'entrée au suivant.",
    steps: [
      { title: "Besoin et palier", actions: ["IR complète avec les quatre signatures, montant total estimé, palier, contrôle anti-fractionnement (procédure 1)."] },
      { title: "Marché et instrument", actions: ["Benchmark daté, au moins 3 fournisseurs identifiés, note d'étude de marché, choix de l'instrument et critères gelés avant l'envoi (procédures 2 à 4)."] },
      { title: "Consultation et CBA", actions: ["Formulaire de cotation, registre d'ouverture, CBA avec anomalies et contrôle anti-collusion (procédures 5 à 7)."] },
      { title: "Décision et engagement", actions: ["PV de CPC (ou justification de son absence sous le seuil), PV de négociation, PO ou contrat-cadre (procédures 8 à 11)."] },
      { title: "Dossier", actions: ["Checklist Finance en 13 points, statut visé FINANCE READY, et matrice d'autorisation de votre mission (procédure 12)."] },
    ],
    tip: "Anonymisez les noms de fournisseurs et les prix négociés si vous partagez votre travail en dehors de votre organisation.",
    deliverable: "Votre propre dossier d'achat complet, réutilisable comme modèle sur chaque nouvelle consultation.",
  },
  {
    type: "checklist",
    title: "Votre livrable est correct si…",
    items: [
      "L'IR porte les quatre signatures datées avant toute consultation, chaque ligne a une spécification mesurable, et le montant total n'est pas fractionné.",
      "Le benchmark de prix est daté et sourcé, la note d'étude de marché écrit ce qui n'a pas pu être vérifié, et aucune étude de marché n'a demandé de prix ferme.",
      "Les critères et leurs poids (total 100) sont signés avant l'envoi de la consultation, avec les barèmes et les critères éliminatoires.",
      "Le registre d'ouverture montre au moins deux personnes, et chaque offre a été reçue avant la clôture.",
      "La CBA reprend la structure du cas pratique, signale chaque anomalie en rouge avec une action, et porte un contrôle anti-collusion écrit même quand il n'y a aucun signal.",
      "Le PV de CPC compte au moins 3 membres votants (profil finance et profil technique), une décision motivée, la raison du rejet de chaque offre écartée et toutes les signatures.",
      "Le PV de négociation liste participants, points négociés, concessions, accord final et signatures, et la PO reprend exactement ses chiffres.",
      "La checklist Finance affiche FINANCE READY sans que les formules aient été modifiées, et la matrice d'autorisation renseigne les cinq tranches.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, CLÔTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: "warning",
    title: "Erreurs de terrain fréquentes — et comment les éviter",
    items: [
      "Fractionner l'achat pour rester sous le seuil. → Calculez le palier sur le montant total du besoin, attribuez un contrat-cadre pour les besoins récurrents, et documentez tout dépassement de seuil.",
      "Accepter une offre unique « pour cause d'urgence ». → L'urgence justifie un délai de réponse raccourci, jamais l'absence de mise en concurrence.",
      "Ouvrir les offres ou fixer les critères après coup. → Note de gel signée avant l'envoi, registre d'ouverture, ouverture à deux personnes au moins.",
      "Traiter une facture pro forma unique comme preuve du meilleur prix. → Au moins deux autres offres documentées, sinon le prix affiché ne prouve rien.",
      "Modifier les spécifications après réception des offres. → Toute précision passe par un addendum écrit avant clôture, communiqué à tous.",
      "Confondre AMI et RFQ déguisée. → L'AMI ne demande jamais de prix ; il aboutit à une shortlist, puis à une consultation formelle.",
      "Constituer un CPC de personnes sans rôle réel, ou faire signer le PV par une seule. → Quorum de 3, profil finance et profil technique, signature de chaque membre présent.",
      "Payer sans rapprochement à trois. → PO, GRN et facture comparés avant tout paiement ; l'écart se règle avant, par une facture corrigée.",
      "Négocier seul et sans trace. → Mandat écrit, deux personnes, PV de négociation signé, PO fidèle au PV.",
      "Corriger ou antidater une pièce. → Note au dossier datée et visée ; jamais de document modifié après coup.",
    ],
  },
  {
    type: "recap",
    title: "Vos réalisations dans ce module",
    items: [
      "Vous avez rédigé et fait valider une IR, estimé le montant total et déterminé le palier sans fractionnement.",
      "Vous avez réalisé une étude de marché (benchmark daté, fiches fournisseurs, note) et traité un AMI jusqu'à une shortlist documentée.",
      "Vous avez choisi l'instrument (RFQ, RFP, AO restreint, AMI, contrat-cadre) et gelé les critères avant tout contact fournisseur.",
      "Vous avez lancé une consultation, ouvert les offres dans les règles et construit une CBA pondérée avec anomalies et contrôle anti-collusion.",
      "Vous avez fait fonctionner un CPC, rédigé son PV, négocié dans un mandat et documenté le PV de négociation.",
      "Vous avez structuré une RFP et un contrat-cadre à partir de la trame, émis la PO et fait le rapprochement à trois.",
      "Vous avez constitué un dossier d'achat de onze pièces, validé par la checklist Finance en 13 points, renseigné la matrice d'autorisation et encadré une avance de caisse.",
    ],
  },
  {
    type: "checklist",
    title: "Avant de passer au module suivant",
    items: [
      "Je sais choisir entre RFQ, RFP, AO et AMI selon le montant et la nature du besoin, et quand prévoir un contrat-cadre.",
      "Je peux expliquer pourquoi les seuils d'autorisation existent, au-delà de la règle administrative.",
      "Je sais réunir un CPC dans le respect du quorum et de la séparation des tâches, et rédiger son PV.",
      "J'ai complété une CBA avec pondération prix et technique, et un contrôle anti-collusion.",
      "Je sais reconnaître au moins trois indices concrets de collusion entre soumissionnaires.",
      "Je sais ce qu'est le rapprochement à trois (PO, GRN, facture) et pourquoi il précède tout paiement.",
      "Je sais quels documents figurent dans un dossier d'achat archivé, de la PR au paiement.",
      "Mon mandat de négociation et mon PV de négociation sont prêts : ils serviront de base au module suivant.",
    ],
  },
  {
    type: "closing",
    nextModuleHint: "Prochain module : « Techniques de Négociation en Profondeur ». Vous y apprendrez à préparer et mener une négociation fournisseur structurée, au-delà du marchandage sur le prix : postures distributive et collaborative, BATNA, points de rupture, ancrage, silence stratégique, gestion des concessions et clôture sécurisée par PV. Ce module-ci vous a appris à cadrer et documenter le résultat ; le suivant vous apprend à l'obtenir.",
  },
]
