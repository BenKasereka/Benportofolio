// Module 01 — Structure Organisationnelle des ONG & Rôle des RH
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Structure Organisationnelle des ONG & Rôle des RH',
    hook: "Savoir dès le premier jour à qui vous rapportez vraiment et quelles décisions vous appartiennent : c'est ce qui évite à un RH junior de tout bloquer par excès de prudence, ou de trancher seul des dossiers qui ne sont pas de son ressort.",
  },
  {
    type: 'objectives',
    items: [
      "Vous positionner correctement dans l'organigramme (le schéma officiel des postes et des rattachements hiérarchiques) réel d'une mission, terrain et siège, dès votre prise de poste.",
      "Expliquer pourquoi les rôles clés et les circuits de décision diffèrent entre le niveau terrain et le niveau siège.",
      "Distinguer les responsabilités RH sur l'ensemble du cycle, du recrutement à la séparation du personnel.",
      "Structurer une interface RH-Finance fiable pour la paie mensuelle et la gestion des avantages sociaux.",
      "Cartographier l'organigramme réel d'une mission et corriger les écarts avec l'organigramme officiel sans braquer l'équipe en place.",
    ],
  },
  {
    type: 'concept',
    title: 'Terrain vs siège : deux logiques, pas une hiérarchie décorative',
    body: [
      "Le siège (headquarters, la direction centrale de l'organisation) porte la responsabilité institutionnelle : relation avec les bailleurs, conformité légale, politique RH globale, arbitrages budgétaires entre missions. Ses décisions engagent toute l'organisation et passent par des circuits de validation plus longs.",
      "Le terrain (la mission ou base où vous travaillez concrètement) porte la responsabilité opérationnelle immédiate : un projet qui tourne, une équipe à payer à temps. C'est pourquoi une mission bien structurée délègue au Chef de Mission et à son HR Manager une autorité réelle sur les décisions RH du quotidien, que le siège ne reprend que sur les dossiers à fort enjeu.",
    ],
    highlight: "Un organigramme n'apprend pas seulement \"qui rapporte à qui\" — il apprend quelles décisions vous pouvez prendre seul, lesquelles demandent l'avis du HR Manager, et lesquelles doivent remonter au siège. Confondre ces trois niveaux est l'erreur la plus fréquente d'un RH junior.",
  },
  {
    type: 'comparison-table',
    title: 'Les rôles clés à identifier dans toute structure d\'ONG',
    columns: ['Rôle', 'Niveau', 'Ce qu\'il faut savoir de lui dès le jour 1'],
    rows: [
      ['Head of Mission / Country Director', 'Terrain (national)', 'Autorité finale sur les décisions RH de la mission, sauf celles réservées au siège. Premier point de validation pour tout dossier sensible.'],
      ['HR Manager / Coordinateur RH', 'Terrain (national)', 'Responsable hiérarchique direct du HR Officer de base ; centralise les dossiers RH du pays et fait l\'interface avec le Head of Mission.'],
      ['HR Officer / Admin-RH', 'Terrain (base)', 'Exécution quotidienne : contrats, paie, dossiers individuels, présence. Souvent le poste d\'entrée en RH humanitaire.'],
      ['Base Manager / Chef de base', 'Terrain (base)', 'Pas un poste RH, mais un interlocuteur RH quotidien incontournable : il remonte les problèmes disciplinaires ou de moral en premier.'],
      ['Head of HR / RH Siège', 'Siège', 'Porte la politique RH globale, valide les cas à fort enjeu, garantit la cohérence RH entre missions.'],
      ['Finance Manager / Coordinateur Finance', 'Terrain (national)', 'Interlocuteur direct pour la paie, les avantages sociaux et les coûts RH imputés aux budgets bailleurs.'],
    ],
  },
  {
    type: 'concept',
    title: 'Le poste qui en sait plus qu\'il n\'y paraît',
    body: "Traiter le Base Manager comme un simple exécutant sans rôle RH est un piège classique de terrain. Dans la réalité, c'est souvent lui qui détecte en premier un conflit d'équipe, une absence répétée ou un problème de moral — bien avant qu'un dossier disciplinaire formel n'atterrisse sur le bureau du RH.",
    highlight: "Ignorer ce canal informel, c'est apprendre les problèmes RH avec plusieurs semaines de retard.",
  },
  {
    type: 'process',
    title: 'Le cycle RH complet : le fil conducteur de cette formation',
    steps: [
      { title: 'Recrutement national & international (Module 02)', body: 'Définition de poste, publication, sélection, entretiens, vérification des références.' },
      { title: 'Contrats & administration du personnel (Module 03)', body: 'Type de contrat, dossier individuel, gestion disciplinaire.' },
      { title: 'Rémunération & avantages sociaux (Module 04)', body: 'Grille salariale, primes terrain, avantages sociaux.' },
      { title: 'Évaluation des performances & développement (Module 05)', body: 'Suivi de la performance, plans de formation, évolution de carrière.' },
      { title: 'Séparation du personnel', body: 'Fin de contrat, démission, licenciement, départ en fin de mission — souvent négligée alors qu\'elle concentre un risque légal et réputationnel élevé.' },
    ],
  },
  {
    type: 'concept',
    title: 'L\'interface RH-Finance n\'est jamais un sujet "purement RH"',
    body: [
      "La paie n'est pas un document RH transmis à la Finance pour exécution passive — c'est une collaboration mensuelle à enjeu partagé. Le RH sait qui a été recruté, qui est parti, qui a changé de poste. La Finance sait quel budget bailleur porte chaque poste et quelles échéances de trésorerie contraignent la date de virement.",
      "Sans échange structuré entre les deux, l'un de ces scénarios finit toujours par arriver : la Finance paie sur la base d'informations RH obsolètes, ou le RH promet des ajustements que la trésorerie ne peut pas honorer.",
    ],
    highlight: "Une erreur de paie n'est jamais un simple incident administratif : c'est un problème de confiance pour le personnel et un problème de trésorerie pour l'organisation.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Reporting line', definition: "Ligne hiérarchique formelle — à qui un poste rapporte administrativement et techniquement (les deux ne sont pas toujours la même personne)." },
      { term: 'Ligne fonctionnelle vs technique', definition: "Dans certaines ONG, un HR Officer de base rapporte administrativement au Base Manager mais techniquement au HR Manager de mission — les deux liens coexistent et doivent être écrits, pas seulement compris à l'oral." },
      { term: 'Poste fantôme', definition: "Un poste qui figure encore sur l'organigramme officiel ou la masse salariale (la liste des personnes payées) alors que la personne qui l'occupait est partie depuis un moment." },
      { term: 'Interface RH-Finance', definition: "Le circuit mensuel structuré par lequel le RH transmet à la Finance toute information affectant la paie (embauches, départs, changements de contrat, congés)." },
    ],
  },
  {
    type: 'process',
    title: 'Cartographier l\'organigramme réel d\'une mission dès l\'arrivée',
    steps: [
      { title: 'Réunir les trois sources (jour 1)', body: 'Organigramme officiel, masse salariale du mois précédent, liste des contrats actifs — leurs écarts sont votre matière de travail.' },
      { title: 'Transcrire l\'organigramme officiel tel quel (jour 1-2)', body: 'Dans le template organigramme-cartographie-roles-rh.xlsx, onglet "Cartographie", sans encore rien corriger.' },
      { title: 'Confronter chaque ligne à la masse salariale et au terrain (jour 2-4)', body: 'Vérifier présence réelle et interroger le Base Manager et 2-3 membres d\'équipe de confiance, pas seulement les documents.' },
      { title: 'Marquer les écarts sans les effacer (jour 3-4)', body: 'Poste vacant non signalé, rattachement différent, poste fantôme — l\'onglet "Alertes" signale les rattachements non clarifiés.' },
      { title: 'Structurer le circuit RH-Finance (jour 4-5)', body: 'Avec le template fiche-interface-rh-finance-paie.docx : ce qui doit être transmis chaque mois, la date limite, la signature conjointe.' },
      { title: 'Faire valider les écarts avant de les considérer définitifs (jour 5)', body: 'Ne jamais modifier l\'organigramme officiel seul : présenter la cartographie corrigée au Head of Mission ou au HR Manager de mission.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "L\'organigramme fantôme, Goma, RDC"',
    scenario: "Nouvellement recrutée comme HR Officer sur une base de Goma, sans passation écrite de votre prédécesseure, vous recevez un organigramme PowerPoint daté de huit mois et la masse salariale du mois précédent. En appliquant la méthode de cartographie, vous découvrez deux postes fantômes (dont un salaire encore versé à une personne partie depuis quatre mois) et un rattachement hiérarchique jamais formalisé.",
    steps: [
      "Un \"Assistant Logistique\" a démissionné il y a quatre mois, mais son nom apparaît encore sur la masse salariale du mois dernier.",
      "Un \"Superviseur Distribution\" indiqué comme actif est en réalité en congé sans solde depuis deux mois.",
      "L'Assistant RH de la base est censé rapporter au HR Manager de mission à Kinshasa, mais reçoit en pratique ses instructions quotidiennes du Base Manager local.",
      "Le Base Manager, en poste depuis trois ans, gère ces ajustements \"à l'oreille\" sans les faire remonter — une correction perçue comme une remise en cause de sa gestion pourrait mal passer.",
    ],
  },
  {
    type: 'exercise',
    title: 'Corriger l\'organigramme sans braquer l\'équipe',
    instructions: "Complétez le template organigramme-cartographie-roles-rh.xlsx en y intégrant les trois postes concernés, leur statut réel, l'écart détecté et le rattachement correct à faire valider. Rédigez ensuite, en moins d'une demi-page, comment vous présenteriez ces trois écarts au Head of Mission ET au Base Manager, dans quel ordre, et avec quelle formulation pour le poste fantôme toujours payé — un sujet à traiter en urgence avec la Finance, sans sous-entendre d'accusation avant vérification complète. Enfin, dans fiche-interface-rh-finance-paie.docx, indiquez quelle information transmettre à la Finance concernant l'Assistant Logistique parti, et sous quel délai.",
    deliverable: 'La cartographie corrigée, la note de présentation des écarts (une demi-page maximum) et la fiche d\'interface RH-Finance complétée.',
  },
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Se fier à l'organigramme officiel sans jamais le vérifier contre la réalité du terrain — un document qui n'a pas été mis à jour depuis plusieurs mois est un historique, pas un organigramme.",
      "Ignorer l'interface avec la Finance jusqu'à ce qu'un problème de paie éclate publiquement.",
      "Ne pas clarifier son propre rattachement hiérarchique dès l'arrivée en poste — au risque de tout escalader, ou de tout trancher seul.",
      "Corriger l'organigramme seul, sans validation, et l'imposer comme un fait accompli.",
      "Traiter un poste fantôme comme un simple oubli administratif sans vérifier s'il cache une fraude — sécuriser d'abord le virement avec la Finance, puis investiguer.",
    ],
  },
  {
    type: 'recap',
    items: [
      "Je sais expliquer pourquoi les circuits de décision diffèrent entre le terrain et le siège.",
      "Je peux citer les rôles clés d'une structure de mission et ce qu'il faut savoir de chacun dès le jour 1.",
      "Je connais les grandes étapes du cycle RH complet et je sais y situer chaque module de cette formation.",
      "J'ai cartographié un organigramme réel en confrontant l'organigramme officiel, la masse salariale et le terrain.",
      "J'ai formalisé un circuit RH-Finance mensuel avec une échéance et une signature conjointe.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 02 — Recrutement National & International.',
  },
]
