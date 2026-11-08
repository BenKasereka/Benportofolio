// Module 05 — Rapports Financiers pour Bailleurs
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Rapports Financiers pour Bailleurs',
    hook: "Un rapport financier bailleur n'est jamais un simple exercice comptable de fin de trimestre : c'est ce qui décide si votre organisation garde ou perd la confiance de qui la finance. Ce module vous donne la méthode pour produire un rapport qui tient face à un auditeur, dans le format exact que chaque bailleur attend.",
  },
  {
    type: 'objectives',
    items: [
      "Produire un rapport financier structuré selon les attentes types d'un bailleur institutionnel (USAID/BHA ou UE/ECHO).",
      "Justifier n'importe quelle dépense de projet avec le jeu de pièces comptables complet exigé par l'auditeur — le contrat, la facture et la preuve de paiement, qui doivent raconter la même histoire (le « 3-way match »).",
      "Réconcilier un rapport financier avec le rapport programmatique (le rapport narratif qui décrit les activités et les résultats) correspondant avant toute soumission.",
      "Distinguer les exigences de format, de devise et de délai propres à chaque grand bailleur pour ne pas les confondre.",
      "Anticiper le cycle de clôture comptable mensuelle de votre organisation pour ne jamais découvrir une échéance bailleur la veille de sa date limite.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi chaque bailleur impose son propre format',
    body: "Chaque format de rapport financier existe parce que le bailleur doit lui-même rendre des comptes — à son Parlement, à son Congrès, à ses États membres, à ses contribuables. Le format que vous remplissez n'est jamais la fin de la chaîne : c'est un maillon d'une chaîne de traçabilité de fonds publics qui remonte jusqu'à un citoyen qui paie ses impôts.",
    highlight: "Ne partez jamais du principe qu'un format vu chez un bailleur vous servira chez un autre. Vérifiez l'annexe qui décrit le format de rapportage exigé dès la signature de l'accord, avant même le premier décaissement.",
  },
  {
    type: 'comparison-table',
    title: 'Trois familles de format cohabitent sur le terrain',
    columns: ['Bailleur', 'Format exigé', 'Particularité'],
    rows: [
      ['USAID/BHA', 'SF-425 (Federal Financial Report)', "Formulaire fédéral court (1 à 2 pages), en comptabilité d'engagement, soumis trimestriellement — mais engage votre signature légale sur chaque montant."],
      ['UE/ECHO', 'Single Form (portail e-SF/APPEL)', "Rapport financier intégré au rapport narratif, structuré par grandes rubriques, avec 10 % de flexibilité budgétaire entre rubriques sans avenant, et un taux de change fixe défini au démarrage."],
      ['Agences onusiennes (PAM, UNICEF, HCR)', 'FACE form (cadre HACT)', 'Format harmonisé inter-agences qui certifie les dépenses par rapport aux avances de trésorerie reçues, ligne budgétaire par ligne budgétaire.'],
    ],
  },
  {
    type: 'stat-callout',
    stat: '10 %',
    caption: 'Flexibilité budgétaire ECHO entre rubriques, sans avenant formel',
    context: "Au-delà de ce seuil, un amendement au contrat devient obligatoire — une règle spécifique à ECHO, pas une norme universelle entre bailleurs.",
  },
  {
    type: 'concept',
    title: 'Le principe du 3-way match',
    body: [
      "Qu'il s'agisse d'un audit USAID, d'une vérification ECHO ou d'un contrôle interne, la question posée face à une dépense est toujours la même : prouvez que cet argent a été dépensé exactement comme prévu, pour ce qui était prévu, au prix convenu.",
      "Le 3-way match recoupe trois documents qui doivent raconter rigoureusement la même histoire : le contrat ou bon de commande (ce qui a été commandé), la facture du fournisseur (ce qui a été livré ou presté), et la preuve de paiement (le décaissement réel).",
    ],
    highlight: "Si un seul des trois documents manque, ou si les montants ne se recoupent pas sans explication écrite, la dépense est inéligible aux yeux d'un auditeur — même si l'argent a réellement servi le projet sur le terrain.",
  },
  {
    type: 'concept',
    title: 'Pourquoi finance et programme doivent raconter la même histoire',
    body: [
      "Exemple type : le rapport narratif annonce 4 200 ménages desservis, pendant que le rapport financier ne reflète que le coût de 3 500 kits — parce que le chiffre de bénéficiaires a été mis à jour côté programme sans en informer la finance.",
      "Un bailleur qui repère cette incohérence ne se dit pas \"erreur de communication interne\". Il se dit : soit l'organisation ne sait pas compter ses bénéficiaires, soit elle ne sait pas compter son argent.",
    ],
    highlight: "Cette perte de confiance ne se limite jamais au rapport concerné : elle contamine l'ensemble de la relation avec le bailleur, jusqu'aux prochains cycles de financement.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'SF-425', definition: "Federal Financial Report, formulaire standard de rapportage financier des awards USAID, soumis en comptabilité d'engagement." },
      { term: 'Single Form / e-SF', definition: "Outil de rapportage narratif ET financier intégré d'ECHO, soumis via le portail APPEL en ligne." },
      { term: 'FACE form', definition: "Funding Authorization and Certificate of Expenditures — format harmonisé de certification des dépenses des agences onusiennes (cadre HACT)." },
      { term: '3-way match', definition: "Recoupement obligatoire contrat/bon de commande → facture → preuve de paiement pour qu'une dépense soit éligible." },
      { term: 'Règle de flexibilité budgétaire', definition: "Marge autorisée par un bailleur (10 % chez ECHO, seuils variables ailleurs) pour transférer des fonds d'une rubrique à une autre sans avenant formel." },
      { term: 'Réconciliation finance-programme', definition: "Vérification croisée, avant soumission, que les chiffres du rapport financier et les résultats du rapport narratif racontent la même réalité de terrain." },
    ],
  },
  {
    type: 'process',
    title: 'Préparer et soumettre un rapport financier bailleur sans mauvaise surprise',
    steps: [
      { title: "Rassembler toutes les pièces comptables avant d'ouvrir le format bailleur", body: "Extrayez l'intégralité des écritures de la période et vérifiez que chacune porte son code d'imputation complet (projet, bailleur, rubrique)." },
      { title: 'Vérifier le 3-way match sur un échantillon représentatif', body: "Priorisez les dépenses les plus élevées et les achats atypiques — c'est exactement là que portera un audit externe." },
      { title: 'Compléter le gabarit bailleur ligne par ligne', body: "Le solde disponible et le pourcentage de consommation se calculent automatiquement ; une ligne en dépassement déclenche une correction ou une demande d'avenant, jamais une soumission telle quelle." },
      { title: 'Croiser avec le rapport programmatique', body: "Vérifiez que les volumes annoncés, les dates d'activités et les mises à jour de chiffres concordent entre narratif et financier — signature conjointe finance et programme." },
      { title: 'Faire relire par un second regard', body: "Une personne qui n'a pas construit le rapport attrape les erreurs de recopie, les formules cassées, les rubriques mal alignées." },
      { title: 'Soumettre dans les délais et archiver le jeu de pièces complet', body: 'Respectez le format de fichier et la nomenclature exigés, puis archivez le rapport soumis et toutes les pièces — un audit peut intervenir des années plus tard.' },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Soumettre un rapport financier sans l'avoir croisé avec le rapport narratif correspondant — ce cloisonnement crée exactement l'incohérence qu'un auditeur repère en quelques minutes.",
      "Pièces justificatives incomplètes découvertes seulement après soumission — le rapport est déjà parti, et la dépense reste vulnérable à un rejet d'audit ultérieur.",
      "Rater un délai bailleur par manque d'anticipation du cycle de clôture comptable mensuelle — cette marge doit être connue dès la signature du contrat, pas découverte à la première échéance qui approche.",
      "Corriger un chiffre sans documenter pourquoi — un rapport dont les chiffres concordent sans explication documentée est presque aussi suspect, en audit, qu'un rapport dont les chiffres ne concordent pas.",
      "Traiter la réconciliation finance-programme comme une tâche exclusivement financière — si le référent programme ne signe pas la checklist, l'exercice perd toute sa valeur.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Rapport trimestriel ECHO, Nord-Kivu"',
    scenario: "Projet de distribution de kits NFI (bâches, couvertures, ustensiles) financé par ECHO à Kitchanga, Nord-Kivu. La date limite du rapport trimestriel est dans 5 jours. Le rapport financier reflète des dépenses correspondant à 3 800 ménages desservis, mais le rapport narratif du programme en annonce 4 200 pour la même période.",
    steps: [
      "400 ménages supplémentaires ont été confirmés par une vérification post-distribution et ajoutés au narratif — sans que la finance en soit informée.",
      "Les coûts de transport et distribution correspondant à ces 400 ménages n'ont pas été identifiés séparément : ils sont peut-être absorbés ailleurs, ou pas encore comptabilisés si la distribution a eu lieu en tout début de trimestre suivant.",
      "L'écart doit être investigué et documenté avant l'échéance de 5 jours, sans faire porter à ECHO une incohérence non résolue entre narratif et financier.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice noté — réconcilier narratif et financier',
    instructions: "Complétez la checklist-reconciliation-finance-programme.docx en formulant trois hypothèses expliquant l'écart de 400 ménages (erreur de comptabilisation, décalage de période, double-comptage), avec pour chacune la vérification concrète à mener et le délai réaliste avant l'échéance. Complétez ensuite le gabarit-rapport-financier-bailleur.xlsx en y intégrant votre traitement de l'écart — soit une note documentant un décalage de période légitime, soit une correction de la ligne \"Transport & distribution\" — justifié en une ou deux phrases.",
    deliverable: "Les deux fichiers complétés, avec un texte de justification de l'écart ne dépassant pas une demi-page.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi un bailleur impose son propre format de rapport, avec un exemple pour USAID/BHA, UE/ECHO et une agence onusienne.",
      "Je sais appliquer le principe du 3-way match (contrat/bon de commande, facture, preuve de paiement) à n'importe quelle dépense.",
      "Je sais pourquoi une incohérence entre rapport financier et rapport narratif menace la confiance globale du bailleur, pas seulement le rapport concerné.",
      "Je sais mener une réconciliation finance-programme complète avant toute soumission.",
      "Je sais identifier, dans un rapport en préparation, les signaux d'alerte à traiter avant la date limite plutôt qu'après.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 06 — Préparation & Réussite des Audits Financiers.',
  },
]
