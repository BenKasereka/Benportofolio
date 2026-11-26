// Module 08 — Systèmes d'Information & Reporting Logistique
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates) : théorie strictement utile
// à l'action, puis chacune des 7 procédures du mois de reporting découpée en
// étapes (une diapositive par étape), appliquées à un cas fil rouge unique
// (ONG Kemora Santé, Nord-Kivu, rapport d'avril 2026 — cas fictif), cas
// résolus, exercices corrigeables (cas de Maiduguri) et check-lists
// d'auto-contrôle.
export default [
  {
    type: 'cover',
    title: "Systèmes d'Information & Reporting Logistique",
    hook: "À la fin de ce module, vous aurez produit ce qu'un logisticien remet chaque mois à son siège : un tableau de bord KPI alimenté en continu et fiable à la décimale près, un rapport mensuel complet comparé au mois précédent, un SitRep d'urgence lisible en deux minutes et la narrative annuelle qui prépare l'année suivante — chaque chiffre relié à une décision.",
  },
  {
    type: 'objectives',
    items: [
      "Alimenter et standardiser la feuille « Données brutes » du template tableau-de-bord-kpi-logistique.xlsx (une ligne par mouvement, listes fermées, vraies dates), en produisant un fichier qui passe le contrôle qualité en 7 points.",
      "Collecter les données de terrain avec Kobo Toolbox ou ODK et les consolider avec Power Query, en produisant un formulaire de suivi des livraisons, une requête actualisable et un lot de lignes prêt à coller dans le template.",
      "Réconcilier votre tableau local avec le système de l'organisation (MIMOSA, LINK) sans double saisie, en produisant une fiche de réconciliation du stock avec chaque écart expliqué.",
      "Lire, vérifier et interpréter les trois KPI (taux de rupture, lead time, coût par bénéficiaire) et leur récapitulatif par site, en produisant pour chacun une décision chiffrée (point de commande, action corrective).",
      "Rédiger le rapport logistique mensuel avec gabarit-rapport-logistique-mensuel.docx, section par section, en produisant un rapport comparé au mois précédent et aux seuils, prêt à valider et à envoyer à l'échéance.",
      "Décider entre rapport mensuel et SitRep et rédiger un SitRep numéroté, horodaté, avec la décision attendue, en produisant un document lisible en moins de deux minutes.",
      "Construire la narrative de planification annuelle avec gabarit-narrative-planification-annuelle-logistique.docx, en produisant le bilan de l'année, des objectifs mesurables, les besoins RH et un chronogramme.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce dernier module ne vous demande pas de retenir des définitions : il vous fait produire, dans l'ordre réel d'un mois de reporting, les livrables que le siège attend d'un logisticien. Chaque livrable est construit étape par étape sur un même cas fil rouge, puis vous le refaites seul sur le cas de Maiduguri (Nigeria).",
    ],
    bullets: [
      "Livrable 1 — La feuille « Données brutes » du mois : une ligne par mouvement, données standardisées, contrôle qualité validé.",
      "Livrable 2 — Un formulaire Kobo de suivi des livraisons et une requête Power Query qui consolide les sources chaque mois.",
      "Livrable 3 — Une fiche de réconciliation entre votre tableau local et le système de l'organisation (MIMOSA, LINK).",
      "Livrable 4 — L'onglet « Tableau de bord KPI » lu, vérifié et interprété : une décision chiffrée par indicateur.",
      "Livrable 5 — Le rapport logistique mensuel (gabarit docx) complété, comparé au mois précédent, validé et envoyé à l'échéance.",
      "Livrable 6 — Un SitRep d'urgence numéroté et horodaté, avec la décision attendue.",
      "Livrable 7 — La narrative de planification annuelle (gabarit docx) : bilan, objectifs, ressources humaines, chronogramme.",
    ],
    example: {
      title: 'Le cas fil rouge de tout le module (fictif mais réaliste)',
      lines: [
        "Organisation : Kemora Santé, ONG médicale internationale (fictive), déjà rencontrée au Module 01. Vous êtes son logisticien(ne) terrain à Lukando (Nord-Kivu, RDC), désormais chargé(e) du reporting logistique de la mission.",
        "Périmètre : 4 sites de réception — Lukando, Bweza, Kasika, Mubimbi — approvisionnés depuis Goma (hub), 142 km de Lukando dont 94 km de piste.",
        "Demande : le lundi 27 avril 2026, Jean-Marc Ilunga, coordinateur logistique pays à Goma, vous demande le rapport logistique d'avril pour le mardi 5 mai 2026. Il le validera avant envoi au siège.",
        "Matière : 24 mouvements d'avril à reconstituer — 6 directement saisis à Lukando, 13 dans des exports Kobo (Bweza, Mubimbi), 5 dans le cahier de la gérante de Kasika, Alphonsine Mbusa.",
        "Outils de l'organisation : stocks et actifs suivis dans MIMOSA (coordination pays, Goma) ; commandes internationales suivies dans LINK par la centrale de Nairobi.",
        "Chiffres de mars : rupture 5,0 % ; lead time 8,1 jours ; coût par bénéficiaire 1,62 USD. Seuils convenus avec J.-M. Ilunga : rupture 10 % ; lead time 10 jours ; coût +10 % par rapport au mois précédent.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Votre point de départ : un tableau de bord qu'on a cessé de tenir",
    body: [
      "Le 27 avril à 8h00, J.-M. Ilunga vous briefe par téléphone. Comme toujours, tout est oral, non daté et non vérifié. C'est la matière première du module : vous allez transformer ce désordre en chiffres que le siège peut utiliser.",
    ],
    example: {
      title: 'Ce que vous avez noté dans votre carnet (27/04, 8h10)',
      lines: [
        "« Le siège veut le rapport logistique d'avril le 5 mai. Je le valide la veille. »",
        "« Bweza et Mubimbi remplissent un formulaire Kobo depuis le 6 avril, je crois. Je ne sais pas si tout est synchronisé. »",
        "« À Kasika, la gérante note tout dans un cahier. Personne ne l'a saisi. »",
        "« Il y a eu une rupture de SRO à Bweza début avril. On n'a envoyé aucun SitRep, je crois. »",
        "« Un camion est resté longtemps au garage à Lukando : des pièces bloquées en douane. »",
        "« Le stock MIMOSA de Goma n'est pas forcément égal aux fiches de stock de Lukando. »",
      ],
    },
    tip: "Transformez chaque phrase du briefing en question de vérification, avec la source qui permet d'y répondre : export Kobo, cahier de Kasika, MIMOSA, journal de bord du camion. Un chiffre sans source n'entre pas dans le rapport.",
  },
  {
    type: 'stat-callout',
    stat: '1 chiffre = 1 décision',
    caption: "Un KPI n'est pas là pour rassurer un bailleur : c'est un signal qui doit déclencher une décision précise.",
    context: "Avant de calculer un indicateur, écrivez ce que vous ferez s'il est bon et ce que vous ferez s'il est mauvais. Sans cette phrase, le chiffre ne mérite pas d'être produit — ni lu.",
  },
  {
    type: 'concept',
    title: "Pourquoi un logisticien senior s'intéresse aux chiffres",
    body: [
      "Beaucoup de logisticiens juniors voient le reporting comme une corvée de fin de mois « parce que le siège le demande ». C'est une erreur qui coûte cher : le siège décide du budget, des commandes internationales et des renforts d'équipe à partir de vos chiffres. Un tableau faux ou illisible, ce sont des décisions fausses ou retardées.",
      "La règle de terrain : on ne demande jamais un indicateur sans savoir d'avance ce qu'on fera selon qu'il est bon ou mauvais. Un tableau de bord qui ne débouche sur aucune décision est du temps perdu à produire et du temps perdu à lire.",
    ],
    example: {
      title: 'Fil rouge — la même donnée, avec et sans décision',
      lines: [
        "Sans décision : « Taux de rupture avril : 8,3 %. » → le siège lit, ne sait pas si c'est grave, ne fait rien.",
        "Avec décision : « Taux de rupture 8,3 % (mars 5,0 %, seuil 10 %), mais Bweza à 28,6 % : je relève le point de commande SRO de Bweza de 50 à 88 cartons avant le 08/05. » → le siège sait où est le problème et ce que vous faites.",
      ],
    },
    highlight: "Un chiffre sans point de comparaison (mois précédent, seuil) et sans décision associée est du bruit.",
  },
  {
    type: 'concept',
    title: 'KPI 1 — Le taux de rupture de stock',
    body: [
      "Le taux de rupture de stock mesure la proportion de commandes ou de contrôles pour lesquels un article essentiel n'était pas disponible au moment où il était nécessaire.",
    ],
    bullets: [
      "Formule : taux de rupture = (nombre de lignes en rupture) ÷ (nombre total de lignes de commande ou de contrôle) × 100.",
      "Seuil d'alerte : typiquement 5 à 10 % selon l'article et le contexte — à convenir par écrit avec votre coordination.",
      "Décision déclenchée : un taux au-dessus du seuil remet en cause votre point de commande et votre stock de sécurité, pas seulement votre fournisseur. La consommation réelle évolue avec l'ampleur de la crise ; le seuil de réapprovisionnement doit suivre.",
    ],
    example: {
      title: 'Fil rouge — avril 2026, 24 lignes',
      lines: [
        "2 lignes en rupture sur 24 → 2 ÷ 24 = 8,3 % (mars : 5,0 % ; seuil : 10 %).",
        "Par site : Lukando 0 %, Kasika 0 %, Mubimbi 0 %, Bweza 2 ÷ 7 = 28,6 %.",
        "Lecture : le global reste sous le seuil, mais un seul site concentre tout le problème.",
      ],
    },
    pitfall: "Publier un taux global sans le ventiler par site ou par article. Un global de 4 % peut cacher un site à 25 % pendant que les autres sont à zéro : la moyenne masque le problème que le siège doit précisément voir.",
  },
  {
    type: 'concept',
    title: 'KPI 2 — Le coût par bénéficiaire',
    body: [
      "Le coût par bénéficiaire rapporte le coût logistique total d'une activité (transport, stockage, manutention, parfois dédouanement) au nombre de bénéficiaires effectivement atteints.",
    ],
    bullets: [
      "Formule : coût par bénéficiaire = coût logistique total ÷ nombre de bénéficiaires couverts.",
      "Ce n'est pas un indicateur de performance individuelle : c'est un indicateur d'efficience de la chaîne, que les bailleurs regardent en premier.",
      "Décision déclenchée : un coût qui grimpe d'un mois sur l'autre sans que le contexte ait changé (même route, même volume, même fournisseur) signale une inefficience : sur-stockage, camions mal remplis, ruptures qui multiplient les petits transports.",
    ],
    example: {
      title: 'Fil rouge — avril 2026',
      lines: [
        "Coût total des 24 lignes : 40 850 USD ; bénéficiaires couverts : 24 050 → 40 850 ÷ 24 050 = 1,70 USD (mars : 1,62 ; +4,9 %, seuil +10 %).",
        "Par site : Lukando 1,47 ; Kasika 1,70 ; Mubimbi 1,83 ; Bweza 1,91.",
        "Lecture : Bweza coûte plus cher parce que la piste est dégradée et le pont de la Musi limité à 12 t — un contexte d'accès, pas une dérive.",
      ],
    },
    pitfall: "Comparer un coût par bénéficiaire entre deux contextes d'accès radicalement différents (axe bitumé, piste, pont aérien) sans le signaler : le chiffre brut, privé de son contexte, induit le lecteur en erreur — et c'est vous qui devrez vous justifier.",
  },
  {
    type: 'concept',
    title: "KPI 3 — Le lead time (délai d'approvisionnement)",
    body: [
      "Le lead time mesure le temps écoulé entre le moment où une commande est passée et celui où elle est effectivement livrée sur site.",
    ],
    bullets: [
      "Formule : lead time = date de livraison réelle − date de commande (en jours).",
      "Décision déclenchée : le lead time moyen observé fixe votre stock de sécurité et le moment où vous commandez. Avec un lead time moyen de 21 jours et une commande déclenchée à stock zéro, vous êtes structurellement en rupture trois semaines par cycle : c'est un calcul, pas de la malchance.",
      "Segmentez toujours par type d'approvisionnement : un container maritime et une pièce détachée par coursier n'ont rien à voir.",
    ],
    example: {
      title: 'Fil rouge — avril 2026',
      lines: [
        "Moyenne des 21 commandes au statut « Livré » : 7,4 jours (mars : 8,1 ; seuil : 10).",
        "Par site : Lukando 7,0 ; Kasika 6,8 ; Mubimbi 6,7 ; Bweza 9,4 — le plus lent, donc celui qui a besoin du plus gros stock de sécurité.",
        "Attention : le template ne calcule la moyenne que sur les lignes « Livré ». Avec la ligne « Retard » (10 jours), la moyenne passe à 7,5 jours.",
      ],
    },
    pitfall: "Mélanger dans une seule moyenne des commandes de nature très différente et en tirer un chiffre trompeur. Segmentez par article ou par type de flux avant de décider d'un stock de sécurité.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois KPI en un coup d’œil : calculer, comparer, décider',
    columns: ['KPI', 'Calcul', 'Seuil du fil rouge', 'Décision si le seuil est dépassé'],
    rows: [
      ['Taux de rupture', 'Lignes en rupture ÷ lignes totales × 100', '10 % (global) ; tout site au-dessus est signalé', "Recalculer le point de commande et le stock de sécurité de l'article et du site concernés"],
      ['Lead time', 'Date de livraison réelle − date de commande', '10 jours', "Avancer la date de commande ; relever le stock de sécurité ; chercher un autre fournisseur ou mode de transport"],
      ['Coût par bénéficiaire', 'Coût logistique total ÷ bénéficiaires couverts', '+10 % par rapport au mois précédent', "Chercher la cause : remplissage des camions, sur-stockage, petites livraisons répétées ; ventiler par contexte d'accès"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Rapport mensuel de routine et SitRep : deux documents, deux objectifs',
    columns: ['', 'Rapport mensuel', 'SitRep'],
    rows: [
      ['Déclenché par', 'Un calendrier fixe (début de mois, pour le mois écoulé)', 'Un événement : urgence, incident, rupture critique'],
      ['Question à laquelle il répond', 'Comment évoluons-nous ?', "Que se passe-t-il maintenant et qu'attendez-vous de moi ?"],
      ['Contenu', "KPI sur la durée, tendance, état de la flotte, de l'entrepôt et de la chaîne du froid, priorités du mois suivant", "Ce qui s'est passé, impact sur les opérations, actions déjà prises, besoins immédiats"],
      ['Format', 'Gabarit structuré, identique chaque mois', 'Court, factuel, daté et horodaté, lisible en moins de deux minutes'],
      ['Erreur symétrique', "Y noyer une urgence en attendant l'échéance", 'Le faire ressembler à un rapport mensuel condensé'],
    ],
  },
  {
    type: 'concept',
    title: 'Quand un fait mérite un SitRep sans attendre le rapport mensuel',
    body: [
      "Le rapport mensuel documente la tendance ; il ne doit jamais être le seul canal par lequel une urgence remonte au siège. Convenez par écrit avec votre coordination des critères de déclenchement. Voici une règle de travail éprouvée : un SitRep part dès qu'au moins un de ces critères est rempli.",
    ],
    bullets: [
      "Un article vital risque la rupture dans un délai inférieur à son lead time.",
      "Un véhicule ou un axe indisponible bloque une livraison critique depuis plus de 48 heures.",
      "Un incident de sécurité, d'accès ou de perte de marchandise (vol, accident) touche vos opérations.",
      "La chaîne du froid est rompue sur un produit sensible.",
      "Vous attendez une décision de la coordination ou du siège dans les 72 heures.",
    ],
    example: {
      title: 'Fil rouge — le tri des faits d\'avril',
      lines: [
        "Rupture de SRO à Bweza (08/04) : stock à zéro pendant une épidémie de choléra → SitRep n°1 le 09/04, puis mention dans le rapport mensuel.",
        "Rupture de kits choléra à Bweza (18/04) → SitRep n°2 le 19/04.",
        "Camion immobilisé 10 jours (pièces en douane) : bloque 1 rotation sur 2 vers Bweza → aurait dû déclencher un SitRep dès le 3e jour ; il a été découvert tard.",
        "Taux de rupture mensuel, lead time, coût par bénéficiaire → rapport mensuel uniquement.",
      ],
    },
    tip: "Test final avant d'écrire : « Si le destinataire ne fait rien dans les 72 heures, que se passe-t-il ? » Si la réponse est une conséquence opérationnelle, c'est un SitRep.",
  },
  {
    type: 'comparison-table',
    title: "L'écosystème des outils : lequel pour quoi",
    columns: ['Outil', 'À quoi il sert', 'Qui y a accès', 'Ce que vous en retirez'],
    rows: [
      ['Excel avancé (TCD, RECHERCHEX, Power Query)', "Tableau de bord local : saisie, calcul des KPI, vérification croisée, consolidation de plusieurs sources", 'Vous, quel que soit votre poste ou votre organisation', "L'outil de tous les mois : un tableau de bord piloté par vous"],
      ['Kobo Toolbox, ODK', "Collecte mobile hors connexion : formulaires sur smartphone ou tablette, export Excel ou CSV", 'Gratuit ; vous, vos gérants de site', "La donnée de terrain la plus fiable : zéro ressaisie"],
      ['MIMOSA', "Gestion des actifs et suivi des stocks à l'échelle d'une mission ou du siège", "Seulement si l'organisation l'a déployé ; paramétrage piloté par le siège ou la coordination pays", "Traçabilité des stocks, véhicules et équipements, avec des règles plus poussées qu'un tableur"],
      ['LINK', "Suivi d'une commande de son émission à sa livraison finale, visibilité partagée terrain / siège", "Seulement si l'organisation l'a déployé", "Les dates de commande et de livraison faisant foi pour vos lead times"],
    ],
  },
  {
    type: 'concept',
    title: 'MIMOSA et LINK : complémentaires de votre tableau, pas concurrents',
    body: [
      "MIMOSA et LINK sont des systèmes d'information propriétaires que certaines organisations humanitaires internationales déploient à l'échelle organisationnelle. Vous n'y aurez pas nécessairement accès en dehors d'une organisation qui les a installés, et leur paramétrage dépend du siège ou de la coordination logistique pays.",
      "Ils répondent au même besoin que votre tableau Excel — une vision fiable des stocks, des actifs et du pipeline — mais avec une traçabilité imposée par des règles internes plus strictes. La logique des indicateurs (rupture, coût, lead time) reste identique, que la donnée vienne d'un tableur ou d'un système.",
    ],
    bullets: [
      "Pour le stock et les actifs, le système de l'organisation fait foi une fois les écarts corrigés ; votre tableau sert à piloter au quotidien.",
      "Ne saisissez jamais deux fois la même information : exportez depuis le système, ne retapez pas.",
      "Si votre organisation n'a ni MIMOSA ni LINK, votre tableau Excel est le système : appliquez les mêmes règles de traçabilité.",
    ],
    highlight: "Un système d'information donne de la traçabilité ; un tableau de bord donne de la décision. Il vous faut les deux.",
  },
  {
    type: 'concept',
    title: 'La règle d\'or des données : continue, standardisée, vérifiable',
    body: [
      "Trois règles font la différence entre un tableau de bord fiable et un tableau qui ment sans le dire : saisir au fil de l'eau (à chaque livraison ou incident, jamais en une séance de fin de mois), standardiser avant de calculer (même nom de site, même format de date, statuts limités à trois valeurs) et garder la trace de la source de chaque ligne.",
    ],
    example: {
      title: 'Ce que fait une faute de frappe silencieuse (fil rouge)',
      lines: [
        "Colonne C contient : Bweza, Bweza, BWEZA, Bweza␣ (avec un espace final).",
        "Le récapitulatif par site compte « Bweza » = 2 lignes au lieu de 4 ; le taux de rupture de Bweza s'affiche à 50 % ou 0 % selon les lignes oubliées.",
        "Aucun message d'erreur : le tableau fonctionne, chaque chiffre est faux. C'est l'erreur la plus fréquente et la plus difficile à détecter après coup.",
      ],
    },
    pitfall: "Reconstituer un mois entier de mouvements à partir de la mémoire, de carnets et de messages épars génère systématiquement des oublis et des doublons. La saisie continue n'est pas un confort : c'est ce qui évite ce chantier.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire opérationnel du module',
    terms: [
      { term: 'KPI', definition: "Key Performance Indicator : un chiffre suivi dans le temps parce qu'il doit déclencher une décision précise." },
      { term: 'Taux de rupture', definition: "Proportion de lignes de commande ou de contrôle où un article requis n'était pas disponible." },
      { term: 'Lead time', definition: "Délai entre la commande et la livraison effective d'un article ou d'un lot." },
      { term: "Point de commande", definition: "Niveau de stock qui déclenche une nouvelle commande : consommation journalière × lead time + stock de sécurité." },
      { term: 'Stock de sécurité', definition: "Réserve qui absorbe les écarts de délai ou de consommation entre deux livraisons." },
      { term: 'Seuil d\'alerte', definition: "Valeur d'un KPI, convenue par écrit avec la coordination, au-delà de laquelle une décision est obligatoire." },
      { term: 'SitRep', definition: "Situation Report : rapport court, déclenché par un événement, daté et horodaté." },
      { term: 'TCD', definition: "Tableau croisé dynamique : agrège des centaines de lignes brutes en quelques cases lisibles sans toucher aux données sources." },
      { term: 'Power Query', definition: "Outil d'Excel qui importe, nettoie et assemble plusieurs sources ; un clic sur « Actualiser tout » réintègre les nouvelles lignes." },
      { term: 'RECHERCHEX', definition: "Fonction Excel qui croise deux tables (XLOOKUP) ; successeur de RECHERCHEV, sans contrainte de sens de lecture." },
      { term: 'Kobo Toolbox / ODK', definition: "Outils gratuits de collecte mobile, utilisables hors connexion, exportables vers Excel ou CSV." },
      { term: 'MIMOSA / LINK', definition: "Systèmes d'information propriétaires de gestion des actifs et des stocks (MIMOSA) et de suivi des commandes (LINK), déployés par certaines organisations." },
      { term: 'Réconciliation', definition: "Comparaison périodique de deux sources (tableau local et système, stock physique et stock théorique) avec explication de chaque écart." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Votre feuille de route du mois de reporting',
    columns: ['Procédure', 'Quand', 'Livrable produit'],
    rows: [
      ['1 — Alimenter et standardiser les données brutes', 'Au fil de l\'eau, contrôle le dernier jour du mois', 'Feuille « Données brutes » validée'],
      ['2 — Collecter avec Kobo / ODK et consolider avec Power Query', 'Mise en place une fois, actualisation mensuelle', 'Formulaire Kobo + requête actualisable'],
      ['3 — Réconcilier avec MIMOSA et LINK', 'Dernier jour du mois', 'Fiche de réconciliation du stock'],
      ['4 — Lire, vérifier et interpréter les KPI', 'J+1 à J+2 après clôture', 'Une décision chiffrée par KPI'],
      ['5 — Rédiger le rapport mensuel', 'J+2 à J+4', 'Rapport docx validé et envoyé'],
      ['6 — Produire un SitRep', 'Dès qu\'un critère de déclenchement est rempli', 'SitRep numéroté et horodaté'],
      ['7 — Écrire la narrative annuelle', 'Fin d\'année, avant l\'arbitrage budgétaire', 'Narrative docx de planification'],
    ],
  },

  // ───────────── PROCÉDURE 1 — Alimenter et standardiser les données brutes ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 7',
    title: 'Ouvrir, renommer et vider le template sans casser les formules',
    intro: "Le template tableau-de-bord-kpi-logistique.xlsx contient deux onglets : « Données brutes » (saisie, lignes 4 à 200) et « Tableau de bord KPI » (formules). Il est livré avec 25 lignes d'exemple de juillet 2026 pour vous montrer le format. Vous avez besoin du template et de votre dossier de mission.",
    steps: [
      {
        title: 'Préparez votre copie',
        actions: [
          "Ouvrez tableau-de-bord-kpi-logistique.xlsx et enregistrez-le immédiatement sous AAAA-MM-JJ_Tableau-de-bord-KPI_[Mission]_[AAAA-MM].xlsx.",
          "Sur « Données brutes », lisez la ligne 1 (titre), la ligne 2 (consigne de saisie continue) et la ligne 3 (en-têtes).",
          "Repérez les 10 colonnes de saisie : A Date de commande, B Date de livraison réelle, C Site, D Article, E Qté commandée, F Qté livrée, G Statut, H Coût total (USD), I Bénéficiaires couverts, J Incident (texte libre).",
          "Repérez la colonne K « Délai (jours) » : elle est calculée par la formule =SI(ET(A4<>\"\";B4<>\"\");B4-A4;\"\"), déjà posée jusqu'à la ligne 200. Ne la modifiez jamais.",
        ],
      },
      {
        title: "Testez le template avec l'exemple, puis videz-le",
        actions: [
          "Ouvrez « Tableau de bord KPI » et notez A5, C5 et E5 : sur les 25 lignes d'exemple, ils affichent 12,0 %, 7,9 et 1,92.",
          "Revenez sur « Données brutes », sélectionnez A4:J28 et appuyez sur Suppr (effacez le contenu ; ne supprimez pas les lignes).",
          "Vérifiez que K4:K28 est vide et que A5, C5 et E5 affichent « N/A » : les formules fonctionnent sur un tableau vide.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — création du fichier le 27/04/2026',
      lines: [
        "Nom du fichier : 2026-04-27_Tableau-de-bord-KPI_Nord-Kivu_2026-04.xlsx",
        "Test avant vidage : A5 = 12,0 %, C5 = 7,9, E5 = 1,92 (valeurs de l'exemple de juillet).",
        "Après vidage de A4:J28 : A5 = N/A, C5 = N/A, E5 = N/A ; K4:K28 vides.",
      ],
    },
    pitfall: "Supprimer les lignes d'exemple avec « Supprimer la ligne » : les plages $G$4:$G$200 se raccourcissent et les formules de la colonne K disparaissent, sans aucun message d'erreur.",
    result: "Un fichier daté et vide, dont les formules de la colonne K et de l'onglet KPI sont intactes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 7',
    title: 'Fixer les règles de saisie et poser les listes déroulantes avant de saisir',
    intro: "Le template n'impose aucune liste : rien n'empêche donc « Bweza » de s'écrire de quatre façons. Vous allez verrouiller la saisie avant la première ligne. Vous avez besoin de la liste de vos sites, de votre catalogue d'articles et des trois statuts.",
    steps: [
      {
        title: 'Écrivez les listes sur papier',
        actions: [
          "Sites : un libellé unique par site, en toutes lettres, sans sigle ni espace final.",
          "Articles : 6 à 10 catégories maximum, avec l'unité de saisie de chacune.",
          "Statuts : exactement trois valeurs — Livré, Rupture, Retard.",
        ],
      },
      {
        title: 'Posez les listes dans Excel',
        actions: [
          "Sélectionnez C4:C200, puis Données > Validation des données > Autoriser : Liste. Dans Source, saisissez vos sites séparés par des points-virgules.",
          "Onglet « Alerte d'erreur » : choisissez le style « Arrêt », jamais « Avertissement ».",
          "Répétez pour G4:G200 (Livré;Rupture;Retard) et pour D4:D200 (vos articles).",
          "Sélectionnez A4:B200 et appliquez le format de date JJ/MM/AAAA du template.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — les listes de la mission Nord-Kivu',
      lines: [
        "Sites : Lukando;Bweza;Kasika;Mubimbi",
        "Statuts : Livré;Rupture;Retard",
        "Articles : Kits choléra;SRO (cartons);Bâches plastiques;Kits WASH;Carburant (fûts);Pièces détachées véhicule",
      ],
    },
    tip: "Les listes voyagent avec le fichier. Une validation de données bloque la frappe mais pas le copier-coller : c'est pourquoi l'étape 6 de cette procédure contrôle tout.",
    pitfall: "Choisir « Avertissement » : l'utilisateur clique sur « Oui » et la faute entre quand même.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 7',
    title: 'Colonnes A et B — Date de commande et date de livraison réelle',
    intro: "Ces deux colonnes alimentent la colonne K (délai) puis le lead time. Une date écrite comme du texte ne se soustrait pas : le délai devient une erreur et le lead time s'affiche « N/A » sans explication.",
    steps: [
      {
        title: 'Colonne A — Date de commande',
        actions: [
          "Saisissez la date à laquelle la commande ou la requête a été passée au fournisseur ou au stock central : JJ/MM/AAAA, année comprise.",
          "Prenez-la sur le bon de commande, la requête validée ou LINK, pas dans votre mémoire.",
        ],
      },
      {
        title: 'Colonne B — Date de livraison réelle',
        actions: [
          "Saisissez la date de réception effective sur le site : celle du bon de livraison signé, jamais la date prévue ni celle du départ.",
          "Laissez la cellule vide si rien n'a été livré (Rupture). N'écrivez ni « 0 », ni « N/A », ni « en cours ».",
          "Contrôlez : une vraie date s'aligne à droite. Un texte s'aligne à gauche.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — trois lignes de Bweza',
      lines: [
        "Ligne livrée : A = 02/04/2026 ; B = 11/04/2026 → K = 9.",
        "Ligne en rupture : A = 08/04/2026 ; B = vide → K = vide.",
        "Ligne en retard : A = 14/04/2026 ; B = 24/04/2026 → K = 10.",
      ],
    },
    pitfall: "Écrire « 11-avr » ou « 11/04 » sans l'année, ou « en cours » en colonne B : Excel le prend pour du texte, K affiche #VALEUR! et le lead time moyen devient « N/A ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 7',
    title: 'Colonnes C, D, E, F — Site, article, quantités commandée et livrée',
    intro: "Une ligne égale un mouvement : un article, un site, une commande. Les quantités permettent de repérer les livraisons partielles ; elles ne sont pas utilisées dans les KPI mais elles expliquent les écarts.",
    steps: [
      {
        title: 'Colonnes C et D — Site et article',
        actions: [
          "Choisissez le site et l'article dans la liste déroulante : ne tapez rien à la main.",
          "Une commande de deux articles se saisit en deux lignes.",
        ],
      },
      {
        title: 'Colonnes E et F — Quantités',
        actions: [
          "E : quantité commandée, dans l'unité du catalogue (kits, cartons, bâches, fûts, pièces).",
          "F : quantité réellement reçue et comptée à la réception, pas celle du bon d'expédition.",
          "Si F est inférieure à E, expliquez l'écart en colonne J.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Unité de saisie', 'Exemple de ligne (Lukando)'],
      rows: [
        ['Kits choléra', 'kit', 'E = 150 ; F = 150'],
        ['SRO (cartons)', 'carton', 'E = 80 ; F = 80'],
        ['Bâches plastiques', 'bâche', 'E = 200 ; F = 200'],
        ['Carburant (fûts)', 'fût de 200 L', 'E = 30 ; F = 30'],
        ['Pièces détachées véhicule', 'pièce', 'E = 6 ; F = 6'],
      ],
    },
    pitfall: "Mélanger les unités (des litres sur une ligne, des fûts sur la suivante) : les quantités ne sont plus comparables et les écarts de livraison deviennent illisibles.",
    result: "Chaque ligne identifie sans ambiguïté un article, un site et un écart éventuel entre commandé et reçu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 7',
    title: 'Colonnes G, H, I, J — Statut, coût, bénéficiaires, incident',
    intro: "C'est ici que se jouent vos trois KPI. Le statut alimente le taux de rupture et le lead time ; H et I alimentent le coût par bénéficiaire ; J garde la mémoire des incidents.",
    steps: [
      {
        title: 'Colonne G — Statut (trois valeurs, trois règles)',
        actions: [
          "Rupture : rien n'a été livré (F = 0, B vide) alors que l'article était nécessaire.",
          "Retard : livré après le délai promis à la commande ; B est renseignée.",
          "Livré : tout le reste, y compris une livraison partielle d'au moins 90 % (écart expliqué en J). Sous 90 %, saisissez deux lignes : la partie livrée et la partie en rupture.",
        ],
      },
      {
        title: 'Colonnes H et I — Coût et bénéficiaires',
        actions: [
          "H : coût logistique total de la ligne en USD (transport, manutention, stockage, dédouanement), pris sur les factures. Mettez 0 pour une rupture.",
          "I : bénéficiaires réellement atteints d'après les rapports de distribution, pas l'objectif. Mettez 0 pour les articles qui ne sont pas distribués (pièces détachées).",
          "Renseignez H pour toutes les lignes ou aucune : un coût partiel fausse le coût par bénéficiaire.",
        ],
      },
      {
        title: 'Colonne J — Incident',
        actions: [
          "Écrivez un fait court : quoi, combien de temps, cause. Pas d'opinion.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — trois lignes complètes',
      lines: [
        "Lukando | Pièces détachées véhicule | E 6 / F 6 | Retard | H 700 | I 0 | J : « Promis sous 4 jours, reçu en 10 : dédouanement ; camion 6 t immobilisé du 14 au 24/04 ».",
        "Bweza | SRO (cartons) | E 80 / F 0 | Rupture | H 0 | I 0 | J : « Stock central épuisé ; lot en réapprovisionnement ».",
        "Bweza | Bâches plastiques | E 250 / F 250 | Livré | H 2 600 | I 1 250 | J : « Piste Lukando–Bweza coupée 2 jours (pluies) ».",
      ],
    },
    tip: "Un même habitant peut recevoir un kit et des SRO. Fixez une règle (ici : les bénéficiaires sont comptés par livraison) et écrivez-la dans le rapport, pour que le coût par bénéficiaire reste comparable d'un mois à l'autre.",
    pitfall: "Statut « Livré » avec F = 0, ou « Rupture » avec une date en B : le taux de rupture et le lead time sont faux dans les deux cas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 6 sur 7',
    title: 'Contrôler la qualité des données en 7 points avant toute lecture',
    intro: "Aucune formule ne vous préviendra d'une donnée mal saisie. Vous appliquez un contrôle en 7 points le dernier jour du mois, avant d'ouvrir l'onglet KPI. Vous avez besoin de la liste de vos sources (exports Kobo, cahier, factures).",
    steps: [
      {
        title: 'Contrôlez les 7 points',
        actions: [
          "1 Sites : posez un filtre sur C ; la liste déroulante du filtre doit montrer chaque site une seule fois (4 sites = 4 entrées).",
          "2 Articles et statuts : même contrôle sur D et G ; G montre au plus Livré, Rupture, Retard.",
          "3 Dates réelles : tapez dans une cellule libre =SOMMEPROD(--ESTTEXTE(A4:B200)) ; le résultat doit être 0.",
          "4 Cohérence : Rupture implique F = 0 et B vide ; Livré implique B renseignée et F > 0 ; aucune K négative.",
          "5 Doublons : triez par site, article, date de commande ; examinez les lignes identiques adjacentes.",
          "6 Coûts : H > 0 avec I = 0 seulement pour les pièces détachées ; I > 0 avec H = 0 est une anomalie.",
          "7 Complétude : le nombre de lignes saisies égale le nombre de mouvements recensés dans vos sources.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — résultat du contrôle le 29/04',
      lines: [
        "Point 1 : la liste du filtre C montrait « Bweza » et « Bweza␣ » (espace final) sur 2 lignes Kobo → corrigées.",
        "Point 3 : SOMMEPROD = 5 → 5 dates de l'export Kobo de Mubimbi en texte (« 2026-04-14 ») → converties en dates réelles (Procédure 2).",
        "Point 5 : un doublon (Mubimbi, SRO, commande du 07/04, 40 cartons saisis deux fois) → supprimé : 25 lignes → 24.",
        "Point 7 : sources = 6 (Lukando) + 7 (Bweza) + 6 (Mubimbi) + 5 (Kasika) = 24 → conforme.",
      ],
    },
    result: "Les 7 points passent. Vous pouvez dater et signer le contrôle dans le journal de reporting.",
    pitfall: "Passer directement à l'onglet KPI parce que « les chiffres ont l'air plausibles ». Un tableau qui a l'air de fonctionner avec une saisie fautive est précisément le cas le plus dangereux.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 7 sur 7',
    title: 'Lire la colonne K, repérer les délais aberrants et figer la version du mois',
    intro: "La colonne K se calcule seule. Votre rôle est de la lire avant de faire confiance à la moyenne : un délai aberrant est soit une erreur de saisie, soit un incident à documenter.",
    steps: [
      {
        title: 'Lisez les délais',
        actions: [
          "Triez la colonne K du plus grand au plus petit : examinez les trois plus longs délais et vérifiez la date de chacun dans la source.",
          "Vérifiez qu'aucune valeur n'est négative : une livraison avant la commande signale deux dates inversées.",
          "Pour chaque délai supérieur à votre seuil (ici 10 jours), vérifiez que la colonne J explique la cause.",
        ],
      },
      {
        title: 'Figez la version du mois',
        actions: [
          "Remettez le tri par date de commande, puis enregistrez sous ..._2026-04_v02-controle.xlsx.",
          "Notez dans votre journal de reporting : date de clôture, nombre de lignes, initiales de la personne qui a contrôlé.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lecture de K au 29/04',
      lines: [
        "Délais triés : 12 (Bweza, bâches), 10 (Lukando, pièces — Retard), 9 (Bweza, kits WASH), 9, 9 … le plus court : 6.",
        "Le délai de 12 jours est expliqué en J (piste coupée 2 jours) ; celui de 10 jours est une ligne « Retard » (dédouanement).",
        "Aucune valeur négative ; aucun délai non expliqué au-delà de 10 jours.",
      ],
    },
    result: "Livrable 1 terminé : une feuille « Données brutes » de 24 lignes contrôlées, versionnée et datée.",
    tip: "Gardez la v02 en lecture seule. Si vous corrigez une donnée plus tard, repartez de cette version et créez une v03 : le siège peut vous demander pourquoi un chiffre a changé.",
  },

  // ───────────── PROCÉDURE 2 — Kobo / ODK et Power Query ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 5',
    title: 'Concevoir le formulaire Kobo de suivi des livraisons',
    intro: "Un formulaire mobile élimine l'étape de ressaisie, la plus grande source d'erreurs. Il reproduit exactement les colonnes du template, avec des listes fermées. Vous avez besoin d'un compte Kobo Toolbox (serveur de votre organisation) ou d'un projet ODK, et de vos listes de la Procédure 1.",
    steps: [
      {
        title: 'Créez le projet',
        actions: [
          "Dans Kobo Toolbox, cliquez sur « Nouveau » puis « Construire à partir de zéro » ; nommez-le « Suivi livraisons — [Mission] ».",
          "Ajoutez les questions dans l'ordre des colonnes du template.",
        ],
      },
      {
        title: 'Ajoutez les 10 champs et leurs contraintes',
        actions: [
          "Date de commande (type Date) ; Date de livraison réelle (Date, affichée seulement si le statut n'est pas Rupture : condition ${statut} != 'rupture').",
          "Site, Article, Statut (type Sélectionner une réponse) avec exactement les listes du template.",
          "Qté commandée, Qté livrée, Bénéficiaires couverts (Nombre entier, critère de validation ≥ 0) ; Coût total USD (Nombre décimal).",
          "Incident (Texte, facultatif). Marquez les champs obligatoires.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — correspondance formulaire Kobo / template',
      lines: [
        "date_commande → A | date_livraison → B | site → C | article → D | qte_commandee → E | qte_livree → F",
        "statut → G | cout_usd → H | beneficiaires → I | incident → J (la colonne K reste calculée dans Excel).",
        "Liste « site » : Bweza, Mubimbi (Lukando et Kasika sont saisis ailleurs) ; liste « statut » : livre, rupture, retard.",
      ],
    },
    pitfall: "Laisser un champ Site en texte libre : on retrouve « BWEZA », « Bweza » et « Bweza␣ » dans l'export, et tout le nettoyage reste à faire.",
    result: "Un formulaire de 10 champs, dont les listes sont identiques à celles du template.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 5',
    title: 'Déployer, collecter hors connexion et exporter',
    intro: "Les gérants de site travaillent souvent sans réseau. Le formulaire se remplit hors connexion et ne s'envoie qu'au retour de la connexion. Vous avez besoin du formulaire conçu à l'étape 1 et d'un smartphone ou d'une tablette Android par site.",
    steps: [
      {
        title: 'Déployez et équipez les sites',
        actions: [
          "Dans Kobo, cliquez sur « Déployer ». Partagez le projet avec les comptes des gérants (Données : ajouter des soumissions).",
          "Sur chaque appareil, installez KoboCollect (ou ODK Collect), configurez le serveur et le compte, puis « Obtenir un formulaire vierge ».",
          "Convenez de la règle : un formulaire rempli à chaque bon de livraison signé, sur place, le jour même.",
        ],
      },
      {
        title: 'Collectez et exportez',
        actions: [
          "Sur l'appareil : « Remplir un formulaire », puis « Finaliser » ; « Envoyer les formulaires finalisés » dès que le réseau revient.",
          "Dans Kobo : Données > Téléchargements > type d'export XLS, format « Libellés des valeurs » ; choisissez la période, puis « Exporter ».",
          "Enregistrez l'export dans 02_Exports sous AAAA-MM-JJ_Kobo_[Site]_export.xlsx.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — exports du 28/04',
      lines: [
        "2026-04-28_Kobo_Bweza_export.xlsx : 7 soumissions (dont 2 ruptures) — dernière synchronisation du formulaire : 27/04, 17h42.",
        "2026-04-28_Kobo_Mubimbi_export.xlsx : 5 soumissions à 9h00 (dernière synchronisation : 26/04) ; 6 après la synchronisation du 28/04 à 11h.",
        "Contrôle avec Alphonsine Mbusa (Kasika) et les gérants : « avez-vous des formulaires finalisés non envoyés ? » → 1 formulaire de Mubimbi en attente, envoyé le 28/04 à 11h : export refait à 11h30.",
      ],
    },
    tip: "Demandez chaque semaine aux gérants le nombre de formulaires finalisés non envoyés : c'est la cause numéro un des « lignes manquantes » en fin de mois.",
    result: "Un export Excel par site, daté, dont le nombre de lignes est confronté à celui annoncé par le gérant.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 5',
    title: 'Importer chaque source dans Power Query',
    intro: "Power Query importe vos fichiers et mémorise chaque transformation : le mois suivant, un clic suffit. Il se construit dans un classeur de consolidation séparé, pas dans le template, pour ne pas altérer ses formules. Vous avez besoin des exports de l'étape 2 et de la saisie de Lukando.",
    steps: [
      {
        title: 'Préparez le classeur de consolidation',
        actions: [
          "Créez un classeur « Consolidation_[Mission].xlsx » et placez-le à côté du dossier 02_Exports.",
          "Saisissez dans un onglet « Cahier_Kasika » les 5 lignes du cahier photographié, avec les mêmes en-têtes que le template ; ajoutez une colonne « Source ».",
        ],
      },
      {
        title: 'Importez une requête par source',
        actions: [
          "Données > Obtenir des données > À partir d'un fichier > À partir d'un classeur Excel ; sélectionnez l'export Kobo de Bweza, puis « Transformer les données ».",
          "Répétez pour l'export de Mubimbi et pour l'onglet « Cahier_Kasika » (À partir d'un tableau ou d'une plage).",
          "Dans l'éditeur, cliquez sur « Choisir les colonnes » et ne gardez que les 10 colonnes utiles.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — requêtes créées le 29/04',
      lines: [
        "Requête Kobo_Bweza : 7 lignes ; requête Kobo_Mubimbi : 6 lignes ; requête Cahier_Kasika : 5 lignes.",
        "Colonne « Source » ajoutée à chaque requête : « Kobo Bweza », « Kobo Mubimbi », « Cahier Kasika » — elle permettra de remonter à l'original en cas de doute.",
      ],
    },
    pitfall: "Importer plusieurs fichiers d'un seul coup alors que leurs en-têtes diffèrent (les libellés Kobo changent si vous modifiez le formulaire) : la requête échoue ou perd des colonnes sans prévenir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 5',
    title: 'Nettoyer les données avec Power Query',
    intro: "Le nettoyage appliqué dans Power Query est enregistré : le mois suivant, il se rejoue tout seul. Les trois problèmes les plus fréquents des exports sont les espaces parasites, la casse et les dates lues comme du texte.",
    steps: [
      {
        title: 'Normalisez les textes',
        actions: [
          "Sélectionnez les colonnes Site, Article et Statut, puis Transformer > Format > Supprimer les espaces, puis Format > Nettoyer.",
          "Transformer > Format > Mettre en majuscule chaque mot, puis Remplacer les valeurs si nécessaire (« Livre » → « Livré »).",
        ],
      },
      {
        title: 'Convertissez les types',
        actions: [
          "Clic droit sur « Date de commande » > Modifier le type > Utiliser les paramètres régionaux ; type Date ; paramètres régionaux « Français (France) » ou « Anglais (Royaume-Uni) » selon le format du texte source.",
          "Faites de même pour « Date de livraison réelle » ; laissez vide si Rupture. Définissez les quantités en nombre entier et le coût en nombre décimal.",
          "Accueil > Supprimer les lignes > Supprimer les doublons, en sélectionnant d'abord Site, Article, Date de commande, Qté commandée ; supprimez aussi les lignes vides.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — avant / après nettoyage',
      lines: [
        "Avant : « BWEZA » ; « Bweza␣ » ; « 2026-04-14 » (texte) ; « livre » ; 1 ligne dupliquée.",
        "Après : « Bweza » ; « Bweza » ; 14/04/2026 (date) ; « Livré » ; 1 doublon supprimé.",
        "Contrôle : le nombre de lignes passe de 25 à 24 ; chaque colonne date indique « Date » dans l'en-tête de l'éditeur.",
      ],
    },
    tip: "Après chaque transformation, regardez la bande de qualité sous l'en-tête de colonne (« Valide », « Erreur », « Vide ») : une seule « Erreur » indique une ligne à corriger à la source.",
    pitfall: "Convertir une date au format JJ/MM en MM/JJ par les mauvais paramètres régionaux : le 04/05 devient le 05/04, et le lead time devient négatif ou faux de plusieurs semaines.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 5',
    title: 'Assembler les sources, actualiser chaque mois et livrer au template',
    intro: "Une fois chaque requête propre, vous les assemblez en une seule table au format du template. Chaque mois, vous actualisez ; vous ne reconstruisez jamais.",
    steps: [
      {
        title: 'Assemblez',
        actions: [
          "Accueil > Combiner > Ajouter des requêtes > Ajouter des requêtes en tant que nouvelles ; sélectionnez vos trois requêtes.",
          "Renommez la colonne finale « Statut » et vérifiez l'ordre : Date de commande, Date de livraison réelle, Site, Article, Qté commandée, Qté livrée, Statut, Coût total (USD), Bénéficiaires couverts, Incident (texte libre).",
          "Accueil > Fermer et charger dans… > Tableau, dans une feuille « Consolidé » du classeur de consolidation.",
        ],
      },
      {
        title: 'Actualisez et livrez',
        actions: [
          "Chaque mois : Données > Actualiser tout. Vérifiez que le nombre de lignes correspond à celui annoncé par les gérants.",
          "Copiez les 10 colonnes (sans « Source »), puis dans le template : Collage spécial > Valeurs en A4. La colonne K reste calculée.",
          "Revenez à la Procédure 1, étape 6, pour le contrôle en 7 points.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — assemblage du 29/04',
      lines: [
        "7 + 6 + 5 = 18 lignes consolidées (Bweza, Mubimbi, Kasika) ; + 6 lignes de Lukando saisies directement dans le template = 24.",
        "Collage spécial en A10 (après les 6 lignes de Lukando) → A10:J27 remplies, K27 calculée.",
        "Dans le classeur de consolidation, la colonne « Source » indique d'où vient chaque ligne.",
      ],
    },
    result: "Livrable 2 terminé : un formulaire Kobo opérationnel et une requête qui réintègre les nouvelles lignes chaque mois sans ressaisie.",
    pitfall: "Coller avec Ctrl+V au lieu de Collage spécial > Valeurs : le collage écrase les formats de date et peut importer des formules qui pointent vers le classeur de consolidation.",
  },

  // ───────────── PROCÉDURE 3 — Réconcilier avec MIMOSA et LINK ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: "Identifier ce que l'organisation a déployé et ce que vous pouvez en faire",
    intro: "Avant d'utiliser MIMOSA ou LINK, vous devez savoir lesquels existent dans votre organisation, qui les administre et ce que votre profil vous autorise à faire. L'intitulé exact des écrans dépend du paramétrage retenu par le siège : vérifiez chaque point avec l'administrateur plutôt que de le supposer.",
    steps: [
      {
        title: 'Posez les 6 questions à votre coordinateur logistique pays',
        actions: [
          "Quel système suit les stocks et les actifs, et lequel suit les commandes internationales ?",
          "Qui l'administre et qui peut y saisir ? Quel est mon profil : consultation ou saisie ?",
          "Quels sites et quels entrepôts de ma mission y sont déclarés ?",
          "Existe-t-il une fonction d'export (Excel ou CSV) et sous quelle périodicité ?",
          "Quelle date d'arrêté utilise-t-on pour les chiffres de fin de mois ?",
          "En cas d'écart entre le système et mon tableau, qui tranche ?",
        ],
      },
      {
        title: 'Consignez les réponses dans une fiche système',
        actions: [
          "Une ligne par système : usage, qui saisit, qui lit, export, fréquence, date de la réponse.",
        ],
      },
    ],
    table: {
      columns: ['Système', 'Usage dans Kemora Santé', 'Qui saisit', 'Export', 'Arrêté mensuel'],
      rows: [
        ['MIMOSA', 'Stocks et actifs (entrepôts, véhicules, équipements)', 'Gestionnaires de stock (Goma, Lukando) ; vous en consultation', 'Excel, à la demande de J.-M. Ilunga', 'Dernier jour du mois, 18h'],
        ['LINK', 'Commandes internationales, de la requête à la livraison', 'Centrale de Nairobi', 'Excel envoyé chaque lundi', 'Dernier lundi du mois'],
      ],
    },
    result: "Vous savez quel système fait foi pour quelle donnée et comment en obtenir un export.",
    pitfall: "Supposer que MIMOSA ou LINK existent parce qu'un collègue en a parlé, ou croire que vous pouvez saisir alors que votre profil est en consultation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Cartographier les champs : template Excel et système, colonne par colonne',
    intro: "Pour ne jamais saisir deux fois la même information, vous décidez, colonne par colonne du template, quelle est la source qui fait foi. Cette table de correspondance se fait une fois et se relit à chaque changement de procédure.",
    steps: [
      {
        title: 'Remplissez la table de correspondance',
        actions: [
          "Listez les 10 colonnes de saisie du template (A à J).",
          "Pour chacune, indiquez la source qui fait foi : LINK, MIMOSA, formulaire Kobo, facture, rapport de distribution ou saisie manuelle.",
          "Faites valider la table par le coordinateur logistique pays.",
        ],
      },
    ],
    table: {
      columns: ['Colonne du template', 'Source qui fait foi', 'Mode de récupération'],
      rows: [
        ['A Date de commande', 'LINK', 'Export du lundi, colonne « date de commande »'],
        ['B Date de livraison réelle', 'Bon de livraison signé, puis LINK', 'Formulaire Kobo sur site ; contrôle avec LINK'],
        ['C Site, D Article', 'Formulaire Kobo / MIMOSA (localisation, article)', 'Listes identiques à celles du template'],
        ['E Qté commandée', 'LINK', 'Export du lundi'],
        ['F Qté livrée', 'Comptage à la réception', 'Formulaire Kobo ; contrôle avec MIMOSA (entrée en stock)'],
        ['G Statut', 'Règle de la Procédure 1', 'Saisie manuelle selon la règle, pas dans le système'],
        ['H Coût, I Bénéficiaires', 'Factures ; rapports de distribution', 'Saisie manuelle, justificatifs conservés'],
        ['J Incident', 'Observation terrain', 'Saisie manuelle'],
      ],
    },
    result: "Une table de correspondance validée : pour chaque colonne, une seule source fait foi.",
    tip: "Une même information saisie à deux endroits finit toujours par diverger. Choisissez le système comme source et alimentez le tableau depuis un export, pas à la main.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Réconcilier le stock physique et le stock du système, article par article',
    intro: "La réconciliation est la vérification mensuelle que ce que votre système affiche existe réellement sur l'étagère. Elle doit se faire le dernier jour du mois, avant de calculer les KPI. Vous avez besoin de l'export du système à la date d'arrêté et des fiches de stock du site.",
    steps: [
      {
        title: 'Comptez et comparez',
        actions: [
          "Obtenez l'export du système à la date d'arrêté (ici le 30/04 à 18h) et notez-en l'heure.",
          "Comptez physiquement les articles avec un second agent (gestionnaire + vous) ; signez la feuille de comptage.",
          "Calculez l'écart : stock physique − stock système, et le pourcentage : écart ÷ stock système.",
        ],
      },
      {
        title: 'Expliquez chaque écart',
        actions: [
          "Tolérance : tout écart supérieur à 2 % (et tout écart sur un article vital, SRO ou kits choléra) doit être expliqué.",
          "Remontez aux pièces : bons de sortie, transferts, bons de livraison de la période.",
          "Corrigez dans le système par une écriture d'ajustement signée. Ne retouchez jamais le chiffre sans justificatif.",
        ],
      },
    ],
    table: {
      columns: ['Article (Lukando, 30/04)', 'Stock MIMOSA', 'Stock physique', 'Écart', 'Cause'],
      rows: [
        ['Kits choléra', '52', '52', '0 (0 %)', '—'],
        ['SRO (cartons)', '124', '118', '−6 (−4,8 %)', 'Transfert vers Bweza du 10/04 : 26 cartons partis (bon de sortie), 20 saisis'],
        ['Bâches plastiques', '310', '310', '0 (0 %)', '—'],
        ['Kits WASH', '96', '96', '0 (0 %)', '—'],
        ['Carburant (fûts)', '14', '13', '−1 (−7,1 %)', 'Fût entamé compté entier : à gérer en litres'],
      ],
    },
    result: "Fiche de réconciliation signée : 2 écarts sur 48 lignes comptées (4,2 %), chacun expliqué et corrigé par une écriture d'ajustement.",
    pitfall: "Effacer l'écart dans le tableau sans corriger le système : les deux sources divergent à nouveau le mois suivant, et le siège voit un stock qui n'existe pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: "Alimenter le tableau depuis les exports et reporter les écarts au rapport",
    intro: "Une fois la réconciliation signée, vous exploitez les exports du système sans ressaisie et vous gardez la trace de ce qui a été constaté. Les écarts d'inventaire alimentent directement la section 4 du rapport mensuel (Procédure 5).",
    steps: [
      {
        title: 'Importez les exports comme une quatrième source',
        actions: [
          "Dans le classeur de consolidation, ajoutez l'export LINK du lundi comme une requête Power Query (Procédure 2) : colonnes date de commande, date de livraison et quantités.",
          "Utilisez-la pour contrôler les colonnes A, B, E de la feuille « Données brutes » : une date différente entre LINK et le bon de livraison est un point à expliquer.",
        ],
      },
      {
        title: 'Consignez les écarts',
        actions: [
          "Reportez le nombre d'écarts, le plus important et sa cause dans votre journal de reporting.",
          "Conservez la feuille de comptage signée et l'écriture d'ajustement avec les justificatifs du mois.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — contrôle LINK du 29/04',
      lines: [
        "Ligne Lukando, pièces détachées : date de commande 14/04 dans le template, 14/04 dans LINK ; livraison 24/04 dans le template, 23/04 dans LINK (bon de livraison signé le 24 au matin) → on retient 24/04, la réception sur site fait foi pour le lead time.",
        "Écarts d'inventaire du mois à reporter en section 4 : 2 (SRO −6 cartons, carburant −1 fût), tous deux corrigés le 30/04.",
      ],
    },
    result: "Livrable 3 terminé : une table de correspondance, une fiche de réconciliation signée et des écarts consignés pour le rapport.",
    tip: "Si votre organisation n'a ni MIMOSA ni LINK, faites la même réconciliation entre vos fiches de stock papier et votre tableau Excel : la discipline est identique, seul l'outil change.",
  },

  // ───────────── PROCÉDURE 4 — Lire, vérifier, interpréter les KPI ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: "Préparer l'onglet « Tableau de bord KPI » : titre, sites et contrôle",
    intro: "L'onglet « Tableau de bord KPI » ne contient que des formules, à une exception : les noms de site de la colonne A (lignes 9 à 12) et le titre en A1. Ces noms doivent être identiques à ceux de la colonne C des données brutes, caractère pour caractère.",
    steps: [
      {
        title: 'Adaptez le titre et les sites',
        actions: [
          "En A1, remplacez « JUILLET 2026 » par le mois du rapport : TABLEAU DE BORD KPI LOGISTIQUE — AVRIL 2026.",
          "En A9:A12, remplacez les 4 sites d'exemple par vos 4 sites. Copiez-collez les libellés depuis votre liste, ne les retapez pas.",
          "Si vous avez plus de 4 sites, insérez une ligne au-dessus de la ligne 12 et recopiez les formules de B à E vers le bas.",
          "En A14, supprimez la note relative à l'exemple de juillet (elle parle de « Maiduguri Nord »).",
        ],
      },
      {
        title: 'Ajoutez le contrôle de couverture',
        actions: [
          "Dans une cellule libre sous le tableau, saisissez =SOMME(E9:E12)-NBVAL('Données brutes'!G4:G200).",
          "Le résultat doit être 0. S'il est positif ou négatif, un site manque ou est mal orthographié.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — contrôle du 04/05, 7h30',
      lines: [
        "E9:E12 (Nb lignes) = 6 (Lukando) ; 7 (Bweza) ; 5 (Kasika) ; 6 (Mubimbi) → somme = 24.",
        "NBVAL('Données brutes'!G4:G200) = 24 → contrôle = 24 − 24 = 0.",
        "Contre-exemple : avec une faute en C, Bweza compterait 6 lignes ; le contrôle afficherait 1, signalant une ligne non rattachée à un site.",
      ],
    },
    pitfall: "Laisser l'ancien site « Maiduguri » ou « Goma » en A9:A12 : la colonne affiche N/A ou 0 sans erreur apparente et vous publiez un récapitulatif qui ne parle pas de votre mission.",
    result: "Un onglet KPI dont le titre, les sites et le contrôle de couverture sont validés avant toute lecture.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Lire les trois KPI globaux et comprendre ce que chaque formule compte vraiment',
    intro: "Les trois cellules A5, C5 et E5 sont calculées par formule. Une formule fait exactement ce qu'on lui dit, pas ce que vous croyez : vous devez savoir ce qu'elle inclut et ce qu'elle exclut avant d'en publier le résultat. Dans votre Excel français, COUNTIFS s'affiche NB.SI.ENS, AVERAGEIFS MOYENNE.SI.ENS, SUMIFS SOMME.SI.ENS, COUNTA NBVAL et IFERROR SIERREUR.",
    steps: [
      {
        title: 'A5 — Taux de rupture global',
        actions: [
          "Formule : NB.SI.ENS de la colonne G égale à « Rupture » ÷ NBVAL de la colonne G, avec « N/A » en cas d'erreur.",
          "Le dénominateur compte toutes les lignes non vides, donc une faute de frappe sur un statut est comptée au dénominateur mais pas au numérateur.",
        ],
      },
      {
        title: 'C5 — Lead time moyen',
        actions: [
          "Formule : MOYENNE.SI.ENS de la colonne K pour les lignes dont le statut est « Livré ».",
          "Les lignes « Retard » ne sont donc pas dans la moyenne : le chiffre est optimiste. Calculez en plus =MOYENNE(K4:K200), qui inclut les retards.",
        ],
      },
      {
        title: 'E5 — Coût par bénéficiaire',
        actions: [
          "Formule : SOMME de la colonne H ÷ SOMME de la colonne I, avec « N/A » en cas de division par zéro.",
          "Si H est vide partout, le résultat n'est pas « N/A » mais 0,00 : un faux zéro qu'il ne faut pas publier.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lecture du 04/05 (24 lignes)',
      lines: [
        "A5 = 8,3 % (2 ÷ 24). Format du template : pourcentage à 1 décimale.",
        "C5 = 7,4 jours (21 lignes « Livré »). Avec la ligne « Retard » : =MOYENNE(K4:K200) = 7,5 jours.",
        "E5 = 1,70 USD (40 850 ÷ 24 050).",
      ],
    },
    pitfall: "Publier E5 quand le coût n'est pas renseigné sur toutes les lignes : le résultat 0,00 ressemble à un chiffre, pas à une absence de donnée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Vérifier par un recalcul indépendant avec un tableau croisé dynamique',
    intro: "Un chiffre calculé par une seule méthode n'est pas vérifié. Un tableau croisé dynamique (TCD) recompte les mêmes données autrement : si les deux résultats concordent, le tableau est fiable. Vous le construisez dans un fichier d'analyse séparé, jamais dans le template.",
    steps: [
      {
        title: "Préparez le fichier d'analyse",
        actions: [
          "Ouvrez un classeur « Analyse_KPI_2026-04.xlsx ». Copiez A3:K27 de « Données brutes » (en-têtes compris) et faites un Collage spécial > Valeurs.",
          "Sélectionnez une cellule du tableau, puis Ctrl+T : cochez « Mon tableau comporte des en-têtes ». Les lignes vides sont ainsi exclues.",
        ],
      },
      {
        title: 'Construisez deux TCD',
        actions: [
          "Insertion > Tableau croisé dynamique > Feuille existante. Lignes : Site ; Colonnes : Statut ; Valeurs : Nombre de Article.",
          "Second TCD : Lignes : Site ; Valeurs : Somme de Coût total (USD) et Somme de Bénéficiaires couverts.",
          "Comparez les totaux avec l'onglet « Tableau de bord KPI ». Après toute correction, faites Données > Actualiser tout : un TCD ne se met pas à jour seul.",
        ],
      },
    ],
    table: {
      columns: ['Site', 'Livré', 'Retard', 'Rupture', 'Total', 'Coût (USD)', 'Bénéficiaires'],
      rows: [
        ['Lukando', '5', '1', '0', '6', '12 650', '8 600'],
        ['Bweza', '5', '0', '2', '7', '12 700', '6 650'],
        ['Kasika', '5', '0', '0', '5', '8 350', '4 900'],
        ['Mubimbi', '6', '0', '0', '6', '7 150', '3 900'],
        ['Total', '21', '1', '2', '24', '40 850', '24 050'],
      ],
    },
    result: "Les totaux du TCD (24 lignes, 2 ruptures, 40 850 USD, 24 050 bénéficiaires) sont identiques à ceux du template : les formules sont confirmées.",
    pitfall: "Construire le TCD sur une plage qui contient des lignes vides ou un site mal orthographié : il affiche « (vide) » ou une ligne en trop, que beaucoup prennent pour un site de plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Lire le récapitulatif par site et repérer celui qui tire la moyenne',
    intro: "Le récapitulatif par site (lignes 9 à 12 de l'onglet « Tableau de bord KPI ») est la ventilation que le siège doit voir. Colonnes : Taux de rupture, Lead time moyen (j), Coût / bénéficiaire (USD), Nb lignes.",
    steps: [
      {
        title: 'Lisez dans cet ordre',
        actions: [
          "Classez les sites du pire au meilleur sur le taux de rupture, puis le lead time, puis le coût.",
          "Repérez tout site au-dessus de votre seuil, même si le global est en dessous.",
          "Pour chaque site repéré, notez la cause probable (article, fournisseur, accès) avant de rédiger.",
        ],
      },
    ],
    table: {
      columns: ['Site', 'Taux de rupture', 'Lead time moyen (j)', 'Coût / bénéficiaire (USD)', 'Nb lignes'],
      rows: [
        ['Lukando', '0,0 %', '7,0', '1,47', '6'],
        ['Bweza', '28,6 %', '9,4', '1,91', '7'],
        ['Kasika', '0,0 %', '6,8', '1,70', '5'],
        ['Mubimbi', '0,0 %', '6,7', '1,83', '6'],
      ],
    },
    example: {
      title: 'Fil rouge — lecture de Bweza',
      lines: [
        "Rupture 28,6 % (seuil 10 %) : 2 lignes sur 7, SRO (08/04) et kits choléra (18/04).",
        "Lead time 9,4 jours : le plus long des 4 sites, proche du seuil de 10 jours.",
        "Coût 1,91 USD : le plus élevé, mais dans un contexte d'accès plus difficile (voir étape suivante).",
        "Conclusion : Bweza concentre 100 % des ruptures du mois. Le global de 8,3 % masque le problème.",
      ],
    },
    result: "Vous savez quel site tire chaque KPI, de combien, et vous avez une hypothèse de cause à confirmer.",
    pitfall: "Conclure sur un site de 5 lignes comme sur un site de 40 : avec peu de lignes, une seule rupture fait bondir le taux. Écrivez toujours le « 2 sur 7 » à côté du « 28,6 % ».",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: "Qualifier le contexte d'accès avec RECHERCHEX avant de comparer les coûts",
    intro: "Un coût par bénéficiaire n'a de sens qu'avec son contexte d'accès. RECHERCHEX relie chaque ligne de livraison à la fiche du site correspondant. Comme effet utile, elle détecte aussi un site mal orthographié : il ressort en « Site inconnu ».",
    steps: [
      {
        title: 'Créez la fiche des sites',
        actions: [
          "Dans « Analyse_KPI_2026-04.xlsx », créez une feuille « Sites » avec deux colonnes : Site et Accès.",
          "Convertissez-la en tableau (Ctrl+T) nommé « Sites » ; classez chaque site dans une catégorie d'accès (axe principal, piste secondaire, piste dégradée et pont limité).",
        ],
      },
      {
        title: 'Reliez les lignes avec RECHERCHEX',
        actions: [
          "Dans une nouvelle colonne du tableau de données, saisissez =RECHERCHEX([@Site];Sites[Site];Sites[Accès];\"Site inconnu\").",
          "Filtrez la colonne : aucune ligne ne doit afficher « Site inconnu ».",
          "Créez un TCD : Lignes : Accès ; Valeurs : Somme de Coût et Somme de Bénéficiaires ; divisez les deux.",
        ],
      },
    ],
    table: {
      columns: ['Catégorie d\'accès', 'Sites', 'Coût (USD)', 'Bénéficiaires', 'Coût / bénéficiaire'],
      rows: [
        ['Axe principal', 'Lukando', '12 650', '8 600', '1,47'],
        ['Piste secondaire', 'Kasika, Mubimbi', '15 500', '8 800', '1,76'],
        ['Piste dégradée, pont de la Musi limité à 12 t', 'Bweza', '12 700', '6 650', '1,91'],
      ],
    },
    result: "Le coût par bénéficiaire augmente avec la difficulté d'accès (1,47 → 1,76 → 1,91 USD) : la différence entre sites est expliquée par le contexte, pas par une inefficience.",
    tip: "Reportez cette phrase dans le rapport : « Le coût par bénéficiaire de Bweza reflète un accès par piste dégradée ». Vous répondez ainsi d'avance à la question du siège.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Interpréter chaque KPI et le traduire en décision chiffrée (point de commande)',
    intro: "Aucun chiffre ne part dans un rapport sans trois éléments : le mois précédent, le seuil d'alerte et la décision. C'est cette contextualisation, pas le chiffre isolé, que le siège lit. Vous transformez enfin le taux de rupture et le lead time en un point de commande recalculé.",
    steps: [
      {
        title: 'Remplissez la table valeur / tendance / seuil / décision',
        actions: [
          "Pour chaque KPI : valeur du mois, valeur du mois précédent, écart, seuil, lecture en une phrase, décision.",
          "Si le seuil est dépassé, la décision est obligatoire ; sinon elle peut être « surveiller ».",
        ],
      },
      {
        title: 'Recalculez le point de commande de Bweza (SRO)',
        actions: [
          "Consommation journalière : 180 cartons distribués en avril ÷ 30 = 6 cartons par jour.",
          "Lead time moyen de Bweza = 9,4 j ; lead time maximum observé = 12 j ; stock de sécurité = 6 × (12 − 9,4) ≈ 16 cartons, doublé à 32 pendant une épidémie en croissance.",
          "Point de commande = 6 × 9,4 + 32 = 88 cartons. Vérifiez l'ancien seuil de 50 cartons : 50 ÷ 6 = 8,3 jours de couverture, inférieur aux 9,4 jours de délai.",
        ],
      },
    ],
    table: {
      columns: ['KPI', 'Avril', 'Mars', 'Seuil', 'Décision'],
      rows: [
        ['Taux de rupture', '8,3 % (Bweza 28,6 %)', '5,0 %', '10 %', 'Relever le point de commande SRO de Bweza de 50 à 88 cartons avant le 08/05'],
        ['Lead time moyen', '7,4 j (7,5 avec retards)', '8,1 j', '10 j', 'Surveiller ; Bweza à 9,4 j : maintenir un stock de sécurité renforcé'],
        ['Coût par bénéficiaire', '1,70 USD (+4,9 %)', '1,62 USD', '+10 % (1,78)', "Aucune dérive : l'écart vient de Bweza (accès). Expliquer dans le rapport"],
      ],
    },
    result: "Livrable 4 terminé : trois KPI interprétés, chacun avec sa tendance, son seuil et une décision, dont un point de commande recalculé.",
    pitfall: "Garder le point de commande du mois de calme en pleine épidémie : avec 50 cartons et 8,3 jours de couverture pour 9,4 jours de délai, la rupture est structurelle, pas accidentelle.",
  },

  // ───────────── PROCÉDURE 5 — Rapport logistique mensuel (docx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 10',
    title: 'Rassembler les intrants et ouvrir le gabarit du rapport mensuel',
    intro: "Le gabarit gabarit-rapport-logistique-mensuel.docx donne au siège une vision consolidée et comparable dans le temps. Il contient trois cartouches (identification, rédacteur, validation) et cinq sections. Chaque case marquée « à compléter » doit être remplacée par votre contenu.",
    steps: [
      {
        title: 'Rassemblez les intrants',
        actions: [
          "Le fichier ..._v02-controle.xlsx et le fichier d'analyse (TCD, accès) : source de tous les chiffres.",
          "Le rapport du mois précédent : source des colonnes « Mois précédent ».",
          "Vos SitReps du mois, la fiche de réconciliation, le journal de bord des véhicules, les relevés de température.",
          "Les seuils d'alerte convenus avec votre coordination.",
        ],
      },
      {
        title: 'Préparez le document',
        actions: [
          "Ouvrez le gabarit et enregistrez-le sous AAAA-MM_Rapport-logistique_[Mission].docx.",
          "Repérez : cartouche Mois / Pays ; cartouche Rédigé par / Date ; 1 Résumé exécutif ; 2 KPI (tableau, puis ventilation par site) ; 3 Incidents ; 4 Flotte, entrepôt, chaîne du froid ; 5 Priorités ; cartouche Validé par / Date d'envoi.",
          "Rédigez dans l'ordre 2, 3, 4, 5, puis 1 : le résumé se rédige en dernier, à partir de ce que vous avez réellement écrit.",
        ],
      },
    ],
    result: "Le gabarit est enregistré sous un nom daté ; tous les intrants sont ouverts à côté.",
    tip: "Gardez la mise en forme du gabarit. D'un mois sur l'autre, le siège compare les rapports : changer l'ordre des sections ou le titre des colonnes rend la comparaison impossible.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 10',
    title: "Remplir les cartouches d'identification et de rédaction",
    intro: "Les deux premiers cartouches, tout en haut, permettent de classer le document au siège sans l'ouvrir : quel mois, quelle mission, qui a écrit, quand.",
    steps: [
      {
        title: 'Remplissez les quatre champs',
        actions: [
          "Mois / année couvert : le mois écoulé, en toutes lettres (Avril 2026).",
          "Pays et mission : pays, région, nom de la mission.",
          "Rédigé par (nom, fonction) : votre nom et votre fonction exacte.",
          "Date de rédaction : la date du jour au format JJ/MM/AAAA.",
        ],
      },
    ],
    table: {
      columns: ['Champ du gabarit', 'Fil rouge'],
      rows: [
        ['Mois / année couvert', 'Avril 2026'],
        ['Pays et mission', 'RDC — Nord-Kivu, mission Kemora Santé (réponse choléra, Lukando)'],
        ['Rédigé par (nom, fonction)', '[Prénom Nom], logisticien(ne) terrain, Lukando'],
        ['Date de rédaction', '04/05/2026'],
      ],
    },
    pitfall: "Laisser « Mai 2026 » parce que le rapport est rédigé en mai : le mois couvert est celui des données, pas celui de la rédaction.",
    result: "Quatre champs renseignés : le document est identifiable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 10',
    title: 'Section 2 — Tableau des indicateurs clés avec tendance et seuil',
    intro: "Le tableau comporte 5 colonnes : Indicateur, Valeur ce mois, Mois précédent, Seuil d'alerte, Commentaire / action. Les trois lignes sont fixes : Taux de rupture de stock, Lead time moyen (jours), Coût par bénéficiaire (USD). Les valeurs viennent de l'onglet « Tableau de bord KPI ».",
    steps: [
      {
        title: 'Remplissez ligne par ligne',
        actions: [
          "Valeur ce mois : recopiez A5, C5 et E5 de l'onglet « Tableau de bord KPI », avec la fraction entre parenthèses pour le taux de rupture.",
          "Mois précédent : prenez la valeur dans le rapport de mars, pas dans votre mémoire.",
          "Seuil d'alerte : la valeur convenue avec votre coordination.",
          "Commentaire / action : une phrase de lecture et la décision (étape 6 de la Procédure 4).",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Valeur ce mois', 'Mois précédent', "Seuil d'alerte", 'Commentaire / action'],
      rows: [
        ['Taux de rupture de stock', '8,3 % (2 sur 24)', '5,0 %', '10 %', 'Hausse de 3,3 points, due à Bweza (28,6 %). Point de commande SRO relevé à 88 cartons'],
        ['Lead time moyen (jours)', '7,4 (7,5 avec les retards)', '8,1', '10', 'Amélioration. Le chiffre ne couvre que les commandes livrées'],
        ['Coût par bénéficiaire (USD)', '1,70', '1,62', '1,78 (+10 %)', '+4,9 %. Écart expliqué par l\'accès difficile de Bweza (1,91), pas par une dérive'],
      ],
    },
    result: "Chaque KPI porte sa valeur, sa tendance, son seuil et sa décision : le lecteur sait s'il doit s'inquiéter.",
    pitfall: "Écrire « 8,3 % » sans mois précédent ni seuil : le siège ne peut pas savoir si c'est une amélioration, une dégradation ou un niveau normal pour ce contexte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 10',
    title: 'Section 2 — Ventilation par site',
    intro: "Le gabarit contient un second tableau, « Ventilation par site », de 4 lignes et 4 colonnes : Site, Taux de rupture, Lead time moyen (j), Coût / bénéficiaire (USD). Il reprend le récapitulatif par site de l'onglet « Tableau de bord KPI » : il permet de repérer le site qui tire la moyenne.",
    steps: [
      {
        title: 'Recopiez et commentez',
        actions: [
          "Recopiez les 4 lignes de B9:D12 de l'onglet « Tableau de bord KPI » avec le nom du site.",
          "Ajoutez sous le tableau une phrase qui nomme le site qui tire la moyenne et la cause.",
          "Ajoutez la précision de contexte d'accès pour le coût (résultat de la Procédure 4, étape 5).",
        ],
      },
    ],
    table: {
      columns: ['Site', 'Taux de rupture', 'Lead time moyen (j)', 'Coût / bénéficiaire (USD)'],
      rows: [
        ['Lukando', '0,0 %', '7,0', '1,47'],
        ['Bweza', '28,6 % (2 sur 7)', '9,4', '1,91'],
        ['Kasika', '0,0 %', '6,8', '1,70'],
        ['Mubimbi', '0,0 %', '6,7', '1,83'],
      ],
    },
    example: {
      title: 'Phrase de lecture sous le tableau',
      body: "Bweza concentre les deux ruptures du mois (SRO le 08/04, kits choléra le 18/04) et le délai le plus long ; son coût par bénéficiaire plus élevé reflète un accès par piste dégradée et un pont limité à 12 t, pas une inefficience.",
    },
    pitfall: "Laisser le nombre de lignes de côté : « 28,6 % » à Bweza sans « 2 sur 7 » laisse croire à un volume de ruptures bien plus important qu'il ne l'est.",
    result: "Le lecteur identifie en 5 secondes le site problématique et la raison.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 10',
    title: 'Section 3 — Incidents et risques majeurs du mois',
    intro: "Le tableau comporte 5 colonnes : N°, Nature de l'incident, Site, Date, Impact et action. Le gabarit demande d'y lister tout incident significatif (sécuritaire, mécanique, rupture critique, retard de dédouanement), y compris ceux qui ont déjà fait l'objet d'un SitRep séparé.",
    steps: [
      {
        title: 'Rédigez une ligne par incident',
        actions: [
          "Reprenez la colonne J de « Données brutes » : chaque incident non nul y figure déjà.",
          "Classez du plus grave au moins grave ; numérotez.",
          "Colonne Impact et action : l'effet opérationnel chiffré, puis ce qui a été fait. Mentionnez le numéro de SitRep s'il y en a un.",
        ],
      },
    ],
    table: {
      columns: ['N°', "Nature de l'incident", 'Site', 'Date', 'Impact et action'],
      rows: [
        ['1', 'Rupture de SRO : 80 cartons commandés le 08/04 non livrés ; stock à zéro du 08 au 13/04', 'Bweza', '08/04', 'SitRep n°1 du 09/04 ; transfert de 26 cartons depuis Lukando le 10/04 ; réapprovisionnement reçu le 13/04'],
        ['2', 'Rupture de kits choléra : 100 kits commandés le 18/04 non livrés (rupture à la centrale de Nairobi)', 'Bweza', '18/04', 'SitRep n°2 du 19/04 ; 40 kits transférés de Lukando le 19/04 ; lot prioritaire de Nairobi promis pour le 06/05'],
        ['3', 'Camion 6 t immobilisé 10 jours : pièces promises sous 4 jours, reçues en 10 (dédouanement)', 'Lukando', '14/04', 'Une rotation sur deux vers Bweza perdue ; pièces reçues le 24/04, camion remis en service le 25/04. Aucun SitRep envoyé : à corriger'],
      ],
    },
    result: "Les 3 incidents du mois sont listés, chiffrés, avec leur action et leur canal (SitRep ou non).",
    pitfall: "Noyer un incident critique dans le format de routine : un camion immobilisé 10 jours aurait mérité un SitRep dès le 3e jour. Le rapport mensuel documente la tendance, il ne doit jamais être le seul canal d'une urgence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 10',
    title: 'Section 4 — État de la flotte',
    intro: "Le gabarit contient trois tableaux de trois colonnes (Indicateur, Valeur / état, Commentaire). Premier tableau : la flotte, avec trois lignes — Véhicules opérationnels / immobilisés ; Kilométrage cumulé du mois ; Incidents mécaniques ou accidents. Les données viennent des carnets de bord et du suivi de flotte (Module 03).",
    steps: [
      {
        title: 'Remplissez le tableau Flotte',
        actions: [
          "Véhicules opérationnels / immobilisés : nombre au dernier jour du mois, plus tout véhicule immobilisé dans le mois avec sa durée.",
          "Kilométrage cumulé du mois : somme des carnets de bord, comparée au mois précédent.",
          "Incidents mécaniques ou accidents : nombre, nature, durée d'immobilisation ; rappelez le numéro d'incident de la section 3.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Valeur / état', 'Commentaire'],
      rows: [
        ['Véhicules opérationnels / immobilisés', '7 véhicules : 7 opérationnels au 30/04 ; 1 camion immobilisé du 14 au 24/04 (10 jours)', 'Voir incident n° 3 : pièces bloquées en dédouanement'],
        ['Kilométrage cumulé du mois', '11 420 km (mars : 9 870 km)', '+15,7 %, lié à l\'activité choléra et aux rotations vers Bweza'],
        ['Incidents mécaniques ou accidents', '1 panne mécanique ; 0 accident', 'Constituer un stock de pièces critiques (priorité 3)'],
      ],
    },
    result: "L'état de la flotte est chiffré et relié à l'incident de la section 3.",
    pitfall: "Écrire « flotte opérationnelle » sans chiffre : un camion immobilisé 10 jours sur un parc de 3 camions est une perte de 33 % de capacité de transport, que le siège doit voir.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 10',
    title: 'Section 4 — État de l\'entrepôt et de la chaîne du froid',
    intro: "Deuxième et troisième tableaux. Entrepôt : Taux d'occupation ; Écarts d'inventaire constatés ; Conditions de stockage (température, humidité, sécurité) (Module 04). Chaîne du froid : Continuité (ruptures enregistrées) ; État et entretien des équipements frigorifiques (Module 05).",
    steps: [
      {
        title: 'Tableau Entrepôt',
        actions: [
          "Taux d'occupation : surface ou palettes occupées ÷ capacité, au dernier jour du mois.",
          "Écarts d'inventaire : reprenez la fiche de réconciliation de la Procédure 3.",
          "Conditions de stockage : température maximale relevée, humidité, sécurité (gardiennage, cadenas), incident éventuel.",
        ],
      },
      {
        title: 'Tableau Chaîne du froid',
        actions: [
          "Continuité : nombre de ruptures de la chaîne enregistrées dans les relevés de température.",
          "Équipements : état de chaque réfrigérateur ou congélateur, pannes, entretien du mois.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Valeur / état', 'Commentaire'],
      rows: [
        ["Taux d'occupation de l'entrepôt", '72 % (130 m² sur 180 m²)', 'Marge confortable avant la saison des pluies'],
        ["Écarts d'inventaire constatés", '2 écarts sur 48 lignes comptées (4,2 %)', 'SRO −6 cartons (transfert du 10/04 mal saisi) ; carburant −1 fût ; corrigés le 30/04'],
        ['Conditions de stockage', 'Température maximale 28 °C (seuil 30 °C) ; humidité conforme ; gardiennage 24 h/24', 'Fuite de toiture réparée le 22/04'],
        ['Continuité de la chaîne du froid', '0 rupture ; 1 alarme à Bweza le 15/04 (9 °C pendant 3 h)', 'Produits vérifiés et conservés ; incident clos le 16/04'],
        ['État et entretien des équipements frigorifiques', '3 réfrigérateurs solaires opérationnels', 'Thermostat de Bweza remplacé le 16/04'],
      ],
    },
    result: "Les cinq indicateurs d'entrepôt et de chaîne du froid sont renseignés, avec une valeur chiffrée et un commentaire.",
    tip: "Une valeur « RAS » seule ne renseigne pas le siège. Même un mois sans incident mérite un chiffre (« 0 rupture, relevés 2 fois par jour ») : il prouve que quelqu'un a regardé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 8 sur 10',
    title: 'Section 1 — Résumé exécutif, rédigé en dernier',
    intro: "Le gabarit demande une synthèse en 3 à 5 phrases : niveau d'activité global, tendance des KPI, faits marquants du mois. Cette section est lue en premier, souvent seule : elle doit se suffire à elle-même.",
    steps: [
      {
        title: 'Rédigez en 5 phrases dans cet ordre',
        actions: [
          "Phrase 1 : niveau d'activité (nombre de mouvements, sites, taux de livraison).",
          "Phrase 2 : tendance du KPI principal (valeur, mois précédent, seuil).",
          "Phrase 3 : le site ou l'article qui explique l'écart.",
          "Phrase 4 : le fait marquant qui n'est pas un KPI (incident, flotte).",
          "Phrase 5 : la priorité du mois suivant et ce que vous attendez du siège.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 1 du rapport d\'avril',
      body: "Avril : 24 mouvements logistiques sur 4 sites (Lukando, Bweza, Kasika, Mubimbi) ; 21 livrés, 1 en retard, 2 ruptures. Le taux de rupture global est de 8,3 % (mars : 5,0 % ; seuil : 10 %), mais Bweza atteint 28,6 % avec deux ruptures (SRO du 08 au 13/04, kits choléra depuis le 18/04) ; le lead time moyen s'améliore à 7,4 jours et le coût par bénéficiaire reste stable à 1,70 USD (+4,9 %). Un camion de 6 t est resté immobilisé 10 jours à Lukando faute de pièces bloquées en douane. Priorité de mai : relever le point de commande SRO de Bweza de 50 à 88 cartons et sécuriser l'arrivée des 100 kits choléra promis pour le 06/05.",
    },
    pitfall: "Rédiger le résumé avant les tableaux et le réécrire après : il contredit alors les chiffres. Il se rédige en dernier, en recopiant les chiffres des sections 2 à 4.",
    result: "Un résumé de 5 phrases, chiffré, lisible en 30 secondes et cohérent avec les sections suivantes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 9 sur 10',
    title: 'Section 5 — Priorités logistiques du mois suivant et cartouche de validation',
    intro: "Le gabarit propose trois lignes : Priorité 1, 2 et 3 — action, responsable, échéance. Les priorités sont la suite directe des décisions de la Procédure 4 et des incidents de la section 3. Un cartouche final accueille Validé par (coordinateur logistique) et Date d'envoi au siège.",
    steps: [
      {
        title: 'Rédigez trois priorités',
        actions: [
          "Chaque priorité répond à un chiffre ou à un incident du rapport (écrivez le lien).",
          "Format : verbe d'action, objet, responsable (nom ou fonction), échéance JJ/MM/AAAA.",
          "Limitez-vous à 3 : une liste de 8 priorités n'en contient aucune.",
        ],
      },
      {
        title: 'Faites valider',
        actions: [
          "Envoyez le rapport complet à votre coordinateur logistique pays pour validation, un jour avant l'échéance.",
          "Remplissez le cartouche final : nom du validateur et date d'envoi au siège.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 5 et cartouche final',
      lines: [
        "Priorité 1 — Relever le point de commande SRO de Bweza de 50 à 88 cartons dans la fiche de stock et le système. Responsable : gestionnaire de stock de Lukando. Échéance : 08/05/2026.",
        "Priorité 2 — Suivre l'arrivée des 100 kits choléra promis le 06/05 ; plan B : transférer 20 kits de Mubimbi si le lot n'est pas arrivé le 05/05. Responsable : logisticien terrain. Échéance : 06/05/2026.",
        "Priorité 3 — Constituer un stock de pièces critiques pour les 3 camions (12 références) et commander avant le 15/05. Responsable : responsable flotte. Échéance : 15/05/2026.",
        "Validé par : Jean-Marc Ilunga, coordinateur logistique pays — Date d'envoi au siège : 05/05/2026.",
      ],
    },
    pitfall: "Écrire des priorités sans responsable ni échéance (« améliorer le suivi des stocks ») : le mois suivant, personne ne peut dire si elles ont été tenues.",
    result: "Trois priorités actionnables, validées par la coordination.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 10 sur 10',
    title: 'Relire, exporter, envoyer à l\'échéance et archiver',
    intro: "Un rapport envoyé avec deux semaines de retard perd l'essentiel de sa valeur : le siège prend ses décisions de planification et d'allocation sur un cycle régulier. Convenez d'une échéance fixe et tenez-la, surtout les mois où l'activité a été la plus intense.",
    steps: [
      {
        title: 'Relisez avec la check-list',
        actions: [
          "Aucune case « à compléter » ne subsiste.",
          "Chaque KPI porte sa valeur, le mois précédent, le seuil et une décision.",
          "Les chiffres du résumé sont identiques à ceux des tableaux.",
          "Chaque incident a un impact chiffré, une action et, s'il y a lieu, un numéro de SitRep.",
          "Chaque priorité a un responsable et une échéance.",
        ],
      },
      {
        title: 'Exportez, envoyez et archivez',
        actions: [
          "Exportez en PDF ; envoyez le PDF et le fichier Excel de la v02-controle en pièces jointes.",
          "Archivez le tout dans 03_Rapports, sous AAAA-MM, avec le rapport du mois précédent à côté.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — envoi du 05/05/2026, 9h00',
      lines: [
        "Objet : Rapport logistique avril 2026 — Nord-Kivu — Kemora Santé",
        "Pièces jointes : 2026-04_Rapport-logistique_Nord-Kivu.pdf ; 2026-04-29_Tableau-de-bord-KPI_Nord-Kivu_2026-04_v02-controle.xlsx",
        "Copie : Dr C. Kahindo (coordinatrice de projet). Validation de J.-M. Ilunga le 04/05 à 17h.",
      ],
    },
    result: "Livrable 5 terminé : le rapport est validé, envoyé à l'échéance et archivé à côté du mois précédent.",
    tip: "Programmez un rappel dans votre agenda trois jours avant l'échéance : le jour où vous ouvrez le tableau, vous devez déjà avoir les données.",
  },

  // ───────────── PROCÉDURE 6 — SitRep ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Décider : SitRep immédiat ou rapport mensuel ?',
    intro: "Le SitRep part dès qu'une situation exige une réaction que vous ne pouvez pas attendre jusqu'à l'échéance mensuelle. Le test prend une minute. Vous avez besoin des critères de déclenchement convenus avec votre coordination.",
    steps: [
      {
        title: 'Passez les 5 critères',
        actions: [
          "Article vital : la couverture en jours (stock ÷ consommation journalière) est-elle inférieure au lead time ?",
          "Véhicule ou axe : une livraison critique est-elle bloquée depuis plus de 48 heures ?",
          "Sécurité, accès ou perte de marchandise : un incident touche-t-il vos opérations ?",
          "Chaîne du froid : un produit sensible est-il compromis ?",
          "Décision : attendez-vous une décision de la coordination ou du siège dans les 72 heures ?",
        ],
      },
      {
        title: 'Tranchez',
        actions: [
          "Un seul « oui » : SitRep immédiat, et mention dans le rapport mensuel.",
          "Aucun « oui » : le fait va dans la section 3 du rapport mensuel.",
        ],
      },
    ],
    table: {
      columns: ['Fait (avril)', 'Critère rempli', 'Décision'],
      rows: [
        ['Rupture de kits choléra à Bweza : stock 12 kits, consommation 3 par jour, lot non livré', 'Article vital : 4 jours de couverture pour un délai de 9 jours', 'SitRep n°2 le 19/04'],
        ['Camion immobilisé depuis 3 jours, pièces bloquées en douane', 'Livraison critique bloquée depuis plus de 48 h', 'SitRep le 17/04 (non envoyé : à éviter)'],
        ['Taux de rupture mensuel à 8,3 %', 'Aucun', 'Rapport mensuel'],
        ["Écart d'inventaire de 1 fût de carburant", 'Aucun', 'Rapport mensuel (section 4)'],
      ],
    },
    result: "Vous savez, pour chaque fait, par quel canal il part et à quelle date.",
    pitfall: "Attendre « d'en savoir plus » avant d'écrire. Un SitRep se rédige avec ce que vous savez au moment où vous écrivez, en précisant ce qui reste à confirmer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Collecter et horodater les faits avant de rédiger',
    intro: "Un SitRep vaut par la précision de ses faits : heures, quantités, sources. Le destinataire doit décider vite sans vous rappeler pour demander ce qui manque. Vous disposez de 15 à 30 minutes pour collecter.",
    steps: [
      {
        title: 'Rassemblez les faits en 7 questions',
        actions: [
          "Quoi : la nature exacte du fait, en une phrase.",
          "Où : le site, l'axe, le véhicule ou l'article concerné.",
          "Quand : date et heure locales, avec le fuseau (Goma : UTC+2), du fait et de la dernière vérification.",
          "Combien : stock restant, consommation journalière, couverture en jours, nombre de véhicules, quantités.",
          "Source : qui vous l'a dit, à quelle heure, par quel canal.",
          "Qu'avez-vous déjà fait : les actions prises, avec leur heure.",
          "Que manque-t-il : ce qui reste à confirmer et qui doit le faire.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — faits collectés le 19/04, 6h40',
      lines: [
        "Quoi : stock de kits choléra de Bweza à 12 kits ; commande de 100 kits du 18/04 non livrée.",
        "Où : unité de traitement du choléra de Bweza. Quand : fait constaté le 19/04 à 6h30 (comptage) ; réponse de la centrale de Nairobi le 18/04 à 16h40.",
        "Combien : consommation 3 kits par jour → couverture 4 jours (jusqu'au 23/04) ; stock de Lukando : 90 kits, seuil de sécurité 60.",
        "Qu'avez-vous déjà fait : prélèvement de 40 kits sur Lukando préparé pour un convoi à 6h00 ; cluster santé informé à 7h00.",
      ],
    },
    tip: "Convertissez toujours un stock en jours de couverture : « 12 kits » ne dit rien, « 4 jours de couverture pour un délai de 9 jours » fait comprendre l'urgence en une seconde.",
    pitfall: "Rédiger à partir d'un message de seconde main (« on m'a dit qu'il n'y a plus rien ») sans nommer la source ni l'heure : le destinataire ne peut ni vérifier, ni décider.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Rédiger le SitRep en cinq blocs lisibles en deux minutes',
    intro: "Un SitRep qui ressemble à un rapport mensuel condensé a raté sa cible : il doit se lire en moins de deux minutes par quelqu'un qui doit décider vite. Il tient sur une page, sans jargon, en cinq blocs dans cet ordre.",
    steps: [
      {
        title: 'Écrivez les cinq blocs',
        actions: [
          "En-tête : numéro, date et heure précises avec fuseau, auteur, destinataires, objet qui contient la décision attendue.",
          "1 Situation : ce qui s'est passé, en trois lignes, avec chiffres et sources.",
          "2 Impact : la conséquence sur les opérations, chiffrée et datée.",
          "3 Actions déjà prises : ce qui est fait, avec l'heure.",
          "4 Besoins et décision attendue : ce que vous demandez, à qui, avant quelle heure ; et la date de la prochaine mise à jour.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — SitRep logistique n°2',
      lines: [
        "SITREP LOGISTIQUE n°2 — Kemora Santé — Nord-Kivu — 19/04/2026, 07h30 (heure de Goma, UTC+2), situation à 07h00.",
        "De : [Prénom Nom], logisticien(ne) terrain, Lukando. À : J.-M. Ilunga ; Dr C. Kahindo ; desk logistique du siège.",
        "Objet : Rupture imminente de kits choléra à Bweza — accord attendu avant 14h00.",
        "1 Situation : stock de kits choléra de l'unité de Bweza à 12 kits (comptage du 19/04, 06h30). La commande de 100 kits du 18/04 n'est pas livrée : rupture à la centrale de Nairobi (réponse du 18/04, 16h40), prochain lot promis pour le 06/05.",
        "2 Impact : consommation 3 kits par jour, soit 4 jours de couverture (jusqu'au 23/04). Sans réapprovisionnement, la prise en charge des cas de choléra de Bweza s'interrompt le 24/04.",
        "3 Actions prises : prélèvement de 40 kits sur le stock de Lukando (90 kits), convoi à 06h00, arrivée prévue à 13h00 ; cluster santé informé à 07h00.",
        "4 Décision attendue avant 14h00 : (a) accord sur le prélèvement de 40 kits, qui ramène Lukando à 50 kits, sous son seuil de sécurité de 60 ; (b) demande d'un lot prioritaire à la centrale de Nairobi, livraison avant le 06/05. Prochaine mise à jour : 20/04, 07h30.",
      ],
    },
    pitfall: "Mettre la demande de décision à la dernière ligne, sans heure limite : le lecteur ne la voit pas ou ne sait pas qu'elle est urgente. Elle doit figurer dans l'objet.",
    result: "Un SitRep d'une page, chiffré et horodaté, dont la décision attendue figure dans l'objet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Diffuser, suivre, mettre à jour et clore le SitRep',
    intro: "Un SitRep envoyé n'est pas un SitRep traité. Vous vous assurez qu'il a été lu, qu'une décision est prise, et vous le clôturez publiquement. Vous le reliez ensuite au rapport mensuel.",
    steps: [
      {
        title: 'Diffusez et suivez',
        actions: [
          "Envoyez par e-mail ; appelez le décisionnaire si une décision est attendue dans l'heure ou la demi-journée.",
          "Notez dans votre journal l'heure d'envoi, l'accusé de réception et l'heure de la décision.",
          "Numérotez dans l'ordre : le SitRep suivant sur le même fait s'appelle « n°2 — mise à jour 1 ».",
        ],
      },
      {
        title: 'Clôturez et reliez',
        actions: [
          "Quand la situation est réglée, envoyez un message de clôture de 3 lignes : fait, solution, date.",
          "Reportez le SitRep dans la section 3 du rapport mensuel avec son numéro.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — suivi du SitRep n°2',
      lines: [
        "19/04 07h30 : SitRep n°2 envoyé. 08h10 : accusé de réception de J.-M. Ilunga. 09h30 : accord de Dr Kahindo pour le prélèvement de 40 kits.",
        "20/04 07h30 : mise à jour 1 — convoi arrivé à Bweza le 19/04 à 12h50 ; stock 52 kits ; couverture 17 jours ; lot de Nairobi promis pour le 06/05.",
        "Section 3 du rapport d'avril, incident n° 2 : « SitRep n°2 du 19/04 ».",
      ],
    },
    result: "Livrable 6 terminé : un SitRep envoyé à temps, suivi jusqu'à la décision, mis à jour et relié au rapport mensuel.",
    tip: "Gardez un modèle de SitRep prêt dans votre ordinateur, avec les cinq blocs vides : le jour de l'urgence, vous n'avez pas le temps de réfléchir à la structure.",
  },

  // ───────────── PROCÉDURE 7 — Narrative annuelle (docx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 8',
    title: 'Rassembler les intrants et ouvrir le gabarit de la narrative annuelle',
    intro: "gabarit-narrative-planification-annuelle-logistique.docx est le contrepoint annuel du rapport mensuel : il se rédige une seule fois par an, en fin d'année, avant l'arbitrage du budget et des priorités. Il compte cinq sections : contexte externe et risques, bilan de l'année, objectifs de l'année à venir, ressources humaines, chronogramme.",
    steps: [
      {
        title: 'Rassemblez les intrants',
        actions: [
          "Les 12 (ou les n) rapports mensuels de l'année, pour construire la courbe de chaque KPI.",
          "Vos objectifs de début d'année et les décisions de la coordination.",
          "L'organigramme de l'équipe logistique et le budget RH.",
          "L'état de la flotte et de l'entrepôt, les contrats de transporteurs, les contraintes d'accès.",
        ],
      },
      {
        title: 'Préparez le document',
        actions: [
          "Ouvrez le gabarit et enregistrez-le sous AAAA_Narrative-planification_[Mission].docx.",
          "Repérez les 5 sections et remplacez chaque texte d'aide en gris (les phrases qui commencent par « Ex. : ») par votre propre contenu.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — tableau des KPI de l\'année (mars à novembre 2026)',
      lines: [
        "Taux de rupture global : 8 mois sur 9 sous le seuil de 10 % ; dépassement en juin (11,2 %).",
        "Lead time moyen : 7,9 jours sur l'année ; jamais au-dessus du seuil de 10 jours.",
        "Rapports mensuels remis à l'échéance : 8 sur 9 (mars remis avec 6 jours de retard).",
        "Réconciliation MIMOSA mensuelle signée : 8 sur 9.",
      ],
    },
    tip: "Construisez la courbe des KPI avant d'écrire : les sections 2 et 3 se rédigent facilement quand les chiffres de l'année sont sur la table.",
    result: "Le gabarit est enregistré, tous les intrants sont rassemblés, la courbe annuelle des KPI est prête.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 8',
    title: 'Section 1 — Contexte externe et risques liés à la chaîne d\'approvisionnement',
    intro: "La section 1 comporte deux paragraphes : le contexte externe (contraintes d'accès routier et saisonnier, état des infrastructures, fiabilité des transporteurs) et les risques logistiques susceptibles d'avoir des conséquences opérationnelles (dégradation sécuritaire d'un axe, vieillissement du parc, dépendance à un seul point d'entrée).",
    steps: [
      {
        title: 'Paragraphe 1 — Contexte externe',
        actions: [
          "Accès : saisons, routes, ponts, pistes, avec chiffres (km, tonnage, durée des coupures).",
          "Transporteurs et sous-traitants : nombre, fiabilité, dépendance.",
        ],
      },
      {
        title: 'Paragraphe 2 — Risques',
        actions: [
          "Un risque par ligne : nature, probabilité, impact opérationnel, signal d'alerte.",
          "Limitez-vous aux 4 ou 5 risques qui changeraient vos décisions.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 1 (extrait)',
      lines: [
        "Contexte externe : deux saisons des pluies (mars–mai, septembre–décembre) ; 94 km de piste sur les 142 km Goma–Lukando ; pont de la Musi limité à 12 t depuis le 10/03 ; piste Lukando–Bweza coupée 2 jours en avril ; 2 transporteurs fiables (Transports Umoja et un second).",
        "Risque 1 — Dépendance à Goma comme seul point d'entrée : signal d'alerte : fermeture de la frontière ou du fret aérien.",
        "Risque 2 — Vieillissement du parc : 2 camions sur 3 ont plus de 8 ans ; l'immobilisation d'avril l'a montré.",
        "Risque 3 — Dégradation sécuritaire de l'axe Lukando–Bweza (check-point irrégulier de Bweza).",
        "Risque 4 — Dépendance de l'approvisionnement choléra à la seule centrale de Nairobi (2 ruptures en 2026).",
      ],
    },
    pitfall: "Dresser une liste de 15 risques génériques : le coordinateur n'en lit aucun. Gardez ceux qui changeraient une décision d'achat, de budget ou de planning.",
    result: "Un contexte chiffré et 4 à 5 risques classés, chacun avec son signal d'alerte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 8',
    title: 'Section 2 — Bilan des objectifs de l\'année : réalisés et défis',
    intro: "La section 2 s'ouvre sur deux zones : « Objectifs principaux de l'année écoulée » (lesquels ont été atteints ?) et « Principaux défis rencontrés ». Les objectifs de début d'année portent sur la flotte, les entrepôts, la chaîne du froid et l'accès.",
    steps: [
      {
        title: 'Bilan des objectifs',
        actions: [
          "Reprenez chaque objectif fixé en janvier : formulation, résultat chiffré, statut (atteint, partiel, non atteint).",
          "Chiffrez avec la courbe annuelle des KPI : « 8 mois sur 9 », jamais « globalement oui ».",
        ],
      },
      {
        title: 'Défis rencontrés',
        actions: [
          "Un défi par ligne : fait, cause, ce que vous en avez tiré.",
          "N'oubliez pas les défis causés par l'extérieur (fournisseur, accès).",
        ],
      },
    ],
    table: {
      columns: ['Objectif 2026', 'Résultat', 'Statut'],
      rows: [
        ['Rapport mensuel remis avant le 5 de chaque mois', '8 rapports sur 9 (mars remis avec 6 jours de retard)', 'Atteint à 89 %'],
        ['Taux de rupture global sous 10 %', '8 mois sur 9 ; juin à 11,2 % (rupture de kits WASH)', 'Partiel'],
        ['Lead time moyen sous 10 jours', '7,9 jours en moyenne ; maximum mensuel 8,4', 'Atteint'],
        ['Réconciliation mensuelle du stock signée', '8 mois sur 9', 'Partiel'],
      ],
    },
    example: {
      title: 'Fil rouge — défis de l\'année',
      lines: [
        "Épidémie de choléra : consommation de SRO et de kits multipliée par 1,5 à Bweza, avec des points de commande calibrés sur le mois précédent → 2 ruptures en avril.",
        "Dépendance à la centrale de Nairobi : 2 ruptures de kits choléra dans l'année, délai de remplacement de 18 jours.",
        "Dédouanement : pièces détachées bloquées 6 jours au-delà du délai promis ; 1 camion immobilisé 10 jours.",
      ],
    },
    pitfall: "Écrire « tous les objectifs ont été atteints » : le coordinateur sait que c'est faux et ne croit plus rien du document. Un bilan honnête avec 2 objectifs partiels est plus crédible.",
    result: "Un bilan chiffré, objectif par objectif, avec les défis nommés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 8',
    title: 'Section 2 — Autres réalisations, défis et enseignements à conserver',
    intro: "La suite de la section 2 contient un tableau à deux cases, « Autres réalisations et défis », puis trois zones « Principaux enseignements à conserver ». Le gabarit suggère des exemples ; remplacez-les par votre expérience.",
    steps: [
      {
        title: 'Tableau « Autres réalisations et défis »',
        actions: [
          "Case de gauche : actions de communication avec les départements demandeurs — laquelle, avec quel résultat chiffré.",
          "Case de droite : outil de suivi partagé pérennisé — lequel, pour quel usage.",
        ],
      },
      {
        title: 'Trois enseignements',
        actions: [
          "Adéquation des infrastructures d'entreposage et de la flotte aux normes (chaîne du froid, capacité de stockage).",
          "Séparation des fonctions : matrice RACI, découplage entre gestion de flotte et gestion des stocks.",
          "Anticipation par la transparence : partager régulièrement stocks et flotte aux programmes.",
        ],
      },
    ],
    table: {
      columns: ['Communication avec les départements demandeurs', 'Outil de suivi partagé'],
      rows: [
        ['Réunion hebdomadaire de planification programme–logistique instaurée en mars : les demandes urgentes non planifiées sont passées de 9 à 3 par mois.', 'Tableau de bord mensuel et fichier de suivi des requêtes partagés sur le serveur de la mission, lus par 6 personnes ; formulaire Kobo dans 2 sites sur 4.'],
      ],
    },
    example: {
      title: 'Fil rouge — enseignements à conserver',
      lines: [
        "Infrastructures : la capacité de l'entrepôt de Lukando (72 % d'occupation) et le froid solaire de Bweza ont tenu ; la flotte (3 camions) est le goulet d'étranglement.",
        "Séparation des fonctions : depuis que la gestion des stocks et celle de la flotte sont tenues par deux personnes distinctes, les écarts d'inventaire sont passés de 9 % à 4 %.",
        "Transparence : le partage hebdomadaire du stock avec le Dr Kahindo a évité 2 demandes d'urgence en septembre.",
      ],
    },
    result: "Deux réalisations chiffrées et trois enseignements argumentés par un fait de l'année.",
    tip: "Un enseignement vaut quelque chose seulement s'il est appuyé sur un fait vécu cette année. « La transparence est importante » ne signifie rien ; « le partage hebdomadaire a évité 2 demandes d'urgence » signifie quelque chose.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 8',
    title: "Section 3 — Objectifs stratégiques de l'année à venir",
    intro: "La section 3 comporte trois paragraphes : les objectifs retenus et la méthode (jalons, indicateurs, ressources), la justification du choix et le lien avec les objectifs des programmes, et les objectifs de plus long terme.",
    steps: [
      {
        title: 'Formulez 3 objectifs mesurables',
        actions: [
          "Chaque objectif : un indicateur, une valeur de départ, une cible, une échéance (ex. : taux de rupture des articles vitaux de 8,3 % à 5 % d'ici le 31/12/2027).",
          "Partez des écarts du bilan : un objectif qui ne répond à aucun écart de 2026 doit être justifié.",
        ],
      },
      {
        title: 'Précisez méthode, lien programme et long terme',
        actions: [
          "Méthode : jalons datés, qui fait quoi, ressources nécessaires.",
          "Lien explicite avec un objectif du programme (par exemple la continuité de prise en charge du choléra).",
          "Objectifs pluriannuels si pertinents : renouvellement du parc, extension de l'entrepôt.",
        ],
      },
    ],
    table: {
      columns: ['Objectif 2027', 'Indicateur et cible', 'Méthode et jalons', 'Lien avec le programme'],
      rows: [
        ['O1 — Sécuriser les articles vitaux', 'Taux de rupture SRO et kits choléra ≤ 5 % (2026 : 8,3 % en avril, 28,6 % à Bweza)', 'Points de commande recalculés chaque trimestre : 31/01, 30/04, 31/07, 31/10', 'Continuité de la prise en charge du choléra'],
        ['O2 — Raccourcir le délai vers Bweza', 'Lead time moyen ≤ 8 jours (9,4 en avril)', 'Stock tampon à Lukando ; contrat cadre transporteur signé avant 31/03', 'Disponibilité des intrants en zone isolée'],
        ['O3 — Fiabiliser les données', '100 % des mouvements saisis sous 48 h ; réconciliation mensuelle à 100 %', 'Formulaire Kobo déployé dans les 4 sites avant 28/02', 'Rapports comparables et décisions plus rapides'],
      ],
    },
    example: {
      title: 'Fil rouge — long terme',
      lines: [
        "Renouveler progressivement le parc : 2 camions de plus de 8 ans à remplacer d'ici 2028.",
        "Étendre la capacité d'entreposage de Lukando de 180 à 300 m² en 2028.",
      ],
    },
    pitfall: "Écrire « améliorer la logistique » ou « réduire les ruptures » : sans indicateur, valeur de départ ni cible, l'objectif ne pourra jamais être évalué au bilan de fin d'année.",
    result: "Trois objectifs mesurables, avec jalons, ressources et lien explicite avec les objectifs du programme.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 8',
    title: 'Section 4 — Ressources humaines de l\'équipe logistique',
    intro: "La section 4 contient cinq éléments : la référence à l'organigramme (document séparé), les profils de staff international, les profils de staff national (postes ajoutés, modifiés ou supprimés), l'impact sur le budget RH et la demande de support planifié au département référent.",
    steps: [
      {
        title: 'Rédigez les cinq éléments',
        actions: [
          "Organigramme : référence au document séparé, date de sa dernière mise à jour.",
          "Staff international : niveau de poste, durée de la mission, mois FTE budgétés.",
          "Staff national : poste, niveau, mois FTE, justification opérationnelle pour chaque ajout, modification ou suppression.",
          "Impact budgétaire : coût annuel en USD du mouvement, et part du budget RH logistique.",
          "Support demandé au siège ou au desk régional, avec date.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 4 (extrait)',
      lines: [
        "Organigramme : voir « Organigramme logistique Nord-Kivu », version du 30/11/2026.",
        "Staff international : 1 coordinateur logistique pays (Goma), poste maintenu, 12 mois FTE.",
        "Staff national — ajout : 1 assistant logistique chargé du reporting et des données, 12 mois FTE ; justification : formulaire Kobo, consolidation Power Query, réconciliation MIMOSA mensuelle (sinon cette charge retombe sur le logisticien terrain, au détriment des convois).",
        "Staff national — modification : 1 chauffeur senior promu responsable flotte adjoint, après formation.",
        "Impact budgétaire : +9 600 USD par an (800 USD × 12 mois), soit +4 % du budget RH logistique.",
        "Support demandé au desk logistique du siège : validation du recrutement avant le 31/01/2027 ; déploiement du module véhicules de MIMOSA au T2.",
      ],
    },
    pitfall: "Demander un poste sans le justifier par une charge de travail chiffrée : une demande appuyée sur « nous sommes débordés » est refusée ; une demande appuyée sur « 14 heures par mois de saisie de plus » est étudiée.",
    result: "Une section RH complète, chiffrée en mois FTE et en budget, avec une demande de support datée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 7 sur 8',
    title: 'Section 5 — Chronogramme des grandes échéances',
    intro: "La section 5 est un tableau à trois colonnes : Période, Jalon / échéance clé, Responsable. Le gabarit contient une ligne d'exemple (« T2 — révision technique annuelle de la flotte — Fleet Manager ») et cinq lignes vides.",
    steps: [
      {
        title: 'Remplissez les 5 lignes',
        actions: [
          "Reprenez chaque jalon des sections 3 et 4 : un jalon = une date, un livrable, un responsable nommé.",
          "Classez par ordre chronologique et répartissez sur l'année : pas plus de deux jalons par trimestre, sans quoi aucun n'est tenu.",
          "Ajoutez les échéances récurrentes (révision de flotte, inventaire annuel, préparation de la saison des pluies).",
        ],
      },
    ],
    table: {
      columns: ['Période', 'Jalon / échéance clé', 'Responsable'],
      rows: [
        ['T1 (janvier)', 'Revue des seuils d\'alerte et recalcul de tous les points de commande', 'Logisticien terrain et gestionnaire de stock'],
        ['T1 (février)', 'Formation Kobo/ODK des 4 gérants de site', 'Logisticien terrain'],
        ['T2 (avril)', 'Révision technique annuelle de la flotte', 'Responsable flotte'],
        ['T3 (août)', 'Préparation de la saison des pluies : stock tampon à Bweza, reconnaissance des pistes', 'Coordinateur logistique pays'],
        ['T4 (novembre)', 'Narrative de planification 2028', 'Logisticien terrain'],
      ],
    },
    result: "Un chronogramme de 5 jalons, chacun relié aux objectifs et à un responsable.",
    pitfall: "Dater tous les jalons « T1 » parce que c'est l'urgence du moment : à l'arrivée du premier trimestre, rien n'est tenu et le chronogramme perd toute valeur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 8 sur 8',
    title: 'Relire, présenter à la coordination et ajuster',
    intro: "La narrative est un document de dialogue : elle sert de base à la discussion avec le coordinateur avant l'arbitrage du budget et des priorités. Elle n'a de valeur que présentée.",
    steps: [
      {
        title: 'Relisez avec la check-list',
        actions: [
          "Aucun texte d'aide « Ex. : » ne subsiste.",
          "Chaque objectif 2027 a un indicateur, une valeur de départ, une cible, une échéance.",
          "Chaque jalon du chronogramme a un responsable nommé.",
          "Les chiffres du bilan sont identiques à ceux des rapports mensuels.",
        ],
      },
      {
        title: 'Présentez en 20 minutes',
        actions: [
          "5 minutes : bilan et défis de l'année.",
          "10 minutes : objectifs 2027, besoins RH, chronogramme.",
          "5 minutes : arbitrages à obtenir du coordinateur (budget, priorités).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — envoi et réunion',
      lines: [
        "11/12/2026 : narrative envoyée à J.-M. Ilunga, avec la courbe annuelle des KPI et l'organigramme.",
        "14/12/2026 : réunion de 20 minutes ; accord sur O1, O3 et le recrutement ; O2 reporté à un chiffrage du contrat cadre transporteur.",
        "17/12/2026 : version finale envoyée au siège avec les arbitrages.",
      ],
    },
    result: "Livrable 7 terminé : une narrative annuelle présentée, discutée et ajustée avec la coordination.",
    tip: "Envoyez le document trois jours avant la réunion : un coordinateur qui l'a lu à l'avance arbitre ; un coordinateur qui le découvre en réunion reporte.",
  },

  // ───────────── CAS RÉSOLU ─────────────
  {
    type: 'case-study',
    title: "Cas résolu — Le rapport d'avril : du désordre à l'envoi, jour par jour",
    scenario: "Lundi 27 avril 2026, vous héritez d'un tableau de bord qu'on a cessé de tenir, de trois sources de terrain non synchronisées et de six affirmations non vérifiées. Voici, jour par jour, ce qui a été fait, pourquoi, et ce que cela a produit.",
    steps: [
      {
        title: 'Lundi 27/04 — cadrer et lister les sources',
        actions: [
          "8h10 : briefing noté, 6 affirmations transformées en questions de vérification avec leur source.",
          "9h00 : seuils d'alerte confirmés par J.-M. Ilunga (rupture 10 %, lead time 10 jours, coût +10 %) ; valeurs de mars reprises du rapport précédent.",
          "11h00 : demande à Alphonsine Mbusa de photographier le cahier de Kasika ; demande de l'export de stock MIMOSA à la date d'arrêté du 30/04.",
        ],
        result: "Sources identifiées : 3 flux de terrain, 2 exports de système, 1 rapport précédent.",
      },
      {
        title: 'Mardi 28/04 — récupérer les données de terrain',
        actions: [
          "Exports Kobo : Bweza 7 soumissions, Mubimbi 6 (dont 1 en attente d'envoi, relancée et reçue à 11h).",
          "Cahier de Kasika : 5 lignes saisies à la main dans l'onglet « Cahier_Kasika » du classeur de consolidation.",
          "Saisie directe de Lukando : 6 lignes dans le template.",
        ],
        result: "24 lignes rassemblées (6 + 7 + 6 + 5).",
      },
      {
        title: 'Mercredi 29/04 — consolider, nettoyer, contrôler',
        actions: [
          "Power Query : 3 requêtes assemblées ; « Bweza␣ » corrigé, 5 dates texte converties, 1 doublon supprimé (25 → 24 lignes).",
          "Contrôle en 7 points : tous validés ; K lue (délai maximum 12 jours, expliqué en J).",
          "Enregistrement ..._v02-controle.xlsx.",
        ],
        result: "Livrables 1 et 2 : données propres et consolidation actualisable.",
      },
      {
        title: 'Jeudi 30/04 — réconcilier avec MIMOSA et LINK',
        actions: [
          "Comptage physique avec le gestionnaire de stock : 48 lignes, 2 écarts (SRO −6 cartons, carburant −1 fût).",
          "Écart SRO tracé jusqu'au bon de sortie du 10/04 (26 cartons partis, 20 saisis) ; écriture d'ajustement signée à 18h.",
          "Contrôle LINK : date de livraison des pièces détachées retenue au 24/04 (bon de livraison).",
        ],
        result: "Livrable 3 : fiche de réconciliation signée, écarts consignés pour la section 4 du rapport.",
      },
      {
        title: 'Lundi 04/05 — lire, interpréter, rédiger, faire valider',
        actions: [
          "7h30 : onglet KPI préparé (contrôle de couverture = 0) ; TCD de vérification concordant ; RECHERCHEX : aucun « Site inconnu ».",
          "10h00 : décisions chiffrées (point de commande SRO de Bweza : 50 → 88 cartons) ; 14h00 : rapport rédigé dans l'ordre sections 2, 3, 4, 5, puis 1.",
          "17h00 : validation par J.-M. Ilunga, avec une remarque : le camion immobilisé 10 jours aurait dû faire l'objet d'un SitRep dès le 3e jour.",
        ],
        result: "Livrables 4 et 5 prêts à l'envoi.",
      },
      {
        title: 'Mardi 05/05 — envoyer à l\'échéance',
        actions: [
          "9h00 : rapport PDF + fichier Excel envoyés au siège, copie à Dr Kahindo.",
          "Archivage dans 03_Rapports/2026-04 ; rappel agenda posé pour le 02/06 (échéance de mai).",
        ],
        result: "Rapport remis dans les délais, avec tendance, seuils et décisions.",
      },
    ],
    pitfall: "Sans méthode, le rapport d'avril aurait été rédigé le 5 mai à 7h avec un taux de rupture de 0 % pour Kasika (cahier jamais saisi), un site « Bweza␣ » en plus et un stock SRO faux de 6 cartons : le siège aurait décidé sur des chiffres faux.",
  },
  {
    type: 'case-study',
    title: "Cas résolu — Le rapport d'avril tel que remis (extrait condensé)",
    scenario: "Rapport logistique mensuel — Avril 2026 — RDC, Nord-Kivu, mission Kemora Santé. Rédigé par : logisticien(ne) terrain, Lukando, le 04/05/2026. Validé par : Jean-Marc Ilunga, coordinateur logistique pays. Envoyé le 05/05/2026.",
    steps: [],
    example: {
      title: 'Les 5 sections telles que remises',
      lines: [
        "1. Résumé exécutif : 24 mouvements sur 4 sites ; 21 livrés, 1 en retard, 2 ruptures. Rupture 8,3 % (mars 5,0 %, seuil 10 %), Bweza à 28,6 %. Lead time 7,4 jours. Coût 1,70 USD. Camion immobilisé 10 jours. Priorité : point de commande SRO de Bweza 50 → 88 cartons.",
        "2. KPI : rupture 8,3 % / 5,0 % / 10 % ; lead time 7,4 / 8,1 / 10 ; coût 1,70 / 1,62 / 1,78. Ventilation : Lukando 0,0 % — 7,0 j — 1,47 ; Bweza 28,6 % — 9,4 j — 1,91 ; Kasika 0,0 % — 6,8 j — 1,70 ; Mubimbi 0,0 % — 6,7 j — 1,83.",
        "3. Incidents : n°1 rupture SRO Bweza 08/04 (SitRep n°1) ; n°2 rupture kits choléra Bweza 18/04 (SitRep n°2) ; n°3 camion 6 t immobilisé 10 jours à Lukando (dédouanement).",
        "4. Flotte : 7 véhicules, 1 camion immobilisé 10 jours, 11 420 km (+15,7 %). Entrepôt : occupation 72 % ; 2 écarts d'inventaire sur 48 lignes (4,2 %), corrigés. Chaîne du froid : 0 rupture ; 1 alarme à Bweza le 15/04 ; thermostat remplacé.",
        "5. Priorités de mai : P1 point de commande SRO de Bweza à 88 cartons (gestionnaire de stock, 08/05) ; P2 suivi des 100 kits choléra promis le 06/05 (logisticien terrain) ; P3 stock de pièces critiques pour les 3 camions (responsable flotte, 15/05).",
      ],
    },
    result: "Un rapport de deux pages, cinq sections, chaque chiffre comparé au mois précédent et au seuil, chaque incident relié à une action, chaque priorité à un responsable et une échéance.",
    tip: "Comparez ce rapport à votre briefing du 27 avril : sur 6 affirmations, 2 étaient incomplètes (la rupture de SRO avait duré 5 jours, le camion 10 jours) et 1 écart de stock était invisible. C'est la valeur ajoutée de votre méthode.",
  },
  {
    type: 'case-study',
    title: 'Cas Maiduguri (Nigeria) — la matière brute du mois d\'août 2026',
    scenario: "Vous coordonnez la logistique d'une ONG internationale sur quatre sites autour de Maiduguri, État de Borno : Maiduguri Centre, Maiduguri Nord, Bama et Konduga. Vous devez produire sous 5 jours le rapport logistique d'août (échéance : 05/09/2026), mais personne n'a tenu le tableau de bord. Vous récupérez en vrac : l'export du registre de livraisons du magasin central (16 lignes, deux formats de date, « Maiduguri Nord » écrit de trois façons), le carnet papier photographié du gérant de Konduga (10 lignes, dont 2 ruptures d'intrants nutritionnels jamais saisies), un message du chauffeur indiquant que le camion n°3 est resté immobilisé 9 jours (du 19 au 28/08) sans fiche d'incident, et le coût logistique total du mois transmis par la finance : 52 400 USD, non ventilé par site ni par ligne. Chiffres de juillet : rupture 4,0 % ; lead time 7,2 jours ; coût par bénéficiaire 1,85 USD. Seuils : rupture 10 % ; lead time 10 jours ; coût +10 %.",
    steps: [],
    table: {
      columns: ['Source', 'Commande', 'Livraison', 'Site (tel que saisi)', 'Article', 'Qté cmd / livrée', 'Statut', 'Bénéf.'],
      rows: [
        ['Registre', '03/08/2026', '09/08/2026', 'Maiduguri Centre', 'Kits médicaux', '200 / 200', 'Livré', '1 800'],
        ['Registre', '05/08/2026', '11/08/2026', 'Maiduguri Centre', 'Kits WASH', '120 / 120', 'Livré', '900'],
        ['Registre', '2026-08-10', '2026-08-17', 'Maiduguri Centre', 'Bâches plastiques', '300 / 300', 'Livré', '1 500'],
        ['Registre', '2026-08-14', '2026-08-20', 'Maiduguri Centre', 'Carburant (fûts)', '30 / 30', 'Livré', '2 200'],
        ['Registre', '19/08/2026', '26/08/2026', 'Maiduguri Centre', 'Intrants nutritionnels', '250 / 250', 'Livré', '2 100'],
        ['Registre', '02/08/2026', '08/08/2026', 'Maiduguri Nord', 'Kits médicaux', '150 / 150', 'Livré', '1 300'],
        ['Registre', '04/08/2026', '11/08/2026', 'MAIDUGURI Nord', 'Intrants nutritionnels', '200 / 200', 'Livré', '1 700'],
        ['Registre', '2026-08-08', '2026-08-15', 'Maidug. Nord', 'Bâches plastiques', '180 / 180', 'Livré', '900'],
        ['Registre', '12/08/2026', '18/08/2026', 'Maiduguri Nord', 'Kits WASH', '90 / 90', 'livre', '700'],
        ['Registre', '17/08/2026', '28/08/2026', 'MAIDUGURI Nord', 'Pièces détachées véhicule', '6 / 6', 'Retard', '0'],
        ['Registre', '21/08/2026', '27/08/2026', 'Maidug. Nord', 'Carburant (fûts)', '20 / 20', 'Livré', '1 400'],
        ['Registre', '03/08/2026', '10/08/2026', 'Bama', 'Kits médicaux', '160 / 160', 'Livré', '1 400'],
        ['Registre', '07/08/2026', '14/08/2026', 'Bama', 'Intrants nutritionnels', '220 / 220', 'Livré', '1 800'],
        ['Registre', '2026-08-11', '2026-08-19', 'Bama', 'Bâches plastiques', '250 / 250', 'Livré', '1 250'],
        ['Registre', '16/08/2026', '22/08/2026', 'Bama␣ (espace final)', 'Kits WASH', '100 / 100', 'Livré', '800'],
        ['Registre', '24/08/2026', '30/08/2026', 'Bama', 'Carburant (fûts)', '25 / 25', 'Livré', '1 900'],
        ['Carnet', '02/08', '08/08', 'Konduga', 'Kits médicaux', '100 / 100', 'Livré', '900'],
        ['Carnet', '04/08', '11/08', 'Konduga', 'Kits WASH', '80 / 80', 'Livré', '600'],
        ['Carnet', '06/08', '(vide)', 'Konduga', 'Intrants nutritionnels', '120 / 0', 'Rupture', '0'],
        ['Carnet', '09/08', '16/08', 'Konduga', 'Bâches plastiques', '140 / 140', 'Livré', '700'],
        ['Carnet', '13/08', '19/08', 'Konduga', 'Carburant (fûts)', '15 / 15', 'Livré', '1 100'],
        ['Carnet', '15/08', '22/08', 'Konduga', 'Kits médicaux', '90 / 90', 'Livré', '800'],
        ['Carnet', '18/08', '(vide)', 'Konduga', 'Intrants nutritionnels', '110 / 0', 'Rupture', '0'],
        ['Carnet', '20/08', '26/08', 'Konduga', 'Kits WASH', '60 / 60', 'Livré', '450'],
        ['Carnet', '23/08', '29/08', 'Konduga', 'Bâches plastiques', '100 / 100', 'Livré', '500'],
        ['Carnet', '25/08', '31/08', 'Konduga', 'Kits médicaux', '80 / 80', 'Livré', '700'],
      ],
    },
    result: "Cette matière brute est celle des Exercices 1 à 4 : 26 mouvements à saisir, 3 problèmes de saisie, 2 ruptures cachées dans un carnet, 1 incident non consigné, 1 coût non ventilé.",
    tip: "Avant de saisir, lisez la matière en cherchant ce qui ne colle pas : trois écritures du même site, deux formats de date, un statut en minuscules, une espace finale. Dressez la liste avant de corriger.",
  },

  // ───────────── EXERCICES ─────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Maiduguri : saisir, contrôler et lire le tableau de bord',
    instructions: "À partir de la matière brute du cas Maiduguri (diapositive précédente), refaites seul(e) les Procédures 1 et 4 dans le template tableau-de-bord-kpi-logistique.xlsx.",
    steps: [
      { title: 'Préparez le template', actions: ["Ouvrez une copie du template, videz A4:J28 sans supprimer de lignes et renommez-la 2026-09-01_Tableau-de-bord-KPI_Maiduguri_2026-08.xlsx.", "Posez les listes déroulantes : 4 sites (Maiduguri Centre, Maiduguri Nord, Bama, Konduga), 3 statuts, 6 articles."] },
      { title: 'Standardisez et saisissez', actions: ["Saisissez les 26 lignes avec un seul libellé par site, des vraies dates JJ/MM/AAAA (année 2026 pour le carnet) et un statut parmi Livré, Rupture, Retard.", "Laissez B vide pour les deux ruptures ; laissez H (coût) vide : la finance ne l'a pas ventilé ; saisissez I (bénéficiaires) de chaque ligne."] },
      { title: 'Contrôlez en 7 points', actions: ["Appliquez les 7 points de la Procédure 1, étape 6 ; notez pour chacun le résultat et les corrections apportées."] },
      { title: "Préparez l'onglet KPI", actions: ["Remplacez le titre par AOÛT 2026 et les sites A9:A12 par vos 4 sites ; supprimez la note A14 ; ajoutez la cellule de contrôle de couverture (résultat attendu : 0)."] },
      { title: 'Lisez et interprétez', actions: ["Relevez A5, C5, E5 et le récapitulatif par site ; identifiez le site qui tire le taux de rupture vers le haut et proposez en une phrase l'action corrective (point de commande).", "Constatez la valeur de E5 : que vaut-elle et pourquoi ne faut-il pas la publier ?"] },
      { title: 'Rédigez la note « à confirmer »', actions: ["Listez à part les informations à confirmer avant diffusion (coût non ventilé, date d'immobilisation du camion, cahier de Konduga) avec l'interlocuteur et l'échéance."] },
    ],
    example: {
      title: 'Exemple de ligne de la note « à confirmer »',
      lines: [
        "« Coût logistique d'août (52 400 USD) non ventilé par site — à demander à la finance, avant le 03/09. En attendant : coût par bénéficiaire global indiqué (52 400 ÷ 27 400 = 1,91 USD) avec la mention « non ventilé par site », jamais le chiffre E5. »",
      ],
    },
    tip: "Pour savoir si le carnet de Konduga compte vraiment, calculez le taux de rupture sans les 10 lignes du carnet, puis avec. L'écart est la valeur de votre travail de reconstitution.",
    pitfall: "Supprimer du template les lignes Konduga au motif qu'elles viennent d'un carnet « non officiel » : vous publieriez 0 % de rupture alors que 2 ruptures d'intrants nutritionnels ont eu lieu.",
    deliverable: "Le fichier tableau-de-bord-kpi-logistique.xlsx complété (26 lignes, contrôle de couverture à 0), le journal des 7 contrôles et la note listant les informations à confirmer.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable (Exercice 1) est correct si…',
    items: [
      "La feuille « Données brutes » contient exactement 26 lignes ; le site « Maiduguri Nord » n'apparaît que sous un seul libellé et « Bama » n'a pas d'espace final.",
      "Toutes les dates sont de vraies dates (=SOMMEPROD(--ESTTEXTE(A4:B200)) = 0) ; aucun délai négatif ; les deux ruptures ont B vide et F = 0.",
      "Le statut « livre » est corrigé en « Livré » ; seules trois valeurs apparaissent dans la colonne G.",
      "Le taux de rupture global est 7,7 % (2 sur 26) ; Konduga ressort à 20,0 % (2 sur 10) et les trois autres sites à 0,0 %.",
      "Le lead time moyen sur les lignes « Livré » est de 6,5 jours ; avec la ligne « Retard » : 6,7 jours.",
      "Le total des bénéficiaires est de 27 400 et la cellule de contrôle de couverture affiche 0.",
      "E5 affiche 0,00 parce que H est vide : vous ne l'avez pas publié ; vous avez indiqué le coût global 52 400 ÷ 27 400 = 1,91 USD avec la mention « non ventilé ».",
      "La note « à confirmer » nomme pour chaque point un interlocuteur et une échéance.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Maiduguri : rédiger le rapport logistique mensuel d\'août',
    instructions: "À partir des résultats de l'Exercice 1, complétez gabarit-rapport-logistique-mensuel.docx (Procédure 5) pour le mois d'août 2026. Le rapport doit intégrer explicitement : le résumé exécutif, les KPI avec tendance, l'incident du camion immobilisé 9 jours (état de la flotte), les ruptures d'intrants nutritionnels de Konduga (risque à signaler) et vos priorités pour septembre.",
    steps: [
      { title: 'Cartouches', actions: ["Mois : Août 2026 ; Pays et mission : Nigeria, État de Borno, mission de Maiduguri ; Rédigé par : votre nom et fonction ; Date de rédaction : 02/09/2026."] },
      { title: 'Section 2 — KPI', actions: ["Complétez les 3 lignes avec valeur, mois précédent (juillet : 4,0 % ; 7,2 j ; 1,85 USD), seuil et commentaire/action.", "Pour le coût par bénéficiaire, indiquez 1,91 USD, l'écart de +3,2 % par rapport à juillet et la mention « non ventilé par site, à confirmer avec la finance »."] },
      { title: 'Section 2 — Ventilation par site', actions: ["Reportez les 4 sites ; pour la colonne coût, écrivez « non disponible » et expliquez-le ; commentez Konduga (2 ruptures sur 10 lignes, intrants nutritionnels)."] },
      { title: 'Section 3 — Incidents', actions: ["Trois lignes minimum : ruptures d'intrants nutritionnels de Konduga (06/08 et 18/08), camion n°3 immobilisé 9 jours (19 au 28/08), livraison de pièces détachées en 11 jours (statut Retard) à Maiduguri Nord.", "Pour chaque ligne : impact chiffré et action ; précisez si un SitRep aurait dû partir."] },
      { title: 'Section 4 — Flotte, entrepôt, chaîne du froid', actions: ["Renseignez les trois tableaux avec les valeurs que vous avez ; pour toute valeur que vous n'avez pas, écrivez « à confirmer » plutôt que d'inventer."] },
      { title: 'Section 5 et section 1', actions: ["Trois priorités avec responsable et échéance (dont le point de commande des intrants nutritionnels à Konduga).", "Rédigez le résumé exécutif en 5 phrases, en dernier."] },
      { title: 'Finalisez', actions: ["Cartouche final : Validé par, Date d'envoi (échéance 05/09/2026) ; relisez avec la check-list de la Procédure 5, étape 10 ; exportez en PDF."] },
    ],
    deliverable: "gabarit-rapport-logistique-mensuel.docx complété pour août 2026, comparable au rapport de l'exemple d'avril, avec les informations « à confirmer » identifiées.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable (Exercice 2) est correct si…',
    items: [
      "Aucune case « à compléter » ne subsiste ; les cartouches d'identification et de validation sont renseignés.",
      "Chaque KPI porte sa valeur (7,7 % ; 6,5 j ; 1,91 USD), le mois précédent (4,0 % ; 7,2 j ; 1,85 USD), le seuil et une décision.",
      "Le taux de rupture est ventilé : le rapport nomme Konduga (20 %, 2 sur 10) comme le site qui tire la moyenne et propose une action sur le point de commande.",
      "Le coût par site est annoncé « non disponible », et le coût global est présenté avec sa mention « non ventilé, à confirmer ».",
      "Le camion immobilisé 9 jours figure en section 3 et en section 4 avec la même durée, la cause et l'impact chiffré.",
      "Les deux ruptures d'intrants nutritionnels de Konduga figurent comme risque, avec une action et un responsable.",
      "Le résumé exécutif contient les chiffres des tableaux, sans contradiction.",
      "Les trois priorités ont chacune un responsable et une échéance.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Maiduguri : rapport mensuel ou SitRep ? Puis rédiger le SitRep',
    instructions: "Pour chacun des six faits ci-dessous, appliquez le test de la Procédure 6 (étape 1) : indiquez le critère rempli ou « aucun », puis le canal (SitRep immédiat ou rapport mensuel). Rédigez ensuite le SitRep qui aurait dû partir pour le fait A.",
    steps: [
      { title: 'Fait A', body: "Le camion n°3 est immobilisé depuis le 19/08 ; à la date du 21/08 (3e jour), les pièces ne sont pas arrivées. Konduga et Maiduguri Nord sont desservis par 3 camions au lieu de 4." },
      { title: 'Fait B', body: "Le 06/08, une commande de 120 unités d'intrants nutritionnels n'est pas livrée à Konduga : stock du site à 3 jours de couverture pour un lead time moyen de 6,4 jours." },
      { title: 'Fait C', body: "Le taux de rupture mensuel de 7,7 % est supérieur à celui de juillet (4,0 %) mais inférieur au seuil de 10 %." },
      { title: 'Fait D', body: "Le contrôle qualité a retenu 3 jours un lot de kits médicaux à Maiduguri Centre ; le lot a ensuite été livré sans écart." },
      { title: 'Fait E', body: "Le 24/08, des tirs sont entendus près de l'entrepôt de Bama ; le gardien met le personnel à l'abri, aucun blessé, convoi du lendemain en attente." },
      { title: 'Fait F', body: "La finance transmet le 01/09 le coût logistique total d'août, sans ventilation par site." },
    ],
    example: {
      title: 'Format de réponse attendu (fait déjà traité dans le module)',
      lines: [
        "Rupture de kits choléra à Bweza, 19/04 — critère « article vital » : 4 jours de couverture pour un délai de 9 jours — canal : SitRep n°2 le 19/04 à 07h30, décision attendue avant 14h00.",
      ],
    },
    tip: "Pour le SitRep, convertissez le stock en jours de couverture, mettez la décision attendue et son heure limite dans l'objet, et indiquez la date de la prochaine mise à jour.",
    pitfall: "Classer le fait E « à mentionner dans le rapport mensuel » : un incident de sécurité qui touche un entrepôt se signale dans l'heure, pas à l'échéance du mois.",
    deliverable: "Un tableau de 6 lignes (fait, critère, canal, date d'envoi) et un SitRep n°1 complet, en cinq blocs, pour le fait A.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable (Exercice 3) est correct si…',
    items: [
      "Les faits A, B et E sont classés « SitRep immédiat » (critères respectifs : véhicule bloqué plus de 48 h, article vital sous son lead time, incident de sécurité) ; C, D et F vont au rapport mensuel.",
      "Pour le fait B, la couverture est mise en regard du lead time (3 jours de couverture contre 6,4 jours de délai) : la couverture est inférieure au délai, le critère « article vital » est rempli.",
      "Le SitRep du fait A porte un numéro, une date et une heure avec fuseau, son auteur et ses destinataires.",
      "L'objet du SitRep contient la décision attendue et son heure limite ; les cinq blocs sont dans l'ordre (situation, impact, actions prises, décision attendue, prochaine mise à jour).",
      "Le SitRep chiffre l'impact : 3 camions au lieu de 4, soit −25 % de capacité de transport, et la conséquence sur Konduga et Maiduguri Nord.",
      "Le SitRep tient sur une page et peut se lire en moins de deux minutes.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Maiduguri : la narrative annuelle (sections 1, 3 et 5)',
    instructions: "Vous préparez en décembre 2026 la narrative de planification annuelle pour 2027 avec gabarit-narrative-planification-annuelle-logistique.docx (Procédure 7). À partir de ce que le cas de Maiduguri vous a appris, complétez les sections 1, 3 et 5.",
    steps: [
      { title: 'Section 1 — Contexte externe et risques', actions: ["Rédigez le paragraphe de contexte (accès, transporteurs) avec au moins 2 chiffres, et 3 risques avec signal d'alerte (dont le vieillissement du parc, illustré par l'immobilisation de 9 jours).", "Ajoutez un risque lié à la fiabilité des données de terrain (carnet papier non saisi)."] },
      { title: 'Section 3 — Objectifs 2027', actions: ["Formulez 3 objectifs mesurables avec indicateur, valeur de départ, cible et échéance : ruptures d'intrants nutritionnels à Konduga (20 % en août), saisie des mouvements sous 48 h (passage du carnet papier à un formulaire Kobo), stock de pièces critiques pour éviter une immobilisation de plus de 3 jours.", "Précisez la méthode, les jalons et le lien avec un objectif du programme."] },
      { title: 'Section 5 — Chronogramme', actions: ["Remplissez au moins 5 lignes (période, jalon, responsable nommé), réparties sur l'année ; incluez la formation Kobo des gérants et la révision technique de la flotte."] },
      { title: 'Relecture', actions: ["Vérifiez qu'aucun texte d'aide « Ex. : » ne subsiste et que chaque jalon est relié à un objectif."] },
    ],
    deliverable: "Les sections 1, 3 et 5 de la narrative de planification complétées : contexte chiffré, trois objectifs mesurables avec jalons, chronogramme de 5 lignes ou plus.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable (Exercice 4) est correct si…',
    items: [
      "Le contexte externe contient au moins deux chiffres (km, tonnage, durée de coupure, nombre de transporteurs) et nomme le risque d'immobilisation d'un véhicule.",
      "Chaque risque a un signal d'alerte observable, pas seulement une description.",
      "Les trois objectifs ont chacun un indicateur, une valeur de départ (par exemple 20 % à Konduga), une cible et une échéance datée.",
      "Chaque objectif est relié à un objectif du programme (continuité de la nutrition, disponibilité des intrants).",
      "Le chronogramme compte au moins 5 jalons répartis sur l'année, chacun avec un responsable nommé, sans plus de deux jalons par trimestre.",
      "Aucun texte d'aide du gabarit ne subsiste.",
    ],
  },

  // ───────────── ERREURS FRÉQUENTES ─────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Publier un KPI sans point de comparaison — un taux de rupture de 8 % ne veut rien dire seul. Parade : toujours le mois précédent, le seuil d'alerte et une décision (Procédure 4, étape 6).",
      "Laisser la saisie incohérente polluer les agrégats — trois orthographes du même site, un espace final, une date en texte : aucun message d'erreur. Parade : listes déroulantes, contrôle en 7 points, TCD de vérification.",
      "Attendre la fin du mois pour tout compiler — reconstituer un mois de mémoire génère des oublis et des doublons. Parade : Kobo sur site, saisie au fil de l'eau, rappel d'agenda.",
      "Noyer un incident critique dans le rapport mensuel — un camion immobilisé 10 jours ou une rupture d'article vital méritaient un SitRep immédiat. Parade : les 5 critères de la Procédure 6.",
      "Publier un coût par bénéficiaire agrégé ou partiel — E5 affiche 0,00 quand H est vide, et un chiffre non ventilé induit le siège en erreur. Parade : H renseignée partout ou nulle part, contexte d'accès via RECHERCHEX.",
      "Oublier ce que la formule compte vraiment — le lead time du template exclut les lignes « Retard » ; le dénominateur du taux de rupture compte les fautes de statut. Parade : Procédure 4, étape 2.",
      "Ne pas comparer le tableau au système — un stock MIMOSA ou LINK qui diverge d'un tableau local sans réconciliation. Parade : comptage physique mensuel et écriture d'ajustement signée.",
      "Concentrer la moyenne : citer « 28,6 % » sans « 2 sur 7 » ou conclure sur un site de 5 lignes comme sur un site de 40. Parade : toujours la fraction à côté du pourcentage.",
      "Rédiger un SitRep long, sans heure ni décision — il a raté sa cible. Parade : cinq blocs, une page, décision et heure limite dans l'objet.",
      "Partager le fichier avec des contacts nominatifs ou des données de bénéficiaires sur un groupe ouvert. Parade : diffusion interne uniquement, PDF pour le siège.",
    ],
  },

  // ───────────── RÉCAPITULATIF ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez alimenté et standardisé la feuille « Données brutes » du template : listes déroulantes, vraies dates, statuts à trois valeurs, contrôle qualité en 7 points.",
      "Vous avez conçu un formulaire Kobo, collecté hors connexion et consolidé trois sources avec Power Query, avec nettoyage actualisable chaque mois.",
      "Vous avez réconcilié le stock physique et le stock du système (MIMOSA, LINK), expliqué chaque écart et corrigé par une écriture signée.",
      "Vous avez lu et vérifié les trois KPI par recalcul (TCD), qualifié le contexte d'accès avec RECHERCHEX, et chiffré une décision par KPI, dont un point de commande.",
      "Vous avez rédigé un rapport logistique mensuel complet avec le gabarit : KPI comparés, incidents, flotte, entrepôt, chaîne du froid, priorités, validé et envoyé à l'échéance.",
      "Vous avez décidé entre rapport mensuel et SitRep et rédigé un SitRep numéroté, horodaté, avec décision attendue.",
      "Vous avez construit la narrative de planification annuelle : bilan chiffré, objectifs mesurables, besoins RH, chronogramme.",
      "Vous avez refait seul(e) le travail sur le cas de Maiduguri, avec une note des informations à confirmer.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de terminer la formation',
    items: [
      "Je sais expliquer, pour chacun des trois KPI, la décision opérationnelle qu'il doit déclencher.",
      "Je sais distinguer un rapport mensuel d'un SitRep et appliquer les 5 critères de déclenchement.",
      "Je sais situer MIMOSA et LINK par rapport à mon tableau Excel, et réconcilier les deux sans double saisie.",
      "J'ai construit un tableau de bord KPI fiable avec le template, à partir de données brutes désordonnées.",
      "Je sais identifier une incohérence de saisie susceptible de fausser un TCD, une requête Power Query ou une formule du template.",
      "J'ai rédigé un rapport logistique mensuel complet avec le gabarit, incluant KPI, incidents, flotte et priorités.",
      "Je sais rédiger un SitRep lisible en moins de deux minutes, avec la décision attendue et son heure limite.",
      "Je sais construire une narrative annuelle avec objectifs mesurables, besoins RH et chronogramme.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Vous avez terminé les 8 modules de la formation en Logistique Humanitaire, des fondamentaux de la coordination jusqu'au reporting au siège. Le Module 01 vous présentait le logisticien comme le garant de la faisabilité : le tableau de bord fiable, le rapport clair et le SitRep précis que vous savez désormais produire sont le prolongement direct de ce rôle, mission après mission. Votre attestation de formation « Logistique Humanitaire », délivrée par BK-BOOST Ltd., sanctionne les huit modules parcourus.",
  },
]
