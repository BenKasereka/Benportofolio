// Module 01 — Fondamentaux de la Comptabilité de Projet ONG
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (plan-comptable-codification-projets.xlsx, note-allocation-couts-communs.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (bureau de Goma de l'ONG fictive « Kivu Avenir Solidarité »), avec
// exemples remplis, résultat attendu, astuces et erreurs à éviter.
// Les organisations, bailleurs, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Fondamentaux de la Comptabilité de Projet ONG',
    hook: "Dans une ONG, on ne vous demande jamais si vous avez bien dépensé l'argent : on vous demande de le PROUVER, ligne par ligne, pour chaque bailleur. À la fin de ce module, vous aurez en main une grille de codification paramétrée, un registre des engagements, une clé de répartition calculée à 100 %, une note d'allocation signée et des écritures de régularisation tracées — tout ce qu'il faut pour clôturer un trimestre multi-bailleurs sans peur de l'audit.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Paramétrer le plan comptable et la grille de codification à partir des budgets signés, en produisant une table de correspondance compte ↔ rubrique ↔ ligne bailleur et des listes déroulantes opérationnelles dans le template plan-comptable-codification-projets.xlsx.",
      "Coder n'importe quelle transaction sur ses trois axes obligatoires (projet, bailleur, rubrique budgétaire) et son compte dès la saisie, en produisant une ligne complète, référencée à sa pièce et contrôlée dans l'onglet « Codification ».",
      "Suivre un budget en engagement ET en caisse, en produisant un registre des engagements et le calcul du disponible réel d'une ligne budgétaire (budget − réalisé − engagements ouverts).",
      "Construire une clé de répartition défendable (ETP, m² ou trajets), en remplissant le calculateur d'allocation et en passant les écritures d'allocation qui totalisent exactement 100 % du coût commun.",
      "Détecter un double financement avant l'auditeur, en produisant un tableau de contrôle par pièce justificative qui compare montants imputés et montant réel de chaque facture.",
      "Rédiger la note d'allocation d'un coût commun d'une page, complète et validée, avec le template note-allocation-couts-communs.docx.",
      "Corriger une erreur de codification découverte après coup par une extourne et un recodage référencés, en tenant un journal des corrections prêt pour l'audit.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de comptabilité générale : c'est un atelier. Chaque procédure se termine par un livrable concret, que vous construirez sur un seul cas fil rouge, du paramétrage de la grille jusqu'à la clôture du premier trimestre.",
      "Le cas fil rouge : vous êtes Finance Officer de « Kivu Avenir Solidarité » (KAS), ONG fictive dont le bureau pays de Goma (RDC) héberge trois projets financés par trois bailleurs différents. Nous sommes le 1er avril 2026 : le rapport financier du 1er trimestre (janvier–mars 2026) doit partir le 15 avril, et vous allez découvrir en route que votre prédécesseur a laissé deux erreurs.",
    ],
    bullets: [
      "Livrable 1 — La table de correspondance compte ↔ rubrique interne ↔ ligne budgétaire de chaque bailleur, et l'onglet « Listes » paramétré.",
      "Livrable 2 — Des lignes de codification complètes (date, compte, libellé, projet, bailleur, rubrique, montant, type, statut, n° de pièce).",
      "Livrable 3 — Un registre des engagements et le calcul du disponible réel d'une ligne budgétaire, avec l'e-mail d'alerte au chef de projet.",
      "Livrable 4 — Le calculateur d'allocation rempli (loyer, véhicule partagé) et les écritures d'allocation correspondantes.",
      "Livrable 5 — Un tableau de contrôle anti-double financement par pièce justificative.",
      "Livrable 6 — La note d'allocation du loyer, signée et classée.",
      "Livrable 7 — Les écritures de régularisation (extourne + recodage) et le journal des corrections du trimestre.",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : le bureau de Goma de Kivu Avenir Solidarité',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. Les bailleurs, les montants et les personnes sont fictifs mais construits sur des configurations réelles de bureaux multi-bailleurs dans l'Est de la RDC.",
    table: {
      columns: ['Projet (code)', 'Bailleur (code)', 'Personnel au bureau', 'Budget 12 mois', 'Période'],
      rows: [
        ['Projet Nutrition Nord-Kivu (NUT)', 'Fonds Horizon (FHO)', '5 ETP', '420 000 USD', 'janv.–déc. 2026'],
        ['Projet WASH Nord-Kivu (WSH)', 'Agence Delta (ADL)', '3 ETP', '310 000 USD', 'janv.–déc. 2026'],
        ['Projet Santé Nord-Kivu (SAN)', 'Fondation Sigma (FSG)', '2 ETP', '260 000 USD', 'janv.–déc. 2026'],
      ],
    },
    example: {
      title: 'Coûts communs mensuels du bureau et acteurs',
      lines: [
        "Loyer du bureau : 3 000 USD/mois — Internet : 850 USD/mois — Gardiennage : 1 800 USD/mois",
        "Véhicule partagé LC-03 (chauffeur + entretien + carburant) : environ 1 250 USD/mois",
        "Grace M., Finance Manager — Esther N., caissière — Patrick K., logisticien — Joël B., coordinateur WASH",
        "Les 4 personnes de support (finance, logistique, chauffeur, gardien) ne sont pas comptées dans les ETP projets.",
      ],
    },
    pitfall: "Les deux erreurs héritées : le loyer est réparti « à parts égales » (1 000 USD par projet) depuis janvier, et une facture de carburant de 240 USD du véhicule WASH a été codée sur le Projet Santé. Nous les corrigerons dans les procédures 4, 6 et 7, puis dans le cas complet.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Pourquoi on code CHAQUE transaction — pas seulement les grosses',
    body: [
      "Le réflexe du Finance Officer pressé : bien coder le véhicule et le gros contrat, et laisser filer la recharge téléphonique ou le café de réunion dans une rubrique « divers ». Une ONG qui gère plusieurs bailleurs sur un même bureau n'a qu'un seul moyen de prouver que l'argent de chaque bailleur a financé exactement ce pour quoi il a été donné : la codification analytique systématique, à la saisie, de chaque transaction.",
      "La codification se fait à la source, par la personne qui engage ou enregistre la dépense (chef de projet, logisticien, caissier de terrain). Le rôle du Finance Manager est de fournir un plan comptable clair, de former les équipes à l'utiliser et de vérifier — pas de tout recoder lui-même en fin de mois.",
    ],
    example: {
      title: 'Le coût réel du « divers » sur un an (bureau de Goma)',
      lines: [
        "Recharges téléphoniques : 25 USD/semaine × 52 semaines = 1 300 USD",
        "Eau et café des réunions : 40 USD/semaine × 52 = 2 080 USD",
        "Petites fournitures payées en caisse : 120 USD/mois × 12 = 1 440 USD",
        "Total en « divers » non ventilé = 4 820 USD qu'aucun bailleur n'acceptera sans détail par projet.",
      ],
    },
    highlight: "Un auditeur ne demande jamais « combien avez-vous dépensé au total » : il demande « montrez-moi, pour CE bailleur et CETTE rubrique, les pièces justificatives correspondantes ».",
  },
  {
    type: 'concept',
    title: 'Les trois axes obligatoires… et le compte',
    body: "Chaque ligne de dépense porte quatre informations de classement. Le compte décrit la NATURE de la dépense (ce que vous avez acheté) ; les trois axes analytiques décrivent sa DESTINATION (pour qui, payé par qui, sur quelle ligne de budget). Les quatre sont obligatoires.",
    table: {
      columns: ['Information', 'Question à laquelle elle répond', 'Exemple (fil rouge)'],
      rows: [
        ['Compte (plan comptable)', "Quelle est la nature de la dépense ?", '604 - Achats de carburant'],
        ['Axe 1 — Projet', 'Quelle intervention cette dépense sert-elle ?', 'Projet WASH Nord-Kivu'],
        ['Axe 2 — Bailleur', 'Qui finance cette dépense ?', 'Agence Delta'],
        ['Axe 3 — Rubrique budgétaire', 'Sur quelle ligne du budget signé de CE bailleur ?', 'Transport & carburant (ligne ADL « C. Véhicules & carburant »)'],
      ],
    },
    tip: "Le compte ne suffit jamais : un même compte 625 « Déplacements, missions » peut relever de la rubrique Formation (per diem d'un atelier) ou de la rubrique Transport (mission de supervision) selon l'objet de la dépense.",
  },
  {
    type: 'concept',
    title: "Le plan comptable ONG : ce qu'il faut savoir pour agir",
    body: [
      "Le plan comptable est la liste structurée et numérotée des comptes de l'organisation. Quel que soit le référentiel de votre pays (plan comptable national, SYSCOHADA en zone OHADA, plan interne du siège), la logique par classes est la même. Au quotidien, un Finance Officer projet manipule surtout les comptes de charges (classe 6).",
      "Le template du module fournit dix comptes de charges types (601 à 651) dans l'onglet « Listes ». Votre plan comptable réel en aura davantage : le principe de codification ne change pas.",
    ],
    table: {
      columns: ['Classe', 'Contenu', 'Exemple de compte'],
      rows: [
        ['Classe 4 — Tiers', 'Dettes et créances (fournisseurs, personnel, bailleurs)', 'Fournisseurs, personnel – rémunérations dues'],
        ['Classe 5 — Trésorerie', "L'argent disponible", 'Banque, caisse'],
        ['Classe 6 — Charges', 'Les dépenses du projet', '604 - Achats de carburant, 611 - Locations, 641 - Salaires'],
        ['Classe 7 — Produits', 'Les ressources reçues', 'Subventions des bailleurs'],
      ],
    },
    pitfall: "Confondre compte et rubrique bailleur. Le plan comptable est UNIQUE pour toute l'organisation ; les rubriques budgétaires changent d'un bailleur à l'autre. C'est la table de correspondance (procédure 1) qui fait le pont.",
  },
  {
    type: 'comparison-table',
    title: "Comptabilité de caisse vs comptabilité d'engagement",
    columns: ['Critère', 'Comptabilité de caisse', "Comptabilité d'engagement"],
    rows: [
      ['Enregistre la dépense au moment où…', "l'argent sort réellement (virement, remise des billets)", "l'obligation est créée (contrat signé, bon de commande validé, service rendu)"],
      ['Usage principal', 'Suivi de trésorerie, gestion des avances de caisse terrain', 'Suivi budgétaire réel, prévision de consommation, reporting bailleur'],
      ['Question à laquelle elle répond', "« Combien d'argent ai-je en banque et en caisse ? »", "« Combien de budget me reste-t-il vraiment ? »"],
      ['Risque si utilisée seule', 'Illusion de disponibilité budgétaire malgré des engagements non payés', "Aucun problème majeur si la trésorerie est suivie en parallèle"],
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi cette distinction est vitale : le calcul du disponible réel',
    body: "Un Finance Officer a annoncé fièrement qu'il restait 40 000 USD disponibles sur une ligne « Construction », alors que deux contrats déjà signés (mais pas encore payés) allaient consommer 55 000 USD. Il regardait la caisse ; il fallait regarder l'engagement. Un bon Finance Manager pilote les deux en parallèle : l'engagement pour savoir où en est le budget, la caisse pour savoir si la trésorerie suit.",
    example: {
      title: 'Ligne « B. Construction & réhabilitation » — WASH / Agence Delta au 31/03/2026',
      lines: [
        "Budget approuvé ......................................... 150 000 USD",
        "Dépenses payées / comptabilisées ...................... − 110 000 USD",
        "Vue « caisse » : disponible apparent .................... = 40 000 USD",
        "Engagements ouverts (contrat latrines lot 2 : 35 000 + contrat forages : 20 000) ... − 55 000 USD",
        "Vue « engagement » : disponible réel .................... = − 15 000 USD (dépassement)",
      ],
    },
    highlight: "Budget disponible = budget approuvé − dépenses payées − engagements déjà pris (contrats signés, commandes validées, salaires courus).",
  },
  {
    type: 'concept',
    title: 'Coût direct ou coût commun : la question à se poser avant de coder',
    body: "Un coût direct sert exclusivement un seul projet : il se code directement sur ce projet. Un coût commun bénéficie à plusieurs projets à la fois : il doit passer par une clé de répartition documentée AVANT d'être codé.",
    table: {
      columns: ['Dépense (fil rouge)', 'Direct ou commun ?', 'Traitement'],
      rows: [
        ['Salaire d\'une animatrice affectée à 100 % au projet Nutrition', 'Direct', 'Codé 100 % NUT / Fonds Horizon / Personnel'],
        ['Carburant du véhicule affecté exclusivement au WASH', 'Direct', 'Codé 100 % WSH / Agence Delta / Transport & carburant'],
        ['Loyer du bureau où travaillent les trois équipes', 'Commun', 'Clé ETP → 50 % / 30 % / 20 %'],
        ['Entretien du véhicule partagé LC-03', 'Commun', 'Clé « nombre de trajets du mois »'],
        ['Superviseur travaillant 60 % WASH / 40 % Santé', 'Commun (2 projets)', 'Clé « temps de travail » issue des feuilles de temps'],
      ],
    },
    tip: "Test rapide : « Si ce projet fermait demain, cette dépense disparaîtrait-elle entièrement ? » Oui → coût direct. Non, elle continuerait pour les autres → coût commun.",
  },
  {
    type: 'concept',
    title: 'Le double financement (« double-dipping ») : comment il naît',
    body: [
      "Le double financement est la situation où une même dépense est financée au-delà de 100 % de son coût réel par la somme des bailleurs. Il naît de deux façons : une même pièce codée deux fois (erreur de saisie), ou une clé de répartition mal construite dont la somme des parts dépasse 100 %.",
      "Un bailleur qui découvre qu'il a financé une part déjà financée par un autre ne se contente pas d'une correction : il peut exiger le remboursement intégral de sa part, geler d'autres financements et inscrire l'incident au dossier de l'organisation.",
    ],
    example: {
      title: 'Simulation : le loyer de 3 000 USD imputé selon les taux écrits dans les trois budgets signés',
      lines: [
        "Nutrition / Fonds Horizon : 58 % (taux repris d'une ancienne proposition) = 1 740 USD",
        "WASH / Agence Delta : 30 % = 900 USD",
        "Santé / Fondation Sigma : 20 % = 600 USD",
        "Total imputé = 3 240 USD pour une facture de 3 000 USD → 108 % → 240 USD financés deux fois chaque mois.",
      ],
    },
    highlight: "Règle à vérifier systématiquement : la somme des pourcentages d'allocation d'un coût commun, tous bailleurs confondus, doit toujours être égale à 100 % — jamais plus.",
  },
  {
    type: 'stat-callout',
    stat: '100 %',
    caption: "Ni plus, ni moins : la somme des parts d'un coût commun",
    context: "Plus de 100 % = double financement. Moins de 100 % = coût non couvert qui retombera sur les fonds propres. Cette seule vérification, faite avant chaque rapport, évite la majorité des constats d'audit sur les coûts partagés.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'Codification analytique', definition: "Attribution systématique des trois axes (projet, bailleur, rubrique budgétaire) à chaque transaction dès sa saisie." },
      { term: 'Compte', definition: "Numéro du plan comptable qui décrit la nature de la dépense (ex. 604 - Achats de carburant)." },
      { term: 'Rubrique budgétaire', definition: "Ligne précise du budget approuvé par un bailleur à laquelle une dépense est rattachée (Personnel, Transport, Intrants, Fonctionnement…)." },
      { term: 'Table de correspondance', definition: "Tableau qui relie chaque rubrique interne de l'organisation à la ligne exacte du budget signé de chaque bailleur." },
      { term: "Comptabilité d'engagement", definition: "Enregistrement d'une dépense dès que l'obligation est créée, avant même le paiement — base du suivi budgétaire réel." },
      { term: 'Comptabilité de caisse', definition: "Enregistrement d'une dépense au moment où l'argent sort réellement — base du suivi de trésorerie." },
      { term: 'Engagement ouvert', definition: "Montant d'un contrat ou bon de commande signé qui n'a pas encore été facturé ou payé." },
      { term: 'Coût commun (coût partagé)', definition: "Dépense qui bénéficie à plusieurs projets ou bailleurs à la fois et ne peut être imputée à un seul." },
      { term: 'Clé de répartition', definition: "Méthode de calcul documentée qui répartit un coût commun au prorata de l'usage réel (ETP, m², trajets, temps)." },
      { term: 'ETP (Équivalent Temps Plein)', definition: "Une personne à plein temps = 1 ETP ; une personne à mi-temps sur le projet = 0,5 ETP." },
      { term: 'Double financement (double-dipping)', definition: "Même dépense financée au-delà de 100 % de son coût réel par la somme des bailleurs." },
      { term: 'Extourne', definition: "Écriture de même montant et de signe inverse qui annule une ligne erronée sans l'effacer." },
      { term: 'Écriture de régularisation', definition: "Ensemble extourne + recodage correct, référencé à la ligne d'origine, qui corrige une erreur de façon traçable." },
      { term: 'Pièce justificative', definition: "Document qui prouve la dépense (facture, reçu, contrat, bon de commande, feuille de paie) ; son numéro doit figurer sur la ligne codée." },
    ],
  },
  {
    type: 'concept',
    title: 'Votre feuille de route : 7 procédures, dans l\'ordre du terrain',
    body: "Les procédures suivent l'ordre réel du travail d'un Finance Officer : on paramètre une fois, on code tous les jours, on suit les engagements chaque semaine, on alloue et on contrôle chaque mois, on documente et on corrige avant chaque rapport.",
    table: {
      columns: ['Procédure', 'Fréquence', 'Livrable', 'Étapes'],
      rows: [
        ['1. Paramétrer le plan comptable et la grille', 'Début de projet / nouveau bailleur', 'Table de correspondance + onglet Listes', '5'],
        ['2. Coder une transaction à la saisie', 'Chaque jour', 'Ligne complète dans Codification', '7'],
        ['3. Suivre en engagement et en caisse', 'Chaque semaine', 'Registre des engagements + disponible réel', '5'],
        ['4. Allouer un coût commun', 'Chaque mois', 'Calculateur rempli + écritures d\'allocation', '6'],
        ['5. Détecter le double financement', 'Chaque mois, avant rapport', 'Tableau de contrôle par pièce', '5'],
        ['6. Rédiger la note d\'allocation', 'À chaque clé nouvelle ou modifiée', 'Note signée d\'une page', '5'],
        ['7. Corriger une erreur de codification', 'Dès qu\'une erreur est trouvée', 'Extourne + recodage + journal', '5'],
      ],
    },
  },

  // ─────────────── PROCÉDURE 1 — Paramétrer le plan comptable et la grille ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Rassembler les budgets signés et lister les lignes de chaque bailleur',
    intro: "Vous ne pouvez pas coder juste sans savoir exactement comment CHAQUE bailleur a structuré SON budget. Entrées nécessaires : la version signée (et le dernier avenant) de chaque budget bailleur, au format Excel si possible.",
    steps: [
      {
        title: 'Collecter les budgets de référence',
        actions: [
          "Demandez au coordinateur ou au Finance Manager la dernière version SIGNÉE de chaque budget (pas la version de travail).",
          "Vérifiez la date de signature et l'existence d'avenants : la version applicable est la plus récente signée.",
          "Classez-les dans un dossier unique « 00_Budgets_signés » avec un nom normalisé : NUT_FHO_Budget_v2_signé_2025-12-15.xlsx.",
        ],
      },
      {
        title: 'Extraire la liste des lignes budgétaires',
        actions: [
          "Pour chaque budget, recopiez dans un nouvel onglet « Lignes bailleurs » : bailleur, code de ligne, intitulé exact, montant approuvé.",
          "Copiez l'intitulé mot pour mot : « C. Véhicules & carburant » n'est pas « Transport ».",
          "Notez les règles particulières écrites dans la convention (plafond des coûts de bureau, clé de répartition imposée, éligibilité du carburant générateur…).",
        ],
      },
    ],
    example: {
      title: 'Extrait de l\'onglet « Lignes bailleurs » — fil rouge',
      lines: [
        "FHO | 1.1 | Personnel nutrition | 168 000 USD",
        "FHO | 4.1 | Quote-part bureau (loyer, charges) | 18 000 USD",
        "ADL | B | Construction & réhabilitation | 150 000 USD",
        "ADL | C | Véhicules & carburant | 21 600 USD",
        "FSG | S3 | Logistique & transport | 12 000 USD",
        "FSG | S4 | Frais de structure | 14 400 USD",
      ],
    },
    result: "Un onglet qui liste, pour les trois bailleurs, toutes les lignes budgétaires avec leur code, leur intitulé exact et leur montant — et dont le total par bailleur égale le budget signé.",
    pitfall: "Travailler à partir d'un budget « de proposition » non signé. Les lignes et montants changent souvent lors de la négociation : seule la version signée fait foi en audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Construire la table de correspondance compte ↔ rubrique ↔ ligne bailleur',
    intro: "Le template utilise des rubriques internes harmonisées (Personnel, Transport & carburant, etc.). Chaque bailleur a les siennes. La table de correspondance fait le pont et répond, pour toute dépense, à la question « sur quelle ligne de CE bailleur ? ».",
    steps: [
      {
        title: 'Créer le tableau de correspondance',
        actions: [
          "Ajoutez un onglet « Correspondance » au classeur.",
          "Colonne A : rubrique interne (reprenez les 8 rubriques de l'onglet « Listes »).",
          "Colonnes B, C, D : la ligne exacte correspondante chez Fonds Horizon, Agence Delta et Fondation Sigma (code + intitulé).",
          "Colonne E : les comptes du plan comptable qui alimentent normalement cette rubrique.",
        ],
      },
      {
        title: 'Traiter les cas sans correspondance',
        actions: [
          "Si un bailleur n'a pas de ligne pour une rubrique, écrivez « NON ÉLIGIBLE » en rouge dans la case.",
          "Une dépense qui tomberait dans une case « NON ÉLIGIBLE » ne peut pas être imputée à ce bailleur : elle va sur un autre bailleur éligible ou sur fonds propres.",
        ],
      },
    ],
    table: {
      columns: ['Rubrique interne', 'Fonds Horizon (NUT)', 'Agence Delta (WSH)', 'Fondation Sigma (SAN)', 'Comptes usuels'],
      rows: [
        ['Personnel', '1.1 Personnel nutrition', 'A. Personnel projet', 'S1 Ressources humaines', '641'],
        ['Intrants & matériel', '2.1 Intrants nutritionnels', 'B. Construction & réhabilitation', 'S2 Médicaments & consommables', '601, 602'],
        ['Transport & carburant', '3.1 Transport', 'C. Véhicules & carburant', 'S3 Logistique & transport', '604, 613, 625'],
        ['Loyer & charges locatives', '4.1 Quote-part bureau', 'D. Coûts de bureau partagés', 'S4 Frais de structure', '611'],
        ['Fonctionnement bureau', '5.1 Fonctionnement', 'D. Coûts de bureau partagés', 'S4 Frais de structure', '601, 651'],
        ['Formation', '6.1 Renforcement des capacités', 'E. Promotion hygiène & formation', 'S5 Formation des agents', '622, 625'],
        ['Suivi-évaluation', '7.1 Suivi-évaluation', 'F. Suivi & redevabilité', 'S6 Suivi-évaluation', '622, 625'],
      ],
    },
    result: "Pour chacune des rubriques internes, vous savez lire en une seconde la ligne exacte de chaque bailleur. La table est imprimée et affichée au bureau finance et à la caisse.",
    tip: "Faites valider la table par le Finance Manager et, en cas de doute sur une ligne, par le chargé de programme du bailleur par écrit : un e-mail de confirmation vaut de l'or en audit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: "Paramétrer l'onglet « Listes » du template",
    intro: "Les listes déroulantes de l'onglet « Codification » puisent dans l'onglet « Listes ». Le template est livré avec des projets et bailleurs d'exemple : remplacez-les par les vôtres avant toute saisie.",
    steps: [
      {
        title: 'Mettre à jour les colonnes de l\'onglet « Listes »',
        actions: [
          "Ouvrez plan-comptable-codification-projets.xlsx, onglet « Listes ».",
          "Colonne A « Comptes » (A2:A11) : vérifiez que les comptes correspondent à votre plan comptable ; ajoutez-en si besoin sous la ligne 11.",
          "Colonne B « Projets » (B2:B5) : saisissez Projet Nutrition Nord-Kivu, Projet WASH Nord-Kivu, Projet Santé Nord-Kivu, Autre projet.",
          "Colonne C « Bailleurs » (C2:C5) : remplacez les bailleurs d'exemple par Fonds Horizon, Agence Delta, Fondation Sigma ; gardez Fonds propres.",
          "Colonne D « Rubriques » (D2:D9) : gardez les 8 rubriques internes, identiques à la colonne A de l'onglet « Correspondance ».",
          "Colonnes E « Types » (Engagement, Caisse) et F « Statuts » (Confirmé, À vérifier, À corriger, Corrigé) : ne les modifiez pas.",
        ],
      },
      {
        title: 'Supprimer les lignes d\'exemple',
        actions: [
          "Dans l'onglet « Codification », effacez le contenu des lignes 5 à 8 (exemples livrés avec le template) avant votre première saisie réelle.",
          "Ne supprimez pas les lignes 1 à 4 (titre et en-têtes) ni la ligne de rappel en bas de l'onglet.",
        ],
      },
    ],
    example: {
      title: "Onglet « Listes » après paramétrage (colonnes B et C)",
      lines: [
        "B2 Projet Nutrition Nord-Kivu   | C2 Fonds Horizon",
        "B3 Projet WASH Nord-Kivu        | C3 Agence Delta",
        "B4 Projet Santé Nord-Kivu       | C4 Fondation Sigma",
        "B5 Autre projet                 | C5 Fonds propres",
      ],
    },
    result: "Les listes déroulantes de l'onglet « Codification » proposent exactement vos 3 projets, vos 3 bailleurs + fonds propres et vos 8 rubriques — rien d'autre.",
    pitfall: "Écrire un même nom de deux façons (« WASH Nord Kivu » et « WASH Nord-Kivu »). Les filtres et les SOMME.SI.ENS traiteront ces deux libellés comme deux projets différents : les totaux seront faux sans que rien ne le signale.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Vérifier et étendre les listes déroulantes de la grille',
    intro: "Le template applique la validation des données aux lignes 5 à 20 seulement. Un bureau actif saisit plusieurs centaines de lignes par an : étendez la validation pour que chaque nouvelle ligne soit protégée.",
    steps: [
      {
        title: 'Contrôler la validation existante',
        actions: [
          "Cliquez sur la cellule D5 de l'onglet « Codification ».",
          "Ouvrez Données > Validation des données : vous devez lire Autoriser « Liste » et Source « =Listes!$B$2:$B$5 ».",
          "Faites de même pour B5 (=Listes!$A$2:$A$11), E5 (=Listes!$C$2:$C$5), F5 (=Listes!$D$2:$D$9), H5 (=Listes!$E$2:$E$3), I5 (=Listes!$F$2:$F$5).",
        ],
      },
      {
        title: 'Étendre la validation à 2 000 lignes',
        actions: [
          "Sélectionnez B5:B2000, ouvrez Données > Validation des données, choisissez Liste et saisissez la source =Listes!$A$2:$A$11.",
          "Répétez pour D5:D2000, E5:E2000, F5:F2000, H5:H2000 et I5:I2000 avec leurs sources respectives.",
          "Dans l'onglet « Message d'erreur », choisissez le style « Arrêt » : une valeur hors liste sera refusée.",
        ],
      },
      {
        title: 'Ajouter la colonne « N° pièce »',
        actions: [
          "En J4, saisissez l'en-tête « N° pièce » (numéro de facture, de reçu ou de pièce de caisse).",
          "Cette colonne servira au contrôle anti-double financement (procédure 5) et à la traçabilité des corrections (procédure 7).",
        ],
      },
    ],
    result: "Test réussi : en D150, la flèche de liste déroulante apparaît, et la saisie manuelle de « Nutrition » (hors liste) est refusée par un message d'erreur.",
    tip: "Si vous ajoutez un compte ou une rubrique dans « Listes », pensez à agrandir la plage source de la validation (ex. =Listes!$A$2:$A$15), sinon le nouvel élément n'apparaîtra pas dans la liste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: "Rédiger la fiche « règles de codification » pour les équipes terrain",
    intro: "Ce sont le logisticien, la caissière et les chefs de projet qui codent à la source. Ils ont besoin d'une page, pas d'un manuel. Entrées : la table de correspondance et la liste des coûts communs.",
    steps: [
      {
        title: 'Écrire la fiche d\'une page',
        actions: [
          "Titre : « Comment coder une dépense — bureau de Goma — version du 05/01/2026 ».",
          "Bloc 1 : les 4 informations obligatoires (compte, projet, bailleur, rubrique) + le n° de pièce.",
          "Bloc 2 : la table de correspondance simplifiée (rubrique interne → ligne de chaque bailleur).",
          "Bloc 3 : la liste des coûts communs à NE PAS coder directement (loyer, internet, gardiennage, véhicule LC-03, réunions inter-projets) : ils passent par la finance.",
          "Bloc 4 : le contact en cas de doute (Finance Officer, poste et téléphone).",
        ],
      },
      {
        title: 'Former et faire signer',
        actions: [
          "Organisez une session de 30 minutes avec les personnes qui saisissent ou remettent des pièces.",
          "Faites coder 5 pièces réelles en séance et corrigez ensemble.",
          "Faites signer une feuille de présence : elle prouve en audit que les équipes ont été formées.",
        ],
      },
    ],
    example: {
      title: 'Extrait de la fiche affichée à la caisse',
      lines: [
        "Carburant véhicule WASH → 604 | Projet WASH | Agence Delta | Transport & carburant",
        "Carburant véhicule partagé LC-03 → NE PAS CODER : remettre à la finance (coût commun)",
        "Per diem atelier santé → 625 | Projet Santé | Fondation Sigma | Formation",
        "En cas de doute : ne devinez pas, appelez la finance avant de saisir.",
      ],
    },
    result: "Une fiche d'une page validée par le Finance Manager, affichée à la caisse et à la logistique, et une feuille de présence signée des personnes formées.",
    pitfall: "Former une fois et ne plus revenir. Mettez la fiche à jour à chaque nouveau projet, nouveau bailleur ou avenant budgétaire, et datez chaque version.",
  },

  // ─────────────── PROCÉDURE 2 — Coder une transaction à la saisie ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Réceptionner la pièce et vérifier qu\'elle est complète',
    intro: "On ne code jamais une dépense sans pièce justificative valable. C'est la pièce qui sera tirée au sort par l'auditeur. Fil rouge : le 5 janvier 2026, Patrick K. vous remet la facture F-2026-014 du fournisseur fictif NutriPlus Goma pour 120 cartons d'aliment thérapeutique (ATPE).",
    steps: [
      {
        title: 'Contrôler la pièce',
        actions: [
          "Vérifiez la présence de : nom et coordonnées du fournisseur, date, numéro de facture, désignation précise, quantités, prix unitaires, total.",
          "Vérifiez que la facture est adressée à l'organisation (et non à une personne).",
          "Rapprochez-la du bon de commande (BC-2025-088) et du bon de réception signé par le magasinier : quantités et prix doivent concorder.",
          "Vérifiez l'approbation : signature de la personne habilitée selon le seuil de délégation.",
        ],
      },
      {
        title: 'Décider',
        actions: [
          "Pièce complète → passez à l'étape 2.",
          "Pièce incomplète → ne saisissez rien ; renvoyez-la avec une note écrite précisant ce qui manque.",
        ],
      },
    ],
    example: {
      title: 'Contrôle de la facture F-2026-014',
      lines: [
        "Fournisseur : NutriPlus Goma (fictif) — Date : 05/01/2026 — N° : F-2026-014 ✔",
        "120 cartons ATPE × 70 USD = 8 400 USD ✔ (BC-2025-088 : 120 × 70 USD) ✔",
        "Bon de réception BR-2026-003 signé du magasinier : 120 cartons reçus ✔",
        "Approbation : coordinateur Nutrition (seuil ≤ 10 000 USD) ✔ → pièce valable",
      ],
    },
    result: "Une pièce complète, rapprochée du bon de commande et du bon de réception, approuvée par la bonne personne.",
    pitfall: "Saisir « pour ne pas oublier » une facture incomplète en se promettant de récupérer la pièce manquante plus tard. Elle ne revient presque jamais, et la ligne restera inéligible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Identifier le projet bénéficiaire et la nature directe ou commune',
    intro: "Avant toute rubrique, déterminez QUI bénéficie de la dépense. Entrées : la pièce, le bon de commande (qui mentionne normalement le projet) et la liste des coûts communs.",
    steps: [
      {
        title: 'Lire la destination de la dépense',
        actions: [
          "Lisez le projet indiqué sur le bon de commande ou la demande d'achat.",
          "En l'absence de mention, demandez par écrit à l'initiateur de la dépense : « Pour quel projet ? »",
        ],
      },
      {
        title: 'Appliquer le test direct / commun',
        actions: [
          "Posez la question : « Si ce projet fermait demain, cette dépense disparaîtrait-elle entièrement ? »",
          "Oui → coût direct : un seul projet, passez à l'étape 3.",
          "Non → coût commun : ne codez pas sur un seul projet, transférez vers la procédure 4 (allocation).",
        ],
      },
    ],
    table: {
      columns: ['Pièce (janvier 2026)', 'Projet', 'Direct / commun'],
      rows: [
        ['F-2026-014 — 120 cartons ATPE, 8 400 USD', 'Nutrition', 'Direct'],
        ['Bail — loyer janvier, 3 000 USD', 'Les trois', 'Commun → procédure 4'],
        ['PC-0109 — recharges animateurs WASH, 45 USD', 'WASH', 'Direct'],
        ['PC-0112 — carburant véhicule WASH, 240 USD', 'WASH', 'Direct'],
        ['PC-0120 — eau et café réunion inter-projets, 38 USD', 'Les trois', 'Commun → procédure 4'],
      ],
    },
    result: "Chaque pièce porte au crayon, en haut à droite, le projet bénéficiaire ou la mention « COMMUN ».",
    tip: "Les petites dépenses de réunion inter-projets sont des coûts communs : ne les laissez pas glisser sur le projet du demandeur par commodité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Ouvrir le budget signé et trouver la rubrique exacte',
    intro: "C'est l'étape qui évite la source numéro un des écarts d'audit : le codage « au feeling ». Un carburant peut relever de « Transport », de « Fonctionnement bureau » ou d'une ligne « Générateur » selon la façon dont CE bailleur a construit CE budget.",
    steps: [
      {
        title: 'Retrouver la ligne bailleur',
        actions: [
          "Ouvrez l'onglet « Correspondance ».",
          "Cherchez la rubrique interne qui décrit la dépense (ex. Intrants & matériel).",
          "Lisez la ligne du bailleur du projet identifié à l'étape 2 (ex. Fonds Horizon → 2.1 Intrants nutritionnels).",
          "En cas d'hésitation entre deux lignes, ouvrez le budget signé et lisez la description détaillée (budget narratif) de chaque ligne.",
        ],
      },
      {
        title: 'Vérifier l\'éligibilité et le disponible',
        actions: [
          "Vérifiez que la case n'est pas « NON ÉLIGIBLE ».",
          "Vérifiez le disponible réel de la ligne (procédure 3) : si la dépense le dépasse, alertez avant de saisir.",
        ],
      },
    ],
    example: {
      title: 'Raisonnement pour la facture F-2026-014',
      lines: [
        "Nature : aliment thérapeutique → rubrique interne « Intrants & matériel »",
        "Projet Nutrition → bailleur Fonds Horizon → ligne « 2.1 Intrants nutritionnels »",
        "Budget 2.1 : 96 000 USD — réalisé : 0 — engagements ouverts : 8 400 (ce même BC) → disponible réel 87 600 USD ✔",
      ],
    },
    result: "Vous pouvez citer, pour la dépense, le code et l'intitulé exacts de la ligne du budget signé.",
    pitfall: "Coder d'après le souvenir d'un projet précédent financé par un autre bailleur. Deux bailleurs peuvent nommer différemment des rubriques qui se ressemblent : consultez le budget signé, pas votre mémoire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Choisir le compte du plan comptable',
    intro: "Le compte décrit la nature de la dépense, indépendamment du bailleur. Il doit être cohérent avec la rubrique (colonne E de l'onglet « Correspondance »).",
    steps: [
      {
        title: 'Sélectionner le compte',
        actions: [
          "Identifiez ce qui a été acheté ou payé (un bien, un service, un salaire, une location, un déplacement).",
          "Choisissez le compte le plus précis dans la liste (colonne A de « Listes »).",
          "Vérifiez la cohérence avec la rubrique : un compte 641 (salaires) sur une rubrique « Intrants » doit vous arrêter.",
        ],
      },
    ],
    table: {
      columns: ['Dépense', 'Compte', 'Rubrique interne'],
      rows: [
        ['Aliment thérapeutique ATPE', '602 - Achats de matériel médical/intrants', 'Intrants & matériel'],
        ['Carburant véhicule WASH', '604 - Achats de carburant', 'Transport & carburant'],
        ['Loyer du bureau', '611 - Locations', 'Loyer & charges locatives'],
        ['Réparation pneus véhicule', '613 - Entretien et réparations', 'Transport & carburant'],
        ['Honoraires consultant enquête nutritionnelle', '622 - Honoraires et prestations', 'Suivi-évaluation'],
        ['Per diem participants atelier', '625 - Déplacements, missions', 'Formation'],
        ['Salaire animatrice', '641 - Salaires et charges sociales', 'Personnel'],
      ],
    },
    result: "Le compte choisi est le plus précis disponible et il est cohérent avec la rubrique retenue à l'étape 3.",
    tip: "Quand aucun compte précis n'existe (ex. abonnement internet absent de la liste du template), utilisez le compte « fourre-tout » prévu (651) mais signalez-le au Finance Manager pour créer un compte dédié : le compte « divers » ne doit jamais devenir une habitude.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: "Saisir la ligne dans l'onglet « Codification », colonne par colonne",
    intro: "Vous avez toutes les informations : saisissez maintenant la ligne complète, sans aucune case laissée « à compléter plus tard ».",
    steps: [
      {
        title: 'Remplir les 10 colonnes',
        actions: [
          "A — Date : la date de la pièce, au format AAAA-MM-JJ (2026-01-05).",
          "B — Compte : choisissez dans la liste (602 - Achats de matériel médical/intrants).",
          "C — Libellé : quoi + quantité + fournisseur + n° de pièce, en 80 caractères maximum.",
          "D, E, F — Projet, Bailleur, Rubrique budgétaire : choisissez dans les listes.",
          "G — Montant (USD) : le montant de la pièce, sans le symbole monétaire.",
          "H — Type : « Engagement » pour une facture fournisseur, un contrat, un salaire ; « Caisse » pour une dépense payée comptant en caisse.",
          "I — Statut : « Confirmé » si tout est vérifié, « À vérifier » s'il reste un doute à lever.",
          "J — N° pièce : le numéro exact de la facture ou de la pièce de caisse.",
        ],
      },
    ],
    example: {
      title: 'Lignes saisies — janvier 2026 (coûts directs)',
      lines: [
        "2026-01-05 | 602 | ATPE 120 cartons – NutriPlus Goma – F-2026-014 | Nutrition | Fonds Horizon | Intrants & matériel | 8400 | Engagement | Confirmé | F-2026-014",
        "2026-01-09 | 651 | Recharges tél. 3 animateurs WASH – janv. | WASH | Agence Delta | Fonctionnement bureau | 45 | Caisse | Confirmé | PC-0109",
        "2026-01-15 | 625 | Per diem atelier 12 agents santé communautaires | Santé | Fondation Sigma | Formation | 1150 | Caisse | Confirmé | PC-0115",
      ],
    },
    result: "Une ligne par pièce (ou une ligne par projet pour un coût commun, voir procédure 4), sans aucune cellule vide de A à J.",
    pitfall: "Un libellé du type « Achat » ou « Paiement fournisseur ». Six mois plus tard, personne — et surtout pas l'auditeur — ne saura ce que c'était. Le libellé doit se suffire à lui-même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: 'Référencer et classer la pièce justificative',
    intro: "Une ligne codée sans pièce retrouvable est une ligne inéligible. Le lien ligne ↔ pièce doit fonctionner dans les deux sens : de la ligne vers la pièce, et de la pièce vers la ligne.",
    steps: [
      {
        title: 'Marquer la pièce',
        actions: [
          "Apposez sur la pièce originale le tampon « SAISI » avec : date de saisie, projet, bailleur, rubrique, votre paraphe.",
          "Pour un coût commun, notez sur la pièce la clé et les parts (« Clé ETP 50/30/20 – NA-2026-01 »).",
        ],
      },
      {
        title: 'Classer',
        actions: [
          "Classez l'original dans le classeur du mois, par ordre de n° de pièce.",
          "Scannez la pièce en PDF et nommez-la avec son numéro : F-2026-014.pdf.",
          "Rangez le scan dans le dossier partagé 2026 > 01_Janvier > Pièces.",
        ],
      },
    ],
    example: {
      title: 'Tampon « SAISI » apposé sur F-2026-014',
      lines: [
        "SAISI le 06/01/2026 — NUT / FHO / 2.1 Intrants nutritionnels — compte 602 — paraphe : FO",
      ],
    },
    result: "À partir de n'importe quelle ligne, vous retrouvez la pièce papier et le scan en moins d'une minute ; à partir de n'importe quelle pièce, vous retrouvez sa ligne.",
    tip: "Faites le test « auditeur » une fois par mois : tirez 5 lignes au hasard et chronométrez le temps pour sortir les pièces. Au-delà de 2 minutes par pièce, votre classement doit être revu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: 'Contrôler la grille chaque semaine (contrôle de second niveau)',
    intro: "La personne qui saisit ne doit pas être la seule à vérifier. Chaque vendredi, le Finance Officer (ou le Finance Manager pour les saisies du Finance Officer) contrôle la grille de la semaine.",
    steps: [
      {
        title: 'Détecter les cases manquantes',
        actions: [
          "Dans une cellule libre (ex. L2), saisissez =NBVAL(A5:A2000)*3-NBVAL(D5:F2000) (en anglais : =COUNTA(A5:A2000)*3-COUNTA(D5:F2000)).",
          "Le résultat doit être 0 : sinon, un ou plusieurs axes manquent. Filtrez les colonnes D, E, F sur « (Vides) » pour les trouver.",
        ],
      },
      {
        title: 'Lever les doutes',
        actions: [
          "Filtrez la colonne I sur « À vérifier » et traitez chaque ligne : passez-la en « Confirmé » ou en « À corriger ».",
          "Pour les lignes « À corriger », appliquez la procédure 7 (jamais de modification directe).",
        ],
      },
      {
        title: 'Contrôler par sondage',
        actions: [
          "Tirez 10 % des lignes de la semaine (minimum 5) et revérifiez pièce, compte et rubrique.",
          "Paraphez la feuille de contrôle hebdomadaire : date, lignes contrôlées, anomalies trouvées.",
        ],
      },
    ],
    result: "Chaque vendredi : 0 case d'axe vide, 0 ligne « À vérifier » de plus de 7 jours, une feuille de contrôle paraphée.",
    pitfall: "Corriger directement la cellule d'une ligne déjà « Confirmé » pendant le contrôle. Dès qu'une ligne est confirmée, toute correction passe par une écriture de régularisation (procédure 7).",
  },

  // ─────────────── PROCÉDURE 3 — Suivre en engagement et en caisse ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Créer et tenir le registre des engagements',
    intro: "Le registre des engagements recense tout ce que vous avez promis de payer et qui n'est pas encore facturé : contrats, bons de commande validés, salaires courus. C'est lui qui transforme votre suivi de caisse en suivi budgétaire réel.",
    steps: [
      {
        title: 'Créer l\'onglet « Engagements »',
        actions: [
          "Ajoutez un onglet « Engagements » avec les colonnes : A N° engagement, B Date, C Projet, D Bailleur, E Rubrique, F Fournisseur, G Description et réf. (BC / contrat), H Montant engagé, I Réalisé à date, J Reste à payer, K Statut.",
          "En J, saisissez la formule =H5-I5 et recopiez-la vers le bas.",
          "Appliquez aux colonnes C, D, E les mêmes listes déroulantes que la grille de codification ; en K, la liste Ouvert / Soldé / Annulé.",
        ],
      },
      {
        title: 'Enregistrer chaque engagement le jour de la signature',
        actions: [
          "Dès qu'un contrat ou un bon de commande est signé, ajoutez-le avec le statut « Ouvert ».",
          "Le dernier jour du mois, ajoutez les salaires du mois non encore payés (salaires courus).",
        ],
      },
    ],
    example: {
      title: 'Registre des engagements — extrait au 31/03/2026',
      lines: [
        "ENG-WSH-014 | 2026-02-02 | WASH | Agence Delta | Intrants & matériel | Kivu Bâtir (fictif) | Latrines lot 2 – contrat C-2026-007 | 35000 | 0 | 35000 | Ouvert",
        "ENG-WSH-015 | 2026-03-18 | WASH | Agence Delta | Intrants & matériel | ForagePlus (fictif) | Réhabilitation 4 forages – C-2026-011 | 20000 | 0 | 20000 | Ouvert",
        "ENG-NUT-009 | 2025-12-20 | Nutrition | Fonds Horizon | Intrants & matériel | NutriPlus Goma | ATPE 120 cartons – BC-2025-088 | 8400 | 8400 | 0 | Soldé",
      ],
    },
    result: "Chaque contrat, bon de commande et salaire couru du bureau figure dans le registre avec son reste à payer calculé automatiquement.",
    tip: "Demandez à la logistique de vous transmettre une copie de chaque bon de commande le jour de sa validation : sans cette règle, vous découvrirez les engagements à la réception de la facture, donc trop tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: "Mettre à jour l'engagement à chaque facture ou paiement",
    intro: "Une même dépense ne doit jamais être comptée deux fois : une fois comme engagement ouvert ET une fois comme dépense réalisée. Dès qu'une facture est saisie dans la grille, le reste à payer de l'engagement doit baisser d'autant.",
    steps: [
      {
        title: 'Lors de la saisie d\'une facture liée à un engagement',
        actions: [
          "Saisissez la facture dans « Codification » (procédure 2) en reprenant le n° d'engagement dans le libellé.",
          "Dans « Engagements », augmentez la colonne I « Réalisé à date » du montant de la facture.",
          "Vérifiez que J « Reste à payer » a diminué du même montant.",
        ],
      },
      {
        title: 'Solder ou annuler',
        actions: [
          "Quand J atteint 0, passez le statut en « Soldé ».",
          "Si un contrat est résilié ou un BC annulé, passez le statut en « Annulé » et mettez I = H pour ramener le reste à 0, en notant la raison dans G.",
        ],
      },
    ],
    example: {
      title: 'Facture d\'acompte du contrat latrines lot 2 (avril 2026)',
      lines: [
        "Codification : 2026-04-10 | 601 | Acompte 40 % latrines lot 2 – ENG-WSH-014 – Kivu Bâtir | WASH | Agence Delta | Intrants & matériel | 14000 | Engagement | Confirmé | FKB-031",
        "Engagements, ligne ENG-WSH-014 : I passe de 0 à 14 000 → J passe de 35 000 à 21 000 → statut reste « Ouvert »",
      ],
    },
    result: "À tout moment, Réalisé (grille) + Reste à payer (registre) = Montant total engagé, pour chaque contrat.",
    pitfall: "Oublier de mettre à jour le registre après la saisie de la facture : le disponible réel est alors sous-estimé du montant de la facture (comptée deux fois), et vous bloquez des activités pour rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: "Calculer le disponible réel d'une ligne budgétaire",
    intro: "Chaque semaine, pour chaque ligne budgétaire sensible, calculez le disponible réel avec la formule d'engagement. Fil rouge : la ligne « B. Construction & réhabilitation » d'Agence Delta au 31/03/2026.",
    steps: [
      {
        title: 'Construire le tableau de disponible',
        actions: [
          "Ajoutez un onglet « Disponible » avec les colonnes : Projet, Bailleur, Rubrique, Budget, Réalisé, Engagements ouverts, Disponible réel, Taux d'engagement.",
          "Réalisé : =SOMME.SI.ENS(Codification!$G:$G;Codification!$D:$D;A2;Codification!$F:$F;C2).",
          "Engagements ouverts : =SOMME.SI.ENS(Engagements!$J:$J;Engagements!$C:$C;A2;Engagements!$E:$E;C2;Engagements!$K:$K;\"Ouvert\").",
          "Disponible réel : =D2-E2-F2 ; Taux d'engagement : =(E2+F2)/D2 au format %.",
        ],
      },
      {
        title: 'Lire le résultat',
        actions: [
          "Mettez en forme conditionnelle : rouge si le disponible est négatif, orange si le taux d'engagement dépasse 90 %.",
          "Comparez avec le rythme prévu : à 25 % de la durée du projet, un taux de 110 % est une alerte majeure.",
        ],
      },
    ],
    example: {
      title: 'WASH / Agence Delta — Intrants & matériel (ligne B) au 31/03/2026',
      lines: [
        "Budget (D2) .............................. 150 000",
        "Réalisé (E2) ............................. 110 000",
        "Engagements ouverts (F2) ................. 55 000 (35 000 + 20 000)",
        "Disponible réel (G2) = 150 000 − 110 000 − 55 000 = − 15 000 USD",
        "Taux d'engagement (H2) = 165 000 / 150 000 = 110 % → ROUGE",
      ],
    },
    result: "Un tableau qui affiche, pour chaque ligne budgétaire, le disponible réel en engagement, avec les dépassements en rouge.",
    tip: "Les formules utilisent le séparateur « ; » de la version française d'Excel. En version anglaise : SUMIFS avec des virgules, ex. =SUMIFS(Codification!$G:$G,Codification!$D:$D,A2,Codification!$F:$F,C2).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Rapprocher le budget de la trésorerie',
    intro: "L'engagement dit où en est le budget ; la caisse dit si l'argent suit. Une fois par mois au moins, vérifiez que la trésorerie disponible couvre les engagements qui arrivent à échéance dans les 30 jours.",
    steps: [
      {
        title: 'Relever la trésorerie',
        actions: [
          "Relevez le solde bancaire du dernier relevé et le solde de caisse du dernier comptage signé.",
          "Ajoutez les entrées certaines des 30 prochains jours (tranche bailleur confirmée par écrit).",
        ],
      },
      {
        title: 'Relever les sorties à 30 jours',
        actions: [
          "Filtrez le registre des engagements sur « Ouvert » et listez les échéances des 30 prochains jours (acomptes, salaires, loyer).",
          "Calculez : trésorerie disponible + entrées certaines − sorties à 30 jours.",
        ],
      },
    ],
    example: {
      title: 'Bureau de Goma — projection au 31/03/2026 pour avril',
      lines: [
        "Banque 96 500 + caisse 2 300 = trésorerie 98 800 USD",
        "Sorties à 30 jours : acompte latrines 14 000 + salaires mars courus 14 200 + loyer avril 3 000 + autres coûts communs 3 900 = 35 100 USD",
        "Solde projeté fin avril = 98 800 − 35 100 = 63 700 USD → trésorerie suffisante",
      ],
    },
    result: "Une projection simple à 30 jours, qui confirme (ou non) que les engagements pourront être payés à temps.",
    pitfall: "Conclure qu'un budget va bien parce que la banque est pleine. Une banque pleine peut cacher une ligne budgétaire déjà dépassée en engagement — c'est exactement le cas de la ligne B d'Agence Delta. La gestion de trésorerie détaillée est traitée au module 03.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Alerter le chef de projet par écrit',
    intro: "Un dépassement en engagement découvert par la finance et non communiqué devient un dépassement réel. L'alerte doit être écrite, chiffrée et proposer des options.",
    steps: [
      {
        title: 'Rédiger l\'alerte',
        actions: [
          "Destinataire : le coordinateur du projet ; copie : Finance Manager.",
          "Donnez les 4 chiffres : budget, réalisé, engagements ouverts, disponible réel.",
          "Nommez les engagements en cause (n° de contrat).",
          "Proposez des options : réduire un engagement, demander un virement entre lignes, chercher un cofinancement éligible.",
          "Demandez une décision avant une date précise.",
        ],
      },
    ],
    example: {
      title: 'E-mail envoyé le 01/04/2026',
      lines: [
        "Objet : ALERTE – WASH / Agence Delta – ligne B dépassée de 15 000 USD en engagement",
        "Joël, au 31/03 la ligne B (budget 150 000 USD) affiche 110 000 USD réalisés et 55 000 USD d'engagements ouverts (C-2026-007 latrines lot 2 : 35 000 ; C-2026-011 forages : 20 000), soit un disponible réel de −15 000 USD.",
        "Options : 1) ramener le contrat forages à 3 forages (−5 000) ; 2) demander à Agence Delta un virement depuis une ligne sous-consommée ; 3) étudier un cofinancement fonds propres.",
        "Merci de me faire part de ta décision d'ici le 08/04, avant la saisie de l'acompte latrines. Grace en copie.",
      ],
    },
    result: "Une alerte écrite, chiffrée, envoyée avant le paiement, avec une date de décision et le Finance Manager en copie.",
    tip: "Les virements entre lignes budgétaires et les avenants obéissent à des règles propres à chaque bailleur (seuils de flexibilité, accord préalable) : vous les pratiquerez au module 02.",
  },

  // ─────────────── PROCÉDURE 4 — Allouer un coût commun ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Inventorier les coûts communs du bureau',
    intro: "On ne peut pas allouer correctement ce qu'on n'a pas identifié. Commencez par la liste exhaustive des coûts partagés du bureau, avec leur montant mensuel et leur pièce de référence.",
    steps: [
      {
        title: 'Dresser la liste',
        actions: [
          "Parcourez les 3 derniers mois de dépenses et repérez tout ce qui sert plusieurs projets : loyer, eau-électricité, internet, gardiennage, véhicule partagé, générateur, personnel de support, réunions inter-projets.",
          "Pour chacun, notez : fournisseur, montant mensuel moyen, pièce de référence (bail, contrat, factures).",
          "Vérifiez dans chaque convention bailleur si les coûts communs sont éligibles et sur quelle ligne (onglet « Correspondance »).",
        ],
      },
    ],
    table: {
      columns: ['Coût commun', 'Montant mensuel', 'Pièce de référence', 'Base envisagée'],
      rows: [
        ['Loyer bureau Goma', '3 000 USD', 'Bail du 01/12/2025', 'ETP'],
        ['Internet', '850 USD', 'Contrat fournisseur d\'accès', 'ETP'],
        ['Gardiennage', '1 800 USD', 'Contrat société de gardiennage', 'm² occupés'],
        ['Véhicule partagé LC-03', '≈ 1 250 USD', 'Factures + carnet de bord', 'Nombre de trajets'],
        ['Réunions inter-projets', 'Variable', 'Pièces de caisse', 'ETP'],
      ],
    },
    result: "Une liste complète des coûts communs avec montant, pièce de référence et base de répartition pressentie.",
    pitfall: "Oublier le personnel de support (Finance Officer, logisticien, chauffeur, gardien). Leurs salaires sont eux aussi des coûts communs à allouer — et ces personnes ne doivent pas être comptées dans la base ETP des projets.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Choisir la base de répartition la plus fidèle à l\'usage réel',
    intro: "La clé doit refléter l'usage réel, jamais la simplicité de calcul. Diviser par le nombre de projets (« 3 projets, donc 33 % chacun ») est la faute la plus fréquente et presque toujours indéfendable.",
    steps: [
      {
        title: 'Appliquer les 4 critères d\'une base défendable',
        actions: [
          "Mesurable : un chiffre objectif (personnes, m², trajets, heures), pas une impression.",
          "Documentée : la source du chiffre existe et peut être montrée (liste du personnel, plan des locaux, carnet de bord).",
          "Liée à l'usage : plus un projet consomme le service, plus sa part est grande.",
          "Cohérente avec la convention : si le bailleur a accepté une méthode dans la proposition, vous l'appliquez ou vous l'informez du changement.",
        ],
      },
    ],
    table: {
      columns: ['Base', 'Convient pour', 'Source de la donnée'],
      rows: [
        ['ETP par projet', 'Loyer, internet, fournitures, réunions', 'Liste du personnel + feuilles de temps'],
        ['m² occupés', 'Loyer quand les équipes ont des espaces distincts, gardiennage, nettoyage', 'Plan des locaux mesuré'],
        ['Nombre de trajets ou km', 'Véhicule partagé, chauffeur', 'Carnet de bord signé'],
        ['Heures ou % de temps', 'Personnel partagé entre projets', 'Feuilles de temps signées'],
      ],
    },
    result: "Pour chaque coût commun, une base choisie et justifiée en une phrase (ex. « Loyer : ETP, car tout le personnel travaille en espace ouvert partagé »).",
    tip: "Une base pour tout le bureau est plus simple, mais une base par type de coût est plus juste. Le bon compromis : ETP par défaut, et une base spécifique uniquement là où l'usage est manifestement différent (véhicule, gardiennage).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Collecter et vérifier les données de la base',
    intro: "La clé ne vaut que ce que valent les données. Fil rouge : vous calculez les ETP par projet au 31 janvier 2026 à partir de la liste du personnel et des feuilles de temps.",
    steps: [
      {
        title: 'Calculer les ETP par projet',
        actions: [
          "Partez de la liste du personnel du bureau de Goma à la date de clôture du mois.",
          "Excluez le personnel de support (finance, logistique, chauffeur, gardien).",
          "Pour chaque personne, répartissez son temps selon sa feuille de temps signée : 100 % sur un projet = 1 ETP ; 60 % / 40 % = 0,6 + 0,4.",
          "Additionnez par projet.",
        ],
      },
      {
        title: 'Archiver la source',
        actions: [
          "Enregistrez la liste du personnel utilisée en PDF, datée et signée par le Finance Manager.",
          "Elle sera jointe à la note d'allocation (procédure 6).",
        ],
      },
    ],
    example: {
      title: 'Calcul des ETP projets au 31/01/2026',
      lines: [
        "Nutrition : 4 personnes à 100 % = 4,0 + superviseure nutrition 100 % = 1,0 → 5,0 ETP",
        "WASH : 2 techniciens à 100 % = 2,0 + superviseur partagé 60 % = 0,6 + animatrice 40 % = 0,4 → 3,0 ETP",
        "Santé : 1 infirmier à 100 % = 1,0 + superviseur partagé 40 % = 0,4 + animatrice 60 % = 0,6 → 2,0 ETP",
        "Total base = 10,0 ETP (personnel de support exclu)",
      ],
    },
    result: "Un nombre d'ETP par projet, issu d'une source datée et signée, que vous pouvez montrer à un auditeur.",
    pitfall: "Compter les postes prévus au budget au lieu des personnes réellement présentes. Un poste vacant pendant 3 mois ne consomme pas d'espace : la base doit être réelle, pas budgétaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: "Remplir le calculateur de l'onglet « Allocation coûts communs »",
    intro: "Le template contient un calculateur déjà formulé. Vous ne saisissez que les cellules d'entrée ; les colonnes D (% du total) et E (Part allouée) se calculent seules. Ne touchez pas aux formules.",
    steps: [
      {
        title: 'Saisir les données d\'entrée',
        actions: [
          "B4 — Description du coût commun : « Loyer bureau pays de Goma – mensuel 2026 (clé ETP au 31/01/2026) ».",
          "B5 — Montant total du coût commun (USD) : 3000.",
          "B6 — Base de répartition retenue : « ETP (Équivalent Temps Plein) par projet dans ce bureau ».",
          "A9:A11 — Projets ; B9:B11 — Bailleurs (Fonds Horizon, Agence Delta, Fondation Sigma).",
          "C9:C11 — Base de répartition : 5, 3, 2.",
        ],
      },
      {
        title: 'Lire les résultats calculés',
        actions: [
          "D9:D11 utilisent =C9/SOMME(C9:C11) : mettez la colonne D au format Pourcentage.",
          "E9:E11 utilisent =D9*$B$5 : mettez la colonne E au format Nombre à 2 décimales.",
          "Ligne 12 (TOTAL) : C12 = 10, D12 = 100 %, E12 = 3 000.",
        ],
      },
    ],
    table: {
      columns: ['Projet', 'Bailleur', 'Base (ETP)', '% du total', 'Part allouée (USD)'],
      rows: [
        ['Projet Nutrition Nord-Kivu', 'Fonds Horizon', '5', '50 %', '1 500,00'],
        ['Projet WASH Nord-Kivu', 'Agence Delta', '3', '30 %', '900,00'],
        ['Projet Santé Nord-Kivu', 'Fondation Sigma', '2', '20 %', '600,00'],
        ['TOTAL', '', '10', '100 %', '3 000,00'],
      ],
    },
    result: "Le calculateur affiche 1 500 / 900 / 600 USD et un total de 3 000 USD à 100 % — contre 1 000 / 1 000 / 1 000 avec l'ancienne clé « parts égales ».",
    tip: "Pour chaque nouveau coût commun ou chaque nouveau mois, faites une copie de l'onglet (clic droit > Déplacer ou copier > Créer une copie) et renommez-la « Alloc_Loyer_2026-01 » : vous gardez l'historique de chaque calcul.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Vérifier le total à 100 % et gérer les arrondis',
    intro: "Avec des bases non rondes, les parts ont des décimales infinies. Le total des montants arrondis doit pourtant être égal, au centime près, à la facture. Fil rouge : le véhicule partagé LC-03 a coûté 1 250 USD en janvier ; le carnet de bord compte 23 trajets Nutrition, 14 WASH, 9 Santé.",
    steps: [
      {
        title: 'Calculer et arrondir',
        actions: [
          "Remplissez une copie du calculateur : B5 = 1250, C9:C11 = 23, 14, 9.",
          "Pour les montants à imputer, utilisez =ARRONDI(D9*$B$5;2) (en anglais : =ROUND(D9*$B$5,2)).",
          "Comparez la somme des montants arrondis au montant de la facture.",
        ],
      },
      {
        title: 'Absorber l\'écart d\'arrondi',
        actions: [
          "S'il existe un écart de 0,01 ou 0,02, imputez-le sur la plus grande part : sa formule devient =B5-SOMME(des autres parts arrondies).",
          "Vérifiez que D12 affiche exactement 100 % et E12 exactement le montant de la facture.",
        ],
      },
    ],
    example: {
      title: 'Véhicule LC-03 — janvier 2026 — base 46 trajets',
      lines: [
        "Nutrition : 23/46 = 50,0000 % × 1 250 = 625,00 USD",
        "WASH : 14/46 = 30,4348 % × 1 250 = 380,4348 → 380,43 USD",
        "Santé : 9/46 = 19,5652 % × 1 250 = 244,5652 → 244,57 USD",
        "Contrôle : 625,00 + 380,43 + 244,57 = 1 250,00 USD ✔ — 100 % ✔",
      ],
    },
    result: "La somme des parts arrondies est égale à la facture au centime près, et la somme des pourcentages est exactement 100 %.",
    pitfall: "Un total à 99,99 % ou à 100,01 % « parce que c'est l'arrondi ». En audit, un centime d'écart non expliqué sur une allocation fait douter de toute la clé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: "Passer les écritures d'allocation dans la grille de codification",
    intro: "Le calcul ne suffit pas : chaque part doit devenir une ligne de la grille, sur le bon projet, le bon bailleur et la bonne rubrique, avec la même pièce de référence.",
    steps: [
      {
        title: 'Saisir une ligne par projet',
        actions: [
          "Saisissez une ligne par part calculée, toutes avec la même date, le même compte et le même n° de pièce.",
          "Libellé : nature + mois + quote-part + clé + référence de la note d'allocation.",
          "Montant : la part arrondie de l'étape 5.",
        ],
      },
      {
        title: 'Contrôler',
        actions: [
          "Filtrez la colonne J sur le n° de pièce : la somme des lignes doit égaler la facture.",
          "Vérifiez que chaque rubrique est celle de l'onglet « Correspondance » pour ce bailleur (FHO 4.1, ADL D, FSG S4).",
        ],
      },
    ],
    example: {
      title: "Écritures d'allocation — loyer d'avril 2026, premier mois saisi directement avec la clé ETP (pièce BAIL-2026-04)",
      lines: [
        "2026-04-08 | 611 | Loyer Goma avr. 2026 – QP 50 % clé ETP – NA-2026-01 | Nutrition | Fonds Horizon | Loyer & charges locatives | 1500 | Engagement | Confirmé | BAIL-2026-04",
        "2026-04-08 | 611 | Loyer Goma avr. 2026 – QP 30 % clé ETP – NA-2026-01 | WASH | Agence Delta | Loyer & charges locatives | 900 | Engagement | Confirmé | BAIL-2026-04",
        "2026-04-08 | 611 | Loyer Goma avr. 2026 – QP 20 % clé ETP – NA-2026-01 | Santé | Fondation Sigma | Loyer & charges locatives | 600 | Engagement | Confirmé | BAIL-2026-04",
      ],
    },
    result: "Trois lignes dont la somme (3 000 USD) égale la facture, chacune référencée à la pièce et à la note d'allocation. Les mois de janvier à mars, saisis « à parts égales » par votre prédécesseur, sont régularisés dans le cas complet en fin de module.",
    tip: "Désignez une seule personne (le Finance Officer) pour passer les écritures d'allocation : si la caissière code aussi le loyer « en entier » sur un projet, vous créez un double financement (procédure 5).",
  },

  // ─────────────── PROCÉDURE 5 — Détecter le double financement ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Repérer les dépenses à risque de double financement',
    intro: "Le double financement se cache presque toujours dans les mêmes zones. Commencez chaque contrôle mensuel par ces zones, avant de regarder le reste.",
    steps: [
      {
        title: 'Lister les zones à risque du mois',
        actions: [
          "Tous les coûts communs alloués (loyer, internet, gardiennage, véhicule, réunions).",
          "Les salaires du personnel partagé entre projets.",
          "Les factures payées en plusieurs fois (acomptes, soldes) et les factures de plus de 5 000 USD.",
          "Les dépenses qu'un bailleur finance « en partie » selon sa convention (ex. « 58 % du loyer » écrit dans une ancienne proposition).",
        ],
      },
      {
        title: 'Rassembler les taux promis à chaque bailleur',
        actions: [
          "Relisez, pour chaque coût commun, le pourcentage ou le montant prévu dans chaque budget signé.",
          "Additionnez ces pourcentages par coût : si la somme des taux BUDGÉTÉS dépasse 100 %, le risque existe avant même la première saisie.",
        ],
      },
    ],
    example: {
      title: 'Constat sur le loyer — taux figurant dans les budgets signés',
      lines: [
        "Fonds Horizon, ligne 4.1 : « 58 % du loyer du bureau » (repris d'une proposition de 2025, quand Nutrition était seul)",
        "Agence Delta, ligne D : « 30 % des coûts de bureau »",
        "Fondation Sigma, ligne S4 : « 20 % des frais de structure »",
        "Somme des taux budgétés = 108 % → risque structurel de double financement",
      ],
    },
    result: "Une liste des dépenses du mois à contrôler en priorité, et la somme des taux budgétés pour chaque coût commun.",
    pitfall: "Faire confiance aux taux écrits dans des budgets préparés à des dates différentes, par des personnes différentes, pour des bailleurs différents : personne ne les a jamais additionnés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Construire le tableau de contrôle par pièce justificative',
    intro: "Le principe : pour chaque pièce, le total imputé à tous les bailleurs doit égaler le montant de la pièce. Un tableau croisé dynamique (TCD) le montre en quelques clics.",
    steps: [
      {
        title: 'Créer le tableau croisé dynamique',
        actions: [
          "Cliquez dans la grille « Codification » (A4:J2000), puis Insertion > Tableau croisé dynamique > Nouvelle feuille.",
          "Glissez « N° pièce » en Lignes, « Bailleur » en Colonnes, « Montant (USD) » en Valeurs (Somme).",
          "Filtrez sur le mois contrôlé via le champ « Date ».",
        ],
      },
      {
        title: 'Ajouter le montant réel de chaque pièce',
        actions: [
          "À droite du TCD, ajoutez une colonne « Montant facture » saisie depuis les pièces originales.",
          "Ajoutez une colonne « Écart » = Total général − Montant facture, et une colonne « % imputé » = Total général / Montant facture.",
        ],
      },
    ],
    table: {
      columns: ['N° pièce (T1 2026)', 'Fonds Horizon', 'Agence Delta', 'Fondation Sigma', 'Total imputé', 'Montant facture', 'Écart'],
      rows: [
        ['BAIL-2026-02 (loyer février)', '1 000', '1 000', '1 000', '3 000', '3 000', '0 (100 %)'],
        ['INT-0226 (internet février)', '1 275', '255', '170', '1 700', '850', '+850 (200 %)'],
        ['PC-0112 (carburant)', '', '', '240', '240', '240', '0 (100 %)'],
      ],
    },
    result: "Un tableau d'une ligne par pièce, où toute pièce imputée à plus de 100 % (ou à moins de 100 %) saute aux yeux dans la colonne « Écart ». Ici : INT-0226 est imputée deux fois.",
    tip: "Le TCD détecte les excès de montant, pas les erreurs d'axe : le loyer à parts égales (100 % en montant mais clé indéfendable) et le carburant PC-0112 (100 % mais sur le mauvais bailleur) passent ce contrôle. D'où l'importance du contrôle hebdomadaire (procédure 2) et de la note d'allocation (procédure 6).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Contrôler la somme des pourcentages de chaque coût commun',
    intro: "Le TCD détecte les excès sur les pièces déjà saisies ; ce contrôle vérifie la clé elle-même, avant qu'elle ne produise des excès tous les mois.",
    steps: [
      {
        title: 'Vérifier chaque clé',
        actions: [
          "Pour chaque coût commun, ouvrez son calculateur et lisez la cellule D12 : elle doit afficher 100 %.",
          "Comparez les parts du calculateur aux montants réellement saisis dans la grille (TCD de l'étape 2).",
          "Toute différence entre la part calculée et la part saisie est une anomalie à expliquer.",
        ],
      },
      {
        title: 'Qualifier l\'anomalie trouvée',
        actions: [
          "Excès (> 100 %) : double financement à corriger avant tout rapport.",
          "Insuffisance (< 100 %) : part non couverte, à imputer sur un bailleur éligible ou sur fonds propres.",
        ],
      },
    ],
    example: {
      title: 'Loyer : diagnostic des clés en présence',
      lines: [
        "Clé appliquée de janvier à mars (parts égales) : 33,33 % × 3 = 100 % → pas de double financement, mais clé indéfendable (procédure 4)",
        "Taux écrits dans les budgets signés : 58 % + 30 % + 20 % = 108 % → si la caisse les applique, 240 USD/mois financés deux fois",
        "Clé retenue à partir de la note NA-2026-01 (ETP) : 50 % + 30 % + 20 % = 100 % → 1 500 / 900 / 600 USD",
        "Décision : seule la clé ETP est appliquée ; le taux de 58 % du budget Fonds Horizon n'est jamais utilisé pour imputer",
      ],
    },
    result: "Pour chaque coût commun, une clé à 100 % et des montants saisis identiques à la clé — ou une anomalie chiffrée et expliquée.",
    pitfall: "Corriger l'excès en baissant la part d'un AUTRE bailleur pour « retomber à 3 000 ». L'excès doit être retiré là où il a été créé, sinon vous déplacez l'erreur au lieu de la corriger.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Détecter les pièces saisies deux fois',
    intro: "Deuxième source de double financement : la même facture saisie deux fois, souvent par deux personnes différentes ou sous deux libellés différents. La colonne « N° pièce » permet de la détecter par formule.",
    steps: [
      {
        title: 'Ajouter les colonnes de contrôle',
        actions: [
          "En K4, saisissez l'en-tête « Total imputé pièce » et en K5 : =SOMME.SI($J$5:$J$2000;J5;$G$5:$G$2000) (anglais : =SUMIF($J$5:$J$2000,J5,$G$5:$G$2000)).",
          "En L4, « Nb lignes pièce » et en L5 : =NB.SI($J$5:$J$2000;J5) (anglais : =COUNTIF($J$5:$J$2000,J5)).",
          "Recopiez K5:L5 jusqu'en bas de la grille.",
        ],
      },
      {
        title: 'Lire les résultats',
        actions: [
          "Une pièce peut légitimement avoir plusieurs lignes (allocation) : le nombre de lignes n'est pas une erreur en soi.",
          "L'alerte est le TOTAL : si K dépasse le montant de la pièce, il y a double imputation.",
          "Cherchez aussi les mêmes montants à la même date chez le même fournisseur sous des n° de pièce différents (ex. « INT-0326 » et « INT 0326 »).",
        ],
      },
    ],
    example: {
      title: 'Internet de février 2026 — facture INT-0226 de 850 USD',
      lines: [
        "Ligne 1 (caissière) : Nutrition / Fonds Horizon – 850 – INT-0226",
        "Lignes 2-4 (Finance Officer, allocation ETP) : 425 / 255 / 170 – INT-0226",
        "K = 850 + 425 + 255 + 170 = 1 700 USD pour une facture de 850 → 200 % imputé ; L = 4 lignes",
        "Correction : extourner la ligne 1, celle qui n'applique pas la clé documentée (procédure 7)",
      ],
    },
    result: "Aucune pièce dont le total imputé dépasse son montant ; les doublons trouvés sont listés pour correction.",
    tip: "Ajoutez une mise en forme conditionnelle sur la colonne K qui colore en rouge toute cellule où K est supérieur au montant de la facture (à saisir dans une colonne M « Montant facture » pour les pièces partagées).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Corriger, documenter et verrouiller',
    intro: "Une fois le double financement trouvé, il doit être corrigé AVANT l'envoi de tout rapport financier, puis empêché pour l'avenir.",
    steps: [
      {
        title: 'Corriger',
        actions: [
          "Passez l'extourne de la part en excès (procédure 7) sur le projet et le bailleur où l'excès a été créé.",
          "Relancez le TCD : l'écart de la pièce doit revenir à 0.",
        ],
      },
      {
        title: 'Verrouiller',
        actions: [
          "Rédigez ou mettez à jour la note d'allocation du coût concerné (procédure 6).",
          "Si un budget signé contient un taux incohérent (58 % chez Fonds Horizon), informez le Finance Manager pour qu'il soit aligné lors du prochain avenant ou par courrier au bailleur.",
          "Rappelez par écrit à la caisse : les coûts communs ne se codent pas en caisse, ils sont transmis à la finance.",
        ],
      },
    ],
    example: {
      title: 'Synthèse du contrôle anti-double financement — T1 2026',
      lines: [
        "INT-0226 : doublon 850 USD sur Nutrition / Fonds Horizon → extourne −850, REG-2026-003",
        "INT-0326 : même schéma détecté en mars → à corriger (c'est l'exercice 3, REG-2026-004)",
        "Taux de 58 % du budget Fonds Horizon (somme budgétée 108 %) signalé au Finance Manager le 02/04/2026",
        "Après correction : toutes les pièces du trimestre à 100 % ✔",
      ],
    },
    result: "Toutes les pièces du trimestre sont imputées à exactement 100 %, les corrections sont référencées et la cause racine est traitée.",
    pitfall: "Corriger discrètement sans prévenir le Finance Manager parce que « ce n'était pas intentionnel ». Un double financement, même involontaire et corrigé, doit être connu de la direction financière.",
  },

  // ─────────────── PROCÉDURE 6 — Rédiger la note d'allocation ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: "Remplir la section 1 « Coût concerné » de la note",
    intro: "La note d'allocation est ce que vous présenterez à l'auditeur qui demande « pourquoi ce projet a-t-il été facturé 50 % de ce loyer et pas 33 % ? ». Elle tient sur une page. Ouvrez note-allocation-couts-communs.docx et enregistrez-la sous NA-2026-01_Loyer_Goma.docx.",
    steps: [
      {
        title: 'Compléter le cadre de la section 1',
        actions: [
          "Case « Nature de la dépense » : décrivez le coût de façon identifiable (adresse, objet du contrat).",
          "Case « Montant total et devise » : montant mensuel ET montant sur la période couverte.",
          "Ligne « Période concernée » : date de début et de fin d'application de la clé.",
          "Ajoutez en en-tête un numéro de note unique (NA-2026-01) : il sera cité dans les libellés de la grille.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie',
      lines: [
        "N° de note : NA-2026-01",
        "Nature de la dépense : Loyer du bureau pays de Goma (bâtiment de bureaux partagé par les projets NUT, WSH, SAN), bail du 01/12/2025",
        "Montant total et devise : 3 000 USD par mois, soit 9 000 USD pour le 1er trimestre 2026",
        "Période concernée : du 01/01/2026 jusqu'à révision (révision trimestrielle ou si les ETP varient de plus de 10 %)",
      ],
    },
    result: "Un lecteur extérieur sait, en lisant la section 1, de quel coût il s'agit, pour quel montant et sur quelle période.",
    pitfall: "Une note sans période d'application. Si les effectifs changent, l'auditeur ne pourra pas savoir à partir de quand la clé n'était plus valable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: "Remplir la section 2 « Méthode d'allocation choisie »",
    intro: "C'est le cœur de la note : la méthode et SA justification. Une justification acceptable explique pourquoi cette base reflète l'usage réel mieux que les autres.",
    steps: [
      {
        title: 'Décrire la méthode',
        actions: [
          "Champ « Méthode retenue » : nommez la base (ETP par projet) et la source de la donnée (liste du personnel signée).",
          "Précisez ce qui est exclu de la base (personnel de support).",
        ],
      },
      {
        title: 'Justifier le choix',
        actions: [
          "Champ « Justification » : expliquez le lien entre la base et l'usage réel du coût.",
          "Expliquez pourquoi vous écartez les autres bases (m², parts égales).",
          "Si la note remplace une ancienne clé, chiffrez l'effet du changement.",
        ],
      },
    ],
    example: {
      title: 'Section 2 remplie',
      body: "Méthode retenue : répartition au prorata des Équivalents Temps Plein (ETP) de chaque projet présents dans le bureau, d'après la liste du personnel signée au 31/01/2026 et les feuilles de temps. Le personnel de support (finance, logistique, chauffeur, gardien) est exclu de la base.\n\nJustification : les trois équipes travaillent dans un espace ouvert commun sans bureaux attribués par projet ; l'occupation des locaux est donc proportionnelle au nombre de personnes présentes. La surface (m²) n'est pas mesurable par projet. L'ancienne clé « parts égales » (33,3 % chacun) ne reflétait pas l'usage : elle surfacturait Fondation Sigma de 400 USD/mois et Agence Delta de 100 USD/mois, et sous-facturait Fonds Horizon de 500 USD/mois.",
    },
    result: "Une méthode nommée, sourcée, justifiée par l'usage réel, et dont l'effet par rapport à l'ancienne clé est chiffré.",
    pitfall: "« Parce que c'est ce qu'on a toujours fait » ou « parce que c'est plus simple » : aucune de ces deux réponses n'est acceptable pour un auditeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Remplir la section 3 « Calcul de la répartition »',
    intro: "La section 3 doit permettre à n'importe qui de refaire le calcul à la main. Reprenez exactement les chiffres du calculateur (procédure 4).",
    steps: [
      {
        title: 'Compléter le cadre de calcul',
        actions: [
          "Case « Base de calcul utilisée » : les chiffres réels par projet et leur total (pas des estimations).",
          "Case « Résultat du calcul par projet/bailleur » : pourcentage et montant mensuel, puis montant sur la période.",
          "Ajoutez la ligne de contrôle : total des pourcentages = 100 %, total des montants = montant de la facture.",
        ],
      },
    ],
    example: {
      title: 'Section 3 remplie',
      lines: [
        "Base de calcul : NUT 5 ETP + WSH 3 ETP + SAN 2 ETP = 10 ETP (liste du personnel au 31/01/2026)",
        "NUT / Fonds Horizon : 5/10 = 50 % × 3 000 = 1 500 USD/mois → 4 500 USD sur T1",
        "WSH / Agence Delta : 3/10 = 30 % × 3 000 = 900 USD/mois → 2 700 USD sur T1",
        "SAN / Fondation Sigma : 2/10 = 20 % × 3 000 = 600 USD/mois → 1 800 USD sur T1",
        "Contrôle : 50 + 30 + 20 = 100 % ; 1 500 + 900 + 600 = 3 000 USD ; T1 = 9 000 USD ✔",
      ],
    },
    result: "Un calcul refaisable à la main, dont la ligne de contrôle prouve qu'il n'y a ni double financement ni coût non couvert.",
    tip: "Joignez en annexe une capture du calculateur Excel rempli : l'auditeur voit en un coup d'œil que la note et le tableur disent la même chose.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Remplir la section 4 « Projets et bailleurs facturés »',
    intro: "La section 4 fait le lien entre le calcul et les budgets : pour chaque bailleur, le montant ET la ligne budgétaire exacte sur laquelle il est imputé.",
    steps: [
      {
        title: 'Compléter les cases bailleurs',
        actions: [
          "Case « Projet / bailleur 1 — montant alloué » : projet, bailleur, ligne budgétaire (code + intitulé), montant mensuel.",
          "Même chose pour les bailleurs 2 et 3 (la ligne « bailleur 3 » du template est prévue pour ce cas).",
          "Vérifiez dans l'onglet « Disponible » que chaque ligne budgétaire peut absorber le nouveau montant sur toute la durée du projet.",
        ],
      },
    ],
    example: {
      title: 'Section 4 remplie',
      lines: [
        "Bailleur 1 : Projet Nutrition / Fonds Horizon – ligne 4.1 Quote-part bureau – 1 500 USD/mois",
        "Bailleur 2 : Projet WASH / Agence Delta – ligne D Coûts de bureau partagés – 900 USD/mois",
        "Bailleur 3 : Projet Santé / Fondation Sigma – ligne S4 Frais de structure – 600 USD/mois",
        "Contrôle de capacité : FHO 4.1 = 18 000 USD/an = 1 500 × 12 ✔ ; ADL D et FSG S4 : marge suffisante ✔",
      ],
    },
    result: "Chaque montant alloué est rattaché à une ligne budgétaire précise, dont la capacité sur 12 mois a été vérifiée.",
    pitfall: "Changer de clé sans vérifier le budget : si la ligne 4.1 de Fonds Horizon avait été budgétée à 1 000 USD/mois (12 000 USD), la nouvelle clé l'épuiserait dès le 8e mois. Ce cas se traite par un virement de ligne ou un avenant (module 02).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Remplir la section 5 « Validation », signer et classer',
    intro: "Une note non signée n'est qu'un brouillon. La validation par le Finance Manager (ou la coordination) engage l'organisation sur la méthode.",
    steps: [
      {
        title: 'Faire valider',
        actions: [
          "Case « Préparé par » : votre nom et votre fonction.",
          "Case « Validé par » : le Finance Manager ou le coordinateur pays.",
          "Case « Date » : date de la validation.",
          "Listez les pièces jointes sous le tableau : liste du personnel signée, bail, capture du calculateur.",
        ],
      },
      {
        title: 'Classer et diffuser',
        actions: [
          "Exportez la note signée en PDF : NA-2026-01_Loyer_Goma_signée.pdf.",
          "Classez-la dans le dossier « Notes d'allocation » ET dans le dossier d'audit de chacun des trois projets.",
          "Citez « NA-2026-01 » dans le libellé de chaque écriture d'allocation du loyer.",
          "Si la clé change par rapport à ce qui avait été présenté au bailleur, faites-le savoir à chaque bailleur concerné, avec la note en pièce jointe.",
        ],
      },
    ],
    example: {
      title: 'Section 5 remplie',
      lines: [
        "Préparé par : [votre nom], Finance Officer, bureau de Goma",
        "Validé par : Grace M., Finance Manager",
        "Date : 02/04/2026",
        "Pièces jointes : liste du personnel au 31/01/2026 signée ; bail du 01/12/2025 ; capture du calculateur Alloc_Loyer_2026-01",
      ],
    },
    result: "Une note d'une page, signée, numérotée, classée dans trois dossiers d'audit, et citée dans les écritures qu'elle justifie.",
    tip: "Tenez un registre des notes d'allocation (n°, coût, clé, période, date de validation) : le jour de l'audit, vous sortez la note de n'importe quel coût commun en moins d'une minute.",
  },

  // ─────────────── PROCÉDURE 7 — Corriger une erreur de codification ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: "Qualifier l'erreur et réunir les preuves",
    intro: "Avant de corriger, établissez ce qui est faux, ce qui est juste, et pourquoi — preuves à l'appui. Fil rouge : la facture de carburant PC-0112 de 240 USD du 12/01/2026, codée sur Projet Santé / Fondation Sigma, concerne le véhicule affecté au WASH.",
    steps: [
      {
        title: 'Retrouver la ligne d\'origine',
        actions: [
          "Filtrez la colonne J sur PC-0112 et notez le numéro de ligne Excel, la date et tous les axes codés.",
          "Vérifiez que cette pièce n'a pas déjà été corrigée (statut, journal des corrections).",
        ],
      },
      {
        title: 'Prouver la bonne imputation',
        actions: [
          "Rassemblez : la facture de la station, le bon de carburant signé par le chauffeur, l'extrait du carnet de bord du véhicule WASH à cette date.",
          "Identifiez l'axe faux : ici, projet ET bailleur (la rubrique interne « Transport & carburant » était juste).",
          "Identifiez la cause : deux factures remises le même jour et confondues.",
        ],
      },
    ],
    example: {
      title: 'Fiche de qualification de l\'erreur',
      lines: [
        "Ligne d'origine : 2026-01-12 | 604 | Carburant véhicule – PC-0112 | Santé | Fondation Sigma | Transport & carburant | 240 | Caisse | Confirmé | PC-0112",
        "Preuves : facture station n° 4471 ; bon carburant BC-carb-031 signé du chauffeur WASH ; carnet de bord du véhicule WASH, 12/01",
        "Axes faux : projet + bailleur — Imputation correcte : WASH / Agence Delta / Transport & carburant",
      ],
    },
    result: "Une erreur qualifiée par écrit (ligne, axes faux, imputation correcte, cause) et appuyée par au moins deux preuves indépendantes.",
    pitfall: "Corriger sur la seule parole de quelqu'un (« c'était pour le WASH »). Sans preuve documentaire, votre correction est elle-même une imputation non justifiée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: "Passer l'écriture d'extourne",
    intro: "On n'efface jamais une ligne : on l'annule par une ligne de même montant et de signe inverse. La ligne d'origine reste visible, avec ses axes faux, pour la traçabilité.",
    steps: [
      {
        title: 'Créer le numéro de régularisation',
        actions: [
          "Attribuez un numéro unique à la correction : REG-2026-001.",
        ],
      },
      {
        title: 'Saisir la ligne d\'extourne',
        actions: [
          "Date : une date de la période encore ouverte. Ici le 31/03/2026, car le 1er trimestre n'est pas encore clôturé.",
          "Compte, projet, bailleur, rubrique : IDENTIQUES à la ligne d'origine (Santé / Fondation Sigma).",
          "Montant : −240 (négatif).",
          "Libellé : « EXTOURNE ligne du 2026-01-12 PC-0112 – carburant véhicule WASH codé sur Santé – REG-2026-001 ».",
          "Statut : « Corrigé » ; N° pièce : PC-0112.",
        ],
      },
    ],
    example: {
      title: 'Ligne d\'extourne saisie',
      lines: [
        "2026-03-31 | 604 | EXTOURNE ligne du 2026-01-12 PC-0112 – carburant WASH codé sur Santé – REG-2026-001 | Santé | Fondation Sigma | Transport & carburant | -240 | Caisse | Corrigé | PC-0112",
      ],
    },
    result: "Le total Santé / Fondation Sigma / Transport & carburant a baissé de 240 USD, et la ligne d'origine est toujours visible dans la grille.",
    pitfall: "Dater la correction dans une période déjà clôturée et transmise au bailleur. Si la période est clôturée, datez l'écriture du jour et signalez la régularisation dans le rapport de la période suivante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: "Passer l'écriture de recodage",
    intro: "L'extourne a annulé l'erreur ; le recodage impute maintenant la dépense au bon endroit, avec la même pièce et la même référence de régularisation.",
    steps: [
      {
        title: 'Saisir la ligne de recodage',
        actions: [
          "Date : la même que l'extourne (2026-03-31).",
          "Compte : 604 (la nature n'a pas changé).",
          "Projet / bailleur / rubrique : WASH / Agence Delta / Transport & carburant.",
          "Montant : +240.",
          "Libellé : « RECODAGE carburant véhicule WASH PC-0112 (orig. 2026-01-12) – REG-2026-001 ».",
          "Statut : « Corrigé » ; N° pièce : PC-0112.",
        ],
      },
      {
        title: 'Mettre à jour la ligne d\'origine',
        actions: [
          "Sur la ligne d'origine, modifiez UNIQUEMENT le statut : « Confirmé » devient « À corriger » puis « Corrigé » une fois les deux écritures passées.",
          "Ne touchez ni à son montant, ni à ses axes, ni à son libellé.",
        ],
      },
    ],
    example: {
      title: 'Les trois lignes de la pièce PC-0112 après correction',
      lines: [
        "2026-01-12 | 604 | Carburant véhicule – PC-0112 | Santé | Fondation Sigma | Transport & carburant | 240 | Caisse | Corrigé | PC-0112",
        "2026-03-31 | 604 | EXTOURNE … REG-2026-001 | Santé | Fondation Sigma | Transport & carburant | -240 | Caisse | Corrigé | PC-0112",
        "2026-03-31 | 604 | RECODAGE … REG-2026-001 | WASH | Agence Delta | Transport & carburant | 240 | Caisse | Corrigé | PC-0112",
      ],
    },
    result: "Total imputé sur la pièce PC-0112 = 240 − 240 + 240 = 240 USD, désormais entièrement sur WASH / Agence Delta.",
    tip: "Les logiciels comptables (SAGA, LINK, ERP, voir module 07) proposent une fonction d'extourne automatique qui génère la ligne inverse et la lie à l'originale : la logique est exactement celle-ci.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: "Vérifier l'impact de la correction sur les budgets",
    intro: "Une correction déplace de la dépense d'un bailleur à un autre : vérifiez qu'elle ne crée pas un nouveau problème (dépassement sur la ligne qui reçoit la dépense).",
    steps: [
      {
        title: 'Contrôler les totaux',
        actions: [
          "Dans le TCD de contrôle (procédure 5), actualisez et vérifiez que PC-0112 est à 100 % (240 USD).",
          "Dans l'onglet « Disponible », vérifiez la ligne ADL « C. Véhicules & carburant » : elle doit absorber +240 USD sans dépasser.",
          "Vérifiez la ligne FSG « S3 Logistique & transport » : elle a récupéré 240 USD de disponible.",
        ],
      },
    ],
    example: {
      title: 'Effet de REG-2026-001 sur les lignes concernées',
      lines: [
        "ADL ligne C : réalisé 4 860 → 5 100 USD sur un budget de 21 600 → disponible 16 500 USD ✔",
        "FSG ligne S3 : réalisé 2 940 → 2 700 USD sur un budget de 12 000 → disponible 9 300 USD ✔",
        "Effet net tous bailleurs : 0 USD (la dépense n'a pas changé, seule son imputation a changé) ✔",
      ],
    },
    result: "La correction est neutre au total, la pièce est imputée à 100 % et aucune ligne budgétaire ne passe en dépassement.",
    pitfall: "Corriger une erreur qui a déjà été déclarée dans un rapport envoyé au bailleur sans le lui signaler : le rapport suivant ne se rapprochera plus du précédent et le bailleur le verra.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Inscrire la correction au journal des corrections',
    intro: "Le journal des corrections est la mémoire de toutes les régularisations du projet. C'est le premier document qu'un bon auditeur demande — et le meilleur signe de maîtrise que vous puissiez lui montrer.",
    steps: [
      {
        title: 'Tenir le journal',
        actions: [
          "Ajoutez un onglet « Journal corrections » avec les colonnes : N° REG, Date, Pièce, Ligne d'origine, Nature de l'erreur, Correction passée, Montant, Preuves, Préparé par, Validé par.",
          "Remplissez une ligne par régularisation, le jour même.",
          "Faites valider (paraphe) chaque correction par le Finance Manager.",
          "Classez les preuves avec la pièce d'origine, avec la mention « Voir REG-2026-001 ».",
        ],
      },
    ],
    example: {
      title: 'Journal des corrections — ligne REG-2026-001',
      lines: [
        "REG-2026-001 | 2026-03-31 | PC-0112 | 2026-01-12 Santé/FSG | Carburant WASH codé sur Santé (factures confondues) | Extourne Santé/FSG −240 + recodage WASH/ADL +240 | 240 USD | Fact. 4471, BC-carb-031, carnet de bord | Finance Officer | Grace M., 02/04/2026",
      ],
    },
    result: "Chaque correction du trimestre figure au journal, avec preuves et validation : un auditeur peut retracer n'importe quelle régularisation de bout en bout.",
    pitfall: "Écraser silencieusement la ligne fautive. Un auditeur qui découvre une correction non documentée la traite comme un signal d'alerte, même quand l'intention était parfaitement honnête.",
  },

  // ─────────────── 6. Cas complet résolu ───────────────
  {
    type: 'case-study',
    title: 'Cas complet résolu — Clôture du 1er trimestre du bureau de Goma (1/3)',
    scenario: "1er avril 2026. Vous devez envoyer les rapports financiers T1 aux trois bailleurs le 15 avril. Votre prédécesseur a réparti le loyer « à parts égales » (1 000 USD par projet et par mois) de janvier à mars, et la facture de carburant PC-0112 (240 USD, véhicule WASH) a été codée sur Projet Santé / Fondation Sigma. Voici la résolution, dans l'ordre, telle qu'un Finance Officer expérimenté la mène.",
    steps: [
      {
        title: 'Faire le diagnostic avant de toucher à quoi que ce soit',
        actions: [
          "Lancez le contrôle hebdomadaire (procédure 2, étape 7) : 0 axe vide ✔.",
          "Lancez le contrôle anti-double financement (procédure 5) : pièces de loyer à 100 % en montant, mais clé non défendable ; PC-0112 à 100 % mais mal imputée ; doublons internet INT-0226 (corrigé, REG-2026-003) et INT-0326 (exercice 3).",
          "Listez les anomalies et leur impact avant de corriger.",
        ],
        result: "Au-delà des doublons internet traités à part, deux anomalies d'imputation confirmées : (1) clé de loyer « parts égales » indéfendable sur 3 mois ; (2) carburant de 240 USD sur le mauvais projet et le mauvais bailleur.",
      },
      {
        title: 'Recalculer la clé du loyer sur une base ETP',
        actions: [
          "Calculez les ETP au 31/01, 28/02 et 31/03 : 5 / 3 / 2 à chaque date (effectifs stables).",
          "Remplissez le calculateur : 50 % / 30 % / 20 % → 1 500 / 900 / 600 USD par mois.",
        ],
        result: "Nouvelle clé validée : 1 500 / 900 / 600 USD par mois, total 3 000 USD, 100 %.",
      },
    ],
    table: {
      columns: ['Projet / bailleur', 'Imputé T1 (parts égales)', 'Correct T1 (clé ETP)', 'Écart à régulariser'],
      rows: [
        ['Nutrition / Fonds Horizon', '3 000', '4 500', '+1 500'],
        ['WASH / Agence Delta', '3 000', '2 700', '−300'],
        ['Santé / Fondation Sigma', '3 000', '1 800', '−1 200'],
        ['Total', '9 000', '9 000', '0'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Clôture du 1er trimestre du bureau de Goma (2/3)',
    scenario: "Les anomalies sont chiffrées. Vous passez maintenant les régularisations, sans jamais modifier les lignes d'origine.",
    steps: [
      {
        title: 'Régulariser le loyer du trimestre (REG-2026-002)',
        actions: [
          "Option retenue : une écriture d'ajustement par projet, datée du 31/03/2026, plutôt que 9 extournes + 9 recodages (même résultat, plus lisible, validé par le Finance Manager).",
          "Libellé commun : « Régul. loyer T1 2026 – passage clé parts égales → clé ETP – NA-2026-01 – REG-2026-002 ».",
          "Vérifiez que la somme des trois ajustements est égale à 0.",
        ],
        result: "Trois lignes d'ajustement (+1 500 / −300 / −1 200), de somme nulle, référencées à la note NA-2026-01.",
      },
      {
        title: 'Corriger le carburant (REG-2026-001)',
        actions: [
          "Extourne −240 sur Santé / Fondation Sigma / Transport & carburant.",
          "Recodage +240 sur WASH / Agence Delta / Transport & carburant.",
          "Statut de la ligne d'origine → « Corrigé ».",
        ],
        result: "PC-0112 imputée à 100 % sur WASH / Agence Delta.",
      },
    ],
    example: {
      title: "Écritures passées dans l'onglet « Codification » le 31/03/2026",
      lines: [
        "2026-03-31 | 611 | Régul. loyer T1 – clé ETP – NA-2026-01 – REG-2026-002 | Nutrition | Fonds Horizon | Loyer & charges locatives | 1500 | Engagement | Corrigé | BAIL-2026-T1",
        "2026-03-31 | 611 | Régul. loyer T1 – clé ETP – NA-2026-01 – REG-2026-002 | WASH | Agence Delta | Loyer & charges locatives | -300 | Engagement | Corrigé | BAIL-2026-T1",
        "2026-03-31 | 611 | Régul. loyer T1 – clé ETP – NA-2026-01 – REG-2026-002 | Santé | Fondation Sigma | Loyer & charges locatives | -1200 | Engagement | Corrigé | BAIL-2026-T1",
        "2026-03-31 | 604 | EXTOURNE PC-0112 – REG-2026-001 | Santé | Fondation Sigma | Transport & carburant | -240 | Caisse | Corrigé | PC-0112",
        "2026-03-31 | 604 | RECODAGE PC-0112 – REG-2026-001 | WASH | Agence Delta | Transport & carburant | 240 | Caisse | Corrigé | PC-0112",
      ],
    },
    tip: "L'ajustement global par projet n'est acceptable que s'il est référencé à une note d'allocation et inscrit au journal des corrections. En cas de doute sur les exigences d'un bailleur, préférez extourne + recodage mois par mois.",
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Clôture du 1er trimestre du bureau de Goma (3/3)',
    scenario: "Les écritures sont passées. Il reste à documenter, contrôler et mesurer l'effet sur les rapports T1 de chaque bailleur.",
    steps: [
      {
        title: "Documenter : note d'allocation et journal",
        actions: [
          "Rédigez et faites signer la note NA-2026-01 (procédure 6) : clé ETP, justification, calcul, lignes bailleurs, validation du 02/04/2026.",
          "Inscrivez REG-2026-001 et REG-2026-002 au journal des corrections, avec preuves et paraphe du Finance Manager.",
        ],
      },
      {
        title: 'Contrôler une dernière fois',
        actions: [
          "Actualisez le TCD : toutes les pièces du T1 à 100 %.",
          "Vérifiez l'onglet « Disponible » : aucune ligne de loyer ou de transport en dépassement.",
        ],
      },
      {
        title: 'Informer',
        actions: [
          "Envoyez au Finance Manager la synthèse ci-dessous, à joindre aux trois rapports T1 sous forme de note explicative des ajustements.",
        ],
        result: "Rapports T1 prêts à partir le 15 avril, avec des chiffres défendables et une piste d'audit complète.",
      },
    ],
    table: {
      columns: ['Projet / bailleur', 'Ajustement loyer', 'Ajustement carburant', 'Effet net sur le rapport T1'],
      rows: [
        ['Nutrition / Fonds Horizon', '+1 500', '0', '+1 500'],
        ['WASH / Agence Delta', '−300', '+240', '−60'],
        ['Santé / Fondation Sigma', '−1 200', '−240', '−1 440'],
        ['Total bureau', '0', '0', '0'],
      ],
    },
    result: "Livrable final du cas : grille corrigée, calculateur rempli, note NA-2026-01 signée, journal des corrections à jour, synthèse des ajustements d'imputation par bailleur — dont le total est nul, preuve qu'aucune dépense n'a été créée ni perdue. Les extournes de doublons internet (REG-2026-003 et -004), elles, réduisent le total : elles retirent une dépense comptée deux fois.",
  },

  // ─────────────── 7. Exercices ───────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Coder les dépenses d\'avril 2026',
    instructions: "Toujours au bureau de Goma (clé ETP 50/30/20 ; trajets du véhicule LC-03 en avril : 20 Nutrition, 12 WASH, 8 Santé). Codez les six pièces ci-dessous dans l'onglet « Codification », en appliquant les procédures 2 et 4.",
    steps: [
      { title: 'Pièce SAL-2026-04-07 (03/04)', body: "Salaire d'avril de l'animatrice affectée à 100 % au projet Nutrition : 650 USD." },
      { title: 'Pièce F-KB-044 (07/04)', body: "80 sacs de ciment pour les latrines du projet WASH : 1 120 USD." },
      { title: 'Pièce INT-0426 (10/04)', body: "Facture internet d'avril du bureau : 850 USD." },
      { title: 'Pièce PC-0414 (14/04)', body: "Per diem d'un atelier pour 12 relais communautaires du projet Santé, payé en caisse : 960 USD." },
      { title: 'Pièce GAR-PN-18 (18/04)', body: "Réparation de deux pneus du véhicule partagé LC-03 : 180 USD." },
      { title: 'Pièce PC-0422 (22/04)', body: "Eau et café de la réunion de coordination inter-projets, payés en caisse : 24 USD." },
    ],
    tip: "Avant chaque saisie, posez-vous dans l'ordre les questions des étapes 2, 3 et 4 de la procédure 2 : quel projet ? direct ou commun ? quelle ligne de quel bailleur ? quel compte ?",
    deliverable: "Les lignes saisies dans l'onglet « Codification » (une ligne par pièce directe, une ligne par projet pour chaque coût commun), colonnes A à J complètes.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Allouer le gardiennage et rédiger sa note',
    instructions: "Le gardiennage du bureau coûte 1 800 USD par mois. Les équipes occupent des zones distinctes, mesurées sur le plan des locaux : Nutrition 60 m², WASH 45 m², Santé 30 m² (les espaces communs ne sont pas comptés).",
    steps: [
      {
        title: 'Remplir la zone d\'exercice du calculateur',
        actions: [
          "Onglet « Allocation coûts communs », zone « Exercice » : B17 description, B18 montant, A21:A23 projets, B21:B23 bailleurs, C21:C23 surfaces.",
          "Lisez les pourcentages (D21:D23) et les parts (E21:E23) ; vérifiez la ligne TOTAL (ligne 25).",
        ],
      },
      {
        title: 'Passer les écritures d\'avril',
        actions: [
          "Saisissez trois lignes d'allocation dans « Codification » (compte, rubrique, n° de pièce GARD-2026-04).",
        ],
      },
      {
        title: 'Rédiger la note NA-2026-02',
        actions: [
          "Remplissez les 5 sections du template note-allocation-couts-communs.docx.",
          "Justifiez pourquoi la base m² est retenue ici alors que le loyer utilise la base ETP.",
        ],
      },
    ],
    deliverable: "La zone d'exercice du calculateur remplie, trois lignes d'allocation saisies, et la note NA-2026-02 tenant sur une page.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Trouver et corriger un double financement',
    instructions: "En préparant le contrôle de mars, vous trouvez dans la grille la facture internet INT-0326 (850 USD) saisie une fois en entier par la caissière (Nutrition / Fonds Horizon, 850 USD, 2026-03-10, statut Confirmé) ET allouée par vous selon la clé ETP (425 / 255 / 170).",
    steps: [
      {
        title: 'Prouver le double financement',
        actions: [
          "Ajoutez les colonnes K (Total imputé pièce) et L (Nb lignes pièce) de la procédure 5, étape 4.",
          "Calculez le pourcentage imputé de la pièce INT-0326.",
        ],
      },
      {
        title: 'Corriger',
        actions: [
          "Choisissez quelle(s) ligne(s) extourner et justifiez ce choix.",
          "Passez l'écriture REG-2026-004 et mettez à jour les statuts.",
        ],
      },
      {
        title: 'Documenter',
        actions: [
          "Inscrivez la correction au journal des corrections.",
          "Rédigez en 3 lignes le rappel à la caisse pour éviter que cela se reproduise.",
        ],
      },
    ],
    deliverable: "Le calcul du pourcentage imputé avant/après, la ligne d'extourne saisie, la ligne du journal des corrections et le message de rappel à la caisse.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercices 1 à 3)',
    items: [
      "Ex. 1 — SAL-2026-04-07 : 641 | Nutrition | Fonds Horizon | Personnel | 650 | Engagement.",
      "Ex. 1 — F-KB-044 : 601 | WASH | Agence Delta | Intrants & matériel (ligne B) | 1 120 | Engagement — et le reste à payer du contrat lié a été mis à jour si la facture se rattache à un engagement.",
      "Ex. 1 — INT-0426 : trois lignes 651 | Fonctionnement bureau | 425 (Nutrition/FHO) + 255 (WASH/ADL) + 170 (Santé/FSG) = 850, même n° de pièce.",
      "Ex. 1 — PC-0414 : 625 | Santé | Fondation Sigma | Formation | 960 | Caisse.",
      "Ex. 1 — GAR-PN-18 : clé trajets 20/12/8 = 40 → 50 % / 30 % / 20 % → 613 | Transport & carburant | 90 + 54 + 36 = 180.",
      "Ex. 1 — PC-0422 : coût commun, clé ETP → 651 | Fonctionnement bureau | 12,00 + 7,20 + 4,80 = 24,00, et non 24 sur un seul projet.",
      "Ex. 2 — Base 135 m² : 44,44 % / 33,33 % / 22,22 % (total 100 %) → 800 / 600 / 400 USD = 1 800 USD.",
      "Ex. 2 — La note NA-2026-02 explique que le gardiennage protège des zones distinctes mesurées, d'où la base m², et cite la date du plan des locaux.",
      "Ex. 3 — Avant correction : K = 1 700 USD pour INT-0326, soit 200 % imputé ; après : 850 USD, 100 %.",
      "Ex. 3 — Vous avez extourné la ligne entière de 850 USD saisie par la caissière (−850 sur Nutrition / Fonds Horizon), et non les lignes de l'allocation, car c'est elle qui n'applique pas la clé documentée.",
      "Ex. 3 — Aucune ligne n'a été supprimée ni modifiée (hors statut), et REG-2026-004 figure au journal avec preuve et validation.",
    ],
  },

  // ─────────────── 8. Erreurs de terrain ───────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Coder « au feeling » sans ouvrir le budget signé. Parade : la table de correspondance affichée à la caisse et la règle « en cas de doute, on appelle la finance avant de saisir ».",
      "Allouer un coût commun au prorata du nombre de projets. Parade : une base mesurée (ETP, m², trajets) et une note d'allocation signée pour chaque coût commun.",
      "Annoncer un disponible en ne regardant que la caisse. Parade : le registre des engagements tenu le jour de chaque signature, et le disponible réel = budget − réalisé − engagements ouverts.",
      "Compter deux fois une facture (engagement ouvert + dépense réalisée). Parade : mettre à jour la colonne « Réalisé à date » du registre à chaque saisie de facture liée.",
      "Laisser les petites dépenses en « divers ». Parade : un compte et une rubrique pour chaque nature de dépense récurrente, et un contrôle hebdomadaire des lignes sans axe.",
      "Laisser la caisse coder un coût commun en entier sur un projet. Parade : une seule personne passe les écritures d'allocation, et le contrôle par pièce (SOMME.SI sur le n° de pièce) chaque mois.",
      "Additionner des taux de coûts communs écrits dans des budgets différents sans jamais les totaliser. Parade : vérifier que la somme des taux budgétés par coût commun ne dépasse pas 100 % dès la signature d'un nouveau budget.",
      "Modifier silencieusement une ligne mal codée. Parade : extourne + recodage référencés (REG-…), statut mis à jour, journal des corrections validé.",
    ],
  },

  // ─────────────── 9. Récapitulatif + checklist ───────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez paramétré une grille de codification opérationnelle : table de correspondance compte ↔ rubrique ↔ ligne de chaque bailleur, onglet « Listes » à jour, listes déroulantes étendues et colonne « N° pièce ».",
      "Vous avez codé des pièces réelles sur leurs trois axes et leur compte, classées et contrôlées chaque semaine par formule (0 axe vide).",
      "Vous avez construit un registre des engagements et calculé le disponible réel d'une ligne budgétaire — et rédigé l'alerte écrite qui l'accompagne.",
      "Vous avez alloué le loyer et le véhicule partagé avec le calculateur du template, géré les arrondis au centime et passé les écritures d'allocation à 100 %.",
      "Vous avez construit un tableau de contrôle par pièce qui détecte les doubles financements (risque structurel de 108 % sur le loyer, doublon à 200 % sur l'internet) avant l'auditeur.",
      "Vous avez rédigé et fait valider une note d'allocation d'une page, citée dans les écritures qu'elle justifie.",
      "Vous avez corrigé des erreurs par extourne et recodage référencés, et tenu le journal des corrections du trimestre — jusqu'à la clôture complète du T1 du bureau de Goma.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Ma table de correspondance couvre toutes les rubriques internes et tous mes bailleurs, avec les cases « NON ÉLIGIBLE » identifiées.",
      "Mon onglet « Listes » contient mes vrais projets et bailleurs, et la validation des données couvre au moins 2 000 lignes.",
      "Je sais coder une dépense en répondant dans l'ordre : quel projet ? direct ou commun ? quelle ligne de quel bailleur ? quel compte ?",
      "Ma formule de contrôle des axes vides renvoie 0.",
      "Mon registre des engagements est à jour et je sais calculer le disponible réel d'une ligne.",
      "J'ai rempli le calculateur d'allocation pour au moins deux coûts communs, avec des totaux à exactement 100 %.",
      "Mon tableau de contrôle par pièce ne montre aucune pièce imputée à plus ou moins de 100 %.",
      "J'ai rédigé au moins une note d'allocation complète (5 sections) et validée.",
      "Je sais passer une extourne et un recodage sans jamais supprimer ni réécrire une ligne d'origine, et je tiens un journal des corrections.",
    ],
  },

  // ─────────────── 10. Clôture ───────────────
  {
    type: 'closing',
    nextModuleHint: "Prochain module : Module 02 — Élaboration & Gestion Budgétaire Multi-Bailleurs. Vous y construirez un budget de projet défendable et le tableau de suivi budgétaire mensuel (BFU), qui s'alimente directement de la grille de codification et du registre des engagements que vous venez de mettre en place — et vous traiterez les virements de lignes et avenants rencontrés dans ce module.",
  },
]
