// Module 08 — Rédaction de Rapports d'Audit Professionnels
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: "Rédaction de Rapports d'Audit Professionnels",
    hook: "Un rapport techniquement correct que personne ne lit jusqu'au bout ne change rien sur le terrain. Ce module vous apprend à écrire des constats qu'on ne peut pas contester, et des recommandations que quelqu'un va réellement exécuter.",
  },
  {
    type: 'objectives',
    items: [
      "Structurer un rapport d'audit interne complet — page de garde, résumé exécutif (une synthèse d'une page maximum en tête de rapport), corps du rapport par domaine, annexes — que vos lecteurs peuvent réellement exploiter.",
      "Distinguer, dans vos propres notes de terrain, un fait vérifiable d'une opinion, et reformuler systématiquement la seconde avant de l'écrire dans un rapport.",
      "Formuler un constat selon la méthode CCCE (Constat, Critère, Cause, Effet — les quatre éléments obligatoires d'un constat d'audit défendable) à partir d'observations brutes recueillies en mission.",
      "Rédiger des recommandations assignables — un responsable nommé, une échéance datée, une action vérifiable — et non de simples vœux pieux du type « renforcer les contrôles ».",
      "Prioriser un ensemble de recommandations selon le risque et la facilité de mise en œuvre, plutôt que de les présenter toutes sur le même plan d'importance.",
    ],
  },
  {
    type: 'concept',
    title: "Le rapport qui ne sert à rien — et pourquoi il existe encore",
    body: [
      "Des dizaines de rapports d'audit techniquement corrects, parfaitement mis en page, n'ont strictement rien changé sur le terrain. Leur point commun : ils décrivent des problèmes sans jamais prouver qu'il s'agit bien de problèmes, et recommandent des solutions que personne ne sait qui doit exécuter, ni pour quand. Un Directeur Pays débordé qui reçoit 40 pages de constats non hiérarchisés referme le rapport à la page 5 et l'oublie dans un tiroir.",
      "Le rapport d'audit n'est pas un exercice de style. C'est un outil de décision. Chaque page doit répondre à une question simple : qu'est-ce qui ne va pas, avec quelle gravité, pourquoi, et qu'est-ce que je dois faire, dans quel ordre, avec qui.",
    ],
    highlight: "Un rapport qui ne permet pas de répondre à ces quatre questions en moins de dix minutes de lecture n'a pas atteint son objectif, même truffé de références aux normes professionnelles.",
  },
  {
    type: 'process',
    title: 'La méthode CCCE — transformer une observation en constat défendable',
    steps: [
      { title: 'Constat', body: "Ce qui EST, factuellement, vérifié par une preuve documentaire ou une observation directe — un fait avec un chiffre et une source, jamais un adjectif ni un jugement. Ex. : « Sur 12 dossiers d'achat supérieurs à 2 000 USD examinés, 3 ne contiennent aucun PV de comité d'achat »." },
      { title: 'Critère', body: "Ce qui DEVRAIT être, selon une norme, une procédure interne ou un manuel bailleur, citée précisément. Sans critère explicite et référencé, un constat n'est qu'une préférence personnelle." },
      { title: 'Cause', body: "Le POURQUOI de l'écart, recherché activement pendant la mission, jamais deviné a posteriori depuis un bureau. Une cause bien identifiée transforme une recommandation générique en solution ciblée." },
      { title: 'Effet', body: "La CONSÉQUENCE réelle, quantifiée ou qualifiée, de l'écart constaté. C'est ce qui convainc un décideur d'agir — un constat sans effet chiffré se noie dans la masse des observations mineures." },
    ],
  },
  {
    type: 'concept',
    title: 'Ce que change concrètement la méthode CCCE',
    body: "La méthode CCCE empêche l'auditeur d'écrire un constat accusatoire (« le chef de base ne respecte pas les procédures ») et oblige à écrire un constat construit, où chaque affirmation est adossée à une preuve, une norme, une explication recherchée sur le terrain, et une conséquence réelle.",
    highlight: "C'est aussi ce qui protège l'auditeur : un constat CCCE complet résiste à la contestation, parce qu'il ne repose sur aucune opinion personnelle non sourcée.",
  },
  {
    type: 'concept',
    title: "Prioriser : pourquoi tout ne peut pas être « urgent »",
    body: "Un rapport de 15 recommandations toutes présentées comme prioritaires produit le même effet qu'un rapport sans aucune recommandation. La priorisation professionnelle croise deux axes : le niveau de risque de l'écart (financier, réputationnel, de conformité, de sécurité), et la facilité de mise en œuvre de la recommandation (ressources, résistance au changement, délai réaliste). Un risque élevé corrigible vite et à faible coût est une « quick win » à traiter immédiatement ; un risque élevé mais structurellement difficile à corriger doit rester visible en tête de rapport ; un risque faible n'a rien à faire dans le résumé exécutif.",
    highlight: "La priorisation doit structurer la lecture du rapport dès le résumé exécutif, où seules les 3 à 5 recommandations les plus critiques apparaissent.",
  },
  {
    type: 'checklist',
    title: "Une recommandation assignable, ce n'est pas un vœu pieux",
    items: [
      'Un responsable nommé — pas « l\'équipe achats », mais une personne précise.',
      'Une échéance datée — pas « prochainement », une date ou un délai précis.',
      'Une action vérifiable — un livrable ou un état qu\'on peut constater, pas une intention.',
      'À éviter : « renforcer les contrôles sur les achats » ne se traduit jamais en action.',
      'Ce qui fonctionne : « Le Log Manager de base convoque et documente un comité d\'achat formel pour tout achat supérieur à 1 000 USD, PV signé archivé dans les 48h, à compter du 1er du mois suivant » — cela se traduit, se suit, et se clôture.',
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'CCCE', definition: 'Méthode de formulation d\'un constat d\'audit en quatre éléments obligatoires — Constat, Critère, Cause, Effet.' },
      { term: 'Résumé exécutif', definition: "Synthèse d'une page maximum, en tête de rapport, qui porte à elle seule le niveau d'assurance global et les recommandations les plus critiques." },
      { term: 'Plan d\'action correctif', definition: "Document de suivi (Management Action Plan) qui assigne chaque recommandation à un responsable nommé avec une échéance datée et un statut suivi dans le temps." },
      { term: 'Quick win', definition: "Recommandation à risque significatif mais à coût et délai de mise en œuvre faibles — à traiter en priorité absolue." },
    ],
  },
  {
    type: 'process',
    title: 'Des notes de terrain désordonnées au rapport prêt à diffuser',
    steps: [
      { title: 'Trier les observations brutes par domaine (Jour 1)', body: "Classez chaque observation par cycle (achats, RH, trésorerie, logistique...) et éliminez les doublons ou celles qui ne reposent sur aucune preuve vérifiable." },
      { title: 'Reformuler chaque observation en constat CCCE (Jour 1-2)', body: "Si vous ne parvenez pas à renseigner l'un des quatre éléments, c'est le signal que l'observation n'est pas encore mûre pour figurer dans le rapport." },
      { title: 'Rédiger chaque bloc dans le gabarit (Jour 2-3)', body: "Une phrase factuelle par élément, sans qualificatif inutile, et une recommandation directement associée à chaque constat." },
      { title: 'Assigner et prioriser dans la grille (Jour 3)', body: "Notez le niveau de risque et la facilité de mise en œuvre de 1 à 5, puis complétez le responsable nommé et l'échéance réaliste." },
      { title: 'Rédiger le résumé exécutif en dernier, jamais en premier (Jour 3-4)', body: "N'y faites figurer que le contexte en 3-4 lignes, le niveau d'assurance global, et les 3 à 5 recommandations les plus prioritaires." },
      { title: 'Faire relire et valider avant diffusion (Jour 4-5)', body: "Faites relire par un pair ou un superviseur pour vérifier que chaque constat tient debout sans vous, lecteur extérieur au terrain." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Rédiger un constat accusatoire ou vague sans les 4 éléments CCCE complets — le même fait, formulé en CCCE avec chiffres et référence, devient un constat que personne ne peut sérieusement contester.",
      "Noyer le rapport de détails secondaires au lieu de prioriser les constats à fort impact : la longueur d'un développement doit être proportionnelle à l'Effet documenté, pas à la facilité de le décrire.",
      "Formuler des recommandations vagues non assignables à un responsable précis avec une échéance claire.",
      "Accepter la cause donnée par l'audité sans la creuser — un auditeur senior demande toujours depuis quand exactement le contournement existe, et si une alternative plus légère a été envisagée.",
      "Rédiger le résumé exécutif à chaud, sous le coup de l'indignation du dernier constat découvert, au lieu de laisser passer une nuit.",
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — « Le carnet de terrain », base de Bunia, RDC',
    scenario: "Vu 3 dossiers d'achat (fournitures médicales, entre 1 800 et 3 200 USD chacun, un peu plus de 8 000 USD au total) sans PV de comité d'achat dans le classeur. Le chef de base explique que le comité (lui-même + log + finance) n'a pas le temps de se réunir formellement — les décisions se prennent « à trois dans le couloir » puis sont exécutées par le log. Cela dure depuis au moins 6 mois. Le bailleur institutionnel du projet exige formellement un PV signé au-dessus de 1 000 USD.",
    steps: [
      "Cette note brute n'est pas exploitable telle quelle dans un rapport : il manque un chiffre exact et la référence précise du manuel bailleur — à vérifier avant de quitter la base, jamais à inventer après coup.",
      "La recommandation doit être assignée à un responsable nommé, déductible du contexte (le chef de base ou le Log Manager), avec une échéance réaliste tenant compte de la cause identifiée.",
      "La cause donnée par le chef de base (« pas le temps ») est une cause de confort à creuser : une alternative plus légère (comité restreint à deux personnes en cas d'urgence) a-t-elle été envisagée avant d'abandonner la procédure ?",
    ],
  },
  {
    type: 'exercise',
    title: "Transformer une note de terrain en constat CCCE",
    instructions: "À partir de la note brute, rédigez un constat complet respectant les quatre éléments CCCE, en précisant pour chacun quelle phrase de la note vous avez utilisée — et ce que vous auriez dû vérifier avant de quitter la base si une information manque. Reportez ce constat dans un bloc du gabarit-rapport-audit-interne-ccce.docx avec une recommandation assignable et une échéance réaliste. Intégrez enfin cette recommandation dans grille-priorisation-recommandations.xlsx, avec un niveau de risque et une facilité de mise en œuvre justifiés en une phrase chacun.",
    deliverable: 'Le bloc de constat CCCE complété dans le gabarit Word, et la ligne correspondante dans la grille Excel, avec vos deux phrases de justification du score.',
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer la structure complète d'un rapport d'audit interne et à quoi sert chaque section.",
      "Je sais transformer une observation de terrain brute en un constat CCCE complet, sans sauter aucun des quatre éléments.",
      "Je sais distinguer un fait vérifié d'une cause simplement déclarée par l'audité et non recoupée.",
      "Je sais rédiger une recommandation assignable, avec un responsable nommé et une échéance datée.",
      "Je sais prioriser mes recommandations en croisant niveau de risque et facilité de mise en œuvre.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 09 — Préparation aux Audits Externes & Interaction avec les Auditeurs.",
  },
]
