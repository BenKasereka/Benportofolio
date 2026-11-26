// Module 06 — Prévention de la Fraude & Politique Anti-Corruption
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (grille-typologie-fraude-red-flags.xlsx, evaluation-mecanisme-signalement-culture.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (revue du dispositif de prévention de la fraude de la base de Bunia, Ituri,
// de l'ONG fictive « Horizon Santé Grands Lacs »), avec exemples remplis, résultat
// attendu, astuces et erreurs à éviter. L'étude de cas de N'Djaména (03-exercices.md)
// sert d'exercice noté.
// Les organisations, bailleurs, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Prévention de la Fraude & Politique Anti-Corruption',
    hook: "Une politique anti-corruption signée, affichée dans le hall et traduite en trois langues ne protège personne si, le jour où un agent de terrain veut l'utiliser, le message arrive chez la personne qu'il dénonce. À la fin de ce module, vous aurez produit le dossier complet d'une revue de dispositif anti-fraude : une grille des typologies et red flags remplie et lue, un test d'anonymat réel du canal de signalement, une grille tone-at-the-top fondée sur des faits datés, une conclusion de risque global, des recommandations réalisables en 90 jours et le protocole d'un canal sécurisé et protégé.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Lire chaque typologie de fraude (détournement, fausses factures, ghost workers, conflits d'intérêt non déclarés) avec le triangle pression-opportunité-rationalisation, en produisant une note d'orientation d'une page qui désigne, typologie par typologie, la signature d'opportunité et le contrôle à vérifier en priorité.",
      "Compléter grille-typologie-fraude-red-flags.xlsx indicateur par indicateur (colonnes C et E des 16 lignes) et interpréter l'onglet « Score de risque », en produisant une grille remplie, une lecture des niveaux d'alerte par catégorie et une liste de priorités d'audit.",
      "Mener un test d'anonymat réel d'un canal de signalement avec l'accord écrit du commanditaire, en produisant le journal du test et la section 1 de evaluation-mecanisme-signalement-culture.docx, preuves à l'appui.",
      "Reconstituer l'historique des signalements sur trois ans et vérifier l'accessibilité réelle du canal auprès du personnel de terrain, en produisant la section 2 et la section 3 du template, avec un tableau d'entretiens anonymisé.",
      "Construire une grille tone-at-the-top à partir de faits datés et vérifiables, puis conclure sur un niveau de risque global, en produisant les sections 4 et 5 du template et une note de recommandations réalisables sous 90 jours.",
      "Concevoir un système de signalement sécurisé et protégé (canaux, traitement, protection contre les représailles, indicateurs), en produisant un protocole d'une page prêt à être soumis au comité d'audit.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur la fraude : c'est une revue de dispositif anti-fraude déroulée dans l'ordre où vous la vivrez, de la lecture des risques jusqu'à la remise des conclusions au comité d'audit. Il ne reprend pas les contrôles dossier par dossier (achats, caisse, paie) vus dans les modules 03 à 05. Ici, la question se situe un cran au-dessus : l'organisation est-elle construite pour prévenir la fraude, ou pour la rendre possible ?",
      "Le cas fil rouge : vous êtes Amani K., auditeur(rice) interne de « Horizon Santé Grands Lacs » (HSGL), l'ONG de santé fictive que vous connaissez depuis le module 01. Le 7 septembre 2026, la présidente du comité d'audit, Hélène V., vous confie la revue du dispositif de prévention de la fraude de la base de Bunia (Ituri) et de ses trois antennes. Constat de départ : zéro signalement reçu en trois ans, alors que des rumeurs de détournement de carburant circulent à l'antenne de Mongbwalu.",
    ],
    bullets: [
      "Livrable 1 — La note d'orientation : le triangle de la fraude lu typologie par typologie, avec les contrôles prioritaires (procédure 1).",
      "Livrable 2 — La grille des typologies et red flags remplie (colonnes C et E), son score de risque lu et les priorités d'audit (procédure 2).",
      "Livrable 3 — Le journal du test d'anonymat et la section 1 du template (procédure 3).",
      "Livrable 4 — Le tableau de reconstitution des signalements et la section 2 du template (procédure 4).",
      "Livrable 5 — Les douze entretiens de terrain tabulés et la section 3 du template (procédure 5).",
      "Livrable 6 — La grille tone-at-the-top : trois faits datés dans la section 4 du template (procédure 6).",
      "Livrable 7 — La conclusion de risque global (section 5), les recommandations à 90 jours et la note de transmission (procédure 7).",
      "Livrable 8 — Le protocole d'un système de signalement sécurisé et protégé, d'une page (procédure 8).",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : HSGL, base de Bunia',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. L'organisation, les personnes et les chiffres sont fictifs, mais construits sur des configurations réelles de bases isolées dans l'Est de la RDC, où le contrôle hiérarchique direct est rare et où les agents de terrain parlent swahili, lingala ou une langue locale avant le français.",
    table: {
      columns: ['Personne', 'Fonction', 'Rôle dans la mission'],
      rows: [
        ['Hélène V.', "Présidente du comité d'audit", 'Commanditaire : autorise le test, reçoit les résultats'],
        ['Joseph T.', 'Directeur Pays', 'Dirigeant dont les décisions sont examinées (tone-at-the-top)'],
        ['Dr Léonie B.', 'Coordinatrice de la base de Bunia', 'Responsable de la base et de ses trois antennes'],
        ['Chantal D.', 'Compliance Officer pays (Goma)', 'Gère la boîte « alerte » : son canal est testé'],
        ['Gaspard T. et Pascaline N.', "HR Manager pays et assistante de direction du Directeur Pays", "Ont un accès à la boîte « alerte »"],
        ['Prosper A.', 'Logistics Officer, base de Bunia', 'Titulaire des achats : red flags à observer'],
        ['Fatou S.', 'Auditrice interne senior', 'Dépose le signalement fictif, conduit les entretiens avec vous'],
        ['Ruth B.', 'Finance Manager (Goma)', 'Valide la liste de paie et les rapprochements bancaires'],
      ],
    },
    example: {
      title: 'Chiffres clés du périmètre',
      lines: [
        "Base de Bunia : 58 employés (Bunia 34, Mongbwalu 9, Komanda 8, Nizi 7), budget annuel de 4,1 M USD, trois bailleurs : Fonds Meridian, ECHO et UNICEF.",
        "Politique anti-fraude et anti-corruption v3 (mars 2021) : signée à l'embauche par les 58 employés, jamais expliquée à l'oral.",
        "Canal officiel : la boîte mail alerte@hsgl-ong.example et une boîte à suggestions dans le hall de Bunia. Signalements reçus : 0 pour Bunia en trois ans ; 2 pour tout HSGL (novembre 2024 et mai 2025).",
        "Rumeur : détournement de carburant à l'antenne de Mongbwalu, jamais remontée par le canal. Calendrier : test d'anonymat le 21 septembre, terrain à Bunia du 5 au 16 octobre 2026.",
      ],
    },
    pitfall: "Partir de la rumeur pour « trouver le coupable ». Votre mission n'est pas d'enquêter sur Mongbwalu : c'est d'évaluer si le dispositif aurait permis à quelqu'un de le dire. Si un indice sérieux apparaît, il remonte au comité, il ne s'instruit pas seul sur place.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Fraude, corruption, conflit d\'intérêt : trois mots à ne pas confondre',
    body: [
      "La fraude est un acte intentionnel de tromperie pour obtenir un avantage indu. La classification de référence de l'ACFE (Association of Certified Fraud Examiners, l'association internationale des enquêteurs de fraude) la range en trois familles : le détournement d'actifs (caisse, carburant, stocks, paie), la corruption (pots-de-vin, commissions occultes, conflits d'intérêt) et la falsification des états financiers.",
      "Le conflit d'intérêt n'est pas une fraude en soi : c'est une situation où l'intérêt personnel d'un agent pourrait influencer une décision prise au nom de l'organisation. Il devient une fraude quand il est dissimulé et qu'il oriente la décision. C'est pourquoi la non-déclaration est le premier indicateur à chercher.",
    ],
    table: {
      columns: ['Typologie du module', 'Famille ACFE', 'Exemple en ONG'],
      rows: [
        ['Détournement de fonds', "Détournement d'actifs", "Avances de carburant non justifiées à une antenne isolée"],
        ['Fausses factures', 'Détournement (décaissement frauduleux), souvent avec corruption', "Facture gonflée par un fournisseur complice de l'agent qui réceptionne"],
        ['Ghost workers', "Détournement d'actifs (fraude à la paie)", "Salaire d'un journalier parti, perçu par le superviseur"],
        ["Conflits d'intérêt non déclarés", 'Corruption', "Marché de pièces auto attribué à l'entreprise d'un parent"],
      ],
    },
    tip: "Quand vous rédigez un constat, nommez le mécanisme (« décaissement sans justificatif », « fournisseur lié à un agent ») et jamais le mot « fraude » : c'est une qualification juridique, réservée à l'issue d'une enquête.",
  },
  {
    type: 'concept',
    title: 'Le triangle de la fraude : un outil de lecture, pas une formule à réciter',
    body: [
      "Le triangle de Cressey décrit les trois conditions qui, réunies, rendent une fraude possible : la pression (une motivation personnelle, souvent financière), l'opportunité (une faille de contrôle qui permet d'agir sans être détecté) et la rationalisation (la justification que la personne se donne pour ne pas se percevoir comme fraudeur). Une version ultérieure ajoute la capacité (position, accès, compétence pour passer à l'acte), utile pour comprendre pourquoi ce sont souvent des personnes de confiance qui fraudent.",
      "Pour un auditeur, les trois côtés n'ont pas la même valeur : vous n'avez aucune prise sur la pression ni sur la rationalisation d'un individu, et vous n'avez pas à les deviner. Seule l'opportunité se vérifie sur des documents et des faits. Votre travail consiste à repérer les failles qui la créent.",
    ],
    table: {
      columns: ['Côté du triangle', 'Ce que vous pouvez en faire', 'Exemple (fil rouge)'],
      rows: [
        ['Pression', "Comprendre le contexte (salaires, urgences, dettes), sans jamais enquêter sur la vie privée d'une personne", "Salaires nationaux perçus comme insuffisants face au coût de la vie à Bunia"],
        ['Opportunité', 'Chercher la faille de contrôle : seule dimension testable par des preuves', "Avances de carburant à Mongbwalu justifiées par la seule personne qui les reçoit"],
        ['Rationalisation', "Repérer les phrases qui banalisent (« c'est l'urgence », « tout le monde le fait »)", "« On ne pouvait pas arrêter la distribution pour des papiers »"],
      ],
    },
    pitfall: "Écrire dans un rapport « l'agent avait une pression financière ». Vous ne le savez pas, et c'est une accusation. Écrivez ce que vous avez vérifié : la faille et les faits.",
  },
  {
    type: 'comparison-table',
    title: 'Les 4 typologies de fraude en ONG, lues avec le triangle',
    columns: ['Typologie', 'Pression', 'Opportunité', 'Rationalisation'],
    rows: [
      [
        'Détournement de fonds (caisse, avances terrain, comptes bancaires)',
        "Financière et personnelle : dette, urgence familiale, salaire perçu comme insuffisant en zone de crise.",
        "Contrôle de caisse trop rare ; rapprochement bancaire fait par la personne qui décaisse ; base isolée contrôlée une fois par trimestre au mieux.",
        "Sentiment d'iniquité salariale, réel ou perçu, entre personnel national et international.",
      ],
      [
        'Fausses factures (gonflées, pour des biens non livrés, de complaisance)',
        "Souvent partagée : l'agent a besoin d'argent, le fournisseur a besoin du marché. Exige presque toujours une collusion.",
        "Mise en concurrence non documentée ; réception non contre-vérifiée ; même petit cercle de fournisseurs jamais challengé.",
        "« Le prix du marché local est opaque, personne ne peut vérifier ce que ça coûte vraiment ici. »",
      ],
      [
        'Ghost workers (employés fictifs ou partis, maintenus en paie)',
        "Celle de l'organisateur du stratagème : responsable RH ou superviseur qui touche une part du salaire fictif.",
        "La même personne gère le fichier du personnel (embauches, départs) et transmet la liste de paie, sans vérification croisée ni présence physique contrôlée.",
        "« Compensation méritée » pour un poste sous-payé.",
      ],
      [
        "Conflits d'intérêt non déclarés",
        "Souvent absente : l'agent ne se perçoit pas comme fraudeur, il « aide un proche compétent ».",
        "Aucune procédure de déclaration des liens d'intérêt à l'entrée en poste et à chaque décision sensible.",
        "« Je n'ai rien caché : personne ne m'a jamais demandé de déclarer quoi que ce soit. »",
      ],
    ],
  },
  {
    type: 'concept',
    title: 'Une signature d\'opportunité différente, donc un contrôle différent',
    body: "Chacune des quatre typologies a une signature d'opportunité propre, donc un contrôle à renforcer en priorité. Traiter les quatre avec la même réponse générique (« plus de contrôle partout ») disperse l'effort là où il ne sert à rien et le retire là où il est vital. Ce tableau fait le lien entre la signature et la question que vous poserez en mission.",
    table: {
      columns: ['Typologie', "Signature d'opportunité", 'Contrôle à vérifier en priorité', 'Question à poser'],
      rows: [
        ['Détournement', 'Cumul décaissement et rapprochement ; supervision rare', 'Séparation caisse / rapprochement ; fréquence des visites de supervision', '« Qui compte la caisse, et qui contrôle ce comptage ? »'],
        ['Fausses factures', 'Réception non indépendante ; fournisseurs récurrents', 'Contre-vérification de la réception ; mise en concurrence documentée', '« Qui a constaté que les biens sont arrivés, et que fait-il d\'autre dans cet achat ? »'],
        ['Ghost workers', 'Gestion du fichier et transmission de la paie par la même personne', 'Validation croisée RH / Finance ; contrôle de présence physique', '« Qui peut ajouter ou retirer un nom, et qui le vérifie ? »'],
        ["Conflits d'intérêt", 'Aucune déclaration systématique', 'Déclaration à l\'entrée et à chaque décision ; croisement fournisseurs / personnel', '« Qui vous a demandé de déclarer vos liens, et où est la trace ? »'],
      ],
    },
    tip: "Ce tableau est la base de la procédure 1 : il vous évite d'ouvrir cent dossiers pour trouver la faille, parce que vous savez déjà quelle faille chercher.",
  },
  {
    type: 'stat-callout',
    stat: '≈ 4 fraudes sur 10',
    caption: "sont découvertes grâce à un signalement — première source de détection, devant l'audit interne (ACFE, Report to the Nations, éditions récentes)",
    context: "Citez toujours la source et l'édition du rapport quand vous utilisez ce chiffre. Sa conséquence pour vous est pratique : un canal qui ne fonctionne pas supprime la première source de détection de l'organisation. Trois ans sans aucun signalement dans une base de 58 agents en zone à risque n'est donc pas une preuve de santé : c'est un signal à investiguer.",
  },
  {
    type: 'concept',
    title: "Les cinq conditions d'un mécanisme de signalement crédible",
    body: [
      "Un mécanisme de signalement est le canal par lequel un employé alerte, en toute sécurité, d'un soupçon de fraude, de corruption ou d'abus. Il est crédible si cinq conditions sont réunies, et il suffit qu'une seule manque pour qu'il ne soit pas utilisé. La norme ISO 37002 (systèmes de management du signalement, 2021) en fait ses principes : confiance, impartialité, protection.",
    ],
    table: {
      columns: ['Condition', 'Ce qu\'elle exige', 'Comment la vérifier (module)'],
      rows: [
        ['1. Accessible', "Gratuit, dans la langue et le format de l'agent, sans demander le téléphone du chef", 'Entretiens de terrain, essai en conditions réelles (procédures 3 et 5)'],
        ['2. Confidentiel ou anonyme', "Technique et réel : ni numéro, ni adresse IP, ni boîte consultée par le cercle visé", "Test d'anonymat (procédure 3)"],
        ['3. Indépendant', "Reçu par une personne ou un prestataire hors ligne hiérarchique visée, avec une voie de contournement", "Cartographie de qui reçoit (procédure 3)"],
        ['4. Traité', 'Accusé de réception, tri, enquête, retour, clôture, avec des délais', 'Registre et délais (procédure 4)'],
        ['5. Protégé', "Aucune représaille, sanction pour qui en exerce, suivi du lanceur d'alerte", "Réaction historique de la direction (procédure 6)"],
      ],
    },
    highlight: "Confidentialité et anonymat sont deux garanties différentes. Anonymat : personne ne sait qui a signalé. Confidentialité : l'identité est connue d'un cercle très restreint tenu au secret. Une politique peut promettre les deux, mais seul un test pratique dit laquelle est tenue.",
  },
  {
    type: 'comparison-table',
    title: 'Ce que dit le papier, ce que révèle la pratique',
    columns: ['Ce que dit la politique', 'Ce que le terrain peut révéler', 'Comment le voir'],
    rows: [
      ['« Ligne dédiée et confidentielle »', "Numéro de poste fixe d'un bureau précis, appel international payant, que personne n'ose composer", 'Appeler le numéro depuis un téléphone de la base'],
      ['« Anonymat garanti »', "Formulaire qui journalise l'adresse IP, boîte partagée lue par la hiérarchie visée", "Test d'anonymat et accès à l'en-tête du message"],
      ['« Politique signée par chaque employé »', 'Document remis en français, signé, classé, jamais expliqué à des agents qui lisent mal le français juridique', 'Entretiens : « Pouvez-vous me dire ce que dit la politique ? »'],
      ['« Aucun signalement : aucun problème »', "Canal inconnu, peur des représailles, rumeurs qui circulent hors canal", "Registre, délais et entretiens de terrain"],
      ['« Tolérance zéro »', 'Dérogations aux procédures validées par la direction elle-même, sanction pour les juniors seulement', 'Échantillon de décisions de la direction, dossiers disciplinaires'],
    ],
  },
  {
    type: 'concept',
    title: 'Le tone-at-the-top : un signal de comportement, pas de discours',
    body: [
      "Le tone-at-the-top est le signal, donné par le comportement quotidien de la direction et non par ses discours ou ses politiques, sur ce qui est réellement toléré dans l'organisation. Le personnel de terrain observe ce comportement avec une précision redoutable et calibre son propre niveau de rigueur sur ce qu'il voit, jamais sur ce qui est écrit.",
      "En mission, ce n'est pas un exercice d'opinion sur l'ambiance du bureau : c'est une collecte de preuves factuelles et datées, au même titre qu'un contrôle de pièces comptables. C'est souvent le facteur de risque le plus prédictif d'un dossier d'audit, avant même l'examen du premier justificatif.",
    ],
    table: {
      columns: ['Indicateur du template', 'Question factuelle', 'Fait exploitable (exemple)', 'Impression à proscrire'],
      rows: [
        ['Respect par la direction de ses propres procédures d\'approbation', 'Sur un échantillon de décisions de la direction, combien respectent ses propres seuils ?', '« Le 14 mars 2026, achat de 18 400 USD approuvé avec un seul devis, mention « urgence » »', '« La direction est souple »'],
        ['Réaction historique à un signalement impliquant un cadre', 'Un cadre a-t-il été traité comme un agent junior pour des faits comparables ?', '« Mai 2025 : cadre muté, aucune sanction ; novembre 2024 : agent junior licencié »', '« On protège les siens »'],
        ['Cohérence discours / décisions', 'Les moyens et décisions suivent-ils le message officiel ?', '« Courriel « tolérance zéro » du 12/01/2026 ; budget formation conformité dépensé : 0 USD au 30/09 »', '« Le discours est creux »'],
      ],
    },
    pitfall: "Noter une phrase de la direction comme « normale » parce qu'elle est dite de bonne foi par quelqu'un de compétent. « On contourne nos règles parce que c'est urgent » se note mot pour mot et se date.",
  },
  {
    type: 'concept',
    title: 'Une politique anti-corruption vivante : six piliers et la question d\'audit de chacun',
    body: "Le titre du module inclut la politique anti-corruption : voici ses six piliers, et le test factuel qui distingue un pilier réel d'un pilier de façade. Vous les utiliserez comme grille de lecture de la politique de l'organisation que vous auditez.",
    table: {
      columns: ['Pilier', 'Ce qu\'il contient', 'Test d\'audit', 'Constat HSGL Bunia'],
      rows: [
        ['1. Conflits d\'intérêt', "Déclaration à l'entrée et à chaque décision sensible", "Combien de déclarations dans les dossiers du personnel ?", '0 déclaration sur 58 dossiers'],
        ['2. Cadeaux et hospitalité', 'Seuil, registre, obligation de déclarer', 'Le registre existe-t-il, est-il renseigné ?', 'Seuil de 25 USD écrit, aucun registre'],
        ['3. Paiements de facilitation', 'Interdits ; conduite face aux contrôles et demandes de paiement', 'Les chauffeurs savent-ils quoi faire à un barrage ?', 'Non évoqué à l\'oral, aucune consigne'],
        ['4. Vérification des tiers', 'Identité, liens et listes de sanctions des fournisseurs et partenaires', 'Croisement fournisseurs / personnel réalisé ?', 'Jamais fait avant la mission'],
        ['5. Signalement et protection', 'Canal, traitement, protection contre les représailles', 'Test d\'anonymat, registre, entretiens', 'Procédures 3 à 5'],
        ['6. Sanctions et formation', 'Sanctions identiques quel que soit le grade ; formation orale', 'Dossiers disciplinaires comparés ; sessions tenues', 'Procédure 6 ; aucune session orale'],
      ],
    },
    tip: "Les piliers 1, 4 et 5 touchent directement vos quatre typologies : c'est dans cet ordre que vous vérifierez la cohérence entre la politique et les red flags observés.",
  },
  {
    type: 'concept',
    title: 'Votre rôle : évaluer le dispositif, pas instruire une affaire',
    body: [
      "L'auditeur interne n'a pas pour mission de découvrir toutes les fraudes, ni d'enquêter : il évalue si le dispositif de prévention et de détection est conçu et fonctionne de façon à les rendre improbables. Les normes de l'IIA lui demandent de connaître les indicateurs de fraude et d'évaluer le risque, pas de qualifier une personne.",
      "Un red flag est un indice qui appelle une vérification, pas une preuve. Si vos tests font apparaître un soupçon sérieux sur une personne, vous arrêtez d'enquêter et vous suivez une conduite en quatre gestes : conserver les pièces, ne pas confronter la personne, informer le commanditaire par écrit, attendre la décision sur l'enquête.",
    ],
    example: {
      title: 'Conduite à tenir — le jour où le croisement fournisseurs / personnel donne un résultat',
      lines: [
        "9 octobre 2026 : le téléphone d'un fournisseur de pièces auto est identique à celui du dossier d'un agent de Bunia.",
        "1. Vous conservez l'extraction et la capture, datées, dans le dossier restreint.",
        "2. Vous n'en parlez ni à l'agent, ni au fournisseur, ni à la Coordinatrice.",
        "3. Vous écrivez le jour même à la présidente du comité : « un rapprochement de coordonnées appelle une vérification ; je n'ai tiré aucune conclusion ».",
        "4. Vous attendez sa décision : l'enquête, si elle a lieu, est confiée à d'autres.",
      ],
    },
    pitfall: "Interroger vous-même la personne « pour en avoir le cœur net ». Vous risquez de détruire la preuve, de l'alerter et de compromettre une éventuelle procédure disciplinaire ou judiciaire.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé à maîtriser dès ce module',
    terms: [
      { term: 'Typologie de fraude', definition: "Famille de mécanismes frauduleux au mode opératoire commun (détournement, fausses factures, ghost workers, conflits d'intérêt)." },
      { term: 'Red flag', definition: "Indicateur d'alerte, souvent une faille de contrôle ou une anomalie, qui appelle une vérification sans prouver une fraude." },
      { term: 'Triangle de la fraude', definition: "Modèle de Cressey : pression, opportunité, rationalisation. Seule l'opportunité se vérifie sur pièces." },
      { term: 'Collusion', definition: "Entente entre un agent interne et un tiers (fournisseur, partenaire) pour tromper l'organisation, typique des fausses factures." },
      { term: 'Ghost worker', definition: "Employé fictif, ou réel mais parti sans radiation, dont le salaire continue d'être versé et détourné." },
      { term: "Conflit d'intérêt", definition: "Situation où l'intérêt personnel, familial ou financier d'un agent pourrait influencer, ou sembler influencer, une décision, qu'un acte frauduleux ait eu lieu ou non." },
      { term: 'Tone-at-the-top', definition: "Signal réel donné par le comportement quotidien de la direction sur ce qui est toléré, par opposition à ses discours et à ses politiques écrites." },
      { term: "Lanceur d'alerte de bonne foi", definition: "Personne qui signale un soupçon raisonnable sans intention malveillante, protégée même si le signalement s'avère infondé." },
      { term: 'Anonymat crédible', definition: "Garantie qui résiste à un test pratique (traçabilité technique, connaissance du canal par la hiérarchie visée), pas seulement à une promesse écrite." },
      { term: 'Représailles', definition: "Toute mesure défavorable (mutation, non-renouvellement, mise à l'écart, pression) subie par une personne parce qu'elle a signalé ou témoigné." },
    ],
  },

  // ───────────────────────── 5. LE CŒUR : les procédures ─────────────────────────

  // ── Procédure 1 — Lire l'organisation avec le triangle de la fraude ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 3',
    title: "Cartographier où l'argent et les décisions passent, typologie par typologie",
    intro: "Pourquoi : on ne cherche pas une faille « partout » ; on la cherche là où une personne seule peut agir sans qu'un autre la voie. Quand : avant tout déplacement, en phase de préparation. Entrées : organigramme, budget, politique anti-fraude, liste des flux sensibles (avances, achats, paie, recrutements).",
    steps: [
      {
        title: 'Listez les cinq processus où un agent manipule ou oriente de la valeur',
        actions: [
          "1. Avances et caisse : qui reçoit de l'argent liquide ou des avances (carburant, frais de mission) ?",
          "2. Achats : qui choisit le fournisseur, qui réceptionne, qui valide le paiement ?",
          "3. Paie et journaliers : qui crée ou retire un nom, qui transmet la liste ?",
          "4. Recrutements et attributions de marchés : qui décide, qui est informé ?",
          "5. Déclarations : qui contrôle les déclarations de liens d'intérêt ?",
        ],
      },
      {
        title: 'Pour chaque processus, notez qui initie, qui valide et qui contrôle',
        body: "Dès qu'une même personne figure dans deux colonnes, vous avez une signature d'opportunité à vérifier.",
      },
      {
        title: 'Rattachez chaque processus à la typologie qu\'il expose',
        body: "Avances : détournement. Achats : fausses factures. Paie : ghost workers. Recrutements et marchés : conflits d'intérêt.",
      },
    ],
    table: {
      columns: ['Processus (Bunia)', 'Initie', 'Valide', 'Contrôle', 'Typologie exposée'],
      rows: [
        ['Avances de carburant des antennes', 'Chef d\'antenne', 'Coordinatrice', 'Le chef d\'antenne justifie lui-même', 'Détournement'],
        ['Achats carburant et pièces auto (52 BC, janv.-août 2026)', 'Prosper A.', 'Coordinatrice', 'Prosper A. réceptionne aussi', 'Fausses factures'],
        ['Journaliers des antennes (feuilles papier)', 'Chef d\'antenne', 'Aucune validation indépendante', 'Aucun pointage externe', 'Ghost workers'],
        ['Liste de paie des 58', 'Gaspard T. (RH)', 'Ruth B. (Finance)', 'Rapprochement mensuel entrées / sorties', 'Ghost workers (risque réduit)'],
        ['Choix fournisseurs et recrutements', 'Prosper A., Coordinatrice', 'Coordinatrice', 'Aucune déclaration de liens', "Conflits d'intérêt"],
      ],
    },
    result: "Un tableau de cinq processus où chaque ligne montre qui initie, valide et contrôle, avec les cumuls surlignés.",
    pitfall: "Dresser la cartographie depuis l'organigramme officiel seulement. Demandez à une personne de terrain « qui fait vraiment quoi » : l'organigramme ignore souvent que le chef d'antenne justifie ses propres avances.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 3',
    title: 'Écrire la lecture du triangle de la fraude pour chaque typologie',
    intro: "Pourquoi : le triangle sert à comprendre pourquoi la fraude apparaît, pas seulement comment. Mais un seul côté se prouve : l'opportunité. Entrée : la cartographie de l'étape 1, les rumeurs et entretiens préalables.",
    steps: [
      {
        title: "Commencez par l'opportunité : ce que vous pouvez vérifier sur pièces",
        actions: [
          "1. Reprenez chaque cumul repéré à l'étape 1.",
          "2. Formulez-le comme une hypothèse de faille : « le contrôle X n'existe pas ou est fait par la même personne ».",
        ],
      },
      {
        title: 'Notez le contexte de pression, sans l\'attribuer à une personne',
        body: "Écrivez la pression structurelle (salaires, isolement, inflation locale), jamais « tel agent a des dettes ».",
      },
      {
        title: 'Relevez les rationalisations entendues',
        body: "Citez mot pour mot, avec la date et le contexte, sans nommer l'auteur si la phrase est générale.",
      },
      {
        title: 'Terminez par la source à consulter pour confirmer ou infirmer chaque hypothèse',
      },
    ],
    table: {
      columns: ['Typologie', "Opportunité supposée à Bunia", 'Pression de contexte', 'Rationalisation entendue', 'Source à consulter'],
      rows: [
        ['Détournement', "Avances carburant de Mongbwalu justifiées par la seule personne qui les reçoit ; supervision rare", 'Salaires nationaux jugés insuffisants', '« On ne peut pas arrêter une distribution pour des papiers »', 'Registre des avances, carnets de bord, calendrier des visites'],
        ['Fausses factures', "Même acheteur pour la commande et la réception ; deux fournisseurs dominants", 'Marché local opaque', '« Ici, personne ne sait ce que ça coûte vraiment »', "Extraction BC, bons de réception, relevés de prix"],
        ['Ghost workers', "Feuilles de présence papier signées par le chef d'antenne seul", 'Turn-over élevé des journaliers', '« Il en faut plus que ce qui est budgété »', 'Fichier du personnel, feuilles de présence, contrôle sur site'],
        ["Conflits d'intérêt", 'Aucune déclaration ; fournisseurs jamais recoupés avec le personnel', 'Milieu où tout le monde se connaît', '« Personne ne m\'a demandé de déclarer »', 'Dossiers du personnel, liste fournisseurs'],
      ],
    },
    result: "Un tableau à quatre lignes dans lequel la colonne opportunité est la seule à reposer sur des vérifications à faire, et la colonne source dit où les faire.",
    tip: "Gardez la colonne pression au niveau du contexte. Si vous la remplissez avec des faits sur des individus, vous sortez de votre mandat et vous exposez la mission.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 3',
    title: "Rédiger la note d'orientation d'une page et fixer les contrôles prioritaires",
    intro: "Pourquoi : la note dit au comité où vous porterez l'effort, et pourquoi, avant d'ouvrir un dossier. Entrée : tableau de l'étape 2. Format : une page, envoyée à la commanditaire avant le terrain.",
    steps: [
      {
        title: 'Classez les quatre typologies par ordre de priorité',
        actions: [
          "1. Priorité haute : une faille confirmée par une rumeur ou un incident passé.",
          "2. Priorité moyenne : une faille probable sans indice concret.",
          "3. Priorité basse : un contrôle compensateur existe (ex. validation croisée RH / Finance).",
        ],
      },
      {
        title: 'Pour chaque priorité, écrivez le contrôle à vérifier et le test prévu',
      },
      {
        title: 'Rédigez la note en quatre blocs',
        actions: [
          "1. Objet et périmètre.",
          "2. Lecture du triangle en cinq lignes.",
          "3. Priorités et contrôles à vérifier.",
          "4. Ce que vous ne ferez pas : enquêter sur des personnes.",
        ],
      },
      { title: 'Envoyez-la à Hélène V. et archivez-la dans « 01_Cadrage »' },
    ],
    example: {
      title: "Note d'orientation envoyée le 9 septembre 2026 (extrait)",
      lines: [
        "Objet : Revue du dispositif de prévention de la fraude — base de Bunia et antennes (Mongbwalu, Komanda, Nizi).",
        "Lecture du triangle : les failles testables se concentrent sur quatre cumuls : le chef d'antenne qui reçoit et justifie ses avances de carburant ; l'acheteur qui réceptionne ; les feuilles de présence signées par une seule personne ; l'absence de déclaration de liens d'intérêt.",
        "Priorités : (1) fausses factures et détournement : carburant et pièces auto, 52 bons de commande, deux fournisseurs dominants ; (2) conflits d'intérêt : croisement fournisseurs / personnel ; (3) ghost workers : priorité basse, car la paie est validée par la Finance après rapprochement mensuel.",
        "Cadre : je n'enquêterai sur aucune personne. Tout indice sérieux vous sera signalé par écrit avant toute vérification complémentaire.",
      ],
    },
    result: "Une note d'une page qui hiérarchise les quatre typologies, nomme le contrôle à tester pour chacune et précise les limites de votre rôle.",
    pitfall: "Traiter les quatre typologies à égalité par prudence. Une note qui ne hiérarchise pas ne vous protège pas : elle vous oblige à tout tester, donc à ne rien tester en profondeur.",
  },

  // ── Procédure 2 — Grille des typologies et red flags ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Ouvrir la grille et en repérer la structure',
    intro: "Pourquoi : la grille est le référentiel du module. Elle raisonne typologie par typologie, pour orienter où porter l'attention avant même d'ouvrir un dossier. Quand : après la note d'orientation, au début du terrain. Outil : grille-typologie-fraude-red-flags.xlsx.",
    steps: [
      {
        title: 'Enregistrez une copie de travail',
        body: "Fichier > Enregistrer sous : 2026-10-05_Grille_Typologies_Bunia.xlsx dans « 03_Terrain ». Conservez l'original vierge dans « 00_Modèles ».",
      },
      {
        title: "Repérez les deux onglets",
        actions: [
          "Onglet « Typologies & red flags » : colonne A, typologie ; B, indicateur de red flag ; C, « Observé sur ce dossier ? (Oui/Non) » ; D, gravité de 1 à 3, déjà renseignée ; E, constat ou preuve datée. Les 16 indicateurs occupent les lignes 5 à 20, l'en-tête est en ligne 4.",
          "Onglet « Score de risque » : quatre catégories (lignes 5 à 8) et un total général (ligne 9). Tout y est calculé : ne saisissez rien.",
        ],
      },
      {
        title: 'Identifiez votre diagnostic dans la ligne 3, restée vide',
        body: "Saisissez en A3 : « Base de Bunia et antennes — revue du dispositif anti-fraude — janv.-août 2026 — A. K. et F. S. ». Ne fusionnez aucune cellule et n'insérez aucune ligne dans les lignes 5 à 20 : les formules de l'onglet Score en dépendent.",
      },
      {
        title: 'Notez les quatre blocs de lignes',
        actions: [
          "Détournement : lignes 5 à 8. Fausses factures : lignes 9 à 12.",
          "Ghost workers : lignes 13 à 16. Conflits d'intérêt : lignes 17 à 20.",
        ],
      },
    ],
    result: "Une grille de travail identifiée, avec ses 16 indicateurs intacts et ses formules préservées.",
    pitfall: "Ajouter une colonne ou supprimer un indicateur « qui ne vous concerne pas ». Les formules de l'onglet Score additionnent les lignes 5 à 20 de la colonne D : toute modification de structure fausse le score sans prévenir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Fixer la règle de saisie et planifier les observations',
    intro: "Pourquoi : un « Oui » sans preuve est une accusation ; un « Non » sans test est une illusion. Les deux se paient plus tard devant le commanditaire. Entrée : note d'orientation, liste des sources disponibles.",
    steps: [
      {
        title: 'Appliquez la règle de la colonne C',
        actions: [
          "« Oui » : le red flag est observé, et la colonne E contient un fait daté avec sa source.",
          "« Non » : vous avez fait le test et le red flag n'existe pas ; la colonne E dit lequel (« test fait : 20 BC, 0 cas »).",
          "Test impossible : écrivez « Non » en C et « NON TESTÉ — motif » en E, puis signalez dans la lecture du score qu'il est un plancher.",
          "Écrivez exactement « Oui » ou « Non » : la formule du score ne reconnaît pas « Oui (partiel) » ni « oui, à vérifier ».",
        ],
      },
      {
        title: 'Définissez ce qu\'est un « constat daté »',
        body: "Un fait + une date + une source + une quantité : « 5 avances sur 6 justifiées avec 38 à 61 jours de retard (registre des avances, extraction du 6 octobre 2026) ».",
      },
      {
        title: 'Planifiez les sources par typologie, avant de commencer à saisir',
        body: "Les quatre lignes du tableau ci-dessous deviennent votre plan de travail sur site.",
      },
    ],
    table: {
      columns: ['Typologie', 'Sources à obtenir', 'Test prévu', 'Date'],
      rows: [
        ['Détournement', 'Registre des avances carburant, rapprochements bancaires, calendrier de supervision', 'Retards de justification ; qui rapproche ; nombre de visites', '5-6 oct.'],
        ['Fausses factures', 'Extraction des 52 BC, bons de réception, relevés de prix', 'Mise en concurrence ; réception indépendante ; comparaison de prix', '6-8 oct.'],
        ['Ghost workers', 'Fichier du personnel, listes de paie, feuilles de présence', 'Qui gère le fichier ; pointage ; contrôle d\'existence ; radiations', '8-9 oct.'],
        ["Conflits d'intérêt", 'Dossiers du personnel, liste fournisseurs, procédures', 'Déclarations ; croisement fournisseurs / personnel', '9-12 oct.'],
      ],
    },
    result: "Une règle de saisie écrite, une définition du constat daté et un plan de sources à quatre lignes.",
    tip: "Écrivez la règle de la colonne C dans un commentaire de cellule en C4 : si Fatou S. reprend la saisie, elle appliquera la même règle que vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Renseigner le bloc « Détournement » (lignes 5 à 8)',
    intro: "Pourquoi : c'est la typologie la plus directe, et celle qui nourrit la rumeur de Mongbwalu. Entrées : registre des avances, rapprochements, calendrier de supervision de la Coordinatrice.",
    steps: [
      {
        title: 'Ligne 5 — « Rapprochement bancaire effectué par la même personne qui décaisse »',
        body: "Demandez qui prépare le rapprochement et qui exécute les paiements. Si ce sont deux personnes distinctes sur les rapprochements de mai à août : « Non ».",
      },
      {
        title: 'Ligne 6 — « Justificatifs de caisse répétitivement manquants ou tardifs pour la même personne »',
        body: "Dans le registre des avances, calculez le délai entre l'avance et la justification, par bénéficiaire. Plus de la moitié des avances d'une même personne en retard signifie « Oui ».",
      },
      {
        title: 'Ligne 7 — « Base isolée avec contrôle hiérarchique direct moins d\'une fois par trimestre »',
        body: "Comptez les visites de supervision documentées sur douze mois, par antenne. Moins de quatre sur l'année : « Oui ».",
      },
      {
        title: 'Ligne 8 — « Écart de perception salariale marqué entre personnel national et international, jamais adressé »',
        body: "Cherchez une trace d'enquête salariale ou de dialogue avec le personnel. Si elle existe et est datée : « Non ».",
      },
    ],
    table: {
      columns: ['Ligne', 'C — Observé ?', 'D — Gravité', 'E — Constat daté'],
      rows: [
        ['5', 'Non', '3', "Rapprochements de mai à août 2026 préparés à Goma, visés par Ruth B. (8 sept. 2026) ; paiements exécutés par un autre agent. Test fait : 4 mois sur 4."],
        ['6', 'Oui', '3', "5 avances carburant sur 6 de Mongbwalu (mars-août 2026) justifiées avec 38 à 61 jours de retard par le chef d'antenne (registre des avances, extraction du 6 oct. 2026)."],
        ['7', 'Oui', '2', "Mongbwalu : 2 visites de supervision documentées en 12 mois (12/02 et 19/06/2026), contre 4 attendues (registre de missions de la Coordinatrice, 5 oct. 2026)."],
        ['8', 'Non', '1', "Enquête salariale réalisée en janvier 2026, deux réunions de dialogue avec le personnel en 2026 (comptes rendus du 18/03 et du 24/06)."],
      ],
    },
    result: "Quatre lignes complètes ; le sous-total du bloc sera calculé à l'étape 7 : 3 + 2 = 5 points.",
    pitfall: "Cocher « Oui » sur la ligne 7 parce que Mongbwalu « est vraiment loin ». L'indicateur est le nombre de visites documentées, pas l'impression de distance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Renseigner le bloc « Fausses factures » (lignes 9 à 12)',
    intro: "Pourquoi : les fausses factures exigent presque toujours une collusion, donc un contrôle de réception indépendant est la meilleure barrière. Entrées : extraction des 52 bons de commande, bons de réception, relevés de prix.",
    steps: [
      {
        title: 'Ligne 9 — « Même petit cercle de fournisseurs systématiquement retenu sans mise en concurrence documentée »',
        body: "Dans l'extraction, calculez la part des deux premiers fournisseurs ; pour chaque commande, cherchez le tableau comparatif d'offres.",
      },
      {
        title: 'Ligne 10 — « Réception de marchandise non contre-vérifiée par une personne indépendante de l\'achat »',
        body: "Tirez 20 bons de commande ; sur chaque bon de réception, comparez le signataire au demandeur.",
      },
      {
        title: 'Ligne 11 — « Prix systématiquement supérieurs au marché local sans justification documentée »',
        body: "Relevez 8 articles courants et comparez avec trois relevés de prix indépendants : une médiane de +20 % ou plus appelle « Oui ».",
      },
      {
        title: 'Ligne 12 — « Facture de complaisance suspectée (biens ou services jamais physiquement livrés) »',
        body: "Pour trois factures de services (garage, transport), vérifiez la livraison réelle par visite ou par témoin indépendant.",
      },
    ],
    table: {
      columns: ['Ligne', 'C — Observé ?', 'D — Gravité', 'E — Constat daté'],
      rows: [
        ['9', 'Oui', '3', "41 des 52 BC carburant et pièces auto (79 %) attribués à deux fournisseurs, sans tableau comparatif (extraction BC, 6 oct. 2026)."],
        ['10', 'Oui', '3', "9 bons de réception sur 20 testés signés par le demandeur lui-même, Prosper A. (échantillon tiré le 7 oct. 2026)."],
        ['11', 'Non', '2', "8 articles comparés à 3 relevés de prix : écart médian de +4 % (relevés du 7 oct. 2026)."],
        ['12', 'Non', '3', "3 factures du garage vérifiées sur place le 8 oct. 2026 : travaux constatés et photographiés."],
      ],
    },
    result: "Quatre lignes complètes ; le sous-total du bloc sera de 3 + 3 = 6 points.",
    tip: "Tirez l'échantillon de 20 bons de commande par tirage au sort (fonction ALEA dans l'extraction) et archivez le fichier du tirage : vous prouvez que vous n'avez pas choisi les dossiers qui arrangeaient votre thèse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Renseigner le bloc « Ghost workers » (lignes 13 à 16)',
    intro: "Pourquoi : les ghost workers prospèrent dans les bases à fort turn-over avec un contrôle RH-Finance faible. Vous ne refaites pas le contrôle de paie (module 05) : vous cherchez la signature d'opportunité. Entrées : fichier du personnel, listes de paie, feuilles de présence.",
    steps: [
      {
        title: 'Ligne 13 — « Personne gérant le fichier du personnel aussi celle qui transmet la liste de paie, sans vérification croisée »',
        body: "Suivez le circuit de la liste de paie de juillet : qui la prépare, qui la valide, qui la paie ?",
      },
      {
        title: 'Ligne 14 — « Absence de pointage biométrique ou de présence physique vérifiable sur les bases à fort turn-over »',
        body: "Regardez comment la présence est constatée sur chaque antenne, et qui la signe.",
      },
      {
        title: 'Ligne 15 — « Employé absent des visites terrain mais toujours présent sur la liste de paie »',
        body: "Tirez 12 noms parmi les journaliers des antennes et vérifiez leur présence physique lors des visites.",
      },
      {
        title: 'Ligne 16 — « Aucune radiation formalisée pour un départ connu depuis plusieurs mois »',
        body: "Croisez les démissions et fins de contrat de l'année avec le fichier du personnel actif.",
      },
    ],
    table: {
      columns: ['Ligne', 'C — Observé ?', 'D — Gravité', 'E — Constat daté'],
      rows: [
        ['13', 'Non', '3', "Liste de juillet 2026 préparée par Gaspard T. (RH), validée par Ruth B. (Finance) après rapprochement entrées / sorties (9 sept. 2026)."],
        ['14', 'Oui', '3', "Aucun pointage externe ; feuilles de présence papier signées par le seul chef d'antenne à Mongbwalu, Komanda et Nizi (observé les 8 et 9 oct. 2026). Turn-over journaliers : 31 % sur 12 mois."],
        ['15', 'Non', '3', "Contrôle d'existence physique de 12 journaliers de Nizi le 8 oct. 2026 : 12 présents sur 12."],
        ['16', 'Oui', '2', "2 départs connus (30/04 et 31/05/2026) non radiés du fichier du personnel actif (extraction du 30 sept.) ; aucun salaire versé après le départ (3 bulletins vérifiés)."],
      ],
    },
    result: "Quatre lignes complètes ; le sous-total du bloc sera de 3 + 2 = 5 points.",
    pitfall: "Écrire « Oui » à la ligne 16 puis conclure à des salaires fantômes. Le red flag est l'absence de radiation ; le versement après le départ est un autre fait, que vous avez testé et qui est négatif ici. Les deux se notent séparément.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: "Renseigner le bloc « Conflits d'intérêt » (lignes 17 à 20)",
    intro: "Pourquoi : c'est la typologie la plus insidieuse, parce qu'elle ne suppose souvent aucun acte illégal isolé, seulement une non-déclaration. Entrées : dossiers du personnel, liste des fournisseurs, politique v3 (article 7).",
    steps: [
      {
        title: 'Ligne 17 — « Absence de procédure de déclaration systématique des liens d\'intérêt à l\'entrée en poste »',
        body: "Ouvrez 10 dossiers du personnel : y a-t-il un formulaire de déclaration, signé et daté ?",
      },
      {
        title: 'Ligne 18 — « Marché attribué à une entreprise dont le lien avec un agent décisionnaire n\'a jamais été vérifié »',
        body: "Demandez s'il existe un croisement entre la liste des fournisseurs et celle du personnel (adresses, téléphones, comptes de paiement, noms de famille).",
      },
      {
        title: 'Ligne 19 — « Embauche d\'un proche sans déclaration préalable ni recrutement documenté »',
        body: "Prenez les recrutements de l'année : chaque dossier comporte-t-il comparaison de candidatures et déclaration de liens ?",
      },
      {
        title: 'Ligne 20 — « Décision sensible influencée par un agent ayant un intérêt financier personnel non déclaré »',
        body: "Cette ligne exige un lien établi. Un rapprochement de coordonnées seul ne suffit pas : notez-le comme « à vérifier » et laissez « Non ».",
      },
    ],
    table: {
      columns: ['Ligne', 'C — Observé ?', 'D — Gravité', 'E — Constat daté'],
      rows: [
        ['17', 'Oui', '2', "0 formulaire de déclaration dans les 58 dossiers du personnel ; l'article 7 de la politique v3 prévoit la déclaration sans en fixer la forme (dossiers consultés le 9 oct. 2026)."],
        ['18', 'Oui', '3', "Aucun croisement fournisseurs / personnel avant la mission. Croisement réalisé le 9 oct. 2026 : 1 correspondance de téléphone avec un agent de Bunia, transmise à la présidente du comité."],
        ['19', 'Non', '2', "3 recrutements de 2026 : candidatures comparées et dossiers complets (dossiers RH du 9 oct. 2026)."],
        ['20', 'Non', '3', "Lien non établi à ce jour : la correspondance de téléphone est un indice à vérifier par d'autres que vous, pas un constat."],
      ],
    },
    result: "Quatre lignes complètes ; le sous-total du bloc sera de 2 + 3 = 5 points. La ligne 18 est « Oui » parce que le contrôle n'existait pas, pas parce qu'un conflit est prouvé.",
    tip: "La ligne 20 est la seule à exiger plus qu'un indice. Tant que le lien n'est pas établi par la personne chargée de l'enquête, « Non » avec une explication précise en colonne E vous protège et protège la personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: "Lire l'onglet « Score de risque » et le traduire en priorités d'audit",
    intro: "Pourquoi : le score oriente l'effort, il ne démontre rien. Vous devez savoir d'où vient chaque chiffre, pour le défendre devant le comité. Entrée : les 16 lignes saisies.",
    steps: [
      {
        title: "Comprenez les formules de l'onglet",
        actions: [
          "Colonne B (lignes 5 à 8) : somme des gravités de la colonne D des lignes où la colonne C vaut « Oui », pour la catégorie de la colonne A. La formule est =SUMIFS(…) ou =SOMME.SI.ENS(…) dans un Excel en français.",
          "Colonne C : « ALERTE ÉLEVÉE » à partir de 6 points, « À SURVEILLER » à partir de 3, « FAIBLE » de 1 à 2, « NORMAL » à 0.",
          "Cellule B9 : total général, somme des quatre catégories (pas de niveau d'alerte à ce niveau).",
        ],
      },
      {
        title: 'Recalculez à la main chaque sous-total avant de lire le niveau',
        body: "Additionnez les gravités des seuls « Oui » : si votre calcul diffère de la cellule, cherchez un « Oui » mal orthographié.",
      },
      {
        title: 'Faites un test de sensibilité',
        body: "Passez temporairement un « Non » en « Oui » pour voir si le niveau bascule, puis revenez à la saisie réelle. Cela vous montre quels indicateurs pèsent sur le niveau.",
      },
      {
        title: 'Traduisez chaque niveau en décision de mission',
        actions: [
          "ALERTE ÉLEVÉE : tests détaillés prioritaires sur site et note d'information à la commanditaire.",
          "À SURVEILLER : test ciblé sur les lignes « Oui » et recommandation de contrôle.",
          "FAIBLE ou NORMAL : aucun test supplémentaire ; justifier par écrit si des lignes n'ont pas été testées.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Lignes « Oui » (gravité)', 'Score', 'Niveau d\'alerte', 'Décision'],
      rows: [
        ['Détournement', 'L6 (3) + L7 (2)', '5', 'À SURVEILLER', 'Test ciblé : avances carburant de Mongbwalu'],
        ['Fausses factures', 'L9 (3) + L10 (3)', '6', 'ALERTE ÉLEVÉE', 'Tests détaillés : concurrence et réceptions'],
        ['Ghost workers', 'L14 (3) + L16 (2)', '5', 'À SURVEILLER', 'Recommandation : pointage indépendant'],
        ["Conflits d'intérêt", 'L17 (2) + L18 (3)', '5', 'À SURVEILLER', 'Note au comité ; vérification par d\'autres'],
        ['TOTAL GÉNÉRAL', '—', '21', '—', '—'],
      ],
    },
    example: {
      title: 'Test de sensibilité sur le détournement',
      lines: [
        "Si la ligne 5 (rapprochement par la personne qui décaisse) passait de « Non » à « Oui » : 5 + 3 = 8, le niveau passerait de « À SURVEILLER » à « ALERTE ÉLEVÉE ». Le pivot est donc la séparation décaissement / rapprochement.",
        "Lecture finale : une seule catégorie en alerte élevée (fausses factures), trois à surveiller. Le total de 21 sur 41 possibles n'est pas un « taux de fraude » : il est un indicateur de failles.",
      ],
    },
    result: "Une grille complète, des sous-totaux recalculés, un niveau par catégorie et une décision de mission par niveau.",
    pitfall: "Présenter le total de 21 comme « 51 % de risque de fraude ». Le score additionne des gravités d'indicateurs ; il ne mesure ni une probabilité ni un montant. Dans le rapport, parlez de niveaux d'alerte et de faits datés.",
  },

  // ── Procédure 3 — Test d'anonymat du canal ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 7',
    title: "Obtenir l'accord écrit du commanditaire et cadrer le test",
    intro: "Pourquoi : déposer un faux signalement dans un dispositif réel déclenche des réactions réelles (enquête, rumeur, suspicion). Sans accord écrit, vous seriez vous-même en faute. Entrées : la politique de signalement, la liste des canaux annoncés. Outil : evaluation-mecanisme-signalement-culture.docx, section 1.",
    steps: [
      {
        title: 'Rédigez un protocole de test d\'une page',
        actions: [
          "1. Objectif : vérifier par un essai réel si l'anonymat annoncé est tenu.",
          "2. Canaux visés et dates prévues.",
          "3. Scénario fictif : plausible mais sans nom réel, sans accusation contre une personne identifiable.",
          "4. Qui est informé : la commanditaire seule ; ni l'audité, ni le service qui reçoit.",
          "5. Règle d'arrêt : si un acteur engage une action réelle, vous prévenez la commanditaire le jour même.",
        ],
      },
      {
        title: 'Faites signer le protocole par la présidente du comité',
        body: "Signature avant tout dépôt. Sans signature, pas de test.",
      },
      {
        title: 'Désignez qui dépose',
        body: "Choisissez la personne dont la voix, le nom et le réseau sont les moins connus de la base. Ici : Fatou S.",
      },
    ],
    example: {
      title: 'Autorisation reçue le 14 septembre 2026',
      lines: [
        "« Le comité d'audit autorise l'auditrice interne à déposer, entre le 21 septembre et le 16 octobre 2026, un signalement fictif par les canaux officiels de HSGL, dans le seul but de tester l'anonymat et le traitement. Le dépôt ne doit nommer aucune personne réelle. Les services destinataires ne seront pas informés avant la fin du test. Si un acteur engage une action réelle, l'auditrice m'en informe le jour même. — Hélène V., Présidente du comité d'audit »",
      ],
    },
    result: "Un protocole signé et daté, archivé dans « 00_Indépendance », qui couvre les canaux, le scénario, l'information restreinte et la règle d'arrêt.",
    pitfall: "Informer « par courtoisie » la Compliance Officer avant le test. Vous testeriez alors le comportement d'une personne avertie, pas celui d'un canal en conditions réelles.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 7',
    title: 'Localiser le canal réel, pas seulement le canal documenté',
    intro: "Pourquoi : un canal théoriquement actif, dont la ligne est coupée depuis huit mois, n'est pas un mécanisme : c'est une façade. Entrées : politique v3, affiches, intranet, premiers entretiens.",
    steps: [
      {
        title: 'Listez chaque canal cité, avec la source qui le cite',
        body: "Politique (article), affiche, intranet, courriel de bienvenue, réponse d'un agent. Un canal cité nulle part officiellement mais connu des agents compte aussi.",
      },
      {
        title: 'Vérifiez pour chaque canal sa date de dernière mise à jour',
        body: "Date du document qui le mentionne, date de dernière modification de l'affiche, date de dernière réponse reçue.",
      },
      {
        title: 'Essayez chaque canal sans rien déposer',
        actions: [
          "Appelez le numéro, notez le résultat et la date.",
          "Écrivez à l'adresse un message neutre (« test de réception ») uniquement si votre protocole l'autorise, sinon relevez l'adresse et vérifiez son existence avec l'administrateur de la messagerie.",
          "Relevez où se trouve la boîte physique et qui détient la clé.",
        ],
      },
    ],
    table: {
      columns: ['Canal', 'Cité dans', 'Dernière mise à jour', 'Fonctionne ?'],
      rows: [
        ['Boîte mail alerte@hsgl-ong.example', 'Politique v3 (art. 11), affiche du hall', 'Affiche de mars 2021', "Oui : adresse active, aucun accusé de réception automatique"],
        ['Ligne verte', 'Politique v3 (art. 11)', 'Mars 2021', "Non : numéro non attribué lors de 3 appels (15, 16 et 17 sept. 2026) ; coupé depuis janvier 2026 selon l'opérateur"],
        ['Boîte à suggestions (hall de Bunia)', 'Pas de document ; connue par entretien', 'Aucune', 'Oui : présente, ouverte une fois par mois par l\'administrateur de la base'],
      ],
    },
    result: "Un inventaire des canaux réels : deux fonctionnent, un est mort. Le test d'anonymat portera sur les deux canaux vivants ; la ligne verte est consignée comme défaillante en section 1.",
    tip: "Un canal mort est déjà un constat : la politique annonce un moyen que personne ne peut utiliser depuis huit mois, et personne ne l'a signalé. Datez-le et conservez la trace de vos trois appels.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 7',
    title: 'Préparer le signalement fictif et les conditions de dépôt',
    intro: "Pourquoi : un test mal conçu prouve seulement que vous êtes reconnaissable. Il doit reproduire ce que ferait un agent de terrain réel. Entrées : protocole signé, inventaire des canaux vivants.",
    steps: [
      {
        title: 'Rédigez un message plausible, court et neutre',
        actions: [
          "1. Quoi : un fait vérifiable mais fictif (ex. « des bons de carburant sont signés en blanc »).",
          "2. Où et quand : un site et une période.",
          "3. Comment l'auteur le sait : « je l'ai vu ».",
          "4. Aucun nom de personne ; aucun élément de votre style ou de votre vocabulaire d'auditeur.",
        ],
      },
      {
        title: 'Choisissez des conditions de dépôt réalistes et anonymes',
        actions: [
          "Mail : adresse gratuite créée pour l'occasion, depuis un appareil personnel, sur un réseau extérieur à l'organisation (réseau mobile).",
          "Téléphone : numéro absent du répertoire de l'organisation.",
          "Ne vous connectez à aucun compte de l'organisation pendant le dépôt.",
        ],
      },
      {
        title: 'Préparez le journal du test',
        body: "Un tableau à quatre colonnes : date et heure, action, canal, preuve (capture, photo, nom du fichier).",
      },
    ],
    example: {
      title: 'Message déposé le 21 septembre 2026',
      lines: [
        "« Bonjour. Je travaille à l'antenne de Komanda. Depuis plusieurs semaines, des bons de sortie de carburant sont signés avant d'être remplis. Je l'ai vu moi-même plusieurs fois. Je préfère ne pas donner mon nom. Merci de regarder ce qui se passe. »",
        "Conditions : adresse webmail créée le 20/09 sur un téléphone personnel, envoi en réseau mobile depuis un hôtel de Goma.",
      ],
    },
    result: "Un message prêt, inoffensif, sans aucun lien identifiable avec vous, et un journal vide mais structuré.",
    pitfall: "Nommer une personne réelle, même pour « rendre le test crédible ». Vous créeriez un dossier disciplinaire réel contre quelqu'un qui n'a rien fait.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 7',
    title: 'Déposer le signalement et tenir le journal horodaté',
    intro: "Pourquoi : le délai et la forme de la réponse font partie des résultats. Un canal qui ne répond pas est un résultat. Entrées : message, protocole, journal.",
    steps: [
      {
        title: 'Déposez le message et capturez immédiatement la preuve d\'envoi',
        body: "Capture avec l'heure visible, nom de fichier daté, rangée dans « 03_Terrain/Test_anonymat ».",
      },
      {
        title: 'Notez chaque événement dans le journal, dès qu\'il se produit',
        actions: [
          "Accusé de réception reçu, ou non, et à quelle heure.",
          "Toute réaction visible (rumeur sur le site, question à un agent de Komanda).",
        ],
      },
      {
        title: 'Fixez trois échéances de contrôle',
        body: "J+3 (accusé de réception), J+7 (première réaction), J+14 (suite donnée). Ces délais sont repris au protocole de la procédure 8.",
      },
    ],
    table: {
      columns: ['Date et heure', 'Action ou événement', 'Canal', 'Preuve'],
      rows: [
        ['21/09/2026, 09h12', 'Dépôt du message par Fatou S.', 'Mail alerte@', 'Capture 2026-09-21_envoi.png'],
        ['21/09/2026, 09h13', "Aucun accusé de réception automatique", 'Mail alerte@', 'Capture de la boîte de l\'expéditeur'],
        ['24/09/2026 (J+3)', "Aucun accusé de réception reçu", 'Mail alerte@', 'Capture 2026-09-24_boite.png'],
        ['28/09/2026 (J+7)', 'Aucune réponse ni réaction', 'Mail alerte@', 'Capture 2026-09-28_boite.png'],
        ['05/10/2026 (J+14)', 'Aucune suite connue ; aucun changement constaté à Komanda', 'Mail alerte@', 'Observation, entretien du 6 oct.'],
      ],
    },
    result: "Un journal horodaté avec trois points de contrôle, qui montre que le message n'a reçu aucun accusé de réception en 14 jours.",
    tip: "Ne relancez pas depuis le même compte pour « voir si ça marche » : vous modifieriez le test. Une relance ne se fait qu'à l'issue des 14 jours.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 7',
    title: 'Remonter la chaîne : qui reçoit techniquement le message en premier ?',
    intro: "Pourquoi : un canal « anonyme » n'est crédible que si ni l'identité de l'expéditeur, ni le message ne passent par la ligne hiérarchique visée. Entrée : le journal du test, l'accès de l'administrateur de la messagerie. Moment : à partir du lendemain du dépôt.",
    steps: [
      {
        title: 'Demandez à l\'administrateur informatique la liste d\'accès à la boîte',
        body: "Nom, fonction, droit (lecture, envoi, délégation), date de dernière modification des droits.",
      },
      {
        title: 'Demandez le journal d\'accès au message de test',
        body: "Qui l'a ouvert, à quelle heure, s'il a été transféré ou marqué comme non lu.",
      },
      {
        title: 'Faites-vous montrer ce que voit le destinataire',
        actions: [
          "L'adresse de l'expéditeur en clair.",
          "L'en-tête complet du message : adresse IP ou nom du serveur d'origine.",
          "Pour un appel, l'affichage du numéro appelant et son coût.",
        ],
      },
      {
        title: 'Identifiez qui peut tout lire',
        body: "L'administrateur de la messagerie a-t-il accès au contenu ? À qui rend-il compte ?",
      },
    ],
    table: {
      columns: ['Question', 'Réponse', 'Preuve'],
      rows: [
        ['Qui a accès à la boîte « alerte » ?', "Chantal D. (conformité), Gaspard T. (RH), Pascaline N. (assistante du Directeur Pays)", "Liste d'accès de l'administrateur, 22 sept. 2026"],
        ['Qui a ouvert le message ?', "Pascaline N., le 21/09/2026 à 14h03 ; ni transfert, ni réponse", "Journal d'accès de la boîte, 22 sept. 2026"],
        ["Ce que voit le destinataire", "Adresse expéditrice en clair ; adresse IP de l'opérateur dans l'en-tête ; depuis le Wi-Fi de la base, l'IP désignerait le site", "Capture de l'en-tête, 22 sept. 2026"],
        ['Qui peut tout lire ?', "L'administrateur informatique de Goma, rattaché au Directeur Pays", "Organigramme informatique, 22 sept. 2026"],
      ],
    },
    result: "Une chaîne de réception documentée : le premier lecteur du message est une personne placée sous l'autorité directe du Directeur Pays, dont les décisions sont aussi dans le périmètre de la revue.",
    pitfall: "Conclure sur la seule déclaration du service concerné (« personne d'autre que Chantal ne lit »). Seul le journal technique de la boîte prouve qui a lu, et à quelle heure.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 7',
    title: 'Vérifier ce que la hiérarchie visée sait du canal',
    intro: "Pourquoi : le template demande de vérifier la traçabilité technique et la connaissance du canal par la hiérarchie visée. Un canal peut être techniquement fermé et pourtant perçu comme surveillé. Entrée : trois entretiens courts avec des responsables.",
    steps: [
      {
        title: 'Choisissez trois responsables susceptibles d\'être visés par un signalement',
        body: "Un cadre de la base (Coordinatrice), un responsable des achats (Prosper A.), un chef d'antenne (Mongbwalu).",
      },
      {
        title: 'Posez les trois mêmes questions, sans les prévenir du test',
        actions: [
          "1. « Connaissez-vous l'adresse ou le numéro de signalement de l'organisation ? »",
          "2. « Qui le reçoit, selon vous ? »",
          "3. « Si un signalement vous concernait, en seriez-vous informé ? »",
        ],
      },
      {
        title: 'Notez les réponses mot pour mot, avec la date',
        body: "Écrivez ce qui est dit, pas ce que vous en déduisez.",
      },
    ],
    example: {
      title: 'Réponses du 6 octobre 2026 (extraits)',
      lines: [
        "Coordinatrice : « Oui, l'adresse alerte@. Je crois que c'est Chantal qui la lit. Pascaline aussi, je pense. »",
        "Logistics Officer : « Je ne connais pas l'adresse. Si c'est sur moi, Joseph m'en parlera. »",
        "Chef d'antenne de Mongbwalu : « La ligne ? Je n'ai pas d'avis. Ce qui arrive à Goma, on le sait vite ici. »",
      ],
    },
    result: "Trois réponses datées qui montrent que deux responsables sur trois supposent que l'information remonte vers la direction.",
    pitfall: "Poser la question de manière suggestive (« vous savez bien que c'est anonyme ? »). Vous récolteriez la réponse polie, non la perception réelle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 7 sur 7',
    title: 'Consigner le résultat dans la section 1 du template et clore le test',
    intro: "Pourquoi : un canal qui échoue au test n'est pas anonyme, quoi qu'affirme la politique. Ce résultat doit figurer dans le dossier. Entrées : journal, preuves, réponses de l'étape 6. Outil : evaluation-mecanisme-signalement-culture.docx.",
    steps: [
      {
        title: 'Enregistrez une copie de travail du template',
        body: "2026-10-12_Evaluation_Signalement_Bunia.docx dans « 03_Terrain ». Le document compte cinq sections.",
      },
      {
        title: 'Rédigez la description du test sous le titre de la section 1',
        body: "Dans les deux lignes vides sous la consigne : le test réalisé, la date, le protocole, les conditions de dépôt, le résultat, en dix lignes maximum.",
      },
      {
        title: 'Complétez le tableau « Canal testé / Anonymat confirmé par le test ? »',
        body: "Une ligne par canal. Dans la seconde colonne, écrivez « Oui » ou « Non », puis la preuve. Ajoutez des lignes au tableau si besoin.",
      },
      {
        title: 'Clôturez le test',
        actions: [
          "Informez la présidente du comité du résultat par écrit.",
          "Demandez-lui de faire savoir au service concerné que le message était un test, une fois le dossier remis.",
        ],
      },
    ],
    example: {
      title: 'Section 1 telle que saisie',
      lines: [
        "Test réalisé le 21/09/2026 avec l'accord écrit du comité (14/09) : dépôt d'un signalement fictif sur alerte@ depuis une adresse jetable en réseau mobile. Aucun accusé de réception à J+3, J+7 et J+14. Le message a été ouvert à 14h03 par l'assistante du Directeur Pays, sans transfert ni suite.",
        "Canal 1 — Boîte mail alerte@hsgl-ong.example | Non. Adresse expéditrice et IP lisibles ; 3 lecteurs dont une personne placée sous le Directeur Pays ; messagerie administrée à Goma (journal d'accès, 22/09).",
        "Canal 2 — Boîte à suggestions du hall de Bunia | Non. Dépôt visible depuis le poste de garde ; clé détenue par l'administrateur de la base, sous la Coordinatrice ; aucun registre d'ouverture (observation du 05/10).",
        "Canal 3 — Ligne verte | Non. Numéro non attribué depuis janvier 2026 (appels des 15, 16 et 17/09) ; non testable.",
      ],
    },
    result: "La section 1 est complète : trois canaux, trois « Non », chacun avec sa preuve datée, et un test clos auprès du comité.",
    pitfall: "Écrire « anonymat partiel ». La question du template est binaire : l'anonymat est confirmé par le test ou il ne l'est pas, et la colonne exige une preuve.",
  },

  // ── Procédure 4 — Historique des signalements ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: "Demander le registre des signalements sur trois ans",
    intro: "Pourquoi : un mécanisme en place depuis des années qui n'a reçu aucun signalement, dans une organisation exposée, n'est presque jamais la preuve d'une absence de problème. Entrée : demande écrite à la fonction qui gère le canal. Outil : section 2 du template.",
    steps: [
      {
        title: 'Adressez une demande écrite à la Compliance Officer',
        actions: [
          "Période : les trois dernières années, soit du 1er octobre 2023 au 30 septembre 2026.",
          "Nature des informations : nombre, canal, nature générale (sans détail confidentiel), date de réception, délai d'accusé de réception, délai de clôture, suite donnée.",
          "Précisez que vous ne demandez ni noms ni détails permettant d'identifier une personne.",
        ],
      },
      {
        title: 'Fixez une date de réponse',
        body: "Cinq jours ouvrés. Notez la date de la demande et celle de la réponse : le délai est un résultat.",
      },
      {
        title: 'Demandez la preuve de l\'existence d\'un registre',
        body: "Fichier, cahier ou outil. S'il n'existe pas, c'est un constat en soi : le canal reçoit mais personne ne garde la trace.",
      },
    ],
    example: {
      title: 'Demande envoyée le 5 octobre 2026 et réponse du 8 octobre',
      lines: [
        "« Chantal, dans le cadre de la revue du dispositif de prévention de la fraude, pourriez-vous me transmettre, au plus tard le 12 octobre, le registre des signalements reçus entre le 1er octobre 2023 et le 30 septembre 2026 : date, canal, nature générale, accusé de réception, date de clôture, suite donnée ? Je n'ai pas besoin de noms. Merci. Amani K. »",
        "Réponse du 8 octobre : « Il n'y a pas de registre. Nous avons reçu quelques messages, je peux te dire de mémoire : deux vrais, que nous avons traités en une quinzaine de jours. »",
      ],
    },
    result: "Une demande datée, une réponse datée et un premier constat : il n'existe aucun registre.",
    pitfall: "Accepter « de mémoire » comme source. Une mémoire n'est pas un registre : vous devez reconstituer l'historique vous-même, à l'étape suivante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Reconstituer l\'historique à partir de sources croisées',
    intro: "Pourquoi : quand il n'existe pas de registre, la vérité se reconstitue en croisant au moins trois sources indépendantes. Entrées : boîte « alerte », dossiers disciplinaires, notifications aux bailleurs, entretiens.",
    steps: [
      {
        title: 'Parcourez la boîte « alerte » sur trois ans avec l\'administrateur',
        body: "Filtrez les messages entrants, retirez les courriers indésirables et les tests techniques, listez le reste.",
      },
      {
        title: 'Croisez avec les sanctions disciplinaires des trois ans',
        body: "Pour chaque licenciement ou sanction, vérifiez la cause : un signalement l'a-t-il déclenchée ?",
      },
      {
        title: 'Croisez avec les notifications faites aux bailleurs',
        body: "Un soupçon de fraude touchant des fonds d'un bailleur fait généralement l'objet d'une notification contractuelle : vérifiez l'absence ou la présence de courriers.",
      },
      {
        title: 'Complétez par deux entretiens',
        body: "L'ancien et l'actuel destinataires du canal : demandez de décrire un traitement concret, sans leur communiquer vos chiffres.",
      },
    ],
    table: {
      columns: ['Date', 'Canal', 'Nature générale', 'Visait', 'Accusé de réception', 'Clôture', 'Suite'],
      rows: [
        ['14/11/2024', 'Mail alerte@', 'Suspicion de vol de carburant (Goma)', 'Un agent logistique (junior)', 'Non retrouvé', '34 jours (18/12/2024)', 'Licenciement'],
        ['06/05/2025', 'Mail alerte@', 'Lien familial avec un fournisseur', 'Un cadre de base', 'Non retrouvé', '52 jours (27/06/2025)', 'Mutation, aucune sanction'],
        ['Bunia, 3 ans', 'Tous', '—', '—', '—', '—', '0 signalement'],
      ],
    },
    result: "Un tableau de reconstitution à partir de trois sources : 2 signalements retrouvés pour HSGL, 0 pour Bunia, aucun accusé de réception tracé, deux clôtures de 34 et 52 jours.",
    tip: "Remplacez les noms par des fonctions dans votre tableau de travail : il circulera dans votre dossier, et la confidentialité du lanceur d'alerte vaut aussi pour ceux qui n'ont pas signalé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Calculer les délais et les indicateurs de traitement',
    intro: "Pourquoi : « nous traitons rapidement » est une opinion ; « 43 jours en moyenne » est un fait. Entrée : le tableau de reconstitution. Objectif : renseigner la colonne « Délai de réponse moyen constaté par la direction » du template avec une valeur contrôlée.",
    steps: [
      {
        title: 'Calculez le délai de chaque signalement',
        actions: [
          "Délai d'accusé de réception : date d'accusé moins date de réception. S'il n'existe pas, écrivez « non tracé ».",
          "Délai de clôture : date de clôture moins date de réception, en jours calendaires.",
        ],
      },
      {
        title: 'Calculez la moyenne et comparez-la à la déclaration de la direction',
        body: "Moyenne = somme des délais ÷ nombre de signalements. Comparez avec ce que dit la direction.",
      },
      {
        title: 'Calculez le taux de signalement',
        body: "Nombre de signalements pour 100 employés sur la période. Il n'existe pas de référence universelle : l'indicateur sert à comparer entre bases et avec les entretiens.",
      },
      {
        title: 'Relevez la suite donnée à chaque dossier',
        body: "Enquête documentée ? Sanction ? Retour à l'auteur ? Notification au bailleur ?",
      },
    ],
    table: {
      columns: ['Indicateur', 'Calcul', 'Résultat'],
      rows: [
        ['Délai de clôture moyen', '(34 + 52) ÷ 2', '43 jours'],
        ['Délai annoncé par la direction', 'Déclaration orale de la Compliance Officer, 8 oct. 2026', '« Une quinzaine de jours »'],
        ['Écart', '43 − 15', '28 jours, soit près de trois fois le délai annoncé'],
        ['Taux de signalement HSGL pays', '2 ÷ 410 employés × 100', '0,5 pour 100 employés sur 3 ans'],
        ['Taux de signalement Bunia', '0 ÷ 58 × 100', '0 pour 100 employés sur 3 ans'],
        ['Accusés de réception tracés', '0 sur 2', 'Aucun'],
      ],
    },
    result: "Les indicateurs sont calculés, et l'écart de 28 jours entre la déclaration et les dossiers est documenté.",
    pitfall: "Écrire « délai moyen : 15 jours » dans la section 2 parce que la direction l'a dit. Le template demande le délai « constaté » : celui que vous avez calculé sur dossiers.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: "Interpréter l'absence de signalement et remplir la section 2",
    intro: "Pourquoi : le template demande de documenter l'absence prolongée de signalements « comme un signal à part entière ». Vous devez dire ce que ce silence peut signifier et ce qui l'explique réellement. Entrées : indicateurs, entretiens.",
    steps: [
      {
        title: 'Posez les hypothèses explicatives, sans trancher',
        actions: [
          "H1 — Rien ne se passe : aucune faute à signaler.",
          "H2 — Le canal est inconnu ou inaccessible.",
          "H3 — Le canal n'inspire pas confiance : peur des représailles, anonymat douteux.",
          "H4 — Les signalements existent mais se perdent : pas de registre, pas d'accusé.",
        ],
      },
      {
        title: 'Testez chaque hypothèse avec une preuve de votre dossier',
        body: "H2 et H3 : entretiens de terrain (procédure 5). H4 : absence de registre. H1 : red flags observés dans la grille.",
      },
      {
        title: 'Complétez le tableau de la section 2',
        body: "Première cellule : nombre de signalements reçus (3 dernières années). Seconde : délai de réponse moyen constaté.",
      },
      {
        title: 'Ajoutez sous le tableau un constat de trois lignes sur le silence',
      },
    ],
    example: {
      title: 'Section 2 telle que saisie',
      lines: [
        "Nombre de signalements reçus (3 dernières années) | Bunia : 0 ; HSGL pays : 2 (14/11/2024 et 06/05/2025) pour 410 employés, reconstitués à partir de la boîte « alerte » et des dossiers disciplinaires, aucun registre n'existant.",
        "Délai de réponse moyen constaté par la direction | 43 jours (34 et 52), contre « une quinzaine de jours » déclarés le 08/10/2026 ; aucun accusé de réception tracé.",
        "Constat : trois ans sans signalement à Bunia, alors que des rumeurs circulent à Mongbwalu, ne démontrent pas l'absence de problème. Les hypothèses « canal inconnu » et « canal non crédible » sont plus probables que « rien à signaler » (entretiens, procédure 5).",
      ],
    },
    result: "La section 2 est complète et le silence est documenté comme un signal : les chiffres, leur méthode de reconstitution et trois hypothèses sont lisibles par la commanditaire.",
    pitfall: "Conclure que « le canal marche, puisque rien n'a été signalé ». Ni le silence ni le bruit ne prouvent le bon fonctionnement : seuls le test, les délais et le terrain le disent.",
  },

  // ── Procédure 5 — Accessibilité réelle pour le terrain ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: "Constituer l'échantillon d'agents de terrain à interroger",
    intro: "Pourquoi : un canal accessible pour un cadre connecté du siège peut être inutilisable pour un gardien d'antenne isolé. Seuls des entretiens directs, hors hiérarchie, le disent. Entrée : la liste du personnel des quatre sites. Outil : section 3 du template.",
    steps: [
      {
        title: 'Fixez la taille et la composition de l\'échantillon',
        actions: [
          "Environ 20 % du personnel, soit 12 personnes sur 58 ; au moins 2 par site.",
          "Profils obligatoires : gardiens, chauffeurs, journaliers, agent de santé, magasinier, personnel féminin et personnel récent.",
          "Évitez les cadres et les personnes proches de la direction.",
        ],
      },
      {
        title: 'Tirez les noms vous-même, pas par le chef de site',
        body: "Si le chef d'antenne choisit les personnes à interroger, il choisit les réponses. Tirez dans la liste du personnel et prévenez les personnes le jour même.",
      },
      {
        title: 'Prévoyez des conditions qui garantissent la confidentialité',
        actions: [
          "Lieu fermé hors du bureau de la direction.",
          "Langue de la personne : swahili, lingala ou langue locale.",
          "Aucun nom noté : un code (T-01 à T-12).",
        ],
      },
    ],
    table: {
      columns: ['Site', 'Effectif', 'Interrogés', 'Profils retenus'],
      rows: [
        ['Bunia', '34', '4', 'Chauffeur, magasinier, agent de santé, assistante administrative'],
        ['Mongbwalu', '9', '3', 'Gardien, journalier, chauffeur'],
        ['Komanda', '8', '3', 'Gardien, agent de santé, journalière'],
        ['Nizi', '7', '2', 'Gardien, journalier'],
        ['Total', '58', '12', '21 % du personnel'],
      ],
    },
    result: "Un échantillon de 12 personnes, tirées par vous, couvrant les quatre sites et les profils les moins visibles.",
    pitfall: "Laisser la Coordinatrice « proposer des agents disponibles ». Les agents disponibles sont aussi ceux qui sont à l'aise avec la hiérarchie et ne représentent pas ceux qui se taisent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: "Préparer le guide d'entretien et les règles de conduite",
    intro: "Pourquoi : un guide fixe garantit que les douze personnes reçoivent les mêmes questions, dans le même ordre, sans orientation. Les questions ouvertes d'abord, les questions guidées ensuite. Entrée : l'échantillon.",
    steps: [
      {
        title: 'Rédigez huit questions, dans cet ordre',
        actions: [
          "1. « Si vous voyiez quelque chose de grave, que feriez-vous ? »",
          "2. « Connaissez-vous un numéro ou une adresse pour le signaler ? » (rappel spontané, puis rappel assisté si besoin)",
          "3. « Sauriez-vous l'utiliser seul, sans demander le téléphone de quelqu'un ? »",
          "4. « Pensez-vous que votre nom resterait secret ? Pourquoi ? »",
          "5. « Avez-vous reçu une explication orale de la politique ? »",
          "6. « Pouvez-vous lire la politique ? Dans quelle langue la lisez-vous facilement ? »",
          "7. « Connaissez-vous un cas où quelqu'un a signalé ? Que lui est-il arrivé ? »",
          "8. « Qu'est-ce qui vous empêcherait de signaler ? »",
        ],
      },
      {
        title: 'Définissez les règles de conduite',
        actions: [
          "Présentez-vous, expliquez que l'entretien est volontaire et qu'aucun nom ne sera noté.",
          "Ne suggérez jamais la réponse ; n'invoquez jamais la direction.",
          "Si la personne révèle une fraude, ne l'instruisez pas : remerciez, notez ce qui est dit mot pour mot, et orientez-la vers le comité d'audit.",
        ],
      },
      {
        title: 'Prévoyez la durée et la logistique',
        body: "20 minutes par personne, quatre par jour, un lieu fermé, un interprète choisi par l'agent s'il le souhaite.",
      },
    ],
    result: "Un guide de huit questions et trois règles de conduite, testé sur un collègue avant le terrain.",
    tip: "Faites toujours la question 2 sans citer le canal. Le rappel spontané (« je ne sais pas ») est plus parlant que le rappel assisté (« ah oui, la boîte, peut-être »).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Conduire les entretiens, un par un, sans la hiérarchie',
    intro: "Pourquoi : la valeur du résultat dépend de la liberté de parole de la personne. Quand : les 6, 7 et 8 octobre 2026. Entrées : guide, échantillon tiré, lieu fermé.",
    steps: [
      {
        title: 'Accueillez la personne et posez le cadre',
        body: "Une phrase : « Nous évaluons le dispositif, pas les personnes ; vous pouvez ne pas répondre, et je n'écris pas votre nom. »",
      },
      {
        title: 'Posez les huit questions dans l\'ordre, sans reformuler',
        actions: [
          "Notez les réponses spontanées avant les réponses assistées.",
          "Si la personne ne comprend pas, reformulez avec ses mots, sans changer le sens.",
        ],
      },
      {
        title: 'Laissez les silences',
        body: "Trois secondes de silence font souvent venir la phrase qu'on ne dirait pas autrement.",
      },
      {
        title: 'Terminez par une question ouverte',
        body: "« Voulez-vous ajouter quelque chose ? » puis remerciez, sans promesse de résultat.",
      },
    ],
    example: {
      title: 'Extraits d\'entretiens (T-04, gardien de Mongbwalu ; T-09, journalière de Komanda)',
      lines: [
        "T-04 : « Un numéro ? Il y a un papier dans le hall à Bunia, je n'y suis jamais allé. Si je vois quelque chose, je le dis au chef d'antenne. »",
        "T-09 : « On m'a fait signer des papiers en français, je ne les ai pas lus. Personne ne m'a expliqué. »",
        "T-04, question 7 : « En 2025, un chef a été déplacé après une histoire de fournisseur. Ceux qui parlent, ça finit toujours mal. »",
      ],
    },
    result: "Douze entretiens menés, sans nom, avec réponses spontanées et assistées distinguées.",
    pitfall: "Prendre des notes détaillées avec le nom de la personne et la citation exacte. Une citation reconnaissable (poste, antenne, phrase) identifie la personne : dans le dossier, gardez des codes et déformez les détails non utiles.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Tabuler les réponses pour passer de douze voix à un constat',
    intro: "Pourquoi : douze récits ne font pas un constat ; une table de réponses, si. Entrée : notes des douze entretiens. Attention : l'échantillon est petit, vos chiffres sont qualitatifs et ne s'extrapolent pas à toute la population.",
    steps: [
      {
        title: 'Ouvrez un tableau avec une ligne par question et une colonne par entretien',
        body: "Codez chaque réponse : oui, non, ne sait pas.",
      },
      {
        title: 'Comptez les réponses par question',
      },
      {
        title: 'Relevez les obstacles cités (réponses multiples)',
        body: "Un même entretien peut en citer plusieurs : le total dépasse 12.",
      },
      {
        title: 'Rapprochez chaque résultat de la grille de red flags et des deux sources du dossier',
      },
    ],
    table: {
      columns: ['Question', 'Réponses sur 12', 'Lecture'],
      rows: [
        ["Cite spontanément un canal de signalement", '2 sur 12', 'Le canal est quasi inconnu'],
        ["Le reconnaît après qu'on l'a cité", '3 sur 12', "9 sur 12 ne savent pas qu'il existe"],
        ['Saurait l\'utiliser sans aide', '1 sur 12', 'Inaccessible dans la pratique'],
        ['Pense que l\'anonymat serait respecté', '2 sur 12', 'Canal non crédible aux yeux du personnel'],
        ['Premier réflexe : le chef direct', '9 sur 12', "Le seul circuit réel passe par la ligne qui pourrait être visée"],
        ['A reçu une explication orale', '0 sur 12', 'Politique signée, jamais expliquée'],
        ['Lit sans difficulté la politique en français', '5 sur 12', '7 sur 12 la lisent difficilement'],
        ['A signé la politique sans l\'avoir lue en entier', '10 sur 12', 'Signature administrative, aucune compréhension'],
        ['Dispose d\'un smartphone avec données', '7 sur 12', '5 sur 12 ne peuvent pas écrire à une adresse mail'],
        ['Obstacles cités', 'Peur de représailles 9 ; ne sait pas où écrire 8 ; langue 6 ; coût du téléphone 5', 'Des obstacles cumulés'],
        ['Sait qu\'un cadre a été déplacé en 2025', '4 sur 12', 'Perception : « parler ne sert à rien »'],
      ],
    },
    result: "Une table de dix lignes qui transforme douze entretiens en indicateurs lisibles, rapprochés du test d'anonymat et du registre.",
    tip: "Écrivez « 9 sur 12 », jamais « 75 % ». Un pourcentage sur un petit échantillon donne une précision que vous n'avez pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Rédiger la section 3 du template : accessibilité réelle',
    intro: "Pourquoi : le template pose trois questions : le personnel connaît-il le canal, peut-il y accéder sans passer par un supérieur, dans une langue et un format qu'il maîtrise ? Entrées : table de l'étape 4, section 1. Vous répondez par des faits, pas par la politique.",
    steps: [
      {
        title: 'Répondez aux trois questions, une par paragraphe',
        actions: [
          "1. Connaissance du canal : chiffre, rappel spontané / assisté.",
          "2. Accès sans passer par un supérieur : circuit réel, coût, matériel.",
          "3. Langue et format : lecture, explication orale reçue.",
        ],
      },
      {
        title: 'Ajoutez les obstacles cités et la contradiction avec la politique',
        body: "Dites ce que la politique prévoit et ce que les agents vivent.",
      },
      {
        title: 'Vérifiez que chaque phrase est un fait chiffré ou un témoignage codé',
      },
    ],
    example: {
      title: 'Section 3 telle que saisie',
      lines: [
        "Connaissance : sur 12 agents interrogés les 6, 7 et 8 octobre 2026 sur 4 sites, 2 citent spontanément un canal et 3 le reconnaissent quand il est cité ; 9 ignorent son existence.",
        "Accès : 9 agents sur 12 passeraient d'abord par leur chef direct ; 1 sur 12 saurait utiliser le canal seul ; 5 sur 12 n'ont pas de smartphone avec données ; la ligne verte est coupée depuis janvier 2026.",
        "Langue et format : la politique v3 est en français ; 7 agents sur 12 la lisent difficilement ; 0 sur 12 a reçu une explication orale ; 10 sur 12 ont signé le document à l'embauche sans l'avoir lu en entier.",
        "Contradiction : la politique annonce un canal accessible et confidentiel pour tous ; le terrain le rend inutilisable pour la majorité des agents interrogés, indépendamment de sa fiabilité technique.",
      ],
    },
    result: "La section 3 est complète, factuelle et chiffrée, et elle répond aux trois questions du template.",
    pitfall: "Écrire « les agents ne sont pas sensibilisés ». C'est une opinion. Écrivez « 0 sur 12 a reçu une explication orale » : c'est un fait vérifiable.",
  },

  // ── Procédure 6 — Grille tone-at-the-top ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Fixer les faits à chercher et les sources pour les trois indicateurs',
    intro: "Pourquoi : le tone-at-the-top se prouve par des faits vérifiables et datés, jamais par une impression sur l'ambiance du bureau. Avant de chercher, définissez ce qui comptera comme un fait. Entrée : la section 4 du template, qui comporte trois indicateurs. Quand : 9 au 13 octobre 2026.",
    steps: [
      {
        title: 'Reprenez les trois indicateurs de la section 4, mot pour mot',
        actions: [
          "1. Respect par la direction de ses propres procédures d'approbation.",
          "2. Réaction historique à un signalement passé impliquant un cadre.",
          "3. Cohérence entre le discours officiel et les décisions récentes.",
        ],
      },
      {
        title: 'Pour chaque indicateur, définissez le fait exploitable et sa source',
        body: "Un fait : une décision, une date, un montant, un document. La source doit être indépendante de la personne dont vous examinez le comportement.",
      },
      {
        title: 'Prévoyez la contre-vérification de chaque fait',
        body: "Une seconde source, ou la confirmation de la personne concernée sur les seuls faits (étape 5).",
      },
    ],
    table: {
      columns: ['Indicateur', 'Faits recherchés', 'Sources indépendantes', 'Période'],
      rows: [
        ["Respect des procédures d'approbation", 'Achats approuvés par le Directeur Pays : devis exigés, pièces, mentions d\'urgence', "Dossiers d'achat, registre des approbations, courriels d'approbation", 'Janv.-août 2026'],
        ['Réaction à un signalement impliquant un cadre', 'Traitement comparé des signalements et sanctions : cadre / non-cadre, délais, décisions', "Dossiers disciplinaires, boîte « alerte », décisions de la direction", '5 dernières années'],
        ['Cohérence discours / décisions', 'Messages officiels sur l\'éthique, budget et postes de conformité, formations', "Courriels à tout le personnel, budget 2026, organigramme, listes de formation", 'Janv.-sept. 2026'],
      ],
    },
    result: "Un plan de recherche de faits à trois lignes, sans aucune question sur « l'ambiance ».",
    pitfall: "Demander aux agents « la direction est-elle exemplaire ? ». Cela produit des opinions. Cherchez des décisions et des documents ; les entretiens servent seulement à orienter vers les pièces.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: "Indicateur 1 — Tester le respect par la direction de ses propres procédures d'approbation",
    intro: "Pourquoi : si la direction contourne elle-même les seuils qu'elle impose aux autres, le personnel en tire la règle réelle. Entrées : registre des approbations du Directeur Pays, procédure achats (trois devis au-dessus de 10 000 USD).",
    steps: [
      {
        title: 'Extrayez les achats approuvés par le Directeur Pays sur la période',
        body: "Janvier à août 2026 : 61 achats supérieurs à 10 000 USD, tous bureaux confondus.",
      },
      {
        title: 'Tirez 25 dossiers au sort et vérifiez cinq points',
        actions: [
          "1. Nombre de devis exigé par la procédure et nombre de devis au dossier.",
          "2. Pièces justificatives complètes.",
          "3. Mention « urgence » : écrite, par qui, avec quelle justification.",
          "4. Régularisation postérieure : daté, par quelle pièce.",
          "5. Signalement de l'exception à une instance (réunion de direction, comité d'audit).",
        ],
      },
      {
        title: 'Comptez les dérogations et calculez la proportion',
      },
    ],
    table: {
      columns: ['Date', 'Achat', 'Montant (USD)', 'Devis au dossier', 'Mention', 'Régularisation'],
      rows: [
        ['14/03/2026', 'Groupe électrogène, Bunia', '18 400', '1 sur 3', 'Urgence ; signalée en réunion de direction le 16/03', 'Aucune au 12/10'],
        ['02/04/2026', 'Pneus et pièces', '11 200', '2 sur 3', 'Urgence', 'Aucune'],
        ['19/05/2026', 'Toiture d\'un entrepôt, Goma', '26 500', '2 sur 3', 'Aucune', 'Aucune'],
        ['11/06/2026', 'Carburant (citerne)', '14 800', '1 sur 3', 'Urgence', 'Régularisée le 30/06'],
        ['27/06/2026', 'Motos, antenne de Komanda', '12 600', '2 sur 3', 'Urgence', 'Aucune'],
        ['08/07/2026', 'Matériel informatique', '10 900', '2 sur 3', 'Aucune', 'Aucune'],
      ],
    },
    result: "Six dérogations sur 25 dossiers testés (24 %), pour 94 400 USD ; quatre portent la mention « urgence », une seule est régularisée.",
    tip: "Notez aussi les dossiers conformes : « 19 sur 25 conformes » montre que votre test est équilibré et rend les 6 dérogations d'autant plus crédibles.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: "Indicateur 2 — Reconstituer la réaction historique à un signalement impliquant un cadre",
    intro: "Pourquoi : la manière dont une organisation traite un cadre pris en faute est le meilleur indicateur de ce qu'elle tolère réellement. Entrées : dossiers disciplinaires des cinq dernières années, tableau de reconstitution de la procédure 4. Confidentialité maximale.",
    steps: [
      {
        title: 'Listez les cas de fraude ou de faute grave traités en cinq ans',
        body: "Date, fonction (en rôle, pas en nom), nature des faits, source de la détection.",
      },
      {
        title: 'Classez-les par niveau hiérarchique',
        body: "Agents non cadres d'un côté, cadres de l'autre.",
      },
      {
        title: 'Comparez, pour des faits comparables, quatre éléments',
        actions: [
          "1. Une enquête est-elle documentée ?",
          "2. Quelle décision a été prise ?",
          "3. Quel délai entre signalement et décision ?",
          "4. L'auteur du signalement a-t-il eu un retour, un suivi ?",
        ],
      },
      {
        title: 'Notez toute différence de traitement sans l\'interpréter',
        body: "Écrivez la différence de décision ; laissez la commanditaire conclure sur le motif.",
      },
    ],
    table: {
      columns: ['Période', 'Fonction', 'Faits (généraux)', 'Enquête documentée', 'Décision', 'Délai'],
      rows: [
        ['2022', 'Chauffeur', 'Vol de carburant (détecté par contrôle)', 'Oui', 'Licenciement', '21 jours'],
        ['2023', 'Magasinier', 'Détournement de stock (détecté par inventaire)', 'Oui', 'Licenciement', '29 jours'],
        ['Nov. 2024', 'Agent logistique (junior)', 'Soupçon de vol de carburant', 'Oui', 'Licenciement', '34 jours'],
        ['Mai 2025', 'Cadre de base', 'Lien familial non déclaré avec un fournisseur', 'Non', 'Mutation, sans sanction', '52 jours'],
      ],
    },
    result: "Un tableau de quatre cas : trois agents non cadres licenciés après enquête, un cadre muté sans enquête documentée ni sanction, pour des faits de gravité comparable.",
    pitfall: "Écrire « on protège les cadres ». Vous avez un constat de différence de traitement ; le motif n'est pas établi. Ne l'écrivez que si la décision en dit elle-même la raison.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: "Indicateur 3 — Confronter le discours officiel aux décisions récentes",
    intro: "Pourquoi : un message « tolérance zéro » n'a de valeur que si les moyens et les décisions suivent. Entrées : courriels à tout le personnel, budget 2026, organigramme, listes de formation.",
    steps: [
      {
        title: 'Rassemblez les messages officiels sur l\'éthique de l\'année',
        body: "Courriels de la direction, discours aux réunions, mises à jour de la politique. Datez chaque pièce.",
      },
      {
        title: 'Pour chaque promesse, cherchez la décision qui la traduit',
        actions: [
          "Budget : la ligne conformité ou formation existe-t-elle, a-t-elle été dépensée ?",
          "Poste : le responsable conformité prévu est-il en poste ?",
          "Formation : combien de sessions, combien de personnes, dans quelle langue ?",
          "Décision : une décision de l'année contredit-elle le message ?",
        ],
      },
      {
        title: 'Rapprochez deux à deux le message et la décision',
      },
    ],
    table: {
      columns: ['Message ou promesse (date)', 'Décision ou moyen constaté', 'Écart'],
      rows: [
        ['Courriel « tolérance zéro » à tout le personnel (12/01/2026)', 'Six dérogations sur 25 achats approuvés par la direction (janv.-août 2026)', 'Le message est contredit par les décisions de son auteur'],
        ['Politique v3 : un responsable conformité par base', 'Poste de Bunia vacant depuis le 1er août 2025 (14 mois)', 'Promesse sans moyen'],
        ['Politique v3 : formation annuelle des agents', 'Ligne budgétaire 2026 de 2 000 USD, dépensée : 0 au 30/09/2026 ; 0 session orale à Bunia', 'Moyen prévu, non engagé'],
        ['Discours de la direction : « on protège ceux qui parlent »', 'Aucun accusé de réception tracé ; cadre muté, perçu par 4 agents sur 12 comme une sanction de ceux qui parlent', 'Perception contraire au discours'],
      ],
    },
    result: "Quatre écarts discours / décisions, chacun avec une date et une source ; le premier recoupe directement l'indicateur 1.",
    tip: "Citez la phrase exacte du message et sa date : un discours se discute, une citation se constate.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Rédiger les trois constats, les contre-vérifier et compléter la section 4',
    intro: "Pourquoi : la section 4 est la partie la plus sensible du dossier. Une erreur de fait ruinerait votre crédibilité et pourrait léser une personne. Entrées : résultats des étapes 2 à 4. Outil : tableau à trois lignes de la section 4.",
    steps: [
      {
        title: 'Appliquez le test « fait ou impression » à chaque constat',
        actions: [
          "Contient-il une date ? Un chiffre ? Une source ?",
          "Peut-il être vérifié par quelqu'un d'autre que vous ?",
          "Évite-t-il les adjectifs (« laxiste », « complaisant ») ?",
        ],
      },
      {
        title: 'Contre-vérifiez avec la personne concernée, sur les seuls faits',
        body: "Avec l'accord écrit de la commanditaire, présentez à la personne les faits (dates, montants), pas vos conclusions, et notez sa réponse.",
      },
      {
        title: 'Saisissez chaque constat dans la cellule de droite de la ligne correspondante',
        body: "Section 4 du template : trois lignes, l'indicateur à gauche, « Constat daté » à droite. Remplacez le texte indicatif par votre constat.",
      },
      {
        title: 'Restreignez la diffusion',
        body: "La section 4 va à la présidente du comité seule. Elle ne va pas au Directeur Pays avant la restitution décidée par la commanditaire.",
      },
    ],
    example: {
      title: 'Section 4 telle que saisie',
      lines: [
        "Respect par la direction de ses propres procédures d'approbation | Sur 25 achats supérieurs à 10 000 USD approuvés par le Directeur Pays (janv.-août 2026), 6 (24 %) ne respectent pas la règle des trois devis, soit 94 400 USD ; exemple : le 14/03/2026, groupe électrogène de 18 400 USD, un seul devis, mention « urgence », signalé en réunion de direction le 16/03, sans régularisation au 12/10. Faits confirmés par l'intéressé le 13/10/2026.",
        "Réaction historique à un signalement passé impliquant un cadre | Sur 4 cas de fraude traités en 5 ans, 3 agents non cadres ont été licenciés après enquête documentée (21 à 34 jours) ; le seul cas visant un cadre (signalement du 06/05/2025) a abouti à une mutation le 27/06/2025, sans enquête documentée ni sanction.",
        "Cohérence entre le discours officiel et les décisions récentes | Courriel « tolérance zéro » du 12/01/2026 ; poste de responsable conformité de Bunia vacant depuis le 01/08/2025 ; budget de formation conformité 2026 de 2 000 USD dépensé à 0 au 30/09/2026.",
      ],
    },
    result: "Trois constats datés, chiffrés, sourcés et contre-vérifiés sur les faits, diffusés à la seule commanditaire.",
    pitfall: "Montrer à l'intéressé vos conclusions plutôt que les faits. Si Joseph T. lit « la direction ne respecte pas ses règles », il discutera de la conclusion ; s'il lit « 6 achats sur 25 avec un ou deux devis sur trois », il confirmera ou corrigera des faits.",
  },

  // ── Procédure 7 — Conclure et transmettre ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Croiser le canal et la culture dans une matrice à quatre cases',
    intro: "Pourquoi : une politique bien rédigée adossée à un tone-at-the-top négatif ne protège rien ; l'inverse non plus. La conclusion porte sur l'effet combiné des deux. Entrées : sections 1 à 4 du template, score de la grille.",
    steps: [
      {
        title: 'Évaluez le canal : crédible ou non',
        body: "Crédible si les cinq conditions de la théorie sont réunies : accessible, anonyme ou confidentiel, indépendant, traité, protégé.",
      },
      {
        title: 'Évaluez la culture : tone-at-the-top positif ou négatif',
        body: "Positif si les trois indicateurs de la section 4 donnent des faits conformes ; négatif si au moins deux indiquent des contournements ou des différences de traitement.",
      },
      {
        title: 'Placez l\'organisation dans la case correspondante',
      },
    ],
    table: {
      columns: ['Canal / Culture', 'Culture positive', 'Culture négative'],
      rows: [
        ['Canal crédible', 'Dispositif crédible : entretenir et mesurer', 'Canal sous-utilisé : le personnel ne croit pas à sa protection ; priorité à la protection et à l\'exemplarité'],
        ['Canal non crédible', 'Bon climat, faille technique : à corriger vite, risque limité', 'Dispositif de façade : chacun neutralise l\'autre ; risque élevé'],
      ],
    },
    example: {
      title: 'Placement de HSGL Bunia',
      lines: [
        "Canal : non crédible (3 « Non » en section 1 ; 2 agents sur 12 croient à l'anonymat ; aucun accusé de réception).",
        "Culture : négative (6 dérogations sur 25 ; cadre muté, juniors licenciés ; discours « tolérance zéro » non suivi de moyens).",
        "Case : dispositif de façade. L'effet est cumulatif : même réparé, le canal ne serait pas utilisé tant que les agents croient que parler ne sert à rien.",
      ],
    },
    result: "Une organisation placée dans une des quatre cases, avec les faits qui justifient chaque axe.",
    pitfall: "Moyenner les deux axes (« un peu de canal, un peu de culture : modéré »). L'un peut neutraliser l'autre : c'est justement l'objet de la section 5.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Fixer le niveau de risque global avec une échelle écrite',
    intro: "Pourquoi : un niveau de risque sans critères se négocie ; avec critères, il se défend. L'échelle ci-dessous est une méthode proposée par ce module : adaptez-la à la politique de risque de votre organisation. Entrées : matrice, grille des typologies, sections 1 à 4.",
    steps: [
      {
        title: 'Appliquez l\'échelle en commençant par le niveau le plus élevé',
        body: "Si les critères du niveau « Critique » sont remplis, vous ne descendez pas.",
      },
      {
        title: 'Vérifiez le niveau avec les scores de la grille des typologies',
        body: "Une catégorie en « ALERTE ÉLEVÉE » ou plusieurs « À SURVEILLER » doivent être cohérentes avec le niveau retenu.",
      },
      {
        title: 'Écrivez les trois faits qui justifient le niveau retenu',
      },
    ],
    table: {
      columns: ['Niveau', 'Critères'],
      rows: [
        ['Critique', "Canal non crédible ET culture négative ET au moins deux catégories en ALERTE ÉLEVÉE ou un indice de fraude en cours non traité"],
        ['Élevé', "Canal non crédible ET culture négative ; ou l'un des deux axes neutralise manifestement l'autre ; au moins une catégorie en ALERTE ÉLEVÉE"],
        ['Modéré', "Un axe présente une faiblesse corrigeable sans enjeu sur la direction ; catégories à surveiller seulement"],
        ['Faible', "Canal crédible ET culture positive ; catégories faibles ou normales"],
      ],
    },
    example: {
      title: 'Niveau retenu pour Bunia : Élevé',
      lines: [
        "Fait 1 : trois canaux sur trois échouent au test d'anonymat ou sont inutilisables (section 1).",
        "Fait 2 : 6 achats sur 25 de la direction dérogent aux seuils et un cadre a été traité autrement que les juniors (section 4).",
        "Fait 3 : une catégorie en ALERTE ÉLEVÉE (fausses factures, 6 points) et trois à surveiller (grille).",
        "Pourquoi pas « Critique » : une seule catégorie en alerte élevée et aucun indice de fraude en cours confirmé ; la correspondance de téléphone est à vérifier par d'autres.",
      ],
    },
    result: "Un niveau de risque global argumenté par trois faits et un contre-argument expliquant pourquoi le niveau supérieur n'est pas retenu.",
    tip: "Écrivez toujours pourquoi vous n'avez pas retenu le niveau au-dessus : cela montre que vous avez testé votre propre conclusion et décourage la négociation à la baisse comme à la hausse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Rédiger la section 5 « Conclusion et niveau de risque global » et la signer',
    intro: "Pourquoi : la section 5 est le seul texte que lira une commanditaire pressée. Elle doit tenir seule. Le template demande si le mécanisme et la culture constituent ensemble un dispositif de prévention crédible. Entrées : niveau de risque, matrice, faits clés.",
    steps: [
      {
        title: 'Répondez à la question du template en une phrase',
        body: "Oui, non, ou « non, parce que ». Ne commencez pas par « il apparaît que ».",
      },
      {
        title: 'Rédigez la conclusion en quatre blocs',
        actions: [
          "1. Réponse à la question et niveau de risque global.",
          "2. Les trois faits qui la fondent (un par section).",
          "3. L'effet cumulé : comment l'un neutralise l'autre.",
          "4. Ce qui n'a pas pu être testé et les limites de la revue.",
        ],
      },
      {
        title: 'Complétez le tableau « Rédigé par / Date » en bas du template',
        body: "Nom et fonction de l'auteur, date : 14/10/2026.",
      },
    ],
    example: {
      title: 'Section 5 telle que saisie',
      lines: [
        "Conclusion : le mécanisme de signalement et la culture de HSGL ne constituent pas, en l'état, un dispositif de prévention crédible à Bunia. Niveau de risque global : ÉLEVÉ.",
        "Faits : (1) aucun des trois canaux ne garantit l'anonymat ou n'est utilisable (21/09 et 05/10) ; (2) 9 agents sur 12 ignorent le canal et 0 sur 12 a reçu une explication orale ; (3) 6 achats sur 25 approuvés par la direction dérogent aux seuils et le seul cadre mis en cause en 5 ans a été muté sans sanction.",
        "Effet cumulé : un canal réparé resterait inutilisé tant que les agents perçoivent que parler est sans effet ou risqué ; une culture améliorée resterait sans effet sans canal fiable.",
        "Limites : correspondance de coordonnées fournisseur / agent non instruite (transmise au comité) ; pas d'entretien avec les anciens destinataires du canal ; échantillon de 12 agents, qualitatif.",
        "Rédigé par : Amani K., auditeur(rice) interne — 14/10/2026.",
      ],
    },
    result: "Une section 5 d'une demi-page, autonome, qui répond à la question, chiffre ses faits et énonce ses limites.",
    pitfall: "Écrire des recommandations dans la section 5. Le template conclut sur le niveau de risque ; les recommandations ont leur propre note (étape 4).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Formuler trois à quatre recommandations réalisables sous 90 jours',
    intro: "Pourquoi : « renforcer la communication sur la politique existante » ne règle rien. Une recommandation utile s'attaque à la cause réelle du dysfonctionnement, avec un responsable, une échéance et une preuve de réalisation. Entrées : causes identifiées, budget disponible.",
    steps: [
      {
        title: 'Pour chaque constat majeur, remontez à la cause',
        body: "Posez trois fois « pourquoi ? ». Exemple : le canal n'est pas utilisé → il est inconnu → il n'a jamais été expliqué à l'oral → personne n'a la charge de l'expliquer.",
      },
      {
        title: 'Rédigez chaque recommandation en cinq éléments',
        actions: [
          "1. Cause visée.",
          "2. Action précise, avec un verbe.",
          "3. Responsable nommé par sa fonction.",
          "4. Échéance datée, sous 90 jours.",
          "5. Preuve de réalisation vérifiable par l'audit.",
        ],
      },
      {
        title: 'Vérifiez qu\'aucune recommandation ne repose sur la bonne volonté de la personne visée',
        body: "Si le Directeur Pays est le responsable d'une action sur son propre comportement, désignez un contrôle externe : le comité d'audit.",
      },
      {
        title: 'Limitez-vous à quatre au maximum, classées par impact',
      },
    ],
    table: {
      columns: ['Cause visée', 'Action', 'Responsable', 'Échéance', 'Preuve'],
      rows: [
        ['Canal non anonyme, reçu par la ligne visée', 'Confier la réception à un prestataire externe (ligne locale gratuite et formulaire sans journalisation), avec voie directe vers la présidente du comité pour toute alerte visant la direction', 'Présidente du comité d\'audit', '15 déc. 2026', 'Contrat signé ; nouveau test d\'anonymat concluant'],
        ['Politique jamais expliquée', 'Tenir des sessions orales de 45 min en swahili et lingala sur les 4 sites, avec attestation de compréhension', 'Coordinatrice de la base', '31 déc. 2026', '58 attestations, liste de présence'],
        ['Dérogations non encadrées', 'Créer un registre mensuel des exceptions aux trois devis, transmis au comité chaque trimestre', 'Finance Manager (Ruth B.)', '30 nov. 2026', 'Premier registre au comité'],
        ['Traitement différencié des cadres', 'Faire examiner par un tiers indépendant le dossier de mai 2025 ; tout signalement visant un cadre est instruit hors ligne visée', 'Présidente du comité d\'audit', '31 janv. 2027', 'Rapport du tiers ; procédure écrite'],
      ],
    },
    result: "Quatre recommandations réalisables dans les 90 jours, chacune avec cause, action, responsable, échéance et preuve.",
    pitfall: "Faire de la Compliance Officer la responsable d'une recommandation qui touche à son propre canal. Son rôle doit être contrôlé : le comité d'audit valide la solution et en vérifie l'effet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Transmettre le dossier au commanditaire et en protéger la confidentialité',
    intro: "Pourquoi : le dossier contient des faits sur la direction et sur des personnes. Sa diffusion doit être décidée par la commanditaire. Entrées : les cinq sections du template, la grille complétée, la note de recommandations (une demi-page).",
    steps: [
      {
        title: 'Constituez le dossier de transmission',
        actions: [
          "1. Évaluation du mécanisme de signalement et de la culture (docx complété).",
          "2. Grille des typologies de fraude et red flags (xlsx complété).",
          "3. Note de recommandations, une demi-page.",
          "4. Journal du test d'anonymat et preuves.",
        ],
      },
      {
        title: 'Rédigez la note de transmission en trois paragraphes',
        body: "Ce que vous transmettez ; ce qui exige une décision rapide (la correspondance de coordonnées) ; la diffusion que vous proposez.",
      },
      {
        title: 'Envoyez par un canal chiffré ou remettez en main propre à la présidente',
        body: "Pas de courriel sur la boîte partagée du Directeur Pays ni de copie à un tiers.",
      },
      {
        title: 'Archivez en dossier restreint',
        body: "« 05_Restreint » : accès limité à vous, à Fatou S. et à la commanditaire.",
      },
    ],
    example: {
      title: 'Note de transmission du 15 octobre 2026',
      lines: [
        "« Madame la Présidente, je vous transmets le dossier de la revue du dispositif de prévention de la fraude de Bunia. Niveau de risque global : élevé. Trois points demandent votre attention immédiate : (1) la correspondance de coordonnées du 9 octobre entre un fournisseur et un agent, que je n'ai pas instruite ; (2) la section 4, relative au Directeur Pays, dont je recommande de réserver la diffusion à votre décision ; (3) le test d'anonymat, à clore auprès de la Compliance Officer. Je propose une restitution au comité avant toute restitution à la direction. — Amani K. »",
      ],
    },
    result: "Un dossier de quatre pièces remis à la seule commanditaire, avec une diffusion décidée par elle, et archivé en accès restreint.",
    tip: "Proposez vous-même un calendrier de restitution : comité d'abord, puis direction, puis base. Le contraire expose le lanceur d'alerte potentiel et la personne visée.",
  },

  // ── Procédure 8 — Concevoir un système de signalement sécurisé et protégé ──
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 5',
    title: 'Traduire les constats en exigences de conception',
    intro: "Pourquoi : un canal conçu sans partir des défauts constatés reproduit les mêmes défauts. Entrées : sections 1 à 4 du template, cinq conditions d'un mécanisme crédible. Outil : un tableau constat → exigence.",
    steps: [
      {
        title: 'Reprenez chaque défaut constaté et écrivez l\'exigence qui lui correspond',
        body: "Une exigence est une phrase vérifiable : « le canal doit… ».",
      },
      {
        title: 'Classez les exigences par condition de crédibilité',
        body: "Accessible, confidentiel ou anonyme, indépendant, traité, protégé.",
      },
      {
        title: 'Ajoutez les exigences externes',
        actions: [
          "Les conventions de subvention des bailleurs : notification des soupçons de fraude dans un délai fixé.",
          "Le canal de plaintes pour exploitation et abus sexuels (PSEA) : il peut être distinct, mais il doit exister.",
          "Les principes de l'ISO 37002 : confiance, impartialité, protection.",
        ],
      },
    ],
    table: {
      columns: ['Constat (Bunia)', 'Exigence de conception', 'Condition'],
      rows: [
        ["Message lu d'abord par l'assistante du Directeur Pays, adresse et IP visibles", "Le canal doit être administré hors ligne hiérarchique du Directeur Pays, sans journalisation de l'IP ni de la ligne appelante", 'Anonymat, indépendance'],
        ['Ligne verte coupée depuis 8 mois ; 5 agents sur 12 sans smartphone', 'Un numéro local gratuit, actif en permanence, vérifié chaque mois', 'Accessibilité'],
        ['7 agents sur 12 lisent difficilement le français', 'Un canal oral en swahili et en lingala, des supports illustrés', 'Accessibilité'],
        ['0 accusé de réception tracé ; délai réel de 43 jours', 'Accusé de réception sous 3 jours ouvrés, clôture sous 30 jours ou information sur le motif du retard', 'Traitement'],
        ['Cadre muté sans enquête ; agents perçoivent un risque', "Interdiction écrite des représailles, suivi du lanceur d'alerte, instruction hors ligne visée", 'Protection'],
      ],
    },
    result: "Un tableau de cinq exigences vérifiables, chacune rattachée à un constat réel et à une condition de crédibilité.",
    pitfall: "Partir des solutions du marché (« installons une plateforme en ligne ») avant d'avoir formulé les exigences. Une plateforme en ligne ne résout rien pour des agents sans smartphone ni connexion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 5',
    title: 'Choisir et combiner les canaux de réception',
    intro: "Pourquoi : aucun canal n'est adapté à tous les profils. La combinaison doit couvrir l'agent isolé sans smartphone, le cadre connecté et le cas où la personne visée est dans la ligne de réception. Entrée : exigences de l'étape 1.",
    steps: [
      {
        title: 'Comparez les canaux possibles sur quatre critères',
        body: "Accessibilité pour l'agent isolé, anonymat technique, indépendance de la ligne visée, coût.",
      },
      {
        title: 'Retenez au moins trois canaux complémentaires',
        body: "Un canal oral, un canal écrit, un canal de contournement vers l'instance la plus haute.",
      },
      {
        title: 'Précisez pour chaque canal qui le reçoit',
        body: "Jamais une personne placée sous l'autorité de ceux qui peuvent être visés.",
      },
    ],
    table: {
      columns: ['Canal', 'Accessibilité', 'Anonymat technique', 'Indépendance', 'Coût'],
      rows: [
        ['Ligne téléphonique locale gratuite, opérée par un prestataire externe', 'Forte : oral, langues locales', 'Bon si numéro non journalisé', 'Forte', 'Moyen (récurrent)'],
        ['Formulaire web ou messagerie hébergés par un tiers, sans journalisation de l\'IP', 'Moyenne : exige un smartphone ou un ordinateur', 'Bon si bien configuré', 'Forte', 'Faible à moyen'],
        ['Deux référents de terrain (une femme, un homme) hors ligne hiérarchique', 'Forte en face à face', 'Faible : l\'identité est connue', 'Moyenne : dépend de leur indépendance', 'Faible (formation)'],
        ['Boîte physique', 'Forte à l\'écrit seulement', 'Faible si le dépôt est visible', 'Faible si la clé est détenue par la base', 'Très faible'],
        ['Voie directe vers la présidente du comité d\'audit', 'Faible pour l\'agent isolé ; forte pour les cadres', 'Confidentiel', 'Très forte', 'Aucun'],
      ],
    },
    example: {
      title: 'Combinaison retenue pour HSGL Bunia',
      lines: [
        "Canal principal : ligne locale gratuite du prestataire externe (swahili, lingala, français, anglais), devis indicatif de 6 800 USD par an.",
        "Canal écrit : formulaire du prestataire, sans journalisation de l'IP.",
        "Canal de proximité : deux référents de terrain par site, formés, sans lien hiérarchique avec le chef d'antenne.",
        "Canal de contournement : adresse du comité d'audit pour toute alerte visant le Directeur Pays, la Compliance ou la Coordination.",
        "La boîte physique est conservée comme canal d'appoint, avec une clé détenue par un référent et un registre d'ouverture.",
      ],
    },
    result: "Quatre canaux complémentaires, avec pour chacun le critère qui le justifie et la personne qui le reçoit.",
    tip: "Gardez une voie de contournement même si vous externalisez : si le prestataire transmet les signalements à la même personne que d'habitude, vous avez payé pour rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 5',
    title: 'Définir la réception, le tri, le traitement et les délais',
    intro: "Pourquoi : un canal sans traitement organisé est un puits : les messages y entrent, rien n'en ressort. Entrées : exigences, combinaison de canaux. Résultat : un circuit écrit avec des délais mesurables.",
    steps: [
      {
        title: 'Dessinez le circuit en cinq temps',
        actions: [
          "1. Réception et accusé de réception.",
          "2. Tri : crédibilité, gravité, personne visée.",
          "3. Instruction par une personne ou un tiers sans conflit.",
          "4. Décision et sanction éventuelle.",
          "5. Retour au lanceur d'alerte et clôture.",
        ],
      },
      {
        title: 'Fixez la règle de conflit à chaque étape',
        body: "Tout signalement visant un membre du comité de tri est traité par la présidente du comité d'audit. Un instructeur déclare ses liens avant de commencer.",
      },
      {
        title: 'Prévoyez la notification aux bailleurs',
        body: "Un soupçon crédible touchant des fonds d'un bailleur est notifié selon la convention (par exemple divulgation à l'inspection générale pour USAID/BHA, à l'OLAF pour l'UE). Le module 07 détaille ces obligations.",
      },
      {
        title: 'Fixez les délais',
        body: "Repère : la directive européenne 2019/1937 prévoit un accusé de réception sous 7 jours et un retour sous 3 mois. Fixez des délais au moins aussi exigeants.",
      },
    ],
    table: {
      columns: ['Étape', 'Responsable', 'Délai', 'Preuve'],
      rows: [
        ['Accusé de réception', 'Prestataire externe', '3 jours ouvrés', 'Numéro de dossier remis'],
        ['Tri', 'Comité de tri (Compliance, RH, un membre indépendant)', '7 jours', 'Fiche de tri'],
        ['Instruction', 'Enquêteur sans conflit, ou tiers', '30 jours, prorogeables avec motif', 'Rapport d\'enquête'],
        ['Notification au bailleur', 'Directeur Pays et présidente du comité', 'Délai de la convention', 'Courrier, accusé'],
        ['Retour et clôture', 'Comité de tri', '30 jours après la décision', 'Message de clôture'],
      ],
    },
    result: "Un circuit en cinq étapes avec responsables, délais, règle de conflit et notification aux bailleurs.",
    pitfall: "Confier le tri à un comité dont la Compliance Officer, le HR Manager et la direction sont les seuls membres : un signalement visant l'un d'eux devrait quitter le circuit sans qu'il puisse le lire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 5',
    title: 'Écrire la protection contre les représailles',
    intro: "Pourquoi : un agent signale s'il croit qu'il ne le paiera pas. La protection se décide par écrit, avant le premier cas. Entrées : définition du lanceur d'alerte de bonne foi, cadre disciplinaire de l'organisation.",
    steps: [
      {
        title: 'Rédigez six clauses, chacune d\'une à deux phrases',
        actions: [
          "1. Bonne foi : toute personne qui signale un soupçon raisonnable est protégée, même si le soupçon est infondé.",
          "2. Représailles interdites : licenciement, mutation, non-renouvellement, mise à l'écart, pression.",
          "3. Confidentialité de l'identité : connue des seules personnes qui instruisent.",
          "4. Suivi : le lanceur d'alerte identifié est suivi pendant 12 mois par le comité de tri.",
          "5. Sanction : l'auteur de représailles est sanctionné, quel que soit son grade.",
          "6. Signalement abusif : un signalement de mauvaise foi est sanctionné, la bonne foi se présumant.",
        ],
      },
      {
        title: 'Précisez comment un agent signale une représaille',
        body: "Par les mêmes canaux, avec traitement prioritaire par la présidente du comité.",
      },
      {
        title: 'Faites valider les clauses par les référents de terrain',
        body: "Lues à voix haute, en langue locale, elles doivent être comprises par un agent qui ne lit pas le français.",
      },
    ],
    example: {
      title: 'Extrait du protocole — clause 2',
      lines: [
        "« Aucune personne ne peut subir de licenciement, mutation, non-renouvellement, mise à l'écart ou pression parce qu'elle a signalé de bonne foi un soupçon ou participé à une enquête. Toute mesure défavorable prise contre un agent ayant signalé dans les 12 mois précédents est présumée liée au signalement jusqu'à preuve du contraire par la direction. »",
      ],
    },
    result: "Six clauses de protection d'une à deux phrases, comprises à l'oral, avec le suivi de 12 mois et la sanction des représailles.",
    tip: "La présomption (« jusqu'à preuve du contraire ») est la clause qui change le comportement des chefs : c'est elle qui rend la protection crédible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 5',
    title: 'Déployer, mesurer et retester le dispositif',
    intro: "Pourquoi : un canal conçu mais non expliqué est un canal muet. Il doit être connu, utilisé, mesuré et retesté. Entrées : protocole écrit, budget, calendrier. Résultat : un plan de déploiement sur 90 jours avec indicateurs.",
    steps: [
      {
        title: 'Expliquez le dispositif à l\'oral, dans les langues de travail',
        actions: [
          "Sessions de 45 minutes par site, en swahili ou lingala, avec exemples concrets.",
          "Supports illustrés, sans jargon juridique ; carte de poche avec numéro et trois phrases.",
          "Formation spécifique des chefs : ce qu'ils ne doivent jamais faire quand un agent signale.",
        ],
      },
      {
        title: 'Définissez cinq indicateurs de suivi',
        body: "Mesurés tous les trimestres et présentés au comité d'audit.",
      },
      {
        title: 'Retestez le dispositif à 60 jours puis chaque année',
        body: "Même méthode que la procédure 3 : signalement fictif, journal, chaîne de réception.",
      },
    ],
    table: {
      columns: ['Indicateur', 'Mesure', 'Cible à 90 jours'],
      rows: [
        ['Connaissance du canal', 'Mini-sondage sur 12 agents : cite spontanément un canal', '10 sur 12 (contre 2 sur 12)'],
        ['Délai d\'accusé de réception', 'Dates dans le registre du prestataire', '100 % sous 3 jours ouvrés'],
        ['Délai de clôture', 'Moyenne des dossiers clôturés', 'Moins de 30 jours'],
        ['Signalements reçus', 'Pour 100 employés, par trimestre', 'Suivi, sans cible : une hausse initiale est un bon signe'],
        ['Représailles signalées', 'Nombre de cas, traitement', '0 sans suite'],
      ],
    },
    result: "Un plan de déploiement avec sessions orales, cinq indicateurs à cible et un test de contrôle à J+60.",
    pitfall: "Se féliciter si le nombre de signalements baisse. À court terme, la hausse des signalements après un déploiement réussi est le signe que la confiance augmente ; la baisse est ambiguë.",
  },

  // ───────────────────────── 6. Cas complet résolu ─────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Le canal muet de Bunia » : partie 1, orientation et grille des typologies",
    scenario: "Rappel de l'énoncé : le 7 septembre 2026, le comité d'audit de HSGL vous confie la revue du dispositif de prévention de la fraude de la base de Bunia (58 employés, trois antennes, 4,1 M USD). Zéro signalement en trois ans, rumeur de détournement de carburant à Mongbwalu, politique v3 signée à l'embauche. Livrables 1 et 2 : la note d'orientation et la grille des typologies et red flags remplie.",
    steps: [
      {
        title: 'Raisonnement 1 — Partir des cumuls, pas de la rumeur',
        body: "La note d'orientation du 9 septembre ne cherche pas « qui détourne le carburant » : elle repère les cumuls de fonctions (chef d'antenne qui reçoit et justifie ; acheteur qui réceptionne ; présence signée par une seule personne ; aucune déclaration de liens).",
      },
      {
        title: 'Raisonnement 2 — Ne cocher « Oui » que sur un constat daté',
        body: "Huit indicateurs sur seize sont observés. Les huit autres reçoivent « Non » avec leur test écrit en colonne E, y compris les lignes 12 et 20 où l'on aurait pu surinterpréter un indice.",
      },
      {
        title: 'Raisonnement 3 — Lire le score comme une orientation',
        body: "Fausses factures en alerte élevée (6 points) ; détournement, ghost workers et conflits d'intérêt à surveiller (5 points chacun) ; total 21 sur 41. Ce n'est pas un taux de fraude : c'est la carte des failles à tester en priorité.",
      },
    ],
    table: {
      columns: ['Ligne', 'Typologie', 'Gravité', 'Constat daté (version abrégée de la colonne E)'],
      rows: [
        ['6', 'Détournement', '3', "5 avances carburant sur 6 de Mongbwalu justifiées avec 38 à 61 jours de retard"],
        ['7', 'Détournement', '2', '2 visites de supervision en 12 mois contre 4 attendues'],
        ['9', 'Fausses factures', '3', '41 BC sur 52 (79 %) attribués à deux fournisseurs, sans comparatif'],
        ['10', 'Fausses factures', '3', '9 réceptions sur 20 signées par le demandeur'],
        ['14', 'Ghost workers', '3', "Présence papier signée par le seul chef d'antenne sur 3 antennes ; turn-over 31 %"],
        ['16', 'Ghost workers', '2', '2 départs non radiés ; aucun salaire versé après le départ'],
        ['17', "Conflits d'intérêt", '2', '0 déclaration sur 58 dossiers du personnel'],
        ['18', "Conflits d'intérêt", '3', 'Aucun croisement avant la mission ; 1 correspondance de téléphone transmise au comité'],
      ],
    },
    result: "Livrables 1 et 2 terminés : une note d'orientation d'une page et une grille complète dont les quatre sous-totaux (5, 6, 5, 5) sont recalculés à la main.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 2, le test d\'anonymat, l\'historique et le terrain (sections 1 à 3)',
    scenario: "Livrables 3, 4 et 5 : le template evaluation-mecanisme-signalement-culture.docx complété pour les sections 1, 2 et 3, avec les trois canaux testés, l'historique reconstitué et les douze entretiens de terrain.",
    steps: [
      {
        title: 'Raisonnement — Chaque cellule du template contient une preuve, pas un jugement',
        body: "La section 1 écrit « Non » avec la preuve technique ; la section 2 donne le nombre et le délai calculés sur dossiers ; la section 3 donne des chiffres d'entretiens et le contraste avec la politique. Aucune cellule ne contient « sensibilisation insuffisante ».",
      },
    ],
    table: {
      columns: ['Section du template', 'Contenu saisi (synthèse)'],
      rows: [
        ['1. Canal testé', "Boîte alerte@ : Non (3 lecteurs dont l'assistante du Directeur Pays, message ouvert le 21/09 à 14h03, expéditeur et IP lisibles). Boîte à suggestions : Non (dépôt visible depuis le poste de garde, clé à la base). Ligne verte : Non (numéro non attribué depuis janvier 2026)."],
        ['2. Nombre de signalements (3 ans)', "Bunia : 0 ; HSGL pays : 2 (14/11/2024 et 06/05/2025), reconstitués sans registre à partir de la boîte « alerte » et des dossiers disciplinaires ; taux de 0,5 pour 100 employés."],
        ['2. Délai de réponse constaté', "43 jours en moyenne (34 et 52) contre « une quinzaine de jours » déclarés ; aucun accusé de réception tracé."],
        ['2. Constat sur le silence', "Trois ans sans signalement à Bunia malgré des rumeurs : signal à part entière ; hypothèses « canal inconnu » et « canal non crédible » plus probables que « rien à signaler »."],
        ['3. Accessibilité terrain', "Sur 12 agents, 2 citent spontanément un canal, 1 saurait l'utiliser seul, 9 passeraient d'abord par le chef direct, 7 lisent difficilement le français, 0 a reçu une explication orale, 5 sans smartphone."],
      ],
    },
    result: "Livrables 3 à 5 terminés : trois sections complètes, chacune appuyée sur des preuves datées et chiffrées.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 3, la culture et la conclusion (sections 4 et 5)',
    scenario: "Livrables 6 et 7 : les trois constats de la grille tone-at-the-top, puis la conclusion de risque global qui articule le canal et la culture.",
    steps: [
      {
        title: 'Raisonnement 1 — Trois faits, trois sources indépendantes de la personne examinée',
        body: "Registre des approbations, dossiers disciplinaires, courriel et budget. Aucune phrase ne qualifie la direction : elles décrivent des décisions.",
      },
      {
        title: 'Raisonnement 2 — Le niveau « Élevé », et pas « Critique »',
        body: "Canal non crédible et culture négative, une catégorie en alerte élevée. Pour « Critique », il faudrait deux catégories en alerte élevée ou un indice de fraude en cours confirmé : la correspondance de téléphone n'est qu'un indice à vérifier par d'autres.",
      },
      {
        title: 'Raisonnement 3 — La conclusion se lit seule',
        body: "Une réponse, trois faits, l'effet cumulé, les limites : une commanditaire pressée peut décider sans ouvrir le reste.",
      },
    ],
    example: {
      title: 'Section 4 (extrait) et section 5 (réponse à la question du template)',
      lines: [
        "Respect des procédures d'approbation : 6 achats sur 25 approuvés par le Directeur Pays (24 %, 94 400 USD) sans les trois devis ; groupe électrogène de 18 400 USD le 14/03/2026, un devis, « urgence », non régularisé au 12/10.",
        "Réaction à un signalement impliquant un cadre : 3 agents non cadres licenciés après enquête (21 à 34 jours) ; le cadre visé le 06/05/2025 a été muté le 27/06/2025, sans enquête documentée ni sanction.",
        "Cohérence discours / décisions : courriel « tolérance zéro » du 12/01/2026 ; poste de responsable conformité vacant depuis le 01/08/2025 ; formation conformité 2026 dépensée à 0 sur 2 000 USD au 30/09.",
        "Section 5 : le mécanisme et la culture ne constituent pas, en l'état, un dispositif de prévention crédible à Bunia ; niveau de risque global ÉLEVÉ ; un canal réparé resterait inutilisé tant que les agents pensent que parler est inutile ou risqué.",
      ],
    },
    result: "Livrables 6 et 7 terminés : trois constats datés et une conclusion autonome, signée et datée du 14 octobre 2026.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 4, la note de recommandations (une demi-page)',
    scenario: "Livrable 7 (suite) : une note de recommandations réalisables sous 90 jours, qui s'attaque aux causes du dysfonctionnement et non à son symptôme (« mieux communiquer sur la politique »).",
    steps: [
      {
        title: 'Raisonnement — De la cause à la preuve de réalisation',
        body: "Chaque recommandation remonte au « pourquoi » de trois niveaux, désigne un responsable hors ligne visée, fixe une échéance et la preuve qui permettra de la vérifier lors du prochain test.",
      },
    ],
    example: {
      title: 'Note de recommandations — 15 octobre 2026',
      lines: [
        "À : Présidente du comité d'audit — De : Amani K. — Objet : Prévention de la fraude à Bunia — 4 recommandations à 90 jours.",
        "R1. Confier la réception des signalements à un prestataire externe (ligne locale gratuite, formulaire sans journalisation), avec voie directe vers le comité pour toute alerte visant la direction. Responsable : présidente du comité. Échéance : 15/12/2026. Preuve : contrat signé et test d'anonymat concluant.",
        "R2. Expliquer la politique à l'oral, en swahili et lingala, sur les 4 sites. Responsable : Coordinatrice de la base. Échéance : 31/12/2026. Preuve : 58 attestations.",
        "R3. Tenir un registre mensuel des exceptions aux trois devis, transmis au comité chaque trimestre. Responsable : Finance Manager. Échéance : 30/11/2026. Preuve : premier registre reçu.",
        "R4. Faire réexaminer par un tiers indépendant le dossier de mai 2025 et instruire tout signalement visant un cadre hors de sa ligne. Responsable : présidente du comité. Échéance : 31/01/2027. Preuve : rapport du tiers.",
      ],
    },
    result: "Une note d'une demi-page, quatre recommandations, chacune avec cause, responsable, échéance et preuve ; aucune ne repose sur la bonne volonté de la personne visée.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 5, le protocole de signalement sécurisé et protégé (une page)',
    scenario: "Livrable 8 : le protocole que le comité d'audit soumettra à la direction pour remplacer le dispositif de Bunia. Il reprend les exigences de la procédure 8 dans l'ordre : canaux, circuit de traitement, protection, indicateurs.",
    steps: [
      {
        title: 'Raisonnement — Un protocole se lit en dix minutes et se teste en un jour',
        body: "Chaque règle du protocole est vérifiable : un accusé de réception sous 3 jours se contrôle sur le registre ; l'anonymat se contrôle par un nouveau test ; la protection se contrôle par le suivi de 12 mois.",
      },
    ],
    example: {
      title: 'Protocole de signalement HSGL — Bunia (version soumise le 19 octobre 2026)',
      lines: [
        "1. Objet. Permettre à tout agent de signaler, sans crainte et dans sa langue, un soupçon de fraude, de corruption ou d'abus. Le dispositif ne remplace pas le canal PSEA, qui reste distinct.",
        "2. Canaux. Ligne locale gratuite du prestataire externe (swahili, lingala, français, anglais) ; formulaire du prestataire ; deux référents de terrain par site (une femme, un homme) ; adresse du comité d'audit pour toute alerte visant le Directeur Pays, la Compliance ou la Coordination ; boîte physique d'appoint, clé détenue par un référent.",
        "3. Circuit. Accusé de réception sous 3 jours ouvrés ; tri sous 7 jours par un comité sans conflit ; instruction sous 30 jours ; retour au lanceur d'alerte ; notification aux bailleurs selon la convention (USAID/BHA, UE, agences onusiennes) ; tout signalement visant un membre du comité de tri est traité par la présidente du comité d'audit.",
        "4. Protection. Bonne foi présumée ; représailles interdites et présumées en cas de mesure défavorable dans les 12 mois ; identité connue des seules personnes qui instruisent ; suivi du lanceur d'alerte pendant 12 mois ; sanction pour représailles et pour signalement de mauvaise foi.",
        "5. Information. Sessions orales de 45 minutes sur chaque site avant le 31/12/2026 ; carte de poche illustrée ; formation des chefs.",
        "6. Mesure. Cinq indicateurs trimestriels au comité d'audit ; test d'anonymat à J+60 puis chaque année par l'audit interne.",
      ],
    },
    result: "Livrable 8 terminé : un protocole d'une page, dont chaque règle est vérifiable lors du prochain test d'anonymat.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — les décisions de retenue qui ont protégé la mission',
    scenario: "Au-delà des templates, voici les gestes que l'on retrouve dans toute revue de dispositif anti-fraude conduite sans dommage pour les personnes ni pour la mission. Chacun correspond à une décision prise pendant le cas de Bunia.",
    steps: [
      {
        title: '1. Aucun test sans accord écrit',
        body: "Le protocole du 14 septembre a rendu le test légitime ; sans lui, le dépôt aurait pu être qualifié de manipulation.",
      },
      {
        title: '2. Fatou S. dépose le signalement, pas Amani K.',
        body: "La voix, le nom et le téléphone de l'auditeur responsable sont connus de la base. Le dépôt par la personne la moins identifiable évite de fausser le test.",
      },
      {
        title: '3. La correspondance de téléphone n\'est pas instruite par l\'audit',
        body: "Transmise à la présidente le jour même, sans confrontation, avec l'extraction datée. L'enquête, si elle a lieu, appartient à d'autres.",
      },
      {
        title: '4. Les faits sont confirmés avec l\'intéressé, les conclusions ne lui sont pas soumises',
        body: "Joseph T. a confirmé le 13 octobre les dates et montants des achats ; il n'a pas lu les qualifications.",
      },
      {
        title: '5. Les agents interrogés n\'ont aucune promesse de confidentialité absolue',
        body: "On leur a dit : « Votre nom n'est pas noté. » On ne leur a pas dit : « Rien de ce que vous dites ne sera utilisé. »",
      },
      {
        title: '6. La section 4 va à la seule commanditaire',
        body: "La diffusion à la direction et à la base est décidée par le comité, dans l'ordre : comité, direction, base.",
      },
    ],
    result: "Six décisions qui ont préservé la preuve, les personnes et la crédibilité de la mission : à reproduire dans chaque revue.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — le dossier de mission complet, de l'assignation au protocole",
    scenario: "Voici la chronologie de la revue de Bunia et la pièce produite à chaque étape. C'est le modèle de dossier que vous reproduirez pour chaque revue de dispositif anti-fraude.",
    steps: [
      {
        title: 'Lecture de la chronologie',
        body: "Notez qu'aucun dépôt n'a lieu avant le 14 septembre (accord écrit) et qu'aucun entretien de terrain n'a lieu avant l'arrivée à Bunia, le 5 octobre.",
      },
    ],
    table: {
      columns: ['Date (2026)', 'Étape', 'Pièce produite', 'Dossier'],
      rows: [
        ['07/09', 'Assignation par le comité', "Courriel d'assignation", '01_Cadrage'],
        ['09/09', "Note d'orientation", 'Triangle par typologie, priorités', '01_Cadrage'],
        ['14/09', 'Accord écrit pour le test', 'Protocole de test signé', '00_Indépendance'],
        ['15-17/09', 'Essai de la ligne verte', 'Trois appels datés', '03_Terrain'],
        ['21/09', "Dépôt du signalement fictif", 'Journal, captures', '03_Terrain'],
        ['22/09', 'Chaîne de réception', "Liste d'accès, journal d'ouverture, en-tête", '03_Terrain'],
        ['05-09/10', 'Grille des typologies', 'Grille xlsx, scores recalculés', '03_Terrain'],
        ['06-08/10', 'Douze entretiens', 'Tableau d\'entretiens codés', '03_Terrain'],
        ['09/10', 'Croisement fournisseurs / personnel', "Note à la présidente", '05_Restreint'],
        ['09-13/10', 'Grille tone-at-the-top', 'Trois constats, faits confirmés le 13/10', '05_Restreint'],
        ['14-15/10', 'Conclusion, recommandations, transmission', 'Template complet, note de recommandations', '05_Restreint'],
        ['19/10', 'Protocole de signalement', 'Protocole d\'une page', '04_Livrables'],
      ],
    },
    result: "Un dossier de douze pièces datées, dans lequel chaque document justifie le suivant et reste accessible à une vérification externe.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: "Exercice 1 — « Le canal muet », N'Djaména : test d'anonymat et diagnostic du canal",
    instructions: "Contexte fictif : vous êtes auditeur(rice) interne mandaté(e) pour une mission triennale de conformité d'une ONG internationale, bureau pays à N'Djaména et quatre bases satellites dans l'est du Tchad, environ 260 agents. La politique anti-corruption existe depuis six ans, signée à l'embauche. Le mécanisme de signalement est une ligne téléphonique dédiée « confidentielle » gérée par la Conformité du siège régional à Nairobi. Faits relevés : zéro signalement en trois ans, alors que des rumeurs de détournement de carburant circulent depuis deux ans autour des avances de la base la plus excentrée ; le numéro affiché dans le hall est le poste fixe du bureau Conformité de Nairobi (appel international payant) ; la politique a été distribuée en français, signée, classée, sans session orale ; un ancien superviseur logistique dit qu'il « savait » mais n'a jamais songé à appeler « un bureau à Nairobi qu'il n'a jamais vu, pour dénoncer son propre chef de base » ; le Représentant Pays sortant a validé des réquisitions de carburant « en urgence, sans les trois bons de sortie habituels ».",
    steps: [
      {
        title: "Décrivez le test d'anonymat que vous mèneriez sur ce canal précis (procédure 3)",
        actions: [
          "Rédigez le protocole en cinq lignes : objectif, canal, scénario fictif, personne qui dépose, règle d'arrêt.",
          "Précisez les preuves que vous collecteriez : numéro affiché au récepteur, coût de l'appel, langue, qui décroche.",
        ],
      },
      { title: 'Remplissez la section 1 du template pour ce canal : « Canal testé » et « Anonymat confirmé par le test ? » avec le résultat probable et la preuve attendue' },
      {
        title: 'Identifiez au moins trois raisons factuelles, tirées du cas, pour lesquelles le canal n\'est ni accessible ni crédible',
        body: "Pour chaque raison : le fait du cas, la condition de crédibilité qu'il viole (accessible, confidentiel, indépendant, traité, protégé).",
      },
      { title: 'Remplissez la section 2 : trois ans sans signalement documentés comme un signal à part entière, avec trois hypothèses explicatives' },
      { title: 'Remplissez la section 3 : accessibilité réelle pour la base isolée, en répondant aux trois questions du template' },
    ],
    tip: "Corrigé indicatif pour vous auto-évaluer : vous devez retrouver au moins quatre faits (numéro de Nairobi avec appel international payant ; politique en français sans explication orale ; superviseur qui ne dénoncerait pas son chef direct à un bureau inconnu ; rumeurs de deux ans jamais remontées) et la conclusion « anonymat non confirmé » avec la raison technique (numéro d'un bureau précis, visible, dans un cadre hiérarchique proche des personnes visées).",
    deliverable: "Les sections 1, 2 et 3 du template evaluation-mecanisme-signalement-culture.docx complétées pour le cas de N'Djaména, avec le protocole de test en cinq lignes.",
  },
  {
    type: 'exercise',
    title: "Exercice 2 — « Le canal muet » : tone-at-the-top, conclusion et recommandations",
    instructions: "Même cas, suite. Vous complétez maintenant les sections 4 et 5 du template et vous rédigez la note de recommandations. Vous n'avez, dans le cas, qu'un fait daté explicite (les réquisitions de carburant validées « en urgence » par le Représentant Pays) et plusieurs éléments qui en sont proches : à vous de distinguer ce qui est un fait, ce qui est à vérifier et ce qui manque.",
    steps: [
      {
        title: 'Complétez les trois lignes de la section 4 (procédure 6)',
        actions: [
          "Au moins deux faits datés ou datables : les réquisitions validées sans les trois bons de sortie, et un second fait que vous identifiez.",
          "Pour les éléments non documentés dans le cas (réaction à un signalement impliquant un cadre), écrivez « Non documenté : dossiers disciplinaires à demander » plutôt que d'inventer.",
        ],
      },
      {
        title: 'Placez le cas dans la matrice canal × culture (procédure 7, étape 1) et fixez le niveau de risque avec l\'échelle écrite',
      },
      { title: 'Rédigez la section 5 en quatre blocs : réponse, trois faits, effet cumulé, limites' },
      {
        title: 'Formulez trois recommandations réalisables sous 90 jours (procédure 7, étape 4)',
        actions: [
          "Chacune avec cause, action, responsable, échéance, preuve.",
          "Aucune ne doit se limiter à « renforcer la communication sur la politique existante ».",
        ],
      },
    ],
    tip: "Corrigé indicatif : second fait possible = la politique signée depuis six ans mais jamais expliquée à l'oral (discours / moyens). Niveau attendu : Élevé (canal non crédible et culture négative, sans indice de fraude confirmé). Recommandations attendues : canal externalisé et oral dans les langues locales ; référents de terrain hors ligne du chef de base ; contrôle des dérogations aux bons de sortie par la Conformité, avec preuve à 90 jours.",
    pitfall: "Écrire « la direction a un comportement laxiste ». Citez la phrase exacte du Représentant Pays, la nature des pièces manquantes et la période, ou écrivez « non documenté ».",
    deliverable: "Les sections 4 et 5 du template complétées et une note de recommandations ne dépassant pas une demi-page, avec trois recommandations à 90 jours.",
  },
  {
    type: 'exercise',
    title: "Exercice 3 — « Le canal muet » : la grille des typologies et le score de risque",
    instructions: "Toujours le même cas. Ouvrez grille-typologie-fraude-red-flags.xlsx et cochez, dans la catégorie « Détournement », les red flags que le cas illustre concrètement. Observez ensuite comment l'onglet « Score de risque » réagit à chacun de vos choix.",
    steps: [
      { title: 'Enregistrez une copie de travail et identifiez-la en ligne 3 (procédure 2, étape 1)' },
      {
        title: 'Pour chacune des lignes 5 à 8, décidez Oui ou Non et écrivez la colonne E',
        actions: [
          "Appliquez la règle : « Oui » seulement avec un fait daté ou datable du cas ; sinon « Non » avec « NON TESTÉ — motif ».",
        ],
      },
      {
        title: 'Notez le score et le niveau après chaque coche',
        body: "Une table à trois colonnes : coche ajoutée, score du Détournement, niveau d'alerte.",
      },
      { title: 'Rédigez en trois lignes ce que dit le score et ce qu\'il ne dit pas' },
    ],
    table: {
      columns: ['Coche ajoutée', 'Score Détournement', 'Niveau attendu'],
      rows: [
        ['Aucune', '0', 'NORMAL'],
        ['Ligne 6 seule', '3', 'À SURVEILLER'],
        ['Lignes 6 et 7', '5', 'À SURVEILLER'],
        ['Lignes 5, 6 et 7', '8', 'ALERTE ÉLEVÉE'],
      ],
    },
    tip: "Corrigé indicatif : ligne 6 = « Oui » (réquisitions validées sans les justificatifs habituels, de façon répétée). Ligne 7 = « Oui » seulement si le calendrier des visites sur la base la plus excentrée le confirme : sinon « Non — NON TESTÉ, calendrier à demander ». Lignes 5 et 8 = « Non — NON TESTÉ » faute de données : le score est un plancher.",
    pitfall: "Cocher la ligne 5 pour « faire monter » le score. La grille n'a de valeur que par ses preuves : un « Oui » sans fait dans la colonne E invalide toute la grille.",
    deliverable: "La grille des typologies avec la catégorie « Détournement » complétée (colonnes C et E), le tableau d'évolution du score et trois lignes d'interprétation.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Lire quatre situations avec le triangle de la fraude',
    instructions: "Pour chaque situation, identifiez la typologie, la signature d'opportunité, le ou les indicateurs de la grille (numéros de ligne) et le contrôle prioritaire à vérifier. Ne cherchez ni la pression ni la rationalisation de la personne : formulez seulement la faille.",
    table: {
      columns: ['N°', 'Situation'],
      rows: [
        ['1', "Le gestionnaire de paie d'un bureau crée et clôture les dossiers du personnel et transmet lui-même la liste à la Finance. Le turn-over annuel atteint 40 %, et aucune présence physique n'est contrôlée."],
        ['2', "Un acheteur attribue depuis trois ans tous les marchés de transport au même transporteur, sans comparaison d'offres, et signe lui-même les bons de réception."],
        ['3', "Un chef de projet recrute son cousin comme chauffeur. Aucune mention au dossier. Il dira : « Personne ne m'a jamais demandé de déclarer quoi que ce soit »."],
        ['4', "Le caissier d'une antenne isolée tient la caisse, saisit les écritures et prépare lui-même le rapprochement bancaire. La dernière supervision date de neuf mois."],
      ],
    },
    steps: [
      { title: 'Remplissez un tableau : situation, typologie, signature d\'opportunité, lignes de la grille, contrôle prioritaire, question à poser' },
      { title: 'Pour la situation 3, écrivez la phrase de rationalisation et le contrôle qui la rendrait impossible' },
      { title: 'Pour chaque situation, écrivez ce que vous ne ferez pas : l\'action qui reviendrait à instruire une personne' },
    ],
    tip: "Corrigé indicatif : 1 = ghost workers, lignes 13 et 14 ; 2 = fausses factures, lignes 9 et 10 ; 3 = conflits d'intérêt, lignes 17 et 19 ; 4 = détournement, lignes 5 et 7. Si vous avez écrit « fraude du caissier », reformulez : le red flag est un cumul de fonctions.",
    deliverable: "Un tableau de quatre situations lues avec le triangle, avec les lignes de la grille et les contrôles prioritaires.",
  },
  {
    type: 'exercise',
    title: "Exercice 5 — Concevoir le système de signalement de N'Djaména",
    instructions: "À partir de votre diagnostic de l'exercice 1, concevez le protocole de signalement sécurisé et protégé de l'ONG de N'Djaména : 260 agents, quatre bases à l'est du Tchad, personnel logistique et journaliers qui lisent peu le français, bureau pays et siège régional à Nairobi. Suivez la procédure 8 de bout en bout.",
    steps: [
      { title: 'Traduisez au moins cinq constats du cas en exigences vérifiables (procédure 8, étape 1)' },
      {
        title: 'Choisissez au moins trois canaux complémentaires et justifiez chacun (étape 2)',
        actions: [
          "Un canal oral gratuit dans les langues de travail.",
          "Un canal de proximité hors ligne du chef de base.",
          "Un canal de contournement vers l'instance la plus haute.",
        ],
      },
      { title: 'Dessinez le circuit : accusé de réception, tri, instruction, retour, clôture, avec responsables et délais (étape 3)' },
      { title: 'Rédigez les six clauses de protection contre les représailles (étape 4)' },
      { title: 'Fixez cinq indicateurs avec cibles à 90 jours et la date du test de contrôle (étape 5)' },
    ],
    tip: "Autocontrôle : un lecteur peut-il, en lisant votre protocole, dire qui reçoit un signalement visant le chef de base, en combien de jours il sera accusé réception et comment un agent sait qu'il est protégé ? Si une réponse manque, le protocole est incomplet.",
    pitfall: "Placer le canal sous l'autorité du bureau pays « formellement rattaché à une entité régionale ». Si le chef de base soupçonné peut plausiblement savoir qui appelle, le canal ne protège personne.",
    deliverable: "Un protocole de signalement d'une page, avec canaux, circuit à délais, six clauses de protection et cinq indicateurs.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre note d'orientation relie chaque typologie à une signature d'opportunité vérifiable et hiérarchise les priorités, sans qualifier aucune personne.",
      "Dans la grille des typologies, chaque « Oui » est accompagné d'un fait daté, chiffré et sourcé en colonne E ; chaque « Non » indique le test fait ou « NON TESTÉ — motif ».",
      "Vous avez recalculé à la main les quatre sous-totaux et vous pouvez dire quel indicateur fait basculer le niveau d'alerte.",
      "Votre test d'anonymat repose sur un accord écrit du commanditaire, un scénario sans nom réel, un journal horodaté et une chaîne de réception prouvée.",
      "La section 1 contient un « Oui » ou un « Non » par canal, avec la preuve ; aucune mention « partiellement anonyme ».",
      "La section 2 donne un nombre de signalements et un délai calculés sur dossiers, et le silence est documenté comme un signal, avec des hypothèses.",
      "La section 3 répond aux trois questions du template par des chiffres d'entretiens et par le contraste avec la politique écrite.",
      "Chaque cellule de la section 4 contient un fait daté, vérifiable, sans adjectif, et les faits ont été confirmés avec l'intéressé.",
      "La section 5 répond à la question du template, donne un niveau argumenté par trois faits, l'effet cumulé et les limites.",
      "Chaque recommandation a une cause, une action, un responsable, une échéance sous 90 jours et une preuve ; aucune ne se réduit à « communiquer ».",
      "Votre protocole de signalement contient au moins trois canaux, une règle de conflit, des délais, six clauses de protection et cinq indicateurs.",
    ],
  },

  // ───────────────────────── 8. Erreurs fréquentes ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Une politique signée et classée, jamais expliquée au personnel de terrain : une signature dans une langue que l'agent lit mal coche une case administrative et ne construit aucune compréhension. Parade : demandez en entretien « que dit la politique ? » et exigez des sessions orales dans la langue de travail de chaque base (procédures 5 et 8).",
      "Un canal « anonyme » qui permet d'identifier l'auteur : numéro d'un bureau précis, formulaire qui journalise l'IP, boîte lue par le cercle visé. Parade : test d'anonymat réel avec accord écrit, chaîne de réception prouvée par les journaux techniques (procédure 3).",
      "Ignorer les signaux de tone-at-the-top venant de la direction : « on contourne nos règles parce que c'est urgent » se note mot pour mot et se date. Parade : échantillon de décisions de la direction et dossiers disciplinaires comparés (procédure 6).",
      "Confondre l'absence de signalement et l'absence de problème : trois ans de silence dans une organisation exposée sont presque toujours un canal qui ne fonctionne pas. Parade : reconstituer l'historique, calculer les délais, interroger le terrain (procédures 4 et 5).",
      "Placer le canal sous l'autorité de la ligne qui peut être visée : même formellement rattaché à une entité régionale, un canal dont le chef de base peut plausiblement savoir qui appelle ne protège personne. Parade : prestataire externe et voie de contournement vers le comité (procédure 8).",
      "Transformer un red flag en accusation : un indicateur appelle une vérification, il ne prouve rien. Parade : écrivez des mécanismes et des faits, jamais « fraude » ni le nom d'une personne ; transmettez tout indice sérieux au commanditaire sans enquêter seul (théorie et procédure 7).",
      "Cocher « Oui » sans fait ou « Non » sans test dans la grille : le score devient une fiction qui se retourne contre vous. Parade : règle de saisie écrite, constat daté en colonne E, « NON TESTÉ — motif » quand le test est impossible (procédure 2).",
      "Montrer vos conclusions plutôt que vos faits à la personne examinée, ou diffuser la section 4 à la direction avant le comité. Parade : confirmer les faits seuls, diffusion décidée par la commanditaire (procédures 6 et 7).",
    ],
  },

  // ───────────────────────── 9. Réalisations + check-list ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez lu quatre typologies de fraude avec le triangle de la fraude et rédigé une note d'orientation qui nomme, pour chacune, la faille à vérifier en priorité.",
      "Vous avez rempli grille-typologie-fraude-red-flags.xlsx sur 16 indicateurs, avec un constat daté par ligne, recalculé les sous-totaux (5, 6, 5, 5) et traduit chaque niveau d'alerte en décision de mission.",
      "Vous avez mené un test d'anonymat réel avec accord écrit : trois canaux examinés, un journal horodaté, une chaîne de réception prouvée, section 1 du template complétée.",
      "Vous avez reconstitué sans registre l'historique des signalements (0 à Bunia, 2 pour HSGL, délai de 43 jours contre 15 annoncés) et complété la section 2.",
      "Vous avez interrogé douze agents de terrain avec un guide fixe, tabulé les réponses et rédigé la section 3 en faits chiffrés.",
      "Vous avez construit une grille tone-at-the-top avec trois faits datés et confirmés, puis conclu en section 5 sur un niveau de risque global argumenté par une échelle écrite.",
      "Vous avez rédigé une note de recommandations à 90 jours, chacune avec cause, responsable, échéance et preuve, et transmis le dossier à la seule commanditaire.",
      "Vous avez conçu un protocole de signalement sécurisé et protégé : canaux complémentaires, circuit à délais, clauses de protection contre les représailles, indicateurs et test de contrôle.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais appliquer le triangle de la fraude à chacune des quatre typologies ONG (détournement, fausses factures, ghost workers, conflits d'intérêt) et identifier leur signature d'opportunité propre.",
      "Je sais concevoir et mener un test pratique d'anonymat d'un canal de signalement, avec accord écrit et journal, au-delà de la lecture de sa politique.",
      "Je sais construire une grille de tone-at-the-top à partir de faits datés et vérifiables, et non d'impressions générales sur l'ambiance d'un bureau.",
      "Je sais interpréter une absence prolongée de signalements comme un signal d'alerte potentiel plutôt que comme une preuve d'absence de fraude.",
      "Je sais vérifier l'accessibilité réelle d'un mécanisme de signalement pour le personnel de terrain, indépendamment de son accessibilité pour le siège.",
      "J'ai complété la grille des typologies de fraude et interprété son score de risque par catégorie, en sachant ce qu'il ne mesure pas.",
      "J'ai complété l'évaluation du mécanisme de signalement et de la culture organisationnelle avec le template fourni, sections 1 à 5.",
      "Je sais formuler des recommandations qui s'attaquent à la cause réelle d'un dysfonctionnement, et concevoir un protocole de signalement sécurisé et protégé.",
    ],
  },

  // ───────────────────────── 10. Clôture ─────────────────────────
  {
    type: 'closing',
    nextModuleHint: "Module 07 — Conformité Bailleurs — USAID/BHA, UE, ECHO & Bailleurs Onusiens. Dans votre protocole, vous avez écrit « notification aux bailleurs selon la convention » : le module suivant vous apprend ce que chaque grand bailleur exige réellement en matière de passation de marchés, d'éligibilité, de reporting et de divulgation d'un soupçon de fraude, et quelles sont les conséquences d'une non-conformité.",
  },
]
