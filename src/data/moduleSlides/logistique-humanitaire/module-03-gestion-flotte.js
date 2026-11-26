// Module 03 — Gestion de Flotte & Transport en Zones Complexes
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates : carnet-de-bord-vehicule.xlsx
// et politique-utilisation-vehicules.docx) : théorie strictement utile à
// l'action, puis chaque procédure de gestion de flotte découpée en étapes
// (une diapositive par étape), appliquée à un cas fil rouge unique (ONG
// Kemora Santé, flotte de la base de Goma, Nord-Kivu — cas fictif), cas
// résolus, exercices corrigeables et check-lists d'auto-contrôle.
export default [
  {
    type: 'cover',
    title: 'Gestion de Flotte & Transport en Zones Complexes',
    hook: "En quelques semaines, vous aurez remis une flotte sous contrôle : un parc recensé, un carnet de bord que les chauffeurs remplissent juste, un tableau de bord qui donne le coût par kilomètre de chaque véhicule, une anomalie de carburant traitée avec méthode, une politique d'utilisation signée, des missions planifiées avec points de contact — et les consignes écrites pour un check-point ou un accident. Étape par étape, avec les fichiers de travail.",
  },
  {
    type: 'objectives',
    items: [
      "Recenser une flotte et renseigner l'onglet Véhicules de carnet-de-bord-vehicule.xlsx (identifiant, modèle, mise en service, consommation théorique justifiée), en produisant un parc complet prêt à alimenter tous les calculs.",
      "Former des conducteurs à la saisie du carnet de bord, puis saisir et contrôler les trajets dans l'onglet Trajets (chaînage des compteurs, plein à plein, revue hebdomadaire), en produisant un journal des trajets fiable et une revue du vendredi datée.",
      "Suivre l'entretien (plan préventif par kilométrage, onglet Entretien) et lire le Tableau de bord (coût par km par véhicule et par conducteur, rapprochement avec les bons de carburant), en produisant la synthèse mensuelle et une note de reporting bailleur.",
      "Détecter, qualifier et signaler une anomalie de consommation (lignes ANOMALIE, explications neutres écartées, pièces, test contradictoire), en produisant une note de signalement factuelle qui n'accuse personne.",
      "Rédiger, faire valider et faire signer la politique d'utilisation des véhicules section par section dans politique-utilisation-vehicules.docx, en produisant un document de 1 à 2 pages avec tableaux de priorité et de notification remplis.",
      "Planifier une mission transport (réquisition, choix du véhicule et du conducteur, itinéraire, temps réaliste, relais, check-ins) et gérer les conducteurs (dossier, heures de conduite, suivi), en produisant un ordre de mission, un plan de check-in et un planning de conduite.",
      "Appliquer les procédures de sécurité routière : check-point non officiel et accident de la route, en produisant une consigne écrite au dispatcheur justifiée par des principes et une fiche de rapport d'incident.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne demande pas de réciter des définitions : il vous fait construire, dans l'ordre réel d'une prise de poste de responsable de flotte, les huit livrables qu'un logisticien terrain doit pouvoir montrer à son coordinateur et à un auditeur de bailleur. Tout est bâti sur un cas fil rouge, puis vous le refaites seul(e) sur le cas de Tine (Tchad).",
    ],
    bullets: [
      "Livrable 1 — L'onglet Véhicules rempli : 4 véhicules, consommations théoriques de référence justifiées (Procédure 1).",
      "Livrable 2 — Des conducteurs formés, un journal des trajets saisi et contrôlé, une revue hebdomadaire datée (Procédures 2 et 3).",
      "Livrable 3 — Le suivi d'entretien et l'échéancier préventif de chaque véhicule (Procédure 4).",
      "Livrable 4 — Le Tableau de bord du mois, la note de coût par km et le rapprochement avec les bons de carburant (Procédure 5).",
      "Livrable 5 — Un dossier d'anomalie de consommation et sa note de signalement (Procédure 6).",
      "Livrable 6 — La politique d'utilisation des véhicules signée (Procédure 7).",
      "Livrable 7 — Un ordre de mission, un plan de check-in et un planning de conduite (Procédures 8 et 9).",
      "Livrable 8 — La consigne check-point au dispatcheur, la fiche de rapport d'incident et le paragraphe de politique mis à jour (Procédures 10 et 11, cas résolu).",
    ],
    example: {
      title: 'Le cas fil rouge de tout le module (fictif mais réaliste)',
      lines: [
        "Organisation : Kemora Santé, ONG médicale internationale (fictive), la même que dans le Module 01. Vous êtes logisticien(ne) terrain, nommé(e) responsable de la flotte de la base de Goma (Nord-Kivu, RDC).",
        "Flotte : 4 véhicules — V-01 Land Cruiser HZJ78, V-02 Hilux double cabine, V-03 Land Cruiser 200, V-04 Hiace minibus — qui soutiennent la réponse choléra de Lukando et la supervision d'un centre de santé appuyé dans le territoire de Rutshuru.",
        "Dates : prise de poste le lundi 2 mars 2026 ; premier incident de check-point le mercredi 25 mars 2026.",
        "Personnes (fictives) : Jean-Marc Ilunga, coordinateur logistique pays (votre responsable) ; Sylvie Matala, coordinatrice pays ; Marcel Tshibola, point focal sécurité ; Chantal Mbusa, dispatcheuse ; Dr Clarisse Kahindo, coordinatrice de projet à Lukando ; Hélène Kitoko, responsable du programme nutrition.",
        "Chauffeurs : Jean-Pierre Mumbere (V-01), Alice Kavira (V-02), Patrick Bahati (V-03, homonyme sans aucun lien avec le transporteur écarté au Module 01), Espoir Katembo (V-04).",
      ],
    },
  },
  {
    type: 'concept',
    title: "Votre point de départ : une flotte qui roule, mais que personne ne pilote",
    body: [
      "Le lundi 2 mars 2026 à 7h00, Jean-Marc Ilunga vous remet les clés de quatre véhicules et dix minutes d'explications. Rien n'est écrit : c'est la situation normale d'une reprise de flotte, et c'est la matière première de tout le module.",
    ],
    example: {
      title: 'Ce que vous avez noté dans votre carnet (lundi 2 mars, 7h10)',
      lines: [
        "« Les chauffeurs notent leurs trajets sur un cahier, mais pas tous, et les kilomètres sont à peu près. »",
        "« Personne ne sait ce que coûte un kilomètre de V-03. Le bailleur le demandera pour le rapport de mars. »",
        "« Deux coordinateurs de programme se disputent V-03 le vendredi midi. »",
        "« La dernière vidange ? Le garagiste ne s'en souvient plus. »",
        "« Il paraît que des check-points non officiels apparaissent par moments sur l'axe de Rutshuru. » (information orale du point focal sécurité)",
      ],
    },
    tip: "Recopiez chaque affirmation telle quelle, avec l'heure et le nom de la personne. Ce qui est écrit au jour 1 sert de point de comparaison à la fin du mois : c'est la preuve de ce que votre travail a changé.",
  },
  {
    type: 'stat-callout',
    stat: '15 %',
    caption: "L'écart de consommation, par rapport à la consommation théorique du véhicule, à partir duquel le classeur du module marque une ligne ANOMALIE — en plus comme en moins.",
    context: "Sur les 18 trajets de mars dans le fil rouge, 4 lignes dépassent ce seuil. Les 4 appartiennent au même véhicule, le même chauffeur. Vous apprendrez à lire ce signal sans accuser personne.",
  },
  {
    type: 'comparison-table',
    title: 'Pourquoi une flotte humanitaire ne se gère pas comme une flotte commerciale',
    columns: ['Critère', 'Flotte commerciale', 'Flotte humanitaire', 'Ce que vous en faites'],
    rows: [
      ['Terrain', "Routes planifiées, usure prévisible.", "Asphalte, piste latéritique, gués ; saison des pluies = impraticable.", "Maintenance calée sur les kilomètres réels ET le type de terrain, jamais sur un calendrier du siège."],
      ['Itinéraire', "Le plus court ou le moins cher.", "L'accès n'est jamais garanti ; le plus long est parfois le seul acceptable.", "Vérification d'itinéraire avant chaque départ non routinier (Procédure 8)."],
      ['Priorité', "Coût, délai, taux de remplissage.", "La sécurité du personnel prime sur l'efficience.", "Un trajet annulé pour raison de sécurité n'est jamais une perte à justifier."],
      ['Conducteur', "Horaires légaux, convention collective.", "Fatigue, isolement et check-point : un risque de sécurité, pas un confort social.", "Heures maximales, relais, pas de conduite de nuit (Procédures 7 et 9)."],
      ['Coût par km', "Comparé à un marché.", "Structurellement plus élevé : détours, pistes, escortes évitées, véhicules robustes.", "Savoir l'expliquer à un bailleur qui compare à un référentiel sans ce contexte (Procédure 5)."],
    ],
  },
  {
    type: 'concept',
    title: "Les heures de conduite : un calcul, pas une impression",
    body: [
      "Un chauffeur qui roule 11 heures d'affilée sur une piste dégradée, seul, dans une zone où un check-point peut apparaître à tout moment, n'a plus les réflexes pour négocier un passage ou éviter un accident. Une politique sérieuse fixe donc un maximum de 8 à 9 heures effectives de conduite par jour sur piste (moins en zone de tension élevée), impose un second conducteur ou un relais sur les trajets longs, et interdit la conduite de nuit hors urgence vitale documentée.",
      "Le piège classique : estimer le temps de trajet avec le chiffre optimiste affiché par défaut sur Google Maps. Sur piste dégradée, comptez environ une fois et demie ce temps pour une première estimation, puis corrigez avec vos propres chronométrages (règle de terrain à ajuster après vos cinq premiers trajets mesurés).",
    ],
    example: {
      title: 'Fil rouge — le calcul avant d\'accepter un aller-retour dans la journée',
      lines: [
        "Google Maps annonce 2 h 00 à l'aller sur une piste de 70 km → estimation terrain : 2 h 00 × 1,5 = 3 h 00 par sens.",
        "Aller-retour : 6 h 00 de conduite + 1 h 30 de supervision au centre de santé = 7 h 30 sur la route ; limite de la mission : 8 h → acceptable avec départ à 7 h 30 et retour avant 17 h 30.",
        "Si le temps estimé par sens passe à 4 h 30 : 9 h de conduite → refus d'un aller-retour dans la journée ; nuit sur place ou second conducteur.",
      ],
    },
    pitfall: "Accepter « on rentrera de nuit, exceptionnellement » parce que le programme est pressé. Ce « exceptionnellement » est le premier élément de tout rapport d'accident.",
  },
  {
    type: 'comparison-table',
    title: 'Règles de sécurité routière de base à inscrire dans votre politique',
    columns: ['Domaine', 'Règle standard (à adapter à votre ONG)', 'Pourquoi'],
    rows: [
      ['Ceinture', "Obligatoire pour tous les occupants, à toutes les places, sur tout trajet.", "Première cause de gravité des accidents sur piste."],
      ['Vitesse', "Plafond de 80 km/h sur route revêtue, 50 km/h sur piste, 20 à 30 km/h aux abords de camps et villages.", "Freinage et adhérence dégradés ; enfants et animaux sur la chaussée."],
      ['Nuit', "Retour à la base avant la tombée de la nuit (visez 17 h 30 à Goma) ; pas de conduite de nuit hors urgence vitale documentée.", "Visibilité, fatigue, check-points imprévisibles."],
      ['Alcool, téléphone', "Zéro alcool ; pas de téléphone en main au volant.", "Réflexes ; responsabilité de l'organisation engagée."],
      ['Passagers', "Seulement les personnes autorisées par l'ordre de mission ; aucun tiers « déposé en route ».", "Neutralité perçue ; assurance ; responsabilité."],
      ['Équipement', "Roue de secours, cric, sangle de remorquage, extincteur, trousse de secours, triangle, eau potable, lampe, carte du secteur.", "Une panne en zone isolée doit se gérer seul pendant plusieurs heures."],
      ['Contact', "Téléphone chargé, groupe WhatsApp ou radio, check-in à des points fixés avant le départ.", "Un problème sans check-in est détecté des heures trop tard."],
    ],
  },
  {
    type: 'concept',
    title: 'Le coût par kilomètre : voir une dérive avant qu\'elle ne coûte cher',
    body: [
      "Le cost-per-km est le coût d'exploitation d'un véhicule sur une période, divisé par les kilomètres parcourus sur la même période : carburant, entretien, réparations, assurance et amortissement. Il sert deux fois : en gestion interne (un coût par km qui monte de mois en mois sans mission exceptionnelle signale une panne qui s'aggrave ou une anomalie de consommation) et en reporting bailleur (la plupart des bailleurs institutionnels demandent un coût par km ou par mission pour justifier la ligne transport).",
      "Le Tableau de bord du classeur calcule un coût direct : carburant + entretien, divisé par les kilomètres. Assurance et amortissement s'ajoutent à la main dans votre note de reporting (Procédure 5, étape 5).",
    ],
    example: {
      title: 'Fil rouge — V-03, mars 2026 (arrêté au 25 mars)',
      lines: [
        "Kilomètres : 300 km. Carburant : 51,1 L × 1,80 USD/L = 91,98 USD. Entretien : 140 (freins) + 310 (suspension) = 450 USD.",
        "Coût direct = 91,98 + 450 = 541,98 USD ; coût par km = 541,98 ÷ 300 = 1,81 USD/km.",
        "Moyenne de la flotte : 1 033,18 USD ÷ 752 km = 1,37 USD/km. V-03 se situe 32 % au-dessus.",
      ],
    },
    tip: "Un coût par km mensuel est très sensible aux dépenses d'entretien en bloc (un jeu de pneus sur 150 km). Lisez-le toujours avec le détail carburant et entretien, puis sur trois mois glissants avant de conclure.",
  },
  {
    type: 'concept',
    title: "La politique d'utilisation des véhicules : l'arbitre écrit d'avance",
    body: [
      "Sans règle écrite, un véhicule de mission devient un objet de négociation informelle : celui qui crie le plus fort obtient le véhicule, quelle que soit l'urgence réelle. Une politique fixe, avec des critères écrits et connus de tous, qui peut réquisitionner (une fonction, pas un nom de personne), dans quel ordre de priorité (urgence médicale et sécurité toujours avant la logistique de routine), avec quel préavis, et ce qui est interdit (usage personnel, transport de tiers non autorisés, marchandises commerciales).",
      "Ce n'est pas un document théorique : c'est l'arbitre que vous invoquez à midi, un vendredi, quand deux coordinateurs réclament le même véhicule. Sans lui, on arbitre au rapport de force ; avec lui, sur des critères défendables devant n'importe qui.",
    ],
    example: {
      title: 'Fil rouge — vendredi 27 février, 12h15 (avant votre arrivée)',
      lines: [
        "Dr Kahindo veut V-03 lundi 6h pour une supervision choléra à Lukando. Hélène Kitoko veut V-03 le même jour pour une visite nutrition. Jean-Marc Ilunga tranche « au feeling » : V-03 à Kitoko, parce qu'elle a insisté.",
        "Résultat : supervision choléra reportée de 48 h. Aucun critère écrit n'a été invoqué, aucune trace n'existe.",
      ],
    },
    highlight: "Une politique non signée n'a aucune force face à un conflit d'usage : la signature des chauffeurs ET des responsables habilités est la moitié du travail (Procédure 7).",
  },
  {
    type: 'concept',
    title: "Le carnet de bord : un outil de contrôle, pas de la paperasse",
    body: [
      "Le carnet de bord (logbook) est le seul document qui permet de répondre, avec preuve, à trois questions : où était ce véhicule à telle date et heure, qui le conduisait, et sa consommation était-elle cohérente avec le trajet déclaré ? La dernière question en fait un outil de détection de fraude : un écart significatif et répété entre kilométrage déclaré et carburant consommé est le signal le plus fiable de détournement de carburant, l'un des vols les plus fréquents en contexte humanitaire parce qu'il se cache dans le bruit d'une activité normale.",
      "Le fuel management (bons de carburant numérotés, plein à plein, rapprochement mensuel entre carnet et bons, seuils d'alerte) rend cette fraude visible en quelques minutes de calcul plutôt qu'après des mois de pertes. Mais un carnet rempli n'est pas un carnet fiable : on peut arrondir les kilomètres, chaque jour, avec application.",
    ],
    bullets: [
      "Le kilométrage se relève sur le compteur, au départ et à l'arrivée, jamais estimé le soir.",
      "Le carburant se note en litres réellement pris, au plein à plein, avec le bon correspondant.",
      "Le carnet n'accuse jamais : il montre un écart, qu'on explique ou qu'on signale (Procédure 6).",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les quatre outils du module : à quoi sert chacun, à quoi il ne sert pas',
    columns: ['Outil', 'Sert à', 'Ne sert pas à', 'Règle de bon usage'],
    rows: [
      ['Excel (carnet-de-bord-vehicule.xlsx)', "Journal des trajets, entretien, coût par km, alertes automatiques. Suffit pour une flotte de moins d'une vingtaine de véhicules.", "Remplacer le contrôle physique du compteur et des bons.", "Saisir seulement les cellules prévues ; les formules calculent seules."],
      ['Google Sheets', "Même classeur, alimenté à plusieurs (chauffeurs, dispatcheur, logisticien) avec une connexion instable ; l'import depuis Excel conserve les formules.", "Éviter les règles de saisie : un classeur partagé sans responsable se dégrade vite.", "Un seul responsable de la saisie ; droits d'écriture limités."],
      ['Google Maps / suivi GPS', "Planifier : tracés alternatifs, temps réaliste ; suivre en direct si balise ou partage de position.", "Calculer la flotte ; ni certifier un itinéraire sûr.", "Croiser avec l'information sécuritaire et les alertes du cluster avant de décider."],
      ['WhatsApp Business', "Coordination dispatcheur–conducteur avec connexion faible : groupe par mission, check-in obligatoire.", "Conversations informelles sans trace.", "Format de message fixe ; heure et position à chaque check-in."],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Le classeur carnet-de-bord-vehicule.xlsx : ce que vous saisissez, ce qui se calcule seul',
    columns: ['Onglet', 'Vous saisissez', 'Calculé automatiquement', 'Plage utilisée par les formules'],
    rows: [
      ['Véhicules', "A Immatriculation, B Modèle, C Date mise en service, D Conso. théorique (L/100 km), E Statut.", "Rien.", "Lignes 5 à 14 : 10 véhicules au maximum."],
      ['Trajets', "A Date, B Immatriculation (liste), C Conducteur, D Motif, E Km départ, F Km arrivée, H Carburant pris (L).", "G Km parcourus, I Conso. /100 km, J Conso. théorique, K Écart vs théorique, L Anomalie, M Mois.", "Lignes 5 à 40 : 36 trajets au maximum."],
      ['Entretien', "A Date, B Immatriculation (liste), C Type d'intervention, D Kilométrage, E Coût (USD).", "F Mois.", "Lignes 5 à 20 : 16 interventions au maximum."],
      ['Tableau de bord', "Seulement B5 (prix du carburant, USD/L) et B6 (mois analysé, AAAA-MM).", "Synthèse par véhicule (lignes 10 à 13, total ligne 14) et par conducteur (lignes 18 à 21).", "4 véhicules et 4 conducteurs prévus ; au-delà, vous devez étendre le tableau."],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire opérationnel du module',
    terms: [
      { term: 'Cost-per-km', definition: "Coût d'exploitation d'un véhicule sur une période divisé par les kilomètres parcourus : l'indicateur de dérive et de justification de la ligne transport." },
      { term: 'Carnet de bord (logbook)', definition: "Registre chronologique de chaque trajet : date, conducteur, kilométrage départ et arrivée, motif, carburant. Preuve d'usage et outil de détection d'anomalie." },
      { term: 'Fuel management', definition: "Ensemble des procédures de suivi du carburant : bons numérotés, plein à plein, rapprochement mensuel avec le carnet, seuils d'alerte." },
      { term: 'Consommation théorique (ratio attendu)', definition: "Litres aux 100 km propres à un modèle et à un type de terrain ; référence de comparaison de la colonne J du classeur." },
      { term: 'Plein à plein', definition: "Méthode : remplir le réservoir à ras avant et après le trajet ; les litres ajoutés sont alors les litres réellement consommés." },
      { term: 'Chaînage des compteurs', definition: "Contrôle : le kilométrage de départ d'un trajet est égal au kilométrage d'arrivée du trajet précédent du même véhicule. Une rupture signale un trajet non déclaré." },
      { term: 'Ordre de mission', definition: "Document qui autorise un trajet : véhicule, conducteur, passagers, itinéraire, horaires, points de check-in." },
      { term: 'Check-in', definition: "Message du conducteur à un point et à une heure fixés avant le départ. L'absence de check-in déclenche une échelle d'alerte." },
      { term: 'Point focal sécurité', definition: "Personne désignée pour recevoir les alertes de sécurité et décider, avec la direction, de la conduite à tenir." },
      { term: 'Check-point non officiel', definition: "Barrage tenu par un groupe non identifié avec certitude, qui exige parfois un « droit de passage » en argent ou en nature." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Votre feuille de route : 11 procédures, 8 livrables',
    columns: ['Procédure', 'Quand', 'Livrable produit'],
    rows: [
      ['1 — Recenser la flotte', 'Jour 1', "Onglet Véhicules rempli, consommations de référence"],
      ['2 — Former les conducteurs au carnet de bord', 'Jours 1 et 2', "Conducteurs formés, carnets et règles de contrôle en place"],
      ['3 — Saisir et contrôler les trajets', 'En continu, revue chaque vendredi', "Onglet Trajets saisi, chaîné, contrôlé"],
      ['4 — Suivre l\'entretien préventif', 'Jours 3 à 5, puis à chaque intervention', "Onglet Entretien, échéancier par véhicule"],
      ['5 — Lire le tableau de bord et rendre compte', 'Chaque fin de mois', "Synthèse du mois, note de coût par km, rapprochement bons de carburant"],
      ['6 — Traiter une anomalie de consommation', 'Dès un signal en revue hebdomadaire', "Dossier d'anomalie et note de signalement"],
      ['7 — Rédiger la politique d\'utilisation', 'Semaine 1', "politique-utilisation-vehicules.docx signée"],
      ['8 — Planifier une mission transport', 'Avant chaque départ significatif', "Ordre de mission, plan de check-in"],
      ['9 — Gérer les conducteurs', 'Semaine 1, puis chaque semaine', "Dossiers conducteurs, planning de conduite"],
      ['10 — Gérer un check-point', 'Briefing permanent, protocole en cas d\'incident', "Consigne au dispatcheur, rapport d'incident"],
      ['11 — Gérer un accident de la route', 'Briefing permanent, protocole en cas d\'accident', "Fiche de rapport d'accident, décision de remise en service"],
    ],
  },

  // ───────────── PROCÉDURE 1 — Recenser la flotte ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: "Faire l'inventaire physique de chaque véhicule",
    intro: "Lundi 2 mars, 7h15–8h00. Avant d'ouvrir Excel, vous regardez chaque véhicule de vos yeux. Il vous faut : un téléphone (photos), une fiche papier par véhicule et la liste des clés.",
    steps: [
      {
        title: 'Faites le tour de chaque véhicule',
        actions: [
          "Relevez la plaque, la marque, le modèle et l'année si elle est connue.",
          "Relevez le kilométrage au compteur et photographiez le tableau de bord (compteur et jauge visibles).",
          "Vérifiez les documents à bord : carte grise, assurance, contrôle technique, autorisations.",
          "Contrôlez l'équipement de sécurité : roue de secours, cric, extincteur, trousse de secours, triangle.",
        ],
      },
      {
        title: 'Attribuez un identifiant court et unique',
        actions: [
          "Numérotez V-01, V-02… dans l'ordre de l'inventaire.",
          "Collez une étiquette lisible dans le véhicule : le même identifiant servira dans la fiche, le carnet papier et le classeur.",
        ],
      },
    ],
    table: {
      columns: ['ID', 'Véhicule', 'Compteur au 02/03', 'Documents', 'Observation'],
      rows: [
        ['V-01', 'Land Cruiser HZJ78', '40 120 km', 'Complets', 'Pneus arrière usés'],
        ['V-02', 'Hilux double cabine', '15 230 km', "Assurance expire le 31/03", 'RAS'],
        ['V-03', 'Land Cruiser 200', '61 410 km', 'Complets', 'Date de dernière vidange inconnue'],
        ['V-04', 'Hiace (minibus)', '22 110 km', 'Complets', 'Extincteur absent'],
      ],
    },
    result: "Quatre fiches d'inventaire datées et quatre photos de compteur. Le compteur relevé est la première valeur de « Km départ » de chaque véhicule.",
    pitfall: "Recopier le kilométrage de mémoire ou d'une ancienne fiche. Le premier Km départ doit être celui que vous avez lu et photographié vous-même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Fixer la consommation théorique de référence de chaque modèle',
    intro: "La colonne D de l'onglet Véhicules sert de référence à toute la détection d'anomalie. Une référence fausse produit de fausses alertes, ou aucune alerte. Il vous faut : la fiche constructeur ou le manuel, le garagiste de la marque et la nature de vos trajets.",
    steps: [
      {
        title: 'Cherchez la donnée constructeur',
        actions: [
          "Ouvrez le manuel ou la fiche technique du modèle ; relevez la consommation mixte en L/100 km.",
          "Si le document manque, demandez au garagiste de la marque la consommation habituelle du modèle.",
          "Notez la source et la date dans votre fiche d'inventaire.",
        ],
      },
      {
        title: 'Contrôlez la plausibilité',
        actions: [
          "Comparez à des modèles de même catégorie : un pick-up 4x4 tourne autour de 10 à 12 L/100 km, un grand 4x4 plus lourd autour de 12 à 15 L/100 km.",
          "Gardez la valeur constructeur au départ ; vous la recalerez après un mois de trajets réels (Procédure 5).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — références retenues le 02/03',
      lines: [
        "V-01 Land Cruiser HZJ78 : 14,5 L/100 km (garagiste de Goma, 02/03).",
        "V-02 Hilux : 11,0 — V-03 Land Cruiser 200 : 15,0 — V-04 Hiace : 12,5 (manuels et garagiste).",
        "Décision : valeurs conservées ; recalage prévu fin mars sur la base de trajets mesurés.",
      ],
    },
    result: "Quatre valeurs de référence, chacune avec sa source et sa date.",
    tip: "Ne modifiez jamais une référence en cours de mois sans le noter : changer la colonne D recalcule tout l'historique, et une anomalie peut disparaître d'un coup.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: "Remplir l'onglet « Véhicules » colonne par colonne",
    intro: "Ouvrez carnet-de-bord-vehicule.xlsx et enregistrez-le tout de suite sous 2026-03-02_Carnet-de-bord_Flotte-Goma_v01.xlsx. Le template est livré avec 4 lignes d'exemple (lignes 5 à 8) : dans une vraie mission, vous écrasez leur contenu par vos véhicules sans supprimer les lignes. Ici, vos valeurs sont celles du template : vous pouvez donc vérifier votre saisie.",
    steps: [
      {
        title: 'Saisissez les colonnes A à E ligne par ligne',
        actions: [
          "A Immatriculation : l'identifiant court (V-01). Il alimente la liste déroulante de l'onglet Trajets.",
          "B Modèle : marque et modèle comme sur la carte grise (Toyota Land Cruiser HZJ78).",
          "C Date mise en service : au format AAAA-MM-JJ (2023-03-01).",
          "D Conso. théorique (L/100 km) : un nombre avec la virgule décimale (14,5), sans unité.",
          "E Statut : En service, En réparation ou Hors service.",
        ],
      },
      {
        title: 'Respectez les limites du classeur',
        actions: [
          "N'écrivez qu'entre les lignes 5 et 14 : les formules de Trajets cherchent la consommation dans Véhicules!A5:D14.",
          "Ne déplacez pas la légende de la ligne 15.",
        ],
      },
    ],
    table: {
      columns: ['A Immatriculation', 'B Modèle', 'C Date mise en service', 'D Conso. théorique', 'E Statut'],
      rows: [
        ['V-01', 'Toyota Land Cruiser HZJ78', '2023-03-01', '14,5', 'En service'],
        ['V-02', 'Toyota Hilux Double Cabine', '2022-07-15', '11,0', 'En service'],
        ['V-03', 'Toyota Land Cruiser 200', '2021-11-10', '15,0', 'En service'],
        ['V-04', 'Toyota Hiace (minibus)', '2020-05-20', '12,5', 'En service'],
      ],
    },
    pitfall: "Saisir « 14.5 » avec un point dans un Excel réglé en français, ou « 14,5 L » avec l'unité : la cellule devient du texte, la colonne J reste vide et plus aucune anomalie n'est signalée pour ce véhicule.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Vérifier les liens du classeur et préparer une flotte de plus de 4 véhicules',
    intro: "Trois onglets lisent l'onglet Véhicules. Avant d'aller plus loin, vous vérifiez que la chaîne fonctionne : un lien cassé ici fausse tout le reste.",
    steps: [
      {
        title: 'Testez la chaîne',
        actions: [
          "Dans l'onglet Trajets, cliquez sur B5 : la liste déroulante doit proposer V-01 à V-04.",
          "Dans le Tableau de bord, vérifiez que A10 à A13 affichent V-01 à V-04 (formules =Véhicules!A5 à =Véhicules!A8).",
          "Saisissez un trajet d'essai en ligne libre, contrôlez la colonne J, puis effacez la ligne.",
        ],
      },
      {
        title: 'Si votre flotte dépasse 4 véhicules',
        actions: [
          "Ajoutez le véhicule en ligne 9 de l'onglet Véhicules (10 véhicules au maximum).",
          "Dans le Tableau de bord, insérez une ligne au-dessus de la ligne du dernier véhicule : elle entre dans la plage du total et de la surbrillance.",
          "Recopiez les formules de la ligne voisine, puis remplacez la formule de la colonne A de la nouvelle ligne par =Véhicules!A9.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — test du 02/03, 8h50',
      lines: [
        "Ligne d'essai : V-03, 100 km, 15 L → colonne J = 15,0 ; I = 15,0 ; K = 0 % ; L = OK. Ligne effacée.",
        "Fichier enregistré : 2026-03-02_Carnet-de-bord_Flotte-Goma_v01.xlsx.",
      ],
    },
    result: "Livrable 1 terminé : onglet Véhicules rempli, liens vérifiés, fichier v01 daté enregistré.",
    pitfall: "Ajouter un 5e véhicule dans l'onglet Véhicules sans l'ajouter au Tableau de bord : il roule, consomme, mais son coût n'apparaît dans aucun total.",
  },

  // ───────────── PROCÉDURE 2 — Former les conducteurs ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 4',
    title: 'Préparer la session de formation des conducteurs',
    intro: "Un carnet mal rempli parce que mal expliqué est pire qu'un carnet absent : il donne une fausse impression de contrôle. Lundi 2 mars, 7h30, vous consacrez 45 minutes aux quatre chauffeurs AVANT d'exiger quoi que ce soit.",
    steps: [
      {
        title: 'Préparez le matériel',
        actions: [
          "Préparez un carnet de poche par véhicule avec 6 rubriques : date, conducteur, km départ, km arrivée, litres pris, motif.",
          "Préparez une ligne exemple correcte et une ligne volontairement fausse à corriger ensemble.",
          "Convoquez les 4 chauffeurs et la dispatcheuse au garage, à côté de leur véhicule, pas en salle.",
        ],
      },
      {
        title: 'Fixez votre message',
        actions: [
          "Le carnet protège le chauffeur : il prouve où il était, qu'il n'a pas pris de risque inutile, et qu'il n'a pas consommé plus que le véhicule ne l'exige.",
          "Vous ne cherchez pas un coupable : vous cherchez des chiffres justes.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — les deux lignes préparées le 02/03',
      lines: [
        "Ligne correcte : 02/03 | Jean-Pierre Mumbere | 40120 | 40180 | 8,9 L | Approvisionnement carburant Goma.",
        "Ligne fausse à corriger : « lundi | JP | ~40200 | 40250 | plein | course ».",
      ],
    },
    result: "Matériel prêt, message clair, les 5 personnes convoquées pour 7h30 au garage.",
    tip: "Tenez la session à côté du véhicule : le geste de lire le compteur s'apprend en le faisant, pas en l'écoutant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 4',
    title: 'Montrer les six données à noter et les gestes qui les rendent justes',
    intro: "Pour chaque donnée, vous montrez le geste sur le véhicule. Une règle abstraite (« notez le kilométrage ») n'est pas une consigne ; « lisez le compteur avant de démarrer » en est une.",
    steps: [
      {
        title: 'Les données et les gestes',
        actions: [
          "Date et conducteur : la date du trajet, et le nom de la personne qui conduit, pas de celle qui écrit.",
          "Km départ : lu sur le compteur avant de démarrer. Km arrivée : lu sur le compteur à l'arrivée, avant de quitter le véhicule.",
          "Carburant : plein à plein. Au retour, le réservoir est rempli à ras ; les litres ajoutés sont notés avec le numéro du bon.",
          "Motif : une phrase qui dit où et pourquoi (« Supervision médicale Rutshuru »), pas « course » ni « mission ».",
        ],
      },
      {
        title: 'Expliquez ce qui se passe ensuite',
        actions: [
          "Chaque soir, la dispatcheuse recopie les lignes dans l'onglet Trajets : les calculs sont automatiques.",
          "Une ligne rouge n'est pas une accusation : c'est une question posée au véhicule.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — le plein à plein expliqué sur V-01',
      lines: [
        "Départ : réservoir plein. Retour après 60 km : le pompiste remplit à ras → 8,9 L ajoutés.",
        "Ces 8,9 L sont ceux consommés sur les 60 km : 8,9 ÷ 60 × 100 = 14,8 L/100 km, pour 14,5 attendus.",
      ],
    },
    pitfall: "Accepter « j'ai pris du carburant sans faire le plein » : les litres notés ne correspondent plus au trajet et le classeur affiche de fausses anomalies.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 4',
    title: 'Faire pratiquer chaque conducteur et valider la compréhension',
    intro: "Personne ne retient une consigne qu'il n'a pas appliquée une fois. Chaque conducteur remplit deux lignes devant vous : c'est là que vous trouvez ce qui n'a pas été compris.",
    steps: [
      {
        title: 'Faites remplir deux lignes à chaque chauffeur',
        actions: [
          "Donnez à chacun un scénario écrit : un trajet de 35 km avec 3,9 L ; un trajet dont le compteur de départ diffère du précédent.",
          "Corrigez devant tous : chaque erreur est l'occasion de rappeler une règle.",
          "Validez quand la ligne est sans rature, avec des kilomètres croissants, des litres au dixième et un motif précis.",
        ],
      },
      {
        title: 'Notez les erreurs vues et faites signer',
        actions: [
          "Listez les erreurs pour les rappeler à la prochaine réunion de flotte.",
          "Faites signer une feuille d'émargement par chaque conducteur : elle prouve qu'il a été formé.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — erreurs observées le 02/03 en séance',
      lines: [
        "Espoir Katembo : conducteur oublié sur la ligne. Alice Kavira : « 3.8 » avec un point, sans unité.",
        "Patrick Bahati : motif « course ». Jean-Pierre Mumbere : aucune erreur.",
        "Toutes corrigées en séance ; les quatre chauffeurs ont signé l'émargement à 8h20.",
      ],
    },
    result: "Quatre chauffeurs ont rempli chacun deux lignes justes ; une feuille d'émargement signée est classée dans le dossier flotte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 4',
    title: 'Installer les règles de contrôle qui suivent la formation',
    intro: "Une formation sans contrôle s'oublie en dix jours. Vous fixez dès le premier jour qui contrôle quoi, à quelle fréquence, et ce qui se passe quand le carnet n'est pas à jour.",
    steps: [
      {
        title: 'Fixez le rythme des contrôles',
        actions: [
          "Chaque soir : la dispatcheuse recopie les lignes dans Trajets et vérifie que chaque Km départ égale le Km arrivée précédent du même véhicule.",
          "Une rupture est signalée au chauffeur le lendemain matin, pas en fin de mois.",
          "Chaque vendredi : vous faites la revue de l'onglet Trajets (Procédure 3, étape 5). Chaque mois : rapprochement avec les bons de carburant (Procédure 5).",
        ],
      },
      {
        title: 'Fixez la règle de tolérance',
        actions: [
          "Première semaine : erreurs corrigées sans sanction.",
          "À partir de la deuxième semaine : un carnet pas à jour empêche le départ suivant du véhicule jusqu'à régularisation.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — la règle affichée dans chaque véhicule dès le 09/03',
      lines: [
        "« Pas de carnet à jour, pas de départ. Compteur lu au départ et à l'arrivée. Plein à plein, bon joint. »",
        "Responsable du contrôle quotidien : Chantal Mbusa, dispatcheuse. Revue du vendredi : le logisticien responsable de flotte.",
      ],
    },
    result: "Conducteurs formés et règles de contrôle affichées : la première moitié du Livrable 2 est en place.",
    pitfall: "Sanctionner la première erreur d'un chauffeur formé le matin même : vous obtenez des carnets embellis, donc illisibles, au lieu de carnets corrigés.",
  },

  // ───────────── PROCÉDURE 3 — Saisir et contrôler les trajets ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: "Ouvrir l'onglet « Trajets » et distinguer ce qui se saisit de ce qui se calcule",
    intro: "Dès le premier trajet de l'après-midi du 2 mars, l'onglet Trajets devient votre journal. Il contient 13 colonnes : 7 à saisir, 6 qui se calculent seules.",
    steps: [
      {
        title: 'Repérez les 7 colonnes de saisie',
        actions: [
          "A Date, B Immatriculation (liste déroulante), C Conducteur, D Motif du trajet.",
          "E Km départ, F Km arrivée, H Carburant pris (L).",
          "Ce sont les seules cellules à remplir à la main.",
        ],
      },
      {
        title: 'Repérez les 6 colonnes calculées',
        actions: [
          "G Km parcourus, I Conso. /100km, J Conso. théorique, K Écart vs théorique, L Anomalie, M Mois.",
          "Ne saisissez, ne collez et ne supprimez jamais rien dans G, I, J, K, L, M. Les formules sont prévues sur les lignes 5 à 40 (36 trajets).",
        ],
      },
    ],
    table: {
      columns: ['Colonne', 'Titre', 'Ce que la formule fait (affichage Excel en français)'],
      rows: [
        ['G', 'Km parcourus', "=SI(ET(E5<>\"\";F5<>\"\");F5-E5;\"\")"],
        ['I', 'Conso. /100km', "(Carburant ÷ Km parcourus) × 100, vide si Km = 0"],
        ['J', 'Conso. théorique', "RECHERCHEV du véhicule dans Véhicules!A5:D14, colonne 4"],
        ['K', 'Écart vs théorique', "(I − J) ÷ J, en pourcentage"],
        ['L', 'Anomalie', "ANOMALIE si la valeur absolue de K dépasse 15 %, sinon OK"],
        ['M', 'Mois', "=TEXTE(A5;\"aaaa-mm\") : sert de clé au Tableau de bord"],
      ],
    },
    result: "Vous savez quelles 7 cellules saisir à chaque trajet, et que les 6 autres ne se touchent pas.",
    pitfall: "Écraser une formule de la colonne L ou M en tapant « OK » à la main : la ligne ne sera plus jamais recalculée, et la colonne M, qui sert de clé au Tableau de bord, devient fausse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Saisir un trajet : les 7 cellules, dans l\'ordre',
    intro: "Chaque soir, la dispatcheuse recopie les lignes des carnets papier dans l'onglet Trajets, dans l'ordre chronologique. Prenez le temps de bien saisir la première ligne : toutes les autres sont identiques.",
    steps: [
      {
        title: 'Saisissez les 7 cellules',
        actions: [
          "A : la date au format AAAA-MM-JJ (2026-03-04).",
          "B : choisissez V-03 dans la liste déroulante ; ne le tapez pas.",
          "C : le conducteur, avec exactement la même orthographe à chaque ligne (Patrick Bahati) : le Tableau de bord compte par nom exact.",
          "D : le motif (Supervision médicale Rutshuru).",
          "E puis F : les kilomètres lus sur le compteur (61410 puis 61460), sans espace.",
          "H : les litres pris au plein à plein (7,6), avec la virgule décimale.",
        ],
      },
      {
        title: 'Passez à la ligne suivante',
        actions: [
          "Une ligne par trajet, ou par cycle de plein à plein ; aucune ligne vide entre deux trajets.",
          "Si le véhicule fait deux trajets entre deux pleins, une seule ligne : Km départ du premier, Km arrivée du dernier, motif « 2 trajets : … ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — deux lignes saisies',
      lines: [
        "Ligne 5 : 2026-03-02 | V-01 | Jean-Pierre Mumbere | Approvisionnement carburant Goma | 40120 | 40180 | 8,9 (G, I, J, K, L, M se remplissent).",
        "Ligne 7 : 2026-03-04 | V-03 | Patrick Bahati | Supervision médicale Rutshuru | 61410 | 61460 | 7,6.",
      ],
    },
    pitfall: "Laisser la case Carburant vide quand le véhicule n'a pas fait le plein : la consommation est calculée à 0, l'écart à −100 % et la ligne s'affiche ANOMALIE. Regroupez les trajets jusqu'au prochain plein.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Lire les colonnes calculées et vérifier le calcul à la main',
    intro: "Ne faites pas confiance à une formule que vous n'avez pas refaite à la main une fois. Vérifiez une ligne normale, puis une ligne en anomalie : vous saurez ensuite lire n'importe quelle ligne en deux secondes.",
    steps: [
      {
        title: 'Refaites le calcul de la ligne 7 (V-03, 04/03)',
        actions: [
          "G : 61 460 − 61 410 = 50 km.",
          "I : 7,6 ÷ 50 × 100 = 15,2 L/100 km. J : 15,0 (lue dans Véhicules).",
          "K : (15,2 − 15,0) ÷ 15,0 = +1,3 %. L : OK, car l'écart est inférieur à 15 %.",
        ],
      },
      {
        title: "Lisez l'écart dans les deux sens",
        actions: [
          "Écart positif élevé : le véhicule consomme plus que prévu.",
          "Écart négatif élevé : carburant non noté, kilomètres surévalués ou plein incomplet. C'est aussi un signal.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — la ligne 14 du même véhicule, 13/03',
      lines: [
        "61 510 → 61 560 = 50 km ; 8,8 L → 17,6 L/100 km ; J = 15,0.",
        "K = (17,6 − 15,0) ÷ 15,0 = +17,3 % → L = ANOMALIE : la ligne s'affiche en rouge.",
      ],
    },
    tip: "Une ligne rouge isolée n'est pas une preuve : un plein incomplet, un détour ou une longue attente suffisent. Ce qui compte est la répétition (Procédure 6).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Contrôler la saisie : chaînage des compteurs et contrôles de forme',
    intro: "Le classeur calcule juste ce qu'on lui donne. Deux contrôles rapides, chaque semaine, garantissent que les données sont fiables avant d'être interprétées.",
    steps: [
      {
        title: 'Contrôlez le chaînage des compteurs',
        actions: [
          "Activez le filtre (Données > Filtrer) et filtrez la colonne B sur un seul véhicule.",
          "Vérifiez que chaque Km départ est égal au Km arrivée de la ligne précédente du même véhicule.",
          "Toute rupture signale un trajet non déclaré ou une erreur de lecture : interrogez le conducteur le lendemain matin.",
        ],
      },
      {
        title: 'Contrôlez la forme',
        actions: [
          "Dates réelles au format AAAA-MM-JJ : sinon la colonne M est fausse et le trajet disparaît du Tableau de bord.",
          "Aucune cellule E, F ou H vide ; aucun Km arrivée inférieur au Km départ.",
          "Même orthographe du conducteur d'une ligne à l'autre.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — chaînage des compteurs au 25/03',
      lines: [
        "V-03 : 61410→61460, 61460→61510, 61510→61560, 61560→61610, 61610→61660, 61660→61710 : chaque départ égale l'arrivée précédente.",
        "V-01 : 40120→40180, 40180→40202, 40202→40250, 40250→40310, 40310→40332 : chaîne continue.",
      ],
    },
    result: "Les 18 trajets du 2 au 25 mars sont chaînés sans rupture : aucun kilomètre caché.",
    pitfall: "Conclure « pas de fraude » parce que la chaîne est continue. Elle écarte les trajets cachés ; elle ne dit rien du carburant ni de kilomètres arrondis.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Faire la revue hebdomadaire du vendredi et noter la décision',
    intro: "Le carnet est un outil d'alerte précoce à condition d'être relu chaque semaine, pas seulement en fin de mois. Quinze minutes, toujours le même jour, toujours à la même heure.",
    steps: [
      {
        title: 'Faites la revue en 15 minutes',
        actions: [
          "Filtrez la colonne L sur « ANOMALIE » ; notez véhicule, conducteur, date et écart de chaque ligne.",
          "Pour chaque ligne, cherchez une explication neutre dans la colonne D (mission exceptionnelle, charge, attente).",
          "Comptez les lignes rouges par véhicule sur les 15 derniers jours.",
        ],
      },
      {
        title: 'Décidez et tracez',
        actions: [
          "0 ou 1 ligne isolée : observation, à relire vendredi prochain.",
          "Deux lignes ou plus sur le même véhicule : ouvrez la Procédure 6.",
          "Enregistrez dans votre journal de flotte : semaine, nombre de trajets, nombre d'anomalies, décision.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — trois revues du vendredi',
      lines: [
        "Vendredi 6 mars : 5 trajets, 0 anomalie → RAS.",
        "Vendredi 13 mars : 5 trajets, 1 anomalie (V-03, +17,3 %) → observation, à relire.",
        "Vendredi 20 mars : 5 trajets ; V-03 : 3 lignes rouges en 8 jours (13, 18 et 20/03) → Procédure 6 ouverte.",
      ],
    },
    result: "Livrable 2 terminé : conducteurs formés, trajets saisis et chaînés, revue du vendredi datée dans le journal de flotte.",
    tip: "Notez aussi les semaines sans anomalie : une revue « RAS » datée est la preuve, devant un auditeur, que le contrôle existe.",
  },

  // ───────────── PROCÉDURE 4 — Suivre l'entretien préventif ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 3',
    title: "Définir le plan d'entretien préventif par kilométrage",
    intro: "Une maintenance calée sur un calendrier du siège ne vaut rien sur piste dégradée : elle se cale sur les kilomètres réels et le type de terrain. Vous construisez, avec le garagiste, un plan d'une page que tout le monde comprend.",
    steps: [
      {
        title: 'Choisissez les interventions et leur intervalle',
        actions: [
          "Listez les contrôles qui évitent les pannes en zone isolée : vidange et filtres, filtre à air, freins, pneus, suspension et graissage, courroies et batterie.",
          "Demandez au garagiste de la marque l'intervalle en kilomètres adapté à la piste : l'intervalle « route » du constructeur est trop long.",
          "Retenez un intervalle en kilomètres ET un intervalle maximal en mois : ce qui arrive en premier déclenche l'intervention.",
        ],
      },
      {
        title: 'Écrivez le plan et répartissez les rôles',
        actions: [
          "Un tableau d'une page, affiché au garage.",
          "Marquez ce qui relève du conducteur avant chaque départ : niveaux, pression des pneus, lumières.",
        ],
      },
    ],
    table: {
      columns: ['Intervention', 'Intervalle indicatif sur piste', 'Qui'],
      rows: [
        ['Vidange moteur + filtres huile et carburant', 'Tous les 5 000 km ou 3 mois', 'Garage'],
        ['Filtre à air : nettoyage et contrôle', 'Chaque semaine en saison sèche (poussière)', 'Conducteur + garage'],
        ['Freins : plaquettes, disques, liquide', 'Tous les 5 000 km', 'Garage'],
        ['Pneus : pression, usure, permutation', 'Pression chaque semaine ; permutation tous les 10 000 km', 'Conducteur, garage'],
        ['Suspension, rotules, graissage', 'Tous les 5 000 km', 'Garage'],
        ['Courroies, durites, batterie', 'Tous les 10 000 km', 'Garage'],
      ],
    },
    result: "Un plan de maintenance validé par le garagiste, avec un intervalle en kilomètres et en mois pour chaque intervention.",
    tip: "Ces intervalles sont des repères de terrain, pas des normes : validez-les toujours avec le manuel du véhicule et le garagiste, et raccourcissez-les en saison des pluies.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 3',
    title: "Saisir chaque intervention dans l'onglet « Entretien »",
    intro: "Chaque intervention, même petite, est saisie le jour où la facture arrive. L'onglet Entretien contient 5 colonnes à saisir (A à E) ; F se calcule. Il accepte 16 interventions (lignes 5 à 20) et alimente la colonne « Coût entretien » du Tableau de bord.",
    steps: [
      {
        title: 'Saisissez les colonnes A à E',
        actions: [
          "A Date de l'intervention (AAAA-MM-JJ). B Immatriculation : choisissez dans la liste déroulante.",
          "C Type d'intervention : précis (« Contrôle freins + plaquettes », pas « entretien »).",
          "D Kilométrage : lu sur le compteur le jour de l'intervention.",
          "E Coût (USD) : montant de la facture, pièces et main-d'œuvre, converti au taux du jour s'il est en francs congolais ; nombre seul, sans « USD ».",
        ],
      },
      {
        title: 'Rattachez la facture',
        actions: [
          "Le template n'a pas de colonne facture : agrafez la pièce à la fiche du véhicule et classez-la par date.",
          "Contrôlez que la colonne F affiche le mois (2026-03) : elle se calcule seule.",
        ],
      },
    ],
    table: {
      columns: ['A Date', 'B Immatriculation', 'C Type', 'D Kilométrage', 'E Coût (USD)'],
      rows: [
        ['2026-03-11', 'V-01', 'Vidange + filtres', '40 250', '85'],
        ['2026-03-08', 'V-03', 'Contrôle freins + plaquettes', '61 460', '140'],
        ['2026-03-14', 'V-02', 'Pneus (2x avant)', '15 340', '220'],
        ['2026-03-13', 'V-04', 'Vidange + filtres', '22 170', '80'],
        ['2026-03-19', 'V-03', 'Réparation suspension', '61 610', '310'],
      ],
    },
    result: "Cinq interventions saisies pour mars : 835 USD au total, chacune avec son kilométrage et son mois.",
    pitfall: "Taper « 85 USD » ou « 85$ » : la cellule devient du texte et la somme du Tableau de bord ignore l'intervention sans aucun message.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 3',
    title: 'Piloter les échéances et décider quand immobiliser un véhicule',
    intro: "Un tableau d'entretien ne sert que s'il dit, pour chaque véhicule, ce qui arrive et quand. Une fois par semaine, vous calculez l'échéance suivante à partir du dernier kilométrage d'intervention et du compteur actuel.",
    steps: [
      {
        title: 'Calculez chaque échéance',
        actions: [
          "Prenez le kilométrage de la dernière intervention du même type dans l'onglet Entretien.",
          "Ajoutez l'intervalle du plan : échéance = km de la dernière intervention + 5 000 (pour la vidange).",
          "Soustrayez le compteur actuel (dernière ligne du véhicule dans Trajets) : c'est le nombre de kilomètres restants.",
          "S'il reste moins de 500 km, planifiez l'intervention cette semaine.",
        ],
      },
      {
        title: 'Traitez les inconnues',
        actions: [
          "Aucun historique pour un type d'intervention : considérez l'échéance comme dépassée et planifiez-la sous 7 jours.",
          "Immobilisez le véhicule si un contrôle de sécurité (freins, pneus, direction) est en retard.",
        ],
      },
    ],
    table: {
      columns: ['Véhicule', 'Dernière vidange (km)', 'Prochaine à (km)', 'Compteur au 25/03', 'Reste'],
      rows: [
        ['V-01', '40 250 (11/03)', '45 250', '40 332', '4 918 km'],
        ['V-02', 'inconnue', '—', '15 380', 'À planifier sous 7 jours'],
        ['V-03', 'inconnue', '—', '61 710', 'À planifier sous 7 jours, en premier'],
        ['V-04', '22 170 (13/03)', '27 170', '22 200', '4 970 km'],
      ],
    },
    result: "Livrable 3 terminé : un échéancier d'une page qui montre quels véhicules passent au garage et dans quel ordre.",
    pitfall: "Reporter une vidange « parce que le véhicule roule encore bien ». Sur piste dégradée, la panne arrive presque toujours au pire moment : en route, isolé, de nuit — jamais tranquillement au garage.",
  },

  // ───────────── PROCÉDURE 5 — Tableau de bord ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 6',
    title: "Régler les deux paramètres du Tableau de bord : B5 et B6",
    intro: "L'onglet Tableau de bord se calcule seul à partir de Trajets et d'Entretien. Vous ne touchez qu'à deux cellules en surbrillance jaune : B5 et B6. Ne modifiez aucune formule.",
    steps: [
      {
        title: 'B5 — Prix du carburant (USD/L)',
        actions: [
          "Calculez le prix moyen du mois à partir des bons de carburant : total payé ÷ total des litres.",
          "Saisissez-le avec la virgule décimale (1,8), sans symbole ni unité.",
        ],
      },
      {
        title: 'B6 — Mois analysé (AAAA-MM)',
        actions: [
          "Saisissez le mois comme du texte : '2026-03 (avec l'apostrophe devant).",
          "Pour analyser un autre mois, changez seulement B6 : toute la synthèse se recalcule.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — réglages du 25/03',
      lines: [
        "B5 = 1,8 : prix moyen payé en mars sur les bons de carburant de la base de Goma.",
        "B6 = 2026-03 : synthèse du mois de mars, arrêtée au 25/03 (trajets saisis à cette date).",
      ],
    },
    result: "Les paramètres sont réglés et la synthèse se recalcule à chaque saisie.",
    pitfall: "Taper 2026-03 sans apostrophe : Excel le transforme en date (mars 2026), la valeur ne correspond plus à la colonne M de Trajets et la synthèse affiche des zéros partout.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 6',
    title: 'Lire la synthèse par véhicule, colonne par colonne',
    intro: "La synthèse par véhicule (lignes 9 à 14) croise l'immatriculation et le mois dans les onglets Trajets et Entretien. Vous devez savoir d'où vient chaque chiffre pour pouvoir le défendre devant un auditeur.",
    steps: [
      {
        title: 'Lisez les sept colonnes',
        actions: [
          "B Km parcourus : somme des Km parcourus du véhicule pour le mois (SOMME.SI.ENS sur Trajets).",
          "C Carburant (L) : somme des litres. D Coût carburant (USD) = C × B5.",
          "E Coût entretien (USD) : somme de l'onglet Entretien pour le véhicule et le mois.",
          "F Coût total = D + E. G Coût / km = F ÷ B, vide si B vaut 0. Ligne 14 : total flotte.",
        ],
      },
    ],
    table: {
      columns: ['Véhicule', 'Km', 'Carburant (L)', 'Carburant (USD)', 'Entretien (USD)', 'Total (USD)', 'Coût / km'],
      rows: [
        ['V-01', '212', '31,3', '56,34', '85', '141,34', '0,67'],
        ['V-02', '150', '16,6', '29,88', '220', '249,88', '1,67'],
        ['V-03', '300', '51,1', '91,98', '450', '541,98', '1,81'],
        ['V-04', '90', '11,1', '19,98', '80', '99,98', '1,11'],
        ['TOTAL FLOTTE', '752', '110,1', '198,18', '835', '1 033,18', '1,37'],
      ],
    },
    result: "La synthèse du mois donne, pour chaque véhicule, ce qu'il a roulé et ce qu'il a coûté.",
    pitfall: "Lire un coût par km sans regarder les kilomètres : V-04 n'a roulé que 90 km, une seule facture de vidange suffit à faire monter son ratio.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 6',
    title: 'Interpréter le coût par km : décomposer avant de conclure',
    intro: "Une mise en forme conditionnelle surligne en jaune tout coût par km supérieur à 1,2 fois la moyenne des quatre véhicules. C'est un déclencheur de question, pas un verdict : il faut comprendre pourquoi un véhicule sort de la moyenne.",
    steps: [
      {
        title: 'Calculez le seuil de surbrillance',
        actions: [
          "Moyenne des 4 véhicules : (0,67 + 1,67 + 1,81 + 1,11) ÷ 4 = 1,31 USD/km.",
          "Seuil : 1,2 × 1,31 ≈ 1,58 USD/km. V-02 (1,67) et V-03 (1,81) sont surlignés.",
        ],
      },
      {
        title: 'Décomposez chaque véhicule surligné',
        actions: [
          "Séparez le coût carburant par km et le coût entretien par km.",
          "Cherchez l'événement exceptionnel : jeu de pneus, réparation lourde.",
          "Comparez au mois précédent, puis à la moyenne des trois derniers mois.",
        ],
      },
    ],
    table: {
      columns: ['Véhicule', 'Carburant par km', 'Entretien par km', 'Lecture'],
      rows: [
        ['V-01', '0,27', '0,40', 'Normal.'],
        ['V-02', '0,20', '1,47', "Pneus avant (220 USD) sur 150 km : événement ponctuel, aucune dérive de carburant."],
        ['V-03', '0,31', '1,50', "Entretien lourd (freins 140 + suspension 310) ET carburant le plus élevé par km : deux causes à séparer."],
        ['V-04', '0,22', '0,89', "Seulement 90 km : une vidange pèse lourd. À lisser."],
      ],
    },
    result: "Vous savez pourquoi chaque véhicule surligné sort de la moyenne, et lequel exige une enquête : V-03.",
    pitfall: "Conclure que V-02 « coûte trop cher » : son pic vient de pneus achetés une fois. Lissez sur trois mois avant de décider d'un remplacement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 6',
    title: 'Lire la synthèse par conducteur et tenir à jour les noms',
    intro: "La synthèse par conducteur (lignes 17 à 21) donne le nombre de trajets, les kilomètres, la consommation moyenne et l'écart moyen avec la consommation théorique. Les noms sont saisis à la main dans A18 à A21 : ils doivent correspondre exactement à la colonne C de Trajets.",
    steps: [
      {
        title: 'Tenez les noms à jour',
        actions: [
          "Vérifiez que A18 à A21 portent exactement les noms saisis dans la colonne C de Trajets : même orthographe, pas d'espace final.",
          "Conducteur ajouté ou renommé : corrigez la cellule A concernée, sinon son nombre de trajets reste à 0.",
        ],
      },
      {
        title: 'Lisez les colonnes',
        actions: [
          "B Nb. trajets, C Km parcourus.",
          "D Conso. moyenne /100km : moyenne simple des consommations de ses trajets. E Écart moyen vs théorique : moyenne des écarts de ses trajets.",
        ],
      },
    ],
    table: {
      columns: ['Conducteur', 'Nb trajets', 'Km', 'Conso. moyenne /100 km', 'Écart moyen'],
      rows: [
        ['Jean-Pierre Mumbere', '5', '212', '14,7', '+1,5 %'],
        ['Alice Kavira', '4', '150', '11,0', '+0,4 %'],
        ['Patrick Bahati', '6', '300', '17,0', '+13,6 %'],
        ['Espoir Katembo', '3', '90', '12,3', '−1,3 %'],
      ],
    },
    pitfall: "Lire +13,6 % comme « Bahati fraude ». V-03 n'a été conduit que par lui ce mois-ci : l'écart du conducteur et celui du véhicule sont indiscernables. Il faut un test avec un autre conducteur (Procédure 6).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 6',
    title: 'Rapprocher le carnet de bord et les bons de carburant',
    intro: "Un carnet rempli n'est pas un carnet fiable. Chaque fin de mois, vous comparez les litres du carnet aux litres réellement délivrés, avec les bons de carburant numérotés. C'est le contrôle qui rend visible un détournement en quelques minutes.",
    steps: [
      {
        title: 'Rassemblez les bons',
        actions: [
          "Demandez à la dispatcheuse tous les bons du mois, classés par véhicule et par numéro (aucun trou dans la numérotation).",
          "Sur chaque bon, vérifiez : date, véhicule, litres, prix, station, signature du pompiste et du conducteur.",
        ],
      },
      {
        title: 'Comparez par véhicule',
        actions: [
          "Total des litres des bons du véhicule, comparé aux litres de la colonne C du Tableau de bord.",
          "Écart en litres et en pourcentage ; tolérance de travail : 3 % (arrondis de pompe).",
          "Au-delà : retrouvez les bons ligne à ligne pour localiser l'écart.",
        ],
      },
    ],
    table: {
      columns: ['Véhicule', 'Litres du Tableau de bord', 'Litres des bons', 'Écart', 'Lecture'],
      rows: [
        ['V-01', '31,3', '32,0', '+0,7 L (2,2 %)', 'Dans la tolérance (arrondis de pompe).'],
        ['V-02', '16,6', '16,6', '0', 'Concordant.'],
        ['V-03', '51,1', '51,1', '0', "Concordant : le carnet ne ment pas sur les litres achetés."],
        ['V-04', '11,1', '11,1', '0', 'Concordant.'],
      ],
    },
    result: "Pour les 4 véhicules, les litres du carnet correspondent aux bons à 3 % près. Reste à comprendre ce qui a été brûlé par kilomètre : c'est l'objet de la Procédure 6.",
    pitfall: "Faire le rapprochement à partir de documents remis par la personne qui a rempli le carnet. Les bons viennent de la dispatcheuse ou du comptable, qui n'ont pas rempli le carnet : c'est la séparation des fonctions.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 6',
    title: 'Rédiger la note de reporting : kilomètres, coût direct, coût complet',
    intro: "Le bailleur ne lit pas votre classeur, il lit une page. Vous transformez la synthèse en une note qui donne les kilomètres, le coût par km, le coût complet, et explique ce qui sort de la moyenne.",
    steps: [
      {
        title: 'Complétez le coût complet',
        actions: [
          "Reprenez le coût direct du Tableau de bord : carburant + entretien.",
          "Ajoutez l'assurance du mois (prime annuelle ÷ 12) et, si le bailleur l'autorise, l'amortissement.",
          "Divisez par les kilomètres : coût complet par km.",
        ],
      },
      {
        title: 'Rédigez la note',
        actions: [
          "Chiffres du mois, comparaison avec le mois précédent, explications des écarts, actions en cours.",
          "Précisez le contexte : pistes dégradées, détours de sécurité, retour avant la nuit : il explique un coût par km plus élevé qu'un référentiel commercial.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note de reporting, flotte de Goma, 1er–25 mars 2026',
      lines: [
        "Assurance de la flotte : 3 600 USD/an, soit 300 USD/mois. Coût complet = 1 033,18 + 300 = 1 333,18 USD ; ÷ 752 km = 1,77 USD/km (amortissement non imputé, règle du bailleur à confirmer).",
        "« 752 km, 18 trajets, 4 véhicules. Coût direct 1,37 USD/km ; coût complet 1,77 USD/km. V-02 (1,67) : pneus avant remplacés, événement ponctuel. V-03 (1,81) : entretien lourd et consommation +13,6 % : vérification en cours. Contexte : pistes dégradées, retour avant 17h30, relais au-delà de 6 h de conduite. »",
      ],
    },
    result: "Livrable 4 terminé : synthèse du mois, note de coût par km d'une page et rapprochement des bons de carburant.",
    tip: "Joignez le Tableau de bord en annexe : l'auditeur veut pouvoir refaire un calcul, et une note qui peut être contrôlée est une note crédible.",
  },

  // ───────────── PROCÉDURE 6 — Anomalie de consommation ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 5',
    title: 'Isoler les lignes ANOMALIE et chiffrer l\'excès en litres',
    intro: "Vendredi 20 mars, la revue montre trois lignes rouges sur V-03. Avant d'interpréter, vous isolez les lignes et chiffrez l'excès en litres : ce chiffre remplace l'impression par un fait.",
    steps: [
      {
        title: 'Isolez les lignes',
        actions: [
          "Dans Trajets, filtrez la colonne B sur V-03, puis la colonne L sur ANOMALIE.",
          "Copiez ces lignes dans un tableau de travail avec les lignes OK du mois, pour comparer.",
        ],
      },
      {
        title: "Chiffrez l'excès",
        actions: [
          "Litres attendus = Km parcourus × consommation théorique ÷ 100 (50 × 15 ÷ 100 = 7,5 L).",
          "Excès = litres pris − litres attendus. Convertissez en USD avec le prix de B5.",
          "Regardez la tendance : l'écart augmente-t-il d'un trajet à l'autre ?",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Km', 'Litres pris', 'Litres attendus', 'Excès (L)', 'Écart'],
      rows: [
        ['04/03', '50', '7,6', '7,5', '+0,1', '+1,3 % (OK)'],
        ['10/03', '50', '7,7', '7,5', '+0,2', '+2,7 % (OK)'],
        ['13/03', '50', '8,8', '7,5', '+1,3', '+17,3 % (ANOMALIE)'],
        ['18/03', '50', '8,9', '7,5', '+1,4', '+18,7 % (ANOMALIE)'],
        ['20/03', '50', '9,0', '7,5', '+1,5', '+20,0 % (ANOMALIE)'],
      ],
    },
    result: "Deux trajets normaux puis trois trajets du même circuit de 50 km avec +1,3, +1,4 et +1,5 L, soit 4,2 L (environ 7,6 USD) et un écart qui monte d'environ 1,3 point à chaque trajet.",
    pitfall: "Conclure sur le montant : 1,5 L, c'est moins de 3 USD. Le montant est faible ; c'est la tendance qui est l'information. Si le même schéma touchait plusieurs véhicules d'une grande flotte, il deviendrait significatif.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 5',
    title: 'Écarter les explications neutres, une par une, avec une preuve',
    intro: "Avant de soupçonner qui que ce soit, vous éliminez les explications ordinaires. Chaque hypothèse écartée l'est par une preuve : c'est ce qui protège le chauffeur ET vous.",
    steps: [
      {
        title: 'Passez la liste des explications neutres',
        actions: [
          "Kilomètres cachés ou erreur de compteur : chaînage des compteurs (Procédure 3, étape 4).",
          "Mission exceptionnelle ou charge inhabituelle : colonne D et ordres de mission.",
          "Piste dégradée, pluie, détour, attente moteur tournant : demandez au conducteur et croisez avec les messages WhatsApp.",
          "Maintenance : un entretien en retard (filtre à air, freins, pneus) ou une panne qui s'installe fait consommer plus ; consultez l'onglet Entretien.",
          "Erreur de saisie : plein incomplet, litres recopiés de travers.",
        ],
      },
    ],
    table: {
      columns: ['Hypothèse neutre', 'Test', 'Résultat sur V-03'],
      rows: [
        ['Kilomètres non déclarés', 'Chaînage des compteurs', 'Écartée : la chaîne est continue.'],
        ['Mission exceptionnelle', 'Motifs des 13, 18 et 20/03', 'Écartée : « Supervision médicale Rutshuru », circuit habituel de 50 km.'],
        ['Panne de suspension', 'Réparation du 19/03 (310 USD)', 'Écartée : la consommation reste à 18,0 le 20/03, après réparation.'],
        ['Freins qui frottent', 'Contrôle des freins du 08/03', 'À re-tester au garage (étape 4).'],
        ['Entretien en retard', 'Onglet Entretien', "Aucune vidange enregistrée sur V-03 : à faire, mais cela n'explique pas un saut de 2,7 % à 17,3 % en quelques jours."],
      ],
    },
    result: "Les causes ordinaires les plus probables sont écartées avec une preuve ; il reste à tester le véhicule au garage et à comparer avec un autre conducteur.",
    tip: "Si une ligne s'explique par un événement documenté, annotez-la dans la colonne D et ne la comptez pas dans le schéma : une preuve douteuse affaiblit un dossier solide.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 5',
    title: 'Rassembler les pièces justificatives et les comparer au carnet',
    intro: "Une pièce vaut mieux que dix opinions. Vous demandez les documents qui permettent de comparer ce que le carnet dit à ce qui s'est réellement passé, sans annoncer de soupçon à personne.",
    steps: [
      {
        title: 'Demandez les pièces à la bonne personne',
        actions: [
          "Bons de carburant des trois dates : à la dispatcheuse, pas au chauffeur concerné.",
          "Photos du compteur et de la jauge au départ et au retour : le conducteur les prend déjà au titre de la règle de flotte.",
          "Distance de référence du circuit : mesure GPS du téléphone, faite un jour de contrôle.",
          "Facture de la réparation du 19/03 et fiche du contrôle des freins du 08/03.",
        ],
      },
      {
        title: 'Comparez',
        actions: [
          "Litres du bon = litres du carnet ? Heure de la station cohérente avec l'heure du retour ?",
          "Distance GPS = distance du carnet ?",
          "Notez chaque comparaison avec sa source et sa date.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Litres du carnet', 'Litres du bon', 'Station et heure', 'Distance GPS', 'Lecture'],
      rows: [
        ['13/03', '8,8', '8,8 (n° 0412)', 'Goma, 16h50', '50 km (réf. 06/03)', 'Concordant'],
        ['18/03', '8,9', '8,9 (n° 0419)', 'Goma, 16h45', '50 km (réf. 06/03)', 'Concordant'],
        ['20/03', '9,0', '9,0 (n° 0426)', 'Goma, 16h55', '50 km (réf. 06/03)', 'Concordant'],
      ],
    },
    result: "Le carnet est honnête sur les litres achetés et sur les kilomètres. L'écart se situe entre le carburant acheté et le carburant brûlé par kilomètre.",
    pitfall: "Demander les bons au chauffeur concerné : il peut les « retrouver » arrangés, et vous lui annoncez un soupçon. Adressez-vous à la dispatcheuse ou au comptable, qui les ont reçus à la source.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 5',
    title: 'Tester le véhicule puis le conducteur, ouvertement et sans accuser',
    intro: "Quand les pièces concordent et que l'écart persiste, deux tests contradictoires séparent le véhicule du reste. Ils se mènent ouvertement : le message est « nous vérifions le véhicule », pas « nous vous soupçonnons ».",
    steps: [
      {
        title: 'Test 1 — le véhicule au garage',
        actions: [
          "Demandez au garagiste une vérification de consommation : pression et usure des pneus, freins qui frottent, filtre à air, fuites, injecteurs.",
          "Obtenez un compte rendu écrit, daté et signé.",
        ],
      },
      {
        title: 'Test 2 — le même véhicule avec un autre conducteur',
        actions: [
          "Confiez V-03, pour la prochaine supervision, à un autre conducteur formé.",
          "Supervisez le plein à plein vous-même : jauge photographiée au départ, plein à ras au retour devant vous, bon signé.",
          "Comparez la consommation obtenue à 15,0 L/100 km.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — résultats des deux tests',
      lines: [
        "24/03, garage : pneus à 2,4 bar, freins sans frottement, filtre à air propre, aucune fuite. Compte rendu : « pas d'anomalie mécanique constatée ».",
        "27/03, V-03 conduit par Jean-Pierre Mumbere : 50 km, 7,7 L → 15,4 L/100 km (+2,7 %). Consommation normale, plein supervisé.",
      ],
    },
    result: "Le véhicule est écarté : garage sans anomalie, consommation normale avec un autre conducteur. Ce résultat ne désigne personne : il oriente la suite, qui n'est pas de votre ressort.",
    pitfall: "Présenter le test comme une mise à l'épreuve du chauffeur : il se vit comme une accusation. Présentez-le comme la procédure standard pour tout véhicule dont l'écart dépasse le seuil.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 5',
    title: 'Décider du niveau et rédiger la note de signalement',
    intro: "Observation, vérification ou signalement ? Une règle écrite évite deux erreurs : se taire trop longtemps, ou accuser trop vite. Voici une règle de travail à faire valider par votre coordination et à inscrire dans la politique de flotte.",
    steps: [
      {
        title: 'Appliquez les trois niveaux',
        actions: [
          "Niveau 1 — Observation : une ligne ANOMALIE isolée. Relire à la revue suivante.",
          "Niveau 2 — Vérification : deux lignes ANOMALIE du même véhicule en 15 jours, ou écart moyen mensuel du véhicule ou du conducteur supérieur à 10 %. Étapes 1 à 4 lancées sous 5 jours ouvrés.",
          "Niveau 3 — Signalement formel : vérifications faites, aucune explication neutre, et trois lignes ANOMALIE ou plus en 15 jours, ou écart moyen mensuel supérieur à 15 %. Note écrite sous 48 h au coordinateur logistique pays.",
        ],
      },
      {
        title: 'Rédigez une note factuelle',
        actions: [
          "Faits datés, chiffres, pièces jointes, vérifications faites et leur résultat. Aucun jugement sur la personne.",
          "Une demande claire : entretien contradictoire, décision de la direction, suite RH ou finance.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — la note du 27/03',
      lines: [
        "Objet : Signalement — écart de consommation V-03 (13–20/03/2026).",
        "Faits : 3 trajets du circuit de 50 km (13, 18, 20/03) à +17,3 %, +18,7 %, +20,0 % de 15,0 L/100 km, soit +4,2 L (≈ 7,6 USD). Écart moyen mensuel du conducteur : +13,6 %.",
        "Vérifications : compteurs chaînés ; bons n° 0412, 0419, 0426 concordants ; garage 24/03 sans anomalie ; test du 27/03 avec un autre conducteur : +2,7 %.",
        "Demande : entretien contradictoire et décision de la direction ; en attendant, plein supervisé sur V-03.",
      ],
    },
    result: "Livrable 5 terminé : dossier d'anomalie complet et note factuelle de signalement envoyée dans les 48 h qui suivent les vérifications.",
    tip: "Écrivez « écart de consommation constaté », jamais « vol » ni « fraude ». Une note factuelle protège le chauffeur innocent et reste valable si la cause se révèle mécanique.",
  },

  // ───────────── PROCÉDURE 7 — Politique d'utilisation ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 7',
    title: 'Ouvrir politique-utilisation-vehicules.docx et réunir les décisions avant d\'écrire',
    intro: "Semaine 1. Le document tient en 1 à 2 pages : un titre, un objectif et six sections. Chaque section contient un texte d'aide en italique gris que vous remplacez par vos règles. Vous n'écrivez qu'après avoir obtenu les décisions de vos responsables.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez politique-utilisation-vehicules.docx et enregistrez-le sous 2026-03-06_Politique-vehicules_Goma_v01.docx.",
          "Lisez les six titres : 1 Champ d'application, 2 Règles de priorité de réquisition, 3 Responsabilités du conducteur, 4 Usages interdits, 5 Procédure en cas d'incident ou d'accident, 6 Validation.",
          "Repérez les trois tableaux : priorité (section 2), notification (section 5), validation (section 6).",
        ],
      },
      {
        title: 'Collectez les décisions',
        actions: [
          "Auprès du coordinateur logistique pays : fonctions habilitées, ordre de priorité, heures maximales de conduite.",
          "Auprès du point focal sécurité : la personne à notifier et le délai.",
          "Relisez les politiques de sécurité de l'organisation : votre document les applique, il ne les contredit pas.",
        ],
      },
    ],
    result: "Un fichier v01 et les décisions nécessaires réunies : vous pouvez rédiger section par section sans improviser.",
    tip: "Écrivez à l'indicatif de l'obligation (« Le conducteur relève le compteur… ») et en phrases courtes : le document est lu par des chauffeurs, pas par des juristes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 7',
    title: 'Section 1 — Champ d\'application',
    intro: "Cette section dit à qui et à quoi la politique s'applique, et à partir de quand. Une exception oubliée ici devient la porte de sortie de toutes les règles suivantes.",
    steps: [
      {
        title: 'Remplacez le texte gris par trois informations',
        actions: [
          "Véhicules concernés : parc propre, véhicules loués, motos.",
          "Missions et zones couvertes : toutes les missions, avec les zones nommées.",
          "Date d'entrée en vigueur : la date de signature.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 1',
      lines: [
        "« 1. Champ d'application. La présente politique s'applique aux véhicules V-01 à V-04 de la base de Goma (parc propre), aux véhicules loués à la journée et aux motos éventuelles, pour toutes les missions menées à Goma, à Lukando et dans le territoire de Rutshuru. Elle entre en vigueur le lundi 9 mars 2026. »",
      ],
    },
    result: "La section 1 tient en 3 lignes et ne laisse aucun véhicule hors périmètre.",
    pitfall: "Oublier les véhicules loués : un camion loué à la journée non couvert par la politique est une exception à toutes les règles de conduite, de carnet et de priorité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 7',
    title: 'Section 2 — Règles de priorité de réquisition (texte et tableau)',
    intro: "C'est la section qui arbitre le vendredi midi. Elle doit permettre de trancher en cinq minutes, sans rapport de force, avec une trace écrite.",
    steps: [
      {
        title: 'Rédigez le texte puis remplissez le tableau',
        actions: [
          "Fonctions habilitées : par fonction, jamais par nom de personne.",
          "Priorités : urgence médicale et sécurité toujours en tête, logistique de routine en dernier.",
          "Délai de préavis pour toute demande non urgente (24 à 48 h).",
          "Règle d'arbitrage : à priorité égale, premier inscrit au planning ; en cas de désaccord, décision écrite du coordinateur logistique pays sous 1 heure.",
        ],
      },
    ],
    table: {
      columns: ['Fonction habilitée à réquisitionner', 'Priorité / délai de préavis'],
      rows: [
        ['Coordinatrice pays ; coordinateur logistique pays', 'Priorité 1 — urgence médicale, évacuation, sécurité : immédiat, sans préavis.'],
        ['Coordinatrice de projet Lukando ; responsable médical', 'Priorité 2 — réponse choléra et supervision médicale planifiée : préavis 24 h.'],
        ['Responsables de programme (nutrition, autres)', 'Priorité 3 — activités de programme planifiées : préavis 48 h.'],
        ['Logistique et administration', 'Priorité 4 — courses de routine (approvisionnement, banque, carburant), regroupées : préavis 24 h.'],
      ],
    },
    example: {
      title: 'Fil rouge — le vendredi 27/02 rejoué avec la politique',
      lines: [
        "Supervision choléra (priorité 2, préavis 24 h) passe avant visite nutrition (priorité 3, préavis 48 h). Décision écrite en 5 minutes ; V-03 à Dr Kahindo ; Hélène Kitoko reçoit V-04.",
      ],
    },
    pitfall: "Écrire « le directeur peut réquisitionner n'importe quand » : une exception sans condition annule la hiérarchie. Réservez le préavis zéro à l'urgence médicale et à la sécurité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 7',
    title: 'Section 3 — Responsabilités du conducteur',
    intro: "Cette section dit ce que le conducteur doit faire, en règles mesurables et contrôlables. Chaque ligne doit pouvoir être vérifiée par vous, à la revue du vendredi ou sur le terrain.",
    steps: [
      {
        title: 'Rédigez les obligations en lignes courtes',
        actions: [
          "Heures de conduite : 8 heures effectives maximum par jour sur piste ; second conducteur ou relais au-delà de 6 heures de conduite continue ; pause de 15 minutes toutes les 2 heures.",
          "Carnet de bord : compteur lu au départ et à l'arrivée, plein à plein, bon joint ; carnet à jour avant tout nouveau départ.",
          "Check-point : ralentir, rester calme, mains visibles, présenter les documents, expliquer la mission en une phrase, ne rien donner ni transporter sans décision de la base, informer la base par message dès que possible.",
          "Remontée sans délai : tout incident, dommage, anomalie mécanique ou demande inhabituelle d'un tiers.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait de la section 3',
      lines: [
        "« Le conducteur relève le compteur au départ et à l'arrivée et le note dans son carnet. Il ne conduit pas plus de 8 heures par jour sur piste. À un check-point, il ne donne rien, ne prend personne et appelle la base dès que possible. »",
      ],
    },
    result: "La section 3 se lit en deux minutes et chaque ligne est vérifiable.",
    pitfall: "Écrire « conduire prudemment » : une règle non mesurable ne se contrôle pas, donc ne s'applique pas. Chiffres, délais, gestes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 7',
    title: 'Section 4 — Usages interdits',
    intro: "La liste des interdits doit être courte, nette et sans exception cachée. Chaque interdit protège la sécurité du personnel, la neutralité perçue de l'organisation ou le budget du bailleur.",
    steps: [
      {
        title: 'Listez les interdits et le motif de chacun',
        actions: [
          "Usage personnel du véhicule.",
          "Transport de tiers non autorisés par l'ordre de mission.",
          "Transport de marchandises à caractère commercial.",
          "Conduite de nuit hors urgence vitale documentée.",
          "Transport de tout matériel à connotation militaire, d'armes ou de personnes armées.",
          "Conduite après consommation d'alcool.",
        ],
      },
      {
        title: 'Précisez la suite donnée aux infractions',
        actions: [
          "Toute infraction est traitée selon le règlement intérieur de l'organisation : écrivez-le pour que personne ne l'ignore.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — pourquoi chaque interdit existe',
      lines: [
        "Tiers et marchandises : assurance non valable, risque de neutralité perçue. Nuit : visibilité et check-points imprévisibles. Matériel militaire : un seul écart connu peut faire perdre l'accès à toute une zone.",
      ],
    },
    pitfall: "Interdire la conduite de nuit sans prévoir « hors urgence vitale documentée » : la règle absolue sera violée le premier jour d'urgence réelle, et plus personne ne la prendra au sérieux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 7',
    title: "Section 5 — Procédure en cas d'incident ou d'accident (texte et tableau)",
    intro: "Quand l'incident arrive, personne ne lit un manuel. Cette section doit tenir sur un écran : les gestes dans l'ordre, la personne à appeler, le délai. Le détail est dans les Procédures 10 et 11.",
    steps: [
      {
        title: 'Écrivez les étapes immédiates dans l\'ordre',
        actions: [
          "1. Mettre les personnes en sécurité et porter les premiers secours.",
          "2. Alerter la base par message puis par appel.",
          "3. Ne jamais admettre de responsabilité sur place, ne rien signer.",
          "4. Photographier les lieux et les véhicules, relever les noms des témoins ; ne pas déplacer le véhicule sauf danger.",
        ],
      },
      {
        title: 'Remplissez le tableau de notification',
        actions: [
          "Point focal sécurité à notifier : un nom, un suppléant, un moyen de contact.",
          "Délai de notification maximal, et délai du rapport écrit.",
        ],
      },
    ],
    table: {
      columns: ['Point focal sécurité à notifier', 'Délai de notification maximal'],
      rows: [
        ['Marcel Tshibola, point focal sécurité (suppléant : Jean-Marc Ilunga), par appel et par message WhatsApp', "15 minutes après la mise en sécurité des personnes ; rapport écrit sous 24 heures"],
      ],
    },
    result: "Une section qui se lit en une minute et un tableau qui nomme une personne, un suppléant et un délai.",
    pitfall: "Écrire « informer la hiérarchie » : un rôle n'est pas une personne. Un nom, un suppléant et un numéro valent mieux qu'une fonction.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 7 sur 7',
    title: 'Section 6 — Validation, signature et diffusion',
    intro: "Une politique non signée n'a aucune force face à un conflit d'usage. La section 6 date le document et fait signer ceux qui l'appliquent ET ceux qui l'invoquent.",
    steps: [
      {
        title: 'Remplissez le tableau de validation',
        actions: [
          "Rédigé par : votre nom et votre fonction, la date.",
          "Approuvé par (Coordinateur/trice pays) : nom et date de signature.",
        ],
      },
      {
        title: 'Faites signer et diffusez',
        actions: [
          "Faites signer chaque conducteur et chaque responsable habilité à réquisitionner un véhicule sur une page d'émargement.",
          "Remettez une copie à chaque signataire ; affichez la politique au garage et dans chaque véhicule.",
          "Numérotez la version (v01) et conservez les originaux signés.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — validation de la v01',
      lines: [
        "Rédigé par : le logisticien responsable de flotte — 2026-03-06. Approuvé par : Sylvie Matala, coordinatrice pays — 2026-03-09.",
        "Signatures reçues le 09/03 : 4 chauffeurs, Dr Kahindo, Hélène Kitoko, Jean-Marc Ilunga, Chantal Mbusa, soit 8 sur 8.",
      ],
    },
    result: "Livrable 6 terminé : politique v01 signée par 8 personnes, affichée et diffusée.",
    pitfall: "Faire signer seulement les chauffeurs : le jour du conflit, le responsable de programme dira qu'il n'a jamais accepté la règle.",
  },

  // ───────────── PROCÉDURE 8 — Planifier une mission transport ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 6',
    title: 'Qualifier la demande de véhicule et l\'inscrire au planning',
    intro: "Lundi 23 mars, 9h05. L'équipe médicale de Dr Kahindo demande V-03 pour mercredi 25. Une demande de véhicule n'est pas une commande : c'est une question à qualifier avant de décider, avec la politique signée comme arbitre.",
    steps: [
      {
        title: 'Posez les sept questions',
        actions: [
          "Qui demande, et cette fonction est-elle habilitée (section 2) ?",
          "Pour quoi faire, avec quel résultat attendu et quelle priorité ?",
          "Où (itinéraire, étapes, zone) et quand (départ, retour) ?",
          "Qui voyage (noms, nombre) et quelle charge (poids, volume) ?",
          "Le préavis respecte-t-il le délai de la politique ?",
          "Peut-on regrouper avec une autre course ?",
          "Y a-t-il un conflit avec une autre demande ? Si oui, appliquez la section 2 et notez la décision par écrit.",
        ],
      },
      {
        title: 'Inscrivez la demande au planning',
        actions: [
          "Une ligne : date, demandeur, objet, priorité, véhicule envisagé, statut.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — la demande du 23/03, 9h05',
      lines: [
        "« V-03 mercredi pour la supervision au centre de santé appuyé, 2 personnes (infirmier superviseur Dieudonné Safari et un stagiaire), retour avant 17h. »",
        "Qualification : demandeur habilité (équipe médicale) ; priorité 2 ; préavis de 48 h respecté ; aucune autre demande sur V-03 ; circuit habituel de 50 km. Inscrit au planning à 9h20.",
      ],
    },
    result: "Une demande qualifiée, enregistrée au planning avec sa priorité et son préavis vérifié.",
    pitfall: "Dire oui par téléphone et noter plus tard : la demande n'existe pas tant qu'elle n'est pas au planning. C'est exactement ainsi que naissent les conflits du vendredi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 6',
    title: 'Choisir le véhicule et le conducteur, avec un motif écrit',
    intro: "Le choix ne se fait pas « à la tête du client » : il s'appuie sur ce que vous savez du véhicule (carnet, entretien) et du conducteur (dossier, planning). Vous notez le choix ET son motif.",
    steps: [
      {
        title: 'Vérifiez le véhicule',
        actions: [
          "Disponibilité : aucune autre mission au planning ce jour-là.",
          "État : aucune intervention de sécurité en retard sur le plan (Procédure 4), aucune panne signalée.",
          "Capacité : nombre de places et charge suffisants pour la mission.",
        ],
      },
      {
        title: 'Choisissez le conducteur',
        actions: [
          "Repos suffisant la veille ; heures de conduite prévues dans la limite de 8 heures.",
          "Permis valide, formation à jour, connaissance de l'axe (dossier, Procédure 9).",
          "Écrivez le choix et son motif dans le planning.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — choix du 24/03',
      lines: [
        "V-03 : disponible mercredi, freins contrôlés le 08/03, garage passé le 24/03, vidange planifiée jeudi 26/03 (aucune vidange enregistrée) : utilisable pour un circuit de 50 km.",
        "Conducteur : Patrick Bahati, habitué du circuit, repos complet le 24/03, permis valide jusqu'en 2028. Aucun conflit au planning.",
      ],
    },
    result: "Véhicule et conducteur choisis, avec un motif écrit qu'un tiers peut relire.",
    tip: "Quand deux conducteurs conviennent, alternez : un conducteur qui fait toujours le même trajet isolé s'use, et l'organisation devient dépendante de lui.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 6',
    title: "Vérifier l'itinéraire et estimer un temps réaliste",
    intro: "Avant tout trajet vers une zone que vous ne parcourez pas de façon routinière, vous vérifiez l'itinéraire, puis vous le croisez avec la dernière information sécuritaire. Google Maps est votre outil de décision avant le départ, pas un certificat de sécurité.",
    steps: [
      {
        title: 'Planifiez avec Google Maps',
        actions: [
          "Ouvrez l'itinéraire départ–arrivée ; relevez la distance et la durée affichées.",
          "Regardez les tracés alternatifs et notez leur longueur.",
          "Corrigez la durée : durée affichée × 1,5 sur piste dégradée (à ajuster avec vos propres chronométrages).",
          "Repérez les points sensibles : ponts, gués, villages traversés, anciens check-points.",
        ],
      },
      {
        title: "Croisez avec l'information sécuritaire",
        actions: [
          "Appelez le point focal sécurité : dernière situation sur l'axe.",
          "Lisez les alertes d'accès reçues (Logistics Cluster, voir Module 01) et les messages des ONG de la zone.",
          "Décidez : Go, Go conditionnel (avec consigne), ou No-go.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vérification du 24/03',
      lines: [
        "Google Maps : circuit de 50 km aller-retour, 1 h 40 affichée → 1 h 40 × 1,5 = 2 h 30 de conduite, plus 1 h 30 de supervision : environ 4 h 15 avec pauses.",
        "Point focal sécurité, 24/03 17h30 : « des check-points non officiels apparaissent par moments sur l'axe ; aucun incident sur véhicule humanitaire cette semaine ».",
        "Décision : GO CONDITIONNEL — départ 9h30, trois check-ins, retour avant 17h00, consigne check-point rappelée.",
      ],
    },
    result: "Une décision Go conditionnel écrite, avec une durée réaliste et la consigne de sécurité associée.",
    pitfall: "Prendre la durée affichée par défaut pour la durée réelle : sur piste, elle est optimiste. L'heure de retour annoncée devient fausse, et le conducteur finit par rouler de nuit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 6',
    title: 'Fixer les horaires, le carburant et le plan de check-in',
    intro: "Un trajet sans check-in prévu retarde de plusieurs heures la détection d'un problème. Vous construisez l'horaire à rebours depuis l'heure limite de retour, puis vous fixez les points de contact.",
    steps: [
      {
        title: "Construisez l'horaire à rebours",
        actions: [
          "Heure limite de retour : 17h00 (nuit vers 18h, marge d'une heure).",
          "Remontez : durée du retour, durée sur place, durée de l'aller → heure de départ ; ajoutez 30 minutes de marge.",
          "Contrôlez la durée de conduite de la journée : maximum 8 heures, relais au-delà.",
          "Carburant : plein au départ ; prévoyez une autonomie double du trajet prévu.",
        ],
      },
      {
        title: 'Fixez le plan de communication',
        actions: [
          "Trois à quatre check-ins : départ, point intermédiaire reconnaissable, arrivée, départ du retour.",
          "Échelle d'alerte : 15 minutes sans nouvelle, la dispatcheuse appelle ; 30 minutes, elle prévient le point focal sécurité ; 60 minutes, protocole d'incident.",
          "Vérifiez que le téléphone est chargé, avec du crédit, et que le partage de position WhatsApp est activé.",
        ],
      },
    ],
    table: {
      columns: ['Heure prévue', 'Point', 'Message attendu', 'Si absent'],
      rows: [
        ['09:30', 'Départ de la base', '« V-03 départ, 61660 km, 3 à bord »', 'Appel à 09:45'],
        ['10:00', 'Km 10, pont reconnaissable', '« V-03 km 10, RAS »', 'Appel à 10:15'],
        ['10:45', 'Arrivée au centre de santé', '« V-03 arrivé »', 'Appel à 11:00'],
        ['12:30', 'Départ du retour', '« V-03 départ retour »', 'Appel à 12:45'],
      ],
    },
    result: "Un horaire réaliste, un retour avant la nuit et quatre check-ins chacun assorti de sa réaction en cas d'absence.",
    tip: "Choisissez des points de check-in reconnaissables (pont, carrefour, village) : le message « km 10, pont » se vérifie, « on est bientôt à mi-chemin » non.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 6',
    title: "Contrôler le véhicule, briefer le conducteur et signer l'ordre de mission",
    intro: "Mercredi 25 mars, 9h00. Avant le départ, cinq minutes de contrôle du véhicule, cinq minutes de briefing, et l'ordre de mission signé. C'est le dernier point où vous pouvez encore tout arrêter.",
    steps: [
      {
        title: 'Contrôle pré-départ du véhicule',
        actions: [
          "Niveaux : huile, eau, liquide de frein ; réservoir plein.",
          "Pneus : pression et état ; roue de secours et cric présents.",
          "Lumières, avertisseur, essuie-glaces, ceintures.",
          "Équipement : extincteur, trousse de secours, triangle, sangle, eau potable, lampe.",
          "Compteur lu et noté au carnet ; photo du tableau de bord (compteur et jauge).",
        ],
      },
      {
        title: 'Briefing et signature',
        actions: [
          "Rappelez l'itinéraire, les horaires, les points de check-in et l'heure limite de retour.",
          "Rappelez la consigne check-point (Procédure 10) et les interdits : aucun passager non listé.",
          "Faites signer l'ordre de mission par le conducteur et le demandeur.",
        ],
      },
    ],
    table: {
      columns: ['Rubrique de l\'ordre de mission', 'Contenu — mission du 25/03'],
      rows: [
        ['Véhicule / conducteur', 'V-03 — Patrick Bahati — compteur au départ : 61 660 km'],
        ['Passagers', 'Dieudonné Safari (infirmier superviseur), 1 stagiaire'],
        ['Objet et itinéraire', 'Supervision médicale du centre de santé appuyé, Rutshuru ; Goma, km 10, centre de santé (25 km), retour par le même axe'],
        ['Horaires', 'Départ 09:30 ; retour prévu 13:45 ; limite 17:00'],
        ['Contacts', 'Dispatcheuse : Chantal Mbusa ; point focal sécurité : Marcel Tshibola'],
        ['Décision', 'GO conditionnel (24/03, 17h30) — signé le 25/03 à 09:15'],
      ],
    },
    result: "Un véhicule contrôlé, un conducteur briefé, un ordre de mission signé : le trajet peut partir.",
    pitfall: "Sauter le contrôle pré-départ « parce que le véhicule a roulé hier » : la panne la plus fréquente en zone isolée est celle qu'une inspection de cinq minutes aurait vue — pression d'un pneu, niveau, courroie.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 6',
    title: 'Suivre la mission, la clôturer le jour même et tirer le retour d\'expérience',
    intro: "La mission ne s'arrête pas au départ du véhicule : elle se suit pendant, et elle se clôture le jour même. Un trajet clos le lendemain est un trajet mal saisi.",
    steps: [
      {
        title: 'Suivez la mission',
        actions: [
          "La dispatcheuse tient un tableau de check-in : heure prévue, heure reçue, statut.",
          "Un check-in manquant déclenche l'échelle d'alerte (15, 30, 60 minutes) sans attendre.",
          "Les messages WhatsApp horodatés constituent la trace du trajet.",
        ],
      },
      {
        title: 'Clôturez le jour même',
        actions: [
          "Compteur d'arrivée relevé, plein à plein, bon joint.",
          "Saisie du trajet dans l'onglet Trajets avant 18h : date, véhicule, conducteur, motif, Km départ, Km arrivée, litres.",
          "Debriefing de 5 minutes : état de la piste, points d'attention, incidents ; informations utiles partagées avec le point focal sécurité et le cluster.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — tableau de check-in du 25/03',
      lines: [
        "09:30 départ → reçu 09:31, conforme. 10:00 km 10 → reçu 10:02, conforme.",
        "10:42 : message imprévu du conducteur — arrêté à un check-point non officiel au km 22. Le tableau est mis de côté : le protocole check-point (Procédure 10) prend le relais.",
        "Clôture du trajet : 61 660 → 61 710 = 50 km, 9,1 L (ligne 22 de l'onglet Trajets), motif annoté « Convoi bloqué check-point ».",
      ],
    },
    result: "Livrable 7 (partie 1) terminé : un ordre de mission, un plan de check-in et un trajet clôturé le jour même, même quand la mission a dérapé.",
    tip: "Complétez toujours la colonne D du motif quand un événement exceptionnel s'est produit : c'est cette annotation qui permettra, un mois plus tard, d'écarter une ligne rouge à bon escient.",
  },

  // ───────────── PROCÉDURE 9 — Gérer les conducteurs ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 3',
    title: 'Constituer et contrôler le dossier de chaque conducteur',
    intro: "Le conducteur est le premier élément de sécurité d'un véhicule. Son dossier prouve qu'il a été choisi, vérifié et formé. Vous le montez à la prise de poste pour les quatre chauffeurs, puis à chaque recrutement.",
    steps: [
      {
        title: 'Réunissez les pièces',
        actions: [
          "Permis de conduire valide, catégorie adaptée, date d'expiration.",
          "Test pratique sur piste et en conduite défensive, passé avec vous ou un chauffeur senior, noté sur une fiche.",
          "Certificat d'aptitude médicale et vue, selon le règlement de l'organisation.",
          "Contact d'urgence, téléphone professionnel, politique signée (Procédure 7) et émargement de formation (Procédure 2).",
        ],
      },
      {
        title: 'Contrôlez et programmez les rappels',
        actions: [
          "Vérifiez la validité de chaque pièce et datez le contrôle.",
          "Créez un rappel 60 jours avant l'expiration de chaque permis.",
        ],
      },
    ],
    table: {
      columns: ['Conducteur', 'Véhicule habituel', 'Permis valide jusqu\'au', 'Test sur piste', 'Politique signée'],
      rows: [
        ['Jean-Pierre Mumbere', 'V-01', '2028-05-31', '2026-03-03', '2026-03-09'],
        ['Alice Kavira', 'V-02', '2027-09-30', '2026-03-03', '2026-03-09'],
        ['Patrick Bahati', 'V-03', '2028-02-28', '2026-03-04', '2026-03-09'],
        ['Espoir Katembo', 'V-04', '2026-06-30', '2026-03-05', '2026-03-09'],
      ],
    },
    result: "Quatre dossiers complets et un rappel programmé le 1er mai 2026 pour le permis d'Espoir Katembo, valide jusqu'au 30 juin.",
    pitfall: "Confier un véhicule à un conducteur dont vous n'avez jamais vu le permis : l'assurance peut refuser de couvrir un accident, et c'est vous qui en répondez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 3',
    title: 'Planifier les heures de conduite et les repos de la semaine',
    intro: "Le planning de conduite se construit le lundi pour la semaine et s'affiche au garage. Il rend visible ce qu'une politique écrite promet : personne ne dépasse les heures maximales, et chaque trajet long a un relais.",
    steps: [
      {
        title: 'Construisez le planning hebdomadaire',
        actions: [
          "Un tableau : jour, conducteur, véhicule, mission, heures de conduite estimées (durée affichée × 1,5 sur piste).",
          "Vérifiez trois limites : 8 heures de conduite effective par jour ; au moins 10 heures de repos entre deux journées de conduite ; un jour de repos par semaine hors urgence documentée.",
        ],
      },
      {
        title: 'Équilibrez et prévoyez les relais',
        actions: [
          "Répartissez les trajets isolés entre conducteurs : personne ne fait tous les longs trajets de la semaine.",
          "Prévoyez un conducteur de relais pour chaque trajet de plus de 6 heures de conduite.",
        ],
      },
    ],
    table: {
      columns: ['Jour', 'Conducteur', 'Véhicule', 'Mission', 'Conduite estimée'],
      rows: [
        ['Lun 23/03', 'Alice Kavira', 'V-02', 'Approvisionnement entrepôt (40 km)', '1 h 30'],
        ['Mar 24/03', 'Jean-Pierre Mumbere', 'V-01', 'Réunion de coordination Goma (22 km)', '1 h 00'],
        ['Mer 25/03', 'Patrick Bahati', 'V-03', 'Supervision médicale Rutshuru (50 km)', '2 h 30'],
        ['Jeu 26/03', 'Espoir Katembo', 'V-04', 'Transport équipe nutrition (30 km)', '1 h 15'],
        ['Ven 27/03', 'Jean-Pierre Mumbere', 'V-03', 'Supervision Rutshuru, test de consommation (50 km)', '2 h 30'],
      ],
    },
    result: "Un planning affiché chaque lundi : aucun dépassement de 8 heures, aucun trajet long sans relais.",
    pitfall: "Planifier « au plus juste ». Un trajet de 8 h 15 annoncé à 8 h devient 10 h dès qu'un check-point ou un gué s'en mêle : prévoyez la marge dans le planning, pas dans la fatigue du chauffeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 3',
    title: 'Suivre la performance de chaque conducteur et répondre de façon graduée',
    intro: "Le Tableau de bord donne, par conducteur, des chiffres. Votre rôle est de les transformer en accompagnement, pas en reproche : un système de contrôle qui ne produit que des reproches finit contourné.",
    steps: [
      {
        title: 'Suivez chaque mois',
        actions: [
          "Lisez la synthèse par conducteur : nombre de trajets, écart moyen, erreurs de carnet.",
          "Menez un entretien individuel de 15 minutes : ce qui fonctionne, les difficultés avec le carnet, les incidents évités.",
        ],
      },
      {
        title: 'Répondez de façon graduée',
        actions: [
          "Erreur de saisie isolée : rappel oral, le jour même.",
          "Erreurs répétées : rappel écrit et nouvelle séance de formation.",
          "Écart de consommation ou infraction grave : Procédure 6 et suite RH, jamais d'accusation publique.",
          "Citez au moins un conducteur en exemple positif chaque mois.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — entretiens du 25/03',
      lines: [
        "Alice Kavira : +0,4 %, 4 trajets sans erreur de carnet → félicitée, devient référente pour former un futur conducteur.",
        "Patrick Bahati : entretien d'information sur la vérification de V-03, sans accusation ; il aide à retrouver les photos de compteur demandées.",
      ],
    },
    result: "Livrable 7 (partie 2) terminé : dossiers conducteurs complets, planning de conduite affiché, entretiens mensuels programmés.",
    tip: "Un conducteur qui comprend pourquoi on vérifie les chiffres devient votre meilleur allié : c'est lui qui voit le premier un pneu à plat, un jerrycan manquant ou une pompe qui triche.",
  },

  // ───────────── PROCÉDURE 10 — Check-point ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 1 sur 5',
    title: 'Préparer en amont : consigne écrite, briefing et véhicule en règle',
    intro: "Un check-point se gère avant d'y arriver : par des règles écrites, un briefing répété et ce qu'il y a dans le véhicule. Le jour même, il n'y a plus de temps pour improviser, et l'angoisse prend la place du jugement.",
    steps: [
      {
        title: 'Briefez chaque conducteur',
        actions: [
          "Remettez une consigne écrite d'une page et faites-la répéter à voix haute.",
          "Rappelez les quatre règles : on ne donne rien, on ne prend personne, on ne photographie pas, on appelle la base.",
          "Rappelez le principe : la sécurité des personnes prime sur la marchandise, le carburant et le véhicule.",
        ],
      },
      {
        title: 'Préparez le véhicule',
        actions: [
          "Une pochette de documents : ordre de mission, carte grise, assurance, lettre de l'organisation décrivant la mission.",
          "Aucun objet à connotation militaire, aucune marchandise non prévue, aucun passager non listé.",
          "Téléphone chargé, partage de position activé.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — consigne affichée dans chaque véhicule',
      lines: [
        "« Ce véhicule transporte uniquement du personnel médical de Kemora Santé. Je n'ai pas l'autorisation de donner du carburant ou de l'argent, ni de prendre des passagers. Je dois appeler ma base. »",
        "Chaque conducteur titulaire ET de relais signe la consigne : 4 signatures le 09/03.",
      ],
    },
    result: "Une consigne d'une page signée par chaque conducteur, et des véhicules dont la pochette de documents est contrôlée chaque lundi.",
    pitfall: "Briefer le conducteur titulaire seulement : le jour où un relais conduit, il ne connaît pas la consigne. Tout conducteur la lit, la répète et la signe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 2 sur 5',
    title: 'Au check-point : les huit gestes du conducteur',
    intro: "Le conducteur n'est ni négociateur ni héros. Sa seule mission : rester calme, ne rien engager, informer sa base. Voici les gestes, dans l'ordre, à répéter jusqu'à ce qu'ils soient automatiques.",
    steps: [
      {
        title: 'Les huit gestes',
        actions: [
          "1. Ralentir tôt, s'arrêter où on le demande, sans brusquerie.",
          "2. Rester calme : voix basse, mouvements lents, mains visibles sur le volant.",
          "3. Couper le moteur et baisser la vitre si on le demande ; sinon garder les portes verrouillées.",
          "4. Saluer et présenter la mission en une phrase : « Personnel médical de Kemora Santé, mission de supervision de santé ».",
          "5. Présenter les documents si on les demande, sans les remettre définitivement.",
          "6. Ne rien donner, ne rien promettre, ne prendre personne ; demander calmement à parler au chef.",
          "7. Ne photographier ni les hommes ni les lieux ; ne pas téléphoner à voix haute.",
          "8. Dès que possible, envoyer à la base un message court avec la position.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — format du message du conducteur',
      lines: [
        "« V-03 arrêté check-point km 22 axe Rutshuru, 10h42. 6 hommes armés, tenues mixtes, calmes, demandent du carburant. 3 à bord, tout va bien. Position jointe. »",
      ],
    },
    pitfall: "« Discuter » pour gagner du temps ou négocier seul un tarif : le conducteur n'a ni l'autorité ni la protection pour le faire. Il renvoie tout à sa base.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 3 sur 5',
    title: 'Côté base : le protocole de la dispatcheuse dans les trois premières minutes',
    intro: "Quand le message arrive, la dispatcheuse a trois minutes pour être utile. Elle ne décide pas du fond : elle recueille, rassure, alerte. Voici le protocole à afficher à côté de son téléphone.",
    steps: [
      {
        title: 'Répondez en moins de deux minutes',
        actions: [
          "Accusez réception et donnez les consignes de calme : ne rien donner, ne pas résister, ne pas photographier.",
          "Demandez : position exacte, nombre d'hommes armés, uniformes ou insignes, attitude, exigence précise, véhicules arrêtés, état des personnes, carburant restant.",
          "Demandez une réponse « OK » toutes les 15 minutes.",
          "N'envoyez aucune consigne de paiement ni de refus au nom de la direction.",
        ],
      },
      {
        title: 'Alertez et tracez',
        actions: [
          "Appelez le point focal sécurité, puis le coordinateur logistique pays.",
          "Ouvrez une fiche d'incident horodatée : chaque message et chaque appel avec l'heure.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — réponse de la base, 10h44',
      lines: [
        "« Message reçu. Restez calmes, ne donnez rien, ne résistez pas, ne photographiez pas. Envoyez : nombre d'hommes armés, uniformes, ce qu'ils demandent exactement. Nous appelons la sécurité. Répondez OK toutes les 15 minutes. »",
      ],
    },
    pitfall: "Écrire au chauffeur « donnez-leur ce qu'ils veulent pour qu'on passe » ou, au contraire, « refusez » sans décision de la direction : ce choix engage la sécurité de l'équipe et la neutralité perçue de l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 4 sur 5',
    title: 'Décider avec les principes humanitaires et remonter en parallèle',
    intro: "La décision revient au point focal sécurité et à la direction, pas au conducteur ni au dispatcheur. Elle se prend en quelques minutes, sur des faits, avec les principes humanitaires comme grille et chaque recommandation justifiée par un principe, pas par une intuition.",
    steps: [
      {
        title: 'Passez la demande au test des principes',
        actions: [
          "Humanité : la sécurité des personnes à bord passe avant tout bien matériel. En cas de menace immédiate sur leur vie, le conducteur ne se met pas en danger pour protéger du carburant : il informe la base dès qu'il le peut.",
          "Neutralité et indépendance : aucune remise de carburant, d'argent ou de biens à un groupe armé sans décision de la coordination ; un paiement non documenté devient un précédent exigé demain.",
          "Impartialité : même règle pour tous les véhicules et tous les groupes.",
        ],
      },
      {
        title: 'Remontez en parallèle',
        actions: [
          "En interne d'abord : point focal sécurité, coordinatrice pays, coordinateur logistique pays.",
          "En externe ensuite : Logistics Cluster (alerte d'accès aux autres ONG), OCHA selon le mécanisme du pays, réseau de sécurité des ONG de la zone.",
          "Les autorités locales ou chefs coutumiers ne sont sollicités que par la direction.",
        ],
      },
    ],
    table: {
      columns: ['Qui', 'Quoi', 'Délai'],
      rows: [
        ['Point focal sécurité et coordinatrice pays', 'Décision : rien donner, attendre, négocier par une autorité, ou faire demi-tour', 'Dans les 15 minutes'],
        ['Dispatcheuse', 'Suivi des « OK » toutes les 15 minutes, fiche horodatée', 'En continu'],
        ['Coordinateur logistique pays', 'Alerte Logistics Cluster, OCHA, ONG de la zone', "Dans l'heure"],
        ['Responsable de flotte', 'Report des missions, redéploiement des autres véhicules', 'Immédiat'],
      ],
    },
    pitfall: "Informer le cluster avant la direction. L'ordre est interne d'abord, externe ensuite — mais n'oubliez jamais l'externe : l'alerte protège les autres équipes de la zone.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 10 — Étape 5 sur 5',
    title: 'Après l\'incident : rapport, journal d\'accès, soutien et mise à jour des règles',
    intro: "Un incident non écrit n'a pas eu lieu : il ne protège personne la prochaine fois. Vous en sortez avec un rapport, une information partagée et une règle mise à jour.",
    steps: [
      {
        title: 'Rédigez le rapport dans les 24 heures',
        actions: [
          "Remplissez la fiche d'incident ci-dessous ; joignez les messages WhatsApp horodatés.",
          "Mettez à jour le journal d'accès et partagez l'observation routière avec le cluster.",
        ],
      },
      {
        title: 'Tirez les conséquences',
        actions: [
          "Entretien de soutien avec le conducteur et les passagers.",
          "Mise à jour de la consigne et de la politique (sections 3, 4 et 5).",
          "Réévaluation de l'itinéraire avant la prochaine mission.",
        ],
      },
    ],
    table: {
      columns: ['Rubrique de la fiche d\'incident', 'À remplir'],
      rows: [
        ['Date, heure, lieu', "Début et fin de l'incident, position précise, nom de l'axe"],
        ['Véhicule et personnes', 'Identifiant, conducteur, passagers'],
        ['Faits', 'Chronologie sans interprétation : qui, quoi, combien'],
        ['Exigences exprimées', 'Ce qui a été demandé, par qui (description), comment'],
        ['Décisions', 'Qui a décidé quoi, à quelle heure, sur quel principe'],
        ['Issue', "Comment l'incident s'est terminé, état des personnes et du véhicule"],
        ['Suites', 'Actions, responsables, échéances'],
      ],
    },
    result: "Livrable 8 (première partie) : consigne check-point, fiche de rapport d'incident et mise à jour de la politique engagée.",
    tip: "Gardez l'incident check-point et l'enquête de consommation dans deux dossiers distincts, avec deux fiches : l'urgence de l'un ne doit pas effacer l'autre, ni contaminer ses conclusions.",
  },

  // ───────────── PROCÉDURE 11 — Accident ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 1 sur 4',
    title: 'Les dix premières minutes : sécuriser, secourir, alerter',
    intro: "Après un accident, les premières minutes décident de la gravité de la suite. L'ordre est toujours le même : les personnes d'abord, le véhicule ensuite, la discussion de responsabilité en dernier.",
    steps: [
      {
        title: 'Sécurisez',
        actions: [
          "Coupez le contact, serrez le frein à main, mettez les feux de détresse.",
          "Éloignez les occupants de la route en cas de risque : incendie, circulation, zone à risque sécuritaire.",
          "Placez le triangle seulement si la circulation et la sécurité le permettent.",
        ],
      },
      {
        title: 'Secourez et alertez',
        actions: [
          "Vérifiez chaque personne : conscience, respiration, saignements ; premiers secours avec la trousse.",
          "Ne déplacez pas un blessé grave sauf danger vital.",
          "Message court à la base, puis appel : lieu, nombre de blessés, état des véhicules, danger.",
        ],
      },
    ],
    example: {
      title: 'Exemple hypothétique — message du conducteur',
      lines: [
        "« ACCIDENT V-04, km 31 de l'axe, 14h20. 1 blessé léger (conducteur), 5 passagers indemnes. Véhicule hors route, pas de feu. Nous sommes en sécurité à 20 m. Position jointe. »",
      ],
    },
    result: "Les personnes sont en sécurité, les blessés pris en charge et la base alertée dans les 15 minutes.",
    pitfall: "Perdre vingt minutes à discuter de la responsabilité avant de s'occuper des blessés : premiers secours et alerte passent avant toute autre considération.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 2 sur 4',
    title: 'Documenter sur place sans jamais admettre de responsabilité',
    intro: "Ce que vous documentez dans l'heure qui suit sert à l'assurance, à l'enquête interne et, si besoin, à votre défense. Ce que vous dites sur place peut être utilisé contre vous : vous documentez, vous ne concluez pas.",
    steps: [
      {
        title: 'Rassemblez les preuves',
        actions: [
          "Photographiez la position des véhicules, la chaussée, les traces, les plaques et les dégâts, sous plusieurs angles.",
          "Relevez nom et téléphone des témoins et des autres conducteurs ; notez l'heure.",
          "Dessinez un croquis à la main, avec directions et distances ; relevez le compteur.",
        ],
      },
      {
        title: 'Gardez la maîtrise des échanges',
        actions: [
          "Ne dites pas « c'est ma faute » ; ne signez aucun papier d'un tiers ou d'une autorité que vous ne comprenez pas.",
          "Ne payez aucune indemnité sur place sans décision de la direction.",
          "En cas de pression d'une foule, quittez les lieux vers le poste de sécurité le plus proche et prévenez la base.",
        ],
      },
    ],
    result: "Un dossier de preuves (photos, croquis, témoins, compteur) constitué sur place, sans aucune déclaration de responsabilité.",
    pitfall: "Signer un constat ou un « arrangement » dans une langue ou sur un papier que vous ne maîtrisez pas, sous la pression : la signature vous engage, vous et l'organisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 3 sur 4',
    title: 'Notifier dans les délais et rédiger le rapport d\'accident',
    intro: "Chaque personne à informer a son délai. Le délai de l'assureur est fixé par votre police : vérifiez-le dès la prise de poste, il est souvent de 48 heures à 5 jours.",
    steps: [
      {
        title: 'Respectez les délais',
        actions: [
          "Notifiez dans l'ordre du tableau ci-dessous.",
          "Pour un blessé grave, un décès ou la perte du véhicule, alertez immédiatement la direction : le délai du tableau ne s'applique plus.",
        ],
      },
      {
        title: 'Rédigez le rapport',
        actions: [
          "Chronologie des faits, personnes, blessures, dégâts estimés, témoins, causes probables, mesures prises.",
          "Joignez les photos, le croquis et les messages horodatés.",
        ],
      },
    ],
    table: {
      columns: ['Qui', 'Quoi', 'Délai'],
      rows: [
        ['Point focal sécurité', 'Appel et message', '15 minutes après la mise en sécurité des personnes'],
        ['Coordinateur logistique pays', 'Rapport oral', "1 heure"],
        ['Rapport écrit complet', 'Fiche d\'accident avec pièces jointes', '24 heures'],
        ['Assureur', 'Déclaration avec constat et photos', 'Délai de la police d\'assurance (à vérifier)'],
        ['Direction, bailleur', 'Selon la gravité', 'Selon la politique de l\'organisation'],
      ],
    },
    result: "Chaque destinataire est informé dans son délai, et un rapport écrit unique existe au bout de 24 heures.",
    tip: "Préparez à l'avance une fiche d'accident vierge dans chaque véhicule, avec les numéros d'urgence : personne n'écrit un rapport propre au bord d'une route à 14h20.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 11 — Étape 4 sur 4',
    title: 'Faire expertiser, décider de la remise en service et tirer le retour d\'expérience',
    intro: "Un véhicule accidenté ne repart pas parce qu'il démarre. La remise en service est une décision écrite, prise après expertise : vous êtes le dernier filtre avant le prochain trajet.",
    steps: [
      {
        title: 'Immobilisez et faites expertiser',
        actions: [
          "Passez le statut du véhicule à « En réparation » dans l'onglet Véhicules (colonne E).",
          "Faites inspecter la direction, les freins, le châssis et les pneus par le garagiste, avec un compte rendu écrit.",
          "Saisissez la réparation dans l'onglet Entretien (type, kilométrage, coût).",
        ],
      },
      {
        title: 'Décidez et apprenez',
        actions: [
          "Remise en service uniquement sur compte rendu écrit ; repassez le statut à « En service ».",
          "Sous 7 jours, retour d'expérience avec l'équipe : cause, ce qui aurait évité l'accident, mise à jour de la politique.",
        ],
      },
    ],
    example: {
      title: 'Exemple hypothétique — suite de l\'accident de V-04',
      lines: [
        "Immobilisé du 28/03 au 02/04, statut « En réparation » puis « En service » ; réparation saisie dans Entretien ; retour d'expérience le 03/04 : vitesse excessive sur piste mouillée → rappel du plafond de 50 km/h.",
      ],
    },
    result: "Livrable 8 (seconde partie) : fiche de rapport d'accident et décision de remise en service écrite.",
    pitfall: "Remettre en service un véhicule « parce qu'il roule » après un choc : un châssis ou une direction touchés cèdent plus tard, loin de tout secours.",
  },

  // ───────────── CAS RÉSOLUS ─────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Dossier flotte de Goma : la chronologie du 2 au 27 mars',
    scenario: "Vous avez repris quatre véhicules sans aucun document écrit. Voici, semaine par semaine, ce qui a été fait, pourquoi, et ce que cela a produit.",
    steps: [
      {
        title: 'Semaine 1 (2–6 mars) : poser les bases',
        actions: [
          "Lundi 2 : inventaire des 4 véhicules, consommations de référence, onglet Véhicules, formation des 4 chauffeurs, premiers trajets saisis.",
          "Mardi 3 à jeudi 5 : tests pratiques de conduite, dossiers conducteurs, plan d'entretien validé avec le garagiste.",
          "Vendredi 6 : politique v01 rédigée ; première revue du vendredi : 5 trajets, 0 anomalie.",
        ],
        result: "Livrables 1 et 2 posés ; début des Livrables 3 et 6.",
      },
      {
        title: 'Semaine 2 (9–13 mars) : verrouiller',
        actions: [
          "Lundi 9 : politique signée par 8 personnes ; consigne check-point signée par les 4 chauffeurs ; règle « pas de carnet à jour, pas de départ » affichée.",
          "Mercredi 11 et vendredi 13 : vidanges de V-01 et V-04 saisies dans l'onglet Entretien.",
          "Vendredi 13 : revue du vendredi, V-03 +17,3 % : observation.",
        ],
        result: "Livrable 6 signé ; Livrable 3 alimenté.",
      },
      {
        title: 'Semaine 3 (16–20 mars) : le signal',
        actions: [
          "Mercredi 18 : deuxième ligne rouge sur V-03 : niveau 2, vérifications ouvertes.",
          "Jeudi 19 : réparation de suspension de V-03 (310 USD) saisie dans Entretien.",
          "Vendredi 20 : trois lignes en 8 jours ; bons de carburant demandés à la dispatcheuse.",
        ],
        result: "Procédure 6 ouverte, une cause neutre déjà écartée (suspension).",
      },
      {
        title: "Semaine 4 (23–27 mars) : l'incident et la clôture",
        actions: [
          "Lundi 23 : bons de carburant concordants ; demande de véhicule du 25/03 qualifiée.",
          "Mardi 24 : garage sans anomalie ; mission planifiée, GO conditionnel.",
          "Mercredi 25 : mission, check-point au km 22, protocole appliqué, passage à 13h05.",
          "Vendredi 27 : test avec un autre conducteur (+2,7 %), note de signalement, politique v02.",
        ],
        result: "Livrables 4, 5, 7 et 8 terminés.",
      },
    ],
    pitfall: "Ce qui se serait passé sans méthode : la consommation de V-03 aurait dérivé pendant des mois, le chauffeur aurait cédé 20 litres au check-point « pour passer », et la politique n'aurait été écrite qu'après le premier conflit entre programmes.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Convoi bloqué au check-point, mercredi 25 mars (la marche à suivre)',
    scenario: "10h42. La dispatcheuse reçoit le message du conducteur de V-03 : arrêté à un check-point non officiel au km 22, six hommes armés, demande de 20 litres de carburant, aucun véhicule ne passe depuis le matin. Voici l'enchaînement, avec le principe qui justifie chaque recommandation.",
    steps: [
      {
        title: '10h32 à 10h44 — Message reçu et première réponse',
        actions: [
          "10h32 : V-03 arrive au check-point du km 22 ; 10h42 : le conducteur écrit, position jointe.",
          "10h44 : la dispatcheuse répond avec le script : calme, ne rien donner, ne pas résister, informations demandées.",
        ],
        result: "Réponse en 2 minutes, sans consigne de paiement ni de refus.",
      },
      {
        title: '10h48 à 11h10 — Alerte et décision',
        actions: [
          "10h48 : appels à Marcel Tshibola, puis à Jean-Marc Ilunga ; Sylvie Matala informée.",
          "10h55 : 6 hommes, calmes, tenues mixtes sans insigne ; 3 autres véhicules civils arrêtés avec la même demande.",
          "11h10 : décision du point focal sécurité et de la coordinatrice pays : aucune remise de carburant ; le conducteur explique la mission et demande à parler au chef ; en cas de menace immédiate, la sécurité des personnes prime.",
        ],
        result: "Décision écrite à 11h10, avec l'heure et les noms des décideurs.",
      },
      {
        title: '11h15 à 13h05 — Remontée externe et issue',
        actions: [
          "11h15 : le coordinateur logistique pays alerte le Logistics Cluster et le réseau de sécurité des ONG.",
          "12h00 : la direction sollicite par la voie hiérarchique un chef coutumier de la zone.",
          "13h05 : le groupe laisse passer ; aucun carburant remis ; la supervision est abrégée ; retour à la base à 14h40.",
        ],
        result: "Trois personnes indemnes, aucun précédent créé.",
      },
      {
        title: 'Après — Rapport et mise à jour',
        actions: [
          "17h00 : fiche d'incident remplie, messages WhatsApp joints ; 17h30 : journal d'accès mis à jour, cluster informé.",
          "27/03 : politique v02 avec le paragraphe sur les paiements en nature.",
        ],
        result: "Incident documenté, règle mise à jour.",
      },
    ],
    table: {
      columns: ['Recommandation au dispatcheur', 'Principe ou règle qui la justifie'],
      rows: [
        ['Ne rien donner, ne pas résister, ne pas photographier', 'Humanité (la sécurité des personnes prime) ; Neutralité (aucun appui à un groupe armé)'],
        ['Exiger position, nombre d\'hommes, exigence précise avant toute décision', 'Décider sur des faits, pas sur la peur ; Impartialité (même réponse pour tous)'],
        ['La décision revient au point focal sécurité et à la direction', 'Indépendance : une décision institutionnelle, pas celle d\'un conducteur isolé'],
        ['Alerter le cluster et les ONG de la zone', 'Humanité : protéger les autres équipes qui passeront par le même axe'],
        ['Fiche d\'incident horodatée', 'Décision traçable et défendable devant un bailleur ou un auditeur'],
      ],
    },
    pitfall: "Accepter les 20 litres « pour débloquer » : un paiement en nature non documenté aujourd'hui devient une exigence systématique demain, et compromet la neutralité perçue de l'organisation.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — Investigation de l'anomalie de V-03 (onglet Trajets annoté)",
    scenario: "Les six trajets de V-03 en mars, tels qu'ils apparaissent dans l'onglet Trajets, avec vos annotations. Le circuit est toujours le même (50 km, 15,0 L/100 km attendus) : seules les lignes 14, 17, 19 et 22 sont rouges.",
    steps: [
      "Étape 1 : filtre V-03 et ANOMALIE, litres attendus et excès calculés.",
      "Étape 2 : explications neutres écartées (chaînage, motif, suspension) ou testées (garage).",
      "Étape 3 : bons n° 0412, 0419 et 0426 concordants ; distance GPS de référence de 50 km.",
      "Étape 4 : garage du 24/03 sans anomalie ; test du 27/03 avec un autre conducteur à +2,7 %.",
    ],
    table: {
      columns: ['Date (ligne)', 'Km', 'Litres', 'Conso. /100 km', 'Écart', 'Statut', 'Annotation'],
      rows: [
        ['04/03 (7)', '50', '7,6', '15,2', '+1,3 %', 'OK', 'Référence'],
        ['10/03 (11)', '50', '7,7', '15,4', '+2,7 %', 'OK', 'Référence'],
        ['13/03 (14)', '50', '8,8', '17,6', '+17,3 %', 'ANOMALIE', '1re ligne rouge : observation'],
        ['18/03 (17)', '50', '8,9', '17,8', '+18,7 %', 'ANOMALIE', '2e ligne : niveau 2'],
        ['20/03 (19)', '50', '9,0', '18,0', '+20,0 %', 'ANOMALIE', '3 lignes en 8 jours'],
        ['25/03 (22)', '50', '9,1', '18,2', '+21,3 %', 'ANOMALIE', 'Attente de 2 h 30 au check-point : ligne expliquée, hors schéma'],
      ],
    },
    result: "Bilan : trois lignes en 8 jours (13, 18, 20/03), écart moyen mensuel du conducteur +13,6 %, bons concordants, véhicule sans anomalie au garage, consommation normale avec un autre conducteur : niveau 3, note factuelle de signalement du 27/03.",
    pitfall: "Ce que le dossier ne dit pas : pourquoi. Il ne désigne pas le conducteur ; la conclusion appartient à l'entretien contradictoire et à la décision de la direction. Votre rôle est d'établir les faits, pas de juger.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le paragraphe de politique mis à jour (v02, 27/03/2026)',
    scenario: "La question de l'exercice : dans quelle section de politique-utilisation-vehicules.docx faut-il décrire la conduite à tenir face à un check-point qui exige un paiement en nature ? Réponse : section 3 (comportement à adopter à un check-point), complétée par la section 4 (interdit de remise) et la section 5 (notification).",
    steps: [],
    example: {
      title: 'Les trois ajouts tels que rédigés',
      lines: [
        "Section 3 : « À un check-point, le conducteur reste calme, présente la mission en une phrase et ne remet ni carburant, ni argent, ni bien, quelle que soit la demande, sans décision du point focal sécurité ou de la coordinatrice pays. Il envoie sans délai un message avec sa position et la nature de la demande. Seule exception : une menace immédiate sur la vie des personnes à bord, où leur sécurité prime ; il informe la base dès qu'il le peut. Toute remise, même décidée, fait l'objet d'une fiche d'incident sous 24 heures. »",
        "Section 4 (ajout) : « Toute remise de carburant, d'argent ou de biens à un tiers armé ou à une autorité de fait, sans décision écrite de la coordination. »",
        "Section 5 (ajout) : « Check-point avec exigence : notification du point focal sécurité sous 15 minutes ; alerte du Logistics Cluster par le coordinateur logistique pays sous une heure. »",
        "Section 6 : v02 rédigée le 27/03, approuvée par Sylvie Matala le 30/03 ; nouvelles signatures : 8 sur 8 le 31/03. La v01 est conservée.",
      ],
    },
    result: "Un paragraphe mesurable (une règle, une exception, un délai), qui répond à la situation réelle du 25/03 et se vérifie lors de la prochaine mission.",
    tip: "Datez et numérotez chaque version, et conservez la précédente : savoir quelle règle s'appliquait le jour d'un incident est la première question d'un auditeur.",
  },

  // ───────────── EXERCICES ─────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Monter le carnet de bord de la flotte de Tine (Tchad)',
    instructions: "Contexte fictif : vous êtes logisticien(ne) de la même ONG médicale à Tine (Tchad), responsable de deux véhicules. T-01 : Toyota Hilux Double Cabine, mise en service le 2022-09-01, consommation théorique 11,0 L/100 km. T-02 : Toyota Land Cruiser HZJ78, mise en service le 2021-04-15, 14,0 L/100 km. Prix moyen du carburant : 1,60 USD/L. Les chauffeurs ont tenu des carnets papier ; voici les 8 trajets du 6 au 16 avril 2026. Refaites seul(e) les Procédures 1, 3, 4, 5 et 6.",
    steps: [
      { title: 'Onglet Véhicules', actions: ["Videz d'abord les exemples, contenu seulement : Trajets A5:F22 et H5:H22 (sans toucher aux colonnes G, I, J, K, L, M), Entretien A5:E9.", "Écrasez les lignes 5 et 6 de Véhicules avec T-01 et T-02, videz les lignes 7 et 8 et saisissez les cinq colonnes A à E."] },
      { title: 'Onglet Trajets', actions: ["Saisissez les 8 trajets dans l'ordre chronologique à partir de la ligne 5, en n'écrivant que dans A à F et H.", "Filtrez chaque véhicule et contrôlez le chaînage des compteurs."] },
      { title: 'Lecture des colonnes calculées', actions: ["Repérez les lignes ANOMALIE sans regarder la solution ; refaites à la main le calcul d'une ligne normale et d'une ligne en anomalie."] },
      { title: 'Onglet Entretien', actions: ["Saisissez deux interventions : T-01, 2026-04-10, vidange + filtres, 12 540 km, 90 USD ; T-02, 2026-04-16, pneus (1 arrière), 33 280 km, 130 USD."] },
      { title: 'Tableau de bord', actions: ["B5 = 1,6 ; B6 = '2026-04 ; remplacez deux noms dans A18 et A19 par ceux des conducteurs ; lisez les synthèses (les lignes V-03 et V-04 affichent zéro : laissez-les).", "Pour chaque ligne rouge, appliquez les trois niveaux de la Procédure 6 et écrivez votre décision."] },
    ],
    table: {
      columns: ['Date', 'Véhicule', 'Conducteur', 'Motif', 'Km départ', 'Km arrivée', 'Litres'],
      rows: [
        ['2026-04-06', 'T-01', 'Moussa Ibrahim', 'Ravitaillement marché de Tine', '12430', '12480', '5,6'],
        ['2026-04-07', 'T-02', 'Fatimé Abakar', 'Visite site déplacés', '33100', '33160', '8,5'],
        ['2026-04-08', 'T-01', 'Moussa Ibrahim', 'Transport équipe santé', '12480', '12540', '6,7'],
        ['2026-04-09', 'T-02', 'Fatimé Abakar', 'Distribution NFI', '33160', '33220', '8,4'],
        ['2026-04-13', 'T-01', 'Moussa Ibrahim', 'Transport équipe santé', '12540', '12600', '7,9'],
        ['2026-04-14', 'T-02', 'Fatimé Abakar', 'Visite site déplacés', '33220', '33280', '6,9'],
        ['2026-04-15', 'T-01', 'Moussa Ibrahim', 'Transport équipe santé', '12600', '12650', '6,6'],
        ['2026-04-16', 'T-01', 'Moussa Ibrahim', 'Ravitaillement marché de Tine', '12650', '12700', '5,6'],
      ],
    },
    tip: "Faites le calcul à la main d'abord pour une ligne, puis laissez le classeur confirmer. Si les deux ne concordent pas, cherchez l'erreur de saisie avant de chercher une explication.",
    deliverable: "carnet-de-bord-vehicule.xlsx complété pour Tine (2 véhicules, 8 trajets, 2 interventions, Tableau de bord d'avril lu) + une page justifiant le niveau retenu pour chaque ligne rouge.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Un check-point à Tine : la consigne au dispatcheur',
    instructions: "Vendredi 17 avril 2026, 11h20. Le conducteur de T-02, Fatimé Abakar, deux infirmiers à bord, écrit : « Arrêtés au check-point du km 15, route d'Ourécassoni. Hommes en uniforme sans insigne reconnaissable. Ils demandent 20 L de carburant et veulent monter un passager jusqu'à Ourécassoni. » Vous êtes le logisticien responsable de flotte et vous aidez la dispatcheuse. Appliquez la Procédure 10.",
    steps: [
      { title: 'Message de réponse', actions: ["Rédigez en 8 lignes au plus la réponse de la dispatcheuse : consignes de calme, informations à exiger (au moins 5), rythme des « OK »."] },
      { title: 'Décision', actions: ["Écrivez la décision attendue du point focal sécurité sur le carburant et sur le passager, et ce que le conducteur peut faire en cas de menace immédiate."] },
      { title: 'Justification', actions: ["Associez chaque recommandation à un principe nommé (Humanité, Neutralité, Impartialité, Indépendance) plutôt qu'à une intuition."] },
      { title: 'Remontée', actions: ["Listez qui est informé, dans quel ordre, par qui et dans quel délai (interne puis externe)."] },
      { title: "Fiche d'incident", actions: ["Remplissez les rubriques Faits, Exigences exprimées, Décisions et Suites avec les informations dont vous disposez, et marquez celles qui manquent."] },
    ],
    example: {
      title: 'Exemple de ligne justifiée (autre situation)',
      lines: [
        "« Ne pas transporter l'officier demandé — Neutralité : faire monter un homme en uniforme dans un véhicule humanitaire ruine la perception de neutralité de l'organisation et met en danger les équipes qui passeront après. »",
      ],
    },
    pitfall: "Écrire « on verra sur place » : toute recommandation de conduite doit exister par écrit avant l'incident. Une consigne qui dépend de l'humeur du conducteur n'en est pas une.",
    deliverable: "Un message de réponse (8 lignes au plus), une note de décision avec principe pour chaque recommandation, la liste de remontée avec délais et une fiche d'incident partiellement remplie.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — La politique de Tine et la mission Tine–Ourécassoni',
    instructions: "Mission demandée : livrer 600 kg de matériel médical au poste de santé d'Ourécassoni, 85 km de Tine dont 60 km de piste, et y passer 2 heures. Google Maps affiche 2 h 50 à l'aller. Un check-point apparaît au km 15. Nuit à 17h45. Vous disposez de T-02 et de deux conducteurs qualifiés. Appliquez les Procédures 7, 8 et 9.",
    steps: [
      { title: 'Calculez le temps réaliste', actions: ["Appliquez le coefficient 1,5, calculez la conduite aller-retour, ajoutez le temps sur place et comparez à la limite de 8 heures par conducteur et à l'heure de nuit."] },
      { title: 'Tranchez', actions: ["Choisissez : deux conducteurs en relais, nuit sur place ou report. Justifiez par les règles de la politique."] },
      { title: "Construisez l'horaire à rebours", actions: ["Heure de départ, heure limite de retour, quatre check-ins avec réaction en cas d'absence."] },
      { title: 'Rédigez la politique de Tine', actions: ["Complétez les sections 2, 3 et 5 de politique-utilisation-vehicules.docx, tableaux compris, avec des règles mesurables, des fonctions (pas des noms de personnes) et un point focal avec suppléant."] },
      { title: "Remplissez l'ordre de mission", actions: ["Véhicule, conducteurs, passagers, objet, itinéraire, horaires, contacts, décision Go conditionnel, consigne check-point."] },
    ],
    deliverable: "politique-utilisation-vehicules.docx pour Tine (6 sections, 2 pages au plus, sections 2, 3 et 5 détaillées) + un ordre de mission + le plan de check-in de la mission.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Carnet : l'onglet Véhicules contient T-01 et T-02, la consommation théorique est un nombre, et la liste déroulante de l'onglet Trajets propose les deux véhicules.",
      "Carnet : les 8 trajets sont saisis dans l'ordre, sans ligne vide, avec des kilomètres chaînés, un conducteur à l'orthographe constante et aucune cellule E, F ou H vide.",
      "Carnet : vous identifiez 3 lignes ANOMALIE : T-01 le 13/04 (+19,7 %) et le 15/04 (+20,0 %), T-02 le 14/04 (−17,9 %, négative).",
      "Tableau de bord d'avril : T-01 270 km, 32,4 L, 0,53 USD/km ; T-02 180 km, 23,8 L, 0,93 USD/km ; flotte 450 km, 0,69 USD/km ; Moussa Ibrahim +9,0 %, Fatimé Abakar −5,6 %.",
      "Décision : T-01 est au niveau 2 (vérification : deux lignes en 15 jours), pas au niveau 3 ; T-02 est au niveau 1 (observation) et vous vérifiez que le plein a été saisi.",
      "Check-point : le message de la dispatcheuse ne donne aucune consigne de paiement ni de refus au nom de la direction et exige au moins 5 informations factuelles.",
      "Check-point : chaque recommandation nomme un principe, et le passager en uniforme est refusé au titre de la neutralité.",
      "Mission : durée retenue de 4 h 15 par sens, soit 8 h 30 de conduite aller-retour : un seul conducteur dans la journée est refusé, la solution retenue est un relais ou une nuit sur place.",
      "Politique de Tine : les sections 2, 3 et 5 portent des règles chiffrées, les fonctions habilitées sont des fonctions et le point focal a un suppléant.",
      "Ordre de mission : check-ins avec heure, point, message attendu et réaction en cas d'absence ; heure limite de retour avant la nuit.",
    ],
  },

  // ───────────── ERREURS FRÉQUENTES ─────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Accepter un « droit de passage » sans le documenter ni le remonter. Parade : consigne écrite, décision du point focal sécurité, fiche d'incident (Procédure 10).",
      "Confondre un carnet rempli et un carnet fiable : on peut arrondir les kilomètres chaque jour avec application. Parade : chaînage des compteurs et rapprochement mensuel avec les bons (Procédures 3 et 5).",
      "Reporter la maintenance préventive « parce que le véhicule roule encore bien ». Parade : échéancier hebdomadaire par kilométrage (Procédure 4).",
      "Laisser un seul conducteur faire un trajet long et isolé sans relais ni check-in prévu. Parade : planning de conduite et plan de check-in (Procédures 8 et 9).",
      "Traiter l'anomalie de consommation comme un problème purement mécanique — ou, à l'inverse, accuser le chauffeur avant toute vérification. Parade : les trois niveaux et la note factuelle (Procédure 6).",
      "Saisir « 14.5 », « 14,5 L » ou « 85 USD » : la cellule devient du texte et les formules l'ignorent sans message. Parade : nombres seuls avec la virgule décimale.",
      "Laisser la case Carburant vide quand il n'y a pas eu de plein : ligne à −100 % et fausse anomalie. Parade : plein à plein, ou regroupement des trajets jusqu'au prochain plein.",
      "Taper 2026-03 sans apostrophe en B6 : Excel le transforme en date, la synthèse affiche des zéros. Parade : '2026-03.",
      "Ajouter un véhicule ou un conducteur sans l'ajouter au Tableau de bord : son coût n'apparaît dans aucun total. Parade : étendre le tableau (Procédure 1, étape 4).",
      "Faire signer la politique aux chauffeurs seulement. Parade : signature des chauffeurs ET des responsables habilités (Procédure 7).",
      "Prendre la durée affichée par Google Maps pour la durée réelle sur piste. Parade : coefficient 1,5, puis vos propres chronométrages (Procédure 8).",
      "Demander les bons de carburant au chauffeur concerné, ou mêler l'incident de check-point et l'enquête de consommation. Parade : bons demandés à la dispatcheuse, deux dossiers séparés.",
    ],
  },

  // ───────────── RÉCAPITULATIF ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez recensé une flotte, fixé les consommations théoriques de référence et rempli l'onglet Véhicules de carnet-de-bord-vehicule.xlsx, liens vérifiés.",
      "Vous avez formé des conducteurs au carnet de bord et saisi puis contrôlé les trajets (chaînage des compteurs, plein à plein), avec une revue du vendredi datée.",
      "Vous avez construit un plan d'entretien préventif par kilométrage, saisi les interventions et calculé les échéances de chaque véhicule.",
      "Vous avez réglé et lu le Tableau de bord, interprété le coût par km, rapproché le carnet des bons de carburant et rédigé une note de reporting bailleur avec coût direct et coût complet.",
      "Vous avez traité une anomalie de consommation de bout en bout : excès chiffré, explications neutres écartées, pièces, tests contradictoires, note de signalement factuelle.",
      "Vous avez rédigé, fait signer et diffusé une politique d'utilisation des véhicules section par section, tableaux de priorité et de notification remplis.",
      "Vous avez planifié une mission transport : demande qualifiée, véhicule et conducteur choisis, temps réaliste, plan de check-in, ordre de mission, et géré les dossiers et heures de conduite des conducteurs.",
      "Vous avez rédigé une consigne check-point justifiée par les principes humanitaires, une fiche de rapport d'incident, une procédure d'accident et une version 02 de la politique.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer en quoi une flotte humanitaire diffère structurellement d'une flotte commerciale et en tirer des règles de dimensionnement et d'affectation.",
      "Je sais calculer un coût par kilomètre par véhicule, le décomposer (carburant, entretien) et l'utiliser pour du reporting bailleur.",
      "J'ai complété le carnet de bord pour au moins un véhicule fictif et vérifié que les formules et les alertes fonctionnent.",
      "Je sais lire le Tableau de bord par véhicule et par conducteur pour un suivi mensuel et faire le rapprochement avec les bons de carburant.",
      "J'ai adapté politique-utilisation-vehicules.docx avec les règles spécifiques d'un contexte de mission donné.",
      "Je sais distinguer une décision d'urgence sécuritaire d'une investigation de fraude, et je mène les deux en parallèle sans que l'une n'efface l'autre.",
      "Je sais planifier une mission avec un temps réaliste, un relais si nécessaire et des check-ins, et refuser un aller-retour qui dépasse les heures de conduite.",
      "Je peux citer au moins 3 pièges fréquents de la gestion de flotte terrain et la règle qui permet de les éviter.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 04 — Entrepôt & Gestion des Stocks : vous passerez de la flotte à l'entrepôt humanitaire, avec les standards Sphere, la réception, le stockage, les inventaires, la gestion FIFO/FEFO et la prévention des pertes et dommages.",
  },
]
