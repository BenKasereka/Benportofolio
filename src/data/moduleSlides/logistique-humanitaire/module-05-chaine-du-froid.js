// Module 05 — Chaîne du Froid & Produits Médicaux
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates) : théorie strictement utile à
// l'action, puis sept procédures découpées en étapes (une diapositive par
// étape), appliquées à un cas fil rouge (ONG Kemora Santé, centre de santé de
// Kasika, zone de Lukando, Nord-Kivu — cas fictif, même organisation que le
// Module 01), cas résolus, exercices corrigeables (dont le cas de Rutshuru) et
// check-lists d'auto-contrôle.
export default [
  {
    type: 'cover',
    title: 'Chaîne du Froid & Produits Médicaux',
    hook: "En fin de module, vous aurez équipé et surveillé une unité de froid, tenu un registre de températures qui signale seul chaque écart, lu l'historique complet d'un data logger, préparé un transport sous température dirigée et rédigé, avec une décision motivée, la procédure de rupture de chaîne du froid d'un lot de vaccins — exactement ce qu'un logisticien de terrain doit pouvoir produire seul, un week-end, sans expert au téléphone.",
  },
  {
    type: 'objectives',
    items: [
      "Équiper une unité de froid d'un data logger contrôlé (calibration, pile, seuils, heure) et le positionner correctement, en produisant une fiche d'unité complétée et un plan de continuité en cas de coupure.",
      "Tenir registre-suivi-chaine-du-froid.xlsx deux fois par jour, 7 jours sur 7, colonne par colonne, en produisant un registre où chaque relevé hors plage 2-8°C est signalé et chaque relevé manquant est tracé et expliqué.",
      "Réagir à un relevé hors plage dans l'heure (sécurisation, alerte WhatsApp avec photo, isolement et étiquetage des produits), en produisant un message d'alerte envoyé et un lot placé en quarantaine préventive.",
      "Exploiter l'historique complet d'un data logger pour établir le début, la fin, la durée, la température minimale et maximale d'une excursion, en produisant une fiche de lecture rapprochée du registre.",
      "Rédiger procedure-rupture-chaine-froid.docx section par section avec une décision (utilisable, quarantaine ou destruction) justifiée par des faits, en produisant une procédure de deux pages au maximum.",
      "Exploiter l'onglet Synthèse mensuelle pour repérer une unité défaillante, en produisant un message de signalement à la coordination logistique avec une action corrective datée.",
      "Préparer un transport sous température dirigée (autonomie, accumulateurs conditionnés, data logger dans la glacière), en produisant un plan de chargement et deux check-lists de départ et de réception.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne vous demande pas de réciter un référentiel : il vous fait produire, dans l'ordre réel d'une prise en charge de point de stockage, les livrables d'un logisticien responsable de la chaîne du froid. Chaque livrable est construit étape par étape sur un cas fil rouge, puis vous refaites seul(e) le cas de Rutshuru, une coupure d'électricité de deux jours.",
    ],
    bullets: [
      "Livrable 1 — Une fiche d'unité et un data logger contrôlé, positionné, avec son plan de continuité en cas de coupure.",
      "Livrable 2 — Le registre-suivi-chaine-du-froid.xlsx ouvert, renommé et tenu deux fois par jour, avec ses statuts automatiques et ses observations.",
      "Livrable 3 — Un message d'alerte WhatsApp et des produits isolés, étiquetés, listés (quarantaine préventive).",
      "Livrable 4 — Une fiche de lecture de l'historique du data logger : début, fin, durée, minimum, maximum, rapprochée du registre.",
      "Livrable 5 — La procedure-rupture-chaine-froid.docx complétée, avec décision motivée, en deux pages au maximum.",
      "Livrable 6 — La lecture de la Synthèse mensuelle et un signalement d'unité défaillante à la coordination logistique.",
      "Livrable 7 — Un plan de transport sous température dirigée avec check-lists de départ et de réception.",
    ],
    example: {
      title: 'Le cas fil rouge de ce module (fictif mais réaliste)',
      lines: [
        "Organisation : Kemora Santé, ONG médicale internationale fictive (déjà rencontrée au Module 01). Vous êtes son logisticien(ne) terrain, responsable de la chaîne du froid de la réponse de Lukando (Nord-Kivu, RDC).",
        "Contexte : environ 38 000 personnes déplacées sur 3 sites (Kasika, Mubimbi, Bweza) ; Kemora Santé et le BCZ de Lukando lancent une vaccination de rattrapage des enfants (rougeole, Penta) à partir du jeudi 19 mars 2026.",
        "Vos unités de froid : un réfrigérateur à vaccins au centre de santé de Kasika, un autre à Mubimbi, une chambre froide à l'entrepôt de Goma (stock régional), et les glacières du convoi Goma–Lukando (142 km dont 94 km de piste).",
        "Vos interlocuteurs (fictifs) : Dr Clarisse Kahindo, coordinatrice de projet à Lukando ; Jean-Marc Ilunga, coordinateur logistique pays à Goma ; Dr Joëlle Kavira, pharmacienne référente Kemora Santé ; Léonie Mbusa, infirmière titulaire du centre de santé de Kasika ; Prosper Katembo, agent de santé chargé des relevés ; Faustin Mumbere, technicien froid et groupes électrogènes.",
        "Calendrier : installation mardi 17 mars, premiers vaccins jeudi 19, excursion détectée samedi 21 à 14h10, synthèse lundi 23 mars.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Votre point de départ : une unité de froid livrée sans mode d'emploi",
    body: [
      "Mardi 17 mars à 8h00, le réfrigérateur à vaccins destiné à Kasika vient d'arriver de Goma sur un camion. Dr Kahindo vous dit en quelques phrases ce qu'elle sait : tout est oral, rien n'est vérifié — c'est la situation normale d'une prise de poste en urgence.",
    ],
    example: {
      title: 'Ce que vous avez noté dans votre carnet (17 mars, 8h10)',
      lines: [
        "« Le réfrigérateur est neuf, il a été testé à Goma, il devrait marcher tout de suite. »",
        "« Il y a un data logger dans le carton, je crois qu'il est réglé. »",
        "« Le groupe électrogène du centre a du carburant pour la semaine. »",
        "« Les vaccins arrivent jeudi par le convoi de Goma, Prosper fera les relevés. »",
        "« Le week-end, il n'y a personne au centre de santé à part le gardien. »",
      ],
    },
    tip: "Recopiez chaque affirmation du briefing avec l'heure et le nom de la personne. Dans ce module, vous allez vérifier chacune d'elles : le data logger est-il réglé ? Qui relève la température le samedi ? Que se passe-t-il si le groupe s'arrête ?",
  },
  {
    type: 'stat-callout',
    stat: '2 °C – 8 °C',
    caption: "La plage de conservation de la majorité des vaccins du PEV (rougeole, DTC, polio injectable), du site de production jusqu'à l'injection.",
    context: "Au-dessus comme au-dessous, la perte d'efficacité est invisible à l'œil nu : seuls des relevés fiables, datés et conservés permettent de décider.",
  },
  {
    type: 'concept',
    title: 'GDP et GSP : ce que ça veut dire pour un logisticien de terrain',
    body: [
      "GDP (Good Distribution Practices) et GSP (Good Storage Practices) sont des référentiels nés dans l'industrie pharmaceutique, pensés pour des entrepôts climatisés et des camions réfrigérés urbains. Sur le terrain humanitaire, les appliquer à la lettre est souvent impossible : ce qui compte est de comprendre ce qu'ils protègent et de recréer leurs garanties avec les moyens du bord.",
      "GSP concerne le stockage : température maîtrisée en continu, accès restreint, séparation physique des produits (jamais de nourriture, de boissons ou d'échantillons biologiques avec les vaccins), traçabilité de chaque lot entrant et sortant. GDP concerne le mouvement : chaque transport d'un point A à un point B préserve les mêmes conditions, avec une preuve documentée.",
    ],
    highlight: "Un vaccin qui a passé six heures à 12°C pendant le transport, même s'il termine sa route dans un réfrigérateur parfaitement calibré, peut déjà être inutilisable — et rien à l'œil nu ne le montre.",
    example: {
      title: 'Fil rouge — recréer les garanties avec les moyens du bord',
      lines: [
        "GSP à Kasika : pas de chambre climatisée, donc un réfrigérateur à vaccins dédié, une porte fermée à clé, un cadenas confié à l'infirmière titulaire, un registre à deux relevés par jour.",
        "GDP sur la piste Goma–Lukando : pas de camion réfrigéré, donc une glacière à accumulateurs de froid et un data logger placé dans la caisse, dont l'historique est lu à l'arrivée.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'GSP et GDP côte à côte : ce que chacune protège et la preuve à conserver',
    columns: ['Référentiel', 'Ce qu\'il protège', 'Ce que vous faites sur le terrain', 'Preuve à conserver'],
    rows: [
      ['GSP — stockage', "Le produit pendant qu'il attend dans un site fixe (entrepôt, centre de santé).", "Réfrigérateur ou chambre dédiés, accès restreint, produits séparés, rangement par lot, deux relevés par jour.", "Registre quotidien, historique du data logger, fiches de stock par lot."],
      ['GDP — distribution', "Le produit pendant qu'il se déplace d'un point A à un point B.", "Glacière dimensionnée et conditionnée, data logger dans la caisse, chargement documenté, remise contre signature.", "Historique du data logger du trajet, check-list de départ et de réception, bordereau signé."],
    ],
  },
  {
    type: 'concept',
    title: "La règle des 2-8°C : pourquoi la congélation est aussi grave que la chaleur",
    body: [
      "La majorité des vaccins du PEV doivent rester entre +2°C et +8°C, du site de production jusqu'à l'injection. Certains produits plus spécifiques (certains vaccins Ebola) exigent une chaîne du froid négative, parfois jusqu'à -60/-80°C : vous devez savoir les reconnaître à la réception d'un lot pour ne pas les traiter comme un vaccin classique.",
      "En dessous de 2°C, le risque est la congélation : elle détruit de façon irréversible de nombreux vaccins, en particulier le DTC et tous les vaccins à adjuvant aluminium, sans que le flacon change d'aspect. Au-dessus de 8°C, chaque heure d'excursion réduit l'efficacité du produit, sans signe visible non plus.",
    ],
    highlight: "Piège classique : placer les flacons contre la paroi arrière ou près de l'évaporateur « pour qu'ils soient bien au frais ». C'est la cause la plus fréquente de congélation accidentelle documentée dans les évaluations post-mission.",
    tip: "Au déballage d'un lot, lisez l'étiquette : si elle indique une conservation à -20°C ou en dessous, arrêtez-vous, isolez le lot et appelez la pharmacienne référente avant de le ranger quelque part.",
  },
  {
    type: 'comparison-table',
    title: 'Chaleur ou gel : deux risques, deux signaux, deux réflexes',
    columns: ['Critère', 'Au-dessus de 8°C (chaleur)', 'Au-dessous de 2°C (congélation)'],
    rows: [
      ['Effet sur le produit', "Perte d'efficacité progressive et cumulative, proportionnelle à la durée et à la température atteinte.", "Destruction irréversible de nombreux produits (DTC, adjuvant aluminium) dès que le produit gèle."],
      ['Visible à l\'œil nu ?', 'Non.', 'Non : le flacon a l\'air normal (un test d\'agitation peut révéler un produit à adjuvant gelé).'],
      ['Ce qui le signale', "Le VVM (indicateur de chaleur cumulée), le data logger, le registre.", "Le data logger et le registre uniquement : le VVM ne réagit pas au froid."],
      ['Causes fréquentes', "Coupure d'électricité, porte mal fermée, glacière sans accumulateurs, soleil, panne de compresseur.", "Flacons contre la paroi arrière ou l'évaporateur, accumulateurs non conditionnés, thermostat trop froid."],
      ['Premier réflexe', "Isoler, étiqueter, lire l'historique, consulter le VVM de chaque flacon.", "Isoler, étiqueter, ne pas utiliser avant un test d'agitation ou un avis du référent."],
    ],
  },
  {
    type: 'concept',
    title: 'Le VVM : votre premier réflexe de vérification',
    body: [
      "Le VVM (Vaccine Vial Monitor) est un petit indicateur circulaire imprimé sur l'étiquette ou le bouchon de nombreux flacons. Il change de couleur de façon irréversible et cumulative avec l'exposition à la chaleur. Il ne donne pas de température : il rend un verdict visuel simple, que vous appliquez flacon par flacon, avant même d'ouvrir un registre.",
      "Règle de lecture : tant que le carré intérieur reste plus clair que le cercle qui l'entoure, le vaccin est utilisable ; dès que le carré devient aussi foncé ou plus foncé que le cercle, il ne doit plus être utilisé, quelle que soit la date de péremption imprimée. Le VVM ne réagit qu'à la chaleur : un VVM « bon » ne prouve jamais qu'il n'y a pas eu congélation.",
    ],
    table: {
      columns: ['Stade', 'Aspect du carré', 'Décision'],
      rows: [
        ['1', 'Nettement plus clair que le cercle', 'Utilisable'],
        ['2', 'Plus foncé qu\'au stade 1 mais encore plus clair que le cercle', 'Utilisable ; à utiliser en priorité'],
        ['3', 'Aussi foncé que le cercle', 'Point de rejet : ne plus utiliser'],
        ['4', 'Plus foncé que le cercle', 'Ne plus utiliser'],
      ],
    },
    pitfall: "Se fier à la date de péremption quand le VVM a viré : un flacon non périmé dont le VVM a atteint le point de rejet reste un flacon à ne pas utiliser. Le VVM prime toujours sur la date imprimée.",
    tip: "Il existe plusieurs types de VVM (VVM30, VVM14, VVM7, VVM2) selon la sensibilité du produit à la chaleur ; le type figure sur le flacon. La règle de lecture, elle, est la même.",
  },
  {
    type: 'concept',
    title: 'Le data logger : la donnée chiffrée qui permet une décision objective',
    body: [
      "Le data logger (Fridge-tag, LogTag et équivalents) est un petit boîtier électronique placé dans le réfrigérateur, la glacière ou le carton de transport. Il enregistre la température en continu, affiche une alerte simple (pictogramme, voyant rouge) en cas de sortie de plage et conserve un historique téléchargeable.",
      "Contrairement au VVM, il fournit une donnée chiffrée et datée : « sorti de plage le 14 mars entre 14h et 17h, température maximale 15°C ». C'est cette donnée, et elle seule, qui permet une évaluation objective de l'impact d'une rupture — pas le souvenir approximatif de l'agent présent ce jour-là.",
    ],
    highlight: "Un data logger qui n'a déclenché aucune alerte ne dispense pas de vérifier son historique complet : une alerte mal configurée, une pile faible ou un appareil mal positionné peuvent masquer une excursion pourtant bien réelle.",
    example: {
      title: 'Fil rouge — pourquoi « pas d\'alerte » ne veut pas dire « pas d\'excursion »',
      lines: [
        "Le Fridge-tag de Kasika est réglé pour alerter après 10 h consécutives au-dessus de 8°C.",
        "Samedi 21 mars, une excursion de 3 h 00 à 9,4°C ne déclenche aucune alerte sur l'appareil — mais le relevé de 14h10 (8,6°C) la signale dans le registre. C'est le registre et l'historique qui ont fait le travail.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Quatre outils de preuve : ce que chacun dit et ce qu\'il ne dit pas',
    columns: ['Outil', 'Ce qu\'il vous apprend', 'Sa limite', 'Quand l\'utiliser'],
    rows: [
      ['VVM', "La chaleur cumulée subie par CE flacon : verdict visuel immédiat.", "Aucune température, aucune date, aucune information sur le gel.", "À chaque réception, à chaque ouverture de boîte, après toute excursion (100 % des flacons)."],
      ['Data logger', "La courbe complète : début, fin, durée, minimum, maximum.", "Une pile faible, un mauvais positionnement ou une alerte mal réglée faussent la lecture.", "En continu ; historique téléchargé après toute alerte ou excursion suspectée."],
      ['Registre (xlsx)', "Deux photographies par jour, avec statut automatique OK / HORS PLAGE.", "Ne voit pas ce qui se passe entre deux relevés : jamais la durée réelle.", "Deux fois par jour, 7 jours sur 7."],
      ['WhatsApp « Alertes chaîne du froid »', "La réaction en temps réel : photo + relevé chiffré.", "Ne remplace jamais le registre écrit ; non archivé de façon fiable.", "Dès qu'un relevé est hors plage, avant même la mise à jour du registre."],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les équipements de froid du terrain et leur bon usage',
    columns: ['Équipement', 'Usage', 'Point d\'attention', 'Preuve de température'],
    rows: [
      ['Réfrigérateur à vaccins (idéalement qualifié PQS par l\'OMS)', 'Stockage dans un centre de santé ou un petit entrepôt.', "Circulation d'air conçue pour éviter le point froid ; relever son autonomie hors tension (holdover) sur la plaque ou la fiche.", 'Data logger au centre + 2 relevés par jour.'],
      ['Réfrigérateur domestique', "Dépannage uniquement, documenté.", "Point froid derrière et près de l'évaporateur : jamais de flacons contre la paroi ; produits sensibles au gel au milieu.", 'Data logger obligatoire + relevés.'],
      ['Chambre froide', 'Entrepôt régional, grands volumes.', "Groupe de secours, alarme, accès restreint ; vérifier plusieurs points de mesure.", 'Enregistreur continu + 2 relevés par jour.'],
      ['Glacière (cold box)', 'Transport de plusieurs heures ou jours.', "Autonomie annoncée (cold life) à comparer à la durée du trajet ; accumulateurs de froid conditionnés.", 'Data logger dans la caisse, au centre.'],
      ['Porte-vaccins', 'Séance de vaccination ou court trajet.', "Autonomie courte : couvercle fermé, à l'ombre, ne sortir que les flacons de la séance.", 'Thermomètre ou data logger de poche.'],
      ['Congélateur', 'Fabrication des accumulateurs de froid.', "Ne jamais y stocker de vaccins à conserver entre 2 et 8°C.", 'Sans objet.'],
    ],
  },
  {
    type: 'concept',
    title: 'Qui décide quoi : la règle de décision quand aucun expert n\'est joignable',
    body: [
      "Le logisticien n'est pas le référent médical : il établit les faits (durée, températures, état des VVM), isole les produits et propose une décision écrite. Le référent (pharmacienne, médecin, responsable PEV) valide. Mais un samedi soir, sans réseau, personne ne répond : vous ne pouvez pas décider « à l'oral » ni attendre lundi sans rien faire.",
      "La règle écrite qui vous protège : les produits concernés restent isolés, étiquetés et maintenus entre 2 et 8°C — c'est la quarantaine préventive, qui ne demande l'avis de personne. Vous complétez la procédure de rupture avec les faits, vous demandez l'avis dès que possible, et vous ne basculez en « utilisable » ou « destruction » qu'avec les critères de la procédure et, si possible, l'avis du référent.",
    ],
    bullets: [
      "Destruction obligatoire : VVM au point de rejet, ou produit sensible au gel ayant réellement gelé.",
      "Utilisable : faits complets, VVM tous bons, aucun risque de gel, durée et température compatibles avec la stabilité documentée du produit, avis du référent.",
      "Quarantaine : tout le reste, en particulier toute information manquante (horaires, historique, VVM).",
    ],
    pitfall: "Utiliser « parce que la campagne démarre demain » ou détruire « par précaution » sans analyse. Les deux décisions non documentées exposent le bénéficiaire ou font perdre un lot qui était peut-être bon.",
  },
  {
    type: 'concept',
    title: 'La chaîne complète : où se cachent les ruptures',
    body: [
      "Une chaîne du froid est une succession de maillons : stock central, stock régional, transport, stock de la zone de santé, centre de santé, séance de vaccination. La température doit être maîtrisée et prouvée à chaque maillon et à chaque transfert. Les ruptures se produisent le plus souvent aux transferts (chargement, attente au check-point, déchargement) et pendant les périodes sans personne (nuits, week-ends).",
    ],
    example: {
      title: 'Fil rouge — les maillons de la vaccination à Kasika',
      lines: [
        "1. Chambre froide de l'entrepôt Kemora à Goma (enregistreur continu, relevés 2 fois par jour).",
        "2. Chargement dans la glacière + data logger de voyage, jeudi 19 mars, 6h00.",
        "3. Trajet Goma–Lukando, 142 km dont 94 km de piste ; pont de la Musi franchi un camion à la fois ; check-point de Bweza.",
        "4. Réception au centre de santé de Kasika : lecture du data logger, contrôle des VVM, transfert au réfrigérateur.",
        "5. Séance de vaccination : porte-vaccins avec accumulateurs, seuls les flacons de la séance sont sortis.",
      ],
    },
    tip: "Pour chaque maillon, demandez-vous : qui est responsable de la température à cet instant, et quelle preuve reste-t-il ? Un maillon sans réponse est là où se produira la prochaine rupture.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire opérationnel du module',
    terms: [
      { term: 'Chaîne du froid (cold chain)', definition: "L'ensemble ininterrompu des conditions de température maîtrisées, du fabricant jusqu'à l'administration au bénéficiaire." },
      { term: 'Excursion de température', definition: "Tout écart, même bref, en dehors de la plage de conservation prévue pour un produit donné." },
      { term: 'Rupture de chaîne du froid', definition: "Interruption documentée ou suspectée des conditions de température requises, qui impose une évaluation formelle avant toute décision d'utilisation." },
      { term: 'VVM', definition: "Vaccine Vial Monitor : indicateur visuel cumulatif d'exposition à la chaleur, imprimé directement sur le flacon." },
      { term: 'GDP / GSP', definition: "Good Distribution Practices / Good Storage Practices — référentiels de bonnes pratiques de transport et de stockage des produits médicaux." },
      { term: 'Data logger', definition: "Boîtier qui enregistre la température en continu (Fridge-tag, LogTag) et conserve un historique téléchargeable." },
      { term: 'PEV', definition: "Programme élargi de vaccination : les vaccins de routine (rougeole, DTC, polio injectable, etc.) conservés entre +2°C et +8°C." },
      { term: 'Autonomie hors tension (holdover)', definition: "Durée pendant laquelle un réfrigérateur sans électricité reste dans la plage 2-8°C, porte fermée ; donnée constructeur à relever sur l'appareil." },
      { term: 'Autonomie d\'une glacière (cold life)', definition: "Durée annoncée par le fabricant pendant laquelle une glacière chargée d'accumulateurs conditionnés maintient la plage 2-8°C." },
      { term: 'Accumulateur de froid (icepack)', definition: "Pain de glace en plastique que l'on congèle puis conditionne avant de l'utiliser avec des vaccins, pour éviter de geler les flacons." },
      { term: 'Quarantaine', definition: "Isolement physique et étiquetage de produits suspects, conservés entre 2 et 8°C, en attente d'une décision documentée." },
      { term: 'Test d\'agitation', definition: "Test comparatif avec un flacon témoin volontairement congelé, qui révèle si un vaccin à adjuvant aluminium a gelé." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Votre feuille de route : sept procédures, sept livrables',
    columns: ['Procédure', 'Quand', 'Livrable produit'],
    rows: [
      ['1 — Équiper et qualifier une unité de froid', 'Jour 1, avant de recevoir le moindre produit', "Fiche d'unité, data logger contrôlé et positionné, plan de continuité"],
      ['2 — Tenir le registre de suivi (xlsx)', 'Dès le Jour 1, 2 relevés par jour, 7 jours sur 7', 'registre-suivi-chaine-du-froid.xlsx à jour'],
      ['3 — Réagir à un relevé hors plage', 'Dans l\'heure qui suit la détection', "Message d'alerte envoyé, produits isolés et étiquetés"],
      ['4 — Exploiter l\'historique du data logger', 'Dès que l\'alerte est traitée, avant toute remise en service', "Fiche de lecture : début, fin, durée, min, max"],
      ['5 — Compléter la procédure de rupture (docx)', 'Dès qu\'une excursion est confirmée', 'procedure-rupture-chaine-froid.docx, 2 pages maximum'],
      ['6 — Exploiter la synthèse mensuelle', 'Chaque semaine, et en fin de mois', 'Signalement d\'unité défaillante + action corrective'],
      ['7 — Transporter sous température dirigée', 'Avant chaque mouvement de produits', 'Plan de chargement, check-lists de départ et de réception'],
    ],
  },

  // ───────────── PROCÉDURE 1 — Équiper et qualifier une unité de froid ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Inventorier vos unités de froid et ouvrir une fiche pour chacune',
    intro: "Mardi 17 mars, 8h30. Avant de brancher quoi que ce soit, vous donnez à chaque unité une identité unique. Ce nom sera recopié à l'identique dans le registre : une faute d'orthographe et la synthèse mensuelle ne comptera plus l'unité. Vous avez besoin : de la liste du matériel livré, des plaques signalétiques et de la fiche constructeur.",
    steps: [
      {
        title: 'Listez et nommez chaque unité',
        actions: [
          "Faites le tour du site et listez TOUT ce qui garde du froid : réfrigérateurs, chambre froide, glacières, porte-vaccins, congélateur d'accumulateurs.",
          "Donnez à chaque unité un nom unique au format Type - Lieu (ex. Réfrigérateur PEV - CS Kasika), avec un tiret entouré d'espaces, et écrivez-le une seule fois.",
          "Collez sur l'unité une étiquette portant ce nom exact.",
        ],
      },
      {
        title: "Ouvrez une fiche d'unité",
        actions: [
          "Relevez sur la plaque signalétique : modèle, numéro de série, capacité utile, source d'énergie.",
          "Cherchez dans la fiche constructeur l'autonomie hors tension (holdover) et notez-la ; si elle est absente, écrivez « inconnue » et prévenez Goma.",
          "Désignez un responsable titulaire et un suppléant.",
        ],
      },
    ],
    table: {
      columns: ['Champ de la fiche', 'Valeur — réfrigérateur de Kasika'],
      rows: [
        ["Nom de l'unité (exact)", 'Réfrigérateur PEV - CS Kasika'],
        ['Type et modèle', 'Réfrigérateur à vaccins à compression, 60 L utiles'],
        ['Lieu précis', 'Salle de vaccination, centre de santé de Kasika, à 3 m de toute fenêtre'],
        ['Source d\'énergie', 'Groupe électrogène du centre (carburant livré chaque lundi)'],
        ['Autonomie hors tension annoncée', '10 h, porte fermée (fiche constructeur)'],
        ['Responsable / suppléant', 'Léonie Mbusa, infirmière titulaire / Prosper Katembo'],
        ['N° de série unité / data logger', 'KS-FR-01 / FT-0873 (Fridge-tag)'],
        ['Date de mise en service', '2026-03-17'],
      ],
    },
    result: "Une fiche par unité, un nom unique collé sur l'appareil, une autonomie hors tension connue. Vous savez exactement de combien d'heures vous disposez si le courant s'arrête.",
    pitfall: "Nommer l'unité « frigo Kasika » dans un message et « Réfrigérateur PEV - CS Kasika » dans le registre. Dès qu'un nom diffère d'un caractère, les comptages et les recherches se désynchronisent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Contrôler le data logger au déballage : calibration, pile, réglages, heure',
    intro: "Un data logger mal réglé donne une fausse sécurité. Vous le contrôlez avant de le mettre dans l'unité, une fois, avec une fiche signée. Vous avez besoin : du data logger et de sa notice, de son certificat de calibration, d'un thermomètre de référence, d'un récipient d'eau et de glace pilée.",
    steps: [
      {
        title: 'Contrôlez les documents et la pile',
        actions: [
          "Notez le numéro de série et vérifiez qu'il correspond à celui du certificat de calibration.",
          "Vérifiez la date de calibration : elle est en général renouvelée tous les 1 à 2 ans selon le modèle ; un certificat périmé ou absent = appareil non utilisable.",
          "Contrôlez l'indicateur de pile ; changez la pile si l'appareil l'indique.",
        ],
      },
      {
        title: 'Contrôlez les réglages',
        actions: [
          "Date et heure : réglez l'heure locale (heure de Goma). Un historique à l'heure UTC ne se rapproche plus du registre.",
          "Intervalle d'enregistrement : fixez 15 minutes (plus court = plus précis, mais mémoire plus vite pleine).",
          "Seuils d'alerte : notez le seuil haut (+8°C) et le seuil bas (2°C ou moins), ainsi que le délai avant déclenchement de l'alerte.",
        ],
      },
      {
        title: 'Faites un contrôle rapide dans la glace',
        actions: [
          "Plongez le capteur et le thermomètre de référence cinq minutes dans un mélange d'eau et de glace pilée.",
          "Comparez les deux valeurs (autour de 0°C) ; l'écart doit rester dans la tolérance de la fiche constructeur (souvent ±0,5°C).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche de contrôle du Fridge-tag FT-0873, 17 mars, 9h15',
      lines: [
        "N° de série : FT-0873 = certificat. Calibration : valide jusqu'au 2027-01-31. Pile : OK.",
        "Heure réglée sur l'heure de Goma (écart avec la montre : 0 min). Intervalle : 15 min.",
        "Seuils : haut > 8°C pendant 10 h consécutives ; bas < -0,5°C pendant 60 min.",
        "Contrôle glace : appareil 0,2°C, thermomètre de référence 0,0°C → écart 0,2°C, conforme.",
        "Constat : le délai de 10 h avant alerte est long. Décision : conserver l'appareil, mais ne jamais s'appuyer sur son alerte (voir Procédures 2 et 4).",
      ],
    },
    result: "Un data logger identifié, dans sa période de calibration, à l'heure locale, dont vous connaissez les réglages d'alerte et les limites.",
    pitfall: "Mettre l'appareil en service sans avoir vérifié l'heure. Une excursion « de 14h à 17h » dans l'historique qui n'est pas « de 14h à 17h » dans votre registre empêche tout rapprochement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: "Installer l'unité de froid et la faire tourner à vide pendant 24 heures",
    intro: "On ne charge jamais un réfrigérateur de vaccins le jour où il est branché. Vous le laissez se stabiliser vide, avec le data logger dedans, et vous ne chargez que si la température est restée dans la plage 24 heures de suite.",
    steps: [
      {
        title: "Choisissez l'emplacement et branchez",
        actions: [
          "Posez l'appareil de niveau, à l'ombre, loin des fenêtres, du groupe électrogène et de toute source de chaleur.",
          "Laissez un espace d'au moins 10 cm entre l'appareil et les murs pour la circulation d'air.",
          "Branchez-le sur une prise dédiée, sans multiprise ; vérifiez que le groupe électrogène supporte la charge.",
        ],
      },
      {
        title: 'Réglez et laissez stabiliser',
        actions: [
          "Réglez le thermostat sur la valeur du constructeur (autour de +5°C) ; ne cherchez pas à « faire plus froid ».",
          "Placez le data logger au centre (voir étape 4) et fermez la porte.",
          "Relevez la température à l'heure de mise en route, puis toutes les 4 heures pendant la première journée ; ne chargez rien.",
          "Au bout de 24 heures, lisez l'historique : s'il est resté entre 2 et 8°C, l'unité est acceptée.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — essai à vide du réfrigérateur de Kasika',
      lines: [
        "Mardi 17/03, 09h30 : mise en route, thermostat sur la position constructeur, logger FT-0873 au centre.",
        "17/03 : 13h30 → 9,8°C (en refroidissement) ; 17h30 → 5,9°C ; 21h30 → 4,6°C.",
        "Mercredi 18/03, 09h30 : 4,5°C ; historique 24 h : minimum 4,3°C, maximum 5,9°C une fois la température atteinte → unité acceptée.",
        "Autorisation donnée par écrit à Dr Kahindo : « Réfrigérateur prêt à recevoir les vaccins jeudi 19/03. »",
      ],
    },
    result: "Un historique de 24 heures stable dans la plage, qui prouve que l'unité fonctionne avant le premier flacon.",
    tip: "Les relevés du 18 mars (essai à vide) sont les premières lignes de votre registre : la traçabilité commence avant les produits.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Positionner le data logger et ranger les produits sans créer de point froid',
    intro: "La plupart des congélations accidentelles viennent du rangement, pas de l'appareil. Vous placez le data logger là où il mesure la température des produits, et vous rangez pour que l'air circule.",
    steps: [
      {
        title: 'Placez le data logger',
        actions: [
          "Mettez-le au centre de l'unité, à hauteur des produits : jamais contre une paroi, jamais sur la porte, jamais près du compartiment évaporateur.",
          "Si l'appareil a un capteur déporté, fixez-le au milieu d'un carton de flacons factices ou d'un pot d'eau, pour mesurer la température des produits et non celle de l'air.",
          "Vérifiez que l'afficheur est lisible sans ouvrir la porte, ou notez la position du data logger sur la fiche d'unité.",
        ],
      },
      {
        title: 'Rangez selon les règles GSP',
        actions: [
          "Laissez au moins 2 cm entre les cartons et ne les collez jamais à la paroi arrière ni à l'évaporateur.",
          "Rangez les produits sensibles au gel (Penta, DTC) dans la zone centrale, loin de l'évaporateur ; mettez les autres sur les étagères.",
          "Ne mettez rien dans la porte, ni nourriture, ni boisson, ni échantillon biologique.",
          "Classez par lot et par date de péremption : le plus proche en premier à sortir.",
          "Affichez « VACCINS UNIQUEMENT — NE PAS OUVRIR SANS NÉCESSITÉ » et fermez l'unité à clé.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — plan de rangement du réfrigérateur de Kasika (prévu pour le 19/03)',
      lines: [
        "Étagère haute : rougeole lot MV-26A114, 50 flacons ; cartons séparés de 2 cm.",
        "Étagère centrale : Penta lot PT-26B207, 30 flacons ; zone la plus éloignée de l'évaporateur ; data logger FT-0873 au milieu.",
        "Étagère basse : diluants de la rougeole.",
        "Porte : vide. Cadenas posé ; clé confiée à Léonie Mbusa, double chez Prosper Katembo.",
      ],
    },
    result: "Un réfrigérateur rangé selon un plan écrit, où chaque produit a une place, où l'air circule et où le data logger mesure le centre.",
    pitfall: "Glisser les flacons contre la paroi arrière « pour qu'ils soient bien au frais » : c'est la cause la plus fréquente de congélation accidentelle sur le terrain.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Préparer le plan de continuité en cas de coupure ou de panne',
    intro: "Les ruptures arrivent la nuit et le week-end, quand il n'y a personne. Un plan simple, affiché sur la porte de l'unité, vaut mieux qu'une décision improvisée. Vous avez besoin : de l'autonomie hors tension, du stock de carburant, de la liste des contacts et d'une glacière avec ses accumulateurs.",
    steps: [
      {
        title: "Sécurisez l'énergie",
        actions: [
          "Calculez la réserve de carburant minimale (au moins 7 jours) et fixez un jerrican de réserve fermé à clé.",
          "Inscrivez sur la fiche le nom du technicien (Faustin Mumbere) et son numéro, et le jour de livraison du carburant.",
          "Désignez qui démarre le groupe quand personne n'est au centre (gardien formé, voisin du centre).",
        ],
      },
      {
        title: 'Préparez le repli',
        actions: [
          "Gardez une glacière de secours et au moins 4 accumulateurs congelés (dans le compartiment congélateur de l'appareil), jamais utilisés pour autre chose.",
          "Fixez des seuils d'action en fonction de l'autonomie annoncée (10 h ici) : alerte immédiate, décision de repli à la moitié de l'autonomie, transfert avant la fin.",
          "Affichez la conduite à tenir sur la porte, en français simple, avec les numéros.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — affiche « Si le courant s\'arrête » (extrait)',
      lines: [
        "H+0 : ne PAS ouvrir la porte. Noter l'heure. Prévenir sur le groupe WhatsApp « Alertes chaîne du froid — Kasika ».",
        "H+2 : groupe électrogène démarré ? Sinon appeler Faustin Mumbere.",
        "H+5 (moitié de l'autonomie de 10 h) : préparer la glacière, conditionner les accumulateurs.",
        "H+8 : si le courant n'est pas revenu, transférer les vaccins dans la glacière avec le data logger et appeler Dr Kahindo.",
        "Toujours : relever la température à chaque étape et la noter dans le registre.",
      ],
    },
    result: "Livrable 1 terminé : fiche d'unité, data logger contrôlé et positionné, plan de rangement et affiche de continuité sur la porte.",
    tip: "Faites une répétition : demandez au gardien de vous montrer comment il démarre le groupe et où se trouve la glacière. Le jour de la coupure, il n'y aura personne pour lui expliquer.",
  },

  // ───────────── PROCÉDURE 2 — Tenir le registre (xlsx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Ouvrir, renommer et préparer le registre sans casser les formules',
    intro: "Mercredi 18 mars. Le template registre-suivi-chaine-du-froid.xlsx contient deux onglets : « Registre quotidien » (7 colonnes, lignes 5 à 40) et « Synthèse mensuelle » (calculée automatiquement). Ce fichier devient la mémoire officielle de votre chaîne du froid.",
    steps: [
      {
        title: 'Préparez votre copie',
        actions: [
          "Ouvrez registre-suivi-chaine-du-froid.xlsx et enregistrez-le aussitôt sous AAAA-MM-JJ_Registre-froid_[Site]_v01.xlsx.",
          "Repérez la ligne 4 : Date, Unité de froid, Relevé matin (°C), Statut matin, Relevé après-midi (°C), Statut après-midi, Observations.",
          "Repérez les lignes d'exemple (5 à 12, une semaine de relevés fournie avec le template) et la ligne 42 qui rappelle la règle : 2 à 8°C, deux relevés par jour, 7 jours sur 7.",
        ],
      },
      {
        title: 'Videz les exemples en protégeant les colonnes D et F',
        actions: [
          "Sélectionnez A5:C12, appuyez sur Suppr ; puis E5:E12, Suppr ; puis G5:G12, Suppr. Ne touchez JAMAIS aux colonnes D et F : elles contiennent les formules de statut.",
          "Dans l'onglet « Synthèse mensuelle », remplacez les textes de A5 et A6 par les noms exacts de vos unités (copiez-les depuis votre fiche d'unité).",
          "Testez : saisissez 4 en C5 (D5 doit afficher OK), puis 9 (D5 doit afficher HORS PLAGE), puis supprimez la valeur de test.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état du fichier le 18/03, 8h45',
      lines: [
        "Fichier : 2026-03-18_Registre-froid_Lukando_v01.xlsx.",
        "Synthèse mensuelle : A5 = Réfrigérateur PEV - CS Kasika ; A6 = Réfrigérateur PEV - CS Mubimbi.",
        "Test des formules : C5 = 4 → « OK » ; C5 = 9 → « HORS PLAGE » (cellule colorée) ; C5 vidée → D5 vide.",
        "Formule de D5 (inchangée) : =IF(C5=\"\",\"\",IF(OR(C5<2,C5>8),\"HORS PLAGE\",\"OK\")), soit en Excel français =SI(C5=\"\";\"\";SI(OU(C5<2;C5>8);\"HORS PLAGE\";\"OK\")).",
      ],
    },
    result: "Un registre v01 daté, vidé de ses exemples, dont les formules de statut et de synthèse fonctionnent, testé avant la première saisie.",
    pitfall: "Supprimer les lignes d'exemple avec « Supprimer la ligne » : vous supprimez aussi les formules des colonnes D et F, et plus aucun statut n'apparaît — sans message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Colonnes A et B — Date et Unité de froid : une ligne par unité et par jour',
    intro: "La synthèse mensuelle compte les relevés avec NB.SI/COUNTIFS, qui exigent une correspondance exacte du texte de la colonne B avec celui de la synthèse. Une ligne du registre = une unité pour un jour.",
    steps: [
      {
        title: 'Colonne A — Date',
        actions: [
          "Saisissez la date au format AAAA-MM-JJ (2026-03-18), comme dans les lignes du template.",
          "Créez une ligne par jour et par unité, y compris le samedi, le dimanche et les jours fériés : une ligne vide un week-end est un trou dans votre preuve.",
        ],
      },
      {
        title: 'Colonne B — Unité de froid',
        actions: [
          "Copiez-collez le nom exact de l'unité depuis votre fiche ; ne le retapez jamais.",
          "Vérifiez l'absence d'espace en fin de cellule (cliquez dans la cellule, touche Fin).",
          "Regroupez les lignes par unité (comme le template) ou par jour : peu importe, mais gardez le même ordre pendant tout le mois.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — saisie des colonnes A et B, lignes 5 à 7 et 11',
      lines: [
        "A5 : 2026-03-18 | B5 : Réfrigérateur PEV - CS Kasika",
        "A6 : 2026-03-19 | B6 : Réfrigérateur PEV - CS Kasika",
        "A7 : 2026-03-20 | B7 : Réfrigérateur PEV - CS Kasika (Kasika : lignes 5 à 10, du 18 au 23 mars)",
        "A11 : 2026-03-18 | B11 : Réfrigérateur PEV - CS Mubimbi (Mubimbi : lignes 11 à 16)",
      ],
    },
    pitfall: "Écrire « Réfrigérateur PEV - CS Kasika » sur une ligne et « Réfrigérateur PEV – CS Kasika » (tiret long) sur une autre : la synthèse affiche 5 relevés au lieu de 6 pour l'unité, et rien ne vous le dit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: 'Colonnes C et E — Faire un relevé fiable, matin et après-midi',
    intro: "Le registre ne vaut que ce que valent ses relevés. Un relevé fiable est lu au même endroit, à des heures fixes, et saisi tel qu'affiché, sans arrondi ni correction « de bon sens ».",
    steps: [
      {
        title: 'Faites le relevé sur place',
        actions: [
          "Relevez le matin (vers 8h) et l'après-midi (vers 16h), à six heures d'intervalle au moins, tous les jours.",
          "Lisez l'afficheur du data logger (et le thermomètre de l'unité) sans ouvrir la porte, ou en l'ouvrant le moins possible.",
          "Notez la valeur affichée avec une décimale ; si le data logger affiche aussi minimum et maximum depuis le dernier relevé, notez-les dans les observations en cas de valeur inhabituelle.",
        ],
      },
      {
        title: 'Saisissez dans le registre',
        actions: [
          "Saisissez la valeur en colonne C (matin) ou E (après-midi), avec la virgule de votre Excel français.",
          "Notez l'heure réelle du relevé dans la colonne G (voir étape 5).",
          "Ne saisissez rien dans D ni F : le statut s'affiche seul.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Date', 'C — Matin (°C)', 'E — Après-midi (°C)', 'Heures réelles (en G)'],
      rows: [
        ['5', '2026-03-18', '4,5', '5,0', '08h05 / 16h10'],
        ['6', '2026-03-19', '4,0', '5,5', '08h00 / 16h20 (vaccins reçus)'],
        ['7', '2026-03-20', '4,5', '5,0', '08h10 / 16h05'],
        ['8', '2026-03-21', '5,0', '8,6', '08h05 / 14h10'],
        ['9', '2026-03-22', '5,5', '5,0', '08h30 / 16h00'],
        ['10', '2026-03-23', '4,5', '5,0', '08h00 / 16h00'],
      ],
    },
    result: "Chaque relevé est une valeur lue sur l'appareil, datée, avec l'heure réelle dans les observations ; aucune valeur reconstituée.",
    pitfall: "Corriger un relevé « incohérent » parce que « ce n'est pas possible » ou saisir la valeur de la veille faute de relevé. Un chiffre inventé est pire qu'une case vide.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: 'Colonnes D et F — Lire les statuts automatiques sans jamais les écraser',
    intro: "Les statuts sont calculés par formule. Vous ne les saisissez pas, vous les lisez — et vous savez ce qu'ils disent et ce qu'ils ne disent pas.",
    steps: [
      {
        title: 'Comprenez la formule',
        actions: [
          "D et F affichent « HORS PLAGE » si la valeur est inférieure à 2 ou supérieure à 8, « OK » sinon, et restent vides si la cellule de relevé est vide.",
          "2,0°C et 8,0°C sont OK ; 8,1°C et 1,9°C sont HORS PLAGE.",
          "Une mise en forme conditionnelle colore les cellules : une valeur HORS PLAGE saute aux yeux.",
        ],
      },
      {
        title: 'Retenez les trois limites du statut',
        actions: [
          "Un statut vide ne veut pas dire « OK » : il veut dire « aucun relevé saisi ». Un trou dans le registre n'est jamais signalé en rouge.",
          "Un statut OK dit seulement que la valeur du moment était dans la plage : rien sur les heures qui précèdent ou suivent.",
          "Si votre fichier dépasse la ligne 40, copiez la formule de la dernière ligne vers le bas ; ne la retapez pas.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Date', 'C', 'D — Statut matin', 'E', 'F — Statut après-midi'],
      rows: [
        ['5', '2026-03-18', '4,5', 'OK', '5,0', 'OK'],
        ['6', '2026-03-19', '4,0', 'OK', '5,5', 'OK'],
        ['7', '2026-03-20', '4,5', 'OK', '5,0', 'OK'],
        ['8', '2026-03-21', '5,0', 'OK', '8,6', 'HORS PLAGE'],
        ['9', '2026-03-22', '5,5', 'OK', '5,0', 'OK'],
        ['10', '2026-03-23', '4,5', 'OK', '5,0', 'OK'],
      ],
    },
    result: "Vous voyez en un coup d'œil la ligne 8 : F8 = HORS PLAGE, cellule colorée. C'est le déclencheur de la Procédure 3.",
    pitfall: "Écraser une formule en tapant « OK » ou « HORS PLAGE » à la main. Elle ne se recalcule plus et le signal automatique disparaît pour cette ligne.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Colonne G — Observations : ce qui rend un relevé exploitable',
    intro: "La colonne Observations est votre mémoire des faits. Elle est obligatoire quand un statut est HORS PLAGE, quand un relevé manque et quand un événement a eu lieu (livraison, coupure, séance, réparation).",
    steps: [
      {
        title: 'Écrivez au format standard',
        actions: [
          "Format : heure réelle — initiales ou nom — fait constaté — action prise.",
          "Écrivez des faits datés et chiffrés (« porte entrouverte, cale de carton »), jamais des impressions (« il faisait chaud »).",
          "Notez les événements neutres aussi : réception de produits, ouverture de séance, changement de pile, remplacement de data logger.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — observations saisies en colonne G',
      lines: [
        "G5 : « 08h05 P. Katembo — essai à vide J+1 : 4,5°C, historique 24 h en plage → unité acceptée. »",
        "G6 : « 16h20 P. Katembo — vaccins reçus du convoi de Goma : 50 fl rougeole + 30 fl Penta ; logger de voyage lu : en plage. »",
        "G8 : « 14h10 P. Katembo — 8,6°C ; porte entrouverte (cale de carton), refermée 14h15 ; alerte WhatsApp 14h25 ; flacons isolés 14h35 ; historique à télécharger. »",
        "G9 : « 08h30 L. Mbusa — retour à 5,5°C ; flacons toujours en quarantaine, avis référente attendu. »",
      ],
    },
    result: "Un lecteur qui n'était pas là peut reconstituer ce qui s'est passé, heure par heure, sans vous poser une seule question.",
    tip: "Écrivez l'observation tout de suite, avant de quitter l'unité : dix minutes plus tard, vous aurez oublié l'heure exacte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: 'Saisir un relevé manquant : le trou doit se voir et s\'expliquer',
    intro: "Un relevé manqué arrivera : absence, panne, week-end. La règle est simple : le trou reste un trou. Vous ne le comblez pas avec une valeur « probable », vous l'expliquez, puis vous cherchez la vraie valeur dans l'historique du data logger.",
    steps: [
      {
        title: 'Ne comblez jamais',
        actions: [
          "Laissez la cellule de relevé vide ; ne copiez pas la valeur précédente ; ne tapez ni 0 ni « OK ».",
          "Écrivez en colonne G : « Relevé matin manquant — [cause] — [qui était responsable] ».",
          "Notez que le statut reste vide : ce trou n'est signalé nulle part ailleurs que dans vos observations.",
        ],
      },
      {
        title: 'Comblez la preuve, pas la case',
        actions: [
          "Dès que possible, téléchargez l'historique du data logger et lisez la température à l'heure du relevé manquant.",
          "Ajoutez en G : « Historique logger à 08h : 5,2°C (en plage) » : la preuve existe, la case reste vide.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — si Prosper Katembo était absent dimanche 22/03 au matin (exemple)',
      lines: [
        "C9 : vide. D9 : vide (la formule n'affiche rien).",
        "G9 : « Relevé matin manquant — agent absent (deuil familial), suppléant non joignable — responsable L. Mbusa informée lundi 08h. »",
        "Lundi 08h30 : historique FT-0873 lu : 5,4°C à 08h00 le 22/03, en plage. G9 complétée : « Historique logger 08h00 : 5,4°C. »",
        "Dans le template lui-même, la ligne 6 illustre le cas : C6 vide, G6 « Relevé matin manquant — coupure réseau, aucun agent sur site le samedi matin ».",
      ],
    },
    result: "Un trou documenté, expliqué et recoupé avec l'historique du data logger. Personne ne peut croire qu'un relevé a été fait.",
    pitfall: "Saisir « 5,0 » pour « avoir un registre propre ». Un registre complet mais faux vous protège moins qu'un registre troué mais honnête — et le jour d'un contrôle, c'est la fausse valeur qui vous est reprochée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: 'Installer la routine : horaires, suppléants, week-ends et contrôle du lundi',
    intro: "La plupart des relevés manquants sont des problèmes d'organisation, pas de motivation. Vous écrivez le planning de la semaine et vous contrôlez chaque lundi que le registre est complet.",
    steps: [
      {
        title: 'Écrivez le planning de relevé',
        actions: [
          "Fixez les horaires (08h00 et 16h00, à plus ou moins une heure) et affichez-les sur la porte.",
          "Désignez, pour chaque jour dont le samedi, le dimanche et les jours fériés, un responsable et un suppléant nommés.",
          "Formez ces personnes en 20 minutes : lire l'afficheur, fermer la porte, saisir ou noter le relevé, envoyer l'alerte.",
        ],
      },
      {
        title: 'Contrôlez chaque lundi',
        actions: [
          "Vérifiez que chaque jour de la semaine a ses deux relevés ; pour chaque trou, vérifiez que la colonne G l'explique.",
          "Lisez l'historique du data logger de la semaine et rapprochez-le du registre (voir Procédure 4, étape 4).",
          "Envoyez un message à Goma : « Registre Kasika complet, 1 excursion traitée, 0 trou. »",
        ],
      },
    ],
    table: {
      columns: ['Jour', 'Responsable', 'Suppléant', 'Heures'],
      rows: [
        ['Lundi à vendredi', 'Prosper Katembo', 'Léonie Mbusa', '08h00 / 16h00'],
        ['Samedi', 'Prosper Katembo', 'Gardien du centre (formé)', '08h00 / 16h00'],
        ['Dimanche et jours fériés', 'Léonie Mbusa', 'Gardien du centre (formé)', '08h30 / 16h00'],
        ['Contrôle du registre', 'Logisticien terrain', 'Faustin Mumbere', 'Lundi 09h00'],
      ],
    },
    result: "Livrable 2 terminé : un registre ouvert, testé et tenu deux fois par jour, avec un planning qui couvre les week-ends et un contrôle hebdomadaire.",
    pitfall: "Penser « on rattrapera lundi » le week-end : c'est le raisonnement qui transforme une excursion de quelques heures, détectable et gérable, en une excursion de 48 heures découverte trop tard pour être caractérisée.",
  },

  // ───────────── PROCÉDURE 3 — Réagir à un relevé hors plage ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Confirmer le relevé et sécuriser l\'unité dans les 15 premières minutes',
    intro: "Samedi 21 mars, 14h10. Prosper Katembo saisit 8,6°C : le statut passe à HORS PLAGE. Le temps compte, car chaque heure d'excursion réduit l'efficacité du produit. Vous vous demandez d'abord : est-ce réel, et est-ce encore en cours ?",
    steps: [
      {
        title: 'Confirmez',
        actions: [
          "Relisez l'afficheur du data logger et le thermomètre de l'unité ; attendez deux minutes et relisez.",
          "Notez l'heure exacte du constat : elle ouvre le dossier.",
        ],
      },
      {
        title: 'Cherchez la cause évidente et corrigez',
        actions: [
          "Porte : fermée, verrouillée, joint propre ? Une cale ou un carton dans la porte ?",
          "Énergie : le groupe tourne-t-il ? Voyant allumé ? Disjoncteur ?",
          "Réglage : thermostat déplacé ? Produits collés à la paroi ?",
          "En cas de coupure, n'ouvrez pas la porte pour « vérifier » : chaque ouverture laisse entrer de la chaleur.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — chronologie du 21/03',
      lines: [
        "14h10 : relevé 8,6°C ; thermomètre de l'unité confirmé à 14h12.",
        "14h14 : porte trouvée entrouverte, un carton calé dans le joint après la séance de vaccination.",
        "14h15 : carton retiré, porte refermée à clé ; le groupe tourne normalement.",
        "Température affichée à 14h20 : 8,4°C en baisse.",
      ],
    },
    result: "Le relevé est confirmé, la cause évidente est corrigée, l'heure du constat est notée.",
    pitfall: "Déplacer les flacons dans une autre unité non vérifiée, ou les vider « par précaution ». Ne touchez pas au contenu avant d'avoir isolé et documenté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Envoyer l\'alerte WhatsApp avec une photo et un relevé chiffré',
    intro: "L'alerte est immédiate : sans attendre la fin de journée « pour voir si ça se confirme ». Elle va sur le groupe WhatsApp Business « Alertes chaîne du froid » du site, avant même la mise à jour du registre. Elle ne remplace jamais le registre écrit : elle gagne du temps de réaction.",
    steps: [
      {
        title: 'Rédigez un message en 5 lignes',
        actions: [
          "Ligne 1 : mot « ALERTE FROID », site, unité, date et heure.",
          "Ligne 2 : relevé chiffré, statut du data logger (alerte déclenchée ou non).",
          "Ligne 3 : constat et cause probable ; ligne 4 : action déjà prise ; ligne 5 : ce que vous demandez et à qui.",
        ],
      },
      {
        title: 'Joignez les preuves',
        actions: [
          "Photo de l'afficheur du data logger lisible (valeur, heure), photo de l'unité (porte, rangement).",
          "Ne mettez jamais de nom de patient ni d'information personnelle dans le groupe.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — message du 21/03 à 14h25 (groupe « Alertes chaîne du froid — Kasika »)',
      lines: [
        "ALERTE FROID — Kasika — Réfrigérateur PEV - CS Kasika — 21/03 14h25.",
        "Relevé 14h10 : 8,6°C (HORS PLAGE). Logger FT-0873 : pas de pictogramme d'alerte (seuil réglé à 10 h).",
        "Constat : porte entrouverte (cale de carton) après la séance ; refermée 14h15.",
        "Action : flacons isolés et étiquetés dans quelques minutes ; historique à télécharger.",
        "Demande : avis de la pharmacienne référente (Dr Kavira). — P. Katembo. [photo logger] [photo unité]",
      ],
    },
    result: "Le message est envoyé, avec photos, dans les 15 minutes ; les personnes qui peuvent décider savent ce qui se passe.",
    tip: "Préparez ce modèle de message dans les notes du téléphone de chaque agent : à 14h10 un samedi, personne ne rédige bien dans l'urgence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Isoler et étiqueter les produits : la quarantaine préventive',
    intro: "Tant que l'impact n'est pas évalué, les produits concernés ne sortent pas du stock utilisable. Vous les isolez physiquement, vous les étiquetez et vous les listez : sans liste, impossible de décider ensuite lot par lot.",
    steps: [
      {
        title: 'Isolez et étiquetez',
        actions: [
          "Regroupez les produits concernés dans un bac ou un carton séparé, à l'intérieur de l'unité si elle est de nouveau dans la plage.",
          "Collez une étiquette : « À NE PAS UTILISER — EN ATTENTE D'ÉVALUATION », avec la date, l'heure et votre nom.",
          "Informez l'équipe de vaccination : aucune sortie de ces flacons.",
        ],
      },
      {
        title: 'Listez ce qui est isolé',
        actions: [
          "Notez pour chaque lot : produit, numéro de lot, nombre de flacons, date de péremption.",
          "Comptez physiquement : le nombre de flacons doit correspondre à la fiche de stock.",
        ],
      },
    ],
    table: {
      columns: ['Produit', 'N° de lot', 'Flacons isolés', 'Péremption'],
      rows: [
        ['Rougeole 10 doses', 'MV-26A114', '50', '2027-02'],
        ['Penta 10 doses (DTC-HepB-Hib)', 'PT-26B207', '30', '2027-04'],
        ['Total', '2 lots', '80 flacons', '—'],
      ],
    },
    example: {
      title: 'Fil rouge — texte de l\'étiquette (14h35)',
      lines: [
        "À NE PAS UTILISER — EN ATTENTE D'ÉVALUATION.",
        "Excursion constatée le 21/03/2026 à 14h10 (8,6°C). Isolé à 14h35 par P. Katembo.",
        "Ne pas ouvrir, ne pas détruire, ne pas déplacer sans avis du logisticien.",
      ],
    },
    result: "Livrable 3 : 80 flacons isolés, étiquetés et listés, ni utilisés ni détruits ; l'alerte est partie.",
    pitfall: "Isoler sans compter. Une décision « pour le lot » prise sans liste précise des flacons concernés ne peut jamais être vérifiée a posteriori.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Escalader, obtenir un avis et assurer la continuité de la vaccination',
    intro: "Vous n'êtes pas seul(e) pour décider, mais vous ne pouvez pas attendre indéfiniment un avis. Vous prévenez dans un ordre précis, vous fixez un délai, et vous prévoyez comment la vaccination continue en attendant.",
    steps: [
      {
        title: 'Prévenez dans l\'ordre',
        actions: [
          "Informez la responsable hiérarchique (Dr Kahindo) et le coordinateur logistique pays (Jean-Marc Ilunga).",
          "Appelez la pharmacienne référente (Dr Kavira) : donnez durée en cours, température maximale lue, état des VVM, lots concernés.",
          "Notez dans le registre (colonne G) les heures et les noms des appels.",
        ],
      },
      {
        title: 'Fixez le délai et la règle par défaut',
        actions: [
          "Si aucun avis n'est obtenu dans les 24 heures : la quarantaine se poursuit, rien n'est utilisé ni détruit sans critère de la procédure.",
          "Demandez à Goma d'envoyer des doses de remplacement depuis la chambre froide dans une glacière avec data logger si une séance est prévue avant la décision.",
        ],
      },
    ],
    table: {
      columns: ['Heure', 'Action', 'Qui'],
      rows: [
        ['14h25', 'Alerte WhatsApp avec photos', 'P. Katembo'],
        ['14h40', 'Appel : Dr Kahindo informée', 'Logisticien terrain'],
        ['15h50', 'Appel : Dr Kavira, faits transmis (durée en cours, max 9,4°C)', 'Logisticien terrain'],
        ['16h30', 'Séance du lundi 23/03 : doses prises sur le stock non concerné ?', 'Dr Kahindo'],
      ],
    },
    result: "Les personnes qui doivent décider sont informées avec les faits ; un délai et une règle par défaut existent ; la vaccination est protégée.",
    tip: "Ne dites jamais « il y a un problème de froid ». Dites : « 8,6°C à 14h10, maximum 9,4°C, 12 points hors plage depuis 12h30, VVM contrôlés à 15h40 : 80 flacons au stade 1 ».",
  },

  // ───────────── PROCÉDURE 4 — Exploiter l'historique du data logger ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Télécharger et archiver l\'historique avant toute remise en service',
    intro: "L'historique est la seule donnée qui caractérise l'excursion. Réflexe de déballage : ne jamais remettre en service un data logger dont l'historique n'a pas d'abord été téléchargé et archivé après une alerte — sinon l'historique de l'incident est perdu.",
    steps: [
      {
        title: 'Téléchargez',
        actions: [
          "Ne remettez pas à zéro, ne reconfigurez pas, ne remplacez pas la pile avant d'avoir terminé.",
          "Connectez le data logger à l'ordinateur (câble USB ou logiciel du fabricant) et exportez l'historique en PDF et en CSV.",
          "Contrôlez que la période exportée couvre bien l'excursion, du début à la fin.",
        ],
      },
      {
        title: 'Archivez',
        actions: [
          "Nommez les fichiers AAAA-MM-JJ_Historique-[N° série]_[Site]_du-[début]-au-[fin].pdf (et .csv).",
          "Copiez-les à deux endroits (ordinateur et clé USB ou dossier partagé de Goma).",
          "Notez dans le registre l'heure du téléchargement, remettez le data logger au centre de l'unité, et ne relancez un nouvel enregistrement que si la notice l'exige.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — téléchargement du 21/03, 15h30',
      lines: [
        "2026-03-21_Historique-FT-0873_Kasika_du-2026-03-17-au-2026-03-21.pdf",
        "2026-03-21_Historique-FT-0873_Kasika_du-2026-03-17-au-2026-03-21.csv",
        "Copie : ordinateur de la base et clé USB confiée à Goma le 22/03.",
        "G8 complétée : « 15h30 historique FT-0873 téléchargé et archivé ; logger remis au centre de l'unité 15h40. »",
      ],
    },
    result: "L'historique complet est sauvegardé en deux exemplaires, identifié par le numéro de série et la période, avant toute manipulation de l'appareil.",
    pitfall: "Remettre l'appareil à zéro « pour repartir propre » avant l'export : l'historique de l'incident disparaît et la décision ne pourra plus s'appuyer que sur une impression.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Lire la courbe : début, fin, durée, minimum et maximum',
    intro: "Vous ne devinez jamais ces valeurs à partir d'un relevé isolé du registre : vous les lisez dans l'historique. Vous avez besoin du fichier CSV et d'Excel.",
    steps: [
      {
        title: 'Préparez le fichier',
        actions: [
          "Ouvrez le CSV dans Excel : une colonne A (date-heure) et une colonne B (température).",
          "Créez un graphique en courbe et repérez à l'œil la zone hors des lignes 2 et 8°C.",
          "En colonne C, saisissez =SI(OU(B2<2;B2>8);1;0) et copiez vers le bas : 1 = point hors plage.",
        ],
      },
      {
        title: 'Calculez',
        actions: [
          "Début : première ligne où C = 1 (=MINIFS(A:A;C:C;1)). Fin : première ligne revenue à 0 après la dernière ligne à 1.",
          "Durée hors plage = nombre de points à 1 × l'intervalle : =SOMME(C:C)*15/60 donne des heures pour 15 minutes.",
          "Maximum : =MAXIFS(B:B;C:C;1). Minimum sur l'excursion : =MINIFS(B:B;C:C;1). Minimum sur toute la période : =MIN(B:B).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lecture de l\'historique de Kasika, 21/03',
      lines: [
        "Intervalle : 15 min. Points hors plage : 12 (de 12h30 à 15h15 inclus). Durée = 12 × 15/60 = 3 h 00.",
        "Début : 21/03 12h30 (8,1°C). Fin : retour dans la plage au point de 15h30 (7,9°C).",
        "Maximum : 9,4°C à 14h15 (au moment où la porte est refermée). Minimum sur l'excursion : 8,1°C.",
        "Minimum sur toute la période (depuis le 17/03) : 3,6°C → aucune valeur sous 2°C : pas de risque de congélation.",
      ],
    },
    result: "Cinq chiffres — début, fin, durée, minimum, maximum — chacun lu dans le fichier, pas estimé.",
    tip: "En version anglaise d'Excel, les formules sont IF/OR, SUM, MINIFS, MAXIFS, MIN, avec des virgules à la place des points-virgules.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Cumuler l\'exposition : par seuil et sur toute la vie du lot',
    intro: "La chaleur est cumulative : une excursion de 3 heures s'ajoute à celles du transport et du stockage précédents. Vous ne jugez jamais une excursion isolément, mais l'exposition totale du lot depuis sa sortie de la chambre froide.",
    steps: [
      {
        title: 'Classez le temps par seuil',
        actions: [
          "Calculez le temps cumulé au-dessus de 8°C, au-dessus de 10°C, en dessous de 2°C et en dessous de 0°C (=SOMME.SI.ENS ou NB.SI.ENS × intervalle).",
          "Ces seuils servent à comparer l'excursion à la stabilité documentée du produit (fiche du fabricant, avis du référent).",
        ],
      },
      {
        title: 'Additionnez tous les maillons du lot',
        actions: [
          "Relisez l'historique du data logger de voyage (Goma → Kasika) et celui du stockage précédent.",
          "Faites un tableau « maillon / durée hors plage / maximum » pour chaque lot concerné.",
        ],
      },
    ],
    table: {
      columns: ['Maillon', 'Durée hors plage', 'Maximum', 'Source'],
      rows: [
        ['Chambre froide Goma (stock régional)', '0 h', '6,4°C', 'Enregistreur de la chambre froide'],
        ['Transport Goma → Kasika (19/03)', '0 h', '7,4°C', 'Data logger de voyage LT-2210'],
        ['Réfrigérateur de Kasika (21/03)', '3 h 00', '9,4°C', 'Fridge-tag FT-0873'],
        ['Cumul sur la vie du lot', '3 h 00', '9,4°C', 'Somme des trois maillons'],
      ],
    },
    result: "Pour chaque lot, un cumul d'exposition chiffré (durée et maximum) sur toute sa vie, prêt pour la section 2 de la procédure de rupture.",
    pitfall: "Ne regarder que la dernière excursion. Un lot qui a déjà passé 6 heures à 12°C pendant le transport n'a pas la même marge qu'un lot irréprochable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: 'Rapprocher le registre et l\'historique, repérer les trous',
    intro: "Le registre donne des photographies, l'historique donne le film. Vous les comparez pour vérifier que les deux disent la même chose, et pour découvrir les excursions que le registre n'a pas vues.",
    steps: [
      {
        title: 'Comparez relevé par relevé',
        actions: [
          "Pour chaque relevé de la période, lisez la valeur du data logger à la même heure et calculez l'écart.",
          "Un écart supérieur à 1°C appelle un contrôle : positionnement du data logger, calibration, thermomètre de l'unité.",
        ],
      },
      {
        title: 'Cherchez ce que le registre ne voit pas',
        actions: [
          "Repérez toute sortie de plage de l'historique qui tombe entre deux relevés : le registre n'en dit rien.",
          "Ajoutez en colonne G la mention « excursion visible seulement dans l'historique : [début-fin, max] ».",
        ],
      },
    ],
    table: {
      columns: ['Relevé (registre)', 'Valeur du registre', 'Valeur du logger à l\'heure', 'Écart'],
      rows: [
        ['21/03 08h05', '5,0°C', '5,0°C', '0,0°C'],
        ['21/03 14h10', '8,6°C', '9,3°C', '0,7°C'],
        ['22/03 08h30', '5,5°C', '5,4°C', '0,1°C'],
        ['Excursion entre deux relevés ?', 'Non', 'Non : 12h30–15h30 contient le relevé de 14h10', '—'],
      ],
    },
    result: "Livrable 4 : une fiche de lecture rapprochée du registre — écarts inférieurs à 1°C, aucune excursion cachée, faits prêts pour la procédure de rupture.",
    tip: "Si l'historique montre une excursion de 3 heures et qu'aucun relevé ne l'a vue (par exemple 11h puis 17h), c'est un signal d'organisation : ajoutez un relevé après les séances de vaccination.",
  },

  // ───────────── PROCÉDURE 5 — Procédure de rupture (docx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 8',
    title: 'Ouvrir le template de procédure de rupture et rassembler les intrants',
    intro: "Samedi 21 mars, 16h30. L'excursion est confirmée : vous ouvrez procedure-rupture-chaine-froid.docx. Ce document engage votre responsabilité professionnelle : il doit être complété même si la décision finale est « produit toujours utilisable » — l'absence de trace écrite est en elle-même une faute en cas de contrôle.",
    steps: [
      {
        title: 'Rassemblez les intrants',
        actions: [
          "Historique du data logger (PDF et CSV) et sa fiche de lecture (Procédure 4).",
          "Registre à jour (lignes concernées et observations), liste des produits isolés, message d'alerte envoyé.",
          "Résultat du contrôle VVM flacon par flacon, fiche produit des lots concernés, coordonnées du référent.",
        ],
      },
      {
        title: 'Préparez le document',
        actions: [
          "Ouvrez le template et enregistrez-le sous AAAA-MM-JJ_Rupture-froid_[Site]_[Unité].docx.",
          "Repérez l'en-tête et l'objectif, puis les six sections : 1 Équipement et produits concernés ; 2 Durée et température de la rupture ; 3 État des indicateurs au moment du constat ; 4 Action immédiate prise ; 5 Évaluation et décision ; 6 Validation.",
          "Retenez la contrainte : deux pages au maximum, à conserver dans le dossier qualité du site.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fichier et dossier',
      lines: [
        "Fichier : 2026-03-21_Rupture-froid_Kasika_Refrigerateur-PEV.docx.",
        "Dossier de travail : 05_Chaine-du-froid/2026-03_Kasika/ (historique, registre, photos, message d'alerte, liste des produits isolés).",
        "Ordre de remplissage : sections 2 et 3 d'abord (les faits), puis 1, 4, 5 et 6.",
      ],
    },
    result: "Le template est renommé, tous les intrants sont ouverts à côté, vous savez où chaque chiffre va se trouver.",
    tip: "Remplissez d'abord les sections factuelles (2 et 3). Une fois les faits posés, la décision de la section 5 s'écrit presque seule.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 8',
    title: 'Section 1 — Équipement et produits concernés',
    intro: "La section 1 est un tableau à deux cellules : « Équipement concerné (réfrigérateur, glacière, chambre froide) et localisation » et « Produit(s) concerné(s) et numéro(s) de lot ». Quelqu'un qui ne connaît pas le site doit pouvoir retrouver l'unité et les lots sans vous appeler.",
    steps: [
      {
        title: 'Cellule de gauche — l\'équipement',
        actions: [
          "Écrivez le nom exact de l'unité (comme dans le registre), son numéro de série et le numéro de série du data logger.",
          "Précisez la localisation exacte : site, bâtiment, salle.",
        ],
      },
      {
        title: 'Cellule de droite — les produits',
        actions: [
          "Listez chaque produit avec son numéro de lot, son nombre de flacons et sa date de péremption.",
          "Vérifiez que le total correspond à la liste des produits isolés et à la fiche de stock.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 1',
      lines: [
        "Équipement : Réfrigérateur PEV - CS Kasika (n° KS-FR-01), salle de vaccination du centre de santé de Kasika, zone de santé de Lukando. Data logger : Fridge-tag FT-0873.",
        "Produits : rougeole 10 doses, lot MV-26A114, 50 flacons, péremption 2027-02 ; Penta 10 doses, lot PT-26B207, 30 flacons, péremption 2027-04. Total : 80 flacons.",
      ],
    },
    pitfall: "Écrire « vaccins du frigo ». Si la décision porte sur « les vaccins », personne ne sait lesquels. Un lot, un numéro, un nombre de flacons.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 8',
    title: 'Section 2 — Durée et température de la rupture : les quatre valeurs de l\'historique',
    intro: "La section 2 contient quatre cellules : « Date et heure de début de la rupture », « Date et heure de fin (ou de détection) », « Température minimale atteinte (°C) » et « Température maximale atteinte (°C) ». Une phrase sous le tableau rappelle que ces valeurs viennent de l'historique complet du data logger, jamais d'une estimation.",
    steps: [
      {
        title: 'Reportez les valeurs lues à la Procédure 4',
        actions: [
          "Début : première mesure hors plage de l'historique (jour, heure, au format AAAA-MM-JJ hh:mm).",
          "Fin : retour dans la plage selon l'historique ; ajoutez la date et l'heure de détection si elles diffèrent.",
          "Minimum et maximum : lus dans le fichier, pendant l'excursion.",
        ],
      },
      {
        title: 'Précisez la source',
        actions: [
          "Ajoutez à côté de chaque valeur le nom du fichier ou « historique FT-0873 ».",
          "Si le minimum de la période est utile (risque de gel), ajoutez-le entre parenthèses.",
        ],
      },
    ],
    table: {
      columns: ['Cellule du template', 'Valeur — fil rouge'],
      rows: [
        ['Date et heure de début de la rupture', '2026-03-21 12:30 (première mesure à 8,1°C)'],
        ['Date et heure de fin (ou de détection)', 'Fin : 2026-03-21 15:30 (retour à 7,9°C). Détection : 14:10. Durée : 3 h 00.'],
        ['Température minimale atteinte (°C)', '8,1°C pendant l\'excursion (minimum sur la période : 3,6°C, donc aucun risque de congélation)'],
        ['Température maximale atteinte (°C)', '9,4°C à 14:15 (historique FT-0873)'],
      ],
    },
    pitfall: "Prendre le relevé de 8,6°C du registre pour le « maximum » et l'heure du relevé pour le « début ». Le registre a vu un instant ; l'historique a vu les trois heures, et le vrai maximum était 9,4°C.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 8',
    title: 'Section 3 — État des indicateurs : VVM flacon par flacon et alerte du data logger',
    intro: "La section 3 comporte deux cellules : « Statut VVM des flacons concernés (le cas échéant) » et « Alerte du data logger déclenchée ? (oui / non, préciser) ». Vous contrôlez 100 % des flacons, pas un échantillon, avant d'écrire.",
    steps: [
      {
        title: 'Contrôlez les VVM',
        actions: [
          "Ouvrez chaque carton, sortez chaque flacon et comparez le carré au cercle, à la lumière du jour.",
          "Classez par stade (1, 2, 3, 4) et comptez ; mettez à part tout flacon au stade 3 ou 4.",
          "Un VVM « bon » ne prouve rien sur le gel : il ne réagit qu'à la chaleur.",
        ],
      },
      {
        title: 'Renseignez l\'alerte',
        actions: [
          "Lisez l'afficheur : l'alerte s'est-elle déclenchée ?",
          "Répondez « oui » ou « non » et précisez : le seuil réglé et pourquoi l'alerte s'est ou ne s'est pas déclenchée.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 3',
      lines: [
        "VVM : 80 flacons contrôlés individuellement le 21/03 à 15h40. 78 au stade 1 (carré nettement plus clair que le cercle), 2 au stade 2 (plus foncé, mais nettement plus clair que le cercle). Aucun au stade 3 ou 4.",
        "Alerte du data logger : NON. Seuil réglé sur plus de 8°C pendant 10 h consécutives ; l'excursion a duré 3 h et n'a donc pas atteint le seuil. L'excursion a été détectée par le relevé du registre à 14h10.",
      ],
    },
    result: "Les deux cellules sont remplies avec des comptes et des raisons, pas avec « OK ».",
    pitfall: "Écrire « alerte non déclenchée » sans préciser pourquoi. Le lecteur conclut à tort que l'excursion n'a pas existé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 8',
    title: 'Section 4 — Action immédiate prise : isolement, étiquetage, personnes informées',
    intro: "La section 4 est un bloc de texte libre dont l'en-tête rappelle trois éléments : isolement physique, étiquetage « à ne pas utiliser en attente d'évaluation », personnes informées. Vous y consignez ce que vous avez déjà fait, heure par heure, d'après votre registre et votre message d'alerte.",
    steps: [
      {
        title: 'Rédigez la chronologie',
        actions: [
          "Une ligne par action : heure, action, qui.",
          "Couvrez les trois éléments de l'en-tête : isolement, étiquetage, personnes informées (avec l'heure d'information).",
          "Reprenez les heures de votre registre et de vos messages ; n'en inventez aucune.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 4',
      lines: [
        "14h10 constat 8,6°C (P. Katembo) ; 14h15 porte refermée, cale de carton retirée.",
        "14h25 alerte WhatsApp avec photos ; 14h35 80 flacons regroupés dans un bac, étiquetés « À NE PAS UTILISER — EN ATTENTE D'ÉVALUATION », stockés à l'intérieur de l'unité.",
        "14h40 Dr Kahindo informée ; 15h30 historique téléchargé ; 15h40 VVM contrôlés ; 15h50 Dr Kavira (pharmacienne référente) informée par téléphone.",
      ],
    },
    result: "Un lecteur reconstitue vos réactions minute par minute et constate que l'isolement a précédé toute évaluation.",
    tip: "Écrivez au passé composé et à la voix active : « J'ai isolé », « Prosper a refermé ». Une chronologie floue donne l'impression d'une action tardive.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 8',
    title: 'Section 5 — Choisir la décision : les quatre questions dans l\'ordre',
    intro: "La section 5 contient une ligne de cases : « Décision : ☐ Produit utilisable ☐ Produit en quarantaine ☐ Produit à détruire ». Vous ne cochez qu'une case, après avoir répondu aux quatre questions ci-dessous, dans cet ordre. Une seule case par lot concerné.",
    steps: [
      {
        title: 'Passez les quatre questions',
        actions: [
          "Posez-vous chaque question dans l'ordre et notez la réponse sur votre brouillon.",
          "Arrêtez-vous à la première question qui impose une décision (destruction ou quarantaine).",
          "Ne cochez « utilisable » que si les quatre réponses vont dans ce sens, et que l'avis du référent est obtenu.",
        ],
      },
    ],
    table: {
      columns: ['Question', 'Si oui', 'Si non ou inconnu'],
      rows: [
        ['1. Un flacon a-t-il un VVM au point de rejet (stade 3 ou 4) ?', 'Ce flacon : à détruire. Contrôlez les autres à 100 %.', 'Question suivante.'],
        ['2. Produit sensible au gel et température sous 0°C (ou doute) ?', 'Test d\'agitation : échoué = à détruire ; impossible = quarantaine en attente d\'avis.', 'Question suivante.'],
        ['3. Les faits sont-ils complets (début, fin, min, max, historique, VVM à 100 %) ?', 'Question suivante.', 'Quarantaine, le temps de compléter les faits.'],
        ['4. Durée et température sont-elles compatibles avec la stabilité documentée du produit (fiche, référent) ?', 'Utilisable, avec avis consigné ; exposés en premier.', 'Incompatibles : à détruire. Aucune donnée ni avis : quarantaine.'],
      ],
    },
    example: {
      title: 'Fil rouge — application aux 80 flacons de Kasika',
      lines: [
        "Q1 : aucun VVM au stade 3 ou 4 → question suivante. Q2 : minimum 3,6°C, aucune valeur sous 2°C → sans objet.",
        "Q3 : début, fin, 3 h 00, 8,1°C, 9,4°C, historique archivé, 80 flacons sur 80 contrôlés → faits complets.",
        "Q4 : 3 h à 9,4°C, cumul sur la vie du lot égal à 3 h ; avis oral de Dr Kavira le 21/03 à 15h50 → compatible. Décision : produit utilisable, flacons exposés à utiliser en premier.",
      ],
    },
    pitfall: "Cocher « à détruire » par précaution sans avoir passé les questions, ou « utilisable » parce que la séance est lundi. Dans les deux cas, la décision n'est pas défendable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 8',
    title: 'Section 5 (suite) — Rédiger la justification de la décision',
    intro: "Le template demande : « Justification de la décision (durée, température, référence produit, avis consulté) ». Une case cochée sans explication ne vaut rien. Vous rédigez trois à cinq lignes qui reprennent exactement ces quatre éléments, avec des chiffres.",
    steps: [
      {
        title: 'Écrivez en quatre morceaux',
        actions: [
          "Durée et température : « Excursion unique de [durée], température maximale [valeur], source [historique]. »",
          "Référence produit : produit, lot, nombre de flacons, état des VVM, minimum sur la période (gel).",
          "Avis consulté : nom, fonction, date, heure, canal, ce qui a été dit.",
          "Conditions et suites : ce qui est demandé (utiliser en premier, ne pas conserver, revérifier), cause identifiée, action corrective.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de justification (décision : utilisable)',
      lines: [
        "Excursion unique de 3 h 00 (12h30–15h30 le 21/03), maximum 9,4°C, historique FT-0873 ; aucune valeur sous 2°C sur la période (minimum 3,6°C), donc pas de risque de congélation.",
        "Lots MV-26A114 (50 flacons) et PT-26B207 (30 flacons) : 80 flacons contrôlés, 78 au stade 1 et 2 au stade 2, aucun au point de rejet. Cumul d'exposition sur la vie du lot : 3 h 00 ; transport du 19/03 en plage (maximum 7,4°C).",
        "Avis consulté : Dr Joëlle Kavira, pharmacienne référente, téléphone, 21/03 15h50 : utilisation autorisée, flacons exposés à utiliser en premier.",
        "Cause : cale de carton dans le joint après la séance. Mesure : check-list de fin de séance et contrôle de la porte avant de quitter la salle.",
      ],
    },
    result: "Un contrôleur lit les quatre lignes et comprend, sans vous poser de question, pourquoi le produit est utilisable.",
    pitfall: "Écrire « excursion mineure, produit OK ». Le mot « mineure » est un jugement ; la durée, la température et l'avis sont des faits.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 8 sur 8',
    title: 'Section 6 — Validation, relecture, archivage et diffusion',
    intro: "La section 6 comporte deux cellules : « Rédigé par (nom, fonction) — Date » et « Validé par (superviseur / référent médical) — Date ». Le logisticien propose, le référent valide. Vous relisez ensuite le document avec une liste courte, puis vous l'archivez et le diffusez.",
    steps: [
      {
        title: 'Signez et faites valider',
        actions: [
          "Remplissez « Rédigé par » avec votre nom, votre fonction et la date.",
          "Envoyez le document à la pharmacienne référente pour validation ; « Validé par » reste vide tant qu'il n'est pas signé.",
        ],
      },
      {
        title: 'Relisez, archivez, diffusez',
        actions: [
          "Vérifiez : deux pages au maximum, aucune cellule vide, chaque chiffre est sourcé, la case cochée correspond à la justification.",
          "Exportez en PDF et rangez-le dans le dossier qualité du site, avec l'historique du data logger.",
          "Mettez à jour la fiche de stock (lot libéré, détruit ou en quarantaine) et informez l'équipe de vaccination.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — cartouche de validation (extrait)',
      lines: [
        "Rédigé par : logisticien terrain Kemora Santé, Lukando — 2026-03-21.",
        "Validé par : Dr Joëlle Kavira, pharmacienne référente Kemora Santé — 2026-03-22.",
        "Fichier PDF : 2026-03-21_Rupture-froid_Kasika_Refrigerateur-PEV.pdf ; stock mis à jour : 80 flacons libérés, 2 flacons stade 2 marqués « à utiliser en premier ».",
      ],
    },
    result: "Livrable 5 terminé : une procédure de rupture complète, validée, de deux pages au maximum, archivée avec ses preuves.",
    pitfall: "Libérer les flacons avant la signature du référent. Tant que la section 6 n'est pas signée, l'étiquette « en attente d'évaluation » reste sur le bac.",
  },

  // ───────────── PROCÉDURE 6 — Synthèse mensuelle ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Préparer l\'onglet « Synthèse mensuelle » : unités, formules, extension',
    intro: "Lundi 23 mars, 17h00. L'onglet « Synthèse mensuelle » se calcule seul à partir du « Registre quotidien » : il liste une ligne par unité (A5, A6), une ligne TOTAL (A7) et six colonnes de résultats. Vous le préparez pour qu'il lise vos propres unités.",
    steps: [
      {
        title: 'Vérifiez le lien avec le registre',
        actions: [
          "Contrôlez que A5 et A6 contiennent les noms EXACTS des unités du registre (copiés-collés, jamais retapés).",
          "Ne modifiez jamais les formules de B à G : le sous-titre de l'onglet le rappelle.",
          "Contrôlez que la plage lue par les formules est $B$5:$B$40, soit 36 lignes de registre.",
        ],
      },
      {
        title: 'Étendez si nécessaire',
        actions: [
          "Pour ajouter une unité : clic droit sur la ligne 6 > Insérer, copiez B5:G5 vers la nouvelle ligne et collez le nom de l'unité en A6 ; la ligne TOTAL s'étend toute seule.",
          "Si le registre dépasse 36 lignes (2 unités × 18 jours), insérez des lignes AU-DESSUS de la ligne 40 du registre en copiant la ligne 39 (formules D et F comprises).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état de l\'onglet le 23/03',
      lines: [
        "A5 = Réfrigérateur PEV - CS Kasika ; A6 = Réfrigérateur PEV - CS Mubimbi ; A7 = TOTAL toutes unités.",
        "Registre : 12 lignes utilisées (6 jours × 2 unités), lignes 5 à 16 ; il reste 24 lignes libres, environ 12 jours.",
        "Décision : démarrer un nouveau fichier de registre pour avril, en gardant celui de mars comme archive.",
      ],
    },
    result: "La synthèse lit les bonnes unités et la bonne plage ; vous savez combien de place reste dans le registre.",
    pitfall: "Insérer la ligne d'unité sous la ligne TOTAL ou saisir des relevés en ligne 41 et au-delà : les formules ne les comptent plus, sans aucun message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Lire les colonnes B à G et savoir ce qu\'elles comptent vraiment',
    intro: "La synthèse donne par unité : nombre de relevés hors plage au matin (B) et à l'après-midi (C), total (D), température minimale (E), maximale (F) et moyenne (G). Elle compte des RELEVÉS, pas des événements ni des heures.",
    steps: [
      {
        title: 'Lisez ligne par ligne',
        actions: [
          "B et C comptent les statuts « HORS PLAGE » des colonnes D et F du registre pour l'unité ; D = B + C.",
          "E, F et G portent sur l'ensemble des relevés de l'unité (matin et après-midi) ; la moyenne ne compte que les relevés saisis.",
          "Vérifiez la ligne TOTAL : B7, C7 et D7 sont les sommes des unités ; E7 à G7 restent vides.",
        ],
      },
      {
        title: 'Retenez les limites',
        actions: [
          "Une excursion de 3 heures qui n'a été vue que par un relevé compte 1 ; une de 45 heures vue par 2 relevés compte 2.",
          "Le maximum de la synthèse est le maximum des relevés, pas celui du data logger : lisez l'historique pour le vrai maximum.",
        ],
      },
    ],
    table: {
      columns: ['Unité', 'B hors plage matin', 'C hors plage après-midi', 'D Total', 'E Min', 'F Max', 'G Moyenne'],
      rows: [
        ['Réfrigérateur PEV - CS Kasika', '0', '1', '1', '4,0', '8,6', '5,2'],
        ['Réfrigérateur PEV - CS Mubimbi', '2', '1', '3', '4,5', '9,8', '6,1'],
        ['TOTAL toutes unités', '2', '2', '4', '—', '—', '—'],
      ],
    },
    result: "Vous lisez le tableau en dix secondes : 4 relevés hors plage au total, dont 3 sur une seule unité.",
    pitfall: "Dire « une seule excursion » en lisant D = 1 pour Kasika. D compte les relevés hors plage ; la durée de l'excursion (3 h 00) ne se lit que dans l'historique.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Interpréter : une excursion expliquée n\'est pas une unité défaillante',
    intro: "Une unité qui cumule plusieurs excursions n'est pas un hasard répété : c'est un signal. Mais il faut d'abord distinguer les excursions expliquées (erreur humaine, coupure) de celles dont la cause reste inconnue.",
    steps: [
      {
        title: 'Classez chaque excursion par cause',
        actions: [
          "Retrouvez chaque ligne HORS PLAGE dans le registre et lisez la colonne G.",
          "Classez : humaine (porte, rangement), énergie (coupure, carburant), équipement (thermostat, compresseur), inconnue.",
          "Une cause humaine corrigée appelle une consigne ; une cause équipement ou inconnue appelle une vérification technique.",
        ],
      },
      {
        title: 'Cherchez le motif',
        actions: [
          "Deux excursions ou plus sur la même unité en un mois : signalez, quelle que soit la cause.",
          "Téléchargez l'historique de l'unité suspecte pour voir si elle oscille toute la journée ou seulement à certains moments.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Unité', 'Date', 'Relevé', 'Cause notée (G)'],
      rows: [
        ['8', 'Kasika', '2026-03-21 après-midi', '8,6°C', 'Porte entrouverte (cale de carton) — corrigée'],
        ['12', 'Mubimbi', '2026-03-19 après-midi', '9,2°C', 'Aucune cause trouvée'],
        ['14', 'Mubimbi', '2026-03-21 matin', '8,5°C', 'Aucune cause trouvée'],
        ['16', 'Mubimbi', '2026-03-23 matin', '9,8°C', 'Aucune cause trouvée'],
      ],
    },
    result: "Kasika : un incident humain traité. Mubimbi : trois excursions en six jours sans cause — unité à faire vérifier en urgence.",
    tip: "Le Fridge-tag de Mubimbi n'a pas déclenché d'alerte non plus : lisez son historique avant de conclure à une panne, car la défaillance peut venir du thermostat, du joint ou de l'emplacement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Signaler à la coordination logistique et lancer l\'action corrective',
    intro: "Une unité qui cumule plusieurs excursions se signale sans délai à la coordination logistique, pour réparation ou remplacement, avant qu'un lot entier ne soit perdu. Vous écrivez un message court avec les faits, l'impact et la demande.",
    steps: [
      {
        title: 'Rédigez le signalement',
        actions: [
          "Objet : « Signalement unité de froid — [unité] — [n] excursions en [période] ».",
          "Faits : dates, valeurs, historique lu ou à lire, produits stockés, cause identifiée ou non.",
          "Demande : action attendue (vérification, réparation, remplacement) et délai ; mesure provisoire proposée.",
        ],
      },
      {
        title: 'Fixez le plan d\'action',
        actions: [
          "Une action par ligne, avec responsable et échéance, dans le journal de la chaîne du froid.",
          "Prévoyez une mesure provisoire : stock minimal dans l'unité suspecte, le reste dans une unité fiable, séances alimentées par porte-vaccins.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — message du 23/03 à 17h30 à Jean-Marc Ilunga (copie Dr Kahindo)',
      lines: [
        "Objet : Signalement unité de froid — Réfrigérateur PEV - CS Mubimbi — 3 excursions en 6 jours.",
        "Relevés hors plage : 9,2°C le 19/03 après-midi ; 8,5°C le 21/03 matin ; 9,8°C le 23/03 matin. Aucune cause trouvée. Produits stockés : 40 flacons rougeole, 20 Penta.",
        "Demande : vérification du thermostat et du joint par F. Mumbere sous 48 h ; si non résolu, remplacement par un appareil de Goma. Provisoire : le stock de Mubimbi est ramené à 2 jours de consommation et placé dans le meilleur réfrigérateur disponible.",
      ],
    },
    result: "Livrable 6 terminé : synthèse lue et expliquée, unité défaillante signalée, plan d'action daté, mesure provisoire en place.",
    pitfall: "Se contenter de « surveiller » une unité à trois excursions. Un lot entier de vaccins vaut plusieurs milliers de dollars et protège des centaines d'enfants : on agit à la deuxième excursion, pas à la dixième.",
  },

  // ───────────── PROCÉDURE 7 — Transport sous température dirigée ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Planifier le transport : durée, autonomie de la glacière et volume à charger',
    intro: "Mercredi 18 mars. Les vaccins de Kasika partent de la chambre froide de Goma jeudi à 6h00 : 142 km dont 94 km de piste, pont de la Musi franchi un camion à la fois, check-point de Bweza. GDP : le transport doit préserver les mêmes conditions qu'un stockage, avec une preuve documentée.",
    steps: [
      {
        title: 'Comparez la durée et l\'autonomie',
        actions: [
          "Estimez la durée du trajet avec l'appui du chauffeur et des alertes d'accès (Module 01) ; ajoutez les attentes probables (pont, check-point).",
          "Relevez l'autonomie annoncée de la glacière (cold life) sur la fiche du fabricant, pour le modèle exact.",
          "Règle de prudence : autonomie au moins égale au double de la durée prévue du trajet.",
        ],
      },
      {
        title: 'Calculez le volume',
        actions: [
          "Relevez sur les cartons le volume emballé par flacon ou par dose.",
          "Multipliez par le nombre de flacons, additionnez les diluants et comparez à la capacité utile de la glacière.",
        ],
      },
    ],
    table: {
      columns: ['Produit', 'Flacons', 'Volume emballé par flacon', 'Volume total'],
      rows: [
        ['Rougeole 10 doses', '50', '21 cm³', '1,05 L'],
        ['Penta 10 doses', '30', '35 cm³', '1,05 L'],
        ['Diluants rougeole', '50', '18 cm³', '0,90 L'],
        ['Total à charger', '130', '—', '3,0 L sur 20 L utiles'],
      ],
    },
    example: {
      title: 'Fil rouge — la comparaison durée et autonomie',
      lines: [
        "Durée prévue : départ 06h00, arrivée prévue 14h30 à Kasika, soit 8 h 30.",
        "Autonomie annoncée de la glacière : 48 h (fiche constructeur, à relire sur votre modèle) ; règle de prudence : 2 × 8 h 30 = 17 h → conforme.",
        "Volume : 3,0 L sur 20 L utiles, marge largement suffisante pour accumulateurs et data logger.",
      ],
    },
    result: "Une glacière dont l'autonomie couvre largement le trajet, et un volume vérifié.",
    pitfall: "Annoncer « la glacière tient 48 h » sans l'avoir lu sur la fiche du modèle, ou compter l'autonomie d'un accumulateur mal conditionné. Une autonomie n'est valable que dans les conditions de la fiche.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Conditionner les accumulateurs de froid et préparer la glacière',
    intro: "Mettre des accumulateurs sortis du congélateur directement au contact des flacons peut geler les vaccins : c'est le piège du transport. Vous les conditionnez, c'est-à-dire que vous les laissez revenir à la température où la glace commence à fondre, avant de charger.",
    steps: [
      {
        title: 'Conditionnez',
        actions: [
          "Sortez les accumulateurs du congélateur (congelés depuis au moins 24 heures) et posez-les à l'air libre, à l'ombre.",
          "Attendez que le givre disparaisse et que vous entendiez l'eau bouger lorsque vous secouez un accumulateur.",
          "Essuyez-les et prenez-les uniquement à ce moment-là.",
        ],
      },
      {
        title: 'Préparez la glacière',
        actions: [
          "Disposez le nombre d'accumulateurs prescrit par la notice du modèle contre les parois.",
          "Mettez les flacons dans leurs cartons, ou entourez-les d'un carton fin, pour qu'ils ne touchent jamais l'accumulateur.",
          "Placez le data logger de voyage au milieu des vaccins, après l'avoir démarré.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — préparation du mercredi 18/03 au soir et du jeudi 19/03 à 05h30',
      lines: [
        "Mercredi 18/03, 18h00 : 12 accumulateurs mis au congélateur de la chambre froide de Goma.",
        "Jeudi 19/03, 05h00 : accumulateurs sortis ; 05h30 : conditionnés (givre disparu, eau audible) ; 05h35 : posés contre les parois de la glacière.",
        "05h40 : data logger de voyage LogTag LT-2210 démarré (intervalle 15 min) et posé au milieu des cartons.",
      ],
    },
    result: "Une glacière chargée d'accumulateurs conditionnés et d'un data logger démarré, prête pour le chargement des vaccins.",
    pitfall: "Charger des accumulateurs encore givrés : la couche de vaccins au contact du givre atteint des températures négatives, et la congélation est silencieuse.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: 'Charger, fermer et documenter le départ',
    intro: "Le départ est un transfert de responsabilité : un maillon documente ce qu'il remet, avec un contrôle et une signature, pour que le suivant sache ce qu'il reçoit. Vous passez la check-list de départ avant de fermer la glacière.",
    steps: [
      {
        title: 'Chargez et contrôlez',
        actions: [
          "Sortez les produits de la chambre froide au dernier moment, et chargez immédiatement.",
          "Contrôlez le VVM de chaque flacon avant de le charger et écartez tout flacon au stade 3 ou 4.",
          "Remplissez le bordereau : produit, lot, nombre de flacons, péremption, heure de chargement, température de la chambre froide.",
        ],
      },
      {
        title: 'Fermez et briefez',
        actions: [
          "Fermez la glacière, posez un scellé numéroté et notez son numéro sur le bordereau.",
          "Briefez le chauffeur : glacière jamais ouverte, jamais au soleil, jamais confiée à quelqu'un d'autre ; appel toutes les 2 heures ; arrêt immédiat à signaler.",
          "Prévenez le récepteur de l'heure d'arrivée prévue.",
        ],
      },
    ],
    table: {
      columns: ['Contrôle de départ', 'Fait / Valeur', 'Heure'],
      rows: [
        ['Température de la chambre froide au départ', '5,6°C', '05h45'],
        ['VVM des 80 flacons de vaccin contrôlés (les diluants n’ont pas de VVM)', '80 flacons au stade 1 ; aucun écarté', '05h50'],
        ['Data logger LT-2210 démarré, au centre', 'Oui', '05h40'],
        ['Scellé posé', 'N° 004518', '05h55'],
        ['Chauffeur briefé (ne pas ouvrir, appels toutes les 2 h)', 'Oui', '05h57'],
        ['Départ du convoi', 'Glacière + 1 véhicule de tête', '06h00'],
      ],
    },
    result: "Bordereau signé, scellé numéroté, data logger dans la caisse, chauffeur briefé : la preuve de départ existe.",
    pitfall: "Partir « un peu en avance » sans bordereau parce que le convoi est pressé. Sans signature de départ, plus personne n'est responsable de ce qui arrive entre Goma et Kasika.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Suivre le convoi : contacts, retards et point de repli',
    intro: "Le risque d'un transport, c'est le retard : une file au pont, un check-point, une panne. Vous suivez le convoi par contacts réguliers, et vous avez décidé à l'avance ce que vous faites si l'autonomie risque de ne plus couvrir le trajet.",
    steps: [
      {
        title: 'Suivez',
        actions: [
          "Notez l'heure de chaque contact (toutes les 2 heures) et la position annoncée.",
          "Comparez la progression à la durée prévue ; un retard de plus de 3 heures déclenche une alerte.",
        ],
      },
      {
        title: 'Anticipez le repli',
        actions: [
          "Identifiez avant le départ un point de repli réfrigéré sur la route (ex. l'hôpital général de référence de Lukando), avec accord et contact.",
          "Fixez le critère de repli : l'autonomie restante ne couvre plus le reste du trajet, ou une excursion est constatée au data logger.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — suivi du convoi du 19/03',
      lines: [
        "06h00 départ de Goma ; 08h05 contact : tout va bien, km 38.",
        "11h20 pont de la Musi : file d'attente, franchissement un camion à la fois, 55 minutes d'attente ; contact 11h30.",
        "13h40 check-point de Bweza : contrôle de 10 minutes, aucune exigence envers le véhicule ONG ; contact 13h50.",
        "15h40 arrivée à Kasika, soit 9 h 40 de trajet pour 8 h 30 prévues (+1 h 10) : sous le seuil d'alerte de 3 heures ; le point de repli n'a pas été utilisé.",
      ],
    },
    result: "Un journal de suivi daté du convoi, avec les retards expliqués et la certitude que l'autonomie couvrait le reste du trajet.",
    tip: "Faites suivre le trajet par la même personne du début à la fin : celui qui connaît l'heure de départ de la glacière sait aussi à quelle heure elle ne tiendra plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Réceptionner : lire le data logger, contrôler et transférer en moins d\'une heure',
    intro: "La réception est le seul moment où l'on sait si le transport a préservé le produit. Vous lisez le data logger avant de ranger quoi que ce soit, puis vous décidez : accepté, accepté sous réserve ou refusé et mis en quarantaine.",
    steps: [
      {
        title: 'Contrôlez avant de ranger',
        actions: [
          "Vérifiez le scellé (numéro identique au bordereau) et ouvrez la glacière à l'ombre.",
          "Lisez l'historique du data logger de voyage : début, fin, minimum, maximum, durée hors plage.",
          "Contrôlez les VVM et comptez les flacons par rapport au bordereau.",
        ],
      },
      {
        title: 'Décidez et rangez',
        actions: [
          "Historique en plage et VVM bons : transférez dans le réfrigérateur dans l'heure, notez la température du réfrigérateur au moment du transfert.",
          "Excursion lue : n'intégrez pas les produits au stock utilisable, mettez-les en quarantaine et ouvrez la procédure de rupture (Procédure 5).",
          "Signez le bordereau avec l'heure, et notez la réception dans la colonne G du registre.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — réception du 19/03 à Kasika',
      lines: [
        "15h40 scellé n° 004518 conforme ; 15h45 historique LT-2210 : 06h00–15h40, minimum 3,2°C, maximum 7,4°C, 0 h hors plage.",
        "15h55 contrôle VVM de 80 flacons : stade 1 ; comptage : 50 rougeole + 30 Penta + 50 diluants conforme au bordereau.",
        "16h20 transfert dans le réfrigérateur (température 4,0°C) ; bordereau signé ; G6 complétée ; message à Goma : « Réception Kasika conforme, 16h20 ».",
      ],
    },
    result: "Livrable 7 terminé : un plan de transport, une check-list de départ et une check-list de réception signées, avec l'historique archivé.",
    pitfall: "Ranger d'abord, lire ensuite. Si le data logger montre une excursion, les produits sont déjà mélangés au stock utilisable et la quarantaine devient inapplicable.",
  },

  // ───────────── CAS RÉSOLUS ─────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Dossier Kasika : de l\'installation à la décision, jour par jour',
    scenario: "Mardi 17 mars 2026, un réfrigérateur arrive à Kasika avec un briefing de cinq affirmations non vérifiées. Six jours plus tard, vous avez un registre complet, une excursion traitée et validée, une unité défaillante signalée. Voici ce qui a été fait, pourquoi, et ce que cela a produit.",
    steps: [
      {
        title: 'Mardi 17 et mercredi 18 mars — qualifier avant de charger',
        actions: [
          "17/03 8h30 : unité nommée, fiche ouverte ; 9h15 : Fridge-tag FT-0873 contrôlé (calibration valide, heure réglée, écart glace 0,2°C) ; 9h30 : mise en route à vide.",
          "18/03 9h30 : historique 24 h entre 4,3 et 5,9°C après stabilisation ; unité acceptée ; registre ouvert et testé ; plan de continuité affiché ; planning de relevé écrit.",
        ],
        result: "Livrable 1 et début du livrable 2.",
      },
      {
        title: 'Jeudi 19 mars — transporter et réceptionner',
        actions: [
          "5h30–6h00 : accumulateurs conditionnés, glacière chargée, data logger LT-2210 au centre, scellé n° 004518, convoi parti.",
          "15h40–16h20 : historique du voyage lu (3,2 à 7,4°C, 0 h hors plage) ; VVM contrôlés ; 80 flacons transférés au réfrigérateur, bordereau signé.",
        ],
        result: "Livrable 7 : transport préservé, preuve archivée.",
      },
      {
        title: 'Samedi 21 mars — l\'excursion',
        actions: [
          "14h10 : 8,6°C, statut HORS PLAGE ; 14h15 : porte refermée ; 14h25 : alerte WhatsApp ; 14h35 : 80 flacons isolés et étiquetés.",
          "15h30 : historique téléchargé (3 h 00, maximum 9,4°C, minimum de la période 3,6°C) ; 15h40 : VVM contrôlés ; 15h50 : avis de la pharmacienne référente.",
          "16h30–18h00 : procédure de rupture complétée, décision « utilisable », flacons exposés à utiliser en premier.",
        ],
        result: "Livrables 3, 4 et 5.",
      },
      {
        title: 'Dimanche 22 et lundi 23 mars — valider et signaler',
        actions: [
          "22/03 : validation signée par Dr Kavira, 80 flacons libérés, stock mis à jour.",
          "23/03 17h00 : synthèse lue (4 relevés hors plage au total, dont 3 sur Mubimbi) ; 17h30 : signalement de l'unité de Mubimbi à Jean-Marc Ilunga avec plan d'action.",
        ],
        result: "Livrable 6.",
      },
    ],
    pitfall: "Ce qui se serait passé sans méthode : une excursion de 3 heures découverte le lundi, aucun historique archivé, des vaccins soit détruits « par précaution » soit utilisés sans trace, et une unité de Mubimbi qui aurait perdu un lot entier de vaccins.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le registre et la synthèse finals (lignes 5 à 16, 23/03/2026)',
    scenario: "Extrait de l'onglet « Registre quotidien » à la fin de la semaine. Les statuts sont calculés par les formules ; la colonne G est abrégée pour la lisibilité.",
    steps: [],
    table: {
      columns: ['Ligne', 'Date', 'Unité', 'Matin (°C)', 'Après-midi (°C)', 'Statuts D / F', 'Observations (G)'],
      rows: [
        ['5', '2026-03-18', 'Réfrigérateur PEV - CS Kasika', '4,5', '5,0', 'OK / OK', 'Essai à vide, historique 24 h en plage'],
        ['6', '2026-03-19', 'Réfrigérateur PEV - CS Kasika', '4,0', '5,5', 'OK / OK', 'Vaccins reçus 16h20, logger de voyage en plage'],
        ['7', '2026-03-20', 'Réfrigérateur PEV - CS Kasika', '4,5', '5,0', 'OK / OK', '—'],
        ['8', '2026-03-21', 'Réfrigérateur PEV - CS Kasika', '5,0', '8,6', 'OK / HORS PLAGE', '14h10 porte entrouverte, alerte 14h25, lot isolé'],
        ['9', '2026-03-22', 'Réfrigérateur PEV - CS Kasika', '5,5', '5,0', 'OK / OK', 'Lot en quarantaine levé après validation'],
        ['10', '2026-03-23', 'Réfrigérateur PEV - CS Kasika', '4,5', '5,0', 'OK / OK', '—'],
        ['11', '2026-03-18', 'Réfrigérateur PEV - CS Mubimbi', '5,0', '5,5', 'OK / OK', 'Essai à vide'],
        ['12', '2026-03-19', 'Réfrigérateur PEV - CS Mubimbi', '4,5', '9,2', 'OK / HORS PLAGE', 'Aucune cause trouvée'],
        ['13', '2026-03-20', 'Réfrigérateur PEV - CS Mubimbi', '5,0', '5,5', 'OK / OK', '—'],
        ['14', '2026-03-21', 'Réfrigérateur PEV - CS Mubimbi', '8,5', '5,0', 'HORS PLAGE / OK', 'Aucune cause trouvée'],
        ['15', '2026-03-22', 'Réfrigérateur PEV - CS Mubimbi', '4,5', '5,0', 'OK / OK', '—'],
        ['16', '2026-03-23', 'Réfrigérateur PEV - CS Mubimbi', '9,8', '5,5', 'HORS PLAGE / OK', 'Aucune cause trouvée, signalé à Goma'],
      ],
    },
    result: "Synthèse mensuelle : Kasika 0 / 1 / 1 excursion, min 4,0, max 8,6, moyenne 5,2 ; Mubimbi 2 / 1 / 3, min 4,5, max 9,8, moyenne 6,1 ; TOTAL 2 / 2 / 4, égal au nombre de statuts HORS PLAGE du registre (4).",
    tip: "Contrôle de cohérence à faire chaque fin de semaine : comptez à la main les cellules HORS PLAGE des colonnes D et F ; le chiffre doit être égal à D7 de la synthèse. Sinon, une unité a un nom mal orthographié.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La procédure de rupture finale (Kasika, 21/03/2026, extrait condensé)',
    scenario: "Procédure de rupture de chaîne du froid — Kemora Santé, Lukando. Rédigée le 21/03/2026 par le logisticien terrain ; validée le 22/03/2026 par Dr Joëlle Kavira.",
    steps: [],
    example: {
      title: 'Les six sections telles que remises',
      lines: [
        "1. Équipement et produits : Réfrigérateur PEV - CS Kasika (KS-FR-01), salle de vaccination, data logger FT-0873. Rougeole lot MV-26A114 (50 fl.), Penta lot PT-26B207 (30 fl.) ; 80 flacons.",
        "2. Durée et température : début 2026-03-21 12:30 ; fin 15:30 (détection 14:10) ; minimum 8,1°C (3,6°C sur la période) ; maximum 9,4°C. Source : historique FT-0873.",
        "3. Indicateurs : VVM 78 flacons au stade 1, 2 au stade 2, aucun au point de rejet. Alerte du data logger : non (seuil de 10 h consécutives non atteint ; détection par le registre).",
        "4. Action immédiate : porte refermée 14h15 ; alerte WhatsApp 14h25 ; 80 flacons isolés et étiquetés 14h35 ; Dr Kahindo 14h40 ; Dr Kavira 15h50.",
        "5. Décision : ☒ Produit utilisable. Excursion unique de 3 h 00, maximum 9,4°C, aucune valeur sous 2°C, VVM bons, cumul 3 h 00 sur la vie du lot ; avis Dr Kavira 21/03 15h50 ; flacons exposés à utiliser en premier ; cause : cale de carton, corrigée.",
        "6. Validation : rédigé par logisticien terrain 21/03/2026 ; validé par Dr J. Kavira 22/03/2026.",
      ],
    },
    result: "Une procédure de deux pages au maximum où chaque case est remplie, chaque chiffre est sourcé, la décision est motivée et la validation est datée.",
    tip: "Comparez cette procédure à votre premier réflexe : « Excursion mineure, produit OK ». Entre les deux, il y a la durée, le maximum, le minimum, les VVM, l'avis et la cause — c'est ce qui rend la décision défendable.",
  },

  // ───────────── EXERCICES ─────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Registre et procédure de rupture : cas « Coupure d\'électricité, centre de santé de Rutshuru »',
    instructions: "Contexte (fictif, inspiré de situations rencontrées en RDC) : vous êtes logisticien(ne) d'une ONG médicale internationale, en charge de la chaîne du froid d'un centre de santé appuyé de la zone de santé de Rutshuru (Nord-Kivu), avec un réfrigérateur PEV équipé d'un data logger. Un vendredi soir, une coupure généralisée touche la zone ; le groupe électrogène de secours ne prend le relais que le dimanche en fin de journée. Le lundi 16 mars 2026, vous constatez : relevé du samedi matin non fait ; samedi après-midi 9°C ; dimanche matin 11°C ; dimanche soir, après redémarrage du groupe, 6°C. L'historique du data logger, téléchargé le lundi, montre une sortie de plage continue de vendredi 22h à dimanche 19h, avec un pic à 13°C vers 14h le dimanche. Le VVM de plusieurs flacons du lot est encore dans la zone « utilisable », mais l'un d'eux montre un carré presque aussi foncé que le cercle. Refaites seul(e) les Procédures 2, 4, 5 et 6. Votre version du template contient peut-être déjà une semaine d'exemple (13 au 16 mars, deux unités) : contrôlez-la ligne par ligne contre cet énoncé, ou saisissez-la.",
    steps: [
      { title: 'Posez les faits', actions: ["Recopiez les relevés et l'historique dans un tableau : date, heure, source (registre ou data logger), valeur.", "Listez ce qui manque (numéros de lot, nombre de flacons, avis du référent) et décidez comment le signaler : « à relever sur les flacons », jamais un chiffre inventé."] },
      { title: 'Saisissez le registre', actions: ["Pour l'unité « Réfrigérateur PEV - Rutshuru », du 2026-03-13 au 2026-03-16 : saisissez les relevés en colonnes C et E sans toucher aux colonnes D et F.", "Laissez vide le relevé du samedi matin (ligne 6) et expliquez-le en colonne G ; ajoutez en G les événements du week-end (coupure, redémarrage du groupe, retour à la normale). Le second relevé du dimanche (le soir, 6°C) se saisit en colonne E « Relevé après-midi », avec l'heure réelle en G."] },
      { title: 'Lisez les statuts et la synthèse', actions: ["Vérifiez que les statuts HORS PLAGE apparaissent aux bonnes cases et que le relevé manquant n'affiche aucun « OK ».", "Ouvrez « Synthèse mensuelle » : relevez excursions, minimum, maximum et moyenne de l'unité, puis comparez-les à l'historique (durée, pic de 13°C) et écrivez ce que la synthèse ne vous dit pas."] },
      { title: 'Calculez la durée réelle', actions: ["Calculez la durée de la sortie de plage à partir de l'historique (vendredi 22h à dimanche 19h) et le temps passé au-dessus de 10°C estimé d'après les relevés.", "Écrivez l'écart avec ce que le registre laisserait croire."] },
      { title: 'Complétez les sections 1 à 4 de procedure-rupture-chaine-froid.docx', actions: ["Section 1 : unité et produits, avec les lots à relever.", "Section 2 : début, fin ou détection, minimum et maximum issus de l'historique. Section 3 : VVM de la majorité des flacons et du flacon limite, alerte du data logger. Section 4 : isolement, étiquetage, personnes informées."] },
      { title: 'Choisissez et justifiez la décision (section 5)', actions: ["Passez les quatre questions de la Procédure 5, étape 6, dans l'ordre ; traitez explicitement le flacon limite.", "Décidez pour l'ENSEMBLE du lot et rédigez la justification (durée, température, référence produit, avis consulté ou à consulter), même si l'avis du référent n'est pas encore disponible."] },
      { title: 'Validez et relisez (section 6)', actions: ["Remplissez le cartouche, relisez avec la liste de la diapositive suivante et vérifiez que le document tient en deux pages."] },
    ],
    example: {
      title: 'Modèle de formulation pour la colonne G (relevé manquant)',
      lines: [
        "« Relevé matin manquant — coupure réseau, aucun agent sur site le samedi matin — historique à lire pour le contrôle. »",
      ],
    },
    tip: "Les décisions « utilisable » et « destruction » ont chacune des critères précis ; en leur absence ou sans avis, la quarantaine préventive est la décision défendable, et elle se documente aussi.",
    pitfall: "Retenir le maximum de la synthèse (11°C) comme maximum de l'excursion : le pic est de 13°C et c'est celui-là qui compte dans la section 2.",
    deliverable: "Les deux fichiers complétés : registre-suivi-chaine-du-froid.xlsx avec l'excursion comptabilisée, et procedure-rupture-chaine-froid.docx de deux pages au maximum, avec une décision justifiée et non une simple case cochée.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Plan de transport sous température dirigée : cas Goma → Bweza',
    instructions: "Contexte (fictif) : Kemora Santé doit envoyer à l'unité de Bweza 40 flacons de Penta et 60 flacons de rougeole avec leurs diluants, depuis la chambre froide de Goma, vendredi 27 mars à 6h00 (142 km dont 94 km de piste, pont de la Musi franchi un camion à la fois, check-point de Bweza). Durée estimée par le chauffeur : 9 h 30. Données : Penta 35 cm³ par flacon, rougeole 21 cm³ par flacon, diluants 18 cm³ par ampoule (une par flacon de rougeole) ; glacière de 20 L utiles, autonomie annoncée 24 h ; vous disposez d'un second modèle de glacière à autonomie annoncée de 48 h.",
    steps: [
      { title: 'Calculez le volume', actions: ["Calculez le volume total par produit et au total, et comparez-le aux 20 L utiles.", "Concluez : une glacière suffit-elle ?"] },
      { title: 'Comparez durée et autonomie', actions: ["Appliquez la règle de prudence (autonomie au moins égale au double de la durée prévue) aux deux glacières et choisissez.", "Calculez la marge restante si le convoi perd 6 heures au check-point."] },
      { title: 'Écrivez le plan de chargement', actions: ["Décrivez le conditionnement des accumulateurs (heure de sortie du congélateur, critère de fin de conditionnement), la place du data logger et la séparation vaccins - accumulateurs."] },
      { title: 'Rédigez la check-list de départ', actions: ["Au moins six contrôles avec valeur et heure : température de la chambre froide, VVM, data logger, scellé, briefing du chauffeur, bordereau."] },
      { title: 'Prévoyez le suivi et le repli', actions: ["Fixez les heures de contact, le seuil de retard qui déclenche l'alerte et un point de repli réfrigéré nommé.", "Rédigez le message d'alerte que vous enverriez si le convoi avait 4 heures de retard."] },
      { title: 'Rédigez la check-list de réception', actions: ["Écrivez l'ordre des contrôles à l'arrivée et la règle de décision : accepté, sous réserve ou refusé, en précisant ce que vous faites si le data logger montre 11°C pendant 2 heures."] },
    ],
    deliverable: "Un plan de transport d'une page (calculs, choix de la glacière, conditionnement, suivi, repli) et deux check-lists, départ et réception, avec une règle de décision écrite.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Cinq situations de terrain à trancher',
    instructions: "Pour chacune des situations ci-dessous, écrivez en quatre lignes : le risque, l'action immédiate, ce que vous écrivez (registre, procédure ou message), et la personne à informer.",
    steps: [
      { title: 'Situation A', body: "Le relevé du matin affiche exactement 8,0°C et celui de l'après-midi exactement 2,0°C. Que disent les statuts du registre, et que faites-vous ?" },
      { title: 'Situation B', body: "Le registre indique 9,1°C à 16h00, mais le data logger n'affiche aucune alerte. Un collègue vous dit : « Le logger n'a rien vu, donc c'est une erreur de lecture. »" },
      { title: 'Situation C', body: "Pendant le contrôle d'un carton, un flacon a un VVM dont le carré est de la même couleur que le cercle. La date de péremption est dans huit mois." },
      { title: 'Situation D', body: "À la fin d'une séance, un agent range ses bouteilles d'eau et un échantillon de laboratoire dans le réfrigérateur à vaccins « pour qu'ils ne chauffent pas »." },
      { title: 'Situation E', body: "Vous découvrez que la pile du data logger est morte depuis trois jours ; le registre montre deux relevés par jour, tous dans la plage." },
    ],
    example: {
      title: 'Exemple de ligne attendue (situation déjà traitée dans le module)',
      lines: [
        "« Situation : 8,6°C à 14h10 à Kasika. Risque : excursion en cours sur 80 flacons. Action : porte refermée 14h15, alerte WhatsApp 14h25, flacons isolés 14h35. Trace : G8 du registre et procédure de rupture. À informer : Dr Kahindo, Dr Kavira. »",
      ],
    },
    deliverable: "Une grille de cinq lignes (situation, risque, action immédiate, trace écrite, personne informée), avec pour la situation E une phrase sur ce que vous pouvez et ne pouvez pas affirmer.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Registre : les noms d'unité de la colonne B sont identiques à ceux de la Synthèse, les colonnes D et F contiennent toujours leurs formules, et aucune ligne d'exemple n'a été supprimée avec « Supprimer la ligne ».",
      "Registre : le relevé manquant du samedi matin est une cellule VIDE (pas de 0, pas de valeur recopiée), avec la cause et le responsable en colonne G.",
      "Registre : chaque relevé HORS PLAGE a une observation avec l'heure, la cause connue ou « aucune cause trouvée » et l'action.",
      "Synthèse (cas de Rutshuru) : l'unité affiche 2 relevés hors plage (1 le matin, 1 l'après-midi), minimum 4, maximum 11 ; la chambre froide de l'entrepôt affiche 0.",
      "Procédure : début vendredi 22h, fin dimanche 19h, soit 45 heures de sortie de plage continue, et maximum 13°C (celui de l'historique, pas 11°C).",
      "Procédure : la section 3 distingue la majorité des flacons utilisables du flacon limite, et la décision le traite explicitement.",
      "Procédure : une seule case cochée pour l'ensemble du lot, avec une justification qui reprend durée, température, référence produit et avis consulté ; ni « utilisable » par défaut, ni destruction par réflexe.",
      "Procédure : aucune cellule vide, lots à relever signalés comme tels, cartouche rempli, deux pages au maximum.",
      "Plan de transport : l'autonomie de la glacière retenue est au moins le double de la durée prévue, et le point de repli est nommé.",
      "Grille des situations : chaque situation a une action immédiate, une trace écrite et une personne informée ; la situation E indique ce qui ne peut pas être affirmé.",
    ],
  },

  // ───────────── ERREURS FRÉQUENTES ─────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Ne pas relever la température le week-end ou les jours fériés — « on rattrapera lundi » transforme une excursion de quelques heures en une excursion de 48 h découverte trop tard pour être caractérisée. Parade : planning nominatif avec suppléants (Procédure 2, étape 7).",
      "Se fier à la date de péremption et ignorer un VVM qui a viré — le VVM prime toujours sur la date imprimée. Parade : contrôler le VVM de chaque flacon à la réception et après toute excursion.",
      "Placer les flacons contre la paroi arrière ou près de l'évaporateur — première cause de congélation silencieuse. Parade : rangement avec espaces de 2 cm et produits sensibles au gel au centre (Procédure 1, étape 4).",
      "Stocker des produits non médicaux dans le réfrigérateur à vaccins — boissons, échantillons, repas : ouvertures de porte en plus et causes impossibles à attribuer en cas d'excursion. Parade : affichage et cadenas.",
      "Documenter une coupure sans horaires précis — « coupure de courant le week-end » rend toute évaluation impossible. Parade : horaires lus dans l'historique du data logger (Procédure 4).",
      "Décider seul(e), « à l'oral », sans la procédure écrite — une décision non documentée expose l'organisation et le bénéficiaire. Parade : procédure de rupture complétée, même si le produit est utilisable.",
      "Remettre à zéro ou réutiliser un data logger avant d'avoir téléchargé son historique — l'historique de l'incident est perdu. Parade : télécharger et archiver en deux exemplaires d'abord (Procédure 4, étape 1).",
      "Écraser les formules des colonnes D et F, supprimer des lignes d'exemple ou saisir au-delà de la ligne 40 — la synthèse ne compte plus, sans message d'erreur. Parade : test des formules à l'ouverture et contrôle de cohérence chaque semaine.",
      "Combler un relevé manquant avec une valeur « probable » — un registre complet mais faux est plus grave qu'un registre troué mais honnête. Parade : cellule vide, cause en colonne G, preuve dans l'historique.",
      "Prendre « pas d'alerte » du data logger pour « pas d'excursion » — le seuil peut être long, la pile faible, l'appareil mal placé. Parade : lire l'historique complet, toujours.",
      "Charger des accumulateurs non conditionnés dans la glacière — les flacons gèlent sans signe visible. Parade : conditionnement jusqu'à disparition du givre (Procédure 7, étape 2).",
      "Ranger les produits avant de lire le data logger de voyage — une excursion éventuelle est alors noyée dans le stock utilisable. Parade : lire, contrôler, puis décider et ranger.",
    ],
  },

  // ───────────── RÉCAPITULATIF ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez équipé une unité de froid : fiche d'unité, data logger contrôlé (calibration, pile, heure, seuils, essai dans la glace), essai à vide de 24 h, rangement sans point froid et plan de continuité affiché.",
      "Vous avez ouvert, testé et tenu le registre-suivi-chaine-du-froid.xlsx colonne par colonne : relevés fiables, statuts lus sans écraser les formules, observations datées, relevé manquant tracé et planning de week-end.",
      "Vous avez réagi à un relevé hors plage dans l'heure : confirmation, message WhatsApp avec photos, 80 flacons isolés, étiquetés et listés, escalade avec règle par défaut.",
      "Vous avez exploité l'historique complet d'un data logger : téléchargement archivé, début, fin, durée, minimum et maximum lus dans le fichier, cumul d'exposition du lot et rapprochement avec le registre.",
      "Vous avez rédigé la procedure-rupture-chaine-froid.docx section par section avec une décision motivée, validée par le référent, en deux pages au maximum.",
      "Vous avez lu la Synthèse mensuelle, distingué les excursions expliquées de l'unité défaillante et signalé Mubimbi à la coordination logistique avec un plan d'action.",
      "Vous avez préparé un transport sous température dirigée : volume, autonomie, accumulateurs conditionnés, data logger, check-lists de départ et de réception.",
      "Vous avez refait seul(e) le cas de Rutshuru et tranché cinq situations de terrain avec une trace écrite à chaque fois.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer la différence pratique entre GDP et GSP à un collègue non spécialiste.",
      "Je connais la plage de référence 2-8°C et je sais pourquoi la congélation est aussi dangereuse qu'une chaleur excessive.",
      "Je sais lire un VVM et je sais qu'il prime sur la date de péremption imprimée.",
      "Je sais positionner correctement un data logger, vérifier sa calibration et son heure, et je ne le remets jamais en service avant d'avoir archivé son historique.",
      "J'ai complété un registre de suivi montrant une excursion de température avec le template fourni, sans écraser les formules.",
      "J'ai rédigé une procédure de rupture de chaîne du froid avec une décision motivée, en moins de deux pages.",
      "Je sais identifier, dans un incident réel, les informations manquantes qui empêchent une évaluation fiable (horaires précis, historique complet du data logger, état des VVM).",
      "Je sais calculer l'autonomie nécessaire d'une glacière et préparer un transport avec accumulateurs conditionnés et data logger.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 06 — Coordination, Autorités & Gestion des Douanes : après avoir maîtrisé la température, vous maîtrisez les autorisations — exonérations douanières des ONG, relations avec les autorités locales et les checkpoints, gestion des litiges et des réclamations — pour que vos produits médicaux ne restent pas bloqués à la frontière.",
  },
]
