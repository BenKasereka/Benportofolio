// Module 04 — Gestion des Fournisseurs & Conformité
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure
// (qualification, screening d'inéligibilité, anti-corruption, évaluation en
// 29 critères, suivi du portefeuille, choix du contrat-cadre, rédaction et
// renouvellement de l'accord-cadre) est déroulée étape par étape (une étape
// par écran), appliquée à un cas fil rouge chiffré, puis résolue
// intégralement et transposée en exercice. Les diapositives trop chargées
// sont découpées automatiquement en « (suite) » par expandSlides.
export default [
  // ─────────────────────────────────────────────────────────────────────
  // OUVERTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'cover',
    title: 'Gestion des Fournisseurs & Conformité',
    hook: "En deux semaines, vous allez transformer un carnet de contacts hérité de l'urgence en un portefeuille fournisseurs qualifié et défendable en audit : des fiches de qualification complètes (template Excel), un screening OFAC / UE / ONU daté et documenté, une évaluation en 29 critères chiffrée, un suivi des échéances, un accord-cadre rédigé (template Word) et une décision écrite sur un cas de quasi-correspondance. Chaque étape est déroulée ici, clic par clic, sur un cas de terrain chiffré.",
  },
  {
    type: 'objectives',
    items: [
      "Qualifier un nouveau fournisseur en constituant, avant toute commande, le dossier documentaire complet (existence légale, fiscalité, RIB, références, capacité) et en remplissant le bloc d'identification de la fiche de qualification, avec pour livrable une fiche signée et un dossier classé.",
      "Effectuer un screening d'inéligibilité sur la société, ses dirigeants et ses propriétaires (OpenSanctions, puis OFAC, UE, ONU) et le documenter de façon traçable, avec pour livrable une preuve datée de chaque recherche et un résultat consigné dans la fiche.",
      "Appliquer la politique anti-corruption à la relation fournisseur (déclaration de conflit d'intérêts, clauses d'intégrité, registre des cadeaux, signaux d'alerte), avec pour livrable un dossier d'intégrité par fournisseur et une procédure de signalement.",
      "Évaluer un fournisseur sur les 29 critères objectifs de la fiche (financier, légal, produits, service, prix), interpréter la synthèse et formuler une décision Qualifié / Qualifié sous condition / Rejeté justifiée par écrit.",
      "Suivre le portefeuille dans le temps (tableau de suivi, échéances de réévaluation, scores comparés, actions correctives), avec pour livrable un tableau de portefeuille à jour et un calendrier de réévaluation.",
      "Décider entre achat ponctuel et contrat-cadre, puis rédiger, négocier et gérer jusqu'à son échéance un accord-cadre (template Word), avec pour livrable un accord-cadre complet et une revue de renouvellement documentée.",
      "Trancher un cas de correspondance ambiguë (near-match) sur une liste de sanctions, sans bloquer à tort une relation légitime ni couvrir un vrai risque, avec pour livrable une note de décision d'une demi-page.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une lecture : c'est la remise à niveau d'un portefeuille fournisseurs, découpée en 8 procédures. À la fin, vous aurez en main sept livrables réutilisables tels quels sur votre propre mission.",
      "Toutes les procédures sont appliquées au même cas fil rouge : l'ONG fictive Kerowa Santé (vue au Module 01), qui doit qualifier trois grossistes de Wau avant de signer un accord-cadre de vivres pour son projet de Gogrial. Le cas du Nigeria (Bulama General Trading) vous est donné en exercice noté, avec sa correction.",
    ],
    bullets: [
      "L1 — Les dossiers de qualification des fournisseurs (pièces collectées, bloc Identification de la fiche rempli, dossier classé).",
      "L2 — Le registre de screening : preuves datées OpenSanctions + OFAC + UE + ONU pour chaque société et chaque dirigeant, et la note de traitement des quasi-correspondances.",
      "L3 — Le dossier d'intégrité : déclarations de conflit d'intérêts, clauses d'intégrité, registre des cadeaux, procédure de signalement.",
      "L4 — La fiche fiche-qualification-evaluation-fournisseur.xlsx complétée (29 critères, synthèse, décision, commentaires, signatures).",
      "L5 — Le tableau de suivi du portefeuille : statuts, dates de prochaine validation, scores comparés, alertes.",
      "L6 — La note de décision « achat ponctuel ou contrat-cadre » et l'accord-cadre rédigé dans accord-cadre-framework-agreement-template.docx.",
      "L7 — La revue de renouvellement (score récent + remise en concurrence partielle) et l'avenant ou le non-renouvellement qui en découle.",
    ],
    tip: "Créez dès maintenant un dossier « Portefeuille fournisseurs » partagé et accessible à l'équipe achats, avec un sous-dossier par fournisseur (Qualification, Screening, Intégrité, Contrat, Évaluations) : un dossier qui n'existe que sur votre poste n'existe pas pour un auditeur.",
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : Kerowa Santé doit qualifier trois grossistes à Wau',
    body: [
      "Rappel (Module 01) : Kerowa Santé (ONG fictive) mène depuis le 1er décembre 2025 un projet médical et nutritionnel de 12 mois à Gogrial (État du Warrap, Soudan du Sud), budget 1 200 000 EUR dont 85 % financés par ECHO. Seuils internes retenus : 3 devis dès 1 000 EUR, appel d'offres restreint dès 10 000 EUR, appel d'offres ouvert dès 60 000 EUR ; dossier d'achat en 8 pièces ; conservation 5 ans.",
      "Situation : le grossiste historique de Wau est un fournisseur unique, jamais qualifié. Le 10 mars, la coordination a validé un appel d'offres restreint pour 6 mois de farine de maïs et de haricots (2,75 t par mois, soit 16,5 t, estimées à 10 478 EUR) et décidé de les sécuriser par un accord-cadre. Vous devez qualifier 3 grossistes avant l'attribution du 27 mars. L'accord-cadre devra être signé le 31 mars pour une prise d'effet le 1er avril 2026. Aucun contrat ne peut être signé avec un fournisseur non qualifié.",
    ],
    table: {
      columns: ['Fournisseur (fictif)', 'Situation', 'Ce que l\'on sait'],
      rows: [
        ['A — Jur River Grains Ltd', 'Fournisseur historique de Kerowa (3 achats, 3 890 EUR)', 'Gérant et associé à 70 % : Moses Lado Kenyi ; associée à 30 % : Esther Kenyi Lado. Dossier jamais constitué.'],
        ['B — Wau Central Provisions', 'Nouveau, jamais consulté', 'Gérante : Rose Akech Dhieu. Se dit prête à livrer à Gogrial ; capacité non vérifiée.'],
        ['C — Bahr el Ghazal Agro Supply', 'Nouveau, proposé par un transporteur', 'Gérant : Garang Dut Mayen. Documents partiels transmis par e-mail.'],
      ],
    },
    example: {
      title: 'Les personnes de la passation (Module 01) et leur rôle ici',
      lines: [
        "Grace M., coordinatrice pays (Juba) : signe les contrats de 10 000 à 60 000 EUR, donc l'accord-cadre de 10 478 EUR.",
        "Daniel O., coordinateur terrain (de retour le 23 mars) : signe les PO de 1 000 à 10 000 EUR, donc chaque appel de commande mensuel.",
        "Dr Rebecca N., responsable programme nutrition : référente technique, valide la qualité des produits.",
        "Peter A., logisticien : conduit la visite des entrepôts à Wau. Joseph K., finance : vérifie les RIB et factures. Mary J., assistante achats : prépare les dossiers.",
      ],
    },
    pitfall: "Tous les noms, sociétés, montants et résultats de recherche de ce module sont fictifs et donnés à titre d'exemple : ne les réutilisez jamais tels quels, et ne screenez jamais des noms fictifs en croyant faire un vrai contrôle.",
  },
  {
    type: 'concept',
    title: 'Votre calendrier : deux semaines, une procédure après l\'autre',
    body: "Chaque procédure correspond à un créneau précis. Respectez l'ordre : chaque livrable sert d'entrée au suivant, et rien ne se signe avant que les étapes de qualification, de screening et de décision soient datées.",
    table: {
      columns: ['Quand', 'Procédure', 'Livrable produit'],
      rows: [
        ['Lundi 16 mars', 'P1 — Constituer le dossier de qualification', 'L1 Dossiers demandés aux 3 grossistes'],
        ['Mardi 17 mars', 'P2 — Screening d\'inéligibilité', 'L2 Registre de screening daté'],
        ['Mercredi 18 mars', 'P3 — Politique anti-corruption', 'L3 Dossier d\'intégrité'],
        ['Jeudi 19 mars', 'P1 (suite) — Visite des entrepôts de Wau', 'Rapport de visite et références'],
        ['Lundi 23 – mercredi 25 mars', 'P4 — Évaluation en 29 critères et décision', 'L4 Trois fiches complétées et signées'],
        ['Jeudi 26 mars', 'P5 — Tableau de suivi du portefeuille', 'L5 Portefeuille à jour'],
        ['Vendredi 27 mars', 'P6 — Achat ponctuel ou contrat-cadre', 'L6 Note de décision'],
        ['Lundi 30 – mardi 31 mars', 'P7 — Rédiger et signer l\'accord-cadre', 'L6 Accord-cadre signé'],
        ['Juillet – septembre', 'P8 — Gérer le cycle de vie et le renouvellement', 'L7 Revue de renouvellement'],
      ],
    },
    tip: "Bloquez ces créneaux dès lundi 8 h. Un fournisseur non qualifié à J-1 de l'attribution est la situation qui pousse à signer « quand même ».",
  },

  // ─────────────────────────────────────────────────────────────────────
  // THÉORIE ESSENTIELLE — uniquement ce qui sert à agir
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Le portefeuille fournisseurs : un actif, pas une formalité',
    body: [
      "Un Supply Chain Manager humanitaire hérite rarement d'un portefeuille fournisseurs propre. Le plus souvent, c'est un empilement de contacts pris dans l'urgence, jamais requalifiés, avec des dossiers incomplets et des évaluations qui n'existent que dans la mémoire du logisticien parti six mois plus tôt. Le rôle du SCM est de transformer ça en un actif géré, sur lequel toute l'organisation peut s'appuyer sans repartir de zéro à chaque achat.",
      "Ce n'est pas une tâche administrative secondaire : c'est ce qui détermine si votre organisation peut acheter vite ET correctement en situation de crise.",
    ],
    highlight: "Un fournisseur qualifié à l'avance, avec un contrat-cadre en place, permet de sortir un bon de commande en quelques heures. Un fournisseur non qualifié force à relancer un cycle d'achat complet (RFQ, comparaison, comité) pendant que la population attend.",
    example: {
      title: 'Kerowa — le coût de ne pas avoir qualifié',
      lines: [
        "Sans qualification : chaque commande de vivres repart de zéro (3 devis, vérification du fournisseur, comité) → 3 à 4 semaines pour 1 746 EUR de farine et de haricots.",
        "Avec fournisseur qualifié et accord-cadre : e-mail de commande + PO signé par Daniel O. → livraison sous 7 jours, dossier d'achat déjà à moitié constitué.",
        "Sur 6 mois : 6 appels de commande au lieu de 6 procédures complètes — environ 5 à 6 semaines de travail d'achat économisées.",
      ],
    },
  },
  {
    type: 'concept',
    title: 'Le cycle de vie d\'un fournisseur : sept étapes, une preuve par étape',
    body: "Le module suit un fournisseur de son premier contact à son renouvellement. À chaque étape, il existe un document qui prouve que l'étape a eu lieu : c'est lui qu'un auditeur demandera, parfois 18 mois plus tard.",
    table: {
      columns: ['Étape (procédure)', 'Ce que vous faites', 'Preuve à conserver'],
      rows: [
        ['1. Qualification (P1)', 'Constituer le dossier avant toute commande', 'Pièces légales, fiscales, bancaires, références, rapport de visite'],
        ['2. Screening (P2)', 'Vérifier l\'inéligibilité (OFAC, UE, ONU) avant signature', 'Captures ou PDF datés, note de résultat, mention dans la fiche'],
        ['3. Intégrité (P3)', 'Déclarations, clauses, cadeaux, signalement', 'Déclarations de conflit d\'intérêts signées, registre des cadeaux'],
        ['4. Décision (P4)', 'Évaluer en 29 critères, statuer', 'Fiche complétée, signée et datée (Qualifié / sous condition / Rejeté)'],
        ['5. Suivi (P5)', 'Suivre échéances, scores, actions correctives', 'Tableau de portefeuille, fiches d\'évaluation successives'],
        ['6. Contrat-cadre (P6, P7)', 'Décider et rédiger l\'accord', 'Note de décision, accord-cadre signé'],
        ['7. Renouvellement (P8)', 'Revue de performance + remise en concurrence', 'Fiche récente, comparatif d\'offres, avenant ou non-renouvellement'],
      ],
    },
    tip: "Si une étape n'a pas de preuve datée, elle n'existe pas pour un auditeur : c'est le fil conducteur de tout le module.",
  },
  {
    type: 'concept',
    title: 'Le screening sanctions n\'est pas négociable',
    body: [
      "Responsabilité légale directe : les régimes de sanctions (OFAC américain, régime UE, listes du Conseil de sécurité de l'ONU) s'appliquent à toute transaction qui transite, même indirectement, par le système bancaire international. Payer, même involontairement, une entité sanctionnée peut engager la responsabilité pénale et financière de l'organisation elle-même, pas seulement de la personne qui a signé le contrat. Des ONG internationales ont eu des comptes bancaires gelés ou des transactions bloquées pour ce motif.",
      "Perte de financement bailleur : les bailleurs institutionnels (ECHO, USAID/BHA, agences onusiennes) intègrent une clause d'inéligibilité dans leurs accords de financement. Un fournisseur sanctionné payé avec ces fonds constitue une dépense inéligible, rejetable en audit avec obligation de remboursement, parfois des années après la transaction, quand le budget du projet est déjà clos.",
    ],
    example: {
      title: 'Kerowa — ce que coûterait une erreur (chiffres fictifs)',
      lines: [
        "Accord-cadre de vivres : 10 478 EUR payés sur le projet ECHO (85 %).",
        "Si le fournisseur s'avère sanctionné : dépense inéligible → remboursement de la part ECHO (10 478 × 85 % = 8 906 EUR) à prélever sur les fonds propres, plus l'exposition juridique et bancaire de l'organisation.",
        "Le même contrôle, fait à temps, coûte 30 minutes et une capture d'écran datée.",
      ],
    },
    highlight: "Le screening se fait AVANT la première commande, ET se répète à chaque changement significatif chez le fournisseur (propriétaire, raison sociale, dirigeants) ainsi qu'à chaque réévaluation périodique. Un fournisseur « propre » il y a deux ans n'est pas automatiquement propre aujourd'hui.",
  },
  {
    type: 'comparison-table',
    title: 'Les outils de screening : à quoi sert chacun, et ses limites',
    columns: ['Outil', 'Ce qu\'il couvre', 'Quand l\'utiliser', 'Limite à connaître'],
    rows: [
      ['OpenSanctions.org', 'Agrégateur gratuit qui consolide OFAC, UE, ONU et de nombreuses listes nationales et sectorielles.', 'Premier balayage large, en particulier pour un nom courant ou des dirigeants multiples.', 'Pas une source officielle : agrège aussi des sources secondaires. Jamais une source finale de décision.'],
      ['OFAC Sanctions List Search (sanctionssearch.ofac.treas.gov)', 'Liste SDN (Specially Designated Nationals) et autres listes américaines. Gratuit, sans compte, score de correspondance approximative réglable.', 'Confirmation de tout signal, et systématiquement si des paiements en USD sont prévus.', 'Un score trop élevé masque les variantes orthographiques : abaissez-le pour une recherche large.'],
      ['EU Financial Sanctions Database (webgate.ec.europa.eu/fsd)', 'Base consolidée officielle des sanctions financières de l\'UE, filtrable par régime (pays ou thème).', 'Tout achat impliquant une entité ou un paiement transitant par un pays membre de l\'UE.', 'Recherche à lancer avec le bon régime ; vérifiez la date de mise à jour de la base.'],
      ['UN Security Council Consolidated List (scsanctions.un.org)', 'Liste consolidée des sanctions du Conseil de sécurité de l\'ONU.', 'Référence pour les mesures onusiennes, surtout si une résolution encadre le pays d\'opération.', 'Moins fréquemment mise à jour que les deux précédentes ; noter la date de la liste.'],
    ],
  },
  {
    type: 'concept',
    title: 'Les trois issues d\'une recherche : aucune, correspondance, quasi-correspondance',
    body: [
      "Une recherche de screening aboutit toujours à l'un de trois cas, et chacun appelle une réaction différente. Avoir les trois réactions en tête évite aussi bien le blocage réflexe que l'indifférence.",
    ],
    table: {
      columns: ['Résultat', 'Ce que cela signifie', 'Votre réaction'],
      rows: [
        ['Aucun résultat', 'Le nom et ses variantes n\'apparaissent sur aucune liste balayée.', 'Consignez la date, les listes et le résultat « aucun résultat » : la preuve vaut autant que le résultat positif.'],
        ['Correspondance exacte confirmée sur liste primaire', 'Entité ou personne identifiée sans doute raisonnable (identifiants concordants).', 'Arrêt immédiat de toute transaction, aucun paiement, escalade à la coordination pays et au siège, information du bailleur selon la convention.'],
        ['Quasi-correspondance (near-match)', 'Le nom ressemble, sans être strictement identique, à une entité listée : homonymie possible.', 'Ni blocage automatique, ni oubli : analyse documentée (identifiants complémentaires, confirmation sur liste primaire), puis décision écrite.'],
      ],
    },
    pitfall: "Traiter toute quasi-correspondance comme un blocage automatique casse une chaîne d'approvisionnement fiable ; l'ignorer pour gagner du temps expose l'organisation. Les deux réflexes sont des fautes professionnelles : seule une vérification documentée tranche correctement.",
  },
  {
    type: 'concept',
    title: 'La logique des contrats-cadres : efficacité contre remise en concurrence',
    body: [
      "Un contrat-cadre (Framework Agreement, FWA) fixe à l'avance, avec un fournisseur qualifié, les conditions (prix, délais, spécifications) applicables à une série d'achats récurrents sur une période donnée, typiquement 12 mois, sans engagement de volume ferme. L'intérêt est double : un temps considérable gagné et, généralement, de meilleures conditions grâce au volume garanti.",
      "Mais cette efficacité a un coût caché si elle est mal gérée : un contrat-cadre reconduit automatiquement, année après année, sans nouvelle mise en concurrence, finit par coûter plus cher que le marché et prive l'organisation de la possibilité de détecter un meilleur fournisseur apparu entre-temps.",
    ],
    example: {
      title: 'Kerowa — l\'effet d\'une reconduction automatique (chiffres fictifs)',
      lines: [
        "Prix signé en 2026 : 635 EUR/t. Le marché baisse de 4 % sur la période mais le contrat est reconduit sans comparaison.",
        "Sur 16,5 t par semestre, un écart de 4 % représente 16,5 × 635 × 4 % ≈ 419 EUR par semestre ; sur 5 reconductions, plus de 2 000 EUR de surcoût invisible, et un fournisseur qui n'a plus aucune raison de s'améliorer.",
      ],
    },
    highlight: "Un contrat-cadre n'est pas un mariage. C'est un outil d'efficacité sous condition de revue régulière : sa facilité au quotidien est précisément ce qui pousse à en oublier l'échéance.",
  },
  {
    type: 'concept',
    title: 'Un accord-cadre ne dispense jamais des règles du bailleur',
    body: [
      "Un accord-cadre n'est pas un moyen de contourner les seuils : il doit lui-même être attribué selon la procédure correspondant à sa valeur totale estimée, puis chaque commande passée au titre de l'accord est tracée par un bon de commande (appel de commande) rattaché au contrat.",
      "La valeur à retenir pour choisir la procédure est la valeur cumulée estimée sur toute la durée de l'accord, jamais le montant d'une seule commande. Découper un besoin récurrent en petites commandes pour rester sous un seuil est un fractionnement, une faute en audit.",
    ],
    example: {
      title: 'Kerowa — quelle procédure pour l\'accord-cadre de vivres ?',
      lines: [
        "Valeur estimée sur 6 mois : 16,5 t × 635 EUR/t = 10 478 EUR → au-dessus de 10 000 EUR → appel d'offres restreint (et non 3 devis).",
        "Chaque appel de commande mensuel : 2,75 t × 635 EUR = 1 746 EUR → PO signé par le coordinateur terrain, sans nouvelle mise en concurrence puisque les prix sont fixés dans l'accord.",
        "Signature de l'accord : 10 478 EUR → coordinatrice pays (tranche 10 000 – 60 000 EUR).",
      ],
    },
    pitfall: "Signer un accord-cadre « parce que c'est plus rapide » sans mise en concurrence initiale : l'économie de temps se transforme en dépense non justifiée à l'audit.",
  },
  {
    type: 'comparison-table',
    title: 'Achat ponctuel ou accord-cadre : quel outil pour quel besoin ?',
    columns: ['Critère', 'Achat ponctuel (RFQ / PO)', 'Accord-cadre'],
    rows: [
      ['Besoin', 'Unique ou rare, imprévisible', 'Récurrent et prévisible (même catégorie plusieurs fois par an)'],
      ['Spécification', 'Variable à chaque achat', 'Stable pendant la durée du contrat'],
      ['Concurrence', 'À chaque achat selon la valeur', 'Une fois pour toute la durée, puis revue à l\'échéance'],
      ['Délai d\'approvisionnement', 'Cycle complet à chaque besoin (semaines)', 'PO en quelques heures (jours de livraison)'],
      ['Prix', 'Prix du jour, souvent plus élevé en urgence', 'Prix fixé ou plafonné, volume garanti sans engagement ferme'],
      ['Risque principal', 'Fournisseur non qualifié, lenteur', 'Reconduction automatique, dépendance à un fournisseur'],
      ['Kerowa', 'Médicaments d\'une centrale d\'achat, transports exceptionnels', 'Vivres non périssables : 2,75 t chaque mois, spécification stable'],
    ],
  },
  {
    type: 'concept',
    title: 'La politique anti-corruption en quatre piliers',
    body: [
      "La corruption dans une chaîne d'approvisionnement prend des formes banales : pots-de-vin pour attribuer un marché, favoritisme envers un parent ou un ami, collusion entre soumissionnaires, surfacturation, fausses factures, cadeaux qui créent une dette. La politique anti-corruption de l'organisation se traduit en quatre piliers que le SCM applique à chaque fournisseur.",
    ],
    bullets: [
      "Prévenir : déclaration de conflit d'intérêts du personnel et du fournisseur, code de conduite signé, séparation des tâches (celui qui choisit n'est pas celui qui paie ni celui qui réceptionne).",
      "Encadrer : clauses d'intégrité dans les contrats (interdiction de cadeaux et de commissions, droit d'audit, résiliation immédiate).",
      "Détecter : signaux d'alerte (prix hors marché, offres identiques entre soumissionnaires, pression pour un fournisseur précis, adresses ou comptes bancaires partagés).",
      "Signaler et sanctionner : canal de signalement connu de tous, aucune enquête menée seul, transmission au point focal, information du bailleur selon la convention, suites disciplinaires et contractuelles.",
    ],
    example: {
      title: 'Où la fiche de qualification vous oblige à y penser',
      lines: [
        "Ligne 23 de la fiche (critères légaux) : « Rien ne permet de soupçonner que le fournisseur a des pratiques non-éthiques ? »",
        "Ligne 24 de la fiche (critères légaux) : « Rien ne permet de soupçonner une relation de conflit d'intérêt avec un membre du personnel ? »",
        "Un « Oui » n'est valable que s'il est appuyé par une déclaration signée, une recherche et un recoupement : la procédure 3 vous donne la méthode.",
      ],
    },
    highlight: "Tolérance zéro ne signifie pas absence de relations : un conflit d'intérêts déclaré à temps et géré (la personne concernée sort de la chaîne de décision) est une situation maîtrisée ; un conflit caché est une faute.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Qualification fournisseur', definition: "Processus documentaire par lequel un fournisseur est reconnu apte à contracter avec l'organisation (existence légale, capacité financière, éligibilité, références). Un dossier incomplet n'est pas qualifié." },
      { term: 'Inéligibilité (ineligibility screening)', definition: "Vérification qu'une entité ou un individu ne figure pas sur une liste de sanctions ou d'exclusion (OFAC, UE, ONU, ou liste interne bailleur)." },
      { term: 'Liste primaire / agrégateur', definition: "Liste officielle tenue par l'autorité qui sanctionne (OFAC, UE, ONU) / outil qui consolide plusieurs listes mais n'est pas source officielle (OpenSanctions)." },
      { term: 'SDN', definition: "Specially Designated Nationals : liste de personnes et d'entités sanctionnées tenue par l'OFAC. Les entités détenues à 50 % ou plus par des personnes listées sont traitées comme bloquées." },
      { term: 'Quasi-correspondance (near-match)', definition: "Résultat de screening où le nom d'un fournisseur ressemble, sans être strictement identique, à une entité listée. Exige une analyse documentée, jamais une décision automatique." },
      { term: 'Faux positif', definition: "Résultat de recherche qui ressemble à une entité listée mais qui concerne une autre personne (homonymie), établi par des identifiants différents." },
      { term: 'Contrat-cadre / Framework Agreement (FWA)', definition: "Accord fixant les conditions d'achats récurrents avec un fournisseur qualifié, sur une durée déterminée, sans engagement de volume ferme." },
      { term: 'Appel de commande (call-off)', definition: "Commande passée au titre d'un accord-cadre, matérialisée par un bon de commande rattaché au contrat." },
      { term: 'Scorecard pondéré', definition: "Outil d'évaluation périodique attribuant un score objectif à chaque fournisseur sur plusieurs critères, chacun pesé selon son importance relative." },
      { term: 'Conflit d\'intérêts', definition: "Situation où un intérêt personnel ou familial d'un membre du personnel peut influencer une décision d'achat. Il se déclare par écrit et se gère par la mise à l'écart de la personne." },
      { term: 'Remise en concurrence partielle', definition: "Comparaison, avant renouvellement, du fournisseur en place avec au minimum un ou deux autres fournisseurs qualifiés sur un même panier de produits." },
      { term: 'Fractionnement', definition: "Découpage d'un besoin en commandes plus petites pour rester sous un seuil de procédure : pratique interdite et sanctionnée en audit." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 1 — QUALIFIER : CONSTITUER LE DOSSIER (6 ÉTAPES)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 6',
    title: 'Ouvrir la fiche de qualification et en comprendre la structure',
    intro: "Le template fiche-qualification-evaluation-fournisseur.xlsx contient une seule feuille, « Validation Fournisseur », de 61 lignes sur 7 colonnes (A à G). Avant de saisir quoi que ce soit, vous repérez ses 6 zones : c'est elle que vous remplirez pour chaque fournisseur, et c'est elle qu'un auditeur demandera.",
    steps: [
      {
        title: 'Enregistrez une copie par fournisseur',
        actions: [
          "Ouvrez le fichier et enregistrez-le immédiatement sous « Fiche_Qualification_JurRiverGrains_2026-03-16.xlsx » dans le sous-dossier « 01_Qualification » du fournisseur. Ne travaillez jamais sur le modèle d'origine.",
          "Répétez pour chaque fournisseur : une fiche = un fournisseur = une date. Les fiches successives d'un même fournisseur ne s'écrasent jamais : elles forment son historique.",
        ],
      },
      {
        title: 'Repérez les six zones de la feuille',
        actions: [
          "Lignes 5 à 12 : « IDENTIFICATION DU FOURNISSEUR » (colonnes A à D), avec à droite (F5 à G10) le panneau « SYNTHÈSE ».",
          "Lignes 14 à 47 : les 29 critères en 5 catégories (financiers 6, légaux 4, produits 8, service 8, prix 3). La colonne D reçoit « Oui » ou « Non » par liste déroulante.",
          "Lignes 49 à 52 : « DÉCISION FINALE DE VALIDATION » avec une liste déroulante Oui / Non en D50.",
          "Lignes 54 à 58 : « Commentaires additionnels » (zone de texte libre A55:G58).",
          "Lignes 60 à 61 : signatures du membre supply, du référent technique, et la date.",
        ],
      },
      {
        title: 'Lisez la synthèse avant de remplir',
        actions: [
          "Cliquez sur G6 : =COUNTIF(D14:D47;\"Oui\") compte les critères validés ; G7 compte les « Non » ; G8 = 29 − G6 − G7 donne les critères en attente ou sans objet.",
          "F9 affiche « Critères validés : x/29 » et F10 « Taux de réponses complètes : y % », où y = (G6 + G7) / 29.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — lecture de la fiche vierge, lundi 16 mars à 8 h 30',
      lines: [
        "Trois copies créées : Fiche_Qualification_JurRiverGrains, Fiche_Qualification_WauCentralProvisions, Fiche_Qualification_BahrElGhazalAgro (dates du jour).",
        "Synthèse à vide : Critères « Oui » 0, « Non » 0, en attente 29 ; « Critères validés : 0/29 », « Taux de réponses complètes : 0 % ».",
        "Le sous-titre de la feuille et l'en-tête du document Word mentionnent encore « Module 03 » : c'est bien la fiche de ce module, ne vous en inquiétez pas.",
      ],
    },
    result: "Trois fiches vierges enregistrées au bon endroit, et vous savez dans quelle zone vous écrirez quelle information.",
    pitfall: "Remplir une fiche conservée sur votre bureau : le dossier doit être centralisé et accessible à toute personne autorisée de l'équipe achats, sinon il est inaccessible en cas de contrôle bailleur ou de départ imprévu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 6',
    title: 'Lister les pièces exigées et les demander par écrit',
    intro: "Un dossier incomplet n'est pas qualifié « sous réserve » : il n'est pas qualifié, point final, tant que les pièces manquantes ne sont pas obtenues. Vous commencez donc par fixer la liste des pièces et par la demander, par écrit, avec une date limite.",
    steps: [
      {
        title: 'Fixez la liste minimale des pièces',
        actions: [
          "Preuve d'existence légale : certificat d'enregistrement / immatriculation au registre des entreprises.",
          "Certificat fiscal à jour (attestation de situation fiscale).",
          "Coordonnées bancaires (RIB) : de préférence une attestation de la banque, au nom de la société.",
          "Deux à trois références clients vérifiables (nom, organisation, téléphone, nature et date de la prestation).",
          "Preuve de capacité opérationnelle réelle : photos et inventaire du stock, liste des véhicules ; visite de site si le volume d'achat le justifie.",
          "Identité des propriétaires et dirigeants (nom complet, date de naissance, copie d'une pièce d'identité, part de capital) : indispensable au screening de la procédure 2.",
        ],
      },
      {
        title: 'Envoyez la demande et suivez-la',
        actions: [
          "Envoyez un e-mail identique aux trois fournisseurs avec la liste, la date limite (ici vendredi 20 mars) et la phrase « tout dossier incomplet à cette date ne pourra pas être présenté pour qualification ».",
          "Créez dans votre journal (ou dans le fichier de suivi) une ligne par pièce et par fournisseur avec la date de réception.",
          "Ajoutez en annexe de la demande le code de conduite et la déclaration de conflit d'intérêts à signer (voir procédure 3).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — e-mail de demande de pièces (extrait)',
      lines: [
        "Objet : Qualification fournisseur — pièces à transmettre avant le vendredi 20 mars 2026.",
        "« Dans le cadre de l'appel d'offres restreint de vivres, Kerowa Santé qualifie ses fournisseurs avant toute attribution. Merci de nous transmettre : (1) certificat d'enregistrement, (2) attestation fiscale à jour, (3) attestation bancaire au nom de la société, (4) trois références clients vérifiables, (5) photos et inventaire de votre entrepôt, (6) noms complets, dates de naissance et pièces d'identité de vos associés et dirigeants, (7) code de conduite et déclaration d'intégrité signés. Un dossier incomplet ne pourra pas être qualifié. »",
        "Une visite de votre entrepôt est prévue le jeudi 19 mars : merci de confirmer votre disponibilité.",
      ],
    },
    result: "Trois demandes écrites envoyées le 16 mars avant midi, avec liste de pièces, date limite et créneau de visite.",
    tip: "Demandez toujours l'identité des propriétaires dès le départ : sans elle, vous ne pouvez pas screener les bonnes personnes ni lever une quasi-correspondance plus tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 6',
    title: 'Remplir le bloc « Identification du fournisseur » (lignes 6 à 12)',
    intro: "Le bloc comporte 13 champs répartis sur deux colonnes de libellés (A et C), avec la valeur à saisir juste à droite de chaque libellé (colonnes B et D). Saisissez les dates comme de vraies dates Excel (JJ/MM/AAAA), jamais comme du texte : votre tableau de suivi s'appuiera dessus.",
    steps: [
      {
        title: 'Renseignez l\'identité et les contacts (lignes 6 à 8)',
        actions: [
          "B6 « Nom du fournisseur » : la raison sociale exacte du certificat d'enregistrement, pas le nom d'usage.",
          "D6 « Famille d'articles » : la famille d'achat, avec les articles principaux entre parenthèses.",
          "B7 « Adresse » et D7 « Adresse mail » ; B8 « Nom du contact » et D8 « Téléphone du contact » : la personne qui a l'autorité de s'engager, avec sa fonction.",
        ],
      },
      {
        title: 'Renseignez la visite, les dates de validation et le contrat (lignes 9 à 12)',
        actions: [
          "B9 « Date de visite des locaux » et D9 « Visité par » : laissez vides tant que la visite n'a pas eu lieu.",
          "B10 « Date de validation du fournisseur » et D10 « Date de la prochaine validation » : à remplir à la décision (procédure 4) ; fixez la prochaine date à 6 ou 12 mois selon le volume d'achat.",
          "B11 « Numéro du contrat (si applicable) » et D11 « Date de signature du contrat » : à remplir à la signature de l'accord-cadre (procédure 7).",
          "B12 « Référent technique » : la personne qui valide la qualité des produits de la famille concernée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — bloc Identification de la fiche A (état au 16 mars, complété ensuite)',
      lines: [
        "B6 Jur River Grains Ltd | D6 Vivres non périssables (farine de maïs, haricots secs)",
        "B7 Marché central, Wau | D7 jurrivergrains@example.org (fictif)",
        "B8 Moses Lado Kenyi, gérant | D8 +211 000 000 000 (fictif)",
        "B9 19/03/2026 (après la visite) | D9 Peter A., logisticien, et Dr Rebecca N.",
        "B10 25/03/2026 (à la décision) | D10 30/06/2026 (premier rendez-vous d'évaluation sous accord-cadre)",
        "B11 KS-FWA-2026-001 (à la signature) | D11 31/03/2026",
        "B12 Dr Rebecca N., responsable programme nutrition",
      ],
    },
    result: "Le bloc Identification est cohérent avec les pièces reçues, avec de vraies dates et un contact ayant autorité pour engager la société.",
    pitfall: "Écrire « Grossiste Wau » au lieu de la raison sociale exacte : le fournisseur devient introuvable dans le registre de screening et le tableau de portefeuille, et les contrôles ne portent plus sur la bonne entité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 6',
    title: 'Vérifier l\'authenticité des pièces reçues',
    intro: "Recevoir une pièce n'est pas la vérifier. Vous contrôlez chaque document reçu pour détecter les incohérences les plus fréquentes : raison sociale différente d'un document à l'autre, RIB au nom d'une personne, certificat fiscal périmé, signataire sans pouvoir.",
    steps: [
      {
        title: 'Recoupez les pièces entre elles',
        actions: [
          "Comparez la raison sociale, l'adresse et le numéro d'enregistrement sur le certificat, l'attestation fiscale, le RIB et les factures : ils doivent concorder lettre pour lettre.",
          "Vérifiez les dates de validité de chaque pièce et que le signataire de l'offre figure comme dirigeant sur le certificat d'enregistrement.",
          "Faites contrôler le RIB par la finance : titulaire du compte = raison sociale, banque connue, pays du compte cohérent avec le pays du fournisseur.",
        ],
      },
      {
        title: 'Confirmez auprès de la source',
        actions: [
          "Demandez au registre ou à l'administration concernée (ou à un conseil juridique local) de confirmer l'existence de la société lorsque la pièce paraît douteuse ou que le volume le justifie.",
          "Notez dans le journal la date, la personne contactée et le résultat de chaque vérification.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — recoupement sur le dossier A (Jur River Grains Ltd)',
      lines: [
        "Certificat d'enregistrement : raison sociale « Jur River Grains Ltd », gérant Moses L. Kenyi, associés 70 % / 30 % → cohérent avec l'offre.",
        "Attestation fiscale : à jour, émise le 02/03/2026 → conforme.",
        "RIB reçu : titulaire « Moses Lado Kenyi » (compte personnel) → NON conforme : la finance (Joseph K.) demande une attestation bancaire au nom de la société.",
        "Factures T01, T03, T07 : manuscrites, sans numéro d'identification fiscale → à corriger pour les prochaines commandes.",
      ],
    },
    result: "Chaque pièce porte la mention « conforme » ou « non conforme » avec date et initiales, et la liste des corrections demandées est envoyée au fournisseur.",
    pitfall: "Accepter un RIB au nom d'un particulier « pour aller vite » : c'est le montage classique de détournement de paiement. Seul un compte au nom de la société est acceptable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 6',
    title: 'Vérifier les références et conduire la visite de site',
    intro: "La capacité opérationnelle se prouve sur place et auprès d'autres clients. La visite est justifiée dès que le volume d'achat est significatif ou que le fournisseur est unique sur un marché isolé : c'est le cas des trois grossistes de Wau.",
    steps: [
      {
        title: 'Appelez les références',
        actions: [
          "Appelez au moins deux références, avec un script identique pour tous les fournisseurs : délais respectés ? qualité conforme à la commande ? litiges ? paiement accepté dans les délais ? recommanderiez-vous ce fournisseur ?",
          "Notez le nom de la personne appelée, son organisation, la date et ses réponses mot pour mot.",
        ],
      },
      {
        title: 'Visitez l\'entrepôt avec une grille écrite',
        actions: [
          "Préparez une grille : stock présent (quantité, état des sacs, dates), conditions de stockage (palettes, toiture, humidité, nuisibles), capacité de chargement, flotte, personnel, conditions de travail.",
          "Prenez des photos datées, comptez le stock vous-même et faites signer la feuille de visite par le gérant.",
          "Faites valider la qualité par le référent technique : prélèvement d'échantillons, contrôle visuel et olfactif, humidité, absence de moisissure ou d'insectes.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — visite de Jur River Grains Ltd, jeudi 19 mars (Peter A. et Dr Rebecca N.)',
      lines: [
        "Stock compté : 22 t de farine de maïs et 6 t de haricots, soit plus de 10 mois du besoin de Kerowa (2,75 t par mois).",
        "Stockage : sacs de 50 kg sur palettes, toiture saine, pas de trace d'humidité ni de nuisibles ; à recontrôler en saison des pluies.",
        "Qualité : échantillons de farine sans moisissure ni odeur anormale ; validés par Dr Rebecca N. le 19/03.",
        "Références : 2 ONG et 1 hôpital régional appelés ; livraisons dans les délais, 1 litige (sacs déchirés) réglé par remplacement sous 72 h.",
        "Conditions de travail : aucun travail d'enfant, chargeurs équipés de gants et de bottes.",
      ],
    },
    result: "Un rapport de visite signé et daté, des photos, un avis technique écrit et deux ou trois références contactées, prêts à nourrir les critères produits, service et légaux.",
    tip: "Faites la visite à deux (logisticien + référent technique) : l'un regarde les conditions de stockage, l'autre la qualité du produit. Et ne prévenez le fournisseur que de la date, pas de ce que vous allez contrôler.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 6',
    title: 'Contrôler la complétude et classer le dossier',
    intro: "Avant de passer au screening puis à l'évaluation, vous vérifiez que le dossier est complet. C'est un contrôle binaire : complet ou incomplet. Un dossier incomplet est signalé, il ne passe pas.",
    steps: [
      {
        title: 'Dressez le tableau de complétude',
        actions: [
          "Faites une ligne par pièce et une colonne par fournisseur : Reçue et conforme / Reçue non conforme / Manquante.",
          "Calculez le nombre de pièces conformes sur le nombre exigé.",
          "Écrivez en face de chaque manque la relance et la nouvelle date limite.",
        ],
      },
      {
        title: 'Classez le dossier dans la structure partagée',
        actions: [
          "Rangez chaque pièce dans « 01_Qualification » du fournisseur, avec le nom normalisé : « PIECE_Certificat-enregistrement_2026-03-18.pdf ».",
          "Gardez le tableau de complétude dans le dossier ; il fera foi de la date à laquelle le dossier a été jugé complet.",
        ],
      },
    ],
    table: {
      columns: ['Pièce', 'A — Jur River Grains', 'B — Wau Central Provisions', 'C — Bahr el Ghazal Agro'],
      rows: [
        ['Certificat d\'enregistrement', 'Conforme', 'Conforme', 'Conforme'],
        ['Attestation fiscale à jour', 'Conforme', 'Conforme', 'Manquante'],
        ['Attestation bancaire au nom de la société', 'Non conforme (compte personnel)', 'Conforme', 'Manquante'],
        ['Références vérifiables (2 à 3)', '3 contactées', '2 contactées', '1 sur 3 joignable'],
        ['Capacité / visite de site', 'Visite faite le 19/03', 'Visite faite le 19/03', 'Visite non faite (accès refusé le 19/03)'],
        ['Identité propriétaires et dirigeants', 'Complète', 'Complète', 'Gérant seul ; pas de pièce d\'identité'],
        ['Code de conduite et déclaration signés', 'Signés', 'Signés', 'Non signés'],
      ],
    },
    result: "Livrable L1 terminé : A complet sauf une pièce à corriger, B complet, C incomplet (4 pièces manquantes) donc non qualifiable en l'état.",
    pitfall: "Garder le dossier « presque complet » et le qualifier « sous réserve » : la règle est binaire. Le dossier incomplet de C ne passera pas à la décision tant que ses pièces et sa visite n'auront pas été obtenues.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 2 — SCREENING D'INÉLIGIBILITÉ (8 ÉTAPES)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 8',
    title: 'Établir la liste exacte des noms à screener',
    intro: "On ne screene pas un fournisseur, on screene des noms : la société, ses dirigeants et ses propriétaires identifiés au dossier. Une recherche sur la seule raison sociale laisse passer le risque porté par les personnes. Entrées : les pièces d'identité et le certificat d'enregistrement de la procédure 1.",
    steps: [
      {
        title: 'Listez les noms à rechercher',
        actions: [
          "Raison sociale exacte (et nom commercial s'il diffère).",
          "Chaque associé, gérant, administrateur et bénéficiaire effectif : nom complet tel qu'il figure sur la pièce d'identité.",
          "Les propriétaires indirects connus (société mère, associé qui est lui-même une société).",
        ],
      },
      {
        title: 'Préparez les variantes',
        actions: [
          "Inversion nom / prénom, initiales, orthographes alternatives, translittérations, « Ltd / Limited / Co. / Company ».",
          "Notez pour chaque personne la date de naissance, la nationalité et le numéro de pièce : ce sont les identifiants qui permettront de lever un doute.",
        ],
      },
    ],
    table: {
      columns: ['Fournisseur', 'Nom à screener', 'Rôle', 'Variantes à tester'],
      rows: [
        ['A', 'Jur River Grains Ltd', 'Société', 'Jur River Grains ; Jur River Grain Traders'],
        ['A', 'Moses Lado Kenyi', 'Gérant, associé 70 %', 'Moses L. Kenyi ; Kenyi Moses Lado'],
        ['A', 'Esther Kenyi Lado', 'Associée 30 %', 'Esther K. Lado ; Lado Esther Kenyi'],
        ['C', 'Bahr el Ghazal Agro Supply', 'Société', 'Bahr El Ghazal Agro ; Bahr Ghazal Agro Supply'],
        ['C', 'Garang Dut Mayen', 'Gérant', 'Garang D. Mayen ; Mayen Garang Dut'],
      ],
    },
    result: "La liste des noms (avec variantes et identifiants) est établie avant la première recherche : vous ne cherchez pas au hasard, vous cherchez tout le périmètre.",
    tip: "Une recherche sur l'entité seule est la faute la plus fréquente. Les sanctions visent souvent des personnes derrière des sociétés écrans ; l'OFAC traite comme bloquée toute entité détenue à 50 % ou plus par des personnes listées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 8',
    title: 'Balayage large sur OpenSanctions.org',
    intro: "OpenSanctions consolide en une seule recherche les listes OFAC, UE, ONU et de nombreuses listes nationales : c'est le réflexe le plus rapide pour un premier balayage. Mais ce n'est pas une source officielle et il ne tranche jamais seul.",
    steps: [
      {
        title: 'Lancez les recherches',
        actions: [
          "Ouvrez opensanctions.org et utilisez la barre de recherche ; saisissez le nom exact entre guillemets, puis chaque variante.",
          "Relevez pour chaque requête le nombre de résultats, le nom exact des entités proposées, leur date de naissance, leur pays, la ou les listes sources et la date de dernière mise à jour.",
          "Faites la recherche sur la société et sur chaque personne, séparément.",
        ],
      },
      {
        title: 'Conservez la preuve immédiatement',
        actions: [
          "Imprimez la page en PDF (ou capturez l'écran en incluant l'heure du poste) et nommez le fichier « SCREEN_OpenSanctions_JurRiverGrains_2026-03-17.pdf ».",
          "Rangez-le dans « 02_Screening » du fournisseur.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — OpenSanctions, mardi 17 mars 2026',
      lines: [
        "A — « Jur River Grains Ltd » et variantes : aucun résultat. « Moses Lado Kenyi », « Moses L. Kenyi », « Kenyi Moses Lado » : aucun résultat. « Esther Kenyi Lado » : aucun résultat.",
        "C — « Bahr el Ghazal Agro Supply » : aucun résultat. « Garang Dut Mayen » : 0 résultat exact ; en élargissant au nom « Garang Dut », 1 résultat approximatif : « Garang Dut Mayom », né en 1958, ancien fonctionnaire de district d'un État voisin, mentionné par une liste de vigilance régionale (source secondaire, fictive), soupçons non confirmés.",
        "Résultat : A sans signal ; C a une quasi-correspondance à analyser.",
      ],
    },
    result: "Une preuve datée par recherche, un résultat noté pour chaque nom, et la liste des signaux à confirmer sur une liste primaire.",
    pitfall: "Décider à partir de l'agrégateur seul, que ce soit pour bloquer ou pour valider : la liste officielle fait foi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 8',
    title: 'Confirmer sur la liste OFAC (Sanctions List Search)',
    intro: "L'outil officiel du Trésor américain recherche dans la liste SDN et dans les autres listes de sanctions américaines. Il est gratuit, sans compte, et son score de correspondance approximative est réglable : c'est ce qui le rend utile pour les quasi-correspondances.",
    steps: [
      {
        title: 'Paramétrez la recherche',
        actions: [
          "Ouvrez sanctionssearch.ofac.treas.gov.",
          "Saisissez le nom dans « Name » et choisissez le type (Entity pour une société, Individual pour une personne).",
          "Abaissez le score minimal (Minimum Name Score, par exemple à 80) pour ne pas écarter une variante orthographique, puis lancez la recherche.",
        ],
      },
      {
        title: 'Lisez et conservez le résultat',
        actions: [
          "Si le tableau est vide : « aucun résultat » est un résultat, à capturer.",
          "S'il y a des lignes : relevez le nom, le score, le type, le programme, la liste, la date de naissance ou l'adresse et comparez-les à vos identifiants.",
          "Imprimez en PDF avec la date visible : « SCREEN_OFAC_GarangDutMayen_2026-03-17.pdf ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — OFAC, 17 mars 2026, score minimal 80',
      lines: [
        "A — société : 0 résultat ; Moses Lado Kenyi : 0 résultat ; Esther Kenyi Lado : 0 résultat.",
        "C — Bahr el Ghazal Agro Supply : 0 résultat ; Garang Dut Mayen (Individual, score 80) : 0 résultat.",
        "Le signal vu sur l'agrégateur n'apparaît pas sur la liste primaire américaine.",
      ],
    },
    result: "Pour chaque nom, un résultat OFAC daté et prouvé, à score abaissé.",
    tip: "Notez toujours le score minimal utilisé : « aucun résultat à 95 » et « aucun résultat à 80 » n'ont pas la même valeur probante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 8',
    title: 'Confirmer sur les listes de l\'Union européenne et de l\'ONU',
    intro: "L'UE et l'ONU tiennent leurs propres listes : un fournisseur peut figurer sur l'une sans figurer sur l'autre. La base de l'UE est indispensable pour tout achat impliquant une entité ou un paiement transitant par un pays membre ; la liste du Conseil de sécurité est la référence pour les mesures onusiennes, surtout si une résolution encadre le pays d'opération.",
    steps: [
      {
        title: 'Recherchez dans la base de l\'UE',
        actions: [
          "Ouvrez la EU Financial Sanctions Database (webgate.ec.europa.eu/fsd) et lancez une recherche par nom ; filtrez au besoin par régime de sanctions (pays ou thématique).",
          "Notez la date de dernière mise à jour de la base affichée par l'outil, puis imprimez le résultat en PDF.",
        ],
      },
      {
        title: 'Recherchez dans la liste consolidée de l\'ONU',
        actions: [
          "Ouvrez scsanctions.un.org et utilisez la recherche en ligne de la liste consolidée ; recherchez le nom exact, puis les variantes.",
          "Notez la date de la liste, qui est mise à jour moins souvent que les deux autres, puis imprimez le résultat.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — UE et ONU, 17 mars 2026',
      lines: [
        "A : société et 2 personnes — aucun résultat UE, aucun résultat ONU.",
        "C : société et gérant — aucun résultat UE, aucun résultat ONU.",
        "Les 4 preuves (OpenSanctions, OFAC, UE, ONU) sont classées par fournisseur dans « 02_Screening ».",
      ],
    },
    result: "Pour chaque nom du périmètre, quatre recherches datées (un agrégateur, trois listes primaires), avec preuve.",
    pitfall: "S'arrêter à OFAC parce que « les paiements sont en USD » : une société peut être listée par l'UE ou l'ONU sans l'être aux États-Unis, et l'inéligibilité est évaluée au regard des règles du bailleur et de l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 8',
    title: 'Classer chaque résultat : aucun, correspondance, quasi-correspondance',
    intro: "Après les quatre recherches, vous classez le résultat de chaque nom dans l'une des trois catégories, puis vous appliquez la réaction correspondante. C'est cette classification, écrite, qui évite le blocage réflexe comme l'oubli.",
    steps: [
      {
        title: 'Appliquez l\'arbre de décision',
        actions: [
          "Aucun résultat sur les quatre outils : classez « Aucun résultat » et passez à la consignation (étape 7).",
          "Résultat sur une liste primaire avec identifiants concordants (nom complet, date de naissance, adresse, numéro d'enregistrement) : « Correspondance confirmée » → arrêt immédiat de toute transaction, aucun paiement, escalade à la coordinatrice pays et au siège, information du bailleur selon la convention.",
          "Résultat approximatif (nom proche, identifiants différents ou absents) : « Quasi-correspondance » → étape 6.",
        ],
      },
      {
        title: 'Posez les bonnes questions avant d\'escalader',
        actions: [
          "Le résultat vient-il d'une liste primaire ou seulement d'une source secondaire reprise par l'agrégateur ?",
          "Quels identifiants concordent (nom exact, deuxième prénom, date de naissance, nationalité, adresse, activité, numéro d'enregistrement) et lesquels diffèrent ?",
          "Le contexte géographique et temporel est-il cohérent avec le fournisseur ?",
        ],
      },
    ],
    table: {
      columns: ['Nom screené', 'Résultat constaté', 'Classe', 'Suite'],
      rows: [
        ['Jur River Grains Ltd', 'Aucun résultat (4 outils)', 'Aucun résultat', 'Consigner (étape 7)'],
        ['Moses Lado Kenyi ; Esther Kenyi Lado', 'Aucun résultat (4 outils)', 'Aucun résultat', 'Consigner (étape 7)'],
        ['Bahr el Ghazal Agro Supply', 'Aucun résultat (4 outils)', 'Aucun résultat', 'Consigner (étape 7)'],
        ['Garang Dut Mayen', 'Résultat approximatif sur agrégateur uniquement ; aucun sur OFAC, UE, ONU', 'Quasi-correspondance', 'Analyser (étape 6)'],
      ],
    },
    result: "Chaque nom du périmètre est classé, la classe est écrite dans le registre de screening, et l'étape suivante est identifiée.",
    pitfall: "Traiter la quasi-correspondance de Garang Dut Mayen comme un rejet automatique : le signal ne vient que d'une source secondaire, non d'une liste primaire. Seule l'analyse documentée de l'étape 6 permet de trancher.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 8',
    title: 'Analyser une quasi-correspondance avec une grille d\'identifiants',
    intro: "Une quasi-correspondance se traite en comparant, identifiant par identifiant, le fournisseur et l'entrée de la liste. Vous cherchez à établir soit que c'est une homonymie, soit que le lien est réel, soit que le doute persiste et qu'il faut suspendre.",
    steps: [
      {
        title: 'Recherchez les informations complémentaires',
        actions: [
          "Date de naissance, deuxième prénom complet, adresse, nationalité, numéro de pièce d'identité, numéro d'enregistrement d'entreprise : demandez-les au fournisseur par écrit si vous ne les avez pas.",
          "Complétez par des sources publiques : registre des sociétés, presse, références clients, historique de l'activité.",
        ],
      },
      {
        title: 'Remplissez la grille de comparaison et statuez',
        actions: [
          "Un tableau à trois colonnes : identifiant | fournisseur | entrée de la liste | concordance (oui / non / inconnu).",
          "Statuez : « Faux positif confirmé » (identifiants incompatibles), « Correspondance confirmée » (identifiants concordants) ou « Indéterminé » (identifiants insuffisants).",
          "Si indéterminé : suspendez toute commande, demandez les pièces manquantes avec une date limite courte, et confirmez en dernier recours sur la liste officielle primaire.",
        ],
      },
    ],
    table: {
      columns: ['Identifiant', 'Garang Dut Mayen (fournisseur C)', 'Garang Dut Mayom (liste régionale)', 'Concordance'],
      rows: [
        ['Nom exact', 'Mayen', 'Mayom', 'Non'],
        ['Date de naissance', '14/05/1986 (pièce d\'identité)', '1958', 'Non (28 ans d\'écart)'],
        ['Fonction', 'Négociant en denrées depuis 2012', 'Ancien fonctionnaire de district', 'Non'],
        ['Lieu', 'Wau', 'État voisin', 'Non'],
        ['Statut dans la liste', '—', 'Source secondaire, soupçons non confirmés, aucune condamnation', 'Sans objet'],
        ['Présent sur OFAC / UE / ONU ?', 'Non', '—', 'Non'],
      ],
    },
    result: "Décision écrite : faux positif confirmé, avec les 4 incompatibilités d'identifiants, la copie de la pièce d'identité au dossier et les listes consultées avec leur date.",
    pitfall: "Conclure « faux positif » parce que le nom est courant, sans identifiant qui le prouve : une homonymie se démontre par des différences vérifiables, pas par une impression.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 8',
    title: 'Consigner le screening : fiche, registre et preuves',
    intro: "« Un screening non daté n'a aucune valeur probante en cas d'audit. » Vous consignez le résultat à deux endroits : dans la fiche de qualification (champs imposés par le template) et dans votre registre de screening (qui centralise tous les fournisseurs).",
    steps: [
      {
        title: 'Complétez la fiche de qualification',
        actions: [
          "Renseignez la date du screening dans le champ « Date de validation du fournisseur » (B10) au moment de la décision, après avoir vérifié que le screening a bien eu lieu avant elle.",
          "Dans la zone « Commentaires additionnels » (A55:G58), écrivez : date, outils consultés, noms recherchés, résultat exact, éventuelle analyse de quasi-correspondance et conclusion.",
          "Répondez aux critères des lignes 23 et 24 de la fiche en fonction de ce résultat (voir procédure 4).",
        ],
      },
      {
        title: 'Tenez le registre de screening (votre fichier, hors template)',
        actions: [
          "Créez un classeur « Registre_screening.xlsx » avec les colonnes : N° | Date et heure | Fournisseur | Nom recherché | Rôle | Outil / liste | Variantes testées | Résultat | Classe | Preuve (fichier) | Réalisé par | Décision.",
          "Une ligne par nom et par outil ; la colonne « Preuve » pointe vers le PDF de « 02_Screening ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — commentaire consigné dans la fiche C (zone « Commentaires additionnels »)',
      lines: [
        "« Screening du 17/03/2026 : OpenSanctions, OFAC (score 80), UE (FSD), ONU (liste consolidée). Société et gérant Garang Dut Mayen : aucun résultat sur les listes primaires. OpenSanctions signale une quasi-correspondance (« Garang Dut Mayom », 1958, liste de vigilance régionale secondaire). Comparaison d'identifiants : nom, date de naissance (14/05/1986 vs 1958), fonction et lieu incompatibles. Conclusion : faux positif ; aucune cause d'inéligibilité. Copie de la pièce d'identité au dossier. Nouveau screening obligatoire en cas de changement de propriétaire ou de dirigeant. »",
        "Registre : 8 lignes pour C (4 outils × 2 noms), toutes avec preuve PDF.",
      ],
    },
    result: "Livrable L2 terminé : preuves datées dans le dossier, résultat consigné dans la fiche, ligne dans le registre pour chaque nom et chaque outil.",
    tip: "Une phrase type à garder : « Recherche du [date] sur [outils], nom(s) [liste], résultat [exact], décision [qualifié / bloqué], par [nom]. » Elle suffit à un auditeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 8 sur 8',
    title: 'Planifier les prochains screenings',
    intro: "Le screening initial protège au jour 1 ; seul un screening répété protège dans la durée. Un fournisseur qualifié il y a trois ans peut avoir changé de propriétaire, de dirigeants ou de raison sociale sans que personne ne le remarque.",
    steps: [
      {
        title: 'Définissez les déclencheurs',
        actions: [
          "À chaque réévaluation périodique (tous les 6 à 12 mois selon le volume d'achat).",
          "À chaque changement de propriétaire, de raison sociale ou de dirigeant, dès que vous en avez connaissance (nouveau document d'enregistrement, e-mail du fournisseur).",
          "Avant le renouvellement ou l'avenant d'un accord-cadre, et avant tout paiement exceptionnel de montant élevé.",
        ],
      },
      {
        title: 'Rendez-les automatiques',
        actions: [
          "Dans le tableau de portefeuille (procédure 5), ajoutez la colonne « Dernier screening » et la formule d'alerte sur la date.",
          "Insérez dans chaque accord-cadre une clause obligeant le fournisseur à vous notifier tout changement de propriétaire ou de dirigeant dans un délai court (par exemple 15 jours).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — calendrier de screening',
      lines: [
        "A et B : screening initial 17/03/2026, prochain screening avec l'évaluation du 30/06/2026 et avant tout renouvellement.",
        "C : à refaire à la reprise du dossier, à la réception de la pièce d'identité du gérant et des attestations manquantes.",
        "Déclencheur événementiel : tout nouveau document d'enregistrement reçu d'un fournisseur ouvre une ligne « à re-screener » dans le registre.",
      ],
    },
    result: "Chaque fournisseur a une date de prochain screening et une règle de déclenchement événementiel : la protection ne s'arrête pas à la signature.",
    pitfall: "Ne screener qu'à l'entrée en relation, jamais après : c'est exactement le risque du cas de Maiduguri traité plus loin dans ce module.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 3 — POLITIQUE ANTI-CORRUPTION (5 ÉTAPES)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Faire signer le code de conduite et la déclaration d\'intégrité du fournisseur',
    intro: "L'intégrité se démontre par écrit avant la première commande. Vous demandez à chaque fournisseur de signer deux documents annexés à la demande de pièces : le code de conduite de l'organisation et une déclaration d'intégrité. C'est aussi la base juridique d'une résiliation immédiate en cas de manquement.",
    steps: [
      {
        title: 'Préparez le contenu des deux documents',
        actions: [
          "Code de conduite : engagements sur la lutte contre la corruption et la fraude, l'interdiction du travail des enfants, la protection contre l'exploitation et les abus sexuels (PSEA), le respect des conditions de travail.",
          "Déclaration d'intégrité : absence de condamnation, aucun lien familial ou financier avec un membre du personnel de l'organisation (ou liste de ces liens), aucune commission versée pour obtenir le marché, obligation de notifier tout changement de propriétaire ou de dirigeant.",
        ],
      },
      {
        title: 'Faites signer et conservez',
        actions: [
          "Faites signer le gérant ET, pour le code de conduite, la liste nominative du personnel affecté au contrat (chauffeurs, manutentionnaires, magasiniers).",
          "Rangez les originaux scannés dans « 03_Integrite » du fournisseur, avec la date de signature.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — déclaration d\'intégrité (extrait à faire signer)',
      lines: [
        "« Je soussigné(e), représentant de [raison sociale], déclare : (1) n'avoir offert ni versé aucune commission, aucun cadeau ni aucun avantage pour obtenir ou conserver un marché avec Kerowa Santé ; (2) n'avoir aucun lien familial ou financier avec un membre du personnel de Kerowa Santé, sauf ceux listés ci-dessous : [ ] ; (3) n'être l'objet d'aucune condamnation ni procédure pour fraude ou corruption ; (4) m'engager à notifier à Kerowa Santé, sous 15 jours, tout changement de propriétaire, de dirigeant ou de raison sociale. Date, nom, signature. »",
        "Retour au 20/03 : A et B signés ; C non signé (une des raisons de son dossier incomplet).",
      ],
    },
    result: "Un code de conduite et une déclaration d'intégrité signés et datés pour chaque fournisseur qualifiable, avec liste nominative du personnel pour le transport et la manutention.",
    pitfall: "Faire signer le seul gérant : ce sont les chauffeurs et les manutentionnaires qui sont au contact des communautés et des marchandises. Exigez la liste nominative signée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Faire déclarer les conflits d\'intérêts du personnel',
    intro: "Le critère légal « Rien ne permet de soupçonner une relation de conflit d'intérêt avec un membre du personnel » ne se coche pas de mémoire : il se prouve par une déclaration écrite de chaque personne qui intervient dans le choix, la commande, la réception ou le paiement.",
    steps: [
      {
        title: 'Faites remplir la déclaration par toute l\'équipe concernée',
        actions: [
          "Listez les personnes intervenant dans la chaîne fournisseur : SCM, assistante achats, logisticien, responsable programme, finance, coordinateur terrain.",
          "Pour chaque fournisseur candidat, faites répondre par écrit : lien familial, financier, amical ou de voisinage proche avec le fournisseur, ses dirigeants ou ses associés ; réponse « aucun » obligatoire si c'est le cas.",
          "Datez et signez ; conservez dans « 03_Integrite ».",
        ],
      },
      {
        title: 'Relisez avec un regard critique',
        actions: [
          "Rapprochez les déclarations des noms et adresses des dirigeants du dossier de qualification.",
          "Un lien déclaré n'est pas une faute ; un lien découvert après coup en est une.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — déclaration de Mary J. (assistante achats), 17 mars 2026',
      lines: [
        "« Je déclare que Rose Akech Dhieu, gérante de Wau Central Provisions, est ma sœur. Je n'ai participé à aucune décision concernant ce fournisseur et je demande à être écartée de tout dossier le concernant. »",
        "Autres déclarations : Peter A., Joseph K., Dr Rebecca N. : aucun lien déclaré avec A, B ou C.",
        "Le conflit est déclaré avant toute décision : c'est une situation à gérer, pas une faute.",
      ],
    },
    result: "Un tableau « personne × fournisseur » avec déclaration signée pour chaque case, et la liste des conflits déclarés.",
    tip: "Faites signer la déclaration AVANT d'ouvrir les offres. Une déclaration signée après l'ouverture, même sincère, est une preuve beaucoup plus faible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Gérer un conflit d\'intérêts déclaré',
    intro: "Un conflit déclaré se gère par des mesures écrites : la personne concernée sort de la chaîne de décision, une autorité supérieure valide la gestion du conflit, et la décision est tracée dans le dossier du fournisseur. L'objectif est que personne ne puisse prétendre que le choix a été influencé.",
    steps: [
      {
        title: 'Écartez la personne concernée',
        actions: [
          "Retirez-la de la préparation du dossier, de l'ouverture des offres, de l'évaluation, de la négociation, de l'émission du PO et de la réception pour ce fournisseur.",
          "Confiez ces tâches à une autre personne, et vérifiez la séparation des tâches : celui qui choisit n'est pas celui qui paie ni celui qui réceptionne.",
        ],
      },
      {
        title: 'Faites valider la décision au bon niveau',
        actions: [
          "Informez la coordinatrice pays par écrit et demandez sa validation de la gestion du conflit.",
          "Consignez dans la fiche du fournisseur la nature du lien, les mesures prises et la validation, avec la date.",
          "Répondez à la ligne 24 de la fiche par « Non » et expliquez dans « Commentaires additionnels » : cette réponse déclenche une décision au bon niveau, elle ne signifie pas un rejet automatique.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — décision de la coordinatrice pays, 18 mars 2026',
      lines: [
        "Mary J. est exclue de tout travail relatif à Wau Central Provisions : dossier, ouverture des offres, évaluation, PO, réception. Le dossier B est repris par le SCM et Joseph K. (finance).",
        "Wau Central Provisions peut rester dans la procédure car le conflit est déclaré avant l'ouverture des offres et que le comité (SCM, Dr Rebecca N., Peter A.) est indépendant.",
        "La décision de qualification de B est prise par le SCM et validée par la coordinatrice pays avant toute signature.",
      ],
    },
    result: "Un conflit déclaré, une décision écrite de la coordinatrice pays, la personne écartée et la séparation des tâches vérifiée.",
    pitfall: "Garder la personne concernée « mais sans voix » : elle doit sortir du circuit documentaire, pas seulement se taire en réunion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Insérer les clauses d\'intégrité et tenir le registre des cadeaux',
    intro: "Les engagements d'intégrité deviennent exigibles lorsqu'ils figurent dans le contrat. Parallèlement, le registre des cadeaux et hospitalités rend visible ce qui, sinon, crée une dette silencieuse envers un fournisseur.",
    steps: [
      {
        title: 'Rédigez les clauses d\'intégrité du contrat',
        actions: [
          "Interdiction d'offrir ou d'accepter cadeaux, commissions ou avantages liés au marché.",
          "Droit d'audit : l'organisation et son bailleur peuvent contrôler les pièces du fournisseur relatives au contrat.",
          "Obligation de notifier tout changement de propriétaire, de dirigeant ou de raison sociale dans un délai fixé.",
          "Résiliation immédiate, sans préavis, en cas de manquement à l'intégrité ou de résultat de screening positif.",
        ],
      },
      {
        title: 'Créez le registre des cadeaux et hospitalités',
        actions: [
          "Colonnes : Date | Donneur | Bénéficiaire | Nature et valeur estimée | Décision (refusé / accepté et déclaré) | Validé par.",
          "Rappelez la règle à l'équipe : pendant une procédure d'achat, tout cadeau est refusé ; une hospitalité modeste est déclarée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — clause et ligne de registre',
      lines: [
        "Clause : « Le fournisseur s'interdit d'offrir ou de consentir à tout membre du personnel de Kerowa Santé un cadeau, une commission ou un avantage en lien avec le présent accord. Tout manquement entraîne la résiliation immédiate sans préavis, sans préjudice des poursuites. »",
        "Registre : 19/03/2026 | Jur River Grains Ltd | Peter A. | Invitation à déjeuner après la visite | 8 EUR environ | Refusé (procédure d'achat en cours) | SCM.",
      ],
    },
    result: "Les clauses d'intégrité sont prêtes pour l'accord-cadre (procédure 7), et le registre des cadeaux existe, avec une première ligne.",
    tip: "Refuser un cadeau avec courtoisie et l'écrire dans le registre protège les deux parties : le fournisseur voit que la règle s'applique à tous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Repérer les signaux d\'alerte et signaler sans enquêter seul',
    intro: "La corruption se repère rarement par une preuve directe, plutôt par des signaux. Vous les surveillez à chaque dossier, et vous savez quoi faire le jour où l'un d'eux apparaît : transmettre, pas enquêter.",
    steps: [
      {
        title: 'Surveillez les signaux d\'alerte',
        actions: [
          "Prix très inférieur ou très supérieur au marché sans explication ; offres de soumissionnaires différents qui se ressemblent (mêmes fautes, mêmes formulations, mêmes totaux).",
          "Même numéro de téléphone, même adresse ou même compte bancaire pour deux fournisseurs ; demande de paiement en espèces ou sur un compte personnel.",
          "Pression pour retenir un fournisseur précis ou pour une dérogation « urgente » sans justification ; fournisseur recommandé par une personne rémunérée par l'organisation.",
          "Commandes fractionnées juste sous un seuil ; réception sans bon de livraison ; refus de montrer le stock.",
        ],
      },
      {
        title: 'Signalez selon la procédure',
        actions: [
          "Conservez les preuves (e-mails, documents) sans les modifier, notez les faits datés, et ne confrontez pas la personne soupçonnée.",
          "Transmettez au point focal prévu par la politique (coordinatrice pays, siège, ligne de signalement) dans les délais internes.",
          "La coordination informe le bailleur selon les clauses de la convention ; vous ne menez pas d'enquête par vous-même.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — signal sur le dossier C',
      lines: [
        "Fait : C a été proposé par un transporteur rémunéré par Kerowa. Signal faible : recommandation par un prestataire. Action : le transporteur confirme par écrit n'avoir reçu aucune commission du fournisseur C.",
        "Fait : l'offre de C (641 EUR/t) est proche de celle de A (635 EUR/t), avec une mise en page très différente ; aucune similarité de formulation. Signal écarté.",
        "Aucun signalement n'est nécessaire à ce stade ; le fait est consigné dans « 03_Integrite ».",
      ],
    },
    result: "Livrable L3 terminé : déclarations signées, conflit de Mary J. géré, clauses prêtes, registre des cadeaux ouvert, signaux relevés et procédure de signalement connue de l'équipe.",
    pitfall: "Mener sa propre enquête ou en parler à l'équipe : cela peut compromettre les preuves et exposer l'organisation. Transmettre vite, par écrit, au bon interlocuteur.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 4 — ÉVALUER EN 29 CRITÈRES ET DÉCIDER (9 ÉTAPES)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'stat-callout',
    stat: '29 critères',
    caption: "L'évaluation d'un fournisseur, répartie sur 5 catégories",
    context: "Financier (6), légal (4), produits (8), service (8), prix (3), notés Oui/Non via une liste déroulante, avec un panneau de synthèse qui calcule automatiquement le taux de réponses complètes pour repérer un dossier qui se dégrade. La procédure suivante les parcourt un par un.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 9',
    title: 'Fixer les règles de réponse avant de remplir',
    intro: "La même grille donne des résultats différents selon la rigueur avec laquelle elle est remplie. Avant la première réponse, vous fixez trois règles avec le référent technique : ce qu'est un « Oui », ce qu'est un « Non », ce qu'est une case laissée vide. Entrées : dossier P1, screening P2, dossier d'intégrité P3.",
    steps: [
      {
        title: 'Définissez les trois réponses possibles',
        actions: [
          "« Oui » : le critère est satisfait ET une preuve est dans le dossier (pièce, rapport de visite, résultat de recherche, avis du référent technique).",
          "« Non » : le critère n'est pas satisfait, ou la preuve est contradictoire ; vous écrivez dans les commentaires pourquoi et ce qui permettrait de passer à « Oui ».",
          "Case vide : critère sans objet pour la famille d'articles (par exemple « revendeur autorisé des marques » pour du grain en vrac) ou information en attente ; chaque case vide est expliquée en commentaires.",
        ],
      },
      {
        title: 'Posez vos règles de décision avant de connaître le score',
        actions: [
          "Un « Non » aux critères légaux 22 (enregistrement) ou 23 (pratiques non-éthiques) arrête la qualification, quel que soit le score.",
          "Un « Non » au critère légal 24 (conflit d'intérêts) impose une décision écrite d'un niveau supérieur (procédure 3, étape 3).",
          "Un screening positif ou non finalisé bloque tout : la décision n'est pas prise.",
          "Un taux de réponses complètes inférieur à 80 % signifie un dossier incomplet : pas de décision de qualification.",
          "Un score sous le seuil d'alerte de 3 sur 5 impose un plan d'action correctif avant toute qualification ou renouvellement.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — réunion de cadrage du 23 mars (SCM, Dr Rebecca N., Peter A., Joseph K.)',
      lines: [
        "Règles de réponse validées par écrit en 20 minutes, avant d'ouvrir les trois fiches.",
        "Répartition : le SCM remplit les critères financiers, légaux et prix ; Dr Rebecca N. les critères produits ; Peter A. les critères service et conditions de stockage ; Joseph K. contrôle le RIB.",
        "Chaque réponse « Oui » doit renvoyer à une pièce du dossier (nom du fichier).",
      ],
    },
    result: "Les règles de réponse et de décision sont écrites, partagées et antérieures à la saisie : l'évaluation ne peut plus se plier à un résultat souhaité.",
    pitfall: "Remplir d'abord, décider ensuite des règles : le risque est de choisir, consciemment ou non, le seuil qui valide le fournisseur historique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 9',
    title: 'Critères financiers (lignes 15 à 20, 6 critères)',
    intro: "Ces six critères vérifient que vous pourrez payer le fournisseur sûrement, dans les délais et en devise acceptables, et qu'il peut émettre des documents comptables conformes. Chaque réponse renvoie à une pièce du dossier de la procédure 1.",
    steps: [
      {
        title: 'Parcourez les six lignes et saisissez Oui / Non dans la colonne D',
        actions: [
          "Ligne 15 : paiements par virement bancaire acceptés ? Vérifiez l'offre et le RIB.",
          "Ligne 16 : délai de paiement de 30 jours ou plus accepté ? Vérifiez les conditions de l'offre.",
          "Ligne 17 : certificat d'identité bancaire fourni ? Seule une attestation au nom de la société vaut « Oui ».",
          "Ligne 18 : paiements en USD acceptés ? Ligne 19 : modalités de commande compatibles avec vos pratiques ? Ligne 20 : facture en bonne et due forme ?",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Critère (résumé)', 'Preuve consultée', 'Réponse A'],
      rows: [
        ['15', 'Virement bancaire accepté', 'Offre du 20/03, § paiement', 'Oui'],
        ['16', 'Paiement à 30 jours ou plus', 'Offre : 30 jours date de facture', 'Oui'],
        ['17', 'Certificat d\'identité bancaire', 'RIB reçu au nom personnel du gérant', 'Non'],
        ['18', 'Paiement en USD accepté', 'Offre', 'Oui'],
        ['19', 'Modalités de commande compatibles', 'Offre : commande par e-mail, livraison sous 7 jours', 'Oui'],
        ['20', 'Facture en bonne et due forme', 'Factures T01, T03, T07 : manuscrites, sans numéro fiscal', 'Non'],
      ],
    },
    result: "4 « Oui », 2 « Non » dans la catégorie financière pour A, chaque « Non » étant expliqué en commentaires et reliable à une correction concrète.",
    tip: "Le « Non » ne condamne pas le fournisseur : il transforme une faiblesse en condition (ici : attestation bancaire au nom de la société et factures conformes avant le premier paiement).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 9',
    title: 'Critères légaux (lignes 22 à 25, 4 critères)',
    intro: "Ces quatre critères portent sur l'existence légale et l'intégrité. Ils sont éliminatoires dans les cas fixés à l'étape 1. Ils s'appuient directement sur la procédure 2 (screening) et la procédure 3 (intégrité).",
    steps: [
      {
        title: 'Répondez aux quatre critères avec les preuves du dossier',
        actions: [
          "Ligne 22 : enregistré légalement au registre des entreprises ? Preuve : certificat d'enregistrement vérifié.",
          "Ligne 23 : rien ne permet de soupçonner des pratiques non-éthiques ? Preuves : résultat du screening, références, déclaration d'intégrité signée.",
          "Ligne 24 : rien ne permet de soupçonner un conflit d'intérêts avec un membre du personnel ? Preuve : déclarations de conflit d'intérêts signées par chaque personne concernée.",
          "Ligne 25 : la visite n'a révélé aucune condition de travail inacceptable ou illégale ? Preuve : rapport de visite signé.",
        ],
      },
      {
        title: 'Reliez chaque réponse au dossier',
        actions: [
          "Écrivez en commentaires le nom du fichier de preuve pour chaque « Oui ».",
          "Une réponse « Non » à la ligne 22 ou 23 arrête l'évaluation et déclenche l'escalade ; une « Non » à la ligne 24 déclenche la décision de niveau supérieur.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Critère (résumé)', 'Preuve consultée', 'Réponse A'],
      rows: [
        ['22', 'Enregistrement légal', 'Certificat d\'enregistrement, recoupé le 18/03', 'Oui'],
        ['23', 'Pratiques non-éthiques', 'Screening du 17/03 (aucun résultat), 3 références, déclaration d\'intégrité', 'Oui'],
        ['24', 'Conflit d\'intérêts', 'Déclarations signées de l\'équipe : aucun lien avec A', 'Oui'],
        ['25', 'Conditions de travail', 'Rapport de visite du 19/03', 'Oui'],
      ],
    },
    result: "4 « Oui » sur les critères légaux pour A. Pour B, la ligne 24 est « Non » (conflit déclaré de Mary J.) : décision de la coordinatrice pays obtenue le 18/03.",
    pitfall: "Répondre « Oui » à la ligne 24 « parce que personne n'a rien dit » : sans déclaration signée, la réponse n'est pas prouvée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 9',
    title: 'Critères relatifs aux produits (lignes 27 à 34, 8 critères)',
    intro: "Ces huit critères portent sur le stock, la qualité, la légitimité du fournisseur comme revendeur et l'emballage. C'est le référent technique qui valide la qualité ; il signe la fiche. Les critères sans objet pour la famille d'articles restent vides, avec une explication.",
    steps: [
      {
        title: 'Parcourez les huit lignes',
        actions: [
          "Ligne 27 stock suffisant ; ligne 28 conditions de stockage ; ligne 29 qualité satisfaisante ; ligne 30 qualité validée par au moins un référent technique pour chaque catégorie.",
          "Ligne 31 revendeur autorisé des marques en stock ; ligne 32 expérience acceptable ; ligne 33 références vérifiées ; ligne 34 emballage solide.",
        ],
      },
      {
        title: 'Traitez les critères sans objet',
        actions: [
          "Laissez la case vide et écrivez « N.A. — grain en vrac, pas de marque » dans les commentaires.",
          "Rappelez que le panneau de synthèse compte ces cases comme « en attente / N.A. » (G8).",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Critère (résumé)', 'Preuve consultée', 'Réponse A'],
      rows: [
        ['27', 'Stock suffisant', 'Visite : 22 t de farine, 6 t de haricots (besoin 2,75 t/mois)', 'Oui'],
        ['28', 'Stockage acceptable', 'Visite : palettes, toiture saine, pas d\'humidité', 'Oui'],
        ['29', 'Qualité satisfaisante', 'Échantillons conformes', 'Oui'],
        ['30', 'Qualité validée par le référent technique', 'Avis écrit de Dr Rebecca N., 19/03', 'Oui'],
        ['31', 'Revendeur autorisé des marques', 'Sans objet : grain en vrac', 'Vide (N.A.)'],
        ['32', 'Expérience acceptable', 'Trois ans de fourniture à des ONG', 'Oui'],
        ['33', 'Références vérifiées', '3 références contactées', 'Oui'],
        ['34', 'Emballage de bonne qualité et robuste', 'Sacs de 50 kg doublés ; 2 sacs déchirés sur 60 en janvier, remplacés', 'Oui (avec réserve)'],
      ],
    },
    result: "7 « Oui », 1 critère sans objet pour A ; la réserve sur l'emballage est écrite et traduite en clause de remplacement dans l'accord-cadre.",
    tip: "Pour la qualité, ne vous contentez jamais d'un avis oral du fournisseur : l'avis écrit du référent technique, daté, est la preuve que le critère 30 exige.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 9',
    title: 'Critères relatifs au service (lignes 36 à 43, 8 critères)',
    intro: "Ces huit critères portent sur la livraison, le service après-vente et la joignabilité du fournisseur. Pour un fournisseur de denrées, la maintenance et les pièces de rechange sont sans objet. Le logisticien renseigne cette partie à partir de la visite et des références.",
    steps: [
      {
        title: 'Parcourez les huit lignes',
        actions: [
          "Ligne 36 livre directement à l'entrepôt ; ligne 37 délais de livraison acceptables ; ligne 38 modalités de livraison acceptables.",
          "Ligne 39 service après-vente / garantie ; ligne 40 maintenance ; ligne 41 pièces de rechange.",
          "Ligne 42 possibilité de retour de marchandise ; ligne 43 facile à joindre par e-mail et téléphone.",
        ],
      },
      {
        title: 'Faites tester la joignabilité',
        actions: [
          "Appelez et écrivez au fournisseur à trois moments différents (matin, après-midi, en fin de semaine) et notez le délai de réponse.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Critère (résumé)', 'Preuve consultée', 'Réponse A'],
      rows: [
        ['36', 'Livre directement à l\'entrepôt', 'Livre à Gogrial avec ses camions', 'Oui'],
        ['37', 'Délais acceptables', 'Offre : 7 jours', 'Oui'],
        ['38', 'Modalités de livraison acceptables', 'Livraison rendu entrepôt, bon de livraison signé', 'Oui'],
        ['39', 'Service après-vente / garantie', 'Remplacement des sacs non conformes sous 72 h (référence)', 'Oui'],
        ['40', 'Service de maintenance', 'Sans objet : denrées', 'Vide (N.A.)'],
        ['41', 'Pièces de rechange', 'Sans objet : denrées', 'Vide (N.A.)'],
        ['42', 'Retour de marchandise', 'Offre : reprise des lots non conformes', 'Oui'],
        ['43', 'Facile à joindre', 'Réponse en moins de 4 h (3 tests)', 'Oui'],
      ],
    },
    result: "6 « Oui », 2 critères sans objet pour A ; les engagements de livraison sont repris dans l'accord-cadre (7 jours, remplacement sous 72 h).",
    pitfall: "Répondre « Oui » à la ligne 37 sur la seule parole du fournisseur : demandez deux références qui confirment les délais réellement tenus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 9',
    title: 'Critères relatifs au prix (lignes 45 à 47, 3 critères)',
    intro: "Ces trois critères portent sur la conformité des conditions commerciales : minimum de commande, stabilité des prix, compétitivité. Ils s'appuient sur une comparaison avec le marché, jamais sur une impression.",
    steps: [
      {
        title: 'Répondez aux trois critères',
        actions: [
          "Ligne 45 : le MOQ (quantité ou montant minimum de commande) est-il acceptable au regard de votre consommation mensuelle ?",
          "Ligne 46 : le fournisseur peut-il stabiliser ses prix sur une période pertinente (la durée prévue du contrat) ?",
          "Ligne 47 : les prix semblent-ils compétitifs et raisonnables au regard de la qualité (valeur) ?",
        ],
      },
      {
        title: 'Documentez la comparaison',
        actions: [
          "Comparez le prix rendu entrepôt (et non le prix départ) avec au moins deux autres sources : un autre fournisseur qualifié, le dernier prix payé, l'import depuis Juba.",
          "Si le prix n'est pas garanti dans le temps, répondez « Non » et inscrivez la condition de prix ferme à obtenir dans l'accord-cadre.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Critère (résumé)', 'Preuve consultée', 'Réponse A'],
      rows: [
        ['45', 'MOQ acceptable', 'MOQ de 1 t (besoin 2,75 t/mois)', 'Oui'],
        ['46', 'Prix stabilisables sur la période', 'Offre valable 7 jours seulement', 'Non'],
        ['47', 'Prix compétitifs et raisonnables', '635 EUR/t rendu contre 715 EUR/t en import depuis Juba et 648 EUR/t chez B', 'Oui'],
      ],
    },
    result: "2 « Oui » et 1 « Non » pour A ; le « Non » devient une condition : prix ferme pendant toute la durée de l'accord-cadre.",
    tip: "Un « Non » sur un critère négociable (prix ferme, délai de paiement) se traite en conditions contractuelles, pas en rejet du fournisseur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 9',
    title: 'Lire la synthèse et calculer le score pondéré sur 5',
    intro: "Le panneau « Synthèse » (F5:G10) se met à jour tout seul. Il vous dit où vous en êtes, pas quoi décider. Pour comparer les fournisseurs et suivre leur évolution, vous calculez en plus un score pondéré sur 5, dans votre tableau de portefeuille (pas dans le template).",
    steps: [
      {
        title: 'Lisez la synthèse du template',
        actions: [
          "G6 : critères « Oui » ; G7 : critères « Non » ; G8 : critères en attente / N.A. ; F9 : « Critères validés : x/29 » ; F10 : « Taux de réponses complètes : y % ».",
          "Vérifiez que G6 + G7 + G8 = 29, et que le taux de réponses est supérieur ou égal à 80 %.",
        ],
      },
      {
        title: 'Calculez le score pondéré sur 5',
        actions: [
          "Pour chaque catégorie, calculez le taux de « Oui » parmi les critères répondus (Oui + Non), N.A. exclus.",
          "Multipliez par le poids de la catégorie ; additionnez ; multipliez par 5. Poids retenus par Kerowa : Financier 20 %, Légal 25 %, Produits 25 %, Service 20 %, Prix 10 %.",
          "Comparez à l'alerte : sous 3/5, plan d'action correctif obligatoire (seuil repris du template de l'accord-cadre).",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Oui', 'Non', 'Taux de Oui', 'Poids', 'Points'],
      rows: [
        ['Financier', '4', '2', '66,7 %', '20 %', '13,3'],
        ['Légal', '4', '0', '100 %', '25 %', '25,0'],
        ['Produits', '7', '0', '100 %', '25 %', '25,0'],
        ['Service', '6', '0', '100 %', '20 %', '20,0'],
        ['Prix', '2', '1', '66,7 %', '10 %', '6,7'],
        ['Total (100)', '23', '3', '—', '100 %', '90,0 → score 4,50 / 5'],
      ],
    },
    result: "Fiche A : « Critères validés : 23/29 », « Taux de réponses complètes : 90 % », G8 = 3 (critères sans objet), score pondéré 4,50/5, au-dessus de l'alerte de 3/5.",
    pitfall: "Se laisser rassurer par un bon score global : la règle des critères éliminatoires (légaux 22 et 23, screening) prime toujours sur le score.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 8 sur 9',
    title: 'Statuer : Qualifié, Qualifié sous condition ou Rejeté',
    intro: "La décision finale n'est pas un chiffre, c'est une phrase écrite. Le template offre une liste Oui / Non à la ligne 50 (« Je valide la qualité de ce fournisseur et de ses produits »), et la zone « Commentaires additionnels » pour la justification. Les trois statuts se construisent avec ces deux éléments.",
    steps: [
      {
        title: 'Choisissez le statut',
        actions: [
          "Qualifié : D50 = Oui, aucune condition ; consignez simplement la synthèse.",
          "Qualifié sous condition : D50 = Oui, avec dans les commentaires chaque condition, sa date limite et son responsable. Si la condition n'est pas levée à la date, le statut devient Suspendu.",
          "Rejeté : D50 = Non, avec les motifs (critère éliminatoire, dossier incomplet, screening positif ou non finalisé).",
        ],
      },
      {
        title: 'Remplissez la décision et les signatures',
        actions: [
          "D50 : saisissez Oui ou Non dans la liste déroulante.",
          "Zone « Commentaires additionnels » : date, sources, résultat du screening, score, statut, conditions.",
          "Lignes 60 et 61 : nom et titre du membre supply, du référent technique, et date ; faites signer les deux.",
          "Complétez B10 (date de validation) et D10 (date de la prochaine validation).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — fiche A, décision du 25 mars 2026',
      lines: [
        "D50 : Oui.",
        "Commentaires : « 25/03/2026. Dossier complet (pièces conformes sauf RIB au nom du gérant). Screening du 17/03 (OpenSanctions, OFAC score 80, UE, ONU) : société, gérant et associée, aucun résultat. Visite du 19/03 : stock 22 t farine + 6 t haricots, stockage conforme, qualité validée par Dr Rebecca N. Évaluation : 23/29 critères validés, 3 sans objet, 3 « Non » (ligne 17, ligne 20, ligne 46). Score pondéré 4,50/5. Statut : QUALIFIÉ SOUS CONDITION. Conditions : (1) attestation bancaire au nom de la société avant le 27/03 et avant tout paiement, (2) factures avec numéro fiscal dès la 1re commande, (3) prix ferme 6 mois dans l'accord-cadre. Prochaine validation : 30/06/2026. »",
        "Signatures : Supply Chain Manager, Kerowa Santé — 25/03/2026 ; Dr Rebecca N., référente technique — 25/03/2026.",
      ],
    },
    result: "Une décision datée et justifiée par écrit, avec ses conditions, qui vous protège en cas de contrôle bailleur dix-huit mois plus tard.",
    pitfall: "Valider « sous condition » sans écrire laquelle : la condition devient un souvenir. Chaque condition a une date et un responsable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 9 sur 9',
    title: 'Notifier le fournisseur et suivre la levée des conditions',
    intro: "La décision n'est utile que si le fournisseur la connaît et si les conditions sont levées dans les délais. Vous notifiez par écrit, vous suivez les échéances et vous mettez à jour la fiche lorsque chaque condition est levée.",
    steps: [
      {
        title: 'Notifiez par écrit',
        actions: [
          "Envoyez un courrier ou un e-mail avec le statut, les conditions, les dates limites et la conséquence du non-respect (suspension).",
          "Gardez la preuve d'envoi et la réponse du fournisseur dans « 01_Qualification ».",
        ],
      },
      {
        title: 'Suivez et levez les conditions',
        actions: [
          "Créez une ligne par condition dans le tableau de suivi : condition | date limite | responsable | statut.",
          "À la levée : ajoutez la date et la pièce dans les commentaires de la fiche, puis mettez à jour le statut du fournisseur à « Qualifié ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — suivi des conditions du fournisseur A',
      lines: [
        "C1 attestation bancaire au nom de la société : limite 27/03 — reçue le 26/03 — contrôlée par Joseph K. — levée.",
        "C2 factures conformes : limite 1re commande (avril) — suivi par Joseph K. à la 1re facture.",
        "C3 prix ferme 6 mois : à inscrire dans l'accord-cadre (procédure 7) avant signature du 31/03.",
        "Résultat : 3 fiches décidées — A qualifié sous condition (4,50/5), B qualifié sous condition (conflit déclaré géré), C non qualifié (dossier incomplet, taux de réponses 55 %).",
      ],
    },
    result: "Livrable L4 terminé : trois fiches complétées, signées, datées, notifiées, avec les conditions suivies jusqu'à leur levée.",
    tip: "Une condition sans date limite n'est qu'un souhait. Et une condition non levée à la date doit réellement suspendre le fournisseur, sinon plus personne ne vous prendra au sérieux.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 5 — SUIVRE LE PORTEFEUILLE DANS LE TEMPS (6 ÉTAPES)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: 'Créer le tableau de suivi du portefeuille fournisseurs',
    intro: "Chaque fiche de qualification porte son propre champ « Date de la prochaine validation » : il faut les rassembler dans un seul tableau pour voir d'un coup d'œil qui arrive à échéance. Ce tableau est votre outil, hors template : tableur ou outil de suivi dédié, centralisé et accessible à l'équipe achats.",
    steps: [
      {
        title: 'Créez le classeur et la structure',
        actions: [
          "Ouvrez un nouveau classeur, nommez la feuille « Portefeuille » et enregistrez-le sous « L5_Portefeuille_fournisseurs_Kerowa.xlsx » dans le dossier partagé.",
          "Saisissez en ligne 1 les 15 en-têtes : Fournisseur | Famille d'articles | Statut | Dernière validation | Prochaine validation | Jours restants | Alerte échéance | Score actuel /5 | Score précédent /5 | Tendance | Dernier screening | Contrat-cadre (n°, échéance) | Achats 12 mois (EUR) | Responsable | Alerte score.",
          "Sélectionnez A1:O1, Insertion > Tableau, cochez « Mon tableau comporte des en-têtes » et nommez-le « tblPortefeuille ».",
        ],
      },
      {
        title: 'Verrouillez les saisies répétitives',
        actions: [
          "Sélectionnez la colonne Statut, Données > Validation des données > Liste : Qualifié;Qualifié sous condition;Non qualifié;Suspendu;Rejeté.",
          "Formatez les colonnes de dates en JJ/MM/AAAA pour qu'Excel les traite comme de vraies dates.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — structure du tableau (extrait de la ligne d\'en-têtes)',
      lines: [
        "A Fournisseur | B Famille | C Statut | D Dernière validation | E Prochaine validation | F Jours restants | G Alerte échéance | H Score /5 | I Score précédent | J Tendance | K Dernier screening | L Contrat-cadre | M Achats 12 mois | N Responsable | O Alerte score",
        "Une ligne par fournisseur, mise à jour à chaque décision (procédure 4) et à chaque évaluation.",
      ],
    },
    result: "Un tableau nommé, avec des listes déroulantes, prêt à recevoir les fournisseurs.",
    pitfall: "Garder le tableau sur votre poste personnel : un portefeuille qui n'existe que dans le fichier d'une personne ne survit pas à son départ en congé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Reporter les fournisseurs, les dates de validation et les scores',
    intro: "À partir de chaque fiche de qualification, vous reportez dans le tableau quatre informations : le statut, la date de validation (B10), la date de la prochaine validation (D10) et le score pondéré. Les fournisseurs historiques du carnet de contacts, jamais qualifiés, y entrent aussi avec le statut « Non qualifié ».",
    steps: [
      {
        title: 'Saisissez chaque fournisseur',
        actions: [
          "Pour chaque fiche : recopiez la raison sociale exacte, la famille, le statut décidé, B10 en « Dernière validation », D10 en « Prochaine validation ».",
          "Saisissez le score pondéré en « Score actuel » (laissez vide si le taux de réponses est inférieur à 80 %), la date du dernier screening, le contrat-cadre et le responsable.",
        ],
      },
      {
        title: 'Recensez les fournisseurs jamais qualifiés',
        actions: [
          "Reprenez la liste des fournisseurs du registre des achats (Module 01, registre L1) et ajoutez ceux qui n'ont pas de fiche, avec le statut « Non qualifié » et l'action à engager.",
        ],
      },
    ],
    table: {
      columns: ['Fournisseur', 'Statut', 'Dernière validation', 'Prochaine validation', 'Score /5', 'Dernier screening'],
      rows: [
        ['Jur River Grains Ltd (A)', 'Qualifié sous condition', '25/03/2026', '30/06/2026', '4,50', '17/03/2026'],
        ['Wau Central Provisions (B)', 'Qualifié sous condition', '25/03/2026', '25/09/2026', '4,18', '17/03/2026'],
        ['Bahr el Ghazal Agro Supply (C)', 'Non qualifié', '—', '—', '— (réponses < 80 %)', '17/03/2026'],
        ['Fournisseur Juba (vivres)', 'Non qualifié', '—', '—', '—', 'Jamais'],
        ['Transporteur Juba', 'Non qualifié', '—', '—', '—', 'Jamais'],
        ['Station-service de Kuajok (carburant)', 'Non qualifié', '—', '—', '—', 'Jamais'],
      ],
    },
    result: "Six fournisseurs dans le tableau, dont trois jamais qualifiés (Juba, transport, carburant) : l'ampleur du chantier devient visible.",
    tip: "Triez les fournisseurs « Non qualifié » par volume d'achat : qualifiez d'abord ceux qui représentent le plus de dépenses, comme le carburant (8 100 EUR sur 3 mois au Module 01).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Poser les formules d\'alerte (échéances, tendance, seuil)',
    intro: "Le tableau ne doit pas être regardé, il doit vous alerter. Trois formules suffisent : le nombre de jours avant la prochaine validation, l'alerte d'échéance et l'alerte de score. Une quatrième indique la tendance par rapport à l'évaluation précédente.",
    steps: [
      {
        title: 'Saisissez les formules',
        actions: [
          "Jours restants (F2) : =[@[Prochaine validation]]-AUJOURDHUI(). Si la date est vide, laissez vide : =SI([@[Prochaine validation]]=\"\";\"\";[@[Prochaine validation]]-AUJOURDHUI()).",
          "Alerte échéance (G2) : =SI([@[Jours restants]]=\"\";\"\";SI([@[Jours restants]]<0;\"ÉCHUE\";SI([@[Jours restants]]<=30;\"À planifier\";\"OK\"))).",
          "Tendance (J2) : =SI(OU([@[Score actuel /5]]=\"\";[@[Score précédent /5]]=\"\");\"\";SI([@[Score actuel /5]]<[@[Score précédent /5]];\"Baisse\";SI([@[Score actuel /5]]>[@[Score précédent /5]];\"Hausse\";\"Stable\"))).",
          "Alerte score (O2) : =SI([@[Score actuel /5]]=\"\";\"\";SI([@[Score actuel /5]]<3;\"Plan correctif\";\"OK\")).",
        ],
      },
      {
        title: 'Rendez les alertes visibles',
        actions: [
          "Mise en forme conditionnelle : « ÉCHUE » en rouge, « À planifier » en orange, « Plan correctif » en rouge, « Baisse » en orange.",
          "Épinglez le fichier dans l'agenda partagé et planifiez une revue mensuelle de 30 minutes.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — tableau au 26 mars 2026',
      lines: [
        "A : prochaine validation 30/06/2026 → jours restants 96 → « OK » ; score 4,50 → « OK ».",
        "B : prochaine validation 25/09/2026 → 183 jours → « OK » ; score 4,18 → « OK ».",
        "Si la date du jour devient le 05/06/2026 : A = 25 jours → « À planifier » → vous organisez l'évaluation intermédiaire.",
      ],
    },
    result: "Le tableau s'alerte seul : vous voyez chaque mois qui arrive à échéance, qui baisse et qui passe sous 3/5.",
    pitfall: "Écrire les dates comme du texte (« 30 juin ») : la formule de jours restants renvoie une erreur et l'alerte ne fonctionne plus. Utilisez de vraies dates.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Fixer la fréquence de réévaluation selon le volume d\'achat',
    intro: "L'évaluation n'est pas un exercice ponctuel : elle se répète tous les 6 à 12 mois selon le volume d'achat, pas seulement lors d'un incident. Vous écrivez la règle une fois pour toutes, par catégorie de fournisseur, et vous l'appliquez au moment de remplir D10 (date de la prochaine validation).",
    steps: [
      {
        title: 'Classez les fournisseurs',
        actions: [
          "Calculez pour chaque fournisseur les achats des 12 derniers mois (ou le volume estimé pour un accord-cadre) à partir du registre des achats.",
          "Appliquez la règle de fréquence du tableau ci-dessous.",
        ],
      },
      {
        title: 'Fixez et planifiez',
        actions: [
          "Renseignez D10 sur chaque fiche et la colonne « Prochaine validation » du tableau avec la date calculée.",
          "Bloquez l'évaluation dans l'agenda de l'équipe achats, avec le référent technique.",
        ],
      },
    ],
    table: {
      columns: ['Profil du fournisseur', 'Achats annuels', 'Fréquence d\'évaluation', 'Kerowa'],
      rows: [
        ['Stratégique : unique sur sa famille ou sous accord-cadre', 'Plus de 10 000 EUR (ou unique)', 'Tous les 6 mois, plus une évaluation intermédiaire à mi-contrat', 'A (accord-cadre de 10 478 EUR) : intermédiaire le 30/06, puis avant renouvellement'],
        ['Régulier', '5 000 à 10 000 EUR', 'Tous les 6 à 12 mois', 'B (fournisseur de secours)'],
        ['Occasionnel', 'Moins de 5 000 EUR', 'Tous les 12 mois, ou avant la prochaine commande significative', 'Fournisseurs ponctuels (réparations, fournitures)'],
      ],
    },
    result: "Une règle de fréquence écrite et une date de prochaine validation sur chaque fiche, appuyées sur le volume d'achat.",
    tip: "Un fournisseur unique mérite une évaluation plus fréquente que son montant ne le suggère : c'est le risque de dépendance, pas seulement la dépense, qui fixe le rythme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Réévaluer périodiquement avec la même grille et comparer les scores',
    intro: "À l'échéance, vous reprenez le formulaire et parcourez à nouveau les 29 critères, en répondant Oui / Non à chacun. Chaque réévaluation fait l'objet d'une nouvelle fiche datée (jamais d'une fiche écrasée), pour que l'historique soit comparable.",
    steps: [
      {
        title: 'Préparez et conduisez la réévaluation',
        actions: [
          "Enregistrez une nouvelle copie : « Fiche_Evaluation_JurRiverGrains_2026-06-30.xlsx ».",
          "Mettez à jour les preuves : factures, bons de livraison, incidents, relevés de délais, lots refusés, nouvelle visite si nécessaire.",
          "Refaites le screening (procédure 2) et complétez la fiche comme à la première fois : synthèse, décision, commentaires, signatures.",
        ],
      },
      {
        title: 'Comparez avec l\'évaluation précédente',
        actions: [
          "Reportez le nouveau score dans le tableau : l'ancien passe en « Score précédent », le nouveau en « Score actuel ».",
          "Comparez catégorie par catégorie pour comprendre ce qui bouge (livraison, qualité, prix).",
        ],
      },
    ],
    table: {
      columns: ['Catégorie (poids)', 'Mars 2026', 'Juin 2026', 'Août 2026'],
      rows: [
        ['Financier (20 %)', '4/6', '6/6', '6/6'],
        ['Légal (25 %)', '4/4', '4/4', '4/4'],
        ['Produits (25 %)', '7/7', '6/7', '5/7'],
        ['Service (20 %)', '6/6', '3/6', '3/6'],
        ['Prix (10 %)', '2/3', '3/3', '1/3'],
        ['Score pondéré /5', '4,50', '4,32', '3,81'],
        ['Tendance', '—', 'Baisse', 'Baisse'],
      ],
    },
    result: "Trois scores comparables : 4,50 puis 4,32 puis 3,81. Le fournisseur A reste au-dessus de 3/5, mais il baisse sur deux évaluations consécutives.",
    pitfall: "Écraser l'ancienne fiche avec la nouvelle : vous perdez l'historique et ne pouvez plus montrer une tendance à un auditeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Réagir à une dégradation et protéger les commandes',
    intro: "L'ancienneté d'une relation n'est pas un critère de performance. Un score de scorecard qui se dégrade sur deux évaluations consécutives doit déclencher une action corrective documentée, jamais une tolérance silencieuse au nom de l'habitude. Et un fournisseur dont la date de prochaine validation est dépassée doit être réévalué avant toute nouvelle commande significative.",
    steps: [
      {
        title: 'Ouvrez un plan d\'action corrective',
        actions: [
          "Identifiez la catégorie qui baisse et les critères qui ont basculé de « Oui » à « Non ».",
          "Convenez par écrit d'actions avec le fournisseur : action | responsable | échéance | indicateur de réussite.",
          "Informez la hiérarchie et planifiez une réévaluation anticipée si le score passe sous 3/5.",
        ],
      },
      {
        title: 'Appliquez la règle avant chaque commande significative',
        actions: [
          "Avant de signer un PO supérieur à un seuil défini (par exemple 1 000 EUR), consultez la colonne « Alerte échéance » : si « ÉCHUE », réévaluez d'abord.",
          "Si le score est sous 3/5, aucune commande n'est passée sans plan correctif signé.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — plan correctif du fournisseur A (septembre 2026)',
      lines: [
        "Constat : Service passé de 6/6 à 3/6 (3 livraisons en retard de 2 à 4 jours en saison des pluies, 2 lots incomplets) ; Prix 1/3 (demande de hausse de 2 %).",
        "Action 1 : camion de secours et départ de Wau 48 h avant la date de livraison — responsable : gérant A — échéance 15/09 — indicateur : 100 % des livraisons dans les 7 jours.",
        "Action 2 : prix ferme maintenu à 635 EUR/t pour la période de renouvellement — négocié par le SCM — 10/09.",
        "Action 3 : réévaluation anticipée au 30/11 ; sous 3,0/5, suspension et bascule vers B.",
      ],
    },
    result: "Livrable L5 terminé : un tableau de portefeuille à jour, une règle de fréquence, des alertes automatiques et un plan correctif daté pour le fournisseur en baisse.",
    tip: "Une dégradation signalée tôt est une négociation ; signalée tard, c'est une rupture. L'alerte de tendance doit vous amener au fournisseur avant l'incident.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 6 — ACHAT PONCTUEL OU CONTRAT-CADRE (4 ÉTAPES)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Analyser la récurrence et la prévisibilité du besoin',
    intro: "Un contrat-cadre se justifie par un besoin récurrent et prévisible : même catégorie d'article ou de service commandée plusieurs fois par an. Vous partez des données, pas de l'impression, en utilisant l'historique d'achats de la mission (registre des flux) et le plan de besoins du programme.",
    steps: [
      {
        title: 'Extrayez l\'historique',
        actions: [
          "Dans le registre des achats, filtrez la famille d'articles et listez les commandes des 12 derniers mois (ou depuis le début du projet) : date, quantité, montant, fournisseur.",
          "Calculez le nombre de commandes, la quantité mensuelle moyenne et l'écart entre le mois le plus fort et le mois le plus faible.",
        ],
      },
      {
        title: 'Confrontez-les au besoin futur',
        actions: [
          "Demandez au programme les besoins des 6 à 12 prochains mois (nombre de bénéficiaires, rations, calendrier).",
          "Notez ce qui peut changer : fermeture d'un site, changement de spécification, modification du budget.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — besoin en farine de maïs et haricots',
      lines: [
        "Historique : 3 achats en 3 mois (T01, T03, T07), 5,8 t au total, achetés à l'unité à chaque fois.",
        "Besoin programme (Dr Rebecca N.) : 180 accompagnants × 30 jours × 510 g = 2,75 t par mois, stable jusqu'à la fin du projet (30/11/2026).",
        "Variation attendue : ± 10 % ; spécification stable (farine de maïs, haricots secs, sacs de 50 kg).",
      ],
    },
    result: "Une fiche de besoin chiffrée : récurrence mensuelle, volume 2,75 t, variation ± 10 %, spécification stable.",
    pitfall: "Décider d'un contrat-cadre sur un besoin qui n'est pas confirmé par le programme : vous signez un contrat pour un volume qui disparaîtra à la fermeture du site.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Appliquer la grille de décision achat ponctuel / contrat-cadre',
    intro: "La décision se prend avec une grille de six critères, chacun à Oui / Non. Quatre « Oui » ou plus justifient un contrat-cadre ; moins, vous restez en achats ponctuels. Cette grille évite que le choix dépende de l'habitude.",
    steps: [
      {
        title: 'Répondez aux six critères',
        actions: [
          "Récurrence : au moins 3 commandes par an de la même catégorie ?",
          "Prévisibilité : volume mensuel stable à ± 20 % ?",
          "Spécification stable pendant la durée prévue ?",
          "Au moins deux fournisseurs qualifiés ou qualifiables sur le marché ?",
          "Gain attendu : le volume cumulé permet-il un meilleur prix ou un meilleur délai ?",
          "Financement sécurisé : le budget couvre toute la durée envisagée ?",
        ],
      },
      {
        title: 'Notez le résultat et la durée',
        actions: [
          "Comptez les « Oui » et notez la décision.",
          "Fixez la durée : 12 mois recommandé, mais jamais au-delà de la période de financement ; raccourcissez-la si le contexte est instable.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Réponse Kerowa', 'Justification'],
      rows: [
        ['Récurrence ≥ 3 commandes / an', 'Oui', '6 commandes mensuelles prévues'],
        ['Volume stable à ± 20 %', 'Oui', '2,75 t par mois, ± 10 %'],
        ['Spécification stable', 'Oui', 'Farine de maïs, haricots secs'],
        ['Au moins 2 fournisseurs qualifiés', 'Oui', 'A et B qualifiés sous condition'],
        ['Gain attendu', 'Oui', '635 EUR/t contre 715 EUR/t en import ; commande rendue en 7 jours'],
        ['Financement sécurisé sur la durée', 'Oui sur 6 mois', 'Projet financé jusqu\'au 30/11/2026 ; durée alignée sur le financement'],
      ],
    },
    result: "6 « Oui » sur 6 : accord-cadre justifié, d'une durée de 6 mois (avril à septembre 2026), renouvelable après revue.",
    pitfall: "Prolonger le contrat au-delà du financement « pour plus de souplesse » : en cas d'arrêt du projet, vous êtes engagé auprès du fournisseur sans budget.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Choisir la procédure d\'attribution et le nombre de fournisseurs',
    intro: "Un accord-cadre doit être attribué selon la procédure correspondant à sa valeur totale estimée. Vous choisissez aussi s'il sera mono-fournisseur ou s'il y aura un fournisseur de secours qualifié, ce qui réduit le risque de dépendance.",
    steps: [
      {
        title: 'Calculez la valeur cumulée et la procédure',
        actions: [
          "Valeur cumulée = quantité totale sur la durée × prix estimé ; comparez-la aux seuils du bailleur et de la politique interne (règle la plus stricte).",
          "Vérifiez qu'aucun découpage artificiel ne vous place sous un seuil.",
        ],
      },
      {
        title: 'Décidez la structure',
        actions: [
          "Mono-fournisseur avec fournisseur de secours qualifié, ou accord multi-fournisseurs (répartition du volume) selon la fragilité du marché.",
          "Prévoyez la clause qui permet de basculer vers le fournisseur de secours en cas de défaillance.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — procédure et structure retenues',
      lines: [
        "Valeur : 16,5 t × 635 EUR/t = 10 478 EUR → au-dessus de 10 000 EUR → appel d'offres restreint (déjà lancé le 10 mars) ; signature de l'accord par la coordinatrice pays.",
        "Structure : accord-cadre avec A (meilleure offre qualifiée à 635 EUR/t) ; B qualifié reste fournisseur de secours pour achats ponctuels, activables en cas de défaillance de A.",
        "C : non qualifié à ce jour (dossier incomplet) ; ne peut pas être attributaire.",
      ],
    },
    result: "Procédure choisie (AO restreint), signataire identifié (coordinatrice pays), structure arrêtée (A + secours B).",
    tip: "Un fournisseur de secours qualifié coûte une demi-journée de qualification mais évite 3 semaines de blocage le jour où le principal défaille.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Rédiger la note de décision et la faire valider',
    intro: "La note d'une page est la preuve écrite du choix. Elle sera dans le dossier d'achat et servira en audit : une décision sans justification écrite n'est pas défendable.",
    steps: [
      {
        title: 'Rédigez la note en cinq rubriques',
        actions: [
          "Besoin (chiffres de l'étape 1) ; grille de décision (résultat de l'étape 2) ; procédure et structure (étape 3).",
          "Risques identifiés (dépendance, qualité, prix) et mesures (fournisseur de secours, clause de revue, évaluations).",
          "Décision demandée et date de signature visée.",
        ],
      },
      {
        title: 'Faites valider et classez',
        actions: [
          "Soumettez-la à la coordinatrice pays et au coordinateur terrain ; obtenez la signature avant la rédaction du contrat.",
          "Classez-la dans le dossier d'achat du fournisseur et dans le dossier « Contrat ».",
        ],
      },
    ],
    example: {
      title: 'Kerowa — note de décision (extrait), 27 mars 2026',
      lines: [
        "« Objet : accord-cadre vivres non périssables, avril – septembre 2026. Besoin : 2,75 t/mois, 16,5 t, valeur estimée 10 478 EUR. Grille : 6/6. Procédure : AO restreint (valeur > 10 000 EUR), attribution au fournisseur A (635 EUR/t rendu, qualifié sous condition le 25/03, score 4,50/5). Secours : B. Risques : dépendance (B qualifié), qualité (clause de remplacement 72 h), prix (ferme 6 mois). Décision demandée : signature de l'accord le 31/03/2026 par la coordinatrice pays. »",
        "Visa : Grace M., coordinatrice pays, 27/03/2026.",
      ],
    },
    result: "Livrable L6 (partie 1) terminé : une note de décision visée, avant la rédaction de l'accord-cadre.",
    pitfall: "Rédiger l'accord avant d'avoir la décision visée : si la coordination change la structure ou le fournisseur, vous refaites tout.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 7 — RÉDIGER L'ACCORD-CADRE (8 ÉTAPES)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 8',
    title: 'Ouvrir le template d\'accord-cadre et préparer le dossier',
    intro: "Le template accord-cadre-framework-agreement-template.docx se compose d'un en-tête, d'une phrase d'objectif et de 7 sections numérotées. Les libellés des cases sont des consignes à compléter ; vous n'inventez ni section, ni tableau. Entrées : la note de décision, la fiche A, les conditions de qualification.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le template et enregistrez-le sous « FWA_JurRiverGrains_vivres_2026-03-31.docx » dans « 04_Contrat » du fournisseur.",
          "Gardez l'en-tête et la phrase d'objectif telles quelles : « fixer les conditions d'achats récurrents avec un fournisseur qualifié, sur une durée déterminée, avec revue de performance obligatoire avant tout renouvellement ».",
          "L'en-tête mentionne « Module 03 » : c'est un résidu de numérotation, ne le modifiez pas pour autant.",
        ],
      },
      {
        title: 'Rassemblez les sources et repérez les zones à remplir',
        actions: [
          "Ouvrez à côté : fiche A (décision et conditions), note de décision, offre du 20 mars, spécifications techniques, code de conduite.",
          "Les sections 1, 3, 4 et 6 comportent des tableaux : placez le curseur dans la cellule et saisissez à la suite du libellé.",
          "Les sections 2, 4 (révision des prix), 5 et 6 (motifs) sont des consignes sous forme de paragraphe : saisissez votre texte sur la ligne qui suit.",
        ],
      },
    ],
    table: {
      columns: ['Section du template', 'Contenu à remplir', 'Source'],
      rows: [
        ['1. Parties au contrat', 'Organisation et fournisseur, représentants', 'Statuts, certificat d\'enregistrement'],
        ['2. Objet et périmètre', 'Catégories, zones, exclusions', 'Besoin et spécifications'],
        ['3. Durée et renouvellement', 'Prise d\'effet, échéance', 'Note de décision'],
        ['4. Tarifs et commande', 'Grille de prix, délai, seuil de PO, révision', 'Offre retenue, fiche A (critère 46)'],
        ['5. Revue de performance', 'Fréquence, score minimal', 'Procédure 5'],
        ['6. Résiliation', 'Motifs, préavis, commandes en cours', 'Politique anti-corruption, screening'],
        ['7. Signatures', 'Noms, fonctions, dates', 'Délégation de signature'],
      ],
    },
    result: "Le template est enregistré dans le bon dossier, et chaque section est reliée à sa source avant la rédaction.",
    pitfall: "Écrire l'accord à partir d'un ancien contrat « copié-collé » : les noms, prix et dates d'un autre fournisseur survivent souvent dans le texte. Repartez du template et relisez chaque champ.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 8',
    title: 'Section 1 — Parties au contrat',
    intro: "Trois cases à compléter : Organisation (raison sociale, adresse), Fournisseur (raison sociale, adresse), puis les deux représentants (nom, fonction). Un accord signé par la mauvaise personne ou au nom de la mauvaise entité est contestable.",
    steps: [
      {
        title: 'Remplissez les deux premières cases',
        actions: [
          "Organisation : raison sociale exacte de l'ONG et adresse du bureau qui contracte.",
          "Fournisseur : raison sociale exacte (celle du certificat d'enregistrement vérifié à la procédure 1) et adresse.",
        ],
      },
      {
        title: 'Remplissez les représentants',
        actions: [
          "Organisation : la personne qui a le pouvoir de signer à ce montant (matrice de délégation).",
          "Fournisseur : le dirigeant qui figure sur le certificat d'enregistrement avec pouvoir d'engager la société.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 1 remplie',
      lines: [
        "Organisation : Kerowa Santé, bureau de Gogrial, État du Warrap, Soudan du Sud (adresse du bureau principal).",
        "Fournisseur : Jur River Grains Ltd, Marché central, Wau, n° d'enregistrement du certificat.",
        "Représenté par : Grace M., coordinatrice pays (signataire au niveau 10 000 – 60 000 EUR) | Moses Lado Kenyi, gérant.",
      ],
    },
    result: "Parties identifiées sans ambiguïté, avec des signataires qui ont le pouvoir de s'engager.",
    pitfall: "Faire signer le coordinateur terrain pour un montant qui relève de la coordinatrice pays : la signature est irrégulière et l'accord peut être rejeté en audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 8',
    title: 'Section 2 — Objet et périmètre de l\'accord',
    intro: "Trois consignes : catégorie(s) de biens ou services couverte(s) ; zone(s) géographique(s) et site(s) de livraison ; exclusions explicites (ce que l'accord ne couvre pas). Un périmètre précis évite à la fois les discussions de prix et les commandes hors accord.",
    steps: [
      {
        title: 'Décrivez les biens et la zone',
        actions: [
          "Catégorie : désignation exacte des articles et spécification technique (ou référence à l'annexe de spécifications).",
          "Zone et site de livraison : lieu précis et conditions de livraison (rendu entrepôt, déchargement).",
        ],
      },
      {
        title: 'Écrivez les exclusions',
        actions: [
          "Listez ce que l'accord ne couvre pas : autres denrées, transport vers d'autres sites, achats au-dessus du plafond.",
          "Précisez que tout achat non couvert relève d'une nouvelle procédure d'achat.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 2 remplie',
      lines: [
        "Catégories : farine de maïs (humidité inférieure ou égale à 13,5 %, sans moisissure ni insecte) et haricots secs (nettoyés, sans insectes), en sacs neufs cousus de 50 kg, conformes à la spécification de l'annexe 1.",
        "Zone et site : livraison rendue à l'entrepôt de Kerowa Santé à Gogrial (État du Warrap), déchargement inclus.",
        "Exclusions : huile enrichie, sel iodé, sucre, produits nutritionnels thérapeutiques, tout transport vers d'autres sites, tout achat au-dessus du plafond de 12 000 EUR sans avenant écrit.",
      ],
    },
    result: "Un périmètre tel qu'un tiers qui lit l'accord sait exactement quoi commander, où, et ce qui est exclu.",
    tip: "Joignez les spécifications en annexe plutôt que de les noyer dans le texte : elles pourront être mises à jour par avenant sans réécrire l'accord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 8',
    title: 'Section 3 — Durée et modalités de renouvellement',
    intro: "Un tableau à deux cases : date de prise d'effet et date d'échéance (12 mois recommandé), puis une phrase fixe : « le renouvellement n'est jamais automatique, il est conditionné à une revue de performance (Section 5) et à une remise en concurrence au moins partielle ». C'est le cœur du module : ne la modifiez pas.",
    steps: [
      {
        title: 'Fixez les dates',
        actions: [
          "Date de prise d'effet : le lendemain de la signature ou la date de début de la première commande.",
          "Date d'échéance : jamais au-delà de la période de financement ; 12 mois par défaut, durée plus courte si le financement ou le contexte l'impose.",
        ],
      },
      {
        title: 'Conservez la clause de renouvellement',
        actions: [
          "Laissez la phrase du template : elle rend impossible toute reconduction tacite.",
          "Si la durée est inférieure à 12 mois, expliquez-le en note de décision et vérifiez avec la hiérarchie.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 3 remplie',
      lines: [
        "Date de prise d'effet : 01/04/2026 | Date d'échéance : 30/09/2026 (6 mois, au lieu des 12 mois recommandés, car le financement du projet s'arrête le 30/11/2026 et que la revue se fera avant la fin).",
        "Phrase du template conservée : le renouvellement n'est jamais automatique.",
      ],
    },
    result: "Dates précises, durée alignée sur le financement, clause de non-reconduction automatique conservée.",
    pitfall: "Laisser la date d'échéance vide ou écrire « jusqu'à nouvel ordre » : c'est la reconduction tacite indéfinie que le module interdit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 8',
    title: 'Section 4 — Conditions tarifaires et modalités de commande',
    intro: "Quatre éléments : la grille tarifaire (ou référence à l'annexe prix), le délai de livraison standard engagé, le seuil ou la procédure de commande (bon de commande requis à partir de), et les modalités de révision des prix. C'est ici que se transforme en clause le « Non » du critère 46 (stabilité des prix).",
    steps: [
      {
        title: 'Remplissez la grille et le tableau',
        actions: [
          "Grille tarifaire : prix unitaires fermes en EUR par tonne, rendus entrepôt, avec les quantités de référence.",
          "Délai de livraison standard engagé : celui de l'offre, exprimé en jours calendaires à compter de la réception du PO.",
          "Seuil de PO : à partir de quel montant un PO est requis (ici, pour toute commande).",
        ],
      },
      {
        title: 'Rédigez les modalités de révision des prix',
        actions: [
          "Décidez entre prix ferme, indexation ou plafond : pour une denrée volatile sur 6 mois, privilégiez le prix ferme ; sinon un plafond de hausse justifié par pièces.",
          "Précisez que toute révision se fait par avenant écrit avant la commande concernée.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 4 remplie',
      lines: [
        "Grille : farine de maïs 590 EUR/t ; haricots secs 970 EUR/t, rendus entrepôt Gogrial (annexe 2). Commande mensuelle de référence : 2,43 t de farine + 0,32 t de haricots = 2,75 t, soit 1 746 EUR (prix moyen 635 EUR/t).",
        "Délai de livraison standard engagé : 7 jours calendaires après réception du PO signé.",
        "Seuil de commande : bon de commande signé requis pour toute commande, quel que soit le montant ; une commande par e-mail sans PO n'engage pas Kerowa Santé.",
        "Révision des prix : prix fermes jusqu'au 30/09/2026 ; toute révision par avenant écrit, justifiée par pièces et acceptée avant la commande concernée, plafonnée à 5 %.",
      ],
    },
    result: "Grille de prix fermes, délai engagé, règle de PO et clause de révision : le « Non » du critère 46 est devenu une obligation contractuelle.",
    pitfall: "Accepter « prix du jour » dans un accord-cadre : sans prix fixé ou plafonné, l'accord perd son intérêt économique et donne une avance au fournisseur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 8',
    title: 'Section 5 — Clause de revue de performance et renouvellement',
    intro: "Deux consignes : la fréquence des évaluations pendant la durée du contrat (référence à la fiche d'évaluation pondérée) et le score minimal requis pour un renouvellement sans condition (seuil d'alerte : 3/5), avec obligation d'un plan correctif sous ce seuil. C'est elle qui donne au contrat son mécanisme de sortie.",
    steps: [
      {
        title: 'Fixez la fréquence des évaluations',
        actions: [
          "Référez-vous à la fiche de qualification et d'évaluation de ce module.",
          "Indiquez les dates : évaluation intermédiaire à mi-contrat et évaluation avant renouvellement, avec le délai de préparation.",
        ],
      },
      {
        title: 'Fixez le score minimal et ses conséquences',
        actions: [
          "Score minimal requis pour un renouvellement sans condition : 3/5 (seuil d'alerte du template).",
          "Sous ce seuil : plan d'action correctif obligatoire avant tout renouvellement ; ajoutez que la remise en concurrence partielle est obligatoire dans tous les cas.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 5 remplie',
      lines: [
        "Fréquence : évaluation intermédiaire le 30/06/2026 ; évaluation préalable au renouvellement le 31/08/2026 au plus tard ; fiche de qualification et d'évaluation de Kerowa Santé (29 critères), complétée conjointement.",
        "Score minimal pour un renouvellement sans condition : 3/5. Sous 3/5, plan d'action correctif signé avant tout renouvellement ; toute baisse sur deux évaluations consécutives déclenche un plan correctif.",
        "Dans tous les cas, le renouvellement est subordonné à une remise en concurrence au moins partielle (comparaison avec au minimum un ou deux fournisseurs qualifiés).",
      ],
    },
    result: "La clause de revue prévoit des dates, un seuil, un plan correctif et une remise en concurrence : aucun renouvellement tacite n'est possible.",
    tip: "Faites signer en même temps l'engagement du fournisseur à fournir les données utiles à l'évaluation (relevés de livraison, incidents). Sans elles, la revue sera une discussion d'opinions.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 7 sur 8',
    title: 'Section 6 — Conditions de résiliation',
    intro: "Trois éléments : les motifs de résiliation anticipée (manquement grave, non-conformité, résultat de screening d'inéligibilité positif), le préavis en nombre de jours, et les modalités de règlement des commandes en cours. C'est ici que s'insèrent les clauses d'intégrité de la procédure 3.",
    steps: [
      {
        title: 'Listez les motifs de résiliation',
        actions: [
          "Manquement grave : livraisons non conformes répétées (par exemple deux lots refusés en 60 jours), retards répétés, faux documents.",
          "Résultat de screening d'inéligibilité positif ou changement de propriétaire ou de dirigeant non notifié sous 15 jours.",
          "Manquement à l'intégrité (cadeaux, commissions, conflit d'intérêts caché) ; perte du financement du projet.",
        ],
      },
      {
        title: 'Fixez le préavis et les commandes en cours',
        actions: [
          "Préavis : un nombre de jours précis (par exemple 30), sauf résiliation immédiate pour inéligibilité ou manquement d'intégrité.",
          "Commandes en cours : livrées et payées si conformes ; lots non conformes non payés ; aucun paiement à un fournisseur inéligible.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 6 remplie',
      lines: [
        "Motifs : manquement grave (deux lots refusés en 60 jours, faux documents), non-conformité persistante après plan correctif, résultat de screening d'inéligibilité positif, changement de propriétaire ou de dirigeant non notifié sous 15 jours, manquement à l'intégrité (cadeau, commission, conflit d'intérêts caché), arrêt du financement du projet.",
        "Préavis : 30 jours ; résiliation immédiate, sans préavis, en cas d'inéligibilité ou de manquement d'intégrité.",
        "Commandes en cours : les commandes confirmées avant notification sont livrées et payées sous 30 jours si conformes ; les lots non conformes ne sont pas payés ; aucun paiement n'est effectué en cas d'inéligibilité.",
      ],
    },
    result: "Motifs, préavis et règlement des commandes en cours écrits : la sortie du contrat est prévue avant la signature.",
    pitfall: "Oublier la clause de screening positif : le jour où le fournisseur est listé, vous n'aurez aucun fondement contractuel pour cesser de payer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 8 sur 8',
    title: 'Section 7 — Signatures, relecture et circuit de signature',
    intro: "Deux tableaux : l'un pour les noms, fonctions et dates, l'autre pour les signatures. Avant la signature, vous relisez avec 5 contrôles, vous préparez les annexes et vous suivez un circuit de validation qui respecte la délégation.",
    steps: [
      {
        title: 'Relisez avec cinq contrôles',
        actions: [
          "Cohérence : noms, dates, montants et prix identiques à l'offre retenue et à la note de décision.",
          "Conditions de qualification : les conditions de la fiche A (RIB au nom de la société, factures conformes, prix ferme) sont levées ou intégrées.",
          "Conformité : procédure d'attribution respectée (AO restreint), screening daté avant signature.",
          "Clauses : durée limitée, revue de performance, résiliation avec screening positif et intégrité.",
          "Annexes : spécifications, grille de prix, code de conduite et liste nominative du personnel, signés.",
        ],
      },
      {
        title: 'Faites signer et classez',
        actions: [
          "Faites signer le fournisseur puis l'organisation ; datez ; archivez l'original dans « 04_Contrat » et envoyez une copie scannée à la finance et à la logistique.",
          "Mettez à jour la fiche (B11 numéro du contrat, D11 date de signature) et le tableau de portefeuille (colonne « Contrat-cadre »).",
        ],
      },
    ],
    example: {
      title: 'Kerowa — section 7 remplie',
      lines: [
        "Pour l'organisation : Grace M., coordinatrice pays, Kerowa Santé, 31/03/2026. Pour le fournisseur : Moses Lado Kenyi, gérant, Jur River Grains Ltd, 31/03/2026.",
        "Fiche A mise à jour : B11 KS-FWA-2026-001 ; D11 31/03/2026. Tableau de portefeuille : contrat-cadre jusqu'au 30/09/2026.",
        "Plafond indicatif : 12 000 EUR ; dépassement uniquement par avenant écrit signé par la coordinatrice pays.",
      ],
    },
    result: "Livrable L6 terminé : accord-cadre complet, signé, daté, archivé, avec la fiche et le tableau de portefeuille mis à jour.",
    pitfall: "Signer l'accord avant que les conditions de qualification soient levées : le fournisseur A n'avait pas fourni l'attestation bancaire au nom de la société le 25 mars. Elle a été reçue le 26 mars, avant la signature du 31.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // PROCÉDURE 8 — CYCLE DE VIE ET RENOUVELLEMENT DE L'ACCORD-CADRE (7 ÉTAPES)
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 7',
    title: 'Piloter chaque appel de commande avec un registre',
    intro: "L'accord-cadre n'est pas un contrat qu'on range : il vit à chaque commande. Vous tenez un registre des appels de commande pour savoir à tout moment ce qui a été commandé, livré, payé et ce qu'il reste du plafond.",
    steps: [
      {
        title: 'Créez le registre des appels de commande',
        actions: [
          "Ouvrez un classeur « Registre_appels_FWA-2026-001.xlsx » avec les colonnes : N° PO | Date | Quantité commandée (t) | Valeur (EUR) | Cumul (EUR) | Reste du plafond (EUR) | Date de livraison prévue | Date de livraison réelle | Écart (jours) | Conforme ? | Facture conforme ?",
          "Saisissez dans « Reste du plafond » la formule =plafond − cumul (ici 12 000 − cumul).",
        ],
      },
      {
        title: 'Alimentez-le à chaque commande et à chaque réception',
        actions: [
          "À l'émission du PO : ajoutez la ligne avec quantité, valeur et date de livraison prévue.",
          "À la réception : renseignez la date réelle, l'écart, la conformité (lien avec le bon de réception) et la conformité de la facture.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — registre des trois premiers appels de commande',
      lines: [
        "PO-FWA-01 | 02/04/2026 | 2,75 t | 1 746 EUR | cumul 1 746 | reste 10 254 | livraison prévue 09/04 | réelle 09/04 | 0 jour | conforme | facture conforme (n° fiscal présent).",
        "PO-FWA-02 | 04/05/2026 | 2,75 t | 1 746 EUR | cumul 3 492 | reste 8 508 | prévue 11/05 | réelle 11/05 | 0 | conforme | conforme.",
        "PO-FWA-03 | 01/06/2026 | 2,75 t | 1 746 EUR | cumul 5 238 | reste 6 762 | prévue 08/06 | réelle 10/06 | +2 jours | conforme | conforme.",
      ],
    },
    result: "Un registre à jour qui donne la consommation du plafond, les écarts de délai et la conformité de chaque commande, pièce par pièce.",
    pitfall: "Commander par e-mail sans PO « parce qu'on se connaît » : l'accord prévoit que sans PO signé la commande n'engage pas l'organisation, et l'audit ne retrouvera aucune trace.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 7',
    title: 'Mesurer la performance du fournisseur en continu',
    intro: "La revue de renouvellement ne doit pas reposer sur des impressions de fin de contrat. Vous mesurez chaque mois trois indicateurs simples, sur la base du registre, et vous consignez les incidents au fil de l'eau.",
    steps: [
      {
        title: 'Calculez les trois indicateurs',
        actions: [
          "Ponctualité : nombre de livraisons dans le délai engagé / nombre de livraisons.",
          "Conformité : nombre de livraisons conformes (bon de réception sans réserve) / nombre de livraisons.",
          "Prix : écart entre le prix facturé et le prix de l'accord, et comparaison avec un relevé du marché (dernier prix constaté chez B ou à Juba).",
        ],
      },
      {
        title: 'Consignez les incidents et réunissez-vous',
        actions: [
          "Tenez une feuille d'incidents : date, nature, impact, action demandée, réponse du fournisseur.",
          "Organisez une revue mensuelle de 20 minutes avec le fournisseur sur les écarts constatés.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Cible', 'Avril – juin', 'Juillet – août'],
      rows: [
        ['Livraisons dans les 7 jours', '100 %', '2 sur 3 (67 %)', '1 sur 3 (33 %)'],
        ['Livraisons conformes', '100 %', '3 sur 3', '2 sur 3 (1 lot humide)'],
        ['Prix facturé = prix accord', '100 %', '100 %', 'Demande de hausse de 2 % refusée'],
        ['Incidents ouverts', '0', '1 (retard saison des pluies)', '3 (retards, lot humide, hausse)'],
      ],
    },
    result: "Des indicateurs chiffrés et des incidents tracés : ils alimentent les critères de l'évaluation et évitent toute discussion d'opinions à la revue.",
    tip: "Partagez les indicateurs avec le fournisseur chaque mois : un fournisseur qui voit ses chiffres corrige souvent avant que vous ayez à l'exiger.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 7',
    title: 'Déclencher la revue de renouvellement à J-90',
    intro: "Un contrat-cadre n'est pas un mariage : la facilité qu'il procure au quotidien est précisément ce qui pousse à en oublier l'échéance. Vous posez une alerte à J-90 pour avoir le temps d'évaluer, de comparer, de négocier et de signer, sans reconduction par défaut.",
    steps: [
      {
        title: 'Posez les alertes',
        actions: [
          "Dans le tableau de portefeuille, vérifiez que la colonne « Contrat-cadre » contient la date d'échéance (30/09/2026) et ajoutez une alerte à J-90 (02/07/2026).",
          "Placez dans l'agenda : J-90 ouverture de la revue, J-60 évaluation, J-45 remise en concurrence, J-15 signature.",
        ],
      },
      {
        title: 'Constituez le dossier de revue',
        actions: [
          "Rassemblez : registre des appels de commande, indicateurs, incidents, fiches d'évaluation successives, dernier screening, état du financement et des besoins futurs.",
          "Demandez au programme si le besoin continue (prolongation du projet, volumes) : sans besoin confirmé, il n'y a pas de renouvellement.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — calendrier de la revue de renouvellement',
      lines: [
        "02/07/2026 (J-90) : ouverture de la revue ; le coordinateur terrain demande au bailleur une prolongation du projet jusqu'au 31/03/2027 (à confirmer).",
        "31/08/2026 : évaluation préalable au renouvellement (fiche A) — score 3,81/5.",
        "01/09 – 10/09/2026 : remise en concurrence partielle (B et C).",
        "15/09/2026 : décision ; 25/09/2026 : signature de l'avenant ; 30/09/2026 : échéance.",
      ],
    },
    result: "Les jalons de la revue sont planifiés à l'avance : l'échéance n'arrive jamais par surprise.",
    pitfall: "Découvrir l'échéance 10 jours avant : vous reconduisez « pour ne pas bloquer l'approvisionnement ». C'est le piège du cas le plus fréquent du module.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 7',
    title: 'Réaliser l\'évaluation préalable au renouvellement',
    intro: "Le renouvellement croise deux éléments : le score de la dernière évaluation périodique et une remise en concurrence au moins partielle. Vous commencez par le score : une nouvelle fiche, sur les mêmes 29 critères, avec les preuves de la période écoulée.",
    steps: [
      {
        title: 'Complétez la nouvelle fiche',
        actions: [
          "Enregistrez « Fiche_Evaluation_JurRiverGrains_2026-08-31.xlsx » ; remplissez les 29 critères à partir des indicateurs et des incidents.",
          "Refaites le screening de la société et des personnes (aucun changement de propriétaire ou de dirigeant déclaré), puis signez avec le référent technique.",
        ],
      },
      {
        title: 'Calculez et interprétez',
        actions: [
          "Calculez le score pondéré (méthode de la procédure 4, étape 7) et reportez-le dans le tableau avec la tendance.",
          "Appliquez la règle : au-dessus de 3/5 mais en baisse sur deux évaluations consécutives, un plan correctif est obligatoire avant renouvellement.",
        ],
      },
    ],
    table: {
      columns: ['Élément', 'Constat au 31/08/2026'],
      rows: [
        ['Synthèse de la fiche A', '19 critères validés sur 29 ; 7 « Non » ; 3 sans objet ; taux de réponses 90 %'],
        ['Score pondéré', '3,81 / 5 (juin : 4,32 ; mars : 4,50)'],
        ['Tendance', 'Baisse sur deux évaluations consécutives'],
        ['Catégories en recul', 'Service 3/6 (délais, modalités, SAV) ; Produits 5/7 (emballage, lot humide) ; Prix 1/3 (hausse de 2 % demandée)'],
        ['Screening', 'Refait le 31/08 : aucun résultat sur les quatre outils'],
        ['Conclusion', 'Au-dessus du seuil d\'alerte, mais plan d\'action correctif obligatoire avant renouvellement'],
      ],
    },
    result: "Une fiche d'évaluation datée, un score de 3,81/5 en baisse, une conclusion écrite et un screening refait avant toute décision.",
    pitfall: "Conclure « le score est supérieur à 3, donc on renouvelle » : une baisse sur deux évaluations consécutives impose une action corrective documentée, même au-dessus du seuil.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 7',
    title: 'Mener la remise en concurrence au moins partielle',
    intro: "Une remise en concurrence partielle compare le fournisseur en place avec au minimum un ou deux autres fournisseurs qualifiés du secteur, sur un même panier de produits. Elle ne remplace pas la procédure d'attribution correspondant à la valeur, elle donne un point de comparaison et peut révéler un meilleur fournisseur.",
    steps: [
      {
        title: 'Préparez une demande de prix identique',
        actions: [
          "Choisissez au moins deux fournisseurs qualifiés (B et C, qualifié entre-temps) : vérifiez que leur statut est à jour et leur date de validation non dépassée.",
          "Envoyez la même demande à tous, y compris au fournisseur en place : même spécification, même quantité mensuelle de référence (2,75 t), même condition de livraison (rendu entrepôt Gogrial), même délai de réponse.",
        ],
      },
      {
        title: 'Comparez sur le même panier',
        actions: [
          "Calculez pour chaque offre le coût mensuel et semestriel, et ajoutez les critères non financiers : délai, score de la dernière évaluation, capacité de stock.",
          "Documentez dans un tableau comparatif daté, signé par le comité (sans la personne en conflit déclaré), et classez-le dans le dossier.",
        ],
      },
    ],
    table: {
      columns: ['Offre (rendu Gogrial)', 'Prix EUR/t', 'Coût mensuel (2,75 t)', 'Coût 6 mois (16,5 t)', 'Délai', 'Score'],
      rows: [
        ['A — Jur River Grains (sortant)', '648', '1 782', '10 692', '7 jours', '3,81'],
        ['B — Wau Central Provisions', '631', '1 735', '10 412', '7 jours', '4,18 (mars)'],
        ['C — Bahr el Ghazal Agro (qualifié le 24/07)', '640', '1 760', '10 560', '10 jours', '4,05'],
      ],
    },
    result: "Un tableau comparatif sur le même panier : A est le plus cher (+2,0 % vs son prix actuel), B le moins cher, C intermédiaire ; la comparaison est tracée, datée et validée.",
    tip: "Informez le sortant que la concurrence est ouverte : cela ne le prive de rien et améliore souvent son offre. Ne lui communiquez jamais les prix des autres.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 7',
    title: 'Décider : renouveler, renouveler sous condition ou ne pas renouveler',
    intro: "Vous croisez le score, le plan correctif et la comparaison de prix, puis vous choisissez l'une des trois issues. La décision est écrite, validée au bon niveau et suivie d'un avenant (ou d'une clôture) : jamais d'une simple signature de reconduction.",
    steps: [
      {
        title: 'Appliquez la grille de décision',
        actions: [
          "Renouveler sans condition : score ≥ 3/5 avec stabilité ou hausse, prix compétitif, aucune action corrective ouverte.",
          "Renouveler sous condition : score ≥ 3/5 mais en baisse, ou prix supérieur au marché ; plan correctif signé, éventuel partage du volume avec un fournisseur de secours.",
          "Ne pas renouveler : score < 3/5 sans plan accepté, screening positif, manquement d'intégrité ou meilleur fournisseur clairement identifié.",
        ],
      },
      {
        title: 'Négociez et formalisez',
        actions: [
          "Présentez à A la comparaison (sans révéler les prix des autres) et demandez un alignement ; obtenez le plan correctif signé.",
          "Rédigez l'avenant : nouvelles dates, prix, plan correctif, clauses de revue ; faites valider par la coordinatrice pays ; refaites le screening avant signature.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — décision du 15 septembre 2026',
      lines: [
        "A : score 3,81 en baisse sur deux évaluations ; offre initiale à 648 EUR/t. Après négociation, A maintient 635 EUR/t ferme pour la période et signe un plan correctif (camion de secours, départ 48 h avant livraison, indicateur 100 % des livraisons à 7 jours).",
        "B : meilleure offre (631 EUR/t) ; reçoit 30 % du volume mensuel (0,83 t) pour réduire la dépendance ; A reçoit 70 % (1,92 t).",
        "Coût semestriel : 16,5 t × (0,7 × 635 + 0,3 × 631) = 16,5 × 633,8 = 10 458 EUR, contre 10 692 EUR si l'offre initiale de A avait été acceptée (économie 234 EUR, soit 2,2 %).",
        "Statut : A renouvelé sous condition (avenant du 25/09 : 01/10/2026 – 31/03/2027, sous réserve de l'approbation de la prolongation par ECHO) ; accord-cadre avec B signé par la coordinatrice pays (valeur cumulée de l'ensemble > 10 000 EUR).",
      ],
    },
    result: "Décision écrite : renouvellement sous condition de A avec plan correctif et prix ferme, partage du volume avec B, économie chiffrée, avenant et accord signés avant l'échéance.",
    pitfall: "Prolonger A « tel quel » au motif que la transition vers B est pénible : c'est ce que fait une reconduction automatique, et la comparaison que vous avez payée de votre temps serait inutile.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 7 sur 7',
    title: 'Clôturer, archiver et capitaliser',
    intro: "Quelle que soit l'issue, le contrat arrive à son terme. La clôture formelle protège l'organisation en audit : aucun engagement ouvert, aucun paiement oublié, dossier complet et conservé pour la durée exigée par la convention (5 ans dans la politique Kerowa).",
    steps: [
      {
        title: 'Clôturez le contrat',
        actions: [
          "Vérifiez que toutes les commandes sont livrées, réceptionnées et payées ; soldez les litiges ; obtenez les éventuelles factures finales.",
          "Rédigez une note de clôture : valeur totale commandée, consommation du plafond, score final, incidents, décision de renouvellement.",
        ],
      },
      {
        title: 'Archivez et mettez à jour',
        actions: [
          "Archivez le dossier complet (qualification, screening, intégrité, contrat, évaluations, registre des commandes, note de décision) dans la structure partagée, avec la date de fin de conservation.",
          "Mettez à jour le tableau de portefeuille : statut, dates, score final, nouveau contrat.",
          "Notez les enseignements dans une page « retour d'expérience » pour le prochain accord-cadre.",
        ],
      },
    ],
    example: {
      title: 'Kerowa — note de clôture de FWA-2026-001 (extrait)',
      lines: [
        "Période : 01/04 – 30/09/2026. Commandes : 6 appels, 10 476 EUR cumulés sur un plafond de 12 000 EUR. Livraisons dans les 7 jours : 3 sur 6 ; conformes : 5 sur 6.",
        "Score final : 3,81/5 (4,50 → 4,32 → 3,81). Décision : renouvellement sous condition (avenant 01/10/2026), partage 70/30 avec B.",
        "Conservation : jusqu'au 30/11/2031 (5 ans après la fin du projet). Enseignement : exiger dès le départ un camion de secours en saison des pluies.",
      ],
    },
    result: "Livrable L7 terminé : revue de renouvellement documentée, contrat clôturé, dossier archivé et enseignements consignés.",
    tip: "La date de fin de conservation est calculée à partir de la clôture du projet : écrivez-la dans le dossier dès l'archivage, sinon personne ne saura quand détruire ou conserver.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // CAS RÉSOLU — KEROWA À WAU, DE BOUT EN BOUT
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu (1/5) — Les trois grossistes de Wau : décoder la situation de départ',
    scenario: "Rappel : Kerowa Santé à Gogrial doit sécuriser 6 mois de farine de maïs et de haricots (2,75 t par mois, 10 478 EUR) avec un fournisseur unique à Wau jamais qualifié, et dispose de trois candidats. L'attribution est prévue le 27 mars et la signature le 31 mars.",
    steps: [
      { title: '« Le fournisseur historique n\'a jamais de dossier »', body: "Fournisseur unique sans qualification : risque de rejet d'audit.", result: "Traité par P1 (dossier), P2 (screening), P4 (fiche et décision)." },
      { title: '« Un fournisseur est proposé par un transporteur »', body: "Signal à vérifier : recommandation d'un prestataire et dossier incomplet.", result: "Traité par P3 (signaux d'alerte, déclaration d'intégrité) et P4 (dossier incomplet = non qualifié)." },
      { title: '« L\'assistante achats est la sœur d\'une gérante »', body: "Conflit d'intérêts déclaré : à gérer, pas à cacher.", result: "Traité par P3 (déclaration, exclusion, validation de la coordinatrice pays)." },
      { title: '« Il faut un accord-cadre avant le 1er avril »', body: "Besoin récurrent, valeur 10 478 EUR, signature au bon niveau.", result: "Traité par P6 (grille, procédure) et P7 (rédaction du template)." },
    ],
    tip: "Toute situation de départ se décode ainsi : une phrase de terrain = un risque = une procédure = un livrable.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (2/5) — Dossiers et screening des trois grossistes',
    scenario: "Résultats des procédures 1, 2 et 3 au 18 mars 2026, avant la visite du 19 mars.",
    steps: [
      { title: 'Raisonnement', body: "Aucune évaluation n'est lancée avant d'avoir un dossier complet, un screening complet (société + personnes, quatre outils) et un dossier d'intégrité. Les trois sont indépendants des offres de prix." },
    ],
    table: {
      columns: ['Contrôle', 'A — Jur River Grains', 'B — Wau Central Provisions', 'C — Bahr el Ghazal Agro'],
      rows: [
        ['Dossier (pièces)', 'Complet sauf RIB (compte personnel)', 'Complet', 'Incomplet (4 pièces manquantes)'],
        ['Screening 17/03 (OpenSanctions, OFAC, UE, ONU)', 'Aucun résultat (société + 2 personnes)', 'Aucun résultat (société + 1 personne)', 'Quasi-correspondance sur agrégateur pour le gérant ; aucun résultat sur les 3 listes primaires'],
        ['Analyse de la quasi-correspondance', 'Sans objet', 'Sans objet', 'Faux positif : date de naissance 1986 / 1958, nom Mayen / Mayom, fonction et lieu différents'],
        ['Intégrité', 'Déclaration signée, aucun conflit', 'Conflit de Mary J. déclaré le 17/03, géré le 18/03', 'Non signé ; transporteur confirme l\'absence de commission'],
        ['Visite (19/03)', 'Faite', 'Faite', 'Non faite (accès refusé)'],
      ],
    },
    result: "A et B peuvent passer à l'évaluation ; C reste bloqué faute de dossier complet, malgré un screening sans cause d'inéligibilité.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (3/5) — Évaluation et décisions du 25 mars',
    scenario: "Les trois fiches sont remplies avec les règles du 23 mars (preuve pour chaque « Oui », case vide expliquée) et décidées le 25 mars.",
    steps: [
      { title: 'Raisonnement', body: "Les critères éliminatoires (lignes 22 et 23, screening) sont d'abord vérifiés, puis le taux de réponses (≥ 80 %), puis le score pondéré." },
    ],
    table: {
      columns: ['Fournisseur', 'Oui / Non / N.A.', 'Taux de réponses', 'Score /5', 'Décision (D50)', 'Commentaire'],
      rows: [
        ['A — Jur River Grains', '23 / 3 / 3', '90 %', '4,50', 'Oui (sous condition)', 'Conditions : attestation bancaire société, factures conformes, prix ferme 6 mois'],
        ['B — Wau Central Provisions', '22 / 4 / 3', '90 %', '4,18', 'Oui (sous condition)', 'Conflit de Mary J. géré et validé par la coordinatrice pays ; stock à confirmer en saison des pluies'],
        ['C — Bahr el Ghazal Agro', '12 / 4 / 13', '55 %', 'Non calculé', 'Non', 'Dossier incomplet : visite, attestation fiscale et bancaire, pièces d\'identité, code de conduite'],
      ],
    },
    result: "Deux fournisseurs qualifiés sous condition (4,50 et 4,18 sur 5), un non qualifié mais réexaminable : le but « 2 grossistes qualifiés avant le 27 mars » est atteint.",
    pitfall: "Qualifier C « pour avoir trois offres » alors que son dossier est incomplet : le taux de réponses de 55 % montre qu'il n'y a pas assez de matière pour décider.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (4/5) — L\'accord-cadre signé le 31 mars 2026',
    scenario: "Après l'attribution du 27 mars au fournisseur A (635 EUR/t contre 648 et 641), les conditions de qualification sont levées (attestation bancaire reçue le 26 mars), la note de décision est visée par la coordinatrice pays, et l'accord est rédigé dans le template.",
    steps: [
      { title: 'Ce que le template contient une fois rempli', actions: ["Section 1 : Kerowa Santé / Jur River Grains Ltd, représentés par Grace M. et Moses Lado Kenyi.", "Section 2 : farine de maïs et haricots secs, rendus entrepôt Gogrial ; exclusions listées.", "Section 3 : 01/04/2026 – 30/09/2026 ; renouvellement conditionné à une revue et à une remise en concurrence partielle."] },
      { title: 'Conditions commerciales et de revue', actions: ["Section 4 : 590 et 970 EUR/t fermes ; délai 7 jours ; PO requis pour toute commande ; révision par avenant, plafonnée à 5 %.", "Section 5 : évaluations les 30/06 et 31/08 ; score minimal 3/5 ; plan correctif sous ce seuil et en cas de baisse sur deux évaluations.", "Section 6 : résiliation immédiate en cas de screening positif ou de manquement d'intégrité ; préavis 30 jours sinon."] },
    ],
    result: "Accord FWA-2026-001 signé le 31/03/2026, fiche A mise à jour (B11, D11), tableau de portefeuille mis à jour, alerte J-90 posée au 02/07/2026.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu (5/5) — Le dossier final et ce que l\'auditeur verra',
    scenario: "Voici ce qui sera disponible dans le dossier du fournisseur A, dix-huit mois plus tard, lors d'un contrôle du bailleur.",
    steps: [
      { title: 'Ce que montre le dossier', actions: ["01_Qualification : pièces conformes, rapport de visite du 19/03, avis du référent technique.", "02_Screening : preuves datées des quatre outils (17/03, 30/06, 31/08), note de décision.", "03_Intégrité : déclarations de conflit d'intérêts, code de conduite, registre des cadeaux.", "04_Contrat : note de décision, accord FWA-2026-001, annexes, avenant.", "05_Evaluations : fiches du 25/03, 30/06 et 31/08, scores 4,50 / 4,32 / 3,81, plan correctif."] },
    ],
    example: {
      title: 'Ce que vous répondez à l\'auditeur',
      lines: [
        "« Le fournisseur a-t-il été vérifié avant la première commande ? » → Oui : screening du 17/03/2026, quatre outils, société et personnes, preuves PDF.",
        "« Qui a décidé et sur quelle base ? » → Fiche signée le 25/03/2026, score 4,50/5, conditions levées le 26/03.",
        "« Pourquoi avoir renouvelé ? » → Revue du 31/08, plan correctif, remise en concurrence avec deux autres fournisseurs qualifiés, partage 70/30.",
      ],
    },
    result: "Le cas est résolu : trois fiches complétées, un accord-cadre signé, un portefeuille suivi, un renouvellement non automatique, et un dossier défendable en audit.",
  },

  // ─────────────────────────────────────────────────────────────────────
  // EXERCICES
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Changement de propriétaire chez un fournisseur historique, Maiduguri, Nigeria',
    instructions: "Votre organisation travaille depuis quatre ans avec Bulama General Trading, un fournisseur local de Maiduguri qui livre du matériel de construction d'abris dans le cadre d'un contrat-cadre renouvelé chaque année sans incident (livraisons dans les délais, qualité constante, aucun signalement de conformité). En préparant le renouvellement annuel, votre assistant achats vous signale, dans les documents mis à jour, que Bulama General Trading a changé de propriétaire majoritaire il y a huit mois, suite au départ à la retraite du fondateur ; le nouveau document d'enregistrement mentionne un nouveau dirigeant : Ibrahim M. Bulama, fils du fondateur. Le screening de reconduction sur ce nom, sur OpenSanctions.org, fait remonter un résultat approximatif : une entité nommée « Ibrahim Bulama » apparaît, dans une source secondaire reprise par l'agrégateur, associée à une liste de vigilance régionale (non une liste OFAC / UE / ONU primaire) pour des soupçons non confirmés de détournement de fonds publics dans un État voisin, dossier vieux de six ans, sans condamnation. Le nom n'est pas identique (pas de deuxième initiale « M. »), le contexte géographique diffère légèrement (État voisin, pas Borno), l'accusation n'a jamais abouti à une condamnation, et le fournisseur a un historique irréprochable. Vous devez produire une décision documentée avant l'échéance du contrat-cadre, sans excès de prudence paralysant ni confort de l'habitude.",
    steps: [
      { title: 'Vérification approfondie (P2)', actions: ["Décrivez précisément les recherches complémentaires avant de trancher : quelles informations (date de naissance, deuxième prénom complet, adresse, numéro d'enregistrement d'entreprise) et auprès de qui ?", "Sur quelle(s) liste(s) officielle(s) (OFAC, UE, ONU) confirmez-vous en dernier recours, sachant que le résultat initial vient d'une liste régionale secondaire ?", "Remplissez une grille de comparaison identifiant par identifiant, avec les statuts possibles : faux positif, correspondance confirmée, indéterminé."] },
      { title: 'Qualification et décision documentée (P1, P3, P4)', actions: ["Complétez fiche-qualification-evaluation-fournisseur.xlsx : identification du fournisseur et date de vérification (bloc Identification), critères légaux concernés par ce screening, et zone « Commentaires additionnels » avec les sources consultées, le résultat exact et la justification de votre décision (renouveler, renouveler sous condition avec vérification complémentaire à échéance courte, ou suspendre dans l'attente de clarification).", "Une décision sans justification écrite n'est pas acceptée : renseignez aussi D50, les signatures et la date de prochaine validation."] },
      { title: 'Renouvellement du contrat-cadre (P7, P8)', actions: ["Complétez accord-cadre-framework-agreement-template.docx pour le renouvellement : durée, prix, clause de revue de performance reflétant une évaluation récente et une remise en concurrence au moins partielle, motifs de résiliation incluant le screening positif.", "Prévoyez l'obligation de notifier tout changement de propriétaire ou de dirigeant."] },
    ],
    tip: "Rédigez d'abord la grille d'identifiants et la décision, puis seulement les fichiers : la qualité de vos documents dépend de la qualité de votre raisonnement.",
    deliverable: "Les deux fichiers complétés (fiche xlsx et accord-cadre docx), avec une justification de la décision sur le cas de quasi-correspondance ne dépassant pas une demi-page.",
  },
  {
    type: 'concept',
    title: 'Exercice 1 — Éléments de correction (à consulter après avoir fait l\'exercice)',
    body: "Comparez votre travail à ces repères. D'autres choix sont acceptables s'ils sont justifiés par les identifiants obtenus et documentés. L'important n'est pas d'arriver à la même décision, mais d'arriver à une décision défendable.",
    example: {
      title: 'Vérification approfondie — ce qui est attendu',
      lines: [
        "Informations à obtenir : date de naissance, deuxième prénom complet (le « M. » absent de la source), adresse, nationalité, numéro d'enregistrement d'entreprise du fournisseur, pièce d'identité du nouveau dirigeant ; liste des autres sociétés qu'il détient ou dirige.",
        "Sources : documents d'enregistrement mis à jour, registre des sociétés, références clients, visite ; sur la liste régionale, la fiche complète de l'entité (date de naissance, fonction, lieu, statut).",
        "Confirmation en dernier recours : liste primaire OFAC (SDN, score abaissé), base de l'UE et liste consolidée de l'ONU, avec preuve datée ; l'agrégateur seul ne suffit jamais.",
      ],
    },
    bullets: [
      "Si les identifiants sont incompatibles et qu'aucune liste primaire ne signale le nom : faux positif documenté → renouveler, avec nouveau screening obligatoire à chaque changement de dirigeant ou de propriétaire.",
      "Si les identifiants manquent ou si le fournisseur tarde à répondre : renouveler sous condition à échéance courte (par exemple 30 jours) avec vérification complémentaire, ou suspendre les nouvelles commandes jusqu'à clarification. Ne pas bloquer sans justification proportionnée.",
      "Si un identifiant concorde sur une liste primaire : arrêt immédiat de toute transaction et escalade à la coordination pays et au siège, information du bailleur selon la convention.",
      "Dans la fiche : critères légaux 22, 23 et 24 renseignés avec preuve ; décision, sources, date et résultat exact dans « Commentaires additionnels » ; prochaine validation datée.",
      "Dans l'accord-cadre : évaluation récente et remise en concurrence au moins partielle (un ou deux autres fournisseurs de matériaux d'abris à Maiduguri), score minimal, clause de notification de changement de propriétaire, résiliation en cas de screening positif ; durée limitée, jamais de reconduction tacite.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Transposer à votre propre portefeuille fournisseurs',
    instructions: "Appliquez les 8 procédures à votre mission actuelle ou à la dernière que vous avez connue. Si vous n'êtes pas en poste, utilisez une mission dont vous connaissez bien le contexte. Respectez l'ordre : chaque livrable sert d'entrée au suivant.",
    steps: [
      { title: 'Étape 1 — Qualification (P1)', actions: ["Choisissez 3 de vos fournisseurs les plus importants (un historique, un récent, un candidat). Constituez leur dossier, complétez le bloc Identification de la fiche et le tableau de complétude."] },
      { title: 'Étape 2 — Screening (P2) et intégrité (P3)', actions: ["Screenez la société et les dirigeants sur OpenSanctions, OFAC, UE, ONU, conservez les preuves et tenez le registre de screening. Faites remplir les déclarations de conflit d'intérêts."] },
      { title: 'Étape 3 — Évaluation et décision (P4)', actions: ["Remplissez les 29 critères pour chacun, calculez le score pondéré, décidez et justifiez par écrit."] },
      { title: 'Étape 4 — Suivi du portefeuille (P5)', actions: ["Créez votre tableau de portefeuille avec formules d'alerte, dates de prochaine validation et fréquence de réévaluation."] },
      { title: 'Étape 5 — Contrat-cadre (P6, P7, P8)', actions: ["Choisissez une famille d'articles récurrente, appliquez la grille de décision, rédigez l'accord-cadre dans le template et planifiez la revue de renouvellement à J-90."] },
    ],
    tip: "Anonymisez les données sensibles (noms de fournisseurs, prix négociés) si vous partagez votre travail en dehors de votre organisation, et n'utilisez que de vraies recherches de screening sur de vrais fournisseurs.",
    deliverable: "Votre propre kit de gestion des fournisseurs (L1 à L7), réutilisable à chaque nouvelle affectation.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Chaque fournisseur a un dossier complet ou un tableau de complétude qui dit précisément ce qui manque, avec les pièces rangées dans la structure partagée.",
      "Le screening couvre la société ET chaque dirigeant et propriétaire, sur OpenSanctions puis OFAC, UE et ONU, avec une preuve datée par recherche et le score minimal noté.",
      "Toute quasi-correspondance est traitée par une grille d'identifiants et une décision écrite : ni blocage automatique, ni oubli.",
      "Les déclarations de conflit d'intérêts sont signées avant l'ouverture des offres, et tout conflit déclaré est géré par écrit.",
      "Les 29 critères sont renseignés avec une preuve par « Oui », les cases vides sont expliquées, la synthèse est cohérente (G6 + G7 + G8 = 29) et le taux de réponses atteint 80 %.",
      "La décision (Qualifié / Qualifié sous condition / Rejeté) est datée, justifiée, avec chaque condition associée à une date et un responsable, et la fiche est signée par le membre supply et le référent technique.",
      "Le tableau de portefeuille contient les dates de prochaine validation, les scores comparés et les alertes, et chaque dégradation a un plan correctif.",
      "L'accord-cadre remplit les 7 sections du template, a une durée limitée, une clause de revue de performance, une remise en concurrence au moins partielle avant renouvellement, et aucune reconduction tacite.",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // PIÈGES, RÉCAPITULATIF, CLÔTURE
  // ─────────────────────────────────────────────────────────────────────
  {
    type: 'warning',
    title: 'Erreurs de terrain fréquentes — et comment les éviter',
    items: [
      "Ne screener qu'à l'entrée en relation, jamais après : un fournisseur qualifié il y a trois ans peut avoir changé de propriétaire ou de raison sociale. → Re-screenez à chaque réévaluation et à chaque changement d'actionnaire ou de dirigeant, et imposez la notification par contrat.",
      "Renouveler un contrat-cadre sans remise en concurrence : la facilité du quotidien fait oublier l'échéance. → Alerte à J-90, évaluation, comparaison avec un ou deux autres fournisseurs qualifiés, jamais de reconduction tacite.",
      "Ignorer une évaluation défavorable « parce que c'est toujours ce fournisseur ». → Deux baisses consécutives = plan d'action corrective documenté, même si le score reste au-dessus de 3/5.",
      "Traiter toute quasi-correspondance comme un blocage automatique, ou au contraire l'ignorer pour gagner du temps. → Grille d'identifiants, confirmation sur liste primaire, décision écrite.",
      "Se fier à un agrégateur gratuit comme source finale de décision. → OpenSanctions pour balayer ; OFAC, UE ou ONU pour décider.",
      "Garder le dossier de qualification en papier ou sur un poste individuel. → Dossier centralisé, accessible à l'équipe achats, avec une structure normalisée par fournisseur.",
      "Ne pas dater les décisions de qualification et de screening. → Chaque ligne, chaque preuve et chaque signature porte une date exploitable en audit, antérieure à la première commande.",
      "Qualifier « sous réserve » un dossier incomplet. → Un dossier incomplet n'est pas qualifié ; un fournisseur « sous condition » est un fournisseur dont le dossier est complet et dont les conditions ont une date.",
      "Accepter un RIB au nom d'une personne ou signer avec un conflit d'intérêts non déclaré. → Compte au nom de la société uniquement ; déclaration signée avant l'ouverture des offres.",
    ],
  },
  {
    type: 'checklist',
    title: 'Routine mensuelle : garder le portefeuille vivant',
    items: [
      "Ouvrez le tableau de portefeuille : traitez toute alerte « ÉCHUE » ou « À planifier » et tout score en baisse ou sous 3/5.",
      "Vérifiez le registre des appels de commande : consommation du plafond, écarts de délai, lots non conformes, factures conformes.",
      "Passez en revue les conditions de qualification ouvertes : date limite, responsable, pièce reçue ou suspension.",
      "Mettez à jour le registre de screening : nouveaux fournisseurs, nouveaux dirigeants, nouveaux documents d'enregistrement reçus.",
      "Relisez le registre des cadeaux et hospitalités et les signaux d'alerte de la période ; transmettez sans délai tout signalement au point focal.",
      "Vérifiez les alertes à J-90 des accords-cadres et l'avancement de la revue de renouvellement.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez constitué les dossiers de qualification de trois fournisseurs (pièces, vérification d'authenticité, références, visite, tableau de complétude) et complété le bloc Identification de la fiche.",
      "Vous avez réalisé le screening de la société et des dirigeants sur OpenSanctions, OFAC, UE et ONU, conservé les preuves datées et traité une quasi-correspondance avec une grille d'identifiants.",
      "Vous avez mis en place le dossier d'intégrité : déclarations, gestion d'un conflit d'intérêts, clauses, registre des cadeaux, signaux d'alerte.",
      "Vous avez rempli la fiche en 29 critères, calculé un score pondéré, et statué Qualifié, Qualifié sous condition ou Rejeté avec une justification écrite.",
      "Vous avez construit le tableau de suivi du portefeuille avec échéances, tendances, alertes et plan correctif.",
      "Vous avez décidé entre achat ponctuel et accord-cadre, rédigé l'accord dans le template et planifié sa revue.",
      "Vous avez conduit la revue de renouvellement : score récent, remise en concurrence partielle, décision, avenant et clôture documentée.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais constituer un dossier de qualification fournisseur complet avant toute première commande.",
      "Je sais où et comment effectuer un screening d'inéligibilité sur les listes OFAC, UE et ONU, ainsi qu'un premier balayage sur un agrégateur comme OpenSanctions.org, et en conserver une preuve datée.",
      "Je sais documenter par écrit une décision sur un cas de quasi-correspondance, qu'elle aboutisse à un blocage ou à une validation.",
      "Je sais appliquer la politique anti-corruption à un fournisseur (déclarations, conflit d'intérêts, clauses, signalement).",
      "Je sais évaluer un fournisseur avec la fiche en 29 critères, interpréter la synthèse et le score, et réagir à une alerte sous seuil.",
      "Je sais dans quelles conditions établir un contrat-cadre plutôt qu'un achat ponctuel, et ce qu'implique un renouvellement correctement géré (revue de performance + remise en concurrence).",
      "J'ai complété une fiche de qualification et un accord-cadre avec les templates fournis, et mon tableau de portefeuille est à jour : ils serviront de base au module suivant sur les stocks et entrepôts.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Prochain module : « Gestion des Stocks & Entrepôts ». Vous y organiserez la réception et le contrôle qualité des marchandises livrées par vos fournisseurs qualifiés, la gestion des stocks par lot et par date de péremption (FEFO), les inventaires physiques et la réconciliation avec le système ERP.",
  },
]
