// Module 04 — Gestion Multi-Devises & Opérations Bancaires
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (suivi-taux-change-impact-budgetaire.xlsx, registre-signataires-procurations-bancaires.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique : le bureau de Goma de l'ONG fictive « Kivu Avenir Solidarité » (KAS,
// déjà rencontrée aux modules 01 et 02), avec exemples remplis, résultat
// attendu, astuces et erreurs à éviter.
// Les organisations, banques, personnes et montants sont fictifs ; seuls les
// bailleurs, la banque centrale et les standards du secteur sont nommés comme tels.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Gestion Multi-Devises & Opérations Bancaires',
    hook: "Un compte ouvert avec un dossier incomplet, un signataire parti depuis des mois mais toujours actif à la banque, un taux « du jour » choisi au feeling : ce sont les trois brèches que les auditeurs trouvent en premier. À la fin de ce module, vous aurez produit une carte des devises avec sa marge de change, un compte bancaire ouvert du premier coup, un registre des signataires à jour, un virement international sécurisé, un suivi mensuel du taux comptable officiel, le calcul chiffré de la perte ou du gain de change — et la note d'une demi-page qui explique l'écart à un bailleur.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Distinguer devise du bailleur, devise de référence terrain et devise locale de paiement ligne par ligne sur un budget réel, et choisir la devise de chaque compte et de chaque transaction, en produisant une carte des devises du budget et la structure de comptes bancaires justifiée.",
      "Chiffrer la part du budget exposée au change et poser une marge de prudence de 3 à 5 % dès la construction du budget, en produisant le calcul de la marge en USD et la note d'hypothèses de change.",
      "Ouvrir un compte bancaire en devise locale (et en USD ou EUR) avec un dossier complet dès le premier passage, en produisant le dossier vérifié pièce par pièce et le rétroplanning KYC/AML avant le premier décaissement.",
      "Mettre en place et tenir à jour le dispositif de signataires avec double signature, en produisant le registre registre-signataires-procurations-bancaires.docx rempli, la matrice de signature et la lettre de révocation écrite avec confirmation datée de la banque.",
      "Sécuriser un transfert international avant l'envoi de fonds, en produisant la fiche de contrôle du virement : coordonnées vérifiées par un canal indépendant, double signature, preuve d'exécution archivée.",
      "Fixer chaque mois le taux comptable officiel et calculer le gain ou la perte de change de chaque transaction, en produisant le template suivi-taux-change-impact-budgetaire.xlsx complété (3 onglets) et l'écriture comptable de l'écart.",
      "Mesurer l'impact budgétaire d'une dépréciation documentée et l'expliquer à un bailleur non financier, en produisant la note d'explication d'une demi-page citant taux, source, pourcentage et montant de la perte.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de finance de marché : c'est un atelier. Chaque procédure se termine par un livrable concret, construit sur un seul cas fil rouge, de l'ouverture du compte bancaire de la nouvelle base jusqu'à la note qui explique au bailleur l'effet d'une dépréciation du franc congolais.",
      "Le cas fil rouge : vous êtes Finance Officer de « Kivu Avenir Solidarité » (KAS), l'ONG fictive des modules 01 et 02, dont le bureau de Goma (RDC) gère déjà trois projets et prépare, pour le 1er mai 2026, le démarrage du projet « Réponse NFI Masisi » qui exige une nouvelle base — donc un nouveau compte bancaire, de nouveaux signataires et des paiements en francs congolais (CDF).",
    ],
    bullets: [
      "Livrable 1 — La carte des devises du budget Nutrition (devise de chaque ligne) et le calcul de la marge de prudence de change.",
      "Livrable 2 — Le dossier d'ouverture du compte bancaire de la base de Masisi (USD + CDF) et son rétroplanning KYC/AML.",
      "Livrable 3 — Le registre des signataires et procurations (template .docx) rempli, la matrice de signature et la lettre de révocation d'un signataire partant.",
      "Livrable 4 — La fiche de contrôle d'un virement international (vérification indépendante des coordonnées, double signature, preuve).",
      "Livrable 5 — Le suivi du taux comptable officiel mensuel (onglet « Taux de change mensuel »).",
      "Livrable 6 — Le calculateur de gain/perte de change, la synthèse cumulée et l'écriture comptable de l'écart.",
      "Livrable 7 — La note d'explication d'une demi-page au bailleur sur l'impact budgétaire de la dépréciation.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : KAS, bureau de Goma, 2026',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. Les bailleurs, la banque, les montants et les personnes sont fictifs mais construits sur des configurations réelles de bureaux multi-bailleurs dans l'Est de la RDC. Tous les budgets de KAS sont rapportés en USD ; la devise locale de paiement est le franc congolais (CDF).",
    table: {
      columns: ['Élément', 'Détail'],
      rows: [
        ['Projets existants (budgets signés en décembre 2025)', 'Nutrition (Fonds Horizon, 420 000 USD), WASH (Agence Delta, 310 000 USD), Santé (Fondation Sigma, 260 000 USD) — taux budgété : 2 600 CDF pour 1 USD'],
        ['Nouveau projet (module 02)', 'Réponse NFI Masisi, du 1er mai 2026 au 30 avril 2027 — 68 800 USD (ECHO 62 800 + fonds privés 6 000) — taux budgété : 2 800 CDF pour 1 USD'],
        ['Banque partenaire', 'Banque Lac Kivu (fictive), agence de Goma — comptes USD et CDF à ouvrir pour la base de Masisi'],
        ['Signataires pressentis', 'Nadine O., Directrice pays — Grace M., Finance Manager — Aimé T., coordinateur NFI — Théo R., Responsable programmes'],
        ['Vous', 'Finance Officer : vous préparez et initiez les opérations ; vous n\'êtes pas signataire sur les comptes'],
        ['Taux officiel comptable 2026', 'Janvier 2 650 — Février 2 720 — Mars 2 810 CDF/USD (taux indicatif de la Banque Centrale du Congo, 1er jour ouvré du mois)'],
      ],
    },
    example: {
      title: 'Calendrier du fil rouge',
      lines: [
        "2 mars 2026 : revue d'exposition au change des budgets et relevé du taux de mars (procédures 1 et 5)",
        "2 mars → 4 mai 2026 : ouverture des comptes de Masisi, enregistrement des signataires, premier virement (procédures 2, 3 et 4)",
        "Avril 2026 : clôture du 1er trimestre, calcul du gain/perte de change (procédure 6)",
        "Juin–juillet 2026 : le franc congolais se déprécie de 8 % ; ECHO demande une explication (procédure 7 et cas complet)",
      ],
    },
    tip: "Les taux et les montants du fil rouge sont ceux du template fourni (2 600 / 2 650 / 2 720 / 2 810) et ceux du cas du module (2 800 → 3 024). Refaites chaque calcul à la main : le template doit vous donner le même résultat.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Pourquoi une ONG jongle avec 2 à 3 devises en même temps',
    body: [
      "Un projet financé par ECHO à Goma peut être budgétisé en euros, suivi en interne en dollars (devise de référence de l'organisation) et dépensé au quotidien en francs congolais, parce que c'est ce que le loueur, le fournisseur de carburant et le personnel local acceptent. Trois devises, un seul projet.",
      "Chaque conversion entre ces trois devises est un point de friction : non anticipée, elle devient soit une perte de change qui ronge le budget, soit une incohérence comptable qui inquiète un auditeur.",
    ],
    example: {
      title: 'Où se trouvent les trois devises dans le fil rouge KAS',
      lines: [
        "Devise du bailleur : USD (Fonds Horizon, Agence Delta, Fondation Sigma, ECHO pour le projet NFI de KAS)",
        "Devise de référence terrain : USD (consolidation des comptes de KAS entre pays et siège)",
        "Devise locale de paiement : CDF (salaires du personnel national, loyer de Masisi, carburant, journaliers)",
        "Cas inverse à connaître : un contrat ECHO libellé en EUR ajouterait une quatrième devise et justifierait un compte EUR.",
      ],
    },
    highlight: "Un Finance Manager qui ne sait pas, pour chaque ligne de son budget, dans quelle devise elle est dépensée et dans quelle devise elle est rapportée, découvre le problème au pire moment : celui de justifier un écart au bailleur.",
  },
  {
    type: 'comparison-table',
    title: "Les trois rôles de devise à reconnaître avant d'ouvrir un compte",
    columns: ['Rôle de la devise', "Ce qu'elle sert à faire", 'Exemples fréquents', 'Chez KAS'],
    rows: [
      ['Devise du bailleur', "Devise dans laquelle le budget est engagé, suivi contractuellement et rapporté. Elle ne bouge jamais en cours de projet sans avenant.", 'USD pour USAID/BHA et la plupart des agences onusiennes, EUR pour ECHO (selon le contrat)', 'USD pour les quatre budgets'],
      ['Devise de référence terrain', "Devise pivot de consolidation des comptes entre pays et sièges, même quand elle diffère de celle du bailleur.", "Le plus souvent l'USD, parfois l'EUR pour une ONG à siège européen", 'USD'],
      ['Devise locale de paiement', 'Devise du quotidien opérationnel : salaires du personnel national, loyers, fournisseurs locaux, taxes.', 'CDF en RDC, XAF au Tchad, SSP au Soudan du Sud, HTG en Haïti, NGN au Nigeria', 'CDF'],
    ],
  },
  {
    type: 'concept',
    title: 'Le risque de change : une ligne budgétaire, pas une surprise',
    body: [
      "Le risque de change n'est pas un aléa exceptionnel, c'est une composante structurelle de tout budget ONG multi-devises. Un projet budgétisé en USD mais dépensé à 65 % en monnaie locale est mécaniquement exposé à toute variation du taux entre la date de budgétisation et la date de dépense.",
      "Certains bailleurs, comme ECHO dans certains formats de contrat, autorisent une ligne dédiée aux pertes de change avec des règles de justification précises. D'autres, comme la plupart des contrats USAID/BHA, n'en prévoient pas : le risque ne disparaît pas, il se gère par une marge de prudence dans les coûts unitaires locaux et par un suivi mensuel fin.",
    ],
    example: {
      title: 'Ce que dit le fil rouge : budgets signés à 2 600, taux de mars à 2 810',
      lines: [
        "Écart de taux = (2 810 − 2 600) ÷ 2 600 = 8,1 % en trois mois",
        "Sur 1 000 USD de charge locale budgétée : 1 000 × 8,1 % ≈ 81 USD de surcoût absorbé par le budget",
        "Sur les 276 000 USD de dépenses locales du projet Nutrition : environ 22 300 USD si ce taux se maintenait",
      ],
    },
    highlight: "Dès qu'une ligne de budget dépend d'une conversion de devise et représente plus de quelques pourcents du budget total, elle intègre une marge de prudence de change reflétant la volatilité réelle de la monnaie locale — jamais un pourcentage forfaitaire recopié d'un projet à l'autre.",
  },
  {
    type: 'stat-callout',
    stat: '3 à 5 %',
    caption: 'Marge de prudence de change généralement intégrée aux lignes budgétaires converties',
    context: "Le pourcentage exact dépend de la volatilité historique de la monnaie locale : un franc CFA arrimé à l'euro n'a pas la même volatilité qu'un franc congolais ou qu'une livre sud-soudanaise. Une marge ne remplace jamais le suivi mensuel : elle absorbe la volatilité courante, pas un choc de 8 % en trois mois.",
  },
  {
    type: 'comparison-table',
    title: "Quel taux pour quel usage ? Les quatre taux à ne jamais mélanger",
    columns: ['Taux', 'Définition', 'Usage autorisé', 'Source'],
    rows: [
      ['Taux budgété', "Taux utilisé pour chiffrer le budget signé (ex. 2 600 ou 2 800 CDF/USD)", "Référence fixe pour mesurer l'écart de change du projet", 'Budget signé du bailleur'],
      ['Taux comptable officiel du mois', "Taux unique fixé une fois par mois par l'organisation, à partir du taux de la banque centrale", 'Toutes les conversions comptables du mois, sans exception', 'Banque Centrale du Congo, relevé le 1er jour ouvré'],
      ['Taux du jour de la transaction', "Taux réellement obtenu ou facturé le jour de l'opération (banque, bureau de change)", "Calcul de l'écart comptable de conversion — jamais pour convertir une ligne de charge", 'Avis de la banque, reçu de change'],
      ['Taux du marché observé / parallèle', "Taux pratiqué hors circuit bancaire officiel, souvent plus avantageux en apparence", "Comparaison et alerte uniquement : inutilisable en comptabilité", 'XE, OANDA, observation terrain'],
    ],
  },
  {
    type: 'concept',
    title: 'Deux écarts de change à ne pas confondre',
    body: "Le mot « perte de change » recouvre deux calculs différents. Les mélanger conduit à des chiffres impossibles à réconcilier avec le bailleur comme avec l'auditeur. Ce module vous apprend à produire les deux, séparément.",
    table: {
      columns: ['Critère', 'Écart budgétaire de change', 'Écart comptable de conversion'],
      rows: [
        ['Question posée', "Combien le change pèse-t-il sur le budget du projet ?", "Combien la conversion réelle a-t-elle coûté ou rapporté par rapport au taux comptable ?"],
        ['Compare', 'Taux appliqué (officiel du mois) au taux budgété', 'Taux du jour de la transaction au taux comptable officiel du mois'],
        ['Où se calcule', "Template, onglet « Impact par transaction »", "Écriture comptable au compte de pertes ou gains de change"],
        ['Pour qui', "Bailleur, Finance Manager, suivi budgétaire (module 02)", "Comptabilité, auditeur, rapport financier (module 05)"],
        ['Exemple fil rouge', "Loyer 500 USD payé en mars : 2 810 contre 2 600 budgétés → −40,38 USD", "Vente de 10 000 USD à 2 795 contre 2 810 comptable → −53,38 USD"],
      ],
    },
    tip: "Règle de contrôle : pour chaque chiffre de change que vous écrivez, sachez dire de quel écart il s'agit et quels deux taux il compare.",
  },
  {
    type: 'concept',
    title: 'Lire le signe : dans quel sens joue la dépréciation ?',
    body: [
      "Le calculateur du template mesure, pour une charge dont le montant en USD a été budgété, combien de francs congolais supplémentaires il faut pour la couvrir quand le taux appliqué dépasse le taux budgété, converti en USD au taux budgété. Il affiche cet effet en négatif : « Gain / (Perte) vs. budget ». Taux appliqué supérieur au taux budgété : perte. Taux appliqué inférieur : gain.",
      "Le sens réel dépend pourtant de la devise de facturation de chaque charge et de la devise de vos fonds, comme vous l'avez vu au module 02 : une charge fixée en CDF et rapportée en USD coûte moins cher en USD quand le franc se déprécie.",
    ],
    example: {
      title: 'Même dépréciation de 8 %, deux lectures',
      lines: [
        "Charge dont l'enveloppe est calculée en USD et qui doit être couverte en CDF au taux du mois (loyer, salaires, carburant du fil rouge) : taux 3 024 contre 2 800 → surcoût de 8 % → perte dans le template.",
        "Charge contractuellement fixée en CDF (4 620 CDF par ménage au module 02) : 4 620 ÷ 3 024 = 1,53 USD contre 1,65 USD au taux budgété → effet favorable.",
      ],
    },
    pitfall: "Saisir toutes les charges locales dans le calculateur sans vérifier leur devise de facturation. Avant chaque saisie, posez la question : « cette charge est-elle fixée en USD ou en CDF ? » — et ne mettez dans le calculateur que celles dont la lecture correspond à la convention du template.",
  },
  {
    type: 'concept',
    title: 'La gestion des signataires : le contrôle interne qui protège tout le monde',
    body: [
      "La gestion des signataires bancaires est le domaine où l'on trouve le plus de dossiers de fraude et d'audits qualifiés — pas parce que les procédures sont compliquées, mais parce qu'elles sont mal suivies dans la durée. Un compte ne devrait jamais avoir un seul signataire, ni un signataire seul autorisé à valider et exécuter, ni un signataire parti depuis plus de quelques jours.",
      "Le principe de double signature (ou double contrôle) exige que toute transaction bancaire au-delà d'un seuil défini soit approuvée par au moins deux personnes habilitées aux rôles incompatibles : celui qui initie un virement n'est jamais celui qui l'approuve seul. Il protège l'organisation contre la fraude, et chaque signataire contre une accusation infondée.",
    ],
    highlight: "La gestion des signataires n'est pas un événement ponctuel réalisé à l'ouverture du compte : c'est un registre vivant, revu au moins chaque trimestre, immédiatement à chaque départ ou changement de poste, et corrélé avec les mouvements RH.",
  },
  {
    type: 'comparison-table',
    title: 'Procuration bancaire ou délégation interne : ne pas confondre',
    columns: ['Critère', 'Procuration bancaire', 'Délégation interne de signature'],
    rows: [
      ['Qui la reconnaît', "La banque, qui l'a enregistrée", "L'organisation seule"],
      ['Valeur vis-à-vis de la banque', "Habilite la personne nommée à opérer sur le compte", "Aucune tant que la banque ne l'a pas elle-même enregistrée"],
      ['Preuve', "Mandat ou confirmation écrite de la banque, spécimen de signature", "Note de service ou lettre de délégation signée en interne"],
      ['Quand elle prend fin', "À la confirmation écrite et datée de la révocation par la banque", "À la signature d'une note qui la retire — sans effet sur la banque"],
      ['Risque principal', "Rester active après le départ de la personne", "Croire qu'elle autorise à signer à la banque"],
    ],
  },
  {
    type: 'concept',
    title: 'La fraude au changement de RIB : comment elle se produit',
    body: [
      "La fraude au changement de coordonnées bancaires (souvent appelée Business Email Compromise) est une escroquerie qui a touché plusieurs organisations humanitaires, parfois pour des montants à six chiffres. Un fraudeur, qui a pris le contrôle ou imité la messagerie d'un fournisseur connu, envoie un e-mail annonçant « un changement de compte bancaire » juste avant un paiement important.",
      "La protection de base est simple et gratuite : vérifier les coordonnées du bénéficiaire (IBAN ou numéro de compte, code SWIFT, nom exact de la banque) par un canal indépendant de celui par lequel elles vous ont été communiquées — un appel sur un numéro que vous connaissiez déjà, jamais celui indiqué dans le même e-mail.",
    ],
    example: {
      title: 'Signaux d\'alerte dans un e-mail de changement de RIB',
      lines: [
        "Adresse d'expéditeur presque identique à l'habituelle (un caractère différent, domaine proche)",
        "Urgence et pression : « paiement à effectuer aujourd'hui pour éviter la rupture de stock »",
        "Nouveau compte dans un autre pays ou au nom d'une société différente de celle du contrat",
        "Demande de ne pas appeler : « je suis en déplacement, répondez uniquement par e-mail »",
      ],
    },
    pitfall: "Appeler le numéro de téléphone figurant dans l'e-mail de demande : il peut mener au fraudeur lui-même. Utilisez le numéro du contrat, du bon de commande ou de votre répertoire fournisseur.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Devise du bailleur', definition: "Devise dans laquelle le budget est engagé et rapporté ; elle ne change pas en cours de projet sans avenant." },
      { term: 'Devise de référence terrain', definition: "Devise pivot utilisée par l'organisation pour consolider ses comptes entre pays et sièges (souvent l'USD)." },
      { term: 'Devise locale de paiement', definition: "Devise du quotidien opérationnel : salaires nationaux, loyers, fournisseurs locaux, taxes (ex. le franc congolais, CDF)." },
      { term: 'Taux budgété', definition: "Taux de change utilisé pour chiffrer le budget signé ; il sert de référence fixe pour mesurer l'impact du change." },
      { term: 'Taux comptable officiel', definition: "Taux unique fixé mensuellement par l'organisation, généralement à partir du taux de la banque centrale, utilisé pour toutes les conversions comptables du mois." },
      { term: 'Perte / gain de change réalisé', definition: "Écart, positif ou négatif, entre la valeur d'une transaction convertie au taux du jour et sa valeur au taux comptable officiel du mois." },
      { term: 'Écart budgétaire de change', definition: "Effet du taux appliqué, comparé au taux budgété, sur le coût en USD d'une charge locale ; calculé dans l'onglet « Impact par transaction »." },
      { term: 'Marge de prudence de change', definition: "Pourcentage (généralement 3 à 5 %) ajouté aux lignes converties du budget pour absorber la volatilité courante de la monnaie locale." },
      { term: 'Taux du marché parallèle', definition: "Taux pratiqué hors circuit bancaire officiel, juridiquement et comptablement inutilisable pour une organisation soumise à audit." },
      { term: 'Procuration bancaire', definition: "Autorisation formelle, enregistrée auprès de la banque, qui habilite une personne nommée à opérer sur un compte." },
      { term: 'Double signature', definition: "Principe selon lequel toute opération au-delà d'un seuil exige l'approbation de deux personnes habilitées aux rôles incompatibles." },
      { term: 'Spécimen de signature', definition: "Exemple de signature de chaque signataire, déposé à la banque pour comparer les ordres de paiement." },
      { term: 'KYC / AML', definition: "Know Your Customer / Anti-Money Laundering : vérifications d'identité et de lutte contre le blanchiment que la banque mène avant d'ouvrir un compte." },
      { term: 'IBAN / SWIFT (BIC)', definition: "Identifiant international du compte bénéficiaire et code d'identification de sa banque, à vérifier avant tout virement international." },
      { term: 'Avis d\'exécution', definition: "Document de la banque prouvant qu'un virement a été exécuté (date, montant, bénéficiaire) ; il s'archive avec la pièce justificative." },
    ],
  },
  {
    type: 'concept',
    title: "Votre feuille de route : 7 procédures, dans l'ordre du terrain",
    body: "Les procédures suivent l'ordre réel d'une mise en place bancaire multi-devises : on comprend son exposition, on ouvre les comptes, on enregistre les signataires, on sécurise les virements, puis on suit le taux chaque mois et on mesure l'impact.",
    table: {
      columns: ['Procédure', 'Fréquence', 'Livrable', 'Étapes'],
      rows: [
        ['1. Cartographier les devises et poser la marge de change', 'À chaque budget ou renouvellement', 'Carte des devises + marge en USD + note d\'hypothèses', '6'],
        ['2. Ouvrir et structurer les comptes bancaires', 'Nouvelle base ou nouveau projet', 'Dossier d\'ouverture + rétroplanning KYC/AML', '6'],
        ['3. Tenir le registre des signataires et procurations', 'À l\'ouverture, chaque trimestre, à chaque départ', 'Registre .docx à jour + lettre de révocation', '6'],
        ['4. Sécuriser un transfert international', 'Chaque virement significatif', 'Fiche de contrôle du virement + preuve archivée', '6'],
        ['5. Fixer le taux comptable officiel du mois', 'Chaque mois, 1er jour ouvré', 'Onglet « Taux de change mensuel » validé', '5'],
        ['6. Calculer et enregistrer le gain ou la perte de change', 'Chaque fin de mois', 'Calculateur + synthèse cumulée + écriture', '7'],
        ['7. Mesurer l\'impact budgétaire et l\'expliquer au bailleur', 'À chaque variation significative et avant chaque rapport', 'Note d\'une demi-page au bailleur', '6'],
      ],
    },
  },

  // ─────────────── PROCÉDURE 1 — Cartographier les devises et poser la marge de change ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 6',
    title: 'Rassembler le budget signé et noter la devise du bailleur',
    intro: "On ne mesure pas une exposition au change sur un budget de travail. Fil rouge : le 2 mars 2026, Grace M. vous demande une revue d'exposition au change du budget Nutrition (Fonds Horizon), établi à 2 600 CDF/USD, avant la préparation de la phase 2027. Entrées : le budget signé et son dernier avenant, la convention de financement.",
    steps: [
      {
        title: 'Collecter les documents de référence',
        actions: [
          "Ouvrez le dossier « 00_Budgets_signés » (module 01) et prenez la dernière version SIGNÉE du budget Nutrition : NUT_FHO_Budget_v2_signé_2025-12-15.xlsx.",
          "Relevez la devise du bailleur dans la convention : ici l'USD, sans clause d'indexation.",
          "Cherchez dans la convention toute clause sur le taux de change (taux à utiliser, éligibilité des pertes de change, ligne dédiée) et surlignez-la.",
        ],
      },
      {
        title: 'Recopier les lignes dans un tableau de travail',
        actions: [
          "Créez un classeur « Exposition_change_NUT_2026.xlsx » avec les colonnes : Code ligne, Intitulé exact, Montant approuvé (USD).",
          "Recopiez chaque ligne mot pour mot et vérifiez que le total égale le budget signé (420 000 USD).",
        ],
      },
    ],
    example: {
      title: 'Lignes du budget Nutrition / Fonds Horizon (USD)',
      lines: [
        "1.1 Personnel nutrition 168 000 | 2.1 Intrants nutritionnels 96 000 | 3.1 Transport 42 000",
        "4.1 Quote-part bureau 18 000 | 5.1 Fonctionnement 24 000 | 6.1 Renforcement des capacités 30 000",
        "7.1 Suivi-évaluation 24 000 | 8.1 Coûts de gestion 18 000",
        "Contrôle : 168 + 96 + 42 + 18 + 24 + 30 + 24 + 18 = 420 000 USD ✔ — devise du bailleur : USD",
      ],
    },
    result: "Un tableau qui reprend toutes les lignes du budget signé, dont le total égale le montant de la convention, avec la devise du bailleur et les clauses de change surlignées.",
    pitfall: "Travailler sur le budget de la proposition au lieu du budget signé : lignes et montants changent à la négociation, et c'est la version signée qui fera foi en audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 6',
    title: 'Déterminer la devise de dépense réelle de chaque ligne',
    intro: "Le budget dit en quelle devise le bailleur vous finance ; il ne dit pas en quelle devise vous payez. Cette information se trouve dans les contrats, la paie et les pièces déjà saisies. Entrées : le tableau de l'étape 1, la grille de codification du module 01, la liste de paie, les contrats fournisseurs.",
    steps: [
      {
        title: 'Interroger les sources',
        actions: [
          "Ajoutez la colonne « Devise de dépense » et la colonne « % payé en CDF ».",
          "Pour la ligne 1.1 : demandez à Grace M. en quelle devise est payée la paie nationale (CDF, avec équivalent USD garanti).",
          "Pour les lignes 3.1 à 7.1 : filtrez la grille de codification du T1 par rubrique et comptez, sur les pièces, la part payée en CDF (reçus de caisse, factures de stations, quittances de loyer).",
          "Pour la ligne 2.1 : ouvrez le contrat NutriPlus Goma, facturé et payé en USD.",
        ],
      },
      {
        title: 'Noter une hypothèse écrite pour chaque ligne',
        actions: [
          "Si une part est incertaine, retenez la valeur prudente (la plus exposée) et écrivez la source : « contrat C-2025-014 », « paie de janvier », « pièces PC-0101 à PC-0140 ».",
          "Faites confirmer le tableau par le Finance Manager avant de calculer.",
        ],
      },
    ],
    example: {
      title: 'Devise de dépense par ligne — budget Nutrition',
      lines: [
        "1.1 Personnel : 100 % CDF (paie nationale) | 2.1 Intrants : 0 % CDF (contrat NutriPlus Goma en USD)",
        "3.1 Transport : 80 % CDF (carburant et entretien locaux) | 4.1 Quote-part bureau : 50 % CDF",
        "5.1 Fonctionnement : 100 % CDF | 6.1 Renforcement des capacités : 90 % CDF | 7.1 Suivi-évaluation : 60 % CDF",
        "8.1 Coûts de gestion : 0 % CDF (calculés et payés en USD)",
      ],
    },
    result: "Chaque ligne du budget porte une devise de dépense et un pourcentage payé en CDF, avec la source de l'information.",
    tip: "Un pourcentage s'appuie sur des pièces, pas sur des impressions : le module 01 vous a donné une grille où chaque dépense est codée par rubrique ; le filtre vous donne la réponse en deux minutes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 6',
    title: 'Calculer la part du budget exposée au change',
    intro: "La part exposée est le montant du budget dont le coût final dépend d'une conversion avec une monnaie locale. C'est sur elle, et non sur le budget total, que porte la marge de prudence.",
    steps: [
      {
        title: 'Calculer ligne par ligne',
        actions: [
          "Ajoutez la colonne « Montant exposé (USD) » avec la formule =Montant approuvé × % payé en CDF (ex. =C5*D5).",
          "Recopiez la formule vers le bas pour les 8 lignes.",
        ],
      },
      {
        title: 'Totaliser et exprimer en pourcentage',
        actions: [
          "En bas de colonne, calculez le total exposé : =SOMME(E5:E12).",
          "Calculez la part exposée du budget : =E13/C13, au format pourcentage avec une décimale.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Budget (USD)', '% payé en CDF', 'Montant exposé (USD)'],
      rows: [
        ['1.1 Personnel nutrition', '168 000', '100 %', '168 000'],
        ['2.1 Intrants nutritionnels', '96 000', '0 %', '0'],
        ['3.1 Transport', '42 000', '80 %', '33 600'],
        ['4.1 Quote-part bureau', '18 000', '50 %', '9 000'],
        ['5.1 Fonctionnement', '24 000', '100 %', '24 000'],
        ['6.1 Renforcement des capacités', '30 000', '90 %', '27 000'],
        ['7.1 Suivi-évaluation', '24 000', '60 %', '14 400'],
        ['8.1 Coûts de gestion', '18 000', '0 %', '0'],
        ['Total', '420 000', '—', '276 000 (65,7 %)'],
      ],
    },
    result: "Un total exposé de 276 000 USD, soit 65,7 % du budget : plus des deux tiers du projet dépendent du franc congolais.",
    pitfall: "Appliquer la marge à tout le budget « par prudence ». Elle gonflerait le budget de lignes qui ne bougent pas avec le franc (intrants payés en USD) et le bailleur vous le ferait remarquer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 6',
    title: 'Mesurer la volatilité récente et choisir le pourcentage de marge',
    intro: "La marge n'est pas un pourcentage recopié d'un projet précédent : elle reflète la volatilité réelle de la monnaie locale, mesurée sur vos propres relevés mensuels. Entrées : les taux officiels des derniers mois (template, onglet « Taux de change mensuel »).",
    steps: [
      {
        title: 'Calculer les variations mensuelles',
        actions: [
          "Listez les taux officiels de décembre 2025 (2 600, taux budgété) à mars 2026 : 2 650, 2 720, 2 810.",
          "Calculez chaque variation d'un mois sur l'autre : (taux du mois − taux précédent) ÷ taux précédent.",
          "Calculez la variation cumulée depuis le taux budgété : (2 810 − 2 600) ÷ 2 600.",
        ],
      },
      {
        title: 'Choisir la marge dans la fourchette de 3 à 5 %',
        actions: [
          "Volatilité faible et stable : 3 %. Volatilité marquée ou tendance haussière continue : 5 %.",
          "Écrivez en deux lignes pourquoi vous retenez ce pourcentage : c'est la phrase que le bailleur vous demandera.",
        ],
      },
    ],
    example: {
      title: 'Variations du taux officiel CDF/USD et choix de la marge',
      lines: [
        "Janvier : 2 650 contre 2 600 = +1,9 % | Février : 2 720 contre 2 650 = +2,6 % | Mars : 2 810 contre 2 720 = +3,3 %",
        "Cumul depuis le taux budgété : +8,1 % en trois mois, avec trois hausses consécutives de plus en plus fortes",
        "Marge retenue pour la phase 2027 : 5 % (haut de la fourchette) — tendance haussière continue, écart cumulé déjà supérieur à 3 %",
      ],
    },
    result: "Un pourcentage de marge choisi dans la fourchette 3–5 %, justifié par les variations mensuelles observées et non par habitude.",
    tip: "Une marge de 5 % ne couvre pas un choc de 8 % en trois mois. Elle sert à absorber la volatilité courante ; le reste se traite par le suivi mensuel et le dialogue avec le bailleur (procédures 5 à 7).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 6',
    title: "Calculer la marge en USD et décider où l'intégrer",
    intro: "La marge se calcule uniquement sur la part exposée et s'intègre au budget de façon lisible. La forme dépend de ce que le bailleur autorise : lisez le format de budget et la convention avant de choisir.",
    steps: [
      {
        title: 'Calculer la marge ligne par ligne',
        actions: [
          "Ajoutez la colonne « Marge (USD) » avec la formule =Montant exposé × 5 % (ex. =E5*5%).",
          "Totalisez et exprimez la marge en pourcentage du budget total.",
        ],
      },
      {
        title: 'Choisir la forme d\'intégration',
        actions: [
          "Option A : une ligne dédiée « Pertes de change » si le format du bailleur l'autorise (ECHO le permet dans certains formats de contrat, avec des règles de justification précises).",
          "Option B : la marge est incorporée aux coûts unitaires des lignes locales (ex. ligne 1.1 : +8 400 USD justifiés par la note d'hypothèses de change).",
          "Option C : si ni A ni B n'est possible, pas de marge dans le budget — mais un seuil d'alerte et un plan d'ajustement écrits (étape 6).",
        ],
      },
    ],
    example: {
      title: 'Marge de 5 % sur la part exposée',
      lines: [
        "1.1 : 168 000 × 5 % = 8 400 | 3.1 : 33 600 × 5 % = 1 680 | 4.1 : 9 000 × 5 % = 450",
        "5.1 : 24 000 × 5 % = 1 200 | 6.1 : 27 000 × 5 % = 1 350 | 7.1 : 14 400 × 5 % = 720",
        "Total marge = 13 800 USD, soit 13 800 ÷ 420 000 = 3,3 % du budget (et 5 % de 276 000 exposés)",
        "Forme retenue : option B (coûts unitaires locaux), la convention n'autorisant pas de ligne dédiée",
      ],
    },
    result: "Un montant de marge calculé uniquement sur la part exposée (13 800 USD), avec la forme d'intégration retenue et ses justifications.",
    pitfall: "Ajouter la marge après coup, en réponse à un dépassement. Un budget multi-devises sans marge posée à la construction ne protège pas : il reporte simplement le problème à la première variation significative.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 6',
    title: "Rédiger la note d'hypothèses de change et fixer les seuils d'alerte",
    intro: "Ce qui n'est pas écrit n'existe pas en audit. La note d'hypothèses de change garde la trace des taux, de la part exposée et de la marge ; les seuils d'alerte disent à partir de quand vous prévenez et agissez.",
    steps: [
      {
        title: 'Écrire la note d\'une page',
        actions: [
          "Bloc 1 — Taux budgété, date de relevé, source (Banque Centrale du Congo).",
          "Bloc 2 — Part exposée : 276 000 USD sur 420 000 (65,7 %), avec le tableau par ligne.",
          "Bloc 3 — Marge retenue : 5 %, soit 13 800 USD, forme d'intégration et justification (volatilité observée).",
          "Bloc 4 — Date de la prochaine revue (chaque trimestre) et nom du validateur.",
        ],
      },
      {
        title: 'Fixer deux seuils d\'alerte',
        actions: [
          "Seuil jaune : écart cumulé du taux officiel par rapport au taux budgété ≥ 3 % → vous calculez l'impact (procédure 6) et prévenez le Finance Manager.",
          "Seuil rouge : écart cumulé ≥ 5 % (la marge) → note au bailleur (procédure 7) et revue des lignes concernées.",
        ],
      },
    ],
    example: {
      title: 'Extrait de la note d\'hypothèses de change — Nutrition / Fonds Horizon',
      lines: [
        "Taux budgété : 2 600 CDF/USD (décembre 2025) — Part exposée : 276 000 USD (65,7 %)",
        "Marge proposée pour la phase 2027 : 5 % = 13 800 USD (3,3 % du budget), intégrée aux coûts unitaires locaux",
        "Seuils : jaune 3 % (écart observé en mars : 8,1 %, déjà dépassé), rouge 5 %",
        "Validé par : Grace M., Finance Manager — 02/03/2026",
      ],
    },
    result: "Une note d'une page validée, classée avec le budget signé, et deux seuils d'alerte chiffrés affichés au bureau finance.",
    tip: "Écrivez le seuil rouge au niveau de la marge : tant que l'écart cumulé reste sous la marge, vous gérez ; au-delà, vous informez le bailleur — vous n'attendez pas l'audit.",
  },

  // ─────────────── PROCÉDURE 2 — Ouvrir et structurer les comptes bancaires ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Décider la structure de comptes par devise',
    intro: "Avant d'aller à la banque, sachez quels comptes vous demandez et pourquoi. Chaque compte a une fonction et une devise. Fil rouge : le 2 mars 2026, KAS ouvre une base à Masisi pour le projet NFI, premier décaissement local prévu le 4 mai 2026.",
    steps: [
      {
        title: 'Appliquer le raisonnement par fonction',
        actions: [
          "Compte principal en devise du bailleur et de référence (USD) : reçoit les tranches et paie les fournisseurs internationaux.",
          "Compte en devise locale (CDF) : paie salaires, loyer, journaliers, carburant — alimenté par des conversions depuis le compte USD.",
          "Compte en EUR : ouvert uniquement si un contrat est libellé en EUR (ex. certains contrats ECHO) ; sinon, pas de compte inutile.",
        ],
      },
      {
        title: 'Vérifier les contraintes de la convention',
        actions: [
          "Les comptes sont ouverts au nom de l'organisation, jamais au nom d'une personne.",
          "Relisez la convention : certains bailleurs exigent un compte dédié ou un suivi distinct des fonds (traçabilité par bailleur).",
        ],
      },
    ],
    table: {
      columns: ['Compte', 'Devise', 'Fonction', 'Décision KAS'],
      rows: [
        ['Banque Lac Kivu — Masisi USD', 'USD', 'Réception des tranches ECHO et fonds privés ; paiements fournisseurs internationaux ; source des conversions', 'À ouvrir'],
        ['Banque Lac Kivu — Masisi CDF', 'CDF', 'Salaires nationaux, loyer, carburant, journaliers de manutention', 'À ouvrir'],
        ['Compte EUR', 'EUR', "Uniquement si un bailleur contracte en EUR", 'Non ouvert — aucun contrat en EUR'],
      ],
    },
    result: "Une structure de comptes justifiée par fonction (USD + CDF, EUR en réserve avec son critère de déclenchement), prête à présenter à la banque.",
    pitfall: "Ouvrir « un compte CDF pour tout ». Un compte CDF alimenté par des fonds USD sans règle de conversion transforme la banque en risque de change : vous apprendrez à le limiter à l'étape 6.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: "Constituer le dossier d'ouverture et le contrôler pièce par pièce",
    intro: "Dans la plupart des contextes, un dossier incomplet ne vous fait pas perdre une journée : il vous fait perdre deux à trois semaines, le temps de reprendre rendez-vous avec le bon interlocuteur. Constituez le dossier complet AVANT le premier passage.",
    steps: [
      {
        title: 'Réunir les documents',
        actions: [
          "Lettre de mission ou accord de siège de l'organisation dans le pays, et statuts de l'ONG.",
          "Résolution du conseil d'administration (ou du siège) désignant NOMMÉMENT les signataires autorisés et le seuil de double signature.",
          "Copie de la pièce d'identité et du passeport de chaque signataire, et un spécimen de signature de chacun.",
          "Justificatif d'adresse du bureau local (bail de la base de Masisi).",
          "Les formulaires d'ouverture et de KYC de la banque, remplis et signés.",
        ],
      },
      {
        title: 'Contrôler avant dépôt',
        actions: [
          "Dressez une liste de contrôle avec une case par pièce : fournie, à jour, signée, copie certifiée si la banque l'exige.",
          "Vérifiez que le nom de chaque signataire est ÉCRIT de la même façon sur la résolution, la pièce d'identité et le spécimen.",
          "Demandez à Grace M. une relecture croisée avant le dépôt.",
        ],
      },
    ],
    example: {
      title: "Liste de contrôle du dossier — compte de Masisi (au 6 mars 2026)",
      lines: [
        "☑ Accord de siège et statuts de KAS | ☑ Résolution du siège du 20/02/2026 désignant 4 signataires et le seuil de 5 000 USD",
        "☑ Pièce d'identité + passeport : Nadine O., Grace M., Aimé T., Théo R. | ☑ 4 spécimens de signature",
        "☑ Bail de la base de Masisi du 01/03/2026 (justificatif d'adresse) | ☑ Formulaires KYC de la banque signés",
        "⚠ Passeport d'Aimé T. expiré le 02/2026 → renouvellement demandé, copie de la demande jointe",
      ],
    },
    result: "Un dossier complet, relu, dont chaque pièce est cochée sur une liste de contrôle, avec les anomalies traitées avant le dépôt.",
    pitfall: "Déposer le dossier « en attendant le dernier document ». Une pièce manquante peut suspendre l'ensemble de l'instruction KYC chez la banque.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Établir le rétroplanning KYC/AML avant le premier décaissement',
    intro: "Le contrôle KYC/AML (vérification d'identité et de lutte contre le blanchiment) prend systématiquement plus de temps pour une ONG internationale que pour une entreprise locale. Planifiez l'ouverture plusieurs semaines avant le premier décaissement prévu, jamais la veille.",
    steps: [
      {
        title: 'Partir de la date du premier décaissement',
        actions: [
          "Notez la date du premier paiement local : 4 mai 2026 (achat des kits et journaliers de Masisi).",
          "Comptez à rebours : tests du compte, convention de compte, vérification KYC, dépôt du dossier.",
          "Gardez un tampon d'au moins 10 jours ouvrés : un contrôle supplémentaire de la banque ne doit jamais retarder le projet.",
        ],
      },
      {
        title: 'Partager le calendrier',
        actions: [
          "Envoyez le rétroplanning à Grace M., à Nadine O. et au logisticien : les signataires doivent être disponibles aux dates clés.",
          "Planifiez une relance hebdomadaire à la banque et notez chaque réponse reçue.",
        ],
      },
    ],
    example: {
      title: 'Rétroplanning du compte de Masisi',
      lines: [
        "2 mars 2026 : lancement, collecte des pièces | 9 mars : dépôt du dossier complet, récépissé daté",
        "9 mars → 10 avril : vérification KYC/AML par la banque (environ 5 semaines)",
        "14 avril : signature de la convention de compte et dépôt des spécimens par les signataires",
        "20 avril : activation de la banque en ligne et virement test | 4 mai : premier décaissement (tampon : 10 jours ouvrés)",
      ],
    },
    result: "Un calendrier daté, partagé avec les signataires, qui laisse un tampon de 10 jours ouvrés avant le premier décaissement.",
    tip: "Si le premier décaissement est incompressible et la banque en retard, ayez un plan B écrit (paiement depuis le compte existant de Goma, validé par le Finance Manager) plutôt que d'improviser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Déposer le dossier et négocier les conditions du compte',
    intro: "Le jour du dépôt est le meilleur moment pour poser les questions qui coûteront cher plus tard. Venez avec la liste de contrôle et une liste de questions écrite.",
    steps: [
      {
        title: 'Déposer et obtenir la preuve',
        actions: [
          "Remettez le dossier à l'interlocuteur désigné et faites contrôler la liste de pièces devant vous.",
          "Exigez un récépissé daté et signé avec la liste des pièces reçues.",
          "Demandez par écrit la liste des pièces complémentaires éventuelles, avec un délai.",
        ],
      },
      {
        title: 'Poser les questions de conditions',
        actions: [
          "Frais : tenue de compte, virements internationaux, conversions, relevés, retraits.",
          "Taux de change appliqué aux conversions USD/CDF et écart avec le taux officiel de la Banque Centrale du Congo.",
          "Banque en ligne : double autorisation (un initiateur, deux approbateurs), plafonds par opération et par jour.",
          "Relevés électroniques mensuels et accès en lecture pour la finance (rapprochements, module 03).",
        ],
      },
    ],
    example: {
      title: 'Compte rendu du rendez-vous du 9 mars 2026',
      lines: [
        "Reçu : dossier complet, récépissé n° 0412 daté du 09/03 — aucune pièce complémentaire demandée",
        "Délai annoncé par la banque : 4 à 6 semaines de vérification KYC ; interlocuteur : chargée de clientèle ONG",
        "Conversion USD → CDF au taux de la banque (écart habituel de 0,3 à 0,6 % sous le taux officiel) ; frais de virement international : 25 USD",
        "Banque en ligne avec double autorisation : initiateur (finance) + 2 approbateurs ; plafond journalier de 50 000 USD",
      ],
    },
    result: "Un récépissé daté, une liste de conditions écrites (frais, taux de conversion, plafonds, double autorisation) et un calendrier de vérification annoncé par la banque.",
    pitfall: "Accepter des conditions « à l'oral ». Faites confirmer par e-mail ce que la banque vous a dit : en cas de désaccord de frais ou de taux, c'est votre seule preuve.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Activer le compte, régler les droits et réaliser un virement test',
    intro: "La banque confirme l'ouverture : avant d'envoyer des sommes importantes, vérifiez que tout fonctionne comme prévu, notamment les droits d'accès et la double autorisation.",
    steps: [
      {
        title: 'Signer et vérifier la convention',
        actions: [
          "Faites signer par chaque signataire la convention de compte et le spécimen, devant la banque (14 avril).",
          "Relisez la convention : titulaire, devise, signataires, seuils de double signature, frais — tout doit correspondre à la résolution du siège.",
          "Demandez la confirmation écrite de la banque listant les signataires enregistrés (c'est elle que vous reporterez au registre, procédure 3).",
        ],
      },
      {
        title: 'Régler les droits de la banque en ligne et tester',
        actions: [
          "Vous : droit d'initiateur uniquement (préparer un virement, jamais l'approuver).",
          "Nadine O. et Grace M. : approbateurs de catégorie A ; Aimé T. et Théo R. : approbateurs de catégorie B.",
          "Le 20 avril, initiez un virement test de 100 USD du compte USD vers le compte CDF (conversion) et faites-le approuver : vérifiez que l'ordre est bloqué tant que les deux approbations ne sont pas données.",
        ],
      },
    ],
    result: "Une convention signée conforme à la résolution, la confirmation écrite des signataires, des droits d'accès séparés (initiateur ≠ approbateurs) et un virement test réussi archivé.",
    tip: "Faites aussi tester le cas d'échec : essayez d'approuver votre propre ordre depuis votre profil d'initiateur. Si la banque en ligne l'autorise, faites corriger les droits avant tout paiement réel.",
    pitfall: "Découvrir au premier virement réel qu'un approbateur n'a pas d'accès ou qu'un seul peut tout faire. Le virement test à 100 USD coûte 25 USD de frais ; la découverte tardive coûte bien plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: 'Fixer la règle de conversion, les plafonds de solde et la routine mensuelle',
    intro: "Un compte en devise locale n'est pas un coffre : le solde qu'il contient perd de la valeur quand la monnaie se déprécie. La règle de gestion courante limite l'exposition et simplifie les rapprochements.",
    steps: [
      {
        title: 'Écrire la règle de conversion',
        actions: [
          "Convertissez au fil du plan de trésorerie mensuel (module 03), juste ce qu'il faut pour couvrir les besoins en CDF du mois.",
          "Fixez un plafond de solde CDF exprimé en équivalent USD (environ 6 semaines de besoins) : ici 5 500 USD.",
          "Gardez la réserve de précaution en USD, jamais en CDF.",
          "Comparez le taux de conversion de la banque au taux officiel du mois avant chaque conversion significative.",
        ],
      },
      {
        title: 'Planifier la routine mensuelle',
        actions: [
          "Chaque mois : récupérer les relevés de chaque devise, les rapprocher des écritures (module 03), contrôler les frais.",
          "Chaque trimestre : revoir le registre des signataires (procédure 3) et les conditions de la banque.",
        ],
      },
    ],
    example: {
      title: 'Règle de conversion du compte de Masisi (extrait)',
      lines: [
        "Besoins CDF du projet NFI ≈ 44 720 USD ÷ 12 mois ≈ 3 700 USD par mois → plafond de solde CDF : 5 500 USD",
        "Conversion : une fois par mois, le 1er jour ouvré après relevé du taux officiel ; ordre approuvé en double signature",
        "Contrôle : taux de la banque comparé au taux officiel du mois ; écart > 1 % → l'écrire au Finance Manager avant de convertir",
      ],
    },
    result: "Une règle de conversion écrite et validée (fréquence, plafond, taux contrôlé), une réserve en USD et une routine mensuelle de relevés.",
    pitfall: "Laisser s'accumuler des soldes CDF « au cas où ». Chaque point de dépréciation du franc se transforme en perte sur ce solde, sans aucun lien avec l'activité du projet.",
  },

  // ─────────────── PROCÉDURE 3 — Tenir le registre des signataires et procurations ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Définir la matrice de signature avant de nommer qui que ce soit',
    intro: "On choisit les règles avant les personnes. La matrice de signature dit qui peut approuver quoi, à partir de quel montant ; elle est approuvée par le siège ou la direction pays et annexée à la résolution transmise à la banque. Fil rouge : KAS, base de Masisi, avril 2026.",
    steps: [
      {
        title: 'Fixer les catégories et les seuils',
        actions: [
          "Catégorie A : Directrice pays et Finance Manager. Catégorie B : coordinateurs de projet et Responsable programmes.",
          "Fixez un seuil de référence en USD (ou équivalent) : ici 5 000 USD ; et un seuil de renvoi au siège : 50 000 USD.",
          "Écrivez la règle d'or : l'initiateur d'un virement n'est jamais celui qui l'approuve seul.",
        ],
      },
      {
        title: 'Écrire les interdits',
        actions: [
          "Un signataire n'approuve jamais un paiement dont il est bénéficiaire ou dont le bénéficiaire est un proche.",
          "Aucun virement n'est exécuté avec une seule approbation, quel que soit le montant, même en cas d'urgence.",
        ],
      },
    ],
    table: {
      columns: ['Montant du paiement', 'Approbations requises', 'Remarque'],
      rows: [
        ['Jusqu\'à 5 000 USD (ou équivalent)', '2 approbateurs : 1 de catégorie A + 1 de catégorie A ou B', "L'initiateur (finance) prépare, n'approuve pas"],
        ['De 5 000 à 50 000 USD', '2 approbateurs de catégorie A (Directrice pays + Finance Manager)', 'Pièces justificatives jointes à l\'ordre'],
        ['Plus de 50 000 USD', '2 approbateurs de catégorie A + accord écrit du siège', "L'accord est archivé avec l'ordre"],
      ],
    },
    result: "Une matrice d'une page, validée par la direction pays, qui précise catégories, seuils, interdits et séparation initiateur / approbateur.",
    pitfall: "Écrire une règle qui dépend d'une personne (« tout paiement passe par Nadine »). Une règle bancaire doit survivre à un congé, à une maladie ou à un départ.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Choisir les signataires et vérifier la compatibilité des rôles',
    intro: "La résolution du siège désigne les signataires NOMMÉMENT. Votre rôle est de vérifier, avant qu'elle soit signée, que la liste respecte la matrice et ne crée pas de conflit de rôles.",
    steps: [
      {
        title: 'Contrôler la liste proposée',
        actions: [
          "Au moins quatre signataires, pour que l'absence d'un ou deux ne bloque jamais les paiements.",
          "Au moins deux signataires de catégorie A et deux de catégorie B.",
          "Aucun signataire dont la fonction l'amène à engager seul des dépenses qu'il approuverait ensuite à la banque, sans second regard.",
          "Aucun signataire sans contrat actif avec l'organisation, ni sans pièce d'identité valide.",
        ],
      },
      {
        title: 'Documenter le contrôle',
        actions: [
          "Remplissez un tableau « personne — fonction — catégorie — comptes — vérifications » et conservez-le avec la résolution.",
          "Notez la date de fin de contrat des signataires à durée déterminée : elle déclenche la révocation (étape 6).",
        ],
      },
    ],
    example: {
      title: 'Liste de signataires de la base de Masisi — contrôle du 10 avril 2026',
      lines: [
        "Nadine O., Directrice pays — catégorie A — comptes USD et CDF — contrat à durée indéterminée ✔",
        "Grace M., Finance Manager — catégorie A — comptes USD et CDF — contrat à durée indéterminée ✔",
        "Aimé T., coordinateur NFI — catégorie B — comptes USD et CDF — contrat jusqu'au 30/04/2027 ✔ (renouvellement du passeport en cours)",
        "Théo R., Responsable programmes — catégorie B — comptes USD et CDF — départ annoncé le 30/06/2026 ⚠ à noter dans le planning RH",
      ],
    },
    result: "Une liste de quatre signataires conforme à la matrice, contrôlée, avec les dates de fin de contrat repérées.",
    tip: "Vous ne signez pas : si vous êtes initiateur, ne devenez pas signataire « par commodité ». La séparation initiateur / approbateur est ce qui protège aussi votre propre fonction.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Obtenir la confirmation écrite de la banque avant de remplir le registre',
    intro: "Une délégation interne ne vaut rien à la banque : seule compte la procuration que la banque a enregistrée. Le registre se remplit donc sur la base de la confirmation de la banque, pas de l'intention de l'organisation.",
    steps: [
      {
        title: 'Réclamer la confirmation',
        actions: [
          "Demandez à la banque une lettre ou une attestation datée listant, pour chaque compte, les signataires enregistrés, leurs pouvoirs et leur date d'effet.",
          "Vérifiez que cette lettre est signée ou tamponnée par la banque, et qu'elle porte le numéro de chaque compte.",
        ],
      },
      {
        title: 'Rapprocher confirmation et résolution',
        actions: [
          "Comparez, nom par nom, la lettre de la banque à la résolution du siège et à la matrice.",
          "En cas d'écart (nom orthographié autrement, signataire oublié, pouvoir plus large que prévu), demandez la correction écrite à la banque avant tout paiement.",
          "Classez la lettre dans le dossier « Banque — Signataires » et notez sa référence.",
        ],
      },
    ],
    example: {
      title: 'Confirmation de la banque (extrait — 14 avril 2026)',
      lines: [
        "Banque Lac Kivu — comptes USD ***4501 et CDF ***4502 — titulaire : Kivu Avenir Solidarité, base de Masisi",
        "Signataires enregistrés à la date du 14/04/2026 : Nadine O. (A), Grace M. (A), Aimé T. (B), Théo R. (B)",
        "Règle enregistrée : toute opération exige deux signatures ; l'accès en ligne distingue initiateur et approbateurs",
        "Écart relevé : pouvoir d'Aimé T. enregistré « sans plafond » au lieu de « jusqu'à 5 000 USD » → rectification demandée le 15/04",
      ],
    },
    result: "Une confirmation écrite de la banque, rapprochée de la résolution et de la matrice, sans aucun écart non corrigé.",
    pitfall: "Remplir le registre dès que la résolution est signée. Tant que la banque n'a pas confirmé, la procuration n'existe pas : votre registre afficherait un état faux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Remplir le registre-signataires-procurations-bancaires.docx ligne par ligne',
    intro: "Le template est un document Word avec une table de six colonnes : Nom — Rôle / fonction — Compte bancaire concerné — Date d'octroi — Date de révocation — Statut. Il est livré avec deux lignes d'exemple (« Ex. J. Mbala » et « Ex. A. Traoré ») et dix lignes vides.",
    steps: [
      {
        title: 'Préparer le document',
        actions: [
          "Ouvrez registre-signataires-procurations-bancaires.docx et enregistrez-le sous : Registre_signataires_KAS_Masisi_v1_2026-04-14.docx.",
          "Supprimez les deux lignes d'exemple (celles qui commencent par « Ex. »).",
          "Conservez la phrase d'objectif sous le titre : « un signataire non révoqué à temps est un risque de fraude majeur ».",
        ],
      },
      {
        title: 'Remplir une ligne par personne et par compte',
        actions: [
          "Nom : prénom et nom tels qu'écrits sur la confirmation de la banque.",
          "Rôle / fonction : la fonction et la catégorie, ex. « Directrice pays (A) ».",
          "Compte bancaire concerné : banque, devise et numéro masqué, ex. « Banque Lac Kivu — USD ***4501 ».",
          "Date d'octroi : la date d'effet confirmée par la banque, au format AAAA-MM-JJ (2026-04-14).",
          "Date de révocation : laissez vide tant que la personne est active. Statut : « Actif ».",
        ],
      },
    ],
    example: {
      title: 'Registre rempli — Banque Lac Kivu, base de Masisi (extrait, 8 lignes dont 4 présentées)',
      lines: [
        "Nadine O. | Directrice pays (A) | Banque Lac Kivu — USD ***4501 | 2026-04-14 | (vide) | Actif",
        "Nadine O. | Directrice pays (A) | Banque Lac Kivu — CDF ***4502 | 2026-04-14 | (vide) | Actif",
        "Grace M. | Finance Manager (A) | Banque Lac Kivu — USD ***4501 | 2026-04-14 | (vide) | Actif",
        "Théo R. | Responsable programmes (B) | Banque Lac Kivu — USD ***4501 | 2026-04-14 | (vide) | Actif",
        "… même logique pour Grace M. (CDF), Aimé T. (USD, CDF) et Théo R. (CDF) : 4 personnes × 2 comptes = 8 lignes",
      ],
    },
    result: "Un registre où chaque ligne a six champs renseignés ou volontairement vides (révocation), cohérent avec la confirmation de la banque, sans ligne « Ex. » résiduelle.",
    tip: "Une ligne par personne ET par compte : si une personne est révoquée sur le compte CDF mais reste active sur le compte USD, le registre doit pouvoir le montrer sans ambiguïté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Réviser le registre chaque trimestre et à chaque mouvement RH',
    intro: "Le registre est un document vivant. Sa revue se fait au minimum chaque trimestre et immédiatement à chaque départ, arrivée ou changement de poste d'une personne habilitée : c'est une corrélation avec les ressources humaines.",
    steps: [
      {
        title: 'Faire les trois rapprochements',
        actions: [
          "Registre ↔ liste RH : chaque signataire figure-t-il encore sur la liste du personnel, avec le même poste ?",
          "Registre ↔ banque : demandez la liste des signataires enregistrés à la date du jour et comparez nom par nom, compte par compte.",
          "Registre ↔ banque en ligne : listez les utilisateurs actifs et vérifiez que chacun correspond à une ligne « Actif ».",
        ],
      },
      {
        title: 'Conclure et dater',
        actions: [
          "Ajoutez en pied de document la mention « Revu le [date] par [nom], aucune anomalie » ou la liste des écarts et des actions.",
          "Fixez la prochaine date de revue (dans trois mois au plus) et inscrivez-la à l'agenda de la finance.",
        ],
      },
    ],
    example: {
      title: 'Revue du 15 juin 2026',
      lines: [
        "Registre ↔ RH : Théo R. quitte KAS le 30/06/2026 → à révoquer AVANT cette date (étape 6)",
        "Registre ↔ banque : liste de la banque du 15/06 = 8 lignes Actif, identiques au registre ✔",
        "Registre ↔ banque en ligne : 5 utilisateurs (1 initiateur + 4 approbateurs), tous rattachés à une ligne du registre ✔",
        "Revu le 15/06/2026 par le Finance Officer, validé par Grace M. — prochaine revue : 15/09/2026",
      ],
    },
    result: "Trois rapprochements faits et datés, un écart repéré (départ à venir) et une prochaine revue planifiée.",
    pitfall: "Ne réviser le registre que « quand on y pense ». Branchez la revue sur un événement certain : le calendrier RH et la clôture trimestrielle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Révoquer une procuration par écrit, avant le départ effectif',
    intro: "La règle est simple et non négociable : dès qu'un signataire quitte son poste ou l'organisation, sa procuration est révoquée par écrit auprès de la banque AVANT son départ effectif, jamais après. Un appel téléphonique ne suffit jamais.",
    steps: [
      {
        title: 'Envoyer la demande écrite',
        actions: [
          "Rédigez une lettre à la banque signée par un signataire habilité : identité du signataire sortant, comptes concernés, date d'effet souhaitée (immédiate).",
          "Envoyez-la par un moyen qui laisse une trace (remise contre décharge ou e-mail avec accusé) puis demandez la confirmation écrite et datée de la banque.",
          "Le jour même, supprimez ses droits sur la banque en ligne et retirez-lui tout jeton ou carte d'accès.",
        ],
      },
      {
        title: 'Mettre à jour le registre',
        actions: [
          "Sur chaque ligne concernée : renseignez la date de révocation (la date confirmée par la banque) et passez le statut à « Révoqué ». Ne supprimez jamais la ligne.",
          "Ajoutez la ligne du remplaçant, avec sa propre date d'octroi, après la confirmation de la banque.",
          "Classez la lettre et la confirmation avec le registre.",
        ],
      },
    ],
    example: {
      title: 'Révocation de Théo R. (départ le 30/06/2026)',
      lines: [
        "16/06/2026 : lettre signée par Nadine O. déposée à la banque (comptes USD ***4501 et CDF ***4502) ; accès en ligne supprimé le jour même",
        "19/06/2026 : confirmation écrite de la banque, effet immédiat → 11 jours avant le départ ✔",
        "Registre : Théo R. | Responsable programmes (B) | Banque Lac Kivu — USD ***4501 | 2026-04-14 | 2026-06-19 | Révoqué (idem ligne CDF)",
        "Nouvelle ligne : Joël B. | Coordinateur WASH (B) | Banque Lac Kivu — USD ***4501 | 2026-06-24 | (vide) | Actif (idem CDF)",
      ],
    },
    result: "Procuration révoquée avant le départ, confirmation écrite de la banque classée, statut « Révoqué » avec date sur chaque ligne et remplaçant enregistré — le tout avant la date de départ.",
    pitfall: "Prévenir la banque par téléphone « pour aller vite ». Sans confirmation écrite et datée, l'organisation reste juridiquement exposée si l'ancien signataire agit encore sur le compte.",
  },

  // ─────────────── PROCÉDURE 4 — Sécuriser un transfert international ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Préparer le dossier du virement et vérifier sa justification',
    intro: "Un virement international se prépare comme une dépense : pièces, approbation, imputation. Fil rouge : le 18 mai 2026, KAS doit verser un acompte de 6 300 USD, soit 30 % d'une commande de 21 000 USD de bâches plastiques à Savanna Supplies Ltd (fictive, Nairobi) pour les kits NFI de Masisi.",
    steps: [
      {
        title: 'Rassembler les pièces',
        actions: [
          "Bon de commande validé BC-2026-012 et facture proforma du fournisseur : le montant et les conditions d'acompte (30 % à la commande) doivent concorder.",
          "Contrat ou conditions de vente signés, avec les coordonnées bancaires contractuelles du fournisseur.",
          "Approbation d'achat selon la délégation (seuil de 10 000 USD : approuvé par le coordinateur NFI et la Directrice pays).",
        ],
      },
      {
        title: 'Vérifier l\'imputation',
        actions: [
          "Codifiez la dépense (module 01) : NFI / ECHO / ligne « Kits NFI » / compte d'achat adapté.",
          "Vérifiez le disponible réel de la ligne avant le paiement et la mise à jour du registre des engagements.",
        ],
      },
    ],
    example: {
      title: 'Dossier du virement VIR-2026-014',
      lines: [
        "BC-2026-012 : 21 000 USD de bâches — conditions : 30 % à la commande (6 300 USD), solde de 14 700 USD à la livraison",
        "Proforma PF-SS-0388 du 12/05/2026 et contrat C-2026-017 signé — bénéficiaire : Savanna Supplies Ltd",
        "Approbation d'achat du 13/05 : Aimé T. et Nadine O. | Imputation : NFI / ECHO / Kits NFI",
        "Engagement ENG-NFI-003 : 21 000 USD, réalisé 0, reste 21 000 avant ce paiement",
      ],
    },
    result: "Un dossier avec bon de commande, proforma, contrat, approbation d'achat et imputation, dont les montants concordent avec l'ordre de paiement à venir.",
    pitfall: "Payer à partir d'une simple facture reçue par e-mail, sans bon de commande ni contrat. C'est le terrain préféré des fraudeurs et la première chose qu'un auditeur interroge.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Vérifier les coordonnées bancaires par un canal indépendant',
    intro: "C'est la protection de base contre la fraude au changement de RIB. Vérifiez TOUJOURS l'IBAN ou le numéro de compte, le code SWIFT, le nom exact de la banque et le nom du bénéficiaire par un canal indépendant de celui par lequel ils vous ont été communiqués.",
    steps: [
      {
        title: 'Comparer aux coordonnées contractuelles',
        actions: [
          "Ouvrez le contrat C-2026-017 et comparez, caractère par caractère, les coordonnées du contrat à celles de l'ordre de virement.",
          "Si elles sont identiques et déjà utilisées pour des paiements précédents, notez-le sur la fiche.",
          "Si elles sont nouvelles ou différentes, passez au contrôle téléphonique avant toute chose.",
        ],
      },
      {
        title: 'Passer le contrôle de rappel',
        actions: [
          "Appelez le fournisseur sur un numéro que vous connaissiez déjà (répertoire fournisseur, contrat) — jamais celui indiqué dans l'e-mail de demande.",
          "Faites répéter oralement les quatre éléments : nom du bénéficiaire, banque, SWIFT, numéro de compte.",
          "Faites effectuer l'appel par vous ET faites relire le résultat par une deuxième personne (Grace M.).",
        ],
      },
    ],
    example: {
      title: 'Fiche de contrôle — étape « coordonnées »',
      lines: [
        "Bénéficiaire : Savanna Supplies Ltd — banque : (fictive) Nairobi Commerce Bank — SWIFT : NCBKXXNA — compte : ***7720",
        "Comparaison avec C-2026-017 : identique ✔ — coordonnées déjà utilisées : première utilisation (nouveau fournisseur)",
        "Rappel du 18/05 à 09:40 au +254… (numéro du contrat) : M. Otieno (fictif) confirme les 4 éléments ✔ — vérifié par Grace M.",
      ],
    },
    result: "Les quatre éléments bancaires du bénéficiaire sont vérifiés par un canal indépendant, par deux personnes, et la preuve est consignée sur la fiche de contrôle.",
    tip: "Un fournisseur sérieux ne s'offusque jamais d'un rappel. S'il refuse, esquive ou presse en insistant sur l'urgence, considérez-le comme un signal d'alerte et faites remonter au Finance Manager.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: "Choisir la devise, les frais et le taux de l'ordre de virement",
    intro: "Une mauvaise devise ou un mauvais partage de frais coûte de l'argent et complique la comptabilité. Décidez-les avant d'initier l'ordre.",
    steps: [
      {
        title: 'Décider la devise',
        actions: [
          "Payez dans la devise de la facture : ici l'USD, depuis le compte USD ; aucune conversion, donc aucun écart de change à enregistrer.",
          "Si une conversion était nécessaire, comparez le taux proposé par la banque au taux officiel du mois et notez l'écart.",
        ],
      },
      {
        title: 'Décider les frais et la référence',
        actions: [
          "Choisissez le partage des frais (OUR, SHA ou BEN) selon le contrat : ici OUR, KAS supporte tous les frais pour que le fournisseur reçoive 6 300 USD complets.",
          "Rédigez la référence du virement : le numéro de bon de commande et de facture (BC-2026-012 / PF-SS-0388).",
          "Faites contrôler le nom du bénéficiaire par rapport aux listes de contrôle de l'organisation (conformité, module 08).",
        ],
      },
    ],
    example: {
      title: 'Paramètres retenus pour VIR-2026-014',
      lines: [
        "Devise de l'ordre : USD, compte débité : Banque Lac Kivu — USD ***4501 | Montant : 6 300,00 USD",
        "Frais : OUR (KAS supporte) — estimation : 25 USD de frais bancaires + frais de correspondant",
        "Référence : BC-2026-012 / PF-SS-0388 — acompte 30 % bâches NFI | Date d'exécution : 18/05/2026",
      ],
    },
    result: "Devise, compte débité, partage des frais et référence arrêtés par écrit sur la fiche, avant l'initiation de l'ordre.",
    pitfall: "Laisser la banque choisir la devise ou le taux « par défaut ». Une conversion non demandée peut coûter un demi-point ou plus par rapport au taux officiel, sans que vous le voyiez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Initier puis approuver : la double signature en pratique',
    intro: "Celui qui initie ne peut jamais approuver seul. L'ordre est préparé par la finance, puis approuvé par deux signataires qui contrôlent les pièces — pas seulement cliquent.",
    steps: [
      {
        title: 'Initier l\'ordre',
        actions: [
          "Connectez-vous avec VOTRE profil d'initiateur. Saisissez le bénéficiaire, le compte, le SWIFT, le montant, les frais et la référence.",
          "Joignez à l'ordre, en PDF, le bon de commande, la proforma, le contrat et la fiche de contrôle des coordonnées.",
          "Relisez chaque champ à voix haute avec les pièces avant de valider l'initiation.",
        ],
      },
      {
        title: 'Faire approuver',
        actions: [
          "Le montant dépasse 5 000 USD : l'ordre exige deux approbateurs de catégorie A (Nadine O. et Grace M.).",
          "Chaque approbateur ouvre les pièces jointes, contrôle les coordonnées et le montant, puis approuve avec son propre accès — jamais avec celui d'un collègue.",
          "Vérifiez que le statut de l'ordre passe à « Exécuté » ou « Envoyé à la banque » seulement après la deuxième approbation.",
        ],
      },
    ],
    example: {
      title: 'Journal de l\'ordre VIR-2026-014 (extrait de la banque en ligne)',
      lines: [
        "18/05/2026 10:05 — Initié par : Finance Officer — statut : en attente d'approbation (0/2)",
        "18/05/2026 10:40 — Approuvé par : Grace M. (A) — statut : 1/2",
        "18/05/2026 11:15 — Approuvé par : Nadine O. (A) — statut : 2/2 — envoyé à la banque avant l'heure limite de 14:00",
      ],
    },
    result: "Un ordre exécuté seulement après deux approbations distinctes de personnes habilitées, avec un journal horodaté qui prouve qui a initié et qui a approuvé.",
    pitfall: "Prêter son identifiant ou son jeton à un collègue « pour gagner du temps ». Dès qu'un accès est partagé, la double signature n'existe plus que sur le papier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: "Conserver la preuve d'exécution et comptabiliser le paiement",
    intro: "Le virement n'est terminé que lorsque sa preuve est archivée avec la pièce justificative et que la dépense est correctement enregistrée.",
    steps: [
      {
        title: 'Archiver la preuve',
        actions: [
          "Téléchargez l'avis d'exécution de la banque (PDF) et nommez-le : VIR-2026-014_avis.pdf.",
          "Classez-le dans le dossier du fournisseur avec le bon de commande, la proforma, le contrat et la fiche de contrôle.",
          "Apposez sur la facture ou la proforma la mention « PAYÉ le 18/05/2026 — VIR-2026-014 ».",
        ],
      },
      {
        title: 'Enregistrer dans la comptabilité',
        actions: [
          "Dans la grille de codification (module 01), saisissez la dépense avec le n° de pièce et mettez à jour le registre des engagements (réalisé +6 300, reste 14 700).",
          "Codez à part les frais bancaires (25 USD) en fonctionnement du bureau, avec le même numéro de virement.",
          "Si une conversion avait eu lieu, enregistrez l'écart comptable (procédure 6, étape 6).",
        ],
      },
    ],
    example: {
      title: 'Écritures du 18/05/2026',
      lines: [
        "2026-05-18 | Acompte 30 % bâches NFI – Savanna Supplies – BC-2026-012 – VIR-2026-014 | NFI | ECHO | Kits NFI | 6300 | Engagement | Confirmé | VIR-2026-014",
        "2026-05-18 | Frais bancaires virement international – VIR-2026-014 | NFI | ECHO | Fonctionnement bureau | 25 | Caisse | Confirmé | VIR-2026-014-F",
        "Registre des engagements : ENG-NFI-003 | 21 000 | réalisé 6 300 | reste 14 700 | Ouvert",
      ],
    },
    result: "Avis d'exécution archivé avec le dossier, facture marquée « PAYÉ », dépense et frais codés, engagement mis à jour.",
    tip: "Une preuve non retrouvable en 2 minutes est une preuve inexistante. Nommez chaque avis avec le numéro du virement et le fournisseur, et rangez-le au même endroit que le reste du dossier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: "Suivre l'exécution et clôturer la fiche de contrôle",
    intro: "Un virement parti n'est pas un virement reçu. Terminez la boucle : confirmation de réception, rapprochement avec le relevé bancaire, clôture de la fiche.",
    steps: [
      {
        title: 'Faire confirmer la réception',
        actions: [
          "Demandez au fournisseur une confirmation de réception par un canal connu (e-mail de son adresse habituelle ou rappel au numéro du contrat).",
          "Fixez un délai : 3 à 5 jours ouvrés pour un virement international.",
          "Passé ce délai sans confirmation, demandez à la banque une recherche de virement avec l'avis d'exécution.",
        ],
      },
      {
        title: 'Rapprocher et clôturer',
        actions: [
          "Au relevé bancaire du mois, retrouvez le débit de 6 300 USD et celui des frais, et cochez-les avec le dossier.",
          "Signez et datez la fiche de contrôle du virement : initiateur, approbateurs, vérificateur des coordonnées.",
        ],
      },
    ],
    table: {
      columns: ['Rubrique de la fiche', 'Renseigné pour VIR-2026-014'],
      rows: [
        ['Pièces justificatives', 'BC-2026-012, proforma PF-SS-0388, contrat C-2026-017, approbation d\'achat du 13/05'],
        ['Coordonnées vérifiées par canal indépendant', 'Oui — rappel du 18/05 à 09:40, vérifié par Grace M.'],
        ['Devise, frais, référence', 'USD, OUR, BC-2026-012 / PF-SS-0388'],
        ['Approbations', 'Grace M. (A) 10:40 ; Nadine O. (A) 11:15 — seuil > 5 000 USD respecté'],
        ['Preuve d\'exécution', 'Avis VIR-2026-014_avis.pdf'],
        ['Confirmation de réception', 'E-mail du fournisseur le 21/05/2026'],
        ['Rapprochement bancaire', 'Débit retrouvé au relevé de mai, écart : 0'],
      ],
    },
    result: "Une fiche de contrôle signée et complète, avec confirmation de réception et rapprochement bancaire, classée avec le dossier du fournisseur.",
    pitfall: "Considérer le virement comme terminé au moment où il est approuvé. Les erreurs de compte et les ordres bloqués par la banque ne se découvrent qu'à la réconciliation.",
  },

  // ─────────────── PROCÉDURE 5 — Fixer le taux comptable officiel du mois ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Relever le taux officiel de la banque centrale et le comparer au mois précédent',
    intro: "Le taux officiel de la banque centrale du pays d'opération (Banque Centrale du Congo pour la RDC) est, sauf instruction contraire du siège, la source légale du taux comptable officiel mensuel. Réflexe de début de mois : le relever et le comparer au mois précédent avant de le valider. Fil rouge : lundi 2 mars 2026, premier jour ouvré de mars.",
    steps: [
      {
        title: 'Relever le taux',
        actions: [
          "Ouvrez le site de la Banque Centrale du Congo, rubrique des taux de change indicatifs, et sélectionnez la paire USD/CDF à la date du jour.",
          "Notez le taux (CDF pour 1 USD), la date de publication et l'adresse de la page.",
          "Enregistrez la page en PDF ou une capture d'écran datée : Taux_BCC_2026-03-02.pdf.",
        ],
      },
      {
        title: 'Comparer au mois précédent',
        actions: [
          "Calculez la variation : (taux de mars − taux de février) ÷ taux de février.",
          "Si la variation dépasse 3 % en un mois, revérifiez la date et la devise de la page avant de continuer, puis prévenez le Finance Manager.",
        ],
      },
    ],
    example: {
      title: 'Relevé du 2 mars 2026',
      lines: [
        "Taux indicatif BCC du 02/03/2026 : 2 810 CDF pour 1 USD (capture Taux_BCC_2026-03-02.pdf)",
        "Taux de février (relevé du 02/02) : 2 720 CDF pour 1 USD",
        "Variation : (2 810 − 2 720) ÷ 2 720 = +3,3 % en un mois → au-dessus du seuil de 3 % : double vérification faite et Grace M. informée",
      ],
    },
    result: "Un taux officiel relevé à la source, daté, capturé et comparé au mois précédent, avec la variation calculée.",
    pitfall: "Relever le taux « quand on a le temps », à des dates différentes chaque mois. Fixez la règle (ici : 1er jour ouvré) et appliquez-la toujours de la même façon.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Croiser avec une source indépendante et relever le taux du marché',
    intro: "XE.com ou OANDA servent à croiser l'information, jamais à remplacer le taux de la banque centrale. Le taux du marché observé est enregistré à titre de comparaison, pour repérer une dérive entre taux officiel et réalité du terrain.",
    steps: [
      {
        title: 'Croiser le taux officiel',
        actions: [
          "Consultez XE.com ou OANDA pour la même date et notez le taux indicatif USD/CDF.",
          "Comparez avec le taux BCC : un écart de quelques dixièmes de pourcent est normal ; un écart de plusieurs points signale une page non mise à jour ou une erreur de lecture.",
        ],
      },
      {
        title: 'Relever le taux du marché observé',
        actions: [
          "Demandez à la banque partenaire son taux de vente USD/CDF du jour, et notez-le avec la date et la source.",
          "Notez qu'il ne servira qu'à comparer : il n'entre dans aucun calcul comptable.",
        ],
      },
      {
        title: 'Plan B si le site officiel est inaccessible',
        actions: [
          "Utilisez XE ou OANDA uniquement pour vérifier un ordre de grandeur, puis demandez au Finance Manager la conduite à tenir (taux de la banque partenaire à titre provisoire, validé par écrit).",
          "Régularisez dès que le taux officiel est de nouveau publié et notez la régularisation.",
        ],
      },
    ],
    example: {
      title: 'Croisement du 2 mars 2026',
      lines: [
        "BCC : 2 810 | XE (taux moyen) : 2 818 | écart : +0,3 % → cohérent",
        "Banque Lac Kivu, taux de vente du jour : 2 830 | écart avec le taux officiel : (2 830 − 2 810) ÷ 2 810 = +0,7 %",
        "Conclusion : pas de tension entre taux officiel et réalité du terrain",
      ],
    },
    result: "Taux officiel confirmé par une source indépendante, taux du marché observé relevé pour comparaison, sources écrites.",
    tip: "Tenez un petit journal de sources : « BCC — URL — date — capture ». Quand un auditeur demande « d'où vient ce taux ? », vous répondez en dix secondes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: "Saisir la ligne du mois dans l'onglet « Taux de change mensuel »",
    intro: "Le template suivi-taux-change-impact-budgetaire.xlsx contient trois onglets : « Taux de change mensuel », « Impact par transaction » et « Synthèse cumulée ». Vous commencez par le premier, qui contient cinq colonnes : Mois, Taux budgété (CDF/USD), Taux officiel comptable du mois, Taux marché observé, Écart taux (%).",
    steps: [
      {
        title: 'Préparer le classeur',
        actions: [
          "Ouvrez le template et enregistrez-le sous un nom explicite : Suivi_taux_change_KAS_2026.xlsx. Utilisez une copie du classeur par taux budgété (un pour les budgets à 2 600, un autre pour le projet NFI à 2 800).",
          "Les lignes 5 à 7 (2026-01, 2026-02, 2026-03) sont fournies à titre d'exemple : comparez-les à vos propres relevés et corrigez-les si nécessaire.",
        ],
      },
      {
        title: 'Saisir la ligne de mars',
        actions: [
          "Colonne A « Mois » : saisissez 2026-03, au format texte AAAA-MM.",
          "Colonne B « Taux budgété » : 2600, le taux du budget signé.",
          "Colonne C « Taux officiel comptable du mois » : 2810, le taux relevé à l'étape 1.",
          "Colonne D « Taux marché observé » : 2830, relevé à l'étape 2.",
          "Colonne E « Écart taux (%) » : ne la saisissez pas. Elle contient déjà la formule =(C7-B7)/B7.",
        ],
      },
    ],
    example: {
      title: "Onglet « Taux de change mensuel » après saisie du 2 mars (et préparation d'avril)",
      lines: [
        "Mois | Taux budgété | Taux officiel comptable | Taux marché observé | Écart taux (%)",
        "2026-01 | 2600 | 2650 | 2680 | =(C5-B5)/B5 → 1,9 %",
        "2026-02 | 2600 | 2720 | 2750 | =(C6-B6)/B6 → 4,6 %",
        "2026-03 | 2600 | 2810 | 2830 | =(C7-B7)/B7 → 8,1 %",
        "Mois suivant : ligne 8, 2026-04 ; copiez la formule de E7 vers E8 puis saisissez B, C et D le 1er avril",
      ],
    },
    result: "Une ligne par mois, avec les trois taux saisis à la main et l'écart calculé automatiquement par la formule de la colonne E.",
    pitfall: "Écraser la formule de la colonne E en tapant un pourcentage à la main. Le jour où le taux budgété change, l'écart ne bouge plus et personne ne le voit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: "Lire l'écart de taux et déclencher les alertes",
    intro: "L'écart de taux de la colonne E compare le taux officiel du mois au taux budgété. Positif : le taux CDF/USD est plus élevé que celui du budget. Cette colonne est votre premier signal d'alerte : lisez-la chaque mois et comparez-la à vos seuils (procédure 1, étape 6).",
    steps: [
      {
        title: 'Lire l\'écart',
        actions: [
          "Lisez la valeur de E pour le mois, puis la tendance sur les derniers mois (hausse, stabilité, repli).",
          "Comparez à vos seuils : jaune à 3 %, rouge à 5 % (la marge).",
        ],
      },
      {
        title: 'Lire l\'écart entre taux officiel et taux du marché',
        actions: [
          "Calculez : (taux marché − taux officiel) ÷ taux officiel. Moins de 2 % : situation normale.",
          "Au-delà de 5 % d'écart, un marché parallèle s'installe : prévenez le Finance Manager, rappelez aux équipes l'interdiction d'utiliser ce taux, et vérifiez qu'aucun paiement n'a été converti à ce taux.",
        ],
      },
    ],
    table: {
      columns: ['Mois', 'Écart taux officiel / budgété', 'Alerte', 'Marché / officiel'],
      rows: [
        ['2026-01', '1,9 %', 'Aucune', '+1,1 %'],
        ['2026-02', '4,6 %', 'Jaune (≥ 3 %)', '+1,1 %'],
        ['2026-03', '8,1 %', 'Rouge (≥ 5 %)', '+0,7 %'],
      ],
    },
    result: "Chaque mois, un niveau d'alerte écrit (aucune, jaune, rouge) et une conclusion sur l'écart entre taux officiel et marché.",
    pitfall: "Utiliser un taux de marché parallèle parce qu'il est « plus avantageux » pour le budget. C'est l'un des signaux les plus immédiatement repérés par un auditeur externe, et selon le pays, une infraction à la réglementation des changes elle-même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Faire valider, figer et diffuser le taux du mois',
    intro: "Le taux comptable officiel est UN taux par mois, utilisé par tous pour toutes les conversions comptables du mois. Il doit être validé, figé et connu de ceux qui saisissent.",
    steps: [
      {
        title: 'Faire valider',
        actions: [
          "Envoyez à Grace M. le taux relevé, la capture BCC, le croisement XE et la variation du mois.",
          "Obtenez sa validation écrite (un e-mail suffit) et classez-la avec la capture.",
        ],
      },
      {
        title: 'Figer et diffuser',
        actions: [
          "Protégez la ligne validée (onglet Révision > Protéger la feuille) avec un mot de passe détenu par le Finance Manager.",
          "Affichez et envoyez en une ligne le taux du mois à la caisse, à la logistique et aux chefs de projet : « Taux comptable officiel de mars 2026 : 2 810 CDF/USD ».",
          "Interdisez toute correction rétroactive : une erreur se régularise par une écriture documentée, jamais par un changement de taux.",
        ],
      },
    ],
    example: {
      title: 'Message de diffusion',
      lines: [
        "Objet : Taux comptable officiel — mars 2026",
        "Le taux comptable officiel de mars est fixé à 2 810 CDF pour 1 USD (taux indicatif de la Banque Centrale du Congo du 02/03/2026, validé par le Finance Manager).",
        "Il s'applique à toutes les conversions comptables de mars. Il ne sera pas modifié en cours de mois.",
      ],
    },
    result: "Un taux validé par écrit, protégé dans le template, diffusé aux équipes qui saisissent et archivé avec ses preuves.",
    tip: "Ajoutez l'adresse de la page BCC et la date de capture en commentaire de la cellule C7 : l'auditeur retrouve la source sans vous la demander.",
  },

  // ─────────────── PROCÉDURE 6 — Calculer et enregistrer le gain ou la perte de change ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 7',
    title: 'Lister les transactions significatives converties du mois',
    intro: "Vous ne calculez pas l'effet du change sur chaque petite dépense : vous isolez les transactions qui comptent. Fil rouge : clôture du 1er trimestre, 1er avril 2026. Entrées : la grille de codification du module 01, les relevés bancaires, le registre des paiements en CDF.",
    steps: [
      {
        title: 'Définir ce qui est « significatif »',
        actions: [
          "Fixez un seuil écrit : par exemple toute transaction locale d'au moins 500 USD, plus les paies et loyers quel que soit le montant.",
          "N'incluez que les charges payées en CDF.",
        ],
      },
      {
        title: 'Extraire les transactions',
        actions: [
          "Dans la grille de codification, filtrez le trimestre et les dépenses de la rubrique concernée payées en CDF ; classez par montant décroissant.",
          "Notez pour chaque transaction : date, libellé, montant en USD budgété, n° de pièce.",
        ],
      },
    ],
    example: {
      title: 'Transactions retenues pour le T1 2026',
      lines: [
        "Carburant véhicule WASH — janvier — 1 200 USD budgétés — pièce PC-0112",
        "Entretien des véhicules, Garage Virunga (fictif) — février — 3 000 USD budgétés — pièce GV-2026-009",
        "Loyer du bureau annexe de Rutshuru — mars — 500 USD budgétés — pièce BAIL-RUT-03",
        "Paie du personnel national Nutrition — mars — 9 500 USD budgétés — pièce PAIE-2026-03",
      ],
    },
    result: "Une liste de quatre transactions significatives, avec leur mois de paiement et leur numéro de pièce, sélectionnée selon une règle écrite.",
    tip: "Gardez le même seuil chaque mois : l'écart cumulé n'a de sens que si les transactions sont sélectionnées de la même façon d'une période à l'autre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 7',
    title: 'Déterminer le montant en USD à saisir et vérifier le sens du calcul',
    intro: "La colonne B du calculateur s'appelle « Montant (USD) ». Ce n'est pas le montant payé en francs congolais : c'est la valeur en USD de la charge telle que budgétée. Dites-vous ce que mesure le calcul avant de le remplir.",
    steps: [
      {
        title: 'Établir le montant en USD',
        actions: [
          "Prenez la valeur en USD de la charge : le prix de référence du contrat ou le montant budgété de la ligne.",
          "Si seul le montant en CDF est connu, divisez-le par le taux budgété : 1 300 000 CDF ÷ 2 600 = 500 USD.",
        ],
      },
      {
        title: 'Vérifier la devise de facturation',
        actions: [
          "Charge fixée en USD et couverte en CDF au taux du mois (loyers, salaires, carburant, entretien du fil rouge) : elle va dans le calculateur.",
          "Charge fixée en CDF dans le contrat : une dépréciation joue en faveur du budget (module 02) ; ne la saisissez pas comme une perte, traitez-la à part et signalez le gain.",
        ],
      },
    ],
    example: {
      title: 'Montants saisis et justification',
      lines: [
        "Loyer Rutshuru : bail de 500 USD par mois payé en CDF au taux du mois → B = 500",
        "Garage Virunga : devis en équivalent USD, réglé en CDF → B = 3 000",
        "Carburant WASH : budget mensuel 1 200 USD → B = 1 200 | Paie nationale de mars : 9 500 USD budgétés → B = 9 500",
      ],
    },
    result: "Pour chaque transaction, un montant en USD justifié, et la confirmation que le sens du calcul correspond à sa devise de facturation.",
    pitfall: "Taper dans la colonne B le montant payé en francs congolais. Le résultat serait multiplié par le taux, soit des millions de pertes imaginaires.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 7',
    title: "Saisir les transactions et brancher les taux dans « Impact par transaction »",
    intro: "Le deuxième onglet contient six colonnes : Transaction, Montant (USD), Taux budgété, Taux appliqué, Montant en CDF au taux appliqué, Gain / (Perte) vs. budget (USD). Les deux premières lignes sont livrées avec des formules d'exemple.",
    steps: [
      {
        title: 'Remplir les colonnes A et B',
        actions: [
          "Ligne 5 : remplacez « Paiement loyer bureau » par « Loyer annexe Rutshuru — mars » et gardez 500 en B5.",
          "Ligne 6 : remplacez « Paiement fournisseur NFI » par « Entretien véhicules Garage Virunga — février » et saisissez 3000 en B6.",
          "Lignes 7 et 8 : « Carburant véhicule WASH — janvier » (1200) et « Paie personnel national — mars » (9500).",
        ],
      },
      {
        title: 'Brancher C et D sur le bon mois',
        actions: [
          "Colonne C « Taux budgété » : ='Taux de change mensuel'!B5 (déjà présent en C5 et C6) ; recopiez-le en C7 et C8.",
          "Colonne D « Taux appliqué » : le taux officiel du MOIS DE LA TRANSACTION. D5 (mars) ='Taux de change mensuel'!C7 ; D6 (février) ='Taux de change mensuel'!C6.",
          "Saisissez D7 (janvier) ='Taux de change mensuel'!C5 et D8 (mars) ='Taux de change mensuel'!C7.",
          "Colonnes E et F : copiez les formules de la ligne 6 vers les lignes 7 et 8.",
        ],
      },
    ],
    example: {
      title: "Onglet « Impact par transaction » après saisie (formules de la ligne 5 : E5 =B5*D5, F5 =(D5-C5)*B5/C5*-1)",
      lines: [
        "5 | Loyer annexe Rutshuru — mars | 500 | 2600 | 2810 | 1 405 000 | −40,38",
        "6 | Entretien véhicules Garage Virunga — février | 3000 | 2600 | 2720 | 8 160 000 | −138,46",
        "7 | Carburant véhicule WASH — janvier | 1200 | 2600 | 2650 | 3 180 000 | −23,08",
        "8 | Paie personnel national — mars | 9500 | 2600 | 2810 | 26 695 000 | −767,31",
      ],
    },
    result: "Quatre lignes complètes où le taux appliqué de chaque ligne est celui du mois de la transaction, et dont les formules E et F s'affichent sans erreur.",
    pitfall: "Brancher D sur le dernier mois saisi « parce que c'est le plus récent ». Chaque transaction se convertit au taux comptable officiel de SON mois, pas à celui d'aujourd'hui.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 7',
    title: 'Contrôler les calculs à la main et lire le résultat',
    intro: "Un tableur qui calcule ne dispense pas de comprendre ce qu'il calcule. Refaites à la main au moins une ligne, vérifiez le signe et sachez expliquer chaque colonne.",
    steps: [
      {
        title: 'Recalculer la ligne 5',
        actions: [
          "E5 : 500 USD × 2 810 = 1 405 000 CDF nécessaires au taux du mois.",
          "Au taux budgété, 500 USD correspondaient à 500 × 2 600 = 1 300 000 CDF : il faut donc 105 000 CDF de plus.",
          "F5 : 105 000 ÷ 2 600 = 40,38 USD, affiché en négatif : (2 810 − 2 600) × 500 ÷ 2 600 × −1 = −40,38.",
        ],
      },
      {
        title: 'Lire et contrôler',
        actions: [
          "Vérifiez que le signe est négatif quand le taux appliqué dépasse le taux budgété, positif dans le cas contraire.",
          "Vérifiez que l'ordre de grandeur est cohérent : l'effet d'une ligne de 500 USD à 8,1 % doit être proche de 40 USD.",
        ],
      },
    ],
    table: {
      columns: ['Transaction', 'Montant (USD)', 'Écart de taux', 'Perte (USD)'],
      rows: [
        ['Loyer Rutshuru — mars', '500', '+8,1 %', '−40,38'],
        ['Garage Virunga — février', '3 000', '+4,6 %', '−138,46'],
        ['Carburant WASH — janvier', '1 200', '+1,9 %', '−23,08'],
        ['Paie nationale — mars', '9 500', '+8,1 %', '−767,31'],
        ['Total', '14 200', '≈ +6,8 % pondéré', '−969,23'],
      ],
    },
    result: "Une ligne recalculée à la main avec le même résultat que le template, des signes cohérents et un ordre de grandeur plausible pour chaque ligne.",
    tip: "Si le résultat vous surprend, vérifiez d'abord le branchement de D sur le bon mois, puis les unités (USD en B, jamais CDF), puis la formule. Neuf erreurs sur dix viennent de là.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 7',
    title: 'Étendre la synthèse cumulée sans la casser',
    intro: "L'onglet « Synthèse cumulée » ne contient qu'une cellule : B4, « Total gain / (perte) de change cumulé (USD) ». Sa formule d'origine ne couvre que deux lignes (F5:F6) : tant qu'elle n'est pas étendue, les lignes 7 et suivantes ne sont pas comptées.",
    steps: [
      {
        title: 'Étendre la plage de la formule',
        actions: [
          "Ouvrez l'onglet « Synthèse cumulée » et cliquez sur B4 : =SUM('Impact par transaction'!F5:F6).",
          "Remplacez-la par =SUM('Impact par transaction'!F5:F10), qui couvre toutes les lignes préparées du calculateur. C'est la seule modification autorisée de cet onglet, malgré la mention « Ne pas modifier ».",
          "Au-delà de la ligne 10, insérez de nouvelles lignes AU-DESSUS de la ligne 10 (clic droit > Insérer) : la plage s'étend automatiquement.",
        ],
      },
      {
        title: 'Tester',
        actions: [
          "Contrôlez que B4 égale la somme manuelle de la colonne F : −40,38 − 138,46 − 23,08 − 767,31.",
          "Modifiez temporairement un montant en B (ex. 500 → 600), vérifiez que B4 change, puis remettez la valeur d'origine.",
        ],
      },
    ],
    example: {
      title: 'Synthèse cumulée au 31 mars 2026',
      lines: [
        "Avant correction : B4 = SUM(F5:F6) = −178,84 USD (deux lignes seulement)",
        "Après correction : B4 = SUM(F5:F10) = −969,23 USD (quatre lignes saisies, lignes 9 et 10 vides)",
        "Contrôle manuel : −40,38 − 138,46 − 23,08 − 767,31 = −969,23 ✔",
      ],
    },
    result: "Une synthèse qui compte toutes les lignes saisies, testée par un contrôle manuel, et dont B4 affiche −969,23 USD.",
    pitfall: "Ajouter des transactions dans les lignes 7 et suivantes sans toucher à B4. La synthèse affiche alors une perte de 178,84 USD au lieu de 969,23 USD : c'est ce chiffre faux que vous donneriez au bailleur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 7',
    title: "Enregistrer l'écart comptable de conversion au compte de pertes ou gains de change",
    intro: "Le calculateur mesure l'effet sur le budget. La comptabilité enregistre, elle, l'écart entre le taux réel de la conversion (taux du jour) et le taux comptable officiel du mois. Les deux écarts sont distincts : ne reportez jamais l'un dans l'autre.",
    steps: [
      {
        title: 'Calculer l\'écart de la conversion',
        actions: [
          "Reprenez l'avis de la banque : conversion de 10 000 USD le 12 mars 2026 au taux de la banque de 2 795 CDF/USD, soit 27 950 000 CDF reçus.",
          "Valorisez ces CDF au taux comptable de mars : 27 950 000 ÷ 2 810 = 9 946,62 USD.",
          "Écart : 10 000 − 9 946,62 = 53,38 USD de perte réalisée (le taux obtenu est inférieur au taux officiel).",
        ],
      },
      {
        title: 'Passer l\'écriture',
        actions: [
          "Débit du compte banque CDF pour 9 946,62 USD (27 950 000 CDF), débit du compte de pertes de change pour 53,38 USD, crédit du compte banque USD pour 10 000 USD.",
          "Utilisez le compte de pertes de change de votre plan (676 en référentiel SYSCOHADA) ; s'il n'existe pas dans la liste de l'onglet « Listes » du module 01, faites-le créer.",
          "Libellé : « Conversion 10 000 USD en CDF – taux banque 2 795 – taux comptable mars 2 810 – avis BLK-0312 ».",
        ],
      },
    ],
    table: {
      columns: ['Compte', 'Débit', 'Crédit'],
      rows: [
        ['Banque Lac Kivu — CDF (27 950 000 CDF)', '9 946,62 USD', ''],
        ['Pertes de change (676 en SYSCOHADA)', '53,38 USD', ''],
        ['Banque Lac Kivu — USD', '', '10 000,00 USD'],
        ['Total', '10 000,00 USD', '10 000,00 USD'],
      ],
    },
    result: "Une écriture équilibrée, appuyée par l'avis de la banque, qui isole l'écart réalisé de 53,38 USD au compte de pertes de change.",
    tip: "Si le taux obtenu dépasse le taux comptable, l'écart est un gain : enregistrez-le au compte de gains de change (776 en SYSCOHADA) et ne le compensez pas silencieusement avec des pertes. Vérifiez dans la convention le traitement des pertes et gains de change : ECHO autorise une ligne dédiée dans certains formats, la plupart des contrats USAID/BHA n'en prévoient pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 7 sur 7',
    title: 'Lire la synthèse cumulée et la rapprocher des seuils',
    intro: "Le chiffre de B4 répond à la question qu'un bailleur finit toujours par poser : « quel est l'impact cumulé du change sur ce projet à ce jour ? ». Avant de le donner, vérifiez ce qu'il couvre et ce qu'il ne couvre pas.",
    steps: [
      {
        title: 'Lire et situer le chiffre',
        actions: [
          "Lisez B4 : −969,23 USD sur les quatre transactions saisies du T1.",
          "Calculez l'effet moyen pondéré : 969,23 ÷ 14 200 USD saisis = 6,8 %.",
          "Comparez le cumul à la marge calculée en procédure 1 : 969,23 sur 13 800 USD de marge, soit 7,0 % consommés par ces seules transactions.",
        ],
      },
      {
        title: 'Préciser le périmètre et archiver',
        actions: [
          "Écrivez en commentaire de B4 que seules les transactions significatives sont saisies, avec le seuil retenu à l'étape 1.",
          "Enregistrez une copie datée : Suivi_taux_change_KAS_2026-03_clôture.xlsx, et envoyez-la à Grace M. avec l'écriture de l'étape 6.",
        ],
      },
    ],
    example: {
      title: 'Commentaire de clôture du 1er avril 2026',
      lines: [
        "Impact cumulé du change au 31/03/2026 sur les transactions significatives : −969,23 USD (4 transactions, 14 200 USD budgétés, effet moyen pondéré 6,8 %).",
        "Taux officiel de mars : 2 810 contre 2 600 budgété (+8,1 %), niveau d'alerte rouge atteint dès mars.",
        "Les dépenses locales non saisies ne sont pas comprises : l'effet total du trimestre est estimé à l'étape suivante (procédure 7).",
      ],
    },
    result: "Un chiffre cumulé lu, situé par rapport à la marge et aux seuils, avec son périmètre écrit et une copie datée archivée.",
    pitfall: "Annoncer au bailleur « la perte de change est de 969 USD » sans préciser qu'il ne s'agit que des transactions saisies. Le jour où le total réel est plus élevé, votre première annonce devient un problème de crédibilité.",
  },

  // ─────────────── PROCÉDURE 7 — Mesurer l'impact budgétaire et l'expliquer au bailleur ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 6',
    title: 'Mesurer le pourcentage de dépréciation et sa dynamique',
    intro: "Le bailleur pose toujours la même première question : « de combien le taux a-t-il bougé, et depuis quand ? ». Répondez avec un pourcentage calculé de la même façon que le template, accompagné de ses dates et de sa source.",
    steps: [
      {
        title: 'Calculer le pourcentage',
        actions: [
          "Reprenez les taux de l'onglet « Taux de change mensuel ».",
          "Variation depuis le taux budgété : (taux officiel du mois − taux budgété) ÷ taux budgété — c'est la colonne E.",
          "Variation d'un mois sur l'autre pour montrer la dynamique : (taux du mois − taux précédent) ÷ taux précédent.",
        ],
      },
      {
        title: 'Choisir la définition et la garder',
        actions: [
          "Dans la note, appelez « dépréciation » le pourcentage de hausse du taux CDF/USD par rapport au taux budgété, et écrivez cette définition une fois.",
          "N'utilisez jamais deux définitions dans le même document : au sens strict, la valeur du franc en USD baisse un peu moins (1 − 2 600 ÷ 2 810 = 7,5 %).",
        ],
      },
    ],
    example: {
      title: 'Dynamique du taux — budgets signés à 2 600',
      lines: [
        "Janvier : 2 650 (+1,9 % / budget) | Février : 2 720 (+4,6 %) | Mars : 2 810 (+8,1 %)",
        "Mois sur mois : +1,9 %, puis +2,6 %, puis +3,3 % — accélération constante sur le trimestre",
        "Phrase de synthèse : « Le taux est passé de 2 600 (budget) à 2 810 CDF pour 1 USD en mars 2026, soit +8,1 % en trois mois. »",
      ],
    },
    result: "Une variation en pourcentage, calculée selon la définition du template, accompagnée de ses dates et de sa dynamique mensuelle.",
    tip: "Écrivez toujours les deux taux et leurs dates à côté du pourcentage : « de 2 600 à 2 810 » se comprend en une seconde, « +8,1 % » seul pousse le lecteur à vous demander d'où il vient.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 6',
    title: "Chiffrer l'impact réalisé et projeter l'impact jusqu'à la fin du projet",
    intro: "Le bailleur ne veut pas seulement savoir ce qui s'est passé : il veut savoir ce que cela signifie pour la fin du projet. Chiffrez d'abord l'impact réalisé (la synthèse), puis une projection simple et prudente de l'impact restant.",
    steps: [
      {
        title: 'Estimer l\'impact réalisé sur tout le trimestre',
        actions: [
          "Dépenses locales du trimestre : 276 000 USD de budget local ÷ 12 × 3 mois = 69 000 USD.",
          "Écart moyen des trois mois : (1,92 % + 4,62 % + 8,08 %) ÷ 3 = 4,87 % → impact estimé : 69 000 × 4,87 % ≈ 3 360 USD.",
        ],
      },
      {
        title: 'Projeter le restant à taux constant',
        actions: [
          "Budget local restant : 276 000 − 69 000 = 207 000 USD sur 9 mois.",
          "Hypothèse 1 : le taux reste à 2 810 → 207 000 × 8,08 % ≈ 16 720 USD.",
          "Hypothèse 2 : le taux revient à 2 700 → 207 000 × 3,85 % ≈ 7 960 USD. Écrivez les deux : une projection avec une seule hypothèse n'en est pas une.",
        ],
      },
    ],
    table: {
      columns: ['Poste', 'Calcul', 'Impact (USD)'],
      rows: [
        ['Réalisé estimé au T1', '69 000 × 4,87 %', '≈ 3 360'],
        ['Restant, hypothèse « taux constant à 2 810 »', '207 000 × 8,08 %', '≈ 16 720'],
        ['Restant, hypothèse « retour à 2 700 »', '207 000 × 3,85 %', '≈ 7 960'],
        ['Total à terminaison — hypothèse haute', '3 360 + 16 720', '≈ 20 080 (4,8 % du budget)'],
        ['Total à terminaison — hypothèse basse', '3 360 + 7 960', '≈ 11 320 (2,7 % du budget)'],
      ],
    },
    result: "Un impact réalisé et deux projections jusqu'à la fin du projet, chacune avec son hypothèse de taux écrite et son poids sur le budget total.",
    pitfall: "Extrapoler la perte du mois le plus défavorable sur toute l'année comme si c'était un fait. Annoncez des hypothèses chiffrées, pas une prédiction du taux de change.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 6',
    title: 'Identifier les leviers et choisir les mesures à proposer',
    intro: "Une note qui annonce un problème sans proposer de mesure inquiète le bailleur. Avant d'écrire, listez les leviers dont vous disposez et choisissez ceux que vous allez proposer. Entrées : la convention, la note d'hypothèses de change, le BFU (module 02).",
    steps: [
      {
        title: 'Passer en revue les leviers',
        actions: [
          "Marge de change budgétée : existe-t-elle sur les lignes concernées ?",
          "Clause de la convention sur le taux de change et sur les pertes de change : une ligne dédiée est-elle prévue ?",
          "Virement de ligne dans le seuil de l'accord, ou avenant si le seuil est dépassé (module 02).",
          "Leviers opérationnels : conversion juste à temps, soldes en CDF réduits, regroupement d'achats, renégociation de contrats en équivalent USD.",
        ],
      },
      {
        title: 'Choisir et préparer',
        actions: [
          "Retenez une à trois mesures réalistes, chiffrées et datées.",
          "Demandez à Grace M. de valider les mesures avant de les écrire au bailleur : elles engagent l'organisation.",
        ],
      },
    ],
    example: {
      title: 'Leviers retenus pour le budget Nutrition au 1er avril 2026',
      lines: [
        "Marge de change budgétée : aucune (budget signé sans marge) → levier indisponible",
        "Clause de la convention : le taux officiel de la banque centrale s'applique ; pas de ligne dédiée → à confirmer par écrit avec le chargé de programme",
        "Mesure 1 : virement de ligne dans le seuil de l'accord, depuis une ligne sous-consommée (module 02), sans toucher aux activités",
        "Mesure 2 : plafond de solde en CDF et conversion mensuelle juste à temps (procédure 2, étape 6) ; mesure 3 : intégrer une marge de 5 % dans la phase 2027",
      ],
    },
    result: "Une à trois mesures chiffrées et validées en interne, que la note pourra présenter avec l'écart constaté.",
    tip: "Chaque mesure doit répondre à la question « qui, quoi, quand ». « Nous suivrons la situation » n'est pas une mesure ; « nous revoyons les lignes concernées au 30 avril avec le chargé de programme » en est une.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 6',
    title: 'Structurer la note : cinq blocs, une demi-page',
    intro: "Le point focal bailleur n'est pas forcément financier : la note doit se comprendre en une lecture. Elle cite explicitement trois choses : le taux comptable officiel appliqué chaque mois et sa source, le pourcentage de dépréciation sur la période, et le montant total de la perte de change calculée dans le template.",
    steps: [
      {
        title: 'Poser le plan',
        actions: [
          "Bloc 1 — Objet : en une phrase, quel écart vous expliquez et sur quelle ligne ou quel rapport.",
          "Bloc 2 — Les faits : taux officiel de chaque mois, source (Banque Centrale du Congo), pourcentage de dépréciation.",
          "Bloc 3 — L'impact : montant de la perte de change calculée, et ce qu'il représente sur le budget.",
          "Bloc 4 — Les mesures : une à trois, avec dates.",
          "Bloc 5 — La demande ou la suite : ce que vous attendez du bailleur, ou quand vous reviendrez vers lui.",
        ],
      },
      {
        title: 'Fixer les règles d\'écriture',
        actions: [
          "Une demi-page maximum, phrases courtes, un chiffre par phrase.",
          "Expliquez en quelques mots tout terme technique (« taux comptable officiel : le taux unique que nous fixons chaque mois à partir de celui de la banque centrale »).",
        ],
      },
    ],
    result: "Un plan en cinq blocs dont chacun répond à une question que se pose le bailleur, et des règles d'écriture claires.",
    pitfall: "Ouvrir par une page de théorie sur le change. Le bailleur veut d'abord savoir « combien » et « pourquoi » ; la pédagogie vient après, en une phrase.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 6',
    title: 'Rédiger la note en langage simple',
    intro: "Rédigez en partant des chiffres du template, pas de votre mémoire. Chaque chiffre de la note doit pouvoir être retrouvé dans une cellule précise. Fil rouge : note au chargé de programme de Fonds Horizon sur le budget Nutrition, le 3 avril 2026.",
    steps: [
      {
        title: 'Écrire le brouillon',
        actions: [
          "Reprenez les blocs de l'étape 4 dans l'ordre, un à deux phrases par bloc.",
          "Insérez les chiffres de l'étape 2 et les mesures de l'étape 3.",
        ],
      },
      {
        title: 'Faire le test du lecteur non financier',
        actions: [
          "Relisez en vous demandant si une personne qui ne fait pas de comptabilité comprendrait chaque phrase.",
          "Remplacez « écart de conversion réalisé » par « différence due au taux de change » et supprimez tout sigle non expliqué.",
        ],
      },
    ],
    example: {
      title: "Note d'explication — Nutrition / Fonds Horizon (extrait de 150 mots)",
      lines: [
        "Objet : effet du taux de change sur les dépenses locales du projet Nutrition, 1er trimestre 2026.",
        "Notre budget a été établi à 2 600 francs congolais pour 1 USD. Le taux officiel de la Banque Centrale du Congo, que nous retenons chaque mois, a été de 2 650 en janvier, 2 720 en février et 2 810 en mars : le taux a augmenté de 8,1 % depuis le budget.",
        "Les dépenses locales du projet (salaires, carburant, entretien) coûtent donc plus de francs congolais que prévu pour chaque dollar budgété. Les transactions suivies dans notre tableau représentent une perte de change de 969 USD sur le trimestre ; nous estimons l'effet total du trimestre à environ 3 360 USD.",
        "Si le taux reste à 2 810, l'effet jusqu'à la fin du projet serait d'environ 16 700 USD (hypothèse haute). Nous proposons une réaffectation entre lignes dans le seuil de l'accord et un point avec vous le 30 avril.",
      ],
    },
    result: "Une note d'une demi-page, en phrases courtes, qui cite les trois taux, leur source, le pourcentage de dépréciation et le montant de la perte, avec les mesures.",
    tip: "Gardez deux versions de chaque chiffre : la version précise dans votre tableur (969,23) et la version arrondie dans la note (969). Le bailleur n'a pas besoin des centimes, mais votre fichier doit les conserver.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 6',
    title: 'Relire, valider, envoyer et archiver',
    intro: "La note engage l'organisation : elle ne part pas sans validation et sans pièces. Elle part aussi à un moment utile : avant que le bailleur ne reçoive le rapport financier, pas après.",
    steps: [
      {
        title: 'Contrôler avant validation',
        actions: [
          "Rapprochez chaque chiffre de la note du template : taux (onglet « Taux de change mensuel »), perte (cellule B4 de « Synthèse cumulée »).",
          "Vérifiez que la source est citée (Banque Centrale du Congo) et que le pourcentage suit la définition de l'étape 1.",
          "Vérifiez que la note ne dépasse pas une demi-page.",
        ],
      },
      {
        title: 'Valider, envoyer et classer',
        actions: [
          "Faites valider par Grace M. ; elle signe ou envoie la note depuis sa boîte, vous en copie.",
          "Joignez l'extrait du template (onglets « Taux de change mensuel » et « Synthèse cumulée ») et la capture de la page de la banque centrale.",
          "Classez la note envoyée, ses pièces jointes et l'accusé de réception dans le dossier du bailleur, avec la date.",
        ],
      },
    ],
    example: {
      title: 'Contrôle d\'envoi — note Nutrition du 3 avril 2026',
      lines: [
        "Chiffres rapprochés : taux 2 650 / 2 720 / 2 810 ✔ — perte 969 USD = B4 (969,23) ✔ — +8,1 % = E7 ✔",
        "Source citée : Banque Centrale du Congo ✔ — longueur : 150 mots ✔ — validée par Grace M. le 03/04/2026 ✔",
        "Pièces jointes : extrait du template (2 onglets) et capture Taux_BCC_2026-03-02.pdf ✔",
      ],
    },
    result: "Note validée, envoyée avant le rapport financier, avec ses pièces jointes, archivée dans le dossier du bailleur avec la preuve d'envoi.",
    pitfall: "Envoyer la note après le rapport. Un bailleur qui découvre l'écart avant votre explication lit votre rapport avec méfiance ; informé en avance, il le lit comme un compte rendu.",
  },

  // ─────────────── 6. Cas complet résolu ───────────────
  {
    type: 'case-study',
    title: 'Cas complet résolu — Dépréciation du franc congolais, projet NFI Masisi (1/3)',
    scenario: "Mercredi 5 août 2026. En recevant le rapport financier du 1er trimestre du projet NFI Masisi (mai–juillet), Claire D. (fictive), point focal d'ECHO, remarque un écart sur la ligne « coûts opérationnels locaux » et demande une explication écrite avant validation. Le budget (68 800 USD) est établi à 2 800 CDF pour 1 USD ; 65 % des coûts, soit 44 720 USD, sont des charges locales payées en francs congolais. Le taux officiel a fortement monté. Voici la résolution, dans l'ordre, telle qu'un Finance Officer expérimenté la mène.",
    steps: [
      {
        title: 'Cadrer la demande et ouvrir un classeur dédié au projet',
        actions: [
          "Notez la demande, sa date et le délai de réponse (12 août) ; informez Grace M. le jour même.",
          "Ouvrez une copie du template : Suivi_taux_change_NFI_2026.xlsx (taux budgété propre au projet : 2 800).",
          "Délimitez la période : mai à juillet 2026, les trois mois du rapport.",
        ],
        result: "Un classeur dédié au projet NFI, avec un périmètre et un délai de réponse écrits.",
      },
      {
        title: "Relever et saisir les taux dans l'onglet « Taux de change mensuel »",
        actions: [
          "Relevez le taux indicatif de la Banque Centrale du Congo le 1er jour ouvré de chaque mois : 4 mai, 1er juin, 1er juillet.",
          "Croisez avec XE et notez le taux du marché observé auprès de la banque.",
          "Saisissez trois lignes (colonnes A à D) ; la formule de la colonne E calcule l'écart de taux.",
        ],
        result: "Taux de mai, juin et juillet saisis, avec écart de taux de 0,0 %, 4,0 % et 8,0 % par rapport au budget.",
      },
    ],
    table: {
      columns: ['Mois', 'Taux budgété', 'Taux officiel comptable', 'Taux marché observé', 'Écart taux (%)'],
      rows: [
        ['2026-05', '2 800', '2 800', '2 815', '0,0 %'],
        ['2026-06', '2 800', '2 912', '2 930', '4,0 %'],
        ['2026-07', '2 800', '3 024', '3 040', '8,0 %'],
      ],
    },
    example: {
      title: 'Contrôle de cohérence des taux',
      lines: [
        "Variation d'un mois sur l'autre : (2 912 − 2 800) ÷ 2 800 = +4,0 % ; (3 024 − 2 912) ÷ 2 912 = +3,8 %",
        "Écart marché / officiel : +0,5 % en mai, +0,6 % en juin, +0,5 % en juillet → aucune tension de marché parallèle",
        "Niveaux d'alerte : jaune dès juin (≥ 3 %), rouge en juillet (≥ 5 %)",
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Dépréciation du franc congolais, projet NFI Masisi (2/3)',
    scenario: "Les taux sont saisis. Vous passez aux transactions : vous isolez les charges locales significatives, calculez leur écart avec le taux budgété, puis enregistrez l'écart comptable d'une conversion réelle.",
    steps: [
      {
        title: "Saisir les transactions dans l'onglet « Impact par transaction »",
        actions: [
          "Retenez quatre charges locales fixées en USD et couvertes en CDF : loyer de la base de Masisi, paie nationale, carburant des distributions (juillet) et journaliers de manutention (juin).",
          "Saisissez les libellés en A, les montants budgétés en USD en B, branchez C sur le taux budgété et D sur le taux officiel du mois de chaque transaction (C7 pour juillet, C6 pour juin).",
          "Copiez les formules E et F sur les quatre lignes.",
        ],
        result: "Quatre lignes complètes, avec un taux appliqué conforme au mois de chaque transaction.",
      },
      {
        title: 'Lire la synthèse et enregistrer la conversion du mois',
        actions: [
          "Étendez la plage de B4 à F5:F10 et vérifiez : B4 = −328,00 USD.",
          "Conversion du 6 juillet : 4 000 USD vendus à 3 005 contre 3 024 de taux comptable → 12 020 000 CDF reçus, valorisés 12 020 000 ÷ 3 024 = 3 974,87 USD → perte réalisée de 25,13 USD.",
          "Passez l'écriture : débit banque CDF 3 974,87 USD, débit pertes de change 25,13 USD, crédit banque USD 4 000 USD.",
        ],
        result: "Perte budgétaire cumulée de 328,00 USD sur quatre transactions, et perte comptable de 25,13 USD isolée au compte de pertes de change.",
      },
    ],
    table: {
      columns: ['Transaction', 'Montant (USD)', 'Taux appliqué', 'Montant en CDF', 'Gain / (Perte) USD'],
      rows: [
        ['Loyer base de Masisi — juillet', '600', '3 024', '1 814 400', '−48,00'],
        ['Paie personnel national NFI — juillet', '2 100', '3 024', '6 350 400', '−168,00'],
        ['Carburant véhicule distributions — juillet', '900', '3 024', '2 721 600', '−72,00'],
        ['Journaliers manutention — juin', '1 000', '2 912', '2 912 000', '−40,00'],
        ['Total (taux budgété 2 800 pour toutes les lignes)', '4 600', '—', '13 798 400', '−328,00'],
      ],
    },
    example: {
      title: 'Contrôle à la main de la ligne « Loyer base de Masisi — juillet »',
      lines: [
        "E : 600 × 3 024 = 1 814 400 CDF ; au taux budgété : 600 × 2 800 = 1 680 000 CDF → 134 400 CDF de plus",
        "F : 134 400 ÷ 2 800 = 48,00 USD → affiché −48,00 ; formule (3 024 − 2 800) × 600 ÷ 2 800 × −1 = −48,00 ✔",
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Dépréciation du franc congolais, projet NFI Masisi (3/3)',
    scenario: "Les calculs sont faits. Il reste à mesurer l'impact sur le budget, à décider des mesures, à rédiger la note et à l'envoyer avant la date limite du 12 août.",
    steps: [
      {
        title: "Mesurer la dépréciation et projeter l'impact jusqu'à la fin du projet",
        actions: [
          "Dépréciation : (3 024 − 2 800) ÷ 2 800 = 8,0 % en deux mois (de mai à juillet).",
          "Budget local restant : 44 720 USD de charges locales, dont 3 mois écoulés (11 180 USD) : 33 540 USD restent sur 9 mois.",
          "Hypothèse haute (3 024 maintenu) : 33 540 × 8,0 % = 2 683,20 USD ; hypothèse basse (retour à 2 912) : 33 540 × 4,0 % = 1 341,60 USD.",
          "Avec les 328,00 USD déjà calculés : impact à terminaison compris entre 1 669,60 et 3 011,20 USD, soit 2,4 % à 4,4 % du budget de 68 800 USD.",
        ],
        result: "Un impact réalisé (328 USD), deux projections chiffrées et leur poids sur le budget total.",
      },
      {
        title: 'Décider les mesures et rédiger la note',
        actions: [
          "Relisez la clause de l'accord sur le taux de change et l'article 8.2 sur les virements de lignes (module 02) ; faites valider par Grace M. une réaffectation dans le seuil, avec notification préalable.",
          "Ramenez le plafond de solde en CDF à 4 500 USD et convertissez en début de mois (procédure 2, étape 6).",
          "Rédigez la note d'une demi-page en cinq blocs, avec les trois éléments exigés : taux et source, pourcentage, montant de la perte.",
        ],
        result: "Deux mesures validées et une note prête à relire, dont chaque chiffre renvoie à une cellule du template.",
      },
      {
        title: 'Faire valider et envoyer',
        actions: [
          "Rapprochez chaque chiffre : taux (onglet « Taux de change mensuel »), perte (B4 de « Synthèse cumulée »).",
          "Envoyez le 7 août, depuis la boîte de Grace M., avec l'extrait du template et la capture des taux BCC en pièces jointes.",
        ],
        result: "Note envoyée le 7 août, cinq jours avant l'échéance, avec ses pièces et la preuve d'envoi archivée.",
      },
    ],
    example: {
      title: "Livrable final — note d'explication au point focal d'ECHO (environ 190 mots)",
      lines: [
        "Objet : écart sur la ligne « coûts opérationnels locaux », rapport du 1er trimestre, projet NFI Masisi.",
        "Notre budget a été établi à 2 800 francs congolais (CDF) pour 1 USD. Le taux officiel de la Banque Centrale du Congo, que nous retenons chaque mois pour toutes nos conversions, est passé de 2 800 en mai à 2 912 en juin, puis à 3 024 en juillet 2026 : le taux a augmenté de 8,0 % en deux mois.",
        "Nos charges locales (loyer, salaires, carburant, journaliers) exigent donc plus de francs congolais que prévu pour chaque dollar budgété. La perte de change calculée sur les quatre transactions suivies est de 328 USD à fin juillet. Si le taux reste à 3 024, nous estimons l'effet jusqu'à la fin du projet à environ 3 000 USD, soit 4,4 % du budget.",
        "Nous proposons une réaffectation entre lignes dans le seuil de l'accord, avec notification préalable, et nous limitons nos soldes en francs congolais. Le tableau de suivi est joint ; nous restons disponibles pour un point cette semaine.",
      ],
    },
    result: "Livrable final du cas : template complété (3 onglets), écriture comptable de conversion, projection chiffrée avec deux hypothèses et note d'explication d'une demi-page qui cite taux, source, pourcentage de dépréciation et montant de la perte.",
  },

  // ─────────────── 7. Exercices ───────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Calculer la marge de change du budget Santé / Fondation Sigma',
    instructions: "Mars 2026. Grace M. vous demande de calculer la marge de prudence à proposer pour la prochaine version du budget Santé (260 000 USD, taux budgété 2 600, taux officiel de mars 2 810). Appliquez la procédure 1 aux lignes ci-dessous.",
    table: {
      columns: ['Ligne', 'Budget (USD)', '% payé en CDF'],
      rows: [
        ['S1 Ressources humaines', '112 000', '85 %'],
        ['S2 Médicaments & consommables', '70 000', '0 % (achats internationaux en USD)'],
        ['S3 Logistique & transport', '12 000', '80 %'],
        ['S4 Frais de structure', '14 400', '100 %'],
        ['S5 Formation des agents', '28 000', '90 %'],
        ['S6 Suivi-évaluation', '23 600', '50 %'],
      ],
    },
    steps: [
      {
        title: 'Construire la carte des devises',
        actions: [
          "Vérifiez que le total des lignes égale 260 000 USD.",
          "Calculez le montant exposé de chaque ligne et le total, puis la part exposée du budget.",
        ],
      },
      {
        title: 'Choisir et chiffrer la marge',
        actions: [
          "Rappelez la volatilité observée (+1,9 %, +4,6 %, +8,1 % cumulés depuis le budget) et choisissez 3, 4 ou 5 % en justifiant en deux lignes.",
          "Calculez la marge en USD pour chacun des trois pourcentages et son poids sur le budget total.",
        ],
      },
      {
        title: 'Rédiger la note d\'hypothèses',
        actions: [
          "Écrivez les quatre blocs de la note (taux, part exposée, marge, prochaine revue) et deux seuils d'alerte.",
        ],
      },
    ],
    tip: "La marge se calcule sur la part exposée, jamais sur le budget total : la ligne S2 achetée en USD ne bouge pas avec le franc.",
    deliverable: "La carte des devises du budget Santé avec les montants exposés, la marge calculée à 3, 4 et 5 % et la note d'hypothèses de change d'une page.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Compléter le suivi du projet NFI pour août 2026',
    instructions: "Nous sommes le 3 août 2026. Dans Suivi_taux_change_NFI_2026.xlsx (taux budgété 2 800), ajoutez le mois d'août et ses transactions, puis enregistrez une conversion. Taux BCC du 3 août : 3 050 CDF/USD ; taux du marché observé : 3 075.",
    steps: [
      {
        title: "Saisir la ligne d'août",
        actions: [
          "Ajoutez la ligne 2026-08 dans « Taux de change mensuel » et vérifiez l'écart de taux calculé en colonne E.",
          "Calculez l'écart entre taux marché et taux officiel et concluez sur la situation.",
        ],
      },
      {
        title: 'Saisir les quatre transactions d\'août',
        actions: [
          "Loyer base de Masisi : 600 USD ; paie personnel national NFI : 2 100 USD ; carburant véhicule distributions : 900 USD ; journaliers de manutention : 1 800 USD.",
          "Ajoutez les lignes dans « Impact par transaction », branchez C et D, puis vérifiez que B4 couvre toutes les lignes.",
          "Relevez la perte d'août et le cumul depuis mai (rappel : −328,00 USD à fin juillet).",
        ],
      },
      {
        title: 'Enregistrer une conversion',
        actions: [
          "Le 10 août, vous vendez 5 000 USD à 3 030 CDF/USD. Calculez le montant en CDF reçu, sa valeur au taux comptable d'août et l'écart.",
          "Rédigez l'écriture (débit banque CDF, débit pertes de change, crédit banque USD) et son libellé.",
        ],
      },
    ],
    deliverable: "L'onglet « Taux de change mensuel » complété pour août, les quatre lignes de « Impact par transaction », la valeur de B4, l'écriture de conversion avec son libellé et deux phrases de commentaire pour le Finance Manager.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Un ancien signataire toujours actif à la banque',
    instructions: "15 septembre 2026, revue trimestrielle du registre du compte principal de Goma (Banque Lac Kivu — USD ***3310). La liste des signataires fournie par la banque montre encore Désiré L., ancien Finance Manager parti de KAS le 15 décembre 2025. Son accès à la banque en ligne est actif. Le registre le montre « Actif », sans date de révocation.",
    steps: [
      {
        title: 'Qualifier le risque et agir le jour même',
        actions: [
          "Calculez la durée d'exposition et listez les actions à mener ce jour, dans l'ordre (écrire à la banque, suspendre l'accès en ligne, vérifier les mouvements).",
          "Dressez la liste des relevés et ordres à examiner depuis le 15 décembre 2025.",
        ],
      },
      {
        title: 'Rédiger la demande de révocation',
        actions: [
          "Écrivez la lettre à la banque (qui signe, quels comptes, date d'effet, confirmation écrite et datée exigée).",
        ],
      },
      {
        title: 'Mettre à jour le registre et prévenir la récidive',
        actions: [
          "Écrivez la ligne corrigée du registre une fois la confirmation reçue (en précisant quelle date vous saisissez et pourquoi).",
          "Proposez une mesure qui relie la revue du registre aux départs enregistrés par les ressources humaines.",
        ],
      },
    ],
    pitfall: "Corriger le registre avant d'avoir la confirmation de la banque : le registre afficherait « Révoqué » alors que la banque reconnaît encore la signature.",
    deliverable: "Le calcul de la durée d'exposition, la liste ordonnée des actions du jour, la lettre de révocation, la ligne corrigée du registre et la mesure préventive proposée.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Un e-mail de changement de coordonnées bancaires',
    instructions: "Le 20 juillet 2026, le solde de 14 700 USD de la commande de bâches (BC-2026-012) est dû à Savanna Supplies Ltd à la livraison. Vous recevez un e-mail de « finance@savanna-suppIies.example » (avec un i majuscule à la place du l) : « Nous avons changé de banque. Merci de payer le solde aujourd'hui sur ce nouveau compte, au nom de Horizon Trade FZE, dans un autre pays. Je suis en déplacement : ne m'appelez pas, répondez uniquement par e-mail. » L'adresse habituelle du fournisseur est « finance@savanna-supplies.example ».",
    steps: [
      {
        title: 'Analyser',
        actions: [
          "Relevez au moins quatre signaux d'alerte dans l'e-mail.",
          "Indiquez ce qui est autorisé et interdit avant tout paiement.",
        ],
      },
      {
        title: 'Appliquer la procédure 4',
        actions: [
          "Décrivez le contrôle de rappel : quel numéro appeler, quels éléments faire confirmer, qui vérifie.",
          "Indiquez combien d'approbations et de quelle catégorie exige ce montant.",
        ],
      },
      {
        title: 'Répondre et alerter',
        actions: [
          "Rédigez en 3 lignes la réponse au fournisseur (adresse habituelle) et un message d'alerte de 3 lignes à Grace M. et à l'équipe finance.",
        ],
      },
    ],
    deliverable: "La liste des signaux d'alerte, la fiche de contrôle du virement remplie (jusqu'à l'étape de vérification), la réponse au fournisseur et le message d'alerte interne.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercices 1 à 4)',
    items: [
      "Ex. 1 — Montants exposés : S1 95 200, S2 0, S3 9 600, S4 14 400, S5 25 200, S6 11 800 → total 156 200 USD, soit 60,1 % du budget de 260 000.",
      "Ex. 1 — Marge calculée sur la part exposée : 3 % = 4 686 USD, 4 % = 6 248 USD, 5 % = 7 810 USD ; le pourcentage retenu est justifié par la volatilité observée.",
      "Ex. 1 — La note d'hypothèses contient taux budgété, part exposée, marge, date de revue et deux seuils d'alerte.",
      "Ex. 2 — Écart de taux d'août = (3 050 − 2 800) ÷ 2 800 = 8,9 % ; écart marché / officiel = +0,8 % (situation normale).",
      "Ex. 2 — Pertes d'août : loyer −53,57 ; paie −187,50 ; carburant −80,36 ; journaliers −160,71 → total −482,14 USD ; cumul depuis mai : −810,14 USD (B4 couvre toutes les lignes).",
      "Ex. 2 — Conversion : 5 000 × 3 030 = 15 150 000 CDF ; valorisés 15 150 000 ÷ 3 050 = 4 967,21 USD ; perte réalisée 32,79 USD au compte de pertes de change, écriture équilibrée à 5 000 USD.",
      "Ex. 3 — Durée d'exposition : 9 mois (du 15/12/2025 au 15/09/2026) ; premières actions : écrire à la banque, suspendre l'accès en ligne, examiner relevés et ordres depuis le 15/12/2025.",
      "Ex. 3 — La lettre est signée par un signataire en poste et exige une confirmation écrite et datée ; la ligne du registre porte la date confirmée par la banque, le statut « Révoqué » et n'est pas supprimée.",
      "Ex. 3 — La mesure préventive relie la revue du registre aux départs enregistrés par les ressources humaines (alerte avant la date de départ).",
      "Ex. 4 — Signaux : adresse presque identique, urgence, nouveau compte au nom d'une autre société et dans un autre pays, interdiction d'appeler.",
      "Ex. 4 — Aucun paiement avant le rappel à un numéro connu du contrat ; montant > 5 000 USD : deux approbateurs de catégorie A après vérification ; réponse envoyée à l'adresse habituelle et alerte à l'équipe finance.",
    ],
  },

  // ─────────────── 8. Erreurs de terrain ───────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Ne pas poser de marge de change dans le budget initial. Parade : mesurer la part exposée dès le chiffrage, poser 3 à 5 % sur cette part et l'écrire dans la note d'hypothèses de change.",
      "Laisser une procuration bancaire active pour une personne partie depuis des mois. Parade : révoquer par écrit AVANT le départ, exiger la confirmation datée de la banque, brancher la revue du registre sur le calendrier RH.",
      "Convertir chaque transaction au taux du jour au lieu du taux comptable officiel du mois. Parade : un taux unique par mois, relevé le 1er jour ouvré, validé, protégé et diffusé aux équipes.",
      "Utiliser le taux du marché parallèle parce qu'il est plus avantageux. Parade : l'enregistrer en colonne D pour comparaison seulement, alerter au-delà de 5 % d'écart avec le taux officiel.",
      "Notifier la banque d'un départ par téléphone. Parade : lettre écrite, confirmation écrite et datée de la banque, classée avec le registre.",
      "Payer sur de nouvelles coordonnées sans les vérifier. Parade : rappel à un numéro connu, double approbation et fiche de contrôle signée.",
      "Taper en colonne B du calculateur un montant en CDF, ou brancher D sur le mauvais mois. Parade : B en USD, D = taux officiel du mois de la transaction, une ligne recalculée à la main.",
      "Oublier d'étendre la plage de la synthèse cumulée. Parade : B4 couvre F5:F10 ; contrôle manuel du total à chaque clôture.",
      "Garder des soldes importants en francs congolais. Parade : conversion mensuelle juste à temps, plafond de solde CDF et réserve de précaution en USD.",
      "Annoncer un chiffre de change sans son périmètre ni ses hypothèses. Parade : préciser les transactions couvertes et donner au moins deux hypothèses de taux pour toute projection.",
    ],
  },

  // ─────────────── 9. Récapitulatif + checklist ───────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez cartographié les devises d'un budget réel ligne par ligne, mesuré la part exposée au change (276 000 USD sur 420 000, soit 65,7 %) et posé une marge de prudence de 3 à 5 % avec sa note d'hypothèses et ses seuils d'alerte.",
      "Vous avez préparé l'ouverture de comptes USD et CDF : structure justifiée, dossier complet contrôlé pièce par pièce, rétroplanning KYC/AML, conditions écrites, virement test et règle de conversion.",
      "Vous avez mis en place le dispositif de signataires : matrice de signature, confirmation écrite de la banque, registre-signataires-procurations-bancaires.docx rempli, revue trimestrielle et révocation écrite avant départ.",
      "Vous avez sécurisé un virement international : dossier justifié, coordonnées vérifiées par un canal indépendant, double signature, preuve archivée, confirmation de réception.",
      "Vous avez tenu le suivi du taux comptable officiel mensuel (onglet « Taux de change mensuel ») avec écart de taux, niveaux d'alerte et diffusion aux équipes.",
      "Vous avez calculé le gain ou la perte de change de chaque transaction dans le calculateur, étendu la synthèse cumulée et passé l'écriture comptable de l'écart de conversion.",
      "Vous avez mesuré l'impact budgétaire d'une dépréciation de 8 %, projeté ses deux scénarios et rédigé la note d'une demi-page qui l'explique à un bailleur non financier.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais distinguer devise du bailleur, devise de référence terrain et devise locale de paiement sur un budget réel, et dire pour chaque ligne en quelle devise elle est dépensée.",
      "Je sais où trouver le taux officiel de mon pays d'opération, pourquoi il prime sur le taux du marché parallèle et pourquoi le taux comptable est unique pour le mois.",
      "Je sais expliquer pourquoi une marge de prudence de change se pose dès la construction du budget, et la calculer sur la part exposée.",
      "Je connais les pièces d'un dossier d'ouverture de compte en devise locale et j'ai planifié les délais KYC/AML avant le premier décaissement.",
      "Je sais appliquer la double signature et expliquer pourquoi un signataire unique est toujours un risque de contrôle interne.",
      "J'ai rempli un registre de signataires et je sais révoquer une procuration : lettre écrite, avant le départ, confirmation datée de la banque.",
      "Je vérifie les coordonnées d'un bénéficiaire par un canal indépendant avant tout virement et j'archive l'avis d'exécution avec le dossier.",
      "Je sais calculer et enregistrer un gain ou une perte de change avec le taux comptable officiel du mois, à l'aide du template, et distinguer l'écart budgétaire de l'écart comptable.",
      "Je sais rédiger une note claire, sans jargon inutile, expliquant un écart de change à un bailleur non financier, avec taux, source, pourcentage et montant.",
    ],
  },

  // ─────────────── 10. Clôture ───────────────
  {
    type: 'closing',
    nextModuleHint: "Prochain module : Module 05 — Rapports Financiers pour Bailleurs. Vous y transformerez les chiffres que vous venez de sécuriser — taux comptables mensuels, écarts de change documentés, comptes et signataires conformes — en rapports financiers conformes aux formats de chaque bailleur (USAID/BHA, UE/ECHO, bailleurs onusiens), avec les justificatifs que vos procédures de ce module ont préparés.",
  },
]
