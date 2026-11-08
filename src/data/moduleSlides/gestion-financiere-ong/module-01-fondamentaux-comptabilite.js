// Module 01 — Fondamentaux de la Comptabilité de Projet ONG
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Fondamentaux de la Comptabilité de Projet ONG',
    hook: "Dans une ONG, on ne vous demande jamais si vous avez bien dépensé l'argent — on vous demande de le PROUVER, ligne par ligne, pour chaque bailleur (l'organisation qui finance le projet). Ce module vous apprend le geste simple qui évite des semaines de reconstruction sous pression d'audit : coder chaque dépense correctement dès le premier jour.",
  },
  {
    type: 'objectives',
    items: [
      "Appliquer un plan comptable ONG (la liste structurée des catégories de dépenses et de revenus de l'organisation) à des transactions réelles, en codant chacune sur ses trois axes obligatoires : projet, bailleur, rubrique budgétaire (la ligne précise du budget concernée).",
      "Distinguer la comptabilité d'engagement (enregistrer une dépense dès qu'elle est décidée, avant même le paiement) de la comptabilité de caisse (l'enregistrer seulement quand l'argent sort réellement), et savoir laquelle utiliser selon le besoin.",
      "Construire une clé de répartition (la méthode de calcul qui partage un coût partagé entre plusieurs projets selon leur usage réel) défendable pour allouer un coût commun, sans surfacturer ni sous-facturer un bailleur.",
      "Détecter un cas de double financement (« double-dipping » : une même dépense payée à plus de 100 % par plusieurs bailleurs additionnés) avant qu'il ne soit relevé par un auditeur externe.",
      "Corriger une erreur de codification budgétaire découverte plus tard, avec la traçabilité qu'exige un dossier d'audit.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi on code CHAQUE transaction — pas seulement les grosses',
    body: [
      "Un Finance Officer junior a souvent le réflexe de ne \"bien coder\" que les dépenses importantes — un véhicule, un gros contrat — et de laisser filer les petites lignes (une recharge téléphonique, un café de réunion) dans une rubrique générique \"divers\". C'est une erreur qui coûte cher.",
      "Une ONG qui gère plusieurs bailleurs sur un même bureau pays n'a qu'un seul moyen de prouver, ligne par ligne, que l'argent de chaque bailleur a financé exactement ce pour quoi il a été donné : la codification analytique systématique — l'attribution de trois axes obligatoires à chaque transaction dès sa saisie.",
    ],
    highlight: "Un auditeur ne demande jamais \"combien avez-vous dépensé au total\" — il demande \"montrez-moi, pour CE bailleur et CETTE rubrique, les pièces justificatives correspondantes\".",
  },
  {
    type: 'concept',
    title: 'Les trois axes de codification obligatoires',
    body: [
      "Le projet — quelle intervention précise cette dépense sert-elle (ex. \"Réponse nutritionnelle Nord-Kivu\").",
      "Le bailleur — qui finance cette ligne (ex. UNICEF, ECHO, USAID/BHA).",
      "La rubrique budgétaire — à quelle ligne du budget approuvé par ce bailleur cette dépense se rattache (ex. \"Personnel\", \"Transport\", \"Intrants médicaux\").",
    ],
    highlight: "La codification ne se fait pas en fin de mois par le comptable senior : elle se fait à la source, au moment de la saisie, par la personne qui engage la dépense — chef de projet, logisticien, caissier de terrain.",
  },
  {
    type: 'stat-callout',
    stat: '3 axes',
    caption: 'Projet, bailleur, rubrique budgétaire',
    context: "Ce triple codage est la base de tout ce que vous produirez ensuite : le suivi budgétaire mensuel, le rapport financier trimestriel, et votre défense en cas d'audit.",
  },
  {
    type: 'comparison-table',
    title: 'Comptabilité de caisse vs comptabilité d\'engagement',
    columns: ['Critère', 'Comptabilité de caisse', 'Comptabilité d\'engagement'],
    rows: [
      ['Enregistre la dépense au moment où...', "l'argent sort réellement", "l'obligation est créée (contrat, commande, service rendu)"],
      ['Usage principal', 'Suivi de trésorerie, gestion des avances de caisse terrain', 'Suivi budgétaire réel, prévision de consommation, reporting bailleur'],
      ['Risque si utilisée seule', 'Illusion de disponibilité budgétaire malgré des engagements non payés', 'Aucun problème majeur si la trésorerie est suivie en parallèle'],
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi cette distinction est vitale',
    body: "Si vous ne suivez votre budget qu'en caisse, vous pouvez avoir l'illusion confortable d'un solde disponible alors que des contrats déjà signés vont l'épuiser dans les trois semaines à venir. Un Finance Officer a ainsi annoncé fièrement qu'il restait 40 000 USD disponibles sur une ligne \"Construction\", alors que deux contrats déjà signés (mais pas encore payés) allaient consommer 55 000 USD.",
    highlight: "Budget disponible = budget approuvé − dépenses payées − engagements déjà pris (contrats signés, commandes validées, salaires courus).",
  },
  {
    type: 'concept',
    title: 'Allouer les coûts communs sans créer de double financement',
    body: [
      "Un coût commun (loyer du bureau, salaire du chauffeur partagé, internet, gardiennage) bénéficie à plusieurs projets à la fois et doit être réparti via une clé de répartition documentée, qui reflète l'usage réel — jamais une simplicité de calcul comme \"3 projets, donc 33 % chacun\".",
      "Le double financement (\"double-dipping\") survient quand la somme des pourcentages alloués à un même coût, tous bailleurs confondus, dépasse 100 %. Un bailleur qui le découvre peut exiger le remboursement intégral de sa part et geler d'autres financements.",
    ],
    highlight: "Règle à vérifier systématiquement : la somme des pourcentages d'allocation d'un coût commun doit toujours être égale à 100 % — jamais plus.",
  },
  {
    type: 'process',
    title: 'Coder juste dès la saisie, allouer juste dès le calcul',
    steps: [
      { title: 'Vérifier la ligne budgétaire bailleur avant de coder', body: 'Ouvrez le budget approuvé du projet et identifiez la rubrique exacte — jamais "au feeling" : deux bailleurs peuvent nommer différemment des rubriques qui se ressemblent.' },
      { title: 'Coder la transaction sur ses trois axes dès la saisie', body: 'Projet, bailleur, rubrique — renseignés dans le template plan-comptable-codification-projets.xlsx, jamais laissés "à compléter plus tard".' },
      { title: 'Identifier si la dépense est un coût direct ou un coût commun', body: 'Un coût direct sert un seul projet ; un coût commun bénéficie à plusieurs projets et doit passer par une clé de répartition.' },
      { title: 'Construire la clé de répartition sur une base réelle', body: 'ETP (Équivalents Temps Plein) par projet, surface en m² occupée, ou nombre de trajets — jamais un simple partage à parts égales entre projets.' },
      { title: "Vérifier l'absence de double financement", body: "La somme des pourcentages d'allocation, tous bailleurs confondus, doit toujours être égale à 100 %." },
      { title: "Documenter la décision avec la note d'allocation", body: 'Toute allocation significative (loyer, salaires partagés, véhicule) doit être justifiée par écrit avec le template note-allocation-couts-communs.docx.' },
      { title: 'Corriger sans jamais dissimuler', body: "Une erreur découverte plus tard se corrige par une écriture de régularisation tracée, référençant la transaction d'origine — jamais par une modification silencieuse." },
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Codification analytique', definition: "L'attribution systématique des trois axes (projet, bailleur, rubrique budgétaire) à chaque transaction dès sa saisie." },
      { term: 'Rubrique budgétaire', definition: 'La ligne précise du budget approuvé par un bailleur à laquelle une dépense doit être rattachée (ex. Personnel, Transport, Intrants).' },
      { term: "Comptabilité d'engagement", definition: "Enregistrement d'une dépense dès que l'obligation est créée, avant même le paiement — base du suivi budgétaire réel." },
      { term: 'Comptabilité de caisse', definition: "Enregistrement d'une dépense au moment où l'argent sort réellement — base du suivi de trésorerie." },
      { term: 'Coût commun (ou coût partagé)', definition: 'Une dépense de fonctionnement qui bénéficie à plusieurs projets/bailleurs à la fois et ne peut être imputée à un seul.' },
      { term: 'Clé de répartition', definition: 'La méthode de calcul, documentée et défendable, servant à répartir un coût commun entre plusieurs projets au prorata de leur usage réel.' },
      { term: 'Double financement (double-dipping)', definition: "Le fait qu'une même dépense soit financée, en tout ou en partie, au-delà de 100 % de son coût réel par la somme des bailleurs qui la financent." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Coder une transaction \"au feeling\" sans vérifier la ligne budgétaire bailleur — deviner la rubrique la plus logique plutôt que de consulter le budget signé est la source numéro un des écarts relevés en audit.",
      "Allouer les coûts communs au prorata du nombre de projets plutôt qu'au prorata de l'usage réel — ignorer qu'une équipe occupe l'espace ou le véhicule de façon très inégale est presque toujours indéfendable devant un auditeur.",
      "Confondre date d'engagement et date de paiement dans le suivi budgétaire — annoncer un solde disponible en ne regardant que la caisse crée une fausse marge de manœuvre qui explose à l'échéance des engagements.",
      "Laisser les petites dépenses dans une rubrique \"divers\" par facilité — cumulées sur un an, ces lignes mal codées représentent souvent des milliers de dollars impossibles à justifier en détail.",
      "Modifier silencieusement une ligne mal codée plutôt que de passer une écriture de régularisation tracée — un auditeur traite toute correction non documentée comme un signal d'alerte, même honnête.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Bureau pays de Goma, trois bailleurs sous un même toit"',
    scenario: "Votre bureau pays héberge trois projets : Nutrition (5 personnes, UNICEF), WASH (3 personnes, ECHO) et Santé (2 personnes, USAID/BHA). Le loyer mensuel unique de 3 000 USD est réparti \"à parts égales\" entre les trois projets — 1 000 USD chacun — par simplicité. En préparant le rapport trimestriel, vous découvrez aussi qu'une facture de carburant de 240 USD destinée au véhicule du Projet WASH a été codée par erreur sur le Projet Santé.",
    steps: [
      "La répartition à parts égales ignore que Nutrition, WASH et Santé n'occupent pas le bureau dans les mêmes proportions (5, 3 et 2 personnes à temps plein).",
      "La facture de carburant mal codée impute une dépense WASH/ECHO au budget Santé/USAID-BHA — un risque de traçabilité et de conformité bailleur.",
      "Les deux erreurs doivent être corrigées avant l'envoi du rapport financier trimestriel, pas après.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice noté — corriger le bureau de Goma',
    instructions: "Dans le template plan-comptable-codification-projets.xlsx, recalculez la part de loyer de chaque projet sur une base d'Équivalents Temps Plein (5+3+2 = 10 ETP au total) plutôt qu'à parts égales, en vérifiant que le total atteint bien 3 000 USD. Décrivez ensuite la régularisation à passer pour le carburant : annulation des 240 USD sur Projet Santé/USAID-BHA, recodage sur Projet WASH/ECHO, avec référence à la transaction d'origine. Enfin, rédigez la note d'allocation du loyer avec le template note-allocation-couts-communs.docx, en justifiant le passage de la clé \"parts égales\" à la clé \"ETP\".",
    deliverable: "Le tableur complété avec la nouvelle clé de répartition, et la note d'allocation tenant sur une page, prête à être présentée en cas d'audit.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi chaque transaction doit être codée sur trois axes : projet, bailleur, rubrique budgétaire.",
      "Je sais distinguer comptabilité d'engagement et comptabilité de caisse, et laquelle utiliser pour un suivi budgétaire fiable.",
      "Je sais construire une clé de répartition défendable, basée sur l'usage réel et non sur le nombre de projets.",
      "Je sais vérifier qu'une allocation de coût commun totalise exactement 100 %, sans double financement.",
      "Je sais corriger une erreur de codification par une écriture de régularisation tracée, sans jamais l'écraser silencieusement.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 02 — Élaboration & Gestion Budgétaire Multi-Bailleurs.',
  },
]
