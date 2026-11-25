// Module 07 — Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (gabarit-journal-cloture-mensuelle.docx, tableau-de-bord-financier-tcd.xlsx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (clôture de septembre 2026 et comité de pilotage du bureau de Goma de
// l'ONG fictive « Kivu Avenir Solidarité », la même organisation que dans les
// modules 01 à 06), avec exemples remplis, résultat attendu, astuces et erreurs
// à éviter. SAGA et LINK sont présentés au niveau conceptuel (workflow, contrôles,
// réflexes) : les libellés de menus varient selon votre version et votre
// configuration. Les organisations, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Systèmes de Gestion Financière — SAGA, LINK & Excel Avancé',
    hook: "Aucun logiciel comptable, même le mieux configuré, ne produira jamais exactement le tableau de bord dont votre coordinateur a besoin dans l'heure. À la fin de ce module, vous aurez en main un mois comptable clôturé ET verrouillé avec son journal de clôture signé, un budget chargé et suivi dans LINK avec un BFU daté, et un tableau de bord Excel (TCD + graphique) construit en quelques clics à partir d'un export brut — avec ses réserves écrites, prêt à être présenté à trois bailleurs le lendemain matin.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Saisir et contrôler une pièce dans un logiciel comptable de type SAGA avec ses trois axes complets (projet, bailleur, rubrique), en produisant une écriture équilibrée, référencée à sa pièce et un contrôle d'axes vides à zéro.",
      "Mener la validation d'un mois avant clôture (pièces, codification, doublons, rapprochements, balance), en produisant un registre de validation qui liste chaque anomalie et sa correction.",
      "Clôturer, verrouiller et archiver un mois comptable avec le template gabarit-journal-cloture-mensuelle.docx, en produisant un journal de clôture complet (5 contrôles, date et heure du verrouillage, deux signatures) et un dossier d'archive des journaux.",
      "Traiter une correction après clôture sans casser la piste d'audit (écriture dans la période ouverte, ou réouverture exceptionnelle tracée), en produisant une demande de réouverture et sa ré-clôture documentée.",
      "Charger, rapprocher et suivre un budget bailleur dans LINK, en produisant une fiche de chargement contrôlée, un rapprochement SAGA ↔ LINK, une alerte écrite sur les lignes sensibles et un BFU nommé et daté.",
      "Nettoyer un export brut et construire un tableau de bord Excel (TCD bailleur × mois + graphique croisé dynamique) avec le template tableau-de-bord-financier-tcd.xlsx, en produisant un classeur qui se rapproche des chiffres SAGA et une note d'une demi-page sur les anomalies et les réserves.",
      "Actualiser un tableau de bord à chaque nouvel export plutôt que le reconstruire, en produisant un classeur qui se met à jour en un clic et un export brut d'origine conservé, daté et rangé.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas une formation bouton-par-bouton sur un logiciel propriétaire : ni SAGA ni LINK ne sont accessibles hors de l'organisation qui en détient la licence, et leurs menus changent d'une version à l'autre. Vous apprenez ce qui ne change pas : le workflow, les contrôles à faire à chaque étape et ce que chaque système protège. Le jour où vous ouvrez le SAGA ou le LINK de votre employeur, vous comprenez déjà pourquoi chaque écran existe. L'outil que vous manipulerez réellement, fichier en main, est Excel.",
      "Le cas fil rouge : vous êtes Finance Officer de « Kivu Avenir Solidarité » (KAS), l'ONG fictive des modules précédents. Nous sommes le mardi 6 octobre 2026. Grace M., Finance Manager, vous donne deux missions : clôturer et verrouiller septembre 2026 d'ici vendredi 9 octobre, et préparer pour le comité de pilotage de demain mercredi 7 octobre à 9 h (Fonds Horizon, Agence Delta, Fondation Sigma) un tableau de bord de consommation par bailleur et par mois.",
    ],
    bullets: [
      "Livrable 1 — Des pièces saisies dans SAGA avec leurs trois axes, et un contrôle d'axes vides à zéro (procédure 1).",
      "Livrable 2 — Le registre de validation de septembre : anomalies trouvées, corrigées ou en suspens (procédure 2).",
      "Livrable 3 — Le journal de clôture de septembre, rempli avec le gabarit, la période verrouillée et les journaux archivés (procédure 3).",
      "Livrable 4 — Une demande de réouverture tracée ou, mieux, une écriture de correction dans la période ouverte (procédure 4).",
      "Livrable 5 — La fiche de chargement du budget Agence Delta dans LINK, contrôlée à 310 000 USD (procédure 5).",
      "Livrable 6 — Le rapprochement SAGA ↔ LINK, la projection de fin d'année et l'alerte écrite sur la ligne carburant (procédure 6).",
      "Livrable 7 — Un BFU extrait, nommé, daté et diffusé avec ses réserves (procédure 7).",
      "Livrable 8 — Un export brut préparé : libellés harmonisés, anomalies qualifiées, original conservé (procédure 8).",
      "Livrable 9 — Le tableau de bord Excel (TCD + graphique), rapproché de SAGA, accompagné de sa note de réserves (procédure 9).",
    ],
  },
  {
    type: 'concept',
    title: 'Le cas fil rouge : la clôture de septembre 2026 du bureau de Goma',
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés. Les personnes, les bailleurs et les montants sont fictifs, mais construits sur des situations réelles de bureaux multi-bailleurs de l'Est de la RDC. Les projets et les budgets sont ceux des modules 01 et 02.",
    table: {
      columns: ['Projet (code)', 'Bailleur', 'Budget 2026', 'Où il vit dans les systèmes'],
      rows: [
        ['Nutrition Nord-Kivu (NUT)', 'Fonds Horizon (FHO)', '420 000 USD', 'SAGA (écritures) puis LINK (budget chargé + BFU)'],
        ['WASH Nord-Kivu (WSH)', 'Agence Delta (ADL)', '310 000 USD', 'idem — c\'est le budget que vous chargerez dans LINK (procédure 5)'],
        ['Santé Nord-Kivu (SAN)', 'Fondation Sigma (FSG)', '260 000 USD', 'idem'],
      ],
    },
    example: {
      title: 'Qui fait quoi, et le calendrier des 4 prochains jours',
      lines: [
        "Grace M., Finance Manager : valide, signe le journal de clôture, détient le droit de verrouillage/réouverture",
        "Vous, Finance Officer : saisie, validation, brouillon du journal de clôture, export LINK, tableau de bord",
        "Esther N., caissière : journal de caisse (pièces de septembre encore à saisir) — Patrick K., logisticien : factures fournisseurs et carburant — Joël B., coordinateur WASH : destinataire des alertes WASH",
        "Mardi 6/10 : tableau de bord pour le comité — Mercredi 7/10, 9 h : comité de pilotage — Jeudi 8/10 : validation de septembre — Vendredi 9/10 : clôture, verrouillage, archivage",
      ],
    },
    pitfall: "L'export LINK que vous recevez ce mardi couvre juillet à septembre, mais septembre n'est pas clôturé : il ne contient que 2 lignes sur 52. Ce détail, que personne ne vous signale, est le piège central du cas final.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'SAGA : la comptabilité générale, en quatre temps',
    body: [
      "SAGA — ou tout logiciel comptable ONG équivalent — n'est pas un outil de gestion de projet : c'est le grand livre de l'organisation, celui qui produit les états financiers officiels que le siège consolide et que l'auditeur externe examine ligne par ligne. Le workflow est presque toujours le même, quelle que soit la marque.",
      "Chaque temps a un responsable, une preuve et un risque. Savoir ce que chaque temps protège est ce qui vous permet de l'exécuter correctement sous la pression d'une échéance.",
    ],
    table: {
      columns: ['Temps', 'Ce qu\'on fait', 'Preuve laissée', 'Ce que cela protège'],
      rows: [
        ['1. Saisie', 'Enregistrer chaque pièce avec ses trois axes dès la source', 'Écriture + n° de pièce + pièce scannée', 'Une erreur de codification qui devient définitive'],
        ['2. Validation', 'Relire les écritures du mois avant clôture', 'Registre de validation signé', 'Erreurs, doublons, pièces manquantes'],
        ['3. Clôture mensuelle', 'Fermer la période ET la verrouiller', 'Date et heure du verrouillage', 'Les chiffres déjà transmis aux bailleurs'],
        ['4. Édition des journaux', 'Éditer les journaux du mois clôturé et les archiver', 'PDF des journaux dans le dossier d\'archive', 'La preuve opposable à l\'auditeur (pas une capture d\'écran)'],
      ],
    },
    tip: "Dans la plupart des logiciels, la saisie se trouve dans un menu « Écritures » ou « Saisie », la clôture dans « Gestion des périodes » ou « Clôtures », et les journaux dans « Éditions » ou « États ». Repérez ces trois endroits dans votre logiciel dès le premier jour.",
  },
  {
    type: 'concept',
    title: "Pourquoi une clôture non verrouillée n'est pas une clôture",
    body: [
      "La clôture n'est pas une formalité qu'on bâcle un vendredi soir pour « avancer ». C'est le moment où la comptabilité du mois devient une source de vérité figée. Sans verrouillage dans le système, la période reste modifiable par n'importe quel utilisateur autorisé, sans trace visible pour votre coordination.",
      "Un bureau qui rouvrait régulièrement des mois soi-disant clôturés pour « corriger une petite erreur » sans documenter la réouverture s'est retrouvé, à l'audit annuel, incapable de garantir que les chiffres présentés six mois plus tôt à un bailleur étaient encore ceux du système.",
    ],
    example: {
      title: 'Ce qui se passe sans verrouillage (scénario type, chiffres fictifs)',
      lines: [
        "30/06 : le rapport du T2 part chez le bailleur avec 41 300 USD en charges de personnel.",
        "14/08 : un agent « corrige vite » une écriture de juin dans SAGA, sans réouverture tracée : personnel = 40 100 USD.",
        "20/11 : l'auditeur compare le grand livre (40 100) au rapport transmis (41 300) : 1 200 USD d'écart que personne ne sait expliquer.",
        "Résultat : une recommandation d'audit « piste d'audit insuffisante », alors que l'erreur d'origine était honnête.",
      ],
    },
    highlight: "Une clôture non verrouillée n'est pas une clôture.",
  },
  {
    type: 'concept',
    title: 'Séparation des tâches : qui peut saisir, valider, clôturer, rouvrir',
    body: "Un système n'est fiable que si les droits d'accès reflètent la séparation des tâches. Celui qui saisit ne devrait pas être seul à valider ; celui qui valide ne devrait pas pouvoir rouvrir une période en silence. Vérifiez ces droits auprès de l'administrateur de votre logiciel — c'est une question d'audit classique.",
    table: {
      columns: ['Rôle', 'Peut', 'Ne peut pas'],
      rows: [
        ['Assistant comptable / caissière / logisticien', 'Saisir des pièces dans la période ouverte', 'Valider un mois, clôturer, rouvrir'],
        ['Finance Officer', 'Saisir, valider, préparer le journal de clôture, extraire les rapports', 'Verrouiller ou rouvrir une période (selon la politique)'],
        ['Finance Manager', 'Valider, clôturer et verrouiller, autoriser une réouverture', 'Rouvrir sans demande écrite (règle de la procédure 4)'],
        ['Administrateur du système', 'Exécuter le verrouillage/déverrouillage demandé', 'Décider seul de rouvrir une période'],
      ],
    },
    tip: "Si, dans votre bureau, une seule personne cumule saisie, validation et verrouillage, ne le cachez pas : écrivez-le dans votre note à la direction financière et proposez un contrôle compensatoire (relecture mensuelle par le siège, par exemple).",
  },
  {
    type: 'concept',
    title: 'LINK : le suivi financier par projet et par bailleur',
    body: [
      "Là où SAGA raisonne en comptabilité générale d'organisation, LINK raisonne en suivi financier de projet : il permet de piloter un budget au jour le jour, bailleur par bailleur, sans attendre la clôture mensuelle complète.",
      "Le principe tient en trois mots, quelle que soit la version : un budget chargé, un suivi des dépenses en continu, une extraction de rapports (le BFU — Budget Follow-Up : dépensé à date, engagé, disponible, taux de consommation par rubrique).",
    ],
    table: {
      columns: ['Pilier', 'Ce que contient LINK', 'Votre réflexe'],
      rows: [
        ['Budget chargé', 'Le budget approuvé, ligne par ligne, rubrique par rubrique', 'Vérifier qu\'il correspond exactement au budget signé'],
        ['Suivi des dépenses', 'Les dépenses engagées et enregistrées, rapprochées du budget, disponible mis à jour en continu', 'Le consulter chaque semaine, pas seulement en fin de mois'],
        ['Extraction de rapports', 'Le BFU et les extractions pour bailleur ou comité', 'Toujours dater l\'extraction'],
      ],
    },
    highlight: "LINK n'invente aucune donnée : si une dépense a été mal codée à la saisie dans SAGA, LINK affichera un solde disponible faux, avec la même conviction qu'il afficherait un solde juste.",
  },
  {
    type: 'comparison-table',
    title: 'SAGA et LINK ne raisonnent pas au même niveau',
    columns: ['Critère', 'SAGA', 'LINK'],
    rows: [
      ['Niveau de raisonnement', "Comptabilité générale de l'organisation", 'Suivi financier par projet et par bailleur'],
      ['Fréquence de référence', 'Mensuelle (clôture)', 'Continue, entre deux clôtures'],
      ['Produit typique', 'Journaux comptables, états financiers', 'Rapport de suivi budgétaire (BFU), extraction bailleur'],
      ['Dépend de', 'La qualité de la saisie initiale', 'La qualité de la codification faite en amont dans SAGA'],
      ['Statut du chiffre', 'Référence officielle une fois la période clôturée', 'Reflet de SAGA : provisoire tant que le mois n\'est pas clôturé'],
    ],
  },
  {
    type: 'concept',
    title: 'La chaîne de dépendance : une erreur de saisie voyage jusqu\'au comité',
    body: "Une écriture mal codée ne reste pas dans SAGA : elle traverse LINK, l'export Excel, le TCD et le graphique, avec la même assurance visuelle à chaque étape. C'est le principe « garbage in, garbage out » du module 01, appliqué à toute la chaîne. Corrigez toujours À LA SOURCE (SAGA), jamais dans l'aval.",
    example: {
      title: 'Le voyage d\'une erreur — carburant du véhicule WASH codé sur le mauvais bailleur (340 USD)',
      lines: [
        "SAGA : écriture saisie avec bailleur = Fondation Sigma au lieu d'Agence Delta",
        "LINK : le disponible de la ligne « S3 Logistique & transport » de Fondation Sigma baisse de 340 USD ; celui de la ligne « C. Véhicules & carburant » d'Agence Delta est surévalué de 340 USD",
        "Export + TCD : la ligne « Fondation Sigma » grossit à tort dans le tableau de bord du comité",
        "Le comité décide un engagement sur la base d'un solde Delta trop optimiste — l'erreur n'est découverte qu'à la clôture suivante, parfois à l'audit",
      ],
    },
    pitfall: "Corriger le chiffre « à la main » dans l'Excel du comité sans corriger SAGA : vous créez deux vérités financières sur le même projet.",
  },
  {
    type: 'concept',
    title: 'Pourquoi la compétence Excel/TCD reste indispensable',
    body: [
      "Aucun système, ni SAGA ni LINK, ne produira jamais exactement le tableau de bord dont vous avez besoin un jour donné. Un coordinateur qui demande un mardi la consommation de chaque bailleur croisée par mois pour une réunion le lendemain matin n'attend pas que vous configuriez un nouveau rapport LINK : il attend un tableau clair, dans l'heure.",
      "Le Tableau Croisé Dynamique (TCD) reconstruit en quelques clics n'importe quelle vue croisée — par bailleur, par mois, par rubrique — sans écrire une formule, et se met à jour en un clic à chaque nouvel export. Le système source standardise la donnée ; votre compétence Excel la transforme en décision, dans le format et le délai que le terrain impose.",
    ],
    table: {
      columns: ['Votre besoin', 'Outil à utiliser', 'Pourquoi'],
      rows: [
        ['Journal officiel, preuve d\'audit', 'SAGA (journaux édités)', 'Seule source opposable'],
        ['Disponible d\'une ligne budgétaire aujourd\'hui', 'LINK (suivi/BFU)', 'Mis à jour en continu'],
        ['Vue croisée inattendue (bailleur × mois, rubrique × projet…)', 'Export + Excel TCD', 'Aucun rapport standard ne la contient'],
        ['Tendance de consommation pour un comité', 'TCD + graphique croisé dynamique', 'Lisible en dix secondes'],
      ],
    },
    highlight: "Un TCD n'est fiable que si les données sources sont propres et correctement codées : un TCD magnifique bâti sur des libellés incohérents produit un résultat trompeur avec la même assurance qu'un résultat juste.",
  },
  {
    type: 'concept',
    title: 'Un TCD en quatre zones — et ce qu\'il ne sait pas faire',
    body: "Un tableau croisé dynamique se construit en glissant les champs de votre tableau dans quatre zones. Retenez cette grammaire : elle ne change jamais.",
    table: {
      columns: ['Zone', 'Rôle', 'Dans le tableau de bord de KAS'],
      rows: [
        ['Lignes', 'Ce qui descend', 'Bailleur'],
        ['Colonnes', 'Ce qui s\'étale à droite', 'Mois (calculé)'],
        ['Valeurs', 'Ce qu\'on additionne ou compte', 'Montant (USD), agrégation Somme'],
        ['Filtres', 'Ce qui restreint la vue', 'Projet, ou Rubrique, au besoin'],
      ],
    },
    pitfall: "Trois limites à connaître : (1) un champ Date stocké en TEXTE (« 2026-07-15 ») ne se regroupe pas par mois — c'est pourquoi le template fournit une colonne « Mois (calculé) » ; (2) Excel ignore la casse, mais pas les espaces ni les points : « Fonds Horizon », « Fonds Horizon » suivi d'un espace invisible et « F. Horizon » donnent trois lignes ; (3) un TCD ne se met pas à jour tout seul : il faut Données > Actualiser tout.",
  },
  {
    type: 'concept',
    title: 'Le calendrier mensuel d\'un bureau bien tenu',
    body: "La clôture se prépare tout au long du mois : si vous attendez le dernier jour pour contrôler, vous perdez trois jours à chercher des pièces. Voici le rythme type à viser (J = dernier jour du mois). Le fil rouge de KAS est volontairement en retard pour que vous voyiez où le temps se perd.",
    table: {
      columns: ['Échéance', 'Action', 'Responsable', 'Pour KAS (septembre 2026)'],
      rows: [
        ['Chaque jour', 'Saisie codée des pièces reçues', 'Équipe + vous', 'Pièces de caisse de septembre en retard'],
        ['Chaque semaine', 'Contrôle des axes vides, rapprochement SAGA ↔ LINK', 'Vous', 'Une ligne sans bailleur a échappé au contrôle'],
        ['J + 3', 'Dernières pièces reçues et saisies', 'Équipe', 'Visé : 3/10'],
        ['J + 5 à J + 7', 'Rapprochements banque et caisse, validation du mois', 'Vous, Finance Manager', 'Validation prévue jeudi 8/10 (J + 8)'],
        ['J + 8', 'Clôture, verrouillage, journaux archivés', 'Finance Manager', 'Visé : vendredi 9/10'],
        ['J + 10', 'BFU à jour, journal de clôture signé, rapports', 'Vous', 'Visé : 12/10'],
      ],
    },
    tip: "Fixez ce calendrier avec votre Finance Manager et affichez-le au bureau finance. Un mois qui se clôture à J + 8 de façon régulière est un mois dont les rapports bailleurs partent à l'heure.",
  },
  {
    type: 'stat-callout',
    stat: '1 vérité',
    caption: 'Une seule version des chiffres : celle de SAGA une fois la période clôturée',
    context: "Tout tableau Excel, tout BFU, toute extraction doit pouvoir se rapprocher des journaux de SAGA au dollar près, ou porter la mention de l'écart et de sa cause. Deux versions des chiffres qui circulent sur le même projet, c'est le début d'un constat d'audit.",
  },
  {
    type: 'vocabulary',
    terms: [
      { term: 'SAGA', definition: "Logiciel de comptabilité générale ONG — saisie, validation, clôture mensuelle, édition des journaux comptables officiels." },
      { term: 'LINK', definition: "Outil de suivi financier de projet — budget chargé par bailleur, suivi continu des dépenses, extraction de rapports (BFU)." },
      { term: 'BFU (Budget Follow-Up)', definition: "Tableau de suivi comparant, ligne par ligne, le budget alloué à l'engagé et au dépensé réels, avec le disponible et le taux de consommation." },
      { term: 'Budget chargé', definition: "Budget approuvé par le bailleur, saisi dans LINK ligne par ligne ; il doit être identique au budget signé." },
      { term: 'Clôture mensuelle', definition: "Opération qui fige officiellement les écritures comptables d'un mois ; doit être suivie d'un verrouillage de période." },
      { term: 'Verrouillage de période', definition: "Mesure empêchant toute modification d'une période comptable clôturée sans procédure de réouverture tracée." },
      { term: 'Réouverture de période', definition: "Déverrouillage exceptionnel d'une période clôturée, sur demande écrite, validée, limitée dans le temps et ré-clôturée aussitôt." },
      { term: 'Journaux comptables', definition: "Éditions officielles du mois (achats, banque, caisse, opérations diverses, paie…) archivées au dossier comptable." },
      { term: 'Balance générale', definition: "Liste de tous les comptes avec leurs totaux débit et crédit : le total des débits doit égaler le total des crédits." },
      { term: 'Engagement', definition: "Montant d'un contrat ou d'un bon de commande signé, pas encore facturé ou payé ; il consomme déjà le budget disponible." },
      { term: 'Export brut', definition: "Extraction non retouchée d'un système (LINK, SAGA) : on la conserve intacte, datée, comme preuve d'origine." },
      { term: 'TCD (Tableau Croisé Dynamique)', definition: "Outil Excel qui résume et croise un grand volume de données (ex. bailleur × mois) sans formule, actualisable à chaque nouvel export." },
      { term: 'Tableau structuré', definition: "Plage convertie par Ctrl+T : elle s'étend automatiquement aux nouvelles lignes et porte un nom (ex. tblExport)." },
      { term: 'Taux de consommation', definition: "Part du budget d'une ligne déjà dépensée (parfois engagements inclus), à comparer au temps écoulé du projet." },
    ],
  },
  {
    type: 'concept',
    title: 'Votre feuille de route : 9 procédures, dans l\'ordre du terrain',
    body: "Les procédures suivent le cycle réel d'un bureau : on saisit et on valide, on clôture et on verrouille, on corrige proprement après coup, on charge et on suit le budget dans LINK, puis on prépare les données et on construit le tableau de bord. Chaque procédure se termine par un livrable précis.",
    table: {
      columns: ['Procédure', 'Fréquence', 'Livrable', 'Étapes'],
      rows: [
        ['1. Saisir une pièce dans SAGA, codée dès la source', 'Chaque jour', 'Écriture équilibrée + contrôle d\'axes à 0', '5'],
        ['2. Valider les écritures du mois avant clôture', 'Chaque mois (J + 5 à J + 8)', 'Registre de validation', '5'],
        ['3. Clôturer, verrouiller et archiver avec le gabarit', 'Chaque mois (J + 8)', 'Journal de clôture signé + archive', '6'],
        ['4. Corriger après clôture : réouverture tracée', 'À chaque erreur découverte', 'Demande de réouverture + ré-clôture', '4'],
        ['5. Charger le budget dans LINK', 'À la signature / avenant', 'Fiche de chargement contrôlée', '4'],
        ['6. Suivre les dépenses dans LINK et alerter', 'Chaque semaine', 'Rapprochement + alerte écrite', '4'],
        ['7. Extraire et diffuser un BFU', 'À chaque échéance', 'BFU nommé, daté, avec réserves', '4'],
        ['8. Préparer l\'export brut', 'À chaque export', 'Export nettoyé + original conservé', '6'],
        ['9. Construire le tableau de bord TCD', 'À chaque comité', 'Classeur + graphique + note', '7'],
      ],
    },
  },

  // ─────────────── PROCÉDURE 1 — Saisir une pièce dans SAGA, codée dès la source ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Préparer la pièce avant de s\'asseoir devant l\'écran',
    intro: "Une saisie se gagne avant la saisie : l'écriture n'est correcte que si la pièce est complète et si vous connaissez les trois axes AVANT d'ouvrir le menu. Entrées nécessaires : la pièce originale, la table de correspondance du module 01 (compte ↔ rubrique ↔ ligne de chaque bailleur) et le bon de commande ou de carburant approuvé. Fil rouge : Patrick K. vous remet, le 28/09/2026, la facture n° 5127 de la station « Mont-Goma Carburants » pour le véhicule du projet WASH.",
    steps: [
      {
        title: 'Vérifier que la pièce est saisissable',
        actions: [
          "Contrôlez les cinq mentions : fournisseur identifiable, date, montant en chiffres, objet de la dépense, devise.",
          "Vérifiez la présence de l'approbation : bon de commande ou, pour le carburant, bon carburant signé du chauffeur et du responsable.",
          "Attribuez un numéro unique de classement (ex. ACH-2026-0931) et inscrivez-le sur la pièce au stylo, en haut à droite.",
          "Vérifiez dans le registre ou par recherche du numéro de facture que cette pièce n'a pas déjà été saisie.",
        ],
      },
      {
        title: 'Déterminer les trois axes avec la table de correspondance',
        actions: [
          "Question 1 — Quel projet ? Le bon carburant dit « véhicule LC-02, projet WASH ».",
          "Question 2 — Direct ou commun ? Le véhicule est affecté à 100 % au WASH : coût direct.",
          "Question 3 — Quelle rubrique et quelle ligne de CE bailleur ? Rubrique interne « Transport & carburant » = ligne C « Véhicules & carburant » d'Agence Delta.",
          "En cas de doute, ne saisissez pas : appelez la finance avant (règle du module 01).",
        ],
      },
    ],
    example: {
      title: 'Fiche de pré-saisie de la facture 5127',
      lines: [
        "Fournisseur : Mont-Goma Carburants | Facture n° 5127 | Date : 28/09/2026 | Montant : 340,00 USD",
        "Objet : carburant véhicule LC-02 (WASH) | Pièces jointes : facture + bon BC-carb-118 signé",
        "N° de classement attribué : ACH-2026-0931",
        "Compte : 604 Achats de carburant | Projet : WASH | Bailleur : Agence Delta | Rubrique : Transport & carburant (ligne C)",
      ],
    },
    result: "Une pièce numérotée, approuvée, non déjà saisie, avec ses quatre informations de classement (compte + trois axes) déterminées par écrit.",
    pitfall: "Saisir d'abord et réfléchir ensuite aux axes « en fin de mois ». En fin de mois, ni vous ni personne ne se souviendra du contexte de cette ligne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Ouvrir le bon journal et la bonne période',
    intro: "Toute écriture appartient à un journal (achats, banque, caisse, opérations diverses, paie) et à une période. Choisir le mauvais journal fausse l'édition des journaux ; choisir une période clôturée est refusé — ou pire, accepté si la période n'est pas verrouillée. Entrées : le type de pièce et le calendrier de clôture en cours.",
    steps: [
      {
        title: 'Choisir le journal',
        actions: [
          "Facture fournisseur à payer ultérieurement : journal d'achats.",
          "Dépense payée en espèces par la caissière : journal de caisse.",
          "Virement ou chèque : journal de banque.",
          "Allocation, régularisation, extourne : journal d'opérations diverses (OD).",
        ],
      },
      {
        title: 'Contrôler la période et les dates',
        actions: [
          "Ouvrez la gestion des périodes (menu « Périodes » ou « Clôtures ») et lisez le statut de septembre 2026 : « ouverte ».",
          "Saisissez la date de la pièce (28/09/2026) et non la date du jour : la date de pièce détermine le mois de rattachement.",
          "Si la facture est en CDF ou en EUR, renseignez le taux de change du jour de la pièce selon la politique du module 04.",
        ],
      },
    ],
    example: {
      title: 'Paramètres d\'ouverture de la saisie',
      lines: [
        "Journal : AC (achats) — Période : 2026-09, statut ouverte — Date de pièce : 28/09/2026",
        "Devise : USD (aucun taux à appliquer) — Utilisateur connecté : votre identifiant, droit « saisie »",
        "Numéro de pièce comptable : ACH-2026-0931 (celui attribué à l'étape 1)",
      ],
    },
    result: "Vous êtes dans le bon journal, sur la bonne période ouverte, avec la date de pièce — pas celle du jour — et le numéro de classement prêt à être saisi.",
    tip: "Les libellés exacts des journaux (AC, BQ, CA, OD…) sont propres à votre plan de journaux. Faites une capture de la liste des journaux et collez-la dans votre aide-mémoire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: "Saisir l'en-tête et les lignes avec les trois axes",
    intro: "La ligne de charge porte le compte (nature) ET les trois axes (destination) ; la ligne de tiers porte le fournisseur. Le libellé doit permettre à un tiers de comprendre l'écriture sans ouvrir la pièce.",
    steps: [
      {
        title: 'Saisir l\'en-tête de l\'écriture',
        actions: [
          "Renseignez la date de pièce, le journal, le numéro de pièce ACH-2026-0931 et la référence fournisseur « F.5127 ».",
          "Rédigez un libellé normalisé : OBJET – VÉHICULE/PROJET – PÉRIODE – N° FACTURE – N° BON.",
        ],
      },
      {
        title: 'Saisir les lignes d\'écriture',
        actions: [
          "Ligne 1 (charge) : compte 604, débit 340,00 ; renseignez les trois axes : projet WASH, bailleur Agence Delta, rubrique Transport & carburant.",
          "Ligne 2 (tiers) : compte fournisseurs de classe 4 (ex. 401), crédit 340,00, tiers « Mont-Goma Carburants ».",
          "Ne laissez aucun axe en « à compléter » ou « divers ».",
        ],
      },
    ],
    example: {
      title: 'Écriture saisie',
      lines: [
        "AC | 28/09/2026 | ACH-2026-0931 | CARB LC-02 WASH 09/2026 – F.5127 – BC-carb-118",
        "Ligne 1 : 604 | Débit 340,00 | Projet WSH | Bailleur ADL | Rubrique Transport & carburant",
        "Ligne 2 : 401 Mont-Goma Carburants | Crédit 340,00",
        "Total débit 340,00 = total crédit 340,00",
      ],
    },
    result: "Une écriture équilibrée dont la ligne de charge porte compte + projet + bailleur + rubrique, et dont le libellé se comprend seul.",
    pitfall: "Un libellé du type « carburant » ou « achat divers ». Dans trois mois, l'auditeur qui filtrera sur « Transport & carburant » ne saura pas de quel véhicule ni de quelle facture il s'agit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Contrôler avant de valider la saisie',
    intro: "Valider une saisie est un geste souvent irréversible dans l'esprit des utilisateurs (« c'est dans le système »). Six secondes de contrôle évitent six jours de correction. Ne validez jamais une saisie incomplète en vous disant que vous la complèterez en fin de mois.",
    steps: [
      {
        title: 'Faire la relecture en cinq points',
        actions: [
          "Équilibre : total débit = total crédit.",
          "Montant : le montant saisi est identique au montant de la pièce (340,00 et non 304,00).",
          "Axes : aucun des trois axes vide ; rubrique cohérente avec le compte (604 ↔ Transport & carburant) selon la table de correspondance.",
          "Doublon : lancez la recherche sur le numéro de facture F.5127 et sur le couple fournisseur + montant : une seule écriture doit apparaître.",
          "Pièce : scannez ou joignez la pièce à l'écriture, nommée ACH-2026-0931.pdf.",
        ],
      },
      {
        title: 'Valider et tracer',
        actions: [
          "Validez l'écriture et notez, sur la pièce papier, la date de saisie et vos initiales.",
          "Rangez la pièce dans le classeur du mois selon le numéro de classement.",
        ],
      },
    ],
    example: {
      title: 'Résultat de la relecture de l\'écriture ACH-2026-0931',
      lines: [
        "Équilibre : 340,00 = 340,00 ✔",
        "Montant pièce : 340,00 ✔ — Axes : WSH / ADL / Transport & carburant ✔",
        "Recherche « F.5127 » : 1 écriture ✔ — Pièce jointe ACH-2026-0931.pdf ✔",
        "Date de saisie 28/09/2026, initiales apposées ✔",
      ],
    },
    result: "Une écriture validée qui passe vos cinq contrôles, avec sa pièce jointe dans le système et rangée dans le classeur papier.",
    tip: "Le contrôle du doublon se fait sur le numéro de facture ET sur fournisseur + montant : une même facture ressaisie sous « F.5127 » puis « F 5127 » échappe à la recherche sur le seul numéro.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Chaque semaine : exporter et traquer les écritures sans axe',
    intro: "Le contrôle d'axes vides est le garde-fou de toute la chaîne : une ligne sans bailleur traverse LINK et le TCD sans que personne ne la voie. Vous l'exécutez chaque vendredi. Entrées : un export des écritures du mois en cours (grand livre analytique ou liste des écritures).",
    steps: [
      {
        title: 'Exporter les écritures du mois',
        actions: [
          "Dans le menu d'éditions de votre logiciel, extrayez les écritures de septembre 2026 avec leurs axes, au format Excel.",
          "Enregistrez l'export sous KAS_SAGA_ecritures_2026-09_extrait-2026-09-25.xlsx.",
        ],
      },
      {
        title: 'Compter les axes manquants',
        actions: [
          "Dans une cellule libre, saisissez =NB.VIDE(plage de la colonne Bailleur) ; faites de même pour Projet et Rubrique (anglais : =COUNTBLANK(…)).",
          "Filtrez la colonne concernée sur « (Vides) » pour lire les lignes fautives.",
          "Renvoyez chaque ligne à son auteur avec la pièce : il corrige dans SAGA, pas dans l'Excel.",
          "Recommencez jusqu'à obtenir 0 sur les trois colonnes.",
        ],
      },
    ],
    example: {
      title: 'Contrôle du vendredi 25/09/2026 — export de 412 écritures',
      lines: [
        "Projet vides : 0 — Rubrique vides : 0 — Bailleur vides : 1",
        "La ligne : Transport | 18 400,00 | 18/08/2026 | projet NUT | bailleur vide",
        "Action prévue : retrouver la pièce, faire corriger par le saisisseur, relancer le contrôle",
        "Cette ligne n'a PAS été corrigée ce vendredi-là : c'est elle qui réapparaîtra dans l'export du comité de pilotage.",
      ],
    },
    result: "Un export hebdomadaire daté, avec 0 axe vide sur les trois colonnes — ou une liste de lignes fautives renvoyées à leurs auteurs avec une échéance.",
    pitfall: "Faire le contrôle mais ne pas relancer jusqu'à zéro. Une anomalie « notée » mais non corrigée voyage ensuite dans tous vos tableaux de bord.",
  },

  // ─────────────── PROCÉDURE 2 — Valider les écritures du mois avant clôture ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Bloquer le créneau et sortir les journaux provisoires du mois',
    intro: "La validation est un contrôle croisé : ce n'est pas vous qui avez saisi toutes les pièces, c'est ce regard extérieur qui protège l'organisation d'une erreur devenue définitive. Elle se fait mal « entre deux réunions ». Fil rouge : jeudi 8 octobre 2026, validation de septembre.",
    steps: [
      {
        title: 'Réserver le temps et prévenir',
        actions: [
          "Bloquez dans votre agenda jeudi 8/10 de 8 h à 12 h, marqué « Validation septembre — ne pas déranger ».",
          "Prévenez Esther N. et Patrick K. : aucune nouvelle pièce de septembre après mercredi 7/10 à 18 h (sauf accord écrit de Grace M.).",
        ],
      },
      {
        title: 'Extraire les états provisoires',
        actions: [
          "Éditez les journaux provisoires (« brouillard ») de septembre : achats, banque, caisse, OD, paie.",
          "Éditez la balance générale et la balance par projet et par bailleur au 30/09/2026.",
          "Notez les totaux de contrôle : nombre d'écritures et total des mouvements.",
        ],
      },
    ],
    example: {
      title: 'États provisoires de septembre 2026 — KAS Goma',
      lines: [
        "Journal d'achats : 118 écritures — banque : 96 — caisse : 174 — OD : 24 — paie : 12 = 424 écritures (412 au contrôle du 25/09 + 12 depuis)",
        "Balance générale : total débit = total crédit = 1 482 760,40 USD (cumul depuis janvier)",
        "Balance par bailleur : Fonds Horizon, Agence Delta, Fondation Sigma, Fonds propres — aucune ligne « sans bailleur » en balance",
      ],
    },
    result: "Un dossier de validation de septembre : journaux provisoires, balance générale équilibrée et balance par projet/bailleur, avec le nombre d'écritures à contrôler.",
    pitfall: "Valider à partir de l'écran du logiciel. Éditez des états datés et gardez-les : ils prouvent ce que vous avez contrôlé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Contrôler les pièces justificatives : 100 % du gros, un échantillon du reste',
    intro: "Vous ne pouvez pas rouvrir 424 pièces en une matinée. La méthode standard : contrôle exhaustif au-dessus d'un seuil, échantillon systématique en dessous. Le seuil et le taux sont fixés par la politique de votre organisation (ici 1 000 USD et 1 écriture sur 8).",
    steps: [
      {
        title: 'Constituer la liste à contrôler',
        actions: [
          "Dans l'export des écritures, triez la colonne Montant du plus grand au plus petit.",
          "Retenez toutes les écritures supérieures ou égales à 1 000 USD : contrôle à 100 %.",
          "Parmi les autres, prenez une ligne sur 8 en partant de la première (échantillon systématique, donc non choisi par vous).",
        ],
      },
      {
        title: 'Contrôler chaque pièce',
        actions: [
          "Ouvrez la pièce scannée ou papier et vérifiez : montant, date dans le mois, fournisseur, objet cohérent avec le compte et les axes.",
          "Vérifiez les signatures et l'approbation (bon de commande, bon carburant, état de paie signé).",
          "Marquez chaque ligne contrôlée : OK, ou anomalie avec description.",
        ],
      },
    ],
    example: {
      title: 'Plan de contrôle de septembre 2026',
      lines: [
        "Écritures ≥ 1 000 USD : 38 → 38 pièces contrôlées à 100 %",
        "Écritures < 1 000 USD : 386 − 12 écritures de paie = 374 → 1 sur 8 = 47 pièces",
        "Total à ouvrir : 85 pièces. Résultat de la matinée : 83 OK, 2 anomalies (pièce non signée BC-2026-088 ; facture 5127 saisie deux fois, voir étape 4)",
      ],
    },
    result: "Une liste de 85 pièces contrôlées, chacune marquée OK ou anomalie, avec le motif de chaque anomalie.",
    tip: "Si l'échantillon révèle un taux d'anomalies supérieur à 5 %, étendez le contrôle : un échantillon qui trouve beaucoup n'est pas rassurant, il est alarmant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Contrôler la codification et les allocations de coûts communs',
    intro: "Une pièce peut être juste et mal codée : c'est l'erreur la plus coûteuse, car elle fausse LINK. Ce contrôle porte sur les axes et sur les coûts communs, avec la table de correspondance et les notes d'allocation du module 01 comme références.",
    steps: [
      {
        title: 'Vérifier la cohérence compte ↔ rubrique ↔ bailleur',
        actions: [
          "Triez l'export par compte et vérifiez que chaque compte tombe dans les rubriques autorisées par la table de correspondance.",
          "Repérez toute ligne dont le bailleur ne finance pas la rubrique (case « NON ÉLIGIBLE » de la table).",
          "Repérez les libellés d'axes écrits de deux manières (« WASH » et « Wash Nord-Kivu »).",
        ],
      },
      {
        title: 'Vérifier les allocations',
        actions: [
          "Loyer de septembre (3 000 USD) : trois lignes 1 500 / 900 / 600 USD (clé ETP de la note NA-2026-01) ; somme = 100 %.",
          "Internet (850 USD) : 425 / 255 / 170 USD ; gardiennage et véhicule partagé selon leurs notes.",
          "Contrôlez que la caisse n'a pas aussi saisi un coût commun en entier sur un seul projet.",
        ],
      },
    ],
    example: {
      title: 'Résultat du contrôle de codification — septembre 2026',
      lines: [
        "Cohérence compte ↔ rubrique : 3 anomalies de rubrique (625 codé « Transport » au lieu de « Formation » sur 3 lignes d'atelier, 480 USD au total) → à corriger",
        "Allocations : loyer 1 500 + 900 + 600 = 3 000 ✔ — internet 425 + 255 + 170 = 850 ✔",
        "Libellés d'axes : « Wash Nord-Kivu » trouvé 2 fois → à harmoniser",
      ],
    },
    result: "Une liste de lignes à recoder (avec ancienne et nouvelle imputation) et la confirmation que chaque coût commun du mois totalise 100 % de sa facture.",
    pitfall: "Valider « parce que les totaux sont bons ». Une balance équilibrée ne prouve ni le bon bailleur ni la bonne rubrique : seul le contrôle des axes le prouve.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Détecter les doublons',
    intro: "Une facture saisie deux fois par deux personnes ou sous deux numéros gonfle les dépenses et fausse le disponible de LINK. Le contrôle se fait par formule sur l'export, puis se confirme sur la pièce. Entrée : l'export des écritures de septembre avec colonnes Fournisseur, Montant, Date et N° de pièce.",
    steps: [
      {
        title: 'Ajouter une colonne de contrôle temporaire',
        actions: [
          "Dans l'export (pas dans SAGA), ajoutez à droite une colonne « Contrôle doublon ».",
          "Saisissez =NB.SI.ENS($D$2:$D$425;D2;$E$2:$E$425;E2)  où D = fournisseur et E = montant (anglais : =COUNTIFS($D$2:$D$425,D2,$E$2:$E$425,E2)) ; recopiez vers le bas.",
          "Filtrez les valeurs supérieures à 1.",
        ],
      },
      {
        title: 'Confirmer ou écarter',
        actions: [
          "Ouvrez les pièces des lignes à valeur 2 : même numéro de facture = doublon ; numéros différents = deux achats réels.",
          "Comparez aussi les n° de pièce proches (« F.5127 » et « F 5127 »).",
          "Pour un doublon confirmé, ne supprimez rien : préparez l'extourne (procédure 4 et module 01).",
        ],
      },
    ],
    example: {
      title: 'Doublon trouvé — facture 5127 de 340,00 USD',
      lines: [
        "Ligne 1 : 28/09/2026 | Mont-Goma Carburants | 340,00 | F.5127 | saisie par Patrick K.",
        "Ligne 2 : 30/09/2026 | Mont-Goma Carburants | 340,00 | F 5127 | saisie par l'assistant comptable",
        "Pièce : une seule facture, un seul bon BC-carb-118 → doublon confirmé",
        "Action : extourner la ligne 2 de −340,00 (REG-2026-011), conserver la ligne 1 qui porte la pièce jointe.",
      ],
    },
    result: "La liste des doublons confirmés avec leur preuve, les écritures d'extourne préparées, et la colonne de contrôle supprimée de l'export classé.",
    tip: "Gardez toujours la ligne qui porte la pièce jointe et le bon axe ; extournez l'autre. Chaque extourne reçoit un numéro de régularisation unique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Contrôler rapprochements et balance, puis tenir le registre de validation',
    intro: "La validation se termine par deux preuves de cohérence (rapprochements, balance) et par un registre qui garde la mémoire de ce que vous avez trouvé. C'est ce registre que Grace M. lira avant de signer.",
    steps: [
      {
        title: 'Vérifier les rapprochements et la balance',
        actions: [
          "Rapprochement bancaire de septembre (module 04) : solde de SAGA = solde du relevé ± éléments en suspens listés.",
          "Rapprochement de caisse (module 03) : solde de SAGA = comptage physique signé d'Esther N.",
          "Balance : total débit = total crédit ; comptes d'attente de classe 4 soldés ou justifiés ; aucun solde créditeur anormal en caisse.",
        ],
      },
      {
        title: 'Tenir le registre de validation',
        actions: [
          "Créez un tableau : N°, pièce ou écriture, anomalie, correction prévue, responsable, échéance, statut (ouvert, corrigé, accepté).",
          "Faites-le relire par Grace M. avant la clôture : toute anomalie ouverte doit être corrigée ou acceptée par écrit.",
        ],
      },
    ],
    example: {
      title: 'Registre de validation — septembre 2026 (extrait)',
      lines: [
        "V-01 | BC-2026-088 | pièce non signée | obtenir la signature de Patrick K. | vendredi 9/10 | ouvert",
        "V-02 | ACH-2026-0931 | facture 5127 saisie deux fois | extourne −340,00 REG-2026-011 | vous | corrigé le 8/10",
        "V-03 | 3 lignes atelier | rubrique Transport au lieu de Formation, 480 USD | recodage REG-2026-012 | vous | corrigé le 8/10",
        "V-04 | caisse | écart de comptage −35,00 USD en cours d'analyse | Esther N. | vendredi 9/10 | ouvert → bloque la clôture",
      ],
    },
    result: "Un registre où chaque anomalie est datée, attribuée et soldée ; les anomalies ouvertes qui empêchent la clôture sont identifiées.",
    pitfall: "Clôturer avec une anomalie bloquante « ouverte » en espérant la régler le mois suivant. Une anomalie non soldée devient une correction après clôture, bien plus coûteuse (procédure 4).",
  },

  // ─────────────── PROCÉDURE 3 — Clôturer, verrouiller et archiver ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: 'Ouvrir le gabarit et remplir la section 1 « Période concernée »',
    intro: "Le gabarit gabarit-journal-cloture-mensuelle.docx est la fiche de contrôle qui garantit qu'aucune étape de clôture n'est oubliée avant le verrouillage. Il contient : une section 1 Période concernée, une section 2 Checklist de clôture (5 lignes), une section 3 Verrouillage de la période, une section 4 Validation. Une page, un mois, un journal. Fil rouge : clôture de septembre 2026.",
    steps: [
      {
        title: 'Créer le journal du mois',
        actions: [
          "Ouvrez gabarit-journal-cloture-mensuelle.docx et enregistrez-le immédiatement sous KAS_Journal-cloture_2026-09.docx.",
          "Lisez l'objectif en tête : « garantir qu'aucune étape de clôture mensuelle n'est oubliée avant le verrouillage de la période comptable ».",
        ],
      },
      {
        title: 'Remplir la section 1',
        actions: [
          "Dans le tableau de la section 1, case « Mois / année » : remplacez le texte grisé par « Septembre 2026 ».",
          "Case « Responsable de la clôture » : votre nom et votre fonction (Finance Officer) ; si le Finance Manager exécute la clôture dans le système, écrivez son nom et le vôtre pour la préparation.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie',
      lines: [
        "Mois / année : Septembre 2026",
        "Responsable de la clôture : [votre nom], Finance Officer — verrouillage exécuté par Grace M., Finance Manager",
        "Nom du fichier : KAS_Journal-cloture_2026-09.docx",
      ],
    },
    result: "Un journal de clôture ouvert, nommé selon la convention, dont la section 1 identifie sans ambiguïté le mois et le responsable.",
    tip: "Le gabarit se remplit en deux temps : avant la clôture (section 1 et lignes 1 à 3 de la checklist), puis immédiatement après le verrouillage (lignes 4 et 5, section 3, signatures). La section 4 ne se signe que lorsque tout est « Oui ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Checklist lignes 1 et 2 : rapprochements bancaires et de caisse',
    intro: "Les deux premières questions de la checklist portent sur les rapprochements : « Rapprochements bancaires du mois effectués et validés ? » et « Rapprochements de caisse du mois effectués et validés ? ». Répondez toujours par Oui ou Non, la date et la référence du document : « Oui » seul ne prouve rien.",
    steps: [
      {
        title: 'Répondre à la ligne 1 (banque)',
        actions: [
          "Ouvrez le rapprochement bancaire de septembre signé (module 04) et relevez sa référence, sa date et le nom du valideur.",
          "À la fin de la ligne 1 de la checklist, écrivez : Oui — date — référence — validé par.",
          "Si un élément en suspens dépasse 30 jours, écrivez-le : il se justifie, il ne se cache pas.",
        ],
      },
      {
        title: 'Répondre à la ligne 2 (caisse)',
        actions: [
          "Ouvrez le procès-verbal de comptage de fin de mois signé d'Esther N. et de Grace M.",
          "Comparez le solde du comptage au solde SAGA du compte de caisse : écart 0,00 attendu.",
          "Si l'écart n'est pas nul, écrivez « Non » et décrivez : la période NE se verrouille pas.",
        ],
      },
    ],
    example: {
      title: 'Lignes 1 et 2 remplies (vendredi 9/10/2026, après correction de l\'écart)',
      lines: [
        "Rapprochements bancaires du mois effectués et validés ? — Oui — 08/10/2026 — RB-BQ-2026-09, validé par Grace M. ; 2 virements en suspens (3 200 USD) datés du 29/09, justifiés",
        "Rapprochements de caisse du mois effectués et validés ? — Oui — 09/10/2026 — PV CA-2026-09 signé Esther N. et Grace M. ; écart initial de −35,00 USD expliqué (reçu non saisi PC-0947) et corrigé",
      ],
    },
    result: "Deux lignes de checklist qui renvoient chacune à un document signé daté, retrouvable en moins d'une minute.",
    pitfall: "Répondre « Oui » en cochant sans avoir le document en main. Le jour de l'audit, c'est la référence qui compte, pas la case.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Checklist ligne 3 : toutes les écritures du mois sont saisies',
    intro: "La ligne 3 pose la question « Toutes les écritures du mois saisies dans SAGA ? ». C'est la plus difficile à prouver, car on ne voit pas ce qui n'a pas été saisi. Vous le démontrez par la numérotation et par la coupure (cut-off).",
    steps: [
      {
        title: 'Prouver la complétude par les numéros',
        actions: [
          "Sortez la liste des numéros de pièces du mois par journal : la séquence doit être continue (PC-0901 à PC-0947 sans trou).",
          "Comparez le dernier numéro du classeur papier au dernier numéro saisi.",
          "Listez les pièces reçues mais non saisies et les pièces annulées (un numéro annulé se justifie par écrit).",
        ],
      },
      {
        title: 'Traiter la coupure de fin de mois',
        actions: [
          "Repérez les factures de septembre reçues début octobre : saisissez-les en septembre (charges à payer) tant que la période est ouverte.",
          "Repérez les engagements de septembre sans facture (contrats signés, salaires courus) : ils vont au registre des engagements, pas en dépense.",
          "Vérifiez les avances terrain non justifiées au 30/09 (module 03).",
        ],
      },
    ],
    example: {
      title: 'Ligne 3 remplie',
      lines: [
        "Toutes les écritures du mois saisies dans SAGA ? — Oui — 09/10/2026 — séquence caisse PC-0901 à PC-0947 continue ; dernière facture ACH-2026-0952 ; 3 factures de septembre reçues le 5/10 passées en charges à payer (1 420 USD) ; 0 pièce en attente",
      ],
    },
    result: "Une réponse qui s'appuie sur des séquences continues et sur la liste des factures de coupure, pas sur une impression.",
    tip: "Instaurez la règle : toute pièce reçue après J + 3 mais datée du mois est saisie dans le mois TANT QUE la période est ouverte. Après le verrouillage, elle passera par la procédure 4.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Clôturer et verrouiller la période, puis remplir la section 3',
    intro: "La clôture s'accompagne toujours d'un verrouillage : jamais l'un sans l'autre. Une clôture annoncée mais non verrouillée n'empêche personne de modifier une écriture après coup, sans trace visible. Seule la personne habilitée (Grace M.) exécute cette étape.",
    steps: [
      {
        title: 'Exécuter la clôture et le verrouillage',
        actions: [
          "Vérifiez que les lignes 1 à 3 de la checklist sont à « Oui » et que le registre de validation n'a plus d'anomalie bloquante ouverte.",
          "Grace M. ouvre le menu de gestion des périodes (« Clôtures » selon la version), sélectionne septembre 2026 et passe le statut à « clôturée ».",
          "Elle active le verrouillage pour tous les utilisateurs (les droits de réouverture sont réservés au Finance Manager et à l'administrateur).",
          "Notez la date et l'heure exactes affichées par le système.",
        ],
      },
      {
        title: 'Tester le verrou, puis remplir la section 3',
        actions: [
          "Essayez de saisir, avec votre propre compte, une écriture datée du 15/09/2026 : le système doit la REFUSER.",
          "Faites une capture de l'écran de refus et de l'écran de statut de la période.",
          "Section 3, ligne « Période comptable verrouillée dans le système (date et heure) ? » : répondez Oui avec la date, l'heure et l'identité de l'exécutant.",
        ],
      },
    ],
    example: {
      title: 'Section 3 remplie',
      lines: [
        "Période comptable verrouillée dans le système (date et heure) ? — Oui — vendredi 09/10/2026 à 16 h 42 — période 2026-09 clôturée et verrouillée par Grace M. ; test de saisie datée 15/09 refusé (capture jointe)",
      ],
    },
    result: "Un verrouillage daté à la minute, testé par un refus de saisie, et prouvé par une capture d'écran classée avec le journal.",
    pitfall: "Annoncer « septembre est clôturé » par e-mail avant d'avoir verrouillé. Tant que le test de saisie n'est pas refusé, la période est ouverte, quoi qu'on ait dit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Éditer et archiver les journaux (ligne 4 de la checklist)',
    intro: "La ligne 4 demande : « Journaux du mois édités et archivés ? ». Ce sont les journaux édités après clôture, et non une capture d'écran du logiciel, qui font foi devant un auditeur externe. Vous les éditez juste après le verrouillage, tant que la période est figée.",
    steps: [
      {
        title: 'Éditer les journaux définitifs',
        actions: [
          "Dans le menu d'éditions, sélectionnez la période clôturée 2026-09 et éditez : journal d'achats, de banque, de caisse, d'opérations diverses, de paie, grand livre et balance générale.",
          "Exportez chaque état en PDF ; contrôlez que le total de chaque journal correspond au total de la balance.",
        ],
      },
      {
        title: 'Archiver selon une règle fixe',
        actions: [
          "Créez le dossier KAS_Archive-comptable/2026/09_Septembre/ dans l'espace partagé.",
          "Nommez chaque PDF : 2026-09_Journal-Achats_definitif_edite-2026-10-09.pdf.",
          "Imprimez et classez une copie papier selon la politique de votre organisation, puis passez le dossier en lecture seule.",
        ],
      },
    ],
    example: {
      title: 'Archive de septembre 2026 — contenu du dossier',
      lines: [
        "2026-09_Journal-Achats_definitif_edite-2026-10-09.pdf — 118 écritures — total 318 640,25 USD",
        "2026-09_Journal-Banque / Caisse / OD / Paie — même convention de nommage",
        "2026-09_Grand-livre_et_Balance_definitif_edite-2026-10-09.pdf — débit = crédit",
        "Ligne 4 : Oui — 09/10/2026 à 17 h 05 — 7 états PDF archivés, dossier en lecture seule",
      ],
    },
    result: "Sept états PDF datés dans un dossier d'archive normalisé, dont les totaux concordent avec la balance, et la ligne 4 de la checklist renseignée.",
    tip: "Conservez aussi, dans le même dossier, le registre de validation et la capture du verrouillage : en un seul dossier, l'auditeur voit le mois entier de bout en bout.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Mettre à jour le BFU (ligne 5), signer la section 4 et classer',
    intro: "La ligne 5 demande : « Suivi budgétaire (BFU) mis à jour pour ce mois dans LINK / Excel ? ». Elle ne peut être honnêtement cochée qu'après la clôture, puisque le BFU reflète SAGA. La section 4 prouve ensuite que le mois a été clôturé par vous et validé par le Finance Manager.",
    steps: [
      {
        title: 'Mettre à jour le BFU et répondre à la ligne 5',
        actions: [
          "Vérifiez que LINK a bien repris la période clôturée, puis extrayez le BFU au 30/09/2026 (procédure 7).",
          "Rapprochez le total dépensé du BFU du grand livre (procédure 6).",
          "Ligne 5 : Oui — date — nom du fichier BFU.",
        ],
      },
      {
        title: 'Signer et classer',
        actions: [
          "Section 4, case « Clôturé par (nom, fonction, date) » : votre nom, votre fonction et la date, puis signature.",
          "Case « Validé par (Finance Manager, date) » : Grace M. date et signe après avoir relu les cinq lignes et la section 3.",
          "Exportez en PDF, nommez KAS_Journal-cloture_2026-09_signe.pdf et classez-le dans le dossier d'archive du mois.",
        ],
      },
    ],
    example: {
      title: 'Ligne 5 et section 4 remplies',
      lines: [
        "Suivi budgétaire (BFU) mis à jour pour ce mois dans LINK / Excel ? — Oui — 12/10/2026 — KAS_BFU_WSH-ADL_arrete-2026-09-30_extrait-2026-10-12_DEFINITIF.xlsx",
        "Clôturé par : [votre nom], Finance Officer, 12/10/2026",
        "Validé par : Grace M., Finance Manager, 12/10/2026",
        "Fichier classé : KAS_Journal-cloture_2026-09_signe.pdf",
      ],
    },
    result: "Un journal de clôture entièrement à « Oui », signé de deux personnes, daté, converti en PDF et classé avec les journaux du mois.",
    pitfall: "Faire signer le Finance Manager avant que les cinq lignes soient renseignées « pour gagner du temps ». Un journal signé incomplet est pire que pas de journal : il atteste ce qui n'a pas été fait.",
  },

  // ─────────────── PROCÉDURE 4 — Corriger après clôture ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Qualifier l\'erreur et choisir la voie : période ouverte ou réouverture',
    intro: "Une erreur découverte dans un mois verrouillé est inévitable. La règle : on ne touche jamais au passé en silence. Dans 9 cas sur 10, la correction se fait par une écriture datée de la période OUVERTE. La réouverture est l'exception. Fil rouge : vous découvrez que la ligne de 18 400 USD (Transport, 18/08/2026) a été saisie sans bailleur, et que le doublon de 2 760 USD du 11/08 a été saisi deux fois, dans le mois d'août déjà verrouillé.",
    steps: [
      {
        title: 'Qualifier l\'erreur',
        actions: [
          "Notez : écriture d'origine, période, montant, axes faux, imputation correcte, cause, preuves (module 01, procédure 7).",
          "Mesurez l'impact : un rapport a-t-il déjà été transmis avec ce chiffre ? un état financier officiel est-il concerné ?",
        ],
      },
      {
        title: 'Appliquer l\'arbre de décision',
        actions: [
          "Impact limité, période courante ouverte : extourne + recodage datés d'aujourd'hui, avec numéro REG-… et mention dans le rapport suivant. C'est la voie par défaut.",
          "Réouverture : seulement si le rapport ou l'état officiel de la période clôturée doit lui-même être corrigé à la source (erreur système, exigence écrite d'un bailleur, clôture annuelle avant audit).",
          "Dans tous les cas, informez Grace M. avant d'agir.",
        ],
      },
    ],
    example: {
      title: 'Décision pour les deux anomalies d\'août',
      lines: [
        "Anomalie 1 : 18 400 USD sans bailleur (août) → voie A : extourne + recodage daté de septembre, période encore ouverte jusqu'au 9/10 → REG-2026-013",
        "Anomalie 2 : doublon de 2 760 USD (WSH / Agence Delta, facture FOU-2026-221) → voie A : extourne de −2 760 en septembre → REG-2026-014",
        "Réouverture : non nécessaire ; aucun rapport officiel d'août n'est à modifier",
      ],
    },
    result: "Une décision écrite pour chaque erreur : voie A (période ouverte) ou voie B (réouverture), avec sa justification et l'impact sur les rapports transmis.",
    pitfall: "Rouvrir août « pour faire plus propre ». Une réouverture est un événement d'audit : elle ne se justifie que lorsqu'aucune autre voie n'existe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Rédiger la demande de réouverture écrite',
    intro: "Quand la voie B s'impose, personne ne déverrouille sur un simple message oral. La demande est écrite, datée, motivée et limitée dans le temps. Exemple de cas qui la justifie réellement : une erreur d'import des taux de change qui fausse des écritures d'août sur un rapport devant être corrigé.",
    steps: [
      {
        title: 'Remplir la demande',
        actions: [
          "Référence unique : DR-2026-001.",
          "Période concernée, écritures concernées (numéros), nature de l'erreur, montant en jeu.",
          "Motif de la réouverture ET motif de l'impossibilité d'une correction en période ouverte.",
          "Impact sur les rapports déjà transmis et sur LINK.",
          "Durée maximale de réouverture et personne autorisée à écrire (une seule).",
        ],
      },
      {
        title: 'Envoyer pour approbation',
        actions: [
          "Adressez la demande à Grace M., avec les pièces de preuve.",
          "Attendez l'approbation écrite avant toute action : aucune réouverture sur oral, même urgent.",
        ],
      },
    ],
    example: {
      title: 'Demande de réouverture DR-2026-001',
      lines: [
        "Période : 2026-08 — Écritures : 14 écritures du journal de banque (taux importés le 11/08/2026 : 2 800 CDF/USD au lieu de 2 780)",
        "Montant en jeu : 1 260 USD de différence de change mal enregistrée — Impact : rapport T3 de Fonds Horizon en préparation, LINK (ligne 5.1)",
        "Pourquoi pas en période ouverte : la différence modifierait les chiffres d'août déjà repris dans le rapport intermédiaire",
        "Durée : 24 h (jeudi 15/10 de 8 h à 20 h) — Seule personne autorisée à écrire : le Finance Officer",
        "Demandé par : Finance Officer, 14/10/2026 — Approuvé par : Grace M., 14/10/2026 (e-mail joint)",
      ],
    },
    result: "Une demande datée, référencée et approuvée par écrit, qui précise qui peut écrire, sur quelles écritures, pendant combien de temps.",
    tip: "Une réouverture limitée à une écriture ou à un journal, plutôt qu'à tout le mois, réduit le risque d'une modification involontaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Exécuter la réouverture limitée et passer la correction',
    intro: "La réouverture est une fenêtre courte, ouverte et refermée par la même personne habilitée, avec un journal d'audit du système qui enregistre qui a fait quoi. Vous restez dans le périmètre de la demande, pas une écriture de plus.",
    steps: [
      {
        title: 'Rouvrir dans le périmètre approuvé',
        actions: [
          "Grace M. (ou l'administrateur) déverrouille la période 2026-08 à l'heure convenue, uniquement pour votre identifiant.",
          "Faites une capture de l'écran de statut avant et après.",
        ],
      },
      {
        title: 'Passer la correction par extourne + recodage',
        actions: [
          "Extournez chaque écriture fautive (même compte, mêmes axes, montant négatif) et recodez-la au bon taux, avec le numéro DR-2026-001 / REG-2026-015 dans le libellé.",
          "Ne modifiez jamais une écriture d'origine : elle reste visible avec son erreur.",
          "Vérifiez la balance et le rapprochement bancaire après correction.",
        ],
      },
    ],
    example: {
      title: 'Journal de réouverture (extrait)',
      lines: [
        "15/10/2026 08:05 — Période 2026-08 déverrouillée pour [identifiant Finance Officer] par Grace M. (DR-2026-001)",
        "15/10/2026 09:20–10:40 — 14 extournes + 14 recodages au taux de 2 780, libellé « REG-2026-015 – DR-2026-001 »",
        "15/10/2026 11:15 — Balance équilibrée ; rapprochement bancaire d'août inchangé (écart 0,00)",
      ],
    },
    result: "Des extournes et recodages référencés dans le périmètre de la demande, une balance équilibrée et un journal d'accès qui raconte la réouverture heure par heure.",
    pitfall: "Profiter de la fenêtre ouverte pour corriger « aussi » autre chose. Tout ce qui n'est pas dans la demande est une écriture non autorisée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Re-clôturer, re-verrouiller, ré-éditer et informer',
    intro: "Une réouverture n'est terminée que lorsque la période est de nouveau figée, que les états sont ré-édités et que chacun est informé. Sans ces trois gestes, la clôture initiale est invalidée sans que personne le sache.",
    steps: [
      {
        title: 'Refermer et prouver',
        actions: [
          "Re-clôturez et re-verrouillez 2026-08 le plus tôt possible, sans attendre la fin de la durée autorisée ; testez le refus d'une saisie.",
          "Éditez de nouveau les journaux et la balance d'août : nommez-les « v2 » ; renommez les anciens « remplacé par v2 » mais gardez-les.",
        ],
      },
      {
        title: 'Documenter et informer',
        actions: [
          "Dans le journal de clôture d'août, ajoutez une note : « Rouvert le 15/10/2026 de 8 h 05 à 11 h 30 (DR-2026-001), reverrouillé à 11 h 32 ».",
          "Mettez à jour LINK et le BFU ; informez Grace M. et, si un rapport était déjà transmis, le bailleur concerné, avec la note explicative.",
        ],
      },
    ],
    example: {
      title: 'Note ajoutée au journal de clôture d\'août 2026',
      lines: [
        "Réouverture DR-2026-001 : période rouverte le 15/10/2026 à 8 h 05 par Grace M., reverrouillée le 15/10/2026 à 11 h 32.",
        "Objet : correction de 14 écritures au taux 2 780 (REG-2026-015). Journaux d'août ré-édités en v2 le 15/10/2026 ; v1 conservés, marqués « remplacés ».",
        "BFU Fonds Horizon mis à jour le 15/10/2026 ; information transmise au bailleur le 16/10/2026.",
      ],
    },
    result: "Une période de nouveau verrouillée et testée, des journaux v2 archivés à côté des v1, une note dans le journal de clôture et une information écrite aux personnes concernées.",
    tip: "Tenez un registre des réouvertures (n° DR, période, durée, motif, approbateur). Un auditeur qui le trouve vide à la fin de l'année se demande s'il est tenu ; un registre rempli et clair est un signe de maîtrise.",
  },

  // ─────────────── PROCÉDURE 5 — Charger le budget approuvé dans LINK ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Préparer la fiche de chargement à partir du budget signé',
    intro: "Le budget chargé dans LINK est le fondement de tout le suivi : un écart de saisie à cette étape fausse chaque BFU jusqu'à sa correction. Le chargement se fait dès la signature du contrat de financement, à partir de la version SIGNÉE et du dernier avenant. Fil rouge, rejoué à la date où cela s'est fait (début janvier 2026) : le budget 2026 d'Agence Delta (projet WASH, 310 000 USD) vient d'être signé et vous le chargez dans LINK.",
    steps: [
      {
        title: 'Réunir les documents de référence',
        actions: [
          "Récupérez la dernière version signée du budget et ses avenants (dossier « 00_Budgets_signés » du module 01).",
          "Notez la devise, la période d'éligibilité, le code du projet et les règles particulières de la convention (plafond de coûts de bureau, éligibilité du carburant, virements de lignes autorisés).",
        ],
      },
      {
        title: 'Construire la fiche ligne par ligne',
        actions: [
          "Créez un tableau Excel : code de ligne, intitulé EXACT du bailleur, montant approuvé, devise, période.",
          "Recopiez les intitulés mot pour mot : « C. Véhicules & carburant » n'est pas « Transport ».",
          "Calculez le total en bas de colonne : il doit égaler le total du budget signé.",
        ],
      },
    ],
    table: {
      columns: ['Code', 'Intitulé exact (Agence Delta)', 'Montant approuvé (USD)', 'Période'],
      rows: [
        ['A', 'Personnel projet', '74 400', 'janv.–déc. 2026'],
        ['B', 'Construction & réhabilitation', '150 000', 'janv.–déc. 2026'],
        ['C', 'Véhicules & carburant', '21 600', 'janv.–déc. 2026'],
        ['D', 'Coûts de bureau partagés', '27 000', 'janv.–déc. 2026'],
        ['E', 'Promotion hygiène & formation', '22 000', 'janv.–déc. 2026'],
        ['F', 'Suivi & redevabilité', '15 000', 'janv.–déc. 2026'],
        ['Total', 'Budget signé du 15/12/2025', '310 000', ''],
      ],
    },
    result: "Une fiche de chargement dont les six lignes totalisent 310 000 USD, rédigée avec les intitulés exacts du bailleur et la référence de la version signée.",
    pitfall: "Charger à partir du budget de proposition ou d'un tableau de suivi « arrangé ». Seule la version signée fait foi : les montants changent souvent en cours de négociation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Créer le projet et charger les lignes dans LINK',
    intro: "L'interface de LINK varie selon la version et la configuration de votre organisation ; la logique, elle, est constante : on crée l'enveloppe (projet + bailleur + période + devise), puis on charge les lignes. Si votre version propose un import par fichier modèle, préférez-le à la saisie manuelle : il évite les fautes de frappe.",
    steps: [
      {
        title: 'Créer l\'enveloppe du projet',
        actions: [
          "Ouvrez le menu de création de budget (souvent « Budgets » ou « Projets ») et créez le projet : code WSH, bailleur Agence Delta, devise USD, période 01/01/2026–31/12/2026.",
          "Reprenez exactement les codes analytiques utilisés dans SAGA pour le projet et le bailleur (WSH, ADL) : c'est ce qui permet à LINK de reconnaître les écritures.",
        ],
      },
      {
        title: 'Charger les lignes budgétaires',
        actions: [
          "Si un import est disponible, exportez le modèle vide de LINK, collez-y votre fiche (valeurs uniquement) et importez.",
          "Sinon, saisissez chaque ligne : code, intitulé, montant, en repartant de votre fiche et non de la mémoire.",
          "Enregistrez, puis ouvrez la vue du budget chargé : six lignes doivent apparaître.",
        ],
      },
    ],
    example: {
      title: 'Paramètres de chargement saisis dans LINK',
      lines: [
        "Projet : WSH — Bailleur : ADL (Agence Delta) — Devise : USD — Période : 01/01/2026 → 31/12/2026",
        "Version du budget : v1 signée le 15/12/2025 (aucun avenant à ce jour)",
        "Lignes chargées : A 74 400 | B 150 000 | C 21 600 | D 27 000 | E 22 000 | F 15 000",
        "Mode de chargement : import du modèle Excel de LINK, 6 lignes importées, 0 rejet",
      ],
    },
    result: "Un projet WSH / ADL créé avec ses six lignes chargées et ses codes analytiques identiques à ceux de SAGA.",
    tip: "Si votre version de LINK rejette l'import, lisez le message d'erreur : le plus souvent un code de ligne en double, un montant au format texte (« 74 400 » avec espace insécable) ou une devise non reconnue.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: 'Contrôler : le budget chargé doit être égal au budget signé',
    intro: "Un chargement non contrôlé est un chargement faux jusqu'à preuve du contraire. Le contrôle est rapide et il se fait par une deuxième paire d'yeux : la personne qui a chargé ne relit pas seule.",
    steps: [
      {
        title: 'Comparer total et lignes',
        actions: [
          "Extrayez le budget chargé de LINK (rapport de budget ou BFU avec dépensé = 0).",
          "Comparez le total à celui du budget signé, puis chaque ligne : code, intitulé et montant.",
          "Calculez un tableau d'écart : écart = chargé − signé ; chaque écart doit valoir 0.",
        ],
      },
      {
        title: 'Faire relire par un second agent',
        actions: [
          "Demandez à Grace M. ou à un collègue de refaire la comparaison de son côté, sans votre fiche.",
          "Faites-lui signer le tableau d'écart.",
        ],
      },
    ],
    example: {
      title: 'Tableau d\'écart — chargement Agence Delta',
      lines: [
        "A : signé 74 400 | chargé 74 400 | écart 0",
        "B : signé 150 000 | chargé 150 000 | écart 0",
        "C : signé 21 600 | chargé 21 600 | écart 0",
        "D : signé 27 000 | chargé 27 000 | écart 0",
        "E : signé 22 000 | chargé 22 000 | écart 0",
        "F : signé 15 000 | chargé 15 000 | écart 0",
        "Total : signé 310 000 | chargé 310 000 | écart 0 — contrôlé par Grace M. le 07/01/2026",
      ],
    },
    result: "Un tableau d'écart à 0 sur chaque ligne et sur le total, signé par un second contrôleur.",
    pitfall: "Contrôler le seul total. Deux erreurs de signe contraire sur deux lignes (+5 000 sur B, −5 000 sur C) laissent le total juste et faussent deux lignes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: 'Relier LINK à SAGA, tester sur une écriture réelle et documenter',
    intro: "LINK ne fonctionne que si chaque écriture de SAGA retrouve sa ligne budgétaire. Vous vérifiez ce lien par un test sur une vraie écriture, puis vous gardez la preuve du chargement et de sa version.",
    steps: [
      {
        title: 'Vérifier la correspondance et tester',
        actions: [
          "Ouvrez votre table de correspondance (module 01) : rubrique interne « Transport & carburant » = ligne C d'Agence Delta ; « Personnel » = ligne A, etc.",
          "Choisissez une écriture validée du projet (la facture de carburant ACH-2026-0012 de 310,00 USD du 12/01/2026, WSH / ADL / Transport & carburant).",
          "Dans LINK, vérifiez qu'elle apparaît bien sous la ligne C et que le dépensé de la ligne a augmenté de 310,00.",
        ],
      },
      {
        title: 'Documenter et versionner',
        actions: [
          "Rédigez la fiche de chargement : projet, bailleur, version du budget signé, date de chargement, auteur, contrôleur, total chargé.",
          "Classez-la avec le budget signé. À chaque avenant : créez la version 2, rechargez, recontrôlez, datez ; ne remplacez jamais en silence.",
        ],
      },
    ],
    example: {
      title: 'Fiche de chargement WSH / ADL',
      lines: [
        "Projet : WSH — Bailleur : Agence Delta — Budget signé v1 du 15/12/2025 : 310 000 USD",
        "Chargé le 07/01/2026 par [votre nom] ; contrôlé et signé par Grace M. (tableau d'écart à 0)",
        "Test de liaison : écriture ACH-2026-0012 (310,00 USD, carburant WASH) retrouvée sous la ligne C ✔",
        "Prochaine mise à jour : à la signature d'un éventuel avenant (nouvelle version v2, rechargement complet et recontrôle)",
      ],
    },
    result: "Un budget chargé, contrôlé, relié à SAGA par un test, et accompagné d'une fiche versionnée qu'un auditeur peut lire en une minute.",
    tip: "Un avenant qui modifie une seule ligne ne se saisit pas comme une simple modification de cellule : rechargez la version complète et recontrôlez le total, sinon la trace de la version précédente disparaît.",
  },


  // ─────────────── PROCÉDURE 6 — Suivre les dépenses dans LINK et alerter ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Rapprocher SAGA et LINK chaque semaine',
    intro: "LINK reflète SAGA : s'ils divergent, l'un des deux est faux ou en retard de synchronisation. Un écart non expliqué est un écart caché. Le contrôle prend dix minutes et se fait chaque vendredi, après le contrôle des axes de la procédure 1. Fil rouge, rejoué un mois plus tôt : vendredi 4 septembre 2026, cumul arrêté au 31/08 (8 mois sur 12).",
    steps: [
      {
        title: 'Comparer les totaux',
        actions: [
          "Dans SAGA, éditez le grand livre analytique cumulé par projet et bailleur au 31/08 (charges).",
          "Dans LINK, lisez le total dépensé de chaque projet à la même date d'arrêté.",
          "Calculez l'écart pour chaque projet : SAGA − LINK.",
        ],
      },
      {
        title: 'Expliquer chaque écart',
        actions: [
          "Écart nul : notez-le.",
          "Écart non nul : cherchez d'abord un décalage de synchronisation (écriture saisie après le dernier transfert), puis une écriture sans axe, puis une écriture sur un autre projet.",
          "Expliquez par écrit tout écart dans les 48 heures ; au-delà, signalez-le à Grace M.",
        ],
      },
    ],
    example: {
      title: 'Rapprochement au 31/08/2026 — dépensé cumulé depuis janvier (USD)',
      lines: [
        "WASH / Agence Delta : SAGA 179 360,00 | LINK 179 360,00 | écart 0,00",
        "Nutrition / Fonds Horizon : SAGA 241 360,00 | LINK 238 960,00 | écart 2 400,00",
        "Santé / Fondation Sigma : SAGA 166 940,00 | LINK 166 940,00 | écart 0,00",
        "Cause de l'écart Nutrition : facture de 2 400 USD saisie le 31/08 à 17 h 40, après le transfert de 16 h → rattrapage au prochain transfert (lundi 7/09), vérifié ✔",
      ],
    },
    result: "Un tableau de rapprochement hebdomadaire daté, où chaque écart est à zéro ou expliqué par une cause vérifiée.",
    pitfall: "Penser « LINK se met à jour tout seul, donc il est juste ». S'il se met à jour, c'est à partir de ce qui est saisi : une écriture sans bailleur ne lui parvient pas au bon endroit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Lire le disponible réel d\'une ligne : budget − dépensé − engagé',
    intro: "Le disponible d'une ligne n'est pas ce qui reste en caisse : c'est le budget, moins ce qui est déjà dépensé, moins ce qui est déjà engagé (contrats et commandes signés). Avec LINK, vous lisez ces trois colonnes ; votre rôle est de les comprendre et de les vérifier.",
    steps: [
      {
        title: 'Lire les colonnes du suivi',
        actions: [
          "Ouvrez la vue de suivi du projet WSH / ADL au 31/08/2026.",
          "Pour la ligne C « Véhicules & carburant », relevez : budget, dépensé à date, engagé, disponible, taux de consommation.",
          "Vérifiez que le disponible affiché est égal à budget − dépensé − engagé (recalcul à la main).",
        ],
      },
      {
        title: 'Comparer au temps écoulé',
        actions: [
          "Calculez la part du temps écoulé : à fin août, 8 mois sur 12 = 66,7 %.",
          "Comparez-la au taux de consommation : une ligne à 71,1 % de consommation pour 66,7 % du temps est en avance de rythme.",
        ],
      },
    ],
    table: {
      columns: ['Ligne C (ADL) au 31/08/2026', 'Montant (USD)', 'Calcul'],
      rows: [
        ['Budget chargé', '21 600', 'Budget signé'],
        ['Dépensé à date', '15 360', 'Grand livre, rapproché de LINK'],
        ['Engagé (BC-2026-071, entretien annuel du véhicule)', '2 400', 'Bon de commande signé, non facturé'],
        ['Disponible réel', '3 840', '21 600 − 15 360 − 2 400'],
        ['Taux dépensé / temps écoulé', '71,1 % / 66,7 %', '15 360 ÷ 21 600 ; 8 ÷ 12'],
      ],
    },
    result: "Pour la ligne examinée, un disponible vérifié à la main et un taux de consommation comparé au temps écoulé.",
    tip: "Quand le disponible d'une ligne est tiré vers zéro par des engagements, c'est le signal le plus précoce du dépassement : regardez toujours dépensé ET engagé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Projeter la fin de période et classer les lignes',
    intro: "Un disponible positif aujourd'hui ne dit rien sur la fin d'année. La projection au rythme actuel transforme le chiffre en décision. Elle se fait ligne par ligne, avec des seuils fixés d'avance et une règle simple : toute ligne dont la projection dépasse le budget passe au rouge, quel que soit son taux.",
    steps: [
      {
        title: 'Projeter au rythme actuel',
        actions: [
          "Calculez le rythme mensuel moyen : dépensé à date ÷ nombre de mois écoulés. Ligne C : 15 360 ÷ 8 = 1 920 USD par mois.",
          "Multipliez par les mois restants : 1 920 × 4 = 7 680 USD.",
          "Projection de fin de période = dépensé + engagé + rythme × mois restants : 15 360 + 2 400 + 7 680 = 25 440 USD.",
          "Comparez au budget : 25 440 − 21 600 = 3 840 USD de dépassement prévisionnel (17,8 %).",
        ],
      },
      {
        title: 'Classer toutes les lignes',
        actions: [
          "Calculez pour chaque ligne le taux (dépensé + engagé) ÷ budget.",
          "Seuils internes : vert si moins de 80 %, orange de 80 % à 90 %, rouge au-delà de 90 %.",
          "Règle de la projection : projection supérieure au budget → rouge. Les lignes sensibles (carburant, personnel) passent en tête de liste.",
        ],
      },
    ],
    table: {
      columns: ['Ligne ADL', 'Budget', 'Dépensé + engagé', 'Taux', 'Projection fin 2026', 'Statut'],
      rows: [
        ['A. Personnel projet', '74 400', '49 600', '66,7 %', '74 400', 'Vert'],
        ['B. Construction & réhabilitation', '150 000', '107 500', '71,7 %', '145 500', 'Vert'],
        ['C. Véhicules & carburant', '21 600', '17 760', '82,2 %', '25 440', 'Rouge (projection > budget)'],
        ['D. Coûts de bureau partagés', '27 000', '17 600', '65,2 %', '26 400', 'Vert'],
        ['E. Promotion hygiène & formation', '22 000', '14 500', '65,9 %', '20 900', 'Vert'],
        ['F. Suivi & redevabilité', '15 000', '8 000', '53,3 %', '12 000', 'Vert'],
      ],
    },
    result: "Un tableau de seuils sur les six lignes et, pour la ligne rouge, une projection chiffrée de fin de période (25 440 USD pour 21 600 de budget).",
    pitfall: "Utiliser le taux moyen du projet (57,9 %) pour se rassurer. La moyenne cache la ligne en dépassement : on pilote ligne par ligne. Et un taux orange (82,2 %) sans projection laisse croire à une marge qui n'existe pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Alerter par écrit, puis corriger à la source',
    intro: "Une ligne rouge se signale AVANT qu'elle soit épuisée, pas après. L'alerte est écrite, chiffrée, adressée à la personne qui décide, avec des options. Quant aux erreurs de codification que le suivi révèle, elles se corrigent dans SAGA, jamais dans LINK ni dans Excel.",
    steps: [
      {
        title: 'Rédiger l\'alerte',
        actions: [
          "Destinataire : Joël B., coordinateur WASH, en copie Grace M.",
          "Objet : la ligne, le bailleur, la situation en une phrase.",
          "Corps : les chiffres (budget, dépensé, engagé, disponible, projection), l'écart prévisionnel et deux ou trois options (réduire, virer d'une autre ligne, demander un avenant).",
          "Fixez une date de réponse.",
        ],
      },
      {
        title: 'Corriger à la source et suivre',
        actions: [
          "Si le suivi révèle une écriture mal codée, corrigez-la dans SAGA (procédure 4) puis laissez LINK se rafraîchir.",
          "Inscrivez l'alerte dans un journal des alertes et relancez à la date convenue.",
        ],
      },
    ],
    example: {
      title: 'E-mail d\'alerte du 4/09/2026 — ligne C Agence Delta',
      lines: [
        "Objet : Alerte budget — Agence Delta, ligne C « Véhicules & carburant » — dépassement prévisionnel de 3 840 USD",
        "Au 31/08 : budget 21 600 | dépensé 15 360 (71,1 %, pour 66,7 % du temps) | engagé 2 400 | disponible 3 840. Rythme de 1 920 USD/mois : projection 25 440 USD en fin d'année.",
        "Options : (1) limiter les trajets non prioritaires de 15 % ; (2) virer 4 000 USD depuis la ligne F, avec accord écrit du bailleur (module 02) ; (3) mutualiser le véhicule LC-03 avec Santé.",
        "Merci de me donner votre décision d'ici le vendredi 18/09 pour préparer la demande au bailleur.",
      ],
    },
    result: "Une alerte datée, chiffrée, avec options et échéance, adressée au décideur avec le Finance Manager en copie.",
    tip: "Un virement de ligne ou un avenant demande l'accord écrit du bailleur : ne laissez jamais passer en comité un dépassement que vous avez vu venir trois mois plus tôt.",
  },

  // ─────────────── PROCÉDURE 7 — Extraire et diffuser un BFU ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 4',
    title: 'Cadrer la demande de BFU : périmètre, date d\'arrêté, statut',
    intro: "Un BFU extrait sans cadrage est refait trois fois. Cinq questions, posées avant d'ouvrir LINK, suffisent. Fil rouge : le mardi 6 octobre, Joël B. vous demande le BFU du projet WASH « à fin septembre » pour sa réunion de coordination de demain.",
    steps: [
      {
        title: 'Poser les cinq questions',
        actions: [
          "Pour qui et pour quoi (comité, bailleur, coordination interne) ?",
          "Quel périmètre : quel projet, quel bailleur, quelles rubriques ?",
          "Quelle date d'arrêté et quelle devise ?",
          "Quel niveau de fiabilité attendu : définitif (mois clôturé) ou provisoire ?",
          "Quel format et quelle échéance ?",
        ],
      },
      {
        title: 'Vérifier l\'état de la période',
        actions: [
          "Ouvrez le statut des périodes : août est clôturé et verrouillé (9/09) ; septembre est encore ouvert, clôture prévue le 9/10.",
          "Proposez à Joël un BFU DÉFINITIF arrêté au 31/08 aujourd'hui, et un BFU arrêté au 30/09 après le verrouillage (12/10).",
        ],
      },
    ],
    example: {
      title: 'Fiche de demande de BFU',
      lines: [
        "Demandeur : Joël B. — Usage : réunion de coordination WASH du 7/10, 14 h",
        "Périmètre : projet WSH / Agence Delta, six lignes — Devise : USD",
        "Date d'arrêté retenue : 31/08/2026 (dernier mois clôturé) — Statut : DÉFINITIF ; second BFU arrêté au 30/09 après le 9/10",
        "Format : Excel — Échéance : mardi 6/10, 17 h",
      ],
    },
    result: "Une fiche de demande de BFU qui fixe le périmètre, la date d'arrêté, le statut définitif ou provisoire et l'échéance.",
    pitfall: "Extraire « tout le projet à date » sans dire la date. La date d'arrêté est la première chose qu'on vous demandera si le chiffre est contesté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 4',
    title: 'Contrôler les prérequis et lancer l\'extraction',
    intro: "Un BFU est le reflet de ce qui est dans SAGA et dans LINK à l'instant T : s'ils ne sont pas à jour, le BFU l'est encore moins. Trois vérifications avant de cliquer sur « Extraire ».",
    steps: [
      {
        title: 'Vérifier les trois prérequis',
        actions: [
          "Rapprochement SAGA ↔ LINK à la date d'arrêté (procédure 6, étape 1) : écart nul ou expliqué.",
          "Version du budget chargé : la dernière version signée (v1, aucun avenant).",
          "Contrôle d'axes vides (procédure 1, étape 5) : 0 ligne sans bailleur sur le périmètre.",
        ],
      },
      {
        title: 'Lancer l\'extraction',
        actions: [
          "Ouvrez le menu de reporting de LINK, rapport « Suivi budgétaire (BFU) ».",
          "Paramétrez : projet WSH, bailleur ADL, date d'arrêté 31/08/2026, devise USD.",
          "Exportez en Excel ; ne retouchez pas ce fichier : c'est l'extrait brut d'origine.",
        ],
      },
    ],
    example: {
      title: 'Journal d\'extraction',
      lines: [
        "06/10/2026 15 h 10 — Rapprochement SAGA ↔ LINK au 31/08 : écart 0,00 — Budget : v1 du 15/12/2025",
        "Axes vides sur WSH : 0 — BFU paramétré : WSH / ADL / arrêté 31/08/2026 / USD",
        "Fichier exporté : BFU_brut.xlsx (6 lignes + total)",
      ],
    },
    result: "Un export brut de BFU obtenu sur un périmètre contrôlé, avec le journal de ses paramètres.",
    tip: "Un BFU extrait alors qu'une écriture sans bailleur existe sur le projet affichera un disponible faux. Contrôlez les axes avant, pas après.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 4',
    title: 'Nommer, dater et archiver l\'extrait brut',
    intro: "Un BFU non daté est un document dont on ne peut pas garantir la fraîcheur trois semaines plus tard. Le nom de fichier porte la date d'arrêté ET la date d'extraction : ce sont deux informations différentes.",
    steps: [
      {
        title: 'Nommer selon la convention',
        actions: [
          "Renommez immédiatement : KAS_BFU_WSH-ADL_arrete-2026-08-31_extrait-2026-10-06_DEFINITIF.xlsx.",
          "Inscrivez dans la cellule A1 de l'onglet : « BFU définitif — arrêté 31/08/2026 — extrait le 06/10/2026 à 15 h 10 ».",
        ],
      },
      {
        title: 'Archiver',
        actions: [
          "Rangez l'extrait brut dans KAS_Suivi-budgetaire/BFU/2026/ et passez le fichier en lecture seule.",
          "Travaillez toujours sur une COPIE pour tout calcul ou mise en forme.",
        ],
      },
    ],
    example: {
      title: 'Arborescence de l\'archive des BFU',
      lines: [
        "KAS_Suivi-budgetaire/BFU/2026/WSH-ADL/",
        "   KAS_BFU_WSH-ADL_arrete-2026-08-31_extrait-2026-10-06_DEFINITIF.xlsx (brut, lecture seule)",
        "   KAS_BFU_WSH-ADL_arrete-2026-09-30_extrait-2026-10-12_DEFINITIF.xlsx (après verrouillage de septembre)",
      ],
    },
    result: "Un extrait brut nommé avec ses deux dates et son statut, archivé en lecture seule, distinct de tout fichier de travail.",
    pitfall: "Garder un seul fichier « BFU.xlsx » écrasé à chaque extraction. Quand un bailleur conteste un chiffre trois mois plus tard, vous ne pouvez plus montrer ce qui a été vu à l'époque.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 4',
    title: 'Lire, contrôler et diffuser le BFU avec ses réserves',
    intro: "Un BFU se contrôle avant d'être envoyé, comme n'importe quel état financier. Contrôlez l'arithmétique, rapprochez-le de SAGA, ajoutez les réserves puis diffusez.",
    steps: [
      {
        title: 'Contrôler',
        actions: [
          "Recalculez la colonne Disponible : budget − dépensé − engagé pour chaque ligne et pour le total.",
          "Vérifiez que le total dépensé du BFU est égal au grand livre de SAGA au 31/08 (179 360,00).",
          "Vérifiez les taux de consommation, comparez-les à 66,7 % du temps écoulé et repérez la ligne C.",
        ],
      },
      {
        title: 'Ajouter les réserves et diffuser',
        actions: [
          "Ajoutez en pied de tableau : « Arrêté au 31/08/2026 (dernier mois clôturé). Septembre en cours de clôture : non inclus, BFU au 30/09 prévu après le 9/10. »",
          "Envoyez à Joël B. avec Grace M. en copie, en citant la date d'arrêté et la date d'extraction.",
        ],
      },
    ],
    table: {
      columns: ['Ligne ADL', 'Budget', 'Dépensé', 'Engagé', 'Disponible', '% dépensé'],
      rows: [
        ['A. Personnel projet', '74 400', '49 600', '0', '24 800', '66,7 %'],
        ['B. Construction & réhabilitation', '150 000', '76 000', '31 500', '42 500', '50,7 %'],
        ['C. Véhicules & carburant', '21 600', '15 360', '2 400', '3 840', '71,1 %'],
        ['D. Coûts de bureau partagés', '27 000', '17 600', '0', '9 400', '65,2 %'],
        ['E. Promotion hygiène & formation', '22 000', '12 800', '1 700', '7 500', '58,2 %'],
        ['F. Suivi & redevabilité', '15 000', '8 000', '0', '7 000', '53,3 %'],
        ['Total', '310 000', '179 360', '35 600', '95 040', '57,9 %'],
      ],
    },
    result: "Un BFU dont le total dépensé de 179 360 USD est égal au grand livre, dont l'arithmétique est contrôlée et qui porte sa date d'arrêté et sa réserve avant de partir.",
    pitfall: "Envoyer un BFU sans sa date d'arrêté ni la mention du mois non inclus. Le destinataire le prendra pour la situation du jour et la citera en comité.",
  },

  // ─────────────── PROCÉDURE 8 — Préparer l'export brut ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 6',
    title: 'Ouvrir le template, conserver l\'original et charger l\'export',
    intro: "Le template tableau-de-bord-financier-tcd.xlsx contient deux onglets. Avant d'y toucher, sachez exactement ce qu'ils contiennent. Fil rouge : mardi 6 octobre 2026, 15 h. Vous venez de recevoir l'export LINK de juillet à septembre (52 lignes : projet, bailleur, rubrique, montant, date).",
    steps: [
      {
        title: 'Lire les deux onglets tels qu\'ils sont livrés',
        actions: [
          "Onglet « Export brut » : titre en A1, en-têtes en ligne 4 — A Projet, B Bailleur, C Rubrique, D Montant (USD), E Date, F Mois (calculé) — puis 45 lignes de démonstration en A5:F49 (janvier à mars 2026, bailleurs ECHO, USAID/BHA, Fonds privés).",
          "La colonne E contient la date sous forme de TEXTE « 2026-01-15 » et F5 contient =LEFT(E5,7), qui en extrait le mois « 2026-01 ».",
          "Onglet « Tableau de bord » : en-têtes en ligne 4 (Bailleur, 2026-01, 2026-02, 2026-03, Total), trois bailleurs en A5:A7, TOTAL en ligne 8, formules SUMIFS sur « Export brut ».",
          "Contrôle de départ sur le fichier tel que livré : 45 lignes, total général E8 = 137 687,02 (ECHO 60 546,61 ; USAID/BHA 33 645,68 ; Fonds privés 43 494,73).",
        ],
      },
      {
        title: 'Protéger l\'original et charger vos données',
        actions: [
          "Fichier > Enregistrer sous : KAS_Tableau-de-bord_2026-T3.xlsx. Le template d'origine reste intact dans son dossier.",
          "Onglet « Export brut » : sélectionnez A5:E49, appuyez sur Suppr (ne supprimez ni lignes ni colonnes).",
          "Copiez les 52 lignes de l'export LINK, cliquez en A5 et utilisez Collage spécial > Valeurs. Recopiez F5 jusqu'à F56 (double-clic sur la poignée).",
          "Clic droit sur l'onglet « Export brut » > Déplacer ou copier > cochez Créer une copie ; renommez la COPIE « Export ORIGINAL ». Le tableau de bord reste branché sur « Export brut », que vous allez nettoyer.",
        ],
      },
    ],
    example: {
      title: 'Export brut de KAS après chargement (extrait)',
      lines: [
        "A4 Projet | B4 Bailleur | C4 Rubrique | D4 Montant (USD) | E4 Date | F4 Mois (calculé)",
        "Ligne 5 : NUT | Fonds Horizon | Salaires | 4 820,00 | 2026-07-03 | 2026-07",
        "Ligne 41 : NUT | (vide) | Transport | 18 400,00 | 2026-08-18 | 2026-08",
        "Ligne 56 : WSH | Agence Delta | Transport | 3 180,00 | 2026-09-30 | 2026-09 — soit 52 lignes en A5:F56",
      ],
    },
    result: "Un classeur KAS enregistré sous son nom, avec 52 lignes en A5:F56, la colonne F calculée jusqu'à la ligne 56 et un onglet « Export ORIGINAL » intact en réserve.",
    pitfall: "Si votre export contient de vraies dates (et non du texte), =LEFT(E5,7) renvoie un nombre comme « 46 189 » et non « 2026-07 ». Remplacez alors la formule de F par =TEXTE(E5;\"aaaa-mm\") (anglais : =TEXT(E5,\"yyyy-mm\")).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 6',
    title: 'Auditer l\'export avant de construire quoi que ce soit',
    intro: "Un TCD construit sur des données non auditées donne un tableau impeccable et faux. Cinq contrôles de dix secondes, dans un onglet temporaire « Contrôles » que vous supprimerez ou rangerez à part. Entrée : l'onglet « Export brut » chargé à l'étape 1.",
    steps: [
      {
        title: 'Créer l\'onglet « Contrôles » et saisir les formules',
        actions: [
          "Lignes saisies : =NBVAL('Export brut'!A5:A56) (anglais : COUNTA).",
          "Bailleurs vides : =NB.VIDE('Export brut'!B5:B56) (COUNTBLANK) ; rubriques vides, même formule sur C.",
          "Montants numériques : =NB('Export brut'!D5:D56) (COUNT) doit égaler le nombre de lignes ; sinon des montants sont du texte.",
          "Montants négatifs : =NB.SI('Export brut'!D5:D56;\"<0\") (COUNTIF).",
          "Lignes par mois : =NB.SI('Export brut'!F5:F56;\"2026-07\"), puis \"2026-08\" et \"2026-09\".",
        ],
      },
      {
        title: 'Lister les libellés distincts de Bailleur',
        actions: [
          "Sur « Export brut », cliquez en B4 et activez le filtre (Ctrl+Maj+L).",
          "Ouvrez la liste déroulante de B4 : chaque valeur distincte apparaît une fois, y compris « (Vides) ».",
          "Notez chaque variante d'un même bailleur et le nombre de lignes concernées (filtrez, lisez la barre d'état « x sur 52 enregistrements »).",
        ],
      },
    ],
    example: {
      title: 'Résultats du contrôle — export LINK du 06/10/2026',
      lines: [
        "Lignes saisies : 52 — Montants numériques : 52 — Montants négatifs : 0 — Rubriques vides : 0",
        "Bailleurs vides : 1 (ligne 41, 18 400,00 USD, Transport)",
        "Lignes par mois : 2026-07 = 25 ; 2026-08 = 25 ; 2026-09 = 2",
        "Libellés distincts de Bailleur : « Fonds Horizon » (18 lignes), « FHO » (4), « F. Horizon » (3), « Agence Delta » (17), « Fondation Sigma » (9), « (Vides) » (1) = 52 — un bailleur écrit de trois façons",
      ],
    },
    result: "Une fiche de contrôle qui chiffre chaque anomalie : 3 variantes de libellé pour Fonds Horizon, 1 bailleur vide, 1 mois à 2 lignes seulement.",
    tip: "Excel ignore la casse mais pas les espaces : « Agence Delta » et « Agence Delta » suivi d'un espace invisible sont deux bailleurs. Détectez-les avec =SOMMEPROD(--(NBCAR('Export brut'!B5:B56)<>NBCAR(SUPPRESPACE('Export brut'!B5:B56)))) (anglais : SUMPRODUCT, LEN, TRIM) — le résultat attendu est 0.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 6',
    title: 'Harmoniser les libellés d\'un même bailleur',
    intro: "Un TCD éclate chaque libellé en une ligne distincte : sans harmonisation, Fonds Horizon apparaît en trois lignes et son total est faux, sans qu'aucun message ne le signale. La correction se fait dans l'onglet de travail « Export brut » — jamais dans « Export ORIGINAL ».",
    steps: [
      {
        title: 'Remplacer les variantes colonne par colonne',
        actions: [
          "Sélectionnez uniquement B5:B56 : le remplacement ne touchera aucune autre colonne.",
          "Ctrl+H : Rechercher « F. Horizon », Remplacer par « Fonds Horizon ». Cliquez sur Options >> et cochez « Totalité du contenu de la cellule ». Cliquez sur Remplacer tout : 3 remplacements.",
          "Recommencez avec « FHO » → « Fonds Horizon » : 4 remplacements.",
        ],
      },
      {
        title: 'Vérifier et documenter la règle',
        actions: [
          "Rouvrez la liste du filtre de B4 : seuls « Fonds Horizon », « Agence Delta », « Fondation Sigma » et « (Vides) » doivent rester.",
          "Relancez la formule d'espaces superflus : 0.",
          "Écrivez la table de correspondance des libellés (reçu → retenu) dans l'onglet « Contrôles » : elle resservira à chaque export.",
          "Transmettez l'origine du problème à Grace M. : les agents saisissent le bailleur en texte libre dans SAGA au lieu de le choisir dans une liste (voir module 01).",
        ],
      },
    ],
    example: {
      title: 'Table de correspondance des libellés (onglet « Contrôles »)',
      lines: [
        "Reçu « Fonds Horizon » (18 lignes) → retenu « Fonds Horizon »",
        "Reçu « FHO » (4 lignes) → retenu « Fonds Horizon »",
        "Reçu « F. Horizon » (3 lignes) → retenu « Fonds Horizon »",
        "Total après harmonisation : « Fonds Horizon » = 25 lignes ; 52 lignes au total, inchangé",
      ],
    },
    result: "Trois bailleurs distincts dans la colonne B (plus une ligne vide à traiter), un nombre de lignes inchangé à 52 et une table de correspondance écrite.",
    pitfall: "Remplacer sur tout le classeur au lieu de la colonne B : « FHO » ou « F. Horizon » peut aussi figurer dans une autre colonne et serait modifié à tort. Sélectionnez toujours la colonne avant Ctrl+H.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 6',
    title: 'Traiter la ligne sans bailleur : « À confirmer », jamais une devinette',
    intro: "Une ligne sans bailleur est une dépense dont on ne sait pas qui la finance. Deux traitements défendables : l'exclure du tableau de bord en la signalant explicitement, ou la classer « À confirmer ». Vous choisissez et vous justifiez. Ici, le total doit rester égal à celui de SAGA : on garde la ligne et on la classe.",
    steps: [
      {
        title: 'Retrouver l\'écriture à la source',
        actions: [
          "Sur « Export brut », filtrez la colonne B sur « (Vides) » : la ligne 41 s'affiche (NUT | Transport | 18 400,00 | 2026-08-18).",
          "Dans SAGA, recherchez le montant 18 400,00 à la date du 18/08/2026 et notez le numéro de pièce et le fournisseur.",
          "Appelez le saisisseur ou le responsable de l'achat pour confirmer le bailleur et la ligne budgétaire.",
        ],
      },
      {
        title: 'Classer provisoirement et faire corriger à la source',
        actions: [
          "Dans « Export brut » (jamais dans l'original), saisissez en B41 : À confirmer.",
          "Préparez la correction dans SAGA (extourne + recodage, procédure 4) : l'Excel ne vaut pas correction.",
          "Informez Grace M. : un montant de 18 400 USD « à confirmer » sera visible au comité.",
        ],
      },
    ],
    example: {
      title: 'Décision documentée pour la ligne 41',
      lines: [
        "Constat : NUT | (vide) | Transport | 18 400,00 | 2026-08-18 — pièce SAGA ACH-2026-0782, contrat de transport d'intrants nutritionnels",
        "Choix : classer « À confirmer » dans le tableau de bord, car l'exclure ferait diverger le total du grand livre de 18 400 USD",
        "Pourquoi pas « Fonds Horizon » par déduction : le projet NUT est financé par Fonds Horizon, mais la ligne budgétaire n'est pas confirmée — on ne devine pas",
        "Correction SAGA : REG-2026-013 (extourne + recodage), à passer jeudi 8/10",
      ],
    },
    result: "Une ligne classée « À confirmer » dans l'onglet de travail, une décision écrite qui la justifie et une correction préparée à la source.",
    pitfall: "Affecter la ligne au bailleur « qui doit sûrement la financer ». Si vous vous trompez, vous présentez au comité un bailleur qui paie 18 400 USD qui ne sont pas les siens.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 6',
    title: 'Repérer les doublons suspects et les confirmer dans SAGA',
    intro: "Une double saisie gonfle le dépensé et fausse le disponible. Deux lignes qui ressemblent à un doublon sont peut-être deux dépenses réelles : seule la pièce tranche. Vous repérez par formule, puis vous confirmez dans SAGA, sans supprimer quoi que ce soit dans l'export.",
    steps: [
      {
        title: 'Repérer les lignes semblables',
        actions: [
          "Dans « Export brut », ajoutez TEMPORAIREMENT en H5 : =NB.SI.ENS($A$5:$A$56;A5;$B$5:$B$56;B5;$C$5:$C$56;C5;$D$5:$D$56;D5) (anglais : COUNTIFS) et recopiez jusqu'en H56.",
          "On exclut volontairement la date du test : un doublon est souvent saisi à un ou deux jours d'écart.",
          "Filtrez la colonne H sur les valeurs supérieures à 1 : les lignes 34 et 35 apparaissent.",
        ],
      },
      {
        title: 'Trancher sur la pièce',
        actions: [
          "Dans SAGA, ouvrez les deux écritures et comparez le numéro de facture, le fournisseur et la pièce jointe.",
          "Même facture = doublon confirmé ; deux factures distinctes = deux dépenses réelles : ne touchez à rien.",
          "Supprimez la colonne H avant de poursuivre : le template ne doit pas porter de colonne de travail.",
        ],
      },
    ],
    example: {
      title: 'Les deux lignes suspectes (lignes 34 et 35)',
      lines: [
        "Ligne 34 : WSH | Agence Delta | Transport | 2 760,00 | 2026-08-11 | 2026-08",
        "Ligne 35 : WSH | Agence Delta | Transport | 2 760,00 | 2026-08-12 | 2026-08",
        "SAGA : même facture FOU-2026-221 saisie le 11/08 (Patrick K.) puis le 12/08 (assistant) → doublon confirmé",
        "Traitement : les deux lignes restent dans le tableau de bord (il doit se rapprocher de SAGA) ; l'extourne REG-2026-014 de −2 760,00 est passée dans la période ouverte et sera visible à l'export suivant",
      ],
    },
    result: "Un doublon confirmé sur pièce, une correction préparée dans SAGA et la colonne temporaire supprimée.",
    tip: "Ne supprimez jamais une ligne de l'export parce qu'elle « ressemble » à un doublon. Vous retireriez peut-être une vraie dépense, et votre tableau ne correspondrait plus à SAGA.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 6',
    title: 'Qualifier le mois incomplet avant de le montrer',
    intro: "Le mois de septembre ne contient que 2 lignes contre 25 en juillet et en août. Un tableau qui présente septembre à côté des mois complets, sans réserve, suggère une chute de la consommation qui n'existe pas. Vous qualifiez, chiffrez et décidez comment le montrer.",
    steps: [
      {
        title: 'Chiffrer l\'écart',
        actions: [
          "Dans « Contrôles », comptez les lignes par mois : 25, 25, 2.",
          "Calculez la moyenne des deux mois complets et le rapport avec septembre.",
          "Vérifiez dans SAGA le statut de septembre : période ouverte, journal de caisse et factures de fin de mois en cours de saisie.",
        ],
      },
      {
        title: 'Choisir le traitement',
        actions: [
          "Ne retirez pas septembre : il fait partie de l'export et de SAGA.",
          "Étiquetez-le : « Septembre 2026 — incomplet (clôture en cours) » dans le titre, dans le graphique et dans la note.",
          "Prévoyez la mise à jour : un second export après le verrouillage du 9/10.",
        ],
      },
    ],
    example: {
      title: 'Lecture critique de septembre',
      lines: [
        "Juillet 93 335,80 USD + août 115 406,80 USD = 208 742,60 ; moyenne des deux mois complets = 104 371,30 USD",
        "Septembre dans l'export : 7 430,00 USD (2 lignes) = 7,1 % de la moyenne",
        "Lecture trompeuse si on ne dit rien : « la consommation s'est effondrée de 93 % en septembre » — faux, il manque la caisse et les factures de fin de mois",
        "Lecture correcte : « septembre est incomplet ; consommation à confirmer après clôture le 9/10 »",
      ],
    },
    result: "Un mois incomplet identifié, chiffré, étiqueté comme tel dans tous les supports, avec la date d'un second export.",
    pitfall: "Comparer septembre à août dans le commentaire oral (« en baisse de 93 % »). Une conclusion fausse dite en comité est difficile à rattraper, même avec une note écrite.",
  },

  // ─────────────── PROCÉDURE 9 — Construire le tableau de bord TCD ───────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 7',
    title: 'Transformer l\'export en tableau structuré',
    intro: "Le tableau structuré s'étend automatiquement aux lignes que vous ajouterez lors du prochain export : c'est ce qui rend l'actualisation possible. Prérequis : l'export est nettoyé (procédure 8), la colonne de travail H est supprimée.",
    steps: [
      {
        title: 'Convertir la plage',
        actions: [
          "Sur « Export brut », cliquez dans la cellule A4 (en-tête « Projet »).",
          "Insertion > Tableau (Ctrl+T) : vérifiez que la plage proposée est A4:F56 et cochez « Mon tableau comporte des en-têtes ».",
          "Onglet Création de tableau > Nom du tableau : saisissez tblExport.",
        ],
      },
      {
        title: 'Tester l\'extension',
        actions: [
          "Sous la dernière ligne, en A57, tapez un projet : le tableau doit s'agrandir d'une ligne et la colonne F se remplir toute seule (colonne calculée).",
          "Annulez (Ctrl+Z) : la ligne de test ne doit pas rester.",
        ],
      },
    ],
    example: {
      title: 'Tableau structuré créé',
      lines: [
        "Nom : tblExport — Plage : A4:F56 — 52 lignes de données",
        "En-têtes : Projet | Bailleur | Rubrique | Montant (USD) | Date | Mois (calculé)",
        "Test : ligne ajoutée en 57 → tblExport passe à A4:F57 et F57 affiche le mois ; test annulé",
      ],
    },
    result: "Un tableau nommé tblExport de 52 lignes qui s'agrandit seul et dont la colonne Mois (calculé) se remplit seule.",
    pitfall: "Oublier la case « Mon tableau comporte des en-têtes » : Excel invente des en-têtes « Colonne1, Colonne2 » et le TCD perd les noms de champs.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 7',
    title: 'Adapter l\'onglet « Tableau de bord » du template à vos bailleurs et à vos mois',
    intro: "L'onglet « Tableau de bord » du template calcule la vue bailleur × mois par des formules SUMIFS multi-critères sur « Export brut » ; ce tableau vous sert de contrôle indépendant du TCD. Il est livré avec ECHO / USAID/BHA / Fonds privés et janvier à mars : vous l'adaptez à KAS.",
    steps: [
      {
        title: 'Remplacer les libellés',
        actions: [
          "B4:D4 : tapez 2026-07, 2026-08, 2026-09 EN TEXTE. Mettez d'abord les cellules au format Texte (Accueil > Format de nombre > Texte) ou précédez chaque valeur d'une apostrophe ('2026-07), sinon Excel transforme la saisie en date et les SUMIFS renvoient 0.",
          "A5:A7 : Fonds Horizon, Agence Delta, Fondation Sigma, orthographiés exactement comme dans l'export.",
          "Clic droit sur le numéro de la ligne 8 > Insérer : la ligne TOTAL descend en ligne 9. Copiez les formules de B7:E7 vers B8:E8 et saisissez « À confirmer » en A8.",
          "Corrigez les totaux de la ligne 9 : =SOMME(B5:B8), puis C9, D9 et E9 (le total en E9 est =SOMME(B9:D9) ou la somme de E5:E8).",
        ],
      },
      {
        title: 'Étendre les plages des formules à la ligne 56',
        actions: [
          "Les formules de B5:D8 pointent encore sur $D$5:$D$49, $B$5:$B$49 et $F$5:$F$49 : elles ignoreraient les lignes 50 à 56.",
          "Sélectionnez B5:D8, Ctrl+H, Options >> Dans : Formules, Rechercher « $49 », Remplacer par « $56 », Remplacer tout.",
          "Pour qu'elles suivent toujours l'extension, remplacez ensuite les plages par des références au tableau (cliquez dans la formule, sélectionnez la colonne à la souris : Excel écrit tblExport[Montant (USD)], tblExport[Bailleur], tblExport[Mois (calculé)]).",
        ],
      },
    ],
    table: {
      columns: ['Bailleur', '2026-07', '2026-08', '2026-09', 'Total'],
      rows: [
        ['Fonds Horizon', '41 280,40', '38 915,75', '4 250,00', '84 446,15'],
        ['Agence Delta', '29 640,10', '33 220,60', '3 180,00', '66 040,70'],
        ['Fondation Sigma', '22 415,30', '24 870,45', '0,00', '47 285,75'],
        ['À confirmer', '0,00', '18 400,00', '0,00', '18 400,00'],
        ['TOTAL', '93 335,80', '115 406,80', '7 430,00', '216 172,60'],
      ],
    },
    result: "Un tableau de bord SUMIFS à 4 lignes et 3 mois dont le total de 216 172,60 USD égale la somme de la colonne Montant (USD) de l'export.",
    tip: "Contrôle rapide : =SOMME(tblExport[Montant (USD)]) doit donner 216 172,60. Si le total du tableau de bord est inférieur, une plage s'arrête avant la fin ou un libellé ne correspond pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 7',
    title: 'Insérer le TCD et le comparer au tableau SUMIFS',
    intro: "Le TCD fait la même vue croisée sans écrire une seule formule, et il se met à jour en un clic. Il se construit en quatre glissements, puis se contrôle par comparaison avec le tableau de l'étape précédente : deux méthodes indépendantes qui donnent le même total prouvent que le résultat est juste.",
    steps: [
      {
        title: 'Construire la vue bailleur × mois',
        actions: [
          "Cliquez dans le tableau tblExport. Insertion > Tableau croisé dynamique > « À partir d'un tableau ou d'une plage », table tblExport, destination : Nouvelle feuille. Nommez-la « TCD ».",
          "Glissez Bailleur dans Lignes.",
          "Glissez Mois (calculé) dans Colonnes — et non Date, qui est du texte et ne se regroupe pas.",
          "Glissez Montant (USD) dans Valeurs. Si la zone affiche « Nombre de Montant », cliquez sur le champ > Paramètres des champs de valeurs > Somme.",
          "Glissez Projet dans Filtres : vous pourrez filtrer un seul projet.",
        ],
      },
      {
        title: 'Comparer avec le tableau SUMIFS',
        actions: [
          "Placez les deux tableaux côte à côte et comparez case par case : chaque montant et le total général doivent être identiques.",
          "Si un écart apparaît, cherchez dans l'ordre : un libellé avec espace superflu, une plage de formule trop courte, un mois saisi en date.",
        ],
      },
    ],
    example: {
      title: 'TCD construit et rapproché',
      lines: [
        "Lignes : Fonds Horizon, Agence Delta, Fondation Sigma, À confirmer — Colonnes : 2026-07, 2026-08, 2026-09 — Valeurs : Somme de Montant (USD)",
        "Total général du TCD : 216 172,60 USD",
        "Total général du tableau SUMIFS : 216 172,60 USD → écart 0,00 ✔",
        "Fonds Horizon : TCD 84 446,15 = SUMIFS 84 446,15 ✔ — Agence Delta : 66 040,70 = 66 040,70 ✔",
      ],
    },
    result: "Un TCD bailleur × mois dont tous les montants sont identiques à ceux du tableau SUMIFS, y compris le total de 216 172,60 USD.",
    pitfall: "Faire confiance au TCD sans le comparer. Un seul libellé mal harmonisé crée une ligne supplémentaire et un total partiel, avec exactement la même assurance visuelle qu'un résultat juste.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 4 sur 7',
    title: 'Mettre en forme le TCD pour qu\'il se lise en dix secondes',
    intro: "Un tableau de bord destiné à une réunion se lit en dix secondes ou il ne sert à rien. La mise en forme sert la lecture : unités claires, intitulés humains, totaux visibles, aucune cellule vide ambiguë.",
    steps: [
      {
        title: 'Format et intitulés',
        actions: [
          "Clic droit dans la zone de valeurs > Format de nombre > Nombre, 2 décimales, séparateur de milliers.",
          "Cliquez sur le champ Somme de Montant (USD) > Paramètres des champs de valeurs > Nom personnalisé : « Montant dépensé (USD) ».",
          "Renommez les en-têtes automatiques : « Étiquettes de lignes » devient « Bailleur », « Étiquettes de colonnes » devient « Mois ».",
          "Ajoutez en titre au-dessus : « Dépenses par bailleur et par mois — export LINK du 06/10/2026 ».",
        ],
      },
      {
        title: 'Totaux et cellules vides',
        actions: [
          "Création > Totaux généraux > Activé pour les lignes et les colonnes.",
          "Clic droit sur le TCD > Options du tableau croisé dynamique > Disposition et mise en forme > Pour les cellules vides, afficher : 0.",
          "Décochez « Ajuster automatiquement la largeur des colonnes à la mise à jour » pour que la mise en page ne bouge plus à chaque actualisation.",
          "Triez les bailleurs par total décroissant.",
        ],
      },
    ],
    example: {
      title: 'TCD après mise en forme (USD)',
      lines: [
        "Bailleur | 2026-07 | 2026-08 | 2026-09 | Total général",
        "Fonds Horizon | 41 280,40 | 38 915,75 | 4 250,00 | 84 446,15",
        "Agence Delta | 29 640,10 | 33 220,60 | 3 180,00 | 66 040,70",
        "Fondation Sigma | 22 415,30 | 24 870,45 | 0,00 | 47 285,75",
        "À confirmer | 0,00 | 18 400,00 | 0,00 | 18 400,00",
        "Total général | 93 335,80 | 115 406,80 | 7 430,00 | 216 172,60",
      ],
    },
    result: "Un TCD avec des montants à 2 décimales, des intitulés clairs, des totaux de lignes et de colonnes, aucune cellule vide, lisible en dix secondes.",
    tip: "Ne mettez pas en forme en tapant dans les cellules du TCD : la mise en forme se perd à l'actualisation. Utilisez les paramètres de champs et les options du TCD.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 5 sur 7',
    title: 'Insérer le graphique croisé dynamique et signaler le mois incomplet',
    intro: "Un histogramme groupé, avec le mois en axe horizontal et un groupe de colonnes par bailleur, est le format le plus lisible pour montrer une tendance de consommation dans le temps, en réunion comme dans un rapport écrit. Dans un graphique croisé dynamique, l'axe horizontal correspond aux champs en Lignes et la légende aux champs en Colonnes.",
    steps: [
      {
        title: 'Créer le graphique',
        actions: [
          "Copiez le TCD sur une nouvelle feuille « Graphique » (Ctrl+C, Ctrl+V) et, dans cette copie, mettez Mois (calculé) en Lignes et Bailleur en Colonnes.",
          "Cliquez dans la copie : Analyse de tableau croisé dynamique > Graphique croisé dynamique > Histogramme groupé.",
          "Titre : « Dépenses par bailleur et par mois — T3 2026 (USD) ». Titres d'axes : « Mois » et « Montant dépensé (USD) ». Légende en bas.",
          "Masquez les boutons de champs (Analyse > Boutons de champ > Masquer tout) pour alléger.",
        ],
      },
      {
        title: 'Signaler le mois incomplet',
        actions: [
          "Insertion > Zone de texte : « Septembre 2026 : mois incomplet (clôture en cours) » ; placez-la au-dessus des colonnes de septembre.",
          "Ajoutez sous le graphique, en petits caractères : « Source : export LINK du 06/10/2026 à 15 h 10, rapproché des journaux SAGA. Septembre non clôturé. Ligne « À confirmer » : 18 400 USD en cours de recodage. »",
        ],
      },
    ],
    example: {
      title: 'Lecture du graphique du comité (valeurs par groupe de colonnes)',
      lines: [
        "Juillet : Fonds Horizon 41 280 | Agence Delta 29 640 | Fondation Sigma 22 415 | À confirmer 0",
        "Août : Fonds Horizon 38 916 | Agence Delta 33 221 | Fondation Sigma 24 870 | À confirmer 18 400",
        "Septembre (annoté « incomplet ») : Fonds Horizon 4 250 | Agence Delta 3 180 | Fondation Sigma 0 | À confirmer 0",
        "Message en une phrase : consommation stable en juillet-août ; septembre à confirmer après la clôture du 9/10.",
      ],
    },
    result: "Un histogramme groupé avec les mois en abscisse, les bailleurs en séries, un titre, des axes nommés, une annotation sur septembre et une source datée.",
    pitfall: "Laisser les colonnes de septembre sans annotation. Un graphique est lu avant le texte : si la réserve n'est pas sur le graphique lui-même, elle n'existe pas pour le comité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 6 sur 7',
    title: 'Rapprocher des chiffres SAGA, rédiger la note et diffuser',
    intro: "Un tableau construit rapidement peut diverger des journaux officiels si l'export n'était pas à jour ou couvrait un périmètre légèrement différent. Avant tout envoi, vous le rapprochez de SAGA et vous joignez la note qui dit ce que vous avez fait et ce qui reste à vérifier. Livrable : le classeur + une note d'une demi-page maximum.",
    steps: [
      {
        title: 'Rapprocher du grand livre',
        actions: [
          "Dans SAGA, éditez le grand livre analytique des charges de juillet à septembre à la date de l'export.",
          "Comparez, mois par mois, le total du TCD au total SAGA ; documentez chaque écart.",
          "Archivez l'export brut d'origine : KAS_LINK_export-brut_2026-07_a_2026-09_extrait-2026-10-06.xlsx, daté, en lecture seule.",
        ],
      },
      {
        title: 'Rédiger la note et diffuser',
        actions: [
          "Rédigez la note d'une demi-page : vos choix de traitement, les points restant à vérifier avant diffusion officielle.",
          "Exportez en PDF la feuille du TCD et le graphique ; gardez le classeur Excel en interne.",
          "Envoyez à Grace M. pour relecture avant le comité, avec la note.",
        ],
      },
    ],
    example: {
      title: 'Note d\'accompagnement du tableau de bord (extrait, comité du 7/10/2026)',
      body: "Source : export LINK du 06/10/2026 (52 lignes), juillet à septembre 2026, rapproché du grand livre SAGA (écart 0,00 USD).\n\nTraitements : (1) Fonds Horizon était saisi sous trois libellés (« Fonds Horizon », « FHO », « F. Horizon ») : harmonisés, 25 lignes. (2) Une ligne de 18 400 USD (Transport, 18/08) n'a pas de bailleur : classée « À confirmer », ni attribuée ni exclue ; correction SAGA prévue (REG-2026-013). (3) Deux lignes de 2 760 USD (Agence Delta, 11 et 12/08) sont un doublon confirmé sur pièce (FOU-2026-221) : conservées pour rester égales à SAGA ; extourne REG-2026-014 passée en septembre.\n\nRéserves : septembre n'est pas clôturé (2 lignes sur 52) ; ne pas l'interpréter comme un rythme de consommation. Prochain export après le verrouillage du 9/10.",
    },
    result: "Un classeur rapproché de SAGA, un export d'origine archivé et daté, et une note qui dit ce qu'on a fait, ce qu'on n'a pas fait et ce qui reste à vérifier.",
    tip: "Si vous ne pouvez pas rapprocher avant l'heure du comité, diffusez quand même, en le disant : « non rapproché de SAGA à ce jour ». Un chiffre non rapproché présenté comme officiel est le vrai danger.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 7 sur 7',
    title: 'Actualiser le tableau de bord au lieu de le reconstruire',
    intro: "Le jour où le nouvel export arrive (septembre clôturé), vous n'avez rien à reconstruire : le tableau structuré, le TCD et le graphique se recalculent. Mais l'étape du collage mérite de l'attention, car c'est là que se glissent les doublons et les périmètres décalés.",
    steps: [
      {
        title: 'Intégrer le nouvel export sans doubler',
        actions: [
          "Export CUMULATIF (toute la période de juillet à septembre) : supprimez les lignes de données de tblExport (clic droit > Supprimer > Lignes du tableau) et collez le nouvel export en valeurs sous l'en-tête.",
          "Export INCRÉMENTAL (seulement les nouvelles lignes) : collez-les directement sous la dernière ligne ; le tableau s'étend seul.",
          "Contrôlez le nombre de lignes et la somme de Montant (USD) avec SAGA avant d'aller plus loin.",
        ],
      },
      {
        title: 'Actualiser et contrôler',
        actions: [
          "Données > Actualiser tout : le TCD et le graphique se recalculent sur toutes les données.",
          "Si un nouveau mois apparaît (2026-10), le TCD l'ajoute tout seul ; dans le tableau SUMIFS, ajoutez la colonne du mois.",
          "Rejouez les contrôles de la procédure 8 : libellés, lignes vides, nouveaux doublons. Retirez la mention « mois incomplet » si le mois est clôturé.",
        ],
      },
    ],
    example: {
      title: 'Actualisation du 12/10/2026 après la clôture de septembre (export cumulatif de 77 lignes)',
      lines: [
        "Lignes : 77 (52 + 25) — Total général : 297 392,60 USD, égal au grand livre SAGA ✔",
        "Septembre complet : Fonds Horizon 54 610,00 (dont recodage +18 400) | Agence Delta 27 110,00 (dont extourne −2 760) | Fondation Sigma 25 330,00 | À confirmer −18 400,00",
        "« À confirmer » sur le trimestre : 18 400 (août) − 18 400 (septembre) = 0,00 → la ligne est soldée, REG-2026-013 a produit son effet",
        "Annotation « incomplet » retirée ; export brut archivé sous le nom du 12/10",
      ],
    },
    result: "Un tableau de bord mis à jour en un clic, avec un nombre de lignes et un total rapprochés de SAGA, sans reconstruction ni doublon.",
    pitfall: "Coller un export cumulatif SOUS l'ancien : toutes les lignes de juillet et d'août sont comptées deux fois. Le nombre de lignes (77, et non 129) et le total SAGA sont vos deux garde-fous.",
  },

  // ─────────────── 6. Cas complet résolu ───────────────
  {
    type: 'case-study',
    title: 'Cas complet résolu — Le comité de pilotage du bureau de Goma (1/3)',
    scenario: "Mardi 6 octobre 2026, 15 h. Grace M. vous demande un tableau de bord de consommation par bailleur et par mois pour le comité de pilotage de demain, 9 h, avec Fonds Horizon, Agence Delta et Fondation Sigma. Vous extrayez de LINK un export de 52 lignes couvrant juillet à septembre. En le parcourant, vous voyez déjà que Fonds Horizon est écrit de trois façons, qu'une ligne de 18 400 USD n'a pas de bailleur, que deux lignes de 2 760 USD se ressemblent et que septembre n'a que 2 lignes. Voici la résolution, dans l'ordre, telle qu'un Finance Officer expérimenté la mène.",
    steps: [
      {
        title: 'Charger l\'export dans le template et protéger l\'original (15 h 10)',
        actions: [
          "Enregistrez tableau-de-bord-financier-tcd.xlsx sous KAS_Tableau-de-bord_2026-T3.xlsx ; remplacez les 45 lignes de démonstration par les 52 lignes de l'export en valeurs ; recopiez la colonne F.",
          "Dupliquez l'onglet « Export brut » en « Export ORIGINAL » ; archivez l'export LINK dans son dossier daté, en lecture seule.",
        ],
        result: "52 lignes en A5:F56, original conservé en deux exemplaires (onglet et fichier archivé).",
      },
      {
        title: 'Auditer l\'export (15 h 25)',
        actions: [
          "Onglet « Contrôles » : 52 lignes, 52 montants numériques, 0 négatif, 1 bailleur vide.",
          "Lignes par mois : 25, 25 et 2. Filtre de B4 : « Fonds Horizon » (18), « FHO » (4), « F. Horizon » (3), « Agence Delta » (17), « Fondation Sigma » (9), « (Vides) » (1).",
        ],
        result: "Quatre anomalies chiffrées : trois libellés pour un bailleur, un bailleur vide, un doublon suspect, un mois incomplet.",
      },
      {
        title: 'Corriger et qualifier les anomalies (15 h 45)',
        actions: [
          "Ctrl+H sur B5:B56, « Totalité du contenu de la cellule » : F. Horizon → Fonds Horizon (3), FHO → Fonds Horizon (4). Table de correspondance écrite.",
          "Ligne 41 : retrouvée dans SAGA (ACH-2026-0782) ; bailleur non confirmé ; classée « À confirmer » ; REG-2026-013 préparé.",
          "Lignes 34 et 35 : même facture FOU-2026-221 → doublon confirmé ; lignes conservées pour égaler SAGA ; REG-2026-014 préparé.",
          "Septembre : 7 430 USD, soit 7,1 % de la moyenne juillet-août (104 371,30 USD) → étiqueté « incomplet ».",
        ],
        result: "Un export à trois bailleurs distincts plus « À confirmer », 52 lignes inchangées, les trois décisions écrites.",
      },
    ],
    table: {
      columns: ['Anomalie', 'Où', 'Impact si non traitée', 'Décision'],
      rows: [
        ['3 libellés pour Fonds Horizon', 'Colonne B', 'Total FHO faux sur 3 lignes du TCD', 'Harmonisé (25 lignes)'],
        ['Bailleur vide', 'Ligne 41, 18 400 USD', 'Ligne « (vide) » ou total qui diverge de SAGA', '« À confirmer » + correction SAGA'],
        ['Doublon suspect', 'Lignes 34-35, 2 760 USD', 'Agence Delta août surévalué', 'Confirmé sur pièce, conservé, extourne en SAGA'],
        ['Mois incomplet', 'Septembre, 2 lignes', 'Fausse chute de 93 % en septembre', 'Étiquetage « incomplet » partout'],
      ],
    },
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Le comité de pilotage du bureau de Goma (2/3)',
    scenario: "Les données sont propres et les décisions sont prises. Il reste à construire le tableau de bord, à le rapprocher de SAGA et à l'accompagner d'une note, avant 17 h.",
    steps: [
      {
        title: 'Construire le tableau structuré et adapter le tableau de bord (16 h 05)',
        actions: [
          "Supprimez la colonne temporaire H ; Ctrl+T sur A4:F56 avec en-têtes ; nom tblExport.",
          "Onglet « Tableau de bord » : B4:D4 en texte 2026-07, 2026-08, 2026-09 ; A5:A7 = Fonds Horizon, Agence Delta, Fondation Sigma ; ligne 8 « À confirmer » insérée ; totaux corrigés ; plages passées de $49 à tblExport[…].",
        ],
        result: "Un tableau SUMIFS dont le total est 216 172,60 USD, égal à =SOMME(tblExport[Montant (USD)]).",
      },
      {
        title: 'Insérer le TCD, le mettre en forme, le comparer (16 h 25)',
        actions: [
          "Insertion > Tableau croisé dynamique sur tblExport, feuille « TCD » : Bailleur en Lignes, Mois (calculé) en Colonnes, Montant (USD) en Valeurs (Somme), Projet en Filtres.",
          "Mise en forme : « Montant dépensé (USD) », 2 décimales, totaux, cellules vides à 0.",
          "Comparaison avec le tableau SUMIFS : 12 cases et 4 totaux identiques.",
        ],
        result: "TCD et SUMIFS concordent au centime : deux méthodes, un seul résultat.",
      },
      {
        title: 'Graphique, rapprochement et note (16 h 40)',
        actions: [
          "Copie du TCD (Mois en Lignes, Bailleur en Colonnes) → histogramme groupé, titre, axes nommés, zone de texte « Septembre : mois incomplet (clôture en cours) ».",
          "Grand livre SAGA juillet-septembre : 216 172,60 USD → écart 0,00.",
          "Note d'une demi-page : harmonisation, « À confirmer », doublon, septembre ; prochain export après le 9/10.",
          "Envoi à Grace M. à 16 h 55 ; PDF du TCD et du graphique prêt pour le comité.",
        ],
        result: "Un dossier de comité à 17 h : classeur, PDF, note, avec un total rapproché de SAGA.",
      },
    ],
    example: {
      title: 'Tableau de bord présenté au comité du 7/10/2026 (USD)',
      lines: [
        "Fonds Horizon : juillet 41 280,40 | août 38 915,75 | septembre 4 250,00 (incomplet) | total 84 446,15",
        "Agence Delta : 29 640,10 | 33 220,60 | 3 180,00 (incomplet) | total 66 040,70",
        "Fondation Sigma : 22 415,30 | 24 870,45 | 0,00 (incomplet) | total 47 285,75",
        "À confirmer : 0,00 | 18 400,00 | 0,00 | total 18 400,00",
        "Total : 93 335,80 | 115 406,80 | 7 430,00 | 216 172,60 — rapproché du grand livre SAGA, écart 0,00",
      ],
    },
    tip: "Le jour J, présentez d'abord les réserves (septembre, « À confirmer »), puis les chiffres. Un comité qui découvre une réserve en cours de discussion perd confiance dans tout le tableau.",
  },
  {
    type: 'case-study',
    title: 'Cas complet résolu — Le comité de pilotage du bureau de Goma (3/3)',
    scenario: "Le comité a eu lieu mercredi 7 octobre. Les réserves étaient écrites, aucune décision n'a été prise sur septembre. Il reste à fermer septembre dans les règles, corriger à la source et actualiser le tableau de bord.",
    steps: [
      {
        title: 'Valider septembre (jeudi 8/10)',
        actions: [
          "Journaux provisoires : 424 écritures ; balance équilibrée.",
          "Pièces : 85 contrôlées (38 à 100 %, 47 par échantillon) ; 2 anomalies.",
          "Codification : 3 lignes d'atelier recodées (480 USD, REG-2026-012) ; doublon de la facture 5127 extourné (−340,00, REG-2026-011).",
          "Corrections demandées par le cas : ligne 41 recodée sur Fonds Horizon après confirmation (REG-2026-013) ; doublon de 2 760 USD extourné (REG-2026-014).",
        ],
        result: "Un registre de validation avec 4 anomalies corrigées et 1 bloquante ouverte (écart de caisse de 35 USD).",
      },
      {
        title: 'Clôturer, verrouiller, archiver (vendredi 9/10)',
        actions: [
          "Caisse : reçu PC-0947 retrouvé, saisi ; écart 0 ; PV signé. Banque : RB-BQ-2026-09 validé.",
          "Journal de clôture : lignes 1 à 3 « Oui » ; verrouillage par Grace M. à 16 h 42 ; test de saisie refusé ; journaux PDF archivés à 17 h 05.",
        ],
        result: "Septembre 2026 verrouillé le 09/10/2026 à 16 h 42, avec sept états PDF archivés.",
      },
      {
        title: 'Actualiser et clôturer le dossier (lundi 12/10)',
        actions: [
          "Export cumulatif de 77 lignes collé dans tblExport (après suppression de l'ancien contenu) ; Données > Actualiser tout.",
          "Total 297 392,60 USD = grand livre ; « À confirmer » = 0,00 ; mention « incomplet » retirée ; BFU définitif extrait.",
          "Journal de clôture : lignes 4 et 5, section 4 signées ; PDF classé.",
        ],
        result: "Un dossier complet et rapproché : journal de clôture signé, BFU définitif, tableau de bord actualisé.",
      },
    ],
    table: {
      columns: ['Livrable du cas', 'Référence', 'Statut au 12/10/2026'],
      rows: [
        ['Journal de clôture de septembre (gabarit)', 'KAS_Journal-cloture_2026-09_signe.pdf', 'Signé par vous et Grace M.'],
        ['Registre de validation', 'V-01 à V-04', 'Tous soldés'],
        ['Corrections tracées', 'REG-2026-011 à -014', 'Passées en septembre avant verrouillage'],
        ['BFU WASH / Agence Delta', 'arrêté 30/09, extrait 12/10, DEFINITIF', 'Archivé, total dépensé rapproché du grand livre'],
        ['Tableau de bord T3', 'KAS_Tableau-de-bord_2026-T3.xlsx', 'Actualisé : 77 lignes, 297 392,60 USD'],
        ['Note de réserves', 'Demi-page, comité du 7/10', 'Remplacée par une note de mise à jour'],
      ],
    },
    result: "Livrable final du cas : un mois clôturé ET verrouillé avec journal signé, des corrections tracées, un BFU daté et un tableau de bord dont chaque chiffre se rapproche de SAGA. Ce qui était un risque de constat d'audit le mardi soir est devenu, le lundi suivant, une piste d'audit complète.",
  },

  // ─────────────── 7. Exercices ───────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Saisir cinq pièces de septembre avec leurs trois axes',
    instructions: "Toujours à KAS Goma, période septembre 2026 ouverte. Clés : ETP 50 / 30 / 20 pour les coûts de bureau (NUT / WSH / SAN) ; trajets du véhicule partagé LC-03 en septembre : 18 NUT, 10 WSH, 8 SAN. Pour chaque pièce, appliquez la procédure 1 : quel projet ? direct ou commun ? quelle ligne de quel bailleur ? quel compte ? Produisez les écritures de charge (compte + trois axes + montant + journal + n° de pièce).",
    steps: [
      { title: 'Pièce SAL-2026-09-12 (30/09)', body: "Salaire de septembre de l'infirmier affecté à 100 % au projet Santé : 720 USD." },
      { title: 'Pièce F-KB-071 (14/09)', body: "60 sacs de ciment pour les latrines du projet WASH : 840 USD." },
      { title: 'Pièce INT-0926 (30/09)', body: "Facture internet de septembre du bureau : 850 USD." },
      { title: 'Pièce PC-0933 (21/09)', body: "Per diem d'un atelier de 10 relais communautaires du projet Nutrition, payé en caisse : 800 USD." },
      { title: 'Pièce GAR-PN-22 (24/09)', body: "Entretien du véhicule partagé LC-03 : 260 USD." },
    ],
    tip: "Pour un coût commun, une ligne par projet, même n° de pièce. Vérifiez que la somme des lignes égale le montant de la pièce, au centime.",
    deliverable: "Cinq pièces codées : journal, compte, projet, bailleur, rubrique, montant, n° de pièce (une ligne par pièce directe, trois lignes par coût commun).",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Remplir le journal de clôture d\'août 2026… et savoir dire « non »',
    instructions: "Mercredi 9 septembre 2026, 10 h. Grace M. est pressée : elle vous propose de verrouiller août dans la matinée. Voici les faits : rapprochement bancaire d'août réalisé le 07/09, référence RB-BQ-2026-08, validé par Grace M. le 08/09 ; comptage de caisse du 31/08 fait par Esther N. le 07/09, écart de −35,00 USD non expliqué, procès-verbal non signé ; séquence de pièces PC-0851 à PC-0884 continue ; deux factures du 31/08 reçues le 04/09, passées en charges à payer (860 USD) ; journaux d'août non encore édités ; BFU non mis à jour.",
    steps: [
      {
        title: 'Ouvrir le gabarit et remplir ce qui peut l\'être',
        actions: [
          "Enregistrez le gabarit sous KAS_Journal-cloture_2026-08.docx ; remplissez la section 1.",
          "Répondez aux lignes 1, 2 et 3 de la checklist avec dates, références et un Oui ou un Non justifié.",
        ],
      },
      {
        title: 'Décider du verrouillage',
        actions: [
          "Dites si la période peut être verrouillée ce matin et pourquoi.",
          "Laissez les lignes 4 et 5, la section 3 et la section 4 « à compléter après verrouillage ».",
        ],
      },
      {
        title: 'Écrire à Grace M.',
        actions: [
          "Rédigez un message de cinq lignes : ce qui bloque, ce qu'il faut obtenir, par qui, pour quand, et la nouvelle date de verrouillage proposée.",
        ],
      },
    ],
    deliverable: "Le journal de clôture d'août partiellement rempli (section 1, lignes 1 à 3) et un message de cinq lignes à Grace M. qui justifie le report du verrouillage.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Le tableau de bord de Bentiu (exercice noté)',
    instructions: "Vous êtes Finance Officer sur le bureau de Bentiu (ONG fictive). Votre Finance Manager vous demande, un mardi soir, un tableau de bord de consommation par bailleur et par mois pour un comité de demain. Ouvrez tableau-de-bord-financier-tcd.xlsx, enregistrez-le sous un nouveau nom et dupliquez « Export brut » en « Export ORIGINAL ». Puis, dans « Export brut », reproduisez les anomalies du cas : B8 → E.C.H.O., B13 → « ECHO » suivi d'un espace, B18 → E.C.H.O. ; ligne 50 : PROJ-RDC-01 | (bailleur vide) | Transport | 18400 | 2026-03-15 | formule F ; ligne 51 : PROJ-RDC-01 | ECHO | Loyer | 2529.54 | 2026-02-16 ; ligne 52 : PROJ-TCD-02 | ECHO | Formation | 1850 | 2026-04-15 ; ligne 53 : PROJ-HTI-03 | USAID/BHA | Transport | 920 | 2026-04-15. Recopiez F5 jusqu'à F53. Tapez les dates avec une apostrophe devant (par exemple '2026-03-15) pour qu'elles restent du texte, comme dans le template.",
    steps: [
      {
        title: 'Auditer et harmoniser',
        actions: [
          "Dans « Contrôles », comptez lignes, bailleurs vides, lignes par mois (13, 15, 19, 2) et listez les libellés distincts.",
          "Harmonisez les trois variantes d'ECHO (dont celle à espace final, à détecter par formule).",
        ],
      },
      {
        title: 'Traiter les anomalies',
        actions: [
          "Ligne sans bailleur : choisissez « À confirmer » ou exclusion explicite et justifiez.",
          "Lignes 31 et 51 (ECHO, Loyer, 2 529,54) : traitez comme doublon suspect et dites comment vous le confirmeriez.",
        ],
      },
      {
        title: 'Construire',
        actions: [
          "Tableau structuré, adaptation du tableau de bord (ajoutez la colonne 2026-04 et la ligne « À confirmer »), TCD bailleur × mois, mise en forme, histogramme groupé.",
        ],
      },
      {
        title: 'Rédiger la note',
        actions: [
          "Demi-page maximum : traitement de la ligne sans bailleur, des deux lignes potentiellement dupliquées, et pourquoi présenter avril (2 lignes contre 13 à 19) sans réserve induirait le comité en erreur sur le rythme réel de consommation.",
        ],
      },
    ],
    deliverable: "Le classeur tableau-de-bord-financier-tcd.xlsx complété (tableau de bord, TCD et graphique) et une note d'une demi-page maximum signalant vos choix de traitement et les points à vérifier avant diffusion aux bailleurs.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Suivre une ligne LINK et alerter',
    instructions: "Au 30/09/2026 (9 mois sur 12), le suivi LINK du projet Santé / Fondation Sigma affiche, pour la ligne S3 « Logistique & transport » : budget 12 000 USD, dépensé 8 100 USD, engagé 1 500 USD (bon de commande d'entretien). Rapprochement SAGA : 8 100,00 des deux côtés.",
    steps: [
      {
        title: 'Lire la ligne',
        actions: [
          "Calculez le disponible réel, le taux dépensé et le taux (dépensé + engagé) ÷ budget.",
          "Comparez au temps écoulé et classez la ligne (vert, orange, rouge selon les seuils de la procédure 6).",
        ],
      },
      {
        title: 'Projeter',
        actions: [
          "Calculez le rythme mensuel moyen, les mois restants, la projection de fin d'année et l'écart au budget.",
        ],
      },
      {
        title: 'Alerter',
        actions: [
          "Rédigez l'alerte au chargé de projet Santé (copie Grace M.) : chiffres, écart prévisionnel, deux options, date de réponse.",
        ],
      },
    ],
    deliverable: "Un tableau de calcul à six lignes (disponible, taux dépensé, taux engagé inclus, rythme, projection, écart) et un e-mail d'alerte de cinq à sept lignes.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si… (exercices 1 à 4)',
    items: [
      "Ex. 1 — SAL-2026-09-12 : journal de paie | 641 | Santé | Fondation Sigma | Personnel | 720,00.",
      "Ex. 1 — F-KB-071 : 601 | WASH | Agence Delta | Intrants & matériel (ligne B Construction & réhabilitation) | 840,00 — coût direct, une seule ligne.",
      "Ex. 1 — INT-0926 : coût commun, trois lignes 651 | Fonctionnement bureau | 425,00 (Nutrition/Fonds Horizon) + 255,00 (WASH/Agence Delta) + 170,00 (Santé/Fondation Sigma) = 850,00, même n° de pièce.",
      "Ex. 1 — PC-0933 : journal de caisse | 625 | Nutrition | Fonds Horizon | Formation | 800,00 (et non Transport).",
      "Ex. 1 — GAR-PN-22 : trajets 18 / 10 / 8 = 36 → 50,00 % / 27,78 % / 22,22 % → 613 | Transport & carburant | 130,00 + 72,22 + 57,78 = 260,00.",
      "Ex. 2 — Ligne 1 : Oui, RB-BQ-2026-08, 08/09. Ligne 2 : Non — écart de −35,00 USD non expliqué, procès-verbal non signé. Ligne 3 : Oui — séquence PC-0851 à PC-0884, 860 USD en charges à payer.",
      "Ex. 2 — Conclusion : la période n'est PAS verrouillée ce matin ; lignes 4 et 5 et sections 3 et 4 restent à compléter ; le message à Grace M. cite l'écart, la personne qui l'explique (Esther N.) et une nouvelle date.",
      "Ex. 3 — Après harmonisation : ECHO 64 926,15 ; USAID/BHA 34 565,68 ; Fonds privés 43 494,73 ; À confirmer 18 400,00 ; total général 161 386,56 USD sur 49 lignes.",
      "Ex. 3 — Mois : janvier 36 498,26 ; février 48 340,29 ; mars 73 778,01 (dont 18 400 À confirmer) ; avril 2 770,00 (2 lignes, à annoter « incomplet »).",
      "Ex. 3 — La note traite la ligne sans bailleur sans la deviner, justifie de garder ou de confirmer les lignes 31 et 51 sur pièce, et explique qu'avril suggère à tort un effondrement alors que les autres mois comptent 13 à 19 lignes.",
      "Ex. 3 — Le classeur contient « Export ORIGINAL » intact, un tableau tblExport, un TCD égal au tableau SUMIFS et un graphique avec titre, axes nommés et annotation du mois incomplet.",
      "Ex. 4 — Disponible 2 400 USD ; dépensé 67,5 % ; dépensé + engagé 80,0 % pour 75 % du temps → orange ; rythme 900 USD/mois ; projection 8 100 + 1 500 + 2 700 = 12 300 USD ; dépassement prévisionnel 300 USD (2,5 %).",
      "Ex. 4 — L'alerte contient les chiffres, l'écart, deux options (ex. limiter les trajets, virement de ligne avec accord du bailleur) et une date de réponse.",
    ],
  },

  // ─────────────── 8. Erreurs de terrain ───────────────
  {
    type: 'warning',
    title: 'Les erreurs de terrain les plus fréquentes — et comment les éviter',
    items: [
      "Ne pas verrouiller une période après sa clôture officielle. Parade : la clôture et le verrouillage ne se séparent jamais, et la ligne « verrouillée (date et heure) » du journal de clôture s'appuie sur un test de saisie refusé.",
      "Valider une saisie incomplète en se disant qu'on la complétera en fin de mois. Parade : trois axes complets à la saisie, et un contrôle d'axes vides chaque vendredi jusqu'à zéro.",
      "Bâcler la validation entre deux réunions. Parade : un créneau bloqué à l'agenda, un plan de contrôle (100 % au-dessus du seuil, échantillon en dessous) et un registre de validation.",
      "Rouvrir un mois « pour faire plus propre » ou sans trace. Parade : correction en période ouverte par défaut ; réouverture seulement sur demande écrite approuvée, limitée dans le temps, puis ré-clôture et journal v2.",
      "Faire confiance à LINK sans rapprocher SAGA. Parade : rapprochement hebdomadaire ; tout écart expliqué sous 48 heures ; une erreur se corrige dans SAGA, jamais dans LINK ni dans Excel.",
      "Charger un budget non contrôlé dans LINK. Parade : budget signé comme seule source, tableau d'écart à 0 sur chaque ligne et signature d'un second contrôleur.",
      "Ressaisir à la main des données déjà disponibles dans SAGA ou LINK. Parade : extraire, jamais recopier ; le seul geste manuel utile est le contrôle.",
      "Construire un TCD sur des libellés incohérents ou une date en texte. Parade : audit des libellés avant le TCD, Mois (calculé) en colonnes, comparaison avec le tableau SUMIFS.",
      "Présenter un mois incomplet sans réserve. Parade : annotation sur le graphique, dans le titre et dans la note, et un second export après la clôture.",
      "Perdre ou écraser l'export brut d'origine. Parade : onglet « Export ORIGINAL », fichier archivé daté en lecture seule, nom avec date d'arrêté et date d'extraction.",
      "Diffuser un tableau Excel sans le rapprocher de SAGA. Parade : rapprochement mois par mois avant l'envoi, ou mention écrite « non rapproché de SAGA à ce jour ».",
      "Coller un export cumulatif sous l'ancien lors d'une actualisation. Parade : remplacer le contenu du tableau ; contrôler le nombre de lignes et le total avec SAGA avant d'actualiser.",
    ],
  },

  // ─────────────── 9. Récapitulatif + checklist ───────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez saisi et contrôlé des pièces dans un logiciel de type SAGA avec leurs trois axes, et tenu un contrôle hebdomadaire d'axes vides jusqu'à zéro.",
      "Vous avez mené la validation de septembre 2026 : plan de contrôle des pièces, codification, doublons, rapprochements et registre de validation signé.",
      "Vous avez clôturé et verrouillé le mois avec le gabarit gabarit-journal-cloture-mensuelle.docx : cinq contrôles, date et heure du verrouillage, journaux PDF archivés et deux signatures.",
      "Vous avez corrigé après clôture sans casser la piste d'audit : écriture dans la période ouverte, demande de réouverture DR-2026-001 et re-verrouillage documenté.",
      "Vous avez chargé et contrôlé le budget Agence Delta (310 000 USD) dans LINK, rapproché LINK de SAGA, projeté la ligne carburant et alerté par écrit.",
      "Vous avez extrait, nommé, daté et diffusé un BFU avec ses réserves, et préparé un export brut en conservant l'original.",
      "Vous avez construit un tableau de bord Excel avec le template tableau-de-bord-financier-tcd.xlsx : TCD bailleur × mois, graphique croisé dynamique, note de réserves, rapprochement avec SAGA — puis l'avez actualisé en un clic.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais décrire, dans l'ordre, les quatre étapes du workflow SAGA : saisie, validation, clôture mensuelle, édition des journaux.",
      "Je sais expliquer ce qu'est un verrouillage de période et pourquoi il doit toujours accompagner une clôture, et comment je le teste.",
      "Je sais décrire ce que LINK standardise (budget chargé, suivi des dépenses, extraction de rapport BFU) et son lien de dépendance avec la qualité de la saisie SAGA.",
      "Je sais remplir le journal de clôture mensuelle : section 1, les cinq lignes de la checklist, le verrouillage et les deux signatures.",
      "Je sais corriger après clôture par une écriture en période ouverte, ou par une réouverture écrite, limitée et ré-clôturée.",
      "Je sais charger un budget dans LINK, le contrôler à zéro écart et rapprocher LINK de SAGA chaque semaine.",
      "Je sais extraire un BFU, le nommer avec sa date d'arrêté et sa date d'extraction, et le diffuser avec ses réserves.",
      "Je sais harmoniser des libellés, traiter une ligne sans bailleur, un doublon suspect et un mois incomplet avant de construire un TCD.",
      "Je sais construire un TCD bailleur × mois et son graphique, le comparer au tableau SUMIFS, puis l'actualiser plutôt que le reconstruire.",
      "J'ai complété le tableau de bord avec le template fourni et rédigé ma note de choix de traitement des anomalies.",
    ],
  },

  // ─────────────── 10. Clôture ───────────────
  {
    type: 'closing',
    nextModuleHint: "Prochain module : Module 08 — Fraude, Corruption & Conformité Financière. Vous y retrouverez, sous l'angle de la prévention et de la détection, les contrôles que vous venez de mettre en place : séparation des tâches, périodes verrouillées, pistes d'audit, doublons, écarts inexpliqués et libellés inhabituels sont autant de signaux d'alerte que vous apprendrez à lire, à documenter et à signaler.",
  },
]
