// Module 07 — Sécurité, Accès & Gestion des Risques
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates) : théorie strictement utile à
// l'action, puis huit procédures découpées en étapes (une diapositive par
// étape) — information sécuritaire, grille d'évaluation des risques, décision,
// négociation d'accès, planification et briefing, communication du convoi,
// reporting d'incident, mise à jour de la grille — appliquées à un cas fil
// rouge (ONG Kemora Santé, convoi Goma–Bweza–Lukando, Nord-Kivu — cas
// fictif, même organisation que le Module 01), cas résolus, exercices sur le
// cas de Rutshuru et check-lists d'auto-contrôle.
export default [
  {
    type: 'cover',
    title: 'Sécurité, Accès & Gestion des Risques',
    hook: "En suivant ce module, vous produirez, pour un vrai convoi, une grille d'évaluation des risques complétée et décidée, un accord d'accès documenté, un plan de communication et un briefing d'équipages, puis la fiche de reporting d'un incident remise dans l'heure — exactement ce qu'un logisticien senior dépose sur le bureau de sa coordination avant d'autoriser un départ, étape par étape.",
  },
  {
    type: 'objectives',
    items: [
      "Collecter et dater l'information sécuritaire d'un itinéraire (chauffeurs, point sécurité, alertes du Logistics Cluster), en produisant une note de situation où chaque fait porte une source, une date et un niveau de fiabilité.",
      "Compléter grille-evaluation-risques-securite.xlsx colonne par colonne (probabilité × impact, atténuation, risque résiduel, alerte, onglet Synthèse), en produisant une grille d'au moins cinq risques dont chaque score est justifié par un fait.",
      "Décider par écrit, risque par risque, entre acceptation, atténuation et évitement, puis rendre une décision Go / Go conditionnel / No-go, en produisant un message de décision daté et une demande de validation hiérarchique pour tout risque résiduel ≥ 4.",
      "Préparer et conduire une négociation d'accès avec un acteur armé selon les principes du CICR sans compromettre la neutralité, en produisant une fiche de préparation et une entrée datée du journal d'accès.",
      "Planifier un itinéraire sécurisé, briefer les équipages et monter le dispositif de communication du convoi, en produisant une fiche de mouvement, une feuille de briefing signée et un groupe WhatsApp avec protocole de silence.",
      "Qualifier un événement (incident ou near-miss) et le reporter dans l'heure avec fiche-reporting-incident.docx, en produisant une fiche factuelle de une à deux pages et une ligne au registre des incidents.",
      "Mettre à jour la grille après chaque mouvement et détecter un motif dans les événements reportés, en produisant une version datée de la grille (v03 sur le fil rouge) et son journal de révision.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne vous demande pas de retenir des définitions : il vous fait produire, dans l'ordre réel d'une préparation de convoi, les huit livrables qu'un logisticien terrain doit avoir en main avant de faire partir des véhicules sur un axe incertain. Chaque livrable est construit étape par étape sur un même cas fil rouge, puis vous le refaites seul sur le cas de Rutshuru.",
    ],
    bullets: [
      "Livrable 1 — Une note de situation de l'itinéraire : chaque fait est daté, sourcé et noté Confirmé / Probable / À confirmer.",
      "Livrable 2 — La grille d'évaluation des risques (xlsx) remplie, avec son onglet Synthèse lu et interprété.",
      "Livrable 3 — Les décisions écrites : acceptation / atténuation / évitement par risque, demande de validation hiérarchique, décision Go / Go conditionnel / No-go.",
      "Livrable 4 — Une fiche de préparation de négociation et une entrée de journal d'accès documentant l'accord obtenu.",
      "Livrable 5 — La fiche de mouvement (horaires, butoirs, points d'arrêt sûrs) et la feuille de briefing des équipages signée.",
      "Livrable 6 — Le dispositif de communication : groupe WhatsApp configuré, format des points de situation, protocole de silence.",
      "Livrable 7 — La fiche de reporting d'incident (docx) remise dans l'heure et la ligne correspondante du registre des incidents.",
      "Livrable 8 — La grille mise à jour après le mouvement (v03 sur le fil rouge) avec son journal de révision.",
    ],
    example: {
      title: 'Le cas fil rouge de tout le module (fictif mais réaliste)',
      lines: [
        "Organisation : Kemora Santé, ONG médicale internationale (fictive), base de Lukando, Nord-Kivu (RDC) — la même que dans les modules précédents. Vous êtes son logisticien(ne) terrain.",
        "Équipe (fictive) : Dr Clarisse Kahindo, coordinatrice de projet à Lukando ; Sylvie Matala, coordinatrice pays ; Jean-Marc Ilunga, coordinateur logistique pays à Goma ; Joseph Katembo, point focal sécurité ; Fabrice Mbusa, chef chauffeur ; Amina Sow, Logistics Cluster Officer Nord-Kivu.",
        "Situation : lundi 11 mai 2026. L'unité de traitement du choléra de Bweza (40 lits, ouverte le 18 mars) n'a plus que 4 jours de sels de réhydratation orale : rupture prévue le lundi 18 mai.",
        "Mouvement à décider : convoi MV-KS-0514, jeudi 14 mai 2026, départ de Goma à 06h00 — 2 camions de 6 t (Transports Umoja) et 1 véhicule léger de tête (V-02 Hilux), 4,6 t de matériel — vers Bweza (km 118) puis Lukando (km 142).",
        "Ce que vous savez : une barrière armée est apparue à Bweza le 4 mai, la piste après Kabati est dégradée par les pluies, et un near-miss a été rapporté oralement. Personne n'a rien écrit.",
      ],
    },
  },
  {
    type: 'concept',
    title: 'Votre point de départ : un point sécurité oral et incomplet',
    body: [
      "Le lundi 11 mai à 8h30, Joseph Katembo vous donne le point sécurité hebdomadaire en dix minutes, debout, entre deux appels. Tout ce qui suit est oral, non daté et non recoupé — c'est la matière première de la Procédure 1.",
    ],
    example: {
      title: 'Ce que vous avez noté dans votre carnet (lundi 11/05, 8h35)',
      lines: [
        "« Il y a une barrière à Bweza depuis une semaine ; les camions commerciaux paient, je crois. »",
        "« Le cluster a parlé d'une piste difficile après Kabati, avec la pluie. »",
        "« Un chauffeur d'EPTK dit qu'on l'a suivi à moto fin avril, mais personne n'a rien écrit. »",
        "« Pas d'incident violent contre des humanitaires sur l'axe ce mois-ci, à ma connaissance. »",
        "« Sylvie veut le convoi jeudi : les SRO de Bweza sont finis lundi prochain. »",
        "« Les chauffeurs d'Umoja connaissent la route par cœur. »",
      ],
    },
    tip: "Recopiez chaque phrase mot pour mot, avec l'heure et le nom de la personne. Vous allez les transformer en faits datés : sans trace écrite, vous ne saurez plus ce qui était vu de ses yeux et ce qui était « je crois ».",
  },
  {
    type: 'stat-callout',
    stat: '60 min',
    caption: "Le délai dans lequel un incident ou un near-miss doit être reporté par écrit à la coordination sécurité : au-delà, l'information perd sa valeur opérationnelle.",
    context: "Ce délai ne s'improvise pas : il se prépare avant le départ (fiche vierge dans chaque véhicule, liste de diffusion connue, groupe de communication actif).",
  },
  {
    type: 'concept',
    title: 'La logique probabilité × impact : ce que la grille doit produire',
    body: [
      "Beaucoup de logisticiens juniors traitent l'évaluation des risques comme une formalité, une case à cocher avant de partir. Une bonne évaluation répond à une seule question opérationnelle : ce mouvement vaut-il la peine d'être fait, et si oui, dans quelles conditions ?",
      "La méthode note chaque risque sur deux axes de 1 (très faible) à 5 (très élevé). La probabilité s'appuie sur des faits récents (incidents des 30 derniers jours, alertes du Logistics Cluster, retours des chauffeurs), jamais sur une impression. L'impact s'évalue sur la vie humaine d'abord, puis sur les biens et la continuité de la mission.",
    ],
    bullets: [
      "Score = probabilité × impact, sur une échelle de 1 à 25 : il hiérarchise, il ne décide pas.",
      "Un score élevé ne veut pas dire « on n'y va pas » : il veut dire « on n'y va pas sans mesure d'atténuation, ou on y va autrement ».",
      "Chaque risque significatif appelle une décision explicite, écrite, avec un responsable.",
    ],
    example: {
      title: 'Fil rouge — un même fait, deux lectures',
      lines: [
        "Impression : « La barrière de Bweza est embêtante mais on passera. »",
        "Fait chiffré : barrière installée le 04/05, péage de 10 000 FC (environ 3,50 USD) exigé aux véhicules commerciaux, inspection du chargement demandée depuis le 08/05 → probabilité 4, impact 4, score 16.",
      ],
    },
    pitfall: "Remplir la grille pour « cocher la case » après avoir décidé de partir. La grille se remplit avant la décision, et elle peut la renverser.",
  },
  {
    type: 'comparison-table',
    title: 'Échelles de cotation : de quoi parle-t-on quand on écrit 1, 3 ou 5',
    columns: ['Note', 'Probabilité (fondée sur des faits)', "Impact (conséquence réaliste la plus grave)"],
    rows: [
      ['1', "Aucun événement semblable connu sur cet axe depuis 12 mois.", "Gêne sans conséquence : quelques minutes de retard."],
      ['2', "Événement isolé, ancien (plus de 30 jours) ou vécu ailleurs.", "Retard inférieur à une journée ; perte matérielle mineure et récupérable."],
      ['3', "Un événement dans les 30 derniers jours, ou information crédible non confirmée.", "Immobilisation d'un jour ou plus ; perte de matériel ; blessure légère."],
      ['4', "Plusieurs événements dans les 30 jours, ou situation installée qui touche déjà d'autres acteurs.", "Blessure grave ; perte du chargement ou d'un véhicule ; suspension des mouvements dans la zone."],
      ['5', "Événement quasi systématique à chaque passage, ou déjà vécu par notre équipe.", "Décès, enlèvement ou perte durable de l'accès à la zone."],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Lire un score : les quatre bandes de sévérité et le seuil d\'alerte',
    columns: ['Bande (onglet Synthèse)', 'Score P × I', 'Ce que cela impose', 'Seuil à connaître'],
    rows: [
      ['Faible', '1 à 5', "Précautions standard ; risque pouvant être accepté s'il est écrit.", "—"],
      ['Modéré', '6 à 10', "Mesure simple et documentée, contrôlée avant le départ.", "—"],
      ['Élevé', '11 à 15', "Mesure d'atténuation concrète obligatoire, avec responsable.", "Dans la grille, un score de 15 ou plus est surligné en rouge."],
      ['Critique', '16 à 25', "Décision explicite et revue par le point focal sécurité ; plusieurs risques critiques interdisent de s'appuyer sur un score moyen rassurant.", "Dans la Synthèse, la bande Critique commence à 16."],
      ['Alerte (colonne G)', 'Risque résiduel ≥ 4', "Validation hiérarchique obligatoire avant le départ : jamais géré seul par le logisticien.", "Le message « à valider hiérarchie » se déclenche sur le résiduel, pas sur le score."],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Trois stratégies face à un risque : accepter, atténuer, éviter',
    columns: ['Stratégie', 'Quand la choisir', 'Exemple sur le fil rouge', 'Ce que vous écrivez dans la grille'],
    rows: [
      ['Acceptation', "Le risque est faible, ou la mission critique, et rien de plus qu'une précaution standard n'est utile.", "Pillage nocturne d'un camion commercial (score 6) : chargement bâché et scellé, pas de circulation de nuit.", "« ACCEPTATION » + les précautions standard + la raison, noir sur blanc."],
      ['Atténuation', "Une mesure concrète réduit la probabilité ou l'impact : c'est la stratégie la plus fréquente.", "Barrière de Bweza : accord d'accès préalable, convoi groupé, manifeste présenté, aucun paiement.", "« ATTÉNUATION » + mesure précise + responsable + échéance + risque résiduel."],
      ['Évitement', "Aucune mesure ne ramène le risque à un niveau acceptable : on change d'itinéraire, de mode, de calendrier, ou on renonce.", "Si l'accord d'accès n'est pas obtenu et que la barrière devient tenue de façon hostile : report du convoi.", "« ÉVITEMENT » + ce qui est abandonné + qui a validé (zone no-go : direction pays)."],
    ],
  },
  {
    type: 'concept',
    title: 'Le risque résiduel : le chiffre qui guide la décision',
    body: [
      "Le risque résiduel est le niveau qui subsiste après application des mesures d'atténuation. C'est ce chiffre, pas le score initial, qui guide la décision de partir ou non, et il se révise après chaque mouvement, pas une seule fois.",
      "Distinguez deux familles de mesures. L'atténuation agit sur les conditions du mouvement : reconnaissance préalable, convoi groupé, horaires, négociation d'accès. La dissuasion (deterrence) décourage une menace par une présence ou une communication visible : signalisation humanitaire claire sur les véhicules, manifeste présenté. Les deux comptent, mais la dissuasion seule ne ramène presque jamais un score de 16 à un niveau acceptable.",
    ],
    example: {
      title: 'Fil rouge — la barrière de Bweza avant et après mesures',
      lines: [
        "Score initial : 4 × 4 = 16 (Critique).",
        "Mesures sous votre contrôle (convoi groupé, marquage, manifeste, zéro paiement) : résiduel 4 → alerte, validation hiérarchique obligatoire.",
        "Après un accord d'accès obtenu et documenté : résiduel 3 → départ possible sous condition de reconfirmation.",
      ],
    },
    highlight: "Une mesure qui dépend d'un tiers (un accord d'accès) ne compte dans le résiduel qu'une fois obtenue.",
  },
  {
    type: 'comparison-table',
    title: 'Qui décide quoi : votre rôle dans la chaîne de décision sécurité',
    columns: ['Décision', 'Qui décide', 'Votre rôle de logisticien'],
    rows: [
      ['Faire partir ou non le convoi', "La coordinatrice, sur proposition du logisticien, avec l'avis du point focal sécurité.", "Vous proposez une décision Go / Go conditionnel / No-go écrite, justifiée par la grille."],
      ['Risque résiduel de 4 ou 5', "La hiérarchie (coordinatrice pays), avant tout départ.", "Vous déclenchez la remontée écrite ; vous n'autorisez jamais seul."],
      ['Zone no-go : décréter ou déroger', "La direction pays, exclusivement.", "Vous proposez ; vous n'accordez jamais de dérogation."],
      ['Escorte armée', "La coordination humanitaire : dernier recours, jamais le logisticien (lignes directrices IASC, 2013).", "Vous documentez le besoin et vous transmettez ; vous ne l'organisez pas."],
      ['Négocier un accès avec un acteur armé', "Mandat donné par la coordinatrice.", "Vous préparez, vous conduisez la partie pratique dans les limites écrites, vous documentez."],
      ['Arrêter un convoi en route', "Le chef de convoi, et tout équipier qui estime la situation dangereuse.", "Vous faites écrire ce droit d'arrêt dans le briefing."],
    ],
  },
  {
    type: 'concept',
    title: "Pourquoi le reporting d'incident n'est pas de la paperasse",
    body: [
      "Un rapport d'incident a deux fonctions vitales. La première est l'accountability immédiate : la coordination sécurité et la direction pays doivent savoir dans l'heure ce qui s'est passé, qui est impliqué et quelle action est déjà prise, pas l'apprendre trois jours plus tard par une rumeur. La seconde est la détection de motifs à l'échelle de la mission : un incident isolé est une anecdote, cinq incidents semblables sur le même tronçon en un mois sont un signal qui doit changer une décision.",
      "Un incident est un événement sécuritaire réalisé avec conséquence. Un near-miss est un événement qui aurait pu en avoir une mais a été évité de justesse. Les deux se reportent selon la même procédure, avec la même rigueur : un near-miss non reporté est une information perdue qui aurait pu éviter le prochain incident, réel celui-là.",
    ],
    example: {
      title: 'Fil rouge — ce que le near-miss non écrit a coûté',
      lines: [
        "30/04, vers 18h20 : deux motos suivent un véhicule d'EPTK de Bweza au km 110 ; le chauffeur accélère. Rapporté à l'oral le 05/05 seulement.",
        "Conséquence : le 11/05, la grille de risques n'en contient aucune trace. Sans votre enquête de la Procédure 1, ce risque n'aurait jamais été coté.",
      ],
    },
    tip: "Rendez le reporting sans risque pour celui qui le fait : un near-miss bien reporté protège la prochaine équipe, il ne sanctionne pas la précédente. Dites-le au briefing, et tenez-le.",
  },
  {
    type: 'comparison-table',
    title: "Les principes du CICR pour négocier un accès avec un acteur armé",
    columns: ['Principe', 'Ce que cela change concrètement', 'Application au fil rouge (barrière de Bweza)'],
    rows: [
      ['Dialoguer avec tous ceux qui contrôlent l\'accès', "Sans exception ni préférence, y compris des acteurs dont on désapprouve les méthodes ; refuser par principe revient souvent à abandonner les populations.", "Vous cherchez le contact du chef du poste de Bweza, vous ne contournez pas la barrière en attendant qu'elle disparaisse."],
      ['Contenu strictement humanitaire', "Accès, sécurité du personnel et des convois, respect du matériel médical ou alimentaire ; tout glissement politique ou militaire est recadré ou interrompu.", "Si le chef du poste parle de la situation locale, vous revenez à : « Nous transportons du matériel médical pour le centre de traitement de Bweza. »"],
      ['Transparence sur le mandat', "L'acteur armé doit comprendre qui vous êtes, ce que vous transportez et pourquoi : l'ambiguïté sur le contenu est une cause fréquente d'incidents évitables.", "Manifeste imprimé, remis et expliqué ; inspection visuelle proposée avant qu'elle ne soit exigée."],
      ['Aucune contrepartie au-delà du passage', "Ni paiement disproportionné, ni service dépassant le cadre logistique, ni transport de personnes ou de matériel non humanitaire.", "Refus poli et constant du péage de 10 000 FC, des passagers et des « cartons pour les hommes »."],
      ['Accord documenté et daté', "Un accord verbal avec un chef peut ne plus être reconnu par son successeur ou par un poste voisin trois semaines plus tard.", "Entrée du journal d'accès le jour même, reconfirmation par téléphone avant chaque mouvement."],
    ],
  },
  {
    type: 'concept',
    title: "Neutralité ne veut pas dire passivité : négocier, documenter, avancer",
    body: [
      "Le Module 01 l'a posé : rester neutre ne signifie pas refuser de parler aux acteurs armés qui contrôlent l'accès à une zone. La neutralité encadre COMMENT vous négociez, pas SI vous le faites. Le piège classique est de confondre prudence et paralysie : attendre une confirmation officielle et complète qui n'existera jamais dans un contexte instable.",
      "Le professionnel expérimenté négocie, documente et avance avec un risque résiduel géré. Il n'attend pas une garantie ; il fabrique les conditions d'un départ défendable, et il renonce quand elles ne sont pas réunies.",
    ],
    example: {
      title: 'Fil rouge — la même situation, deux réflexes',
      lines: [
        "Réflexe de paralysie : « Attendons que le cluster nous dise que la barrière est levée. » → les SRO de Bweza sont épuisés le 18/05.",
        "Réflexe professionnel : « Contactons le chef du poste via le médecin chef de zone, documentons ce qu'il accepte, partons avec un résiduel de 3 et des conditions de repli écrites. »",
      ],
    },
    highlight: "Une zone no-go et un report de convoi sont des décisions d'évitement légitimes : rarement populaires, souvent vitales.",
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire opérationnel du module',
    terms: [
      { term: 'Probabilité × impact', definition: "Méthode de cotation : deux notes de 1 à 5, dont le produit (1 à 25) hiérarchise les risques." },
      { term: 'Acceptation / atténuation / évitement', definition: "Les trois réponses face à un risque : continuer sans changement, réduire le risque par une mesure concrète, ou renoncer au mouvement tel que prévu." },
      { term: 'Risque résiduel', definition: "Niveau de risque qui subsiste une fois les mesures appliquées ; il guide la décision finale et se révise après chaque mouvement." },
      { term: 'Stratégie de dissuasion (deterrence)', definition: "Mesure qui décourage une menace par une présence ou une communication visible (signalisation humanitaire, manifeste présenté), distincte de l'atténuation." },
      { term: 'Zone no-go', definition: "Zone où aucun mouvement n'est autorisé sans dérogation explicite de la direction pays, le risque étant jugé inacceptable même après atténuation." },
      { term: 'Incident / near-miss', definition: "Incident : événement sécuritaire réalisé avec conséquence. Near-miss : événement évité de justesse. Les deux se reportent selon la même procédure." },
      { term: 'Proof of life protocol', definition: "Procédure prédéfinie permettant de confirmer, en cas d'enlèvement ou de disparition, qu'une personne est en vie, par des questions dont seule elle connaît la réponse." },
      { term: 'Journal d\'accès', definition: "Registre daté des alertes reçues, des accords d'accès obtenus et de leur validité, tenu depuis le Module 01." },
      { term: 'Fiche de mouvement', definition: "Page unique décrivant un convoi : itinéraire, équipage, véhicules, chargement, horaires, butoirs, contacts, décision." },
      { term: 'Point de situation (check-in)', definition: "Message ou appel à heure fixe du convoi vers la base ; l'absence d'un check-in est elle-même une alerte." },
      { term: 'Registre des incidents', definition: "Tableau Excel tenu sur la durée de la mission qui rassemble tous les incidents et near-miss pour faire apparaître les motifs." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Votre feuille de route : de l\'information brute au convoi autorisé',
    columns: ['Procédure', 'Quand', 'Livrable produit'],
    rows: [
      ['1 — Collecter et dater l\'information sécuritaire', 'J−3, avant de remplir la moindre case', 'Note de situation de l\'itinéraire'],
      ['2 — Compléter la grille d\'évaluation des risques', 'J−3', 'grille-evaluation-risques-securite.xlsx v01 + lecture de la Synthèse'],
      ['3 — Décider : acceptation, atténuation, évitement', 'J−3', 'Décisions par risque, demande de validation, décision Go / Go conditionnel / No-go'],
      ['4 — Négocier et documenter l\'accès', 'J−2', 'Fiche de préparation + entrée du journal d\'accès'],
      ['5 — Planifier l\'itinéraire et briefer les équipages', 'J−2 à J−1', 'Fiche de mouvement + feuille de briefing signée'],
      ['6 — Mettre en place la communication du convoi', 'J−1', 'Groupe WhatsApp + protocole de silence testé'],
      ['7 — Reporter un incident ou un near-miss', 'Dans l\'heure suivant l\'événement', 'fiche-reporting-incident.docx + ligne de registre'],
      ['8 — Mettre à jour la grille après le mouvement', 'J+1', 'Grille mise à jour (v03) + journal de révision'],
    ],
  },

  // ───────────── PROCÉDURE 1 — Collecter et dater l'information sécuritaire ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 4',
    title: 'Cadrer le mouvement et découper l\'itinéraire en tronçons',
    intro: "Lundi 11 mai, J−3. On ne collecte pas « de l'information sur la sécurité » en général : on collecte sur un mouvement précis, tronçon par tronçon. Vous avez besoin de la demande du programme, de la liste du chargement, de la date souhaitée et de votre journal d'accès (celui du Module 01).",
    steps: [
      {
        title: 'Écrivez la fiche de cadrage',
        actions: [
          "Ouvrez votre journal d'accès et créez une entrée « MV-KS-0514 » (MV = mouvement, KS = Kemora Santé, 0514 = date du départ).",
          "Notez : origine, destination, itinéraire prévu avec les kilométrages, date et heure souhaitées, nombre et type de véhicules, nature et poids du chargement, noms de l'équipage.",
          "Notez l'échéance du programme et sa raison (rupture de SRO à Bweza le 18/05) sur une ligne à part : elle explique le calendrier, elle ne modifiera aucun score.",
        ],
      },
      {
        title: 'Découpez en tronçons',
        actions: [
          "Dessinez l'axe sur une feuille avec les kilométrages (Goma km 0, pont de la Musi km 97, Kabati km 104, Bweza km 118, Lukando km 142).",
          "Un tronçon = un type de route + un risque dominant : coupez là où la nature de la route ou du risque change.",
          "Numérotez les tronçons : vous les retrouverez dans la grille, la fiche de mouvement et le briefing.",
        ],
      },
    ],
    table: {
      columns: ['Tronçon', 'Kilométrage', 'Nature', 'Point d\'attention connu au 11/05'],
      rows: [
        ['1 — Goma → pont de la Musi', 'km 0–97', '48 km de goudron, 49 km de piste', "Pont franchi un camion à la fois (traité aux Modules 01 à 03)"],
        ['2 — Musi → Kabati', 'km 97–104', 'Piste', "Aucun fait récent connu"],
        ['3 — Kabati → Bweza', 'km 104–118', 'Piste dégradée', "Camion enlisé ; pas de réseau téléphonique"],
        ['4 — Barrière de Bweza', 'km 118', 'Point de contrôle', "Barrière apparue le 04/05"],
        ['5 — Bweza → Lukando', 'km 118–142', 'Piste', "Near-miss du 30/04 ; pillage du 02/05 au km 121"],
      ],
    },
    result: "Une fiche de cadrage datée et cinq tronçons numérotés : vous savez exactement sur quoi porte chaque information que vous allez chercher.",
    pitfall: "Collecter l'information sur « la route de Goma » en bloc. Vous aurez dix anecdotes et aucune ne sera rattachée à un tronçon, donc aucune ne sera cotable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 4',
    title: 'Interroger les chauffeurs et le staff national avec sept questions',
    intro: "Un chauffeur qui fait l'axe trois fois par semaine sait, avant tout rapport officiel, qu'une barrière est apparue ou qu'un pont s'est affaissé. Vous l'interrogez AVANT de lire les rapports, pour ne pas orienter ses réponses. Prévoyez quinze minutes par personne, en face à face.",
    steps: [
      {
        title: 'Choisissez au moins trois personnes',
        actions: [
          "Un chauffeur du transporteur qui a parcouru l'axe cette semaine (Transports Umoja).",
          "Fabrice Mbusa, chef chauffeur de Kemora Santé, et un membre du staff national de la base de Lukando.",
          "Si possible, un chauffeur d'une autre organisation présente sur l'axe (EPTK, AMK).",
        ],
      },
      {
        title: 'Posez les sept mêmes questions, dans cet ordre',
        actions: [
          "1. Quand avez-vous parcouru l'axe pour la dernière fois (date, heure de passage) ?",
          "2. Qu'est-ce qui a changé depuis votre passage précédent ?",
          "3. Qui tient chaque barrière, que demande-t-on aux véhicules, à qui s'adresse-t-on ?",
          "4. À quelle heure ne passe-t-on plus, et pourquoi ?",
          "5. Y a-t-il eu des événements dont personne n'a fait de rapport (poursuite, menace, vol, retenue) ?",
          "6. Quels tronçons posent problème avec la pluie ?",
          "7. Qui d'autre a passé récemment, et comment cela s'est-il passé ?",
          "Pour chaque réponse, notez : la date, le nom, et « vu de ses yeux » ou « entendu dire ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — trois entretiens du 11/05 (extraits)',
      lines: [
        "Désiré Safari, chauffeur Umoja (passé le 08/05, vu) : « La barrière de Bweza est une chaîne, six à huit hommes armés. Ils veulent 10 000 FC par camion et voir le chargement. Après 17h personne ne passe. »",
        "Fabrice Mbusa (observation directe le 29/04, vu) : « Entre Kabati et Bweza, pas de réseau sur environ 14 km. » ; (entendu le 05/05, chef chauffeur EPTK) : « Un de leurs chauffeurs a été suivi par deux motos vers 18h20 le 30/04, du km 118 au km 110. »",
        "Gloria Kavira, magasinière de Lukando (entendu, 10/05) : « Un camion de vivres a été pillé de nuit au km 121, avant le week-end. »",
      ],
    },
    result: "Trois entretiens notés avec date et nom, chaque affirmation étant marquée « vu » ou « entendu dire ». Vous avez déjà trois informations que le point sécurité oral ne contenait pas.",
    tip: "Ne citez jamais un chauffeur par son nom dans un groupe ouvert ou un document largement diffusé : protéger vos sources, c'est garantir que les chauffeurs continueront de vous parler.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 4',
    title: 'Rassembler les sources officielles et recouper chaque fait important',
    intro: "Les chauffeurs vous donnent la réalité fraîche ; les sources officielles vous donnent la mémoire et la vue d'ensemble. Un fait n'est fiable que s'il est confirmé par deux sources indépendantes, ou observé directement et récemment.",
    steps: [
      {
        title: 'Collectez les sources officielles',
        actions: [
          "Appelez Joseph Katembo (point focal sécurité) et demandez : derniers incidents sur l'axe (30 jours), points de contrôle connus, zones à éviter, heures limites.",
          "Ouvrez les alertes du Logistics Cluster reçues depuis l'enregistrement du Module 01 : tronçon, nature, date, validité.",
          "Demandez à Amina Sow s'il existe une alerte d'accès plus récente que celle de votre journal.",
          "Consultez le compte rendu de la dernière réunion de coordination (OCHA, cluster) pour toute mention de l'axe.",
        ],
      },
      {
        title: 'Recoupez',
        actions: [
          "Pour chaque fait, listez ses sources et vérifiez qu'elles sont indépendantes (deux personnes qui se répètent ne comptent que pour une).",
          "Un fait à une seule source reste « à confirmer » tant qu'une seconde source ou une observation directe ne l'a pas validé.",
          "Interrogez aussi l'absence : « Pas d'incident signalé » est une information à dater, pas une preuve de sécurité.",
        ],
      },
    ],
    table: {
      columns: ['Fait', 'Source 1', 'Source 2', 'Statut'],
      rows: [
        ['Barrière armée à Bweza depuis le 04/05, péage et inspection', 'Point sécurité 11/05 (J. Katembo)', 'Chauffeur Umoja, passage du 08/05', 'Confirmé'],
        ['Piste Kabati–Bweza dégradée, camion enlisé du 06 au 08/05', 'Alerte Logistics Cluster 09/05', 'Chauffeur Umoja 11/05', 'Confirmé'],
        ['Suivi par deux motos le 30/04, 18h20', 'Chef chauffeur EPTK, indirect, 05/05', '—', 'À confirmer'],
        ['Pillage nocturne d\'un camion de vivres au km 121, 02/05', 'Point sécurité 11/05', '—', 'Probable'],
        ['Aucun incident violent contre du personnel humanitaire en 30 jours', 'Point sécurité 11/05', '—', 'Probable'],
      ],
    },
    result: "Chaque fait important est rattaché à deux sources ou marqué comme fragile. Le near-miss d'EPTK est le fait le plus fragile et le plus grave : il appelle une demande de rapport écrit.",
    pitfall: "Écarter le near-miss d'EPTK parce qu'il n'est pas confirmé. Une information crédible à une seule source se cote avec prudence ; elle ne s'élimine pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 4',
    title: 'Rédiger la note de situation de l\'itinéraire, datée et notée',
    intro: "La note de situation est la seule matière que vous utiliserez pour remplir la grille. Elle transforme vos carnets en lignes exploitables : fait précis, tronçon, source, date de l'information, validité, fiabilité.",
    steps: [
      {
        title: 'Écrivez une ligne par fait',
        actions: [
          "Format : Fait précis — tronçon — source — date de l'information — valable jusqu'à — fiabilité.",
          "Classez les lignes par tronçon, dans l'ordre du trajet.",
          "Fiabilité : Confirmé (deux sources indépendantes ou observation directe de moins de 7 jours), Probable (une source directe fiable), À confirmer (rumeur ou source indirecte).",
        ],
      },
      {
        title: 'Ajoutez ce que vous ne savez pas',
        actions: [
          "Listez les inconnues qui comptent : « Qui tient la barrière ? », « Quand et où exactement le near-miss ? ».",
          "Pour chaque inconnue : la personne à interroger et l'échéance.",
          "Envoyez la note à Joseph Katembo pour contrôle avant de coter quoi que ce soit.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait de la note de situation, lundi 11/05, 12h30',
      lines: [
        "T3 Kabati–Bweza — piste dégradée, camion enlisé du 06 au 08/05 — alerte cluster 09/05 + chauffeur Umoja 11/05 — valable jusqu'à nouvelle alerte ou reconnaissance — CONFIRMÉ.",
        "T3 — aucun réseau téléphonique du km 104 au km 118 — F. Mbusa (vu, 29/04) + chauffeur Umoja (11/05) — permanent — CONFIRMÉ.",
        "T4 Bweza — barrière à chaîne depuis le 04/05, 6 à 8 hommes armés, péage 10 000 FC aux véhicules commerciaux, inspection du chargement depuis le 08/05 ; véhicules ONG passés sans payer après contrôle de papiers — point sécurité 11/05 + chauffeur Umoja — CONFIRMÉ.",
        "T5 Bweza–km 110 — deux motos suivent un véhicule EPTK vers 18h20 le 30/04 — chef chauffeur EPTK, indirect, 05/05 — À CONFIRMER.",
        "Inconnues : qui commande la barrière ; date, lieu et nature exacts du near-miss → demander une fiche écrite à EPTK avant le 12/05 midi.",
      ],
    },
    result: "Livrable 1 terminé : une note de situation dont chaque ligne est datée, sourcée et notée, avec la liste de ce que vous ignorez encore.",
    tip: "Datez aussi la validité. « Valable jusqu'à nouvelle alerte » est une réponse honnête ; « valable » tout court n'en est pas une.",
  },

  // ───────────── PROCÉDURE 2 — Grille d'évaluation des risques (xlsx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 8',
    title: 'Ouvrir, renommer et préparer le template de grille',
    intro: "Lundi 11 mai, 14h00. Le template grille-evaluation-risques-securite.xlsx contient deux onglets : « Grille d'évaluation » (en-têtes en ligne 5, trois exemples en lignes 6 à 8, lignes vierges de 9 à 20, soit 15 lignes de risque) et « Synthèse » (calculée automatiquement). Vous avez besoin de la note de situation de la Procédure 1.",
    steps: [
      {
        title: 'Préparez votre copie',
        actions: [
          "Ouvrez le fichier et enregistrez-le immédiatement sous AAAA-MM-JJ_Grille-risques_[Itinéraire]_v01.xlsx.",
          "Repérez les 7 colonnes de la ligne 5 : A Risque identifié, B Probabilité (1-5), C Impact (1-5), D Score (P × I), E Mesure d'atténuation, F Risque résiduel (1-5), G Alerte.",
          "Lisez les 3 exemples (lignes 6 à 8) : checkpoint armé 4 × 5, tronçon non entretenu 3 × 3, zone d'embuscade récente 2 × 5. Ce sont des modèles de rédaction, pas des données de votre mission.",
          "Repérez que D et G sont des formules : on ne tape jamais dedans. B, C et F n'acceptent que des nombres entiers.",
        ],
      },
      {
        title: 'Videz les exemples sans casser les formules',
        actions: [
          "Sélectionnez A6:C8 puis appuyez sur Suppr ; faites de même pour E6:F8. Ne touchez pas aux colonnes D et G.",
          "Copiez D9 (Ctrl+C), sélectionnez D6:D8 et collez : les lignes vidées n'afficheront plus « 0 ». Faites de même avec G9 vers G6:G8.",
          "Si vous avez plus de 15 risques, insérez des lignes AU-DESSUS de la ligne 20 et recopiez les formules D et G : l'onglet Synthèse ne lit que D6:D20 et F6:F20.",
        ],
      },
    ],
    pitfall: "Saisir un risque en ligne 21 ou en dessous, ou taper un score à la main en colonne D : la Synthèse ne le compte plus, sans aucun message d'erreur.",
    result: "Un fichier v01 daté, aux lignes 6 à 20 vides, dont les formules de score, d'alerte et de synthèse sont intactes.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 8',
    title: 'Colonne A — Rédiger chaque risque de façon précise et factuelle',
    intro: "Le texte de la colonne A doit permettre à quelqu'un qui ne connaît pas l'axe de savoir ce qui peut arriver, où, et d'où vient l'information. « Route dangereuse » n'est pas un risque : c'est une impression.",
    steps: [
      {
        title: 'Utilisez la formule en 4 éléments',
        actions: [
          "Quoi : l'événement redouté, nommé précisément (barrière tenue par un groupe armé, enlisement, poursuite).",
          "Où : le tronçon et le kilométrage.",
          "Depuis quand : la date du fait ou de l'alerte.",
          "Source : qui l'a dit, avec le statut Confirmé / Probable / À confirmer.",
        ],
      },
      {
        title: 'Une ligne = un risque',
        actions: [
          "Ne fusionnez pas deux risques dans une cellule : leurs scores et leurs mesures diffèrent.",
          "Reprenez les faits de votre note de situation, un par ligne, en commençant par ceux de statut Confirmé.",
          "N'oubliez pas les faits « À confirmer » graves : ils méritent leur ligne.",
        ],
      },
    ],
    table: {
      columns: ['Rédaction à bannir', 'Rédaction attendue en colonne A'],
      rows: [
        ['Route dangereuse', "Piste Kabati–Bweza (km 104–118) dégradée par les pluies : camion enlisé du 06 au 08/05 (cluster 09/05 + chauffeur Umoja 11/05) — Confirmé"],
        ['Problème à Bweza', "Barrière tenue par un groupe armé non identifié à Bweza (km 118), installée le 04/05 ; péage de 10 000 FC et inspection du chargement exigés (point sécurité 11/05 + chauffeur Umoja 08/05) — Confirmé"],
        ['Rumeur de moto', "Near-miss non confirmé : deux motos ont suivi un véhicule EPTK du km 118 au km 110 vers 18h20 le 30/04 (indirect, chef chauffeur EPTK, 05/05) — À confirmer"],
      ],
    },
    result: "Cinq lignes de risque rédigées, chacune pouvant être lue seule par un collègue qui n'était pas à votre briefing.",
    pitfall: "Écrire « risque de checkpoint ». Quel checkpoint, depuis quand, qui le dit ? Dans trois semaines, vous ne pourrez plus ni le coter ni le réviser.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 8',
    title: 'Colonne B — Coter la probabilité à partir des faits',
    intro: "La probabilité répond à : à quelle fréquence ce risque se matérialise-t-il réellement sur ce type d'itinéraire, dans ce contexte, à cette période ? Elle s'appuie sur des faits récents, jamais sur une impression ni sur le calendrier du programme.",
    steps: [
      {
        title: 'Comptez avant de coter',
        actions: [
          "Pour chaque risque, comptez les événements semblables des 30 derniers jours sur le même tronçon (note de situation, registre, point sécurité, cluster).",
          "Relevez le plus récent et le nombre d'acteurs touchés.",
        ],
      },
      {
        title: 'Choisissez la note dans l\'échelle',
        actions: [
          "Reportez-vous à l'échelle : 1 aucun précédent en 12 mois ; 2 isolé ou ancien ; 3 un événement dans les 30 jours ou information crédible non confirmée ; 4 plusieurs événements ou situation installée touchant d'autres acteurs ; 5 quasi systématique.",
          "Règle de prudence de ce module : une information crédible non confirmée ne descend pas sous 3 tant qu'une source directe ne l'a pas démentie.",
          "Saisissez la note en colonne B et écrivez dans votre journal le fait qui la justifie.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — les cinq probabilités et leur justification',
      lines: [
        "Barrière de Bweza : 4 — installée depuis 7 jours, péage et inspection exigés de façon répétée, deux ONG ont déjà été contrôlées (06 et 08/05).",
        "Piste Kabati–Bweza : 4 — un camion enlisé 2 jours dans les 10 derniers jours, pluies encore attendues.",
        "Zone sans réseau : 4 — situation permanente, observée en direct le 29/04.",
        "Near-miss EPTK : 3 — un seul événement, indirect, 11 jours, non confirmé : on ne descend pas sous 3.",
        "Pillage nocturne : 2 — un événement unique sur un camion commercial, de nuit, pas de lien avec les convois humanitaires.",
      ],
    },
    result: "Cinq notes B saisies, chacune avec le fait qui la fonde dans votre journal.",
    pitfall: "Baisser une probabilité parce que le convoi est urgent. La pression du calendrier est réelle mais elle n'a aucune place dans la colonne B.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 8',
    title: 'Colonne C — Coter l\'impact : la vie humaine d\'abord',
    intro: "L'impact répond à : si ce risque se matérialise, quelles sont les conséquences pour les personnes, les biens et la mission ? On retient la conséquence réaliste la plus grave, pas la pire imaginable, et on commence par la vie humaine.",
    steps: [
      {
        title: 'Évaluez dans l\'ordre',
        actions: [
          "Personnes : blessure, détention, enlèvement, décès ? Si oui, l'impact monte à 4 ou 5 quel que soit le reste.",
          "Biens : perte du chargement, d'un véhicule, du matériel médical.",
          "Mission : retard, suspension des mouvements dans la zone, perte durable de l'accès.",
        ],
      },
      {
        title: 'Cotez avec l\'échelle',
        actions: [
          "1 gêne ; 2 retard inférieur à une journée ; 3 immobilisation d'un jour ou plus, perte de matériel, blessure légère ; 4 blessure grave, perte du chargement ou d'un véhicule, suspension dans la zone ; 5 décès, enlèvement, perte durable de l'accès.",
          "Saisissez la note en colonne C.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — les cinq impacts',
      lines: [
        "Barrière de Bweza : 4 — retenue de l'équipage, risque de confiscation du chargement, suspension possible de nos mouvements sur l'axe si un incident survient.",
        "Piste Kabati–Bweza : 3 — immobilisation d'un jour ou plus, véhicule exposé de nuit en pleine piste.",
        "Zone sans réseau : 3 — impossible d'alerter pendant 14 km ; aggrave tout autre événement.",
        "Near-miss EPTK : 5 — une poursuite de nuit par des motos peut aboutir à une agression ou à un enlèvement.",
        "Pillage nocturne : 3 — perte d'un camion et du chargement, sans menace directe pour l'équipage de jour.",
      ],
    },
    result: "Les colonnes B et C sont renseignées pour les cinq risques ; chaque note est défendable devant le point focal sécurité.",
    tip: "Comparez votre note aux trois exemples du template : le checkpoint armé y est coté 5 en impact. Si vous cotez 2 un risque semblable, demandez-vous ce que vous savez que le template ignore.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 8',
    title: 'Colonne D — Lire le score, le surlignage et les bandes',
    intro: "La colonne D se calcule seule : Score = B × C. Vous ne la remplissez pas, vous la lisez. Elle dit dans quel ordre traiter vos risques, pas ce qu'il faut décider.",
    steps: [
      {
        title: 'Lisez les scores',
        actions: [
          "Vérifiez que chaque ligne affiche un nombre ; une cellule vide ou 0 signale une formule effacée (recopiez D9).",
          "Repérez les cellules surlignées en rouge : ce sont les scores de 15 ou plus.",
          "Classez mentalement par bande : Faible 1–5, Modéré 6–10, Élevé 11–15, Critique 16–25.",
        ],
      },
      {
        title: 'Triez, sans casser les lignes',
        actions: [
          "Sélectionnez A5:G20 en entier (jamais la seule colonne D), puis Données > Trier par Score, du plus grand au plus petit.",
          "Contrôlez que le texte de chaque risque est resté sur la même ligne que son score.",
        ],
      },
    ],
    table: {
      columns: ['Risque (fil rouge)', 'Probabilité', 'Impact', 'Score', 'Bande'],
      rows: [
        ['Barrière armée de Bweza', '4', '4', '16', 'Critique'],
        ['Near-miss EPTK non confirmé', '3', '5', '15', 'Élevé (surligné en rouge)'],
        ['Piste Kabati–Bweza dégradée', '4', '3', '12', 'Élevé'],
        ['Zone sans réseau km 104–118', '4', '3', '12', 'Élevé'],
        ['Pillage nocturne au km 121', '2', '3', '6', 'Modéré'],
      ],
    },
    result: "Les risques sont triés du plus grave au moins grave ; vous savez par lequel commencer vos mesures.",
    tip: "Un score de 15 est surligné en rouge mais compté en « Élevé » dans la Synthèse, car la bande Critique commence à 16. Ce n'est pas une erreur : traitez le near-miss d'EPTK comme un risque prioritaire.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 8',
    title: 'Colonne E — Écrire une mesure d\'atténuation concrète',
    intro: "La mesure est le cœur de la grille : c'est elle qui transforme un score en décision. Une mesure vague (« vigilance », « prudence ») ne réduit rien. Les exemples du template montrent le niveau de précision attendu : négociation préalable, convoi annoncé, kit de désensablement, horaires de jour.",
    steps: [
      {
        title: 'Vérifiez qu\'elle est une vraie mesure',
        actions: [
          "Elle dit QUOI faire, QUI le fait et POUR QUAND.",
          "Elle agit sur la probabilité (on change les conditions du mouvement) ou sur l'impact (on réduit les conséquences) : sachez dire lequel.",
          "Elle est réalisable par vous ou par votre équipe avant le départ ; sinon, elle ne compte pas.",
        ],
      },
      {
        title: 'Piochez dans les familles de mesures',
        actions: [
          "Reconnaissance préalable, convoi groupé, horaires et heure butoir, négociation d'accès, communication renforcée, signalisation humanitaire visible, chargement sans matériel à connotation militaire ou à double usage.",
          "Ne tapez que dans la colonne E : le template n'a pas de colonne « décision », vous y ajouterez l'étiquette de décision à la Procédure 3.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — mesures de la grille v01 (ligne par ligne)',
      lines: [
        "Barrière de Bweza : convoi groupé de 3 véhicules ; marquage Kemora Santé visible ; manifeste imprimé en 3 exemplaires ; aucun passager ni matériel tiers ; aucun paiement ; chef de convoi F. Mbusa chargé du contact. Accord d'accès préalable : pas encore obtenu.",
        "Near-miss EPTK : aucun mouvement après 17h00 ; fiche écrite demandée à EPTK avant le 12/05 midi ; check-in toutes les heures ; véhicule de tête V-02.",
        "Piste Kabati–Bweza : reconnaissance V-02 le 13/05 ; kit de désensablement dans chaque camion (4 planches, 2 sangles, 2 pelles) ; départ 06h00 ; heure butoir à la barrière 13h30.",
        "Zone sans réseau : 2 radios VHF et 1 téléphone satellite testés le 13/05 ; message « ENTRÉE ZONE SANS RÉSEAU » au km 104.",
        "Pillage nocturne : chargement bâché et scellé ; aucune halte non prévue ; aucune circulation de nuit.",
      ],
    },
    pitfall: "Écrire « renforcer la vigilance » en face d'un score de 16. Une mesure qu'aucun responsable ne peut cocher le jour du départ n'est pas une mesure.",
    result: "Chaque risque a une mesure précise, un responsable et une échéance avant le départ.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 8',
    title: 'Colonne F — Établir le risque résiduel de 1 à 5',
    intro: "Le risque résiduel est le niveau qui subsiste une fois la mesure appliquée. La colonne F attend une note de 1 à 5, pas un second produit de 1 à 25. C'est cette colonne, et non la colonne D, qui déclenche l'alerte.",
    steps: [
      {
        title: 'Réestimez avec la mesure appliquée',
        actions: [
          "Posez-vous la question : si la mesure est exécutée comme prévu, quelle est la nouvelle probabilité (P') et le nouvel impact (I') ?",
          "Une mesure qui dépend d'un tiers (un accord d'accès) ne compte qu'une fois obtenue ; en attendant, ne la comptez pas.",
          "Calculez P' × I'.",
        ],
      },
      {
        title: 'Convertissez en note de 1 à 5',
        actions: [
          "Aide de conversion proposée par ce module (le template n'impose que la note 1-5 et l'alerte à 4) : P' × I' de 1 à 3 → note 1 ; de 4 à 6 → note 2 ; de 8 à 10 → note 3 ; de 12 à 15 → note 4 ; de 16 à 25 → note 5.",
          "Saisissez la note en colonne F. Si la colonne G affiche « ⚠ à valider hiérarchie », ne la masquez pas : c'est le but.",
        ],
      },
    ],
    table: {
      columns: ['Risque (fil rouge)', 'P\' × I\' avec mesures', 'Note F', 'Alerte G'],
      rows: [
        ['Barrière de Bweza (sans accord d\'accès)', '3 × 4 = 12', '4', '⚠ à valider hiérarchie'],
        ['Near-miss EPTK (non confirmé)', '2 × 5 = 10', '3', '—'],
        ['Piste Kabati–Bweza', '2 × 2 = 4', '2', '—'],
        ['Zone sans réseau', '2 × 2 = 4', '2', '—'],
        ['Pillage nocturne (acceptation)', '2 × 3 = 6', '2', '—'],
      ],
    },
    result: "Les cinq résiduels sont saisis : un seul atteint 4 et la colonne G l'affiche pour la barrière de Bweza.",
    pitfall: "Descendre un résiduel à 3 pour éviter l'alerte. L'alerte n'est pas une sanction, c'est une garantie : elle vous protège en faisant porter la décision par la hiérarchie.",
    tip: "Si vous hésitez entre deux notes, gardez la plus haute et notez pourquoi. Vous pourrez la baisser après un mouvement réussi (Procédure 8) ; vous ne pourrez pas rattraper un incident.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 8 sur 8',
    title: 'Colonne G et onglet Synthèse — Lire l\'alerte avant toute décision',
    intro: "L'alerte se calcule seule : « ⚠ à valider hiérarchie » apparaît si le résiduel est supérieur ou égal à 4. L'onglet Synthèse compte les risques par bande de sévérité et les résiduels à valider. Vous le consultez avant toute décision finale.",
    steps: [
      {
        title: 'Lisez la colonne G',
        actions: [
          "Repérez les lignes dont la colonne G est remplie : ce sont celles qui remontent à la hiérarchie avant le départ.",
          "Ne supprimez jamais un message d'alerte pour « nettoyer » la feuille.",
        ],
      },
      {
        title: 'Ouvrez l\'onglet Synthèse',
        actions: [
          "Lisez C5 à C8 : nombre de risques en bandes Faible, Modéré, Élevé, Critique (calculés sur les scores D6:D20).",
          "Lisez C10 : nombre de résiduels ≥ 4 nécessitant une validation hiérarchique.",
          "Contrôlez que C5 + C6 + C7 + C8 est égal au nombre de lignes de risque que vous avez saisies ; sinon une cellule de score est vide ou convertie en texte.",
        ],
      },
    ],
    table: {
      columns: ['Synthèse (grille v01, 11/05)', 'Plage', 'Nombre de risques'],
      rows: [
        ['Faible', '1 – 5', '0'],
        ['Modéré', '6 – 10', '1 (pillage nocturne)'],
        ['Élevé', '11 – 15', '3 (near-miss EPTK, piste, zone sans réseau)'],
        ['Critique', '16 – 25', '1 (barrière de Bweza)'],
        ['Résiduels nécessitant validation hiérarchique (≥ 4)', '—', '1 (barrière de Bweza)'],
      ],
    },
    example: {
      title: 'Fil rouge — lecture de la Synthèse à 16h20',
      lines: [
        "Total : 0 + 1 + 3 + 1 = 5 risques, égal aux 5 lignes saisies : la Synthèse est cohérente.",
        "C10 = 1 : on ne décide pas seul. La barrière de Bweza doit être validée par la hiérarchie avant tout départ.",
        "Un seul risque critique : le score moyen (12) est rassurant et trompeur. La décision se prend risque par risque.",
      ],
    },
    result: "Livrable 2 terminé : grille v01 complète, Synthèse lue, un résiduel ≥ 4 identifié.",
    pitfall: "Conclure « le score moyen est de 12, c'est acceptable ». Un itinéraire avec un risque critique ne s'autorise jamais sur un score moyen.",
  },

  // ───────────── PROCÉDURE 3 — Décider ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 5',
    title: 'Classer chaque risque : accepter, atténuer ou éviter',
    intro: "Lundi 11 mai, 16h30. La grille v01 est remplie. Vous prenez maintenant une décision explicite pour chaque risque significatif, et non pour l'itinéraire dans son ensemble : c'est cette trace écrite qui protège les bénéficiaires, l'équipe et l'organisation.",
    steps: [
      {
        title: 'Appliquez la règle par défaut selon le résiduel',
        actions: [
          "Lisez la note de la colonne F de chaque ligne.",
          "Appliquez la règle du tableau ci-dessous (règle de travail de ce module, cohérente avec l'alerte à 4 du template).",
        ],
      },
      {
        title: 'Si aucune mesure ne suffit, cherchez les trois leviers d\'évitement',
        actions: [
          "Itinéraire : existe-t-il un autre axe, même plus long ?",
          "Calendrier : un report de 24 à 48 heures change-t-il le risque (reconnaissance, accord, météo) ?",
          "Mode de transport : un autre moyen ou une rotation en deux fois réduit-il l'exposition ?",
        ],
      },
    ],
    table: {
      columns: ['Résiduel (colonne F)', 'Décision par défaut', 'Qui valide avant le départ'],
      rows: [
        ['1 – 2', "Acceptation avec précautions standard, ou atténuation légère déjà en place.", "Le logisticien, trace écrite dans la grille."],
        ['3', "Atténuation : mesures contrôlées avant le départ, revue après le mouvement.", "La coordinatrice, au moment de la décision Go."],
        ['4 – 5', "Validation hiérarchique obligatoire ; si aucune mesure ne ramène à 3 ou moins, évitement.", "La coordinatrice pays, avec l'avis du point focal sécurité ; zone no-go : direction pays."],
      ],
    },
    example: {
      title: 'Fil rouge — classement des cinq risques (11/05, 16h40)',
      lines: [
        "Barrière de Bweza, résiduel 4 → validation hiérarchique obligatoire ; évitement envisagé si l'accord d'accès n'est pas obtenu.",
        "Near-miss EPTK, résiduel 3 → atténuation, contrôle des mesures au moment du Go.",
        "Piste Kabati–Bweza, résiduel 2 → atténuation (mesures déjà prévues).",
        "Zone sans réseau, résiduel 2 → atténuation (matériel à tester le 13/05).",
        "Pillage nocturne, résiduel 2 → acceptation avec précautions standard.",
      ],
    },
    result: "Chaque risque porte une décision par défaut et le nom de celui qui la valide.",
    pitfall: "Décider « pour l'itinéraire » en bloc. Un risque accepté en masse avec les autres ne laisse aucune trace de ce qui a été vraiment pesé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 5',
    title: 'Écrire la décision directement dans la grille (colonne E)',
    intro: "Le template ne contient pas de colonne « décision » et vous n'en ajoutez pas : la colonne E, dernière zone de texte libre, porte la décision. Une étiquette en début de cellule suffit pour que n'importe quel lecteur de la grille sache comment chaque risque a été traité.",
    steps: [
      {
        title: 'Préfixez chaque mesure',
        actions: [
          "Tapez [ATTÉNUATION], [ACCEPTATION] ou [ÉVITEMENT] au début de la cellule E de chaque ligne, suivi de la mesure.",
          "Acceptation : écrivez les précautions standard retenues ET la raison pour laquelle aucune mesure supplémentaire n'est utile.",
          "Évitement : écrivez ce qui est abandonné (axe, horaire, mode) et qui l'a validé.",
        ],
      },
      {
        title: 'Terminez chaque cellule par un responsable et une échéance',
        actions: [
          "Format : « … — Resp. : prénom nom, avant [date et heure] ».",
          "Relisez : un lecteur qui n'a jamais vu le dossier sait-il quoi vérifier le matin du départ ?",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — cellules E après étiquetage (extraits)',
      lines: [
        "E (barrière de Bweza) : [ATTÉNUATION] Convoi groupé de 3 véhicules ; marquage visible ; manifeste en 3 exemplaires ; aucun passager, aucun paiement. À obtenir : accord d'accès du chef du poste — Resp. : J. Katembo, avant le 13/05 17h00.",
        "E (pillage nocturne) : [ACCEPTATION] Risque modéré (6) et résiduel 2 : précautions standard — chargement bâché et scellé, aucune halte non prévue, aucune circulation de nuit. Aucune mesure supplémentaire utile pour un événement isolé hors convois humanitaires — Resp. : F. Mbusa, contrôle au départ.",
        "E (near-miss EPTK) : [ATTÉNUATION] Aucun mouvement après 17h00 ; fiche écrite EPTK avant le 12/05 12h00 ; check-in horaire — Resp. : logisticien.",
      ],
    },
    result: "Les cinq cellules E portent une étiquette de décision, une mesure précise, un responsable et une échéance.",
    tip: "Une acceptation n'est légitime que si elle est écrite noir sur blanc. « On a décidé d'y aller » n'est pas une décision, c'est une absence de trace.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 5',
    title: 'Remonter par écrit tout risque résiduel ≥ 4 à la hiérarchie',
    intro: "La colonne G affiche « à valider hiérarchie » : ce signal doit remonter systématiquement avant le départ, jamais être géré seul par le logisticien de terrain. Vous envoyez un message court, complet, qui permet de répondre en une phrase. Vous avez besoin de la grille v01 et de la Synthèse.",
    steps: [
      {
        title: 'Rédigez la demande en 8 lignes',
        actions: [
          "Objet : « VALIDATION REQUISE — MV-KS-0514 — risque résiduel 4 ».",
          "Mouvement : dates, itinéraire, véhicules, chargement.",
          "Risque : formulation de la colonne A, score, résiduel.",
          "Mesures prévues et ce qui reste à obtenir (accord d'accès, reconnaissance).",
          "Options : Go conditionnel, report, évitement.",
          "Décision demandée et délai de réponse (heure).",
          "Pièces jointes : grille v01 et note de situation.",
        ],
      },
      {
        title: 'Envoyez et doublez par un appel',
        actions: [
          "Destinataires : Joseph Katembo (avis sécurité) et Sylvie Matala (décision) ; copie à Jean-Marc Ilunga.",
          "Appelez Joseph Katembo dans les 15 minutes : un message écrit ne remplace pas la discussion.",
          "Notez l'heure d'envoi dans le journal d'accès.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — message du 11/05 à 17h05',
      lines: [
        "Objet : VALIDATION REQUISE — MV-KS-0514 (Goma–Bweza–Lukando, jeudi 14/05) — risque résiduel 4.",
        "Risque : barrière armée de Bweza (km 118), installée le 04/05, péage et inspection exigés — score 16, résiduel 4 avec nos seules mesures (convoi groupé, marquage, manifeste, zéro paiement).",
        "À obtenir : accord d'accès du chef du poste via le médecin chef de zone ; reconnaissance du tronçon km 104–118 le 13/05.",
        "Options : Go conditionnel si accord obtenu avant le 13/05 17h00 ; sinon report au 15/05 ou plus tard.",
        "Décision demandée : mandat pour négocier l'accès et accord sur ces options, réponse avant le 11/05 18h30. Pièces jointes : grille v01, note de situation.",
      ],
    },
    result: "Une demande écrite, datée, avec une question fermée. Sylvie Matala répond à 18h10 : « Accord pour négocier via le BCZ ; pas d'escorte ; point de situation mercredi 17h00. »",
    pitfall: "Gérer seul un résiduel de 4 « parce que Joseph est occupé ». Le jour où l'incident survient, la question sera : qui avait validé ?",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 5',
    title: 'Décider le mouvement : Go, Go conditionnel ou No-go',
    intro: "Une fois chaque risque traité, vous proposez une décision pour le mouvement. Elle s'écrit, se date et fixe sa durée de validité. L'urgence du programme (rupture de SRO le 18/05) figure dans le dossier, mais elle ne doit jamais devenir la variable qui fait baisser artificiellement un score.",
    steps: [
      {
        title: 'Choisissez la décision selon cette règle',
        actions: [
          "GO : tous les résiduels sont à 3 ou moins, aucune alerte, toutes les mesures sont en place.",
          "GO CONDITIONNEL : le départ est autorisé si des conditions listées sont remplies ; chacune a un responsable, une échéance et une conséquence (report ou annulation) si elle n'est pas remplie.",
          "NO-GO : un résiduel de 4 ou 5 reste sans réponse, ou une condition essentielle n'est pas réalisable à temps ; l'évitement s'applique.",
        ],
      },
      {
        title: 'Passez le test de pression',
        actions: [
          "Posez-vous : « Si la rupture de stock n'existait pas, partirais-je avec ces scores ? »",
          "Si la réponse change, vous êtes en train de baisser un score sous pression : revenez à la grille.",
          "Fixez une durée de validité (ici 48 heures) et les événements qui l'annulent (nouvelle alerte, incident, accord non reconfirmé).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — proposition de décision du 11/05 (à reconfirmer le 13/05)',
      lines: [
        "En l'état : NO-GO (résiduel 4 sur la barrière de Bweza, accord d'accès non obtenu).",
        "Passage en GO CONDITIONNEL si, avant le 13/05 17h00 : (1) accord d'accès obtenu et documenté — J. Katembo ; (2) reconnaissance V-02 du tronçon km 104–118 sans blocage — logisticien ; (3) fiche écrite d'EPTK sur le near-miss reçue — logisticien ; (4) radios VHF et téléphone satellite testés — logisticien.",
        "Si une condition manque : report au vendredi 15/05, stock de SRO à surveiller (rupture le 18/05).",
        "Test de pression : sans la rupture de stock, la décision serait la même.",
      ],
    },
    result: "Une proposition de décision écrite avec quatre conditions, chacune avec un responsable, une échéance et une conséquence.",
    pitfall: "Écrire « Go » tout court. Sans conditions listées ni validité, personne ne sait ce qui l'annule quand la situation change le matin du départ.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 5 sur 5',
    title: 'Dater, diffuser et archiver la décision',
    intro: "La décision doit être retrouvable dans un an par quelqu'un qui n'était pas là. Elle se compose de trois pièces : la grille datée, le message de décision, et l'entrée du journal d'accès. Vous la rediffusez le 13/05 après la Procédure 4, avec la grille v02.",
    steps: [
      {
        title: 'Assemblez le dossier de décision',
        actions: [
          "Enregistrez la grille sous son nom daté (AAAA-MM-JJ_Grille-risques_Goma-Lukando_v01.xlsx) ; ne l'écrasez jamais.",
          "Copiez le message de décision dans le journal d'accès, avec l'heure d'envoi et les noms des destinataires.",
          "Rangez le tout dans un dossier « MV-KS-0514 » avec la note de situation.",
        ],
      },
      {
        title: 'Diffusez à ceux qui agissent',
        actions: [
          "Chef de convoi (F. Mbusa) et dispatcheuse (Chantal Mbusa) : décision et conditions.",
          "Coordinatrice, coordinateur logistique pays, point focal sécurité : décision, grille et validité.",
          "Ne diffusez pas la grille sur un groupe ouvert : elle contient des informations d'accès sensibles.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — entrée du journal d\'accès, 11/05 18h20',
      lines: [
        "11/05 17h05 — Demande de validation envoyée à S. Matala et J. Katembo (copie J.-M. Ilunga) : risque résiduel 4, barrière de Bweza.",
        "11/05 18h10 — Réponse S. Matala : mandat pour négocier via le BCZ ; pas d'escorte ; point de situation mercredi 17h00.",
        "11/05 18h20 — Statut du mouvement : NO-GO en l'état ; GO conditionnel si 4 conditions remplies avant le 13/05 17h00. Dossier : MV-KS-0514, grille v01.",
      ],
    },
    result: "Livrable 3 terminé (première partie) : décisions par risque, demande de validation envoyée et réponse tracée, décision datée avec conditions.",
    tip: "Ouvrez toujours le journal d'accès avant d'envoyer : la trace précède le message. C'est cette habitude qui rend votre dossier défendable en cas de question ultérieure.",
  },

  // ───────────── PROCÉDURE 4 — Négocier et documenter l'accès ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 6',
    title: 'Identifier qui contrôle l\'accès à chaque point critique',
    intro: "Mardi 12 mai, 8h00. Le principe CICR numéro un : le dialogue s'établit avec tous les acteurs qui contrôlent l'accès, sans exception. Mais pour dialoguer, il faut savoir qui ils sont. Vous construisez la carte des acteurs de l'accès à partir de votre note de situation, sans présumer de rien.",
    steps: [
      {
        title: 'Remplissez un tableau par point critique',
        actions: [
          "Colonnes : Point critique, Qui contrôle (à notre connaissance), Certitude, Interlocuteur possible, Canal.",
          "Une ligne par barrière, poste de contrôle ou tronçon où quelqu'un décide de votre passage.",
          "Indiquez la certitude : un « groupe non identifié » est une information, pas une conclusion politique.",
        ],
      },
      {
        title: 'Cherchez un intermédiaire reconnu',
        actions: [
          "Demandez à Joseph Katembo qui, dans votre réseau (médecin chef de zone, autorités locales, leaders communautaires, contact du réseau CICR s'il est présent), est reconnu par les deux côtés.",
          "Vérifiez si un mécanisme de notification de mouvement est en place dans le pays (souvent via la coordination civilo-militaire d'OCHA) et utilisez-le.",
        ],
      },
    ],
    table: {
      columns: ['Point critique', 'Qui contrôle', 'Certitude', 'Interlocuteur possible', 'Canal'],
      rows: [
        ['Barrière de Bweza (km 118)', 'Groupe armé non identifié, 6 à 8 hommes, depuis le 04/05', 'Faible sur le commandement', 'Chef du poste ; relais : médecin chef de zone de Lukando (BCZ)', 'Appel du BCZ la veille, puis visite de J. Katembo et du logisticien'],
        ['Autres contrôles de l\'axe Goma–Musi', 'Autorités habituelles, aucun fait signalé', 'Moyenne', 'Autorités locales', 'Notification de mouvement'],
        ['Zone du km 121 (pillage du 02/05)', 'Inconnu', 'Nulle', '—', 'À investiguer via point sécurité'],
      ],
    },
    result: "Vous savez qui contacter à Bweza, par quel relais, et ce que vous ne savez pas encore.",
    pitfall: "Qualifier politiquement un groupe armé (« ce sont les gens de… ») dans un document. Vous ne documentez que des faits observables : où, combien, que demandent-ils.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 6',
    title: 'Préparer la négociation : mandat, message, lignes rouges',
    intro: "Une négociation d'accès ne s'improvise pas devant la barrière. Elle est décidée avec la coordinatrice, qui donne le mandat ; vous préparez, vous conduisez la partie pratique dans les limites écrites, et vous documentez. Vous avez besoin du mandat reçu le 11/05 à 18h10 et du manifeste.",
    steps: [
      {
        title: 'Rédigez la fiche de préparation en 8 lignes',
        actions: [
          "Objectif précis : qui passe, quand, avec quoi, combien de fois.",
          "Message clé en trois phrases : qui nous sommes, ce que nous transportons, ce que nous demandons.",
          "Manifeste : liste du chargement à imprimer en 3 exemplaires.",
          "Lignes rouges : ce que nous ne ferons jamais (paiement, passager, matériel tiers, information politique ou militaire).",
          "Ce que nous pouvons offrir : uniquement la transparence (manifeste, inspection visuelle, horaire de passage).",
          "Interlocuteur, canal, lieu, heure ; qui est présent côté Kemora Santé.",
          "Plan B : que faisons-nous si l'accès est refusé (report, évitement) ?",
          "Qui valide l'accord obtenu (Sylvie Matala).",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche de préparation, mardi 12/05 à 10h00',
      lines: [
        "Objectif : passage de 3 véhicules (2 camions de 6 t Umoja + V-02) jeudi 14/05 entre 11h00 et 14h00, puis retour de 2 camions le 15/05.",
        "Message clé : « Kemora Santé est une organisation médicale neutre. Nous livrons 4,6 t de matériel médical pour le centre de traitement de Bweza. Nous vous demandons l'autorisation de passer jeudi entre 11h00 et 14h00. »",
        "Lignes rouges : aucun paiement ; aucun passager ; aucun matériel tiers ; aucune discussion politique ou militaire.",
        "Offre : manifeste remis, inspection visuelle contre la liste en présence de F. Mbusa, horaire communiqué à l'avance.",
        "Qui : J. Katembo (mandat) et le logisticien ; lieu : barrière de Bweza, mercredi 13/05 vers 07h50, après appel du BCZ la veille.",
        "Plan B : si accès refusé → report ; si hostilité → départ immédiat et fiche de reporting.",
      ],
    },
    result: "Une fiche de préparation d'une page, validée par Joseph Katembo avant le départ de la reconnaissance du 13/05.",
    tip: "Une négociation se prépare à deux : celui qui parle et celui qui observe et note. Convenez avant d'y aller de qui fait quoi et d'un signal pour interrompre l'échange.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 6',
    title: 'Conduire l\'entretien en six temps',
    intro: "Mercredi 13 mai, 7h50, barrière de Bweza. Vous ne négociez pas un deal : vous obtenez un passage sécurisé par un dialogue strictement humanitaire. Tout ce qui sort de ce cadre est recadré ou interrompu.",
    steps: [
      {
        title: 'Suivez le déroulé',
        actions: [
          "1. Saluez et présentez-vous : nom, organisation, fonction ; demandez le nom et la fonction de votre interlocuteur.",
          "2. Expliquez le mandat : humanitaire, neutre, impartial, indépendant.",
          "3. Soyez transparent : montrez le manifeste, dites ce que vous transportez, pourquoi, pour qui.",
          "4. Formulez la demande précise : combien de véhicules, quand, quel sens.",
          "5. Écoutez ses préoccupations ; si le sujet dérive vers le politique ou le militaire, recadrez ou interrompez.",
          "6. Concluez : reformulez l'accord en une phrase, vérifiez qu'il est compris, notez le nom et l'heure.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — extrait de l\'entretien du 13/05 (fictif)',
      lines: [
        "Vous : « Bonjour, je suis logisticien de Kemora Santé, organisation médicale humanitaire. Nous sommes neutres et nous aidons selon les besoins. »",
        "Vous : « Jeudi 14 mai, trois véhicules passeront entre 11h00 et 14h00 avec 4,6 tonnes de matériel médical pour le centre de Bweza. Voici la liste du chargement. »",
        "Chef du poste : « Qu'est-ce que vous nous laissez pour passer ? »",
        "Vous : « Nous ne remettons rien contre un passage, c'est notre règle dans tous les pays. En revanche, vous pouvez vérifier le chargement contre la liste, devant notre chef de convoi. »",
        "Chef du poste (sur la situation locale) : « Vous savez ce qui se passe de l'autre côté… » — Vous : « Je ne peux pas en parler. Je suis ici uniquement pour le passage du matériel médical. »",
        "Conclusion : « Pour être clair : jeudi 14 mai, entre 11h00 et 14h00, trois véhicules, inspection visuelle de la liste, aucun paiement. C'est bien cela ? » — « Oui. »",
      ],
    },
    result: "Un accord oral sur le passage, formulé en une phrase, avec le nom et la fonction de la personne qui l'a donné.",
    pitfall: "Répondre à une provocation politique pour « détendre l'atmosphère ». Une phrase de trop peut compromettre la neutralité de toute l'organisation dans la zone.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 6',
    title: 'Répondre aux demandes de contrepartie sans rompre le dialogue',
    intro: "Aucune contrepartie n'est négociée au-delà du passage sécurisé lui-même. La politique de Kemora Santé est écrite : aucun paiement, aucun passager, aucune marchandise tierce. Mais le refus se dit poliment, de la même façon à chaque fois. Si une menace immédiate survient, la sécurité des personnes prime et vous remontez.",
    steps: [
      {
        title: 'Préparez une réponse type par demande',
        actions: [
          "Apprenez les réponses du tableau ci-dessous à vos chauffeurs.",
          "Répétez-les en briefing : celui qui improvise à la barrière cède.",
          "Toute demande nouvelle ou insistante remonte à Joseph Katembo dans l'heure.",
        ],
      },
    ],
    table: {
      columns: ['Demande à la barrière', 'Réponse type', 'Ce que l\'on ne fait jamais'],
      rows: [
        ['Paiement, « droit de passage »', "« Nous ne payons pas, c'est notre règle. Voici la lettre de mission et la liste. »", "Payer « une fois pour que ça passe », même une petite somme."],
        ['Passager ou « lift » pour un homme armé ou un civil', "« Nous ne prenons aucun passager, règle de sécurité du convoi. »", "Accepter « exceptionnellement » pour éviter un conflit."],
        ['Cartons, carburant, vivres « pour les hommes »', "« Notre chargement est destiné au centre de traitement, tout est sur la liste. »", "Prélever ou donner une partie du chargement."],
        ['Inspection du chargement', "« Vous pouvez vérifier contre la liste, en présence de notre chef de convoi. »", "Laisser fouiller sans témoin, ouvrir les emballages isothermes inutilement, laisser prendre un objet."],
        ['Demande d\'information (positions, autres acteurs)', "« Je ne peux pas répondre, je suis ici pour le matériel médical. »", "Fournir une information sur d'autres groupes ou sur les forces en présence."],
      ],
    },
    result: "Vos équipages connaissent cinq phrases courtes, identiques, applicables sans improviser.",
    tip: "Une inspection visuelle supervisée est une forme de transparence qui désamorce la méfiance. Acceptez-la systématiquement ; refusez seulement la fouille sans témoin et le prélèvement.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 6',
    title: 'Documenter l\'accord dans le journal d\'accès, le jour même',
    intro: "Un accord verbal avec un chef local peut ne plus être reconnu par son successeur ou par un poste voisin trois semaines plus tard. Un accord d'accès est daté, local et personnel. Il se documente dans l'heure qui suit l'entretien, avant tout autre message.",
    steps: [
      {
        title: 'Remplissez l\'entrée du journal d\'accès',
        actions: [
          "Date et heure ; lieu exact ; nom et fonction de l'interlocuteur (tels que donnés, sans qualification politique) ; qui était présent de notre côté.",
          "Contenu de l'accord : quoi, quand, combien de véhicules, quel sens, inspection autorisée.",
          "Contreparties : « aucune » (écrivez-le).",
          "Validité : de quelle date à quelle date ; événements qui l'annulent (changement de chef, nouvelle exigence, incident).",
          "Prochaine reconfirmation : par qui, comment, quand (par téléphone le matin du départ).",
        ],
      },
      {
        title: 'Transmettez',
        actions: [
          "Envoyez l'entrée à Joseph Katembo et à Sylvie Matala dans les deux heures, avec votre appréciation du risque résiduel.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — journal d\'accès, mercredi 13/05, 9h15',
      lines: [
        "13/05 07h50 — Barrière de Bweza (km 118). Interlocuteur : chef du poste (se présente comme « Commandant Zawadi », fonction à confirmer). Présents : J. Katembo, logisticien.",
        "Accord : passage de 3 véhicules (2 camions Umoja de 6 t + V-02), jeudi 14/05 entre 11h00 et 14h00, puis retour de 2 camions le 15/05 ; inspection visuelle du chargement contre le manifeste, en présence du chef de convoi.",
        "Contreparties : aucune. Aucun paiement, aucun passager, aucun matériel tiers.",
        "Validité : 14 et 15/05. Annulation si changement de chef du poste, nouvelle exigence ou incident.",
        "Reconfirmation : appel du BCZ au poste le 14/05 à 05h30 (J. Katembo) ; résultat dans le groupe du convoi avant 05h45.",
      ],
    },
    result: "Livrable 4 : une entrée datée, complète, transmise, qui permet à n'importe quel membre de l'équipe de savoir ce qui a été convenu.",
    pitfall: "Confondre un accord verbal ponctuel avec un accès sécurisé durable : parce qu'un convoi est passé une fois, certains concluent que l'itinéraire est « réglé ». Il ne l'est que pour la date et les conditions écrites.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 6',
    title: 'Rendre compte, mettre à jour la grille (v02) et fixer les déclencheurs d\'arrêt',
    intro: "Mercredi 13 mai, 11h00. L'accord change le résiduel de la barrière : vous le répercutez dans la grille, vous partagez l'information utile et vous écrivez à l'avance ce qui annulerait l'accord. Vous avez besoin de la grille v01 et de l'entrée du journal d'accès.",
    steps: [
      {
        title: 'Mettez à jour la grille v02',
        actions: [
          "Enregistrez la grille sous AAAA-MM-JJ_Grille-risques_Goma-Lukando_v02.xlsx ; conservez la v01 intacte.",
          "Colonne E de la barrière : complétez la mesure avec l'accord d'accès obtenu, sa validité et sa reconfirmation.",
          "Colonne F : réestimez avec l'accord (P' 3 × I' 3 = 9, note 3) ; vérifiez que la colonne G s'efface.",
          "Ouvrez la Synthèse : C10 doit passer de 1 à 0.",
        ],
      },
      {
        title: 'Fixez les déclencheurs d\'arrêt et partagez',
        actions: [
          "Listez par écrit ce qui annule l'accord : nouveau chef, nouvelle exigence, refus de la reconfirmation, incident dans la zone.",
          "Informez le Logistics Cluster en termes strictement humanitaires (état du passage), sans le contenu de la négociation.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — grille v02, ligne de la barrière de Bweza (13/05, 11h30)',
      lines: [
        "A : Barrière tenue par un groupe armé non identifié à Bweza (km 118), installée le 04/05 ; péage et inspection exigés — Confirmé.",
        "B : 4 | C : 4 | D : 16 | F : 3 | G : (vide).",
        "E : [ATTÉNUATION] Accord d'accès du 13/05 à 07h50 : passage de 3 véhicules le 14/05 entre 11h00 et 14h00, inspection visuelle du manifeste acceptée, aucun paiement ; reconfirmation par téléphone le 14/05 à 05h30 ; convoi groupé, marquage visible, manifeste en 3 exemplaires — Resp. : J. Katembo / logisticien.",
        "Synthèse : C8 reste à 1 (le score brut ne change pas) ; C10 passe de 1 à 0.",
        "Déclencheurs d'annulation : refus de la reconfirmation à 05h30 ; nouveau chef ; exigence de paiement ; incident à la barrière → départ suspendu.",
      ],
    },
    result: "L'alerte est levée parce qu'une mesure réelle a été obtenue et documentée, pas parce qu'un chiffre a été ajusté.",
    pitfall: "Baisser le score B ou C pour « refléter l'accord ». Le score brut décrit le risque avant mesure : seul le résiduel (colonne F) bouge.",
  },

  // ───────────── PROCÉDURE 5 — Planifier l'itinéraire et briefer les équipages ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 5',
    title: 'Fixer l\'itinéraire, les points d\'arrêt sûrs et les points de décision',
    intro: "Mardi 12 mai, 14h00. Un itinéraire sécurisé n'est pas une ligne sur une carte : c'est un itinéraire dont on connaît le repli, les arrêts autorisés et les endroits où l'on décide de continuer ou de rebrousser chemin. Vous avez besoin des cinq tronçons de la Procédure 1 et de la grille.",
    steps: [
      {
        title: 'Définissez l\'itinéraire principal et le repli',
        actions: [
          "Écrivez l'itinéraire principal tronçon par tronçon avec les kilométrages.",
          "Cherchez un itinéraire alternatif réaliste ; s'il n'en existe pas (ici, une seule piste entre la Musi et Bweza), écrivez-le : le repli est alors le demi-tour ou un point de repli sûr.",
          "Désignez le point de repli : lieu clos, connu, avec l'accord de son responsable (ici l'enceinte de l'unité de traitement de Bweza, accord du Dr Kahindo).",
        ],
      },
      {
        title: 'Listez les arrêts autorisés et les décisions',
        actions: [
          "Arrêts sûrs : lieux visibles, connus de la base, où l'on peut s'arrêter sans exposition particulière (pont de la Musi, unité de Bweza, base de Lukando).",
          "Règle : aucun arrêt hors de ces points, sauf panne ou blocage ; tout arrêt imprévu est annoncé dans le groupe du convoi.",
          "Points de décision : un lieu, un critère mesurable, une action (voir tableau).",
        ],
      },
    ],
    table: {
      columns: ['Point de décision', 'Critère', 'Action prévue'],
      rows: [
        ['Pont de la Musi (km 97)', 'Pas franchi à 10h30', "Appel à la base ; décision de poursuivre ou de rebrousser chemin avec J. Katembo."],
        ['Barrière de Bweza (km 118)', 'Accord non reconnu, exigence de paiement ou chargement exigé hors liste', "Arrêt, appel, attente des instructions ; pas de paiement ; pas de demi-tour précipité sans consigne."],
        ['Barrière de Bweza', "Pas franchie à 13h30", "Repli sur le point de repli le plus proche, report de la suite au lendemain."],
        ['Départ de l\'unité de Bweza', 'Pas parti à 15h30', "Nuit sur place dans l'enceinte de l'unité ; aucun départ vers Lukando."],
      ],
    },
    result: "Un itinéraire principal, un repli, des arrêts sûrs et quatre points de décision écrits, qui seront reportés sur la fiche de mouvement.",
    pitfall: "Se rassurer en pensant « on improvisera un repli sur place ». Un convoi bloqué à 16h30 sur une piste de nuit n'a plus de repli.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 5',
    title: 'Calculer l\'horaire, les butoirs et l\'heure limite de circulation',
    intro: "Un horaire de convoi ne s'estime pas à vue : il se calcule tronçon par tronçon, avec une marge. Les heures butoirs sont les seuils au-delà desquels on ne continue plus. Elles sont écrites avant le départ pour ne pas se négocier sous pression.",
    steps: [
      {
        title: 'Calculez la durée de chaque tronçon',
        actions: [
          "Durée = distance ÷ vitesse moyenne retenue (goudron 60 km/h, piste 25 km/h, piste dégradée 10 km/h) ; ajoutez les forfaits (pont, contrôle, pause).",
          "Faites la somme et ajoutez une marge d'environ 20 %, puis arrondissez à l'heure supérieure.",
          "Partez de l'heure de départ pour obtenir l'heure prévue à chaque point.",
        ],
      },
      {
        title: 'Fixez les butoirs et l\'heure limite',
        actions: [
          "Butoir de chaque point = heure prévue + environ 1h30 de retard toléré.",
          "Heure limite de circulation : aucune circulation après 17h00 (les chauffeurs ne passent plus après 17h30 ; le near-miss d'EPTK a eu lieu à 18h20).",
          "Si un butoir est dépassé, le convoi applique l'action du point de décision correspondant.",
        ],
      },
    ],
    table: {
      columns: ['Tronçon ou forfait', 'Distance', 'Vitesse retenue', 'Durée'],
      rows: [
        ['Goma → km 48 (goudron)', '48 km', '60 km/h', '0h48'],
        ['km 48 → pont de la Musi (piste)', '49 km', '25 km/h', '1h58'],
        ['Franchissement du pont (un camion à la fois)', 'forfait', '—', '0h20'],
        ['Musi → Kabati (piste)', '7 km', '15 km/h', '0h28'],
        ['Kabati → Bweza (piste dégradée)', '14 km', '10 km/h', '1h24'],
        ['Contrôle à la barrière + pause équipage', 'forfaits', '—', '0h45'],
        ['Total / marge de 20 % (≈ 1h08)', '—', '—', '5h43 → 6h51 → arrondi 7h00'],
      ],
    },
    example: {
      title: 'Fil rouge — horaires de la fiche de mouvement (départ Goma 06h00)',
      lines: [
        "Pont de la Musi : prévu 09h00, butoir 10h30. Kabati : prévu 09h45, butoir 11h15.",
        "Barrière de Bweza : prévu 11h30, butoir 13h30 (la fenêtre de l'accord est 11h00–14h00).",
        "Unité de traitement de Bweza : arrivée prévue 13h00, déchargement 1h15, départ prévu 14h15, butoir 15h30.",
        "Lukando : arrivée prévue 15h00, butoir 16h30. Heure limite de circulation : 17h00.",
      ],
    },
    result: "Un tableau d'horaires avec heure prévue et heure butoir pour chaque point, cohérent avec la fenêtre de l'accord d'accès.",
    tip: "Vérifiez toujours que vos horaires restent à l'intérieur de la fenêtre convenue avec l'acteur armé : un convoi qui arrive deux heures après la fenêtre n'a plus d'accord.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 5',
    title: 'Composer le convoi, équiper les véhicules et soigner la signalisation',
    intro: "La signalisation humanitaire claire sur les véhicules est une stratégie de dissuasion : elle décourage par une présence visible. Elle ne remplace pas l'atténuation, mais elle y contribue. La composition et l'équipement relèvent de l'atténuation : ils réduisent l'impact d'un blocage ou d'un incident.",
    steps: [
      {
        title: 'Composez le convoi',
        actions: [
          "Un véhicule léger en tête (V-02), deux camions derrière ; aucun véhicule ne circule seul.",
          "Distance entre véhicules : celle qui permet de voir celui de devant en cas de poussière, sans que l'un puisse se faire couper de l'autre.",
          "Un chef de convoi désigné (Fabrice Mbusa) ; équipage nominatif par véhicule ; aucun passager.",
        ],
      },
      {
        title: 'Équipez et marquez',
        actions: [
          "Logo Kemora Santé visible de face, de côté et à l'arrière ; fanion ou drapeau d'identification si la politique de l'organisation le prévoit.",
          "Dans chaque camion : kit de désensablement (4 planches, 2 sangles, 2 pelles), trousse de secours, extincteur, eau, cric et roue de secours contrôlés.",
          "Communication : radio VHF dans chaque véhicule, un téléphone satellite chargé dans V-02, téléphones et batteries externes.",
          "Papiers : manifeste en 3 exemplaires, lettres de voiture, lettre de mission, fiche de reporting d'incident vierge, liste de contacts imprimée.",
          "Interdits : aucune arme, aucun vêtement de type militaire ou camouflage, aucun matériel à double usage dans les véhicules.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — liste de contrôle du 13/05 (contrôlée à 16h30 par F. Mbusa)',
      lines: [
        "V-02 (Hilux) : plein fait, roue de secours contrôlée, VHF testée, téléphone satellite chargé, logo visible : OK.",
        "Camion U1 (6 t, chauffeur D. Safari) : 2 t de SRO et perfusions, bâché et scellé, kit de désensablement présent, VHF testée : OK.",
        "Camion U2 (6 t, chauffeur J. Kitumaini) : 2,6 t (kits choléra, chlore, bâches), bâché et scellé, kit présent, VHF testée : OK.",
        "Papiers : 3 manifestes imprimés, 3 lettres de voiture, fiche de reporting vierge dans V-02 : OK.",
      ],
    },
    result: "Un convoi de trois véhicules marqués, équipés et contrôlés, avec un équipage nominatif et un chef désigné.",
    pitfall: "Considérer que le logo suffit à protéger. La dissuasion décourage une partie des menaces ; elle n'arrête pas une barrière qui exige un passage sous conditions.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 5',
    title: 'Rédiger la fiche de mouvement et notifier le départ',
    intro: "La fiche de mouvement tient sur une page. Elle est remise au chef de convoi et à la base, et elle est la référence unique en cas de doute. La notification informe ceux qui doivent savoir que le convoi circule, selon le mécanisme en place dans le pays.",
    steps: [
      {
        title: 'Remplissez la fiche en 12 rubriques',
        actions: [
          "Référence (MV-KS-0514) ; date et heure de départ.",
          "Itinéraire par tronçon avec kilométrages ; point de repli ; arrêts sûrs.",
          "Équipage et véhicules : noms, fonctions, téléphones, plaques.",
          "Chargement : résumé du manifeste (nature, poids, destinataire).",
          "Horaires prévus et butoirs ; heure limite de circulation.",
          "Points de décision avec leur critère et leur action.",
          "Check-in : horaire et canal. Contacts d'urgence avec leur ordre d'appel.",
          "Décision Go conditionnel : date, validité, conditions restantes.",
          "Accord d'accès : référence de l'entrée du journal d'accès, fenêtre, reconfirmation.",
        ],
      },
      {
        title: 'Notifiez',
        actions: [
          "Au point focal sécurité, à la coordinatrice, au coordinateur logistique pays : fiche complète, la veille avant 17h00.",
          "Au Logistics Cluster (via Jean-Marc Ilunga) et, si le mécanisme est en place, au système de notification de mouvement d'OCHA.",
          "Aux autorités locales si la procédure du pays l'exige, selon les consignes de la coordination.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche de mouvement MV-KS-0514 (extrait, 13/05 17h00)',
      lines: [
        "Départ Goma jeudi 14/05 06h00 ; chef de convoi F. Mbusa ; V-02 (tête), U1 (D. Safari), U2 (J. Kitumaini).",
        "Chargement : 4,6 t — SRO, perfusions, kits choléra, chlore, bâches — destinataire : unité de traitement de Bweza et base de Lukando.",
        "Points de décision : Musi 10h30 ; barrière de Bweza 13h30 ; départ de Bweza 15h30 ; circulation interdite après 17h00.",
        "Check-in : toutes les heures par message, radio VHF dans la zone sans réseau (km 104–118). Contacts : J. Katembo, puis S. Matala, puis J.-M. Ilunga.",
        "Décision : GO conditionnel du 13/05, valable jusqu'au 14/05 17h00. Accord d'accès : journal d'accès du 13/05 07h50, reconfirmation le 14/05 05h30.",
      ],
    },
    result: "Une fiche d'une page, diffusée et notifiée avant 17h00 la veille : ceux qui doivent savoir que le convoi circule le savent.",
    tip: "Imprimez la fiche en deux exemplaires, un dans V-02, un à la base : si les téléphones ne répondent plus, c'est le papier qui fait référence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 5',
    title: 'Briefer les équipages la veille et faire signer la feuille de briefing',
    intro: "Un convoi bien préparé dont les chauffeurs ignorent les consignes reste un convoi à risque. Le briefing sécurité se fait la veille, en face à face, dans la langue des équipages, en vingt minutes. Il ne se délègue pas et ne se remplace pas par un message.",
    steps: [
      {
        title: 'Déroulez huit points',
        actions: [
          "1. But du mouvement et chargement. 2. Itinéraire, horaires, butoirs, heure limite.",
          "3. Rôles : chef de convoi, ordre des véhicules, qui parle aux barrières.",
          "4. Communication : check-in, silence radio, qui appeler.",
          "5. Conduite aux barrières : phrases types, zéro paiement, zéro passager, inspection visuelle seulement.",
          "6. Interdits : armes, tenues camouflage, photographies de personnes armées ou de positions.",
          "7. Conduite à tenir en cas d'incident : Stop, Protéger les personnes, Alerter, Écrire.",
          "8. Droit d'arrêt : tout membre d'équipage peut dire qu'il juge la situation dangereuse, et le convoi s'arrête pour en parler.",
        ],
      },
      {
        title: 'Vérifiez la compréhension et faites signer',
        actions: [
          "Posez trois questions au hasard : « Que répondez-vous si on vous demande 10 000 FC ? », « Qui appelez-vous si le convoi est retenu ? », « À quelle heure ne circulez-vous plus ? ».",
          "Faites signer la feuille : nom, fonction, « briefé et compris », signature.",
          "Rappelez les consignes à 05h30 le jour du départ.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — feuille de briefing du 13/05, 19h00',
      lines: [
        "Participants : F. Mbusa (chef de convoi), D. Safari (U1), J. Kitumaini (U2), le logisticien ; durée 22 minutes.",
        "Questions-test : D. Safari répond « Nous ne payons pas, voici la liste » ; J. Kitumaini sait appeler J. Katembo puis la base ; F. Mbusa rappelle l'heure limite de 17h00.",
        "Droit d'arrêt expliqué et accepté. Feuille signée par 4 personnes à 19h22.",
        "Rappel à 05h30 le 14/05 : accord reconfirmé par J. Katembo, ordre des véhicules confirmé.",
      ],
    },
    result: "Livrable 5 terminé : fiche de mouvement diffusée et feuille de briefing signée, avec compréhension vérifiée par trois questions.",
    tip: "Les questions pour la procédure de preuve de vie (proof of life) se déposent une seule fois auprès de la sécurité ou des ressources humaines, jamais dans un groupe de messagerie ni dans la fiche de mouvement.",
  },

  // ───────────── PROCÉDURE 6 — Communication du convoi ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 4',
    title: 'Créer et configurer le groupe WhatsApp Business du convoi',
    intro: "Mercredi 13 mai, 17h30. Dans la plupart des contextes où le réseau existe, un groupe dédié par convoi est le canal de check-in et d'alerte le plus rapide à mettre en place, sans dépendre d'une radio parfois absente ou en panne. Vous avez besoin de la liste de diffusion décidée avec la décision (Procédure 3).",
    steps: [
      {
        title: 'Créez le groupe',
        actions: [
          "Ouvrez WhatsApp Business > Nouveau groupe.",
          "Nommez-le : CONVOI MV-KS-0514 Goma–Lukando 14/05.",
          "Ajoutez : point focal sécurité, coordinatrice pays, coordinateur logistique pays, logisticien référent, chef de convoi, dispatcheuse. Aucune autre personne.",
        ],
      },
      {
        title: 'Configurez et cadrez',
        actions: [
          "Dans les infos du groupe, réservez la modification aux administrateurs ; administrateurs : logisticien référent et point focal sécurité.",
          "Rédigez la description du groupe avec les règles (voir exemple) et épinglez-la.",
          "Créez des réponses rapides (Outils professionnels > Réponses rapides) pour les messages standard du check-in.",
          "N'écrivez jamais dans le groupe : le nom d'un acteur armé, le contenu d'une négociation, une position GPS détaillée.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — description épinglée du groupe',
      lines: [
        "CONVOI MV-KS-0514 — Goma → Bweza → Lukando — 14/05.",
        "Usage : check-ins et alertes UNIQUEMENT. Format imposé : [MV-KS-0514] heure | lieu | véhicules | statut | prochain point.",
        "Statuts : RAS / ATTENTE / ALERTE. Un silence de plus de 10 minutes après un check-in prévu est une alerte.",
        "Interdit : noms de groupes armés, détails de négociation, positions précises, photos de personnes armées.",
        "Fin du groupe : message de clôture, puis archivage.",
      ],
    },
    result: "Un groupe de six membres, administré, aux règles épinglées, avec des réponses rapides prêtes pour le jour du départ.",
    pitfall: "Ajouter « tout le monde » pour informer. Plus il y a de membres, plus le risque de fuite augmente et moins le groupe est lu en situation d'alerte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 4',
    title: 'Fixer les points de situation à heure fixe et le format du message',
    intro: "Un point de situation n'est utile que s'il est régulier, bref et lisible en deux secondes. Vous fixez le rythme (toutes les heures, et à chaque étape identifiée de l'itinéraire) et le format, pour qu'un message manquant soit immédiatement visible.",
    steps: [
      {
        title: 'Définissez le rythme',
        actions: [
          "Check-in obligatoire : au départ, à chaque point de la fiche (Musi, Kabati, avant la barrière de Bweza, après la barrière, unité de Bweza, départ de Bweza, Lukando), et au minimum toutes les heures.",
          "Zone sans réseau (km 104–118) : message d'entrée au km 104 (« ENTRÉE ZONE SANS RÉSEAU, prochain contact par radio au km 118 ») ; contact par VHF ou téléphone satellite ensuite.",
        ],
      },
      {
        title: 'Imposez le format et les statuts',
        actions: [
          "Format : [référence] heure | lieu | véhicules présents | statut | prochain point.",
          "RAS : tout est normal. ATTENTE : arrêt prévu ou contrôle en cours, sans danger immédiat. ALERTE : danger, blocage prolongé ou événement anormal.",
          "Le point focal répond « reçu » à chaque check-in ; l'absence de « reçu » est signalée au chef de convoi.",
        ],
      },
    ],
    table: {
      columns: ['Heure', 'Message du convoi (exemple du 14/05)', 'Statut'],
      rows: [
        ['06h02', '[MV-KS-0514] 06h02 | Goma base | 3/3 | départ | prochain point Musi 09h00', 'RAS'],
        ['09h05', '[MV-KS-0514] 09h05 | Musi km 97 | 3/3 | pont franchi un par un | prochain point Kabati 09h45', 'RAS'],
        ['09h50', '[MV-KS-0514] 09h50 | Kabati km 104 | 3/3 | ENTRÉE ZONE SANS RÉSEAU, radio au km 118', 'RAS'],
        ['11h50', '[MV-KS-0514] 11h50 | Bweza km 118 | 3/3 | contrôle à la barrière, convoi retenu | point à 12h30', 'ATTENTE'],
        ['12h30', '[MV-KS-0514] 12h30 | Bweza km 118 | 3/3 | convoi libéré à 12h25 | unité de traitement 12h45', 'RAS'],
      ],
    },
    result: "Un rythme et un format écrits dans la description du groupe, avec des statuts qui évitent les messages longs en cas d'urgence.",
    tip: "Si le convoi est retenu, envoyez ATTENTE dès la première minute puis un point toutes les 15 minutes : la base saura que vous contrôlez la situation, ou qu'elle doit activer le protocole.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 4',
    title: 'Écrire le protocole de silence et prévoir les moyens de secours',
    intro: "Le moment où un message ne vient pas est le moment où le dispositif est vraiment testé. Le protocole de silence dit qui alerte qui, après combien de temps sans nouvelles, et par quel moyen. Il est écrit avant le départ et connu de tous.",
    steps: [
      {
        title: 'Écrivez l\'échelle d\'escalade',
        actions: [
          "T0 = heure prévue d'un check-in non reçu.",
          "T0 + 10 minutes : le logisticien référent appelle le téléphone du chef de convoi puis celui de V-02.",
          "T0 + 15 minutes : appel par VHF ou téléphone satellite ; en zone sans réseau, appel du convoi sur la radio sur le canal convenu.",
          "T0 + 30 minutes : alerte du point focal sécurité ; appel des autres numéros de l'équipage et du dernier point connu (unité de Bweza).",
          "T0 + 45 minutes : appel à la coordinatrice pays ; contact de EPTK et du Logistics Cluster pour toute information sur l'axe.",
          "T0 + 60 minutes : protocole d'incident activé par le point focal sécurité ; direction pays informée.",
        ],
      },
      {
        title: 'Prévoyez les moyens de secours',
        actions: [
          "Radio VHF dans chaque véhicule, téléphone satellite dans V-02, liste de contacts imprimée dans chaque véhicule.",
          "Testez chaque moyen la veille : message au groupe, radio check, appel satellite.",
          "Convenez d'un mot de contrainte (un mot neutre qui signale discrètement qu'on parle sous contrainte), à ne jamais écrire dans le groupe.",
        ],
      },
    ],
    table: {
      columns: ['Délai après le check-in manqué', 'Qui', 'Action'],
      rows: [
        ['+10 minutes', 'Logisticien référent', "Appelle le chef de convoi, puis V-02."],
        ['+15 minutes', 'Logisticien référent', "VHF et téléphone satellite."],
        ['+30 minutes', 'Point focal sécurité', "Alerte, appel de l'unité de Bweza et des autres numéros de l'équipage."],
        ['+45 minutes', 'Coordinatrice pays', "Informée ; contact avec EPTK et Logistics Cluster."],
        ['+60 minutes', 'Point focal sécurité', "Protocole d'incident activé ; direction pays informée."],
      ],
    },
    result: "Une échelle d'escalade en cinq paliers, avec un responsable par palier, connue des équipages et de la base.",
    pitfall: "Attendre une heure avant de s'inquiéter « pour ne pas déranger ». Un silence de dix minutes est une information : agissez.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 4',
    title: 'Tester, activer et clôturer le dispositif',
    intro: "Un dispositif n'est valide que s'il a été testé et clôturé proprement. Le test se fait la veille ; l'activation le matin du départ ; la clôture à l'arrivée du dernier véhicule, avec un retour d'observation routière qui nourrit la Procédure 8.",
    steps: [
      {
        title: 'Testez la veille',
        actions: [
          "Envoyez un message test au groupe ; chaque membre répond « reçu ».",
          "Faites un radio check sur le canal VHF avec chaque véhicule.",
          "Faites un appel de test sur le téléphone satellite et notez la qualité de la liaison.",
        ],
      },
      {
        title: 'Activez le matin et clôturez le soir',
        actions: [
          "05h30 : briefing de rappel ; 05h45 : message « accord reconfirmé » et test final ; 06h00 : message de départ.",
          "Arrivée du dernier véhicule : message de clôture avec l'heure d'arrivée, les points de passage réels et les anomalies.",
          "Exportez la conversation sans les médias, rangez-la dans le dossier du mouvement ; ne réutilisez pas le groupe pour le convoi suivant.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — messages clés du 14/05',
      lines: [
        "05h40 — J. Katembo : « Accord reconfirmé par le BCZ avec le poste de Bweza à 05h30. »",
        "05h45 — test final : 6 membres « reçu » ; VHF OK sur les 3 véhicules.",
        "17h20 — Clôture : « [MV-KS-0514] 17h20 | Lukando | 3/3 arrivés à 15h10 | un incident mineur à la barrière de Bweza (11h50–12h25), fiche envoyée à 13h18 | tronçon km 104–118 franchi en 1h50 | groupe archivé. »",
      ],
    },
    result: "Livrable 6 terminé : un dispositif testé, activé, journalisé et clôturé, avec des messages archivés dans le dossier du mouvement.",
    tip: "Le message de clôture fait gagner du temps à tout le monde : c'est la matière du retour d'observation routière que vous partagerez avec le cluster.",
  },

  // ───────────── PROCÉDURE 7 — Reporter un incident ou un near-miss (docx) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 8',
    title: 'Réagir dans l\'ordre, qualifier l\'événement et ouvrir la fiche',
    intro: "Jeudi 14 mai, 12h25. Le convoi vient d'être libéré après 35 minutes de retenue à la barrière de Bweza. La première règle n'est pas d'écrire : c'est de protéger les personnes, puis d'alerter, puis de qualifier, puis d'écrire dans l'heure. Le template est fiche-reporting-incident.docx ; il tient sur une à deux pages.",
    steps: [
      {
        title: 'Suivez l\'ordre : Stop, Protéger, Alerter, Écrire',
        actions: [
          "Stop : arrêtez le mouvement si ce n'est pas déjà fait ; mettez le convoi en sécurité.",
          "Protéger : vérifiez que personne n'est blessé, rassemblez l'équipage, premiers secours si nécessaire.",
          "Alerter : appelez le point focal sécurité dès que les personnes sont en sécurité (dans les 15 minutes), puis envoyez le statut dans le groupe.",
          "Écrire : la fiche part par écrit dans l'heure qui suit la mise en sécurité.",
        ],
      },
      {
        title: 'Qualifiez avant d\'ouvrir la fiche',
        actions: [
          "Un incident est un événement réalisé avec conséquence ; un near-miss est un événement évité de justesse. En cas de doute, reportez et qualifiez à la hausse.",
          "Choisissez le niveau de gravité : near-miss, incident mineur (retard, retenue brève, perte limitée, aucun blessé), incident majeur (blessé, décès, enlèvement, arme utilisée contre le personnel, perte importante).",
          "Ouvrez fiche-reporting-incident.docx, enregistrez-le sous AAAA-MM-JJ_Incident_[Lieu]_[Référence]_v1.docx, et repérez les 6 sections.",
        ],
      },
    ],
    table: {
      columns: ['Événement', 'Qualification', 'Pourquoi'],
      rows: [
        ['Retenue d\'un véhicule 40 minutes par un groupe armé, inspection du chargement, aucune violence', 'Incident mineur', "Événement réalisé avec conséquence : retenue, inspection, retard."],
        ['Un véhicule évite de justesse un point de contrôle inconnu', 'Near-miss', "Aucune conséquence, mais l'événement aurait pu en avoir une."],
        ['Une alerte sécurité reçue une heure après le passage du point concerné', 'Near-miss', "Dysfonctionnement du circuit d'alerte, sans conséquence directe."],
        ['Un coup de feu tiré en direction du convoi, sans blessé', 'Incident majeur', "Arme utilisée contre le personnel, même sans blessé : siège informé."],
        ['Le convoi Kemora Santé retenu 35 min à Bweza, un paiement exigé et refusé', 'Incident mineur', "Retenue et exigence réalisées ; aucune blessure, aucune perte."],
      ],
    },
    result: "L'événement est qualifié (incident mineur), le point focal sécurité est alerté, la fiche v1 est ouverte avec ses six sections visibles.",
    pitfall: "Écrire d'abord et appeler ensuite. Une fiche parfaite qui part à la 50e minute vaut moins qu'un appel passé dans les 15 premières.",
    tip: "Dites-le au briefing : un near-miss bien reporté ne sanctionne personne. Un chauffeur qui craint un blâme taira l'événement, et vous perdrez l'information qui protégerait la prochaine équipe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 8',
    title: 'Section 1 — Identification de l\'incident (4 champs)',
    intro: "La section 1 est un tableau de 2 lignes et 2 colonnes. Elle doit permettre à celui qui lit en premier de savoir quand, où, quelle gravité et à quel mouvement l'événement se rattache. Vous remplissez les quatre cellules sans ajouter de texte d'aide.",
    steps: [
      {
        title: 'Remplissez les quatre champs',
        actions: [
          "Date et heure (JJ/MM/AAAA, HH:MM) : heure de début et heure de fin si l'événement a duré.",
          "Lieu précis (route, ville, point kilométrique, coordonnées GPS si disponibles) : écrivez le point kilométrique et le tronçon ; si le GPS n'a pas été relevé, écrivez-le et ajoutez-le en version 2.",
          "Niveau de gravité (near-miss / incident mineur / incident majeur) : une des trois valeurs, rien d'autre.",
          "Référence du mouvement ou de la mission concernée : le code de la fiche de mouvement.",
        ],
      },
    ],
    table: {
      columns: ['Champ du template', 'Contenu saisi (fil rouge)'],
      rows: [
        ['Date et heure', "14/05/2026, 11:50 à 12:25 (35 minutes)"],
        ['Lieu précis', "Barrière de Bweza, km 118, axe Goma–Lukando ; GPS non relevé sur le moment (à ajouter en version 2)"],
        ['Niveau de gravité', "Incident mineur"],
        ['Référence du mouvement ou de la mission', "MV-KS-0514 — convoi Goma–Bweza–Lukando du 14/05/2026"],
      ],
    },
    result: "La section 1 est complète, lisible seule, avec un niveau de gravité qui reprend l'un des trois termes du template.",
    pitfall: "Écrire « en début de journée » ou « à la barrière ». Une heure approximative et un lieu vague rendent la fiche inexploitable pour la détection de motifs.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 8',
    title: 'Section 2 — Personnes et biens impliqués (4 champs)',
    intro: "La section 2 est aussi un tableau de 2 lignes et 2 colonnes : personnel, véhicules et biens, tiers, témoins. Ne notez que ce que vous savez. Pour les tiers, décrivez ce qui est observable, jamais une qualification politique.",
    steps: [
      {
        title: 'Remplissez les quatre champs',
        actions: [
          "Personnel impliqué (noms, fonctions, statut national/expatrié) : toutes les personnes présentes, une par ligne.",
          "Véhicules, matériel ou biens impliqués (plaque, type, valeur estimée) : véhicules, chargement et ce qui a été touché ou exigé.",
          "Tiers impliqués (autorités, acteurs armés, population civile) : nombre, tenue, armement visible, fonction annoncée.",
          "Témoins présents (noms si possible, ou description) : nom ou description (« deux chauffeurs de camions commerciaux »).",
        ],
      },
    ],
    table: {
      columns: ['Champ du template', 'Contenu saisi (fil rouge)'],
      rows: [
        ['Personnel impliqué', "Fabrice Mbusa, chef de convoi (national) ; Désiré Safari, chauffeur U1 (national) ; Jérémie Kitumaini, chauffeur U2 (national) ; le logisticien terrain Kemora Santé (expatrié)"],
        ['Véhicules, matériel ou biens', "V-02 Hilux (plaque fictive 4821AB05) ; camions Umoja U1 et U2 de 6 t ; chargement 4,6 t, valeur estimée 18 500 USD ; aucun bien pris, aucun paiement"],
        ['Tiers impliqués', "Six hommes armés (fusils d'assaut visibles) en tenue mixte, groupe non identifié ; le chef du poste, se présentant comme « Commandant Zawadi »"],
        ['Témoins présents', "Chauffeurs de deux camions commerciaux à l'arrêt ; une dizaine de civils au marché de Bweza (noms non relevés)"],
      ],
    },
    result: "Les quatre champs sont renseignés ; chaque personne présente est identifiée ou décrite.",
    pitfall: "Écrire « les rebelles » ou le nom supposé d'un mouvement. Vous décrivez des hommes armés observés, pas une appartenance que vous ne pouvez pas prouver.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 8',
    title: 'Section 3 — Description : une chronologie factuelle, sans interprétation',
    intro: "La section 3 est la plus lue et la plus mal remplie. Le template demande une chronologie factuelle : qui, quoi, où, comment — dans l'ordre, sans interprétation ni jugement. Chaque ligne commence par une heure et décrit un fait observable.",
    steps: [
      {
        title: 'Écrivez la chronologie',
        actions: [
          "Une ligne par fait : HHhMM — qui — a fait ou dit — quoi — où.",
          "Remplacez chaque jugement par le fait observable qui le fonde (voir tableau).",
          "Relisez à voix haute : si une phrase contient « sûrement », « apparemment » ou « agressif », réécrivez-la.",
          "Faites relire par le chef de convoi : il valide que la chronologie correspond à ce qu'il a vécu.",
        ],
      },
    ],
    table: {
      columns: ['Interprétation à bannir', 'Fait observable à écrire'],
      rows: [
        ['Ils étaient agressifs', "Un homme armé a crié l'ordre d'ouvrir les camions et a posé la main sur la bâche."],
        ['Ils voulaient nous voler', "Un homme a demandé 10 000 FC par camion et les clés des deux camions."],
        ['Le chef a été correct', "Le chef du poste est arrivé à 12h15, a demandé le manifeste et a ordonné une inspection visuelle."],
      ],
    },
    example: {
      title: 'Fil rouge — texte de la section 3',
      lines: [
        "11h48 — Le convoi (V-02, U1, U2) arrive à la barrière de Bweza ; la chaîne est baissée ; six hommes armés sont visibles.",
        "11h50 — Un homme armé ordonne l'arrêt et le stationnement sur le côté. F. Mbusa présente le manifeste. Message ATTENTE envoyé dans le groupe.",
        "11h55 — Le même homme demande 10 000 FC par camion et l'ouverture des deux camions. F. Mbusa répond : « Nous ne payons pas, voici la liste. »",
        "12h05 — L'homme demande les clés des camions. F. Mbusa refuse et demande à parler au chef. Appel de J. Katembo par le logisticien.",
        "12h15 — Le chef du poste arrive, demande le manifeste, confirme l'accord de la veille et ordonne une inspection visuelle.",
        "12h15–12h22 — Deux bâches sont soulevées en présence de F. Mbusa ; aucun objet n'est retiré.",
        "12h25 — La chaîne est levée ; le convoi repart. Aucun blessé, aucun bien pris, aucun paiement.",
      ],
    },
    result: "Sept lignes horodatées qui décrivent ce qui s'est passé sans une seule interprétation.",
    pitfall: "Écrire en prose continue et mêler ce qui s'est passé avec ce que vous en pensez. Le lecteur ne pourra plus séparer les faits de votre avis.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 8',
    title: 'Section 4 — Action immédiate prise',
    intro: "La section 4 décrit ce qui a été fait sur le moment : évacuation, alerte sécurité, premiers secours, arrêt du mouvement, contact avec une autorité. Elle répond à la question : qu'avons-nous fait pour protéger les personnes et contrôler la situation, et dans quel ordre ?",
    steps: [
      {
        title: 'Rédigez les actions dans l\'ordre',
        actions: [
          "Une ligne par action, avec l'heure et la personne qui l'a menée.",
          "Distinguez ce que l'équipage a fait (arrêt, refus de paiement, protection) de ce que la base a fait (appels, contacts avec le BCZ).",
          "Terminez par l'état de la situation au moment où vous écrivez.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — texte de la section 4',
      lines: [
        "11h50 — Arrêt du convoi à la demande de la barrière ; aucun véhicule n'a forcé le passage (F. Mbusa).",
        "11h51 — Message ATTENTE dans le groupe du convoi (logisticien) ; points toutes les 15 minutes.",
        "11h55 — Refus poli de tout paiement, manifeste présenté (F. Mbusa).",
        "12h05 — Appel à J. Katembo, qui prévient le médecin chef de zone pour joindre le chef du poste (logisticien / J. Katembo).",
        "12h15–12h25 — Inspection visuelle supervisée acceptée, aucune fouille sans témoin ; convoi libéré.",
        "12h30 — Message RAS dans le groupe. 12h45 : arrivée à l'unité de traitement de Bweza ; équipage en bonne santé.",
      ],
    },
    result: "Un lecteur voit immédiatement que les personnes ont été protégées, que la chaîne d'alerte a fonctionné et dans quel ordre.",
    tip: "Notez aussi ce que vous avez décidé de NE PAS faire (pas de paiement, pas de demi-tour précipité) : c'est souvent là que se joue la qualité de la réaction.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 6 sur 8',
    title: 'Section 5 — Suivi requis : actions, responsables et échéances',
    intro: "La section 5 est un tableau à deux colonnes : « Actions de suivi à mener » et « Responsable(s) et échéance ». Le template fournit deux lignes vierges ; pour en ajouter, placez le curseur dans la dernière cellule et appuyez sur Tab. Chaque action est un verbe, un objet, un nom et une date.",
    steps: [
      {
        title: 'Rédigez chaque ligne de suivi',
        actions: [
          "Colonne 1 : verbe d'action + objet (« Reconfirmer l'accord pour le retour des camions »).",
          "Colonne 2 : prénom nom et échéance précise (jour et heure).",
          "Pensez à trois catégories : sécurité du prochain mouvement, information des autres acteurs, mise à jour de la grille.",
          "Ne laissez aucune action sans responsable : une action sans nom n'est pas suivie.",
        ],
      },
    ],
    table: {
      columns: ['Actions de suivi à mener', 'Responsable(s) et échéance'],
      rows: [
        ['Reconfirmer avec le chef du poste l\'accord de passage du 15/05 (retour des deux camions Umoja)', 'J. Katembo — 14/05, 17h00'],
        ['Décider d\'autoriser ou non le convoi de retour du 15/05', 'S. Matala, sur proposition du logisticien — 14/05, 18h00'],
        ['Partager l\'information humanitaire sur le passage (durée, déroulé neutre) avec le Logistics Cluster', 'J.-M. Ilunga — 15/05, 10h00'],
        ['Mettre à jour la grille (barrière de Bweza) et le registre des incidents', 'Logisticien — 15/05, 12h00'],
        ['Ajouter les coordonnées GPS à la fiche (version 2)', 'F. Mbusa — 14/05, 18h00'],
      ],
    },
    result: "Cinq actions de suivi, chacune avec son responsable et son échéance : la fiche n'est pas un constat, c'est un plan.",
    pitfall: "Écrire « suivre la situation » en colonne 1. Ce n'est pas une action : il n'y a ni verbe précis, ni livrable, ni échéance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 7 sur 8',
    title: 'Section 6 — Distribution, validation, signature et envoi dans l\'heure',
    intro: "La section 6 contient deux tableaux : « Liste de diffusion » et « Classification », puis « Rédigé par » et « Date et signature ». La liste de diffusion est celle décidée avec le dispositif de communication ; elle prévoit le siège en cas d'incident majeur. Le délai d'une heure n'est pas arbitraire : c'est le temps au-delà duquel une information sécuritaire perd sa valeur opérationnelle.",
    steps: [
      {
        title: 'Remplissez les quatre cellules',
        actions: [
          "Liste de diffusion (coordination sécurité, direction pays, siège si incident majeur) : noms et fonctions, pas seulement des fonctions.",
          "Classification (interne / confidentiel) : « confidentiel » dès qu'un acteur armé est décrit ou qu'un accord d'accès est cité.",
          "Rédigé par (nom, fonction) ; Date et signature : date et heure d'envoi, votre signature.",
        ],
      },
      {
        title: 'Envoyez dans l\'heure, même incomplet',
        actions: [
          "Exportez la fiche en PDF et envoyez-la par e-mail aux destinataires ; dans le groupe du convoi, écrivez seulement « fiche envoyée ».",
          "Si une information manque (GPS, nom d'un témoin), envoyez quand même la version 1 et complétez en version 2.",
          "Ne publiez jamais la fiche sur un groupe ouvert.",
        ],
      },
    ],
    table: {
      columns: ['Champ du template', 'Contenu saisi (fil rouge)'],
      rows: [
        ['Liste de diffusion', "Joseph Katembo (point focal sécurité) ; Sylvie Matala (coordinatrice pays) ; Jean-Marc Ilunga (coordinateur logistique pays) ; siège : non requis (incident mineur)"],
        ['Classification', "Confidentiel"],
        ['Rédigé par', "Logisticien terrain, Kemora Santé"],
        ['Date et signature', "14/05/2026, 13:18 — signé"],
      ],
    },
    result: "Livrable 7 : la fiche v1 est envoyée à 13h18, 53 minutes après la mise en sécurité (12h25), donc dans l'heure. Une version 2 suivra avec le GPS.",
    pitfall: "Attendre d'avoir « tout » pour envoyer. L'information la plus utile à la coordination est celle qui arrive dans l'heure, même avec trois champs à compléter plus tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 8 sur 8',
    title: 'Enregistrer l\'événement au registre et détecter les motifs',
    intro: "Un incident isolé est une anecdote ; cinq incidents semblables sur le même tronçon en un mois sont un signal. Ce signal n'apparaît que si chaque événement, même mineur, est reporté de façon systématique et comparable. Vous tenez pour cela un registre des incidents dans Excel pendant toute la mission (outil central de ce module).",
    steps: [
      {
        title: 'Créez ou ouvrez le registre',
        actions: [
          "Colonnes proposées (à créer vous-même, le template n'en fournit pas) : N°, Date, Lieu ou tronçon, Type (incident / near-miss), Gravité, Acteur(s), Résumé factuel, Référence de la fiche, État du suivi.",
          "Ajoutez une ligne par fiche reçue ; utilisez toujours le même libellé de lieu (copier-coller), pour que le comptage fonctionne.",
          "Convertissez en tableau (Ctrl+T) et figez la ligne d'en-têtes.",
        ],
      },
      {
        title: 'Cherchez le motif',
        actions: [
          "Dans une cellule de contrôle, comptez les événements du même lieu sur 30 jours : =NB.SI.ENS(C:C;\"T4 Barrière Bweza km 118\";B:B;\">=\"&AUJOURDHUI()-30).",
          "Règle de ce module : trois événements semblables (incidents ou near-miss) sur le même point en 30 jours = motif ; ouvrez une revue avec le point focal sécurité et révisez la probabilité de la grille.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Date', 'Lieu / tronçon', 'Type', 'Gravité', 'Résumé factuel', 'Fiche'],
      rows: [
        ['1', '2026-05-06', 'T4 Barrière Bweza km 118', 'Incident', 'Mineur', 'Véhicule EPTK retenu 20 min, contrôle de papiers et demande d\'inspection', 'Fiche EPTK reçue 12/05'],
        ['2', '2026-05-08', 'T4 Barrière Bweza km 118', 'Incident', 'Mineur', 'Camion Umoja : demande de 10 000 FC et d\'inspection', 'Rapport oral D. Safari, fiche demandée'],
        ['3', '2026-05-14', 'T4 Barrière Bweza km 118', 'Incident', 'Mineur', 'Convoi MV-KS-0514 retenu 35 min, paiement refusé', 'Fiche v1 du 14/05'],
        ['4', '2026-04-30', 'T5 Bweza–km 110', 'Near-miss', 'Near-miss', 'Véhicule EPTK suivi par deux motos vers 18h20', 'Fiche EPTK reçue 12/05'],
      ],
    },
    result: "Le contrôle affiche 3 pour la barrière de Bweza au 15/05 : motif confirmé. La Procédure 8 en tire les conséquences sur la grille.",
    pitfall: "Écrire « Bweza » sur une ligne et « barrière Bweza » sur une autre : le comptage retourne 1 au lieu de 3 et le motif n'apparaît jamais.",
  },

  // ───────────── PROCÉDURE 8 — Mettre à jour la grille après le mouvement ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 3',
    title: 'Débriefer à chaud et produire le retour d\'observation routière',
    intro: "Jeudi 14 mai, 17h30, à Lukando. Une grille de risques n'est jamais définitive : elle se met à jour après chaque mouvement, retour d'expérience ou incident reporté. La matière première est le débriefing de l'équipage, que vous faites le soir même, avant que les souvenirs ne s'estompent.",
    steps: [
      {
        title: 'Débriefez 15 minutes avec l\'équipage',
        actions: [
          "1. Qu'est-ce qui s'est passé comme prévu (horaires, communication, consignes) ?",
          "2. Qu'est-ce qui a changé sur la route par rapport à ce qu'on savait (barrière, piste, durées réelles) ?",
          "3. Y a-t-il eu un événement, même minime, qui n'a pas été reporté ?",
          "4. Les horaires prévus et réels : où a-t-on perdu du temps ?",
          "5. Les consignes de conduite aux barrières ont-elles fonctionné ? Qu'a-t-on dit, qu'a-t-on refusé ?",
          "6. Que changeriez-vous pour le prochain mouvement ?",
        ],
      },
      {
        title: 'Rédigez le retour d\'observation routière',
        actions: [
          "Format en 6 lignes : date, tronçon, état de la route avec durées réelles, points de contrôle et exigences, événements (références des fiches), recommandations.",
          "Envoyez-le à Joseph Katembo et à Amina Sow (Logistics Cluster) dans les 24 heures, avec uniquement des informations humanitaires et neutres.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — retour d\'observation routière, envoyé le 15/05 à 09h30',
      lines: [
        "Axe Goma–Lukando, convoi du 14/05. Goma–Musi : 2h50 (prévu 2h48). Pont de la Musi : un camion à la fois, 22 min.",
        "Kabati–Bweza (km 104–118) : 1h50 au lieu de 1h24, ornières profondes ; sans réseau confirmé ; aucun enlisement.",
        "Barrière de Bweza : contrôle de 35 min (11h50–12h25), inspection visuelle contre le manifeste, aucun prélèvement, aucun paiement. Accord de passage reconnu par le chef du poste.",
        "Bweza–Lukando : RAS, arrivée à 15h10.",
        "Recommandation : prévoir 2h minimum pour le tronçon km 104–118 ; annoncer l'arrivée au poste 30 min avant le passage.",
      ],
    },
    result: "Un débriefing noté, un retour d'observation partagé : vous donnez au cluster l'information que vous aviez promise lors de votre enregistrement.",
    tip: "Faites le débriefing devant un café et sans jugement : un chauffeur qui se sent évalué cachera ce qui compte. Ce que vous cherchez, ce sont des faits et des idées d'amélioration.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 3',
    title: 'Réviser les lignes de la grille : règles et modifications',
    intro: "Vendredi 15 mai, 11h00. Vous reprenez la grille v02 et vous révisez chaque ligne à la lumière des faits : débriefing, registre des incidents, fiche d'EPTK reçue le 12/05, retour d'observation. La règle est simple : on ne modifie une probabilité que si un fait le justifie, et on ne baisse jamais sur un seul mouvement réussi.",
    steps: [
      {
        title: 'Enregistrez une nouvelle version',
        actions: [
          "Enregistrez sous AAAA-MM-JJ_Grille-risques_Goma-Lukando_v03.xlsx ; la v02 reste intacte comme preuve de la décision du 13/05.",
          "Passez ligne par ligne ; modifiez A, B, C, E, F selon les règles du tableau ci-dessous.",
          "Rouvrez la Synthèse : vérifiez C5 à C8 et C10, et que la somme de C5 à C8 correspond au nombre de lignes saisies.",
        ],
      },
    ],
    table: {
      columns: ['Observation', 'Action sur la grille'],
      rows: [
        ['Même événement trois fois en 30 jours sur un point (registre)', "Probabilité +1 (maximum 5) et revue avec le point focal sécurité."],
        ['Mouvement réussi sans incident', "Ne rien baisser le jour même ; après deux mouvements consécutifs sans événement et avec une source directe, probabilité −1 au maximum."],
        ['Incident réalisé', "Réexaminer l'impact et l'efficacité de chaque mesure ; compléter la mesure si elle était insuffisante."],
        ['Mesure prévue non appliquée', "Remonter le résiduel au niveau initial converti ; écrire pourquoi."],
        ['Fait confirmé ou démenti', "Changer le statut dans la colonne A (Confirmé / Probable / À confirmer)."],
        ['Grille non révisée depuis plus de 7 jours en contexte instable', "Ne plus la prendre comme base d'une décision Go sans revue."],
      ],
    },
    example: {
      title: 'Fil rouge — modifications de la v02 à la v03 (15/05)',
      lines: [
        "Barrière de Bweza : probabilité 4 → 5 (3 événements en 30 jours au registre) ; score 20 ; mesure complétée : copie du manifeste signée remise au chef, arrivée annoncée par téléphone 30 min avant ; résiduel maintenu à 3 (P' 3 × I' 3).",
        "Near-miss EPTK : statut À confirmer → Confirmé (fiche EPTK du 12/05 : km 110, 18h20) ; probabilité maintenue à 3 (un seul événement).",
        "Piste Kabati–Bweza : durée réelle 1h50 ; mesure complétée : prévoir 2h minimum pour le tronçon ; probabilité maintenue à 4.",
        "Zone sans réseau et pillage nocturne : aucune modification ; revue dans 7 jours.",
        "Synthèse v03 : Faible 0, Modéré 1, Élevé 3, Critique 1 ; C10 = 0.",
      ],
    },
    result: "Chaque modification est justifiée par un fait daté ; la v02 est conservée ; la Synthèse est cohérente.",
    pitfall: "Baisser le résiduel de la barrière de 3 à 2 « parce que ça s'est bien passé ». Un convoi réussi après 35 minutes de retenue n'est pas une preuve de sécurité, c'est une donnée de plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 3',
    title: 'Tenir le journal de révision, rediffuser et fixer la prochaine revue',
    intro: "Une grille mise à jour qui n'est pas rediffusée ne protège personne. Vous tracez ce qui a changé, vous informez ceux qui vont partir ensuite et vous fixez la date de la prochaine revue. C'est ce qui rend la grille vivante.",
    steps: [
      {
        title: 'Tenez le journal de révision',
        actions: [
          "Dans le journal d'accès, une ligne par version : date, version, modifications, raison, auteur.",
          "Conservez toutes les versions dans le dossier du mouvement : v01, v02, v03.",
        ],
      },
      {
        title: 'Rediffusez et planifiez',
        actions: [
          "Envoyez la v03 et le résumé des modifications à la coordinatrice, au coordinateur logistique pays et au point focal sécurité.",
          "Informez les équipages du prochain mouvement des changements (durée du tronçon, consigne à la barrière).",
          "Fixez la prochaine revue : après le convoi de retour du 15/05, puis au minimum chaque semaine.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — journal de révision de la grille (extrait)',
      lines: [
        "11/05 16h20 — v01 — grille initiale, 5 risques ; C10 = 1 — logisticien.",
        "13/05 11h30 — v02 — accord d'accès obtenu à Bweza ; résiduel de la barrière 4 → 3 ; C10 = 0 — logisticien.",
        "15/05 11h40 — v03 — probabilité barrière 4 → 5 (motif au registre) ; statut near-miss EPTK Confirmé ; mesures complétées ; C10 = 0 — logisticien.",
        "Prochaine revue : 15/05 après le convoi de retour, puis le 22/05 ; diffusion v03 à 12h00 à S. Matala, J.-M. Ilunga, J. Katembo.",
      ],
    },
    result: "Livrable 8 terminé : grille v03 diffusée, journal de révision à jour, prochaine revue datée.",
    tip: "Quand un nouveau logisticien arrive en rotation, le journal de révision et le registre sont ce qui lui permet de reprendre le dossier en une heure au lieu d'une semaine.",
  },

  // ───────────── CAS RÉSOLUS ─────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Convoi MV-KS-0514 : le raisonnement de J−3 à J+1',
    scenario: "Lundi 11 mai 2026, Kemora Santé doit réapprovisionner l'unité de traitement du choléra de Bweza avant la rupture de SRO du 18 mai. Un point sécurité oral signale une barrière armée, une piste dégradée et un near-miss non écrit. Voici, jour par jour, ce qui a été fait, pourquoi, et ce que cela a produit.",
    steps: [
      {
        title: 'J−3 — lundi 11 mai : transformer un oral en faits cotés',
        actions: [
          "08h35 : point sécurité noté mot pour mot (6 affirmations).",
          "09h00–12h30 : trois entretiens (chauffeur Umoja, chef chauffeur, magasinière), appels aux sources officielles, note de situation datée avec fiabilité.",
          "14h00–16h20 : grille v01 remplie ; 5 risques, scores 16 / 15 / 12 / 12 / 6 ; un résiduel à 4 (barrière de Bweza).",
          "17h05 : demande de validation envoyée à Sylvie Matala et Joseph Katembo ; mandat obtenu à 18h10.",
        ],
        result: "Livrables 1 et 2, premiers éléments du livrable 3 : NO-GO en l'état, GO conditionnel si 4 conditions sont réunies avant mercredi 17h00.",
      },
      {
        title: 'J−2 — mardi 12 mai : préparer l\'accès et l\'itinéraire',
        actions: [
          "08h00–10h00 : carte des acteurs de l'accès ; fiche de préparation de la négociation validée par J. Katembo.",
          "Appel du médecin chef de zone au poste de Bweza pour annoncer la visite du lendemain.",
          "14h00–17h00 : itinéraire, points d'arrêt sûrs, points de décision, horaires et butoirs ; fiche d'EPTK sur le near-miss reçue à midi.",
        ],
        result: "Fiche de préparation et premières pièces de la fiche de mouvement.",
      },
      {
        title: 'J−1 — mercredi 13 mai : obtenir l\'accord, reconnaître, décider',
        actions: [
          "07h50 : entretien à la barrière avec le chef du poste ; accord de passage pour le 14/05 entre 11h00 et 14h00, inspection visuelle acceptée, aucun paiement.",
          "09h15 : entrée du journal d'accès ; 11h30 : grille v02, résiduel de la barrière 3, C10 = 0.",
          "Reconnaissance de V-02 sur le tronçon km 104–118 : praticable, ornières profondes, pas d'enlisement.",
          "17h00 : message de décision GO conditionnel diffusé ; 19h00 : briefing des équipages (feuille signée à 19h22) ; groupe WhatsApp testé.",
        ],
        result: "Livrables 3 (décision), 4, 5 et 6.",
      },
      {
        title: 'J — jeudi 14 mai : conduire, qualifier, reporter',
        actions: [
          "05h30 : accord reconfirmé par téléphone ; 06h00 : départ ; check-ins toutes les heures.",
          "11h50–12h25 : retenue de 35 minutes à la barrière de Bweza, inspection visuelle, paiement refusé, aucun blessé.",
          "13h18 : fiche de reporting v1 envoyée (incident mineur), 53 minutes après la mise en sécurité.",
          "15h10 : arrivée à Lukando ; message de clôture ; débriefing à 17h30.",
        ],
        result: "Livrable 7 : fiche d'incident remise dans l'heure ; les SRO arrivent à l'unité de Bweza 4 jours avant la rupture.",
      },
      {
        title: 'J+1 — vendredi 15 mai : réviser et rediffuser',
        actions: [
          "09h30 : retour d'observation routière envoyé au point focal sécurité et au Logistics Cluster.",
          "Registre : 3 événements semblables en 30 jours à la barrière de Bweza → motif ; probabilité 4 → 5 ; grille v03.",
          "12h00 : v03 diffusée avec le journal de révision ; décision sur le convoi de retour des camions prise par la coordinatrice.",
        ],
        result: "Livrable 8 : grille v03, journal de révision, prochaine revue le 22/05.",
      },
    ],
    pitfall: "Ce qui aurait été fait sans méthode : un convoi parti le jeudi sur un briefing oral, une barrière franchie sans accord ni consigne de refus de paiement, un chauffeur qui paie « pour que ça passe » et un incident jamais reporté, donc jamais comparé aux deux autres.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La grille v02 finale (13/05/2026, 11h30)',
    scenario: "Extrait de l'onglet « Grille d'évaluation » à la fin de J−1, après la négociation et la reconnaissance. La colonne E est résumée ici ; dans le fichier, elle porte l'étiquette de décision, le responsable et l'échéance.",
    steps: [],
    table: {
      columns: ['Risque identifié (A)', 'P', 'I', 'Score', 'Mesure d\'atténuation (E, résumée)', 'Résiduel', 'Alerte'],
      rows: [
        ['Barrière armée de Bweza, km 118, depuis le 04/05 ; péage et inspection — Confirmé', '4', '4', '16', '[ATTÉNUATION] Accord d\'accès du 13/05, reconfirmation 14/05 05h30, convoi groupé, manifeste, zéro paiement', '3', '—'],
        ['Near-miss non confirmé EPTK, 30/04, 18h20, motos — À confirmer', '3', '5', '15', '[ATTÉNUATION] Aucun mouvement après 17h00, fiche EPTK demandée, check-in horaire', '3', '—'],
        ['Piste Kabati–Bweza dégradée, camion enlisé du 06 au 08/05 — Confirmé', '4', '3', '12', '[ATTÉNUATION] Reconnaissance V-02, kit de désensablement, départ 06h00, butoir 13h30', '2', '—'],
        ['Zone sans réseau km 104–118 — Confirmé', '4', '3', '12', '[ATTÉNUATION] 2 VHF + téléphone satellite testés, message d\'entrée de zone', '2', '—'],
        ['Pillage nocturne d\'un camion commercial au km 121, 02/05 — Probable', '2', '3', '6', '[ACCEPTATION] Chargement scellé, aucune halte non prévue, aucune circulation de nuit', '2', '—'],
      ],
    },
    result: "Synthèse v02 : Faible 0, Modéré 1, Élevé 3, Critique 1, total 5 = 5 lignes saisies ; C10 = 0 (aucun résiduel ≥ 4). Un seul risque critique, traité par une mesure obtenue et documentée, pas par un score baissé.",
    tip: "Lisez cette grille comme la lirait Sylvie Matala : en trente secondes, elle sait quels risques existent, ce qui est fait, et que plus aucune alerte n'est ouverte.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le message de décision du 13/05, 17h00',
    scenario: "Le message de décision est la pièce qui engage votre signature et celle de la coordinatrice. Il est court, complet, avec conditions, validité et responsables. Voici celui qui a été diffusé avant le briefing des équipages.",
    steps: [],
    example: {
      title: 'Message envoyé à S. Matala, J. Katembo, J.-M. Ilunga, copie F. Mbusa et Chantal Mbusa',
      lines: [
        "Objet : DÉCISION MV-KS-0514 — GO CONDITIONNEL — valable jusqu'au 14/05 17h00.",
        "Fondement : grille v02 du 13/05 11h30 ; Synthèse : 1 risque critique, C10 = 0 ; accord d'accès de Bweza du 13/05 07h50 (journal d'accès, 09h15) ; reconnaissance de V-02 sans blocage ; fiche EPTK reçue.",
        "Conditions : (1) accord reconfirmé par J. Katembo le 14/05 à 05h30 — sinon NO-GO et report au 15/05 ; (2) test final VHF et satellite à 05h45 ; (3) départ de Goma avant 06h30 ; (4) butoirs respectés : Musi 10h30, barrière 13h30, départ de Bweza 15h30 ; (5) aucune circulation après 17h00.",
        "Consignes : zéro paiement, zéro passager, inspection visuelle supervisée seulement ; droit d'arrêt de chaque équipier.",
        "Test de pression : sans la rupture de SRO du 18/05, la décision serait la même.",
        "Décision proposée par : le logisticien ; validée par : S. Matala (réponse 17h12).",
      ],
    },
    result: "Livrable 3 terminé : un message de décision daté, avec conditions, validité, responsables et validation de la coordinatrice, archivé dans le dossier du mouvement.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La fiche de reporting d\'incident remplie (14/05/2026)',
    scenario: "Fiche fiche-reporting-incident.docx remplie par le logisticien terrain pour la retenue de 35 minutes à la barrière de Bweza. Elle tient sur deux pages dans le template ; voici l'essentiel de ses six sections.",
    steps: [],
    example: {
      title: 'Les six sections telles qu\'envoyées à 13h18',
      lines: [
        "1. Identification : 14/05/2026, 11:50 à 12:25 ; barrière de Bweza, km 118, axe Goma–Lukando ; incident mineur ; MV-KS-0514.",
        "2. Personnes et biens : F. Mbusa (chef de convoi), D. Safari, J. Kitumaini (chauffeurs), le logisticien ; V-02, U1, U2, 4,6 t (≈ 18 500 USD) ; six hommes armés, chef du poste ; témoins : deux chauffeurs commerciaux, civils du marché.",
        "3. Description : 11h50 arrêt ordonné ; 11h55 demande de 10 000 FC par camion et d'ouverture ; 12h05 demande des clés, refusée ; 12h15 chef du poste, accord reconnu, inspection visuelle ; 12h25 convoi libéré. Aucun blessé, aucun bien pris, aucun paiement.",
        "4. Action immédiate : arrêt sans forcer le passage ; ATTENTE dans le groupe ; refus poli de tout paiement ; appel à J. Katembo à 12h05 ; inspection supervisée ; RAS à 12h30.",
        "5. Suivi : reconfirmer l'accord pour le 15/05 (J. Katembo, 17h00) ; décision sur le convoi de retour (S. Matala, 18h00) ; information du cluster (J.-M. Ilunga, 15/05 10h00) ; grille et registre (logisticien, 15/05 12h00) ; GPS en v2 (F. Mbusa).",
        "6. Distribution : J. Katembo, S. Matala, J.-M. Ilunga ; confidentiel ; rédigé par le logisticien terrain, 14/05/2026 13:18, signé.",
      ],
    },
    result: "Une fiche factuelle, chronologique, sans interprétation, envoyée dans l'heure, avec cinq actions de suivi nommées et datées.",
    tip: "Relisez la section 3 : aucun adjectif, aucune supposition, que des heures et des gestes. C'est la qualité que la coordination attend et celle qui rend le registre comparable.",
  },

  // ───────────── EXERCICES ─────────────
  {
    type: 'exercise',
    title: 'Exercice 1 — Grille de risques et décision : cas « Convoi médical vers Rutshuru »',
    instructions: "Contexte (fictif, inspiré de situations rencontrées dans l'Est de la RDC) : vous êtes logisticien(ne) d'une ONG médicale internationale basée à Goma. Un convoi de deux véhicules doit livrer du matériel médical et des médicaments à un centre de santé partenaire à Rutshuru, à environ trois heures de route. Votre briefing sécurité hebdomadaire et les retours de vos chauffeurs vous donnent : (1) un groupe armé non étatique tient un checkpoint informel depuis environ trois semaines à Kiwanja, deux véhicules d'une autre ONG l'ont franchi sans incident la semaine dernière après une brève négociation et un droit de passage informel ; (2) un tronçon de 8 km entre Kiwanja et Rutshuru est en mauvais état depuis les pluies, un camion commercial s'y est enlisé il y a 10 jours ; (3) aucun incident violent contre du personnel humanitaire n'a été signalé sur l'axe dans le dernier mois, mais un near-miss a été rapporté oralement par un chauffeur d'une autre organisation, sans rapport écrit ; (4) une rupture de stock de médicaments essentiels est prévue dans 4 jours. Avec ces seules informations, appliquez les Procédures 1 à 3.",
    steps: [
      { title: 'Rédigez la note de situation', actions: ["Reprenez les 4 informations, découpez l'itinéraire en tronçons, notez source, date et fiabilité de chaque fait (Confirmé / Probable / À confirmer) ; listez les inconnues et la personne à interroger."] },
      { title: 'Préparez le fichier', actions: ["Ouvrez grille-evaluation-risques-securite.xlsx, enregistrez-le en v01, videz les exemples sans casser les formules D et G."] },
      { title: 'Documentez au minimum trois risques', actions: ["Checkpoint armé, état de la route, near-miss non confirmé : rédigez la colonne A selon la formule en 4 éléments, cotez B et C avec l'échelle, lisez le score en D."] },
      { title: 'Écrivez les mesures et les résiduels', actions: ["Colonne E : mesures concrètes avec responsable et échéance ; colonne F : résiduel par la méthode P' × I' ; lisez l'alerte en G."] },
      { title: 'Lisez la Synthèse', actions: ["Contrôlez C5 à C8 et C10 ; vérifiez que la somme est égale au nombre de lignes."] },
      { title: 'Décidez', actions: ["Préfixez chaque mesure par [ACCEPTATION], [ATTÉNUATION] ou [ÉVITEMENT] ; rédigez le message de décision avec conditions, validité et test de pression (l'urgence de 4 jours ne doit faire baisser aucun score)."] },
    ],
    deliverable: "La grille complétée (au moins 3 risques, 5 colonnes saisies par risque, Synthèse lue) avec la décision finale justifiée par écrit pour l'itinéraire dans son ensemble, et la note de situation.",
    pitfall: "Calquer le droit de passage informel de l'autre ONG. Votre ligne rouge est : aucune contrepartie au-delà du passage ; la décision doit dire comment vous passez sans payer.",
  },
  {
    type: 'exercise',
    title: 'Exercice 2 — Négocier l\'accès à Kiwanja avec le groupe armé (principes CICR)',
    instructions: "À partir de l'exercice 1, vous devez obtenir un passage à Kiwanja sans contrepartie. La coordinatrice vous donne mandat et l'accord de principe : pas d'escorte armée. Appliquez la Procédure 4.",
    steps: [
      { title: 'Cartographiez l\'accès', actions: ["Tableau : point critique, qui contrôle, certitude, interlocuteur possible, canal. Précisez quel intermédiaire reconnu vous solliciteriez."] },
      { title: 'Préparez la négociation', actions: ["Fiche en 8 lignes : objectif, message clé en trois phrases, manifeste, lignes rouges, offre (transparence uniquement), interlocuteur et canal, plan B, qui valide."] },
      { title: 'Rédigez six répliques', actions: ["Écrivez en six temps ce que vous diriez : présentation, mandat, transparence, demande, réponse à une demande de paiement, réponse à une question politique, conclusion reformulée."] },
      { title: 'Traitez trois demandes', actions: ["Un « droit de passage » de 20 000 FC, deux soldats qui veulent monter avec vous, une demande de 10 cartons « pour les blessés du groupe » : écrivez la réponse type et ce que vous ne faites pas."] },
      { title: 'Documentez l\'accord', actions: ["Rédigez l'entrée du journal d'accès : date, lieu, interlocuteur, contenu, contreparties « aucune », validité, déclencheurs d'annulation, reconfirmation."] },
    ],
    deliverable: "La fiche de préparation, le texte des six répliques, les trois réponses types et l'entrée du journal d'accès, soit deux pages au maximum.",
    tip: "Relisez vos répliques en vous demandant : un autre acteur armé, ou un journaliste, pourrait-il penser que nous prenons parti ? Si oui, retirez la phrase.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Plan de mouvement, briefing et communication du convoi de Rutshuru',
    instructions: "Le convoi de deux véhicules part de Goma pour Rutshuru. Vous disposez de la décision GO conditionnel de l'exercice 1 et de l'accord d'accès de l'exercice 2. Appliquez les Procédures 5 et 6 avec vos propres hypothèses réalistes.",
    steps: [
      { title: 'Définissez l\'itinéraire', actions: ["Tronçons, point de repli, arrêts sûrs et trois points de décision avec critère et action (dont Kiwanja et le tronçon de 8 km)."] },
      { title: 'Calculez les horaires', actions: ["Tableau durée par tronçon avec vitesses retenues et forfaits, marge de 20 %, heure prévue et heure butoir à chaque point, heure limite de circulation."] },
      { title: 'Rédigez la fiche de mouvement', actions: ["Les 12 rubriques, avec composition du convoi, équipement, signalisation et décision ; liste des destinataires de la notification."] },
      { title: 'Préparez le briefing', actions: ["Les huit points, trois questions-test avec la réponse attendue, droit d'arrêt, feuille de briefing."] },
      { title: 'Montez la communication', actions: ["Nom et règles du groupe, format du check-in avec trois exemples, tableau du protocole de silence avec cinq paliers, moyens de secours."] },
    ],
    deliverable: "Une fiche de mouvement d'une page, une feuille de briefing, le texte de description du groupe WhatsApp et le tableau du protocole de silence.",
    tip: "Vérifiez la cohérence : chaque heure butoir doit tomber à l'intérieur de la fenêtre de l'accord d'accès, et chaque point de décision doit correspondre à un risque de votre grille.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Fiche de reporting d\'incident, registre et mise à jour de la grille',
    instructions: "Pendant le trajet, imaginez qu'au checkpoint de Kiwanja, l'un des deux véhicules est retenu 40 minutes par le groupe armé, qui demande à inspecter le contenu avant de laisser passer le convoi sans incident violent. Appliquez les Procédures 7 et 8.",
    steps: [
      { title: 'Qualifiez l\'événement', actions: ["Incident ou near-miss ? Quel niveau de gravité ? Justifiez en deux lignes avec les définitions du module."] },
      { title: 'Remplissez la fiche', actions: ["Ouvrez fiche-reporting-incident.docx et remplissez les six sections : identification (4 champs), personnes et biens (4 champs), chronologie factuelle horodatée, action immédiate, suivi (au moins 3 lignes avec responsable et échéance), distribution et validation."] },
      { title: 'Contrôlez le délai et la forme', actions: ["Écrivez l'heure d'envoi et vérifiez le délai d'une heure ; la fiche tient sur une à deux pages ; aucune interprétation."] },
      { title: 'Alimentez le registre', actions: ["Ajoutez la ligne au registre avec le même libellé de lieu que les lignes existantes ; calculez le nombre d'événements du même lieu en 30 jours."] },
      { title: 'Mettez la grille à jour', actions: ["Enregistrez une nouvelle version, révisez les lignes concernées selon les règles du module, relisez la Synthèse, rédigez deux lignes de journal de révision."] },
    ],
    deliverable: "La fiche de reporting d'incident tenant sur une à deux pages maximum, la ligne de registre et la grille mise à jour avec son journal de révision.",
    pitfall: "Écrire « incident évité de justesse » parce qu'il n'y a pas eu de violence. Une retenue de 40 minutes avec inspection est un événement réalisé : c'est un incident mineur, pas un near-miss.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Note de situation : chaque fait a une source, une date et une fiabilité (Confirmé / Probable / À confirmer) ; les inconnues sont listées avec un responsable.",
      "Grille : la colonne A de chaque risque dit quoi, où, depuis quand et selon quelle source ; aucune formulation vague comme « route dangereuse ».",
      "Grille : chaque probabilité est justifiée par un fait récent et chaque impact commence par la vie humaine ; aucune note n'a été baissée à cause de l'urgence.",
      "Grille : les colonnes D et G sont restées des formules ; le résiduel de la colonne F est justifié par P' × I' ; l'alerte « à valider hiérarchie » n'a pas été masquée.",
      "Synthèse : C5 + C6 + C7 + C8 est égal au nombre de lignes saisies ; C10 est lu et interprété ; la décision ne repose pas sur un score moyen.",
      "Décision : chaque mesure porte [ACCEPTATION], [ATTÉNUATION] ou [ÉVITEMENT], un responsable et une échéance ; la décision du mouvement liste des conditions, une validité et le test de pression.",
      "Négociation : la fiche de préparation contient une ligne rouge « aucun paiement, aucun passager, aucun matériel tiers », le contenu reste strictement humanitaire, l'accord est documenté et daté avec des déclencheurs d'annulation.",
      "Plan de mouvement : horaires calculés tronçon par tronçon avec marge ; butoirs à l'intérieur de la fenêtre de l'accord ; repli et arrêts sûrs écrits.",
      "Communication : format de check-in imposé, protocole de silence en paliers avec noms, moyens de secours testés.",
      "Fiche d'incident : événement correctement qualifié ; chronologie horodatée sans interprétation ; actions de suivi nommées et datées ; une à deux pages ; envoyée dans l'heure.",
      "Mise à jour : nouvelle version datée, ancienne conservée, chaque modification justifiée par un fait, journal de révision à jour.",
    ],
  },
  {
    type: 'case-study',
    title: 'Corrigé indicatif — Exercice 1 : la grille de Rutshuru',
    scenario: "Repère de correction pour l'exercice 1. Vos notes peuvent différer d'un point si vous justifiez le fait qui les fonde ; ce qui ne se discute pas, ce sont la précision des lignes, la présence d'une mesure par risque et l'écriture de la décision.",
    steps: [],
    table: {
      columns: ['Risque identifié (A)', 'P', 'I', 'Score', 'Mesure d\'atténuation (E, résumée)', 'Résiduel'],
      rows: [
        ['Checkpoint informel tenu par un groupe armé non étatique à Kiwanja depuis 3 semaines ; droit de passage informel — Confirmé', '4', '4', '16', '[ATTÉNUATION] Accord d\'accès préalable via un intermédiaire reconnu, convoi annoncé, manifeste, zéro paiement, aucun matériel à double usage', '4 sans accord, 3 avec accord obtenu'],
        ['Tronçon Kiwanja–Rutshuru (8 km) en mauvais état, camion enlisé il y a 10 jours — Confirmé', '4', '3', '12', '[ATTÉNUATION] Reconnaissance par véhicule léger 24 h avant, kit de désensablement, fenêtre de départ adaptée à la météo', '2'],
        ['Near-miss non confirmé rapporté oralement par un chauffeur d\'une autre ONG — À confirmer', '3', '4', '12', '[ATTÉNUATION] Fiche écrite demandée (date, lieu, nature), circulation de jour uniquement, check-in horaire', '3'],
      ],
    },
    example: {
      title: 'Synthèse et décision attendues',
      lines: [
        "Synthèse : Faible 0, Modéré 0, Élevé 2, Critique 1 ; C10 = 1 tant que l'accord d'accès n'est pas obtenu, 0 ensuite.",
        "Décision : GO CONDITIONNEL — conditions : accord d'accès obtenu et documenté, reconnaissance sans blocage, fiche écrite sur le near-miss, communication testée. Sinon : report ou évitement, avec remontée à la coordination.",
        "Calendrier : rupture de stock à J+4 ; reconnaissance et négociation à J+1, départ J+2 à 06h00, arrivée vers 09h00, marge de deux jours conservée. L'urgence n'a modifié aucun score.",
      ],
    },
    result: "Si votre grille contient trois risques précis, des mesures concrètes et une décision justifiée qui ne cède pas à la pression du calendrier, vous avez atteint le niveau attendu.",
  },
  {
    type: 'case-study',
    title: 'Corrigé indicatif — Exercice 4 : qualification et fiche de Kiwanja',
    scenario: "Repère de correction pour la qualification et la structure de la fiche. Les heures et les noms sont à inventer de façon plausible ; la qualité se juge à la forme.",
    steps: [],
    example: {
      title: 'Ce que votre fiche doit contenir',
      lines: [
        "Qualification : incident mineur. L'événement est réalisé (un véhicule retenu 40 minutes, contenu inspecté), avec conséquence (retard, perte de liberté de mouvement), sans blessé ni perte : ce n'est pas un near-miss.",
        "Section 1 : date et heure de début et de fin, lieu « checkpoint de Kiwanja, axe Goma–Rutshuru », gravité « incident mineur », référence du mouvement.",
        "Section 3 : chronologie horodatée (arrêt, demande d'inspection, présentation du manifeste, inspection supervisée, libération) sans adjectif.",
        "Section 4 : action immédiate prise par l'équipe sur place — arrêt sans forcer le passage, refus de tout paiement, appel à la base, ATTENTE dans le groupe, inspection visuelle supervisée.",
        "Section 5 : au moins trois actions de suivi (reconfirmer l'accord pour le retour, informer la coordination et le cluster, réviser la grille), chacune avec responsable et échéance.",
      ],
    },
    result: "Livrable correct : fiche de une à deux pages envoyée dans l'heure, événement bien qualifié, aucune interprétation, suivi nominatif.",
  },

  // ───────────── ERREURS FRÉQUENTES ─────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Sous-reporter les near-miss par crainte d'être blâmé : un near-miss bien reporté protège la prochaine équipe. Parade : le dire au briefing et ne sanctionner jamais celui qui reporte.",
      "Traiter le briefing sécurité comme un événement ponctuel : un point fait une fois en début de semaine ne suffit pas. Parade : grille révisée après chaque mouvement et au moins une fois par semaine en contexte instable.",
      "Ignorer la connaissance des chauffeurs et du staff national au profit des cartes du siège. Parade : les sept questions de la Procédure 1, avant toute lecture de rapport.",
      "Confondre un accord verbal ponctuel avec un accès sécurisé durable. Parade : entrée du journal d'accès datée, validité limitée, reconfirmation avant chaque mouvement.",
      "Sous-estimer la pression du calendrier : l'urgence ne doit jamais faire baisser un score. Parade : test de pression écrit dans le message de décision.",
      "Baisser un résiduel à 3 pour éviter l'alerte « à valider hiérarchie ». Parade : l'alerte protège le logisticien ; la décision est portée par la hiérarchie.",
      "Écrire des mesures vagues (« vigilance », « prudence »). Parade : quoi, qui, pour quand, et sur quelle colonne agit-elle (probabilité ou impact).",
      "Saisir des risques sous la ligne 20 ou taper un score à la main : la Synthèse ne les compte plus. Parade : lignes 6 à 20, colonnes D et G en formules, contrôle de la somme C5 à C8.",
      "Accepter « exceptionnellement » un paiement, un passager ou un colis à une barrière. Parade : consignes écrites, phrases types répétées en briefing, remontée immédiate à la coordination.",
      "Écrire une fiche d'incident avec des jugements (« agressifs », « voleurs ») ou la qualifier de near-miss alors que l'événement a eu lieu. Parade : tableau fait observable / interprétation et définitions du module.",
      "Attendre d'avoir tout pour envoyer la fiche. Parade : version 1 dans l'heure, version 2 pour les compléments.",
      "Ne pas rapprocher les fiches entre elles : trois retenues au même point sont un motif, pas trois anecdotes. Parade : registre avec libellés de lieu identiques et comptage sur 30 jours.",
      "Partager grille, journal d'accès ou fiche sur un groupe ouvert ou y écrire le nom d'un acteur armé. Parade : diffusion nominative, classification « confidentiel », aucun détail de négociation dans les groupes.",
    ],
  },

  // ───────────── RÉCAPITULATIF ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez transformé un point sécurité oral en note de situation de l'itinéraire : faits datés, sourcés et notés Confirmé / Probable / À confirmer.",
      "Vous avez rempli grille-evaluation-risques-securite.xlsx colonne par colonne, lu l'alerte et l'onglet Synthèse, et vérifié leur cohérence.",
      "Vous avez décidé par écrit entre acceptation, atténuation et évitement, remonté un résiduel de 4 et rendu une décision Go conditionnel avec conditions, validité et test de pression.",
      "Vous avez préparé, conduit et documenté une négociation d'accès selon les principes du CICR, sans paiement ni passager, avec un accord daté et des déclencheurs d'annulation.",
      "Vous avez planifié un itinéraire avec horaires calculés, butoirs, points d'arrêt sûrs et de décision, puis briefé les équipages avec une feuille signée.",
      "Vous avez monté un dispositif de communication : groupe configuré, format de check-in, protocole de silence en cinq paliers, moyens de secours testés.",
      "Vous avez qualifié un événement, rempli fiche-reporting-incident.docx section par section et l'avez envoyée dans l'heure, puis alimenté le registre et détecté un motif.",
      "Vous avez mis à jour la grille après le mouvement avec un journal de révision, sans baisser de score sur la foi d'un seul passage réussi.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer la différence entre acceptation, atténuation et évitement d'un risque, avec un exemple logistique concret pour chacun.",
      "Je sais calculer un score de risque (probabilité × impact) et interpréter un risque résiduel après mesure d'atténuation, y compris l'alerte à 4 et les bandes de la Synthèse.",
      "Je sais pourquoi un near-miss doit être reporté avec la même rigueur qu'un incident réalisé.",
      "J'ai complété une grille d'évaluation des risques pour un itinéraire avec le template fourni, et vérifié l'onglet Synthèse avant de conclure.",
      "J'ai rédigé une fiche de reporting d'incident factuelle, chronologique, tenant sur une à deux pages, et je sais l'envoyer dans l'heure.",
      "Je peux citer au moins trois principes du CICR pour la négociation d'accès avec un acteur armé et les appliquer à une situation de barrière.",
      "Je sais expliquer, avec mes propres mots, pourquoi la neutralité n'est pas la passivité dans une négociation d'accès.",
      "Je sais organiser le briefing des équipages et le dispositif de communication d'un convoi, y compris le protocole de silence.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 08 — Systèmes d'Information & Reporting Logistique : vous passerez de la grille et du registre tenus sous Excel aux outils de gestion des actifs et des stocks (MIMOSA, LINK, Kobo Toolbox, ODK), aux tableaux de bord de KPI logistiques et à la rédaction de rapports mensuels et d'urgence pour le siège.",
  },
]
