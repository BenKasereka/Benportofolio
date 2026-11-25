// Module 06 — Préparation & Réussite des Audits Financiers
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (checklist-preparation-dossier-audit.xlsx, plan-action-correctif-recommandations-audit.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (audit de projet du bureau de Goma de l'ONG fictive « Kivu Avenir
// Solidarité », la même organisation que dans les modules 01 et 02), avec
// exemples remplis, résultat attendu, astuces et erreurs à éviter.
// Les organisations, cabinets d'audit, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Préparation & Réussite des Audits Financiers',
    hook: "Un audit ne sanctionne pas l'absence d'erreurs — aucune organisation n'y échappe. Il juge votre capacité à détecter vos propres erreurs, à les documenter et à les corriger. À la fin de ce module, vous aurez en main une checklist de dossier d'audit à jour avec son tableau de bord, un dossier partagé organisé, un registre des demandes de l'auditeur et un plan d'action correctif complet — constat, cause racine, action, responsable, échéance, preuve de clôture — prêt à être transmis au bailleur sous 5 jours ouvrés.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Expliquer ce qu'un auditeur externe cherche réellement et reconnaître le type de mission annoncée (statutaire, projet/bailleur, Single Audit, spot-check), en produisant une fiche de cadrage de mission : périmètre, période, rubriques, référentiel, calendrier.",
      "Constituer et maintenir à jour, à chaque clôture mensuelle, le dossier d'audit complet, en renseignant la checklist-preparation-dossier-audit.xlsx (statut, responsable, emplacement, dernière vérification), en lisant son Tableau de bord et en rangeant les pièces dans un dossier partagé organisé par catégorie.",
      "Préparer une mission annoncée en six semaines — obtenir le scope et les termes de référence, consolider le dossier, traiter les documents manquants, briefer l'équipe — en produisant un dossier miroir de mission et une feuille de briefing signée.",
      "Répondre à toute question ou demande d'un auditeur de façon professionnelle, sans improviser ni sur-expliquer, en tenant un registre des demandes et des documents transmis.",
      "Rédiger un plan d'action correctif rigoureux avec le template plan-action-correctif-recommandations-audit.docx : constat, cause racine, action vérifiable, responsable nommé, échéance datée, preuve de clôture.",
      "Distinguer un finding mineur d'un finding qui doit remonter immédiatement à la coordination pays et au siège, en produisant une grille de priorisation chiffrée et une alerte écrite.",
      "Suivre chaque action jusqu'à sa preuve documentée par une revue mensuelle, en produisant un dossier de preuves de clôture prêt pour l'audit suivant.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un exposé sur l'audit : c'est un atelier. Chaque procédure se termine par un livrable concret que vous construirez sur un seul cas fil rouge, de la première ligne de la checklist jusqu'à la preuve de clôture de la dernière action corrective.",
      "Le cas fil rouge : vous êtes Finance Officer de « Kivu Avenir Solidarité » (KAS), l'ONG fictive des modules 01 et 02. Le 31 juillet 2026, en clôturant le mois de juillet, Grace M., Finance Manager, vous demande d'installer enfin la checklist du dossier d'audit. Le lundi 3 août, Fondation Sigma notifie un audit de projet sur le Projet Santé Nord-Kivu : travaux sur site du 14 au 25 septembre. Vous avez six semaines.",
    ],
    bullets: [
      "Livrable 1 — La checklist du dossier d'audit de KAS (33 documents requis, 8 catégories) à jour, son Tableau de bord lu et commenté, et le dossier partagé organisé selon une nomenclature unique.",
      "Livrable 2 — Une fiche de cadrage de mission, la copie « mission » de la checklist limitée au périmètre, et un plan de traitement des documents manquants.",
      "Livrable 3 — Le dossier miroir de la mission, le registre des demandes de l'auditeur et la feuille de briefing de l'équipe.",
      "Livrable 4 — Les réponses types aux demandes de l'auditeur et une réunion de clôture préparée, avec les constats provisoires vérifiés.",
      "Livrable 5 — Le plan d'action correctif complet (plan-action-correctif-recommandations-audit.docx), 4 findings traités ligne par ligne.",
      "Livrable 6 — La grille de priorisation, l'alerte écrite à la Direction Pays et au siège, et le courriel de transmission au bailleur.",
      "Livrable 7 — Le registre de suivi mensuel du plan d'action et le dossier de preuves de clôture, relié à la checklist.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : le bureau de Goma de Kivu Avenir Solidarité face à l\'audit',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. Le Projet Santé Nord-Kivu (budget 260 000 USD sur 12 mois, financé par Fondation Sigma) est le projet audité ; il partage le bureau de Goma, le véhicule LC-03 et des agents avec les projets Nutrition (Fonds Horizon) et WASH (Agence Delta). Tous les noms, cabinets et montants sont fictifs.",
    table: {
      columns: ['Élément', 'Fiche du cas'],
      rows: [
        ['Organisation', 'KAS — bureau de Goma et base avancée de Rutshuru (caisse d\'avances), exercice janvier–décembre 2026'],
        ['Audit annoncé', 'Audit de projet Santé Nord-Kivu, mandaté par Fondation Sigma, réalisé par le cabinet fictif « Mont-Goma Audit » ; période auditée : 1er janvier – 30 juin 2026'],
        ['Calendrier', 'Notification le lun. 3 août — travaux sur site du lun. 14 au ven. 25 septembre — rapport final reçu le lun. 12 octobre'],
        ['Équipe KAS', 'Grace M. (Finance Manager), vous (Finance Officer), Esther N. (caissière Goma), Patrick K. (logisticien), Joël B. (coordinateur WASH), Théodore W. (Directeur Pays)'],
        ['Côté auditeur', 'Rachel O., cheffe de mission, et deux auditeurs juniors'],
      ],
    },
    example: {
      title: "L'audit précédent (exercice 2025) : ce qu'il a laissé",
      lines: [
        "Trois semaines de reconstitution de pièces en urgence, avant l'arrivée de l'auditeur.",
        "Management letter 2025 : 4 recommandations — R1 rapprochements bancaires signés sous 10 jours, R2 seuil de mise en concurrence abaissé à 2 500 USD, R3 inventaire physique annuel des immobilisations, R4 délégations de signature formalisées.",
        "R3 a été déclarée « close » en décembre sans aucune preuve : ce point reviendra dans le cas complet.",
      ],
    },
    pitfall: "Ne croyez pas que le dossier se prépare « quand on saura la date ». À KAS, la première checklist n'est ouverte que le 31 juillet : vous allez mesurer concrètement ce que coûte un dossier non tenu en continu — et comment limiter les dégâts en six semaines.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: "Ce qu'un auditeur externe cherche réellement",
    body: [
      "La première chose à désapprendre est l'idée que l'auditeur est venu vous piéger. Il vient se former une opinion défendable sur deux choses : vos états financiers reflètent-ils fidèlement la réalité de vos opérations, et vos procédures ont-elles été respectées avec une constance suffisante pour qu'on puisse faire confiance aux chiffres qu'elles produisent.",
      "Un auditeur qui trouve une pièce manquante ne cherche pas à humilier qui que ce soit : il cherche à savoir si c'est un incident isolé ou le symptôme d'un contrôle interne qui ne tient pas. Sa question suivante est presque toujours : « Ce cas est-il unique, ou dois-je élargir mon échantillon ? »",
    ],
    example: {
      title: "Les 4 questions que se pose l'auditeur — et la preuve qui y répond",
      lines: [
        "1. Les chiffres sont-ils fidèles ? → grand livre, rapprochements bancaires signés, états financiers cohérents avec les rapports bailleur.",
        "2. Les règles ont-elles été suivies ? → politique d'achats, seuils de délégation, règles d'éligibilité de l'accord de subvention.",
        "3. Est-ce un incident isolé ou un défaut de contrôle ? → il tire un échantillon plus large dès le deuxième cas semblable.",
        "4. L'organisation corrige-t-elle ses erreurs ? → journal des corrections, plan d'action de l'audit précédent et preuves de clôture.",
      ],
    },
    highlight: "Un audit ne juge pas votre organisation sur l'absence totale d'erreurs, mais sur sa capacité à détecter ses propres erreurs, à les documenter, et à les corriger avant qu'elles ne deviennent systémiques. La correction documentée pèse le plus lourd dans l'opinion finale.",
  },
  {
    type: 'concept',
    title: "Le déroulé d'une mission d'audit en quatre temps",
    body: "Connaître les quatre phases vous dit à quel moment agir. Les erreurs coûteuses se font presque toujours en phase 1 (périmètre mal compris) et en phase 4 (plan d'action sans preuve).",
    table: {
      columns: ['Phase', "Ce que fait l'auditeur", 'Ce que vous faites', 'Cas KAS'],
      rows: [
        ['1. Planification', 'Fixe le scope, l\'échantillon, le calendrier ; envoie sa liste de documents', 'Obtenir le scope écrit, cartographier la checklist, consolider', '3 août – 11 sept.'],
        ['2. Travaux sur site', 'Teste l\'échantillon : pièces, entretiens, comptage de caisse, inventaire', 'Répondre selon la méthode fixe, tenir le registre des demandes', '14 – 25 sept.'],
        ['3. Restitution', 'Présente ses constats provisoires en réunion de clôture', 'Vérifier les faits, demander les constats par écrit', '25 sept.'],
        ['4. Rapport et suivi', 'Émet le rapport et la management letter', 'Plan d\'action sous 5 jours ouvrés, suivi jusqu\'à preuve', '12 oct. – 30 nov.'],
      ],
    },
    tip: "Notez ces quatre dates dans l'agenda de Grace M. et le vôtre dès la notification : une mission sans calendrier partagé finit toujours par un directeur pays surpris la veille.",
  },
  {
    type: 'concept',
    title: 'La préparation continue bat toujours la préparation de dernière minute',
    body: [
      "Il y a deux façons de vivre un audit : apprendre la date six semaines à l'avance et lancer une course effrénée pour retrouver des factures égarées, ou ouvrir un dossier déjà à jour et transformer la mission en simple vérification.",
      "La différence ne se joue jamais pendant les six semaines de préparation : elle se joue pendant les onze mois qui précèdent. Le dossier d'audit se construit comme un sous-produit d'une comptabilité bien tenue, mois après mois.",
    ],
    example: {
      title: 'Coût comparé pour KAS (estimations fictives mais réalistes)',
      lines: [
        "Rapprochement bancaire signé à chaque clôture : 2 h × 6 mois = 12 heures, étalées sur le semestre.",
        "Les mêmes six rapprochements reconstitués en urgence : relevés à redemander à la banque, écarts à retrouver = 6 × 6 h = 36 heures concentrées en une semaine.",
        "Autres reconstitutions typiques : feuilles de temps, comparatifs de prix, procès-verbaux de comptage : 3 à 5 jours de travail d'équipe, et un risque de pièce « établie après coup ».",
      ],
    },
    highlight: "Le dossier d'audit n'est pas un livrable, c'est un état permanent. Un Finance Manager senior se demande « sommes-nous prêts ? » à chaque clôture mensuelle, pas seulement quand l'auditeur annonce sa venue.",
  },
  {
    type: 'comparison-table',
    title: "Les catégories d'audit que vous rencontrerez",
    columns: ["Type d'audit", 'Qui le déclenche', 'Ce qu\'il vérifie', 'Votre préparation prioritaire'],
    rows: [
      ['Audit financier annuel (statutaire)', "Obligation légale du pays d'enregistrement, ou politique interne", 'Sincérité des états financiers globaux, sur tout l\'exercice', 'Catégories 1, 4, 5, 7 : grand livre, rapprochements, immobilisations, gouvernance'],
      ['Audit de projet / bailleur', "Le bailleur (USAID, ECHO, agences ONU…), prévu dans l'accord", "Conformité aux règles du bailleur, éligibilité des coûts, budget approuvé", 'Catégories 2, 3, 6 sur le périmètre du projet : achats, temps de travail, accord et budget'],
      ['Single Audit (type USAID / 2 CFR 200)', 'Obligation fédérale américaine au-delà d\'un seuil de financement cumulé', 'Contrôle interne global de l\'organisation, pas un projet isolé', 'Toute la checklist ; si vous n\'êtes pas une entité américaine, lisez la clause « audit » de votre accord'],
      ['Audit interne / spot-check', 'Votre siège, ou le bailleur en cours de projet', 'Point précis (caisse, procurement, paie), sans opinion globale', 'La catégorie visée, prête en 48 heures'],
    ],
  },
  {
    type: 'concept',
    title: 'Lire le référentiel du bailleur avant de préparer quoi que ce soit',
    body: "Un audit mandaté par un bailleur ne cherche pas les mêmes preuves qu'un audit statutaire local. Le référentiel applicable définit ce que l'auditeur va vérifier : le connaître vous évite de préparer un dossier standard quand le bailleur attend des pièces spécifiques.",
    table: {
      columns: ['Référentiel', 'S\'applique à', 'Exemple de point vérifié'],
      rows: [
        ['2 CFR 200 (Uniform Guidance)', 'Financements fédéraux américains (USAID)', 'Éligibilité des coûts, mise en concurrence, preuves de suivi du temps de travail'],
        ['PRAG (guide pratique des procédures de l\'action extérieure de l\'UE)', 'Financements UE ; référence usuelle pour les audits ECHO', 'Règles de passation de marchés, seuils et procédures de mise en concurrence'],
        ['Convention de subvention + budget approuvé', 'Chaque bailleur, y compris Fondation Sigma', 'Lignes budgétaires, plafonds, règles propres à ce bailleur'],
        ['Procédures internes de l\'organisation', 'Tous vos projets', 'Politique d\'achats, délégations de signature, politique anti-fraude'],
      ],
    },
    tip: "Règle de terrain : le texte le plus strict s'applique. Si votre politique interne impose 3 devis à partir de 2 500 USD et que le bailleur tolère 5 000 USD, l'auditeur contrôlera sur la règle de l'accord mais notera aussi l'écart avec votre propre politique.",
  },
  {
    type: 'comparison-table',
    title: "Les 8 catégories du dossier d'audit (1/2) — ce que l'auditeur y cherche",
    columns: ['Catégorie de la checklist', 'Documents clés', "Ce que l'auditeur y vérifie"],
    rows: [
      ['1. Comptabilité générale', 'Grand livre, journaux de banque et de caisse, rapprochements bancaires signés, plan comptable, écritures de clôture', 'Que les chiffres sont complets, cohérents et rapprochés de la banque chaque mois'],
      ['2. Achats et procurement', 'Dossier d\'achat complet, politique et seuils, registre fournisseurs, preuves de mise en concurrence, contrats', 'Que chaque achat suit la chaîne demande → comparatif → bon de commande → livraison → facture'],
      ['3. Ressources humaines et paie', 'Contrats, feuilles de temps signées, registres de paie, preuves de charges sociales, délégations de signature', 'Que les salaires imputés au projet correspondent à du temps réellement travaillé et documenté'],
      ['4. Trésorerie et caisses', 'Livres de caisse, comptages physiques signés, avances et clôtures, signataires bancaires', 'Que l\'argent liquide est compté, rapproché et sous la responsabilité d\'une personne identifiée'],
    ],
  },
  {
    type: 'comparison-table',
    title: "Les 8 catégories du dossier d'audit (2/2) — ce que l'auditeur y cherche",
    columns: ['Catégorie de la checklist', 'Documents clés', "Ce que l'auditeur y vérifie"],
    rows: [
      ['5. Immobilisations', 'Registre à jour, preuves d\'inventaire physique annuel, politique de cession/donation', 'Que chaque bien acheté sur fonds bailleur existe, est étiqueté et localisé'],
      ['6. Accords bailleurs et budgets', 'Accords et avenants signés, budgets approuvés et révisés, rapports financiers soumis (BFU), correspondance officielle', 'Que les dépenses restent dans le cadre signé et que les écarts ont été validés par écrit'],
      ['7. Gouvernance et conformité', 'Statuts, procès-verbaux, politique anti-fraude, registre des conflits d\'intérêts', 'Que l\'organisation est légalement constituée et dotée d\'un cadre de contrôle'],
      ['8. Suivi des audits précédents', 'Rapport et management letter N-1, plan d\'action précédent avec preuves de clôture, correspondance avec l\'auditeur', 'Que les recommandations passées ont été réellement traitées — pas seulement déclarées closes'],
    ],
  },
  {
    type: 'concept',
    title: "La piste d'audit : retracer une transaction de bout en bout",
    body: "La piste d'audit est la capacité à retracer, document par document, le chemin d'une transaction depuis son engagement jusqu'à son enregistrement comptable final. L'auditeur tire une opération au hasard et demande : « Montrez-moi tout. » Si un seul maillon manque, la chaîne est rompue.",
    example: {
      title: 'La chaîne complète d\'un achat — dossier ACH-2026-009 de KAS (réactifs de dépistage, 3 450 USD)',
      lines: [
        "1. Demande d'achat DA-2026-031 (Santé, 10/03), signée du demandeur et de son responsable.",
        "2. Comparatif de trois devis et bon de commande BC-2026-044 (approuvé selon le seuil de délégation).",
        "3. Bon de livraison BL-0418 signé du magasinier, et bon de réception.",
        "4. Facture FOU-2026-118, rapprochée du BC et du BL avant paiement.",
        "5. Ordre de virement signé par deux signataires bancaires, puis ligne du relevé de banque.",
        "6. Écriture comptable (compte, projet, bailleur, rubrique) et n° de pièce — module 01.",
        "7. Ligne correspondante dans le rapport financier du bailleur.",
      ],
    },
    tip: "Test à faire chaque trimestre : tirez 3 opérations au hasard et chronométrez la reconstitution complète. Objectif : moins de 15 minutes par opération.",
  },
  {
    type: 'concept',
    title: 'La séparation des tâches : une personne ne fait jamais tout seule',
    body: "Le principe : une même personne ne doit jamais cumuler deux rôles clés d'une même transaction, par exemple demander ET approuver un achat. C'est le premier contrôle que l'auditeur teste, parce que sa rupture est le terrain classique de la fraude comme de l'erreur non détectée.",
    table: {
      columns: ['Rôle dans la transaction', 'Qui (KAS)', 'Ne peut pas être aussi'],
      rows: [
        ['Demander l\'achat', 'Le chef de projet ou son délégué', 'Celui qui approuve ni celui qui paie'],
        ['Approuver la dépense', 'Le responsable habilité selon le seuil de délégation', 'Le demandeur'],
        ['Réceptionner les biens', 'Le magasinier', 'Celui qui commande ni celui qui paie'],
        ['Payer / signer le paiement', 'Les signataires bancaires, la caissière pour les petits montants', 'Celui qui a demandé ou réceptionné'],
        ['Enregistrer en comptabilité', 'Le Finance Officer', 'Celui qui a approuvé ou payé'],
      ],
    },
    pitfall: "L'absence d'un responsable sans délégation écrite est la cause numéro un de rupture : le collègue « approuve pour dépanner » et la séparation tombe. Une délégation de signature se rédige AVANT l'absence, avec dates et plafond.",
  },
  {
    type: 'concept',
    title: "Les findings : trois niveaux de sévérité et la réaction attendue",
    body: "Un finding est une observation formelle de l'auditeur, consignée dans le rapport ou dans la management letter. Les cabinets utilisent généralement trois niveaux ; le vocabulaire varie, la logique reste la même.",
    table: {
      columns: ['Niveau', 'Ce que cela signifie', 'Votre réaction'],
      rows: [
        ['Mineur', 'Écart isolé, sans effet sur les chiffres, cause simple', 'Corriger, documenter, intégrer au plan d\'action et à la revue mensuelle'],
        ['Significatif', 'Faiblesse de contrôle ou montant contestable pouvant affecter l\'éligibilité', 'Plan d\'action détaillé, responsable nommé, information de la Direction Pays'],
        ['Majeur', 'Défaillance systémique, indice de fraude, risque de réserve ou de remboursement', 'Escalade immédiate à la Direction Pays et au siège, avant même le plan d\'action'],
      ],
    },
    tip: "Le niveau écrit par l'auditeur n'est pas votre seule grille : un finding classé « mineur » mais répété d'une année sur l'autre doit remonter. Nous construisons cette grille en procédure 5.",
  },
  {
    type: 'comparison-table',
    title: "L'opinion de l'auditeur : ce que vous pouvez lire à la fin du rapport",
    columns: ['Opinion', 'Signification', 'Conséquence pratique pour le bureau'],
    rows: [
      ['Sans réserve (favorable)', 'Les états ou dépenses auditées sont fidèles, aucune anomalie significative non corrigée', 'Rapport transmis au bailleur ; plan d\'action sur les recommandations de contrôle interne'],
      ['Avec réserve', 'Fidèles, sauf sur un point précis (montant ou périmètre)', 'Le bailleur peut contester le point ; dépenses « inéligibles » possibles et demande de remboursement'],
      ['Défavorable', 'Les états ne sont pas fidèles de façon significative', 'Risque de gel de financements ; escalade immédiate au siège'],
      ['Impossibilité d\'exprimer une opinion', 'L\'auditeur n\'a pas pu obtenir assez de preuves', 'Dossier incomplet : situation à éviter par une préparation continue'],
    ],
  },
  {
    type: 'comparison-table',
    title: "Les 4 éléments d'un plan d'action correctif solide : faible contre solide",
    columns: ['Élément', 'Formulation faible', 'Formulation solide'],
    rows: [
      ['Constat et cause racine', '« Erreur humaine » ; reformulation du finding', '« Le seuil de 2 500 USD adopté en janvier n\'a pas été communiqué à la logistique ; aucun contrôle avant paiement »'],
      ['Action concrète', '« Sensibiliser l\'équipe »', '« Intégrer une checklist de dossier d\'achat obligatoire avant tout paiement »'],
      ['Responsable nommé', '« L\'équipe finance », « le bureau »', '« Patrick K., logisticien »'],
      ['Délai et preuve', '« Prochainement », « au plus vite » ; case cochée', '« 13 novembre 2026 » ; checklist signée classée dans le dossier'],
    ],
  },
  {
    type: 'checklist',
    title: "Les 4 éléments d'un plan d'action correctif solide",
    items: [
      "Un constat précis — la cause racine réellement comprise après investigation, pas une reformulation vague du finding de l'auditeur.",
      "Une action concrète — ce qui va réellement changer (« mettre en place une checklist de réception obligatoire »), jamais « sensibiliser l'équipe ».",
      "Un responsable nommé — une personne identifiée par son nom et sa fonction, jamais « l'équipe finance » ou « le bureau ».",
      "Un délai vérifiable et une preuve de clôture — une date précise, et un document qui prouvera que l'action a réellement eu lieu.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '5 jours ouvrés',
    caption: "Délai recommandé pour transmettre un plan d'action correctif après réception du rapport",
    context: "Même incomplet sur certains points encore en investigation, un plan transmis rapidement est toujours mieux perçu qu'un silence de plusieurs semaines. Pour KAS : rapport reçu le lundi 12 octobre 2026 → plan envoyé au plus tard le lundi 19 octobre.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: "Finding (constat d'audit)", definition: "Observation formelle de l'auditeur, classée par niveau de sévérité (mineur, significatif, majeur), consignée dans le rapport ou la management letter." },
      { term: 'Management letter', definition: "Document distinct du rapport d'audit, où l'auditeur détaille ses recommandations sur le contrôle interne ; il appelle directement un plan d'action correctif." },
      { term: "Scope de l'audit", definition: "Périmètre exact de la mission : projet(s), période, rubriques budgétaires. À demander systématiquement avant de préparer un dossier." },
      { term: 'Termes de référence', definition: "Document qui précise l'objet, les règles, le calendrier et les livrables de la mission d'audit." },
      { term: "Piste d'audit (audit trail)", definition: "Capacité à retracer, document par document, une transaction de son engagement à son enregistrement comptable final." },
      { term: 'Séparation des tâches', definition: "Principe selon lequel une même personne ne cumule jamais deux rôles clés d'une même transaction (demander et approuver, par exemple)." },
      { term: 'Échantillon', definition: "Sélection de transactions testées par l'auditeur ; il l'élargit dès qu'il trouve un écart qui pourrait être systémique." },
      { term: 'Cause racine', definition: "Raison profonde qui explique pourquoi l'écart s'est produit ; la corriger évite qu'il revienne." },
      { term: 'Dépenses inéligibles (coûts contestés)', definition: "Dépenses que le bailleur peut refuser de financer, avec demande de remboursement possible, faute de preuve suffisante ou de conformité aux règles." },
      { term: "Lettre d'affirmation", definition: "Déclaration écrite de la direction à l'auditeur, en fin de mission, confirmant avoir fourni toutes les informations ; signée par le Directeur Pays." },
      { term: 'Finding répété', definition: "Constat déjà formulé lors d'un audit précédent et non résolu ; il est traité plus sévèrement qu'un constat nouveau." },
      { term: 'Preuve de clôture', definition: "Document ou trace concrète qui prouve qu'une action corrective a réellement eu lieu (procédure signée, liste de présence, contrôle croisé documenté)." },
    ],
  },
  {
    type: 'concept',
    title: "Votre feuille de route : 5 procédures, de la routine mensuelle au suivi des preuves",
    body: "Les procédures suivent l'ordre réel d'une année d'audit : on tient le dossier chaque mois, on prépare dès l'annonce d'une mission, on répond pendant les travaux, on traite le rapport, puis on pilote les findings jusqu'à la preuve.",
    table: {
      columns: ['Procédure', 'Quand', 'Livrable', 'Étapes'],
      rows: [
        ['1. Tenir la checklist et le dossier partagé', 'Chaque clôture mensuelle', 'Checklist à jour + Tableau de bord + dossier rangé', '6'],
        ['2. Préparer une mission annoncée', 'Du jour 1 à la veille de la mission', 'Fiche de cadrage + dossier miroir + briefing', '6'],
        ['3. Répondre à l\'auditeur pendant la mission', 'Pendant les travaux sur site', 'Registre des demandes + réponses + clôture préparée', '6'],
        ['4. Rédiger le plan d\'action correctif', 'Dans les 5 jours ouvrés après le rapport', 'Plan d\'action complet (template .docx)', '7'],
        ['5. Prioriser, escalader et suivre jusqu\'à la preuve', 'Dès le plan, puis chaque mois', 'Grille, alerte écrite, dossier de preuves', '5'],
      ],
    },
  },

  // ─────────────── PROCÉDURE 1 — Tenir la checklist et le dossier partagé ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 6',
    title: 'Ouvrir le template et comprendre ses deux onglets',
    intro: "Le template checklist-preparation-dossier-audit.xlsx liste les documents qu'un auditeur externe demande dans 95 % des missions. Entrées nécessaires : le fichier du module et 30 minutes avec Grace M. Fil rouge : vendredi 31 juillet 2026, clôture de juillet, première ouverture de la checklist à KAS.",
    steps: [
      {
        title: "Lire l'onglet « Checklist »",
        actions: [
          "Ouvrez le classeur et enregistrez-le tout de suite sous un nom normalisé : KAS_Checklist-dossier-audit_2026.xlsx.",
          "Repérez le titre en A1 et les en-têtes en ligne 4 : A Catégorie, B Document requis, C Responsable, D Statut, E Emplacement (dossier partagé), F Dernière vérification, G Commentaire.",
          "Comptez les lignes 5 à 37 : 33 documents répartis en 8 catégories (comptabilité, achats, RH et paie, trésorerie, immobilisations, accords bailleurs, gouvernance, audits précédents).",
          "Lisez la note de la ligne 39 : la checklist se met à jour à chaque clôture mensuelle, pas seulement avant une mission.",
        ],
      },
      {
        title: "Lire l'onglet « Tableau de bord »",
        actions: [
          "Ouvrez l'onglet « Tableau de bord » : une ligne par catégorie (lignes 5 à 12) et une ligne TOTAL GENERAL (ligne 13).",
          "Repérez les six colonnes : A Catégorie, B Documents requis, C Documents disponibles, D % complet, E Documents manquants, F Statut global.",
          "Ne saisissez rien dans cet onglet : la note A2 indique que tout est calculé à partir de l'onglet « Checklist » et que les formules ne se modifient pas.",
        ],
      },
      {
        title: 'Traiter les données livrées avec le template',
        actions: [
          "Le template contient des statuts d'exemple : ils illustrent le fonctionnement. Remplacez-les un par un par la réalité de KAS (étape 4) ; ne vous fiez à aucun statut déjà présent.",
          "Gardez les 33 lignes de départ : elles sont déjà choisies pour couvrir ce que l'auditeur demande le plus souvent.",
        ],
      },
    ],
    example: {
      title: "Ligne 5 de l'onglet « Checklist » telle que le template la livre (valeurs écrites sans accent dans le fichier)",
      lines: [
        "A5 : 1. Comptabilite generale   |  B5 : Grand livre general (periode sous audit)",
        "C5 : Finance Officer   |  D5 : Disponible   |  E5 : Drive/Finance/GL",
        "F5 : 05/08/2026   |  G5 : (vide, rien à signaler)",
      ],
    },
    result: "Vous savez nommer les sept colonnes de la Checklist et les six colonnes du Tableau de bord, et vous disposez d'une copie de travail enregistrée sous un nom normalisé.",
    pitfall: "Modifier les formules du Tableau de bord ou retaper un nom de catégorie avec des accents. Les formules comptent les lignes dont la catégorie est strictement identique : un « 1. Comptabilité générale » retapé ne sera plus compté. Copiez toujours le libellé depuis une ligne existante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 6',
    title: 'Adapter les lignes et nommer un responsable par document (colonnes B et C)',
    intro: "La checklist standard ne connaît ni votre bailleur ni vos bureaux. Vous l'adaptez une seule fois, avec le Finance Manager, puis vous la faites vivre. Entrées : les 33 lignes du template, l'accord de subvention de Fondation Sigma, l'organigramme de KAS.",
    steps: [
      {
        title: 'Passer les 33 lignes en revue avec Grace M.',
        actions: [
          "Pour chaque ligne, posez la question : « Ce document existe-t-il à KAS, et qui en répond ? »",
          "Ne supprimez jamais une ligne qui ne s'applique pas : laissez-la, et passez son statut à « Non applicable » avec la raison en colonne G (étape 4).",
          "Notez les lignes propres à KAS qui manquent : l'accord de Fondation Sigma impose une clause d'audit et des règles d'éligibilité à retenir.",
        ],
      },
      {
        title: 'Ajouter une ligne sans casser le Tableau de bord',
        actions: [
          "Dans la catégorie « 6. Accords bailleurs et budgets », faites un clic droit sur le numéro de la ligne 30 > Insérer : une ligne vide apparaît au milieu du tableau.",
          "Copiez la catégorie depuis la ligne 29 (copier-coller, sans retaper) et saisissez en B : Clause d'audit et règles d'éligibilité de l'accord Fondation Sigma.",
          "Vérifiez dans le Tableau de bord que B10 (documents requis de la catégorie 6) est passé de 4 à 5 et que les plages des formules couvrent désormais $A$5:$A$38.",
        ],
      },
      {
        title: 'Nommer UN responsable par ligne (colonne C)',
        actions: [
          "Écrivez la fonction puis le nom : « Logistique (Patrick K.) », « Caissiers (Esther N.) », « Finance Manager (Grace M.) », « RH (Chantal R.) », « Direction Pays (Théodore W.) ».",
          "Un responsable répond de deux choses : le document existe, et il est à son emplacement à jour. Jamais « Finance » ou « Équipe ».",
        ],
      },
    ],
    example: {
      title: 'Extrait de la colonne C après adaptation (KAS)',
      lines: [
        "B6  Journaux de banque et de caisse ................ C6  Finance Officer (vous)",
        "B10 Dossiers d'achat complets (demande, comparatif, BC, BL, facture) ... C10 Logistique (Patrick K.)",
        "B16 Feuilles de temps signees, allocation multi-projets ... C16 RH (Chantal R.)",
        "B21 Rapprochements de caisse (comptages physiques signes) ... C21 Finance Officer (vous), Caissiers (Esther N.)",
        "B30 Clause d'audit et regles d'eligibilite de l'accord Fondation Sigma ... C30 Finance Manager (Grace M.)",
      ],
    },
    result: "Chaque ligne a un responsable nommé, la ligne propre au bailleur Fondation Sigma est ajoutée, et le Tableau de bord compte désormais 34 lignes, dont 33 documents requis une fois le « Non applicable » exclu à l'étape 4.",
    pitfall: "Ajouter la nouvelle ligne SOUS la dernière ligne du tableau. Les formules du Tableau de bord s'arrêtent à la ligne 37 : une ligne ajoutée plus bas ne serait jamais comptée. Insérez toujours AU-DESSUS de la dernière ligne ou au milieu du tableau.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 6',
    title: 'Organiser le dossier partagé et renseigner l\'emplacement (colonne E)',
    intro: "La checklist n'est que la table des matières : les pièces doivent exister à l'adresse indiquée. Chaque ligne « Disponible » doit correspondre à un document réellement rangé, avec une nomenclature cohérente. Entrées : un dossier partagé (Drive, SharePoint ou équivalent) et la liste des 8 catégories.",
    steps: [
      {
        title: "Créer l'arborescence",
        actions: [
          "À la racine du dossier partagé, créez « KAS_Dossier-Audit_2026 ».",
          "Dedans, créez huit sous-dossiers numérotés comme les catégories de la checklist (01 à 08).",
          "Dans chaque sous-dossier, créez un niveau par type de document (ex. 01_Comptabilite > Rapprochements-bancaires).",
          "Accordez le droit d'écriture aux seuls responsables de la colonne C, et la lecture à la Direction Pays.",
        ],
      },
      {
        title: 'Fixer la nomenclature des fichiers',
        actions: [
          "Appliquez un seul modèle : AAAA-MM-JJ_CODE_Reference_Nature.pdf, sans espace ni accent.",
          "Ajoutez « signe » à la nature quand le document porte les signatures exigées : sans signature, le fichier n'est pas encore une preuve.",
          "Renommez les fichiers existants et rangez-les ; scannez les pièces papier.",
        ],
      },
      {
        title: 'Renseigner la colonne E',
        actions: [
          "Saisissez le chemin exact du sous-dossier : KAS_Dossier-Audit_2026/01_Comptabilite/Rapprochements-bancaires.",
          "Ajoutez un lien hypertexte (Ctrl+K) pour atteindre le dossier d'un clic, et testez-le.",
        ],
      },
    ],
    example: {
      title: 'Arborescence et nom de fichier type (KAS)',
      lines: [
        "KAS_Dossier-Audit_2026/",
        "  01_Comptabilite/  02_Achats/  03_RH-Paie/  04_Tresorerie-Caisses/",
        "  05_Immobilisations/  06_Accords-Bailleurs/  07_Gouvernance/  08_Audits-Precedents/",
        "Fichier : 2026-06-30_RB_BQ01-USD_Rapprochement-signe.pdf  (rapprochement bancaire de juin, signé)",
        "Fichier : 2026-03-10_ACH-2026-009_BL-0418_Bon-de-livraison-signe.pdf",
      ],
    },
    result: "Les huit sous-dossiers existent, chaque ligne de la colonne E renvoie vers un dossier réel testé par clic, et les fichiers portent un nom qui dit la date, la référence et la nature.",
    tip: "Gardez le même numéro de 01 à 08 dans la checklist et dans l'arborescence : un auditeur ou un collègue retrouve le document sans vous demander où il est.",
    pitfall: "Indiquer comme emplacement un disque local, une boîte e-mail ou « chez Patrick ». Si la personne est absente le jour de la mission, le document n'existe plus pour l'auditeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 6',
    title: 'Renseigner statut, date de vérification et commentaire (colonnes D, F, G)',
    intro: "C'est l'étape qui donne sa valeur à la checklist : un statut n'est vrai que si vous avez ouvert le document. Fil rouge : vous parcourez les 34 lignes le 31 juillet 2026.",
    steps: [
      {
        title: 'Vérifier le document avant de choisir le statut',
        actions: [
          "Ouvrez le document par le lien de la colonne E, puis faites quatre tests : 1. il existe ; 2. il couvre toute la période ; 3. il est signé et daté comme exigé ; 4. il est rangé à l'emplacement annoncé.",
        ],
      },
      {
        title: 'Choisir le statut dans la liste déroulante de la colonne D',
        actions: [
          "Cliquez sur la flèche de la cellule D : quatre valeurs seulement, écrites sans accent dans le template (Disponible, A rassembler, Manquant, Non applicable). Appliquez le tableau ci-dessous, sans l'adoucir.",
        ],
      },
      {
        title: 'Dater (F) et commenter (G)',
        actions: [
          "F : la date où VOUS avez ouvert le document, pas la date du document. G : pour toute ligne autre que « Disponible », un commentaire factuel : quoi, combien, pour quand.",
        ],
      },
    ],
    table: {
      columns: ['Statut', 'Quand l\'utiliser', 'Effet sur le Tableau de bord'],
      rows: [
        ['Disponible', 'Les 4 tests sont réussis', 'Compté dans « requis » ET « disponibles »'],
        ['A rassembler', 'Existe ou à produire, mais incomplet, non signé ou mal rangé ; date de fin prévue', 'Compté dans « requis » seulement : le % baisse'],
        ['Manquant', 'Introuvable, ou non produit à la date prévue : action immédiate', 'Compté dans « manquants » : catégorie en « A COMPLETER »'],
        ['Non applicable', 'Sans objet sur la période, justifié en G', 'Retiré de « requis » : hors de tout pourcentage'],
      ],
    },
    example: {
      title: 'Lignes renseignées le 31/07/2026 (extrait : catégorie | B | C | D | F | G)',
      lines: [
        "2 | Dossiers d'achat complets | Logistique (Patrick K.) | Manquant | 31/07/2026 | BL de ACH-2026-014 (2 300 USD) introuvable",
        "3 | Feuilles de temps signees, allocation multi-projets | RH (Chantal R.) | A rassembler | 31/07/2026 | Signatures superviseurs absentes mars–juin",
        "3 | Organigramme et delegations de signature a jour | Finance Manager (Grace M.) | Manquant | 31/07/2026 | Délégation Directeur Pays non formalisée",
        "4 | Rapprochements de caisse (comptages physiques signes) | Finance Officer | Manquant | 31/07/2026 | Dernier comptage signé Rutshuru : 02/07",
        "7 | Registre des conflits d'interets declares | RH (Chantal R.) | Non applicable | 31/07/2026 | Aucun cas déclaré ; confirmé par Théodore W.",
      ],
    },
    result: "Les 34 lignes ont un statut vérifié et une date ; toute ligne autre que « Disponible » dit quoi faire et pour quand.",
    pitfall: "Cocher « Disponible » de mémoire parce que « Patrick m'a dit qu'il l'avait » : si la signature manque, vous le découvrirez devant l'auditeur. « Non applicable » ne sert pas non plus à faire monter le pourcentage : chaque cas se justifie en G.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 6',
    title: 'Lire le Tableau de bord et décider des priorités',
    intro: "Le Tableau de bord ne demande aucune saisie : il compte, catégorie par catégorie, ce que vous avez déclaré dans la Checklist. Il vous dit où agir en premier. Fil rouge : résultat de KAS au 31 juillet 2026.",
    steps: [
      {
        title: 'Comprendre ce que chaque colonne calcule',
        actions: [
          "B « Documents requis » : nombre de lignes de la catégorie dont le statut n'est pas « Non applicable ».",
          "C « Documents disponibles » : nombre de lignes « Disponible » ; D « % complet » = C divisé par B.",
          "E « Documents manquants » : nombre de lignes « Manquant » ; F « Statut global » : « Dossier complet » si D vaut 100 %, « A COMPLETER » si E est supérieur à 0, sinon « En cours ».",
        ],
      },
      {
        title: 'Décider des priorités',
        actions: [
          "Traitez d'abord les catégories en « A COMPLETER » : elles contiennent au moins un « Manquant ».",
          "Ensuite, traitez la catégorie au plus bas pourcentage en « En cours ».",
          "Enregistrez une copie PDF du Tableau de bord, nommée 2026-07-31_Tableau-de-bord-audit.pdf, dans 07_Gouvernance/Suivi-mensuel : elle prouvera votre suivi continu.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Requis', 'Disponibles', '% complet', 'Manquants', 'Statut global'],
      rows: [
        ['1. Comptabilite generale', '5', '4', '80 %', '0', 'En cours'],
        ['2. Achats et procurement', '5', '3', '60 %', '1', 'A COMPLETER'],
        ['3. Ressources humaines et paie', '5', '2', '40 %', '1', 'A COMPLETER'],
        ['4. Tresorerie et caisses', '4', '3', '75 %', '1', 'A COMPLETER'],
        ['5. Immobilisations', '3', '2', '66,7 %', '0', 'En cours'],
        ['6. Accords bailleurs et budgets', '5', '5', '100 %', '0', 'Dossier complet'],
        ['7. Gouvernance et conformite', '3', '2', '66,7 %', '0', 'En cours'],
        ['8. Suivi des audits precedents', '3', '2', '66,7 %', '0', 'En cours'],
        ['TOTAL GENERAL', '33', '23', '69,7 %', '3', 'A COMPLETER'],
      ],
    },
    result: "Vous pouvez lire en 30 secondes : KAS est à 69,7 % de complétude, avec 3 documents manquants dans les catégories 2, 3 et 4 — ce sont les trois premières actions du plan de rattrapage.",
    tip: "Un taux global élevé peut masquer une catégorie critique. Regardez toujours la colonne F avant la ligne TOTAL : un seul « Manquant » suffit à passer la catégorie en « A COMPLETER ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 6',
    title: 'Instaurer la revue mensuelle et le test de piste d\'audit trimestriel',
    intro: "Le dossier d'audit n'est pas un livrable : c'est un état permanent. Il se maintient avec un rituel court et daté. Entrées : votre calendrier de clôture mensuelle et la checklist à jour.",
    steps: [
      {
        title: 'Programmer la revue mensuelle (45 minutes)',
        actions: [
          "Bloquez dans votre agenda, chaque dernier jour ouvré du mois, un créneau « Revue dossier d'audit ».",
          "1. Mettez à jour les statuts des documents produits ce mois-là (rapprochement signé, journal de caisse clôturé, contrats archivés).",
          "2. Filtrez la colonne F (Données > Filtre > Filtres chronologiques) pour afficher les lignes non revérifiées depuis plus de 60 jours, et rouvrez-les.",
          "3. Enregistrez le PDF du Tableau de bord, puis présentez-le 10 minutes à Grace M.",
        ],
      },
      {
        title: 'Programmer le test de piste d\'audit trimestriel',
        actions: [
          "Chaque trimestre, tirez 3 opérations au hasard dans le grand livre (au-dessus de 500 USD).",
          "Pour chacune, reconstituez la chaîne complète de la demande d'achat à la ligne du rapport bailleur, et chronométrez.",
          "Objectif : moins de 15 minutes par opération. Sinon, un maillon est mal classé : corrigez la checklist.",
        ],
      },
    ],
    example: {
      title: 'Calendrier de revue de KAS',
      lines: [
        "Dernier jour ouvré de chaque mois : revue de 45 minutes, PDF du Tableau de bord, point avec Grace M.",
        "Fin de trimestre (mars, juin, septembre, décembre) : test de piste d'audit sur 3 opérations.",
        "Décembre : revue complète des 34 lignes (tous les « Disponible » rouverts) avant la clôture annuelle.",
        "Règle interne : aucun statut « Manquant » ne reste ouvert plus de 30 jours sans note d'escalade à Grace M.",
      ],
    },
    result: "Un créneau récurrent dans l'agenda, un PDF du Tableau de bord par mois, une fiche de test de piste d'audit par trimestre, et aucun « Manquant » ancien.",
    tip: "Un statut « Manquant » identifié en mars se corrige en une heure ; le même statut découvert en décembre, la veille de l'arrivée de l'auditeur, peut coûter des jours entiers.",
    pitfall: "Remplir la checklist seulement quand une mission est annoncée. Les dates de la colonne F, toutes identiques et toutes récentes, révèlent immédiatement à un auditeur une checklist remplie dans la précipitation.",
  },

  // ─────────────── PROCÉDURE 2 — Préparer une mission annoncée ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 6',
    title: 'Obtenir le scope et les termes de référence dès le jour 1',
    intro: "Avant de mobiliser qui que ce soit, vous devez savoir exactement ce que l'auditeur va auditer. Préparer un dossier trop large fait perdre du temps ; trop étroit, il vous expose à découvrir en pleine mission que des documents essentiels manquent. Fil rouge : lundi 3 août 2026, Fondation Sigma notifie l'audit du Projet Santé Nord-Kivu. Entrées : la lettre de notification et l'accord de subvention.",
    steps: [
      {
        title: 'Lire la notification et prévenir',
        actions: [
          "Relevez : mandant, cabinet, type d'audit, période, dates de travaux sur site.",
          "Informez le jour même Grace M. et Théodore W. (Directeur Pays) et créez les quatre échéances dans l'agenda partagé.",
        ],
      },
      {
        title: 'Poser les questions de cadrage par écrit',
        actions: [
          "Posez dix questions : période exacte ; projets et rubriques concernés ; type d'audit (statutaire, projet, Single Audit, spot-check) ; référentiel applicable ; méthode et seuil d'échantillonnage ; liste initiale des documents attendus et son délai ; lieux (Goma, Rutshuru) et calendrier ; accès au logiciel comptable ; personnes à interroger ; livrables et délais de réponse.",
          "Faites valider l'e-mail par Grace M., puis envoyez-le au cabinet dans les deux jours ouvrés, avec la lettre de notification en référence.",
        ],
      },
    ],
    example: {
      title: "E-mail de cadrage envoyé le mercredi 5 août 2026 (extrait)",
      lines: [
        "Objet : Audit du Projet Santé Nord-Kivu (Fondation Sigma) — demande de cadrage",
        "Madame Rachel O., nous accusons réception de votre notification du 3 août. Pour préparer la mission du 14 au 25 septembre, pouvez-vous nous confirmer par écrit :",
        "1. la période auditée (1er janvier – 30 juin 2026 ?) et les rubriques budgétaires incluses ;",
        "2. le référentiel appliqué et les termes de référence de la mission ;",
        "3. votre méthode d'échantillonnage et la liste initiale des documents attendus ;",
        "4. les lieux visités (Goma, base de Rutshuru) et les personnes que vous souhaitez rencontrer ;",
        "5. les modalités d'accès aux données comptables. Cordialement, [votre nom], Finance Officer, KAS Goma.",
      ],
    },
    result: "Une réponse écrite du cabinet qui confirme le scope et les termes de référence, classée dans 08_Audits-Precedents/2026-Mission-FSG/00_Lettre-et-ToR.",
    pitfall: "Commencer à préparer le dossier « en attendant » sans avoir le scope. Vous allez mobiliser toute l'équipe pour rien, ou oublier un document que le bailleur demande spécifiquement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 6',
    title: 'Remplir la fiche de cadrage et cartographier le scope sur la checklist',
    intro: "Le scope confirmé détermine quelles lignes de la checklist comptent pour cette mission. Vous travaillez sur une copie, pour ne jamais fausser le suivi permanent. Entrées : la réponse écrite du cabinet (reçue le 7 août) et la checklist à jour.",
    steps: [
      {
        title: 'Rédiger la fiche de cadrage (une page)',
        actions: [
          "Reprenez : type d'audit, mandant, cabinet, période, projet, rubriques, référentiel, dates, lieux, auditeurs, point focal KAS.",
          "Faites-la valider par Grace M. et classez-la dans 00_Lettre-et-ToR.",
        ],
      },
      {
        title: 'Dupliquer la checklist et la limiter au périmètre',
        actions: [
          "Enregistrez une copie : KAS_Checklist_Mission-FSG-H1-2026.xlsx. Le fichier permanent reste intact.",
          "Dans la copie, passez à « Non applicable » les lignes hors périmètre, avec en G : Hors scope mission FSG — lettre du 07/08/2026.",
          "Pour les lignes dans le périmètre, précisez en G la période à couvrir (ex. Janvier–juin 2026) et la date limite de préparation.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Dans le scope ?', 'Périmètre à préparer'],
      rows: [
        ['1. Comptabilité générale', 'Oui', 'Grand livre, journaux et rapprochements de janvier à juin 2026'],
        ['2. Achats et procurement', 'Oui', 'Achats imputés au Projet Santé / Fondation Sigma'],
        ['3. RH et paie', 'Oui', 'Personnel imputé au Projet Santé : paie, feuilles de temps, charges'],
        ['4. Trésorerie et caisses', 'Oui', 'Caisses de Goma et de Rutshuru, mouvements Santé'],
        ['5. Immobilisations', 'Oui', 'Biens acquis sur le budget Santé'],
        ['6. Accords bailleurs', 'Oui', 'Accord, budget et rapports soumis à Fondation Sigma uniquement'],
        ['7. Gouvernance', 'Partiel', 'Politique anti-fraude seule ; statuts, PV et conflits d\'intérêts hors scope'],
        ['8. Audits précédents', 'Oui', 'Management letter 2025 et preuves de clôture des 4 recommandations'],
      ],
    },
    result: "Une fiche de cadrage validée, une copie « mission » de la checklist dont le Tableau de bord ne mesure que le périmètre audité.",
    pitfall: "Mettre « Non applicable » dans le fichier PERMANENT pour les lignes hors scope : vous fausseriez le pourcentage de complétude de toute l'organisation et masqueriez des manques réels pour la prochaine mission.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 6',
    title: 'Consolider le dossier ligne par ligne (jours 2 à 5)',
    intro: "Une fois le scope confirmé, filtrez la checklist sur les catégories concernées et vérifiez que chaque document « Disponible » est réellement accessible et à jour, pas seulement coché lors d'une mise à jour antérieure. C'est le moment de corriger les statuts « A rassembler », jamais de découvrir un « Manquant » que personne n'avait signalé.",
    steps: [
      {
        title: 'Rouvrir chaque document « Disponible »',
        actions: [
          "Ouvrez chaque fichier via le lien de la colonne E ; contrôlez qu'il couvre toute la période auditée, janvier à juin 2026 (six mois de rapprochements, six registres de paie…).",
          "Contrôlez signatures, dates, lisibilité ; mettez à jour la colonne F avec la date du jour.",
          "Si un document « Disponible » se révèle incomplet, repassez-le en « A rassembler » et commentez en G.",
        ],
      },
      {
        title: "Traiter les lignes « A rassembler »",
        actions: [
          "Filtrez la colonne D sur « A rassembler » : pour chaque ligne, fixez en G une date de fin et un responsable.",
        ],
      },
      {
        title: 'Faire un test de piste d\'audit',
        actions: [
          "Tirez cinq opérations de plus de 500 USD imputées au Projet Santé et reconstituez la chaîne complète (demande d'achat jusqu'au rapport bailleur).",
          "Notez, pour chacune, les maillons absents.",
        ],
      },
    ],
    example: {
      title: 'Constats de la consolidation du 10 au 14 août 2026 (extrait)',
      lines: [
        "Registre de paie de juin : absent du dossier, présent chez RH → récupéré, rangé, F = 12/08/2026.",
        "Feuilles de temps : 14 feuilles de mars à juin sans signature du superviseur → reste « A rassembler », relance écrite à Joël B. et à Aline B. (coordinatrice Santé).",
        "Rapprochement bancaire de mai : signé le 28/06, soit 19 jours après la fin du mois (règle interne : 10 jours) → note au dossier.",
        "Rapprochement bancaire d'avril : un élément en suspens de 1 250 USD, non apuré depuis trois mois → à investiguer (étape 4).",
        "Piste d'audit sur 5 opérations : 4 complètes en moins de 12 minutes ; l'achat ACH-2026-031 n'a qu'un devis au lieu de trois.",
      ],
    },
    result: "Chaque ligne « Disponible » du périmètre a été rouverte et vérifiée sur la période ; la liste des écarts est datée et chaque écart a un responsable.",
    pitfall: "Vérifier l'existence du fichier sans l'ouvrir. Un dossier vide ou un document d'une autre période se découvre en une seconde en l'ouvrant — et devant l'auditeur, il devient un finding.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 6',
    title: 'Traiter les documents manquants : reconstituer sans falsifier',
    intro: "Un « Manquant » se traite par une recherche, une reconstitution honnête ou une note explicative. Jamais par un document fabriqué après coup. Fil rouge : trois manquants (BL, délégation, comptage de caisse) et un écart bancaire à traiter avant le 14 septembre.",
    steps: [
      {
        title: 'Chercher, puis décider',
        actions: [
          "Cherchez le document à trois endroits : dossier de l'entrepôt, dossier d'achat, archives de la personne concernée. Notez la cause probable.",
          "Si le document peut être légitimement refait (duplicata fournisseur, attestation, relevé bancaire), reconstituez-le.",
          "Sinon, rédigez une note explicative signée qui décrit l'absence et ses causes.",
        ],
      },
      {
        title: 'Marquer le document reconstitué',
        actions: [
          "Datez le document reconstitué de sa vraie date d'établissement et écrivez : « Établi le [date] en remplacement du document du [date d'origine] ».",
          "Une délégation de signature rédigée aujourd'hui vaut à partir d'aujourd'hui : elle ne couvre jamais rétroactivement une absence passée.",
        ],
      },
      {
        title: "Informer",
        actions: [
          "Informez Grace M. de chaque anomalie et décidez avec elle de la déclarer à l'auditeur à l'ouverture : ce que vous découvrez et traitez avant lui se présente comme un contrôle qui fonctionne.",
        ],
      },
    ],
    table: {
      columns: ['Manquant ou anomalie', 'Action', 'Responsable', 'Date'],
      rows: [
        ['BL du dossier ACH-2026-014 (2 300 USD)', 'Duplicata signé du fournisseur + attestation de réception du magasinier datée du jour', 'Patrick K.', '14/08'],
        ['Délégation de signature du Directeur Pays', 'Rédiger et signer : Théodore W. délègue à Grace M., plafond et durée précisés', 'Grace M.', '12/08'],
        ['Comptage de caisse de Rutshuru (dernier : 02/07)', 'Comptage physique contradictoire avec procès-verbal signé, puis hebdomadaire', 'Vous (Finance Officer)', '07/08'],
        ['Élément en suspens bancaire d\'avril (1 250 USD)', 'Demander le détail à la banque, identifier l\'opération, passer l\'écriture', 'Vous (Finance Officer)', '21/08'],
      ],
    },
    result: "Chaque manquant est soit refermé avec un document daté de son vrai jour, soit documenté par une note ; aucun document n'a été antidaté.",
    pitfall: "Antidater un bon de livraison ou une signature « pour régulariser ». Un document daté d'avant sa création se détecte (métadonnées du fichier, témoignages) et transforme un finding mineur en soupçon de falsification : le dossier est alors un finding majeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 6',
    title: 'Organiser le dossier miroir et la logistique de la mission',
    intro: "L'auditeur ne doit jamais fouiller votre dossier permanent. Vous lui offrez un dossier miroir, limité au périmètre, qui facilite son travail et protège les données des autres projets. Entrées : la checklist « mission » consolidée et la fiche de cadrage.",
    steps: [
      {
        title: 'Créer le dossier miroir',
        actions: [
          "Créez « Mission_FSG_H1-2026 » avec : 00_Lettre-et-ToR, 01_Documents-fournis (même numérotation 01 à 08 que la checklist), 02_Registre-des-demandes, 03_Reponses-en-cours.",
          "Copiez-y, en PDF, uniquement les documents du périmètre ; les originaux restent dans le dossier permanent.",
          "Donnez aux auditeurs un accès en lecture seule à 01_Documents-fournis, et rien d'autre.",
        ],
      },
      {
        title: 'Préparer les moyens',
        actions: [
          "Réservez une salle fermée à Goma avec prises et connexion, pour 10 jours ; confirmez les horaires de travail avec Rachel O.",
          "Fixez un point focal unique (vous) et un suppléant (Grace M.) : toutes les demandes passent par eux.",
          "Préparez des extractions datées du grand livre de janvier à juin, au lieu d'ouvrir un accès direct au logiciel comptable.",
          "Gelez les écritures de la période auditée : toute correction passe par une régularisation tracée (module 01), jamais par une modification silencieuse.",
        ],
      },
    ],
    example: {
      title: 'Dossier miroir de la mission FSG',
      lines: [
        "Mission_FSG_H1-2026/",
        "  00_Lettre-et-ToR/  (notification, fiche de cadrage, réponse du cabinet)",
        "  01_Documents-fournis/  (01_Comptabilite … 08_Audits-Precedents, PDF du périmètre uniquement)",
        "  02_Registre-des-demandes/  (Registre-demandes-Mission-FSG.xlsx)",
        "  03_Reponses-en-cours/  (documents en préparation, non encore transmis)",
      ],
    },
    result: "Un dossier miroir complet en lecture seule, une salle réservée, un point focal et un suppléant désignés, et les écritures de la période gelées.",
    pitfall: "Ouvrir à l'auditeur l'accès à tout le lecteur partagé « pour gagner du temps » : il verrait les documents des projets non audités, des données personnelles de salariés, voire les échanges confidentiels avec d'autres bailleurs.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 6',
    title: "Briefer l'équipe la veille de l'arrivée de l'auditeur",
    intro: "Toute personne susceptible d'être interrogée doit savoir comment répondre. Le briefing prépare, il ne scénarise jamais. Entrées : la liste des personnes du périmètre, la fiche de cadrage. Fil rouge : briefing de 30 minutes le vendredi 11 septembre 2026, avant l'arrivée de l'auditeur le lundi 14.",
    steps: [
      {
        title: 'Réunir les bonnes personnes',
        actions: [
          "Invitez toute personne du périmètre (finance, logistique, RH, caissière, coordination Santé, Direction Pays) pour 30 minutes, sans ordinateur ouvert.",
        ],
      },
      {
        title: 'Rappeler les trois règles',
        actions: [
          "1. On répond avec les documents en main, jamais de mémoire sur un montant ou une date précis.",
          "2. On ne devine jamais : « Je vérifie et je reviens vers vous » est toujours une réponse acceptable.",
          "3. Toute question sensible ou qui dépasse son niveau se transmet à Grace M., sans tenter d'y répondre soi-même « pour aider ».",
        ],
      },
      {
        title: 'Distribuer les rôles et faire signer',
        actions: [
          "Remettez le tableau « Qui répond à quoi » et rappelez que les demandes écrites passent par le point focal.",
          "Faites signer une feuille de présence : elle prouve que l'équipe a été informée.",
        ],
      },
    ],
    table: {
      columns: ['Sujet', 'Personne qui répond', 'Suppléant'],
      rows: [
        ['Comptabilité, grand livre, rapprochements', 'Vous (Finance Officer)', 'Grace M.'],
        ['Achats, fournisseurs, immobilisations', 'Patrick K.', 'Vous'],
        ['Paie, contrats, feuilles de temps', 'Chantal R.', 'Grace M.'],
        ['Caisse de Goma et de Rutshuru', 'Esther N.', 'Vous'],
        ['Activités du projet Santé', 'Aline B.', 'Joël B.'],
        ['Questions sensibles, hors périmètre, gouvernance', 'Grace M.', 'Théodore W.'],
      ],
    },
    result: "Une feuille de présence signée, un tableau « Qui répond à quoi » affiché dans la salle de l'auditeur et connu de chacun.",
    tip: "Distribuez aussi les trois phrases de la procédure 3 (étape 4) : « Je vérifie et je reviens vers vous », « Cette question relève de Grace M. », « Je ne le trouve pas à ce stade ».",
    pitfall: "Demander à quelqu'un d'« arranger » une réponse ou de « rester discret » sur une faiblesse connue. Un briefing qui pousse à dissimuler fait de l'audit un risque de fraude déclarée : vous préparez à répondre juste, jamais à répondre arrangé.",
  },

  // ─────────────── PROCÉDURE 3 — Répondre à l'auditeur pendant la mission ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: "Ouvrir la mission : réunion d'ouverture et règles du jeu",
    intro: "La façon dont la mission démarre fixe le ton des dix jours suivants. La réunion d'ouverture sert à confirmer par écrit ce qui a été cadré avant, pas à découvrir le périmètre. Fil rouge : lundi 14 septembre 2026, 9 h, salle de réunion de Goma. Participants : Rachel O. et ses deux auditeurs, Théodore W., Grace M. et vous.",
    steps: [
      {
        title: "Préparer l'ordre du jour",
        actions: [
          "Imprimez la fiche de cadrage et le calendrier : ils servent de référence pour ne jamais dériver.",
          "Préparez cinq points : périmètre et période ; calendrier et horaires ; point focal et circuit des demandes ; accès (dossier miroir, extractions, locaux, personnes) ; date de la réunion de clôture.",
        ],
      },
      {
        title: 'Conduire la réunion',
        actions: [
          "Présentez le point focal (vous) et le suppléant (Grace M.) : toute demande se fait par écrit dans le registre ou à voix haute devant vous.",
          "Confirmez le périmètre en une phrase et demandez à Rachel O. de la valider : « Projet Santé, janvier à juin 2026, rubriques du budget Sigma. »",
          "Si Grace M. et Théodore W. l'ont décidé, déclarez les anomalies déjà détectées et traitées en août (étape 4 de la procédure 2).",
        ],
      },
      {
        title: 'Consigner',
        actions: [
          "Rédigez le compte rendu dans les 24 heures et envoyez-le à Rachel O. pour validation par retour d'e-mail.",
        ],
      },
    ],
    example: {
      title: "Compte rendu de la réunion d'ouverture du 14/09/2026 (extrait)",
      lines: [
        "Périmètre confirmé : Projet Santé Nord-Kivu / Fondation Sigma, 01/01/2026 – 30/06/2026, toutes rubriques du budget signé.",
        "Calendrier : travaux du 14 au 25/09 ; réunion de clôture le vendredi 25/09 à 14 h ; constats provisoires écrits le 02/10 ; rapport final attendu le 12/10.",
        "Circuit des demandes : par e-mail au point focal ou verbalement, consignées au registre ; réponse sous 24 heures ouvrées sauf demande volumineuse.",
        "Anomalies déclarées par KAS : BL ACH-2026-014 reconstitué, délégation du Directeur Pays rédigée le 12/08, comptage de Rutshuru du 07/08, élément bancaire d'avril en cours d'apurement.",
      ],
    },
    result: "Un compte rendu validé par e-mail, qui fige le périmètre, le calendrier et le circuit des demandes pour toute la mission.",
    pitfall: "Accepter oralement une extension de périmètre (« pendant que vous y êtes, regardez aussi le projet WASH »). Tout élargissement se confirme par écrit auprès de Grace M. et du bailleur concerné : vous n'avez pas le droit d'ouvrir les comptes d'un autre bailleur sans son accord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Ouvrir le registre des demandes et le tenir à jour',
    intro: "Le registre est un fichier simple, créé pour la mission : il évite les redondances si plusieurs personnes sont sollicitées, et il prouve plus tard ce qui a été demandé et transmis. Entrées : le dossier miroir et la liste initiale de l'auditeur.",
    steps: [
      {
        title: 'Créer le fichier',
        actions: [
          "Dans 02_Registre-des-demandes, créez Registre-demandes-Mission-FSG.xlsx avec neuf colonnes : N° demande, Date reçue, Demandeur, Description exacte, Échéance, Responsable, Date de transmission, Documents transmis (référence du fichier), Statut.",
          "Appliquez une liste déroulante au Statut : Reçue, En cours, Transmise, Clôturée.",
          "Numérotez D-001, D-002, etc., sans jamais réutiliser un numéro.",
        ],
      },
      {
        title: 'Traiter chaque demande dès sa réception',
        actions: [
          "Saisissez la demande avec les mots exacts de l'auditeur, la date et l'heure.",
          "Accusez réception dans l'heure : « Bien reçu sous le numéro D-003, nous revenons vers vous avant jeudi 17 h. »",
          "Mettez à jour le registre à midi et à 17 h ; ne laissez aucune demande sans responsable ni échéance.",
        ],
      },
    ],
    example: {
      title: 'Extrait du registre — premiers jours de la mission',
      lines: [
        "D-001 | 14/09 | Rachel O. | Grand livre Santé janv.–juin 2026, format Excel | 14/09 | Vous | 14/09 | GL-SAN-H1-2026.xlsx | Transmise",
        "D-002 | 14/09 | Auditeur junior 1 | Dossiers d'achat Santé de plus de 2 500 USD | 16/09 | Patrick K. | 15/09 | 6 dossiers PDF (02_Achats) | Transmise",
        "D-003 | 15/09 | Rachel O. | Feuilles de temps signées mars–juin du personnel partagé | 17/09 | Chantal R. | — | — | En cours",
        "D-004 | 16/09 | Auditeur junior 2 | Comptage de caisse de Rutshuru en sa présence | 17/09 | Esther N. | 17/09 | PV-comptage-2026-09-17 | Transmise",
      ],
    },
    result: "Chaque demande a un numéro, un responsable, une échéance et un statut ; l'auditeur reçoit une copie en lecture seule du registre chaque soir.",
    tip: "Partager le registre avec l'auditeur n'est pas un risque : cela montre que vous maîtrisez le flux et que vous n'avez rien à cacher.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Répondre à une demande : Écouter, Vérifier, Répondre, Consigner',
    intro: "Une réponse incorrecte donnée avec assurance puis corrigée le lendemain nuit beaucoup plus à la confiance de l'auditeur qu'un délai de quelques heures. La méthode est fixe : elle s'applique même à un point qui semble évident.",
    steps: [
      {
        title: '1. Écouter et reformuler',
        actions: [
          "Laissez l'auditeur terminer sa question sans l'interrompre.",
          "Reformulez : « Si je comprends bien, vous souhaitez X pour la période Y ? » ; une mauvaise compréhension coûte une journée.",
        ],
      },
      {
        title: '2. Vérifier avant de répondre',
        actions: [
          "Ouvrez le document : contrôlez période, montants, signature, cohérence avec le grand livre.",
          "En cas de doute, dites : « Je vérifie et je reviens vers vous avant 16 h. » C'est toujours une réponse acceptable.",
        ],
      },
      {
        title: '3. Répondre précisément',
        actions: [
          "Répondez uniquement à ce qui est demandé, avec le document en main (PDF du dossier miroir).",
          "N'ajoutez ni justification ni commentaire que l'auditeur n'a pas sollicités.",
        ],
      },
      {
        title: '4. Consigner',
        actions: [
          "Renseignez le registre : date et heure de transmission, référence du fichier, nom de la personne qui a répondu.",
        ],
      },
    ],
    example: {
      title: "Question de l'auditrice le 15/09 à 10 h 20, et deux façons d'y répondre",
      lines: [
        "Question : « Pourquoi des feuilles de temps de mars ne sont-elles pas signées par le superviseur ? »",
        "Mauvaise réponse immédiate : « Oh, c'est un oubli, ça arrive tout le temps avec les superviseurs, aucune n'est signée depuis mars, mais le travail a bien été fait. » → aveu non vérifié, extension du sujet, aucune preuve.",
        "Bonne réponse, 10 h 22 : « Je note votre question sous D-005. Je vérifie les 14 feuilles de mars à juin et je vous réponds avec la liste exacte avant 15 h. »",
        "Réponse à 14 h 40 : « Sur les 14 feuilles concernées, 3 ont été signées depuis le 20 août ; 11 restent à signer (4 agents, dont un parti en juin). Voici le tableau et la procédure corrigée applicable depuis juillet. » → registre D-005 : transmis 15/09, 14 h 40.",
      ],
    },
    result: "Chaque réponse est factuelle, vérifiée, limitée à la question, appuyée d'un document et consignée au registre.",
    pitfall: "Sur-expliquer. Une explication trop longue attire souvent l'attention sur un sujet que l'auditeur n'aurait pas creusé : répondez à la question posée, puis arrêtez-vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Gérer les situations délicates sans se braquer et sans improviser',
    intro: "Certaines demandes sortent de la routine. L'important est de savoir, avant qu'elles arrivent, quelle est la réaction attendue : ni refus sec, ni réponse arrangée. Entrées : le tableau de briefing et la fiche de cadrage.",
    steps: [
      {
        title: 'Appliquer la réaction adaptée',
        actions: [
          "Identifiez la situation dans le tableau ci-dessous.",
          "Utilisez la formule proposée, puis consignez la demande au registre avec la mention « hors circuit » ou « à valider ».",
          "Prévenez Grace M. immédiatement pour toute situation de la dernière ligne.",
        ],
      },
    ],
    table: {
      columns: ['Situation', 'Réaction', 'Formule à utiliser'],
      rows: [
        ['Question hors périmètre', 'Noter, ne pas répondre, renvoyer à Grace M.', '« Je la note et je la soumets à Grace M. pour confirmer le périmètre. »'],
        ['Document introuvable', 'Chercher 24 heures, ne jamais reconstituer en urgence', '« Je ne le trouve pas à ce stade ; je vous réponds demain à midi. »'],
        ['Question qui dépasse votre niveau', 'Passer la main', '« Cette question relève de Grace M. ; je vous mets en relation. »'],
        ['Élargissement de l\'échantillon', 'Accepter via le registre ; vérifier si le cas est isolé', '« Bien noté sous D-0XX ; nous vérifions d\'abord s\'il s\'agit d\'un cas isolé. »'],
        ['Désaccord sur un constat', 'Demander la base écrite, apporter la contre-preuve, ne pas polémiquer', '« Pouvez-vous me transmettre la base de ce constat afin que nous revérifiions les pièces ? »'],
        ['Indice de fraude découvert', 'Stop : rien modifier ni détruire, conserver les pièces, alerter immédiatement', '« Je dois en informer ma direction avant de poursuivre. »'],
      ],
    },
    result: "Aucune réponse improvisée, aucune pièce modifiée, et chaque situation délicate est tracée au registre et remontée au bon niveau.",
    pitfall: "Modifier une écriture, déplacer ou « nettoyer » une pièce pendant la mission, même de bonne foi. Toute correction de la période auditée se fait par régularisation documentée (module 01), jamais en silence : une pièce modifiée pendant un audit est vue comme une dissimulation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Faire le point chaque soir et suivre les points ouverts',
    intro: "Dix jours de mission produisent des dizaines de demandes. Sans point quotidien, on perd le fil, on se contredit et on se fait surprendre. Entrées : le registre des demandes, les notes de la journée.",
    steps: [
      {
        title: 'Tenir le point de 17 h (15 à 20 minutes)',
        actions: [
          "Réunissez-vous avec Grace M. : demandes reçues, transmises, en retard.",
          "Notez où l'auditeur creuse : c'est la zone où il élargit son échantillon, donc celle à préparer en priorité le lendemain.",
          "Répartissez les documents à préparer pour 9 h le lendemain.",
        ],
      },
      {
        title: 'Informer la Direction Pays',
        actions: [
          "Envoyez chaque soir un flash de dix lignes à Grace M. ; chaque vendredi, un flash à Théodore W.",
          "Mettez à jour la checklist « mission » si un document se révèle absent ou incomplet pendant les travaux.",
        ],
      },
    ],
    example: {
      title: 'Flash du jeudi 17 septembre 2026, 17 h 30 (extrait)',
      lines: [
        "Demandes : 9 reçues, 7 transmises, 2 en cours (D-003 feuilles de temps, D-008 inventaire de Rutshuru).",
        "Zone d'attention de l'auditeur : feuilles de temps (échantillon élargi de 5 à 12 agents) et mise en concurrence des achats de plus de 2 500 USD.",
        "Anomalie nouvelle : un devis manquant sur ACH-2026-031 (3 100 USD) ; les quatre anomalies déjà déclarées restent suivies.",
        "Besoin demain : signature du superviseur Santé avant midi ; Théodore W. disponible lundi 21 pour l'inventaire.",
      ],
    },
    result: "Chaque soir, le registre est à jour, les points ouverts ont un responsable pour le lendemain 9 h, et la Direction Pays n'apprend rien par surprise.",
    tip: "Quand l'auditeur élargit son échantillon sur un sujet, c'est le signal que le premier cas n'était pas jugé isolé : demandez-vous quelle serait la cause racine commune, et commencez déjà à l'analyser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Préparer et tenir la réunion de clôture',
    intro: "La réunion de clôture présente les constats provisoires. C'est votre seul moment pour vérifier les faits avant la rédaction du rapport. Fil rouge : vendredi 25 septembre 2026, 14 h, avec Rachel O., Théodore W., Grace M. et vous.",
    steps: [
      {
        title: 'Avant la réunion',
        actions: [
          "Demandez à Rachel O. la liste des points qu'elle compte présenter, la veille si possible.",
          "Rassemblez pour chacun les pièces et la chronologie, en reprenant le registre.",
          "Décidez avec Grace M. qui parle : un seul interlocuteur, les autres complètent sur demande.",
        ],
      },
      {
        title: 'Pendant la réunion',
        actions: [
          "Pour chaque constat, notez les mots exacts, les pièces citées, le montant et le niveau proposé.",
          "Vérifiez l'exactitude des faits : dates, montants, noms, périmètre. Corrigez un fait inexact ; ne négociez pas la sévérité dans la salle.",
          "Ne promettez aucune action détaillée : dites que vous analysez la cause et transmettrez un plan d'action.",
        ],
      },
      {
        title: 'Après la réunion',
        actions: [
          "Demandez les constats provisoires par écrit (date prévue : 2 octobre) et le délai pour répondre.",
          "Faites lire la lettre d'affirmation à Théodore W. avant signature : il l'engage personnellement.",
          "Envoyez votre compte rendu de la réunion dans les 24 heures.",
        ],
      },
    ],
    example: {
      title: 'Constats provisoires notés le 25/09/2026',
      lines: [
        "C1 — Feuilles de temps : 11 feuilles du personnel partagé sans signature de supervision (mars–juin), 9 840 USD imputés au Projet Santé. Niveau proposé : significatif.",
        "C2 — Mise en concurrence : achat ACH-2026-031 (3 100 USD) appuyé par un seul devis au lieu de trois. Niveau : mineur.",
        "C3 — Rapprochement bancaire : élément en suspens de 1 250 USD non apuré sur trois mois ; rapprochement de mai signé avec 19 jours de retard. Niveau : mineur.",
        "C4 — Immobilisations : inventaire annuel non réalisé, 3 ordinateurs et 2 motos (11 400 USD) sans étiquette ; recommandation de 2025 non mise en œuvre. Niveau : mineur (management letter), signalé comme déjà formulé.",
      ],
    },
    result: "Quatre constats notés mot pour mot, leurs faits vérifiés, le calendrier du rapport final confirmé et la lettre d'affirmation relue avant signature.",
    pitfall: "Signer la lettre d'affirmation sans la lire ou tenter d'obtenir le déclassement d'un constat en réunion. Vous avez dix jours pour répondre par écrit, avec preuves : c'est le cadre de la discussion.",
  },

  // ─────────────── PROCÉDURE 4 — Rédiger le plan d'action correctif ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 7',
    title: 'Recevoir le rapport, inventorier les findings et ouvrir le plan',
    intro: "Un rapport sans réponse formelle n'a aucune valeur opérationnelle : c'est le plan d'action qui transforme un constat en amélioration. Ne le laissez jamais « en attente de traitement ». Fil rouge : lundi 12 octobre 2026, Mont-Goma Audit transmet le rapport final et la management letter. Entrées : ces deux documents et le template plan-action-correctif-recommandations-audit.docx.",
    steps: [
      {
        title: 'Inventorier les findings',
        actions: [
          "Lisez en entier le rapport ET la management letter : l'opinion, puis chaque finding.",
          "Dressez la liste : référence, thème, niveau écrit par l'auditeur, montant, page.",
          "Comparez avec les constats provisoires du 25 septembre. Un fait inexact se signale par écrit à l'auditeur dans les deux jours ouvrés, avec preuve.",
        ],
      },
      {
        title: 'Calculer les échéances',
        actions: [
          "Jour 0 = date de réception (12 octobre). Envoi du plan sous 5 jours ouvrés : lundi 19 octobre. Échéance donnée par Fondation Sigma : 10 jours ouvrés, soit lundi 26 octobre.",
          "Inscrivez ces deux dates dans l'agenda de Grace M. et le vôtre.",
        ],
      },
      {
        title: 'Ouvrir le template',
        actions: [
          "Ouvrez plan-action-correctif-recommandations-audit.docx et enregistrez-le : Plan-action-correctif_Audit-FSG-H1-2026_v1.docx.",
          "Lisez le tableau : six colonnes, dans cet ordre — Constat (finding), Cause racine, Action corrective, Responsable, Échéance, Statut / preuve — avec une ligne d'exemple et cinq lignes vides.",
          "Ajoutez sous le titre une ligne d'identification de la mission : Audit du Projet Santé Nord-Kivu (Fondation Sigma), période 01/01–30/06/2026, KAS Goma.",
        ],
      },
    ],
    table: {
      columns: ['Réf.', 'Thème', 'Niveau (auditeur)', 'Montant', 'Rapport'],
      rows: [
        ['F1', 'Feuilles de temps du personnel partagé non signées', 'Significatif', '9 840 USD', 'p. 6'],
        ['F2', 'Achat ACH-2026-031 : un seul devis au lieu de trois', 'Mineur', '3 100 USD', 'p. 8'],
        ['F3', 'Rapprochement bancaire : suspens non apuré, signature tardive', 'Mineur', '1 250 USD', 'p. 9'],
        ['F4', 'Inventaire physique non réalisé, biens non étiquetés', 'Mineur (déjà formulé en 2025)', '11 400 USD', 'Management letter p. 3'],
      ],
    },
    result: "Un inventaire de quatre findings confirmé contre les constats provisoires, deux échéances (19 et 26 octobre) dans les agendas, et un fichier de plan ouvert sous un nom versionné.",
    pitfall: "Commencer à écrire les actions avant d'avoir lu la management letter. Elle contient des recommandations de contrôle interne absentes du rapport : un plan qui les ignore est un plan incomplet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 7',
    title: 'Transcrire chaque finding dans la colonne « Constat (finding) »',
    intro: "Une ligne par finding, dans la première colonne du tableau. Le constat doit permettre à un lecteur qui n'a pas le rapport sous les yeux de comprendre exactement ce qui est reproché, avec les faits chiffrés de l'auditeur. Entrées : l'inventaire de l'étape 1 et le texte du rapport.",
    steps: [
      {
        title: 'Remplir la colonne 1',
        actions: [
          "Supprimez la ligne d'exemple du template après l'avoir lue.",
          "Écrivez : référence et niveau de l'auditeur, fait constaté, nombre de cas, montant, période, page du rapport.",
          "Reprenez les chiffres exacts du rapport, sans les arrondir ni les adoucir.",
          "Si vous contestez un fait, ne le faites pas dans la cellule : écrivez à l'auditeur, avec preuve, séparément.",
        ],
      },
    ],
    example: {
      title: 'Colonne « Constat (finding) » — ligne F1, mauvaise et bonne rédaction',
      lines: [
        "À éviter : « Quelques feuilles de temps ne sont pas signées. » → pas de nombre, pas de période, pas de montant, adoucit le constat.",
        "À écrire : « F1 (significatif, rapport p. 6) — 11 feuilles de temps de mars à juin 2026 du personnel partagé entre projets ne portent pas la signature du superviseur ; 9 840 USD de salaires imputés au Projet Santé sur cette base. »",
      ],
    },
    result: "Chaque constat tient en une à trois lignes, reprend les chiffres de l'auditeur et se lit sans le rapport.",
    pitfall: "Reformuler le finding en version édulcorée pour « limiter les dégâts ». L'auditeur et le bailleur comparent le plan au rapport : un constat réécrit passe pour un déni et ruine la crédibilité de toutes les autres colonnes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 7',
    title: 'Identifier la cause racine (colonne « Cause racine »)',
    intro: "Si l'auditeur écrit « pièce justificative manquante », votre cause doit dire pourquoi : oubli ponctuel, procédure d'archivage floue, ou rotation de personnel sans passation correcte. « Erreur humaine » n'est pas une cause racine. Entrées : les personnes concernées par le finding, 30 minutes avec elles.",
    steps: [
      {
        title: 'Mener l\'analyse avec les personnes concernées',
        actions: [
          "Réunissez celles et ceux qui font le travail visé par le finding (ici Chantal R., Joël B., Aline B.).",
          "Posez la question « Pourquoi ? » jusqu'à cinq fois, en partant du constat. Arrêtez-vous quand la réponse est une procédure absente ou floue, un contrôle manquant, un outil, un manque d'information ou une organisation.",
          "Écartez toute réponse qui nomme une personne : remplacer la personne ne corrige rien.",
        ],
      },
      {
        title: 'Rédiger la cause',
        actions: [
          "Écrivez deux à trois phrases : le mécanisme, le contrôle qui a manqué, la cause commune éventuelle à d'autres équipes.",
          "Vérifiez si la même cause expose d'autres projets ou bureaux : cela élargit l'action de l'étape 4.",
        ],
      },
    ],
    example: {
      title: 'Les 5 pourquoi appliqués à F1 (feuilles de temps non signées)',
      lines: [
        "1. Pourquoi 11 feuilles ne sont-elles pas signées ? → Les superviseurs ne les ont pas reçues à signer.",
        "2. Pourquoi ? → La RH les remplit en fin de mois sur estimation et les transmet directement à la paie.",
        "3. Pourquoi la paie les accepte-t-elle ? → Sa liste de clôture demande seulement « feuille reçue ».",
        "4. Pourquoi ? → La règle de signature n'est écrite dans aucune procédure.",
        "5. Pourquoi ? → La procédure de 2023 date d'avant le personnel partagé entre plusieurs projets.",
        "Cause racine rédigée : « Aucune procédure n'impose la signature du superviseur avant l'imputation ; la liste de clôture de paie ne contient pas ce contrôle ; les superviseurs ignorent que leur signature conditionne l'éligibilité du coût. Même risque sur l'imputation au projet WASH. »",
      ],
    },
    result: "Une cause racine qui nomme un manque de procédure, de contrôle ou d'information, appuyée par un échange documenté avec les personnes concernées.",
    pitfall: "Écrire « erreur humaine » ou « négligence de la RH ». Remplacer ou sanctionner la personne sans revoir la procédure garantit presque toujours de revoir le même finding l'année suivante, avec la mention aggravante « finding répété non résolu ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 7',
    title: 'Définir une action corrective vérifiable (colonne « Action corrective »)',
    intro: "« Sensibiliser » n'est pas une action vérifiable. « Mettre en place une checklist de réception obligatoire avant tout paiement » en est une. Une bonne ligne traite le cas, la cause et la couverture de toute l'équipe concernée. Entrées : la cause racine de l'étape 3.",
    steps: [
      {
        title: 'Écrire trois niveaux d\'action',
        actions: [
          "Corriger le cas : reconstituer, régulariser, apurer, ce que l'on peut refaire honnêtement.",
          "Corriger la cause : changer une procédure, un contrôle, un paramétrage, un outil.",
          "Étendre : couvrir les autres équipes, bureaux ou projets exposés à la même cause, et former.",
        ],
      },
      {
        title: 'Appliquer le test de vérifiabilité',
        actions: [
          "Commencez chaque action par un verbe concret : Rédiger, Intégrer, Faire signer, Réaliser, Paramétrer, Former.",
          "Demandez-vous : « Un tiers peut-il constater que c'est fait, sans me poser de question ? » Sinon, réécrivez.",
        ],
      },
    ],
    table: {
      columns: ['À éviter', 'À écrire à la place'],
      rows: [
        ['Sensibiliser les superviseurs', 'Former les 12 superviseurs et agents concernés (45 minutes), avec feuille de présence signée'],
        ['Renforcer le contrôle des feuilles de temps', 'Ajouter à la liste de clôture de paie un contrôle bloquant : 100 % des feuilles signées avant imputation'],
        ['Veiller au bon archivage', 'Ranger chaque BL signé dans 02_Achats sous 48 heures, contrôlé chaque vendredi par la finance'],
        ['Améliorer les rapprochements', 'Faire signer chaque rapprochement bancaire sous 10 jours et apurer les suspens sous 30 jours'],
      ],
    },
    example: {
      title: 'Colonne « Action corrective » — ligne F1',
      lines: [
        "(1) Faire signer les 11 feuilles par les superviseurs avec la date réelle de signature et une note de justification appuyée de preuves de présence ; (2) ajouter à la liste de clôture de paie le contrôle bloquant « 100 % des feuilles signées avant imputation » ; (3) former les 12 superviseurs et agents du personnel partagé (WASH et Santé).",
      ],
    },
    result: "Trois niveaux d'action écrits avec des verbes vérifiables, couvrant le cas, la cause et l'extension aux autres projets.",
    pitfall: "Promettre davantage que ce que l'équipe peut tenir. Mieux vaut cinq actions réalistes à date que quinze annoncées et manquées : chaque échéance non tenue est notée par l'auditeur de l'année suivante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 7',
    title: 'Nommer le responsable et fixer l\'échéance (colonnes « Responsable » et « Échéance »)',
    intro: "Une action sans porteur individuel ne se réalise pratiquement jamais dans les délais. Une échéance relative (« 30 jours ») ne se vérifie pas : il faut une date. Entrées : les actions de l'étape 4 et l'agenda de chacun.",
    steps: [
      {
        title: 'Nommer le responsable',
        actions: [
          "Écrivez un nom ET une fonction : « Chantal R., responsable RH ». Jamais « l'équipe finance » ou « le bureau ».",
          "Choisissez la personne qui a l'autorité pour changer la pratique, pas celle qui a causé l'écart : on ne fait pas vérifier une rupture de séparation des tâches par celui qui l'a commise.",
          "Obtenez l'accord de la personne avant d'écrire son nom.",
        ],
      },
      {
        title: 'Fixer une date réaliste',
        actions: [
          "Écrivez une date au format JJ mois AAAA, un jour ouvré, en tenant compte des congés et des dépendances.",
          "Séquencez : le contrôle en place avant la formation, la correction du cas avant la clôture.",
          "Vérifiez la charge : une personne ne porte pas trois échéances le même jour.",
        ],
      },
    ],
    example: {
      title: 'Colonnes « Responsable » et « Échéance » — ligne F1 et contrôle de charge',
      lines: [
        "Responsable : « Chantal R., responsable RH ».",
        "Échéance : « 6 novembre 2026 : contrôle bloquant en place ; 20 novembre 2026 : 11 feuilles signées et formation terminée ».",
        "Contrôle de charge : Chantal R. (F1, 6 et 20/11) ; Patrick K. (F2 le 13/11, F4 le 30/11 : 17 jours d'écart) ; vous (F3, 13/11).",
        "À éviter : « Équipe RH » et « 30 jours » (exemple du template) — ni nom, ni date.",
      ],
    },
    result: "Chaque ligne a un seul responsable nommé, avec sa fonction, et une ou plusieurs dates calendaires cohérentes avec l'agenda.",
    pitfall: "Inscrire une échéance qui dépend d'un tiers sans marge : les signatures de superviseurs en déplacement mettent souvent une semaine de plus. Prévoyez la dépendance et dites-la dans l'action.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 7',
    title: 'Définir la preuve de clôture et le statut (colonne « Statut / preuve »)',
    intro: "C'est ce point qui distingue un plan qui rassure un bailleur d'un plan qui l'inquiète plus que le finding original. Un point classé « clos » sans preuve documentée n'est, aux yeux d'un auditeur, pas différent d'un point resté ouvert. Vous définissez la preuve AVANT de commencer l'action.",
    steps: [
      {
        title: 'Choisir la preuve',
        actions: [
          "Pour chaque action, nommez le document qu'un tiers acceptera : procédure signée et diffusée, liste de présence, contrôle documenté, extrait d'outil daté.",
          "Écrivez-la dans la colonne dès maintenant.",
        ],
      },
      {
        title: 'Renseigner le statut',
        actions: [
          "Au départ : « Ouvert — preuve attendue : … ». En cours de route : « En cours ». À la fin seulement : « Clos le [date] — preuve : [fichier] — vérifié par [nom] ».",
          "Indiquez où la preuve sera rangée : 08_Audits-Precedents/2026-Mission-FSG/Preuves/F1.",
        ],
      },
    ],
    table: {
      columns: ['Type d\'action', 'Preuve de clôture typique'],
      rows: [
        ['Nouvelle procédure ou contrôle', 'Procédure signée et datée, e-mail de diffusion, première fiche de contrôle remplie'],
        ['Formation', 'Liste de présence signée, support utilisé, test de compréhension'],
        ['Contrôle croisé', 'Fiche de contrôle signée sur deux périodes consécutives'],
        ['Reconstitution de pièce', 'Document daté de son vrai jour + note explicative signée'],
        ['Inventaire physique', 'Feuilles de comptage signées par site + registre mis à jour + photos des étiquettes'],
      ],
    },
    example: {
      title: 'Colonne « Statut / preuve » — ligne F1 au dépôt du plan',
      lines: [
        "« Ouvert. Preuves attendues : 11 feuilles signées datées du jour réel avec note de justification ; liste de clôture de paie modifiée et signée par Grace M. ; liste de présence de la formation. Dossier : …/Preuves/F1. »",
      ],
    },
    result: "Chaque ligne indique une preuve précise, un statut honnête et le dossier de classement ; aucune case n'est « Clos » avant que la preuve existe.",
    pitfall: "Écrire « En cours » seul, comme dans la ligne d'exemple du template : sans preuve attendue, le statut ne dit rien et rien ne permet de vérifier plus tard que l'action a bien eu lieu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 7',
    title: 'Contrôler la qualité du plan et le transmettre sous 5 jours ouvrés',
    intro: "Le plan est prêt à être relu. Un plan transmis dans les 5 jours ouvrés après réception du rapport, même incomplet sur certains points en investigation, est toujours mieux perçu qu'un silence de plusieurs semaines. Fil rouge : vendredi 16 octobre, relecture ; lundi 19 octobre, envoi.",
    steps: [
      {
        title: 'Contrôler ligne par ligne',
        actions: [
          "Passez chaque ligne au crible des quatre éléments : constat précis, action concrète, responsable nommé, délai vérifiable avec preuve.",
          "Vérifiez que chaque finding du rapport et chaque recommandation de la management letter a sa ligne.",
          "Vérifiez qu'aucune cellule n'est vide ni écrite en verbes vagues (sensibiliser, renforcer, veiller).",
        ],
      },
      {
        title: 'Faire valider',
        actions: [
          "Grace M. relit et challenge. Théodore W. valide au nom de la Direction Pays : le plan engage l'organisation.",
          "Si une cause est encore en investigation, écrivez : « Investigation en cours — cause racine et action confirmées au plus tard le [date] » plutôt que d'attendre.",
        ],
      },
      {
        title: 'Transmettre et archiver',
        actions: [
          "Envoyez le plan en PDF à Fondation Sigma, avec copie à Mont-Goma Audit si demandé, avant la date limite.",
          "Conservez l'accusé de réception et classez le tout dans 08_Audits-Precedents/2026-Mission-FSG/Plan-d-action.",
        ],
      },
    ],
    example: {
      title: "E-mail de transmission du lundi 19 octobre 2026",
      lines: [
        "Objet : Plan d'action correctif — Audit du Projet Santé Nord-Kivu (rapport du 12/10/2026)",
        "Madame, Monsieur, veuillez trouver ci-joint le plan d'action de KAS Goma relatif aux quatre findings du rapport (F1 à F4). Chaque ligne précise la cause racine, l'action, le responsable nommé, l'échéance et la preuve de clôture.",
        "Nous vous adresserons une mise à jour le 6 novembre, puis chaque mois jusqu'à la clôture documentée de toutes les actions. Cordialement, Théodore W., Directeur Pays, et Grace M., Finance Manager.",
      ],
    },
    result: "Un plan relu, validé par la Direction Pays, envoyé le 19 octobre avec accusé de réception, et un calendrier de mises à jour annoncé au bailleur.",
    pitfall: "Attendre d'avoir « tout résolu » avant d'envoyer. Le bailleur lit le silence comme un manque d'intérêt. Envoyez à temps, marquez les points en investigation, et tenez la date de confirmation annoncée.",
  },

  // ─────────────── PROCÉDURE 5 — Prioriser, escalader, suivre jusqu'à la preuve ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Construire la grille de priorisation des findings',
    intro: "Le rapport classe les findings dans l'ordre de l'auditeur. Votre plan doit les ordonner par risque : la priorisation suit le risque de récurrence et de fraude, pas l'ordre du rapport ni le seul montant en cause. Entrées : les quatre findings et leur cause racine.",
    steps: [
      {
        title: 'Noter chaque finding sur trois critères',
        actions: [
          "Récurrence : 1 = cause isolée ; 2 = pratique répandue ; 3 = cause structurelle ou finding déjà constaté.",
          "Risque de fraude ou de perte : 1 = faible ; 2 = possible ; 3 = indices.",
          "Exposition du bailleur : 1 = aucun impact financier ; 2 = coûts contestables ; 3 = remboursement ou réserve probable.",
        ],
      },
      {
        title: 'Calculer et classer',
        actions: [
          "Ouvrez un petit classeur « Priorisation » avec les colonnes A Finding, B Récurrence, C Fraude, D Exposition, E Score. En E2 saisissez =2*B2+2*C2+D2 et recopiez vers le bas.",
          "Classez : 12 à 15 = priorité 1 ; 9 à 11 = priorité 2 ; 5 à 8 = priorité 3.",
        ],
      },
    ],
    table: {
      columns: ['Finding', 'Récurrence', 'Fraude / perte', 'Exposition', 'Score', 'Priorité'],
      rows: [
        ['F1 Feuilles de temps (9 840 USD)', '3', '2', '3', '13', '1'],
        ['F4 Inventaire (déjà formulé en 2025)', '3', '2', '2', '12', '1'],
        ['F2 Mise en concurrence (3 100 USD)', '2', '2', '2', '10', '2'],
        ['F3 Rapprochement bancaire (1 250 USD)', '1', '2', '1', '7', '3'],
      ],
    },
    example: {
      title: 'Justification des notes (colonne à conserver dans le dossier)',
      lines: [
        "F1 — Récurrence 3 : tout le personnel partagé est concerné et la procédure est absente ; Fraude 2 : des estimations non signées peuvent masquer un déplacement de coûts entre bailleurs ; Exposition 3 : 9 840 USD contestables, avec un effet possible sur le projet WASH.",
        "F4 — Récurrence 3 : constat déjà formulé en 2025 et clos sans preuve ; Fraude 2 : des biens non étiquetés peuvent disparaître sans trace ; Exposition 2 : biens financés par le bailleur.",
        "F3 — Récurrence 1 : cause isolée (un virement non validé) ; Fraude 2 : un débit non enregistré doit toujours être expliqué ; Exposition 1 : montant faible, effet limité.",
      ],
    },
    result: "Un classement chiffré et justifié : F1 et F4 en priorité 1, F2 en priorité 2, F3 en priorité 3, alors que le rapport les listait dans l'ordre F1, F2, F3, F4.",
    pitfall: "Classer par ordre d'apparition ou par montant. F4 figure en dernier dans le rapport, avec un niveau « mineur », alors que c'est le seul finding répété ; F3, au contraire, ne mérite pas d'y consacrer plus de temps que son risque.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Décider : suivi local ou finding à remonter à la coordination pays et au siège',
    intro: "Un finding mineur se traite au niveau du bureau. Certains findings doivent remonter immédiatement, avant même la finalisation du plan, parce qu'ils engagent l'organisation et non le seul bureau. Vous appliquez des critères écrits, pas votre intuition. Entrées : la grille de l'étape 1 et la politique interne de KAS.",
    steps: [
      {
        title: 'Appliquer les cinq déclencheurs d\'escalade',
        actions: [
          "A. Finding répété d'un audit précédent. B. Indice de fraude ou de détournement. C. Montant contestable supérieur au seuil interne (KAS : 5 000 USD).",
          "D. Cause commune à plusieurs bureaux, projets ou bailleurs. E. Risque de réserve, de remboursement ou de gel de financement.",
          "Un seul déclencheur suffit : le finding remonte dans les 48 heures à Théodore W. et au siège.",
        ],
      },
      {
        title: 'Rédiger l\'alerte écrite',
        actions: [
          "Un seul courriel : faits chiffrés, déclencheur, risque, mesure déjà prise, demande de décision ou d'appui. Pas de commentaire sur les personnes.",
        ],
      },
    ],
    table: {
      columns: ['Finding', 'Déclencheur', 'Décision'],
      rows: [
        ['F1 Feuilles de temps', 'C (9 840 > 5 000) et D (touche aussi WASH / Agence Delta)', 'Remonter sous 48 h'],
        ['F4 Inventaire', 'A (finding répété) et recommandation R3 de 2025 déclarée close sans preuve', 'Remonter sous 48 h'],
        ['F2 Mise en concurrence', 'Aucun pour l\'instant ; D possible si la revue des 11 dossiers révèle d\'autres cas', 'Suivi local ; remonter si extension'],
        ['F3 Rapprochement bancaire', 'Aucun', 'Suivi local'],
      ],
    },
    example: {
      title: 'Alerte envoyée le 13/10/2026 à Théodore W., copie Grace M. et siège',
      lines: [
        "Objet : Audit FSG — deux findings à porter à votre connaissance (F1, F4)",
        "F1 : 11 feuilles de temps du personnel partagé sans signature, 9 840 USD imputés au Projet Santé (seuil : 5 000 USD) ; même pratique sur le projet WASH (Agence Delta), qui peut être audité à son tour.",
        "F4 : inventaire non réalisé, déjà formulé en 2025 ; recommandation déclarée close sans preuve. Risque : finding répété non résolu.",
        "Mesures : plan d'action à envoyer le 19/10, contrôle bloquant dès la paie d'octobre, inventaire le 30/11. Nous demandons un point avec le siège cette semaine.",
      ],
    },
    result: "Une décision d'escalade écrite pour chaque finding, et une alerte envoyée dans les 48 heures suivant la réception du rapport pour F1 et F4.",
    pitfall: "Attendre que le plan soit « prêt » pour prévenir. Un siège qui apprend un finding répété par le bailleur plutôt que par vous perd confiance dans toute votre remontée d'information.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Tenir la revue mensuelle du plan d\'action',
    intro: "Un plan d'action n'est pas un document qu'on remplit une fois puis qu'on archive. On le reprend à chaque revue mensuelle jusqu'à ce que toutes les actions soient closes avec preuve. Entrées : le plan v1 du 19 octobre et le dossier de preuves.",
    steps: [
      {
        title: 'Préparer la revue (30 minutes avant)',
        actions: [
          "Ouvrez le plan. Pour chaque ligne, regardez l'échéance et le dossier de preuves : l'action est-elle faite, en retard ou à risque ?",
          "Préparez les décisions à prendre : report, appui, escalade.",
        ],
      },
      {
        title: 'Tenir la revue (30 minutes avec Grace M. et les responsables)',
        actions: [
          "Chaque responsable présente son action et dépose la preuve.",
          "En cas de retard, replanifiez formellement : nouvelle date, raison écrite. Si la date a été annoncée au bailleur, écrivez-lui AVANT l'échéance.",
          "Mettez à jour la colonne « Statut / preuve », enregistrez une nouvelle version (v2, v3…) et conservez les anciennes.",
        ],
      },
    ],
    example: {
      title: 'Revue du 5 novembre 2026 (extrait de compte rendu)',
      lines: [
        "F1 : contrôle bloquant en place depuis la paie d'octobre (liste de clôture signée le 04/11) → statut « En cours », signatures et formation attendues le 20/11.",
        "F2 : revue des 11 achats de plus de 2 500 USD terminée : 2 autres dossiers n'ont que 2 devis → ajouter l'extension à l'action ; décision : escalade D à surveiller.",
        "F3 : écriture passée et suspens apuré le 03/11 (relevé rapproché) → preuve à classer ; procédure révisée à signer avant le 13/11.",
        "F4 : étiquettes commandées ; inventaire de Goma programmé le 23/11 et de Rutshuru le 26/11 → dans les temps.",
      ],
    },
    result: "Un plan v2 daté, où chaque ligne a un statut à jour, aucune date dépassée sans note, et un compte rendu de revue signé.",
    pitfall: "Ne rouvrir le plan qu'à l'approche de l'audit suivant. Les actions dérivent en silence, les preuves se perdent, et vous vous retrouvez avec un plan « clos » que vous ne pouvez plus justifier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Clôturer une action avec preuve et vérification indépendante',
    intro: "Une action n'est close que lorsque quelqu'un d'autre que son responsable a vu la preuve. C'est ce qui évite de répéter l'erreur de la recommandation R3 de 2025, déclarée close sur simple déclaration. Entrées : la preuve déposée par le responsable.",
    steps: [
      {
        title: 'Déposer et nommer la preuve',
        actions: [
          "Le responsable dépose la preuve dans 08_Audits-Precedents/2026-Mission-FSG/Preuves/F3.",
          "Nom de fichier : AAAA-MM-JJ_F3_Action-1_Nature.pdf, par exemple 2026-11-13_F3_Action-2_Procedure-rapprochement-signee.pdf.",
        ],
      },
      {
        title: 'Faire vérifier par une autre personne',
        actions: [
          "Grace M. ou vous (jamais le responsable lui-même) ouvre la preuve : correspond-elle à l'action écrite, est-elle datée, signée, complète ?",
          "Si oui, renseignez la colonne : « Clos le 13/11/2026 — preuve : 2026-11-13_F3_Action-2_… — vérifié par Grace M. ».",
        ],
      },
      {
        title: 'Relier au reste du dispositif',
        actions: [
          "Dans la checklist, mettez à jour la ligne « Plan d'action correctif precedent et preuves de cloture » : elle passe à « Disponible » quand toutes les actions sont closes avec preuve.",
          "Informez Fondation Sigma de chaque clôture significative, par e-mail, dans la mise à jour annoncée.",
        ],
      },
    ],
    example: {
      title: 'Fiche de clôture de l\'action F3-2 (nouvelle procédure de rapprochement)',
      lines: [
        "Action : ajouter à la procédure de rapprochement la revue signée sous 10 jours, l'apurement des suspens sous 30 jours et l'escalade au-delà.",
        "Preuve : procédure v3 signée de Grace M. le 12/11/2026 ; e-mail de diffusion du 13/11 à 6 destinataires ; rapprochement d'octobre signé le 09/11.",
        "Vérification : Grace M. le 13/11/2026 — preuve conforme.",
        "Statut dans le plan : Clos le 13/11/2026.",
      ],
    },
    result: "Toute action close est liée à un fichier de preuve daté, vérifié par une autre personne, et se retrouve en moins de deux minutes depuis le plan.",
    pitfall: "Cocher « Clos » sur déclaration orale du responsable. C'est exactement ce qui a produit le finding répété de 2025 sur l'inventaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Boucler la boucle : prévenir le finding répété et préparer l\'audit suivant',
    intro: "Le suivi des actions est ce qui, l'année suivante, transforme un finding en preuve que votre contrôle interne apprend de ses erreurs : c'est l'élément qui pèse le plus dans l'opinion d'un auditeur d'une année sur l'autre. Entrées : le plan clos, le rapport N et le rapport N-1.",
    steps: [
      {
        title: 'Vérifier l\'efficacité à trois mois',
        actions: [
          "Programmez un contrôle de contrôle : tirez 10 feuilles de temps de décembre, sont-elles toutes signées avant imputation ?",
          "Notez le résultat dans la fiche de revue ; si ce n'est pas le cas, rouvrez l'action.",
        ],
      },
      {
        title: 'Intégrer dans le dispositif permanent',
        actions: [
          "Ajoutez les nouveaux contrôles à la checklist et à la revue mensuelle (procédure 1).",
          "Mettez à jour le briefing de l'équipe et le dossier miroir type avec ce que la mission a révélé.",
          "Tenez un retour d'expérience d'une heure : ce qui a bien marché, les pièces qui ont manqué, les délais de réponse.",
        ],
      },
      {
        title: 'Comparer avec l\'année précédente',
        actions: [
          "Dressez le tableau des recommandations N-1 face aux findings N : aucune ne doit revenir sans explication.",
        ],
      },
    ],
    example: {
      title: 'Comparaison management letter 2025 / findings 2026 (KAS)',
      lines: [
        "R1 rapprochements signés sous 10 jours → F3 : amélioré (5 sur 6 à temps), un retard de 19 jours en mai : à surveiller.",
        "R2 seuil de mise en concurrence à 2 500 USD → F2 : politique mise à jour mais non communiquée : action de diffusion et contrôle avant paiement.",
        "R3 inventaire physique annuel → F4 : finding répété, action rouverte avec inventaire contradictoire le 30/11/2026.",
        "R4 délégations de signature → pas de finding : délégation du 12/08/2026 signée et classée.",
      ],
    },
    result: "Un tableau de comparaison N-1 / N, un contrôle d'efficacité programmé à trois mois et un dispositif permanent enrichi par les leçons de la mission.",
    tip: "Présentez la synthèse à la Direction Pays et au siège avec une phrase simple : « voici ce que l'audit a trouvé, voici ce que nous avons changé, voici les preuves ». C'est le meilleur investissement pour l'audit suivant.",
  },

  // ─────────────── 6. Cas complet résolu ───────────────
  {
    type: 'case-study',
    title: "Cas complet résolu — Le rapport d'audit du Projet Santé Nord-Kivu (1/7) : réception et inventaire",
    scenario: "Lundi 12 octobre 2026, 8 h 30. Mont-Goma Audit transmet le rapport final et la management letter du Projet Santé Nord-Kivu (période 01/01–30/06/2026). Vous avez 5 jours ouvrés pour envoyer un plan d'action ; Fondation Sigma attend une réponse formelle avant le 26 octobre. La checklist a permis une mission fluide, mais quatre findings sont à traiter. Voici la résolution, dans l'ordre, telle qu'un Finance Officer expérimenté la mène.",
    steps: [
      {
        title: 'Lire et inventorier avant toute réaction',
        actions: [
          "Lisez le rapport (38 pages) et la management letter (6 pages) en entier : opinion, puis findings.",
          "Reportez dans un tableau : référence, thème, niveau, montant, page.",
          "Comparez avec les constats provisoires du 25 septembre.",
        ],
        result: "Quatre findings confirmés, aucun fait inexact : F1 significatif, F2, F3 et F4 mineurs au rapport.",
      },
      {
        title: 'Caler le calendrier',
        actions: [
          "Jour 0 = 12/10. Alerte à la Direction Pays le 13/10 (48 heures) ; relecture le 16/10 ; envoi du plan le lundi 19/10 ; échéance du bailleur le 26/10.",
          "Planifiez la revue mensuelle du plan le 5 novembre.",
        ],
        result: "Quatre dates dans les agendas de Grace M. et de Théodore W.",
      },
    ],
    table: {
      columns: ['Élément du rapport', 'Valeur'],
      rows: [
        ['Opinion', 'Dépenses conformes, sous réserve de 9 840 USD de coûts contestés (F1)'],
        ['Dépenses auditées (janv.–juin 2026)', '118 400 USD'],
        ['Coûts contestés', '9 840 USD, soit 8,3 % des dépenses auditées'],
        ['Findings', '4 : 1 significatif (F1), 3 mineurs (F2, F3, F4 — ce dernier signalé comme déjà formulé en 2025)'],
      ],
    },
    tip: "Calculez toujours le poids des coûts contestés : 9 840 sur 118 400 USD, soit 8,3 %. C'est ce chiffre que Fondation Sigma retiendra pour décider de l'éligibilité, et il détermine le niveau d'escalade.",
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu (2/7) : les causes racines de F2, F3 et F4',
    scenario: "F1 (feuilles de temps) a été analysé en procédure 4 : aucune procédure ne conditionne l'imputation à la signature du superviseur. Vous menez maintenant, avec les personnes concernées, les trois autres analyses en 30 minutes chacune.",
    steps: [
      {
        title: 'F2 — Un seul devis sur ACH-2026-031 (avec Patrick K.)',
        actions: [
          "Pourquoi un seul devis ? Le logisticien a demandé trois offres par téléphone, deux fournisseurs n'ont pas répondu.",
          "Pourquoi n'a-t-il pas relancé ? Il appliquait l'ancien seuil de 5 000 USD, au-dessus duquel trois devis étaient exigés.",
          "Pourquoi l'ancien seuil ? La politique d'achats mise à jour en janvier (2 500 USD) n'a pas été diffusée à la logistique.",
          "Pourquoi le paiement a-t-il eu lieu ? Aucun contrôle de complétude du dossier n'est fait par la finance avant paiement.",
        ],
        result: "Cause racine : politique non diffusée et absence de contrôle de dossier avant paiement.",
      },
      {
        title: 'F3 — Suspens de 1 250 USD non apuré (avec Grace M.)',
        actions: [
          "Pourquoi le suspens a-t-il duré trois mois ? Un virement fournisseur débité le 22 avril avait été saisi en brouillon, non validé.",
          "Pourquoi n'a-t-il pas été vu ? La procédure de rapprochement ne fixe ni délai d'apurement ni seuil d'escalade.",
          "Pourquoi la signature tardive en mai ? La revue de la Finance Manager dépend de sa disponibilité, sans délai imposé.",
        ],
        result: "Cause racine : procédure de rapprochement sans délai d'apurement ni escalade, et revue sans échéance.",
      },
      {
        title: 'F4 — Inventaire non réalisé (avec Patrick K. et Théodore W.)',
        actions: [
          "Pourquoi pas d'inventaire en 2025 ? Il a été reporté en décembre pour raisons de sécurité autour de Rutshuru.",
          "Pourquoi n'a-t-il pas été reprogrammé ? La recommandation R3 a été déclarée « close » sur déclaration, sans preuve ni contrôle par la finance.",
          "Pourquoi les biens 2026 ne sont-ils pas étiquetés ? Aucune étiquette n'a été commandée : personne ne portait l'action.",
        ],
        result: "Cause racine : action déclarée close sans preuve vérifiée, et absence de porteur identifié.",
      },
    ],
    pitfall: "Arrêter l'analyse à « le logisticien a oublié ». Remplacer Patrick K. ne changerait rien : la politique n'est toujours pas diffusée et le paiement reste sans contrôle.",
  },
  {
    type: 'case-study',
    title: "Cas complet résolu (3/7) : la ligne F1 du plan d'action, colonne par colonne",
    scenario: "Voici la première ligne du tableau du template plan-action-correctif-recommandations-audit.docx, telle qu'elle est transmise à Fondation Sigma le 19 octobre.",
    steps: [
      {
        title: 'Vérifier les quatre éléments de la ligne',
        actions: [
          "Constat précis, avec chiffres : oui. Action vérifiable : oui. Responsable nommé : oui. Délai daté et preuve : oui.",
        ],
      },
    ],
    example: {
      title: 'Ligne F1 — les six colonnes',
      lines: [
        "Constat (finding) : F1 (significatif, rapport p. 6) — 11 feuilles de temps de mars à juin 2026 du personnel partagé entre projets ne portent pas la signature du superviseur ; 9 840 USD de salaires imputés au Projet Santé sur cette base.",
        "Cause racine : aucune procédure n'impose la signature du superviseur avant imputation ; la liste de clôture de paie ne contient pas ce contrôle ; les superviseurs ignorent que leur signature conditionne l'éligibilité. Même risque sur le projet WASH.",
        "Action corrective : (1) faire signer les 11 feuilles avec la date réelle de signature et une note de justification appuyée de preuves de présence ; (2) ajouter à la liste de clôture de paie le contrôle bloquant « 100 % des feuilles signées avant imputation » ; (3) former les 12 superviseurs et agents du personnel partagé.",
        "Responsable : Chantal R., responsable RH.",
        "Échéance : 6 novembre 2026 (contrôle bloquant en place) ; 20 novembre 2026 (signatures et formation terminées).",
        "Statut / preuve : Ouvert. Preuves attendues : 11 feuilles signées datées du jour réel + note ; liste de clôture de paie modifiée et signée ; liste de présence de la formation. Dossier : …/Preuves/F1.",
      ],
    },
    result: "Ligne prête à être validée par Grace M. et Théodore W.",
  },
  {
    type: 'case-study',
    title: "Cas complet résolu (4/7) : la ligne F2 du plan d'action",
    scenario: "F2 est un finding mineur au rapport, mais il révèle une cause qui touche tous les achats de plus de 2 500 USD. L'action ne s'arrête donc pas au dossier ACH-2026-031.",
    steps: [
      {
        title: 'Ce que vous décidez',
        actions: [
          "Un devis ne se refait pas après coup : le dossier ACH-2026-031 sera documenté par une note explicative, non « régularisé ».",
          "L'action principale traite la cause : diffusion de la politique et contrôle de dossier avant paiement.",
        ],
      },
    ],
    example: {
      title: 'Ligne F2 — les six colonnes',
      lines: [
        "Constat (finding) : F2 (mineur, rapport p. 8) — l'achat ACH-2026-031 (3 100 USD, fournitures médicales du Projet Santé) repose sur un seul devis au lieu de trois exigés au-dessus de 2 500 USD.",
        "Cause racine : le seuil de 2 500 USD adopté en janvier 2026 n'a pas été communiqué à la logistique, et aucun contrôle de complétude du dossier n'est fait avant paiement.",
        "Action corrective : (1) revoir les achats de plus de 2 500 USD de janvier à septembre 2026 pour mesurer l'étendue et documenter par note les dossiers non régularisables ; (2) diffuser une note de service sur les seuils, lue et signée par la logistique ; (3) exiger une checklist de dossier d'achat signée avant tout paiement.",
        "Responsable : Patrick K., logisticien.",
        "Échéance : 13 novembre 2026.",
        "Statut / preuve : Ouvert. Preuves attendues : rapport de revue des dossiers ; note de service signée ; trois premières checklists de dossier d'achat signées.",
      ],
    },
    result: "Ligne couvrant le cas, la cause et l'extension à tous les achats de plus de 2 500 USD.",
  },
  {
    type: 'case-study',
    title: "Cas complet résolu (5/7) : la ligne F3 du plan d'action",
    scenario: "F3 est le plus petit montant des quatre (1 250 USD). Il se traite vite et proprement : l'écriture, puis la procédure qui évite qu'un suspens vieillisse.",
    steps: [
      {
        title: 'Ce que vous décidez',
        actions: [
          "Vous portez vous-même l'action : c'est votre rapprochement. Grace M. valide la procédure révisée.",
          "Vous passez l'écriture et apurez le suspens dès la réponse de la banque, avant de réviser la procédure.",
        ],
      },
    ],
    example: {
      title: 'Ligne F3 — les six colonnes',
      lines: [
        "Constat (finding) : F3 (mineur, rapport p. 9) — élément en suspens de 1 250 USD au rapprochement bancaire d'avril non apuré pendant trois mois ; rapprochement de mai signé avec 19 jours de retard.",
        "Cause racine : un virement fournisseur débité le 22 avril avait été saisi en brouillon sans validation ; la procédure de rapprochement ne fixe ni délai d'apurement des suspens ni seuil d'escalade, et la revue dépend de la disponibilité de la Finance Manager.",
        "Action corrective : (1) passer l'écriture et apurer le suspens ; (2) réviser la procédure : revue signée sous 10 jours, apurement des suspens sous 30 jours, escalade au-delà ; (3) contrôler chaque mois la liste des brouillons non validés.",
        "Responsable : [Votre nom], Finance Officer.",
        "Échéance : 13 novembre 2026.",
        "Statut / preuve : Ouvert. Preuves attendues : écriture et relevé rapprochés ; procédure révisée signée de Grace M. ; rapprochement d'octobre signé avant le 10 novembre.",
      ],
    },
    result: "Ligne simple, traitée en quatre semaines, avec une preuve datée pour chacune des trois actions.",
  },
  {
    type: 'case-study',
    title: "Cas complet résolu (6/7) : la ligne F4 du plan d'action — un finding répété",
    scenario: "F4 est classé « mineur » au rapport, mais il a déjà été formulé en 2025 et la recommandation R3 avait été déclarée close sans preuve. Le plan doit reconnaître cette faille de suivi et la corriger.",
    steps: [
      {
        title: 'Ce que vous décidez',
        actions: [
          "Rouvrez R3 dans le plan d'action de l'exercice 2025 : c'est un acte de transparence qui renforce la crédibilité du nouveau plan.",
          "Prévoyez un inventaire contradictoire par site, avec deux signatures sur chaque feuille de comptage.",
        ],
      },
    ],
    example: {
      title: 'Ligne F4 — les six colonnes',
      lines: [
        "Constat (finding) : F4 (mineur au rapport, déjà formulé en 2025, management letter p. 3) — inventaire physique annuel non réalisé ; 3 ordinateurs et 2 motos (11 400 USD) acquis sur le budget Santé sans étiquette d'inventaire.",
        "Cause racine : l'inventaire de décembre 2025 a été reporté pour raisons de sécurité et jamais reprogrammé ; la recommandation R3 a été déclarée close sans preuve ni contrôle par la finance ; aucun porteur identifié.",
        "Action corrective : (1) rouvrir R3 ; (2) étiqueter tous les biens de plus de 500 USD et réaliser un inventaire physique contradictoire à Goma (23/11) et Rutshuru (26/11), feuilles de comptage signées par deux personnes ; (3) mettre à jour le registre des immobilisations ; (4) inscrire l'inventaire annuel au 30 novembre dans le calendrier de clôture.",
        "Responsable : Patrick K., logisticien.",
        "Échéance : 30 novembre 2026.",
        "Statut / preuve : Ouvert. Preuves attendues : feuilles de comptage signées par site ; photos des étiquettes ; registre à jour ; R3 close avec ces preuves, vérifiée par Grace M.",
      ],
    },
    result: "Ligne qui répare le bien constaté et la faille de suivi qui avait laissé la recommandation sans preuve.",
  },
  {
    type: 'case-study',
    title: "Cas complet résolu (7/7) : priorisation, escalade, transmission et résultat",
    scenario: "Le plan est rédigé. Il reste à prioriser, escalader, transmettre et suivre. Voici ce que vous avez fait entre le 13 octobre et le 30 novembre, et le résultat sur le Tableau de bord de la checklist.",
    steps: [
      {
        title: 'Prioriser et escalader (13 octobre)',
        actions: [
          "Scores : F1 = 13, F4 = 12, F2 = 10, F3 = 7. Déclencheurs d'escalade : F1 (9 840 USD, touche aussi WASH), F4 (finding répété).",
          "Alerte écrite à Théodore W., copie Grace M. et siège, dans les 48 heures.",
        ],
      },
      {
        title: 'Transmettre et suivre (19 octobre – 30 novembre)',
        actions: [
          "Plan v1 envoyé le 19/10 avec accusé de réception ; revues mensuelles les 5/11 et 30/11 ; clôtures vérifiées par Grace M.",
          "Actions closes avec preuve : F1 (contrôle et formation), F3, F4 (inventaires le 23 et le 26/11). F2 : actions 2 et 3 closes ; le dossier ACH-2026-031 reste documenté par une note.",
        ],
        result: "Fondation Sigma est informée à chaque étape ; aucun finding n'est classé « clos » sans preuve classée dans le dossier.",
      },
    ],
    table: {
      columns: ['Catégorie', '31/07', '30/11', 'Statut au 30/11'],
      rows: [
        ['1. Comptabilité générale', '80 %', '100 %', 'Dossier complet'],
        ['2. Achats et procurement', '60 %', '80 %', 'En cours'],
        ['3. Ressources humaines et paie', '40 %', '100 %', 'Dossier complet'],
        ['4. Trésorerie et caisses', '75 %', '100 %', 'Dossier complet'],
        ['5. Immobilisations', '66,7 %', '100 %', 'Dossier complet'],
        ['6. Accords bailleurs', '100 %', '100 %', 'Dossier complet'],
        ['7. Gouvernance', '66,7 %', '100 %', 'Dossier complet'],
        ['8. Audits précédents', '66,7 %', '100 %', 'Dossier complet'],
        ['TOTAL', '69,7 %', '97,0 %', 'En cours (1 ligne : ACH-2026-031)'],
      ],
    },
    result: "Livrables finaux du cas : checklist à 97,0 % (32 documents sur 33), plan d'action v3 avec toutes les actions closes sauf la mise en concurrence d'ACH-2026-031 documentée par note, alerte écrite, dossier de preuves et journal des mises à jour. Le Tableau de bord est passé de 69,7 % à 97,0 % en quatre mois.",
  },

  // ─────────────── 7. Exercices ───────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Mettre à jour la checklist et lire le Tableau de bord',
    instructions: "Vous tenez la checklist-preparation-dossier-audit.xlsx d'une ONG dont vous êtes Finance Officer. Au 31 octobre 2026, voici l'état réel de trois catégories après ouverture de chaque document. Renseignez les statuts, les commentaires et lisez le Tableau de bord.",
    steps: [
      {
        title: 'Catégorie 2 — Achats et procurement (5 lignes)',
        body: "Dossiers d'achat complets : le BL d'un dossier est à signer. Politique d'achats et seuils : complète. Registre des fournisseurs qualifiés : à jour. Preuves de mise en concurrence : introuvables pour 2 dossiers. Contrats et accords-cadres : aucun accord-cadre n'a été signé en 2026.",
      },
      {
        title: 'Catégorie 4 — Trésorerie et caisses (4 lignes)',
        body: "Livres de caisse : complets. Rapprochements de caisse : les comptages signés de septembre et octobre sont à ranger. Fiches d'avances : complètes. Registre des signataires bancaires : à jour.",
      },
      {
        title: 'Catégorie 6 — Accords bailleurs et budgets (4 lignes)',
        body: "Accords signés, budgets approuvés, rapports financiers soumis et correspondance officielle : tout est ouvert, vérifié et rangé.",
      },
      {
        title: 'Le travail demandé',
        actions: [
          "Choisissez le statut de chacune des 13 lignes (colonne D) et rédigez un commentaire factuel en colonne G pour toute ligne qui n'est pas « Disponible ».",
          "Calculez à la main les colonnes B, C, D, E et F du Tableau de bord pour chacune des trois catégories.",
          "Décidez quelle catégorie traiter en premier et pourquoi, en une phrase.",
        ],
      },
    ],
    tip: "Pour chaque ligne, appliquez les quatre tests de l'étape 4 de la procédure 1 (existe, couvre la période, signé et daté, rangé à l'emplacement) avant de choisir un statut.",
    pitfall: "Passer en « Non applicable » une ligne simplement parce qu'elle est difficile à remplir. « Non applicable » exige une justification factuelle en colonne G.",
    deliverable: "Les 13 lignes avec statut et commentaire, et les valeurs des trois lignes de catégorie du Tableau de bord, avec votre décision de priorité.",
  },
  {
    type: 'exercise',
    title: "Exercice 2 — Répondre à l'auditeur sans improviser",
    instructions: "Mission en cours, quatrième jour. Pour chacune des quatre situations, rédigez ce que vous dites (une à deux phrases), la ligne que vous saisissez au registre des demandes, et la personne que vous prévenez.",
    steps: [
      {
        title: 'Situation A',
        body: "Un auditeur junior vous demande : « Pouvez-vous me donner les contrats de tous les consultants du projet WASH ? » La mission porte sur le Projet Santé.",
      },
      {
        title: 'Situation B',
        body: "L'auditrice demande, à 11 h : « Quel est le solde de la caisse de Rutshuru aujourd'hui ? » Vous n'avez pas le dernier livre de caisse sous les yeux.",
      },
      {
        title: 'Situation C',
        body: "Elle montre un bon de commande de 4 200 USD qui porte la même signature en demande et en approbation : « Comment l'expliquez-vous ? » Vous ne connaissez pas l'histoire de ce dossier.",
      },
      {
        title: 'Situation D',
        body: "En préparant un document demandé, vous constatez que la facture F-2026-077 porte un montant corrigé au crayon, différent de celui de l'ordre de virement.",
      },
    ],
    tip: "Pour chaque situation, relisez la méthode Écouter – Vérifier – Répondre – Consigner et le tableau des situations délicates de l'étape 4 de la procédure 3.",
    deliverable: "Quatre réponses courtes, quatre lignes de registre (N°, demandeur, description, échéance, responsable, statut) et le nom de la personne prévenue pour chaque situation.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 (cas du module) — Audit externe annuel, Port-au-Prince : traiter trois findings',
    instructions: "Vous êtes Finance Manager d'une ONG internationale présente en Haïti depuis six ans, avec trois projets financés par deux bailleurs. L'audit financier annuel statutaire, mené par un cabinet local, vient de se conclure. Vous tenez votre checklist à jour depuis le début de l'exercice, mais le rapport reçu ce matin contient trois findings à traiter sous 10 jours ouvrés.",
    steps: [
      {
        title: 'Finding 1 — Pièce justificative manquante',
        body: "Un paiement de 1 850 USD à un fournisseur de fournitures médicales, effectué en mars, ne dispose que du bon de commande et du reçu de paiement. Le bon de livraison signé par le magasinier est introuvable dans le dossier d'achat comme dans celui de l'entrepôt.",
      },
      {
        title: 'Finding 2 — Séparation des tâches insuffisante',
        body: "Pour cinq achats testés entre janvier et avril, la même personne — l'Assistant Logistique du bureau régional des Cayes — a initié la demande d'achat ET l'a approuvée, en l'absence du Coordinateur Terrain (congé médical de six semaines) et sans délégation formelle de signature.",
      },
      {
        title: 'Finding 3 — Écart de caisse non expliqué',
        body: "Lors du comptage physique en présence de l'auditeur au bureau des Cayes, un écart de 42 USD a été constaté entre le solde théorique du livre de caisse et le comptage. Le caissier n'a pas pu l'expliquer ; le dernier rapprochement formel date de trois semaines avant la visite.",
      },
      {
        title: 'Partie 1 — Analyse de cause racine',
        actions: [
          "Pour chaque finding, formulez en 2 à 3 phrases l'hypothèse de cause racine la plus probable, en vous appuyant sur le contexte (absence prolongée du Coordinateur, dernier rapprochement vieux de trois semaines). Pas de copier-coller de l'auditeur.",
        ],
      },
      {
        title: 'Partie 2 — Plan d\'action correctif',
        actions: [
          "Remplissez plan-action-correctif-recommandations-audit.docx avec les trois findings : constat, cause racine, action corrective, responsable nommé par fonction, échéance datée, statut avec preuve.",
          "Vérifiez chaque ligne avec les quatre éléments : action concrète et vérifiable (jamais « renforcer la sensibilisation »), responsable nommé, date, preuve de clôture.",
        ],
      },
      {
        title: 'Partie 3 — Priorisation',
        actions: [
          "Indiquez lequel des trois findings est le plus urgent et pourquoi, en raisonnant sur le risque de récurrence et de fraude plutôt que sur le seul montant.",
          "Appliquez les cinq déclencheurs d'escalade : quel finding remonte au siège ?",
        ],
      },
    ],
    tip: "Utilisez la grille de la procédure 5 : Score = 2 × Récurrence + 2 × Fraude + Exposition. Notez chaque finding de 1 à 3 sur chaque critère avant de comparer.",
    pitfall: "Désigner l'Assistant Logistique des Cayes comme responsable de la correction de sa propre rupture de séparation des tâches, ou écrire « sensibiliser l'équipe » comme action. Ni l'un ni l'autre ne se vérifie.",
    deliverable: "Le plan d'action correctif complété pour les trois findings, la grille de priorisation chiffrée, et une note d'une demi-page justifiant votre priorisation.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercices 1 à 3)',
    items: [
      "Ex. 1 — Catégorie 2 : « Non applicable » pour les contrats et accords-cadres, avec la justification « aucun accord-cadre signé en 2026 » ; BL à signer = « A rassembler » ; preuves de mise en concurrence introuvables = « Manquant ».",
      "Ex. 1 — Catégorie 2 : requis 4, disponibles 2, 50 %, manquants 1, statut « A COMPLETER ». Catégorie 4 : requis 4, disponibles 3, 75 %, manquants 0, « En cours ». Catégorie 6 : requis 4, disponibles 4, 100 %, « Dossier complet ».",
      "Ex. 1 — La catégorie 2 est traitée en premier, parce qu'elle contient un « Manquant ».",
      "Ex. 2 — A : vous ne répondez pas, notez la demande « hors périmètre » et la soumettez à Grace M. pour confirmation écrite. B : « Je vérifie le dernier comptage et je vous réponds avant 14 h » ; vous ne donnez aucun solde de mémoire.",
      "Ex. 2 — C : vous notez la question, vérifiez le dossier, et la transmettez au Finance Manager : vous ne devinez pas. D : vous conservez la facture en l'état, ne la modifiez pas, et alertez immédiatement le Finance Manager et le Directeur Pays.",
      "Ex. 2 — Chaque ligne de registre porte un numéro, un demandeur, une description exacte, une échéance et un responsable.",
      "Ex. 3 — F1 : cause = le bon de livraison n'est pas exigé avant le paiement ; actions = obtenir un duplicata signé et une attestation de réception datée du jour réel, puis rendre le BL signé obligatoire avant tout paiement.",
      "Ex. 3 — F2 : cause = absence de délégation écrite pendant le congé et système permettant la même personne d'initier et d'approuver ; actions = délégation écrite avant toute absence, blocage dans le système, revue des cinq achats par le Coordinateur ou le Finance Manager ; responsable : ni l'Assistant Logistique ni son équipe.",
      "Ex. 3 — F3 : cause = rapprochement de caisse trop espacé, sans comptage surprise ni procédure d'investigation d'écart ; actions = comptage physique hebdomadaire signé, comptage surprise mensuel, procédure d'écart, extension aux autres bureaux.",
      "Ex. 3 — Priorisation : F2 d'abord (risque de fraude et de récurrence, rupture depuis six semaines), puis F3, puis F1 ; justification qui n'invoque pas le montant seul (le plus gros montant est F1).",
      "Ex. 3 — Chaque ligne du plan a un responsable nommé, une date calendaire et une preuve de clôture ; aucune action n'est « sensibiliser » ou « renforcer ».",
    ],
  },

  // ─────────────── 8. Erreurs de terrain ───────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Réunir les pièces seulement quand l'auditeur les demande. Parade : tenir la checklist à jour à chaque clôture mensuelle ; reconstituer six mois de rapprochements en une semaine donne toujours un travail de moins bonne qualité.",
      "Répondre à une question sans vérifier les faits. Parade : la méthode Écouter – Vérifier – Répondre – Consigner et la phrase « Je vérifie et je reviens vers vous ».",
      "Classer une action « close » sans échéance vérifiable ni preuve. Parade : définir la preuve avant de commencer l'action, et faire vérifier la clôture par une autre personne.",
      "Classer les findings dans l'ordre du rapport ou par montant. Parade : la grille Score = 2 × Récurrence + 2 × Fraude + Exposition, et les cinq déclencheurs d'escalade.",
      "Corriger le symptôme sans documenter la cause racine ni couvrir l'équipe concernée. Parade : les 5 pourquoi avec les personnes concernées et une action en trois niveaux : cas, cause, extension.",
      "Antidater ou fabriquer un document manquant. Parade : le reconstituer avec sa vraie date et la mention « Établi le … en remplacement de … », ou rédiger une note explicative signée.",
      "Cocher « Disponible » de mémoire. Parade : les quatre tests (existe, couvre la période, signé et daté, rangé) et la date de vérification en colonne F.",
      "Donner à l'auditeur l'accès à tout le dossier partagé, ou modifier des écritures pendant la mission. Parade : un dossier miroir en lecture seule limité au périmètre, et toute correction par régularisation documentée.",
    ],
  },

  // ─────────────── 9. Récapitulatif + checklist ───────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez installé la checklist du dossier d'audit de KAS (33 documents requis, 8 catégories), avec un responsable nommé par ligne, des statuts vérifiés et un Tableau de bord lu : de 69,7 % à 97,0 % de complétude en quatre mois.",
      "Vous avez organisé un dossier partagé numéroté comme les catégories de la checklist, avec une nomenclature de fichiers unique, une revue mensuelle et un test de piste d'audit trimestriel.",
      "Vous avez préparé une mission annoncée en six semaines : fiche de cadrage, copie « mission » de la checklist, traitement honnête des manquants, dossier miroir et briefing signé.",
      "Vous avez conduit la mission : réunion d'ouverture, registre des demandes, méthode de réponse, situations délicates, point quotidien et réunion de clôture.",
      "Vous avez rédigé un plan d'action correctif complet de quatre findings, avec le template .docx : constat, cause racine, action vérifiable, responsable nommé, échéance datée, preuve de clôture.",
      "Vous avez priorisé les findings par une grille chiffrée, appliqué les déclencheurs d'escalade et envoyé une alerte écrite à la Direction Pays et au siège.",
      "Vous avez suivi le plan chaque mois, clôturé chaque action avec preuve vérifiée et comparé les findings aux recommandations de l'audit précédent.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer ce qu'un auditeur externe cherche réellement, et distinguer un audit statutaire, un audit de projet/bailleur, un Single Audit et un spot-check.",
      "Ma checklist du dossier d'audit est à jour, chaque ligne a un responsable nommé, un statut vérifié et une date de vérification, et je sais lire son Tableau de bord.",
      "Je sais demander le scope et les termes de référence d'une mission avant de préparer quoi que ce soit.",
      "Mon dossier partagé est organisé par catégorie, avec une nomenclature de fichiers unique, et je sais construire un dossier miroir limité au périmètre.",
      "Je sais répondre à une question d'auditeur sans improviser et sans sur-expliquer, et je tiens un registre des demandes.",
      "J'ai rempli le plan d'action correctif d'un cas à trois findings avec le template fourni.",
      "Chaque action de mon plan a une cause racine réelle, une action vérifiable, un responsable nommé, une date et une preuve de clôture.",
      "Je sais décider si un finding reste au niveau du bureau ou remonte immédiatement à la Direction Pays et au siège.",
      "Je sais clôturer une action avec une preuve vérifiée par une autre personne que son responsable.",
    ],
  },

  // ─────────────── 10. Clôture ───────────────
  {
    type: 'closing',
    nextModuleHint: "Prochain module : Module 07 — Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé. Vous y verrez comment sortir du logiciel comptable, en quelques minutes, les journaux, le grand livre et les états que l'auditeur vous demande dès le premier jour, et comment automatiser avec Excel avancé les contrôles que vous venez de mettre en place à la main : suivi des suspens bancaires, vérification des feuilles de temps, tableaux de bord de complétude.",
  },
]
