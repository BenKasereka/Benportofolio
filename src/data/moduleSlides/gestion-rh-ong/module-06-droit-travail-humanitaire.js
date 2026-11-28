// Module 06 — Droit du Travail Humanitaire — RDC & Droit International
// Référence pas à pas construite à partir du contenu source (01-theorie.md,
// 02-outils.md, 03-exercices.md, 04-templates/) : chaque procédure est
// détaillée étape par étape et appliquée à un cas fil rouge unique (réponse
// à l'épidémie de choléra, base de Goma, suite des Modules 01 à 04), avec les
// deux templates remplis champ par champ. Les noms, chiffres, taux et dates
// des exemples sont fictifs.
export default [
  {
    type: 'cover',
    title: 'Droit du Travail Humanitaire — RDC & Droit International',
    hook: "À la fin de ce module, vous aurez en main la fiche des repères juridiques validés par un juriste local, la grille de base légale de vos expatriés, une checklist de conformité au Code du Travail remplie et son tableau de bord, et la note de suivi d'un conflit du travail qui tient devant un inspecteur : heures supplémentaires reconstituées semaine par semaine, tentative interne datée, médiation, accord écrit payé par la paie. Tout cela étape par étape, de la lettre du délégué du personnel au contrôle après virement.",
  },
  {
    type: 'objectives',
    items: [
      "Cadrer le droit applicable à votre mission : lister les sources (Code du Travail, contrat, politique mission, politique siège), confronter la politique du siège au Code, faire valider les repères chiffrés par un juriste local, pour obtenir une fiche de repères juridiques datée et une note de réponse au manager de programme.",
      "Vérifier le statut de chaque expatrié (autorisation d'emploi, titre de séjour, IPR, cotisations sociales, privilèges invoqués) en exigeant un texte identifiable pour toute exonération, pour obtenir une grille de base légale signée et un arbitrage écrit au bon niveau.",
      "Reconstituer et chiffrer des heures supplémentaires contestées, semaine par semaine, à partir de preuves croisées (plannings, présences, paie), pour obtenir un tableau d'écart nominatif et un montant à payer.",
      "Tenir chaque mois la checklist de conformité (congés, heures supplémentaires, cotisations sociales) et lire le tableau de bord d'équipe, pour obtenir un classeur à jour, des actions correctives datées et un tableau présenté à votre hiérarchie avant qu'un litige n'éclate.",
      "Conduire un conflit du travail dans l'ordre légal (tentative interne documentée, médiation, inspection du travail, tribunal en dernier recours) en tenant la note de suivi à jour, pour obtenir une note de deux pages maximum, datée et signée à chaque étape.",
      "Clôturer le dossier par un accord écrit exécuté par la paie, corriger la checklist et mettre en place un suivi hebdomadaire des heures en période de surcharge, pour obtenir un dossier fermé, prouvé et non reproductible.",
    ],
  },
  {
    type: 'concept',
    title: 'Ce que vous allez réaliser dans ce module',
    body: [
      "Ce module n'est pas un cours de droit : c'est la méthode d'un HR Officer ou d'un HR Manager qui doit garder une équipe en règle avec le Code du Travail de la RDC et traiter un conflit sans improviser. À la fin, vous aurez produit sept livrables réutilisables tels quels sur votre propre mission.",
      "Le cas fil rouge (fictif, inspiré de situations réelles) prolonge les Modules 01 à 04 : nous sommes le lundi 7 décembre 2026. Vous êtes N. Mbusa, HR Officer de la base de Goma de Kivu Santé Solidaire (KSS). Depuis le 19 octobre, KSS gère à Mugunga un centre de traitement du choléra (CTC) de 40 lits, ouvert 24 h/24. Le pic de l'épidémie a duré trois semaines, du lundi 19 octobre au dimanche 8 novembre. Ce matin, le délégué du personnel M. Vulembera vous remet une lettre : trois infirmiers contestent ne pas avoir été payés pour toutes leurs heures supplémentaires de ces trois semaines et saisiront l'inspection du travail si rien n'est fait avant le mardi 22 décembre. Le Base Manager E. Kasongo propose de régler « en cash, aujourd'hui ». Dans le même temps, le Finance Manager R. Ilunga vous dit que les trois expatriés de la base « ne paient pas l'IPR, comme partout ».",
    ],
    bullets: [
      "Livrable 1 — La fiche des repères juridiques (validée par un juriste local), la grille politique du siège contre Code du Travail et la note de réponse au manager de programme.",
      "Livrable 2 — La grille de base légale des trois expatriés de la base et la note d'arbitrage adressée au Head of Mission et à la Finance.",
      "Livrable 3 — Le tableau de reconstitution des heures supplémentaires des trois infirmiers, avec l'écart et le montant à payer.",
      "Livrable 4 — Le classeur checklist-conformite-code-travail-rdc.xlsx rempli (10 employés), son tableau de bord et les actions correctives.",
      "Livrable 5 — La note de suivi de résolution de conflit (note-suivi-resolution-conflit-travail.docx), cinq sections, deux pages maximum, avec tentative interne, médiation et dossier de saisine de l'inspection prêt.",
      "Livrable 6 — L'accord écrit signé, le paiement par la paie de décembre et la checklist mise à jour après virement.",
      "Livrable 7 — La feuille hebdomadaire de suivi des heures pour toute période de surcharge.",
    ],
  },
  {
    type: 'concept',
    title: 'Le calendrier du fil rouge : trois dossiers en parallèle sur trois semaines',
    body: "Dans la vraie vie, ces procédures ne se déroulent pas l'une après l'autre : elles se chevauchent. Voici le calendrier complet du cas, que le cas résolu reprendra jour par jour.",
    table: {
      columns: ['Date (2026)', 'Événement', 'Procédure'],
      rows: [
        ['Lun 7 déc.', "11 h : lettre du délégué reçue, note de suivi ouverte ; le Base Manager propose le cash ; saisine du juriste local", 'P1 (étapes 1 à 3), P3 (étape 1), P5 (étape 1)'],
        ['Mar 8 déc.', 'Reconstitution des heures et chiffrage', 'P3 (étapes 2 à 4)'],
        ['Mer 9 déc.', 'Checklist de conformité de la base et tableau de bord', 'P4'],
        ['Jeu 10 déc.', "9 h : réponse du juriste ; 14 h 30 : échange interne avec les trois infirmiers", 'P1 (étapes 4 et 5), P5 (étapes 2 à 4)'],
        ['Ven 11 – lun 14 déc.', 'Grille de base légale des expatriés ; mandat de médiation obtenu', 'P2, P5 (étape 5)'],
        ['Mer 16 déc.', 'Médiation (10 h)', 'P5 (étape 5)'],
        ['Jeu 17 déc.', 'Accord écrit signé', 'P6 (étape 1)'],
        ['Ven 18 déc.', 'Date limite de transmission à la Finance (le 20 tombe un dimanche)', 'P6 (étape 2)'],
        ['Mar 22 déc.', "Échéance annoncée par le délégué : aucune saisine nécessaire", 'P5 (étapes 6 et 7)'],
        ['Lun 28 – mar 29 déc.', 'Virement puis contrôle après virement', 'P6 (étape 2)'],
      ],
    },
    tip: "Notez ce calendrier dès le premier jour du vrai dossier. Le délai que l'autre partie vous annonce est une contrainte à intégrer, pas une menace à subir.",
  },
  {
    type: 'concept',
    title: 'Qui est qui dans le cas fil rouge',
    body: "Les personnages des modules précédents sont là, rejoints par ceux de ce dossier. Posez les noms sur les rôles avant d'agir : c'est votre premier tableau.",
    table: {
      columns: ['Rôle', 'Nom (fictif)', 'Ce que cette personne attend de vous'],
      rows: [
        ['Head of Mission', 'H. Mwamba', "Une décision à prendre sur une proposition claire, et la garantie que l'organisation ne se met pas en infraction."],
        ['HR Manager de mission', 'A. Kavira', "Être informée le jour même d'un conflit collectif ; elle sera la médiatrice interne, car elle n'est pas partie au litige."],
        ['HR Officer de base', 'N. Mbusa (vous)', "Conduire le dossier et tenir la note de suivi."],
        ['Base Manager', 'E. Kasongo', "Sortir vite d'une situation qui l'expose ; il doit comprendre pourquoi le règlement rapide est un piège."],
        ['Chef de centre du CTC', 'F. Kasereka Mulamba', "Tenait à la main le relevé des heures ; il connaît les plannings de garde."],
        ['Délégué du personnel', 'M. Vulembera', "Une réponse écrite et datée avant le 22 décembre."],
        ['Les trois infirmiers', 'G. Masika Kavugho, D. Kambale Vitswamba, T. Syauswa Muhesi', "Être payés ce qui leur est dû, au taux correct, et être crus."],
        ['Finance Manager / Payroll Officer', 'R. Ilunga / C. Bahati', "Des mouvements de paie datés avant la date limite et un montant justifié."],
        ['Coordinateur Programmes', 'L. Safari', "Penser que le barème d'heures supplémentaires du siège suffit à tout couvrir."],
        ['Conseil juridique local', 'Me T. Kasole', "Des questions fermées, écrites, avec les textes en pièce jointe."],
        ['Head of HR siège', 'S. Lambert', "Être informée des dossiers à enjeu prévus par la politique RH."],
      ],
    },
  },
  {
    type: 'stat-callout',
    stat: '156,51 USD',
    caption: "c'est le montant total (fictif) des heures supplémentaires restées impayées aux trois infirmiers de Mugunga. Le Base Manager voulait les régler « en cash, tout de suite » pour éviter que le sujet ne remonte.",
    context: "Pour 156,51 USD, un règlement sans trace laisse l'organisation sans preuve de bonne foi, sans ligne de paie, sans retenue fiscale ni cotisation sociale, et prête à rejouer le même litige avec les autres agents du centre. Ce module vous apprend à régler le même dossier proprement, en moins de trois semaines.",
  },

  // ─── Théorie essentielle ───────────────────────────────────────────────
  {
    type: 'concept',
    title: 'Pas un cours de droit : trois repères et un ordre à respecter',
    body: [
      "Le HR Manager humanitaire n'a pas besoin d'être juriste, mais il n'a pas le droit de gérer un pays comme s'il n'avait pas de droit du travail. Les questions qui reviennent chaque semaine sont toujours les mêmes : un congé mal calculé, des heures supplémentaires non compensées pendant un pic d'activité, un litige qui dégénère faute d'avoir été documenté à temps.",
      "Ce module vous donne donc trois repères à vérifier chaque mois (congés, heures supplémentaires, droits fondamentaux), une règle sur les expatriés (aucune exonération sans texte) et un ordre de résolution des conflits (interne, médiation, inspection, tribunal) dans lequel on ne saute aucune marche.",
    ],
    example: {
      title: 'Dans le cas fil rouge',
      lines: [
        "Repère n° 2 (heures supplémentaires) : trois semaines de suivi à la main par un chef de centre en surcharge, et six semaines plus tard une plainte collective.",
        "Règle sur les expatriés : « ils ne paient pas l'IPR, comme partout » est une habitude, pas un texte.",
        "Ordre de résolution : l'échange interne daté du 10 décembre sera la première pièce du dossier, celle qui donne sa crédibilité à tout ce qui suit.",
      ],
    },
    highlight: "Le Code du Travail de la RDC (Loi n°015/2002 portant Code du travail, modifiée notamment par la Loi n°016/2022) s'applique à tout contrat exécuté sur le territoire congolais, quelle que soit la nationalité de l'employeur ou de l'employé, et quelle que soit la politique RH du siège.",
  },
  {
    type: 'comparison-table',
    title: 'Les sources de règles et leur hiérarchie : le Code fixe le plancher',
    columns: ['Source', 'Rôle', 'Ce qu\'elle peut faire', 'Exemple dans le cas fil rouge'],
    rows: [
      ['Code du Travail RDC et textes d\'application', 'Plancher légal', "Fixer des minima que personne ne peut écarter en défaveur du personnel", "Durée légale du travail, majoration des heures supplémentaires, congé annuel, préavis"],
      ['Contrat individuel', 'Engagement entre les parties', "Améliorer le plancher (salaire, avantages) ; jamais y déroger en défaveur de la personne", "Contrat des infirmiers : salaire de base 360 USD par mois"],
      ['Politique RH de la mission', 'Règle locale de KSS', "Préciser et améliorer ; elle doit être confrontée au Code à chaque révision", "Procédure de déclaration des heures supplémentaires au chef de centre"],
      ['Politique RH du siège', 'Cadre global de l\'organisation', "S'appliquer partout où elle est au moins aussi favorable que le droit local", "Barème du siège de KSS : récupération heure pour heure, sans majoration financière"],
    ],
  },
  {
    type: 'concept',
    title: 'Politique du siège et Code du Travail : laquelle gagne ?',
    body: [
      "Une politique interne plus favorable au personnel peut coexister avec le Code du Travail : c'est la meilleure des deux qui s'applique. Une politique interne qui y déroge en défaveur du personnel ne tient pas juridiquement, même signée, même acceptée par l'employé.",
      "Pour un manager de programme, la phrase utile est simple : « Le siège a écrit sa politique pour toutes les missions. La RDC a écrit la loi pour tous les contrats exécutés sur son territoire. Quand les deux divergent en défaveur de l'équipe, c'est la loi qui s'applique, et c'est l'organisation, pas l'employé, qui paie la différence. »",
    ],
    example: {
      title: 'Fil rouge — le barème de KSS contre le droit',
      lines: [
        "Politique du siège de KSS (§ 7.3, fictif) : heures supplémentaires récupérées heure pour heure, déclenchées au-delà de 50 h par semaine, sans majoration financière.",
        "Repère du Code (à valider par le juriste) : durée légale de 45 h par semaine dans l'exemple, avec majoration financière différenciée jour, nuit, dimanche et jour férié.",
        "Conséquence : un infirmier qui a travaillé 57 h dans la semaine n'a droit à rien selon le barème du siège ; il a droit à 12 h supplémentaires majorées selon le Code.",
      ],
    },
    highlight: "Un HR Manager qui applique un barème d'heures supplémentaires du siège sans le confronter au Code du Travail RDC expose l'organisation, même de bonne foi.",
  },
  {
    type: 'comparison-table',
    title: 'Les trois points à vérifier chaque mois, pour chaque employé',
    columns: ['Point opérationnel', 'Repère à connaître', 'Ce qu\'il faut vérifier chaque mois', 'Colonne de la checklist'],
    rows: [
      ['Congé annuel', "Un jour ouvrable de congé par mois de service complet, avec une majoration liée à l'ancienneté (jours supplémentaires après plusieurs années chez le même employeur).", "Le solde de congé est-il suivi individuellement, mois par mois, et pas recalculé de mémoire en fin d'année ?", 'D à G'],
      ['Heures supplémentaires', "Durée légale du travail encadrée ; majoration de rémunération au-delà, avec des taux différenciés (jour, nuit, dimanche, jour férié).", "Chaque heure supplémentaire est-elle enregistrée nominativement, datée, et compensée (paiement majoré ou repos compensateur) plutôt qu'« absorbée » dans un forfait non documenté ?", 'H à J'],
      ['Droits fondamentaux et cotisations', "Contrat écrit, préavis, indemnités selon l'ancienneté, protection contre le licenciement abusif, liberté syndicale ; cotisations sociales déclarées et versées à l'INSS.", "Le dossier contient-il un contrat signé à jour, chaque rupture suit-elle un préavis documenté, et la dernière cotisation date-t-elle de moins de 35 jours ?", 'K à M'],
    ],
  },
  {
    type: 'concept',
    title: 'Congés : un suivi mensuel, individuel et écrit',
    body: [
      "Le principe général : un jour ouvrable de congé par mois de service complet, plus des jours supplémentaires liés à l'ancienneté selon la règle que votre juriste vous confirmera. Le suivi se fait mois par mois, personne par personne, dans le registre de congés, à partir de demandes écrites validées.",
      "Le piège est de ne regarder le congé qu'en fin d'année : on découvre alors des soldes négatifs (congé pris par anticipation, jamais régularisé) ou des soldes énormes jamais pris, et des contestations au départ de la personne.",
    ],
    example: {
      title: 'Calcul sur le fil rouge — chauffeur recruté en 2026',
      lines: [
        "Entrée en service le 1er mars 2026, jours acquis au 30 novembre 2026 : mois complets de mars à novembre = 9 mois, donc 9 jours ouvrables acquis (sans majoration d'ancienneté).",
        "Jours pris : 4 (demandes signées). Solde : 9 − 4 = 5 jours.",
        "Cas inverse : un agent qui a pris 12 jours alors que 11 sont acquis affiche un solde de −1 : c'est un « À corriger » dans la checklist.",
      ],
    },
    tip: "La checklist ne signale en « À corriger » que les soldes négatifs. Lisez vous-même la colonne F : un solde très élevé en fin d'année est un risque de litige et de coût qu'aucune formule ne vous signalera.",
  },
  {
    type: 'concept',
    title: 'Heures supplémentaires : enregistrer, majorer, compenser',
    body: [
      "Le Code encadre la durée légale du travail et impose une majoration de rémunération pour les heures effectuées au-delà, avec des taux différenciés selon qu'il s'agit d'heures de jour, de nuit, de dimanche ou de jour férié. Une heure supplémentaire se compense soit par un paiement majoré, soit par un repos compensateur, jamais par un « arrangement » oral.",
      "Trois règles de terrain : on compte par semaine, nominativement et par date, pas sur une moyenne de période ; on garde une preuve croisée (planning, présence signée, paie) ; et la compensation se fait par la paie, avec bulletin, retenue fiscale et cotisations, pas en espèces.",
    ],
    example: {
      title: 'Calcul sur le fil rouge (valeurs fictives, à remplacer par celles de votre juriste)',
      lines: [
        "Durée légale retenue dans l'exemple : 45 h par semaine.",
        "Taux horaire de base : 360 USD ÷ 195 h par mois (45 h × 52 semaines ÷ 12) = 1,85 USD.",
        "Heure supplémentaire de jour : 1,85 × 1,30 = 2,405 USD. Heure de nuit, dimanche ou jour férié : 1,85 × 1,60 = 2,96 USD.",
        "Un infirmier qui a presté 63 h une semaine : 63 − 45 = 18 heures supplémentaires cette semaine-là.",
      ],
    },
    pitfall: "Faire la moyenne sur trois semaines : une semaine de 40 h « compense » alors une semaine de 60 h, et vous sous-déclarez des heures dues. Calculez toujours semaine par semaine.",
  },
  {
    type: 'concept',
    title: 'Droits fondamentaux : contrat écrit, préavis, indemnités, délégué du personnel',
    body: [
      "Le troisième repère est moins chiffré mais plus lourd de conséquences : un contrat écrit et signé pour chaque personne, un préavis respecté en cas de rupture, des indemnités de rupture selon l'ancienneté, une protection contre le licenciement abusif et la liberté syndicale.",
      "Dans un conflit, c'est souvent le délégué du personnel qui porte la parole des agents. Il est un interlocuteur légitime : on le reçoit, on lui répond par écrit, on le traite avec le même respect que l'employé concerné.",
    ],
    bullets: [
      "Contrat : un exemplaire signé, daté, dans le dossier individuel avant la prise de poste.",
      "Rupture : une décision orale du jour au lendemain n'est jamais une rupture valable ; le préavis et ses dates doivent être écrits.",
      "Liberté syndicale : ne jamais sanctionner ni menacer quelqu'un parce qu'il a saisi son délégué ou annoncé qu'il irait à l'inspection.",
    ],
    pitfall: "Traiter ces repères comme des chiffres figés. Le droit évolue (la RDC a modifié son Code en 2022) et des textes d'application peuvent préciser des taux exacts : validez toujours le chiffre en vigueur avec un juriste local avant de l'inscrire dans une politique.",
  },
  {
    type: 'concept',
    title: 'Expatrié : ce qui change réellement, et ce qui ne change pas',
    body: [
      "La conviction qu'un employé expatrié « n'est pas vraiment soumis » au droit du travail ou au régime fiscal du pays d'accueil est l'une des plus répandues et des plus dangereuses. Elle est le plus souvent héritée d'une mission précédente ou d'une rumeur de couloir.",
    ],
    bullets: [
      "Ce qui change : le permis de travail (autorisation d'emploi) et le titre de séjour, obligatoires pour travailler légalement ; l'absence de ces documents expose l'organisation, pas seulement l'individu.",
      "Ce qui ne change pas : l'IPR (Impôt Professionnel sur les Rémunérations) s'applique en principe aux revenus d'une activité exercée en RDC, y compris pour un expatrié, sauf texte ou convention contraire identifiable (convention de non-double imposition, accord de siège, statut diplomatique reconnu).",
      "Les privilèges et immunités existent pour certains statuts (personnel de certaines agences des Nations Unies, personnel couvert par un accord de siège signé). Une ONG sans accord de siège explicite ne peut pas présumer en bénéficier.",
    ],
    highlight: "Il n'existe aucune exonération automatique du seul fait d'être expatrié. Chaque privilège invoqué doit reposer sur un texte de loi, une convention ratifiée ou un accord de siège signé : jamais sur une supposition, une pratique observée ailleurs ou l'affirmation d'un collègue expérimenté.",
    tip: "En cas de doute, traitez la personne comme pleinement soumise au droit commun jusqu'à preuve du contraire, et faites vérifier le point exact par un conseil juridique local.",
  },
  {
    type: 'comparison-table',
    title: 'Trois statuts, trois façons de vérifier',
    columns: ['Statut', 'Droit du travail RDC', 'IPR', 'Cotisations sociales (INSS)', 'Ce que vous vérifiez'],
    rows: [
      ['Personnel national de KSS', 'Applicable', 'Retenu à la source', 'Déclarées et versées par l\'employeur', "Bulletin de paie, preuve de versement mensuel"],
      ['Expatrié sous contrat KSS, sans accord de siège', 'Applicable', "Dû en principe ; exception seulement sur texte identifiable", "À vérifier : base légale à identifier pour toute dispense", "Autorisation d'emploi, titre de séjour, texte invoqué, avis du conseil juridique"],
      ['Personne couverte par un statut particulier (agence des Nations Unies, accord de siège signé)', "Selon le texte qui crée le statut", "Selon le texte ou l'accord signé", "Selon le texte ou l'accord signé", "Le document qui fonde le statut, daté et signé, versé au dossier"],
    ],
  },
  {
    type: 'process',
    title: 'Les quatre marches de la résolution d\'un conflit du travail',
    intro: "En RDC comme dans la plupart des systèmes de droit du travail francophones, un conflit individuel se résout par gradation : on ne saute pas une étape parce qu'on est pressé, et on ne se présente jamais devant un tribunal sans être passé par les précédentes.",
    steps: [
      { title: 'Tentative de résolution interne', body: "Échange direct et documenté entre l'employé, son responsable hiérarchique et le RH. C'est l'étape la plus souvent bâclée, et presque toujours celle qui, bien menée, évite l'escalade." },
      { title: 'Médiation', body: "Un tiers interne (de niveau supérieur, non impliqué) ou externe facilite la recherche d'un accord sans trancher lui-même." },
      { title: 'Inspection du travail', body: "L'Inspection du Travail compétente agit comme autorité de conciliation prévue par la loi ; la conciliation devant l'inspecteur est un passage quasi obligé avant toute saisine judiciaire pour un litige individuel." },
      { title: 'Tribunal', body: "Le tribunal compétent (tribunal du travail ou juridiction civile selon l'organisation judiciaire locale) tranche en dernier recours, avec l'appui d'un conseil juridique local." },
    ],
    result: "Règle opérationnelle : chaque étape est documentée avant de passer à la suivante (date, personnes présentes, position de chaque partie, résultat). Un dossier qui arrive à l'inspection sans aucune trace de tentative interne perd immédiatement en crédibilité, même quand l'employeur a juridiquement raison sur le fond.",
  },
  {
    type: 'comparison-table',
    title: 'Pour chaque marche : qui, quoi, quelle trace',
    columns: ['Étape', 'Qui intervient', 'Objectif', 'Trace à conserver'],
    rows: [
      ['1. Tentative interne', "Employé (et son délégué), responsable hiérarchique, RH", "Comprendre le désaccord, vérifier les faits, proposer une solution", "Ligne datée dans la section 2 de la note ; feuille de présence signée ; compte rendu"],
      ['2. Médiation', "Médiateur non impliqué (interne de niveau supérieur ou externe)", "Faire émerger un accord sans trancher", "Date, format, participants, issue, dans la même note ; accord écrit si trouvé"],
      ['3. Inspection du travail', "Inspecteur compétent pour la zone, les deux parties", "Conciliation prévue par la loi", "Date de saisine, échanges, position et recommandations de l'inspecteur ; note complète remise"],
      ['4. Tribunal', "Juridiction compétente, conseil juridique local", "Trancher en dernier recours", "Dossier complet avec la note tenue à jour depuis le premier jour"],
    ],
  },
  {
    type: 'vocabulary',
    title: 'Vocabulaire à maîtriser dès ce module',
    terms: [
      { term: 'IPR (Impôt Professionnel sur les Rémunérations)', definition: "Impôt sur les revenus salariaux dû en RDC, retenu à la source par l'employeur, applicable en principe à tout salarié percevant une rémunération pour une activité exercée sur le territoire congolais." },
      { term: 'INSS', definition: "Institut National de Sécurité Sociale : organisme auprès duquel l'employeur déclare et verse les cotisations sociales obligatoires de son personnel en RDC." },
      { term: 'Accord de siège', definition: "Convention négociée entre une organisation (agence onusienne, parfois une grande ONG) et l'État hôte, qui peut prévoir des privilèges ou immunités. Jamais présumée en l'absence d'un texte signé." },
      { term: 'Conciliation', definition: "Tentative, menée par un tiers (souvent l'inspecteur du travail), de rapprocher les positions des parties avant toute procédure judiciaire." },
      { term: 'Préavis', definition: "Délai légal ou contractuel entre l'annonce d'une rupture de contrat et sa prise d'effet, destiné à protéger les deux parties." },
      { term: 'Durée légale du travail', definition: "Nombre d'heures par semaine au-delà duquel les heures sont supplémentaires. À faire confirmer par votre juriste ; l'exemple de ce module retient 45 h par semaine." },
      { term: 'Repos compensateur', definition: "Temps de repos accordé en compensation d'heures supplémentaires, lorsque le cadre applicable le permet, à documenter comme un paiement." },
      { term: 'Délégué du personnel', definition: "Représentant des agents auprès de la direction, interlocuteur légitime dans un conflit collectif ou individuel." },
      { term: 'Tentative de résolution interne documentée', definition: "Échange daté, avec les personnes présentes, la position de chaque partie et le résultat, consigné et signé : première pièce de tout dossier de conflit." },
    ],
  },
  {
    type: 'concept',
    title: 'Vos deux outils pour ce module',
    body: [
      "Les deux templates du dossier 04-templates sont utilisés champ par champ dans les procédures qui suivent. Vous ne les adaptez pas : vous les remplissez tels qu'ils existent.",
    ],
    table: {
      columns: ['Template', "Ce qu'il contient", 'Utilisé dans'],
      rows: [
        ['checklist-conformite-code-travail-rdc.xlsx', "Onglet « Checklist Conformite » : colonnes A à O (Nom de l'employé, Fonction, Base / Zone, Congés légaux dus, Congés légaux pris, Solde de congés, Statut congés, Heures sup. effectuées, Heures sup. compensées, Statut heures sup., Dernière cotisation sociale versée, Cotisation à jour (< 35 jours) ?, Statut cotisations, STATUT GLOBAL EMPLOYÉ, Commentaire / action corrective), 15 lignes de saisie (5 à 19). Onglet « Tableau de bord equipe » : 5 indicateurs et une répartition par point de conformité.", 'Procédures 3 (chiffrage), 4 et 6'],
        ['note-suivi-resolution-conflit-travail.docx', "5 sections : 1. Description du litige ; 2. Tentatives de résolution interne documentées (tableau Date / Action ou échange mené / Résultat ou position de chaque partie / Fait par) ; 3. Étape d'escalade atteinte (4 cases) ; 4. Statut actuel du dossier (statut, date de dernière mise à jour, synthèse en 2-3 phrases) ; 5. Prochaines actions ; puis Rédigé par et Date.", 'Procédures 3, 5 et 6'],
      ],
    },
    pitfall: "Dans la checklist, les colonnes F, G, J, L, M et N (fond gris clair) sont des formules. Les écraser à la main, même pour « corriger » un statut, fausse le tableau de bord et vous prive de la seule alerte automatique du classeur.",
  },

  // ─── Procédure 1 — Cadrer le droit applicable ──────────────────────────
  {
    type: 'concept',
    title: 'Procédure 1 — Cadrer le droit applicable et valider vos repères chiffrés (jours 1 et 2)',
    body: "Avant de contrôler quoi que ce soit, vous devez savoir sur quelle règle vous contrôlez. Cette procédure prend une à deux journées et vous sert pendant toute la mission : elle remplace le souvenir d'une mission précédente par une fiche datée, validée par un juriste local. Fil rouge : le lundi 7 décembre, L. Safari vous dit que le barème d'heures supplémentaires du siège suffit. Vous ne pouvez pas lui répondre à l'intuition.",
    bullets: [
      'Étape 1 — Lister les sources applicables et leur hiérarchie.',
      'Étape 2 — Confronter la politique du siège au Code du Travail.',
      'Étape 3 — Saisir un juriste local avec des questions fermées.',
      'Étape 4 — Consigner les repères validés dans une fiche datée.',
      'Étape 5 — Répondre au manager de programme, par écrit et sans conflit.',
    ],
    result: "Livrable : une fiche des repères juridiques validée, une grille « politique du siège contre Code » et une note de réponse au manager de programme, archivées dans le dossier 06_Droit_travail.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 1 sur 5',
    title: 'Lister les sources applicables et leur hiérarchie',
    intro: "Vous ne pouvez pas appliquer une règle que vous n'avez pas sous les yeux. Rassemblez les textes, datez-les, et notez ceux qui manquent : ce sont les premières questions à poser.",
    steps: [
      {
        title: 'Créez le dossier et rassemblez les textes',
        actions: [
          "Créez un dossier « 06_Droit_travail_2026-12 » sur le serveur RH (pas sur votre bureau).",
          "Enregistrez le Code du Travail (Loi n°015/2002 modifiée notamment par la Loi n°016/2022) dans sa version consolidée la plus récente que vous avez, avec sa date dans le nom du fichier.",
          "Ajoutez les textes d'application et barèmes que vous connaissez, le modèle de contrat national, la politique RH de la mission et la politique RH du siège applicable à la RDC.",
        ],
      },
      {
        title: 'Construisez le tableau « Sources applicables »',
        actions: [
          "Ouvrez une feuille Excel avec 4 colonnes : Source / Version et date / Niveau (plancher légal, engagement, règle locale, cadre global) / Manquant ou à confirmer.",
          "Une ligne par source ; écrivez « À confirmer » dès que vous n'êtes pas sûr que la version est en vigueur.",
          "Placez le Code en première ligne : c'est le plancher, tout le reste ne peut que faire mieux.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — tableau rempli le lundi 7 décembre, 14 h',
      lines: [
        "Code du Travail RDC (Loi n°015/2002 modifiée par la Loi n°016/2022) | version consolidée reçue en 2024 | Plancher légal | À confirmer : textes d'application et barèmes non vérifiés depuis 2022.",
        "Contrat national type KSS | version mars 2025 | Engagement | OK.",
        "Politique RH mission RDC | version 2025 | Règle locale | OK, mais jamais confrontée au Code.",
        "Politique RH du siège de KSS | version 2024 | Cadre global | À confronter : § 7.3 sur les heures supplémentaires.",
      ],
    },
    result: "Fait quand : chaque source a une version, une date et un niveau, et la liste des « À confirmer » est écrite. Elle alimentera l'étape 3.",
    pitfall: "Se contenter d'un souvenir (« en RDC c'est 45 heures, je l'ai déjà vu ») au lieu du texte daté. Le jour où un inspecteur demande votre source, le souvenir ne se présente pas.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 2 sur 5',
    title: 'Confronter la politique du siège au Code du Travail',
    intro: "Entrée : la politique du siège, la politique de la mission et le Code. Sortie : pour chaque sujet, la règle qui s'applique réellement. Principe : le Code fixe le plancher ; la politique peut faire mieux, jamais moins.",
    steps: [
      {
        title: 'Construisez la grille de comparaison',
        actions: [
          "Ouvrez une feuille « Grille_siege_vs_Code » avec 5 colonnes : Sujet / Politique du siège (article) / Code du Travail (repère à valider) / Plus favorable au personnel ? / Règle appliquée.",
          "Saisissez un sujet par ligne : heures supplémentaires (seuil), heures supplémentaires (mode de compensation), congé annuel, jours d'ancienneté, préavis.",
        ],
      },
      {
        title: 'Appliquez la règle de décision à chaque ligne',
        actions: [
          "Si la politique est au moins aussi favorable que le Code : appliquez la politique.",
          "Si elle est moins favorable : appliquez le Code, quelle que soit la signature obtenue.",
          "Si le Code n'est pas clair pour vous : écrivez « à valider » et appliquez en attendant la solution la plus favorable à la personne.",
        ],
      },
    ],
    table: {
      columns: ['Sujet', 'Politique du siège de KSS', 'Code (repère à valider)', 'Plus favorable ?', 'Règle appliquée'],
      rows: [
        ['Heures supplémentaires — seuil', '§ 7.3 : au-delà de 50 h par semaine', 'Au-delà de la durée légale (45 h dans l\'exemple)', 'Code', 'Code : seuil à 45 h (à valider)'],
        ['Heures supplémentaires — compensation', '§ 7.3 : récupération heure pour heure, sans majoration', 'Majoration financière, taux différenciés jour, nuit, dimanche, férié', 'Code', 'Code : paiement majoré (à valider)'],
        ['Congé annuel', '§ 6.1 : 1 jour par mois complet', '1 jour ouvrable par mois complet', 'Équivalent', 'Politique et Code concordent'],
        ["Jours d'ancienneté", '§ 6.2 : aucun jour supplémentaire', 'Jours supplémentaires après plusieurs années chez le même employeur', 'Code', "Code : règle exacte à obtenir du juriste"],
        ['Préavis', '§ 9.1 : « selon le contrat »', 'Préavis selon la catégorie et l\'ancienneté', 'À vérifier', 'À valider avant toute rupture'],
      ],
    },
    result: "Fait quand : chaque ligne porte une règle appliquée, et les lignes « à valider » sont reportées dans la liste de l'étape 3. Fil rouge : trois lignes sur cinq donnent raison au Code.",
    pitfall: "Conclure « la politique du siège a été signée par l'employé, donc elle s'applique ». La signature d'une clause qui déroge en défaveur du personnel n'en fait pas une règle valable.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 3 sur 5',
    title: 'Saisir un juriste local avec des questions fermées',
    intro: "La règle d'or : un HR Manager sérieux valide les chiffres en vigueur avec un juriste local ou un cabinet spécialisé en droit social congolais avant de les figer dans une politique. Une question vague donne une réponse vague : posez des questions fermées, numérotées, avec les textes en pièce jointe.",
    steps: [
      {
        title: 'Rédigez le courriel de saisine',
        actions: [
          "Destinataire : le conseil juridique de l'organisation ; copie : votre HR Manager.",
          "Joignez la grille de l'étape 2, la politique du siège (§ 7.3) et le Code consolidé.",
          "Numérotez de 1 à 6 des questions auxquelles on peut répondre par une valeur, oui ou non, avec l'article correspondant.",
          "Demandez une réponse écrite avec référence du texte, et fixez une échéance (ici : jeudi 10 décembre, 9 h).",
        ],
      },
      {
        title: 'Archivez la réponse sans la reformuler',
        actions: [
          "Enregistrez la réponse en PDF avec sa date.",
          "Recopiez dans la fiche de l'étape 4 la valeur, l'article et la date, mot pour mot.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — courriel du lundi 7 décembre, 15 h, à Me T. Kasole',
      lines: [
        "Objet : KSS Goma — validation de repères (heures supplémentaires, congés), réponse souhaitée jeudi 10/12, 9 h",
        "1. Quelle est la durée légale hebdomadaire applicable à nos infirmiers à temps plein ? Article ?",
        "2. Quels sont les taux de majoration des heures supplémentaires de jour, de nuit, de dimanche et de jour férié ?",
        "3. Le repos compensateur peut-il remplacer le paiement ? Dans quelles conditions ?",
        "4. Quels jours de congé additionnels selon l'ancienneté ?",
        "5. Le § 7.3 de la politique du siège (ci-joint) est-il opposable en l'état ?",
        "6. Quelles mentions doit comporter un accord écrit de règlement d'heures supplémentaires, et quelles clauses faut-il éviter ?",
        "Merci. N. Mbusa, HR Officer Goma — copie : A. Kavira",
      ],
    },
    result: "Fait quand : le courriel est parti avec une échéance et la réponse écrite est archivée. Fil rouge : réponse reçue le jeudi 10 décembre à 8 h 40.",
    tip: "Joignez toujours le texte à interpréter. Un juriste qui doit deviner quelle politique vous visez répond à côté, ou facture un échange de plus.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 4 sur 5',
    title: 'Consigner les repères validés dans une fiche datée',
    intro: "La fiche des repères juridiques est le document que vous ouvrirez avant de remplir la checklist et avant chaque discussion sur un congé ou une heure supplémentaire. Elle tient sur une page, avec la source et la date de chaque valeur.",
    steps: [
      {
        title: 'Remplissez la fiche à partir de la réponse du juriste',
        actions: [
          "Ouvrez un document ou une feuille « Fiche_reperes_juridiques_2026-12 ».",
          "Créez 5 colonnes : Repère / Valeur validée / Source (texte, article) / Validé par et date / Prochaine révision.",
          "Recopiez chaque valeur telle que le juriste l'a écrite ; n'arrondissez rien.",
          "Fixez une révision au plus tard à six mois, ou dès qu'un nouveau texte d'application paraît.",
        ],
      },
      {
        title: 'Faites signer et diffusez',
        actions: [
          "Envoyez la fiche à votre HR Manager pour validation (niveau 2 de la matrice de décision).",
          "Transmettez-la à la Payroll Officer et au chef de centre : ce sont eux qui s'en servent au quotidien.",
        ],
      },
    ],
    table: {
      columns: ['Repère', 'Valeur validée (fictive dans l\'exemple)', 'Source', 'Validé par et date', 'Prochaine révision'],
      rows: [
        ['Durée légale hebdomadaire', '45 h', 'Code du Travail, article cité par le juriste', 'Me T. Kasole, 10/12/2026', 'Juin 2027'],
        ['Majoration heure supplémentaire de jour', '+ 30 %', 'Texte d\'application cité par le juriste', 'Me T. Kasole, 10/12/2026', 'Juin 2027'],
        ['Majoration nuit, dimanche, jour férié', '+ 60 %', 'Texte d\'application cité par le juriste', 'Me T. Kasole, 10/12/2026', 'Juin 2027'],
        ['Congé annuel', '1 jour ouvrable par mois complet', 'Code du Travail', 'Me T. Kasole, 10/12/2026', 'Juin 2027'],
        ["Jours d'ancienneté", '1 jour supplémentaire par tranche de 5 ans de service', 'Code du Travail', 'Me T. Kasole, 10/12/2026', 'Juin 2027'],
        ['Politique du siège § 7.3', 'Non opposable en l\'état', 'Avis écrit du juriste', 'Me T. Kasole, 10/12/2026', 'À chaque révision'],
      ],
    },
    result: "Fait quand : chaque valeur a une source et une date, et la fiche est validée par le HR Manager. Les valeurs de cet exemple sont fictives : vous inscrivez celles de votre propre juriste.",
    pitfall: "Recopier les valeurs de l'exemple de ce module dans votre politique. Elles servent à calculer un cas d'école ; les vôtres viennent de votre juriste, par écrit.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 1 — Étape 5 sur 5',
    title: 'Répondre au manager de programme, par écrit et sans conflit',
    intro: "Votre manager de programme n'est pas hostile : il applique la politique qu'on lui a remise. Votre rôle est de lui donner une phrase simple, un chiffre et une solution pratique.",
    steps: [
      {
        title: 'Préparez les trois éléments de votre réponse',
        actions: [
          "La règle : le Code s'applique à tout contrat exécuté en RDC, et le § 7.3 n'est pas opposable en l'état (avis du juriste).",
          "Le chiffre : le coût réel de la différence sur le cas en cours.",
          "La solution : un planning de garde et un suivi des heures qui limitent les heures supplémentaires à l'avenir.",
        ],
      },
      {
        title: 'Envoyez une note de cinq lignes, après un échange oral',
        actions: [
          "Appelez ou rencontrez le manager avant d'écrire : il ne doit pas découvrir le sujet dans un courriel.",
          "Envoyez ensuite la note, en copie du HR Manager, avec la grille de l'étape 2 en pièce jointe.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note envoyée le jeudi 10 décembre, 11 h, à L. Safari',
      lines: [
        "Objet : Heures supplémentaires — le barème du siège ne suffit pas en RDC",
        "1. Le Code du Travail RDC s'applique à tous les contrats exécutés en RDC, y compris les nôtres ; le § 7.3 du siège est plus défavorable (seuil de 50 h, pas de majoration) et n'est pas opposable en l'état (avis de Me Kasole, 10/12).",
        "2. Sur le CTC de Mugunga, la différence représente 156,51 USD pour trois infirmiers sur trois semaines ; sans le Code, le même litige pouvait coûter bien plus cher en inspection.",
        "3. Proposition : un planning de garde en rotation à 45 h maximum pour les infirmiers du CTC dès le 21 décembre, et la feuille hebdomadaire d'heures (voir Procédure 6).",
        "Je reste à votre disposition pour vous présenter la grille. N. Mbusa — copie : A. Kavira",
      ],
    },
    result: "Fait quand : la note est envoyée, le manager l'a lue et vous avez convenu d'une action pratique. C'est votre Livrable 1.",
    tip: "Commencez par l'intérêt du manager (son programme ne doit pas s'arrêter faute de personnel ni se retrouver en inspection), puis par la règle. La règle seule a l'air d'un reproche.",
  },

  // ─── Procédure 2 — Statut des expatriés ────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 2 — Vérifier le statut et les obligations de chaque expatrié (jours 4 à 6)',
    body: "La plupart des litiges avec les expatriés commencent par une phrase : « chez nous, ça ne s'applique pas ». Cette procédure remplace la phrase par un tableau : pour chaque expatrié, quels papiers, quelles obligations, quelle base légale pour chaque exonération invoquée. Fil rouge : le Finance Manager R. Ilunga vous dit que les trois expatriés de KSS à Goma ne paient pas l'IPR. KSS n'a pas d'accord de siège avec l'État congolais. L'audit du bailleur est annoncé pour février 2027.",
    bullets: [
      'Étape 1 — Recenser les expatriés et ce qu\'ils invoquent.',
      "Étape 2 — Contrôler l'autorisation d'emploi et le titre de séjour.",
      'Étape 3 — Exiger la base légale de chaque exonération invoquée.',
      'Étape 4 — Arbitrer par écrit, au bon niveau, et consigner.',
    ],
    result: "Livrable : une grille de base légale par expatrié, signée, et une note d'arbitrage au Head of Mission et à la Finance.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 1 sur 4',
    title: "Recenser les expatriés et ce qu'ils invoquent",
    intro: "Avant de juger, dressez l'état des lieux : qui est expatrié, avec quel employeur contractant, depuis quand, et quel statut chacun affirme avoir. Les affirmations sont des données, pas encore des faits.",
    steps: [
      {
        title: 'Établissez la liste nominative',
        actions: [
          "Ouvrez une feuille « Expatries_Goma_2026-12 ».",
          "Créez les colonnes : Nom / Fonction / Nationalité / Employeur contractant / Date d'arrivée / Statut invoqué / IPR retenu sur les bulletins ?",
          "Remplissez à partir des contrats, des dossiers individuels et des bulletins de paie, jamais de mémoire.",
        ],
      },
      {
        title: 'Notez les affirmations mot pour mot',
        actions: [
          "Demandez à chaque personne : « Quel est votre statut fiscal et social en RDC, et sur quel document repose-t-il ? »",
          "Écrivez la réponse telle quelle dans « Statut invoqué », sans commentaire.",
        ],
      },
    ],
    table: {
      columns: ['Nom', 'Fonction', 'Employeur', 'Arrivée', 'Statut invoqué', 'IPR sur les bulletins'],
      rows: [
        ['A. Fontaine (France)', 'Coordinateur Logistique', 'KSS', '04/01/2026', 'Aucun statut particulier', 'Retenu chaque mois'],
        ['S. Okafor (Nigéria)', 'Épidémiologiste', 'KSS', '01/03/2026', '« Il existe une convention fiscale entre mon pays et la RDC »', 'Non retenu depuis mars (9 mois)'],
        ['M. Rossi (Italie)', 'Médecin référent du CTC', 'KSS', '01/06/2026', "« L'accord de siège, comme dans mon ancienne agence »", 'Non retenu depuis juin (6 mois)'],
      ],
    },
    result: "Fait quand : chaque expatrié a une ligne complète, avec son affirmation recopiée et la mention de ce que la paie fait réellement. Fil rouge : deux personnes sur trois sans IPR.",
    pitfall: "Corriger la paie dès que vous voyez l'écart. Vous ne connaissez pas encore la base légale, et toute retenue ou restitution est une décision de niveau supérieur (étape 4).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 2 sur 4',
    title: "Contrôler l'autorisation d'emploi et le titre de séjour",
    intro: "Un salarié étranger a besoin d'une autorisation d'emploi et d'un titre de séjour en règle pour travailler légalement en RDC. L'absence de ces documents est une irrégularité administrative qui expose l'organisation, pas seulement l'individu. C'est le contrôle le plus rapide et le plus lourd de conséquences.",
    steps: [
      {
        title: 'Vérifiez les pièces de chaque dossier',
        actions: [
          "Ouvrez le dossier individuel et cherchez la copie de l'autorisation d'emploi (la pièce exacte peut s'appeler carte de travail pour étranger ; utilisez le terme confirmé par votre conseil juridique).",
          "Cherchez la copie du titre de séjour ou du visa de long séjour, avec sa date d'échéance.",
          "Saisissez dans le tableau les deux dates de validité.",
        ],
      },
      {
        title: 'Calculez le délai avant échéance et déclenchez les alertes',
        actions: [
          "Calculez le nombre de jours entre aujourd'hui et chaque échéance.",
          "Fixez une règle interne : alerte à 90 jours, action immédiate sous 60 jours (délai de renouvellement souvent long).",
          "Pour une pièce absente du dossier : demandez-la par écrit sous 48 heures et prévenez le HR Manager.",
        ],
      },
    ],
    table: {
      columns: ['Nom', "Autorisation d'emploi", 'Titre de séjour', 'Constat', 'Action'],
      rows: [
        ['A. Fontaine', "Valide jusqu'au 30/06/2027", "Valide jusqu'au 30/06/2027", 'En règle (205 jours avant échéance)', 'Rappel à 90 jours : 01/04/2027'],
        ['S. Okafor', "Valide jusqu'au 31/03/2027", "Échéance 15/01/2027", 'Titre de séjour : 39 jours avant échéance, sous le seuil de 60 jours', 'Renouvellement à lancer cette semaine (responsable : N. Mbusa avec la Logistique)'],
        ['M. Rossi', 'Copie absente du dossier', "Valide jusqu'au 31/05/2027", "Autorisation d'emploi introuvable", "Demande écrite à l'intéressé sous 48 h ; information du HR Manager"],
      ],
    },
    result: "Fait quand : chaque pièce est présente, datée, ou son absence est tracée avec une demande écrite. Aucun expatrié ne travaille sans pièce valide sans que le Head of Mission le sache.",
    tip: "Programmez une alerte récurrente dans votre agenda partagé pour chaque échéance, avec deux rappels (90 et 60 jours). Un titre de séjour expiré est un risque pour la personne autant que pour KSS.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 3 sur 4',
    title: 'Exiger la base légale de chaque exonération invoquée',
    intro: "L'exonération n'est jamais la règle par défaut : c'est une exception qui doit reposer sur un texte identifiable (loi, convention internationale ratifiée, accord de siège signé). La grille de base légale transforme chaque affirmation en une question simple : où est le texte, et qui l'a vérifié ?",
    steps: [
      {
        title: 'Construisez la grille de base légale',
        actions: [
          "Ouvrez une feuille « Base_legale_expatries » avec 6 colonnes : Personne / Privilège ou exonération invoqué / Texte invoqué (loi, convention, accord) / Pièce au dossier / Vérifié par (nom, date) / Conclusion provisoire.",
          "Une ligne par exonération invoquée, pas par personne : une même personne peut en invoquer deux.",
        ],
      },
      {
        title: 'Cherchez le texte avant de conclure',
        actions: [
          "Demandez à la personne le texte précis qu'elle invoque (numéro de convention, accord de siège signé, document de son employeur).",
          "Vérifiez avec votre HR Manager et le siège si KSS a signé un accord de siège ; si oui, procurez-vous-le ; si non, notez-le.",
          "Pour une convention fiscale, saisissez le conseil juridique : l'existence du texte n'implique pas que ses conditions soient remplies.",
          "Tant que la base légale n'est pas vérifiée : conclusion provisoire « soumis au droit commun ».",
        ],
      },
    ],
    table: {
      columns: ['Personne', 'Exonération invoquée', 'Texte invoqué', 'Pièce au dossier', 'Vérifié par', 'Conclusion provisoire'],
      rows: [
        ['A. Fontaine', 'Aucune', '—', '—', 'N. Mbusa, 11/12/2026', 'Soumis ; IPR retenu, conforme'],
        ['S. Okafor', 'Non-imposition de son salaire en RDC', "Convention fiscale entre son pays et la RDC (numéro non fourni)", 'Aucune', "À soumettre à Me Kasole : texte, conditions, durée de présence", 'Soumis jusqu\'à preuve contraire'],
        ['M. Rossi', 'Privilèges et immunités', "Accord de siège (celui de son ancienne agence)", 'Aucune', 'HoM et siège : KSS n\'a pas d\'accord de siège, 11/12/2026', 'Soumis : le texte invoqué ne concerne pas KSS'],
      ],
    },
    result: "Fait quand : chaque exonération invoquée a un texte, une pièce, un vérificateur et une conclusion provisoire. Une ligne sans texte se conclut toujours par « soumis ».",
    pitfall: "Accepter « tout le monde sait que… » ou « c'est comme ça dans toutes les ONG ». Un privilège qui repose sur une pratique observée ailleurs est exactement celui qu'un contrôle remet en cause plusieurs années plus tard.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 2 — Étape 4 sur 4',
    title: 'Arbitrer par écrit, au bon niveau, et consigner',
    intro: "Le constat est de votre niveau ; la décision de régulariser un passé fiscal ne l'est pas. Cette décision engage le Head of Mission, parfois le siège, et nécessite un chiffrage de la Finance et un avis juridique.",
    steps: [
      {
        title: 'Rédigez la note d\'arbitrage',
        actions: [
          "Structure en quatre blocs : constat, risque, décision demandée, calendrier.",
          "Joignez la grille de base légale et le tableau des pièces.",
          "Formulez chaque décision pour une réponse oui ou non (« Autorisez-vous… ? »).",
          "Ne chiffrez pas vous-même l'exposition fiscale : demandez-la à la Finance, qui détient les bulletins et les taux.",
        ],
      },
      {
        title: 'Consignez et suivez',
        actions: [
          "Archivez la note et la décision signée dans le dossier 06_Droit_travail.",
          "Mettez à jour la grille : conclusion définitive, date, décideur.",
          "Planifiez la revue : à chaque arrivée d'un expatrié, la ligne est créée avant le premier bulletin.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — note du lundi 14 décembre, à H. Mwamba et R. Ilunga',
      lines: [
        "Constat : sur trois expatriés, deux (S. Okafor, M. Rossi) ne subissent pas l'IPR depuis mars et juin. Aucun texte identifiable n'a été fourni. KSS n'a pas d'accord de siège.",
        "Risque : redressement fiscal rétroactif à l'audit de février 2027, et information tardive des intéressés.",
        "Décisions demandées : 1. Appliquer l'IPR à compter de la paie de décembre, sauf texte vérifié d'ici le 18/12 ? 2. Demander à la Finance le chiffrage de l'exposition passée (neuf et six mois) ? 3. Décider, avec le siège et l'avis du juriste, du sort de la régularisation du passé ? 4. Autoriser la saisine de Me Kasole sur la convention fiscale du Nigéria ?",
        "Calendrier : décision souhaitée le jeudi 17 décembre, avant la date limite de transmission du 18.",
      ],
    },
    result: "Fait quand : le Head of Mission a répondu par écrit à chaque décision et la grille porte les conclusions définitives. C'est votre Livrable 2.",
    pitfall: "Annoncer vous-même aux deux expatriés une retenue rétroactive sur leur salaire. Ce message se prépare avec le Head of Mission et le conseil juridique, pas dans un couloir.",
  },

  // ─── Procédure 3 — Reconstituer les heures supplémentaires ─────────────
  {
    type: 'concept',
    title: 'Procédure 3 — Ouvrir le dossier et reconstituer les faits : les heures supplémentaires du CTC (jours 1 et 2)',
    body: "Un conflit se gagne ou se perd sur les faits. Avant de discuter avec qui que ce soit, vous avez besoin de trois choses : une note de suivi ouverte à la bonne date, des preuves rassemblées et croisées, et un chiffrage défendable de ce qui est réellement dû. Fil rouge : le lundi 7 décembre à 11 h, vous recevez la lettre du délégué du personnel. À 11 h 30 la note est ouverte ; le mardi 8, les heures sont reconstituées.",
    bullets: [
      "Étape 1 — Ouvrir la note de suivi et rédiger la section 1 (description du litige).",
      "Étape 2 — Réunir et croiser les sources de preuve.",
      "Étape 3 — Calculer les heures supplémentaires semaine par semaine.",
      "Étape 4 — Déduire les heures compensées, chiffrer l'écart et vérifier les taux.",
    ],
    result: "Livrable : la section 1 de la note de suivi remplie, et un tableau de reconstitution avec, pour chaque infirmier, les heures dues et le montant à payer (Livrable 3).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 1 sur 4',
    title: 'Ouvrir la note de suivi dès le premier signe de tension (section 1)',
    intro: "N'attendez jamais qu'un désaccord s'arrange tout seul pour le documenter. Dès le premier signal (une remarque insistante sur des heures non payées, une contestation écrite, une plainte verbale répétée), vous ouvrez la note et vous décrivez le litige tel qu'il vous a été présenté, avec la date exacte du premier signalement.",
    steps: [
      {
        title: 'Créez la note à partir du template',
        actions: [
          "Ouvrez note-suivi-resolution-conflit-travail.docx et enregistrez-le immédiatement sous « Note_suivi_HS_CTC-Mugunga_2026-12-07.docx ».",
          "Numérisez la lettre du délégué et classez-la dans le même dossier, nommée avec sa date de réception.",
          "Accusez réception par écrit dans les 24 heures (voir Procédure 5, étape 1).",
        ],
      },
      {
        title: 'Remplissez la section 1 : Description du litige',
        actions: [
          "Première ligne guide : Employé(s) concerné(s), fonction, base, date du premier signalement. Écrivez les noms, les fonctions, le lieu et la date de la première trace écrite.",
          "Deuxième ligne guide : Nature du litige. Décrivez la contestation avec les mots des demandeurs, les dates de la période, puis l'échéance qu'ils annoncent.",
          "Rédigez des faits, pas de jugement : aucun adjectif sur les personnes, aucune conclusion sur le fond.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — section 1 remplie le lundi 7 décembre 2026, 11 h 30',
      lines: [
        "Employés : G. Masika Kavugho, D. Kambale Vitswamba, T. Syauswa Muhesi, infirmiers, CTC de Mugunga, base de Goma. Premier signalement écrit : lettre de M. Vulembera, délégué du personnel, reçue le lundi 7 décembre 2026. Signalement oral antérieur au chef de centre, mentionné par le délégué, date non documentée.",
        "Nature du litige : contestation du paiement intégral des heures supplémentaires effectuées du 19 octobre au 8 novembre 2026 pendant la réponse à l'épidémie de choléra. Position des infirmiers : heures non payées en totalité. Position de KSS : à vérifier. Échéance annoncée : saisine de l'inspection du travail si aucune réponse avant le 22 décembre 2026.",
      ],
    },
    result: "Fait quand : la note est enregistrée avec la date du jour, la lettre est jointe et la section 1 distingue clairement faits, positions et échéance.",
    pitfall: "Écrire « mouvement d'humeur » ou « revendication infondée » dans la note. Un inspecteur lira ces mots comme un parti pris, et vos collègues les liront aussi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 2 sur 4',
    title: 'Réunir et croiser les sources de preuve',
    intro: "Aucune source n'est suffisante seule. Le relevé manuel d'un chef de centre en surcharge ne prouve rien tout seul, un planning prévisionnel non plus. Vous croisez au moins trois sources indépendantes avant de fixer un chiffre.",
    steps: [
      {
        title: 'Demandez chaque source à son détenteur, par écrit',
        actions: [
          "Au chef de centre : les plannings de garde signés du 19 octobre au 8 novembre et son relevé manuel des heures supplémentaires.",
          "À l'Assistant RH : les feuilles de présence signées des trois infirmiers sur la même période.",
          "À la Payroll Officer : les bulletins de paie d'octobre et de novembre et l'état des lignes « heures supplémentaires » payées.",
          "Dans les dossiers individuels : les contrats, avec le salaire de base et la fonction.",
        ],
      },
      {
        title: 'Notez pour chaque source ce qu\'elle prouve et sa limite',
        actions: [
          "Ouvrez un tableau « Sources_HS » avec 4 colonnes : Source / Détenteur / Ce qu'elle prouve / Limite.",
          "Repérez les écarts entre sources (planning contre présence signée) et listez-les sans les corriger.",
        ],
      },
    ],
    table: {
      columns: ['Source', 'Détenteur', "Ce qu'elle prouve", 'Limite'],
      rows: [
        ['Plannings de garde signés', 'F. Kasereka Mulamba, chef de centre', 'Heures prévues par personne et par jour', 'Ne montre pas les prolongations non planifiées'],
        ['Feuilles de présence signées', 'P. Sifa, Assistant RH', 'Heures réellement présentes', 'Parfois signées en fin de semaine'],
        ['Relevé manuel des heures supplémentaires', 'Chef de centre', 'Heures reconnues et payées par la base', 'Tenu à la main en pleine surcharge, incomplet'],
        ['Bulletins de paie et état des lignes payées', 'C. Bahati, Payroll Officer', 'Heures effectivement payées et taux appliqués', "Ne dit rien des heures jamais déclarées"],
        ['Contrats et dossiers individuels', 'HR Officer', 'Salaire de base, fonction, type de contrat', '—'],
      ],
    },
    result: "Fait quand : les cinq sources sont rassemblées, datées, et les écarts entre elles sont listés. Fil rouge : pour G. Masika, semaine 1, le planning dit 60 h et la présence signée 63 h, soit 3 h de passation prolongée connues.",
    tip: "Quand deux sources divergent, retenez la plus probante (la présence signée par la personne et contresignée par le chef de centre) et notez l'autre en regard. Ne tranchez jamais en silence.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 3 sur 4',
    title: 'Calculer les heures supplémentaires semaine par semaine',
    intro: "Le calcul se fait par semaine civile, nominativement, à partir de la durée légale validée en Procédure 1. Dans cet exemple : 45 heures par semaine, valeur fictive que votre juriste confirmera (réponse prévue le jeudi 10 décembre).",
    steps: [
      {
        title: 'Posez le calcul dans un tableau',
        actions: [
          "Ouvrez une feuille « Reconstitution_HS » avec une ligne par infirmier et les colonnes Semaine 1 / Semaine 2 / Semaine 3 (heures prestées), Total prestées, Heures supplémentaires.",
          "Semaine 1 : lundi 19 octobre au dimanche 25 octobre ; semaine 2 : 26 octobre au 1er novembre ; semaine 3 : 2 au 8 novembre.",
          "Saisissez les heures prestées de la source retenue pour chaque semaine.",
        ],
      },
      {
        title: 'Appliquez la formule semaine par semaine',
        actions: [
          "Pour chaque semaine : heures supplémentaires = MAX(0 ; heures prestées − 45).",
          "Additionnez les trois semaines. Ne calculez jamais sur le total des trois semaines divisé par trois.",
          "Contrôlez : le total prestées de l'équipe et le total des heures supplémentaires se recalculent à partir des lignes.",
        ],
      },
    ],
    table: {
      columns: ['Infirmier', 'Sem. 1 (19-25/10)', 'Sem. 2 (26/10-01/11)', 'Sem. 3 (02-08/11)', 'Heures prestées', 'Heures supplémentaires (> 45 h par semaine)'],
      rows: [
        ['G. Masika Kavugho', '63 h', '66 h', '60 h', '189 h', '18 + 21 + 15 = 54 h'],
        ['D. Kambale Vitswamba', '60 h', '63 h', '60 h', '183 h', '15 + 18 + 15 = 48 h'],
        ['T. Syauswa Muhesi', '57 h', '60 h', '57 h', '174 h', '12 + 15 + 12 = 39 h'],
        ['Total', '180 h', '189 h', '177 h', '546 h', '141 h'],
      ],
    },
    result: "Fait quand : chaque cellule est traçable à une source, et les totaux se recalculent (189 + 183 + 174 = 546 h ; 54 + 48 + 39 = 141 h supplémentaires).",
    pitfall: "Faire la moyenne sur trois semaines. Si une semaine tombe sous 45 h, la moyenne la fait « compenser » une semaine à 60 h, et vous sous-déclarez des heures dues. Le Code se lit semaine par semaine.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 3 — Étape 4 sur 4',
    title: "Déduire les heures compensées, chiffrer l'écart et vérifier les taux",
    intro: "Une heure est compensée seulement si elle a été effectivement payée (ligne au bulletin) ou récupérée (repos pris, daté). Une promesse ne compte pas. Les taux du calcul ci-dessous viennent de la politique de la mission et sont provisoires jusqu'à la réponse du juriste.",
    steps: [
      {
        title: 'Déduisez les heures compensées',
        actions: [
          "Lisez sur les bulletins d'octobre et de novembre le nombre d'heures supplémentaires payées à chaque infirmier.",
          "Calculez : non compensées = effectuées − compensées.",
          "Pour chaque heure non compensée, notez si elle est de jour ou de nuit/dimanche/jour férié, d'après les plannings.",
        ],
      },
      {
        title: 'Chiffrez au bon taux',
        actions: [
          "Taux horaire de base = salaire mensuel ÷ 195 h = 360 ÷ 195 = 1,85 USD.",
          "Heure de jour : 1,85 × 1,30 = 2,405 USD ; heure de nuit ou dimanche : 1,85 × 1,60 = 2,96 USD (taux fictifs).",
          "Montant dû = heures de jour × 2,405 + heures de nuit × 2,96. Notez le montant brut : le net dépend des retenues de la paie.",
          "Dès la réponse du juriste (jeudi 10 décembre), remplacez les taux provisoires par les taux validés et recalculez.",
        ],
      },
    ],
    table: {
      columns: ['Infirmier', 'HS effectuées', 'HS compensées', 'HS non compensées', 'dont jour / nuit-dimanche', 'Montant brut dû'],
      rows: [
        ['G. Masika Kavugho', '54 h', '30 h', '24 h', '14 h / 10 h', '14 × 2,405 + 10 × 2,96 = 63,27 USD'],
        ['D. Kambale Vitswamba', '48 h', '24 h', '24 h', '16 h / 8 h', '16 × 2,405 + 8 × 2,96 = 62,16 USD'],
        ['T. Syauswa Muhesi', '39 h', '27 h', '12 h', '8 h / 4 h', '8 × 2,405 + 4 × 2,96 = 31,08 USD'],
        ['Total', '141 h', '81 h', '60 h', '38 h / 22 h', '156,51 USD'],
      ],
    },
    result: "Fait quand : chaque montant se recalcule, les taux sont sourcés (provisoires puis validés par le juriste) et le tableau est prêt à être présenté à l'échange interne. C'est votre Livrable 3 : 60 heures non compensées, 156,51 USD bruts.",
    tip: "Gardez le détail du calcul dans le dossier : le jour de l'échange interne, la première question sera « comment avez-vous trouvé ce chiffre ? ». Un calcul qu'on peut refaire à l'écran désamorce la moitié de la discussion.",
  },

  // ─── Procédure 4 — Checklist de conformité ─────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 4 — Tenir la checklist de conformité au Code du Travail et lire son tableau de bord (mensuel)',
    body: "La conformité légale ne se contrôle pas une fois par an à la veille d'un audit : elle se maintient chaque mois. La checklist de conformité suit employé par employé les trois points qui reviennent le plus souvent (congés, heures supplémentaires, cotisations sociales) et calcule un statut. Elle est faite pour détecter tôt, pas pour documenter tard. Fil rouge : le mercredi 9 décembre, vous la remplissez pour les 10 agents du CTC et de la base, dont les trois infirmiers du litige.",
    bullets: [
      "Étape 1 — Préparer le classeur sans casser ses formules.",
      "Étape 2 — Saisir l'identité et les congés (colonnes A à E).",
      "Étape 3 — Saisir les heures supplémentaires (colonnes H et I).",
      "Étape 4 — Saisir les cotisations sociales (colonne K).",
      "Étape 5 — Lire les statuts et écrire les actions correctives (colonne O).",
      "Étape 6 — Lire le tableau de bord de l'équipe.",
      "Étape 7 — Présenter, figer et planifier la prochaine mise à jour.",
    ],
    result: "Livrable : le classeur rempli, son tableau de bord, une copie figée en PDF et trois actions correctives datées (Livrable 4).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 1 sur 7',
    title: 'Préparer le classeur sans casser ses formules',
    intro: "Le template contient neuf lignes d'exemple (lignes 5 à 13) et six lignes vides (14 à 19). Les colonnes à fond gris clair sont des formules : vous ne saisissez que dans les autres colonnes.",
    steps: [
      {
        title: 'Sauvegardez et videz les lignes d\'exemple',
        actions: [
          "Ouvrez checklist-conformite-code-travail-rdc.xlsx, puis Fichier > Enregistrer sous : « Checklist_conformite_Goma_2026-12.xlsx ».",
          "Dans l'onglet « Checklist Conformite », sélectionnez les cellules A5 à E13, appuyez sur Suppr ; faites de même pour H5 à I13, K5 à K13 et O5 à O13.",
          "Ne supprimez jamais une ligne entière : vous effaceriez les formules F, G, J, L, M et N.",
        ],
      },
      {
        title: 'Vérifiez les formules et la plage',
        actions: [
          "Cliquez sur F5, G5, J5, L5, M5 et N5 : chacune doit afficher une formule, y compris sur les lignes vides jusqu'à la ligne 19.",
          "Ouvrez l'onglet « Tableau de bord equipe » : les formules comptent les lignes 5 à 19, soit 15 employés au maximum.",
          "Au-delà de 15 employés : insérez des lignes à l'intérieur de la plage (clic droit sur la ligne 19 > Insérer), recopiez les formules des colonnes grises depuis la ligne du dessus et contrôlez que le tableau de bord inclut les nouvelles lignes.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — état du classeur le mercredi 9 décembre, 8 h 30',
      lines: [
        "10 agents à suivre (CTC et base) : lignes 5 à 14 ; les lignes 15 à 19 restent libres.",
        "Tableau de bord après effacement : « Nombre total d'employés suivis » = 0, « Taux de conformité global » vide : le classeur est propre.",
        "Les 9 noms d'exemple du template (Kambale Mwenge, Furaha Balegamire, etc.) ont disparu ; aucune formule des colonnes grises n'a été touchée.",
      ],
    },
    result: "Fait quand : les lignes d'exemple sont vides, les six colonnes de formules sont intactes jusqu'à la ligne 19 et le tableau de bord affiche zéro.",
    pitfall: "Supprimer les lignes d'exemple avec « Supprimer la ligne » : le tableau de bord pointe alors sur une plage décalée et sous-compte vos employés, sans message d'erreur.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 2 sur 7',
    title: "Saisir l'identité et les congés (colonnes A à E)",
    intro: "Une ligne par employé. Les congés sont saisis à partir du registre de congés, jamais de mémoire : la formule ne fait que soustraire, donc la qualité du résultat dépend de la qualité de ce que vous tapez.",
    steps: [
      {
        title: 'Saisissez les colonnes A à C',
        actions: [
          "A — Nom de l'employé : format « Nom Postnom, initiale du prénom », comme dans les exemples du template.",
          "B — Fonction : l'intitulé du contrat.",
          "C — Base / Zone : « Goma, Nord-Kivu ».",
        ],
      },
      {
        title: 'Saisissez les congés dus et pris (colonnes D et E)',
        actions: [
          "D — Congés légaux dus (jours, période) : 1 jour ouvrable par mois complet de service, plus les jours d'ancienneté de la fiche des repères. Pour toute la base à fin novembre : 11 jours ; notez la période dans le nom du fichier.",
          "E — Congés légaux pris (jours) : somme des demandes signées et prises, au registre de congés.",
          "Colonnes F et G (grises) : lisez le résultat sans y toucher. F = D − E ; G = « A corriger » seulement si le solde est négatif.",
        ],
      },
    ],
    table: {
      columns: ['Nom (A)', 'Fonction (B)', 'Dus (D)', 'Pris (E)', 'Solde (F)', 'Statut congés (G)'],
      rows: [
        ['Masika Kavugho, G.', 'Infirmier(e)', '11', '5', '6', 'Conforme'],
        ['Kambale Vitswamba, D.', 'Infirmier(e)', '11', '8', '3', 'Conforme'],
        ['Syauswa Muhesi, T.', 'Infirmier(e)', '11', '2', '9', 'Conforme'],
        ['Kasereka Mulamba, F.', 'Chef de centre CTC', '11', '4', '7', 'Conforme'],
        ['Ndagano Zawadi, L.', "Agent d'hygiène", '11', '11', '0', 'Conforme'],
        ['Mugisha Baraka, S.', 'Chauffeur', '11', '12', '−1', 'A corriger'],
        ['Cishugi Bisimwa, A.', 'Assistant(e) pharmacie', '11', '6', '5', 'Conforme'],
        ['Balume Chirimwami, P.', 'Gardien', '11', '3', '8', 'Conforme'],
        ['Rukunda Mapendo, E.', 'Technicien WASH', '11', '7', '4', 'Conforme'],
        ['Amani Lwanzo, R.', 'Assistant(e) administratif', '11', '11', '0', 'Conforme'],
      ],
    },
    result: "Fait quand : les 10 lignes sont saisies et un seul statut congés est en rouge (S. Mugisha, solde de −1 jour : 12 jours pris pour 11 acquis). Tous les autres soldes sont lus et compris.",
    tip: "Lisez la colonne F en entier, pas seulement la colonne G : un solde de 9 jours en décembre (T. Syauswa) n'est pas signalé par la checklist, mais il deviendra une demande de report ou une contestation en janvier.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 3 sur 7',
    title: 'Saisir les heures supplémentaires (colonnes H et I)',
    intro: "Deux colonnes de saisie : les heures effectuées sur la période et les heures effectivement compensées (payées ou récupérées). Le statut compare les deux nombres ; il ne regarde ni la majoration ni le montant, que vous calculez à part (Procédure 3).",
    steps: [
      {
        title: 'Saisissez H et I pour chaque employé',
        actions: [
          "H — Heures sup. effectuées (période) : le total de la reconstitution de la Procédure 3 pour les trois infirmiers ; pour les autres, la somme des heures au-delà de la durée légale sur la même période (19 octobre au 8 novembre).",
          "I — Heures sup. compensées (payées/récupérées) : seulement les heures payées au bulletin ou récupérées avec un repos daté.",
          "Saisissez 0 (zéro) quand il n'y a pas d'heures supplémentaires : une cellule vide donne « Incomplet » au statut global.",
        ],
      },
      {
        title: 'Lisez la colonne J (statut heures sup.)',
        actions: [
          "J = « Conforme » si H = 0 ou si I est supérieur ou égal à H ; sinon « A corriger ».",
          "Vérifiez dans chaque cas que l'écart H − I correspond à votre tableau de reconstitution.",
        ],
      },
    ],
    table: {
      columns: ['Nom', 'Effectuées (H)', 'Compensées (I)', 'Écart H − I', 'Statut heures sup. (J)'],
      rows: [
        ['Masika Kavugho, G.', '54', '30', '24', 'A corriger'],
        ['Kambale Vitswamba, D.', '48', '24', '24', 'A corriger'],
        ['Syauswa Muhesi, T.', '39', '27', '12', 'A corriger'],
        ['Kasereka Mulamba, F.', '36', '36', '0', 'Conforme'],
        ['Ndagano Zawadi, L.', '20', '20', '0', 'Conforme'],
        ['Rukunda Mapendo, E.', '12', '12', '0', 'Conforme'],
        ['Mugisha, Cishugi, Balume, Amani', '0', '0', '0', 'Conforme'],
      ],
    },
    result: "Fait quand : H et I sont remplis pour les 10 lignes (zéro compris) et les trois statuts « A corriger » correspondent exactement aux trois infirmiers du litige : 24 h, 24 h et 12 h d'écart.",
    pitfall: "Compter dans la colonne I une heure « promise » ou « à payer avec la prochaine paie ». Tant qu'elle n'est pas sur un bulletin ou dans un repos pris, elle n'est pas compensée.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 4 sur 7',
    title: 'Saisir les cotisations sociales (colonne K)',
    intro: "La colonne K reçoit la date de la dernière cotisation sociale versée au nom de l'employé. La colonne L compare cette date à la date du jour : au-delà de 35 jours, la cotisation n'est plus à jour. La preuve vient de la Finance, pas du bulletin.",
    steps: [
      {
        title: 'Obtenez les dates auprès de la Finance',
        actions: [
          "Demandez à R. Ilunga ou à la Payroll Officer la liste des dates du dernier versement à l'INSS par agent, avec le justificatif de versement.",
          "Archivez le justificatif dans le dossier de conformité du mois.",
        ],
      },
      {
        title: 'Saisissez K en texte, au format AAAA-MM-JJ',
        actions: [
          "Avant de taper : sélectionnez la colonne K, clic droit > Format de cellule > Texte.",
          "Saisissez par exemple 2026-11-30 : c'est le format texte des exemples du template, que la formule DATEVALUE sait lire.",
          "Laissez K vide si la date est inconnue : le statut global sera « Incomplet », ce qui est la bonne alerte.",
        ],
      },
    ],
    table: {
      columns: ['Nom', 'Dernière cotisation (K)', 'À jour < 35 jours ? (L)', 'Statut cotisations (M)'],
      rows: [
        ['Masika, Kambale, Syauswa, Kasereka, Ndagano, Mugisha, Balume, Rukunda', '2026-11-30', 'Oui (9 jours)', 'Conforme'],
        ['Cishugi Bisimwa, A.', '2026-09-18', 'Non (82 jours)', 'A corriger'],
        ['Amani Lwanzo, R.', '(vide : date inconnue)', '(vide)', '(vide) : dossier incomplet'],
      ],
    },
    result: "Fait quand : chaque date est appuyée par un justificatif, les calculs de la colonne L sont cohérents avec la date du jour (mercredi 9 décembre : 9 jours depuis le 30 novembre, 82 jours depuis le 18 septembre).",
    pitfall: "Taper une date que Excel convertit en vraie date : la formule affiche #VALEUR! en colonne L. Et la colonne L se recalcule à chaque ouverture : dès le 5 janvier, tous les « Oui » du 30 novembre passeront à « Non » si vous ne mettez pas K à jour. D'où la copie figée de l'étape 7.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 5 sur 7',
    title: 'Lire les statuts globaux et écrire les actions correctives (colonne O)',
    intro: "La colonne N (statut global) est « CONFORME » seulement si les trois points sont conformes, « A CORRIGER » si au moins un des trois points ne l'est pas, « Incomplet » s'il manque une donnée. Un statut n'est utile que s'il débouche sur une action nommée et datée.",
    steps: [
      {
        title: 'Lisez le statut global de chaque ligne',
        actions: [
          "Pour chaque ligne « A CORRIGER » : identifiez le ou les points en cause (G, J ou M).",
          "Pour chaque ligne « Incomplet » : identifiez la donnée manquante et qui peut la fournir.",
        ],
      },
      {
        title: 'Écrivez l\'action corrective dans la colonne O',
        actions: [
          "Format : problème — action — responsable — échéance.",
          "Un seul responsable nommé par action, une échéance antérieure à la prochaine mise à jour.",
          "Ne modifiez jamais une cellule de calcul pour « faire passer » un statut au vert : traitez la cause.",
        ],
      },
    ],
    table: {
      columns: ['Nom', 'Statut global (N)', 'Commentaire / action corrective (O)'],
      rows: [
        ['Masika Kavugho, G.', 'A CORRIGER', '24 h non compensées (14 jour, 10 nuit), 63,27 USD — échange interne le 10/12, paiement par la paie de décembre — N. Mbusa — 18/12'],
        ['Kambale Vitswamba, D.', 'A CORRIGER', '24 h non compensées (16 jour, 8 nuit), 62,16 USD — idem — N. Mbusa — 18/12'],
        ['Syauswa Muhesi, T.', 'A CORRIGER', '12 h non compensées (8 jour, 4 nuit), 31,08 USD — idem — N. Mbusa — 18/12'],
        ['Mugisha Baraka, S.', 'A CORRIGER', 'Solde de congé −1 jour — rectifier le registre ou obtenir l\'accord écrit d\'une avance sur 2027 — E. Kasongo — 15/12'],
        ['Cishugi Bisimwa, A.', 'A CORRIGER', 'Dernière cotisation le 18/09 — obtenir de la Finance la preuve des versements d\'octobre et novembre, ou régulariser — R. Ilunga — 15/12'],
        ['Amani Lwanzo, R.', 'Incomplet', 'Date de dernière cotisation manquante — demander à la Payroll Officer — N. Mbusa — 10/12'],
        ['Kasereka, Ndagano, Balume, Rukunda', 'CONFORME', '—'],
      ],
    },
    result: "Fait quand : chaque ligne en « A CORRIGER » ou « Incomplet » porte une action avec un responsable et une échéance. Fil rouge : 5 lignes à corriger, 1 incomplète, 4 conformes.",
    tip: "Mettez l'échéance d'une action de rectification (congé, cotisation) avant la date limite de transmission de la paie : si c'est la Finance qui doit agir, elle ne pourra le faire qu'avant le cut-off.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 6 sur 7',
    title: "Lire le tableau de bord de l'équipe",
    intro: "L'onglet « Tableau de bord equipe » agrège automatiquement les statuts. Vous n'y saisissez rien : vous lisez, vous interprétez, vous en tirez trois messages.",
    steps: [
      {
        title: 'Lisez les cinq indicateurs',
        actions: [
          "B5 : nombre total d'employés suivis ; B6 : CONFORME ; B7 : A CORRIGER ; B8 : dossiers incomplets.",
          "B9 : taux de conformité global = B6 ÷ B5, formaté en pourcentage.",
          "Vérifiez que B6 + B7 + B8 = B5.",
        ],
      },
      {
        title: 'Lisez la répartition par point de conformité',
        actions: [
          "B14 : employés « A corriger » sur les congés ; B15 : sur les heures supplémentaires ; B16 : sur les cotisations.",
          "Identifiez le point qui concentre les anomalies : c'est lui qui justifie une action collective, pas seulement individuelle.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Cellule', 'Valeur (fil rouge, 9 décembre)', 'Lecture'],
      rows: [
        ["Nombre total d'employés suivis", 'B5', '10', '10 lignes saisies'],
        ['Employés CONFORME', 'B6', '4', 'Kasereka, Ndagano, Balume, Rukunda'],
        ['Employés A CORRIGER', 'B7', '5', 'Trois infirmiers, un chauffeur, une assistante pharmacie'],
        ['Dossiers incomplets', 'B8', '1', 'Amani Lwanzo : date de cotisation manquante'],
        ['Taux de conformité global', 'B9', '40 %', '4 sur 10 ; les incomplets comptent comme non conformes'],
        ['Conges legaux : A corriger', 'B14', '1', 'Mugisha'],
        ['Heures supplementaires : A corriger', 'B15', '3', 'Les trois infirmiers du litige'],
        ['Cotisations sociales : A corriger', 'B16', '1', 'Cishugi'],
      ],
    },
    result: "Fait quand : vous pouvez dire en une phrase ce que dit le tableau. Fil rouge : « 40 % de conformité ; le point faible est celui des heures supplémentaires, 3 cas sur 3 liés au pic de l'épidémie ; congés et cotisations : un cas chacun, déjà assignés. »",
    pitfall: "Conclure que « 40 % » est un score de la base entière. Il ne porte que sur les 10 agents que vous avez saisis : un tableau de bord n'est fiable que si la liste est complète.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 4 — Étape 7 sur 7',
    title: 'Présenter, figer et planifier la prochaine mise à jour',
    intro: "Le tableau de bord est fait pour être présenté à votre Head of Mission ou à votre HR Manager avant qu'un problème mineur ne devienne un dossier de conflit. Il prend trois minutes de réunion de coordination.",
    steps: [
      {
        title: 'Préparez les trois messages',
        actions: [
          "Message 1 : où nous en sommes (taux, répartition).",
          "Message 2 : ce qui est déjà traité (litige heures supplémentaires, note ouverte le 7/12).",
          "Message 3 : ce que vous demandez (une décision, une échéance).",
        ],
      },
      {
        title: 'Figez et programmez',
        actions: [
          "Enregistrez une copie figée : Fichier > Enregistrer sous > PDF, « Checklist_conformite_Goma_2026-12_figee.pdf ». La colonne L dépendant de la date du jour, ce PDF est la seule preuve de l'état au 9 décembre.",
          "Programmez la prochaine mise à jour dans l'agenda partagé : jeudi 7 janvier 2027, avec rappel trois jours avant.",
          "Archivez classeur, PDF et justificatifs dans « 06_Droit_travail_2026-12 ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — présentation du mercredi 9 décembre, 16 h, à A. Kavira et H. Mwamba',
      lines: [
        "« 10 agents suivis, 4 conformes, 5 à corriger, 1 incomplet : 40 %. »",
        "« Le point faible est celui des heures supplémentaires : 3 cas, les trois infirmiers du CTC ; la note de suivi est ouverte depuis le 7 et un échange interne est fixé au 10 décembre. »",
        "« Deux autres cas isolés, congé et cotisation, sont assignés avec échéance au 15 décembre. »",
        "« Je vous demande de valider le principe d'un paiement par la paie de décembre, selon la fiche de repères validée par le juriste jeudi. »",
      ],
    },
    result: "Fait quand : le tableau a été présenté, une décision de principe est notée, la copie PDF est archivée et la prochaine mise à jour est planifiée. C'est votre Livrable 4.",
    tip: "Présentez toujours le point qui va mal avant d'être questionné. Un tableau de bord qui annonce lui-même ses anomalies fait gagner en crédibilité ce qu'un tableau « tout vert » ne fait jamais gagner.",
  },

  // ─── Procédure 5 — Traiter le conflit dans l'ordre ─────────────────────
  {
    type: 'concept',
    title: "Procédure 5 — Traiter le conflit du travail dans l'ordre : interne, médiation, inspection, tribunal (jours 1 à 15)",
    body: "C'est la procédure centrale du module, adaptée du guide pratique source. Elle suit les quatre marches de la résolution d'un conflit du travail, avec un principe simple : chaque étape est documentée dans la note de suivi avant de passer à la suivante, et on ne monte une marche que si la précédente a réellement échoué. Fil rouge : à 11 h le lundi 7 décembre, le Base Manager vous propose de tout régler en cash ; le délégué a fixé son échéance au 22 décembre.",
    bullets: [
      "Étape 1 — Écarter le règlement « cash » et cadrer la réponse.",
      "Étape 2 — Préparer l'échange interne.",
      "Étape 3 — Conduire l'échange interne et le consigner (section 2).",
      "Étape 4 — Cocher l'étape d'escalade (section 3) et décider de la suite.",
      "Étape 5 — Conduire la médiation et la consigner.",
      "Étape 6 — Saisir l'inspection du travail avec un dossier complet, si la médiation échoue.",
      "Étape 7 — Orienter vers le tribunal en dernier recours et tenir les sections 4 et 5 à jour.",
    ],
    result: "Livrable : la note de suivi complète, cinq sections, deux pages maximum, datée et signée à chaque étape (Livrable 5), avec un dossier de saisine de l'inspection prêt à l'emploi.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 1 sur 7',
    title: 'Écarter le règlement « cash » et cadrer la réponse',
    intro: "La tentation d'un règlement rapide et non documenté est la plus forte au moment où la pression monte. Vous la repérez, vous l'expliquez à celui qui la porte, et vous proposez à la place une voie aussi rapide mais prouvée. Trois acteurs à voir le jour même : le délégué, le Base Manager, le HR Manager.",
    steps: [
      {
        title: 'Accusez réception au délégué dans les 24 heures',
        actions: [
          "Envoyez un courriel court : lettre reçue le 7/12, dossier ouvert, échange interne proposé sous trois jours ouvrables.",
          "Ne prenez position ni sur le fond ni sur les montants dans ce premier message.",
        ],
      },
      {
        title: 'Voyez le Base Manager en tête-à-tête avant toute réunion',
        actions: [
          "Reconnaissez son objectif : éviter un dossier qui s'envenime.",
          "Expliquez pourquoi le cash ne règle rien : aucune trace, donc aucune preuve de bonne foi ; aucun bulletin, donc ni retenue fiscale ni cotisation ; aucun effet sur les autres agents du centre qui sont dans la même situation.",
          "Proposez l'alternative : payer ce qui est dû, par la paie de décembre, avec preuve et accord écrit.",
        ],
      },
      {
        title: 'Informez le HR Manager le jour même',
        actions: [
          "Écrivez à A. Kavira : faits, échéance du 22/12, proposition d'action, demande de confirmation du principe.",
          "Gardez la copie dans la note de suivi.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — lundi 7 décembre 2026',
      lines: [
        "15 h 10, au délégué : « Monsieur Vulembera, nous accusons réception de votre lettre de ce jour. Le dossier est ouvert et suivi par mes soins. Je vous propose un échange avec les trois infirmiers, le Base Manager et le chef de centre le jeudi 10 décembre à 14 h 30. Cordialement, N. Mbusa, HR Officer. »",
        "16 h 00, avec E. Kasongo : « Je comprends que vous vouliez fermer ce sujet vite. Si nous payons en cash sans papier, nous n'avons aucune preuve le jour où l'un d'eux, ou un autre agent du CTC, revient sur le sujet, et nous payons hors paie, donc hors IPR et hors INSS. Je vous propose de payer plus vite que par l'inspection, mais par la paie de décembre, avec un accord signé. »",
        "17 h 00, à A. Kavira : « Trois infirmiers du CTC contestent des heures supplémentaires d'octobre-novembre, échéance annoncée le 22/12. Je propose : reconstitution des heures le 8, échange interne le 10, paiement par la paie de décembre, médiation si désaccord. Merci de confirmer le principe. »",
      ],
    },
    result: "Fait quand : le délégué a un accusé de réception daté, le Base Manager a renoncé au cash (ou l'a reporté au HR Manager) et votre HR Manager a répondu par écrit.",
    pitfall: "Dire au Base Manager « c'est illégal » : il l'entendra comme un reproche. Parlez de preuve, de ligne de paie et de risque pour lui aussi : c'est lui qui aurait remis l'argent en main propre.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 2 sur 7',
    title: "Préparer l'échange interne",
    intro: "L'échange interne n'est pas une formalité à cocher : c'est la pièce qui donne sa crédibilité à toute la suite. Il réunit l'employé, son responsable hiérarchique et le RH. Il se prépare comme une réunion de décision : participants, pièces, agenda, limites de votre mandat.",
    steps: [
      {
        title: 'Fixez les participants et la logistique',
        actions: [
          "Convoquez les trois infirmiers, le délégué (s'ils le souhaitent), le chef de centre F. Kasereka Mulamba, le Base Manager E. Kasongo et vous-même.",
          "Choisissez une salle neutre, hors du centre de traitement, à un horaire compatible avec les gardes (14 h 30 le jeudi 10 décembre).",
          "Désignez un preneur de notes : l'Assistant RH P. Sifa.",
        ],
      },
      {
        title: 'Préparez les pièces et le mandat',
        actions: [
          "Imprimez le tableau de reconstitution des heures (Procédure 3), la fiche des repères juridiques validée (Procédure 1) et une feuille de présence à signer.",
          "Vérifiez votre mandat : le HR Manager a confirmé le 9 décembre le principe d'un paiement par la paie des heures reconnues ; vous ne promettez aucun autre montant.",
          "Rédigez un agenda de 75 minutes et envoyez-le avec la convocation.",
        ],
      },
    ],
    table: {
      columns: ['Minutes', 'Point de l\'agenda', 'Qui parle'],
      rows: [
        ['0-5', 'Cadre : objectif, règles de parole, prise de notes, signature en fin de réunion', 'N. Mbusa'],
        ['5-20', 'Position des infirmiers, dans leurs mots', 'Les infirmiers et le délégué'],
        ['20-40', 'Présentation du calcul des heures, source par source', 'N. Mbusa et F. Kasereka Mulamba'],
        ['40-60', 'Points de désaccord, preuves disponibles, preuves manquantes', 'Tous'],
        ['60-75', "Lecture des conclusions, accord ou désaccord, signature", 'N. Mbusa'],
      ],
    },
    result: "Fait quand : la convocation est partie 48 heures avant, l'agenda est joint et vous savez exactement ce que vous pouvez accepter, proposer et refuser.",
    tip: "Placez le chef de centre côté faits (il détient les plannings) et non côté défense : il a tenu le relevé à la main en pleine surcharge, il n'est pas l'accusé de cette réunion.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 3 sur 7',
    title: "Conduire l'échange interne et le consigner (section 2)",
    intro: "Consignez dans la note : la date de l'échange, les personnes présentes, la position de chaque partie et le résultat (accord trouvé, accord partiel, désaccord persistant). Cette étape n'est jamais optionnelle, même quand vous êtes certain que la position de l'employeur est juridiquement solide : c'est cette trace qui protège l'organisation.",
    steps: [
      {
        title: 'Conduisez la réunion',
        actions: [
          "Rappelez le cadre en une minute et laissez les infirmiers parler d'abord, sans les interrompre.",
          "Présentez le calcul en ouvrant le tableau de reconstitution ; invitez chacun à vérifier sa ligne.",
          "Pour chaque désaccord, demandez : « Quelle pièce permettrait de le vérifier ? » et notez qui la détient.",
          "Terminez par la lecture orale du résultat, mot pour mot, avant de signer.",
        ],
      },
      {
        title: 'Remplissez la section 2 dans les 24 heures',
        actions: [
          "Colonne Date : la date de l'échange.",
          "Colonne Action / échange mené : nature, lieu, participants.",
          "Colonne Résultat / position de chaque partie : une phrase par partie, puis le résultat.",
          "Colonne Fait par (nom, fonction) : qui a mené l'échange.",
          "Joignez à la note la feuille de présence signée et le compte rendu.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Action / échange mené', 'Résultat / position de chaque partie', 'Fait par (nom, fonction)'],
      rows: [
        ['07/12/2026', "Réception de la lettre du délégué ; accusé de réception écrit à 15 h 10 ; échange interne convoqué le 10/12", 'Le délégué demande une réponse avant le 22/12 ; KSS accepte le principe de l\'échange', 'N. Mbusa, HR Officer'],
        ['10/12/2026', "Échange interne, 14 h 30 à 15 h 50, salle de réunion de la base. Présents : trois infirmiers, délégué, E. Kasongo, F. Kasereka Mulamba, N. Mbusa, P. Sifa (notes)", "KSS reconnaît 60 h non compensées (156,51 USD brut) à payer par la paie de décembre ; les infirmiers acceptent le calcul. Désaccord sur 12 h de passation prolongée jamais portées sur les feuilles de présence (Masika 6, Kambale 4, Syauswa 2) : KSS demande une preuve, les infirmiers citent le registre de passation de nuit", 'N. Mbusa, HR Officer'],
      ],
    },
    result: "Fait quand : la section 2 contient une ligne datée par échange, les pièces signées sont jointes et le résultat est clairement qualifié. Fil rouge : accord partiel (60 h sur 72 h revendiquées).",
    pitfall: "Écrire « accord » alors que seule une partie a approuvé. Un résultat partiel se note comme partiel, avec les points de désaccord : un dossier qui cache le désaccord perd tout crédit en inspection.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 4 sur 7',
    title: "Cocher l'étape d'escalade (section 3) et décider de la suite",
    intro: "La section 3 dit où en est le dossier sur l'échelle des quatre marches. Vous la mettez à jour à chaque changement d'étape, et c'est elle que l'inspecteur regardera en premier. Règle : accord complet, vous formalisez ; accord partiel ou désaccord, vous montez d'une seule marche, pas plus.",
    steps: [
      {
        title: 'Cochez la bonne case',
        actions: [
          "Section 3 : « Étape d'escalade atteinte » propose quatre cases : tentative de résolution interne (obligatoire, en premier), médiation, inspection du travail, tribunal (dernier recours).",
          "Cochez « Tentative de résolution interne » dès qu'elle a eu lieu ; ne cochez « Médiation » que lorsqu'elle est fixée et acceptée par les parties.",
        ],
      },
      {
        title: 'Décidez de la suite et mettez à jour la section 4',
        actions: [
          "Accord complet : passez à la formalisation (Procédure 6).",
          "Accord partiel : proposez une médiation sous trois jours ouvrables, en gardant une marge avant l'échéance annoncée.",
          "Section 4 : choisissez le statut (en cours / résolu / escalade), saisissez la date de dernière mise à jour et résumez la situation en 2 ou 3 phrases.",
          "Obtenez du Head of Mission le mandat de médiation : jusqu'à combien d'heures, à quel taux, sur quelle preuve.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — jeudi 10 décembre, 17 h, et lundi 14 décembre',
      lines: [
        "Section 3 : case « Tentative de résolution interne » cochée (10/12).",
        "Section 4 — Statut : en cours. Date de la dernière mise à jour : 10/12/2026.",
        "Synthèse : « Échange interne du 10/12 : accord sur 60 heures non compensées, à payer par la paie de décembre. Désaccord sur 12 heures de passation prolongée non portées aux feuilles. Médiation proposée le 16/12 ; échéance annoncée par le délégué : 22/12. »",
        "Lundi 14 décembre : mandat écrit de H. Mwamba, Head of Mission : accepter jusqu'à 12 h au taux de nuit (12 × 2,96 = 35,52 USD) sur preuve écrite du registre de passation. Section 3 : case « Médiation » cochée dès l'accord des parties.",
      ],
    },
    result: "Fait quand : la section 3 reflète exactement l'étape atteinte, la section 4 est datée et votre mandat de médiation est écrit.",
    pitfall: "Cocher « Inspection du travail » par anticipation pour faire pression. La note est un document de preuve : toute case cochée sans fait correspondant se retourne contre vous.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 5 sur 7',
    title: 'Conduire la médiation et la consigner',
    intro: "Si l'échange interne ne suffit pas, vous faites intervenir un médiateur : une personne interne de niveau supérieur non impliquée dans le litige, ou un médiateur externe si votre organisation en dispose. Le médiateur facilite, il ne tranche pas.",
    steps: [
      {
        title: 'Choisissez le médiateur et préparez la séance',
        actions: [
          "Vérifiez que le médiateur n'est partie prenante ni de la décision contestée ni du calcul : ici A. Kavira, HR Manager de mission, qui intervient depuis Kinshasa en visioconférence.",
          "Obtenez l'accord écrit des deux parties sur le choix du médiateur et la date (mercredi 16 décembre, 10 h).",
          "Avant la séance, vérifiez les pièces du désaccord : le 15 décembre, croisez avec le chef de centre le registre de passation de nuit.",
        ],
      },
      {
        title: 'Conduisez la séance',
        actions: [
          "Le médiateur rappelle les règles, laisse chaque partie présenter sa position et peut les rencontrer séparément.",
          "Vous présentez uniquement les faits vérifiés ; vous n'argumentez pas contre les infirmiers.",
          "Quand une piste d'accord apparaît, vous vérifiez qu'elle entre dans votre mandat avant de la valider.",
        ],
      },
      {
        title: 'Consignez dans la même note',
        actions: [
          "Ajoutez une ligne à la section 2 : date, format de la médiation, personnes présentes, issue.",
          "Mettez à jour la section 3 (case Médiation) et la section 4 (statut, date).",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Action / échange mené', 'Résultat / position de chaque partie', 'Fait par (nom, fonction)'],
      rows: [
        ['16/12/2026', "Médiation, 10 h à 11 h 20, en visioconférence avec A. Kavira (HR Manager de mission, non partie au litige). Présents : trois infirmiers, délégué, E. Kasongo, F. Kasereka Mulamba, N. Mbusa", "Le registre de passation de nuit confirme 8 h de prolongation (Masika 5, Kambale 3) ; aucune trace pour les 4 autres (Masika 1, Kambale 1, Syauswa 2). Accord : 8 h retenues au taux de nuit, soit 23,68 USD en plus ; les infirmiers prennent acte pour les 4 h et leur position est consignée", 'A. Kavira, médiatrice ; N. Mbusa, HR Officer'],
      ],
    },
    result: "Fait quand : la médiation a abouti ou échoué sans ambiguïté, et la ligne de la section 2 reflète fidèlement la position de chacun. Fil rouge : accord sur 68 heures au total, 4 heures consignées comme non retenues.",
    tip: "Faites vérifier la pièce contestée avant la médiation, pas pendant. Une médiation qui bute sur une pièce que personne n'a ouverte perd une heure et la confiance des parties.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 6 sur 7',
    title: "Saisir l'inspection du travail avec un dossier complet",
    intro: "Si la médiation échoue, contactez l'Inspection du Travail compétente pour votre zone. Un dossier qui montre une tentative interne réelle et datée, suivie d'une médiation, est traité très différemment d'un dossier brut. Vous préparez ce dossier même si vous espérez ne pas l'utiliser : c'est ce qui vous permet de répondre sans panique à une convocation.",
    steps: [
      {
        title: 'Constituez le dossier de saisine',
        actions: [
          "Note de suivi complète (deux pages maximum), sections 1 à 5 à jour.",
          "Lettre du délégué, plannings de garde, feuilles de présence, bulletins de paie, tableau de reconstitution.",
          "Comptes rendus signés de l'échange interne et de la médiation, avec les feuilles de présence.",
          "Fiche des repères juridiques validée et avis écrit du juriste.",
          "Contrats des trois infirmiers.",
        ],
      },
      {
        title: 'Saisissez et mettez à jour la note',
        actions: [
          "Contactez l'Inspection du Travail compétente pour la zone (Inspection provinciale du Nord-Kivu, à Goma) avec l'accord du Head of Mission ; faites relire votre courrier par le conseil juridique.",
          "Remettez la note comme pièce centrale et laissez l'inspecteur poser ses questions.",
          "Mettez à jour la note : date de saisine, échanges avec l'inspecteur, position ou recommandations ; cochez la case « Inspection du travail ».",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — dossier préparé le mercredi 16 décembre au soir, non déposé',
      lines: [
        "Intercalaire 1 : note de suivi (section 1 à 5).",
        "Intercalaire 2 : lettre du délégué du 07/12 et accusé de réception.",
        "Intercalaire 3 : reconstitution des heures (sources, calcul, taux), plannings, feuilles de présence, bulletins.",
        "Intercalaire 4 : compte rendu de l'échange interne du 10/12 et de la médiation du 16/12, signés.",
        "Intercalaire 5 : fiche des repères juridiques et avis de Me Kasole du 10/12.",
        "Statut : accord signé le 17/12 ; dossier classé le 22/12, sans saisine.",
      ],
    },
    result: "Fait quand : le dossier tient dans une chemise de cinq intercalaires et chaque pièce citée dans la note existe. Fil rouge : dossier prêt, jamais utilisé.",
    pitfall: "Se présenter à l'inspection du travail sans avoir documenté de tentative de résolution amiable préalable. C'est l'erreur la plus fréquente et la plus coûteuse en crédibilité : le dossier donne l'impression que l'employeur n'a rien tenté.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 5 — Étape 7 sur 7',
    title: 'Orienter vers le tribunal en dernier recours et tenir les sections 4 et 5 à jour',
    intro: "Si l'inspection du travail ne permet pas de résoudre le litige, et seulement à ce stade, vous orientez le dossier vers la juridiction compétente, avec un conseil juridique local. Votre note, tenue à jour depuis le premier jour, devient la pièce centrale qui démontre le sérieux et la bonne foi de l'organisation.",
    steps: [
      {
        title: 'Si le tribunal devient nécessaire',
        actions: [
          "Remontez le dossier au Head of Mission et au siège (niveau 3 de la matrice de décision).",
          "Remettez au conseil juridique la note à jour et l'ensemble du dossier de saisine.",
          "Cochez la case « Tribunal (dernier recours) » et mettez à jour la section 4 : statut « escalade ».",
        ],
      },
      {
        title: 'Dans tous les cas, tenez les sections 4 et 5 à jour',
        actions: [
          "Section 4 : statut, date de dernière mise à jour, synthèse en 2 ou 3 phrases.",
          "Section 5 : une ligne par prochaine action, avec la mention « action prévue, responsable et échéance ».",
          "Pied de note : « Rédigé par (nom, fonction) » et la date.",
          "Vérifiez que la note reste à deux pages : détaillez dans les annexes, pas dans la note.",
        ],
      },
    ],
    example: {
      title: 'Fil rouge — sections 3 à 5 au jeudi 17 décembre 2026',
      lines: [
        "Section 3 : cases cochées — Tentative de résolution interne, Médiation. Inspection du travail et tribunal non atteints.",
        "Section 4 — Statut : résolu. Dernière mise à jour : 17/12/2026. Synthèse : « Accord écrit signé le 17/12 sur 68 h supplémentaires non compensées, 180,19 USD bruts, à verser par la paie de décembre. 4 h non retenues faute de trace, position consignée. Aucune saisine nécessaire avant l'échéance du 22/12. »",
        "Section 5 : transmission à la Finance le 18/12 — N. Mbusa ; virement le 28/12 — C. Bahati ; contrôle après virement le 29/12 — N. Mbusa ; mise en place de la feuille hebdomadaire d'heures le 21/12 — E. Kasongo.",
        "Rédigé par N. Mbusa, HR Officer — 17/12/2026.",
      ],
    },
    result: "Fait quand : la note à jour tient sur deux pages, ne contient aucune case cochée sans fait correspondant et pourrait être remise telle quelle à un inspecteur. C'est votre Livrable 5.",
    tip: "Quand le dossier est résolu, ne clôturez pas la note : laissez-la ouverte jusqu'au contrôle après virement. Un conflit n'est fermé que quand l'argent est arrivé sur les bulletins.",
  },

  // ─── Procédure 6 — Clôturer et prévenir ────────────────────────────────
  {
    type: 'concept',
    title: 'Procédure 6 — Clôturer le dossier par un accord écrit et empêcher que cela se reproduise (jours 10 à 22)',
    body: "Un accord oral, même sincère, laisse l'organisation sans preuve si le même employé, ou un autre dans une situation comparable, revient sur le sujet des mois plus tard. Cette procédure transforme l'accord en document signé, l'exécute par la paie et installe l'outil qui évite le prochain litige : le suivi hebdomadaire des heures en période de surcharge.",
    bullets: [
      "Étape 1 — Rédiger et faire signer l'accord écrit.",
      "Étape 2 — Payer par la paie, contrôler après virement et corriger la checklist.",
      "Étape 3 — Installer le suivi hebdomadaire des heures en période de surcharge.",
    ],
    result: "Livrables : l'accord signé, la paie de décembre vérifiée, la checklist mise à jour (Livrable 6) et la feuille hebdomadaire d'heures en service (Livrable 7).",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 1 sur 3',
    title: "Rédiger et faire signer l'accord écrit",
    intro: "L'accord tient sur une page. Il dit ce qui est reconnu, à quel taux, pour quel montant, comment et quand ce sera payé, et ce qui n'a pas été retenu. Il est relu par le conseil juridique avant signature.",
    steps: [
      {
        title: 'Rédigez les sept mentions obligatoires',
        actions: [
          "Parties : les trois infirmiers, KSS représentée par le Base Manager et le HR Officer, le délégué comme témoin.",
          "Objet : heures supplémentaires du 19 octobre au 8 novembre 2026 au CTC de Mugunga.",
          "Heures retenues par personne, avec la répartition jour / nuit-dimanche, les taux et le montant brut.",
          "Mode de paiement : ligne dédiée au bulletin de décembre 2026, par virement du 28 décembre.",
          "Points non retenus et position de chaque partie, mot pour mot.",
          "Date et signatures de toutes les parties.",
          "Mention de remise d'un exemplaire à chaque signataire.",
        ],
      },
      {
        title: 'Faites relire et signer',
        actions: [
          "Envoyez le projet à Me Kasole pour relecture, avec la demande de signaler toute clause à éviter (par exemple une renonciation générale à tous droits, qui n'apporte rien et braque les agents).",
          "Réunissez les signataires le jeudi 17 décembre à 9 h ; lisez le texte à voix haute avant signature.",
          "Classez l'original dans le dossier du conflit et une copie dans chaque dossier individuel.",
        ],
      },
    ],
    table: {
      columns: ['Infirmier', 'HS retenues au total', 'HS à payer (non compensées)', 'dont jour / nuit-dimanche', 'Montant brut'],
      rows: [
        ['G. Masika Kavugho', '59 h (54 + 5)', '29 h', '14 h / 15 h', '14 × 2,405 + 15 × 2,96 = 78,07 USD'],
        ['D. Kambale Vitswamba', '51 h (48 + 3)', '27 h', '16 h / 11 h', '16 × 2,405 + 11 × 2,96 = 71,04 USD'],
        ['T. Syauswa Muhesi', '39 h', '12 h', '8 h / 4 h', '8 × 2,405 + 4 × 2,96 = 31,08 USD'],
        ['Total', '149 h', '68 h', '38 h / 30 h', '180,19 USD'],
      ],
    },
    result: "Fait quand : l'accord est signé par toutes les parties, relu par le juriste et chaque signataire a un exemplaire. Fil rouge : signature le jeudi 17 décembre, 9 h 40.",
    pitfall: "Régler le litige « en cash, à l'amiable » sans document daté et signé : même si l'employé accepte sur le moment, vous n'avez aucune preuve le jour où il, ou un autre dans la même situation, revient sur le sujet.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 2 sur 3',
    title: 'Payer par la paie, contrôler après virement et corriger la checklist',
    intro: "Le paiement passe par la paie : bulletin, retenues et cotisations comprises. Vous transmettez à la Finance avant la date limite, vous vérifiez après le virement, puis vous remettez la checklist à jour.",
    steps: [
      {
        title: 'Transmettez avant la date limite',
        actions: [
          "Reportez la régularisation dans la fiche d'interface RH-Finance de décembre (section 4, changements), avec les montants bruts par personne et la référence à l'accord signé.",
          "Transmettez à C. Bahati le vendredi 18 décembre (le 20 tombe un dimanche), accord signé en pièce jointe.",
          "Faites valider par la Payroll Officer et conservez son accusé.",
        ],
      },
      {
        title: 'Contrôlez après virement',
        actions: [
          "Mardi 29 décembre : ouvrez les trois bulletins de décembre et vérifiez la ligne « heures supplémentaires — régularisation octobre-novembre », les montants bruts et les retenues.",
          "Faites signer à chaque infirmier la réception de son bulletin.",
        ],
      },
      {
        title: 'Corrigez la checklist',
        actions: [
          "Colonne I : saisissez le nombre d'heures désormais compensées ; la colonne H passe aux heures retenues (59, 51, 39).",
          "Relisez les colonnes J et N : les trois lignes passent à « Conforme » et « CONFORME ».",
          "Relisez le tableau de bord, faites une nouvelle copie PDF figée et mettez à jour la colonne O.",
        ],
      },
    ],
    table: {
      columns: ['Indicateur', 'Cellule', 'Avant (9 décembre)', 'Après (29 décembre)'],
      rows: [
        ['Employés CONFORME', 'B6', '4', '8'],
        ['Employés A CORRIGER', 'B7', '5', '2 (Mugisha, Cishugi : actions relancées)'],
        ['Dossiers incomplets', 'B8', '1', '0 (A. Lwanzo : date reçue)'],
        ['Taux de conformité global', 'B9', '40 %', '80 %'],
        ['Heures supplementaires : A corriger', 'B15', '3', '0'],
      ],
    },
    result: "Fait quand : les trois bulletins portent la ligne, les trois infirmiers ont signé la réception et le tableau de bord montre zéro anomalie sur les heures supplémentaires. C'est votre Livrable 6.",
    pitfall: "Passer les trois lignes en « Conforme » à la main avant d'avoir vu les bulletins. La checklist doit refléter le bulletin, pas l'intention de payer.",
  },
  {
    type: 'process',
    stepLabel: 'Procédure 6 — Étape 3 sur 3',
    title: 'Installer le suivi hebdomadaire des heures en période de surcharge',
    intro: "C'est précisément quand l'activité explose (épidémie, afflux de déplacés, urgence nutritionnelle) que le suivi des heures est le plus négligé, alors qu'il devient le plus critique. Un HR Manager senior anticipe ce risque dès les premiers signes de montée en charge ; il ne le découvre pas un mois plus tard sous forme de plainte collective.",
    steps: [
      {
        title: 'Ouvrez la feuille hebdomadaire dès l\'activation de la surcharge',
        actions: [
          "Déclencheur : toute activation d'une réponse d'urgence ou tout dépassement de 45 h pendant deux semaines consécutives.",
          "Créez, pour chaque agent concerné, une feuille hebdomadaire avec : Date / Heure de début / Heure de fin / Heures prestées / dont nuit, dimanche ou jour férié / Visa de l'employé / Visa du chef de centre.",
          "Faites viser la feuille chaque jour par l'employé et le chef de centre : pas de visa, pas d'heure.",
        ],
      },
      {
        title: 'Contrôlez chaque lundi',
        actions: [
          "Chaque lundi, collectez les feuilles et calculez le total de la semaine écoulée par agent.",
          "Au-delà de 45 h : alertez le chef de centre et le Base Manager sous 24 h, rectifiez le planning ou programmez la compensation.",
          "Chaque mois, reportez les totaux dans les colonnes H et I de la checklist.",
        ],
      },
    ],
    table: {
      columns: ['Date', 'Début', 'Fin', 'Heures prestées', 'dont nuit / dim. / férié', 'Visa employé', 'Visa chef de centre'],
      rows: [
        ['Lun 21/12', '07 h', '19 h', '12', '0', 'G.M.', 'F.K.'],
        ['Mar 22/12', '07 h', '19 h', '12', '0', 'G.M.', 'F.K.'],
        ['Mer 23/12', '19 h', '07 h', '12', '12', 'G.M.', 'F.K.'],
        ['Jeu 24/12', '19 h', '07 h', '12', '12', 'G.M.', 'F.K.'],
        ['Sam 26/12', '07 h', '19 h', '12', '0', 'G.M.', 'F.K.'],
        ['Total semaine', '', '', '60 h', '24 h', '', 'Heures sup. : 60 − 45 = 15 h — alerte envoyée le lundi'],
      ],
    },
    result: "Fait quand : la feuille est en service, le premier contrôle du lundi est programmé et un planning à 45 h maximum est proposé au chef de centre. Fil rouge : feuille en service le lundi 21 décembre. C'est votre Livrable 7.",
    tip: "Le but de la feuille n'est pas de payer plus : c'est de prévenir. Un planning ajusté dès le premier dépassement coûte moins qu'un paiement majoré, et surtout moins qu'un litige.",
  },

  // ─── Cas résolu ────────────────────────────────────────────────────────
  {
    type: 'case-study',
    title: "Cas résolu — « Heures supplémentaires non payées, réponse choléra, Nord-Kivu » : le dossier jour par jour",
    scenario: "Rappel : HR Officer de la base de Goma, vous recevez le lundi 7 décembre 2026 la lettre du délégué du personnel : trois infirmiers contestent le paiement intégral de leurs heures supplémentaires du pic de l'épidémie de choléra et saisiront l'inspection du travail avant le 22 décembre. Le Base Manager propose de payer en cash, tout de suite. Mission : traiter le dossier dans l'ordre légal de résolution, sans règlement non documenté, sans arriver à l'inspection sans historique écrit. Voici le déroulé complet tel qu'un professionnel l'aurait conduit.",
    steps: [
      { title: 'Lundi 7 décembre — Ouverture et cadrage', body: "Procédure 3 (étape 1) : note ouverte à 11 h 30. Procédure 5 (étape 1) : accusé de réception à 15 h 10, cash écarté avec le Base Manager à 16 h, HR Manager informée à 17 h. Procédure 1 (étapes 1 à 3) : courriel au juriste à 15 h.", result: 'Dossier ouvert, tracé et cadré le jour même.' },
      { title: 'Mardi 8 décembre — Reconstitution des faits', body: "Procédure 3 (étapes 2 à 4) : cinq sources croisées, 141 heures supplémentaires effectuées, 81 compensées, 60 non compensées.", result: '156,51 USD bruts, calcul provisoire reproductible à l\'écran.' },
      { title: 'Mercredi 9 décembre — Checklist et tableau de bord', body: "Procédure 4 (étapes 1 à 7) : dix agents saisis, 40 % de conformité, point faible identifié (heures supplémentaires). Présentation à 16 h : principe d'un paiement par la paie validé.", result: 'Livrable 4 ; mandat de principe obtenu.' },
      { title: 'Jeudi 10 décembre — Juriste, note au programme, échange interne', body: "Procédure 1 (étapes 4 et 5) : réponse du juriste à 8 h 40, fiche des repères, note à L. Safari à 11 h. Procédure 5 (étapes 2 à 4) : échange interne à 14 h 30, accord partiel (60 h sur 72), section 3 et section 4 renseignées.", result: 'Première pièce du dossier : tentative interne datée et signée.' },
      { title: 'Du vendredi 11 au mardi 15 décembre — Expatriés et préparation de la médiation', body: "Procédure 2 (étapes 1 à 4) : grille de base légale, note d'arbitrage le 14. Procédure 5 (étape 4) : mandat du Head of Mission le 14. Vérification du registre de passation le 15 avec le chef de centre.", result: 'Mandat écrit et pièce contestée vérifiée avant la séance.' },
      { title: 'Mercredi 16 décembre — Médiation', body: "Procédure 5 (étapes 5 et 6) : médiation par A. Kavira en visioconférence, 8 h retenues sur 12 contestées, dossier de saisine préparé « au cas où ».", result: 'Accord sur 68 heures au total, 4 heures consignées.' },
      { title: 'Jeudi 17 décembre — Accord écrit et note finale', body: "Procédure 6 (étape 1) : accord signé à 9 h 40, relu par Me Kasole. Procédure 5 (étape 7) : sections 3 à 5 mises à jour.", result: 'Note résolue, deux pages, signée.' },
      { title: 'Vendredi 18 décembre — Transmission à la Finance', body: "Procédure 6 (étape 2) : régularisation de 180,19 USD portée à la fiche RH-Finance de décembre, transmise avant le cut-off et validée par C. Bahati.", result: 'Paiement par la paie, avec bulletin.' },
      { title: 'Lundi 21 décembre — Prévention', body: "Procédure 6 (étape 3) : feuille hebdomadaire d'heures en service au CTC, planning à 45 h maximum.", result: 'Le prochain pic ne produira pas le même litige.' },
      { title: 'Mardi 22 – mardi 29 décembre — Échéance, virement, contrôle', body: "Le 22, l'échéance annoncée passe sans saisine. Le 28, virement ; le 29, contrôle des trois bulletins et checklist corrigée (80 % de conformité).", result: 'Dossier fermé, prouvé, et l\'argent est sur les bulletins.' },
    ],
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La note de suivi finale, section par section',
    scenario: "Voici la note de suivi de résolution de conflit du travail telle qu'elle est archivée le jeudi 17 décembre 2026, deux pages, avec ses cinq sections et sa signature.",
    steps: [],
    example: {
      title: 'Note remplie (note-suivi-resolution-conflit-travail.docx)',
      lines: [
        "1. Description du litige — Employés : G. Masika Kavugho, D. Kambale Vitswamba, T. Syauswa Muhesi, infirmiers, CTC de Mugunga (base de Goma). Premier signalement écrit : 07/12/2026. Nature : contestation du paiement intégral des heures supplémentaires du 19/10 au 08/11/2026 (réponse choléra). Échéance annoncée : saisine de l'inspection avant le 22/12/2026.",
        "2. Tentatives de résolution interne — 07/12 : accusé de réception, échange convoqué (N. Mbusa). 10/12 : échange interne, 60 h reconnues, 12 h contestées, accord partiel (N. Mbusa). 16/12 : médiation par A. Kavira, 8 h retenues sur 12 contestées, 4 h non retenues faute de trace (A. Kavira, N. Mbusa). 17/12 : accord écrit signé par toutes les parties (N. Mbusa).",
        "3. Étape d'escalade atteinte — cochées : tentative de résolution interne, médiation. Non cochées : inspection du travail, tribunal.",
        "4. Statut actuel — Statut : résolu. Dernière mise à jour : 17/12/2026. Synthèse : accord signé sur 68 h supplémentaires non compensées, 180,19 USD bruts, à verser par la paie de décembre ; 4 h non retenues, position consignée ; aucune saisine nécessaire.",
        "5. Prochaines actions — Transmission à la Finance, N. Mbusa, 18/12 ; virement, C. Bahati, 28/12 ; contrôle des bulletins, N. Mbusa, 29/12 ; feuille hebdomadaire d'heures, E. Kasongo, 21/12.",
        "Rédigé par : N. Mbusa, HR Officer — 17/12/2026.",
      ],
    },
    result: "Contrôle final : deux pages ; chaque date est appuyée par une pièce en annexe (lettre, convocations, feuilles de présence, comptes rendus, accord) ; aucune case cochée sans fait correspondant.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — La checklist de conformité de la base au 9 décembre 2026',
    scenario: "État du classeur Checklist_conformite_Goma_2026-12.xlsx après saisie complète des dix agents, avant correction. Les colonnes F, G, J, L, M et N sont des formules : seules les autres colonnes ont été saisies.",
    steps: [],
    table: {
      columns: ['Nom', 'Solde congés (F)', 'HS effectuées / compensées (H / I)', 'Dernière cotisation (K)', 'Statut global (N)'],
      rows: [
        ['Masika Kavugho, G.', '6', '54 / 30', '2026-11-30', 'A CORRIGER'],
        ['Kambale Vitswamba, D.', '3', '48 / 24', '2026-11-30', 'A CORRIGER'],
        ['Syauswa Muhesi, T.', '9', '39 / 27', '2026-11-30', 'A CORRIGER'],
        ['Kasereka Mulamba, F.', '7', '36 / 36', '2026-11-30', 'CONFORME'],
        ['Ndagano Zawadi, L.', '0', '20 / 20', '2026-11-30', 'CONFORME'],
        ['Mugisha Baraka, S.', '−1', '0 / 0', '2026-11-30', 'A CORRIGER'],
        ['Cishugi Bisimwa, A.', '5', '0 / 0', '2026-09-18', 'A CORRIGER'],
        ['Balume Chirimwami, P.', '8', '0 / 0', '2026-11-30', 'CONFORME'],
        ['Rukunda Mapendo, E.', '4', '12 / 12', '2026-11-30', 'CONFORME'],
        ['Amani Lwanzo, R.', '0', '0 / 0', '(vide)', 'Incomplet'],
      ],
    },
    result: "Tableau de bord : 10 employés suivis, 4 CONFORME, 5 A CORRIGER, 1 Incomplet, taux de conformité 40 % ; répartition des « A corriger » : congés 1, heures supplémentaires 3, cotisations 1. Après paiement du 28 décembre : 8 CONFORME, 2 A CORRIGER, 0 Incomplet, 80 %.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Pourquoi le règlement « cash, tout de suite » ne rend pas le dossier conforme',
    scenario: "L'exercice source demande une phrase par infirmier pour expliquer pourquoi le mode de compensation proposé par le Base Manager (« cash immédiat sans trace ») ne suffit pas, puis le raisonnement sur l'ordre des étapes. Voici les réponses.",
    steps: [
      { title: 'G. Masika Kavugho (24 h, 63,27 USD)', body: "Même payés en main propre, ces 24 heures ne figureraient sur aucun bulletin ni sur aucune déclaration (IPR, INSS), et KSS ne pourrait prouver ni leur montant ni qu'elle les a réglés si G. Masika, ou un collègue, revient sur le sujet." },
      { title: 'D. Kambale Vitswamba (24 h, 62,16 USD)', body: "Le cash écarterait la majoration différenciée jour / nuit-dimanche sans calcul vérifiable : aucun document ne montrerait que le taux du Code a été appliqué, donc rien ne démontrerait la bonne foi de l'employeur." },
      { title: 'T. Syauswa Muhesi (12 h, 31,08 USD)', body: "Sans document daté et signé, un règlement amiable ne ferme pas le dossier : le délégué garde son échéance du 22 décembre et l'infirmier conserve son recours, puisqu'aucune preuve d'accord n'existe." },
      { title: 'Ordre des étapes : pourquoi interne puis médiation puis inspection', body: "L'échange interne daté du 10 décembre est la pièce qui donne sa crédibilité à tout le reste ; la médiation traite le seul point resté ouvert (12 heures) ; l'inspection n'est préparée que comme garantie. Sauter une marche pour gagner trois jours aurait ôté au dossier sa meilleure protection." },
      { title: 'Le coût réel du raccourci', body: "Le règlement cash aurait économisé quelques jours et coûté un litige reproductible avec les autres agents du CTC, un risque d'audit du bailleur sur des paiements hors paie, et la confiance du délégué du personnel. Le règlement par la paie a coûté un peu plus de temps et 180,19 USD, tous justifiés." },
    ],
    result: "Résultat : l'organisation conclut en dix jours et règle ce qu'elle devait, avec une preuve, sans saisine, et avec un outil (la feuille hebdomadaire) qui évite le prochain litige.",
  },
  {
    type: 'case-study',
    title: 'Cas résolu — Les expatriés de Goma : grille de base légale et décisions du Head of Mission',
    scenario: "Le jeudi 17 décembre, H. Mwamba répond à la note d'arbitrage du 14. Voici l'état de la grille de base légale et des pièces après ses décisions.",
    steps: [],
    table: {
      columns: ['Personne', 'Pièces (autorisation, séjour)', 'Exonération invoquée', 'Conclusion définitive', 'Décision du Head of Mission'],
      rows: [
        ['A. Fontaine', 'Valides jusqu\'au 30/06/2027', 'Aucune', 'Soumis ; IPR retenu', 'Aucune action ; rappel au 01/04/2027'],
        ['S. Okafor', "Autorisation jusqu'au 31/03/2027 ; séjour jusqu'au 15/01/2027", "Convention fiscale (texte non fourni)", 'Soumis jusqu\'à preuve contraire', "IPR retenu dès la paie de décembre ; saisine de Me Kasole autorisée ; renouvellement du séjour lancé le 11/12"],
        ['M. Rossi', "Séjour jusqu'au 31/05/2027 ; autorisation reçue le 12/12, valide jusqu'au 28/02/2027", 'Accord de siège de son ancienne agence', 'Soumis : KSS n\'a pas d\'accord de siège', "IPR retenu dès la paie de décembre ; renouvellement de l'autorisation à lancer sans délai (alerte à 90 jours dépassée)"],
      ],
    },
    result: "Régularisation du passé (neuf et six mois d'IPR non retenu) : chiffrage demandé à la Finance pour le 8 janvier 2027, décision au niveau Head of Mission et siège avec avis du juriste, avant l'audit du bailleur de février. Rien n'est retenu rétroactivement sur salaire avant cette décision écrite.",
  },

  // ─── Exercices ─────────────────────────────────────────────────────────
  {
    type: 'exercise',
    title: "Exercice — À vous : la base de Bunia, février 2027",
    instructions: "Vous êtes HR Officer de la base de Bunia (Ituri, fictive, même ONG). Nous sommes le lundi 8 février 2027. Vous venez de recevoir une lettre manuscrite de R. Tabu Ngabu, technicien logistique : 8 heures supplémentaires de janvier ne lui ont pas été payées et il saisira l'inspection du travail le jeudi 18 février si rien n'est fait. Le Base Manager T. Baraka propose de lui donner « 25 USD en liquide, il n'a pas besoin de signer ». Par ailleurs, le Program Manager expatrié L. Verhaegen (Belgique), arrivé le 4 janvier 2027, affirme n'avoir « jamais payé d'IPR, l'ONG m'a dit que c'était exonéré » ; il n'a fourni aucun texte et KSS n'a pas d'accord de siège. Salaire de base de R. Tabu Ngabu : 390 USD par mois. Repères validés par le juriste : durée légale 45 h, majoration +30 % de jour et +60 % de nuit ou dimanche. Sur les 8 heures non compensées, 5 sont de jour et 3 de dimanche. Vous avez les données de la checklist pour 6 agents (contrôle au 8 février 2027).",
    table: {
      columns: ['Nom', 'Fonction', 'Congés dus 2026', 'Congés pris', 'HS janvier effectuées', 'HS compensées', 'Dernière cotisation'],
      rows: [
        ['Lokana Mandefu, P.', 'Chauffeur', '12', '14', '0', '0', '2027-01-28'],
        ['Mbilizi Kasole, A.', 'Infirmière', '12', '12', '30', '30', '2027-01-28'],
        ['Tabu Ngabu, R.', 'Technicien logistique', '12', '6', '16', '8', '2027-01-28'],
        ['Kisembe Bora, M.', 'Gardien', '12', '9', '0', '0', '2026-12-10'],
        ['Baluku Ezra, C.', 'Agent de santé communautaire', '12', '5', '0', '0', '(date inconnue)'],
        ['Lumbu Nsimba, V.', 'Assistante administrative', '12', '12', '4', '4', '2027-01-28'],
      ],
    },
    deliverable: "Trois livrables : (1) la checklist de conformité des six agents avec le tableau de bord lu ; (2) la note de suivi (sections 1 à 5, deux pages maximum) du dossier de R. Tabu Ngabu, avec la tentative interne que vous organisez avant toute autre action, l'étape d'escalade que vous êtes prêt à enclencher si l'accord échoue avant le 18 février, et une phrase expliquant pourquoi le « liquide sans signature » ne suffit pas ; (3) une ligne de grille de base légale pour L. Verhaegen et la décision que vous proposez.",
  },
  {
    type: 'exercise',
    title: "Exercice — Les étapes à suivre pour la base de Bunia",
    deliverable: "La note de suivi chiffrée, la checklist de conformité renseignée, l'accusé de réception et la conduite à tenir sur le conflit et sur l'expatrié.",
    steps: [
      {
        title: 'Ouvrez le dossier et chiffrez (Procédure 3, étapes 1 et 4)',
        actions: [
          "Ouvrez la note de suivi à la date du jour, remplissez la section 1 avec des faits (premier signalement : lettre du 08/02/2027).",
          "Calculez le montant dû à R. Tabu Ngabu : taux horaire de base, taux de jour, taux de dimanche, montant brut.",
        ],
      },
      {
        title: 'Remplissez la checklist (Procédure 4, étapes 1 à 6)',
        actions: [
          "Saisissez les six lignes en respectant le format texte de la colonne K ; saisissez 0 quand il n'y a pas d'heures supplémentaires.",
          "Lisez les colonnes G, J, M et N, écrivez les actions correctives en colonne O et relevez les indicateurs du tableau de bord.",
        ],
      },
      {
        title: "Traitez le conflit dans l'ordre (Procédure 5, étapes 1 à 4)",
        actions: [
          "Rédigez l'accusé de réception à R. Tabu Ngabu et la phrase que vous direz à T. Baraka pour écarter le liquide sans signature.",
          "Fixez la date de l'échange interne (avant le 18 février) et remplissez la section 2, puis cochez la section 3 selon l'étape réellement atteinte.",
          "Renseignez les sections 4 et 5.",
        ],
      },
      {
        title: "Traitez l'expatrié (Procédure 2, étapes 3 et 4)",
        actions: [
          "Complétez une ligne de la grille de base légale pour L. Verhaegen : exonération invoquée, texte, pièce, vérificateur, conclusion provisoire.",
          "Formulez la décision demandée au Head of Mission pour une réponse oui ou non.",
        ],
      },
    ],
    tip: "Faites le calcul des 8 heures avant de rédiger la note : un montant exact, reproductible, change le ton de toute la discussion avec le Base Manager.",
    pitfall: "Écrire dans la section 3 que le dossier est à l'étape « médiation » avant qu'elle ait été proposée et acceptée. La note ne décrit que ce qui s'est réellement passé.",
  },
  {
    type: 'checklist',
    title: 'Auto-correction — votre livrable est correct si…',
    items: [
      "Checklist : 6 lignes saisies ; colonne K saisie en texte AAAA-MM-JJ ; les formules grises sont intactes ; aucune cellule de heures supplémentaires laissée vide.",
      "Statuts attendus au 8 février 2027 : P. Lokana « A CORRIGER » (solde de congés −2), A. Mbilizi « CONFORME », R. Tabu Ngabu « A CORRIGER » (16 h effectuées, 8 h compensées), M. Kisembe « A CORRIGER » (cotisation du 10/12/2026, 60 jours), C. Baluku « Incomplet », V. Nsimba « CONFORME ».",
      "Tableau de bord : 6 suivis, 2 CONFORME, 3 A CORRIGER, 1 Incomplet, taux de conformité 33 % ; répartition : congés 1, heures supplémentaires 1, cotisations 1.",
      "Montant de R. Tabu Ngabu : taux horaire 390 ÷ 195 = 2,00 USD ; jour 2,00 × 1,30 = 2,60 USD ; dimanche 2,00 × 1,60 = 3,20 USD ; 5 × 2,60 + 3 × 3,20 = 13,00 + 9,60 = 22,60 USD bruts.",
      "Note, section 1 : faits datés (lettre du 08/02/2027), sans jugement ; section 2 : une ligne datée (accusé de réception du 08/02) et l'échange interne fixé au plus tard le 11 février, avec les personnes présentes.",
      "Section 3 : seule la case « Tentative de résolution interne » est cochée tant que l'échange n'a pas eu lieu ; la médiation est prévue comme étape suivante, avec un médiateur non impliqué, mais non cochée.",
      "Section 4 : statut « en cours », date du jour, synthèse en 2 ou 3 phrases ; section 5 : au moins trois actions, chacune avec un responsable et une échéance antérieure au 18 février.",
      "La phrase sur le « liquide sans signature » parle de preuve, de bulletin et de risque de récidive, pas seulement de légalité, et refuse sans braquer le Base Manager.",
      "Grille de base légale : pour L. Verhaegen, texte invoqué « aucun », pièce « aucune », conclusion provisoire « soumis », vérification demandée au HR Manager et au siège (accord de siège inexistant) ; aucune retenue rétroactive annoncée avant décision écrite.",
      "La note tient en deux pages maximum et l'ordre interne, médiation, inspection, tribunal est respecté sans marche sautée.",
    ],
  },
  {
    type: 'exercise',
    title: 'Exercice complémentaire — Appliquez la méthode à votre propre mission',
    instructions: "Si vous êtes en poste, refaites les Procédures 1, 4 et 6 sur votre base réelle, avec les vrais documents. Si vous n'êtes pas en poste, appliquez la Procédure 1 à l'ONG où vous postulez, à partir de sa politique RH publiée, et la Procédure 4 à l'équipe fictive de Bunia.",
    steps: [
      { title: 'Votre fiche de repères juridiques', actions: ['Sources listées et datées, grille politique contre Code remplie.', "Questions fermées prêtes à envoyer à un juriste local, avec les textes en pièce jointe."] },
      { title: 'Votre checklist de conformité', actions: ['Tous vos agents saisis, colonne K au format texte.', 'Une action corrective nommée et datée pour chaque ligne « A CORRIGER » ou « Incomplet ».', 'Copie PDF figée archivée.'] },
      { title: 'Votre dispositif de prévention', actions: ["Feuille hebdomadaire d'heures prête pour la prochaine période de surcharge.", "Procédure interne écrite : qui ouvre la note de suivi, à quelle date, avec quel premier échange."] },
    ],
    deliverable: "Votre fiche de repères validée par votre hiérarchie, votre checklist du mois avec son tableau de bord et un modèle de note de suivi prêt à être ouvert au premier signe de tension.",
    pitfall: "N'utilisez jamais les données réelles de vos collègues (noms, salaires, heures) en dehors des outils et dossiers RH sécurisés de votre organisation, y compris pour un exercice de formation.",
  },

  // ─── Pièges, récapitulatif, clôture ───────────────────────────────────
  {
    type: 'warning',
    title: 'Pièges fréquents (25 ans de terrain condensés)',
    items: [
      "Appliquer uniquement la politique interne du siège en ignorant le Code du Travail local : une politique RH globale ne prévaut jamais sur le droit du travail du pays où le contrat est exécuté. Premier réflexe : la confronter au Code, ligne par ligne, et faire valider le chiffre par un juriste.",
      "Se présenter à l'inspection du travail sans tentative de résolution documentée : c'est l'erreur la plus fréquente et la plus coûteuse en crédibilité. Ouvrez la note au premier signe de tension et datez chaque échange.",
      "Confondre statut d'expatrié et exonération automatique : sans texte identifiable (loi, convention ratifiée, accord de siège signé), la personne est soumise au droit commun. Une exonération « parce que tout le monde sait que… » est découverte plusieurs années plus tard, lors d'un contrôle.",
      "Régler un litige « en cash, à l'amiable » sans trace écrite : pas de bulletin, pas d'IPR, pas d'INSS, pas de preuve, et un litige reproductible. Payez par la paie, avec un accord daté et signé.",
      "Laisser le suivi des heures supplémentaires glisser en période de surcharge : c'est le moment où il est le plus critique. Ouvrez la feuille hebdomadaire dès l'activation d'une réponse d'urgence.",
      "Calculer les heures supplémentaires sur une moyenne de période ou compter dans la colonne « compensées » des heures seulement promises : comptez par semaine et uniquement ce qui est sur un bulletin ou dans un repos pris.",
      "Écraser les formules de la checklist ou saisir la date de cotisation sous forme de vraie date : les statuts deviennent faux ou affichent #VALEUR!. Saisissez en texte AAAA-MM-JJ et ne touchez jamais les colonnes grises.",
      "Cocher dans la note de suivi une étape qui n'a pas eu lieu, ou écrire « accord » pour un accord partiel : la note est une pièce de preuve, elle ne décrit que ce qui s'est réellement passé.",
      "Annoncer vous-même aux intéressés une retenue ou une restitution rétroactive : cette décision engage le Head of Mission, parfois le siège, et demande un chiffrage de la Finance et un avis juridique.",
    ],
  },
  {
    type: 'recap',
    title: 'Vos réalisations dans ce module',
    items: [
      "Vous avez construit la fiche des repères juridiques de votre mission : sources datées, politique du siège confrontée au Code, valeurs validées par un juriste local avec leur article et leur date.",
      "Vous avez répondu à un manager de programme par une note de cinq lignes, avec la règle, le chiffre et une solution pratique.",
      "Vous avez vérifié le statut de chaque expatrié : pièces, échéances, base légale de chaque exonération invoquée, note d'arbitrage au bon niveau.",
      "Vous avez reconstitué des heures supplémentaires semaine par semaine à partir de sources croisées, déduit les heures compensées et chiffré le montant dû à chaque agent.",
      "Vous avez rempli la checklist de conformité et lu son tableau de bord : statuts, actions correctives nommées et datées, copie PDF figée.",
      "Vous avez conduit un conflit du travail dans l'ordre (tentative interne datée, médiation, dossier d'inspection prêt) et tenu une note de suivi de deux pages, signée à chaque étape.",
      "Vous avez clôturé par un accord écrit, un paiement par la paie, un contrôle après virement et une checklist corrigée.",
      "Vous avez installé un suivi hebdomadaire des heures pour que la prochaine période de surcharge ne produise pas le même litige.",
    ],
  },
  {
    type: 'checklist',
    title: 'Avant de passer au module suivant',
    items: [
      "Je sais citer les trois points opérationnels du Code du Travail RDC à vérifier chaque mois pour chaque employé (congés, heures supplémentaires, droits fondamentaux et cotisations).",
      "Je sais expliquer pourquoi une politique RH de siège ne peut jamais déroger, en défaveur du personnel, au droit du travail local, et je peux le dire à un manager de programme en trois phrases.",
      "Je sais expliquer pourquoi un statut d'expatrié n'entraîne aucune exonération fiscale ou sociale automatique, et je sais constituer la grille de base légale.",
      "Je peux citer, dans l'ordre exact, les quatre étapes de résolution d'un conflit du travail et la trace à conserver à chacune.",
      "J'ai complété une checklist de conformité au Code du Travail RDC avec le template fourni et je sais lire son tableau de bord.",
      "J'ai rédigé une note de suivi de résolution de conflit du travail tenant sur une à deux pages, avec une tentative interne datée avant toute escalade.",
      "Je sais reconnaître, dans une situation de terrain, la tentation d'un règlement rapide et non documenté, et je sais proposer à la place une voie aussi rapide mais prouvée.",
      "J'ai réalisé l'exercice de la base de Bunia et mon livrable passe toutes les lignes de l'auto-correction.",
    ],
  },
  {
    type: 'closing',
    nextModuleHint: "Module 07 — Protection, Bien-Être & Prévention du Burnout : vous savez désormais garder une équipe en règle avec le droit et traiter un conflit dans l'ordre. Vous allez maintenant protéger les personnes elles-mêmes : Code de Conduite et prévention des abus (PSEA), détection précoce du burnout, canaux de signalement sécurisés.",
  },
]
