// Module 03 — Trésorerie, Caisses & Avances Terrain
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Trésorerie, Caisses & Avances Terrain',
    hook: "Un écart de caisse détecté le jour même se corrige en dix minutes. Le même écart découvert un mois plus tard peut ne jamais être expliqué. Ce module vous donne la routine quotidienne — simple mais non négociable — qui protège votre caisse, vos avances et votre crédibilité en cas d'audit.",
  },
  {
    type: 'objectives',
    items: [
      "Appliquer une politique de caisse (les règles écrites qui encadrent l'argent liquide détenu sur une base) avec des plafonds différenciés selon le niveau de responsabilité, sans en faire une contrainte bureaucratique arbitraire.",
      "Ouvrir et clôturer une caisse quotidiennement selon une procédure de comptage et de signature fiable.",
      "Octroyer, suivre et clôturer une avance terrain (un prêt temporaire encadré, remis à un membre du personnel pour engager une dépense avant que le justificatif final soit disponible) avec justificatifs complets, dans un délai défini.",
      "Effectuer un rapprochement de caisse quotidien (comparer ce que le livre de caisse dit qu'il devrait rester à ce qui est physiquement compté) et détecter un écart avant qu'il ne devienne irrécupérable.",
      "Investiguer un écart de caisse déjà constaté, y compris avec des données incomplètes.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi les plafonds de caisse existent',
    body: [
      "Un plafond de caisse n'est pas une marque de défiance envers votre équipe, ni de la bureaucratie gratuite. C'est une décision de gestion du risque : une caisse expose à trois risques concrets — le vol, la perte, et la fraude. Plus le montant disponible en liquide est élevé, plus l'exposition à ces trois risques l'est aussi.",
      "Le montant exact d'un plafond varie selon l'organisation, le contexte sécuritaire et le coût de la vie local — ce sont des ordres de grandeur couramment observés, jamais une norme universelle. Ce qui compte, c'est le principe.",
    ],
    highlight: "Le plafond doit être documenté par écrit, connu de la personne qui tient la caisse avant qu'elle n'en ait besoin, et révisé si le contexte change (inflation locale, insécurité accrue, changement de mandat de la base).",
  },
  {
    type: 'comparison-table',
    title: 'Des plafonds différenciés par niveau de responsabilité',
    columns: ['Niveau', 'Plafond de caisse typique', 'Justification'],
    rows: [
      ['Caissier(ère) / agent administratif de base', '200 à 500 USD', "Dépenses courantes du quotidien uniquement — au-delà, on réapprovisionne, on n'accumule pas."],
      ['Chef de base / coordinateur terrain', '1 000 à 3 000 USD', "Capacité à couvrir les urgences opérationnelles sans attendre un virement, mais toujours plafonnée pour limiter l'exposition en cas d'incident sécuritaire."],
      ['Coordination pays / siège de mission', "5 000 USD et plus, avec double signature obligatoire au-delà d'un seuil", 'Volumes plus importants pour des besoins exceptionnels, mais toujours encadrés par une double validation.'],
    ],
  },
  {
    type: 'concept',
    title: "La logique d'une avance terrain",
    body: [
      "Une avance n'est pas un cadeau ni un raccourci pour éviter la paperasse d'un achat classique. C'est un prêt temporaire et encadré, consenti pour permettre d'engager une dépense professionnelle avant que le justificatif final ne soit disponible.",
      "Première règle : une avance n'est jamais octroyée sans savoir précisément ce qui sera fourni en justification et à quelle date — une avance \"on verra bien avec quoi il revient\" est déjà, structurellement, une fraude en attente de se produire.",
      "Deuxième règle : une avance n'est jamais laissée ouverte indéfiniment. Une avance non justifiée après 30 jours n'est plus une avance : c'est une dette du membre du personnel envers l'organisation.",
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Solde théorique', definition: 'Le montant que la caisse devrait contenir selon les enregistrements du livre de caisse (solde d\'ouverture + entrées − sorties).' },
      { term: 'Comptage physique', definition: 'Le montant réellement présent dans la caisse, obtenu en comptant billet par billet et pièce par pièce, jamais estimé.' },
      { term: 'Écart de caisse', definition: "La différence entre le comptage physique et le solde théorique — un signal qui déclenche une investigation, ni automatiquement une erreur bénigne ni automatiquement une fraude." },
      { term: 'Avance à justifier', definition: "Montant sorti de la caisse en attente de pièces justificatives, à ne jamais confondre avec une dépense définitive tant que le justificatif n'est pas validé." },
      { term: 'Seuil de tolérance', definition: "Le montant maximum d'écart accepté sans investigation formelle obligatoire, défini à l'avance dans la politique de caisse." },
      { term: 'Double signature', definition: 'Validation croisée par deux personnes distinctes pour toute opération dépassant un seuil donné — principe de base de la séparation des tâches.' },
    ],
  },
  {
    type: 'concept',
    title: 'Le rapprochement quotidien, premier rempart contre la fraude',
    body: "Un écart détecté à J+1 est gérable : la personne qui tenait la caisse la veille s'en souvient précisément, les témoins sont disponibles, le montant est généralement petit. Un écart détecté à J+30 est souvent irrécupérable : des dizaines de transactions se sont empilées, la mémoire s'est effacée, parfois l'agent a changé de poste entre-temps.",
    highlight: "Le rapprochement quotidien n'est pas un exercice comptable secondaire fait \"quand on a le temps\" — c'est un contrôle de sécurité financière dont la valeur vient de sa régularité absolue, y compris (surtout) les jours chargés.",
  },
  {
    type: 'process',
    title: 'La routine quotidienne d\'une caisse terrain',
    steps: [
      { title: 'Ouverture de caisse le matin', body: "Comptez billet par billet et pièce par pièce — le comptage doit correspondre exactement au solde théorique de clôture de la veille." },
      { title: 'Enregistrement en temps réel de chaque mouvement', body: 'Chaque sortie s\'enregistre au moment où elle a lieu, avec numéro de pièce, libellé précis et montant — jamais "en fin de journée de mémoire".' },
      { title: 'Clôture de caisse le soir', body: 'Recomptez physiquement et reportez le montant dans le rapprochement quotidien. Tout écart au-delà du seuil doit être documenté le jour même, par écrit.' },
      { title: 'Rapprochement bancaire hebdomadaire', body: 'Comparez le relevé bancaire aux mouvements enregistrés ; chaque écart doit être expliqué ligne par ligne, jamais simplement "ajusté".' },
    ],
  },
  {
    type: 'process',
    title: "Procédure complète d'une avance",
    steps: [
      { title: 'Demande', body: "Le membre du personnel précise l'objet, le montant et la date de justification attendue — jamais au-delà de 15 jours pour une avance courante, 30 jours pour une mission plus longue." },
      { title: 'Validation avant toute sortie de caisse', body: 'Le superviseur valide et signe avant la sortie — jamais après — avec un libellé explicite ("Avance à justifier — nom — échéance date").' },
      { title: 'Justification à la date prévue', body: 'Le détail des dépenses réelles et les pièces justificatives sont fournis ligne par ligne.' },
      { title: 'Calcul et clôture du solde', body: "Si les dépenses sont inférieures au montant avancé, la différence est remboursée en caisse ; si elles sont supérieures (avec accord préalable), l'organisation rembourse la différence." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Ne pas compter la caisse quotidiennement \"faute de temps\" — un rapprochement quotidien prend 10 minutes ; une investigation rétroactive sur un écart vieux d'un mois en prend des heures, pour un résultat souvent incomplet.",
      "Accepter un justificatif incomplet ou tardif parce que la personne est un collègue senior ou un ami — la règle s'applique de façon strictement identique à tout le monde, du chauffeur au chef de mission.",
      "Laisser une avance ouverte plus d'un mois sans relance active — une avance non relancée ne se justifie pas toute seule.",
      "Fractionner une dépense en plusieurs petits reçus pour rester sous un seuil d'approbation — un contournement de contrôle interne à signaler, jamais à laisser passer.",
      "Mélanger caisse professionnelle et dépannage personnel \"juste pour cette fois\" — la caisse professionnelle ne dépanne jamais personne, pas même son responsable.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "L\'écart de 40 dollars, base de N\'Djaména"',
    scenario: "Vous prenez vos fonctions de Finance Officer sur une base au Tchad, sans passation formelle. Le rapprochement de la caisse principale n'a jamais été fait quotidiennement depuis l'ouverture, huit mois plus tôt — seulement une fois par mois. Le rapprochement du mois précédent fait apparaître un écart de 40 USD, sans note explicative, sur 34 transactions. Le caissier ne se souvient précisément d'aucune transaction datant de plus de trois semaines.",
    steps: [
      "Isoler la période exacte est impossible sans rapprochements quotidiens antérieurs — l'écart a pu se produire n'importe quand dans les 30 jours précédents.",
      "Reprendre les 34 transactions une par une avec le caissier, en confrontant chaque ligne à une pièce justificative physique classée.",
      "Ne pas accuser prématurément — un écart de 40 USD sur 8 mois d'activité est statistiquement plus compatible avec une accumulation de petites erreurs qu'avec une fraude délibérée d'un montant rond.",
      "Écrire noir sur blanc les limites de l'investigation si l'origine exacte reste indéterminée, plutôt que d'inventer une explication pour \"clore le dossier\".",
      "Corriger la pratique immédiatement, sans attendre la fin de l'investigation : rapprochement quotidien dès le lendemain, caissier formé, coordination informée.",
    ],
  },
  {
    type: 'exercise',
    title: "Exercice noté — l'écart de 40 dollars",
    instructions: "Complétez le livre-de-caisse-rapprochement-quotidien.xlsx : construisez une dizaine de transactions plausibles pour une caisse de base, faites apparaître un écart conforme au scénario, et vérifiez que le statut affiché est bien \"ÉCART À INVESTIGUER\". Choisissez ensuite une avance terrain plausible et rédigez la fiche-avance-justification-remboursement.docx complète, avec au moins 3 lignes de dépenses justifiées. Enfin, en une demi-page, rédigez la note d'investigation que vous remettriez à votre coordinateur pays : ce que vous avez pu établir, ce qui reste incertain, et les 2 actions correctives mises en place.",
    deliverable: "Les deux fichiers complétés, plus la note d'investigation, sans dépasser une page pour cette dernière.",
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi les plafonds de caisse existent et les justifier autrement que par \"c'est la procédure\".",
      "Je sais ouvrir et clôturer une caisse quotidiennement avec comptage physique et signature.",
      "Je sais octroyer une avance avec un justificatif de retour attendu et une date de clôture fixée dès le départ.",
      "Je sais interpréter le statut \"ÉCART À INVESTIGUER\" d'un rapprochement quotidien et réagir immédiatement.",
      "Je sais structurer une investigation rétroactive sur un écart de caisse, même avec des données incomplètes.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 04 — Gestion Multi-Devises & Opérations Bancaires.',
  },
]
