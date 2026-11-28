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

  // ───────────────────────── 5. LE CŒUR : les procédures ─────────────────────────

  // ── Procédure 1 — Définir la population ──
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Fixer la période et la règle de rattachement des dossiers',
    intro: "Pourquoi : un échantillon n'a de valeur que par rapport à une population connue et bornée ; sans règle écrite, deux auditeurs compteront deux populations différentes. Quand : Jours 1-2, avant toute demande de données. Entrées : la lettre de mission (période, périmètre, exclusions), la procédure achats en vigueur.",
    steps: [
      {
        title: 'Ouvrez un document « Note de population — [mission] »',
        actions: [
          "Notez en tête l'intitulé de la mission, la base, le cycle audité et la période, recopiée mot pour mot de la lettre de mission.",
          "Datez et signez la note de vos initiales : elle fera partie du dossier permanent.",
        ],
      },
      {
        title: "Définissez ce qu'est un « dossier d'achat »",
        actions: [
          "Écrivez : un dossier = un bon de commande (PO) et l'ensemble de ses pièces, quel que soit le nombre de lignes.",
          "Listez ce que la lettre de mission exclut du périmètre (par exemple la paie, les loyers, les per diem) pour ne pas les compter.",
        ],
      },
      {
        title: 'Choisissez la date de rattachement à la période',
        actions: [
          "Retenez la date du bon de commande, pas celle de la facture ni du paiement.",
          "Écrivez la règle des dossiers à cheval : un BC émis avant le début de la période et payé pendant la période est hors population ; l'inverse est dedans.",
        ],
      },
    ],
    example: {
      title: "Note de population — extrait (3 juin 2026)",
      lines: [
        "Mission : audit des achats de la base d'Uvira. Période : du 1er juin 2025 au 31 mai 2026 (12 mois).",
        "Dossier d'achat : un bon de commande avec ses pièces. Exclusions de la lettre de mission : paie, loyers, per diem, achats de la caisse inférieurs à 50 USD.",
        "Rattachement : date du bon de commande. Un BC du 28 mai 2025 payé le 6 juin 2025 est hors population ; un BC du 29 mai 2026 payé en juillet 2026 est dans la population.",
      ],
    },
    result: "Une demi-page datée qui définit la période, le dossier et la règle de rattachement. Contrôle : un collègue doit pouvoir recompter la population de son côté et trouver le même nombre.",
    pitfall: "Rattacher les dossiers à la date de paiement : un achat commandé en fin de période et payé après disparaît de votre population, et un achat ancien payé en retard y entre à tort.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: "Extraire le registre d'achats et vérifier son exhaustivité",
    intro: "Pourquoi : si 20 % des achats manquent dans l'extraction, tout votre échantillonnage repose sur du sable. Entrées : la note de population, un contact au service achats et un contact à la Finance du siège.",
    steps: [
      {
        title: "Demandez le registre par écrit, avec la liste exacte des champs",
        actions: [
          "Écrivez à Gédéon M., copie à la Finance du siège : export au format Excel de tous les bons de commande de la période.",
          "Champs exigés : n° de dossier, date du BC, fournisseur, objet, montant en USD, bailleur, procédure déclarée, demandeur, valideur.",
          "Demandez que l'export vienne du système ou, à défaut, qu'il soit remis avec le grand livre extrait par la Finance : une extraction retapée à la main est un risque en soi.",
        ],
      },
      {
        title: 'Rapprochez le total du registre au compte « achats » du grand livre',
        actions: [
          "Demandez à la Finance l'extraction du grand livre sur la même période.",
          "Calculez l'écart : (total grand livre − total registre) ÷ total grand livre.",
          "Écart toléré : moins de 1 %. Au-delà, demandez l'explication par écrit avant de continuer.",
        ],
      },
      {
        title: 'Contrôlez la numérotation et les doublons',
        actions: [
          "Triez par n° de dossier et repérez les trous de numérotation : chaque numéro manquant doit correspondre à un BC annulé, pièce d'annulation à l'appui.",
          "Ajoutez une colonne de test : =NB.SI(A:A;A2)>1 pour repérer un même numéro saisi deux fois.",
        ],
      },
    ],
    example: {
      title: 'Registre reçu le 3 juin 2026 (fil rouge)',
      lines: [
        "Registre : 64 lignes, total 451 000 USD. Grand livre, compte achats : 453 250 USD. Écart de 2 250 USD, soit 0,50 % : expliqué par des frais de transport imputés au compte achats, justificatifs obtenus.",
        "Numérotation : de UVI-001 à UVI-066. Deux numéros manquent, UVI-022 et UVI-048 : deux BC annulés, avec formulaires d'annulation signés par la Coordinatrice. Population valide : 64 dossiers.",
        "Doublons de numéro : aucun.",
      ],
    },
    result: "Un registre de 64 dossiers dont l'exhaustivité est démontrée par un écart inférieur à 1 % et deux numéros manquants expliqués par des pièces.",
    pitfall: "Accepter une extraction préparée par la personne dont vous allez auditer les dossiers, sans second point de comparaison. Le grand livre de la Finance est ce second point : sans lui, un dossier gênant peut simplement ne pas figurer dans le fichier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Répartir la population par palier, fournisseur et bailleur',
    intro: "Pourquoi : quelques minutes de tableau croisé dynamique vous montrent où se concentrent les montants, les fournisseurs et les écarts de palier. Entrée : le registre vérifié, copié dans un onglet de travail.",
    steps: [
      {
        title: 'Mettez le registre sous forme de tableau',
        actions: [
          "Conservez l'extraction brute dans un onglet « Registre_brut » verrouillé, et travaillez sur une copie.",
          "Sélectionnez une cellule de la copie, puis Insertion > Tableau (Ctrl+T) et nommez le tableau T_REG.",
        ],
      },
      {
        title: 'Ajoutez deux colonnes de palier',
        actions: [
          `Palier interne : =SI([@Montant]<1000;"Achat direct";SI([@Montant]<=10000;"RFQ";"ITB/RFP"))`,
          `Palier applicable : =SI(ET([@Bailleur]="Meridian";[@Montant]>=5000);"ITB/RFP";[@Palier])`,
          "Comptez les dossiers dont la procédure déclarée est différente du palier applicable : ce sont vos premiers candidats à l'échantillon.",
        ],
      },
      {
        title: 'Construisez trois tableaux croisés dynamiques',
        actions: [
          "TCD 1 : Palier en lignes, Nombre de dossiers et Somme du montant en valeurs.",
          "TCD 2 : Fournisseur en lignes, trié par montant décroissant, avec le pourcentage du total.",
          "TCD 3 : Bailleur en lignes, Palier applicable en colonnes, Somme du montant.",
        ],
      },
    ],
    table: {
      columns: ['Palier', 'Dossiers', 'Montant (USD)', '% du montant'],
      rows: [
        ['Achat direct (< 1 000)', '30', '21 400', '4,7 %'],
        ['RFQ (1 000 à 10 000)', '24', '128 600', '28,5 %'],
        ['ITB ou RFP (> 10 000)', '10', '301 000', '66,7 %'],
        ['Total', '64', '451 000', '100 %'],
      ],
    },
    example: {
      title: 'Ce que montrent les trois TCD à Uvira',
      lines: [
        "TCD 2 : Pharma-Lac Distribution 15 dossiers, 168 400 USD (37,3 %) ; Tanganyika Med Supply 13 dossiers, 114 100 USD ; Kivu Biomed Services 11 dossiers, 100 700 USD. À eux trois : 39 dossiers, 383 200 USD, soit 85,0 % des montants.",
        "TCD 3 : 7 dossiers financés par le Fonds Meridian, entre 5 000 et 10 000 USD (49 800 USD), sont déclarés RFQ alors que la convention exige une mise en concurrence formelle.",
      ],
    },
    result: "Une feuille d'analyse avec la répartition par palier (64 dossiers, 451 000 USD), le classement des fournisseurs et les 7 dossiers à palier contestable. Les pourcentages sont arrondis : un total de 99,9 % à l'affichage est normal.",
    tip: "Les pourcentages du tableau sont arrondis ; vérifiez que la somme des montants des paliers donne bien 451 000 USD avant de passer à l'étape suivante.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Repérer le fractionnement, puis figer et faire confirmer la population',
    intro: "Pourquoi : un besoin découpé en plusieurs commandes sous un seuil échappe à la procédure ; c'est le premier facteur de risque à documenter. Entrée : la table T_REG avec ses colonnes de palier.",
    steps: [
      {
        title: 'Comptez les RFQ juste sous le seuil supérieur',
        actions: [
          `Nombre : =NB.SI.ENS(T_REG[Montant];">=9500";T_REG[Montant];"<=9999")`,
          `Montant : =SOMME.SI.ENS(T_REG[Montant];T_REG[Montant];">=9500";T_REG[Montant];"<=9999")`,
        ],
      },
      {
        title: 'Cherchez les commandes jumelles',
        actions: [
          "Ajoutez une colonne qui additionne, pour un même fournisseur, les montants des commandes datées de plus ou moins 7 jours.",
          "Filtrez les lignes dont le cumul dépasse un seuil (1 000, 5 000 pour Meridian, 10 000) alors que chaque commande, seule, le respecte.",
          "Vérifiez que les deux commandes concernent le même besoin : relisez l'objet et la demande d'achat avant de conclure à un fractionnement.",
        ],
      },
      {
        title: 'Figez la population et faites-la confirmer par écrit',
        actions: [
          "Enregistrez l'extraction finale en PDF daté, et protégez l'onglet qui la contient.",
          "Envoyez à Gédéon M. un courriel : « La population auditée compte 64 dossiers pour 451 000 USD. Merci de confirmer sous 48 heures. »",
        ],
      },
    ],
    example: {
      title: 'Résultats du 4 juin 2026',
      lines: [
        "6 RFQ entre 9 500 et 9 999 USD, pour 58 900 USD au total, dont UVI-006 (9 870), UVI-009 (9 940), UVI-012 (9 910) et UVI-041 (9 600).",
        "Un couple de commandes jumelles : UVI-046 (4 900 USD, 3 février 2026) et UVI-047 (4 950 USD, 6 février 2026), toutes deux à Pharma-Lac Distribution, objet identique « consommables de laboratoire » : cumul de 9 850 USD, soit plus de 5 000 USD, seuil du Fonds Meridian.",
        "Confirmation de la population par Gédéon M. le 5 juin 2026, à 10 h 12.",
      ],
    },
    result: "Une population de 64 dossiers confirmée par écrit, deux facteurs de risque documentés (RFQ sous le plafond, commandes jumelles) qui alimenteront l'échantillonnage.",
    pitfall: "Conclure au fractionnement sur la seule proximité de deux dates et de deux montants. Sans le même besoin, deux commandes ne sont pas un fractionnement : vous écrirez « commandes jumelles à documenter », pas « fractionnement ».",
  },

  // ── Procédure 2 — Échantillonner par risque ──
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: "Ouvrir l'onglet « Sélection de l'échantillon » et saisir la population",
    intro: "Pourquoi : cet onglet transforme vos constats de cadrage en taille d'échantillon argumentée. Entrées : la note de population (procédure 1), le classeur grille-audit-echantillon-achats.xlsx copié dans votre dossier de mission.",
    steps: [
      {
        title: 'Copiez le classeur et ouvrez le premier onglet',
        actions: [
          "Dans l'Explorateur, copiez grille-audit-echantillon-achats.xlsx et renommez la copie : Uvira_Grille_audit_achats_2026-06.xlsx.",
          "Ouvrez la copie et cliquez sur l'onglet « Sélection de l'échantillon » : trois blocs apparaissent, 1. Paramètres, 2. Facteurs de risque, 3. Taille d'échantillon suggérée.",
        ],
      },
      {
        title: 'Repérez les cellules à saisir et celles à ne pas toucher',
        actions: [
          "À saisir : E5 (taille de la population), E6 (niveau de risque, liste déroulante), E11 à E15 (Oui ou Non, listes déroulantes).",
          "Calculées : E7 (taux de base), E16 (nombre de facteurs), E19 (taille d'échantillon), E20 (couverture). Ne les écrasez jamais : si un chiffre vous semble faux, cherchez la cause dans E5, E6 ou E11 à E15.",
        ],
      },
      {
        title: 'Saisissez E5 à partir de la note de population',
        actions: [
          "Cliquez sur la cellule E5 et saisissez le nombre confirmé par écrit à l'étape 4 de la procédure 1.",
          "Ne saisissez pas une estimation « à peu près 60 » : E5 alimente directement la taille d'échantillon.",
        ],
      },
    ],
    example: {
      title: 'Cellules saisies (fil rouge)',
      lines: [
        "E5 = 64 (population confirmée par Gédéon M. le 5 juin 2026).",
        "Les autres cellules restent vides ou à leur valeur par défaut tant que vous n'avez pas coté le contexte (étapes 2 et 3).",
      ],
    },
    result: "Le classeur copié, nommé et daté, avec E5 = 64. Contrôle : le chiffre de E5 est identique à celui de votre note de population et du courriel de confirmation.",
    pitfall: "Travailler dans le fichier modèle d'origine ou taper un chiffre par-dessus une formule. Une formule écrasée ne se voit pas : le gabarit continue d'afficher une taille d'échantillon qui ne repose plus sur rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Choisir le niveau de risque global du contexte (E6)',
    intro: "Pourquoi : le niveau de risque fixe le taux de base de l'échantillon. Le gabarit applique 10 % pour Faible, 20 % pour Modéré, 35 % pour Élevé. Entrées : le dernier rapport d'audit, le suivi de ses recommandations, l'historique des alertes, vos constats de cadrage.",
    steps: [
      {
        title: 'Posez trois questions de contexte',
        actions: [
          "Un audit récent a-t-il relevé des irrégularités sur les achats, et ses recommandations sont-elles clôturées ?",
          "Existe-t-il des alertes, plaintes ou signalements sur ce bureau ou ses fournisseurs ?",
          "Y a-t-il eu des changements récents (départ du responsable achats, nouveau bailleur, nouveau système) ?",
        ],
      },
      {
        title: 'Choisissez le niveau à partir de la règle écrite',
        actions: [
          "Faible : audit récent sans constat significatif, aucune alerte, aucun changement notable.",
          "Modéré : quelques signaux (recommandations ouvertes, changements récents) mais aucune irrégularité documentée.",
          "Élevé : irrégularité documentée, alerte crédible, fournisseur unique de fait, ou zone à historique connu.",
        ],
      },
      {
        title: 'Sélectionnez la valeur dans la liste déroulante de E6',
        actions: [
          "Cliquez sur E6 et choisissez Faible, Modéré ou Élevé : le gabarit n'accepte pas d'autre valeur.",
          "Vérifiez que E7 affiche 0,1, 0,2 ou 0,35 selon votre choix.",
        ],
      },
      {
        title: 'Notez en deux phrases pourquoi, dans votre note de méthode',
        body: "Un niveau sans justification est contestable dans les deux sens : trop bas, on dit que vous avez minimisé ; trop haut, que vous avez gonflé votre charge.",
      },
    ],
    example: {
      title: 'Niveau retenu à Uvira',
      lines: [
        "E6 = Modéré (E7 = 0,2).",
        "Justification : le rapport d'audit externe de 2025 n'a relevé aucune irrégularité sur les achats, mais deux recommandations restent ouvertes ; un nouveau bailleur (Fonds Meridian) a imposé des règles plus strictes en cours de période ; aucune alerte ni plainte enregistrée sur les achats.",
      ],
    },
    result: "E6 renseignée, E7 cohérente, et une justification de deux phrases dans la note de méthode.",
    pitfall: "Choisir Faible pour alléger la charge, ou Élevé « par prudence » : dans les deux cas le niveau n'est pas fondé sur des faits, et le bailleur ou l'auditeur externe le verra immédiatement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Cocher les cinq facteurs de risque aggravants (E11 à E15)',
    intro: "Pourquoi : chaque facteur coché Oui ajoute 3 dossiers à l'échantillon. Chaque réponse doit être appuyée par une preuve que vous pouvez montrer, pas par une impression. Entrées : l'analyse de la population (procédure 1), le dernier rapport d'audit, les alertes.",
    steps: [
      {
        title: 'Répondez Oui ou Non à chacun des cinq facteurs, ligne par ligne',
        actions: [
          "E11 — fournisseur unique ou dominant sur une part importante des dossiers.",
          "E12 — zone géographique à historique documenté d'irrégularités ou de corruption.",
          "E13 — dossiers déjà signalés incomplets ou tardifs par le service achats lui-même.",
          "E14 — montants récurrents juste sous un seuil d'autorisation (risque de fractionnement).",
          "E15 — rotation anormalement faible de fournisseurs gagnants sur les 12 derniers mois.",
        ],
      },
      {
        title: 'Notez à côté de chaque réponse la preuve qui la justifie',
        actions: [
          "Pour chaque Oui, écrivez le chiffre ou la pièce qui le démontre : part des montants, nombre de RFQ sous le seuil, référence du rapport ou du courriel.",
          "Pour chaque Non, citez la source consultée (rapport d'audit externe, registre des alertes) afin que le Non soit aussi vérifiable que le Oui.",
          "Si la preuve n'existe pas encore, écrivez « à rouvrir » et indiquez l'analyse qui la fournira.",
        ],
      },
      {
        title: 'Lisez E16 : le nombre de facteurs cochés Oui',
        body: "E16 se calcule seule avec =COUNTIF(E11:E15;\"Oui\"). Contrôlez qu'elle correspond à vos réponses.",
      },
    ],
    table: {
      columns: ['Facteur', 'Réponse', 'Preuve à Uvira'],
      rows: [
        ['E11 Fournisseur dominant', 'Oui', "3 fournisseurs = 85,0 % des montants ; Pharma-Lac Distribution seul = 37,3 %"],
        ['E12 Zone à historique', 'Non', "Aucune irrégularité dans le rapport externe 2025 ni dans le registre des alertes"],
        ['E13 Dossiers signalés', 'Non', "Aucun dossier signalé par Gédéon M. dans son courriel du 3 juin"],
        ['E14 Sous un seuil', 'Oui', "6 RFQ entre 9 500 et 9 999 USD (58 900 USD) ; 2 commandes jumelles à 4 900 et 4 950 USD"],
        ['E15 Rotation faible', 'Non (provisoire)', "Gagnants non encore analysés : à rouvrir après la procédure 5"],
      ],
    },
    result: "Cinq réponses, chacune avec sa preuve. À Uvira : E11 = Oui, E14 = Oui, les trois autres Non, donc E16 = 2.",
    tip: "Répondez honnêtement Non quand vous n'avez pas encore la preuve, et notez « à rouvrir » : rouvrir un facteur après une découverte est de la méthode ; le cocher Oui par précaution sans preuve ne l'est pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: "Lire la taille suggérée (E19, E20), l'ajuster et la justifier",
    intro: "Pourquoi : le chiffre du gabarit est un point de départ, jamais une formule à appliquer aveuglément. Entrées : E5 = 64, E6 = Modéré, E16 = 2.",
    steps: [
      {
        title: 'Lisez la formule de E19 et recalculez-la à la main',
        actions: [
          "E19 = MIN(E5 ; MAX(10 ; ARRONDI(E5 × E7 ; 0) + E16 × 3)).",
          "Calcul : 64 × 0,2 = 12,8 arrondi à 13 ; plus 2 facteurs × 3 dossiers = 6 ; total 19. Le minimum de 10 et le plafond de la population ne jouent pas ici.",
        ],
      },
      {
        title: 'Lisez E20 : la couverture de la population',
        body: "E20 = E19 ÷ E5 = 19 ÷ 64 = 29,7 %. Un échantillon par risque couvre souvent 25 à 35 % des dossiers, bien plus des montants.",
      },
      {
        title: 'Décidez : conserver, augmenter, jamais réduire sans motif écrit',
        actions: [
          "Augmentez si un élément qualitatif le justifie : rumeur documentée, alerte interne, historique de constats non résolus.",
          "Ne descendez pas sous la taille suggérée : la note du gabarit demande de motiver tout choix dans le rapport.",
        ],
      },
      {
        title: 'Rédigez la justification dans la note de méthode',
        body: "Écrivez la taille retenue, son calcul, les facteurs et la décision d'ajustement. Si vous souhaitez la porter dans le classeur, utilisez des cellules libres sous la note du gabarit (A26 et suivantes).",
      },
    ],
    example: {
      title: 'Justification rédigée (extrait)',
      lines: [
        "« Population : 64 dossiers. Niveau de risque Modéré (taux 20 %), deux facteurs aggravants (fournisseur dominant ; montants sous le plafond de 10 000 USD). Taille indicative : 13 + 6 = 19 dossiers, soit 29,7 % des dossiers. Aucun élément qualitatif n'impose de l'augmenter ; nous retenons 19. »",
      ],
    },
    result: "E19 = 19 et E20 = 29,7 %, recalculés à la main, avec une justification d'un paragraphe prête à reprendre dans le rapport.",
    pitfall: "Écrire dans le rapport « échantillon de 19 dossiers » sans dire pourquoi 19. Un lecteur extérieur doit pouvoir refaire votre calcul à partir de la note.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Sélectionner les dossiers à tester avec une grille de score de risque',
    intro: "Pourquoi : la taille ne dit pas quels dossiers : le choix doit suivre des critères explicites, écrits, reproductibles. Entrées : T_REG (procédure 1), la liste des dossiers signalés, les facteurs de l'étape 3.",
    steps: [
      {
        title: 'Ajoutez quatre colonnes de score à votre copie du registre',
        actions: [
          "Proche d'un seuil : 1 point si le montant est à moins de 5 % de 1 000, de 5 000 (Meridian) ou de 10 000 USD.",
          "Fournisseur récurrent : 1 point si le fournisseur apparaît dans 5 dossiers ou plus.",
          "Signalé incomplet : 1 point si le service achats ou la Finance a signalé le dossier.",
          "Exposé bailleur : 1 point si le financement impose une règle plus stricte que la procédure interne.",
        ],
      },
      {
        title: 'Calculez le total et triez par ordre décroissant',
        actions: [
          "Dans une colonne Total, additionnez les quatre points de chaque dossier (de 0 à 4) avec une formule de somme.",
          "Triez toute la table du plus grand total au plus petit, en gardant les lignes entières ensemble.",
          "Départagez les ex æquo par le montant le plus élevé, et notez ce critère dans votre note de méthode.",
        ],
      },
      {
        title: 'Retenez les dossiers les mieux notés, puis stratifiez',
        actions: [
          "Prenez les dossiers du haut du classement jusqu'à atteindre la taille moins 3.",
          "Contrôlez que chaque palier (achat direct, RFQ, ITB ou RFP) et chaque trimestre sont représentés ; sinon remplacez les derniers dossiers retenus.",
          "Ajoutez 3 dossiers de contrôle tirés sans critère parmi les dossiers à 0 point : ils testent la qualité de votre score.",
        ],
      },
      {
        title: 'Figez la liste et gardez la trace du score',
        body: "Enregistrez le classement complet, pas seulement les 19 dossiers retenus : c'est lui qui prouve que le choix n'était pas arbitraire.",
      },
    ],
    table: {
      columns: ['Dossier', 'Seuil', 'Récurrent', 'Signalé', 'Bailleur', 'Total'],
      rows: [
        ['UVI-029 (5 480 USD, Meridian)', '1', '1', '0', '1', '3'],
        ['UVI-047 (4 950 USD, jumeau de UVI-046)', '1', '1', '0', '1', '3'],
        ['UVI-006 (9 870 USD)', '1', '1', '0', '0', '2'],
        ['UVI-044 (14 600 USD)', '0', '1', '0', '0', '1'],
        ['UVI-052 (880 USD, achat direct)', '0', '0', '0', '0', '0'],
      ],
    },
    result: "Une liste de 19 dossiers : 16 retenus par le score, 3 de contrôle (UVI-017, UVI-023, UVI-052). Répartition : 6 ITB ou RFP, 12 RFQ, 1 achat direct ; 207 010 USD, soit 45,9 % des montants.",
    tip: "Gardez dans le dossier le classement des 64 dossiers avec leur score : si un fournisseur conteste le choix de ses dossiers, vous montrez le critère, pas votre intuition.",
  },

  // ── Procédure 3 — Remplir la checklist par dossier ──
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 6',
    title: "Préparer l'onglet « Checklist par dossier » et les dossiers physiques",
    intro: "Pourquoi : une grille remplie à l'aveugle est sans valeur ; chaque ligne doit s'appuyer sur une pièce ouverte et lue. Entrées : la liste des 19 dossiers, accès aux dossiers papier ou scannés sur place, le classeur de la procédure 2.",
    steps: [
      {
        title: "Ouvrez l'onglet et repérez ses colonnes",
        actions: [
          "A : N° dossier — B : Fournisseur — C : Montant (USD).",
          "D : Seuil respecté ? — E : Procédure correcte suivie ? — F : CBA complète ? — G : PV / quorum signé ? (Oui, Non ou Partiel dans les quatre).",
          "H : Score conformité, calculé — I : Commentaire / pièce manquante.",
        ],
      },
      {
        title: 'Remplacez les trois lignes d\'exemple du modèle',
        actions: [
          "Les lignes 5, 6 et 7 contiennent des exemples (ACH-2025-014, ACH-2025-019, ACH-2025-027). Sélectionnez A5:G7 et supprimez leur contenu, sans toucher à la colonne H.",
          "Saisissez vos dossiers à partir de la ligne 5 : n° dossier en A, fournisseur en B, montant payé en C.",
        ],
      },
      {
        title: 'Ajoutez une ligne si votre échantillon dépasse 18 dossiers',
        actions: [
          "Le gabarit offre 18 lignes (lignes 5 à 22). Pour un 19e dossier : clic droit sur le numéro de la ligne 22, Insérer, puis recopiez la formule de la colonne H et les listes déroulantes de D à G depuis la ligne du dessus.",
          "Contrôlez que la cellule du taux global H24 (devenue H25) couvre bien la nouvelle ligne : la formule doit citer la dernière ligne de dossiers.",
        ],
      },
      {
        title: 'Préparez les dossiers : un dossier ouvert à la fois, pièces sur la table',
        body: "Pour chaque dossier, sortez les dix pièces de la chaîne (DA, consultation, offres, CBA, PV, PO, GRN, facture, rapprochement, paiement) et notez leurs dates sur une ligne.",
      },
    ],
    example: {
      title: 'Les premières lignes saisies (fil rouge)',
      lines: [
        "Ligne 5 : UVI-004 — Ruzizi Carburants — 24 800.",
        "Ligne 6 : UVI-006 — Pharma-Lac Distribution — 9 870.",
        "Ligne 7 : UVI-009 — Tanganyika Med Supply — 9 940.",
        "… jusqu'à la ligne 23 : UVI-060 — Kivu Biomed Services — 4 720 (19 dossiers, une ligne insérée).",
      ],
    },
    result: "Un onglet à 19 lignes avec colonnes A à C remplies et colonne H toujours calculée. Contrôle : en tapant Oui dans D à G d'une ligne, H affiche 100 %.",
    pitfall: "Saisir en C le montant du bon de commande au lieu du montant réellement payé : c'est l'écart entre les deux que vous cherchez à la question « seuil respecté ? ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 6',
    title: 'Colonne D — « Seuil respecté ? » : montant payé et palier applicable',
    intro: "Pourquoi : le palier détermine toute la procédure qui suit ; un palier faux condamne le reste du dossier. La question posée : le seuil déclaré correspond-il au montant réellement payé ? Entrées : le BC, la facture, le justificatif de paiement, la convention du bailleur.",
    steps: [
      {
        title: 'Relevez trois montants dans le dossier',
        actions: [
          "Le montant du bon de commande, le montant de la facture, le montant du paiement.",
          "Cherchez tout avenant ou bon complémentaire sur le même besoin et additionnez-les.",
        ],
      },
      {
        title: 'Déterminez le palier applicable au montant réellement payé',
        actions: [
          "Appliquez la grille interne : moins de 1 000 USD, 1 000 à 10 000, plus de 10 000.",
          "Appliquez ensuite la convention du bailleur : le Fonds Meridian impose la procédure formelle dès 5 000 USD. Retenez le palier le plus strict.",
        ],
      },
      {
        title: 'Comparez au palier déclaré dans le dossier et répondez',
        actions: [
          "Oui : le palier déclaré est le palier applicable, montants cohérents.",
          "Partiel : palier correct mais pièce incomplète, par exemple écart de montant documenté mais non approuvé.",
          "Non : palier déclaré inférieur au palier applicable, ou montant payé hors palier.",
        ],
      },
      {
        title: 'Écrivez en colonne I la pièce et le montant en cause',
        body: "Toute réponse Non ou Partiel est commentée avec le montant, la pièce et sa date.",
      },
    ],
    table: {
      columns: ['Dossier', 'BC / payé (USD)', 'Palier déclaré', 'Palier applicable', 'D'],
      rows: [
        ['UVI-006', '9 870 / 9 870', 'RFQ', 'RFQ', 'Oui'],
        ['UVI-029 (Meridian)', '5 480 / 5 480', 'RFQ', 'ITB/RFP (convention art. 9)', 'Non'],
        ['UVI-041', '9 600 / 10 350', 'RFQ', 'ITB/RFP (payé > 10 000)', 'Non'],
        ['UVI-047 (jumeau de UVI-046)', '4 950 / 4 950', 'RFQ', 'ITB/RFP (besoin cumulé 9 850, Meridian)', 'Non'],
      ],
    },
    example: {
      title: 'Commentaire saisi en colonne I (UVI-041)',
      lines: [
        "« Facture n° 0412 du 20/01/2026 : 10 350 USD au lieu des 9 600 USD du BC ; avenant verbal de 750 USD sans pièce signée. Palier ITB/RFP applicable au montant payé. »",
      ],
    },
    result: "Colonne D renseignée pour les 19 dossiers, avec un commentaire précis pour chaque Non ou Partiel. À Uvira : 15 Oui et 4 Non.",
    pitfall: "Répondre Oui parce que « le BC est bien dans la tranche RFQ ». Le BC n'est pas le montant payé : une facture supérieure fait changer de palier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 6',
    title: 'Colonne E — « Procédure correcte suivie ? » : la procédure du palier applicable',
    intro: "Pourquoi : un dossier au bon palier peut avoir suivi une mauvaise procédure (RFQ à la place d'un appel d'offres). La question : la procédure suivie (achat direct, RFQ, RFP ou ITB) correspond-elle bien à ce seuil ? Entrées : le dossier de consultation, la convention, la procédure achats.",
    steps: [
      {
        title: 'Relevez la procédure réellement suivie',
        actions: [
          "Cherchez le dossier de consultation (lettre RFQ, avis d'appel d'offres, termes de référence) et sa date d'envoi.",
          "Comptez les fournisseurs réellement consultés par écrit, pas les noms cités dans la CBA.",
        ],
      },
      {
        title: 'Comparez à la procédure exigée par le palier applicable',
        actions: [
          "Achat direct : une facture proforma et la validation du Responsable logistique suffisent.",
          "RFQ : au moins trois fournisseurs consultés par écrit.",
          "ITB ou RFP : appel d'offres formel, délai de remise des offres, ouverture des plis contradictoire.",
        ],
      },
      {
        title: 'Répondez Oui, Partiel ou Non et commentez',
        actions: [
          "Oui : la procédure du palier applicable a été suivie en entier.",
          "Partiel : procédure correcte mais une étape incomplète (délai de remise trop court, par exemple).",
          "Non : procédure inférieure à celle du palier applicable.",
        ],
      },
    ],
    example: {
      title: 'Cas fil rouge : un RFQ à la place d\'un appel d\'offres',
      lines: [
        "UVI-029 (5 480 USD, financement Meridian) : trois devis demandés par courriel le 14/11/2025, aucun avis d'appel d'offres, aucune ouverture des plis. Procédure suivie : RFQ. Procédure exigée : ITB, article 9 de la convention. E = Non.",
        "UVI-041 (9 600 USD, payé 10 350) : RFQ au bon moment, mais l'augmentation du montant n'a pas rouvert la consultation. E = Partiel.",
      ],
    },
    result: "Colonne E renseignée : 15 Oui, 1 Partiel (UVI-041), 3 Non (UVI-029, UVI-031, UVI-047) pour les 19 dossiers.",
    tip: "Lorsque le palier de la colonne D est déjà Non, la colonne E se juge par rapport au palier applicable, pas au palier déclaré : c'est ce qui rend les deux colonnes complémentaires et non redondantes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 6',
    title: 'Colonne F — « CBA complète ? » : offres, dates, signatures, cohérence',
    intro: "Pourquoi : la CBA est la pièce qui prouve que la comparaison a eu lieu avant le choix. Question posée : est-elle complète et cohérente avec le nombre d'offres exigé ? Entrées : la CBA du dossier, les offres reçues, le BC.",
    steps: [
      {
        title: 'Vérifiez le nombre et la présence matérielle des offres',
        actions: [
          "Comptez les offres exigées (3 pour une RFQ) et les offres réellement archivées avec leur date de réception.",
          "Si un fournisseur a décliné, cherchez la trace écrite (courriel de refus). Une mention « a décliné » sans pièce ne compte pas.",
        ],
      },
      {
        title: "Vérifiez l'ordre des dates",
        actions: [
          "Date de réception des offres, puis date de la CBA, puis date du BC : la CBA doit précéder le BC.",
          "Une CBA datée après la commande est un Non, même si tout le reste est irréprochable.",
        ],
      },
      {
        title: 'Vérifiez signatures, calculs et cohérence du choix',
        actions: [
          "Deux signatures : celle qui établit, celle qui valide, distinctes du demandeur.",
          "Refaites les totaux de la CBA et vérifiez que le fournisseur retenu est le moins cher conforme, ou que l'écart est justifié par écrit.",
        ],
      },
      {
        title: 'Répondez et commentez la pièce manquante',
        actions: [
          "Saisissez en colonne F : Oui si offres, dates, signatures et choix sont corrects ; Partiel si une pièce manque mais que la comparaison a eu lieu ; Non si la CBA suit la commande ou n'existe pas.",
          "Pour chaque Partiel ou Non, écrivez en colonne I la pièce manquante ou l'écart de dates, avec les deux dates concernées.",
        ],
      },
    ],
    table: {
      columns: ['Dossier', 'Constat sur la CBA', 'F'],
      rows: [
        ['UVI-006', '3 offres, CBA du 28/07/2025, BC du 30/07/2025, deux signatures', 'Oui'],
        ['UVI-026', "2 offres sur 3 ; le 3e fournisseur « a décliné » sans courriel retrouvé", 'Partiel'],
        ['UVI-034', 'CBA du 11/12/2025, BC du 08/12/2025 : CBA postérieure de 3 jours', 'Non'],
        ['UVI-038', 'CBA du 20/01/2026, BC du 14/01/2026 : CBA postérieure de 6 jours', 'Non'],
      ],
    },
    result: "Colonne F renseignée : 15 Oui, 2 Partiel (UVI-026 et UVI-060), 2 Non (UVI-034 et UVI-038), chaque réponse défavorable commentée avec la date ou la pièce.",
    pitfall: "Cocher Oui parce que la CBA existe. Une CBA signée après la commande existe, mais elle n'a pas servi à choisir : elle sert à régulariser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 6',
    title: 'Colonne G — « PV / quorum signé ? » : la décision collégiale',
    intro: "Pourquoi : pour un marché formel, c'est le PV du CPC qui prouve que la décision n'est pas celle d'une seule personne. Question posée : le PV du CPC, si applicable, est-il signé par un quorum valide ? Entrées : le PV, la composition du CPC, la procédure achats.",
    steps: [
      {
        title: 'Déterminez si un CPC était obligatoire',
        actions: [
          "Il l'est pour tout ITB ou RFP : plus de 10 000 USD, ou dès 5 000 USD sous financement Meridian.",
          "Il ne l'est pas pour un achat direct ou une RFQ sans exigence du bailleur.",
        ],
      },
      {
        title: 'Si le CPC est obligatoire, contrôlez le PV',
        actions: [
          "Date du PV antérieure au BC.",
          "Quorum : 3 membres sur 5 au moins, dont un représentant de la Finance et une personne non demandeuse.",
          "Signatures manuscrites de tous les présents, et déclaration d'absence de conflit d'intérêt.",
        ],
      },
      {
        title: 'Si le CPC est sans objet, répondez Oui et écrivez-le',
        body: "La formule du score traite une cellule vide comme un zéro. Saisissez Oui et notez « sans objet — RFQ » en colonne I : sinon vous baissez le score d'un dossier conforme.",
      },
      {
        title: 'Répondez Oui, Partiel ou Non pour les autres cas',
        actions: [
          "Oui : PV signé par un quorum valide, daté avant le BC.",
          "Partiel : PV existant mais incomplet (quorum atteint mais une signature manque, par exemple).",
          "Non : aucun PV alors que le CPC était obligatoire, ou PV postérieur à la commande.",
        ],
      },
    ],
    example: {
      title: 'Exemples fil rouge',
      lines: [
        "UVI-044 (14 600 USD, maintenance biomédicale) : PV du 03/02/2026 signé par 2 membres alors que 3 sont requis. G = Partiel.",
        "UVI-029 (5 480 USD, Meridian) : aucun CPC convoqué alors que la convention l'exigeait. G = Non.",
        "UVI-006 (9 870 USD, RFQ sous financement ECHO) : CPC sans objet. G = Oui, commentaire « sans objet — RFQ ».",
      ],
    },
    result: "Colonne G renseignée : 15 Oui, 1 Partiel, 3 Non. Les dossiers sans objet portent un Oui et un commentaire, jamais une cellule vide.",
    pitfall: "Laisser vide la colonne G d'un dossier pour lequel il n'y a pas de CPC : le score de ce dossier tombe à 75 % sans raison.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 6 sur 6',
    title: 'Lire le score, commenter chaque réserve et lire le taux global',
    intro: "Pourquoi : le score résume un dossier, le taux global résume l'échantillon, mais seuls les commentaires permettent de défendre un constat. Entrées : colonnes D à G remplies, colonne I commentée.",
    steps: [
      {
        title: 'Comprenez le calcul de la colonne H',
        actions: [
          "Chaque réponse vaut 1 pour Oui, 0,5 pour Partiel, 0 pour Non ; le score est la somme divisée par 4.",
          "Une ligne sans aucune réponse affiche une cellule vide : elle n'entre pas dans la moyenne.",
        ],
      },
      {
        title: 'Relisez la colonne I ligne par ligne',
        actions: [
          "Chaque Non ou Partiel porte la pièce manquante précise, sa date et, si possible, sa référence dans le dossier.",
          "Interdit : « CBA non conforme » seul ; attendu : « CBA datée du 11/12/2025, postérieure au BC du 08/12/2025 ».",
        ],
      },
      {
        title: 'Lisez le taux global et ventilez-le par question',
        actions: [
          "La cellule du taux global (H24 dans le gabarit d'origine, H25 après l'insertion de la 19e ligne) calcule la moyenne des scores de toutes les lignes.",
          "Dans une feuille de travail à côté, comptez les Oui, Partiel et Non de chaque colonne D à G, avec =NB.SI(D5:D23;\"Non\").",
        ],
      },
      {
        title: 'Rappelez ce que ce taux mesure et ne mesure pas',
        body: "Il mesure la conformité procédurale de chaque dossier pris seul. Il ne dit rien d'une entente entre fournisseurs.",
      },
    ],
    table: {
      columns: ['Question', 'Oui', 'Partiel', 'Non', 'Taux'],
      rows: [
        ['D — Seuil respecté', '15', '0', '4', '78,9 %'],
        ['E — Procédure correcte', '15', '1', '3', '81,6 %'],
        ['F — CBA complète', '15', '2', '2', '84,2 %'],
        ['G — PV / quorum signé', '15', '1', '3', '81,6 %'],
      ],
    },
    result: "Taux de conformité global de l'échantillon d'Uvira : 81,6 %. 10 dossiers sur 19 sont parfaits ; les non-conformités se concentrent sur trois dossiers Meridian ou jumeaux (score 25 %).",
    tip: "Faites un contrôle de plausibilité : la moyenne des quatre taux par question (62 ÷ 76) doit retomber sur le taux global, 81,6 %. Un écart signale une ligne mal recopiée.",
  },

  // ── Procédure 4 — Croiser achats et inventaire ──
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Isoler les dossiers de biens physiques et préparer les pièces de stock',
    intro: "Pourquoi : un achat payé qui n'entre jamais en stock est l'un des signaux les plus forts de l'audit de supply chain, indépendamment du score de conformité. Entrées : la liste des 19 dossiers de l'échantillon, accès au magasin et à son système de fiches de stock.",
    steps: [
      {
        title: 'Séparez les biens des services dans votre échantillon',
        actions: [
          "Ajoutez une colonne « Nature » (Bien, Service, Travaux) dans votre copie de la liste des dossiers.",
          "Gardez seuls les dossiers de biens physiques : un service ou des travaux n'ont pas d'entrée en stock.",
        ],
      },
      {
        title: 'Demandez les pièces de stock pour ces dossiers',
        actions: [
          "Les GRN (bons de réception) de la période, y compris ceux établis hors magasin central.",
          "Les fiches de stock ou l'extraction des entrées du système, avec les dates et les quantités.",
        ],
      },
      {
        title: 'Préparez un tableau de rapprochement vide',
        actions: [
          "Colonnes : dossier, bien, quantité commandée (PO), quantité reçue (GRN), quantité facturée, entrée en stock (oui ou non), dates, anomalie.",
        ],
      },
    ],
    example: {
      title: 'Tri des 19 dossiers (fil rouge)',
      lines: [
        "3 dossiers de services ou travaux : UVI-017 (réhabilitation), UVI-044 (maintenance biomédicale), UVI-060 (maintenance préventive). Hors rapprochement.",
        "16 dossiers de biens : UVI-004, 006, 009, 012, 015, 020, 023, 026, 029, 031, 034, 038, 041, 047, 052, 056. GRN demandés à Clarisse N. le 6 juillet 2026.",
      ],
    },
    result: "Une liste de 16 dossiers de biens et un tableau de rapprochement prêt à remplir.",
    pitfall: "Oublier que le carburant est un bien : une entrée en cuve se prouve par le registre de carburant, comme une entrée en magasin se prouve par le GRN.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Rapprocher commande, réception et facture pour chaque dossier',
    intro: "Pourquoi : le rapprochement en trois points est le point de contrôle où un achat fictif est le plus souvent détecté. Entrées : pour chaque dossier, le PO, le GRN et la facture.",
    steps: [
      {
        title: 'Alignez les trois quantités et les trois prix',
        actions: [
          "Quantité du PO, quantité du GRN, quantité facturée ; prix unitaire du PO et prix unitaire facturé.",
          "Calculez les écarts : quantité facturée moins quantité reçue, et le montant correspondant.",
        ],
      },
      {
        title: 'Vérifiez la cohérence des dates',
        actions: [
          "Date du PO < date du GRN < date de la facture < date du paiement.",
          "Un GRN daté avant le PO, ou postérieur au paiement, est une anomalie de niveau 1 à expliquer.",
        ],
      },
      {
        title: 'Vérifiez le fournisseur et le signataire du GRN',
        actions: [
          "Le fournisseur du GRN est celui du PO et de la facture.",
          "Le GRN est signé par le magasinier, jamais par le demandeur de l'achat.",
        ],
      },
    ],
    table: {
      columns: ['Dossier', 'Commandé', 'Reçu (GRN)', 'Facturé', 'Anomalie'],
      rows: [
        ['UVI-006', '120 cartons', '120 (GRN du 04/08)', '120', 'Aucune'],
        ['UVI-020', "30 lits d'hospitalisation", '30', '30', 'Aucune'],
        ['UVI-026', '80 boîtes de ceftriaxone', '76 (GRN du 21/10)', '80', '4 boîtes facturées non reçues (152 USD)'],
        ['UVI-038', '24 tensiomètres, 40 oxymètres', 'Aucun GRN', '64 appareils (8 300 USD)', 'Payé sans réception visible'],
      ],
    },
    result: "Un tableau de rapprochement de 16 dossiers : 14 sans anomalie, 1 avec un écart de quantité (UVI-026), 1 sans GRN (UVI-038).",
    pitfall: "Accepter un GRN signé par le demandeur de l'achat : celui qui commande ne doit jamais attester la réception, sinon le rapprochement ne prouve rien.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: "Retrouver l'entrée en stock correspondante dans la fiche de stock ou le système",
    intro: "Pourquoi : un GRN peut exister sans que le bien soit réellement entré dans le circuit qu'il devait approvisionner. Entrées : la fiche de stock ou l'extraction des entrées, le tableau de rapprochement.",
    steps: [
      {
        title: 'Cherchez chaque dossier dans les entrées de stock',
        actions: [
          "Ouvrez la fiche de la référence concernée et cherchez une entrée du même jour que le GRN, de la même quantité, avec le n° de GRN en référence.",
          "Notez la date et la quantité de l'entrée, ou l'absence d'entrée.",
        ],
      },
      {
        title: 'Contrôlez la cohérence entrée en stock et réception',
        actions: [
          "Date d'entrée proche de la date du GRN (quelques jours, pas plusieurs semaines).",
          "Quantité d'entrée égale à la quantité du GRN.",
        ],
      },
      {
        title: "Ajoutez une vérification physique pour les dossiers sensibles",
        actions: [
          "Prenez un échantillon d'au moins 3 références de biens à forte valeur ou revente et vérifiez leur présence physique, numéros de série ou lots à l'appui.",
        ],
      },
    ],
    example: {
      title: 'Résultats du 8 juillet 2026',
      lines: [
        "14 dossiers : entrée en stock retrouvée, quantité et date cohérentes avec le GRN.",
        "UVI-026 : entrée de 76 boîtes de ceftriaxone le 21/10/2025 ; les 4 boîtes facturées en plus n'apparaissent nulle part.",
        "UVI-038 : aucune entrée de tensiomètre ni d'oxymètre dans les fiches de stock entre le 14/01/2026 et le 30/06/2026.",
      ],
    },
    result: "Pour chaque dossier de bien : entrée retrouvée avec date et quantité, ou anomalie documentée.",
    tip: "Pour une vérification physique, demandez à voir le bien accompagné d'une pièce portant son numéro de série ou son lot : un bien montré sans pièce peut venir d'un autre achat.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Traiter les anomalies : recherche active, qualification, signal prioritaire',
    intro: "Pourquoi : un dossier sans entrée en stock n'est pas une conclusion mais un point de départ. Votre rôle est de chercher activement l'explication avant de qualifier. Entrées : les anomalies du rapprochement.",
    steps: [
      {
        title: 'Menez une recherche active documentée sous 48 heures',
        actions: [
          "Interrogez le demandeur, le magasinier et le Responsable logistique, séparément, avec les mêmes questions.",
          "Cherchez les livraisons directes aux sites (centres de santé), les bordereaux signés, les transferts non saisis.",
          "Notez chaque démarche, avec date et personne interrogée.",
        ],
      },
      {
        title: 'Qualifiez le résultat',
        actions: [
          "Résolu : un document prouve la réception ou la destination du bien. Niveau 1 si le défaut est un classement.",
          "Non résolu : aucun document, ou documents incomplets. Signal prioritaire, niveau 2.",
        ],
      },
      {
        title: "Reportez dans la checklist et la liste des anomalies prioritaires",
        actions: [
          "Ajoutez en colonne I du dossier : « sans entrée en stock — voir note d'anomalie ».",
          "Ouvrez une note d'anomalie datée : fait, recherche menée, pièces obtenues, pièces manquantes.",
        ],
      },
    ],
    example: {
      title: 'UVI-038 — recherche menée du 8 au 10 juillet 2026',
      lines: [
        "Gédéon M. : « Livraison faite directement aux centres de santé sur instruction de la Coordinatrice ; bordereaux signés. »",
        "Bordereaux retrouvés pour 4 centres sur 6. Visite des centres de Sange et de Kiliba : 16 tensiomètres et 28 oxymètres vus, numéros de série relevés et rapprochés de la facture.",
        "Reste non justifié : 8 tensiomètres (760 USD) et 12 oxymètres (1 806 USD), soit 2 566 USD. Qualification : signal prioritaire de niveau 2, non résolu.",
      ],
    },
    result: "Une note d'anomalie datée qui sépare ce qui est prouvé (16 + 28 appareils) de ce qui ne l'est pas (8 + 12), avec la liste des documents encore demandés.",
    pitfall: "Écrire « détournement » dans la note d'anomalie. Vous écrivez « 8 tensiomètres et 12 oxymètres non retrouvés et non justifiés à la date du ... » : le fait, rien que le fait.",
  },

  // ── Procédure 5 — Lecture transversale : détecter la collusion ──
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Construire la base de toutes les mises en concurrence de la période',
    intro: "Pourquoi : les signaux de collusion ne se voient presque jamais sur un dossier isolé de l'échantillon ; ils se voient en comparant fournisseurs gagnants et prix sur toute la population. C'est l'étape que les auditeurs pressés sautent le plus souvent. Entrées : T_REG (procédure 1), les CBA de tous les dossiers RFQ et ITB ou RFP, échantillonnés ou non.",
    steps: [
      {
        title: 'Isolez les mises en concurrence dans le registre',
        actions: [
          "Filtrez T_REG sur Palier = RFQ ou ITB/RFP : vous obtenez 34 procédures (24 RFQ et 10 ITB ou RFP).",
          "Triez-les par date de bon de commande, de la plus ancienne à la plus récente.",
        ],
      },
      {
        title: 'Créez un tableau T_AO avec une ligne par OFFRE reçue',
        actions: [
          "Colonnes : n° de dossier, date, palier, objet, soumissionnaire, montant de l'offre en USD, rang, statut (Gagnant ou Perdant).",
          "Recopiez chaque offre depuis la CBA du dossier : une procédure à 3 offres donne 3 lignes.",
        ],
      },
      {
        title: 'Contrôlez la saisie par un second regard',
        actions: [
          "Faites relire 10 % des lignes par Fatou S. contre les CBA d'origine.",
          "Vérifiez que chaque procédure a bien un seul Gagnant.",
        ],
      },
    ],
    example: {
      title: 'Extrait de T_AO (fil rouge)',
      lines: [
        "UVI-006 | 28/07/2025 | RFQ | Consommables | Pharma-Lac Distribution | 9 870 | 1 | Gagnant",
        "UVI-006 | 28/07/2025 | RFQ | Consommables | Tanganyika Med Supply | 9 940 | 2 | Perdant",
        "UVI-006 | 28/07/2025 | RFQ | Consommables | Kivu Biomed Services | 9 960 | 3 | Perdant",
        "Total de la base : 34 procédures, 112 offres saisies, 7 soumissionnaires différents.",
      ],
    },
    result: "Une table T_AO de 112 lignes, une par offre, utilisable en tableau croisé dynamique, relue par échantillon.",
    pitfall: "Ne saisir que le gagnant de chaque procédure : vous ne pourrez ni comparer les prix des perdants ni voir qui soumissionne avec qui.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Tableau croisé dynamique : qui gagne, quand, à quel rythme',
    intro: "Pourquoi : un tableau croisé (fournisseur en lignes, période en colonnes, statut en filtre) est souvent l'outil le plus rapide pour voir une alternance sur douze mois, avant d'ouvrir un seul dossier physique. Entrée : T_AO.",
    steps: [
      {
        title: 'Insérez le tableau croisé dynamique',
        actions: [
          "Cliquez dans T_AO, puis Insertion > Tableau croisé dynamique, dans une nouvelle feuille « TCD_gagnants ».",
          "Lignes : Soumissionnaire. Colonnes : Trimestre (groupez la date par trimestres ou par mois). Valeurs : Nombre de n° de dossier. Filtre : Statut = Gagnant.",
        ],
      },
      {
        title: 'Lisez la répartition des victoires',
        actions: [
          "Repérez le nombre de gagnants différents et la part cumulée des trois premiers.",
          "Regardez la régularité : chaque trimestre, les mêmes noms sont-ils présents avec des nombres proches ?",
        ],
      },
      {
        title: "Visualisez l'ordre exact des gagnants",
        actions: [
          "Dans T_AO, filtrez Statut = Gagnant et lisez la colonne Soumissionnaire de haut en bas, dans l'ordre chronologique.",
          "Cherchez des séquences répétées du type A, B, C, A, B, C.",
        ],
      },
    ],
    table: {
      columns: ['Période', 'Pharma-Lac', 'Tanganyika', 'Kivu Biomed', 'Autres', 'Total'],
      rows: [
        ['Juin – août 2025', '2', '3', '2', '1', '8'],
        ['Sept. – nov. 2025', '3', '2', '3', '1', '9'],
        ['Déc. 2025 – févr. 2026', '3', '2', '3', '1', '9'],
        ['Mars – mai 2026', '3', '3', '2', '0', '8'],
        ['Total', '11', '10', '10', '3', '34'],
      ],
    },
    result: "Les trois mêmes fournisseurs remportent 31 des 34 mises en concurrence (91 %), à un rythme quasi constant d'un trimestre à l'autre ; les 3 autres victoires sont partagées entre Ruzizi Carburants (2) et Imbo Services (1).",
    tip: "Ajoutez une seconde valeur au tableau croisé : le nombre d'offres soumises par chaque fournisseur. Trois fournisseurs présents ensemble sur presque toutes les procédures, qui ne gagnent jamais deux fois de suite, est exactement le profil d'une rotation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Tester les prix : offres identiques ou anormalement proches',
    intro: "Pourquoi : deux fournisseurs qui calculent leurs coûts séparément n'aboutissent presque jamais au même prix. Entrée : T_AO, ou un tableau large avec une ligne par procédure et une colonne par soumissionnaire.",
    steps: [
      {
        title: "Calculez l'écart entre la première et la deuxième offre de chaque procédure",
        actions: [
          `Dans le tableau large : =(PETITE.VALEUR(C2:E2;2)-MIN(C2:E2))/MIN(C2:E2)`,
          "Formatez la colonne en pourcentage, puis triez du plus petit au plus grand écart.",
        ],
      },
      {
        title: 'Repérez les prix strictement identiques',
        actions: [
          `Dans T_AO, ajoutez une colonne : =SI(NB.SI.ENS([Montant];[@Montant];[Soumissionnaire];"<>"&[@Soumissionnaire])>0;"IDENTIQUE";"")`,
          "Vérifiez aussi qu'un fournisseur n'a pas soumis, perdant, un prix identique à celui qu'il avait proposé gagnant sur un lot comparable quelques mois plus tôt.",
        ],
      },
      {
        title: 'Comparez avec le niveau normal du marché',
        actions: [
          "Calculez l'écart médian sur l'ensemble des procédures : c'est votre ligne de base.",
          "Un écart très inférieur à la médiane, répété, est le signal ; un écart faible isolé ne l'est pas.",
        ],
      },
    ],
    table: {
      columns: ['Dossier', 'Offre gagnante', '2e offre', '3e offre', 'Écart 1re-2e'],
      rows: [
        ['UVI-006', 'Pharma-Lac 9 870', 'Tanganyika 9 940', 'Kivu 9 960', '0,71 %'],
        ['UVI-009', 'Tanganyika 9 940', 'Pharma-Lac 9 995', 'Kivu 10 020', '0,55 %'],
        ['UVI-012', 'Kivu 9 910', 'Pharma-Lac 9 980', 'Tanganyika 9 985', '0,71 %'],
        ['UVI-034', 'Pharma-Lac 7 450', 'Kivu 7 490', 'Tanganyika 7 520', '0,54 %'],
        ['UVI-038', 'Tanganyika 8 300', 'Pharma-Lac 8 345', 'Kivu 8 390', '0,54 %'],
      ],
    },
    result: "7 procédures sur 34 (21 %) ont un écart de moins de 1 % entre la 1re et la 2e offre, contre un écart médian de 9,6 % sur les 27 autres ; aucun prix strictement identique entre fournisseurs. Les cinq premières procédures sont dans le tableau.",
    pitfall: "Chercher uniquement des prix identiques au centime : un groupe organisé évite précisément ce signal grossier, et s'en tient à des écarts de quelques dizaines de dollars.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Comparer les coordonnées des fournisseurs « concurrents »',
    intro: "Pourquoi : c'est l'indicateur le plus fiable et le plus facile à vérifier : deux entreprises réellement concurrentes n'ont aucune raison de partager leur ligne téléphonique ou leur siège. Entrées : le fichier fournisseurs, les en-têtes des offres, les factures, les coordonnées bancaires de paiement.",
    steps: [
      {
        title: 'Dressez un tableau des coordonnées de chaque soumissionnaire récurrent',
        actions: [
          "Colonnes : raison sociale, téléphone, adresse, courriel de contact, signataire de l'offre, compte bancaire de paiement.",
          "Relevez chaque information à deux sources différentes (fiche fournisseur et en-tête d'offre), pas à une seule.",
        ],
      },
      {
        title: 'Cherchez les doublons',
        actions: [
          "Ajoutez une colonne : =NB.SI($C$2:$C$8;C2)>1 pour chaque champ (téléphone, adresse, courriel).",
          "Normalisez avant de comparer : retirez les espaces et les tirets des numéros, l'abréviation « av. » devient « avenue ».",
        ],
      },
      {
        title: 'Vérifiez ce que vous ne pouvez pas conclure',
        actions: [
          "Un doublon peut avoir une explication légitime (immeuble commun, comptable partagé) : notez-le en « À approfondir » tant que vous n'avez pas la preuve de la propriété ou de la gérance commune.",
          "Demandez à Fatou S. de refaire la comparaison de son côté : deux regards valent mieux qu'un.",
        ],
      },
    ],
    table: {
      columns: ['Fournisseur', 'Téléphone', 'Adresse', 'Signataire'],
      rows: [
        ['Pharma-Lac Distribution', '+243 81 000 03 17', "12, avenue du Lac, Uvira", 'Nadine K.'],
        ['Tanganyika Med Supply', '+243 99 000 01 42', "14, avenue de la Paix, Uvira", 'Prosper M.'],
        ['Kivu Biomed Services', '+243 99 000 01 42', "14, avenue de la Paix, Uvira", 'Aline B.'],
      ],
    },
    result: "Résultat à Uvira : Tanganyika Med Supply et Kivu Biomed Services déclarent le même numéro de téléphone et la même adresse sous des raisons sociales et des signataires différents. Pharma-Lac Distribution n'a aucune coordonnée en commun avec eux.",
    pitfall: "Conclure « même propriétaire » à partir d'un téléphone et d'une adresse partagés. Écrivez ce que vous voyez, puis demandez les extraits du registre du commerce pour la suite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Mesurer les nouveaux entrants et décider de déclencher la fiche',
    intro: "Pourquoi : un marché réellement ouvert attire de nouveaux soumissionnaires ; un marché fermé protège un groupe. C'est aussi à cette étape que vous croisez les signaux et décidez d'escalader. Entrées : T_AO et les résultats des étapes 2 à 4.",
    steps: [
      {
        title: 'Calculez la date de première apparition de chaque soumissionnaire',
        actions: [
          `Dans une table des soumissionnaires : =MIN.SI.ENS(T_AO[Date];T_AO[Soumissionnaire];A2)`,
          "Triez par date : repérez la date du dernier nouvel entrant et comptez les procédures qui ont suivi.",
        ],
      },
      {
        title: 'Faites le bilan des cinq indicateurs',
        actions: [
          "Notez pour chacun : Oui, Non ou À approfondir, avec la pièce.",
          "Appliquez la règle : deux signaux sur les mêmes fournisseurs, ou un signal répété sur plusieurs dossiers consécutifs, déclenchent la fiche.",
        ],
      },
      {
        title: 'Rouvrez le facteur E15 de la sélection de l\'échantillon',
        body: "Passer E15 à Oui porte E16 à 3 et E19 à 22. Vous pouvez étendre l'échantillon ou justifier par écrit pourquoi 19 dossiers suffisent : la collusion se traite par la fiche, pas par la grille.",
      },
      {
        title: 'Prévenez la présidente du comité avant de continuer',
        body: "Un schéma de ce type ne se garde pas pour le rapport final. Envoyez un message confidentiel, factuel, à Hélène V., sans copie à la direction du bureau.",
      },
    ],
    table: {
      columns: ['Indicateur', 'Résultat à Uvira', 'Preuve'],
      rows: [
        ['Prix identiques ou proches', 'Oui', '7 procédures sous 1 % d\'écart (médiane 9,6 %)'],
        ['Coordonnées partagées', 'Oui', 'Téléphone et adresse communs à Tanganyika et Kivu Biomed'],
        ['Alternance des gagnants', 'Oui', '31 des 34 marchés pour les mêmes 3 fournisseurs'],
        ['Absence de nouveaux entrants', 'Oui', 'Aucun nouveau soumissionnaire sur les 20 dernières procédures'],
        ['Propriété ou gérance commune', 'À approfondir', "Registre du commerce non encore consulté"],
      ],
    },
    result: "Quatre indicateurs sur cinq observés, un à approfondir : le seuil de déclenchement est largement atteint. Décision : ouvrir la fiche de détection (procédure 6) et prévenir la présidente du comité.",
    tip: "La rotation peut cacher de bons fournisseurs : ne dites jamais « ils trichent » dans ce message. Écrivez : « un schéma d'attribution mérite une investigation, voici les faits ».",
  },

  // ── Procédure 6 — La fiche de détection de collusion ──
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Section 1 : identifier le bureau, la période et les fournisseurs concernés',
    intro: "Pourquoi : la fiche accompagne l'escalade d'un doute vers l'investigation formelle ; elle doit se comprendre sans vous. Format : une page. Entrées : vos résultats de la procédure 5. Gabarit : fiche-detection-collusion-fournisseurs.docx, copié et nommé avec la date.",
    steps: [
      {
        title: 'Ouvrez la fiche et repérez ses cinq sections',
        actions: [
          "En-tête : intitulé de la fiche et référence de la formation. Sous l'objectif : section 1 (dossiers et fournisseurs), section 2 (indicateurs), section 3 (constats détaillés), section 4 (niveau de risque), section 5 (recommandation).",
          "Enregistrez sous : Uvira_Fiche_collusion_2026-07-13.docx.",
        ],
      },
      {
        title: 'Complétez les quatre cellules de la section 1',
        actions: [
          "« Bureau / mission concerné » : nom de la base, intitulé de la mission, référence de la lettre de mission.",
          "« Période couverte par l'analyse » : dates de début et de fin.",
          "« Fournisseurs impliqués (raisons sociales) » : raisons sociales exactes, telles qu'elles figurent dans les offres.",
          "« Nombre de dossiers examinés / population totale » : écrivez les deux nombres, par exemple 34 mises en concurrence lues sur 64 dossiers.",
        ],
      },
    ],
    example: {
      title: 'Section 1 remplie (fil rouge)',
      lines: [
        "Bureau / mission concerné : base d'Uvira — audit des achats, lettre de mission du 22/06/2026.",
        "Période couverte par l'analyse : du 01/06/2025 au 31/05/2026.",
        "Fournisseurs impliqués : Pharma-Lac Distribution ; Tanganyika Med Supply ; Kivu Biomed Services.",
        "Nombre de dossiers examinés / population totale : 34 mises en concurrence (24 RFQ, 10 ITB ou RFP), 112 offres, lues sur 64 dossiers.",
      ],
    },
    result: "Une section 1 qui identifie sans ambiguïté la mission, la période, les trois fournisseurs et l'ampleur de l'analyse.",
    pitfall: "Écrire seulement les noms courants (« les trois pharmacies ») : la fiche part à une investigation, elle doit porter les raisons sociales exactes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Section 2 : documenter les indicateurs de prix et de coordonnées',
    intro: "Pourquoi : c'est le tableau que lira l'investigateur en premier ; chaque ligne doit citer sa preuve. La section 2 contient cinq indicateurs ; chacun a trois colonnes : l'indicateur, « Observé ? » (Oui, Non ou À approfondir), « Preuve / commentaire ». Entrées : résultats des étapes 3 et 4 de la procédure 5.",
    steps: [
      {
        title: 'Ligne 1 — Prix identiques ou anormalement proches entre offres « concurrentes »',
        actions: [
          "Observé ? : Oui.",
          "Preuve : nombre de procédures concernées, écarts, références des CBA, comparaison avec la médiane du marché.",
        ],
      },
      {
        title: 'Ligne 2 — Coordonnées partagées sous raisons sociales différentes',
        actions: [
          "Observé ? : Oui pour la paire concernée.",
          "Preuve : valeurs relevées et sources (fiche fournisseur, en-tête d'offre, facture), avec les dates.",
        ],
      },
      {
        title: 'Relisez avec le test de la preuve',
        body: "Pour chaque ligne : un tiers peut-il retrouver la pièce que vous citez sans vous téléphoner ? Sinon, ajoutez la référence exacte.",
      },
    ],
    example: {
      title: 'Lignes 1 et 2 remplies',
      lines: [
        "Prix proches — Observé : Oui. Preuve : 7 procédures sur 34 avec un écart inférieur à 1 % entre les 1re et 2e offres (UVI-006 0,71 % ; UVI-009 0,55 % ; UVI-012 0,71 % ; UVI-034 0,54 % ; UVI-038 0,54 % ; deux autres en annexe), contre une médiane de 9,6 % sur les 27 autres. Aucun prix strictement identique.",
        "Coordonnées partagées — Observé : Oui (Tanganyika Med Supply et Kivu Biomed Services). Preuve : téléphone +243 99 000 01 42 et adresse « 14, avenue de la Paix, Uvira » identiques sur les fiches fournisseurs et les en-têtes des offres UVI-009 et UVI-011 ; signataires différents (Prosper M., Aline B.). Pharma-Lac Distribution : aucune coordonnée commune.",
      ],
    },
    result: "Deux lignes de la section 2 remplies, chacune avec un Observé ?, un chiffre et des pièces citables.",
    pitfall: "Cocher Oui avec la preuve « voir dossier ». La fiche doit se lire seule : citez le chiffre, la pièce et la date dans la cellule.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: "Section 2 (suite) : alternance, nouveaux entrants, propriété commune",
    intro: "Pourquoi : les trois dernières lignes sont celles qui distinguent une coïncidence d'un schéma. Entrées : le tableau croisé des gagnants et l'analyse des nouveaux entrants (procédure 5, étapes 2 et 5).",
    steps: [
      {
        title: 'Ligne 3 — Alternance régulière des gagnants (bid rotation)',
        actions: [
          "Observé ? : Oui si un groupe fermé se partage les marchés dans un ordre quasi régulier.",
          "Preuve : nombre de marchés remportés par chacun, par période, et ordre chronologique des gagnants.",
        ],
      },
      {
        title: "Ligne 4 — Absence de nouveaux entrants sur plusieurs appels d'offres consécutifs",
        actions: [
          "Observé ? : Oui si aucun nouveau soumissionnaire n'est apparu sur une série de procédures.",
          "Preuve : date de la dernière première apparition et nombre de procédures écoulées depuis.",
        ],
      },
      {
        title: 'Ligne 5 — Signes de propriété ou de gérance commune',
        actions: [
          "Observé ? : À approfondir tant que vous n'avez pas consulté le registre du commerce, les comptes bancaires de paiement ou les statuts.",
          "Preuve : indiquez ce qui est déjà vérifié et ce qui est demandé, avec la date de la demande.",
        ],
      },
    ],
    example: {
      title: 'Lignes 3, 4 et 5 remplies',
      lines: [
        "Alternance — Observé : Oui. Preuve : sur 34 mises en concurrence, Pharma-Lac Distribution en remporte 11, Tanganyika Med Supply 10, Kivu Biomed Services 10 (31 sur 34), avec 2 à 3 victoires par trimestre pour chacun ; séquence répétée PLD, TMS, KBS de juillet 2025 à mai 2026 (tableau croisé en annexe).",
        "Absence de nouveaux entrants — Observé : Oui. Preuve : dernier nouveau soumissionnaire en octobre 2025 ; aucun depuis, sur les 20 dernières procédures.",
        "Propriété commune — Observé : À approfondir. Preuve : comptes bancaires de paiement distincts ; extraits du registre du commerce demandés le 13/07/2026, non encore reçus.",
      ],
    },
    result: "Cinq indicateurs renseignés : quatre Oui, un À approfondir. La section 2 est complète.",
    tip: "Le mot À approfondir est une réponse honnête, pas une faiblesse : il montre à l'investigateur ce qui reste à faire et protège le fournisseur contre une conclusion prématurée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Section 3 : rédiger les constats détaillés, faits, montants, dates, références',
    intro: "Pourquoi : la section 3 demande de décrire précisément les dossiers, montants, fournisseurs et dates concernés, avec référence documentaire. C'est la seule section écrite en prose : elle doit rester factuelle. Entrées : sections 1 et 2 remplies, annexes (tableau croisé, tableau des prix).",
    steps: [
      {
        title: 'Numérotez les constats : un fait, un chiffre, une pièce',
        actions: [
          "Un constat par paragraphe, commençant par le fait (« Les trois fournisseurs ont remporté… »).",
          "Citez le nombre, le montant total, la période et la pièce à la fin de chaque constat.",
        ],
      },
      {
        title: 'Chiffrez ce que représentent les marchés concernés',
        actions: [
          "Additionnez les montants des 31 marchés gagnés par les trois fournisseurs : c'est l'exposition financière potentielle, pas une perte avérée.",
          "Écrivez les deux : « montant des marchés concernés » et « aucune perte démontrée à ce stade ».",
        ],
      },
      {
        title: 'Passez le test des verbes',
        actions: [
          "Autorisés : constater, relever, observer, rapprocher, ne pas retrouver.",
          "Interdits : prouver, truquer, voler, frauder, s'entendre (sauf pour citer un aveu documenté).",
        ],
      },
    ],
    example: {
      title: 'Extrait de la section 3 (rédigé le 13 juillet 2026)',
      lines: [
        "Constat 1. Sur 34 mises en concurrence de la période (24 RFQ, 10 ITB ou RFP), Pharma-Lac Distribution, Tanganyika Med Supply et Kivu Biomed Services en ont remporté 31 (91 %), pour un montant de 376 800 USD sur 429 600 USD de marchés concurrentiels (87,7 %). [Tableau croisé, annexe 1]",
        "Constat 2. Sur 7 procédures, l'écart entre les deux premières offres est inférieur à 1 % ; sur les 27 autres, l'écart médian est de 9,6 %. Les offres gagnantes de UVI-006, 009 et 012 se situent entre 9 870 et 9 940 USD, sous le plafond de 10 000 USD. [Annexe 2]",
        "Constat 3. Tanganyika Med Supply et Kivu Biomed Services déclarent le même numéro de téléphone et la même adresse. [Fiches fournisseurs, offres UVI-009 et UVI-011]",
        "Aucune perte financière n'est démontrée à ce stade ; l'analyse ne permet pas de conclure à une entente, mais justifie une investigation approfondie.",
      ],
    },
    result: "Une section 3 de quelques paragraphes numérotés, chacun avec un fait, un chiffre et une pièce, et une phrase explicite sur ce que l'analyse ne permet pas de conclure.",
    pitfall: "Glisser un adjectif d'intention (« manifestement », « délibérément ») dans un constat : un seul mot de ce type suffit à rendre toute la fiche contestable par les fournisseurs concernés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Sections 4 et 5 : niveau de risque, recommandation, signature et transmission',
    intro: "Pourquoi : c'est la décision que le lecteur attend. La section 4 contient deux cellules (niveau de risque, justification synthétique) ; la section 5 propose trois options. Entrées : sections 2 et 3 remplies.",
    steps: [
      {
        title: 'Section 4 — Choisissez le niveau de risque : Faible, Modéré ou Élevé',
        actions: [
          "Appliquez la règle : plusieurs indicateurs convergents et répétés = Élevé ; un indicateur isolé ou fragile = Modéré ; aucun indicateur solide = Faible.",
          "Justifiez en une ou deux phrases qui reprennent les indicateurs observés.",
        ],
      },
      {
        title: 'Section 5 — Retenez UNE option parmi les trois proposées',
        actions: [
          "Poursuite normale de l'audit : aucun indicateur solide.",
          "Investigation approfondie (module 08) : indicateurs convergents, preuve de l'entente à établir.",
          "Suspension conservatoire des fournisseurs concernés dans l'attente : réservée aux cas où un risque financier immédiat existe ; la décision appartient à la direction, vous la recommandez.",
        ],
      },
      {
        title: 'Signez : « Rédigé par (nom, fonction) » et « Date »',
        body: "Faites relire la fiche entière par Fatou S. avant diffusion.",
      },
      {
        title: 'Transmettez par le canal confidentiel',
        actions: [
          "Envoyez la fiche et ses annexes à Hélène V. uniquement ; pas de copie à la direction du bureau d'Uvira ni aux fournisseurs.",
          "Classez la fiche dans le dossier « 05_Escalades ».",
        ],
      },
    ],
    example: {
      title: 'Sections 4 et 5 remplies',
      lines: [
        "Niveau de risque : Élevé. Justification : quatre indicateurs sur cinq observés (écarts de moins de 1 % sur 7 procédures ; coordonnées communes à deux fournisseurs ; 31 marchés sur 34 attribués à trois fournisseurs en rotation ; aucun nouvel entrant depuis octobre 2025), le cinquième restant à vérifier.",
        "Recommandation : Investigation approfondie (module 08). Suspension conservatoire non recommandée à ce stade, aucun risque de perte immédiat n'étant identifié.",
        "Rédigé par : Amani K., auditeur(rice) interne — 14/07/2026.",
      ],
    },
    result: "Une fiche d'une page, complète, signée, relue, transmise à la présidente du comité par un canal confidentiel, avec une seule recommandation et son motif.",
    pitfall: "Recommander une suspension conservatoire sans risque immédiat établi : vous prononceriez de fait une sanction avant toute investigation, et vous exposeriez HSGL à un litige avec le fournisseur.",
  },

  // ── Procédure 7 — Auditer un écart d'inventaire et la péremption ──
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 6',
    title: 'Préparer le comptage : références, date de coupure, stock théorique',
    intro: "Pourquoi : un écart d'inventaire n'est pas en soi une preuve de vol ; mais un comptage mal préparé ne prouve rien dans aucun sens. Entrées : l'accès au magasin médical, la fiche de stock ou l'extraction du système, les comptages précédents.",
    steps: [
      {
        title: 'Choisissez les références à compter',
        actions: [
          "Classez les références par valeur décroissante et prenez les plus importantes, jusqu'à environ 70 % de la valeur du stock.",
          "Ajoutez quelques références à faible valeur, tirées au hasard : elles servent de témoin de la rigueur générale du magasin.",
        ],
      },
      {
        title: 'Fixez une date de coupure et gelez les mouvements',
        actions: [
          "Prévenez la responsable du magasin le matin même : le comptage est inopiné.",
          "Relevez les derniers numéros de bons d'entrée et de sortie, et suspendez les mouvements pendant le comptage.",
        ],
      },
      {
        title: 'Extrayez le stock théorique à la date de coupure',
        actions: [
          "Colonnes : référence, désignation, lot, date de péremption, stock théorique, prix unitaire.",
          "Gardez-le pour vous : le comptage se fera sans que le magasinier voie les quantités théoriques.",
        ],
      },
    ],
    example: {
      title: 'Préparation du comptage du 9 juillet 2026 (fil rouge)',
      lines: [
        "Stock théorique du magasin médical : 262 500 USD, 140 références.",
        "25 références retenues, représentant 186 400 USD, soit 71 % de la valeur : 20 par valeur décroissante, 5 tirées au hasard.",
        "Date de coupure : 9 juillet 2026, 08 h 00. Dernier bon de sortie : BS-2026-0712.",
        "Clarisse N. prévenue à 07 h 45 ; le comptage commence à 08 h 15.",
      ],
    },
    result: "Une liste de 25 références, un stock théorique extrait à la date de coupure, des mouvements gelés et un comptage inopiné annoncé le matin même.",
    pitfall: "Prévenir le magasin la veille « par courtoisie » : un écart de stock peut se « résorber » en une nuit par un simple mouvement de régularisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 6',
    title: 'Réaliser le comptage physique, à l\'aveugle, lot par lot',
    intro: "Pourquoi : un comptage fait en regardant la quantité théorique devient une simple confirmation. Entrées : la feuille de comptage vierge (que vous construisez), le magasinier, un second compteur.",
    steps: [
      {
        title: 'Construisez la feuille de comptage sans les quantités théoriques',
        actions: [
          "Colonnes : référence, désignation, lot, date de péremption, quantité comptée, état, compteur 1, compteur 2.",
          "Une ligne par lot, pas par référence : deux lots d'une même référence se comptent séparément.",
        ],
      },
      {
        title: 'Comptez avec le magasinier, puis recomptez les écarts',
        actions: [
          "Comptez chaque lot en présence du magasinier, qui signe la feuille.",
          "Comparez ensuite à la quantité théorique, puis demandez un recomptage par un second compteur pour toute différence.",
        ],
      },
      {
        title: 'Notez l\'état et la zone de rangement',
        actions: [
          "Produits périmés, endommagés, hors zone de stockage normale : notez-le dans la colonne État.",
          "Photographiez les zones de quarantaine et les étagères des références à écart.",
        ],
      },
    ],
    example: {
      title: 'Extrait de la feuille de comptage (9 juillet 2026)',
      lines: [
        "R18 | Ceftriaxone 1 g injectable (boîte de 50 flacons) | lot C-2291 | exp. 11/2026 | 71 boîtes | bon état | compté deux fois : 71.",
        "R21 | Test rapide paludisme (boîte de 25) | lot T-118 | exp. 03/2027 | 132 boîtes | bon état | compté deux fois : 132.",
        "R12 | Paracétamol 500 mg (boîte de 1 000) | lot P-077 | exp. 09/2026 | 82 boîtes | bon état.",
      ],
    },
    result: "Une feuille de comptage signée par le magasinier et par vous, avec les écarts recomptés et les états relevés.",
    tip: "Demandez au magasinier de signer la feuille de comptage avant que vous ne lui montriez les quantités théoriques : sa signature ne peut plus être contestée ensuite.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 6',
    title: "Calculer les écarts : quantité, pourcentage, valeur, tolérance",
    intro: "Pourquoi : la forme des écarts (dispersés ou concentrés) est le premier indice. Entrées : la feuille de comptage et le stock théorique de la même date de coupure.",
    steps: [
      {
        title: 'Calculez trois colonnes pour chaque référence',
        actions: [
          "Écart en quantité = stock physique − stock théorique.",
          "Écart en % = écart ÷ stock théorique.",
          "Valeur de l'écart = écart × prix unitaire.",
        ],
      },
      {
        title: 'Appliquez la tolérance de la procédure de stock',
        actions: [
          "À HSGL : ±2 % en quantité pour les produits courants ; aucune tolérance pour les produits sensibles (injectables, antipaludiques, tests rapides) sans PV.",
          "Surlignez tout écart hors tolérance.",
        ],
      },
      {
        title: 'Lisez la forme des écarts',
        actions: [
          "Comptez combien de références sont hors tolérance et quelle part de la valeur totale des écarts les deux plus grosses représentent.",
        ],
      },
    ],
    table: {
      columns: ['Référence', 'Théorique', 'Physique', 'Écart', 'Écart %', 'Valeur (USD)'],
      rows: [
        ['R03 Gants d\'examen (boîte 100)', '420', '414', '-6', '-1,4 %', '-28,80'],
        ['R07 Compresses stériles', '1 150', '1 138', '-12', '-1,0 %', '-4,20'],
        ['R12 Paracétamol 500 mg', '85', '82', '-3', '-3,5 %', '-28,50'],
        ['R18 Ceftriaxone 1 g inj.', '96', '71', '-25', '-26,0 %', '-950,00'],
        ['R21 Test rapide paludisme', '150', '132', '-18', '-12,0 %', '-261,00'],
      ],
    },
    result: "Sur les 25 références, 20 sont à zéro et 5 présentent un écart (tableau), dont 3 hors tolérance. Les 5 écarts pèsent 1 272,50 USD, dont 95 % pour deux références seulement : la ceftriaxone et les tests rapides.",
    pitfall: "Additionner les écarts positifs et négatifs pour dire « le stock est équilibré » : un surplus sur les gants ne compense pas un manque sur un injectable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 6',
    title: 'Chercher les justifications avec une recherche active documentée',
    intro: "Pourquoi : un écart de gestion est documentable après coup ; un écart suspect ne l'est pas, même après recherche active. Vous ne pouvez affirmer la seconde catégorie qu'après avoir vraiment cherché. Entrées : les écarts hors tolérance, les archives du magasin.",
    steps: [
      {
        title: 'Listez six sources de justification',
        actions: [
          "Bons de sortie mal classés ou non saisis.",
          "Transferts vers les centres de santé ou autres bases, non enregistrés.",
          "Destruction de périmés sans PV, casse non enregistrée.",
          "Retours et échanges avec le fournisseur.",
          "Erreurs de saisie ou de conversion d'unité.",
          "Livraisons directes aux sites, avec bordereau signé.",
        ],
      },
      {
        title: 'Fixez un délai et une règle de preuve',
        actions: [
          "Accordez 48 heures à la responsable du magasin pour produire les pièces.",
          "N'acceptez que des pièces datées et signées : une explication orale n'est pas une justification.",
        ],
      },
      {
        title: "Classez chaque écart : justifié, partiellement justifié, non justifié",
        actions: [
          "Rapprochez chaque pièce de l'écart qu'elle explique, en quantité.",
          "Recalculez l'écart résiduel non justifié.",
        ],
      },
    ],
    example: {
      title: 'Résultats de la recherche (9 au 11 juillet 2026)',
      lines: [
        "R03, R07 : bon de sortie retrouvé mal classé pour 6 boîtes de gants ; casse non enregistrée pour les compresses. Justifiés.",
        "R12 : 3 boîtes périmées détruites, sans PV : partiellement justifié.",
        "R18 ceftriaxone : 38 bons de sortie examinés ; 2 bons mal classés couvrent 4 boîtes ; reste 21 boîtes (798 USD) sans justification. Non justifié.",
        "R21 tests rapides : aucun document retrouvé pour les 18 boîtes (261 USD). Non justifié. Total non justifié : 1 059 USD.",
      ],
    },
    result: "Une colonne « justification » renseignée pour chaque écart, et un écart résiduel de 1 059 USD sur deux références, après recherche active documentée.",
    pitfall: "Écrire « non justifié » sans avoir cherché dans les six sources. Un écart classé suspect par négligence se retourne contre vous au moment de la restitution.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 6',
    title: 'Tester la péremption et le respect du FEFO',
    intro: "Pourquoi : un produit périmé en stock est une perte, et le FEFO non appliqué en est la cause la plus fréquente. Entrées : la feuille de comptage avec les lots et dates, les bons de sortie de la période.",
    steps: [
      {
        title: 'Relevez les lots périmés ou proches de la péremption',
        actions: [
          "Dans la feuille de comptage, filtrez les lots dont la date de péremption est dépassée, puis ceux qui expirent dans moins de 3 mois.",
          "Valorisez-les : quantité × prix unitaire.",
        ],
      },
      {
        title: 'Contrôlez leur isolement et leur destruction',
        actions: [
          "Un lot périmé doit être dans une zone de quarantaine identifiée, hors du stock utilisable.",
          "Cherchez le PV de destruction signé : date, quantité, signataires.",
        ],
      },
      {
        title: 'Testez le FEFO sur les bons de sortie',
        actions: [
          "Prenez 10 à 15 sorties récentes de références à plusieurs lots.",
          "Pour chaque sortie, vérifiez que le lot sorti est celui dont la péremption était la plus proche à cette date.",
        ],
      },
    ],
    example: {
      title: 'Résultats à Uvira',
      lines: [
        "Trois lots périmés encore comptés dans le stock théorique : amoxicilline 500 mg (38 boîtes), métronidazole 250 mg (22 boîtes), sels de réhydratation (140 sachets) : 329,00 USD au total, en rayon normal, sans PV de destruction.",
        "FEFO : sur 11 sorties d'amoxicilline et d'antipaludiques entre mars et juin 2026, 4 ont utilisé un lot à péremption lointaine alors qu'un lot plus proche était disponible.",
      ],
    },
    result: "Un tableau des lots périmés et proches de la péremption avec leur valeur, et un taux de respect du FEFO : 7 sorties sur 11 conformes (64 %).",
    tip: "Ces constats sont de niveau 1 : faiblesse de gestion corrigible par une recommandation (quarantaine, PV, règle FEFO écrite), distincte du signal de niveau 2 sur les deux références concentrées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 6',
    title: 'Qualifier : erreur de gestion ou signal de détournement potentiel',
    intro: "Pourquoi : c'est la compétence de l'auditeur : savoir distinguer, sans présumer la fraude au premier écart. Entrées : le tableau d'écarts, la recherche de justifications, l'historique des inventaires précédents.",
    steps: [
      {
        title: 'Appliquez les trois critères de la théorie à chaque écart',
        actions: [
          "Concentration : l'écart porte-t-il sur une ou deux références à forte valeur ou revente ?",
          "Récurrence : existe-t-il déjà aux inventaires précédents, sans être résorbé ?",
          "Justifiabilité : une pièce l'explique-t-elle après recherche active ?",
        ],
      },
      {
        title: "Récupérez l'historique des deux inventaires précédents",
        actions: [
          "Demandez les feuilles de comptage de décembre 2025 et de mars 2026, et relevez les écarts des mêmes références.",
        ],
      },
      {
        title: 'Concluez par écrit, à deux niveaux',
        actions: [
          "Trois critères réunis : signal de niveau 2, à escalader.",
          "Un seul critère ou aucun : faiblesse de gestion, niveau 1.",
          "Rédigez avec les faits uniquement : quantité, valeur, dates, pièces.",
        ],
      },
    ],
    table: {
      columns: ['Référence', 'Concentré', 'Récurrent', 'Justifié', 'Qualification'],
      rows: [
        ['R03, R07 (gants, compresses)', 'Non', 'Non', 'Oui', 'Gestion — niveau 1'],
        ['R12 (paracétamol)', 'Non', 'Non', 'Partiellement', 'Gestion — niveau 1 (PV manquant)'],
        ['R18 (ceftriaxone)', 'Oui', 'Oui : -14, -19, -25 aux 3 inventaires', 'Non', 'Signal potentiel — niveau 2'],
        ['R21 (tests rapides)', 'Oui', 'Oui : -9, -13, -18', 'Non', 'Signal potentiel — niveau 2'],
      ],
    },
    result: "Deux références concentrent 95 % de la valeur des écarts, ont des écarts croissants à chaque inventaire depuis décembre 2025 et restent sans justification : signal de niveau 2 à escalader. Les autres écarts sont des faiblesses de gestion.",
    pitfall: "Écrire « le magasin est volé » ou « la pharmacienne est responsable ». Vous écrivez : « un écart de 21 boîtes de ceftriaxone, croissant depuis décembre 2025, reste sans justification après recherche dans 38 bons de sortie ».",
  },

  // ── Procédure 8 — Conclure et restituer ──
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 5',
    title: 'Rassembler et lire tous les résultats avant de conclure',
    intro: "Pourquoi : un constat isolé se discute ; un tableau de résultats cohérent se défend. Entrées : la checklist (procédure 3), le rapprochement achats-stock (4), la fiche de collusion (5 et 6), l'audit d'inventaire (7).",
    steps: [
      {
        title: 'Ouvrez un tableau de synthèse des résultats chiffrés',
        actions: [
          "Une ligne par résultat : taux de conformité global, dossiers à score parfait, dossiers sous 50 %, anomalies de rapprochement, indicateurs de collusion, écarts d'inventaire.",
          "Pour chacun, citez la source : cellule du classeur, fiche, feuille de comptage.",
        ],
      },
      {
        title: 'Chiffrez les expositions séparément des pertes',
        actions: [
          "Exposition = montants potentiellement inéligibles ou non justifiés. Perte = montant dont le préjudice est démontré.",
          "Écrivez les deux colonnes, même quand la seconde est « aucune perte démontrée à ce stade ».",
        ],
      },
      {
        title: 'Relisez les chiffres avec Fatou S.',
        body: "Un chiffre faux dans une restitution est utilisé pour contester tout le reste. La relecture par une seconde personne est une règle, pas une faveur.",
      },
    ],
    table: {
      columns: ['Résultat', 'Valeur', 'Source'],
      rows: [
        ['Taux de conformité global', '81,6 % (19 dossiers)', 'Checklist par dossier'],
        ['Dossiers parfaits / sous 50 %', '10 sur 19 / 3 sur 19', 'Colonne H'],
        ['Exposition Meridian (art. 9)', '21 450 USD', 'UVI-029, 031, 046, 047'],
        ['Achat payé sans entrée en stock', '2 566 USD non justifiés', 'UVI-038, note d\'anomalie'],
        ['Écarts d\'inventaire non justifiés', '1 059 USD (2 références)', 'Feuille de comptage du 09/07'],
        ['Indicateurs de collusion observés', '4 sur 5 (1 à approfondir)', 'Fiche de détection'],
      ],
    },
    result: "Un tableau de synthèse d'une page qui sépare les expositions des pertes, relu par une seconde personne.",
    pitfall: "Annoncer « 21 450 USD détournés » alors qu'il s'agit d'une exposition potentielle à l'inéligibilité : un mot faux sur un montant ruine la crédibilité de tout le rapport.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 5',
    title: 'Classer chaque constat : niveau 1 corrigible ou niveau 2 à escalader',
    intro: "Pourquoi : mélanger les deux niveaux affaiblit la crédibilité des constats les plus graves. Entrées : tous les résultats de l'étape 1.",
    steps: [
      {
        title: 'Listez les constats un par un, avec un numéro',
        actions: [
          "Un constat = un fait vérifiable, une règle de référence, une pièce.",
          "Regroupez les cas similaires : trois CBA tardives forment un seul constat à trois exemples.",
        ],
      },
      {
        title: 'Appliquez le test de classement',
        actions: [
          "Niveau 2 si l'un des signaux suivants est présent : schéma entre dossiers, bien payé sans entrée en stock non résolu, écart concentré et récurrent sans justification.",
          "Niveau 1 pour toute autre non-conformité sans indice de détournement.",
        ],
      },
      {
        title: 'Ajoutez une priorité à chaque constat de niveau 1',
        actions: [
          "Haute : exposition au bailleur ou montant significatif.",
          "Moyenne : défaut de preuve sans exposition financière.",
          "Basse : défaut formel.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Constat', 'Niveau', 'Priorité'],
      rows: [
        ['C1', '4 dossiers Meridian traités en RFQ au lieu de la procédure formelle (21 450 USD)', '1', 'Haute'],
        ['C2', 'CBA postérieure à la commande (UVI-034, 038) ; offres manquantes (UVI-026, 060)', '1', 'Moyenne'],
        ['C3', 'Avenant verbal de 750 USD (UVI-041) ; PV à 2 signatures sur 3 (UVI-044)', '1', 'Moyenne'],
        ['C4', 'Lots périmés en rayon (329 USD) et FEFO appliqué sur 7 sorties sur 11', '1', 'Moyenne'],
        ['E1', 'Schéma d\'attribution entre trois fournisseurs (4 indicateurs sur 5)', '2', '—'],
        ['E2', 'UVI-038 : 8 tensiomètres et 12 oxymètres non justifiés (2 566 USD)', '2', '—'],
        ['E3', 'Ceftriaxone et tests rapides : 1 059 USD d\'écart croissant et non justifié', '2', '—'],
      ],
    },
    result: "Sept constats numérotés : quatre de niveau 1 avec priorité, trois de niveau 2 destinés à l'escalade.",
    tip: "Le constat sur le Fonds Meridian est de niveau 1 mais de priorité haute : le niveau décrit la nature du défaut, la priorité décrit l'urgence pour le bailleur. Ne confondez pas les deux axes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 5',
    title: 'Rédiger chaque constat en cinq éléments',
    intro: "Pourquoi : un constat sans critère, ou sans pièce, ne résiste pas au droit de réponse. Entrées : le tableau de classement des constats.",
    steps: [
      {
        title: 'Structurez chaque constat en cinq lignes',
        actions: [
          "Critère : la règle de référence (procédure HSGL v2, article 9 de la convention).",
          "Constat : le fait chiffré, daté, sourcé.",
          "Preuves : les références des pièces et des cellules.",
          "Effet : ce que le défaut expose ou empêche, sans exagérer.",
          "Recommandation : une action précise, avec un responsable et une échéance proposés.",
        ],
      },
      {
        title: 'Relisez chaque constat avec trois tests',
        actions: [
          "Test du chiffre : un nombre, un montant et une date figurent-ils dans la phrase ?",
          "Test de la pièce : un tiers retrouve-t-il la pièce sans vous ?",
          "Test de l'intention : aucun mot ne prête-t-il une intention aux personnes ?",
        ],
      },
    ],
    example: {
      title: 'Constat C1 rédigé (niveau 1, priorité haute)',
      lines: [
        "Critère : convention du Fonds Meridian, article 9 — mise en concurrence formelle dès 5 000 USD.",
        "Constat : 4 dossiers financés par le Fonds Meridian, de 4 900 à 6 120 USD (UVI-029, 031, 046, 047 ; 21 450 USD au total), ont été traités par RFQ de trois devis, sans appel d'offres ni CPC. Les deux dossiers UVI-046 et 047 forment une commande jumelle de 9 850 USD à Pharma-Lac Distribution (3 jours d'écart).",
        "Preuves : checklist par dossier, lignes UVI-029, 031, 047 ; registre T_REG ; dossiers papier.",
        "Effet : coûts potentiellement inéligibles pour le bailleur, à hauteur de 21 450 USD, sans qu'aucune perte ne soit démontrée.",
        "Recommandation : informer le Fonds Meridian après avis de la Finance ; régulariser par une analyse rétrospective ; mettre à jour la grille des seuils.",
      ],
    },
    result: "Chaque constat tient sur cinq lignes et passe les trois tests. Il se lit seul, sans le dossier de travail.",
    pitfall: "Une recommandation vague (« améliorer le suivi des seuils ») : le plan d'action ne peut ni être assigné ni être clôturé. Une bonne recommandation nomme l'action, le responsable proposé et la date.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 5',
    title: 'Rédiger les constats de niveau 2 sans accuser, et séparer les deux circuits',
    intro: "Pourquoi : les constats de niveau 2 ne se discutent pas comme les autres : ils ne vont pas dans le rapport diffusé à l'audité, mais dans une note confidentielle. Entrées : fiche de détection, note d'anomalie, qualification des écarts d'inventaire.",
    steps: [
      {
        title: 'Rédigez chaque constat de niveau 2 avec la formule des trois blocs',
        actions: [
          "Ce qui est observé : faits, chiffres, pièces.",
          "Ce qui n'est pas démontré : intention, responsabilité individuelle, entente, perte financière.",
          "Ce que vous recommandez : investigation approfondie, pas de conclusion.",
        ],
      },
      {
        title: 'Séparez les deux circuits de diffusion',
        actions: [
          "Niveau 1 : rapport d'audit, diffusé à la direction et au bureau audité.",
          "Niveau 2 : note confidentielle à la présidente du comité d'audit, hors rapport ; le rapport ne mentionne que « points transmis au comité d'audit ».",
        ],
      },
      {
        title: 'Vérifiez la confidentialité',
        actions: [
          "Ne discutez pas des constats de niveau 2 avec le bureau audité, ni avec les fournisseurs concernés.",
          "Limitez la diffusion aux personnes que la charte d'audit désigne.",
        ],
      },
    ],
    example: {
      title: 'Constat E2 rédigé pour la note confidentielle',
      lines: [
        "Observé : le dossier UVI-038 (Tanganyika Med Supply, 8 300 USD, 14/01/2026) porte sur 24 tensiomètres et 40 oxymètres ; aucun GRN, aucune entrée en stock ; 16 tensiomètres et 28 oxymètres ont été vus dans deux centres de santé avec leurs numéros de série.",
        "Non démontré : le sort de 8 tensiomètres et 12 oxymètres (2 566 USD) ; aucune responsabilité individuelle n'est établie ; une livraison directe non documentée reste possible.",
        "Recommandation : investigation approfondie sur la traçabilité du dossier, en lien avec la fiche de détection sur le fournisseur.",
      ],
    },
    result: "Trois constats de niveau 2 rédigés selon la formule observé, non démontré, recommandé, destinés à une note confidentielle distincte du rapport.",
    pitfall: "Inclure les constats de niveau 2 dans le rapport diffusé au bureau : vous alertez les personnes concernées, vous risquez la destruction de preuves, et vous exposez des collègues à des accusations non fondées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 5',
    title: 'Restituer au bureau audité et recueillir les réponses',
    intro: "Pourquoi : la restitution transforme des constats en plan d'action ; mal conduite, elle ferme l'accès à l'information pour les audits suivants. Entrées : les constats de niveau 1 rédigés et validés par Fatou S.",
    steps: [
      {
        title: 'Préparez la réunion de restitution',
        actions: [
          "Envoyez les constats de niveau 1 deux jours avant, avec les pièces.",
          "Invitez la Coordinatrice, le Responsable logistique, la pharmacienne et la Finance.",
          "Ne présentez que le niveau 1 : le niveau 2 n'y figure pas.",
        ],
      },
      {
        title: 'Conduisez la réunion constat par constat',
        actions: [
          "Présentez le fait, la pièce, le critère ; écoutez la réponse ; notez-la telle quelle.",
          "Corrigez un fait si une pièce nouvelle le justifie, mais ne négociez ni la formulation de la règle ni la priorité sans pièce.",
        ],
      },
      {
        title: 'Obtenez un plan d\'action avec un responsable et une date',
        actions: [
          "Pour chaque recommandation : une action, un responsable nommé, une échéance.",
          "Accordez 10 jours ouvrés pour les réponses écrites.",
        ],
      },
      {
        title: 'Archivez et transmettez',
        actions: [
          "Classez le compte rendu dans « 04_Restitution » et le plan d'action dans « 06_Suivi ».",
          "Envoyez à la présidente du comité la note confidentielle de niveau 2, séparément.",
        ],
      },
    ],
    example: {
      title: 'Restitution du 17 juillet 2026 (extrait du compte rendu)',
      lines: [
        "C1 (Meridian) : reconnu par le Responsable logistique ; action : analyse rétrospective des 4 dossiers avec la Finance, responsable Gédéon M., échéance 14 août 2026.",
        "C2 (CBA tardives) : reconnu ; action : verrouiller la date de la CBA avant l'édition du BC dans l'outil, responsable Gédéon M., 31 juillet 2026.",
        "C4 (périmés) : reconnu ; action : zone de quarantaine et PV de destruction, responsable Clarisse N., 24 juillet 2026.",
        "Aucune discussion sur les points de niveau 2, transmis séparément.",
      ],
    },
    result: "Un compte rendu de restitution daté, des plans d'action nominatifs et la note confidentielle de niveau 2 transmise à la présidente du comité.",
    tip: "Terminez la réunion en répétant les trois points d'accord et les dates : ce sont elles que vous relancerez dans le suivi, pas vos souvenirs.",
  },

  // ───────────────────────── 6. Cas complet résolu ─────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — l'audit des achats d'Uvira : population et échantillon",
    scenario: "Rappel : Hélène V. vous confie l'audit des achats de la base d'Uvira sur 12 mois. Voici le dossier de la procédure 1 et de la procédure 2, tel qu'il se présente une fois terminé, avec les cellules exactes du classeur grille-audit-echantillon-achats.xlsx.",
    steps: [
      {
        title: 'Raisonnement 1 — Une population bornée et confirmée',
        body: "64 dossiers valides sur 66 numéros (2 annulés pièces à l'appui), 451 000 USD rapprochés du grand livre à 0,50 % près, et confirmés par écrit par le Responsable logistique : l'échantillon repose sur une base qui ne peut plus être contestée.",
      },
      {
        title: 'Raisonnement 2 — Une taille calculée, pas devinée',
        body: "Modéré (20 %) donne 13 dossiers ; deux facteurs de risque documentés ajoutent 6 dossiers : 19, soit 29,7 % des dossiers et 45,9 % des montants. La justification tient en un paragraphe.",
      },
      {
        title: 'Raisonnement 3 — Des dossiers choisis par un score écrit',
        body: "16 dossiers par score de risque, 3 de contrôle tirés sans critère, tous les paliers et tous les trimestres représentés.",
      },
    ],
    table: {
      columns: ['Cellule', 'Contenu', 'Valeur'],
      rows: [
        ['E5', 'Population', '64'],
        ['E6', 'Niveau de risque', 'Modéré'],
        ['E7', 'Taux de base (calculé)', '0,2'],
        ['E11 / E14', 'Fournisseur dominant ; montants sous le plafond', 'Oui / Oui'],
        ['E12 / E13 / E15', 'Zone à historique ; dossiers signalés ; rotation faible', 'Non / Non / Non (E15 à rouvrir)'],
        ['E16 / E19 / E20', 'Facteurs, taille, couverture (calculés)', '2 / 19 / 29,7 %'],
      ],
    },
    result: "Livrables 1 et 2 terminés : une note de population confirmée et un onglet « Sélection de l'échantillon » dont chaque cellule renvoie à une preuve.",
  },
  {
    type: 'comparison-table',
    title: "Cas résolu — la checklist d'Uvira : 19 dossiers, taux global 81,6 %",
    columns: ['Dossier', 'Fournisseur', 'Payé (USD)', 'D', 'E', 'F', 'G', 'Score'],
    rows: [
      ['UVI-004', 'Ruzizi Carburants', '24 800', 'Oui', 'Oui', 'Oui', 'Oui', '100 %'],
      ['UVI-006', 'Pharma-Lac Distribution', '9 870', 'Oui', 'Oui', 'Oui', 'Oui (sans objet)', '100 %'],
      ['UVI-009', 'Tanganyika Med Supply', '9 940', 'Oui', 'Oui', 'Oui', 'Oui (sans objet)', '100 %'],
      ['UVI-012', 'Kivu Biomed Services', '9 910', 'Oui', 'Oui', 'Oui', 'Oui (sans objet)', '100 %'],
      ['UVI-015', 'Pharma-Lac Distribution', '31 200', 'Oui', 'Oui', 'Oui', 'Oui', '100 %'],
      ['UVI-017', 'Imbo Services', '18 400', 'Oui', 'Oui', 'Oui', 'Oui', '100 %'],
      ['UVI-020', 'Tanganyika Med Supply', '22 700', 'Oui', 'Oui', 'Oui', 'Oui', '100 %'],
      ['UVI-023', 'Kivu Biomed Services', '3 150', 'Oui', 'Oui', 'Oui', 'Oui (sans objet)', '100 %'],
      ['UVI-026', 'Pharma-Lac Distribution', '3 040', 'Oui', 'Oui', 'Partiel', 'Oui (sans objet)', '87,5 %'],
      ['UVI-029', 'Tanganyika Med Supply', '5 480', 'Non', 'Non', 'Oui', 'Non', '25 %'],
      ['UVI-031', 'Kivu Biomed Services', '6 120', 'Non', 'Non', 'Oui', 'Non', '25 %'],
      ['UVI-034', 'Pharma-Lac Distribution', '7 450', 'Oui', 'Oui', 'Non', 'Oui (sans objet)', '75 %'],
      ['UVI-038', 'Tanganyika Med Supply', '8 300', 'Oui', 'Oui', 'Non', 'Oui (sans objet)', '75 %'],
      ['UVI-041', 'Ruzizi Carburants', '10 350', 'Non', 'Partiel', 'Oui', 'Oui (sans objet)', '62,5 %'],
      ['UVI-044', 'Kivu Biomed Services', '14 600', 'Oui', 'Oui', 'Oui', 'Partiel', '87,5 %'],
      ['UVI-047', 'Pharma-Lac Distribution', '4 950', 'Non', 'Non', 'Oui', 'Non', '25 %'],
      ['UVI-052', 'Papeterie du Lac', '880', 'Oui', 'Oui', 'Oui (sans objet)', 'Oui (sans objet)', '100 %'],
      ['UVI-056', 'Tanganyika Med Supply', '11 900', 'Oui', 'Oui', 'Oui', 'Oui', '100 %'],
      ['UVI-060', 'Kivu Biomed Services', '4 720', 'Oui', 'Oui', 'Partiel', 'Oui (sans objet)', '87,5 %'],
    ],
  },
  {
    type: 'case-study',
    title: 'Cas résolu — la fiche de détection de collusion remplie',
    scenario: "Livrable 6 : la fiche-detection-collusion-fournisseurs.docx telle que transmise à Hélène V. le 14 juillet 2026, section par section. Rappel : les 19 dossiers de l'échantillon sont conformes à 81,6 %, mais ce taux ne dit rien de l'entente éventuelle entre fournisseurs.",
    steps: [
      {
        title: 'Raisonnement — La fiche se lit seule',
        body: "Chaque ligne cite un chiffre, une pièce et une date ; la prudence est dans les verbes (« observé », « à approfondir »), pas dans le flou des faits.",
      },
    ],
    table: {
      columns: ['Section', 'Contenu saisi'],
      rows: [
        ['1. Dossiers et fournisseurs', "Base d'Uvira, audit des achats ; 01/06/2025 – 31/05/2026 ; Pharma-Lac Distribution, Tanganyika Med Supply, Kivu Biomed Services ; 34 mises en concurrence, 112 offres, sur 64 dossiers"],
        ['2. Prix proches', 'Oui — 7 procédures sous 1 % d\'écart, médiane des 27 autres 9,6 %'],
        ['2. Coordonnées partagées', 'Oui — Tanganyika et Kivu Biomed : même téléphone et même adresse, signataires différents'],
        ['2. Alternance des gagnants', 'Oui — 31 marchés sur 34, 11 / 10 / 10, séquence PLD-TMS-KBS'],
        ['2. Absence de nouveaux entrants', 'Oui — aucun nouveau soumissionnaire sur les 20 dernières procédures'],
        ['2. Propriété commune', 'À approfondir — extraits du registre du commerce demandés le 13/07'],
        ['3. Constats détaillés', "3 constats chiffrés ; 376 800 USD de marchés concernés sur 429 600 ; aucune perte démontrée ; pas de conclusion d'entente"],
        ['4. Niveau de risque', 'Élevé — quatre indicateurs convergents sur cinq'],
        ['5. Recommandation', 'Investigation approfondie (module 08) ; pas de suspension conservatoire ; Amani K., 14/07/2026'],
      ],
    },
    result: "Livrable 6 terminé : une fiche d'une page, sans accusation, avec une recommandation unique et sa justification.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — croisement achats-stock et inventaire du 9 juillet 2026",
    scenario: "Livrables 4 et 7 : sur les 16 dossiers de biens, un seul est resté sans entrée en stock ; au magasin médical, deux références concentrent presque tout l'écart d'inventaire. Voici leur traitement complet.",
    steps: [
      {
        title: 'Raisonnement 1 — La recherche active précède la qualification',
        body: "UVI-038 n'a pas été classé « suspect » le jour où le GRN manquait : trois jours de recherche ont permis de justifier 44 appareils sur 64, et de circonscrire précisément les 20 restants.",
      },
      {
        title: 'Raisonnement 2 — La forme des écarts commande la conclusion',
        body: "Écarts dispersés et documentés sur les gants, compresses et paracétamol ; écarts concentrés, croissants et sans pièce sur la ceftriaxone et les tests rapides : deux signaux de nature différente.",
      },
    ],
    table: {
      columns: ['Objet', 'Fait constaté', 'Niveau'],
      rows: [
        ['UVI-026', '4 boîtes de ceftriaxone facturées non reçues (152 USD)', '1'],
        ['UVI-038', '8 tensiomètres + 12 oxymètres non justifiés (2 566 USD) ; 44 appareils justifiés', '2'],
        ['Ceftriaxone R18', '-14 (déc.), -19 (mars), -25 (juil.) ; 21 boîtes non justifiées (798 USD)', '2'],
        ['Tests rapides R21', '-9, -13, -18 ; aucun document (261 USD)', '2'],
        ['Périmés et FEFO', '329 USD de lots périmés en rayon ; FEFO conforme sur 7 sorties sur 11', '1'],
      ],
    },
    result: "Livrables 4 et 7 terminés : une anomalie prioritaire documentée, deux références à signal potentiel, trois faiblesses de gestion distinctes.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — la restitution en deux niveaux',
    scenario: "Livrable 8 : la restitution du 17 juillet 2026, avec deux circuits. Aucun constat de niveau 2 n'a été présenté au bureau d'Uvira.",
    steps: [
      {
        title: 'Raisonnement — Deux niveaux, deux destinataires, deux supports',
        body: "Le rapport d'audit traite les faiblesses corrigibles et obtient des plans d'action nominatifs. La note confidentielle traite le schéma d'attribution, la réception manquante et l'écart de stock : elle va à la présidente du comité, qui décide de l'investigation.",
      },
    ],
    table: {
      columns: ['Circuit', 'Contenu', 'Destinataire', 'Suite'],
      rows: [
        ['Rapport d\'audit (niveau 1)', 'C1 à C4 : seuils Meridian, CBA tardives, avenant et PV, périmés et FEFO', 'Directeur Pays, Coordinatrice, Responsable logistique', 'Plans d\'action : 4 responsables, échéances du 24/07 au 14/08'],
        ['Note confidentielle (niveau 2)', 'E1 à E3 : schéma d\'attribution, UVI-038, écarts ceftriaxone et tests rapides', 'Hélène V., présidente du comité d\'audit', 'Décision d\'investigation (module 08)'],
        ['Fournisseurs', 'Aucune communication', '—', 'Aucune, jusqu\'à décision du comité'],
      ],
    },
    result: "Livrable 8 terminé : un dossier de mission de bout en bout, dans lequel chaque pièce est datée, sourcée et rangée dans le bon circuit.",
  },

  // ───────────────────────── 7. Exercices ─────────────────────────
  {
    type: 'exercise',
    title: "Exercice 1 — Nigeria : grille d'échantillonnage et de conformité",
    instructions: "Vous êtes déployé(e) comme auditeur(rice) interne d'une ONG de développement rural, en audit annuel du cycle achats du bureau pays au Nigeria. Le registre des 12 derniers mois compte 74 dossiers : 53 achats directs, 17 RFQ, 4 RFP ou ITB. Contexte à risque : fournisseur dominant déjà suspecté et zone à historique d'irrégularités. Complétez grille-audit-echantillon-achats.xlsx, onglet « Sélection de l'échantillon », puis l'onglet « Checklist par dossier ».",
    steps: [
      {
        title: "Onglet « Sélection de l'échantillon » : saisissez E5, E6, E11 à E15",
        actions: [
          "E5 = 74. Choisissez un niveau de risque et justifiez-le en deux phrases.",
          "Cochez les facteurs documentés par l'énoncé et laissez les autres à Non avec leur motif.",
        ],
      },
      {
        title: 'Lisez E19 et E20, retenez au moins 18 dossiers et justifiez',
        actions: [
          "Recalculez E19 à la main. Si vous retenez moins que le gabarit, écrivez pourquoi ; si plus, pourquoi aussi.",
        ],
      },
      {
        title: "Onglet « Checklist par dossier » : saisissez 18 dossiers",
        actions: [
          "Conservez les trois lignes du modèle (ACH-2025-014 Agro-Delta Supplies 8 200, ACH-2025-019 Novak Trading Ltd 7 850, ACH-2025-027 Agro-Delta Supplies 9 100 avec G = Partiel).",
          "Ajoutez 15 dossiers ACH-2025-0xx de votre choix, tous à Oui. Lisez le taux global.",
        ],
      },
      {
        title: 'Rédigez la phrase qui explique pourquoi ce score ne rassure pas',
      },
    ],
    tip: "Repères de correction : Modéré avec 2 facteurs donne 15 + 6 = 21 dossiers ; Élevé donne 26 + 6 = 32. Avec les 3 lignes du modèle et 15 dossiers à 100 %, le taux global est de 99,3 % (17,875 ÷ 18). L'énoncé demande au moins 18 dossiers : 18 correspond au minimum du cas, pas au résultat du gabarit.",
    deliverable: "La grille complétée (deux onglets), une justification de la taille d'échantillon et la phrase sur les limites du score de conformité.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Nigeria : la fiche de détection de collusion',
    instructions: "En élargissant votre lecture aux 74 dossiers, vous relevez 21 mises en concurrence (17 RFQ, 4 RFP ou ITB). Agro-Delta Supplies (A) et Novak Trading Ltd (N) en remportent 19, et deux marchés vont à d'autres soumissionnaires (X). Remplissez fiche-detection-collusion-fournisseurs.docx.",
    example: {
      title: 'Gagnants des 21 mises en concurrence, par mois (12 mois)',
      lines: [
        "Janvier : n°1 A, n°2 N. Février : n°3 A, n°4 N. Mars : n°5 A, n°6 N. Avril : n°7 A, n°8 N.",
        "Mai : n°9 A, n°10 X. Juin : n°11 N. Juillet : n°12 A, n°13 N. Août : n°14 A, n°15 N.",
        "Septembre : n°16 X. Octobre : n°17 A, n°18 N. Novembre : n°19 A, n°20 N. Décembre : n°21 A.",
        "Prix identiques : au n°9 (mai, gagnant Agro-Delta), l'offre perdante de Novak est de 12 480,00 USD, identique au centime à son offre GAGNANTE du n°2 (janvier) sur un lot comparable ; au n°17 (octobre, gagnant Agro-Delta), l'offre perdante de Novak est de 7 640,00 USD, identique à son offre gagnante du n°11 (juin).",
        "Fiches fournisseurs : téléphones, adresses et courriels différents pour les deux sociétés. Aucune information sur les actionnaires.",
      ],
    },
    steps: [
      { title: 'Section 1 : bureau, période, fournisseurs, nombre de dossiers examinés / population (21 sur 74)' },
      { title: 'Section 2 : renseignez les cinq indicateurs avec Oui, Non ou À approfondir, et une preuve chiffrée' },
      { title: 'Section 3 : comptez les marchés de chaque fournisseur (A : 10, N : 9) et décrivez le motif et les deux prix identiques' },
      { title: 'Sections 4 et 5 : niveau de risque, une seule recommandation, signature' },
    ],
    pitfall: "Écrire dans la section 3 que « les deux fournisseurs ont triché ». Relevez les faits, indiquez que l'entente n'est pas prouvée, et recommandez l'escalade vers l'investigation formelle.",
    deliverable: "La fiche de détection remplie : section 2 avec indicateurs, section 3 avec les 19 marchés, l'alternance et les deux prix identiques, section 5 avec la recommandation.",
  },
  {
    type: 'exercise',
    title: "Exercice 3 — Nigeria : le croisement avec l'inventaire",
    instructions: "Parmi les 19 marchés remportés par Agro-Delta Supplies et Novak Trading Ltd, 6 concernaient des intrants agricoles physiques. Décrivez, en 4 à 5 lignes, la vérification exacte que vous mèneriez dans le registre d'inventaire pour chacun de ces 6 dossiers, et ce qu'impliquerait, pour la suite de votre mission, la découverte d'un seul de ces achats sans entrée en stock correspondante.",
    steps: [
      { title: 'Pour chaque dossier, listez les pièces à rapprocher : PO, GRN, facture, fiche de stock', actions: ['Quantités, prix, dates, signataire du GRN.'] },
      { title: "Précisez la recherche à mener dans le registre d'inventaire", actions: ["Entrée en stock de la bonne quantité, à une date proche du GRN, avec le n° de GRN en référence."] },
      { title: 'Écrivez ce que vous feriez en cas d\'achat sans entrée en stock', actions: ['Recherche active, qualification, signal prioritaire, note d\'anomalie, impact sur la fiche de collusion et l\'escalade.'] },
    ],
    tip: "Repère de correction : la découverte d'un seul achat payé sans entrée en stock est un signal prioritaire de niveau 2, qui renforce la fiche de collusion et accélère l'escalade ; elle ne se conclut jamais par une accusation avant la recherche active.",
    deliverable: "Une note de croisement inventaire d'une demi-page maximum.",
  },
  {
    type: 'exercise',
    title: "Exercice 4 — Bunia : gestion ou détournement potentiel ?",
    instructions: "Au magasin médical de la base de Bunia, l'inventaire du 20 juin 2026 présente six écarts. Pour chacun, appliquez les trois critères (concentré, récurrent, justifié) et classez-le : écart de gestion (niveau 1) ou signal de détournement potentiel (niveau 2).",
    table: {
      columns: ['Réf.', 'Théorique', 'Physique', 'Contexte'],
      rows: [
        ['A Gants d\'examen (boîte 100)', '300', '296', 'Premier écart ; 4 boîtes sorties retrouvées sur un bon mal classé'],
        ['B Seringues 5 ml (boîte 100)', '80', '79', 'Ponctuel ; casse constatée non enregistrée'],
        ['C Artéméther-luméfantrine (boîte 24)', '500', '386', 'Écarts de -30, -62 puis -114 aux trois derniers inventaires ; aucun document'],
        ['D Carnets de consultation vierges', '400', '372', 'Aucune revente possible ; bons mal archivés, retrouvés en partie'],
        ['E Ocytocine injectable (boîte 10)', '60', '48', 'Déjà -6 en mars ; aucune justification après recherche'],
        ['F Savon (pain)', '220', '215', 'Distribution non saisie ; bordereau signé retrouvé'],
      ],
    },
    steps: [
      { title: 'Calculez pour chaque référence l\'écart en quantité et en pourcentage' },
      { title: 'Remplissez un tableau Concentré / Récurrent / Justifié / Niveau pour les six lignes' },
      { title: 'Rédigez en trois phrases le constat de niveau 2 le plus important, sans accuser' },
    ],
    tip: "Repère de correction : A, B, D et F sont des écarts de gestion (niveau 1) ; C (-22,8 %) et E (-20 %) sont concentrés, récurrents et sans justification : niveau 2. Les deux comptent des produits sensibles, donc sans tolérance.",
    deliverable: "Un tableau de six lignes qualifiées et un constat de niveau 2 de trois phrases.",
  },
  {
    type: 'exercise',
    title: 'Exercice 5 — Quel palier, quelle procédure ? Six dossiers à qualifier',
    instructions: "Pour chaque dossier, déterminez le palier applicable (grille HSGL et exigence du Fonds Meridian dès 5 000 USD), la procédure et les pièces exigées, puis dites si le palier déclaré est correct.",
    table: {
      columns: ['N°', 'Dossier', 'Palier déclaré'],
      rows: [
        ['1', 'Fournitures de bureau, 640 USD, financement ECHO', 'Achat direct'],
        ['2', 'Consommables, 4 800 USD, financement ECHO', 'RFQ'],
        ['3', 'Consommables, 5 200 USD, financement Fonds Meridian', 'RFQ'],
        ['4', 'Commande de 9 950 USD, facture payée 10 400 USD après avenant verbal, ECHO', 'RFQ'],
        ['5', 'Prestation de conseil, 12 000 USD, ECHO', 'RFQ'],
        ['6', 'Deux commandes de 700 USD au même fournisseur à 2 jours d\'intervalle, même besoin', 'Achat direct (x2)'],
      ],
    },
    steps: [
      { title: 'Remplissez un tableau : palier applicable, procédure, pièces, palier déclaré correct (oui ou non)' },
      { title: 'Pour les cas non conformes, écrivez la réponse qu\'afficherait la colonne D de la checklist' },
    ],
    tip: "Repères de correction : 1 correct. 2 correct. 3 non (ITB ou RFP : convention). 4 non (palier applicable au montant payé : appel d'offres formel). 5 non (RFP avec CPC : services au-delà de 10 000 USD). 6 non (besoin cumulé de 1 400 USD : RFQ).",
    deliverable: "Un tableau de six lignes avec le palier applicable, la procédure et la réponse D pour chaque dossier.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Votre note de population fixe la période, la définition du dossier, la règle de rattachement, et rapproche le registre du grand livre avec un écart inférieur à 1 %.",
      "E5, E6 et E11 à E15 sont renseignées avec une preuve par réponse ; E7, E16, E19 et E20 n'ont pas été écrasées ; la taille d'échantillon est recalculée à la main et justifiée.",
      "Votre liste de dossiers découle d'un score écrit, couvre tous les paliers et comprend des dossiers de contrôle.",
      "Chaque Non ou Partiel de la checklist porte une pièce, une date et un montant en colonne I ; les dossiers sans objet portent Oui et « sans objet », jamais une cellule vide.",
      "Votre tableau de rapprochement aligne PO, GRN et facture, et chaque anomalie porte une recherche active datée avant d'être qualifiée.",
      "Votre fiche de collusion renseigne les cinq indicateurs avec Oui, Non ou À approfondir, chacun avec un chiffre et une pièce, et ne contient aucun mot d'intention.",
      "Votre tableau d'écarts d'inventaire montre quantité, pourcentage et valeur, applique la tolérance et qualifie chaque écart avec les trois critères.",
      "Vos constats ont cinq éléments, sont classés en niveau 1 ou 2, et les constats de niveau 2 vont dans une note confidentielle séparée du rapport.",
      "Dans l'exercice 1, vous avez rappelé qu'un taux de conformité élevé ne dit rien d'une entente entre fournisseurs.",
    ],
  },

  // ───────────────────────── 8. Erreurs fréquentes ─────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Auditer 100 % des dossiers au lieu d'un échantillon par risque — le temps manque ensuite pour la lecture transversale. Parade : score de risque écrit, taille calculée, 3 dossiers de contrôle (procédure 2).",
      "Écarter un pattern suspect parce que chaque dossier est irréprochable — la conformité d'un dossier et l'entente entre fournisseurs sont deux questions distinctes. Parade : lire toute la population, T_AO, TCD des gagnants, écarts de prix (procédure 5).",
      "Ne jamais croiser les achats avec l'inventaire — un achat payé sans entrée en stock est l'un des signaux les plus forts. Parade : rapprocher PO, GRN, facture et fiche de stock pour tous les dossiers de biens (procédure 4).",
      "Confondre « je soupçonne une collusion » avec « je peux l'affirmer » — conclure à la fraude relève de l'investigation. Parade : faits, chiffres, pièces ; Oui, Non ou À approfondir ; recommandation d'escalade (procédure 6).",
      "Se laisser rassurer par l'ancienneté d'un fournisseur « qu'on connaît depuis toujours » — c'est précisément ce qui retarde la détection. Parade : comparer prix, coordonnées et gagnants sans égard à la réputation.",
      "Saisir le montant du BC au lieu du montant payé, ou laisser vide une cellule sans objet — le palier et le score sont faussés. Parade : montant payé en C, Oui et « sans objet » en G ou F (procédure 3).",
      "Écraser une cellule calculée du gabarit, ou travailler dans le fichier modèle — l'échantillon ne repose plus sur rien. Parade : copie datée du classeur, seules E5, E6, E11 à E15 se saisissent (procédure 2).",
      "Prévenir le magasin la veille d'un comptage, ou classer « suspect » un écart sans recherche active — l'écart disparaît, ou l'accusation se retourne contre vous. Parade : comptage inopiné, six sources de justification, 48 heures (procédure 7).",
      "Mélanger faiblesses corrigibles et signaux d'escalade dans le même rapport — les constats les plus graves se noient et le bureau est alerté. Parade : deux niveaux, deux circuits (procédure 8).",
    ],
  },

  // ───────────────────────── 9. Réalisations + check-list ─────────────────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez produit une note de population de 64 dossiers pour 451 000 USD, rapprochée du grand livre (écart de 0,50 %) et confirmée par écrit, avec la répartition par palier et les dossiers à palier contestable.",
      "Vous avez complété l'onglet « Sélection de l'échantillon » (population 64, risque Modéré, 2 facteurs, taille 19, couverture 29,7 %) et sélectionné 19 dossiers par un score de risque écrit.",
      "Vous avez rempli l'onglet « Checklist par dossier » pour 19 dossiers, commenté chaque réserve avec sa pièce, et lu un taux de conformité global de 81,6 %.",
      "Vous avez rapproché 16 dossiers de biens avec leur réception et leur entrée en stock, et documenté une anomalie prioritaire (UVI-038, 2 566 USD non justifiés) par une recherche active.",
      "Vous avez lu 34 mises en concurrence et 112 offres, mesuré gagnants, écarts de prix, coordonnées et nouveaux entrants, et décidé d'escalader.",
      "Vous avez rempli la fiche de détection de collusion (4 indicateurs sur 5, niveau Élevé, investigation approfondie) sans accuser personne.",
      "Vous avez conduit un comptage inopiné de 25 références, calculé les écarts, testé péremption et FEFO, et qualifié deux références comme signal potentiel.",
      "Vous avez rédigé sept constats en deux niveaux, restitué le niveau 1 au bureau et transmis le niveau 2 à la présidente du comité.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer pourquoi un audit d'achats examine d'abord le processus et non le prix, avec un exemple de dossier non conforme au bon prix.",
      "Je sais déterminer le palier applicable (interne et bailleur) et la procédure exigée (achat direct, RFQ, ITB, RFP) pour un dossier.",
      "Je sais construire un échantillon par risque avec le gabarit, recalculer sa taille à la main et justifier mon choix par écrit.",
      "Je sais remplir la checklist par dossier, traiter les cas sans objet et lire un taux de conformité global et par question.",
      "Je sais faire un rapprochement en trois points et qualifier un achat sans entrée en stock après recherche active.",
      "Je sais identifier les indicateurs de collusion sur toute la population et remplir la fiche de détection sans conclure à la fraude.",
      "Je sais conduire un comptage inopiné, appliquer une tolérance, tester péremption et FEFO, et distinguer gestion et détournement potentiel.",
      "Je sais restituer mes constats en deux niveaux, avec un circuit confidentiel pour les signaux d'escalade.",
    ],
  },

  // ───────────────────────── 10. Clôture ─────────────────────────
  {
    type: 'closing',
    nextModuleHint: "Module 04 — Audit Financier & Comptable. Vous avez repéré à Uvira un achat payé sans réception visible et des commandes jumelles : le module suivant vous apprend à tester les pièces comptables, les rapprochements bancaires, les avances et l'éligibilité des charges, pour savoir où un paiement s'est réellement perdu.",
  },
]
