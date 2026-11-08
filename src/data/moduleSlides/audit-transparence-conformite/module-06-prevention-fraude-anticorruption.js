// Module 06 — Prévention de la Fraude & Politique Anti-Corruption
// Restructuration en diapositives du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) — matière factuelle inchangée, une idée
// par écran.
export default [
  {
    type: 'cover',
    title: 'Prévention de la Fraude & Politique Anti-Corruption',
    hook: "Une politique anti-corruption affichée dans le hall d'entrée ne protège personne si personne ne sait comment un signalement voyage réellement une fois envoyé. Ce module vous apprend à vérifier, dans les faits et pas sur le papier, si votre organisation est construite pour prévenir la fraude — ou pour la rendre possible.",
  },
  {
    type: 'objectives',
    items: [
      "Identifier les principales typologies de fraude rencontrées dans une ONG (détournement de fonds, fausses factures, employés fictifs ou « ghost workers », conflits d'intérêt non déclarés) et reconnaître leur mécanisme propre.",
      "Appliquer le triangle de la fraude (pression, opportunité, rationalisation — les trois conditions qui, réunies, rendent une fraude possible) à chacune de ces typologies pour comprendre pourquoi elle apparaît, pas seulement comment elle se déroule.",
      "Évaluer si un mécanisme de signalement (le canal par lequel un employé peut alerter, en toute confidentialité, d'un soupçon de fraude) est réellement sécurisé dans la pratique, au-delà de ce qu'affirme la politique écrite.",
      "Construire une grille d'évaluation de la culture organisationnelle et du tone-at-the-top (le signal donné par le comportement réel de la direction, au-delà de son discours officiel) à partir d'indicateurs observables, pas d'impressions.",
    ],
  },
  {
    type: 'concept',
    title: "Une question avant d'ouvrir le moindre dossier",
    body: [
      "Ce module ne reprend pas les red flags financiers dossier par dossier (achats, caisse, paie) — cette matière est couverte ailleurs. Ici, la question se situe un cran au-dessus : une organisation, dans sa structure, ses réflexes et le comportement de ses dirigeants, est-elle construite pour prévenir la fraude, ou pour la rendre possible ?",
      "C'est la question qu'un auditeur interne senior pose en premier, avant même d'ouvrir un seul dossier de dépense — parce que la réponse détermine combien de dossiers il faudra ouvrir ensuite.",
    ],
  },
  {
    type: 'concept',
    title: 'Le triangle de la fraude',
    body: "Le triangle de Cressey décrit les trois conditions qui, réunies, rendent une fraude possible : la pression (une motivation personnelle, souvent financière), l'opportunité (une faille de contrôle qui permet d'agir sans être détecté) et la rationalisation (la justification que la personne se donne à elle-même pour agir sans se percevoir comme un fraudeur). Ce triangle n'est utile que si vous savez le lire typologie par typologie, sur le terrain — pas seulement le réciter en formation.",
  },
  {
    type: 'comparison-table',
    title: 'Les 4 typologies de fraude en ONG, lues avec le triangle',
    columns: ['Typologie', 'Pression', 'Opportunité', 'Rationalisation'],
    rows: [
      [
        'Détournement de fonds',
        'Financière et personnelle (dette, urgence familiale, salaire perçu comme insuffisant).',
        'Contrôle de caisse trop rare, rapprochement bancaire fait par la même personne qui décaisse.',
        "Sentiment d'iniquité salariale entre personnel national et international.",
      ],
      [
        'Fausses factures',
        "Partagée entre l'agent interne et le fournisseur complice.",
        'Mise en concurrence non documentée, réception non contre-vérifiée, même petit cercle de fournisseurs jamais challengé.',
        '« Le prix du marché local est de toute façon opaque, personne ne peut vraiment le vérifier. »',
      ],
      [
        'Ghost workers (employés fictifs ou partis mais maintenus sur la liste de paie)',
        'Celle de la personne qui orchestre le stratagème (responsable RH ou superviseur terrain).',
        'La même personne gère embauches/départs ET transmet la liste de paie, sans vérification croisée.',
        '« Compensation méritée » pour un poste sous-payé.',
      ],
      [
        "Conflits d'intérêt non déclarés",
        "Souvent absente au sens strict — l'agent ne se perçoit pas comme fraudeur.",
        "Absence de procédure de déclaration systématique des liens d'intérêt.",
        "« Je n'ai rien caché, personne ne m'a jamais demandé de déclarer quoi que ce soit. »",
      ],
    ],
  },
  {
    type: 'concept',
    title: 'Un contrôle différent pour chaque typologie',
    body: "Chacune de ces quatre typologies a une signature d'opportunité différente, donc un contrôle différent à renforcer en priorité. Traiter les quatre avec la même réponse générique — « plus de contrôle partout » — disperse l'effort de prévention là où il ne sert à rien, et le retire là où il est vital.",
  },
  {
    type: 'concept',
    title: 'Le tone-at-the-top détermine tout le reste',
    body: [
      "Une politique anti-corruption signée par le Directeur Pays et affichée dans le hall d'entrée ne vaut rien si ce même Directeur Pays contourne lui-même les procédures d'achat « parce que c'est urgent », approuve une dépense sans les pièces complètes « on régularisera plus tard », ou couvre un cadre proche pris en conflit d'intérêt « parce que c'est quelqu'un de valeur ».",
      "Le personnel de terrain observe le comportement réel de la direction avec une précision redoutable, et calibre son propre niveau de rigueur sur ce qu'il voit — jamais sur ce qui est écrit.",
    ],
    highlight: "Évaluer le tone-at-the-top n'est pas un exercice d'opinion sur l'ambiance du bureau : c'est une collecte de preuves factuelles et datées, au même titre qu'un contrôle de pièces comptables — souvent le facteur de risque le plus prédictif de tout un dossier d'audit.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Ghost worker', definition: 'Employé maintenu sur la liste de paie (fictif dès l\'origine, ou réel mais parti sans radiation) dont le salaire continue d\'être versé et détourné.' },
      { term: "Conflit d'intérêt", definition: "Situation où l'intérêt personnel, familial ou financier d'un agent pourrait influencer — ou donner l'apparence d'influencer — une décision qu'il prend au nom de l'organisation." },
      { term: 'Tone-at-the-top', definition: 'Signal réel, donné par le comportement quotidien de la direction (et non par ses discours ou politiques écrites), sur ce qui est effectivement toléré dans l\'organisation.' },
      { term: 'Lanceur d\'alerte de bonne foi', definition: 'Personne qui signale un soupçon raisonnable de fraude ou de faute grave sans intention malveillante, protégée à ce titre même si le signalement s\'avère finalement infondé.' },
      { term: 'Anonymat crédible', definition: 'Garantie d\'anonymat qui résiste à un test pratique réel, et pas seulement à une promesse écrite dans une politique.' },
    ],
  },
  {
    type: 'process',
    title: 'Évaluer un mécanisme de signalement dans les faits, pas sur le papier',
    steps: [
      { title: 'Localiser le canal réel', body: "Identifiez le canal tel qu'il existe concrètement (ligne dédiée, boîte mail, formulaire) et vérifiez qu'il fonctionne encore réellement — pas seulement sur le papier de la politique." },
      { title: 'Réaliser un test d\'anonymat réel', body: "Déposez un signalement fictif, avec l'accord du commanditaire d'audit, puis remontez la chaîne : qui reçoit techniquement le message en premier ? Le canal permet-il d'identifier l'expéditeur malgré la promesse d'anonymat ?" },
      { title: "Reconstituer l'historique réel des signalements", body: "Un mécanisme en place depuis des années sans aucun signalement reçu, dans une grande organisation en contexte à risque, n'est presque jamais un signe de santé — c'est un signal à investiguer." },
      { title: 'Vérifier l\'accessibilité réelle pour le personnel de terrain', body: "Un canal accessible pour un cadre au siège peut être inaccessible pour un agent isolé, sans connexion fiable, qui ne maîtrise pas la langue de la politique écrite." },
      { title: 'Construire la grille de tone-at-the-top à partir de faits datés', body: 'Pour chaque indicateur, n\'inscrivez que des faits vérifiables et datés — jamais une impression générale sur l\'ambiance.' },
      { title: 'Conclure sur un niveau de risque global', body: "Une politique bien rédigée adossée à un tone-at-the-top négatif ne protège rien : documentez cette conclusion aussi clairement qu'un écart comptable." },
    ],
  },
  {
    type: 'warning',
    title: 'Pièges fréquents',
    items: [
      "Faire signer une politique à l'embauche sans jamais l'expliquer oralement dans la langue de travail réelle de chaque base — cela coche une case administrative, mais ne construit aucune compréhension.",
      "Croire un mécanisme « anonyme » sur parole alors qu'il permet, dans les faits, d'identifier l'auteur du signalement (numéro connu de tous, formulaire qui journalise une adresse IP, boîte mail consultée par un cercle restreint).",
      "Minimiser un signal de tone-at-the-top négatif venant de la direction elle-même — « on contourne nos propres règles parce que c'est urgent » doit être noté mot pour mot et daté, jamais excusé.",
      "Confondre l'absence de signalement avec l'absence de problème.",
      "Placer le canal de signalement sous l'autorité de la même ligne hiérarchique que celle susceptible d'être visée.",
    ],
  },
  {
    type: 'case-study',
    title: "Cas vécu — « Le canal muet », zone de N'Djaména et bases satellites, Tchad",
    scenario: "Vous auditez une ONG internationale (bureau pays + 4 bases satellites, environ 260 agents). La politique anti-corruption existe depuis 6 ans et un mécanisme de signalement — une ligne téléphonique dédiée, gérée par le service Conformité au siège régional à Nairobi — est en place depuis la même date. Pourtant : zéro signalement enregistré en trois ans, alors que des rumeurs persistantes de détournement circulent depuis deux ans sur la base la plus isolée, autour des avances de carburant.",
    steps: [
      "Le numéro de la « ligne dédiée » affiché dans le hall est en réalité le poste fixe du bureau Conformité à Nairobi — un appel international payant que peu d'agents de terrain peuvent se permettre.",
      "La politique a été distribuée en français à l'embauche, signée, puis classée — jamais expliquée oralement là où une partie du personnel ne lit pas couramment un document juridique en français.",
      "Un ancien superviseur logistique confie qu'il « savait » pour les rumeurs, mais n'a jamais songé à appeler « un bureau à Nairobi qu'il n'a jamais vu, pour dénoncer son propre chef de base ».",
      "Le Représentant Pays sortant admet avoir validé plusieurs réquisitions de carburant « en urgence, sans les trois bons de sortie habituels ».",
    ],
  },
  {
    type: 'exercise',
    title: 'Diagnostiquer le canal muet',
    instructions: "Avec les templates evaluation-mecanisme-signalement-culture.docx et grille-typologie-fraude-red-flags.xlsx : identifiez au moins trois raisons factuelles pour lesquelles ce canal n'est pas réellement accessible ni crédible pour le personnel de la base isolée, et documentez l'historique des trois années sans signalement comme un signal en soi. Complétez la grille de tone-at-the-top avec au moins deux faits datés tirés du cas et concluez sur le niveau de risque global. Cochez ensuite les red flags de la catégorie « Détournement » que ce cas illustre. Formulez enfin trois recommandations opérationnelles, réalisables sous 90 jours, qui s'attaquent aux causes réelles identifiées — pas seulement « renforcer la communication sur la politique existante ».",
    deliverable: 'Les deux templates complétés, et une note de recommandations ne dépassant pas une demi-page.',
  },
  {
    type: 'recap',
    items: [
      "Je sais appliquer le triangle de la fraude (pression, opportunité, rationalisation) à chacune des quatre typologies ONG.",
      "Je sais mener un test pratique d'anonymat d'un canal de signalement, au-delà de la lecture de sa politique écrite.",
      "Je sais construire une grille de tone-at-the-top à partir de faits datés, jamais d'impressions générales.",
      "Je sais interpréter une absence prolongée de signalements comme un signal d'alerte, pas comme une preuve d'absence de fraude.",
      "Je sais formuler des recommandations qui s'attaquent à la cause réelle d'un dysfonctionnement plutôt qu'à son symptôme apparent.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: 'Module 07 — Conformité Bailleurs — USAID/BHA, UE, ECHO & Bailleurs Onusiens.',
  },
]
