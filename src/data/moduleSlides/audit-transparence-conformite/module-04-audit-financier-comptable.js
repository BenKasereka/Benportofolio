// Module 04 — Audit Financier & Comptable
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (grille-verification-pieces-comptables.xlsx, rapport-rapprochement-bancaire-audit.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (audit financier de l'antenne de Beni, Nord-Kivu, de l'ONG fictive
// « Horizon Santé Grands Lacs », suite du module 01), avec exemples remplis,
// résultat attendu, astuces et erreurs à éviter.
// Les organisations, bailleurs, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Audit Financier & Comptable',
    hook: "Un dossier financier peut être tamponné, signé aux trois niveaux requis et parfaitement classé — et couvrir une dépense qui n'a jamais eu lieu. À la fin de ce module, vous saurez produire ce qui fait la différence entre un auditeur qui coche et un auditeur qui démontre : un échantillon de pièces orienté risque et sa note méthodologique, une grille de vérification complétée jusqu'au taux de conformité, un constat d'une demi-page sur un fractionnement de dépenses, un rapport de rapprochement bancaire multi-mois qui documente deux anomalies avec conclusion et recommandations, ainsi que le contrôle de la caisse et des avances.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Construire un échantillon de pièces comptables orienté risque à partir d'une extraction multi-mois du grand livre, en produisant une note méthodologique (population, seuil de matérialité, strates, tirage) qui rend la sélection défendable.",
      "Appliquer la méthode du 3-way match (contrat ou bon de commande, facture, preuve de paiement) à chaque pièce de l'échantillon et apprécier la légitimité réelle de la dépense, en produisant la grille grille-verification-pieces-comptables.xlsx renseignée (colonnes G à K) avec une justification par appréciation.",
      "Contrôler l'éligibilité de chaque dépense à la subvention qui la finance (période, ligne budgétaire, règles spécifiques du bailleur), en produisant la colonne L de la grille et un tableau des montants inéligibles chiffrés avec le traitement proposé.",
      "Consolider le taux de conformité et repérer un fractionnement de dépenses sur plusieurs mois dans l'onglet Synthese-Patterns, en produisant un constat d'audit d'une demi-page (fait, règle contournée, risque, recommandation).",
      "Réaliser un rapprochement bancaire orienté détection sur au moins 3 mois consécutifs, en produisant le rapport rapprochement-bancaire-audit.docx complété : éléments de routine, deux anomalies documentées, conclusion et recommandations.",
      "Contrôler la caisse par un comptage inopiné et les avances au personnel par une balance âgée, en produisant un procès-verbal de comptage d'une page et un tableau d'ancienneté des avances assorti de constats.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de comptabilité : c'est le déroulé complet d'un audit financier de terrain, dans l'ordre où vous le conduirez. Chaque procédure se termine par une pièce du dossier de travail, construite sur un seul cas fil rouge, depuis la demande du grand livre jusqu'au rapport signé.",
      "Le cas fil rouge : vous êtes Amani K., auditeur(rice) interne de « Horizon Santé Grands Lacs » (HSGL), l'ONG de santé fictive que vous connaissez depuis le module 01. Après la mission de Goma, le comité d'audit vous confie, le 13 juillet 2026, l'audit financier de l'antenne de Beni (Nord-Kivu, 14 employés) sur la période du 1er octobre 2025 au 31 mars 2026. Vous n'avez jamais travaillé à Beni : aucune menace d'indépendance à déclarer.",
    ],
    bullets: [
      "Livrable 1 — La note méthodologique d'échantillonnage : population de 214 transactions, strates, seuil de matérialité, tirage figé.",
      "Livrable 2 — La grille de vérification des pièces comptables (onglet Grille) complétée sur 35 transactions : 3-way match et légitimité.",
      "Livrable 3 — Le tableau des dépenses inéligibles : période, ligne budgétaire, règles du bailleur, montants et traitement.",
      "Livrable 4 — L'onglet Synthese-Patterns complété : taux de conformité et alertes de fractionnement par fournisseur et par mois.",
      "Livrable 5 — Le constat d'audit d'une demi-page sur le fractionnement de dépenses.",
      "Livrable 6 — Le rapport de rapprochement bancaire orienté audit, complété et signé.",
      "Livrable 7 — Le procès-verbal de comptage de caisse.",
      "Livrable 8 — Le tableau d'ancienneté des avances au personnel et son constat.",
    ],
  },
  {
    type: 'concept',
    title: "Le cas fil rouge : HSGL, antenne de Beni",
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. L'organisation, les personnes, les fournisseurs et les montants sont fictifs, mais construits sur des configurations réelles d'antennes de terrain dans l'Est de la RDC. Les seuils et délais viennent du manuel de procédures financières de HSGL (fictif) : dans votre organisation, lisez toujours les vôtres.",
    table: {
      columns: ['Personne', 'Fonction', 'Rôle dans la mission'],
      rows: [
        ['Hélène V.', "Présidente du comité d'audit", "Commanditaire, déjà rencontrée au module 01"],
        ['Fatou S.', 'Auditrice interne senior', "Auditrice associée : revue de second niveau de vos constats"],
        ['Clarisse M.', 'Finance Officer, antenne de Beni', 'Auditée : tient la caisse, les livres et les rapprochements'],
        ['Moïse B.', 'Field Coordinator, antenne de Beni', "Approuve par écrit les dépenses de plus de 500 USD"],
        ['Ruth B.', 'Finance Manager (Goma)', "Supervise fonctionnellement la finance de Beni"],
        ['Joseph T.', 'Directeur Pays', 'Destinataire de la restitution'],
      ],
    },
    example: {
      title: 'Chiffres et règles du cas',
      lines: [
        "Période auditée : 1er octobre 2025 – 31 mars 2026 (6 mois). Dépenses payées localement (hors paie, loyers et achats centralisés au siège) : 214 transactions, 58 400 USD.",
        "Deux projets : « Meridian — santé maternelle » (mise en œuvre du 01/01/2026 au 31/12/2026) et « ECHO — urgence sanitaire Beni » (du 01/07/2025 au 30/06/2026).",
        "Règle de caisse (manuel de procédures financières, art. 4.3) : au-delà de 500 USD, toute dépense exige la validation du Finance Officer, l'approbation écrite préalable du Field Coordinator et la mise en concurrence d'au moins deux fournisseurs.",
        "Plafond de caisse : 1 500 USD. Avances au personnel : justification sous 7 jours ouvrables, aucune nouvelle avance tant que la précédente n'est pas soldée.",
        "Calendrier : demande de données le 23 juillet 2026, lettre de mission signée le 20 juillet, travail sur site du 3 au 7 août 2026, restitution le 14 août.",
      ],
    },
    pitfall: "Appliquer au pied de la lettre les seuils d'un autre bureau. À Goma, le Coordinateur signe au-dessus de 1 000 USD ; à Beni, le seuil est de 500 USD. L'auditeur teste toujours contre la règle de l'entité auditée, citée avec son article.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Le 3-way match : juger la légitimité, pas seulement la complétude',
    body: [
      "En audit financier ONG, la question qui compte n'est jamais « est-ce que le dossier est complet ? » : elle est « est-ce que cette dépense a réellement eu lieu, pour le motif indiqué, au montant indiqué ? ». Le 3-way match (rapprochement à trois voies) confronte trois documents qui, pris séparément, ne prouvent rien mais qui, recoupés, racontent l'histoire complète d'une transaction : le contrat ou bon de commande, la facture, et la preuve de paiement.",
      "Confronter, c'est comparer chiffre par chiffre et ligne par ligne : le montant, le bénéficiaire, la référence, la quantité et la chronologie. Un auditeur qui se contente de vérifier que les trois pièces existent valide un dossier frauduleux aussi facilement qu'un dossier honnête.",
    ],
    example: {
      title: 'Le trio du garage — TX-BEN-021, 15 janvier 2026',
      lines: [
        "Bon de commande n° BC-0045 : Garage Bin Auto, révision de deux véhicules, 2 480 USD.",
        "Facture n° 2218 : Garage Bin Auto, 2 780 USD (« pièces et main-d'œuvre »), sans référence au BC.",
        "Avis de virement du 15 janvier : 2 780 USD vers Garage Bin Auto.",
        "Lecture : les trois pièces existent, le fournisseur est le bon — mais la facture dépasse l'engagement de 300 USD (12,1 %) et le virement a payé ce surplus sans avenant. Dossier complet, dossier incohérent.",
      ],
    },
    highlight: "La majorité des dossiers financiers ONG qui posent problème ne sont pas des dossiers vides : ce sont des dossiers complets en apparence — tampon, signature, les trois documents présents — où le rapprochement révèle un écart.",
  },
  {
    type: 'stat-callout',
    stat: '3 documents',
    caption: 'Le 3-way match : contrat ou bon de commande, facture, preuve de paiement',
    context: "Pris séparément, aucun ne prouve rien. Recoupés, ils racontent l'histoire complète d'une transaction — et c'est dans les écarts entre eux que se cachent la surfacturation, le paiement à un tiers et la dépense fictive.",
  },
  {
    type: 'comparison-table',
    title: "Ce que chaque document prouve, une fois croisé aux deux autres",
    columns: ['Document', "Ce qu'il prouve seul", "Ce qu'il faut vérifier en le croisant", "Exemple d'écart à Beni"],
    rows: [
      ['Contrat / bon de commande', "Qu'un engagement a été pris, à un prix et des conditions donnés", "Le prix facturé correspond-il au prix contractuel ? La quantité livrée correspond-elle à la quantité commandée ?", "BC de 800 USD pour 40 unités ; facture de 900 USD pour 45 unités"],
      ['Facture', "Qu'un fournisseur réclame un paiement", "La facture porte-t-elle la référence du contrat ? Le fournisseur facturé est-il bien celui contractualisé ?", "Facture au nom d'un autre établissement que celui du contrat"],
      ['Preuve de paiement (reçu de caisse, avis de virement, souche de chèque)', "Qu'un décaissement a eu lieu", "Le montant payé correspond-il exactement à la facture ? Le bénéficiaire est-il bien le fournisseur facturé, pas un tiers ?", "Virement à un particulier pour la facture d'une société"],
    ],
  },
  {
    type: 'concept',
    title: 'Conformité formelle et légitimité réelle : deux choses différentes',
    body: [
      "Une pièce peut être formellement irréprochable — tamponnée, signée par les trois niveaux de validation requis, classée au bon endroit — et couvrir une dépense qui n'a jamais eu lieu, un service jamais rendu, un bien jamais livré. Inversement, une pièce imparfaite sur la forme (facture sans en-tête officiel d'un petit fournisseur local qui n'en possède pas) peut couvrir une dépense parfaitement légitime.",
      "Le rôle de l'auditeur n'est pas de noter la présentation d'un dossier : c'est de statuer sur la réalité économique de la transaction. Quand le montant ou le fournisseur le justifie, confirmez l'existence de la transaction par un moyen indépendant des pièces elles-mêmes.",
    ],
    bullets: [
      "Un appel ou une visite au fournisseur : existe-t-il, vend-il ce produit, a-t-il émis cette facture ?",
      "L'observation du bien ou du site livré : le bien est-il en stock, en usage, étiqueté ?",
      "Le témoignage du bénéficiaire final : la formation a-t-elle eu lieu, les kits ont-ils été reçus ?",
    ],
    tip: "Sur une facture manuscrite d'un petit fournisseur sans en-tête, ne rejetez pas la pièce pour sa forme : cherchez la preuve de réalité (bon de réception signé, produit visible) et notez la faiblesse formelle sans en faire un constat de légitimité.",
  },
  {
    type: 'comparison-table',
    title: 'Six signaux d\'alerte à chercher en croisant les pièces',
    columns: ['Signal', 'Ce que cela peut cacher', 'Test à faire tout de suite'],
    rows: [
      ['Paiement antérieur à la facture', "Un paiement hors procédure, avant la preuve de la dette", "Comparer la date de la facture et la date du paiement ; demander le BC"],
      ['Quantité ou prix facturé supérieur au BC ou au bon de réception', 'Surfacturation', "Rapprocher BC, bon de réception et facture ligne par ligne"],
      ['Bénéficiaire du paiement différent du fournisseur facturé', 'Détournement par un tiers', "Comparer le nom de l'avis de virement ou du reçu à celui de la facture"],
      ['Montants ronds, ou juste sous un seuil', 'Montant calibré, fractionnement', "Trier par fournisseur puis par montant sur plusieurs mois"],
      ['Fournisseur sans coordonnées vérifiables (pas de NIF ni de RCCM, adresse floue)', 'Fournisseur fictif ou lié au personnel', "Appeler, visiter, rechercher une adresse ou un téléphone commun avec un employé"],
      ['Même facture payée deux fois', 'Doublon de paiement', "Trier par numéro de facture puis par montant et bénéficiaire"],
    ],
  },
  {
    type: 'comparison-table',
    title: "Le rapprochement bancaire d'auditeur n'est pas celui de routine",
    columns: ['Critère', 'Rapprochement de routine (Finance Officer)', "Rapprochement d'audit"],
    rows: [
      ['Objectif', "Faire concorder les soldes pour clôturer le mois proprement", "Chercher activement des anomalies et des patterns"],
      ['Horizon de travail', 'Mois par mois, avant de passer au suivant', "Plusieurs mois mis côte à côte : un seul mois raconte un instantané, plusieurs racontent une tendance"],
      ['Cible', "Les écarts de solde (chèques en circulation, virements en transit, frais non comptabilisés)", "Les transactions elles-mêmes, y compris celles qui ne créent aucun écart de solde"],
      ['Explications', "Acceptées de l'équipe, qui les produit chaque jour", "Testées : pièce justificative demandée, cohérence date, montant, bénéficiaire et motif, explication consignée par écrit"],
      ['Livrable', 'Un état de rapprochement signé', 'Un rapport qui devient la preuve d\'audit opposable : anomalies, explications, appréciation, conclusion'],
    ],
  },
  {
    type: 'concept',
    title: "Contrôler l'éligibilité budgétaire d'une dépense",
    body: [
      "Une dépense peut être parfaitement légitime — le bien est livré, le service rendu, le 3-way match propre — et malgré tout inéligible au regard des règles d'un bailleur. C'est une couche de contrôle distincte, trop souvent confondue avec le contrôle de légitimité. Vérifiez systématiquement trois choses pour chaque dépense imputée à une subvention.",
    ],
    table: {
      columns: ['Test', 'Question', 'Pièce à consulter', 'Exemple Beni'],
      rows: [
        ['Période', "La dépense est-elle intervenue dans la période de mise en œuvre de l'accord ?", "Convention, date de la facture ou du service", "Dépense du 29/12/2025 imputée à Meridian, dont la période commence le 01/01/2026"],
        ['Ligne budgétaire', "Est-elle imputée à la ligne qui correspond à sa nature ?", "Budget approuvé, intitulé des lignes", "Carburant imputé en « Santé - Médicaments et consommables »"],
        ['Règles spécifiques', "Respecte-t-elle plafonds, origine des fournisseurs, catégories interdites ?", "Articles de la convention, guide du bailleur", "Per diem de 50 USD pour un plafond de 35 USD"],
      ],
    },
    highlight: "Détecter l'inéligibilité tôt, pendant l'exécution, est infiniment moins coûteux que la découvrir à l'audit final du bailleur : une dépense inéligible détectée après la clôture du rapport devient un coût non remboursable, parfois des dizaines de milliers de dollars sur un seul projet.",
  },
  {
    type: 'concept',
    title: 'Le fractionnement de dépense : ce qu\'il est et comment il se voit',
    body: [
      "Le fractionnement consiste à diviser artificiellement une dépense en plusieurs paiements plus petits pour rester sous un seuil d'autorisation ou de mise en concurrence. Selon l'intention, c'est une négligence grave ou une fraude. Par construction, il ne se voit jamais dans un mois pris seul : chaque transaction y semble parfaitement en règle, signée, complète, sous le seuil.",
      "Il devient visible quand on aligne plusieurs mois et qu'on trie par fournisseur, pas par date. Un grand livre est classé par date : c'est exactement l'ordre qui masque le pattern.",
    ],
    bullets: [
      "Un même fournisseur apparaît trois ou quatre fois par mois, mois après mois.",
      "Les montants frôlent le seuil sans jamais le dépasser (ici entre 92 % et 99 % de 500 USD).",
      "Le cumul mensuel, lui, dépasse largement le seuil : c'est la dépense réelle, celle qui aurait déclenché une autre procédure.",
      "Aucune des transactions n'a déclenché d'approbation supérieure ni de mise en concurrence.",
    ],
    pitfall: "Conclure à la fraude parce que le pattern est parfait. Les faits objectifs établissent un contournement du seuil ; l'intention, elle, ne s'établit qu'avec des éléments supplémentaires (explications, lien avec le fournisseur, destination des biens). Vous qualifiez le risque, vous ne jugez pas la personne.",
  },
  {
    type: 'concept',
    title: 'Un échantillon orienté risque, pas un tirage au hasard',
    body: [
      "Un échantillon purement aléatoire traite une dépense de 15 USD en fournitures exactement comme un paiement fournisseur de 8 000 USD : en audit, le temps disponible doit aller vers ce qui présente le plus de risque. On croise donc plusieurs critères, appelés strates, et on garde un tirage aléatoire pour le reste afin de conserver une couverture représentative.",
      "Documentez votre méthode dans votre dossier de travail : un échantillon dont la logique n'est pas expliquée est un échantillon dont la représentativité peut être contestée.",
    ],
    table: {
      columns: ['Strate', 'Critère de sélection', 'Pourquoi'],
      rows: [
        ['1. Matérialité', 'Toutes les transactions au-dessus du seuil que vous fixez (ex. 500 USD)', "Le plus gros risque financier est couvert à 100 %"],
        ['2. Nouveaux fournisseurs', 'Toutes les transactions avec un fournisseur apparu dans les 3 derniers mois', "Le risque de fournisseur fictif est maximal à l'entrée"],
        ['3. Espèces', 'Toutes les transactions en espèces', "Plus vulnérables que les virements traçables"],
        ['4. Aléatoire', 'Un tirage au hasard parmi les petites transactions restantes', 'Couverture représentative du reste de la population'],
      ],
    },
    tip: "Un échantillon orienté risque ne se généralise pas : un taux de conformité calculé dessus vaut pour l'échantillon, pas pour la population. Écrivez-le dans votre note.",
  },
  {
    type: 'concept',
    title: 'Caisse et avances : là où se loge la fraude de proximité',
    body: [
      "Les espèces et les avances au personnel sont les deux zones où l'argent sort sans laisser la trace d'un virement. Elles se contrôlent par des gestes différents de ceux du grand livre : un comptage physique inopiné pour la caisse, une balance âgée pour les avances. Un écart de solde n'est pas le seul signal : une caisse qui « tombe juste » peut contenir des bons non enregistrés ou des reconnaissances de dette.",
    ],
    table: {
      columns: ['Contrôle', 'Question', "Signal d'alerte"],
      rows: [
        ['Comptage de caisse inopiné', "Les espèces et pièces en caisse égalent-elles le solde du livre ?", "Écart, bon de sortie non enregistré, reconnaissance de dette, caisse non fermée pendant le comptage"],
        ['Journal de caisse sur plusieurs mois', "Le plafond est-il respecté ? Les soldes sont-ils plausibles ?", "Solde supérieur au plafond, solde négatif, écritures antidatées, gros décaissement sans approbation"],
        ['Balance âgée des avances', "Chaque avance est-elle justifiée dans le délai ? Une nouvelle avance a-t-elle été remise avant le solde de la précédente ?", "Avance ouverte au-delà du délai, avances en chaîne, reliquat non remboursé"],
      ],
    },
    tip: "Le comptage de caisse perd toute valeur s'il est annoncé : arrivez à l'ouverture, fermez la caisse, et comptez devant la personne qui la tient.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé à maîtriser dès ce module',
    terms: [
      { term: '3-way match', definition: "Rapprochement croisé entre le contrat ou bon de commande, la facture et la preuve de paiement, pour juger la réalité et la légitimité d'une transaction." },
      { term: 'Reconciling item', definition: "Élément qui explique un écart entre deux soldes (bancaire et comptable) dans un rapprochement de routine : chèque en circulation, virement en transit, frais non comptabilisés." },
      { term: "Seuil d'autorisation", definition: "Montant au-delà duquel une dépense nécessite une validation hiérarchique supplémentaire ou une procédure d'achat renforcée (mise en concurrence, appel d'offres)." },
      { term: 'Fractionnement de dépense', definition: "Division artificielle d'une dépense en plusieurs paiements plus petits pour rester sous un seuil d'autorisation ou de mise en concurrence : une négligence grave ou une fraude selon l'intention." },
      { term: 'Éligibilité budgétaire', definition: "Conformité d'une dépense aux règles spécifiques d'un bailleur (période, ligne budgétaire, nature, plafonds), distincte de sa légitimité comptable de base." },
      { term: 'Seuil de matérialité', definition: "Montant à partir duquel une transaction est automatiquement retenue dans l'échantillon, fixé et justifié par l'auditeur (par exemple 500 USD)." },
      { term: 'Strate', definition: "Sous-ensemble de la population défini par un critère de risque (montant, nouveau fournisseur, espèces) dans lequel on sélectionne les transactions." },
      { term: 'Chèque en circulation', definition: "Chèque émis et comptabilisé mais pas encore débité par la banque : il explique un solde bancaire supérieur au solde du livre." },
      { term: 'Dépôt en transit', definition: "Encaissement ou versement comptabilisé dans le livre mais pas encore crédité par la banque à la date du relevé." },
      { term: 'Balance âgée des avances', definition: "Liste des avances ouvertes classées par ancienneté, comparée au délai de justification prévu par la politique de l'organisation." },
    ],
  },

  // ───────────────────────── 5. LE CŒUR : les procédures ─────────────────────────

  // ── Procédure 1 — Échantillon orienté risque ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Demander le grand livre, la caisse et les relevés sur six mois d\'un seul coup',
    intro: "Pourquoi : un pattern suspect n'est souvent visible qu'en alignant plusieurs mois. Si l'équipe vous livre « mois par mois au fil de l'eau », vous ne verrez jamais ce que cet audit cherche. Entrées : la lettre de mission signée (20 juillet 2026), le périmètre et la période auditée.",
    steps: [
      {
        title: 'Rédigez une demande de documents écrite, adressée à la Finance Officer',
        actions: [
          "1. Grand livre des dépenses (caisse, banque) du 01/10/2025 au 31/03/2026, au format Excel, une ligne par écriture : n° de pièce, date, fournisseur ou bénéficiaire, montant, ligne budgétaire, projet.",
          "2. Journal de caisse et relevés bancaires des six mois, en PDF.",
          "3. Liste des fournisseurs enregistrés avec leur date de création.",
          "4. Manuel de procédures financières (seuils, article 4.3) et organigramme de l'antenne.",
          "5. Conventions et budgets approuvés des projets Meridian et ECHO.",
        ],
      },
      {
        title: 'Imposez les six mois d\'un coup et une échéance précise',
        body: "Précisez : « la totalité des écritures, sans sélection préalable par l'équipe », avec une date et une heure limites de réception.",
      },
      {
        title: 'Mettez la Finance Manager en copie',
        body: "Ruth B. supervise la finance de Beni : sa copie évite qu'une demande de cette taille soit retardée « faute d'autorisation ».",
      },
    ],
    example: {
      title: 'Courriel envoyé le jeudi 23 juillet 2026, 9h15',
      lines: [
        "À : Clarisse M. — Cc : Ruth B., Moïse B. — Objet : Audit financier Beni — documents à fournir avant le lundi 27 juillet, 12h00.",
        "« Bonjour Clarisse, dans le cadre de l'audit financier de l'antenne (lettre de mission du 20 juillet), merci de m'envoyer : (1) le grand livre des dépenses d'octobre 2025 à mars 2026 au format Excel, complet, les six mois dans un seul fichier ; (2) le journal de caisse et les six relevés bancaires ; (3) la liste des fournisseurs avec leur date de création ; (4) le manuel de procédures financières et l'organigramme ; (5) les conventions et budgets Meridian et ECHO. Je ne demande aucune sélection de votre part : j'ai besoin de tout pour construire mon échantillon. Merci d'avance, Amani K. »",
      ],
    },
    result: "Un courriel daté, cinq familles de pièces demandées, une échéance fixée et la hiérarchie informée. Contrôle : un tiers peut reconstituer plus tard ce que vous avez demandé et à quelle date.",
    pitfall: "Accepter « on vous envoie octobre aujourd'hui et les autres mois dès qu'ils sont clôturés ». Les mois livrés séparément empêchent précisément la vue multi-mois qui révèle le fractionnement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: "Vérifier l'exhaustivité de l'extraction avant de l'analyser",
    intro: "Pourquoi : si 20 % des écritures manquent, tout votre échantillon repose sur du sable. Entrées : l'extraction Excel reçue le 27 juillet et la balance générale de la période.",
    steps: [
      {
        title: 'Mettez l\'extraction sous forme de tableau',
        actions: [
          "1. Sélectionnez une cellule de l'extraction, puis Insertion > Tableau (Ctrl+L).",
          "2. Nommez le tableau T_GL (onglet Création de tableau, champ « Nom du tableau »).",
          "3. Gardez l'extraction brute dans un onglet que vous ne modifiez plus ; travaillez sur une copie.",
        ],
      },
      {
        title: 'Contrôlez le total et le nombre de lignes',
        actions: [
          "Total : =SOMME(T_GL[Montant]) puis comparez au total des comptes de dépenses de la balance générale sur la même période.",
          "Nombre de lignes : =NBVAL(T_GL[Réf]).",
          "Écart toléré : moins de 1 % ; au-delà, demandez l'explication par écrit avant d'aller plus loin.",
        ],
      },
      {
        title: 'Contrôlez la séquence et les doublons',
        actions: [
          "Ajoutez la colonne =SI(NB.SI(T_GL[Réf];[@Réf])>1;\"DOUBLON\";\"\") et filtrez-la.",
          "Triez par date : toutes les dates doivent tomber entre le 01/10/2025 et le 31/03/2026.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Résultat', 'Verdict'],
      rows: [
        ['Nombre de lignes', '214 transactions', 'Cohérent avec le journal'],
        ['Total extraction', '58 400,00 USD', '—'],
        ['Total balance générale (comptes de dépenses concernés)', '58 650,00 USD', 'Écart de 250,00 USD (0,43 %)'],
        ['Explication obtenue', "250,00 USD de frais bancaires imputés au même compte hors extraction", 'Écart expliqué, sous 1 %'],
        ['Doublons de n° de pièce / dates hors période', '0 / 0', 'Extraction exploitable'],
      ],
    },
    result: "Une extraction dont l'exhaustivité est démontrée par un rapprochement chiffré avec la balance, archivée dans le dossier de travail. Vous pouvez désormais l'appeler « la population ».",
    pitfall: "Passer au tri sans avoir rapproché l'extraction de la balance. Si l'équipe a retiré quelques lignes « pour alléger le fichier », vous ne le saurez jamais.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Passer toute la population au crible par fournisseur, pas par date',
    intro: "Pourquoi : un grand livre est classé par date, ce qui masque exactement les patterns de fractionnement et de bénéficiaire récurrent. Avant de tirer l'échantillon, faites une analyse de la population entière. Entrée : le tableau T_GL vérifié.",
    steps: [
      {
        title: 'Ajoutez une colonne « Mois » et construisez un premier tableau croisé',
        actions: [
          "1. Colonne Mois : =TEXTE([@Date];\"aaaa-mm\").",
          "2. Insertion > Tableau croisé dynamique : Fournisseur en lignes, Nombre de n° de pièce et Somme du montant en valeurs.",
          "3. Triez par nombre de transactions décroissant.",
        ],
      },
      {
        title: 'Construisez le second tableau croisé fournisseur × mois',
        actions: [
          "Fournisseur en lignes, Mois en colonnes, Nombre de pièces en valeurs ; filtre sur Montant < 500.",
          "Repérez toute ligne qui affiche 3 ou plus dans plusieurs mois consécutifs.",
        ],
      },
      {
        title: 'Repérez les bénéficiaires absents de la liste des fournisseurs',
        actions: [
          "Colonne : =SI(ESTNA(RECHERCHEV([@Fournisseur];Fournisseurs[Nom];1;FAUX));\"NON ENREGISTRÉ\";\"\").",
          "Filtrez « NON ENREGISTRÉ » : chaque ligne est un point à expliquer.",
        ],
      },
    ],
    table: {
      columns: ['Fournisseur', 'Nombre', 'Montant (USD)', 'Plus petit – plus grand', 'Lecture'],
      rows: [
        ['Ets. Mama Furaha', '23', '11 038', '460 – 495', '3 à 4 par mois, aucune au-dessus de 500 : à tester à 100 %'],
        ['Ets. Kavira Fournitures', '14', '2 980', '35 – 420', 'Petits achats variés : rien à signaler'],
        ['Station Mwangaza (carburant)', '12', '2 760', '40 – 1 120', 'Cycle de carburant régulier, cohérent'],
        ['Pharmacie Centrale de Beni', '9', '4 120', '48 – 1 860', 'Achats médicaux, normal pour un projet santé'],
      ],
    },
    result: "Une liste courte de fournisseurs et de bénéficiaires à tester : ici, un seul, Ets. Mama Furaha (23 paiements sur 6 mois). L'analyse de population a fait surgir ce que la lecture chronologique n'aurait jamais montré.",
    pitfall: "Trier uniquement par ordre chronologique avant de conclure qu'aucune anomalie n'existe. Prenez le réflexe de retrier par fournisseur et par bénéficiaire avant toute conclusion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Fixer le seuil de matérialité et définir les strates',
    intro: "Pourquoi : c'est le choix qui rend votre échantillon défendable face à un bailleur. Entrées : la population (214 transactions, 58 400 USD), le seuil d'autorisation interne de 500 USD, les résultats de l'étape 3.",
    steps: [
      {
        title: 'Fixez le seuil de matérialité et justifiez-le par écrit',
        body: "Choisissez 500 USD : c'est le seuil d'autorisation de la règle de caisse, donc la frontière entre une dépense contrôlée ou non par la procédure.",
      },
      {
        title: 'Définissez les quatre strates avec un critère précis chacune',
        actions: [
          "S1 — toutes les transactions de 500 USD et plus.",
          "S2 — tous les nouveaux fournisseurs (premier paiement depuis le 01/01/2026).",
          "S3 — toutes les transactions en espèces de 300 USD et plus (seuil bas retenu pour borner l'échantillon, documenté), ce qui retient le fournisseur signalé à l'étape 3.",
          "S4 — tirage aléatoire parmi les petites transactions restantes.",
        ],
      },
      {
        title: 'Calculez le nombre et le montant de chaque strate, puis la couverture',
        body: "Couverture = montant de l'échantillon ÷ montant de la population. Elle doit figurer dans votre note.",
      },
      {
        title: 'Vérifiez que l\'échantillon tient dans la grille',
        body: "L'onglet Grille offre 36 lignes (lignes 5 à 40). Au-delà, travaillez avec une copie du fichier par strate et additionnez les indicateurs à la main.",
      },
    ],
    table: {
      columns: ['Strate', 'Critère', 'Transactions', 'Montant (USD)', 'Couverture de la strate'],
      rows: [
        ['S1 — Matérialité', '500 USD et plus', '6', '10 007', '100 % (6 sur 6)'],
        ['S2 — Nouveaux fournisseurs', 'Premier paiement depuis le 01/01/2026', '2', '805', '100 % (2 sur 2)'],
        ['S3 — Espèces', 'Espèces de 300 USD et plus', '25', '11 678', '100 %'],
        ['S4 — Aléatoire', 'Petites transactions restantes', '2 tirées sur 181', '145', 'Tirage'],
        ['Total échantillon', '', '35', '22 635', '38,8 % du montant de la population'],
      ],
    },
    result: "Un échantillon de 35 transactions (16,4 % des lignes, 38,8 % des montants) dont chaque strate a un critère écrit. Contrôle : en cumulant les montants des quatre strates, vous retrouvez 22 635 USD.",
    pitfall: "Fixer le seuil de matérialité « au feeling ». Un seuil qui ne s'appuie sur aucune règle de l'organisation est le premier point que contestera l'audité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: "Tirer l'échantillon, figer le tirage et rédiger la note méthodologique",
    intro: "Pourquoi : un tirage que vous ne pouvez pas rejouer est un tirage contestable. Entrées : les strates définies à l'étape 4. Sortie : le livrable 1, versé au dossier 04_Tests.",
    steps: [
      {
        title: 'Sélectionnez les strates S1, S2 et S3 par filtre',
        body: "Filtrez le tableau T_GL sur les critères de chaque strate et copiez les lignes retenues dans un onglet « Echantillon ».",
      },
      {
        title: 'Tirez la strate S4 au hasard et figez le résultat',
        actions: [
          "1. Isolez les petites transactions restantes dans une feuille.",
          "2. Ajoutez la colonne =ALEA() puis triez par cette colonne.",
          "3. Copiez la colonne et collez-la en valeurs (Collage spécial > Valeurs) pour figer le tirage ; retenez les deux premières lignes.",
        ],
      },
      {
        title: 'Rédigez la note méthodologique en sept lignes',
        actions: [
          "Population et source, contrôle d'exhaustivité, seuil et justification, strates, taille et couverture, mode de tirage, limites d'interprétation.",
        ],
      },
      {
        title: 'Archivez dans le dossier 04_Tests/Financier',
        body: "Nom du fichier : 2026-07-29_Note_methodo_echantillon_Beni.docx, avec l'extraction brute et le tirage figé.",
      },
    ],
    example: {
      title: "Note méthodologique — 29 juillet 2026 (extrait intégral)",
      lines: [
        "Population : 214 transactions de dépenses payées localement par l'antenne de Beni du 01/10/2025 au 31/03/2026, soit 58 400 USD (grand livre reçu le 27/07/2026, rapproché de la balance : écart de 0,43 % expliqué).",
        "Seuil de matérialité : 500 USD (seuil d'autorisation de la règle de caisse, art. 4.3).",
        "Strates : S1 toutes les transactions ≥ 500 USD (6) ; S2 tous les nouveaux fournisseurs depuis le 01/01/2026 (2) ; S3 toutes les espèces ≥ 300 USD (25, dont 23 d'un même fournisseur signalé par l'analyse de population) ; S4 deux transactions tirées au hasard (colonne ALEA figée en valeurs).",
        "Taille : 35 transactions, 22 635 USD, soit 16,4 % des lignes et 38,8 % des montants.",
        "Limites : échantillon orienté risque ; les taux calculés ne s'extrapolent pas à la population.",
      ],
    },
    result: "Livrable 1 terminé : une note d'une page, un tirage rejouable, 35 lignes prêtes à être saisies dans la grille.",
    tip: "Ne cachez pas dans votre note ce qui vous a fait retenir un fournisseur : « signalé par l'analyse de population » est une justification valable, et elle montre que vous avez regardé l'ensemble avant d'échantillonner.",
  },

  // ── Procédure 2 — 3-way match et légitimité ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: "Ouvrir la grille et saisir l'identité de chaque transaction",
    intro: "Pourquoi : la grille formalise le contrôle ligne par ligne et calcule automatiquement certaines colonnes. Si elle est mal initialisée, tous les calculs sont faux. Entrées : le template grille-verification-pieces-comptables.xlsx et vos 35 lignes d'échantillon.",
    steps: [
      {
        title: 'Ouvrez le fichier et enregistrez-le sous un nom de mission',
        body: "Fichier > Enregistrer sous : 2026-07-30_Grille_Beni.xlsx. Le template contient deux onglets : Grille et Synthese-Patterns.",
      },
      {
        title: 'Effacez les trois lignes d\'exemple sans toucher aux formules',
        actions: [
          "1. Sélectionnez A5:B7, D5:I7 et K5:L7 (références TX-2026-014 à 016), puis Suppr.",
          "2. Ne touchez jamais aux colonnes C (Mois auto), J (Score complétude) et M (Statut global) : ce sont des formules.",
        ],
      },
      {
        title: 'Saisissez les colonnes d\'identité, ligne par ligne à partir de la ligne 5',
        actions: [
          "A — Réf. transaction : le numéro de pièce du grand livre (ou un numéro interne unique).",
          "B — Date : une vraie date jj/mm/aaaa, pas un texte.",
          "D — Fournisseur / Bénéficiaire : le nom exact, à l'identique d'une ligne à l'autre.",
          "E — Montant ($) : un nombre, sans symbole.",
          "F — Ligne budgétaire : l'intitulé exact de la ligne du budget approuvé.",
        ],
      },
      {
        title: 'Vérifiez que la colonne C se remplit seule',
        body: "Chaque date doit produire un mois au format 2025-10. Une cellule vide ou en erreur signale une date saisie en texte.",
      },
    ],
    table: {
      columns: ['A — Réf.', 'B — Date', 'C — Mois (auto)', 'D — Fournisseur', 'E — Montant', 'F — Ligne budgétaire'],
      rows: [
        ['TX-BEN-001', '02/10/2025', '2025-10', 'Ets. Mama Furaha', '485', 'Administration - Fournitures bureau'],
        ['TX-BEN-002', '09/10/2025', '2025-10', 'Ets. Mama Furaha', '470', 'Administration - Fournitures bureau'],
        ['TX-BEN-003', '16/10/2025', '2025-10', 'Ets. Mama Furaha', '492', 'Administration - Fournitures bureau'],
        ['TX-BEN-004', '21/10/2025', '2025-10', 'Pharmacie Centrale de Beni', '1 860', 'Santé - Médicaments et consommables'],
      ],
    },
    result: "Les 35 lignes d'identité saisies, la colonne C remplie automatiquement sur chaque ligne, aucune formule écrasée. Contrôle : l'onglet Synthese-Patterns affiche 35 en B5.",
    pitfall: "Écrire « Mama Furaha » sur une ligne et « Ets Mama Furaha » sur une autre. Les formules de l'onglet de synthèse comparent le texte à l'identique : une variante d'orthographe fait disparaître la transaction du pattern.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Réunir et classer les trois pièces de chaque transaction',
    intro: "Pourquoi : on ne coche pas « présent » sans avoir eu la pièce en main. Entrée : la liste des 35 références. Sortie : un dossier de pièces par transaction et un journal des demandes.",
    steps: [
      {
        title: 'Demandez à la Finance Officer le trio complet pour chaque référence',
        actions: [
          "1. Contrat ou bon de commande (ou demande d'achat approuvée pour les petits achats).",
          "2. Facture ou reçu du fournisseur.",
          "3. Preuve de paiement : reçu de caisse signé, avis de virement ou souche de chèque.",
          "4. Pour les biens : le bon de réception ; pour les services : le livrable ou l'état de présence.",
        ],
      },
      {
        title: 'Classez dans un dossier par transaction',
        body: "Un dossier par référence, nommé TX-BEN-016_Papeterie-Umoja, contenant les pièces numérisées dans l'ordre contrat, facture, paiement.",
      },
      {
        title: 'Tenez un journal des pièces demandées et reçues',
        body: "Date de la demande, date de réception, pièce manquante. Passé 48 heures, une pièce non fournie est une pièce absente.",
      },
    ],
    table: {
      columns: ['Réf.', 'Pièce demandée', 'Demandée le', 'Reçue le', 'Statut'],
      rows: [
        ['TX-BEN-016', 'Bon de commande Papeterie Umoja (512 USD)', '03/08/2026', '—', 'Absente après 48 h : à tracer'],
        ['TX-BEN-010', 'Preuve de paiement Hôtel Les Cèdres (2 340 USD)', '03/08/2026', '—', 'Absente après 48 h : à tracer'],
        ['TX-BEN-021', 'Facture n° 2218 Garage Bin Auto', '03/08/2026', '04/08/2026', 'Reçue, à comparer au BC-0045'],
      ],
    },
    result: "35 dossiers de pièces classés et un journal daté. Contrôle : chaque ligne du journal a un statut, aucune demande n'est « en cours » sans date.",
    pitfall: "Accepter qu'un document soit « presque complet » en se disant qu'on le complètera plus tard. Un contrat manquant, une signature absente ou une preuve floue notée « à régulariser » ne l'est presque jamais : documentez l'incomplétude tout de suite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Faire le 3-way match chiffre par chiffre et cocher O ou N (colonnes G, H, I)',
    intro: "Pourquoi : cocher « O » sans comparer, c'est valider la forme. La règle de la grille : on ne coche « O » que si le document est présent ET cohérent avec les deux autres. Entrées : les trois pièces de chaque transaction.",
    steps: [
      {
        title: 'Posez les trois pièces côte à côte et appliquez six contrôles',
        actions: [
          "a. La facture rappelle-t-elle la référence du bon de commande ?",
          "b. Le fournisseur est-il le même sur les trois pièces ?",
          "c. Prix unitaire et quantité de la facture égalent-ils ceux du BC et du bon de réception ?",
          "d. Le montant payé égale-t-il exactement la facture ?",
          "e. Le bénéficiaire du paiement est-il le fournisseur facturé ?",
          "f. Les dates se suivent-elles : BC, puis facture, puis paiement ?",
        ],
      },
      {
        title: 'Cochez G, H et I avec le menu déroulant O / N',
        actions: [
          "G — Contrat/BC : O si la pièce existe, est signée et son prix est repris sans écart par la facture.",
          "H — Facture : O si elle égale le BC en prix et quantité et cite le bon fournisseur.",
          "I — Preuve paiement : O si elle égale la facture en montant et bénéficiaire, et si elle est postérieure à la facture.",
          "Une pièce qui en contredit une autre reçoit N, avec une note de cellule (clic droit > Nouvelle note) qui dit pourquoi.",
        ],
      },
      {
        title: 'Lisez le score de complétude (colonne J)',
        body: "J se calcule seule : 100 % si les trois cases sont « O », 67 % si deux, 33 % si une. Elle mesure la cohérence des pièces, pas leur simple présence.",
      },
    ],
    table: {
      columns: ['Contrôle', 'BC-0045', 'Facture n° 2218', 'Avis de virement', 'Verdict'],
      rows: [
        ['Montant', '2 480', '2 780', '2 780', 'Facture et paiement supérieurs au BC de 300 USD'],
        ['Fournisseur', 'Garage Bin Auto', 'Garage Bin Auto', 'Garage Bin Auto', 'Cohérent'],
        ['Référence du BC rappelée', '—', 'Non', '—', 'Facture non rattachée au BC'],
        ['Date', '09/01/2026', '14/01/2026', '15/01/2026', 'Chronologie correcte'],
        ['Cochage', 'G = O', 'H = N', 'I = N', 'J = 33 %'],
      ],
    },
    result: "Colonnes G, H, I renseignées pour les 35 lignes, chaque « N » portant une note qui cite l'écart. Pour TX-BEN-021 : G = O, H = N, I = N, score 33 %.",
    pitfall: "Cocher « O » parce que la pièce existe. Un tampon, une signature et un classement impeccable ne prouvent rien : seule la confrontation chiffre par chiffre distingue un dossier honnête d'un dossier frauduleux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Apprécier la légitimité réelle par des tests de réalité (colonne K)',
    intro: "Pourquoi : c'est l'étape que les juniors sautent, pressés de passer à la suite une fois les trois cases cochées. Elle seule répond à la question « cette dépense a-t-elle réellement eu lieu ? ». Entrées : le trio de pièces et les résultats du match.",
    steps: [
      {
        title: 'Choisissez le test de réalité adapté à la nature et au montant',
        actions: [
          "Bien : voir le bien en stock ou en usage, et retrouver le bon d'entrée en magasin.",
          "Service : exiger un livrable vérifiable (rapport, compte rendu, liste d'émargement, photos datées).",
          "Prix : comparer à deux prix de marché pour un article identifiable.",
          "Confirmation indépendante : appeler ou visiter le fournisseur, interroger le bénéficiaire final.",
        ],
      },
      {
        title: 'Choisissez dans le menu de la colonne K',
        actions: [
          "Légitime : au moins un test de réalité passé et aucun signal d'alerte.",
          "À approfondir : un signal d'alerte, ou un test impossible à ce stade.",
          "Non légitime : preuve que la dépense n'a pas eu lieu ou n'a pas l'objet déclaré.",
        ],
      },
      {
        title: 'Écrivez la justification d\'une phrase dans une note de cellule',
        body: "La grille n'a pas de colonne de commentaire : clic droit sur la cellule K > Nouvelle note, et une phrase qui cite le test et son résultat. Jamais une case choisie sans commentaire.",
      },
    ],
    table: {
      columns: ['Test (fournisseur Ets. Mama Furaha, 23 reçus)', 'Résultat constaté', 'Conséquence sur la colonne K'],
      rows: [
        ['Prix de marché (5 reçus détaillent des articles)', 'Ramette de papier A4 facturée 7,50 USD contre 4,80 USD sur deux devis de fournisseurs de Beni (+56 %)', 'Signal : à approfondir'],
        ['Réalité en magasin (registre des fournitures)', "Aucun bon d'entrée correspondant pour 20 des 23 reçus", 'Signal : à approfondir'],
        ['Contenu des reçus', '18 reçus portent la mention « fournitures diverses » sans détail', 'Signal : à approfondir'],
        ['Confirmation indépendante : visite du point de vente le 05/08/2026', "Boutique de détail alimentaire et petits articles, stock de papeterie limité ; la gérante confirme vendre « parfois des cahiers et du papier » et ne retrouve pas ses carnets de 2025", 'Test non concluant : à approfondir'],
      ],
    },
    result: "Colonne K renseignée pour chaque ligne, avec une note de cellule. Pour les 23 lignes Mama Furaha : « À approfondir », jamais « Non légitime » : vous n'avez pas la preuve que les dépenses n'ont pas eu lieu.",
    pitfall: "Écrire « Non légitime » sur une intuition. Ce statut exige une preuve (bien introuvable après vérification, fournisseur inexistant, objet différent) ; en dessous, c'est « À approfondir ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Transformer chaque pièce incomplète en constat immédiat',
    intro: "Pourquoi : une incomplétude laissée « en suspens » disparaît du dossier. Un constat daté, lui, oblige à une réponse. Entrées : le journal des pièces et les « N » de la grille.",
    steps: [
      {
        title: 'Listez les pièces manquantes ou incohérentes ligne par ligne',
        body: "Reprenez toutes les cases G, H, I cochées N : référence, pièce concernée, écart ou absence.",
      },
      {
        title: 'Écrivez pour chacune une phrase de constat factuelle',
        body: "Formule : pièce, référence, montant, règle concernée. Exemple : « Pour la dépense de 512 USD du 12/12/2025 (Papeterie Umoja), aucun bon de commande ni devis n'a été produit alors que la règle de caisse l'exige au-delà de 500 USD. »",
      },
      {
        title: 'Adressez la demande de régularisation par écrit, avec un délai',
        body: "Courriel à Clarisse M. : liste des pièces, date limite de 48 heures, mention que l'absence sera consignée en constat.",
      },
      {
        title: 'Classez la réponse et mettez la colonne à jour',
        body: "Si la pièce arrive, vérifiez-la comme les autres avant de passer N à O ; sinon, conservez N et gardez la trace de la demande.",
      },
    ],
    table: {
      columns: ['Réf.', 'Pièce concernée', 'Montant (USD)', 'Constat', 'Suite'],
      rows: [
        ['TX-BEN-016', 'Bon de commande et devis (case G = N)', '512', "Dépense au-dessus de 500 USD sans BC ni devis", "Constat de procédure"],
        ['TX-BEN-010', 'Preuve de paiement (case I = N)', '2 340', "Atelier payé sans preuve de décaissement retrouvée", "Relancer la banque, relevé à l'appui"],
        ['TX-BEN-021', 'Facture et paiement (H = N, I = N)', '2 780', "Facture et paiement supérieurs de 300 USD au BC-0045", "Demander l'avenant ou l'explication écrite"],
        ['TX-BEN-028', 'Facture (case H = N)', '60', "Reçu manuscrit seulement ; dépense faible et légitime", "Observation, pas de constat"],
      ],
    },
    result: "Chaque « N » de la grille est relié à une phrase de constat, une demande écrite et une suite. Contrôle : aucun « N » ne reste sans note ni sans date de demande.",
    tip: "Distinguez les incomplétudes qui comptent (dépense élevée, engagement absent) de celles qui n'en valent pas la peine (petit reçu manuscrit d'un cybercafé). Un constat par détail noie les constats importants.",
  },


  // ── Procédure 3 — Éligibilité budgétaire ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Réunir les règles du bailleur applicables à chaque transaction',
    intro: "Pourquoi : on ne teste pas l'éligibilité de mémoire. Chaque projet a sa convention, son budget et ses règles. Entrées : le grand livre (code projet de chaque écriture), les conventions et budgets approuvés Meridian et ECHO reçus à la procédure 1.",
    steps: [
      {
        title: 'Repérez le projet imputé de chacune des 35 transactions',
        body: "Le code analytique figure dans le grand livre. Notez-le dans votre feuille de travail : la grille n'a pas de colonne projet, vous la gardez à côté.",
      },
      {
        title: 'Pour chaque projet, ouvrez trois documents',
        actions: [
          "1. La convention de subvention : période de mise en œuvre, articles sur les dépenses éligibles et inéligibles.",
          "2. Le budget approuvé : intitulé exact des lignes, montants, souplesse admise entre lignes.",
          "3. Le guide ou l'annexe du bailleur : barèmes de per diem, plafonds, règles d'origine.",
        ],
      },
      {
        title: 'Rédigez une fiche de règles d\'une page par projet',
        body: "Une ligne par règle, avec l'article cité : c'est ce que vous citerez dans chaque constat d'éligibilité.",
      },
    ],
    table: {
      columns: ['Règle', 'Contenu (convention Meridian, fictive)', 'Où la vérifier'],
      rows: [
        ['Période de mise en œuvre', 'Du 01/01/2026 au 31/12/2026 ; date retenue : celle de la facture ou du service rendu', 'Art. 3 et art. 7.2'],
        ['Plafond de per diem', '35 USD par agent et par jour', 'Annexe 4'],
        ['Catégories interdites', 'Alcool, matériel à connotation militaire, amendes', 'Art. 9'],
        ['Souplesse entre lignes', "Jusqu'à 10 % de dépassement d'une ligne sans accord préalable", 'Art. 6.3'],
      ],
    },
    result: "Une fiche de règles par projet, article cité à chaque ligne. Contrôle : pour chaque transaction de l'échantillon, vous savez quel projet la finance et quelle règle s'y applique.",
    pitfall: "Tester l'éligibilité avec des règles retenues de mémoire ou d'un autre projet. Une règle de période ou de per diem diffère d'une convention à l'autre : citez toujours l'article de la convention de la dépense testée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Tester la période, la ligne budgétaire et le plafond de ligne',
    intro: "Pourquoi : ce sont les deux erreurs d'éligibilité les plus fréquentes, et les plus simples à repérer avec les bonnes pièces. Entrées : la fiche de règles, la date de la facture ou du service, le budget approuvé.",
    steps: [
      {
        title: 'Test de période : comparez la date retenue par la convention à la période du projet',
        actions: [
          "Prenez la date que la convention retient (ici : facture ou service rendu), pas la date de paiement par défaut.",
          "Une date avant le début ou après la fin = hors période.",
        ],
      },
      {
        title: 'Test de ligne : rapprochez la nature de la dépense de l\'intitulé de la ligne',
        body: "Un achat de carburant imputé en « Santé - Médicaments et consommables » est une erreur d'imputation, même si la dépense est légitime.",
      },
      {
        title: 'Test de plafond de ligne : calculez le cumul consommé',
        actions: [
          "Cumul dépensé avant la transaction + montant de la transaction.",
          "Comparez au budget de la ligne majoré de la souplesse admise : =(cumul+montant)/budget.",
        ],
      },
    ],
    table: {
      columns: ['Réf.', 'Dépense', 'Test', 'Constat', 'Colonne L'],
      rows: [
        ['TX-BEN-019', 'Pharmacie Centrale, 1 395 USD, 29/12/2025, imputée à Meridian', 'Période', 'Facture du 29/12/2025 : avant le début de Meridian (01/01/2026)', 'N'],
        ['TX-BEN-007', 'Station Mwangaza (carburant), 1 120 USD, 06/11/2025, projet ECHO', 'Ligne', 'Carburant imputé en « Santé - Médicaments et consommables » au lieu de « Logistique - Carburant »', 'N'],
        ['TX-BEN-032', 'Ets. Kalinda Traiteur, 420 USD, 10/03/2026, Meridian', 'Plafond de ligne', 'Ligne « Formation - Ateliers » : budget 8 000, cumul 6 940 + 420 = 7 360, soit 92 % consommé', 'O'],
      ],
    },
    result: "Colonne L renseignée pour la période et la ligne, avec la règle citée. Sur l'échantillon, deux écarts : TX-BEN-019 (hors période) et TX-BEN-007 (mauvaise ligne).",
    tip: "Une dépense imputée au mauvais projet n'est pas forcément perdue : vérifiez si elle entre dans la période d'un autre projet avec marge de ligne. Ici, TX-BEN-019 est dans la période d'ECHO.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Tester les règles spécifiques du bailleur : plafonds, interdits, origine',
    intro: "Pourquoi : c'est le niveau de contrôle que le grants officer fait trop tard, à la clôture. Vous le faites pendant l'exécution. Entrées : la fiche de règles (annexe 4, article 9) et les pièces des transactions concernées.",
    steps: [
      {
        title: 'Plafonds : recalculez les per diem et barèmes',
        actions: [
          "Nombre d'agents × nombre de jours × barème du bailleur.",
          "Comparez au montant payé ; la différence est la part inéligible.",
        ],
      },
      {
        title: 'Catégories interdites : lisez le détail des factures',
        body: "Parcourez les libellés des factures des repas, ateliers et réceptions : alcool, matériel interdit, amendes.",
      },
      {
        title: 'Origine : vérifiez la règle de nationalité ou de provenance si la convention en contient une',
        body: "Certains bailleurs limitent l'origine des fournisseurs ou des biens ; si la convention n'en contient pas, notez « sans objet » plutôt que de laisser un blanc.",
      },
      {
        title: 'Documentez le résultat, y compris quand tout est conforme',
        body: "Une phrase par test passé ou échoué : c'est ce qui prouve que vous avez cherché.",
      },
    ],
    example: {
      title: 'TX-BEN-034 — per diem de la mission de supervision à Mangina, 24/03/2026',
      lines: [
        "Pièces : ordre de mission (tient lieu de BC), état de per diem émargé (tient lieu de facture), reçu de caisse de 300 USD : G = O, H = O, I = O.",
        "Calcul : 3 agents × 2 jours × 35 USD (annexe 4 de la convention Meridian) = 210 USD autorisés ; payé : 300 USD (50 USD par agent et par jour).",
        "Constat : excédent de 90 USD (300 − 210), soit 43 % de plus que le plafond.",
        "Colonne L = N pour la ligne, et la part inéligible chiffrée à 90 USD dans le tableau d'inéligibilité.",
      ],
    },
    result: "Pour chaque transaction concernée, un calcul écrit et la part inéligible chiffrée. Contrôle : montant autorisé + part inéligible = montant payé.",
    pitfall: "Marquer « N » une transaction entière alors que seule une part est inéligible. La colonne L est un O/N, mais votre tableau d'inéligibilité chiffre la part exacte : sinon, vous annoncez 300 USD de perte quand elle est de 90 USD.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Chiffrer l\'inéligible, saisir la colonne L et proposer le traitement',
    intro: "Pourquoi : une dépense mal imputée n'est pas une broutille administrative : c'est un constat à part entière, distinct d'un problème de légitimité. Entrées : les résultats des étapes 2 et 3.",
    steps: [
      {
        title: 'Saisissez la colonne L pour les 35 lignes',
        body: "Menu déroulant O / N : « N » dès qu'un test échoue, même en partie. Ajoutez une note de cellule qui cite la règle.",
      },
      {
        title: 'Construisez le tableau des dépenses inéligibles',
        body: "Une ligne par dépense en N : référence, nature de l'écart, montant concerné, règle citée.",
      },
      {
        title: 'Classez chaque écart dans l\'une de trois catégories de traitement',
        actions: [
          "Reclassable : écriture corrective vers la bonne ligne ou le bon projet, sans perte.",
          "Définitivement inéligible : à supporter sur fonds propres ou à rembourser.",
          "À confirmer avec le bailleur : demande de dérogation ou d'accord rétroactif.",
        ],
      },
      {
        title: 'Informez le grants officer et la Finance Officer par écrit',
        body: "Le but est de corriger avant la clôture du rapport bailleur, pas de leur apprendre l'écart dans le rapport final.",
      },
    ],
    table: {
      columns: ['Réf.', 'Nature de l\'écart', 'Montant concerné (USD)', 'Traitement proposé'],
      rows: [
        ['TX-BEN-019', 'Hors période Meridian (art. 3)', '1 395', 'Reclasser sur ECHO si la ligne a de la marge, sinon fonds propres'],
        ['TX-BEN-007', 'Mauvaise ligne (« Santé - Médicaments » au lieu de « Logistique - Carburant »)', '1 120', 'Reclasser par écriture corrective : aucune perte si la ligne cible a de la marge'],
        ['TX-BEN-034', 'Per diem au-delà du plafond (annexe 4)', '90', 'Remboursement de l\'excédent ou prise en charge sur fonds propres'],
        ['Total exposé', '', '2 605', 'Dont 2 515 reclassables et 90 définitivement inéligibles'],
      ],
    },
    result: "Livrable 3 terminé : colonne L complète, tableau d'inéligibilité de 2 605 USD exposés dont 2 515 USD reclassables et 90 USD définitivement inéligibles. Contrôle : 1 395 + 1 120 + 90 = 2 605.",
    tip: "Présentez toujours le montant reclassable à part du montant définitivement perdu : l'audité entend « 2 605 USD de problème » comme une accusation, et « 90 USD de perte, 2 515 USD à corriger en écriture » comme un plan.",
  },

  // ── Procédure 4 — Consolider et détecter les patterns ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: "Lire les indicateurs globaux de l'onglet Synthese-Patterns",
    intro: "Pourquoi : l'onglet de synthèse calcule seul le taux de conformité de l'échantillon et prépare la détection de patterns. Entrées : la grille entièrement renseignée (colonnes A à L des 35 lignes). Rappel : l'onglet porte la mention « ne pas modifier les formules ».",
    steps: [
      {
        title: 'Ouvrez l\'onglet Synthese-Patterns et lisez les quatre indicateurs',
        actions: [
          "B5 — Nombre de transactions échantillonnées : =COUNTA(Grille!A5:A40).",
          "B6 — Transactions conformes (statut = Conforme) : =COUNTIF(Grille!M5:M40;\"Conforme\").",
          "B7 — Transactions à examiner : =COUNTIF(Grille!M5:M40;\"À examiner\").",
          "B8 — Taux de conformité de l'échantillon : =IFERROR(B6/B5;0).",
        ],
      },
      {
        title: 'Vérifiez les indicateurs à la main',
        body: "Filtrez la colonne M de la grille : « Conforme » ne s'affiche que si le score J est de 100 %, K « Légitime » et L « O ». Comptez les lignes et comparez à B6.",
      },
      {
        title: 'Calculez un second taux hors du fournisseur signalé',
        body: "Pour apprécier le reste de l'échantillon sans le biais du fournisseur récurrent : conformes ÷ transactions hors Mama Furaha.",
      },
    ],
    table: {
      columns: ['Indicateur', 'Valeur', 'Lecture'],
      rows: [
        ['B5 — Transactions échantillonnées', '35', 'Égal au nombre de lignes saisies'],
        ['B6 — Conformes', '5', 'TX-BEN-004, 006, 012, 023, 032'],
        ['B7 — À examiner', '30', 'Dont 23 lignes Mama Furaha (légitimité « À approfondir ») et 7 autres (pièces, éligibilité)'],
        ['B8 — Taux de conformité', '14,3 %', '5 ÷ 35'],
        ['Taux hors Mama Furaha (calcul manuel)', '41,7 %', '5 ÷ 12'],
      ],
    },
    result: "Les quatre indicateurs lus et vérifiés à la main, plus un taux hors fournisseur signalé. Contrôle : B6 + B7 = B5 (5 + 30 = 35).",
    pitfall: "Annoncer « 14,3 % de conformité à Beni » comme un taux de l'antenne. L'échantillon est orienté risque : ce taux décrit l'échantillon, pas les 214 transactions. Écrivez-le dans la synthèse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Renseigner le seuil et le tableau fournisseur × mois',
    intro: "Pourquoi : la détection du fractionnement ne se fait pas toute seule : l'onglet compte les occurrences pour les fournisseurs et les mois que vous lui indiquez. Entrées : l'analyse de population (procédure 1, étape 3) et la grille.",
    steps: [
      {
        title: 'Confirmez le seuil en B11',
        body: "La cellule B11 contient 500 : c'est le seuil d'autorisation de Beni, donc rien à changer. Dans une entité à autre seuil, saisissez-le ici avant tout.",
      },
      {
        title: 'Effacez les deux lignes d\'exemple (A16:B17)',
        body: "Elles contiennent Ets. Kavira Fournitures pour 2026-03 et 2026-04 : sans rapport avec votre cas. Ne touchez pas aux colonnes C, D et E, qui sont des formules.",
      },
      {
        title: 'Saisissez le fournisseur et le mois, en colonnes A et B',
        actions: [
          "A16:A21 : copiez le nom du fournisseur depuis la colonne D de la grille, pour garantir une orthographe identique.",
          "B16:B21 : les six mois, au format 2025-10 à 2026-03, saisis comme du texte (formatez la cellule en Texte ou tapez une apostrophe avant : '2025-10).",
          "Lignes 22 à 24 : réservez-les à un fournisseur de contrôle (voir exemple).",
        ],
      },
      {
        title: 'Vérifiez que les colonnes C, D et E se remplissent',
        body: "Si elles affichent 0 ou restent vides, c'est presque toujours une différence d'orthographe ou un mois saisi comme date.",
      },
    ],
    table: {
      columns: ['Ligne', 'A — Fournisseur / Bénéficiaire', 'B — Mois', 'C — Nb < seuil', 'D — Montant agrégé', 'E — Alerte'],
      rows: [
        ['16', 'Ets. Mama Furaha', '2025-10', '4', '1 925', 'A investiguer'],
        ['17', 'Ets. Mama Furaha', '2025-11', '4', '1 918', 'A investiguer'],
        ['21', 'Ets. Mama Furaha', '2026-03', '3', '1 457', 'A investiguer'],
        ['22', 'Garage Bin Auto (entretien véhicule)', '2026-01', '0', '2 780', 'OK'],
      ],
    },
    result: "Le tableau fournisseur × mois renseigné : six lignes Mama Furaha et une ligne de contrôle. Contrôle : la ligne 22 donne « OK » alors que 2 780 USD sont agrégés, preuve que l'alerte porte sur le nombre de transactions sous le seuil, pas sur le montant.",
    pitfall: "Taper « 2025-10 » sans le formater en texte : Excel le convertit en date, et les formules COUNTIFS ne retrouvent plus rien. Si C affiche 0 pour un mois que vous savez actif, c'est la première chose à vérifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Lire les alertes et chiffrer le pattern',
    intro: "Pourquoi : la colonne E signale ; c'est à vous de mesurer. Une alerte non chiffrée ne tient pas dans un constat. Entrées : le tableau fournisseur × mois renseigné.",
    steps: [
      {
        title: 'Lisez la règle de la colonne E',
        body: "« A investiguer » s'affiche dès que trois transactions ou plus du fournisseur, dans le mois, sont sous le seuil. C'est un signal de départ, pas une conclusion.",
      },
      {
        title: 'Agrégez le pattern sur la période',
        actions: [
          "Occurrences : =SOMME(C16:C21), soit 23.",
          "Montant total : =SOMME(D16:D21), soit 11 038 USD.",
          "Moyenne mensuelle : =MOYENNE(D16:D21), soit 1 839,67 USD, ou 3,7 fois le seuil.",
        ],
      },
      {
        title: 'Mesurez la proximité du seuil',
        actions: [
          "Plus petit montant : =MIN.SI.ENS(Grille!E5:E40;Grille!D5:D40;\"Ets. Mama Furaha\"), soit 460 USD (92 % du seuil).",
          "Plus grand montant : =MAX.SI.ENS(...), soit 495 USD (99 % du seuil).",
          "Nombre de montants au-dessus de 500 USD : 0 sur 23.",
        ],
      },
      {
        title: 'Vérifiez ce qui a été fait',
        body: "Reprenez les pièces : combien d'approbations écrites du Field Coordinator, combien de mises en concurrence ? Ici : 0 sur 23 dans les deux cas.",
      },
    ],
    table: {
      columns: ['Mois', 'Transactions < seuil', 'Montant agrégé (USD)', 'Alerte'],
      rows: [
        ['2025-10', '4', '1 925', 'A investiguer'],
        ['2025-11', '4', '1 918', 'A investiguer'],
        ['2025-12', '4', '1 913', 'A investiguer'],
        ['2026-01', '4', '1 914', 'A investiguer'],
        ['2026-02', '4', '1 911', 'A investiguer'],
        ['2026-03', '3', '1 457', 'A investiguer'],
        ['Période', '23', '11 038', '6 mois sur 6'],
      ],
    },
    result: "Un pattern chiffré : 23 paiements, 11 038 USD, 460 à 495 USD, 3 à 4 par mois, aucun au-dessus de 500 USD, aucune approbation du Field Coordinator, aucune mise en concurrence. Contrôle : 1 925 + 1 918 + 1 913 + 1 914 + 1 911 + 1 457 = 11 038.",
    tip: "Chaque chiffre de votre constat doit pointer vers une cellule : D16 à D21 pour le cumul, C16 à C21 pour les occurrences. Notez ces références : l'audité en demandera la source.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Contre-vérifier hors grille et qualifier : négligence ou fractionnement intentionnel',
    intro: "Pourquoi : un pattern détecté dans l'échantillon doit être confronté à la population et aux autres sources avant d'être qualifié. Entrées : le tableau croisé de la population, le pattern chiffré, la liste des fournisseurs enregistrés.",
    steps: [
      {
        title: 'Retrouvez le même fournisseur dans toute la population',
        body: "Dans le tableau croisé T_GL, filtrez le fournisseur : vérifiez que les 23 paiements sont bien tous dans l'échantillon et qu'aucun ne se cache hors période.",
      },
      {
        title: 'Cherchez le même pattern chez les autres fournisseurs',
        body: "Relancez le tableau fournisseur × mois pour les cinq premiers fournisseurs par nombre de paiements : un seul fournisseur présente ce profil, ce qui l'isole.",
      },
      {
        title: 'Retrouvez ces bénéficiaires dans les relevés bancaires',
        body: "Un même bénéficiaire peut être payé en espèces par la caisse et par virement par la banque. Cette recherche croisée alimente la procédure 6.",
      },
      {
        title: 'Posez la qualification sur des indices objectifs, jamais sur une intuition',
        actions: [
          "Chaque indice : observé ou non, et vers quelle hypothèse il pèse.",
          "Concluez par une formule qui sépare le contournement du seuil (établi) de l'intention (non établie).",
        ],
      },
    ],
    table: {
      columns: ['Indice objectif', 'Observé à Beni', 'Pèse vers'],
      rows: [
        ['Fréquence et régularité', '3 à 4 paiements par mois, 6 mois sur 6', 'Fractionnement'],
        ['Proximité du seuil', '460 à 495 USD sur un seuil de 500 : 23 sur 23 sous le seuil, entre 92 % et 99 %', 'Fractionnement'],
        ['Cumul mensuel', '1 840 USD en moyenne, 3,7 fois le seuil', 'Fractionnement'],
        ['Approbation et concurrence', '0 sur 23 : aucune des deux procédures exigées au-delà de 500 USD', 'Contournement établi'],
        ['Nature des achats', '« Fournitures diverses », 20 reçus sans bon d\'entrée en magasin', 'Réalité à vérifier'],
        ['Explication de la Finance Officer', 'Pas encore recueillie à ce stade', 'Indéterminé'],
      ],
    },
    result: "Une qualification écrite : « indices concordants de fractionnement du seuil de 500 USD ; l'intention n'est pas établie à ce stade ». Le contournement est établi par les faits ; l'intention restera à confirmer.",
    pitfall: "Écrire « fraude » parce que le pattern est parfait. Sans preuve suffisante, vous qualifiez le risque et vous demandez l'explication de l'équipe. Si les indices se renforcent, vous escaladez au comité d'audit : ce n'est pas à vous de qualifier pénalement.",
  },

  // ── Procédure 5 — Constat d'audit ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 3',
    title: 'Décrire le fait observé avec des chiffres traçables',
    intro: "Pourquoi : un constat commence par un fait que l'audité ne peut pas contester. Entrées : le pattern chiffré (procédure 4, étape 3) et les références de cellules. Format : une demi-page au maximum pour tout le constat.",
    steps: [
      {
        title: 'Structurez le constat en quatre blocs',
        actions: [
          "1. Fait observé : fréquence, montants, fournisseur, période.",
          "2. Règle contournée : texte et article.",
          "3. Risque et qualification.",
          "4. Recommandation actionnable.",
        ],
      },
      {
        title: 'Écrivez le fait en une phrase qui répond à six questions',
        body: "Combien d'opérations ? Pour quoi ? Avec qui ? Quand ? Pour quels montants, minimum et maximum ? Pour quel cumul ? Ajoutez la source.",
      },
      {
        title: 'Faites tracer chaque nombre jusqu\'à sa cellule',
        body: "Rien n'entre dans le constat que vous ne puissiez montrer dans la grille ou dans les pièces.",
      },
    ],
    example: {
      title: 'Bloc 1 — Fait observé',
      lines: [
        "Entre le 02/10/2025 et le 26/03/2026, l'antenne de Beni a réglé en espèces 23 achats à Ets. Mama Furaha, enregistrés comme « fournitures de bureau et consommables », pour un total de 11 038 USD.",
        "Les montants vont de 460 à 495 USD, soit 92 % à 99 % du seuil de 500 USD ; aucun ne le dépasse. Le fournisseur est payé quatre fois par mois d'octobre à février et trois fois en mars, soit un cumul mensuel moyen de 1 840 USD, 3,7 fois le seuil.",
        "Source : grille TX-BEN-001 à 035, onglet Synthese-Patterns, cellules C16:D21.",
      ],
    },
    result: "Un paragraphe factuel de quatre phrases, sans adjectif, dont chaque chiffre renvoie à une cellule.",
    pitfall: "Écrire « de nombreux achats suspects ». Un lecteur ne peut ni contester ni vérifier un adjectif ; il peut vérifier « 23 achats, 11 038 USD ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 3',
    title: 'Citer la règle contournée et qualifier le risque sans conclure à la fraude',
    intro: "Pourquoi : sans règle citée, un constat est une opinion ; sans qualification mesurée, il devient une accusation. Entrées : le manuel de procédures financières (art. 4.3) et le tableau d'indices de la procédure 4.",
    steps: [
      {
        title: 'Citez la règle avec son article et ses trois exigences',
        body: "Seuil de 500 USD ; validation du Finance Officer ; approbation écrite préalable du Field Coordinator ; mise en concurrence d'au moins deux fournisseurs.",
      },
      {
        title: 'Montrez en une phrase ce qui n\'a pas été fait',
        body: "Aucune des 23 dépenses n'a fait l'objet d'une approbation du Field Coordinator ni de devis concurrents ; leur cumul mensuel dépasse chaque mois le seuil.",
      },
      {
        title: 'Qualifiez le risque en trois niveaux de preuve',
        actions: [
          "Établi : le contournement du seuil, par les faits chiffrés.",
          "Probable : un fractionnement, par les indices concordants (fréquence, proximité du seuil, cumul).",
          "Non établi : l'intention et un éventuel bénéfice personnel.",
        ],
      },
    ],
    example: {
      title: 'Blocs 2 et 3 — Règle contournée et qualification du risque',
      lines: [
        "Règle : le manuel de procédures financières (art. 4.3) exige, au-delà de 500 USD, la validation du Finance Officer, l'approbation écrite préalable du Field Coordinator et la mise en concurrence d'au moins deux fournisseurs.",
        "Constat : aucune des 23 dépenses n'a fait l'objet d'une approbation du Field Coordinator ni de devis concurrents, alors que le cumul mensuel avec ce fournisseur (1 457 à 1 925 USD) dépasse chaque mois le seuil.",
        "Risque : élevé. Le seuil est contourné ; la régularité des paiements, leur proximité du seuil (92 % à 99 %) et leur cumul constituent des indices concordants de fractionnement. L'intention et la destination des biens ne sont pas établies à ce stade : l'explication de la Finance Officer et la réalité des achats restent à documenter. Ce constat ne conclut pas à une fraude.",
      ],
    },
    result: "Une règle citée avec son article, un écart chiffré, un risque qualifié en trois niveaux de preuve, sans formule accusatoire.",
    tip: "Pour ne pas glisser, remplacez les verbes d'intention (« a voulu », « a cherché à ») par des verbes de fait (« a payé », « n'a pas obtenu »). L'intention n'est pas observable ; le fait l'est.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 3',
    title: 'Formuler la recommandation, relire et soumettre aux faits',
    intro: "Pourquoi : un constat sans suite proposée n'est jamais traité. Et un constat contesté sur un fait faux perd tout son effet. Entrées : les blocs 1 à 3 rédigés.",
    steps: [
      {
        title: 'Rédigez des recommandations qui disent qui, quoi et quand',
        body: "Une action, un responsable, une date. Évitez « renforcer les contrôles » : dites lesquels.",
      },
      {
        title: 'Relisez avec quatre tests',
        actions: [
          "Test 1 : le constat tient-il sur une demi-page ?",
          "Test 2 : chaque chiffre renvoie-t-il à une cellule ou à une pièce ?",
          "Test 3 : la règle est-elle citée avec son article ?",
          "Test 4 : le mot « fraude » n'apparaît-il que pour dire que le constat n'y conclut pas ?",
        ],
      },
      {
        title: 'Soumettez les faits à l\'audité avant la restitution',
        body: "Envoyez le projet à Clarisse M. et à Moïse B. pour vérification factuelle sous 48 heures : ils corrigent les chiffres, pas vos conclusions.",
      },
      {
        title: 'Archivez la version envoyée et leur réponse',
        body: "Dans 04_Tests/Financier, avec les dates : c'est la trace du contradictoire.",
      },
    ],
    example: {
      title: 'Bloc 4 — Recommandations',
      lines: [
        "R1 — Mettre en place une règle de cumul par fournisseur sur 30 jours : au-delà de 500 USD cumulés, l'approbation du Field Coordinator et la mise en concurrence s'appliquent. Responsable : Ruth B., Finance Manager. Échéance : 15 septembre 2026.",
        "R2 — Produire, pour les 23 achats, le détail des articles et les bons d'entrée en magasin, ou en documenter l'absence. Responsable : Clarisse M. Échéance : 21 août 2026.",
        "R3 — Faire approuver par le Field Coordinator toute nouvelle commande à Ets. Mama Furaha, jusqu'à la clôture de la revue. Responsable : Moïse B. Échéance : immédiate.",
        "R4 — Saisir le comité d'audit si les pièces demandées en R2 ne sont pas produites. Responsable : Amani K. Échéance : 31 août 2026.",
      ],
    },
    result: "Livrable 5 terminé : un constat d'une demi-page (fait, règle, risque, recommandations), vérifié sur les faits par les audités et archivé avec leur réponse.",
    pitfall: "Soumettre à l'audité le projet de constat en lui demandant « ce que vous en pensez ». Demandez la vérification des faits, avec une date limite : les observations sur vos conclusions viennent à la clôture, pas avant.",
  },

  // ── Procédure 6 — Rapprochement bancaire d'audit ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Rassembler six mois de relevés et ouvrir le rapport (section 1)',
    intro: "Pourquoi : le rapprochement d'audit se fait sur plusieurs mois mis côte à côte, jamais sur un mois isolé. Entrées : les six relevés bancaires et le livre de banque reçus à la procédure 1, le template rapport-rapprochement-bancaire-audit.docx. Minimum exigé : trois mois consécutifs ; ici, six.",
    steps: [
      {
        title: 'Rassemblez relevés, livre de banque et journal sur la même période',
        actions: [
          "1. Six relevés mensuels complets (toutes les pages numérotées).",
          "2. Le livre de banque et le journal de caisse des mêmes mois.",
          "3. Si possible, obtenez les relevés directement de la banque ou de son portail, pas uniquement de l'équipe.",
        ],
      },
      {
        title: 'Contrôlez la continuité des soldes',
        body: "Le solde de clôture d'un mois doit être égal au solde d'ouverture du mois suivant. Une rupture signale un relevé modifié ou une page manquante.",
      },
      {
        title: 'Ouvrez le rapport et remplissez la section 1',
        actions: [
          "Enregistrez sous 2026-08-05_Rapport_rapprochement_Beni.docx.",
          "Premier tableau : « Bureau / projet audité » et « Auditeur(s) ».",
          "Second tableau : « Période couverte (mois inclus) » et « Compte(s) bancaire(s) concerné(s) ».",
        ],
      },
    ],
    example: {
      title: 'Section 1 — Période et périmètre de la mission (remplie)',
      lines: [
        "Bureau / projet audité : HSGL, antenne de Beni (projets Meridian et ECHO).",
        "Auditeur(s) : Amani K., auditeur(rice) interne, responsable ; Fatou S., auditrice senior, revue.",
        "Période couverte : octobre 2025 à mars 2026 (6 mois consécutifs).",
        "Compte(s) bancaire(s) concerné(s) : compte courant en USD n° ****2208, banque commerciale locale.",
      ],
    },
    result: "Six relevés réunis, continuité des soldes vérifiée, section 1 du rapport complète. Contrôle : les six soldes de clôture se retrouvent comme soldes d'ouverture du mois suivant.",
    pitfall: "Travailler sur des relevés « refaits » par l'équipe dans un tableur. Seul un relevé de la banque fait foi ; en cas de doute, demandez-le à la banque.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Faire le rapprochement de routine, mois par mois (section 2)',
    intro: "Pourquoi : il faut d'abord éliminer tout ce qui explique légitimement un écart de solde, pour voir ce qui reste. C'est la partie « routine » du travail. Entrées : relevés et livre de banque des six mois.",
    steps: [
      {
        title: 'Construisez un tableau de rapprochement dans Excel, un mois par ligne',
        body: "Colonnes : solde du relevé, chèques en circulation, dépôts en transit, solde du livre, frais bancaires non comptabilisés, écart résiduel.",
      },
      {
        title: 'Pour chaque mois, identifiez les éléments de routine',
        actions: [
          "Chèques en circulation : chèques du livre absents du relevé à la date de clôture (ils diminuent le solde du relevé).",
          "Dépôts ou virements en transit : encaissements du livre absents du relevé (ils l'augmentent).",
          "Frais bancaires non comptabilisés : présents sur le relevé, absents du livre.",
        ],
      },
      {
        title: 'Calculez les soldes ajustés et l\'écart résiduel',
        body: "Solde du relevé − chèques en circulation + dépôts en transit = solde banque ajusté. Solde du livre − frais non comptabilisés = solde livre ajusté. L'écart résiduel doit être nul.",
      },
      {
        title: 'Résumez en section 2 du rapport',
        body: "Quelques lignes sous « Écarts explicables entre solde bancaire et solde du livre » : nature des éléments, absence d'écart résiduel.",
      },
    ],
    table: {
      columns: ['Mois', 'Solde relevé', 'Chèques en circulation et dépôts en transit (net)', 'Solde banque ajusté', 'Solde livre ajusté (après frais)', 'Écart résiduel'],
      rows: [
        ['2025-10', '22 410,15', '−1 120,00', '21 290,15', '21 290,15', '0,00'],
        ['2025-11', '19 845,60', '−900,00', '18 945,60', '18 945,60', '0,00'],
        ['2025-12', '17 120,30', '−640,00', '16 480,30', '16 480,30', '0,00'],
        ['2026-01', '16 233,75', '+550,00', '16 783,75', '16 783,75', '0,00'],
        ['2026-02', '15 480,20', '−1 300,00', '14 180,20', '14 180,20', '0,00'],
        ['2026-03', '14 862,40', '+150,00', '15 012,40', '15 012,40', '0,00'],
      ],
    },
    result: "Section 2 rédigée : six mois rapprochés, écarts de routine expliqués (frais bancaires de 35 à 40 USD par mois, chèques en circulation, dépôts en transit), écart résiduel nul. Ce n'est pas la fin du travail : c'est le point de départ de la détection.",
    tip: "Exemple de ligne mars : solde du livre 15 047,40 − frais non comptabilisés de 35,00 = 15 012,40 ; solde du relevé 14 862,40 − chèques en circulation de 1 850,00 + dépôt en transit de 2 000,00 = 15 012,40.",
    pitfall: "S'arrêter là. Un rapprochement qui « tombe juste » ne prouve pas que les transactions sont régulières : un virement enregistré des deux côtés peut être frauduleux. Les anomalies se cherchent dans les lignes, pas dans les soldes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Mettre les six mois côte à côte et chercher activement les anomalies',
    intro: "Pourquoi : un pattern suspect (montant récurrent, même bénéficiaire en fin de mois, série sous un seuil) n'est souvent visible que lorsqu'on aligne les mois. Entrées : les lignes des six relevés et la liste des fournisseurs enregistrés.",
    steps: [
      {
        title: 'Rassemblez toutes les lignes bancaires dans une seule feuille',
        body: "Colonnes : date, libellé, bénéficiaire, montant, mois, jour du mois. Six mois dans un seul tableau, pas six onglets.",
      },
      {
        title: 'Appliquez quatre filtres, un à un',
        actions: [
          "Montants ronds ou juste sous un seuil : =SI(OU(MOD([@Montant];100)=0;ET([@Montant]>=450;[@Montant]<500));\"À VOIR\";\"\").",
          "Bénéficiaires inconnus : =SI(ESTNA(RECHERCHEV([@Bénéficiaire];Fournisseurs[Nom];1;FAUX));\"NON ENREGISTRÉ\";\"\").",
          "Régularité : colonne =JOUR([@Date]) puis tableau croisé bénéficiaire × jour, pour repérer le même jour du mois.",
          "Doublons : =NB.SI.ENS([Montant];[@Montant];[Bénéficiaire];[@Bénéficiaire])>1.",
        ],
      },
      {
        title: 'Triez le résultat : gardez ce qui ne s\'explique par aucun cycle opérationnel',
        body: "Un loyer rond versé le 1er de chaque mois à un propriétaire enregistré est cohérent avec un bail. Un virement régulier à un particulier absent de la liste ne l'est pas.",
      },
    ],
    table: {
      columns: ['Filtre', 'Lignes remontées', 'Décision'],
      rows: [
        ['Montants ronds', '6 loyers de 1 200 USD le 1er de chaque mois', 'Écartés : bénéficiaire enregistré, bail, cycle mensuel logique'],
        ['Juste sous un seuil + bénéficiaire inconnu', '2 virements de 495 USD, le 27/01/2026 et le 27/02/2026, vers « M. Muhindo T. », compte ****4471', 'Retenus : anomalies n°1 et n°2'],
        ['Régularité', 'Le même bénéficiaire, le 27 de deux mois consécutifs', 'Confirme les anomalies retenues'],
        ['Doublons', '0 ligne', 'Aucune suite'],
      ],
    },
    result: "Deux anomalies candidates retenues, des fausses alertes écartées avec leur raison. Le virement du 27/01/2026 (réf. VIR-0126-07) et celui du 27/02/2026 (réf. VIR-0226-08) font 495 USD chacun, soit 990 USD cumulés.",
    pitfall: "Écarter une transaction « parce que tout équilibre ». Ces deux virements sont correctement comptabilisés des deux côtés et ne créent aucun écart de solde : c'est précisément pourquoi seul un examen des transactions elles-mêmes les révèle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: "Interroger l'équipe, tester l'explication et documenter chaque anomalie (section 3)",
    intro: "Pourquoi : une anomalie sans explication testée est une suspicion ; une explication non écrite est une rumeur. Entrées : les deux anomalies retenues. Principe : l'explication se consigne par écrit, avec la date et l'interlocuteur, dans le rapport, pas de mémoire.",
    steps: [
      {
        title: 'Posez la question par écrit, avec les références exactes',
        body: "Courriel à la Finance Officer : date, montant, bénéficiaire, libellé du virement, et demande de pièces justificatives (contrat, facture, preuve du service rendu, identité du bénéficiaire).",
      },
      {
        title: 'Consignez l\'explication reçue telle quelle',
        body: "Date, interlocuteur, mode (courriel, entretien), propos fidèles. Ne l'interprétez pas à ce stade.",
      },
      {
        title: 'Testez-la contre les autres sources',
        actions: [
          "Date, montant, bénéficiaire et motif sont-ils cohérents entre eux ?",
          "Existe-t-il une pièce qui la soutient (contrat, facture, bon de service) ?",
          "Les autres sources la contredisent-elles (organigramme, liste des fournisseurs, autres paiements) ?",
        ],
      },
      {
        title: 'Remplissez la section 3.1, puis la 3.2 du rapport',
        actions: [
          "Tableau « Nature de l'anomalie | Montant ($) ».",
          "Paragraphe « Explication obtenue de l'équipe financière (par écrit, avec date et interlocuteur) ».",
          "Paragraphe « Appréciation de l'auditeur sur la solidité de cette explication » : solide, partielle ou faible, avec les raisons.",
        ],
      },
    ],
    example: {
      title: 'Sections 3.1 et 3.2 du rapport (remplies)',
      lines: [
        "3.1 Nature : virement VIR-0126-07 du 27/01/2026 vers « M. Muhindo T. » (compte ****4471), particulier absent de la liste des fournisseurs enregistrés, libellé « Entretien locaux janv. ». Montant : 495,00.",
        "3.2 Nature : virement VIR-0226-08 du 27/02/2026 vers le même bénéficiaire, même libellé (« févr. »), même montant. Montant : 495,00.",
        "Explication (courriel de Clarisse M., Finance Officer, 06/08/2026) : « Il s'agit de la rémunération d'un prestataire de nettoyage occasionnel qui n'a pas de compte ; nous le payons sur le compte de son neveu. Le Field Coordinator était au courant. Il n'y a pas de contrat écrit. »",
        "Appréciation : faible. Aucun contrat, aucune facture ni état de service n'a été produit ; l'organigramme de l'antenne compte un agent d'entretien salarié ; les deux virements, identiques et juste sous 500 USD, sont versés le même jour du mois à un tiers non enregistré ; aucune approbation écrite du Field Coordinator n'est au dossier. L'explication reste à étayer.",
      ],
    },
    result: "Les deux anomalies documentées avec nature, montant, explication datée, appréciation motivée. L'explication est consignée telle que reçue ; votre appréciation est distincte.",
    pitfall: "Accepter « c'est normal, c'est toujours comme ça » sans demander la pièce. Ce n'est pas une explication vérifiée, c'est une affirmation : un auditeur senior demande la pièce, le témoignage tiers ou l'élément factuel avant de consigner l'explication comme acceptée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Conclure, recommander et signer (section 4)',
    intro: "Pourquoi : un rapport sans conclusion nette ni recommandation actionnable est un simple constat sans suite. Entrées : sections 1 à 3 complétées. Sortie : le livrable 6.",
    steps: [
      {
        title: 'Rédigez la conclusion générale sur la fiabilité du cycle trésorerie/banque',
        body: "Un niveau (fiabilité satisfaisante, limitée ou insuffisante) et deux ou trois raisons chiffrées, qui reprennent les sections précédentes.",
      },
      {
        title: 'Rédigez des recommandations avec un responsable et une date',
        body: "Chaque recommandation répond à une anomalie ou à une faiblesse du circuit. Évitez « renforcer le contrôle » : dites lequel.",
      },
      {
        title: 'Remplissez le dernier tableau « Rédigé par | Date » et relisez',
        actions: [
          "Rédigé par : nom et fonction.",
          "Date : celle de la version envoyée.",
          "Vérifiez que montants et dates sont identiques à ceux de la grille et du constat d'audit.",
        ],
      },
    ],
    example: {
      title: 'Section 4 — Conclusion et recommandations (remplies)',
      lines: [
        "Conclusion : fiabilité limitée du cycle trésorerie/banque d'octobre 2025 à mars 2026. Les six rapprochements de routine concordent (écart résiduel nul), mais deux virements de 495 USD (990 USD) vers un particulier non enregistré ne sont étayés par aucune pièce et leur explication est faible.",
        "R1 — Produire le contrat ou la facture, l'état de service et la pièce d'identité du bénéficiaire pour les deux virements ; à défaut, les traiter comme dépenses non justifiées et saisir le comité d'audit. Responsable : Clarisse M. Échéance : 21 août 2026.",
        "R2 — Interdire tout virement vers un bénéficiaire absent de la liste des fournisseurs enregistrés ; créer la fiche fournisseur avec pièce d'identité et validation de la Finance Manager. Responsable : Ruth B. Échéance : 15 septembre 2026.",
        "R3 — Instaurer une revue mensuelle du relevé bancaire sur les trois derniers mois, par la Finance Manager, indépendante de la tenue de la caisse. Responsable : Ruth B. Échéance : dès septembre 2026.",
        "Rédigé par : Amani K., auditeur(rice) interne — Date : 12/08/2026.",
      ],
    },
    result: "Livrable 6 terminé : un rapport complet en quatre sections, avec conclusion nette, trois recommandations (responsable, échéance) et signature. Contrôle : 495 + 495 = 990 USD, identique à la grille et au constat.",
    tip: "Une conclusion « fiabilité limitée » ne dit pas « fraude » : elle dit que le cycle ne permet pas, en l'état, de s'appuyer sur lui sans correction. C'est un niveau d'assurance, pas une accusation.",
  },

  // ── Procédure 7 — Caisse ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 3',
    title: 'Préparer et réaliser un comptage de caisse inopiné',
    intro: "Pourquoi : la caisse est la zone la plus exposée aux irrégularités, et un comptage annoncé n'a aucune valeur. Entrées : le journal de caisse à jour et la présence de la personne qui tient la caisse. Quand : à l'ouverture, avant toute opération de la journée.",
    steps: [
      {
        title: 'Choisissez le moment sans prévenir',
        body: "Arrivez à l'ouverture, un jour sans événement prévisible : ici, le lundi 3 août 2026 à 8h15, à l'arrivée sur site.",
      },
      {
        title: 'Fermez la caisse et constituez les présents',
        actions: [
          "Aucun mouvement pendant le comptage : ni entrée, ni sortie.",
          "Présents : la Finance Officer, qui tient la caisse, et un témoin (Moïse B.).",
        ],
      },
      {
        title: 'Comptez coupure par coupure devant la personne qui tient la caisse',
        body: "Un tableau de comptage, une ligne par coupure, signé par la personne qui tient la caisse.",
      },
      {
        title: 'Relevez tout ce qui se trouve en caisse hors espèces',
        body: "Bons de sortie, reçus, reconnaissances de dette, chèques, justificatifs en attente : chaque pièce est listée avec son montant et sa date.",
      },
    ],
    table: {
      columns: ['Coupure (USD)', 'Nombre', 'Montant (USD)'],
      rows: [
        ['100', '5', '500,00'],
        ['50', '7', '350,00'],
        ['20', '15', '300,00'],
        ['10', '9', '90,00'],
        ['5', '6', '30,00'],
        ['1', '6', '6,00'],
        ['0,50', '1', '0,50'],
        ['Total des espèces', '', '1 276,50'],
      ],
    },
    result: "Un tableau de comptage signé : 1 276,50 USD d'espèces, plus une liste de pièces trouvées en caisse. Contrôle : la somme des lignes égale le total, recompté deux fois.",
    pitfall: "Laisser la personne qui tient la caisse « préparer » avant le comptage ou « aller chercher un document ». Une caisse non fermée devant vous n'est pas comptée, elle est présentée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 3',
    title: 'Rapprocher le comptage du livre de caisse et qualifier les pièces',
    intro: "Pourquoi : un écart nul ne prouve pas la régularité : une caisse peut « tomber juste » grâce à des pièces qui n'ont rien à y faire. Entrées : le tableau de comptage, le solde du livre de caisse à la dernière écriture (31 juillet 2026).",
    steps: [
      {
        title: 'Relevez le solde du livre de caisse à la dernière écriture',
        body: "Solde au 31/07/2026 au soir : 1 361,50 USD.",
      },
      {
        title: 'Additionnez les espèces et les pièces trouvées en caisse',
        body: "Espèces comptées + bons de sortie non enregistrés + reconnaissances de dette + autres pièces.",
      },
      {
        title: 'Calculez l\'écart et qualifiez chaque pièce',
        actions: [
          "Écart = solde du livre − (espèces + pièces).",
          "Bon de sortie non enregistré : retard d'enregistrement ; la règle est l'enregistrement le jour même.",
          "Reconnaissance de dette : une avance personnelle prélevée sur la caisse n'est pas une dépense de l'organisation : c'est une irrégularité.",
        ],
      },
    ],
    example: {
      title: 'Rapprochement du comptage du 3 août 2026',
      lines: [
        "Espèces comptées : 1 276,50 USD.",
        "Bons de sortie signés non enregistrés : 55,00 USD (deux bons, du 29/07 et du 31/07/2026).",
        "Reconnaissance de dette manuscrite du chauffeur, datée du 29/07/2026 : 30,00 USD.",
        "Total : 1 276,50 + 55,00 + 30,00 = 1 361,50 USD, égal au solde du livre : écart de 0,00.",
        "Mais 85,00 USD (6,2 % du solde) ne sont pas des espèces : 55,00 USD de bons enregistrés avec retard (jusqu'à 5 jours) et 30,00 USD de prêt personnel prélevé sur la caisse, interdit.",
      ],
    },
    result: "Un écart nul, mais deux irrégularités qualifiées et chiffrées : retard d'enregistrement de 55,00 USD et reconnaissance de dette de 30,00 USD. Contrôle : espèces + pièces = livre.",
    tip: "Un écart non nul se traite autrement : comptez deux fois, demandez à la personne d'expliquer immédiatement, et consignez la réponse sans commentaire. Ne corrigez jamais l'écart vous-même et ne laissez personne « compléter » la caisse sous vos yeux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 3',
    title: 'Analyser le journal de caisse sur six mois et rédiger le procès-verbal',
    intro: "Pourquoi : le comptage donne une photo ; le journal sur six mois donne le film. Entrées : le journal de caisse d'octobre 2025 à mars 2026 et le plafond de caisse (1 500 USD).",
    steps: [
      {
        title: 'Testez le plafond de caisse sur chaque jour',
        body: "Colonne : =SI([@Solde]>1500;\"DÉPASSE\";\"\") ; filtrez et comptez les jours concernés et le maximum.",
      },
      {
        title: 'Cherchez les soldes impossibles et les gros décaissements',
        actions: [
          "Solde négatif : impossible en réalité, indice d'écritures antidatées ou saisies après coup.",
          "Décaissements en espèces de 500 USD et plus : exigent l'approbation écrite du Field Coordinator.",
        ],
      },
      {
        title: 'Rédigez le procès-verbal de comptage en une page',
        actions: [
          "Date, heure, lieu, personnes présentes.",
          "Tableau de comptage et pièces trouvées en caisse.",
          "Solde du livre, écart et analyse, réserves éventuelles.",
          "Signatures de la personne qui tient la caisse, du témoin et de l'auditeur.",
        ],
      },
    ],
    example: {
      title: 'Résultats de l\'analyse du journal et extrait du PV du 3 août 2026',
      lines: [
        "Plafond de 1 500 USD dépassé 9 jours sur la période ; maximum 2 340,00 USD le 12/02/2026. Aucun solde négatif.",
        "Décaissements en espèces de 500 USD et plus : 0 sur six mois, alors que 23 paiements de 460 à 495 USD ont été faits en espèces à un même fournisseur : un indice de plus pour le constat de fractionnement.",
        "PV : « Le 03/08/2026 à 8h15, comptage inopiné de la caisse de l'antenne de Beni en présence de Clarisse M. (Finance Officer) et de Moïse B. (témoin). Espèces : 1 276,50 USD. Pièces en caisse : bons de sortie non enregistrés 55,00 USD ; reconnaissance de dette 30,00 USD. Solde du livre : 1 361,50 USD. Écart : 0,00 USD. Réserves : les 85,00 USD de pièces ne sont pas des espèces. »",
      ],
    },
    result: "Livrable 7 terminé : un procès-verbal signé d'une page, l'analyse du plafond et des gros décaissements sur six mois.",
    pitfall: "Établir le PV après coup, de mémoire. Le procès-verbal se rédige et se signe sur place, tant que les présents sont là : un PV non signé le jour même est contestable.",
  },

  // ── Procédure 8 — Avances au personnel ──
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 3',
    title: 'Lister les avances ouvertes et calculer leur ancienneté',
    intro: "Pourquoi : une avance non justifiée est une dépense sans pièce. Elle se contrôle par une balance âgée, qui compare chaque avance au délai de la politique (7 jours ouvrables). Entrées : la balance auxiliaire du compte « Avances au personnel » au 31 mars 2026.",
    steps: [
      {
        title: 'Extrayez la balance auxiliaire des avances au 31/03/2026',
        body: "Une ligne par avance : référence, bénéficiaire, date de remise, montant, date de justification éventuelle.",
      },
      {
        title: 'Calculez les jours ouvrables écoulés',
        actions: [
          "Avance justifiée : =NB.JOURS.OUVRES([@Remise]+1;[@Justification]).",
          "Avance non justifiée : =NB.JOURS.OUVRES([@Remise]+1;DATE(2026;3;31)).",
        ],
      },
      {
        title: 'Comparez au délai de 7 jours ouvrables',
        body: "Ajoutez la colonne verdict : =SI([@Jours]>7;\"HORS DÉLAI\";\"Dans le délai\").",
      },
    ],
    table: {
      columns: ['Réf.', 'Bénéficiaire', 'Remise', 'Montant (USD)', 'Justifiée le', 'Jours ouvrables', 'Verdict'],
      rows: [
        ['AV-25-017', 'Moïse B. (mission de supervision)', '05/12/2025', '800', '19/12/2025', '10', 'Hors délai'],
        ['AV-26-003', 'Jeanine K. (atelier communautaire)', '12/02/2026', '1 500', 'Non justifiée', '33 (47 jours calendaires)', 'Hors délai'],
        ['AV-26-006', 'Jeanine K. (activité communautaire)', '02/03/2026', '700', 'Non justifiée', '21 (29 jours calendaires)', 'Hors délai'],
        ['AV-26-007', 'Safari M. (chauffeur, mission)', '16/03/2026', '300', '20/03/2026', '4', 'Dans le délai'],
      ],
    },
    result: "Une balance âgée de quatre avances (3 300 USD) avec ancienneté et verdict. Trois avances sur quatre sont hors délai ; deux (2 200 USD) restent non justifiées au 31/03/2026.",
    pitfall: "Lire seulement le solde du compte d'avances. Un solde de 2 200 USD ne dit ni depuis quand, ni à qui, ni si des avances se sont enchaînées : c'est la balance âgée qui le montre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 3',
    title: 'Tester la justification, le remboursement et l\'enchaînement des avances',
    intro: "Pourquoi : une avance justifiée dans le délai peut l'être par des pièces insuffisantes, et une nouvelle avance remise sur une avance ouverte est un contournement de la règle. Entrées : la balance âgée et les dossiers d'avance.",
    steps: [
      {
        title: 'Pour chaque avance justifiée, rapprochez avance, pièces et remboursement',
        actions: [
          "Montant de l'avance − total des justificatifs = reliquat attendu.",
          "Le reliquat est-il remboursé, avec un reçu de caisse à la date indiquée ?",
        ],
      },
      {
        title: 'Vérifiez le dossier de chaque avance',
        body: "Demande ou ordre de mission, reçu de remise des fonds signé, justificatifs lisibles et conformes à l'objet annoncé.",
      },
      {
        title: 'Testez l\'enchaînement',
        body: "Triez la balance par bénéficiaire et par date : une nouvelle avance remise alors qu'une précédente est ouverte enfreint la règle « aucune nouvelle avance tant que la précédente n'est pas soldée ».",
      },
    ],
    table: {
      columns: ['Avance', 'Test', 'Résultat'],
      rows: [
        ['AV-25-017 (800 USD)', 'Justificatifs et reliquat', 'Justifiée à hauteur de 760 USD ; reliquat de 40 USD remboursé par reçu de caisse le 19/12/2025 : cohérent, mais hors délai (10 jours ouvrables)'],
        ['AV-26-003 (1 500 USD)', 'Justificatifs', 'Aucun justificatif au 31/03/2026, 33 jours ouvrables après la remise'],
        ['AV-26-006 (700 USD)', 'Enchaînement', 'Remise le 02/03/2026 à la même bénéficiaire, alors qu\'AV-26-003 était ouverte depuis 12 jours ouvrables : règle enfreinte'],
        ['AV-26-007 (300 USD)', 'Justificatifs et délai', 'Justifiée en 4 jours ouvrables, pièces conformes : sans observation'],
      ],
    },
    result: "Pour chaque avance, un résultat de test écrit : une avance sans observation, une cohérente mais tardive, une non justifiée, une remise en violation de la règle d'enchaînement.",
    tip: "Avant de conclure, demandez la confirmation de solde au bénéficiaire : il se peut qu'il ait justifié auprès de quelqu'un d'autre qui n'a pas enregistré. Votre constat porte alors sur la tenue des livres, pas sur le bénéficiaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 3',
    title: 'Chiffrer, rédiger le constat et recommander',
    intro: "Pourquoi : une balance âgée n'a de valeur que si elle débouche sur un constat chiffré et une action datée. Entrées : la balance âgée et les résultats des tests.",
    steps: [
      {
        title: 'Chiffrez l\'exposition',
        actions: [
          "Avances ouvertes non justifiées : 1 500 + 700 = 2 200 USD, soit 100 % des avances encore ouvertes.",
          "Avances hors délai : 3 sur 4 (3 000 USD sur 3 300 USD, soit 91 %).",
        ],
      },
      {
        title: 'Rédigez un constat factuel',
        body: "Nombre d'avances, montants, ancienneté, règle citée. Sans accuser : vous constatez un non-respect de procédure, pas un détournement.",
      },
      {
        title: 'Demandez une régularisation et formulez la recommandation',
        body: "Justificatifs ou remboursement avant une date, blocage de toute nouvelle avance au bénéficiaire concerné, revue mensuelle de la balance âgée.",
      },
    ],
    example: {
      title: 'Constat sur les avances — extrait',
      lines: [
        "Au 31/03/2026, deux avances à la même bénéficiaire, de 1 500 USD (12/02/2026) et de 700 USD (02/03/2026), totalisant 2 200 USD, ne sont pas justifiées, soit 33 jours ouvrables et 21 jours ouvrables après la remise, pour un délai de 7 jours ouvrables.",
        "La seconde avance a été remise alors que la première était ouverte, contrairement à la règle de non-enchaînement.",
        "Recommandation : justifier ou rembourser les 2 200 USD avant le 21 août 2026 (responsable : bénéficiaire, avec suivi de Clarisse M.) ; bloquer toute nouvelle avance à cette personne jusqu'au solde ; instaurer une balance âgée mensuelle examinée par la Finance Manager (Ruth B., dès septembre 2026).",
      ],
    },
    result: "Livrable 8 terminé : un tableau d'ancienneté des avances et un constat chiffré, avec règle citée et recommandation datée.",
    pitfall: "Écrire « avances détournées » ou « Jeanine K. a utilisé les fonds à d'autres fins ». Vous n'avez constaté que l'absence de justificatifs ; la suite d'une éventuelle suspicion se traite avec le comité d'audit, pas dans un constat de balance âgée.",
  },


  // ───────────────────────── 6. Cas complet résolu ─────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu — « Le fractionnement déguisé, Beni » : partie 1, la grille',
    scenario: "Rappel de l'énoncé : audit financier annuel de l'antenne de Beni sur six mois. Le seuil interne est de 500 USD : au-delà, toute dépense de caisse exige l'approbation écrite préalable du Field Coordinator et la mise en concurrence d'au moins deux fournisseurs, en plus de la validation du Finance Officer. Vous avez demandé six mois de grand livre plutôt qu'un seul. En triant par fournisseur, vous découvrez Ets. Mama Furaha, 23 reçus de 460 à 495 USD. Voici la partie de la grille que vous avez saisie pour ce fournisseur (les 23 lignes, colonnes G-H-I et K).",
    steps: [
      {
        title: 'Raisonnement — Les trois pièces sont là, pourtant le statut reste « À examiner »',
        body: "Les 23 lignes ont un score de complétude de 100 % : reçu de caisse signé, bon de sortie, validation de la Finance Officer. Mais la colonne K est « À approfondir » (pas de détail des articles, pas de bon d'entrée en magasin, prix supérieur au marché) : le statut global M ne peut donc pas afficher « Conforme ». C'est la leçon centrale du module : complet n'est pas légitime.",
      },
    ],
    table: {
      columns: ['Réf.', 'Date', 'Montant (USD)', 'G – H – I', 'K — Légitimité'],
      rows: [
        ['TX-BEN-001', '02/10/2025', '485', 'O – O – O', 'À approfondir'],
        ['TX-BEN-002', '09/10/2025', '470', 'O – O – O', 'À approfondir'],
        ['TX-BEN-003', '16/10/2025', '492', 'O – O – O', 'À approfondir'],
        ['TX-BEN-005', '24/10/2025', '478', 'O – O – O', 'À approfondir'],
        ['TX-BEN-008', '06/11/2025', '468', 'O – O – O', 'À approfondir'],
        ['TX-BEN-009', '13/11/2025', '495', 'O – O – O', 'À approfondir'],
        ['TX-BEN-011', '21/11/2025', '481', 'O – O – O', 'À approfondir'],
        ['TX-BEN-013', '28/11/2025', '474', 'O – O – O', 'À approfondir'],
        ['TX-BEN-014', '04/12/2025', '490', 'O – O – O', 'À approfondir'],
        ['TX-BEN-015', '11/12/2025', '460', 'O – O – O', 'À approfondir'],
        ['TX-BEN-017', '18/12/2025', '487', 'O – O – O', 'À approfondir'],
        ['TX-BEN-018', '23/12/2025', '476', 'O – O – O', 'À approfondir'],
        ['TX-BEN-020', '08/01/2026', '472', 'O – O – O', 'À approfondir'],
        ['TX-BEN-022', '15/01/2026', '493', 'O – O – O', 'À approfondir'],
        ['TX-BEN-024', '22/01/2026', '465', 'O – O – O', 'À approfondir'],
        ['TX-BEN-025', '30/01/2026', '484', 'O – O – O', 'À approfondir'],
        ['TX-BEN-026', '05/02/2026', '480', 'O – O – O', 'À approfondir'],
        ['TX-BEN-027', '12/02/2026', '467', 'O – O – O', 'À approfondir'],
        ['TX-BEN-029', '19/02/2026', '491', 'O – O – O', 'À approfondir'],
        ['TX-BEN-030', '26/02/2026', '473', 'O – O – O', 'À approfondir'],
        ['TX-BEN-031', '05/03/2026', '488', 'O – O – O', 'À approfondir'],
        ['TX-BEN-033', '12/03/2026', '475', 'O – O – O', 'À approfondir'],
        ['TX-BEN-035', '26/03/2026', '494', 'O – O – O', 'À approfondir'],
      ],
    },
    result: "Partie 1 terminée : 23 lignes Mama Furaha saisies, ligne budgétaire « Administration - Fournitures bureau », L = O pour toutes. Total : 11 038 USD.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 2, les 12 autres lignes de la grille',
    scenario: "Les 12 autres transactions de l'échantillon (strates S1, S2, S3 hors Mama Furaha, et S4) complètent la grille à 35 lignes. Chacune est passée par le 3-way match, le test de réalité et le test d'éligibilité.",
    steps: [
      {
        title: 'Raisonnement — Chaque statut a une cause distincte',
        body: "Cinq lignes sont conformes. Sept sont « À examiner » pour sept raisons différentes : pièce absente (G ou I), facture incohérente (H), légitimité à approfondir (K), éligibilité (L). Elles se traitent en constats séparés, même quand plusieurs touchent la même ligne.",
      },
    ],
    table: {
      columns: ['Réf.', 'Fournisseur, date, montant (USD)', 'G – H – I', 'K', 'L', 'Statut (M)'],
      rows: [
        ['TX-BEN-004', 'Pharmacie Centrale de Beni, 21/10/2025, 1 860', 'O – O – O', 'Légitime', 'O', 'Conforme'],
        ['TX-BEN-006', 'Ets. Kavira Fournitures, 30/10/2025, 85', 'O – O – O', 'Légitime', 'O', 'Conforme'],
        ['TX-BEN-007', 'Station Mwangaza (carburant), 06/11/2025, 1 120', 'O – O – O', 'Légitime', 'N', 'À examiner'],
        ['TX-BEN-010', 'Hôtel Les Cèdres (atelier agents de santé), 19/11/2025, 2 340', 'O – O – N', 'À approfondir', 'O', 'À examiner'],
        ['TX-BEN-012', 'Garage Bin Auto, 27/11/2025, 340', 'O – O – O', 'Légitime', 'O', 'Conforme'],
        ['TX-BEN-016', 'Papeterie Umoja, 12/12/2025, 512', 'N – O – O', 'À approfondir', 'O', 'À examiner'],
        ['TX-BEN-019', 'Pharmacie Centrale de Beni, 29/12/2025, 1 395', 'O – O – O', 'Légitime', 'N', 'À examiner'],
        ['TX-BEN-021', 'Garage Bin Auto, 15/01/2026, 2 780', 'O – N – N', 'À approfondir', 'O', 'À examiner'],
        ['TX-BEN-023', 'Transports Kivu Express, 22/01/2026, 385', 'O – O – O', 'Légitime', 'O', 'Conforme'],
        ['TX-BEN-028', 'Cyber Espace Beni, 18/02/2026, 60', 'O – N – O', 'Légitime', 'O', 'À examiner'],
        ['TX-BEN-032', 'Ets. Kalinda Traiteur, 10/03/2026, 420', 'O – O – O', 'Légitime', 'O', 'Conforme'],
        ['TX-BEN-034', 'Per diem mission Mangina (3 agents × 2 jours), 24/03/2026, 300', 'O – O – O', 'Légitime', 'N', 'À examiner'],
      ],
    },
    result: "Grille complète : 35 lignes, 22 635 USD. Statuts : 5 « Conforme » (TX-BEN-004, 006, 012, 023, 032) et 30 « À examiner » (23 Mama Furaha + 7 autres).",
  },
  {
    type: 'case-study',
    title: "Cas résolu — partie 3, l'onglet Synthese-Patterns",
    scenario: "Livrable 4 : vous renseignez le seuil (B11 = 500) et le tableau fournisseur × mois (A16:B21), puis vous lisez les résultats que les formules calculent.",
    steps: [
      {
        title: 'Raisonnement 1 — Le taux de conformité décrit l\'échantillon, pas l\'antenne',
        body: "B5 = 35, B6 = 5, B7 = 30, B8 = 14,3 %. Hors Mama Furaha, le taux est de 5 ÷ 12 = 41,7 %. Les deux chiffres sont à présenter ensemble, avec la précision que l'échantillon est orienté risque.",
      },
      {
        title: 'Raisonnement 2 — Le pattern ne se voit que sur six mois alignés',
        body: "Dans un mois pris seul, chaque paiement est sous le seuil, complet, signé. Les six alertes consécutives, avec un cumul mensuel de 1 457 à 1 925 USD, le font apparaître.",
      },
      {
        title: 'Raisonnement 3 — Une alerte se chiffre avant de se présenter',
        body: "23 occurrences, 11 038 USD, moyenne de 1 839,67 USD par mois (3,7 fois le seuil), montants entre 92 % et 99 % du seuil, 0 approbation du Field Coordinator, 0 mise en concurrence.",
      },
    ],
    table: {
      columns: ['A — Fournisseur', 'B — Mois', 'C — Nb < seuil', 'D — Montant agrégé (USD)', 'E — Alerte'],
      rows: [
        ['Ets. Mama Furaha', '2025-10', '4', '1 925', 'A investiguer'],
        ['Ets. Mama Furaha', '2025-11', '4', '1 918', 'A investiguer'],
        ['Ets. Mama Furaha', '2025-12', '4', '1 913', 'A investiguer'],
        ['Ets. Mama Furaha', '2026-01', '4', '1 914', 'A investiguer'],
        ['Ets. Mama Furaha', '2026-02', '4', '1 911', 'A investiguer'],
        ['Ets. Mama Furaha', '2026-03', '3', '1 457', 'A investiguer'],
        ['Total / période', '6 mois', '23', '11 038', 'Fractionnement probable'],
      ],
    },
    result: "Livrable 4 terminé : onglet Synthese-Patterns complet, six alertes lues, pattern chiffré à 23 occurrences et 11 038 USD. Contrôle : les montants de D16 à D21 se retrouvent dans la partie 1.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — partie 4, le constat d'audit final (demi-page)",
    scenario: "Livrable 5 : le constat d'audit financier formel, qui décrit le fait observé, cite la règle contournée, qualifie le risque et recommande. Voici la version envoyée aux audités pour vérification des faits.",
    steps: [
      {
        title: 'Raisonnement — Contournement établi, intention non établie',
        body: "Le texte sépare ce que les chiffres démontrent (le seuil est contourné, aucune procédure renforcée n'a été appliquée) de ce qu'ils ne démontrent pas (l'intention et la destination des biens). Cette séparation protège l'audité d'une accusation sans preuve, et protège l'auditeur d'un constat contesté.",
      },
    ],
    example: {
      title: "Constat n° 1 — Fractionnement de dépenses de caisse sous le seuil de 500 USD",
      lines: [
        "Fait observé. Entre le 02/10/2025 et le 26/03/2026, l'antenne de Beni a réglé en espèces 23 achats à Ets. Mama Furaha, enregistrés comme « fournitures de bureau et consommables », pour un total de 11 038 USD. Les montants vont de 460 à 495 USD (92 % à 99 % du seuil de 500 USD) ; aucun ne le dépasse. Le fournisseur est payé quatre fois par mois d'octobre à février et trois fois en mars, soit un cumul mensuel moyen de 1 840 USD, 3,7 fois le seuil.",
        "Règle contournée. Le manuel de procédures financières (art. 4.3) exige, au-delà de 500 USD, la validation du Finance Officer, l'approbation écrite préalable du Field Coordinator et la mise en concurrence d'au moins deux fournisseurs. Aucune des 23 dépenses n'a fait l'objet d'une approbation du Field Coordinator ni de devis concurrents, alors que le cumul mensuel dépasse chaque mois le seuil.",
        "Risque. Élevé. Le contournement du seuil est établi. La régularité des paiements, leur proximité du seuil et leur cumul constituent des indices concordants de fractionnement ; l'intention et la destination des biens ne sont pas établies (20 reçus sans bon d'entrée en magasin, 18 sans détail d'articles). Ce constat ne conclut pas à une fraude.",
        "Recommandation. Règle de cumul par fournisseur sur 30 jours (Ruth B., 15/09/2026) ; détail des articles et bons d'entrée pour les 23 achats (Clarisse M., 21/08/2026) ; approbation du Field Coordinator pour toute nouvelle commande à ce fournisseur (Moïse B., immédiat) ; saisine du comité d'audit si les pièces ne sont pas produites (Amani K., 31/08/2026).",
      ],
    },
    result: "Livrable 5 terminé : un constat d'une demi-page, quatre blocs, tous les chiffres traçables jusqu'à la grille.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 5, le rapport de rapprochement bancaire complété',
    scenario: "Livrable 6 : le rapprochement des mêmes six mois révèle deux virements de 495 USD vers un compte au nom d'un particulier non identifié comme fournisseur enregistré, le même jour du mois. Voici rapport-rapprochement-bancaire-audit.docx tel que signé, section par section.",
    steps: [
      {
        title: 'Raisonnement — Une explication se consigne, puis se teste',
        body: "La Finance Officer répond par courriel que le bénéficiaire est un prestataire de nettoyage occasionnel payé sur le compte de son neveu. Vous consignez cette réponse sans la commenter, puis vous la testez : pas de contrat, pas de facture, un agent d'entretien salarié figure déjà à l'organigramme, montants identiques et juste sous 500 USD, même jour du mois. L'appréciation est « faible ».",
      },
    ],
    table: {
      columns: ['Section du template', 'Contenu saisi'],
      rows: [
        ['1. Période et périmètre', "HSGL, antenne de Beni (projets Meridian et ECHO) ; auditeurs Amani K. et Fatou S. ; octobre 2025 à mars 2026 (6 mois consécutifs) ; compte courant USD ****2208"],
        ['2. Éléments de routine', "Six rapprochements sans écart résiduel : chèques en circulation, dépôts en transit, frais bancaires non comptabilisés de 35 à 40 USD par mois"],
        ['3.1 Anomalie n°1', "Nature : virement VIR-0126-07 du 27/01/2026 vers « M. Muhindo T. » (****4471), non enregistré comme fournisseur. Montant : 495,00. Explication : courriel de Clarisse M. du 06/08/2026 (prestataire de nettoyage occasionnel, payé via le compte de son neveu, pas de contrat écrit). Appréciation : faible"],
        ['3.2 Anomalie n°2', "Nature : virement VIR-0226-08 du 27/02/2026, même bénéficiaire, même libellé, même montant. Montant : 495,00. Explication : identique. Appréciation : faible, anomalie répétée le même jour du mois"],
        ['4. Conclusion', "Fiabilité limitée du cycle trésorerie/banque : soldes rapprochés mais 990 USD de virements non étayés vers un bénéficiaire non enregistré"],
        ['4. Recommandations', "R1 pièces justificatives (Clarisse M., 21/08/2026) ; R2 interdiction de payer un bénéficiaire non enregistré (Ruth B., 15/09/2026) ; R3 revue mensuelle du relevé sur trois mois (Ruth B., septembre 2026)"],
        ['Rédigé par / Date', 'Amani K., auditeur(rice) interne — 12/08/2026'],
      ],
    },
    result: "Livrable 6 terminé : rapport complet, deux anomalies documentées avec explication datée et appréciation motivée, conclusion et trois recommandations avec responsable et échéance.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 6, la cohérence entre tous les documents',
    scenario: "L'exigence finale : le dossier est cohérent d'un document à l'autre. Mêmes montants, mêmes dates, mêmes références. Avant de transmettre, faites ce dernier contrôle croisé : un chiffre qui change d'un document à l'autre ruine la crédibilité de tout le dossier.",
    steps: [
      {
        title: 'Raisonnement — Chaque chiffre a un document d\'origine',
        body: "Le montant de 11 038 USD naît dans la grille et dans l'onglet Synthese-Patterns ; il se retrouve tel quel dans le constat. Le montant de 990 USD naît dans le rapport bancaire ; il se retrouve dans la conclusion. Les deux dossiers se recoupent par le fournisseur et par la période.",
      },
    ],
    table: {
      columns: ['Information', 'Grille / Synthèse', 'Constat d\'audit', 'Rapport bancaire'],
      rows: [
        ['Période', '02/10/2025 – 26/03/2026', 'Idem', '6 mois, octobre 2025 à mars 2026'],
        ['Fournisseur signalé', 'Ets. Mama Furaha (23 lignes)', 'Ets. Mama Furaha, 23 achats', "Absent : le bénéficiaire des virements est un tiers"],
        ['Montant du pattern', '11 038 USD (D16:D21)', '11 038 USD', '—'],
        ['Montant des anomalies bancaires', '—', 'Non repris', '2 × 495 = 990 USD'],
        ['Seuil de référence', '500 USD (B11)', '500 USD, art. 4.3', 'Virements juste sous 500 USD'],
        ['Taux de conformité', '14,3 % (échantillon)', 'Non repris', '—'],
        ['Date de rédaction', '30/07 – 05/08/2026', 'Envoyé le 07/08/2026', '12/08/2026'],
      ],
    },
    result: "Un dossier dans lequel chaque chiffre se retrouve à l'identique : 35 lignes, 11 038 USD, 23 occurrences, 990 USD. Les audités peuvent contester une interprétation ; ils ne peuvent pas contester un chiffre.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — le dossier de mission complet, de la demande de données à la restitution",
    scenario: "Voici la chronologie complète de l'audit financier de Beni et la pièce produite à chaque étape. C'est le modèle de dossier que vous reproduirez pour chaque mission financière.",
    steps: [
      {
        title: 'Lecture de la chronologie',
        body: "Notez que le tirage de l'échantillon (29 juillet) précède tout déplacement, que le comptage de caisse a lieu dès l'arrivée sur site (3 août) et que les faits sont soumis aux audités avant la restitution (14 août).",
      },
    ],
    table: {
      columns: ['Date', 'Étape', 'Pièce produite', 'Dossier'],
      rows: [
        ['23-27/07/2026', 'Demande et réception des données', 'Courriel de demande, extraction contrôlée', '01_Cadrage'],
        ['28-29/07', 'Analyse de population et échantillon', 'Note méthodologique, tirage figé', '04_Tests/Financier'],
        ['30/07', 'Initialisation de la grille', 'Grille de 35 lignes', '04_Tests/Financier'],
        ['03/08', 'Comptage de caisse inopiné', 'Procès-verbal signé', '04_Tests/Financier'],
        ['03-05/08', '3-way match, légitimité, éligibilité', 'Grille complétée, tableau d\'inéligibilité', '04_Tests/Financier'],
        ['05/08', 'Visite du fournisseur', 'Note de visite', '04_Tests/Financier'],
        ['05-06/08', 'Rapprochement bancaire et réponse de la Finance Officer', 'Rapport sections 1 à 3', '04_Tests/Financier'],
        ['06-07/08', 'Consolidation, avances', 'Synthèse, balance âgée, constats', '04_Tests/Financier'],
        ['07/08', 'Constat de fractionnement', 'Constat envoyé pour vérification des faits', '04_Tests/Financier'],
        ['12/08', 'Conclusion du rapport bancaire', 'Rapport signé', '04_Tests/Financier'],
        ['14/08', 'Restitution', 'Présentation des constats à Joseph T.', '05_Restitution'],
      ],
    },
    result: "Un dossier de onze étapes, dans lequel chaque pièce est datée et justifie la suivante.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: "Exercice 1 — Le fractionnement de Butembo : grille, constat et anomalies bancaires",
    instructions: "Vous menez l'audit financier annuel de l'antenne de Butembo de HSGL sur les six derniers mois. La politique interne fixe à 400 USD le seuil au-delà duquel toute dépense de caisse exige l'approbation écrite préalable du Field Coordinator et la mise en concurrence d'au moins deux fournisseurs. En triant le grand livre de caisse par fournisseur plutôt que par date, vous remarquez qu'« Ets. Kitumaini Services », enregistré comme fournisseur de « fournitures et consommables », apparaît trois à quatre fois par mois, chaque mois, pour des montants qui oscillent entre 360 et 395 USD, jamais au-dessus de 400 USD. Chaque pièce est complète. Par ailleurs, le rapprochement bancaire des six mêmes mois révèle deux virements de 395 USD vers un compte au nom d'un particulier non enregistré comme fournisseur, le même jour du mois. Reprenez la méthode du cas résolu de Beni, mais avec vos propres données : ne recopiez pas les chiffres de Beni.",
    steps: [
      {
        title: 'Simulez les données (procédure 1)',
        actions: [
          "Créez au moins 12 lignes de transactions plausibles avec Ets. Kitumaini Services, réparties sur les six mois, plus une dizaine de transactions « bruit » avec d'autres fournisseurs.",
          "Incluez dans le bruit au moins une pièce incomplète, une transaction à approfondir et une transaction inéligible.",
        ],
      },
      {
        title: 'Complétez la grille grille-verification-pieces-comptables.xlsx (procédures 2 et 3)',
        actions: [
          "Renseignez les colonnes A à L de chaque ligne, avec une note de cellule pour chaque « N » et chaque appréciation de légitimité.",
          "Laissez les formules des colonnes C, J et M intactes.",
        ],
      },
      {
        title: 'Utilisez l\'onglet Synthese-Patterns (procédure 4)',
        actions: [
          "Saisissez le seuil de 400 en B11 et le tableau fournisseur × mois en A16:B21.",
          "Notez le nombre exact d'occurrences et le montant total agrégé sur la période.",
        ],
      },
      {
        title: 'Rédigez le constat d\'audit d\'une demi-page maximum (procédure 5)',
        actions: [
          "Décrivez le fait observé (fréquence, montants, fournisseur), citez la règle contournée (seuil de 400 USD, approbation, mise en concurrence).",
          "Qualifiez le risque (négligence ou fractionnement intentionnel) en expliquant les éléments objectifs sur lesquels vous vous fondez, sans conclure à la fraude.",
        ],
      },
      {
        title: 'Documentez les deux anomalies bancaires (procédure 6)',
        actions: [
          "Complétez rapport-rapprochement-bancaire-audit.docx : sections 1 à 4, avec nature, montant, explication obtenue (simulez une réponse du Finance Officer), appréciation, conclusion et recommandation.",
        ],
      },
      {
        title: 'Faites le contrôle de cohérence final',
        body: "Mêmes montants, mêmes dates, mêmes références dans la grille, le constat et le rapport.",
      },
    ],
    tip: "Pour des montants crédibles : prenez un seuil de 400 USD, des montants entre 90 % et 99 % du seuil, trois ou quatre paiements par mois, un cumul mensuel supérieur à 1 400 USD. Faites varier les dates, et gardez le même nom de fournisseur à l'identique.",
    deliverable: "La grille complétée (au moins 22 lignes), l'onglet de synthèse avec le pattern chiffré, le constat d'audit d'une demi-page, le rapport de rapprochement bancaire complété : le tout cohérent d'un document à l'autre.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Le 3-way match sur quatre dossiers',
    instructions: "Pour chaque transaction, appliquez les six contrôles de la procédure 2, cochez G, H et I, choisissez la valeur de la colonne K, calculez le score J et donnez le statut M (on suppose L = O). Justifiez chaque « N » en une phrase.",
    table: {
      columns: ['Réf.', 'Bon de commande', 'Facture', 'Preuve de paiement', 'Observation'],
      rows: [
        ['E-01', 'BC-0112, Ets. Safina, 1 200 USD, 40 cartons', 'Facture n° 88 du 12/02/2026, Ets. Safina, 1 200 USD', 'Virement du 05/02/2026, 1 200 USD, à Ets. Safina', 'Rien d\'autre à signaler'],
        ['E-02', 'BC-0120, Ets. Umoja, 40 unités à 20 USD, 800 USD ; bon de réception : 40 unités', 'Facture n° 31, 45 unités à 20 USD, 900 USD', 'Virement de 900 USD à Ets. Umoja', 'Rien d\'autre à signaler'],
        ['E-03', 'BC-0131, Ets. Safina, 650 USD', 'Facture n° 102, Ets. Safina, 650 USD', 'Virement de 650 USD à « M. Kahindo B. »', 'Particulier absent de la liste des fournisseurs'],
        ['E-04', 'BC-0140, Cabinet Ubora, étude de faisabilité, 2 000 USD', 'Facture n° 7, Cabinet Ubora, 2 000 USD', 'Virement de 2 000 USD à Cabinet Ubora', 'Aucun rapport d\'étude retrouvé dans les dossiers'],
      ],
    },
    steps: [
      { title: 'Remplissez un tableau Réf. / G / H / I / J / K / M avec une justification par « N »' },
      { title: 'Pour E-04, décrivez les tests de réalité que vous feriez avant de choisir la valeur de K' },
      { title: 'Indiquez, pour chaque dossier, le signal d\'alerte du tableau « six signaux » concerné' },
    ],
    tip: "Corrigé indicatif : E-01 G = O, H = O, I = N (paiement 7 jours avant la facture), J = 67 %, K = À approfondir. E-02 G = O, H = N (45 unités facturées contre 40 commandées et reçues), I = N (900 USD payés pour 800 autorisés), J = 33 %. E-03 G = O, H = O, I = N (bénéficiaire différent du fournisseur), J = 67 %. E-04 G, H, I = O, J = 100 %, K = À approfondir (aucun livrable), M = À examiner.",
    deliverable: "Un tableau de quatre lignes complété avec justifications, et trois tests de réalité proposés pour E-04.",
  },
  {
    type: 'exercise',
    title: "Exercice 3 — L'éligibilité de quatre dépenses Meridian",
    instructions: "Appliquez les trois tests de la procédure 3 aux quatre dépenses suivantes, imputées au projet Meridian (période du 01/01/2026 au 31/12/2026, per diem plafonné à 35 USD par agent et par jour, alcool interdit). Pour chacune : colonne L, part inéligible chiffrée, catégorie de traitement.",
    table: {
      columns: ['Réf.', 'Dépense', 'Date', 'Montant (USD)', 'Ligne imputée'],
      rows: [
        ['F-01', 'Carburant des véhicules de l\'antenne', '12/03/2026', '420', 'Santé - Médicaments et consommables'],
        ['F-02', 'Repas d\'atelier, facture détaillée comprenant 60 USD de boissons alcoolisées', '18/03/2026', '180', 'Formation - Ateliers'],
        ['F-03', 'Atelier de formation, facture et service du 22/12/2025', '22/12/2025', '1 600', 'Formation - Ateliers'],
        ['F-04', 'Per diem de 4 agents pendant 3 jours à 45 USD par jour et par agent', '25/03/2026', '540', 'Personnel - Per diem'],
      ],
    },
    steps: [
      { title: 'Remplissez un tableau Réf. / Test échoué / Règle citée / Colonne L / Part inéligible / Traitement' },
      { title: 'Calculez le total exposé, le total reclassable et le total définitivement inéligible' },
      { title: 'Rédigez en trois lignes le message au grants officer' },
    ],
    tip: "Corrigé indicatif : F-01 mauvaise ligne, 420 USD reclassables vers « Logistique - Carburant ». F-02 catégorie interdite, 60 USD définitivement inéligibles. F-03 hors période, 1 600 USD (à reclasser sur un autre projet ou fonds propres). F-04 per diem : 4 × 3 × 35 = 420 autorisés, excédent de 120 USD. Total exposé 2 200 USD ; part définitivement inéligible 180 USD (60 + 120) ; reste reclassable ou à confirmer.",
    deliverable: "Un tableau d'inéligibilité de quatre lignes, trois totaux recalculés et un message de trois lignes.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Caisse et avance : deux mini-contrôles à Butembo',
    instructions: "À Butembo, le plafond de caisse est de 1 200 USD et la règle d'avance est la même qu'à Beni (7 jours ouvrables, pas de nouvelle avance tant que la précédente n'est pas soldée). Traitez les deux situations.",
    table: {
      columns: ['Situation', 'Données'],
      rows: [
        ['Comptage de caisse inopiné du 10/08/2026, 8h15', 'Espèces comptées : 842,00 USD. Bons de sortie signés non enregistrés : 118,00 USD. Solde du livre de caisse : 1 010,00 USD.'],
        ['Avance AV-26-011', 'Remise le lundi 02/03/2026 : 900 USD. Justifiée le vendredi 20/03/2026 par des pièces pour 760 USD. Aucun remboursement du reliquat.'],
      ],
    },
    steps: [
      { title: 'Comptage : calculez l\'écart, qualifiez-le et rédigez le paragraphe de réserves du procès-verbal' },
      { title: 'Avance : calculez les jours ouvrables écoulés et le reliquat dû, et rédigez le constat en trois phrases' },
      { title: 'Proposez une recommandation datée pour chacune des deux situations' },
    ],
    tip: "Corrigé indicatif : écart = 1 010,00 − (842,00 + 118,00) = 50,00 USD manquants non expliqués, à consigner sans correction. Avance : 14 jours ouvrables écoulés (du 03/03 au 20/03) pour un délai de 7 ; reliquat de 140 USD (900 − 760) à rembourser.",
    deliverable: "Un paragraphe de procès-verbal, un constat d'avance en trois phrases et deux recommandations avec responsable et date.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre échantillon est décrit par une note méthodologique : population, seuil de matérialité justifié, strates avec critère, mode de tirage, limites d'extrapolation.",
      "Les colonnes G, H et I de la grille ne portent « O » que pour une pièce présente ET cohérente avec les deux autres ; chaque « N » a une note qui cite l'écart.",
      "La colonne K n'est jamais « Légitime » sans test de réalité, jamais « Non légitime » sans preuve, et chaque appréciation a sa justification d'une phrase.",
      "La colonne L est renseignée avec la règle citée, et la part inéligible est chiffrée séparément du montant de la transaction.",
      "Dans l'onglet Synthese-Patterns, fournisseur et mois sont saisis à l'identique de la grille (mois en texte), B11 est correct, et vous avez recalculé B6 à la main.",
      "Votre constat tient en une demi-page, cite la règle avec son article, chiffre le pattern (occurrences, montant, plus petit et plus grand montant) et ne conclut pas à une fraude sans preuve.",
      "Votre rapport de rapprochement bancaire couvre au moins trois mois consécutifs, distingue les écarts de routine des anomalies, consigne chaque explication avec date et interlocuteur, et se termine par une conclusion et des recommandations avec responsable.",
      "Les montants, dates et références sont identiques dans la grille, le constat et le rapport.",
      "Votre procès-verbal de caisse est daté, signé, et distingue les espèces des pièces trouvées en caisse.",
      "Dans l'exercice 2, E-01 est repéré par la chronologie, E-02 par l'écart facture et bon de commande, E-03 par le bénéficiaire du paiement, et E-04 est à approfondir bien que complet.",
    ],
  },

  // ───────────────────────── 8. Erreurs fréquentes ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Vérifier la forme d'une pièce sans interroger la légitimité réelle de la dépense — un tampon, une signature et un classement impeccable ne prouvent ni livraison ni service rendu. Parade : test de réalité sur chaque dépense significative, avant de choisir la valeur de la colonne K (procédure 2, étape 4).",
      "Analyser un seul mois isolément — le fractionnement ne se voit jamais dans un mois pris seul. Parade : six mois alignés, demandés d'un coup dès le départ (procédure 1, étape 1).",
      "Accepter une pièce « presque complète » en se disant qu'on la complètera plus tard — elle ne l'est presque jamais. Parade : constat immédiat, demande écrite avec délai de 48 heures (procédure 2, étape 5).",
      "Se contenter de la réponse rassurante de la Finance Officer sans demander de preuve — « c'est toujours comme ça » est une affirmation. Parade : demander la pièce, tester la cohérence, consigner l'explication telle quelle (procédure 6, étape 4).",
      "Trier son échantillon uniquement par ordre chronologique — cela masque exactement les patterns de fractionnement et de bénéficiaire récurrent. Parade : retrier par fournisseur et par bénéficiaire avant de conclure (procédure 1, étape 3).",
      "Se fier à un rapprochement qui « tombe juste » — un virement bien comptabilisé des deux côtés peut être irrégulier. Parade : interroger les lignes, pas seulement les soldes (procédure 6, étape 3).",
      "Confondre légitimité et éligibilité, ou marquer inéligible une transaction entière quand seule une part l'est. Parade : deux contrôles séparés, part inéligible chiffrée (procédure 3).",
      "Écrire « fraude » sans preuve suffisante. Parade : établir le contournement par les faits, qualifier l'intention en niveaux de preuve, escalader au comité si les indices se renforcent (procédure 5, étape 2).",
      "Annoncer le taux de conformité d'un échantillon orienté risque comme celui de toute la population. Parade : l'écrire dans la note et la synthèse (procédure 4, étape 1).",
      "Annoncer un comptage de caisse, ou le rédiger après coup. Parade : arriver à l'ouverture, fermer la caisse, signer le procès-verbal sur place (procédure 7).",
    ],
  },

  // ───────────────────────── 9. Réalisations + check-list ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez construit un échantillon orienté risque de 35 transactions sur une population de 214 (58 400 USD), après contrôle d'exhaustivité et analyse de population par fournisseur, et rédigé la note méthodologique qui le justifie.",
      "Vous avez complété la grille de vérification des pièces comptables : 3-way match chiffre par chiffre, tests de réalité, appréciation de légitimité justifiée et traitement de chaque pièce incomplète en constat.",
      "Vous avez contrôlé l'éligibilité à la période, à la ligne budgétaire et aux règles du bailleur, et chiffré 2 605 USD exposés dont 90 USD définitivement inéligibles dans un tableau avec traitement proposé.",
      "Vous avez lu l'onglet de synthèse (taux de conformité de 14,3 % sur l'échantillon) et fait ressortir un fractionnement de 23 paiements et 11 038 USD sur six mois.",
      "Vous avez rédigé un constat d'audit d'une demi-page qui décrit le fait, cite la règle, qualifie le risque sans conclure à la fraude et recommande, puis l'avez soumis aux audités pour vérification des faits.",
      "Vous avez réalisé un rapprochement bancaire d'audit sur six mois, documenté deux anomalies de 495 USD avec explication testée, conclusion et recommandations dans le rapport signé.",
      "Vous avez réalisé un comptage de caisse inopiné avec son procès-verbal, et construit la balance âgée des avances avec son constat chiffré.",
      "Vous avez vérifié la cohérence des montants, dates et références entre tous les documents du dossier.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer le 3-way match et pourquoi il juge la légitimité d'une dépense, pas seulement sa conformité formelle.",
      "Je sais distinguer un rapprochement bancaire de routine (équilibrer des soldes) d'un rapprochement bancaire d'audit (détecter des anomalies et des patterns).",
      "Je sais construire un échantillon de pièces comptables orienté risque plutôt qu'aléatoire pur, et documenter ma méthode de sélection.",
      "Je sais distinguer la légitimité d'une dépense de son éligibilité à une ligne budgétaire bailleur, et vérifier les deux séparément.",
      "Je sais reconnaître, dans un jeu de données multi-mois, un pattern de fractionnement de dépense sous un seuil d'autorisation.",
      "J'ai complété une grille de vérification des pièces comptables avec un échantillon simulé, jusqu'au calcul du taux de conformité.",
      "J'ai rédigé un rapport de rapprochement bancaire documentant au moins une anomalie, avec conclusion et recommandation.",
      "Je sais conduire un comptage de caisse inopiné et lire une balance âgée d'avances.",
      "Je sais rédiger un constat d'audit d'une demi-page qui ne conclut pas à la fraude sans preuve suffisante.",
    ],
  },

  // ───────────────────────── 10. Clôture ─────────────────────────
  {
    type: 'closing',
    nextModuleHint: "Module 05 — Audit des RH & Programmes. À Beni, vous avez vu un virement mensuel partir vers un particulier absent de la liste des fournisseurs : le module suivant applique le même raisonnement aux salaires, aux présences et aux activités de programme, pour détecter les bénéficiaires qui n'existent que sur le papier.",
  },
]
