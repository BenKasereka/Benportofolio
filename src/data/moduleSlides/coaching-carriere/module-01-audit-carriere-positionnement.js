// Module 01 — Audit de Carrière & Positionnement Stratégique
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Audit de Carrière & Positionnement Stratégique',
    hook: "Avant d'envoyer une seule candidature, découvrez ce qu'un recruteur voit réellement de votre dossier en 90 secondes — et repartez avec un objectif de poste précis et une feuille de route pour l'atteindre, au lieu de candidater au hasard en espérant un miracle.",
  },
  {
    type: 'objectives',
    items: [
      "Dresser un bilan honnête et structuré de votre parcours : forces réelles, axes de développement et réalisations quantifiables — pas une liste de qualités génériques recopiées d'un modèle trouvé en ligne.",
      "Distinguer votre auto-perception de votre valeur marché réelle, telle qu'elle apparaît aux yeux d'un recruteur qui a 90 secondes pour trier votre dossier parmi 200 autres.",
      "Cibler 2 à 3 secteurs réalistes (ONG, privé, onusien — relatif aux agences des Nations Unies —, institutionnel) en croisant votre expérience réelle et vos aspirations, plutôt que de candidater partout sans discernement.",
      "Définir un profil de poste idéal précis — intitulé, niveau de séniorité, secteur, zone géographique — et non un vœu vague du type \"un poste intéressant\".",
      "Produire une feuille de route de carrière exploitable dès votre prochaine candidature, avec un plan d'action daté.",
    ],
  },
  {
    type: 'stat-callout',
    stat: '90 secondes',
    caption: "Le temps qu'un recruteur consacre à trier votre dossier parmi des centaines d'autres.",
    context: "Sans stratégie claire, un dossier envoyé au hasard se repère dans ce court laps de temps — et se met de côté tout aussi vite.",
  },
  {
    type: 'concept',
    title: 'Pourquoi un audit de carrière précède toute candidature sérieuse',
    body: [
      "Un dossier envoyé sans stratégie se repère en quelques secondes. Ce n'est pas une question de mise en forme : le candidat n'a jamais pris le temps de répondre, pour lui-même, à trois questions simples — qu'ai-je vraiment à offrir, à qui, et pourquoi ce poste précisément. Le recruteur, lui, pose ces trois questions en lisant votre CV, que vous y ayez répondu ou non.",
      "Candidater sans audit préalable ne gaspille pas seulement votre temps : cela gaspille aussi celui du recruteur, qui doit deviner ce que vous ne dites pas. Un candidat qui a fait cet audit — même avec un parcours plus modeste sur le papier — écrit un dossier qui montre une trajectoire cohérente et une raison précise de postuler ici et pas ailleurs. C'est ce dossier-là qui obtient l'entretien.",
    ],
    highlight: "L'audit de carrière est la première étape technique de toute recherche d'emploi sérieuse, au même titre qu'un cahier des charges précède un projet — pas un exercice à faire \"quand on aura le temps\".",
  },
  {
    type: 'concept',
    title: 'La valeur marché : une évaluation relative, pas un ressenti',
    body: [
      "La plupart des candidats évaluent leur profil à partir de ce qu'ils ressentent avoir accompli — leur ancienneté, leurs diplômes, leur engagement personnel. Un recruteur évalue un profil à partir de ce qu'il peut objectivement vérifier et comparer à un besoin précis. L'écart entre ces deux logiques est souvent la cause principale d'une recherche d'emploi qui s'enlise sans que le candidat comprenne pourquoi.",
      "La valeur marché d'un profil n'est pas une note absolue : c'est une évaluation relative à un poste et un secteur donnés, construite à partir d'éléments vérifiables — expérience réellement pertinente pour le poste visé, résultats démontrables et si possible chiffrés, progression de responsabilité visible dans le temps.",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Ce qui pèse réellement dans un dossier de candidature',
    columns: ['Ce qui pèse réellement', 'Ce qui pèse peu, contrairement à une croyance répandue'],
    rows: [
      ['Résultats quantifiables dans un rôle comparable ("a réduit les délais de livraison de 30 %")', 'Liste de qualités personnelles non illustrées ("rigoureux, dynamique, motivé")'],
      ["Progression de responsabilité visible et datée (d'assistant à coordinateur à chef d'équipe)", 'Ancienneté brute dans un même poste sans évolution de périmètre'],
      ["Alignement précis entre l'expérience présentée et l'intitulé du poste visé", "Motivation généraliste (\"je suis passionné par l'humanitaire depuis toujours\")"],
      ['Preuves vérifiables : chiffres, résultats, références mobilisables', 'Accumulation de formations courtes sans lien avec une compétence réellement exercée'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Valeur marché', definition: "La valeur objective de votre profil pour un poste et un secteur donnés, telle qu'un recruteur peut la vérifier — par opposition à votre auto-perception." },
      { term: 'Positionnement', definition: "La manière dont vous présentez votre profil pour qu'il corresponde clairement à un type de poste et un niveau précis, plutôt qu'à \"tout ce qui pourrait m'intéresser\"." },
      { term: 'Bascule de rôle', definition: "Le passage d'un rôle opérationnel (exécution) à un rôle managérial (supervision, arbitrage, décision) — un changement à démontrer dans le discours et le CV, pas seulement vécu sur le terrain." },
      { term: 'Profil de poste idéal', definition: 'La description précise du poste que vous visez réellement — intitulé, niveau de séniorité, secteur, zone géographique — utilisée comme filtre pour choisir où candidater.' },
      { term: 'Benchmarking', definition: 'La comparaison de votre profil et de vos prétentions (salaire, niveau, intitulé) à des références réelles du marché, plutôt qu\'à une estimation personnelle non vérifiée.' },
    ],
  },
  {
    type: 'process',
    title: 'Construire votre positionnement en 5 étapes',
    steps: [
      { title: 'Lister vos réalisations quantifiables', body: "Dans le template bilan-competences-positionnement-carriere.xlsx, listez 2 à 4 réalisations par poste, formulées en action + contexte + résultat mesurable — jamais \"j'ai géré une équipe\", mais un volume, une durée ou un pourcentage précis." },
      { title: 'Noter vos compétences par confiance et pertinence marché', body: "Listez vos compétences techniques et transférables, puis notez chacune sur deux axes : votre niveau de confiance réel et sa pertinence pour le secteur visé. Un score de positionnement calculé automatiquement indique l'écart avec votre cible." },
      { title: 'Cibler 2 à 3 secteurs réalistes', body: 'Identifiez les secteurs où votre expérience a une valeur directement transférable, pas seulement ceux qui vous font envie. Cibler plus de 3 secteurs à la fois revient, dans les faits, à n\'en cibler aucun sérieusement.' },
      { title: 'Rédiger un profil de poste idéal précis', body: 'Formulez votre cible en une phrase vérifiable : intitulé de poste précis, niveau de séniorité, secteur retenu, zone géographique. Ce profil devient votre filtre pour évaluer chaque offre.' },
      { title: 'Construire votre feuille de route de carrière', body: "Avec le template feuille-de-route-carriere.docx : situation actuelle, profil de poste idéal, écart de compétences identifié, plan d'action daté et une date de révision fixée à l'avance (3 à 6 mois)." },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas vécu — "Cinq ans de terrain, zéro réponse pour un poste de management"',
    scenario: "Amina a cinq ans d'expérience en logistique humanitaire de terrain et a déjà supervisé une équipe de 8 personnes, arbitré un budget logistique de 250 000 USD et pris seule une décision stratégique lors d'une rupture de stock critique. Elle postule depuis quatre mois à des postes de Supply Chain Manager sans obtenir un seul entretien.",
    steps: [
      'Son CV décrit des tâches ("supervision des livraisons", "gestion des stocks") au lieu de responsabilités managériales quantifiées — rien n\'indique qu\'elle a déjà exercé un rôle managérial.',
      "Le problème n'est pas son expérience, c'est son positionnement : elle n'a jamais fait, dans son discours, la bascule d'un rôle opérationnel vers un rôle managérial.",
      "La correction ne demande aucune nouvelle expérience : reprendre chaque mission avec la grille de réalisations quantifiables et isoler explicitement les moments de responsabilité managériale, même informelle.",
      'Une fois ce travail fait, le même parcours, sans une seule journée supplémentaire, devient lisible comme un dossier de candidate managériale.',
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents à éviter',
    items: [
      "Candidater \"à tout\" sans cibler un secteur ou un niveau précis — un dossier générique envoyé à 40 offres différentes se reconnaît en quelques secondes et n'obtient presque jamais d'entretien.",
      'Sous-évaluer ou surévaluer sa valeur marché sans jamais avoir fait de benchmarking réel — dans les deux cas, l\'absence de comparaison à des références réelles mène à des choix de candidature mal calibrés.',
      'Définir un objectif de carrière vague ("un poste intéressant") au lieu d\'un profil de poste précis et actionnable, qui seul permet de filtrer les offres pertinentes.',
      "Confondre années d'expérience et niveau de responsabilité — postuler à un rôle managérial sans jamais avoir démontré avoir supervisé une équipe ou arbitré un budget.",
      "Ne jamais mettre à jour son positionnement après une évolution réelle du parcours — le positionnement doit suivre la réalité, pas rester figé sur l'intitulé du premier poste occupé.",
    ],
  },
  {
    type: 'exercise',
    title: 'Bilan de compétences et feuille de route',
    instructions: "En vous mettant à la place d'Amina, complétez bilan-competences-positionnement-carriere.xlsx avec au moins 4 réalisations quantifiées faisant apparaître supervision d'équipe, arbitrage budgétaire et décision stratégique, puis l'inventaire de compétences en distinguant l'opérationnel du managérial. Rédigez ensuite sa feuille de route avec feuille-de-route-carriere.docx : situation actuelle, profil de poste idéal (Supply Chain Manager), écart identifié et plan d'action daté.",
    deliverable: 'Les deux fichiers complétés, avec une feuille de route ne dépassant pas 2 pages.',
  },
  {
    type: 'recap',
    items: [
      'Je sais lister mes réalisations quantifiables au lieu de qualités génériques non illustrées.',
      'Je sais distinguer ma valeur marché réelle de mon auto-perception, poste par poste.',
      'Je sais cibler 2 à 3 secteurs réalistes plutôt que de candidater sans discernement.',
      "Je sais formuler mon profil de poste idéal en une phrase précise : intitulé, niveau, secteur, zone géographique.",
      "J'ai une feuille de route de carrière avec un plan d'action daté et une date de révision.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 02 — CV aux Normes ATS Internationales.',
  },
]
