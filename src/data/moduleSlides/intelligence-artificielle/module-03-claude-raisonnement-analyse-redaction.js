// Module 03 — Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Claude (Anthropic) — Raisonnement, analyse et rédaction d'élite",
    hook: "Faire analyser un document de 100+ pages, obtenir une revue critique plutôt qu'une validation polie, et rédiger un rapport section par section sans jamais tout refaire.",
  },
  {
    type: 'objectives',
    items: [
      "Faire analyser un document long (100+ pages) par Claude et obtenir une synthèse réellement exploitable, pas un résumé générique noyé de généralités.",
      "Structurer une demande de synthèse en précisant l'audience, le niveau de détail et le format de sortie, avant même de parler du contenu.",
      "Rédiger un rapport ou une procédure avec Claude en itérant section par section, plutôt qu'en une seule requête géante impossible à corriger sans tout refaire.",
      "Demander explicitement une revue critique ou une contre-argumentation d'un raisonnement ou d'un document, et exploiter ce retour pour repérer les failles avant un tiers.",
      "Reconnaître qu'une première version, même bien rédigée, n'est jamais un livrable final : la relecture critique humaine reste obligatoire.",
    ],
  },
  {
    type: 'concept',
    title: 'Une fenêtre de contexte pensée pour un document entier',
    body: "Claude dispose d'une fenêtre de contexte large — la quantité de texte qu'il peut lire en une seule fois, documents déposés inclus. Vous pouvez ainsi déposer un rapport d'audit de 120 pages, un contrat de subvention complet ou une politique institutionnelle de bout en bout dans une même conversation : Claude traite l'ensemble comme un seul objet cohérent — il peut croiser une clause de la page 8 avec une annexe de la page 95 sans que vous ayez à le lui rappeler. Pour un travail qui s'étale sur plusieurs sessions, la fonction Projects conserve les documents de référence et l'historique dans un espace persistant, sans tout retéléverser à chaque conversation.",
  },
  {
    type: 'stat-callout',
    stat: '100+ pages',
    caption: "La taille de document que Claude traite comme un seul objet cohérent",
    context: "Pas besoin de découper le document en morceaux ni de perdre la vue d'ensemble à chaque découpage.",
  },
  {
    type: 'concept',
    title: 'Précision et prudence plutôt qu\'affirmation catégorique',
    body: "Claude est entraîné pour signaler l'incertitude plutôt que produire une réponse qui sonne juste à tout prix — il dira plus volontiers \"le document ne précise pas ce point\" là où un modèle plus orienté \"réponse fluide\" comblerait le vide par une généralité plausible. Pour un rapport bailleur ou un constat d'audit, où une affirmation infondée peut avoir des conséquences réelles, cette prudence est un avantage opérationnel direct.",
    highlight: "Claude reste un modèle de langage, pas un vérificateur de faits omniscient : toute donnée chiffrée ou affirmation factuelle produite doit être confrontée à la source avant diffusion.",
  },
  {
    type: 'concept',
    title: 'Le comportement coopératif par défaut',
    body: "Si vous soumettez un raisonnement ou un projet de rapport en demandant \"qu'en penses-tu ?\", la réponse la plus probable est une validation polie assortie de remarques mineures — parce que le modèle interprète votre demande comme une recherche de confirmation, pas de démolition. Ce n'est pas de la complaisance gratuite : c'est le comportement par défaut d'un système conçu pour être utile à la demande telle qu'elle est formulée.",
  },
  {
    type: 'concept',
    title: 'Le levier de la contre-argumentation explicite',
    body: "Demander à Claude de jouer un rôle de contradicteur, d'identifier les failles les plus probables d'un raisonnement, ou de construire la meilleure objection à une recommandation — avant de la présenter à un tiers — produit une critique substantielle, pas une validation édulcorée. C'est l'équivalent d'un collègue senior qui relit votre travail en cherchant activement ce qui cloche.",
    highlight: "Cela permet de détecter, avant diffusion, une recommandation insuffisamment étayée, une clause qui crée une zone grise, ou un raisonnement qui tient uniquement parce qu'une hypothèse implicite n'a pas été questionnée.",
  },
  {
    type: 'concept',
    title: 'Rédiger par itération, section par section',
    body: "Demander d'un coup un rapport complet ou une procédure de dix pages produit presque toujours un texte plus rapide à refaire qu'à corriger : une incohérence repérée à la section 6 oblige à revoir l'ensemble. La méthode qui fonctionne inverse la logique : on valide d'abord un plan section par section, puis on rédige — et on valide — une section à la fois.",
    highlight: "Chaque section validée devient un point de contrôle fixe : une correction plus loin ne remet pas en cause ce qui a déjà été verrouillé.",
  },
  {
    type: 'process',
    title: 'Analyser un document long et en tirer une synthèse exploitable',
    steps: [
      { title: 'Définissez la demande avant de déposer le document', body: "Répondez par écrit à trois questions : quel est l'objectif de l'analyse, à quelle audience la synthèse est destinée, et quel niveau de détail est attendu." },
      { title: 'Déposez le document et formulez la demande en un seul message', body: "Combinez explicitement l'objectif, l'audience, le niveau de détail et le format de sortie attendu (nombre de points, tableau, longueur maximale)." },
      { title: 'Vérifiez la synthèse contre le document source', body: "Reprenez chaque point produit et vérifiez qu'il correspond à un passage identifiable, pas à une généralisation plausible. Demandez la section ou la page source." },
      { title: 'Demandez une revue critique des constats extraits', body: "Faites identifier les constats les moins étayés par le document, ou les conclusions reposant sur une hypothèse plutôt qu'une donnée confirmée." },
      { title: 'Ajustez le niveau de détail si nécessaire', body: "Précisez le correctif (\"condense en une demi-page, garde les constats à impact financier\") plutôt que de recommencer depuis zéro." },
    ],
  },
  {
    type: 'process',
    title: 'Rédiger un rapport ou une procédure par itération',
    steps: [
      { title: 'Établissez et validez le plan avant toute rédaction', body: "Décrivez l'objectif, l'audience et les grandes sections attendues, puis demandez uniquement un plan détaillé — pas encore de texte rédigé." },
      { title: 'Rédigez une section à la fois', body: "Demandez la première section uniquement, corrigez ce qui ne convient pas, puis seulement ensuite passez à la section suivante." },
      { title: 'Challengez les sections sensibles', body: "Pour une recommandation ou une clause engageante, demandez explicitement quelle objection un lecteur exigeant y opposerait, et intégrez les ajustements avant de continuer." },
      { title: "Assemblez et relisez l'ensemble", body: "Une fois toutes les sections validées, demandez une relecture de cohérence globale : ton, redites, transitions entre sections." },
      { title: 'Effectuez la relecture critique humaine finale', body: "Aucune version produite par itération ne se substitue à une relecture humaine portant sur la justesse politique du ton, l'exactitude des chiffres et la cohérence avec des engagements pris ailleurs." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Demander un résumé sans préciser le niveau de détail ni l'audience — résultat calibré pour personne, trop technique ou trop superficiel selon le lecteur.",
      "Accepter la première version d'un document rédigé par l'IA sans itération ni relecture critique humaine — transférer un risque non vérifié à votre lecteur final.",
      "Ne jamais demander explicitement une contre-argumentation — se priver du seul mécanisme qui pousse le modèle à chercher activement les failles plutôt qu'à valider poliment.",
      "Déposer un document long en plusieurs morceaux désordonnés — fragmenter fait perdre la vue d'ensemble qui fait la valeur d'une fenêtre de contexte large.",
      "Reformuler une demande de synthèse insatisfaisante en repartant de zéro — une correction ciblée est presque toujours plus rapide et plus précise.",
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Fenêtre de contexte', definition: "La quantité de texte que le modèle peut traiter en une seule fois, documents déposés inclus. Une fenêtre large permet d'analyser un document long sans le découper." },
      { term: 'Project (Claude)', definition: "Un espace de travail persistant qui conserve des documents de référence et l'historique d'échanges liés à un même dossier, sans tout retéléverser à chaque conversation." },
      { term: 'Revue critique / contre-argumentation', definition: 'Une demande explicite faite au modèle de challenger un raisonnement ou un document plutôt que de le valider — différente du mode "assistance coopérative" par défaut.' },
      { term: 'Rédaction itérative section par section', definition: "Méthode de rédaction où chaque section est validée avant de passer à la suivante, plutôt qu'une génération en un seul bloc." },
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — Extraire les 5 constats prioritaires d'un rapport d'audit de 140 pages",
    scenario: "Vous préparez, pour la direction générale, une synthèse d'un rapport d'audit interne de 140 pages sur les achats et la gestion financière d'un consortium d'ONG. La direction a 20 minutes en réunion de comité. Déposer le rapport et demander \"résume ce document\" produit une synthèse calquée sur le sommaire, sans hiérarchie de priorité, avec un niveau technique inchangé — inutilisable pour une direction sans bagage d'audit.",
    steps: [
      "Objectif formulé explicitement : identifier les 5 constats les plus prioritaires pour une décision immédiate.",
      "Audience précisée : la direction générale, sans formation en audit, 20 minutes en réunion de comité.",
      "Niveau de détail imposé : une phrase de constat, une phrase d'impact, une phrase de recommandation — pas de citation littérale des procédures d'audit.",
      "Format imposé : liste numérotée des 5 constats par priorité décroissante, intitulé court par constat, synthèse globale en une phrase.",
      "Étape à ne pas sauter : demander ensuite \"des 5 constats retenus, lequel est le moins solidement étayé, et pourquoi ?\" pour vérifier qu'un constat n'a pas été retenu pour sa gravité apparente plutôt que pour la force réelle des preuves.",
    ],
  },
  {
    type: 'exercise',
    title: 'Synthèse structurée, vérification et rédaction itérative',
    instructions: "Prenez un document long réel de votre travail (à défaut, un document public de plusieurs dizaines de pages). Formulez la demande de synthèse selon les quatre éléments de la méthode (objectif, audience, niveau de détail, format) dans le gabarit-prompts-analyse-documents-longs.xlsx. Soumettez-la à Claude avec le document déposé, vérifiez au moins 3 points produits contre la source, puis demandez explicitement à Claude d'identifier le point le moins étayé de sa propre synthèse. Enfin, choisissez une section courte d'un rapport à produire et faites-la rédiger selon la méthode section par section (plan validé, une section à la fois, contre-argumentation sur la recommandation), en vous appuyant sur le guide-redaction-rapports-procedures-claude.docx.",
    deliverable: "La ligne complétée du gabarit de prompts d'analyse, et la fiche de suivi de rédaction avec au moins une section rédigée et sa contre-argumentation consignée.",
  },
  {
    type: 'recap',
    items: [
      "Je sais formuler une demande de synthèse en précisant l'objectif, l'audience, le niveau de détail et le format de sortie attendus.",
      "Je sais déposer un document long complet et vérifier un échantillon des points produits contre la source.",
      "Je sais demander explicitement une contre-argumentation, et je comprends pourquoi ce n'est jamais le comportement par défaut du modèle.",
      "Je sais rédiger un document professionnel par itération section par section, en validant le plan avant tout contenu.",
      "Je n'accepte jamais une première version d'un document rédigé par l'IA sans relecture critique humaine avant diffusion.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 04 — Microsoft Copilot : l'IA native dans Office 365 & Teams.",
  },
]
