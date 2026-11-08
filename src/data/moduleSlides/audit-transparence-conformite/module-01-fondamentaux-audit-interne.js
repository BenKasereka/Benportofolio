// Module 01 — Fondamentaux de l'Audit Interne ONG
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (lettre-de-mission-audit-interne.docx, grille-evaluation-composantes-coso.xlsx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (mission achats-logistique au bureau de Goma de l'ONG fictive
// « Horizon Santé Grands Lacs »), avec exemples remplis, résultat attendu,
// astuces et erreurs à éviter.
// Les organisations, bailleurs, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: "Fondamentaux de l'Audit Interne ONG",
    hook: "Une équipe qui vous voit arriver pense presque toujours « l'inspecteur qui vient nous piéger ». À la fin de ce module, vous aurez en main tout ce qu'il faut pour démarrer une mission d'audit interne inattaquable : une déclaration d'indépendance argumentée, une lettre de mission signée d'une page, une réunion d'ouverture qui obtient la coopération, une grille COSO notée sur preuves et un planning d'entretiens priorisé par les risques.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Tester votre indépendance avant d'accepter une mission, en produisant une analyse des menaces (auto-révision, familiarité, plaidoyer) et une note de déclaration d'une demi-page adressée au comité d'audit, avec une option de mitigation justifiée.",
      "Qualifier toute demande reçue (audit interne d'assurance, mission de conseil, contrôle de gestion, supervision hiérarchique) à l'aide du test des trois critères cumulatifs, en produisant une réponse écrite qui recadre les demandes hors mandat.",
      "Vérifier le cadre IIA de votre fonction (charte, rattachement, droits d'accès, code de déontologie), en produisant une fiche de contrôle de la charte et un « kit de légitimité » prêt à présenter.",
      "Cadrer une mission par les risques à partir d'une extraction Excel des achats, en produisant une cotation impact × probabilité, des objectifs rédigés, un périmètre avec exclusions et une répartition des jours-auditeur.",
      "Rédiger et faire signer la lettre de mission avec le template lettre-de-mission-audit-interne.docx, section par section, en produisant une lettre d'une page signée avant tout entretien de collecte.",
      "Conduire la réunion d'ouverture puis réaliser un diagnostic COSO sur preuves avec grille-evaluation-composantes-coso.xlsx, en produisant un compte rendu d'ouverture, une grille notée et commentée et la liste des composantes sous le seuil d'alerte de 3/5.",
      "Planifier entretiens et collecte documentaire selon les priorités COSO et résister à une pression sur vos conclusions, en produisant une liste de documents, un planning d'entretiens communiqué à l'avance et une note au dossier traçant toute tentative d'influence.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur l'audit : c'est le démarrage complet d'une vraie mission, dans l'ordre où vous le vivrez. Chaque procédure se termine par une pièce du dossier de mission, construite sur un seul cas fil rouge, depuis le courriel qui vous assigne la mission jusqu'au planning des tests détaillés.",
      "Le cas fil rouge : vous êtes Amani K., nommé(e) auditeur(rice) interne de « Horizon Santé Grands Lacs » (HSGL), ONG internationale de santé fictive active au Nord et au Sud-Kivu. Le 20 avril 2026, le comité d'audit vous confie l'audit du cycle achats-logistique du bureau de Goma… le bureau où vous étiez Log Manager jusqu'en mars 2025.",
    ],
    bullets: [
      "Livrable 1 — L'analyse de vos liens avec le périmètre et la note de déclaration de conflit d'intérêt, avec la décision écrite du comité.",
      "Livrable 2 — La réponse écrite qui qualifie et recadre les demandes annexes reçues (contrôle de gestion, validation de bons de commande).",
      "Livrable 3 — La fiche de contrôle de la charte d'audit et votre kit de légitimité.",
      "Livrable 4 — Le cadrage par les risques : analyse Excel des 412 bons de commande, cotation des risques, objectifs, périmètre, budget-temps.",
      "Livrable 5 — La lettre de mission signée (une page), section par section.",
      "Livrable 6 — Le compte rendu de la réunion d'ouverture.",
      "Livrable 7 — La grille COSO notée et commentée, sa synthèse et les priorités de tests.",
      "Livrable 8 — La liste des documents à fournir, le planning d'entretiens et le courriel d'envoi.",
      "Livrable 9 — La note au dossier qui trace une pression sur vos conclusions.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : HSGL, bureau de Goma',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. L'organisation, les personnes et les montants sont fictifs, mais construits sur des configurations réelles de bureaux de base dans l'Est de la RDC.",
    table: {
      columns: ['Personne', 'Fonction', 'Lien avec vous'],
      rows: [
        ['Hélène V.', "Présidente du comité d'audit du Conseil d'administration", "Commanditaire de la mission"],
        ['Joseph T.', 'Directeur Pays', 'Aucun lien antérieur'],
        ['Dr Patrice N.', 'Coordinateur de la base de Goma', "Ancien pair (vous étiez Log Manager sous la même direction)"],
        ['Ruth B.', 'Finance Manager de la base', 'Aucun lien antérieur (arrivée en 2025)'],
        ['Josué M.', 'Logistics Officer', "Recruté par vous en 2023, relation de travail proche"],
        ['Esther K. et Didier L.', 'Assistante logistique et magasinier', 'Supervisés directement par vous en 2023-2025'],
        ['Fatou S.', 'Auditrice interne senior, bureau régional', 'Pair auditrice, aucun lien avec Goma'],
      ],
    },
    example: {
      title: 'Chiffres clés du périmètre proposé',
      lines: [
        "Bureau de Goma : 46 employés, 3 bailleurs, budget annuel de 3,2 M USD.",
        "Période à auditer : 1er octobre 2025 – 31 mars 2026 (6 mois) — 412 bons de commande pour 1 380 000 USD.",
        "Nouveau bailleur « Fonds Meridian » intégré en janvier 2026 : il exige une mise en concurrence formelle dès 5 000 USD, alors que la procédure interne de HSGL ne l'impose qu'au-delà de 10 000 USD.",
        "Votre passé : Log Manager de Goma de janvier 2023 à mars 2025 ; vous avez validé en septembre 2024 la procédure achats v2 et la grille des seuils de délégation, toujours en vigueur.",
      ],
    },
    pitfall: "Le comité d'audit ignore votre passé à Goma : il vous a assigné(e) parce que vous étiez disponible et que vous « connaissez le contexte ». Ce qui ressemble à un avantage logistique est en réalité le premier problème de la mission — la procédure 1 le traite.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: "Ce qu'est réellement l'audit interne",
    body: [
      "La définition de l'IIA (Institute of Internal Auditors, l'organisme international de référence de la profession) : l'audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte ses conseils pour les améliorer, et contribue à créer de la valeur ajoutée.",
      "Indépendante : l'auditeur n'est jamais placé sous l'autorité hiérarchique directe de la personne ou de l'unité qu'il audite — dans une ONG bien structurée, il rapporte au Directeur Pays ou, mieux, au Conseil d'administration ou à un comité d'audit, jamais uniquement au Finance Manager dont il vérifie les comptes. Objective : il constate des faits vérifiables, pas des impressions. Assurance ET conseil : il vérifie ET aide à améliorer.",
    ],
    example: {
      title: 'Opinion ou constat d\'audit ? (fil rouge)',
      lines: [
        "Opinion (à proscrire) : « Je pense que la logistique de Goma ne respecte pas bien les seuils. »",
        "Constat (à produire) : « Sur 14 bons de commande imputés au Fonds Meridian entre 5 000 et 10 000 USD (97 500 USD au total), les pièces justificatives montrent qu'aucun n'a fait l'objet de la mise en concurrence formelle exigée par la convention (article 9). »",
        "Le constat cite un nombre, un montant, une source et une règle de référence : il est vérifiable par n'importe qui.",
      ],
    },
    highlight: "La confusion la plus coûteuse sur le terrain : on vous présente comme « l'auditeur », l'équipe entend « l'inspecteur qui vient nous piéger ». Cette confusion détermine si on vous parle honnêtement ou si on vous récite une version nettoyée de la réalité.",
  },
  {
    type: 'comparison-table',
    title: 'Les deux casquettes : mission d\'assurance et mission de conseil',
    columns: ['Critère', "Mission d'assurance", 'Mission de conseil'],
    rows: [
      ['Question posée', "« Le contrôle X fonctionne-t-il, oui ou non ? »", "« Comment construire ou améliorer le système avant qu'il ne casse ? »"],
      ['Qui fixe le périmètre', "L'auditeur, à partir des risques, validé par le commanditaire", "Le demandeur et l'auditeur ensemble"],
      ['Livrable type', 'Rapport avec constats, niveau de maîtrise et recommandations', "Note de conseil, proposition de procédure, atelier"],
      ['Exemple fil rouge', "Vérifier que les achats > 10 000 USD ont suivi la procédure d'appel d'offres", "Proposer une grille de seuils intégrant l'exigence de 5 000 USD du Fonds Meridian"],
      ['Limite à respecter', "Ne pas auditer ce que l'on a soi-même conçu ou géré", "Ne pas prendre de décision de gestion à la place du management"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Audit interne, contrôle de gestion, supervision : qui fait quoi',
    columns: ['Critère', 'Audit interne', 'Contrôle de gestion', 'Supervision hiérarchique'],
    rows: [
      ['Périodicité', 'Mission ponctuelle et documentée', 'Suivi continu (mensuel)', 'Quotidienne, au fil des opérations'],
      ['Indépendance', 'Indépendant de la ligne auditée', 'Au service de la ligne managériale', 'Fait partie de la ligne'],
      ['Mandat', 'Charte + lettre de mission signée par une autorité au-dessus', 'Fiche de poste', 'Délégation de pouvoir'],
      ['Livrable', "Rapport d'audit, plan d'action suivi", 'Tableau budget / réalisé, analyse des écarts', 'Signature, validation, instruction'],
      ['Exemple Goma', "La mission confiée à Amani par le comité d'audit", "Ruth B. analyse chaque mois les écarts du budget logistique", "Dr Patrice N. signe les bons de commande de plus de 1 000 USD"],
    ],
  },
  {
    type: 'concept',
    title: "Où se place l'audit interne dans l'organisation",
    body: [
      "Le modèle des trois lignes de l'IIA aide à expliquer votre place en une minute. La première ligne, ce sont les managers et les équipes qui gèrent les opérations et appliquent les contrôles au quotidien. La deuxième ligne, ce sont les fonctions qui les appuient et surveillent en continu (contrôle de gestion, conformité, gestion des risques). La troisième ligne, c'est l'audit interne, qui donne une assurance indépendante au Conseil sur l'ensemble.",
      "Votre positionnement repose sur un double rattachement : fonctionnel (vers le comité d'audit ou le Conseil, qui approuve votre plan, reçoit vos rapports et vous évalue) et administratif (vers la Direction générale, pour la logistique courante : congés, budget de déplacement).",
    ],
    table: {
      columns: ['Ligne', 'Qui, chez HSGL Goma', 'Ce qu\'elle fait sur les achats'],
      rows: [
        ['1re ligne', 'Josué M., Dr Patrice N.', 'Demande, valide, réceptionne, signe'],
        ['2e ligne', 'Ruth B., responsable conformité du siège', 'Suit les écarts, vérifie les listes de sanctions'],
        ['3e ligne', "Amani K., rattaché(e) au comité d'audit", 'Évalue si l\'ensemble du dispositif fonctionne'],
      ],
    },
    pitfall: "Une fonction d'audit qui rapporte uniquement au Finance Manager ne peut pas auditer la finance : vos conclusions passeraient par la personne dont vous évaluez le travail.",
  },
  {
    type: 'concept',
    title: 'Le cadre IIA : ce que chaque famille de normes exige de vous',
    body: [
      "Le référentiel professionnel de l'IIA — l'IPPF (International Professional Practices Framework) — repose sur un Code de déontologie et deux grandes familles de normes. Les normes de qualification (série 1000) définissent qui peut auditer et dans quelles conditions : indépendance, objectivité, compétence, conscience professionnelle. Les normes de fonctionnement (série 2000) définissent comment conduire une mission : planification basée sur les risques, planification de chaque mission, réalisation, communication des résultats, suivi des plans d'action.",
      "Pourquoi s'en soucier dans une ONG de 40 personnes ? Parce qu'un bailleur, un Conseil ou un audit externe cherchera ces repères : une charte, une lettre de mission, une trace de planification par les risques. Sans eux, votre rapport — même juste sur le fond — perd instantanément de la valeur.",
    ],
    table: {
      columns: ['Famille', 'Exigence', 'Pièce que vous devez pouvoir montrer'],
      rows: [
        ['Qualification (1000)', 'Mandat et indépendance de la fonction', "Charte d'audit signée par le Conseil (procédure 3)"],
        ['Qualification (1000)', "Objectivité individuelle de l'auditeur", "Déclaration d'indépendance, note de conflit (procédure 1)"],
        ['Fonctionnement (2000)', 'Planification de la mission par les risques', 'Cadrage, cotation des risques (procédure 4)'],
        ['Fonctionnement (2000)', 'Objectifs et périmètre formalisés', 'Lettre de mission signée (procédure 5)'],
        ['Fonctionnement (2000)', 'Travaux fondés sur des éléments probants', 'Grille COSO commentée, liste des documents (procédures 7 et 8)'],
      ],
    },
    tip: "Si votre organisation a adopté les Normes mondiales d'audit interne publiées par l'IIA en 2024, la numérotation change (5 domaines au lieu des séries 1000 et 2000), mais les exigences de ce tableau restent les mêmes. Citez la version que mentionne votre charte.",
  },
  {
    type: 'concept',
    title: 'Le code de déontologie traduit en comportements terrain',
    body: "Le Code de déontologie de l'IIA repose sur quatre principes. Ils ne s'appliquent pas « en général » : ils dictent des gestes précis pendant la mission.",
    table: {
      columns: ['Principe', 'Ce que cela veut dire', 'Comportement attendu à Goma'],
      rows: [
        ['Intégrité', "Honnêteté, diligence, respect de la loi", "Rapporter les 14 commandes non conformes même si vous connaissez les personnes"],
        ['Objectivité', "Jugement non influencé par ses intérêts ou ceux d'autrui", "Refuser le dîner offert par Josué M. pendant la mission ; déclarer vos liens"],
        ['Confidentialité', "Ne pas divulguer l'information sans autorisation", "Ne pas commenter vos constats au Directeur Pays avant la réunion de clôture"],
        ['Compétence', "N'accepter que les travaux que l'on sait faire", "Demander l'appui d'un pair pour tester les marchés de médicaments si vous ne maîtrisez pas la réglementation pharmaceutique"],
      ],
    },
    pitfall: "Accepter un cadeau « symbolique » de l'audité pendant la mission : même sans intention, la perception suffit à rendre vos conclusions contestables. La règle simple : rien pendant la mission, et tout cadeau reçu est déclaré au commanditaire.",
  },
  {
    type: 'stat-callout',
    stat: '5 composantes, 17 principes',
    caption: 'Le référentiel COSO du contrôle interne (version 2013)',
    context: "Les 5 composantes ne fonctionnent jamais isolément : un environnement de contrôle excellent avec des activités de contrôle inexistantes ne protège rien — c'est une façade. Et des procédures impeccables sans ton cohérent au sommet sont contournées dès que la pression opérationnelle monte.",
  },
  {
    type: 'comparison-table',
    title: 'Les 5 composantes COSO traduites en exemples ONG',
    columns: ['Composante COSO', "Ce qu'elle signifie", 'Exemple terrain concret'],
    rows: [
      ['Environnement de contrôle', 'Le « ton donné au sommet » — éthique, valeurs, structure et politiques RH', 'Le Directeur Pays applique-t-il lui-même la politique de délégation de signature, ou signe-t-il « au feeling » en dehors de ses propres seuils ?'],
      ['Évaluation des risques', 'Identification et analyse structurée des risques qui menacent les objectifs', 'La base a-t-elle un registre de risques à jour couvrant les ghost workers, le détournement de carburant ou les fausses factures — ou les découvre-t-on après le scandale ?'],
      ['Activités de contrôle', "Politiques et procédures qui garantissent l'exécution des décisions — séparation des tâches, autorisations, réconciliations", "La personne qui commande n'est jamais celle qui réceptionne ni celle qui valide le paiement — même avec 3 personnes en Finance."],
      ['Information et communication', "Circulation fiable et à temps de l'information, en interne comme vers les bailleurs et le Conseil", "Un mécanisme de signalement existe-t-il, est-il connu des gardiens et chauffeurs, et quelqu'un y a-t-il déjà eu recours sans représailles ?"],
      ['Activités de pilotage', "Suivi dans le temps de l'efficacité réelle du contrôle interne, dont l'audit interne lui-même", "Les recommandations de l'audit précédent ont-elles un plan d'action suivi et clôturé, ou dorment-elles depuis 8 mois ?"],
    ],
  },
  {
    type: 'concept',
    title: 'Des 17 principes COSO aux 13 sous-critères de votre grille',
    body: "La grille du module ne vous demande pas de noter les 17 principes un par un : ses 13 sous-critères les regroupent en questions vérifiables sur le terrain. Ce tableau vous dit quel principe vous évaluez quand vous notez une ligne — utile pour justifier votre note face à un bailleur.",
    table: {
      columns: ['Composante', 'Principes COSO (n°)', 'Lignes de la grille'],
      rows: [
        ['Environnement de contrôle', '1 intégrité et éthique · 2 surveillance par le Conseil · 3 structure et pouvoirs · 4 compétences · 5 responsabilisation', 'Lignes 6, 7, 8'],
        ['Évaluation des risques', '6 objectifs clairs · 7 identification des risques · 8 risque de fraude · 9 changements significatifs', 'Lignes 9, 10, 11'],
        ['Activités de contrôle', '10 choix des contrôles · 11 contrôles informatiques généraux · 12 politiques et procédures', 'Lignes 12, 13, 14'],
        ['Information et communication', '13 information pertinente · 14 communication interne · 15 communication externe', 'Lignes 15, 16'],
        ['Pilotage', '16 évaluations continues ou ponctuelles · 17 communication des déficiences', 'Lignes 17, 18'],
      ],
    },
    tip: "Le référentiel complet (coso.org) sert de fond documentaire : vous n'avez pas besoin de l'avoir lu en entier pour démarrer, mais citez le numéro du principe dans vos observations sensibles (par exemple « principe 8 — risque de fraude »).",
  },
  {
    type: 'concept',
    title: "Les trois menaces à l'indépendance et comment les reconnaître",
    body: "Le secteur ONG fonctionne avec un vivier restreint de professionnels et une forte rotation : il est fréquent d'auditer un bureau où l'on a travaillé ou une équipe que l'on connaît. La littérature professionnelle nomme trois menaces classiques.",
    table: {
      columns: ['Menace', 'Définition', 'Signal d\'alerte', 'Mitigations possibles'],
      rows: [
        ['Auto-révision', "Auditer un système ou une procédure que vous avez mis en place ou validé", "« J'ai signé ou rédigé un document qui est dans le périmètre »", 'Confier ces tests à un pair, supervision renforcée, exclusion de la zone'],
        ['Familiarité', 'Auditer des personnes avec qui vous avez une relation proche', "« J'ai recruté, supervisé ou je fréquente une personne auditée »", "Pair pour les entretiens et tests concernant ces personnes, ou report"],
        ['Plaidoyer', 'Défendre implicitement une position ou une équipe au lieu de l\'évaluer', "« J'ai déjà pris publiquement parti pour cette équipe ou cette décision »", 'Revue de vos conclusions par un tiers, report'],
      ],
    },
    highlight: "Ce que l'auditeur senior fait différemment du junior : il ne se prétend pas invulnérable. Il identifie ces menaces AVANT d'accepter la mission, les déclare formellement à son autorité de rattachement et propose une mesure de mitigation concrète.",
    tip: "Repère des normes IIA (série 1000) : l'objectivité est présumée compromise si vous donnez une assurance sur une activité dont vous aviez la responsabilité au cours de l'année précédente. Passé ce délai, la menace d'auto-révision ne disparaît pas : elle se déclare et se traite.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé à maîtriser dès ce module',
    terms: [
      { term: 'IIA', definition: "Institute of Internal Auditors — organisme professionnel international qui édicte les Standards de référence de l'audit interne." },
      { term: 'IPPF', definition: "International Professional Practices Framework — le cadre de référence complet de l'IIA : Code de déontologie, normes de qualification et de fonctionnement." },
      { term: 'COSO', definition: "Référentiel de contrôle interne structuré en 5 composantes et 17 principes, utilisé pour évaluer la maîtrise des opérations." },
      { term: "Charte d'audit", definition: "Document fondateur, validé par la Direction ou le Conseil, qui fixe le mandat, le rattachement hiérarchique et les droits d'accès de la fonction d'audit interne." },
      { term: 'Lettre de mission', definition: "Document formel propre à CHAQUE mission, qui en fixe le périmètre, les objectifs et les modalités avant tout travail de terrain." },
      { term: "Comité d'audit", definition: "Émanation du Conseil d'administration qui supervise l'audit interne : il approuve le plan, reçoit les rapports, tranche les conflits d'intérêt." },
      { term: 'Rattachement fonctionnel', definition: "Lien vers l'instance qui garantit votre indépendance (comité d'audit, Conseil), distinct du rattachement administratif (Direction)." },
      { term: 'Élément probant', definition: "Information vérifiable (document, extraction, observation, entretien recoupé) sur laquelle repose une note ou un constat." },
      { term: "Réunion d'ouverture", definition: "Premier rendez-vous formel avec l'audité sur site : mandat, démarche, déroulé, interlocuteurs, documents attendus." },
      { term: "Seuil d'alerte COSO", definition: "Dans la grille du module, toute moyenne de composante ou score global inférieur à 3/5, signalé automatiquement en rouge." },
    ],
  },

  // ───────────────────────── 5. LE CŒUR : les procédures ─────────────────────────

  // ── Procédure 1 — Indépendance ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Recenser par écrit tous vos liens avec le périmètre',
    intro: "Pourquoi : un conflit découvert après le rapport détruit la crédibilité de toute la mission. Quand : avant même de regarder le calendrier. Entrées : le courriel d'assignation, l'organigramme actuel du bureau audité, votre CV.",
    steps: [
      {
        title: "Ouvrez un document « Auto-évaluation d'indépendance — [mission] »",
        actions: [
          "1. Notez en tête l'intitulé exact de la mission, le bureau, le cycle et la période auditée.",
          "2. Copiez la liste nominative des postes clés du périmètre depuis l'organigramme.",
        ],
      },
      {
        title: 'Répondez par oui ou non à six questions, sans arrondir',
        actions: [
          "Q1. Ai-je occupé un poste dans cette unité, ce projet ou ce cycle ? Quand ?",
          "Q2. Ai-je conçu, rédigé, validé ou signé une procédure, un seuil ou un contrat du périmètre ?",
          "Q3. Ai-je recruté, supervisé ou évalué une personne du périmètre ?",
          "Q4. Ai-je une relation personnelle, familiale ou financière avec une personne du périmètre ?",
          "Q5. Ai-je pris publiquement position pour ou contre cette équipe ou ses décisions ?",
          "Q6. Ai-je un intérêt dans le résultat (promotion, retour sur ce poste, relation avec un fournisseur) ?",
        ],
      },
      {
        title: 'Pour chaque « oui », notez le fait précis et sa date',
        body: "Un « oui » sans détail ne permet pas au comité de décider. Écrivez qui, quoi, quand.",
      },
    ],
    example: {
      title: 'Auto-évaluation d\'Amani K. — 21 avril 2026',
      lines: [
        "Q1. OUI — Log Manager de la base de Goma, janvier 2023 – mars 2025 (départ il y a 13 mois).",
        "Q2. OUI — Validation de la procédure achats v2 et de la grille des seuils de délégation (septembre 2024), toujours en vigueur.",
        "Q3. OUI — Recrutement de Josué M. (Logistics Officer, 2023) ; supervision directe d'Esther K. et Didier L. (2023-2025).",
        "Q4. OUI (partiel) — Relation de travail proche avec Josué M. ; pas de lien familial ni financier.",
        "Q5. NON. — Q6. NON (aucun projet de retour à Goma, aucun lien avec un fournisseur).",
      ],
    },
    result: "Un document daté d'une demi-page qui liste chaque lien de façon factuelle. Contrôle : un collègue qui le lit doit comprendre votre situation sans vous poser de question.",
    pitfall: "Se dire « ça ira, je resterai objectif » et ne rien écrire. Ce n'est pas votre sincérité qui est en cause, c'est la perception d'un bailleur ou d'un auditeur externe qui découvrira le lien plus tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Transformer chaque lien en menace qualifiée et cotée',
    intro: "Pourquoi : le comité ne peut pas arbitrer sur une liste de faits ; il arbitre sur des risques nommés. Entrée : l'auto-évaluation de l'étape 1.",
    steps: [
      {
        title: 'Rattachez chaque « oui » à une ou plusieurs menaces',
        actions: [
          "1. Q2 (vous avez conçu ou validé) → auto-révision.",
          "2. Q3 et Q4 (vous connaissez les personnes) → familiarité.",
          "3. Q5 (vous avez pris parti) → plaidoyer.",
        ],
      },
      {
        title: 'Identifiez la zone du périmètre touchée par chaque menace',
        body: "Une menace ne contamine pas forcément toute la mission : nommez précisément les tests ou les entretiens concernés.",
      },
      {
        title: 'Cotez la gravité : faible, moyenne, forte',
        actions: [
          "Forte : lien familial ou financier, ou responsabilité de l'activité dans les 12 derniers mois.",
          "Moyenne : document conçu par vous encore en vigueur, personne recrutée ou supervisée par vous.",
          "Faible : simple connaissance professionnelle sans lien hiérarchique.",
        ],
      },
      {
        title: 'Écrivez pour chaque menace 2 à 3 phrases : pourquoi elle compromettrait vos conclusions',
      },
    ],
    table: {
      columns: ['Lien (fil rouge)', 'Menace', 'Zone touchée', 'Gravité'],
      rows: [
        ['Validation procédure achats v2 et seuils (2024)', 'Auto-révision', 'Tests de conformité aux seuils, objectif conseil sur les seuils', 'Moyenne'],
        ['Recrutement de Josué M., relation proche', 'Familiarité', 'Entretiens et tests sur les dossiers traités par Josué M.', 'Moyenne'],
        ['Supervision d\'Esther K. et Didier L.', 'Familiarité', 'Réception des marchandises, inventaire du magasin', 'Moyenne à faible'],
        ['Aucune prise de position publique', 'Plaidoyer', 'Risque indirect : défendre « votre » ancienne équipe', 'Faible'],
      ],
    },
    example: {
      title: 'Justification rédigée — menace d\'auto-révision',
      lines: [
        "« Les seuils de délégation que je dois tester sont ceux que j'ai validés en septembre 2024. Si je conclus qu'ils sont adaptés, un lecteur pourra légitimement penser que je défends mon propre travail ; si je ne relève pas leur inadéquation avec l'exigence de 5 000 USD du Fonds Meridian, ma conclusion sera suspecte. »",
      ],
    },
    result: "Un tableau lien → menace → zone → gravité, et une justification de 2-3 phrases par menace. C'est la partie 1 du livrable de l'exercice noté.",
    tip: "N'écartez pas le plaidoyer trop vite : même sans prise de position publique, avoir construit l'équipe crée une tentation de la défendre. Mentionnez-le en gravité faible plutôt que de l'omettre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: "Choisir l'option de mitigation et la justifier",
    intro: "Pourquoi : déclarer sans proposer de solution renvoie le problème au comité. Entrées : le tableau des menaces, la disponibilité des autres auditeurs, l'échéance de la mission.",
    steps: [
      {
        title: 'Listez les trois options classiques',
        actions: [
          "Option A — Un pair auditeur mène la mission à votre place.",
          "Option B — Vous restez sur la mission, avec supervision renforcée d'un pair sur les zones sensibles au conflit.",
          "Option C — Report de la mission à un auditeur sans lien avec ce bureau.",
        ],
      },
      {
        title: 'Évaluez chaque option sur quatre critères',
        body: "Neutralise-t-elle les menaces cotées ? Est-elle faisable (pair disponible) ? Quel impact sur le délai ? Quel coût ?",
      },
      {
        title: "Retenez l'option la plus légère qui neutralise TOUTES les menaces moyennes et fortes",
        actions: [
          "Si une menace est forte (lien familial ou financier, responsabilité < 12 mois) → option A ou C.",
          "Si les menaces sont moyennes et localisées → option B, à condition de préciser exactement ce que fait le pair.",
        ],
      },
      {
        title: 'Rédigez les conditions précises de l\'option retenue',
        body: "Qui fait quels tests, qui conduit quels entretiens, qui relit quoi avant diffusion.",
      },
    ],
    table: {
      columns: ['Critère', 'A — Pair à votre place', 'B — Supervision renforcée', 'C — Report'],
      rows: [
        ['Neutralise les menaces', 'Totalement', 'Oui, si les zones sensibles sont confiées au pair', 'Totalement'],
        ['Faisabilité', 'Fatou S. indisponible en mai pour 10 jours', 'Fatou S. disponible 3 jours sur site + revue à distance', 'Aucun autre auditeur avant septembre'],
        ['Délai', 'Report à septembre', 'Calendrier tenu (mai 2026)', 'Report à septembre'],
        ['Risque pour HSGL', 'Visite du Fonds Meridian en juillet sans audit', 'Faible', 'Visite du Fonds Meridian en juillet sans audit'],
      ],
    },
    result: "Option B retenue pour Goma : Fatou S. réalise les tests de conformité aux seuils, conduit les entretiens de Josué M., Esther K. et Didier L., et relit toutes les conclusions avant diffusion.",
    pitfall: "Proposer « supervision renforcée » sans dire en quoi elle consiste. Le comité ne peut pas valider une intention ; il valide une répartition des tâches.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Rédiger la note de déclaration au comité d\'audit (½ page)',
    intro: "Pourquoi : c'est la trace écrite qui vous protège, vous et la mission. Entrées : tableau des menaces, option retenue. Format : une demi-page maximum, envoyée avant tout déplacement.",
    steps: [
      {
        title: 'Structurez la note en cinq blocs',
        actions: [
          "1. Objet et référence de la mission.",
          "2. Déclaration explicite du conflit : faits datés.",
          "3. Menaces identifiées et zones touchées.",
          "4. Option de mitigation proposée et conditions précises.",
          "5. Demande de décision écrite avant une date donnée.",
        ],
      },
      {
        title: 'Relisez-la avec trois tests',
        actions: [
          "Test 1 : le mot « conflit d'intérêt » apparaît-il en clair ?",
          "Test 2 : chaque menace est-elle reliée à un fait daté ?",
          "Test 3 : la note tient-elle sur une demi-page ?",
        ],
      },
      { title: 'Envoyez-la à la présidente du comité, copie à votre responsable administratif' },
    ],
    example: {
      title: 'Note envoyée le 22 avril 2026 (extrait intégral)',
      lines: [
        "Objet : Déclaration de conflit d'intérêt — Mission d'audit du cycle achats-logistique, base de Goma (oct. 2025 – mars 2026).",
        "Madame la Présidente, avant d'accepter la mission qui m'a été confiée le 20 avril, je déclare un conflit d'intérêt. J'ai été Log Manager de la base de Goma de janvier 2023 à mars 2025 ; j'ai validé en septembre 2024 la procédure achats v2 et la grille des seuils, qui sont dans le périmètre. Trois membres de l'équipe actuelle ont été recrutés ou supervisés par moi, dont le Logistics Officer, avec qui j'entretenais une relation de travail proche.",
        "Menaces : auto-révision (tests des seuils) et familiarité (entretiens et dossiers de ces trois personnes) ; plaidoyer jugé faible.",
        "Proposition : maintien sur la mission avec supervision renforcée de Fatou S., auditrice senior sans lien avec Goma, qui réaliserait les tests de conformité aux seuils, conduirait les entretiens des trois personnes concernées et relirait l'ensemble des conclusions. Cette option tient le calendrier de mai, avant la visite du Fonds Meridian en juillet.",
        "Je vous remercie de me communiquer votre décision écrite avant le 25 avril. Je ne me déplacerai pas à Goma avant celle-ci. — Amani K., auditeur(rice) interne.",
      ],
    },
    result: "Une note d'une demi-page, envoyée et horodatée, qui déclare, qualifie, propose et demande une décision. C'est la partie 2 du livrable de l'exercice noté.",
    tip: "Gardez un ton factuel et neutre : vous ne vous excusez pas, vous appliquez une norme professionnelle. Le comité lira une preuve de rigueur, pas un aveu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Obtenir la décision écrite, puis l\'archiver et la reporter',
    intro: "Pourquoi : une décision orale ne vaut rien quand le rapport est contesté. Entrée : la note envoyée à l'étape 4.",
    steps: [
      {
        title: 'Attendez une réponse écrite (courriel ou décision signée)',
        actions: [
          "Si aucune réponse à la date demandée : relancez par écrit, ne partez pas.",
          "Si le comité choisit une autre option que la vôtre : appliquez-la sans discuter le fond.",
        ],
      },
      {
        title: 'Classez les pièces dans le dossier permanent de la mission',
        actions: [
          "Dossier « 00_Indépendance » : auto-évaluation, note, décision du comité.",
          "Nommez les fichiers avec la date : 2026-04-22_Note_conflit_Goma.pdf.",
        ],
      },
      {
        title: 'Reportez la décision dans la lettre de mission (section 5)',
        body: "La procédure 5 vous montre la formulation exacte.",
      },
      {
        title: 'Informez la pair superviseure de son rôle exact',
        body: "Envoyez-lui la note et la décision, et convenez par écrit des dates de sa présence sur site.",
      },
    ],
    example: {
      title: 'Décision reçue le 24 avril 2026',
      lines: [
        "« Le comité d'audit prend acte de votre déclaration et retient l'option de maintien avec supervision renforcée telle que proposée. Fatou S. est désignée auditrice associée. Cette décision devra figurer dans la lettre de mission. — Hélène V., Présidente du comité d'audit. »",
      ],
    },
    result: "Un dossier « 00_Indépendance » complet de trois pièces datées, et une décision prête à être reportée mot pour mot dans la lettre de mission.",
    pitfall: "Considérer le sujet clos une fois la décision obtenue. Si un nouveau lien apparaît en cours de mission (un fournisseur que vous connaissez, par exemple), refaites une déclaration complémentaire.",
  },

  // ── Procédure 2 — Qualifier les demandes ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 3',
    title: 'Lister toutes les demandes reçues autour de la mission',
    intro: "Pourquoi : dès qu'un auditeur est annoncé, chacun en profite pour lui confier « juste une petite chose ». Accepter sans trier, c'est sortir de votre rôle. Entrées : vos courriels et notes d'appels depuis l'assignation.",
    steps: [
      {
        title: 'Ouvrez un tableau de quatre colonnes',
        actions: [
          "1. Demandeur et date.",
          "2. Demande, recopiée mot pour mot.",
          "3. Qualification (à remplir à l'étape 2).",
          "4. Réponse apportée (à remplir à l'étape 3).",
        ],
      },
      {
        title: 'Recopiez chaque demande sans la reformuler',
        body: "La reformulation fait souvent disparaître ce qui pose problème (« valider », « signer », « conclure que »).",
      },
    ],
    table: {
      columns: ['Demandeur, date', 'Demande (mot pour mot)'],
      rows: [
        ["Comité d'audit, 20 avril", "« Auditer le cycle achats-logistique de la base de Goma sur les 6 derniers mois. »"],
        ['Joseph T., Directeur Pays, 23 avril', "« Profite de ta présence pour faire le suivi budgétaire mensuel de la logistique, Ruth est débordée. »"],
        ['Dr Patrice N., 28 avril', "« Tu pourras valider les 6 bons de commande en attente pendant que tu es là ? »"],
        ['Ruth B., 29 avril', "« Peux-tu nous conseiller sur le classement des pièces pour le Fonds Meridian ? »"],
      ],
    },
    result: "Un tableau qui recense toutes les demandes, avec leur formulation exacte et leur auteur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 3',
    title: 'Appliquer le test des trois critères cumulatifs',
    intro: "Pourquoi : une activité n'est de l'audit interne que si elle remplit en même temps les trois critères. Il suffit qu'un seul manque pour qu'elle relève d'autre chose.",
    steps: [
      {
        title: 'Pour chaque demande, répondez à trois questions',
        actions: [
          "C1 — Périodicité : est-ce une intervention ponctuelle et documentée (et non un suivi continu) ?",
          "C2 — Indépendance : puis-je la faire sans prendre part à une décision de gestion que j'aurai ensuite à évaluer ?",
          "C3 — Mandat : est-elle couverte par la charte et décidée par une autorité au-dessus de la ligne auditée ?",
        ],
      },
      {
        title: 'Concluez',
        actions: [
          "3 oui → audit interne (assurance ou conseil).",
          "C1 non → contrôle de gestion ou suivi de 2e ligne.",
          "C2 non → acte de gestion ou de supervision : à refuser.",
          "C3 non → à faire mandater par le comité ou à refuser.",
        ],
      },
    ],
    table: {
      columns: ['Demande', 'C1', 'C2', 'C3', 'Qualification'],
      rows: [
        ['Audit du cycle achats (comité)', 'Oui', 'Oui', 'Oui', 'Audit interne — assurance'],
        ['Suivi budgétaire mensuel (Directeur Pays)', 'Non', 'Oui', 'Non', 'Contrôle de gestion — hors mandat'],
        ['Valider 6 bons de commande (Coordinateur)', 'Non', 'Non', 'Non', 'Supervision hiérarchique — à refuser'],
        ['Conseil sur le classement Meridian (Finance)', 'Oui', 'Oui', 'Oui, si inclus dans la lettre', 'Audit interne — conseil'],
      ],
    },
    result: "Chaque demande porte une qualification argumentée par les trois critères.",
    pitfall: "Valider « pour rendre service » les bons de commande en attente : vous deviendriez acteur du processus que vous auditez, et ces 6 dossiers seraient impossibles à tester objectivement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 3',
    title: 'Répondre par écrit et intégrer ce qui relève de la mission',
    intro: "Pourquoi : un refus oral est oublié ou mal interprété ; un refus écrit, poli et argumenté renforce votre image professionnelle. Entrée : le tableau qualifié.",
    steps: [
      {
        title: 'Pour chaque demande hors mandat, rédigez une réponse en trois temps',
        actions: [
          "1. Remerciez et reformulez le besoin.",
          "2. Expliquez en une phrase pourquoi ce n'est pas compatible avec votre rôle.",
          "3. Proposez une alternative (qui peut le faire, ou comment l'audit y contribuera).",
        ],
      },
      {
        title: 'Pour la demande de conseil recevable, proposez de l\'ajouter à la lettre de mission',
        body: "Un conseil qui n'est pas écrit dans la lettre de mission n'est pas couvert par votre mandat.",
      },
      { title: 'Archivez les échanges dans le dossier « 01_Cadrage »' },
    ],
    example: {
      title: 'Réponse au Directeur Pays et au Coordinateur — 30 avril 2026',
      lines: [
        "« Bonjour Joseph, bonjour Patrice, merci pour votre confiance. Le suivi budgétaire mensuel et la validation des bons de commande sont des actes de gestion : si je les réalisais, je ne pourrais plus évaluer de façon indépendante le cycle que le comité d'audit m'a demandé d'auditer. Je vous propose que la validation des 6 bons reste au circuit habituel (Patrice, avec contrôle de Ruth), et que le suivi budgétaire soit pris en charge par le contrôleur de gestion régional pendant la surcharge de Ruth. En revanche, le conseil demandé par Ruth sur le classement des pièces Meridian sera intégré comme objectif de conseil dans la lettre de mission. Bien cordialement, Amani. »",
      ],
    },
    result: "Une réponse écrite envoyée, aucune tâche de gestion acceptée, et un objectif de conseil ajouté au cadrage.",
    tip: "Mettez votre commanditaire en copie quand la demande vient d'un membre de la direction : vous montrez que vous protégez son mandat, pas que vous refusez de coopérer.",
  },

  // ── Procédure 3 — Charte et cadre IIA ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 3',
    title: "Retrouver la charte d'audit et contrôler ses mentions essentielles",
    intro: "Pourquoi : la charte est la base juridique de votre droit d'accès. Si elle est incomplète, vous le découvrirez au pire moment — quand quelqu'un refusera de vous ouvrir un dossier. Entrée : la charte en vigueur (intranet, secrétariat du Conseil).",
    steps: [
      {
        title: 'Procurez-vous la version signée, pas un projet',
        body: "Vérifiez la signature du Conseil ou du comité et la date d'approbation.",
      },
      {
        title: 'Cochez les huit mentions essentielles',
        actions: [
          "1. Mission et objet de l'audit interne (assurance et conseil).",
          "2. Rattachement fonctionnel (comité d'audit ou Conseil).",
          "3. Rattachement administratif (Direction générale).",
          "4. Périmètre : toutes les entités, bureaux, projets et activités.",
          "5. Droit d'accès illimité aux documents, systèmes, biens et personnes.",
          "6. Règles d'indépendance et de déclaration des conflits.",
          "7. Référence aux normes de l'IIA.",
          "8. Date de dernière revue et fréquence de révision.",
        ],
      },
      {
        title: "Notez l'article qui porte chaque mention",
        body: "Vous citerez l'article exact en réunion d'ouverture si un accès vous est refusé.",
      },
    ],
    table: {
      columns: ['Mention', 'Présente ?', 'Article', 'Observation (charte HSGL)'],
      rows: [
        ['Mission assurance et conseil', 'Oui', 'Art. 1', '—'],
        ['Rattachement fonctionnel', 'Oui', 'Art. 3', "Comité d'audit du Conseil"],
        ['Droit d\'accès illimité', 'Oui', 'Art. 6', 'Inclut les sites et les systèmes'],
        ['Indépendance et conflits', 'Partiel', 'Art. 4', 'Pas de procédure de déclaration écrite'],
        ['Date de revue', 'Non à jour', '—', 'Signée en juin 2022, aucune révision depuis'],
      ],
    },
    result: "Une fiche de contrôle de la charte : 8 mentions cochées, avec leur article et les manques éventuels.",
    tip: "Un manque dans la charte ne bloque pas votre mission : signalez-le au comité dans une note séparée. Ici, l'absence de procédure de déclaration écrite justifie d'autant plus la note que vous avez envoyée en procédure 1.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 3',
    title: 'Vérifier que votre rattachement réel correspond à la charte',
    intro: "Pourquoi : une charte peut dire « rattachement au comité » alors que, dans les faits, c'est le Directeur Pays qui fixe votre budget et vous évalue. Entrée : la fiche de contrôle de l'étape 1.",
    steps: [
      {
        title: 'Répondez à quatre questions de fait',
        actions: [
          "1. Qui approuve votre plan d'audit annuel ?",
          "2. Qui reçoit vos rapports en premier, sans filtre ?",
          "3. Qui réalise votre évaluation annuelle de performance ?",
          "4. Qui peut mettre fin à votre contrat ou modifier votre budget de mission ?",
        ],
      },
      {
        title: 'Comparez chaque réponse au rattachement fonctionnel prévu',
        body: "Si une réponse désigne une personne que vous pourriez auditer, notez-le comme limite à l'indépendance de la fonction.",
      },
    ],
    example: {
      title: 'Situation d\'Amani K. chez HSGL',
      lines: [
        "1. Plan d'audit annuel : approuvé par le comité d'audit (conforme).",
        "2. Rapports : transmis directement à la présidente du comité, copie à la Direction générale (conforme).",
        "3. Évaluation annuelle : Directeur général, avec avis écrit du comité (acceptable).",
        "4. Budget de mission : validé par le Directeur Pays (limite — il fait partie du périmètre indirect).",
        "Action : signaler le point 4 au comité et demander que le budget de mission soit validé par la Direction générale.",
      ],
    },
    result: "Quatre réponses factuelles et, si besoin, une limite d'indépendance signalée par écrit au comité.",
    pitfall: "Accepter qu'un Directeur Pays « valide » votre rapport avant le comité. Il peut le commenter en réunion de clôture ; il ne le valide pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 3',
    title: 'Préparer votre kit de légitimité',
    intro: "Pourquoi : le Jour 1 sur site, vous devez pouvoir montrer en deux minutes d'où vient votre mandat. Entrées : charte, décision du comité, lettre de mission signée (procédure 5).",
    steps: [
      {
        title: 'Rassemblez cinq pièces dans un dossier imprimé ET sur clé USB',
        actions: [
          "1. Extrait de la charte : articles 1, 3 et 6.",
          "2. Lettre de mission signée.",
          "3. Décision du comité sur votre indépendance.",
          "4. Présentation d'une page de la démarche (assurance et conseil, déroulé).",
          "5. Liste des documents attendus (procédure 8).",
        ],
      },
      {
        title: 'Préparez une phrase de réponse à « de quel droit ? »',
        body: "Courte, factuelle, avec l'article de la charte.",
      },
    ],
    example: {
      title: 'Phrase prête à l\'emploi',
      lines: [
        "« L'article 6 de la charte d'audit, approuvée par le Conseil d'administration, donne à l'audit interne un accès à tous les documents et systèmes de HSGL. La lettre de mission signée par la présidente du comité d'audit précise le périmètre : je vous la remets. »",
      ],
    },
    result: "Un kit de cinq pièces disponible en papier et en numérique, et une réponse préparée en cas de contestation.",
    tip: "Ne brandissez pas la charte en début de réunion : gardez-la en réserve. Elle sert à débloquer un refus, pas à impressionner.",
  },

  // ── Procédure 4 — Cadrer par les risques ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 5',
    title: 'Rassembler les données de cadrage depuis votre bureau',
    intro: "Pourquoi : on ne cadre pas une mission sur une impression. Quand : Jours 1-2 de la mission, en phase de préparation, avant tout déplacement. Résultat visé : savoir où se trouvent l'argent et les changements.",
    steps: [
      {
        title: 'Demandez par courriel à la Finance du siège six pièces',
        actions: [
          "1. L'extraction des bons de commande de la période (SAP, LINK ou l'outil d'achats en place) au format Excel : n° BC, date, fournisseur, montant USD, bailleur, demandeur, valideur, réceptionnaire.",
          "2. Le budget et le réalisé de la base sur la période.",
          "3. Le dernier rapport d'audit (interne ou externe) et le suivi de ses recommandations.",
          "4. L'organigramme actuel et la liste des départs et arrivées sur 12 mois.",
          "5. Les conventions des bailleurs actifs (articles achats et éligibilité).",
          "6. La procédure achats et la grille des seuils en vigueur.",
        ],
      },
      {
        title: 'Vérifiez l\'exhaustivité de l\'extraction',
        actions: [
          "Comparez le total de l'extraction au compte « achats » du grand livre sur la même période.",
          "Écart toléré : moins de 1 % ; au-delà, demandez l'explication avant d'analyser.",
        ],
      },
    ],
    example: {
      title: 'Données reçues le 27 avril 2026',
      lines: [
        "Extraction : 412 bons de commande, total 1 380 000 USD ; grand livre achats : 1 386 400 USD → écart 6 400 USD (0,46 %), expliqué par des frais bancaires imputés aux achats.",
        "Audit précédent (externe, 2024) : 5 recommandations, dont 2 « en cours » sans date de clôture.",
        "Changements : départ de l'assistant achats en novembre 2025, non remplacé ; arrivée du Fonds Meridian en janvier 2026.",
      ],
    },
    result: "Un dossier « 01_Cadrage » avec six pièces et une extraction dont l'exhaustivité est vérifiée.",
    pitfall: "Analyser une extraction sans la rapprocher du grand livre : si 20 % des achats manquent, tout votre cadrage repose sur du sable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 5',
    title: "Analyser l'extraction des achats dans Excel",
    intro: "Pourquoi : quelques minutes de tableau croisé vous montrent où se concentrent les montants, les bailleurs et les fournisseurs. Entrée : l'extraction vérifiée.",
    steps: [
      {
        title: 'Mettez les données sous forme de tableau',
        actions: [
          "1. Sélectionnez une cellule de l'extraction, puis Insertion > Tableau (Ctrl+L) ; nommez-le T_BC.",
          "2. Ajoutez une colonne « Tranche » avec la formule : =SI([@Montant]<1000;\"< 1 000\";SI([@Montant]<=10000;\"1 000 – 10 000\";\"> 10 000\"))",
        ],
      },
      {
        title: 'Construisez trois tableaux croisés dynamiques',
        actions: [
          "TCD 1 : Tranche en lignes, Nombre de n° BC et Somme du montant en valeurs.",
          "TCD 2 : Bailleur en lignes, Tranche en colonnes, Somme du montant.",
          "TCD 3 : Fournisseur en lignes, trié par montant décroissant : repérez les 5 premiers.",
        ],
      },
      {
        title: 'Ajoutez deux contrôles ciblés',
        actions: [
          "Commandes du Fonds Meridian entre 5 000 et 10 000 USD : =NB.SI.ENS(T_BC[Bailleur];\"Meridian\";T_BC[Montant];\">=5000\";T_BC[Montant];\"<=10000\")",
          "Commandes où Demandeur = Réceptionnaire : colonne =SI([@Demandeur]=[@Réceptionnaire];\"CUMUL\";\"\") puis filtre.",
        ],
      },
    ],
    table: {
      columns: ['Tranche', 'Nombre de BC', 'Montant (USD)', '% du montant'],
      rows: [
        ['< 1 000', '214', '68 000', '4,9 %'],
        ['1 000 – 10 000', '160', '570 000', '41,3 %'],
        ['> 10 000', '38', '742 000', '53,8 %'],
        ['Total', '412', '1 380 000', '100 %'],
      ],
    },
    example: {
      title: 'Résultats des contrôles ciblés',
      lines: [
        "Fonds Meridian entre 5 000 et 10 000 USD : 14 commandes pour 97 500 USD.",
        "Demandeur = réceptionnaire : 37 commandes (toutes < 1 000 USD), dont 31 au nom de Josué M., depuis le départ de l'assistant achats.",
        "Concentration : le premier fournisseur (carburant) pèse 96 000 USD, soit 7 % du total.",
      ],
    },
    result: "Une feuille d'analyse avec trois TCD et deux contrôles chiffrés, qui alimentent directement la cotation des risques.",
    tip: "Gardez l'extraction brute dans un onglet verrouillé et travaillez sur une copie : vous pourrez toujours prouver que vos chiffres viennent des données reçues.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 5',
    title: 'Coter les zones de risque : impact × probabilité',
    intro: "Pourquoi : votre temps est limité ; il doit aller là où une défaillance coûterait le plus et a le plus de chances de se produire. Entrées : l'analyse Excel, l'audit précédent, les changements récents.",
    steps: [
      {
        title: 'Listez 5 à 8 zones de risque du cycle',
        body: "Partez des montants élevés, des non-conformités récurrentes et des changements récents de personnel ou de bailleur.",
      },
      {
        title: 'Cotez chaque zone sur deux échelles de 1 à 3',
        actions: [
          "Impact : 1 = < 10 000 USD ou sans enjeu bailleur ; 2 = 10 000 à 50 000 USD ; 3 = > 50 000 USD ou coûts inéligibles possibles.",
          "Probabilité : 1 = contrôle en place et testé récemment ; 2 = contrôle en place non testé ; 3 = contrôle absent, contourné ou personnel clé changé.",
        ],
      },
      {
        title: 'Calculez le score (impact × probabilité) et classez',
        body: "Score ≥ 6 : zone prioritaire. Score 3 ou 4 : test allégé. Score ≤ 2 : hors périmètre, justifié par écrit.",
      },
    ],
    table: {
      columns: ['Zone de risque (Goma)', 'Impact', 'Probabilité', 'Score', 'Décision'],
      rows: [
        ['Seuils non revus après l\'arrivée du Fonds Meridian (14 BC, 97 500 USD)', '3', '3', '9', 'Prioritaire'],
        ['Achats > 10 000 USD : respect de l\'appel d\'offres (38 BC, 742 000 USD)', '3', '2', '6', 'Prioritaire'],
        ['Cumul demande / réception sur les achats < 1 000 USD (37 BC)', '2', '3', '6', 'Prioritaire'],
        ['Carburant : bons, carnets de bord, consommation (96 000 USD)', '3', '2', '6', 'Prioritaire'],
        ['Stock de médicaments : inventaire trimestriel incomplet', '2', '2', '4', 'Test allégé'],
        ['Locations de véhicules ponctuelles (6 BC, 9 000 USD)', '1', '2', '2', 'Hors périmètre'],
      ],
    },
    result: "Une cotation de 6 zones, dont 4 prioritaires, 1 en test allégé et 1 exclue avec justification.",
    pitfall: "Vouloir « auditer toute la base ». Un scoping trop large est le piège le plus commun des juniors : il dilue l'effort et ne produit rien d'actionnable dans les délais.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 5',
    title: 'Rédiger les objectifs et le périmètre, avec les exclusions',
    intro: "Pourquoi : ce texte deviendra mot pour mot les sections 2 et 3 de la lettre de mission. Entrée : la cotation des risques.",
    steps: [
      {
        title: 'Écrivez un objectif par zone prioritaire',
        actions: [
          "Commencez par un verbe vérifiable : « Vérifier que… », « Évaluer si… », « Proposer… ».",
          "Indiquez entre parenthèses : assurance ou conseil.",
        ],
      },
      {
        title: 'Délimitez le périmètre en quatre lignes',
        actions: [
          "Entité : base de Goma.",
          "Cycle : achats-logistique, de la demande d'achat au paiement fournisseur, y compris carburant et réception en magasin.",
          "Période : 1er octobre 2025 – 31 mars 2026.",
          "Exclusions : paie et RH, trésorerie hors paiements fournisseurs, activités médicales, locations ponctuelles de véhicules.",
        ],
      },
    ],
    example: {
      title: 'Objectifs rédigés — mission Goma',
      lines: [
        "O1 (assurance) — Vérifier que les achats imputés au Fonds Meridian ont respecté le seuil de mise en concurrence de 5 000 USD fixé par la convention.",
        "O2 (assurance) — Vérifier que les achats de plus de 10 000 USD ont suivi la procédure d'appel d'offres et les seuils de délégation en vigueur.",
        "O3 (assurance) — Évaluer la séparation des tâches demande / validation / réception / paiement sur le cycle achats.",
        "O4 (assurance) — Vérifier la traçabilité de la consommation de carburant (bons, carnets de bord, rapprochement mensuel).",
        "O5 (conseil) — Proposer une grille de seuils de délégation et un classement des pièces conformes aux exigences de tous les bailleurs actifs.",
      ],
    },
    result: "Cinq objectifs vérifiables et un périmètre de quatre lignes avec exclusions explicites.",
    tip: "Notez que l'objectif O5 touche à la grille que vous avez validée en 2024 : c'est une zone d'auto-révision, à confier à Fatou S. conformément à la décision du comité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 5',
    title: 'Répartir les jours-auditeur et faire valider le cadrage',
    intro: "Pourquoi : un cadrage non chiffré en temps dérape toujours. Entrées : les objectifs, la décision sur l'indépendance, le calendrier.",
    steps: [
      {
        title: 'Calculez le temps disponible',
        body: "Amani : 3 jours de préparation, 10 jours sur site, 4 jours de rapport = 17 jours. Fatou S. : 3 jours sur site + 2 jours de revue = 5 jours. Total : 22 jours-auditeur.",
      },
      {
        title: 'Répartissez les jours sur site selon les scores',
        body: "Les zones de score 9 et 6 reçoivent l'essentiel du temps ; la zone de score 4 reçoit un test allégé.",
      },
      {
        title: 'Envoyez le cadrage d\'une page au commanditaire pour accord',
        body: "Objectifs, périmètre, exclusions, budget-temps, calendrier. Demandez un accord écrit.",
      },
    ],
    table: {
      columns: ['Zone (objectif)', 'Score', 'Jours sur site', 'Auditeur'],
      rows: [
        ['Seuils Fonds Meridian (O1) et conseil (O5)', '9', '3', 'Fatou S. (zone d\'auto-révision)'],
        ['Achats > 10 000 USD (O2)', '6', '3', 'Amani K.'],
        ['Séparation des tâches (O3)', '6', '2', 'Amani K. ; entretiens de Josué M. par Fatou S.'],
        ['Carburant (O4)', '6', '3', 'Amani K.'],
        ['Stock de médicaments (test allégé)', '4', '1', 'Amani K. ; entretien de Didier L. par Fatou S.'],
        ['Réunions d\'ouverture et de clôture, diagnostic COSO', '—', '1', 'Les deux'],
      ],
    },
    result: "Un cadrage chiffré (13 jours sur site au total, dont 3 pour Fatou S.) validé par écrit par la présidente du comité le 30 avril 2026.",
    pitfall: "Oublier de réserver du temps au diagnostic COSO et aux réunions : ces heures sont toujours prises sur les tests si elles ne sont pas planifiées.",
  },

  // ── Procédure 5 — Lettre de mission ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 7',
    title: 'Ouvrir le template et remplir l\'en-tête et la section 1',
    intro: "Pourquoi : c'est l'étape non négociable du module — sans lettre signée, aucun mandat opposable. Entrées : cadrage validé, décision du comité. Outil : lettre-de-mission-audit-interne.docx.",
    steps: [
      {
        title: 'Enregistrez une copie de travail',
        actions: [
          "1. Ouvrez lettre-de-mission-audit-interne.docx.",
          "2. Fichier > Enregistrer sous : 2026-05-05_LM_Achats_Goma_v1.docx dans « 02_Lettre_de_mission ».",
          "3. Activez le suivi des modifications (Révision > Suivi des modifications) pour tracer les échanges avec le commanditaire.",
        ],
      },
      {
        title: 'Remplissez les trois champs du tableau « 1. Émetteur et destinataire »',
        actions: [
          "Commanditaire : nom, fonction ET instance (ce n'est pas la personne, c'est l'autorité qui vous mandate).",
          "Organisation / bureau audité : organisation, bureau, province.",
          "Date d'émission : la date d'envoi pour signature.",
        ],
      },
    ],
    table: {
      columns: ['Champ du template', 'Valeur saisie (fil rouge)'],
      rows: [
        ["Commanditaire de la mission (Direction Générale / Comité d'audit)", "Comité d'audit du Conseil d'administration de HSGL — Hélène V., Présidente"],
        ['Organisation / bureau audité', 'Horizon Santé Grands Lacs — base de Goma (Nord-Kivu, RDC)'],
        ["Date d'émission de la lettre", '5 mai 2026'],
      ],
    },
    result: "L'en-tête et la section 1 sont remplis ; le commanditaire est bien l'instance prévue par la charte (article 3).",
    pitfall: "Indiquer le Directeur Pays comme commanditaire d'un audit qui porte sur son propre pays : le mandat doit venir de l'autorité au-dessus de la ligne auditée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 7',
    title: 'Section 2 — Formuler les objectifs de la mission',
    intro: "Le template demande : « Ce que la mission cherche à vérifier, sécuriser ou améliorer (assurance et/ou conseil) ». Entrée : les objectifs rédigés en procédure 4, étape 4.",
    steps: [
      {
        title: 'Collez les objectifs O1 à O5 et numérotez-les',
      },
      {
        title: 'Vérifiez chaque objectif avec trois questions',
        actions: [
          "Commence-t-il par un verbe vérifiable ?",
          "Porte-t-il la mention (assurance) ou (conseil) ?",
          "Pourra-t-on dire à la fin « atteint » ou « non atteint » ?",
        ],
      },
      {
        title: 'Raccourcissez pour tenir la page',
        body: "Une ligne par objectif ; les détails de méthode iront dans le programme de travail, pas dans la lettre.",
      },
    ],
    example: {
      title: 'Section 2 telle que saisie',
      lines: [
        "1. (Assurance) Vérifier le respect du seuil de mise en concurrence de 5 000 USD sur les achats imputés au Fonds Meridian.",
        "2. (Assurance) Vérifier le respect de la procédure d'appel d'offres et des seuils de délégation pour les achats > 10 000 USD.",
        "3. (Assurance) Évaluer la séparation des tâches demande / validation / réception / paiement.",
        "4. (Assurance) Vérifier la traçabilité de la consommation de carburant.",
        "5. (Conseil) Proposer une grille de seuils et un classement des pièces conformes à tous les bailleurs actifs.",
      ],
    },
    result: "Cinq objectifs d'une ligne, chacun étiqueté assurance ou conseil.",
    pitfall: "Écrire « Auditer la logistique de Goma » : ce n'est pas un objectif, c'est un sujet. On ne pourra jamais dire s'il est atteint.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 7',
    title: 'Section 3 — Périmètre, approche par les risques et période',
    intro: "Le template demande : « Base, service ou cycle audité (achats, RH, trésorerie…) et approche par les risques retenue », puis les champs « Période couverte — début / fin ».",
    steps: [
      {
        title: 'Saisissez le périmètre en une phrase',
        body: "Entité + cycle + bornes du cycle (de… à…).",
      },
      {
        title: 'Résumez l\'approche par les risques en deux phrases',
        body: "Sur quoi vous concentrez le temps, et pourquoi (les scores).",
      },
      {
        title: 'Listez les exclusions',
        body: "Ce qui n'est pas écrit comme exclu sera considéré comme couvert.",
      },
      {
        title: 'Remplissez les deux champs de période au format jj/mm/aaaa',
      },
    ],
    example: {
      title: 'Section 3 telle que saisie',
      lines: [
        "Périmètre : cycle achats-logistique de la base de Goma, de la demande d'achat au paiement fournisseur, y compris carburant et réception en magasin.",
        "Approche : tests concentrés sur les quatre zones cotées prioritaires (seuils Fonds Meridian, achats > 10 000 USD, cumul de fonctions, carburant) ; test allégé sur le stock de médicaments.",
        "Exclusions : paie et RH, trésorerie hors paiements fournisseurs, activités médicales, locations ponctuelles de véhicules.",
        "Période couverte — début : 01/10/2025 — fin : 31/03/2026.",
      ],
    },
    result: "Un périmètre que l'audité peut lire sans ambiguïté, avec exclusions et dates exactes.",
    tip: "Si l'audité découvre un sujet hors périmètre pendant la mission, notez-le pour le plan d'audit suivant au lieu d'étendre la mission en silence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 7',
    title: 'Section 4 — Désigner les auditeurs et leur rôle',
    intro: "Le template prévoit deux champs : « Nom et fonction de l'auditeur responsable » et « Nom et fonction du/des auditeur(s) associé(s), le cas échéant ».",
    steps: [
      {
        title: 'Saisissez l\'auditeur responsable',
        body: "Nom, fonction, rattachement.",
      },
      {
        title: 'Saisissez l\'auditeur associé avec son rôle exact',
        body: "Quand un associé existe à cause d'un conflit, son rôle doit apparaître ici, en cohérence avec la section 5.",
      },
    ],
    table: {
      columns: ['Champ du template', 'Valeur saisie (fil rouge)'],
      rows: [
        ["Nom et fonction de l'auditeur responsable", "Amani K., auditeur(rice) interne, rattaché(e) au comité d'audit"],
        ["Nom et fonction du/des auditeur(s) associé(s)", "Fatou S., auditrice interne senior (bureau régional) — supervision renforcée : tests de conformité aux seuils, entretiens de J. M., E. K. et D. L., revue de toutes les conclusions"],
      ],
    },
    result: "Les deux auditeurs sont nommés, et la répartition des rôles est visible par l'audité.",
    pitfall: "Indiquer « Fatou S. — appui » sans préciser son rôle : l'audité ne saura pas qu'il doit lui adresser certains dossiers, et la mitigation ne sera pas vérifiable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 7',
    title: "Section 5 — Rédiger la déclaration d'indépendance",
    intro: "Le template offre deux cases : « Confirmation de l'absence de conflit d'intérêt identifié » ou « Si un conflit est identifié : nature du conflit et mesure de mitigation retenue ». Entrées : note de déclaration et décision du comité.",
    steps: [
      {
        title: 'Choisissez la bonne case',
        actions: [
          "Aucun « oui » à l'auto-évaluation → première case, une phrase suffit.",
          "Au moins un « oui » → seconde case, obligatoirement.",
        ],
      },
      {
        title: 'Rédigez en trois phrases',
        actions: [
          "1. Nature du conflit (faits datés).",
          "2. Menaces identifiées.",
          "3. Mesure de mitigation retenue, avec la référence de la décision du comité.",
        ],
      },
    ],
    example: {
      title: 'Section 5 telle que saisie',
      lines: [
        "Conflit identifié : l'auditeur responsable a été Log Manager de la base de Goma de janvier 2023 à mars 2025, a validé en septembre 2024 la procédure achats v2 et la grille des seuils, et a recruté ou supervisé trois membres de l'équipe logistique actuelle.",
        "Menaces : auto-révision (seuils et procédure) et familiarité (trois membres de l'équipe).",
        "Mitigation retenue par décision du comité d'audit du 24 avril 2026 : supervision renforcée par Fatou S., qui réalise les tests de conformité aux seuils, conduit les entretiens des trois personnes concernées et revoit l'ensemble des conclusions avant diffusion.",
      ],
    },
    result: "Une déclaration factuelle de trois phrases, cohérente mot pour mot avec la note et la décision du comité.",
    pitfall: "Cocher « absence de conflit » par réflexe alors qu'un conflit a été déclaré au comité : la contradiction entre deux pièces du dossier sera relevée par tout auditeur externe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 7',
    title: 'Section 6 — Livrables attendus et échéances',
    intro: "Le template demande « Livrable(s) attendu(s) (rapport, note, plan d'action…) » et « Date d'échéance ». Entrée : le calendrier validé avec le cadrage.",
    steps: [
      {
        title: 'Listez chaque livrable avec une date',
        body: "Du programme de travail jusqu'au rapport définitif avec plan d'action.",
      },
      {
        title: 'Vérifiez la faisabilité en remontant le calendrier',
        actions: [
          "Rapport provisoire : au plus 2 semaines après la réunion de clôture.",
          "Réponses de l'audité : 10 jours ouvrés.",
          "Rapport définitif : 1 semaine après réception des réponses.",
        ],
      },
    ],
    table: {
      columns: ['Livrable attendu', "Date d'échéance"],
      rows: [
        ['Programme de travail détaillé', '15 mai 2026'],
        ['Restitution orale lors de la réunion de clôture à Goma', '29 mai 2026'],
        ["Rapport provisoire transmis à l'audité", '12 juin 2026'],
        ["Réponses de l'audité et plan d'action", '19 juin 2026'],
        ["Rapport définitif au comité d'audit", '26 juin 2026'],
        ['Note de conseil : grille de seuils et classement des pièces', '26 juin 2026'],
      ],
    },
    result: "Six livrables datés, compatibles avec la visite du Fonds Meridian en juillet.",
    tip: "Fixez la date de la réunion de clôture dès la lettre de mission : c'est le meilleur moyen d'éviter qu'elle soit « reportée » le jour où vos constats dérangent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 7',
    title: 'Section 7 — Faire signer, puis diffuser',
    intro: "Le template prévoit deux blocs : « Nom, fonction et signature du commanditaire — Date » et « Nom, fonction et signature de l'auditeur — Date ». Règle : signature AVANT le premier entretien de collecte.",
    steps: [
      {
        title: 'Contrôlez la lettre avant envoi',
        actions: [
          "1. Elle tient sur une page (Fichier > Imprimer, vérifiez l'aperçu).",
          "2. Les sections 4 et 5 sont cohérentes avec la décision du comité.",
          "3. Aucune section n'est vide.",
        ],
      },
      {
        title: 'Signez en premier, puis envoyez au commanditaire',
        body: "Exportez en PDF, signez, envoyez à la présidente du comité en demandant un retour signé à date fixe.",
      },
      {
        title: "Diffusez la version signée à l'audité",
        actions: [
          "Destinataires : Directeur Pays, Coordinateur de base, Finance Manager de la base.",
          "Joignez la liste préliminaire des documents attendus.",
        ],
      },
      {
        title: 'Archivez la version signée',
        body: "Dossier « 02_Lettre_de_mission » : 2026-05-07_LM_Achats_Goma_signée.pdf.",
      },
    ],
    example: {
      title: 'Bloc de signatures complété',
      lines: [
        "Hélène V., Présidente du comité d'audit — signé le 07/05/2026.",
        "Amani K., auditeur(rice) interne — signé le 05/05/2026.",
        "Diffusion à l'audité : 7 mai 2026, onze jours avant l'arrivée à Goma.",
      ],
    },
    result: "Une lettre d'une page, signée par les deux parties, diffusée à l'audité et archivée. C'est la partie 3 du livrable de l'exercice noté.",
    pitfall: "Commencer « quelques entretiens informels » en attendant la signature. Sans lettre signée, vous n'avez aucun mandat opposable si votre légitimité est contestée — et cela arrive dès que vos constats dérangent quelqu'un d'influent.",
  },

  // ── Procédure 6 — Réunion d'ouverture ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 3',
    title: "Préparer la réunion d'ouverture",
    intro: "Pourquoi : un auditeur qui débarque sans s'être présenté déclenche la défense réflexe de l'équipe : rétention d'information, réponses évasives, dossiers « pas encore prêts ». Quand : premier jour sur site. Entrées : lettre signée, kit de légitimité.",
    steps: [
      {
        title: 'Convoquez par écrit au moins 5 jours avant',
        actions: [
          "Invités : le responsable de l'unité auditée, la Finance, la Logistique ; le Directeur Pays est invité, sa présence est souhaitée mais non obligatoire.",
          "Durée : 45 minutes, le premier matin.",
        ],
      },
      {
        title: 'Préparez un ordre du jour en cinq points',
        actions: [
          "1. Présentations (5 min).",
          "2. Mandat et démarche (10 min).",
          "3. Objectifs, périmètre, calendrier (10 min).",
          "4. Interlocuteurs et documents (10 min).",
          "5. Questions et engagements réciproques (10 min).",
        ],
      },
      { title: 'Imprimez la lettre de mission et la liste des documents en autant d\'exemplaires que de participants' },
    ],
    example: {
      title: "Convocation envoyée le 11 mai 2026",
      lines: [
        "Objet : Réunion d'ouverture — audit du cycle achats-logistique, lundi 18 mai, 9h00, salle de réunion de la base.",
        "« Bonjour à toutes et à tous, comme annoncé dans la lettre de mission du 7 mai, je vous propose une réunion d'ouverture de 45 minutes pour présenter la démarche, le calendrier et les documents utiles. L'objectif est de sécuriser ensemble le cycle achats avant la visite du Fonds Meridian en juillet. Ordre du jour ci-joint. Amani K. et Fatou S. »",
      ],
    },
    result: "Une convocation envoyée, un ordre du jour minuté et des supports imprimés.",
    tip: "Écrivez « sécuriser ensemble » dès la convocation : vous installez la casquette conseil avant même d'arriver.",
  },
  {
    type: 'process',
    stepLabel: "Procédure 6 — Étape 2 sur 3",
    title: "Conduire la réunion : mandat, démarche, déroulé",
    intro: "Pourquoi : c'est en 45 minutes que l'équipe décide si elle vous parle honnêtement. Les trois messages à faire passer : votre mandat, la nature de votre démarche (assurance ET conseil), le déroulé prévu.",
    steps: [
      {
        title: 'Montrez le mandat sans le brandir',
        body: "Remettez la lettre de mission ; citez le commanditaire. Gardez la charte en réserve.",
      },
      {
        title: 'Expliquez la démarche en une phrase',
        body: "Vous cherchez des failles de système, pas des coupables.",
      },
      {
        title: 'Annoncez les déclarations et le rôle de la pair auditrice',
        body: "Dire vous-même que vous avez travaillé à Goma désamorce les rumeurs et montre la rigueur de la démarche.",
      },
      {
        title: 'Présentez le calendrier et la date de clôture',
        body: "L'audité doit savoir quand il verra les constats et comment il pourra y répondre.",
      },
      {
        title: 'Obtenez trois engagements concrets',
        actions: [
          "Un point de contact par fonction.",
          "Un bureau et un accès au système d'achats en lecture seule.",
          "Une date de remise des documents prioritaires.",
        ],
      },
    ],
    example: {
      title: 'Phrases clés prononcées le 18 mai',
      lines: [
        "« Le comité d'audit nous a mandatées pour évaluer le cycle achats sur octobre-mars. Voici la lettre de mission signée. »",
        "« Nous cherchons des failles de système, pas des coupables. Si un contrôle ne fonctionne pas, la question sera : pourquoi le système l'a permis ? »",
        "« Comme beaucoup d'entre vous le savent, j'ai été Log Manager ici. C'est pourquoi Fatou S. conduira les tests sur les seuils et certains entretiens : c'est une décision du comité, et c'est une garantie pour vous comme pour nous. »",
        "« Vous verrez tous nos constats avant le rapport, lors de la réunion de clôture du 29 mai, et vous pourrez y répondre par écrit. »",
      ],
    },
    result: "La réunion se termine avec trois engagements obtenus et aucune question sur votre légitimité laissée sans réponse.",
    pitfall: "Adopter un ton accusateur dès l'ouverture (« nous avons déjà repéré des anomalies »). Vous fermez l'accès à l'information la plus utile : celle que l'équipe partage volontairement.",
  },
  {
    type: 'process',
    stepLabel: "Procédure 6 — Étape 3 sur 3",
    title: "Rédiger et diffuser le compte rendu d'ouverture",
    intro: "Pourquoi : les engagements oraux s'évaporent. Le compte rendu les transforme en références que vous pourrez citer si un document n'arrive pas. Quand : le jour même.",
    steps: [
      {
        title: 'Rédigez le compte rendu en une page, en cinq rubriques',
        actions: [
          "1. Date, lieu, participants, absents.",
          "2. Mandat présenté (référence de la lettre).",
          "3. Calendrier confirmé.",
          "4. Engagements pris (qui, quoi, pour quand).",
          "5. Questions posées et réponses données.",
        ],
      },
      { title: "Envoyez-le avant 18h00 à tous les participants, copie au commanditaire" },
      { title: 'Classez-le dans « 03_Terrain »' },
    ],
    example: {
      title: "Rubrique « Engagements pris » du compte rendu du 18 mai 2026",
      lines: [
        "Point de contact achats : Josué M. (entretiens et dossiers traités par Fatou S.) ; point de contact finance : Ruth B.",
        "Accès en lecture seule à l'outil d'achats : Ruth B., au plus tard le 18 mai à 14h00.",
        "Documents prioritaires D1 à D6 : remis par Josué M. et Ruth B. au plus tard le 19 mai à 12h00.",
        "Réunion de clôture : vendredi 29 mai, 10h00, Coordinateur de base et Directeur Pays présents.",
      ],
    },
    result: "Un compte rendu d'une page, envoyé le jour même, qui fixe des engagements datés et nominatifs.",
    tip: "Rédigez les engagements avec des heures, pas seulement des jours : « le 19 mai » devient vite « fin de semaine ».",
  },

  // ── Procédure 7 — Diagnostic COSO ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 6',
    title: "Ouvrir la grille COSO et la préparer pour votre périmètre",
    intro: "Pourquoi : avant d'examiner les factures ligne par ligne, cartographiez l'état des 5 composantes pour savoir où creuser. Quand : Jours 2-3 sur site. Outil : grille-evaluation-composantes-coso.xlsx.",
    steps: [
      {
        title: 'Enregistrez une copie de travail',
        body: "Fichier > Enregistrer sous : 2026-05-19_COSO_Achats_Goma.xlsx dans « 03_Terrain ».",
      },
      {
        title: "Repérez la structure de l'onglet « Auto-évaluation COSO »",
        actions: [
          "Colonne A : composante ; colonne B : sous-critère (13 lignes, de la ligne 6 à la ligne 18).",
          "Colonne C : Score (1-5) — à saisir.",
          "Colonne D : Observations / éléments probants — à saisir.",
          "Colonne E : Moyenne composante — formules =MOYENNE(C6:C8), =MOYENNE(C9:C11), =MOYENNE(C12:C14), =MOYENNE(C15:C16), =MOYENNE(C17:C18) (AVERAGE dans une version anglaise d'Excel).",
          "Cellule E20 : score global = moyenne des 5 composantes, à poids égal.",
        ],
      },
      {
        title: "Effacez l'exemple illustratif",
        actions: [
          "Sélectionnez C6:D18, appuyez sur Suppr.",
          "Ne touchez ni à la colonne E, ni à E20, ni à l'onglet « Synthèse ».",
          "Les moyennes affichent #DIV/0! tant que les scores sont vides : c'est normal.",
        ],
      },
      {
        title: 'Remplacez la ligne 4 par l\'identification de votre diagnostic',
        body: "Exemple : « Base de Goma — cycle achats-logistique — diagnostic du 19-20 mai 2026 — A. K. et F. S. »",
      },
    ],
    result: "Une grille vierge, identifiée, avec ses formules intactes et la mise en forme conditionnelle (rouge sous 3) opérationnelle.",
    pitfall: "Garder les scores de l'exemple « en attendant » : un diagnostic livré avec des chiffres d'exemple ruine la crédibilité de toute la mission.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 6',
    title: 'Collecter un élément probant pour chaque sous-critère',
    intro: "Pourquoi : une note sans preuve est une opinion. Chaque sous-critère doit reposer sur au moins un document ET une confirmation (entretien ou observation). Entrées : documents D1 à D6, premiers entretiens.",
    steps: [
      {
        title: 'Pour chaque ligne, identifiez la source principale',
        body: "Document d'abord, entretien ensuite pour confirmer ou expliquer.",
      },
      {
        title: 'Posez une question ouverte et demandez à voir',
        body: "« Comment faites-vous… ? Pouvez-vous me montrer le dernier exemple ? »",
      },
      {
        title: 'Notez la référence de chaque preuve',
        body: "Nom du document, date, page ou n° de pièce : elle ira dans la colonne D.",
      },
    ],
    table: {
      columns: ['Ligne', 'Sous-critère (résumé)', 'Source à consulter', 'Question à poser'],
      rows: [
        ['6', 'Code de conduite connu', 'Code signé dans les dossiers du personnel', 'Pouvez-vous me montrer 5 dossiers tirés au hasard ?'],
        ['7', 'Organigramme et séparation des tâches', 'Organigramme, extraction BC (colonne CUMUL)', 'Qui réceptionne quand le demandeur est absent ?'],
        ['9', 'Cartographie des risques à jour', 'Registre des risques de la base', 'Quand a-t-il été mis à jour pour la dernière fois ?'],
        ['10', 'Suivi des risques de fraude', 'Procédures, registre des incidents', 'Que se passe-t-il quand un écart de carburant est détecté ?'],
        ['11', 'Risques liés au changement', 'Convention Fonds Meridian, grille des seuils', 'Qui a comparé la convention aux seuils internes ?'],
        ['16', 'Canal de signalement connu', 'Affichage, entretiens de 5 employés dont gardiens et chauffeurs', 'Si vous voyez une fraude, à qui le dites-vous ?'],
        ['18', 'Suivi des plans d\'action', "Rapport d'audit 2024, tableau de suivi", 'Où en est la recommandation n° 3 ?'],
      ],
    },
    result: "Pour chacune des 13 lignes, au moins une preuve référencée, prête à être citée.",
    tip: "Pour le canal de signalement (ligne 16), interrogez toujours au moins un gardien et un chauffeur : ce sont eux qui voient le carburant et les livraisons, et ce sont souvent les derniers informés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 6',
    title: 'Noter chaque sous-critère avec une échelle définie',
    intro: "Pourquoi : la grille dit « de 1 (très insuffisant) à 5 (pleinement maîtrisé) ». Sans définition intermédiaire, deux auditeurs donnent deux notes différentes. Fixez l'échelle avant de noter.",
    steps: [
      {
        title: "Adoptez une échelle écrite et partagez-la avec la pair auditrice",
      },
      {
        title: 'Notez ligne par ligne dans la colonne C',
        body: "Choisissez le niveau dont la description correspond aux preuves ; en cas d'hésitation entre deux niveaux, retenez le plus bas et expliquez pourquoi.",
      },
      {
        title: 'Faites noter les lignes sensibles au conflit par la pair auditrice',
        body: "À Goma : lignes 7, 12 et 13 (seuils, séparation des tâches) notées par Fatou S.",
      },
    ],
    table: {
      columns: ['Note', 'Définition opérationnelle'],
      rows: [
        ['1 — Très insuffisant', 'Le dispositif n\'existe pas'],
        ['2 — Insuffisant', 'Il existe sur le papier mais n\'est pas appliqué ou est inconnu des équipes'],
        ['3 — Partiel', 'Il est appliqué, avec des exceptions significatives ou sans trace écrite'],
        ['4 — Satisfaisant', 'Il est appliqué et tracé ; quelques écarts mineurs'],
        ['5 — Pleinement maîtrisé', 'Il est appliqué, tracé, revu périodiquement, sans écart sur l\'échantillon'],
      ],
    },
    example: {
      title: 'Scores saisis pour Goma (colonne C)',
      lines: [
        "Environnement de contrôle : C6 = 4 ; C7 = 2 ; C8 = 3.",
        "Évaluation des risques : C9 = 2 ; C10 = 1 ; C11 = 2.",
        "Activités de contrôle : C12 = 3 ; C13 = 2 ; C14 = 3.",
        "Information & communication : C15 = 3 ; C16 = 2.",
        "Pilotage : C17 = 4 ; C18 = 2.",
      ],
    },
    result: "13 scores saisis, chacun justifiable par la définition du niveau.",
    pitfall: "Donner un 3 « par prudence » partout où vous manquez de preuves : vous masquez exactement les zones où il faut creuser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 6',
    title: 'Rédiger les observations dans la colonne D',
    intro: "Pourquoi : la colonne D est ce qui rend votre note défendable. Format conseillé : fait constaté + chiffre + source. Pas d'adjectif, pas de « je pense ».",
    steps: [
      {
        title: 'Écrivez une phrase par sous-critère, au format fait + chiffre + source',
      },
      {
        title: 'Relisez avec deux tests',
        actions: [
          "Un tiers pourrait-il retrouver la preuve à partir de la référence ?",
          "La phrase est-elle compréhensible sans vous ?",
        ],
      },
    ],
    example: {
      title: 'Colonne D — extraits (Goma)',
      lines: [
        "D7 (2) : 37 BC < 1 000 USD avec demandeur = réceptionnaire, dont 31 au nom du Logistics Officer, depuis le départ non remplacé de l'assistant achats (nov. 2025) — extraction BC, colonne CUMUL.",
        "D9 (2) : registre des risques daté de février 2024, jamais actualisé — fichier Registre_risques_Goma.xlsx.",
        "D10 (1) : aucun processus d'identification ni de suivi des risques de fraude ; 2 écarts de carburant de 2023 traités oralement — entretiens Coordinateur et Finance Manager du 19/05.",
        "D11 (2) : Fonds Meridian intégré en janvier 2026 sans revue de la grille des seuils (seuil de 5 000 USD non appliqué) — convention art. 9, grille des seuils v2.",
        "D16 (2) : canal de signalement décrit dans le code de conduite, mais 4 employés sur 5 interrogés (dont le gardien et le chauffeur) ne savent pas comment l'utiliser — entretiens du 19/05.",
        "D18 (2) : 2 recommandations de l'audit 2024 sans date de clôture ni responsable — tableau de suivi du siège.",
      ],
    },
    result: "13 observations factuelles et référencées ; chaque note de la colonne C a sa justification en colonne D.",
    tip: "Les observations des lignes notées 1 ou 2 sont les brouillons de vos futurs constats d'audit : soignez-les, vous les réutiliserez dans le rapport.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 6',
    title: 'Lire les moyennes, le score global et l\'onglet Synthèse',
    intro: "Pourquoi : les formules calculent automatiquement, mais c'est vous qui devez comprendre et vérifier le résultat. Seuil d'alerte : toute moyenne ou score global sous 3/5 apparaît en rouge.",
    steps: [
      {
        title: 'Vérifiez un calcul à la main',
        body: "Recalculez au moins une moyenne pour vous assurer que les formules n'ont pas été altérées.",
      },
      {
        title: "Ouvrez l'onglet « Synthèse »",
        actions: [
          "Colonne B : moyennes reprises de l'onglet principal (formules ='Auto-évaluation COSO'!E6, etc.).",
          "Colonne C : statut automatique « OK » ou « ⚠ Sous le seuil — à approfondir ».",
          "Ligne 11 : score global avec le statut « ⚠ Plan d'action prioritaire » s'il est sous 3.",
        ],
      },
      {
        title: 'Classez les composantes de la plus faible à la plus forte',
      },
    ],
    example: {
      title: 'Calcul ligne par ligne (Goma)',
      lines: [
        "Environnement de contrôle : (4 + 2 + 3) / 3 = 3,00 → OK (pile au seuil).",
        "Évaluation des risques : (2 + 1 + 2) / 3 = 1,67 → ⚠ Sous le seuil.",
        "Activités de contrôle : (3 + 2 + 3) / 3 = 2,67 → ⚠ Sous le seuil.",
        "Information & communication : (3 + 2) / 2 = 2,50 → ⚠ Sous le seuil.",
        "Pilotage : (4 + 2) / 2 = 3,00 → OK (pile au seuil).",
        "Score global : (3,00 + 1,67 + 2,67 + 2,50 + 3,00) / 5 = 12,83 / 5 = 2,57 → ⚠ Plan d'action prioritaire.",
      ],
    },
    result: "Trois composantes sous le seuil (Évaluation des risques, Information & communication, Activités de contrôle) et un score global de 2,57/5.",
    pitfall: "Lire « OK » et passer : l'environnement de contrôle est à 3,00 avec une ligne à 2 (séparation des tâches). Une moyenne au seuil peut cacher un sous-critère critique — regardez toujours les lignes notées 1 ou 2.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 6',
    title: 'Transformer le diagnostic en priorités de tests',
    intro: "Pourquoi : la grille n'est pas un livrable en soi ; elle sert à décider où concentrer les tests détaillés, plutôt que de répartir le temps uniformément. Entrées : synthèse classée, cadrage de la procédure 4.",
    steps: [
      {
        title: 'Pour chaque composante sous le seuil, nommez les tests à approfondir',
        body: "Partez des lignes notées 1 ou 2.",
      },
      {
        title: 'Recoupez avec la cotation des risques du cadrage',
        body: "Si le diagnostic confirme une zone prioritaire, maintenez ou augmentez son temps ; s'il révèle une zone nouvelle, ajustez dans les limites du périmètre signé.",
      },
      {
        title: 'Informez le commanditaire de tout ajustement significatif',
      },
    ],
    table: {
      columns: ['Composante (moyenne)', 'Ligne critique', 'Test détaillé à mener', 'Lien cadrage'],
      rows: [
        ['Évaluation des risques (1,67)', '10, 11', 'Tester les 14 BC Meridian ; reconstituer les écarts de carburant sur 6 mois', 'O1, O4'],
        ['Information & communication (2,50)', '16', 'Entretiens avec 8 employés de terrain sur le canal de signalement', 'Ajout mineur, signalé au comité'],
        ['Activités de contrôle (2,67)', '13', 'Tester les 37 BC en cumul demande / réception', 'O3'],
        ['Environnement de contrôle (3,00)', '7', 'Vérifier les délégations de signature effectives', 'O2'],
        ['Pilotage (3,00)', '18', 'Vérifier l\'état des 2 recommandations 2024 ouvertes', 'Constat de pilotage'],
      ],
    },
    result: "Une grille COSO notée et commentée, une synthèse et un tableau de priorités qui pilote le planning de la procédure 8.",
    tip: "Joignez la grille au dossier de mission, pas au rapport : le rapport présente des constats, la grille montre comment vous les avez ciblés.",
  },

  // ── Procédure 8 — Planifier ──
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 3',
    title: 'Établir la liste des documents à fournir, par priorité',
    intro: "Pourquoi : un auditeur qui demande ses documents au fil de l'eau perd la moitié de son temps à attendre. Entrées : priorités COSO, objectifs de la lettre de mission.",
    steps: [
      {
        title: 'Ouvrez un tableau Excel de six colonnes',
        body: "N°, document, période ou échantillon, détenteur, date limite, priorité.",
      },
      {
        title: 'Classez les demandes dans l\'ordre où l\'information est critique',
        body: "Priorité 1 : ce qui conditionne les tests des composantes sous le seuil.",
      },
      {
        title: "Précisez l'échantillon",
        body: "« Les dossiers d'achat » ne veut rien dire ; « les 14 BC Meridian listés en annexe » est exécutable.",
      },
    ],
    table: {
      columns: ['N°', 'Document', 'Détenteur', 'Date limite', 'Priorité'],
      rows: [
        ['D7', 'Dossiers complets des 14 BC Fonds Meridian (devis, PV, BC, bon de réception, facture, paiement)', 'Josué M. (remis à Fatou S.)', '21/05, 9h00', '1'],
        ['D8', "Bons de carburant, carnets de bord des 6 véhicules, rapprochements mensuels d'octobre à mars", 'Didier L., chauffeurs', '21/05, 14h00', '1'],
        ['D9', 'Dossiers des 37 BC en cumul demande / réception', 'Josué M. (remis à Fatou S.)', '22/05, 9h00', '1'],
        ['D10', 'Dossiers des 38 BC > 10 000 USD (échantillon de 12 transmis)', 'Ruth B.', '22/05, 14h00', '2'],
        ['D11', 'Délégations de signature signées en vigueur', 'Dr Patrice N.', '22/05, 14h00', '2'],
        ['D12', "Dernier inventaire du stock de médicaments et fiches de stock", 'Didier L. (remis à Fatou S.)', '25/05, 9h00', '3'],
      ],
    },
    result: "Une liste de documents numérotée, priorisée, avec échantillons précis, détenteurs et heures limites.",
    tip: "Faites remettre les dossiers des personnes concernées par la menace de familiarité directement à la pair auditrice : la mitigation se voit dans la liste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 3',
    title: "Construire le planning d'entretiens par ordre de criticité",
    intro: "Pourquoi : l'ordre des entretiens se décide par l'importance de l'information, pas par la disponibilité des personnes. Entrées : liste des documents, priorités COSO, rôles de chaque auditeur.",
    steps: [
      {
        title: 'Placez d\'abord les entretiens qui conditionnent les tests de priorité 1',
      },
      {
        title: 'Séquencez documents puis entretien',
        body: "Lisez le dossier avant de rencontrer la personne : vos questions seront précises.",
      },
      {
        title: "Affectez chaque entretien à un auditeur, en respectant la décision d'indépendance",
      },
      {
        title: 'Prévoyez 1 heure par entretien et 30 minutes de mise au propre',
      },
    ],
    table: {
      columns: ['Date et heure', 'Personne', 'Thème', 'Auditeur'],
      rows: [
        ['21/05 — 10h00', 'Ruth B., Finance Manager', 'Paiements Meridian, rapprochements carburant', 'Amani K.'],
        ['21/05 — 14h00', 'Josué M., Logistics Officer', 'Mise en concurrence Meridian, cumul de fonctions', 'Fatou S.'],
        ['22/05 — 9h00', 'Deux chauffeurs et un gardien', 'Carburant, canal de signalement', 'Amani K.'],
        ['22/05 — 14h00', 'Dr Patrice N., Coordinateur', 'Délégations, revue des seuils', 'Amani K. et Fatou S.'],
        ['25/05 — 9h00', 'Didier L., magasinier', 'Réception, inventaire', 'Fatou S.'],
        ['25/05 — 14h00', 'Esther K., assistante logistique', 'Réception des marchandises', 'Fatou S.'],
      ],
    },
    result: "Un planning nominatif sur les jours de tests, cohérent avec la liste des documents et la répartition décidée par le comité.",
    pitfall: "Commencer par la personne la plus disponible « pour avancer » : vous arrivez sans avoir lu son dossier et devrez la revoir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 3',
    title: 'Communiquer la liste et le planning à l\'avance',
    intro: "Pourquoi : prévenir évite les pertes de temps et renforce, paradoxalement, la perception de professionnalisme plutôt que celle d'une inspection surprise hostile. Quand : au moins 24 heures avant le premier entretien.",
    steps: [
      {
        title: 'Envoyez un courriel unique aux personnes concernées',
        actions: [
          "Pièces jointes : liste des documents et planning.",
          "Corps : objet, rappel du but, ce qu'on attend de chacun, possibilité de proposer un autre créneau.",
        ],
      },
      {
        title: 'Faites un point de suivi chaque matin',
        body: "Cinq minutes avec Ruth B. et Josué M. : documents reçus, retards, créneaux à déplacer.",
      },
      {
        title: 'Tracez tout retard dans un journal',
        body: "Date demandée, date reçue, motif : ces informations nourriront votre appréciation de l'environnement de contrôle.",
      },
    ],
    example: {
      title: 'Courriel du 20 mai 2026, 16h00',
      lines: [
        "Objet : Audit achats Goma — documents et entretiens du 21 au 25 mai.",
        "« Bonjour à toutes et à tous, suite au diagnostic des deux premiers jours, voici la liste des documents (D7 à D12) et le planning des entretiens. Les dossiers sont classés par priorité : merci de nous signaler dès demain matin toute difficulté sur un délai. Si un créneau ne vous convient pas, proposez-en un autre le même jour. Merci pour votre accueil et votre disponibilité. Amani K. et Fatou S. »",
      ],
    },
    result: "Liste et planning envoyés la veille, suivi quotidien en place et journal des retards ouvert.",
    tip: "Un document « pas encore prêt » trois fois de suite est en soi une information d'audit : notez-le factuellement, sans commentaire.",
  },

  // ── Procédure 9 — Résister à une pression ──
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 3',
    title: 'Reconnaître la pression et ne prendre aucun engagement',
    intro: "Pourquoi : un responsable sous pression bailleur qui vous glisse « tu vas conclure que tout va bien, hein ? » avant la fin de vos tests est en train de tester votre indépendance. Céder, même implicitement, détruit votre valeur professionnelle.",
    steps: [
      {
        title: 'Identifiez la forme de la pression',
        actions: [
          "Conclusion suggérée (« tout va bien, non ? »).",
          "Délai ou accès restreint (« les dossiers ne seront pas prêts avant ton départ »).",
          "Faveur ou cadeau (dîner, pagne, transport privé).",
          "Menace implicite (« le Conseil n'aimera pas un rapport négatif »).",
        ],
      },
      {
        title: 'Répondez sans vous engager, sur le fond de la méthode',
        body: "Rappelez que la conclusion dépendra des tests et que l'audité verra tout à la clôture.",
      },
      {
        title: 'Déclinez toute faveur avec courtoisie',
      },
    ],
    example: {
      title: 'Situation du 20 mai 2026 et réponses',
      lines: [
        "Joseph T., Directeur Pays, au dîner : « Avec la visite de Meridian en juillet, tu vas conclure que tout va bien, hein ? »",
        "Réponse : « Je comprends l'enjeu de juillet. Je ne peux rien conclure avant la fin des tests ; ce que je peux te promettre, c'est que tu verras tous les constats le 29 mai et qu'on construira ensemble un plan d'action présentable au bailleur. »",
        "Josué M. propose un dîner chez lui le samedi. Réponse : « Merci beaucoup, vraiment. Pendant la mission je ne peux pas l'accepter ; avec plaisir une fois le rapport définitif publié. »",
      ],
    },
    result: "Aucune promesse sur les conclusions, aucune faveur acceptée, et une relation préservée.",
    tip: "Transformez la pression en argument : un plan d'action solide présenté au bailleur vaut mieux qu'un rapport rassurant que le bailleur contredira lors de sa propre vérification.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 3',
    title: 'Documenter la pression dans une note au dossier',
    intro: "Pourquoi : si la pression se répète ou si le rapport est contesté, la note datée prouve que vous avez agi selon le code de déontologie. Quand : le jour même.",
    steps: [
      {
        title: 'Rédigez une note factuelle de cinq lignes',
        actions: [
          "1. Date, heure, lieu.",
          "2. Personne et propos exacts entre guillemets.",
          "3. Votre réponse.",
          "4. Témoins éventuels.",
          "5. Suite donnée (aucune, ou escalade).",
        ],
      },
      { title: "Classez-la dans « 00_Indépendance », pas dans le dossier de travail partagé" },
      { title: 'Informez la pair auditrice' },
    ],
    example: {
      title: 'Note au dossier — 20 mai 2026',
      lines: [
        "20/05/2026, 20h30, restaurant de l'hôtel, Goma. Le Directeur Pays, Joseph T., m'a dit : « Avec la visite de Meridian en juillet, tu vas conclure que tout va bien, hein ? »",
        "Réponse donnée : la conclusion dépendra des tests ; les constats seront présentés le 29 mai.",
        "Témoin : Fatou S. — Suite : aucune à ce stade ; escalade si la remarque se répète ou s'accompagne d'une restriction d'accès.",
        "Même jour : invitation à dîner de Josué M. déclinée ; aucun cadeau accepté.",
      ],
    },
    result: "Une note datée, factuelle, classée dans le dossier d'indépendance.",
    pitfall: "Écrire une note chargée d'interprétation (« le Directeur a tenté de me corrompre ») : restez sur les propos exacts et laissez le comité qualifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 3',
    title: 'Escalader au comité quand la pression persiste',
    intro: "Pourquoi : votre rattachement fonctionnel existe précisément pour ces situations. Critères d'escalade : la pression se répète, s'accompagne d'un refus d'accès, ou porte sur la modification d'un constat.",
    steps: [
      {
        title: 'Vérifiez si un critère d\'escalade est rempli',
      },
      {
        title: 'Informez la présidente du comité par écrit, en joignant la note au dossier',
        body: "Restez factuel, proposez une mesure (rappel du mandat par le comité, présence du comité à la clôture).",
      },
      {
        title: "Citez l'article de la charte en cas de refus d'accès",
        body: "Article 6 : droit d'accès illimité. Notez l'heure du refus et la personne.",
      },
    ],
    example: {
      title: 'Escalade (scénario alternatif, 25 mai 2026)',
      lines: [
        "« Madame la Présidente, le Directeur Pays a de nouveau demandé ce matin que le constat sur les 14 achats Meridian ne figure pas dans la restitution, et l'accès aux paiements de mars m'a été refusé à 11h00 par la Finance sur son instruction. Je joins mes notes au dossier des 20 et 25 mai. Je vous propose de rappeler par écrit le mandat (charte, article 6) au Directeur Pays et de participer à distance à la réunion de clôture du 29 mai. — Amani K. »",
      ],
    },
    result: "Le comité est informé dans la journée, avec les pièces, et peut agir avant la clôture.",
    tip: "Escalader n'est pas un échec relationnel : c'est l'usage normal de votre rattachement. Un auditeur qui n'escalade jamais finit par négocier ses conclusions.",
  },

  // ───────────────────────── 6. Cas complet résolu ─────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Le conflit d'intérêt hérité, Goma » : partie 1, l'analyse",
    scenario: "Rappel de l'énoncé : nommé(e) auditeur(rice) interne d'une ONG de santé au Nord et au Sud-Kivu, vous recevez l'audit du cycle achats-logistique de Goma sur 6 mois. Vous y étiez Log Manager il y a un peu plus d'un an, vous avez validé une partie des procédures et seuils du périmètre, et trois membres de l'équipe ont été recrutés ou supervisés par vous, dont le Logistics Officer, dont vous étiez proche. Le comité ignorait ce passé. Livrable 1 : l'analyse des menaces.",
    steps: [
      {
        title: 'Raisonnement 1 — Partir des faits, pas des étiquettes',
        body: "On liste d'abord les liens factuels (poste, documents validés, personnes recrutées), puis on les rattache aux menaces. Commencer par « il y a de la familiarité » sans faits rend l'analyse invérifiable.",
      },
      {
        title: 'Raisonnement 2 — Situer le délai de 12 mois',
        body: "Votre responsabilité a cessé un peu plus d'un an avant la mission : la présomption d'atteinte à l'objectivité des normes IIA ne s'applique plus automatiquement, mais les procédures que vous avez validées sont toujours en vigueur. La menace d'auto-révision reste donc réelle et doit être déclarée.",
      },
      {
        title: 'Raisonnement 3 — Localiser chaque menace',
        body: "La menace ne touche pas toute la mission : elle touche les tests des seuils et les entretiens de trois personnes. C'est ce qui rend possible une mitigation ciblée plutôt qu'un report.",
      },
    ],
    table: {
      columns: ['Menace', 'S\'applique ?', 'Pourquoi elle compromettrait les conclusions sans déclaration'],
      rows: [
        ['Auto-révision', 'Oui — moyenne', "Vous testeriez des seuils que vous avez validés : une conclusion favorable paraîtrait complaisante, et l'inadéquation avec l'exigence de 5 000 USD du nouveau bailleur risquerait d'être minimisée."],
        ['Familiarité', 'Oui — moyenne', "Vos entretiens avec trois personnes que vous avez recrutées ou supervisées, dont une proche, pourraient être moins exigeants ; un constat sur le cumul de fonctions du Logistics Officer serait contesté dans un sens ou dans l'autre."],
        ['Plaidoyer', 'Faible', "Pas de prise de position publique, mais avoir construit l'équipe crée une tentation de défendre ses pratiques ; la revue des conclusions par un tiers la neutralise."],
      ],
    },
    result: "Livrable 1 terminé : deux menaces avérées (auto-révision, familiarité), une menace faible (plaidoyer), chacune justifiée en 2-3 phrases.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 2, la note de déclaration au comité',
    scenario: "Livrable 2 : une note d'une demi-page maximum qui déclare le conflit, propose une option de mitigation parmi les trois prévues (pair à votre place, maintien avec supervision renforcée, report) et justifie le choix.",
    steps: [
      {
        title: 'Raisonnement — Choisir l\'option la plus légère qui neutralise toutes les menaces',
        body: "Les menaces sont moyennes et localisées, aucun lien familial ou financier : le maintien avec supervision renforcée suffit, à condition que la pair prenne en charge exactement les zones touchées. Le report laisserait HSGL sans audit avant la visite du bailleur.",
      },
    ],
    example: {
      title: 'Note finale (demi-page)',
      lines: [
        "À : Présidente du comité d'audit — De : Amani K., auditeur(rice) interne — Date : 22 avril 2026.",
        "Objet : Déclaration de conflit d'intérêt — audit du cycle achats-logistique, base de Goma (1er octobre 2025 – 31 mars 2026).",
        "1. Déclaration. J'ai été Log Manager de la base de Goma de janvier 2023 à mars 2025. J'ai validé en septembre 2024 la procédure achats v2 et la grille des seuils de délégation, toujours en vigueur. J'ai recruté ou supervisé trois membres de l'équipe logistique actuelle, dont le Logistics Officer, avec qui j'entretenais une relation de travail proche.",
        "2. Menaces. Auto-révision sur les tests des seuils et de la procédure ; familiarité sur les entretiens et dossiers de ces trois personnes ; plaidoyer jugé faible.",
        "3. Proposition. Maintien sur la mission avec supervision renforcée de Fatou S., auditrice senior sans lien avec Goma : tests de conformité aux seuils et objectif de conseil sur les seuils, entretiens des trois personnes concernées, revue de toutes les conclusions avant diffusion.",
        "4. Justification. Les menaces sont localisées et entièrement couvertes par ce partage ; Fatou S. est disponible 3 jours sur site ; le calendrier de mai est tenu, avant la visite du bailleur en juillet. Le report à septembre laisserait cette visite sans audit préalable.",
        "5. Décision demandée avant le 25 avril. Je ne me déplacerai pas à Goma avant celle-ci.",
      ],
    },
    result: "Livrable 2 terminé : une note qui déclare, qualifie, propose, justifie et demande une décision, en une demi-page.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 3, la lettre de mission finale (une page)',
    scenario: "Livrable 3 : le comité retient l'option « maintien avec supervision renforcée ». Vous complétez lettre-de-mission-audit-interne.docx en intégrant explicitement la déclaration d'indépendance et la mesure de mitigation. Voici la lettre telle que signée, section par section.",
    steps: [
      {
        title: 'Raisonnement — Une lettre cohérente avec toutes les autres pièces',
        body: "Les sections 4 et 5 reprennent mot pour mot la décision du comité ; les sections 2 et 3 reprennent le cadrage validé ; la section 6 fixe la clôture. Tout auditeur externe pourra relier les pièces entre elles.",
      },
    ],
    table: {
      columns: ['Section du template', 'Contenu saisi'],
      rows: [
        ['1. Émetteur et destinataire', "Comité d'audit du CA de HSGL (Hélène V., Présidente) → base de Goma, Nord-Kivu ; émise le 05/05/2026"],
        ['2. Objectifs', "(A) seuil 5 000 USD Fonds Meridian ; (A) appels d'offres > 10 000 USD ; (A) séparation des tâches ; (A) traçabilité du carburant ; (C) grille de seuils et classement des pièces"],
        ['3. Périmètre', "Cycle achats-logistique, de la demande au paiement, carburant et magasin inclus ; exclusions : paie, trésorerie hors fournisseurs, activités médicales, locations ponctuelles ; période du 01/10/2025 au 31/03/2026"],
        ['4. Auditeurs', 'Amani K. (responsable) ; Fatou S., auditrice senior (supervision renforcée)'],
        ["5. Déclaration d'indépendance", "Conflit déclaré (ancien Log Manager de Goma, seuils validés en 2024, trois membres recrutés ou supervisés) ; mitigation par décision du comité du 24/04/2026 : tests des seuils, entretiens concernés et revue des conclusions par Fatou S."],
        ['6. Livrables et échéances', 'Programme de travail 15/05 ; clôture 29/05 ; rapport provisoire 12/06 ; réponses 19/06 ; rapport définitif et note de conseil 26/06'],
        ['7. Validation du mandat', 'Signée par Amani K. le 05/05/2026 et par Hélène V. le 07/05/2026'],
      ],
    },
    result: "Livrable 3 terminé : une lettre d'une page, signée avant tout entretien, dont chaque section est cohérente avec la note et la décision du comité.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — le dossier de mission complet, de l\'assignation aux tests',
    scenario: "Au-delà de l'exercice noté, voici la chronologie complète du démarrage de la mission de Goma et la pièce produite à chaque étape. C'est le modèle de dossier que vous reproduirez pour chaque mission.",
    steps: [
      {
        title: 'Lecture de la chronologie',
        body: "Notez qu'aucun entretien de collecte n'a lieu avant le 7 mai (signature de la lettre) et qu'aucun déplacement n'a lieu avant le 24 avril (décision sur l'indépendance).",
      },
    ],
    table: {
      columns: ['Date', 'Étape', 'Pièce produite', 'Dossier'],
      rows: [
        ['20/04', 'Assignation par le comité', 'Courriel d\'assignation', '01_Cadrage'],
        ['21-22/04', 'Auto-évaluation et déclaration', 'Auto-évaluation, note au comité', '00_Indépendance'],
        ['24/04', 'Décision du comité', 'Décision écrite', '00_Indépendance'],
        ['27-30/04', 'Cadrage par les risques', 'Analyse Excel, cotation, cadrage validé, réponse aux demandes annexes', '01_Cadrage'],
        ['05-07/05', 'Lettre de mission', 'Lettre signée et diffusée', '02_Lettre_de_mission'],
        ['18/05', "Réunion d'ouverture", 'Compte rendu', '03_Terrain'],
        ['19-20/05', 'Diagnostic COSO', 'Grille notée, synthèse, priorités', '03_Terrain'],
        ['20/05', 'Planification', 'Liste D7-D12, planning, courriel ; note de pression', '03_Terrain / 00_Indépendance'],
        ['21-28/05', 'Tests détaillés', 'Feuilles de travail (modules suivants)', '04_Tests'],
      ],
    },
    result: "Un dossier de mission de neuf étapes, dans lequel chaque pièce est datée et justifie la suivante.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Votre mission de Bukavu : indépendance, note et lettre',
    instructions: "Le comité d'audit de HSGL vous confie l'audit du cycle trésorerie (caisse et banque) de la base de Bukavu, période du 1er janvier au 30 juin 2026. Faits : (a) il y a deux ans, comme consultant(e), vous avez rédigé le manuel de procédures de caisse toujours en vigueur à Bukavu ; (b) le Finance Manager de Bukavu, Pascal R., est votre beau-frère ; (c) lors d'un comité de direction l'an dernier, vous avez publiquement défendu l'équipe finance de Bukavu contre une réduction d'effectifs ; (d) le Directeur Pays vous écrit : « J'ai besoin d'un rapport rassurant avant la visite du bailleur en octobre. » Fatou S. est disponible en septembre ; un auditeur externe peut être mobilisé sous 3 semaines.",
    steps: [
      {
        title: 'Remplissez votre auto-évaluation (procédure 1, étape 1)',
        actions: ['Répondez aux six questions Q1 à Q6 avec faits et dates.'],
      },
      {
        title: 'Construisez le tableau lien → menace → zone → gravité (étape 2)',
        actions: ["Rédigez 2-3 phrases par menace sur l'effet qu'elle aurait sur vos conclusions."],
      },
      {
        title: 'Comparez les trois options de mitigation (étape 3)',
        actions: ['Appliquez la règle : une menace forte exclut le simple maintien avec supervision.'],
      },
      {
        title: 'Rédigez la note de déclaration d\'une demi-page (étape 4)',
      },
      {
        title: "Qualifiez le message du Directeur Pays (procédure 9) et rédigez la note au dossier",
      },
      {
        title: "Remplissez les sections 1 à 7 de lettre-de-mission-audit-interne.docx pour l'option que le comité retiendrait selon vous",
      },
    ],
    tip: "Indice : le lien familial avec le Finance Manager est une menace de familiarité forte, qui touche le cœur du cycle trésorerie. Contrairement à Goma, la bonne réponse n'est pas le maintien avec supervision.",
    deliverable: "Un dossier de quatre pièces : auto-évaluation et tableau des menaces, note de déclaration (½ page), note au dossier sur la pression du Directeur Pays, lettre de mission (1 page) remplie pour l'option retenue.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Noter la grille COSO de Bukavu',
    instructions: "Voici les éléments probants recueillis par l'auditeur qui a finalement mené la mission de Bukavu. Notez chaque sous-critère dans grille-evaluation-composantes-coso.xlsx avec l'échelle définie (procédure 7, étape 3), rédigez la colonne D, puis identifiez les priorités de tests.",
    table: {
      columns: ['Ligne', 'Élément probant recueilli'],
      rows: [
        ['6', 'Code de conduite signé par 41 employés sur 44 ; présenté à chaque arrivée'],
        ['7', 'Organigramme à jour ; le caissier saisit aussi les écritures de caisse dans le logiciel comptable'],
        ['8', 'Évaluations annuelles faites pour 90 % du personnel ; procédure disciplinaire appliquée deux fois et documentée'],
        ['9', 'Registre des risques mis à jour en mars 2026, validé en comité de base'],
        ['10', 'Aucune analyse des risques de fraude sur la caisse ; plafond de caisse non défini'],
        ['11', 'Passage au paiement mobile des primes en avril 2026 sans analyse des risques'],
        ['12', 'Double signature bancaire au-delà de 2 000 USD respectée sur les 15 paiements testés'],
        ['13', 'Le caissier tient la caisse et saisit les écritures ; le Finance Manager valide seul les décaissements'],
        ['14', 'Comptages de caisse prévus chaque mois, réalisés seulement en janvier et mars, signés par une seule personne'],
        ['15', 'Logiciel comptable à jour ; mots de passe partagés entre caissier et comptable'],
        ['16', 'Canal de signalement affiché et connu de 7 employés sur 8 interrogés ; 2 signalements traités en 2025'],
        ['17', 'Revue mensuelle de la caisse par le Coordinateur, documentée'],
        ['18', "Plan d'action de l'audit 2025 suivi trimestriellement ; 6 recommandations sur 8 clôturées"],
      ],
    },
    steps: [
      { title: 'Notez les 13 lignes (colonne C) avec la définition de chaque niveau' },
      { title: 'Rédigez chaque observation (colonne D) au format fait + chiffre + source' },
      { title: 'Recalculez à la main deux moyennes et le score global' },
      { title: "Construisez le tableau des priorités de tests (procédure 7, étape 6)" },
    ],
    tip: "Corrigé indicatif pour vous auto-évaluer : Évaluation des risques et Activités de contrôle doivent ressortir sous 3/5, Information & communication et Pilotage à 3,5 ou plus. Si votre résultat diffère d'un point ou plus, relisez vos définitions de niveaux.",
    deliverable: "La grille COSO de Bukavu notée et commentée, l'onglet Synthèse à jour et un tableau de priorités de tests d'une demi-page.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Audit interne ou pas ? Qualifier six situations',
    instructions: "Pour chaque situation, appliquez le test des trois critères cumulatifs (procédure 2) et concluez : audit interne (assurance ou conseil), contrôle de gestion ou suivi de 2e ligne, supervision hiérarchique. Justifiez en une phrase.",
    table: {
      columns: ['N°', 'Situation'],
      rows: [
        ['1', 'La Finance Manager analyse chaque mois les écarts budget / réalisé de la base et les commente au Coordinateur.'],
        ['2', 'Le Coordinateur de base signe chaque bon de commande de plus de 1 000 USD.'],
        ['3', "Le comité d'audit mandate une revue ponctuelle de la paie de la base de Bunia, avec lettre de mission signée."],
        ['4', "La Directrice des opérations demande à l'auditeur interne d'aider à concevoir la procédure de gestion du nouvel entrepôt avant sa mise en service."],
        ['5', 'Le responsable conformité vérifie chaque mois que les fournisseurs ne figurent pas sur les listes de sanctions.'],
        ['6', 'Un Field Coordinator réalise un « audit surprise » de la caisse de son propre bureau.'],
      ],
    },
    steps: [
      { title: 'Remplissez un tableau Situation / C1 / C2 / C3 / Qualification / Justification' },
      { title: "Pour la situation 4, indiquez la précaution à prendre pour un futur audit d'assurance de l'entrepôt" },
    ],
    pitfall: "Situation 6 : le mot « audit » ne fait pas l'audit. Un responsable qui vérifie son propre bureau exerce sa supervision, aussi rigoureuse soit-elle.",
    deliverable: "Un tableau de six lignes qualifiées et justifiées, plus la précaution d'indépendance pour la situation 4.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre auto-évaluation répond aux six questions, et chaque « oui » est accompagné d'un fait daté.",
      "Chaque menace (auto-révision, familiarité, plaidoyer) est rattachée à un fait, à une zone du périmètre et à une gravité.",
      "Pour Bukavu, vous avez écarté le maintien avec supervision en raison du lien familial, et proposé un pair ou un auditeur externe.",
      "Votre note de déclaration tient en une demi-page, contient en clair « conflit d'intérêt », propose une option et demande une décision écrite datée.",
      "Votre note au dossier sur la pression cite les propos exacts, sans interprétation.",
      "Votre lettre de mission tient sur une page, ses sept sections sont remplies, et la section 5 est cohérente avec la note.",
      "Chaque objectif commence par un verbe vérifiable et porte la mention assurance ou conseil ; les exclusions sont écrites.",
      "Chaque note de la grille COSO a son observation en colonne D (fait + chiffre + source), et vous avez recalculé deux moyennes à la main.",
      "Votre tableau de priorités part des lignes notées 1 ou 2, pas seulement des moyennes.",
      "Dans l'exercice 3, les situations 3 et 4 sont les seules qualifiées d'audit interne, et vous avez prévu une précaution d'auto-révision pour la situation 4.",
    ],
  },

  // ───────────────────────── 8. Erreurs fréquentes ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Confondre audit interne et contrôle de gestion ou supervision hiérarchique — un Field Coordinator qui valide les dépenses de son équipe exerce son rôle de manager. Parade : appliquez le test des trois critères (procédure 2) à chaque demande et refusez par écrit les actes de gestion.",
      "Accepter une mission où l'indépendance est compromise sans le signaler — un conflit découvert plus tard par un bailleur détruit la crédibilité du rapport, parfois de toute la fonction. Parade : auto-évaluation écrite et note au comité avant tout déplacement (procédure 1).",
      "Auditer sans lettre de mission validée — aucun mandat opposable si votre légitimité est contestée. Parade : lettre signée par le commanditaire avant le premier entretien, même « informel » (procédure 5).",
      "Se laisser dicter les conclusions avant la fin des tests — céder, même implicitement, détruit votre valeur professionnelle. Parade : ne rien promettre, documenter dans une note au dossier, escalader si cela persiste (procédure 9).",
      "Traiter l'audité comme un suspect — un ton accusateur ferme l'accès à l'information la plus utile. Parade : réunion d'ouverture centrée sur « failles de système, pas coupables » et déclaration spontanée de vos liens (procédure 6).",
      "Scoper trop large (« toute la base ») — l'effort se dilue et rien n'est actionnable. Parade : cotation impact × probabilité et exclusions écrites (procédure 4).",
      "Noter la grille COSO à l'impression ou laisser les scores de l'exemple — le diagnostic devient indéfendable. Parade : une preuve référencée par ligne, une échelle écrite (procédure 7).",
      "Demander les documents au fil de l'eau — la moitié du temps sur site part en attente. Parade : liste priorisée avec heures limites, envoyée la veille (procédure 8).",
    ],
  },

  // ───────────────────────── 9. Réalisations + check-list ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez produit une auto-évaluation d'indépendance, un tableau des menaces et une note de déclaration au comité d'audit, avec l'option de mitigation retenue et la décision écrite archivée.",
      "Vous avez qualifié par écrit les demandes annexes reçues et refusé les actes de gestion sans abîmer la relation.",
      "Vous avez contrôlé la charte d'audit sur ses huit mentions essentielles, vérifié votre rattachement réel et constitué votre kit de légitimité.",
      "Vous avez analysé une extraction de 412 bons de commande dans Excel (tranches, bailleurs, cumul de fonctions), coté six zones de risque et rédigé objectifs, périmètre, exclusions et budget-temps.",
      "Vous avez rempli et fait signer une lettre de mission d'une page, section par section, cohérente avec la décision sur l'indépendance.",
      "Vous avez conduit une réunion d'ouverture et diffusé son compte rendu le jour même, avec des engagements datés.",
      "Vous avez noté et commenté une grille COSO de 13 sous-critères, lu sa synthèse (2,57/5, trois composantes sous le seuil) et traduit le diagnostic en priorités de tests.",
      "Vous avez construit une liste de documents et un planning d'entretiens priorisés, et tracé une pression sur vos conclusions dans une note au dossier.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer, avec mes propres mots, la différence entre une mission d'assurance et une mission de conseil en audit interne.",
      "Je peux citer les deux grandes familles de Standards IIA (qualification et fonctionnement) et donner un exemple concret pour chacune.",
      "Je sais nommer les 5 composantes COSO et donner un exemple ONG concret pour chacune, sans les confondre.",
      "Je sais identifier les trois menaces classiques à l'indépendance (auto-révision, familiarité, plaidoyer) dans une situation réelle, et proposer une mitigation adaptée à leur gravité.",
      "Je sais rédiger une lettre de mission complète avant tout déplacement terrain, avec le template fourni.",
      "J'ai complété une grille d'auto-évaluation des composantes COSO sur un périmètre simulé (Goma ou Bukavu).",
      "Je sais distinguer, dans une situation ambiguë, ce qui relève de l'audit interne et ce qui relève du contrôle de gestion ou de la supervision hiérarchique.",
      "J'ai rangé mes pièces dans un dossier de mission structuré (00_Indépendance, 01_Cadrage, 02_Lettre_de_mission, 03_Terrain).",
    ],
  },

  // ───────────────────────── 10. Clôture ─────────────────────────
  {
    type: 'closing',
    nextModuleHint: "Module 02 — Contrôles Internes : Séparation des Tâches & Matrices d'Autorisation. Vous avez repéré à Goma 37 commandes où la même personne demande et réceptionne : le module suivant vous apprend à concevoir la séparation des tâches et la matrice d'autorisation qui corrigent ce type de faille.",
  },
]
