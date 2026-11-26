// Module 06 — Coordination, Autorités & Gestion des Douanes
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates) : théorie strictement utile à
// l'action, puis neuf procédures découpées en étapes (une diapositive par
// étape) — exonération, dossier checklist-dedouanement.xlsx, cohérence
// documentaire, transitaire, relances, registre des autorités, checkpoints,
// litiges et clôture — appliquées à un cas fil rouge unique (ONG Kemora Santé,
// envoi COD-2026-007 Nairobi → Goma → Bweza, Nord-Kivu — cas fictif, même
// organisation que les Modules 01 et 05), cas résolus, exercices corrigeables
// (dont le cas de N'Djamena) et check-lists d'auto-contrôle.
export default [
  {
    type: 'cover',
    title: 'Coordination, Autorités & Gestion des Douanes',
    hook: "Plus de la moitié des retards critiques d'un pipeline humanitaire se jouent à la douane ou dans une interaction ratée avec une autorité. À la fin de ce module, vous aurez en main un dossier de dédouanement complet, contrôlé document par document et suivi dans la checklist, un registre de vos relations avec les autorités, un script de passage de checkpoint et les courriers pour traiter un litige ou une réclamation — étape par étape, sur un envoi réel de A à Z.",
  },
  {
    type: 'objectives',
    items: [
      "Établir le statut d'exonération de votre organisation et classer chaque article d'une commande (couvert / autorisation complémentaire requise), en produisant une fiche « périmètre d'exonération » et une matrice article par article.",
      "Ouvrir et remplir checklist-dedouanement.xlsx colonne par colonne (onglets « Suivi dossiers » et « Tableau de bord »), en produisant un dossier de 7 lignes daté dont l'alerte et le statut global sont lus correctement.",
      "Contrôler la cohérence documentaire (code HS, description, quantités, destinataire) avant tout envoi, en produisant un tableau de concordance sans aucun écart.",
      "Transmettre le dossier complet au transitaire, relancer avec des messages datés et précis, puis escalader avec un dossier documenté, en produisant le message d'envoi, les relances et la note d'escalade.",
      "Construire la relation avec les autorités civiles et de sécurité et traverser un checkpoint selon une routine, en produisant le registre-relations-autorites.docx rempli, un script chauffeur et une fiche check-point.",
      "Traiter un litige douanier ou une réclamation de marchandise, en produisant un courrier de contestation, un constat contradictoire et une réclamation datée.",
      "Clôturer le dossier et mesurer l'écart entre le délai prévu et le délai réel, en produisant un tableau des délais utilisable pour vos prochains plannings.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module ne vous demande pas de retenir des définitions : il vous fait produire, dans l'ordre réel d'un import humanitaire, les livrables qu'un logisticien terrain doit maîtriser pour qu'une marchandise franchisse la frontière du premier coup. Chaque livrable est construit étape par étape sur un même cas fil rouge, puis vous le refaites seul(e) sur le cas de N'Djamena (Tchad).",
    ],
    bullets: [
      "Livrable 1 — Une fiche « périmètre d'exonération » et une matrice article par article (couvert / autorisation complémentaire).",
      "Livrable 2 — Le dossier COD-2026-007 ouvert dans checklist-dedouanement.xlsx : 7 lignes, onglet « Tableau de bord » à jour.",
      "Livrable 3 — Un tableau de concordance documentaire sans écart (code HS, description, quantités, destinataire).",
      "Livrable 4 — Le message d'envoi du dossier complet au transitaire et l'accusé de dépôt.",
      "Livrable 5 — Des relances datées et une note d'escalade appuyée sur le dossier.",
      "Livrable 6 — Le registre-relations-autorites.docx rempli, avec son plan de suivi.",
      "Livrable 7 — Un script de passage de checkpoint, une consigne chauffeur et une fiche check-point.",
      "Livrable 8 — Un courrier de contestation, un constat contradictoire et une réclamation de marchandise.",
      "Livrable 9 — Le dossier clôturé et un tableau des délais prévu / réel.",
    ],
    example: {
      title: 'Le cas fil rouge de tout le module (fictif mais réaliste)',
      lines: [
        "Organisation : Kemora Santé, ONG médicale internationale (fictive) — la même qu'aux Modules 01 et 05. Vous êtes son logisticien(ne) terrain à la base de Lukando (Nord-Kivu, RDC).",
        "Situation : la réponse choléra se poursuit à Bweza ; l'unité de traitement du choléra (UTC, 40 lits) ouverte en mars a besoin d'un réapprovisionnement et d'un poste de stabilisation pour les cas graves.",
        "Commande confirmée le mardi 7 avril 2026 à la centrale régionale de Kemora Santé à Nairobi (Kenya) : 400 kits de traitement choléra KCH-01 et 4 concentrateurs d'oxygène, par fret aérien Nairobi → Goma, puis route Goma → Bweza.",
        "Échéance : les kits doivent être à Bweza le lundi 27 avril ; au rythme actuel (14 kits/jour), le stock local tombe à zéro le 28 avril.",
        "Vos interlocuteurs (fictifs) : Dr Clarisse Kahindo, coordinatrice de projet à Lukando ; Jean-Marc Ilunga, coordinateur logistique pays à Goma ; Josué Kalume, agent en douane de Transit Grands Lacs (TGL) ; Grace Wanjiru, responsable des expéditions à la centrale de Nairobi.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Votre point de départ : un briefing optimiste et incomplet",
    body: [
      "Le mardi 7 avril à 9h00, après la validation de la commande, la coordinatrice vous donne en quelques phrases ce qu'elle croit savoir. Tout est oral, non daté et non vérifié — c'est la situation normale d'un lancement d'import, et c'est la matière première de tout le module.",
    ],
    example: {
      title: 'Ce que vous avez noté dans votre carnet (07/04, 9h10)',
      lines: [
        "« Kemora a un accord d'exonération, donc pas de droits à payer et pas de souci à la frontière. »",
        "« La centrale de Nairobi prépare les documents, elle a l'habitude. »",
        "« Le transitaire de Goma, TGL, s'occupe de tout, on n'a qu'à lui envoyer les papiers. »",
        "« Le chef de bureau de la douane de l'aéroport a changé début avril, je ne sais pas qui c'est. »",
        "« Pour les concentrateurs, je crois qu'il faut un papier du ministère de la Santé, à vérifier. »",
        "« Sur la route, Bweza, ça passe : on l'a déjà fait en mars. »",
      ],
    },
    tip: "Recopiez chaque affirmation mot pour mot, avec l'heure et le nom de la personne. Vous allez les vérifier une par une : sur ces six phrases, une est fausse, deux sont incomplètes et trois sont à documenter — vous saurez lesquelles à la fin du module.",
  },
  {
    type: 'stat-callout',
    stat: '> 50 %',
    caption: "des retards critiques d'un pipeline logistique humanitaire se jouent au moment du dédouanement ou dans une interaction ratée avec une autorité (constat de terrain).",
    context: "Ce sont ces retards-là qui font manquer une échéance médicale, périmer un stock ou perdre la confiance d'un bailleur. Un camion immobilisé à la frontière n'est pas un incident de transport : c'est un dossier mal préparé.",
  },
  {
    type: 'concept',
    title: "La douane n'est pas un détail administratif",
    body: [
      "Un logisticien junior voit le dédouanement comme une formalité en bas de la chaîne, gérée par « l'agent en douane » pendant qu'il s'occupe de choses plus sérieuses. Avec 25 ans de terrain, le constat est inverse : le dédouanement est un point de bascule opérationnel, pas une ligne administrative.",
      "Votre travail n'est pas de remplir les formulaires à la place du transitaire : c'est de rendre le dossier irréprochable, de suivre chaque pièce avec des dates, et d'entretenir la relation avec les autorités AVANT d'en avoir besoin.",
    ],
    example: {
      title: 'Fil rouge — ce que coûte un blocage au 7 avril',
      lines: [
        "Stock de kits à Bweza au 14/04 : 196 kits ; consommation moyenne : 14 kits/jour → rupture estimée le 28/04 (196 ÷ 14 = 14 jours).",
        "Chaque jour de blocage douanier au-delà du 23/04 mange directement la marge avant la rupture.",
        "Un dossier mal préparé peut coûter de quelques jours à plusieurs semaines : la marge de la commande disparaît au premier écart documentaire.",
      ],
    },
    pitfall: "Penser « la douane, c'est le transitaire ». Le transitaire exécute ; la responsabilité de la cohérence du dossier, du statut d'exonération et des délais reste la vôtre.",
  },
  {
    type: 'concept',
    title: "Le principe des accords d'exonération douanière humanitaire",
    body: [
      "Dans la majorité des contextes où interviennent des agences onusiennes et des ONG internationales, il existe un accord-cadre bilatéral entre le gouvernement hôte et la communauté humanitaire : souvent un Memorandum of Understanding entre le gouvernement et l'ONU, ou un accord de siège (Host Country Agreement) pour une organisation donnée.",
      "Cet accord établit le principe de la franchise douanière : les biens importés dans un but strictement humanitaire (médicaments, matériel médical, articles non alimentaires, véhicules de secours) sont exemptés de droits de douane et, souvent, de TVA à l'importation.",
    ],
    highlight: "L'exonération n'est pas un droit qui s'applique tout seul à la frontière. C'est un statut que votre organisation doit avoir obtenu et documenté AVANT l'arrivée de la marchandise, et qu'il faut prouver dossier par dossier, envoi par envoi, avec des documents qui correspondent au trait près.",
    example: {
      title: 'Fil rouge — le statut de Kemora Santé (données fictives)',
      lines: [
        "Accord de siège Kemora Santé – gouvernement hôte, signé le 14/06/2023.",
        "Certificat d'exonération de l'organisation n° CE-2025-0417, valable jusqu'au 31/12/2026.",
        "Chaque envoi nécessite malgré tout sa propre décision d'exonération : c'est l'étape 3 de la chaîne de preuve ci-après.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: "Les trois niveaux de preuve : de l'accord à l'envoi",
    columns: ['Niveau', "Ce que c'est", 'Délivré par', 'Ce que vous en faites'],
    rows: [
      ["1 — Accord-cadre", "MoU gouvernement–ONU ou accord de siège (Host Country Agreement) qui pose le principe de la franchise.", "Gouvernement hôte", "Vous en gardez une copie et vous lisez ce qu'il couvre (liste des biens, taxes, procédure)."],
      ["2 — Certificat d'exonération de l'organisation", "Statut nominatif de votre ONG auprès de l'autorité douanière nationale (souvent via le ministère des Affaires étrangères ou un point focal ONG).", "Autorité douanière nationale", "Vous vérifiez sa validité, le nom exact de l'entité et sa présence au poste de douane concerné."],
      ["3 — Exonération par envoi", "Décision ou certificat d'exonération propre à UN envoi : biens, quantités, valeur, code HS.", "Douane, sur demande déposée par le transitaire", "Vous la préparez à partir de documents parfaitement concordants et vous la suivez ligne par ligne."],
    ],
  },
  {
    type: 'warning',
    title: "Ce qu'un accord d'exonération ne fait PAS automatiquement",
    items: [
      "Il ne vous dispense jamais de déclarer la marchandise : l'exonération porte sur le paiement des droits, pas sur l'obligation de dépôt d'un dossier douanier complet.",
      "Il ne couvre généralement pas les biens à double usage (véhicules pouvant servir à un usage commercial, équipements de télécommunication soumis à licence) sans autorisation complémentaire d'un autre ministère : télécommunications, intérieur ou défense selon le cas.",
      "Il n'est pas automatiquement reconnu au poste-frontière local si votre organisation n'a pas, en amont, enregistré son statut et obtenu son propre certificat d'exonération auprès de l'autorité douanière nationale.",
      "Il ne couvre pas les frais de service : honoraires du transitaire, magasinage, surestaries ou manutention restent à votre charge (pratique courante, à vérifier dans votre accord).",
    ],
  },
  {
    type: 'comparison-table',
    title: 'Biens courants et autorisations complémentaires : à classer avant de commander',
    columns: ['Type de bien', 'Autorité qui autorise (selon le pays)', 'Pourquoi', 'À lancer'],
    rows: [
      ['Médicaments, kits médicaux, vaccins', "Autorité pharmaceutique / ministère de la Santé", "Contrôle de l'importation des produits de santé", "Dès la commande confirmée (délai de plusieurs jours ouvrés)"],
      ['Dispositifs médicaux (concentrateurs d\'oxygène, matériel chirurgical)', "Ministère de la Santé", "Conformité et enregistrement du matériel médical", "Dès la commande confirmée"],
      ['Radios, téléphones satellite, équipements de télécommunication', "Autorité de régulation des télécommunications, parfois intérieur ou défense", "Bien à double usage soumis à licence de fréquences", "Avant même de commander : délai souvent le plus long"],
      ['Véhicules (4x4 de secours, camions)', "Ministère des Transports (et douane)", "Immatriculation, plaque d'exonération, usage commercial possible", "Dès la commande confirmée"],
      ['Chlore, produits chimiques', "Autorité de l'environnement ou de l'industrie, selon le pays", "Produits dangereux", "Dès la commande confirmée, avec la fiche de données de sécurité"],
    ],
  },
  {
    type: 'comparison-table',
    title: 'Les 7 documents du dossier : ce que chacun prouve',
    columns: ['Document', 'Ce qu\'il prouve', 'Qui l\'émet', 'Piège classique'],
    rows: [
      ['Facture commerciale', "La nature, la quantité et la valeur de ce qui est expédié", "Fournisseur ou centrale d'expédition", "Destinataire différent du bénéficiaire de l'exonération"],
      ['Liste de colisage (packing list)', "Le contenu détaillé de chaque colis, poids et volumes", "Fournisseur ou centrale d'expédition", "Description ou quantités qui diffèrent de la facture"],
      ["Certificat d'origine", "Le pays où la marchandise a été produite ou conditionnée", "Fournisseur, chambre de commerce ou autorité compétente", "Demandé trop tard : délai de plusieurs jours"],
      ["Demande d'exonération douanière", "Que l'envoi relève de la franchise (biens, quantités, valeur, code HS)", "Votre organisation, déposée par le transitaire", "Code HS différent de la facture"],
      ["Autorisation d'importation", "Que l'importation du bien est permise (régime des produits réglementés)", "Autorité compétente (par exemple pharmaceutique)", "Pas lancée à la commande"],
      ['Manifeste de cargaison', "L'intégralité du contenu du moyen de transport, déclarée à l'entrée du territoire douanier", "Transporteur (compagnie aérienne, camion, navire)", "N'existe qu'au départ du vol : ne pas l'attendre pour tout le reste"],
      ["Autorisation ministérielle complémentaire (si applicable)", "L'accord d'un second ministère pour un bien sensible (santé, télécommunications, transports)", "Ministère concerné", "Supposer que l'accord d'exonération suffit"],
    ],
  },
  {
    type: 'concept',
    title: 'Le code HS : un seul code, partout, au trait près',
    body: [
      "Le code HS (Harmonized System) est le code international à 6 chiffres qui classe chaque type de marchandise ; chaque pays le prolonge à 8 ou 10 chiffres dans son tarif douanier. Il détermine les droits, la franchise éventuelle et les autorisations exigées.",
      "Si le code HS indiqué sur la demande d'exonération ne correspond pas exactement à celui de la liste de colisage ou de la facture, l'agent des douanes a une raison légitime de bloquer le dossier pour vérification — et il le fera, même sur un envoi humanitaire urgent.",
    ],
    example: {
      title: 'Fil rouge — codes HS retenus dans le dossier (exemples pédagogiques)',
      lines: [
        "Kit de traitement du choléra KCH-01 : 3006.50 (trousses et boîtes de premiers secours), à valider avec le transitaire selon le tarif national.",
        "Concentrateur d'oxygène : 9019.20 (appareils d'oxygénothérapie).",
        "Règle : le code final est celui que votre transitaire valide avec le tarif douanier national ; votre travail est de garantir qu'il soit identique sur TOUS les documents.",
      ],
    },
    tip: "Demandez au transitaire de vous confirmer par écrit le code HS de chaque ligne avant d'émettre la demande d'exonération. Un code validé une fois pour un produit se réutilise pour les envois suivants : notez-le dans votre fiche produit.",
    pitfall: "Corriger un code HS sur une seule pièce « à la main ». Un document modifié à la main n'a plus de valeur : la correction se fait à la source, avec une version réémise.",
  },
  {
    type: 'concept',
    title: "Pourquoi la paperasse doit être parfaite avant l'arrivée à la frontière",
    body: [
      "C'est la leçon la plus coûteuse apprise sur le terrain : un dossier douanier incomplet ou incohérent, préparé « on verra sur place, on ajustera », se traduit systématiquement par un blocage de plusieurs jours à plusieurs semaines.",
      "Un poste-frontière n'est pas un lieu où l'on négocie un dossier : c'est un lieu où l'on présente un dossier déjà validé en amont. La correction, les allers-retours avec un ministère se font AVANT, depuis un bureau — pas devant un camion qui immobilise un chauffeur, un stock à risque de péremption et une équipe qui attend en zone d'urgence.",
    ],
    highlight: "On ne négocie pas un dossier à la frontière : on le présente, déjà validé, depuis un bureau.",
    example: {
      title: 'Fil rouge — la chronologie visée pour le dossier COD-2026-007',
      lines: [
        "07/04 : dossier ouvert dans la checklist ; 08–10/04 : documents reçus, contrôlés, corrigés ; 10/04 : envoi complet au transitaire.",
        "13/04 : dépôt à la douane ; 14–21/04 : décisions et autorisations ; 16/04 : arrivée du vol à Goma.",
        "Objectif : sortie de douane avant le jeudi 23/04, convoi vers Bweza le lundi 27/04.",
      ],
    },
  },
  {
    type: 'concept',
    title: "Les procédures accélérées : ce que vous pouvez demander, et ce qu'il faut offrir en échange",
    body: [
      "Accélérer ne veut pas dire dispenser : aucune procédure accélérée ne s'applique à un dossier incohérent. Voici les leviers courants, à confirmer pays par pays dans votre accord et auprès de votre transitaire.",
    ],
    bullets: [
      "Dépôt anticipé (pré-dédouanement) : la déclaration est déposée avant l'arrivée de la marchandise.",
      "Libération partielle : les articles non contestés sortent sans attendre les autres.",
      "Traitement prioritaire pour une urgence humanitaire, sur lettre motivée d'un responsable de niveau pays (échéance médicale, stock, population concernée).",
      "Agent référent désigné pour les dossiers humanitaires et créneau de dépôt convenu avec le bureau.",
      "Séparation des envois : les articles à autorisation longue partent en dossier distinct.",
    ],
    highlight: "On obtient une accélération en offrant un dossier irréprochable et une urgence justifiée par écrit — jamais en payant, ni en promettant ce qu'on ne peut pas tenir.",
    example: {
      title: 'Fil rouge — les leviers utilisés pour COD-2026-007',
      lines: [
        "Séparation : radios VHF retirées de la commande (07/04).",
        "Agent référent : obtenu à la visite de présentation (10/04).",
        "Dépôt anticipé : dossier déposé le 13/04, avant l'arrivée du vol du 16/04.",
        "Libération partielle : 400 kits libérés le 17/04 pendant que les concentrateurs restaient sous douane.",
      ],
    },
  },
  {
    type: 'comparison-table',
    title: 'Autorités civiles et autorités militaires : deux logiques différentes',
    columns: ['', 'Autorité civile', 'Autorité militaire / de sécurité'],
    rows: [
      ['Base légale de l\'interaction', "Réglementation administrative, douanière, fiscale : un cadre écrit et généralement stable", "Ordre opérationnel du moment, souvent verbal, qui peut changer d'un jour à l'autre selon la situation sécuritaire"],
      ['Ce qui fonctionne', "Références précises aux textes (accord d'exonération, numéro d'enregistrement ONG), documents complets et cohérents", "Relation de confiance construite dans la durée, communication claire du caractère strictement humanitaire de la cargaison, aucune impression de dissimulation"],
      ['Le piège classique', "Traiter l'agent des douanes comme un obstacle plutôt que comme un interlocuteur régulier à entretenir", "Traiter un checkpoint comme une négociation ponctuelle isolée, sans relation préexistante ni suivi après coup"],
      ['Votre posture', "Technique, précise, écrite : vous présentez des pièces", "Calme, transparente, constante : vous présentez qui vous êtes et ce que vous transportez"],
      ['Renvoi utile', "—", "La négociation d'accès avec des acteurs armés en zone de conflit actif est approfondie au Module 07 (principes CICR) ; ce module couvre la coordination de routine."],
    ],
  },
  {
    type: 'concept',
    title: 'Les checkpoints : une réalité opérationnelle récurrente, pas une exception',
    body: [
      "Dans la quasi-totalité des contextes d'intervention (Est de la RDC, Nord du Tchad, Soudan du Sud, Nord du Nigeria), les checkpoints font partie du paysage logistique normal, au même titre qu'un péage ou un contrôle de police ailleurs. Les traiter comme une routine à gérer avec méthode, plutôt qu'un drame à chaque fois, change la façon dont votre équipe les aborde et les documente.",
      "Leur négociation repose sur les mêmes principes humanitaires que ceux du Module 01 : humanité et impartialité (la cargaison est présentée pour ce qu'elle est, jamais liée à un camp), neutralité (aucune concession, même symbolique, qui laisserait penser que l'organisation prend parti), indépendance (toute tentative d'instrumentalisation politique du passage est documentée et signalée).",
    ],
    highlight: "Ce qui fait la différence n'est presque jamais un argument brillant improvisé sur place, mais la relation construite en amont : un contact établi, une présentation systématique aux nouvelles autorités, une trace écrite de chaque interaction précédente.",
    pitfall: "Payer « pour que ça passe ». Les bailleurs institutionnels (ECHO, USAID/BHA...) et la plupart des ONG appliquent une politique de tolérance zéro : tout paiement informel est refusé, consigné et remonté à la coordination.",
  },
  {
    type: 'concept',
    title: 'Vos deux outils du quotidien : Excel et WhatsApp Business',
    body: [
      "Excel ou Google Sheets : un dédouanement humanitaire implique généralement 6 à 12 documents différents à obtenir auprès de services distincts (douane, ministère de tutelle, transitaire). Sans tableau de suivi structuré, on perd la trace de ce qui est obtenu, de ce qui est en attente, et depuis combien de temps. Le fichier checklist-dedouanement.xlsx est construit pour cela.",
      "WhatsApp Business : dans la quasi-totalité des contextes, c'est le canal réel de coordination avec votre transitaire, vos contacts au poste-frontière et parfois l'autorité locale. La version Business apporte des listes de diffusion par dossier ou par zone, des réponses rapides pré-enregistrées (statut d'un dossier, documents manquants) et une séparation nette entre communications professionnelles et personnelles.",
    ],
    bullets: [
      "Un groupe WhatsApp par dossier, nommé avec l'identifiant du shipment (ex. « COD-2026-007 — dossier douane »).",
      "Un message WhatsApp ne vaut pas preuve : tout engagement, toute pièce et toute décision sont reconfirmés par e-mail avec accusé de réception.",
      "Pas de document sensible sur un groupe ouvert : contacts nominatifs et pièces douanières restent en diffusion restreinte.",
    ],
    tip: "Créez trois réponses rapides dès le premier jour : « Accusé de réception — dossier [ID] », « Relance — document manquant [nom] » et « Statut du dossier [ID] ? ». Vous gagnerez vingt minutes par jour.",
  },
  {
    type: 'comparison-table',
    title: 'Litiges douaniers et réclamations de marchandise : les cas que vous allez rencontrer',
    columns: ['Type', 'Symptôme', 'Cause fréquente', 'Première réponse'],
    rows: [
      ['Document incohérent', "Dossier bloqué pour vérification", "Code HS, description ou quantité différents d'un document à l'autre", "Corriger à la source, redéposer le dossier complet"],
      ['Autorisation oubliée', "« Il manque un papier du ministère »", "Bien sensible (santé, télécoms, véhicule) non anticipé", "Lancer la demande en urgence, demander une libération partielle du reste"],
      ["Contestation du périmètre d'exonération", "L'agent réclame droits et taxes malgré l'accord", "Interprétation de la liste des biens couverts", "Contester par écrit, avec l'article de l'accord, avant tout paiement"],
      ['Retard sans motif', "« Revenez la semaine prochaine »", "Dossier perdu, interlocuteur remplacé, charge de travail", "Demander le motif par écrit et le nom de l'agent traitant ; escalader"],
      ['Frais de magasinage', "Facture de stockage en douane ou à l'aéroport", "Marchandise immobilisée plus longtemps que la franchise de stockage", "Demander la libération rapide ou un geste commercial, avec chronologie"],
      ['Marchandise endommagée ou manquante', "Colis écrasé, article absent à la livraison", "Manutention, transport, vol", "Constat contradictoire immédiat, réserves écrites, notification dans les délais"],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire opérationnel du module',
    terms: [
      { term: 'Franchise douanière', definition: "Exemption des droits de douane et taxes à l'importation accordée à des biens répondant à des critères définis (ici, l'usage humanitaire), dans le cadre d'un accord préalable." },
      { term: 'Exonération', definition: "L'acte administratif concret par lequel l'autorité douanière reconnaît, pour un envoi donné, le bénéfice de la franchise douanière." },
      { term: 'Code HS (Harmonized System)', definition: "Nomenclature douanière internationale codifiant chaque type de marchandise ; sa cohérence entre tous les documents d'un dossier est un point de contrôle systématique." },
      { term: 'Bordereau', definition: "Document récapitulatif qui accompagne une expédition et liste en détail son contenu (bordereau de livraison ou d'expédition selon le contexte)." },
      { term: 'Manifeste de cargaison', definition: "Document légal déclarant l'intégralité du contenu d'un moyen de transport à l'entrée ou à la sortie d'un territoire douanier ; les autorités le croisent avec votre dossier d'exonération." },
      { term: 'Transitaire / agent en douane', definition: "Professionnel agréé qui dépose et suit les déclarations en douane pour votre compte." },
      { term: 'Liste de colisage (packing list)', definition: "Document détaillant le contenu, le poids et le volume de chaque colis d'un envoi." },
      { term: 'Double usage', definition: "Bien utilisable à des fins civiles et militaires ou commerciales (radios, certains véhicules) : il exige souvent une autorisation complémentaire." },
      { term: 'Mainlevée', definition: "Décision de la douane autorisant l'enlèvement de la marchandise après dédouanement." },
      { term: 'Magasinage', definition: "Frais de stockage de la marchandise en entrepôt de douane ou d'aéroport au-delà de la période de franchise." },
      { term: 'Constat contradictoire', definition: "Constat d'un dommage ou d'un manque établi et signé conjointement, sur place, par le livreur et le destinataire." },
      { term: 'Recours gracieux', definition: "Demande écrite adressée à l'autorité qui a pris la décision pour qu'elle la réexamine." },
    ],
  },
  {
    type: 'comparison-table',
    title: 'Votre feuille de route : neuf procédures, un seul fil',
    columns: ['Procédure', 'Quand', 'Livrable produit'],
    rows: [
      ["1 — Établir le statut d'exonération", 'Avant de commander', "Fiche périmètre + matrice article par article + planning à rebours"],
      ["2 — Ouvrir le dossier dans la checklist", 'Jour de la commande confirmée', 'checklist-dedouanement.xlsx : 7 lignes + tableau de bord'],
      ['3 — Contrôler la cohérence documentaire', 'À réception des documents, avant tout envoi', 'Tableau de concordance sans écart, documents réémis'],
      ['4 — Transmettre au transitaire', "Une fois le dossier concordant", "Message d'envoi unique + accusé de dépôt"],
      ['5 — Suivre, relancer, escalader', 'Chaque jour jusqu\'à la mainlevée', 'Relances datées + note d\'escalade'],
      ['6 — Construire la relation avec les autorités', 'Dès l\'arrivée dans la zone, puis en continu', 'registre-relations-autorites.docx rempli'],
      ['7 — Passer un checkpoint', 'Avant et pendant chaque convoi', 'Script chauffeur + fiche check-point'],
      ['8 — Traiter un litige ou une réclamation', 'Dès l\'apparition du problème', 'Courrier de contestation, constat, réclamation'],
      ['9 — Clôturer et capitaliser', 'À la sortie de douane', 'Dossier clôturé + tableau des délais prévu / réel'],
    ],
  },

  // ───────────── PROCÉDURE 1 — Établir le statut d'exonération ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: "Rassembler les textes : accord, certificat, annexe des biens, procédure par envoi",
    intro: "Mardi 7 avril, avant même de confirmer la commande à Nairobi. « On a un accord d'exonération » n'est pas une information : c'est une affirmation. Vous avez besoin des documents eux-mêmes, de leur date et de ce qu'ils disent précisément. Intrants : le nom exact de votre entité, les contacts de la logistique pays.",
    steps: [
      {
        title: 'Demandez les cinq documents de base',
        actions: [
          "Écrivez à la logistique pays (Jean-Marc Ilunga) et au point focal ONG de votre organisation en copie.",
          "Demandez : (1) l'accord de siège ou le MoU ; (2) le certificat d'exonération de l'organisation ; (3) l'annexe qui liste les biens couverts ; (4) la note ou circulaire décrivant la procédure d'exonération par envoi ; (5) la liste des postes de douane où le certificat est enregistré.",
          "Si un document manque, ouvrez la page pays de la LCA du Logistics Cluster (dlca.logcluster.org), rubrique douanes, et interrogez le point focal du cluster ou votre transitaire.",
        ],
      },
      {
        title: 'Classez et datez',
        actions: [
          "Créez le dossier « 02_Douane/Cadre » et enregistrez chaque pièce au format AAAA-MM-JJ_Organisation_Document_Référence.",
          "Notez dans le journal de coordination la date de réception et l'expéditeur de chaque pièce.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — dossier « 02_Douane/Cadre » le 07/04 à 11h30',
      lines: [
        "2026-04-07_Kemora_Accord-de-siege_signe-2023-06-14.pdf",
        "2026-04-07_Kemora_Certificat-exoneration_CE-2025-0417_valide-jusqu-au-2026-12-31.pdf",
        "2026-04-07_Kemora_Annexe-2-biens-couverts.pdf",
        "2026-04-07_Kemora_Note-procedure-exoneration-par-envoi.pdf (reçue de J.-M. Ilunga à 10h30)",
        "Manquant : liste des postes de douane où le certificat est enregistré → demandé à TGL (message de 11h15).",
      ],
    },
    result: "Les quatre premiers documents sont en main, datés, classés. Vous savez ce qui manque et à qui vous l'avez demandé.",
    pitfall: "Vous contenter de « on a un accord ». Sans le texte, vous ne savez ni ce qui est couvert, ni jusqu'à quand, ni pour quelle entité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: "Rédiger la fiche « périmètre d'exonération » d'une page",
    intro: "Vous transformez 40 pages de texte juridique en une fiche d'une page que vous (et votre successeur) consulterez avant chaque commande. Chaque ligne cite sa source.",
    steps: [
      {
        title: 'Remplissez les huit rubriques',
        actions: [
          "Ouvrez un nouveau document (une page) et créez un tableau Rubrique / Contenu / Source.",
          "Rubriques : base juridique, entité bénéficiaire, validité, ce qui est couvert, exclusions, procédure par envoi, délais annoncés, interlocuteur douane.",
          "Pour chaque rubrique, recopiez la formulation du texte (jamais votre paraphrase) et notez l'article ou la page.",
          "Écrivez « à confirmer » partout où le texte reste flou : ce sont vos premières questions au transitaire.",
        ],
      },
    ],
    table: {
      columns: ['Rubrique', 'Contenu retenu', 'Source'],
      rows: [
        ['Base juridique', "Accord de siège du 14/06/2023, franchise des biens à usage humanitaire", "Accord, art. 11"],
        ['Entité bénéficiaire', "Kemora Santé — bureau de Goma (nom exact à reproduire sur tous les documents)", "Certificat CE-2025-0417"],
        ['Validité', "Jusqu'au 31/12/2026", "Certificat CE-2025-0417"],
        ['Couvert', "Droits de douane et TVA à l'importation : médicaments, matériel médical, consommables", "Annexe 2"],
        ['Exclusions', "Biens à double usage ; véhicules ; frais de service (transitaire, magasinage)", "Accord art. 12, annexe 2"],
        ['Procédure par envoi', "Demande d'exonération déposée par le transitaire, avec facture, liste de colisage et certificat d'origine", "Note de procédure"],
        ['Délais annoncés', "3 jours ouvrés pour un dossier complet (indicatif, à confirmer au bureau)", "Note de procédure"],
        ['Interlocuteur douane', "Bureau de l'aéroport de Goma ; chef de bureau en poste depuis le 01/04 — nom à confirmer", "Briefing du 07/04"],
      ],
    },
    result: "Livrable 1, partie 1 : une fiche d'une page où chaque ligne est sourcée et où les zones floues sont marquées « à confirmer ».",
    tip: "Gardez cette fiche dans « 02_Douane/Cadre » et mettez-la à jour à chaque changement de règle ou de contact. Elle se transmet à votre successeur avec le registre des relations.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Classer la commande article par article : couvert, autorisation, double usage',
    intro: "L'accord ne s'applique pas à une commande, mais à chaque article. Avant de confirmer à Nairobi, vous classez chaque ligne : couverte telle quelle, couverte avec autorisation complémentaire, ou hors accord. Intrants : la commande, la fiche fournisseur, l'annexe des biens couverts.",
    steps: [
      {
        title: 'Construisez la matrice',
        actions: [
          "Une ligne par article de la commande (référence, quantité).",
          "Colonne « Code HS » : notez celui du fournisseur, à valider ensuite avec le transitaire.",
          "Colonne « Couvert par l'accord ? » : cherchez l'article dans l'annexe des biens couverts et notez la ligne.",
          "Colonne « Autorisation complémentaire » : santé, télécommunications, transports... et l'autorité concernée.",
          "Colonne « Décision » : dans l'envoi, hors envoi ou séparé.",
        ],
      },
      {
        title: 'Isolez ce qui ralentit le reste',
        actions: [
          "Un article dont l'autorisation est très longue ne doit jamais retenir les articles urgents : sortez-le de l'envoi ou traitez-le en dossier séparé.",
        ],
      },
    ],
    table: {
      columns: ['Article', 'Code HS', 'Couvert par l\'accord ?', 'Autorisation complémentaire', 'Décision'],
      rows: [
        ['Kit de traitement du choléra KCH-01 × 400', '3006.50', 'Oui (annexe 2, kits sanitaires d\'urgence)', "Autorisation d'importation (autorité pharmaceutique)", 'Dans l\'envoi COD-2026-007'],
        ["Concentrateur d'oxygène × 4", '9019.20', 'Oui (annexe 2, matériel médical)', 'Autorisation du ministère de la Santé', 'Dans COD-2026-007, avec suivi spécifique'],
        ['Radio VHF mobile × 2', '8517.62', 'Non : double usage', "Licence de l'autorité des télécommunications (délai d'exemple : 15 jours ouvrés)", "Retirée de la commande : achat local à Goma auprès d'un revendeur agréé ; usage traité avec le responsable sécurité (Module 07)"],
      ],
    },
    result: "Livrable 1, partie 2 : une matrice qui dit, avant la commande, quels articles passent seuls et lesquels déclenchent une autorisation.",
    pitfall: "Laisser les radios dans l'envoi des kits. Quinze jours d'attente de licence auraient immobilisé des produits médicaux urgents.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: "Planifier à rebours les autorisations et la sortie de douane",
    intro: "Vous partez de la date où la marchandise doit être à Bweza et vous remontez : chaque document a un émetteur, un délai annoncé, une date limite de dépôt et une date limite d'obtention. Les documents les plus longs à obtenir se lancent dès la commande confirmée, pas à l'arrivée du camion.",
    steps: [
      {
        title: 'Remontez le calendrier',
        actions: [
          "Écrivez la date de besoin : kits à Bweza le lundi 27/04 (convoi au départ de Goma à 06h00).",
          "Fixez la date limite de sortie de douane : jeudi 23/04, pour charger et vérifier la route.",
          "Pour chaque document : demandez le délai annoncé à l'émetteur (par écrit) et calculez en jours ouvrés.",
          "Datez le dépôt de chaque demande au plus tard à l'ouverture du dossier.",
          "Repérez le chemin critique : le document au délai le plus long.",
        ],
      },
    ],
    table: {
      columns: ['Document', 'Émetteur', 'Délai annoncé', 'À déposer au plus tard', 'Attendu au plus tard'],
      rows: [
        ["Demande d'exonération", 'Douane (service des exonérations)', '3 jours ouvrés', '10/04', '15/04'],
        ["Autorisation d'importation (kits)", 'Direction de la pharmacie, ministère de la Santé', '5 jours ouvrés', '10/04', '17/04'],
        ['Autorisation ministérielle (concentrateurs)', 'Ministère de la Santé, direction des équipements', '6 jours ouvrés', '10/04', '20/04'],
        ['Manifeste de cargaison', 'Compagnie aérienne', 'Émis au départ du vol', '—', '16/04 (vol Nairobi → Goma)'],
        ['Sortie de douane', 'Bureau de l\'aéroport de Goma', '3 jours ouvrés après dépôt complet', '—', '23/04 au plus tard'],
      ],
    },
    result: "Le chemin critique est l'autorisation du ministère de la Santé pour les concentrateurs : 6 jours ouvrés, attendue le 20/04. Si son dépôt glisse d'une journée, la sortie du 23/04 est en danger.",
    tip: "Demandez le délai à l'émetteur, pas au transitaire seul, puis ajoutez une marge d'un jour. Un délai « indicatif » donné oralement ne vaut pas engagement : demandez-le par écrit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: "Vérifier que le statut est reconnu là où la marchandise arrive",
    intro: "Un certificat valide à Kinshasa n'est pas automatiquement reconnu au bureau de l'aéroport de Goma. Vous contrôlez cinq points, un par un, avant la commande.",
    steps: [
      {
        title: 'Passez les cinq contrôles',
        actions: [
          "Validité : la date de fin du certificat est postérieure à la date d'arrivée de la marchandise.",
          "Entité : le nom du bénéficiaire sur le certificat est identique, au caractère près, à celui qui figurera sur la facture et la liste de colisage.",
          "Enregistrement : demandez au transitaire si une copie du certificat est enregistrée au bureau de douane d'arrivée.",
          "Signataire : vérifiez qui est autorisé à signer la demande d'exonération et si son spécimen de signature est déposé.",
          "Changement d'interlocuteur : identifiez le nouveau chef de bureau (Procédure 6).",
        ],
      },
    ],
    table: {
      columns: ['Contrôle', 'Résultat au 08/04', 'Action'],
      rows: [
        ['Validité du certificat', 'OK : 31/12/2026 est postérieur au 16/04', '—'],
        ['Nom de l\'entité', 'OK : « Kemora Santé — Goma »', 'Reproduire à l\'identique partout'],
        ['Copie enregistrée au bureau de l\'aéroport', 'NON : TGL confirme que la copie n\'a jamais été déposée à ce bureau', 'Déposer une copie certifiée lors de la visite de présentation du 10/04 (Procédure 6)'],
        ['Signataire et spécimen de signature', 'À confirmer', 'Demander au directeur pays de signer et à TGL de vérifier le dépôt du spécimen'],
        ['Chef de bureau', 'Nouveau depuis le 01/04, nom : M. Désiré Mulumba', 'Visite de présentation le 10/04'],
      ],
    },
    result: "Livrable 1 terminé : fiche périmètre, matrice, planning à rebours et statut vérifié. Vous avez découvert avant l'arrivée du vol que votre certificat n'était pas enregistré au bureau concerné.",
    pitfall: "Supposer que « l'organisation a un accord » veut dire « le bureau de l'aéroport le connaît ». Le statut doit être enregistré au poste, par vous, en amont.",
  },

  // ───────────── PROCÉDURE 2 — Ouvrir le dossier dans la checklist ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 7',
    title: 'Ouvrir, renommer et lire checklist-dedouanement.xlsx',
    intro: "Mardi 7 avril, le jour de la commande confirmée. Le fichier contient deux onglets : « Suivi dossiers » (une ligne par document requis, 10 colonnes) et « Tableau de bord » (une ligne par envoi, calculée automatiquement). Il est livré avec trois dossiers d'exemple (TCD-2026-011, -012 et -014).",
    steps: [
      {
        title: 'Préparez votre copie',
        actions: [
          "Ouvrez checklist-dedouanement.xlsx et enregistrez-le immédiatement sous 2026-04-07_Checklist-dedouanement_Goma_v01.xlsx.",
          "Dans l'onglet « Suivi dossiers », repérez la ligne d'en-têtes (ligne 4) : A Shipment ID, B Origine, C Description marchandise, D Date ouverture dossier, E Document requis, F Statut, G Date obtenue, H Responsable, I Jours ecoules, J Alerte.",
          "Remarquez que le fichier est saisi sans accents (Jours ecoules, Bloque) : reproduisez exactement les libellés de la liste déroulante.",
          "Repérez les blocs de 7 lignes : un dossier = 7 lignes, une par document requis (lignes 5 à 11 pour le premier).",
        ],
      },
      {
        title: 'Repérez ce qui est calculé',
        actions: [
          "Les colonnes I (Jours ecoules) et J (Alerte) contiennent des formules : ne les modifiez et ne les supprimez jamais.",
          "Ouvrez l'onglet « Tableau de bord » : colonnes A Shipment ID, B Documents requis, C Documents obtenus, D % complet, E Documents en retard, F Statut global, toutes calculées sauf A.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état du fichier à 9h30',
      lines: [
        "Fichier enregistré : 2026-04-07_Checklist-dedouanement_Goma_v01.xlsx dans « 02_Douane/Dossiers ».",
        "Lignes 5 à 25 : trois dossiers d'exemple (TCD-2026-011, -012, -014) ; lignes 26 à 32 : bloc « A COMPLETER » prêt pour un nouveau dossier.",
        "Tableau de bord : lignes 6 à 8 = exemples, ligne 9 = « A COMPLETER ».",
      ],
    },
    result: "Un fichier v01 daté, dont vous connaissez les 10 colonnes, les blocs de 7 lignes et les formules à ne pas toucher.",
    pitfall: "Travailler directement dans le fichier modèle. Vous l'écraseriez, et le prochain dossier repartirait des données du précédent.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 7',
    title: 'Vider les exemples sans casser les formules',
    intro: "Pour une vraie mission, vous remplacez les trois dossiers d'exemple par le vôtre. Les formules des colonnes I et J, et celles du tableau de bord, doivent rester intactes.",
    steps: [
      {
        title: 'Effacez le contenu, jamais les lignes',
        actions: [
          "Sélectionnez A5:D25 puis appuyez sur Suppr (cela efface Shipment ID, Origine, Description et Date d'ouverture des trois exemples).",
          "Sélectionnez G5:H25 puis Suppr (Date obtenue et Responsable).",
          "Pour la colonne F (Statut) de F5 à F25 : remettez « En attente » dans chaque cellule, avec la liste déroulante.",
          "Ne supprimez jamais une ligne avec « Supprimer la ligne » : vous casseriez la plage lue par le tableau de bord.",
        ],
      },
      {
        title: 'Videz le tableau de bord',
        actions: [
          "Dans l'onglet « Tableau de bord », effacez le contenu de A7 et A8 (les exemples TCD-2026-012 et TCD-2026-014).",
          "Gardez A6 pour votre dossier et A9 « A COMPLETER » comme emplacement libre.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — vérification après nettoyage',
      lines: [
        "Lignes 5 à 25 : colonnes A à D et G à H vides, F = « En attente », I et J inchangées.",
        "Tableau de bord : A6 vide pour l'instant, A7 et A8 vides, A9 « A COMPLETER ». Les lignes sans identifiant affichent « - » en statut global.",
        "Aucune erreur #REF! ou #VALEUR! ne s'affiche.",
      ],
    },
    result: "Un fichier propre, sans donnée d'exemple, dont les formules fonctionnent encore.",
    pitfall: "Supprimer des lignes entières ou coller sur les colonnes I et J. Une formule écrasée par une valeur fixe cesse de calculer l'alerte, sans aucun message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 7',
    title: "Colonnes A à D — l'identité du dossier, identique sur les 7 lignes",
    intro: "Les colonnes A, B, C et D décrivent l'envoi. Elles doivent être renseignées sur chacune des 7 lignes, car les formules des colonnes I et J lisent la date d'ouverture de LEUR ligne.",
    steps: [
      {
        title: 'Colonne A — Shipment ID',
        actions: [
          "Format : PAYS-ANNEE-NUMÉRO, comme dans les exemples (TCD-2026-014). Pour la RDC : COD-2026-007.",
          "Saisissez-le une seule fois, puis recopiez-le vers le bas sur les 7 lignes.",
        ],
      },
      {
        title: 'Colonnes B et C — Origine et Description marchandise',
        actions: [
          "Origine : ville et pays d'expédition (Nairobi, Kenya).",
          "Description : courte (la colonne fait 32 caractères de large), avec les quantités : « Kits choléra KCH-01 x400 + concentrateurs O2 x4 ».",
        ],
      },
      {
        title: 'Colonne D — Date ouverture dossier',
        actions: [
          "Saisissez la date de confirmation de la commande (2026-04-07), pas la date du jour où vous remplissez le fichier.",
          "Recopiez la même date sur les 7 lignes.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — saisie des lignes 5 à 11',
      lines: [
        "A5:A11 : COD-2026-007",
        "B5:B11 : Nairobi, Kenya",
        "C5:C11 : Kits choléra KCH-01 x400 + concentrateurs O2 x4",
        "D5:D11 : 2026-04-07",
      ],
    },
    pitfall: "Laisser la colonne D vide sur une ligne, ou y mettre la date du jour d'une mise à jour tardive. Date vide : ni jours écoulés, ni alerte, donc un retard invisible. Date tardive : un retard qui paraît plus court qu'il ne l'est.",
    result: "Les 7 lignes portent la même identité de dossier et la même date d'ouverture.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 7',
    title: "Colonne E — les 7 documents requis, dans l'ordre du modèle",
    intro: "La colonne E liste, pour chaque dossier, les 7 documents requis dans le même ordre. Vous la conservez telle quelle : l'ordre commun permet de comparer deux dossiers d'un coup d'œil.",
    steps: [
      {
        title: 'Vérifiez la liste',
        actions: [
          "Contrôlez l'ordre : Facture commerciale ; Liste de colisage (packing list) ; Certificat d'origine ; Demande d'exoneration douaniere ; Autorisation d'importation ; Manifeste de cargaison ; Autorisation ministerielle complementaire (si applicable).",
          "Ne renommez pas les libellés : le tableau de bord ne s'appuie pas dessus, mais vos collègues et vos échanges avec le transitaire, si.",
        ],
      },
      {
        title: "Traitez un document qui ne s'applique pas",
        actions: [
          "N'utilisez « Non applicable » que pour « Autorisation d'importation » ou « Autorisation ministerielle complementaire », et seulement après confirmation écrite du transitaire ou de l'autorité.",
          "Faites un clic droit sur la cellule F, « Nouvelle note », puis écrivez qui a confirmé, quand et comment.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — ce que vous saisissez dans le dossier COD-2026-007',
      lines: [
        "E5 Facture commerciale | E6 Liste de colisage (packing list) | E7 Certificat d'origine | E8 Demande d'exoneration douaniere",
        "E9 Autorisation d'importation (applicable : médicaments) | E10 Manifeste de cargaison | E11 Autorisation ministerielle complementaire (applicable : concentrateurs)",
        "Aucun « Non applicable » : les deux autorisations sont requises pour cet envoi.",
      ],
    },
    pitfall: "Marquer « Non applicable » une autorisation sur la foi d'un « je crois que non ». Le document disparaît du décompte (colonne B du tableau de bord) et l'envoi paraît plus avancé qu'il n'est.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 5 sur 7',
    title: 'Colonnes F, G et H — Statut, Date obtenue, Responsable',
    intro: "Ces trois colonnes sont celles que vous mettez à jour chaque jour. La règle de statut doit être la même pour toutes les lignes, sinon votre tableau de bord ne dit rien de fiable.",
    steps: [
      {
        title: 'Colonne F — Statut (liste déroulante)',
        actions: [
          "Choisissez la valeur dans la liste : Obtenu, En attente, Bloque, Non applicable. Ne la tapez pas à la main.",
          "Obtenu : le document est entre vos mains ET a passé le contrôle de concordance (Procédure 3). Un document promis n'est pas obtenu.",
          "En attente : demandé, pas encore reçu.",
          "Bloque : refusé ou retourné par l'autorité (écrivez le motif dans la colonne H ou en note de cellule).",
        ],
      },
      {
        title: 'Colonnes G et H',
        actions: [
          "G — Date obtenue : la date réelle de réception du document, jamais celle de la saisie.",
          "H — Responsable : une personne ou un service nommé qui détient la prochaine action (Josué Kalume — TGL ; Ministère de la Santé ; Point focal ONG).",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Document', 'F — Statut', 'G — Date obtenue', 'H — Responsable'],
      rows: [
        ['5', 'Facture commerciale', 'En attente', '', 'G. Wanjiru (centrale Nairobi)'],
        ['6', 'Liste de colisage', 'En attente', '', 'G. Wanjiru (centrale Nairobi)'],
        ['7', "Certificat d'origine", 'En attente', '', 'G. Wanjiru (centrale Nairobi)'],
        ['8', "Demande d'exoneration", 'En attente', '', 'J.-M. Ilunga puis J. Kalume (TGL)'],
        ['9', "Autorisation d'importation", 'En attente', '', 'J. Kalume (TGL) — Direction de la pharmacie'],
        ['10', 'Manifeste de cargaison', 'En attente', '', 'Compagnie aérienne via J. Kalume'],
        ['11', 'Autorisation ministerielle', 'En attente', '', 'J. Kalume (TGL) — Ministère de la Santé'],
      ],
    },
    pitfall: "Écrire « Bloqué » avec un accent ou « Obtenue » au féminin. Un libellé qui diffère de la liste n'est pas compté par le tableau de bord. Passez toujours par la liste déroulante (elle ne couvre que les lignes 5 à 52 : au-delà, soyez d'autant plus strict).",
    result: "Le dossier est ouvert : 7 lignes, 7 « En attente », chacune avec un responsable nommé.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 6 sur 7',
    title: "Colonnes I et J — lire les jours écoulés et l'alerte RETARD",
    intro: "Les colonnes I et J sont calculées pour vous. Vous devez comprendre ce qu'elles calculent exactement, parce que ce sont elles qui décident quand le fichier vous dit « escaladez ».",
    steps: [
      {
        title: 'Comprenez la formule de la colonne I (Jours ecoules)',
        actions: [
          "Formule d'origine (anglais) : =IF(OR(F5=\"Obtenu\",F5=\"Non applicable\",D5=\"\"),\"\",TODAY()-D5).",
          "En clair : si le document est obtenu, non applicable, ou si la date d'ouverture est vide, la cellule reste vide ; sinon elle affiche le nombre de jours calendaires écoulés depuis l'ouverture.",
          "Dans Excel en français, la même formule s'écrit avec SI, OU et AUJOURDHUI.",
        ],
      },
      {
        title: "Comprenez la formule de la colonne J (Alerte)",
        actions: [
          "Formule d'origine : =IF(AND(F5<>\"Obtenu\",F5<>\"Non applicable\",D5<>\"\",(TODAY()-D5)>5),\"RETARD\",\"\").",
          "En clair : RETARD s'affiche dès qu'un document non obtenu a plus de 5 jours calendaires depuis l'ouverture du dossier.",
          "Le fichier annonce « jours ouvrés » dans sa note, mais la formule compte des jours calendaires : un week-end compte dans les 5 jours.",
        ],
      },
    ],
    example: {
      title: "Fil rouge — lecture des lignes 8 à 11 au mercredi 15/04 (8 jours après l'ouverture)",
      lines: [
        "Ligne 8 — Demande d'exoneration : F = Obtenu (14/04) → I vide, J vide.",
        "Ligne 9 — Autorisation d'importation : F = En attente → I = 8, J = RETARD.",
        "Ligne 10 — Manifeste de cargaison : F = En attente → I = 8, J = RETARD (le manifeste n'existe qu'au départ du vol du 16/04).",
        "Ligne 11 — Autorisation ministerielle : F = En attente → I = 8, J = RETARD.",
      ],
    },
    tip: "L'alerte est un déclencheur d'examen, pas un verdict. Une ligne en RETARD peut être normale (le manifeste) ; ce qui compte, c'est que vous ayez qualifié chaque RETARD par écrit : promis pour quelle date, par qui.",
    pitfall: "Attendre que « RETARD » s'affiche pour planifier. Vous avez déjà calculé vos dates limites en Procédure 1 : la colonne J confirme, elle ne remplace pas votre planning.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 7 sur 7',
    title: "Onglet « Tableau de bord » : saisir l'identifiant et lire le statut global",
    intro: "Le tableau de bord résume chaque envoi en une ligne. Une seule cellule est à saisir : la colonne A. Toutes les autres se calculent à partir de l'onglet « Suivi dossiers ».",
    steps: [
      {
        title: "Saisissez l'identifiant",
        actions: [
          "En A6, saisissez COD-2026-007, strictement identique à la colonne A de « Suivi dossiers » (même casse, aucun espace en fin).",
          "Les formules COUNTIFS des colonnes B, C et E lisent cette cellule : un identifiant différent d'un seul caractère donne « - ».",
        ],
      },
      {
        title: 'Lisez les cinq colonnes calculées',
        actions: [
          "B — Documents requis : le nombre de lignes du dossier, hors « Non applicable ».",
          "C — Documents obtenus : le nombre de lignes à « Obtenu ».",
          "D — % complet : C ÷ B.",
          "E — Documents en retard : le nombre de lignes en RETARD.",
          "F — Statut global : « Dossier complet » si D = 100 % ; « A ESCALADER » si au moins un RETARD ; sinon « En cours ».",
        ],
      },
    ],
    table: {
      columns: ['Shipment ID', 'Documents requis', 'Documents obtenus', '% complet', 'Documents en retard', 'Statut global'],
      rows: [
        ['COD-2026-007 (lecture du 15/04)', '7', '4', '57 %', '3', 'A ESCALADER'],
        ['COD-2026-007 (lecture du 21/04)', '7', '7', '100 %', '0', 'Dossier complet'],
      ],
    },
    result: "Livrable 2 terminé : le dossier COD-2026-007 est ouvert, ses 7 lignes sont suivies et vous savez lire le tableau de bord à n'importe quelle date.",
    pitfall: "Penser que « Dossier complet » veut dire « marchandise sortie ». Il signifie « 7 documents obtenus ». La sortie réelle de douane se consigne à part (Procédure 9).",
  },

  // ───────────── PROCÉDURE 3 — Cohérence documentaire ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Définir les champs à comparer et préparer le tableau de concordance',
    intro: "Mercredi 8 avril. La facture et la liste de colisage arrivent de Nairobi ; la demande d'exonération est prête côté logistique pays. Avant de cocher quoi que ce soit « Obtenu », vous contrôlez que les trois documents disent la même chose, mot pour mot et chiffre pour chiffre. C'est le contrôle qui évite le blocage le plus fréquent et le plus évitable.",
    steps: [
      {
        title: 'Listez les champs à comparer',
        actions: [
          "Code HS de chaque ligne de marchandise.",
          "Description de chaque ligne (formulation exacte).",
          "Quantité de chaque ligne.",
          "Poids brut et nombre de colis.",
          "Valeur totale et devise.",
          "Raison sociale du destinataire (celle du certificat d'exonération).",
          "Provenance et référence de commande.",
        ],
      },
      {
        title: 'Préparez le tableau',
        actions: [
          "Dans un nouvel onglet ou un document à part (pas dans la checklist, dont vous ne devez pas changer la structure), créez une ligne par champ et une colonne par document.",
          "Ajoutez une dernière colonne « Écart » : OUI / non.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — documents réunis le 08/04 à 16h00',
      lines: [
        "2026-04-08_Nairobi_Facture_NBO-2026-0412_v1.pdf",
        "2026-04-08_Nairobi_Liste-de-colisage_NBO-2026-0412_v1.pdf",
        "2026-04-08_Kemora-Goma_Demande-exoneration_COD-2026-007_v1.docx",
        "Tableau de concordance créé : 8 champs × 3 documents.",
      ],
    },
    tip: "Faites ce contrôle vous-même, sur papier ou à l'écran, document ouvert à côté de document. Le transitaire contrôle la conformité douanière ; la concordance entre vos propres documents est votre responsabilité.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Comparer document par document : mot pour mot, chiffre pour chiffre',
    intro: "Vous remplissez chaque case du tableau en recopiant ce que dit le document (pas ce que vous pensez qu'il devrait dire), puis vous marquez « OUI » dès que deux cases diffèrent d'un seul caractère.",
    steps: [
      {
        title: 'Remplissez et comparez',
        actions: [
          "Ouvrez chaque document et recopiez la valeur exacte de chaque champ.",
          "Marquez « OUI » dès que deux valeurs diffèrent, même d'un seul caractère, d'un espace ou d'une langue.",
          "Un champ absent d'un document (par exemple le poids sur la facture) se note « — » : il ne compte pas comme écart.",
          "Comptez les écarts : un seul suffit à bloquer l'envoi du dossier.",
        ],
      },
    ],
    table: {
      columns: ['Champ contrôlé', "Demande d'exonération", 'Liste de colisage', 'Facture', 'Écart'],
      rows: [
        ['Code HS — kits', '3004.90', '3006.50', '3006.50', 'OUI'],
        ['Description — kits', 'Kits traitement du choléra KCH-01', 'Kit choléra complet', 'Cholera treatment kit KCH-01', 'OUI'],
        ['Quantité — kits', '400', '400', '400', 'non'],
        ['Code HS — concentrateurs', '9019.20', '9019.20', '9019.20', 'non'],
        ['Quantité — concentrateurs', '6', '4', '4', 'OUI'],
        ['Valeur totale', '20 960 USD', '—', '20 960 USD', 'non'],
        ['Poids brut total', '—', '5 672 kg', '—', 'non'],
        ['Destinataire', 'Kemora Santé — Goma', 'Kemora Santé — Goma', 'Kemora Santé Kenya (Nairobi)', 'OUI'],
      ],
    },
    result: "Quatre écarts sur huit contrôles. Aucun document ne peut être coché « Obtenu » : le dossier n'est pas prêt à partir.",
    pitfall: "Se dire « c'est la même chose, ça se comprend ». Pour l'agent des douanes, 3004.90 et 3006.50 sont deux marchandises différentes ; « Kit choléra complet » et « Cholera treatment kit KCH-01 » aussi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Corriger à la source : un document réémis, jamais un document retouché',
    intro: "Chaque écart a un document à corriger, une personne qui le corrige et une échéance. Vous ne corrigez jamais à la main sur un PDF : vous faites réémettre une version datée, que vous nommez v2.",
    steps: [
      {
        title: 'Décidez la valeur de référence',
        actions: [
          "Code HS : demandez au transitaire de valider le code de chaque ligne par écrit selon le tarif national, puis alignez tous les documents sur ce code.",
          "Description : choisissez une formulation unique et bilingue, puis demandez qu'elle soit reprise à l'identique partout.",
          "Quantité et destinataire : alignez sur la réalité physique (4 concentrateurs commandés) et sur le nom du certificat d'exonération.",
        ],
      },
      {
        title: 'Faites réémettre',
        actions: [
          "Écrivez à la personne concernée avec l'écart exact, la valeur attendue et l'échéance.",
          "Conservez l'ancienne version dans un sous-dossier « Archives » : ne la supprimez jamais.",
        ],
      },
    ],
    table: {
      columns: ['Écart', 'Document à corriger', 'Qui corrige', 'Échéance'],
      rows: [
        ['Code HS kits : 3004.90 → 3006.50 (confirmé par TGL le 09/04 à 14h00)', "Demande d'exonération", 'J.-M. Ilunga (logistique pays)', '10/04 à 12h00'],
        ['Description kits : « Kit de traitement du choléra KCH-01 (Cholera treatment kit KCH-01) » partout', 'Facture, liste de colisage et demande', 'G. Wanjiru (Nairobi) pour les deux premiers ; J.-M. Ilunga pour la demande', '10/04 à 12h00'],
        ['Quantité concentrateurs : 6 → 4', "Demande d'exonération", 'J.-M. Ilunga', '10/04 à 12h00'],
        ['Destinataire : Kemora Santé — Goma', 'Facture', 'G. Wanjiru (Nairobi)', '10/04 à 12h00'],
      ],
    },
    result: "Quatre demandes de correction envoyées le 09/04 à 14h30, avec échéance connue de tous. Aucune pièce n'est modifiée à la main.",
    tip: "Quand le fournisseur est lointain, demandez la correction le jour même et donnez l'heure limite. Une demande « dès que possible » n'a pas d'échéance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: 'Revalider, cocher « Obtenu » et figer le dossier',
    intro: "Vendredi 10 avril, 12h30 : les versions corrigées arrivent. Vous refaites le contrôle en entier (pas seulement les cases corrigées), puis vous cochez dans la checklist et vous figez le dossier.",
    steps: [
      {
        title: 'Refaites le contrôle complet',
        actions: [
          "Ouvrez les trois versions v2 et recopiez de nouveau chaque champ.",
          "Vérifiez que la correction d'un champ n'a pas déplacé l'erreur ailleurs.",
          "Une fois zéro écart, enregistrez le tableau de concordance dans le dossier.",
        ],
      },
      {
        title: 'Mettez à jour la checklist et figez',
        actions: [
          "Dans « Suivi dossiers », passez à « Obtenu » les lignes dont le document est concordant : facture (F5), liste de colisage (F6), certificat d'origine (F7), avec G = 2026-04-10.",
          "Nommez chaque pièce AAAA-MM-JJ_COD-2026-007_Document_v2.pdf et placez-les dans « 02_Douane/COD-2026-007 ».",
          "Convenez que toute modification ultérieure déclenche un nouveau contrôle complet.",
        ],
      },
    ],
    table: {
      columns: ['Champ contrôlé', 'Demande v2', 'Liste de colisage v2', 'Facture v2', 'Écart'],
      rows: [
        ['Code HS — kits', '3006.50', '3006.50', '3006.50', 'non'],
        ['Description — kits', 'Kit de traitement du choléra KCH-01 (Cholera treatment kit KCH-01)', 'Kit de traitement du choléra KCH-01 (Cholera treatment kit KCH-01)', 'Kit de traitement du choléra KCH-01 (Cholera treatment kit KCH-01)', 'non'],
        ['Quantité — concentrateurs', '4', '4', '4', 'non'],
        ['Destinataire', 'Kemora Santé — Goma', 'Kemora Santé — Goma', 'Kemora Santé — Goma', 'non'],
      ],
    },
    result: "Livrable 3 terminé : zéro écart sur les 8 champs ; F5, F6 et F7 à « Obtenu » le 10/04 ; versions v2 archivées, anciennes versions conservées.",
    pitfall: "Cocher « Obtenu » sur réception du fichier, avant le contrôle. Un « Obtenu » non vérifié fait croire que le dossier est sain jusqu'au jour du blocage.",
  },

  // ───────────── PROCÉDURE 4 — Transmettre au transitaire ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 4',
    title: 'Cadrer le transitaire : agrément, lettre de mission, interlocuteur unique',
    intro: "Le transitaire (agent en douane) dépose et suit le dossier pour votre compte, mais la responsabilité de la cohérence et du calendrier reste la vôtre. Avant de lui envoyer quoi que ce soit, vous cadrez ce qu'il fait, dans quels délais, et qui répond.",
    steps: [
      {
        title: 'Vérifiez et cadrez',
        actions: [
          "Demandez son numéro d'agrément et vérifiez qu'il est valide auprès de l'autorité douanière ou de votre logistique pays.",
          "Rédigez une lettre de mission d'une page : périmètre (déclaration d'importation, dépôt des demandes, suivi des autorisations, enlèvement, livraison), délais, honoraires, reporting.",
          "Désignez un interlocuteur principal et un remplaçant, avec téléphone et e-mail.",
          "Écrivez noir sur blanc : aucun paiement informel, aucune dépense non prévue sans votre accord écrit.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lettre de mission TGL, extrait (08/04)',
      lines: [
        "Mission : dédouanement de l'envoi COD-2026-007 (Nairobi → Goma, vol du 16/04) ; dépôt anticipé de la déclaration avant l'arrivée ; suivi des 2 autorisations ; enlèvement et livraison à l'entrepôt Kemora de Goma.",
        "Délais : dépôt du dossier le lundi 13/04 ; point écrit chaque jour avant 17h00 ; sortie de douane visée avant le 23/04.",
        "Interlocuteurs : Josué Kalume (principal) ; remplaçant : bureau TGL Goma (téléphone fictif +243 8XX XXX XXX).",
        "Clause : aucun paiement hors tarif officiel, reçu officiel exigé pour toute taxe ou frais ; tout dépassement de devis soumis à accord écrit de Kemora Santé.",
      ],
    },
    result: "Le transitaire sait ce que vous attendez, à quelle date, et que tout est tracé. Vous avez un nom et un remplaçant à joindre.",
    pitfall: "Confier le dossier « à quelqu'un qui connaît ». Sans lettre de mission, personne ne peut dire dans trois semaines ce qui avait été convenu, ni qui devait faire quoi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 4',
    title: 'Assembler le dossier complet : un index, des noms de fichiers, un seul paquet',
    intro: "Envoyer un dossier par fragments (« je t'envoie le reste demain ») est l'une des causes les plus fréquentes de dossiers traités en double, mal assemblés ou perdus entre deux échanges. Vous préparez un seul paquet, avec un index qui permet de vérifier qu'il est complet.",
    steps: [
      {
        title: 'Constituez le paquet',
        actions: [
          "Regroupez toutes les pièces que vous devez fournir, en PDF lisibles, dans un seul dossier « 02_Douane/COD-2026-007/Envoi ».",
          "Créez une page de garde (une page) : identifiant du dossier, nature de l'envoi, date, vos coordonnées, liste numérotée des pièces.",
          "Vérifiez une dernière fois que chaque pièce porte la bonne version (v2) et que le tableau de concordance est à zéro écart.",
          "Annoncez dans la page de garde les pièces à venir (par exemple le manifeste émis au départ du vol) : une pièce annoncée n'est pas un fragment.",
        ],
      },
    ],
    table: {
      columns: ['N°', 'Pièce', 'Version', 'Origine'],
      rows: [
        ['1', 'Facture commerciale NBO-2026-0412', 'v2', 'Centrale de Nairobi'],
        ['2', 'Liste de colisage (packing list)', 'v2', 'Centrale de Nairobi'],
        ['3', "Certificat d'origine", 'v1', 'Centrale de Nairobi'],
        ['4', "Demande d'exonération signée du directeur pays", 'v2', 'Logistique pays'],
        ['5', "Copie certifiée du certificat d'exonération CE-2025-0417", '—', 'Kemora Santé'],
        ['6', "Demande d'autorisation d'importation (kits)", 'v1', 'Logistique pays'],
        ['7', "Demande d'autorisation du ministère de la Santé (concentrateurs) + fiches techniques", 'v1', 'Logistique pays'],
        ['8', 'Lettre de mission TGL', '—', 'Kemora Santé'],
        ['9', 'Tableau de concordance (zéro écart)', '—', 'Logisticien terrain'],
        ['À venir', "Manifeste de cargaison (émis au départ du vol du 16/04)", '—', 'Compagnie aérienne'],
      ],
    },
    result: "Un paquet unique de 9 pièces, indexé, avec la liste de ce qui reste à venir.",
    tip: "Le dépôt anticipé (pré-dédouanement) vous fait gagner plusieurs jours : la déclaration est déposée avant l'arrivée du vol. Il exige un dossier concordant dès le départ : c'est l'une des procédures accélérées à votre portée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 4',
    title: 'Envoyer en une seule fois et exiger un accusé de réception',
    intro: "Vendredi 10 avril, 15h00. Vous envoyez le paquet par e-mail (la preuve), puis vous doublez par un message WhatsApp Business dans le groupe du dossier (la rapidité). Vous demandez un accusé explicite.",
    steps: [
      {
        title: 'Rédigez le message',
        actions: [
          "Objet : identifiant + nature + action demandée (« COD-2026-007 — dossier complet 9 pièces — dépôt lundi 13/04 »).",
          "Corps : la liste des pièces jointes, la date de dépôt souhaitée, ce que vous attendez en retour (numéro de dépôt, délai annoncé).",
          "Dernière ligne : « Merci de confirmer la réception de 9 pièces jointes ».",
        ],
      },
      {
        title: 'Envoyez et tracez',
        actions: [
          "Mettez en copie Jean-Marc Ilunga.",
          "Doublez par un message court dans le groupe WhatsApp du dossier : « Dossier envoyé par e-mail à 15h00, 9 pièces — merci de confirmer ».",
          "Notez l'heure d'envoi et l'heure de l'accusé dans le journal de coordination.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — e-mail du 10/04 à 15h00',
      lines: [
        "Objet : COD-2026-007 — dossier complet 9 pièces — dépôt lundi 13/04 (vol du 16/04)",
        "Bonjour Josué, vous trouverez en pièces jointes le dossier complet de l'envoi COD-2026-007 : 400 kits KCH-01 et 4 concentrateurs d'oxygène, Nairobi → Goma, vol du 16/04.",
        "Pièces 1 à 9 : voir l'index en page de garde. Le manifeste sera émis au départ du vol et vous parviendra le 16/04.",
        "Merci de déposer le dossier à la douane lundi 13/04, de nous communiquer le numéro de dépôt et le délai annoncé, et de confirmer la réception de 9 pièces jointes. Cordialement, [nom, téléphone]. Copie : J.-M. Ilunga.",
        "Accusé reçu de J. Kalume à 15h20 : « 9 pièces reçues, dépôt lundi 8h30. »",
      ],
    },
    pitfall: "Écrire « je te mets le reste demain » dans le même message. Un paquet envoyé en deux fois est un paquet dont personne ne sait lequel est le bon.",
    result: "Livrable 4, partie 1 : un message d'envoi unique et un accusé de réception horodaté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 4',
    title: "Obtenir la preuve du dépôt : numéro, date et délai annoncé",
    intro: "Lundi 13 avril. Tant que vous n'avez pas un numéro de dépôt et une date, le dossier n'est pas déposé : il est « envoyé au transitaire ». Vous enregistrez cette preuve dans le dossier et dans la checklist.",
    steps: [
      {
        title: 'Collectez la preuve',
        actions: [
          "Demandez au transitaire une copie du récépissé de dépôt (photo lisible ou PDF).",
          "Relevez : numéro de dépôt, date et heure, nom de l'agent qui a reçu le dossier, délai de traitement annoncé.",
          "Enregistrez le récépissé dans le dossier et ajoutez la date de dépôt dans le journal de coordination.",
        ],
      },
      {
        title: 'Mettez à jour votre suivi',
        actions: [
          "Dans la checklist, mettez à jour la colonne H avec le nom de l'agent qui traite chaque demande, si connu.",
          "Calendrez la première relance à J+1 du délai annoncé.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — message de TGL du 13/04 à 11h40',
      lines: [
        "« Dossier COD-2026-007 déposé ce jour à 11h20 au bureau de l'aéroport. N° de dépôt D-2026-0731, reçu par l'agent référent désigné vendredi par le chef de bureau. Traitement annoncé : 3 jours ouvrés après dépôt complet ; les autorisations de la Santé suivent leur propre circuit. Récépissé en pièce jointe. »",
        "Journal de coordination, 13/04 11h45 : dépôt D-2026-0731 ; relance prévue le mercredi 15/04 à 8h30.",
      ],
    },
    result: "Le dossier est déposé, daté et numéroté. Vous savez qui le traite, quand une réponse est attendue et quand vous relancerez.",
    pitfall: "Considérer « c'est parti chez le transitaire » comme « c'est déposé ». Sans récépissé, le délai de traitement n'a pas commencé et vous ne pouvez pas relancer avec une date.",
  },

  // ───────────── PROCÉDURE 5 — Suivre, relancer, escalader ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 4',
    title: 'Installer la routine quotidienne de mise à jour',
    intro: "Un dossier se perd par l'oubli, pas par la mauvaise volonté. Vous installez une routine de dix minutes, à heure fixe, qui met à jour la checklist, lit l'alerte et alimente le journal.",
    steps: [
      {
        title: 'Chaque jour à 8h30',
        actions: [
          "Ouvrez la dernière version de la checklist et le groupe WhatsApp du dossier.",
          "Pour chaque ligne qui a bougé : mettez à jour F (Statut), G (Date obtenue) et H (Responsable).",
          "Lisez la colonne J : toute ligne en RETARD reçoit un commentaire (promis pour quelle date, par qui).",
          "Envoyez un message de situation de deux lignes à Jean-Marc Ilunga.",
        ],
      },
      {
        title: 'En fin de semaine',
        actions: [
          "Enregistrez une nouvelle version (v02, v03...) et archivez la précédente.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — journal de coordination, 14/04 à 8h40',
      lines: [
        "Reçu de TGL à 8h25 : exonération accordée par la douane pour l'envoi COD-2026-007.",
        "Checklist : F8 = Obtenu ; G8 = 2026-04-14 ; H8 = « J. Kalume (TGL) / Douane ».",
        "Lignes restantes : F9, F10, F11 = En attente ; J9 à J11 : RETARD affiché ; commentaires ajoutés (promis 17/04, 16/04 et 20/04).",
        "Message de situation envoyé à J.-M. Ilunga à 8h50.",
      ],
    },
    tip: "Chaque ligne en RETARD porte un commentaire écrit. Un RETARD sans explication est une alarme que vous avez cessé d'écouter.",
    result: "La checklist reflète l'état réel du dossier chaque matin, avec une explication pour chaque alerte.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 4',
    title: 'Rédiger une relance précise et datée',
    intro: "Une relance efficace cite toujours le numéro de dossier, la date de dépôt et le document précis en attente. Jamais « des nouvelles ? ». Elle pose une question fermée et fixe un délai de réponse.",
    steps: [
      {
        title: 'Rédigez en cinq éléments',
        actions: [
          "Identifiant et référence de dépôt.",
          "Date de dépôt et date promise.",
          "Document précis en attente (ligne de la checklist).",
          "Question fermée : où en est-il, qui le traite, quelle date ferme ?",
          "Délai de réponse que vous demandez, et ce que vous ferez sinon.",
        ],
      },
      {
        title: 'Envoyez par le bon canal',
        actions: [
          "WhatsApp Business pour la rapidité, e-mail pour la trace : envoyez les deux pour toute relance qui peut devenir un litige.",
          "Notez l'heure d'envoi dans le journal de coordination.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — relance à TGL, 15/04 à 8h40',
      lines: [
        "COD-2026-007 — dépôt D-2026-0731 du 13/04. À ce jour manquent :",
        "(1) Autorisation d'importation des kits (Direction de la pharmacie), promise pour le 17/04 ;",
        "(2) Autorisation du ministère de la Santé pour les 4 concentrateurs, promise pour le 20/04 ;",
        "(3) Manifeste de cargaison, attendu au départ du vol du 16/04.",
        "Pouvez-vous confirmer AUJOURD'HUI avant 12h : le nom de l'agent qui traite (1) et (2), et la date ferme de remise ? Sans réponse à midi, j'appelle moi-même la Direction de la pharmacie à 14h. Merci, [nom].",
      ],
    },
    result: "Livrable 5, partie 1 : une relance qui ne laisse aucune ambiguïté sur ce qui manque, depuis quand et ce que vous ferez ensuite.",
    pitfall: "Écrire « des nouvelles du dossier ? ». Le transitaire répond « en cours » et vous n'avez rien appris. Une question fermée avec une heure limite oblige à une réponse précise.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 4',
    title: "Lire l'alerte et décider : relance, escalade légère ou escalade complète",
    intro: "Le tableau de bord passe en « A ESCALADER » dès qu'un document est en RETARD. C'est un signal pour ne pas attendre, pas une obligation d'alerter tout le monde sur tout. Vous qualifiez chaque ligne avant de décider.",
    steps: [
      {
        title: 'Qualifiez chaque ligne en RETARD',
        actions: [
          "Pour chaque ligne : date promise, qui la détient, la date promise est-elle dépassée ?",
          "Est-elle sur le chemin critique de la sortie de douane ?",
          "Appliquez la règle : promesse dépassée = escalade complète ; promesse non dépassée mais chemin critique = escalade légère (information et appui) ; sinon relance précise.",
        ],
      },
    ],
    table: {
      columns: ['Ligne', 'Statut au 15/04', 'Date promise', 'Promesse dépassée ?', 'Chemin critique ?', 'Décision'],
      rows: [
        ["9 — Autorisation d'importation", 'En attente', '17/04', 'Non', 'Non', "Relance précise (envoyée à 8h40) ; contrôle le 16/04"],
        ['10 — Manifeste de cargaison', 'En attente', '16/04 (vol)', 'Non', 'Non', 'Attendu : aucune escalade ; vérifier le départ du vol le 16/04'],
        ['11 — Autorisation ministérielle', 'En attente', '20/04', 'Non', 'OUI (6 jours ouvrés)', 'Escalade légère à J.-M. Ilunga dès le 15/04'],
      ],
    },
    result: "Le statut « A ESCALADER » est traité ligne par ligne : une relance, une attente justifiée, une escalade légère. Rien n'est ignoré, rien n'est surjoué.",
    tip: "Écrivez la raison dans le journal à chaque décision (« pas d'escalade : promesse non dépassée, motif »). Dans une semaine, vous saurez pourquoi vous avez attendu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 4',
    title: "Escalader avec le dossier complet : la note d'escalade",
    intro: "Jeudi 16 avril, 9h00 : l'autorisation du ministère de la Santé n'a pas bougé. Vous escaladez à votre coordination avec le dossier et le registre des relances déjà effectuées. Une escalade à mains vides (« ça bloque ») prend plus de temps à résoudre qu'une escalade documentée.",
    steps: [
      {
        title: 'Rédigez la note en six blocs',
        actions: [
          "Décision demandée (en première ligne) : qui doit faire quoi, avant quand.",
          "Références : identifiant, numéro de dépôt, autorité, agent connu.",
          "Chronologie datée : dépôt, relances, réponses (3 à 5 lignes).",
          "Impact et échéance : stock, date de rupture, date limite de sortie de douane.",
          "Options proposées : au moins deux, dont une libération partielle des articles non concernés et une demande de traitement accéléré.",
          "Pièces jointes : checklist à jour, récépissé, copies des relances.",
        ],
      },
      {
        title: 'Choisissez le destinataire',
        actions: [
          "Coordinateur logistique pays et point focal ONG de votre organisation ; en copie, la coordinatrice de projet.",
          "Pour demander un traitement accéléré, la demande vient en général d'un responsable de niveau pays, avec une lettre d'urgence motivée (échéance médicale, stock).",
        ],
      },
    ],
    example: {
      title: "Fil rouge — note d'escalade du 16/04 à 9h15",
      lines: [
        "Objet : COD-2026-007 — autorisation concentrateurs — décision demandée avant vendredi 17/04 midi",
        "1. Décision demandée : lettre d'urgence du directeur pays au ministère de la Santé ; demande à la douane de libérer les kits sans attendre les concentrateurs.",
        "2. Références : dépôt D-2026-0731 du 13/04 ; autorisation « ministère de la Santé, direction des équipements » ; relances des 15/04 (8h40) et 16/04 (8h30).",
        "3. Chronologie : 10/04 envoi ; 13/04 dépôt ; 14/04 exonération accordée ; 16/04 vol arrivé à Goma à 11h00 ; autorisation toujours en attente.",
        "4. Impact : rupture de kits estimée le 28/04 ; sortie de douane requise avant le 23/04 pour le convoi du 27/04.",
        "5. Options : A libération partielle des 400 kits (autorisation d'importation obtenue ce matin) ; B maintien des concentrateurs sous douane jusqu'à l'autorisation ; C prêt de 2 concentrateurs par le cluster santé en dépannage.",
        "6. Pièces jointes : checklist v03 du 16/04, récépissé D-2026-0731, relances.",
      ],
    },
    result: "Livrable 5 terminé : relances datées, qualification des alertes et note d'escalade appuyée sur un dossier complet.",
    pitfall: "Escalader par un message oral ou un « ça bloque, aidez-moi ». Sans dossier, votre coordinatrice doit tout reconstituer avant de pouvoir agir, et chaque heure compte.",
  },

  // ───────────── PROCÉDURE 6 — Relations avec les autorités (registre) ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 6',
    title: "Cartographier les autorités du couloir : civiles d'un côté, sécurité de l'autre",
    intro: "Vous ne pouvez pas construire une relation avec une autorité que vous n'avez pas identifiée. Avant de contacter qui que ce soit, vous listez toutes les autorités que votre envoi va croiser, et vous les classez selon leur logique : civile (textes, pièces) ou sécurité (ordres, relation de confiance).",
    steps: [
      {
        title: 'Listez le couloir, de la frontière au point de distribution',
        actions: [
          "Reprenez l'itinéraire de l'envoi : arrivée, douane, ministères concernés, route, checkpoints, zone de santé de destination.",
          "Pour chaque étape : l'autorité, ce qu'elle décide ou contrôle, le contact connu à ce jour.",
          "Classez : autorité civile ou autorité militaire / de sécurité. Ne mélangez jamais les deux dans la même démarche.",
        ],
      },
    ],
    table: {
      columns: ['Autorité', 'Logique', "Ce qu'elle décide ou contrôle", 'Contact connu au 07/04'],
      rows: [
        ["Bureau de douane de l'aéroport de Goma", 'Civile', 'Mainlevée, exonération par envoi', 'Nouveau chef de bureau (nom à confirmer)'],
        ["Direction de la pharmacie, ministère de la Santé", 'Civile', "Autorisation d'importation des médicaments", 'Mme Sylvie Nsimba, cheffe de division (fictive)'],
        ["Ministère de la Santé, direction des équipements", 'Civile', 'Autorisation des dispositifs médicaux', 'Aucun nom connu : passe par TGL'],
        ['BCZ de Lukando', 'Civile (santé locale)', 'Situation sanitaire, leaders communautaires', 'Médecin chef de zone'],
        ['Barrière de police de Kabati (km 48)', 'Sécurité', 'Contrôle routier', 'Aucun'],
        ['Check-point de Bweza (km 118)', "Sécurité (acteur armé local selon l'alerte du 08/03)", 'Passage des véhicules', 'Aucun : accès traité avec la coordination et le Module 07'],
      ],
    },
    result: "Une cartographie des autorités du couloir, avec la logique de chacune et ce qu'on ne sait pas encore.",
    pitfall: "Présenter un dossier douanier à un poste militaire, ou tenter de faire lever un checkpoint avec un argumentaire purement administratif. Ce sont deux erreurs symétriques qui fragilisent votre crédibilité des deux côtés.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 6',
    title: 'Préparer la première prise de contact : une visite de présentation',
    intro: "La relation avec une autorité se construit avant d'en avoir besoin. Vendredi 10 avril, vous rendez visite au nouveau chef de bureau de la douane de l'aéroport de Goma, avec le transitaire. Vous ne demandez pas un traitement de faveur : vous vous présentez et vous comprenez comment il préfère recevoir vos dossiers.",
    steps: [
      {
        title: 'Demandez le rendez-vous',
        actions: [
          "Envoyez une lettre de demande d'audience d'une demi-page, signée du directeur pays, avec copie à TGL.",
          "Proposez deux créneaux et précisez la durée (20 minutes).",
        ],
      },
      {
        title: 'Préparez le dossier de présentation',
        actions: [
          "Lettre de présentation d'une page : mandat de l'organisation, activités en RDC, coordonnées.",
          "Copie certifiée de l'accord de siège et du certificat d'exonération.",
          "Liste des envois prévus sur les 60 prochains jours.",
          "Trois questions écrites : procédure préférée de dépôt d'un dossier complet ? délai indicatif ? agent référent et horaires ?",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — préparation de la visite du 10/04 à 14h30',
      lines: [
        "Lettre de demande d'audience envoyée le 08/04 à 15h00 ; rendez-vous confirmé par le secrétariat le 09/04 à 10h00.",
        "Dossier : lettre de présentation, copie certifiée du certificat CE-2025-0417, liste des envois : COD-2026-007 (arrivée 16/04), prochain envoi de vaccins en mai.",
        "Questions : 1) comment préférez-vous recevoir un dossier complet ? 2) quel délai indicatif ? 3) pouvons-nous avoir un agent référent ?",
        "Règles : aucun cadeau, aucune demande de traitement de faveur, TGL présent.",
      ],
    },
    pitfall: "Offrir un cadeau ou une « attention » à la visite. C'est contraire à la politique de tolérance zéro des bailleurs, et cela détruit votre crédibilité auprès d'un interlocuteur qui connaît les règles.",
    result: "Une visite préparée en 48 heures : audience confirmée, dossier de présentation prêt, trois questions écrites.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 6',
    title: 'Mener la visite : 20 minutes, posture civile, engagements reformulés',
    intro: "Une visite de présentation à une autorité civile se mène avec des pièces et des textes, dans une posture technique et courtoise. Vous reformulez à voix haute les engagements pris de part et d'autre avant de partir : c'est ce qui les rend exploitables.",
    steps: [
      {
        title: 'Dans le bureau',
        actions: [
          "Minute 0 à 2 : présentez-vous, nommez l'organisation et le but de la visite.",
          "Minute 2 à 7 : présentez le mandat, remettez la copie du certificat et annoncez l'envoi à venir.",
          "Minute 7 à 14 : posez vos trois questions ; écrivez les réponses devant lui.",
          "Minute 14 à 18 : reformulez les engagements (« Nous déposerons le dossier complet lundi ; vous désignez un agent référent et confirmez 3 jours ouvrés ») et attendez son accord.",
          "Minute 18 à 20 : remerciez, laissez vos coordonnées et notez le nom exact et la fonction.",
        ],
      },
      {
        title: 'Dans les 15 minutes qui suivent',
        actions: [
          "Asseyez-vous dans la voiture et complétez vos notes avant de démarrer : citations, chiffres, engagements.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — phrases utiles, visite du 10/04',
      lines: [
        "Ouverture : « Monsieur le Chef de bureau, nous venons nous présenter à votre prise de fonction. Nous ne venons pas vous demander de traiter un dossier hors procédure, mais comprendre comment vous préférez recevoir nos dossiers. »",
        "Annonce : « Un envoi médical (400 kits de traitement du choléra et 4 concentrateurs d'oxygène) arrive le 16 avril ; notre dossier sera déposé lundi. »",
        "Reformulation : « Pour être sûrs d'avoir bien compris : un agent référent est désigné, le délai indicatif est de 3 jours ouvrés pour un dossier complet, et nous vous informons de chaque envoi cinq jours avant son arrivée. »",
        "Fermeture : « Nous vous confirmerons ces points par écrit ce soir. Merci de nous avoir reçus. »",
      ],
    },
    pitfall: "Transformer la visite en plaidoyer pour un dossier précis. Une première visite sert à comprendre la procédure et à être identifié ; demander un favori dès la première rencontre fragilise la relation.",
    result: "Une visite menée en 20 minutes, des engagements reformulés et acceptés, des notes complètes prises à chaud.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 4 sur 6',
    title: 'Registre des relations (1/2) — colonnes Date, Autorité / Entité, Contact',
    intro: "Le fichier registre-relations-autorites.docx contient un journal des interactions à six colonnes : Date, Autorité / Entité, Contact (nom, fonction), Nature de l'interaction, Engagements pris (nous / eux), Suivi nécessaire. La première ligne est un exemple ; une ligne = une interaction. Vous le remplissez dès la sortie de l'entretien, pas en fin de semaine.",
    steps: [
      {
        title: 'Quand ouvrir une ligne',
        actions: [
          "Après tout échange substantiel : première prise de contact, négociation d'accès, engagement pris de part et d'autre, ou changement de responsable identifié.",
          "Ouvrez le fichier et enregistrez-le sous 2026-04-10_Registre-relations-autorites_Goma.docx.",
        ],
      },
      {
        title: 'Remplissez les trois premières colonnes',
        actions: [
          "Date : au format JJ/MM/AAAA, comme dans la ligne d'exemple (12/03/2026), la date de l'échange et non celle de la saisie.",
          "Autorité / Entité : le service exact (« Douane — poste frontière de Sido » dans l'exemple), jamais seulement « la douane ».",
          "Contact (nom, fonction) : prénom ou initiale, nom, grade ou fonction exacts, y compris pour un nouveau chef de poste.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Autorité / Entité', 'Contact (nom, fonction)'],
      rows: [
        ['10/04/2026', "Douane — bureau de l'aéroport de Goma", "M. Désiré Mulumba, chef de bureau (en poste depuis le 01/04/2026)"],
        ['10/04/2026', "Douane — bureau de l'aéroport de Goma", "Agent référent pour les dossiers humanitaires (nom à confirmer par écrit)"],
      ],
    },
    tip: "Notez la fonction exacte et la date d'arrivée en poste. Quand un responsable change, vous retrouvez en une ligne qui était là avant lui et ce qui avait été promis.",
    pitfall: "Écrire « la douane, un monsieur ». Dans six mois, personne ne saura qui c'était, ni quel service, ni quand.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 5 sur 6',
    title: 'Registre des relations (2/2) — colonnes Nature, Engagements (nous / eux), Suivi',
    intro: "Les trois dernières colonnes font la valeur du registre. Une nature précise, des engagements séparés « nous » et « eux », et un suivi qui a une action, une personne et une date.",
    steps: [
      {
        title: "Colonne « Nature de l'interaction »",
        actions: [
          "Écrivez le cadre (visite de présentation, appel, réunion, passage de checkpoint) et ce qui a été présenté ou discuté, en deux phrases.",
        ],
      },
      {
        title: "Colonne « Engagements pris (nous / eux) »",
        actions: [
          "Écrivez « Nous : » puis chaque engagement avec sa date ; « Eux : » puis chaque engagement avec sa date.",
          "Citez les chiffres exacts (« 3 jours ouvrés à compter du dépôt complet »).",
        ],
      },
      {
        title: "Colonne « Suivi nécessaire »",
        actions: [
          "Une action concrète, qui la fait, avant quand : confirmation écrite, rappel avant le prochain envoi, mise à jour d'un autre fichier.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — ligne complète du registre, 10/04/2026',
      lines: [
        "Date : 10/04/2026 | Autorité / Entité : Douane — bureau de l'aéroport de Goma | Contact : M. Désiré Mulumba, chef de bureau (en poste depuis le 01/04/2026)",
        "Nature : Visite de présentation à la prise de fonction du nouveau chef de bureau ; présentation du mandat de Kemora Santé et de l'accord d'exonération ; remise d'une copie certifiée du certificat CE-2025-0417 ; annonce de l'envoi COD-2026-007 (400 kits, 4 concentrateurs, arrivée le 16/04).",
        "Engagements : Nous : déposer le dossier complet le lundi 13/04 via TGL ; informer le bureau de tout envoi au moins 5 jours avant son arrivée. Eux : désigner un agent référent pour les dossiers humanitaires ; confirmer un délai indicatif de 3 jours ouvrés pour un dossier complet ; enregistrer la copie du certificat.",
        "Suivi : Confirmer par e-mail le délai et le nom de l'agent référent avant le 11/04 (fait le 10/04 à 17h05) ; reprendre contact après la mainlevée du COD-2026-007 pour un point de bilan ; ajouter le chef de bureau à la cartographie des autorités.",
      ],
    },
    result: "Livrable 6, partie 1 : une ligne de registre complète, utilisable par n'importe quel successeur sans vous téléphoner.",
    pitfall: "Écrire seulement « bon contact, il va nous aider ». Sans engagement chiffré ni date, la ligne ne vous sert à rien le jour où le délai annoncé n'est pas tenu.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 6 sur 6',
    title: 'Entretenir la relation et la transmettre : confirmation écrite, bilan, successeur',
    intro: "Une relation se construit sur la durée et se perd à chaque rotation de personnel. Vous confirmez par écrit le jour même, vous planifiez un bilan après le premier dossier, et vous transmettez le registre à votre successeur. Le registre ne repart jamais de zéro.",
    steps: [
      {
        title: 'Confirmez par écrit le jour même',
        actions: [
          "Envoyez un e-mail court qui reprend les engagements et remercie, avec le transitaire en copie.",
        ],
      },
      {
        title: 'Entretenez',
        actions: [
          "Planifiez un point de bilan court après la mainlevée du premier dossier.",
          "Informez l'autorité de chaque envoi cinq jours avant son arrivée, comme promis.",
          "Mettez à jour le registre à chaque changement de responsable ou de procédure.",
        ],
      },
      {
        title: 'Transmettez',
        actions: [
          "À votre départ : remettez le registre, la cartographie des autorités et la fiche périmètre à votre successeur, avec une présentation commune aux interlocuteurs clés.",
          "Protégez le fichier : il contient des noms et des coordonnées ; partagez-le en interne uniquement.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — e-mail du 10/04 à 17h05',
      lines: [
        "Objet : Confirmation de notre rencontre du 10/04 — Kemora Santé / bureau de douane de l'aéroport de Goma",
        "Monsieur le Chef de bureau, merci de nous avoir reçus. Nous confirmons : dépôt de notre dossier complet COD-2026-007 le lundi 13/04 ; désignation d'un agent référent pour les dossiers humanitaires ; délai indicatif de 3 jours ouvrés après dépôt complet ; enregistrement de la copie du certificat CE-2025-0417.",
        "Nous vous informerons de nos envois cinq jours avant leur arrivée. Merci de nous indiquer le nom de l'agent référent. Cordialement, [nom, fonction]. Copie : J. Kalume (TGL).",
      ],
    },
    result: "Livrable 6 terminé : ligne de registre complète, confirmation écrite envoyée et plan de suivi.",
    tip: "Quand un responsable est muté, ne repartez pas de zéro : relisez les lignes du registre, présentez-vous au remplaçant avec le même dossier de présentation, et enregistrez une nouvelle ligne.",
  },

  // ───────────── PROCÉDURE 7 — Passer un checkpoint ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 1 sur 5',
    title: 'Préparer le convoi : pièces à bord, charge vérifiée, notification de mouvement',
    intro: "Un checkpoint se gagne avant le départ. Lundi 27 avril, deux camions de 6 t quitteront Goma pour Bweza avec les kits et les concentrateurs dédouanés. Vous préparez les pièces, vous vérifiez la charge et vous déclarez le mouvement.",
    steps: [
      {
        title: 'Constituez la pochette de pièces',
        actions: [
          "Imprimez trois exemplaires par camion et placez-les dans une pochette plastique : chacun en cabine, un en copie dans le véhicule léger de tête.",
          "Prenez aussi des photos de chaque pièce sur le téléphone du chef de convoi.",
          "Faites vérifier que l'emblème de l'organisation est visible et que rien de contradictoire n'est affiché dans les cabines.",
        ],
      },
      {
        title: 'Vérifiez la charge et déclarez le mouvement',
        actions: [
          "Recalculez le poids total en charge de chaque camion face à la limite la plus basse de l'itinéraire (pont de la Musi : 12 t).",
          "Transmettez la notification de mouvement par le mécanisme en place dans le pays (souvent la coordination civilo-militaire d'OCHA), au plus tard le vendredi 24/04.",
        ],
      },
    ],
    table: {
      columns: ['Pièce à bord', "Ce qu'elle prouve", 'Qui la prépare'],
      rows: [
        ['Lettre de voiture (1 par camion)', 'Expéditeur, destinataire, contenu, itinéraire', 'Magasinier de Goma'],
        ['Liste de colisage v2', 'Le contenu réel correspond au dossier', 'Logisticien terrain'],
        ['Copie de la mainlevée de douane', 'La marchandise est dédouanée', 'TGL puis logisticien'],
        ["Copie du certificat d'exonération CE-2025-0417", "Le statut de l'organisation", 'Logisticien terrain'],
        ['Lettre de mission du chauffeur et copie du permis', "L'identité et l'autorité du conducteur", 'Responsable flotte'],
        ['Copie de la notification de mouvement', 'Le convoi est connu des coordinations', 'Logisticien terrain'],
        ['Fiche de consignes chauffeur (1 page)', 'La réponse à donner à chaque demande', 'Logisticien terrain'],
      ],
    },
    example: {
      title: 'Fil rouge — vérification de charge du convoi du 27/04',
      lines: [
        "Charge : 400 × 14 kg + 4 × 18 kg = 5 672 kg ; avec marge de 5 % : ≈ 5 956 kg, soit 2 978 kg par camion.",
        "Poids total en charge d'un camion de 6 t (poids à vide 4,5 t) : 4,5 + 2,98 = 7,48 t < 12 t (pont de la Musi) : OK.",
        "Notification de mouvement envoyée le 24/04 à 10h00 ; copie archivée dans 02_Douane/COD-2026-007.",
      ],
    },
    result: "Les sept pièces sont en pochette, la charge est vérifiée contre la limite du pont, le mouvement est déclaré.",
    pitfall: "Partir « parce qu'on connaît la route ». Un contrôle sans lettre de voiture ni liste de colisage cohérente se transforme en immobilisation, et le chauffeur improvise.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 2 sur 5',
    title: 'Briefer les chauffeurs : un script, une seule voix, cinq interdits',
    intro: "Le checkpoint est un moment de pression pour le chauffeur. Vous lui donnez un script court à répéter, vous désignez UNE personne qui parle, et vous lui donnez par écrit ce qu'il n'a jamais le droit de faire.",
    steps: [
      {
        title: 'Écrivez la fiche de consignes (une page)',
        actions: [
          "Désignez le chef de convoi comme seule personne qui parle aux autorités.",
          "Écrivez le script d'approche (3 phrases).",
          "Écrivez la phrase de refus (2 phrases) et la phrase d'appel à la base.",
          "Écrivez les cinq interdits et les critères de demi-tour.",
        ],
      },
      {
        title: 'Briefez la veille du départ',
        actions: [
          "Faites répéter le script à voix haute par chaque chauffeur.",
          "Remettez la fiche en main propre et faites-la signer.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche de consignes des chauffeurs, 26/04',
      lines: [
        "Script d'approche : « Bonjour. Nous sommes un convoi de Kemora Santé, du matériel médical pour l'unité de traitement du choléra de Bweza. Voici la lettre de voiture et la liste de colisage. »",
        "Phrase de refus : « Je n'ai pas l'autorisation de payer ni de transporter autre chose que ce matériel. Je peux appeler mon responsable pour vous parler. »",
        "Cinq interdits : 1 aucun paiement ; 2 aucun passager ; 3 aucune marchandise tierce ; 4 aucune photo d'un poste de contrôle ou de ses occupants ; 5 aucune promesse au nom de l'organisation.",
        "Contact base : toutes les 2 heures et à chaque checkpoint. Blocage : arrêt, appel à la base, attente des instructions. Demi-tour : tirs signalés, menace, exigence persistante (décision avec la coordination, Module 07).",
      ],
    },
    result: "Chaque chauffeur connaît son script, sait qui parle, a signé les cinq interdits.",
    tip: "Faites jouer la scène deux minutes la veille : le chef de convoi dit le script, vous jouez l'agent qui exige un paiement. Un chauffeur qui a déjà prononcé la phrase de refus la dit plus calmement le jour J.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 3 sur 5',
    title: "À l'arrivée au checkpoint : trois règles et une séquence en six temps",
    intro: "Le jour du convoi, le chef de convoi applique une séquence identique à chaque poste de contrôle. Le calme et la constance comptent plus que n'importe quel argument.",
    steps: [
      {
        title: 'Séquence à chaque poste',
        actions: [
          "1. Ralentissez à distance, arrêtez-vous à l'endroit indiqué, gardez les mains visibles.",
          "2. Le chef de convoi descend avec la pochette ; les autres restent en cabine.",
          "3. Saluez, présentez-vous et récitez le script d'approche.",
          "4. Présentez les documents, répondez uniquement aux questions posées, restez factuel.",
          "5. Attendez l'autorisation explicite avant de repartir.",
          "6. Notez l'heure, le lieu, la durée et ce qui a été demandé avant de reprendre la route.",
        ],
      },
      {
        title: 'Trois règles constantes',
        actions: [
          "Jamais d'élévation de ton, jamais de menace, même polie.",
          "Jamais de photo d'un poste ou de ses occupants.",
          "Jamais de promesse que vous ne pouvez pas tenir au nom de l'organisation.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — passage de la barrière de Kabati (km 48), 27/04 à 07h55',
      lines: [
        "Chef de convoi : « Bonjour. Nous sommes un convoi de Kemora Santé, du matériel médical pour l'unité de traitement du choléra de Bweza. Voici la lettre de voiture et la liste de colisage. »",
        "Agent : « Ouvrez le camion. »",
        "Chef de convoi : « Je vous montre le contenu : 200 kits par camion, voici la liste. » (ouverture d'une porte, contrôle visuel de 3 minutes)",
        "Agent : « C'est bon, vous pouvez y aller. » — Durée totale : 6 minutes ; aucune demande d'argent ; notée sur la fiche.",
      ],
    },
    pitfall: "Chercher à « avoir le dernier mot » ou à expliquer longuement l'accord d'exonération à un agent de contrôle routier. Une fois les documents présentés, l'échange doit rester court et factuel.",
    result: "Une séquence identique à chaque poste, appliquée par une seule personne, sans improvisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 4 sur 5',
    title: 'Face à une demande irrégulière : refuser, appeler, ne jamais payer',
    intro: "Le plus souvent, le contrôle se passe sans demande. Quand elle survient, la réponse est écrite à l'avance : le chauffeur applique la consigne, il n'arbitre pas. Rappelez-vous que toute demande de prélèvement doit reposer sur un texte et donner lieu à un reçu officiel ; sinon, c'est une demande irrégulière.",
    steps: [
      {
        title: 'Appliquez la réponse prévue',
        actions: [
          "Dites la phrase de refus, calmement, une seule fois, puis proposez d'appeler le responsable.",
          "Appelez la base (le logisticien) ; passez le téléphone à l'agent si lui-même le demande.",
          "Attendez les instructions : le logisticien appelle la coordination et le point focal sécurité si le blocage dépasse une heure.",
        ],
      },
    ],
    table: {
      columns: ['Situation', 'Réponse du chef de convoi', 'Qui il appelle'],
      rows: [
        ['Demande de paiement sans reçu officiel', 'Phrase de refus ; aucun paiement', "Le logisticien terrain, qui parle à l'agent s'il le demande"],
        ['Demande de transporter des passagers', "« Je n'ai pas l'autorisation de prendre des passagers. »", 'Le logisticien terrain'],
        ['Demande de transporter des caisses ou du matériel', 'Refus ; aucun chargement, même « exceptionnel »', 'Le logisticien et la coordination (neutralité)'],
        ["Demande d'inspecter tout le chargement", "Accepter de montrer le contenu à l'aide de la liste de colisage ; aucun déchargement complet sans accord de la base", 'Le logisticien terrain'],
        ['« Revenez demain » sans motif', 'Demander le nom de la personne et le motif par écrit ; rester courtois', 'Le logisticien, puis la coordination'],
        ['Menace, tirs, exigence persistante', "Ne pas discuter ; critères de demi-tour (décision avec la coordination)", 'Le point focal sécurité (Module 07)'],
      ],
    },
    pitfall: "Accepter « exceptionnellement » de transporter 3 caisses ou de laisser un agent monter en cabine. Un seul écart connu peut faire perdre l'accès à toute une zone pour votre organisation, et parfois pour tout le secteur.",
    result: "Une réponse prête pour chaque demande type, appliquée sans improvisation.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 7 — Étape 5 sur 5',
    title: 'Après le passage : fiche check-point, remontée et mise à jour du registre',
    intro: "Un passage sans trace est un passage perdu. Le soir même, le chef de convoi remplit une fiche courte ; vous la lisez, vous faites remonter ce qui doit l'être et vous alimentez le registre des relations.",
    steps: [
      {
        title: 'Faites remplir la fiche check-point',
        actions: [
          "Champs : date, heure, lieu et kilomètre, description de l'autorité (uniforme, grade connu), durée, demandes reçues, réponse donnée, issue.",
          "Collectez-la dans les 12 heures.",
        ],
      },
      {
        title: 'Exploitez-la',
        actions: [
          "Reportez les demandes inhabituelles à votre coordination et au point focal sécurité.",
          "Partagez l'information avec le Logistics Cluster (alerte d'accès) si elle intéresse les autres acteurs.",
          "Si l'échange est substantiel, ouvrez une ligne dans le registre des relations.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — fiche check-point de Bweza (km 118), 27/04',
      lines: [
        "Date et heure : 27/04/2026, 12h45 ; durée : 25 minutes.",
        "Autorité : deux hommes en tenue, un responsable qui se présente comme « le chef du poste » ; aucun nom communiqué.",
        "Demande : un agent réclame 20 USD de « frais de passage » ; le chef de convoi répond par la phrase de refus et appelle la base.",
        "Issue : à 12h55, le logisticien parle au responsable du poste (contact établi en mars via le BCZ) et rappelle la nature de la cargaison ; passage autorisé à 13h10, sans paiement.",
        "Remontée : fiche transmise à la coordination et au point focal sécurité le 27/04 à 17h00 ; alerte partagée au Logistics Cluster ; ligne ajoutée au registre.",
      ],
    },
    result: "Livrable 7 terminé : un script, une fiche de consignes, une fiche check-point et la remontée faite. La prochaine équipe saura à quoi s'attendre à Bweza.",
    tip: "Une même demande d'argent signalée par plusieurs convois est un signal pour la coordination : c'est elle qui peut l'adresser aux autorités compétentes, pas vous seul au bord de la route.",
  },

  // ───────────── PROCÉDURE 8 — Litiges et réclamations ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 1 sur 6',
    title: "Qualifier le problème : de quoi s'agit-il, qui décide, quel est l'enjeu, quel est le délai",
    intro: "Vendredi 17 avril, 10h15. Les kits sont prêts à sortir, mais l'inspecteur refuse l'exonération des 4 concentrateurs : « Ce ne sont pas des équipements médicaux de l'annexe. » Avant de réagir, vous qualifiez le problème en quatre questions.",
    steps: [
      {
        title: 'Posez les quatre questions',
        actions: [
          "De quoi s'agit-il : document incohérent, autorisation manquante, contestation du périmètre, retard sans motif, frais de magasinage, dommage ou manque ?",
          "Qui décide, et à quel niveau (agent, chef de bureau, direction régionale) ?",
          "Quel est l'enjeu : en dollars, en jours, en stock, en précédent ?",
          "Quel est le délai : de recours, de réclamation, de rupture de stock ?",
        ],
      },
      {
        title: 'Demandez la décision par écrit',
        actions: [
          "Demandez immédiatement la notification écrite et motivée de la décision, avec les voies et délais de recours.",
          "Ne contestez jamais oralement : vous perdriez la date et le motif.",
        ],
      },
    ],
    table: {
      columns: ['Question', 'Réponse pour le litige L1 (17/04)'],
      rows: [
        ["De quoi s'agit-il ?", "Contestation du périmètre de l'exonération : l'inspecteur estime que les concentrateurs ne sont pas du matériel médical de l'annexe 2"],
        ['Qui décide ?', "L'inspecteur a pris la décision ; le chef de bureau (M. Mulumba) peut la réexaminer ; en dernier ressort la direction régionale"],
        ['Enjeu', "Valeur 4 × 640 = 2 560 USD ; droits et taxes réclamés estimés à 31 %, soit environ 794 USD (taux d'exemple) ; délai de sortie ; précédent pour les prochains envois"],
        ['Délai', "Sortie requise avant le 23/04 ; délai de recours à demander par écrit dès aujourd'hui"],
      ],
    },
    result: "Le litige est qualifié, daté et chiffré ; la notification écrite est demandée à 10h40.",
    pitfall: "Discuter longuement avec l'inspecteur au comptoir. Vous risquez d'avoir tort de forme (pas de trace écrite) même si vous avez raison sur le fond.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 2 sur 6',
    title: 'Constituer le dossier de preuve : chronologie et pièces',
    intro: "Un litige se gagne avec des faits datés et des textes. Vous rassemblez en une heure : la chronologie, les extraits de textes, les pièces techniques. Le dossier doit pouvoir être lu en dix minutes par quelqu'un qui n'a pas suivi l'affaire.",
    steps: [
      {
        title: 'Rassemblez',
        actions: [
          "Chronologie : une ligne par fait (date, heure, personne, source).",
          "Textes : l'article de l'accord et la ligne de l'annexe qui fondent votre position, avec le numéro de page.",
          "Pièces techniques : fiche technique du fabricant, certificat de conformité, demande d'autorisation au ministère de la Santé.",
          "Registre des relations : la ligne du 10/04 qui consigne l'engagement du bureau de désigner un agent référent.",
        ],
      },
    ],
    table: {
      columns: ['Date et heure', 'Fait', 'Source'],
      rows: [
        ['13/04 11h20', 'Dépôt du dossier complet, n° D-2026-0731', 'Récépissé TGL'],
        ['14/04', "Exonération accordée pour l'envoi, sous réserve de vérification physique", 'Décision de la douane via TGL'],
        ['16/04 11h00', 'Arrivée du vol à Goma', 'Manifeste de cargaison'],
        ['17/04 10h15', "L'inspecteur refuse l'exonération des 4 concentrateurs (HS 9019.20)", 'Message de J. Kalume, 10h20'],
        ['17/04 10h40', 'Décision écrite demandée', 'Demande déposée par TGL'],
        ['—', "Annexe 2, ligne 14 : « équipements d'oxygénothérapie » couverts par la franchise", 'Accord de siège du 14/06/2023, annexe 2'],
      ],
    },
    result: "Un dossier de preuve d'une page, avec chronologie, textes et pièces techniques, prêt à être joint au courrier.",
    tip: "Écrivez la chronologie sans adjectif ni jugement : « l'inspecteur a déclaré », « nous avons demandé ». Un dossier factuel convainc plus qu'un dossier indigné.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 3 sur 6',
    title: 'Écrire le courrier de contestation (recours gracieux)',
    intro: "Le recours gracieux est une demande écrite adressée à l'autorité qui a pris la décision (ou à son supérieur direct) pour qu'elle la réexamine. Il doit être court, factuel, sourcé et dater la demande de réponse.",
    steps: [
      {
        title: 'Structurez en cinq paragraphes',
        actions: [
          "Objet : « Recours gracieux — [envoi] — [déclaration] — [décision contestée] ».",
          "Rappel des faits (trois lignes, datées).",
          "Fondement : article et ligne de l'annexe, fiche technique.",
          "Demande précise : réexamen et mainlevée avant telle date ; à défaut, décision motivée écrite et voies de recours.",
          "Pièces jointes : listées.",
        ],
      },
      {
        title: 'Envoyez et tracez',
        actions: [
          "Envoyez par e-mail avec accusé de réception et déposez une copie papier signée du directeur pays, contre décharge, par TGL.",
          "Notez l'envoi dans le journal de coordination et dans la note de cellule de la ligne 11 de la checklist.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — courrier du 17/04 à 15h00',
      lines: [
        "Objet : Recours gracieux — envoi COD-2026-007 — déclaration D-2026-0731 — refus d'exonération des 4 concentrateurs d'oxygène",
        "Monsieur le Chef de bureau, Kemora Santé conteste la décision rapportée le 17/04/2026 à 10h15 refusant l'exonération des 4 concentrateurs d'oxygène (code HS 9019.20) de l'envoi COD-2026-007, au motif qu'ils ne seraient pas du matériel médical.",
        "Nous fondons notre demande sur l'annexe 2 (ligne 14, « équipements d'oxygénothérapie ») de l'accord de siège du 14/06/2023 et sur la fiche technique du fabricant (dispositif médical). Une demande d'autorisation a été déposée au ministère de la Santé le 13/04.",
        "Nous demandons le réexamen de cette décision et la mainlevée avant le mardi 21/04 à 17h00 ; à défaut, la notification écrite et motivée de la décision, avec les voies et délais de recours.",
        "Pièces jointes : extrait de l'annexe 2, fiche technique, copie de la demande d'autorisation, récépissé D-2026-0731. Cordialement, [nom, fonction du directeur pays]. Copie : TGL, J.-M. Ilunga.",
      ],
    },
    result: "Livrable 8, partie 1 : un courrier de contestation daté, sourcé, avec une demande précise et une échéance.",
    pitfall: "Écrire un courrier long et agressif qui cite tout ce que vous savez sur la douane. Un courrier court, qui demande une décision précise à une date précise, se traite ; un courrier qui accuse se classe.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 4 sur 6',
    title: 'Protéger la marchandise pendant le litige : libération partielle, magasinage, aucun paiement informel',
    intro: "Pendant que le litige se règle, le temps coûte : magasinage, risque de péremption, stock qui baisse. Vous décidez des options à proposer, vous chiffrez chacune, et vous écartez ce qui est interdit.",
    steps: [
      {
        title: 'Comparez les options',
        actions: [
          "Option A — libération partielle : demandez à la douane de libérer les articles non contestés sans attendre.",
          "Option B — attente en entrepôt de douane : chiffrez le magasinage (franchise de stockage, tarif par kilo et par jour).",
          "Option C — mainlevée provisoire contre garantie ou paiement sous réserve : possible seulement si la réglementation locale le permet ET avec l'accord écrit du siège et du bailleur.",
          "Option D — paiement informel : toujours exclu.",
        ],
      },
      {
        title: 'Décidez et tracez',
        actions: [
          "Écrivez la décision, sa justification et son coût dans le journal de coordination.",
          "Faites-la valider par votre coordination avant de l'exécuter.",
        ],
      },
    ],
    table: {
      columns: ['Option', 'Coût estimé', 'Risque', 'Décision'],
      rows: [
        ['A — Libération partielle des 400 kits', '0 USD', "Faible : kits non contestés, autorisation d'importation obtenue le 16/04", 'RETENUE : kits sortis le 17/04 à 16h30'],
        ['B — Attente des concentrateurs en entrepôt de douane', '≈ 29 USD (franchise 48 h, puis 0,10 USD/kg/jour × 72 kg × 4 jours)', 'Retard sur le poste de stabilisation', "RETENUE : jusqu'à décision (échéance 21/04)"],
        ['C — Paiement sous réserve de 794 USD', '794 USD + précédent', "Fort : valide le refus de l'exonération pour les envois suivants", 'ÉCARTÉE sans accord écrit du siège et du bailleur'],
        ['D — Paiement informel', '—', 'Inacceptable : politique de tolérance zéro', 'INTERDITE'],
      ],
    },
    result: "Les 400 kits sont libérés le 17/04 ; les concentrateurs restent sous douane, avec un coût de stockage connu et une échéance de décision.",
    tip: "Ne laissez jamais un article urgent attendre le règlement d'un litige qui ne le concerne pas. Demandez toujours la libération partielle, avec un courrier qui isole clairement les lignes contestées.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 5 sur 6',
    title: 'Réclamation de marchandise : constat contradictoire, réserves, notification dans les délais',
    intro: "Mercredi 22 avril, 15h30 : les concentrateurs, enfin libérés, arrivent à l'entrepôt Kemora de Goma. Le carton du concentrateur n° 3 est écrasé et le boîtier est fissuré. Chaque heure compte : sans réserve écrite à la livraison et notification dans les délais, vous perdez le droit de réclamer.",
    steps: [
      {
        title: 'À la livraison, avant de signer',
        actions: [
          "Contrôlez chaque colis face à la liste de colisage, avant de signer le bon de livraison.",
          "Écrivez les réserves à la main sur le bon de livraison (« 1 colis écrasé, boîtier fissuré, n° 3 »).",
          "Établissez un constat contradictoire signé par le livreur et par vous, avec heure, lieu et description.",
          "Prenez des photos datées de l'emballage et du produit, en gros plan et en plan large.",
        ],
      },
      {
        title: 'Notifiez et réclamez',
        actions: [
          "Notifiez par écrit le transporteur, la manutention et le transitaire dans les délais prévus par le contrat ou la convention applicable (en fret aérien, une plainte écrite pour dommage s'envoie en règle générale dans les 14 jours de la réception : vérifiez le contrat ou la lettre de transport aérienne).",
          "Déclarez le sinistre à l'assureur de votre fret et conservez son numéro de dossier.",
          "Chiffrez la réclamation : valeur de la facture, et frais éventuels de remplacement.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — constat contradictoire et réclamation, 22 et 23/04',
      lines: [
        "Constat n° 2026-04-22-01 — 22/04/2026, 15h40, entrepôt Kemora, Goma : concentrateur n° 3 (carton écrasé, boîtier fissuré, voyant éteint à la mise sous tension) ; 3 autres concentrateurs sans anomalie ; signé par le chauffeur du transitaire et par le logisticien terrain ; 6 photos jointes.",
        "Réserves portées sur le bon de livraison : « 1 colis sur 4 endommagé — voir constat 2026-04-22-01 ».",
        "Réclamation envoyée le 23/04 à 9h00 à la compagnie aérienne, à la manutention de l'aéroport et à TGL : dommage constaté à la livraison ; montant réclamé : 640 USD (valeur facture) ; pièces jointes : constat, photos, facture, liste de colisage, lettre de transport aérienne. Délai de 14 jours : échéance au 06/05, envoi fait au jour 1.",
        "Assureur du fret informé le 23/04 ; numéro de sinistre noté dans le journal.",
      ],
    },
    result: "Livrable 8, partie 2 : un constat contradictoire signé, des réserves écrites et une réclamation envoyée au lendemain de la livraison, dans le délai.",
    pitfall: "Signer le bon de livraison « sous réserve de contrôle » sans écrire la réserve précise, ou constater le dommage trois jours plus tard au déballage. La réclamation devient irrecevable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 8 — Étape 6 sur 6',
    title: "Escalader, suivre jusqu'à la décision et tirer le litige au clair",
    intro: "Un litige ne se classe pas tout seul : il se suit à des dates fixes et il s'escalade selon une échelle connue. Vous documentez chaque niveau, vous sollicitez votre propre hiérarchie avant de toucher aux autorités supérieures, et vous alimentez le registre.",
    steps: [
      {
        title: "Montez l'échelle dans l'ordre",
        actions: [
          "Niveau 1 : l'agent, puis le chef de bureau, avec le courrier de recours et une demande de rendez-vous.",
          "Niveau 2 : la direction régionale ou nationale des douanes, via le point focal ONG et la coordination pays.",
          "Niveau 3 : la coordination humanitaire (OCHA) et le Logistics Cluster, qui recensent les entraves bureaucratiques et d'accès ; le bailleur est informé si l'échéance d'un livrable est touchée.",
        ],
      },
      {
        title: 'Suivez et consignez',
        actions: [
          "Planifiez un point à date fixe dans le journal de coordination.",
          "Après le règlement : ajoutez la décision, la date et la leçon dans la note de cellule de la checklist et dans le registre.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — suivi du litige L1 et issue',
      lines: [
        "17/04 15h00 — recours gracieux envoyé et déposé ; copie à J.-M. Ilunga et au point focal ONG.",
        "20/04 10h00 — rendez-vous avec M. Mulumba (relation établie le 10/04) : il demande l'annexe 2 certifiée ; remise à 11h30.",
        "21/04 16h30 — réponse écrite du bureau : exonération reconnue pour les 4 concentrateurs au titre de la ligne 14 de l'annexe 2 ; autorisation du ministère de la Santé reçue à 14h00.",
        "22/04 09h00 — mainlevée des concentrateurs. Aucun paiement effectué.",
        "Registre des relations : ligne du 20/04 (rendez-vous, engagement du bureau de répondre par écrit sous 48 h, tenu).",
      ],
    },
    result: "Le litige est clos par écrit en 5 jours, sans paiement, sans escalade au niveau 2 : la relation établie le 10/04 a joué son rôle.",
    tip: "Transmettez la leçon à votre coordination : « l'annexe 2, ligne 14, couvre les concentrateurs ; joindre l'extrait certifié à tout dossier futur ». Le prochain dossier évite le litige.",
  },

  // ───────────── PROCÉDURE 9 — Clôturer et capitaliser ─────────────
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 1 sur 3',
    title: 'Clôturer le dossier dans la checklist et consigner la sortie de douane',
    intro: "Un dossier n'est clôturé que quand chaque ligne est à « Obtenu » et que la sortie de douane est consignée avec sa date réelle. Le fichier n'a pas de statut « Clôturé » : vous le consignez autrement, sans modifier sa structure.",
    steps: [
      {
        title: 'Terminez les lignes',
        actions: [
          "Passez les dernières lignes à « Obtenu » : F11 = Obtenu ; G11 = 2026-04-21 (autorisation du ministère de la Santé).",
          "Vérifiez dans le tableau de bord : 7 documents requis, 7 obtenus, 100 %, 0 retard, « Dossier complet ».",
        ],
      },
      {
        title: 'Consignez la sortie de douane',
        actions: [
          "Clic droit sur la cellule A5 > Nouvelle note : « Sortie de douane : kits 17/04 à 16h30 ; concentrateurs 22/04 à 09h00 ; litige L1 clos le 21/04 ; réclamation 2026-04-22-01 ouverte ».",
          "Enregistrez la version finale sous 2026-04-22_Checklist-dedouanement_Goma_v05-cloture.xlsx.",
          "Archivez dans « 02_Douane/COD-2026-007 » le récépissé, les courriers, le constat et la checklist.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état final du dossier COD-2026-007 (22/04)',
      lines: [
        "Tableau de bord : COD-2026-007 | 7 | 7 | 100 % | 0 | Dossier complet.",
        "Dates réelles d'obtention (G5 à G11) : 2026-04-10 ; 2026-04-10 ; 2026-04-10 ; 2026-04-14 ; 2026-04-16 ; 2026-04-16 ; 2026-04-21.",
        "Convoi vers Bweza programmé pour le 27/04 : 3 concentrateurs en service, le 4e en cours de remplacement (réclamation).",
      ],
    },
    result: "Le dossier est complet, archivé, et la date réelle de sortie de douane est consignée.",
    pitfall: "Laisser le dossier « Dossier complet » sans consigner la sortie réelle. Dans trois mois, personne ne saura combien de temps le dédouanement a réellement duré.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 2 sur 3',
    title: 'Comparer le délai prévu au délai réel, étape par étape',
    intro: "Le délai réel est l'information la plus fiable pour affiner vos futurs plannings, bien plus qu'une estimation théorique donnée en formation ou par un collègue d'un autre contexte. Vous le calculez ligne par ligne, dans un tableau personnel (hors checklist).",
    steps: [
      {
        title: 'Construisez le tableau prévu / réel',
        actions: [
          "Colonne « Prévu » : les dates limites de la Procédure 1 (étape 4).",
          "Colonne « Réel » : les dates de la colonne G de la checklist et la date de sortie de douane.",
          "Colonne « Écart » : en jours, positif si en retard sur le prévu.",
          "Calculez aussi la durée totale en jours ouvrés, de l'ouverture à la sortie.",
        ],
      },
    ],
    table: {
      columns: ['Étape', 'Prévu', 'Réel', 'Écart (jours)'],
      rows: [
        ["Demande d'exonération", '15/04', '14/04', '-1'],
        ["Autorisation d'importation (kits)", '17/04', '16/04', '-1'],
        ['Manifeste de cargaison', '16/04', '16/04', '0'],
        ['Autorisation ministérielle (concentrateurs)', '20/04', '21/04', '+1'],
        ['Sortie de douane — kits', '23/04 au plus tard', '17/04', '-6'],
        ['Sortie de douane — concentrateurs', '23/04 au plus tard', '22/04', '-1'],
      ],
    },
    result: "Durée totale en jours ouvrés (ouverture le 07/04) : 8 pour les kits (sortie le 17/04), 11 pour les concentrateurs (sortie le 22/04). Le +1 jour de l'autorisation ministérielle s'explique par un dépôt réalisé le lundi 13/04 au lieu du vendredi 10/04 prévu au planning.",
    tip: "Séparez toujours le délai par type de bien : un article qui exige une autorisation ministérielle n'a pas le même délai qu'un article qui n'en exige pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 9 — Étape 3 sur 3',
    title: 'Capitaliser : tableau des délais, fiche produit, debriefing, transmission',
    intro: "Un seul dossier ne fait pas une règle, mais un tableau alimenté après chaque envoi devient votre meilleur outil de planification. Vous mettez à jour trois outils et vous en parlez à l'équipe.",
    steps: [
      {
        title: 'Mettez à jour vos trois outils',
        actions: [
          "Tableau des délais observés par type de bien : une ligne par type, avec le nombre d'envois et la dernière mise à jour.",
          "Fiche produit : code HS validé, libellé standard, autorisation requise, extrait d'annexe utile.",
          "Fiche périmètre d'exonération : modifications éventuelles (contact, procédure, nouveaux textes).",
        ],
      },
      {
        title: 'Debriefez et transmettez',
        actions: [
          "Organisez 30 minutes avec le transitaire et la logistique pays : ce qui a fonctionné, ce qui a manqué, ce qui change pour le prochain envoi.",
          "Transmettez les trois outils et le registre à votre successeur à votre départ.",
          "Après deux envois avec le même écart, révisez vos délais standards de planification.",
        ],
      },
    ],
    table: {
      columns: ['Type de bien', 'Délai observé (jours ouvrés, ouverture → sortie)', 'Envois mesurés', 'Dernière mise à jour'],
      rows: [
        ["Kits médicaux (autorisation d'importation)", '8', '1', '22/04/2026'],
        ["Dispositifs médicaux (autorisation du ministère de la Santé)", '11', '1', '22/04/2026'],
      ],
    },
    example: {
      title: 'Fil rouge — leçons consignées au debriefing du 23/04',
      lines: [
        "1. Contrôle de concordance avant envoi : 4 écarts évités à la frontière.",
        "2. Visite de présentation du 10/04 : l'agent référent et la réponse écrite sous 48 h ont réglé le litige sans escalade.",
        "3. Séparer les articles à autorisation longue de ceux qui n'en exigent pas : kits sortis en 8 jours ouvrés au lieu de 11.",
        "4. Joindre l'extrait certifié de l'annexe 2 (ligne 14) à tout dossier de dispositifs médicaux.",
      ],
    },
    result: "Livrable 9 terminé : dossier clôturé, tableau prévu / réel, tableau des délais, fiche produit et leçons transmises.",
    pitfall: "Garder les leçons « dans la tête ». Le jour où vous changez de poste, le prochain logisticien repart de zéro et refait les mêmes erreurs.",
  },

  // ───────────── CAS RÉSOLUS ─────────────
  {
    type: 'case-study',
    title: 'Cas résolu — Dossier COD-2026-007 : le raisonnement du 7 au 27 avril',
    scenario: "Commande confirmée le mardi 7 avril 2026, un briefing optimiste de six affirmations non vérifiées, et un convoi à faire partir de Goma le lundi 27 avril. Voici, par grandes périodes, ce qui a été fait, pourquoi, et ce que cela a produit.",
    steps: [
      {
        title: 'J0 — mardi 7 avril : établir le statut avant de commander',
        actions: [
          "9h10 : briefing noté mot pour mot (6 affirmations).",
          "10h30–11h30 : accord, certificat, annexe et procédure rassemblés ; fiche périmètre d'une page rédigée.",
          "14h00 : matrice article par article ; les radios VHF sont retirées de la commande (double usage, licence trop longue).",
          "16h00 : planning à rebours ; chemin critique = autorisation du ministère de la Santé ; dossier COD-2026-007 ouvert dans la checklist.",
        ],
        result: "Livrables 1 et 2 (ouverture) : le statut est connu, un article à risque est écarté, 7 lignes suivies.",
      },
      {
        title: 'J+1 à J+3 — 8 au 10 avril : contrôler, corriger, envoyer, se présenter',
        actions: [
          "08/04 : documents reçus de Nairobi ; certificat non enregistré au bureau de l'aéroport (découverte).",
          "09/04 : tableau de concordance : 4 écarts (code HS kits, description, quantité de concentrateurs, destinataire) ; corrections demandées avant 10/04 midi.",
          "10/04 : versions v2 contrôlées, F5 à F7 à « Obtenu » ; envoi unique de 9 pièces à TGL à 15h00 ; visite de présentation au chef de bureau à 14h30 ; ligne de registre complète et confirmation écrite à 17h05.",
        ],
        result: "Livrables 3, 4 (partie 1) et 6 : zéro écart, un paquet unique, une relation établie avant le dépôt.",
      },
      {
        title: 'J+6 à J+9 — 13 au 16 avril : déposer, relancer, escalader',
        actions: [
          "13/04 : dépôt n° D-2026-0731 (pré-dédouanement avant le vol).",
          "14/04 : exonération accordée ; 15/04 : tableau de bord « A ESCALADER » (4/7, 3 retards) ; relance précise et escalade légère.",
          "16/04 : vol arrivé à 11h00 ; manifeste et autorisation d'importation obtenus ; note d'escalade pour l'autorisation des concentrateurs.",
        ],
        result: "Livrable 5 : des relances datées et une note d'escalade appuyée sur le dossier.",
      },
      {
        title: 'J+10 à J+15 — 17 au 22 avril : litige, libération partielle, réclamation',
        actions: [
          "17/04 : l'inspecteur refuse l'exonération des concentrateurs ; kits libérés à 16h30 (libération partielle) ; recours gracieux envoyé à 15h00.",
          "20/04 : rendez-vous avec le chef de bureau ; 21/04 : exonération reconnue par écrit, autorisation du ministère de la Santé reçue.",
          "22/04 : mainlevée des concentrateurs ; constat contradictoire du concentrateur n° 3 ; réclamation envoyée le 23/04.",
        ],
        result: "Livrable 8 : litige clos par écrit sans paiement, réclamation déposée au jour 1.",
      },
      {
        title: 'Clôture et convoi — 22 au 27 avril',
        actions: [
          "22/04 : checklist clôturée (v05), tableau des délais mis à jour (8 jours ouvrés pour les kits, 11 pour les concentrateurs).",
          "24/04 : notification de mouvement ; 26/04 : briefing et fiche de consignes signée par les chauffeurs.",
          "27/04 : passage de Kabati (6 minutes) et de Bweza (25 minutes, sans paiement) ; arrivée à Bweza à 14h00 ; fiche check-point remontée.",
        ],
        result: "Livrables 7 et 9 : un convoi sans incident majeur, un dossier clôturé et des leçons transmises.",
      },
    ],
    pitfall: "Ce qui se serait passé sans méthode : un dossier déposé avec quatre écarts documentaires, bloqué pendant plusieurs jours ; des radios retenant les produits médicaux ; un litige réglé par un paiement ; et un convoi arrivé à Bweza après la rupture de stock du 28 avril.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La checklist finale du dossier COD-2026-007 (22/04/2026)',
    scenario: "Extrait de l'onglet « Suivi dossiers », lignes 5 à 11, à la clôture. Les colonnes A à D sont identiques sur les 7 lignes : COD-2026-007 ; Nairobi, Kenya ; Kits choléra KCH-01 x400 + concentrateurs O2 x4 ; 2026-04-07.",
    steps: [],
    table: {
      columns: ['Ligne', 'E — Document requis', 'F — Statut', 'G — Date obtenue', 'H — Responsable'],
      rows: [
        ['5', 'Facture commerciale', 'Obtenu', '2026-04-10', 'G. Wanjiru (centrale Nairobi)'],
        ['6', 'Liste de colisage (packing list)', 'Obtenu', '2026-04-10', 'G. Wanjiru (centrale Nairobi)'],
        ['7', "Certificat d'origine", 'Obtenu', '2026-04-10', 'G. Wanjiru (centrale Nairobi)'],
        ['8', "Demande d'exoneration douaniere", 'Obtenu', '2026-04-14', 'J. Kalume (TGL) / Douane'],
        ['9', "Autorisation d'importation", 'Obtenu', '2026-04-16', 'J. Kalume (TGL) — Direction de la pharmacie'],
        ['10', 'Manifeste de cargaison', 'Obtenu', '2026-04-16', 'Compagnie aérienne via J. Kalume'],
        ['11', 'Autorisation ministerielle complementaire', 'Obtenu', '2026-04-21', 'J. Kalume (TGL) — Ministère de la Santé'],
      ],
    },
    result: "Tableau de bord : COD-2026-007 | 7 requis | 7 obtenus | 100 % | 0 en retard | Dossier complet. Note de cellule en A5 : sorties de douane (kits 17/04, concentrateurs 22/04), litige L1 clos le 21/04, réclamation 2026-04-22-01.",
    tip: "Comparez les dates de la colonne G à celles de votre planning à rebours : l'écart vous donne en 30 secondes la qualité de votre anticipation.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Le registre des relations avec les autorités (extrait)',
    scenario: "Trois lignes du journal des interactions de registre-relations-autorites.docx, du 10 au 27 avril 2026. Colonnes : Date, Autorité / Entité, Contact, Nature de l'interaction, Engagements pris (nous / eux), Suivi nécessaire.",
    steps: [],
    example: {
      title: 'Les trois lignes telles que remplies',
      lines: [
        "1) 10/04/2026 | Douane — bureau de l'aéroport de Goma | M. Désiré Mulumba, chef de bureau (en poste depuis le 01/04) | Visite de présentation ; mandat, accord d'exonération, copie certifiée du certificat ; annonce de COD-2026-007 | Nous : dépôt du dossier complet le 13/04, information de chaque envoi 5 jours avant arrivée. Eux : agent référent, délai indicatif de 3 jours ouvrés, enregistrement de la copie | Confirmer par e-mail avant le 11/04 (fait le 10/04, 17h05) ; point de bilan après la mainlevée.",
        "2) 20/04/2026 | Douane — bureau de l'aéroport de Goma | M. Désiré Mulumba, chef de bureau | Rendez-vous sur le recours gracieux du 17/04 (refus d'exonération des concentrateurs) | Nous : remettre l'annexe 2 certifiée le jour même (fait à 11h30). Eux : répondre par écrit sous 48 h | Vérifier la réponse écrite le 21/04 à 17h00 (reçue à 16h30, exonération reconnue).",
        "3) 27/04/2026 | Check-point de Bweza (km 118) | Responsable du poste (nom non communiqué) | Passage du convoi COD-2026-007 ; demande de 20 USD refusée, appel de la base | Nous : aucun paiement, information du poste de nos prochains convois via la coordination. Eux : aucun engagement | Fiche transmise à la coordination et au point focal sécurité ; alerte partagée au Logistics Cluster ; accès traité au niveau coordination (Module 07).",
      ],
    },
    result: "Quelqu'un qui reprend le poste sans vous connaît le nom du chef de bureau, ce qui a été promis, ce qui a été tenu et ce qu'il faut refaire la prochaine fois.",
    tip: "Comparez la ligne 1 à la ligne 2 : sans la visite du 10/04, le recours du 17/04 aurait été adressé à un inconnu. C'est la valeur d'une relation construite en amont.",
  },

  // ───────────── EXERCICES ─────────────
  {
    type: 'exercise',
    title: "Exercice 1 — Checklist de dédouanement : cas « Matériel médical bloqué à la frontière, N'Djamena, Tchad »",
    instructions: "Contexte (fictif, inspiré de situations rencontrées en Afrique centrale et sahélienne) : vous êtes logisticien(ne) d'une ONG médicale internationale déjà enregistrée au Tchad, avec un accord d'exonération valide depuis 2 ans. Un envoi de matériel médical (concentrateurs d'oxygène, kits chirurgicaux, une glacière solaire) est arrivé il y a 4 jours (vendredi 28/08/2026) au poste-frontière terrestre principal, en provenance du Cameroun. Un stock critique de votre structure de santé de référence sera épuisé dans 6 jours (lundi 07/09). Nous sommes le mardi 01/09. Le transitaire vous écrit par WhatsApp : « Le dossier est bloqué parce que le code HS sur la demande d'exonération ne correspond pas à celui de la facture pour la glacière solaire. » ; « L'agent demande aussi une autorisation complémentaire du ministère de la Santé pour les concentrateurs, qu'on n'avait pas anticipée. » ; « Il y a eu un changement de responsable au poste-frontière il y a 3 semaines, je ne connais pas encore le nouveau titulaire. » ; « On m'a dit revenez la semaine prochaine, sans plus de précision. » Dans le dossier d'achat, la date de confirmation de la commande est le 20/08/2026.",
    steps: [
      { title: 'Ouvrez le dossier', actions: ["Dans votre copie de checklist-dedouanement.xlsx, créez le dossier TCD-2026-015 : Origine, Description, Date ouverture dossier = date de confirmation de la commande (pas la date du jour), identique sur les 7 lignes."] },
      { title: 'Renseignez les 7 documents', actions: ["Pour chaque ligne E : choisissez le statut dans la liste (Obtenu, En attente, Bloque, Non applicable) uniquement à partir des informations du message ; ce que le message ne dit pas se note « à confirmer » en note de cellule.", "Marquez explicitement en attente ou bloqué le code HS à corriger et l'autorisation du ministère de la Santé, avec le Responsable en colonne H."] },
      { title: 'Fixez les dates de relance', actions: ["Compte tenu des 6 jours restants, fixez une date de relance pour chaque ligne bloquée ou en attente, et une date limite de décision pour escalader."] },
      { title: 'Lisez le tableau de bord', actions: ["Saisissez TCD-2026-015 en A6 de l'onglet « Tableau de bord » et vérifiez que le dossier est signalé « A ESCALADER ». Notez B, C, D et E."] },
    ],
    tip: "Si la date d'ouverture est vide, ou si vous y mettez la date du jour, l'alerte RETARD ne se déclenche pas : le tableau de bord ne signalerait pas le dossier comme à risque.",
    pitfall: "Cocher « Obtenu » un document dont vous n'avez pas confirmé l'existence. Dans le doute, mettez « En attente » avec une note et demandez la confirmation au transitaire.",
    deliverable: "La checklist TCD-2026-015 remplie (7 lignes), le tableau de bord lu (B, C, D, E, statut global) et la liste datée des relances et du point de décision.",
  },
  {
    type: 'exercise',
    title: "Exercice 2 — Registre des relations et justification de la priorité : cas de N'Djamena",
    instructions: "Même cas qu'à l'exercice 1. Vous ne connaissez pas le nouveau responsable du poste-frontière. Rédigez une entrée dans registre-relations-autorites.docx : quelle première interaction proposeriez-vous d'avoir avec lui, au-delà de ce dossier précis, et comment la documenteriez-vous pour qu'elle serve à votre organisation au-delà de cet envoi ? Puis justifiez en 5 lignes maximum l'ordre de priorité choisi entre la correction du code HS, l'obtention de l'autorisation du ministère de la Santé et la prise de contact avec le nouveau responsable.",
    steps: [
      { title: 'Préparez la visite', actions: ["Écrivez la demande d'audience (2 lignes), le dossier de présentation (4 pièces) et 3 questions pour le nouveau responsable."] },
      { title: 'Remplissez les 6 colonnes', actions: ["Date, Autorité / Entité, Contact (nom fictif, fonction), Nature de l'interaction, Engagements pris (nous / eux, avec dates), Suivi nécessaire (action, personne, échéance)."] },
      { title: 'Rédigez la justification', actions: ["5 lignes maximum : quel est le chemin critique, ce qui est sous votre contrôle, ce qui débloque quoi, et le plan B si aucune décision n'est rendue à la date limite."] },
    ],
    pitfall: "Écrire une ligne de registre sans engagement chiffré ni date de suivi, ou classer la prise de contact en premier au prétexte qu'elle est « polie ». Justifiez par le délai et le chemin critique.",
    deliverable: "Une entrée complète du registre (6 colonnes) et une justification de 5 lignes maximum de l'ordre de priorité.",
  },
  {
    type: 'case-study',
    title: "Corrigé de référence — Exercice 1 : la checklist TCD-2026-015",
    scenario: "À ouvrir après votre tentative. Base : Shipment ID TCD-2026-015 ; Origine : Douala, Cameroun ; Description : Concentrateurs O2 + kits chirurgicaux + glacière solaire ; Date ouverture dossier : 2026-08-20 sur les 7 lignes. Les informations du message sont limitées : le transitaire ne conteste que le code HS et l'autorisation du ministère de la Santé.",
    steps: [],
    table: {
      columns: ['Ligne', 'E — Document requis', 'F — Statut', 'H — Responsable'],
      rows: [
        ['5', 'Facture commerciale', 'Obtenu (à confirmer par écrit)', 'Transitaire'],
        ['6', 'Liste de colisage (packing list)', 'Obtenu (à confirmer par écrit)', 'Transitaire'],
        ['7', "Certificat d'origine", 'Obtenu (à confirmer par écrit)', 'Transitaire'],
        ['8', "Demande d'exoneration douaniere", 'Bloque', 'Douane — code HS à corriger (glacière solaire)'],
        ['9', "Autorisation d'importation", 'Obtenu (à confirmer par écrit)', 'Transitaire'],
        ['10', 'Manifeste de cargaison', 'Obtenu (la marchandise est au poste)', 'Transitaire'],
        ['11', 'Autorisation ministerielle complementaire', 'En attente', 'Ministère de la Santé'],
      ],
    },
    result: "Tableau de bord au 01/09 : 7 requis, 5 obtenus, 71 %, 2 en retard (ligne 8 et ligne 11, 12 jours depuis le 20/08), « A ESCALADER ». Relances : mercredi 02/09 à 17h00 (documents corrigés), jeudi 03/09 à 9h00 (autorisation de la Santé, avec le numéro de dépôt), point de décision vendredi 04/09 à 12h00.",
    tip: "Si vous aviez saisi la date du jour (01/09) en colonne D, J = 0 et aucune alerte n'aurait été affichée : le dossier aurait semblé sain alors qu'il est bloqué depuis 4 jours.",
  },
  {
    type: 'case-study',
    title: "Corrigé de référence — Exercice 2 : la visite et la justification de la priorité",
    scenario: "Visite de présentation proposée au nouveau chef de poste, le mercredi 02/09 à 10h00, avec le transitaire, en remettant le dossier corrigé. Elle sert à comprendre sa procédure et à demander un traitement prioritaire du dossier corrigé, sans chercher un favori.",
    steps: [],
    example: {
      title: 'Entrée du registre (6 colonnes) et justification en 5 lignes',
      lines: [
        "Date : 02/09/2026 | Autorité / Entité : Douane — poste-frontière terrestre principal | Contact : M. Hassane Tidjani, chef de poste (en fonction depuis le 10/08/2026).",
        "Nature : première visite depuis sa prise de fonction, menée avec le transitaire ; présentation du mandat et de l'accord d'exonération ; remise du dossier corrigé ; explication de l'urgence médicale (stock critique épuisé le 07/09) ; découverte de sa procédure de dépôt.",
        "Engagements : Nous : copie certifiée du certificat d'exonération ; dépôt du dossier corrigé le 02/09 avant 16h00 ; information de chaque envoi 5 jours avant arrivée. Eux : examen prioritaire du dossier corrigé, délai de 2 jours ouvrés ; désignation d'un agent référent.",
        "Suivi : e-mail de confirmation le 02/09 à 17h00 ; relance citant le numéro de dépôt le 04/09 à 9h00 ; consigner la décision ; visite de bilan après le prochain envoi.",
        "Justification (5 lignes) : 1) L'autorisation du ministère de la Santé a le délai le plus long : elle part aujourd'hui, avec une lettre d'urgence, car elle dépasse presque à elle seule les 6 jours restants.",
        "2) Le code HS se corrige en 24 à 48 h et dépend de nous : lancé dans la même heure ; il débloque l'exonération, donc le reste de l'envoi.",
        "3) La prise de contact n'est pas un préalable technique mais un accélérateur : elle se fait le 02/09 en remettant le dossier corrigé, pas avant.",
        "4) Libération partielle des articles non concernés (kits chirurgicaux, glacière) dès l'exonération révisée.",
        "5) Plan B : sans décision le 04/09 à 12h00, escalade au niveau pays et demande de prêt de concentrateurs via le cluster santé.",
      ],
    },
    result: "Le registre est exploitable au-delà de ce dossier ; la priorité est justifiée par le chemin critique et les délais, pas par l'ordre de politesse.",
  },
  {
    type: 'exercise',
    title: 'Exercice 3 — Contrôle de concordance : trouvez les quatre écarts',
    instructions: "Envoi de la même ONG de Douala vers N'Djamena : 40 kits chirurgicaux et 2 glacières solaires à vaccins. Comparez les trois documents ci-dessous, champ par champ, comme à la Procédure 3. Il y a exactement quatre écarts. Identifiez-les, décidez la valeur de référence, et planifiez les corrections.",
    steps: [
      { title: 'Comparez', actions: ["Recopiez le tableau, ajoutez la colonne « Écart » et marquez OUI ou non pour chaque champ."] },
      { title: 'Décidez la valeur de référence', actions: ["Pour chaque écart, dites quelle valeur vous retenez et pourquoi (validation du transitaire, réalité physique, certificat)."] },
      { title: 'Planifiez', actions: ["Pour chaque écart : quel document réémettre, par qui, avant quelle heure, avant d'être envoyé au transitaire."] },
    ],
    table: {
      columns: ['Champ', "Demande d'exonération", 'Liste de colisage', 'Facture'],
      rows: [
        ['Code HS — glacière solaire', '8418.50', '8418.69', '8418.69'],
        ['Description — glacière', 'Glacière solaire à vaccins', 'Glacière solaire à vaccins modèle SDD-120', 'Glacière solaire à vaccins'],
        ['Quantité — kits chirurgicaux', '40', '40', '40'],
        ['Quantité — glacières', '2', '2', '3'],
        ['Valeur totale', '14 800 USD', '—', '14 080 USD'],
        ['Destinataire', "ONG Santé Tchad — N'Djamena", "ONG Santé Tchad — N'Djamena", "ONG Santé Tchad — N'Djamena"],
      ],
    },
    deliverable: "Le tableau de concordance complété (4 écarts identifiés), la valeur de référence retenue pour chacun et le plan de correction avec responsable et échéance.",
  },
  {
    type: 'case-study',
    title: 'Corrigé de référence — Exercice 3 : les quatre écarts',
    scenario: "À ouvrir après votre tentative. Les quatre écarts sont : le code HS de la glacière, sa description, sa quantité et la valeur totale. Les kits chirurgicaux et le destinataire sont concordants.",
    steps: [],
    table: {
      columns: ['Écart', 'Valeur de référence', 'Document à réémettre', 'Responsable et échéance'],
      rows: [
        ['Code HS glacière : 8418.50 contre 8418.69', "8418.69 après confirmation écrite du transitaire selon le tarif national", "Demande d'exonération", 'Logistique pays, avant 12h00 le jour même'],
        ['Description : avec ou sans « modèle SDD-120 »', 'Une formulation unique et complète (avec le modèle) sur les trois documents', 'Demande et facture', 'Logistique pays pour la demande ; fournisseur pour la facture'],
        ['Quantité glacières : 2, 2 et 3', "La réalité physique : compter les colis ; si 2 glacières sont livrées, la facture est fausse", 'Facture (à réémettre)', 'Fournisseur, avant 12h00 le jour même'],
        ['Valeur : 14 800 contre 14 080 USD', "Valeur recalculée à partir des quantités et prix unitaires, puis alignée (inversion de chiffres probable)", 'Demande (ou facture selon le calcul)', 'Logistique pays, après vérification des prix unitaires'],
      ],
    },
    result: "Aucun document n'est envoyé au transitaire tant que le contrôle complet n'est pas repassé à zéro écart ; les versions v2 sont nommées et archivées.",
    tip: "Le quatrième écart (valeur) ressemble à une inversion de chiffres (14 800 et 14 080) : ce genre d'erreur se repère uniquement par un contrôle chiffre pour chiffre.",
  },
  {
    type: 'exercise',
    title: 'Exercice 4 — Litige et réclamation : magasinage et glacière endommagée',
    instructions: "Suite du cas de N'Djamena. Le dossier est libéré le vendredi 04/09. À la livraison à l'entrepôt, un des deux panneaux solaires de la glacière est fissuré. Le transitaire vous facture par ailleurs 480 USD de magasinage : franchise de 3 jours, tarif de 120 USD par jour de dépassement, marchandise arrivée au poste le 28/08 et sortie le 04/09. Chronologie : 31/08 la douane notifie l'écart de code HS (3 jours après l'arrivée) ; 01/09 vous reprenez le dossier ; 02/09 documents corrigés remis ; 04/09 exonération révisée et mainlevée.",
    steps: [
      { title: 'Qualifiez la facture de magasinage', actions: ["Appliquez les quatre questions (de quoi s'agit-il, qui décide, enjeu, délai).", "Pour chaque période (28/08 au 31/08, 31/08 au 02/09, 02/09 au 04/09), dites à qui le retard est imputable : votre dossier, la douane, le transitaire."] },
      { title: 'Décidez', actions: ["Choisissez : payer, payer et contester une partie, ou contester le tout. Justifiez en trois lignes, en restant honnête sur la part qui vous revient."] },
      { title: 'Rédigez le constat de la glacière', actions: ["Rédigez le constat contradictoire (date, lieu, description, signataires, photos) et la liste des réserves à porter sur le bon de livraison."] },
      { title: 'Rédigez la réclamation', actions: ["Rédigez la réclamation au transporteur et au transitaire : faits, pièces jointes, montant réclamé, délai applicable à vérifier dans le contrat."] },
    ],
    tip: "Une contestation crédible reconnaît la part qui vous revient (les jours d'erreur documentaire) et ne conteste que ce qui est imputable à un tiers.",
    pitfall: "Contester la totalité de la facture alors que l'écart de code HS venait de vos documents. Vous perdez votre crédibilité pour la part qui était légitime.",
    deliverable: "Une grille de qualification de la facture avec décision justifiée, un constat contradictoire, une réclamation d'une page et la liste des réserves à porter sur le bon de livraison.",
  },
  {
    type: 'exercise',
    title: 'Exercice 5 — Checkpoint : trois situations, trois réponses, trois traces',
    instructions: "Convoi de matériel médical au nord de N'Djamena. Pour chacune des situations ci-dessous, appliquez la Procédure 7 : écrivez la réponse du chef de convoi (phrase prête à dire), la personne qu'il appelle, puis la ligne du registre des relations correspondante (6 colonnes). Rédigez enfin la fiche check-point de la situation A.",
    steps: [
      { title: 'Situation A', body: "À un poste de contrôle, un soldat vous demande 5 000 francs « pour la route » et ne délivre aucun reçu." },
      { title: 'Situation B', body: "Un responsable local vous demande de laisser deux de ses proches monter en cabine « pour aller jusqu'au prochain village »." },
      { title: 'Situation C', body: "Au poste-frontière, après présentation du dossier complet, l'agent répond « revenez demain », sans motif ni nom." },
      { title: 'Fiche check-point (situation A)', actions: ["Date, heure, lieu, description de l'autorité, durée, demande reçue, réponse donnée, issue, remontée prévue."] },
    ],
    example: {
      title: 'Exemple de ligne attendue (situation déjà traitée dans le module)',
      lines: [
        "« 27/04/2026 | Check-point de Bweza (km 118) | Responsable du poste (nom non communiqué) | Passage du convoi ; demande de 20 USD refusée, appel de la base | Nous : aucun paiement. Eux : aucun engagement | Fiche transmise à la coordination ; alerte au Logistics Cluster. »",
      ],
    },
    deliverable: "Trois lignes de registre (une par situation), trois réponses prêtes à dire, une fiche check-point pour la situation A. Aucune des réponses ne contient un paiement, un passager ou un chargement.",
  },
  {
    type: 'checklist',
    title: 'Votre livrable est correct si…',
    items: [
      "Checklist : la date d'ouverture (colonne D) est celle de la confirmation de commande et figure sur les 7 lignes ; les colonnes I et J n'ont pas été modifiées.",
      "Checklist : chaque statut vient de la liste déroulante (Obtenu, En attente, Bloque, Non applicable), sans accent ni variante ; chaque « Obtenu » a une date réelle en colonne G.",
      "Checklist : un dossier à risque est bien signalé « A ESCALADER » dans le tableau de bord, et chaque RETARD a un commentaire daté.",
      "Concordance : les 8 champs (code HS, description, quantité, poids, valeur, destinataire, provenance, référence) sont comparés document par document, et aucun écart ne subsiste avant l'envoi au transitaire.",
      "Dossier : l'envoi est unique, indexé, avec une liste des pièces à venir, et le dépôt est prouvé par un récépissé (numéro, date, heure).",
      "Relances : chacune cite l'identifiant, le numéro de dépôt, le document précis, la date promise et une heure limite de réponse.",
      "Registre : chaque ligne a une date, un service exact, un contact nommé, une nature précise, des engagements « nous / eux » datés et un suivi avec une action et une échéance.",
      "Checkpoint : les réponses refusent tout paiement, tout passager et toute marchandise tierce, désignent la personne appelée, et la fiche check-point est complète.",
      "Litige et réclamation : la contestation est écrite, datée et sourcée ; la part imputable à l'organisation est reconnue ; les réserves et le constat sont rédigés le jour de la livraison.",
      "Priorité : la justification (5 lignes maximum) s'appuie sur le chemin critique et les délais, pas sur l'ordre de politesse.",
    ],
  },

  // ───────────── ERREURS FRÉQUENTES ─────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés) et comment les éviter',
    items: [
      "Codes HS non alignés entre la demande d'exonération, la liste de colisage et la facture : le motif de blocage le plus fréquent et le plus évitable. Parade : tableau de concordance à zéro écart avant tout envoi (Procédure 3).",
      "Penser que l'accord d'exonération s'applique tout seul. Parade : fiche périmètre, certificat vérifié et enregistré au poste d'arrivée, exonération par envoi (Procédure 1).",
      "Sous-estimer les autorisations complémentaires liées au type de bien (matériel médical, télécommunications, véhicules). Parade : matrice article par article et planning à rebours dès la commande.",
      "Laisser un article à autorisation longue retenir les articles urgents. Parade : dossier séparé, libération partielle.",
      "Date d'ouverture vide ou égale à la date du jour dans la checklist : l'alerte ne se déclenche pas. Parade : date de confirmation de commande sur les 7 lignes.",
      "Saisir un statut hors liste (« Bloqué », « Obtenue »). Parade : toujours la liste déroulante.",
      "Envoyer le dossier par fragments, ou sans accusé de réception. Parade : un paquet unique avec index (Procédure 4).",
      "Relancer par « des nouvelles ? ». Parade : cinq éléments, une heure limite de réponse (Procédure 5).",
      "Escalader sans dossier documenté. Parade : note d'escalade en six blocs avec chronologie, impact, options et pièces.",
      "Traiter la négociation avec un checkpoint ou un poste-frontière comme purement informelle, ou ne construire la relation qu'au moment du besoin. Parade : visite de présentation et registre à jour (Procédure 6).",
      "Accepter un paiement informel, un passager ou une marchandise « exceptionnellement ». Parade : consigne écrite, briefée et signée.",
      "Signer un bon de livraison sans réserve précise, ou tarder à notifier un dommage. Parade : constat contradictoire le jour de la livraison.",
      "Partager le registre ou la cartographie sur un groupe ouvert : ils contiennent des noms et des coordonnées. Parade : diffusion interne uniquement.",
    ],
  },

  // ───────────── RÉCAPITULATIF ─────────────
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez établi le statut d'exonération de votre organisation, rédigé une fiche périmètre d'une page et classé chaque article d'une commande (couvert, autorisation, double usage).",
      "Vous avez ouvert un dossier dans checklist-dedouanement.xlsx, renseigné ses 10 colonnes sans casser les formules et lu le tableau de bord.",
      "Vous avez contrôlé la concordance de trois documents (code HS, description, quantités, destinataire) et fait réémettre les versions fautives.",
      "Vous avez transmis un dossier complet unique au transitaire et obtenu la preuve du dépôt.",
      "Vous avez rédigé des relances précises et une note d'escalade appuyée sur un dossier documenté.",
      "Vous avez rempli le registre des relations avec les autorités sur ses 6 colonnes et mené une visite de présentation.",
      "Vous avez préparé un convoi pour traverser des checkpoints : pièces, consignes chauffeurs, script, fiche de passage.",
      "Vous avez traité un litige douanier (recours gracieux, libération partielle) et une réclamation de marchandise (constat contradictoire, notification dans les délais).",
      "Vous avez clôturé le dossier, mesuré l'écart entre le délai prévu et le délai réel et mis à jour votre tableau des délais.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais expliquer ce que couvre, et ce que ne couvre pas automatiquement, un accord d'exonération douanière humanitaire.",
      "Je sais pourquoi la cohérence du code HS entre tous les documents d'un dossier est un point de contrôle critique.",
      "Je sais distinguer une interaction avec une autorité civile d'une interaction avec une autorité militaire ou de sécurité, et adapter ma posture.",
      "Je sais expliquer pourquoi les checkpoints sont une réalité opérationnelle récurrente à gérer avec méthode, pas un incident exceptionnel.",
      "J'ai complété une checklist de dédouanement avec le template fourni, en identifiant correctement les documents manquants, et je sais lire son tableau de bord.",
      "J'ai rédigé une entrée dans le registre de relations avec les autorités, exploitable au-delà de l'envoi en cours.",
      "Je sais documenter et faire remonter un litige douanier avec un dossier actionnable, pas une simple alerte.",
      "Je sais quoi répondre à une demande de paiement, de passager ou de marchandise tierce à un checkpoint, et qui appeler.",
      "Je sais constater un dommage à la livraison et déposer une réclamation dans les délais.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 07 — Sécurité, Accès & Gestion des Risques : vous passerez de la coordination de routine avec les autorités à l'évaluation des risques sécuritaires sur les routes logistiques, aux procédures de communication et de reporting d'incidents, et à la négociation d'accès avec les acteurs armés (principes CICR).",
  },
]
