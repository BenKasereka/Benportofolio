// Module 04 — Gestion Multi-Devises & Opérations Bancaires
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Gestion Multi-Devises & Opérations Bancaires',
    hook: "Un même projet ONG jongle presque toujours avec 2 à 3 devises en même temps — et chaque conversion entre elles est un point de friction qui peut ronger un budget ou inquiéter un auditeur. Ce module vous apprend à maîtriser ce jonglage et à sécuriser vos comptes bancaires, pour que le taux de change reste une ligne budgétaire gérée, jamais une surprise de fin de mois.",
  },
  {
    type: 'objectives',
    items: [
      "Choisir la devise appropriée pour une transaction ou pour l'ouverture d'un compte, selon le bailleur (l'organisation qui finance le projet), le contexte terrain et le niveau de risque de change (le risque de perdre de l'argent à cause d'une variation du taux de change).",
      "Distinguer devise du bailleur (celle dans laquelle le budget est engagé et rapporté), devise de référence terrain (la devise pivot utilisée pour consolider les comptes de l'organisation) et devise locale de paiement (celle du quotidien opérationnel), et appliquer cette distinction à la lecture d'un budget réel.",
      "Mettre en place et faire vivre un dispositif de signataires bancaires (les personnes autorisées par la banque à valider des opérations sur un compte) conforme aux standards de contrôle interne des ONG internationales.",
      "Calculer et enregistrer correctement une perte ou un gain de change selon la méthode du taux comptable officiel mensuel (le taux de change unique fixé chaque mois par l'organisation pour toutes ses conversions comptables).",
      "Mesurer l'impact budgétaire d'une dépréciation monétaire documentée et l'expliquer clairement à un bailleur qui pose la question.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi une ONG jongle avec 2 à 3 devises en même temps',
    body: [
      "Un projet financé par ECHO à Goma est budgétisé en euros, suivi en interne en dollars (la devise de référence de l'organisation), et dépensé au quotidien en francs congolais parce que c'est ce que le loueur, le fournisseur de carburant et le personnel local acceptent. Trois devises, un seul projet.",
      "Chaque conversion entre ces trois devises est un point de friction potentiel — et chaque friction non anticipée devient soit une perte de change qui ronge le budget, soit une incohérence comptable qui inquiète un auditeur.",
    ],
    highlight: "Un Finance Manager qui ne sait pas, pour chaque ligne de son budget, dans quelle devise elle est dépensée et dans quelle devise elle est rapportée, découvre le problème au pire moment : celui de justifier un écart au bailleur.",
  },
  {
    type: 'comparison-table',
    title: 'Trois rôles de devise à reconnaître avant d\'ouvrir un compte',
    columns: ['Rôle de la devise', "Ce qu'elle sert à faire", 'Exemples fréquents'],
    rows: [
      ['Devise du bailleur', "La devise dans laquelle le budget est engagé, suivi contractuellement et rapporté au bailleur. Elle ne bouge jamais en cours de projet sans avenant.", 'USD pour USAID/BHA et la plupart des agences onusiennes, EUR pour ECHO'],
      ['Devise de référence terrain', "La devise pivot que l'organisation utilise pour consolider ses comptes entre pays et sièges, même quand elle diffère de la devise du bailleur.", "Le plus souvent l'USD, parfois l'EUR pour une ONG à siège européen"],
      ['Devise locale de paiement', 'La devise du quotidien opérationnel : salaires du personnel national, loyers, fournisseurs locaux, taxes.', 'Franc congolais (CDF), franc CFA (XAF), livre sud-soudanaise (SSP), gourde (HTG), naira (NGN)'],
    ],
  },
  {
    type: 'concept',
    title: 'Le risque de change : une ligne budgétaire, pas une surprise',
    body: [
      "Le risque de change n'est pas un aléa exceptionnel, c'est une composante structurelle de tout budget ONG multi-devises — à traiter dès la construction du budget, pas à découvrir six mois plus tard dans un rapport qui ne balance plus.",
      "Certains bailleurs, comme ECHO, autorisent une ligne budgétaire dédiée aux pertes de change. D'autres, comme la plupart des contrats USAID/BHA, n'en prévoient pas — ce qui ne veut pas dire que le risque disparaît, seulement qu'il faut le gérer par une marge de prudence et un suivi budgétaire mensuel fin.",
    ],
    highlight: "Dès qu'une ligne de budget dépend d'une conversion de devise et représente plus de quelques pourcents du budget total, elle doit intégrer une marge de prudence de change reflétant la volatilité réelle de la monnaie locale — jamais un pourcentage forfaitaire recopié d'un projet à l'autre.",
  },
  {
    type: 'stat-callout',
    stat: '3 à 5 %',
    caption: 'Marge de prudence de change généralement intégrée aux lignes budgétaires converties',
    context: "Le pourcentage exact dépend de la volatilité historique de la monnaie locale — un franc CFA arrimé à l'euro n'a pas la même volatilité qu'une livre sud-soudanaise.",
  },
  {
    type: 'concept',
    title: 'La gestion des signataires — le contrôle interne qui protège tout le monde',
    body: [
      "La gestion des signataires bancaires est le domaine où l'on trouve le plus de dossiers de fraude et d'audit qualifiés — pas parce que les procédures sont compliquées, mais parce qu'elles sont mal suivies dans la durée.",
      "Le principe de double signature (ou double contrôle) exige que toute transaction bancaire au-delà d'un seuil défini soit approuvée par au moins deux personnes habilitées aux rôles incompatibles : celui qui initie un virement n'est jamais celui qui l'approuve seul.",
    ],
    highlight: "La gestion des signataires n'est pas un événement ponctuel réalisé à l'ouverture du compte : c'est un registre vivant, revu au moins trimestriellement et corrélé avec chaque départ ou changement de poste.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Taux comptable officiel', definition: "Le taux de change unique, fixé mensuellement par l'organisation (généralement à partir du taux de la banque centrale), utilisé pour toutes les conversions comptables du mois." },
      { term: 'Perte / gain de change réalisé', definition: "L'écart, positif ou négatif, entre la valeur d'une transaction convertie au taux du jour et sa valeur convertie au taux comptable officiel du mois." },
      { term: 'Procuration bancaire', definition: "L'autorisation formelle, enregistrée auprès de la banque, qui habilite une personne nommée à opérer sur un compte — à distinguer d'une simple délégation interne sans valeur tant que la banque ne l'a pas enregistrée." },
      { term: 'Taux du marché parallèle', definition: "Le taux de change pratiqué hors circuit bancaire officiel, souvent plus avantageux en apparence mais juridiquement et comptablement inutilisable pour une organisation soumise à audit." },
    ],
  },
  {
    type: 'process',
    title: 'Mettre en place le dispositif bancaire multi-devises',
    steps: [
      { title: 'Ouvrir le compte en devise locale avec un dossier complet', body: "Lettre de mission, statuts, résolution désignant les signataires, pièces d'identité, spécimens de signature. Anticipez les délais KYC/AML (vérification d'identité et de lutte contre le blanchiment) — plusieurs semaines avant le premier décaissement, jamais la veille." },
      { title: 'Enregistrer les signataires et tenir le registre vivant', body: "Dès qu'un signataire quitte son poste, sa procuration doit être révoquée par écrit auprès de la banque avant son départ effectif — un appel téléphonique ne suffit jamais." },
      { title: "Sécuriser tout transfert international avant l'envoi", body: "Vérifiez les coordonnées bancaires du bénéficiaire par un canal indépendant de celui qui vous les a communiquées — protection de base contre la fraude au changement de RIB. Appliquez ensuite la double signature." },
      { title: 'Calculer le gain ou la perte de change en fin de mois', body: "Enregistrez le taux comptable officiel du mois, listez les transactions converties, et laissez le calcul automatique agréger l'impact cumulé sur le budget." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Ne pas provisionner de marge de change dans le budget initial — un budget multi-devises sans marge de prudence reporte simplement le problème à la première variation de taux significative.",
      "Laisser une procuration bancaire active pour un employé parti depuis des mois — le risque de fraude le plus fréquent en contrôle interne, une brèche parfois ouverte pendant des mois avant qu'un audit ne la révèle.",
      "Convertir chaque transaction au taux du jour au lieu du taux comptable officiel du mois — cela produit une comptabilité incohérente d'une ligne à l'autre, impossible à réconcilier en audit externe.",
      "Utiliser le taux du marché parallèle parce qu'il est \"plus avantageux\" pour le budget — l'un des signaux les plus immédiatement repérés par un auditeur, et parfois une infraction à la réglementation des changes elle-même.",
      "Notifier la banque du retrait d'un signataire par un simple appel téléphonique — sans confirmation écrite et datée, l'organisation reste juridiquement exposée si l'ancien signataire agit encore sur le compte.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Dépréciation du Franc Congolais, Nord-Kivu"',
    scenario: "Vous êtes Finance Manager d'une ONG médicale à Goma, sur un projet de 18 mois financé en USD. Le budget a été construit sur un taux de 2 800 CDF pour 1 USD ; les coûts locaux (salaires, loyers, carburant) représentent 65 % du budget et sont payés en francs congolais. En deux mois, le taux officiel passe à 3 024 CDF pour 1 USD — une dépréciation de 8 %.",
    steps: [
      "Le taux comptable officiel passe de 2 800 à 3 024 CDF pour 1 USD en deux mois — une dépréciation de 8 % qui renchérit mécaniquement chaque dépense locale convertie en USD.",
      "Les contrats locaux (loyers, prestataires) sont libellés en CDF et n'évoluent pas automatiquement, mais leur conversion en USD pour le rapport bailleur devient plus coûteuse.",
      "Le bailleur remarque l'écart sur la ligne \"coûts opérationnels locaux\" dans le rapport trimestriel et demande une explication écrite avant validation.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice noté — expliquer la dépréciation au bailleur',
    instructions: "Complétez le suivi-taux-change-impact-budgetaire.xlsx en enregistrant le taux de 2 800 CDF/USD au mois 1 et 3 024 CDF/USD au mois 2, puis saisissez au moins 3 dépenses locales plausibles (loyer d'un centre de santé, masse salariale nationale, carburant) pour observer l'écart calculé automatiquement. Rédigez ensuite une note d'une demi-page maximum pour votre point focal bailleur, citant le taux appliqué chaque mois et sa source, le pourcentage de dépréciation, et le montant total de la perte de change — sans jargon comptable non expliqué.",
    deliverable: "Le fichier suivi-taux-change-impact-budgetaire.xlsx complété, et la note d'explication au bailleur, sur un total ne dépassant pas 2 pages.",
  },
  {
    type: 'recap',
    items: [
      "Je sais distinguer devise du bailleur, devise de référence terrain et devise locale de paiement sur un budget réel.",
      "Je sais pourquoi une marge de prudence de change doit être intégrée dès la construction du budget, pas ajoutée après coup.",
      "Je sais appliquer le principe de double signature et pourquoi un signataire unique est toujours un risque de contrôle interne.",
      "Je sais calculer et enregistrer un gain ou une perte de change avec le taux comptable officiel mensuel.",
      "Je sais rédiger une note claire, sans jargon inutile, expliquant un écart de change à un interlocuteur bailleur non financier.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 05 — Rapports Financiers pour Bailleurs.',
  },
]
