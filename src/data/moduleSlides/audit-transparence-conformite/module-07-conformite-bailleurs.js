// Module 07 — Conformité Bailleurs — USAID/BHA, UE, ECHO & Bailleurs Onusiens
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (checklist-conformite-bailleurs-par-type.xlsx : onglets « Checklist » et
// « Tableau de bord » ; note-analyse-risque-non-conformite.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (revue de conformité bailleurs de la base de Goma, de l'ONG fictive
// « Horizon Santé Grands Lacs », suite du module 01), avec exemples remplis,
// résultat attendu, astuces et erreurs à éviter. Le cas des pièces de pompe
// ECHO à Rutshuru (03-exercices.md) sert d'exercice noté.
// Les organisations, bailleurs, accords, personnes et montants sont fictifs :
// les seuils et taux des exemples sont ceux d'accords imaginaires et doivent
// toujours être remplacés par ceux de VOTRE accord de financement.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Conformité Bailleurs — USAID/BHA, UE, ECHO & Bailleurs Onusiens',
    hook: "Un achat de 18 000 dollars coupé en deux bons de commande, un fournisseur jamais vérifié sur SAM.gov, un taux de coûts indirects appliqué sur la mauvaise base : aucun de ces manquements n'est une fraude, tous peuvent coûter le remboursement de la dépense. À la fin de ce module, vous saurez vérifier une dépense AVANT de l'engager, tenir la checklist de conformité par type de bailleur avec son tableau de bord, calculer les coûts indirects, suivre le calendrier de reporting et rédiger la note d'une page qui décide d'informer ou non le bailleur.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Identifier, avant toute commande, le bailleur et la ligne budgétaire d'une dépense, puis les règles qui en découlent, en produisant une fiche « bailleur — ligne — règles » validée par la finance pour chaque demande d'achat.",
      "Appliquer les seuils de mise en concurrence du 2 CFR 200 (USAID/BHA), du PRAG (UE/ECHO) et des accords PCA/FPA (agences onusiennes), et détecter un fractionnement, en produisant une grille de seuils par bailleur et une décision de procédure datée par dossier.",
      "Vérifier l'origine réelle des biens, la nationalité des fournisseurs et les listes d'exclusion (SAM.gov), en produisant un dossier de preuves horodatées avant paiement.",
      "Distinguer coût direct, coût direct partagé et coût indirect, puis calculer les coûts indirects (taux de minimis de 10 % des coûts directs modifiés, plafond ECHO) et une clé d'allocation, en produisant un calcul et une note de méthode d'une page.",
      "Renseigner la checklist checklist-conformite-bailleurs-par-type.xlsx ligne par ligne, avec preuve et date de vérification, et lire son tableau de bord, en produisant une checklist complétée et un plan d'action des lignes non conformes.",
      "Contrôler les restrictions et obligations de reporting d'un accord (approbation préalable, marquage et visibilité, échéances de rapports, Single Form), en produisant une demande d'approbation préalable et un calendrier de reporting rétro-planifié.",
      "Documenter un risque de non-conformité avec note-analyse-risque-non-conformite.docx et décider de la divulgation proactive au bailleur, en produisant une note d'une page, une décision justifiée et le projet de courrier au bailleur.",
    ],
  },

  // ───────────────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de droit : c'est la méthode complète pour qu'aucune dépense ne parte sans que la règle du bailleur ait été vérifiée, et pour savoir quoi faire le jour où une dépense est déjà partie hors règle. Chaque procédure se termine par une pièce du dossier de conformité, construite sur un seul cas fil rouge.",
      "Le cas fil rouge : vous êtes Amani K., auditeur(rice) interne de « Horizon Santé Grands Lacs » (HSGL), l'ONG de santé fictive que vous connaissez depuis le module 01. Le 7 septembre 2026, Hélène V., présidente du comité d'audit, vous confie une revue de conformité bailleurs de la base de Goma, qui gère désormais quatre financements dont un tout nouvel accord BHA. Trois échéances approchent : le rapport financier BHA (30 octobre), le rapport intermédiaire ECHO au format Single Form (15 novembre) et le renouvellement du PCA avec le PAM (1er janvier 2027).",
    ],
    bullets: [
      "Livrable 1 — La fiche « bailleur — ligne budgétaire — règles » de trois demandes d'achat en attente (procédure 1).",
      "Livrable 2 — La checklist de conformité préparée pour Goma : structure comprise, exemples remplacés, ligne ajoutée (procédure 2).",
      "Livrable 3 — La grille des seuils par bailleur et la décision de procédure de chaque dossier, avec test de fractionnement (procédure 3).",
      "Livrable 4 — Le dossier d'origine et de nationalité des biens (procédure 4).",
      "Livrable 5 — Les vérifications d'exclusion horodatées, SAM.gov et autres listes (procédure 5).",
      "Livrable 6 — Le calcul des coûts indirects BHA et ECHO, la clé d'allocation du véhicule partagé et la note de méthode (procédure 6).",
      "Livrable 7 — L'index des preuves et les colonnes « Preuve documentaire » et « Derniere verification » renseignées (procédure 7).",
      "Livrable 8 — La note de règle multi-bailleurs pour un achat partagé (procédure 8).",
      "Livrable 9 — La checklist complète, le tableau de bord lu et le plan d'action (procédure 9).",
      "Livrable 10 — Le calendrier de reporting rétro-planifié (procédure 10).",
      "Livrable 11 — La demande d'approbation préalable et le contrôle du marquage et de la visibilité (procédure 11).",
      "Livrable 12 — La note d'analyse de risque d'une page, la décision de divulgation et le courrier au bailleur (procédure 12).",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : HSGL, base de Goma, septembre 2026',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés, sauf l'exercice noté (cas des pièces de pompe à Rutshuru). L'organisation, les accords, les personnes et les montants sont fictifs, mais construits sur des configurations réelles de bases humanitaires de l'Est de la RDC.",
    table: {
      columns: ['Personne', 'Fonction', 'Rôle dans la revue'],
      rows: [
        ['Hélène V.', "Présidente du comité d'audit", 'Commanditaire, destinataire des escalades'],
        ['Joseph T.', 'Directeur Pays', 'Valide les décisions de divulgation avec le siège'],
        ['Dr Patrice N.', 'Coordinateur de la base de Goma', 'Signe les bons de commande de plus de 1 000 USD'],
        ['Ruth B.', 'Finance Manager de la base', 'Tient le budget par bailleur, prépare les rapports financiers'],
        ['Josué M.', 'Logistics Officer', "Émet les demandes d'achat — recruté par vous en 2023 (déclaré au module 01)"],
        ['Marcel O.', 'Responsable des subventions au siège', 'Interlocuteur officiel des bailleurs'],
        ['Fatou S.', 'Auditrice interne senior', 'Teste les dossiers touchant les seuils et relit vos conclusions'],
      ],
    },
    example: {
      title: 'Chiffres clés de la base en septembre 2026',
      lines: [
        "Quatre financements actifs : accord BHA « Nutrition d'urgence Nord-Kivu » (1 200 000 USD, 1er juillet 2026 – 31 décembre 2027) ; convention ECHO « Santé de base et chaîne du froid » (1er décembre 2025 – 31 mai 2027) ; PCA du PAM pour la prise en charge de la malnutrition modérée (année 2026, 310 000 USD) ; Fonds Meridian (vu au module 01, article 9 : mise en concurrence formelle dès 5 000 USD).",
        "Procédure achats interne de HSGL : achat direct sous 1 000 USD, RFQ (trois devis) de 1 000 à 10 000 USD, appel d'offres formel au-delà de 10 000 USD.",
        "Vous restez soumis(e) à la décision du comité d'audit du module 01 : Fatou S. teste tout ce qui touche aux seuils de mise en concurrence et conduit les entretiens de Josué M.",
        "La lettre de mission complémentaire du 7 septembre contient un objectif d'assurance (la conformité des dépenses de Goma aux règles de ses bailleurs) et un objectif de conseil (fournir à l'équipe achats la méthode de vérification avant dépense). Vous n'approuvez jamais une dépense : la décision reste à la ligne de gestion.",
      ],
    },
    pitfall: "Faire vous-même les vérifications avant dépense à la place de l'équipe achats, puis auditer ces mêmes dépenses : c'est une menace d'auto-révision. Dans ce module, vous montrez la méthode sur des dossiers en attente (mission de conseil) et vous testez ensuite les dépenses déjà réalisées (mission d'assurance).",
  },
  {
    type: 'comparison-table',
    title: 'Les règles de mise en concurrence du fil rouge, bailleur par bailleur',
    columns: ['Montant de la dépense (USD)', 'HSGL (procédure interne)', 'BHA (accord, annexe 4)', 'ECHO (convention, annexe 5)', 'PAM (PCA, annexe achats)', 'Fonds Meridian (art. 9)'],
    rows: [
      ['Moins de 1 000', 'Achat direct', 'Micro-achat : 1 cotation, prix raisonnable justifié', 'Une offre avec justification du prix', 'Un devis', 'Procédure interne'],
      ['1 000 à 4 999', 'RFQ : 3 devis', 'Micro-achat', 'Une offre avec justification du prix', 'Un devis', 'Procédure interne'],
      ['5 000 à 9 999', 'RFQ : 3 devis', 'Micro-achat', '3 devis (procédure négociée)', '3 devis', 'Mise en concurrence formelle'],
      ['10 000 à 29 999', "Appel d'offres formel", 'Acquisition simplifiée : 3 cotations écrites', '3 devis', '3 devis', 'Mise en concurrence formelle'],
      ['30 000 à 60 000', "Appel d'offres formel", '3 cotations écrites', '3 devis', "Appel d'offres formel", 'Mise en concurrence formelle'],
      ['60 001 à 250 000', "Appel d'offres formel", '3 cotations écrites', "Appel d'offres", "Appel d'offres formel", 'Mise en concurrence formelle'],
      ['Plus de 250 000', "Appel d'offres formel", "Appel d'offres formel (sealed bids ou competitive proposals)", "Appel d'offres", "Appel d'offres formel", 'Mise en concurrence formelle'],
    ],
  },
  {
    type: 'concept',
    title: 'Les dépenses du fil rouge : ce que chaque dossier va vous apprendre',
    body: "Six situations, tirées de la base de Goma, serviront de fil conducteur à toutes les procédures. Les trois premières sont des demandes d'achat en attente (vous appliquez la méthode AVANT l'engagement) ; les trois suivantes sont des dépenses déjà passées (vous testez APRÈS).",
    table: {
      columns: ['Référence', 'Bailleur(s)', 'Objet et montant', 'Ce que la revue doit trancher'],
      rows: [
        ['DA-031', 'BHA', "Véhicule 4x4 de supervision nutrition, 38 500 USD", "Procédure, approbation préalable du bailleur, exclusion du fournisseur"],
        ['DA-052', 'ECHO', "2 réfrigérateurs solaires pour la chaîne du froid, 11 200 USD", "Mauvaise ligne budgétaire, origine réelle des biens, procédure"],
        ['DA-060', 'BHA 50 % · ECHO 30 % · Meridian 20 %', "6 ordinateurs portables partagés, 7 200 USD", "Quelle règle appliquer à un achat financé par trois bailleurs"],
        ['BC-044 et BC-045', 'BHA', "Kits de pesée et de mesure, 8 900 + 9 100 USD, à 6 jours d'écart", "Fractionnement, vérification d'exclusion tardive : cas résolu du module"],
        ['Rapports du trimestre', 'BHA, ECHO', "Coûts indirects imputés aux rapports", "Taux de minimis sur la bonne base, plafond ECHO"],
        ['Véhicule HSGL-GOM-07', 'BHA, ECHO, Meridian', "Coûts mensuels de 2 840 USD d'un véhicule utilisé par trois projets", "Clé de répartition documentée"],
      ],
    },
    tip: "Ce découpage reflète la règle de ce module : une dépense se vérifie avant l'engagement, parce que c'est le seul moment où une correction ne coûte rien. Les trois dernières lignes montrent ce qu'il reste à faire quand ce moment est passé.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: "Chaque bailleur a SES règles, écrites dans SON accord",
    body: [
      "Un auditeur qui connaît la théorie par cœur mais ne sait pas dire, un vendredi après-midi, si un achat de 3 000 dollars peut partir sans appel d'offres échoue autant que celui qui connaît la routine mais ignore qu'il vient de franchir un seuil contractuel. La bonne réponse à la question des 3 000 dollars est toujours la même : « Pour quel bailleur ? »",
      "Quatre niveaux de règles se superposent. Le niveau public (2 CFR 200 pour les fonds américains, PRAG pour les fonds européens), l'accord de financement et ses annexes (seuils, listes de pays, plafonds, échéanciers), la politique interne de l'ONG, et les instructions écrites de la finance ou de la conformité. L'accord de financement est le niveau qui tranche : c'est lui qui précise, par exemple, quel seuil s'applique réellement à vous.",
    ],
    example: {
      title: 'La même dépense de 3 000 USD, quatre réponses (fil rouge)',
      lines: [
        "Financée par le BHA : micro-achat possible avec une seule cotation et un prix raisonnable justifié, mais vérification SAM.gov obligatoire quel que soit le montant.",
        "Financée par ECHO : une offre avec justification du prix suffit au regard de l'annexe 5 de la convention (seuil de 3 devis au-delà de 5 000 USD).",
        "Financée par le PAM : un devis suffit au regard de l'annexe achats du PCA (3 devis à partir de 5 000 USD).",
        "Dans les trois cas, la procédure interne de HSGL exige une RFQ (3 devis dès 1 000 USD) : c'est la règle la plus restrictive qui s'applique.",
      ],
    },
    highlight: "Le réflexe professionnel : avant de répondre « oui, ça peut partir », posez trois questions dans cet ordre — quel bailleur, quelle ligne budgétaire, quelle clause de l'accord.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois familles de bailleurs en un coup d\'œil',
    columns: ['Question', 'USAID / BHA', 'UE / ECHO', 'Agences onusiennes (PAM, UNICEF, HCR…)'],
    rows: [
      ['Texte de référence', "2 CFR 200 (Uniform Guidance), chapitres ADS d'USAID, accord de financement", "PRAG et ses annexes, convention de subvention, règles ECHO complémentaires", "Accord de partenariat (PCA, FPA) et ses annexes — pas de règlement public équivalent"],
      ['Mise en concurrence', "200.320 : micro-achat, acquisition simplifiée, appel d'offres formel", "Grille de seuils du PRAG rappelée dans la convention", "Seuils fixés dans l'annexe achats de l'accord"],
      ['Origine et nationalité', "Règles « source and nationality » (ADS 310)", "Liste de pays éligibles de l'instrument de financement", "Clause de l'accord, à lire ligne par ligne"],
      ['Exclusions', 'Vérification SAM.gov avant tout engagement (200.213)', "Déclarations d'honneur et contrôles d'exclusion prévus au contrat", 'Vetting / due diligence anti-terrorisme de l\'accord'],
      ['Coûts indirects', 'Taux NICRA négocié, ou taux de minimis de 10 % des coûts directs modifiés', "Pourcentage plafonné par contrat, souvent autour de 7 % des coûts directs éligibles", "Taux ou plafond précisé dans le budget annexé à l'accord"],
      ['Rapportage', "Rapports financiers et de performance selon l'échéancier de l'accord", 'Rapports intermédiaire et final au format Single Form', "Format financier propre à l'agence, périodicité de l'accord"],
    ],
  },
  {
    type: 'concept',
    title: 'La règle de superposition : la règle la plus restrictive gagne',
    body: [
      "Quand plusieurs niveaux de règles couvrent la même dépense, la méthode sûre est d'appliquer, DIMENSION PAR DIMENSION (seuil, origine, exclusion, approbation préalable, marquage), la règle la plus exigeante. Le bailleur n'a pas à connaître votre procédure interne, mais votre procédure interne ne vous dispense jamais d'une règle bailleur plus stricte — et inversement.",
      "Cette décision ne se prend jamais à l'appréciation du moment de la personne qui passe la commande : elle se fixe en amont, par écrit, par la finance ou la conformité (procédure 8).",
    ],
    table: {
      columns: ['Dimension', 'Règle HSGL', 'Règle bailleur', 'Règle qui s\'applique'],
      rows: [
        ['Mise en concurrence pour 4 800 USD financés par le BHA', 'RFQ : 3 devis', 'Micro-achat : 1 cotation', 'RFQ : 3 devis (HSGL plus stricte)'],
        ['Mise en concurrence pour 14 000 USD financés par le BHA', "Appel d'offres formel", '3 cotations écrites', "Appel d'offres formel (HSGL plus stricte)"],
        ['Mise en concurrence pour 6 300 USD financés par Meridian', 'RFQ : 3 devis', 'Mise en concurrence formelle dès 5 000 USD', 'Mise en concurrence formelle (bailleur plus strict)'],
        ['Vérification SAM.gov pour 800 USD financés par le BHA', "Non prévue par la procédure interne", 'Obligatoire quel que soit le montant', 'Vérification obligatoire (bailleur)'],
      ],
    },
    pitfall: "Appliquer la règle d'un seul niveau « parce que c'est la plus connue ». Les écarts les plus fréquents en audit bailleur naissent d'un accord plus strict que la procédure interne, ou d'une procédure interne plus stricte que l'accord que personne n'a lu jusqu'au bout.",
  },
  {
    type: 'concept',
    title: '2 CFR 200 (USAID/BHA) : les cinq points qui reviennent en audit',
    body: "Le 2 CFR 200 (Uniform Guidance) est le règlement fédéral américain qui encadre l'usage des fonds fédéraux, ONG comprises. Son objectif : une concurrence loyale, une traçabilité complète des décisions d'achat, un usage responsable de l'argent du contribuable américain. Pour chaque point, vous savez quoi regarder et quelle preuve demander.",
    table: {
      columns: ['Point', 'Article', 'Ce que vous vérifiez', 'Preuve à archiver'],
      rows: [
        ['Seuils de mise en concurrence', '200.320', "Le nombre de cotations ou le type de procédure correspond au montant, selon les seuils en vigueur dans l'accord", "Grille de cotation, PV du comité d'achats"],
        ['Listes d\'exclusion', '200.213', 'Le fournisseur et le sous-traitant ne figurent pas sur SAM.gov avant tout engagement', "Capture d'écran horodatée de SAM.gov"],
        ['Conflit d\'intérêt', '200.318', "La personne qui sélectionne n'a aucun lien personnel ou financier avec le fournisseur", "Déclaration de conflit d'intérêt signée au dossier"],
        ['Origine et nationalité', 'ADS 310', "L'origine réelle des biens et la nationalité du fournisseur respectent les règles « source and nationality » de l'accord", "Certificat d'origine du fabricant, facture pro forma"],
        ['Éligibilité des coûts', '200.403', 'Le coût est raisonnable, imputable au projet (allocable), cohérent avec le traitement des autres dépenses, conforme aux limitations de l\'accord', "Méthode d'allocation écrite, budget approuvé"],
      ],
    },
    tip: "Ces articles sont des repères, pas un texte à réciter. Citez l'article dans vos notes (par exemple « 200.213 ») parce que la référence précise donne du poids à votre analyse, mais décidez toujours à partir de l'accord de financement, qui peut préciser ou durcir la règle.",
  },
  {
    type: 'concept',
    title: 'Les trois niveaux de mise en concurrence et l\'interdiction de fractionner',
    body: [
      "Le 2 CFR 200.320 distingue trois niveaux. Sous le seuil de micro-achat, un achat direct est acceptable : une cotation suffit si le prix est jugé raisonnable. Au-dessus, l'acquisition simplifiée exige plusieurs cotations écrites. Au-delà d'un seuil plus élevé, une procédure formelle (sealed bids ou competitive proposals) est obligatoire. Les seuils évoluent et sont souvent précisés dans l'accord : ne travaillez jamais de mémoire.",
      "Le PRAG suit la même logique avec sa propre grille (négociation directe pour les très petits montants, procédure négociée avec plusieurs devis pour les montants intermédiaires, appel d'offres au-delà), et les agences onusiennes fixent la leur dans l'annexe achats de l'accord. Dans tous les cas, le montant à comparer au seuil est celui du BESOIN, pas celui du bon de commande.",
    ],
    table: {
      columns: ['Signal de fractionnement', 'Pourquoi c\'est suspect'],
      rows: [
        ['Même fournisseur, même type d\'objet, commandes à moins de 30 jours', 'Un besoin unique a été découpé en plusieurs commandes'],
        ['Chaque montant juste sous un seuil (8 900 et 9 100 pour un seuil à 10 000)', 'Le découpage évite le palier supérieur'],
        ['Une seule demande d\'achat, plusieurs bons de commande', 'Le besoin initial dépassait le seuil'],
        ['Commandes émises par la même personne à quelques jours d\'écart', 'Le découpage est organisé, pas accidentel'],
      ],
    },
    pitfall: "Penser que le fractionnement est une fraude qui suppose une intention. Dans la plupart des cas rencontrés sur le terrain, il vient de l'urgence ou d'une mauvaise lecture du seuil. L'effet sur la dépense est pourtant le même : une procédure insuffisante pour le besoin réel.",
  },
  {
    type: 'concept',
    title: 'USAID/BHA : au-delà du 2 CFR 200, quatre contrôles que l\'audit bailleur reprend',
    body: "Le 2 CFR 200 ne dit pas tout. Les chapitres ADS d'USAID (Automated Directives System) précisent des règles que les audits bailleurs reprennent systématiquement, et l'accord de financement les complète. Consultez le chapitre exact plutôt qu'une note de synthèse interne potentiellement obsolète.",
    bullets: [
      "Origine et nationalité (ADS 310) : l'accord fixe un code géographique (par exemple 937 ou 935) qui délimite les pays d'origine admis pour les biens et les fournisseurs. Un bien d'un pays hors périmètre rend la dépense inéligible, même acheté à un fournisseur local.",
      "Marquage et visibilité (ADS 320) : le matériel et les sites de distribution portent les marquages prévus par le plan de marquage de l'accord. Le contrôle se prouve par des photos datées.",
      "Approbation préalable (200.439 et clause de l'accord) : l'achat d'un véhicule ou d'un équipement lourd se valide par écrit auprès de l'agreement officer, le représentant du bailleur qui gère l'accord, AVANT la commande.",
      "Divulgation obligatoire (200.113) : l'organisation doit informer rapidement et par écrit le bailleur des violations connues touchant les fonds de l'accord (fraude, corruption et autres cas précisés par le règlement et l'accord).",
    ],
    tip: "Les structures des bailleurs évoluent (le BHA est né de la fusion d'OFDA et de Food for Peace, et d'autres réorganisations ont suivi) : seule la clause de VOTRE accord en vigueur fait foi, pas l'intitulé du bureau qui l'a signé. En cas de changement d'interlocuteur ou de tutelle, demandez par écrit qui est désormais l'agreement officer.",
  },
  {
    type: 'concept',
    title: 'PRAG et ECHO : les cinq points opérationnels',
    body: "Le PRAG (Practical Guide to Contract procedures for EU external actions) régit les marchés de travaux, fournitures et services financés par le budget de l'Union européenne et une part des règles de mise en œuvre des subventions. ECHO, la direction humanitaire de l'UE, ajoute ses propres règles (visibilité, Single Form). La logique est celle du 2 CFR 200, adaptée au contexte contractuel européen.",
    table: {
      columns: ['Point', 'Ce que vous vérifiez', 'Preuve à archiver'],
      rows: [
        ['Grille de seuils par montant', "Négociation directe pour les très petits montants, procédure négociée avec plusieurs devis pour les montants intermédiaires, appel d'offres au-delà ; seuils en annexe du PRAG et rappelés dans la convention", 'Grille de cotation, avis de marché'],
        ['Nationalité et origine', "Les soumissionnaires et les biens respectent la liste de pays éligibles de l'instrument ; vérifiée AVANT de contractualiser", "Déclaration d'origine, facture pro forma"],
        ['Dossier d\'appel d\'offres', "Les annexes standardisées (grille d'évaluation, formulaires de déclaration) sont utilisées telles quelles : un dossier « fait maison » est un point de friction quasi systématique", "Dossier AO complet sur modèle PRAG"],
        ['Visibilité ECHO', "La charte de visibilité (logos, mentions obligatoires) s'applique au matériel et à la communication, en plus des règles de fond", 'Photos et supports de communication'],
        ['Single Form', 'Le rapport intermédiaire et/ou final suit le format unique, aux échéances contractuelles strictes', 'Accusé de réception de dépôt'],
      ],
    },
    tip: "Le PRAG est mis à jour régulièrement et ses seuils sont exprimés en euros : travaillez avec la version et les montants cités dans VOTRE convention, jamais avec une table recopiée d'une mission précédente.",
  },
  {
    type: 'concept',
    title: 'Bailleurs onusiens : une logique contractuelle, pas réglementaire',
    body: "À la différence d'USAID et de l'UE, les agences des Nations Unies (PAM, UNICEF, HCR, OMS…) n'ont pas d'équivalent public au 2 CFR 200 ou au PRAG qui s'imposerait uniformément. Les exigences de conformité d'un partenaire ONG sont fixées dans l'accord de partenariat lui-même — PCA (Partnership Cooperation Agreement) pour le PAM, FPA (Framework Partnership Agreement) pour beaucoup d'autres agences — avec ses annexes sur les seuils d'achat, le format de rapportage financier et les clauses de vérification anti-terrorisme.",
    table: {
      columns: ['Clause à relire', 'Question à se poser', 'Exemple PCA du PAM (fictif)'],
      rows: [
        ['Démarrage', "L'accord est-il signé et à jour AVANT le début des activités ?", 'PCA 2026 signé le 20 janvier 2026 ; renouvellement au 1er janvier 2027'],
        ['Annexe achats', 'Quels seuils, quelles procédures, quelles listes de fournisseurs ?', '3 devis dès 5 000 USD ; appel d\'offres formel dès 30 000 USD'],
        ['Reporting financier', "Quel format, quelle périodicité, quel gabarit ?", 'Gabarit de l\'annexe 6, trimestriel, 15 jours après la fin du trimestre'],
        ['Vetting anti-terrorisme', 'Qui est vérifié (partenaire, personnel, bénéficiaires), quand, comment ?', "Formulaire de vetting complété à la signature et à chaque renouvellement"],
        ['Droits d\'audit', "L'agence peut-elle auditer ? Les équipes de la finance connaissent-elles la clause ?", "Droit de vérification sur pièces et sur site ; note interne de diffusion"],
      ],
    },
    highlight: "Le réflexe professionnel ici n'est pas de chercher un règlement externe, mais de relire l'accord de partenariat ligne par ligne avant chaque nouveau cycle : une clause modifiée d'une année sur l'autre passe facilement inaperçue.",
    tip: "Plusieurs agences onusiennes appliquent en outre un cadre harmonisé de transferts d'espèces (HACT) avec des formulaires, des contrôles ponctuels (spot checks) et des audits d'assurance. Si votre accord le cite, ses règles s'ajoutent à la clause « achats » et au gabarit de rapport.",
  },
  {
    type: 'comparison-table',
    title: 'Coût direct, coût direct partagé, coût indirect : la distinction qui fait mal en audit',
    columns: ['Critère', 'Coût direct', 'Coût direct partagé', 'Coût indirect / administratif'],
    rows: [
      ['Définition', 'Imputable spécifiquement et exclusivement à un projet', "Utilisé par plusieurs projets, mais mesurable (kilomètres, heures, mètres carrés)", "Partagé entre plusieurs projets ou avec le fonctionnement de la mission, non mesurable projet par projet"],
      ['Exemples terrain', "Salaire d'un chargé de projet dédié à 100 %, carburant du véhicule affecté au projet, intrants distribués aux bénéficiaires", "Véhicule HSGL-GOM-07 utilisé par trois projets, comptable à 40 % sur un projet", "Loyer du bureau de coordination pays, salaire du Directeur Pays, service informatique partagé, audit externe annuel"],
      ['Traitement USAID', 'Imputé à la ligne budgétaire du projet', 'Réparti selon une clé écrite et cohérente', "Taux NICRA négocié avec USAID, ou taux de minimis de 10 % des coûts directs modifiés (MTDC)"],
      ['Traitement UE / ECHO', 'Imputé à la ligne budgétaire du projet', 'Réparti selon une clé écrite et cohérente', 'Plafonné par contrat à un pourcentage fixe des coûts directs éligibles (souvent autour de 7 %, à vérifier dans CHAQUE contrat)'],
    ],
  },
  {
    type: 'concept',
    title: 'Comment se calculent les coûts indirects : NICRA, minimis, plafond',
    body: [
      "Taux NICRA (Negotiated Indirect Cost Rate Agreement) : taux négocié et approuvé formellement avec USAID. Il s'applique à la base précisée dans l'accord de taux, que vous devez lire. Taux de minimis : à défaut de NICRA, un taux forfaitaire de 10 % des coûts directs modifiés (MTDC), utilisable sans négociation préalable. Les MTDC sont les coûts directs dont on retire les rubriques exclues par le règlement : typiquement équipements, immobilisations, locations et la part des sous-accords au-delà d'un plafond. La liste exacte figure dans la définition des MTDC du règlement et dans l'accord.",
      "Pour l'UE et ECHO, les coûts indirects sont en général plafonnés par contrat à un pourcentage fixe des coûts directs ÉLIGIBLES (souvent autour de 7 %). Le plafond est un maximum, jamais un droit : un taux de 8 % appliqué à la place de 7 % crée un excédent inéligible de 1 point sur toute la base.",
    ],
    example: {
      title: 'Les trois formules à connaître',
      lines: [
        "Indirects BHA (minimis) = 10 % × (coûts directs − équipements − locations − autres rubriques exclues).",
        "Indirects ECHO (plafond) = taux plafond × coûts directs éligibles (par exemple 7 % × 318 000 USD = 22 260 USD).",
        "Excédent à retirer = indirects imputés − indirects autorisés.",
      ],
    },
    tip: "Le taux de minimis de 10 % est celui du texte source de ce module. La révision 2024 de l'Uniform Guidance l'a relevé à 15 % pour les accords conclus à partir du 1er octobre 2024 : lisez la clause de votre accord pour savoir quel taux vous est opposable, et ne mélangez jamais deux taux dans un même rapport.",
  },
  {
    type: 'concept',
    title: 'La règle d\'or sur les coûts partagés',
    body: [
      "Classer un coût partagé comme « direct » pour maximiser ce qu'on peut facturer à un projet — même par simple erreur de méthode — est l'un des redressements les plus fréquents d'un audit financier bailleur. À l'inverse, un taux d'imputation des coûts indirects appliqué sans accord NICRA ou sans base contractuelle documentée est tout aussi risqué.",
      "Dans les deux cas, la règle d'or est la même : la méthode d'allocation doit être écrite, cohérente d'un mois sur l'autre et applicable de la même façon à tous les bailleurs qui financent la structure partagée concernée. Une clé de répartition ne se choisit jamais parce que le budget d'un projet a, ce mois-là, plus de marge qu'un autre.",
    ],
    table: {
      columns: ['Coût partagé', 'Clé de répartition défendable', 'Preuve que la clé est réelle'],
      rows: [
        ['Véhicule utilisé par plusieurs projets', 'Kilomètres parcourus par projet sur le mois', 'Carnet de bord signé par le chauffeur et le responsable logistique'],
        ['Salaire d\'un agent partagé entre deux projets', 'Heures déclarées par projet', 'Feuilles de temps signées'],
        ['Loyer d\'un bureau de terrain', 'Surface occupée ou effectif par projet', 'Plan de répartition des postes, liste d\'effectifs'],
        ['Loyer du bureau de coordination pays, direction, audit externe', 'Pas de clé : coût indirect, couvert par le taux NICRA, de minimis ou plafonné', 'Accord de taux ou clause de l\'accord'],
      ],
    },
    pitfall: "Changer de clé d'un mois sur l'autre sans l'écrire. Même si chaque clé est défendable seule, une clé qui varie avec les marges budgétaires ressemble, aux yeux du bailleur, à une imputation « au feeling ».",
  },
  {
    type: 'comparison-table',
    title: 'Les obligations de reporting : ce que chaque bailleur attend et quand',
    columns: ['Bailleur', 'Rapports attendus', 'Rythme', 'Conséquence d\'un retard ou d\'un rapport erroné'],
    rows: [
      ['USAID / BHA', "Rapports financiers (formulaire fédéral SF-425 ou format prévu à l'accord) et rapports de performance", "Selon l'échéancier de l'accord, souvent trimestriel", "Retenue ou retard des fonds suivants, signalement dans le dossier de l'organisation, inéligibilité des coûts mal justifiés"],
      ['UE / ECHO', "Rapport intermédiaire et/ou final au format Single Form, avec états financiers", "Échéances fixées dans la convention", "Paiement du solde retenu ou réduit, coûts non justifiés écartés"],
      ['Agences onusiennes', "Rapport financier selon le gabarit de l'agence (par exemple FACE pour certaines agences), rapports d'activité", "Périodicité du PCA ou du FPA, souvent trimestrielle", "Décaissement suivant suspendu, non-renouvellement de l'accord"],
    ],
  },
  {
    type: 'concept',
    title: "Les conséquences d'une non-conformité : une échelle, pas un avertissement",
    body: "Un manquement n'entraîne pas qu'un « avertissement ». Il peut grimper une échelle dont chaque barreau coûte plus cher que le précédent, et dont le rythme dépend en grande partie de la manière dont l'organisation réagit une fois le manquement découvert.",
    table: {
      columns: ['Niveau', 'Ce qui se passe', 'Exemple (fil rouge)'],
      rows: [
        ['1. Observation', "L'auditeur ou le bailleur note l'écart et demande une explication", "Un bon de commande sans trois cotations est relevé en revue mensuelle"],
        ['2. Coût contesté', "Le coût est questionné par le bailleur, qui demande des justificatifs", "Les 18 000 USD des BC-044 et BC-045 sont questionnés"],
        ['3. Inéligibilité', "Le coût est jugé inéligible : il ne peut plus être imputé au projet", "Les 18 000 USD sont retirés du rapport financier"],
        ['4. Remboursement', "L'organisation doit restituer au bailleur les fonds déjà reçus au titre de ce coût", "HSGL rembourse 18 000 USD sur ses fonds propres"],
        ['5. Mesures sur le financement', "Retenue de paiements, suspension ou résiliation de l'accord, conditions renforcées pour les futurs accords", "Le BHA suspend les décaissements du trimestre suivant"],
        ['6. Exclusion', "Cas graves (fraude, fausses déclarations) : inscription sur une liste d'exclusion", "Non applicable à un fractionnement sans intention"],
      ],
    },
    highlight: "Plus la correction est précoce, plus on reste en bas de l'échelle. Une dépense corrigée avant d'être imputée au bailleur reste une affaire interne ; une dépense imputée puis découverte devient une affaire de remboursement.",
  },
  {
    type: 'concept',
    title: 'Divulgation proactive : obligation, intérêt, prudence',
    body: [
      "Informer le bailleur avant qu'il ne découvre lui-même le point est tantôt une obligation (l'accord ou le règlement impose de signaler certaines violations : divulgation obligatoire de l'article 200.113 pour USAID, obligations d'information des conventions européennes et des accords onusiens), tantôt un choix stratégique. Dans les deux cas, la décision se prend par écrit, sur une analyse documentée.",
      "Quatre éléments penchent vers le « oui ». Une obligation contractuelle ou réglementaire d'informer. Un soupçon de fraude, de corruption ou de lien avec une partie exclue. Un coût déjà imputé ou sur le point de l'être dans un rapport. Un risque élevé de détection (vérification, audit ou rapport proche). Le « non » ne se justifie que si le coût n'a jamais été imputé au bailleur, que l'écart est isolé, corrigé, et qu'aucune obligation d'informer ne s'applique.",
    ],
    example: {
      title: 'Ce qu\'une divulgation proactive bien préparée contient',
      lines: [
        "Les faits, sans interprétation : quoi, combien, quand, par qui découvert.",
        "La règle concernée, avec l'article de l'accord.",
        "Ce que l'organisation a déjà fait : retrait du coût du rapport, financement sur fonds propres, contrôle renforcé.",
        "Ce qu'elle propose au bailleur : ratification, remboursement, revue d'un échantillon plus large.",
        "Un interlocuteur désigné et une date de retour d'information.",
      ],
    },
    pitfall: "Attendre « de voir si la question est soulevée ». Un bailleur qui découvre seul un manquement que l'organisation connaissait déjà ne traite plus une erreur de méthode : il évalue un défaut d'intégrité.",
  },
  {
    type: 'stat-callout',
    stat: '0 USD',
    caption: 'Ce que coûte une correction faite AVANT que la dépense soit engagée',
    context: "La conformité bailleur ne se vérifie pas efficacement après coup, en préparation d'un audit. Elle se vérifie au moment où la dépense est engagée : c'est le seul moment où une correction ne coûte rien. Une checklist consultée une fois par an, juste avant la mission d'audit, ne protège de rien : les dépenses non conformes se sont déjà accumulées pendant douze mois.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé à maîtriser dès ce module',
    terms: [
      { term: '2 CFR 200 (Uniform Guidance)', definition: "Règlement fédéral américain encadrant l'usage des fonds fédéraux, y compris ceux d'USAID/BHA." },
      { term: 'BHA', definition: "Bureau for Humanitarian Assistance, né de la fusion d'OFDA et de Food for Peace, principal bailleur humanitaire américain." },
      { term: 'Agreement officer', definition: "Représentant du bailleur américain habilité à approuver, modifier ou résilier un accord, et à donner les approbations préalables." },
      { term: 'SAM.gov', definition: "Registre officiel américain des entités exclues ou suspendues des marchés fédéraux, à vérifier avant tout engagement fournisseur USAID." },
      { term: 'Micro-achat / acquisition simplifiée', definition: "Deux paliers de mise en concurrence du 2 CFR 200.320 : achat direct sous le seuil de micro-achat, plusieurs cotations écrites au-dessus, appel d'offres formel au-delà d'un seuil plus élevé." },
      { term: 'Fractionnement', definition: "Découpage d'un besoin unique en plusieurs commandes qui passent chacune sous un seuil de mise en concurrence." },
      { term: 'NICRA', definition: "Negotiated Indirect Cost Rate Agreement — taux de coûts indirects négocié et validé formellement avec USAID." },
      { term: 'De minimis / MTDC', definition: "Taux forfaitaire de 10 % (selon le texte source) des coûts directs modifiés (MTDC : coûts directs moins les rubriques exclues), utilisable sans négociation NICRA." },
      { term: 'ADS 310 / ADS 320', definition: "Chapitres de l'Automated Directives System d'USAID : règles d'origine et de nationalité des biens (310), marquage et visibilité (320)." },
      { term: 'PRAG', definition: "Practical Guide — guide pratique des procédures contractuelles pour les actions extérieures financées par l'UE." },
      { term: 'ECHO / Single Form', definition: "Direction humanitaire de l'UE ; format de rapport unique exigé pour le suivi intermédiaire et final de ses projets." },
      { term: 'PCA / FPA', definition: "Partnership Cooperation Agreement / Framework Partnership Agreement — accords de partenariat qui fixent, agence par agence, les règles applicables à un partenaire ONG onusien." },
      { term: 'Certificat d\'origine', definition: "Document du fabricant ou d'un organisme habilité qui atteste le pays où le bien a été fabriqué, distinct de l'enregistrement du fournisseur." },
      { term: 'Coût contesté / inéligible', definition: "Coût que le bailleur questionne, puis refuse d'imputer au projet : il doit alors être retiré ou remboursé." },
      { term: 'Divulgation proactive', definition: "Information écrite donnée au bailleur par l'organisation, avant qu'il ne détecte lui-même un manquement." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les huit étapes du guide pratique en un tableau',
    columns: ['Étape', 'Question posée', 'Pièce à archiver', 'Procédure du module'],
    rows: [
      ['1', 'Quel bailleur et quelle ligne budgétaire financent cette dépense ?', 'Fiche « bailleur — ligne — règles »', 'Procédure 1'],
      ['2', 'Quelle section de la checklist dois-je ouvrir ?', 'Checklist préparée', 'Procédure 2'],
      ['3', 'Quel seuil de mise en concurrence s\'applique au montant ?', 'Grille de cotation, décision de procédure', 'Procédure 3'],
      ['4', 'Quelle est l\'origine réelle des biens et la nationalité du fournisseur ?', "Certificat d'origine", 'Procédure 4'],
      ['5', 'Le fournisseur figure-t-il sur une liste d\'exclusion ?', 'Capture horodatée', 'Procédure 5'],
      ['6', 'Le coût est-il direct, partagé ou indirect, et comment l\'imputer ?', 'Calcul et note de méthode', 'Procédure 6'],
      ['7', 'Chaque case cochée est-elle adossée à une preuve consultable ?', 'Index des preuves, dossier d\'achat', 'Procédure 7'],
      ['8', 'Que faire quand plusieurs bailleurs financent le même coût ?', 'Note de règle multi-bailleurs', 'Procédure 8'],
      ['+', 'Où en est la conformité d\'ensemble et quelles échéances approchent ?', 'Checklist complète, calendrier de reporting, approbations préalables', 'Procédures 9 à 11'],
      ['+', 'Que faire quand un point n\'est pas respecté malgré tout ?', 'Note d\'analyse de risque, courrier au bailleur', 'Procédure 12'],
    ],
  },

  // ───────────────────────── 5. LE CŒUR : les procédures ─────────────────────────

  // ── Procédure 1 — Identifier le bailleur et la ligne budgétaire (étape 1 du guide) ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 3',
    title: "Retrouver la demande d'achat et lire sa codification",
    intro: "Pourquoi : toute la conformité découle du bailleur qui paie, et le bailleur se lit d'abord dans la codification de la demande d'achat (DA). Quand : dès que la DA arrive, avant tout contact avec un fournisseur. Entrées : les DA en attente de Goma, l'accès à l'outil d'achats et au grand livre analytique.",
    steps: [
      {
        title: 'Ouvrez chaque DA et relevez cinq champs sans les interpréter',
        actions: [
          "1. Notez la référence de la DA et sa date d'émission.",
          "2. Notez le code projet / bailleur porté par la DA (par exemple BHA-NU-3.2).",
          "3. Notez la ligne budgétaire et son intitulé exact.",
          "4. Notez le montant estimé et la devise.",
          "5. Notez le demandeur et le valideur.",
        ],
      },
      {
        title: 'Distinguez le besoin de la commande',
        body: "La DA décrit un BESOIN. C'est le montant total du besoin, et non celui d'un bon de commande, qui servira de base pour les seuils (procédure 3). Si le besoin sera livré en plusieurs fois, notez le total prévu.",
      },
      {
        title: 'Listez les DA en attente dans un tableau de suivi',
        body: "Un tableau de cinq colonnes (référence, code porté, objet, montant, demandeur) suffit ; il vous servira de point de départ pour les fiches de l'étape 3.",
      },
    ],
    table: {
      columns: ['Réf.', 'Code porté sur la DA', 'Objet', 'Montant (USD)', 'Demandeur'],
      rows: [
        ['DA-031', 'BHA-NU-3.2', 'Véhicule 4x4 de supervision nutrition', '38 500', 'Josué M.'],
        ['DA-052', 'BHA-NU-3.4', '2 réfrigérateurs solaires', '11 200', 'Josué M.'],
        ['DA-060', 'BHA-NU 50 % / ECHO-SB 30 % / MER-GOM 20 %', '6 ordinateurs portables', '7 200', 'Esther K.'],
      ],
    },
    result: "Un tableau de suivi des trois DA en attente, avec les cinq champs recopiés tels qu'ils figurent sur le document.",
    pitfall: "Lire le code projet « de mémoire » parce que vous connaissez la base. Une DA mal codée est précisément ce que l'étape 2 doit détecter : relevez ce qui est écrit, pas ce que vous pensez qui devrait y être.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 3',
    title: "Rapprocher la codification du budget approuvé de l'accord",
    intro: "Pourquoi : une dépense rattachée à la mauvaise source de financement entraîne automatiquement l'application des mauvaises règles, et personne ne s'en aperçoit avant le rapport financier. Entrées : le tableau de suivi de l'étape 1, le budget approuvé annexé à chaque accord.",
    steps: [
      {
        title: "Ouvrez l'annexe budgétaire de l'accord concerné",
        actions: [
          "1. Demandez à Ruth B. la dernière version APPROUVÉE du budget (pas un projet de travail).",
          "2. Repérez la ligne qui correspond à l'objet décrit sur la DA.",
          "3. Notez le numéro de ligne, son intitulé, le montant budgété et le solde disponible.",
        ],
      },
      {
        title: "Comparez l'objet de la DA à l'intitulé de la ligne",
        body: "Posez trois questions : l'objet figure-t-il dans cette ligne ? Le montant tient-il dans le solde ? La date de la dépense est-elle dans la période d'éligibilité de l'accord ?",
      },
      {
        title: "Si le code porté ne correspond pas, renvoyez la DA au demandeur par écrit",
        actions: [
          "Ne corrigez pas vous-même la codification : vous ne prenez aucune décision de gestion.",
          "Écrivez au demandeur, copie à Ruth B., en citant la ligne attendue.",
          "La DA reste bloquée jusqu'à la correction ; refaites ensuite le rapprochement.",
        ],
      },
    ],
    example: {
      title: 'Rapprochement de la DA-052 (réfrigérateurs solaires)',
      lines: [
        "Code porté sur la DA : BHA-NU-3.4 « Équipements de nutrition ». Objet : deux réfrigérateurs solaires pour conserver les vaccins du programme de santé de base.",
        "Ligne attendue : convention ECHO, budget approuvé, ligne B.4 « Équipements de chaîne du froid », 11 500 USD budgétés, solde 11 500 USD.",
        "Conséquence si on laissait le code BHA : on appliquerait la grille BHA (micro-achat jusqu'à 10 000 USD) et le plan de marquage BHA à un achat qui relève des règles d'origine et de visibilité d'ECHO.",
        "Courriel du 9 septembre à Josué M. : « La DA-052 porte le code BHA-NU-3.4, mais les réfrigérateurs relèvent de la ligne B.4 de la convention ECHO. Merci de corriger le code et de me renvoyer la DA. »",
      ],
    },
    result: "Chaque DA est rattachée à une ligne d'un budget approuvé ; les incohérences sont renvoyées par écrit et tracées.",
    tip: "Gardez un exemplaire du budget approuvé sur votre poste avec sa date de version : en audit bailleur, la ligne budgétaire citée doit être celle de la version approuvée en vigueur au moment de la dépense.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 3',
    title: "Remplir la fiche « bailleur — ligne — règles » et la faire valider",
    intro: "Pourquoi : la fiche fixe, avant l'achat, les règles que l'équipe achats devra appliquer, au lieu de les laisser à l'appréciation de chacun. Entrées : la DA rapprochée du budget, l'accord de financement et ses annexes. Support de travail interne, hors template : une page par DA.",
    steps: [
      {
        title: 'Créez la fiche avec neuf rubriques',
        actions: [
          "1. Bailleur et numéro d'accord.",
          "2. Ligne budgétaire et montant budgété.",
          "3. Période d'éligibilité.",
          "4. Seuil de mise en concurrence applicable (annexe, article).",
          "5. Règle d'origine et de nationalité.",
          "6. Vérification d'exclusion requise ?",
          "7. Approbation préalable requise ?",
          "8. Méthode pour les coûts indirects ou partagés.",
          "9. Règles internes HSGL applicables.",
        ],
      },
      {
        title: "Renseignez chaque rubrique avec la référence de l'accord",
        body: "Écrivez l'article, l'annexe ou la clause : « voir l'accord » ne suffit pas. Si une rubrique n'est pas traitée par l'accord, écrivez « non précisé — demande de clarification envoyée le … ».",
      },
      {
        title: "Faites valider la fiche avant qu'elle parte aux achats",
        body: "Ruth B. valide la fiche des dossiers mono-bailleur ; Marcel O. valide celle des dossiers multi-bailleurs. Archivez-la dans le dossier d'achat.",
      },
    ],
    example: {
      title: 'Fiche de la DA-031 (extrait)',
      lines: [
        "1. BHA — accord « Nutrition d'urgence Nord-Kivu » n° HSGL-NU-2026.",
        "2. Ligne 3.2 « Véhicules et équipements », 38 500 USD budgétés.",
        "3. Du 1er juillet 2026 au 31 décembre 2027.",
        "4. Annexe 4 : 3 cotations écrites de 10 000 à 250 000 USD. Règle HSGL plus stricte : appel d'offres formel au-delà de 10 000 USD.",
        "5. Code géographique de l'accord à confirmer avant l'appel d'offres (ADS 310).",
        "6. Oui : vérification SAM.gov avant tout engagement, quel que soit le montant.",
        "7. Oui : approbation écrite préalable de l'agreement officer pour tout véhicule.",
        "8. Non concerné (coût direct imputé à la ligne 3.2).",
        "9. Appel d'offres formel (procédure achats v2), comité d'achats.",
      ],
    },
    result: "Une fiche signée par la finance pour chacune des trois DA, archivée dans son dossier d'achat avant tout contact fournisseur.",
    pitfall: "Recopier la fiche d'un projet voisin. Un seuil, une règle d'origine ou un taux de coûts indirects qui s'applique à un bailleur ne s'applique pas automatiquement à un autre, même sur un projet voisin dans la même base.",
  },

  // ── Procédure 2 — Ouvrir et préparer la checklist (étape 2 du guide) ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 3',
    title: 'Ouvrir le classeur, enregistrer une copie de travail et repérer les deux onglets',
    intro: "Pourquoi : la checklist est le template central du module. Elle se consulte AVANT tout achat ou dépense significative, pas seulement en préparation d'un audit. Entrée : checklist-conformite-bailleurs-par-type.xlsx.",
    steps: [
      {
        title: 'Enregistrez une copie de travail avant toute saisie',
        actions: [
          "1. Ouvrez checklist-conformite-bailleurs-par-type.xlsx.",
          "2. Fichier > Enregistrer sous : 2026-09-08_Checklist_conformite_Goma.xlsx.",
          "3. Conservez l'original intact pour vos futures missions.",
        ],
      },
      {
        title: "Repérez la structure de l'onglet « Checklist »",
        actions: [
          "Ligne 1 : titre « CHECKLIST DE CONFORMITE BAILLEURS PAR TYPE » ; ligne 2 : sous-titre du module.",
          "Ligne 4 : les sept en-têtes (colonnes A à G).",
          "Lignes 5 à 20 : les seize points de contrôle, en trois blocs.",
          "Ligne 22 : la note d'usage, qui rappelle de consulter la checklist AVANT tout achat.",
        ],
      },
      {
        title: "Repérez la structure de l'onglet « Tableau de bord »",
        body: "Il se calcule tout seul à partir de la checklist : lignes 5 à 7 (un bailleur par ligne), ligne 8 « TOTAL GENERAL », note en ligne 10. Ne saisissez rien dans cet onglet.",
      },
    ],
    table: {
      columns: ['Lignes de l\'onglet « Checklist »', 'Bloc (colonne A)', 'Nombre de points'],
      rows: [
        ['5 à 10', '1. USAID / BHA (2 CFR 200)', '6'],
        ['11 à 15', '2. Union Europeenne / ECHO (PRAG)', '5'],
        ['16 à 20', '3. Bailleurs onusiens (PCA/FPA)', '5'],
      ],
    },
    result: "Une copie de travail nommée et datée, et une carte mentale claire : deux onglets, sept colonnes, seize lignes réparties en trois blocs.",
    tip: "Le fichier est écrit sans accents (« Categorie », « Union Europeenne »). Ne « corrigez » jamais ces libellés : le tableau de bord compare le texte de la colonne A caractère par caractère.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 3',
    title: 'Comprendre les sept colonnes et les quatre statuts',
    intro: "Pourquoi : une checklist mal renseignée donne un tableau de bord faux, et un tableau de bord faux rassure à tort. Entrée : la ligne 4 de l'onglet « Checklist » et la liste déroulante de la colonne D.",
    steps: [
      {
        title: 'Lisez ce que chaque colonne attend de vous',
        actions: [
          "A « Categorie / bailleur » et B « Point de conformite a verifier » : déjà remplies, vous ne les retapez pas.",
          "C « Reference reglementaire » : l'article ou l'annexe, déjà indiqués ; complétez-les avec l'article de VOTRE accord.",
          "D « Statut » : choix dans la liste déroulante.",
          "E « Preuve documentaire » : le type de pièce attendu est écrit ; ajoutez la référence exacte.",
          "F « Derniere verification » : la date de VOTRE vérification, au format jj/mm/aaaa.",
          "G « Commentaire » : le fait qui justifie le statut.",
        ],
      },
      {
        title: 'Choisissez le statut selon une règle simple',
        actions: [
          "Conforme : le point est vérifié ET la preuve est archivée.",
          "A verifier : le contrôle n'est pas terminé, ou la preuve est incomplète.",
          "Non conforme : une règle bailleur n'est pas respectée.",
          "Non applicable : le point ne concerne aucune dépense de la période (précisez-le en colonne G).",
        ],
      },
      {
        title: 'Notez ce que la mise en forme et les formules en font',
        body: "La liste déroulante couvre D5:D30, la mise en forme conditionnelle colore D5:D20. Dans le tableau de bord, « A verifier » compte comme point APPLICABLE mais PAS comme point conforme : il fait baisser le pourcentage sans déclencher l'alerte rouge.",
      },
    ],
    table: {
      columns: ['Statut (tel que dans la liste)', 'Compte dans « Points applicables »', 'Compte dans « Points conformes »', 'Déclenche l\'alerte rouge'],
      rows: [
        ['Conforme', 'Oui', 'Oui', 'Non'],
        ['A verifier', 'Oui', 'Non', 'Non'],
        ['Non conforme', 'Oui', 'Non', 'Oui, au niveau du bailleur et du total'],
        ['Non applicable', 'Non', 'Non', 'Non'],
      ],
    },
    result: "Vous savez dire, pour chaque statut, ce qu'il signifie et quel effet il aura sur le tableau de bord.",
    pitfall: "Écrire « Conforme » en attendant d'avoir la preuve. Un point de conformité « vérifié » sans preuve archivée n'a aucune valeur face à un auditeur externe : tant que la pièce n'est pas dans le dossier, le statut est « A verifier ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 3',
    title: "Adapter la checklist à Goma : effacer les exemples, ajouter une ligne propre à un projet",
    intro: "Pourquoi : le fichier est livré avec des statuts, des dates et des commentaires d'exemple. Les garder reviendrait à présenter comme réels des contrôles que vous n'avez pas faits. Entrée : votre copie de travail.",
    steps: [
      {
        title: 'Effacez les exemples des colonnes D, F et G, et gardez les colonnes A, B, C et E',
        actions: [
          "1. Sélectionnez D5:D20, puis la touche Suppr (le contenu s'efface, la liste déroulante reste).",
          "2. Faites de même pour F5:G20.",
          "3. Gardez la colonne E : elle indique le type de preuve attendu pour chaque point.",
          "4. Ouvrez l'onglet « Tableau de bord » : avec des statuts vides, chaque ligne affiche 0 % conforme et « En cours » (une ligne vide compte comme point applicable).",
        ],
      },
      {
        title: 'Ajoutez la ligne spécifique au projet ECHO : les coûts indirects',
        actions: [
          "1. Dans l'onglet « Checklist », faites un clic droit sur le numéro de la ligne 16, puis « Insérer ». Une ligne vide apparaît entre le bloc ECHO et le bloc onusien, donc À L'INTÉRIEUR de la plage des formules.",
          "2. Colonne A : recopiez exactement 2. Union Europeenne / ECHO (PRAG) (copiez la cellule A15).",
          "3. Colonne B : Couts indirects limites au taux plafond du contrat (7 % des couts directs eligibles).",
          "4. Colonne C : Convention ECHO - budget approuve et clause couts indirects.",
          "5. Colonne E : Calcul des couts indirects et budget approuve.",
        ],
      },
      {
        title: 'Vérifiez que le tableau de bord a bien intégré la nouvelle ligne',
        body: "Cliquez sur la cellule B6 de « Tableau de bord » : la formule doit désormais citer Checklist!$A$5:$A$21 et non plus $A$20. Si ce n'est pas le cas, la ligne a été ajoutée hors de la plage.",
      },
    ],
    example: {
      title: 'Ce que vous devez voir après l\'adaptation',
      lines: [
        "Onglet « Checklist » : 17 lignes de contrôle, de la ligne 5 à la ligne 21 ; colonnes D, F et G vides sur les 17 lignes.",
        "Ligne 16 (nouvelle) : « 2. Union Europeenne / ECHO (PRAG) | Couts indirects limites au taux plafond du contrat (7 % des couts directs eligibles) | Convention ECHO - budget approuve et clause couts indirects | | Calcul des couts indirects et budget approuve ».",
        "Onglet « Tableau de bord » : B6 = COUNTIFS(Checklist!$A$5:$A$21, A6, Checklist!$D$5:$D$21, \"<>Non applicable\").",
      ],
    },
    result: "Une checklist de 17 lignes, vierge de tout statut d'exemple, dont le tableau de bord couvre bien toutes les lignes.",
    pitfall: "Ajouter la ligne sous la ligne 20 ou après la note de la ligne 22 : les formules du tableau de bord s'arrêtent à la ligne 20, et la ligne ajoutée est ignorée sans message d'erreur. De même, ne retapez jamais le texte de la colonne A : une faute ou un accent de trop fait disparaître la ligne du décompte.",
    tip: "Le Fonds Meridian n'a pas de bloc dans la checklist. Pour le suivre, ajoutez des lignes dans un cinquième bloc ET étendez les formules du tableau de bord à une nouvelle ligne du bailleur, ou tenez un fichier séparé. Dans ce module, Meridian n'intervient que comme contrainte supplémentaire sur un achat partagé (procédure 8).",
  },

  // ── Procédure 3 — Seuils de mise en concurrence (étape 3 du guide) ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: "Constituer la grille des seuils de chaque bailleur à partir des textes",
    intro: "Pourquoi : chaque bailleur a sa propre grille, et le montant détermine la procédure obligatoire. On ne travaille jamais de mémoire. Quand : une fois par accord, puis à chaque avenant. Entrées : l'annexe achats de chaque accord, le 2 CFR 200.320 pour le BHA, la procédure achats interne.",
    steps: [
      {
        title: "Ouvrez, pour chaque financement, le texte qui fixe les seuils",
        actions: [
          "1. BHA : l'annexe 4 de l'accord, en vous appuyant sur le 2 CFR 200.320.",
          "2. ECHO : l'annexe 5 de la convention (grille du PRAG rappelée dans le contrat).",
          "3. PAM : l'annexe achats du PCA.",
          "4. Fonds Meridian : l'article 9 de la convention.",
          "5. HSGL : la procédure achats v2 et la grille des seuils de délégation.",
        ],
      },
      {
        title: 'Recopiez les bornes exactes et les conditions, avec la version du texte',
        actions: [
          "Pour chaque palier : borne basse, borne haute, procédure exigée, nombre d'offres.",
          "Notez si le montant est hors taxes ou toutes taxes comprises, la devise et la règle de conversion.",
          "Notez la date ou le numéro de version du texte consulté.",
        ],
      },
      {
        title: 'Faites confirmer la grille par la finance ou la conformité',
        body: "Marcel O. confirme par écrit que la grille correspond aux textes en vigueur. Datez-la et conservez-la au dossier ; refaites-la à chaque avenant ou nouvel accord.",
      },
    ],
    example: {
      title: 'Extrait de la grille consolidée pour Goma (septembre 2026)',
      lines: [
        "BHA — annexe 4 (version du 1er juillet 2026) : jusqu'à 10 000 USD, micro-achat, une cotation et prix raisonnable justifié ; de 10 000 à 250 000 USD, au moins trois cotations écrites ; au-delà, appel d'offres formel.",
        "ECHO — annexe 5 : jusqu'à 5 000 USD, une offre avec justification du prix ; de 5 000 à 60 000 USD, procédure négociée avec trois devis ; au-delà, appel d'offres. Seuils exprimés en euros dans le PRAG, convertis en USD au taux fixé par la convention.",
        "PAM — annexe achats du PCA 2026 : trois devis dès 5 000 USD ; appel d'offres formel dès 30 000 USD.",
        "Meridian — article 9 : mise en concurrence formelle dès 5 000 USD.",
        "HSGL — procédure v2 : achat direct sous 1 000 USD ; RFQ de 1 000 à 10 000 USD ; appel d'offres formel au-delà.",
      ],
    },
    result: "Une grille de seuils consolidée, signée de la finance, qui cite pour chaque ligne le texte et la version d'où elle vient.",
    pitfall: "Reprendre la grille d'un autre bailleur ou d'une mission précédente. Les seuils évoluent et sont parfois précisés dans l'accord lui-même ; la grille que vous avez en tête est probablement celle d'un autre contrat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Mesurer le besoin réel et tester le fractionnement',
    intro: "Pourquoi : le montant à comparer au seuil est celui du besoin complet, pas celui d'un bon de commande isolé. Un besoin découpé passe sous le radar de la grille. Entrées : la DA, l'extraction des bons de commande de l'outil d'achats.",
    steps: [
      {
        title: 'Calculez le montant du besoin',
        actions: [
          "1. Reprenez le montant total de la DA, tous lots et options compris.",
          "2. Ajoutez les frais indissociables (transport, installation, mise en service).",
          "3. Utilisez la même base (hors taxes ou toutes taxes comprises) que dans la grille.",
        ],
      },
      {
        title: 'Posez les quatre questions anti-fractionnement',
        actions: [
          "Q1. Y a-t-il d'autres commandes au même fournisseur, ou pour le même type d'objet, sur les 30 derniers jours ?",
          "Q2. Le besoin a-t-il été exprimé sur une seule DA, puis commandé en plusieurs fois ?",
          "Q3. Chaque montant est-il à moins de 15 % sous un seuil ?",
          "Q4. Les commandes ont-elles les mêmes demandeur et valideur ?",
        ],
      },
      {
        title: 'Filtrez les commandes dans Excel pour répondre à Q1',
        body: "Exportez les bons de commande de la période, mettez-les sous forme de tableau, filtrez sur le fournisseur, triez par date et calculez l'écart en jours entre deux commandes consécutives : =[@Date]-[@[Date précédente]].",
      },
    ],
    example: {
      title: 'Test appliqué aux BC-044 et BC-045 (Kivu Équipements SARL)',
      lines: [
        "Q1 : OUI — BC-044 du 14/08/2026 (8 900 USD) et BC-045 du 20/08/2026 (9 100 USD), à 6 jours d'écart, même fournisseur, même type d'objet.",
        "Q2 : OUI — une seule DA, DA-2026-077 du 10/08/2026, pour « kits de pesée et de mesure pour 36 centres de nutrition », 18 000 USD.",
        "Q3 : OUI — 8 900 est à 11 % sous 10 000, 9 100 à 9 % sous 10 000.",
        "Q4 : OUI — demandeur Josué M., valideur Dr Patrice N. pour les deux.",
        "Conclusion : le besoin réel est de 18 000 USD, il relève du palier supérieur (10 000 à 29 999 USD).",
      ],
    },
    result: "Pour chaque dossier, un montant de besoin et le résultat des quatre questions, consigné par écrit.",
    tip: "Quatre « oui » ne prouvent pas une intention : ils prouvent que le besoin a été commandé en deux fois. Le rapport doit décrire les faits, pas l'intention. L'intention, s'il y en a une, relève d'une enquête, pas d'une revue de conformité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: "Déterminer la procédure exigée, bailleur par bailleur, puis retenir la plus restrictive",
    intro: "Pourquoi : un achat financé par un bailleur est soumis à la fois à sa règle et à la procédure interne de l'ONG ; la plus exigeante s'applique. Entrées : la grille de l'étape 1, le montant du besoin de l'étape 2, la fiche de la procédure 1.",
    steps: [
      {
        title: 'Placez le montant du besoin dans la grille de chaque règle applicable',
        body: "Une colonne par règle applicable (HSGL, bailleur ou bailleurs de la fiche). Ne comparez pas un montant à une règle qui ne finance pas la dépense.",
      },
      {
        title: 'Notez la procédure exigée par chaque règle',
        body: "Écrivez-la en toutes lettres : « appel d'offres formel », « trois cotations écrites ». Pas de signe ou d'abréviation que l'équipe achats pourrait mal comprendre.",
      },
      {
        title: 'Retenez la plus restrictive et écrivez pourquoi',
        actions: [
          "Ordre du moins exigeant au plus exigeant : une cotation, trois devis ou cotations, mise en concurrence formelle, appel d'offres formel.",
          "Si deux règles se valent, citez les deux ; la procédure retenue satisfait alors les deux.",
        ],
      },
    ],
    table: {
      columns: ['Dossier', 'Besoin (USD)', 'Règle HSGL', 'Règle(s) bailleur', 'Procédure retenue'],
      rows: [
        ['DA-031 (BHA)', '38 500', "Appel d'offres formel", 'BHA : 3 cotations écrites', "Appel d'offres formel (HSGL)"],
        ['DA-052 (ECHO)', '11 200', "Appel d'offres formel", 'ECHO : 3 devis', "Appel d'offres formel (HSGL)"],
        ['DA-060 (BHA 50 %, ECHO 30 %, Meridian 20 %)', '7 200', 'RFQ : 3 devis', 'BHA : micro-achat ; ECHO : 3 devis ; Meridian : formelle', 'Mise en concurrence formelle (Meridian)'],
        ['BC-044 + BC-045 (BHA)', '18 000', "Appel d'offres formel", 'BHA : 3 cotations écrites', "Appel d'offres formel (HSGL)"],
      ],
    },
    result: "Pour chaque dossier, la procédure exigée est écrite et la règle qui la détermine est citée.",
    pitfall: "Écrire « RFQ » pour DA-052 parce que ECHO accepte trois devis. À 11 200 USD, la procédure interne de HSGL exige un appel d'offres formel : l'application de la seule règle du bailleur serait une non-conformité interne, qui apparaîtrait en audit interne même si le bailleur ne dit rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Fixer la décision de procédure par écrit, puis contrôler le dossier avant la commande',
    intro: "Pourquoi : une décision de procédure non écrite se contourne ou s'oublie. Le contrôle du dossier avant le bon de commande est le moment où une correction ne coûte rien. Entrées : le tableau de l'étape 3, le dossier d'achat en cours.",
    steps: [
      {
        title: "Écrivez la décision de procédure sur la fiche",
        body: "Une phrase : « Procédure exigée : [procédure], règle déterminante : [article]. Décision du [date] par [nom, fonction]. »",
      },
      {
        title: 'Contrôlez le dossier avant la signature du bon de commande',
        actions: [
          "1. Le nombre d'offres reçues correspond au minimum exigé, avec la date de réception de chacune.",
          "2. L'analyse comparative des offres porte une date antérieure à celle du bon de commande.",
          "3. Le PV du comité d'achats est signé par ses membres.",
          "4. Une déclaration de conflit d'intérêt est signée par les personnes qui sélectionnent (200.318).",
          "5. Pour un appel d'offres, le dossier suit les annexes standard (procédure ECHO/PRAG).",
        ],
      },
      {
        title: 'Reportez le résultat dans la checklist',
        body: "Mettez à jour le statut (colonne D), la preuve (E), la date de vérification (F) et le commentaire (G) de la ligne « seuil » du bon bloc. Dans la checklist adaptée de la procédure 2, ce sont les lignes 6 (BHA), 12 (ECHO) et 18 (PAM).",
      },
    ],
    example: {
      title: 'Contrôle a posteriori du dossier BC-044 (revue du 21 septembre 2026)',
      lines: [
        "Offres au dossier : une seule, du fournisseur retenu, datée du 12/08/2026. Exigence minimale : 3 devis (RFQ) selon HSGL et 3 cotations selon le BHA pour un besoin de 18 000 USD.",
        "Analyse comparative : absente. PV de comité d'achats : absent. Déclaration de conflit d'intérêt : absente.",
        "Ligne 6 (BHA, seuil) : D = Non conforme ; E = Grille de cotation / PV comite achats (absents) ; F = 21/09/2026 ; G = BC-044 et BC-045 : besoin de 18 000 USD fractionne en 2 BC, une seule offre.",
      ],
    },
    result: "Une décision de procédure écrite pour les trois DA en attente, et le test du dossier BC-044 reporté dans la ligne 6 de la checklist.",
    tip: "Le dossier se contrôle dans l'ordre chronologique : offres, analyse, PV, puis bon de commande. Un PV signé après la livraison ne prouve pas qu'une mise en concurrence a eu lieu avant le choix du fournisseur.",
  },

  // ── Procédure 4 — Origine et nationalité (étape 4 du guide) ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: "Retrouver la règle d'origine et la liste de pays de chaque accord",
    intro: "Pourquoi : c'est le point le plus fréquemment ignoré par les équipes achats qui ne travaillent pas quotidiennement avec les règles bailleur. La règle se lit AVANT de contractualiser, pas après. Entrées : les accords et leurs annexes.",
    steps: [
      {
        title: 'Cherchez, pour chaque bailleur, la clause d\'origine et de nationalité',
        actions: [
          "1. BHA : le code géographique de l'accord et le chapitre ADS 310 qui le définit.",
          "2. ECHO : la liste des pays éligibles de la convention (annexe d'éligibilité du PRAG).",
          "3. PAM : la clause du PCA sur la provenance des biens et des fournisseurs.",
          "4. Si le texte est muet, demandez une confirmation écrite au bailleur.",
        ],
      },
      {
        title: "Recopiez la liste ou le code dans la fiche de la procédure 1",
        body: "Ne vous contentez pas d'un renvoi : écrivez les pays ou le code, avec la date du texte consulté.",
      },
      {
        title: 'Relevez les restrictions par catégorie',
        body: "Certains accords durcissent l'origine pour des catégories précises (véhicules, médicaments, denrées). Notez-les séparément.",
      },
    ],
    table: {
      columns: ['Bailleur', 'Règle (accords fictifs de l\'exemple)', 'Où la lire'],
      rows: [
        ['BHA', "Code géographique 937 de l'accord ; pour les véhicules, dérogation d'origine écrite exigée", "Accord, annexe 2 ; ADS 310"],
        ['ECHO', "États membres de l'UE, Espace économique européen, pays d'Afrique subsaharienne, pays bénéficiaires de l'action", 'Convention, annexe 3'],
        ['PAM', "Aucune liste de pays dans le PCA ; confirmation écrite de l'agence du 12 janvier 2026", "PCA 2026 ; courriel de l'agence"],
      ],
    },
    result: "Chaque bailleur de la base a sa règle d'origine écrite, avec la référence du texte et sa date.",
    pitfall: "Considérer l'absence de règle comme une absence d'exigence. Un silence du texte se confirme par écrit auprès de l'agence : « personne ne m'a jamais dit le contraire » ne protège pas en audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: "Distinguer le pays du fournisseur, le pays du fabricant et le pays d'origine du bien",
    intro: "Pourquoi : c'est l'erreur la plus fréquente sur le terrain : un fournisseur enregistré dans un pays éligible peut très bien vendre des biens fabriqués ailleurs. Les deux notions se vérifient séparément, systématiquement. Entrées : les offres reçues, les fiches techniques.",
    steps: [
      {
        title: 'Relevez trois faits distincts pour chaque article',
        actions: [
          "1. Fournisseur : raison sociale et pays d'enregistrement (registre du commerce).",
          "2. Fabricant : nom et pays de l'usine, lus sur la fiche technique ou la plaque signalétique.",
          "3. Pays d'origine du bien : le pays où il a été fabriqué ou substantiellement transformé.",
        ],
      },
      {
        title: "Pour un bien assemblé, vérifiez la règle de transformation",
        body: "Un appareil assemblé dans un pays éligible avec des composants importés peut avoir une origine différente selon la règle de l'accord. Lisez la définition de l'origine dans l'accord avant de conclure.",
      },
      {
        title: 'Pour un service, relevez la nationalité du prestataire et le lieu d\'exécution',
        body: "Une règle de nationalité peut viser le prestataire, ses experts ou le lieu d'exécution. Notez ces trois éléments.",
      },
    ],
    table: {
      columns: ['Article', 'Fournisseur (pays)', 'Fabricant (usine)', 'Pays d\'origine', 'Liste ECHO annexe 3'],
      rows: [
        ['2 réfrigérateurs solaires (DA-052)', 'Kivu Froid Services SARL (RDC, enregistré à Goma)', 'Soleira Energy Ltd (usine de Nairobi)', 'Kenya', 'Éligible : Afrique subsaharienne'],
        ['Panneaux solaires de rechange (accessoire)', 'Kivu Froid Services SARL (RDC)', 'Fabricant à confirmer', 'À confirmer', 'À confirmer avant commande'],
      ],
    },
    result: "Un tableau qui sépare, pour chaque article, le pays du fournisseur, celui du fabricant et l'origine du bien, avec les lignes à confirmer.",
    tip: "Quand une ligne reste « à confirmer », la commande ne part pas. Il vaut mieux perdre une semaine sur le délai de livraison que découvrir le marquage d'origine sur le colis, comme dans le cas des pièces de pompe de l'exercice noté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: "Exiger les preuves d'origine AVANT la commande, et les recouper à la livraison",
    intro: "Pourquoi : une déclaration orale du fournisseur n'a aucune valeur en audit. La preuve doit être demandée dans le dossier de consultation et vérifiée à la réception. Entrées : le dossier de consultation (RFQ ou appel d'offres), les offres reçues.",
    steps: [
      {
        title: 'Ajoutez une clause d\'origine dans la consultation',
        body: "Rédigez-la une fois et réutilisez-la : « Le soumissionnaire indique, pour chaque article, le fabricant et le pays de fabrication, et joint la déclaration d'origine du fabricant. Une offre sans cette information est écartée. »",
      },
      {
        title: 'Demandez les pièces par écrit aux fournisseurs présélectionnés',
        actions: [
          "1. Déclaration ou certificat d'origine du fabricant, distinct de l'enregistrement du fournisseur.",
          "2. Facture pro forma mentionnant le fabricant et le pays de fabrication.",
          "3. Fiche technique avec le nom de l'usine.",
        ],
      },
      {
        title: 'Recoupez les trois documents',
        body: "Le pays de la déclaration, celui de la pro forma et celui de la fiche technique doivent coïncider. Une divergence est un signal : suspendez la commande et interrogez le fournisseur.",
      },
      {
        title: "À la livraison, comparez le marquage réel aux documents",
        actions: [
          "Photographiez la plaque signalétique ou le marquage « Made in … » de chaque article.",
          "Comparez-le au certificat et notez le résultat dans le bordereau de réception.",
        ],
      },
    ],
    example: {
      title: 'Courriel envoyé à Kivu Froid Services SARL le 11 septembre 2026',
      lines: [
        "« Bonjour, dans le cadre de la consultation DA-052 financée par un bailleur institutionnel, merci de nous transmettre avant le 15 septembre pour chaque article : le nom du fabricant, le pays de fabrication, la déclaration d'origine signée du fabricant et la fiche technique. Les offres sans ces éléments ne pourront pas être évaluées. Cordialement. »",
        "Réponse reçue le 14 septembre : déclaration d'origine de Soleira Energy Ltd (Kenya) du 2 septembre 2026, pro forma n° PF-0912 mentionnant le fabricant et le pays, fiche technique avec adresse de l'usine à Nairobi.",
      ],
    },
    result: "Un dossier d'origine de trois pièces par article, et une procédure de contrôle à la réception.",
    pitfall: "Accepter comme preuve l'extrait du registre du commerce du fournisseur. Il prouve l'enregistrement du fournisseur, qui n'est pas la question posée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Décider, reporter dans la checklist, et savoir quoi faire si le bien est hors liste',
    intro: "Pourquoi : la vérification n'a de valeur que si elle débouche sur une décision écrite avant le paiement. Entrées : le tableau de l'étape 2, les preuves de l'étape 3, la règle de l'étape 1.",
    steps: [
      {
        title: 'Comparez le pays d\'origine à la liste et concluez',
        actions: [
          "Pays d'origine dans la liste : conforme, pièces au dossier.",
          "Pays d'origine hors liste : la commande ne part pas.",
          "Pays d'origine non établi : statut « A verifier », la commande attend.",
        ],
      },
      {
        title: 'Si le bien est hors liste, choisissez une option AVANT la commande',
        actions: [
          "Option 1 : changer d'article ou de fournisseur pour un bien d'origine éligible.",
          "Option 2 : demander une dérogation écrite au bailleur, par l'interlocuteur officiel (Marcel O.), et ne commander qu'après sa réponse.",
          "Ne jamais payer d'abord puis régulariser : après paiement, il ne reste que la gestion de crise (procédure 12).",
        ],
      },
      {
        title: 'Reportez le résultat dans la checklist',
        body: "Ligne 5 (BHA) ou ligne 11 (ECHO) : statut, preuve, date de vérification et commentaire.",
      },
    ],
    example: {
      title: 'Lignes de la checklist après vérification',
      lines: [
        "Ligne 11 (ECHO, origine) : D = Conforme ; E = Declaration d'origine du fabricant + facture pro forma PF-0912 ; F = 14/09/2026 ; G = DA-052 : origine Kenya, liste annexe 3 respectee.",
        "Ligne 5 (BHA, origine) : D = Conforme ; E = Derogation d'origine ecrite de l'agreement officer ; F = 22/09/2026 ; G = DA-031 : l'annexe 2 exige une derogation d'origine pour tout vehicule, obtenue le 22/09 avec l'approbation prealable (voir procedure 11).",
      ],
    },
    result: "Pour chaque dossier, un statut d'origine justifié, avec la pièce d'origine ou la décision d'attente écrite.",
    tip: "Pour un véhicule, une machine ou tout bien durable, photographiez la plaque constructeur à la réception et archivez-la avec le certificat : c'est la pièce qu'un auditeur demandera deux ans plus tard, quand plus personne ne se souvient du fournisseur.",
  },

  // ── Procédure 5 — Listes d'exclusion (étape 5 du guide) ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 3',
    title: "Dresser la liste des parties à vérifier avant l'engagement",
    intro: "Pourquoi : un fournisseur suspendu ou débarré (« excluded party ») rend la dépense automatiquement inéligible, même si le reste de la procédure est irréprochable. Pour tout achat BHA, la vérification est non négociable, quel que soit le montant. Entrées : la fiche de la procédure 1, l'offre du fournisseur retenu.",
    steps: [
      {
        title: 'Listez toutes les parties concernées par la dépense',
        actions: [
          "1. Le fournisseur retenu, sous sa raison sociale exacte.",
          "2. Ses dirigeants ou propriétaires connus (nom des signataires de l'offre).",
          "3. Les sous-traitants cités dans l'offre.",
          "4. Le transitaire ou le transporteur s'il est choisi par le fournisseur.",
        ],
      },
      {
        title: 'Fixez le moment de la vérification',
        body: "Avant l'engagement : avant la signature du bon de commande ou du contrat, pas après réception de la facture. Si plus de 30 jours séparent la vérification de la signature, refaites-la (règle interne prudente, à écrire dans la procédure).",
      },
      {
        title: 'Préparez le poste de contrôle',
        body: "La recherche d'exclusions est publique et gratuite : elle ne demande pas de compte. Prévoyez un navigateur sur lequel la date et l'heure du poste sont visibles pour la capture d'écran.",
      },
    ],
    table: {
      columns: ['Partie', 'Rôle (DA-031)', 'Recherche à faire'],
      rows: [
        ['Lakes Auto Import SARL', 'Fournisseur retenu du 4x4', 'Raison sociale complète, puis sans la forme juridique'],
        ['Gaston M. (nom fictif)', 'Gérant signataire de l\'offre', 'Recherche d\'individu'],
        ['Transitaire Nyiragongo Cargo', 'Transport du véhicule jusqu\'à Goma', 'Raison sociale'],
      ],
    },
    result: "Une liste de trois parties à vérifier pour la DA-031, avec le moment de la vérification fixé avant la signature du bon de commande.",
    pitfall: "Vérifier uniquement le fournisseur « parce que c'est lui qui facture ». Un dirigeant ou un sous-traitant exclu peut suffire à contaminer la dépense ; vérifiez toutes les parties que vous connaissez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 3',
    title: 'Lancer la recherche sur SAM.gov et lire le résultat',
    intro: "Pourquoi : le contrôle prend quelques minutes et protège toute la dépense. Entrées : la liste de l'étape 1. L'interface de SAM.gov évolue : repérez le domaine de recherche qui porte le nom « Exclusions » plutôt que de suivre un chemin de clics appris par cœur.",
    steps: [
      {
        title: 'Ouvrez le moteur de recherche des exclusions',
        actions: [
          "1. Allez sur sam.gov, menu « Search ».",
          "2. Dans la liste des domaines, choisissez « Exclusions ».",
          "3. Vérifiez que la date et l'heure de votre poste sont visibles à l'écran.",
        ],
      },
      {
        title: 'Lancez trois recherches par partie',
        actions: [
          "1. La raison sociale exacte, telle que sur l'offre.",
          "2. La raison sociale sans la forme juridique (SARL, Ltd).",
          "3. Pour un dirigeant, son nom complet en recherche d'individu.",
        ],
      },
      {
        title: 'Lisez le résultat',
        actions: [
          "Aucun résultat : aucune exclusion trouvée, notez-le avec le nombre de résultats.",
          "Un résultat : ouvrez la fiche et lisez le type d'exclusion, l'agence qui l'a prononcée et les dates.",
          "Homonyme probable : comparez adresse, pays et identifiants avant de conclure ; ne tranchez jamais sur le seul nom.",
          "Exclusion active confirmée : arrêtez, aucun bon de commande.",
        ],
      },
    ],
    example: {
      title: 'Recherches du 14 septembre 2026, DA-031',
      lines: [
        "« Lakes Auto Import SARL » : 0 résultat. « Lakes Auto Import » : 0 résultat.",
        "« Gaston M. », recherche d'individu : 1 résultat, homonyme enregistré par une agence américaine, adresse aux États-Unis, sans lien avec le gérant de Goma (adresse, pays, activité différents) : écarté et motivé dans la note de vérification.",
        "« Nyiragongo Cargo » : 0 résultat.",
      ],
    },
    result: "Une conclusion écrite pour chaque partie : aucune exclusion trouvée, ou homonyme écarté avec motivation, ou exclusion active.",
    tip: "L'absence d'enregistrement d'un fournisseur local dans SAM.gov n'est pas un problème : la vérification porte sur l'EXCLUSION, pas sur l'existence d'un profil d'entité. Ne demandez donc jamais à un fournisseur congolais de « s'enregistrer sur SAM.gov » pour vous répondre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 3',
    title: "Capturer et archiver la preuve, traiter un résultat positif, vérifier les autres listes",
    intro: "Pourquoi : un contrôle sans preuve ne vaut rien face à un auditeur externe. Une capture d'écran horodatée dans le dossier d'achat est la pièce que le bailleur demandera. Entrées : les résultats de l'étape 2.",
    steps: [
      {
        title: 'Capturez chaque recherche avec les cinq éléments lisibles',
        actions: [
          "1. L'adresse du site et le domaine « Exclusions ».",
          "2. Les termes recherchés.",
          "3. Le nombre de résultats.",
          "4. La date et l'heure du poste.",
          "5. Enregistrez en PDF ou en image : 2026-09-14_SAM_LakesAutoImport.pdf.",
        ],
      },
      {
        title: "Rangez la capture dans le dossier d'achat, au même niveau que le bon de commande",
        body: "Dossier DA-031 > sous-dossier « 05_Exclusion ». Rédigez deux lignes de note : qui a vérifié, quand, avec quel résultat.",
      },
      {
        title: 'Si une exclusion active est confirmée, suivez le protocole',
        actions: [
          "1. Aucun bon de commande, aucun paiement, aucune promesse au fournisseur.",
          "2. Informez Ruth B. et Marcel O. dans les 24 heures, avec la capture.",
          "3. Ne prévenez pas le fournisseur avant la décision du siège.",
          "4. Si la dépense est déjà engagée, passez à la procédure 12.",
        ],
      },
      {
        title: 'Vérifiez les listes propres aux autres bailleurs',
        body: "SAM.gov ne concerne que les fonds américains. Pour ECHO, appliquez les déclarations d'honneur et contrôles prévus par la convention ainsi que la liste consolidée des sanctions financières de l'UE ; pour le PAM, appliquez la politique de vetting de l'accord et la liste consolidée du Conseil de sécurité de l'ONU.",
      },
    ],
    example: {
      title: 'Ligne 7 de la checklist (BHA, exclusion) à la fin de la revue',
      lines: [
        "D = A verifier ; E = Capture d'ecran verification SAM.gov (5 fournisseurs sur 7) ; F = 21/09/2026.",
        "G = 2 fournisseurs BHA sans capture au dossier : Kivu Equipements SARL (verifie le 21/09, aucune exclusion active, mais apres l'engagement des BC-044 et BC-045) et Transitaire Nyiragongo Cargo (a refaire avant la prochaine commande).",
      ],
    },
    result: "Une capture horodatée par partie, archivée dans le dossier d'achat, et la ligne 7 de la checklist mise à jour avec la preuve et sa date.",
    pitfall: "Vérifier après réception de la facture « pour régulariser ». Une vérification faite après l'engagement reste un manquement à l'obligation de vérifier AVANT l'engagement : la ligne se renseigne « A verifier » ou « Non conforme » avec le commentaire, jamais « Conforme ».",
  },

  // ── Procédure 6 — Coûts directs, indirects, partagés (étape 6 du guide) ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Classer chaque coût en direct, direct partagé ou indirect avec trois questions',
    intro: "Pourquoi : la classification est la source d'erreur la plus fréquente entre équipes finance et bailleurs. Un coût mal classé se retrouve facturé à la mauvaise ligne ou au mauvais taux. Entrées : le grand livre analytique du trimestre, le budget approuvé de chaque accord.",
    steps: [
      {
        title: 'Posez la question 1 : le coût est-il engagé exclusivement pour ce projet ?',
        body: "Oui : coût direct, imputé à la ligne budgétaire du projet. Exemple : salaire d'un chargé de projet dédié à 100 %.",
      },
      {
        title: 'Si non, posez la question 2 : peut-on mesurer l\'usage projet par projet ?',
        body: "Oui (kilomètres, heures, surface) : coût direct partagé, réparti selon une clé écrite et cohérente (étape 4). Non : coût indirect, couvert par le taux applicable (étapes 2 et 3).",
      },
      {
        title: 'Écrivez le résultat dans un tableau de classement',
        body: "Un tableau par trimestre : coût, montant, réponse à Q1, réponse à Q2, catégorie, mécanisme.",
      },
    ],
    table: {
      columns: ['Coût du trimestre', 'Exclusif au projet ?', 'Mesurable par projet ?', 'Catégorie'],
      rows: [
        ['Salaire du chargé de projet nutrition (100 % BHA)', 'Oui', '—', 'Direct BHA'],
        ['Carburant du véhicule affecté au seul projet BHA', 'Oui', '—', 'Direct BHA'],
        ['Véhicule HSGL-GOM-07 (carburant, entretien, chauffeur, assurance)', 'Non', 'Oui : kilomètres', 'Direct partagé (clé : kilomètres)'],
        ['Loyer du bureau de coordination pays à Kinshasa', 'Non', 'Non', 'Indirect'],
        ['Salaire du Directeur Pays', 'Non', 'Non', 'Indirect'],
        ['Audit externe annuel de HSGL', 'Non', 'Non', 'Indirect'],
      ],
    },
    result: "Chaque coût du trimestre est classé en trois catégories, avec la question qui l'a placé là.",
    pitfall: "Classer le véhicule partagé en « direct » du projet qui a le plus de marge disponible ce mois-là. C'est le redressement le plus fréquent d'un audit bailleur, même sans intention frauduleuse : la clé de répartition ne dépend jamais du solde budgétaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'BHA : calculer les coûts indirects au taux de minimis sur les coûts directs modifiés',
    intro: "Pourquoi : appliquer le taux sur le total des coûts directs au lieu des coûts directs modifiés (MTDC) gonfle les indirects. Entrées : le grand livre du trimestre, la lettre ou la clause sur le taux de minimis (ou l'accord NICRA), la définition des MTDC dans l'accord.",
    steps: [
      {
        title: 'Identifiez le mécanisme applicable à HSGL',
        body: "Un taux NICRA (accord négocié avec USAID) ou, à défaut, le taux de minimis. HSGL n'a pas de NICRA : il applique le taux de minimis de 10 % des MTDC prévu par l'accord. Relisez la clause pour confirmer le taux et la définition des MTDC.",
      },
      {
        title: 'Calculez les coûts directs modifiés',
        actions: [
          "1. Extrayez du grand livre le total des coûts directs cumulés de la période du brouillon (ici du 1er juillet au 31 août 2026).",
          "2. Retirez les rubriques exclues par la définition des MTDC : ici équipements et locations.",
          "3. Notez le résultat : ce sont les MTDC.",
        ],
      },
      {
        title: 'Appliquez le taux et comparez au brouillon de rapport',
        actions: [
          "Coûts indirects autorisés = 10 % × MTDC.",
          "Comparez à la ligne « coûts indirects » du brouillon de rapport financier de Ruth B.",
          "Si le brouillon est supérieur, notez l'écart et renvoyez-le à Ruth B. pour correction AVANT dépôt.",
        ],
      },
    ],
    example: {
      title: 'Calcul du cumul juillet – août 2026 (brouillon de suivi financier BHA)',
      lines: [
        "Coûts directs cumulés du 1er juillet au 31 août 2026 : 142 800 USD.",
        "Rubriques exclues : équipements 18 400 USD (matériel de pesée, informatique) et locations 4 100 USD (entrepôt) = 22 500 USD.",
        "MTDC = 142 800 − 22 500 = 120 300 USD. Indirects autorisés = 10 % × 120 300 = 12 030 USD.",
        "Brouillon de Ruth B. : 10 % × 142 800 = 14 280 USD. Écart = 14 280 − 12 030 = 2 250 USD à retirer.",
        "Dans Excel : B5 = B2-B3-B4 ; B6 = ARRONDI(B5*0,10;2) ; B7 = B_brouillon-B6.",
      ],
    },
    result: "Un calcul de trois lignes, un écart de 2 250 USD identifié et renvoyé à la finance avant le dépôt du rapport.",
    tip: "Le taux de minimis de 10 % est celui du texte source. Si votre accord date d'après le 1er octobre 2024 et cite 15 %, c'est 15 % qui s'applique, avec exactement la même méthode de calcul sur les MTDC. Quel que soit le taux, la base reste le point sensible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'ECHO : vérifier que les coûts indirects respectent le plafond du contrat',
    intro: "Pourquoi : le plafond de coûts indirects est un MAXIMUM contractuel, souvent autour de 7 % des coûts directs éligibles, à vérifier dans CHAQUE contrat. Entrées : la convention ECHO, le budget approuvé, le brouillon du Single Form.",
    steps: [
      {
        title: 'Cherchez dans la convention le taux plafond et sa base',
        actions: [
          "1. Repérez l'article sur les coûts indirects et le budget annexé.",
          "2. Notez le taux (7 % dans la convention de l'exemple) et la base (coûts directs éligibles).",
          "3. Notez si le taux est un forfait ou un plafond : un forfait s'applique tel quel, un plafond est un maximum.",
        ],
      },
      {
        title: 'Calculez la base et le plafond',
        actions: [
          "Base = coûts directs éligibles de la période, après retrait des coûts déjà jugés inéligibles.",
          "Plafond = taux × base.",
        ],
      },
      {
        title: 'Comparez au brouillon et corrigez avant le Single Form',
        body: "L'excédent se retire du brouillon. Une correction faite avant le dépôt reste interne ; après dépôt, elle devient une demande de rectification au bailleur.",
      },
    ],
    example: {
      title: 'Période intermédiaire ECHO (brouillon du 18 septembre 2026)',
      lines: [
        "Coûts directs éligibles de la période : 318 000 USD.",
        "Plafond : 7 % × 318 000 = 22 260 USD.",
        "Brouillon : 8 % × 318 000 = 25 440 USD. Excédent = 25 440 − 22 260 = 3 180 USD.",
        "Action : ramener la ligne à 22 260 USD avant la revue de conformité interne du 5 novembre ; l'excédent de 3 180 USD reste à la charge de HSGL (fonds non affectés).",
        "Ligne 16 de la checklist (ligne ajoutée à la procédure 2) : D = Non conforme ; E = Calcul des couts indirects et budget approuve ; F = 18/09/2026 ; G = Taux de 8 % applique au brouillon au lieu de 7 % : 3 180 USD d'excedent, a corriger avant le Single Form du 15/11.",
      ],
    },
    result: "Un plafond calculé, un excédent de 3 180 USD chiffré, une action datée, et la ligne 16 de la checklist à « Non conforme ».",
    pitfall: "Penser « 1 point de plus ne se verra pas ». Le plafond s'applique à toute la base : 1 point d'écart sur 318 000 USD est un excédent de 3 180 USD, que le bailleur rejettera sans discussion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Répartir un coût direct partagé avec une clé écrite',
    intro: "Pourquoi : un coût utilisé par plusieurs projets doit être réparti sur une base réelle et reproductible, sinon le bailleur le requalifie. Entrées : le carnet de bord du véhicule HSGL-GOM-07, les factures du mois, la liste des projets utilisateurs.",
    steps: [
      {
        title: 'Choisissez la clé selon la nature du coût',
        body: "Véhicule : kilomètres. Agent partagé : heures de temps déclarées. Local partagé : surface ou effectif. La clé se choisit selon la nature du coût, jamais selon le solde budgétaire du mois.",
      },
      {
        title: 'Relevez la quantité de la clé par projet depuis la pièce justificative',
        actions: [
          "1. Carnet de bord signé du mois : kilomètres par projet.",
          "2. Calculez la part de chaque projet : kilomètres du projet ÷ kilomètres totaux.",
          "3. Vérifiez que la somme des parts est égale à 100 %.",
        ],
      },
      {
        title: 'Appliquez les parts aux coûts du mois et imputez',
        body: "Montant imputé à un projet = coût total × part. Vérifiez que la somme des imputations est égale au coût total.",
      },
    ],
    table: {
      columns: ['Projet', 'Kilomètres de septembre', 'Part', 'Coût imputé (2 840 USD)'],
      rows: [
        ['BHA — Nutrition', '1 560', '65 %', '1 846 USD'],
        ['ECHO — Santé de base', '600', '25 %', '710 USD'],
        ['Fonds Meridian', '240', '10 %', '284 USD'],
        ['Total', '2 400', '100 %', '2 840 USD'],
      ],
    },
    example: {
      title: 'Composition du coût mensuel du véhicule HSGL-GOM-07',
      lines: [
        "Carburant 1 120 USD + entretien 460 USD + chauffeur 900 USD + assurance 360 USD = 2 840 USD.",
        "Contrôle : 1 846 + 710 + 284 = 2 840 USD.",
      ],
    },
    result: "Un tableau d'allocation mensuel dont la somme retombe sur le coût total, adossé au carnet de bord signé.",
    tip: "Faites signer le carnet de bord chaque fin de mois par le chauffeur et le responsable logistique, avant de calculer la clé. Une clé reconstituée de mémoire un trimestre plus tard ne résiste pas à un auditeur bailleur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: "Rédiger la note de méthode d'allocation, contrôler la cohérence, mettre à jour la checklist",
    intro: "Pourquoi : la règle d'or est la même pour tous les bailleurs : la méthode d'allocation doit être écrite, cohérente d'un mois sur l'autre et applicable de la même façon à tous les bailleurs qui financent la structure partagée. Entrées : le calcul de l'étape 4, les mois précédents.",
    steps: [
      {
        title: 'Rédigez la note de méthode en cinq rubriques',
        actions: [
          "1. Coût concerné et projets financeurs.",
          "2. Clé de répartition et pièce qui la prouve.",
          "3. Fréquence de calcul (mensuelle).",
          "4. Règle de modification de la clé (uniquement si l'usage réel change, avec date et validation).",
          "5. Validation par la finance et date d'entrée en vigueur.",
        ],
      },
      {
        title: 'Comparez la clé de plusieurs mois',
        body: "Placez les trois derniers mois côte à côte : les parts peuvent varier parce que l'usage varie, jamais parce que le budget d'un projet change.",
      },
      {
        title: 'Reportez le résultat dans la checklist',
        body: "Ligne 8 (BHA, coûts indirects) : D = Conforme après correction du brouillon, avec le calcul en preuve. L'allocation du véhicule est une preuve de plus pour les lignes concernées.",
      },
    ],
    example: {
      title: 'Clé du véhicule HSGL-GOM-07 sur trois mois',
      lines: [
        "Juillet : BHA 62 % — ECHO 28 % — Meridian 10 %. Août : BHA 64 % — ECHO 26 % — Meridian 10 %. Septembre : BHA 65 % — ECHO 25 % — Meridian 10 %.",
        "Lecture : la part du BHA monte avec la montée en charge de l'accord, Meridian reste stable. Chaque mois est adossé à un carnet de bord signé. Aucune part n'a été ajustée pour absorber un excédent.",
        "Ligne 8 de la checklist : D = Conforme ; E = Lettre taux de minimis + calcul MTDC (12 030 USD au 31/08) ; F = 24/09/2026 ; G = Brouillon de suivi corrigé : 12 030 USD au lieu de 14 280 USD.",
      ],
    },
    result: "Une note de méthode d'une page validée par Ruth B., un contrôle de cohérence sur trois mois et la ligne 8 mise à jour.",
    pitfall: "Appliquer une clé aux projets du bailleur A mais pas à ceux du bailleur B pour le même véhicule. La méthode doit être identique pour tous les bailleurs qui financent la structure partagée, faute de quoi un bailleur subventionne les autres.",
  },

  // ── Procédure 7 — Preuves (étape 7 du guide) ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 3',
    title: "Construire l'index des preuves par ligne de la checklist",
    intro: "Pourquoi : chaque case cochée doit être adossée à une preuve documentaire consultable. Un point « vérifié » sans preuve archivée n'a aucune valeur face à un auditeur externe ou à une revue bailleur. Entrées : les 17 lignes de la checklist adaptée.",
    steps: [
      {
        title: 'Pour chaque ligne, écrivez la preuve attendue, son producteur et son emplacement',
        body: "La colonne E de la checklist donne le type de pièce attendu : reprenez-la dans l'index et ajoutez qui la fournit et où elle est rangée.",
      },
      {
        title: 'Vérifiez que chaque preuve est datée et rattachée au bon dossier',
        body: "Une pièce non datée ne prouve pas qu'elle existait avant l'engagement. Une pièce rangée dans le dossier d'un autre achat ne prouve rien pour celui-ci.",
      },
    ],
    table: {
      columns: ['Point de la checklist', 'Preuve attendue (colonne E)', 'Producteur', 'Emplacement'],
      rows: [
        ['Origine et nationalité', "Certificat d'origine du fabricant, pro forma", 'Fournisseur via achats', 'DA > 04_Origine'],
        ['Seuil de mise en concurrence', "Grille de cotation, PV du comité d'achats", "Comité d'achats", 'DA > 03_Concurrence'],
        ['Exclusion', 'Capture SAM.gov horodatée', 'Responsable de la vérification', 'DA > 05_Exclusion'],
        ['Coûts indirects', 'Accord NICRA ou lettre de minimis, calcul des MTDC', 'Finance', 'Finance > Rapports > Indirects'],
        ['Approbation préalable', "Autorisation écrite du bailleur", 'Marcel O.', 'DA > 06_Approbations'],
        ['Visibilité et marquage', 'Photos datées, supports de communication', 'Programme', 'Programme > Visibilité'],
        ['Reporting', "Accusé de réception du Single Form ou du rapport", 'Marcel O.', 'Rapports > Accusés'],
      ],
    },
    result: "Un index qui indique, pour chaque ligne de la checklist, quelle pièce prouve le statut et où la retrouver.",
    tip: "Faites de l'index un onglet supplémentaire dans un classeur séparé, jamais dans le template : la checklist garde sa structure d'origine et l'index peut évoluer sans modifier les formules du tableau de bord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 3',
    title: 'Renseigner les colonnes « Preuve documentaire » et « Derniere verification »',
    intro: "Pourquoi : ces deux colonnes sont celles qu'un auditeur lira en premier pour apprécier la fiabilité d'une ligne. Entrées : l'index de l'étape 1, les pièces archivées.",
    steps: [
      {
        title: 'Colonne E : le type de pièce suivi de sa référence précise',
        body: "Gardez le libellé existant et ajoutez la référence : n° de pro forma, nom de fichier, date de la pièce. Une preuve se retrouve sans lire les autres lignes.",
      },
      {
        title: 'Colonne F : la date de VOTRE vérification, pas celle de la pièce',
        body: "Au format jj/mm/aaaa. Si vous refaites une vérification, mettez à jour la date : elle indique la fraîcheur du contrôle.",
      },
      {
        title: 'Colonne G : écrivez le commentaire dès que le statut n\'est pas « Conforme »',
        actions: [
          "Pour « A verifier » : ce qui manque et la date prévue pour le compléter.",
          "Pour « Non conforme » : le fait, le dossier et le montant.",
          "Pour « Non applicable » : la raison, pour qu'on puisse la contester.",
        ],
      },
    ],
    example: {
      title: 'Trois lignes renseignées',
      lines: [
        "Ligne 12 (ECHO, seuils) : D = Conforme ; E = Grille de cotation DA-049 (6 800 USD) : 3 devis dates du 02, 04 et 05/09/2026 + PV du 08/09 ; F = 09/09/2026 ; G = (vide).",
        "Ligne 13 (ECHO, dossier d'appel d'offres) : D = Non applicable ; G = Aucun appel d'offres ECHO lance depuis juillet 2026 ; a revoir avec l'appel d'offres DA-052.",
        "Ligne 10 (BHA, marquage) : D = A verifier ; E = Photos de marquage horodatees (2 sites sur 5) ; F = 23/09/2026 ; G = 3 sites a photographier avant le 10/10.",
      ],
    },
    result: "Pour chaque ligne vérifiée, une preuve référencée et une date de vérification, et pour chaque ligne non conforme ou incomplète, un commentaire factuel.",
    pitfall: "Écrire « OK » ou « vu » en colonne G. Un commentaire n'est utile que s'il contient un fait vérifiable (qui, quoi, quand, combien), car c'est lui qui nourrira ensuite la note d'analyse de la procédure 12.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 3',
    title: "Archiver pour qu'un tiers retrouve chaque preuve en deux minutes",
    intro: "Pourquoi : une preuve introuvable le jour du contrôle équivaut à une preuve inexistante. Entrées : l'index, les dossiers d'achat, la durée de conservation fixée par vos contrats.",
    steps: [
      {
        title: 'Adoptez une arborescence unique par dossier d\'achat',
        actions: [
          "01_Demande, 02_Fiche_règles, 03_Concurrence, 04_Origine, 05_Exclusion, 06_Approbations, 07_Commande_livraison, 08_Paiement.",
          "Nommez les fichiers avec la date : 2026-09-14_SAM_LakesAutoImport.pdf.",
        ],
      },
      {
        title: 'Testez l\'archivage avec un tiers',
        actions: [
          "Demandez à Fatou S. de retrouver trois preuves de la checklist en deux minutes chacune, sans votre aide.",
          "Notez les preuves qu'elle n'a pas retrouvées : ce sont celles qui manqueraient en audit bailleur.",
        ],
      },
      {
        title: 'Fixez la durée de conservation',
        body: "Elle figure dans chaque accord : en général plusieurs années après le rapport final (souvent trois ans pour les fonds américains, au moins cinq pour de nombreux financements européens). Dans le doute, appliquez la durée la plus longue à tous les dossiers.",
      },
    ],
    example: {
      title: 'Résultat du test du 25 septembre 2026',
      lines: [
        "Preuve 1, capture SAM.gov de la DA-031 : retrouvée en 1 min 10.",
        "Preuve 2, déclaration d'origine de la DA-052 : retrouvée en 45 secondes.",
        "Preuve 3, PV de comité du BC-044 : non retrouvée, car inexistante (cohérent avec la ligne 6 « Non conforme »).",
      ],
    },
    result: "Une arborescence uniforme, une règle de nommage et un test d'archivage réussi à deux minutes par preuve.",
    tip: "Faites ce test avant chaque audit externe plutôt que pendant : il révèle en une demi-heure les dossiers qui poseront question et laisse le temps de les compléter légitimement, c'est-à-dire sans antidater quoi que ce soit.",
  },

  // ── Procédure 8 — Multi-bailleurs (étape 8 du guide) ──
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 3',
    title: 'Lister les bailleurs du coût partagé et comparer leurs règles dimension par dimension',
    intro: "Pourquoi : quand un même coût est concerné par plusieurs jeux de règles, la décision ne se prend pas à l'oreille. Elle se prend sur un tableau comparatif. Entrées : la fiche de la procédure 1 de la DA-060, les budgets approuvés des trois bailleurs.",
    steps: [
      {
        title: "Listez les bailleurs et la part de chacun dans le coût",
        body: "DA-060 : six ordinateurs portables, 7 200 USD, BHA 3 600 USD (50 %), ECHO 2 160 USD (30 %), Fonds Meridian 1 440 USD (20 %), parts issues du poste « équipement informatique » de chaque budget approuvé.",
      },
      {
        title: 'Ouvrez cinq colonnes de comparaison',
        actions: [
          "Mise en concurrence, origine, exclusion, approbation préalable, marquage et visibilité.",
          "Une ligne par dimension, une colonne par bailleur, plus la procédure interne.",
        ],
      },
      {
        title: 'Remplissez chaque case avec la règle écrite et son article',
        body: "Ne remplissez pas de mémoire. Si un bailleur est muet sur une dimension, écrivez « muet » et demandez une confirmation écrite.",
      },
    ],
    table: {
      columns: ['Dimension', 'BHA (50 %)', 'ECHO (30 %)', 'Meridian (20 %)', 'HSGL'],
      rows: [
        ['Mise en concurrence (7 200 USD)', 'Micro-achat : 1 cotation', '3 devis (au-delà de 5 000)', 'Formelle dès 5 000 (art. 9)', 'RFQ : 3 devis'],
        ['Origine', 'Code géographique 937', 'Liste de l\'annexe 3', 'Convention muette : confirmation demandée', '—'],
        ['Exclusion', 'SAM.gov obligatoire', 'Déclaration d\'honneur du fournisseur', 'Déclaration de conflit d\'intérêt', 'Déclaration de conflit d\'intérêt'],
        ['Marquage et visibilité', 'Plan de marquage BHA', 'Charte de visibilité ECHO', 'Logo Meridian sur demande', '—'],
      ],
    },
    result: "Un tableau qui montre, pour la DA-060, les règles de chaque bailleur dimension par dimension, avec les cases « muet » identifiées.",
    pitfall: "Ne comparer que la mise en concurrence. L'origine et l'exclusion se cumulent entre bailleurs, elles ne s'écartent pas : si l'un exige SAM.gov, la vérification s'applique à tout l'achat, même si ce bailleur n'en finance que 20 %.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 3',
    title: 'Trancher dimension par dimension : règle la plus restrictive ou clé documentée',
    intro: "Pourquoi : la méthode la plus sûre est d'appliquer la règle la plus restrictive des bailleurs à la portion partagée, ou de documenter une clé de répartition claire et cohérente dans le temps. Entrées : le tableau de l'étape 1.",
    steps: [
      {
        title: 'Pour la procédure de mise en concurrence, retenez la plus exigeante pour tout l\'achat',
        body: "On ne fait pas une consultation à 50 % pour le BHA et une autre à 20 % pour Meridian : un seul achat, une seule procédure, la plus restrictive.",
      },
      {
        title: "Pour l'origine, l'exclusion et le marquage, cumulez",
        actions: [
          "Origine : le bien doit être éligible pour TOUS les bailleurs à la fois (code 937 ET annexe 3 ET confirmation Meridian).",
          "Exclusion : SAM.gov est vérifié car l'un des bailleurs l'exige.",
          "Marquage : appliquez les marquages de chaque bailleur sur le matériel, sans conflit entre eux.",
        ],
      },
      {
        title: "Pour l'imputation financière, utilisez une clé documentée",
        body: "La répartition du coût (50 / 30 / 20) suit une clé écrite : ici la part de chaque projet dans le poste « équipement informatique » des budgets approuvés.",
      },
    ],
    example: {
      title: 'Décision appliquée à la DA-060',
      lines: [
        "Mise en concurrence : mise en concurrence formelle, imposée par l'article 9 de la convention Meridian (dès 5 000 USD), car plus stricte que la RFQ HSGL, les 3 devis ECHO et le micro-achat BHA.",
        "Origine : bien d'origine éligible au regard du code 937 ET de l'annexe 3 ECHO ; confirmation écrite de Meridian demandée le 15/09/2026.",
        "Exclusion : vérification SAM.gov du fournisseur avant la commande.",
        "Imputation : BHA 3 600 USD, ECHO 2 160 USD, Meridian 1 440 USD, clé écrite validée.",
      ],
    },
    result: "Pour chaque dimension, une règle retenue et sa source, qui s'applique à l'achat entier.",
    tip: "Si un bailleur finançait seulement 5 % de l'achat, la règle ci-dessus s'appliquerait quand même à tout l'achat, ou bien l'achat se scinde en deux besoins distincts (et non en deux commandes du même besoin). Dans tous les cas, la décision d'organisation doit être écrite avant la commande.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 3',
    title: "Écrire la note de règle multi-bailleurs et la faire signer avant l'achat",
    intro: "Pourquoi : cette décision ne doit jamais être laissée à l'appréciation du moment de la personne qui passe la commande. Elle doit être fixée en amont, par écrit, par la fonction finance ou conformité. Entrées : le tableau et la décision de l'étape 2.",
    steps: [
      {
        title: 'Rédigez la note en quatre blocs',
        actions: [
          "1. Le coût concerné, les bailleurs et leurs parts.",
          "2. La règle retenue pour chaque dimension, avec l'article.",
          "3. La clé d'imputation et sa pièce justificative.",
          "4. Les conditions de révision de la note (avenant, nouveau bailleur, changement de clé).",
        ],
      },
      {
        title: 'Faites-la signer par Marcel O. et Ruth B.',
        body: "Le siège (subventions) pour les règles bailleurs, la finance de la base pour l'imputation. Datez et archivez dans le dossier d'achat, sous 02_Fiche_règles.",
      },
      {
        title: "Diffusez-la à l'équipe achats avant la consultation",
        body: "Josué M. et Esther K. reçoivent la note avant d'émettre les demandes de devis. Si une dimension n'est pas couverte par la note, leur consigne écrite est de s'arrêter et de poser la question.",
      },
    ],
    example: {
      title: 'Note de règle multi-bailleurs — DA-060 (extrait)',
      lines: [
        "Objet : achat de 6 ordinateurs portables, 7 200 USD, financés par le BHA (50 %), ECHO (30 %) et Meridian (20 %).",
        "Règle de mise en concurrence : formelle (art. 9 Meridian, la plus restrictive). Origine : éligible au sens du code 937 ET de l'annexe 3. Exclusion : SAM.gov avant commande. Imputation : 3 600 / 2 160 / 1 440 USD.",
        "Révision : à chaque avenant des trois accords ou en cas d'entrée d'un quatrième bailleur sur le même poste.",
        "Signé : Marcel O., Responsable des subventions — Ruth B., Finance Manager — le 16/09/2026.",
      ],
    },
    result: "Une note signée avant la consultation, distribuée à l'équipe achats, qui évite toute décision à l'appréciation du moment.",
    pitfall: "Signer la note après la commande « pour régulariser ». Une note postérieure à l'achat ne prouve plus qu'une règle a été fixée en amont : elle prouve au contraire qu'elle ne l'était pas.",
  },

  // ── Procédure 9 — Remplir la checklist et lire le tableau de bord ──
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 4',
    title: 'Renseigner le bloc USAID / BHA (lignes 5 à 10)',
    intro: "Pourquoi : la checklist n'est utile que complète, ligne par ligne, avec une preuve et une date. Elle se consulte AVANT tout achat ou dépense significative. Entrées : les résultats des procédures 3 à 8 et l'index des preuves.",
    steps: [
      {
        title: 'Pour chaque ligne, relisez la règle puis choisissez le statut',
        actions: [
          "1. Relisez le point de contrôle (colonne B) et sa référence (colonne C).",
          "2. Parcourez vos pièces : Conforme seulement si la preuve est au dossier.",
          "3. Saisissez D (liste déroulante), puis E, F et G.",
        ],
      },
      {
        title: 'Dans les cas ambigus, appliquez la règle de prudence',
        body: "Si une partie des dossiers est conforme et une autre non, le statut est « Non conforme » : le tableau de bord ne mesure pas un pourcentage de dossiers, il signale qu'au moins un point doit être traité.",
      },
    ],
    table: {
      columns: ['Ligne', 'D — Statut', 'E — Preuve documentaire', 'F — Date', 'G — Commentaire'],
      rows: [
        ['5 Origine et nationalité', 'Conforme', "Derogation d'origine ecrite (4x4)", '22/09/2026', "DA-031 : annexe 2, derogation obtenue"],
        ['6 Seuil de mise en concurrence', 'Non conforme', 'Grille de cotation / PV comite achats (absents)', '21/09/2026', 'BC-044 et BC-045 : besoin de 18 000 USD fractionne, une seule offre'],
        ['7 Exclusion SAM.gov', 'A verifier', "Captures SAM.gov (5 fournisseurs sur 7)", '21/09/2026', '2 fournisseurs sans capture avant engagement'],
        ['8 Couts indirects', 'Conforme', 'Lettre taux de minimis + calcul des MTDC', '24/09/2026', 'Brouillon de suivi corrige : 12 030 USD au lieu de 14 280 USD'],
        ['9 Vehicule : approbation prealable', 'Conforme', "Autorisation ecrite de l'agreement officer", '22/09/2026', 'DA-031 : approbation recue avant tout bon de commande'],
        ['10 Marquage et visibilite', 'A verifier', 'Photos de marquage horodatees (2 sites sur 5)', '23/09/2026', '3 sites a photographier avant le 10/10'],
      ],
    },
    result: "Six lignes du bloc BHA complètes : trois « Conforme », une « Non conforme », deux « A verifier », chacune avec sa preuve, sa date et un commentaire factuel.",
    pitfall: "Passer la ligne 6 à « Conforme » parce que la majorité des dossiers respectent les seuils. La checklist se lit par exception : un seul dossier non conforme suffit à déclencher l'alerte du bloc, et c'est précisément le rôle du tableau de bord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 4',
    title: 'Renseigner le bloc UE / ECHO (lignes 11 à 16, dont la ligne ajoutée)',
    intro: "Pourquoi : le bloc ECHO contient la ligne ajoutée à la procédure 2 ; elle doit être traitée comme les autres, et ses données alimentent le tableau de bord. Entrées : les résultats des procédures 3, 4, 6 et 10.",
    steps: [
      {
        title: 'Remplissez les lignes 11 à 15 comme les lignes BHA',
        body: "Une ligne « Non applicable » exige un commentaire qui explique pourquoi aucune dépense de la période n'est concernée, et la condition qui la réactivera.",
      },
      {
        title: 'Remplissez la ligne 16 avec le calcul de la procédure 6',
        body: "La ligne ajoutée porte le résultat du plafond de coûts indirects. C'est elle qui rend visible, dans le tableau de bord, l'excédent de 3 180 USD.",
      },
      {
        title: 'Contrôlez que les lignes insérées ont gardé la liste déroulante et les couleurs',
        body: "Cliquez sur D16 : la flèche de la liste doit apparaître et la couleur du statut doit changer à la sélection.",
      },
    ],
    table: {
      columns: ['Ligne', 'D — Statut', 'E — Preuve documentaire', 'F — Date', 'G — Commentaire'],
      rows: [
        ['11 Nationalite / origine', 'Conforme', "Declaration d'origine du fabricant + pro forma PF-0912", '14/09/2026', 'DA-052 : origine Kenya, annexe 3 respectee'],
        ['12 Seuils PRAG', 'Conforme', 'Grille de cotation DA-049 + PV du 08/09', '09/09/2026', ''],
        ['13 Dossier d\'appel d\'offres', 'Non applicable', '', '', "Aucun appel d'offres ECHO lance depuis juillet ; AO DA-052 prevu le 28/09, a verifier alors"],
        ['14 Visibilite ECHO', 'A verifier', 'Photos + supports de communication', '23/09/2026', 'Panneaux de 2 centres de sante a poser'],
        ['15 Single Form', 'A verifier', 'Brouillon Single Form, accuse a venir', '18/09/2026', 'Brouillon a 60 %, echeance 15/11/2026'],
        ['16 Couts indirects (ajoutee)', 'Non conforme', 'Calcul des couts indirects et budget approuve', '18/09/2026', '8 % au lieu de 7 % : excedent de 3 180 USD, a corriger avant le 15/11'],
      ],
    },
    result: "Six lignes ECHO complètes : deux « Conforme », une « Non applicable » justifiée, deux « A verifier » et une « Non conforme » (ligne 16).",
    tip: "Le statut « Non applicable » est une décision, pas un oubli : écrivez la raison et le déclencheur de réactivation (ici, le lancement de l'appel d'offres de la DA-052), sinon un auditeur la lira comme une ligne que vous n'avez pas voulu traiter.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 4',
    title: 'Renseigner le bloc bailleurs onusiens (lignes 17 à 21)',
    intro: "Pourquoi : le bloc onusien se lit dans l'accord de partenariat, pas dans un règlement public. Chaque ligne se vérifie contre une clause. Entrées : le PCA du PAM et ses annexes, les gabarits de l'agence, la note de diffusion de la clause d'audit.",
    steps: [
      {
        title: 'Relisez la clause citée en colonne C avant de statuer',
        body: "La colonne C renvoie à la clause du PCA ou du FPA (clause de démarrage, annexe procurement, clause reporting, vetting, droits d'audit). Statuez à partir du texte, pas de l'habitude.",
      },
      {
        title: 'Renseignez les cinq lignes avec leurs preuves',
        body: "Les lignes de ce bloc portent sur l'accord et sur la preuve que l'équipe le connaît (note de diffusion, formulaire de vetting) autant que sur les dépenses.",
      },
      {
        title: 'Notez les échéances qui font passer une ligne de « Conforme » à « A verifier »',
        body: "Renouvellement du PCA, nouveau gabarit de rapport : écrivez la date dans le commentaire pour planifier le contrôle suivant.",
      },
    ],
    table: {
      columns: ['Ligne', 'D — Statut', 'E — Preuve documentaire', 'F — Date', 'G — Commentaire'],
      rows: [
        ['17 PCA a jour et signe', 'Conforme', 'PCA 2026 signe le 20/01/2026', '10/09/2026', 'Renouvellement au 01/01/2027 : dossier a deposer avant le 30/11'],
        ['18 Achats conformes au seuil du PCA', 'Conforme', 'Grille de cotation alignee sur le seuil PCA (3 devis, balances 6 300 USD)', '15/09/2026', ''],
        ['19 Rapportage financier', 'A verifier', 'Gabarit de rapport financier agence', '12/09/2026', 'Nouveau gabarit (annexe 6) recu en aout, pas encore utilise ; rapport T3 a rendre le 15/10'],
        ['20 Vetting anti-terrorisme', 'Conforme', 'Formulaire de vetting complete', '10/09/2026', 'A renouveler avec le PCA'],
        ['21 Clause d\'audit connue', 'Conforme', 'Note interne de diffusion de la clause', '10/09/2026', 'Diffusee a l\'equipe finance le 05/02/2026'],
      ],
    },
    result: "Cinq lignes onusiennes complètes : quatre « Conforme » avec preuve, une « A verifier » liée à un gabarit non encore utilisé.",
    pitfall: "Ne pas relire l'accord avant chaque nouveau cycle. Ces accords sont régulièrement mis à jour : une clause modifiée d'une année sur l'autre (un gabarit, un seuil) passe facilement inaperçue, et le statut « Conforme » de l'an dernier devient faux sans que personne ne l'ait remis en cause.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 4 sur 4',
    title: 'Lire le tableau de bord, vérifier les formules à la main et bâtir le plan d\'action',
    intro: "Pourquoi : le tableau de bord se calcule tout seul, mais un chiffre non vérifié n'est pas une preuve. Un type de bailleur passe automatiquement en « NON-CONFORME - ACTION REQUISE » dès qu'au moins un point y est marqué « Non conforme ». Entrées : la checklist complète des lignes 5 à 21.",
    steps: [
      {
        title: "Ouvrez l'onglet « Tableau de bord » et lisez les six colonnes",
        body: "Type de bailleur, Points applicables, Points conformes, % conforme, Points non conformes, Statut global. La ligne « TOTAL GENERAL » additionne les trois blocs.",
      },
      {
        title: 'Recalculez une ligne à la main pour valider les formules',
        actions: [
          "BHA : 6 lignes, aucune « Non applicable » = 6 applicables ; 3 « Conforme » ; 3/6 = 50 % ; 1 « Non conforme » : alerte.",
          "ECHO : 6 lignes dont 1 « Non applicable » = 5 applicables ; 2 « Conforme » ; 2/5 = 40 % ; 1 « Non conforme » : alerte.",
          "PAM : 5 applicables ; 4 « Conforme » ; 80 % ; aucune « Non conforme » : statut « En cours ».",
        ],
      },
      {
        title: 'Transformez chaque ligne non conforme ou « A verifier » en action datée',
        body: "Une action = un responsable, une échéance, une pièce attendue. Le tableau de bord montre où regarder ; le plan d'action dit qui fait quoi avant quelle date.",
      },
    ],
    table: {
      columns: ['Type de bailleur', 'Points applicables', 'Points conformes', '% conforme', 'Points non conformes', 'Statut global'],
      rows: [
        ['1. USAID / BHA (2 CFR 200)', '6', '3', '50 %', '1', 'NON-CONFORME - ACTION REQUISE'],
        ['2. Union Europeenne / ECHO (PRAG)', '5', '2', '40 %', '1', 'NON-CONFORME - ACTION REQUISE'],
        ['3. Bailleurs onusiens (PCA/FPA)', '5', '4', '80 %', '0', 'En cours'],
        ['TOTAL GENERAL', '16', '9', '56 %', '2', 'NON-CONFORME - ACTION REQUISE'],
      ],
    },
    example: {
      title: 'Plan d\'action issu de la checklist (24 septembre 2026)',
      lines: [
        "Ligne 6 (BHA, seuils) : note d'analyse et décision de divulgation — Amani K. avec Marcel O. — 24/09 (procédure 12).",
        "Ligne 7 (BHA, exclusion) : refaire et archiver les captures manquantes — Josué M. — 30/09.",
        "Ligne 10 (BHA, marquage) : photographier les 3 sites restants — Dr Patrice N. — 10/10.",
        "Ligne 14 (ECHO, visibilité) : poser les panneaux des 2 centres — Dr Patrice N. — 15/10.",
        "Ligne 16 (ECHO, indirects) : ramener le taux à 7 % dans le brouillon — Ruth B. — avant la revue du 05/11.",
        "Ligne 15 (Single Form) : finaliser le rapport — Marcel O. — 15/11. Ligne 19 (PAM) : utiliser le nouveau gabarit — Ruth B. — 15/10.",
      ],
    },
    result: "Un tableau de bord lu et recalculé (16 points applicables, 9 conformes, 56 %, 2 non conformes), et sept actions datées avec un responsable.",
    pitfall: "Montrer le seul pourcentage global à la direction. Un total de 56 % masque que deux blocs sur trois sont en alerte rouge : lisez toujours le statut par bailleur, puis le total.",
  },

  // ── Procédure 10 — Reporting ──
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 1 sur 3',
    title: "Extraire les obligations de reporting de chaque accord dans un calendrier",
    intro: "Pourquoi : chaque bailleur a son format et son échéancier, et un retard ou un rapport erroné a des conséquences contractuelles. Entrées : l'article « rapports » de chaque accord, les gabarits fournis, la ligne 15 et la ligne 19 de la checklist.",
    steps: [
      {
        title: "Ouvrez l'article sur les rapports de chaque accord",
        actions: [
          "1. BHA : rapports financiers et rapports de performance, selon l'échéancier de l'accord.",
          "2. ECHO : rapport intermédiaire et final au format Single Form, aux échéances de la convention.",
          "3. PAM : rapport financier selon le gabarit de l'annexe 6 du PCA.",
          "4. Fonds Meridian : rapport selon la convention.",
        ],
      },
      {
        title: 'Relevez six informations par rapport',
        body: "Type de rapport, période couverte, échéance, format ou gabarit, destinataire, conséquence prévue en cas de retard.",
      },
      {
        title: 'Classez les échéances par ordre chronologique dans un calendrier unique',
        body: "Un calendrier par base, pas un par bailleur : c'est la superposition des échéances qui fait le risque.",
      },
    ],
    table: {
      columns: ['Échéance', 'Bailleur', 'Rapport', 'Période couverte', 'Format'],
      rows: [
        ['15/10/2026', 'PAM', 'Rapport financier T3', '1er juillet – 30 septembre 2026', 'Gabarit annexe 6 du PCA'],
        ['30/10/2026', 'BHA', 'Rapport financier et rapport de performance T3', '1er juillet – 30 septembre 2026', "Format de l'accord (SF-425 pour la partie financière)"],
        ['31/10/2026', 'Fonds Meridian', 'Rapport semestriel', '1er avril – 30 septembre 2026', 'Gabarit de la convention'],
        ['15/11/2026', 'ECHO', 'Rapport intermédiaire', '1er décembre 2025 – 31 août 2026', 'Single Form'],
        ['30/11/2026', 'PAM', 'Dossier de renouvellement du PCA 2027', '—', "Formulaire de l'agence + vetting"],
        ['31/08/2027', 'ECHO', 'Rapport final', "Toute la durée de l'action", 'Single Form, trois mois après la fin'],
      ],
    },
    result: "Un calendrier unique de six échéances pour la base de Goma, avec format, période et destinataire.",
    pitfall: "Construire le calendrier à partir des dates que « tout le monde connaît ». Les dates se lisent dans l'article de l'accord : une échéance modifiée par avenant n'apparaît que si quelqu'un a relu le texte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 2 sur 3',
    title: 'Rétro-planifier chaque rapport et brancher la revue de conformité',
    intro: "Pourquoi : un rapport préparé la semaine de l'échéance ne laisse pas de temps pour corriger. La revue de conformité doit se placer assez tôt pour que les corrections se fassent AVANT le dépôt. Entrées : le calendrier de l'étape 1.",
    steps: [
      {
        title: 'Posez les jalons internes à rebours de l\'échéance',
        actions: [
          "J-30 : clôture comptable de la période.",
          "J-20 : premier brouillon.",
          "J-10 : revue de conformité avec la checklist (seuils, origine, indirects, coûts inéligibles retirés).",
          "J-5 : validation par le Directeur Pays et le siège.",
          "J-2 : dépôt, pour garder une marge en cas de problème de connexion.",
        ],
      },
      {
        title: 'Calculez les dates dans un tableur',
        body: "Dans Excel : =échéance-30 pour la clôture, =échéance-20 pour le brouillon, et ainsi de suite. Mettez en forme la colonne en jj/mm/aaaa.",
      },
      {
        title: 'Alignez les lignes de la checklist avec les jalons',
        body: "Les lignes 15 (Single Form) et 19 (rapportage PAM) passent à « Conforme » seulement quand l'accusé de réception du dépôt est archivé.",
      },
    ],
    table: {
      columns: ['Jalon', 'Règle', 'Single Form ECHO (15/11/2026)', 'Rapport BHA (30/10/2026)'],
      rows: [
        ['Clôture comptable', 'J-30', '16/10/2026', '30/09/2026'],
        ['Premier brouillon', 'J-20', '26/10/2026', '10/10/2026'],
        ['Revue de conformité', 'J-10', '05/11/2026', '20/10/2026'],
        ['Validation DP et siège', 'J-5', '10/11/2026', '25/10/2026'],
        ['Dépôt', 'J-2', '13/11/2026', '28/10/2026'],
      ],
    },
    result: "Un calendrier rétro-planifié par rapport, où la revue de conformité se tient dix jours avant le dépôt.",
    tip: "Pour un rapport trimestriel dont la clôture tombe le dernier jour de la période, les jalons J-30 et J-20 sont déjà dépassés : raccourcissez-les en gardant au moins sept jours entre la revue de conformité et le dépôt.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 3 sur 3',
    title: 'Contrôler le contenu du rapport avant dépôt et archiver la preuve de dépôt',
    intro: "Pourquoi : un rapport financier erroné coûte plus qu'un rapport en retard : il peut faire écarter des coûts. Entrées : le brouillon du rapport, le grand livre de la période, les résultats des procédures 3 à 6.",
    steps: [
      {
        title: 'Rapprochez le total du rapport du grand livre',
        actions: [
          "1. Reprenez le total des dépenses du rapport et celui du grand livre analytique sur la même période.",
          "2. Expliquez ligne par ligne tout écart ; un écart inexpliqué bloque le dépôt.",
        ],
      },
      {
        title: 'Contrôlez cinq points de conformité',
        actions: [
          "Coupure de période : aucune dépense datée hors période.",
          "Coûts inéligibles retirés (dossiers « Non conforme » en cours de traitement).",
          "Coûts indirects calculés sur la bonne base (procédure 6).",
          "Taux de change : méthode documentée et constante.",
          "Format : gabarit ou formulaire exigé par le bailleur.",
        ],
      },
      {
        title: 'Archivez la preuve de dépôt et reportez-la dans la checklist',
        body: "L'accusé de réception ou la capture d'envoi est la pièce de la colonne E de la ligne 15 (Single Form) ou de la ligne 19 (PAM).",
      },
    ],
    example: {
      title: 'Rapprochement du rapport BHA du T3 (brouillon du 10 octobre)',
      lines: [
        "Total du brouillon : 218 700 USD. Grand livre analytique, 1er juillet – 30 septembre : 214 600 USD. Écart : 4 100 USD.",
        "Explication : une facture datée du 03/10/2026 a été imputée au T3 par erreur. Elle est retirée, l'écart est ramené à 0.",
        "Coûts à retirer ou à traiter avant le dépôt : 18 000 USD des BC-044 et BC-045 (décision de divulgation de la procédure 12), indirects à recalculer sur les MTDC du trimestre, selon la méthode de la procédure 6.",
      ],
    },
    result: "Un rapport rapproché du grand livre à zéro écart inexpliqué, sans coût non conforme non traité, et un accusé de dépôt archivé.",
    pitfall: "Déposer le rapport avant d'avoir décidé quoi faire d'un coût non conforme. Un coût douteux déposé dans un rapport financier est un coût imputé : il passe du niveau « observation » au niveau « coût contesté » de l'échelle des conséquences.",
  },

  // ── Procédure 11 — Restrictions : approbation préalable, marquage ──
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 1 sur 3',
    title: "Recenser les restrictions et les approbations préalables de chaque accord",
    intro: "Pourquoi : certains achats ou actions exigent l'accord écrit du bailleur AVANT d'être engagés ; sans lui, le coût devient inéligible quelle que soit la qualité de la mise en concurrence. Entrées : les clauses de restrictions de chaque accord, le plan de marquage, la liste des dépenses prévues dans les 90 jours.",
    steps: [
      {
        title: 'Cherchez les trois familles de clauses de restriction',
        actions: [
          "1. Achats soumis à approbation préalable : véhicules, équipement lourd (2 CFR 200.439 et clause de l'accord).",
          "2. Plafonds de dépenses : par exemple frais de représentation, achat de véhicules.",
          "3. Flexibilité budgétaire : au-delà de quel écart entre lignes l'accord exige une autorisation.",
        ],
      },
      {
        title: 'Recopiez chaque restriction avec sa condition et son délai de réponse',
        body: "Quand le texte ne donne pas de délai, demandez au bailleur son délai habituel de réponse.",
      },
      {
        title: 'Croisez avec la liste des dépenses des 90 prochains jours',
        body: "Repérez les dépenses qui déclenchent une restriction. Ce croisement transforme une liste de clauses en alertes datées.",
      },
    ],
    table: {
      columns: ['Bailleur', 'Restriction (accords fictifs)', 'Condition', 'Dépense concernée'],
      rows: [
        ['BHA', "Véhicule ou équipement lourd", "Approbation écrite préalable de l'agreement officer ; dérogation d'origine pour tout véhicule (annexe 2)", 'DA-031 : 4x4, 38 500 USD'],
        ['BHA', 'Frais de représentation', "Plafond fixé par l'accord", 'Aucune dépense prévue'],
        ['ECHO', 'Virement entre lignes budgétaires', "Accord préalable au-delà de 10 % de la ligne (clause de flexibilité)", 'Aucun virement prévu'],
        ['PAM', 'Sous-traitance des activités', "Accord préalable de l'agence à confirmer dans le PCA", 'Aucune sous-traitance prévue'],
      ],
    },
    result: "Un tableau des restrictions de la base, croisé avec les dépenses des 90 jours à venir : une seule alerte, la DA-031.",
    pitfall: "Considérer que l'approbation préalable est une formalité qu'on régularise après coup. Pour un coût soumis à approbation, l'absence d'accord préalable rend en général la dépense inéligible, même si le prix est bon et la mise en concurrence irréprochable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 2 sur 3',
    title: "Rédiger et suivre la demande d'approbation préalable",
    intro: "Pourquoi : la réponse du bailleur peut prendre plusieurs semaines, et aucune commande ne peut partir avant. Entrées : la fiche de la DA-031, la décision de procédure (appel d'offres formel), la dérogation d'origine exigée pour les véhicules.",
    steps: [
      {
        title: 'Rédigez la demande en sept rubriques',
        actions: [
          "1. Référence de l'accord et de la ligne budgétaire.",
          "2. Objet et justification opérationnelle.",
          "3. Montant estimé et conformité au budget approuvé.",
          "4. Procédure de mise en concurrence prévue.",
          "5. Origine du bien et demande de dérogation si nécessaire.",
          "6. Calendrier de commande souhaité.",
          "7. Interlocuteur de HSGL.",
        ],
      },
      {
        title: "Faites envoyer la demande par l'interlocuteur officiel du bailleur",
        body: "Marcel O. écrit à l'agreement officer, avec copie à Joseph T. Archivez l'envoi dans le dossier, sous 06_Approbations.",
      },
      {
        title: "Suivez la réponse sans rien engager",
        actions: [
          "Relancez à J+7 si aucune réponse.",
          "Interdisez toute commande ou tout engagement verbal avant la réponse écrite.",
          "Archivez la réponse, puis mettez à jour les lignes 5 et 9 de la checklist.",
        ],
      },
    ],
    example: {
      title: "Demande du 10 septembre 2026 et réponse du 22 septembre 2026",
      lines: [
        "« Objet : demande d'approbation préalable — achat d'un véhicule 4x4 de supervision, accord n° HSGL-NU-2026, ligne 3.2, 38 500 USD budgétés. Justification : supervision de 36 centres de nutrition répartis sur trois zones de santé. Procédure : appel d'offres formel (règle interne, plus stricte que l'annexe 4). Origine : demande de dérogation d'origine au titre de l'annexe 2. Calendrier : commande souhaitée avant le 15 octobre. »",
        "Réponse du 22 septembre : approbation de l'achat dans la limite de 38 500 USD, dérogation d'origine accordée pour la marque et le modèle cités.",
        "Délai de réponse : 12 jours. Règle d'organisation : prévoir au moins trois semaines de délai pour toute demande d'approbation.",
      ],
    },
    result: "Une demande envoyée par l'interlocuteur officiel, une approbation écrite archivée, et les lignes 5 et 9 de la checklist à « Conforme ».",
    tip: "Joignez à la demande la fiche de règles et le tableau comparatif de la procédure : en montrant que vous avez déjà appliqué la règle la plus restrictive, vous réduisez le nombre d'allers-retours avec l'agreement officer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 3 sur 3',
    title: 'Contrôler le marquage et la visibilité sur le terrain',
    intro: "Pourquoi : le marquage USAID et la charte de visibilité ECHO sont des obligations contractuelles qui se contrôlent sur des sites réels, pas dans un bureau. Entrées : le plan de marquage de l'accord BHA (ADS 320), les ECHO Visibility Guidelines, la liste des sites actifs.",
    steps: [
      {
        title: 'Relevez les exigences précises de chaque bailleur',
        actions: [
          "1. BHA : plan de marquage (logos, lieux, supports) de l'accord, selon l'ADS 320.",
          "2. ECHO : charte de visibilité (logos, mentions obligatoires) pour le matériel et la communication.",
          "3. Notez les cas où un marquage n'est pas requis (sécurité, protection) et qui l'autorise.",
        ],
      },
      {
        title: 'Constituez un échantillon de sites et visitez-les',
        actions: [
          "Prenez cinq sites actifs, en variant les zones et les bailleurs.",
          "Sur chaque site, photographiez le marquage avec la date et l'heure visibles.",
          "Comparez chaque photo à l'exigence écrite.",
        ],
      },
      {
        title: 'Notez les écarts et planifiez la correction',
        body: "Un écart de marquage se corrige vite (panneau, autocollant) : fixez une date et un responsable, puis refaites la photo après correction.",
      },
    ],
    table: {
      columns: ['Site', 'Bailleur(s)', 'Marquage observé', 'Conforme ?'],
      rows: [
        ['Centre de santé de Kibati', 'BHA', 'Panneau et affiche de nutrition', 'Oui'],
        ['Site de distribution de Mugunga', 'BHA', 'Bâche de distribution sans logo', 'Non'],
        ['Centre de santé de Katale', 'ECHO', 'Panneau posé', 'Oui'],
        ['Centre de santé de Karisimbi', 'ECHO', 'Aucun panneau', 'Non'],
        ['Centre de santé de Ndosho', 'ECHO', 'Aucun panneau', 'Non'],
      ],
    },
    result: "Cinq sites contrôlés avec photos datées : deux conformes, trois à corriger ; lignes 10 (BHA) et 14 (ECHO) à « A verifier » avec un commentaire factuel.",
    pitfall: "Contrôler le marquage sur des photos envoyées par l'équipe terrain. Une photo reçue ne prouve ni la date, ni le lieu, ni l'état actuel du site : prenez-les vous-même ou exigez la date et la localisation dans l'image.",
  },

  // ── Procédure 12 — Non-conformité : note d'analyse et divulgation ──
  {
    type: 'process',
    stepLabel: 'Procédure 12 — Étape 1 sur 7',
    title: "Ouvrir la note et remplir la section 1 : identification de l'anomalie",
    intro: "Pourquoi : dès qu'un point n'est pas respecté malgré la vérification préalable, il faut documenter la situation et engager la correction avant que le bailleur ne la découvre lui-même. La note tient en une page. Entrées : la ligne 6 de la checklist « Non conforme », le dossier BC-044 et BC-045, note-analyse-risque-non-conformite.docx.",
    steps: [
      {
        title: 'Enregistrez une copie de travail et repérez la structure',
        actions: [
          "1. Ouvrez note-analyse-risque-non-conformite.docx, puis Enregistrer sous : 2026-09-24_Note_risque_BC044-045.docx.",
          "2. Repérez le titre « NOTE D'ANALYSE — RISQUE DE NON-CONFORMITÉ BAILLEUR » et la phrase d'objectif.",
          "3. Repérez les six sections numérotées : 1 Identification, 2 Règle bailleur, 3 Analyse du risque, 4 Conséquences, 5 Actions, 6 Décision de divulgation.",
        ],
      },
      {
        title: 'Remplissez les trois champs de la section 1',
        actions: [
          "« Projet et bailleur concerné » : projet, bailleur et numéro d'accord.",
          "« Date de constat » : la date à laquelle le risque a été identifié, pas la date de la dépense.",
          "« Personne ayant identifié le risque (nom, fonction) ».",
        ],
      },
    ],
    example: {
      title: 'Section 1 telle que saisie',
      lines: [
        "Projet et bailleur concerné : Nutrition d'urgence Nord-Kivu — BHA (USAID), accord n° HSGL-NU-2026, base de Goma.",
        "Date de constat : 21/09/2026 (revue de conformité, test des seuils par Fatou S. et Amani K.).",
        "Personne ayant identifié le risque : Amani K., auditrice interne, avec Fatou S., auditrice interne senior.",
      ],
    },
    result: "Section 1 complète : le projet, le bailleur, la date de constat et la personne qui a identifié le risque, sans interprétation.",
    pitfall: "Inscrire en « Date de constat » la date de la commande (14 août). Cette date sert à apprécier la rapidité de votre réaction après la découverte : confondez-la avec la date de la dépense et vous faites croire que vous avez laissé traîner trente-huit jours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 12 — Étape 2 sur 7',
    title: 'Section 2 : citer la règle bailleur applicable et sa source contractuelle',
    intro: "Pourquoi : une note sans règle précise est une opinion. Le décideur doit pouvoir vérifier la règle dans le texte, à l'article cité. Entrées : l'accord de financement et ses annexes, la fiche de la procédure 1, le règlement applicable.",
    steps: [
      {
        title: 'Remplissez « Référence réglementaire précise »',
        body: "Le champ donne en exemple « 2 CFR 200.317, PRAG annexe éligibilité, clause PCA/FPA ». Citez l'article exact, et non le nom général du règlement.",
      },
      {
        title: 'Remplissez « Source contractuelle (accord de financement, numéro d\'article) »',
        body: "Citez l'accord, l'article et l'annexe. Si la règle interne de HSGL est plus stricte que celle du bailleur, citez-la en plus, séparément.",
      },
      {
        title: 'Relisez avec un test simple',
        actions: [
          "Un lecteur qui n'a jamais ouvert l'accord peut-il retrouver la règle en moins de deux minutes ?",
          "Les montants des seuils cités sont-ils ceux de la version en vigueur à la date de la dépense ?",
        ],
      },
    ],
    example: {
      title: 'Section 2 telle que saisie',
      lines: [
        "Référence réglementaire précise : 2 CFR 200.320 (méthodes d'acquisition : micro-achat, acquisition simplifiée, appel d'offres formel) ; 2 CFR 200.213 (vérification des listes d'exclusion) ; 2 CFR 200.318 (conflit d'intérêt dans la sélection).",
        "Source contractuelle : accord BHA n° HSGL-NU-2026, article 7.2 (interdiction de fractionner un besoin) et annexe 4 (grille de seuils : trois cotations écrites de 10 000 à 250 000 USD). Règle interne plus stricte : procédure achats HSGL v2, appel d'offres formel au-delà de 10 000 USD.",
      ],
    },
    result: "Section 2 complète : règle citée à l'article près, source contractuelle identifiée, règle interne plus stricte mentionnée à part.",
    tip: "Citez toujours la règle qui s'applique à la date de la dépense, pas celle en vigueur à la date de la note. Si l'accord a été modifié entre-temps, mentionnez l'avenant et sa date.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 12 — Étape 3 sur 7',
    title: "Section 3 : décrire l'écart, chiffrer la dépense, mesurer s'il est isolé ou systématique",
    intro: "Pourquoi : la description factuelle est la partie de la note qui résistera à toute contestation. Elle ne contient ni jugement ni hypothèse sur l'intention. Entrées : le dossier, les tests de la procédure 3, l'extraction des bons de commande.",
    steps: [
      {
        title: "Remplissez « Description factuelle de l'écart constaté »",
        actions: [
          "1. Dites ce qui s'est passé : quoi, qui, quand, combien.",
          "2. Dites ce que la règle exigeait.",
          "3. Dites ce qu'il y a au dossier, avec les références des pièces.",
          "Aucun adjectif (grave, négligent), aucune hypothèse sur l'intention.",
        ],
      },
      {
        title: "Remplissez « Dépense ou coût concerné, et montant »",
        body: "Le montant exact, la référence des pièces, la ligne budgétaire et le trimestre du rapport concerné.",
      },
      {
        title: "Remplissez « Caractère isolé ou systématique » après avoir testé les autres dossiers",
        actions: [
          "Appliquez le même test à toute la population de la période (ici tous les bons de commande BHA depuis juillet).",
          "Notez le nombre de dossiers testés et le nombre d'autres cas trouvés.",
          "Listez les dossiers restant à vérifier.",
        ],
      },
    ],
    example: {
      title: 'Section 3 telle que saisie',
      lines: [
        "Description factuelle : un besoin unique de kits de pesée et de mesure pour 36 centres de nutrition (DA-2026-077 du 10/08/2026, 18 000 USD) a été commandé en deux bons de commande au même fournisseur, Kivu Équipements SARL : BC-044 du 14/08/2026 (8 900 USD) et BC-045 du 20/08/2026 (9 100 USD). Une seule offre figure au dossier, sans analyse comparative ni PV de comité. La règle exige trois cotations écrites (annexe 4) et un appel d'offres formel selon la procédure interne. Aucune vérification SAM.gov n'était archivée avant l'engagement ; elle a été faite le 21/09/2026 (aucune exclusion active).",
        "Dépense ou coût concerné, et montant : 18 000 USD, ligne 3.1 « Matériel de dépistage et de pesée », imputée au rapport du trimestre juillet – septembre, soit 12,6 % des coûts directs cumulés à fin août (142 800 USD) et 1,5 % de l'accord (1 200 000 USD).",
        "Caractère isolé ou systématique : sur les 41 bons de commande BHA émis depuis juillet, le test « même fournisseur, même objet, moins de 30 jours » ne détecte qu'un seul cas. Autres dossiers à vérifier : 2 fournisseurs BHA sans capture SAM.gov, dont Transitaire Nyiragongo Cargo.",
      ],
    },
    result: "Section 3 complète : un écart décrit en faits, un montant précis, un test de population qui borne l'étendue du problème.",
    pitfall: "Écrire « Le logisticien a volontairement fractionné la commande ». C'est une accusation d'intention sans preuve ; la note décrit les faits, et l'intention, si elle doit être examinée, relève d'une enquête menée par la fonction compétente, pas d'une note de conformité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 12 — Étape 4 sur 7',
    title: 'Section 4 : évaluer les conséquences potentielles de façon réaliste',
    intro: "Pourquoi : le décideur arbitre sur des conséquences chiffrées et graduées, pas sur « ça peut être grave ». Un manquement n'entraîne pas qu'un avertissement : il peut aller jusqu'à l'inéligibilité du coût, le remboursement au bailleur, voire une réduction de la confiance pour les financements futurs. Entrées : l'échelle des conséquences, le montant de la section 3.",
    steps: [
      {
        title: "Remplissez « Risque d'inéligibilité du coût »",
        body: "Évaluez le niveau (faible, moyen, élevé), sur quel montant, et les éléments qui l'atténuent (par exemple un prix raisonnable démontré) ou l'aggravent (absence de toute mise en concurrence).",
      },
      {
        title: "Remplissez « Risque de remboursement exigé par le bailleur »",
        body: "Précisez dans quelles conditions : si le coût est imputé au rapport puis écarté, le remboursement porte sur les fonds déjà reçus ; si le coût n'est jamais imputé, il n'y a rien à rembourser.",
      },
      {
        title: "Remplissez « Impact potentiel sur de futurs financements avec ce bailleur »",
        body: "Évaluez de façon réaliste : relation avec l'agreement officer, conditions renforcées, impact en cas de récidive. Évitez les scénarios catastrophe qui ne résisteraient pas à une relecture.",
      },
    ],
    example: {
      title: 'Section 4 telle que saisie',
      lines: [
        "Risque d'inéligibilité du coût : MOYEN À ÉLEVÉ sur 18 000 USD. Une seule offre, aucun PV et aucune vérification d'exclusion avant engagement : la procédure est insuffisante pour un besoin de 18 000 USD. Atténuant : le prix peut être comparé a posteriori à des offres du marché, et aucune exclusion n'a été trouvée.",
        "Risque de remboursement : ÉLEVÉ si les 18 000 USD sont imputés au rapport du 30/10/2026 puis écartés ; NUL si le coût n'est pas imputé et couvert par les fonds non affectés de HSGL.",
        "Impact sur les financements futurs : MODÉRÉ. Premier trimestre de l'accord BHA, premier financement de ce bailleur pour HSGL. Une divulgation spontanée accompagnée d'un plan de correction est de nature à préserver la confiance ; une détection par le bailleur lors de sa revue de janvier 2027 aggraverait le risque.",
      ],
    },
    result: "Section 4 complète : trois risques évalués par niveau, avec le montant concerné et ce qui les atténue ou les aggrave.",
    tip: "Quantifiez toujours en pourcentage de l'accord et du trimestre (1,5 % et 12,6 % ici). Un montant brut de 18 000 USD effraie ou rassure sans repère : le pourcentage donne la mesure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 12 — Étape 5 sur 7',
    title: 'Section 5 : proposer l\'action immédiate et le renforcement de contrôle',
    intro: "Pourquoi : une note qui décrit un problème sans proposer de solution renvoie le travail au décideur. Deux volets : corriger le dossier, puis empêcher la récidive. Entrées : les sections 3 et 4, l'état des fonds non affectés de la base.",
    steps: [
      {
        title: "Remplissez « Action immédiate proposée (correction, mise en conformité du dossier) »",
        actions: [
          "1. Compléter ce qui peut l'être légitimement : demander trois offres du marché datées d'aujourd'hui pour documenter le caractère raisonnable du prix, jamais antidatées.",
          "2. Préparer l'option de retrait : ne pas imputer le coût au rapport tant que le bailleur n'a pas répondu, ou le financer sur fonds non affectés.",
          "3. Archiver la vérification d'exclusion tardive avec sa vraie date.",
        ],
      },
      {
        title: "Remplissez « Renforcement de contrôle proposé pour éviter la récurrence »",
        actions: [
          "Un contrôle qui s'exécute AVANT la commande (blocage), pas un rappel de bonne volonté.",
          "Un responsable, une date, une pièce de preuve du contrôle.",
        ],
      },
      {
        title: "Vérifiez que chaque action se rattache à un manquement de la section 3",
        body: "Une action sans manquement correspondant est un souhait ; un manquement sans action est un oubli.",
      },
    ],
    example: {
      title: 'Section 5 telle que saisie',
      lines: [
        "Action immédiate proposée : (1) obtenir trois offres comparables de fournisseurs de Goma, datées du jour, pour établir a posteriori le caractère raisonnable du prix des kits ; (2) ne pas imputer les 18 000 USD au rapport du 30/10 avant la réponse du BHA, et préparer leur financement sur fonds non affectés si le bailleur ne ratifie pas ; (3) classer la vérification SAM.gov du 21/09 avec sa date réelle ; (4) tester les 2 fournisseurs BHA sans capture SAM.gov avant toute nouvelle commande.",
        "Renforcement de contrôle : (a) aucun bon de commande BHA n'est signé sans fiche « bailleur — ligne — règles » et capture SAM.gov au dossier (contrôle de la finance avant signature, à partir du 01/10) ; (b) cumul mensuel des besoins par fournisseur dans l'outil d'achats ; (c) atelier de deux heures pour le Logistics Officer et l'assistante logistique sur la méthode de vérification avant dépense ; (d) revue mensuelle de la checklist par Ruth B. avec présentation au Directeur Pays.",
      ],
    },
    result: "Section 5 complète : quatre actions immédiates et quatre contrôles préventifs, chacun rattaché à un manquement identifié.",
    pitfall: "Proposer d'« obtenir les devis manquants » sans préciser qu'ils seront datés d'aujourd'hui. Des devis antidatés transformeraient une erreur de méthode en falsification de pièces : c'est la pire décision possible, et elle est irréversible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 12 — Étape 6 sur 7',
    title: 'Section 6 : décider de la divulgation proactive, justifier, faire valider',
    intro: "Pourquoi : la question centrale est la suivante : faut-il informer le bailleur de manière proactive avant que le point ne soit détecté lors d'une vérification bailleur, ou attendre de voir si la question est soulevée ? La réponse se justifie en une ou deux phrases dans le champ prévu. Entrées : les sections 1 à 5, les clauses d'information de l'accord.",
    steps: [
      {
        title: 'Passez les cinq questions de décision',
        actions: [
          "1. L'accord ou le règlement impose-t-il d'informer le bailleur de ce type de manquement ?",
          "2. Y a-t-il un soupçon de fraude, de corruption ou de lien avec une partie exclue ?",
          "3. Le coût est-il déjà imputé, ou sur le point de l'être, dans un rapport ?",
          "4. Une vérification, un audit ou un rapport du bailleur est-il proche ?",
          "5. L'écart est-il isolé et déjà corrigé, sans obligation d'informer ?",
        ],
      },
      {
        title: 'Remplissez « Décision (Oui / Non) et justification »',
        body: "Écrivez « Oui » ou « Non », puis une à deux phrases qui s'appuient sur les réponses. Un « Non » doit être aussi argumenté qu'un « Oui ».",
      },
      {
        title: "Remplissez « Validé par (nom, fonction) » puis la dernière ligne « Rédigé par » et « Date »",
        body: "La décision de divulgation n'est pas la vôtre : elle est validée par le Directeur Pays, après avis du siège pour les bailleurs. Remplissez ensuite « Rédigé par (nom, fonction) » et « Date », et vérifiez que la note tient sur une page.",
      },
    ],
    table: {
      columns: ['Question', 'Réponse pour BC-044 / BC-045', 'Penche vers'],
      rows: [
        ["Obligation d'informer", "L'accord (article 14, fictif) impose d'informer l'agreement officer de tout manquement aux règles d'acquisition", 'Oui'],
        ['Soupçon de fraude ou de partie exclue', 'Aucun soupçon à ce stade ; vérification SAM.gov sans résultat', 'Neutre'],
        ['Coût imputé ou à imputer', 'À imputer dans le rapport du 30/10/2026', 'Oui'],
        ['Détection probable', "Revue de mi-parcours du bailleur en janvier 2027, avec sondage d'achats", 'Oui'],
        ['Écart isolé et corrigé', "Isolé, mais non corrigeable rétroactivement : la mise en concurrence n'a pas eu lieu", 'Oui'],
      ],
    },
    example: {
      title: 'Section 6 telle que saisie',
      lines: [
        "Décision : OUI. Justification : l'accord impose d'informer le bailleur des manquements aux règles d'acquisition ; les 18 000 USD seraient imputés au rapport du 30/10 et une revue du bailleur est prévue en janvier 2027. Informer avant le dépôt, avec un plan de correction, protège la relation ; attendre transformerait une erreur de méthode en défaut de transparence.",
        "Validé par : Joseph T., Directeur Pays, après avis de Marcel O., Responsable des subventions — 24/09/2026. Rédigé par : Amani K., auditrice interne — 24/09/2026.",
      ],
    },
    result: "Section 6 complète : une décision « Oui » justifiée en deux phrases, validée par le Directeur Pays, la note tenant sur une page.",
    pitfall: "Décider seul(e) de divulguer ou de taire. Un auditeur interne recommande et documente ; la décision appartient à la direction avec le siège. L'inverse (taire une obligation contractuelle d'informer parce que « le montant est faible ») expose l'organisation à une sanction plus lourde que le manquement initial.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 12 — Étape 7 sur 7',
    title: 'Informer le bailleur : rédiger le courrier, l\'envoyer par le bon canal, suivre la réponse',
    intro: "Pourquoi : la valeur d'une divulgation tient à sa qualité : faits sobres, correction déjà engagée, proposition claire. Entrées : la note validée, la décision « Oui », le nom de l'interlocuteur officiel du bailleur.",
    steps: [
      {
        title: 'Rédigez le courrier en cinq paragraphes',
        actions: [
          "1. Objet et référence de l'accord.",
          "2. Les faits en trois phrases, sans interprétation.",
          "3. La règle concernée, avec l'article.",
          "4. Ce que l'organisation a déjà fait.",
          "5. Ce qu'elle propose et à quelle date elle fera un retour.",
        ],
      },
      {
        title: "Faites envoyer le courrier par l'interlocuteur officiel",
        body: "Marcel O. l'envoie à l'agreement officer, avec copie à Joseph T. Vous ne contactez jamais directement le bailleur : la décision et le canal appartiennent à l'organisation.",
      },
      {
        title: 'Suivez la réponse et mettez à jour la checklist',
        actions: [
          "Notez la date d'envoi et la date prévue du retour dans le plan d'action.",
          "À la réponse, archivez-la et reportez la décision dans la ligne concernée de la checklist (colonne G).",
          "Si le bailleur refuse la ratification : retirez le coût du rapport et financez-le sur fonds non affectés.",
        ],
      },
    ],
    example: {
      title: 'Courrier envoyé le 25 septembre 2026 par Marcel O.',
      lines: [
        "« Objet : information sur un manquement aux règles d'acquisition — accord n° HSGL-NU-2026. Dans le cadre d'une revue de conformité interne, nous avons constaté que des kits de pesée (besoin unique de 18 000 USD) ont été commandés en deux bons de commande au même fournisseur, en août 2026, avec une seule offre, contrairement à l'annexe 4 et à l'article 7.2. Aucune exclusion n'a été trouvée sur SAM.gov. Nous avons suspendu l'imputation de ce coût, obtenu trois offres comparables du marché pour documenter le prix, et renforcé nos contrôles avant commande. Nous vous proposons soit de ratifier la dépense, soit de la retirer du rapport du 30 octobre, et nous reviendrons vers vous le 9 octobre. »",
      ],
    },
    result: "Un courrier envoyé par le canal officiel avant le dépôt du rapport, et un retour planifié ; la ligne 6 de la checklist porte la mention du courrier.",
    pitfall: "Envoyer le courrier sans avoir déjà engagé la correction. Un bailleur qui lit « nous allons voir ce que nous pouvons faire » comprend que l'organisation découvre le sujet ; un bailleur qui lit « nous avons suspendu l'imputation et obtenu trois offres » comprend que le dispositif fonctionne.",
  },

  // ───────────────────────── 6. Cas complet résolu ─────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Kits de pesée fractionnés, Goma » : partie 1, l'analyse",
    scenario: "Le 21 septembre 2026, lors de la revue de conformité de Goma, Fatou S. teste le respect des seuils sur les bons de commande BHA émis depuis juillet. Elle relève deux bons de commande au même fournisseur, Kivu Équipements SARL, à six jours d'écart : BC-044 (14 août, 8 900 USD) et BC-045 (20 août, 9 100 USD), pour des kits de pesée et de mesure destinés à 36 centres de nutrition. Le dossier ne contient qu'une offre par bon de commande, aucun PV de comité d'achats et aucune capture SAM.gov. Les deux bons sont payés (25 et 31 août) et seront imputés au rapport BHA du 30 octobre. Livrable 1 : l'analyse du manquement.",
    steps: [
      {
        title: 'Raisonnement 1 — Partir des faits datés, sans qualification',
        body: "On aligne les pièces dans l'ordre chronologique : DA-2026-077 du 10 août (18 000 USD), BC du 14 et du 20, paiements des 25 et 31, constat du 21 septembre. On ne parle ni d'intention ni de faute.",
      },
      {
        title: 'Raisonnement 2 — Mesurer le BESOIN, pas les commandes',
        body: "Quatre réponses « oui » au test anti-fractionnement : même fournisseur, une seule DA, chaque montant à moins de 15 % sous 10 000 USD, mêmes demandeur et valideur. Le montant à comparer aux seuils est donc 18 000 USD, qui relève du palier des trois cotations écrites (BHA) et de l'appel d'offres formel (HSGL).",
      },
      {
        title: 'Raisonnement 3 — Retenir la règle la plus restrictive',
        body: "Le BHA exige trois cotations pour 18 000 USD ; la procédure HSGL exige un appel d'offres formel au-delà de 10 000 USD. La règle déterminante est l'appel d'offres formel. Même sans fractionnement, chaque bon à 8 900 USD aurait exigé trois devis (RFQ) : une offre unique est insuffisante dans les deux lectures.",
      },
      {
        title: 'Raisonnement 4 — Séparer trois manquements et en graduer la portée',
        body: "Seuil et fractionnement (portée forte sur 18 000 USD), vérification d'exclusion non faite avant engagement (portée moyenne, aucune exclusion trouvée ensuite), absence de PV et de déclaration de conflit d'intérêt (portée moyenne, preuve de traçabilité). Les trois ne se jugent pas de la même façon.",
      },
    ],
    table: {
      columns: ['Manquement', 'Règle', 'Preuve du manquement', 'Gravité'],
      rows: [
        ['Besoin de 18 000 USD commandé en deux BC, une seule offre', "Accord art. 7.2 et annexe 4 ; procédure HSGL v2 ; 2 CFR 200.320", 'DA-2026-077, BC-044 et BC-045, dossier à une offre', 'Forte'],
        ['Aucune vérification SAM.gov avant engagement', '2 CFR 200.213', "Absence de capture au dossier ; capture du 21/09 : aucune exclusion active", 'Moyenne'],
        ["Aucun PV de comité d'achats ni déclaration de conflit d'intérêt", '2 CFR 200.318 ; procédure HSGL v2', 'Dossier incomplet', 'Moyenne'],
      ],
    },
    result: "Livrable 1 terminé : trois manquements distincts, documentés par des pièces, avec la règle déterminante et un niveau de gravité pour chacun.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — partie 2, la note d'analyse de risque remplie",
    scenario: "Livrable 2 : la note d'une page, remplie section par section dans note-analyse-risque-non-conformite.docx. La section 3 est la partie qui résiste le mieux à la contestation : elle ne contient que des faits.",
    steps: [
      {
        title: 'Raisonnement — Une note qui se lit en trois minutes et se vérifie en dix',
        body: "Chaque affirmation de la note renvoie à une pièce (DA, BC, capture, article de l'accord). Les sections 4 et 5 reprennent les chiffres de la section 3 : un décideur doit pouvoir passer de l'une à l'autre sans rien recalculer.",
      },
    ],
    table: {
      columns: ['Section du template', 'Contenu saisi (résumé)'],
      rows: [
        ['1. Identification', "Nutrition d'urgence Nord-Kivu — BHA, accord HSGL-NU-2026 ; constat le 21/09/2026 ; Amani K. avec Fatou S."],
        ['2. Règle bailleur', "2 CFR 200.320, 200.213, 200.318 ; accord art. 7.2 et annexe 4 ; règle interne HSGL v2 plus stricte (appel d'offres formel au-delà de 10 000 USD)"],
        ['3. Analyse du risque', "Besoin de 18 000 USD en deux BC (8 900 et 9 100), une seule offre, ni PV ni SAM.gov avant engagement ; ligne 3.1 ; 12,6 % des coûts cumulés à fin août, 1,5 % de l'accord ; 1 seul cas sur 41 BC BHA, 2 fournisseurs sans capture SAM.gov à vérifier"],
        ['4. Conséquences', "Inéligibilité : moyenne à élevée sur 18 000 USD ; remboursement : élevé si imputé puis écarté, nul si non imputé ; financements futurs : modéré, plus élevé si détecté par le bailleur en janvier 2027"],
        ['5. Actions', "Trois offres du marché datées du jour ; suspension de l'imputation ; capture SAM.gov classée avec sa vraie date ; blocage des BC BHA sans fiche de règles et capture SAM.gov ; atelier ; revue mensuelle de la checklist"],
        ['6. Décision de divulgation', "OUI (obligation d'informer, imputation prochaine, revue du bailleur en janvier 2027) ; validé par Joseph T., après avis de Marcel O., le 24/09/2026 ; rédigé par Amani K. le 24/09/2026"],
      ],
    },
    result: "Livrable 2 terminé : une note d'une page dont les six sections sont complètes, cohérentes entre elles et appuyées sur des pièces.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — partie 3, la décision de divulgation et ses options",
    scenario: "Livrable 3 : la décision de divulgation a été prise dans la note ; il reste à choisir ce qu'on propose au bailleur. Trois options sont possibles, et le choix se justifie en comparant leurs conséquences.",
    steps: [
      {
        title: 'Raisonnement 1 — Écarter l\'option d\'attendre',
        body: "Attendre « de voir si la question est soulevée » n'a de sens que si le coût n'est jamais imputé, si l'écart est isolé et si aucune obligation d'informer ne s'applique. Les trois conditions sont ici fausses : le coût sera imputé le 30 octobre, l'accord impose d'informer et une revue est prévue en janvier.",
      },
      {
        title: 'Raisonnement 2 — Proposer d\'abord la ratification, avec un plan de repli',
        body: "Le prix peut être documenté a posteriori ; la ratification préserve les 18 000 USD pour le projet. Si elle est refusée, le repli (retrait du rapport, financement sur fonds non affectés) est déjà préparé : le bailleur voit un dispositif qui fonctionne.",
      },
      {
        title: 'Raisonnement 3 — Ne rien antidater, ne rien régulariser en cachette',
        body: "Les trois offres du marché portent la date du jour (28 septembre), les captures SAM.gov leur date réelle (21 septembre). La divulgation tient sur la transparence : une seule pièce antidatée suffirait à la détruire.",
      },
    ],
    table: {
      columns: ['Option', 'Avantage', 'Risque', 'Décision'],
      rows: [
        ['A. Divulguer et proposer la ratification, repli préparé', 'Préserve la dépense, protège la confiance, respecte l\'obligation d\'informer', 'Le bailleur peut refuser la ratification', 'Retenue'],
        ['B. Retirer le coût du rapport sans informer', 'Aucun coût imputé à contester', "Ne respecte pas l'obligation d'informer ; le bailleur peut découvrir le point par ailleurs", 'Écartée'],
        ['C. Attendre la revue de janvier 2027', 'Aucun effort immédiat', 'Coût imputé puis découvert : niveau « coût contesté », perte de confiance', 'Écartée'],
      ],
    },
    example: {
      title: 'Suite du dossier (octobre 2026)',
      lines: [
        "28/09 : trois offres du marché, pour des kits comparables, reçues : 17 200 USD, 17 600 USD et 19 400 USD. Le prix payé (18 000 USD) se situe dans la fourchette.",
        "09/10 : réponse du BHA : ratification acceptée sous réserve d'un plan de correction écrit sur les contrôles avant commande. Le plan est envoyé le 12/10.",
        "30/10 : rapport BHA déposé avec les 18 000 USD imputés ; accusé de réception archivé.",
      ],
    },
    result: "Livrable 3 terminé : une option retenue et justifiée, un repli préparé, une divulgation qui ne repose sur aucune pièce antidatée, et un dénouement documenté.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — partie 4, la checklist, le tableau de bord et la chronologie du dossier",
    scenario: "Livrable 4 : l'état final de la checklist de Goma après la revue, et la chronologie complète du dossier. C'est le modèle de dossier que vous reproduirez à chaque revue de conformité.",
    steps: [
      {
        title: 'Lecture du tableau de bord',
        body: "Les blocs BHA (50 %, une ligne non conforme) et ECHO (40 %, une ligne non conforme) sont en alerte ; le bloc onusien (80 %) est « En cours » : une ligne est à vérifier, aucune n'est non conforme. Total : 16 points applicables, 9 conformes, 56 %, 2 non conformes.",
      },
      {
        title: 'Lecture de la chronologie',
        body: "Aucune commande de la DA-031 avant l'approbation du 22 septembre, aucune imputation du coût de 18 000 USD avant la réponse du 9 octobre : à chaque étape, la vérification précède l'engagement.",
      },
    ],
    table: {
      columns: ['Date', 'Étape', 'Pièce produite', 'Dossier'],
      rows: [
        ['07/09', 'Lettre de mission de la revue', 'Lettre signée par la présidente du comité', 'Mission'],
        ['08-16/09', 'Procédures 1 à 8 sur DA-031, DA-052, DA-060', 'Fiches de règles, décisions de procédure, preuves d\'origine, captures SAM.gov, note multi-bailleurs', 'DA'],
        ['21/09', 'Test des seuils : fractionnement BC-044/045', 'Test des quatre questions, ligne 6 « Non conforme »', 'Mission'],
        ['22/09', 'Approbation préalable du 4x4', 'Autorisation écrite et dérogation d\'origine', 'DA-031 > 06_Approbations'],
        ['24/09', 'Note d\'analyse et décision', 'Note d\'une page validée par Joseph T.', 'Mission'],
        ['25/09', 'Divulgation au BHA', 'Courrier envoyé par Marcel O.', 'Mission'],
        ['09/10', 'Réponse du bailleur', 'Ratification sous conditions', 'Mission'],
        ['30/10', 'Dépôt du rapport BHA', 'Accusé de réception', 'Rapports'],
      ],
    },
    result: "Livrable 4 terminé : une checklist de 17 lignes complète, un tableau de bord lu et recalculé, et une chronologie où chaque pièce justifie la suivante.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 (noté) — Pièces de pompe financées par ECHO, Rutshuru, Nord-Kivu',
    instructions: "Vous êtes Compliance Officer d'une ONG WASH fictive, « AquaSud Initiative », qui intervient dans un projet financé par ECHO dans le territoire de Rutshuru (réhabilitation de systèmes d'adduction d'eau, budget dédié aux pièces détachées de pompes). Il y a deux mois, l'équipe achats, sous pression pour relancer une pompe communautaire en panne, a commandé un lot de pièces détachées auprès d'un fournisseur basé à Goma, retenu pour son délai de livraison le plus court. La facture de 8 400 USD a été payée sans anomalie apparente : trois cotations reçues, procédure de mise en concurrence respectée, PV de comité d'achats signé. Lors de votre revue mensuelle, vous constatez que les pièces livrées portent un marquage d'origine indiquant un pays de fabrication qui ne figure pas sur la liste des pays éligibles du contrat ECHO. Le fournisseur est enregistré et basé dans un pays éligible, mais les biens viennent d'ailleurs : l'équipe achats a vérifié la nationalité du fournisseur, pas l'origine des biens. Vous devez produire une analyse complète et une recommandation avant la clôture du rapport financier intermédiaire du trimestre, dans 10 jours.",
    table: {
      columns: ['Fait', 'Information du dossier (fictive)'],
      rows: [
        ['Projet et bailleur', "ECHO, convention « Eau potable Rutshuru », 540 000 USD ; liste des pays éligibles en annexe 3"],
        ['Dépense', 'Lot de pièces détachées de pompes, 8 400 USD, fournisseur de Goma, trois cotations, PV signé'],
        ['Constat', "Marquage d'origine sur les pièces : pays Z, absent de l'annexe 3 ; aucun certificat d'origine au dossier"],
        ['Rapport', 'Les 8 400 USD figurent dans le brouillon du rapport intermédiaire, dont les dépenses de la période totalisent 212 000 USD'],
        ['Autres dossiers', 'Le même fournisseur a livré deux autres lots au projet : 3 100 USD et 5 750 USD'],
        ['Exigence contractuelle', "L'article sur l'éligibilité impose de vérifier la nationalité du fournisseur ET l'origine des biens avant paiement"],
      ],
    },
    steps: [
      { title: 'Section 1 — identification', actions: ["Ouvrez note-analyse-risque-non-conformite.docx, enregistrez une copie datée, remplissez « Projet et bailleur concerné », « Date de constat » et la personne qui a identifié le risque."] },
      { title: 'Section 2 — règle bailleur applicable', actions: ["Citez la règle d'éligibilité et d'origine du contrat ECHO (annexe 3 de la convention, PRAG annexe éligibilité) et l'article de l'accord."] },
      { title: 'Section 3 — analyse du risque', actions: ["Décrivez l'écart en faits, chiffrez-le en pourcentage du rapport, et appliquez le test aux deux autres lots du même fournisseur."] },
      { title: 'Section 4 — conséquences potentielles', actions: ["Évaluez de façon réaliste : inéligibilité des 8 400 USD, risque de remboursement si le point n'est pas régularisé, impact possible sur la relation avec le bailleur si le motif se répète."] },
      { title: 'Section 5 — actions', actions: ["Proposez l'action immédiate (que faire du coût et du brouillon de rapport) et le renforcement de contrôle."] },
      { title: 'Section 6 — décision de divulgation', actions: ["Répondez à la question : faut-il informer ECHO de manière proactive avant que le point ne soit détecté lors d'une vérification, ou attendre ? Justifiez en une ou deux phrases."] },
      { title: 'Mise à jour de la checklist', actions: ["Ouvrez checklist-conformite-bailleurs-par-type.xlsx (template d'origine). Section UE/ECHO, ligne 11 « Regle de nationalite/origine des biens verifiee », marquez « Non conforme » et ajoutez en colonne G l'action corrective proposée pour éviter la récurrence. Relevez le nouveau tableau de bord."] },
    ],
    tip: "Corrigé indicatif pour vous auto-évaluer : dans le template tel que livré, le passage de la ligne 11 à « Non conforme » ramène le bloc ECHO à 5 points applicables, 2 conformes, 40 %, 2 non conformes, et le total à 15 applicables, 10 conformes, 67 %, 2 non conformes. Action corrective type : exiger systématiquement un certificat d'origine distinct de l'enregistrement du fournisseur, avant tout paiement, pour tout achat financé par un bailleur imposant une règle d'origine des biens.",
    deliverable: "Les deux documents complétés : la note d'analyse de risque, d'une page, avec une recommandation motivée de divulgation ou non au bailleur, et la checklist mise à jour avec la ligne « origine des biens » à « Non conforme » et son action corrective.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Calculer les coûts indirects et répartir un coût partagé',
    instructions: "Vous préparez la revue d'un trimestre pour une base multi-bailleurs. Utilisez les méthodes de la procédure 6 : classer, calculer sur la bonne base, comparer au montant imputé, répartir par une clé. Les montants sont fictifs.",
    table: {
      columns: ['N°', 'Donnée'],
      rows: [
        ['1', "Classez cinq coûts (direct, direct partagé, indirect) : salaire du coordinateur de projet à 100 % sur le projet A ; loyer du bureau de coordination pays ; véhicule utilisé par les projets A, B et C ; audit externe annuel de l'organisation ; fournitures médicales distribuées aux bénéficiaires du projet B."],
        ['2', "BHA (taux de minimis de 10 % des MTDC) : coûts directs 386 400 USD, dont équipements 41 200 USD et locations 12 000 USD. La finance a imputé 38 640 USD de coûts indirects."],
        ['3', "ECHO (plafond de 7 % des coûts directs éligibles) : coûts directs 205 000 USD, dont 4 000 USD jugés inéligibles et à retirer. La finance a imputé 14 350 USD de coûts indirects."],
        ['4', "Véhicule partagé : coût mensuel de 1 960 USD ; kilomètres du mois : projet A 1 920, projet B 800, projet C 480."],
      ],
    },
    steps: [
      { title: 'Classez les cinq coûts de la donnée 1 avec les trois questions', actions: ["Écrivez pour chacun la réponse à « exclusif ? » et « mesurable ? »."] },
      { title: 'Calculez les MTDC, les indirects autorisés et l\'écart pour le BHA (donnée 2)' },
      { title: 'Calculez la base éligible, le plafond et l\'écart pour ECHO (donnée 3)' },
      { title: 'Calculez les parts et les montants imputés pour le véhicule (donnée 4)', actions: ["Vérifiez que la somme des imputations est égale à 1 960 USD."] },
      { title: 'Rédigez en trois lignes la note de méthode d\'allocation du véhicule' },
    ],
    pitfall: "Appliquer le taux sur le total des coûts directs pour le BHA, ou sur 205 000 USD pour ECHO sans retirer les coûts inéligibles : les deux erreurs les plus fréquentes, et celles que ce calcul est conçu pour révéler.",
    tip: "Corrigé indicatif : (1) projet A direct ; loyer coordination indirect ; véhicule direct partagé ; audit externe indirect ; fournitures du projet B direct. (2) MTDC = 386 400 − 41 200 − 12 000 = 333 200 ; autorisé 33 320 ; excédent 5 320 USD. (3) Base = 201 000 ; plafond 14 070 ; excédent 280 USD. (4) 60 % / 25 % / 15 % : 1 176 / 490 / 294 USD.",
    deliverable: "Un tableau de classement de cinq lignes, deux calculs d'écart (BHA et ECHO), un tableau d'allocation du véhicule dont la somme retombe sur 1 960 USD, et une note de méthode de trois lignes.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Quelle règle s\'applique ? Cinq dépenses, plusieurs bailleurs',
    instructions: "Pour chaque dépense de Goma, utilisez la grille des seuils du fil rouge (diapositive « Les règles de mise en concurrence du fil rouge ») et la règle de superposition. Indiquez la procédure exigée, les vérifications obligatoires (SAM.gov, origine) et la règle déterminante. Justifiez en une phrase.",
    table: {
      columns: ['N°', 'Dépense'],
      rows: [
        ['1', "Balances de pesée pour des sites de distribution, 3 000 USD, financées par le PAM."],
        ['2', "Imprimante et fournitures de bureau, 4 800 USD, financées par le BHA."],
        ['3', "Matériel de stérilisation, 14 000 USD, financé par le BHA."],
        ['4', "Groupe électrogène, 9 500 USD, financé à 60 % par ECHO et à 40 % par le PAM."],
        ['5', "Lot de médicaments, 62 000 USD, financé par ECHO."],
      ],
    },
    steps: [
      { title: 'Remplissez un tableau Dépense / Procédure HSGL / Procédure bailleur(s) / Procédure retenue / Vérifications obligatoires' },
      { title: 'Pour la dépense 4, précisez la règle qui s\'applique à l\'origine du bien et celle qui s\'applique à la mise en concurrence' },
      { title: 'Pour la dépense 2, indiquez la vérification qui n\'existe pas dans la procédure interne mais que le bailleur impose' },
    ],
    tip: "Corrigé indicatif : (1) RFQ de trois devis, la procédure HSGL étant plus stricte que l'unique devis du PAM ; pas de SAM.gov. (2) RFQ de trois devis ; SAM.gov obligatoire. (3) Appel d'offres formel (HSGL) ; SAM.gov ; origine selon le code de l'accord. (4) Trois devis (HSGL, ECHO et PAM concordent) ; origine : l'annexe 3 d'ECHO s'applique à tout le lot ; pas de SAM.gov. (5) Appel d'offres formel (ECHO et HSGL concordent) ; origine selon l'annexe 3.",
    pitfall: "Appliquer la règle du bailleur majoritaire à l'achat partagé de la dépense 4. La règle de mise en concurrence se détermine par comparaison et vaut pour tout l'achat ; l'origine se cumule : chaque bailleur dont la règle existe s'applique au bien.",
    deliverable: "Un tableau de cinq lignes avec procédure retenue, vérifications obligatoires, règle déterminante et justification d'une phrase, plus la réponse aux deux questions des dépenses 2 et 4.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre note d'analyse tient sur une page et ses six sections sont remplies, y compris « Date de constat » (date de la découverte, pas de la dépense) et « Rédigé par ».",
      "La section 2 cite l'article précis de la règle d'origine ou d'éligibilité et la source contractuelle, pas seulement le nom du règlement.",
      "La section 3 ne contient que des faits chiffrés et référencés, sans jugement sur l'intention, et indique si d'autres dossiers du même fournisseur ont été vérifiés.",
      "La section 4 évalue chaque risque par niveau et par montant, avec ce qui l'atténue ou l'aggrave.",
      "La section 5 propose une action immédiate qui ne repose sur aucune pièce antidatée et un contrôle préventif qui s'exécute avant la commande.",
      "La section 6 donne une décision « Oui » ou « Non » justifiée en une ou deux phrases et validée par une personne de la direction.",
      "La ligne « origine des biens » de la section UE/ECHO est passée à « Non conforme » avec un commentaire factuel et une action corrective, et vous avez relevé le nouveau tableau de bord.",
      "Dans l'exercice 2, vous avez retiré les coûts inéligibles de la base ECHO avant d'appliquer le plafond, et la somme des imputations du véhicule retombe sur 1 960 USD.",
      "Dans l'exercice 3, vous avez retenu la procédure la plus restrictive dimension par dimension, et conclu que SAM.gov ne s'applique qu'aux dépenses BHA.",
    ],
  },

  // ───────────────────────── 8. Erreurs fréquentes ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Appliquer les mêmes règles de conformité à tous les bailleurs — un seuil, une règle d'origine ou un taux d'indirects d'un bailleur ne s'applique pas automatiquement à un autre, même sur un projet voisin. Parade : fiche « bailleur — ligne — règles » signée avant chaque achat (procédure 1).",
      "Découvrir la règle après la dépense engagée — après paiement, il ne reste que la gestion de crise. Parade : vérification avant engagement, dans l'ordre des huit étapes du guide (procédures 1 à 8).",
      "Sous-estimer les conséquences — un manquement peut aller jusqu'à l'inéligibilité, au remboursement et à la perte de confiance du bailleur. Parade : note d'analyse graduée par niveau et par montant (procédure 12).",
      "Confondre la nationalité du fournisseur avec l'origine réelle des biens — un fournisseur enregistré dans un pays éligible peut vendre des biens fabriqués ailleurs. Parade : certificat d'origine du fabricant exigé avant paiement et marquage contrôlé à la réception (procédure 4).",
      "Attendre la préparation d'un audit externe pour vérifier — douze mois de dépenses non conformes se sont déjà accumulés. Parade : checklist tenue en continu, avec revue de conformité dix jours avant chaque rapport (procédures 9 et 10).",
      "Fractionner un besoin sans s'en apercevoir — deux bons de commande juste sous un seuil. Parade : calcul du montant du besoin et test des quatre questions pour chaque DA (procédure 3).",
      "Écrire « Conforme » sans preuve archivée — un point vérifié sans pièce n'a aucune valeur face à un bailleur. Parade : « A verifier » tant que la pièce n'est pas au dossier, index des preuves, test d'archivage (procédures 7 et 9).",
      "Calculer les coûts indirects sur la mauvaise base ou changer de clé d'allocation selon les marges budgétaires. Parade : MTDC pour le taux de minimis, base éligible pour le plafond ECHO, clé écrite et constante (procédure 6).",
      "Régulariser en antidatant des devis, des PV ou des captures. Parade : toute pièce porte sa date réelle ; une régularisation honnête se documente dans la note, elle ne se fabrique pas.",
    ],
  },

  // ───────────────────────── 9. Réalisations + check-list ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez rattaché trois demandes d'achat à un bailleur et à une ligne budgétaire approuvée, corrigé une DA mal codée par écrit, et produit une fiche « bailleur — ligne — règles » signée par la finance.",
      "Vous avez préparé la checklist de conformité par type de bailleur : exemples effacés, ligne ECHO ajoutée à l'intérieur de la plage, tableau de bord vérifié.",
      "Vous avez consolidé la grille des seuils des cinq règles de Goma, testé le fractionnement avec quatre questions et fixé par écrit la procédure la plus restrictive de chaque dossier.",
      "Vous avez constitué un dossier d'origine et de nationalité (fournisseur, fabricant, pays d'origine) et des vérifications d'exclusion horodatées, SAM.gov et autres listes.",
      "Vous avez classé les coûts en direct, direct partagé et indirect, calculé les coûts indirects BHA (10 % des MTDC) et ECHO (plafond de 7 %), et réparti un véhicule partagé 65 / 25 / 10 avec une note de méthode.",
      "Vous avez complété les 17 lignes de la checklist avec preuve, date et commentaire, lu le tableau de bord (16 points applicables, 9 conformes, 56 %, 2 non conformes) et bâti un plan d'action daté.",
      "Vous avez construit un calendrier de reporting rétro-planifié, rédigé une demande d'approbation préalable et contrôlé le marquage et la visibilité sur cinq sites.",
      "Vous avez rédigé la note d'analyse de risque d'une page, décidé de la divulgation proactive, rédigé le courrier au bailleur et résolu le cas du fractionnement de Goma jusqu'à la ratification.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais citer au moins trois points opérationnels du 2 CFR 200 qui reviennent en audit USAID/BHA (seuils, exclusion SAM.gov, conflit d'intérêt, origine, éligibilité des coûts).",
      "Je sais citer au moins trois points opérationnels du PRAG qui reviennent en audit UE/ECHO (seuils, nationalité et origine, dossier d'appel d'offres, visibilité, Single Form).",
      "Je sais expliquer où trouver les règles applicables à un partenaire ONG d'une agence onusienne : l'accord de partenariat (PCA ou FPA) et ses annexes, relus avant chaque cycle.",
      "Je sais distinguer un coût direct, un coût direct partagé et un coût indirect, et citer le traitement correspondant selon le bailleur (NICRA ou minimis sur MTDC, plafond contractuel ECHO).",
      "Je sais utiliser la checklist par type de bailleur pour vérifier une dépense AVANT de l'engager, et lire son tableau de bord par bailleur avant le total.",
      "Je sais distinguer la nationalité d'un fournisseur de l'origine réelle des biens, et exiger la preuve d'origine avant paiement.",
      "J'ai complété une note d'analyse de risque de non-conformité d'une page, avec une recommandation motivée de divulgation ou non au bailleur.",
      "Je sais expliquer en une phrase pourquoi une non-conformité non corrigée peut aller au-delà d'un avertissement : elle monte l'échelle jusqu'à l'inéligibilité, au remboursement et à la perte de confiance.",
      "J'ai rangé mes pièces dans un dossier d'achat structuré (demande, fiche de règles, concurrence, origine, exclusion, approbations) et testé que je retrouve chaque preuve en deux minutes.",
    ],
  },

  // ───────────────────────── 10. Clôture ─────────────────────────
  {
    type: 'closing',
    nextModuleHint: "Module 08 — Rédaction de Rapports d'Audit Professionnels. Vous avez à Goma un fractionnement, deux lignes non conformes et des écarts de coûts indirects : le module suivant vous apprend à transformer ces constats en un rapport d'audit lisible, qui présente le critère, la cause, la conséquence et une recommandation que la direction peut suivre.",
  },
]
