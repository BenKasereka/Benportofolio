// Module 08 — Fraude, Corruption & Conformité Financière
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (checklist-red-flags-fraude-financiere.xlsx, procedure-signalement-plan-action-fraude.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (base de Rutshuru de l'ONG fictive « Kivu Avenir Solidarité », la même
// organisation que dans les modules 01 à 06), avec exemples remplis, résultat
// attendu, astuces et erreurs à éviter.
// Les organisations, bailleurs, personnes, résultats de screening et montants
// sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Fraude, Corruption & Conformité Financière',
    hook: "Une fraude ne se révèle presque jamais par un coup d'éclat : elle se révèle par une pile de petits signaux que personne n'a jugés assez graves pour agir. À la fin de ce module, vous aurez en main une carte des opportunités de fraude de votre processus, une checklist de red flags remplie et interprétée, une politique anti-corruption diffusée, un mécanisme de signalement testé, un registre de screening OFAC/UE/ONU avec preuves datées, et un dossier de signalement + plan d'investigation de moins de cinq étapes — sans accuser personne à tort, et sans laisser filer une fraude avérée.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Expliquer le triangle de la fraude (pression, opportunité, rationalisation) et cartographier les opportunités d'un processus sensible, en produisant une matrice « qui fait quoi » et un plan de renforcement des contrôles.",
      "Passer la checklist-red-flags-fraude-financiere.xlsx en routine sur les achats, les caisses et avances, la paie et les relations fournisseurs, en produisant un fichier renseigné ligne à ligne (niveau, constaté, preuve et action de suivi) et un indicateur global interprété.",
      "Rédiger une politique anti-corruption opérationnelle (définitions, règles chiffrées sur les cadeaux et les conflits d'intérêts, devoir de signalement, sanctions) et la faire signer, en produisant un document de deux pages et un registre des signatures.",
      "Faire fonctionner un mécanisme de signalement réellement sécurisé : auditer les quatre critères, ouvrir plusieurs canaux dont un indépendant de la hiérarchie, et produire une grille d'audit du mécanisme avec un plan d'actions daté.",
      "Vérifier l'inéligibilité d'un partenaire ou fournisseur (entité ET dirigeants) sur les listes OFAC, UE et ONU, interpréter les correspondances et archiver une preuve opposable, en produisant une fiche de screening et un registre de revérification.",
      "Recevoir, qualifier et escalader un signalement avec les sections 1 à 3 de procedure-signalement-plan-action-fraude.docx, en proposant une mesure conservatoire proportionnée et réversible.",
      "Structurer une investigation de cinq étapes au plus, réalisable en deux semaines, avec les sections 4 et 5 du même template : plan daté et attribué, résultats consignés, décision finale validée.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce dernier module n'est pas un sermon sur l'honnêteté : c'est un atelier de contrôle. Chaque procédure se termine par un livrable concret que vous construirez sur un seul cas fil rouge, de la cartographie des risques jusqu'à la décision finale d'une investigation.",
      "Le cas fil rouge : vous êtes Finance Officer de « Kivu Avenir Solidarité » (KAS), l'ONG fictive des modules précédents. Le mardi 3 novembre 2026, vous passez la revue trimestrielle (juillet–septembre) des achats, avances et paies de la base de Rutshuru, rattachée au Projet WASH Nord-Kivu financé par Agence Delta. Vous y trouvez un faisceau d'indices, vous devez aussi vérifier un futur sous-traitant avant une signature prévue le 12 novembre, et vous devez conduire tout cela sans accuser personne.",
    ],
    bullets: [
      "Livrable 1 — La carte des opportunités de fraude du processus « achats et avances de la base de Rutshuru » et son plan de renforcement des contrôles.",
      "Livrable 2 — La checklist de red flags (checklist-red-flags-fraude-financiere.xlsx) remplie pour la base de Rutshuru, avec son indicateur global lu et commenté.",
      "Livrable 3 — La politique anti-corruption de KAS (deux pages), son registre des cadeaux et la feuille de signatures.",
      "Livrable 4 — La grille d'audit du mécanisme de signalement et le plan pour le rendre réellement sécurisé.",
      "Livrable 5 — La fiche de screening et le registre de revérification des partenaires, avec les preuves OFAC, UE et ONU archivées.",
      "Livrable 6 — Les sections 1 à 3 de procedure-signalement-plan-action-fraude.docx : signalement, allégation, évaluation initiale et mesure conservatoire.",
      "Livrable 7 — Les sections 4 et 5 du même document : plan d'investigation en cinq étapes datées et attribuées, résultats et décision finale.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : la base de Rutshuru de Kivu Avenir Solidarité',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. L'organisation, ses bailleurs, ses personnes et ses montants sont fictifs, mais construits sur des configurations réelles de bases avancées dans l'Est de la RDC.",
    table: {
      columns: ['Élément', 'Fiche du cas'],
      rows: [
        ['Organisation', 'KAS — bureau de Goma (Nord-Kivu) et base avancée de Rutshuru, à environ 3 heures de route ; projets Nutrition (Fonds Horizon), WASH (Agence Delta), Santé (Fondation Sigma)'],
        ['Projet concerné', 'WASH Nord-Kivu — construction de blocs de latrines dans 8 écoles autour de Rutshuru ; budget 12 mois : 310 000 USD'],
        ['Acteurs', 'Grace M. (Finance Manager, votre responsable) — Théodore W. (Directeur Pays) — Joël B. (coordinateur WASH) — Sylvain T. (chef de base de Rutshuru) — Faustin R. (assistant logistique de la base) — Amani L. (caisse de l\'antenne) — Claire D. (responsable conformité au siège, comité anti-fraude)'],
        ['Règles internes (fictives)', 'Avance de caisse : 500 USD maximum sans double signature. Achat < 500 USD : gré à gré. Achat de 500 à 5 000 USD : trois devis. Au-delà de 5 000 USD : appel d\'offres'],
        ['Date et mission', 'Mardi 3 novembre 2026 : revue trimestrielle T3 (juillet–septembre) de la base de Rutshuru, puis screening de la Coopérative Maendeleo Rutshuru avant la signature d\'un contrat de sous-traitance de 38 500 USD prévue le jeudi 12 novembre'],
      ],
    },
    pitfall: "Dans ce module, on parle de signaux, de faits et de fonctions — jamais de coupables. Faustin R. et Sylvain T. sont des personnes présumées innocentes tant que l'investigation n'a pas conclu : c'est ce qui distingue un professionnel d'un chasseur de sorcières.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Pourquoi ce module ferme la formation, pas par hasard',
    body: [
      "Une comptabilité rigoureuse (module 01), un budget bien construit (module 02), une trésorerie disciplinée (module 03) : tout cela ne sert à rien si, au bout de la chaîne, quelqu'un peut détourner des fonds sans que personne ne le voie venir. Un bailleur qui découvre une fraude ne regarde pas d'abord le montant : il regarde si l'organisation l'avait détectée, signalée et traitée avec méthode.",
      "Un système de contrôle repose sur trois lignes de défense, que ce module vous apprend à actionner dans l'ordre : PRÉVENIR (réduire les opportunités, politique, formation), DÉTECTER (checklist de red flags, screening, signalement), RÉAGIR (investigation structurée, décision proportionnée, notification au bailleur).",
    ],
    table: {
      columns: ['Ligne de défense', 'Ce que vous faites', 'Procédures du module'],
      rows: [
        ['Prévenir', 'Refermer les opportunités, fixer les règles, vérifier les partenaires avant de signer', '1 (carte des opportunités), 3 (politique anti-corruption), 5 (screening)'],
        ['Détecter', 'Passer la checklist en routine, offrir un canal sûr aux lanceurs d\'alerte, revérifier les listes', '2 (red flags), 4 (signalement), 5 (revérification)'],
        ['Réagir', 'Qualifier un soupçon, protéger sans punir, enquêter par écrit, décider, notifier', '6 (signalement et évaluation), 7 (investigation)'],
      ],
    },
    highlight: "Ce module n'est pas un supplément moral : c'est la dernière ligne de défense du système financier, et souvent la première chose qu'un bailleur regarde après un incident.",
  },
  {
    type: 'concept',
    title: 'Le triangle de la fraude (Cressey) : les trois conditions',
    body: [
      "Le criminologue Donald Cressey a formalisé, dès les années 1950, un modèle qui reste la meilleure grille de lecture disponible : une fraude se produit quand trois conditions se rencontrent chez une même personne.",
      "La PRESSION : un besoin financier personnel, souvent caché (dette, maladie, famille élargie à charge). L'OPPORTUNITÉ : un système de contrôle que la personne sait pouvoir contourner. La RATIONALISATION : une justification intérieure qui rend l'acte acceptable à ses propres yeux (« je ne fais que récupérer ce qu'on me doit », « l'organisation a largement les moyens », « tout le monde le fait ici »).",
    ],
    example: {
      title: 'Les trois conditions, lues sur le fil rouge (hypothèses de travail, pas des constats)',
      lines: [
        "Pression : un assistant logistique local, seul à faire vivre une famille élargie, dans une zone où KAS est le meilleur employeur et où le franc congolais perd de la valeur.",
        "Opportunité : base à 3 h de route de Goma, une seule personne qui demande, achète, réceptionne et pointe les journaliers ; un chef de base qui signe sans relire.",
        "Rationalisation : « Les bailleurs ont des millions, 480 USD ne manquent à personne » — et un écart de salaire visible avec le personnel international.",
      ],
    },
    tip: "Vous ne pouvez pas mesurer la pression ni lire la rationalisation dans la tête de quelqu'un. Vous pouvez seulement réduire l'opportunité : c'est la seule condition que le contrôle interne contrôle réellement.",
  },
  {
    type: 'concept',
    title: 'Pourquoi le secteur humanitaire réunit les trois conditions',
    body: "Ce n'est pas que nos équipes seraient moins honnêtes qu'ailleurs : les trois conditions du triangle s'y trouvent réunies plus souvent, et de façon structurelle. Connaître ces facteurs vous permet d'anticiper où regarder en premier.",
    table: {
      columns: ['Condition', 'Pourquoi elle est fréquente chez nous', 'Ce que vous pouvez faire'],
      rows: [
        ['Pression', 'Salaires nationaux bas face au coût de la vie en crise, inflation locale, marché parallèle des devises, personnel isolé, agents locaux qui portent seuls un foyer élargi', 'Payer à temps, éviter les arriérés de salaire et d\'avances, repérer sans juger les changements de train de vie'],
        ['Opportunité', 'Trésorerie importante (avances, caisses d\'urgence), zones reculées (superviseur à 400 km, internet intermittent), rotation rapide du personnel, pression du « il faut que ça sorte cette semaine »', 'Séparer les tâches, double signature, rotation, comptages inopinés, congés obligatoires, contrôle à distance des pièces'],
        ['Rationalisation', 'Conviction que « l\'argent des bailleurs ne manque à personne de concret », sentiment d\'injustice face aux écarts de traitement national/international', 'Rappeler à chaque occasion à qui appartient l\'argent, former, afficher la politique et les sanctions, montrer que les cas sont traités'],
      ],
    },
    highlight: "Un contrôle interne efficace n'essaie pas de rendre les gens plus honnêtes — c'est hors de portée d'une politique RH. Il agit sur le seul facteur réellement réductible : l'opportunité.",
  },
  {
    type: 'comparison-table',
    title: 'À quoi ressemble la fraude en ONG : les trois grandes familles',
    columns: ['Famille', 'Mécanismes typiques', 'Exemple de signal à repérer'],
    rows: [
      ['Détournement d\'actifs', 'Vol d\'espèces ou de carburant, avances non justifiées, employés fantômes, remboursement de frais fictifs', 'Justificatifs répétitivement « perdus », liste de paie avec des noms jamais vus sur le terrain'],
      ['Corruption', 'Pots-de-vin de fournisseurs, favoritisme dans les achats, conflit d\'intérêts caché, collusion entre soumissionnaires, pression sur le choix des bénéficiaires', 'Même fournisseur retenu sans mise en concurrence, prix systématiquement au-dessus du marché, cadeaux inhabituels'],
      ['Falsification des comptes et des rapports', 'Fausses factures, surfacturation, double financement, fausses listes de présence aux formations, rapports de distribution gonflés', 'Fractionnement d\'achats sous un seuil, pièces sans bon de réception, quantités livrées ≠ quantités facturées'],
    ],
  },
  {
    type: 'concept',
    title: 'La séparation des tâches : le contrôle qui refuse l\'opportunité',
    body: [
      "Dans un cycle d'achat ou d'avance, quatre fonctions ne doivent jamais être cumulées par la même personne : DEMANDER la dépense, l'APPROUVER, la RÉCEPTIONNER (constater que le bien ou le service existe) et la PAYER ou l'ENREGISTRER. Quand une personne en cumule deux ou plus, l'opportunité existe, même si la personne est parfaitement honnête.",
      "Là où l'effectif est trop petit pour séparer, on compense : double signature, validation à distance par la finance, rotation des tâches, comptage inopiné, revue mensuelle des pièces par une personne extérieure à la base.",
    ],
    example: {
      title: 'Cycle d\'achat à la base de Rutshuru : avant renforcement',
      lines: [
        "Demande d'achat → Faustin R. (assistant logistique)",
        "Choix du fournisseur → Faustin R.",
        "Réception des matériaux → Faustin R. (pas de magasinier)",
        "Approbation → Sylvain T. (chef de base), qui signe « sur la foi »",
        "Paiement par avance → Faustin R. ; rapprochement → à Goma, 3 mois plus tard",
        "Constat : 3 fonctions sur 4 cumulées par une seule personne = opportunité maximale.",
      ],
    },
    pitfall: "Confondre « personne de confiance » et « personne dispensée de contrôle ». Le contrôle interne s'applique à la fonction, jamais à la réputation de la personne qui l'occupe.",
  },
  {
    type: 'stat-callout',
    stat: '3 conditions, 1 levier',
    caption: "Pression, opportunité, rationalisation : vous ne maîtrisez que l'opportunité",
    context: "C'est pourquoi chaque outil de ce module — carte des opportunités, checklist, politique, signalement, screening, investigation — est une façon de refermer une opportunité ou de la détecter plus vite, jamais de juger une intention.",
  },
  {
    type: 'concept',
    title: 'Pourquoi un mécanisme de signalement doit garantir un anonymat réel',
    body: [
      "Toute ONG structurée a, sur le papier, une politique anti-fraude et une adresse e-mail de signalement. Le problème n'est presque jamais l'absence de politique écrite : c'est son inefficacité pratique. Des « hotlines » restent des années sans un seul message, alors que, une fois l'audit externe déclenché, les preuves de détournement remontent par dizaines.",
      "La raison est presque toujours la même : la peur des représailles l'emporte sur le sens du devoir tant que l'anonymat n'est pas crédible en pratique, pas seulement promis en théorie. Un agent qui soupçonne son supérieur direct ne signalera jamais via un canal qui passe, même indirectement, par ce même supérieur. Il ne signalera pas non plus s'il craint que son numéro de téléphone, son adresse IP ou son écriture soient identifiables.",
    ],
    example: {
      title: 'Test de crédibilité à Rutshuru',
      lines: [
        "Politique actuelle : « Tout employé qui soupçonne une fraude en informe son chef de base. »",
        "Question : un maçon qui soupçonne le chef de base va-t-il lui en parler ? Non → le canal est inutilisable pour le risque principal.",
        "Même question pour une boîte à lettres placée dans le bureau du chef de base : non plus.",
      ],
    },
    highlight: "Un agent qui soupçonne son supérieur direct ne signalera jamais par un canal qui passe, même indirectement, par ce même supérieur.",
  },
  {
    type: 'checklist',
    title: "Les quatre critères d'un mécanisme de signalement réellement sécurisé",
    items: [
      "Un canal indépendant de la ligne hiérarchique directe — jamais uniquement « parlez-en à votre chef de base » : comité anti-fraude au siège, ligne régionale ou organisme tiers.",
      "Plusieurs canaux, y compris non numériques — courrier scellé, ligne téléphonique dédiée, contact en personne avec un point focal identifié hors de sa base — pour l'agent sans internet fiable.",
      "Une politique explicite de non-représailles, connue de tous, avec des conséquences disciplinaires pour quiconque exercerait des représailles, même si le signalement s'avère infondé (dès lors qu'il a été fait de bonne foi).",
      "Un retour d'information, même minimal, au lanceur d'alerte quand c'est possible sans compromettre l'investigation : l'absence totale de retour tue la confiance de tout le personnel qui observe.",
    ],
  },
  {
    type: 'concept',
    title: "Le screening d'inéligibilité : une responsabilité légale, pas une case à cocher",
    body: [
      "Vérifier qu'un partenaire, un fournisseur ou un bénéficiaire de subvention ne figure pas sur une liste de sanctions internationales est une obligation légale directe pour l'organisation et, dans certains cas, pour les personnes qui signent les contrats. Transférer des fonds, même indirectement via un partenaire de mise en œuvre, à une entité listée expose à des sanctions pénales et administratives dans la juridiction du bailleur — et peut faire perdre un portefeuille entier de financements, bien au-delà du contrat concerné.",
      "Le screening n'est pas un contrôle fait une seule fois à la signature, puis archivé : les listes évoluent en continu. Une entité en règle à l'entrée en relation peut y apparaître dix-huit mois plus tard.",
    ],
    example: {
      title: 'Ce que le bailleur lit dans votre convention (formulation type)',
      lines: [
        "« Le bénéficiaire s'assure qu'aucun fonds n'est mis à disposition d'une personne ou entité faisant l'objet de mesures restrictives, et conserve la preuve de ses vérifications. »",
        "→ Sans preuve datée dans le dossier du partenaire, « nous avions vérifié » n'a aucune valeur en audit.",
      ],
    },
    highlight: "Un partenariat vérifié une seule fois il y a trois ans n'est pas un partenariat couvert : c'est une exposition légale non détectée.",
  },
  {
    type: 'comparison-table',
    title: 'Trois référentiels de sanctions dominent la pratique',
    columns: ['Référentiel', 'Portée', "Quand il s'applique"],
    rows: [
      ['OFAC SDN List (Specially Designated Nationals, Département du Trésor américain)', 'Large : dès qu\'il existe un lien avec le dollar américain ou une entité américaine, soit la quasi-totalité des grandes ONG internationales', 'Tout financement lié aux bailleurs américains (USAID/BHA notamment)'],
      ["Liste consolidée de l'Union européenne (mesures restrictives)", 'Personnes et entités soumises à des gels de fonds européens ; consultable en ligne et téléchargeable en fichier structuré (XML) pour un screening de masse', 'Tout financement ECHO ou autre instrument européen'],
      ["Liste du Comité des sanctions du Conseil de sécurité de l'ONU", 'Référentiel universel', "Contextes sous mandat ou financement onusien direct ; à interroger systématiquement en complément"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Screening et due diligence partenaire : ne pas confondre',
    columns: ['Contrôle', 'Question posée', 'Preuve typique au dossier'],
    rows: [
      ["Screening d'inéligibilité", "Cette entité ou ses dirigeants sont-ils sur une liste de sanctions ?", "Capture ou PDF daté des résultats OFAC, UE, ONU"],
      ['Vérification légale', "L'entité existe-t-elle légalement, depuis quand, avec qui ?", "Statuts, RCCM, Id. Nat., NIF, attestation fiscale"],
      ['Vérification financière', "Dispose-t-elle d'un compte à son nom, d'une capacité de gestion ?", "Relevé bancaire, derniers états financiers, référence bancaire"],
      ['Gouvernance et références', "Qui décide ? Existe-t-il un conflit d'intérêts avec notre personnel ? Que disent ses clients ?", "Organigramme, déclaration de conflit d'intérêts, deux références contactées"],
    ],
    // le screening n'est qu'une composante de la due diligence
  },
  {
    type: 'comparison-table',
    title: "Mesure conservatoire ou sanction anticipée ?",
    columns: ['Critère', 'Mesure conservatoire (légitime)', 'Sanction anticipée (à proscrire)'],
    rows: [
      ['But', "Protéger les fonds et les preuves le temps de l'investigation", 'Punir avant d\'avoir établi les faits'],
      ['Durée', 'Limitée et réexaminée à date fixe', 'Indéfinie, sans réexamen'],
      ['Réversibilité', 'Totalement réversible si les faits sont expliqués autrement', 'Dommage irréversible (réputation, renvoi)'],
      ['Visibilité', 'Confidentielle, formulée de façon neutre', 'Annoncée publiquement, commentée en réunion'],
      ['Exemples', "Retrait temporaire de l'autorisation de caisse individuelle, gel d'un paiement, accès logiciel limité, affectation provisoire", 'Suspension annoncée à tous, accusation écrite, retenue sur salaire, renvoi sans entretien'],
    ],
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Red flag', definition: "Indicateur isolé, pas une preuve en soi, qui doit déclencher une vigilance accrue — jamais une accusation directe sur la seule base d'un signal unique." },
      { term: 'Triangle de la fraude (Cressey)', definition: "Pression + opportunité + rationalisation : les trois conditions qui, réunies, rendent une fraude possible chez un individu donné." },
      { term: 'Séparation des tâches', definition: "Principe selon lequel demander, approuver, réceptionner et payer ou enregistrer une dépense ne sont jamais confiés à la même personne." },
      { term: "Lanceur d'alerte (whistleblower)", definition: "Personne qui signale de bonne foi un soupçon de fraude, de corruption ou de faute grave, et qui bénéficie d'une protection formelle contre les représailles." },
      { term: "Screening d'inéligibilité", definition: "Vérification qu'une entité ou une personne ne figure pas sur une liste de sanctions (OFAC, UE, ONU) avant tout engagement, et à intervalles réguliers ensuite." },
      { term: 'Due diligence partenaire', definition: "Ensemble des vérifications (légales, financières, de gouvernance) menées avant et pendant un partenariat ; le screening n'en est qu'une composante." },
      { term: 'Faux positif', definition: "Correspondance de nom avec une liste de sanctions qui ne concerne pas la personne vérifiée (identifiants différents) ; elle doit être écartée par écrit, preuves à l'appui." },
      { term: 'Fractionnement d\'achats', definition: "Découpage artificiel d'un achat en plusieurs commandes sous un seuil d'autorisation pour éviter une mise en concurrence ou une signature supplémentaire." },
      { term: 'Employé fantôme', definition: "Personne inscrite sur une liste de paie sans exercer réellement d'activité, dont le salaire est détourné." },
      { term: 'Conflit d\'intérêts', definition: "Situation où un intérêt personnel ou familial d'un agent peut influencer, ou sembler influencer, une décision de l'organisation (choix d'un fournisseur, recrutement)." },
      { term: 'Mesure conservatoire', definition: "Mesure provisoire, proportionnée et réversible, prise pour protéger les fonds et les preuves pendant l'investigation, sans présumer de la culpabilité." },
      { term: 'Chaîne de conservation des preuves', definition: "Traçabilité de qui a détenu une pièce, quand et pourquoi, depuis sa collecte, de sorte qu'elle reste recevable et incontestable." },
    ],
  },
  {
    type: 'concept',
    title: 'Votre feuille de route : 7 procédures, de la prévention à la décision',
    body: "Les procédures suivent l'ordre réel du travail d'un Finance Manager : on cartographie, on détecte en routine, on pose les règles et les canaux, on vérifie les partenaires, puis on traite un signalement et on enquête.",
    table: {
      columns: ['Procédure', 'Fréquence', 'Livrable', 'Étapes'],
      rows: [
        ['1. Cartographier les opportunités de fraude', 'Chaque processus sensible, 1 fois par an', 'Matrice des tâches + plan de renforcement', '5'],
        ['2. Passer la checklist de red flags', 'Chaque clôture mensuelle / revue trimestrielle', 'checklist-red-flags xlsx renseignée', '7'],
        ['3. Rédiger la politique anti-corruption', 'À la création, puis revue annuelle', 'Politique de 2 pages + registres', '5'],
        ['4. Mettre en place un signalement sécurisé', 'À la création, puis test annuel', 'Grille d\'audit + plan d\'actions', '6'],
        ['5. Vérifier l\'inéligibilité (OFAC, UE, ONU)', 'Avant tout engagement, puis revérification annuelle', 'Fiche de screening + registre + preuves', '8'],
        ['6. Recevoir et évaluer un signalement', 'À chaque signalement', 'Sections 1 à 3 du template docx', '5'],
        ['7. Structurer l\'investigation', 'Dès qu\'un soupçon est jugé recevable', 'Sections 4 et 5 du template docx', '7'],
      ],
    },
  },

  // ─────────────── PROCÉDURE 1 — Cartographier les opportunités de fraude ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Choisir le processus sensible et le décrire tel qu\'il est vécu',
    intro: "On ne protège pas « l'organisation » en général : on protège un processus à la fois. Entrées nécessaires : les procédures écrites, les livres de caisse, les listes de fournisseurs et de paie, et surtout vingt minutes de conversation avec les personnes qui font réellement le travail.",
    steps: [
      {
        title: 'Classer les processus par exposition',
        actions: [
          "Listez les processus où l'argent circule : avances de caisse, achats locaux, paie des journaliers, carburant, per diem, distributions.",
          "Notez pour chacun, de 1 à 3 : montant manipulé, éloignement du contrôle (base isolée ?), faiblesse connue des contrôles.",
          "Multipliez les trois notes : le processus au score le plus haut passe en premier.",
        ],
      },
      {
        title: 'Décrire le processus réel, pas le processus du manuel',
        actions: [
          "Demandez à la personne qui exécute : « Racontez-moi la dernière fois, de la demande jusqu'au paiement. »",
          "Écrivez chaque étape en une phrase : QUI fait QUOI, avec QUELLE pièce, et QUI vérifie ensuite.",
          "Notez les écarts entre ce qu'on vous raconte et la procédure écrite : ils sont la matière première de la carte des opportunités.",
        ],
      },
    ],
    table: {
      columns: ['Processus (base de Rutshuru)', 'Montant', 'Éloignement', 'Faiblesse', 'Score'],
      rows: [
        ['Achats locaux de matériaux (ciment, tôles)', '3', '3', '3', '27'],
        ['Paie des journaliers de chantier', '2', '3', '3', '18'],
        ['Avances de caisse du chef de base', '2', '3', '2', '12'],
        ['Carburant des véhicules', '2', '2', '2', '8'],
      ],
    },
    example: {
      title: 'Le processus « achat de matériaux » raconté par Faustin R. (3 novembre 2026)',
      lines: [
        "1. Le coordinateur WASH annonce un besoin oralement, souvent par téléphone.",
        "2. Je vais à la quincaillerie de confiance et je note le prix.",
        "3. Je paie avec l'avance de caisse et je prends le reçu.",
        "4. Je livre au chantier ; je compte les sacs moi-même.",
        "5. Le chef de base signe le bon d'achat après coup. Les pièces partent à Goma en fin de mois.",
      ],
    },
    result: "Un processus choisi sur des critères chiffrés, décrit en 5 à 10 étapes qui reflètent la réalité du terrain — y compris les écarts avec la procédure écrite.",
    pitfall: "Décrire le processus depuis le bureau, d'après le manuel. Une carte des opportunités fondée sur la procédure théorique ne trouve jamais l'opportunité réelle, qui se cache dans les habitudes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Construire la matrice « qui fait quoi »',
    intro: "La matrice rend visible le cumul de fonctions. Elle se construit dans un simple tableau Excel : une ligne par étape du processus, une colonne par personne ou fonction impliquée. Entrée : la description de l'étape 1.",
    steps: [
      {
        title: 'Remplir la matrice',
        actions: [
          "Ouvrez un nouveau classeur, onglet « Matrice ». Colonne A : les étapes ; colonnes B à F : les personnes (par fonction : assistant logistique, chef de base, caisse, finance Goma, coordinateur).",
          "Placez un X dans chaque case où la personne exécute ou signe l'étape. Ne cochez que ce que vous avez constaté, pas ce que la procédure prévoit.",
          "Ajoutez en bas une ligne « Nb de fonctions cumulées » : =NB.SI(B2:B8;\"X\") pour chaque colonne.",
        ],
      },
      {
        title: 'Lire le résultat',
        actions: [
          "Repérez toute personne qui cumule plus de deux des quatre fonctions clés : demander, approuver, réceptionner, payer ou enregistrer.",
          "Repérez toute étape où personne ne vérifie le travail de la précédente.",
        ],
      },
    ],
    table: {
      columns: ['Étape', 'Assistant logistique', 'Chef de base', 'Caisse (Amani L.)', 'Finance Goma'],
      rows: [
        ['Demander l\'achat', 'X', '', '', ''],
        ['Choisir le fournisseur', 'X', '', '', ''],
        ['Approuver', '', 'X (après coup)', '', ''],
        ['Réceptionner les matériaux', 'X', '', '', ''],
        ['Payer (avance)', 'X', '', 'X (remise des fonds)', ''],
        ['Enregistrer', '', '', '', 'X (3 mois plus tard)'],
        ['Rapprocher livraison / facture', '', '', '', ''],
        ['Nb de fonctions cumulées', '4', '1', '1', '1'],
      ],
    },
    result: "Une matrice qui montre en une image que l'assistant logistique cumule 4 fonctions sur 7 et que personne ne rapproche la livraison de la facture.",
    tip: "Montrez la matrice à la personne concernée avant de la diffuser. Elle corrigera les erreurs de fait, et surtout elle comprendra que vous évaluez le processus, pas sa probité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Repérer et noter les opportunités',
    intro: "Une opportunité est un point du processus où une personne peut agir seule, sans que personne ne puisse le voir à temps. On la repère par cinq questions posées à chaque étape de la matrice.",
    steps: [
      {
        title: 'Poser les cinq questions à chaque étape',
        actions: [
          "Une seule personne peut-elle faire cette étape de bout en bout ?",
          "Existe-t-il un second regard (signature, rapprochement, comptage) AVANT que l'argent sorte ?",
          "Un seuil existe-t-il que l'on pourrait contourner en découpant l'opération ?",
          "La pièce peut-elle être vérifiée de façon indépendante (appel au fournisseur, visite, bon de réception) ?",
          "Le contrôle peut-il être retardé, ignoré ou écrasé sous la pression du calendrier ?",
        ],
      },
      {
        title: 'Noter probabilité et impact',
        actions: [
          "Dans l'onglet « Opportunités », une ligne par opportunité : étape, description, probabilité (1 à 3), impact (1 à 3), score = probabilité × impact.",
          "Classez par score décroissant : les scores de 6 à 9 sont à traiter en premier.",
        ],
      },
    ],
    table: {
      columns: ['Opportunité repérée', 'Probabilité', 'Impact', 'Score'],
      rows: [
        ['Choix du fournisseur par la seule personne qui achète, sans devis en dessous de 500 USD', '3', '3', '9'],
        ['Réception comptée par celui qui a acheté, sans bon de réception contresigné', '3', '3', '9'],
        ['Liste de paie des journaliers établie et pointée par la même personne', '3', '3', '9'],
        ['Validation par le chef de base « sur la foi », sans relire les pièces', '2', '3', '6'],
        ['Rapprochement des pièces à Goma seulement en fin de trimestre', '2', '2', '4'],
      ],
    },
    result: "Une liste classée de 5 à 10 opportunités chiffrées, dont les trois premières expliquent à elles seules la quasi-totalité du risque du processus.",
    pitfall: "Noter la probabilité d'après la confiance qu'on a dans la personne. La probabilité mesure la facilité de l'acte pour n'importe qui à cette place, pas la moralité de la personne actuellement en poste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Lire la pression et la rationalisation du site, sans juger personne',
    intro: "Les deux autres sommets du triangle ne se mesurent pas chez un individu, mais ils se lisent dans le contexte du site. Entrées : les retards de paiement, le turnover, les écarts de rémunération, ce qui se dit en réunion. Objectif : savoir combien la pression est forte pour décider à quelle vitesse refermer les opportunités.",
    steps: [
      {
        title: 'Relever des indicateurs de contexte, agrégés',
        actions: [
          "Notez pour le site (jamais pour une personne) : retards de paie ou de per diem, départs récents, écart de rémunération visible, charge de travail anormale.",
          "Relevez les phrases qui banalisent le contrôle (« on n'a pas le temps de tout redocumenter », « c'est quelqu'un de confiance »).",
        ],
      },
      {
        title: 'Conclure sur l\'urgence de renforcer',
        actions: [
          "Contexte tendu + opportunités de score 9 → renforcement immédiat (30 jours).",
          "Contexte calme + opportunités de score ≤ 4 → renforcement dans le plan annuel.",
          "N'ouvrez jamais un dossier individuel sur la seule base de ces indicateurs : ils servent à calibrer la prévention, pas à suspecter.",
        ],
      },
    ],
    example: {
      title: 'Indicateurs de contexte du site de Rutshuru, T3 2026',
      lines: [
        "Per diem de supervision payé avec 6 semaines de retard en août (arriéré de 1 460 USD).",
        "3 départs sur 11 agents en 6 mois ; un seul agent à plein temps à la logistique.",
        "Écart de rémunération visible entre staff national et staff expatrié de passage (visites de Goma).",
        "Propos relevés en réunion de base du 14/09 : « on n'a pas le temps de tout redocumenter à chaque fois ».",
        "Lecture : pression et rationalisation plausibles → refermer les opportunités de score 9 dans le mois.",
      ],
    },
    result: "Une note de deux lignes qui qualifie le contexte (tendu ou calme) et fixe le délai de renforcement des opportunités.",
    tip: "Le meilleur antidote à la pression est administratif : payer à l'heure. Un arriéré de per diem de 6 semaines fait plus de dégâts moraux que n'importe quel manque de formation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Choisir et planifier les contrôles qui referment les opportunités',
    intro: "Chaque opportunité de score 6 ou plus reçoit au moins un contrôle PRÉVENTIF (qui empêche) et un contrôle DÉTECTIF (qui révèle vite), un responsable nommé et une échéance. Entrée : la liste classée de l'étape 3.",
    steps: [
      {
        title: 'Associer un contrôle à chaque opportunité',
        actions: [
          "Préventif : séparation des tâches, double signature, bon de réception contresigné, devis dès le premier achat répété, rotation des tâches.",
          "Détectif : comptage de caisse inopiné, rapprochement mensuel livraison/facture par Goma, appel nominal sur le chantier avec la liste de paie, revue des achats par fournisseur.",
          "Lorsque l'effectif est trop petit pour séparer : compensez par une validation à distance de la finance et une revue mensuelle extérieure à la base.",
        ],
      },
      {
        title: 'Nommer, dater, suivre',
        actions: [
          "Remplissez : opportunité, contrôle, type, responsable, échéance, preuve attendue.",
          "Faites valider le plan par Grace M. et par la Direction Pays, puis ajoutez l'échéance au calendrier de conformité.",
        ],
      },
    ],
    table: {
      columns: ['Opportunité', 'Contrôle', 'Type', 'Responsable', 'Échéance'],
      rows: [
        ['Choix fournisseur par une seule personne', 'Trois devis dès le cumul de 500 USD par fournisseur et par mois ; comparaison par Goma', 'Préventif', 'Grace M.', '30/11/2026'],
        ['Réception par l\'acheteur', 'Bon de réception contresigné par le coordinateur ou un chef d\'équipe', 'Préventif', 'Joël B.', '15/11/2026'],
        ['Liste de paie pointée par une seule personne', 'Appel nominal mensuel inopiné, deux personnes', 'Détectif', 'Joël B. + Finance Officer', 'Dès novembre'],
        ['Validation du chef de base sans relecture', 'Revue mensuelle des pièces de Rutshuru par la finance de Goma', 'Détectif', 'Finance Officer', 'Dès novembre'],
      ],
    },
    result: "Un plan de renforcement d'une page, signé, où chaque opportunité de score ≥ 6 a un contrôle, un responsable et une date — la preuve que KAS a refermé ce qu'elle savait ouvert.",
    pitfall: "Ajouter des signatures sans ajouter de regard. Une double signature n'a de valeur que si le second signataire a vu la pièce et la marchandise ; sinon vous venez de doubler la responsabilité sans réduire le risque.",
  },

  // ─────────────── PROCÉDURE 2 — Passer la checklist de red flags ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Planifier la revue de routine et fixer le périmètre',
    intro: "La checklist ne se remplit pas seulement quand un soupçon existe déjà : elle accompagne vos revues normales (clôture mensuelle, revue trimestrielle des avances, audit interne des achats). C'est en la passant systématiquement, dossier par dossier, que vous repérez les signaux faibles avant qu'ils ne deviennent un problème ouvert.",
    steps: [
      {
        title: 'Inscrire la revue au calendrier',
        actions: [
          "Fixez la fréquence : mensuelle pour les sites à risque élevé, trimestrielle pour les autres, en même temps que la clôture.",
          "Bloquez la date dans votre calendrier de conformité et prévenez la base 48 h avant (sauf comptage inopiné).",
        ],
      },
      {
        title: 'Définir le périmètre et l\'échantillon',
        actions: [
          "Listez les quatre catégories à couvrir : achats, caisse et avances, paie et RH, relations fournisseurs et partenaires.",
          "Pour chaque catégorie, notez la source de données : balance fournisseurs, livre de caisse, registre des avances, liste de paie, bons de commande.",
          "Prenez 100 % des opérations au-dessus d'un seuil (ici 400 USD) et 10 % au hasard en dessous.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Données à demander', 'Période', 'Échantillon'],
      rows: [
        ['Achats', 'Balance fournisseurs T3, bons de commande, devis', 'Juil.–sept. 2026', '100 % des BC ≥ 400 USD + 10 % au hasard'],
        ['Caisse/Avances', 'Livre de caisse, registre des avances, justificatifs', 'Juil.–sept. 2026', '100 % des avances'],
        ['Paie', 'Liste de paie journaliers, fiches de présence', 'Juil.–sept. 2026', '100 % des listes de chantier'],
        ['Relations fournisseurs', 'Liste des fournisseurs actifs, devis concurrents', 'Juil.–sept. 2026', 'Top 5 fournisseurs en valeur'],
      ],
    },
    result: "Un plan de revue d'une page : catégories, sources de données, période et échantillon, daté et partagé avec Grace M.",
    tip: "Demandez les données bien avant la visite : un fichier remis « au dernier moment » est souvent un fichier retouché.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Ouvrir le template et le préparer pour CE site et CETTE période',
    intro: "Le template checklist-red-flags-fraude-financiere.xlsx contient deux feuilles. Avant toute saisie, vous le dupliquez pour votre revue et vous vérifiez qu'il ne vous donne pas un résultat truqué par ses lignes d'exemple.",
    steps: [
      {
        title: 'Lire la structure du classeur',
        actions: [
          "Feuille « Red flags » : titre en A1, en-têtes en ligne 4 — A « Catégorie », B « Red flag observé », C « Niveau de risque (1-3) », D « Constaté ce mois ? », E « Action de suivi ». Cinq red flags types sont préremplis (lignes 5 à 9) ; les lignes 10 à 14 sont libres.",
          "Colonne C : liste déroulante 1, 2 ou 3 ; colonne D : liste déroulante Oui ou Non ; les cases C = 3 se colorent en alerte.",
          "Feuille « Indicateur global » : trois formules en B4, B5 et B6 calculent automatiquement le niveau d'alerte. Ne les modifiez pas.",
        ],
      },
      {
        title: 'Préparer votre copie',
        actions: [
          "Enregistrez sous un nom daté : RF_Rutshuru_T3-2026_v1.xlsx (un fichier par site et par période revue ; « ce mois » se lit alors « sur la période revue »).",
          "Remettez à Non toutes les cases D5 à D14. Le template est livré avec D5 et D6 sur « Oui » : laissés tels quels, ils fausseraient l'indicateur avant même votre première observation.",
        ],
      },
    ],
    example: {
      title: 'Structure de la feuille « Red flags » à la livraison',
      lines: [
        "Ligne 4 : Catégorie | Red flag observé | Niveau de risque (1-3) | Constaté ce mois ? | Action de suivi",
        "Ligne 5 : Achats | Même fournisseur systématiquement choisi sans mise en concurrence | 3 | Oui | Investiguer + relancer mise en concurrence",
        "Ligne 6 : Caisse/Avances | Justificatifs répétitivement manquants ou en retard | 3 | Oui | Entretien avec le titulaire de l'avance",
        "Ligne 7 : Paie | Employé fantôme suspecté (absent des visites terrain) | 3 | Non",
        "Ligne 8 : Relations fournisseurs | Prix systématiquement supérieurs au marché sans justification | 2 | Non",
        "Ligne 9 : Achats | Fractionnement d'achats pour éviter un seuil d'autorisation | 3 | Non",
      ],
    },
    result: "Une copie datée du template, nommée par site et période, dont toutes les cases D sont à « Non » et dont l'indicateur affiche NORMAL avant que vous ne commenciez.",
    pitfall: "Garder les « Oui » d'exemple des lignes 5 et 6. Ils comptent comme des observations réelles : le dossier afficherait « ALERTE ÉLEVÉE » à vide, ou pire, vous prendriez l'habitude de ne plus lire l'indicateur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Parcourir les catégories Achats et Relations fournisseurs',
    intro: "Trois red flags types du template relèvent de ces catégories : même fournisseur sans mise en concurrence, fractionnement d'achats, prix supérieurs au marché. Pour chacun, il existe un test chiffré à lancer sur la balance fournisseurs et sur les bons de commande.",
    steps: [
      {
        title: 'Tester la concentration sur un fournisseur',
        actions: [
          "Dans la balance fournisseurs du trimestre, triez par montant décroissant et calculez la part de chaque fournisseur dans le total.",
          "Pour le premier fournisseur, comptez le nombre de bons de commande et vérifiez dans chaque dossier la présence de devis concurrents.",
        ],
      },
      {
        title: 'Tester le fractionnement',
        actions: [
          "Filtrez les achats situés entre 80 % et 100 % du seuil (ici 400 à 499 USD pour un seuil de 500).",
          "Regroupez par fournisseur, nature de l'article et semaine : si le total cumulé dépasse le seuil, l'achat aurait dû passer en trois devis.",
        ],
      },
      {
        title: 'Tester le prix',
        actions: [
          "Prenez les trois articles les plus achetés et comparez avec les devis informels ou les prix relevés chez deux autres fournisseurs de la ville.",
          "Calculez l'écart en % : (prix payé − prix concurrent) ÷ prix concurrent.",
        ],
      },
    ],
    example: {
      title: 'Résultats des tests sur la base de Rutshuru, T3 2026',
      lines: [
        "Quincaillerie Mwangaza : 12 bons de commande sur 12 du trimestre, soit 100 % des achats de matériaux, aucun dossier avec devis concurrent.",
        "Du 02 au 10/09 : 5 achats de 480, 495, 470, 490 et 485 USD (tous < 500) pour le même chantier, même fournisseur : cumul 2 420 USD > 500 → trois devis obligatoires, aucun au dossier.",
        "Sac de ciment 50 kg : Mwangaza 14,50 USD ; Quincaillerie Umoja 12,50 USD ; Établissements Tuungane 13,00 USD → écarts de +16,0 % et +11,5 %.",
        "Lecture : trois red flags d'achats constatés.",
      ],
    },
    result: "Pour chacun des trois red flags, un chiffre (taux de concentration, cumul fractionné, écart de prix) et la référence des pièces qui l'établissent.",
    tip: "Faites toujours le test du fractionnement sur la semaine, pas seulement sur le même jour : les achats fractionnés s'étalent souvent sur plusieurs jours consécutifs.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Parcourir la catégorie Caisse et Avances',
    intro: "Le template propose le red flag « justificatifs répétitivement manquants ou en retard ». D'autres signaux, non préremplis, se testent dans la même catégorie : avances toujours proches du plafond, comptage de caisse jamais fait, validations sans relecture. Entrées : livre de caisse, registre des avances, justificatifs originaux.",
    steps: [
      {
        title: 'Rapprocher le registre des avances et les justificatifs',
        actions: [
          "Pour chaque avance du trimestre : date de remise, montant, titulaire, date de justification, écart avec le délai autorisé (ici 7 jours).",
          "Contrôlez que chaque justificatif original est présent, daté, lisible, au nom de l'organisation, et rapproché d'un bon de réception.",
        ],
      },
      {
        title: 'Chercher les motifs répétés',
        actions: [
          "Comptez, par titulaire, les justificatifs manquants ou en retard : une fois est un incident, trois fois est un motif.",
          "Comparez chaque montant d'avance au plafond sans double signature (ici 500 USD) : plusieurs avances à 90–99 % du plafond sont un signal.",
        ],
      },
      {
        title: 'Faire un comptage inopiné',
        actions: [
          "Comptez la caisse sans prévenir, avec le titulaire et un témoin, et comparez avec le livre de caisse.",
        ],
      },
    ],
    example: {
      title: 'Avances de la base de Rutshuru au T3 2026',
      lines: [
        "AV-RU-0731 : 495 USD — AV-RU-0828 : 490 USD — AV-RU-0925 : 498 USD (plafond 500 USD).",
        "Justification : 4, 3 et 5 jours après la remise, pièces originales complètes, rapprochées des bons de réception.",
        "Comptage inopiné du 03/11 : solde conforme au livre de caisse (écart 0,00 USD).",
        "Lecture : montants proches du plafond (à noter pour mémoire) mais justificatifs complets et à l'heure → red flag « Justificatifs manquants ou en retard » : NON.",
      ],
    },
    result: "Pour chaque avance, un verdict Oui/Non sur les justificatifs, et un comptage de caisse daté et signé par deux personnes.",
    tip: "Écrire « Non » est un résultat aussi précieux que « Oui » : il prouve que la ligne a été réellement testée, et il protège les personnes dont le dossier est propre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Parcourir la catégorie Paie et RH',
    intro: "Le red flag prérempli du template est « Employé fantôme suspecté (absent des visites terrain) ». Il se teste par recoupement entre trois sources indépendantes : la liste de paie, la présence réelle sur le terrain et les coordonnées de paiement. Entrées : liste de paie des journaliers, feuilles de pointage, notes des visites de site.",
    steps: [
      {
        title: 'Croiser la liste de paie et la présence réelle',
        actions: [
          "Prenez les notes de visite de site (appel nominal ou comptage) de trois dates différentes.",
          "Pour chaque nom de la liste de paie, marquez la présence aux trois dates ; isolez les noms jamais vus.",
        ],
      },
      {
        title: 'Rechercher des doublons',
        actions: [
          "Triez les coordonnées de paiement (numéro Mobile Money, compte bancaire) et repérez les numéros partagés par plusieurs noms.",
          "Vérifiez qu'un contrat et une copie de pièce d'identité existent pour chaque nom payé.",
        ],
      },
      {
        title: 'Vérifier le rythme de congé',
        actions: [
          "Listez les agents qui n'ont pris aucun congé depuis plus de 12 mois et qui se portent volontaires pour couvrir les tâches de caisse ou de paie.",
        ],
      },
    ],
    example: {
      title: 'Liste de paie du chantier de l\'EP Tumaini de Kiwanja, T3 2026 (14 journaliers)',
      lines: [
        "Appel nominal du 12/08 : 11 présents — du 26/08 : 10 présents — du 16/09 : 11 présents.",
        "3 noms jamais vus aux trois dates, payés 8 USD × 20 jours × 3 mois = 480 USD par nom, soit 1 440 USD au total.",
        "Deux de ces trois noms partagent le même numéro Mobile Money ; aucun des trois n'a de copie de pièce d'identité au dossier.",
        "Faustin R. n'a pris aucun congé depuis 12 mois et se porte volontaire pour pointer les listes.",
      ],
    },
    result: "Pour chaque test, un résultat daté : noms jamais vus, numéros partagés, contrats ou pièces d'identité manquants, agents sans congé.",
    pitfall: "Conclure « fantôme » avant l'investigation. Trois absents à trois visites peuvent aussi être des travailleurs d'un autre chantier mal rattachés. Le red flag est un signal à documenter, pas un verdict.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: 'Renseigner la checklist ligne à ligne',
    intro: "Chaque red flag testé — y compris ceux dont la réponse est « Non » — s'inscrit dans la feuille « Red flags ». Une observation non écrite n'existe pas : un auditeur ou un enquêteur ne verra que ce qui est consigné. Le template n'a pas de colonne « preuve » dédiée : la colonne E « Action de suivi » reçoit la preuve ET l'action.",
    steps: [
      {
        title: 'Remplir les colonnes A à D',
        actions: [
          "A « Catégorie » : gardez les mots du template (Achats, Caisse/Avances, Paie, Relations fournisseurs) pour que les revues soient comparables d'un site à l'autre.",
          "B « Red flag observé » : reprenez la formulation du template ou ajoutez une ligne en 10 à 14 pour un signal nouveau, en une phrase factuelle.",
          "C « Niveau de risque (1-3) » : 1 = signal faible, explicable ; 2 = signal sérieux, à expliquer sous 30 jours ; 3 = signal fort touchant des fonds, une signature ou une falsification possible.",
          "D « Constaté ce mois ? » : Oui seulement si vous avez la preuve d'une occurrence sur la période revue ; sinon Non.",
        ],
      },
      {
        title: 'Remplir la colonne E',
        actions: [
          "Écrivez en deux temps : « Preuve : [pièce, date, montant] → Action : [qui, quoi, quand] ».",
          "Activez le renvoi à la ligne dans la cellule pour que le texte soit lisible à l'impression.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Red flag observé', 'Niveau', 'Constaté', 'Action de suivi (preuve → action)'],
      rows: [
        ['Achats', 'Même fournisseur systématiquement choisi sans mise en concurrence', '3', 'Oui', 'Preuve : 12 BC sur 12 à Mwangaza, aucun devis. → Relancer la mise en concurrence ; Finance Officer, 06/11'],
        ['Caisse/Avances', 'Justificatifs répétitivement manquants ou en retard', '3', 'Non', 'Testé : 3 avances, pièces complètes en 3 à 5 jours. → Aucune'],
        ['Paie', 'Employé fantôme suspecté (absent des visites terrain)', '3', 'Oui', 'Preuve : 3 noms jamais vus aux 3 appels (12/08, 26/08, 16/09), 1 440 USD payés. → Appel nominal inopiné ; Joël B., 09/11'],
        ['Relations fournisseurs', 'Prix systématiquement supérieurs au marché sans justification', '2', 'Oui', 'Preuve : ciment 14,50 vs 12,50 et 13,00 USD (+16 % et +11,5 %). → Benchmark complet ; Finance Officer, 06/11'],
        ['Achats', 'Fractionnement d\'achats pour éviter un seuil d\'autorisation', '3', 'Oui', 'Preuve : 5 BC de 470 à 495 USD du 02 au 10/09, cumul 2 420 USD. → Rapprocher livraisons ; Finance Officer, 06/11'],
        ['Paie', 'Aucun congé depuis 12 mois et volontaire pour couvrir les tâches de paie (ligne ajoutée)', '2', 'Oui', 'Preuve : registre RH, dernier congé 11/2025. → Congé obligatoire ; RH, 30/11'],
      ],
    },
    result: "Les lignes 5 à 10 de la feuille « Red flags » sont renseignées : chaque « Oui » renvoie à une pièce datée, chaque « Non » indique ce qui a été testé.",
    pitfall: "Écrire « suspect » ou « voleur » en colonne E. Le fichier est un document de travail qui peut être lu par la personne concernée ou par un avocat : seuls les faits, dates et montants y ont leur place.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: "Lire l'indicateur global et décider de la suite",
    intro: "La feuille « Indicateur global » traduit vos « Oui » en un niveau d'alerte, sans appréciation subjective. Un niveau qui monte ne prouve pas qu'une fraude existe : il signifie qu'une revue structurée doit désormais remplacer l'appréciation informelle d'une seule personne.",
    steps: [
      {
        title: 'Lire les trois formules',
        actions: [
          "B4 « Nombre de red flags de niveau 3 constatés » : =COUNTIFS('Red flags'!C5:C14;3;'Red flags'!D5:D14;\"Oui\").",
          "B5 « Nombre total de red flags constatés » : =COUNTIF('Red flags'!D5:D14;\"Oui\").",
          "B6 « Niveau d'alerte » : ALERTE ÉLEVÉE si B4 ≥ 2 ; sinon À SURVEILLER si B5 ≥ 1 ; sinon NORMAL.",
        ],
      },
      {
        title: 'Décider selon le niveau',
        actions: [
          "NORMAL : archivez le fichier, prochaine revue à la date prévue.",
          "À SURVEILLER : fixez des actions de suivi datées dans la colonne E et refaites un contrôle ciblé sous 30 jours.",
          "ALERTE ÉLEVÉE : ouvrez immédiatement un signalement structuré (procédure 6) ; ne tentez pas de « finir de vérifier » seul.",
        ],
      },
      {
        title: 'Ajouter votre jugement sur l\'accumulation',
        actions: [
          "Le template ne se déclenche pas sur plusieurs signaux de niveau 2. Si trois red flags ou plus concernent la même personne ou le même processus, remontez-les même si l'indicateur affiche « À SURVEILLER ».",
          "Si vous ajoutez des lignes au-delà de la ligne 14, étendez aussi les formules (C5:C30, D5:D30), puis testez avec une ligne fictive.",
        ],
      },
    ],
    example: {
      title: 'Lecture de la feuille « Indicateur global » pour la base de Rutshuru',
      lines: [
        "B4 : red flags de niveau 3 constatés = 3 (même fournisseur, fantôme, fractionnement).",
        "B5 : total de red flags constatés = 5.",
        "B6 : B4 ≥ 2 → « ALERTE ÉLEVÉE ».",
        "Décision : informer Grace M. le jour même et ouvrir un signalement par le canal du siège (procédure 6), car le chef de base a validé les achats concernés.",
      ],
    },
    result: "Un indicateur lu et commenté par écrit, une décision datée (archiver, surveiller ou signaler) et le fichier enregistré dans le dossier de conformité.",
    pitfall: "Ignorer un red flag isolé en se disant « ce n'est probablement rien », ou baisser un niveau « par gentillesse » pour éviter l'alerte. Un justificatif perdu une fois est un incident ; le même événement trois fois par la même personne est un motif d'investigation.",
  },

  // ─────────────── PROCÉDURE 3 — Rédiger la politique anti-corruption ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Partir des risques réels et des exigences des bailleurs',
    intro: "Une politique copiée d'un modèle de siège et jamais adaptée reste dans un tiroir. Elle ne devient utile que si elle répond aux situations que votre personnel rencontre vraiment. Entrées : le résultat de la procédure 1, les clauses anti-fraude des conventions de subvention, les incidents passés de la base.",
    steps: [
      {
        title: 'Lister les situations à risque de corruption',
        actions: [
          "Listez les moments où quelqu'un peut vous demander ou vous offrir un avantage indu : achats et appels d'offres, recrutement, sélection des bénéficiaires, passages de douane ou de barrage routier, permis et autorisations, inspections.",
          "Pour chacune, notez l'agent concerné et la fréquence estimée.",
        ],
      },
      {
        title: 'Relever les exigences des bailleurs',
        actions: [
          "Ouvrez la clause anti-fraude de chaque convention (Fonds Horizon, Agence Delta, Fondation Sigma) et notez : définition de la fraude, obligation de notification, délai, droit d'audit.",
          "Retenez pour votre politique la règle la PLUS stricte : un seul texte pour tous les projets.",
        ],
      },
    ],
    table: {
      columns: ['Situation à risque (Rutshuru)', 'Agent concerné', 'Fréquence', 'Exigence bailleur à respecter'],
      rows: [
        ['Choix d\'un fournisseur de matériaux', 'Assistant logistique, chef de base', 'Hebdomadaire', 'Mise en concurrence documentée, conflit d\'intérêts déclaré'],
        ['Barrage routier : demande d\'un « droit de passage »', 'Chauffeurs', 'Chaque trajet', 'Aucun paiement indu ; incident signalé'],
        ['Recrutement de journaliers sur un chantier', 'Chef de chantier, logistique', 'Mensuelle', 'Liste de paie vérifiable, pas de népotisme'],
        ['Cadeau de fin d\'année d\'un fournisseur', 'Logistique, finance', 'Annuelle', 'Cadeaux déclarés et plafonnés'],
        ['Inscription de bénéficiaires par un chef local', 'Équipes programme', 'Chaque distribution', 'Critères publics, aucune contrepartie'],
      ],
    },
    result: "Une liste de 5 à 8 situations à risque propres à votre site et un tableau des exigences de chaque bailleur, avec la règle la plus stricte retenue.",
    tip: "Quand deux conventions fixent des délais de notification différents (par exemple 24 heures et 30 jours), calez la politique sur le délai le plus court : elle sera conforme partout, sans cas particuliers.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Définir les termes et les comportements interdits',
    intro: "Une règle ne s'applique que si on la comprend. Écrivez les définitions en une phrase chacune, avec un exemple local. Entrée : la liste de l'étape 1.",
    steps: [
      {
        title: 'Rédiger le glossaire de la politique',
        actions: [
          "Corruption : offrir, promettre, donner, demander ou accepter un avantage indu pour obtenir ou conserver un traitement favorable.",
          "Paiement de facilitation : petit paiement informel à un agent public pour accélérer un acte auquel on a déjà droit ; interdit.",
          "Conflit d'intérêts : intérêt personnel ou familial qui peut influencer une décision de l'organisation.",
          "Collusion : entente entre fournisseurs, ou entre un fournisseur et un agent, pour fausser une mise en concurrence.",
          "Fraude / détournement : tromperie ou prise d'actifs de l'organisation pour un avantage personnel.",
        ],
      },
      {
        title: 'Associer un exemple local à chaque définition',
        actions: [
          "Reprenez les situations de l'étape 1 : un « droit de passage » au barrage, un neveu du chef de base proposé comme fournisseur, un sac de ciment offert par un quincaillier.",
        ],
      },
    ],
    example: {
      title: 'Extrait du glossaire de la politique de KAS',
      lines: [
        "Paiement de facilitation : « donner 10 USD à un agent pour qu'il enregistre plus vite un dossier auquel nous avons droit ». INTERDIT.",
        "Conflit d'intérêts : « proposer comme fournisseur une entreprise dont mon frère est propriétaire sans le déclarer ». À DÉCLARER ; je m'abstiens de toute décision.",
        "Collusion : « deux quincailleries qui se partagent nos commandes en se transmettant leurs devis ». À SIGNALER.",
        "Exception unique : paiement sous contrainte quand la vie ou la sécurité d'une personne est en jeu ; dans ce cas, compte rendu écrit sous 24 h.",
      ],
    },
    result: "Un glossaire de cinq à huit termes que n'importe quel agent peut lire en deux minutes, chacun avec une phrase de définition et un exemple local.",
    pitfall: "Tolérer les « petits » paiements de facilitation parce que « c'est la coutume ». Une règle à géométrie variable ne protège personne : elle expose l'agent seul face au barrage, sans soutien de l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Fixer des règles chiffrées : cadeaux, conflits d\'intérêts, agents publics',
    intro: "Les principes généraux ne se contrôlent pas ; les règles chiffrées, si. Chaque règle doit répondre à : que dois-je faire, à partir de quel montant, et à qui dois-je le dire ? Entrées : les situations de l'étape 1.",
    steps: [
      {
        title: 'Cadeaux et hospitalité',
        actions: [
          "Interdisez l'argent liquide et les équivalents en toutes circonstances.",
          "Fixez un seuil de déclaration (ici 20 USD) : au-dessus, le cadeau est refusé ou remis à la finance et inscrit au registre des cadeaux.",
          "Interdisez tout cadeau pendant un appel d'offres ou une négociation en cours.",
        ],
      },
      {
        title: 'Conflits d\'intérêts',
        actions: [
          "Exigez une déclaration à l'embauche et chaque année : liens familiaux ou financiers avec un fournisseur, partenaire ou candidat.",
          "Imposez l'abstention : la personne concernée ne participe ni à la décision ni à la validation.",
        ],
      },
      {
        title: 'Relations avec les agents publics et les autorités locales',
        actions: [
          "Seuls les frais officiels, sur reçu officiel, sont payés. Toute demande informelle est refusée et signalée dans les 24 h.",
        ],
      },
    ],
    table: {
      columns: ['Règle', 'Seuil / condition', 'Action', 'À qui le dire'],
      rows: [
        ['Cadeau reçu', '> 20 USD ou tout cadeau en espèces', 'Refuser ou remettre à la finance ; inscrire au registre', 'Finance Officer'],
        ['Cadeau pendant un appel d\'offres', 'Aucun montant', 'Refuser, noter la tentative', 'Finance Manager'],
        ['Lien avec un fournisseur', 'Tout lien familial ou financier', 'Déclarer et s\'abstenir de décider', 'Responsable hiérarchique + Finance'],
        ['Demande informelle d\'un agent public', 'Aucun montant', 'Refuser ; compte rendu écrit', 'Directeur Pays sous 24 h'],
      ],
    },
    result: "Un tableau de règles chiffrées, une par situation, que chaque agent peut appliquer sans demander l'avis de personne — et un registre des cadeaux prêt à être tenu.",
    tip: "Préparez le registre des cadeaux avec quatre colonnes seulement : date, donateur, nature et valeur estimée, décision. Un registre simple est un registre rempli.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Rédiger la politique : devoir de signalement, sanctions, clauses contractuelles',
    intro: "Assemblez les étapes 1 à 3 en un document de deux pages au plus. Entrées : glossaire, règles chiffrées, exigences des bailleurs, et le mécanisme de signalement de la procédure 4.",
    steps: [
      {
        title: 'Structurer le document',
        actions: [
          "Titre, date de version, validation de la Direction Pays et du siège.",
          "Section 1 : principe de tolérance zéro et champ d'application (tout le personnel, partenaires, fournisseurs).",
          "Section 2 : définitions et comportements interdits (étape 2).",
          "Section 3 : règles chiffrées (étape 3).",
          "Section 4 : devoir de signalement, canaux, non-représailles (renvoi à la procédure 4).",
          "Section 5 : sanctions disciplinaires, y compris pour qui exercerait des représailles.",
        ],
      },
      {
        title: 'Prévoir les clauses contractuelles',
        actions: [
          "Ajoutez aux contrats fournisseurs et partenaires : clause anti-corruption, droit d'audit de KAS et du bailleur, obligation de notifier tout soupçon, droit de résilier.",
        ],
      },
    ],
    example: {
      title: 'Clause type à insérer dans les contrats fournisseurs (extrait)',
      lines: [
        "« Le fournisseur déclare ne pas avoir offert, ni promis, ni donné d'avantage indu à un membre du personnel de KAS, et s'engage à signaler tout contact de cette nature au comité anti-fraude à l'adresse indiquée en annexe. »",
        "« KAS et ses bailleurs peuvent auditer les comptes et pièces relatifs au contrat ; tout manquement à la présente clause autorise KAS à résilier le contrat sans préavis. »",
      ],
    },
    result: "Une politique de deux pages signée de la Direction, et un modèle de clause prêt à insérer dans les contrats de plus de 5 000 USD.",
    pitfall: "Écrire une politique de dix pages en langage juridique. Si le chauffeur, le maçon et le gardien ne la lisent pas jusqu'au bout, elle n'existe pas : visez deux pages, des phrases courtes, des exemples locaux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Diffuser, faire signer, former et réviser',
    intro: "La politique ne protège que si chacun l'a lue, comprise et signée. La preuve de diffusion est ce qu'un auditeur ou un enquêteur demandera en premier. Entrée : la politique validée de l'étape 4.",
    steps: [
      {
        title: 'Diffuser et faire signer',
        actions: [
          "Remettez la politique à chaque agent à l'embauche et à chaque révision, en français et dans la langue locale utilisée sur le site (swahili à Rutshuru).",
          "Faites signer un accusé de réception personnel et classez-le dans le dossier RH.",
          "Affichez la version d'une page, avec les numéros du mécanisme de signalement, au bureau, à la caisse et sur les chantiers.",
        ],
      },
      {
        title: 'Former avec des cas',
        actions: [
          "Organisez une séance de 45 minutes : trois mises en situation (barrage routier, cadeau d'un quincaillier, neveu proposé comme fournisseur). Faites décider le groupe, puis comparez avec la politique.",
          "Faites signer la feuille de présence.",
        ],
      },
      {
        title: 'Réviser',
        actions: [
          "Fixez la revue annuelle au calendrier de conformité ; révisez aussi après tout incident, changement de bailleur ou de législation.",
        ],
      },
    ],
    table: {
      columns: ['Preuve de diffusion', 'Où la classer', 'Fréquence de mise à jour'],
      rows: [
        ['Accusés de réception signés par chaque agent', 'Dossier RH de l\'agent', 'À l\'embauche et à chaque révision'],
        ['Feuille de présence de la séance de formation', 'Dossier conformité', 'Annuelle'],
        ['Registre des cadeaux', 'Bureau finance', 'Mis à jour au fil de l\'eau ; revue trimestrielle'],
        ['Déclarations de conflits d\'intérêts', 'Dossier RH', 'À l\'embauche et chaque année'],
      ],
    },
    result: "Un taux de signature à 100 % des agents en poste, un registre des cadeaux ouvert, une séance de formation tracée et une revue annuelle datée.",
    pitfall: "Faire signer sans expliquer. Une signature obtenue en cinq secondes dans un couloir ne sert à rien le jour où l'agent se trouve devant un barrage ou un quincaillier insistant.",
  },

  // ─────────────── PROCÉDURE 4 — Mécanisme de signalement sécurisé ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Auditer le mécanisme existant avec les quatre critères',
    intro: "Avant de construire, mesurez l'écart. Posez à votre mécanisme actuel les quatre questions du module : canal indépendant ? plusieurs canaux dont un non numérique ? non-représailles écrites ? retour d'information ? Entrées : la politique actuelle, la liste des canaux, quelques conversations avec le personnel de terrain.",
    steps: [
      {
        title: 'Remplir la grille d\'audit',
        actions: [
          "Ouvrez un tableau à quatre lignes (les quatre critères) et quatre colonnes : constat, preuve, note de 0 à 2, action.",
          "Notez 0 si le critère est absent, 1 s'il existe sur le papier sans être connu ou utilisable, 2 s'il est connu et testé.",
        ],
      },
      {
        title: 'Vérifier en conditions réelles',
        actions: [
          "Interrogez trois agents de niveaux différents : « Comment signaleriez-vous un soupçon sur votre chef ? »",
          "Appelez la ligne ou écrivez à l'adresse vous-même et chronométrez la réponse.",
        ],
      },
    ],
    table: {
      columns: ['Critère', 'Constat à Rutshuru', 'Note (0 à 2)', 'Action'],
      rows: [
        ['Canal indépendant de la hiérarchie', 'Seule consigne : « informer son chef de base »', '0', 'Ouvrir un canal au siège'],
        ['Plusieurs canaux, dont non numérique', 'Une adresse e-mail gérée par le Directeur Pays ; pas de téléphone ni de courrier', '1', 'Ajouter ligne téléphonique et boîte scellée'],
        ['Non-représailles explicites', 'Mention dans la politique du siège, absente des contrats de journaliers', '1', 'Insérer dans tous les contrats'],
        ['Retour d\'information', 'Aucun retour jamais donné', '0', 'Définir un accusé de réception et un retour'],
      ],
    },
    result: "Une grille d'audit notée sur 8 points (ici 2 sur 8) qui montre objectivement où le mécanisme est inutilisable.",
    pitfall: "Considérer qu'un mécanisme qui n'a reçu aucun signalement est un mécanisme qui fonctionne. Zéro signalement en deux ans est bien plus souvent le signe d'un canal en qui personne n'a confiance que d'une organisation sans fraude.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Choisir les canaux et garantir leur indépendance',
    intro: "Il faut au minimum trois canaux, dont un indépendant de la ligne hiérarchique locale et un accessible sans internet. Entrée : les notes de la grille d'audit.",
    steps: [
      {
        title: 'Sélectionner les canaux',
        actions: [
          "Canal 1, indépendant : une adresse e-mail et une boîte vocale gérées par le comité anti-fraude du siège (Claire D.), jamais par la hiérarchie pays.",
          "Canal 2, non numérique : une ligne téléphonique dédiée, ou un courrier scellé adressé nominativement au siège ; une boîte physique éloignée du bureau du chef de base.",
          "Canal 3, en personne : un point focal identifié, hors de la base (par exemple la Finance Manager de Goma lors de ses visites).",
        ],
      },
      {
        title: 'Vérifier que le canal ne passe pas par la personne visée',
        actions: [
          "Pour chaque canal, demandez : qui reçoit ? qui a accès à l'enregistrement ? Si la réponse inclut le Directeur Pays ou le chef de base, le canal n'est pas indépendant pour ce risque.",
          "Prévoyez une règle : un signalement qui vise le destinataire normal est automatiquement dirigé vers le canal suivant.",
        ],
      },
    ],
    table: {
      columns: ['Canal', 'Qui reçoit', 'Accès aux données', 'Sans internet ?'],
      rows: [
        ['E-mail confidentiel', 'Claire D., responsable conformité siège', 'Siège uniquement, pas de copie à la base', 'Non'],
        ['Ligne téléphonique + boîte vocale', 'Siège (comité anti-fraude)', 'Pas de numéro affiché côté réception', 'Oui'],
        ['Courrier scellé', 'Siège, nominatif', 'Ouverture par le siège uniquement', 'Oui'],
        ['Rencontre en personne', 'Finance Manager de passage', 'Compte rendu confidentiel remis au siège', 'Oui'],
      ],
    },
    result: "Quatre canaux documentés dont deux sans internet, chacun avec son destinataire, son niveau d'accès aux données et la règle qui le redirige si la personne visée est le destinataire.",
    tip: "Pour le canal téléphonique, vérifiez que votre prestataire ne conserve ni n'affiche le numéro de l'appelant. Un anonymat qui s'effondre dès le premier appel détruit la confiance de tout le monde.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Écrire la garantie de confidentialité et la non-représailles',
    intro: "La promesse doit être précise, écrite et vérifiable. Une phrase vague (« la confidentialité est garantie ») ne rassure personne. Entrée : les canaux de l'étape 2.",
    steps: [
      {
        title: 'Rédiger la garantie de confidentialité',
        actions: [
          "Écrivez qui peut connaître l'identité du lanceur d'alerte (liste fermée : responsable conformité et enquêteur désigné) et dans quels cas elle peut être levée (obligation légale, avec information préalable).",
          "Précisez que l'on peut signaler de façon anonyme, et ce que cela implique (impossibilité de lui poser des questions de suivi).",
        ],
      },
      {
        title: 'Rédiger la non-représailles',
        actions: [
          "Interdisez toute mesure défavorable (mutation, non-renouvellement, harcèlement) à l'encontre d'un lanceur d'alerte de bonne foi, même si le soupçon s'avère infondé.",
          "Prévoyez des sanctions disciplinaires pour qui exercerait des représailles.",
          "Distinguez bonne foi et dénonciation calomnieuse intentionnelle, qui reste sanctionnable.",
        ],
      },
    ],
    example: {
      title: 'Extrait de la garantie affichée à Rutshuru',
      lines: [
        "« Votre signalement peut être fait sans donner votre nom. Si vous le donnez, seules deux personnes le connaîtront : la responsable conformité du siège et l'enquêteur désigné. »",
        "« Aucune mesure défavorable ne peut être prise contre vous parce que vous avez signalé de bonne foi. Toute représaille est une faute grave. »",
        "« Vous recevrez un accusé de réception sous 3 jours ouvrés, et un retour sur la suite donnée dans la mesure où l'enquête le permet. »",
      ],
    },
    result: "Une garantie de confidentialité et de non-représailles d'une demi-page, en français et en swahili, intégrée à la politique et aux contrats de journaliers.",
    pitfall: "Promettre l'anonymat absolu. Dans une base de 11 personnes, des détails du signalement peuvent suffire à identifier l'auteur : promettez ce que vous pouvez tenir (une liste fermée de personnes informées) et protégez les détails.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Faire connaître le mécanisme et former le personnel',
    intro: "Un mécanisme que personne ne connaît ne reçoit aucun signalement. La communication se fait par plusieurs supports et par la parole, y compris pour les journaliers et les partenaires. Entrées : canaux et garanties des étapes 2 et 3.",
    steps: [
      {
        title: 'Produire les supports',
        actions: [
          "Une affiche d'une page : les canaux, ce qu'on peut signaler, la garantie, en français et en swahili, avec pictogrammes pour les agents peu lecteurs.",
          "Une carte de poche pour le personnel de terrain.",
          "Un paragraphe dans chaque contrat de fournisseur, de partenaire et de journalier.",
        ],
      },
      {
        title: 'Former en séance',
        actions: [
          "Présentez les canaux en séance, y compris aux journaliers et aux partenaires, puis faites circuler la carte.",
          "Faites signer la feuille de présence ; ajoutez la séance au plan de formation annuel.",
        ],
      },
    ],
    table: {
      columns: ['Support', 'Public', 'Langue', 'Lieu / moment'],
      rows: [
        ['Affiche d\'une page', 'Tout le personnel et visiteurs', 'Français + swahili', 'Bureau, caisse, chantiers'],
        ['Carte de poche', 'Équipes terrain, chauffeurs', 'Swahili + français', 'Remise à l\'embauche'],
        ['Clause dans le contrat', 'Journaliers, fournisseurs, partenaires', 'Langue du contrat', 'À la signature'],
        ['Séance de 30 minutes', 'Toutes les équipes de la base', 'Oral, en swahili', 'Dans les 30 jours, puis chaque année'],
      ],
    },
    result: "Un plan de communication avec supports, public et dates, et une feuille de présence signée par tous les agents de la base, journaliers compris.",
    tip: "Faites présenter le mécanisme par quelqu'un de crédible hors de la base (la Finance Manager ou le siège), pas par le chef de base : le message passe mieux et il n'a pas besoin d'être justifié.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Organiser la réception et le tri des signalements',
    intro: "Quand un signalement arrive, l'organisation doit déjà savoir qui l'ouvre, comment il est enregistré, qui le voit et dans quels délais. C'est cette organisation qui rend le mécanisme crédible. Entrées : canaux et garanties des étapes précédentes.",
    steps: [
      {
        title: 'Créer le journal confidentiel des signalements',
        actions: [
          "Ouvrez un fichier à accès restreint (responsable conformité uniquement) avec : numéro, date de réception, canal, nature de l'allégation, statut, date de l'accusé de réception, date du retour.",
          "N'y inscrivez jamais le nom du lanceur d'alerte s'il est connu : codez-le (LA-001) et conservez la clé dans un coffre séparé.",
        ],
      },
      {
        title: 'Fixer des délais et des règles de tri',
        actions: [
          "Accusé de réception sous 3 jours ouvrés (si le canal permet de répondre).",
          "Première évaluation de recevabilité sous 5 jours ouvrés.",
          "Orientez les allégations non financières (exploitation et abus sexuels, harcèlement) vers leur propre procédure : elles ne se traitent pas avec ce fichier.",
        ],
      },
    ],
    example: {
      title: 'Journal confidentiel des signalements — ligne type',
      lines: [
        "N° : SIG-2026-007 | Reçu : 29/10/2026 | Canal : boîte vocale siège | Codé : LA-003",
        "Nature : « des noms de la liste de paie de l'école de Kiwanja ne travaillent pas » | Statut : à évaluer",
        "Accusé de réception : impossible (appel anonyme) | Évaluation de recevabilité : 03/11/2026",
      ],
    },
    result: "Un journal confidentiel opérationnel, des délais écrits et une règle de redirection quand la personne visée est un destinataire normal.",
    pitfall: "Transférer un signalement « pour traitement » à la hiérarchie locale. Chaque transfert à une personne de plus augmente le risque d'identification du lanceur d'alerte et le risque de destruction de preuves.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Boucler : retour d\'information, indicateurs et test annuel',
    intro: "Le retour d'information est ce qui fait vivre le mécanisme : sans lui, le personnel conclut que signaler ne sert à rien. Il se prépare dès maintenant. Entrées : le journal confidentiel et les délais de l'étape 5.",
    steps: [
      {
        title: 'Donner un retour au lanceur d\'alerte',
        actions: [
          "Quand le lanceur d'alerte est joignable : accusé de réception, puis information de la clôture (« votre signalement a été examiné ; des mesures ont été prises »), sans détails de l'enquête.",
          "S'il est anonyme : publiez de façon agrégée les signalements reçus et traités (nombre, délai, catégories) dans le rapport annuel interne.",
        ],
      },
      {
        title: 'Suivre quelques indicateurs',
        actions: [
          "Nombre de signalements reçus, délai moyen d'accusé de réception, délai moyen de clôture, part des signalements recevables.",
          "Testez le mécanisme une fois par an : un appel fictif, un courrier fictif, avec chronométrage de la réponse.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Cible', 'Constat T4 2026', 'Lecture'],
      rows: [
        ['Signalements reçus', '≥ 1 par an et par 50 agents', '1 (boîte vocale)', 'Le canal est utilisé : bon signe'],
        ['Délai d\'accusé de réception', '≤ 3 jours ouvrés', 'Non applicable (anonyme)', 'Prévoir un moyen de rappel anonyme'],
        ['Délai de clôture', '≤ 60 jours', 'En cours', 'À suivre'],
        ['Test annuel du canal', '1 par an', 'Fait le 03/11 : réponse en 4 h', 'Conforme'],
      ],
    },
    result: "Une grille d'audit du mécanisme ramenée de 2 sur 8 à au moins 6 sur 8, un tableau d'indicateurs et un test annuel inscrit au calendrier de conformité.",
    tip: "Un mécanisme sans aucun signalement doit vous alerter, pas vous rassurer. Interrogez le personnel de façon anonyme : « Connaissez-vous le canal ? Vous sentiriez-vous protégé en l'utilisant ? »",
  },

  // ─────────────── PROCÉDURE 5 — Vérifier l'inéligibilité (OFAC, UE, ONU) ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 8',
    title: 'Décider qui vérifier, quand, et selon quelle règle écrite',
    intro: "Avant d'ouvrir le moindre site, fixez la règle : sans périmètre écrit, le screening dépend de la mémoire de chacun. Situation fil rouge : KAS prépare, pour le 12 novembre, un contrat de sous-traitance de 38 500 USD avec la Coopérative Maendeleo Rutshuru pour construire 4 blocs de latrines (financement Agence Delta).",
    steps: [
      {
        title: 'Écrire la règle de périmètre',
        actions: [
          "Entités à vérifier : tout partenaire de mise en œuvre, tout sous-traitant, tout fournisseur retenu après appel d'offres ou cumulant 5 000 USD ou plus par an, tout consultant individuel au-delà de 5 000 USD.",
          "Personnes à vérifier pour chaque entité : dirigeants, signataires légaux et, quand ils sont connus, propriétaires effectifs. Une entité peut être propre tandis qu'un de ses dirigeants figure personnellement sur une liste.",
          "Moment : avant tout engagement contractuel ou financier, puis à intervalles réguliers.",
        ],
      },
      {
        title: 'Désigner le responsable',
        actions: [
          "Nommez une personne (ici le Finance Officer) et une personne de validation (Finance Manager). Elles ne sont pas celles qui négocient le contrat.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie', 'Qui vérifier', 'Quand', 'Responsable'],
      rows: [
        ['Partenaires et sous-traitants', 'Entité + dirigeants + signataires + propriétaires effectifs', 'Avant signature, puis chaque année', 'Finance Officer, validation Finance Manager'],
        ['Fournisseurs ≥ 5 000 USD/an ou après appel d\'offres', 'Entité + dirigeants', 'Avant 1er paiement, puis chaque année', 'Finance Officer'],
        ['Consultants individuels > 5 000 USD', 'La personne', 'Avant signature', 'Finance Officer'],
        ['Tous les contractants actifs', 'Tous', 'À chaque mise à jour majeure des listes ou changement de gouvernance', 'Finance Officer'],
      ],
    },
    result: "Une règle de screening d'une page, signée de la Finance Manager : qui, quoi, quand, par qui — et un contrat sous-traitant bloqué tant que la vérification n'est pas terminée.",
    pitfall: "Ne vérifier que le nom de l'entité. Les sanctions visent souvent des personnes : sans la liste des dirigeants et des signataires, un contrat peut être signé avec une entité « propre » dont le président est personnellement listé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 8',
    title: "Collecter l'identité complète de l'entité et de ses dirigeants",
    intro: "La qualité du screening dépend de la qualité des identifiants : le nom seul génère des faux positifs et des faux négatifs. Entrées : le dossier de candidature du partenaire, ses statuts, ses documents d'enregistrement, les copies de pièces d'identité des dirigeants.",
    steps: [
      {
        title: 'Rassembler les identifiants de l\'entité',
        actions: [
          "Dénomination légale complète, sigle, ancien nom, noms commerciaux, transcriptions possibles.",
          "Adresse du siège et de l'établissement, pays d'enregistrement.",
          "Numéros d'enregistrement : RCCM, Id. Nat., NIF (en RDC).",
        ],
      },
      {
        title: 'Rassembler les identifiants de chaque personne',
        actions: [
          "Nom complet exactement comme sur la pièce d'identité, avec toutes les orthographes connues.",
          "Date et lieu de naissance, nationalité, numéro de pièce d'identité.",
          "Fonction dans l'entité et part de capital, s'il y a lieu.",
        ],
      },
    ],
    example: {
      title: 'Fiche d\'identité à compléter pour la Coopérative Maendeleo Rutshuru',
      lines: [
        "Entité : Coopérative Maendeleo Rutshuru — sigle : COMAR — enregistrée à Rutshuru, RDC — RCCM : CD/GOM/RCCM/20-B-0000 (numéro fictif).",
        "Personne 1 : Aristide Kalonji — président — né le 12/03/1981 à Rutshuru — nationalité congolaise.",
        "Personne 2 : Mariam Sebahire — trésorière — née le 02/07/1985 à Goma — nationalité congolaise.",
        "Personne 3 : Jean-Marie Rukundo — secrétaire et signataire bancaire — né le 25/10/1979 à Kiwanja — nationalité congolaise.",
        "Variantes d'orthographe notées : Kalonji / Kalonjy ; Sebahire / Sebahiré.",
      ],
    },
    result: "Une fiche d'identité d'une page par entité : un état civil complet pour chaque personne screenée, avec les variantes d'orthographe connues.",
    tip: "Demandez les copies de pièces d'identité dès le dépôt du dossier de candidature, pas au moment de la signature. Un partenaire qui hésite à les fournir vous apprend déjà quelque chose.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 8',
    title: 'Interroger la liste OFAC (SDN)',
    intro: "L'OFAC Sanctions List Search (sanctionssearch.ofac.treas.gov) est l'outil de recherche officiel du Département du Trésor américain. Il accepte les recherches approximatives et affiche un score de correspondance. Entrée : la fiche d'identité de l'étape 2.",
    steps: [
      {
        title: 'Préparer la recherche',
        actions: [
          "Ouvrez le site de l'OFAC Sanctions List Search dans votre navigateur.",
          "Dans le champ Nom, saisissez la dénomination exacte de l'entité ; sélectionnez le type « Entity ». Pour une personne, type « Individual ».",
          "Réglez le score minimal de correspondance : le défaut est élevé (vérifiez la valeur affichée) ; abaissez-le (par exemple à 80) pour capter les variantes d'orthographe en contexte francophone ou arabophone.",
          "Laissez la liste sur « All » pour couvrir la SDN List et les autres listes OFAC.",
        ],
      },
      {
        title: 'Lancer et lire les résultats',
        actions: [
          "Cliquez sur la recherche et lisez le tableau : nom, adresse, type, programme, liste, score.",
          "Répétez la recherche pour chaque personne, en testant chaque variante d'orthographe notée.",
          "Pour chaque recherche, enregistrez le nombre de résultats : « 0 » est un résultat.",
        ],
      },
    ],
    example: {
      title: 'Recherches OFAC du 04/11/2026 (résultats fictifs, à titre d\'exercice)',
      lines: [
        "« Coopérative Maendeleo Rutshuru » / « COMAR », type Entity, score min 80 → 0 résultat.",
        "« Aristide Kalonji » + variante « Kalonjy », type Individual, score min 80 → 1 résultat : « KALONJI, Aristide » — score 88 — né en 1962 — nationalité d'un autre pays — adresse hors RDC.",
        "« Mariam Sebahire » / « Sebahiré » → 0 résultat.",
        "« Jean-Marie Rukundo » → 0 résultat.",
        "À faire : comparer l'unique résultat avec l'état civil du président (étape 6).",
      ],
    },
    result: "Pour chaque entité et chaque personne : une recherche datée, les paramètres utilisés (nom, type, score) et le nombre de résultats, avec capture d'écran ou export PDF.",
    pitfall: "Ne faire qu'une recherche avec le score par défaut. Un nom translittéré (Kalonji / Kalonjy) peut passer entre les mailles d'une recherche trop stricte : testez les variantes et abaissez le score, puis triez les résultats par vous-même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 8',
    title: "Interroger la liste consolidée de l'Union européenne",
    intro: "La liste consolidée des sanctions financières de l'UE est le référentiel obligatoire pour tout financement ECHO. Elle se consulte en ligne (EU Sanctions Map et portail de la Commission européenne) et se télécharge en fichier structuré (XML) pour un screening automatisé.",
    steps: [
      {
        title: 'Rechercher en ligne',
        actions: [
          "Ouvrez le portail de la liste consolidée de l'UE ou la carte des sanctions (EU Sanctions Map).",
          "Saisissez le nom de l'entité puis de chaque personne ; essayez les variantes et les noms dans l'ordre inverse (prénom et nom permutés).",
          "Notez, pour chaque résultat éventuel : régime de sanctions, date d'inscription, identifiants (date de naissance, nationalité).",
        ],
      },
      {
        title: 'Passer au fichier si le volume l\'exige',
        actions: [
          "Si vous screenez plus de dix entités à la fois, téléchargez le fichier XML ou CSV de la liste consolidée et croisez-le avec votre liste de fournisseurs dans Excel.",
          "Notez la date du fichier : elle prouve quelle version de la liste a été utilisée.",
        ],
      },
    ],
    example: {
      title: 'Recherches UE du 04/11/2026 (résultats fictifs)',
      lines: [
        "« Coopérative Maendeleo Rutshuru » → aucune entrée.",
        "« Kalonji », « Kalonjy », « Aristide Kalonji » → aucune entrée.",
        "« Sebahire », « Rukundo » → aucune entrée.",
        "Date de la liste consultée : 04/11/2026 — captures enregistrées : 2026-11-04_UE_COMAR.pdf.",
      ],
    },
    result: "Un résultat par entité et par personne (aucune entrée ou entrée à analyser) et une preuve datée enregistrée, avec la date de la version de liste.",
    tip: "Quand un partenaire est financé par ECHO, la vérification UE est obligatoire même si la liste OFAC est propre : chaque bailleur applique son propre référentiel, et leurs listes ne se recoupent pas entièrement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 8',
    title: "Interroger la liste du Comité des sanctions de l'ONU",
    intro: "La liste consolidée du Conseil de sécurité des Nations Unies est le référentiel universel, incontournable dans les contextes sous mandat ou financement onusien direct. Elle se consulte sur le site de l'ONU et se télécharge aussi.",
    steps: [
      {
        title: 'Rechercher',
        actions: [
          "Ouvrez la page de la liste consolidée du Conseil de sécurité sur le site de l'ONU.",
          "Recherchez le nom de l'entité puis de chaque personne, en utilisant aussi les alias et les variantes.",
          "Regardez particulièrement les régimes qui concernent le pays d'intervention (par exemple le régime relatif à la République démocratique du Congo).",
        ],
      },
      {
        title: 'Consigner',
        actions: [
          "Notez les résultats et la date de dernière mise à jour de la liste.",
          "Enregistrez une capture d'écran ou un export de la page de résultats.",
        ],
      },
    ],
    example: {
      title: 'Recherches ONU du 04/11/2026 (résultats fictifs)',
      lines: [
        "« Coopérative Maendeleo Rutshuru » / « COMAR » → aucune entrée.",
        "« Aristide Kalonji » → aucune entrée. « Mariam Sebahire » → aucune entrée.",
        "« Jean-Marie Rukundo » → aucune entrée.",
        "Capture : 2026-11-04_ONU_COMAR.pdf ; date de mise à jour de la liste : 03/11/2026.",
      ],
    },
    result: "Trois listes interrogées pour chaque entité et personne, trois preuves datées prêtes à être archivées.",
    pitfall: "S'arrêter à la première liste propre. Une personne peut être sur la liste de l'ONU sans figurer chez l'OFAC, ou inversement : chaque référentiel a ses propres critères d'inscription, son calendrier de mise à jour, et ses personnes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 8',
    title: 'Interpréter les résultats : vrai positif, faux positif ou doute',
    intro: "Un résultat n'est pas une conclusion. Toute correspondance, même à score élevé, doit être comparée aux identifiants que vous avez collectés. Tant que la comparaison n'est pas faite et validée, la personne ou l'entité reste en attente : aucun paiement, aucune signature.",
    steps: [
      {
        title: 'Comparer les identifiants',
        actions: [
          "Mettez côte à côte l'entrée de la liste et l'état civil collecté : date de naissance, lieu, nationalité, adresse, numéro de pièce, fonction.",
          "Une différence sur deux identifiants indépendants ou plus (date de naissance, nationalité) permet d'écarter la correspondance. Une seule différence ne suffit pas.",
        ],
      },
      {
        title: 'Classer et décider',
        actions: [
          "Aucune correspondance → passer à l'archivage.",
          "Correspondance écartée (faux positif) → documenter les deux identifiants contradictoires, faire valider par la Finance Manager et par le siège si le score est supérieur à 85.",
          "Correspondance confirmée ou doute persistant → traiter comme un vrai positif : suspendre tout engagement, ne rien payer, ne pas prévenir la contrepartie, escalader immédiatement au responsable conformité et à la direction juridique.",
        ],
      },
    ],
    table: {
      columns: ['Identifiant', 'Entrée de la liste OFAC (score 88)', 'Président de COMAR', 'Concordance'],
      rows: [
        ['Nom', 'KALONJI, Aristide', 'Aristide Kalonji', 'Oui (nom identique)'],
        ['Date de naissance', '1962', '12/03/1981', 'Non (19 ans d\'écart)'],
        ['Nationalité', 'Autre pays', 'Congolaise', 'Non'],
        ['Adresse', 'Hors RDC', 'Rutshuru', 'Non'],
        ['Conclusion', '—', '—', 'Faux positif : deux identifiants indépendants différents'],
      ],
    },
    result: "Pour chaque correspondance, un verdict écrit (faux positif ou vrai positif) avec les identifiants comparés et le nom de la personne qui l'a validé.",
    pitfall: "Écarter un résultat « parce que ce n'est pas lui » sans le démontrer. En audit, la phrase « je connais cet homme » ne vaut rien : seule la comparaison écrite de deux identifiants indépendants vaut décision.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 8',
    title: 'Archiver la preuve et tenir le registre de screening',
    intro: "Un résultat « aucune correspondance » n'a de valeur qu'archivé avec sa date. C'est cette preuve, et non votre souvenir d'avoir « vérifié à l'époque », qui vous protège lors d'un audit bailleur. Entrées : les captures et exports des étapes 3 à 6.",
    steps: [
      {
        title: 'Classer les preuves',
        actions: [
          "Créez, dans le dossier du partenaire, un sous-dossier « Screening » avec les captures ou PDF, nommés : AAAA-MM-JJ_LISTE_ENTITÉ (par exemple 2026-11-04_OFAC_COMAR.pdf).",
          "Conservez aussi la fiche d'identité et la note de comparaison des faux positifs.",
          "Respectez la durée de conservation exigée par vos bailleurs (souvent plusieurs années après la clôture du projet).",
        ],
      },
      {
        title: 'Alimenter le registre de screening',
        actions: [
          "Dans un classeur Excel « Registre de screening », une ligne par entité : nom, catégorie, date de screening, listes interrogées, résultat, preuve (nom du fichier), responsable, date de revérification.",
          "Faites contresigner la ligne par la Finance Manager avant la signature du contrat.",
        ],
      },
    ],
    table: {
      columns: ['Entité', 'Date', 'Listes', 'Résultat', 'Preuve', 'Revérification'],
      rows: [
        ['Coopérative Maendeleo Rutshuru (COMAR)', '04/11/2026', 'OFAC, UE, ONU', 'Entité : aucune ; président : faux positif OFAC documenté', '2026-11-04_OFAC_COMAR.pdf (+ UE, ONU, note faux positif)', '04/11/2027'],
        ['Quincaillerie Mwangaza', '04/11/2026', 'OFAC, UE, ONU', 'Aucune correspondance', '2026-11-04_OFAC_Mwangaza.pdf (+ UE, ONU)', '04/11/2027'],
        ['Transports Salama SARL', '15/03/2026', 'OFAC, UE, ONU', 'Aucune correspondance', '2026-03-15_OFAC_Salama.pdf (+ UE, ONU)', '15/03/2027'],
      ],
    },
    result: "Un dossier « Screening » par entité, rempli de preuves datées et nommées de façon normalisée, et une ligne de registre signée avant toute signature de contrat.",
    tip: "Gardez dans le registre la date de la version de liste utilisée, pas seulement la date de votre recherche : en cas de contestation, elle prouve à quel moment l'entité était ou n'était pas inscrite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 8 sur 8',
    title: 'Planifier la revérification et fixer ses déclencheurs',
    intro: "Les listes de sanctions évoluent en continu. Un partenariat vérifié une seule fois il y a trois ans n'est pas un partenariat couvert : c'est une exposition légale non détectée. La revérification se planifie comme une clôture comptable.",
    steps: [
      {
        title: 'Fixer la fréquence',
        actions: [
          "Au minimum annuelle pour les partenariats et sous-traitants actifs ; à chaque renouvellement ou avenant.",
          "Ajoutez la colonne « Date de revérification » du registre au calendrier de conformité, avec une alerte 30 jours avant.",
        ],
      },
      {
        title: 'Définir les déclencheurs hors calendrier',
        actions: [
          "Changement de gouvernance connu chez le partenaire (nouveau président, nouveau signataire).",
          "Mise à jour majeure d'une liste de sanctions concernant votre pays d'intervention.",
          "Paiement exceptionnel, nouveau contrat ou avenant important.",
          "Information défavorable dans la presse ou un signalement.",
        ],
      },
    ],
    example: {
      title: 'Revérification du partenaire actif « Association Jamaa Wazi » (signature 2023, dernier screening 02/2024)',
      lines: [
        "Date du jour : 04/11/2026 → dernier screening il y a 33 mois → revérification en retard de 21 mois par rapport à la règle annuelle.",
        "Action immédiate : screening des trois référentiels sur l'entité ET les dirigeants actuels (le président a changé en 2025).",
        "Tant que le résultat n'est pas archivé : aucun nouveau versement de tranche à ce partenaire.",
        "Conclusion à porter au registre : « revérifié le 04/11/2026, retard documenté, cause : absence de calendrier ; action : alertes ajoutées ».",
      ],
    },
    result: "Un calendrier de revérification avec alertes, une liste de déclencheurs hors calendrier, et chaque partenaire actif revérifié depuis moins de 12 mois.",
    pitfall: "Revérifier l'entité mais pas ses nouveaux dirigeants. Un changement de gouvernance est précisément le moment où l'entité sort ou entre dans une zone de risque : c'est le premier déclencheur à surveiller.",
  },

  // ─────────────── PROCÉDURE 6 — Recevoir et évaluer un signalement (sections 1 à 3) ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Réceptionner le signalement et remplir la section 1 du document',
    intro: "Le template procedure-signalement-plan-action-fraude.docx s'ouvre par un rappel de la procédure de signalement. Il se remplit dès la réception, avant toute analyse, car il fixe les règles de confidentialité qui s'appliquent à tout ce qui suivra. Situation fil rouge : mardi 3 novembre 2026, votre checklist de Rutshuru affiche ALERTE ÉLEVÉE ; la boîte vocale du siège a aussi reçu, le 29/10, un message anonyme sur la liste de paie de l'école de Kiwanja.",
    steps: [
      {
        title: 'Choisir le bon canal pour remonter',
        actions: [
          "Vérifiez qui est visé par les faits : ici, le chef de base Sylvain T. a validé les achats. Vous ne passez donc ni par lui ni par la hiérarchie pays locale.",
          "Utilisez le canal indépendant : e-mail confidentiel à Claire D., responsable conformité du siège, avec Grace M. en copie (non impliquée).",
        ],
      },
      {
        title: 'Remplir la section 1',
        actions: [
          "Ouvrez le document. Titre : SIGNALEMENT & PLAN D'ACTION — SOUPÇON DE FRAUDE. Section 1 « Procédure de signalement (rappel) ».",
          "Champ « Canal de signalement utilisé (ligne dédiée, email confidentiel, boîte physique — préciser) » : indiquez le canal exact et la date.",
          "Champ « Confirmation que l'anonymat du lanceur d'alerte est garanti et respecté à chaque étape » : confirmez la liste fermée des personnes informées et l'interdiction de transférer le dossier.",
          "Enregistrez le fichier sous un nom codé, dans un dossier à accès restreint : SIG-2026-007_Rutshuru_v1.docx.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie (extrait)',
      lines: [
        "Canal de signalement utilisé : e-mail confidentiel adressé à la responsable conformité du siège le 03/11/2026, 16 h 10 (constat issu de la revue trimestrielle de routine) ; convergence avec un message anonyme reçu sur la boîte vocale du siège le 29/10/2026 (réf. SIG-2026-007).",
        "Confirmation anonymat : les faits sont rapportés sous forme factuelle sans identifier de source tierce ; seules la responsable conformité, la Finance Manager et le Finance Officer ont accès au dossier ; aucun transfert à la hiérarchie de la base.",
      ],
    },
    result: "La section 1 du document est remplie, datée, et le dossier est enregistré avec accès limité à trois personnes nommées.",
    pitfall: "Remonter un soupçon impliquant son supérieur direct via ce même supérieur. C'est précisément le scénario pour lequel le canal alternatif existe : le contourner revient à prévenir l'intéressé et à lui laisser le temps d'effacer les pièces.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: "Décrire l'allégation de façon factuelle (section 2)",
    intro: "La section 2 doit pouvoir être lue par un auditeur, un avocat ou la personne concernée sans que son contenu change de sens. Elle contient des faits, des dates et des montants, pas des jugements. Entrées : la checklist remplie, les pièces, le message anonyme.",
    steps: [
      {
        title: 'Rédiger « Nature du soupçon signalé »',
        actions: [
          "Écrivez trois à six phrases courtes : quoi, où, quand, combien, sur quelles pièces.",
          "Citez les références des pièces (numéros de bons de commande, listes de paie).",
          "Employez « selon la revue » ou « il apparaît que » — jamais « il a volé ».",
        ],
      },
      {
        title: 'Remplir « Personnes / fonctions / processus concernés »',
        actions: [
          "Citez les fonctions (assistant logistique de la base, chef de base) et les processus (achat de matériaux, paie des journaliers), pas des accusations nominatives.",
          "Si une personne doit être nommée pour que l'enquête avance, écrivez « fonction + initiales » et réservez le nom complet au dossier d'enquête.",
        ],
      },
    ],
    example: {
      title: 'Section 2 remplie (extrait)',
      lines: [
        "Nature du soupçon : selon la revue du T3 2026 de la base de Rutshuru, (1) 5 achats de 470 à 495 USD (cumul 2 420 USD) auprès du même fournisseur entre le 02 et le 10/09, sans devis, chacun sous le seuil de 500 USD ; (2) 12 achats sur 12 auprès de ce fournisseur, dont les prix sont supérieurs de 11,5 à 16 % à ceux de deux concurrents ; (3) trois noms de la liste de paie du chantier de l'EP Tumaini de Kiwanja absents aux trois appels nominaux du trimestre, soit 1 440 USD versés ; deux partagent le même numéro Mobile Money.",
        "Personnes / fonctions / processus : assistant logistique de la base (demande, choix du fournisseur, réception, pointage) ; chef de base (approbation) ; processus : achat de matériaux, paie des journaliers du chantier.",
      ],
    },
    result: "Une description de moins d'une page, sans adjectif, dont chaque affirmation renvoie à une pièce datée.",
    pitfall: "Mélanger faits et hypothèses : « le fournisseur est un parent de l'assistant » n'a pas sa place tant que ce n'est pas établi. Une hypothèse se traduit par une étape d'investigation, pas par une phrase de la section 2.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: "Remplir l'évaluation initiale (section 3)",
    intro: "La section 3 contient un tableau à deux colonnes : « Red flags identifiés (voir checklist) » et « Niveau de risque estimé ». C'est le pont entre la procédure 2 et la décision : vous y reprenez la checklist, sans la recopier en entier. Entrée : le fichier RF_Rutshuru_T3-2026_v1.xlsx.",
    steps: [
      {
        title: 'Reporter les red flags constatés',
        actions: [
          "Dans la colonne gauche, une ligne par red flag « Oui » de la checklist : intitulé du template et référence de la ligne (par exemple « Red flags, ligne 5 »).",
          "Dans la colonne droite : le niveau de la ligne (1, 2 ou 3) tel qu'il figure dans la checklist.",
        ],
      },
      {
        title: 'Conclure sur le niveau global',
        actions: [
          "Reprenez le niveau d'alerte de la feuille « Indicateur global » : ici ALERTE ÉLEVÉE (3 red flags de niveau 3 sur 5 constatés).",
          "Ajoutez une phrase de jugement : la convergence des signaux (achats, paie, message anonyme) justifie une investigation structurée.",
        ],
      },
    ],
    table: {
      columns: ['Red flags identifiés (voir checklist)', 'Niveau de risque estimé'],
      rows: [
        ['Même fournisseur systématiquement choisi sans mise en concurrence (ligne 5)', '3'],
        ['Employé fantôme suspecté — 3 noms jamais vus aux appels nominaux (ligne 7)', '3'],
        ['Fractionnement d\'achats pour éviter un seuil d\'autorisation — 5 BC, 2 420 USD (ligne 9)', '3'],
        ['Prix supérieurs au marché sans justification — écart de 11,5 à 16 % (ligne 8)', '2'],
        ['Aucun congé depuis 12 mois et volontaire pour pointer les listes (ligne 10)', '2'],
        ['Niveau global (feuille « Indicateur global »)', 'ALERTE ÉLEVÉE (B4 = 3, B5 = 5)'],
      ],
    },
    result: "Un tableau d'évaluation qui reprend chaque red flag constaté avec son niveau, et un niveau global cohérent avec la checklist.",
    tip: "Gardez le même vocabulaire que la checklist : un lecteur doit retrouver sans effort chaque ligne du tableau dans le fichier Excel joint.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Proposer une mesure conservatoire proportionnée et réversible',
    intro: "Le template n'a pas de champ dédié aux mesures conservatoires : écrivez-les en une ou deux phrases juste sous le tableau de la section 3. Leur but est de protéger les fonds et les preuves le temps de l'investigation, jamais de punir. Entrée : le niveau de risque de l'étape 3.",
    steps: [
      {
        title: 'Choisir la mesure la moins intrusive qui protège',
        actions: [
          "Listez les risques immédiats : nouveaux paiements, accès à la caisse, modification de la liste de paie, destruction de pièces.",
          "Pour chaque risque, retenez la mesure minimale qui le neutralise : retrait temporaire d'une autorisation individuelle, gel d'un paiement, double signature renforcée, accès en lecture seule.",
        ],
      },
      {
        title: 'Vérifier les quatre critères',
        actions: [
          "Proportionnée : elle correspond au niveau de risque estimé.",
          "Réversible : elle peut être levée sans dommage si les faits s'expliquent autrement.",
          "Non punitive et sans publicité : formulée de façon neutre, annoncée à l'intéressé en privé, avec la date de réexamen.",
          "Limitée dans le temps : réexamen à date fixe (ici 17/11).",
        ],
      },
    ],
    example: {
      title: 'Mesure conservatoire proposée (sous le tableau de la section 3)',
      lines: [
        "« Pendant la durée de l'investigation (réexamen le 17/11/2026), et sans préjuger des conclusions : (a) l'autorisation individuelle d'avance de l'assistant logistique de la base est suspendue ; les achats passent par la finance de Goma avec trois devis ; (b) la liste de paie du chantier est établie par le coordinateur WASH, l'assistant logistique n'a plus d'accès en écriture ; (c) les nouvelles commandes à Quincaillerie Mwangaza sont gelées jusqu'à comparaison de devis. »",
        "Salaire, poste et statut de l'agent inchangés. Motif communiqué à l'agent : « renforcement de contrôle de routine sur la base ».",
      ],
    },
    result: "Une mesure écrite sous le tableau de la section 3, limitée dans le temps, sans accusation, qui protège les fonds sans toucher au statut de personne.",
    pitfall: "Suspendre publiquement, humilier ou présumer coupable avant la fin d'une investigation structurée. Le risque juridique et humain peut être aussi grave que la fraude elle-même si les faits s'avèrent expliqués autrement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Décider de la recevabilité, escalader et notifier le bailleur',
    intro: "Le comité anti-fraude ou le responsable conformité juge si le signalement est recevable : assez précis, assez plausible, assez grave pour ouvrir une investigation. Une fois recevable, trois obligations s'enchaînent : escalade interne, notification au bailleur concerné, et ouverture de la section 4.",
    steps: [
      {
        title: 'Juger la recevabilité',
        actions: [
          "Posez trois questions : les faits sont-ils précis (dates, montants, pièces) ? Sont-ils plausibles à la lumière d'au moins un recoupement ? Concernent-ils des fonds de l'organisation ?",
          "Notez la décision, sa date et son auteur : « recevable / non recevable / à compléter ».",
        ],
      },
      {
        title: 'Escalader et notifier',
        actions: [
          "Informez la Direction Pays, sauf si elle est impliquée, et la direction du siège.",
          "Relisez la clause de notification de la convention du bailleur concerné (Agence Delta) : certains bailleurs exigent un avis dans les 24 à 72 heures, d'autres dans un délai de quelques jours ouvrés.",
          "Notifiez avec les faits connus, les montants exposés, les mesures prises et le calendrier — sans désigner de coupable.",
        ],
      },
    ],
    example: {
      title: 'Décision et notification (3 au 5 novembre 2026)',
      lines: [
        "03/11 : recevabilité jugée par Claire D. — « recevable : faits précis, recoupés par un message anonyme, fonds Agence Delta concernés ».",
        "04/11 : information de Théodore W., Directeur Pays (non impliqué), et de la direction du siège.",
        "05/11 : notification écrite à Agence Delta (délai de 5 jours ouvrés prévu à la convention) : « Soupçon d'irrégularités sur des achats et une liste de paie de la base de Rutshuru, montant exposé estimé à 3 860 USD, investigation ouverte, mesures conservatoires prises, rapport attendu le 17/11. »",
        "Calcul de l'exposition : 2 420 USD (achats fractionnés) + 1 440 USD (paie) = 3 860 USD.",
      ],
    },
    result: "Une décision de recevabilité datée, les personnes informées listées, la notification au bailleur envoyée dans le délai et archivée dans le dossier.",
    tip: "Un bailleur apprend toujours la fraude un jour : mieux vaut que ce soit par vous, avec des faits et un plan, que par un audit externe. Notifier tôt est un signe de maturité, pas un aveu d'échec.",
  },

  // ─────────────── PROCÉDURE 7 — Structurer l'investigation (sections 4 et 5) ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 7',
    title: "Constituer l'équipe d'investigation et fixer le mandat",
    intro: "Une investigation qui n'est pas structurée par écrit, étape par étape, est une investigation qu'un avocat ou un auditeur pourra remettre en cause a posteriori, même si vos conclusions sont justes. Tout commence par la bonne équipe et un mandat écrit.",
    steps: [
      {
        title: 'Choisir des enquêteurs indépendants',
        actions: [
          "Excluez toute personne qui a validé, approuvé ou supervisé les opérations concernées, ou qui a un lien avec les personnes visées.",
          "Constituez une équipe de deux ou trois personnes : un responsable (conformité du siège), un appui finance (vous) et un appui RH pour les entretiens.",
        ],
      },
      {
        title: 'Écrire le mandat',
        actions: [
          "Une page signée de la Direction : objet, périmètre (période et processus), pouvoirs (accès aux pièces, aux locaux, aux entretiens), durée (ici deux semaines), confidentialité.",
          "Faites signer à chaque enquêteur une déclaration d'absence de conflit d'intérêts.",
        ],
      },
    ],
    table: {
      columns: ['Rôle', 'Personne', 'Indépendance vérifiée'],
      rows: [
        ['Responsable de l\'investigation', 'Claire D., responsable conformité siège', 'Oui : hors hiérarchie pays'],
        ['Appui finance', 'Finance Officer', 'Oui : n\'a pas validé les achats de la base'],
        ['Appui terrain', 'Joël B., coordinateur WASH', 'Oui pour les constats physiques ; non impliqué dans les achats'],
        ['Appui RH', 'Responsable RH Goma', 'Oui'],
        ['Exclus', 'Sylvain T. (a approuvé les achats) ; Faustin R. (visé)', '—'],
      ],
    },
    result: "Un mandat d'une page signé, une équipe de trois ou quatre personnes dont l'indépendance est vérifiée par écrit, et un calendrier de deux semaines.",
    pitfall: "Confier l'investigation à la personne qui a validé les opérations concernées, au motif qu'elle « connaît bien le dossier ». C'est un conflit d'intérêts : elle risque de défendre sa propre validation plutôt que de chercher les faits.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 7',
    title: 'Sécuriser les preuves avant que quiconque ne soit informé',
    intro: "La première règle d'une investigation est de ne pas alerter l'intéressé avant d'avoir sécurisé les pièces. Une preuve détruite, modifiée ou remplacée ne se récupère pas. Entrée : la liste des pièces utiles identifiée dans la section 2.",
    steps: [
      {
        title: 'Copier avant de questionner',
        actions: [
          "Photocopiez ou scannez les pièces originales (bons de commande, reçus, listes de paie, livre de caisse) ; conservez les originaux dans un coffre sous scellé quand c'est possible.",
          "Exportez les données électroniques en lecture seule (fichiers de paie, relevés Mobile Money, journaux d'accès au logiciel comptable) avec la date et l'heure d'export.",
          "Ne touchez à aucun original : travaillez toujours sur des copies.",
        ],
      },
      {
        title: 'Tenir un registre de la chaîne de conservation',
        actions: [
          "Pour chaque pièce : numéro, description, d'où elle vient, qui l'a collectée, date et heure, où elle est conservée.",
          "Chaque transfert à une autre personne est signé par les deux.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Pièce', 'Source', 'Collectée par', 'Date / heure', 'Conservée'],
      rows: [
        ['P-01', '12 bons de commande T3 + 5 BC du 02-10/09', 'Classeur logistique Rutshuru', 'Finance Officer', '04/11, 09 h 00', 'Coffre Goma, scellé 0147'],
        ['P-02', 'Liste de paie EP Tumaini, juil.-sept.', 'Classeur RH Rutshuru + fichier', 'Finance Officer', '04/11, 10 h 30', 'Coffre Goma + copie lecture seule'],
        ['P-03', 'Relevés Mobile Money des 14 journaliers', 'Opérateur, via la finance', 'Finance Officer', '04/11, 14 h 00', 'Dossier restreint, copie PDF'],
        ['P-04', 'Notes d\'appel nominal du 12/08, 26/08, 16/09', 'Dossier de visite du coordinateur', 'Joël B.', '04/11, 15 h 00', 'Dossier restreint'],
      ],
    },
    result: "Un registre de chaîne de conservation à jour, avec chaque pièce numérotée et copiée avant le premier entretien.",
    tip: "Prévoyez la collecte en une seule demi-journée, pendant que la base est occupée à autre chose, et sans annoncer pourquoi : « revue trimestrielle de routine » suffit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 7',
    title: "Construire le plan d'investigation en cinq étapes (section 4)",
    intro: "La section 4 du document, « Plan d'investigation et d'action », est un tableau de quatre colonnes — Étape d'investigation, Responsable, Échéance, Résultat / issue — avec cinq lignes. Cinq étapes au maximum, réalisables en deux semaines : si vous en avez besoin de plus, c'est que le périmètre est trop large.",
    steps: [
      {
        title: 'Partir des hypothèses à confirmer ou infirmer',
        actions: [
          "Reprenez chaque red flag de la section 3 et formulez l'hypothèse la plus simple : explication bénigne ou irrégularité.",
          "Pour chacune, demandez : quelle preuve la confirmerait ? quelle preuve l'infirmerait ?",
        ],
      },
      {
        title: 'Remplir le tableau',
        actions: [
          "Ordonnez les étapes : d'abord les pièces et les données (neutres), ensuite le terrain, puis les personnes, en dernier la rédaction.",
          "Une ligne = une action, un responsable nommé, une date de fin, un résultat attendu écrit au futur.",
          "Laissez la colonne « Résultat / issue » à « À réaliser » : vous la compléterez à l'étape 6.",
        ],
      },
    ],
    table: {
      columns: ['Étape d\'investigation', 'Responsable', 'Échéance', 'Résultat / issue'],
      rows: [
        ['1. Sécuriser les pièces et les accès (registre de chaîne de conservation)', 'Finance Officer', '04/11/2026', 'À réaliser'],
        ['2. Rapprocher achats, devis et livraisons ; comparer les prix à ceux de deux concurrents', 'Finance Officer + Joël B.', '06/11/2026', 'À réaliser'],
        ['3. Appel nominal inopiné sur le chantier de Kiwanja avec la liste de paie ; vérifier contrats, pièces d\'identité, numéros Mobile Money', 'Joël B. + appui conformité', '09/11/2026', 'À réaliser'],
        ['4. Entretiens : témoins, puis assistant logistique, puis chef de base', 'Claire D. + RH', '11-12/11/2026', 'À réaliser'],
        ['5. Rapport de conclusions, estimation de l\'exposition, recommandation de décision', 'Claire D.', '17/11/2026', 'À réaliser'],
      ],
    },
    result: "Un plan de cinq lignes au plus, dont chaque étape a un responsable et une date, la dernière tombant dans les 14 jours suivant le signalement.",
    pitfall: "Rédiger un plan de dix étapes qui tient en un mois. Au-delà de deux semaines, l'investigation s'éternise, les témoins se lassent ou s'inquiètent, les preuves s'évaporent. Mieux vaut un plan serré, puis un plan complémentaire si nécessaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 7',
    title: "Mener l'analyse documentaire et les rapprochements",
    intro: "On commence par les documents : ils ne mentent pas, ne s'inquiètent pas et ne peuvent pas être influencés. L'objectif est de confirmer ou d'infirmer chaque hypothèse par un chiffre vérifiable. Entrées : les pièces sécurisées à l'étape 2.",
    steps: [
      {
        title: 'Rapprocher les trois documents d\'un achat',
        actions: [
          "Pour chaque achat : bon de commande, bon de réception, facture — vérifiez que les quantités, prix et dates concordent.",
          "Vérifiez les signatures : qui a demandé, qui a approuvé, qui a réceptionné, et si la même personne revient.",
        ],
      },
      {
        title: 'Chiffrer l\'écart de prix et l\'exposition',
        actions: [
          "Prix payé − prix du concurrent le moins cher, multiplié par les quantités : c'est la surcharge potentielle.",
          "Montant payé à des personnes non confirmées : c'est l'exposition sur la paie.",
        ],
      },
      {
        title: 'Vérifier physiquement',
        actions: [
          "Comptez sur place les sacs, tôles, latrines construites ; faites l'appel nominal à l'ouverture du chantier.",
        ],
      },
    ],
    example: {
      title: 'Rapprochements effectués du 04 au 09/11/2026',
      lines: [
        "12 BC / 12 bons de réception / 12 factures : concordance des quantités ; les 12 bons de réception sont signés uniquement par l'assistant logistique.",
        "5 BC du 02 au 10/09 : environ 167 sacs de ciment (2 420 ÷ 14,50 USD). Écart de 2,00 USD par sac par rapport à Quincaillerie Umoja (12,50 USD) : 167 × 2,00 = 334 USD de surcharge potentielle.",
        "Appel nominal inopiné du 09/11 sur le chantier de Kiwanja : 11 présents sur 14 inscrits ; les 3 noms jamais vus sont toujours absents.",
        "Contrôle des pièces des 3 noms : aucun contrat signé, aucune pièce d'identité au dossier ; Mobile Money : deux noms sur un même numéro.",
      ],
    },
    result: "Pour chaque hypothèse, un chiffre et une pièce qui l'appuie, consigné dans une note de travail datée et signée.",
    pitfall: "Interpréter un écart comme une preuve d'intention. Une surcharge de 334 USD peut venir d'un fournisseur plus cher mais plus proche, ou plus rapide : seule la relation entre l'acheteur et le fournisseur, établie en entretien, éclaire l'intention.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 7',
    title: 'Conduire les entretiens sans accuser',
    intro: "L'entretien est la dernière étape du plan d'investigation, jamais la première : vous y arrivez armé de faits, pas d'impressions. Son but est de donner à chacun la possibilité d'expliquer, et de comprendre les faits que les documents ne montrent pas.",
    steps: [
      {
        title: 'Préparer',
        actions: [
          "Fixez l'ordre : témoins neutres (contremaître), puis les personnes qui ont validé, puis la personne visée en dernier.",
          "Préparez des questions ouvertes (« Racontez-moi comment vous choisissez un fournisseur ») avant les questions précises (« Comment connaissez-vous cette entreprise ? »).",
          "Sélectionnez trois pièces au plus à présenter ; ne les montrez qu'à la fin.",
        ],
      },
      {
        title: 'Conduire',
        actions: [
          "Soyez deux : un qui parle, un qui prend des notes. Lieu neutre et confidentiel.",
          "Informez la personne de l'objet, de son droit à s'expliquer et, selon le droit du travail applicable, d'être assistée (vérifiez avec la RH).",
          "Ne promettez rien (ni indulgence ni confidentialité absolue), ne menacez pas, n'accusez pas.",
        ],
      },
      {
        title: 'Consigner',
        actions: [
          "Rédigez le compte rendu le jour même ; faites-le relire et signer par la personne interrogée, avec ses corrections éventuelles.",
        ],
      },
    ],
    example: {
      title: 'Plan de l\'entretien avec l\'assistant logistique (12/11/2026)',
      lines: [
        "1. Cadre : objet « vérification des achats et de la liste de paie du T3 », droit de s'expliquer, assistance possible, compte rendu relu et signé.",
        "2. Questions ouvertes : choix des fournisseurs, établissement de la liste de paie, relation avec la Quincaillerie Mwangaza.",
        "3. Questions précises : 5 BC du 02 au 10/09 (pièces P-01) ; 3 noms (pièce P-02) ; numéro Mobile Money commun (pièce P-03).",
        "4. Clôture : « Souhaitez-vous ajouter quelque chose ? » ; relecture et signature ; rappel de la confidentialité.",
      ],
    },
    result: "Pour chaque entretien, un compte rendu signé, daté, qui ne contient que ce qui a été dit, et la liste des pièces présentées.",
    tip: "Terminez toujours par « Y a-t-il quelque chose que je ne vous ai pas demandé et que vous voudriez que je sache ? ». C'est souvent là que la vraie explication apparaît, bénigne ou non.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 7',
    title: "Consigner les résultats dans la colonne « Résultat / issue » et conclure",
    intro: "À la fin des quatre premières étapes, vous complétez la colonne « Résultat / issue » du tableau de la section 4, étape par étape, puis vous formulez une conclusion. Chaque ligne doit pouvoir être lue sans le reste du dossier.",
    steps: [
      {
        title: 'Compléter le tableau',
        actions: [
          "Pour chaque étape : ce qui a été fait, ce qui a été constaté, la pièce de référence, l'écart chiffré.",
          "Écrivez « confirmé », « infirmé » ou « non concluant » pour chaque hypothèse, jamais « probable ».",
        ],
      },
      {
        title: 'Formuler la conclusion',
        actions: [
          "Rédigez en une page : faits établis, faits non établis, montant exposé, cause racine (quel contrôle manquait), explications alternatives écartées.",
          "Joignez la liste des pièces et les comptes rendus d'entretien.",
        ],
      },
    ],
    table: {
      columns: ['Étape', 'Échéance', 'Résultat / issue (section 4 complétée)'],
      rows: [
        ['1. Sécuriser les pièces', '04/11', 'Fait. P-01 à P-04 copiées et scellées, accès en écriture à la liste de paie retiré à l\'assistant logistique.'],
        ['2. Rapprocher achats et prix', '06/11', '12 BC / BR / factures concordants. 5 BC fractionnés confirmés (2 420 USD, aucun devis). Surcharge potentielle de 334 USD par rapport à Umoja.'],
        ['3. Appel nominal inopiné', '09/11', '11 présents sur 14. 2 des 3 noms confirmés fictifs (ni contrat, ni pièce, même Mobile Money) = 960 USD ; 1 nom correspond à un maçon réel d\'un autre chantier, mal pointé : régularisé.'],
        ['4. Entretiens', '11-12/11', 'Comptes rendus signés. L\'assistant logistique reconnaît l\'ajout de deux noms et un lien de parenté non déclaré avec le propriétaire de Mwangaza ; le chef de base reconnaît avoir validé sans relire.'],
        ['5. Rapport de conclusions', '17/11', 'Rendu le 17/11 : fraude sur la paie confirmée (960 USD) ; fractionnement et conflit d\'intérêts confirmés ; exposition totale retenue : 960 + 334 = 1 294 USD.'],
      ],
    },
    result: "La colonne « Résultat / issue » complétée pour les cinq étapes, une page de conclusion, et un montant exposé précis (1 294 USD) distinct de l'estimation initiale (3 860 USD).",
    pitfall: "Conclure sans écrire l'explication alternative qui a été écartée. Un lecteur critique cherchera toujours : « et si c'était autrement ? ». La réponse doit déjà figurer dans votre rapport, avec la pièce qui la rend impossible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 7 sur 7',
    title: 'Décider, notifier, recouvrer et clôturer (section 5)',
    intro: "La section 5, « Décision finale », est un tableau de deux colonnes : « Action corrective / disciplinaire décidée » et « Validé par (Direction, date) ». La décision appartient à la Direction, sur recommandation de l'équipe d'investigation, et jamais à l'enquêteur seul.",
    steps: [
      {
        title: 'Rédiger les actions',
        actions: [
          "Une ligne par action : disciplinaire (selon le règlement intérieur et le droit du travail, avec l'avis de la RH et du juridique), corrective (contrôles), de recouvrement, de communication.",
          "Veillez à la proportionnalité : la sanction correspond aux faits établis, pas à ceux qu'on soupçonne.",
        ],
      },
      {
        title: 'Faire valider et clôturer',
        actions: [
          "Faites signer par la Direction (Directeur Pays et direction du siège) avec la date.",
          "Notifiez le bailleur de la clôture et du montant ; remboursez les dépenses inéligibles ; informez le lanceur d'alerte si possible.",
          "Archivez le dossier complet et inscrivez les contrôles améliorés dans le plan de renforcement (procédure 1).",
        ],
      },
    ],
    table: {
      columns: ['Action corrective / disciplinaire décidée', 'Validé par (Direction, date)'],
      rows: [
        ['Assistant logistique : procédure disciplinaire engagée selon le règlement intérieur ; recouvrement de 1 294 USD étudié avec le conseil juridique', 'Directeur Pays + direction du siège, 18/11/2026'],
        ['Chef de base : avertissement écrit pour défaut de contrôle ; formation obligatoire sur les seuils et la séparation des tâches', 'Directeur Pays, 18/11/2026'],
        ['Remboursement à Agence Delta des 1 294 USD inéligibles sur fonds propres de KAS ; courrier de clôture', 'Direction du siège, 20/11/2026'],
        ['Contrôles : trois devis dès 500 USD cumulés, réception contresignée, appel nominal mensuel, congé obligatoire de 10 jours par an', 'Directeur Pays + Finance Manager, 30/11/2026'],
      ],
    },
    result: "La section 5 signée, la notification de clôture envoyée au bailleur, les remboursements effectués et le plan de renforcement de la procédure 1 mis à jour.",
    pitfall: "Clore sans traiter la cause racine. Sanctionner une personne sans refermer l'opportunité (une seule personne qui achète, réceptionne et pointe) garantit qu'une autre personne, un an plus tard, reproduira les mêmes faits.",
  },

  // ─────────────── 6. Cas complet résolu ───────────────
  {
    type: 'case-study',
    title: 'Cas complet résolu — La base de Rutshuru du signal à la décision (1/3)',
    scenario: "Mardi 3 novembre 2026, vous revenez de la base de Rutshuru avec votre revue du T3. Deux sujets sont devant vous : un faisceau d'indices sur les achats et la paie du Projet WASH, et une signature de sous-traitance prévue le 12 novembre. Voici la résolution dans l'ordre, telle qu'une Finance Manager expérimentée la mène. Partie 1 : détecter.",
    steps: [
      {
        title: 'Passer la checklist de routine (procédure 2)',
        actions: [
          "Dupliquez le template sous RF_Rutshuru_T3-2026_v1.xlsx et remettez tous les « Constaté » à Non.",
          "Testez les quatre catégories avec les données de la base : balance fournisseurs, registre des avances, liste de paie, appels nominaux.",
          "Renseignez les lignes 5 à 10 : fournisseur unique (3, Oui), fractionnement (3, Oui), fantôme (3, Oui), prix (2, Oui), congé (2, Oui), justificatifs (3, Non).",
        ],
        result: "Indicateur global : B4 = 3, B5 = 5 → ALERTE ÉLEVÉE.",
      },
      {
        title: 'Vérifier le futur sous-traitant avant de signer (procédure 5)',
        actions: [
          "Fiche d'identité de la Coopérative Maendeleo Rutshuru et de ses trois dirigeants ; recherches OFAC, UE et ONU le 04/11.",
          "Une correspondance OFAC à 88 sur le nom du président : comparez date de naissance (1962 contre 12/03/1981), nationalité, adresse → faux positif documenté.",
          "Archivez les 3 preuves et la note de faux positif ; ligne du registre signée par la Finance Manager ; validation du siège obtenue le 06/11.",
        ],
        result: "Contrat COMAR signable le 12/11 : aucune entité ni personne listée, preuve datée au dossier, revérification fixée au 04/11/2027.",
      },
    ],
    table: {
      columns: ['Date', 'Action', 'Livrable produit'],
      rows: [
        ['03/11', 'Revue T3 de Rutshuru, checklist renseignée', 'RF_Rutshuru_T3-2026_v1.xlsx — ALERTE ÉLEVÉE'],
        ['04/11', 'Screening COMAR sur OFAC, UE, ONU', 'Trois PDF datés + note de faux positif + ligne de registre'],
        ['06/11', 'Validation du siège du faux positif', 'Mail de validation archivé'],
        ['12/11', 'Signature du contrat COMAR', 'Contrat avec clause anti-corruption'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — La base de Rutshuru du signal à la décision (2/3)',
    scenario: "La checklist affiche ALERTE ÉLEVÉE. Le chef de base ayant validé les achats concernés, vous ne passez ni par lui ni par la hiérarchie locale. Partie 2 : signaler, qualifier, protéger.",
    steps: [
      {
        title: 'Signaler par le canal indépendant (procédure 6, étape 1)',
        actions: [
          "E-mail confidentiel à Claire D. (siège), Grace M. en copie, le 03/11 à 16 h 10, avec la checklist jointe.",
          "Section 1 du document : canal, date, convergence avec le message anonyme du 29/10 (SIG-2026-007), confirmation de la liste fermée des personnes informées.",
        ],
      },
      {
        title: 'Décrire et évaluer (procédure 6, étapes 2 et 3)',
        actions: [
          "Section 2 : faits chiffrés (5 BC de 470 à 495 USD, 12 BC sur 12 au même fournisseur, 3 noms jamais vus, 1 440 USD) et fonctions concernées.",
          "Section 3 : cinq red flags avec leurs niveaux et la mention « ALERTE ÉLEVÉE (B4 = 3, B5 = 5) ».",
        ],
      },
      {
        title: 'Protéger sans accuser (procédure 6, étapes 4 et 5)',
        actions: [
          "Mesure conservatoire sous le tableau de la section 3 : avances suspendues, liste de paie en lecture seule, commandes à Mwangaza gelées, réexamen le 17/11, statut de l'agent inchangé.",
          "Recevabilité jugée le 03/11 ; Théodore W. et le siège informés le 04/11 ; notification à Agence Delta le 05/11 dans le délai de 5 jours ouvrés.",
        ],
        result: "Dossier SIG-2026-007 recevable, trois personnes informées, mesure conservatoire documentée, bailleur notifié dans les délais.",
      },
    ],
    example: {
      title: 'Message de notification envoyé à Agence Delta le 05/11/2026 (extrait)',
      lines: [
        "Objet : Notification d'une investigation en cours — Projet WASH Nord-Kivu — base de Rutshuru",
        "« À l'issue d'une revue trimestrielle de routine, KAS a identifié des signaux d'irrégularités sur des achats de matériaux et la liste de paie d'un chantier, pour un montant exposé estimé à 3 860 USD. Une investigation indépendante est ouverte depuis le 03/11, des mesures conservatoires proportionnées ont été prises. Nous vous transmettrons le rapport de conclusions le 17/11/2026. Les personnes concernées bénéficient de la présomption d'innocence. »",
      ],
    },
    tip: "La notification décrit les faits, le montant, les mesures et le calendrier. Elle ne contient ni nom complet, ni qualificatif (« voleur », « fraudeur »), ni hypothèse sur l'intention.",
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — La base de Rutshuru du signal à la décision (3/3)',
    scenario: "Le mandat est signé, les pièces sont sécurisées le 04/11. Partie 3 : enquêter, conclure, corriger. Le plan tient en cinq étapes et quatorze jours, du 3 au 17 novembre 2026.",
    steps: [
      {
        title: "Mener le plan en cinq étapes (procédure 7, étapes 3 à 5)",
        actions: [
          "Étapes 1 et 2 : pièces copiées et scellées ; 12 BC rapprochés ; 5 BC fractionnés confirmés ; surcharge potentielle de 334 USD (167 sacs × 2,00 USD).",
          "Étape 3 : appel nominal inopiné le 09/11 : 11 présents sur 14 ; 2 noms fictifs confirmés (960 USD) ; 1 nom régularisé.",
          "Étape 4 : entretiens des 11 et 12/11, deux enquêteurs, comptes rendus signés.",
        ],
      },
      {
        title: 'Conclure et décider (procédure 7, étapes 6 et 7)',
        actions: [
          "Rapport du 17/11 : fraude sur la paie (960 USD), fractionnement et conflit d'intérêts confirmés ; exposition 960 + 334 = 1 294 USD.",
          "Section 5 signée le 18/11 : procédure disciplinaire, avertissement écrit au chef de base, remboursement à Agence Delta sur fonds propres, nouveaux contrôles.",
        ],
        result: "Investigation close en 15 jours, décision proportionnée, bailleur remboursé, cause racine traitée.",
      },
    ],
    table: {
      columns: ['Mesure', 'Avant', 'Après (dès le 30/11/2026)'],
      rows: [
        ['Achat de matériaux', 'Une seule personne demande, choisit, réceptionne', 'Trois devis dès 500 USD cumulés ; réception contresignée'],
        ['Paie des journaliers', 'Liste établie et pointée par la logistique', 'Liste du coordinateur ; appel nominal mensuel inopiné'],
        ['Congés', 'Aucun congé en 12 mois', '10 jours obligatoires par an, remplacement par un autre agent'],
        ['Screening', 'Entrée en relation seulement', 'Entrée + revérification annuelle, registre signé'],
      ],
    },
    result: "Livrables finaux du cas : carte des opportunités et plan de renforcement, checklist RF_Rutshuru_T3-2026 (ALERTE ÉLEVÉE), fiche de screening COMAR, document de signalement complet (sections 1 à 5) et notification au bailleur — chacun daté, référencé et classé dans le dossier de conformité.",
  },

  // ─────────────── 7. Exercices ───────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Avances terrain suspectes, zone de Maiduguri (Nigeria)',
    instructions: "Cas fictif, inspiré de situations réelles. Vous êtes Finance Manager d'une ONG internationale qui opère plusieurs bases satellites autour de Maiduguri, dans un contexte de déplacement massif de population. Lors de votre revue trimestrielle des avances terrain — une routine, pas une investigation ciblée — vous relevez, en passant votre checklist dossier par dossier, ces éléments sur la base la plus excentrée, à trois heures de route du bureau régional : (1) sur six mois, le même assistant logistique a « égaré » les justificatifs originaux de trois avances différentes, à chaque fois proches du plafond sans double signature ; (2) un fournisseur de carburant local est systématiquement retenu alors que deux autres, dans la même ville, proposent des prix inférieurs de 12 à 18 % sur des devis informels, sans aucune mise en concurrence au dossier ; (3) l'assistant n'a pris aucun congé depuis son recrutement quatorze mois plus tôt et se porte volontaire pour couvrir les tâches de caisse ; (4) le chef de base, sous forte pression opérationnelle, a validé chaque avance en expliquant : « c'est quelqu'un de confiance, on n'a pas le temps de tout redocumenter ».",
    steps: [
      {
        title: 'Préparer et remplir la checklist (procédure 2)',
        actions: [
          "Dupliquez checklist-red-flags-fraude-financiere.xlsx, nommez-le RF_Maiduguri_T3.xlsx, remettez les cases D à Non.",
          "Identifiez au moins 4 red flags précis dans les catégories « Caisse/Avances » et « Achats » ; ajoutez les lignes manquantes en 10 à 14.",
          "Pour chacun : niveau (C), Oui (D), et en colonne E « Preuve : … → Action : … » à partir des faits ci-dessus.",
          "Lisez la feuille « Indicateur global » et écrivez une phrase d'interprétation.",
        ],
      },
      {
        title: 'Rédiger les sections 1 à 3 du document de signalement (procédure 6)',
        actions: [
          "Section 1 : choisissez le canal en tenant compte du fait que le chef de base a validé les avances ; confirmez l'anonymat.",
          "Section 2 : nature du soupçon (faits chiffrés) et fonctions concernées, sans accusation.",
          "Section 3 : reportez les red flags et leurs niveaux ; écrivez sous le tableau une mesure conservatoire proportionnée.",
        ],
      },
      {
        title: 'Rédiger les sections 4 et 5 (procédure 7)',
        actions: [
          "Section 4 : un plan de cinq étapes au plus, réalisables en deux semaines, avec responsable et échéance pour chacune.",
          "Section 5 : proposez une décision conditionnelle (selon les résultats) et indiquez qui la valide.",
        ],
      },
    ],
    tip: "Utilisez le plan type d'investigation : sécuriser les pièces, rapprocher et comparer les prix, vérifier sur le terrain, entretiens (témoins puis personne visée), rapport. Chaque étape doit avoir un livrable précis.",
    pitfall: "Écrire « le chef de base et l'assistant sont complices ». Rien ne le prouve : la liste de faits suffit à justifier l'investigation. La formulation accusatrice est le premier défaut que relèvera un lecteur extérieur.",
    deliverable: "Les deux fichiers complétés : la checklist de red flags (au moins 4 red flags documentés, indicateur lu) et le document de signalement et plan d'action (sections 1 à 5), avec un plan d'investigation de cinq étapes au plus, réalisable en deux semaines.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Screening de quatre contractants',
    instructions: "Mercredi 4 novembre 2026. Quatre contractants de KAS doivent être vérifiés. Pour chacun, vous disposez des résultats ci-dessous (fictifs). Décidez, justifiez et complétez le registre de screening.",
    steps: [
      {
        title: 'Analyser les résultats',
        actions: [
          "A. Transports Salama SARL (fournisseur de carburant, 14 200 USD/an) : entité et deux dirigeants → 0 résultat sur OFAC, UE et ONU.",
          "B. Association Tuungane Mashinani (nouveau partenaire, 22 000 USD) : liste UE → une entrée avec le même nom exact et la même ville d'enregistrement, inscrite en 2025 ; OFAC et ONU : 0.",
          "C. Dr Bahati Mukendi (consultant individuel, 6 500 USD, né en 1983, congolais) : ONU → une entrée « MUKENDI, Bahati », score 90, né en 1949, d'une autre nationalité ; OFAC et UE : 0.",
          "D. Fondation Amani Kivu (partenaire actif depuis 2023, dernier screening 06/2025, nouveau président en 2026) : screening de l'entité et du nouveau président → 0 résultat partout.",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Pour chaque contractant : verdict (aucune correspondance, faux positif, vrai positif probable, revérification en retard), décision (signer, suspendre, escalader) et pièces à archiver.",
          "Écrivez la justification en deux phrases, en comparant des identifiants lorsqu'il y a une correspondance.",
        ],
      },
      {
        title: 'Compléter le registre',
        actions: [
          "Quatre lignes : entité, date, listes, résultat, preuve (nom de fichier normalisé AAAA-MM-JJ_LISTE_ENTITÉ), date de revérification.",
        ],
      },
    ],
    tip: "Pour B, posez-vous d'abord : « que dois-je faire pour ne pas aggraver la situation ? ». La réponse commence par ne rien payer, ne rien signer et ne pas prévenir la contrepartie.",
    deliverable: "Un registre de screening à quatre lignes, un verdict motivé pour chaque entité, et l'escalade écrite pour B (message de deux lignes à la responsable conformité).",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Auditer un mécanisme de signalement',
    instructions: "Vous visitez l'antenne de Masisi de KAS. Voici ce que vous constatez : la politique dit « tout agent qui soupçonne une fraude en informe son chef d'antenne, ou écrit à integrite@exemple-kas.org » ; cette adresse est lue par la secrétaire de direction et par le Directeur Pays ; une boîte à lettres a été posée dans le couloir du bureau du chef d'antenne ; la non-représailles figure dans le manuel du siège (en français) mais pas dans les contrats de journaliers ; aucun retour n'a jamais été donné ; zéro signalement en trois ans.",
    steps: [
      {
        title: 'Noter la grille d\'audit (procédure 4, étape 1)',
        actions: [
          "Reprenez les quatre critères et notez chacun de 0 à 2 avec une phrase de constat et une preuve.",
          "Calculez le total sur 8.",
        ],
      },
      {
        title: 'Proposer les corrections',
        actions: [
          "Pour chaque critère noté en dessous de 2 : une action, un responsable et une date.",
          "Précisez le canal indépendant à créer, le canal non numérique, le texte de non-représailles et la forme du retour d'information.",
        ],
      },
      {
        title: 'Planifier le test',
        actions: [
          "Fixez la date du premier test du canal et l'indicateur qui vous dira si le personnel a confiance.",
        ],
      },
    ],
    deliverable: "La grille d'audit notée sur 8 avec constats, et un plan d'actions de quatre lignes au moins (action, responsable, date), plus la date du test annuel.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercices 1 à 3)',
    items: [
      "Ex. 1 — La checklist porte au moins 4 « Oui » documentés : justificatifs manquants (3), avances proches du plafond (3, ligne ajoutée), fournisseur unique sans concurrence (3), prix supérieurs de 12 à 18 % (2) ; éventuellement congé et validation sans challenge (2).",
      "Ex. 1 — L'indicateur lit B4 = 3 niveaux 3 constatés et B5 = 6 constatés au moins, donc « ALERTE ÉLEVÉE » ; votre phrase d'interprétation dit que ce n'est pas une preuve de fraude, mais le déclencheur d'une investigation structurée.",
      "Ex. 1 — Section 1 : le canal est indépendant du chef de base (siège ou ligne régionale) ; section 2 : uniquement des faits chiffrés et des fonctions ; section 3 : mesure conservatoire proportionnée et réversible (par exemple suspension temporaire de l'autorisation de caisse individuelle), sans présumer de la culpabilité.",
      "Ex. 1 — Section 4 : cinq étapes au plus, chacune avec responsable et échéance, la dernière dans les 14 jours ; section 5 : décision conditionnelle et validation par la Direction.",
      "Ex. 2 — A : aucune correspondance, signature possible, preuves archivées. B : vrai positif probable → suspendre, ne rien payer, ne pas prévenir, escalader immédiatement. C : faux positif (naissance 1949 contre 1983, nationalité différente) documenté et validé par le siège car score > 85. D : revérification en retard de 5 mois documentée, nouveau président screené, alertes ajoutées.",
      "Ex. 2 — Chaque ligne du registre a une preuve nommée AAAA-MM-JJ_LISTE_ENTITÉ et une date de revérification.",
      "Ex. 3 — Notes attendues : canal indépendant 0, plusieurs canaux 0 ou 1 (la boîte du couloir du chef d'antenne ne compte pas), non-représailles 1, retour d'information 0 ; total de 1 à 2 sur 8.",
      "Ex. 3 — Chaque action corrective a un responsable et une date ; le canal indépendant est géré hors de la hiérarchie pays, et la non-représailles est ajoutée aux contrats de journaliers.",
    ],
  },

  // ─────────────── 8. Erreurs de terrain ───────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Ignorer un red flag isolé en se disant « ce n'est probablement rien ». Parade : le noter dans la checklist, avec sa pièce, même à « Non » ou au niveau 1 ; un justificatif perdu une fois est un incident, trois fois c'est un motif d'investigation.",
      "Un mécanisme de signalement qui n'est pas réellement anonyme en pratique. Parade : un canal indépendant de la hiérarchie, un canal sans internet, un numéro qui n'affiche pas l'appelant, une non-représailles écrite dans les contrats.",
      "Screener un partenaire une seule fois à l'entrée en relation. Parade : registre avec date de revérification, alerte 30 jours avant, déclencheurs hors calendrier (nouveau dirigeant, avenant).",
      "Vérifier l'entité mais pas ses dirigeants et signataires. Parade : fiche d'identité complète avec état civil de chaque personne, et trois listes interrogées pour chacune.",
      "Écarter une correspondance « parce que ce n'est pas lui ». Parade : comparaison écrite d'au moins deux identifiants indépendants, validée par une seconde personne, preuve archivée.",
      "Confondre « personne de confiance » et « personne dispensée de contrôle ». Parade : le contrôle s'applique à la fonction ; séparation des tâches, congés obligatoires, rotation, comptage inopiné pour tous.",
      "Traiter l'investigation comme un jugement de culpabilité avant qu'elle ne commence. Parade : mesures conservatoires proportionnées, réversibles, confidentielles, avec date de réexamen ; rapport en faits, jamais en qualificatifs.",
      "Laisser la personne visée ou la hiérarchie concernée apprendre l'enquête avant que les pièces soient copiées. Parade : sécuriser d'abord, questionner ensuite ; liste fermée de personnes informées ; registre de chaîne de conservation.",
      "Tarder à notifier le bailleur. Parade : relire la clause de notification de chaque convention à la signature, et notifier dans le délai le plus court avec des faits, un montant et un calendrier.",
    ],
  },

  // ─────────────── 9. Récapitulatif + checklist ───────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez cartographié les opportunités de fraude d'un processus sensible avec une matrice « qui fait quoi », noté les risques, et planifié des contrôles préventifs et détectifs avec responsable et échéance.",
      "Vous avez passé la checklist de red flags en routine, testé quatre catégories par des calculs, renseigné chaque ligne du template avec sa preuve, et lu l'indicateur global (ALERTE ÉLEVÉE pour Rutshuru) en y ajoutant votre jugement sur l'accumulation.",
      "Vous avez rédigé une politique anti-corruption de deux pages avec des règles chiffrées, des clauses contractuelles et des preuves de diffusion.",
      "Vous avez audité un mécanisme de signalement sur ses quatre critères et construit un dispositif à plusieurs canaux, indépendant de la hiérarchie, avec garantie de non-représailles et retour d'information.",
      "Vous avez vérifié un partenaire sur les listes OFAC, UE et ONU — entité et dirigeants —, écarté un faux positif par comparaison d'identifiants et archivé des preuves datées dans un registre de revérification.",
      "Vous avez rempli les sections 1 à 3 du document de signalement : canal, allégation factuelle, évaluation avec niveau de risque, mesure conservatoire proportionnée, notification au bailleur.",
      "Vous avez structuré une investigation de cinq étapes en deux semaines (sections 4 et 5), consigné les résultats, estimé l'exposition à 1 294 USD et obtenu une décision validée par la Direction.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de conclure cette formation',
    items: [
      "Je sais expliquer le triangle de la fraude et pourquoi le contrôle interne agit avant tout sur l'opportunité.",
      "Je sais citer au moins trois raisons pour lesquelles le contexte humanitaire favorise structurellement les trois conditions du triangle.",
      "J'ai une matrice « qui fait quoi » pour au moins un processus sensible, et aucune personne n'y cumule plus de deux fonctions clés sans contrôle compensatoire.",
      "J'ai passé la checklist de red flags sur une période réelle, remis les cases d'exemple à « Non » avant de saisir, documenté chaque « Oui » avec une pièce et lu l'indicateur.",
      "Ma politique anti-corruption est signée par tous les agents, avec un registre des cadeaux ouvert.",
      "Je peux énumérer les quatre critères d'un mécanisme de signalement sécurisé et j'ai testé mon propre canal.",
      "Je sais interroger OFAC, UE et ONU pour une entité et ses dirigeants, documenter un faux positif avec deux identifiants et archiver une preuve datée.",
      "J'ai un registre de screening avec date de revérification et une alerte au calendrier de conformité.",
      "J'ai rédigé un document de signalement complet et un plan d'investigation de cinq étapes au plus avec le template fourni.",
      "Je sais distinguer une mesure conservatoire proportionnée d'une sanction anticipée avant la conclusion d'une investigation.",
    ],
  },

  // ─────────────── 10. Clôture ───────────────
  {
    type: 'closing',
    nextModuleHint: "Vous arrivez au terme des huit modules de la Formation en Gestion Financière d'une ONG Humanitaire : il n'y a pas de module suivant. Le Module 01 ouvrait sur une idée simple : dans une ONG, la rigueur financière est une question de survie. Ce dernier module en est la démonstration la plus directe : un plan comptable impeccable, un budget multi-bailleurs parfaitement suivi, une trésorerie irréprochable et des rapports conformes ne protègent pas une organisation si une fraude non détectée ou un partenaire sanctionné non écarté vient tout remettre en cause en une seule investigation. La validation de ce dernier exercice, comme celle des modules précédents, ouvre droit à votre attestation de fin de formation BK-BOOST Ltd. — le signal, pour tout recruteur du secteur, que vous maîtrisez non seulement les chiffres, mais les responsabilités qui vont avec.",
  },
]
