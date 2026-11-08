// Module 03 — Lettre de Motivation Percutante
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Lettre de Motivation Percutante',
    hook: "Une lettre de motivation générique se repère en 10 secondes, et coûte cher même à un excellent profil. Ce module vous donne une structure en 3 paragraphes et une méthode de recherche de 15 minutes pour écrire, à chaque candidature, une lettre qui donne envie de vous rencontrer.",
  },
  {
    type: 'objectives',
    items: [
      "Structurer n'importe quelle lettre de motivation en 3 paragraphes à fort impact — un Hook (la phrase d'accroche d'ouverture), un paragraphe Valeur, un Call-to-Action (l'invitation à l'étape suivante) — sans jamais dépasser une page.",
      "Mener une recherche ciblée de 15 minutes sur une organisation avant de rédiger, et en extraire 2 à 3 faits réellement exploitables.",
      "Écrire un Hook spécifique qui remplace les formules d'ouverture génériques repérées instantanément par un recruteur.",
      'Adapter le paragraphe Valeur au poste précis visé, plutôt que de recopier le contenu du CV.',
      "Repérer, dans une lettre déjà écrite, les formules génériques qui la condamnent avant même la deuxième ligne.",
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi une lettre générique se voit en 10 secondes',
    body: [
      "Un recruteur qui ouvre un poste dans une ONG internationale ne lit pas des centaines de lettres en entier : il les trie. Une lettre qui pourrait être envoyée telle quelle à dix organisations différentes se reconnaît immédiatement — elle parle de \"votre organisation\" là où elle pourrait citer un projet ou une mission précise.",
      "Dans ces 10 premières secondes, le recruteur ne cherche pas à savoir si vous êtes qualifié : cette question, le CV y répond déjà. Il cherche un signal que vous avez compris CE poste précis et que vous n'êtes pas en train d'arroser large.",
    ],
    highlight: "La lettre de motivation n'est pas un résumé du CV mis en phrases : le CV dit ce que vous avez fait, la lettre dit pourquoi CE poste, dans CETTE organisation, maintenant.",
  },
  {
    type: 'stat-callout',
    stat: '80 à 300+',
    caption: "Le nombre de candidatures qu'un recruteur peut recevoir pour une seule offre dans une ONG internationale.",
    context: 'Il ne les lit pas en entier : il les trie, dès la première phrase.',
  },
  {
    type: 'concept',
    title: "La logique du Hook — capter l'attention dès la première phrase",
    body: [
      'Le Hook, c\'est la première phrase de votre lettre. Sa seule fonction : donner envie de lire la deuxième. Ce qu\'un Hook n\'est jamais : "Je vous écris pour postuler au poste de [intitulé]" — une phrase qui ne dit rien que le recruteur ne sache déjà, puisqu\'il a lui-même publié l\'offre.',
      "Un bon Hook ancre la lettre dans un fait réel et récent sur l'organisation — un projet lancé, une prise de position, un résultat communiqué — et relie ce fait à votre motivation ou votre expérience directe.",
    ],
    highlight: "Le test le plus simple pour vérifier qu'un Hook fonctionne : pourrait-il être copié-collé dans une lettre adressée à une autre organisation ? S'il survit au changement de destinataire, il est trop générique.",
  },
  {
    type: 'concept',
    title: 'Trois façons de construire un bon Hook',
    body: [
      "Le fait d'actualité : une nouvelle initiative, un rapport publié, une expansion géographique de l'organisation, mentionnée avec précision.",
      "La connexion d'expérience directe : un lien concret entre une situation que vous avez vécue professionnellement et la mission spécifique du poste visé.",
      "La mission incarnée : reformuler la mission de l'organisation non pas en la citant mot pour mot depuis son site, mais en montrant que vous en comprenez l'application concrète sur le terrain.",
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Hook', definition: "La phrase ou les deux premières phrases d'ouverture, dont la seule fonction est de capter l'attention par un élément spécifique et vérifiable." },
      { term: 'Paragraphe Valeur', definition: 'Le cœur de la lettre — ce que vous apportez concrètement à CE poste, illustré par une réalisation précise, jamais une liste de qualités abstraites.' },
      { term: 'Call-to-Action (CTA)', definition: "La clôture qui invite explicitement à l'étape suivante (entretien, échange), sans formule d'attente passive." },
      { term: 'Personnalisation', definition: "L'ensemble des éléments de la lettre qui ne pourraient pas être réutilisés tels quels pour une autre candidature." },
    ],
  },
  {
    type: 'process',
    title: 'De la recherche à la lettre envoyée',
    steps: [
      { title: "Recherche ciblée sur l'organisation (10 à 15 minutes, jamais sautée)", body: "Dans grille-personnalisation-lettre-par-organisation.xlsx, notez le nom de l'organisation, l'intitulé exact du poste et 2 à 3 faits concrets trouvés sur son site, son rapport annuel ou son actualité récente." },
      { title: 'Rédiger le Hook (5 minutes)', body: 'Appuyez la première phrase sur un fait choisi à l\'étape précédente, puis vérifiez : "cette phrase serait-elle fausse pour une autre organisation ?" Si non, reprenez-la.' },
      { title: 'Rédiger le paragraphe Valeur (10 à 15 minutes)', body: 'Choisissez UNE réalisation concrète, idéalement déjà quantifiée avec la méthode PAR du Module 02, et reliez-la explicitement à une exigence précise du poste visé.' },
      { title: 'Rédiger le Call-to-Action (2 minutes)', body: 'Clôturez par une phrase qui invite explicitement à l\'étape suivante, sans formule d\'attente passive comme "dans l\'attente d\'une réponse de votre part".' },
      { title: 'Relire à voix haute et vérifier la personnalisation (5 minutes)', body: 'Les formules génériques et les phrases trop longues s\'entendent avant de se voir. Reprenez la checklist de complétude du template Excel avant tout envoi.' },
      { title: 'Adapter, jamais dupliquer, pour chaque nouvelle candidature', body: 'Le paragraphe Valeur peut rester structurellement proche d\'une candidature à l\'autre, mais le Hook ne doit jamais être copié tel quel.' },
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — \"D'une lettre fade à une lettre qui décroche un entretien\"",
    scenario: "Amina postule au poste de Coordinateur/trice Logistique publié par Solidarités International pour sa mission au Niger, sur un programme d'urgence eau-assainissement à Diffa que l'organisation vient d'étendre à 3 nouveaux sites. Sa lettre, écrite en 10 minutes, ne cite ni l'organisation, ni le Niger, ni Diffa, ni cette extension récente — alors qu'elle a 4 ans d'expérience en logistique humanitaire, dont 18 mois au Tchad sur un programme similaire.",
    steps: [
      'Cette lettre pourrait être envoyée telle quelle à n\'importe quelle ONG, pour n\'importe quel poste logistique : c\'est le signe d\'une lettre non personnalisée.',
      "Le Hook à reconstruire s'appuie sur l'extension récente du programme à 3 nouveaux sites, un fait public et directement exploitable.",
      "Le paragraphe Valeur doit relier explicitement l'expérience tchadienne d'Amina (18 mois, programme similaire) à l'enjeu du poste au Niger.",
      'Le Call-to-Action doit inviter à un échange sans formule d\'attente passive.',
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents à éviter',
    items: [
      'Ouvrir par "Je vous écris pour postuler à..." — une formule qui ne fait que reformuler une information que le recruteur possède déjà.',
      "Réutiliser mot pour mot la même lettre pour plusieurs candidatures — changer uniquement le nom de l'organisation ne constitue pas une personnalisation.",
      'Écrire une lettre trop longue qui répète simplement le contenu du CV, sans lui ajouter aucune information nouvelle.',
      'Confondre "montrer de l\'enthousiasme" et "empiler des adjectifs" — une seule réalisation chiffrée vaut plus que cinq qualificatifs non démontrés.',
      'Terminer sur une formule d\'attente passive ("dans l\'attente d\'une réponse de votre part") qui ferme la lettre au lieu de la propulser vers l\'étape suivante.',
    ],
  },
  {
    type: 'exercise',
    title: "Recherche ciblée et réécriture complète",
    instructions: "Complétez une ligne de grille-personnalisation-lettre-par-organisation.xlsx pour Solidarités International et son programme au Niger. Réécrivez ensuite entièrement la lettre d'Amina avec gabarit-lettre-motivation-3-paragraphes.docx : un Hook appuyé sur l'extension à 3 nouveaux sites, un paragraphe Valeur reliant son expérience tchadienne à l'enjeu du poste, un Call-to-Action actif. Cochez enfin la checklist de complétude de personnalisation du template Excel sur votre nouvelle lettre.",
    deliverable: "La ligne de recherche complétée et la lettre réécrite, tenant sur une page, sans reprendre une seule phrase de la version originale.",
  },
  {
    type: 'recap',
    items: [
      'Je sais expliquer la différence de fonction entre un CV et une lettre de motivation.',
      'Je sais structurer une lettre en 3 paragraphes distincts (Hook, Valeur, Call-to-Action) tenant sur une page.',
      "Je sais identifier au moins 2 faits concrets et récents exploitables sur une organisation cible.",
      "J'ai rédigé un Hook qui ne pourrait pas être envoyé tel quel à une autre organisation.",
      "J'ai rédigé un Call-to-Action actif, sans formule d'attente passive.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 04 — Préparation aux Tests Techniques & Études de Cas.',
  },
]
