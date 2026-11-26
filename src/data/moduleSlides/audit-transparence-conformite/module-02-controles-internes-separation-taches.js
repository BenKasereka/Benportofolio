// Module 03 — Audit de la Supply Chain & des Achats
// Référence pas-à-pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md) et des templates du module
// (grille-audit-echantillon-achats.xlsx : onglets « Sélection de l'échantillon »
// et « Checklist par dossier » ; fiche-detection-collusion-fournisseurs.docx).
// Chaque procédure est déroulée étape par étape, appliquée à un cas fil rouge
// unique (audit des achats de la base d'Uvira, Sud-Kivu, de l'ONG fictive
// « Horizon Santé Grands Lacs », déjà rencontrée au module 01), avec exemples
// remplis, résultat attendu, astuces et erreurs à éviter. Le cas du Nigeria
// (03-exercices.md) sert d'exercice noté.
// Les organisations, bailleurs, personnes et montants sont fictifs.
export default [
  // ───────────────────────── 1. Couverture ─────────────────────────
  {
    type: 'cover',
    title: 'Audit de la Supply Chain & des Achats',
    hook: "Un dossier d'achat peut être impeccable sur le papier — trois devis, trois signatures, un prix correct — et cacher une entente entre fournisseurs qu'aucun dossier pris seul ne révèle jamais. À la fin de ce module, vous aurez en main tout ce qu'il faut pour auditer un cycle d'achats entier sans tout vérifier : un échantillon justifié par les risques, une grille de conformité notée sur pièces, un croisement achats-stock, une fiche de détection de collusion documentée et un constat d'inventaire qui distingue l'erreur de gestion du détournement potentiel.",
  },

  // ───────────────────────── 2. Objectifs ─────────────────────────
  {
    type: 'objectives',
    items: [
      "Définir et figer la population d'audit d'un cycle d'achats, en produisant une note de population (période, règle de rattachement, répartition par palier de seuil) rapprochée du grand livre.",
      "Vérifier le respect des seuils et des procédures d'achat (RFQ, RFP, ITB) sur un échantillon construit par les risques, en produisant l'onglet « Sélection de l'échantillon » complété et une liste de dossiers justifiée.",
      "Noter la conformité dossier par dossier, indépendamment du fait que le prix semble correct, en produisant l'onglet « Checklist par dossier » rempli, commenté pièce par pièce, avec le taux de conformité global.",
      "Croiser les achats de biens avec les données d'inventaire (rapprochement commande, réception, facture), en produisant un tableau de rapprochement et la liste des anomalies prioritaires.",
      "Détecter une collusion entre fournisseurs en lisant toute la population de dossiers, en produisant la fiche-detection-collusion-fournisseurs.docx remplie, avec niveau de risque et recommandation.",
      "Auditer un écart d'inventaire et la péremption (FEFO) pour distinguer une erreur de gestion d'un signal de détournement, en produisant une feuille de comptage, un tableau d'écarts et une qualification écrite.",
      "Restituer des constats factuels en deux niveaux (faiblesse corrigible, escalade), sans accusation prématurée, en produisant une note de restitution appuyée sur des pièces référencées.",
    ],
  },

  // ───────────────── 3. Ce que vous allez réaliser + fil rouge ─────────────────
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours sur les achats : c'est le déroulé complet d'un audit du cycle achats, dans l'ordre où vous le vivrez sur le terrain. Chaque procédure se termine par une pièce du dossier de mission, construite sur un seul cas fil rouge, depuis le registre d'achats reçu du siège jusqu'à la note de restitution.",
      "Le cas fil rouge : vous êtes Amani K., auditeur(rice) interne de « Horizon Santé Grands Lacs » (HSGL), l'ONG fictive de santé que vous connaissez depuis le module 01. Le 1er juin 2026, Hélène V., présidente du comité d'audit, vous confie l'audit des achats de la base d'Uvira (Sud-Kivu) sur les 12 derniers mois : 64 dossiers, 451 000 USD. Vous n'avez aucun lien avec cette base — vous l'avez vérifié avec la procédure d'indépendance du module 01.",
    ],
    bullets: [
      "Livrable 1 — La note de population : période, règle de rattachement, répartition par palier, rapprochement au grand livre (procédure 1).",
      "Livrable 2 — L'onglet « Sélection de l'échantillon » complété et la liste des 19 dossiers retenus, avec leur score de risque (procédure 2).",
      "Livrable 3 — L'onglet « Checklist par dossier » rempli pour 19 dossiers, avec le taux de conformité global (procédure 3).",
      "Livrable 4 — Le tableau de rapprochement achats-stock des dossiers de biens physiques et la liste des anomalies prioritaires (procédure 4).",
      "Livrable 5 — L'analyse transversale du registre complet : gagnants, prix, coordonnées, nouveaux entrants (procédure 5).",
      "Livrable 6 — La fiche de détection de collusion fournisseurs remplie, section par section (procédure 6).",
      "Livrable 7 — La feuille de comptage, le tableau des écarts d'inventaire et la qualification gestion / détournement potentiel (procédure 7).",
      "Livrable 8 — La note de restitution en deux niveaux, avec la décision d'escalade (procédure 8).",
    ],
  },
  {
    type: 'concept',
    title: "Le cas fil rouge : l'audit des achats de la base d'Uvira",
    body: "Gardez cette fiche sous les yeux : tous les exemples du module en sont tirés, sauf l'exercice noté (cas du Nigeria). L'organisation, les personnes et les montants sont fictifs, mais construits sur des configurations réelles de bases humanitaires de l'Est de la RDC.",
    table: {
      columns: ['Personne', 'Fonction', 'Rôle dans la mission'],
      rows: [
        ['Hélène V.', "Présidente du comité d'audit", 'Commanditaire, destinataire des escalades'],
        ['Joseph T.', 'Directeur Pays', 'Destinataire du rapport, aucun lien avec les fournisseurs'],
        ['Dr Salomé T.', "Coordinatrice de la base d'Uvira", 'Audité, valideuse des commandes'],
        ['Gédéon M.', 'Responsable logistique', 'Audité, détenteur du registre d\'achats'],
        ['Clarisse N.', 'Pharmacienne, responsable du magasin médical', 'Auditée, tient les fiches de stock'],
        ['Fatou S.', 'Auditrice interne senior', 'Relit vos conclusions avant diffusion'],
      ],
    },
    example: {
      title: 'Chiffres clés du périmètre',
      lines: [
        "Base d'Uvira : 38 employés, 2 bailleurs (Fonds Meridian et ECHO), budget annuel de 2,1 M USD.",
        "Période auditée : 1er juin 2025 – 31 mai 2026 (12 mois) — 64 dossiers d'achat pour 451 000 USD.",
        "Seuils HSGL : achat direct sous 1 000 USD ; RFQ de 1 000 à 10 000 USD ; appel d'offres formel (ITB ou RFP) au-delà de 10 000 USD. Le Fonds Meridian exige une mise en concurrence formelle dès 5 000 USD (convention, article 9).",
        "Calendrier : cadrage et échantillonnage du 2 au 5 juin ; lettre de mission signée le 22 juin ; terrain à Uvira du 6 au 17 juillet 2026.",
      ],
    },
    pitfall: "Les fournisseurs fictifs de ce module (Pharma-Lac Distribution, Tanganyika Med Supply, Kivu Biomed Services) ne sont que des supports d'exercice : ne cherchez pas de personne réelle derrière eux, et ne transposez jamais un nom de fournisseur d'un cas à l'autre dans vos propres dossiers.",
  },
  {
    type: 'concept',
    title: 'La carte du module : vos outils et ce que vous y saisissez',
    body: "Deux gabarits fournis, un outil Excel standard et une feuille de travail que vous construisez. Chaque procédure indique la cellule ou la section exacte à remplir : les cellules calculées par le gabarit ne se saisissent jamais.",
    table: {
      columns: ['Outil', 'Onglet ou section', 'Ce que vous y saisissez', 'Procédure'],
      rows: [
        ['Excel — registre et tableau croisé dynamique', 'Registre copié, T_REG', 'Population, paliers, fournisseurs, gagnants par mois', '1 et 5'],
        ['grille-audit-echantillon-achats.xlsx', "« Sélection de l'échantillon »", 'E5 population, E6 niveau de risque, E11 à E15 facteurs (E7, E16, E19, E20 sont calculées)', '2'],
        ['grille-audit-echantillon-achats.xlsx', '« Checklist par dossier »', 'Colonnes A à G et I, une ligne par dossier ; H et H24 sont calculées', '3 et 4'],
        ['fiche-detection-collusion-fournisseurs.docx', 'Sections 1 à 5', 'Indicateurs Oui / Non / À approfondir, constats, niveau de risque, recommandation', '5 et 6'],
        ['Feuille de comptage (que vous construisez)', 'Stock théorique, physique, écart', 'Références comptées, lots, péremptions, écarts', '7'],
      ],
    },
    tip: "Copiez chaque gabarit dans votre dossier de mission avant de le remplir, avec un nom daté (par exemple Uvira_Grille_audit_achats_2026-07.xlsx). Ne travaillez jamais dans le fichier modèle d'origine : il vous servira à la prochaine mission.",
  },

  // ───────────────────────── 4. Théorie essentielle ─────────────────────────
  {
    type: 'concept',
    title: 'Auditer le PROCESSUS, pas le résultat',
    body: [
      "L'erreur la plus fréquente chez un auditeur junior — et la plus difficile à corriger chez quelqu'un qui vient de la logistique ou des achats — est de se demander d'abord « ce prix est-il raisonnable ? ». Cette question a sa place, mais elle vient en second. La première question d'un audit d'achats est : la procédure suivie était-elle la bonne, et a-t-elle été respectée intégralement ?",
      "Un prix correct obtenu par un processus non conforme ne prouve rien sur l'absence de fraude : il prouve que, cette fois-là, le résultat a été acceptable. Le même mécanisme peut produire, le mois suivant, un prix gonflé de 40 % chez un fournisseur complice.",
    ],
    example: {
      title: 'Résultat bon, processus non conforme (fil rouge)',
      lines: [
        "Dossier UVI-034 : 7 450 USD de matériel de laboratoire, soit 4 % sous le prix moyen du marché local. Résultat : bon.",
        "Mais la CBA (analyse comparative des offres) est datée du 11 décembre 2025, trois jours APRÈS le bon de commande du 8 décembre. Processus : non conforme.",
        "Constat d'audit : « La CBA du dossier UVI-034 est postérieure de 3 jours à la commande : le choix du fournisseur a précédé l'analyse des offres. »",
      ],
    },
    highlight: "L'audit de conformité des achats ne juge pas un résultat isolé : il juge la fiabilité du système qui produit ce résultat, dossier après dossier.",
  },
  {
    type: 'concept',
    title: 'Les seuils et les procédures : RFQ, RFP, ITB',
    body: [
      "Chaque palier de montant impose une procédure et des pièces minimales. RFQ (Request for Quotation) : demande de devis écrite à plusieurs fournisseurs. ITB (Invitation to Bid) : appel d'offres formel pour des biens ou des travaux, attribué à l'offre conforme la moins chère. RFP (Request for Proposal) : appel à propositions pour des services, noté sur des critères techniques et financiers.",
      "La CBA (Competitive Bid Analysis) est le tableau comparatif des offres, signé avant la commande. Le CPC (comité de passation des contrats, ou comité d'achat) siège pour les marchés formels : son PV, signé par un quorum valide, est la pièce qui prouve que la décision a été collégiale.",
    ],
    table: {
      columns: ['Palier', 'Procédure', 'Pièces minimales (procédure HSGL v2)'],
      rows: [
        ['Moins de 1 000 USD', 'Achat direct', 'Une facture proforma, validation du Responsable logistique'],
        ['1 000 à 10 000 USD', 'RFQ', 'Au moins 3 fournisseurs consultés par écrit, CBA signée AVANT le bon de commande'],
        ['Plus de 10 000 USD', 'ITB (biens, travaux) ou RFP (services)', "Appel d'offres formel, ouverture des plis, PV du CPC signé par un quorum"],
        ['Dès 5 000 USD, financement Fonds Meridian', 'ITB ou RFP', "Mise en concurrence formelle exigée par la convention, article 9"],
      ],
    },
    tip: "Le seuil applicable est toujours le plus strict entre la procédure interne et la convention du bailleur. Les valeurs de ce tableau sont celles de HSGL : sur votre mission, relevez-les dans la procédure achats en vigueur et dans chaque convention.",
  },
  {
    type: 'concept',
    title: "Le dossier d'achat complet : dix pièces dans l'ordre chronologique",
    body: "Un dossier d'achat est une chaîne de pièces qui doivent apparaître dans un ordre précis. Une pièce datée après celle qu'elle devait précéder est un signal : c'est le classique « la commande part, puis on régularise la paperasse ».",
    bullets: [
      "1. Demande d'achat (DA), validée par le demandeur et son responsable.",
      "2. Dossier de consultation envoyé (RFQ, ITB ou RFP), avec la date d'envoi.",
      "3. Offres reçues, datées à la réception (enveloppes, courriels horodatés).",
      "4. CBA, signée par celui qui l'établit et celui qui la valide, avant la commande.",
      "5. PV du CPC pour les marchés formels, signé par un quorum, avant la commande.",
      "6. Bon de commande (PO), signé par la personne habilitée par la matrice d'autorisation.",
      "7. Bon de réception (GRN), établi par le magasin, distinct du demandeur.",
      "8. Facture du fournisseur, avec les mêmes quantités et prix que le PO.",
      "9. Rapprochement en trois points (PO, GRN, facture) avant tout paiement.",
      "10. Paiement, avec le justificatif bancaire ou de caisse.",
    ],
    tip: "Pour tester l'ordre en deux minutes : écrivez les dix dates sur une ligne. Les pièces 3, 4, 5 doivent précéder la pièce 6, la pièce 7 doit suivre la 6, et la pièce 10 doit suivre les pièces 7 et 8.",
  },
  {
    type: 'concept',
    title: 'Échantillonner par risque, pas au hasard',
    body: [
      "Vous n'avez ni le temps ni le mandat d'ouvrir chaque dossier, et ce n'est de toute façon pas la méthode la plus efficace pour détecter une fraude organisée. Le tirage purement aléatoire, utile en audit financier statistique, est peu efficace ici : il dilue votre effort sur des dossiers sans enjeu.",
      "L'échantillonnage par risque priorise les dossiers selon des critères explicites et écrits. Le gabarit calcule une taille indicative à partir de la taille de la population et du niveau de risque du contexte : c'est un point de départ à ajuster avec votre jugement, jamais une formule à appliquer aveuglément.",
    ],
    bullets: [
      "Montant proche d'un seuil — risque de fractionnement ou de contournement de la procédure.",
      "Fournisseur revenant très souvent — risque de dépendance ou de favoritisme.",
      "Dossier signalé incomplet ou tardif par le service achats lui-même.",
      "Zone géographique, bailleur ou projet déjà identifié à risque.",
    ],
    pitfall: "Auditer 100 % des dossiers « pour être sûr » : ce temps mal alloué manque ensuite pour l'étape la plus rentable de cet audit — comparer les fournisseurs gagnants sur toute la population.",
  },
  {
    type: 'comparison-table',
    title: 'Trois façons de choisir les dossiers : ce que chacune permet',
    columns: ['Critère', 'Tirage aléatoire', 'Échantillon par risque', 'Tous les dossiers'],
    rows: [
      ['Principe', 'Chaque dossier a la même chance', 'Les dossiers à facteurs de risque passent en premier', 'Aucun tri'],
      ['Force', "Neutre, extrapolable statistiquement", 'Concentre l\'effort là où une défaillance coûte le plus', 'Aucun dossier oublié'],
      ['Limite', 'Peut manquer les rares dossiers à risque', "Dépend de la qualité de vos critères, qui doivent être écrits", 'Temps énorme, aucune lecture transversale possible'],
      ['À Uvira (64 dossiers)', 'Réservé aux 3 dossiers de contrôle', '19 dossiers : 29,7 % des dossiers, 45,9 % des montants', "Impossible dans les 8 jours de terrain"],
    ],
  },
  {
    type: 'stat-callout',
    stat: '5 indicateurs',
    caption: 'de collusion entre fournisseurs, à tester sur la population entière',
    context: "Prix identiques ou anormalement proches ; coordonnées partagées ; alternance des gagnants ; absence de nouveaux entrants ; signes de propriété commune. Aucun, pris seul, ne prouve une entente : mais deux signaux sur les mêmes fournisseurs, ou un signal répété sur plusieurs dossiers consécutifs, déclenchent toujours la fiche de détection et une investigation approfondie.",
  },
  {
    type: 'comparison-table',
    title: 'Les indicateurs de collusion : que chercher, où, et pourquoi c\'est un signal',
    columns: ['Indicateur', 'Ce qu\'il faut chercher', 'Pourquoi c\'est un signal fort', 'Où le trouver'],
    rows: [
      ['Prix identiques ou anormalement proches', "Deux offres « concurrentes » au même prix, parfois au centime près, ou à moins de 1 % d'écart", "Deux fournisseurs qui calculent leurs coûts séparément n'aboutissent presque jamais au même chiffre sans concertation", 'Tableau des offres reçues, CBA'],
      ['Coordonnées partagées', 'Même téléphone, adresse, courriel ou signataire sous des raisons sociales différentes', "Indicateur le plus fiable et le plus facile à vérifier : des concurrents réels ne partagent pas leur ligne téléphonique", 'Fiche fournisseur, en-têtes des offres, factures'],
      ['Alternance des gagnants (bid rotation)', 'Un petit groupe fermé remporte les marchés à tour de rôle', 'Chacun soumet un prix volontairement plus haut quand ce n\'est pas son tour', 'Registre complet, dans l\'ordre chronologique'],
      ['Absence de nouveaux entrants', 'Aucun nouveau soumissionnaire sur plusieurs appels d\'offres consécutifs', 'Un marché réellement ouvert attire de nouveaux acteurs ; un marché fermé protège le groupe', 'Liste des soumissionnaires par appel d\'offres'],
      ['Propriété ou gérance commune', 'Mêmes actionnaires, gérants ou comptes bancaires derrière des entreprises « concurrentes »', 'Deux concurrents ayant le même propriétaire ne sont pas des concurrents', 'Registre du commerce, comptes bancaires de paiement'],
    ],
  },
  {
    type: 'concept',
    title: 'Pourquoi la grille de conformité ne voit pas la collusion',
    body: [
      "La grille de conformité note chaque dossier pris isolément : le nombre de devis, la CBA, le PV. Un dossier de collusion bien monté est formellement irréprochable — trois devis reçus, trois signatures, un prix dans la fourchette. Le défaut n'apparaît qu'à l'échelle, en comparant plusieurs dossiers entre eux.",
      "Conformité procédurale d'un dossier et entente entre fournisseurs sont donc deux questions différentes, qui appellent deux méthodes différentes : la grille pour la première, la lecture transversale de toute la population pour la seconde.",
    ],
    example: {
      title: 'Trois dossiers à 100 %, un schéma à 3 dossiers (fil rouge)',
      lines: [
        "UVI-006 : Pharma-Lac Distribution 9 870 USD, Tanganyika Med Supply 9 940 USD, Kivu Biomed Services 9 960 USD. Score de conformité : 100 %.",
        "UVI-009 : Tanganyika Med Supply 9 940 USD, Pharma-Lac Distribution 9 995 USD, Kivu Biomed Services 10 020 USD. Score : 100 %.",
        "UVI-012 : Kivu Biomed Services 9 910 USD, Pharma-Lac Distribution 9 980 USD, Tanganyika Med Supply 9 985 USD. Score : 100 %.",
        "Lus séparément, trois dossiers sains. Alignés : les mêmes trois fournisseurs gagnent à tour de rôle, avec moins de 1 % d'écart entre les offres, toutes proches du plafond de 10 000 USD.",
      ],
    },
    pitfall: "S'arrêter à un excellent score de conformité pour conclure que le cycle achats est sain. C'est exactement le piège que tend ce type de schéma.",
  },
  {
    type: 'concept',
    title: 'Deux niveaux de constat : faiblesse corrigible ou escalade',
    body: "Un bon rapport d'audit d'achats sépare toujours deux niveaux. Les mélanger affaiblit la crédibilité des constats les plus graves : le lecteur retient « beaucoup de petits défauts » et perd de vue le seul vrai signal.",
    table: {
      columns: ['Niveau', 'Nature', 'Exemples', 'Traitement'],
      rows: [
        ['1 — Faiblesse procédurale corrigible', 'Une règle non respectée sans indice de détournement', 'PV mal archivé, CBA signée après la commande, 2 offres au lieu de 3 avec trace de refus manquante', 'Recommandation, plan d\'action, suivi dans le rapport'],
        ['2 — Signal à escalader', 'Un schéma ou une anomalie qui peut cacher une fraude', 'Pattern de collusion documenté, achat payé sans entrée en stock, écart concentré et récurrent sans justification', "Fiche de détection, note confidentielle à la présidente du comité, investigation formelle (module 08)"],
      ],
    },
    tip: "Le rôle de l'auditeur interne s'arrête à la factualisation et à la recommandation d'escalade : conclure lui-même à la fraude relève de l'investigation formelle, pas du rapport d'audit.",
  },
  {
    type: 'comparison-table',
    title: "Écart d'inventaire : erreur de gestion ou signal de détournement ?",
    columns: ['Critère', 'Écart de gestion', 'Détournement potentiel'],
    rows: [
      ['Répartition', 'Dispersé sur plusieurs petites références, sans motif', 'Concentré sur une ou deux références'],
      ['Nature des produits', 'Gants, compresses, formulaires vierges', 'Produits à forte valeur ou forte revente : injectables, antipaludiques, tests rapides'],
      ['Récurrence', 'Ponctuel, résorbé à l\'inventaire suivant', 'Répété sur plusieurs inventaires, souvent croissant, jamais résorbé'],
      ['Justification', 'Documentable après coup : bon de sortie mal classé, destruction sans PV, casse', 'Introuvable même après recherche active dans les archives'],
      ['Cohérence avec le magasin', 'Cohérent avec la rigueur générale observée', 'Contraste avec un magasin par ailleurs bien tenu'],
    ],
  },
  {
    type: 'concept',
    title: 'Péremption et FEFO : un risque de gestion et d\'éligibilité',
    body: [
      "FEFO (First Expired, First Out) : on sort en priorité les produits dont la date d'expiration est la plus proche, pour éviter la péremption en stock. Il ne faut pas le confondre avec le FIFO (le premier entré est le premier sorti), qui ignore les dates de péremption.",
      "Un produit périmé en stock est une perte pour l'ONG, et pour le bailleur un coût difficile à justifier si la destruction n'est pas tracée. La péremption se teste en trois temps : on lit les dates de péremption sur les lots, on contrôle que les périmés sont isolés et détruits avec un PV signé, on vérifie sur les bons de sortie que le FEFO est réellement appliqué.",
    ],
    table: {
      columns: ['Test', 'Ce que vous regardez', 'Anomalie typique'],
      rows: [
        ['Dates sur les lots', 'Lot et date de péremption de chaque référence comptée', 'Lots périmés encore comptés dans le stock théorique'],
        ['Isolement et destruction', 'Zone de quarantaine, PV de destruction signé', 'Périmés mélangés aux produits utilisables, destruction sans PV'],
        ['Application du FEFO', 'Ordre de sortie des lots sur les bons de sortie', 'Lot à péremption lointaine sorti alors qu\'un lot proche était disponible'],
      ],
    },
    tip: "Écartez le mot « gaspillage » de vos constats : écrivez le nombre de boîtes, la date de péremption, la valeur en USD et la pièce manquante.",
  },
  {
    type: 'concept',
    title: 'Le rapprochement en trois points : là où l\'achat fictif se voit',
    body: "Le 3-way match rapproche la commande (PO), le bon de réception (GRN) et la facture avant tout paiement. C'est le point de contrôle où un achat fictif est le plus souvent détecté : un bien payé qui n'entre jamais en stock n'est pas un problème de classement, c'est l'un des signaux les plus forts de l'audit de supply chain.",
    table: {
      columns: ['Écart constaté', 'Lecture possible', 'Niveau'],
      rows: [
        ['Quantité facturée supérieure à la quantité reçue', 'Surfacturation ou erreur de saisie : vérifier le paiement', '1, ou 2 si répété'],
        ['GRN daté avant le PO', 'Régularisation après coup', '1'],
        ['Prix facturé différent du prix du PO', 'Avenant non documenté ou surfacturation', '1, ou 2 si récurrent'],
        ['Facture payée sans aucun GRN', 'Achat potentiellement fictif ou livraison non tracée', '2 jusqu\'à preuve du contraire'],
      ],
    },
    pitfall: "Classer « problème de classement » un dossier sans GRN sans avoir cherché activement la livraison. Écrivez la recherche que vous avez menée : elle fait la différence entre l'anomalie et l'accusation.",
  },
  {
    type: 'comparison-table',
    title: 'Dire ce que l\'on sait : formuler un constat sans accuser',
    columns: ['À écrire (factuel)', 'À éviter (conclusion hâtive)'],
    rows: [
      ["Les trois fournisseurs ont remporté 31 des 34 mises en concurrence ; 7 procédures présentent un écart de moins de 1 % entre les offres.", "Les trois fournisseurs se sont entendus pour truquer les appels d'offres."],
      ["Aucune entrée en stock n'a été retrouvée pour 24 tensiomètres et 40 oxymètres payés 8 300 USD (dossier UVI-038).", 'Le logisticien a détourné le matériel.'],
      ["L'écart sur la ceftriaxone, de 21 boîtes, reste sans justification après recherche dans 38 bons de sortie.", 'Quelqu\'un vole des médicaments au magasin.'],
      ['Ce schéma justifie une investigation approfondie (module 08).', 'Il faut suspendre les trois fournisseurs et sanctionner le personnel.'],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire clé à maîtriser dès ce module',
    terms: [
      { term: 'RFQ', definition: "Request for Quotation — demande de devis écrite à plusieurs fournisseurs, pour les achats de moyen montant." },
      { term: 'ITB', definition: "Invitation to Bid — appel d'offres formel pour des biens ou des travaux, attribué à l'offre conforme la moins chère." },
      { term: 'RFP', definition: "Request for Proposal — appel à propositions pour des services, noté sur des critères techniques et financiers." },
      { term: 'CBA', definition: "Competitive Bid Analysis — tableau d'analyse comparative des offres, signé avant la commande." },
      { term: 'CPC', definition: "Comité de passation des contrats (comité d'achat) : il siège pour les marchés formels, son PV est signé par un quorum." },
      { term: 'GRN', definition: "Goods Received Note — bon de réception établi par le magasin quand la marchandise arrive." },
      { term: '3-way match', definition: "Rapprochement entre la commande (PO), le bon de réception (GRN) et la facture, avant tout paiement." },
      { term: 'Échantillonnage par risque', definition: "Sélection raisonnée des dossiers à auditer en priorisant ceux qui présentent le plus de facteurs de risque." },
      { term: 'Fractionnement', definition: "Découpage d'un besoin en plusieurs commandes pour passer sous un seuil de procédure ou d'autorisation." },
      { term: 'Bid rigging / collusion', definition: "Entente entre soumissionnaires censés être concurrents pour fausser le résultat d'une mise en concurrence." },
      { term: 'Bid rotation', definition: "Forme de collusion où un groupe de fournisseurs se partage les marchés à tour de rôle." },
      { term: 'FEFO', definition: "First Expired, First Out — sortir en priorité les produits dont l'expiration est la plus proche." },
      { term: "Écart d'inventaire", definition: "Différence entre le stock théorique enregistré et le stock physique constaté lors d'un comptage." },
    ],
  },

  // ── Procédure 1 — Cartographier les accès réels ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Préparer la demi-journée de cartographie',
    intro: "Pourquoi : la cartographie est la matière première de toute la matrice. Mal préparée, vous obtiendrez les fiches de poste officielles au lieu de la réalité. Quand : le 20 mai 2026, la veille du terrain. Entrées : organigramme, liste du personnel avec les départs des 12 derniers mois, procédure achats v2 et grille de seuils en vigueur.",
    steps: [
      {
        title: 'Planifiez une demi-journée avec la Finance et la Logistique',
        actions: [
          "Envoyez un courriel d'annonce à Joseph T., Dr Patrice N. et Ruth B., avec l'objectif et la durée.",
          "Réservez quatre heures sur site, dans le bureau qui contient le coffre, la banque en ligne et la clé du magasin.",
          "Répartissez les entretiens : Fatou S. avec Josué M., Esther K. et Didier L. ; vous avec Ruth B., Dr Patrice N. et Joseph T.",
        ],
      },
      {
        title: 'Préparez la liste des accès à relever',
        actions: [
          "Listez les clés : coffre, magasin, armoire des chéquiers et du cachet.",
          "Listez les accès numériques : banque en ligne (profil et droits), logiciel comptable (lecture, écriture, validation, clôture), tableur des stocks.",
          "Listez les signatures : bons de commande, chèques, virements, bons de sortie de caisse.",
          "Ajoutez une colonne « Preuve vue » : aucune ligne ne sera retenue sans elle.",
        ],
      },
      {
        title: 'Rassemblez les documents de référence',
        body: "Procédure achats v2, grille de seuils v2, organigramme, liste du personnel avec dates d'arrivée et de départ, convention du Fonds Meridian (articles achats).",
      },
    ],
    example: {
      title: 'Courriel d\'annonce envoyé le 20 mai 2026 (extrait)',
      lines: [
        "Objet : Revue de la séparation des tâches — demi-journée de travail jeudi 21 mai, 8 h à 12 h.",
        "« Bonjour Joseph, Patrice et Ruth. Dans le cadre de la mission d'audit signée le 7 mai, je vous propose une demi-journée pour comprendre comment le cycle achats-stock-paiement-caisse fonctionne réellement aujourd'hui, avec les départs récents. L'objectif n'est pas d'évaluer les personnes mais de repérer où la structure expose chacun. Merci de prévoir l'accès à la banque en ligne, au logiciel comptable, au magasin et à la caisse. Fatou S. rencontrera Josué, Esther et Didier. Bien cordialement, Amani. »",
      ],
    },
    result: "Un courriel envoyé, quatre heures réservées, une liste d'accès à relever avec sa colonne « Preuve vue » et six documents de référence rassemblés dans le dossier 04_Tests.",
    pitfall: "Demander à chacun de « décrire son poste » : vous obtiendrez la fiche de poste officielle. Demandez-lui de vous montrer ce qu'il fait, écran ou clé en main.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Relever, personne par personne, qui détient réellement chaque accès',
    intro: "Pourquoi : un cumul « que tout le monde sait » n'est écrit nulle part, mais c'est lui qui ouvre la porte à la fraude. Quand : jeudi 21 mai, 8 h à 12 h. Entrées : la liste d'accès de l'étape 1.",
    steps: [
      {
        title: 'Posez à chacun les mêmes cinq questions',
        actions: [
          "Qui détient une clé, un code ou un profil que vous seul utilisez ?",
          "Montrez-moi ce que vous faites quand arrive une demande d'achat de 800 USD, du début à la fin.",
          "Qui vous contrôle, et à quel moment, concrètement ?",
          "Qui vous remplace quand vous êtes absent, et avec quels accès ?",
          "Y a-t-il une tâche que vous faites depuis un départ « en attendant un recrutement » ?",
        ],
      },
      {
        title: 'Demandez à voir, pas seulement à entendre',
        actions: [
          "Faites ouvrir l'écran de gestion des utilisateurs de la banque en ligne et capturez-le avec la date et l'heure.",
          "Faites ouvrir la liste des droits du logiciel comptable, utilisateur par utilisateur.",
          "Demandez à voir la clé du magasin et qui en possède un double.",
        ],
      },
      {
        title: 'Notez les cumuls que « tout le monde sait »',
        body: "Écrivez-les tels que les personnes les décrivent, avec leur justification (« c'est plus rapide comme ça », « en attendant le recrutement »). Cette justification est une information de cause précieuse pour le plan.",
      },
      {
        title: 'Recoupez chaque déclaration avec une preuve',
        actions: [
          "Déclaration contre extraction : filtrez les bons de commande où demandeur = réceptionnaire.",
          "Déclaration contre liste d'utilisateurs : comparez la banque et le logiciel à la liste du personnel RH.",
        ],
      },
    ],
    table: {
      columns: ['Personne', 'Accès détenus', 'Preuve vue'],
      rows: [
        ['Josué M.', "Signature des bons de commande ≤ 1 000 USD ; envoi des PO ; réception quand Didier L. est absent", "Extraction : 31 bons où demandeur = réceptionnaire"],
        ['Esther K.', "Espèces et livre de caisse (plafond 2 000 USD) ; rapprochement de sa propre caisse", "Livre de caisse signé par elle seule sur les 6 derniers mois"],
        ['Didier L.', "Clé unique du magasin ; cahier de stock", "Observation sur place ; aucun double de clé"],
        ['Ruth B.', "Profil bancaire à tous les droits ; écriture et clôture comptables", "Capture de l'écran des utilisateurs de la banque, 21/05 à 9 h 40"],
        ['Dr Patrice N.', "Signature des bons de commande > 1 000 USD ; profil bancaire en consultation seule", "Capture de l'écran des utilisateurs de la banque"],
        ['Grâce M. (partie)', "Profil bancaire actif malgré son départ le 16/01/2026", "Même capture : statut « actif »"],
      ],
    },
    result: "Un relevé par personne, chaque ligne appuyée d'une preuve vue ; la liste complète des cumuls « connus de tous » avec leur justification.",
    tip: "Faites conduire les entretiens des personnes que vous connaissez de longue date par votre pair. À Goma, c'est précisément la mesure de mitigation décidée par le comité : Fatou S. voit Josué M., Esther K. et Didier L.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Décomposer chaque cycle en quatre fonctions',
    intro: "Pourquoi : c'est cette décomposition qui alimente les lignes de la matrice. Sans elle, vous cocherez des cases au hasard. Entrées : le relevé de l'étape 2 et les cinq types d'opération déjà prévus dans le template.",
    steps: [
      {
        title: 'Listez les cycles à analyser',
        actions: [
          "Reprenez les cinq cycles du template : émission du bon de commande, réception marchandise et stock, approbation du paiement, tenue de caisse, comptabilisation.",
          "Ajoutez un cycle seulement s'il est dans le périmètre de la mission (ici, la paie est exclue par la lettre de mission : signalez-la comme zone non couverte).",
        ],
      },
      {
        title: 'Pour chaque cycle, écrivez l\'action concrète de chacune des quatre fonctions',
        body: "Utilisez les libellés des lignes du template : initiation, approbation, exécution, enregistrement ou contrôle. Une fonction qui n'a pas d'action concrète dans votre organisation est déjà un constat.",
      },
      {
        title: 'Attribuez chaque action aux personnes qui l\'exécutent réellement',
        actions: [
          "Reportez les noms depuis la fiche de relevé de l'étape 2.",
          "Écrivez « personne » quand une fonction n'est exercée par personne.",
          "Écrivez « suppléance » quand une personne exerce une fonction seulement en l'absence d'une autre.",
        ],
      },
    ],
    table: {
      columns: ['Fonction', 'Action concrète (cycle « Approbation paiement »)', 'Qui réellement à Goma'],
      rows: [
        ['Initiation', 'Constituer le dossier de paiement : bon de commande, bon de livraison, facture', 'Josué M.'],
        ['Approbation', 'Approuver le paiement selon le seuil applicable', 'Ruth B. et Dr Patrice N.'],
        ['Exécution', 'Exécuter le virement en banque en ligne', 'Ruth B. (profil à tous les droits)'],
        ['Enregistrement / contrôle', 'Comptabiliser le paiement et rapprocher le relevé', 'Ruth B.'],
      ],
    },
    result: "Cinq cycles décomposés en quatre fonctions, soit vingt lignes d'attribution, qui correspondent exactement aux lignes 6 à 29 de la matrice.",
    tip: "Pour d'autres missions, ajoutez le cycle RH-paie avec ses quatre fonctions : tenue du fichier du personnel (initiation), validation de l'état de paie (approbation), préparation du virement de paie (exécution), rapprochement paie-banque (contrôle). Les employés fantômes naissent d'un cumul entre les deux premières fonctions et la troisième.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Faire valider la cartographie par écrit',
    intro: "Pourquoi : une cartographie contestée plus tard par « ce n'est pas ce que j'ai dit » ruine la matrice. La validation écrite protège aussi les personnes honnêtes. Quand : vendredi 22 mai, avant de remplir la matrice. Entrées : relevé par personne, tableau des quatre fonctions.",
    steps: [
      {
        title: 'Rédigez la fiche de cartographie (une à deux pages)',
        actions: [
          "Rappelez en tête l'objet, la date, les personnes rencontrées et les preuves vues.",
          "Reprenez le relevé par personne et le tableau des quatre fonctions par cycle.",
          "Ajoutez la liste des écarts entre procédure et réalité, sans commentaire de jugement.",
        ],
      },
      {
        title: 'Envoyez à chaque personne la ligne qui la concerne',
        body: "Demandez-lui de répondre « conforme » ou « à corriger, parce que… » avant midi. Ne partagez pas les lignes des autres : chacun valide ses faits, pas ceux de ses collègues.",
      },
      {
        title: 'Intégrez les corrections et datez la version finale',
        actions: [
          "Corrigez uniquement ce qui est étayé par une preuve ; si une correction n'est pas prouvée, notez les deux versions.",
          "Nommez le fichier 2026-05-22_Cartographie_acces_Goma_v1.pdf.",
        ],
      },
      {
        title: 'Classez dans le dossier de la mission',
        body: "Rangez la fiche, les captures d'écran et les réponses des personnes dans 04_Tests/SoD_Goma. Ce dossier est le dossier de preuves de la matrice.",
      },
    ],
    example: {
      title: 'Message de validation et réponse reçue',
      lines: [
        "Message à Didier L. : « Bonjour Didier, voici ce que j'ai noté : vous êtes le seul à détenir la clé du magasin, vous réceptionnez les marchandises et vous tenez le cahier de stock. Merci de répondre avant midi par « conforme » ou « à corriger, parce que… ». Fatou. »",
        "Réponse de Didier L., 11 h 05 : « Conforme. J'ajoute que je demande depuis octobre qu'un second jeu de clés soit confié à quelqu'un d'autre pour les jours où je suis absent. »",
        "Ce complément est conservé : il alimente la future règle de suppléance (procédure 3).",
      ],
    },
    result: "Une fiche de cartographie validée par les six personnes concernées (ou assortie de leurs réserves écrites), classée avec ses preuves.",
    pitfall: "Faire valider la fiche uniquement par le Coordinateur ou le Directeur Pays. Ce sont les personnes décrites qui doivent confirmer leurs accès ; la hiérarchie ignore souvent ce que font réellement ses équipes.",
  },

  // ── Procédure 2 — Remplir la matrice et lire les alertes ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Ouvrir le template, le dupliquer et adapter les rôles',
    intro: "Pourquoi : le template est conçu pour que la formule fasse le diagnostic ; vous ne devez adapter que les intitulés de rôles. Quand : vendredi 22 mai. Entrée : la fiche de cartographie validée. Outil : matrice-autorisation-separation-taches.xlsx.",
    steps: [
      {
        title: 'Enregistrez une copie de travail avant toute saisie',
        actions: [
          "Ouvrez matrice-autorisation-separation-taches.xlsx.",
          "Choisissez Fichier > Enregistrer sous et nommez : 2026-05-22_Matrice_SoD_Goma_ACTUEL.xlsx.",
          "Laissez le template d'origine intact dans le dossier du module.",
        ],
      },
      {
        title: 'Lisez le mode d\'emploi de la ligne 3 et repérez la zone de saisie',
        body: "La feuille « Matrice d'autorisation » compte cinq types d'opération (colonne A), quatre fonctions par opération (colonne B), cinq colonnes de rôles (C à G), une colonne d'alerte (H) et une colonne de contrôle compensatoire (I).",
      },
      {
        title: 'Renommez les cinq rôles de la ligne 5',
        actions: [
          "Remplacez C5, D5, E5, F5 et G5 par poste + prénom de personnes réelles.",
          "Choisissez les cinq personnes qui détiennent un accès réel dans le cycle, pas les cinq plus gradés.",
          "N'altérez pas les colonnes A, B, H, I ni les lignes de calcul (10, 15, 20, 25 et 30).",
        ],
      },
    ],
    table: {
      columns: ['Cellule', 'Intitulé du template', 'Intitulé saisi pour Goma'],
      rows: [
        ['C5', 'Log Officer', 'Logistics Officer — Josué M.'],
        ['D5', 'Finance Officer', 'Assistante logistique — Esther K.'],
        ['E5', 'Coordinateur / Chef de base', 'Magasinier — Didier L.'],
        ['F5', 'Country Director', 'Finance Manager — Ruth B.'],
        ['G5', 'Poste 5 (à personnaliser)', 'Coordinateur de base — Dr Patrice N.'],
      ],
    },
    example: {
      title: 'Pourquoi Joseph T. n\'a pas de colonne',
      lines: [
        "Le Directeur Pays ne touche à aucune des opérations du cycle : il intervient seulement au-delà des seuils (plus de 10 000 USD dans la grille v2), un niveau que vous traiterez dans la DOA (procédure 4).",
        "Si plusieurs personnes tiennent exactement les mêmes droits, ne créez pas de colonne en plus : indiquez-les ensemble dans un seul intitulé et notez-le dans la fiche de cartographie.",
        "Si vous avez plus de cinq rôles actifs sur un même cycle, faites une seconde copie du fichier pour les autres : le template ne se modifie pas.",
      ],
    },
    result: "Une copie de travail datée dont la ligne 5 porte les cinq personnes réelles du cycle, et dont tout le reste est intact.",
    pitfall: "Garder « Country Director » en colonne F parce que le template le propose. Une colonne vide ou fictive fausse le comptage : chaque colonne doit correspondre à une personne qui détient réellement des accès.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Cocher les X des blocs « Émission du bon de commande » et « Réception marchandise / stock » (lignes 6 à 15)',
    intro: "Pourquoi : chaque X dit qui peut réellement faire quoi. La validation de données du template n'accepte que la lettre X. Entrées : la fiche de cartographie, l'extraction des bons de commande. Règle d'or : cochez ce que la personne fait ou peut faire seule dans les faits, pas ce que prévoit la procédure.",
    steps: [
      {
        title: 'Posez-vous trois questions pour chaque case',
        actions: [
          "Cette personne exécute-t-elle cette fonction aujourd'hui, ou a-t-elle les accès pour le faire seule ?",
          "Ai-je une preuve vue (extraction, capture, observation) ?",
          "Une autre personne l'exécute-t-elle aussi ? Dans ce cas, cochez les deux : plusieurs personnes peuvent tenir la même fonction.",
        ],
      },
      {
        title: 'Saisissez X en majuscule dans les cellules C à G des lignes 6 à 9, puis 11 à 14',
        body: "Une ligne sans aucun X est un constat à part entière : fonction exercée par personne, ou exercée hors de la base. Notez-la dans votre fiche de preuves.",
      },
      {
        title: 'Cochez les pratiques occasionnelles dès qu\'elles sont prouvées',
        body: "La suppléance de Josué M. à la réception ne concerne que 31 bons, mais elle prouve que la structure le lui permet. La matrice décrit ce que la structure autorise.",
      },
    ],
    table: {
      columns: ['Ligne et fonction', 'Cases cochées (X)', 'Preuve'],
      rows: [
        ['6 — PO : initiation (besoin, choix du fournisseur)', 'Josué M.', "Extraction : 100 % des bons portent son nom en demandeur"],
        ['7 — PO : approbation (seuil applicable)', 'Josué M. (≤ 1 000 USD) et Dr Patrice N. (> 1 000 USD)', 'Grille v2 et signatures relevées sur 20 bons'],
        ['8 — PO : exécution (envoi du PO au fournisseur)', 'Josué M.', "Courriels d'envoi retrouvés"],
        ['9 — PO : enregistrement de l\'engagement', 'Ruth B.', 'Suivi budgétaire tenu par elle'],
        ['11 — Réception : demande de livraison', 'Josué M.', 'Courriels aux fournisseurs'],
        ['12 — Réception : conformité qualité et quantité', 'Josué M.', 'Bons de réception signés par lui'],
        ['13 — Réception : réception physique et entrée en magasin', 'Didier L. et Josué M. (31 bons)', 'Extraction ; observation sur place'],
        ['14 — Réception : mise à jour du cahier de stock', 'Didier L.', 'Cahier de stock manuscrit, écriture unique'],
      ],
    },
    result: "Les lignes 6 à 9 et 11 à 14 sont saisies, chaque X avec sa pièce de preuve ; les cellules des lignes 10 et 15 comptent déjà les fonctions par personne.",
    pitfall: "Cocher ce que la procédure prévoit plutôt que ce que vous avez vu. Une matrice remplie « d'après la procédure » ne détectera jamais un cumul : elle reproduira le document que vous auditez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Cocher les X des blocs « Approbation paiement », « Tenue de caisse » et « Comptabilisation » (lignes 16 à 29)',
    intro: "Pourquoi : ce sont les trois blocs où le cumul coûte le plus cher en cas de fraude : l'argent sort, ou l'écriture efface la trace. Mêmes règles qu'à l'étape précédente. Entrées : captures de la banque et du logiciel, livre de caisse.",
    steps: [
      {
        title: 'Cochez les lignes 16 à 19 (approbation paiement)',
        body: "Pour la ligne 18 (exécution du paiement), cochez la personne qui saisit et valide réellement dans la banque en ligne, d'après la capture des droits utilisateurs, pas d'après la procédure.",
      },
      {
        title: 'Cochez les lignes 21 à 24 (tenue de caisse)',
        body: "Pour la ligne 24 (livre de caisse et rapprochement), cochez qui tient le livre ET qui fait le rapprochement : si c'est la même personne que celle qui décaisse, vous obtenez le cumul le plus classique de la Finance.",
      },
      {
        title: 'Cochez les lignes 26 à 29 (comptabilisation)',
        body: "Utilisez les droits du logiciel comptable : qui saisit, qui valide, qui clôture la période, qui rapproche la banque. Une personne peut tout faire dans le logiciel même si elle n'en a pas le titre.",
      },
    ],
    table: {
      columns: ['Ligne et fonction', 'Cases cochées (X)', 'Preuve'],
      rows: [
        ['16 — Paiement : constitution du dossier', 'Josué M.', 'Dossiers BC + BL + facture transmis par lui'],
        ['17 — Paiement : approbation', 'Ruth B. et Dr Patrice N.', 'Paraphes sur les ordres de paiement'],
        ['18 — Paiement : exécution du virement', 'Ruth B.', 'Capture banque : profil unique à tous les droits'],
        ['19 — Paiement : comptabilisation et rapprochement', 'Ruth B.', 'Journal de banque saisi par elle'],
        ['21 — Caisse : demande d\'avance', 'Josué M.', 'Demandes d\'avance des achats locaux'],
        ['22 — Caisse : approbation', 'Dr Patrice N.', 'Visa sur les bons de sortie'],
        ['23 — Caisse : décaissement des espèces', 'Esther K.', 'Caisse et clé en sa seule possession'],
        ['24 — Caisse : livre de caisse et rapprochement', 'Esther K.', 'Livre de caisse signé par elle seule'],
        ['26 — Compta : saisie de la pièce', 'Esther K.', 'Saisie des pièces de caisse dans le logiciel'],
        ['27 à 29 — Compta : validation, clôture, rapprochement bancaire', 'Ruth B.', 'Droits du logiciel et rapprochement signé par elle'],
      ],
    },
    result: "Les 20 lignes de saisie de la matrice (6 à 9, 11 à 14, 16 à 19, 21 à 24, 26 à 29) sont complétées et prouvées.",
    tip: "Ne corrigez rien à ce stade : listez d'abord tous les cumuls réels, même ceux qui vous semblent embarrassants à écrire pour les personnes concernées. La cible se construit à la procédure 3.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Lire les alertes : colonne H, lignes de calcul et feuille Synthèse',
    intro: "Pourquoi : la formule détecte automatiquement les cumuls, mais vous devez savoir lire ce qu'elle compte pour ne pas lui faire dire plus qu'elle ne dit. Entrée : la matrice ACTUEL entièrement saisie.",
    steps: [
      {
        title: 'Lisez les lignes de calcul 10, 15, 20, 25 et 30',
        body: "Chacune compte, par personne, le nombre de fonctions cochées dans son bloc : par exemple C10 vaut =COUNTIF(C6:C9;\"X\"), soit « nombre de X de la colonne C pour le bloc 1 ». Dans un Excel en français, COUNTIF s'affiche NB.SI.",
      },
      {
        title: 'Lisez l\'alerte de la colonne H (H6, H11, H16, H21, H26)',
        actions: [
          "La formule est de la forme =IF(MAX(C10:G10)>=2;\"⚠ CUMUL À RISQUE\";\"OK — séparation respectée\").",
          "Elle signale un bloc dès qu'une seule personne tient deux fonctions ou plus : elle ne distingue ni 2 de 3 fonctions, ni les fonctions entre elles.",
          "Elle n'indique pas qui cumule : repérez-le vous-même dans la ligne de calcul.",
        ],
      },
      {
        title: 'Ouvrez la feuille « Synthèse »',
        actions: [
          "B4 affiche le nombre de types d'opération analysés (5).",
          "B5 compte les alertes « ⚠ CUMUL À RISQUE » sur H6:H30.",
          "B6 donne le niveau global : 3 alertes ou plus = « ⚠ ALERTE ÉLEVÉE » ; 1 ou 2 = « À SURVEILLER » ; 0 = « CONFORME ».",
        ],
      },
      {
        title: 'Recopiez le résultat dans votre note de travail',
        body: "Pour chaque bloc en alerte, notez qui cumule, quelles fonctions, et le niveau global affiché par la Synthèse.",
      },
    ],
    table: {
      columns: ['Bloc', 'Alerte (colonne H)', 'Qui cumule (ligne de calcul)', 'Fonctions cumulées'],
      rows: [
        ['Émission du bon de commande', '⚠ CUMUL À RISQUE', 'Josué M. : 3', 'Initiation, approbation, exécution'],
        ['Réception marchandise / stock', '⚠ CUMUL À RISQUE', 'Josué M. : 3 ; Didier L. : 2', 'Initiation, approbation, exécution ; exécution, enregistrement'],
        ['Approbation paiement', '⚠ CUMUL À RISQUE', 'Ruth B. : 3', 'Approbation, exécution, enregistrement'],
        ['Tenue de caisse', '⚠ CUMUL À RISQUE', 'Esther K. : 2', 'Exécution, enregistrement'],
        ['Comptabilisation', '⚠ CUMUL À RISQUE', 'Ruth B. : 3', 'Approbation, exécution, enregistrement'],
      ],
    },
    example: {
      title: 'Lecture de la feuille Synthèse (matrice ACTUEL)',
      lines: [
        "B4 = 5 types d'opération analysés ; B5 = 5 cumuls à risque détectés ; B6 = « ⚠ ALERTE ÉLEVÉE ».",
        "Formulation pour la note : « Les cinq opérations du cycle présentent chacune au moins un cumul de fonctions porté par une seule personne ; le niveau d'alerte global est élevé. »",
      ],
    },
    result: "Une lecture écrite de la matrice ACTUEL : cinq alertes, les personnes concernées et le niveau global, prêts à alimenter la priorisation.",
    pitfall: "Annoncer « 5 cumuls » comme s'il s'agissait de 5 fraudes. L'alerte désigne une exposition structurelle, pas une irrégularité commise ; le vocabulaire de votre note doit le dire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Compléter la lecture : ce que la formule ne voit pas',
    intro: "Pourquoi : un outil de diagnostic a des angles morts. Un auditeur qui les ignore rassure à tort la direction. Entrées : la matrice ACTUEL, les captures de la banque et du logiciel, la liste du personnel RH.",
    steps: [
      {
        title: 'Cherchez les fonctions que personne n\'exerce',
        body: "Un bloc « OK » peut cacher une ligne sans aucun X : si personne n'approuve ou ne contrôle, il n'y a aucun cumul, mais il n'y a pas non plus de contrôle. Parcourez chaque ligne de saisie et marquez celles qui sont vides.",
      },
      {
        title: 'Lisez la matrice par colonne, bloc après bloc',
        actions: [
          "Repérez la personne qui apparaît dans plusieurs blocs, surtout comme enregistreur : concentration de pouvoir et dépendance à une seule personne.",
          "Repérez qui tient la fonction « contrôle » alors qu'il a initié l'opération dans un autre bloc.",
        ],
      },
      {
        title: 'Cherchez les accès qui n\'ont pas de colonne',
        actions: [
          "Comparez la liste des utilisateurs de la banque et du logiciel à la liste RH : tout nom absent des colonnes est un accès fantôme.",
          "Cherchez les mots de passe partagés et les profils génériques : ils effacent la séparation même si les X sont corrects.",
        ],
      },
      {
        title: 'Vérifiez les liens entre personnes',
        body: "Deux personnes cochées sur des fonctions séparées ne sont pas indépendantes si l'une est le subordonné direct de l'autre ou si elles partagent un accès. Notez tout lien hiérarchique ou familial relevé pendant les entretiens.",
      },
      {
        title: 'Figez la version ACTUEL',
        body: "Enregistrez une copie PDF de la matrice et de la Synthèse (2026-05-22_Matrice_SoD_Goma_ACTUEL.pdf) : vous la comparerez à la version CIBLE.",
      },
    ],
    table: {
      columns: ['Angle mort', 'Constat à Goma', 'Suite'],
      rows: [
        ['Fonction exercée par personne', 'Approbation de conformité à la réception : seul Josué M., qui initie', 'Intégrer à la cible : un tiers doit signer la conformité'],
        ['Concentration sur une personne', 'Ruth B. tient « enregistrement » sur 3 blocs sur 5', 'Risque d\'absence : prévoir une suppléance (procédure 3)'],
        ['Accès sans colonne', 'Profil bancaire de Grâce M. (partie le 16/01/2026) toujours actif', 'Révocation et recherche des opérations (procédure 6)'],
        ['Hiérarchie entre personnes cochées', 'Esther K. et Didier L. sont supervisés par Josué M.', 'Ne pas faire d\'Esther K. le contrôle de Josué M.'],
      ],
    },
    result: "Une liste des angles morts, chacun relié à une action, et une version ACTUEL figée, datée et archivée avec ses preuves.",
    tip: "Quand une même personne apparaît partout, ne concluez pas qu'elle est suspecte : concluez que la structure dépend d'elle. Dites-le ainsi à la direction : c'est un risque d'absence autant qu'un risque de fraude.",
  },

  // ── Procédure 3 — Prioriser et traiter les cumuls ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: "Chiffrer l'exposition de chaque cumul détecté",
    intro: "Pourquoi : un cumul sur une caisse d'avance de 200 dollars n'a pas le poids d'un cumul sur la validation de paiements fournisseurs à six chiffres. Entrées : matrice ACTUEL, extraction des 412 bons de commande, grand livre, états de stock, livre de caisse.",
    steps: [
      {
        title: 'Notez, pour chaque bloc en alerte, le flux exposé sur la période',
        actions: [
          "Paiement : total des paiements fournisseurs du grand livre.",
          "Bon de commande : montant des bons que la personne signe seule (ici < 1 000 USD).",
          "Stock : valeur du stock au dernier inventaire ou au bilan.",
          "Caisse : total des décaissements de la période.",
        ],
      },
      {
        title: 'Notez la fréquence des opérations',
        body: "Nombre d'opérations par mois : plus l'opération est fréquente, plus le cumul offre d'occasions.",
      },
      {
        title: 'Cotez impact et probabilité avec les échelles du module 01',
        actions: [
          "Impact : 1 = moins de 10 000 USD ; 2 = 10 000 à 50 000 USD ; 3 = plus de 50 000 USD.",
          "Probabilité : 1 = contrôle en place et testé ; 2 = contrôle en place non testé ; 3 = contrôle absent ou contourné.",
          "Score = impact × probabilité.",
        ],
      },
    ],
    table: {
      columns: ['Bloc', 'Qui cumule', 'Exposition (6 mois)', 'Impact × probabilité = score'],
      rows: [
        ['Approbation paiement', 'Ruth B.', '1 380 000 USD ; 69 paiements par mois', '3 × 3 = 9 (profil bancaire unique, aucune double validation)'],
        ['Émission du bon de commande', 'Josué M.', '68 000 USD de bons < 1 000 USD ; 36 par mois', '3 × 3 = 9 (37 bons à demandeur = réceptionnaire)'],
        ['Comptabilisation', 'Ruth B.', '1 380 000 USD de pièces enregistrées', '3 × 2 = 6 (revue trimestrielle du siège, jamais tracée)'],
        ['Réception / stock', 'Josué M. ; Didier L.', '142 000 USD de stock', '3 × 2 = 6 (inventaire partiel en décembre 2025)'],
        ['Tenue de caisse', 'Esther K.', '38 000 USD ; 19 reconstitutions', '2 × 3 = 6 (aucun comptage par un tiers)'],
      ],
    },
    result: "Un tableau chiffré qui associe à chaque cumul un montant exposé, une fréquence et un score, avec la justification de chaque cote.",
    pitfall: "Coter « au ressenti » en fonction de la gêne que provoquerait la correction. La cotation s'appuie sur le montant exposé et l'état du contrôle, jamais sur la sympathie ou la susceptibilité de la personne concernée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Classer les cumuls et retenir les trois ou quatre à traiter en premier',
    intro: "Pourquoi : vouloir tout corriger d'un coup avec un effectif limité est le meilleur moyen de ne rien corriger du tout. Entrée : le tableau chiffré de l'étape 1.",
    steps: [
      {
        title: 'Triez par score décroissant, puis par montant exposé',
        body: "À score égal, passez en premier le cumul qui expose le montant le plus élevé.",
      },
      {
        title: 'Retenez les trois ou quatre cumuls de la première vague',
        actions: [
          "Vague 1 (traitement sous 30 jours) : les trois ou quatre premiers rangs.",
          "Vague 2 (traitement sous 90 jours) : les autres, avec une mesure rapide et gratuite dès maintenant si elle existe.",
        ],
      },
      {
        title: 'Justifiez le classement par écrit',
        body: "Deux phrases par cumul : montant exposé, état du contrôle. Cette justification sera relue par le comité et par Fatou S.",
      },
    ],
    table: {
      columns: ['Rang', 'Bloc', 'Score', 'Montant exposé', 'Vague'],
      rows: [
        ['1', 'Approbation paiement', '9', '1 380 000 USD', 'Vague 1'],
        ['2', 'Émission du bon de commande', '9', '68 000 USD', 'Vague 1'],
        ['3', 'Comptabilisation', '6', '1 380 000 USD', 'Vague 1'],
        ['4', 'Réception / stock', '6', '142 000 USD', 'Vague 1'],
        ['5', 'Tenue de caisse', '6', '38 000 USD', 'Vague 2, avec comptage surprise immédiat'],
      ],
    },
    result: "Une liste de quatre cumuls à traiter dans les 30 jours et d'un cumul traité en vague 2, avec la justification de chaque choix.",
    tip: "Un comptage de caisse surprise ne coûte rien et se fait dès la semaine prochaine : c'est un gain rapide qui prouve la volonté de traiter même les cumuls de vague 2.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Choisir, pour chaque cumul : éliminer par redistribution ou compenser',
    intro: "Pourquoi : on commence toujours par essayer d'éliminer le cumul, puis on compense seulement ce qui ne peut pas l'être avec l'effectif disponible. Entrées : les cinq personnes disponibles, leurs compétences, leur charge de travail, le classement de l'étape 2.",
    steps: [
      {
        title: 'Posez les règles de la redistribution',
        actions: [
          "Une personne ne contrôle jamais son propre travail.",
          "Une personne ne contrôle pas son supérieur direct ni ne dépend de lui pour le contrôle.",
          "La nouvelle charge doit rester réaliste : calculez le temps hebdomadaire requis.",
        ],
      },
      {
        title: 'Testez une redistribution pour chaque cumul, de vague 1 à vague 2',
        body: "Listez les cinq personnes, attribuez les quatre fonctions de façon à n'avoir au plus qu'une fonction par personne, puis vérifiez la charge.",
      },
      {
        title: 'Si aucune combinaison ne fonctionne, déclarez le cumul « assumé »',
        body: "Écrivez pourquoi : effectif, compétence, absence de profil possible. Un cumul assumé sans raison écrite est un cumul subi.",
      },
      {
        title: 'Prévoyez une règle de suppléance écrite',
        body: "Quand le titulaire d'une fonction est absent, désignez à l'avance qui le remplace, et qui signe à la place du suppléant si celui-ci cumulerait alors deux fonctions.",
      },
    ],
    table: {
      columns: ['Bloc', 'Redistribution testée', 'Résultat', 'Décision'],
      rows: [
        ['Paiement', "Ruth B. saisit le virement (maker), Dr Patrice N. le valide dans la banque (checker)", "Approbation et exécution séparées ; il reste l'enregistrement chez Ruth B.", 'Cumul exécution + enregistrement assumé, compensé'],
        ['Bon de commande', 'Josué M. initie ; Dr Patrice N. approuve tous les bons ; Esther K. envoie le PO ; Ruth B. enregistre', 'Une fonction par personne', 'Cumul éliminé'],
        ['Comptabilisation', 'Ruth B. saisit, Dr Patrice N. valide le journal, le siège clôture la période', 'Reste la saisie + rapprochement bancaire chez Ruth B.', 'Cumul saisie + rapprochement assumé, compensé'],
        ['Réception / stock', "Josué M. initie ; Esther K. contrôle la conformité ; Didier L. réceptionne ; Ruth B. tient la fiche de stock", 'Une fonction par personne', 'Cumul éliminé'],
        ['Caisse', 'Josué M. demande ; Dr Patrice N. approuve ; Esther K. décaisse ; Ruth B. tient le livre et rapproche', 'Une fonction par personne', 'Cumul éliminé'],
      ],
    },
    result: "Pour chaque cumul, une décision écrite : éliminé par redistribution, ou assumé avec sa raison, et une règle de suppléance.",
    pitfall: "Surcharger la personne la plus fiable de la base en lui transférant tous les contrôles. Une redistribution qui épuise un seul agent redevient en quelques mois un cumul silencieux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Reporter la répartition dans une copie « CIBLE » et relire les alertes',
    intro: "Pourquoi : la matrice CIBLE prouve que la répartition proposée réduit réellement les cumuls, et sert de base à la direction pour décider. Entrées : décisions de l'étape 3, matrice ACTUEL figée.",
    steps: [
      {
        title: 'Créez la copie CIBLE sans toucher à l\'ACTUEL',
        actions: [
          "Ouvrez la matrice ACTUEL, puis Fichier > Enregistrer sous : 2026-05-26_Matrice_SoD_Goma_CIBLE.xlsx.",
          "Effacez les X des lignes de saisie uniquement (C6:G9, C11:G14, C16:G19, C21:G24, C26:G29).",
        ],
      },
      {
        title: 'Ressaisissez les X de la répartition cible',
        body: "Une seule personne par fonction chaque fois que c'est possible ; une fonction exercée hors de la base (par le siège) reste sans X et se note dans la colonne I.",
      },
      {
        title: 'Relisez la colonne H et la feuille Synthèse',
        body: "Les blocs réussis affichent « OK — séparation respectée » ; les blocs restants devraient être exactement ceux que vous avez déclarés comme cumuls assumés à l'étape 3.",
      },
      {
        title: 'Comparez ACTUEL et CIBLE dans un tableau',
        body: "Montrez les cinq blocs avant/après : c'est la pièce que la direction lira en premier.",
      },
    ],
    table: {
      columns: ['Bloc', 'Initiation', 'Approbation', 'Exécution', 'Enregistrement / contrôle'],
      rows: [
        ['Bon de commande', 'Josué M.', 'Dr Patrice N.', 'Esther K.', 'Ruth B.'],
        ['Réception / stock', 'Josué M.', 'Esther K.', 'Didier L.', 'Ruth B.'],
        ['Paiement', 'Josué M.', 'Dr Patrice N.', 'Ruth B.', 'Ruth B. (cumul assumé)'],
        ['Caisse', 'Josué M.', 'Dr Patrice N.', 'Esther K.', 'Ruth B.'],
        ['Comptabilisation', 'Ruth B. (saisie)', 'Dr Patrice N.', 'Siège (clôture, sans X)', 'Ruth B. (cumul assumé)'],
      ],
    },
    result: "Matrice CIBLE : Synthèse B5 = 2 cumuls à risque, B6 = « À SURVEILLER ». On passe de cinq alertes à deux, toutes deux déclarées, expliquées et compensées.",
    pitfall: "Cocher des X fictifs jusqu'à obtenir « CONFORME ». Avec cinq personnes, un niveau « À SURVEILLER » honnête et compensé vaut mieux qu'un « CONFORME » que personne n'appliquera.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Rédiger le contrôle compensatoire de chaque cumul assumé (colonne I)',
    intro: "Pourquoi : le template place la colonne « Contrôle compensatoire (si cumul assumé) » en colonne I, dans une cellule fusionnée par bloc (I6:I10, I11:I15, I16:I20, I21:I25, I26:I30). Elle contient un texte d'exemple à remplacer. Entrées : les cumuls assumés de l'étape 3.",
    steps: [
      {
        title: 'Remplacez le texte d\'exemple pour chaque bloc encore en alerte',
        body: "Cliquez dans la cellule fusionnée (I16 pour le paiement, I26 pour la comptabilisation) et effacez « Ex : contre-signature systématique du coordinateur… ». Pour un bloc sans alerte, laissez la cellule vide.",
      },
      {
        title: 'Rédigez le contrôle avec les cinq attributs',
        actions: [
          "Qui : une personne indépendante du cumul.",
          "Quoi : le geste précis, avec la pièce utilisée.",
          "Quand : la fréquence et le déclencheur.",
          "Preuve : la trace datée et signée.",
          "Escalade : le seuil d'alerte, qui est informé et sous quel délai.",
        ],
      },
      {
        title: 'Faites valider par celui qui exécutera et par l\'autorité',
        body: "Dr Patrice N. confirme qu'il a le temps de le faire ; Joseph T. confirme qu'il le fera respecter. Sans cette validation, le contrôle reste une intention.",
      },
    ],
    example: {
      title: 'Colonne I rédigée pour les deux blocs assumés',
      lines: [
        "I16 (Approbation paiement — Ruth B. exécute et enregistre) : « Dr Patrice N. valide chaque virement dans la banque en ligne avec son propre profil de validation (principe maker/checker, aucun virement exécuté avec une seule validation). La banque envoie le relevé mensuel directement à Dr Patrice N. et au siège. Chaque mois, Dr Patrice N. compare cinq virements tirés au hasard au bon de commande et à la facture (compte rendu signé). Un virement sans validation tierce ou un écart non expliqué est signalé à Joseph T. sous 48 heures. »",
        "I26 (Comptabilisation — Ruth B. saisit et rapproche la banque) : « Dr Patrice N. signe chaque mois le rapprochement bancaire préparé par Ruth B. après avoir comparé le solde du relevé reçu directement de la banque au solde du journal. Le comptable régional du siège revoit le journal et clôture la période avant le 10 du mois suivant (courriel de clôture conservé). Un écart non expliqué de plus de 100 USD est signalé à Joseph T. sous 48 heures. »",
      ],
    },
    result: "Deux cellules de la colonne I rédigées, chacune avec ses cinq attributs, validées par l'exécutant et par l'autorité délégante.",
    tip: "Faites arriver le relevé bancaire à quelqu'un d'autre que celui qui tient les comptes : c'est le contrôle compensatoire le moins coûteux et le plus efficace, car il rend invisible toute modification de la comptabilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Rédiger le plan de redistribution et le registre des contrôles compensatoires',
    intro: "Pourquoi : la matrice prouve le diagnostic, mais la direction signe un plan, et un contrôle compensatoire se pilote avec un registre. Entrées : matrice CIBLE, colonne I, règles de suppléance. Format : une page pour le plan.",
    steps: [
      {
        title: 'Structurez le plan en cinq blocs sur une page',
        actions: [
          "Constat : le niveau d'alerte ACTUEL et les cumuls prioritaires.",
          "Nouvelle répartition des quatre fonctions, par bloc.",
          "Contrôles compensatoires des cumuls assumés.",
          "Calendrier de mise en œuvre et règles de suppléance.",
          "Décisions demandées et signataires.",
        ],
      },
      {
        title: 'Créez le registre des contrôles compensatoires',
        body: "Un tableau séparé du template (feuille ou fichier distinct), à une ligne par contrôle et par échéance : contrôle, responsable, fréquence, date prévue, date réalisée, preuve archivée, anomalie constatée.",
      },
      {
        title: 'Fixez la première échéance de chaque contrôle',
        body: "Un contrôle sans date de première exécution ne démarrera jamais. Inscrivez-la au calendrier du responsable.",
      },
      {
        title: 'Planifiez la vérification de la première exécution',
        body: "Dans 30 jours, vous irez vérifier que les contrôles ont réellement eu lieu (procédure 7, étape 4).",
      },
    ],
    table: {
      columns: ['Contrôle', 'Responsable', 'Fréquence', 'Première date prévue', 'Preuve attendue'],
      rows: [
        ['Validation tierce de chaque virement', 'Dr Patrice N.', 'Chaque virement', '01/06/2026', 'Journal de la banque, deux profils'],
        ['Contrôle de cinq virements tirés au hasard', 'Dr Patrice N.', 'Mensuelle', '30/06/2026', 'Compte rendu signé'],
        ['Signature du rapprochement bancaire', 'Dr Patrice N.', 'Mensuelle', '10/06/2026', 'Rapprochement signé'],
        ['Clôture et revue du journal par le siège', 'Comptable régional', 'Mensuelle', '10/06/2026', 'Courriel de clôture'],
        ['Comptage de caisse surprise', 'Dr Patrice N.', 'Mensuelle', 'Semaine du 25/05/2026', 'Procès-verbal signé par deux personnes'],
      ],
    },
    result: "Un plan de redistribution d'une page à faire valider, et un registre qui contient chaque contrôle compensatoire avec sa première échéance.",
    pitfall: "Écrire le plan sans registre. J'ai vu des contrôles compensatoires parfaitement rédigés dans un rapport, jamais appliqués une seule fois dans les six mois suivants faute de suivi : c'est exactement l'absence de contrôle.",
  },

  // ── Procédure 4 — Construire la DOA par seuil ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: "Lister les opérations soumises à autorisation et la source de chaque seuil",
    intro: "Pourquoi : une DOA construite sans connaître les seuils existants en crée de nouveaux qui contredisent ceux du bailleur. Quand : mardi 26 mai. Entrées : procédure achats v2, grille de seuils v2, convention du Fonds Meridian, procédures du siège.",
    steps: [
      {
        title: "Listez les types d'opération qui engagent la base",
        actions: [
          "Achat (bon de commande), paiement, décaissement de caisse, recrutement ou contrat de travail, avenant contractuel.",
          "Ajoutez toute opération propre à la base, par exemple la sortie de carburant ou le don en nature.",
        ],
      },
      {
        title: 'Pour chaque opération, retrouvez tous les seuils qui existent déjà',
        actions: [
          "Seuil de la procédure interne (grille v2 de septembre 2024).",
          "Seuil exigé par la convention de chaque bailleur actif.",
          "Seuil imposé par le siège (délégations de pouvoir de la direction).",
        ],
      },
      {
        title: 'Retenez le seuil le plus restrictif et notez sa source',
        body: "Quand deux régimes coexistent sur une base, le plus strict prévaut : deux régimes parallèles produisent des erreurs et des contournements.",
      },
    ],
    table: {
      columns: ['Opération', 'Seuil interne (grille v2)', 'Exigence bailleur', 'Seuil retenu'],
      rows: [
        ['Mise en concurrence formelle', 'Au-delà de 10 000 USD', 'Fonds Meridian : dès 5 000 USD (art. 9)', '5 000 USD pour tous les achats'],
        ['Approbation du bon de commande', '≤ 1 000 USD : Logistics Officer ; 1 001 à 10 000 : Coordinateur ; > 10 000 : Directeur Pays', 'Aucune exigence propre', 'À redéfinir (étape 3)'],
        ['Approbation du paiement', '≤ 5 000 USD : Finance Officer + Coordinateur ; > 5 000 : Finance Manager + Directeur Pays', 'Aucune exigence propre', 'À redéfinir (étape 3)'],
        ['Décaissement de caisse', 'Aucun seuil écrit', 'Aucune', 'À définir'],
      ],
    },
    result: "Un tableau des seuils existants avec leur source, et le seuil le plus restrictif retenu pour chaque opération.",
    pitfall: "Oublier la convention d'un bailleur récent. Le seuil de 5 000 USD du Fonds Meridian date de janvier 2026 : une grille v2 qui l'ignore expose HSGL à des coûts inéligibles.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Dresser la liste des postes réellement pourvus',
    intro: "Pourquoi : un seuil attribué à un poste vacant depuis six mois n'est pas une délégation, c'est un trou. Quand : mardi 26 mai. Entrées : liste du personnel RH à la date du jour, grille v2.",
    steps: [
      {
        title: 'Obtenez de la RH la liste du personnel au jour J',
        body: "Demandez-la datée, avec dates d'arrivée et de départ sur 12 mois, pour ne pas dépendre de l'organigramme.",
      },
      {
        title: 'Pour chaque niveau de la grille v2, notez le titulaire et son statut',
        actions: [
          "Titulaire en poste, ou poste vacant (avec la date de départ).",
          "Intérim éventuel et personne qui exerce de fait l'autorité.",
          "Suppléant désigné par écrit, s'il existe.",
        ],
      },
      {
        title: 'Repérez les seuils qui reposent sur un poste vacant',
        body: "Chaque seuil attribué à un poste vacant est soit à réattribuer, soit à supprimer de la DOA.",
      },
    ],
    table: {
      columns: ['Niveau (grille v2)', 'Titulaire', 'Statut', 'Conséquence'],
      rows: [
        ['Logistics Officer', 'Josué M.', 'En poste', "Signait seul jusqu'à 1 000 USD"],
        ['Assistant achats', '—', 'Vacant depuis novembre 2025', 'Tâches reprises par Josué M.'],
        ['Finance Officer', '—', 'Vacant depuis le 16/01/2026', 'Double signature des paiements ≤ 5 000 USD impossible : Ruth B. agit seule'],
        ['Finance Manager', 'Ruth B.', 'En poste', 'Seule personne de la Finance'],
        ['Coordinateur de la base', 'Dr Patrice N.', 'En poste', 'Aucun suppléant désigné'],
        ['Directeur Pays', 'Joseph T.', 'En poste, déplacements fréquents', 'Aucun suppléant désigné'],
      ],
    },
    result: "Une liste de six niveaux avec titulaire, statut et conséquence ; deux postes vacants identifiés et un manque de suppléants.",
    tip: "Une vacance de plus de 30 jours sur un poste signataire est déjà un déclencheur de revue de la DOA : inscrivez cette règle dans la procédure 7.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Fixer les plafonds par niveau et par opération',
    intro: "Pourquoi : c'est le cœur de la DOA : qui signe quoi, jusqu'à quel montant. Entrées : seuils retenus, postes pourvus, matrice CIBLE (qui exécute quelle fonction). Règle : jamais plus de trois paliers par opération.",
    steps: [
      {
        title: 'Définissez les paliers de montant pour chaque opération',
        actions: [
          "Premier palier : montants courants, signature simple.",
          "Deuxième palier : à partir du seuil de mise en concurrence du bailleur, double signature.",
          "Troisième palier : montants élevés, validation de la direction pays avec un second signataire du siège.",
        ],
      },
      {
        title: 'Attribuez chaque palier à un poste réellement pourvu',
        body: "Nommez le poste et la personne. Aucun palier ne peut dépendre d'un poste vacant.",
      },
      {
        title: 'Alignez la DOA sur la matrice CIBLE',
        actions: [
          "Un signataire ne peut pas approuver ce qu'il a initié.",
          "Un signataire ne peut pas approuver ce qu'il enregistre ensuite.",
        ],
      },
      {
        title: 'Complétez le tableau DOA v3',
        body: "Colonnes : opération, palier, signataire principal, co-signature, contrôle préalable. Cette DOA se construit hors template, dans un tableau Word ou Excel séparé.",
      },
    ],
    table: {
      columns: ['Opération', 'Palier (USD)', 'Signataire principal', 'Co-signature', 'Contrôle préalable'],
      rows: [
        ['Bon de commande', '0 à 5 000', 'Dr Patrice N.', 'Aucune', 'Visa budgétaire de Ruth B.'],
        ['Bon de commande', '5 001 à 15 000', 'Dr Patrice N.', 'Joseph T.', 'Visa budgétaire ; mise en concurrence formelle'],
        ['Bon de commande', 'Plus de 15 000', 'Joseph T.', 'Directeur des opérations (siège)', 'Visa budgétaire ; mise en concurrence formelle'],
        ['Paiement', '0 à 5 000', 'Ruth B. saisit, Dr Patrice N. valide', 'Aucune', 'Dossier : bon de commande, bon de réception, facture'],
        ['Paiement', '5 001 à 25 000', 'Ruth B. saisit, Dr Patrice N. valide', 'Joseph T.', 'Dossier complet'],
        ['Paiement', 'Plus de 25 000', 'Joseph T. valide', 'Siège', 'Dossier complet'],
        ['Décaissement de caisse', "150 par opération au plus", 'Dr Patrice N.', 'Aucune', 'Au-delà de 150 : paiement par virement obligatoire'],
        ['Recrutement ou contrat de travail', 'Tous montants', 'Dr Patrice N.', 'Joseph T.', 'Budget du projet vérifié par Ruth B.'],
        ['Avenant contractuel', 'Plus de 10 % ou plus de 5 000', 'Joseph T.', 'Siège', 'Avis de Ruth B.'],
      ],
    },
    result: "Un tableau DOA v3 de neuf lignes où chaque palier est attribué à une personne réellement en poste et reste cohérent avec la matrice CIBLE.",
    pitfall: "Copier la DOA du siège ou d'une autre base sans l'adapter. Elle prévoit des niveaux qui n'existent pas ici : soit les seuils sont contournés, soit la base est paralysée en attendant la signature d'un poste vacant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Prévoir double signature, suppléances, dérogations et fractionnement',
    intro: "Pourquoi : une DOA sans règle d'absence est contournée dès la première absence ; sans règle contre le fractionnement, elle est contournée dès le premier achat important. Entrée : le tableau DOA v3.",
    steps: [
      {
        title: 'Précisez ce que signifie « double signature »',
        actions: [
          "Deux personnes différentes, aucune des deux n'ayant initié ni enregistré l'opération.",
          "Les deux signatures sont apposées avant l'engagement, pas après.",
        ],
      },
      {
        title: 'Nommez un suppléant par niveau, par écrit',
        actions: [
          "Le suppléant exerce le même plafond que le titulaire, jamais un plafond supérieur.",
          "Quand le suppléant cumulerait alors deux fonctions, une autre personne signe à sa place.",
        ],
      },
      {
        title: 'Écrivez la règle de dérogation',
        body: "Définissez ce qu'est une urgence, qui peut déroger, jusqu'à quel montant et sous quel délai de régularisation par écrit.",
      },
      {
        title: 'Écrivez la règle anti-fractionnement',
        body: "Deux achats auprès du même fournisseur sur sept jours s'additionnent pour déterminer le palier. Chaque signataire vérifie cette règle avant de signer.",
      },
    ],
    example: {
      title: 'Règles complémentaires de la DOA v3 (rédaction proposée)',
      lines: [
        "Double signature : « Les deux signataires sont distincts de la personne qui a initié l'opération et de celle qui l'enregistre. »",
        "Suppléances : « En l'absence de Dr Patrice N., Joseph T. signe jusqu'à 5 000 USD en visant le dossier ; en l'absence de Joseph T., la co-signature est donnée par le Directeur des opérations du siège. Aucune suppléance ne dépasse le plafond du titulaire. »",
        "Dérogation : « En cas d'urgence médicale documentée, Joseph T. peut autoriser par courriel un engagement jusqu'à 10 000 USD sans mise en concurrence ; la régularisation écrite est obligatoire sous 48 heures. »",
        "Fractionnement : « Les achats au même fournisseur sur sept jours consécutifs sont additionnés pour déterminer le palier de signature. »",
      ],
    },
    result: "Quatre règles écrites qui complètent le tableau et empêchent les contournements classiques : absence, urgence, fractionnement.",
    tip: "Faites relire la règle de dérogation par l'équipe médicale : une dérogation trop étroite sera ignorée en urgence, une dérogation trop large deviendra la règle.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Tester la DOA sur les transactions réelles',
    intro: "Pourquoi : une DOA qui paralyse la base sera contournée la semaine suivante. Le test sur des transactions réelles prouve qu'elle est applicable. Quand : mercredi 27 mai. Entrées : extraction des 412 bons de commande, tableau DOA v3.",
    steps: [
      {
        title: 'Ajoutez à la table T_BC une colonne « Circuit v3 »',
        actions: [
          "Ouvrez l'extraction mise en tableau (T_BC) du module 01.",
          "Ajoutez une colonne et saisissez : =SI([@Montant]<=5000;\"Coordinateur\";SI([@Montant]<=15000;\"Coordinateur + Directeur Pays\";\"Directeur Pays + siège\"))",
        ],
      },
      {
        title: 'Comptez les bons par circuit avec un tableau croisé dynamique',
        body: "Circuit v3 en lignes, Nombre de n° BC en valeurs. Comparez avec le circuit v2 de la période.",
      },
      {
        title: 'Calculez la charge de signature par personne',
        actions: [
          "Divisez le nombre de bons par 26 semaines pour obtenir les signatures hebdomadaires.",
          "Comparez à la charge actuelle (bons de plus de 1 000 USD signés par le Coordinateur : 198).",
        ],
      },
      {
        title: 'Ajustez les paliers si la base serait paralysée',
        body: "Au-delà d'environ 20 signatures par semaine pour une personne, révisez le palier ou instaurez des sessions de signature fixes.",
      },
    ],
    table: {
      columns: ['Circuit v3', 'Nombre de bons', 'Charge par semaine', 'Écart avec le circuit v2'],
      rows: [
        ['Coordinateur seul (≤ 5 000 USD)', '333', '≈ 13 signatures de Dr Patrice N.', 'Le Coordinateur signait 198 bons : +135'],
        ['Coordinateur + Directeur Pays (5 001 à 15 000 USD)', '57', '≈ 2 signatures de Joseph T.', 'Nouveau : 41 bons de 5 001 à 10 000 USD ne demandaient aucune co-signature'],
        ['Directeur Pays + siège (> 15 000 USD)', '22', '≈ 1 signature par semaine', '22 des 38 bons > 10 000 USD'],
        ['Total', '412', '', 'Tous les bons ont un circuit défini'],
      ],
    },
    result: "Un test chiffré : 412 bons répartis en trois circuits, une charge de signature acceptable (13 par semaine pour le Coordinateur) et aucun bon sans circuit.",
    pitfall: "Valider une DOA sur le papier sans la rejouer sur des transactions. Le test révèle les charges irréalistes avant la mise en œuvre, quand il est encore temps de les corriger.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Faire valider, dater, diffuser et afficher la DOA',
    intro: "Pourquoi : une DOA qui n'est validée par personne ni connue de personne ne protège rien. Entrées : tableau DOA v3, règles complémentaires, résultat du test. Rappel : vous proposez, la direction décide ; Fatou S. relit les seuils car vous avez validé la grille v2.",
    steps: [
      {
        title: 'Faites relire les paliers par Fatou S.',
        body: "Elle vérifie la cohérence des seuils avec les exigences du bailleur et signale tout point que vous auriez épargné pour des raisons de familiarité.",
      },
      {
        title: 'Soumettez la DOA à l\'autorité compétente',
        actions: [
          "Adressez le tableau, les règles et le test à Joseph T., avec les décisions demandées.",
          "Demandez-lui sa validation écrite et la date d'effet.",
        ],
      },
      {
        title: 'Numérotez, datez et remplacez la version précédente',
        actions: [
          "Titre : DOA — base de Goma — version 3, date d'effet 1er juin 2026.",
          "Archivez la v2 avec la mention « remplacée le 01/06/2026 ».",
        ],
      },
      {
        title: 'Diffusez et affichez',
        actions: [
          "Remettez-la à la banque, au siège, aux comptables et aux acheteurs.",
          "Affichez-la dans les bureaux financiers et logistiques.",
          "Organisez une séance de quinze minutes avec l'équipe.",
        ],
      },
    ],
    example: {
      title: 'Extrait de la note de validation du 29 mai 2026',
      lines: [
        "« Joseph T., Directeur Pays, valide la matrice de délégation de pouvoir de la base de Goma, version 3, applicable à compter du 1er juin 2026. Elle remplace la version 2 de septembre 2024. Relue par Fatou S. (auditrice senior) pour la partie seuils. Les lettres d'autorisation et de révocation correspondantes sont signées au plus tard le 29 mai. — Joseph T. »",
        "Diffusion le 29 mai : banque, siège (Directeur des opérations), Dr Patrice N., Ruth B., Josué M., affichage au bureau financier.",
      ],
    },
    result: "Une DOA v3 validée par écrit, datée, diffusée et affichée, qui remplace la v2.",
    pitfall: "Diffuser la v3 sans retirer la v2 des bureaux. Deux versions affichées en même temps, c'est l'assurance d'un contournement documenté.",
  },

  // ── Procédure 5 — Lettres d'autorisation ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Inventorier les signataires et les lettres existantes',
    intro: "Pourquoi : on ne rédige pas une lettre avant de savoir qui en a déjà une, laquelle est périmée, et qui signe sans lettre du tout. Quand : jeudi 28 mai. Entrées : DOA v3, liste des signataires de la banque, dossiers RH et Finance.",
    steps: [
      {
        title: 'Dressez la liste de tous les signataires',
        body: "Reprenez la DOA v3 et la liste des signataires et utilisateurs fournie par la banque. Ajoutez toute personne qui signe de fait, même sans titre.",
      },
      {
        title: 'Demandez à chacun sa lettre d\'autorisation signée en vigueur',
        body: "Cherchez-la dans les dossiers RH et Finance. Un courriel de nomination n'est pas une lettre d'autorisation : il ne fixe ni périmètre, ni plafond, ni durée.",
      },
      {
        title: 'Comparez chaque lettre à la DOA v3',
        actions: [
          "Le périmètre correspond-il à la DOA ?",
          "Le plafond correspond-il ?",
          "La lettre est-elle signée et datée ?",
        ],
      },
      {
        title: 'Déterminez l\'action pour chaque signataire',
        body: "Nouvelle autorisation, renouvellement, ou révocation.",
      },
    ],
    table: {
      columns: ['Signataire', 'Lettre existante', 'Écart avec la DOA v3', 'Action'],
      rows: [
        ['Joseph T.', 'Oui, siège, mars 2022', 'Co-signature désormais requise au-delà de 5 000 USD', 'Demander une mise à jour au siège'],
        ['Dr Patrice N.', 'Oui, septembre 2023, plafond 10 000 USD', 'Plafond et périmètre différents', 'Nouvelle autorisation'],
        ['Ruth B.', 'Aucune', 'Saisit les virements', 'Nouvelle autorisation'],
        ['Josué M.', "Aucune lettre : un courriel de 2024", 'Ne signe plus aucun bon', 'Révocation du pouvoir de fait'],
        ['Grâce M.', 'Oui, 2023, jamais révoquée', 'Partie le 16/01/2026', 'Révocation immédiate (en retard)'],
      ],
    },
    result: "Un inventaire de cinq signataires, avec pour chacun l'écart et l'action ; trois lettres à rédiger, deux révocations et une mise à jour demandée au siège.",
    pitfall: "Considérer qu'un courriel de nomination suffit. Dans deux ans, personne ne saura quel plafond il fixait, ni s'il était encore valable au moment d'une opération contestée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: "Cocher l'usage et remplir la section 1 : identification du signataire",
    intro: "Pourquoi : le template sert aux deux usages, autorisation et révocation. La case cochée détermine la section à remplir. Quand : jeudi 28 mai. Outil : lettre-autorisation-revocation-signataire.docx. Exemple traité : l'autorisation de Dr Patrice N.",
    steps: [
      {
        title: 'Enregistrez une copie de travail',
        actions: [
          "Ouvrez lettre-autorisation-revocation-signataire.docx.",
          "Fichier > Enregistrer sous : 2026-05-28_Autorisation_Patrice-N.docx.",
        ],
      },
      {
        title: "Lisez l'objectif en tête de lettre",
        body: "Il rappelle que la lettre formalise, à un instant T, qu'une personne est habilitée ou ne l'est plus, et qu'on ne complète que la section correspondante : section 2 pour une autorisation, section 3 pour une révocation.",
      },
      {
        title: "Cochez la case de l'usage",
        body: "Sur la ligne « ☐ AUTORISATION D'UN NOUVEAU SIGNATAIRE ☐ RÉVOCATION D'UN SIGNATAIRE », remplacez la première case par ☒. Laissez l'autre vide.",
      },
      {
        title: 'Complétez la section 1 : quatre champs',
        actions: [
          "Nom complet du signataire.",
          "Fonction ou poste occupé.",
          "Structure, base ou bureau concerné.",
          "Date d'effet de la lettre au format JJ/MM/AAAA.",
        ],
      },
    ],
    table: {
      columns: ['Champ de la section 1', 'Contenu saisi'],
      rows: [
        ['Nom complet du signataire', 'Dr Patrice N. (nom complet tel qu\'il figure sur sa pièce d\'identité)'],
        ['Fonction / poste occupé', 'Coordinateur de la base de Goma'],
        ['Structure / base / bureau concerné', 'Horizon Santé Grands Lacs (HSGL) — base de Goma, Nord-Kivu'],
        ["Date d'effet de la présente lettre", '01/06/2026'],
      ],
    },
    result: "Une lettre ouverte avec la bonne case cochée et une section 1 complète, au nom de la personne et à la date d'effet de la DOA v3.",
    pitfall: "Cocher les deux cases ou laisser une case sans cocher. Une lettre ambiguë sur son usage ne sera pas opposable à la banque.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Remplir la section 2 : périmètre, plafond, comptes et durée',
    intro: "Pourquoi : la section 2 est celle que la banque lira. Chaque mot de cette section doit pouvoir être vérifié. Entrées : DOA v3, liste des comptes bancaires et des systèmes. Le template la présente sous la forme de quatre champs à compléter.",
    steps: [
      {
        title: "Écrivez le périmètre exact de l'autorité accordée",
        actions: [
          "Utilisez des verbes précis : « signer », « valider », « initier », « accéder en consultation ».",
          "Nommez les opérations, pas des familles vagues.",
          "Précisez si la signature est simple ou double.",
        ],
      },
      {
        title: 'Fixez le plafond financier autorisé, avec le montant et la devise',
        body: "Précisez si le plafond s'applique par opération ou en cumul sur une période.",
      },
      {
        title: 'Nommez les comptes bancaires et les systèmes concernés',
        body: "Numéro de compte, nom de la banque, profil utilisateur, nom du logiciel comptable. Un accès non listé n'est pas autorisé.",
      },
      {
        title: 'Indiquez la durée de validité',
        body: "Permanente, jusqu'à révision, ou avec une date de fin. Pour un poste de signataire, préférez « jusqu'à la prochaine revue » avec la date.",
      },
    ],
    table: {
      columns: ['Champ de la section 2', 'Contenu saisi pour Dr Patrice N.'],
      rows: [
        ["Périmètre exact de l'autorité accordée", "Signer les bons de commande jusqu'à 5 000 USD en signature simple, et jusqu'à 15 000 USD en double signature avec le Directeur Pays ; valider dans la banque en ligne les virements saisis par la Finance Manager jusqu'à 5 000 USD, et jusqu'à 25 000 USD avec le Directeur Pays ; approuver les décaissements de caisse jusqu'à 150 USD par opération."],
        ['Plafond financier autorisé', '5 000 USD par opération en signature simple ; 25 000 USD par opération en double signature ; devise : USD'],
        ['Compte(s) bancaire(s) / système(s) concerné(s)', 'Compte USD de la base n° ***4521 (banque de la base), profil « validateur » ; logiciel comptable en lecture seule'],
        ['Durée de validité', "Jusqu'à la prochaine revue, fixée au 30/11/2026"],
      ],
    },
    result: "Une section 2 qui reprend la DOA v3 à la virgule près, avec une durée qui oblige à la revoir.",
    pitfall: "Écrire « toutes opérations financières de la base » ou oublier la devise. Un périmètre flou et un plafond sans devise sont inutilisables devant la banque et indéfendables devant un auditeur externe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Remplir la section 4 : signatures, accusé de réception, date et lieu',
    intro: "Pourquoi : une lettre sans les deux signatures n'a aucune valeur. L'accusé de réception du signataire prouve qu'il connaît l'étendue et les limites de son pouvoir. Entrée : la lettre avec ses sections 1 et 2.",
    steps: [
      {
        title: "Désignez l'autorité délégante",
        body: "Nom et fonction de la personne qui délègue, située au-dessus du signataire. Elle n'est jamais l'auditeur.",
      },
      {
        title: "Faites signer l'autorité délégante",
        body: "Signature manuscrite sur l'original. Pas de signature scannée sans l'original papier conservé.",
      },
      {
        title: 'Faites signer le signataire en accusé de réception',
        actions: [
          "Remettez-lui la DOA v3 avant qu'il signe.",
          "Faites-le lire sa section 2 et vérifier son plafond.",
        ],
      },
      {
        title: 'Complétez la date et le lieu',
        body: "La date de signature, au format JJ/MM/AAAA, doit être antérieure ou égale à la date d'effet.",
      },
    ],
    table: {
      columns: ['Champ de la section 4', 'Contenu saisi'],
      rows: [
        ["Nom et fonction de l'autorité délégante", 'Joseph T., Directeur Pays'],
        ["Signature de l'autorité délégante", 'Signature manuscrite apposée le 29/05/2026'],
        ['Nom du signataire concerné (accusé de réception)', 'Dr Patrice N., Coordinateur de la base de Goma'],
        ['Signature du signataire concerné', 'Signature manuscrite apposée le 29/05/2026'],
        ['Date', '29/05/2026'],
        ['Lieu', 'Goma'],
      ],
    },
    result: "Une lettre signée par les deux parties, datée, dont l'original est prêt à être archivé.",
    pitfall: "Faire signer le signataire sans qu'il ait lu la DOA. Si son plafond est contesté plus tard, il prétendra ne pas l'avoir su, et vous n'aurez rien pour le contredire.",
    tip: "Vous êtes auditeur : vous préparez le projet de lettre en conseil, mais vous ne signez rien. La signature appartient à l'autorité délégante, sinon vous deviendriez acteur du contrôle que vous évaluerez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Notifier la banque et les systèmes, aligner les droits et archiver',
    intro: "Pourquoi : une lettre signée mais non transmise à la banque ne change rien : la banque exécute ce que ses profils autorisent. Entrée : la lettre signée.",
    steps: [
      {
        title: 'Transmettez une copie signée à ceux qui appliquent la délégation',
        actions: [
          "Banque : copie signée et demande de mise à jour du profil et du spécimen de signature.",
          "Responsable informatique ou prestataire : droits du logiciel comptable.",
          "Comptabilité du siège.",
        ],
      },
      {
        title: 'Alignez les droits réels sur la lettre',
        body: "Dr Patrice N. doit disposer d'un profil « validateur » ; Ruth B. d'un profil « saisie » sans droit de validation. Demandez à la banque d'exiger deux profils distincts pour chaque virement.",
      },
      {
        title: 'Archivez',
        actions: [
          "Original signé dans le dossier RH ou Finance du signataire, pour toute la durée du mandat.",
          "Nommez le fichier : 2026-05-29_Autorisation_Patrice-N_signee.pdf.",
          "Inscrivez-la au registre des signataires.",
        ],
      },
      {
        title: 'Vérifiez que les droits correspondent à la lettre',
        body: "Quelques jours plus tard, demandez la liste des utilisateurs actifs de la banque et comparez-la aux lettres : le nom, le profil, le plafond.",
      },
    ],
    example: {
      title: 'Courriel à la banque, 29 mai 2026',
      lines: [
        "Objet : Mise à jour des signataires — compte USD ***4521 — HSGL Goma.",
        "« Madame, Monsieur, veuillez trouver ci-joint les lettres d'autorisation signées de Dr Patrice N. (validateur) et de Ruth B. (saisie), effectives au 01/06/2026, et la lettre de révocation de Grâce M. Nous vous demandons de configurer deux profils distincts, de supprimer l'accès de Mme M. et de nous confirmer par écrit la date et l'heure de chaque modification. Merci. Joseph T., Directeur Pays. »",
      ],
    },
    result: "Lettres signées, banque et systèmes informés, droits alignés, originaux archivés et inscrits au registre.",
    tip: "Faites toujours envoyer le courriel à la banque par l'autorité délégante, pas par vous : c'est son pouvoir qui est en jeu, et la banque n'a aucune raison de reconnaître celui d'un auditeur.",
  },

  // ── Procédure 6 — Révocation ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Anticiper : préparer la révocation avant le départ',
    intro: "Pourquoi : la révocation est émise le jour même du départ ou du changement de poste, jamais après. Elle se prépare avant. Entrées : calendrier des départs et mutations de la RH, liste des accès de chaque signataire.",
    steps: [
      {
        title: 'Obtenez de la RH le calendrier des départs et des changements de poste',
        body: "Demandez-le chaque mois : préavis, fins de contrat, mutations internes, congés longs.",
      },
      {
        title: 'Dressez la liste des accès du partant',
        actions: [
          "Banque : profil, carte, jeton d'authentification.",
          "Logiciel comptable et messagerie.",
          "Clés : coffre, magasin, armoire des chéquiers, cachet.",
        ],
      },
      {
        title: 'Préparez la lettre de révocation à l\'avance',
        body: "Complétez tout sauf la date. Le jour J, il ne reste qu'à dater et signer.",
      },
      {
        title: "Convenez avec la banque d'un délai de traitement",
        body: "Obtenez par écrit le délai de suppression d'un profil, afin de pouvoir exiger une confirmation le jour même.",
      },
    ],
    table: {
      columns: ['Accès', 'Responsable du retrait', 'Preuve de retrait'],
      rows: [
        ['Profil de la banque en ligne', 'Joseph T. avec la banque', 'Confirmation écrite de la banque, date et heure'],
        ['Droits du logiciel comptable', 'Responsable informatique', 'Capture de la liste des utilisateurs actifs'],
        ['Clés du coffre, du magasin, cachet', 'Dr Patrice N.', 'Procès-verbal de restitution signé'],
        ['Messagerie et accès aux dossiers partagés', 'Responsable informatique', 'Courriel de confirmation'],
      ],
    },
    result: "Une checklist des accès par départ prévu, une lettre de révocation prête, un délai de la banque confirmé.",
    tip: "Avant la fin du préavis déjà, retirez les accès financiers dont la personne n'a plus besoin pour ses dernières tâches. Un préavis de trois mois n'est pas une raison de laisser un pouvoir bancaire actif.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Remplir la lettre de révocation : sections 1, 3 et 4',
    intro: "Pourquoi : la section 3 est celle de la révocation ; la section 2 reste vide. Cas traité : la révocation de Grâce M., ancienne Finance Officer, partie le 16 janvier 2026, dont le profil bancaire n'avait jamais été supprimé. La lettre est émise en retard : le 28 mai.",
    steps: [
      {
        title: 'Cochez la case RÉVOCATION',
        body: "Sur la ligne de choix, mettez ☒ devant « RÉVOCATION D'UN SIGNATAIRE ». Laissez la section 2 vide.",
      },
      {
        title: 'Complétez la section 1 comme pour une autorisation',
        body: "Nom complet, fonction occupée, structure et date d'effet. La date d'effet est celle de l'émission de la lettre : jamais antidatée.",
      },
      {
        title: 'Complétez les quatre champs de la section 3',
        actions: [
          "Motif de la révocation : départ, changement de poste, fin de mandat, autre.",
          "Date effective de fin d'accès : immédiate.",
          "Autorités et systèmes à notifier sans délai : banque, informatique, comptabilité.",
          "Nom de la personne qui reprend l'autorité, si applicable.",
        ],
      },
      {
        title: 'Complétez la section 4',
        body: "Autorité délégante : nom et signature. Signataire concerné : si la personne est partie, écrivez dans le champ « accusé de réception non obtenu : départ effectif le 16/01/2026 ; lettre adressée à son adresse personnelle ».",
      },
    ],
    table: {
      columns: ['Champ', 'Contenu saisi'],
      rows: [
        ['Section 1 — Nom et fonction', 'Grâce M., Finance Officer (ancienne)'],
        ["Section 1 — Structure et date d'effet", 'HSGL — base de Goma ; 28/05/2026'],
        ['Section 3 — Motif de la révocation', 'Départ de HSGL le 16/01/2026'],
        ["Section 3 — Date effective de fin d'accès", 'Immédiate : 28/05/2026 (révocation tardive de 132 jours, voir étape 4)'],
        ['Section 3 — Autorités à notifier sans délai', 'Banque de la base, responsable informatique, comptabilité du siège'],
        ["Section 3 — Personne reprenant l'autorité", 'Aucune : poste vacant ; Ruth B. exerce la Finance seule'],
        ['Section 4 — Autorité délégante', 'Joseph T., Directeur Pays, signature le 28/05/2026'],
      ],
    },
    result: "Une lettre de révocation complète, qui dit honnêtement qu'elle est tardive, signée et datée du jour de l'émission.",
    pitfall: "Antidater la lettre au jour du départ pour « régulariser ». Une lettre antidatée est un faux ; la lettre tardive est un constat, qui se traite par la recherche des opérations (étape 4).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Notifier la banque, la comptabilité et le service informatique le jour même',
    intro: "Pourquoi : la lettre n'a d'effet que si ceux qui exécutent les accès la reçoivent et agissent. Entrée : la lettre de révocation signée. Délai : le jour de la signature.",
    steps: [
      {
        title: 'Envoyez la lettre aux trois destinataires',
        actions: [
          "Banque : lettre signée par courriel et en papier, avec demande de suppression du profil.",
          "Responsable informatique : demande de désactivation des droits du logiciel et de la messagerie.",
          "Comptabilité du siège : information pour mise à jour des droits.",
        ],
      },
      {
        title: 'Demandez une confirmation écrite avec date et heure',
        body: "« Veuillez nous confirmer par écrit, avec la date et l'heure, la suppression de l'accès de Mme M. »",
      },
      {
        title: 'Relancez sous 24 heures si la confirmation manque',
        body: "Appelez la banque et confirmez par courriel. N'attendez pas.",
      },
      {
        title: 'Récupérez les accès physiques',
        body: "Clés, jetons d'authentification, cartes bancaires, cachet : procès-verbal de restitution signé, ou courrier de demande de restitution si la personne est partie.",
      },
    ],
    example: {
      title: 'Courriel de notification à la banque, 28 mai 2026',
      lines: [
        "Objet : Révocation immédiate d'un signataire — compte USD ***4521 — HSGL Goma.",
        "« Madame, Monsieur, nous vous notifions la révocation avec effet immédiat de tous les accès de Mme Grâce M. (départ de HSGL le 16/01/2026). Merci de supprimer son profil, de nous confirmer par écrit la date et l'heure de la suppression, et de nous adresser le journal de ses connexions et opérations depuis le 16/01/2026. Lettre de révocation signée jointe. Joseph T., Directeur Pays. »",
      ],
    },
    result: "Les trois destinataires notifiés le jour même, une confirmation écrite de la banque, une relance si nécessaire.",
    tip: "Téléphonez ET écrivez. Le téléphone fait agir ; l'écrit prouve. Sans la confirmation écrite de la banque, la révocation n'est qu'une intention.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Vérifier que la révocation est effective et rechercher les opérations postérieures',
    intro: "Pourquoi : un profil non supprimé reste techniquement capable d'autoriser des opérations. Il faut prouver qu'il est supprimé, et prouver que personne ne s'en est servi pendant l'intervalle. Entrées : confirmation de la banque, journaux, liste RH.",
    steps: [
      {
        title: 'Vérifiez la liste des utilisateurs actifs',
        body: "Demandez à la banque la liste à jour et vérifiez que le nom a disparu. Comparez avec la liste RH.",
      },
      {
        title: 'Demandez le journal des connexions et des opérations depuis la date du départ',
        body: "Période : du jour du départ à la suppression du profil. Si la banque ne fournit pas ce journal, escaladez au Directeur Pays.",
      },
      {
        title: 'Cherchez dans le logiciel comptable',
        body: "Filtrez les écritures et validations par identifiant de l'ancien utilisateur, avec une date postérieure à son départ.",
      },
      {
        title: 'Documentez l\'intervalle',
        actions: [
          "Nombre de jours entre le départ et la suppression.",
          "Nombre de connexions et d'opérations pendant cet intervalle.",
          "Si une opération existe : ne concluez pas à la fraude, consignez les faits et informez la présidente du comité.",
        ],
      },
    ],
    example: {
      title: 'Résultat pour Grâce M. (reçu le 2 juin 2026)',
      lines: [
        "Confirmation de la banque : profil supprimé le 28/05/2026 à 15 h 12. Intervalle : 132 jours entre le départ (16/01/2026) et la suppression.",
        "Journal des connexions du 16/01/2026 au 28/05/2026 : aucune connexion, aucune opération.",
        "Logiciel comptable : aucune écriture ni validation postérieure au 16/01/2026 sous cet identifiant.",
        "Constat : accès bancaire resté actif 132 jours après le départ, sans opération constatée ; faiblesse de contrôle à signaler au comité.",
      ],
    },
    result: "La preuve que l'accès est supprimé, la preuve qu'il n'a pas été utilisé, et un constat chiffré sur l'intervalle, prêt pour le rapport.",
    pitfall: "S'arrêter à « le profil est supprimé ». Sans journal d'opérations, vous ne savez pas s'il y a eu un incident : vous savez seulement qu'il ne peut plus y en avoir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Mettre à jour la matrice, la DOA et le registre des signataires, et archiver',
    intro: "Pourquoi : une matrice et une DOA qui ne reflètent pas les départs sont aussi peu fiables qu'un organigramme jamais consulté. Entrées : lettre signée, confirmation de la banque, matrice CIBLE, DOA v3.",
    steps: [
      {
        title: 'Mettez à jour la DOA',
        body: "Retirez le nom du partant ou précisez la personne qui reprend l'autorité. Datez la mise à jour : DOA v3.1.",
      },
      {
        title: 'Mettez à jour la matrice',
        body: "Si le partant avait une colonne, retirez-la ou renommez-la. Relisez les alertes de la colonne H et la feuille Synthèse.",
      },
      {
        title: 'Tenez un registre des signataires',
        body: "Un tableau unique : nom, fonction, périmètre, plafond, date de la lettre, statut (actif, révoqué), date de révocation, date de confirmation de la banque.",
      },
      {
        title: 'Archivez la lettre signée et la confirmation de la banque',
        actions: [
          "Dossier du signataire, avec la mention « révoquée le JJ/MM/AAAA ».",
          "Conservez la confirmation de la banque avec la lettre.",
        ],
      },
    ],
    table: {
      columns: ['Signataire', 'Statut', 'Date de la lettre', 'Révocation confirmée par la banque'],
      rows: [
        ['Dr Patrice N.', 'Actif', '29/05/2026', 'Sans objet'],
        ['Ruth B.', 'Actif (saisie)', '29/05/2026', 'Sans objet'],
        ['Josué M.', 'Révoqué (pouvoir de fait)', '28/05/2026', 'Sans objet : jamais d\'accès bancaire'],
        ['Grâce M.', 'Révoquée', '28/05/2026', '28/05/2026 à 15 h 12'],
      ],
    },
    result: "Une DOA et une matrice à jour, un registre des signataires qui fait foi, et un dossier de révocation complet.",
    tip: "Le registre des signataires est le premier document que demandera un auditeur externe : il donne en une page tous les pouvoirs en vigueur.",
  },

  // ── Procédure 7 — Revue périodique ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Fixer le calendrier de revue et les déclencheurs',
    intro: "Pourquoi : une matrice construite avec soin mais jamais mise à jour se dégrade en quelques mois. Elle devient aussi peu fiable qu'un organigramme théorique. Entrées : DOA v3, registre des signataires, plan d'audit.",
    steps: [
      {
        title: 'Fixez une date de revue systématique',
        body: "Au minimum tous les six mois, à date fixe, inscrite dans le calendrier du Directeur Pays.",
      },
      {
        title: 'Définissez les déclencheurs de revue anticipée',
        actions: [
          "Arrivée, départ ou mutation d'un signataire.",
          "Poste signataire vacant depuis plus de 30 jours.",
          "Nouveau bailleur ou nouvelle convention.",
          "Incident : écart de caisse, fraude suspectée, constat d'audit.",
        ],
      },
      {
        title: 'Désignez le propriétaire de la revue',
        body: "Le propriétaire est la direction (Joseph T.) ; l'exécutant est le Coordinateur. L'audit interne vérifie la revue, il ne la fait pas.",
      },
      {
        title: "Inscrivez la revue au plan d'audit et au calendrier",
        body: "Demandez au comité d'audit d'ajouter une vérification de la revue dans le prochain plan.",
      },
    ],
    table: {
      columns: ['Déclencheur', 'Délai de réaction', 'Responsable'],
      rows: [
        ['Arrivée ou départ d\'un signataire', 'Le jour même : lettre', 'Joseph T.'],
        ['Poste signataire vacant > 30 jours', 'Revue de la DOA sous 15 jours', 'Joseph T.'],
        ['Nouveau bailleur ou convention', 'Avant le premier achat concerné', 'Dr Patrice N. et Ruth B.'],
        ['Incident (écart de caisse > 20 USD, etc.)', 'Sous 48 heures', 'Joseph T.'],
        ['Revue périodique', 'Tous les six mois : 30/11/2026, 31/05/2027', 'Dr Patrice N. ; vérifiée par l\'audit interne'],
      ],
    },
    result: "Un calendrier de revue avec deux dates fixes et cinq déclencheurs, un propriétaire et un exécutant désignés.",
    pitfall: "Ne mettre aucun propriétaire : une revue sans propriétaire n'aura pas lieu. Un contrôle qui appartient à tout le monde n'appartient à personne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Préparer la revue : croiser quatre listes',
    intro: "Pourquoi : les écarts apparaissent quand on met les listes face à face. Entrées : liste RH, liste des utilisateurs de la banque, droits du logiciel comptable, registre des signataires.",
    steps: [
      {
        title: 'Rassemblez les quatre listes à la même date',
        actions: [
          "Liste du personnel actif (RH).",
          "Liste des utilisateurs actifs de la banque en ligne.",
          "Liste des droits du logiciel comptable par utilisateur.",
          "Registre des signataires et lettres en vigueur.",
        ],
      },
      {
        title: 'Construisez un tableau de croisement',
        body: "Une ligne par personne apparaissant dans au moins une liste, une colonne par liste, et une colonne « Statut ».",
      },
      {
        title: 'Marquez les anomalies',
        actions: [
          "Un nom dans la banque ou le logiciel mais pas dans la RH : accès fantôme.",
          "Un nom dans la RH avec des droits mais sans lettre : signataire non autorisé.",
          "Un nom avec lettre mais sans droits : lettre périmée.",
        ],
      },
    ],
    table: {
      columns: ['Nom', 'RH', 'Banque', 'Logiciel', 'Lettre', 'Statut'],
      rows: [
        ['Dr Patrice N.', 'Oui', 'Validateur', 'Lecture', 'Oui', 'OK'],
        ['Ruth B.', 'Oui', 'Saisie', 'Saisie', 'Oui', 'OK'],
        ['Josué M.', 'Oui', 'Non', 'Non', 'Révoqué (pouvoir de fait)', 'OK'],
        ['Grâce M.', 'Non (partie)', 'Supprimé le 28/05', 'Supprimé', 'Révoquée', 'Corrigé'],
        ['Nouveau comptable (hypothèse)', 'Oui (arrivé le 01/09)', 'Profil créé', 'Droits complets', 'Aucune', 'Anomalie : droits sans lettre'],
      ],
    },
    result: "Un tableau de croisement qui fait ressortir en une page tous les accès incohérents, avant même de conduire la revue.",
    tip: "Faites fournir les listes par la banque et par l'informatique directement, pas par la personne qui tient les comptes : elle ne doit pas filtrer l'information sur ses propres accès.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Conduire la revue : rejouer la cartographie et tester la DOA',
    intro: "Pourquoi : une revue ne consiste pas à relire les documents, mais à vérifier que la réalité les respecte. Entrées : tableau de croisement, matrice CIBLE, DOA v3, échantillon d'opérations.",
    steps: [
      {
        title: 'Refaites une cartographie rapide des accès',
        body: "Mêmes cinq questions qu'à la procédure 1, mêmes preuves vues, sur une demi-journée.",
      },
      {
        title: 'Comparez avec la matrice CIBLE',
        body: "Pour chaque bloc, qui exécute réellement chaque fonction ? Y a-t-il retour à un ancien cumul ?",
      },
      {
        title: 'Testez la DOA sur un échantillon de dix opérations',
        actions: [
          "Tirez dix opérations de la période, au hasard, dans les trois paliers.",
          "Vérifiez pour chacune que le signataire et la co-signature correspondent à la DOA.",
          "Vérifiez que personne n'a approuvé ce qu'il avait initié.",
        ],
      },
      {
        title: 'Relevez les écarts',
        body: "Notez chaque écart avec la pièce qui le prouve, sans qualifier l'intention.",
      },
    ],
    table: {
      columns: ['Opération testée', 'Montant (USD)', 'Signature attendue', 'Signature constatée', 'Écart'],
      rows: [
        ['BC échantillon 1', '1 250', 'Dr Patrice N.', 'Dr Patrice N.', 'Aucun'],
        ['BC échantillon 2', '7 400', 'Dr Patrice N. + Joseph T.', 'Dr Patrice N. seul', 'Co-signature manquante'],
        ['BC échantillon 3', '18 000', 'Joseph T. + siège', 'Joseph T. + siège', 'Aucun'],
        ['Paiement échantillon 4', '3 900', 'Ruth B. saisit, Dr Patrice N. valide', 'Ruth B. saisit, Dr Patrice N. valide', 'Aucun'],
      ],
    },
    result: "Une revue documentée : cartographie rejouée, comparaison avec la cible, dix opérations testées, écarts relevés avec preuves.",
    pitfall: "Tester seulement les opérations où tout est en règle. Tirez l'échantillon au hasard dans la liste complète de la période, jamais dans une liste fournie par le service audité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Vérifier que les contrôles compensatoires sont réellement exécutés',
    intro: "Pourquoi : un contrôle compensatoire n'a de valeur que s'il est réellement exécuté et documenté à chaque fois. Rédigé et jamais appliqué, il équivaut à l'absence de contrôle. Entrées : registre des contrôles compensatoires, pièces de preuve.",
    steps: [
      {
        title: 'Ouvrez le registre et listez les exécutions prévues sur la période',
        body: "Pour chaque contrôle, comptez les échéances attendues entre deux revues.",
      },
      {
        title: 'Demandez les pièces de preuve de chaque exécution',
        actions: [
          "Procès-verbal de comptage signé, rapprochement bancaire signé, compte rendu de contrôle des virements.",
          "Vérifiez la date, les deux signatures et la cohérence avec le relevé.",
        ],
      },
      {
        title: "Calculez le taux d'exécution de chaque contrôle",
        body: "Taux = nombre d'exécutions prouvées ÷ nombre d'échéances. Seul un taux de 100 % est conforme.",
      },
      {
        title: 'Escaladez chaque contrôle non exécuté',
        body: "Informez Joseph T. et le comité, identifiez la cause (absence, surcharge, oubli) et proposez une correction : suppléant, calendrier verrouillé.",
      },
    ],
    table: {
      columns: ['Contrôle compensatoire', 'Échéances', 'Exécutions prouvées', 'Taux', 'Conclusion'],
      rows: [
        ['Comptage de caisse surprise', '6', '4', '67 %', 'Non conforme : deux comptages manqués (responsable absent)'],
        ['Rapprochement bancaire signé', '6', '6', '100 %', 'Conforme'],
        ['Contrôle de cinq virements', '6', '5', '83 %', 'Non conforme : un mois sans compte rendu'],
        ['Clôture et revue du siège', '6', '6', '100 %', 'Conforme'],
      ],
    },
    result: "Un taux d'exécution par contrôle compensatoire, avec les causes et les actions de correction de chaque contrôle non conforme.",
    pitfall: "Accepter « on l'a fait mais on n'a pas de papier ». Sans preuve datée, un contrôle n'a pas eu lieu pour un auditeur externe ni pour un bailleur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Documenter la revue, mettre à jour les versions et fixer la suivante',
    intro: "Pourquoi : sans compte rendu signé, la revue n'a pas eu lieu. Entrées : résultats des étapes 2 à 4. Format : une page.",
    steps: [
      {
        title: 'Rédigez le compte rendu de revue en une page',
        actions: [
          "Date, participants, périmètre revu.",
          "Constats : écarts de la cartographie, de la DOA, des contrôles compensatoires.",
          "Décisions et actions, avec responsable et échéance.",
          "Date de la prochaine revue.",
        ],
      },
      {
        title: 'Faites-le signer par le propriétaire de la revue',
        body: "Joseph T. signe le compte rendu et reçoit une copie.",
      },
      {
        title: 'Mettez à jour les versions',
        body: "Matrice, DOA, registre des signataires, registre des contrôles : chaque document porte sa nouvelle version et sa date.",
      },
      {
        title: 'Transmettez au comité et inscrivez la revue suivante au calendrier',
        body: "Envoyez le compte rendu à Hélène V. et inscrivez la prochaine date (31/05/2027) dans le calendrier du Directeur Pays.",
      },
    ],
    example: {
      title: 'Compte rendu de revue type (extrait)',
      lines: [
        "Revue de la matrice d'autorisation — base de Goma — 30/11/2026. Participants : Joseph T., Dr Patrice N., Ruth B., Amani K. (observateur, audit interne).",
        "Constats : un comptable arrivé le 01/09/2026 dispose de droits sans lettre ; deux comptages de caisse sur six non réalisés ; DOA v3 respectée sur 9 des 10 opérations testées.",
        "Décisions : lettre d'autorisation du comptable signée avant le 04/12 (Joseph T.) ; un suppléant interne est désigné pour les comptages en cas d'absence de Dr Patrice N. (jamais l'audit interne) ; mise à jour DOA v3.2.",
        "Prochaine revue : 31/05/2027, ou avant en cas de mouvement d'un signataire.",
      ],
    },
    result: "Un compte rendu signé, des versions à jour, une date de prochaine revue inscrite : la matrice reste un document vivant.",
    tip: "Annoncez la date de la prochaine revue dans le compte rendu lui-même : c'est la seule façon qu'elle soit inscrite dans un calendrier d'une autre personne que vous.",
  },

  // ───────────────────────── 6. Cas résolu de bout en bout ─────────────────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Goma : de la demande du comité au dossier complet',
    scenario: "Rappel de l'énoncé : le comité d'audit de HSGL vous a confié, dans la lettre de mission du 7 mai 2026, l'objectif d'assurance « séparation des tâches » et l'objectif de conseil « grille de seuils » sur le cycle achats-logistique de Goma. Un constat du module 01 vous alerte : 37 bons de commande où le demandeur est aussi le réceptionnaire, dont 31 au nom de Josué M. Vous avez huit jours de terrain (21 au 29 mai) pour livrer un diagnostic, un plan et des délégations signées avant la visite du Fonds Meridian en juillet.",
    steps: [
      {
        title: 'Raisonnement 1 — Partir des accès réels, pas du constat isolé',
        body: "Les 37 bons ne prouvent rien seuls : ils révèlent une structure. On cartographie donc qui détient quoi, avec preuves, avant de conclure. C'est ce qui permet de passer de « Josué M. fait trop de choses » à « la structure permet à une personne de boucler seule le cycle ».",
      },
      {
        title: 'Raisonnement 2 — Chiffrer avant de prioriser',
        body: "Cinq blocs en alerte, mais un effectif limité : on classe par exposition financière (paiement 1 380 000 USD, bons < 1 000 USD 68 000 USD, stock 142 000 USD, caisse 38 000 USD) et par état du contrôle, pour traiter quatre cumuls en première vague.",
      },
      {
        title: 'Raisonnement 3 — Éliminer d\'abord, compenser ensuite',
        body: "Trois cumuls disparaissent par redistribution entre les cinq personnes ; deux restent (paiement et comptabilisation) parce que la Finance se réduit à une personne depuis le départ du comptable. Ils sont déclarés et compensés.",
      },
      {
        title: 'Raisonnement 4 — Formaliser pour que ça tienne',
        body: "Une DOA testée sur 412 bons, des lettres signées et notifiées, une révocation tardive traitée jusqu'à la recherche des opérations, et une revue fixée au 30 novembre 2026.",
      },
    ],
    table: {
      columns: ['Date', 'Étape', 'Pièce produite', 'Dossier'],
      rows: [
        ['20/05', 'Préparation', "Courriel d'annonce, liste d'accès", '04_Tests/SoD_Goma'],
        ['21/05', 'Cartographie sur site', 'Relevé par personne, captures banque', '04_Tests/SoD_Goma'],
        ['22/05', 'Validation et matrice ACTUEL', 'Fiche validée, matrice et Synthèse', '04_Tests/SoD_Goma'],
        ['25-26/05', 'Priorisation, matrice CIBLE, colonne I', 'Classement, matrice CIBLE, registre', '04_Tests/SoD_Goma'],
        ['26-27/05', 'DOA v3 et test sur 412 bons', 'Tableau DOA, test chiffré', '04_Tests/DOA'],
        ['28-29/05', 'Lettres, révocation, notification', 'Pack de lettres, confirmation banque', '04_Tests/Lettres'],
        ['29/05', 'Calendrier de revue et note au comité', 'Calendrier, note de synthèse', '04_Tests/SoD_Goma'],
      ],
    },
    result: "Une chronologie de sept jalons dont chaque pièce justifie la suivante : c'est le modèle de dossier à reproduire pour toute revue de contrôle interne.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 2 : le diagnostic, de cinq alertes à deux cumuls compensés',
    scenario: "Livrable : la comparaison ACTUEL / CIBLE, qui montre ce que la redistribution change et ce qui reste. Elle se lit en deux minutes par la direction.",
    steps: [
      {
        title: 'Raisonnement — Lire le tableau bloc par bloc',
        body: "Un cumul éliminé se prouve par la matrice CIBLE (alerte « OK »). Un cumul assumé se prouve par la colonne I (contrôle compensatoire) et le registre. La Synthèse passe de « ⚠ ALERTE ÉLEVÉE » (5 cumuls) à « À SURVEILLER » (2 cumuls).",
      },
    ],
    table: {
      columns: ['Bloc', 'ACTUEL : qui cumule', 'CIBLE : répartition', 'Alerte CIBLE'],
      rows: [
        ['Bon de commande', 'Josué M. : initie, approuve (< 1 000 USD), envoie', 'Josué M. initie ; Dr Patrice N. approuve ; Esther K. envoie ; Ruth B. enregistre', 'OK'],
        ['Réception / stock', 'Josué M. : demande, contrôle, réceptionne (31 bons) ; Didier L. : réceptionne et tient le stock', 'Josué M. demande ; Esther K. contrôle ; Didier L. réceptionne ; Ruth B. tient la fiche de stock', 'OK'],
        ['Paiement', 'Ruth B. : approuve, exécute, enregistre', 'Ruth B. saisit ; Dr Patrice N. valide ; Ruth B. enregistre', '⚠ cumul assumé : exécution + enregistrement'],
        ['Caisse', 'Esther K. : décaisse, tient le livre, rapproche', 'Esther K. décaisse ; Ruth B. tient le livre et rapproche ; Dr Patrice N. approuve', 'OK'],
        ['Comptabilisation', 'Ruth B. : valide, clôture, rapproche la banque', 'Ruth B. saisit et rapproche ; Dr Patrice N. valide ; le siège clôture', '⚠ cumul assumé : saisie + rapprochement'],
      ],
    },
    result: "Un tableau avant/après : trois cumuls éliminés, deux compensés, Synthèse de 5 à 2 alertes. La réponse à la question « sommes-nous exposés ? » tient sur une ligne.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 3 : le plan de redistribution d\'une page (version finale)',
    scenario: "Livrable : le plan que Joseph T. signe. Il reprend dans l'ordre le constat, la nouvelle répartition, les contrôles compensatoires, le calendrier et les décisions demandées.",
    steps: [
      {
        title: 'Raisonnement — Une page, cinq blocs, aucune ambiguïté',
        body: "Le plan ne répète pas la matrice : il la résume et demande des décisions. Chaque contrôle compensatoire nomme son exécutant, sa fréquence, sa preuve et son seuil d'escalade ; chaque redistribution nomme la suppléance.",
      },
    ],
    example: {
      title: 'Plan de redistribution — base de Goma — 29 mai 2026',
      lines: [
        "1. Constat. Au 22 mai, la matrice ACTUEL relève cinq cumuls de fonctions, niveau d'alerte global « élevé ». Les plus exposés : l'approbation, l'exécution et l'enregistrement des paiements par la même personne (1 380 000 USD sur six mois) et l'initiation, l'approbation et l'envoi des bons de moins de 1 000 USD par le Logistics Officer (68 000 USD). Aucun écart de caisse ni aucune opération irrégulière n'a été constaté ; le constat porte sur l'exposition structurelle.",
        "2. Nouvelle répartition. Bons de commande : Josué M. initie, Dr Patrice N. approuve tous les bons, Esther K. envoie, Ruth B. enregistre. Réception : Josué M. demande, Esther K. contrôle la conformité, Didier L. réceptionne, Ruth B. tient la fiche de stock. Caisse : Esther K. décaisse, Ruth B. tient le livre et rapproche, Dr Patrice N. approuve. Paiements : Ruth B. saisit, Dr Patrice N. valide sur son propre profil bancaire.",
        "3. Cumuls assumés et contrôles compensatoires. Paiement (exécution + enregistrement, Ruth B.) : contrôle mensuel de cinq virements par Dr Patrice N. ; relevé bancaire adressé directement à Dr Patrice N. et au siège ; écart non expliqué signalé à Joseph T. sous 48 heures. Comptabilisation (saisie + rapprochement) : rapprochement signé chaque mois par Dr Patrice N. ; clôture et revue du journal par le comptable régional avant le 10.",
        "4. Suppléances. En l'absence de Didier L., Esther K. réceptionne et Dr Patrice N. contrôle la conformité. En l'absence d'Esther K., Didier L. décaisse jusqu'à 150 USD et Ruth B. tient le livre. Un comptage de caisse surprise a lieu chaque mois, première occurrence semaine du 25 mai.",
        "5. Décisions demandées à Joseph T. avant le 29 mai : valider la répartition, nommer les exécutants, signer la DOA v3 et les lettres, demander au siège le recrutement d'un comptable (poste vacant depuis le 16 janvier). Mise en œuvre au 1er juin 2026 ; vérification de la première exécution des contrôles à 30 jours.",
      ],
    },
    result: "Un plan d'une page dont chaque phrase est vérifiable, relié aux pièces du dossier : matrice, registre, DOA, lettres.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 4 : la DOA signée et le pack de lettres',
    scenario: "Livrable : le dossier d'autorisation. Il se compose de la DOA v3 validée par Joseph T. et de cinq documents d'habilitation. Chaque pièce se rattache à une ligne du registre des signataires.",
    steps: [
      {
        title: 'Raisonnement — Une lettre par évolution de pouvoir',
        body: "Trois autorisations (dont une à demander au siège), deux révocations : l'une pour une personne partie depuis 132 jours, l'autre pour un pouvoir qui n'avait jamais été formalisé. Aucune lettre n'est antidatée.",
      },
    ],
    table: {
      columns: ['Pièce', 'Usage', 'Contenu essentiel', 'Signée / notifiée'],
      rows: [
        ['DOA v3', 'Référentiel', '9 lignes : bon de commande, paiement, caisse, recrutement, avenant ; règles de suppléance, de dérogation, de fractionnement', 'Joseph T., 29/05/2026 ; diffusée à la banque et au siège'],
        ['Lettre Dr Patrice N.', 'Autorisation', "BC ≤ 5 000 USD seul, ≤ 15 000 USD avec Joseph T. ; validation des virements ≤ 25 000 USD ; durée jusqu'au 30/11/2026", 'Signée 29/05 ; banque informée le 29/05'],
        ['Lettre Ruth B.', 'Autorisation', 'Saisie des virements en banque en ligne, sans droit de validation ; écriture comptable ; durée jusqu\'au 30/11/2026', 'Signée 29/05 ; banque informée le 29/05'],
        ['Lettre Joseph T. (siège)', 'Mise à jour', 'Co-signature requise au-delà de 5 000 USD pour les paiements', 'Demandée au siège le 29/05'],
        ['Lettre Josué M.', 'Révocation', "Fin du pouvoir de signer les BC jusqu'à 1 000 USD ; motif : DOA v3 ; effet 01/06/2026", 'Signée 28/05 ; remise en main propre'],
        ['Lettre Grâce M.', 'Révocation', 'Départ du 16/01/2026 ; effet immédiat 28/05/2026 ; confirmation de la banque 15 h 12', 'Signée 28/05 ; banque, informatique, comptabilité notifiés'],
      ],
    },
    result: "Un pack de cinq lettres et une DOA signée, inscrits au registre des signataires, dont aucune ne dépend d'une mémoire orale ou d'un courriel de nomination.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — partie 5 : la note de synthèse au comité d\'audit',
    scenario: "Livrable : la note adressée à Hélène V., présidente du comité d'audit, qui sert aussi de pièce d'entrée du rapport provisoire du 12 juin. Elle rapporte les faits, ce qui a été fait, ce qui reste à faire, et les décisions demandées.",
    steps: [
      {
        title: 'Raisonnement — Écrire pour le comité, pas pour l\'équipe',
        body: "Le comité veut savoir : sommes-nous exposés, de combien, que fait-on, et qu'attendez-vous de nous ? La note répond en cinq phrases et renvoie aux pièces. Elle ne qualifie aucune intention, ne nomme pas de faute individuelle et reste factuelle.",
      },
    ],
    example: {
      title: 'Note de synthèse — 29 mai 2026 (extrait)',
      lines: [
        "À : Hélène V., Présidente du comité d'audit — Copie : Joseph T., Directeur Pays — De : Amani K., auditeur(rice) interne, avec la relecture de Fatou S. pour la partie seuils.",
        "Objet : Revue de la séparation des tâches et de la délégation de pouvoir — base de Goma.",
        "1. Constat. Les cinq opérations du cycle présentaient un cumul de fonctions ; l'exposition la plus forte concerne les paiements (1 380 000 USD) et les bons de commande de moins de 1 000 USD (68 000 USD). Aucune opération irrégulière n'est établie. Le profil bancaire d'une ancienne employée est resté actif 132 jours après son départ, sans connexion ni opération.",
        "2. Actions réalisées. Redistribution entre cinq personnes (trois cumuls éliminés, deux compensés), DOA v3 validée et testée sur 412 bons, cinq lettres signées ou notifiées, profil bancaire supprimé le 28 mai à 15 h 12.",
        "3. Reste à faire. Première exécution des contrôles compensatoires avant le 30 juin ; recrutement du comptable (poste vacant depuis janvier) ; mise à jour de la charte d'audit sur la déclaration écrite des conflits ; revue du 30 novembre 2026.",
        "4. Décisions demandées au comité. Prendre acte du plan ; demander au siège le recrutement du comptable ; inscrire la vérification de la revue du 30 novembre au plan d'audit.",
      ],
    },
    result: "Livrable final : une note de synthèse qui raconte le diagnostic, le traitement et la suite, pièces à l'appui, et qui demande trois décisions précises.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Base de Jérémie (Haïti) : cartographie et matrice',
    instructions: "Vous êtes déployé(e) comme auditeur(rice) interne d'une ONG de développement pour une revue de contrôle interne sur la base de Jérémie, dans le Grand'Anse. La base compte quatre employés nationaux et un chef de base international, soit cinq personnes ; aucun poste vacant n'a été pourvu depuis huit mois faute de budget. Deux jours d'observation vous apprennent que M. Étienne, agent logistique-achats, sélectionne les fournisseurs locaux, signe les bons de commande jusqu'à 500 dollars (seuil théoriquement réservé au chef de base selon une matrice du siège jamais mise à jour), réceptionne la marchandise dans le magasin dont il détient seul la clé, et tient le cahier de stock. Il gère aussi la caisse d'avance « en attendant qu'on recrute un caissier », depuis six mois. Le chef de base signe les bons au-delà de 500 dollars sans vérifier le stock physique. Aucune lettre d'autorisation n'existe pour les deux signataires : seul un courriel du coordinateur pays, vieux de deux ans, fait référence.",
    steps: [
      {
        title: 'Définissez les cinq colonnes de rôles (procédure 2, étape 1)',
        actions: [
          "Enregistrez une copie du template : Jeremie_Matrice_SoD_ACTUEL.xlsx.",
          "Renommez C5 à G5 avec les cinq postes réels : M. Étienne, le chef de base et trois postes que vous définissez de façon réaliste (par exemple assistant(e) administratif(ve), chauffeur-logisticien, gardien-magasinier adjoint).",
          "Écrivez vos hypothèses sur ces trois postes dans votre livrable : le cas ne les décrit pas.",
        ],
      },
      {
        title: 'Cochez la situation actuelle (procédure 2, étapes 2 et 3)',
        actions: [
          "Cochez X pour chaque fonction du cycle achats-stock-caisse que le texte attribue à une personne.",
          "Quand le texte est muet sur une fonction, laissez-la vide et notez « non documentée : à confirmer sur place ».",
          "Pour la caisse, cochez M. Étienne sur l'exécution (décaissement) et sur l'enregistrement si vous retenez qu'il tient le livre ; justifiez votre choix.",
        ],
      },
      {
        title: 'Lisez les alertes (procédure 2, étape 4)',
        actions: [
          "Relevez les lignes de calcul 10, 15, 20, 25 et 30.",
          "Vérifiez qu'au moins trois blocs distincts sont en alerte et qu'ils sont tous portés par M. Étienne.",
          "Lisez la feuille Synthèse : B5 et B6.",
        ],
      },
      {
        title: 'Complétez par les angles morts (procédure 2, étape 5)',
        actions: [
          "Relevez la fonction non exercée : l'approbation du chef de base ne vérifie pas le stock.",
          "Relevez l'écart entre la matrice du siège (500 dollars réservés au chef de base) et la pratique (signés par M. Étienne).",
        ],
      },
    ],
    table: {
      columns: ['Fait du cas', 'Bloc de la matrice', 'Fonction concernée'],
      rows: [
        ['Sélectionne les fournisseurs locaux', 'Émission du bon de commande', 'Initiation'],
        ['Signe les bons jusqu\'à 500 dollars', 'Émission du bon de commande', 'Approbation'],
        ['Réceptionne et garde la clé du magasin', 'Réception marchandise / stock', 'Exécution'],
        ['Tient le cahier de stock', 'Réception marchandise / stock', 'Enregistrement'],
        ['Gère la caisse d\'avance', 'Tenue de caisse', 'Exécution (et enregistrement si livre tenu)'],
        ['Signe au-delà de 500 dollars sans vérifier le stock', 'Émission du bon de commande', 'Approbation, sans contrôle du stock'],
      ],
    },
    tip: "La formule alerte un bloc dès qu'une personne tient deux fonctions. Si vos trois blocs M. Étienne ne s'allument pas, relisez vos X : vous avez probablement coché ce que prévoit la procédure au lieu de ce que décrit le cas.",
    pitfall: "Inventer des faits sur les trois autres postes. Quand le cas est muet, notez l'hypothèse ou laissez la ligne vide ; ne cochez pas pour « équilibrer » la matrice.",
    deliverable: "La matrice Excel « ACTUEL » complétée (feuille Matrice d'autorisation et feuille Synthèse), avec la liste de vos hypothèses.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Base de Jérémie : plan de redistribution d\'une demi-page',
    instructions: "Sans aucun recrutement (contrainte budgétaire confirmée par le siège pour les six prochains mois), proposez en une demi-page une nouvelle répartition des quatre fonctions du cycle achats-stock-caisse entre les cinq personnes disponibles. Pour tout cumul que vous ne pouvez pas totalement éliminer, décrivez précisément le contrôle compensatoire.",
    steps: [
      {
        title: 'Chiffrez et classez (procédure 3, étapes 1 et 2)',
        actions: [
          "Retenez une hypothèse de montants (par exemple bons de commande, valeur du stock, plafond de la caisse) et indiquez-la dans votre plan.",
          "Classez les cumuls de M. Étienne par risque : caisse, bons, stock.",
        ],
      },
      {
        title: 'Redistribuez (procédure 3, étape 3)',
        actions: [
          "Essayez d'éliminer chaque cumul avec les cinq personnes.",
          "Appliquez les règles : personne ne contrôle son propre travail ni son supérieur direct ; charge réaliste.",
          "Proposez une règle de suppléance écrite pour le magasin et pour la caisse.",
        ],
      },
      {
        title: 'Reportez la répartition dans la CIBLE (procédure 3, étape 4)',
        actions: [
          "Copiez le fichier en Jeremie_Matrice_SoD_CIBLE.xlsx et ressaisissez les X.",
          "Relevez le niveau de la Synthèse.",
        ],
      },
      {
        title: 'Rédigez chaque contrôle compensatoire avec ses cinq attributs (procédure 3, étape 5)',
        actions: [
          "Qui, quoi, quand, preuve, escalade : une phrase par attribut.",
          "Traitez en particulier le cas où le chef de base approuve sans vérifier le stock : ajoutez une vérification du stock physique avant approbation, avec preuve.",
        ],
      },
      {
        title: 'Rédigez le plan en une demi-page',
        actions: [
          "Constat, nouvelle répartition, contrôles compensatoires, suppléances, calendrier.",
          "Datez les premières exécutions.",
        ],
      },
    ],
    example: {
      title: 'Format attendu pour un contrôle compensatoire',
      lines: [
        "Contrôle : comptage de caisse surprise.",
        "Qui : le chef de base (qui ne touche pas aux espèces) ; Quoi : comptage physique, rapproché du livre, sur formulaire à deux signatures ; Quand : une fois par mois, date non annoncée ; Preuve : procès-verbal signé par le chef de base et le caissier, classé au dossier de caisse ; Escalade : écart supérieur à un montant fixé ou contrôle manqué, information du coordinateur pays sous 48 heures.",
      ],
    },
    tip: "Un plan qui n'élimine aucun cumul est suspect : avec cinq personnes, vous devez pouvoir en éliminer au moins un. Un plan qui prétend tout éliminer l'est aussi : c'est probablement une répartition irréaliste.",
    deliverable: "La matrice « CIBLE » et un plan de redistribution d'une demi-page maximum, incluant les contrôles compensatoires.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Base de Jérémie : la lettre d\'autorisation du chef de base',
    instructions: "Rédigez, avec lettre-autorisation-revocation-signataire.docx, la lettre d'autorisation du chef de base comme signataire principal jusqu'au plafond de sa fonction. Identifiez ensuite, dans votre livrable, pourquoi l'absence de lettres formelles pour les deux signataires actuels constitue en soi une faiblesse de contrôle, indépendamment des cumuls de fonctions déjà relevés.",
    steps: [
      {
        title: 'Cochez l\'usage et remplissez la section 1 (procédure 5, étape 2)',
        actions: [
          "Cochez AUTORISATION ; laissez la section 3 vide.",
          "Saisissez le nom (invention réaliste), le poste de chef de base, la structure, la base de Jérémie et une date d'effet.",
        ],
      },
      {
        title: 'Remplissez la section 2 (procédure 5, étape 3)',
        actions: [
          "Périmètre : signer les bons de commande au-delà de 500 dollars, validation des paiements ; précisez les opérations.",
          "Plafond : montant et devise, avec ou sans double signature selon le cas.",
          "Comptes et systèmes : précisez le compte bancaire, sans inventer de numéro réel.",
          "Durée : jusqu'à la prochaine revue, avec une date.",
        ],
      },
      {
        title: 'Remplissez la section 4 (procédure 5, étape 4)',
        actions: [
          "Autorité délégante : le coordinateur pays.",
          "Signatures, date et lieu : laissez-les à signer, mais indiquez qui signe quoi et dans quel ordre.",
        ],
      },
      {
        title: 'Rédigez l\'analyse de la faiblesse des lettres absentes',
        actions: [
          "Aucun périmètre écrit : on ne sait pas ce que chaque signataire a le droit de faire.",
          "Aucun plafond écrit : le seuil de 500 dollars repose sur une matrice du siège périmée.",
          "Aucune date : on ne sait pas si l'autorisation est encore valable ni quand la revoir.",
          "Aucune traçabilité : un courriel de deux ans n'est ni signé par l'autorité ni accusé de réception par le signataire.",
          "Impossible de révoquer proprement : sans lettre, il n'y a aucun document à révoquer.",
        ],
      },
    ],
    tip: "Pour la section 2, gardez la cohérence avec votre plan de l'exercice 2 : si le chef de base valide les virements ou vérifie le stock, la lettre doit le dire en toutes lettres.",
    pitfall: "Écrire seulement « le chef de base signe les bons de commande ». La lettre doit fixer un périmètre exact, un plafond avec devise, des comptes précis et une durée : un seul oubli la rend inutilisable devant la banque.",
    deliverable: "La lettre d'autorisation du chef de base, complétée et prête à signer, et une analyse écrite de la faiblesse liée à l'absence de lettres formelles.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Révocation à anticiper et date de revue de votre structure',
    instructions: "Dans trois semaines, le chef de base de Jérémie quitte son poste (fin de mission le 30 juin 2026) et son successeur arrive le 1er juillet. Préparez la révocation, puis fixez le calendrier de revue de la matrice de votre propre structure (ou de la base de Jérémie si vous n'avez pas de structure en propre).",
    steps: [
      {
        title: 'Préparez la lettre de révocation (procédure 6, étapes 1 et 2)',
        actions: [
          "Dressez la liste des accès du chef de base : banque, logiciel, clés, cachet.",
          "Remplissez la lettre : case RÉVOCATION cochée, section 1, section 3 (motif, date effective de fin d'accès, autorités à notifier, personne reprenant l'autorité), section 4.",
          "La date effective est le jour du départ : prévoyez la lettre prête à dater le 30 juin.",
        ],
      },
      {
        title: 'Planifiez la notification (procédure 6, étapes 3 à 5)',
        actions: [
          "Rédigez le courriel à la banque : suppression du profil, confirmation écrite avec date et heure.",
          "Prévoyez la vérification : liste des utilisateurs actifs, journal des opérations après le départ.",
          "Prévoyez la mise à jour de la matrice, de la DOA et du registre des signataires.",
        ],
      },
      {
        title: 'Fixez le calendrier de revue (procédure 7, étape 1)',
        actions: [
          "Choisissez une date de revue à six mois au plus et une date suivante.",
          "Écrivez au moins quatre déclencheurs de revue anticipée.",
          "Désignez un propriétaire et un exécutant.",
        ],
      },
    ],
    tip: "Pour votre propre structure, partez de la liste réelle des signataires de la banque : c'est le moyen le plus rapide de découvrir les accès oubliés.",
    pitfall: "Dater la lettre de révocation après le départ « pour avoir le temps de la préparer ». La lettre se prépare avant, et se date le jour même.",
    deliverable: "La lettre de révocation prête à dater, le courriel de notification, et un calendrier de revue avec deux dates, quatre déclencheurs et un propriétaire.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre matrice ACTUEL cite cinq personnes réelles en C5:G5 et vos hypothèses sur les postes non décrits sont écrites.",
      "Au moins trois blocs distincts sont en alerte pour M. Étienne, et vous avez lu la feuille Synthèse (B5 et B6).",
      "Chaque X de la matrice peut être relié à un fait du cas ; aucune case n'a été cochée « pour équilibrer ».",
      "Vous avez signalé l'angle mort du chef de base qui approuve sans vérifier le stock.",
      "Votre matrice CIBLE réduit le nombre d'alertes sans prétendre à « CONFORME » si l'effectif ne le permet pas.",
      "Chaque cumul assumé a un contrôle compensatoire avec ses cinq attributs : qui, quoi, quand, preuve, escalade.",
      "Votre plan de redistribution tient sur une demi-page et propose une règle de suppléance.",
      "La lettre d'autorisation fixe un périmètre exact, un plafond avec devise, des comptes précis et une durée avec date.",
      "Votre analyse explique pourquoi l'absence de lettres est une faiblesse en soi : périmètre, plafond, date, traçabilité, révocation impossible.",
      "La lettre de révocation est préparée avant le départ, datée du jour du départ, et sa notification à la banque est prévue avec confirmation écrite.",
      "Votre calendrier de revue a deux dates, au moins quatre déclencheurs et un propriétaire désigné.",
      "Vous n'avez signé aucune lettre ni exécuté aucun contrôle vous-même : vous avez proposé, la direction décide.",
    ],
  },

  // ───────────────────────── 8. Erreurs de terrain ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents sur le terrain et comment les éviter',
    items: [
      "Matrice jamais mise à jour après un départ ou une mutation : une matrice signée en 2022 circule encore en 2026 avec des noms de personnes parties, et leurs accès bancaires sont parfois restés actifs. Fixez la revue tous les six mois et à chaque mouvement de signataire, avec un propriétaire nommé.",
      "Séparation des tâches affichée sur le papier mais contournée en pratique : « c'est M. Étienne qui fait tout, c'est plus rapide ». Un contrôle qui n'est vrai que sur le papier est pire qu'une absence de contrôle. Cochez toujours ce que vous avez vu, jamais ce que prévoit la procédure.",
      "Lettre de révocation non signée à temps : un ancien signataire dont l'accès n'a jamais été révoqué reste techniquement capable d'autoriser des opérations. Émettez la lettre le jour du départ, transmettez-la le jour même à la banque et aux administrateurs, exigez une confirmation écrite.",
      "Copier la matrice d'une autre mission ou du siège sans l'adapter : elle prévoit des niveaux d'approbation qui n'existent pas sur la base. Construisez la DOA sur les postes réellement pourvus et testez-la sur des transactions réelles.",
      "Traiter un cumul comme réglé une fois le contrôle compensatoire écrit : il n'est utile que s'il est exécuté et documenté à chaque fois. Tenez un registre, calculez un taux d'exécution, escaladez chaque contrôle manqué.",
      "Se contenter de la formule du template : elle ne voit ni les fonctions que personne n'exerce, ni les accès sans colonne, ni les liens hiérarchiques entre personnes. Lisez toujours la matrice par colonne et comparez les listes d'utilisateurs aux listes RH.",
      "Rédiger une lettre d'autorisation floue : périmètre vague, plafond sans devise, aucune durée. Elle est inutilisable devant la banque. Rédigez chaque champ de façon vérifiable et faites lire la DOA au signataire avant qu'il signe.",
      "Perdre son indépendance : signer une lettre, exécuter un contrôle compensatoire, valider un bon de commande « pour dépanner ». Vous proposez, la direction décide, signe et exécute.",
    ],
  },

  // ───────────────────────── 9. Bilan ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous savez expliquer pourquoi une même personne ne doit jamais demander, approuver ET payer une même transaction, avec un exemple chiffré de votre structure.",
      "Vous avez produit une fiche de cartographie des accès réels, appuyée de preuves vues et validée par écrit par les personnes concernées.",
      "Vous avez rempli la matrice ACTUEL du template, lu ses alertes et sa feuille Synthèse, et listé les cumuls que la formule ne voit pas.",
      "Vous avez chiffré et classé les cumuls par risque financier, et décidé pour chacun : éliminer par redistribution ou compenser.",
      "Vous avez construit une matrice CIBLE, rédigé les contrôles compensatoires de la colonne I avec leurs cinq attributs, et tenu un registre de suivi.",
      "Vous avez construit une DOA par seuil sur les postes réellement pourvus, l'avez testée sur les 412 bons de commande et fait valider par l'autorité.",
      "Vous avez rédigé les lettres d'autorisation et de révocation, les avez fait signer, notifiées à la banque et archivées, et vérifié la suppression des accès.",
      "Vous avez fixé un calendrier de revue à six mois avec des déclencheurs, et vous savez vérifier le taux d'exécution des contrôles compensatoires.",
      "Vous avez rédigé une note de synthèse au comité qui rapporte le diagnostic, le traitement et les décisions demandées, sans perdre votre indépendance.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi une même personne ne doit jamais demander, approuver ET payer une même transaction.",
      "Je sais identifier les cumuls de fonctions incompatibles dans les cycles Finance, Achats et RH.",
      "J'ai complété une matrice d'autorisation avec le template fourni et laissé la formule détecter les cumuls à risque.",
      "Je sais lire la feuille Synthèse et je connais ce que la formule ne détecte pas.",
      "Je sais construire une matrice de délégation de pouvoir par seuil adaptée à un effectif réel, pas à un modèle théorique.",
      "Pour chaque cumul que je ne peux pas éliminer, je sais formuler un contrôle compensatoire concret et vérifiable, avec ses cinq attributs.",
      "J'ai rédigé une lettre d'autorisation de signataire avec le template fourni, champ par champ.",
      "Je sais dans quel délai une lettre de révocation doit être émise après le départ ou le changement de poste d'un signataire : le jour même, jamais après.",
      "Je sais vérifier qu'une révocation est effective et chercher les opérations postérieures au départ.",
      "J'ai identifié une date de revue périodique pour la matrice d'autorisation de ma structure, avec un propriétaire.",
      "Je n'ai signé aucune lettre ni exécuté aucun contrôle moi-même : j'ai proposé, la direction décide.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 03 — Audit de la Supply Chain & des Achats : vous y testerez la procédure d'achat de bout en bout (vérification des procédures, contrôle des seuils, détection des collusions fournisseurs, analyse des écarts d'inventaire), en vous appuyant sur la matrice et la DOA que vous venez de construire.",
  },
]
