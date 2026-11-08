// Module 02 — Cycle Complet des Achats — De la RFQ à la PO
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Cycle Complet des Achats — De la RFQ à la PO',
    hook: "Vous allez apprendre à choisir la bonne procédure d'achat selon le montant et le besoin réel — et à repérer, dans un jeu d'offres, les signes d'une fraude qu'un fournisseur habile croit indétectable. Un réflexe qui protège votre projet autant que vous-même en cas d'audit.",
  },
  {
    type: 'objectives',
    items: [
      "Distinguer RFQ (demande de cotation), RFP (appel à propositions), ITB (appel d'offres formel) et AMI (appel à manifestation d'intérêt) selon le seuil d'achat et la nature du besoin, et choisir la bonne procédure sans hésitation.",
      "Faire fonctionner un Comité de Validation des Achats (CPC, l'organe qui décide quel fournisseur retenir au-dessus d'un certain montant) dans le respect du quorum et de la séparation des tâches.",
      "Produire une analyse comparative des offres (CBA) qui résiste à un audit bailleur (l'organisme qui finance le projet), formule de pondération à l'appui.",
      "Repérer, dans un jeu d'offres réel, les indices de collusion entre soumissionnaires — des fournisseurs censés être concurrents qui s'entendent secrètement sur les prix.",
      "Constituer un dossier d'achat archivable et traçable, de la demande initiale jusqu'au paiement.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi les seuils d\'autorisation existent',
    body: [
      "La première chose qu'on vous dit sur un poste achats, c'est une liste de seuils en dollars. Présentée comme ça, elle ressemble à de la bureaucratie. Elle n'en est pas : chaque seuil existe pour réduire l'opportunité de fraude en multipliant le nombre de personnes qui doivent regarder une transaction avant qu'elle ne se conclue.",
      "C'est le principe du triangle de la fraude appliqué aux achats : une fraude a besoin d'une opportunité, d'une pression et d'une rationalisation. On ne peut rien faire contre la pression ou la justification personnelle d'un collègue — mais on peut supprimer l'opportunité. Un achat où une seule personne exprime le besoin, choisit le fournisseur, valide le prix et signe le paiement est un achat à opportunité de fraude maximale.",
    ],
    highlight: 'Plus le montant grandit, plus le nombre de personnes qui doivent converger avant la décision doit grandir avec lui.',
  },
  {
    type: 'comparison-table',
    title: "Les 4 paliers d'achat",
    columns: ['Palier', 'Montant indicatif', 'Procédure', 'Qui valide'],
    rows: [
      ['1 — Achat direct', "Jusqu'à ~1 000 USD", 'Comparaison informelle, une seule cotation possible si justifiée par écrit', 'Logisticien terrain'],
      ['2 — Consultation restreinte', '~1 000 à 25 000 USD', 'RFQ — minimum 3 devis écrits obligatoires', 'Log Manager + validation budgétaire programme'],
      ['3 — Appel d\'offres formel', '~25 000 à 100 000 USD', 'RFP ou ITB — critères figés, ouverture des plis en comité', 'CPC (comité de validation des achats)'],
      ['4 — Achat stratégique', 'Au-delà de ~100 000 USD', 'Appel d\'offres international, souvent co-validé par le siège', 'CPC + validation siège / bailleur'],
    ],
  },
  {
    type: 'comparison-table',
    title: 'RFQ, RFP, ITB, AMI : quatre outils, pas quatre synonymes',
    columns: ['Critère', 'RFQ', 'RFP', 'ITB (Appel d\'Offres)', 'AMI'],
    rows: [
      ['Utilisé pour', 'Biens standards, spécifications déjà fixes', "Services ou biens complexes où l'approche technique compte autant que le prix", 'Achats de forte valeur, biens homogènes et bien définis', 'Explorer un marché mal connu, avant un achat complexe ou un accord-cadre'],
      ['Seuil typique', 'Palier 2', 'Palier 3', 'Palier 3 à 4', 'Aucun seuil propre — étape de présélection'],
      ['Demandé au fournisseur', 'Un prix ferme, directement comparable', 'Une proposition technique et financière, évaluée par pondération', 'Une offre ferme sous pli scellé', 'Une preuve de capacité — jamais un prix ferme'],
      ['Exemple terrain', 'Achat de 200 moustiquaires imprégnées', "Recrutement d'un bureau d'études pour un forage", "Construction d'un entrepôt régional de 500 m²", 'Présélectionner des transporteurs avant un accord-cadre régional'],
    ],
  },
  {
    type: 'warning',
    title: 'Deux confusions classiques entre procédures',
    items: [
      "Lancer une RFQ pour un achat qui aurait dû être une ITB \"parce que c'est plus rapide\" — le premier point relevé par un audit bailleur qui compare le montant dépensé au type de procédure utilisée.",
      "Confondre un AMI avec une RFQ déguisée — un AMI n'engage jamais un fournisseur sur un prix ferme, il sert à présélectionner une shortlist. \"Retenir\" un prix reçu en réponse à un AMI, sans mise en concurrence formelle derrière, est une non-conformité fréquente et facilement repérée en audit.",
    ],
  },
  {
    type: 'process',
    title: "Structure type d'une RFP (appel à propositions)",
    steps: [
      { title: 'Contexte et objectif du besoin', body: 'Sans présupposer la solution technique.' },
      { title: 'Description de la solution recherchée', body: "Ce que le résultat doit permettre, les contraintes non négociables, et ce qui reste ouvert à la proposition du fournisseur." },
      { title: 'Critères d\'évaluation techniques et financiers, avec pondération', body: 'Figés avant réception des offres.' },
      { title: 'Modalités de soumission', body: 'Délai, format (souvent double enveloppe technique/financière), documents obligatoires.' },
      { title: 'Calendrier de la procédure', body: 'De la publication à la notification.' },
      { title: 'Conditions générales', body: "Communiquées dès la RFP pour qu'aucun soumissionnaire ne découvre après coup des conditions qu'il n'aurait pas acceptées." },
    ],
  },
  {
    type: 'concept',
    title: 'Le contrat-cadre : sécuriser prix et délais sans réengager une procédure',
    body: [
      "Un contrat-cadre fixe, avec un fournisseur qualifié, les conditions (prix, délais, spécifications) d'une série d'achats récurrents sur une période donnée — au lieu de relancer une RFQ complète à chaque besoin. C'est l'instrument à choisir quand un besoin se répète (papeterie, carburant, petit matériel médical récurrent).",
      "Clauses essentielles : une durée avec date de révision explicite ; des volumes indicatifs clairement non engageants (un ordre de grandeur, jamais une quantité minimale garantie) ; des modalités de prix et de révision de prix ; une clause de sortie précisant le préavis applicable.",
    ],
    highlight: 'Ce module montre comment structurer un contrat-cadre au moment de le choisir. Sa gestion dans la durée — revue de performance, renouvellement, remise en concurrence partielle — est couverte par le Module 04.',
  },
  {
    type: 'concept',
    title: "Le CPC : pourquoi une seule signature est un signal d'alerte",
    body: [
      "Le CPC (Comité de Validation des Achats) est l'organe qui examine la CBA et décide quel fournisseur retenir, au-dessus du seuil de consultation restreinte. Sa raison d'être n'est pas de ralentir l'achat : c'est de garantir qu'aucune décision significative ne repose sur le jugement d'une seule personne.",
      "Un CPC qui fonctionne respecte 3 règles : un quorum minimum de 3 membres dont un profil finance/compliance et un profil technique ou programme ; une séparation des tâches où la personne qui a exprimé le besoin ou négocié avec les fournisseurs n'est jamais seule décisionnaire ; une décision documentée et signée par tous les membres présents, avec justification écrite du choix.",
    ],
    highlight: "Un procès-verbal de CPC signé par une seule personne, ou par des membres qui n'ont manifestement pas de rôle dans l'achat, est statistiquement l'indicateur le plus corrélé à une fraude d'achat — souvent la première chose qu'un auditeur regarde, avant même les prix.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'PR (Purchase Requisition)', definition: "La demande d'achat initiale émise par le programme, point de départ officiel du cycle d'achat." },
      { term: 'CBA (Comparative Bid Analysis)', definition: "L'analyse comparative des offres reçues, avec pondération prix/technique — le document que le CPC examine, jamais les offres brutes une par une." },
      { term: 'PO (Purchase Order)', definition: 'Le bon de commande, engagement contractuel formel envers le fournisseur retenu.' },
      { term: 'PV de négociation', definition: "Le compte-rendu documenté des points négociés et de l'accord final obtenu avec le fournisseur, avant émission de la PO." },
      { term: '3-way match', definition: "Le rapprochement à trois entre la PO, le bon de réception des biens (GRN) et la facture fournisseur, avant tout paiement." },
      { term: 'Purchase splitting', definition: "Fractionnement frauduleux d'un achat en plusieurs commandes pour rester sous un seuil d'autorisation — la fraude la plus classique et la plus facilement détectée en audit." },
    ],
  },
  {
    type: 'process',
    title: "De l'expression du besoin à l'émission de la PO",
    steps: [
      { title: 'Recevoir et valider la PR', body: 'Spécifications précises, quantité, budget vérifié — une PR verbale ou informelle n\'est pas une PR.' },
      { title: 'Déterminer le seuil et la procédure applicable', body: 'Sur la base du montant total estimé, jamais fractionné.' },
      { title: "Figer les critères d'évaluation avant tout contact fournisseur", body: 'Poids prix/technique, spécifications minimales, avant l\'envoi de la consultation — sinon la porte est ouverte à un ajustement en faveur d\'un fournisseur déjà pressenti.' },
      { title: 'Lancer la consultation', body: 'À un minimum de 3 fournisseurs qualifiés, avec les mêmes spécifications et le même délai pour tous.' },
      { title: "Réceptionner les offres sans les ouvrir isolément", body: "Registre d'ouverture, au moins deux personnes présentes pour une ITB." },
      { title: 'Remplir la grille CBA', body: 'Prix, délai, conformité technique — en examinant chaque commentaire fournisseur pour repérer un signal de collusion.' },
      { title: 'Convoquer le CPC et documenter la décision', body: "La CBA est une aide à la décision, elle ne décide pas automatiquement à la place du comité." },
      { title: 'Négocier, émettre la PO et archiver le dossier complet', body: "PV de négociation, PO référençant la PR et le PV du CPC, rapprochement PO/GRN/facture avant paiement (3-way match), dossier complet archivé de la PR au paiement." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas pratique — Achat urgent d\'un générateur, projet santé, Beni, RDC',
    scenario: "Le générateur qui alimente la chaîne du froid des vaccins et le bloc d'urgences d'un centre de santé est tombé en panne. Sans générateur sous 5 jours, les stocks devront être transférés en urgence. Le montant estimé (35 000 USD) place ce dossier au-dessus du seuil de consultation restreinte : une RFQ formelle avec passage en CPC est obligatoire. Trois offres arrivent : deux affichent un prix strictement identique au dollar près, pour le même modèle de générateur, avec le même numéro de contact — seul le nom de l'entreprise change sur l'en-tête. La troisième, plus chère mais avec un contact différent et une garantie supplémentaire, est la seule à représenter une mise en concurrence réellement indépendante.",
    steps: [
      "Reconnaître le signal de collusion : prix identique au centime près et contact identique entre deux \"fournisseurs\" différents.",
      'Construire une CBA qui documente explicitement cette alerte, pas seulement le prix le plus bas.',
      "Réunir le CPC et documenter la décision d'écarter l'une des deux offres suspectes malgré son prix plus bas.",
      "Recommander de signaler le cas à son référent compliance/anti-fraude, avant l'échéance de 5 jours.",
    ],
  },
  {
    type: 'exercise',
    title: 'Grille CBA et procès-verbal de CPC',
    instructions: "En vous inspirant de la structure de cas-pratique-analyse-comparative-offres-cba.xlsx (colonnes Prix unitaire / Prix total / Commentaire par fournisseur), construisez votre CBA avec les trois offres du cas du générateur de Beni, en identifiant explicitement les éléments qui alertent (prix identique, contact identique). Rédigez ensuite le PV avec pv-comite-achats-cpc.docx, en simulant une réunion à 3 membres, documentant la décision d'écarter l'une des offres suspectes et la recommandation de signalement.",
    deliverable: 'Les deux fichiers complétés — la décision documentée ne doit jamais se limiter à \"offre la moins chère retenue\".',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (achats)',
    items: [
      "Fractionner l'achat pour rester sous le seuil (\"purchase splitting\") — la fraude la plus classique du secteur, systématiquement détectée en audit par croisement des commandes.",
      "Accepter une offre unique \"pour cause d'urgence\" — l'urgence justifie au maximum un délai de réponse raccourci, jamais l'absence de mise en concurrence.",
      "Ouvrir les offres avant d'avoir figé les critères d'évaluation — décider après coup ce qui compte le plus est un ajustement rétroactif des règles.",
      "Traiter une facture pro forma unique comme une preuve suffisante de \"meilleur prix\" — sans au moins 2 autres offres documentées, le prix affiché ne prouve rien.",
      "Modifier les spécifications techniques après réception des offres pour faire mécaniquement gagner un fournisseur déjà pressenti.",
    ],
  },
  {
    type: 'recap',
    items: [
      'Je sais choisir entre RFQ, RFP, ITB et AMI selon le montant et la nature du besoin.',
      'Je peux expliquer pourquoi les seuils d\'autorisation existent, au-delà de la règle administrative.',
      'Je sais réunir un CPC dans le respect du quorum et de la séparation des tâches.',
      'Je sais construire une CBA avec pondération prix/technique et repérer au moins 3 indices de collusion.',
      'Je sais quels documents doivent figurer dans un dossier d\'achat complet, de la PR au paiement.',
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 03 — Techniques de Négociation en Profondeur.',
  },
]
